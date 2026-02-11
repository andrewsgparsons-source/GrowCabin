# Product development (what we’re building)

## Core concept
- CEA grow chamber / shed for mushrooms + spring greens
- Differentiator: **recipes + repeatable harvests + explainable automation**

## MVP scope (current draft)
**Sensors**
- temp + RH
- door/open sensor
- optional: CO₂ (mushrooms/FAE tuning), light sensor (greens)

**Actuators**
- fan (fresh air exchange)
- humidifier
- lights (greens)
- later: watering automation

**Software**
- recipe model (stages + setpoint bands + schedules + safety limits)
- logging (time series + events + recipe version)
- local-first operation
- recipe schema draft: `docs/RECIPE_SCHEMA_V0.md`

## Design principles
- Robust control > clever control
- Cleanability first (mushrooms)
- Local-first; cloud is additive
- Evidence-driven iteration (logs + KPIs)

## Prototype first designs

### Prototype P0 (very basic, recommended first)
**Goal:** prove stable mushroom fruiting environment control + logging with minimal complexity.

**Form factor / size**
- Lean chamber prototype: ~1200 × 600 × 1800 mm (shelving/tent footprint)
- Next scale-up: insulated 8×6 ft shed (~2440 × 1830 mm)

**Configuration**
- Single-zone, mushrooms-first
- Rule-based control (hysteresis), no advanced optimisation yet
- Local logging of sensor + actuator events

**Minimum components (P0)**
- Sensors:
  - temp/RH sensor (minimum)
  - optional but high-value: CO₂ sensor (SCD40 class)
- Control:
  - plug-and-play controllers (Inkbird humidity + temperature) **or**
  - ESP32 + relay board (if programmable control/logging from day 1)
- Actuators:
  - 100mm inline intake fan
  - 100mm inline exhaust fan
  - 4–6L ultrasonic humidifier
- Airflow/sealing:
  - ducting + grilles + clamps
  - intake filter (HEPA optional)
  - door seals + foil tape + silicone + cable glands

**Cost expectation (from current research)**
- Lean chamber P0: ~£300–£500 (controls package + simple enclosure/misc)
- 8×6 shed prototype: ~£1,198–£1,749 depending on enclosure + control tier

**What success looks like (P0 exit criteria)**
- Holds RH target band reliably without persistent condensation issues
- Demonstrates repeatable FAE schedule behavior
- Produces usable logs for troubleshooting and recipe tuning

## MVP stack detail
- Component options/evaluations for P0: `docs/PROTOTYPE_COMPONENT_OPTIONS_V1.md`
- Detailed matrix now tracked in `docs/MVP_STACK_V0.md` (Tier E vs Tier S sensors/actuators/control/safety + P0→P1 exit criteria).

## Contamination & cleanability
- Working principles doc: `docs/CONTAMINATION_CLEANABILITY_PRINCIPLES_V0.md`

## Key product decisions to lock
- Segment (foodies vs functional vs DIY vs families/education)
- One chamber vs variants/inserts
- Isolation tier (1/2/3)
- Price band

