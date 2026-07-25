import { MediaFigure } from "@/components/case-study/media-figure";

export function BioUnionCaseStudy() {
  return (
    <article className="case-study-content">
      <div className="container section">
        <h2>Context and problem</h2>
        <p>
          Between 2018 and 2020, the wearable technology market was dominated by wrist-based fitness trackers. However, athletes and healthcare professionals needed higher-fidelity physiological data that a wrist sensor simply couldn&apos;t provide consistently. 
        </p>
        <p>
          The challenge was to move the sensors closer to the core of the body without sacrificing comfort or requiring complex, clinical-looking equipment. Bio Union was formed to explore the intersection of textile engineering, biosensor technology, and consumer health software.
        </p>

        <h2>My role &amp; approach</h2>
        <p>
          As a Co-founder and Product Designer, I was responsible for bridging the gap between the hardware engineering of the smart garments and the digital experience of the companion application. 
        </p>
        <p>
          The approach required an intense focus on materials science and UX simultaneously. We had to ensure that the physical product felt like premium athletic wear while the software delivered clinical-grade insights in an accessible format.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/bio-union/bio-union-prodcut.png"
        alt="Bio Union smart garment physical prototype showing embedded sensors"
        width={1400}
        height={900}
        layout="full"
        caption="A look at the smart garment ecosystem, embedding biosensors directly into high-performance athletic fabrics."
        disclosure="AI-assisted concept visualization created in 2026 based on Jacky's original design direction and archived materials."
      />

      <div className="container section">
        <h2>Selected design decisions</h2>
        
        <h3>1. Invisible Technology</h3>
        <p>
          We made the deliberate decision to hide the technology as much as possible. Unlike competitors who highlighted the &quot;tech&quot; aspect with prominent plastic modules, Bio Union&apos;s sensors were woven into the fabric. The only visible technology was a small, removable processing node that acted as the bridge to the mobile app.
        </p>

        <h3>2. Data Translation</h3>
        <p>
          Raw biometric data is overwhelming. We designed the mobile application to translate complex physiological metrics (like muscle oxygenation and precise heart rate variability) into actionable coaching insights. The UI used a dark, focused aesthetic to reduce glare during outdoor use and emphasize the bright data visualizations.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/bio-union/Screenshot 2026-07-25 at 6.10.38 PM.png"
        alt="Bio Union mobile application interface displaying physiological data"
        width={1400}
        height={900}
        layout="full"
        caption="The companion application translating raw sensor data into actionable insights."
        disclosure="Interface visualization recreated from archived concepts and development notes."
      />

      <div className="container section">
        <h2>Outcome and reflection</h2>
        <p>
          Bio Union successfully developed functional prototypes and secured initial interest from specialized athletic programs. However, the complexities of scaling smart textile manufacturing ultimately led us to wind down the venture in 2020.
        </p>
        <p>
          Looking back, the project was a masterclass in cross-disciplinary design. It taught me that when designing connected hardware, the physical comfort of the device is the absolute baseline of user experience; if the garment isn&apos;t comfortable to wear, the quality of the software experience is irrelevant.
        </p>
      </div>
    </article>
  );
}
