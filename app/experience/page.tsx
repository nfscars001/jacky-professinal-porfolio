
import { generatePageMetadata } from "@/lib/metadata";
import { experiences } from "@/content/experience";

export const metadata = generatePageMetadata({
  title: "Experience",
  description: "Jacky Ho's professional experience and career timeline.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <article className="container section" style={{ paddingTop: "clamp(4rem, 10vw, 8rem)" }}>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "var(--step-h1)",
            color: "var(--color-ink)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Professional Experience
        </h1>
        <p
          style={{
            fontSize: "var(--step-lead)",
            color: "var(--color-muted)",
            lineHeight: 1.6,
          }}
        >
          A history of leading product design, connecting technology with human experience, and building cross-functional teams.
        </p>

        <div style={{ marginTop: "1rem" }}>
          <a
            href="/documents/jacky-ho-resume.pdf"
            download="Jacky-Ho-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 1.5rem",
              backgroundColor: "var(--color-ink)",
              color: "var(--color-canvas)",
              borderRadius: "999px",
              fontFamily: "var(--font-geist)",
              fontWeight: 600,
              fontSize: "var(--step-small)",
              textDecoration: "none",
              transition: "background-color var(--transition-base)",
            }}
            className="resume-button"
          >
            Download Résumé ↓
          </a>
        </div>
      </header>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "var(--step-h3)",
                      fontWeight: 700,
                      color: "var(--color-ink)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {exp.role}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "var(--step-small)",
                      color: "var(--color-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
                <div
                  className="timeline-duration"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "var(--step-small)",
                    color: "var(--color-accent)",
                    padding: "0.25rem 0.75rem",
                    backgroundColor: "var(--color-accent-soft)",
                    borderRadius: "999px",
                    display: "inline-block",
                  }}
                >
                  {exp.duration}
                </div>
              </div>

              <p
                style={{
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                  fontSize: "var(--step-body)",
                  lineHeight: 1.6,
                  color: "var(--color-ink)",
                  maxWidth: "var(--reading-width)",
                }}
              >
                {exp.description}
              </p>

              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {exp.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    style={{
                      fontSize: "var(--step-label)",
                      padding: "0.25rem 0.75rem",
                      border: "1px solid var(--color-line)",
                      borderRadius: "4px",
                      color: "var(--color-muted)",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .resume-button:hover {
          background-color: var(--color-accent);
        }

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1px;
          background-color: var(--color-line);
        }

        .timeline-item {
          position: relative;
          padding-bottom: 4rem;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          top: 0.5rem;
          left: -2.35rem; /* center on the line */
          width: 0.75rem;
          height: 0.75rem;
          background-color: var(--color-canvas);
          border: 2px solid var(--color-accent);
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
        }

        @media (min-width: 640px) {
          .timeline-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </article>
  );
}
