import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  children: string;
  className?: string;
};

export function SkillBadge({ children, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "skill-badge inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}
