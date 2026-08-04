import { MediaFigure } from "@/components/case-study/media-figure";

export function WeiInSightCaseStudy() {
  return (
    <article className="case-study-content">
      <div className="container section">
        <h2>Concept origin: a digital self-portrait</h2>
        <p>
          Earlier portfolio versions felt insufficient because they merely catalogued work without expressing personality or philosophy. The original concept for Wei In Sight lived in my notebooks for years before its implementation: a <strong>digital self-portrait</strong> built around the idea that a multidisciplinary practice can be experienced as one connected body.
        </p>
        <p>
          Instead of flattening painting, music, and digital product design into a conventional gallery grid, the architecture treats them as different languages for the same search. The body became the map, the senses became the language, and each section opened a different doorway into the same creative world.
        </p>
        <p>
          {/* TODO(content): Verify the development sprint details with Jacky */}
          After iterating on the idea in notebooks for years, the core experience was brought to life in a focused 12-hour implementation sprint.
        </p>
      </div>

      <MediaFigure
        // TODO(content): Add real screenshot / artifact link when provided
        src="/images/projects/wei-in-sight/concept-notebook.jpg"
        alt="Original notebook page showing the Wei In Sight concept"
        width={1440}
        height={900}
        layout="full"
        caption="Original concept sketch."
      />

      <div className="container section">
        <h2>From body and senses to territories</h2>
        <p>
          The central human figure is not merely a decorative hero image; it functions as the conceptual map. The navigation architecture translates creative disciplines into seven sensory, emotional, and imaginative territories:
        </p>
        <ul>
          <li><strong>Sight:</strong> Visual Arts</li>
          <li><strong>Sound:</strong> Music & Audio</li>
          <li><strong>Touch:</strong> Mixed Media & Process</li>
          <li><strong>Voice:</strong> Poems & Lyrics</li>
          <li><strong>Dream:</strong> Novel & Story World</li>
          <li><strong>Heart:</strong> About, Philosophy, and Journey</li>
          <li><strong>Pulse:</strong> Buy Art, Commissions, and Contact</li>
        </ul>
      </div>

      <MediaFigure
        src="/images/projects/wei-in-sight/Screenshot 2026-07-30 at 6.58.15 AM.png"
        alt="Wei In Sight navigation with a territory selected"
        width={2940}
        height={1615}
        layout="full"
        caption="Live production interface, captured in 2026."
      />

      <MediaFigure
        src="/images/projects/wei-in-sight/Screenshot 2026-07-30 at 6.58.33 AM.png"
        alt="Seven-territory information architecture diagram"
        width={2940}
        height={1618}
        layout="full"
        caption="Information architecture reconstructed in 2026 from the live product."
      />

      <div className="container section">
        <h2>Interaction and atmosphere</h2>
        <p>
          The visual system supports the concept through a dark, restrained violet/pink palette, creating depth and a cinematic atmosphere. Glass-like panels and 21:9 page covers unify different disciplines under one visual family. Optional background audio and visible playback controls further immerse visitors without forcing interaction.
        </p>
        <p>
          Most importantly, the interaction supports the concept rather than becoming mere decoration. Revealing sub-navigation through perspective selection reinforces the feeling of exploring a living map.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/wei-in-sight/Screenshot 2026-07-30 at 6.59.11 AM.png"
        alt="Representative 21:9 discipline cover"
        width={2940}
        height={1619}
        layout="full"
        caption="Live production interface, captured in 2026."
      />

      <div className="container section">
        <h2>Conversion without breaking the experience</h2>
        <p>
          While atmosphere is critical, the platform remains highly functional for art collectors and collaborators. Conversion paths like Collect/Inquire, commissions, and contact forms (the Pulse territory) are omnipresent but unobtrusive. Social links (Instagram, TikTok) are integrated so they do not dominate the artistic experience, maintaining the delicate balance between a creative atlas and a professional portfolio.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/wei-in-sight/Screenshot 2026-07-30 at 6.59.23 AM.png"
        alt="Collect or inquire path on Wei In Sight"
        width={2940}
        height={1622}
        layout="full"
        caption="Live production interface, captured in 2026."
      />

      <div className="container section">
        <h2>Responsive design & accessibility</h2>
        <p>
          Translating a spatial, body-as-map interface to smaller viewports required careful navigation transformation and content prioritization. The mobile experience preserves the seven-territory architecture, ensuring all audio controls and pathways remain accessible.
        </p>
        <p>
          Accessibility considerations included semantic navigation names, `aria-pressed` states for territory selection, meaningful alt text for artwork (while ignoring decorative elements), persistent user control over audio, and adequate text contrast against the dark scene.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
        <MediaFigure
          src="/images/projects/wei-in-sight/mobile_interface.PNG"
          alt="Mobile landing experience"
          width={1206}
          height={2622}
          layout="full"
          caption="Live production interface (mobile), captured in 2026."
        />
        <MediaFigure
          src="/images/projects/wei-in-sight/mobile_interface_2.PNG"
          alt="Mobile landing experience part 2"
          width={1206}
          height={2622}
          layout="full"
          caption="Live production interface (mobile details), captured in 2026."
        />
        <MediaFigure
          src="/images/projects/wei-in-sight/mobile_navigation.PNG"
          alt="Mobile navigation and content page"
          width={1206}
          height={2622}
          layout="full"
          caption="Live production interface (mobile navigation), captured in 2026."
        />
        <MediaFigure
          src="/images/projects/wei-in-sight/mobile_navigation_2.PNG"
          alt="Mobile navigation and content page part 2"
          width={1206}
          height={2622}
          layout="full"
          caption="Live production interface (mobile secondary navigation), captured in 2026."
        />
      </div>

      <div className="container section">
        <div style={{ padding: "2rem", backgroundColor: "var(--color-surface)", borderRadius: "8px", border: "1px solid var(--color-line)", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "var(--step-h4)", marginBottom: "1rem", fontFamily: "var(--font-syne)" }}>Outcome and Reflection</h3>
          <p style={{ margin: 0, color: "var(--color-ink)", fontSize: "var(--step-body)", lineHeight: 1.6 }}>
            {/* TODO(content): Verify outcomes with Jacky */}
            Wei In Sight successfully launched as a unified digital platform, hosting my distinct practices. The territorial architecture solved the challenge of a fragmented portfolio, finally expressing the personality and philosophy that had been absent from earlier versions. Going forward, this system provides a flexible foundation that can grow as my practice evolves.
          </p>
        </div>
      </div>
    </article>
  );
}
