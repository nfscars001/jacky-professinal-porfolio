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
    year: "Open beta since March 2026",
    status: "in-development",
    featured: true,
    featuredOrder: 1,
    categories: ["digital-products", "ai-automation"],
    capabilities: ["Product Strategy", "AI Workflows", "SaaS UX", "Business Design"],
    // TODO(content): Jacky to confirm his exact role title and collaborators
    roles: ["Product Designer", "Product Strategist"],
    collaborators: [],
    heroImage: {
      src: "/images/projects/paviqo/paviqo_hero_cover.jpg",
      alt: "Paviqo AI-powered automotive lead management dashboard showing a lead pipeline with qualification stages",
      width: 3275,
      height: 2543,
      provenance: "ai-assisted",
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
      "Bio Union explored how ECG sensing could move from a short clinical encounter into clothing designed for everyday wear. As founder, I helped shape a connected system spanning garment construction, printed electrodes, a removable sensing device, signal processing, mobile experiences, and service models.",
    cardStatement:
      "Connected smart garments for long-term physiological monitoring.",
    year: "2015–2023",
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
    roles: ["Founder", "Product Development Lead"],
    collaborators: [],
    heroImage: {
      src: "/images/projects/bio-union/bio-union-cover.png",
      alt: "Bio Union cover image showing smart garment context",
      width: 1400,
      height: 900,
      provenance: "original",
      disclosure: "Bio Union pitch deck cover image.",
    },
    archiveUrl: "https://www.bio-union.io",
    caseStudyPath: "/work/bio-union",
    seo: {
      title: "Bio Union — Smart Garment Ecosystem for Physiological Monitoring",
      description:
        "Jacky's retrospective on Bio Union: exploring a connected smart-garment system designed to support long-term ECG monitoring through clothing.",
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
    year: "Open beta since Dec 2025",
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
      src: "/images/projects/artpresso/artpresso_cover.png",
      alt: "Artpresso artwork pricing tool shown on a tablet, displaying a pricing calculator with fields for artwork dimensions, materials, and a calculated result",
      width: 3274,
      height: 2517,
      provenance: "ai-assisted",
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

  // ---------------------------------------------------------------------------
  // 4. Wei In Sight
  // ---------------------------------------------------------------------------
  {
    slug: "wei-in-sight",
    title: "Wei In Sight",
    shortTitle: "Wei In Sight",
    // TODO(content): Jacky to review and approve this summary
    summary:
      "A custom portfolio platform organizing visual art, music, mixed media, writing, story worlds, personal history, and collecting pathways within one immersive identity.",
    cardStatement:
      "A digital self-portrait where the body becomes the map to a connected creative world.",
    // TODO(content): Jacky to confirm exact launch date
    year: "Live",
    status: "live",
    featured: false,
    featuredOrder: 1, // Ensures it appears first in non-featured lists
    categories: ["digital-products", "brand-experience"],
    capabilities: [
      "Information Architecture",
      "Interaction Design",
      "Brand Direction",
      "Content Modeling",
    ],
    // TODO(content): Jacky to confirm exact roles and collaborators
    roles: ["Founder", "Artist", "Creative Direction", "Product & Experience Design", "Web Development"],
    collaborators: [],
    heroImage: {
      src: "/images/projects/wei-in-sight/desktop-landing.jpg",
      alt: "Wei In Sight desktop landing experience showing the body-as-map concept",
      width: 1440,
      height: 900,
      provenance: "original",
      // TODO(content): Replace placeholder with actual image when provided
      disclosure: "Live production interface, captured in 2026.",
    },
    liveUrl: "https://www.weiinsight.com",
    caseStudyPath: "/work/wei-in-sight",
    seo: {
      title: "Wei In Sight — The Creative Atlas of Jacky Ho",
      description:
        "Designing a multidisciplinary art practice as an explorable creative atlas.",
      image: "/images/projects/wei-in-sight/wei-in-sight-og.jpg",
    },
  },

  // ---------------------------------------------------------------------------
  // 5. The Village Art Studio
  // ---------------------------------------------------------------------------
  {
    slug: "the-village-art-studio",
    title: "The Village Art Studio",
    shortTitle: "TVAS",
    // TODO(content): Jacky to review and approve this summary
    summary:
      "A community platform connecting artist stories, monthly showcases, podcast conversations, workshops, membership, and partnerships within one coherent service.",
    cardStatement:
      "Designing a bilingual platform for Toronto's local creative community.",
    // TODO(content): Jacky to confirm exact launch date
    year: "Live",
    status: "live",
    featured: false,
    featuredOrder: 2, // Ensures it appears second in non-featured lists
    categories: ["digital-products", "brand-experience"],
    capabilities: [
      "Product Strategy",
      "Service Design",
      "Content Systems",
      "Localization",
    ],
    // TODO(content): Jacky to confirm exact roles and collaborators
    roles: ["Founder", "Product Strategy", "Creative Direction", "Content & Experience Design", "Web Development"],
    collaborators: [],
    heroImage: {
      src: "/images/projects/tvas/desktop-homepage.jpg",
      alt: "The Village Art Studio homepage showcasing community platform features",
      width: 1440,
      height: 900,
      provenance: "original",
      // TODO(content): Replace placeholder with actual image when provided
      disclosure: "Live production interface, captured in 2026.",
    },
    liveUrl: "https://www.tvas.ca",
    caseStudyPath: "/work/the-village-art-studio",
    seo: {
      title: "The Village Art Studio — A Contemporary Creative Platform",
      description:
        "Designing a bilingual platform for Toronto's local creative community.",
      image: "/images/projects/tvas/tvas-og.jpg",
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
