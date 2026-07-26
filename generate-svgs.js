const fs = require('fs');

const outDir = 'public/images/projects/bio-union/';
if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, { recursive: true }); }

// 1. Architecture SVG
const architectureSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" width="100%" height="100%">
  <defs>
    <style>
      .box { fill: #f3f4f6; stroke: #d1d5db; stroke-width: 2; rx: 8; }
      .text { font-family: -apple-system, system-ui, sans-serif; font-size: 14px; fill: #1f2937; text-anchor: middle; font-weight: 500; }
      .desc { font-family: -apple-system, system-ui, sans-serif; font-size: 12px; fill: #4b5563; text-anchor: middle; }
      .arrow { stroke: #9ca3af; stroke-width: 2; fill: none; }
      .arrow-head { fill: #9ca3af; }
      .group-bg { fill: #f8fafc; stroke: #e2e8f0; stroke-width: 1; rx: 12; stroke-dasharray: 4; }
      .group-label { font-family: -apple-system, system-ui, sans-serif; font-size: 12px; fill: #64748b; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
    </style>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
    </marker>
  </defs>

  <!-- Groups -->
  <rect x="190" y="20" width="340" height="200" class="group-bg" />
  <text x="360" y="45" class="group-label">Physical Interface</text>

  <rect x="560" y="20" width="390" height="200" class="group-bg" />
  <text x="755" y="45" class="group-label">Digital Platform</text>

  <!-- Nodes -->
  <rect x="40" y="90" width="120" height="60" class="box" />
  <text x="100" y="118" class="text">Human Body</text>
  <text x="100" y="136" class="desc">Cardiac source</text>

  <rect x="210" y="90" width="140" height="60" class="box" />
  <text x="280" y="118" class="text">Garment &amp; Electrodes</text>
  <text x="280" y="136" class="desc">Signal acquisition</text>

  <rect x="380" y="90" width="130" height="60" class="box" />
  <text x="445" y="118" class="text">Leap M Hardware</text>
  <text x="445" y="136" class="desc">Processing &amp; TX</text>

  <rect x="580" y="90" width="150" height="60" class="box" />
  <text x="655" y="118" class="text">Signal Processing API</text>
  <text x="655" y="136" class="desc">Noise filter &amp; AI</text>

  <rect x="760" y="90" width="170" height="60" class="box" />
  <text x="845" y="118" class="text">Application / Report</text>
  <text x="845" y="136" class="desc">Clinical or personal view</text>

  <!-- Arrows -->
  <line x1="160" y1="120" x2="200" y2="120" class="arrow" marker-end="url(#arrow)" />
  <line x1="350" y1="120" x2="370" y2="120" class="arrow" marker-end="url(#arrow)" />
  <line x1="510" y1="120" x2="570" y2="120" class="arrow" marker-end="url(#arrow)" />
  <line x1="730" y1="120" x2="750" y2="120" class="arrow" marker-end="url(#arrow)" />
</svg>`;

// 2. Principles SVG
const principlesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400" width="100%" height="100%">
  <defs>
    <style>
      .box { fill: #ffffff; stroke: #e5e7eb; stroke-width: 2; rx: 8; }
      .title { font-family: -apple-system, system-ui, sans-serif; font-size: 16px; fill: #111827; font-weight: 600; }
      .desc { font-family: -apple-system, system-ui, sans-serif; font-size: 13px; fill: #4b5563; line-height: 1.4; }
      .icon-bg { fill: #f3f4f6; rx: 6; }
    </style>
  </defs>

  <g transform="translate(50, 50)">
    <!-- Row 1 -->
    <g transform="translate(0, 0)">
      <rect width="280" height="120" class="box" />
      <rect x="20" y="20" width="32" height="32" class="icon-bg" />
      <text x="65" y="42" class="title">Independent Operation</text>
      <text x="20" y="75" class="desc">Enable independent use without</text>
      <text x="20" y="95" class="desc">a clinician present.</text>
    </g>

    <g transform="translate(310, 0)">
      <rect width="280" height="120" class="box" />
      <rect x="20" y="20" width="32" height="32" class="icon-bg" />
      <text x="65" y="42" class="title">Non-Adhesive Comfort</text>
      <text x="20" y="75" class="desc">Prevent skin irritation by eliminating</text>
      <text x="20" y="95" class="desc">disposable medical patches.</text>
    </g>

    <g transform="translate(620, 0)">
      <rect width="280" height="120" class="box" />
      <rect x="20" y="20" width="32" height="32" class="icon-bg" />
      <text x="65" y="42" class="title">Invisible Integration</text>
      <text x="20" y="75" class="desc">Embed conductive pathways directly</text>
      <text x="20" y="95" class="desc">into the textile to hide wires.</text>
    </g>

    <!-- Row 2 -->
    <g transform="translate(0, 150)">
      <rect width="280" height="120" class="box" />
      <rect x="20" y="20" width="32" height="32" class="icon-bg" />
      <text x="65" y="42" class="title">Time &amp; Cost Efficiency</text>
      <text x="20" y="75" class="desc">Reduce clinical visit time to allow</text>
      <text x="20" y="95" class="desc">users more personal flexibility.</text>
    </g>

    <g transform="translate(310, 150)">
      <rect width="280" height="120" class="box" />
      <rect x="20" y="20" width="32" height="32" class="icon-bg" />
      <text x="65" y="42" class="title">Versatile Architecture</text>
      <text x="20" y="75" class="desc">Adapt the core sensing technology</text>
      <text x="20" y="95" class="desc">across various garment styles.</text>
    </g>

    <g transform="translate(620, 150)">
      <rect width="280" height="120" class="box" />
      <rect x="20" y="20" width="32" height="32" class="icon-bg" />
      <text x="65" y="42" class="title">Reduced Medical Waste</text>
      <text x="20" y="75" class="desc">Eliminate single-use electrodes to</text>
      <text x="20" y="95" class="desc">create a more sustainable model.</text>
    </g>
  </g>
</svg>`;

// 3. Ecosystem SVG
const ecosystemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 450" width="100%" height="100%">
  <defs>
    <style>
      .platform-bg { fill: #f8fafc; stroke: #e2e8f0; stroke-width: 2; rx: 12; }
      .box { fill: #ffffff; stroke: #d1d5db; stroke-width: 2; rx: 8; }
      .accent-box { fill: #eff6ff; stroke: #3b82f6; stroke-width: 2; rx: 8; }
      .text-title { font-family: -apple-system, system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #1f2937; text-anchor: middle; }
      .text-desc { font-family: -apple-system, system-ui, sans-serif; font-size: 12px; fill: #4b5563; text-anchor: middle; }
      .line { stroke: #9ca3af; stroke-width: 2; stroke-dasharray: 4; fill: none; }
      .section-title { font-family: -apple-system, system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #64748b; letter-spacing: 1px; text-transform: uppercase; }
    </style>
  </defs>

  <rect x="50" y="50" width="200" height="200" class="accent-box" />
  <text x="150" y="150" class="text-title">Bio Union</text>
  <text x="150" y="170" class="text-desc">Core Tech Platform</text>

  <!-- ODM -->
  <line x1="250" y1="100" x2="350" y2="100" class="line" />
  <rect x="350" y="70" width="180" height="60" class="box" />
  <text x="440" y="98" class="text-title">ODM Business</text>
  <text x="440" y="116" class="text-desc">Powered by Bio Union</text>

  <!-- B2B2C / Own Brand -->
  <line x1="250" y1="180" x2="350" y2="180" class="line" />
  <rect x="350" y="150" width="180" height="60" class="box" />
  <text x="440" y="178" class="text-title">Own Brand</text>
  <text x="440" y="196" class="text-desc">System Subscriptions</text>

  <!-- Providers -->
  <text x="710" y="60" class="section-title">End Markets &amp; Partners</text>
  <rect x="620" y="70" width="180" height="40" class="box" />
  <text x="710" y="94" class="text-title" font-size="14">Clothing Brands</text>

  <rect x="620" y="120" width="180" height="40" class="box" />
  <text x="710" y="144" class="text-title" font-size="14">Sports &amp; Athletics</text>

  <rect x="620" y="170" width="180" height="40" class="box" />
  <text x="710" y="194" class="text-title" font-size="14">Clinics &amp; Rehab</text>

  <rect x="620" y="220" width="180" height="40" class="box" />
  <text x="710" y="244" class="text-title" font-size="14">Enterprise (ESG)</text>

  <!-- Connectors from Business lines to Markets -->
  <line x1="530" y1="100" x2="620" y2="90" class="line" />
  <line x1="530" y1="180" x2="580" y2="180" class="line" />
  <line x1="580" y1="180" x2="580" y2="140" class="line" />
  <line x1="580" y1="140" x2="620" y2="140" class="line" />
  <line x1="580" y1="180" x2="580" y2="190" class="line" />
  <line x1="580" y1="190" x2="620" y2="190" class="line" />
  <line x1="580" y1="180" x2="580" y2="240" class="line" />
  <line x1="580" y1="240" x2="620" y2="240" class="line" />

  <!-- Lower sections for Users vs Providers -->
  <rect x="50" y="320" width="400" height="80" class="platform-bg" />
  <text x="250" y="345" class="text-title">Private Users (B2C)</text>
  <text x="250" y="365" class="text-desc">High-risk patients, elderly, aging at home,</text>
  <text x="250" y="380" class="text-desc">sport enthusiasts &amp; self-medication</text>

  <rect x="470" y="320" width="480" height="80" class="platform-bg" />
  <text x="710" y="345" class="text-title">Service Providers (B2B)</text>
  <text x="710" y="365" class="text-desc">Cardiologists, remote monitoring centers, pharmacies,</text>
  <text x="710" y="380" class="text-desc">virtual visit providers &amp; home-care</text>

</svg>`;

fs.writeFileSync(outDir + 'bio-union-system-architecture.svg', architectureSvg);
fs.writeFileSync(outDir + 'bio-union-product-principles.svg', principlesSvg);
fs.writeFileSync(outDir + 'bio-union-service-ecosystem.svg', ecosystemSvg);

console.log("SVGs generated.");
