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
        "section-heading",
        align === "center" && "section-heading-center",
        className,
      )}
    >
      <h2>{title}</h2>
      {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  );
}
