"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [animateWhenBelowFold, setAnimateWhenBelowFold] = useState(false);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) {
      return;
    }

    const top = ref.current.getBoundingClientRect().top;
    setAnimateWhenBelowFold(top > window.innerHeight * 0.7);
  }, [prefersReducedMotion]);

  const shouldHide =
    animateWhenBelowFold && !inView && prefersReducedMotion === false;

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={shouldHide ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
