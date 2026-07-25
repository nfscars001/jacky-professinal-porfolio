import Image from "next/image";
import { type Project } from "@/content/projects";
import { DisclosureCaption } from "./disclosure-caption";

interface CaseStudyHeroProps {
  project: Project;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header className="case-study-hero" style={{ paddingTop: "clamp(4rem, 10vw, 8rem)" }}>
      <div className="container section">
        <div style={{ maxWidth: "65ch", marginBottom: "clamp(3rem, 6vw, 4rem)" }}>
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
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "var(--step-lead)",
              lineHeight: 1.6,
            }}
          >
            {project.summary}
          </p>
        </div>
      </div>

      <div className="container section">
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            backgroundColor: "var(--color-canvas)",
            border: "1px solid var(--color-line)",
          }}
        >
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority // Hero image is prioritized for LCP
          />
        </div>
        {project.heroImage.disclosure && (
          <DisclosureCaption content={project.heroImage.disclosure} />
        )}
      </div>
    </header>
  );
}
