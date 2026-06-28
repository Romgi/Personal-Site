import { safeHref } from "@/lib/links";

export const site = {
  name: "Jonathan Graydon Portfolio",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jonathan-graydon.vercel.app",
  description:
    "Computer Science student and software engineer at McMaster University with experience in software development, FRC robotics, web development, and trumpet performance.",
};

export const navItems = [
  { label: "Home", href: safeHref("/") },
  { label: "Projects", href: safeHref("/projects") },
  { label: "Robotics", href: safeHref("/robotics") },
  { label: "Music", href: safeHref("/music") },
  { label: "Resume", href: safeHref("/resume") },
] as const;

export const profile = {
  name: "Jonathan Graydon",
  title: "Computer Science Student at McMaster University | Software Engineer",
  location: "Hamilton, Ontario and the Greater Toronto Area",
  tagline:
    "Computer Science student, software engineer, FRC lead programmer, and trumpet performer building polished digital and technical projects.",
  interests: [
    "Software development",
    "Robotics",
    "Web development",
    "Music",
    "Trumpet performance",
  ],
  contact: {
    emails: [
      {
        label: "McMaster",
        value: "graydj1@mcmaster.ca",
        href: safeHref("mailto:graydj1@mcmaster.ca"),
      },
      {
        label: "Personal",
        value: "jonathangraydon22@gmail.com",
        href: safeHref("mailto:jonathangraydon22@gmail.com"),
      },
    ],
    phone: {
      label: "Phone",
      value: "6479980659",
      href: safeHref("tel:+16479980659"),
    },
    socials: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/jonathan-graydon-61258320a",
        href: safeHref(
          "https://www.linkedin.com/in/jonathan-graydon-61258320a/",
        ),
      },
      {
        label: "Instagram",
        value: "instagram.com/jonathan.graydon22",
        href: safeHref("https://www.instagram.com/jonathan.graydon22/"),
      },
      {
        label: "GitHub",
        value: "github.com/Romgi",
        href: safeHref("https://github.com/Romgi"),
      },
    ],
  },
  resumePath: safeHref("/resume.pdf"),
  profileImage: {
    src: "/images/profile-placeholder.jpg",
    alt: "Abstract blue and black portfolio portrait placeholder",
  },
  about: {
    short:
      "I am a Computer Science student at McMaster University and software engineer focused on reliable, well-designed technical work across software, robotics, and creative performance.",
    expanded: [
      "My technical interests sit at the intersection of software engineering, robotics systems, and polished web experiences. I care about writing code that is understandable, testable, and useful beyond a demo.",
      "As Lead Programmer for FRC Team 854, the Iron Bears, robotics has shaped how I approach engineering problems: start with the real constraints, communicate clearly with the team, iterate quickly, and keep reliability in view.",
      "That engineering mindset carries into the projects I build for school, personal learning, team websites, robot code, and portfolio work.",
      "Outside of computer science, trumpet performance gives me a different kind of discipline: preparation, tone, listening, and precision under pressure. This site is structured so I can keep adding real projects, seasons, repertoire, awards, and experience as they grow.",
    ],
  },
  highlights: [
    {
      title: "Computer Science",
      description:
        "McMaster coursework and independent projects in software development, algorithms, data, Java, Python, and modern web applications.",
      href: safeHref("/projects"),
      metric: "CS",
    },
    {
      title: "Robotics Software",
      description:
        "Robotics programming, controls, and competition engineering with Java, WPILib, and robot systems design using Onshape.",
      href: safeHref("/robotics"),
      metric: "FRC",
    },
    {
      title: "Trumpet / Music",
      description:
        "Trumpet repertoire, ensemble performance, and musical accomplishments in a structured portfolio",
      href: safeHref("/music"),
      metric: "Music",
    },
  ],
} as const;
