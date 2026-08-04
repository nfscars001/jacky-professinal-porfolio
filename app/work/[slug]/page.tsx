import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/content/projects";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { ProjectFacts } from "@/components/case-study/project-facts";
import { ProjectPagination } from "@/components/case-study/project-pagination";

import { ArtpressoCaseStudy } from "@/content/case-studies/artpresso";
import { BioUnionCaseStudy } from "@/content/case-studies/bio-union";
import { PaviqoCaseStudy } from "@/content/case-studies/paviqo";
import { ProjectNexusCaseStudy } from "@/content/case-studies/project-nexus";
import { WeiInSightCaseStudy } from "@/content/case-studies/wei-in-sight";
import { TVASCaseStudy } from "@/content/case-studies/the-village-art-studio";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return generatePageMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/work/${slug}`,
    image: project.seo.image,
  });
}

/**
 * Case study page rendering the shared modules and specific content.
 */
export default async function CaseStudyPage(props: Props) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  // Define at-a-glance facts based on the project slug
  let problem = "";
  let duration = "";
  let ContentComponent = null;

  switch (slug) {
    case "artpresso":
      problem = "Independent artists needed a consistent, transparent tool to price their artwork without guesswork.";
      duration = "Open beta since Dec 2025";
      ContentComponent = ArtpressoCaseStudy;
      break;
    case "bio-union":
      problem = "Health data is often captured in short clinical windows or through consumer devices not designed for sustained monitoring.";
      duration = "2015–2023";
      ContentComponent = BioUnionCaseStudy;
      break;
    case "paviqo":
      problem = "Automotive dealerships were losing sales due to lead leakage outside business hours or during high volume periods.";
      duration = "Open beta since March 2026";
      ContentComponent = PaviqoCaseStudy;
      break;
    case "project-nexus":
      problem = "Repetitive business coordination consumed disproportionate owner time, yet existing tools required either significant technical setup or produced disconnected, generic experiences.";
      duration = "In development (marketing site live)";
      ContentComponent = ProjectNexusCaseStudy;
      break;
    case "wei-in-sight":
      problem = "Multiple disciplines, formats, and audiences could easily feel scattered without a unifying architecture.";
      duration = "Live";
      ContentComponent = WeiInSightCaseStudy;
      break;
    case "the-village-art-studio":
      problem = "Local artists needed sustained visibility and real-world connection, while audiences needed clear ways to participate.";
      duration = "Live";
      ContentComponent = TVASCaseStudy;
      break;
    default:
      notFound();
  }

  return (
    <article>
      <CaseStudyHero project={project} />
      <ProjectFacts project={project} problem={problem} duration={duration} />
      
      {ContentComponent && <ContentComponent />}

      <ProjectPagination currentProjectSlug={slug} />
    </article>
  );
}
