"use client";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import type { Project } from "@/data/projects";
export function ProjectsExplorer({
  projects,
  tags,
}: {
  projects: Project[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (activeTag === "All" || project.tags.includes(activeTag)) &&
          [
            project.title,
            project.shortDescription,
            project.longDescription,
            ...project.techStack,
            ...project.tags,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
      ),
    [activeTag, query, projects],
  );
  return (
    <div className="project-explorer">
      <aside className="project-filters">
        <label className="project-search">
          <Search size={18} aria-hidden />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
          />
        </label>
        <div className="filter-tags" role="group" aria-label="Project filters">
          {["All", ...tags].map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
              <span>
                {tag === "All"
                  ? projects.length
                  : projects.filter((project) => project.tags.includes(tag))
                      .length}
              </span>
            </button>
          ))}
        </div>
      </aside>
      <div className="project-results">
        <div className="results-status">
          <p role="status" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            {activeTag !== "All" ? ` / ${activeTag}` : " / All work"}
          </p>
          {(activeTag !== "All" || query) && (
            <button
              type="button"
              onClick={() => {
                setActiveTag("All");
                setQuery("");
              }}
            >
              Clear filters
              <X size={14} aria-hidden />
            </button>
          )}
        </div>
        {filtered.length ? (
          <div className="project-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} id={project.id} />
            ))}
          </div>
        ) : (
          <div className="project-empty">
            <h3>No projects in this filter</h3>
            <p>
              Try another technology or search term to explore the full
              collection.
            </p>
            <button
              className="button"
              type="button"
              onClick={() => {
                setActiveTag("All");
                setQuery("");
              }}
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
