# Grow Cabin — Project Delta Briefing

_Issued: 2026-02-11 15:35 (Europe/London)_

## In one sentence
We’ve moved from broad concept planning into structured execution: control-system definitions, recipe/schema architecture, decision matrices, prototype stack clarity, cost framing, and a working interactive model are now in place.

## Executive delta (since last briefing)
- Environmental-control architecture is now defined across P0/P1/P2, with dedicated docs for instrumentation, humidity loop, FAE scheduling, lighting, and watering.
- Contamination and cleanability are now formal design constraints (not “later” hygiene notes).
- Recipe abstraction now exists as a schema (`RECIPE_SCHEMA_V0`) with stage-based control structure and versioning logic.
- Decision matrices were added for species, greens format, architecture, and isolation tier.
- MVP stack and component options are now documented with explicit trade-off scoring.
- Cost framing matured with synthesized BOM/cost documents and early pricing-band thinking.
- Investor enablement improved via a one-page brief + proof-pack checklist.
- Partner strategy is now operationally scoreable via shortlist + weighted scoring rubric.
- Promo work moved from idea to first execution artifact (30s script + shot list).
- Interactive Babylon.js parametric prototype model is live and configurable.
- Navigation/operations improved with top-level dashboard and system-wide return-to-dashboard flow.

## What we built/updated (artifacts)
| Artifact | Why it matters |
|---|---|
| `PROTOTYPE_0_INSTRUMENTATION_RUNBOOK.md` | Turns P0 into a repeatable measurement process |
| `PROTOTYPE_1_HUMIDITY_LOOP_DESIGN.md` | Defines first closed-loop RH strategy and guardrails |
| `PROTOTYPE_1_FAE_SCHEDULING_DESIGN.md` | Makes airflow scheduling explicit and tunable |
| `PROTOTYPE_2_LIGHTING_STRATEGY.md` | Establishes practical greens lighting baseline |
| `PROTOTYPE_2_WATERING_STRATEGY.md` | Defines low-risk watering progression from manual to automated |
| `CONTAMINATION_CLEANABILITY_PRINCIPLES_V0.md` | Embeds contamination risk control in design/process |
| `RECIPE_SCHEMA_V0.md` | Creates a shared software/control language for stages and limits |
| `MUSHROOM_SPECIES_SELECTION_MATRIX_V0.md` | Forces species choice with transparent criteria |
| `GREENS_FORMAT_SELECTION_MATRIX_V0.md` | Forces initial greens format choice with trade-offs |
| `ARCHITECTURE_ONE_VS_TWO_CHAMBERS_MATRIX_V0.md` | Clarifies architecture path and risks |
| `ISOLATION_TIER_SELECTION_MATRIX_V0.md` | Clarifies control-tier target for v0 |
| `MVP_STACK_V0.md` + `PROTOTYPE_COMPONENT_OPTIONS_V1.md` | Aligns hardware choice to prototype goals |
| `COSTS_JAMES_SYNTHESIS.md` + `PRICING_BANDS_V0.md` | Grounds strategy in cost structure |
| `ONE_PAGE_BRIEF_V0.md` + `INVESTOR_PROOF_PACK_CHECKLIST.md` | Improves investor readiness discipline |
| `PARTNERS_UK_SHORTLIST_V0.md` + `PARTNER_SCORING_RUBRIC_V0.md` | Adds repeatable partner selection method |
| `PROMO_VIDEO_30S_SCRIPT_AND_SHOTLIST_V0.md` | Moves marketing from abstract to executable |
| `prototype-model.html` | Gives a visual parametric prototype surface for rapid iteration |

## Kanban movement summary
Major cards moved into in-progress (or significantly advanced):
- `gc-001` species decision
- `gc-002` greens format decision
- `gc-003` one vs two chamber decision
- `gc-004` isolation tier decision
- `gc-006` MVP stack definition
- `gc-007` recipe schema design
- `gc-008` P0 instrumentation runbook
- `gc-009` P1 humidity loop
- `gc-010` P1 FAE scheduling
- `gc-011` P2 lighting strategy
- `gc-012` P2 watering strategy
- `gc-013` contamination/cleanability
- `gc-014` name-form decision
- `gc-018` roadmap/log maintenance
- `gc-024` partner scoring progression
- `gc-025` promo script/shotlist kickoff

## Decision maturity update
| Area | Current recommendation | Confidence | Missing evidence |
|---|---|---|---|
| Species | Oyster-first | Medium | Full-cycle contamination + yield repeatability |
| Greens format | Microgreens-first | Medium | Margin sensitivity + watering reliability |
| Architecture | Single chamber first | Medium | Cross-mode compromise/failure data |
| Isolation tier | Tier 2 target | Medium | Mold/failure rates under real run conditions |
| Pricing posture | Mid-market controls-first | Medium | Competitor/elasticity validation |
| Name form | Display: “Grow Cabin”, slug: `growcabin` | Low–Medium | Live market feedback |

## Prototype progression update
### P0 — Instrument + learn
**Now defined:** instrumentation runbook, telemetry fields, operating cadence.
**Still open:** exact sensor lock, calibration protocol, data retention workflow.

### P1 — Closed-loop basics
**Now defined:** humidity hysteresis model + FAE scheduling baseline + guardrails.
**Still open:** constants tuning, lag behavior, geometry dependency effects.

### P2 — Greens subsystem
**Now defined:** lighting and watering strategy paths.
**Still open:** tray standardization, drainage design, thermal/electrical interaction details.

## Risks and constraints introduced by recent changes
- **Documentation ahead of validation** — mitigation: gate each design doc behind a physical test loop.
- **Parallel decision fatigue** — mitigation: force decision order (species → architecture → isolation).
- **Early lock-in risk** — mitigation: keep modular stack and explicit reversal triggers.
- **Pricing anchoring too early** — mitigation: keep external messaging provisional.
- **Contamination underestimation** — mitigation: add early stress tests and event logging discipline.
- **Narrative outrunning evidence** — mitigation: frame output as prototype journey, not finished product claim.

## What we’re deciding next (Andrew decisions needed)
1. Lock single-species v0 now (yes/no).
2. Lock single-chamber v0 now (yes/no).
3. Lock Tier-2 target for v0 (yes/no).
4. Decide launch scope: mushrooms-only vs mushrooms+greens.
5. Confirm pricing posture: mid-market now vs defer.

## Next 7 actions (ranked)
1. Lock species and create `mushroom-oyster-v0` executable recipe.
2. Run contamination stress checks tied to cleanability SOP.
3. Validate humidity loop assumptions in chamber test.
4. Reduce MVP stack to one concrete procurement build.
5. Run cost sensitivity sweep on top cost drivers.
6. Refine isolation-tier choice using first failure data.
7. Refresh one-page brief after decisions are locked.

---

**Overall posture:** the program has shifted from open-ended planning to constrained system-definition with decision artifacts. Next value comes from validation and forced choice, not more abstraction.
