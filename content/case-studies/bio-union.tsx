import { MediaFigure } from "@/components/case-study/media-figure";
import { HistoricalProjectNotice } from "@/components/case-study/bio-union/historical-project-notice";
import { ProjectFacts } from "@/components/case-study/bio-union/project-facts";
import { ConnectedSystemDiagram } from "@/components/case-study/bio-union/connected-system-diagram";
import { DesignConstraintMatrix } from "@/components/case-study/bio-union/design-constraint-matrix";
import { HardwareEvolutionTimeline } from "@/components/case-study/bio-union/hardware-evolution-timeline";
import { CapabilityStatusMatrix } from "@/components/case-study/bio-union/capability-status-matrix";
import { EvidenceStatusTable } from "@/components/case-study/bio-union/evidence-status-table";
import { ServiceEcosystemDiagram } from "@/components/case-study/bio-union/service-ecosystem-diagram";
import { TeamDisciplineMap } from "@/components/case-study/bio-union/team-discipline-map";
import { PublicMilestoneTimeline } from "@/components/case-study/bio-union/public-milestone-timeline";
import { OutcomeAndReflection } from "@/components/case-study/bio-union/outcome-and-reflection";
import { RetrospectiveCallout } from "@/components/case-study/bio-union/retrospective-callout";

export function BioUnionCaseStudy() {
  return (
    <article className="case-study-content">
      {/* 1. Hero handled by page.tsx */}
      <HistoricalProjectNotice />
      <ProjectFacts />

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

      <ConnectedSystemDiagram />

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
        src="/images/projects/bio-union/bio-union-prodcut.png"
        alt="Bio Union smart garment physical prototype showing embedded sensors"
        width={1400}
        height={900}
        layout="full"
        caption="TODO(content): Original garment prototype photo to be added."
        disclosure="Currently showing placeholder. Needs replacement with verified original asset."
      />

      <DesignConstraintMatrix />
      <HardwareEvolutionTimeline />
      
      <div className="container section">
        <h2>From signal to experience</h2>
        <p>
          The platform was conceptualized to process various signals into a coherent user experience. We mapped out a complete wearer journey to ensure smooth usage from capturing a session to professional follow-up.
        </p>
        <p>
          <strong>Journey:</strong> Wear garment → confirm sensor connection → capture session → review signal/data summary → share or export report → follow up
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

      <CapabilityStatusMatrix />
      <EvidenceStatusTable />

      <div className="container section">
        <h2>Product principles</h2>
        <ol>
          <li>Reduce setup burden.</li>
          <li>Design for comfort and familiar routines.</li>
          <li>Integrate sensing without exposed wires.</li>
          <li>Separate washable textiles from removable electronics.</li>
          <li>Reduce dependence on disposable components where feasible.</li>
          <li>Support different contexts through a shared platform.</li>
        </ol>
      </div>

      <ServiceEcosystemDiagram />
      <TeamDisciplineMap />

      <div className="container section">
        <h2>Historical market framing used in 2023</h2>
        <p>
          In 2023, the team positioned Bio Union between consumer wearables and more expensive professional systems. The business exploration considered growth in telehealth, wearable medical devices, and smart clothing, alongside licensing, subscription, and manufacturing relationships.
        </p>
      </div>

      <PublicMilestoneTimeline />
      <OutcomeAndReflection />
      <RetrospectiveCallout />

    </article>
  );
}
