import { SkillBadge } from "@/components/ui/SkillBadge";

export type TimelineItem = {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  bullets?: string[];
  badges?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-6 border-l border-blue-300/20 pl-6">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-2 size-3 rounded-full border border-cyan-200 bg-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.45)]"
          />
          <article className="liquid-glass-surface rounded-lg border border-white/10 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                {item.subtitle ? (
                  <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
                ) : null}
              </div>
              <p className="text-sm font-medium text-cyan-200">{item.period}</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
            {item.bullets ? (
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {item.badges ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.badges.map((badge) => (
                  <SkillBadge key={badge}>{badge}</SkillBadge>
                ))}
              </div>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
