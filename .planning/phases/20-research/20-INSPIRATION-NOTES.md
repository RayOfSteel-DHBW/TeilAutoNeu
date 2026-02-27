# Phase 20: Inspiration Notes Catalogue

**Created:** 2026-02-27
**Purpose:** Curated design signals and content angles for Plan 02 (design direction rationales) and Phases 21-23 (implementation). A Phase 21/22/23 executor reading only this file — without reading raw source files — should understand what visual patterns exist as inspiration, what content angles are available and their trust level, what the owner prefers stylistically, what v1.1 looks like (to avoid), and what constraints bind all directions.

**Source material read:**
- Student project CSS/HTML via `git show dev/studi-version-updated:references/old/student-project/TA/TA_Website/src/{file}`
- Old site HTML via `git show dev/studi-version-updated:references/old/website_alt/{file}`
- `.planning/sources/references/EXTRACTED.md`
- `.planning/sources/student-project/ARCHITECTURE.md`, `CONTENT-INVENTORY.md`, `COPYRIGHT-FLAGS.md`
- `.planning/sources/old-site/ARCHITECTURE.md`, `CONTENT-INVENTORY.md`
- `site/src/tailwind.css`, `site/src/base.css`

---

## Section 1: Student UI Patterns

Source: `references/old/student-project/TA/TA_Website/` (accessed via `dev/studi-version-updated` branch).
The student project uses plain CSS (no Tailwind), Montserrat font, and a steel-blue accent — not green.
License: UNLICENSED (`package.json`). Treat all patterns as inspiration only — no direct code reuse.

---

### Pattern 1: Steel-Blue Accent Color Palette

**Design token:** `--accent: hsl(195, 53%, 79%)` — a muted, desaturated light steel blue (rendered hex approximately `#9fd4e0`). Hover: `--accent-hover: hsl(195, 53%, 72%)` (approximately `#82c8d8`). No secondary colors defined; the accent handles nav backgrounds, button fills, and footer background uniformly.

**What makes it distinct from v1.1:** v1.1 uses dark forest green (`#0f5f3c`) as its primary. The student's palette is cool-toned and muted — feels airy and Scandinavian rather than nature-inspired. Neither dark nor high-contrast; relies on the accent for all brand color.

**Copyright status:** SAFE — `hsl(195, 53%, 79%)` is a CSS color value, not a copyable asset. Inspirational signal: consider a non-green single-accent palette. The exact hsl value should not be reused verbatim.

**Adaptation notes:** A direction could use a single muted cool accent (teal, slate-blue, warm amber) as the sole brand color — applied to nav, footer, and buttons — leaving all other surfaces white or very light gray. Tailwind v4 `@theme` implementation: define one `--color-brand-accent` and derive all uses from it with opacity modifiers.

---

### Pattern 2: Montserrat Typography with Flat Heading Hierarchy

**Typography:** Google Fonts — Montserrat, all weights 100-900, with italic. Body `font-size: large` (browser default ~18-20px). Section headings use `h4` (not h2 or h3) — a deliberately flat semantic hierarchy. No separate display font; Montserrat handles both body and headings.

**Key values:** `font-family: "Montserrat", serif; font-weight: 400; font-size: large`. Headings at h4 level — visually lighter than a traditional h2 hierarchy. Letter-spacing not specified (default); no `font-optical-sizing: manual` adjustments beyond default.

**What makes it distinct from v1.1:** v1.1 uses a two-font system (Source Sans 3 body + Space Grotesk display) with aggressive clamp-based fluid heading sizes. The student approach is single-font, understated — all weights come from the same family, creating harmony over contrast.

**Copyright status:** SAFE — Montserrat is SIL Open Font License 1.1, free for any use including commercial.

**Adaptation notes:** A direction could use a geometric sans (Montserrat, Plus Jakarta Sans, Outfit, or Sora) as a single-family system — body weight 400, headings at 600-700, all from one font. No display/body split needed. Google Fonts CDN. German umlaut support confirmed for Montserrat.

---

