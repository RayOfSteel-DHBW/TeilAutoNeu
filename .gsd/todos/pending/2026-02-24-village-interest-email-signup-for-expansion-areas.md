---
created: 2026-02-24T13:55:53.130Z
title: Village interest email signup for expansion areas
area: ui
files:
  - site/templates/accordion.html:38
---

## Problem

teilAuto currently operates only in Moessingen. The FAQ answer about village coverage ("Wo ist teilAuto aktiv?") now mentions aspirational expansion to Belsen, Talheim, and Oeschingen with a phone CTA. But phone calls are a high-friction way to signal interest — a lightweight email signup would let potential members from surrounding villages register demand without calling.

Business logic: ~30 signups from a specific village would justify placing a car there.

## Solution

Add a simple email collector near the FAQ village expansion answer (or as a dedicated small section on the homepage). Options:

- Mailchimp/Brevo embedded form (no backend needed, free tier sufficient)
- Simple HTML form posting to a free form service (Formspree, Basin)
- Minimal: just a mailto: link with a pre-filled subject line per village

The signup should capture: email address + which village they're from (dropdown or separate links per village). No account creation, no newsletter commitment — just "Ich habe Interesse an Carsharing in [Ort]".

This is a V2 feature — requires consent handling (DSGVO) and the planned cookie/analytics consent banner from the Datenschutzerklaerung forward-looking section.
