import { ArrowRight, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { OpticalInstrument } from "@/components/ui/OpticalInstrument";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { featuredProjects } from "@/data/projects";

type HomeHeroProps = {
  name: string;
  title: string;
  tagline: string;
  image: { src: string; alt: string };
};

export function HomeHero({ name, title, tagline }: HomeHeroProps) {
  return (
    <section className="flight-hero" aria-label="Portfolio introduction">
      <OpticalInstrument />
      <h1 className="flight-name" aria-label={name}>
        {name.split(" ").map((part) => (
          <span key={part}>{part}</span>
        ))}
      </h1>
      <p className="flight-role">{title}</p>
      <p className="flight-intro">{tagline}</p>
      <div className="flight-actions">
        <ButtonLink href="/projects" variant="primary">
          View Projects
          <ArrowRight size={20} aria-hidden />
        </ButtonLink>
        <ButtonLink href="/resume">
          View Resume
          <ArrowRight size={20} aria-hidden />
        </ButtonLink>
      </div>
      <div className="flight-work">
        <nav className="flight-disciplines" aria-label="Portfolio disciplines">
          <Link href="/projects#robotics">
            <Cpu size={20} aria-hidden />
            Software &amp; Robotics
          </Link>
        </nav>
        <div className="flight-previews">
          {featuredProjects.slice(0, 2).map((project) => (
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
    </section>
  );
}
