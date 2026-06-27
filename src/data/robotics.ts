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
    "A structured robotics archive for programming roles, technical systems, season notes, leadership experience, and competition highlights.",
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
    id: "frc-programmer-placeholder",
    teamName: "FRC Team Placeholder",
    role: "Programming / Controls Contributor",
    yearsActive: "Add years active",
    seasonName: "Robot / Season Name Placeholder",
    summary:
      "Placeholder robotics experience focused on robot software, subsystem integration, testing, and competition readiness. Replace this with real team information, robot names, and season details when available.",
    technologies: [
      "Java",
      "WPILib",
      "Command-based",
      "Motor controllers",
      "Git/GitHub",
    ],
    responsibilities: [
      "Implemented and tested robot subsystem code with clear command structure.",
      "Supported driver practice and troubleshooting by reading logs, reproducing issues, and tuning behavior.",
      "Coordinated code changes with mechanical and electrical constraints during build and competition timelines.",
    ],
    achievements: [
      "Prepared a reusable placeholder for season achievements, awards, playoff runs, or technical milestones.",
      "Designed this section to capture credible engineering detail rather than generic team descriptions.",
    ],
    links: [
      {
        label: "FIRST Robotics Competition",
        href: safeHref("https://www.firstinspires.org/robotics/frc"),
      },
    ],
  },
  {
    id: "leadership-placeholder",
    teamName: "FRC Team Placeholder",
    role: "Mentorship / Leadership Placeholder",
    yearsActive: "Add years active",
    seasonName: "Offseason / Training",
    summary:
      "A slot for leadership, mentorship, documentation, onboarding, or strategy work connected to robotics. Use it for training students, code reviews, scouting tools, or technical presentations.",
    technologies: ["Documentation", "Git workflows", "Code reviews", "Testing"],
    responsibilities: [
      "Helped establish repeatable workflows for programming tasks and robot testing.",
      "Documented decisions so future team members could understand system behavior.",
      "Supported communication between programming and other subteams.",
    ],
    achievements: [
      "Ready for real leadership outcomes, mentorship examples, and team-facing contributions.",
    ],
  },
];

export const robotProjects: RobotProject[] = [
  {
    title: "Competition Robot Placeholder",
    season: "Season TBD",
    description:
      "A featured robot/project card for drivetrain, mechanism, autonomous, and reliability notes.",
    technicalHighlights: [
      "Command-based subsystem structure",
      "Closed-loop control tuning placeholder",
      "Autonomous path planning placeholder",
      "Driver feedback and logging placeholder",
    ],
    image: "/images/robotics/9062REBUILT.png",
    imageAlt: "9062 rebuilt FRC robot thumbnail",
  },
  {
    title: "Controls / Vision Placeholder",
    season: "Technical subsystem",
    description:
      "A slot for a focused subsystem write-up such as swerve, vision alignment, shooter control, or autonomous reliability.",
    technicalHighlights: [
      "Sensor integration placeholder",
      "Calibration and testing notes placeholder",
      "Competition constraints placeholder",
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
  "Add competition awards, event rankings, playoff results, and team milestones here.",
  "Add season-specific technical lessons, reliability improvements, and debugging stories here.",
  "Add outreach, mentorship, or leadership accomplishments here when ready.",
];
