import { careerJourneyStages } from "@/content/experience";

/**
 * CareerJourney section for the homepage.
 * Implements §7.5 of the development spec.
 */
export function CareerJourney() {
  return (
    <section
      className="container section"
      style={{
        paddingTop: "clamp(4rem, 8vw, 6rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
        backgroundColor: "rgba(23, 20, 23, 0.02)",
        borderRadius: "var(--radius-lg)",
        marginBottom: "clamp(3rem, 6vw, 5rem)",
      }}
      aria-labelledby="career-journey-heading"
    >
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h2
          id="career-journey-heading"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "var(--step-h3)",
            color: "var(--color-ink)",
            marginBottom: "0.5rem",
          }}
        >
          Career Journey
        </h2>
        <p style={{ color: "var(--color-muted)", fontSize: "var(--step-body)" }}>
          A multidisciplinary progression over the past decade.
        </p>
      </div>

      <div className="timeline-container">
        {careerJourneyStages.map((stage, index) => {
          const isLast = index === careerJourneyStages.length - 1;

          return (
            <div
              key={stage.id}
              className="timeline-item"
              style={{
                position: "relative",
                flex: 1,
              }}
            >
              {/* Desktop connecting line */}
              {!isLast && <div className="timeline-rule-desktop" aria-hidden="true" />}
              
              <div className="timeline-content">
                {/* Node / dot */}
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent)",
                    marginBottom: "1rem",
                    position: "relative",
                    zIndex: 2,
                  }}
                  className="timeline-dot"
                />
                
                {/* Mobile vertical connecting line */}
                {!isLast && <div className="timeline-rule-mobile" aria-hidden="true" />}

                <div
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "var(--step-label)",
                    color: "var(--color-muted)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {stage.dateRange}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "var(--step-small)",
                    color: "var(--color-ink)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stage.label}
                </h3>
                <p
                  style={{
                    color: "var(--color-muted)",
                    fontSize: "var(--step-label)",
                    lineHeight: 1.5,
                  }}
                >
                  {stage.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .timeline-content {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-dot {
          position: absolute;
          left: 0;
          top: 0.25rem;
          margin-bottom: 0 !important;
        }

        .timeline-rule-desktop {
          display: none;
        }

        .timeline-rule-mobile {
          position: absolute;
          left: 5px;
          top: 1rem;
          bottom: -2.5rem;
          width: 2px;
          background-color: var(--color-line);
          z-index: 1;
        }

        @media (min-width: 900px) {
          .timeline-container {
            flex-direction: row;
            gap: 1.5rem;
            max-width: 100%;
          }
          
          .timeline-content {
            padding-left: 0;
            padding-right: 1.5rem;
          }
          
          .timeline-dot {
            position: static;
            margin-bottom: 1rem !important;
          }
          
          .timeline-rule-mobile {
            display: none;
          }
          
          .timeline-rule-desktop {
            display: block;
            position: absolute;
            left: 12px;
            right: 1rem;
            top: 5px;
            height: 2px;
            background-color: var(--color-line);
            z-index: 1;
          }
        }
      `}</style>
    </section>
  );
}
