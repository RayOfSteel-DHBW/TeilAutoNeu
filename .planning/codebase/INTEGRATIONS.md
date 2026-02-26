# External Integrations

## APIs & Services

### OpenFreeMap (Map Tiles)

- **URL:** `https://tiles.openfreemap.org/styles/liberty`
- **Used in:** `templates/map-parking.html`
- **Purpose:** Provides OpenStreetMap-based vector tile style for the parking map
- **Auth:** None (free, public API)
- **Protocol:** HTTPS tile requests initiated by MapLibre GL JS client-side

### No backend APIs

The site is fully static. There is no REST API, GraphQL endpoint, or server-side data fetching. All content is hardcoded in Tera templates.

## Data Sources

### Hardcoded content only

- **Pricing data:** Static HTML tables in `src/preise.html` (no JSON/XML data source at build time)
- **Vehicle data:** Static HTML in `src/fahrzeuge.html`
- **FAQ content:** Static HTML in `templates/accordion.html`
- **Map marker coordinates:** Hardcoded `[lng, lat]` arrays in `templates/map-parking.html`:
  - Opel Mokka: `[9.0473, 48.4021]`
  - Opel Adam: `[9.0594, 48.4040]`
  - Planned: Don Bosco `[9.0311, 48.4030]`
  - Planned: Kino `[9.0631, 48.4103]`
- **Contact info:** Phone number `07473-922202` hardcoded in multiple templates

### No databases

No database of any kind (SQL, NoSQL, SQLite, etc.).

### Referenced external data (not consumed)

- `references/old/dokumente_alt/Tarife.xml` exists in the repo but is **not** used by the build or site — it is a legacy reference file.

## Authentication

**None.** The site has no authentication, login, session management, or user accounts. It is a public informational website.

## Third-Party Assets

### Google Fonts (CDN)

Loaded in `templates/base.html` `<head>`:

| Font                       | URL                                                  |
|----------------------------|------------------------------------------------------|
| Chilanka                   | `fonts.googleapis.com/css2?family=Chilanka`          |
| Montserrat (100–900, ital) | `fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900` |
| Material Symbols Outlined  | `fonts.googleapis.com/css2?family=Material+Symbols+Outlined` (icons: `keyboard_arrow_down`, `menu`) |

**Preconnect hints:**
- `https://fonts.googleapis.com`
- `https://fonts.gstatic.com` (crossorigin)

### MapLibre GL JS (CDN)

Loaded in `templates/map-parking.html`:

| Asset              | URL                                            |
|--------------------|------------------------------------------------|
| JS library         | `https://unpkg.com/maplibre-gl/dist/maplibre-gl.js` (defer) |
| CSS                | `https://unpkg.com/maplibre-gl/dist/maplibre-gl.css`        |

- **No pinned version** — both load `latest` from unpkg CDN
- MapLibre GL JS is an open-source fork of Mapbox GL JS (BSD-3-Clause)

### OpenFreeMap Tile Server

| Asset         | URL                                              |
|---------------|--------------------------------------------------|
| Liberty style | `https://tiles.openfreemap.org/styles/liberty`   |

- Free, open-source tile service built on OpenStreetMap data
- No API key required

### External links (outbound, not assets)

| Link                            | Context                        |
|---------------------------------|--------------------------------|
| `https://www.carsharing.de`     | Bundesverband Carsharing — linked in FAQ accordion |

### Local assets (bundled, `public/img/`)

| File             | Usage                          |
|------------------|--------------------------------|
| `talogo.svg`     | Navigation logo, hero section  |
| `bergrutsch.jpg` | Parallax hero background       |
| `mokka.png`      | Vehicle listing (Opel Mokka)   |
| `adam.png`       | Vehicle listing (Opel Adam)    |
| `phone.png`      | How-to section icon            |
| `car.png`        | How-to section icon            |
| `coins.png`      | How-to section icon            |

## Summary of External Dependencies

| Integration        | Critical? | Fallback if unavailable          |
|--------------------|-----------|----------------------------------|
| Google Fonts       | Low       | Browser falls back to system serif/sans-serif |
| Material Symbols   | Low       | Arrow and menu icons disappear   |
| MapLibre GL JS     | Medium    | Parking map section is blank     |
| OpenFreeMap tiles  | Medium    | Map renders but no tile imagery  |
| GitHub Pages       | High      | Site not accessible (deployment) |

**Privacy note:** Google Fonts and unpkg CDN requests expose visitor IPs to Google and Cloudflare respectively. No cookies are set by the site itself. The contact form has no backend — `onsubmit` shows a JS `alert()` only.
