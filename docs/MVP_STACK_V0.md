# Grow Cabin — MVP Stack v0 (Component Matrix)

_Last updated: 2026-02-11_

Purpose: lock a concrete first-pass hardware/software stack for prototype execution.

## Tier definition
- **Tier E (Essential):** mushroom-first control proof with minimal complexity
- **Tier S (Smart):** adds CO2 + programmable control + richer logging

## 1) Sensors

| Function | Tier E | Tier S | Notes |
|---|---|---|---|
| Air temp + RH | DHT22-class | SCD40/SCD41 (or DHT22 + SCD40) | CO2 sensor can also provide temp/RH |
| Door/open state | Optional magnetic reed | Recommended magnetic reed | Helps explain anomalies in logs |
| CO2 | Optional | Recommended | Important for mushroom morphology/FAE tuning |
| Light (greens path) | Not required | Optional | Only needed once greens path is active |

## 2) Actuation

| Function | Tier E | Tier S | Notes |
|---|---|---|---|
| Fresh-air exchange | 2x 100mm inline fans | 2x 100mm inline fans | Intake low, exhaust high |
| Humidity control | 4–6L ultrasonic humidifier | 4–6L ultrasonic humidifier | Maintain RH band without over-wetting |
| Lighting | Not required in P0 mushroom-first | Optional (future stage) | Activate at Prototype 2 |
| Watering automation | Not required | Optional (future stage) | Greens stage only |

## 3) Control architecture

| Layer | Tier E | Tier S |
|---|---|---|
| Control logic | Inkbird plug-and-play hysteresis | ESP32 + relay + rule engine |
| Scheduling | Simple timer-based FAE | Software schedule + overrides |
| Data logging | Manual/basic snapshots | Continuous time-series + events |
| Connectivity | Local only | Local-first, optional remote view |

## 4) Safety and enclosure requirements
- RCD-protected power path
- IP-aware placement for humid environments
- Cable glands and sealed penetrations
- Filtered intake path (HEPA optional at P0, recommended later)

## 5) Prototype baseline decision (provisional)
For first physical run, use:
- **Tier E hardware path** for reliability/speed
- **Add CO2 sensor early** if budget permits (high signal value)
- Keep system single-zone and mushroom-first

## 6) Expected prototype cost bands
- Lean chamber P0: **~£300–£500**
- 8×6 shed route: **~£1,198–£1,749**

## 7) Exit criteria to move from P0 to P1
- Stable RH control across repeated runs
- Repeatable FAE schedule behavior
- Usable logs that explain failure/success events
- At least one repeatable mushroom recipe draft
