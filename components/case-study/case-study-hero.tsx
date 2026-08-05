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

          {project.archiveUrl && (
            <div style={{ marginTop: "1.5rem" }}>
              <a
                href={project.archiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live site, opens in a new tab`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.625rem 1.25rem",
                  border: "1px solid var(--color-accent)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--color-accent)",
                  fontSize: "var(--step-small)",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color var(--transition-base), color var(--transition-base)",
                }}
                className="live-site-link"
              >
                Visit live site
                <svg
                  aria-hidden="true"
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 10L10 2M5 2h5v5" />
                </svg>
              </a>
            </div>
          )}
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
      <style>{`
        .live-site-link:hover {
          background-color: var(--color-accent) !important;
          color: #fff !important;
        }
      `}</style>
    </header>
  );
}
