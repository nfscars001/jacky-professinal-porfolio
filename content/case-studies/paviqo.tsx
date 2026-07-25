import { MediaFigure } from "@/components/case-study/media-figure";

export function PaviqoCaseStudy() {
  return (
    <article className="case-study-content">
      <div className="container section">
        <h2>Context and problem</h2>
        <p>
          Automotive dealerships lose a significant percentage of potential sales simply due to lead leakage. When inquiries arrive outside of business hours, or when sales teams are overwhelmed, leads go cold. Traditional CRM systems are passive&mdash;they require manual data entry and follow-up, which often doesn&apos;t happen fast enough.
        </p>
        <p>
          The goal of Paviqo was to build an active, AI-powered platform that captures, qualifies, and follows up with leads autonomously, integrating seamlessly into a dealership&apos;s existing workflow.
        </p>

        <h2>My role &amp; approach</h2>
        <p>
          As the Product Designer and Product Strategist, my focus was on designing AI workflows that felt human and trustworthy to the end consumer, while providing dealership staff with a clear, actionable dashboard.
        </p>
        <p>
          The approach required mapping out the complex journey of a car buyer and identifying the precise moments where AI intervention (via multilingual conversational agents) would be most effective.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/paviqo/paviqo_dashboard1_screenshot.png"
        alt="Paviqo lead management dashboard showing a pipeline of qualified leads"
        width={1400}
        height={900}
        layout="full"
        caption="The primary dashboard provides an at-a-glance view of the AI-managed lead pipeline."
        disclosure="AI-assisted concept visualization created in 2026 and based on Jacky's design direction."
      />

      <div className="container section">
        <h2>Selected design decisions</h2>
        
        <h3>1. The Handoff Protocol</h3>
        <p>
          One of the most critical design challenges with autonomous AI agents is the handoff. I designed a protocol where the AI qualifies the lead (budget, timeline, vehicle interest) and then seamlessly transitions the conversation to a human salesperson, passing along a structured summary of the interaction so the salesperson can pick up exactly where the AI left off.
        </p>

        <h3>2. Multilingual Support Interface</h3>
        <p>
          To cater to diverse markets, Paviqo supports multiple languages. Instead of just translating the UI, I designed the conversation review tools to allow sales managers to understand the context of AI interactions in other languages, using inline summaries and sentiment analysis.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/paviqo/paviqo_dashboard2_screenshot.png"
        alt="Paviqo detailed lead view showing AI conversation history and sentiment analysis"
        width={1400}
        height={900}
        layout="full"
        caption="Detailed lead view showing the conversation history and the seamless handoff point to human staff."
      />

      <div className="container section">
        <h2>Outcome and status</h2>
        <p>
          Paviqo is currently in active development. We are testing the conversational models with pilot dealerships and refining the dashboard based on real-world usage patterns. The early feedback indicates that the AI qualification workflows significantly reduce the burden on sales teams during peak hours.
        </p>
        <p>
          Because the product is still pre-launch, specific conversion metrics are not yet available, but the focus remains on optimizing the AI-to-human handoff experience to ensure trust and reliability.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/paviqo/paviqo_section1_screenshot.jpg"
        alt="Paviqo settings interface for configuring AI agent behavior"
        width={1400}
        height={900}
        layout="full"
      />
    </article>
  );
}
