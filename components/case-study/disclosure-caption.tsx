interface DisclosureCaptionProps {
  content: string;
}

/**
 * Reusable caption for AI/provenance disclosure inside case studies.
 * Keeps disclosure factual and visually quiet.
 */
export function DisclosureCaption({ content }: DisclosureCaptionProps) {
  if (!content) return null;

  return (
    <figcaption
      style={{
        marginTop: "1rem",
        fontSize: "var(--step-small)",
        color: "var(--color-muted)",
        fontFamily: "var(--font-space-mono)",
        letterSpacing: "0.02em",
        textAlign: "center",
        maxWidth: "65ch",
        marginInline: "auto",
        lineHeight: 1.5,
      }}
    >
      {content}
    </figcaption>
  );
}
