import { ArrowUpRight } from "lucide-react";

import { ContactIcon } from "@/components/ui/ContactIcon";
import { isExternalHref } from "@/lib/links";

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
  displayValue?: string;
};

export function ContactCard({
  label,
  value,
  href,
  displayValue = value,
}: ContactCardProps) {
  const isExternal = isExternalHref(href);
  const actionDescription = href.startsWith("mailto:")
    ? "Opens your email app"
    : href.startsWith("tel:")
      ? "Call Jonathan"
      : isExternal
        ? "Opens in a new tab"
        : undefined;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      data-tilt
      className="liquid-glass-surface glass-card group block h-full rounded-lg border border-white/10 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
    >
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300">
        {label}
      </span>
      <span className="mt-3 flex min-w-0 items-center justify-between gap-4 text-base font-medium text-white">
        <span className="flex min-w-0 items-center gap-2">
          <ContactIcon
            label={label}
            className="size-5 shrink-0 text-blue-200"
          />
          <span className="min-w-0 break-words [overflow-wrap:anywhere]">
            {displayValue}
          </span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          size={18}
          className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-200"
        />
      </span>
      {actionDescription ? (
        <span className="sr-only"> ({actionDescription})</span>
      ) : null}
    </a>
  );
}
