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
    id: "RouteLab",
    title: "RouteLab",
    shortDescription:
      "An interactive pathfinding studio for visualizing, inspecting, and comparing graph-search algorithms.",
    longDescription:
      "RouteLab transforms real graph-search executions into deterministic, interactive timelines. Users can play, pause, step, rewind, and scrub through each algorithm while inspecting nodes, frontier states, paths, and performance metrics. The application supports seven pathfinding algorithms, customizable graphs, multiple cost models, synchronized algorithm comparisons, and Dijkstra reference implementations in six programming languages.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Vite",
      "Cloudflare Workers",
    ],
    image: "/images/projects/routelab.png",
    imageAlt:
      "RouteLab interface visualizing a pathfinding algorithm across a weighted graph",
    liveDemoUrl: safeHref(
      "https://routelab-algorithm-studio.jonathangraydon22.chatgpt.site",
    ),
    githubUrl: safeHref("https://github.com/Romgi/RouteLab"),
    status: "In Progress",
    featured: true,
    tags: ["Web", "Algorithms", "Data Visualization", "Pathfinding"],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    shortDescription:
      "A production-ready Next.js portfolio for projects, robotics, music, and resume information.",
    longDescription:
      "A production-ready portfolio built with the App Router, TypeScript, Tailwind CSS v4, GSAP scroll animation, strong metadata, sitemap and robots routes, and security headers. The site presents software, FRC robotics, music, and contact information through responsive, accessible pages.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    image: "/images/projects/personal-site.png",
    imageAlt:
      "Screenshot of the Jonathan Graydon portfolio home page with navigation and hero content",
    liveDemoUrl: safeHref("https://jonathangraydon.com/"),
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
      "FRC robot software for Team 854 Iron Bears as Software Lead and Team 9062 Critical Circuits as a Software Mentor. Work spans command architecture, subsystem programming, controls tuning, autonomous strategy, debugging, and field-tested reliability improvements.",
    techStack: [
      "Java",
      "WPILib",
      "CTRE Phoenix",
      "REVLib",
      "PathPlanner",
      "GitHub",
      "AdvantageScope",
    ],
    image: "/images/robotics/9062REBUILT.png",
    imageAlt: "Team 9062 REBUILT robot project image",
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
    tags: ["Robotics", "Controls", "FRC", "AI"],
  },
  {
    id: "team-854-website",
    title: "Iron Bears Team Website",
    shortDescription:
      "A modern public website for FRC Team 854 built with a production web stack.",
    longDescription:
      "A public website for the Iron Bears robotics program using Next.js, TypeScript, Tailwind CSS, and Vercel-style deployment. The site gives the team a modern web presence for outreach, recruitment, sponsors, competition information, and technical communication.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/images/projects/iron-bears-site.png",
    imageAlt: "Screenshot of the Iron Bears Team 854 website home page",
    liveDemoUrl: safeHref("https://www.ironbears.ca/"),
    status: "Completed",
    featured: false,
    tags: ["Web", "Frontend", "Robotics", "FRC"],
  },
  {
    id: "computer-science-coursework",
    title: "Computer Science Coursework Projects",
    shortDescription:
      "A collection of programming coursework and practice projects from Computer Science at McMaster University.",
    longDescription:
      "Coursework-oriented programming repositories covering problem solving, algorithms, data structures, Java, Python, recursion, object-oriented programming, and software design habits from McMaster Computer Science.",
    techStack: ["Python", "Java", "Algorithms", "Data Structures"],
    image: "/images/projects/mcmaster.jpg",
    imageAlt:
      "McMaster University logo for Computer Science coursework projects",
    githubUrl: safeHref("https://github.com/Romgi/COMPSCI-YEAR-1"),
    status: "In Progress",
    featured: false,
    tags: ["Algorithms", "Coursework", "OOP", "Linux"],
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
    tags: ["Game Development", "Unity", "Simulation"],
  },
  {
    id: "swerve-and-pathplanner",
    title: "PathPlanner integration with Swerve Drive Base",
    shortDescription:
      "FRC drivetrain and autonomous templates focused on swerve control and path planning.",
    longDescription:
      "A robotics-focused repository for testing swerve drive concepts, autonomous route following, PathPlanner integration, and control behavior before committing ideas to a competition robot.",
    techStack: ["Java", "WPILib", "PathPlanner", "Swerve Drive"],
    image: "/images/projects/pathplanner.png",
    imageAlt: "PathPlanner interface showing an example FRC autonomous path",
    githubUrl: safeHref("https://github.com/Romgi/SwerveWithPathPlanner"),
    status: "Completed",
    featured: false,
    tags: ["Robotics", "Autonomous", "Controls", "FRC"],
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
      "A web application to assign jobs and act as an information hub for a golf course maintenance team. Currently used by Port Carling Golf and Country Club to manage daily tasks, track progress, and communicate with team members. Built with Next.js, React, TypeScript, Tailwind CSS, Prisma, SQLite, Zod, JOSE, bcryptjs, and Lucide React.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
      "Zod",
      "JOSE",
      "bcryptjs",
      "Lucide React",
      "ESLint",
      "Vercel",
    ],
    image: "/images/projects/pc-turf.png",
    imageAlt: "Screenshot of the PC Turf web application",
    githubUrl: safeHref("https://github.com/Romgi/PCTurf"),
    status: "In Progress",
    featured: true,
    tags: ["Web", "Frontend", "Backend", "Project Management"],
  },
  {
    id: "concert-helper",
    title: "Concert Helper",
    shortDescription:
      "A web application to assist with concert planning and sheet music management.",
    longDescription:
      "A web application to assist with concert planning and sheet music management. Built with a developer team as a final project for Compsci 1XD3 at McMaster University.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/concert-helper.png",
    imageAlt: "Screenshot of the Concert Helper web application",
    githubUrl: safeHref("https://github.com/Romgi/1XD3-Group-31"),
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
      "A full simulation of the 2024 FRC game: CRESCENDO, including robot and field physics, scoring, and multiple robots and drivetrains. Built using Unity and C#, this project demonstrates physics simulation, game development principles, and interactive design for robotics applications.",
    techStack: ["Unity", "C#", "Game Development", "Physics Simulation"],
    image: "/images/projects/crescendo-simulator.png",
    imageAlt: "Screenshot of the CRESCENDO Simulator game application",
    downloadUrl: safeHref(
      "https://romgi-productions.itch.io/crescendo-simulator",
    ),
    status: "Completed",
    featured: false,
    tags: ["Game Development", "Unity", "Simulation", "FRC"],
  },
  {
    id: "frc-icon-downloader",
    title: "FRC Team Icon Downloader",
    shortDescription:
      "A command-line application to download team icons for the FIRST Robotics Competition.",
    longDescription:
      "A command-line application to download team icons for the FIRST Robotics Competition. Built with Python, it provides a simple tool to download team logos and icons.",
    techStack: ["Python", "Command Line"],
    image: "/images/projects/frc-icons.png",
    imageAlt: "FRC team icons saved as PNG files named by team number",
    githubUrl: safeHref("https://github.com/Romgi/FRC-Team-Icon-Downloader"),
    status: "Completed",
    featured: false,
    tags: ["Command Line", "FRC"],
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();

export const featuredProjects = projects.filter((project) => project.featured);

export const homeFeaturedProjects = projects.filter(
  (project) => project.id === "RouteLab" || project.id === "pc-turf",
);
