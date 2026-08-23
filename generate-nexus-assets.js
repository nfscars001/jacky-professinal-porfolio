const fs = require('fs');
const path = require('path');

const nexusDir = path.join(process.cwd(), 'public/images/projects/nexus_ai');
if (!fs.existsSync(nexusDir)) {
  fs.mkdirSync(nexusDir, { recursive: true });
}

// Common styles matching portfolio design system tokens
const styleHeader = `
  <defs>
    <style>
      .bg { fill: #F5F4F0; }
      .surface { fill: #FFFFFF; stroke: rgba(23, 20, 23, 0.08); stroke-width: 1; rx: 12; }
      .surface-dark { fill: #171417; rx: 12; }
      .syne { font-family: 'Syne', sans-serif, system-ui; fill: #171417; font-weight: 700; }
      .syne-light { font-family: 'Syne', sans-serif, system-ui; fill: #FFFFFF; font-weight: 700; }
      .sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; fill: #4a454e; }
      .sans-light { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; fill: rgba(255,255,255,0.75); }
      .mono { font-family: 'Space Mono', SFMono-Regular, Menlo, monospace; fill: #76707a; font-size: 10.5px; letter-spacing: 0.02em; }
      .mono-light { font-family: 'Space Mono', SFMono-Regular, Menlo, monospace; fill: #a39ea8; font-size: 10.5px; letter-spacing: 0.02em; }
      .accent-pill { fill: #EBE8E1; rx: 16; }
      .badge-preview { fill: #FEF3C7; stroke: #F59E0B; stroke-width: 1; rx: 6; }
      .badge-available { fill: #D1FAE5; stroke: #10B981; stroke-width: 1; rx: 6; }
      .badge-pilot { fill: #E0E7FF; stroke: #6366F1; stroke-width: 1; rx: 6; }
      .badge-edge { fill: #EDE9FE; stroke: #8B5CF6; stroke-width: 1; rx: 6; }
      .connector-line { stroke: rgba(23, 20, 23, 0.15); stroke-width: 1.5; stroke-dasharray: 4 4; fill: none; }
      .solid-line { stroke: rgba(23, 20, 23, 0.12); stroke-width: 1; }
    </style>
  </defs>
`;