### Pattern 3: Fixed Parallax Hero with Frosted Glass Overlay

**Technique:** Fixed-position full-viewport background image (`position: fixed; width: 100%; height: 100%; background-size: cover; z-index: -1`). Main content begins at `margin-top: 25vh`. Content overlay uses `backdrop-filter: blur(10px); background-color: rgba(255,255,255,0.2)` — frosted glass effect letting the background blur through. Hero inner block: `height: 50vh`, centered flex column with logo and tagline. Tagline in white with `drop-shadow` filter for legibility over any background.

**What makes it distinct from v1.1:** v1.1 hero has no background image, no parallax, no blur — a solid `bg-brand-surface` column layout. The student hero is cinematic, scroll-anchored, and image-dependent. The frosted glass creates depth without a dark overlay.

**Copyright status:** RISKY (image-specific) / SAFE (technique). The `bergrutsch.jpg` image is HIGH copyright risk (unknown origin). However, the frosted glass technique itself — `backdrop-filter: blur()` over a fixed background — is a CSS standard and freely adaptable. Can be implemented with a CSS gradient or geometric SVG pattern background instead of a photograph.

**Adaptation notes:** A direction could implement frosted glass over a CSS gradient background (e.g., `background: linear-gradient(135deg, #1a3a2a, #2f6b4a)` or a geometric SVG pattern). No photo required. The scroll-into-content reveal pattern aligns with owner preferences (visiticeland.com / nike.com reference). Tailwind v4: `backdrop-blur-md` utility class, `bg-white/20` for semi-transparent overlay.

---

### Pattern 4: Orientation-Based Responsive Breakpoints

**Technique:** Primary responsive strategy uses `@media (orientation: portrait)` and `@media (orientation: landscape)` instead of width-based breakpoints — except for navigation which switches at `width < 800px`. Layout changes: portrait uses `padding: 2rem 10%` on main; landscape uses `padding: 2rem 20%`. `.simple-list-layout` flex direction switches from column (portrait) to row (landscape). Footer switches from column to row on landscape.

**What makes it distinct from v1.1:** v1.1 uses Tailwind's standard `sm:`, `md:`, `lg:` width breakpoints (mostly `md:` at 768px). Orientation queries target a completely different axis — a phone in landscape vs. portrait mode, not just screen width. Creates a distinct adaptation pattern, especially on tablets.

**Copyright status:** SAFE — CSS media query approach, not a copy of specific values.

**Adaptation notes:** Could be partially adopted as a supplement to width breakpoints for specific components (e.g., vehicle list, benefit columns). Not recommended as a full replacement for Tailwind's width-breakpoint system — hybrid approach is feasible.

---

### Pattern 5: Full-Viewport Mobile Navigation Overlay with Clip-Path Animation

**Technique:** Mobile hamburger (`width < 800px`) opens a full-screen nav overlay using CSS `clip-path` animation: closed state = `clip-path: xywh(0 0 100% 0%)` (zero height); open state = `clip-path: xywh(0 0 100% 100%)` (full height). Transition: `transition: clip-path 1s`. No JavaScript library — pure CSS + HTML `open` attribute toggle. Hamburger button itself uses `clip-path: polygon(0 0, 100% 0, 100% 100%)` triangle shape in the top-right corner. Desktop nav: sticky horizontal bar, active page gets downward-pointing triangle via `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, calc(50% + 10px) 100%, 50% 90%, calc(50% - 10px) 100%, 0% 100%)`.

**What makes it distinct from v1.1:** v1.1 uses inline max-height expansion for mobile nav (expands inline, not full-screen). No clip-path indicator on desktop active state. The student approach is more dramatic — full screen takeover on mobile.

**Copyright status:** RISKY (specific clip-path values are UNLICENSED code). The concept of full-viewport mobile overlay is generic. The specific `xywh()` clip-path values should not be copied verbatim (UNLICENSED project).

**Adaptation notes:** Full-viewport mobile nav is achievable in Tailwind with a fixed-positioned div + translate-y transition or scale transform. The CSS-only toggle pattern (v1.1 already uses `peer` + hidden checkbox approach). The key inspiration is the visual concept: full-screen overlay with accent background color, not the specific clip-path implementation.

