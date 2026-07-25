import { ProjectCard } from "@/components/work/project-card";
import { type Project } from "@/content/projects";

interface ProjectGridProps {
  projects: Project[];
}

/**
 * Server component for rendering a responsive grid of projects.
 * Handled via opacity transition in the parent page when filters change.
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div style={{ padding: "4rem 0", textAlign: "center", color: "var(--color-muted)" }}>
        <p>No projects found for the selected category.</p>
      </div>
    );
  }

  return (
    <div
      className="work-project-grid"
      style={{
        display: "grid",
        gap: "3rem",
        rowGap: "4rem",
      }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}

      <style>{`
        .work-project-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .work-project-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .work-project-grid {
            /* Three columns only when cards remain at least 320 px wide */
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
