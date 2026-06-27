import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  children: string;
  className?: string;
};

export function SkillBadge({ children, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-blue-300/15 bg-blue-400/[0.08] px-3 py-1 text-xs font-medium text-blue-100",
        className,
      )}
    >
      {children}
    </span>
  );
}
