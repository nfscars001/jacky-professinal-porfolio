import Image from "next/image";

interface MediaFigureProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  disclosure?: string;
  layout?: "contained" | "full";
}

export function MediaFigure({
  src,
  alt,
  width = 1200,
  height = 800,
  caption,
  disclosure,
  layout = "contained",
}: MediaFigureProps) {
  return (
    <figure
      className={`media-figure ${layout === "full" ? "layout-full" : "container"}`}
      style={{
        margin: "3rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          borderRadius: layout === "contained" ? "12px" : "0",
          overflow: "hidden",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      {(caption || disclosure) && (
        <figcaption
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            fontSize: "var(--step-small)",
            color: "var(--color-muted)",
            textAlign: "center",
          }}
        >
          {caption && <span>{caption}</span>}
          {disclosure && (
            <span style={{ fontStyle: "italic", opacity: 0.8 }}>
              {disclosure}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
