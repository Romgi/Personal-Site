import type { RepertoireItem } from "@/data/music";

type RepertoireListProps = {
  items: RepertoireItem[];
};

export function RepertoireList({ items }: RepertoireListProps) {
  return (
    <div className="liquid-glass-surface overflow-hidden rounded-lg border border-white/10">
      <div className="hidden grid-cols-[0.9fr_1.1fr_1.4fr] gap-4 border-b border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 md:grid">
        <span>Composer</span>
        <span>Piece</span>
        <span>Description</span>
      </div>
      <ul className="divide-y divide-white/10">
        {items.map((item) => (
          <li
            key={item.id}
            className="grid gap-3 bg-slate-950/30 p-5 md:grid-cols-[0.9fr_1.1fr_1.4fr] md:items-start md:gap-4"
          >
            <p className="font-semibold text-white">{item.composer}</p>
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-6 text-slate-300">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
