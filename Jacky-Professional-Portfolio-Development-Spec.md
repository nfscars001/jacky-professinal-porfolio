# Jacky Ho Professional Portfolio

## Landing Page and Portfolio Development Specification

**Document purpose:** Build-ready product, content, design, and technical specification for Antigravity  
**Prepared from:** Direct inspection of `template-01.zip` and `template-02.zip`  
**Recommended foundation:** Template 1 structure, rebuilt as modular Next.js pages  
**Selective influence:** Template 2 typography, framed imagery, graphic borders, dark panels, and restrained technical details  
**Source privacy:** Both purchased/source templates remain private local references and must never be committed to the public GitHub repository  
**Target launch:** Recruiter-facing first release

---

## 1. Executive decision

Build a new portfolio application from Template 1’s calm, editorial structure. Do not literally merge the two template source trees. Preserve both originals as private local references outside the public Git repository, and create a separate production repository containing only Jacky’s finished portfolio source and approved assets.

Template 1 is the better structural base because it already contains a conventional navigation, profile-led hero, featured-work grid, contact area, footer, mobile menu, and responsive layouts at 1024 px, 768 px, and 480 px. Its hierarchy is easier for recruiters to scan.

Template 2 should be treated as a visual reference library, not as the application shell. Its best ideas are:

- Syne for high-impact display typography.
- Space Mono for labels, metadata, and technical annotations.
- High-contrast framed images.
- Offset accent shadows.
- Strong section rules and project-card hover states.
- A dark technical panel used sparingly.
- A compact scroll-to-top control.

Do not carry over Template 2’s cyberpunk role-play, simulated CPU clock, fake statistics, decorative window buttons, global crosshair cursor, CRT overlay, terminal skill bars, all-uppercase body copy, or orange accent.

The resulting experience should feel like a senior product designer and creative technologist with an artist’s eye: clear before clever, distinctive without becoming theatrical.

### Mandatory source-separation rule

- Template 1, Template 2, their ZIP archives, extracted files, screenshots intended only for analysis, and any template license material must remain outside the public Git repository.
- The production site may reproduce approved structural and visual ideas through newly written components, but it must not contain either original template project as a folder.
- Do not use Git history to temporarily commit the templates and remove them later. Public Git history can retain deleted material.
- Keep the production repository as a clean standalone application. Use private local paths only while reviewing the source references.

---

## 2. Actual codebase findings

### 2.1 Shared technical foundation

Both archives are near-identical v0-generated project shells:

- Next.js `16.0.10`, App Router
- React and React DOM `19.2.0`
- TypeScript 5 with strict mode enabled
- Tailwind CSS 4 through `@tailwindcss/postcss`
- `tw-animate-css` and `tailwindcss-animate`
- shadcn-style component configuration
- A large, identical set of Radix UI dependencies and generated UI components
- Lucide React
- Vercel Analytics
- `next/font`
- A single route at `app/page.tsx`
- Global styling concentrated in `app/globals.css`

Neither template is a developed multi-page portfolio. Each is a monolithic demonstration page with placeholder content.

Both `next.config.mjs` files currently:

- disable TypeScript build enforcement with `typescript.ignoreBuildErrors: true`;
- disable Next image optimization with `images.unoptimized: true`.

These settings are unsuitable for production and must be removed.

Both projects contain a second `styles/globals.css`, but `app/layout.tsx` imports only `app/globals.css`. The file under `styles/` is therefore redundant and should not be copied into the production application.

Both projects ship dozens of generated `components/ui/*` files, while neither page actually uses them. Copying the entire UI folder would preserve unused code and dependencies. Only retain UI primitives that the finished site truly uses.

### 2.2 Template 1 findings

**Primary files**

- `template-01/app/page.tsx` — 448-line client component containing the entire page
- `template-01/app/globals.css` — 1,127-line global stylesheet
- `template-01/app/layout.tsx` — metadata, fonts, analytics
- `template-01/public/*` — portrait and placeholder project artwork

**Page structure**

- Fixed translucent header
- Desktop navigation and separate mobile menu
- Portrait-led hero
- Vertical typing name treatment
- Rotated marquee
- Three-column featured-work cards
- Blog cards
- Newsletter form
- Two-column contact section
- Footer

**Interaction and motion**

- A typing/deleting loop for the name
- Direct DOM mutation using `element.innerHTML` to wrap letters
- Intersection Observer-based entrance animation
- Infinite marquee
- Hover desaturation/color effects
- Mobile menu state

**Responsive behavior**

- Three project columns on wide screens
- Two columns at 1024 px
- One column at 768 px
- Hero becomes centered and stacked at 768 px
- Contact becomes one column at 1024 px
- Mobile menu appears at 768 px
- Additional compact spacing at 480 px

**Strengths**

- Familiar recruiter-friendly information flow
- Good maximum content width
- Useful hero composition
- Practical header and footer structure
- Clear card pattern
- Reasonable mobile reflow
- Existing reduced-column behavior that can be adapted

**Weaknesses**

- Entire application is marked `"use client"` unnecessarily.
- All content is hard-coded into one page.
- No real routing.
- Placeholder anchors use `href="#"`.
- The blog and newsletter are not useful for the first portfolio launch.
- Forms have no submit action, validation messaging, status region, spam protection, or privacy explanation.
- Mobile menu lacks `aria-expanded`, `aria-controls`, Escape handling, focus management, and focus trapping.
- Repeated social SVG code should be componentized or replaced with Lucide icons.
- Images use raw `<img>` rather than `next/image`.
- Image alternative text such as “Profile” and “Project 1” is inadequate.
- The typing effect runs continually and is distracting.
- The letter animation mutates server-rendered text and can produce hydration, screen-reader, and maintainability problems.
- Motion has no `prefers-reduced-motion` fallback.
- Elements start at `opacity: 0`; if JavaScript fails, important content remains hidden.
- Focus styles are incomplete and mainly rely on browser defaults or border changes.
- Theme variables are declared more than once with overlapping names.
- `Inter` is referenced in CSS but is not loaded in `layout.tsx`.

### 2.3 Template 2 findings

**Primary files**

- `template-02/app/page.tsx` — 303-line client component
- `template-02/app/globals.css` — 911-line global stylesheet
- `template-02/app/layout.tsx` — Geist, Geist Mono, Space Mono, Syne, metadata, analytics
- `template-02/public/hero-portrait.jpg`

**Page structure**

- Sticky dark header
- Two-column hero
- Simulated operating-system image frame
- Four statistic cells
- Three project cards
- Infinite marquee
- Terminal-style skills section
- Footer
- Scroll-to-top button

**Interaction and motion**

- JavaScript clock updated each second
- Random fake CPU value
- Scroll listener for scroll-to-top visibility
- Smooth scroll-to-top
- Grayscale-to-color image hover
- Offset-shadow card hover
- Infinite marquee
- Blinking cursor
- CRT scanline overlay

**Responsive behavior**

- Two-column hero becomes one column at 768 px
- Three project columns become two columns at tablet and one at mobile
- Stats become vertically stacked at mobile
- Footer becomes vertical
- Typography reduces at 768 px and 480 px

