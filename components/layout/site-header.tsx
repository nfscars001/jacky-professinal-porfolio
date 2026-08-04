import Link from "next/link";
import { MobileNav } from "./mobile-nav";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
] as const;

const ART_PRACTICE_URL = "https://www.weiinsight.com";

/**
 * SiteHeader — fixed translucent header with desktop nav and mobile nav.
 * Server Component — MobileNav is the only client island.
 * §6.2, §7.1
 */
export function SiteHeader() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "rgba(247, 244, 241, 0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4rem",
          gap: "1rem",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Jacky Ho — home"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "1.125rem",
            color: "var(--color-ink)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          Jacky Ho
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                padding: "0.5rem 0.75rem",
                color: "var(--color-muted)",
                fontSize: "var(--step-small)",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "6px",
                transition: "color var(--transition-base), background-color var(--transition-base)",
              }}
              className="nav-link"
            >
              {label}
            </Link>
          ))}

          {/* Art Practice external link */}
          <a
            href={ART_PRACTICE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Art Practice, opens in a new tab"
            style={{
              padding: "0.5rem 0.75rem",
              color: "var(--color-muted)",
              fontSize: "var(--step-small)",
              fontWeight: 500,
              textDecoration: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              transition: "color var(--transition-base), background-color var(--transition-base)",
            }}
            className="nav-link"
          >
            Art Practice
            <svg
              aria-hidden="true"
              width="11"
              height="11"
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


        </nav>

        {/* Mobile nav (client component) */}
        <MobileNav navLinks={NAV_LINKS} artPracticeUrl={ART_PRACTICE_URL} />
      </div>

      <style>{`
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 900px) {
          .mobile-nav-trigger { display: none !important; }
        }
        .nav-link:hover {
          color: var(--color-ink);
          background-color: rgba(23, 20, 23, 0.06);
        }

      `}</style>
    </header>
  );
}
