import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Container({
  as: Component = "div",
  children,
  className,
}: ContainerProps) {
  return (
    <Component className={cn("site-container", className)}>
      {children}
    </Component>
  );
}
