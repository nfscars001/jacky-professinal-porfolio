/**
 * ContactCTA section for the homepage.
 * Implements §7.8 of the development spec.
 */
export function ContactCTA() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-dark-panel)",
        color: "var(--color-on-dark)",
        paddingTop: "clamp(4rem, 10vw, 6rem)",
        paddingBottom: "clamp(4rem, 10vw, 6rem)",
      }}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2
            id="contact-heading"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "var(--step-h2)",
              color: "inherit",
              marginBottom: "1rem",
            }}
          >
            Building something thoughtful? Let&apos;s talk.
          </h2>
          <p
            style={{
              color: "rgba(252, 248, 251, 0.7)", // color-on-dark slightly faded
              fontSize: "var(--step-lead)",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            Open to roles in product design, innovation strategy, and creative technology.
            Based in Toronto, Canada.
          </p>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="mailto:TODO(content): add-email@domain.com"
              style={{
                padding: "0.875rem 1.75rem",
                backgroundColor: "var(--color-accent)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "var(--step-small)",
                textDecoration: "none",
                borderRadius: "var(--radius-sm)",
                transition: "background-color var(--transition-base)",
              }}
              className="contact-primary-btn"
            >
              Email Jacky
            </a>
            <a
              href="https://www.linkedin.com/in/jacky-ho-mfa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.875rem 1.75rem",
                border: "1px solid rgba(252, 248, 251, 0.2)",
                color: "var(--color-on-dark)",
                fontWeight: 500,
                fontSize: "var(--step-small)",
                textDecoration: "none",
                borderRadius: "var(--radius-sm)",
                transition: "background-color var(--transition-base)",
              }}
              className="contact-secondary-btn"
            >
              LinkedIn Profile ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-primary-btn:hover {
          background-color: var(--color-accent-hover) !important;
        }
        .contact-secondary-btn:hover {
          background-color: rgba(252, 248, 251, 0.1) !important;
        }
      `}</style>
    </section>
  );
}
