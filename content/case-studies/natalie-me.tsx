import { MediaFigure } from "@/components/case-study/media-figure";

/**
 * Natalie Me Art Portfolio case study component.
 * Status: Live client project (https://natalie-me.tvas.ca)
 * 
 * Demonstrates a two-sided publishing product:
 *  - Quiet, art-first editorial experience for public visitors
 *  - Manageable private content workflow for the visual artist
 */
export function NatalieMeCaseStudy() {
  return (
    <article className="case-study-content">
      {/* ── Section 1: Context & Problem ── */}
      <div className="container section">
        <h2>Context and problem</h2>
        <p>
          Visual artist Natalie Me needed a dedicated digital home to present her artwork, exhibition history,
          and story without losing the personal intimacy of her practice. Social media served well for casual
          discovery, but lacked the permanent structure required by gallery curators, collectors, and potential
          collaborators who require immediate context: medium, scale, year, availability, and exhibition record.
        </p>
        <p>
          At the same time, traditional static portfolio sites create an operational bottleneck—requiring developer
          intervention for every new artwork upload or event date update. The design objective was to build a
          two-sided product: a quiet, gallery-first public website for visitors, backed by an accessible private
          dashboard that puts ongoing content ownership directly in the artist&rsquo;s hands.
        </p>
      </div>

      {/* ── Main Cover Image ── */}
      <MediaFigure
        src="/images/projects/natalie-me/cover.JPG"
        alt="Natalie Me Art Portfolio cover interface showing the serene, editorial design language for visual artist Natalie Me"
        width={2388}
        height={1554}
        layout="full"
        caption="The live production home page for Natalie Me: presenting identity, location, and artistic vision with editorial clarity."
        disclosure="Live production interface, captured in 2026."
      />

      {/* ── Section 2: Brand Translation & Design Concept ── */}
      <div className="container section">
        <h2>Brand translation: A quiet digital gallery</h2>
        <p>
          The visual direction was designed as a direct translation of Natalie&rsquo;s artistic philosophy:
        </p>
        <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <li>
            <strong>Warm Ivory &amp; Diffused Light:</strong> Soft neutral background surfaces evoke heavy paper, canvas, and diffused studio illumination.
          </li>
          <li>
            <strong>Botanical Shadows:</strong> Subtle organic shadow overlays introduce warmth and atmosphere without competing with the artwork.
          </li>
          <li>
            <strong>Editorial Typography:</strong> An elegant serif typeface gives the artist&rsquo;s identity weight, paired with a clean sans-serif for comfortable long-form reading.
          </li>
          <li>
            <strong>Generous Spatial Rhythm:</strong> Ample negative space slows the visitor&rsquo;s scroll velocity, allowing each artwork piece breathing room.
          </li>
        </ul>
      </div>

      {/* ── Public Gallery Screenshot ── */}
      <MediaFigure
        src="/images/projects/natalie-me/gallery.png"
        alt="Natalie Me public gallery view displaying structured artwork cards with medium, year, and high resolution imagery"
        width={2940}
        height={1620}
        layout="full"
        caption="The public gallery view: structured artwork cards presenting medium, year, and high-resolution imagery with generous spatial rhythm."
        disclosure="Live production interface, captured in 2026."
      />

      {/* ── Section 3: Information Architecture & Public Experience ── */}
      <div className="container section">
        <h2>Public portfolio experience</h2>
        <p>
          Each destination within the public site answers a specific high-value visitor question without unnecessary complexity:
        </p>
        <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <li>
            <strong>Gallery:</strong> A calm grid presenting artwork collections, mediums, completion dates, and detailed imagery.
          </li>
          <li>
            <strong>Biography &amp; Heritage:</strong> Integrating the artist&rsquo;s Ukrainian roots, Toronto practice, exhibition timeline, and grant recognition into a clear narrative.
          </li>
          <li>
            <strong>Events &amp; Shows:</strong> Separating temporary exhibition dates and upcoming showcases from permanent biography records.
          </li>
          <li>
            <strong>Inquiries &amp; Contact:</strong> Clear pathways for artwork acquisitions, commission requests, and creative collaborations.
          </li>
        </ul>
      </div>

      {/* ── Biography Screenshot ── */}
      <MediaFigure
        src="/images/projects/natalie-me/about.png"
        alt="Natalie Me artist biography page showing personal narrative, heritage, and exhibition history"
        width={2940}
        height={1621}
        layout="full"
        caption="The artist biography page: integrating personal story, heritage, exhibition record, and career milestones into a clean narrative."
        disclosure="Live production interface, captured in 2026."
      />

      {/* ── Events & Shows Screenshot ── */}
      <MediaFigure
        src="/images/projects/natalie-me/events-shows.png"
        alt="Natalie Me events and shows page detailing upcoming exhibition dates and venue locations"
        width={2940}
        height={1621}
        layout="full"
        caption="The events and shows view: communicating upcoming dates, venue details, and direct external event links."
        disclosure="Live production interface, captured in 2026."
      />

      {/* ── Section 4: System Architecture ── */}
      <div className="container section">
        <h2>System architecture &amp; content model</h2>
        <p>
          To ensure long-term independence, the platform separates content management from presentation.
          The artist updates structured records in a secure dashboard, while the public portfolio renders cached,
          responsive pages optimized for performance and accessibility.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/natalie-me/natalie-me-system-architecture.svg"
        alt="System architecture diagram illustrating the workflow from Private Studio Dashboard to Storage to Next.js Public Portfolio Views"
        width={1000}
        height={350}
        layout="full"
        caption="Product data flow: Private content mutations update structured database records and media storage, serving high-speed public portfolio views."
        disclosure="Architecture diagram reconstructed from live system design, 2026."
      />

      {/* ── Section 5: The Private Content Dashboard ── */}
      <div className="container section">
        <h2>The private studio dashboard</h2>
        <p>
          Designing for the artist maintaining the portfolio was as critical as designing for the public visitor.
          The private dashboard provides an intuitive interface for:
        </p>
        <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <li>
            <strong>Artwork Cataloging:</strong> Uploading high-resolution imagery, assigning titles, medium descriptions, completion dates, and alternative text.
          </li>
          <li>
            <strong>Exhibitions &amp; Events:</strong> Publishing upcoming showcases, venue locations, date ranges, and ticket links.
          </li>
          <li>
            <strong>Biography &amp; Recognition:</strong> Maintaining an updated curriculum vitae, grant awards, and artistic statements.
          </li>
          <li>
            <strong>Instant Preview &amp; Publishing:</strong> Toggling visibility states to draft or publish changes live in real time.
          </li>
        </ul>
      </div>

      {/* ── Private Studio Dashboard Overview ── */}
      <MediaFigure
        src="/images/projects/natalie-me/private-studio dashboard.png"
        alt="Private studio dashboard overview displaying artwork records, catalog metrics, and site management controls"
        width={2940}
        height={1622}
        layout="full"
        caption="The private studio dashboard overview: an intuitive self-management surface for updating artwork catalog entries, exhibition dates, and profile content without developer assistance."
        disclosure="Private studio management interface screenshot, captured in 2026."
      />

      {/* ── Artwork Catalog Management Editor ── */}
      <MediaFigure
        src="/images/projects/natalie-me/private-studio dashboard-2.png"
        alt="Artwork catalog management editor panel for uploading images, updating titles, and controlling gallery visibility"
        width={2940}
        height={1621}
        layout="full"
        caption="The artwork management editor: allowing the artist to upload imagery, define titles, mediums, completion dates, and control public gallery visibility."
        disclosure="Private studio management interface screenshot, captured in 2026."
      />

      {/* ── Event & Exhibition Management Editor ── */}
      <MediaFigure
        src="/images/projects/natalie-me/private-studio dashboard-3.png"
        alt="Event and exhibition management editor panel for updating showcase dates, venue locations, and ticket links"
        width={2940}
        height={1621}
        layout="full"
        caption="The event editor: managing exhibition dates, venue locations, showcase descriptions, and external event links in one location."
        disclosure="Private studio management interface screenshot, captured in 2026."
      />

      {/* ── Contact Section Screenshot ── */}
      <MediaFigure
        src="/images/projects/natalie-me/get-in-touch.png"
        alt="Natalie Me contact page showing inquiry pathways for commissions and artwork availability"
        width={2940}
        height={1621}
        layout="full"
        caption="The contact experience: clear pathways for commission requests, artwork availability inquiries, and creative collaborations."
        disclosure="Live production interface, captured in 2026."
      />

      {/* ── Section 6: Outcomes & Reflection ── */}
      <div className="container section">
        <h2>Verifiable outcome &amp; reflection</h2>
        <p>
          The live portfolio at <strong>natalie-me.tvas.ca</strong> serves as the central digital home for Natalie Me&rsquo;s
          artistic practice. It provides curators and collectors with an authoritative resource while granting the artist
          complete autonomy over her digital presence.
        </p>
        <p>
          <em>Reflection:</em> Treating content management as a primary product feature—rather than an afterthought—reinforced
          that a professional portfolio succeeds only when it is engaging for visitors to explore and effortless for its owner to maintain.
        </p>
      </div>
    </article>
  );
}