---

### Pattern 6: Separator-Line Section Layout (No Cards)

**Technique:** Sections and benefit groups use `<span class="spacer">` dividers: on portrait, horizontal `border: 1px solid lightgray` centered line (`transform: scaleX(30%)`); on landscape, vertical line between columns. The `.simple-list-layout` utility uses CSS `::before` pseudo-element on `article+article` for separator: `background: lightgray; height: 2px; transform: scaleX(0.3)` (portrait) or `width: 2px; transform: scaleY(0.3)` (landscape). Articles have `padding: 1rem 0` (portrait) or `padding: 0 2rem` (landscape). No card borders, no shadows, no background fill.

**What makes it distinct from v1.1:** v1.1 uses `rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm` card pattern extensively. Cards create contained visual boxes. Separator-line layout is open and editorial — content breathes without enclosure. Fundamentally different spatial grammar.

**Copyright status:** SAFE — CSS layout pattern using standard pseudo-elements; separator approach is a general technique.

**Adaptation notes:** A direction could replace v1.1's card-heavy layout with an editorial separator approach: benefit sections as plain articles divided by thin gray lines, vehicle listings as flex rows separated by rules. Reduces visual weight, increases whitespace. In Tailwind: `divide-y divide-gray-200` for vertical separators, `divide-x divide-gray-200` for horizontal.

---

### Pattern 7: CSS Accordion (Max-Height Transition)

**Technique:** FAQ accordion uses `max-height: 0` → `max-height: [value]` CSS transition for expand/collapse. Minimal markup — no icon sprites, no JavaScript libraries. Uses vanilla JS inline `<script>` to toggle a class. `accordion.css` handles the transition; `accordion.html` template handles the markup structure. The accordion appearance is plain — no visual chrome, just a heading and collapsible content block.

**What makes it distinct from v1.1:** v1.1 also uses max-height accordion, but the student version is even more stripped — no chevron icon, no padding chrome, purely text-based. More editorial, less widget-like.

**Copyright status:** SAFE — max-height accordion technique is universal CSS; the specific code is UNLICENSED but the concept is standard.

**Adaptation notes:** All directions should retain the accordion for FAQ. The visual treatment can be adjusted per direction — some directions may add minimal icon indicators; others stay plain text. Tailwind: `overflow-hidden transition-all duration-300` on the content div.

---

### Pattern 8: Flex/Orientation Vehicle Display Layout

**Technique:** Vehicle cards use `.simple-list-layout` class — flex column (portrait) or row (landscape). Each vehicle is an `<article>` with `flex: 1` and separator lines between items (not card borders). Vehicle photos are contained with `contain: size` in a `<figure>` element. No card border, no rounded corners, no shadow. Just the image, spec text, and separator between vehicles.

**What makes it distinct from v1.1:** v1.1 vehicle display uses card pattern (`rounded-3xl border`). The student approach creates a magazine-style horizontal split view — vehicles sit side by side as equals with a dividing line, not as separate boxed units.

**Copyright status:** SAFE (layout technique) / RISKY (vehicle photos: `adam.png`, `mokka.png` are HIGH copyright risk — manufacturer press materials). Layout concept is safe; photos must not be reused.

**Adaptation notes:** Any direction could display vehicles as a two-column horizontal list with a dividing separator rather than individual cards. Vehicle images should be owner-provided actual photos or SVG/CSS placeholder. In Tailwind: `flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200`.

---

## Section 2: Content Enhancement Opportunities

These are messaging angles, taglines, and content angles sourced from the old site and owner documents. Each item has a verification status:
- **VERIFIED** — directly confirmed against PROJECT.md or EXTRACTED.md with no contradiction
- **PLAUSIBLE** — reasonable and consistent with known facts, but not independently confirmed
- **UNVERIFIED** — do not use as stated fact; may be usable as structural angle only

---

### Opportunity 1: "Das Auto auf Abruf"

