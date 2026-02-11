# Greens Format Selection Matrix (v0)

_Last updated: 2026-02-11_

Purpose: choose initial greens format for Prototype 2 with a practical scoring framework.

## 1) Candidate formats
- Microgreens trays
- Baby-leaf trays
- Hybrid (microgreens-first with baby-leaf optional path)

## 2) Scoring dimensions (1–5)
- **Cycle speed** (faster harvest = higher)
- **Beginner reliability**
- **Control complexity** (simpler = higher)
- **Watering complexity** (simpler = higher)
- **Contamination/mold risk tolerance**
- **Market attractiveness**

## 3) Draft scoring (assumption-based)

| Format | Cycle speed | Reliability | Control simplicity | Watering simplicity | Risk tolerance | Market pull | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| Microgreens trays | 5.0 | 4.5 | 4.5 | 4.5 | 4.0 | 4.0 | **26.5** |
| Baby-leaf trays | 3.5 | 3.5 | 3.5 | 3.0 | 3.5 | 4.0 | **21.0** |
| Hybrid path | 4.0 | 3.5 | 3.0 | 3.0 | 3.5 | 4.5 | **21.5** |

## 4) Provisional recommendation
For v0 speed and reduced complexity, start with **microgreens trays** as the first greens format.

Rationale:
- Faster learning loops and KPI feedback
- Simpler lighting + watering control requirements
- Better fit for early-stage prototype constraints

## 5) Suggested initial tray assumptions
- Tray class: small/medium (standardized dimensions to be locked)
- Watering baseline: manual bottom-watering (see Prototype 2 watering strategy)
- Lighting baseline: 16/8 grow-out schedule (see Prototype 2 lighting strategy)

## 6) Decision gate (Andrew)
Confirm whether to lock:
- **v0 greens format = microgreens trays**
- with baby-leaf as second-phase expansion once P2 is stable.

## 7) Next step actions
- [ ] Define tray dimension standard for v0
- [ ] Add `greens-microgreens-v0` recipe object from `RECIPE_SCHEMA_V0`
- [ ] Add tray-size metadata and watering volume defaults
