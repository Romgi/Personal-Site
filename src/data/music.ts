export type RepertoireStatus = "Performed" | "Ready" | "Learning" | "Planned";

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
    "Trumpet performer with 9 years of experience, 30+ concerts, 10+ ensembles, award-winning concert band work, honour band experience, orchestral performance, jazz lead trumpet, and program-ready solo repertoire.",
  image: "/images/music/hero-stage.png",
  imageAlt: "Trumpet soloist standing on stage beneath warm lights",
};

export const repertoire: RepertoireItem[] = [
  {
    id: "haydn-trumpet-concerto",
    title: "Trumpet Concerto in E-flat Major",
    composer: "Joseph Haydn",
    difficulty: "Classical concerto",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Core classical trumpet concerto repertoire prepared for recital, audition, and concerto-style programming.",
    featured: false,
  },
  {
    id: "hummel-trumpet-concerto",
    title: "Trumpet Concerto in E Major",
    composer: "Johann Nepomuk Hummel",
    difficulty: "Classical concerto",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "A major classical concerto in active repertoire, requiring clean articulation, style, endurance, and upper-register control.",
    featured: false,
  },
  {
    id: "arban-carnival-of-venice",
    title: "Fantaisie and Variations on The Carnival of Venice",
    composer: "Jean-Baptiste Arban",
    difficulty: "Advanced technical showpiece",
    category: "Solo",
    status: "Ready",
    year: "Performed",
    notes:
      "Virtuosic variation work emphasizing articulation, flexibility, character, and technical command.",
    featured: true,
  },
  {
    id: "bohme-concerto",
    title: "Trumpet Concerto in F Minor",
    composer: "Oskar Böhme",
    difficulty: "Advanced romantic concerto",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Romantic-era concerto repertoire combining lyrical playing, stamina, range, and expressive phrasing.",
    featured: false,
  },
  {
    id: "balay-andante-allegro",
    title: "Andante et Allegro",
    composer: "Guillaume Balay",
    difficulty: "Senior solo",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Contrasting lyrical and technical material suited to recital or audition programming.",
    featured: false,
  },
  {
    id: "hansen-sonata-cornet",
    title: "Sonata for Cornet and Piano",
    composer: "Thorvald Hansen",
    difficulty: "Senior solo sonata",
    category: "Solo",
    status: "Ready",
    year: "Performed",
    notes:
      "Classic cornet sonata repertoire balancing lyrical control, articulation, and chamber-style collaboration.",
    featured: false,
  },
  {
    id: "balay-prelude-ballade",
    title: "Prelude et Ballade",
    composer: "Guillaume Balay",
    difficulty: "Senior solo",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "French solo literature prepared for expressive contrast, tone control, and technical clarity.",
    featured: false,
  },
  {
    id: "goedicke-concert-etude",
    title: "Concert Etude",
    composer: "Alexander Goedicke",
    difficulty: "Advanced etude",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Fast, articulate solo literature used to demonstrate clarity, rhythmic precision, and facility.",
    featured: false,
  },
  {
    id: "honegger-intrada",
    title: "Intrada",
    composer: "Arthur Honegger",
    difficulty: "Advanced modern solo",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Modern recital work requiring precision, contrast, and confident musical direction.",
    featured: false,
  },
  {
    id: "hindemith-sonata",
    title: "Sonata for Trumpet and Piano",
    composer: "Paul Hindemith",
    difficulty: "University-level sonata",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Substantial twentieth-century trumpet sonata repertoire with serious musical and ensemble demands.",
    featured: true,
  },
  {
    id: "arutunian-concerto",
    title: "Trumpet Concerto",
    composer: "Alexander Arutunian",
    difficulty: "Advanced concerto",
    category: "Solo",
    status: "Ready",
    year: "Performed",
    notes:
      "Large-scale concerto repertoire with broad lyrical writing, technical passages, and dramatic contrast.",
    featured: false,
  },
  {
    id: "pakhmutova-concerto",
    title: "Trumpet Concerto",
    composer: "Alexandra Pakhmutova",
    difficulty: "Advanced concerto",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Modern concerto literature with lyrical breadth, rhythmic drive, and substantial technical demands.",
    featured: false,
  },
  {
    id: "ketting-intrada",
    title: "Intrada",
    composer: "Otto Ketting",
    difficulty: "Unaccompanied solo",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Concise unaccompanied solo work requiring control, projection, and confident musical pacing.",
    featured: false,
  },
  {
    id: "peaslee-nightsongs",
    title: "Nightsongs",
    composer: "Richard Peaslee",
    difficulty: "Advanced lyrical solo",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Expressive solo repertoire focused on color, atmosphere, and sustained lyrical phrasing.",
    featured: false,
  },
  {
    id: "ewazen-sonata",
    title: "Sonata for Trumpet and Piano",
    composer: "Eric Ewazen",
    difficulty: "Advanced contemporary sonata",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Contemporary recital repertoire requiring broad sound, stamina, ensemble sensitivity, and long-form phrasing.",
    featured: false,
  },
  {
    id: "nishimura-golden-hour",
    title: "Golden Hour for Flugelhorn and Piano",
    composer: "Yuki Nishimura",
    difficulty: "Contemporary lyrical work",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Flugelhorn feature emphasizing tone, lyrical pacing, color, and expressive control.",
    featured: false,
  },
  {
    id: "marlatt-blue-bells",
    title: "Variations on The Blue Bells of Scotland",
    composer: "David Marlatt",
    difficulty: "Advanced variation set",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Variation-style solo literature emphasizing flexibility, control, articulation, and character.",
    featured: false,
  },
  {
    id: "ost-clash-elements",
    title: "Clash of the Elements for Solo Trumpet",
    composer: "Jérôme Naulais / Ost",
    difficulty: "Unaccompanied solo",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Solo trumpet work focused on independence, pacing, contrast, and unaccompanied performance confidence.",
    featured: false,
  },
  {
    id: "gershwin-rhapsody-blue",
    title: "Rhapsody in Blue",
    composer: "George Gershwin",
    difficulty: "Orchestral / feature excerpt",
    category: "Orchestral Excerpt",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Iconic American repertoire prepared as part of broader solo and orchestral-style trumpet literature.",
    featured: false,
  },
  {
    id: "anderson-buglers-holiday",
    title: "Bugler's Holiday",
    composer: "Leroy Anderson",
    difficulty: "Trumpet feature",
    category: "Ensemble",
    status: "Ready",
    year: "Performed",
    notes:
      "Light concert feature requiring crisp ensemble playing, endurance, and coordinated articulation.",
    featured: true,
  },
  {
    id: "anderson-trumpeters-lullaby",
    title: "Trumpeter's Lullaby",
    composer: "Leroy Anderson",
    difficulty: "Lyrical feature",
    category: "Solo",
    status: "Ready",
    year: "Program-ready",
    notes:
      "Lyrical solo feature emphasizing sound, control, musical line, and expressive phrasing.",
    featured: false,
  },
];

