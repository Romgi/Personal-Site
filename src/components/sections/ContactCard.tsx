import { ArrowUpRight } from "lucide-react";

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
};

export function ContactCard({ label, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      className="group rounded-lg border border-white/10 bg-slate-950/70 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-blue-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {label}
      </span>
      <span className="mt-3 flex items-center justify-between gap-4 text-base font-medium text-white">
        {value}
        <ArrowUpRight
          aria-hidden="true"
          size={18}
          className="text-slate-400 transition group-hover:text-cyan-200"
        />
      </span>
    </a>
  );
}
