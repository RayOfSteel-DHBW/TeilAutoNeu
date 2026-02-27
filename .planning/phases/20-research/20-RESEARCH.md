# Phase 20: Research — Research

**Researched:** 2026-02-27
**Domain:** Visual design research — student branch UI patterns, old content documents, v1.1 site analysis, design direction rationale framework
**Confidence:** HIGH

---

## Summary

Phase 20 is the gateway to v1.2 ClaudesDesigns. Its entire output feeds into Phases 21, 22, and 23, which each implement a complete 8-page site on a separate git branch. The research task is investigative and documentary — no code is written; only two documents are produced: a pattern/content inspiration catalogue (Plan 01) and three design direction rationales (Plan 02).

The key finding from source investigation is a significant branch availability gap: the priority student branches named in RES-01 (`Rainer-4-V2`, `Rainer3-akkordeon`) do not exist as git branches in this repository. The only student code available is in `references/old/student-project/TA/TA_Website/` (committed as files into the `dev/studi-version-updated` branch, accessible via `git show`). This is still rich inspiration material — the full HTML/CSS source with distinct CSS design tokens, parallax hero, clip-path hamburger animation, and orientation-based responsive breakpoints. Plan 01 should catalogue this material thoroughly and treat it as the primary "student branch" source.

The old site (`references/old/website_alt/`) and owner document EXTRACTED.md are fully accessible and contain strong content enhancement opportunities — particularly specific benefit framings, the cost comparison calculator data (401€/month savings claim with worked example), and historical wording like "Das Auto auf Abruf" and "Anrufen, fahren und sparen." These require careful verification against PROJECT.md before use, but several angles remain unused in v1.1.

The current v1.1 site uses a well-defined visual identity: green/white Tailwind palette (`#0f5f3c` primary, `#f4f9f6` surface), Source Sans 3 body + Space Grotesk display, rounded-3xl cards on a light surface background, and a conventional centered-column layout. Each design direction must feel distinctly different from this. Three credible directions are identifiable from the source material that can be achieved with HTML + Tailwind CSS only, require no custom illustrations, and work within the phone-only / membership-gate conversion model.

**Primary recommendation:** Execute Plan 01 (inspiration catalogue) from the available source material — the student reference in `references/old/student-project/`, the old site HTML files, and EXTRACTED.md. Then execute Plan 02 (design direction rationales) drawing on that catalogue plus the v1.1 visual identity documented here as a contrast baseline. Downstream phases (21-23) need hex-level specificity on color, named Google Fonts, and layout approach — the rationale document must be that concrete.

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| RES-01 | Study student project design branches (priority: `student/Rainer-4-V2`, `student/Rainer3-akkordeon`; also: `student/combine`, `student/v3`, `student/tam-nav`, `student/mobile-wireframe`) as UI design inspiration (not replication) | Named branches do not exist in this repo. Available substitute: `references/old/student-project/TA/TA_Website/` — full HTML/CSS source accessible via `git show dev/studi-version-updated:references/...`. This IS the student project source and provides the same inspiration value. Document the UI patterns from this material. |
| RES-02 | Study old site (`references/old/website_alt/`) and owner content documents (`references/old/markdown/`) as content enhancement source (not trusted as facts — verify against PROJECT.md) | Old site HTML files exist on `dev/studi-version-updated` branch and as references. Owner markdown content is synthesized in `.planning/sources/references/EXTRACTED.md`. Both are fully accessible. Key content opportunities identified — see Architecture Patterns section. |
| RES-03 | Document design direction rationale for each of the 3 concepts before implementation | Rationale must be written in Plan 02, consuming inspiration catalogue from Plan 01. Each rationale needs: visual concept (one-sentence), type+color (Google Fonts + hex values), layout philosophy, conversion strategy for Simone (Zweitwagen), and differentiation from v1.1 and other two directions. |
</phase_requirements>

---

## Standard Stack

### Core (no changes — this phase produces documents, not code)
| Item | Version/Source | Purpose |
|------|---------------|---------|
| Tera templates | existing | Site build — output format for Phases 21-23 |
| Tailwind CSS v4 | ^4.1.18 | Styling system — all design directions must use this |
| Google Fonts | CDN | Font sourcing — free, German character support required |
| HTML + static files | existing | Deployment target — no SPA, no server runtime |