**Strengths**

- Memorable display typography
- Effective pairing of Syne and Space Mono
- Strong visual framing
- Clear accent-shadow interaction
- Project-card borders communicate technical precision
- Useful grid-to-stack behavior
- Scroll-to-top control is simple and reusable

**Weaknesses**

- Multiple navigation targets (`archive`, `contact`) do not exist.
- The window controls are focusable buttons with no behavior.
- The “system” status is meaningless, changes every second, and adds client work.
- Fake metrics are a credibility risk.
- The global `cursor: crosshair` degrades usability.
- The fixed CRT overlay adds visual noise and can affect reading comfort.
- The orange-on-dark treatment dominates the content.
- The terminal competency bars imply unjustified numerical skill ratings.
- Mobile navigation wraps but does not become a proper menu.
- Remote Unsplash image URLs are used through raw `<img>` tags.
- Inline styles are widespread.
- No reduced-motion handling.
- The styling is too role-specific for product, innovation, and design-management recruiting.

### 2.4 Comparison summary

| Area | Template 1 | Template 2 | Production decision |
|---|---|---|---|
| Framework | Next.js App Router | Next.js App Router | Start a fresh App Router app using the shared dependency baseline |
| Information architecture | Conventional portfolio flow | One-page themed showcase | Use Template 1 as the structural reference |
| Visual character | Minimal, neutral, editorial | Retro-futurist, dark, technical | Use Template 2 only as restrained visual seasoning |
| Routing | No real routes | No real routes | Add Home, Work, About, Experience, and case-study routes |
| Components | Monolithic page | Monolithic page | Extract server-first modular components |
| Styling | Large global CSS file | Large global CSS file | Create a small token layer plus CSS modules/component styles |
| Motion | Typing, blur reveal, marquee | marquee, blink, hover, scroll button | Use subtle reveal and hover motion with reduced-motion support |
| Mobile | Functional menu and sensible stacking | Responsive stacking but no mobile menu | Adapt Template 1’s layout; rebuild its mobile menu accessibly |
| Accessibility | Partial labels, several gaps | Partial labels, several serious gaps | Rebuild interaction semantics and target WCAG 2.2 AA |
| Production readiness | Prototype | Prototype | Neither should be shipped directly |

---

## 3. Project goals

### 3.1 Primary goal

Help a recruiter or hiring manager understand within 30 seconds that Jacky is a credible product designer and creative technologist who connects product strategy, AI, digital experience, physical technology, creative direction, and business thinking.

### 3.2 Secondary goals

- Turn a multidisciplinary career into one coherent progression.
- Lead with real, defensible projects rather than a list of disciplines.
- Make Paviqo, Bio Union, and Artpresso understandable without prior context.
- Demonstrate both current commercial thinking and long-term innovation depth.
- Provide a direct path to the résumé, LinkedIn, email, and art portfolio.
- Support targeted applications for product design, creative technology, innovation, and AI-product roles.
- Make future projects easy to add without rewriting the UI.

### 3.3 Non-goals for version 1

- A blog or newsletter
- A CMS
- A fully animated experimental experience
- A custom contact backend
- A comprehensive art archive
- A claim-heavy startup marketing site
- Pivo as a featured case study before it is ready

---

## 4. Audience and visitor priorities

### Primary audiences

1. Recruiters conducting a 30–90 second first scan.
2. Hiring managers reviewing two or three projects in depth.
3. Product, design, and innovation leaders evaluating systems thinking.
4. Potential collaborators or consulting clients.

### Audience questions the site must answer

- What role is Jacky seeking?
- What does he actually do?
- Is his founder background relevant to an employee role?
- What did he personally contribute?
- Can he simplify complex technical and business problems?
- Is the work current?
- Can the claims be trusted?
- How can I contact him or download his résumé?

### Content principle

Every page should prioritize evidence over adjectives. “Led product strategy and designed the workflow” is stronger than “visionary multidisciplinary innovator.”

---

## 5. Positioning and voice

### Recommended title

**Product Designer & Creative Technologist**

### Recommended hero statement

> I design products where technology, creativity, and business meet.

### Recommended supporting statement

> Toronto-based product designer and creative technologist working across AI platforms, digital tools, and connected products.

### Credibility line

> Founder at Westside Union · Faculty at George Brown College · Open to product, innovation, and creative technology opportunities

Use a confident, specific, warm voice. Avoid jargon clusters, exaggerated startup language, skill-percentage charts, and unverified metrics.

---

## 6. Sitemap and navigation

### 6.1 Required routes

```text
/
/work
/work/paviqo
/work/bio-union
/work/artpresso
/about
/experience
/contact                    optional dedicated page; footer section is sufficient for v1
/resume.pdf                 static downloadable file
```

Optional future routes:

```text
/work/[slug]                for additional projects
/archive                    only after enough historical work is curated
```

### 6.2 Primary navigation

Desktop:

**Work · About · Experience · Art Practice ↗ · Contact · Résumé ↓**

- Logo/name returns to `/`.
- `Art Practice ↗` opens the separate art portfolio in a new tab only if Jacky prefers preserving the professional site session.
- If opening a new tab, use `target="_blank"` with `rel="noopener noreferrer"` and include accessible text such as “Art Practice, opens in a new tab.”
- Résumé is a visually distinct secondary button, not the dominant call to action.
- Use a current-page indicator through `aria-current="page"` and a visible underline or weight change.

Mobile:

- Same order in a proper disclosure menu.
- Menu button must expose `aria-expanded` and `aria-controls`.
- Menu closes on link selection and Escape.
- Focus moves into the menu when opened and returns to the trigger when closed.
- Body scrolling is locked only while the full-screen menu is open.

### 6.3 Art Practice behavior

The link must remain visible in the main navigation as requested. Its styling should be secondary to Work but should not be hidden in the footer. Use the external-link arrow consistently. Pure artwork stays on the art site; professional projects involving art, tools, installations, branding, or creative technology may remain in Work.

---

## 7. Homepage section order

### 7.1 Header

- Name/wordmark
- Primary navigation
- Art Practice external link
- Résumé action
- Sticky after the first scroll, or fixed with enough top offset
- Light backdrop blur is acceptable; avoid excessive transparency over images

### 7.2 Hero

**Purpose:** Establish role, value, location, and next action in one screen.

Content:

- Eyebrow: `Product Designer · Creative Technologist`
- H1: `I design products where technology, creativity, and business meet.`
- Supporting paragraph
- Primary CTA: `View selected work`
- Secondary CTA: `Download résumé`
- Credibility line
- Editorial portrait

Visual direction:

- Adapt Template 1’s portrait-and-copy composition.
- Remove the typing loop and vertical name.
- On wide screens use an asymmetrical 5/7 or 6/6 grid.
- Borrow Template 2’s framed portrait only as a thin outline plus a small pink offset shadow.
- Do not include fake window buttons.
- A small monospace label such as `TORONTO / 2026` may add technical character.

### 7.3 Featured Work

Show exactly three large editorial cards:

