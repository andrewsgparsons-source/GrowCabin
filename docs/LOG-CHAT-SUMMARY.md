# Grow Cabin — conversation log (summary)

This file captures the key decisions, ideas, and artifacts discussed in chat so nothing gets lost.

## Positioning / framing
- Project is best framed as **Controlled-Environment Agriculture (CEA)** (enclosed, controllable system). "Digital ag" can apply if we later add platform/traceability; "precision ag" is usually open-field spatial variability.
- Emphasis: **isolated/controlled environment** to make outcomes repeatable.

## Use cases (current priority)
- **Mushrooms**
  - Key controls: humidity + fresh air exchange (FAE) / CO₂ + temperature
  - Big risks: contamination, condensation / over-wetting
- **Spring greens** (microgreens/baby leaf direction TBD)
  - Key controls: light schedule/intensity + watering approach + airflow to avoid damping-off

## Platform concept
- Common architecture: **sense → decide → actuate → log**
- Control approach: start with **rules + hysteresis** + stage schedules; consider advanced control later.
- Differentiator: **recipes** (stages + ranges + schedules + safety limits) + **logging** for repeatability and support.

## Product decision trees (tracked in PROJECT.md + Decision Map)
- Market: home growers first (possible expansion later)
- Crop focus: mushrooms-first vs greens-first vs dual from day 1
- Architecture: one chamber vs two variants / inserts
- Isolation tiers: Tier 1 stabilised enclosure vs Tier 2 managed exchange vs Tier 3 near-sealed
- Control strategy: robust/explainable first

## Naming / brand brainstorm
- A set of candidate names was proposed; Andrew preference converged on **Grow Cabin**.
- Open decision: Grow Cabin (two words) vs GrowCabin (one word) as canonical form.

## Project visibility & tooling
- Created **Grow Cabin project file**: `notes/projects/grow-cabin/PROJECT.md`
- Created a full **web-based project board** (Kanban + decision map + brain/mind map + rules):
  - GitHub repo: `andrewsgparsons-source/GrowCabin`
  - GitHub Pages intended URL: https://andrewsgparsons-source.github.io/GrowCabin/

## Investor route
- Drafted the "route to first investor" flow and saved it as:
  - `notes/projects/grow-cabin/INVESTOR_ROUTE.md`

## Decision support artifacts added
- Species matrix: `docs/MUSHROOM_SPECIES_SELECTION_MATRIX_V0.md`
- Greens format matrix: `docs/GREENS_FORMAT_SELECTION_MATRIX_V0.md`
- Architecture matrix: `docs/ARCHITECTURE_ONE_VS_TWO_CHAMBERS_MATRIX_V0.md`
- Isolation tier matrix: `docs/ISOLATION_TIER_SELECTION_MATRIX_V0.md`
- Recipe schema draft: `docs/RECIPE_SCHEMA_V0.md`
- Prototype runbooks/design docs:
  - `docs/PROTOTYPE_0_INSTRUMENTATION_RUNBOOK.md`
  - `docs/PROTOTYPE_1_HUMIDITY_LOOP_DESIGN.md`
  - `docs/PROTOTYPE_1_FAE_SCHEDULING_DESIGN.md`
  - `docs/PROTOTYPE_2_LIGHTING_STRATEGY.md`
  - `docs/PROTOTYPE_2_WATERING_STRATEGY.md`
  - `docs/CONTAMINATION_CLEANABILITY_PRINCIPLES_V0.md`

## Open items
- Confirm final v0 choices with Andrew (species, greens format, architecture, isolation tier)
- Finalise target price band posture
- Build proof package and demand signals for investor lane

