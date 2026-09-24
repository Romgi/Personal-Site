"use client";
import { useId, useMemo, useRef, useState } from "react";
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
  const searchId = useId();
  const resultsId = useId();
  const searchRef = useRef<HTMLInputElement>(null);
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
  const resultCount = `${filtered.length} ${filtered.length === 1 ? "project" : "projects"}`;
  const searchTerm = query.trim();
  const resultMessage = searchTerm
    ? activeTag === "All"
      ? `${resultCount} matching “${searchTerm}”`
      : `${resultCount} matching “${searchTerm}” in ${activeTag}`
    : activeTag === "All"
      ? `${resultCount} in all categories`
      : `${resultCount} in ${activeTag}`;

  return (
    <div
      className="project-explorer"
      data-filtered={activeTag !== "All" || Boolean(query.trim())}
    >
      <aside className="project-filters">
        <div>
          <label
            htmlFor={searchId}
            className="mb-3 block text-sm font-medium text-slate-100"
          >
            Search projects
          </label>
          <div className="project-search">
            <Search size={18} aria-hidden />
            <input
              ref={searchRef}
              id={searchId}
              aria-controls={resultsId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. Java or RouteLab"
            />
            {query ? (
              <button
                type="button"
                className="project-search-clear"
                aria-label="Clear search"
                onClick={() => {
                  setQuery("");
                  searchRef.current?.focus();
                }}
              >
                <X size={16} aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </div>
        <div
          className="filter-tags"
          role="group"
          aria-label="Filter projects by category"
        >
          {["All", ...tags].map((tag) => {
            const count =
              tag === "All"
                ? projects.length
                : projects.filter((project) => project.tags.includes(tag))
                    .length;
            const label = tag === "All" ? "All projects" : tag;

            return (
              <button
                key={tag}
                type="button"
                aria-pressed={activeTag === tag}
                aria-controls={resultsId}
                aria-label={`${label}: ${count} ${count === 1 ? "project" : "projects"}`}
                onClick={() => setActiveTag(tag)}
              >
                <span className="filter-tag-label">{label}</span>
                <span className="filter-tag-count">{count}</span>
              </button>
            );
          })}
        </div>
      </aside>
      <div className="project-results" id={resultsId}>
        <div className="results-status flex-wrap">
          <p
            role="status"
            aria-live="polite"
            className="min-w-0 [overflow-wrap:anywhere]"
          >
            {resultMessage}
          </p>
          {(activeTag !== "All" || query) && (
            <button
              type="button"
              className="shrink-0"
              onClick={() => {
                setActiveTag("All");
                setQuery("");
              }}
            >
              Clear search and filters
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
            <h3>No matching projects</h3>
            <p>
              Try a different search or category, or show all projects to reset
              both.
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
