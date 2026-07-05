export type RepertoireItem = {
  id: string;
  title: string;
  composer: string;
  description: string;
  featured?: boolean;
};

export const musicOverview = {
  title: "Trumpet Performance and Music",
  description:
    "Trumpet performer with 10 years of experience, 30+ concerts, 10+ ensembles, award-winning concert band work, honour band experience, orchestral performance, jazz lead trumpet, and solo repertoire.",
  image: "/images/music/hero-stage.png",
  imageAlt: "Trumpet soloist standing on stage beneath warm lights",
};

export const repertoire: RepertoireItem[] = [
  {
    id: "haydn-trumpet-concerto",
    title: "Trumpet Concerto in E-flat Major",
    composer: "Joseph Haydn",
    description: "Classical concerto standard with elegant phrasing.",
  },
  {
    id: "hummel-trumpet-concerto",
    title: "Trumpet Concerto in E Major",
    composer: "Johann Nepomuk Hummel",
    description: "Bright classical concerto focused on style and articulation.",
  },
  {
    id: "arban-carnival-of-venice",
    title: "Fantaisie and Variations on The Carnival of Venice",
    composer: "Jean-Baptiste Arban",
    description: "Virtuosic theme-and-variations showpiece.",
    featured: true,
  },
  {
    id: "arban-fantasie-brillante",
    title: "Fantasie Brillante",
    composer: "Jean-Baptiste Arban",
    description: "Brilliant cornet showpiece with lyrical and technical flair.",
  },
  {
    id: "arban-tyrolean-song",
    title: "Variations on a Tyrolean Song",
    composer: "Jean-Baptiste Arban",
    description: "Classic variation solo with character and agility.",
  },
  {
    id: "bohme-concerto",
    title: "Trumpet Concerto in F Minor",
    composer: "Oskar Boehme",
    description: "Romantic concerto with lyrical and technical contrast.",
  },
  {
    id: "balay-andante-allegro",
    title: "Andante et Allegro",
    composer: "Guillaume Balay",
    description: "French solo work with lyrical and agile sections.",
  },
  {
    id: "hansen-sonata-cornet",
    title: "Sonata for Cornet and Piano",
    composer: "Thorvald Hansen",
    description: "Classic cornet sonata with chamber-style playing.",
  },
  {
    id: "balay-prelude-ballade",
    title: "Prelude et Ballade",
    composer: "Guillaume Balay",
    description: "Expressive French solo with broad musical contrast.",
  },
  {
    id: "goedicke-concert-etude",
    title: "Concert Etude",
    composer: "Alexander Goedicke",
    description: "Fast etude-style solo built on clarity and precision.",
  },
  {
    id: "honegger-intrada",
    title: "Intrada",
    composer: "Arthur Honegger",
    description: "Modern recital work with bold, precise writing.",
  },
  {
    id: "hindemith-sonata",
    title: "Sonata for Trumpet and Piano",
    composer: "Paul Hindemith",
    description: "Major twentieth-century sonata for trumpet and piano.",
    featured: true,
  },
  {
    id: "arutunian-concerto",
    title: "Trumpet Concerto",
    composer: "Alexander Arutunian",
    description: "Dramatic concerto with lyrical and technical writing.",
  },
  {
    id: "pakhmutova-concerto",
    title: "Trumpet Concerto",
    composer: "Alexandra Pakhmutova",
    description: "Modern concerto with rhythmic drive and lyrical breadth.",
  },
  {
    id: "ketting-intrada",
    title: "Intrada",
    composer: "Otto Ketting",
    description: "Concise unaccompanied solo with strong projection.",
  },
  {
    id: "peaslee-nightsongs",
    title: "Nightsongs",
    composer: "Richard Peaslee",
    description: "Atmospheric lyrical work focused on color and mood.",
  },
  {
    id: "ewazen-sonata",
    title: "Sonata for Trumpet and Piano",
    composer: "Eric Ewazen",
    description: "Contemporary sonata with broad, singing lines.",
  },
  {
    id: "nishimura-golden-hour",
    title: "Golden Hour for Flugelhorn and Piano",
    composer: "Cait Nishimura",
    description: "Lyrical flugelhorn feature centered on tone color.",
  },
  {
    id: "marlatt-blue-bells",
    title: "Variations on The Blue Bells of Scotland",
    composer: "David Marlatt",
    description: "Variation set built on flexibility and character.",
  },
  {
    id: "ost-clash-elements",
    title: "Clash of the Elements for Solo Trumpet",
    composer: "Nathan Ost",
    description: "Unaccompanied solo with sharp contrast and pacing.",
  },
  {
    id: "gershwin-rhapsody-blue",
    title: "Rhapsody in Blue",
    composer: "George Gershwin",
    description: "Iconic American concert work with jazz influence.",
  },
  {
    id: "anderson-buglers-holiday",
    title: "Bugler's Holiday",
    composer: "Leroy Anderson",
    description: "Light concert feature for three trumpets and band.",
    featured: true,
  },
  {
    id: "anderson-trumpeters-lullaby",
    title: "Trumpeter's Lullaby",
    composer: "Leroy Anderson",
    description: "Gentle lyrical feature emphasizing sound and line.",
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
      "Performed as a guest musician in The Music of John Williams concert featuring selections from Harry Potter, Star Wars, Superman, and more.",
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
  {
    src: "/images/music/msu-starwars.jpg",
    alt: "McMaster Symphony Orchestra performing Star Wars",
  },
  {
    src: "/images/music/ophb.jpg",
    alt: "Ontario Provincial Honour Band at the Ontario Music Educators Association conference",
  },
  {
    src: "/images/music/trumpets.jpeg",
    alt: "Jonathan's trumpet collection",
  },
];
