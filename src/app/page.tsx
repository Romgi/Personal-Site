import { ArrowRight, Cpu, FileText, Music2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ExpandableText } from "@/components/sections/ExpandableText";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { robotProjects } from "@/data/robotics";
import { musicAccomplishments, repertoire } from "@/data/music";

export const metadata: Metadata = {
  title: {
    absolute: `${profile.name} | Computer Science, Robotics, Trumpet`,
  },
};

export default function Home() {
  const featuredRobot = robotProjects[0];
  const featuredMusic =
    repertoire.find((item) => item.featured) ?? repertoire[0];

  return (
    <>
      <section className="relative isolate min-h-[88svh] overflow-hidden border-b border-white/10">
        <Image
          src={profile.profileImage.src}
          alt={profile.profileImage.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover opacity-[0.48]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.82)_48%,rgba(2,6,23,0.48)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(56,189,248,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.18)_1px,transparent_1px)] [background-size:56px_56px]"
        />
        <Container className="relative z-10 flex min-h-[88svh] items-end pb-16 pt-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              {profile.title}
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="primary">
                View Projects
                <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              <ButtonLink href="/resume" variant="secondary">
                View Resume
                <FileText aria-hidden="true" size={18} />
              </ButtonLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                href="/robotics"
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                <Cpu aria-hidden="true" size={16} />
                Robotics Experience
              </Link>
              <Link
                href="/music"
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                <Music2 aria-hidden="true" size={16} />
                Music
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="About"
              title="A technical portfolio with room for the full picture."
              description="This site is set up to grow with real projects, robotics seasons, repertoire, accomplishments, and resume details."
            />
            <div className="mt-8">
              <ExpandableText
                shortText={profile.about.short}
                expandedText={profile.about.expanded}
              />
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {profile.highlights.map((item) => (
              <AnimatedSection key={item.title}>
                <Link
                  href={item.href}
                  className="group block h-full rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-blue-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    {item.metric}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-100">
                    Explore
                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Current software and engineering work."
              description="Placeholder projects are structured so each card can grow into a real case study with links, status, tags, and technical notes."
            />
            <ButtonLink href="/projects" variant="ghost" className="self-start">
              All projects
              <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project) => (
              <AnimatedSection key={project.id}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Robotics Preview"
                title="Engineering-focused FRC experience."
                description="The robotics section is built around credible technical artifacts: timeline entries, drivetrain and controls notes, competition highlights, and leadership placeholders."
              />
              <div className="mt-8">
                <ButtonLink href="/robotics" variant="secondary">
                  View robotics
                  <ArrowRight aria-hidden="true" size={16} />
                </ButtonLink>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <ExperienceCard
                title={featuredRobot.title}
                meta={featuredRobot.season}
                description={featuredRobot.description}
                bullets={featuredRobot.technicalHighlights}
                badges={["Java", "WPILib", "Controls", "Testing"]}
              />
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.48),rgba(2,6,23,0.95))] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <AnimatedSection>
              <PlaceholderImage
                src="/images/music/placeholder-1.jpg"
                alt="Trumpet performance placeholder"
                aspect="aspect-[4/3]"
              />
            </AnimatedSection>
            <AnimatedSection>
              <SectionHeading
                eyebrow="Music Preview"
                title="Trumpet repertoire and performance discipline."
                description="Music has its own dedicated area for repertoire, ensemble work, accomplishments, and performance media placeholders."
              />
              <div className="mt-7 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Featured repertoire
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {featuredMusic.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {featuredMusic.notes}
                </p>
              </div>
              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Featured accomplishment
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {musicAccomplishments[0].title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {musicAccomplishments[0].description}
                </p>
              </div>
              <div className="mt-8">
                <ButtonLink href="/music" variant="secondary">
                  View music
                  <ArrowRight aria-hidden="true" size={16} />
                </ButtonLink>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
