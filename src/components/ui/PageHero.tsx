import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle: string;
  description: string;
  children?: ReactNode;
  className?: string;
  media?: ReactNode;
  animate?: boolean;
  tone?: "paper" | "blue";
};
export function PageHero({
  title,
  subtitle,
  description,
  children,
  className,
  media,
  animate = true,
  tone,
}: PageHeroProps) {
  return (
    <section
      className={cn("page-hero", className)}
      data-static-hero={!animate || undefined}
      data-tone={tone}
    >
      <Container>
        <div className="page-hero-grid">
          <h1>{title}</h1>
          <div className="page-hero-description">
            <h2>{subtitle}</h2>
            <p>{description}</p>
          </div>
          {media ? <div className="page-hero-media">{media}</div> : null}
        </div>
        {children ? <div className="page-hero-actions">{children}</div> : null}
      </Container>
    </section>
  );
}
