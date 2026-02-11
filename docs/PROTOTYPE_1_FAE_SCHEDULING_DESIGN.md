# Prototype 1 — FAE Scheduling Design (v0)

_Last updated: 2026-02-11_

Purpose: define a practical fresh-air exchange schedule for mushroom-first prototype operation, balancing CO2 control and moisture retention.

## 1) Objective
Maintain adequate air exchange to avoid high-CO2 morphology issues while preventing excessive chamber drying.

## 2) Baseline scheduling approach
Use **time-based fan cycles** first, then refine with CO2-aware adjustments.

### Starting defaults (P1)
- Cycle period: every **10 minutes**
- Intake+exhaust ON duration per cycle: **45–90 seconds**
- Night/quiet mode (optional): reduce to **30–60 seconds** per 10–15 minutes if morphology allows

## 3) CO2-aware refinement (if sensor present)
Set simple zones:
- **CO2 < 800 ppm**: reduce fan duty to preserve RH
- **CO2 800–1200 ppm**: keep baseline duty
- **CO2 > 1200 ppm**: increase ON duration by +30–60s for next 2 cycles
- **CO2 > 1500 ppm sustained 5 min**: temporary high-vent mode, then return gradually

## 4) RH coordination rules
- If RH below lower bound: pause non-critical FAE cycles for one interval and allow RH recovery
- If RH above upper safety limit (>95% for >3 min): run short forced FAE burst
- Never disable all FAE for extended periods; use bounded pauses only

## 5) Stage-based profile idea
- Early pinning / high sensitivity stage: moderate FAE, high RH protection
- Fruiting growth stage: slightly higher FAE duty to shape morphology
- Hold/maintenance stage: reduced duty for stability

## 6) Telemetry to log
- Timestamp
- Fan command state + duration
- RH, temp, optional CO2 before/after cycle
- Reason code (`baseline`, `co2_high`, `rh_low_pause`, `condensation_guard`)

## 7) Validation checklist
- [ ] No prolonged stale-air episodes (high CO2 without response)
- [ ] RH remains mostly in target band while FAE cycles run
- [ ] Morphology outcomes improve vs manual ad-hoc venting
- [ ] FAE rules are explainable from logs

## 8) Initial tuning workflow
1. Run baseline for 48h.
2. Compare RH excursions and CO2 peaks.
3. Adjust one parameter at a time (duration first, then period).
4. Freeze candidate schedule for one full grow stage before further changes.