1. Paviqo
2. Bio Union
3. Artpresso

Each card includes:

- Project title
- One-sentence problem/solution statement
- Project status/year
- Jacky’s role
- Two to four capability tags
- Meaningful image
- `Read case study` link
- Optional `View live site ↗` link where appropriate

Use alternating image/text proportions or one large lead card plus two supporting cards. Do not use three identical small tiles above the fold.

### 7.4 Capabilities

Three concise groups:

1. **Product & Experience**  
   Product strategy, UX architecture, workflows, prototyping, design systems

2. **AI & Technology**  
   AI workflows, automation, SaaS, connected products, hardware/software ecosystems

3. **Creative Direction & Business**  
   Brand systems, storytelling, market framing, presentations, stakeholder communication

Avoid software-logo walls and numerical skill ratings.

### 7.5 Career Journey

A short horizontal progression on desktop and vertical timeline on mobile:

`Fashion & textile engineering → wearable health technology → education & design leadership → digital products & AI`

Each stage gets one sentence, a date range, and at most one supporting proof point.

### 7.6 Selected Projects Preview

Show four to six smaller project cards beyond the featured three. Do not place filters directly on the homepage unless at least six non-featured projects are ready. Link to `View all work`.

### 7.7 About Preview

- Short professional paragraph
- Connection between artistic practice and product work
- Link to About
- Visible `Explore Art Practice ↗` link

### 7.8 Contact CTA

Recommended copy:

> Building something thoughtful? Let’s talk.

Include:

- Email link
- LinkedIn
- Toronto, Canada
- Opportunity statement

For v1, prefer a direct email action over a nonfunctional contact form.

### 7.9 Footer

- Name and role
- Core navigation
- Art Practice external link
- LinkedIn and email
- Copyright year generated from the server or updated manually
- Small availability statement
- No template credits, v0 badges, fake terminal text, or abandoned social networks

---

## 8. Featured project content requirements

### 8.1 Paviqo

**Homepage label:** Current product  
**One-line description:** An AI-powered lead conversion and recovery platform for automotive dealerships.  
**Capabilities:** Product Strategy · AI Workflows · SaaS UX · Business Design

Case-study emphasis:

- Automotive dealership lead leakage
- User and business workflow
- Lead capture, qualification, follow-up, appointment, CRM, and recovery flow
- Product architecture and key decision points
- AI behavior and human handoff
- Multilingual considerations
- Jacky’s personal role
- Current development status
- Verified outcomes only

Do not reproduce unsupported customer counts, uptime, testimonials, revenue impact, or operational guarantees from a marketing page.

### 8.2 Bio Union

**Homepage label:** Previous venture  
**One-line description:** A connected smart-garment ecosystem for continuous physiological monitoring.  
**Capabilities:** Wearable Technology · Product Vision · Hardware/Software · Smart Textiles

Case-study emphasis:

- Human origin of the problem
- Product hypothesis
- Garment, sensor, data, software, and action ecosystem
- Prototype evidence
- Cross-disciplinary role
- Product-development journey
- Pandemic disruption and strategic response
- Why the venture ended, stated calmly
- Lessons and present-day retrospective

Distinguish original artifacts, reconstructed 2026 diagrams, and retrospective concepts.

### 8.3 Artpresso

**Homepage label:** Independent digital product  
**One-line description:** A practical artwork-pricing tool for independent artists and creative professionals.  
**Capabilities:** Product Design · UX Strategy · Creative Technology · Web Application

Case-study emphasis:

- The inconsistency and uncertainty in artwork pricing
- Inputs, assumptions, and calculation logic
- Information hierarchy
- Simplifying a multi-variable task
- Interface iterations
- Product identity
- Shipping the live tool
- Known limitations and next improvements

---

## 9. Work page

### 9.1 Page structure

1. Introductory heading and one-paragraph positioning statement
2. Featured case studies
3. Filter control
4. Responsive project grid
5. Optional archive link after the archive is curated
6. Contact CTA

### 9.2 Filter categories

Use no more than five:

- All
- Digital Products
- AI & Automation
- Physical Innovation
- Brand & Experience

Projects may belong to multiple categories.

### 9.3 Filter behavior

- `All` is selected by default.
- Use real `<button>` elements inside a group labeled “Filter projects.”
- Expose the selected state with `aria-pressed`.
- Do not hide content before hydration.
- Update the URL query parameter, for example `/work?category=ai-automation`, so the state is shareable and survives refresh.
- Use a server-rendered complete project list; enhance filtering on the client.
- Announce result count changes in a polite live region.
- Filtering should not move keyboard focus unexpectedly.
- Avoid animated masonry. Use a stable CSS grid and a short opacity transition only.

### 9.4 Project data model

Create `content/projects.ts` or validated JSON/MDX front matter:

```ts
export type ProjectCategory =
  | "digital-products"
  | "ai-automation"
  | "physical-innovation"
  | "brand-experience"

export type AssetProvenance =
  | "original"
  | "reconstructed"
  | "ai-assisted"
  | "retrospective"

export interface Project {
  slug: string
  title: string
  shortTitle?: string
  summary: string
  cardStatement: string
  year: string
  status: "live" | "in-development" | "previous-venture" | "archive"
  featured: boolean
  featuredOrder?: number
  categories: ProjectCategory[]
  capabilities: string[]
  roles: string[]
  collaborators?: string[]
  heroImage: {
    src: string
    alt: string
    width: number
    height: number
    provenance: AssetProvenance
    disclosure?: string
  }
  cardImage?: {
    src: string
    alt: string
    width: number
    height: number
    provenance: AssetProvenance
    disclosure?: string
  }
  liveUrl?: string
  archiveUrl?: string
  caseStudyPath?: string
  seo: {
    title: string
    description: string
    image: string
  }
}
```

Do not place React elements in the data model. Keep content serializable. Validate required fields with TypeScript and optionally Zod at build time.

---

## 10. Case-study architecture

Every full case study should share a consistent reading model while allowing project-specific modules.

### 10.1 Required sequence

1. **Case-study hero**
   - Title
   - One-sentence outcome or product definition
   - Year/status
   - Role
   - Capabilities
   - Hero evidence

2. **At a glance**
   - Problem
   - Contribution
   - Team/context
   - Duration
   - Status/outcome

3. **Context and problem**
   - User and business situation
   - Constraints
   - Why the problem mattered

4. **My role**
   - Jacky’s direct responsibilities
   - Collaborators’ responsibilities
   - Clear authorship boundaries

5. **Approach**
   - Research or discovery
   - Framing
   - Iteration
   - Key decisions

6. **System or journey**
   - Product ecosystem, workflow, or journey diagram
   - Accessible text equivalent

7. **Selected design decisions**
   - Two to four decisions with rationale and trade-offs

8. **Evidence**
   - Original artifacts
   - Prototype screens
   - Diagrams
   - Photographs
   - Validated metrics, if available

9. **Outcome and status**
   - What shipped or was tested
   - What is still in development
   - What cannot be claimed

10. **Reflection**
    - Lessons
    - What Jacky would do differently now

