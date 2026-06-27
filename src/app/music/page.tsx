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
                title="A dedicated space for the performance side of the portfolio."
                description="Use this page to track repertoire, performances, ensembles, solos, awards, and recordings as they become ready to share."
              />
              <div className="mt-8 rounded-lg border border-dashed border-blue-300/20 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-white">
                  Audio / video embed placeholder
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Add future recordings here only when you have final links and
                  permissions. There are no real embeds or third-party scripts
                  included now.
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
            description="Featured repertoire cards can point recruiters, teachers, or ensemble directors to the most representative work."
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
              description="Each entry supports title, composer, difficulty, category, status, year, and notes."
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
            description="Replace the placeholder entries with real achievements, dates, venues, and outcomes."
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

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Ensembles"
              title="Performance contexts."
              description="Use this section for concert band, jazz, brass ensembles, auditions, pits, festivals, and solo performances."
            />
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
            title="Performance image placeholders."
            description="Swap these files with real performance or instrument photos later."
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
