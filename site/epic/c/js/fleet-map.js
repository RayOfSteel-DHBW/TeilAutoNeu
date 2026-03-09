/**
 * fleet-map.js — Fleet map with vehicle markers for Design C.
 *
 * Adapted from site/public/js/fleet-map.js with corrected icon paths
 * to resolve from site/epic/c/ directory via ../../public/img/cars/.
 */
(() => {
  const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";

  const fleetLocations = [
    {
      id: "mokka",
      name: "M\u00f6ssingen, N\u00e4he Bahnhof",
      coords: [9.0473, 48.4021],
      status: "active",
      vehicle: {
        title: "Opel Mokka E",
        iconUrl: "../../public/img/cars/mokka-icon.svg",
        location: "N\u00e4he Bahnhof, M\u00f6ssingen",
        features: ["5 Sitze", "Kindersitz", "Parkhilfe"],
        description: "Opel Mokka E \u00b7 5 Sitze \u00b7 Kindersitz \u00b7 Parkhilfe \u00b7 N\u00e4he Bahnhof",
      },
    },
    {
      id: "adam",
      name: "M\u00f6ssingen, N\u00e4he Stadtmitte",
      coords: [9.0594, 48.4040],
      status: "active",
      vehicle: {
        title: "Opel Adam",
        iconUrl: "../../public/img/cars/adam-icon.svg",
        location: "N\u00e4he Stadtmitte, M\u00f6ssingen",
        features: ["4 Sitze", "Klimaanlage", "Parkhilfe"],
        description: "Opel Adam \u00b7 4 Sitze \u00b7 Klimaanlage \u00b7 Parkhilfe \u00b7 N\u00e4he Stadtmitte",
      },
    },
    {
      id: "donbosco",
      name: "B\u00e4stenhardt (Don Bosco)",
      coords: [9.0311, 48.4030],
      status: "planned",
      vehicle: {
        title: "Geplant",
        iconUrl: "../../public/img/cars/planned-icon.svg",
        location: "B\u00e4stenhardt (Don Bosco)",
        features: [],
        description: "Geplant \u00b7 B\u00e4stenhardt (Don Bosco)",
      },
    },
    {
      id: "belsen",
      name: "Belsen",
      coords: [9.0217, 48.4239],
      status: "planned",
      vehicle: {
        title: "Geplant",
        iconUrl: "../../public/img/cars/planned-icon.svg",
        location: "Belsen",
        features: [],
        description: "Geplant \u00b7 Belsen",
      },
    },
    {
      id: "oeschingen",
      name: "\u00d6schingen",
      coords: [9.0050, 48.3873],
      status: "planned",
      vehicle: {
        title: "Geplant",
        iconUrl: "../../public/img/cars/planned-icon.svg",
        location: "\u00d6schingen",
        features: [],
        description: "Geplant \u00b7 \u00d6schingen",
      },
    },
    {
      id: "talheim",
      name: "Talheim",
      coords: [9.0128, 48.4267],
      status: "planned",
      vehicle: {
        title: "Geplant",
        iconUrl: "../../public/img/cars/planned-icon.svg",
        location: "Talheim",
        features: [],
        description: "Geplant \u00b7 Talheim",
      },
    },
  ];

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function initFleetMap() {
    const mapEl = document.getElementById("fleet-map");
    if (!mapEl) return;

    if (!window.maplibregl || !window.maplibregl.Map) {
      return;
    }

    const map = new window.maplibregl.Map({
      container: mapEl,
      style: STYLE_URL,
      center: [9.035, 48.410],
      zoom: 11,
      minZoom: 10,
    });

    map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), "top-right");
    map.addControl(new window.maplibregl.AttributionControl({ compact: false }), "bottom-right");

    map.scrollZoom.disable();

    const canvasContainer = map.getCanvasContainer();
    canvasContainer.tabIndex = 0;
    canvasContainer.setAttribute("aria-label", "Karte mit Stellpl\u00e4tzen");

    canvasContainer.addEventListener("mousedown", () => {
      canvasContainer.focus();
    });

    canvasContainer.addEventListener("focus", () => {
      map.scrollZoom.enable();
    });

    canvasContainer.addEventListener("blur", () => {
      map.scrollZoom.disable();
    });

    fleetLocations.forEach((location) => {
      const markerEl = document.createElement("button");
      markerEl.type = "button";
      markerEl.className =
        location.status === "planned" ? "fleet-marker fleet-marker--planned" : "fleet-marker";
      markerEl.setAttribute("aria-label", `${location.vehicle.title} - ${location.name}`);

      const featuresHtml = location.vehicle.features.length > 0
        ? `<ul class="fleet-popup__features">${location.vehicle.features.map(f => `<li>${escapeHtml(f)}</li>`).join("")}</ul>`
        : "";

      const popupHtml = `
        <div class="fleet-popup">
          <img class="fleet-popup__icon" src="${escapeHtml(location.vehicle.iconUrl)}" alt="" />
          <div class="fleet-popup__body">
            <div class="fleet-popup__title">${escapeHtml(location.vehicle.title)}</div>
            <div class="fleet-popup__location">${escapeHtml(location.vehicle.location)}</div>
            ${featuresHtml}
          </div>
        </div>
      `;

      const popup = new window.maplibregl.Popup({
        offset: 16,
        closeButton: false,
        closeOnClick: true,
      }).setHTML(popupHtml);

      new window.maplibregl.Marker({ element: markerEl, anchor: "bottom" })
        .setLngLat(location.coords)
        .setPopup(popup)
        .addTo(map);
    });
  }

  window.addEventListener("DOMContentLoaded", initFleetMap);
})();
