import { type Project } from "@/content/projects";

interface ProjectFactsProps {
  project: Project;
  problem: string;
  duration: string;
}

/**
 * At-a-glance section for case studies.
 */
export function ProjectFacts({ project, problem, duration }: ProjectFactsProps) {
  return (
    <section className="container section" style={{ paddingBottom: "3rem" }}>
      <div
        className="facts-grid"
        style={{
          display: "grid",
          gap: "2rem",
          padding: "2rem",
          backgroundColor: "var(--color-dark-panel)",
          borderRadius: "var(--radius-md)",
          color: "var(--color-surface)",
        }}
      >
        <div>
          <h2 className="fact-heading">Problem</h2>
          <p className="fact-text">{problem}</p>
        </div>

        <div>
          <h2 className="fact-heading">Role & Contribution</h2>
          <p className="fact-text">{project.roles.join(", ")}</p>
        </div>

        <div>
          <h2 className="fact-heading">Duration</h2>
          <p className="fact-text">{duration}</p>
        </div>

        <div>
          <h2 className="fact-heading">Status / Outcome</h2>
          <p className="fact-text" style={{ textTransform: "capitalize" }}>
            {project.status.replace("-", " ")}
          </p>
        </div>
      </div>

      <style>{`
        .facts-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 900px) {
          .facts-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }

        .fact-heading {
          font-family: var(--font-space-mono);
          font-size: var(--step-label);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
          margin-top: 0;
        }

        .fact-text {
          font-size: var(--step-small);
          line-height: 1.5;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </section>
  );
}