// 1. PRODUCT EVOLUTION DIAGRAM
const evolutionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 620" width="100%" height="100%">
  ${styleHeader}
  <rect width="1200" height="620" class="bg" />
  
  <!-- Diagram Header -->
  <text x="60" y="50" class="mono" font-size="12" fill="#76707a">SYSTEMS ARCHITECTURE · PRODUCT EVOLUTION</text>
  <text x="60" y="84" class="syne" font-size="24">From Modular AI Framework to Messaging-First Managed Assistant</text>
  
  <!-- Phase 1: Modular Framework Foundation (Left) -->
  <g transform="translate(60, 120)">
    <rect width="480" height="450" class="surface" />
    <rect x="24" y="20" width="160" height="26" class="accent-pill" />
    <text x="36" y="37" class="mono" font-size="10" fill="#171417" font-weight="bold">PHASE 1: FOUNDATION</text>
    
    <text x="24" y="78" class="syne" font-size="18">Modular Framework Core</text>
    <text x="24" y="100" class="sans" font-size="12.5" fill="#666">Infrastructure-centric architecture treating AI capabilities</text>
    <text x="24" y="118" class="sans" font-size="12.5" fill="#666">as interchangeable, swappable backend services.</text>
    
    <!-- Stack boxes -->
    <rect x="24" y="145" width="432" height="72" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="40" y="170" class="mono" font-size="10">EXPERIENCE LAYER</text>
    <text x="40" y="192" class="sans" font-size="13" font-weight="600">Unified Business Identity &amp; Portal</text>
    
    <rect x="24" y="230" width="432" height="92" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="40" y="254" class="mono" font-size="10">GOVERNANCE &amp; CONTEXT CORE</text>
    <text x="40" y="274" class="sans" font-size="13" font-weight="600">Shared Context Engine · Policy Boundaries · Fallback</text>
    <text x="40" y="296" class="mono" font-size="9.5" fill="#888">Permissions travel with tasks · Failures caught safely</text>
    
    <rect x="24" y="334" width="432" height="92" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="40" y="358" class="mono" font-size="10">PLUGGABLE CAPABILITIES</text>
    <text x="40" y="378" class="sans" font-size="13" font-weight="600">Messaging · Booking · Reviews · Reporting Modules</text>
    <text x="40" y="400" class="mono" font-size="9.5" fill="#888">Swappable model engines &amp; tool integrations</text>
  </g>
  
  <!-- Evolution Arrow (Middle) -->
  <g transform="translate(560, 315)">
    <circle cx="40" cy="25" r="26" fill="#171417" />
    <path d="M 33 25 L 47 25 M 41 19 L 47 25 L 41 31" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <text x="40" y="70" class="mono" font-size="10" text-anchor="middle" fill="#171417" font-weight="bold">EVOLVED TO</text>
    <text x="40" y="85" class="mono" font-size="9" text-anchor="middle" fill="#777">Customer-First</text>
  </g>
  
  <!-- Phase 2: Messaging-First Managed Assistant (Right) -->
  <g transform="translate(660, 120)">
    <rect width="480" height="450" class="surface" stroke="rgba(23,20,23,0.18)" stroke-width="1.5" />
    <rect x="24" y="20" width="220" height="26" class="badge-available" />
    <text x="36" y="37" class="mono" font-size="10" fill="#065F46" font-weight="bold">PHASE 2: MANAGED SERVICE</text>
    
    <text x="24" y="78" class="syne" font-size="18">Messaging-First Assistant</text>
    <text x="24" y="100" class="sans" font-size="12.5" fill="#666">Zero software training. Operates directly in WhatsApp, SMS,</text>
    <text x="24" y="118" class="sans" font-size="12.5" fill="#666">and Email with explicit human approval on sensitive actions.</text>
    
    <!-- Stack boxes -->
    <rect x="24" y="145" width="432" height="72" rx="8" fill="#F0FDF4" stroke="#BBF7D0" />
    <text x="40" y="168" class="mono" font-size="10" fill="#047857">NATIVE CHANNELS (WHERE OWNERS WORK)</text>
    <text x="40" y="188" class="sans" font-size="13" font-weight="600" fill="#064E3B">WhatsApp · SMS / Text · Business Email</text>
    <text x="40" y="205" class="mono" font-size="9.5" fill="#047857">Owner reviews drafts &amp; approves actions via reply</text>
    
    <rect x="24" y="230" width="432" height="92" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="40" y="254" class="mono" font-size="10">WESTSIDE UNION MANAGED SETUP</text>
    <text x="40" y="274" class="sans" font-size="13" font-weight="600">Discovery · Knowledge Ingestion · Safe Rules</text>
    <text x="40" y="294" class="mono" font-size="9.5" fill="#888">We configure rules &amp; monitor the system</text>
    <text x="40" y="308" class="mono" font-size="9.5" fill="#888">Zero software management required by owner</text>
    
    <rect x="24" y="334" width="432" height="92" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="40" y="358" class="mono" font-size="10">DELIVERY TIERS</text>
    <text x="40" y="378" class="sans" font-size="13" font-weight="600">Cloud Managed · Edge Hardware · Enterprise</text>
    <text x="40" y="400" class="mono" font-size="9.5" fill="#888">Flexible hosting tailored to privacy &amp; scale needs</text>
  </g>