export const musicAccomplishments = [
  {
    title: "MusicFest Honour Award",
    period: "2025",
    description:
      "Selected by MusicFest Canada as the individual honour award recipient from an ensemble performing at the festival.",
  },
  {
    title: "Music Proficiency Award",
    period: "2025",
    description:
      "Received Martingrove C.I.'s Music Proficiency Award, given to the student with the highest grade in Instrumental Music.",
  },
  {
    title: "Ontario Provincial Honour Band",
    period: "2024",
    description:
      "Performed as first trumpet and soloist, touring Ontario high schools and performing at the Ontario Music Educators Association conference.",
  },
  {
    title: "Conn-Selmer Centerstage Jazz Band",
    period: "2024",
    description:
      "Performed lead trumpet in a national all-star youth jazz band at the University of Toronto's Walter Hall during MusicFest Canada 2024.",
  },
  {
    title: "Martingrove C.I. Concert Band Awards",
    period: "2021-2025",
    description:
      "Served as trumpet section leader in a band that earned Ontario Band Association Gold, a brass excellence award, and MusicFest Canada national Gold and Silver results.",
  },
  {
    title: "York Symphony Orchestra Guest Soloist",
    period: "2025",
    description:
      "Performed as a guest trumpet musician and soloist in York Symphony Orchestra's A Night at the Opera concert.",
  },
];

export const ensembles = [
  {
    name: "McMaster Concert Band",
    role: "Trumpet Section",
    period: "2025-Present",
    notes:
      "Performs with a 70+ member university wind, brass, and percussion ensemble made up of students from multiple disciplines and degree programs.",
  },
  {
    name: "Jack Long National Honour Band",
    role: "First Trumpet",
    period: "2025-2026",
    notes:
      "Nationally auditioned honour band featuring high-level Canadian musicians aged 16 to 24.",
  },
  {
    name: "McMaster Symphony Orchestra",
    role: "Trumpet Section",
    period: "2026",
    notes:
      "Preparing The Music of John Williams concert featuring selections from Harry Potter, Star Wars, Superman, and more.",
  },
  {
    name: "York Symphony Orchestra",
    role: "Guest Trumpet and Soloist",
    period: "2025",
    notes:
      "Performed as a guest musician and soloist for A Night at the Opera, featuring operatic orchestral repertoire.",
  },
  {
    name: "Ontario Provincial Honour Band",
    role: "First Trumpet and Soloist",
    period: "2024",
    notes:
      "Toured Ontario performing at high schools, appeared as a feature concert at OMEA in London, Ontario, and performed in multiple clinics.",
  },
  {
    name: "Conn-Selmer Centerstage Jazz Band",
    role: "Lead Trumpet",
    period: "2024",
    notes:
      "All-star jazz band featuring leading young Canadian jazz musicians, performing at Walter Hall at the University of Toronto.",
  },
  {
    name: "Martingrove C.I. Concert Band",
    role: "Trumpet Section Leader",
    period: "2021-2025",
    notes:
      "Performed advanced concert band repertoire and contributed to OBA Gold, brass excellence recognition, and MusicFest Canada national results.",
  },
  {
    name: "Etobicoke Youth Band",
    role: "Trumpet Section Leader",
    period: "2021-2025",
    notes:
      "Performed with a community band of 100+ students at local venues and international performance opportunities.",
  },
];

export const musicGallery = [
  {
    src: "/images/music/elcamino.png",
    alt: "Jonathan Graydon performing El Camino Real with the McMaster Concert Band",
  },
  {
    src: "/images/music/conn-selmer.jpg",
    alt: "Jonathan Graydon performing lead trumpet with the Conn-Selmer Centerstage Jazz Band",
  },
  {
    src: "/images/music/trumpetlake.jpg",
    alt: "Jonathan Graydon with trumpet during an Etobicoke Youth Band trip",
  },
];
