import { ArrowRight } from "lucide-react";

import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { Timeline } from "@/components/sections/Timeline";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { featuredProjects, projects, projectTags } from "@/data/projects";
import {
  robotProjects,
  roboticsExperiences,
  roboticsOverview,
  roboticsSkills,
} from "@/data/robotics";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Computer Science Projects",
  description:
    "Software, web development, data, and algorithm projects, plus FRC robotics experience, by Jonathan Graydon.",
  path: "/projects",
});

export default function ProjectsPage() {
  const roboticsTimelineItems = roboticsExperiences.map((experience) => ({
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
        eyebrow="Computer Science Projects"
        title="Software work organized for real case studies."
        description="Each project is driven by structured data with room for screenshots, technical decisions, links, status, tags, and future write-ups."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="liquid-glass-surface glass-card rounded-lg border border-white/10 p-4">
            <p className="text-2xl font-semibold tracking-tight text-white">
              {projects.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">Project entries</p>
          </div>
          <div className="liquid-glass-surface glass-card rounded-lg border border-white/10 p-4">
            <p className="text-2xl font-semibold tracking-tight text-white">
              {featuredProjects.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">Featured projects</p>
          </div>
          <div className="liquid-glass-surface glass-card rounded-lg border border-white/10 p-4">
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
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <AnimatedSection key={project.id}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="All Projects"
              title="Filter by tag."
              description="This section is for showcasing my software projects with technical notes and media. Each card has a description, bullets, and badges for technologies."
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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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
            <AnimatedSection>
              <PlaceholderImage
                src={roboticsOverview.image}
                alt={roboticsOverview.imageAlt}
                aspect="aspect-[4/3]"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-16">
            <SectionHeading
              eyebrow="Experience Timeline"
              title="Roles, seasons, and responsibilities."
              description="Timeline entries are placeholders now, but they are structured for technical responsibilities, achievements, links, and technologies."
            />
            <div className="mt-10">
              <Timeline items={roboticsTimelineItems} />
            </div>
          </AnimatedSection>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Robot Projects"
              title="Featured robot and subsystem cards."
              description="Add real drivetrain, vision, autonomous, mechanism, or controls write-ups here."
            />
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
          </div>
        </Container>
      </section>
    </>
  );
}
