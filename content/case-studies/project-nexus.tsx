import { MediaFigure } from "@/components/case-study/media-figure";

/**
 * Project Nexus Case Study Component
 *
 * Positioning: Modular AI framework system evolved into a configurable,
 * messaging-first managed assistant for business owners.
 *
 * Status: Active Beta (Live marketing site & active client deployment).
 * Public URL: https://nexus.westside-union.com
 *
 * Confidentiality Rules Applied:
 *  - No proprietary frameworks, providers, prompts, model routing weights, fallback chains,
 *    APIs, databases, schemas, or security mechanisms published.
 *  - No private configuration, customer information, internal pricing calculations,
 *    or unreleased vertical roadmaps disclosed.
 *  - Illustrative demonstration figures explicitly distinguished from verified production metrics.
 *  - Dashboard and simulated agent feed clearly badged "Active Client Beta Deployment."
 */
export function ProjectNexusCaseStudy() {
  return (
    <article className="case-study-content">
      {/* ── Section 1: Executive Summary & Context ── */}
      <div className="container section">
        <h2>Context: The business owner’s coordination dilemma</h2>
        <p>
          Most local-business owners do not spend their days thinking about AI infrastructure. They think
          about customer messages accumulating while they are on the floor, online reviews waiting a week
          for a response, inquiries going cold after hours, and administrative follow-ups that follow them
          home late into the evening.
        </p>
        <p>
          When owners seek solutions, they encounter two extremes: rigid, generic chatbot widgets that
          lack true business context and risk embarrassing the brand, or complicated enterprise AI platforms
          that require becoming a full-time prompt engineer and infrastructure administrator.
        </p>
        <p>
          <strong>Project Nexus</strong> began with a clear systems-design question: <em>How can a business
          leverage specialized, rapidly evolving AI capabilities without forcing the owner to manage separate tools,
          fragmented context, inconsistent permissions, or technical complexity?</em>
        </p>

        {/* Status Notice Banner */}
        <aside
          style={{
            marginTop: "2rem",
            padding: "1.25rem 1.5rem",
            backgroundColor: "rgba(23, 20, 23, 0.03)",
            border: "1px solid var(--color-line)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.2rem 0.5rem",
                backgroundColor: "#D1FAE5",
                border: "1px solid #10B981",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "10px",
                fontWeight: 700,
                color: "#065F46",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Status Note
            </span>
            <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "var(--step-label)", color: "var(--color-muted)" }}>
              Live Marketing Site · Active Client Beta Deployment
            </span>
          </div>
          <p
            style={{
              fontSize: "var(--step-small)",
              color: "var(--color-ink)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            The live public marketing site at{" "}
            <a
              href="https://nexus.westside-union.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-accent)", textDecoration: "underline" }}
            >
              nexus.westside-union.com ↗
            </a>{" "}
            is in production, and Project Nexus is currently deployed in active beta with real business clients.
            The modular AI framework system, task state engine, messaging-first managed service, and approval model
            documented here reflect working systems in active commercial use. Metrics and task logs shown on demonstration
            screens illustrate system telemetry.
          </p>
        </aside>
      </div>

      {/* ── Cover Screenshot: Live Marketing Hero ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus_cover.png"
        alt="Project Nexus live marketing site hero interface: editorial headline 'Your business runs, even when you sleep.' on an off-white background with iridescent geometric forms"
        width={1440}
        height={900}
        layout="full"
        caption="The live Project Nexus marketing experience. Product positioning leads with business outcomes and daily reality rather than technical abstractions."
        disclosure="Live public marketing interface, captured in 2026. Designed by Jacky Ho / Westside Union."
      />

      {/* ── Section 2: Product Evolution ── */}
      <div className="container section">
        <h2>Product evolution: From modular framework to messaging-first assistant</h2>
        <p>
          Project Nexus initially took shape as an architectural framework: a neutral coordination plane
          designed to manage specialized capability modules, context stores, permission scopes, and fallback
          chains behind a unified business identity. While technically robust, direct research with small-business
          owners revealed a critical insight:
        </p>
        <blockquote
          style={{
            margin: "1.5rem 0",
            padding: "1rem 1.5rem",
            borderLeft: "3px solid var(--color-accent)",
            backgroundColor: "rgba(23, 20, 23, 0.02)",
            fontStyle: "italic",
            color: "var(--color-ink)",
          }}
        >
          &ldquo;Owners do not want another browser tab or dashboard to log into. They want agreed work to move forward
          in the tools and communication channels they already use every day.&rdquo;
        </blockquote>
        <p>
          This led to a major strategic pivot: evolving the modular framework into a <strong>configurable,
          messaging-first managed assistant</strong>. Instead of requiring clients to learn software or configure
          pipelines, Westside Union handles the discovery, knowledge ingestion, and governance rules. Nexus
          then interacts directly through native messaging channels (WhatsApp, SMS, Email), bringing autonomy
          and review into the owner’s natural workflow.
        </p>
      </div>

      {/* ── Diagram 1: Evolution Diagram ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-evolution-diagram.svg"
        alt="System architecture diagram illustrating the evolution from a modular AI framework to a messaging-first managed assistant"
        width={1200}
        height={620}
        layout="full"
        caption="Product Architecture Evolution: Shifting from an infrastructure-centric modular framework to a zero-software-training managed assistant operating directly via WhatsApp, SMS, and Email."
        disclosure="Portfolio systems-design diagram. Proprietary model routing and private runtime schemas intentionally omitted."
      />

      {/* ── Section 3: Core Design Principles ── */}
      <div className="container section">
        <h2>Core systems principles</h2>
        <p>
          Five foundational principles govern how Nexus balances autonomy, reliability, and human control:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            margin: "1.75rem 0",
          }}
        >
          <div style={{ padding: "1.25rem", backgroundColor: "rgba(23, 20, 23, 0.03)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <h3 style={{ fontSize: "var(--step-body)", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>1. One Coherent Identity</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              The client and their customers interact with one consistent brand voice. Underlying capability modules remain swappable infrastructure behind the scenes.
            </p>
          </div>

          <div style={{ padding: "1.25rem", backgroundColor: "rgba(23, 20, 23, 0.03)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <h3 style={{ fontSize: "var(--step-body)", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>2. Shared Canonical Context</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              Business operating hours, policies, pricing guidelines, and customer history live in one shared context layer, preventing repetitive re-explanation.
            </p>
          </div>

          <div style={{ padding: "1.25rem", backgroundColor: "rgba(23, 20, 23, 0.03)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <h3 style={{ fontSize: "var(--step-body)", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>3. Scoped Permissions &amp; Review</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              Autonomy without anxiety. Routine inquiries resolve automatically within bounds, while sensitive or public-facing actions pause for explicit owner sign-off.
            </p>
          </div>

          <div style={{ padding: "1.25rem", backgroundColor: "rgba(23, 20, 23, 0.03)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <h3 style={{ fontSize: "var(--step-body)", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>4. Visible Plain-Language History</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              Owners receive daily digest summaries and transparent activity trails in human terms—not diagnostic log dumps.
            </p>
          </div>

          <div style={{ padding: "1.25rem", backgroundColor: "rgba(23, 20, 23, 0.03)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <h3 style={{ fontSize: "var(--step-body)", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>5. Safe Fallback &amp; Resilience</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              If a third-party tool or provider encounters a rate limit or outage, tasks hold safely in queue rather than failing silently or hallucinating.
            </p>
          </div>
        </div>
      </div>

      {/* ── Section 4: Task States & Human-in-the-Loop Approval Model ── */}
      <div className="container section">
        <h2>Task state lifecycle &amp; the human-in-the-loop approval gate</h2>
        <p>
          In an autonomous business assistant, predictability is far more valuable than unconstrained capability.
          Nexus models every business request through an explicit <strong>5-stage task lifecycle</strong>:
        </p>
        <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li><strong>1. Received:</strong> Ingress triggers via WhatsApp, SMS, email, or webhook; checks policy scope and loads shared business facts.</li>
          <li><strong>2. Processing (In Progress):</strong> Synthesizes verified context, checks real-time booking/POS tools, and drafts the necessary output with zero external hallucinations.</li>
          <li><strong>3. Needs Approval (Gate):</strong> High-stakes actions (public review replies, custom quote proposals, schedule modifications) pause and send a review card to the owner’s messaging app.</li>
          <li><strong>4. Completed:</strong> Dispatches confirmed actions to the destination channel, logs immutable telemetry, and queues the event for the daily summary.</li>
          <li><strong>5. Safe Fallback / Paused:</strong> Automatically triggered when an external API is down or uncertainty exceeds safe thresholds, holding the item securely for human review.</li>
        </ul>
      </div>

      {/* ── Diagram 2: Task Lifecycle & Approval Gate ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-task-lifecycle-diagram.svg"
        alt="Visual diagram showing the 5 task states: Received, Processing, Needs Approval gate with WhatsApp notification, Completed, and Safe Fallback"
        width={1200}
        height={540}
        layout="full"
        caption="Task Lifecycle & Approval Gate: Sensitive actions halt automatically, pinging the business owner on WhatsApp/SMS for a one-tap approval before dispatch."
        disclosure="Systems design diagram illustrating governance logic. Implementation details abstracted."
      />

      {/* ── Section 5: Managed Onboarding Model ── */}
      <div className="container section">
        <h2>Managed onboarding: Eliminating software learning curves</h2>
        <p>
          Traditional SaaS products force owners through self-service onboarding wizards, manual schema setup,
          and tool integration puzzles. Nexus replaces this friction with a <strong>managed onboarding service</strong>:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", margin: "1.5rem 0" }}>
          <div style={{ padding: "1.25rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: 700 }}>Step 01</span>
            <h3 style={{ fontSize: "var(--step-body)", margin: "0.5rem 0", fontFamily: "var(--font-syne)" }}>Discovery &amp; Workflow Review</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              We review the owner’s daily routine to pinpoint exactly what steals time—inbound inquiries, booking confusion, review queues, or follow-ups.
            </p>
          </div>

          <div style={{ padding: "1.25rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: 700 }}>Step 02</span>
            <h3 style={{ fontSize: "var(--step-body)", margin: "0.5rem 0", fontFamily: "var(--font-syne)" }}>Custom Knowledge &amp; Guardrails</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              Westside Union ingests business policies, operating hours, FAQs, and connects approved channels. We configure strict approval rules and test workflows end-to-end.
            </p>
          </div>

          <div style={{ padding: "1.25rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: 700 }}>Step 03</span>
            <h3 style={{ fontSize: "var(--step-body)", margin: "0.5rem 0", fontFamily: "var(--font-syne)" }}>Active Managed Assistant</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              Nexus begins handling agreed work. The owner reviews requests on their phone and receives daily summaries without logging into administrative consoles.
            </p>
          </div>
        </div>
      </div>

      {/* ── Capture: How It Works & Trust Sections ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-how-it-works.png"
        alt="How It Works section of the live Project Nexus marketing site illustrating the three-step managed onboarding journey"
        width={1440}
        height={900}
        layout="full"
        caption="Public Landing Page: The 3-step managed onboarding narrative communicating clear outcomes and transparent partnership."
        disclosure="Live public marketing interface, captured in 2026."
      />

      {/* ── Section 6: Multi-Channel Connections & Integrations ── */}
      <div className="container section">
        <h2>Multi-channel surface &amp; integrations architecture</h2>
        <p>
          Nexus separates connectivity into two distinct layers:
        </p>
        <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>
            <strong>Communication Channels (Ingress &amp; Egress):</strong> Native touchpoints where customers reach out and owners review actions (WhatsApp Business, SMS / Text Messaging, Business Email, and Web Chat).
          </li>
          <li>
            <strong>Business Tools &amp; Systems:</strong> Verified backend data sources synchronized for real-time validation (Google Business Profile, booking/calendar software, Square/Clover POS, and custom CRMs).
          </li>
        </ul>
        <p>
          To maintain product honesty, connector readiness is strictly categorized by status: <strong>Available</strong>, <strong>Pilot</strong>, or <strong>Planned</strong>.
        </p>
      </div>

      {/* ── Diagram 3: Connections Architecture ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-connections-diagram.svg"
        alt="System architecture diagram displaying multi-channel communication ingress, the Nexus coordination core, and business software integrations"
        width={1200}
        height={620}
        layout="full"
        caption="Connections Architecture: Multi-channel ingress feeds into the Nexus governance core, reading from connected business systems and routing approvals safely."
        disclosure="Systems design diagram. Third-party logos and marks are property of their respective owners."
      />

      {/* ── Section 7: Delivery Models (Cloud, Edge, Enterprise) ── */}
      <div className="container section">
        <h2>Delivery models: Cloud, Edge, and Enterprise</h2>
        <p>
          Different businesses operate under different regulatory, privacy, and architectural requirements.
          Project Nexus is architected to support three flexible delivery tiers:
        </p>

        <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "var(--step-small)" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-line)", backgroundColor: "rgba(23,20,23,0.02)" }}>
                <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-syne)" }}>Tier</th>
                <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-syne)" }}>Architecture</th>
                <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-syne)" }}>Key Value</th>
                <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-syne)" }}>Target Fit</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                <td style={{ padding: "0.75rem 1rem", fontWeight: 600 }}>Nexus Cloud</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--color-muted)" }}>Fully managed hosted cloud infrastructure</td>
                <td style={{ padding: "0.75rem 1rem" }}>Zero maintenance, predictable monthly tier, instant setup</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--color-muted)" }}>Cafes, salons, restaurants, trades</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                <td style={{ padding: "0.75rem 1rem", fontWeight: 600, color: "#6D28D9" }}>Nexus Edge</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--color-muted)" }}>Dedicated on-premise hardware appliance</td>
                <td style={{ padding: "0.75rem 1rem" }}>Local data residency, zero third-party training, fixed capacity</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--color-muted)" }}>Legal, healthcare, finance, high-privacy</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                <td style={{ padding: "0.75rem 1rem", fontWeight: 600 }}>Nexus Enterprise</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--color-muted)" }}>Multi-node / hybrid private cloud deployment</td>
                <td style={{ padding: "0.75rem 1rem" }}>Multi-location routing, custom ERP/CRM hooks, dedicated SLA</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--color-muted)" }}>Dealership groups, franchises, multi-unit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Diagram 4: Delivery Models ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-delivery-models.svg"
        alt="Architecture comparison diagram of Nexus Cloud, Nexus Edge hardware appliance, and Nexus Enterprise multi-location deployments"
        width={1200}
        height={520}
        layout="full"
        caption="Delivery Models: Supporting cloud-hosted simplicity, dedicated on-premise hardware appliances (Nexus Edge) for strict data residency, and multi-unit enterprise systems."
        disclosure="Portfolio systems architecture diagram."
      />

      {/* ── Section 8: Live Dashboard & Status Transparency ── */}
      <div className="container section">
        <h2>Operating assistant dashboard &amp; telemetry visibility</h2>
        <p>
          While business owners primarily interact through messaging, the backend operating assistant maintains
          a structured control center to monitor queue health, review paused approval gates, inspect shared context
          freshness, and track system telemetry.
        </p>
        <p>
          The dashboard and live feed reflect working systems operating under an <strong>Active Client Beta Deployment</strong>.
          Metrics, response volumes, and activity indicators displayed on demonstration views illustrate real-time
          telemetry and modular coordination.
        </p>
      </div>

      {/* ── Diagram 5: Dashboard Preview Diagram with Stamp ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-dashboard-preview.svg"
        alt="Operating assistant dashboard interface preview showing active task coordination feed, approval queue, and governance meters, badged ACTIVE CLIENT BETA DEPLOYMENT"
        width={1200}
        height={700}
        layout="full"
        caption="Nexus Assistant Control Center: Live task coordination feed displaying items in progress, paused approval moments, and governance meters reflecting active beta deployment."
        disclosure="Production prototype interface. Proprietary routing logic and customer data redacted."
      />

      {/* ── Section 9: Brand Design & Public Communication ── */}
      <div className="container section">
        <h2>Translating technical complexity into human language</h2>
        <p>
          A core responsibility throughout the Project Nexus engagement was translating complex distributed AI
          concepts into calm, credible product language:
        </p>

        <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "var(--step-small)" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-line)", backgroundColor: "rgba(23,20,23,0.02)" }}>
                <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-syne)" }}>Internal Architecture Concept</th>
                <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-syne)" }}>Public Product Experience</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                <td style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-space-mono)", fontSize: "11px" }}>Neutral Agent Control Plane</td>
                <td style={{ padding: "0.75rem 1rem" }}>One managed assistant that coordinates your everyday business work</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                <td style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-space-mono)", fontSize: "11px" }}>Shared Context &amp; Vector Store</td>
                <td style={{ padding: "0.75rem 1rem" }}>You never have to teach the system your business hours or pricing twice</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                <td style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-space-mono)", fontSize: "11px" }}>Human-in-the-Loop Policy Gate</td>
                <td style={{ padding: "0.75rem 1rem" }}>Important actions (public replies, quotes) always wait for your approval</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                <td style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-space-mono)", fontSize: "11px" }}>Graceful Fallback &amp; Circuit Breaker</td>
                <td style={{ padding: "0.75rem 1rem" }}>Tasks pause safely during third-party outages with zero lost work</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                <td style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-space-mono)", fontSize: "11px" }}>On-Premise Edge Hardware</td>
                <td style={{ padding: "0.75rem 1rem" }}>Private local appliance keeping sensitive data strictly on your premises</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Captures: Trust & Industries ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-trust-section.png"
        alt="Trust and governance section of the Project Nexus website detailing data ownership, human approvals, and predictable monthly costs"
        width={1440}
        height={900}
        layout="full"
        caption="Trust & Governance Section: Transparent commitments explaining data ownership, approval boundaries, and managed maintenance."
        disclosure="Live public marketing interface, captured in 2026."
      />

      {/* ── Section 10: Verified Role & Retrospective Reflection ── */}
      <div className="container section">
        <h2>Jacky’s multidisciplinary contribution</h2>
        <p>
          As founder and lead product strategist, Jacky drove the project across strategic, architectural, and visual dimensions:
        </p>
        <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li><strong>Product Strategy &amp; Pivot:</strong> Identified owner friction through market interviews and directed the strategic evolution from an infrastructure framework to a messaging-first managed service.</li>
          <li><strong>Systems Architecture &amp; Governance:</strong> Formulated the 5-stage task lifecycle, human-in-the-loop approval gate, shared context ingestion model, and multi-tier delivery framework.</li>
          <li><strong>Experience &amp; Interaction Design:</strong> Designed the WhatsApp/SMS approval cards, onboarding flow, and assistant control center mockups.</li>
          <li><strong>Creative Direction &amp; Brand Copy:</strong> Authored the story-led messaging framework, visual identity, and live marketing experience at <code>nexus.westside-union.com</code>.</li>
        </ul>

        <h2 style={{ marginTop: "2.5rem" }}>Key takeaways &amp; retrospective</h2>
        <p>
          Designing Project Nexus reinforced a fundamental truth about emerging AI products: <em>Technical modularity
          must be matched with rigorous human governance and radical user simplicity.</em>
        </p>
        <p>
          By removing the burden of software management from the business owner and embedding intelligent coordination
          within the communication channels they already use, Nexus demonstrates how sophisticated systems design can
          turn complex AI capabilities into trusted, everyday business utility.
        </p>
      </div>
    </article>
  );
}
