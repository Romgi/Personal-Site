export type RoboticsExperience = {
  id: string;
  teamName: string;
  role: string;
  year: string;
  seasonName: string;
  summary: string;
  technologies: string[];
  responsibilities: string[];
  achievements?: string[];
  image: string;
  imageAlt: string;
  gameLogo: string;
  /** Logo artwork is black; render it inverted so it reads on dark panels. */
  gameLogoInvert?: boolean;
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
    "Three seasons of FRC software work across two teams: programming subteam member and Software Lead with Team 854, the Iron Bears, and Software Mentor with Team 9062, Critical Circuits. Focused on command-based Java robot code, reliable controls, autonomous routines, and competition-ready engineering.",
  image: "/images/robotics/Robotics-main-reefscape.JPG",
  imageAlt: "Team 854 robot competing in the 2025 REEFSCAPE season",
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
    id: "854-programming-2024",
    teamName: "FRC Team 854, Iron Bears",
    role: "Programming Subteam Member",
    year: "2024",
    seasonName: "CRESCENDO",
    summary:
      "First FRC season on the Iron Bears programming subteam, contributing to command-based robot code for the 2024 CRESCENDO robot and learning how competition software comes together under real deadlines.",
    technologies: ["Java", "WPILib", "Command-based", "Git/GitHub"],
    responsibilities: [
      "Contributed subsystem and command code in Java with WPILib alongside senior programmers.",
      "Supported bench testing and pit debugging during build season and competition events.",
      "Learned the team's Git workflow, command-based architecture, and code review habits.",
    ],
    image: "/images/robotics/854-2024.jpg",
    imageAlt: "Team 854 robot from the 2024 CRESCENDO season",
    gameLogo: "/images/robotics/Crescendo_FRC_Logo.svg",
  },
  {
    id: "854-software-lead-2025",
    teamName: "FRC Team 854, Iron Bears",
    role: "Software Lead",
    year: "2025",
    seasonName: "REEFSCAPE",
    summary:
      "Led robot software for the 2025 REEFSCAPE season, owning drivetrain and mechanism code, autonomous preparation, and vision integration from kickoff through competition.",
    technologies: [
      "Java",
      "WPILib",
      "CTRE Phoenix",
      "REVLib",
      "PathPlanner",
      "Limelight",
    ],
    responsibilities: [
      "Architected command-based subsystems for the drivetrain and scoring mechanisms.",
      "Built autonomous routines with PathPlanner and tuned drivetrain behavior for repeatability.",
      "Integrated Limelight 4 machine vision with a Hailo-8 accelerator for targeting and alignment.",
      "Coordinated software changes with mechanical and electrical constraints on competition timelines.",
    ],
    achievements: ["Qualified for the 2025 Ontario District Championship"],
    image: "/images/robotics/854-2025.JPG",
    imageAlt: "Team 854 robot from the 2025 REEFSCAPE season",
    gameLogo: "/images/robotics/REEFSCAPE.png",
    gameLogoInvert: true,
  },
  {
    id: "9062-software-mentor-2026",
    teamName: "FRC Team 9062, Critical Circuits",
    role: "Software Mentor",
    year: "2026",
    seasonName: "REBUILT",
    summary:
      "Mentoring the Critical Circuits programming team for the 2026 REBUILT season, guiding software architecture decisions and building the team's debugging and testing culture.",
    technologies: [
      "Java",
      "WPILib",
      "Command-based",
      "AdvantageScope",
      "Git/GitHub",
    ],
    responsibilities: [
      "Led and contributed to a team of programmers developing command-based FRC robot software in Java using WPILib and common vendor libraries.",
      "Taught programming concepts, command-based architecture, and software design principles to team members.",
      "Mentored students in debugging, thorough testing, and using AdvantageScope for robot code analysis and performance tuning.",
    ],
    achievements: ["Won the 2026 McMaster University FRC Event", "Qualified for the 2026 Ontario District Championship"],
    image: "/images/robotics/9062-2026.jpeg",
    imageAlt: "Team 9062 robot from the 2026 REBUILT season",
    gameLogo: "/images/robotics/REBUILT.png",
    gameLogoInvert: true,
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
    image: "/images/robotics/854-2025.JPG",
    imageAlt: "Team 854 robot from the 2025 REEFSCAPE season",
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
    imageAlt: "Team 9062 robot controls thumbnail",
  },
];
