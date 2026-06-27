import { safeHref } from "@/lib/links";

export const site = {
  name: "Jonathan Graydon Portfolio",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jonathan-graydon.vercel.app",
  description:
    "Computer Science student at McMaster University with interests in software development, robotics, web development, and trumpet performance.",
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
  title: "Computer Science Student at McMaster University",
  location: "Hamilton, Ontario and the Greater Toronto Area",
  tagline:
    "Computer Science student, robotics programmer, and trumpet performer building polished digital and technical projects.",
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
    ],
  },
  resumePath: safeHref("/resume.pdf"),
  profileImage: {
    src: "/images/profile-placeholder.jpg",
    alt: "Abstract blue and black portfolio portrait placeholder",
  },
  about: {
    short:
      "I am a Computer Science student at McMaster University focused on building reliable, well-designed technical work across software, robotics, and creative performance.",
    expanded: [
      "My technical interests sit at the intersection of software engineering, robotics systems, and polished web experiences. I care about writing code that is understandable, testable, and useful beyond a demo.",
      "Robotics has shaped how I approach engineering problems: start with the real constraints, communicate clearly with the team, iterate quickly, and keep reliability in view. That mindset carries into the projects I build for school, personal learning, and portfolio work.",
      "Outside of computer science, trumpet performance gives me a different kind of discipline: preparation, tone, listening, and precision under pressure. This site is structured so I can keep adding real projects, seasons, repertoire, awards, and experience as they grow.",
    ],
  },
  highlights: [
    {
      title: "Computer Science",
      description:
        "Coursework and independent projects in software development, algorithms, data, and modern web applications.",
      href: safeHref("/projects"),
      metric: "CS",
    },
    {
      title: "FRC Robotics",
      description:
        "Programming and technical experience with robot code, controls, team workflows, and competition constraints.",
      href: safeHref("/robotics"),
      metric: "FRC",
    },
    {
      title: "Trumpet / Music",
      description:
        "Trumpet repertoire, ensemble work, performance goals, and musical accomplishments in a structured archive.",
      href: safeHref("/music"),
      metric: "Music",
    },
  ],
} as const;
