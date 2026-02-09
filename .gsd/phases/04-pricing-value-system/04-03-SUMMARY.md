---
phase: 04-pricing-value-system
plan: 03
subsystem: content
tags: [pricing, copy, compliance, disclaimer, value-framing]

# Dependency graph
depends_on: [04-02]
feeds_into: []
affects: [site/src/preise.html, site/public/data/pricing.json]

# Tech tracking
tech-stack:
  added: []
  patterns: [Value-first messaging before pricing details, disclaimer after content]

key-files:
  created: []
  modified: [site/src/preise.html, site/public/data/pricing.json]

key-decisions:
  - "1-2 exact sample values OK as demo; XS and M rate details acceptable for demo-quality draft"
  - "Removed qualitative pricing claims (geringe, kleine) for unconfirmed fee values"

patterns-established:
  - "Value-first page structure: intro framing before data sections"
  - "1-2 exact sample values OK as demo; no full tariff table or billing formula"
  - "No qualitative pricing adjectives on noch-offen values"

# Metrics
duration: 4min
tasks_completed: 3/3

# Verification
verification_commands:
  - "Select-String -Path site/src/preise.html -Pattern 'pricing-disclaimer'"
  - "Select-String -Path site/public/data/pricing.json -Pattern 'noch offen'"
  - "Select-String -Path site/src/preise.html -Pattern 'geringe|kleine' (should return nothing)"
---

# 04-03 Summary: Pricing messaging constraints and disclaimers

## What was done
Reviewed preise.html intro and pricing.json against CopyGuardrails and PRICE-01 through PRICE-06 requirements. Found and fixed two compliance issues: qualitative pricing claims on unconfirmed values and a technical internal reference in the source note.

## Deliverables
- site/src/preise.html - removed 'geringe'/'kleine' qualifiers on noch-offen fees; intro now uses neutral 'feste Jahresgebuehr' and plain 'Buchungsgebuehr'
- site/public/data/pricing.json - replaced internal 'Tarife.xml' reference with user-facing 'Tarifinformationen' in source_note

## Verification results
- PRICE-01: 1-2 highlight values present (XS/M rates) PASS
- PRICE-02: Pricing rendered from JSON PASS
- PRICE-03: No full tariff table (only XS + M, 2 classes of 7) PASS
- PRICE-04: Disclaimer present as last section PASS
- PRICE-05: Value-first intro before any pricing data PASS
- PRICE-06: noch offen on deposit, annual_fee, booking_fee PASS
- CopyGuardrails: No qualitative pricing claims on unconfirmed values PASS

## Deviations
- 4 rate rows per class kept as-is per plan DECISION (acceptable for demo-quality draft, not a full tariff table)
- Example calculation formulas kept as-is (demo purpose, plan accepted)
