import { PerformanceVideo } from "@/components/sections/PerformanceVideo";
import { AccomplishmentCard } from "@/components/sections/AccomplishmentCard";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { RepertoireList } from "@/components/sections/RepertoireList";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
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
    <div className="music-page">
      <PageHero
        className="music-hero"
        eyebrow="Music / Trumpet"
        title="Trumpet repertoire, performance, and musical growth."
        description={musicOverview.description}
      />

      <section className="music-section py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <AnimatedSection>
              <PortfolioImage
                src={musicOverview.image}
                alt={musicOverview.imageAlt}
                className="music-image"
                aspect="aspect-[4/3]"
              />
            </AnimatedSection>
            <AnimatedSection>
              <SectionHeading
                eyebrow="Overview"
                title="A serious performance profile alongside the technical portfolio."
                description="This page highlights Jonathan's trumpet repertoire, honour band experience, ensemble leadership, festival awards, and ongoing university performance work."
              />
              <div className="liquid-glass-surface music-media-card mt-8 rounded-lg border p-5">
                <p className="text-sm font-semibold text-white">
                  Bugler&apos;s Holiday with McMaster Concert Band
                </p>
                <PerformanceVideo />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="music-section music-section-alt border-y py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured Repertoire"
            title="Pieces to highlight first."
            description="Selected pieces from Jonathan's trumpet repertoire."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredRepertoire.map((item) => (
              <AnimatedSection key={item.id}>
                <ExperienceCard
                  title={item.composer}
                  meta={item.title}
                  description={item.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="music-section music-section-alt border-y py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Accomplishments"
            title="Awards, solos, ensembles, and performance notes."
            description="Selected awards, honour ensembles, leadership roles, and performance milestones."
          />
          <div className="accomplishment-list">
            {musicAccomplishments.map((item) => (
              <AnimatedSection key={item.title}>
                <AccomplishmentCard {...item} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section data-music-contexts className="music-section py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="self-start lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Ensembles"
                title="Performance contexts."
                description="University, honour band, jazz, orchestral, school, and community ensembles."
              />
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

      <section className="music-section py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Repertoire"
              title="Trumpet repertoire list."
              description="A concise list of pieces, composers, and brief musical context."
            />
            <div className="mt-10">
              <RepertoireList items={repertoire} />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="music-section music-gallery-section border-t py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="Performance moments."
            description="Selected concert, ensemble, and trumpet photos from Jonathan's music portfolio."
          />
          <div className="music-gallery">
            {musicGallery.map((image) => (
              <AnimatedSection key={image.alt}>
                <PortfolioImage
                  src={image.src}
                  alt={image.alt}
                  className="music-image"
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
