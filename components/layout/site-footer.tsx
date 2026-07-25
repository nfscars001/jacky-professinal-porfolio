import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
] as const;

/**
 * SiteFooter — Server Component (§7.9)
 * Contains: name/role, nav, Art Practice external link,
 * LinkedIn, email, dynamic copyright year, availability statement.
 */
export function SiteFooter() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        borderTop: "1px solid var(--color-line)",
        backgroundColor: "var(--color-canvas)",
        paddingBlock: "3rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "start",
          }}
          className="footer-grid"
        >
          {/* Left: identity + nav */}
          <div>
            <Link
              href="/"
              aria-label="Jacky Ho — home"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "1.25rem",
                color: "var(--color-ink)",
                textDecoration: "none",
                marginBottom: "0.25rem",
              }}
            >
              Jacky Ho
            </Link>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "var(--step-small)",
                marginBottom: "1.5rem",
              }}
            >
              Product Designer &amp; Creative Technologist · Toronto, Canada
            </p>

            {/* Core navigation */}
            <nav aria-label="Footer navigation">
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.25rem 1rem",
                  marginBottom: "1.5rem",
                }}
              >
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      style={{
                        color: "var(--color-muted)",
                        fontSize: "var(--step-small)",
                        textDecoration: "none",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://www.weiinsight.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Art Practice, opens in a new tab"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      color: "var(--color-muted)",
                      fontSize: "var(--step-small)",
                      textDecoration: "none",
                    }}
                  >
                    Art Practice
                    <svg
                      aria-hidden="true"
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 10L10 2M5 2h5v5" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact links */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:TODO(content): add-email@domain.com"
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--step-small)",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                {/* TODO(content): replace with Jacky's email address */}
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/jacky-ho-mfa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile, opens in a new tab"
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--step-small)",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: availability + copyright */}
          <div
            style={{
              textAlign: "right",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "var(--step-label)",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              TORONTO / {CURRENT_YEAR}
            </p>
            <p
              style={{
                fontSize: "var(--step-label)",
                color: "var(--color-muted)",
                marginBottom: "0.25rem",
              }}
            >
              Open to product, innovation &amp; creative technology roles
            </p>
            <p
              style={{
                fontSize: "var(--step-label)",
                color: "var(--color-line)",
              }}
            >
              &copy; {CURRENT_YEAR} Jacky Ho. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid > div:last-child {
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}
