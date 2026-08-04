import Image from "next/image";
import Link from "next/link";

/**
 * Hero section for the homepage.
 * Implements §7.2 of the development spec.
 */
export function Hero() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <section
      className="container"
      style={{
        paddingTop: "clamp(6rem, 15vh, 10rem)",
        paddingBottom: "clamp(4rem, 10vh, 8rem)",
      }}
      aria-label="Introduction"
    >
      <div
        style={{
          display: "grid",
          gap: "clamp(3rem, 6vw, 5rem)",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left column: Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "var(--step-label)",
                color: "var(--color-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Product Designer · Creative Technologist
            </p>
            <h1
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "var(--step-h1)",
                color: "var(--color-ink)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                maxWidth: "16ch",
              }}
            >
              I design products where technology, creativity, and business meet.
            </h1>
          </div>
          
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "var(--step-lead)",
              maxWidth: "42ch",
              lineHeight: 1.65,
              marginBottom: "1rem",
            }}
          >
            Toronto-based product designer and creative technologist working
            across AI platforms, digital tools, and connected products.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: "1rem",
            }}
            className="hero-ctas"
          >
            <Link
              href="/work"
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
              className="primary-cta"
            >
              View selected work
            </Link>

          </div>

          <p
            style={{
              fontSize: "var(--step-label)",
              color: "var(--color-muted)",
              maxWidth: "55ch",
              lineHeight: 1.5,
            }}
          >
            Founder at Westside Union · Faculty at George Brown College · Open to
            product, innovation, and creative technology opportunities
          </p>
        </div>

        {/* Right column: Editorial Portrait */}
        <div style={{ position: "relative", alignSelf: "start" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 4",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-line)",
              boxShadow: "6px 6px 0px var(--color-accent-soft)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/profile/jacky-ho-portrait.jpg"
              alt="Portrait of Jacky Ho"
              fill
              priority
              sizes="(max-width: 899px) 100vw, 50vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-2rem",
              right: 0,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "var(--step-label)",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              TORONTO / {CURRENT_YEAR}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .hero-grid {
            /* 6/6 grid split with gap logic */
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1200px) {
          .hero-grid {
            /* 7/5 split for extra large screens */
            grid-template-columns: 7fr 5fr;
          }
        }
        .primary-cta:hover {
          background-color: var(--color-accent-hover) !important;
        }
        .secondary-cta:hover {
          background-color: var(--color-ink) !important;
          color: var(--color-canvas) !important;
        }
        @media (max-width: 390px) {
          .hero-ctas {
            flex-direction: column;
            align-items: stretch !important;
          }
          .hero-ctas > * {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
