# Copyright & Licensing Flags: student-project

**Scanned:** 2026-02-07
**Source:** `references/old/student-project/TA/TA_Website/`

## Summary
- Total items scanned: 28
- HIGH risk: 3
- MEDIUM risk: 3
- LOW risk: 1
- Confirmed safe: 21

## HIGH Risk

| File | Reason | Recommendation |
|------|--------|----------------|
| `public/img/adam.png` | Vehicle photo of Opel Adam. Almost certainly sourced from Opel/Stellantis press materials or marketing images. Manufacturer vehicle photos are copyrighted; use requires explicit permission or a press-use license. No attribution or license present. | **REPLACE** — Commission own photo of the actual vehicle, or request written permission from Stellantis press office |
| `public/img/mokka.png` | Vehicle photo of Opel Mokka-e. Same concern as adam.png — likely from Opel/Stellantis press kit. Manufacturer copyright applies. No attribution or license present. | **REPLACE** — Commission own photo of the actual vehicle, or request written permission from Stellantis press office |
| `public/img/bergrutsch.jpg` | Landscape/nature photograph used as full-page parallax hero background (361 KB). Filename "bergrutsch" (landslide) gives no provenance. High-quality photo with no attribution, EXIF metadata not accessible in repo. Origin completely unknown — could be stock, could be taken from another website. The user confirmed this source has copyright issues. | **REPLACE** — Source a properly licensed landscape photo (e.g., Unsplash/Pexels with attribution, or commission original) |

## MEDIUM Risk

| File | Reason | Recommendation |
|------|--------|----------------|
| `public/img/car.png` | Illustration of a car used in the "how-to" section (125 KB PNG). Origin unknown — no attribution, no filename suggesting source. Could be from an icon pack, stock illustration site, or AI-generated. Cannot verify license. | **VERIFY LICENSE** — Identify original source; if unverifiable, replace with a licensed illustration or icon |
| `public/img/phone.png` | Illustration of a phone used in the "how-to" section (134 KB PNG). Same concerns as car.png — origin unknown, no attribution. | **VERIFY LICENSE** — Identify original source; if unverifiable, replace with a licensed illustration or icon |
| `public/img/coins.png` | Illustration of coins used in the "how-to" section (276 KB PNG). Same concerns as car.png — origin unknown, no attribution. | **VERIFY LICENSE** — Identify original source; if unverifiable, replace with a licensed illustration or icon |

## LOW Risk

| File | Reason | Recommendation |
|------|--------|----------------|
| `public/img/talogo.svg` | TeilAuto organization logo. Created in Inkscape (metadata shows `inkscape:version="1.4"`). This is the organization's own branding — likely owned by teilAuto Mössingen e.K. No third-party copyright concern, but confirm the logo is authorized for use in the new site. | **VERIFY LICENSE** — Confirm with business owner that logo use is authorized for the new project |

## Confirmed Safe

### Fonts (CDN-loaded, no local files)
| Item | License | Notes |
|------|---------|-------|
| Montserrat (Google Fonts) | SIL Open Font License 1.1 | Free for commercial use |
| Chilanka (Google Fonts) | SIL Open Font License 1.1 | Free for commercial use |
| Material Symbols Outlined (Google Fonts) | Apache License 2.0 | Free for commercial use |

No local font files (`.woff`, `.woff2`, `.ttf`, `.otf`) found in the project.

### External Libraries (CDN-loaded)
| Item | License | Notes |
|------|---------|-------|
| MapLibre GL JS (`unpkg.com/maplibre-gl`) | BSD-3-Clause | Free for commercial use |
| OpenFreeMap tiles (`tiles.openfreemap.org`) | ODbL (data), free service | No API key required; attribution required on map |

### Code
| Item | License | Notes |
|------|---------|-------|
| Tera CLI (build tool, not bundled) | MIT | External tool, not distributed with site |
| `scripts/build-site.ps1` | Part of student project | Original code |
| All HTML templates | Part of student project | Original code |
| All CSS files | Part of student project | Original code |
| Inline JavaScript (accordion, map, hamburger) | Part of student project | Original, minimal vanilla JS |
| `.github/workflows/deploy.yml` | Part of student project | Standard GitHub Actions config |
| `.vscode/` configs | Part of student project | Standard VS Code config |
| `package.json` / `package-lock.json` | Part of student project | No third-party npm dependencies |

### Text Content
| Item | Assessment | Notes |
|------|-----------|-------|
| Homepage copy (index.html) | Original | Written specifically for teilAuto Mössingen; references local business details |
| FAQ content (accordion.html) | Original | Business-specific Q&A with real phone numbers and pricing |
| Pricing data (preise.html) | Original | Real business pricing (490€ deposit, tariff tables) |
| Sustainability copy (nachhaltig.html) | Original | General environmental messaging, no copied passages detected |
| Vehicle specs (fahrzeuge.html) | Factual data | Vehicle specifications are factual (not copyrightable); likely sourced from Opel spec sheets |
| Business customer copy (geschaeftskunden.html) | Original | Marketing copy written for teilAuto |
| About us narrative (ueber-uns.html) | Original | Company history with specific details (founded 2000, 60+ users) |
| Membership info (mitglied-werden.html) | Original | Contact form + phone instructions |

---

## Notes

1. **The student project is labeled `UNLICENSED`** in `package.json`. This means the code itself has no open-source license grant. If reusing any code patterns, treat as inspiration only.
2. **All three HIGH-risk images should be replaced** before any production use. The vehicle photos are the most clearly problematic — manufacturer press images carry explicit copyright.
3. **The three MEDIUM-risk illustrations** (car, phone, coins) should be sourced to verify licensing. If the original students cannot provide provenance, replace them.
4. **MapLibre GL JS + OpenFreeMap** require OpenStreetMap attribution on the map itself — the current implementation does not include an attribution control. This is a compliance gap (ODbL requirement), not a copyright risk.
5. **No stock photo filename patterns** (shutterstock_, istockphoto_, getty_, pexels_, unsplash_) were detected, but absence of watermark prefixes does not confirm legitimacy.
