# Phase 5: Fleet & Locations - Context

**Gathered:** 2026-02-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver a vehicles and locations experience: a fleet-oriented page and an interactive map that shows two active locations plus Don Bosco as planned, with required OSM attribution and no student-project code reuse.

</domain>

<decisions>
## Implementation Decisions

### Availability messaging and framing

- Lead with scenario-based marketing copy that conveys "we have the car for you" rather than a spec-first list.
- Booking confidence should be soft language (not a precise percentage), based on Ursula Stahl's experience (e.g., "in den allermeisten Faellen" / "fast immer verfuegbar").
- Quernutzung should mention the Sprinter as a common special need, without naming specific partner vehicles.
- Planned locations can be mentioned in a vague list: Belsen, Baestenhardt (Don Bosco), Oeschingen.

### Vehicle information focus

- De-emphasize detailed specs; prioritize seats, key equipment (child seat, parking helper), and location.
- The messaging should compensate for the small fleet by emphasizing fit and availability over impressiveness.

### Map interactions and content

- One car per location; vehicles are spread out for better access.
- Markers are clickable and show a tooltip with a small car image and a short description.
- Use generated car icons for the tooltip image; existing photos are not suitable as icons.

### Copilot's Discretion

- Exact tooltip layout and styling details.
- Map controls and interaction tuning (zoom level, scroll/drag behavior).
- Final copy wording for confidence and scenario statements.

</decisions>

<specifics>
## Specific Ideas

- Example short description format: "Opel Mokka E · 5 Sitze · Kindersitz · Parkhilfe · Bahnhofstrasse".
- Quernutzung example should call out "Sprinter" as the typical special case.

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope.

</deferred>

---

_Phase: 05-fleet-locations_
_Context gathered: 2026-02-09_