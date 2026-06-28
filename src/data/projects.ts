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
  githubLinks?: Array<{ label: string; href: string }>;
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
      "A data-driven portfolio built with the App Router, TypeScript, Tailwind CSS v4, GSAP scroll animation, strong metadata, and security headers. The structure is designed so content can be updated from clear TypeScript data files instead of scattered component markup.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    image: "/images/projects/placeholder-1.jpg",
    imageAlt: "Abstract blue software workspace placeholder",
    liveDemoUrl: safeHref("/"),
    status: "In Progress",
    featured: true,
    tags: ["Web", "Frontend", "Portfolio"],
  },
  {
    id: "frc-robot-code",
    title: "FRC Robotics Software",
    shortDescription:
      "Command-based robot software for FRC Team 854 and Team 9062 with drivetrain, mechanism, autonomous, and competition-readiness work.",
    longDescription:
      "FRC robot code for Team 854 Iron Bears as Software Lead, and Team 9062 Critical Circuits as a Software Mentor. This entry is structured for season-specific subsystem notes, command architecture, controls tuning, autonomous strategy, debugging, and field-tested lessons.",
    techStack: [
      "Java",
      "WPILib",
      "CTRE Phoenix",
      "REVLib",
      "PathPlanner",
      "GitHub",
    ],
    image: "/images/robotics/9062REBUILT.png",
    imageAlt: "9062 rebuilt FRC robot",
    githubLinks: [
      {
        label: "Team 854 GitHub",
        href: safeHref("https://github.com/team854"),
      },
      {
        label: "Team 9062 GitHub",
        href: safeHref("https://github.com/FRCCriticalCircuits"),
      },
    ],
    status: "In Progress",
    featured: true,
    tags: ["Robotics", "Java", "Controls", "FRC"],
  },
  {
    id: "team-854-website",
    title: "Iron Bears Team Website",
    shortDescription:
      "A modern public website for FRC Team 854 built with a production web stack.",
    longDescription:
      "A team-facing web project for the Iron Bears robotics program using Next.js, TypeScript, Tailwind CSS, and Vercel-style deployment. This project demonstrates frontend architecture, content organization, responsive design, and public communication for a technical team.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/images/projects/placeholder-1.jpg",
    imageAlt: "Abstract project interface placeholder",
    liveDemoUrl: safeHref("https://www.ironbears.ca/"),
    status: "Completed",
    featured: true,
    tags: ["Web", "Frontend", "Robotics"],
  },
  {
    id: "computer-science-coursework",
    title: "Computer Science Coursework Projects",
    shortDescription:
      "A collection of programming coursework and practice projects from first-year computer science.",
    longDescription:
      "Coursework-oriented programming repositories covering foundations in problem solving, algorithms, data structures, Java, Python, and software design habits. This entry can be expanded with selected assignments, constraints, testing notes, and outcomes that are appropriate to publish.",
    techStack: ["Python", "Java", "Algorithms", "Data Structures"],
    image: "/images/projects/placeholder-1.jpg",
    imageAlt: "Abstract data and algorithm visualization placeholder",
    githubUrl: safeHref("https://github.com/Romgi/COMPSCI-YEAR-1"),
    status: "In Progress",
    featured: false,
    tags: ["Algorithms", "Coursework", "Java", "Python"],
  },
  {
    id: "swerve-and-pathplanner",
    title: "Swerve and PathPlanner Experiments",
    shortDescription:
      "FRC drivetrain and autonomous experiments focused on swerve control and path planning.",
    longDescription:
      "A robotics-focused project area for testing swerve drive concepts, autonomous route following, PathPlanner integration, and control behavior before committing ideas to a competition robot.",
    techStack: ["Java", "WPILib", "PathPlanner", "Swerve Drive"],
    image: "/images/robotics/9062REBUILT.png",
    imageAlt: "9062 rebuilt FRC robot used as a robotics project placeholder",
    githubUrl: safeHref("https://github.com/Romgi/SwerveWithPathPlanner"),
    status: "In Progress",
    featured: false,
    tags: ["Robotics", "Java", "Autonomous", "Controls"],
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();

export const featuredProjects = projects.filter((project) => project.featured);
