# Project: Grow Cabin (CEA home grow system)

## One-liner
A controlled-environment “cabin” for home growers to reliably produce **mushrooms** and **spring greens** using recipes (setpoints + schedules) with logging and automation.

## Scope (current)
- Start small: prototyping + decision trees + MVP spec
- Target users: home growers (initial assumption)

## Decision trees (current)

### A) Market / customer
1. **Primary customer:** home growers
   - Later expansions: prosumer / schools / restaurants (TBD)
2. **Primary crop focus:**
   - Option A1: mushrooms-first
   - Option A2: greens-first
   - Option A3: dual-purpose from day 1

### B) Product architecture: one chamber vs two
1. **Single chamber that supports both** (shared hardware + crop “recipes”)
   - Pros: one SKU; simpler marketing
   - Cons: compromises (RH/FAE vs light; contamination control vs convenience)
2. **Two variants / inserts** (same base + swap modules)
   - Pros: avoids compromises; clearer onboarding
   - Cons: more SKUs; more complexity

### C) Isolation tier (CEA control level)
1. **Tier 1 — Stabilised enclosure** (tent/box; exchanges air passively/room-driven)
2. **Tier 2 — Managed exchange** (controlled intake/exhaust + filter; you control FAE)
3. **Tier 3 — Near-sealed** (filtration + tighter pressure/CO2; highest complexity)

### D) Control strategy (software)
1. **Rules + hysteresis** (MVP; explainable)
2. **Stage schedules** (incubation/fruiting; germination/grow-out)
3. **Optimisation / learning** (later; only if it materially improves outcomes)

### E) “Recipe” model (core product idea)
- Recipe = stages + target ranges + schedules + safety limits
- Requires:
  - Stage detection (manual button at first)
  - Logging for repeatability and customer support

## MVP definition (draft)

### Shared hardware (minimum viable)
- Sensors: air temp + RH; door/open sensor; optional CO2; (greens) light sensor
- Actuators: fan (FAE); humidifier; lights (for greens)
- UX: simple app/web UI OR on-device minimal UI (TBD)
- Logging: time series + events + recipe version

### Mushrooms MVP goals
- Maintain RH band without soaking chamber
- Manage FAE to control CO2-related morphology without drying blocks
- Simple “species recipes” (start with 1)

### Greens MVP goals
- Reliable germination → harvest timing
- Reduce mold/damping-off via airflow + watering control
- Simple light schedule and watering program

## Open questions (need answers)
1. Mushrooms: target species first? (oyster / lion’s mane / shiitake)
2. Greens: microgreens trays vs baby leaf; tray size/format?
3. Price point band (e.g., £100 / £500 / £1500)?
4. Local-only vs cloud features? (privacy, resilience, cost)

## Project docs (living)
- Conversation summary: `notes/projects/grow-cabin/LOG-CHAT-SUMMARY.md`
- Roadmap: `notes/projects/grow-cabin/ROADMAP.md`
- Investor route: `notes/projects/grow-cabin/INVESTOR_ROUTE.md`
- Prior GPT chat (baseline ideas): `notes/projects/grow-cabin/GPT-PRIOR-CHAT-2026-02-10.md`
- Key snippets (from chat): `notes/projects/grow-cabin/SNIPPETS.md`

## Next actions
- Pick initial crop/species + grow format
- Draft MVP BOM classes (not vendor-specific yet)
- Define 2–3 recipes (stage setpoints) and the data schema to store them

