import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ExpandableText } from "@/components/sections/ExpandableText";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { HomeHero } from "@/components/sections/HomeHero";
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
              description="This portfolio is built around structured data for software, robotics, and music work. Each section has room for technical notes, media, and accomplishments."
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
                  className="liquid-glass-surface group block h-full rounded-lg border border-white/10 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-300/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
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
              description="This section is designed for real project cards with links, technical notes, and media. Each card has a description, bullets, and badges for technologies."
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
                description="This section is designed for robotics work with technical notes, media, and accomplishments. Each entry has a description, bullets, and badges for technologies."
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
                description="This section is designed for music work with technical notes, media, and accomplishments. Each entry has a description, bullets, and badges for instruments."
              />
              <div className="liquid-glass-surface mt-7 rounded-lg border border-white/10 p-5">
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
              <div className="liquid-glass-surface mt-5 rounded-lg border border-white/10 p-5">
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
