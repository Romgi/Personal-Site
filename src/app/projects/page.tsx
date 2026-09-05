import { ArrowRight, Trophy } from "lucide-react";
import Image from "next/image";

import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { featuredProjects, projects, projectTags } from "@/data/projects";
import {
  roboticsExperiences,
  roboticsOverview,
  roboticsSkills,
} from "@/data/robotics";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Computer Science Projects",
  description:
    "Software, web development, data, and algorithm projects, plus FRC robotics experience, by Jonathan Graydon.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <PageHero
        eyebrow="Computer Science Projects"
        title="Software work organized for technical notes, media, and accomplishments."
        description="A practical collection of web applications, robotics software, coursework repositories, game projects, and tools built with modern development workflows."
      >
        <div className="project-census">
          <div className="census-item">
            <p className="text-2xl font-semibold tracking-tight text-white">
              {projects.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">Project entries</p>
          </div>
          <div className="census-item">
            <p className="text-2xl font-semibold tracking-tight text-white">
              {featuredProjects.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">Featured projects</p>
          </div>
          <div className="census-item">
            <p className="text-2xl font-semibold tracking-tight text-white">
              {projectTags.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">Tags</p>
          </div>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured"
              title="Priority projects."
              description="Featured projects are highlighted for their technical complexity, impact, or relevance to my current work."
            />
            <ButtonLink href="/resume" variant="ghost" className="self-start">
              Resume
              <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <AnimatedSection key={project.id}>
                <ProjectCard project={project} featured />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Filter by tag"
              title="All Projects"
              description="Browse the full project set by technology area, from frontend and backend work to FRC controls, Unity simulation, and command-line tools."
            />
            <div className="mt-10">
              <ProjectsExplorer projects={projects} tags={projectTags} />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section
        id="robotics"
        className="scroll-mt-24 border-t border-white/10 py-20 sm:py-24"
      >
        <Container>
          <div
            data-robotics-scene
            className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          >
            <AnimatedSection>
              <SectionHeading
                eyebrow="FRC Robotics"
                title={roboticsOverview.title}
                description={roboticsOverview.description}
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {roboticsSkills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </AnimatedSection>
            <div data-robotics-scene-media className="relative">
              <PortfolioImage
                src={roboticsOverview.image}
                alt={roboticsOverview.imageAlt}
                aspect="aspect-[4/3]"
              />
              <span
                data-robotics-field-scan
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-px bg-blue-200 opacity-0"
              />
            </div>
          </div>

          <div data-robotics-experiences className="mt-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="self-start lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Experience"
                  title="Three seasons, two teams."
                  description="From programming subteam member to Software Lead with the Iron Bears, to mentoring the next generation of programmers with Critical Circuits."
                />
                <div
                  data-robotics-visual
                  aria-hidden="true"
                  className="robotics-instrument relative mt-8 hidden overflow-hidden lg:block lg:h-[calc(100svh-22rem)] lg:min-h-96"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(96,141,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(96,141,255,0.16)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(120%_100%_at_50%_0%,black_35%,transparent_85%)]"
                  />
                  {roboticsExperiences.map((experience, index) => (
                    <div
                      key={experience.id}
                      data-robotics-logo
                      data-hud-year={experience.year}
                      className={cn(
                        "absolute inset-x-8 bottom-28 top-8",
                        index > 0 && "opacity-0",
                      )}
                    >
                      <Image
                        src={experience.gameLogo}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 0px, 40vw"
                        className={cn(
                          "object-contain drop-shadow-[0_0_28px_rgba(47,95,224,0.25)]",
                          experience.gameLogoInvert && "invert",
                        )}
                      />
                    </div>
                  ))}
                  <div
                    data-robotics-scanline
                    className="absolute inset-x-0 top-0 h-10 -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(96,141,255,0.4),transparent)] opacity-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 grid bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-5 pt-16">
                    {roboticsExperiences.map((experience, index) => (
                      <div
                        key={experience.id}
                        data-robotics-caption
                        data-hud-year={experience.year}
                        className={cn(
                          "[grid-area:1/1]",
                          index > 0 && "opacity-0",
                        )}
                      >
                        <p className="font-mono text-5xl font-semibold tracking-tight text-white">
                          {experience.year}
                        </p>
                        <p className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-blue-200">
                          {experience.teamName} - {experience.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {roboticsExperiences.map((experience) => (
                  <AnimatedSection key={experience.id}>
                    <article
                      data-robotics-entry
                      data-hud-year={experience.year}
                      data-hud-label={`${experience.teamName} - ${experience.role}`}
                      className="robotics-entry"
                    >
                      <div className="relative aspect-[3/2]">
                        <Image
                          src={experience.image}
                          alt={experience.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(16,18,21,0.6)_100%)]"
                        />
                        <span className="absolute left-4 top-4 rounded-md border border-blue-300/25 bg-slate-950/60 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-blue-100 backdrop-blur">
                          {experience.year} - {experience.seasonName}
                        </span>
                      </div>
                      <div className="p-5 sm:p-6">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                          <h3 className="text-lg font-semibold text-white">
                            {experience.role}
                          </h3>
                          <p className="shrink-0 font-mono text-xs font-medium tracking-wide text-blue-200">
                            {experience.teamName}
                          </p>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {experience.summary}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                          {experience.responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        {experience.achievements?.map((achievement) => (
                          <p
                            key={achievement}
                            className="mt-4 inline-flex items-center gap-2 rounded-md border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-100"
                          >
                            <Trophy
                              aria-hidden="true"
                              size={15}
                              className="shrink-0 text-blue-300"
                            />
                            {achievement}
                          </p>
                        ))}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <SkillBadge key={tech}>{tech}</SkillBadge>
                          ))}
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
