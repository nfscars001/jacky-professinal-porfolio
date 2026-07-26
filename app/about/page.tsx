import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About",
  description: "Learn more about Jacky Ho's dual practice in product design and creative technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="container section" style={{ paddingTop: "clamp(4rem, 10vw, 8rem)" }}>
      <div className="about-grid">
        <div className="about-content">
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "var(--step-h1)",
              color: "var(--color-ink)",
              marginBottom: "2rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            A practice rooted in exploration.
          </h1>

          <div
            className="about-narrative"
            style={{
              fontSize: "var(--step-lead)",
              lineHeight: 1.6,
              color: "var(--color-muted)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <p>
              I am a Toronto-based project manager, multidisciplinary designer, and educator with experience leading projects across product development, creative technology, wearable innovation, visual design, and higher education. My career has moved through several disciplines, but the connecting thread has remained consistent: I bring people, ideas, technology, and creative execution together to turn complex concepts into tangible outcomes.
            </p>
            <p>
              Through Westside Union, I have led multidisciplinary initiatives involving product strategy, digital experiences, AI-enabled business tools, branding, research, client communication, and project delivery. Earlier, I founded Bio Union, a wearable-technology venture that combined textile engineering, physiological sensing, hardware, software, and healthcare innovation.
            </p>
            <p>
              As an educator, I have taught university- and college-level design courses, translating technical and creative subjects into practical learning experiences. Teaching has strengthened the same capabilities I bring to project leadership: communication, planning, mentoring, stakeholder alignment, problem-solving, and adapting to different audiences.
            </p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "var(--step-label)",
                color: "var(--color-ink)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.5rem",
              }}
            >
              Core Capabilities
            </h2>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "var(--step-small)",
                color: "var(--color-muted)",
              }}
            >
              <li>Product Design (UX/UI)</li>
              <li>Product Strategy</li>
              <li>Creative Technology</li>
              <li>AI/Automation Workflows</li>
              <li>Design Systems</li>
              <li>Cross-functional Leadership</li>
            </ul>
          </div>
        </div>

        <div className="about-image-container">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 4",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              backgroundColor: "var(--color-canvas)",
              border: "1px solid var(--color-line)",
            }}
          >
            <Image
              src="/images/profile/jacky-ho-portrait.jpg"
              alt="Portrait of Jacky Ho"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
          }
          /* Ensure text is on left, image on right */
          .about-content {
            order: 1;
          }
          .about-image-container {
            order: 2;
          }
        }
      `}</style>

      {/* Education Timeline */}
      <div style={{ marginTop: "6rem", maxWidth: "800px" }}>
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "var(--step-h3)",
            color: "var(--color-ink)",
            marginBottom: "3rem",
            letterSpacing: "-0.01em",
          }}
        >
          Education
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", position: "relative" }}>
          {/* Vertical line connecting the timeline */}
          <div
            style={{
              position: "absolute",
              left: "6px",
              top: "10px",
              bottom: "10px",
              width: "1px",
              backgroundColor: "var(--color-line)",
              zIndex: 0
            }}
          />

          {[
            {
              title: "Master of Fine Arts - MFA, Fashion/Apparel Design",
              school: "ACADEMY OF ART UNIVERSITY",
              years: "2019 - 2022",
              description: "Master of Fine Arts program focused on Fashion and Apparel Design."
            },
            {
              title: "Higher Diploma, FinTech",
              school: "THE UNIVERSITY OF HONG KONG",
              years: "2018 - 2019",
              description: "Higher Diploma focusing on Financial Technology."
            },
            {
              title: "The Dale Carnegie Course",
              school: "DALE CARNEGIE TRAINING",
              years: "2018",
              description: "Professional development and leadership training."
            },
            {
              title: "Bachelor's Degree, Textile Sciences and Engineering",
              school: "CHINESE CULTURE UNIVERSITY",
              years: "2009 - 2014",
              description: "Undergraduate degree focusing on Textile Sciences and Engineering."
            },
            {
              title: "Complete Python Bootcamp, Computer Programming",
              school: "UDEMY ACADEMY",
              years: "2017 - 2018",
              description: "Comprehensive bootcamp on Python programming."
            }
          ].map((item, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "3rem" }}>
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0.5rem",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  border: "2px solid #e879f9", // Pink color matching the screenshot
                  backgroundColor: "var(--color-canvas)",
                  zIndex: 1
                }}
              />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ flex: "1 1 auto" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "var(--step-h5)",
                      fontWeight: 700,
                      color: "var(--color-ink)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "0.75rem",
                      color: "var(--color-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "1rem"
                    }}
                  >
                    {item.school}
                  </div>
                </div>

                {/* Year pill */}
                <div
                  style={{
                    backgroundColor: "#fce7f3", // Light pink background
                    color: "#db2777", // Darker pink text
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap"
                  }}
                >
                  {item.years}
                </div>
              </div>

              <p style={{ margin: 0, color: "var(--color-ink)", fontSize: "var(--step-small)", lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </article>
  );
}
