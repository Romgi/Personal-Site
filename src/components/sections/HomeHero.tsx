import { ArrowRight, Cpu, FileText, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

type HomeHeroProps = {
  name: string;
  title: string;
  tagline: string;
  image: {
    src: string;
    alt: string;
  };
};

export function HomeHero({ name, title, tagline, image }: HomeHeroProps) {
  return (
    <section
      data-home-hero
      className="relative h-[240svh] overflow-visible bg-slate-950"
      aria-label="Portfolio introduction"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          data-home-hero-card
          className="absolute inset-3 overflow-hidden rounded-3xl border border-blue-200/15 bg-slate-950 shadow-2xl shadow-blue-950/40 sm:inset-5"
        >
          <div aria-hidden="true" className="absolute inset-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              sizes="100vw"
              className="hero-background-image object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="hero-ambient absolute inset-0 bg-[radial-gradient(circle_at_76%_26%,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_52%_74%,rgba(56,189,248,0.14),transparent_32%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.99)_0%,rgba(2,6,23,0.9)_46%,rgba(2,6,23,0.76)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.16)_0%,transparent_34%,rgba(2,6,23,0.74)_100%)]"
          />
          <div
            aria-hidden="true"
            className="hero-grid absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(56,189,248,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.18)_1px,transparent_1px)] [background-size:64px_64px]"
          />
          <div
            aria-hidden="true"
            className="hero-scan absolute inset-y-0 left-[-24%] w-1/2 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.09),transparent)]"
          />
          <div
            data-home-hero-veil
            aria-hidden="true"
            className="absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(2,6,23,0.94)_82%)]"
          />
          <div
            data-home-hero-aperture
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/35 opacity-0 shadow-[0_0_80px_rgba(56,189,248,0.26)]"
          />

          <Container className="relative z-10 flex h-full items-center">
            <div data-home-hero-content className="max-w-4xl pt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                {title}
              </p>
              <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                {name}
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">
                {tagline}
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
        </div>

        <div
          data-home-hero-cue
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex justify-center"
        >
          <div className="rounded-full border border-cyan-300/20 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur">
            Scroll to enter
          </div>
        </div>
      </div>
    </section>
  );
}
