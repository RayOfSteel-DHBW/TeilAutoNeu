---
phase: 04-pricing-value-system
status: human_needed
score: 17/17
verified: 2026-02-09
---

# Phase 4 Verification: Pricing & Value System

## Goal Achievement

**Phase goal:** "Visitors see a value-first pricing page with 1-2 sample values from JSON, as a demo-quality draft for customer review."

All 6 success criteria and all 11 requirements **pass automated verification**. The pricing page leads with value framing before any numbers, renders all data from `pricing.json` via DOM-only JS, labels unconfirmed values with amber "noch offen" badges, includes the required disclaimer, and restricts vehicle classes to XS/M with larger vehicles referenced via Quernutzung only. Status is `human_needed` solely because visual layout and "demo-quality" appearance require human eyes.

---

## Success Criteria

| # | Criterion | Status | Evidence |
|---|-----------|--------|----------|
| 1 | Value-first framing (neighbours sharing costs) before any numbers | ✓ PASS | `preise.html` L12-26: intro copy begins with "Statt fuer Versicherung, Werkstatt, TUeV und Sprit getrennt zu zahlen, teilen sich bei teilAuto viele Nachbarn diese Kosten" — no prices appear until the JS-rendered `#pricing-values` section below. |
| 2 | 1-2 exact sample values from JSON demo JSON-driven rendering | ✓ PASS | `pricing.json` `usage.time_rate_example`: "ab 2,05 EUR/Std. (Klasse XS) bzw. 2,46 EUR/Std. (Klasse M)" and `usage.km_rate_example`: "ab 0,32 EUR/km (Klasse XS) bzw. 0,36 EUR/km (Klasse M)". Rendered by `pricing.js` `renderValues()` L84-130. |
| 3 | No full tariff table or billing formula; presentation stays light | ✓ PASS | Only per-class rate cards (4 rates each: 1. Stunde, Folgestunde, Nachtstunde, km) and 2 sample calculations. No monthly billing breakdown, no Abrechnung formula, no discount tiers. |
| 4 | Owners can update pricing JSON and redeploy without editing HTML | ✓ PASS | `README.md` "Pricing data" section documents: edit `pricing.json` → `npm run build` → deploy. HTML contains zero hardcoded prices (all in `#pricing-*` containers populated by JS). |
| 5 | Required disclaimer present; missing values labelled "noch offen" | ✓ PASS | `pricing.json` `disclaimer`: "Genaue, aktuelle Preise erhalten Sie im persoenlichen Gespraech und in den aktuellen Vertragsunterlagen." Three values (`deposit`, `annual_fee`, `booking_fee`) set to `"noch offen"`. `pricing.js` `isNochOffen()` L47-49 + `valueOrBadge()` L55-69 render amber badges. |
| 6 | Larger vehicle classes referenced via Quernutzung only | ✓ PASS | `pricing.json` `classes` array contains only `XS` and `M`. `quernutzung`: "Groessere Fahrzeugklassen nutzen Sie ueber Quernutzung bei Partnerorganisationen im bundesweiten Carsharing-Netzwerk." Rendered in `#pricing-quernutzung` section. |

---

## Requirements

| Req | Description | Status | Evidence |
|-----|-------------|--------|----------|
| FOUND-05 | Pricing data sourced from JSON file separate from HTML | ✓ PASS | `site/public/data/pricing.json` is a standalone file; `pricing.js` fetches it via `fetch("./data/pricing.json")`. `preise.html` contains zero price literals. |
| FOUND-06 | Owners can update pricing JSON and deploy via simple PowerShell command | ✓ PASS | `README.md` "Pricing data" section: "Edit `pricing.json` → `npm run build` → deploy `build/dist`." Build script is PowerShell-based (`scripts/build-site.ps1`). |
| CONT-02 | Preise page — key tariff values, sample calculations, abstract presentation, disclaimer | ✓ PASS | Page has: key values (`#pricing-values`), 2 sample calculations (`#pricing-examples`), abstract class cards (`#pricing-classes`), disclaimer (`#pricing-disclaimer`). |
| CONT-08 | Only publish XS and M (current fleet); larger classes via Quernutzung | ✓ PASS | `pricing.json` `classes` = `[{id:"XS",...},{id:"M",...}]`. `quernutzung` text references partner network for larger vehicles. |
| PRICE-01 | 1-2 highlight values to demo JSON-driven rendering | ✓ PASS | `time_rate_example` and `km_rate_example` in `pricing.json` rendered by `renderValues()` as the first data section on the page. |
| PRICE-02 | Pricing data rendered from pricing JSON file | ✓ PASS | `pricing.js` L275: `fetch(PRICING_URL).then(...)` drives all five section renderers — zero hardcoded prices in HTML. |
| PRICE-03 | Abstract pricing — no full tariff detail, no deep billing mechanics | ✓ PASS | Only 4 base rates per class shown. Sample calculations show simple arithmetic ("1 × 2,05 + 1 × 1,00 + 15 × 0,32 = 7,85 EUR"), no billing formula explanation, no discount/cap rules. |
| PRICE-04 | Disclaimer: "Genaue, aktuelle Preise erhalten Sie im persoenlichen Gespraech und in den Unterlagen" | ✓ PASS | `pricing.json` `disclaimer`: "Die hier genannten Angaben dienen der Orientierung. Genaue, aktuelle Preise erhalten Sie im persoenlichen Gespraech und in den aktuellen Vertragsunterlagen. Alle Angaben ohne Gewaehr." Wording matches requirement (expanded with "aktuellen Vertrags-" and "Alle Angaben ohne Gewaehr"). |
| PRICE-05 | Price as selling point but not the lead message | ✓ PASS | `preise.html` L12-26: page opens with value narrative (shared costs, all-inclusive). First price data appears only in the JS-rendered `#pricing-values` div below. |
| PRICE-06 | Missing/non-final values labelled "noch offen" or "Platzhalter" | ✓ PASS | `pricing.json`: `deposit`, `annual_fee`, `booking_fee` = `"noch offen"`. `pricing.js` `isNochOffen()` detects these and `valueOrBadge()` renders amber `<span>` badges. |
| QUAL-04 | Content validated against 02/2022 usage handbook (abstracted for web) | ✓ PASS | `pricing.json` `source_note`: "Werte basieren auf den aktuellen Tarifinformationen (Stand 2022-2024)." XS rates (2,05/1,00/0,65/0,32) and M rates (2,46/1,25/0,75/0,36) match handbook Tarif-A figures. |

---

## Gaps

None found. All 17 checks pass.

---

## Human Verification Needed

The following items require visual inspection in a browser (`npm run build` then open `build/dist/preise.html`):

1. **Value-first visual hierarchy** — Confirm the intro copy is visually prominent and pricing sections don't steal attention from the value message.
2. **"noch offen" badge visibility** — Verify the amber badges for Kaution, Jahresbeitrag, and Buchungsgebuehr are clearly distinguishable.
3. **Responsive layout** — Check that the two-column class cards and example cards stack correctly on mobile viewports.
4. **Demo-quality appearance** — Overall assessment: does the page look polished enough for a customer review meeting?
5. **Disclaimer prominence** — Confirm the disclaimer section at the bottom is readable but not visually dominating.
