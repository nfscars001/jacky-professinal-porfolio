import { MediaFigure } from "@/components/case-study/media-figure";

/**
 * Project Nexus case study content.
 * Status: In development — framework layer. Live: marketing site only.
 *
 * Confidentiality guidelines applied:
 *  - No named AI providers, routing logic, or internal framework identifiers published.
 *  - No pricing details or private roadmap items included.
 *  - TODO(confidentiality-review) markers placed on any details requiring Jacky's sign-off.
 *
 * TODO(content): Jacky to review all copy below before launch.
 */
export function ProjectNexusCaseStudy() {
  return (
    <article className="case-study-content">
      {/* ── Section 1: Context ── */}
      <div className="container section">
        <h2>Context</h2>
        <p>
          Most business owners don&rsquo;t think about AI infrastructure — they think about their inbox,
          their follow-up queue, and the work that was still waiting for them at 11 PM. Project Nexus
          began from a direct observation: the same repetitive coordination tasks (answering inquiries,
          sending reminders, preparing summaries, flagging issues) consumed disproportionate time across
          very different types of businesses, and the tools built to address them either required significant
          technical setup or felt like generic chatbot products disconnected from how a business actually ran.
        </p>
        <p>
          The design challenge was not to build another AI assistant. It was to design a system architecture
          that could surface one coherent business-facing experience — reliable, predictable, and familiar —
          over an interchangeable set of underlying AI capabilities, while keeping the owner always in control.
        </p>

        {/* NOTE: The live marketing site (nexus.westside-union.com) is in production.
            The modular AI framework system documented here is in active development. */}
        <aside
          style={{
            marginTop: "2rem",
            padding: "1.25rem 1.5rem",
            backgroundColor: "rgba(23, 20, 23, 0.04)",
            border: "1px solid var(--color-line)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "var(--step-label)",
              color: "var(--color-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}
          >
            Status note
          </p>
          <p
            style={{
              fontSize: "var(--step-small)",
              color: "var(--color-ink)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            The live marketing website at nexus.westside-union.com is in production and available to the
            public. The modular AI framework system described in this case study — including its capability
            modules, shared context layer, and permission model — remains in active development and has not
            yet shipped to end users.
          </p>
        </aside>
      </div>

      {/* ── Cover screenshot ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus_cover.png"
        alt="Project Nexus marketing site: editorial headline 'Your business runs, even when you sleep.' over an off-white background with iridescent geometric forms"
        width={1440}
        height={900}
        layout="full"
        caption="The live Nexus marketing site. The product brand leads with the outcome, not the technology."
        disclosure="Live public marketing interface, captured in 2026. Simplified portfolio diagram. Proprietary implementation details intentionally omitted."
      />

      {/* ── Section 2: Design challenge ── */}
      <div className="container section">
        <h2>The design challenge</h2>
        <p>
          The core tension: a modular system should be able to swap individual AI capabilities in or out
          as needs change, but the person running the business should never feel like they&rsquo;re managing
          a patchwork of disconnected tools. Every interaction — whether handled by a messaging module, a
          scheduling module, or a reporting module — needed to feel like it came from one voice that
          understood the business.
        </p>
        <p>
          This required three distinct layers of design work: the shared business context layer that any
          capability could draw from, the permission and approval model that kept owners in control, and
          the user-facing experience that unified everything behind a consistent, low-friction interface.
        </p>
      </div>

      {/* ── How it works screenshot ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-how-it-works.png"
        alt="How It Works section of the Nexus site: five cards showing the onboarding steps from discovery to working assistant"
        width={1440}
        height={900}
        layout="full"
        caption="The onboarding narrative maps the owner's journey from telling us how the business runs to receiving autonomous summaries and task support."
        disclosure="Live public marketing interface, captured in 2026. Simplified portfolio diagram. Proprietary implementation details intentionally omitted."
      />

      {/* ── Section 3: Modular capabilities ── */}
      <div className="container section">
        <h2>Interchangeable AI capabilities</h2>
        <p>
          The framework is designed around discrete capability modules — each handling a specific category
          of work (inquiry response, follow-up sequencing, document preparation, owner notifications,
          scheduled reporting). Modules are configured once during the setup phase and can be added,
          paused, or replaced without disrupting other parts of the system.
        </p>
        <p>
          The key design decision: capabilities are interchangeable at the infrastructure level, but the
          user experience never exposes module boundaries. An owner doesn&rsquo;t know or care that the
          summary they receive was produced by a different process than the follow-up their customer received.
          From their perspective, Nexus is one thing doing many things.
        </p>

        <h2 style={{ marginTop: "2.5rem" }}>Shared business context</h2>
        <p>
          Every capability module draws from a single shared context layer: the business&rsquo;s operating
          hours, communication style, channel preferences, staff structure, and recurring workflows. This
          means that adding a new capability doesn&rsquo;t require re-teaching the system what it already knows.
        </p>
        <p>
          Designing this shared context model — what to capture during discovery, how to represent it,
          and how to keep it current — was one of the longest phases of the design work. Getting it wrong
          means modules produce outputs that feel disconnected from the actual business. Getting it right
          means every output, regardless of source, reads like it came from someone who knows the business.
        </p>
      </div>

      {/* ── Industries screenshot ── */}
      <MediaFigure
        src="/images/projects/nexus_ai/nexus-mobile-hero.png"
        alt="Industries section of the Nexus site showing tailored capability cards for restaurants, barbershops and salons, and coffee shops"
        width={1440}
        height={900}
        layout="full"
        caption="The marketing site presents industry-specific capability configurations — a signal of how the shared context layer adapts to different business types."
        disclosure="Live public marketing interface, captured in 2026. Simplified portfolio diagram. Proprietary implementation details intentionally omitted."
      />

      {/* ── Section 4: Permissions, approvals, and transparency ── */}
      <div className="container section">
        <h2>Scoped permissions and human approvals</h2>
        <p>
          Autonomous systems lose owner trust quickly if they act without clear boundaries. The permission
          model in Nexus is explicit: every type of action (sending a message, publishing content, updating
          a record, spending time on a task) requires a declared scope set by the owner during setup. Actions
          outside that scope surface as approval requests rather than autonomous outputs.
        </p>
        <p>
          This was a deliberate product position: Nexus should be predictable, not powerful in ways that
          create anxiety. A restaurant owner should be able to say &ldquo;draft promotional copy but always ask
          me before sending&rdquo; and trust that the system will always stop at that boundary — not
          occasionally, always.
        </p>

        <h2 style={{ marginTop: "2.5rem" }}>Transparent activity history</h2>
        <p>
          Alongside permissions, the design required a clear audit layer: owners and the setup team can
          always see what the system did, why it triggered, and what it produced — in plain language,
          not technical logs. This activity history is a first-class feature, not a backend diagnostic tool.
          It exists because trust in autonomous systems is built through consistent transparency over time,
          not through a single onboarding session.
        </p>
      </div>

      {/* ── Section 5: Portability and safe fallback ── */}
      <div className="container section">
        <h2>Portability and safe fallback</h2>
        <p>
          Two principles shaped the framework&rsquo;s resilience design. First, portability: business context,
          communication history, and configuration should be owned by the business, not locked to any
          particular AI provider or infrastructure dependency. The framework was built to be capable
          of operating with substitutable underlying components without requiring reconfiguration of
          the owner-facing layer.
        </p>
        <p>
          Second, safe fallback: when a capability module is unavailable — whether due to a provider
          outage, a rate limit, or a deliberate pause — the system routes gracefully rather than silently
          failing. Owners see a clear status signal, and any pending work is held rather than dropped.
          This matters most for after-hours work where no human can intervene if something goes wrong.
        </p>
      </div>

      {/* ── Section 6: Translating infrastructure into product language ── */}
      <div className="container section">
        <h2>Translating infrastructure into product language</h2>
        <p>
          One of the most consistent design challenges was vocabulary. The underlying system deals in
          concepts like message queues, context retrieval, model routing, and capability invocation.
          None of those words belong in the owner-facing experience.
        </p>
        <p>
          The marketing site became the first test of this translation work: every section needed to
          describe what Nexus does in terms of the owner&rsquo;s day — their inbox, their mornings, their
          weekly routine — rather than in terms of the technology producing it. &ldquo;Your business runs
          even when you sleep&rdquo; is not marketing hyperbole; it is the exact sentence that emerged from
          listening to business owners describe what they wanted from the product.
        </p>
        <p>
          The same translation discipline extends into the product itself: module names, approval
          language, activity history entries, and status messages are all written from the business
          owner&rsquo;s frame of reference. A capability isn&rsquo;t &ldquo;an LLM invocation with retrieval augmentation&rdquo;
          — it&rsquo;s &ldquo;Nexus drafting a response to that customer who asked about your hours.&rdquo;
        </p>

        {/* TODO(confidentiality-review): Review whether any implementation-specific details in this section
            could reveal proprietary routing logic or internal provider relationships. */}
      </div>

      {/* ── Section 7: Current status ── */}
      <div className="container section">
        <h2>Current status</h2>
        <p>
          The live marketing site at nexus.westside-union.com is in production. It reflects the positioning,
          target industries, and onboarding flow developed during the first design phase.
        </p>
        <p>
          The modular AI framework system — capability modules, shared context layer, permission model,
          activity history, and fallback architecture — is in active development. The design decisions
          documented here represent work-in-progress thinking and are subject to revision as the system
          moves toward a testable state.
        </p>
        <p>
          {/* TODO(confidentiality-review): Confirm whether any reference to pilot status should be included here. */}
          This case study documents the design process and the product decisions behind it. It does not
          include internal architecture documentation, provider details, or roadmap items that are not
          publicly available.
        </p>
      </div>
    </article>
  );
}
