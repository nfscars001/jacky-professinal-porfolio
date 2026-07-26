/* =============================================================================
   EXPERIENCE DATA
   Single source of truth for the Experience page timeline.
   All copy is DRAFT — Jacky must review and approve before launch.
   Fields marked TODO(content) require confirmation.
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
    id: "paviqo-product",
    organisation: "Westside Union / Paviqo",
    // TODO(content): confirm exact role title
    role: "Founder & Product Designer",
    // TODO(content): confirm exact start date
    dateRange: "2024 – Present",
    location: "Toronto, ON",
    type: "founder",
    // TODO(content): draft text — Jacky to review
    description:
      "Leading product strategy and design for Paviqo, an AI-powered lead conversion and recovery platform for automotive dealerships.",
    highlights: [
      // TODO(content): replace with verified, specific highlights
      "Designed AI-assisted lead qualification and follow-up workflows",
      "Defined product architecture and key decision points",
      "Built multilingual interaction patterns for diverse dealership contexts",
    ],
    url: "https://paviqo.com/",
  },
  {
    id: "george-brown-faculty",
    organisation: "George Brown College",
    // TODO(content): confirm exact faculty title and department
    role: "Faculty",
    // TODO(content): confirm start date and teaching area
    dateRange: "TODO(content): confirm dates",
    location: "Toronto, ON",
    type: "teaching",
    description:
      // TODO(content): describe teaching area and courses
      "Teaching design and creative technology at George Brown College.",
    url: "https://www.georgebrown.ca/",
  },

  // ---------------------------------------------------------------------------
  // Previous ventures
  // ---------------------------------------------------------------------------
  {
    id: "bio-union-founder",
    organisation: "Bio Union",
    role: "Founder & Product Development Lead",
    dateRange: "Documented activity through 2023",
    location: "Toronto, ON",
    type: "founder",
    description:
      "Founded Bio Union to explore a connected smart-garment system designed to support long-term ECG monitoring. Led product development across textiles, wearable hardware, digital experience, partner coordination, and commercialization strategy.",
    highlights: [
      "Designed the garment, sensor, data, and software product architecture",
      "Led cross-disciplinary collaboration between textile engineers and software developers",
      "Built physical prototypes and connected software concepts",
    ],
    url: "https://www.bio-union.io",
  },

  // ---------------------------------------------------------------------------
  // Earlier career
  // ---------------------------------------------------------------------------
  {
    id: "fashion-textile",
    organisation: "TODO(content): organisation name",
    role: "TODO(content): role title",
    dateRange: "TODO(content): date range",
    location: "TODO(content): location",
    type: "employment",
    description:
      "TODO(content): fashion and textile engineering background — Jacky to provide details.",
  },

  // ---------------------------------------------------------------------------
  // Education
  // ---------------------------------------------------------------------------
  {
    id: "mfa",
    organisation: "TODO(content): institution name",
    role: "Master of Fine Arts (MFA)",
    dateRange: "TODO(content): years",
    location: "TODO(content): location",
    type: "education",
    description: "TODO(content): MFA programme and focus area.",
  },
];

/** Career journey milestones for the homepage horizontal timeline (§7.5) */
export const careerJourneyStages = [
  {
    id: "textiles",
    label: "Fashion & Textile Engineering",
    dateRange: "TODO(content)",
    summary: "TODO(content): one sentence + one proof point",
  },
  {
    id: "wearable-health",
    label: "Wearable Health Technology",
    dateRange: "2018–2020",
    summary: "Co-founded Bio Union, designing a biosensor garment ecosystem bridging textiles, hardware, and health software.",
  },
  {
    id: "education-design",
    label: "Education & Design Leadership",
    dateRange: "TODO(content)",
    summary: "Teaching design and creative technology at George Brown College while advancing product practice.",
  },
  {
    id: "digital-ai",
    label: "Digital Products & AI",
    dateRange: "2024–Present",
    summary: "Building Paviqo — an AI-powered SaaS platform — and shipping tools like Artpresso for creative professionals.",
  },
] as const;
