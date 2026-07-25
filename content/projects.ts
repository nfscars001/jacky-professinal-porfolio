/* =============================================================================
   PROJECT DATA MODEL (§9.4)
   Single source of truth for all project cards, filters,
   case-study routes, sitemap entries, and metadata.
   Keep content serializable — no React elements here.
   ============================================================================= */

export type ProjectCategory =
  | "digital-products"
  | "ai-automation"
  | "physical-innovation"
  | "brand-experience";

export type AssetProvenance =
  | "original"
  | "reconstructed"
  | "ai-assisted"
  | "retrospective";

export type ProjectStatus =
  | "live"
  | "in-development"
  | "open-beta"
  | "previous-venture"
  | "archive";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  provenance: AssetProvenance;
  disclosure?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  summary: string;
  cardStatement: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  featuredOrder?: number;
  categories: ProjectCategory[];
  capabilities: string[];
  roles: string[];
  collaborators?: string[];
  heroImage: ProjectImage;
  cardImage?: ProjectImage;
  liveUrl?: string;
  archiveUrl?: string;
  caseStudyPath?: string;
  seo: {
    title: string;
    description: string;
    image: string;
  };
}

/* =============================================================================
   PROJECT DATA
   All user-visible copy below is DRAFT. Final text must be approved by Jacky.
   Fields marked TODO(content) require Jacky's review before launch.
   ============================================================================= */

export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // 1. Paviqo
  // ---------------------------------------------------------------------------
  {
    slug: "paviqo",
    title: "Paviqo",
    shortTitle: "Paviqo",
    // TODO(content): Jacky to review and approve this summary
    summary:
      "An AI-powered lead conversion and recovery platform for automotive dealerships. Paviqo helps dealerships capture, qualify, and follow up with leads through AI-assisted workflows and multilingual support.",
    cardStatement:
      "Reducing lead leakage for automotive dealerships with AI-powered qualification and follow-up.",
    year: "2026",
    status: "open-beta",
    featured: true,
    featuredOrder: 1,
    categories: ["digital-products", "ai-automation"],
    capabilities: ["Product Strategy", "AI Workflows", "SaaS UX", "Business Design"],
    // TODO(content): Jacky to confirm his exact role title and collaborators
    roles: ["Product Designer", "Product Strategist"],
    collaborators: [],
    heroImage: {
      src: "/images/projects/paviqo/paviqo_hero_screenshot.jpg",
      alt: "Paviqo AI-powered automotive lead management dashboard showing a lead pipeline with qualification stages",
      width: 1400,
      height: 900,
      provenance: "ai-assisted",
      disclosure:
        "AI-assisted concept visualization created in 2026 and based on Jacky's design direction.",
    },
    liveUrl: "https://paviqo.com/",
    caseStudyPath: "/work/paviqo",
    seo: {
      title: "Paviqo — AI Lead Conversion for Automotive Dealerships",
      // TODO(content): refine description to 140–160 characters after case study is written
      description:
        "How Jacky designed an AI-powered lead conversion and recovery platform to reduce lead leakage for automotive dealerships.",
      image: "/images/projects/paviqo/paviqo-og.jpg",
    },
  },

  // ---------------------------------------------------------------------------
  // 2. Bio Union
  // ---------------------------------------------------------------------------
  {
    slug: "bio-union",
    title: "Bio Union",
    shortTitle: "Bio Union",
    // TODO(content): Jacky to review — health claims must be carefully verified
    summary:
      "A connected smart-garment ecosystem for continuous physiological monitoring. Bio Union explored the intersection of textile engineering, biosensor technology, and consumer health software.",
    cardStatement:
      "Designing a smart-garment ecosystem connecting biosensors, data, and health software.",
    year: "2018–2020",
    status: "previous-venture",
    featured: true,
    featuredOrder: 2,
    categories: ["physical-innovation", "digital-products"],
    capabilities: [
      "Wearable Technology",
      "Product Vision",
      "Hardware/Software",
      "Smart Textiles",
    ],
    // TODO(content): Jacky to confirm collaborator names and their roles
    roles: ["Co-founder", "Product Designer", "Creative Director"],
    collaborators: [],
    heroImage: {
      src: "/images/projects/bio-union/bio-union-hero.jpg",
      alt: "Close-up of a Bio Union smart garment showing embedded sensor threads in dark athletic fabric",
      width: 1400,
      height: 900,
      provenance: "ai-assisted",
      disclosure:
        "AI-assisted concept visualization created in 2026 based on Jacky's original design direction and archived materials.",
    },
    archiveUrl: "https://www.bio-union.io",
    caseStudyPath: "/work/bio-union",
    seo: {
      title: "Bio Union — Smart Garment Ecosystem for Physiological Monitoring",
      description:
        "Jacky's retrospective on co-founding Bio Union: a smart-garment ecosystem connecting biosensors, health data, and mobile software.",
      image: "/images/projects/bio-union/bio-union-og.jpg",
    },
  },

  // ---------------------------------------------------------------------------
  // 3. Artpresso
  // ---------------------------------------------------------------------------
  {
    slug: "artpresso",
    title: "Artpresso",
    shortTitle: "Artpresso",
    // TODO(content): Jacky to review and confirm live status / feature set
    summary:
      "A practical artwork-pricing tool for independent artists and creative professionals. Artpresso simplifies a multi-variable pricing challenge into a clear, guided calculation workflow.",
    cardStatement:
      "Helping independent artists price their work with confidence through a clear, guided tool.",
    year: "2025",
    status: "live",
    featured: true,
    featuredOrder: 3,
    categories: ["digital-products", "brand-experience"],
    capabilities: [
      "Product Design",
      "UX Strategy",
      "Creative Technology",
      "Web Application",
    ],
    // TODO(content): Jacky to confirm exact role — sole designer? founder?
    roles: ["Product Designer", "Founder"],
    collaborators: [],
    heroImage: {
      src: "/images/projects/artpresso/artpresso_hero_screenshot.png",
      alt: "Artpresso artwork pricing tool shown on a tablet, displaying a pricing calculator with fields for artwork dimensions, materials, and a calculated result",
      width: 1400,
      height: 900,
      provenance: "ai-assisted",
      disclosure:
        "AI-assisted visualization created in 2026 based on the live Artpresso product.",
    },
    liveUrl: "https://artpresso.westside-union.com/",
    caseStudyPath: "/work/artpresso",
    seo: {
      title: "Artpresso — Artwork Pricing Tool for Independent Artists",
      description:
        "How Jacky designed Artpresso, a web application that helps independent artists price their work with a guided, multi-variable calculator.",
      image: "/images/projects/artpresso/artpresso-og.jpg",
    },
  },
];

/* =============================================================================
   HELPERS
   ============================================================================= */

/** All projects sorted by featuredOrder (featured first) */
export const getAllProjects = (): Project[] =>
  [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99);
  });

/** Featured projects in display order */
export const getFeaturedProjects = (): Project[] =>
  projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

/** Find a single project by slug */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** All published slugs (for static generation) */
export const getAllSlugs = (): string[] => projects.map((p) => p.slug);
