# Prototype 0 — Instrumentation Runbook (v0)

_Last updated: 2026-02-11_

Purpose: define a repeatable setup and logging routine for the first physical prototype.

## 1) Scope
- Mushroom-first
- Single-zone chamber
- Focus: observe + log dynamics before full automation

## 2) Minimum instrumentation
- Air temp/RH sensor (required)
- Door/open state sensor (recommended)
- CO2 sensor (optional but high-value)
- Actuator state logging for:
  - intake fan
  - exhaust fan
  - humidifier

## 3) Sampling and log schema (starter)
- Sensor sample interval: every **30s** (or 60s if constrained)
- Event logs on state changes:
  - fan on/off
  - humidifier on/off
  - door open/close
  - manual notes (e.g., misted, cleaned, moved block)

### Suggested log fields
- `timestamp_iso`
- `recipe_id`
- `stage`
- `temp_c`
- `rh_percent`
- `co2_ppm` (nullable)
- `door_open` (bool)
- `fan_intake_on` (bool)
- `fan_exhaust_on` (bool)
- `humidifier_on` (bool)
- `note` (nullable)

## 4) Daily operating checklist
- Morning
  - Check sensor readings plausible
  - Confirm humidifier water level
  - Verify intake/exhaust paths unobstructed
- Midday
  - Check condensation hotspots and note location
  - Spot-check RH recovery after fan cycle
- Evening
  - Export/backup logs
  - Add manual notes for interventions

## 5) Weekly review checklist
- RH stability: % time in target band
- Number/duration of excursions outside band
- Condensation incidents count
- Correlation: door events vs RH/CO2 spikes
- Any contamination signal + likely trigger hypothesis

## 6) Exit criteria (P0 -> P1)
- Stable data capture for at least 7 consecutive days
- RH control pattern understood well enough to codify hysteresis rules
- Clear list of top 3 failure modes and mitigations

## 7) Known risks
- Sensor drift or misplacement causing false confidence
- Missing event logs (manual interventions not recorded)
- Water management issues creating contamination confounders
