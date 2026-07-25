"use client";



/**
 * SkipLink — visible-on-focus link to bypass navigation.
 * Satisfies WCAG 2.4.1 Bypass Blocks (§16).
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: "absolute",
        top: "-100%",
        left: "1rem",
        zIndex: 9999,
        padding: "0.75rem 1.25rem",
        backgroundColor: "var(--color-ink)",
        color: "var(--color-canvas)",
        fontFamily: "var(--font-geist)",
        fontSize: "var(--step-small)",
        fontWeight: 600,
        textDecoration: "none",
        borderRadius: "0 0 8px 8px",
        transition: "top 200ms ease",
      }}
      onFocus={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.top = "0";
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.top = "-100%";
      }}
    >
      Skip to main content
    </a>
  );
}
