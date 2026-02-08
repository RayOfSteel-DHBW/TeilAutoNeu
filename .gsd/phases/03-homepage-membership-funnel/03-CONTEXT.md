# Phase 3: Homepage & Membership Funnel - Context

**Gathered:** 2026-02-08
**Status:** Ready for planning

<domain>
## Phase Boundary

Homepage messaging plus the membership funnel context: value prop, 3-step flow, phone-only join path, hero area, FAQ accordion, and local-area copy.

</domain>

<decisions>
## Implementation Decisions

### Hero message and persona framing

- Headline stays: "Die sparsame Art (k)ein Auto zu haben" for V1.
- Basic hero that works for all personas (no persona-specific targeting in V1).
- Hero can take inspiration from the old site (logo + headline), but the design/CSS must be new.
- No changing text/typing effect in V1; defer dynamic variant to V2.

### 3-step flow and phone-only CTA

- 3-step flow appears only on Mitglied-werden page (not on homepage).
- Phone CTA for calling appears only on Mitglied-werden (and Impressum if needed), not on homepage.
- Homepage can use a non-call CTA like "Mehr erfahren".
- Show call hours near the phone CTA.
- CTA wording is decided ad-hoc during implementation; remind the user before finalizing.

### Homepage interactions

- No typing effect in V1 (static headline).
- FAQ accordion is single-open (space-saving).
- FAQ count: 2-4 starter questions (reuse topics from student version).
- Accordion animation can match current simple behavior; refine later.

### Copilot's Discretion

- Exact hero layout and visual styling within the new design.
- Exact FAQ question set (2-4), based on the student version topics.

</decisions>

<specifics>
## Specific Ideas

- "Steal" the old hero concept (logo + headline) but redesign it; do not reuse old CSS.

</specifics>

<deferred>
## Deferred Ideas

- Rotating/changing hero text ("sparsame/smarte/bequeme") and typing effect are V2.
- Phone CTA on homepage is deferred (scope change for V1.x; needs roadmap update).

</deferred>

---

_Phase: 03-homepage-membership-funnel_
_Context gathered: 2026-02-08_