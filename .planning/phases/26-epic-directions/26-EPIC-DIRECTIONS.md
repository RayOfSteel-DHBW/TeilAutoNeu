# Phase 26: Epic Directions

**Defined:** 2026-03-09
**Purpose:** Canonical shared direction spec for v1.3 Epic Skins.

This file restores the missing specification layer that later phases assumed
would exist. It is based on the v1.3 milestone brief plus the actual structural
choices now implemented for Designs A and B and documented for Design C.

## Shared Constraints

All three skins must keep these constraints unchanged:

1. Static HTML + Tailwind CSS only. No SPA, CMS, or server runtime.
2. Eight pages: `index`, `preise`, `fahrzeuge`, `geschaeftskunden`,
   `ueber-uns`, `mitglied-werden`, `impressum`, `datenschutz`.
3. Phone CTA only: `07473-922202`. No email, no forms, no online signup.
4. Membership model must be communicated early. This is not a one-time rental.
5. Copy may be tightened, but facts must come from verified existing material.
6. Primary persona remains the "Zweitwagen" household use case.
7. All skins must stay professional, readable, and conversion-effective.
8. Each skin must remain reviewable against
   `.planning/milestones/v1.0-REQUIREMENTS.md`.

## Direction A: Editorial Authority

### Structural Signature

- **Homepage order:** immersive hero -> membership gate -> convenience benefits
  -> trust proof -> cost teaser -> how-it-works -> CTA
- **Hero composition:** full-bleed immersive hero with content layered over a
  dark field and anchored low in the viewport
- **Nav pattern:** sticky dark top bar with desktop links and mobile overlay
- **Visual signature:** thin editorial separators with amber accent rules
- **Copy strategy:** convenience first, trust second, cost third
- **Information rhythm:** cardless, left-aligned, newspaper-style reading flow

### What Makes It An Epic Skin

Direction A rejects the centered SaaS hero and soft-card rhythm of the v1.2
chromas. Its identity comes from open layout, editorial pacing, and a dark
authoritative frame rather than boxes and bands.

### Implementation Notes

- Serif display + clean sans body
- No pill-nav language, no diagonal motifs, no organic decorations
- Strong preference for editorial prose and structural rules over cards

## Direction B: Savings Signal

### Structural Signature

- **Homepage order:** asymmetric hero -> savings comparison -> membership gate
  -> how-it-works -> fleet preview -> CTA
- **Hero composition:** asymmetric 60/40 split with a dedicated stat or visual
  block on the right
- **Nav pattern:** floating pill navigation detached from page chrome
- **Visual signature:** diagonal lime accents and skewed section dividers
- **Copy strategy:** cost first, convenience second, community third
- **Information rhythm:** dense and data-forward, with comparison blocks and
  high-contrast emphasis

### What Makes It An Epic Skin

Direction B changes the emotional entry point from "car availability" to
"second-car economics." It should feel more like a premium savings product than
an editorial brochure.

### Implementation Notes

- Humanist sans display + sans body
- Floating nav must remain visibly distinct from standard sticky header chrome
- Cost-comparison content is a structural feature, not a cosmetic section

## Direction C: Neighborly Warmth

### Structural Signature

- **Homepage order:** stacked hero -> social proof -> membership gate ->
  how-it-works -> practical benefits -> CTA
- **Hero composition:** stacked editorial hero with layered badges and
  overlapping supporting elements
- **Nav pattern:** minimal non-sticky header with fullscreen menu overlay on
  smaller breakpoints
- **Visual signature:** organic blob forms and soft warm-shape decoration
- **Copy strategy:** community and trust first, membership second, practical
  convenience third
- **Information rhythm:** warm and scene-based, less data-heavy than B and less
  austere than A

### What Makes It An Epic Skin

Direction C shifts the story from "use a car" to "join a neighborly mobility
community." The structure should feel inviting and human without becoming cute
or amateurish.

### Implementation Notes

- Warm serif display + contemporary sans body
- Light hero background to separate it from both A and B
- Organic forms must appear across the experience, not only on the homepage

## Differentiation Matrix

| Dimension | Design A | Design B | Design C |
|-----------|----------|----------|----------|
| Hero type | Full-bleed immersive | Asymmetric split | Stacked editorial |
| Entry story | Convenience first | Savings first | Community first |
| Nav pattern | Sticky dark bar | Floating pill | Minimal non-sticky header |
| Signature element | Editorial amber rules | Diagonal lime accents | Organic blob forms |
| Layout rhythm | Cardless editorial | Dense comparison/data | Warm scene-building |
| Visual temperature | Dark navy / amber | Dark forest / lime | Warm cream / terracotta / sage |

## Pairwise Structural Differences

### A vs B

1. Different hero composition: immersive vs split.
2. Different nav pattern: sticky bar vs floating pill.
3. Different story lead: convenience vs savings.
4. Different signature system: editorial rules vs diagonals.

### A vs C

1. Different hero composition: immersive vs stacked.
2. Different nav pattern: sticky bar vs minimal non-sticky header.
3. Different story lead: convenience vs community.
4. Different decorative language: rules vs organic blobs.

### B vs C

1. Different hero composition: split vs stacked.
2. Different nav pattern: floating pill vs minimal non-sticky header.
3. Different story lead: savings vs community.
4. Different information density: data-forward vs warm scene-based.

## Review Usage

Use this file as the canonical source for:

- checking whether an implementation drifted away from its intended identity
- reviewing later polish loops for structural regressions
- comparing A/B/C side-by-side without relying on memory or branch history

If a later polish pass improves execution but changes one of the structural
signatures above, that change must be treated as an explicit design decision,
not a silent refactor.