11. **Next project navigation**
    - Previous/next project
    - Return to Work
    - Contact CTA

### 10.2 Case-study modules

Build reusable modules:

- `CaseStudyHero`
- `ProjectFacts`
- `NarrativeSection`
- `MediaFigure`
- `ImageGallery`
- `BeforeAfter`
- `ProcessTimeline`
- `SystemDiagram`
- `QuoteOrEvidence`
- `OutcomeMetrics`
- `DisclosureCaption`
- `ProjectPagination`

Do not force every project to use every module.

### 10.3 Reading length

- Homepage project scan: 10–20 seconds per card
- At-a-glance section: under one minute
- Full case study: 4–7 minutes
- Use descriptive headings so a recruiter can skim without reading every paragraph

---

## 11. Component map

```text
RootLayout
├── SkipLink
├── SiteHeader
│   ├── Wordmark
│   ├── DesktopNav
│   ├── ExternalNavLink
│   ├── ResumeButton
│   └── MobileNav
├── Main
│   ├── HomePage
│   │   ├── Hero
│   │   ├── FeaturedProjects
│   │   │   └── FeaturedProjectCard
│   │   ├── CapabilityGroups
│   │   ├── CareerJourney
│   │   ├── SelectedProjects
│   │   │   └── ProjectCard
│   │   ├── AboutPreview
│   │   └── ContactCTA
│   ├── WorkPage
│   │   ├── PageIntro
│   │   ├── ProjectFilters
│   │   ├── ProjectGrid
│   │   └── ProjectCard
│   ├── CaseStudyPage
│   │   ├── CaseStudyHero
│   │   ├── ProjectFacts
│   │   ├── CaseStudyModules
│   │   └── ProjectPagination
│   ├── AboutPage
│   └── ExperiencePage
├── SiteFooter
└── ScrollToTop
```

### Server/client boundary

Render pages, cards, content, metadata, and case-study modules as Server Components. Use small Client Components only for:

- `MobileNav`
- `ProjectFilters`
- `ScrollToTop`
- Optional intersection-based visual reveal

This avoids repeating the templates’ mistake of making the complete page a client component.

---

## 12. Design system

### 12.1 Recommended colorway: Editorial Pink

This is the primary recommendation.

| Token | Value | Use |
|---|---:|---|
| `--color-canvas` | `#F7F4F1` | Warm main background |
| `--color-surface` | `#FFFFFF` | Cards and elevated content |
| `--color-ink` | `#171417` | Primary text |
| `--color-muted` | `#675F67` | Secondary text |
| `--color-line` | `#DCD4DA` | Borders and dividers |
| `--color-accent` | `#D81B78` | Main pink accent |
| `--color-accent-hover` | `#B51463` | Hover/active pink |
| `--color-accent-soft` | `#F8D7E8` | Tags and soft highlights |
| `--color-violet` | `#6657D9` | Optional secondary accent |
| `--color-dark-panel` | `#19151B` | Technical/dark section |
| `--color-on-dark` | `#FCF8FB` | Text on dark panel |
| `--color-focus` | `#6B4EFF` | Focus ring |

The accent must not be the only means of conveying a selected or interactive state.

### 12.2 Alternative colorway A: Ink, Rose, and Cobalt

| Token | Value |
|---|---:|
| Canvas | `#FAFAF8` |
| Ink | `#101114` |
| Pink | `#E13B82` |
| Pink soft | `#FFE0EC` |
| Cobalt | `#3157D5` |
| Border | `#D9DCE3` |
| Dark panel | `#111318` |

Use when a slightly more corporate technology signal is desired.

### 12.3 Alternative colorway B: Charcoal and Electric Pink

| Token | Value |
|---|---:|
| Canvas | `#111013` |
| Surface | `#1A181D` |
| Primary text | `#FAF7FA` |
| Secondary text | `#B9AFB8` |
| Electric pink | `#FF4F9A` |
| Violet | `#9C7BFF` |
| Border | `#39323B` |

Use only for selected sections or a future dark theme. A fully dark default would move the site closer to Template 2 and reduce its recruiter-friendly editorial quality.

### 12.4 Contrast

Verify all final combinations with an automated checker:

- Normal text: at least 4.5:1
- Large text: at least 3:1
- UI boundaries and focus indicators: at least 3:1 against adjacent colors

Do not assume pink works on white for small text; use it mainly for large display details, borders, icons, and controls with verified contrast.

### 12.5 Spacing

Use an 8 px base:

```text
4, 8, 12, 16, 24, 32, 48, 64, 80, 112, 144
```

- Page maximum width: 1,200–1,280 px
- Reading column: 680–760 px
- Desktop gutters: 40–64 px
- Tablet gutters: 24–32 px
- Mobile gutters: 16–20 px
- Homepage section spacing: 96–144 px desktop, 64–88 px tablet, 48–72 px mobile

### 12.6 Shape and borders

- Main card radius: 12–16 px
- Small controls: 8–10 px
- Editorial cards may use square corners selectively
- Border: 1 px neutral
- Template 2-inspired framed media: 1–2 px border with a 4–6 px pink offset shadow
- Avoid applying offset shadows to every card

---

## 13. Typography

### Recommended family system

- **Display:** Syne, weights 700 and 800
- **Body/UI:** Geist or Inter, weights 400, 500, 600
- **Metadata:** Space Mono, weights 400 and 700

This selectively preserves Template 2’s strongest typographic idea while maintaining Template 1’s readability.

Load fonts only with `next/font`; remove the CSS `@import` to Google Fonts. Avoid loading both Geist and Inter. Recommended final choice: Geist.

### Type scale

Use fluid type with `clamp()`:

```css
--step-hero: clamp(3rem, 7vw, 6.75rem);
--step-h1: clamp(2.75rem, 5vw, 5rem);
--step-h2: clamp(2rem, 3.5vw, 3.5rem);
--step-h3: clamp(1.35rem, 2vw, 2rem);
--step-lead: clamp(1.125rem, 1.5vw, 1.375rem);
--step-body: 1rem;
--step-small: 0.875rem;
--step-label: 0.75rem;
```

Guidelines:

- Hero line height: 0.95–1.05
- Heading line height: 1.05–1.2
- Body line height: 1.55–1.7
- Reading line length: 55–75 characters
- Use uppercase Space Mono only for short labels, never long paragraphs

---

## 14. Motion guidelines

### Principles

- Motion should clarify hierarchy and response, not perform a theme.
- Content must be visible before JavaScript runs.
- No essential meaning may depend on animation.
- Respect `prefers-reduced-motion: reduce`.

### Approved motion

- Section reveal: 12–20 px translation plus opacity, 300–500 ms
- Card hover: image scale no more than 1.02, border/accent shift, 180–240 ms
- Template 2-inspired shadow: translate no more than 2 px, 180–220 ms
- Mobile menu: opacity and short vertical motion, 200–280 ms
- Filter change: opacity only, 150–220 ms
- Scroll-to-top: fade in/out

### Motion to remove or avoid

