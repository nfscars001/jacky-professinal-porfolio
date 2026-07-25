import Link from "next/link";
import { getAllProjects } from "@/content/projects";

interface ProjectPaginationProps {
  currentProjectSlug: string;
}

/**
 * Bottom navigation block for Next/Previous Project and Return to Work.
 */
export function ProjectPagination({ currentProjectSlug }: ProjectPaginationProps) {
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === currentProjectSlug);
  
  if (currentIndex === -1) return null;

  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <nav className="container section" style={{ paddingTop: "4rem", paddingBottom: "4rem", borderTop: "1px solid var(--color-line)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          alignItems: "center",
        }}
        className="pagination-grid"
      >
        <div style={{ textAlign: "left" }}>
          {prevProject && (
            <Link
              href={prevProject.caseStudyPath ?? `/work/${prevProject.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="pagination-link"
            >
              <span className="pagination-label">Previous Project</span>
              <span className="pagination-title">{prevProject.title}</span>
            </Link>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              backgroundColor: "var(--color-surface)",
              color: "var(--color-ink)",
              border: "1px solid var(--color-line)",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "var(--step-small)",
              transition: "all var(--transition-base)",
            }}
            className="return-link"
          >
            Return to Work
          </Link>
        </div>

        <div style={{ textAlign: "right" }}>
          {nextProject && (
            <Link
              href={nextProject.caseStudyPath ?? `/work/${nextProject.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="pagination-link"
            >
              <span className="pagination-label">Next Project</span>
              <span className="pagination-title">{nextProject.title}</span>
            </Link>
          )}
        </div>
      </div>

      <style>{`
        .pagination-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .pagination-grid {
            grid-template-columns: 1fr auto 1fr;
          }
        }
        
        .pagination-link {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: transform var(--transition-base);
        }

        @media (hover: hover) and (pointer: fine) {
          .pagination-link:hover {
            transform: translateY(-2px);
          }
          .pagination-link:hover .pagination-title {
            color: var(--color-accent);
          }
          .return-link:hover {
            background-color: var(--color-ink);
            color: var(--color-canvas);
          }
        }

        .pagination-label {
          font-family: var(--font-space-mono);
          font-size: var(--step-label);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .pagination-title {
          font-family: var(--font-syne);
          font-size: var(--step-body);
          font-weight: 700;
          color: var(--color-ink);
          transition: color var(--transition-base);
        }
      `}</style>
    </nav>
  );
}
