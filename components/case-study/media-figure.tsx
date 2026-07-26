import Image from "next/image";
import { DisclosureCaption } from "./disclosure-caption";

interface MediaFigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: "inset" | "full" | "bleed";
  caption?: string;
  disclosure?: string;
  priority?: boolean;
}

/**
 * Reusable component for inline images, supporting different widths (inset, full, bleed) and captions.
 */
export function MediaFigure({
  src,
  alt,
  width,
  height,
  layout = "inset",
  caption,
  disclosure,
  priority = false,
}: MediaFigureProps) {
  let layoutClass = "container";
  if (layout === "inset") layoutClass = "container-narrow";
  if (layout === "bleed") layoutClass = "container-fluid"; // requires CSS additions if not present

  return (
    <figure
      className={`section ${layoutClass}`}
      style={{
        marginInline: "auto",
        marginBottom: "clamp(2rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: `${width} / ${height}`,
          borderRadius: layout === "bleed" ? "0" : "var(--radius-md)",
          overflow: "hidden",
          backgroundColor: "var(--color-canvas)",
          border: layout === "bleed" ? "none" : "1px solid var(--color-line)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            layout === "inset"
              ? "(max-width: 768px) 100vw, 800px"
              : layout === "full"
              ? "(max-width: 1200px) 100vw, 1200px"
              : "100vw"
          }
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>

      {(caption || disclosure) && (
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          {caption && (
            <figcaption
              style={{
                fontSize: "var(--step-small)",
                color: "var(--color-ink)",
                lineHeight: 1.5,
              }}
            >
              {caption}
            </figcaption>
          )}
          {disclosure && <DisclosureCaption content={disclosure} />}
        </div>
      )}
    </figure>
  );
}
