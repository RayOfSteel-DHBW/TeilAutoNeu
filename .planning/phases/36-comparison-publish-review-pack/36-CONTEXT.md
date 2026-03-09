# Phase 36: Comparison Publish & Review Pack - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning
**Source:** User instructions for the sequential v1.4 polish milestone plus active v1.4 docs

<domain>
## Phase Boundary

- Deliver the shared comparison surface on the current branch.
- A reviewer must be able to choose a version first from one shared start page/version picker.
- The canonical implementations remain `site/epic/a/`, `site/epic/b/`, and `site/epic/c/`.
- Write brief owner-facing comparison instructions.
- Verify the shared comparison surface in browser after implementation.
- Do not redesign the skin directories during this phase unless a small blocker fix is required to make the shared surface truthful.
- If structured review-capture is still needed after this phase, propose a new forward phase number instead of routing back to Phase 30.

</domain>

<decisions>
## Locked Decisions

### Execution Model

- This phase may use the shared browser for verification, so it must remain serial after Phase 35.
- Only one browser-using agent may be active at a time.

### Scope Guardrails

- Keep the one-branch comparison model intact.
- The shared start page/version picker belongs to this phase, not to the skin-specific polish phases.
- Do not move or rename `site/epic/a/`, `site/epic/b/`, or `site/epic/c/`.

</decisions>

<specifics>
## Specific References

- `.planning/PROJECT.md`
- `.planning/ROADMAP.md`
- `.planning/REQUIREMENTS.md`
- `.planning/STATE.md`
- `.planning/v1.4-MILESTONE-BRIEF.md`
- `.planning/phases/32-polish-baseline-review-surface/32-REVIEW-SURFACE.md`

</specifics>

<deferred>
## Deferred / Out Of Scope

- A new structured review-capture phase after publish
- Design D synthesis work

</deferred>

---

*Phase: 36-comparison-publish-review-pack*
*Context gathered: 2026-03-09 from user instructions and active v1.4 docs*
