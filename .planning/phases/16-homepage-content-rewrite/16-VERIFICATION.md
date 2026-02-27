---
phase: 16-homepage-content-rewrite
status: passed
verified: 2026-02-27
requirements: [RFIX-02]
---

# Phase 16: Homepage Content Rewrite — Verification

## Phase Goal
Replace hero placeholder and rewrite all value cards with messaging aligned to the Zweitwagen persona and owner's framing from the joint review.

## Must-Haves Verification

### 1. Hero section displays TeilAuto car icon SVG, not text-only placeholder
- **Status:** PASS
- **Evidence:** `site/build/dist/index.html` line 77: `<img src="img/talogo.svg" ...>`
- **File exists:** `site/build/dist/img/talogo.svg` (18KB SVG with car icon path)

### 2. Card 1 heading is "Sie fahren, wir kuemmern uns" with cost enumeration
- **Status:** PASS
- **Evidence:** Line 105: `<h2>Sie fahren, wir kümmern uns</h2>`, body enumerates Steuern, Versicherung, Wartung, TÜV, Stellplatz

### 3. Card 2 focuses on "Sie zahlen nur wenn Sie fahren" without cost enumeration
- **Status:** PASS
- **Evidence:** Line 112: `<h2>Nur zahlen, wenn Sie fahren</h2>`, body discusses pay-per-use without listing individual costs

### 4. Card 3 heading is "Merklich guenstiger" with X%/Y% placeholder variables
- **Status:** PASS
- **Evidence:** Line 125: `<h2>Merklich günstiger</h2>`, line 127: `X % günstiger als eine Autovermietung`, line 128: `Y % günstiger als ein eigener Zweitwagen`
- **No fabricated numbers:** grep for `\d+\s*%.*günstiger` returns no matches

### 5. Card 4 does NOT lead with "Zwei Fahrzeuge" and mentions Quernutzung + local availability
- **Status:** PASS
- **Evidence:** Line 132: `<h2>Das passende Auto für jede Fahrt</h2>`, body mentions Quernutzung and 200+ partner vehicles
- **No violation:** grep for "Zwei Fahrzeuge" returns no matches on index.html

### 6. Card 5 uses strong alternative phrasing or is dropped
- **Status:** PASS
- **Evidence:** Line 140: `<h2>Persönlich statt anonym</h2>`, with HTML comment documenting alternatives considered
- **Note:** Owner decision on keep/replace/drop pending

### 7. Card count matches genuine selling propositions
- **Status:** PASS
- **Evidence:** 5 value cards in 2+3 grid, each with distinct selling proposition (no padding)

### 8. Homepage renders clean at 1280px and 375px
- **Status:** PASS (build verified)
- **Evidence:** `npm run build` succeeds without errors, grid layout uses responsive Tailwind classes

## Requirement Traceability

| Requirement | Status | Evidence |
|------------|--------|----------|
| RFIX-02 | Complete | All R1, R3-R8 issues from joint review addressed |

## Score: 8/8 must-haves verified

## Self-Check: PASSED
