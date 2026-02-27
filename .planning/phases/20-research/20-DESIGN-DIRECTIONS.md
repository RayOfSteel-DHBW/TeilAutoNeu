# Phase 20: Design Directions for v1.2 ClaudesDesigns

**Created:** 2026-02-27
**Purpose:** This document is the design specification for Phases 21, 22, and 23. Each phase implements one of the three directions below as a complete 8-page site on a separate git branch (`design/a`, `design/b`, `design/c`). A Phase executor reading only this document should be able to create `@theme` blocks, add Google Font `<link>` tags, build hero sections, style cards/sections, and handle conversion funnels — without asking a single clarifying question about visual design.

**Source material:** 20-INSPIRATION-NOTES.md (Plan 01 output), 20-RESEARCH.md (archetype hypotheses and rationale framework)

---

## v1.1 Visual Identity Summary (Contrast Baseline)

Every direction must feel unmistakably different from v1.1. Here is what v1.1 looks like:

| Aspect | v1.1 Current |
|--------|-------------|
| **Color family** | Monochromatic green (#0f5f3c primary, #f4f9f6 surface) |
| **Typography** | Source Sans 3 (body) + Space Grotesk (display), two-font system |
| **Layout** | Centered column, max-w-6xl, grid-based card layouts |
| **Card style** | `rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm` |
| **Hero** | Full viewport, solid pale-green background, centered logo + h1 + 2 CTA buttons, no image/pattern |
| **Nav** | Horizontal flex bar, active-page pill highlight, inline hamburger expansion |
| **Personality** | Professional, calm, nature-inspired, modest |

**Specifically forbidden across all three directions:**
- Green as the dominant color
- `rounded-3xl` white cards on pale surface as primary layout pattern
- Source Sans 3 + Space Grotesk font combination
- Centered, symmetric, calm hero with no background imagery or pattern
- Low visual contrast homepage

---

## Shared Constraints

These 15 constraints apply to all three v1.2 design directions. No direction may violate any of them.

1. **Tech stack: HTML + Tailwind CSS v4 only.** No SPA framework, no CMS, no server runtime. npm build pipeline using PowerShell scripts (`pwsh scripts/build-site.ps1`).

2. **Tailwind v4 `@theme` syntax.** Color tokens are defined in the `@theme` block in `tailwind.css` — NOT in `tailwind.config.js`. Each direction replaces the full `@theme` block. Pattern: `--color-brand-primary: #hexvalue;` under `@theme { }`.

3. **Google Fonts CDN only.** No local font files. Fonts must support full German character set: ae, oe, ue, AE, OE, UE, ss. Confirmed safe options: Montserrat, Inter, Plus Jakarta Sans, Outfit, Sora, DM Sans, Nunito, Figtree (all SIL OFL). Raleway, Josefin Sans for display; Playfair Display for serif.

4. **8 pages fixed — no additions or removals.** Pages: `index.html`, `preise.html`, `fahrzeuge.html`, `geschaeftskunden.html`, `ueber-uns.html`, `mitglied-werden.html`, `impressum.html`, `datenschutz.html`. Tera templates must generate all 8.

5. **Phone CTA only: 07473-922202.** No email forms, no online booking, no contact form submission. Phone number must appear prominently on every page (nav, footer, or CTA block).

6. **Membership gate communication required.** The site must clearly communicate early (homepage) that this is a membership-based service (3-month minimum, then monthly cancellation), NOT one-time rental. Frame positively ("Schneller Einstieg und Ausstieg moglich").

7. **Content accuracy — no invented facts.** Snappier wording yes. New claims no. All copy must be grounded in EXTRACTED.md, PROJECT.md, or existing verified site content. Unverified statistics from old site must not be used as stated facts.

8. **Zweitwagen persona primary (Simone).** Homepage hero must speak to her use case: practical daily need for a second car, local to Moessingen, cost-conscious. Business customers are secondary — addressed on geschaeftskunden.html.

9. **Responsive: 375px / 768px / 1280px+.** Mobile-first Tailwind approach. All 8 pages must work at these breakpoints.

10. **Copyright: no student project images.** `bergrutsch.jpg`, `adam.png`, `mokka.png`, `car.png`, `phone.png`, `coins.png` are all copyright-risky. CSS gradients, SVG decorations, geometric patterns are safe. Background images require either owner-provided photos or clearly licensed stock.

11. **German language, Sie-Ansprache.** Correct umlauts throughout. Sachlich + freundlich tone. No poverty signals. No slang. Formal address (Sie, Ihnen, Ihr) throughout.

12. **Legal pages must remain intact.** `impressum.html` and `datenschutz.html` contain text-heavy legal content that cannot be redesigned away. Design must accommodate long-form text at all three breakpoints.

13. **Pricing data via pricing.json + pricing.js pattern.** Price display is JS-rendered from `pricing.json`. All three designs must preserve this data-driven pricing pattern. No hardcoded prices in HTML templates (except preise.html which loads the JS).

14. **MapLibre map required on fahrzeuge.html.** Must accommodate a 420-520px tall map container within the page layout. Map must show: Mokka E location (red), Adam location (blue), Belsen (gray/planned). OpenStreetMap attribution required.

15. **Tailwind v4 `@theme` block replaces all v1.1 color/font tokens.** Each direction's implementer reads the existing `site/src/tailwind.css` and replaces the `@theme` block values. The structure is: `@import "tailwindcss";` then `@theme { --color-*: #hex; --font-*: "Font Name", ...; }`. No `tailwind.config.js` color extension needed.

---

## Direction A: "Editorial Broadsheet"

### 1. One-Sentence Creative Brief

A confident, typographically-driven editorial design that treats the carsharing site like a well-set newspaper front page — high contrast, strong heading hierarchy, and a sense of authority that says "we know what we're doing, and here are the facts."

### 2. Google Fonts Pair

| Role | Font | Weights | Character |
|------|------|---------|-----------|
| **Display / headings** | Playfair Display | 500, 700, 900 | Serif, high contrast between thick and thin strokes. Distinctive, authoritative. |
| **Body** | Inter | 400, 500, 600 | Geometric sans-serif, excellent legibility at small sizes, wide language support. |

**German character support:** Both fonts support Latin Extended (ae, oe, ue, ss confirmed). Playfair Display: SIL OFL 1.1. Inter: SIL OFL 1.1.

**CDN link:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;700;900&display=swap" rel="stylesheet">
```

### 3. Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `primary` | `#1a1a2e` | Deep navy-charcoal — headings, nav background, footer |
| `accent` | `#c2703e` | Burnt amber — CTA buttons, links, highlights |
| `surface` | `#faf8f5` | Warm off-white — page background (not pure white, not green) |
| `ink` | `#2d2d3a` | Dark blue-gray — body text |
| `muted` | `#e8e4de` | Warm tan — dividers, hover states, subtle backgrounds |
| `cta` | `#b85c2f` | Deeper amber — CTA button hover (darker than accent) |

**`@theme` block:**
```css
@theme {
  --color-brand-primary: #1a1a2e;
  --color-brand-accent: #c2703e;
  --color-brand-surface: #faf8f5;
  --color-brand-ink: #2d2d3a;
  --color-brand-muted: #e8e4de;
  --color-brand-cta: #b85c2f;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Playfair Display", "Georgia", serif;
}
```

### 4. Hero Concept (Homepage, 1280px Desktop)

**Background approach:** Solid `brand-surface` (#faf8f5) background with a full-width horizontal rule (2px `brand-primary`) at ~60% viewport height, creating a visual "fold line" — the editorial broadsheet metaphor made literal.

**Headline tone:** Declarative and factual, in Playfair Display 900 weight at ~4rem (clamp-scaled). Approximate wording direction from verified content: main line "Das Auto auf Abruf" (large, commanding), supported by a smaller Inter subheading in regular weight: "Anrufen, fahren und sparen." Both grounded in old-site verified taglines.

**CTA button placement:** Two buttons below the subtitle, left-aligned (not centered). Primary button: filled `brand-accent` (#c2703e), white text, `rounded-md` (not pill). Secondary button: outline with `brand-primary` border. Left-alignment creates an editorial reading flow (top-left to bottom-right).

**Height approach:** 85vh — not full viewport. The horizontal rule and the beginning of the first content section peek above the fold, inviting scroll. The hero has generous negative space around the headline — the emptiness is the design.

### 5. Card/Section Style

**This direction does NOT use cards.** Instead, content sections are divided by thin horizontal rules (1px `brand-muted` #e8e4de), inspired by the student project's separator-line layout (Pattern 6 in INSPIRATION-NOTES.md).

| Property | Value |
|----------|-------|
| **Border style** | `border-b border-brand-muted` between sections (bottom border only) |
| **Corner radius** | N/A — no contained cards |
| **Shadow** | None |
| **Background** | Content sits directly on `brand-surface`; no white card containers |
| **Spacing** | `py-16` between sections, `space-y-6` within sections |

Benefits, vehicle features, and pricing breakdowns are presented as editorial text blocks or simple two-column grids without enclosing borders. This eliminates the "card fatigue" of v1.1.

**Exception:** The pricing table and vehicle spec tables use `border-collapse` with `border-brand-muted` cell borders for structured data only.

### 6. Nav Treatment

**Desktop (1280px+):**
- Sticky top bar, full-width, `bg-brand-primary` (#1a1a2e) with white text
- Logo (teilAuto wordmark) left-aligned in Inter 600 weight
- Navigation links in Inter 500, white, with `hover:text-brand-accent` underline (not background highlight)
- Active page indicator: bottom border underline in `brand-accent` (2px)
- Phone number displayed in the nav bar right side: `07473-922202` in `brand-accent` color

**Mobile (< 768px):**
- Sticky top bar, `bg-brand-primary`, logo left, hamburger right
- Full-viewport overlay when opened: `bg-brand-primary` background, centered vertical link stack in white Playfair Display at 1.5rem
- Close button top-right
- Phone number at bottom of overlay with "Jetzt anrufen" label

### 7. Conversion Hooks

**Membership gate placement:** Immediately after the hero section — a single-line statement in Inter 500 italic: "Machen Sie mit — werden Sie Mitglied! Schneller Einstieg und Ausstieg moglich." (Verified copy from old site, Opportunity 3 and 5.) This appears before any benefit content, ensuring visitors understand the model early.

**Phone number display:** Displayed in the nav bar (always visible due to sticky nav). On mobile, also appears as a fixed bottom bar with `tel:` link. On the homepage, a dedicated CTA block before the footer repeats the number at 2rem size in `brand-accent`.

**CTA copy tone:** Direct and factual. No exclamation marks except in the verified membership framing. Tone: "Here are the facts. Call when you're ready." Reflects the editorial broadsheet personality — informative, not pushy.

**Key conversion funnel pages:** index.html (awareness) -> preise.html (cost comparison) -> mitglied-werden.html (how it works + CTA) -> phone call. The homepage teaser sections link directly to preise and mitglied-werden.

### 8. What Makes This Unmistakably Different

**Differs from v1.1 (3+ contrasts):**
1. **Serif headings** (Playfair Display) vs. v1.1's geometric sans (Space Grotesk) — completely different typographic character
2. **Warm navy + amber palette** vs. v1.1's monochromatic green — different color family, different emotional register
3. **No cards** — separator-line editorial layout vs. v1.1's card-heavy `rounded-3xl` pattern — fundamentally different spatial grammar
4. **Left-aligned hero** vs. v1.1's centered hero — different reading flow and visual weight distribution
5. **Sticky dark nav bar** vs. v1.1's light horizontal bar with pill indicators

**Differs from Direction B (2+ contrasts):**
1. Serif headings (Playfair Display) vs. B's geometric sans (Outfit) — opposite typographic traditions
2. Warm amber accent on navy vs. B's single teal accent on near-white — different temperature and density

**Differs from Direction C (2+ contrasts):**
1. Cool, authoritative editorial personality vs. C's warm, community-focused personality — opposite emotional registers
2. No cards / separator layout vs. C's rounded card pattern — different spatial treatment
3. Dark navy primary vs. C's earthy terracotta — no color overlap

---

## Direction B: "Nordic Signal"

### 1. One-Sentence Creative Brief

An ultra-minimal, whitespace-rich design with a single bold accent color that acts as a visual signal — clean, modern, and quietly confident, inspired by Scandinavian utility design and the visiticeland.com reference the owner cited.

### 2. Google Fonts Pair

| Role | Font | Weights | Character |
|------|------|---------|-----------|
| **Display / headings** | Outfit | 600, 700, 800 | Geometric sans-serif, modern, wide apertures, clean at large sizes. |
| **Body** | Outfit | 300, 400, 500 | Same family for body — single-font system creating harmony over contrast. |

**Why single-font:** Inspired by the student project's Montserrat single-font approach (Pattern 2 in INSPIRATION-NOTES.md). All weights from one family creates a harmonious, minimal typographic system. Outfit is a contemporary alternative to Montserrat with slightly more geometric character.

**German character support:** Outfit supports Latin Extended (ae, oe, ue, ss confirmed). SIL OFL 1.1.

**CDN link:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### 3. Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `primary` | `#0d7377` | Deep teal — the single bold accent signal. Buttons, links, active states. |
| `accent` | `#0fa3a8` | Lighter teal — hover states, secondary emphasis |
| `surface` | `#fafafa` | Near-white — page background, extreme negative space |
| `ink` | `#1c1c1e` | True near-black — body text, maximum contrast |
| `muted` | `#f0f0f0` | Light gray — section backgrounds, alternating rows |

**`@theme` block:**
```css
@theme {
  --color-brand-primary: #0d7377;
  --color-brand-accent: #0fa3a8;
  --color-brand-surface: #fafafa;
  --color-brand-ink: #1c1c1e;
  --color-brand-muted: #f0f0f0;
  --font-sans: "Outfit", system-ui, sans-serif;
  --font-display: "Outfit", system-ui, sans-serif;
}
```

### 4. Hero Concept (Homepage, 1280px Desktop)

**Background approach:** CSS gradient — a subtle diagonal gradient from `#fafafa` (top-left) to `#f0f0f0` (bottom-right) with a single large geometric SVG accent shape: a teal (#0d7377) circle or arc at 15% opacity positioned in the lower-right quadrant. The SVG is inline (not an external image), purely decorative.

**Headline tone:** Bold and minimal. Outfit 800 weight at ~4.5rem (clamp-scaled). Maximum 6 words. Approximate wording direction: "Das Auto auf Abruf." — period included for declarative finality. No subheading clutter. A single line of body text in Outfit 400 beneath: "Anrufen, fahren und sparen." — verified old-site copy.

**CTA button placement:** One primary button, centered beneath the body line. Filled `brand-primary` (#0d7377), white text, `rounded-lg` (not fully rounded, not square). No secondary button — the minimal approach means one action per screen area.

**Height approach:** 100vh — full viewport. The design confidence is in the emptiness. The headline sits vertically centered with massive whitespace above and below. A subtle scroll indicator (thin line or small chevron in `brand-muted`) at the bottom edge.

### 5. Card/Section Style

**Uses cards, but minimal:** Content sections alternate between `brand-surface` (#fafafa) and `brand-muted` (#f0f0f0) full-width background bands — no per-card containers. Within each band, content is constrained to `max-w-5xl` center.

| Property | Value |
|----------|-------|
| **Border style** | No borders on individual cards — the full-width color bands create visual separation |
| **Corner radius** | `rounded-xl` on interactive elements (buttons, clickable cards) only |
| **Shadow** | `shadow-sm` on hover only — `hover:shadow-md transition-shadow` |
| **Background** | Alternating bands: `brand-surface` / `brand-muted` |
| **Spacing** | `py-20` for section bands, `gap-8` within grids |

**Exception for structured content:** Vehicle specs and pricing use a clean table with `divide-y divide-gray-200` — no cell borders, just horizontal rules between rows.

### 6. Nav Treatment

**Desktop (1280px+):**
- Sticky top bar, `bg-brand-surface` (#fafafa) with subtle `border-b border-gray-200` bottom border
- Logo (teilAuto wordmark) left in Outfit 700, `brand-primary` teal color
- Navigation links in Outfit 500, `brand-ink` color, with `hover:text-brand-primary` transition
- Active page indicator: `text-brand-primary` with a small dot (4px teal circle) below the text
- Phone number NOT in nav — appears in footer and CTA blocks only (nav is ultra-clean)

**Mobile (< 768px):**
- Sticky top bar, same white treatment, logo left, minimal hamburger icon right
- Slide-down overlay: `bg-brand-surface` (white), full viewport, links centered vertically in Outfit 600 at 1.25rem, well-spaced (`space-y-6`)
- Teal accent line at top of overlay (4px `bg-brand-primary` bar)
- Phone number at bottom: `07473-922202` as a `tel:` link button in teal

### 7. Conversion Hooks

**Membership gate placement:** A full-width teal (#0d7377) band after the hero with white text: "Machen Sie mit — werden Sie Mitglied! Schneller Einstieg und Ausstieg moglich." The high contrast teal-on-white-text band is the single strongest visual element on the page after the hero — unmissable.

**Phone number display:** Not in the nav (kept minimal). Instead, a floating bottom-right button on mobile (teal circle with phone icon, `tel:` link). On desktop, the phone number appears in every CTA block and the footer. Format: "07473-922202" in Outfit 600, `brand-primary` color.

**CTA copy tone:** Confident and sparse. Short sentences. No filler words. "Sie brauchen kein eigenes Auto. Sie brauchen Zugang." — this kind of declarative brevity (grounded in existing messaging about the second-car use case). Reflects the Nordic Signal personality — says less, means more.

**Key conversion funnel pages:** index.html (single strong CTA) -> mitglied-werden.html (streamlined "3 Schritte" flow) -> phone call. Preise is accessible but not the primary funnel step — the design trusts the user to find pricing when ready.

### 8. What Makes This Unmistakably Different

**Differs from v1.1 (3+ contrasts):**
1. **Single-font system** (Outfit all weights) vs. v1.1's two-font system (Source Sans 3 + Space Grotesk) — unified vs. split typographic identity
2. **Teal accent on near-white** vs. v1.1's monochromatic green family — different color approach (single signal vs. tinted everything)
3. **Full-width color bands** for section division vs. v1.1's individual bordered cards — different spatial organization
4. **100vh hero with extreme whitespace** vs. v1.1's content-filled centered hero — opposite density approach
5. **No phone number in nav** vs. v1.1's nav-level CTA — different information hierarchy

**Differs from Direction A (2+ contrasts):**
1. Single-font geometric sans (Outfit) vs. A's serif/sans contrast (Playfair + Inter) — opposite typographic strategies
2. Near-white palette with single teal accent vs. A's dark navy + warm amber — opposite temperature and value range

**Differs from Direction C (2+ contrasts):**
1. Cool teal on near-white vs. C's warm earthy tones (terracotta, sand) — opposite color temperature
2. Extreme minimalism and whitespace vs. C's dense, community-focused warmth — opposite personality approach
3. Single-font system vs. C's expressive body/display contrast

---

## Direction C: "Nachbarschaftlich" (Neighborly)

### 1. One-Sentence Creative Brief

A warm, approachable design built on earthy natural tones and friendly rounded typography that foregrounds the personal, local, human character of a family-run carsharing cooperative — "Kein Callcenter, Sie sprechen direkt mit uns."

### 2. Google Fonts Pair

| Role | Font | Weights | Character |
|------|------|---------|-----------|
| **Display / headings** | Nunito | 600, 700, 800 | Rounded terminals, warm and approachable. Friendly without being childish. |
| **Body** | DM Sans | 400, 500, 600 | Clean geometric sans with slightly wider letterforms. Highly legible, modern. |

**German character support:** Both fonts support Latin Extended (ae, oe, ue, ss confirmed). Nunito: SIL OFL 1.1. DM Sans: SIL OFL 1.1.

**CDN link:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet">
```

### 3. Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `primary` | `#b5541a` | Terracotta — warm, earthy, distinctly non-green. Headings, primary buttons. |
| `accent` | `#d4853a` | Warm amber-ochre — secondary buttons, highlights, links |
| `surface` | `#fdf6ee` | Warm cream — page background with a slight golden warmth |
| `ink` | `#33261a` | Dark warm brown — body text |
| `muted` | `#f0e6d6` | Light sand — card backgrounds, hover states, muted surfaces |

**`@theme` block:**
```css
@theme {
  --color-brand-primary: #b5541a;
  --color-brand-accent: #d4853a;
  --color-brand-surface: #fdf6ee;
  --color-brand-ink: #33261a;
  --color-brand-muted: #f0e6d6;
  --font-sans: "DM Sans", system-ui, sans-serif;
  --font-display: "Nunito", "DM Sans", system-ui, sans-serif;
}
```

### 4. Hero Concept (Homepage, 1280px Desktop)

**Background approach:** CSS gradient with abstract organic shapes. Background: `linear-gradient(160deg, #fdf6ee 0%, #f0e6d6 40%, #fdf6ee 100%)` — a warm cream-to-sand-to-cream sweep. Overlaid with 2-3 soft CSS `radial-gradient` circles at very low opacity (8-12%) in `brand-primary` terracotta, positioned asymmetrically (one large bottom-left, one small top-right). Creates a gentle warmth without imagery.

**Headline tone:** Warm and personal, in Nunito 800 at ~3.5rem (clamp-scaled). Approximate wording direction: "Ihr Zweitwagen wartet schon" — addresses Simone directly. Subheading in DM Sans 400: "Das Auto auf Abruf — anrufen, einsteigen, losfahren." Combines two verified old-site phrases into a warm, action-oriented flow.

**CTA button placement:** Two buttons, centered. Primary: filled `brand-primary` (#b5541a), white text, `rounded-full` (pill shape — the rounded aesthetic). Reads "Mitglied werden" with an arrow. Secondary: filled `brand-muted` (#f0e6d6), `brand-ink` text, also `rounded-full`. Reads "Mehr erfahren". The pill buttons echo Nunito's rounded letterforms.

**Height approach:** 70vh — compact enough to show the first content section peeking below. The hero is welcoming, not imposing. A subtle wave or curved divider (CSS `clip-path` or SVG) separates the hero from the content below — organic, not geometric.

### 5. Card/Section Style

**Uses rounded cards — but NOT v1.1's pattern.** Direction C uses sand-colored (`brand-muted` #f0e6d6) cards on the warm cream (`brand-surface` #fdf6ee) background — warm-on-warm, not white-on-green.

| Property | Value |
|----------|-------|
| **Border style** | No visible border — separation through background color difference only |
| **Corner radius** | `rounded-2xl` (16px) — rounded but not as extreme as v1.1's `rounded-3xl` (24px) |
| **Shadow** | `shadow-md` at rest, `shadow-lg` on hover — warmer shadow tones via custom shadow color |
| **Background** | `brand-muted` (#f0e6d6) on cards, `brand-surface` (#fdf6ee) on page |
| **Spacing** | `p-8` inner padding, `gap-6` between cards, `py-14` between sections |

**Custom shadow (warm):** Tailwind v4 supports `shadow-color`: use `shadow-brand-primary/8` for a slightly terracotta-tinted shadow instead of default gray.

**Exception:** Vehicle specs and pricing use the same card treatment but at `rounded-xl` with a thin `border border-brand-primary/15` for subtle structure.

### 6. Nav Treatment

**Desktop (1280px+):**
- Sticky top bar, `bg-brand-surface` (#fdf6ee) — same as page background, creating a seamless feel
- Logo (teilAuto wordmark) left in Nunito 700, `brand-primary` terracotta color
- Navigation links in DM Sans 500, `brand-ink` color, with `hover:text-brand-primary` transition
- Active page indicator: `bg-brand-muted` rounded pill behind the active link text (warm highlight, not underline)
- Phone number right-aligned in nav: "07473-922202" as a small pill button in `brand-primary`

**Mobile (< 768px):**
- Sticky top bar, same cream treatment
- Full-viewport overlay: `bg-brand-surface` background, centered link stack in Nunito 700
- Each nav link wrapped in a `rounded-full bg-brand-muted` pill for touch targets
- Warm organic shape decoration (CSS radial gradient blob) in lower corner of overlay
- Phone number at bottom as a large `rounded-full bg-brand-primary` pill button: "Jetzt anrufen: 07473-922202"

### 7. Conversion Hooks

**Membership gate placement:** In the first content section after the hero — a warm, standalone card (`rounded-2xl bg-brand-muted p-8`) with a heading in Nunito 700: "So einfach geht's" followed by the verified framing: "Machen Sie mit — werden Sie Mitglied! Schneller Einstieg und Ausstieg moglich." (Opportunities 3 and 5 from INSPIRATION-NOTES.md.) This is a friendly invitation, not a warning.

**Phone number display:** Prominent throughout. In the nav (pill button), in the hero area (visible below CTA buttons), in a mid-page CTA band ("Fragen? Rufen Sie uns an: 07473-922202"), and in the footer. On mobile, also as a fixed bottom bar. This direction leans hardest into the "direct human contact as feature" signal (Preference 4 from INSPIRATION-NOTES.md). Framing: "Kein Callcenter — Sie sprechen direkt mit uns."

**CTA copy tone:** Warm, inviting, personal. Uses the informal-within-formal register: Sie-Ansprache but with friendly sentence structures. "Lernen Sie uns kennen," "Wir freuen uns auf Ihren Anruf." Echoes the "Nachbarschaftlich" personality — neighborly.

**Key conversion funnel pages:** index.html (warm welcome + membership framing) -> mitglied-werden.html ("So einfach geht's" 3-step with personal tone) -> phone call. The ueber-uns.html page is elevated in the funnel as a trust-building step — "meet the family" before committing.

### 8. What Makes This Unmistakably Different

**Differs from v1.1 (3+ contrasts):**
1. **Warm terracotta/ochre palette** vs. v1.1's cool monochromatic green — completely different color temperature
2. **Nunito rounded headings** vs. v1.1's Space Grotesk geometric display — different typographic character (warm vs. technical)
3. **Sand-on-cream card pattern** vs. v1.1's white-on-pale-green cards — different card treatment despite both using cards
4. **70vh hero with gradient + organic shapes** vs. v1.1's 100vh solid-background hero — different scale and visual approach
5. **Pill-shaped nav buttons and CTAs** vs. v1.1's inline nav links — different interaction style

**Differs from Direction A (2+ contrasts):**
1. Warm, approachable personality vs. A's cool, authoritative editorial personality — opposite emotional registers
2. Rounded card layout with warm shadows vs. A's cardless separator-line layout — different spatial treatment
3. Terracotta/cream color family vs. A's navy/amber palette — different warmth source

**Differs from Direction B (2+ contrasts):**
1. Warm cream/sand surface with terracotta accent vs. B's near-white surface with cool teal accent — opposite color temperature
2. Two-font system (Nunito + DM Sans) vs. B's single-font system (Outfit) — different typographic complexity
3. 70vh compact hero with organic shapes vs. B's 100vh extreme-whitespace hero — opposite density and warmth

---

## Differentiation Matrix

| Attribute | v1.1 (Current) | Direction A: "Editorial Broadsheet" | Direction B: "Nordic Signal" | Direction C: "Nachbarschaftlich" |
|-----------|----------------|--------------------------------------|------------------------------|-----------------------------------|
| **Color Family** | Monochromatic green | Navy + warm amber | Near-white + cool teal | Terracotta + warm cream |
| **Typography Style** | Two sans-serif fonts (Source Sans 3 + Space Grotesk) | Serif display + sans body (Playfair + Inter) | Single geometric sans (Outfit) | Rounded display + clean sans body (Nunito + DM Sans) |
| **Layout Approach** | Centered column, grid cards | Left-aligned editorial, ruled sections | Full-width color bands, centered sparse | Centered, organic flow, curved dividers |
| **Card Style** | White rounded-3xl cards, green border, shadow-sm | No cards — horizontal rule separators | No individual cards — alternating background bands | Sand rounded-2xl cards, no border, warm shadow |
| **Hero Type** | Full viewport, solid pale-green, centered, no imagery | 85vh, warm off-white, left-aligned, horizontal rule | 100vh, near-white + gradient, centered, extreme whitespace | 70vh, cream gradient + organic shapes, centered, compact |
| **Personality** | Professional, calm, modest | Authoritative, editorial, factual | Minimal, confident, silent | Warm, neighborly, personal |

**Differentiation check:** No two rows share more than 1 column value. Each direction occupies a distinct point in the design space — different color temperature, different typographic tradition, different spatial grammar, different emotional register, and different hero treatment.

---

*End of 20-DESIGN-DIRECTIONS.md. This document gates Phases 21, 22, and 23. Each Phase executor reads the relevant Direction section and the Shared Constraints section to implement a complete 8-page site.*