- Template 1’s repeating typing/deleting name
- Letter-by-letter blur animation created through `innerHTML`
- Continuous blinking cursor
- Simulated system clock
- Random CPU percentages
- CRT overlay
- Parallax
- Full-page smooth scrolling when reduced motion is requested
- Rotated marquee as a constant large animation

An optional static ribbon can replace the marquee. If a marquee is retained, pause it by default for reduced motion, provide a pause control if it conveys information, and ensure duplicated content is `aria-hidden`.

---

## 15. Responsive behavior

### Breakpoint strategy

Use content-driven breakpoints rather than device names:

- Base: 0–639 px
- Medium: 640–899 px
- Large: 900–1199 px
- Extra large: 1200 px+

### Header

- Desktop navigation at 900 px and above
- Disclosure menu below 900 px
- Minimum control size 44 × 44 px
- Prevent résumé button and Art Practice link from wrapping awkwardly

### Hero

- Extra large: copy and portrait side by side
- Large: 55/45 split
- Medium and small: copy first, portrait second
- H1 should not create isolated one-word lines at common widths
- Portrait uses responsive aspect ratio, not a fixed 500 px height
- Primary and secondary CTA stack only on very narrow screens

### Featured projects

- Lead project may span full width
- Two supporting projects form two columns at 900 px+
- Single column below 900 px
- Cards maintain a predictable image aspect ratio
- Touch devices receive the same information without hover

### Work grid

- Three columns only when cards remain at least 320 px wide
- Two columns at medium/large widths
- One column on small screens
- Filter buttons scroll horizontally only if they cannot wrap cleanly; show a visual affordance

### Case studies

- Facts panel may be sticky only on wide screens and must stop before the footer
- All content becomes a single reading column on mobile
- Wide diagrams may use a scroll container with visible instructions, but a stacked mobile alternative is preferred
- Galleries must not force horizontal page scrolling

### Timeline

- Horizontal on wide screens
- Vertical with a clear connecting rule on small screens

Test at 320, 375, 390, 768, 1024, 1280, and 1440 px, plus browser zoom at 200%.

---

## 16. Accessibility requirements

Target WCAG 2.2 AA.

### Structure

