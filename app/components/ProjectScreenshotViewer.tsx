"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export type ScreenshotDisplay = "mobile" | "tablet" | "desktop";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
  display: ScreenshotDisplay;
};

type ProjectScreenshotViewerProps = {
  screenshots: ProjectScreenshot[];
};

const previewClasses: Record<ScreenshotDisplay, string> = {
  mobile: "mx-auto aspect-[410/910] w-full max-w-[360px]",
  tablet: "mx-auto aspect-[954/888] w-full max-w-3xl",
  desktop: "aspect-[1908/990] w-full",
};

const thumbnailClasses: Record<ScreenshotDisplay, string> = {
  mobile: "aspect-[410/910] w-20 md:w-16",
  tablet: "aspect-[954/888] w-28 md:w-20",
  desktop: "aspect-[1908/990] w-36 md:w-24",
};

export function ProjectScreenshotViewer({ screenshots }: ProjectScreenshotViewerProps) {
  const [selectedSrc, setSelectedSrc] = useState(screenshots[0]?.src ?? "");
  const selectedScreenshot =
    screenshots.find((screenshot) => screenshot.src === selectedSrc) ?? screenshots[0];

  if (!selectedScreenshot) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start">
      <div className="order-1 min-w-0 flex-1 md:order-2">
        <Dialog>
          <figure>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={`View larger screenshot: ${selectedScreenshot.caption}`}
                className={cn(
                  "group relative block overflow-hidden border border-zinc-200 bg-zinc-100 transition hover:border-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
                  previewClasses[selectedScreenshot.display]
                )}
              >
                <Image
                  src={selectedScreenshot.src}
                  alt={selectedScreenshot.alt}
                  fill
                  sizes="(min-width: 1024px) 960px, (min-width: 640px) 80vw, 100vw"
                  className="object-contain p-2"
                />
                <span className="absolute right-3 top-3 border border-zinc-950 bg-white px-3 py-1.5 text-xs font-medium text-zinc-950 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  View larger
                </span>
              </button>
            </DialogTrigger>
            <figcaption className="mt-4 text-center text-sm font-medium text-zinc-700">
              {selectedScreenshot.caption}
            </figcaption>
          </figure>

          <DialogContent className="max-h-[92vh] max-w-[calc(100vw-2rem)] overflow-hidden rounded-none border border-zinc-200 bg-white p-4 sm:max-w-6xl">
            <DialogTitle className="sr-only">{selectedScreenshot.caption}</DialogTitle>
            <DialogDescription className="sr-only">{selectedScreenshot.alt}</DialogDescription>
            <div
              className={cn(
                "relative mx-auto w-full",
                selectedScreenshot.display === "mobile"
                  ? "h-[82vh] max-w-105"
                  : "h-[82vh]"
              )}
            >
              <Image
                src={selectedScreenshot.src}
                alt={selectedScreenshot.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm font-medium text-zinc-700">
              {selectedScreenshot.caption}
            </p>
          </DialogContent>
        </Dialog>
      </div>

      <div className="order-2 overflow-x-auto pb-2 md:order-1 md:max-h-160 md:w-28 md:shrink-0 md:overflow-x-visible md:overflow-y-auto md:pb-0 md:px-2">
        <div className="flex w-max min-w-full justify-center gap-3 md:w-full md:min-w-0 md:flex-col md:items-center md:justify-start">
          {screenshots.map((screenshot) => {
            const isActive = screenshot.src === selectedScreenshot.src;

            return (
              <button
                key={screenshot.src}
                type="button"
                aria-label={`Show screenshot: ${screenshot.caption}`}
                aria-pressed={isActive}
                onClick={() => setSelectedSrc(screenshot.src)}
                className={cn(
                  "shrink-0 border bg-zinc-100 p-1 transition hover:border-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
                  isActive ? "border-zinc-950" : "border-zinc-200"
                )}
              >
                <span
                  className={cn(
                    "relative block overflow-hidden bg-white",
                    thumbnailClasses[screenshot.display]
                  )}
                >
                  <Image
                    src={screenshot.src}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
