import { ArrowRight } from "lucide-react";

import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { Timeline } from "@/components/sections/Timeline";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import {
  competitionHighlights,
  robotProjects,
  roboticsExperiences,
  roboticsGallery,
  roboticsOverview,
  roboticsSkills,
} from "@/data/robotics";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "FRC Robotics Experience",
  description:
    "FIRST Robotics Competition programming, controls, technical skills, leadership, and robot project experience by Jonathan Graydon.",
  path: "/robotics",
});

export default function RoboticsPage() {
  const timelineItems = roboticsExperiences.map((experience) => ({
    title: experience.role,
    subtitle: `${experience.teamName} - ${experience.seasonName}`,
    period: experience.yearsActive,
    description: experience.summary,
    bullets: experience.responsibilities,
    badges: experience.technologies,
  }));

  return (
    <>
      <PageHero
        eyebrow="FRC Robotics"
        title="Robot software, controls, and competition engineering."
        description={roboticsOverview.description}
      >
        <div className="flex flex-wrap gap-2">
          {roboticsSkills.slice(0, 6).map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Overview"
                title={roboticsOverview.title}
                description="This page is designed for real team details later: robot names, seasons, subsystem work, competition outcomes, code links, and leadership notes."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {roboticsSkills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <PlaceholderImage
                src={roboticsOverview.image}
                alt={roboticsOverview.imageAlt}
                aspect="aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Experience Timeline"
              title="Roles, seasons, and responsibilities."
              description="Timeline entries are placeholders now, but they are structured for technical responsibilities, achievements, links, and technologies."
            />
            <div className="mt-10">
              <Timeline items={timelineItems} />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Robot Projects"
              title="Featured robot and subsystem cards."
              description="Add real drivetrain, vision, autonomous, mechanism, or controls write-ups here."
            />
            <ButtonLink href="/projects" variant="ghost" className="self-start">
              Related code
              <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {robotProjects.map((project) => (
              <AnimatedSection key={project.title}>
                <ExperienceCard
                  title={project.title}
                  meta={project.season}
                  description={project.description}
                  bullets={project.technicalHighlights}
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Leadership"
                title="Mentorship, process, and team communication."
                description="Use this area for training students, writing documentation, mentoring programmers, coordinating testing, or leading technical decisions."
              />
            </AnimatedSection>
            <div className="grid gap-5">
              {roboticsExperiences.map((experience) => (
                <AnimatedSection key={experience.id}>
                  <ExperienceCard
                    title={experience.role}
                    meta={experience.yearsActive}
                    description={experience.summary}
                    bullets={experience.achievements}
                    badges={experience.technologies}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="Image placeholders for robots, pits, and competitions."
            description="Replace these with real season photos when available."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roboticsGallery.map((image) => (
              <AnimatedSection key={image.alt}>
                <PlaceholderImage src={image.src} alt={image.alt} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.42),rgba(2,6,23,0.92))] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Competition Highlights"
            title="Season outcomes ready to fill in."
            description="Add event results, reliability improvements, awards, scouting insights, and lessons from the field."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {competitionHighlights.map((highlight) => (
              <AnimatedSection key={highlight}>
                <article className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-5 text-sm leading-6 text-slate-300">
                  {highlight}
                </article>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
