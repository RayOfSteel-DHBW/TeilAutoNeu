---
phase: 26-epic-directions
plan: 01
one-liner: Canonical v1.3 epic directions restored as a shared spec for Designs A, B, and C.
---

# Phase 26 Summary

## What Was Built

Restored the missing direction-spec layer for v1.3 in
`.planning/phases/26-epic-directions/26-EPIC-DIRECTIONS.md`.

The new document captures the actual structural signatures now governing the
three epic skins:

- Design A: full-bleed immersive hero, sticky dark nav, editorial rule system,
  convenience-first arc
- Design B: asymmetric split hero, floating pill nav, diagonal lime accents,
  cost-first arc
- Design C: stacked editorial hero, minimal non-sticky header with fullscreen
  overlay, organic blob system, community-first arc

## Why This Matters

v1.3 planning had drifted into an awkward state where:

- Phase 26 existed in the roadmap and requirements but not on disk
- Phases 27-29 referenced `26-EPIC-DIRECTIONS.md` as a prerequisite
- later polish/review work had no stable canonical spec to compare against

This summary and the new directions file remove that gap.

## Files

- `.planning/phases/26-epic-directions/26-01-PLAN.md`
- `.planning/phases/26-epic-directions/26-EPIC-DIRECTIONS.md`
- `.planning/phases/26-epic-directions/26-VERIFICATION.md`

## Decisions

- Canonicalized Design C from the active Phase 29 foundation plan and current
  homepage direction rather than waiting for the full implementation to finish.
- Treated the direction doc as a reconstructed shared spec, not as retroactive
  fiction: the text reflects the actual skins already built or actively underway.
