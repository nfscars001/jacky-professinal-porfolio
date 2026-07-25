import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description:
    "About Jacky Ho — Toronto-based product designer, creative technologist, founder, and educator connecting design, technology, and business.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <div className="container section">
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "var(--step-h1)",
            color: "var(--color-ink)",
            marginBottom: "1rem",
          }}
        >
          About
        </h1>
        <p style={{ color: "var(--color-muted)", fontSize: "var(--step-lead)", maxWidth: "52ch" }}>
          {/* TODO(content): professional bio — Phase 5 */}
          Phase 5 will implement the full About page narrative, career connection,
          and Art Practice link.
        </p>
      </div>
    </div>
  );
}