**Source:** `references/old/website_alt/index.htm` — main tagline displayed on the splash page.
**Exact text:** "Das Auto auf Abruf"
**Verification status:** VERIFIED — directly from old site index.htm; consistent with service model in PROJECT.md.
**How it enhances v1.2:** This is snappier and more memorable than the current homepage tagline "Die sparsame Art (k)ein Auto zu haben." Five words, immediate clarity. Works as a sub-headline or hero secondary line. Particularly strong for the Zweitwagen persona (Simone) — "on demand" signals flexibility without commitment.
**Which page / what it replaces:** Homepage hero — could replace or complement the current tagline as a secondary headline or support line.

---

### Opportunity 2: "Anrufen, fahren und sparen."

**Source:** `references/old/website_alt/index.htm` — CTA line on the splash page.
**Exact text:** "Anrufen, fahren und sparen."
**Verification status:** VERIFIED — directly from old site index.htm; consistent with phone-only booking model.
**How it enhances v1.2:** Three-word verb rhythm (Anrufen, fahren, sparen) communicates the entire value proposition in one sentence. Works as a section heading for "how it works," a hero subheading, or a CTA block. Particularly strong because it mentions the phone action — aligning with v1.2's phone-CTA model.
**Which page / what it replaces:** Homepage CTA block or "how it works" section heading. Could replace "So geht's" as a catchier section intro.

---

### Opportunity 3: "Machen Sie mit — werden Sie Mitglied! Schneller Einstieg und Ausstieg möglich."

**Source:** `references/old/website_alt/index.htm` — CTA text on splash page.
**Exact text:** "Machen Sie mit — werden Sie Mitglied! Schneller Einstieg und Ausstieg möglich."
**Verification status:** VERIFIED — from old site; consistent with 3-month minimum + monthly cancellation after that (per EXTRACTED.md: "Mindestdauer der Mitgliedschaft 3 Monate. Danach ist eine monatliche Kündigung möglich.").
**How it enhances v1.2:** Addresses the membership gate concern directly and positively — not "this is membership-only" as a restriction, but "schneller Einstieg" as a benefit. Currently v1.1 communicates membership requirements somewhat defensively. This framing inverts it.
**Which page / what it replaces:** Membership gate messaging on homepage, and as the CTA intro on mitglied-werden.html. Replaces or strengthens the current "Mitglied werden" button label context.

---

### Opportunity 4: Cost Comparison Structural Angle (savings framing)

**Source:** `references/old/website_alt/preisver.htm` — "Mit teilAuto Sparen Sie 401,49 Euro im Monat gegenüber einem gleichwertigen Pkw."
**Exact text from source:** "Mit teilAuto Sparen Sie 401,49 Euro im Monat gegenüber einem gleichwertigen Pkw" — based on Opel Astra Caravan, usage scenario: 4x weekly shopping + 1 weekend trip/month. teilAuto cost: 158,33 EUR/month vs. private car 545,32 EUR/month (incl. deposit interest).
**Verification status:** UNVERIFIED as a specific figure — the 401,49 EUR figure is based on a 2023-era cost comparison using old tariff rates and a specific reference vehicle (Opel Astra Caravan 1.9 CDTi). Current tariff rates have changed. DO NOT cite the 401,49 EUR number as current fact.
**How it enhances v1.2:** The structural concept — show a monthly cost comparison of carsharing vs. owning a second car — is strong and usable. Can be presented as a qualitative framing ("Sparen Sie bis zu mehrere hundert Euro im Monat") without citing outdated specific numbers. The three-column table structure (Kosten | teilAuto | Eigenes Auto) is a valid page section template.
**Which page / what it replaces:** Preise page or homepage — a "Kostenvergleich" section with owner-validated current figures, presented as a general savings illustration rather than a specific claim.

---

### Opportunity 5: "Schneller Einstieg und Ausstieg möglich"

