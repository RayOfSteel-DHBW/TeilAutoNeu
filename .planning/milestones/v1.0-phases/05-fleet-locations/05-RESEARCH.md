# Phase 5: Fleet & Locations - Research

**Researched:** 2026-02-09
**Domain:** Static site mapping (MapLibre GL JS + OpenFreeMap)
**Confidence:** LOW (no external docs available in this environment)

## Summary

This research focuses on implementing a static HTML + JS fleet and locations map with MapLibre GL JS and OpenFreeMap tiles, plus clickable markers and tooltips. The standard approach is a data-driven array of locations (lat/lng + vehicle info), a single map initialization, and marker/popups built from DOM nodes or HTML strings.

Attribution is a legal requirement for OpenStreetMap-derived tiles; plan for a visible attribution control and ensure the text is always visible on the map. Because external documentation is not accessible here, all details below should be verified against official MapLibre and OpenFreeMap docs before final implementation.

**Primary recommendation:** Use MapLibre GL JS with an OpenFreeMap style URL, render markers from a single data array, and wire popups with small generated car icons while ensuring OSM attribution is always visible.

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard | Confidence |
| --- | --- | --- | --- | --- |
| MapLibre GL JS | latest stable (verify) | WebGL map rendering, markers, popups, controls | De-facto open-source GL map stack for vector tiles | LOW |
| OpenFreeMap styles/tiles | hosted style URL (verify) | Basemap tiles and styles | Common open tiles alternative with OSM attribution | LOW |

### Supporting

| Library | Version | Purpose | When to Use | Confidence |
| --- | --- | --- | --- | --- |
| MapLibre GL CSS | matching MapLibre version | Default map UI styling (controls, attribution) | Always include for correct control styling | LOW |

**Installation (static site):**
- Prefer CDN script + CSS for MapLibre GL JS, or vendor a pinned version in /assets if offline required. Verify CDN URL and version.
- Use OpenFreeMap style URL from official docs; do not guess endpoints in production.

## Architecture Patterns

### Pattern 1: Data-driven locations list

**What:** Define a single array of location objects with coordinates, vehicle info, and copy used for popups.
**When to use:** Always; it keeps map rendering and page copy in sync.
**Example:**
```html
<script>
const fleetLocations = [
  {
    id: "tuebingen",
    name: "Bahnhofstrasse",
    coords: [9.055, 48.521],
    vehicle: {
      title: "Opel Mokka E",
      seats: "5 Sitze",
      features: ["Kindersitz", "Parkhilfe"],
      iconUrl: "/assets/img/cars/mokka-icon.png"
    },
    status: "active"
  },
  {
    id: "belsent",
    name: "Belsen",
    coords: [9.075, 48.465],
    vehicle: {
      title: "VW ID.3",
      seats: "5 Sitze",
      features: ["Kindersitz"],
      iconUrl: "/assets/img/cars/id3-icon.png"
    },
    status: "active"
  },
  {
    id: "donbosco",
    name: "Baestenhardt (Don Bosco)",
    coords: [9.10, 48.48],
    vehicle: {
      title: "Geplant",
      seats: "-",
      features: ["Standort geplant"],
      iconUrl: "/assets/img/cars/planned-icon.png"
    },
    status: "planned"
  }
];
</script>
```
**Confidence:** LOW (pattern is standard, but not verified with docs here)

### Pattern 2: Single map init + marker loop

**What:** Initialize MapLibre once, then loop through `fleetLocations` to add markers and popups.
**When to use:** Always; avoids redundant map instances and keeps markers consistent.
**Example:**
```html
<div id="fleet-map" class="fleet-map"></div>
<script>
const map = new maplibregl.Map({
  container: "fleet-map",
  style: "OPENFREEMAP_STYLE_URL", // verify from official docs
  center: [9.07, 48.50],
  zoom: 11,
  cooperativeGestures: true
});

map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
map.addControl(new maplibregl.AttributionControl({ compact: true }));

fleetLocations.forEach((loc) => {
  const markerEl = document.createElement("button");
  markerEl.className = loc.status === "planned" ? "fleet-marker planned" : "fleet-marker";
  markerEl.setAttribute("type", "button");
  markerEl.setAttribute("aria-label", `${loc.vehicle.title} - ${loc.name}`);

  const popupHtml = `
    <div class="fleet-popup">
      <img src="${loc.vehicle.iconUrl}" alt="" class="fleet-popup__icon" />
      <div class="fleet-popup__body">
        <div class="fleet-popup__title">${loc.vehicle.title}</div>
        <div class="fleet-popup__meta">${loc.vehicle.seats} · ${loc.vehicle.features.join(" · ")} · ${loc.name}</div>
      </div>
    </div>
  `;

  const popup = new maplibregl.Popup({ offset: 16, closeButton: false }).setHTML(popupHtml);
  new maplibregl.Marker({ element: markerEl, anchor: "bottom" })
    .setLngLat(loc.coords)
    .setPopup(popup)
    .addTo(map);
});
</script>
```
**Confidence:** LOW (MapLibre API shapes should be verified)

