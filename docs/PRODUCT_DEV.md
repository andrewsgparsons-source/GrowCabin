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

## Design principles
- Robust control > clever control
- Cleanability first (mushrooms)
- Local-first; cloud is additive
- Evidence-driven iteration (logs + KPIs)

## Key product decisions to lock
- Segment (foodies vs functional vs DIY vs families/education)
- One chamber vs variants/inserts
- Isolation tier (1/2/3)
- Price band