### Phase 20 Artifacts (documents produced, not installed)
| Artifact | Location | Consumed By |
|----------|----------|-------------|
| 20-INSPIRATION-NOTES.md | `.planning/phases/20-research/` | Plan 02 (design directions) |
| 20-DESIGN-DIRECTIONS.md | `.planning/phases/20-research/` | Phases 21, 22, 23 executors |

### No New Dependencies
Phase 20 produces documentation only. All tooling for Phases 21-23 already exists in the repo (`site/` build system, Playwright/Puppeteer MCP for visual audit).

---

## Architecture Patterns

### Source Material Availability

#### Student Branch Source (RES-01)
The priority branches named in REQUIREMENTS.md (`student/Rainer-4-V2`, `student/Rainer3-akkordeon`) are NOT present as git branches. Repository branches are:
- `main` — current production (v1.1)
- `dev/studi-version-updated` — contains student project files as committed references
- `gsd/v1.0-milestone`, `gsd/v1.1-visual-fixes` — milestone branches (completed work)

**Available substitute:** `references/old/student-project/TA/TA_Website/` committed into `dev/studi-version-updated`. Access via:
```bash
git show dev/studi-version-updated:references/old/student-project/TA/TA_Website/src/index.html
git show dev/studi-version-updated:references/old/student-project/TA/TA_Website/src/base.css
git show dev/studi-version-updated:references/old/student-project/TA/TA_Website/src/index.css
# etc. for all pages: preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, nachhaltig
```

Also: `site/src/` on `dev/studi-version-updated` contains the v1.0 initial version before GSD rewrite — another reference point.

#### Old Site Source (RES-02 — Part A)
Old website HTML files (late-1990s frame-based site) available in:
- `references/old/website_alt/` — original HTML files on `dev/studi-version-updated`
  - `vorteil.html` — Benefits page (most content-rich for messaging)
  - `info.htm` — General carsharing info page (~3600px height, many arguments)
  - `funktion.htm` — How it works
  - `kosten.htm` — Pricing with 2023 rates
  - `preisver.htm` — Cost comparison (401€/month savings claim with worked example)
  - `stellpl.htm` — Parking locations + expansion plans
  - `auto.htm` — Fleet vehicles
  - `index.htm` — Splash page with original taglines

Access via: `git show dev/studi-version-updated:references/old/website_alt/{filename}`

#### Owner Content Documents (RES-02 — Part B)
Synthesized in `.planning/sources/references/EXTRACTED.md` (fully readable as a file). Key documents covered:
- `InputStartseite.md` — Owner's homepage content vision
- `Nutzungshandbuch_2022_A5.md` — Full operational handbook
- `AW_Teilauto_Website.md` — Email about website direction + design refs (visiticeland.com, nike.com)
- `Das E-Auto im Carsharing-Betrieb.md` — EV talking points for Mokka E
- `Tarife.xml` — Complete tariff data

### Key Student Branch UI Patterns (catalogued for Plan 01)

The student project uses plain CSS (no Tailwind), providing distinct design signals:

**Design token:** `--accent: hsl(195, 53%, 79%)` — a light steel blue, NOT green. This was the student's primary color.

**Hero treatment:** Fixed parallax background (`bergrutsch.jpg`, landscape photo), `backdrop-filter: blur(10px)` frosted glass effect on content overlay. Logo inverted white. 25vh margin-top before content. The content area has `background-color: rgba(255,255,255,0.2)` — semi-transparent.

**Benefits section:** Three vertical blocks with `<span class="spacer">` dividers using `border: 1px solid lightgray` centered lines. NOT cards — plain article blocks.

**Navigation:**
- Desktop: sticky bar with CSS clip-path triangle as active indicator
- Mobile: hamburger opens full-viewport overlay with `clip-path: xywh(0 0 100% 0%)` → `xywh(0 0 100% 100%)` animation (no JS library)
- Accent color background for mobile menu

**Typography:** Montserrat (Google Fonts, 100-900 weights). Body font-size: `large`. Heading h4 for section headings (not h2). Deliberately flat heading hierarchy.

**Layout rhythm:** `main { padding: 2rem 10% }` on portrait, `2rem 20%` on landscape (uses orientation media queries not width breakpoints, except nav at 800px). `main section { margin: 5rem 0 }` between sections.

