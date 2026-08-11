const fs = require('fs');
const path = require('path');

const natalieDir = path.join(process.cwd(), 'public/images/projects/natalie-me');
const mcpDir = path.join(process.cwd(), 'public/images/projects/mcp-doctor');

if (!fs.existsSync(natalieDir)) fs.mkdirSync(natalieDir, { recursive: true });
if (!fs.existsSync(mcpDir)) fs.mkdirSync(mcpDir, { recursive: true });

// =============================================================================
// NATALIE ME ASSETS
// =============================================================================

// 1. Hero Desktop & Product Architecture Preview
const natalieHeroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" width="100%" height="100%">
  <defs>
    <style>
      .bg { fill: #f9f7f4; }
      .surface { fill: #ffffff; stroke: #e8e3dd; stroke-width: 1; rx: 12; }
      .serif { font-family: 'Playfair Display', Georgia, serif; fill: #1c1917; }
      .sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; fill: #44403c; }
      .mono { font-family: 'SF Mono', SFMono-Regular, Monaco, monospace; fill: #78716c; font-size: 12px; letter-spacing: 0.05em; }
      .accent-pill { fill: #f3ece4; rx: 16; }
      .dash-bg { fill: #1c1917; rx: 12; }
      .dash-text { fill: #f5f5f4; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
      .dash-accent { fill: #d97706; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="1440" height="900" class="bg" />

  <!-- Botanical shadow ambient effect -->
  <path d="M 0,0 Q 400,200 200,600 T 0,900 Z" fill="#eee7de" opacity="0.4" />

  <!-- Main Frame (Public Gallery View) -->
  <rect x="80" y="60" width="880" height="780" class="surface" />
  
  <!-- Public Site Header -->
  <text x="130" y="130" class="serif" font-size="28" font-weight="600" letter-spacing="0.05em">NATALIE ME</text>
  <text x="130" y="155" class="sans" font-size="13" fill="#78716c">Visual Artist · Toronto &amp; Ukraine</text>

  <!-- Public Nav -->
  <text x="660" y="135" class="sans" font-size="14" font-weight="500">Gallery</text>
  <text x="730" y="135" class="sans" font-size="14" fill="#78716c">Bio</text>
  <text x="780" y="135" class="sans" font-size="14" fill="#78716c">Events</text>
  <text x="840" y="135" class="sans" font-size="14" fill="#78716c">Contact</text>

  <!-- Divider -->
  <line x1="130" y1="180" x2="910" y2="180" stroke="#e8e3dd" stroke-width="1" />

  <!-- Hero Headline -->
  <text x="130" y="250" class="serif" font-size="38" font-weight="500">Quiet Digital Gallery &amp;</text>
  <text x="130" y="298" class="serif" font-size="38" font-weight="500">Self-Managed Content</text>
  <text x="130" y="340" class="sans" font-size="16" fill="#78716c">A calm editorial website for artwork, biography, and exhibitions—backed by a private studio dashboard.</text>

  <!-- Artwork Grid Preview -->
  <rect x="130" y="380" width="230" height="300" rx="8" fill="#e7e0d6" />
  <rect x="130" y="690" width="180" height="16" rx="4" fill="#1c1917" opacity="0.8" />
  <rect x="130" y="714" width="120" height="12" rx="3" fill="#a8a29e" />

  <rect x="380" y="380" width="230" height="300" rx="8" fill="#dfd6c9" />
  <rect x="380" y="690" width="160" height="16" rx="4" fill="#1c1917" opacity="0.8" />
  <rect x="380" y="714" width="100" height="12" rx="3" fill="#a8a29e" />

  <rect x="630" y="380" width="230" height="300" rx="8" fill="#e3dacd" />
  <rect x="630" y="690" width="190" height="16" rx="4" fill="#1c1917" opacity="0.8" />
  <rect x="630" y="714" width="130" height="12" rx="3" fill="#a8a29e" />

  <!-- Second Layer: Private Dashboard Frame (Overlaid on Right) -->
  <rect x="1000" y="160" width="360" height="580" class="dash-bg" />
  <rect x="1000" y="160" width="360" height="48" rx="12" fill="#262320" />
  <circle cx="1030" cy="184" r="5" fill="#ef4444" opacity="0.8" />
  <circle cx="1046" cy="184" r="5" fill="#f59e0b" opacity="0.8" />
  <circle cx="1062" cy="184" r="5" fill="#10b981" opacity="0.8" />
  <text x="1150" y="189" class="mono" fill="#a8a29e" font-size="11">STUDIO DASHBOARD</text>
  <rect x="1300" y="174" width="44" height="20" rx="4" fill="#3f3a36" />
  <text x="1308" y="188" class="mono" fill="#d97706" font-size="10">AUTH</text>

  <!-- Dashboard Internal Content Mockup (Redacted) -->
  <text x="1030" y="240" class="dash-text" font-size="18" font-weight="600">Artwork Management</text>
  <rect x="1260" y="222" width="80" height="28" rx="6" fill="#d97706" />
  <text x="1272" y="241" class="dash-text" font-size="12" font-weight="600">+ Add Work</text>

  <!-- Artwork Row 1 -->
  <rect x="1030" y="270" width="310" height="64" rx="8" fill="#2a2723" stroke="#38332e" stroke-width="1" />
  <rect x="1042" y="280" width="44" height="44" rx="4" fill="#57534e" />
  <text x="1098" y="296" class="dash-text" font-size="14" font-weight="500">[Redacted Artwork Title]</text>
  <text x="1098" y="316" class="mono" font-size="11" fill="#78716c">Oil on canvas · 2026 · Visible</text>

  <!-- Artwork Row 2 -->
  <rect x="1030" y="346" width="310" height="64" rx="8" fill="#2a2723" stroke="#38332e" stroke-width="1" />
  <rect x="1042" y="356" width="44" height="44" rx="4" fill="#44403c" />
  <text x="1098" y="372" class="dash-text" font-size="14" font-weight="500">[Redacted Artwork Title]</text>
  <text x="1098" y="392" class="mono" font-size="11" fill="#78716c">Mixed Media · 2025 · Visible</text>

  <!-- Event Manager Section -->
  <text x="1030" y="445" class="dash-text" font-size="18" font-weight="600">Exhibitions &amp; Events</text>
  <rect x="1030" y="465" width="310" height="56" rx="8" fill="#2a2723" stroke="#38332e" stroke-width="1" />
  <text x="1046" y="488" class="dash-text" font-size="13" font-weight="500">Upcoming Toronto Showcase</text>
  <text x="1046" y="506" class="mono" font-size="11" fill="#10b981">Published · Oct 2026</text>

  <!-- Label Badge -->
  <rect x="1030" y="550" width="310" height="150" rx="8" fill="#262320" />
  <text x="1050" y="580" class="mono" fill="#d97706" font-size="12">TWO-SIDED PRODUCT SYSTEM</text>
  <text x="1050" y="605" class="dash-text" font-size="13">Public gallery optimized for curators.</text>
  <text x="1050" y="625" class="dash-text" font-size="13">Private dashboard for artist management.</text>
  <text x="1050" y="660" class="mono" fill="#78716c" font-size="11">Supabase Storage · Next.js · Redacted</text>
</svg>`;

// 2. System Architecture SVG
const natalieArchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 350" width="100%" height="100%">
  <defs>
    <style>
      .box { fill: #ffffff; stroke: #d6d3d1; stroke-width: 2; rx: 10; }
      .dark-box { fill: #1c1917; stroke: #292524; stroke-width: 2; rx: 10; }
      .text-title { font-family: -apple-system, sans-serif; font-size: 15px; font-weight: 600; fill: #1c1917; text-anchor: middle; }
      .dark-text-title { font-family: -apple-system, sans-serif; font-size: 15px; font-weight: 600; fill: #f5f5f4; text-anchor: middle; }
      .text-desc { font-family: -apple-system, sans-serif; font-size: 12px; fill: #78716c; text-anchor: middle; }
      .dark-text-desc { font-family: -apple-system, sans-serif; font-size: 12px; fill: #a8a29e; text-anchor: middle; }
      .arrow { stroke: #d97706; stroke-width: 2; fill: none; }
      .arrow-head { fill: #d97706; }
      .label { font-family: 'SF Mono', monospace; font-size: 11px; fill: #b45309; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    </style>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
    </marker>
  </defs>

  <!-- Row 1: Private Side -->
  <rect x="40" y="40" width="220" height="90" class="dark-box" />
  <text x="150" y="75" class="dark-text-title">Artist Dashboard</text>
  <text x="150" y="98" class="dark-text-desc">Private Auth &amp; Form Controls</text>

  <!-- Arrow to Storage -->
  <line x1="260" y1="85" x2="360" y2="85" class="arrow" marker-end="url(#arrow)" />
  <text x="310" y="75" class="label" text-anchor="middle">MUTATE</text>

  <!-- Center: Database & Storage -->
  <rect x="360" y="40" width="260" height="90" class="box" />
  <text x="490" y="75" class="text-title">Structured Content &amp; Media</text>
  <text x="490" y="98" class="text-desc">Database Records &amp; Storage</text>

  <!-- Arrow to Public Site -->
  <line x1="620" y1="85" x2="720" y2="85" class="arrow" marker-end="url(#arrow)" />
  <text x="670" y="75" class="label" text-anchor="middle">FETCH</text>

  <!-- Right: Next.js Public App -->
  <rect x="720" y="40" width="240" height="90" class="box" />
  <text x="840" y="75" class="text-title">Next.js Public Portfolio</text>
  <text x="840" y="98" class="text-desc">ISR &amp; Cached Dynamic Views</text>

  <!-- Flow to Visitor Views -->
  <line x1="840" y1="130" x2="840" y2="190" class="arrow" marker-end="url(#arrow)" />

  <!-- Bottom Row: Public Views -->
  <rect x="60" y="210" width="200" height="70" class="box" />
  <text x="160" y="242" class="text-title">Gallery View</text>
  <text x="160" y="262" class="text-desc">Artwork, Mediums, Alt Text</text>

  <rect x="290" y="210" width="200" height="70" class="box" />
  <text x="390" y="242" class="text-title">Biography</text>
  <text x="390" y="262" class="text-desc">Story, Awards, Heritage</text>

  <rect x="520" y="210" width="200" height="70" class="box" />
  <text x="620" y="242" class="text-title">Events &amp; Shows</text>
  <text x="620" y="262" class="text-desc">Dates, Venues, Outgoing Links</text>

  <rect x="750" y="210" width="200" height="70" class="box" />
  <text x="850" y="242" class="text-title">Contact &amp; Inquiries</text>
  <text x="850" y="262" class="text-desc">Commissions &amp; Outreach</text>

  <!-- Connect Bottom Views -->
  <line x1="840" y1="190" x2="160" y2="190" stroke="#d97706" stroke-width="2" />
  <line x1="160" y1="190" x2="160" y2="210" class="arrow" marker-end="url(#arrow)" />
  <line x1="390" y1="190" x2="390" y2="210" class="arrow" marker-end="url(#arrow)" />
  <line x1="620" y1="190" x2="620" y2="210" class="arrow" marker-end="url(#arrow)" />
  <line x1="850" y1="190" x2="850" y2="210" class="arrow" marker-end="url(#arrow)" />
</svg>`;

// 3. Redacted Studio Dashboard Overview SVG
const natalieDashOverviewSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <style>
      .bg { fill: #171513; }
      .card { fill: #24211e; stroke: #36322d; stroke-width: 1; rx: 8; }
      .text { font-family: -apple-system, sans-serif; fill: #f5f5f4; }
      .muted { fill: #989088; font-family: -apple-system, sans-serif; }
      .mono { font-family: 'SF Mono', monospace; font-size: 12px; fill: #78716c; }
      .accent { fill: #d97706; }
      .badge-pub { fill: #064e3b; }
      .badge-pub-text { fill: #34d399; font-family: -apple-system, sans-serif; font-size: 11px; font-weight: 600; }
    </style>
  </defs>

  <rect width="1200" height="675" class="bg" />

  <!-- Sidebar -->
  <rect x="0" y="0" width="240" height="675" fill="#1c1917" stroke="#292524" stroke-width="1" />
  <text x="32" y="50" class="text" font-size="18" font-weight="700">STUDIO MANAGER</text>
  <text x="32" y="72" class="mono">v2.4 · Redacted View</text>

  <rect x="20" y="110" width="200" height="40" rx="6" fill="#2d2925" />
  <text x="45" y="135" class="text" font-size="14" font-weight="600">Artwork Catalog</text>

  <text x="45" y="185" class="muted" font-size="14">Exhibitions &amp; Events</text>
  <text x="45" y="225" class="muted" font-size="14">Artist Biography</text>
  <text x="45" y="265" class="muted" font-size="14">Media Storage</text>
  <text x="45" y="305" class="muted" font-size="14">Site Settings</text>

  <!-- Top Bar -->
  <rect x="240" y="0" width="960" height="70" fill="#1c1917" stroke="#292524" stroke-width="1" />
  <text x="280" y="42" class="text" font-size="20" font-weight="600">Artwork Catalog</text>
  <rect x="1050" y="20" width="110" height="34" rx="6" class="accent" />
  <text x="1068" y="42" class="text" font-size="13" font-weight="600">+ Add Work</text>

  <!-- Main Content Grid -->
  <rect x="280" y="100" width="270" height="90" class="card" />
  <text x="305" y="132" class="muted" font-size="13">Total Cataloged Works</text>
  <text x="305" y="168" class="text" font-size="28" font-weight="700">42</text>

  <rect x="580" y="100" width="270" height="90" class="card" />
  <text x="605" y="132" class="muted" font-size="13">Published on Gallery</text>
  <text x="605" y="168" class="text" font-size="28" font-weight="700" fill="#34d399">38</text>

  <rect x="880" y="100" width="280" height="90" class="card" />
  <text x="905" y="132" class="muted" font-size="13">Active Exhibitions</text>
  <text x="905" y="168" class="text" font-size="28" font-weight="700" fill="#fbbf24">3</text>

  <!-- Table Header -->
  <rect x="280" y="220" width="880" height="40" rx="6" fill="#24211e" />
  <text x="305" y="245" class="mono">ARTWORK RECORD</text>
  <text x="600" y="245" class="mono">MEDIUM / YEAR</text>
  <text x="820" y="245" class="mono">STATUS</text>
  <text x="1020" y="245" class="mono">ACTIONS</text>

  <!-- Row 1 -->
  <rect x="280" y="270" width="880" height="70" class="card" />
  <rect x="300" y="282" width="46" height="46" rx="4" fill="#44403c" />
  <text x="360" y="304" class="text" font-size="15" font-weight="600">Serenity in Bloom No. 4</text>
  <text x="360" y="324" class="muted" font-size="12">ID: [Redacted] · Created Jan 2026</text>
  <text x="600" y="312" class="muted" font-size="14">Oil &amp; Linen / 2026</text>
  <rect x="820" y="293" width="80" height="24" rx="12" class="badge-pub" />
  <text x="836" y="309" class="badge-pub-text">PUBLISHED</text>
  <text x="1020" y="312" class="accent" font-size="13">Edit · Preview</text>

  <!-- Row 2 -->
  <rect x="280" y="350" width="880" height="70" class="card" />
  <rect x="300" y="362" width="46" height="46" rx="4" fill="#3f3a36" />
  <text x="360" y="384" class="text" font-size="15" font-weight="600">Memory Territory Study II</text>
  <text x="360" y="404" class="muted" font-size="12">ID: [Redacted] · Created Nov 2025</text>
  <text x="600" y="392" class="muted" font-size="14">Mixed Media / 2025</text>
  <rect x="820" y="373" width="80" height="24" rx="12" class="badge-pub" />
  <text x="836" y="389" class="badge-pub-text">PUBLISHED</text>
  <text x="1020" y="392" class="accent" font-size="13">Edit · Preview</text>

  <!-- Privacy Banner -->
  <rect x="280" y="530" width="880" height="110" rx="8" fill="#1f1c19" stroke="#36322d" stroke-width="1" />
  <text x="310" y="565" class="mono" fill="#d97706">CONFIDENTIALITY &amp; PRIVACY PROTECTION</text>
  <text x="310" y="590" class="text" font-size="13">All private studio client messages, internal draft prices, database UUIDs, and authentication routes are strictly redacted.</text>
  <text x="310" y="612" class="muted" font-size="12">Verified from local source and approved dashboard interfaces. No private login URL is published.</text>
</svg>`;


// =============================================================================
// MCP DOCTOR ASSETS
// =============================================================================

// 1. Hero Terminal Output SVG
const mcpHeroTerminalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="100%">
  <defs>
    <style>
      .bg { fill: #0d1117; }
      .term-header { fill: #161b22; stroke: #30363d; stroke-width: 1; }
      .term-title { font-family: -apple-system, sans-serif; fill: #8b949e; font-size: 13px; font-weight: 500; }
      .mono { font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace; }
      .prompt { fill: #58a6ff; font-weight: 600; }
      .cmd { fill: #f0f6fc; font-weight: 500; }
      .tag-err { fill: #f85149; font-weight: bold; }
      .tag-warn { fill: #d29922; font-weight: bold; }
      .tag-info { fill: #58a6ff; font-weight: bold; }
      .tag-ok { fill: #3fb950; font-weight: bold; }
      .text-white { fill: #c9d1d9; }
      .text-dim { fill: #8b949e; }
      .code-var { fill: #ffa657; }
    </style>
  </defs>

  <rect width="1200" height="700" class="bg" rx="12" />

  <!-- Terminal Header -->
  <rect width="1200" height="40" class="term-header" rx="12" />
  <circle cx="20" cy="20" r="6" fill="#ff5f56" />
  <circle cx="40" cy="20" r="6" fill="#ffbd2e" />
  <circle cx="60" cy="20" r="6" fill="#27c93f" />
  <text x="600" y="25" class="term-title" text-anchor="middle">bash — mcp-doctor v0.1.0 (local-first diagnostic CLI)</text>

  <!-- Terminal Content -->
  <g transform="translate(30, 70)" class="mono" font-size="14" xml:space="preserve">
    <!-- Command Execution -->
    <text x="0" y="0">
      <tspan class="prompt">$ </tspan>
      <tspan class="cmd">npx @westsideunion/mcp-doctor --find</tspan>
    </text>

    <!-- Scanner header -->
    <text x="0" y="30" class="text-dim">[mcp-doctor] Discovered MCP config at: ~/.config/Claude/claude_desktop_config.json</text>
    <text x="0" y="50" class="text-dim">[mcp-doctor] Running 7 diagnostic pipelines (Strict JSON, Runtime, Env, Protocol, Supply Chain, Metadata, Usability)...</text>
    <text x="0" y="70" class="text-dim">---------------------------------------------------------------------------------------------------</text>

    <!-- Finding 1: ERR -->
    <text x="0" y="105">
      <tspan class="tag-err">✖ [ERROR] </tspan>
      <tspan class="text-white" font-weight="bold">missing-env-var </tspan>
      <tspan class="text-dim">(Server: "postgres-mcp")</tspan>
    </text>
    <text x="20" y="128" class="text-white">Message: Referenced environment variable is not set in current shell context: <tspan class="code-var">DATABASE_URL</tspan></text>
    <text x="20" y="148" class="text-dim">Location: mcp.json#mcpServers.postgres-mcp.env.DATABASE_URL</text>
    <text x="20" y="168" class="prompt">Fix Suggestion: Export DATABASE_URL in your shell or specify it in the client environment launcher.</text>

    <!-- Finding 2: WARN -->
    <text x="0" y="210">
      <tspan class="tag-warn">⚠ [WARNING] </tspan>
      <tspan class="text-white" font-weight="bold">unpinned-npx-package </tspan>
      <tspan class="text-dim">(Server: "github-tools")</tspan>
    </text>
    <text x="20" y="233" class="text-white">Message: npx command uses unpinned package tag (@latest): <tspan class="code-var">npx -y @modelcontextprotocol/server-github@latest</tspan></text>
    <text x="20" y="253" class="text-dim">Location: mcp.json#mcpServers.github-tools.args[1]</text>
    <text x="20" y="273" class="prompt">Fix Suggestion: Pin package version explicitly (e.g. @0.6.2) to prevent unexpected breaking runtime updates.</text>

    <!-- Finding 3: SECURITY WARN -->
    <text x="0" y="315">
      <tspan class="tag-warn">⚠ [WARNING] </tspan>
      <tspan class="text-white" font-weight="bold">literal-secret-in-args </tspan>
      <tspan class="text-dim">(Server: "weather-service")</tspan>
    </text>
    <text x="20" y="338" class="text-white">Message: Command argument appears to contain a hardcoded API key prefix: <tspan class="code-var">--api-key=sk_live_99x...</tspan></text>
    <text x="20" y="358" class="text-dim">Location: mcp.json#mcpServers.weather-service.args[0]</text>
    <text x="20" y="378" class="prompt">Fix Suggestion: Store secrets in environment variables instead of hardcoding raw strings in args.</text>

    <!-- Summary Box -->
    <text x="0" y="485" class="text-dim">---------------------------------------------------------------------------------------------------</text>
    <text x="0" y="515">
      <tspan class="tag-err">NEEDS FIX </tspan>
      <tspan class="text-white">Diagnostic Summary: </tspan>
      <tspan class="tag-err">1 Error</tspan><tspan class="text-white">, </tspan>
      <tspan class="tag-warn">2 Warnings</tspan><tspan class="text-white">, </tspan>
      <tspan class="tag-info">1 Info</tspan><tspan class="text-white"> (Inspected 4 servers in 12ms)</tspan>
    </text>

    <text x="0" y="560">
      <tspan class="prompt">$ </tspan>
      <tspan class="cmd">echo $?</tspan>
    </text>
    <text x="0" y="585" class="tag-err">1</text>
  </g>
</svg>`;

// 2. Diagnostic Pipeline SVG
const mcpPipelineSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="100%">
  <defs>
    <style>
      .box { fill: #161b22; stroke: #30363d; stroke-width: 2; rx: 8; }
      .accent-box { fill: #1f293d; stroke: #388bfd; stroke-width: 2; rx: 8; }
      .text-title { font-family: -apple-system, sans-serif; font-size: 14px; font-weight: 600; fill: #f0f6fc; text-anchor: middle; }
      .text-desc { font-family: -apple-system, sans-serif; font-size: 12px; fill: #8b949e; text-anchor: middle; }
      .arrow { stroke: #388bfd; stroke-width: 2; fill: none; }
      .arrow-head { fill: #388bfd; }
      .mono { font-family: 'SF Mono', monospace; font-size: 11px; fill: #7ee787; }
    </style>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
    </marker>
  </defs>

  <rect width="1000" height="360" fill="#0d1117" rx="8" />

  <!-- Stage 1 -->
  <rect x="40" y="50" width="180" height="80" class="box" />
  <text x="130" y="85" class="text-title">Config Discovery</text>
  <text x="130" y="105" class="text-desc">Path or --find</text>

  <line x1="220" y1="90" x2="270" y2="90" class="arrow" marker-end="url(#arrow)" />

  <!-- Stage 2 -->
  <rect x="270" y="50" width="180" height="80" class="box" />
  <text x="360" y="85" class="text-title">Strict JSON Parser</text>
  <text x="360" y="105" class="text-desc">Trailing commas &amp; syntax</text>

  <line x1="450" y1="90" x2="500" y2="90" class="arrow" marker-end="url(#arrow)" />

  <!-- Stage 3 -->
  <rect x="500" y="50" width="200" height="80" class="box" />
  <text x="600" y="85" class="text-title">Shape Normalization</text>
  <text x="600" y="105" class="text-desc">Supports 3 client formats</text>

  <line x1="700" y1="90" x2="750" y2="90" class="arrow" marker-end="url(#arrow)" />

  <!-- Stage 4 -->
  <rect x="750" y="50" width="210" height="80" class="accent-box" />
  <text x="855" y="85" class="text-title">Diagnostic Engine</text>
  <text x="855" y="105" class="text-desc">7 Scanned Territories</text>

  <!-- Downward arrow to Rules -->
  <line x1="855" y1="130" x2="855" y2="180" class="arrow" marker-end="url(#arrow)" />

  <!-- Rule Pipeline Group -->
  <rect x="40" y="190" width="920" height="120" fill="#161b22" stroke="#30363d" stroke-width="1" rx="8" />
  <text x="60" y="218" class="mono" font-size="12">DIAGNOSTIC PIPELINE RULES (LOCAL-FIRST execution)</text>

  <!-- Rules boxes -->
  <rect x="60" y="235" width="130" height="55" rx="6" fill="#21262d" />
  <text x="125" y="258" class="text-title" font-size="12">1. Config Syntax</text>
  <text x="125" y="275" class="text-desc" font-size="10">Readability &amp; JSON</text>

  <rect x="205" y="235" width="130" height="55" rx="6" fill="#21262d" />
  <text x="270" y="258" class="text-title" font-size="12">2. Runtime &amp; Path</text>
  <text x="270" y="275" class="text-desc" font-size="10">Executables &amp; PATH</text>

  <rect x="350" y="235" width="130" height="55" rx="6" fill="#21262d" />
  <text x="415" y="258" class="text-title" font-size="12">3. Env &amp; Secrets</text>
  <text x="415" y="275" class="text-desc" font-size="10">Missing VARs &amp; Tokens</text>

  <rect x="495" y="235" width="130" height="55" rx="6" fill="#21262d" />
  <text x="560" y="258" class="text-title" font-size="12">4. Startup &amp; stdio</text>
  <text x="560" y="275" class="text-desc" font-size="10">npx prompts &amp; stdout</text>

  <rect x="640" y="235" width="130" height="55" rx="6" fill="#21262d" />
  <text x="705" y="258" class="text-title" font-size="12">5. Supply Chain</text>
  <text x="705" y="275" class="text-desc" font-size="10">Unpinned npx / uvx</text>

  <rect x="785" y="235" width="160" height="55" rx="6" fill="#21262d" />
  <text x="865" y="258" class="text-title" font-size="12">6 &amp; 7. Metadata / Usability</text>
  <text x="865" y="275" class="text-desc" font-size="10">Zero-width &amp; tool budget</text>
</svg>`;

// Write all files
fs.writeFileSync(path.join(natalieDir, 'natalie-me-hero-desktop.svg'), natalieHeroSvg);
fs.writeFileSync(path.join(natalieDir, 'natalie-me-system-architecture.svg'), natalieArchSvg);
fs.writeFileSync(path.join(natalieDir, 'natalie-me-dashboard-overview.svg'), natalieDashOverviewSvg);

fs.writeFileSync(path.join(mcpDir, 'mcp-doctor-hero-terminal.svg'), mcpHeroTerminalSvg);
fs.writeFileSync(path.join(mcpDir, 'mcp-doctor-pipeline.svg'), mcpPipelineSvg);

console.log("Assets generated successfully.");
