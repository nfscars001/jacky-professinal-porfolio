import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/content/projects";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
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
 * Case study page — Phase 4 will implement full case-study modules.
 * Static generation is configured via generateStaticParams.
 */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div style={{ paddingTop: "6rem" }}>
      <div className="container section">
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "var(--step-label)",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}
        >
          {project.status.replace("-", " ")} · {project.year}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "var(--step-h1)",
            color: "var(--color-ink)",
            marginBottom: "1rem",
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "var(--step-lead)",
            maxWidth: "52ch",
            lineHeight: 1.65,
          }}
        >
          {project.summary}
        </p>
        <p
          style={{
            marginTop: "2rem",
            fontSize: "var(--step-small)",
            color: "var(--color-line)",
          }}
        >
          Full case study coming in Phase 4.
        </p>
      </div>
    </div>
  );
}
