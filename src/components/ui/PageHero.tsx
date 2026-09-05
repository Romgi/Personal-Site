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
    <section className={cn("page-hero", className)}>
      <Container>
        <div className="page-hero-grid">
          <h1>{eyebrow}</h1>
          <div className="page-hero-description">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        {children ? <div className="page-hero-actions">{children}</div> : null}
      </Container>
    </section>
  );
}
