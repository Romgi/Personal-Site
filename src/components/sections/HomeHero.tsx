import { ArrowDown, ArrowRight, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComputationField } from "@/components/ui/ComputationField";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeFeaturedProjects } from "@/data/projects";

type HomeHeroProps = {
  name: string;
  title: string;
  tagline: string;
  image: { src: string; alt: string };
};

export function HomeHero({ name, title, tagline }: HomeHeroProps) {
  return (
    <div className="home-opening">
      <section
        className="flight-hero title-card"
        aria-label="Portfolio introduction"
      >
        <ComputationField />
        <div className="title-card-shade" aria-hidden="true" />
        <div className="title-card-heading">
          <h1 className="flight-name" aria-label={name}>
            {name.split(" ").map((part) => (
              <span className="title-card-word" key={part}>
                {part}
              </span>
            ))}
          </h1>
          <p className="flight-role">{title}</p>
        </div>
        <div className="title-card-bridge">
          <h2>
            Software.
            <br />
            Robotics.
            <br />
            Music.
          </h2>
          <p className="flight-intro">{tagline}</p>
          <div className="flight-actions">
            <ButtonLink href="/projects" variant="primary">
              View projects
              <ArrowRight size={20} aria-hidden />
            </ButtonLink>
            <ButtonLink href="/resume">
              View resume
              <ArrowRight size={20} aria-hidden />
            </ButtonLink>
          </div>
        </div>
        <div className="title-card-scroll">
          <div className="title-card-cue">
            <ArrowDown size={15} aria-hidden="true" />
            <span>Scroll to explore</span>
          </div>
          <div className="title-card-track" aria-hidden="true">
            <span className="title-card-progress" />
          </div>
          <a href="#home-content">
            Skip intro <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="home-entry" id="home-content">
        <div className="flight-work">
          <nav
            className="flight-disciplines"
            aria-label="Portfolio disciplines"
          >
            <Link href="/projects#robotics">
              <Cpu size={20} aria-hidden />
              Software &amp; Robotics
            </Link>
          </nav>
          <div className="flight-previews">
            {homeFeaturedProjects.map((project) => (
              <Link
                className="flight-preview"
                href={`/projects#${project.id}`}
                key={project.id}
              >
                <div className="flight-preview-media">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 50vw, 28vw"
                  />
                </div>
                <div className="flight-preview-copy">
                  <h2>{project.title}</h2>
                  <p>{project.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