</svg>`;

// 2. TASK STATES & APPROVAL MODEL DIAGRAM
const taskLifecycleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 540" width="100%" height="100%">
  ${styleHeader}
  <rect width="1200" height="540" class="bg" />
  
  <text x="60" y="50" class="mono" font-size="12" fill="#76707a">GOVERNANCE &amp; HUMAN-IN-THE-LOOP</text>
  <text x="60" y="84" class="syne" font-size="24">The 5-Stage Task Lifecycle &amp; Approval Gate</text>
  
  <!-- 1. RECEIVED -->
  <g transform="translate(60, 130)">
    <rect width="200" height="270" class="surface" />
    <circle cx="36" cy="36" r="14" fill="#E5E7EB" />
    <text x="36" y="41" class="mono" font-size="12" text-anchor="middle" font-weight="bold" fill="#374151">1</text>
    <text x="62" y="41" class="syne" font-size="16">Received</text>
    
    <line x1="20" y1="65" x2="180" y2="65" class="solid-line" />
    
    <text x="20" y="90" class="mono" font-size="10" fill="#76707a">INGRESS SOURCES</text>
    <text x="20" y="112" class="sans" font-size="12" font-weight="600">Inbound Message</text>
    <text x="20" y="130" class="sans" font-size="12" font-weight="600">New Review / Post</text>
    <text x="20" y="148" class="sans" font-size="12" font-weight="600">Booking / Inquiry</text>
    <text x="20" y="166" class="sans" font-size="12" font-weight="600">Scheduled Trigger</text>
    
    <rect x="16" y="196" width="168" height="52" rx="6" fill="#F3F4F6" />
    <text x="24" y="216" class="mono" font-size="9" fill="#4B5563">Captures context &amp;</text>
    <text x="24" y="232" class="mono" font-size="9" fill="#4B5563">checks policy scope</text>
  </g>
  
  <path d="M 270 265 L 290 265" stroke="#171417" stroke-width="2" stroke-dasharray="3 3" />
  
  <!-- 2. IN PROGRESS -->
  <g transform="translate(300, 130)">
    <rect width="200" height="270" class="surface" />
    <circle cx="36" cy="36" r="14" fill="#DBEAFE" />
    <text x="36" y="41" class="mono" font-size="12" text-anchor="middle" font-weight="bold" fill="#1E40AF">2</text>
    <text x="62" y="41" class="syne" font-size="16">Processing</text>
    
    <line x1="20" y1="65" x2="180" y2="65" class="solid-line" />
    
    <text x="20" y="90" class="mono" font-size="10" fill="#76707a">INTERNAL WORK</text>
    <text x="20" y="112" class="sans" font-size="12" font-weight="600">Context Retrieval</text>
    <text x="20" y="130" class="sans" font-size="12" font-weight="600">Draft Preparation</text>
    <text x="20" y="148" class="sans" font-size="12" font-weight="600">Tool Lookup (Cal/POS)</text>
    <text x="20" y="166" class="sans" font-size="12" font-weight="600">Safety Verification</text>
    
    <rect x="16" y="196" width="168" height="52" rx="6" fill="#EFF6FF" />
    <text x="24" y="216" class="mono" font-size="9" fill="#1D4ED8">Zero hallucinations:</text>
    <text x="24" y="232" class="mono" font-size="9" fill="#1D4ED8">checks business facts</text>
  </g>
  
  <path d="M 510 265 L 530 265" stroke="#171417" stroke-width="2" stroke-dasharray="3 3" />
  
  <!-- 3. APPROVAL GATE (CRITICAL) -->
  <g transform="translate(540, 110)">
    <rect width="230" height="310" class="surface" stroke="#F59E0B" stroke-width="2" fill="#FFFDF8" />
    <rect x="20" y="16" width="190" height="24" class="badge-preview" />
    <text x="28" y="32" class="mono" font-size="10" fill="#B45309" font-weight="bold">HUMAN-IN-THE-LOOP</text>
    
    <text x="20" y="68" class="syne" font-size="18" fill="#B45309">3. Needs Approval</text>
    
    <line x1="20" y1="85" x2="210" y2="85" stroke="#FDE68A" stroke-width="1" />
    
    <text x="20" y="108" class="mono" font-size="10" fill="#78350F">SENSITIVE ACTIONS PAUSE</text>
    <text x="20" y="128" class="sans" font-size="12" font-weight="600">Public Review Replies</text>
    <text x="20" y="146" class="sans" font-size="12" font-weight="600">Custom Quote Sends</text>
    <text x="20" y="164" class="sans" font-size="12" font-weight="600">Schedule Changes</text>
    <text x="20" y="182" class="sans" font-size="12" font-weight="600">Out-of-Policy Inquiries</text>
    
    <rect x="18" y="206" width="194" height="80" rx="6" fill="#FEF3C7" stroke="#FDE68A" />
    <text x="28" y="226" class="mono" font-size="10" fill="#92400E" font-weight="bold">OWNER NOTIFIED VIA</text>
    <text x="28" y="246" class="sans" font-size="12" font-weight="600" fill="#78350F">WhatsApp / SMS Prompt</text>
    <text x="28" y="264" class="mono" font-size="9" fill="#92400E">Reply "APPROVE" or edit draft</text>
  </g>
  
  <path d="M 780 265 L 800 265" stroke="#171417" stroke-width="2" stroke-dasharray="3 3" />
  
  <!-- 4. COMPLETED -->
  <g transform="translate(810, 130)">
    <rect width="210" height="125" class="surface" stroke="#10B981" />
    <circle cx="28" cy="28" r="12" fill="#D1FAE5" />
    <text x="28" y="32" class="mono" font-size="10" text-anchor="middle" font-weight="bold" fill="#065F46">4A</text>
    <text x="48" y="32" class="syne" font-size="15" fill="#047857">Completed</text>
    
    <text x="20" y="62" class="sans" font-size="11.5" fill="#4B5563">Action dispatched to channel</text>
    <text x="20" y="80" class="sans" font-size="11.5" fill="#4B5563">Audit trail logged to ledger</text>
    <text x="20" y="100" class="mono" font-size="9.5" fill="#059669">Daily summary queued</text>
  </g>
  
  <!-- 5. SAFE FALLBACK / PAUSED -->
  <g transform="translate(810, 275)">
    <rect width="210" height="125" class="surface" stroke="#6B7280" />
    <circle cx="28" cy="28" r="12" fill="#F3F4F6" />
    <text x="28" y="32" class="mono" font-size="10" text-anchor="middle" font-weight="bold" fill="#374151">4B</text>
    <text x="48" y="32" class="syne" font-size="15" fill="#374151">Safe Fallback</text>
    
    <text x="20" y="62" class="sans" font-size="11.5" fill="#4B5563">Service/Rate limit paused</text>
    <text x="20" y="80" class="sans" font-size="11.5" fill="#4B5563">No silent drops or errors</text>
    <text x="20" y="100" class="mono" font-size="9.5" fill="#4B5563">Held safely for review</text>
  </g>
  
  <!-- Branch lines for 4A and 4B -->
  <path d="M 770 240 L 790 192 L 810 192" stroke="#10B981" stroke-width="1.5" fill="none" />
  <path d="M 770 290 L 790 338 L 810 338" stroke="#6B7280" stroke-width="1.5" fill="none" />
  
  <!-- Bottom summary annotation -->
  <rect x="60" y="445" width="1080" height="52" rx="8" fill="#FFFFFF" stroke="rgba(23,20,23,0.06)" />
  <text x="80" y="475" class="mono" font-size="11" fill="#171417" font-weight="bold">DESIGN PRINCIPLE:</text>
  <text x="220" y="475" class="sans" font-size="12.5" fill="#4a454e">Autonomy without anxiety. Routine answers execute instantly within bounds; sensitive actions always wait for owner confirmation.</text>
</svg>`;

