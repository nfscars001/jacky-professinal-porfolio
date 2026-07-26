import { MediaFigure } from "@/components/case-study/media-figure";

export function ArtpressoCaseStudy() {
  return (
    <article className="case-study-content">
      <div className="container section">
        <h2>Context and problem</h2>
        <p>
          Independent artists face a recurring challenge: pricing their work consistently and confidently. While large galleries have established appraisal models, individual creators often rely on guesswork, comparing themselves to peers without factoring in their actual material costs, time, or career stage.
        </p>
        <p>
          The problem was clear: artists needed a tool that demystified the pricing process without dictating creative worth. It needed to be practical, transparent, and easy to use on mobile devices while at a studio or gallery.
        </p>

        <h2>My role &amp; approach</h2>
        <p>
          As the sole product designer and founder of Artpresso, I handled the end-to-end process from initial concept to the live web application. The approach centered around breaking down a multi-variable pricing challenge (dimensions, material costs, hourly rates, and market coefficient) into a simple, guided calculation workflow.
        </p>
      </div>

      <div className="container section">
        <h2>Selected design decisions</h2>
        
        <h3>1. The Guided Calculator</h3>
        <p>
          Instead of presenting a complex spreadsheet-like interface, I designed a progressive disclosure model. The calculator asks for inputs one step at a time&mdash;starting with physical dimensions, moving to material costs, and ending with the artist&apos;s personal market coefficient. This prevents cognitive overload and builds trust in the final calculated price.
        </p>

        <h3>2. Transparent Results Panel</h3>
        <p>
          A common issue with automated pricing tools is the &quot;black box&quot; effect. To combat this, the results panel breaks down exactly how the final price was reached, showing the contribution of materials, time, and size.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/artpresso/artpresso_panel_screenshot.jpg"
        alt="Artpresso transparent results panel showing the breakdown of a calculated artwork price"
        width={1400}
        height={900}
        layout="full"
        caption="The results panel breaks down the calculation, ensuring artists understand and can defend their pricing."
      />

      <div className="container section">
        <h2>Outcome and reflection</h2>
        <p>
          Artpresso launched successfully as a live tool for creative professionals. It immediately found an audience among emerging artists looking for a baseline pricing framework.
        </p>
        <p>
          Reflecting on the initial release, the most significant lesson was the importance of the &quot;Market Coefficient&quot; variable. Early prototypes relied too heavily on hourly wages, which undervalued experienced artists who work quickly. Adding a coefficient that scales with career progression was the key to making the tool viable for a broader range of creators.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/artpresso/artpresso_section1_screenshot.jpg"
        alt="Artpresso interface showing further details on artwork pricing strategy"
        width={1400}
        height={900}
        layout="full"
      />
    </article>
  );
}
