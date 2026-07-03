import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-blue-300",
            align === "center" && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className="h-px w-6 bg-gradient-to-r from-blue-400 to-transparent"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