// 3. CONNECTIONS & INTEGRATION ARCHITECTURE (Generous margins, inside boxes)
const connectionsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 620" width="100%" height="100%">
  ${styleHeader}
  <rect width="1200" height="620" class="bg" />
  
  <text x="60" y="50" class="mono" font-size="12" fill="#76707a">INTEGRATIONS &amp; MULTI-CHANNEL SURFACE</text>
  <text x="60" y="84" class="syne" font-size="24">Multi-Channel Ingress &amp; Business Software Connectivity</text>
  
  <!-- Left Box: Communication Ingress (w=340) -->
  <g transform="translate(50, 120)">
    <rect width="345" height="450" class="surface" />
    <rect x="20" y="20" width="180" height="24" class="accent-pill" />
    <text x="28" y="36" class="mono" font-size="10" fill="#171417" font-weight="bold">COMMUNICATION CHANNELS</text>
    <text x="20" y="75" class="syne" font-size="16">Where Customers Reach Out</text>
    <text x="20" y="95" class="sans" font-size="12" fill="#666">Connected to business owner's day</text>
    
    <!-- Channel 1 -->
    <rect x="20" y="118" width="305" height="64" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="36" y="142" class="sans" font-size="13" font-weight="600">WhatsApp Business</text>
    <text x="36" y="162" class="mono" font-size="9" fill="#047857">Owner review &amp; customer chat</text>
    <rect x="235" y="128" width="75" height="22" class="badge-available" />
    <text x="246" y="143" class="mono" font-size="9" fill="#065F46" font-weight="bold">Available</text>
    
    <!-- Channel 2 -->
    <rect x="20" y="194" width="305" height="64" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="36" y="218" class="sans" font-size="13" font-weight="600">SMS / Text Messaging</text>
    <text x="36" y="238" class="mono" font-size="9" fill="#047857">Inbound leads &amp; rapid alerts</text>
    <rect x="235" y="204" width="75" height="22" class="badge-available" />
    <text x="246" y="219" class="mono" font-size="9" fill="#065F46" font-weight="bold">Available</text>
    
    <!-- Channel 3 -->
    <rect x="20" y="270" width="305" height="64" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="36" y="294" class="sans" font-size="13" font-weight="600">Business Email</text>
    <text x="36" y="314" class="mono" font-size="9" fill="#047857">Inquiry parsing &amp; summaries</text>
    <rect x="235" y="280" width="75" height="22" class="badge-available" />
    <text x="246" y="295" class="mono" font-size="9" fill="#065F46" font-weight="bold">Available</text>
    
    <!-- Channel 4 -->
    <rect x="20" y="346" width="305" height="64" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="36" y="370" class="sans" font-size="13" font-weight="600">Telegram / Web Chat</text>
    <text x="36" y="390" class="mono" font-size="9" fill="#4B5563">Internal staff &amp; web dispatch</text>
    <rect x="245" y="356" width="65" height="22" class="badge-pilot" />
    <text x="260" y="371" class="mono" font-size="9" fill="#4338CA" font-weight="bold">Pilot</text>
  </g>
  
  <!-- Middle Box: Nexus Coordination Core (w=370) -->
  <g transform="translate(415, 120)">
    <rect width="370" height="450" class="surface-dark" />
    <rect x="24" y="20" width="160" height="24" rx="12" fill="#2A262A" />
    <text x="36" y="36" class="mono-light" font-size="10" fill="#D1D5DB" font-weight="bold">PROJECT NEXUS CORE</text>
    
    <text x="24" y="75" class="syne-light" font-size="19">Managed Coordination</text>
    <text x="24" y="95" class="sans-light" font-size="12">Translates messages into governed actions.</text>
    
    <!-- Inner Layers -->
    <rect x="24" y="118" width="322" height="88" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.08)" />
    <text x="38" y="142" class="mono-light" font-size="10" fill="#A7F3D0">1. SHARED BUSINESS CONTEXT</text>
    <text x="38" y="162" class="sans-light" font-size="12" font-weight="600">Operating hours, menus, tone, pricing</text>
    <text x="38" y="180" class="mono-light" font-size="9">Single truth layer across all workflows</text>
    
    <rect x="24" y="218" width="322" height="88" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.08)" />
    <text x="38" y="242" class="mono-light" font-size="10" fill="#FDE68A">2. POLICY &amp; APPROVAL ENGINE</text>
    <text x="38" y="262" class="sans-light" font-size="12" font-weight="600">Human-in-the-loop triggers for high stakes</text>
    <text x="38" y="280" class="mono-light" font-size="9">Explicit scopes prevent runaway actions</text>
    
    <rect x="24" y="318" width="322" height="88" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.08)" />
    <text x="38" y="342" class="mono-light" font-size="10" fill="#DDD6FE">3. ACTIVITY AUDIT &amp; TELEMETRY</text>
    <text x="38" y="362" class="sans-light" font-size="12" font-weight="600">Reviewable logs, cost limits, safe fallback</text>
    <text x="38" y="380" class="mono-light" font-size="9">Complete history visible to owner</text>
  </g>
  
  <!-- Right Box: Business Software Tools (w=340) -->
  <g transform="translate(805, 120)">
    <rect width="345" height="450" class="surface" />
    <rect x="20" y="20" width="180" height="24" class="accent-pill" />
    <text x="28" y="36" class="mono" font-size="10" fill="#171417" font-weight="bold">BUSINESS INTEGRATIONS</text>
    <text x="20" y="75" class="syne" font-size="16">Tools &amp; Records</text>
    <text x="20" y="95" class="sans" font-size="12" fill="#666">Verified &amp; connected during setup</text>
    
    <!-- Tool 1 -->
    <rect x="20" y="118" width="305" height="64" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="36" y="142" class="sans" font-size="13" font-weight="600">Google Business Profile</text>
    <text x="36" y="162" class="mono" font-size="9" fill="#047857">Review monitoring &amp; draft replies</text>
    <rect x="235" y="128" width="75" height="22" class="badge-available" />
    <text x="246" y="143" class="mono" font-size="9" fill="#065F46" font-weight="bold">Available</text>
    
    <!-- Tool 2 -->
    <rect x="20" y="194" width="305" height="64" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="36" y="218" class="sans" font-size="13" font-weight="600">Calendar &amp; Booking</text>
    <text x="36" y="238" class="mono" font-size="9" fill="#047857">Availability &amp; hold coordination</text>
    <rect x="235" y="204" width="75" height="22" class="badge-available" />
    <text x="246" y="219" class="mono" font-size="9" fill="#065F46" font-weight="bold">Available</text>
    
    <!-- Tool 3 -->
    <rect x="20" y="270" width="305" height="64" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="36" y="294" class="sans" font-size="13" font-weight="600">Square / Clover POS</text>
    <text x="36" y="314" class="mono" font-size="9" fill="#4B5563">Menu item status &amp; hours sync</text>
    <rect x="245" y="280" width="65" height="22" class="badge-pilot" />
    <text x="260" y="295" class="mono" font-size="9" fill="#4338CA" font-weight="bold">Pilot</text>
    
    <!-- Tool 4 -->
    <rect x="20" y="346" width="305" height="64" rx="8" fill="#F8F7F4" stroke="rgba(23,20,23,0.06)" />
    <text x="36" y="370" class="sans" font-size="13" font-weight="600">Custom CRM &amp; Database</text>
    <text x="36" y="390" class="mono" font-size="9" fill="#4B5563">Enterprise &amp; dealer connectors</text>
    <rect x="225" y="356" width="85" height="22" rx="6" fill="#F3F4F6" stroke="#9CA3AF" />
    <text x="233" y="371" class="mono" font-size="9" fill="#4B5563" font-weight="bold">Enterprise</text>
  </g>
