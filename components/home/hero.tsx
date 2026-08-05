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

            {/* LinkedIn icon link */}
            <a
              href="https://www.linkedin.com/in/jacky-ho-mfa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile, opens in a new tab"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                border: "1px solid var(--color-line)",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-muted)",
                transition: "color var(--transition-base), border-color var(--transition-base)",
              }}
              className="hero-icon-link"
            >
              {/* LinkedIn icon */}
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub icon link */}
            <a
              href="https://github.com/nfscars001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile, opens in a new tab"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                border: "1px solid var(--color-line)",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-muted)",
                transition: "color var(--transition-base), border-color var(--transition-base)",
              }}
              className="hero-icon-link"
            >
              {/* GitHub icon */}
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

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
        .hero-icon-link:hover {
          color: var(--color-ink) !important;
          border-color: var(--color-ink) !important;
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
