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
  downloadUrl?: string;
  private?: boolean;
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
    image: "/images/projects/personal-site.png",
    imageAlt: "Abstract blue software workspace placeholder",
    liveDemoUrl: safeHref("/"),
    githubUrl: safeHref("https://github.com/Romgi/Personal-Site"),
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
    status: "Completed",
    featured: false,
    tags: ["Robotics", "Java", "Controls", "FRC", "AI"],
  },
  {
    id: "team-854-website",
    title: "Iron Bears Team Website",
    shortDescription:
      "A modern public website for FRC Team 854 built with a production web stack.",
    longDescription:
      "A team-facing web project for the Iron Bears robotics program using Next.js, TypeScript, Tailwind CSS, and Vercel-style deployment. This project demonstrates frontend architecture, content organization, responsive design, and public communication for a technical team.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/images/projects/iron-bears-site.png",
    imageAlt: "Abstract project interface placeholder",
    liveDemoUrl: safeHref("https://www.ironbears.ca/"),
    status: "Completed",
    featured: false,
    tags: ["Web", "Frontend", "Robotics"],
  },
  {
    id: "computer-science-coursework",
    title: "Computer Science Coursework Projects",
    shortDescription:
      "A collection of programming coursework and practice projects from Computer Science at McMaster University.",
    longDescription:
      "Coursework-oriented programming repositories covering foundations in problem solving, algorithms, data structures, Java, Python, and software design habits. This entry can be expanded with selected assignments, constraints, testing notes, and outcomes that are appropriate to publish.",
    techStack: ["Python", "Java", "Algorithms", "Data Structures"],
    image: "/images/projects/mcmaster.jpg",
    imageAlt: "Abstract data and algorithm visualization placeholder",
    githubUrl: safeHref("https://github.com/Romgi/COMPSCI-YEAR-1"),
    status: "In Progress",
    featured: true,
    tags: ["Algorithms", "Coursework", "Java", "Python"],
  },
  {
    id: "lightning-air-combat",
    title: "Lightning Air Combat",
    shortDescription:
      "On-rails 3D flight combat game built with Unity and C# for PC.",
    longDescription:
      "A 3D flight combat game built with Unity and C# for PC. Multiple aircraft, levels, and enemy types are implemented with a focus on visual effects, particle systems, and responsive controls. The project demonstrates game development principles, physics simulation, and interactive design.",
    techStack: [
      "Unity",
      "C#",
      "Game Development",
      "Particle Simulation",
      "World Generation",
    ],
    image: "/images/projects/lightning-air-combat.png",
    imageAlt: "Screenshot of the Lightning Air Combat game application",
    downloadUrl: safeHref(
      "https://romgi-productions.itch.io/lightning-air-combat",
    ),
    status: "Completed",
    featured: false,
    tags: ["Game Development", "Unity", "C#", "Simulation"],
  },
  {
    id: "swerve-and-pathplanner",
    title: "PathPlanner integration with Swerve Drive Base",
    shortDescription:
      "FRC drivetrain and autonomous templates focused on swerve control and path planning.",
    longDescription:
      "A robotics-focused project area for testing swerve drive concepts, autonomous route following, PathPlanner integration, and control behavior before committing ideas to a competition robot.",
    techStack: ["Java", "WPILib", "PathPlanner", "Swerve Drive"],
    image: "/images/projects/pathplanner.png",
    imageAlt: "9062 rebuilt FRC robot used as a robotics project placeholder",
    githubUrl: safeHref("https://github.com/Romgi/SwerveWithPathPlanner"),
    status: "Completed",
    featured: false,
    tags: ["Robotics", "Java", "Autonomous", "Controls"],
  },
  {
    id: "incremental-game",
    title: "Whiplash: An Incremental Game",
    shortDescription:
      "A simple incremental game built with HTML, CSS, and JavaScript.",
    longDescription:
      "An incremental game where players invest in upgrades to increase their production rate and unlock new features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/whiplash.png",
    imageAlt: "Screenshot of the Whiplash incremental game",
    liveDemoUrl: safeHref(
      "https://www.cas.mcmaster.ca/samscott/showcase2026/61/",
    ),
    status: "Completed",
    featured: false,
    tags: ["Web", "Frontend", "Game Development"],
  },
  {
    id: "pc-turf",
    title: "PC Turf",
    shortDescription:
      "A web application to assign jobs and act as an information hub for a golf course maintenance team.",
    longDescription:
      "A web application to assign jobs and act as an information hub for a golf course maintenance team.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
      "Zod",
      "jose",
      "bcryptjs",
      "Lucide React",
      "ESLint",
      "Vercel",
    ],
    image: "/images/projects/pc-turf.png",
    imageAlt: "Screenshot of the PC Turf web application",
    private: true,
    status: "In Progress",
    featured: false,
    tags: ["Web", "Frontend", "Backend", "Project Management"],
  },
  {
    id: "concert-helper",
    title: "Concert Helper",
    shortDescription:
      "A web application to assist with concert planning and sheet music management.",
    longDescription:
      "A web application to assist with concert planning and sheet music management. Designed in a developer team as a final project for Compsci 1XD3 at McMaster University.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/concert-helper.png",
    imageAlt: "Screenshot of the Concert Helper web application",
    liveDemoUrl: safeHref("https://github.com/Romgi/1XD3-Group-31"),
    status: "Completed",
    featured: false,
    tags: ["Web", "Frontend", "Backend", "Project Management"],
  },
  {
    id: "crescendo-simulator",
    title: "CRESCENDO Simulator",
    shortDescription:
      "A full simulation of the 2024 FRC game: CRESCENDO, including robot and field physics, scoring, and multiple robots and drivetrains.",
    longDescription:
      "A full simulation of the 2024 FRC game: CRESCENDO, including robot and field physics, scoring, and multiple robots and drivetrains.",
    techStack: ["Unity", "C#", "Game Development", "Physics Simulation"],
    image: "/images/projects/crescendo-simulator.png",
    imageAlt: "Screenshot of the CRESCENDO Simulator game application",
    downloadUrl: safeHref(
      "https://romgi-productions.itch.io/crescendo-simulator",
    ),
    status: "Completed",
    featured: false,
    tags: ["Game Development", "Unity", "C#", "Simulation"],
  },
  {
    id: "frc-icon-downloader",
    title: "FRC Team Icon Downloader",
    shortDescription:
      "A web application to download team icons for the FIRST Robotics Competition.",
    longDescription:
      "A web application to download team icons for the FIRST Robotics Competition. Built with Python, it provides a simple command line tool to download team logos and icons.",
    techStack: ["Python", "Command Line"],
    image: "/images/projects/frc-icons.png",
    imageAlt: "Screenshot of the FRC Team Icon Downloader web application",
    githubUrl: safeHref("https://github.com/Romgi/FRC-Team-Icon-Downloader"),
    status: "Completed",
    featured: false,
    tags: ["Python", "Command Line"],
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();

export const featuredProjects = projects.filter((project) => project.featured);