**Source:** `references/old/website_alt/index.htm`
**Exact text:** "Schneller Einstieg und Ausstieg möglich"
**Verification status:** VERIFIED — consistent with EXTRACTED.md: "Mindestdauer der Mitgliedschaft 3 Monate. Danach ist eine monatliche Kündigung möglich."
**How it enhances v1.2:** Addresses the barrier of perceived long-term commitment. The 3-month minimum is often a deterrent — "Schneller Ausstieg" rebuts this directly. Strong for the Zweitwagen persona who may be hesitant about locking in.
**Which page / what it replaces:** Homepage FAQ, membership page, or homepage membership gate callout. Pairs well with Opportunity 3.

---

### Opportunity 6: EV Talking Points for Opel Mokka E

**Source:** `references/old/markdown/Das E-Auto im Carsharing-Betrieb.md` (synthesized in EXTRACTED.md).
**Key points:**
- Electric motor, max 100 kW output
- WLTP range: 325 km
- Included EnBW mobility+ charging card/app for public charging
- Assist systems: Park & Go, Toter-Winkel-Warner (blind spot), Aktiver Spurhalte-Assistent, Automatischer Geschwindigkeit-Assistent, Rückfahrkamera, LED headlights
- Charging at home (3-phase) or public network
**Verification status:** VERIFIED — all specs confirmed across multiple source documents (EXTRACTED.md, auto.htm, fahrzeuge content). EnBW charging card is from owner document — confirmed.
**How it enhances v1.2:** v1.1 fahrzeuge page mentions the Mokka E but does not leverage the EV angle strongly. The "keine Tankanfälle" benefit (no refueling stops — charging handled via included card) is unused. For the Zweitwagen persona, the EV aspect is appealing — commute range, no fuel cost, included charging infrastructure.
**Which page / what it replaces:** fahrzeuge.html Mokka E section — adds EV-specific benefit copy. Also potential homepage feature (as a differentiator signal: "Auch elektrisch").

---

### Opportunity 7: "Fuhrpark-Outsourcing — CarSharing-Firmenwagen"

**Source:** `references/old/website_alt/info.htm` — business section heading and content.
**Exact text:** "Fuhrpark-Outsourcing — CarSharing-Firmenwagen" / "CarSharing übernimmt für Unternehmer und Firmen die Fuhrparkverwaltung zu Sondertarifen."
**Verification status:** PLAUSIBLE — consistent with geschaeftskunden page and EXTRACTED.md business customer contracts; "Sondertarife" reference is plausible but specific tariff difference not confirmed in current tariff data.
**How it enhances v1.2:** The "Fuhrpark-Outsourcing" framing is a stronger business angle than the current v1.1 geschaeftskunden page heading. Positions teilAuto as a fleet management alternative, not just car rental. Particularly relevant for small local businesses (Mössingen-area SMEs, Behörden).
**Which page / what it replaces:** geschaeftskunden.html — primary heading or intro paragraph. Current v1.1 heading is more generic; "Fuhrpark-Outsourcing" is more specific and differentiated.

---

### Opportunity 8: Expansion Plans (Belsen, Öschingen, Talheim)

**Source:** `references/old/website_alt/stellpl.htm` — "Langfristig sollen Talheim, Öschingen sowie umliegende Gemeinden in das Carsharingnetz mit aufgenommen werden." Also: `references/old/markdown/Ergänzung Handbuch Stellplatz.md` — Belsen location exists (Federstraße, currently unoccupied).
**Verification status:** VERIFIED — confirmed in PROJECT.md (Belsen is next expansion location). Öschingen and Talheim are long-term plans. Belsen has an existing parking slot (currently unoccupied per EXTRACTED.md: "Stellplatz Belsen: zur Zeit nicht belegt").
**How it enhances v1.2:** The expansion narrative is unused in v1.1. It signals growth, community coverage, and future relevance — important for potential members outside Mössingen center who might hesitate because parking is too far. The Belsen slot in particular can be featured as "coming soon" on fahrzeuge.html map.
**Which page / what it replaces:** fahrzeuge.html (map, expansion marker) and potentially a homepage callout ("Demnächst auch in Belsen"). Already planned in MapLibre map — Belsen marker should be shown as "geplant."

