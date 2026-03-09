/**
 * nav.js — Design B floating pill navigation toggle
 *
 * Targets #mobile-nav overlay and the hamburger button
 * [aria-controls="mobile-nav"]. NOT the same as site/public/js/nav.js
 * which targets #primary-nav.
 */
(function () {
  "use strict";

  var toggleButton = document.querySelector('[aria-controls="mobile-nav"]');
  var mobileNav = document.getElementById("mobile-nav");

  if (!toggleButton || !mobileNav) return;

  function openNav() {
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("flex");
    toggleButton.setAttribute("aria-expanded", "true");
    toggleButton.setAttribute("aria-label", "Navigationsmen\u00fc schlie\u00dfen");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    mobileNav.classList.add("hidden");
    mobileNav.classList.remove("flex");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-label", "Navigationsmen\u00fc \u00f6ffnen");
    document.body.style.overflow = "";
    toggleButton.focus();
  }

  // Hamburger button click
  toggleButton.addEventListener("click", function () {
    var isOpen = toggleButton.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close button inside overlay
  var closeButton = mobileNav.querySelector('button[aria-label="Men\u00fc schlie\u00dfen"]');
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      closeNav();
    });
  }

  // Escape key closes nav
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggleButton.getAttribute("aria-expanded") === "true") {
      closeNav();
    }
  });

  // Active page indicator on floating nav links
  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll("#floating-nav a");
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href === currentPath && !link.hasAttribute("aria-current")) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
