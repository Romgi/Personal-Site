import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-white/10 bg-[linear-gradient(150deg,#030409_0%,#050a16_46%,#081a3e_100%)] pb-20 pt-36",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(96,141,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(96,141,255,0.16)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(120%_100%_at_70%_0%,black_30%,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-blue-600/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
      />
      <Container className="relative z-10">
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-blue-300">
            <span
              aria-hidden="true"
              className="h-px w-6 bg-gradient-to-r from-blue-400 to-transparent"
            />
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
