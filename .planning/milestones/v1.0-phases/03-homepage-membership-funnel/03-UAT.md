---
status: complete
phase: 03-homepage-membership-funnel
source:
  - .planning/phases/03-homepage-membership-funnel/03-01-SUMMARY.md
  - .planning/phases/03-homepage-membership-funnel/03-02-SUMMARY.md
  - .planning/phases/03-homepage-membership-funnel/03-03-SUMMARY.md
started: 2026-02-08T18:00:00Z
updated: 2026-02-08T18:05:00Z
---

## Current Test

[testing complete]

## Tests

### 1. Homepage hero and value proposition

expected: The homepage shows a hero with headline "Die sparsame Art (k)ein Auto zu haben", persona-inclusive intro mentioning Moessingen/Belsen/Talheim/Oeschingen, a "Mehr erfahren" CTA linking to mitglied-werden.html. No phone number on the homepage.
result: pass

### 2. Value highlight cards

expected: Below the hero, three cards appear side by side (on desktop) or stacked (mobile): "Sparsam bleiben", "Flexibel unterwegs", and "Lokal verankert" — each with a short description.
result: pass

### 3. "So funktioniert teilAuto" teaser section

expected: A section titled "So funktioniert teilAuto" with a paragraph explaining the basic workflow and a "Mehr zur Mitgliedschaft" link pointing to mitglied-werden.html.
result: pass

### 4. FAQ accordion on homepage

expected: A "Haeufige Fragen" section at the bottom of the homepage shows 4 FAQ items. All are collapsed by default (max-height: 0px, aria-expanded="false"). accordion.js loaded via defer implements single-open behavior.
result: pass

### 5. FAQ content quality

expected: FAQ answers use Sie-Ansprache, contain no phone numbers or exact prices, and include links to "Mitglied werden" and "Preise" pages where relevant.
result: pass

### 6. Membership page 3-step flow

expected: mitglied-werden.html shows three numbered step cards: 1 Anrufen, 2 Kennenlernen, 3 Losfahren — each with a short explanation.
result: pass

### 7. Membership expectations section

expected: A "Was Sie wissen sollten" section lists 4 checkmark items covering: membership model, fixed stations, telephone booking, and cost structure with a link to preise.html.
result: pass

### 8. Phone CTA on membership page

expected: A prominent CTA block shows "Ueberzeugt? Melden Sie sich bei uns:", the phone number 07473-922202 (clickable tel: link), and call hours "Mo-Fr 09:00-12:00 Uhr". No email address or online form present.
result: pass

### 9. Brand casing consistency

expected: Across both pages, the brand is always written as "teilAuto" (lowercase t, uppercase A) — never "Teilauto", "TeilAuto", or "TEILAUTO".
result: pass

## Summary

total: 9
passed: 9
issues: 0
pending: 0
skipped: 0

## Gaps

[none]
