import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

/**
 * Custom 404 page (§26 launch checklist: "404 page exists").
 */
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 1rem",
        paddingTop: "8rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "var(--step-label)",
          color: "var(--color-accent)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "1rem",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "var(--step-h2)",
          color: "var(--color-ink)",
          lineHeight: 1.1,
          marginBottom: "1rem",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          color: "var(--color-muted)",
          fontSize: "var(--step-lead)",
          maxWidth: "36ch",
          lineHeight: 1.6,
          marginBottom: "2rem",
        }}
      >
        This page doesn&apos;t exist or has moved. Try navigating back to the
        home page or selected work.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--color-ink)",
            color: "var(--color-canvas)",
            fontWeight: 600,
            fontSize: "var(--step-small)",
            textDecoration: "none",
            borderRadius: "var(--radius-sm)",
          }}
        >
          Go home
        </Link>
        <Link
          href="/work"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1px solid var(--color-line)",
            color: "var(--color-ink)",
            fontWeight: 500,
            fontSize: "var(--step-small)",
            textDecoration: "none",
            borderRadius: "var(--radius-sm)",
          }}
        >
          View work
        </Link>
      </div>
    </div>
  );
}
