import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Experience",
  description:
    "Jacky Ho's career experience — product design, creative technology, wearable health, teaching, and entrepreneurship.",
  path: "/experience",
});

export default function ExperiencePage() {
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
          Experience
        </h1>
        <p style={{ color: "var(--color-muted)", fontSize: "var(--step-lead)", maxWidth: "52ch" }}>
          {/* TODO(content): experience narrative — Phase 5 */}
          Phase 5 will implement the full experience timeline and career narrative.
        </p>
      </div>
    </div>
  );
}
