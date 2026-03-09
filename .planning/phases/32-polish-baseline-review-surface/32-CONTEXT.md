# Phase 32: Polish Baseline & Review Surface - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning
**Source:** User instructions for `/gsd:plan-phase 32 --auto` plus active v1.4 polish docs

<domain>
## Phase Boundary

- This is the shared baseline phase for the v1.4 polish milestone.
- Align the active planning docs so v1.4 is the canonical current milestone for Phases 32-36.
- Verify the real directory and page inventory for `site/epic/a/`, `site/epic/b/`, and `site/epic/c/`.
- Lock the comparison-surface contract: one branch, shared start page/version picker first, then stable A/B/C paths.
- Do not perform the skin-specific review/fix loops here.
- Do not build the shared picker itself here; implementation belongs to Phase 36.
- Do not route backward to Phase 30. If structured review-capture is still needed after Phase 36, propose a new forward phase.

</domain>

<decisions>
## Locked Decisions

### Execution Model

- Browser-bearing phases must run sequentially because the repo has one shared browser resource.
- Planning must compensate for `parallelization=true`: any plan that uses Playwright, browser verification, screenshots, or browser state must not be grouped into a parallel browser wave.
- Phase order for this milestone is 32 -> 33 -> 34 -> 35 -> 36.

### Scope Guardrails

- Keep `site/epic/a/`, `site/epic/b/`, and `site/epic/c/` as the canonical implementation directories.
- Shared comparison-surface ownership belongs to Phase 32 and Phase 36, not to the skin-specific polish phases.
- This phase may edit active planning docs and phase-local baseline artifacts, but it should not redesign or polish any skin page.

### Deliverables

- Active docs aligned to v1.4.
- A written A/B/C inventory artifact.
- A written shared comparison contract artifact.

</decisions>

<specifics>
## Specific References

- `.planning/PROJECT.md`
- `.planning/ROADMAP.md`
- `.planning/REQUIREMENTS.md`
- `.planning/STATE.md`
- `.planning/v1.4-MILESTONE-BRIEF.md`
- `.planning/v1.4-REQUIREMENTS-DRAFT.md`
- `.planning/v1.4-ROADMAP-DRAFT.md`
- `.planning/v1.4-EXECUTION-PROMPTS.md`
- `.planning/milestones/v1.0-REQUIREMENTS.md`

## Canonical Skin Paths

1. `site/epic/a/`
2. `site/epic/b/`
3. `site/epic/c/`

</specifics>

<deferred>
## Deferred / Out Of Scope

- Design A, B, or C page-level polish
- Shared start page/version picker implementation
- Structured review capture or synthesis work after comparison publish

</deferred>

---

*Phase: 32-polish-baseline-review-surface*
*Context gathered: 2026-03-09 from user instructions and active v1.4 docs*
