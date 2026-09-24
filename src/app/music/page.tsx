import { PerformanceVideo } from "@/components/sections/PerformanceVideo";
import { AccomplishmentCard } from "@/components/sections/AccomplishmentCard";
import { ArrowDownRight } from "lucide-react";
import { RepertoireList } from "@/components/sections/RepertoireList";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
  return (
    <div className="music-page">
      <CinematicHero
        variant="music"
        title="Music"
        subtitle="Trumpet performance and repertoire"
        description={musicOverview.description}
        contentHref="#performance"
      >
        <ButtonLink href="/music#performance" variant="primary">
          Watch a performance <ArrowDownRight size={18} aria-hidden="true" />
        </ButtonLink>
      </CinematicHero>
      <div className="page-intro-tools">
        <Container>
          <nav className="chapter-links" aria-label="Music sections">
            {[
              ["performance", "Watch a performance"],
              ["repertoire", "Explore repertoire"],
              ["music-gallery", "View gallery"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <section
        id="performance"
        data-tone="paper"
        className="music-section performance-section py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <PortfolioImage
                src={musicOverview.image}
                alt={musicOverview.imageAlt}
                className="music-image"
                aspect="aspect-[3/4]"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                title="Trumpet performance"
                description="Jonathan's trumpet work spans solo repertoire, honour bands, ensemble leadership, festival awards, and ongoing university performances."
              />
              <div className="performance-record" data-tone="blue">
                <p className="text-sm font-semibold text-white">
                  Bugler&apos;s Holiday with McMaster Concert Band
                </p>
                <PerformanceVideo />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="music-section music-section-alt border-y py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="Music awards and milestones"
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
          <SectionHeading
            title="Ensemble experience"
            description="University, honour band, jazz, orchestral, school, and community ensembles."
          />
          <div className="ensemble-grid">
            {ensembles.map((ensemble) => (
              <AnimatedSection key={ensemble.name}>
                <article className="ensemble-entry">
                  <h3 className="ensemble-name">{ensemble.name}</h3>
                  <div className="ensemble-details">
                    <p className="ensemble-role">{ensemble.role}</p>
                    <p className="ensemble-period">{ensemble.period}</p>
                  </div>
                  <p className="ensemble-notes">{ensemble.notes}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section id="repertoire" className="music-section py-20 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="Full trumpet repertoire"
              description={`${repertoire.length} pieces, with composers and brief descriptions.`}
            />
            <div className="mt-10">
              <RepertoireList items={repertoire} />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section
        id="music-gallery"
        className="music-section music-gallery-section border-t py-20 sm:py-24"
      >
        <Container>
          <SectionHeading
            title="Music gallery"
            description="Selected concert, ensemble, and trumpet photos from Jonathan's music portfolio."
          />
          <div className="music-gallery">
            {musicGallery.map((image, index) => (
              <AnimatedSection key={image.alt}>
                <figure>
                  <PortfolioImage
                    src={image.src}
                    alt={image.alt}
                    className="music-image"
                    sizes={
                      index === 0
                        ? "(max-width: 767px) 100vw, 88vw"
                        : "(max-width: 767px) 100vw, 50vw"
                    }
                  />
                  <figcaption className="media-caption">{image.alt}</figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
      <Container>
        <p className="music-model-credit">
          3D trumpet by{" "}
          <a href="https://sketchfab.com/3d-models/trumpet-1dc9efd37bf14d1b9d1e3de0ca90435c">
            Kagelok
          </a>
          {" · "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
          {" · Materials and presentation adapted for this site."}
        </p>
      </Container>
    </div>
  );
}
