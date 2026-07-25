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
      duration = "3 months (2025)";
      ContentComponent = ArtpressoCaseStudy;
      break;
    case "bio-union":
      problem = "Athletes needed high-fidelity physiological data that standard wrist-based trackers couldn't accurately provide.";
      duration = "2 years (2018–2020)";
      ContentComponent = BioUnionCaseStudy;
      break;
    case "paviqo":
      problem = "Automotive dealerships were losing sales due to lead leakage outside business hours or during high volume periods.";
      duration = "Ongoing (2026)";
      ContentComponent = PaviqoCaseStudy;
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
