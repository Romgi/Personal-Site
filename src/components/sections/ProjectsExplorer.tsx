"use client";

import { useMemo, useState } from "react";

import { EmptyState } from "@/components/ui/EmptyState";
import { ProjectCard } from "@/components/sections/ProjectCard";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectsExplorerProps = {
  projects: Project[];
  tags: string[];
};

export function ProjectsExplorer({ projects, tags }: ProjectsExplorerProps) {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Project filters">
        {["All", ...tags].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300",
              activeTag === tag
                ? "border-blue-400/70 bg-blue-600/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_rgba(37,99,235,0.2)]"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-blue-300/40 hover:text-white",
            )}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No projects in this filter"
          description="Remove or edit project tags in src/data/projects.ts to control what appears here."
        />
      )}
    </div>
  );
}
