import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  children: string;
  className?: string;
};

export function SkillBadge({ children, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-blue-300/20 bg-blue-500/[0.08] px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-blue-100/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
