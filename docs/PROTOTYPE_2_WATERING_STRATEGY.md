# Prototype 2 — Watering Strategy (Greens) v0

_Last updated: 2026-02-11_

Purpose: define a simple, low-risk watering approach for microgreens/baby-leaf path in Prototype 2.

## 1) Objective
Provide consistent moisture with minimal mold/damping-off risk and low operator complexity.

## 2) Recommended baseline approach
Start with **manual bottom-watering** as control baseline before automation.

Why first:
- easiest to debug
- low hardware complexity
- clearer causal link between watering input and crop response

## 3) Candidate watering modes

### Mode A — Manual bottom-watering (baseline)
- Add measured water volume to tray bottom at fixed times
- Let capillary uptake handle root-zone moisture
- Drain excess after soak interval if needed

### Mode B — Assisted timed pump (v0.1)
- Small pump on timer to deliver fixed volume to tray/reservoir
- No closed-loop moisture sensor initially

### Mode C — Sensor-guided automation (later)
- Add substrate/tray moisture sensing + rule-based triggers
- Requires robust calibration and noise handling

## 4) Initial schedule template (starter)
- Frequency: 1–2 times/day (crop and stage dependent)
- Volume: fixed ml per tray by size class
- Rule: never leave standing water beyond soak window unless recipe says otherwise

## 5) Safety/quality guardrails
- Avoid overhead wetting in dense canopy stage where possible
- Enforce tray hygiene and drainage checks
- If RH already high and airflow low, reduce watering events before adding fan changes
- Record every manual intervention in logs

## 6) Telemetry/log fields
- `timestamp_iso`
- `stage_id`
- `watering_mode` (manual/pump/sensor)
- `water_volume_ml`
- `trays_watered_count`
- `note` (e.g., runoff observed, dry edges, fungal signal)

## 7) Validation checklist
- [ ] No persistent standing water issues
- [ ] Uniform moisture across trays
- [ ] No major damping-off increase after schedule changes
- [ ] Watering logs correlate clearly with growth outcomes

## 8) Next integration
- Add tray-size presets to recipe schema metadata
- Define fixed-volume defaults for small/medium/large tray classes
- Add optional pump-control object in recipe actuation block for P2.1
