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
          <li><strong>Village Members</strong> directory</li>
          <li><strong>Artist advocacy</strong> and application pathways</li>
          <li><strong>Venue and brand partnerships</strong></li>
        </ul>
      </div>

      <MediaFigure
        src="/images/projects/the-village-art-studio/tvas-platform-ecosystem.png"
        alt="Platform ecosystem showing podcast, showcase, workshops, advocacy, and partnerships"
        width={2880}
        height={1618}
        layout="full"
        caption="Platform service model connecting distinct audience touchpoints into a unified experience."
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
        src="/images/projects/the-village-art-studio/tvas-showcase.png"
        alt="The Village Art Studio Showcase featuring artist spotlight"
        width={2880}
        height={1618}
        layout="full"
        caption="Artist Spotlight program featuring monthly dedicated coverage and artist narrative."
      />

      <div className="container section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          <MediaFigure
            src="/images/projects/the-village-art-studio/tvas-showcase-2.png"
            alt="Creative Collective artist member directory"
            width={2880}
            height={1618}
            layout="full"
            caption="Village Members directory showcasing the broader creative collective."
          />
          <MediaFigure
            src="/images/projects/the-village-art-studio/tvas-showcase-3.png"
            alt="Intimate artist workshops and experiences listing"
            width={2880}
            height={1618}
            layout="full"
            caption="Artist-led connection workshops and gathering experiences."
          />
        </div>
      </div>

      <div className="container section">
        <h2>Bilingual experience</h2>
        <p>
          To serve a broader community, TVAS features a fully bilingual English/French experience. 
          The platform exposes corresponding <code>/en/...</code> and <code>/fr/...</code> routes and preserves the user&apos;s current context when switching languages.
        </p>
        <p>
          This required careful localization of navigation, calls to action, and dynamic content, alongside SEO considerations for canonical and <code>hreflang</code> tags.
        </p>
      </div>

      <div className="container section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          <MediaFigure
            src="/images/projects/the-village-art-studio/English-route.png"
            alt="English route interface for The Village Art Studio"
            width={2880}
            height={1618}
            layout="full"
            caption="English route (/en)."
          />
          <MediaFigure
            src="/images/projects/the-village-art-studio/French-route.png"
            alt="French route interface for The Village Art Studio"
            width={2880}
            height={1618}
            layout="full"
            caption="French route (/fr)."
          />
        </div>
      </div>

      <div className="container section">
        <h2>Multimedia integration</h2>
        <p>
          The <em>Muse & Medium</em> podcast integrates video and audio experiences directly into the platform via YouTube embeds. 
          Performance safeguards and accessible keyboard navigation ensure the embedded media remains unobtrusive while offering users a rich storytelling format.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/the-village-art-studio/tvas-multimedia-integration.png"
        alt="Podcast landing page with video episode gallery"
        width={2880}
        height={1618}
        layout="full"
        caption="Muse & Medium podcast episode gallery featuring direct video conversations."
      />

      <div className="container section">
        <h2>Conversion pathways & responsive design</h2>
        <p>
          Each audience segment has a dedicated pathway—from &quot;Explore Experiences&quot; and &quot;Listen to the Podcast&quot; to &quot;Apply to the Platform&quot; and &quot;Partner With Us.&quot; These calls to action were meticulously designed to convert across all viewports.
        </p>
        <p>
          Extensive testing ensured long English and French labels wrapped correctly, embedded video aspect ratios were maintained, and the bilingual switch remained intuitive on mobile.
        </p>
      </div>

      <div className="container section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", maxWidth: "800px", margin: "0 auto" }}>
          <MediaFigure
            src="/images/projects/the-village-art-studio/interface-mobile.PNG"
            alt="Mobile homepage experience"
            width={1170}
            height={2532}
            layout="full"
            caption="Mobile landing view with primary CTA pathway."
          />
          <MediaFigure
            src="/images/projects/the-village-art-studio/language-switch-interface-mobile.PNG"
            alt="Mobile navigation drawer and language switch"
            width={1170}
            height={2532}
            layout="full"
            caption="Mobile navigation menu with seamless language switcher."
          />
        </div>
      </div>

      <div className="container section">
        <div style={{ padding: "2rem", backgroundColor: "var(--color-surface)", borderRadius: "8px", border: "1px solid var(--color-line)", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "var(--step-h4)", marginBottom: "1rem", fontFamily: "var(--font-syne)" }}>Outcome and Reflection</h3>
          <p style={{ margin: 0, color: "var(--color-ink)", fontSize: "var(--step-body)", lineHeight: 1.6 }}>
            The Village Art Studio launched as a robust platform that successfully bridges the gap between artists and the community. By structuring multiple programs into a coherent service architecture, it allows ongoing content operations to run smoothly for a small team. The project has reinforced my understanding of scalable service design and the importance of clear content governance in community-focused platforms.
          </p>
        </div>
      </div>
    </article>
  );
}
