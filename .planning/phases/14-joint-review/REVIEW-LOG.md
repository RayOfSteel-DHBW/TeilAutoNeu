# Joint Review Log — Phase 14

**Date:** 2026-02-27
**Reviewed by:** Owner + Claude
**Scope:** All 8 pages at desktop and mobile widths
**Result:** 31 issues catalogued for Phase 15

## Messaging Context (for Phase 15 copywriting)

- **Core proposition**: All costs shared by actual usage — insurance/tax/TUeV become negligible vs. own car
- **Primary audience**: Household with one car at work, partner needs daytime wheels — "Mietwagen auf Standby"
- **Persona weighting**: Overwhelmingly Zweitwagen users (only ~2 of 60+ are not). When in doubt, optimize for second-car persona. Simone is most representative.
- **Vehicle choice argument**: Right car for the job — XS for errands, M for family, larger via Quernutzung
- **Sustainability angle**: Mention but don't moralize. Pragmatic, not preachy. Area is politically receptive but it's still a car rental, not a movement.
- **Tone**: Sachlich, freundlich, neighbor-to-neighbor. No moralizing, no poverty signals. "Mietwagen auf Standby" as potential card title.

## Issues

### Site-wide

| # | Issue | Details |
|---|-------|---------|
| R2 | Card borders/shadows invisible | `border-brand-muted` (#dcebe3) + `shadow-sm` too low-contrast on white cards against `brand-surface` (#f4f9f6). Fix globally across all pages. |
| R23 | "noch offen" inconsistent | Standardize all placeholder values to `TODO`. Update pricing.json, pricing.js badge logic, impressum.html, geschaeftskunden.html. |
| R28 | mitglied-werden.html missing from nav | Main conversion page not reachable from header navigation. Add as prominent CTA-styled nav item. Background: page was redesigned and content moved around during v1.0, nav link was lost. |

### index.html

| # | Issue | Details |
|---|-------|---------|
| R1 | Hero logo missing | Current `logo.svg` is text-only placeholder. Replace with TeilAuto car icon from `references/old/student-project/.../talogo.svg`. Owner to provide cut version (car only, no "Moessingen" text) or use full SVG. |
| R3 | Card 1: rename + reframe | "Kurze Wege, klare Organisation" -> **"Sie fahren, wir kuemmern uns"**. Enumerate what teilAuto handles: Steuern, Versicherung, Wartung, TUeV, etc. |
| R4 | Card 2: reframe | "Teilen statt besitzen" -> Focus on "Sie zahlen nur wenn Sie fahren" — no pressure to drive just because you're paying. Drop cost enumeration (overlaps card 1). Customers report biking more — but don't advertise that directly. |
| R5 | Card 3: rename + reframe | "Sparsam bleiben" -> **"Merklich guenstiger"**. Placeholder cost comparison variables (NOT sample numbers — use template variables). X% vs. Autovermietung, Y% vs. eigener Zweitwagen. Introduce carsharing-as-Zweitwagen concept. |
| R6 | Card 4: reframe | "Flexibel unterwegs" -> Don't lead with "Zwei Fahrzeuge". Reframe: enough cars locally for daily needs + Quernutzung at 200+ partners = right car deutschlandweit. |
| R7 | Card 5: uncertain value | "Lokal verankert" — provide 3 alternative phrasings during Phase 15. If none land, drop the card. Potential angle: personal support (no call center). |
| R8 | No artificial card minimum | Write as many value cards as there are good selling propositions. Could be 3, could be 6. No arbitrary "must have 5" constraint. |

### fahrzeuge.html

| # | Issue | Details |
|---|-------|---------|
| R9 | Redundant phrasing | Line 28: "in den allermeisten Faellen fast immer" — pick one. |
| R10 | Double word | Line 109: "auf auf" — remove duplicate. |
| R11 | Vehicle placeholders -> PNG | Current SVG icons won't match future real car photos. Change to PNG format placeholders. |
| R12 | Mokka Standort wrong | Change to "Moessingen, Naehe Bahnhof". |
| R13 | Adam Standort wrong | Change to "Moessingen, Naehe Stadtmitte". |
| R14 | Card heights misaligned | Mokka has more description lines than Adam. Use flex/grid so spec rows (Sitze, Ausstattung, Standort) align horizontally across both cards. |
| R15 | "Weitere Standorte" section -> map | Remove standalone section. Instead show all Teilorte (Belsen, Baestenhardt, Talheim, Oeschingen) as "planned" markers on map with tooltip footnote + contact encouragement below. |
| R16 | BCS naming wrong | "BCS/DACHverband-Netzwerk" -> "Bundesverband Carsharing (BCS)". Customers are NOT BCS members — teilAuto Moessingen is the member. Customers access partner vehicles through teilAuto's membership. Applies to all pages referencing BCS. |

### preise.html

| # | Issue | Details |
|---|-------|---------|
| R17 | "(siehe unten)" wrong reference | pricing.js:146 says "siehe unten" for Quernutzung — should link to fahrzeuge.html instead. |
| R18 | Kaution: rephrase | Drop "noch offen" badge. Rephrase: "Zusaetzlich wird bei Abschluss einer Mitgliedschaft eine kleine Kaution faellig. Diese wird bei Austritt inkl. Zinsen zurueckgezahlt." No amount needed. |
| R19 | "Unsere Fahrzeugklassen" -> remove | Detail-level rate tables (Stunde/Folgestunde/Nachtstunde/km) are irrelevant at this stage. Page should center on example calculations. |
| R20 | "Groessere Fahrzeuge" section -> remove | Quernutzung already covered on fahrzeuge.html. |
| R21 | Hinweis/disclaimer -> shrink | With less exact-number material and more sample-calc focus, disclaimer becomes much shorter and less prominent. |

### geschaeftskunden.html

| # | Issue | Details |
|---|-------|---------|
| R24 | "Kosteneinsparungen" — bad lead word | Reframe around "Guenstig" — implies good value, not layoffs. |
| R25 | Insurance = organizational argument | Not just cheaper — nobody in the customer company has to deal with vehicle admin. Merge cost + admin burden framing. |
| R26 | Add personal CTA with phone number | Companies interested but no car in their area -> encourage them to talk to us. Phone number appropriate here (informed B2B audience). |

### ueber-uns.html

| # | Issue | Details |
|---|-------|---------|
| R27 | Replace with student version text | Use owner-written text from `references/old/student-project/.../ueber-uns.html` as base. Personal, authentic tone. Keep BCS/Quernutzung section from current version (with corrected naming per R16). Drop agent-written "Unsere Geschichte" / "Wie wir arbeiten". |

### mitglied-werden.html

| # | Issue | Details |
|---|-------|---------|
| R29 | Filename/identity crisis | Page serves dual purpose: "So funktioniert's" AND "Mitglied werden". Filename says one, title says the other. Needs clear identity decision — consider renaming or splitting. |
| R30 | 2x numbered steps = boring | Steps 1-4 then steps 1-2-3, same green circle design both times. Needs visual differentiation between the two sequences. |
| R31 | "Mitglied werden" should be page 2 | Someone interested in joining will skip "So funktioniert's" and jump to sign-up steps. Force them through how-it-works content first — separate page or scroll gate. |

### Pages without issues

| Page | Status |
|------|--------|
| datenschutz.html | Clean |
| impressum.html | Clean (pending R23 TODO standardization for "noch offen" badges) |

## Deferred (not Phase 15)

- **V2**: Fahrzeuge carousel redesign with map integration
- **V2**: Phone number bot protection
- **V3**: Preise page full redesign with real cost calculations