</svg>`;

// 4. DELIVERY TIERS DIAGRAM (Cloud vs Edge vs Enterprise) - Fully padded, zero overflows
const deliverySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520" width="100%" height="100%">
  ${styleHeader}
  <rect width="1200" height="520" class="bg" />
  
  <text x="60" y="50" class="mono" font-size="12" fill="#76707a">DEPLOYMENT &amp; DELIVERY ARCHITECTURE</text>
  <text x="60" y="84" class="syne" font-size="24">Nexus Delivery Models: Cloud, Edge, and Enterprise</text>
  
  <!-- Tier 1: Cloud (x=50, w=345) -->
  <g transform="translate(50, 120)">
    <rect width="345" height="360" class="surface" />
    <rect x="20" y="20" width="120" height="24" class="accent-pill" />
    <text x="30" y="36" class="mono" font-size="10" fill="#171417" font-weight="bold">NEXUS CLOUD</text>
    
    <text x="20" y="75" class="syne" font-size="18">Managed Cloud</text>
    <text x="20" y="98" class="sans" font-size="12" fill="#666">Standard managed delivery for local</text>
    <text x="20" y="116" class="sans" font-size="12" fill="#666">businesses and independent operators.</text>
    
    <line x1="20" y1="138" x2="325" y2="138" class="solid-line" />
    
    <text x="20" y="164" class="mono" font-size="10" fill="#76707a">KEY CHARACTERISTICS</text>
    <text x="20" y="188" class="sans" font-size="12" font-weight="600">· Fully hosted &amp; monitored by Westside Union</text>
    <text x="20" y="210" class="sans" font-size="12" font-weight="600">· WhatsApp, SMS, and email connectors</text>
    <text x="20" y="232" class="sans" font-size="12" font-weight="600">· Predictable monthly tier with usage limits</text>
    <text x="20" y="254" class="sans" font-size="12" font-weight="600">· Zero client infrastructure or maintenance</text>
    
    <rect x="20" y="290" width="305" height="34" rx="6" fill="#F3F4F6" />
    <text x="30" y="311" class="mono" font-size="9" fill="#4B5563">Target: Cafes, Salons, Restaurants, Trades</text>
  </g>
  
  <!-- Tier 2: Edge (x=425, w=345) -->
  <g transform="translate(425, 120)">
    <rect width="345" height="360" class="surface" stroke="#8B5CF6" stroke-width="1.5" />
    <rect x="20" y="20" width="110" height="24" class="badge-edge" />
    <text x="30" y="36" class="mono" font-size="10" fill="#6D28D9" font-weight="bold">NEXUS EDGE</text>
    
    <text x="20" y="75" class="syne" font-size="18" fill="#5B21B6">On-Premise Hardware</text>
    <text x="20" y="98" class="sans" font-size="12" fill="#666">Dedicated local hardware appliance for</text>
    <text x="20" y="116" class="sans" font-size="12" fill="#666">maximum privacy &amp; fixed local capacity.</text>
    
    <line x1="20" y1="138" x2="325" y2="138" stroke="#DDD6FE" class="solid-line" />
    
    <text x="20" y="164" class="mono" font-size="10" fill="#6D28D9">KEY CHARACTERISTICS</text>
    <text x="20" y="188" class="sans" font-size="12" font-weight="600">· On-premise data residency &amp; local processing</text>
    <text x="20" y="210" class="sans" font-size="12" font-weight="600">· Dedicated execution without per-token fees</text>
    <text x="20" y="232" class="sans" font-size="12" font-weight="600">· Customer data never used for public training</text>
    <text x="20" y="254" class="sans" font-size="12" font-weight="600">· Managed software updates via secure tunnel</text>
    
    <rect x="20" y="290" width="305" height="34" rx="6" fill="#F5F3FF" />
    <text x="30" y="311" class="mono" font-size="9" fill="#6D28D9">Target: Legal, Medical, Finance, Privacy</text>
  </g>
  
  <!-- Tier 3: Enterprise (x=805, w=345) -->
  <g transform="translate(805, 120)">
    <rect width="345" height="360" class="surface" />
    <rect x="20" y="20" width="150" height="24" class="accent-pill" />
    <text x="30" y="36" class="mono" font-size="10" fill="#171417" font-weight="bold">NEXUS ENTERPRISE</text>
    
    <text x="20" y="75" class="syne" font-size="18">Multi-Location &amp; Custom</text>
    <text x="20" y="98" class="sans" font-size="12" fill="#666">Custom deployments spanning multiple</text>
    <text x="20" y="116" class="sans" font-size="12" fill="#666">locations, roles, and bespoke databases.</text>
    
    <line x1="20" y1="138" x2="325" y2="138" class="solid-line" />
    
    <text x="20" y="164" class="mono" font-size="10" fill="#76707a">KEY CHARACTERISTICS</text>
    <text x="20" y="188" class="sans" font-size="12" font-weight="600">· Multi-store / multi-location role routing</text>
    <text x="20" y="210" class="sans" font-size="12" font-weight="600">· Custom CRM, ERP &amp; database integrations</text>
    <text x="20" y="232" class="sans" font-size="12" font-weight="600">· Advanced approval chains &amp; staff permissions</text>
    <text x="20" y="254" class="sans" font-size="12" font-weight="600">· Tailored SLA &amp; dedicated workflow engineer</text>
    
    <rect x="20" y="290" width="305" height="34" rx="6" fill="#F3F4F6" />
    <text x="30" y="311" class="mono" font-size="9" fill="#4B5563">Target: Dealerships, Franchises, Multi-Unit</text>
  </g>
</svg>`;

