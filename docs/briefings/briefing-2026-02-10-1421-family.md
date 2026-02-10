# Grow Cabin — Family briefing (2026-02-10 14:21 UK)

**Keywords:** family, overview, CEA, recipes, mushrooms, greens, MVP, roadmap

Grow Cabin: making home growing reliable, calm, and repeatable

## In one sentence
Grow Cabin is a controllable home “growing cabin” that helps people grow mushrooms and spring greens more reliably than typical DIY methods.

## The problem we’re solving
A lot of people want to grow food at home—and many try—but most stop after a few frustrating attempts. Common reasons people fail aren’t effort or interest; they’re environmental control problems:

- Humidity is hard to hold steady, especially for mushrooms
- Airflow is inconsistent, leading to mold, poor growth, or stalling
- Light schedules are guesswork for greens
- Contamination happens silently, and people don’t know why
- Results aren’t repeatable: one good harvest, then three bad ones

DIY setups (bags in cupboards, tubs in sheds, lights taped to shelves) can work—but only if you already know what you’re doing, and only some of the time. Most people never learn why something worked or failed, so they can’t repeat success.

## Our solution
Grow Cabin is a small, enclosed growing chamber designed to make home growing predictable instead of mysterious.

What makes it different is how it combines three ideas:

- **Recipes** — simple growing instructions the device follows (for example: humidity targets, airflow timing, light schedules).
- **Repeatable harvests** — the same recipe should give similar results each time.
- **Explainable automation** — the system doesn’t just “do things”; it can say why (for example: “I’m increasing airflow because CO₂ is rising”).

Instead of relying on intuition and hope, Grow Cabin uses sensing, simple decision rules, and logging so growing becomes something you can learn, not just attempt.

## Two main use cases we’re designing for
### Mushrooms
- Key needs: high but controlled humidity, regular fresh air exchange (FAE), CO₂ management, stable temperature
- Cleanability matters to reduce contamination
- Mushrooms are sensitive but very teachable when conditions are stable

### Spring greens (microgreens / baby leaf)
- Key needs: correct light timing and intensity, gentle airflow, consistent watering
- Main risks: mold and “damping-off” (seedlings collapsing)
- Greens grow fast, which makes feedback and learning quick

## What we’ve built/decided so far
We’ve agreed on a simple, understandable technical approach. Nothing clever for clever’s sake.

How it works (plain-English architecture):
- **Sense** — read what’s happening
  - Minimum sensors: temperature, humidity
  - Door/open sensor (to explain disturbances)
  - Optional later: CO₂ (especially for mushrooms), light sensor (for greens)
- **Decide** — compare readings to the recipe
  - Are we too dry? Too humid? Too stale?
  - Is it time to change conditions based on the schedule?
- **Actuate** — make small adjustments
  - Humidifier (add moisture)
  - Fan (fresh air exchange)
  - Lights (for greens)
  - Watering later (not first version)
- **Log** — record what happened
  - Sensor readings
  - Actions taken
  - User interactions

Logging is important: it’s how we learn what actually works and why.

We’ve also documented the entire project so far, created a task board, a decision map, and gathered all prior thinking into one clear plan.

## What we’re deciding next
Key decision tree (simplified):
- What comes first? (mushrooms-first vs greens-first vs dual)
- Physical design (one universal chamber vs variants/inserts)
- Isolation tier (1/2/3)
- Price band (~£100 / ~£500 / ~£1500)

## What happens in the next 4–8 weeks
- Milestone 0: decide species + greens format; lock architecture
- Prototype 0: manual control + full logging
- Prototype 1: humidity loop + scheduled airflow; add lighting/watering later for greens

## How you can help
- Honest feedback (too complex? not ambitious enough?)
- Early testers
- Gentle introductions (teachers, growers, chefs, wellness, hobbyists)

