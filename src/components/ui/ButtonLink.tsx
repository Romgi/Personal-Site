import Link from "next/link";
import type { ReactNode } from "react";

import { isExternalHref, safeHref } from "@/lib/links";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  download?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary:
    "border-blue-400/70 bg-blue-500 text-white shadow-[0_0_24px_rgba(37,99,235,0.24)] hover:border-cyan-300 hover:bg-blue-400",
  secondary:
    "border-white/15 bg-white/[0.06] text-white hover:border-blue-300/60 hover:bg-blue-500/10",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white",
};

const sizes = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-sm",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "secondary",
  size = "md",
  download,
  ariaLabel,
}: ButtonLinkProps) {
  const checkedHref = safeHref(href);
  const linkClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-md border font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300",
    variants[variant],
    sizes[size],
    className,
  );

  if (checkedHref.startsWith("/")) {
    return (
      <Link
        href={checkedHref}
        className={linkClassName}
        download={download}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={checkedHref}
      className={linkClassName}
      target={isExternalHref(checkedHref) ? "_blank" : undefined}
      rel={isExternalHref(checkedHref) ? "noopener noreferrer" : undefined}
      download={download}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
