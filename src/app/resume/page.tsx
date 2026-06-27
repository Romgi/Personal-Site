import { Download, Mail } from "lucide-react";

import { ContactCard } from "@/components/sections/ContactCard";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { profile } from "@/data/profile";
import {
  awards,
  education,
  musicExperience,
  resumeExperience,
  resumeProjects,
  technicalSkillGroups,
} from "@/data/resume";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Resume and Contact",
  description:
    "Resume, education, skills, projects, robotics experience, music experience, and contact information for Jonathan Graydon.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Resume / Contact"
        title="Resume details and direct contact links."
        description="A concise, employer-ready page for education, technical skills, projects, robotics, music, awards, and contact information."
      >
        <div className="flex flex-wrap gap-3">
          {/* Place the real resume PDF at public/resume.pdf when it is ready. */}
          <ButtonLink href={profile.resumePath} variant="primary" download>
            Download resume
            <Download aria-hidden="true" size={18} />
          </ButtonLink>
          <ButtonLink href={profile.contact.emails[0].href} variant="secondary">
            Email Jonathan
            <Mail aria-hidden="true" size={18} />
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {profile.contact.emails.map((email) => (
              <AnimatedSection key={email.value}>
                <ContactCard
                  label={email.label}
                  value={email.value}
                  href={email.href}
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimatedSection>
              <ResumeSection title="Education">
                <div className="space-y-6">
                  {education.map((item) => (
                    <article key={item.institution}>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-white">
                            {item.institution}
                          </h3>
                          <p className="mt-1 text-sm text-slate-300">
                            {item.credential}
                          </p>
                        </div>
                        <p className="text-sm text-cyan-200">{item.period}</p>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.location}
                      </p>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </ResumeSection>
            </AnimatedSection>

            <AnimatedSection>
              <ResumeSection title="Technical Skills">
                <div className="grid gap-5 sm:grid-cols-2">
                  {technicalSkillGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="font-semibold text-white">
                        {group.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <SkillBadge key={skill}>{skill}</SkillBadge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ResumeSection>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <AnimatedSection>
              <ResumeSection title="Projects">
                <div className="space-y-5">
                  {resumeProjects.map((project) => (
                    <article key={project.title}>
                      <h3 className="font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.details}
                      </p>
                    </article>
                  ))}
                </div>
              </ResumeSection>
            </AnimatedSection>

            <AnimatedSection>
              <ResumeSection title="Robotics Experience">
                <div className="space-y-5">
                  {resumeExperience.map((experience) => (
                    <article key={experience.title}>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-white">
                            {experience.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400">
                            {experience.organization}
                          </p>
                        </div>
                        <p className="text-sm text-cyan-200">
                          {experience.period}
                        </p>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">
                        {experience.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </ResumeSection>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <AnimatedSection>
              <ResumeSection title="Music Experience">
                <div className="space-y-5">
                  {musicExperience.map((item) => (
                    <article key={item.title}>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.details}
                      </p>
                    </article>
                  ))}
                </div>
              </ResumeSection>
            </AnimatedSection>

            <AnimatedSection>
              <ResumeSection title="Awards / Accomplishments">
                <ul className="space-y-3 text-sm leading-6 text-slate-400">
                  {awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </ResumeSection>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <ResumeSection title="Contact Preference">
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
                <p className="text-sm leading-6 text-slate-400">
                  Contact is handled with mailto links instead of a form. That
                  avoids insecure form handling, exposed secrets, and spam-prone
                  endpoints until a trusted backend or service is intentionally
                  added.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink
                    href={profile.contact.emails[0].href}
                    variant="secondary"
                  >
                    <Mail aria-hidden="true" size={16} />
                    McMaster email
                  </ButtonLink>
                </div>
              </div>
            </ResumeSection>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
