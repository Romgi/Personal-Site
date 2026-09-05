import type { ReactNode } from "react";
export function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className="resume-section"
      id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
    >
      <h2>{title}</h2>
      <div className="resume-section-body">{children}</div>
    </section>
  );
}
