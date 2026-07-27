import Link from "next/link";
import { getAllProjects } from "@/content/projects";
import { ProjectCard } from "@/components/work/project-card";

/**
 * SelectedProjects section for the homepage.
 * Implements §7.6 of the development spec (Selected Projects Preview).
 */
export function SelectedProjects() {
  const selectedProjects = getAllProjects()
    .filter((p) => !p.featured)
    .slice(0, 4); // Show 4 smaller project cards beyond the featured three

  if (selectedProjects.length === 0) return null;

  return (
    <section
      className="container section"
      aria-labelledby="selected-projects-heading"
    >
      <div style={{ marginBottom: "3rem" }}>
        <h2
          id="selected-projects-heading"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "var(--step-h3)",
            color: "var(--color-ink)",
            marginBottom: "0.5rem",
          }}
        >
          More Selected Projects
        </h2>
        <p style={{ color: "var(--color-muted)", fontSize: "var(--step-body)" }}>
          A broader view into digital platforms, services, and brand experiences.
        </p>
      </div>

      <div
        className="selected-projects-grid"
        style={{
          display: "grid",
          gap: "2.5rem",
        }}
      >
        {selectedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <style>{`
        .selected-projects-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .selected-projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