---

### Opportunity 9: "Wer mit seinem Wagen weniger als 10.000 Kilometer pro Jahr fährt..."

**Source:** `references/old/website_alt/info.htm` — "Wer mit seinem Wagen weniger als 10 000 Kilometer pro Jahr fährt, kommt mit CarSharing billiger weg." Attributed to Münchner Umwelt-Institut.
**Verification status:** UNVERIFIED — cited from a secondary source (old website citing a study), no direct study reference provided. The 10,000 km threshold is commonly cited in German carsharing marketing but cannot be attributed to a verified current source from the documents read.
**How it enhances v1.2:** Could be used as a structural angle ("Weniger als X km pro Jahr gefahren? Carsharing könnte günstiger sein.") without citing a specific study. Works as a qualifying question for potential members (Simone persona).
**Which page / what it replaces:** Homepage FAQ or preise page — a "Is carsharing right for me?" callout. Use as a framing device, not a cited fact.

---

### Opportunity 10: "23 Stunden steht er auf dem Parkplatz"

**Source:** `references/old/website_alt/info.htm` — "durchschnittlich wird ein Privatwagen in Deutschland nur eine Stunde am Tag gefahren. Die übrigen 23 Stunden steht er auf dem Parkplatz oder in der Garage."
**Verification status:** UNVERIFIED — widely cited carsharing statistic but no traceable source in the documents. Multiple studies reference this figure, but dates vary (early 2000s). Do not cite as a current statistic.
**How it enhances v1.2:** The "23 Stunden parkend" image is viscerally compelling — helps Simone understand why a second car is an inefficient asset. Could be used as visual rhetoric (infographic angle) without citing a specific study: "Ihr privates Auto steht durchschnittlich die meiste Zeit des Tages unbenutzt. Warum nicht teilen?"
**Which page / what it replaces:** Homepage benefits section or preise page intro — as a rhetorical hook, not a fact claim.

---

## Section 3: Owner Design Preferences

Source: `references/old/markdown/AW_ Teilauto Website .eml` (decoded base64 email from Ralf Stahl to Rainer Stahl, ca. early 2025), synthesized in EXTRACTED.md.

These preferences are directional, not binding requirements. They inform what the owner finds appealing visually.

---

### Preference 1: Large Hero with Background Image or Minimal Pattern

**Owner quote (translated, paraphrased from German):** "Tendenz bisher zu ner großen Startseite mit Hintergrundbild (entweder irgendwas stilvolles/minimalistisches Muster was man umsonst kriegt oder n Naturbild von der Gegend/Bild von der Olgahöhe runter, sowas in die Richtung). Prinzipiell wär sogar reinweiss wie bisher möglich nur dann müssen wir uns mehr anstrengen dass man nachher nen Unterschied zu vorher erkennt."

**Design signal:** The owner's primary instinct is a full-screen hero with either:
- A nature/local landscape photo (Olgahöhe view), OR
- A stylish minimal pattern (something free/available), OR
- Pure white — but acknowledged that white requires stronger differentiation effort

**Note for v1.2:** Real local photography is not yet available. All hero backgrounds must be CSS/SVG/gradient only for now. The pattern option is the most achievable (CSS geometric pattern or subtle gradient). The owner preference for a "large" hero (full-screen, impactful) is a clear signal.

---

### Preference 2: Scroll-Reveal Content Structure

**Owner quote (translated, paraphrased):** "Über den Start kann man dann rausscrollemen woraufhin einzelne Content Boxen kommen die 'Lust' auf den Content der einzelnen Unterseiten machen sollen und dorthin weiterleiten."

**Design signal:** After the hero, a scroll-based content reveal pattern — individual content boxes/cards that preview subpages and link to them. This is the "homepage as navigation" pattern used by sites like visiticeland.com.

**Implementation:** CSS scroll-triggered animations are possible with `@keyframes` + `IntersectionObserver`, but for v1.2 static/CSS-only constraint, a simpler staggered grid of teaser cards (no animation required) satisfies the intent. Each card summarizes a subpage and has a CTA link.

