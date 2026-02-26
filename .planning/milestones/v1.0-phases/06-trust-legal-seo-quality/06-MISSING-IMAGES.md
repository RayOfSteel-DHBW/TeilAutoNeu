# Missing and Copyright-Flagged Images Ledger

**Generated:** 2026-02-24
**Phase:** 06-trust-legal-seo-quality
**Purpose:** Track image copyright status for pre-launch review. Owner must supply replacement photos for flagged items before launch.

---

## Image Asset Register

| File | Source | License | Status | Action Needed |
|------|--------|---------|--------|---------------|
| `site/public/img/talogo.svg` | Owner-supplied (student project, co-created with Ralf Stahl) | Owner permission | CLEAR | None |
| `site/public/img/og-image.png` | Generated programmatically (solid brand-green 1200x630 PNG) | Original creation | CLEAR | Optional: owner may supply a branded design with logo and text overlay |
| `site/public/img/mokka.png` | Unknown origin — likely manufacturer press image | Unknown — HIGH copyright risk | RESOLVED (placeholder) | Owner to supply own photo of the Opel Mokka E. Vehicle image slot currently shows CSS placeholder card. Replace `mokka.png` with owner-supplied photo and restore `<img>` tag in `site/src/fahrzeuge.html` |
| `site/public/img/adam.png` | Unknown origin — likely manufacturer press image | Unknown — HIGH copyright risk | RESOLVED (placeholder) | Owner to supply own photo of the Opel Adam. Vehicle image slot currently shows CSS placeholder card. Replace `adam.png` with owner-supplied photo and restore `<img>` tag in `site/src/fahrzeuge.html` |
| `site/public/img/bergrutsch.jpg` | Unknown origin — news/event photo | Unknown — HIGH copyright risk | NOT REFERENCED | This image is not used on any current page. No action required for V1 launch. Owner should remove or replace if they plan to use it in future. |
| `site/public/img/car.png` | Unknown origin | Unknown | NOT REFERENCED | Not used on any current page. No action required for V1 launch. |
| `site/public/img/phone.png` | Unknown origin | Unknown | NOT REFERENCED | Not used on any current page. No action required for V1 launch. |
| `site/public/img/coins.png` | Unknown origin | Unknown | NOT REFERENCED | Not used on any current page. No action required for V1 launch. |
| `site/public/img/cars/mokka-icon.svg` | Created during development | Original creation | CLEAR | None — used as placeholder icon in vehicle card |
| `site/public/img/cars/adam-icon.svg` | Created during development | Original creation | CLEAR | None — used as placeholder icon in vehicle card |
| `site/public/img/cars/planned-icon.svg` | Created during development | Original creation | CLEAR | None — used for planned locations marker |

---

## Resolution Summary

### Before V1 Launch (Required)

1. **Opel Mokka E photo**: Take or obtain a rights-clear photo of the actual vehicle. Replace `site/public/img/mokka.png` with the new photo. In `site/src/fahrzeuge.html`, replace the CSS placeholder div with:
   ```html
   <img src="/img/mokka.png" alt="Opel Mokka E, das elektrische Carsharing-Fahrzeug von teilAuto Moessingen" class="mt-4 w-full rounded-2xl border border-brand-muted bg-brand-surface" loading="lazy" />
   ```

2. **Opel Adam photo**: Take or obtain a rights-clear photo of the actual vehicle. Replace `site/public/img/adam.png` with the new photo. In `site/src/fahrzeuge.html`, replace the CSS placeholder div with:
   ```html
   <img src="/img/adam.png" alt="Opel Adam, das kompakte Carsharing-Fahrzeug von teilAuto Moessingen" class="mt-4 w-full rounded-2xl border border-brand-muted bg-brand-surface" loading="lazy" />
   ```

### Optional

- **OG image** (`og-image.png`): Current OG image is a solid green (#16a34a) 1200x630 PNG. For better social sharing previews, consider a branded design with the teilAuto logo and "teilAuto Moessingen / Carsharing im Steinlachtal" text. Any image editor or design tool can create this at 1200x630px.

---

*This ledger fulfils the UX-03 requirement (copyright-clear images) for Phase 6.*
*Owner actions needed before launch are marked as "RESOLVED (placeholder)" — meaning the site is launch-safe but shows placeholder cards instead of vehicle photos.*
