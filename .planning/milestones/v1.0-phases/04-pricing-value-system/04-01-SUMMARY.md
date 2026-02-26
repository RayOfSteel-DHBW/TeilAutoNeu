---
phase: 04-pricing-value-system
plan: 01
subsystem: data
tags: [pricing, json, data-source, owner-workflow]

# Dependency graph
depends_on: [03-03]
feeds_into: [04-02]
affects: [site/public/data/pricing.json]

# Tech tracking
tech-stack:
  added: []
  patterns: [JSON data source for runtime rendering, noch-offen labels for unconfirmed values]

key-files:
  created: [site/public/data/pricing.json]
  modified: []

key-decisions:
  - "Exact EUR values from Tarife.xml for XS and M classes; membership fees labelled noch offen"
  - "Folgestunden/Nachtstunden rates included per class for accurate example calculations"

patterns-established:
  - "Pricing JSON under public/data/ for owner-editable updates"
  - "noch offen pattern for unconfirmed values (deposit, annual_fee, booking_fee)"
  - "source_note field traces data provenance"

# Metrics
duration: ~5 min
tasks_completed: 2/2

# Verification
verification_commands:
  - "Test-Path site/public/data/pricing.json"
  - "Get-Content site/public/data/pricing.json | ConvertFrom-Json"
---

# 04-01 Summary: Pricing JSON schema and update workflow

## What was done
Created a revised pricing.json with demo-quality exact EUR values sourced from Tarife.xml (02/2022-2024 data, last updated by Ralf). The previous fully-abstract pricing.json was replaced with one containing real per-class rate breakdowns for XS and M classes, two worked example calculations using actual rates, and `noch offen` labels for all values not found in Tarife.xml (deposit, annual_fee, booking_fee).

README.md was reviewed — the existing Pricing data section already documents the update workflow adequately and required no changes.

## Key rates sourced from Tarife.xml
| Rate | XS | M |
|---|---|---|
| Stunde | 2,05 EUR | 2,46 EUR |
| Folgestunde | 1,00 EUR | 1,25 EUR |
| Nachtstunde | 0,65 EUR | 0,75 EUR |
| Kilometer | 0,32 EUR | 0,36 EUR |

## Deliverables
- site/public/data/pricing.json — demo-quality pricing with XS/M class rates, example calculations, noch-offen labels
- site/README.md — reviewed, no changes needed (already adequate)

## Commits
- `bdb07ab` feat(04-01): create pricing JSON data source

## Deviations
- Actual XS values were found in Tarife.xml (previously thought unavailable); used real XS values instead of S-class proxies.
- Added folgestunde_eur and nachtstunde_eur fields per class (not in original schema spec) to support accurate example calculations.
- README already had adequate pricing documentation from prior work; no update commit needed.
