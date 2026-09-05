import type { ReactNode } from "react";
export function ResumeSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className="resume-section"
      id={id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
    >
      <h2>{title}</h2>
      <div className="resume-section-body">{children}</div>
    </section>
  );
}
