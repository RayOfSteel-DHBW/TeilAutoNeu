# Phase 02 Research: Core UX and Navigation

## Goal
Build a clean-slate base UX system: new templates, responsive navigation shell, and brand styling guardrails. Remove all student-project HTML/CSS/JS from `site/src` and reauthor from scratch.

## Key Constraints (from project docs)
- Static HTML + Tailwind CSS, no SPA/CMS/runtime.
- Mobile-first layout with hamburger nav required.
- White/green palette, consistent `teilAuto` casing, and consistent phone format.
- Copy tone: Sie-Ansprache, sachlich/freundlich, no moralizing or poverty signals.
- Student-project code is unlicensed and must not be reused.

## Current Implementation Notes
- Build uses Tera templates (`site/templates`) and renders pages from `site/src`.
- There are page-specific HTML/CSS files in `site/src` that must be deleted and reauthored.
- Tailwind is available via `@tailwindcss/cli`; base styles can be layered with `site/src/tailwind.css` and `site/src/base.css`.

## UX/Navigation Recommendations
- Create a fresh `templates/base.html` with a minimal semantic shell (skip copied markup).
- Provide a consistent header, main, and footer structure across stubs.
- Hamburger menu should be accessible: button with `aria-controls`, `aria-expanded`, and a simple JS toggle.
- Avoid placing the phone number globally in the header (requirement is to keep phone CTA in membership contexts).

## Brand Styling Recommendations
- Define a brand palette in CSS variables, then map to Tailwind utilities if needed.
- Set an intentional type pairing (non-default) for headings and body.
- Keep spacing scale and container widths consistent to reduce later refactors.
- Introduce copy guardrails in a notes doc so later content work remains consistent.

## Risks
- Leaving any student-project HTML/CSS in place violates the license constraint.
- Adding the phone number to a global nav/header would violate the membership-only CTA rule.
- Over-styling too early may slow content work; focus on base layout and guardrails first.

## Proposed Plan Shape
- Plan 02-01: remove all student code, add fresh base template + page stubs.
- Plan 02-02: implement responsive layout and navigation shell with JS toggle.
- Plan 02-03: define brand palette, typography, and copy guardrails.