---

### Preference 3: visiticeland.com and nike.com Visual References

**Owner quote:** "Kannst dir vllt mal visiticeland.com zum Vergleich anschauen, so in die Richtung mein ich. Oder vllt nike.com"

**Design signal analysis:**
- **visiticeland.com** (at time of owner email): Large hero photography, bold type, strong color contrast, scroll-based content sections, minimal nav. Storytelling-forward approach.
- **nike.com**: Bold typography at large scale, high-contrast black/white with single brand accent, confident use of whitespace, product-forward layout.
- **Common thread:** Both are visually bold, use large type, don't over-explain, and make a strong first impression. Neither is timid or information-dense on the homepage.

**For v1.2:** These references support design directions that are visually assertive — large hero type, strong contrast, confident whitespace. NOT the current v1.1 aesthetic (calm, professional, modest green). The owner wants something that makes a visual statement.

---

### Preference 4: Direct Human Contact as Feature

**Signal from documents:** Multiple sources emphasize phone-based booking as a positive differentiator — "Kein Callcenter" — real people answer. The Nutzungshandbuch and InputStartseite both frame the phone-based model as personal service, not a limitation.

**Design signal:** At least one direction should foreground the human element — phone number displayed prominently, personal tone in copy, emphasis on "Sie sprechen direkt mit uns" as a local trust signal. This differentiates from faceless tech platforms.

---

## Section 4: v1.1 Contrast Baseline

Each design direction in Phases 21-23 must feel unmistakably different from v1.1. This baseline is documented here so direction rationales can explicitly state their differentiation.

**Source:** `site/src/tailwind.css`, `site/src/base.css`, current HTML templates (v1.1 as of February 2025 milestone).

---

### v1.1 Color System

Defined in `site/src/tailwind.css` `@theme` block:

| Token | Hex | Role |
|-------|-----|------|
| `brand-primary` | `#0f5f3c` | Dark forest green — buttons, headings, borders |
| `brand-accent` | `#2f8f5b` | Mid green — hover states, secondary buttons |
| `brand-muted` | `#dcebe3` | Pale green — hover backgrounds, muted surfaces |
| `brand-surface` | `#f4f9f6` | Very light green-white — page background |
| `brand-ink` | `#0f2d1f` | Near-black with green cast — body text |

**Color character:** Monochromatic green family. Cool, natural, calm. Calming but not visually bold. Every surface has a slight green tint.

---

### v1.1 Typography

| Role | Font | Weights | Source |
|------|------|---------|--------|
| Body | Source Sans 3 | 400, 500, 600, 700 | Google Fonts |
| Display/headings | Space Grotesk | 500, 600, 700 | Google Fonts |

Heading sizes: clamp-based fluid scaling. Letter-spacing on headings: `-0.01em`. Two-font system with clear body/display hierarchy.

---

### v1.1 Layout

