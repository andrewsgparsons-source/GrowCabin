# Prototype 2 — Lighting Strategy (Greens) v0

_Last updated: 2026-02-11_

Purpose: define a practical first-pass lighting strategy for microgreens/baby-leaf path in Prototype 2.

## 1) Objective
Deliver repeatable germination-to-harvest growth with simple, explainable schedules and minimal heat/load issues.

## 2) Hardware assumptions
- 4-tier shelf context (if enabled)
- T8-style LED grow bars or equivalent strip fixtures
- Optional dimming (PWM/driver dependent)
- Timer/scheduler control available

## 3) Baseline schedule (starter)
### Germination / early stage (first 1–2 days)
- Light: **low/indirect** or optional short photoperiod
- Suggested: 8h on / 16h off (or dark hold depending crop practice)

### Grow-out stage
- Light: **16h on / 8h off**
- Target consistency over absolute intensity for P2

### Pre-harvest hold (optional)
- Keep same 16/8 unless crop-specific response suggests taper

## 4) Dimming strategy
- v0 default: fixed output (no dimming) for simplicity
- v0.1 optional: two-level dim presets
  - `eco`: 70%
  - `full`: 100%
- Only add dynamic dimming after baseline schedule is stable

## 5) Safety / operating rules
- Cap enclosure temp rise from lighting; monitor thermal drift
- If temp exceeds stage max, temporarily reduce photoperiod or output
- Ensure even canopy distance and avoid hotspots/shadow zones

## 6) Telemetry to capture
- Lighting state (on/off)
- Optional dim level (%)
- Temp/RH during light-on vs light-off
- Stage ID + recipe version
- Notes for morphology observations

## 7) Validation checklist
- [ ] Uniform growth across tray area
- [ ] No persistent stretch/etiolation signals
- [ ] No lighting-driven overheating excursions
- [ ] Schedule execution consistent across days

## 8) Next integration
- Bind schedule to `RECIPE_SCHEMA_V0` stage objects
- Add crop presets once first greens format is selected
- Evaluate if light sensor is necessary or can remain optional
