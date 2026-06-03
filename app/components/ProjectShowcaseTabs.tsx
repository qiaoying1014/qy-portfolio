"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  ProjectScreenshotViewer,
  type ProjectScreenshot,
} from "./ProjectScreenshotViewer";

export type ProjectShowcase = {
  name: string;
  focus: string;
  description: string;
  screenshots: ProjectScreenshot[];
};

type ProjectShowcaseTabsProps = {
  projects: ProjectShowcase[];
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ProjectShowcaseTabs({ projects }: ProjectShowcaseTabsProps) {
  const defaultProject = projects[0] ? slugify(projects[0].name) : undefined;

  if (!defaultProject) {
    return null;
  }

  return (
    <Tabs defaultValue={defaultProject} className="mt-12">
      <div className="overflow-x-auto pb-2">
        <TabsList
          aria-label="Project screenshots"
          className="inline-flex h-auto w-max min-w-full justify-start gap-2 rounded-none bg-transparent p-0"
        >
          {projects.map((project) => (
            <TabsTrigger
              key={project.name}
              value={slugify(project.name)}
              className="h-auto flex-none shrink-0 whitespace-nowrap rounded-none border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-600 shadow-none transition hover:border-zinc-950 hover:text-zinc-950 data-active:border-zinc-950 data-active:bg-zinc-950 data-active:text-white data-active:shadow-none"
            >
              {project.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {projects.map((project) => (
        <TabsContent
          key={project.name}
          value={slugify(project.name)}
          className="mt-4 border border-zinc-200 bg-white p-5 sm:p-6"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{project.focus}</p>
          <h3 className="mt-3 text-2xl font-semibold">{project.name}</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            {project.description}
          </p>
          <ProjectScreenshotViewer screenshots={project.screenshots} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
