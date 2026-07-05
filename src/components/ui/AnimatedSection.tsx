import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <div data-gsap-reveal className={cn("gsap-reveal", className)}>
      {children}
    </div>
  );
}
