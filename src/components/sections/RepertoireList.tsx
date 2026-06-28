import type { RepertoireItem } from "@/data/music";
import { cn } from "@/lib/utils";

const statusStyles = {
  Performed: "border-emerald-300/20 bg-emerald-400/10 text-emerald-100",
  Ready: "border-blue-300/25 bg-blue-400/10 text-blue-100",
  Learning: "border-cyan-300/25 bg-cyan-400/10 text-cyan-100",
  Planned: "border-slate-300/20 bg-slate-400/10 text-slate-200",
};

type RepertoireListProps = {
  items: RepertoireItem[];
};

export function RepertoireList({ items }: RepertoireListProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <div className="hidden grid-cols-[1.2fr_1fr_0.8fr_0.7fr] gap-4 border-b border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:grid">
        <span>Repertoire</span>
        <span>Category</span>
        <span>Status</span>
        <span>Year</span>
      </div>
      <ul className="divide-y divide-white/10">
        {items.map((item) => (
          <li
            key={item.id}
            className="grid gap-4 bg-slate-950/55 p-5 md:grid-cols-[1.2fr_1fr_0.8fr_0.7fr] md:items-center"
          >
            <div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.composer}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300 md:hidden">
                {item.notes}
              </p>
            </div>
            <div className="text-sm text-slate-300">
              <p>{item.category}</p>
              <p className="mt-1 text-slate-500">{item.difficulty}</p>
            </div>
            <div>
              <span
                className={cn(
                  "inline-flex rounded-md border px-2.5 py-1 text-xs font-medium",
                  statusStyles[item.status],
                )}
              >
                {item.status}
              </span>
            </div>
            <div className="text-sm text-slate-400">{item.year}</div>
            <p className="hidden text-sm leading-6 text-slate-400 md:col-span-4 md:block">
              {item.notes}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
