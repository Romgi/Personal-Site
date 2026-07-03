import type { ReactNode } from "react";

type ResumeSectionProps = {
  title: string;
  children: ReactNode;
};

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="liquid-glass-surface glass-card h-full rounded-lg border border-white/10 p-6">
      <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
        <span
          aria-hidden="true"
          className="h-px w-5 bg-gradient-to-r from-blue-400 to-transparent"
        />
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
