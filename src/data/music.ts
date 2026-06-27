export type RepertoireStatus = "Performed" | "Learning" | "Planned";

export type RepertoireItem = {
  id: string;
  title: string;
  composer: string;
  difficulty: string;
  category:
    "Solo" | "Ensemble" | "Orchestral Excerpt" | "Jazz" | "Concert Band";
  status: RepertoireStatus;
  year: string;
  notes: string;
  featured?: boolean;
};

export const musicOverview = {
  title: "Trumpet Performance and Music",
  description:
    "A polished archive for trumpet repertoire, ensembles, performances, awards, and musical development.",
  image: "/images/music/placeholder-1.jpg",
  imageAlt: "Dark trumpet performance placeholder with blue stage lighting",
};

export const repertoire: RepertoireItem[] = [
  {
    id: "concerto-placeholder",
    title: "Solo Repertoire Placeholder",
    composer: "Composer TBD",
    difficulty: "Senior / University preparation",
    category: "Solo",
    status: "Learning",
    year: "2026",
    notes:
      "Use this slot for a major solo work, audition piece, or recital selection with preparation notes.",
    featured: true,
  },
  {
    id: "orchestral-excerpt-placeholder",
    title: "Orchestral Excerpt Placeholder",
    composer: "Composer TBD",
    difficulty: "Advanced excerpt study",
    category: "Orchestral Excerpt",
    status: "Planned",
    year: "TBD",
    notes:
      "Add excerpt name, movement, audition context, and specific technical focus when ready.",
    featured: true,
  },
  {
    id: "jazz-placeholder",
    title: "Jazz / Lead Trumpet Placeholder",
    composer: "Chart TBD",
    difficulty: "Ensemble",
    category: "Jazz",
    status: "Planned",
    year: "TBD",
    notes:
      "A flexible entry for jazz ensemble repertoire, improvisation work, or lead trumpet features.",
  },
  {
    id: "concert-band-placeholder",
    title: "Concert Band Work Placeholder",
    composer: "Composer TBD",
    difficulty: "Ensemble",
    category: "Concert Band",
    status: "Performed",
    year: "TBD",
    notes:
      "Replace with concert band repertoire, performance dates, and ensemble details.",
  },
];

export const musicAccomplishments = [
  {
    title: "Featured Performance Placeholder",
    period: "Year TBD",
    description:
      "Add a recital, audition, festival, ensemble feature, or solo performance with a concise outcome.",
  },
  {
    title: "Award / Ensemble Placeholder",
    period: "Year TBD",
    description:
      "Use this for awards, selected ensembles, scholarships, festival results, or leadership in music.",
  },
  {
    title: "Ongoing Trumpet Study",
    period: "Current",
    description:
      "A place to track current repertoire, practice goals, range, articulation, tone, and performance preparation.",
  },
];

export const ensembles = [
  {
    name: "Ensemble Placeholder",
    role: "Trumpet",
    period: "Add years",
    notes:
      "Add school, community, university, jazz, concert band, brass ensemble, or pit orchestra details.",
  },
  {
    name: "Performance Placeholder",
    role: "Solo / Section",
    period: "Add date",
    notes:
      "Add performance venue, repertoire, collaborators, and a short reflection when ready.",
  },
];

export const musicGallery = [
  {
    src: "/images/music/placeholder-1.jpg",
    alt: "Placeholder trumpet image",
  },
  {
    src: "/images/music/placeholder-1.jpg",
    alt: "Placeholder music performance image",
  },
  {
    src: "/images/music/placeholder-1.jpg",
    alt: "Placeholder concert stage image",
  },
];
