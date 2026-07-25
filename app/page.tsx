import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Jacky Ho — Product Designer & Creative Technologist",
  description:
    "Toronto-based product designer and creative technologist working across AI platforms, digital tools, and connected products.",
  path: "/",
});

/**
 * Homepage — Phase 2 will replace this stub with full sections.
 * Content is server-rendered and visible without JavaScript (§14).
 */
export default function HomePage() {
  return (
    <>
      {/* Phase 1 stub — Phase 2 will implement all hero and section components */}
      <div
        style={{
          paddingTop: "6rem",
          paddingBottom: "4rem",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "var(--step-label)",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "1.5rem",
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
            maxWidth: "16ch",
            marginBottom: "1.5rem",
          }}
        >
          I design products where technology, creativity, and business meet.
        </h1>
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "var(--step-lead)",
            maxWidth: "42ch",
            lineHeight: 1.65,
            marginBottom: "2rem",
          }}
        >
          Toronto-based product designer and creative technologist working
          across AI platforms, digital tools, and connected products.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
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
            }}
          >
            View selected work
          </Link>
          <a
            href="/documents/jacky-ho-resume.pdf"
            download="Jacky-Ho-Resume.pdf"
            style={{
              padding: "0.875rem 1.75rem",
              border: "1px solid var(--color-line)",
              color: "var(--color-ink)",
              fontWeight: 500,
              fontSize: "var(--step-small)",
              textDecoration: "none",
              borderRadius: "var(--radius-sm)",
            }}
          >
            Download résumé ↓
          </a>
        </div>
        <p
          style={{
            marginTop: "2rem",
            fontSize: "var(--step-small)",
            color: "var(--color-muted)",
          }}
        >
          Founder at Westside Union · Faculty at George Brown College · Open to
          product, innovation, and creative technology opportunities
        </p>
      </div>
    </>
  );
}
