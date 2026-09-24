import type { ReactNode } from "react";
export function ResumeSection({
  id,
  title,
  children,
  tone,
}: {
  id?: string;
  title: string;
  children: ReactNode;
  tone?: "paper" | "blue";
}) {
  return (
    <section
      className="resume-section"
      data-tone={tone}
      id={id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
    >
      <h2>{title}</h2>
      <div className="resume-section-body">{children}</div>
    </section>
  );
}
