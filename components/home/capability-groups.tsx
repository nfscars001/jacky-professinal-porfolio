/**
 * CapabilityGroups section for the homepage.
 * Implements §7.4 of the development spec.
 */
export function CapabilityGroups() {
  const groups = [
    {
      title: "Product & Experience",
      skills: "Product strategy, UX architecture, workflows, prototyping, design systems",
    },
    {
      title: "AI & Technology",
      skills: "AI workflows, automation, SaaS, connected products, hardware/software ecosystems",
    },
    {
      title: "Creative Direction & Business",
      skills: "Brand systems, storytelling, market framing, presentations, stakeholder communication",
    },
  ];

  return (
    <section
      className="container section"
      style={{
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        borderTop: "1px solid var(--color-line)",
      }}
      aria-labelledby="capabilities-heading"
    >
      <div style={{ marginBottom: "3rem" }}>
        <h2
          id="capabilities-heading"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "var(--step-h3)",
            color: "var(--color-ink)",
          }}
        >
          Capabilities
        </h2>
      </div>

      <div
        className="capabilities-grid"
        style={{
          display: "grid",
          gap: "2rem",
        }}
      >
        {groups.map((group) => (
          <div key={group.title} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "var(--step-small)",
                color: "var(--color-ink)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              {group.title}
            </h3>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "var(--step-body)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {group.skills}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .capabilities-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
