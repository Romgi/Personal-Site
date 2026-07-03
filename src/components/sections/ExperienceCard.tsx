import { SkillBadge } from "@/components/ui/SkillBadge";

type ExperienceCardProps = {
  title: string;
  meta?: string;
  description: string;
  bullets?: readonly string[];
  badges?: readonly string[];
};

export function ExperienceCard({
  title,
  meta,
  description,
  bullets,
  badges,
}: ExperienceCardProps) {
  return (
    <article
      data-tilt
      className="liquid-glass-surface glass-card h-full rounded-lg border border-white/10 p-5"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {meta ? (
          <p className="font-mono text-xs font-medium tracking-wide text-blue-200">
            {meta}
          </p>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      {bullets ? (
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {badges ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <SkillBadge key={badge}>{badge}</SkillBadge>
          ))}
        </div>
      ) : null}
    </article>
  );
}
