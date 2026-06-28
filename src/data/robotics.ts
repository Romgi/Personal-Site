import { safeHref } from "@/lib/links";

export type RoboticsExperience = {
  id: string;
  teamName: string;
  role: string;
  yearsActive: string;
  seasonName: string;
  summary: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
  links?: Array<{ label: string; href: string }>;
};

export type RobotProject = {
  title: string;
  season: string;
  description: string;
  technicalHighlights: string[];
  image: string;
  imageAlt: string;
};

export const roboticsOverview = {
  title: "FIRST Robotics Competition Experience",
  description:
    "Lead programming and technical work with FRC Team 854, the Iron Bears, focused on command-based Java robot code, reliable controls, team workflows, and competition-ready engineering.",
  image: "/images/robotics/9062REBUILT.png",
  imageAlt: "9062 rebuilt FRC robot",
};

export const roboticsSkills = [
  "Java",
  "WPILib",
  "CTRE Phoenix",
  "REVLib",
  "Swerve drive",
  "Vision systems",
  "Command-based programming",
  "Git/GitHub",
  "Autonomous routines",
  "Controls tuning",
];

export const roboticsExperiences: RoboticsExperience[] = [
  {
    id: "frc-team-854-lead-programmer",
    teamName: "FRC Team 854, Iron Bears",
    role: "Lead Programmer",
    yearsActive: "Current / recent",
    seasonName: "Team 854 robot software",
    summary:
      "Lead programming experience for Team 854 focused on robot software, subsystem integration, drivetrain behavior, autonomous preparation, testing, debugging, and competition readiness.",
    technologies: [
      "Java",
      "WPILib",
      "Command-based",
      "CTRE Phoenix",
      "REVLib",
      "PathPlanner",
      "Git/GitHub",
    ],
    responsibilities: [
      "Implemented and tested robot subsystem code with clear command structure.",
      "Supported driver practice and troubleshooting by reading logs, reproducing issues, and tuning behavior.",
      "Coordinated code changes with mechanical and electrical constraints during build and competition timelines.",
    ],
    achievements: [
      "Maintained a public-facing technical profile as Lead Programmer for Team 854.",
      "Built experience translating real robot constraints into practical software decisions under competition timelines.",
    ],
    links: [
      {
        label: "Team 854 Website",
        href: safeHref("https://www.ironbears.ca/"),
      },
      {
        label: "FIRST Robotics Competition",
        href: safeHref("https://www.firstinspires.org/robotics/frc"),
      },
    ],
  },
  {
    id: "team-854-technical-leadership",
    teamName: "FRC Team 854, Iron Bears",
    role: "Technical Contributor",
    yearsActive: "Recent",
    seasonName: "Team systems and web presence",
    summary:
      "Technical contribution beyond robot code, including workflows, documentation habits, web presence, and team-facing software practices.",
    technologies: [
      "Documentation",
      "Git workflows",
      "Code reviews",
      "Testing",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    responsibilities: [
      "Helped establish repeatable workflows for programming tasks and robot testing.",
      "Documented decisions so future team members could understand system behavior.",
      "Supported communication between programming and other subteams.",
    ],
    achievements: [
      "Contributed to professionalizing the team's technical footprint through software and web tooling.",
    ],
  },
];

export const robotProjects: RobotProject[] = [
  {
    title: "Team 854 Competition Robot Code",
    season: "2025 season",
    description:
      "Competition robot software work for Team 854 covering drivetrain, mechanism commands, autonomous preparation, and reliability-focused testing.",
    technicalHighlights: [
      "Command-based subsystem structure",
      "Limelight 4 with Hailo-8 machine vision",
      "Autonomous path planning",
      "Driver feedback and debugging",
    ],
    image: "/images/robotics/9062REBUILT.png",
    imageAlt: "9062 rebuilt FRC robot thumbnail",
  },
  {
    title: "Swerve Drive and Autonomous Experiments",
    season: "Technical subsystem",
    description:
      "Focused drivetrain and autonomous work for testing swerve concepts, route following, and control behavior before applying ideas to a competition robot.",
    technicalHighlights: [
      "Swerve drive experimentation",
      "PathPlanner integration",
      "Calibration and testing notes",
    ],
    image: "/images/robotics/9062REBUILT.png",
    imageAlt: "9062 rebuilt robot controls thumbnail",
  },
];

export const roboticsGallery = [
  {
    src: "/images/robotics/9062REBUILT.png",
    alt: "9062 rebuilt robotics gallery image",
  },
  {
    src: "/images/robotics/9062REBUILT.png",
    alt: "9062 rebuilt robot workshop image",
  },
  {
    src: "/images/robotics/9062REBUILT.png",
    alt: "9062 rebuilt competition robot image",
  },
];

export const competitionHighlights = [
  "Lead Programmer experience with FRC Team 854, the Iron Bears.",
  "Public Team 854 technical work includes robot code, swerve/autonomous experimentation, and a modern team web presence.",
  "Add specific event awards, rankings, playoff results, and season milestones here when ready.",
];