// 5. DASHBOARD PREVIEW DIAGRAM (Explicitly labeled "Preview / In Development")
const dashboardPreviewSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="100%">
  ${styleHeader}
  <rect width="1200" height="700" class="surface-dark" />
  
  <!-- Dashboard Top Bar -->
  <rect x="0" y="0" width="1200" height="60" fill="#1C181C" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
  <circle cx="36" cy="30" r="6" fill="#EF4444" opacity="0.8" />
  <circle cx="56" cy="30" r="6" fill="#F59E0B" opacity="0.8" />
  <circle cx="76" cy="30" r="6" fill="#10B981" opacity="0.8" />
  
  <text x="110" y="35" class="syne-light" font-size="16">PROJECT NEXUS</text>
  <text x="250" y="35" class="mono-light" font-size="11">OPERATING ASSISTANT DASHBOARD</text>
  
  <!-- Prominent "ACTIVE CLIENT BETA" Stamp -->
  <rect x="850" y="16" width="290" height="28" class="badge-preview" fill="#FEF3C7" />
  <text x="872" y="34" class="mono" font-size="10.5" fill="#B45309" font-weight="bold">ACTIVE CLIENT BETA DEPLOYMENT</text>
  
  <!-- Left Column: Active Tasks & Human Approvals Queue -->
  <g transform="translate(40, 85)">
    <rect width="680" height="570" rx="10" fill="#201C20" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
    
    <text x="24" y="36" class="syne-light" font-size="16">Live Task Coordination Feed</text>
    <text x="24" y="56" class="mono-light" font-size="10">Simulated live feed of modular business activities</text>
    
    <!-- Item 1: Needs Approval (High prominence) -->
    <rect x="24" y="78" width="632" height="96" rx="8" fill="#2D2418" stroke="#F59E0B" stroke-width="1.5" />
    <rect x="36" y="92" width="130" height="20" class="badge-preview" />
    <text x="44" y="106" class="mono" font-size="9" fill="#B45309" font-weight="bold">NEEDS APPROVAL</text>
    <text x="180" y="106" class="mono-light" font-size="10">Google Business Review · 2m ago</text>
    
    <text x="36" y="132" class="sans-light" font-size="13" font-weight="600">Drafted 5-star review response for customer 'David M.'</text>
    <text x="36" y="152" class="mono-light" font-size="9.5" fill="#D97706">Action paused at boundary: waiting for owner WhatsApp confirmation</text>
    
    <!-- Item 2: Running / In Progress -->
    <rect x="24" y="188" width="632" height="84" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.06)" />
    <rect x="36" y="202" width="110" height="20" rx="4" fill="#1E3A5F" />
    <text x="44" y="216" class="mono" font-size="9" fill="#93C5FD">IN PROGRESS</text>
    <text x="160" y="216" class="mono-light" font-size="10">Inbound Catering Email · 6m ago</text>
    <text x="36" y="242" class="sans-light" font-size="12.5">Parsing Monday lunch catering request (35 guests) against kitchen schedule</text>
    
    <!-- Item 3: Completed -->
    <rect x="24" y="286" width="632" height="84" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.06)" />
    <rect x="36" y="300" width="90" height="20" class="badge-available" />
    <text x="44" y="314" class="mono" font-size="9" fill="#065F46">COMPLETED</text>
    <text x="140" y="314" class="mono-light" font-size="10">WhatsApp Customer Inquiry · 14m ago</text>
    <text x="36" y="340" class="sans-light" font-size="12.5">Answered dietary/allergen question within approved operating policy</text>
    
    <!-- Item 4: Safe Fallback -->
    <rect x="24" y="384" width="632" height="84" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.06)" />
    <rect x="36" y="398" width="110" height="20" rx="4" fill="#374151" />
    <text x="44" y="412" class="mono" font-size="9" fill="#D1D5DB">SAFE FALLBACK</text>
    <text x="160" y="412" class="mono-light" font-size="10">Calendar Sync · 32m ago</text>
    <text x="36" y="438" class="sans-light" font-size="12.5">Third-party endpoint returned 503; task held in queue without data drop</text>
    
    <!-- Bottom note: Wrapped to 2 lines so it never overflows -->
    <text x="24" y="505" class="mono-light" font-size="9.5" fill="#9CA3AF">All events are illustrative of system telemetry and demonstrate modular coordination.</text>
    <text x="24" y="525" class="mono-light" font-size="9.5" fill="#9CA3AF">They do not represent audited customer production statistics or claims.</text>
  </g>
  
  <!-- Right Column: System Telemetry & Trust Meters -->
  <g transform="translate(750, 85)">
    <rect width="410" height="570" rx="10" fill="#201C20" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
    
    <text x="24" y="36" class="syne-light" font-size="16">Governance &amp; Controls</text>
    
    <!-- Control 1 -->
    <rect x="24" y="60" width="362" height="96" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.06)" />
    <text x="40" y="85" class="mono-light" font-size="10" fill="#10B981">APPROVAL RATIO (POLICY ENFORCED)</text>
    <text x="40" y="112" class="syne-light" font-size="22">100%</text>
    <text x="100" y="110" class="sans-light" font-size="12">of sensitive actions stopped for review</text>
    <text x="40" y="136" class="mono-light" font-size="9">Zero unapproved public postings allowed</text>
    
    <!-- Control 2 -->
    <rect x="24" y="170" width="362" height="96" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.06)" />
    <text x="40" y="195" class="mono-light" font-size="10" fill="#60A5FA">SHARED CONTEXT FRESHNESS</text>
    <text x="40" y="222" class="syne-light" font-size="22">Verified</text>
    <text x="120" y="220" class="sans-light" font-size="12">Operating hours &amp; pricing synced</text>
    <text x="40" y="246" class="mono-light" font-size="9">Last updated: Today via Westside Union</text>
    
    <!-- Control 3 -->
    <rect x="24" y="280" width="362" height="130" rx="8" fill="#231F23" stroke="rgba(255,255,255,0.06)" />
    <text x="40" y="305" class="mono-light" font-size="10" fill="#FBBF24">CONNECTED CHANNELS</text>
    <text x="40" y="330" class="sans-light" font-size="12">· WhatsApp Business Gateway (Active)</text>
    <text x="40" y="352" class="sans-light" font-size="12">· SMS / Inbound Text Relay (Active)</text>
    <text x="40" y="374" class="sans-light" font-size="12">· Google Business Profile Listener (Active)</text>
    <text x="40" y="396" class="sans-light" font-size="12">· Square POS Connector (Pilot Testing)</text>
    
    <!-- Status summary -->
    <rect x="24" y="426" width="362" height="106" rx="8" fill="#28221D" stroke="#B45309" />
    <text x="36" y="450" class="mono" font-size="10" fill="#FBBF24" font-weight="bold">DESIGN STATUS NOTE</text>
    <text x="36" y="472" class="sans-light" font-size="11" fill="#FEF3C7">Prototype interface &amp; simulated telemetry</text>
    <text x="36" y="490" class="sans-light" font-size="11" fill="#FEF3C7">for the Nexus managed assistant.</text>
    <text x="36" y="512" class="mono" font-size="9" fill="#D97706">Proprietary routing logic and customer data redacted.</text>
  </g>
</svg>`;

// Write all SVGs
fs.writeFileSync(path.join(nexusDir, 'nexus-evolution-diagram.svg'), evolutionSvg.trim());
fs.writeFileSync(path.join(nexusDir, 'nexus-task-lifecycle-diagram.svg'), taskLifecycleSvg.trim());
fs.writeFileSync(path.join(nexusDir, 'nexus-connections-diagram.svg'), connectionsSvg.trim());
fs.writeFileSync(path.join(nexusDir, 'nexus-delivery-models.svg'), deliverySvg.trim());
fs.writeFileSync(path.join(nexusDir, 'nexus-dashboard-preview.svg'), dashboardPreviewSvg.trim());

console.log('Successfully re-generated all Project Nexus SVG diagram assets with zero overflows!');