- One `<h1>` per page
- Logical heading order
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` appropriately
- Every section with an accessible name uses `aria-labelledby` where useful
- Add a visible-on-focus “Skip to main content” link

### Keyboard

- All interactions work with keyboard alone
- Visible focus ring on every control
- No keyboard traps
- Mobile menu follows disclosure/dialog behavior consistently
- Escape closes overlays
- Scroll-to-top does not steal focus

### Links and controls

- Do not use `href="#"` placeholders
- Do not render decorative controls as buttons
- Link text must describe the destination
- External links are identified visually and accessibly
- Download résumé link uses a filename and optional `download` attribute where supported

### Images

- Use descriptive alt text for informative images
- Use empty alt text for purely decorative imagery
- Diagrams need text summaries
- Captions identify provenance when relevant
- Do not put essential text inside images

### Motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Refine this rule if any control relies on a transition for state comprehension.

### Forms

If a contact form is added later:

- Persistent labels
- Programmatic error association
- Clear status messages in live regions
- Server-side validation
- Spam protection
- No required information beyond name, email, and message
- Privacy explanation

### Testing

- Axe or Lighthouse automated scan
- Keyboard-only walkthrough
- VoiceOver on macOS/iOS
- Text resizing to 200%
- Forced-colors/high-contrast check
- Reduced-motion check

---

## 17. SEO and sharing

### Global metadata

- Title template: `%s | Jacky Ho`
- Default title: `Jacky Ho — Product Designer & Creative Technologist`
- Description focused on Toronto, product design, AI, connected products, and innovation
- Canonical production URL
- Open Graph image at 1200 × 630
- Twitter/X card metadata
- Favicon and Apple touch icon
- `robots.ts`
- `sitemap.ts`

### Route metadata

Every project route requires:

- Unique title
- Unique 140–160 character description
- Canonical URL
- Project-specific social image
- Meaningful image alt text

### Structured data

Use JSON-LD:

- `Person` on Home/About
- `WebSite` globally
- `CreativeWork` or `SoftwareApplication` for relevant projects only when fields are accurate

Do not invent awards, employers, clients, reviews, ratings, or dates.

### Search content

- Ensure core project summaries are rendered in HTML
- Avoid canvas-only diagrams
- Use descriptive URLs and headings
- Add internal links among Work, project case studies, About, and Experience

---

## 18. Performance requirements

### Targets

- Lighthouse Performance: 90+ on mobile under normal test conditions
- Accessibility: 95+ and no serious Axe issues
- LCP: under 2.5 seconds at the 75th percentile
- CLS: under 0.1
- INP: under 200 ms

### Implementation

- Restore Next image optimization.
- Use `next/image` with explicit dimensions or `fill` plus `sizes`.
- Use AVIF/WebP where practical.
- Prioritize only the hero image; lazy-load below-the-fold media.
- Keep the hero image below roughly 250–350 KB where visual quality permits.
- Self-host through `next/font`.
- Eliminate unused Radix and chart dependencies.
- Avoid shipping the complete page as a Client Component.
- Avoid interval timers and global scroll handlers where CSS or Intersection Observer suffices.
- If scroll-to-top uses a listener, make it passive and isolate it in a small client component.
- Reserve dimensions for all media.
- Use static generation for all portfolio content.
- Run bundle analysis before launch if the JavaScript bundle becomes material.

---

## 19. Asset and AI-visual guidance

### 19.1 Evidence hierarchy

Prefer:

1. Original photographs, prototypes, sketches, source screens, and documents
2. Faithful reconstructions based on archived material
3. Clearly labeled retrospective designs
4. AI-assisted contextual renderings as supporting visuals

AI imagery must not become the primary proof that a product existed or worked.

### 19.2 Provenance labels

Use concise captions:

- `Original prototype photograph, 2019.`
- `Diagram reconstructed in 2026 from the original product architecture.`
- `Interface visualization recreated from archived concepts and development notes.`
- `2026 retrospective concept—not part of the original product.`
- `AI-assisted concept visualization created in 2026 and manually composited from Jacky’s original design direction.`

### 19.3 Disclosure rules

- Do not attempt to remove or evade AI detection.
- Disclose AI assistance at the figure level when it materially contributed to the visual.
- Show underlying sketches or constraints when they strengthen authorship.
- Keep disclosure factual and visually quiet.
- Do not label ordinary Photoshop cleanup as AI-generated unless generative tools materially created content.
- Preserve source files and a simple asset log.

### 19.4 Asset structure

```text
public/
├── images/
│   ├── profile/
│   ├── projects/
│   │   ├── paviqo/
│   │   ├── bio-union/
│   │   └── artpresso/
│   └── social/
├── documents/
│   └── jacky-ho-resume.pdf
└── icons/
```

Use lowercase kebab-case filenames and never ship placeholder assets.

---

## 20. Exact reuse and avoidance plan

### 20.1 Template 1: reuse as reference or adapt

| Source | Decision | Notes |
|---|---|---|
| `template-01/app/page.tsx` header structure, roughly lines 88–172 | Adapt | Rebuild as `SiteHeader`, `DesktopNav`, and accessible `MobileNav`; replace labels and links |
| Hero composition, roughly lines 175–203 | Adapt | Keep portrait/copy relationship; remove vertical typing name and DOM animation |
| Featured-work card semantics, roughly lines 239–282 | Adapt | Convert hard-coded articles into data-driven linked cards |
| Contact layout, roughly lines 358–409 | Partial | Use contact CTA; omit form until a real backend exists |
| Footer structure, roughly lines 412–447 | Adapt | Replace placeholder links, remove generator credit |
| Responsive grid rules at 1024/768 px | Adapt | Translate into component styles and content-driven breakpoints |
| `components/ui/sheet.tsx` | Optional reuse | Suitable for mobile navigation if retained with its Radix dependency |
| `components/ui/button.tsx` | Optional reuse | Keep only if it matches the final component approach |
| `lib/utils.ts` | Reuse if shadcn utilities remain | Useful `cn` helper |
| `public/me-02.jpg` and placeholders | Avoid in production | Replace with final portrait and project media |

### 20.2 Template 1: avoid

- `typedText`, `isDeleting`, and the typing `useEffect`
- `animateText()` and direct `innerHTML` mutation
- Global `.letter-blur` treatment
- Blog section for version 1
- Newsletter section for version 1
- Placeholder contact form
- `href="#"` links
- Raw inline SVG duplicates
- Raw `<img>` elements
- Entire 1,127-line stylesheet as-is
- Redundant `styles/globals.css`
- All unused `components/ui/*`
- `next.config.mjs` production bypasses

### 20.3 Template 2: selectively reuse as reference or adapt

| Source | Decision | Notes |
|---|---|---|
| `app/layout.tsx` Syne and Space Mono setup | Adapt | Keep Syne + Space Mono; use `next/font`, remove CSS font import |
| `.window-frame` visual treatment | Adapt visually | Create a non-interactive `FramedMedia`; no fake controls |
| `.project-card` hover border and offset shadow | Adapt | Reduce movement and replace orange with pink |
| `.section-title::after` rule treatment | Adapt | Useful for selected section headings |
| `.scroll-to-top` concept | Reuse behavior | Rebuild as isolated accessible client component |
| Dark surface and dotted-grid idea | Selective | One capabilities/footer/case-study panel only, at low contrast |
| `.portfolio-grid` tablet behavior | Reference | Integrate with final grid system |

### 20.4 Template 2: avoid

- `updateClock()` and random CPU status
- Fake statistic values
- `window-controls` buttons
- Global crosshair cursor
- CRT `body::before` overlay
- Terminal skill-percentage section
- Infinite blinking cursor
- The all-dark full-site shell
- Orange variables and shadows
- Remote Unsplash placeholders
- Inline styles
- Nonexistent navigation anchors
- v0/1UI footer badge
- Entire 911-line stylesheet as-is
- Redundant `styles/globals.css`
- All unused `components/ui/*`
- `next.config.mjs` production bypasses

---

## 21. Proposed local workspace and public repository structure

Keep the two templates in a private local reference area outside the Git repository. The public GitHub repository contains only the production portfolio:

```text
jacky-portfolio-workspace/         # local parent; do not initialize Git here
├── private-references/            # local only; never publish
│   ├── template-01.zip
│   ├── template-02.zip
│   ├── template-01/
│   └── template-02/
├── local-docs/                    # optional private planning material
│   ├── development-spec.md
│   ├── content-inventory.md
│   └── asset-provenance.md
└── jacky-professional-portfolio/  # public GitHub repository root
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── work/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   └── opengraph-image.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── site-header.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── site-footer.tsx
│   │   │   └── skip-link.tsx
│   │   ├── home/
│   │   │   ├── hero.tsx
│   │   │   ├── featured-projects.tsx
│   │   │   ├── capabilities.tsx
│   │   │   ├── career-journey.tsx
│   │   │   ├── about-preview.tsx
│   │   │   └── contact-cta.tsx
│   │   ├── work/
│   │   │   ├── project-card.tsx
│   │   │   ├── project-grid.tsx
│   │   │   └── project-filters.tsx
│   │   ├── case-study/
│   │   │   ├── case-study-hero.tsx
│   │   │   ├── project-facts.tsx
│   │   │   ├── media-figure.tsx
│   │   │   ├── process-timeline.tsx
│   │   │   ├── system-diagram.tsx
│   │   │   ├── disclosure-caption.tsx
│   │   │   └── project-pagination.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── tag.tsx
│   │       ├── external-link.tsx
│   │       ├── framed-media.tsx
│   │       └── scroll-to-top.tsx
│   ├── content/
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── case-studies/
│   │       ├── paviqo.mdx
│   │       ├── bio-union.mdx
│   │       └── artpresso.mdx
│   ├── lib/
│   │   ├── projects.ts
│   │   ├── metadata.ts
│   │   └── utils.ts
│   ├── public/
│   │   ├── images/
│   │   ├── documents/
│   │   └── icons/
│   ├── styles/
│   │   ├── tokens.css
│   │   └── utilities.css
│   ├── tests/
│   │   ├── accessibility.spec.ts
│   │   ├── navigation.spec.ts
│   │   └── work-filters.spec.ts
│   ├── next.config.mjs
│   ├── package.json
│   ├── package-lock.json          # or one chosen package-manager lockfile
│   ├── tsconfig.json
│   ├── .gitignore
│   └── README.md
```

If MDX adds unnecessary complexity for Antigravity, use structured TypeScript content initially. The crucial requirement is separation of content from components.

### Public repository exclusion rules

Add defensive patterns to the production repository’s `.gitignore`, even though the private references should already live outside it:

```gitignore
# Private source templates and local analysis
/references/
/private-references/
/template-analysis/
/local-docs/
template-01*
template-02*
*.zip

# Environment and local files
.env
.env.*
!.env.example
.DS_Store
```

Before the first push, run a repository inventory and confirm that no template source, ZIP archive, private source artwork, credentials, or license files are tracked. If a template has ever been committed, do not merely delete it in a later commit; clean the repository history before making the repository public.

---

## 22. Recommended implementation approach

1. Create a fresh standalone Next.js App Router repository named `jacky-professional-portfolio`.
2. Keep both source templates outside that repository in a private local reference directory.
3. Use the existing package versions only as a compatibility reference; install the smallest dependency set needed.
4. Recreate the selected layouts as modular components rather than copying either complete `app/page.tsx`.
5. Use Tailwind 4 consistently or use CSS Modules consistently. A hybrid is acceptable only when documented:
   - tokens and base rules in `app/globals.css`/`styles/tokens.css`;
   - component layout in Tailwind or CSS Modules;
   - no second unused global stylesheet.
6. Keep server rendering as the default.
7. Model projects in one data source and generate cards, filters, routes, metadata, and sitemap entries from it.
8. Replace raw images with `next/image`.
9. Remove `ignoreBuildErrors` and `unoptimized`.
10. Add production tests and accessibility checks before styling polish.
11. Connect the public GitHub repository to Vercel only after the first repository privacy audit passes.

### Minimal dependency recommendation

Required:

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss` and its current Next/PostCSS integration, if Tailwind is retained
- `lucide-react`

Optional:

- Radix Dialog or Sheet for the mobile menu
- Zod for content validation
- MDX packages if case studies use MDX
- Vercel Analytics after privacy and deployment decisions

Remove all unused charts, date pickers, carousels, forms, commands, resizable panels, and toast packages.

---

## 23. Antigravity build instructions

Use the following implementation brief as the task prompt:

> Build a production-ready professional portfolio for Jacky Ho as a clean standalone Git repository. Template 1 and Template 2 are private local references outside the repository. Use Template 1 only as the structural reference and Template 2 only for the approved visual details in this specification. Do not copy either template project, ZIP archive, license file, monolithic page file, or global stylesheet into the production repository.
>
> Use Next.js App Router, React, TypeScript strict mode, server-first components, responsive images, static generation, and WCAG 2.2 AA semantics. Create routes for Home, Work, About, Experience, and project case studies. Add Art Practice as an external main-navigation link and Résumé as a visible download action.
>
> Implement Paviqo, Bio Union, and Artpresso as the three featured projects using a shared project data model. Build the Work filter with `All`, `Digital Products`, `AI & Automation`, `Physical Innovation`, and `Brand & Experience`. Filters must use buttons with `aria-pressed`, persist through a `category` query parameter, and announce the result count.
>
> Use Editorial Pink as the default color system. Use Syne for display type, Geist for body/UI, and Space Mono for short labels. Borrow only Template 2’s thin framed-media treatment, restrained offset pink shadow, section rules, and an optional dark technical panel. Do not implement CRT scanlines, a crosshair cursor, system clocks, fake statistics, terminal skill bars, fake window controls, orange, or fictional metrics.
>
> Remove Template 1’s typing/deleting name effect, direct `innerHTML` animation, blog, newsletter, placeholder forms, and placeholder links. Keep all content visible without JavaScript and implement reduced-motion behavior.
>
> Restore production safeguards: no ignored TypeScript errors, no globally unoptimized images, no raw remote placeholder images, and no unused generated UI library. Add metadata, sitemap, robots, Open Graph images, structured data, keyboard behavior, visible focus, and performance checks.
>
> Treat all metrics, clients, partnerships, and outcomes as unverified placeholders until Jacky approves them. Include provenance fields and visible captions for reconstructed, retrospective, and AI-assisted imagery.

### Build constraints for Antigravity

- Do not move, copy, or commit the two private template folders or ZIP archives into the production repository.
- Do not initialize Git in a parent directory that contains the private templates.
- Before every first/public push, inspect the tracked-file list and confirm that no private template material is included.
- Do not copy both `app/globals.css` files into the new application.
- Do not retain duplicate `styles/globals.css`.
- Do not install the full dependency list unless a component uses it.
- Do not invent résumé facts, product outcomes, testimonials, or dates.
- Flag missing content with clear `TODO(content):` comments or a content inventory, not fabricated copy.
- Ensure `npm run build`, type checking, linting, and tests succeed without bypasses.

---

## 24. GitHub and Vercel deployment rules

### 24.1 Hosting model

- GitHub is the public source repository for the newly written portfolio application only.
- Vercel is the build, preview, and production hosting platform.
- The private templates remain on Jacky’s local machine and are never uploaded to GitHub or Vercel.
- The Next.js application should live at the Git repository root so Vercel does not require a custom Root Directory.
- Use standard Vercel Next.js deployment. Do not configure `output: "export"` unless a future hosting decision explicitly requires a static export.

### 24.2 Mandatory deployment flow

Every site change must follow this sequence:

```text
Feature branch
→ push branch to GitHub
→ open or update a pull request
→ Vercel creates a preview deployment
→ review content, layout, accessibility, links, and mobile behavior
→ required checks pass
→ merge into main
→ Vercel creates the production deployment
```

Direct production work on `main` is not allowed. Do not use a Vercel production deployment as the first place to review a change.

### 24.3 Branch and repository rules

- `main` is the only production branch.
- Protect `main` against direct pushes.
- Require a pull request before merging.
- Require successful build, type-check, lint, and automated-test checks.
- Require the Vercel preview to be reviewed before merge.
- Keep commits focused and use descriptive messages.
- Delete merged feature branches when no longer needed.
- Do not commit `.env` files, private source assets, template files, or credentials.
- Commit exactly one package-manager lockfile.

### 24.4 Vercel configuration

- Framework preset: Next.js
- Root Directory: repository root
- Production branch: `main`
- Install command: use the package-manager default
- Build command: `next build` or the package script `npm run build`
- Output directory: use the Next.js default; do not override it
- Node.js: use one supported LTS version consistently in local development and Vercel
- Preview deployments: enabled for pull requests
- Production deployment: triggered only by merges to `main`

Use Vercel environment variables for any future secrets. Public values such as the canonical site URL may use a clearly named variable, for example:

```text
NEXT_PUBLIC_SITE_URL=https://approved-production-domain.example
```

Never place secrets in a variable prefixed with `NEXT_PUBLIC_`.

### 24.5 Domain and release policy

- Build and review initially on the Vercel project URL.
- Connect the custom domain only after the launch acceptance criteria pass.
- Configure the canonical URL to match the final production domain.
- Confirm the `www`/apex redirect decision, HTTPS, sitemap, robots, and social-sharing previews after the domain is connected.
- Keep Vercel deployment history available as the normal rollback path.
- If a production issue appears, prefer rolling back to the last verified deployment and fixing forward through a new feature branch and pull request.

---

## 25. Implementation phases

### Phase 0 — Content and evidence inventory

- Confirm preferred professional name
- Confirm title and target roles
- Confirm Art Practice URL
- Obtain final résumé PDF
- Collect project roles, dates, collaborators, and status
- Audit Paviqo, Bio Union, and Artpresso claims
- Sort assets by provenance
- Identify missing case-study evidence

**Exit criterion:** No featured card depends on invented content.

### Phase 1 — Foundation

- Create the clean standalone production repository
- Keep both templates in a separate private local reference directory
- Add defensive template/ZIP exclusions to `.gitignore`
- Audit the tracked-file list before the first GitHub push
- Create production Next.js app
- Establish tokens, fonts, metadata defaults, layout, header, footer, and skip link
- Configure TypeScript, linting, image optimization, and tests

**Exit criterion:** Clean production build with no content pages yet.

### Phase 2 — Homepage

- Implement hero
- Add three featured projects
- Add capabilities
- Add career journey
- Add About preview
- Add contact CTA
- Add responsive and reduced-motion behavior

**Exit criterion:** Recruiter can understand role, value, and flagship work in under 30 seconds.

### Phase 3 — Work index

- Implement data model
- Add all ready projects
- Add accessible query-backed filters
- Implement project cards and empty states
- Add Work metadata

**Exit criterion:** Projects can be added by editing data/content rather than layout code.

### Phase 4 — Case studies

- Build shared case-study modules
- Publish Artpresso first as the smallest complete case study
- Publish Bio Union with provenance labels and retrospective
- Publish Paviqo with verified current status and no unsupported metrics

**Exit criterion:** All three case studies clearly identify problem, role, approach, evidence, outcome/status, and reflection.

### Phase 5 — About and Experience

- Create concise professional narrative
- Add experience timeline
- Explain founder and teaching roles
- Link art practice without allowing it to dominate hiring content

**Exit criterion:** Career progression reads as intentional and coherent.

### Phase 6 — Quality and launch

- Replace all placeholders
- Optimize images
- Run accessibility checks
- Test navigation, filters, external links, résumé download, metadata, and 404s
- Validate analytics and privacy choice
- Push the release branch and review its Vercel preview deployment
- Conduct recruiter-style five-minute review
- Merge into protected `main` only after required checks and preview review pass
- Verify the resulting Vercel production deployment

**Exit criterion:** Acceptance criteria and launch checklist are complete.

---

## 26. Acceptance criteria

### Content

- Home clearly states Jacky’s role, location, value proposition, and opportunity focus.
- Paviqo, Bio Union, and Artpresso are the first three featured projects.
- Every featured project identifies Jacky’s actual role.
- No unsupported metrics, clients, testimonials, or medical/product claims appear.
- Art Practice is visible in the main navigation and clearly external.
- Résumé is downloadable from the header and footer or contact area.

### Information architecture

- Home, Work, About, Experience, and all three case-study routes function.
- Work filters match the approved five categories.
- Each case study follows the shared architecture.
- No navigation item points to a missing section or placeholder anchor.

### Visual design

- Template 1’s restrained editorial hierarchy is recognizable as the structural influence.
- Template 2’s influence is limited to typography, framing, borders, selected dark surfaces, and subtle interaction.
- Orange has been replaced by the approved pink-forward system.
- Project work remains visually dominant over the site theme.

### Responsive design

- No horizontal page overflow at 320 px.
- Header and navigation work at all target widths.
- Cards display as three/two/one columns only where content remains readable.
- Hero and case studies remain coherent at 200% zoom.
- Touch targets are at least 44 × 44 px.

### Accessibility

- Automated scans report no serious or critical violations.
- Site is fully keyboard operable.
- Visible focus appears on all interactive elements.
- Reduced-motion mode removes nonessential movement.
- Color contrast meets WCAG 2.2 AA.
- Images and diagrams have appropriate alternatives.
- Mobile menu exposes correct state and focus behavior.

### SEO

- Every public route has a unique title and description.
- Canonical URLs, sitemap, robots, Open Graph, and social images are present.
- Structured data contains only factual information.
- Core project content is server-rendered and crawlable.

### Performance and engineering

- Production build passes without ignored TypeScript errors.
- Image optimization is enabled.
- No raw placeholder images or unused remote Unsplash assets remain.
- No simulated timers or random status updates run.
- Client JavaScript is limited to interactive islands.
- No duplicate global stylesheet remains.
- No unused bulk UI dependency set remains.
- Core Web Vitals targets are met or documented with a remediation plan.

### Repository and deployment

- The public Git history contains no template source, template ZIP, template license file, private artwork source, secret, or environment file.
- The production Next.js application is at the Git repository root.
- `main` is protected from direct pushes.
- Pull requests receive Vercel preview deployments.
- Build, type-check, lint, and test checks pass before merge.
- Production deployments occur only from `main`.
- The reviewed pull-request preview corresponds to the code merged into production.

---

## 27. Launch checklist

### Identity and copy

- [ ] Preferred display name confirmed
- [ ] Professional title confirmed
- [ ] Toronto location wording confirmed
- [ ] Hero copy approved
- [ ] Opportunity statement approved
- [ ] Founder titles match résumé and LinkedIn truthfully
- [ ] Grammar and Canadian English reviewed

### Projects

- [ ] Paviqo role, status, claims, and live link verified
- [ ] Bio Union dates, collaborators, archived site, and health claims verified
- [ ] Artpresso logic, role, status, and live link verified
- [ ] Every visual has provenance recorded
- [ ] AI-assisted/reconstructed captions reviewed
- [ ] No confidential material is exposed
- [ ] No placeholder metric remains

### Assets

- [ ] Final portrait licensed and optimized
- [ ] Responsive image sizes generated
- [ ] Alt text reviewed in context
- [ ] Social sharing image exported
- [ ] Favicon and Apple icon replaced
- [ ] Résumé PDF current, accessible, and correctly named
- [ ] PDF metadata does not contain unwanted personal data

### Navigation and functionality

- [ ] All internal links pass
- [ ] Art Practice URL is correct and external behavior is announced
- [ ] LinkedIn and email links work
- [ ] Résumé downloads successfully
- [ ] Filters persist in the URL
- [ ] Mobile menu works with keyboard, touch, and Escape
- [ ] 404 page exists
- [ ] Scroll-to-top works without stealing focus

### Accessibility

- [ ] Skip link works
- [ ] Heading hierarchy checked
- [ ] Keyboard-only test complete
- [ ] VoiceOver smoke test complete
- [ ] Reduced-motion test complete
- [ ] 200% zoom test complete
- [ ] Contrast test complete
- [ ] Axe/Lighthouse issues resolved

### SEO and analytics

- [ ] Production domain and canonical URL configured
- [ ] Metadata unique for each route
- [ ] Sitemap returns all intended routes
- [ ] Robots behavior confirmed
- [ ] Open Graph previews checked
- [ ] Structured data validated
- [ ] Analytics choice documented
- [ ] No analytics fire in preview if that would pollute production data

### Performance and release

- [ ] Public Git tracked-file inventory contains no template source or ZIP archives
- [ ] Public Git history has never contained private template material
- [ ] `.gitignore` includes defensive template, ZIP, environment, and local-analysis exclusions
- [ ] GitHub `main` branch protection is enabled
- [ ] Direct pushes to `main` are blocked
- [ ] Required pull-request checks are configured
- [ ] Vercel preview deployment reviewed from the release pull request
- [ ] Type check passes
- [ ] Lint passes
- [ ] Tests pass
- [ ] Production build passes
- [ ] No build errors are ignored
- [ ] Image optimization enabled
- [ ] Mobile Lighthouse run reviewed
- [ ] Broken-link scan passes
- [ ] Preview reviewed on iPhone Safari, Android Chrome, desktop Chrome, Safari, and Firefox
- [ ] DNS, HTTPS, and redirect behavior verified
- [ ] Rollback/deployment history available
- [ ] Release pull request merged into `main` only after approval
- [ ] Vercel production deployment verified after merge

---

## 28. Final product principle

The portfolio should not try to prove that Jacky has done everything. It should make three things unmistakable:

1. He can understand and frame complex product problems.
2. He can connect design, technology, and business across digital and physical systems.
3. His multidisciplinary path is an advantage supported by real work, honest evidence, and thoughtful reflection.

The interface should reinforce that story quietly. Template 1 supplies the clarity; Template 2 supplies a controlled edge. Jacky’s work supplies the credibility.
