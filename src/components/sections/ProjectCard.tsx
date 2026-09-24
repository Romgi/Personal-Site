import {
  ArrowUpRight,
  CircleCheck,
  CircleDashed,
  Clock3,
  Code2,
  Download,
  Lock,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { SkillBadge } from "@/components/ui/SkillBadge";
import type { Project } from "@/data/projects";

import "./projects.css";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  id?: string;
};

export function ProjectCard({
  project,
  featured = false,
  id,
}: ProjectCardProps) {
  const hasPublicLinks = Boolean(
    !project.private &&
    (project.githubUrl ||
      project.githubLinks?.length ||
      project.liveDemoUrl ||
      project.downloadUrl),
  );
  const StatusIcon =
    project.status === "Completed"
      ? CircleCheck
      : project.status === "In Progress"
        ? CircleDashed
        : Clock3;

  return (
    <article
      id={id}
      className={`project-card group ${featured ? "project-card-featured" : ""}`}
    >
      <div className="project-media">
        <PortfolioImage
          src={project.image}
          alt={project.imageAlt}
          className="project-artwork"
          imageClassName="project-artwork-image"
          sizes={
            featured
              ? "(max-width: 767px) 90vw, (max-width: 1440px) 48vw, 660px"
              : "(max-width: 767px) 90vw, (max-width: 1200px) 65vw, 35vw"
          }
        />
      </div>
      <div className="project-card-body">
        <div className="project-card-heading">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-status" data-status={project.status}>
            <StatusIcon aria-hidden="true" size={14} />
            {project.status}
          </span>
        </div>
        <p className="project-description">{project.shortDescription}</p>

        <div className="project-technologies">
          {project.techStack.map((tech) => (
            <SkillBadge key={tech} className="project-technology">
              {tech}
            </SkillBadge>
          ))}
        </div>

        <details className="project-details">
          <summary>
            <span>
              Technical details
              <span className="sr-only"> for {project.title}</span>
            </span>
            <span className="project-details-icon" aria-hidden="true" />
          </summary>
          <div className="project-details-content">
            <p>{project.longDescription}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </details>

        <div className="project-actions">
          {project.private ? (
            <span className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-slate-400">
              <Lock aria-hidden="true" size={16} />
              Private project. No public links.
            </span>
          ) : null}
          {!project.private
            ? project.githubLinks?.map((link) => (
                <ButtonLink
                  key={link.href}
                  href={link.href}
                  size="sm"
                  variant="ghost"
                  ariaLabel={`${link.label} for ${project.title}`}
                >
                  <Code2 aria-hidden="true" size={16} />
                  {link.label}
                </ButtonLink>
              ))
            : null}
          {!project.private && project.githubUrl ? (
            <ButtonLink
              href={project.githubUrl}
              size="sm"
              variant="ghost"
              ariaLabel={`GitHub repository for ${project.title}`}
            >
              <Code2 aria-hidden="true" size={16} />
              GitHub
            </ButtonLink>
          ) : null}
          {!project.private && project.liveDemoUrl ? (
            <ButtonLink
              href={project.liveDemoUrl}
              size="sm"
              variant="ghost"
              ariaLabel={`Open demo of ${project.title}`}
            >
              <ArrowUpRight aria-hidden="true" size={16} />
              Open demo
            </ButtonLink>
          ) : null}
          {!project.private && project.downloadUrl ? (
            <ButtonLink
              href={project.downloadUrl}
              size="sm"
              variant="ghost"
              ariaLabel={`Download page for ${project.title}`}
            >
              <Download aria-hidden="true" size={16} />
              Download page
            </ButtonLink>
          ) : null}
          {!project.private && !hasPublicLinks ? (
            <span className="text-sm text-slate-500">
              No public links available.
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