**Component: Accordion** — `max-height` CSS transition for expand/collapse. Minimal markup. No icons.

**Component: Parking map** — MapLibre GL JS with color-coded markers: red (active vehicle 1), blue (active vehicle 2), gray (planned). Popup on hover.

**Component: Vehicle cards** — `simple-list-layout` flex column/row depending on orientation. Separator lines, not card borders.

**Interaction:** Parallax, hover transitions, clip-path hamburger animation. Smooth and cinematic compared to v1.1's more utilitarian feel.

**What to carry forward as inspiration (not copy):**
- Frosted glass hero with background imagery
- Orientation-query responsive approach as an alternative to width breakpoints
- Minimal separator-style sections (not cards) for some content areas
- Full-viewport mobile nav overlay

**What to avoid:**
- Image assets (all HIGH/MEDIUM copyright risk)
- Exact clip-path values (UNLICENSED code)
- `hsl(195, 53%, 79%)` exactly (too similar to reproduce without copying spirit)

### Key Content Enhancement Opportunities (for Plan 01)

From old site and EXTRACTED.md — verified against PROJECT.md before noting:

**Strong verified messaging angles not used in v1.1:**
1. "Das Auto auf Abruf" — old site tagline. Snappier than current "Die sparsame Art (k)ein Auto zu haben"
2. "Anrufen, fahren und sparen." — from old site index.htm. Three-word CTA rhythm, verified.
3. "Schneller Einstieg und Ausstieg möglich" — from old CTA. Good for membership gate messaging.
4. Cost comparison framing: owner docs show 401€/month savings vs. private car. The methodology exists (preisver.htm) but requires owner validation of current figures before stating specific numbers. Use as structural angle ("hundreds of euros per month"), not as specific claim.
5. "Wer mit seinem Wagen weniger als 10.000 Kilometer pro Jahr fährt, kommt mit CarSharing billiger weg." — from info.htm, Münchner Umwelt-Institut study. UNVERIFIED — flag but do not use as fact.
6. "durchschnittlich wird ein Privatwagen in Deutschland nur eine Stunde am Tag gefahren. Die übrigen 23 Stunden steht er auf dem Parkplatz" — classic carsharing argument, widely cited. Cross-check before use — LOW confidence from this source alone.
7. Expansion: "Langfristig sollen Talheim, Öschingen sowie umliegende Gemeinden..." — from stellpl.htm. Valid per PROJECT.md (Belsen is next).
8. "Machen Sie mit — werden Sie Mitglied! Schneller Einstieg und Ausstieg möglich." — membership framing from old site.
9. EV talking points for Mokka E: "keine Tankanfälle", charging card included, WLTP 325km range. From `Das E-Auto im Carsharing-Betrieb.md`.
10. "Fuhrpark-Outsourcing — CarSharing-Firmenwagen" — business customer angle from info.htm.

**Design references from owner email (AW_Teilauto_Website.md):**
- Owner mentioned visiticeland.com and nike.com as visual references — large hero imagery, scroll-based content reveal, modern/minimal aesthetic.
- "Tendenz bisher zu ner großen Startseite mit Hintergrundbild (entweder irgendwas stilvolles/minimalistisches Muster was man umsonst kriegt oder n Naturbild von der Gegend)" — owner preference for nature imagery or minimal pattern hero.
- "Über den Start kann man dann rausscrollemen woraufhin einzelne Content Boxen kommen" — scroll-reveal content pattern.

**UNVERIFIED content — do NOT use without owner confirmation:**
- Specific savings percentages (X% cheaper than Mietwagen, Y% cheaper than Zweitwagen) — placeholders in v1.1 for a reason
- Exact booking fee (0,75€ vs 0,77€ discrepancy in source docs)
- Night hours definition (0:00-6:00, 0:00-7:00, or 0:00-8:00 — three different values in source docs)
- Specific km savings statistics from 1994/1998 Cologne/RWI studies — too dated

### v1.1 Visual Identity (contrast baseline for Plan 02)

Plan 02 must document what v1.1 looks like so each direction clearly differs. Key facts:

