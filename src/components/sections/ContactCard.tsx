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

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="liquid-glass-surface group block h-full rounded-lg border border-white/10 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-300/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {label}
      </span>
      <span className="mt-3 flex min-w-0 items-center justify-between gap-4 text-base font-medium text-white">
        <span className="flex min-w-0 items-center gap-2">
          <ContactIcon
            label={label}
            className="size-5 shrink-0 text-cyan-200"
          />
          <span className="min-w-0 break-words [overflow-wrap:anywhere]">
            {displayValue}
          </span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          size={18}
          className="shrink-0 text-slate-400 transition group-hover:text-cyan-200"
        />
      </span>
    </a>
  );
}
