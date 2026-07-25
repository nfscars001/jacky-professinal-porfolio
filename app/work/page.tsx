import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Work",
  description:
    "Selected work by Jacky Ho — product design, AI workflows, wearable technology, and creative tools.",
  path: "/work",
});

export default function WorkPage() {
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
          Selected Work
        </h1>
        <p style={{ color: "var(--color-muted)", fontSize: "var(--step-lead)", maxWidth: "52ch" }}>
          {/* TODO(content): work page positioning statement — Phase 3 */}
          Phase 3 will implement the project grid, filters, and full work index.
        </p>
      </div>
    </div>
  );
}
