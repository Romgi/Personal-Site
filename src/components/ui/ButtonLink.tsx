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
  primary: "button-primary",
  secondary: "button-secondary",
  ghost: "button-ghost",
};
const sizes = { sm: "button-sm", md: "button-md" };

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
  const external = isExternalHref(checkedHref);
  const magnetic = variant === "primary" || variant === "secondary";
  const linkClassName = cn("button", variants[variant], sizes[size], className);

  if (checkedHref.startsWith("/")) {
    return (
      <Link
        href={checkedHref}
        className={linkClassName}
        download={download}
        aria-label={ariaLabel}
        data-magnetic={magnetic || undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={checkedHref}
      className={linkClassName}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
      aria-label={
        ariaLabel && external ? `${ariaLabel} (opens in a new tab)` : ariaLabel
      }
      data-magnetic={magnetic || undefined}
    >
      {children}
      {external && !ariaLabel ? (
        <span className="sr-only"> (opens in a new tab)</span>
      ) : null}
    </a>
  );
}
