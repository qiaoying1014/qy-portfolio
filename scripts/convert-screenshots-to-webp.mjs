import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const screenshotRoots = [
  "public/dfleet-app",
  "public/diamond-golf-zon",
  "public/han-patisserie",
];

const supportedExtensions = new Set([".png", ".jpg", ".jpeg"]);
const quality = Number.parseInt(process.env.WEBP_QUALITY ?? "82", 10);

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      images.push(...(await collectImages(entryPath)));
      continue;
    }

    if (entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(entryPath);
    }
  }

  return images;
}

async function convertImage(sourcePath) {
  const outputPath = sourcePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const [sourceStats, outputStats] = await Promise.all([
    stat(sourcePath),
    stat(outputPath).catch(() => null),
  ]);

  if (outputStats && outputStats.mtimeMs >= sourceStats.mtimeMs) {
    return { sourcePath, outputPath, skipped: true };
  }

  await sharp(sourcePath)
    .webp({
      effort: 6,
      quality,
      smartSubsample: true,
    })
    .toFile(outputPath);

  return { sourcePath, outputPath, skipped: false };
}

const roots = screenshotRoots.map((root) => path.resolve(root));
const images = (await Promise.all(roots.map(collectImages))).flat();

if (images.length === 0) {
  console.log("No screenshot images found.");
  process.exit(0);
}

let converted = 0;
let skipped = 0;

for (const imagePath of images) {
  const result = await convertImage(imagePath);
  const relativeSource = path.relative(process.cwd(), result.sourcePath);
  const relativeOutput = path.relative(process.cwd(), result.outputPath);

  if (result.skipped) {
    skipped += 1;
    console.log(`Skipped ${relativeOutput}; newer than ${relativeSource}`);
  } else {
    converted += 1;
    console.log(`Converted ${relativeSource} -> ${relativeOutput}`);
  }
}

console.log(`Done. Converted ${converted}; skipped ${skipped}.`);