### Pattern 3: DOM-ready guard

**What:** Ensure the map initializes after DOM is ready and the container has a fixed height.
**When to use:** Always for static HTML.
**Example:**
```html
<script>
window.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("fleet-map");
  if (!mapEl) return;
  // init map here
});
</script>
```
**Confidence:** MEDIUM (general web pattern)

### Anti-Patterns to Avoid

- **Multiple map instances:** wastes GPU and breaks event handling. Use one map and add markers.
- **Missing explicit container height:** map renders at 0px height and appears blank.
- **Markers without accessible labels:** tooltips become hard to use with keyboard or screen readers.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why | Confidence |
| --- | --- | --- | --- | --- |
| Map rendering | Custom canvas/WebGL map | MapLibre GL JS | Mature controls, vector tiles, events, attribution tooling | LOW |
| Marker popups | DIY tooltip positioning | MapLibre Popup | Handles anchor offsets and screen edge positioning | LOW |
| Attribution compliance | Custom footer text only | MapLibre AttributionControl + required text | Ensures visibility and legal compliance | LOW |

**Key insight:** Map UX and attribution edge cases are easy to get wrong; built-in controls save time and reduce legal risk.

## Common Pitfalls

### Pitfall 1: OSM attribution not visible

**What goes wrong:** Required attribution is hidden or removed, violating license terms.
**Why it happens:** Custom CSS hides attribution, or developers forget to enable it.
**How to avoid:** Add MapLibre attribution control and verify the text appears at all breakpoints.
**Warning signs:** Map corner is empty or attribution only visible on hover.
**Confidence:** LOW

### Pitfall 2: Map container has no height

**What goes wrong:** Map renders blank because the container collapses.
**Why it happens:** `#fleet-map` has no explicit height in CSS.
**How to avoid:** Set a fixed height (e.g., 360-520px) and adjust at breakpoints.
**Warning signs:** Map div exists but is invisible; console has no errors.
**Confidence:** MEDIUM

### Pitfall 3: Popup content overflows or blocks taps

**What goes wrong:** Popups render offscreen or capture clicks, making markers hard to use.
**Why it happens:** Large popup content or missing offset.
**How to avoid:** Keep popups compact, use `offset`, and test on mobile.
**Warning signs:** Popups cut off at map edge or require multiple taps to close.
**Confidence:** LOW

### Pitfall 4: Map not resized after layout changes

**What goes wrong:** Map tiles misalign after tabs or accordion open.
**Why it happens:** MapLibre requires `map.resize()` after container size changes.
**How to avoid:** Call `map.resize()` after any visibility toggle.
**Warning signs:** Tiles appear clipped or offset.
**Confidence:** LOW

## Code Examples

### Static HTML + JS integration (minimal)

```html
<link rel="stylesheet" href="MAPLIBRE_CSS_URL" />
<div id="fleet-map" class="fleet-map"></div>
<script src="MAPLIBRE_JS_URL"></script>
<script>
window.addEventListener("DOMContentLoaded", () => {
  const map = new maplibregl.Map({
    container: "fleet-map",
    style: "OPENFREEMAP_STYLE_URL", // verify from OpenFreeMap docs
    center: [9.07, 48.50],
    zoom: 11
  });

  map.addControl(new maplibregl.AttributionControl({ compact: true }));
});
</script>
```
**Confidence:** LOW (URLs and API should be verified)

### Tooltip markup pattern (compact vehicle summary)

```html
<div class="fleet-popup">
  <img src="/assets/img/cars/mokka-icon.png" alt="" class="fleet-popup__icon" />
  <div class="fleet-popup__body">
    <div class="fleet-popup__title">Opel Mokka E</div>
    <div class="fleet-popup__meta">5 Sitze · Kindersitz · Parkhilfe · Bahnhofstrasse</div>
  </div>
</div>
```
**Confidence:** MEDIUM (HTML pattern is generic)

## Sources

### Primary (HIGH confidence)

- None (external docs not accessible in this environment)

### Secondary (MEDIUM confidence)

- None

### Tertiary (LOW confidence)

- MapLibre GL JS official docs (not accessed)
- OpenFreeMap official docs (not accessed)
- OpenStreetMap attribution requirements (not accessed)

## Metadata

**Confidence breakdown:**

- Standard stack: LOW (no verified external sources)
- Architecture: LOW (API details unverified)
- Pitfalls: LOW (common knowledge, unverified)

**Research date:** 2026-02-09
**Valid until:** 2026-03-09 (re-verify against current docs)
