import { safeHref } from "@/lib/links";

export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    shortDescription:
      "A production-ready Next.js portfolio for projects, robotics, music, and resume information.",
    longDescription:
      "A data-driven portfolio built with the App Router, TypeScript, Tailwind CSS v4, Motion for React, strong metadata, and security headers. The structure is designed so content can be updated from clear TypeScript data files instead of scattered component markup.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    image: "/images/projects/placeholder-1.jpg",
    imageAlt: "Abstract blue software workspace placeholder",
    liveDemoUrl: safeHref("/"),
    status: "In Progress",
    featured: true,
    tags: ["Web", "Frontend", "Portfolio"],
  },
  {
    id: "frc-robot-code",
    title: "FRC Robot Code",
    shortDescription:
      "Command-based robot software placeholder for drivetrain, mechanisms, and autonomous routines.",
    longDescription:
      "A placeholder entry for FRC robot software. Replace this with a real season repository, technical notes, subsystem architecture, autonomous strategy, and field-tested lessons once team details are ready to publish.",
    techStack: ["Java", "WPILib", "CTRE Phoenix", "REVLib", "GitHub"],
    image: "/images/robotics/9062REBUILT.png",
    imageAlt: "9062 rebuilt FRC robot",
    status: "In Progress",
    featured: true,
    tags: ["Robotics", "Java", "Controls"],
  },
  {
    id: "web-coursework",
    title: "Web Development Coursework Project",
    shortDescription:
      "A course project placeholder for full-stack or frontend web development work.",
    longDescription:
      "Use this entry for a future McMaster coursework project with screenshots, architecture notes, accessibility considerations, and a deployment link if the project can be shared publicly.",
    techStack: ["React", "TypeScript", "CSS", "Testing"],
    image: "/images/projects/placeholder-1.jpg",
    imageAlt: "Abstract project interface placeholder",
    status: "Planned",
    featured: false,
    tags: ["Web", "Coursework"],
  },
  {
    id: "algorithm-project",
    title: "Data / Algorithm Project",
    shortDescription:
      "A placeholder for an algorithms, data structures, or analysis-focused project.",
    longDescription:
      "This slot is ready for a technical project involving algorithm design, performance analysis, data processing, or visualization. Add the problem statement, approach, complexity notes, and results when available.",
    techStack: ["Python", "Algorithms", "Data Structures"],
    image: "/images/projects/placeholder-1.jpg",
    imageAlt: "Abstract data and algorithm visualization placeholder",
    status: "Planned",
    featured: false,
    tags: ["Algorithms", "Data"],
  },
  {
    id: "other-placeholder",
    title: "Other Project Placeholder",
    shortDescription:
      "A flexible slot for a future tool, experiment, app, or research-inspired build.",
    longDescription:
      "Replace this with a project that shows initiative outside required coursework: a developer tool, robotics dashboard, music practice tracker, or another technical build with clear outcomes.",
    techStack: ["TypeScript", "APIs", "UI Design"],
    image: "/images/projects/placeholder-1.jpg",
    imageAlt: "Abstract blue engineering project placeholder",
    status: "Planned",
    featured: false,
    tags: ["Experiment", "Tools"],
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();

export const featuredProjects = projects.filter((project) => project.featured);
