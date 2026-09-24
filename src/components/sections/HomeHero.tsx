import { ArrowDown, ArrowRight } from "lucide-react";
import { ComputationField } from "@/components/ui/ComputationField";
import { ButtonLink } from "@/components/ui/ButtonLink";

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
        </div>
      </section>
    </div>
  );
}
