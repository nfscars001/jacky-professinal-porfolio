import { MediaFigure } from "@/components/case-study/media-figure";

/**
 * MCP Doctor case study component.
 * Status: Open-source project, version 0.1.0 (MIT License)
 * Repository: https://github.com/WestsideUnion/mcp-doctor
 *
 * Demonstrates local-first developer tool product strategy, diagnostic pipeline design,
 * finding model UX, and open-source CLI engineering.
 */
export function MCPDoctorCaseStudy() {
  return (
    <article className="case-study-content">
      {/* ── Section 1: Context & Debugging Gap ── */}
      <div className="container section">
        <h2>Context: The MCP configuration debugging gap</h2>
        <p>
          Model Context Protocol (MCP) allows AI agents to connect to local tools and data sources. However, when an
          MCP server fails to start, developers often struggle to isolate the root cause. Apparent agent failures
          frequently stem from unglamorous configuration issues:
        </p>
        <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>Malformed JSON syntax or illegal trailing commas</li>
          <li>Executables present in terminal shells but missing from GUI application <code>PATH</code> environments</li>
          <li>Referenced environment variables or secret API keys left unexported</li>
          <li>Unpinned <code>npx</code> or package runners triggering interactive prompts during silent background startup</li>
          <li>Logging statements written to <code>stdout</code> before the protocol handshake completes</li>
          <li>Literal API keys or sensitive tokens stored directly in version-controlled config files</li>
        </ul>
        <p>
          <strong>MCP Doctor</strong> was created as an open-source CLI tool to bridge this gap: turning cryptic startup
          failures into precise, automated diagnostic reports with actionable repair instructions.
        </p>
      </div>

      {/* ── Hero Terminal Figure ── */}
      <MediaFigure
        src="/images/projects/mcp-doctor/mcp-doctor-hero-terminal.svg"
        alt="MCP Doctor CLI terminal output displaying discovered configuration path, diagnostic execution, and structured error/warning reports"
        width={1200}
        height={700}
        layout="full"
        caption="MCP Doctor CLI output: Scanning an MCP configuration file, categorizing issues by severity, and detailing exact repair steps."
        disclosure="Terminal interface captured from MCP Doctor CLI v0.1.0 release."
      />

      {/* ── Section 2: Product Principles ── */}
      <div className="container section">
        <h2>Core product principles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", margin: "1.5rem 0" }}>
          <div style={{ padding: "1.25rem", backgroundColor: "rgba(23, 20, 23, 0.03)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <h3 style={{ fontSize: "var(--step-body)", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>Local-First Safety</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              MCP configs contain private paths and environment keys. Inspection happens entirely on the local machine with zero network transmission.
            </p>
          </div>
          <div style={{ padding: "1.25rem", backgroundColor: "rgba(23, 20, 23, 0.03)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <h3 style={{ fontSize: "var(--step-body)", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>Actionable Guidance</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              Every finding pairs a human-readable description with an explicit repair suggestion to minimize time-to-resolution.
            </p>
          </div>
          <div style={{ padding: "1.25rem", backgroundColor: "rgba(23, 20, 23, 0.03)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-line)" }}>
            <h3 style={{ fontSize: "var(--step-body)", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>Human &amp; Automation Friendly</h3>
            <p style={{ fontSize: "var(--step-small)", color: "var(--color-muted)", margin: 0, lineHeight: 1.5 }}>
              Supports clean terminal text output for interactive use, structured JSON for tools/scripts, and strict exit status codes (<code>0</code>, <code>1</code>, <code>2</code>).
            </p>
          </div>
        </div>
      </div>

      {/* ── Section 3: Diagnostic Architecture & Pipeline ── */}
      <div className="container section">
        <h2>Diagnostic engine architecture</h2>
        <p>
          MCP Doctor operates through a multi-stage pipeline designed to parse, normalize, and audit configurations
          across multiple client formats (Claude Desktop, Cursor, Continue, etc.) without runtime dependencies.
        </p>
      </div>

      <MediaFigure
        src="/images/projects/mcp-doctor/mcp-doctor-pipeline.svg"
        alt="System architecture diagram of MCP Doctor showing discovery, strict JSON parsing, normalization, and the 7-territory rule pipeline"
        width={1000}
        height={360}
        layout="full"
        caption="Diagnostic Pipeline: Config discovery, JSON parsing, shape normalization, and 7 territory rule inspections."
        disclosure="Architecture diagram created from open-source repository design."
      />

      {/* ── Section 4: Finding Model & Coverage ── */}
      <div className="container section">
        <h2>Designing the finding model</h2>
        <p>
          To serve both interactive developers and automated CI check scripts, every finding follows a structured model:
        </p>
        <pre style={{
          backgroundColor: "#0d1117",
          color: "#e6edf3",
          padding: "1.25rem",
          borderRadius: "var(--radius-sm)",
          overflowX: "auto",
          fontFamily: "var(--font-space-mono)",
          fontSize: "var(--step-small)",
          lineHeight: 1.5,
          margin: "1.5rem 0"
        }}>
{`{
  "severity": "error",
  "code": "missing-env-var",
  "server": "postgres-mcp",
  "message": "Referenced environment variable is not set: DATABASE_URL",
  "fix": "Export DATABASE_URL in your shell or specify it in client launcher env.",
  "category": "runtime",
  "confidence": "high",
  "location": "mcp.json#mcpServers.postgres-mcp.env.DATABASE_URL"
}`}
        </pre>

        <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Diagnostic Coverage (v0.1.0 Shipped Capabilities)</h3>
        <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li><strong>Syntax &amp; Structure:</strong> Readability, strict JSON validation, supported server object keys</li>
          <li><strong>Runtime &amp; Executables:</strong> Binary presence, absolute path verification, script location checks</li>
          <li><strong>Environment &amp; Security:</strong> Unset variables, hardcoded API key tokens in CLI arguments</li>
          <li><strong>Startup Protocol:</strong> Detection of unpinned <code>npx</code>/<code>uvx</code> prompts and <code>stdout</code> logging risks</li>
          <li><strong>Supply Chain:</strong> Package version pinning verification</li>
          <li><strong>Metadata &amp; Usability:</strong> Zero-width unicode characters, confusable names, prompt budget limits</li>
        </ul>
      </div>

      {/* ── Section 5: Engineering & Roadmap ── */}
      <div className="container section">
        <h2>Engineering delivery &amp; roadmap</h2>
        <p>
          MCP Doctor v0.1.0 was built with <strong>zero runtime dependencies</strong> using standard Node.js APIs (Node 20+).
          It includes a native test suite (<code>node --test</code>) covering 6 key failure scenarios to prevent false positives.
        </p>
        <p>
          <strong>Open Source Availability:</strong> The project is published under the MIT license at{" "}
          <a
            href="https://github.com/WestsideUnion/mcp-doctor"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)", textDecoration: "underline" }}
          >
            github.com/WestsideUnion/mcp-doctor ↗
          </a>
        </p>

        <aside
          style={{
            marginTop: "2rem",
            padding: "1.25rem 1.5rem",
            backgroundColor: "rgba(23, 20, 23, 0.03)",
            border: "1px solid var(--color-line)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <h4 style={{ fontFamily: "var(--font-space-mono)", fontSize: "var(--step-label)", textTransform: "uppercase", color: "var(--color-muted)", margin: "0 0 0.5rem 0" }}>
            Version 0.1.0 Scope vs Future Roadmap
          </h4>
          <p style={{ fontSize: "var(--step-small)", color: "var(--color-ink)", margin: 0, lineHeight: 1.6 }}>
            <strong>Shipped v0.1.0:</strong> CLI scanner engine, terminal/JSON reporters, local discovery, exit status codes, MIT release.<br />
            <strong>Future Opportunities:</strong> Pre-commit git hooks, IDE extension integration, and versioned JSON schema validation.
          </p>
        </aside>
      </div>
    </article>
  );
}
