import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * FeaturedProjects section for the homepage.
 * Implements §7.3 of the development spec.
 */
export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  if (featuredProjects.length === 0) return null;

  return (
    <section
      className="container section"
      aria-labelledby="featured-work-heading"
    >
      <div style={{ marginBottom: "3rem" }}>
        <h2
          id="featured-work-heading"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "var(--step-h2)",
            color: "var(--color-ink)",
            marginBottom: "0.5rem",
          }}
        >
          Selected Work
        </h2>
        <p style={{ color: "var(--color-muted)", fontSize: "var(--step-lead)" }}>
          Recent projects across product design, AI, and physical innovation.
        </p>
      </div>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gap: "2.5rem",
        }}
      >
        {featuredProjects.map((project, index) => {
          // First project is lead (full width on desktop), others are supporting (half width)
          const isLead = index === 0;

          return (
            <article
              key={project.slug}
              className={cn("project-card", isLead && "project-card--lead")}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Link
                href={project.caseStudyPath ?? `/work/${project.slug}`}
                className="project-image-link"
                aria-label={`Read case study for ${project.title}`}
                style={{ display: "block" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: isLead ? "16 / 9" : "4 / 3",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    border: "1px solid var(--color-line)",
                    backgroundColor: "var(--color-line)",
                  }}
                  className="image-wrapper"
                >
                  <Image
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    fill
                    sizes={
                      isLead
                        ? "(max-width: 1199px) 100vw, 1200px"
                        : "(max-width: 899px) 100vw, 50vw"
                    }
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 240ms ease",
                    }}
                    className="project-image"
                  />
                </div>
              </Link>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem 1rem",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: "var(--step-h3)",
                      color: "var(--color-ink)",
                      margin: 0,
                    }}
                  >
                    <Link
                      href={project.caseStudyPath ?? `/work/${project.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "var(--step-label)",
                      color: "var(--color-accent)",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.status.replace("-", " ")} · {project.year}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--color-ink)",
                    fontSize: "var(--step-body)",
                    lineHeight: 1.5,
                  }}
                >
                  {project.cardStatement}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "auto",
                    paddingTop: "0.5rem",
                  }}
                >
                  {project.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap}
                      style={{
                        padding: "0.25rem 0.5rem",
                        backgroundColor: "rgba(23, 20, 23, 0.04)",
                        borderRadius: "4px",
                        fontSize: "var(--step-label)",
                        color: "var(--color-muted)",
                      }}
                    >
                      {cap}
                    </span>
                  ))}
                  {project.capabilities.length > 3 && (
                    <span
                      style={{
                        padding: "0.25rem 0.5rem",
                        backgroundColor: "rgba(23, 20, 23, 0.04)",
                        borderRadius: "4px",
                        fontSize: "var(--step-label)",
                        color: "var(--color-muted)",
                      }}
                    >
                      +{project.capabilities.length - 3}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginTop: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href={project.caseStudyPath ?? `/work/${project.slug}`}
                    style={{
                      color: "var(--color-ink)",
                      fontSize: "var(--step-small)",
                      fontWeight: 600,
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    Read case study
                  </Link>
                  {(project.liveUrl || project.archiveUrl) && (
                    <a
                      href={project.liveUrl || project.archiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        color: "var(--color-muted)",
                        fontSize: "var(--step-small)",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      View live site ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <Link
          href="/work"
          style={{
            display: "inline-flex",
            padding: "0.875rem 1.75rem",
            backgroundColor: "var(--color-ink)",
            color: "var(--color-canvas)",
            fontWeight: 600,
            fontSize: "var(--step-small)",
            textDecoration: "none",
            borderRadius: "var(--radius-sm)",
            transition: "background-color var(--transition-base)",
          }}
          className="all-work-btn"
        >
          View all work
        </Link>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 4rem;
            column-gap: 2.5rem;
          }
          .project-card--lead {
            grid-column: 1 / -1;
            flex-direction: row !important;
            align-items: center;
            gap: 3rem !important;
          }
          .project-card--lead > .project-image-link {
            flex: 1.2;
            width: 100%;
          }
          .project-card--lead > div {
            flex: 1;
          }
        }
        
        @media (hover: hover) and (pointer: fine) {
          .project-image-link:hover .project-image {
            transform: scale(1.02);
          }
        }
        
        .all-work-btn:hover {
          background-color: var(--color-accent) !important;
        }
      `}</style>
    </section>
  );
}
