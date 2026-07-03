type AccomplishmentCardProps = {
  title: string;
  period: string;
  description: string;
};

export function AccomplishmentCard({
  title,
  period,
  description,
}: AccomplishmentCardProps) {
  return (
    <article
      data-tilt
      className="liquid-glass-surface glass-card h-full rounded-lg border border-white/10 p-5"
    >
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300">
        {period}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}
