import { ArrowUpRight, Code2, Download, Lock } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SkillBadge } from "@/components/ui/SkillBadge";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasPublicLinks = Boolean(
    !project.private &&
    (project.githubUrl ||
      project.githubLinks?.length ||
      project.liveDemoUrl ||
      project.downloadUrl),
  );

  return (
    <article className="liquid-glass-surface group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 transition duration-200 hover:-translate-y-1 hover:border-blue-300/35 hover:shadow-2xl hover:shadow-blue-950/30">
      <PlaceholderImage
        src={project.image}
        alt={project.imageAlt}
        className="rounded-none border-x-0 border-t-0"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-md border border-blue-300/15 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-cyan-100">
            {project.status}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <SkillBadge key={tech}>{tech}</SkillBadge>
          ))}
        </div>

        <details className="mt-5 rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300 open:border-blue-300/20">
          <summary className="cursor-pointer font-medium text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            Technical details
          </summary>
          <p className="mt-3 leading-6 text-slate-400">
            {project.longDescription}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-cyan-200/80">
                #{tag}
              </span>
            ))}
          </div>
        </details>

        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {project.private ? (
            <span className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-slate-400">
              <Lock aria-hidden="true" size={16} />
              Private project - no public links
            </span>
          ) : null}
          {!project.private
            ? project.githubLinks?.map((link) => (
                <ButtonLink
                  key={link.href}
                  href={link.href}
                  size="sm"
                  variant="ghost"
                >
                  <Code2 aria-hidden="true" size={16} />
                  {link.label}
                </ButtonLink>
              ))
            : null}
          {!project.private && project.githubUrl ? (
            <ButtonLink href={project.githubUrl} size="sm" variant="ghost">
              <Code2 aria-hidden="true" size={16} />
              GitHub
            </ButtonLink>
          ) : null}
          {!project.private && project.liveDemoUrl ? (
            <ButtonLink href={project.liveDemoUrl} size="sm" variant="ghost">
              <ArrowUpRight aria-hidden="true" size={16} />
              Live demo
            </ButtonLink>
          ) : null}
          {!project.private && project.downloadUrl ? (
            <ButtonLink
              href={project.downloadUrl}
              size="sm"
              variant="ghost"
              ariaLabel={`Open download page for ${project.title}`}
            >
              <Download aria-hidden="true" size={16} />
              Download page
            </ButtonLink>
          ) : null}
          {!project.private && !hasPublicLinks ? (
            <span className="text-sm text-slate-500">Links ready to add</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
