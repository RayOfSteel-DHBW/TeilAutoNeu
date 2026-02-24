(() => {
  const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";

  const fleetLocations = [
    {
      id: "mokka",
      name: "Mössingen, Bahnhofstraße",
      coords: [9.0473, 48.4021],
      status: "active",
      vehicle: {
        title: "Opel Mokka E",
        iconUrl: "/img/cars/mokka-icon.svg",
        description: "Opel Mokka E \u00b7 5 Sitze \u00b7 Kindersitz \u00b7 Parkhilfe \u00b7 Bahnhofstraße",
      },
    },
    {
      id: "adam",
      name: "Mössingen, Innenstadt",
      coords: [9.0594, 48.4040],
      status: "active",
      vehicle: {
        title: "Opel Adam",
        iconUrl: "/img/cars/adam-icon.svg",
        description: "Opel Adam \u00b7 4 Sitze \u00b7 Klimaanlage \u00b7 Parkhilfe \u00b7 Innenstadt",
      },
    },
    {
      id: "donbosco",
      name: "Bästenhardt (Don Bosco)",
      coords: [9.0311, 48.4030],
      status: "planned",
      vehicle: {
        title: "Geplant",
        iconUrl: "/img/cars/planned-icon.svg",
        description: "Geplant \u00b7 Bästenhardt (Don Bosco)",
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
      center: [9.0502, 48.4032],
      zoom: 13,
      minZoom: 10,
    });

    map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), "top-right");
    map.addControl(new window.maplibregl.AttributionControl({ compact: false }), "bottom-right");

    map.scrollZoom.disable();

    const canvasContainer = map.getCanvasContainer();
    canvasContainer.tabIndex = 0;
    canvasContainer.setAttribute("aria-label", "Karte mit Stellplätzen");

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

      const popupHtml = `
        <div class="fleet-popup">
          <img class="fleet-popup__icon" src="${escapeHtml(location.vehicle.iconUrl)}" alt="" />
          <div class="fleet-popup__body">
            <div class="fleet-popup__title">${escapeHtml(location.vehicle.title)}</div>
            <div class="fleet-popup__meta">${escapeHtml(location.vehicle.description)}</div>
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
