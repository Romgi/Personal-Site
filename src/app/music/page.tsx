import { AccomplishmentCard } from "@/components/sections/AccomplishmentCard";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { RepertoireList } from "@/components/sections/RepertoireList";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ensembles,
  musicAccomplishments,
  musicGallery,
  musicOverview,
  repertoire,
} from "@/data/music";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Music and Trumpet",
  description:
    "Trumpet repertoire, ensemble experience, performances, and music accomplishments by Jonathan Graydon.",
  path: "/music",
});

export default function MusicPage() {
  const featuredRepertoire = repertoire.filter((item) => item.featured);

  return (
    <>
      <PageHero
        eyebrow="Music / Trumpet"
        title="Trumpet repertoire, performance, and musical growth."
        description={musicOverview.description}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <AnimatedSection>
              <PlaceholderImage
                src={musicOverview.image}
                alt={musicOverview.imageAlt}
                aspect="aspect-[4/3]"
              />
            </AnimatedSection>
            <AnimatedSection>
              <SectionHeading
                eyebrow="Overview"
                title="A serious performance profile alongside the technical portfolio."
                description="This page highlights Jonathan's trumpet repertoire, honour band experience, ensemble leadership, festival awards, and ongoing university performance work."
              />
              <div className="mt-8 rounded-lg border border-dashed border-blue-300/20 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-white">
                  Recordings and media
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Public recordings can be added here later as direct links or
                  privacy-safe embeds. The current page avoids third-party media
                  scripts until final recordings are ready to publish.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured Repertoire"
            title="Pieces to highlight first."
            description="Representative solo and concerto literature prepared for recital, audition, and advanced performance settings."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredRepertoire.map((item) => (
              <AnimatedSection key={item.id}>
                <ExperienceCard
                  title={item.title}
                  meta={item.status}
                  description={item.notes}
                  bullets={[item.composer, item.difficulty, item.category]}
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Repertoire"
              title="Trumpet repertoire list."
              description="Program-ready solo literature, concert features, orchestral-style work, and concert band repertoire."
            />
            <div className="mt-10">
              <RepertoireList items={repertoire} />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Accomplishments"
            title="Awards, solos, ensembles, and performance notes."
            description="Selected awards, honour ensembles, leadership roles, and performance milestones."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {musicAccomplishments.map((item) => (
              <AnimatedSection key={item.title}>
                <AccomplishmentCard {...item} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section data-music-contexts className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="self-start lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Ensembles"
                title="Performance contexts."
                description="University, honour band, jazz, orchestral, school, and community ensembles."
              />
              <div
                data-music-context-visual
                aria-hidden="true"
                className="relative mt-8 overflow-hidden rounded-lg border border-blue-300/15 bg-slate-950/70 p-5 shadow-2xl shadow-blue-950/20"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(56,189,248,0.18),transparent_34%),linear-gradient(135deg,rgba(37,99,235,0.12),transparent_44%)]" />
                <div className="relative grid gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Stage Map
                    </p>
                    <p className="text-xs text-slate-500">Scroll linked</p>
                  </div>
                  <div className="relative h-44 overflow-hidden rounded-md border border-white/10 bg-white/[0.025]">
                    <div className="absolute inset-x-6 top-8 space-y-7">
                      <div className="h-px bg-cyan-200/20" />
                      <div className="h-px bg-cyan-200/20" />
                      <div className="h-px bg-cyan-200/20" />
                      <div className="h-px bg-cyan-200/20" />
                    </div>
                    <div className="absolute left-1/2 top-8 h-28 w-px -translate-x-1/2 overflow-hidden bg-white/10">
                      <div
                        data-music-context-meter
                        className="h-full origin-top bg-cyan-300"
                      />
                    </div>
                    <div
                      data-music-context-orb
                      className="absolute left-1/2 top-7 size-4 -translate-x-1/2 rounded-full border border-cyan-100 bg-blue-500 shadow-[0_0_28px_rgba(56,189,248,0.65)]"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {[
                      ["9", "Years"],
                      ["30+", "Concerts"],
                      ["10+", "Ensembles"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        data-music-context-stat
                        className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2"
                      >
                        <p className="text-lg font-semibold text-white">
                          {value}
                        </p>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-5">
              {ensembles.map((ensemble) => (
                <AnimatedSection key={ensemble.name}>
                  <ExperienceCard
                    title={ensemble.name}
                    meta={ensemble.period}
                    description={ensemble.notes}
                    bullets={[ensemble.role]}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.45),rgba(2,6,23,0.94))] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="Performance moments."
            description="Selected concert, ensemble, and trumpet photos from Jonathan's music portfolio."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {musicGallery.map((image) => (
              <AnimatedSection key={image.alt}>
                <PlaceholderImage src={image.src} alt={image.alt} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
