import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects, projects, projectTags } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Computer Science Projects",
  description:
    "Software, web development, robotics code, data, and algorithm projects by Jonathan Graydon.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Computer Science Projects"
        title="Software work organized for real case studies."
        description="Each project is driven by structured data with room for screenshots, technical decisions, links, status, tags, and future write-ups."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-2xl font-semibold text-white">
              {projects.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">Project entries</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-2xl font-semibold text-white">
              {featuredProjects.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">Featured projects</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-2xl font-semibold text-white">
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
              description="Use featured projects for the strongest work you want recruiters, professors, or teams to inspect first."
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
              description="The grid includes an empty-state path, so the page remains clean even if placeholder projects are removed later."
            />
            <div className="mt-10">
              <ProjectsExplorer projects={projects} tags={projectTags} />
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