**Color system:**
- `brand-primary: #0f5f3c` (dark forest green)
- `brand-accent: #2f8f5b` (mid green)
- `brand-muted: #dcebe3` (pale green, used for hover states)
- `brand-surface: #f4f9f6` (very light green-white page background)
- `brand-ink: #0f2d1f` (near-black green for text)

**Typography:**
- Body: Source Sans 3 (Google Fonts, 400/500/600/700)
- Display/headings: Space Grotesk (Google Fonts, 500/600/700)
- Heading sizes: clamp-based fluid scaling
- Letter-spacing: `-0.01em` on headings

**Layout:**
- Max-width: `max-w-6xl` (72rem) container via header; main content `max-w-3xl` for text
- Grid: `md:grid-cols-2` and `md:grid-cols-3` for card grids
- Card style: `rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm`
- Hero: centered column, full viewport height, no background image, logo + h1 + two CTA buttons
- Nav: horizontal flex bar with active-page pill highlight; hamburger expands inline on mobile (max-height transition)
- Section spacing: `space-y-10` within `section`, `mt-12` between sections
- Page background: `bg-brand-surface` (#f4f9f6) — pale green, not white

**Component patterns:**
- Cards: white bg on pale-green surface, 20% primary border, 3xl rounding, subtle shadow
- Buttons: `rounded-full bg-brand-primary px-6 py-3 text-white` (filled) or outline variant
- CTA block: centered, larger phone number in brand-primary color
- Accordion: standard FAQ format on homepage

**Overall character:** Professional, calm, nature-inspired. Conventional layout — nothing unexpected in the page structure. Clean but not visually bold. Works but could feel more distinctive and conversion-driven.

### Design Direction Rationale Framework (for Plan 02)

Each direction in 20-DESIGN-DIRECTIONS.md needs this specificity to allow a Phase 21/22/23 executor to implement without creative decisions:

1. **One-sentence creative brief** — what is this direction's personality?
2. **Google Fonts pair** — exact font names, weights, and which is body vs. display. Must support German umlauts (ä, ö, ü, ß). Verified free fonts: Inter, Plus Jakarta Sans, Outfit, Sora, DM Sans, Nunito, Figtree — all suitable. Raleway, Josefin Sans — suitable for headings. Playfair Display — serif option.
3. **Color palette** — 5-6 hex values with semantic names (primary, accent, surface, text, muted, CTA). No placeholder names.
4. **Hero concept** — exact description of what the homepage hero looks like at desktop. Background approach (solid, gradient, pattern, or image-ready slot). What the h1 says (or its tone). Where the CTA buttons appear.
5. **Card/section style** — border style, corner radius, shadow, background color, spacing. Enough to derive consistent CSS without invention.
6. **Nav treatment** — sticky vs. solid, desktop layout, mobile approach.
7. **Conversion hooks** — where the membership gate message appears, how the phone number is displayed, what the call-to-action copy tone is.
8. **What makes this unmistakably different** from v1.1 and the other two directions.

Three achievable archetypes worth exploring (not the only options, but grounded in source material):

**Archetype A — "Newspaper Clarity":** High typographic contrast, editorial grid, serif headings, muted warm neutral palette. Inspired by the old site's text-heavy information density but modernized. Feels authoritative and information-rich. Differentiator: serif headings, strong typographic hierarchy, very different from green Tailwind aesthetic.

**Archetype B — "Nordic Utility":** Ultra-minimal, large whitespace, monospaced or geometric sans headline, accent color as a single bold signal (could be amber, slate, or teal — not green). Inspired by visiticeland.com reference from owner email. Feels clean and confident. Differentiator: near-white or warm gray palette, single accent, extreme negative space.

**Archetype C — "Warm Local":** Earthy tones (terracotta, ochre, warm sand), friendly rounded typography, hero with gentle gradient or abstract organic background pattern. Emphasizes the personal/local/community angle ("Kein Callcenter — Sie sprechen direkt mit uns"). Differentiator: warm palette completely different from current green; rounded, approachable feel.

Note: These archetypes are starting hypotheses for Plan 02 to refine, not prescriptions. Plan 02 should refine, rename, and specify each based on the actual INSPIRATION-NOTES.md content.

### Project Constraints Applying to All Three Directions

From PROJECT.md (must be listed in 20-DESIGN-DIRECTIONS.md "Shared Constraints" section):

1. **Tech stack:** HTML + Tailwind CSS only. No SPA, no CMS, no server runtime. npm build pipeline with PowerShell scripts.
2. **Tailwind version:** v4 (`@tailwindcss/cli ^4.1.18`) — uses `@theme` directive in tailwind.css, not config-file theming.
3. **Font requirement:** Google Fonts CDN, full German character support (ä, ö, ü, ß).
4. **8 pages, fixed:** home, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz. No adding or removing pages.
5. **Phone CTA only:** 07473-922202. No email, no forms, no booking system.
6. **Membership gate:** Must communicate early that this is membership-based (3-month minimum), not one-time rental.
7. **Content accuracy:** No invented facts. Snappier wording yes, new claims no.
8. **Zweitwagen persona primary:** Simone — practical daily need for second car. Homepage hero must speak to her use case.
9. **Responsive:** 375px (mobile), 768px (tablet), 1280px+ (desktop). Mobile-first.
10. **Copyright:** No student project images. No stock images without license. CSS/SVG decorations only.
11. **German language:** Sie-Ansprache, correct umlauts, no poverty signals, Sachlich+freundlich tone.
12. **Legal pages:** impressum.html and datenschutz.html must remain intact — design must accommodate their text-heavy content.
13. **Pricing data:** pricing.json drives pricing.js — price display is JS-rendered. All three designs must preserve this JS data pattern.
14. **MapLibre map:** Must remain on fahrzeuge.html — designs must accommodate a 420-520px tall map container.
15. **Tailwind CSS v4 `@theme` syntax:** New `@theme` block in tailwind.css rather than `tailwind.config.js` for color tokens. Design directions specify hex values; implementer creates the `@theme` block.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font loading | Custom @font-face | Google Fonts CDN link | Already established pattern; German support guaranteed |
| Map component | Custom map | MapLibre GL JS (existing pattern) | Established in v1.0, complex to replace |
| Pricing display | Inline HTML tables | pricing.js + pricing.json (existing pattern) | Owner updates pricing via JSON; must preserve |
| Tailwind config | tailwind.config.js color tokens | `@theme` block in tailwind.css (v4 pattern) | v4 uses CSS-native theming, not JS config |
| Mobile nav | Custom JS | CSS-only peer/aria pattern (existing) | Already works with keyboard a11y |
| Build | Webpack/Vite | PowerShell + npm scripts (existing) | Zero npm runtime deps; maintain simplicity |

---

## Common Pitfalls

### Pitfall 1: Trying to access named student branches that don't exist
**What goes wrong:** Running `git checkout student/Rainer-4-V2` fails; executor wastes time debugging.
**Why it happens:** REQUIREMENTS.md names branches that were never created in this repository.
**How to avoid:** Use `references/old/student-project/TA/TA_Website/` via `git show dev/studi-version-updated:references/...` — this IS the student project source. Document this workaround in Plan 01's execution instructions.

### Pitfall 2: Proposing a direction that can't be distinguished from v1.1
**What goes wrong:** One of the three directions is "green palette, card layout" — essentially v1.1 with tweaks.
**Why it happens:** Green/nature is an obvious choice for carsharing; v1.1 already occupies that space.
**How to avoid:** The differentiation matrix in Plan 02 must show all three directions AND v1.1 as four distinct rows. Any direction that shares both color family AND card style AND layout approach with v1.1 needs revision.

### Pitfall 3: Proposing a direction that requires custom illustrations or photography
**What goes wrong:** Direction rationale says "hero with beautiful local Mössingen landscape photo" — but owner hasn't supplied photos and copyright requirements prevent stock photos.
**Why it happens:** Natural impulse for a travel/lifestyle look.
**How to avoid:** All background imagery must be CSS/SVG/gradient only in v1.2 (owner photos remain pending). State this explicitly in Shared Constraints in Plan 02.

### Pitfall 4: Underspecifying the design direction
**What goes wrong:** Direction says "minimal and clean with muted tones" — executor in Phase 21 still has to make all the actual decisions (what font? what hex? what border style?).
**Why it happens:** Rationale documents are easy to write at a vague level.
**How to avoid:** Each direction in Plan 02 must include: specific Google Font names with weights, hex color values (not descriptions), corner-radius convention, shadow approach, h1 size range, whether cards are used or not. Enough to open a text editor and start writing CSS.

### Pitfall 5: Content invention in direction rationales
**What goes wrong:** A direction's copy examples include invented statistics or capabilities.
**Why it happens:** Describing how a direction "would feel" naturally drifts into writing example copy that invents facts.
**How to avoid:** All copy examples in direction rationales must be grounded in content from EXTRACTED.md or CONSOLIDATED.md, or explicitly marked as "placeholder — replace with verified copy from existing source." Never invent facts about the business.

### Pitfall 6: Tailwind v4 vs v3 syntax confusion
**What goes wrong:** Direction rationale specifies `tailwind.config.js` token approach; executor uses `theme: { extend: { colors: {} } }` — doesn't work in v4.
**Why it happens:** v4 changed to CSS-native `@theme` block.
**How to avoid:** State explicitly in Shared Constraints that all directions use Tailwind v4 `@theme` in `tailwind.css`. Executor reads existing `site/src/tailwind.css` as the pattern.

---

## Code Examples

### Tailwind v4 theme configuration (from current tailwind.css)
```css
/* site/src/tailwind.css */
@import "tailwindcss";

@theme {
  --color-brand-primary: #0f5f3c;
  --color-brand-accent: #2f8f5b;
  --color-brand-muted: #dcebe3;
  --color-brand-surface: #f4f9f6;
  --color-brand-ink: #0f2d1f;
  --font-sans: "Source Sans 3", system-ui, sans-serif;
  --font-display: "Space Grotesk", "Source Sans 3", system-ui, sans-serif;
}
```
Each design direction replaces all values in this `@theme` block.

### Student project CSS design tokens
```css
/* references/old/student-project/TA/TA_Website/src/base.css */
:root {
    --accent: hsl(195, 53%, 79%);         /* steel blue */
    --accent-hover: hsl(195, 53%, 72%);
}
/* Font: Montserrat 100-900, all weights */
/* Layout: orientation-based media queries instead of width breakpoints */
/* Mobile nav: clip-path xywh() animation — UNLICENSED pattern, not copy */
```

### Student project hero pattern (CSS only, no image required)
```css
/* Semi-transparent frosted glass over fixed background */
.parallax-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url('img/bergrutsch.jpg') no-repeat center center;
    background-size: cover;
    z-index: -1;
}
#main-content {
    margin-top: 25vh;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
}
```
Inspiration: the frosted glass overlay technique. Do NOT reuse the bergrutsch.jpg image (copyright risk). Can adapt for CSS gradient or solid color background.

### Current v1.1 card pattern (contrast baseline)
```html
<!-- v1.1 card: white on pale-green surface, 3xl corners, 20% primary border -->
<div class="rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm">
  <h2 class="text-xl font-display">...</h2>
  <p class="mt-3 text-brand-ink/80">...</p>
</div>
```
Each design direction either uses a different card style OR replaces cards with a different layout pattern entirely.

### Build command
```bash
cd site && npm run build
# Runs: pwsh -NoLogo -NoProfile -ExecutionPolicy Bypass -File ./scripts/build-site.ps1 -Task build
```

---

## Open Questions

1. **Named student branches**
   - What we know: `student/Rainer-4-V2` and `student/Rainer3-akkordeon` are named in REQUIREMENTS.md but don't exist in the repo.
   - What's unclear: Whether they ever existed and were deleted, or were named aspirationally.
   - Recommendation: Treat `references/old/student-project/TA/TA_Website/` as the authoritative student source. Document this in Plan 01 as the workaround. Do not block on missing branches.

2. **Specificity level for design directions**
   - What we know: Plans 21-23 implement complete sites "without creative ambiguity."
   - What's unclear: How many layout decisions can be left to the implementer vs. must be specified in Plan 02.
   - Recommendation: Specify down to: font names + weights, full hex palette, card corner-radius convention (or "no cards"), hero background approach, nav layout style. Leave micro-decisions (exact padding values, number of cards) to the implementer.

3. **User review gate in Plan 02**
   - What we know: Plan 02 Task 2 is `type="checkpoint:human-verify" gate="blocking"` — user must approve directions before Phases 21-23 begin.
   - What's unclear: Nothing. This is correct — three complete site implementations should not start without user confirmation of direction rationales.
   - Recommendation: No change needed.

4. **Content copy for direction rationales**
   - What we know: Plan 02 asks for "conversion strategy" including copy tone — but the directions must not invent facts.
   - Recommendation: Direction rationales should include copy *tone* examples (e.g., "short declarative sentences, no dependent clauses") and approved wording from existing sources, clearly marked. Do not write fictional homepage headlines as authoritative copy.

---

## Validation Architecture

Nyquist validation is disabled (`workflow.nyquist_validation: false` in `.planning/config.json`). Skipping this section per instructions.

---

## Sources

### Primary (HIGH confidence — direct file reads)
- `C:\Dev\Repos\TeilAuto\.planning\PROJECT.md` — constraints, personas, key decisions
- `C:\Dev\Repos\TeilAuto\.planning\REQUIREMENTS.md` — v1.2 requirements including RES-01, RES-02, RES-03
- `C:\Dev\Repos\TeilAuto\.planning\ROADMAP.md` — phase descriptions and success criteria
- `C:\Dev\Repos\TeilAuto\.planning\STATE.md` — current project state
- `C:\Dev\Repos\TeilAuto\.planning\phases\20-research\20-01-PLAN.md` — Plan 01 task structure
- `C:\Dev\Repos\TeilAuto\.planning\phases\20-research\20-02-PLAN.md` — Plan 02 task structure
- `C:\Dev\Repos\TeilAuto\.planning\sources\student-project\ARCHITECTURE.md` — student project tech analysis
- `C:\Dev\Repos\TeilAuto\.planning\sources\student-project\CONTENT-INVENTORY.md` — student project page inventory
- `C:\Dev\Repos\TeilAuto\.planning\sources\student-project\COPYRIGHT-FLAGS.md` — copyright risk assessment
- `C:\Dev\Repos\TeilAuto\.planning\sources\old-site\ARCHITECTURE.md` — old site tech analysis
- `C:\Dev\Repos\TeilAuto\.planning\sources\old-site\CONTENT-INVENTORY.md` — old site content inventory
- `C:\Dev\Repos\TeilAuto\.planning\sources\references\EXTRACTED.md` — owner document synthesis
- `C:\Dev\Repos\TeilAuto\site\src\tailwind.css` — v4 theme tokens
- `C:\Dev\Repos\TeilAuto\site\src\base.css` — global CSS variables and v1.1 type scale
- `C:\Dev\Repos\TeilAuto\site\src\index.html` — current homepage (v1.1)
- `C:\Dev\Repos\TeilAuto\site\src\mitglied-werden.html` — membership page
- `C:\Dev\Repos\TeilAuto\site\src\preise.html` — pricing page
- `C:\Dev\Repos\TeilAuto\site\tailwind.config.js` — Tailwind v4 config
- `C:\Dev\Repos\TeilAuto\site\package.json` — build system
- `C:\Dev\Repos\TeilAuto\.planning\config.json` — GSD config (nyquist_validation: false)
- `git show dev/studi-version-updated:references/old/student-project/TA/TA_Website/src/base.css` — student CSS
- `git show dev/studi-version-updated:references/old/student-project/TA/TA_Website/src/index.css` — student CSS
- `git show dev/studi-version-updated:references/old/student-project/TA/TA_Website/src/index.html` — student HTML
- `git branch -a` — confirmed branch availability (named student branches do not exist)

### Secondary (MEDIUM confidence)
- `.planning/phases/15-site-wide-fixes/15-RESEARCH.md` — v1.1 card pattern and site structure
- `.planning/phases/16-homepage-content-rewrite/16-RESEARCH.md` — homepage card content rationale

---

## Metadata

**Confidence breakdown:**
- Source material availability: HIGH — directly verified via file reads and git commands
- v1.1 visual identity: HIGH — read directly from tailwind.css, base.css, and HTML templates
- Student branch gap (named branches missing): HIGH — confirmed via `git branch -a`
- Design direction archetypes: MEDIUM — reasonable hypotheses grounded in source material, Plan 02 should refine
- Content enhancement opportunities: HIGH (verified) / LOW (UNVERIFIED items flagged explicitly)

**Research date:** 2026-02-27
**Valid until:** 2026-03-27 (30 days — stable domain)
