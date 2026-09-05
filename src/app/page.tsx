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
import { homeFeaturedProjects } from "@/data/projects";
import { robotProjects } from "@/data/robotics";
import { musicAccomplishments, repertoire } from "@/data/music";

export const metadata: Metadata = {
  title: {
    absolute: `${profile.name} | Computer Science, Robotics, Trumpet`,
  },
};

const highlightActions: Record<string, string> = {
  "/projects": "View projects",
  "/projects#robotics": "View robotics",
  "/music": "View music",
};

export default function Home() {
  const featuredRobot = robotProjects[0];
  const featuredMusic =
    repertoire.find((item) => item.featured) ?? repertoire[0];

  return (
    <div className="home-page">
      <HomeHero
        name={profile.name}
        title={profile.title}
        tagline={profile.tagline}
        image={profile.profileImage}
      />

      <section className="home-about section-block">
        <Container>
          <div className="about-layout">
            <AnimatedSection>
              <SectionHeading
                title="About Jonathan"
                description="Jonathan builds software, programs competition robots, and plays trumpet. His work emphasizes reliability, clear design, and disciplined execution."
              />
              <div className="mt-8">
                <ExpandableText
                  shortText={profile.about.short}
                  expandedText={profile.about.expanded}
                />
              </div>
            </AnimatedSection>
            <div className="home-highlights">
              {profile.highlights.map((item) => (
                <AnimatedSection key={item.title}>
                  <Link href={item.href} className="highlight-link group">
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-blue-300">
                      {item.metric}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-200">
                      {highlightActions[item.href] ?? `View ${item.title}`}
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
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="Featured projects"
              description="RouteLab visualizes pathfinding algorithms. PC Turf helps a golf course maintenance team organize daily work."
            />
            <ButtonLink href="/projects" variant="ghost" className="self-start">
              View all projects
              <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
          <div className="featured-projects">
            {homeFeaturedProjects.map((project) => (
              <AnimatedSection key={project.id}>
                <ProjectCard project={project} featured />
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
                title="FRC robotics software"
                description="Robot programming, autonomous path planning, vision, controls, and mentoring with FIRST Robotics Competition (FRC) Teams 854 and 9062."
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

      <section className="home-music section-block">
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
                title="Trumpet performance"
                description="Solo repertoire, honour bands, university ensembles, lead trumpet in jazz, and festival awards."
              />
              <div className="liquid-glass-surface glass-card mt-7 rounded-lg border border-white/10 p-5">
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {featuredMusic.title}
                </h3>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300">
                  From the repertoire
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {featuredMusic.description}
                </p>
              </div>
              <div className="liquid-glass-surface glass-card mt-5 rounded-lg border border-white/10 p-5">
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {musicAccomplishments[0].title}
                </h3>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300">
                  Performance accomplishment
                </p>

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
    </div>
  );
}
