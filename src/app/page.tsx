import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ExpandableText } from "@/components/sections/ExpandableText";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
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
      <HomeHero
        name={profile.name}
        title={profile.title}
        tagline={profile.tagline}
        image={profile.profileImage}
      />

      <section className="-mt-[1px] py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="About"
              title="A technical portfolio for software, robotics, and music."
              description="Jonathan's work connects practical software engineering, competition robotics, and trumpet performance, with projects that emphasize reliability, clarity, and disciplined execution."
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
                  data-tilt
                  className="liquid-glass-surface glass-card group block h-full rounded-lg border border-white/10 p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                >
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-blue-300">
                    {item.metric}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-200">
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
              description="Selected work across production web apps, robotics software, coursework, and interactive Unity projects."
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
                description="Competition robot software, autonomous path planning, vision integration, controls work, and mentoring across FRC Team 854 and Team 9062."
              />
              <div className="mt-8">
                <ButtonLink href="/projects#robotics" variant="secondary">
                  View robotics
                  <ArrowRight aria-hidden="true" size={16} />
                </ButtonLink>
              </div>
              <Image
                src="/images/robotics/FIRSTCanada-logo.png"
                alt="FIRST Robotics Canada"
                width={1692}
                height={471}
                className="mt-10 h-12 w-auto opacity-80 transition duration-300 hover:opacity-100"
              />
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

      <section className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(13,20,38,0.5),rgba(26,29,35,0.95))] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <AnimatedSection>
              <PortfolioImage
                src="/images/music/jlhb.jpeg"
                alt="Jonathan Graydon performing with the Jack Long National Honour Band"
                aspect="aspect-[4/3]"
              />
            </AnimatedSection>
            <AnimatedSection>
              <SectionHeading
                eyebrow="Music Preview"
                title="Trumpet repertoire and performance discipline."
                description="Solo repertoire, honour band experience, university ensemble performance, jazz lead trumpet work, and festival recognition."
              />
              <div className="liquid-glass-surface glass-card mt-7 rounded-lg border border-white/10 p-5">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300">
                  Featured repertoire
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {featuredMusic.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {featuredMusic.description}
                </p>
              </div>
              <div className="liquid-glass-surface glass-card mt-5 rounded-lg border border-white/10 p-5">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300">
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
