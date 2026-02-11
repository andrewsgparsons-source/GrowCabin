# Grow Cabin — Product & Process Development

This section is where we design the *way we build* (process) and the *thing we build* (product) without losing speed.

## 1) Product development (what we’re building)
### Core concept
- CEA grow chamber for mushrooms + spring greens
- Differentiator: recipes + repeatable harvests + explainable automation

### MVP scope (current)
- Sensors: temp + RH, door; optional CO₂; (greens) optional light sensor
- Actuators: fan (FAE), humidifier, lights (greens)
- Logging: time series + events + recipe version

### Prototype first designs (new)
- **P0 (very basic):** mushrooms-first, single-zone control prototype
- **Target size:** ~1200 × 600 × 1800 mm for lean chamber build
- **Core hardware:** temp/RH (+ optional CO₂), intake/exhaust fans, humidifier, basic controller (Inkbird or ESP32+relay)
- **Cost expectation:** ~£300–£500 for lean chamber P0
- **Scale-up reference:** 8×6 shed prototype range ~£1,198–£1,749
- Full details are tracked in `docs/PRODUCT_DEV.md` under **Prototype first designs**

### Design principles
- Local-first operation (works without internet)
- Cleanability (mushrooms)
- Robust control > clever control
- Evidence-driven iteration (logs + KPIs)

## 2) Process development (how we build)
### Weekly cadence
- Weekly review (30–45 min): decisions, experiments, blockers, next 5 priorities
- Short daily check-in (5 min) during active prototyping

### Decision discipline
- Use the Decision Map for:
  - segment choice
  - one vs two chambers
  - isolation tier
  - price band
- Every decision gets: options → rationale → what would change our mind

### Experiment loop (build/measure/learn)
- Hypothesis → experiment → measure → decision
- Keep experiments small (5–10 units, not 100)

### KPI set (starter)
- Success rate (% grows without mold/contamination)
- Days-to-harvest
- Yield per tray/block
- Time spent (minutes/day)
- Running cost (kWh + consumables)

## 3) Prototyping stages
- Prototype 0: instrument + log + manual control
- Prototype 1: humidity loop + scheduled FAE
- Prototype 2: greens lights + watering automation

## Next actions
- [ ] Define the KPI measurement method (how we calculate each)
- [ ] Draft the recipe schema + versioning
- [ ] Build the first instrumentation runbook

