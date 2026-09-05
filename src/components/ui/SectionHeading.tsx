import { cn } from "@/lib/utils";
type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};
export function SectionHeading({
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
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  );
}
