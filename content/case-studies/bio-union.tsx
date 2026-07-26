import { MediaFigure } from "@/components/case-study/media-figure";

export function BioUnionCaseStudy() {
  return (
    <article className="case-study-content">
      {/* 1. Hero handled by page.tsx */}
      
      <div className="container section">
        <div style={{ padding: "2rem", backgroundColor: "var(--color-surface)", borderRadius: "8px", border: "1px solid var(--color-line)", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "var(--step-h4)", marginBottom: "1rem", fontFamily: "var(--font-syne)" }}>Historical Project Notice</h3>
          <p style={{ margin: 0, color: "var(--color-muted)", fontSize: "var(--step-small)" }}>
            A retrospective on the Bio Union smart garment project (documented activity through 2023). This case study presents the original vision, physical prototypes, and design principles for an integrated ECG wearable system.
          </p>
        </div>
      </div>

      <div className="container section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
        <div>
          <h4 style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Role</h4>
          <p style={{ fontWeight: 500 }}>Founder & Product Development Lead</p>
        </div>
        <div>
          <h4 style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Timeline</h4>
          <p style={{ fontWeight: 500 }}>Documented activity through 2023</p>
        </div>
        <div>
          <h4 style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Scope</h4>
          <p style={{ fontWeight: 500 }}>Product Strategy, Wearable Hardware, Digital Experience</p>
        </div>
      </div>

      <div className="container section">
        <h2>The human and system problem</h2>
        <p>
          Health data is often captured in short clinical windows or through consumer devices that may not be designed for every monitoring need. Bio Union asked whether a familiar object — clothing — could make longer-duration sensing easier to integrate into everyday routines.
        </p>
        <p>
          Our exploration was driven by the friction of separate electrodes, wires, patches, and complex setup processes, aiming to improve comfort and adherence, and better connect home data with professional follow-up.
        </p>
      </div>

      <div className="container section">
        <h2>The product thesis: clothing as an interface</h2>
        <p>
          Textiles contact a large area of the body and are already part of daily routines. We hypothesized that garment pattern and material decisions could stabilize sensor placement. A removable device separates electronics from washable textile components, while a connected application translates captured signals into a usable experience.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/bio-union/bio-union-system-architecture.svg"
        alt="System architecture flow from body to garment, Leap M device, signal processing, and finally application or report."
        width={1000}
        height={300}
        layout="full"
        caption="System diagram reconstructed in 2026 from Bio Union's 2023 product architecture."
      />

      <div className="container section">
        <h2>Choosing a sensing approach around the monitoring context</h2>
        <p>
          The team explored whether electrodes integrated into a close-fitting garment could support sustained ECG capture with less dependence on a user holding or positioning a separate device.
        </p>
        <p>
          This required navigating the trade-offs between a close-fitting garment, comfort, movement, washability, and signal quality.
        </p>
      </div>

      <div className="container section">
        <h2>Designing the garment around movement</h2>
        <p>
          The smart garment was designed with single-lead garment construction, using printed conductive paths and electrodes. A front and back placement along with a chest-mounted removable device ensured a close but comfortable fit explicitly aimed at reducing movement at the sensing area.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/bio-union/bio-union-garment-prototype.webp"
        alt="Original Bio Union single-lead ECG garment prototype, showing front and back views."
        width={1100}
        height={950}
        layout="full"
        caption="Original Bio Union single-lead ECG garment prototype."
        disclosure="Front and back prototype views from private pitch deck."
      />

      <div className="container section">
        <h2>Hardware evolution: Leap M series</h2>
        <p>
          To make the system washable, all processing and transmission electronics were isolated in a removable pebble-sized unit called the Leap M. As the project progressed, the hardware evolved to become smaller and lighter while improving battery life.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "3rem" }}>
          <div>
            <MediaFigure
              src="/images/projects/bio-union/leap-m-gen2.webp"
              alt="Leap M Gen.2 hardware module"
              width={850}
              height={280}
              caption="Leap M hardware prototypes documented in Bio Union's 2023 pitch deck."
            />
          </div>
          <div>
            <MediaFigure
              src="/images/projects/bio-union/leap-m-gen3.webp"
              alt="Leap M Gen.3 hardware module"
              width={850}
              height={350}
              caption="Leap M hardware prototypes documented in Bio Union's 2023 pitch deck."
            />
          </div>
        </div>
      </div>
      
      <div className="container section">
        <h2>From signal to experience</h2>
        <p>
          The platform was conceptualized to process various signals into a coherent user experience. We mapped out a complete wearer journey to ensure smooth usage from capturing a session to professional follow-up.
        </p>
        <p>
          <strong>Journey:</strong> Wear garment → confirm sensor connection → capture session → review signal/data summary → share or export report → follow up
        </p>
      </div>

      <div className="container section">
        <h2>Product principles</h2>
        <p>
          The Bio Union architecture was guided by several core design goals meant to translate technical advantages into user benefits:
        </p>
      </div>

      <MediaFigure
        src="/images/projects/bio-union/bio-union-product-principles.svg"
        alt="Six product principles: Independent Operation, Non-Adhesive Comfort, Invisible Integration, Time &amp; Cost Efficiency, Versatile Architecture, Reduced Medical Waste."
        width={1000}
        height={400}
        layout="full"
        caption="Design goals reconstructed from Bio Union's 2023 pitch deck."
      />

      <div className="container section">
        <h2>Service ecosystem</h2>
        <p>
          Bio Union explored a comprehensive B2B2C business model that positioned the core technology platform as an enabler for both consumer end-markets (such as sports and elderly care) and service providers (like clinics and virtual visit providers).
        </p>
      </div>

      <MediaFigure
        src="/images/projects/bio-union/bio-union-service-ecosystem.svg"
        alt="Business model exploration diagram showing ODM, Own Brand, and end market partners."
        width={1000}
        height={450}
        layout="full"
        caption="Business-model exploration reconstructed from Bio Union's 2023 pitch deck."
      />

      <div className="container section">
        <h2>Public presence and milestones</h2>
        <p>
          Throughout its documented history, Bio Union established a public presence to validate the concept and engage with the medical technology community.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/bio-union/bio-union-medica-2017.webp"
        alt="Bio Union exhibition at MEDICA 2017 in Düsseldorf, Germany."
        width={2360}
        height={1100}
        layout="full"
        caption="Bio Union exhibition at MEDICA 2017."
      />

      <div className="container section">
        <div style={{ padding: "2rem", backgroundColor: "var(--color-surface)", borderRadius: "8px", border: "1px solid var(--color-line)", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "var(--step-h4)", marginBottom: "1rem", fontFamily: "var(--font-syne)" }}>Outcome and Reflection</h3>
          <p style={{ margin: 0, color: "var(--color-ink)", fontSize: "var(--step-body)", lineHeight: 1.6 }}>
            Building Bio Union was an intensive exploration of how hardware, textiles, and software can seamlessly integrate into daily life. Although the landscape of wearable technology continually shifts, the core belief that technology should adapt to humans — not the other way around — remains central to my practice.
          </p>
        </div>
      </div>

    </article>
  );
}