- Max-width: `max-w-6xl` (72rem) via header container; text content `max-w-3xl`
- Hero: centered column, full viewport height, solid `bg-brand-surface` background, no image, logo + h1 + two CTA buttons
- Cards: `rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm` — used extensively
- Grid: `md:grid-cols-2` and `md:grid-cols-3` for card grids
- Nav: horizontal flex bar, active-page pill highlight, hamburger expands inline on mobile (max-height)
- Page background: `bg-brand-surface` (#f4f9f6) — pale green, not white
- Section spacing: `space-y-10` within section, `mt-12` between sections

---

### v1.1 Overall Character

Professional, calm, nature-inspired. Conventional centered-column layout — nothing unexpected in structure. Clean but not visually bold. Works for information delivery but lacks a strong visual identity or conversion urgency. Feels like a competent but modest local business site.

**Specifically to avoid in all three v1.2 directions:**
- Green as the dominant color
- Rounded-3xl white cards on pale-green surface as the primary layout pattern
- Two-font system (Source Sans 3 + Space Grotesk)
- Centered, symmetric, calm hero with no background imagery or pattern
- Low visual contrast homepage

---

## Section 5: Shared Constraints for All Directions

These 15 constraints apply to all three v1.2 design directions (Phases 21, 22, 23). No direction may violate them. Source: PROJECT.md confirmed.

1. **Tech stack: HTML + Tailwind CSS v4 only.** No SPA framework, no CMS, no server runtime. npm build pipeline using PowerShell scripts (`pwsh scripts/build-site.ps1`).

2. **Tailwind v4 `@theme` syntax.** Color tokens are defined in the `@theme` block in `tailwind.css` — NOT in `tailwind.config.js`. Each direction replaces the full `@theme` block. Pattern: `--color-brand-primary: #hexvalue;` under `@theme { }`.

3. **Google Fonts CDN only.** No local font files. Fonts must support full German character set: ä, ö, ü, Ä, Ö, Ü, ß. Confirmed safe options: Montserrat, Inter, Plus Jakarta Sans, Outfit, Sora, DM Sans, Nunito, Figtree (all SIL OFL). Raleway, Josefin Sans for display; Playfair Display for serif.

4. **8 pages fixed — no additions or removals.** Pages: `index.html`, `preise.html`, `fahrzeuge.html`, `geschaeftskunden.html`, `ueber-uns.html`, `mitglied-werden.html`, `impressum.html`, `datenschutz.html`. Tera templates must generate all 8.

5. **Phone CTA only: 07473-922202.** No email forms, no online booking, no contact form submission. Phone number must appear prominently on every page (nav, footer, or CTA block).

6. **Membership gate communication required.** The site must clearly communicate early (homepage) that this is a membership-based service (3-month minimum, then monthly cancellation), NOT one-time rental. Frame positively ("Schneller Einstieg und Ausstieg möglich").

7. **Content accuracy — no invented facts.** Snappier wording yes. New claims no. All copy must be grounded in EXTRACTED.md, PROJECT.md, or existing verified site content. Unverified statistics from old site must not be used as stated facts.

8. **Zweitwagen persona primary (Simone).** Homepage hero must speak to her use case: practical daily need for a second car, local to Mössingen, cost-conscious. Business customers are secondary — addressed on geschaeftskunden.html.

9. **Responsive: 375px / 768px / 1280px+.** Mobile-first Tailwind approach. All 8 pages must work at these breakpoints.

10. **Copyright: no student project images.** `bergrutsch.jpg`, `adam.png`, `mokka.png`, `car.png`, `phone.png`, `coins.png` are all copyright-risky. CSS gradients, SVG decorations, geometric patterns are safe. Background images require either owner-provided photos or clearly licensed stock.

11. **German language, Sie-Ansprache.** Correct umlauts throughout. Sachlich + freundlich tone. No poverty signals. No slang. Formal address (Sie, Ihnen, Ihr) throughout.

12. **Legal pages must remain intact.** `impressum.html` and `datenschutz.html` contain text-heavy legal content that cannot be redesigned away. Design must accommodate long-form text at all three breakpoints.

13. **Pricing data via pricing.json + pricing.js pattern.** Price display is JS-rendered from `pricing.json`. All three designs must preserve this data-driven pricing pattern. No hardcoded prices in HTML templates (except preise.html which loads the JS).

14. **MapLibre map required on fahrzeuge.html.** Must accommodate a 420-520px tall map container within the page layout. Map must show: Mokka E location (red), Adam location (blue), Belsen (gray/planned). OpenStreetMap attribution required.

15. **Tailwind v4 `@theme` block replaces all v1.1 color/font tokens.** Each direction's implementer reads the existing `site/src/tailwind.css` and replaces the `@theme` block values. The structure is: `@import "tailwindcss";` then `@theme { --color-*: #hex; --font-*: "Font Name", ...; }`. No `tailwind.config.js` color extension needed.

---

*End of 20-INSPIRATION-NOTES.md. This document feeds Plan 02 (design direction rationales) and Phases 21, 22, 23 (implementation). Do not modify after Plan 02 begins.*
