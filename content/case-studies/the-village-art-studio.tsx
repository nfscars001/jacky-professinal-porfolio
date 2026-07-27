import { MediaFigure } from "@/components/case-study/media-figure";

export function TVASCaseStudy() {
  return (
    <article className="case-study-content">
      <div className="container section">
        <h2>The community and service problem</h2>
        <p>
          Local artists face the ongoing challenge of sustaining visibility and building real-world connections. One-off social posts or short exhibitions are often not enough. Audiences and partners, on the other hand, need clear and accessible ways to participate in the local creative scene.
        </p>
        <p>
          The Village Art Studio (TVAS) started with a community mission that needed to be translated into a sustainable digital platform. The challenge was serving artists, audiences, venues, and partners without the site turning into a confusing collection of event pages.
        </p>
      </div>

      <div className="container section">
        <h2>From studio website to platform</h2>
        <p>
          The solution was a multi-program platform model connecting different offerings into a single cohesive service ecosystem:
        </p>
        <ul>
          <li><strong>Muse & Medium</strong> podcast conversations</li>
          <li><strong>Monthly artist showcases</strong></li>
          <li><strong>Artist-led workshops</strong> and connection experiences</li>
          <li><strong>Village Members</strong></li>
          <li><strong>Artist advocacy</strong> and application pathways</li>
          <li><strong>Venue and brand partnerships</strong></li>
        </ul>
      </div>

      <MediaFigure
        // TODO(content): Add diagram link when provided
        src="/images/projects/tvas/platform-ecosystem.svg"
        alt="Platform ecosystem and audience-to-action matrix"
        width={1200}
        height={600}
        layout="full"
        caption="Platform architecture reconstructed in 2026 from the live product and project notes."
      />

      <div className="container section">
        <h2>Information architecture & content system</h2>
        <p>
          The information architecture elevates core programs as platform pillars (Showcase, Podcast, Workshops, Village Members) while providing clear action paths for partnerships and contact. 
        </p>
        <p>
          To maintain these programs with a small team, a repeatable content model was established for each offering (e.g. podcast episodes, artist profiles, workshops). This structure ensures that content is consistently mapped to specific calls to action tailored to the respective audience.
        </p>
      </div>

      <MediaFigure
        // TODO(content): Add real screenshot link when provided
        src="/images/projects/tvas/showcase-landing.jpg"
        alt="The Village Art Studio Showcase landing page"
        width={1440}
        height={900}
        layout="full"
        caption="Live production interface, captured in 2026."
      />

      <div className="container section">
        <h2>Bilingual experience</h2>
        <p>
          To serve a broader community, TVAS features a fully bilingual English/French experience. 
          The platform exposes corresponding `/en/...` and `/fr/...` routes and preserves the user's current context when switching languages.
          This required careful localization of navigation, calls to action, and dynamic content, alongside SEO considerations for canonical and `hreflang` tags.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
        <MediaFigure
          // TODO(content): Add real screenshot link when provided
          src="/images/projects/tvas/english-version.jpg"
          alt="English version of the page"
          width={700}
          height={800}
          layout="full"
          caption="English route."
        />
        <MediaFigure
          // TODO(content): Add real screenshot link when provided
          src="/images/projects/tvas/french-version.jpg"
          alt="French version of the page"
          width={700}
          height={800}
          layout="full"
          caption="French route."
        />
      </div>

      <div className="container section">
        <h2>Multimedia integration</h2>
        <p>
          The <em>Muse & Medium</em> podcast integrates video and audio experiences directly into the platform via YouTube embeds. 
          Performance safeguards and accessible keyboard navigation ensure the embedded media remains unobtrusive while offering users a rich storytelling format.
        </p>
      </div>

      <MediaFigure
        // TODO(content): Add real screenshot link when provided
        src="/images/projects/tvas/podcast-landing.jpg"
        alt="Podcast landing page with embedded media treatment"
        width={1440}
        height={900}
        layout="full"
        caption="Live production interface, captured in 2026."
      />

      <div className="container section">
        <h2>Conversion pathways & responsive design</h2>
        <p>
          Each audience segment has a dedicated pathway—from "Explore Experiences" and "Listen to the Podcast" to "Apply to the Platform" and "Partner With Us." These calls to action were meticulously designed to convert across all viewports.
        </p>
        <p>
          Extensive testing ensured long English and French labels wrapped correctly, embedded video aspect ratios were maintained, and the bilingual switch remained intuitive on mobile.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
        <MediaFigure
          // TODO(content): Add real mobile screenshot link when provided
          src="/images/projects/tvas/mobile-homepage.jpg"
          alt="Mobile homepage experience"
          width={390}
          height={844}
          layout="full"
          caption="Live production interface (mobile), captured in 2026."
        />
        <MediaFigure
          // TODO(content): Add real mobile screenshot link when provided
          src="/images/projects/tvas/mobile-language-switch.jpg"
          alt="Mobile language switch interaction"
          width={390}
          height={844}
          layout="full"
          caption="Live production interface (mobile), captured in 2026."
        />
      </div>

      <div className="container section">
        <div style={{ padding: "2rem", backgroundColor: "var(--color-surface)", borderRadius: "8px", border: "1px solid var(--color-line)", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "var(--step-h4)", marginBottom: "1rem", fontFamily: "var(--font-syne)" }}>Outcome and Reflection</h3>
          <p style={{ margin: 0, color: "var(--color-ink)", fontSize: "var(--step-body)", lineHeight: 1.6 }}>
            {/* TODO(content): Verify outcomes with Jacky */}
            The Village Art Studio launched as a robust platform that successfully bridges the gap between artists and the community. By structuring multiple programs into a coherent service architecture, it allows ongoing content operations to run smoothly for a small team. The project has reinforced my understanding of scalable service design and the importance of clear content governance in community-focused platforms.
          </p>
        </div>
      </div>
    </article>
  );
}
