# Prototype 1 — Humidity Control Loop Design (v0)

_Last updated: 2026-02-11_

Purpose: define a simple, robust humidity loop for the next prototype stage after P0 instrumentation.

## 1) Control objective
Maintain RH in a target band while avoiding:
- persistent condensation,
- over-wetting surfaces/blocks,
- oscillation (rapid on/off toggling).

## 2) Recommended control strategy
Use **hysteresis + minimum run/rest timers** (not PID yet).

Inputs:
- RH (%), temp (°C), optional door state

Outputs:
- Humidifier ON/OFF
- Intake/exhaust fan schedule override (optional safety action)

## 3) Core parameters (initial defaults)
- Target RH band: **85–92%** (species/stage specific)
- Turn humidifier ON below: **85%**
- Turn humidifier OFF above: **92%**
- Minimum humidifier ON time: **45s**
- Minimum humidifier OFF time: **60s**
- Sensor sample interval: **30s**

Condensation guardrails:
- If RH > 95% for > 3 minutes: force humidifier OFF, trigger short FAE burst.
- If repeated overshoot events (>5 per hour): widen hysteresis and increase off-time.

## 4) Example state machine
States:
- `IDLE`
- `HUMIDIFYING`
- `LOCKOUT_OFF`
- `SAFE_DRYDOWN`

Transitions are time-gated to prevent chatter.

## 5) Telemetry needed
Log at each cycle:
- RH, temp, optional CO2
- humidifier state
- fan state
- reason code for transitions (`low_rh`, `high_rh`, `condensation_guard`, `timer_lockout`)

## 6) Validation checklist
- [ ] RH in target band >70% of run time
- [ ] No sustained >95% RH episodes
- [ ] No visible standing-water accumulation from loop behavior
- [ ] Transition reasons explainable from logs

## 7) Next integration
After loop is stable:
- tie to recipe stage setpoints,
- add door-open suppression logic,
- coordinate with FAE scheduling for morphology control.
