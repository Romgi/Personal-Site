import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <div
      data-gsap-reveal
      data-gsap-delay={delay || undefined}
      className={cn("gsap-reveal", className)}
    >
      {children}
    </div>
  );
}
