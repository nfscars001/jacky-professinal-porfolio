import Link from "next/link";

/**
 * AboutPreview section for the homepage.
 * Implements §7.7 of the development spec.
 */
export function AboutPreview() {
  return (
    <section
      className="container section"
      style={{
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
      aria-labelledby="about-preview-heading"
    >
      <div
        className="about-preview-grid"
        style={{
          display: "grid",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div>
          <h2
            id="about-preview-heading"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "var(--step-h2)",
              color: "var(--color-ink)",
              marginBottom: "1rem",
            }}
          >
            A practice rooted in exploration.
          </h2>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "var(--step-lead)",
              lineHeight: 1.6,
            }}
          >
            My approach to product design is informed by a long-standing artistic practice. 
            Whether I am developing AI tools for enterprise or creating new media installations, 
            I look for the intersection where human experience and complex systems meet.
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}>
            <Link
              href="/about"
              style={{
                color: "var(--color-ink)",
                fontSize: "var(--step-small)",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Read full about
            </Link>
            <a
              href="https://www.weiinsight.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                color: "var(--color-accent)",
                fontSize: "var(--step-small)",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Explore Art Practice ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-preview-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
}
