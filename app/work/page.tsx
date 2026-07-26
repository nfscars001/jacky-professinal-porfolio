import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ProjectFilters } from "@/components/work/project-filters";
import { ProjectGrid } from "@/components/work/project-grid";
import { getAllProjects, type ProjectCategory } from "@/content/projects";

export const metadata: Metadata = generatePageMetadata({
  title: "Work",
  description:
    "Selected work by Jacky Ho — product design, AI workflows, wearable technology, and creative tools.",
  path: "/work",
});

interface WorkPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function WorkPage(props: WorkPageProps) {
  const searchParams = await props.searchParams;
  const filter = typeof searchParams.filter === "string" ? searchParams.filter : "all";

  const allProjects = getAllProjects();

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(filter as ProjectCategory));

  return (
    <div style={{ paddingTop: "clamp(4rem, 10vw, 8rem)", paddingBottom: "clamp(4rem, 10vw, 8rem)" }}>
      <div className="container section">
        <div style={{ marginBottom: "clamp(3rem, 6vw, 4rem)" }}>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "var(--step-h1)",
              color: "var(--color-ink)",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Selected Work
          </h1>
          <p style={{ color: "var(--color-muted)", fontSize: "var(--step-lead)", maxWidth: "52ch", lineHeight: 1.6 }}>
            A collection of projects spanning enterprise AI applications, connected hardware ecosystems, and digital brand experiences.
          </p>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <ProjectFilters />
        </div>

        {/* 
          Using a key on this wrapper forces a React re-mount of the grid 
          when the filter changes, which is a simple way to trigger opacity transitions 
          or ensure clean state. (Opacity transition logic can also be added here).
        */}
        <div
          key={filter}
          className="fade-in-grid"
        >
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>

      <style>{`
        .fade-in-grid {
          animation: fade-in var(--transition-base) ease-out forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
