import { ArrowDown, ArrowDownRight } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { TrumpetScene } from "@/components/ui/TrumpetScene";
import { featuredProjects, homeFeaturedProjects } from "@/data/projects";
import "./cinematic-hero.css";

type CinematicHeroProps = {
  variant: "projects" | "music";
  title: string;
  subtitle: string;
  description: string;
  contentHref: string;
  children?: ReactNode;
};

const projectPlates = [
  ...homeFeaturedProjects,
  ...featuredProjects.filter(
    (project) => !homeFeaturedProjects.some((item) => item.id === project.id),
  ),
].slice(0, 3);

function ProjectScene() {
  return (
    <div className="scene-project-stack">
      {projectPlates.map((project) => (
        <figure className="scene-project-plate" key={project.id}>
          <div className="scene-project-image">
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 767px) 72vw, 32vw"
            />
          </div>
          <figcaption>{project.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function MusicScene() {
  return <TrumpetScene />;
}

export function CinematicHero({
  variant,
  title,
  subtitle,
  description,
  contentHref,
  children,
}: CinematicHeroProps) {
  const summary = (
    <div className="scene-summary">
      {variant === "music" ? (
        <h2 className="scene-arrival-title">
          Performance
          <br />
          &amp; repertoire
        </h2>
      ) : null}
      <div className="scene-summary-copy">
        <p>{description}</p>
        <div className="scene-actions">
          {children ?? (
            <a className="scene-explore-link" href={contentHref}>
              Explore {variant}
              <ArrowDownRight size={20} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="page-hero cinematic-hero" data-page-scene={variant}>
      <div className="scene-title">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <div className="scene-visual" aria-hidden="true">
        {variant === "projects" ? <ProjectScene /> : null}
        {variant === "music" ? <MusicScene /> : null}
      </div>

      {variant === "music" ? (
        <div className="scene-arrival">{summary}</div>
      ) : (
        summary
      )}

      <div className="scene-cue">
        <span className="scene-cue-label">
          <ArrowDown size={15} aria-hidden="true" />
          Scroll to explore
        </span>
        <span className="scene-track" aria-hidden="true">
          <span className="scene-progress" />
        </span>
        <a className="scene-skip" href={contentHref}>
          Skip intro
          <ArrowDownRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
