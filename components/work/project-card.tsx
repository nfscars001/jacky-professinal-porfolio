import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
}

/**
 * Reusable server component for rendering an individual project in a grid.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  // Use cardImage if available, fallback to heroImage
  const imageToUse = project.cardImage || project.heroImage;
  const href = project.caseStudyPath ?? `/work/${project.slug}`;

  return (
    <article
      className="project-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <Link
        href={href}
        className="project-image-link"
        aria-label={`View ${project.title}`}
        style={{ display: "block" }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            border: "1px solid var(--color-line)",
            backgroundColor: "var(--color-canvas)",
          }}
          className="image-wrapper"
        >
          <Image
            src={imageToUse.src}
            alt={imageToUse.alt}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1199px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transition: "transform 240ms ease",
            }}
            className="project-image"
          />
        </div>
      </Link>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "var(--step-body)",
              color: "var(--color-ink)",
              margin: 0,
            }}
          >
            <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
              {project.title}
            </Link>
          </h3>
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "var(--step-label)",
              color: "var(--color-muted)",
              textTransform: "uppercase",
            }}
          >
            {project.year}
          </span>
        </div>

        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "var(--step-small)",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {project.cardStatement}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          {project.capabilities.slice(0, 3).map((cap) => (
            <span
              key={cap}
              style={{
                padding: "0.25rem 0.5rem",
                backgroundColor: "rgba(23, 20, 23, 0.04)",
                borderRadius: "4px",
                fontSize: "calc(var(--step-label) * 0.9)",
                color: "var(--color-muted)",
              }}
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .project-image-link:hover .project-image {
            transform: scale(1.02);
          }
        }
      `}</style>
    </article>
  );
}
