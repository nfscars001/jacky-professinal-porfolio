/* =============================================================================
   EXPERIENCE DATA
   Single source of truth for the Experience page timeline.
   ============================================================================= */

export interface ExperienceItem {
  id: string;
  organisation: string;
  role: string;
  dateRange: string;
  location: string;
  type: "employment" | "founder" | "teaching" | "education";
  description: string;
  highlights?: string[];
  url?: string;
}

export const experience: ExperienceItem[] = [
  // ---------------------------------------------------------------------------
  // Current / recent roles
  // ---------------------------------------------------------------------------
  {
    id: "westside-union",
    organisation: "Westside Union",
    role: "Founder & Project / Product Lead",
    dateRange: "June 2009 – Present",
    location: "Toronto, ON | San Francisco, CA",
    type: "founder",
    description:
      "Lead multidisciplinary projects across digital products, AI-enabled workflows, design strategy, research, branding, and client delivery. Lead the design and positioning of products including Paviqo and Artpresso.",
    highlights: [
      "Define project scope, requirements, timelines, priorities, and delivery plans",
      "Coordinate design, development, research, and business stakeholders",
      "Translate client and market needs into product requirements and workflows",
      "Develop AI and SaaS concepts for local-business operations and revenue workflows",
    ],
    url: "https://www.westside-union.com",
  },
  {
    id: "right-time-inc",
    organisation: "Right Time Inc",
    role: "Design Director / VP & Watch Customization Specialist",
    dateRange: "October 2022 – Present",
    location: "Toronto, ON",
    type: "employment",
    description:
      "Led design, branding, customization, and selected operational initiatives for an established Toronto watch and jewellery business. Manage bespoke watch-customization projects from customer consultation through delivery.",
    highlights: [
      "Directed brand identity, visual communication, and creative projects",
      "Managed custom watch concepts from client brief through execution",
      "Translated customer preferences into feasible design and customization specifications",
      "Coordinated internal and external contributors across design and production",
    ],
  },
  {
    id: "george-brown-faculty",
    organisation: "George Brown College Continuing Education",
    role: "Instructor — Fashion and Design",
    dateRange: "August 2022 – Present",
    location: "Toronto, ON",
    type: "teaching",
    description:
      "Develop and deliver college-level curriculum in fashion, design, and related creative disciplines. Courses include Introduction to Fashion Industry, Introduction to Industrial Sewing, and Basic Sewing.",
    highlights: [
      "Plan lessons, assignments, assessment criteria, and project milestones",
      "Mentor students through research, concept development, production, and presentation",
      "Evaluate student work and provide actionable written and verbal feedback",
      "Adapt instruction for different learning needs, experience levels, and cultural backgrounds",
    ],
    url: "https://www.georgebrown.ca/",
  },
  {
    id: "village-art-studio",
    organisation: "The Village Art Studio",
    role: "Founder & Program Director",
    dateRange: "December 2023 – Present",
    location: "Toronto, ON",
    type: "founder",
    description:
      "Founded and direct a community-focused arts initiative supporting exhibitions, workshops, artist collaborations, and accessible creative programming in Toronto.",
    highlights: [
      "Plan and deliver workshops, exhibitions, interviews, and community events",
      "Coordinate artists, instructors, venues, partners, schedules, and promotional materials",
      "Develop program concepts, budgets, registration experiences, and event communications",
      "Build partnerships with local artists and community businesses",
    ],
  },
  
  // ---------------------------------------------------------------------------
  // Previous ventures & roles
  // ---------------------------------------------------------------------------
  {
    id: "makalot-fda",
    organisation: "MAKALOT INDUSTRIAL CO., LTD.",
    role: "U.S FDA Agent",
    dateRange: "April 2020 – September 2024",
    location: "San Francisco Bay Area",
    type: "employment",
    description:
      "Served as the U.S. FDA Agent representative, managing FDA contact window and document review for imported medical device products.",
  },
  {
    id: "bio-union-founder",
    organisation: "Bio Union",
    role: "Founder & Product Development Lead",
    dateRange: "Documented activity through 2023",
    location: "San Francisco, CA",
    type: "founder",
    description:
      "Founded a wearable-technology venture developing sensor-integrated garments for continuous physiological monitoring. Defined the product vision across smart textiles, sensors, hardware, software, and healthcare applications.",
    highlights: [
      "Led research, product strategy, concept development, and partnership outreach",
      "Coordinated contributors across textile design, engineering, software, research, and business development",
      "Developed product concepts integrating medical-grade sensing into comfortable garments",
    ],
    url: "https://www.bio-union.io",
  },
  {
    id: "chinese-culture-univ",
    organisation: "Chinese Culture University",
    role: "Instructor",
    dateRange: "October 2015 – June 2019",
    location: "Taipei City, Taiwan",
    type: "teaching",
    description:
      "Taught courses including History of African-American Culture and Music Production, managing on-site student learning and course planning.",
  },
  {
    id: "nkg",
    organisation: "新金寶 (New Kinpo Group)",
    role: "Medical Wearable Device Engineer & Project Manager",
    dateRange: "January 2017 – May 2018",
    location: "New Taipei City, Taiwan",
    type: "employment",
    description:
      "Contributed to product design, garment engineering, pattern development, and UI/UX concepts for a global electronic manufacturing services (EMS/ODM) company.",
    highlights: [
      "Led a cross-functional initiative that standardized work across ten departments",
      "Supported the development of two major wearable products within six months",
      "Planned and managed five exhibitions within six months",
      "Invited speaker at the MEDICA Connected Healthcare Forum in Düsseldorf",
    ],
  },
  {
    id: "ties-db",
    organisation: "Ties.DB",
    role: "Blockchain Technology Advisor",
    dateRange: "September 2017 – December 2017",
    location: "Taiwan",
    type: "employment",
    description:
      "Consulted on UX Design and provided Smart Contract review and debugging for a decentralized database network.",
  },
  {
    id: "seven-crash",
    organisation: "Seven Crash",
    role: "Design Director",
    dateRange: "November 2015 – December 2016",
    location: "Shanghai City, China",
    type: "employment",
    description:
      "In charge of the haute couture line and managing the ready-to-wear department.",
    highlights: [
      "Led the designer team, launched the high-fashion line, and opened the first flagship store in Crystal Galleria Shanghai",
      "Formulated and inspired the design team with an overarching concept for collections",
      "Managed store and office interior design",
    ],
  },
  {
    id: "china-univ-tech",
    organisation: "China University of Technology",
    role: "Instructor (Department of Visual Communication and Design)",
    dateRange: "July 2014 – September 2016",
    location: "New Taipei City, Taiwan",
    type: "teaching",
    description:
      "Visual Design and Internship program course lecturer. Taught Visual Design Process, UI/UX Design, Pitch Deck Design, and Presentation Skills.",
  },
  {
    id: "yunlin-univ",
    organisation: "National Yunlin University of Science and Technology",
    role: "Instructor (Department of Industrial Design)",
    dateRange: "2015 – 2016",
    location: "Yunlin County, Taiwan",
    type: "teaching",
    description:
      "Product Design Process course lecturer. Taught UI/UX design, Pitch deck design, and Presentation skills.",
  },
  {
    id: "box-clothing",
    organisation: "Box Clothing",
    role: "Founder",
    dateRange: "September 2007 – 2016",
    location: "Taiwan",
    type: "founder",
    description:
      "Founded an haute couture brand focused on woman’s apparel with specialized tailoring, producing hand-made, small-production black and white collections.",
  },
  {
    id: "makalot-intern",
    organisation: "Makalot",
    role: "Intern",
    dateRange: "July 2011 – September 2011",
    location: "Shanghai, China",
    type: "employment",
    description:
      "Interned in the factory management department. Created tutorial videos for new manufacturing operators to improve efficiency and reduce training time.",
  },
];

/** Career journey milestones for the homepage horizontal timeline (§7.5) */
export const careerJourneyStages = [
  {
    id: "textiles",
    label: "Fashion & Textile Engineering",
    dateRange: "2007 – 2016",
    summary: "Founded Box Clothing and served as Design Director for Seven Crash, leading haute couture and ready-to-wear collections.",
  },
  {
    id: "wearable-health",
    label: "Wearable Health Technology",
    dateRange: "2017 – 2023",
    summary: "Co-founded Bio Union and engineered medical wearables at NKG, designing biosensor garments bridging textiles, hardware, and health software.",
  },
  {
    id: "education-design",
    label: "Education & Design Leadership",
    dateRange: "2014 – Present",
    summary: "Teaching design, fashion, and creative technology across multiple universities and colleges while advancing product practice.",
  },
  {
    id: "digital-ai",
    label: "Digital Products & AI",
    dateRange: "2009 – Present",
    summary: "Leading Westside Union to build AI-powered SaaS platforms and shipping tools like Paviqo and Artpresso for creative professionals.",
  },
] as const;
