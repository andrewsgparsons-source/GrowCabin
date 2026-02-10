# Grow Cabin — Briefings

A place for short, reusable briefs you can send to stakeholders (investors, suppliers, customers, partners).

## Family briefing (~800 words)

### Grow Cabin: making home growing reliable, calm, and repeatable

#### In one sentence
Grow Cabin is a controllable home “growing cabin” that helps people grow mushrooms and spring greens more reliably than typical DIY methods.

#### The problem we’re solving
A lot of people want to grow food at home—and many try—but most stop after a few frustrating attempts. Common reasons people fail aren’t effort or interest; they’re environmental control problems:

- Humidity is hard to hold steady, especially for mushrooms
- Airflow is inconsistent, leading to mold, poor growth, or stalling
- Light schedules are guesswork for greens
- Contamination happens silently, and people don’t know why
- Results aren’t repeatable: one good harvest, then three bad ones

DIY setups (bags in cupboards, tubs in sheds, lights taped to shelves) can work—but only if you already know what you’re doing, and only some of the time. Most people never learn why something worked or failed, so they can’t repeat success.

#### Our solution
Grow Cabin is a small, enclosed growing chamber designed to make home growing predictable instead of mysterious.

What makes it different is how it combines three ideas:

- **Recipes** — simple growing instructions the device follows (for example: humidity targets, airflow timing, light schedules).
- **Repeatable harvests** — the same recipe should give similar results each time.
- **Explainable automation** — the system doesn’t just “do things”; it can say why (for example: “I’m increasing airflow because CO₂ is rising”).

Instead of relying on intuition and hope, Grow Cabin uses sensing, simple decision rules, and logging so growing becomes something you can learn, not just attempt.

#### Two main use cases we’re designing for
**Mushrooms**
- Key needs: high but controlled humidity, regular fresh air exchange (FAE), CO₂ management, stable temperature
- Cleanability matters to reduce contamination
- Mushrooms are sensitive but very teachable when conditions are stable

**Spring greens (microgreens / baby leaf)**
- Key needs: correct light timing and intensity, gentle airflow, consistent watering
- Main risks: mold and “damping-off” (seedlings collapsing)
- Greens grow fast, which makes feedback and learning quick

#### What we’ve built/decided so far
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

#### What we’re deciding next
These are active choices—not settled yet—and we’re being deliberate.

Key decision tree (simplified):
- What comes first?
  - Mushrooms-first
  - Greens-first
  - Dual-purpose from day one
- Physical design
  - One universal chamber
  - Or two variants / swappable inserts
- Isolation level (how “sealed” it is)
  - Tier 1: basic enclosure (lowest cost)
  - Tier 2: better seals and airflow control
  - Tier 3: near-lab-level control (higher cost)
- Price band direction
  - ~£100 (very simple)
  - ~£500 (serious home grower)
  - ~£1500 (premium / education / prosumer)

These choices affect everything else, so we’re slowing down to get them right.

#### What happens in the next 4–8 weeks
We’re working in clear, human-scale steps:

- **Milestone 0**
  - Decide which species of mushrooms and which greens format
  - Lock the basic architecture (what’s inside, what’s optional)
- **Prototype 0**
  - Manual control + full logging
  - Learn how humidity, airflow, and timing actually behave
  - Build intuition backed by data
- **Prototype 1**
  - Closed-loop humidity control
  - Scheduled airflow for mushrooms
  - Add lighting (and later watering) for greens

This phase is about learning fast, not polishing.

#### How you can help
We’re not asking for blind enthusiasm—we want grounded input.

What would genuinely help:
- **Honest feedback**
  - Does this make sense?
  - Is it too complex, or not ambitious enough?
- **Early testers**
  - People willing to try growing and tell us what confused or surprised them
- **Introductions (if relevant)**
  - Teachers, food growers, chefs, wellness folks, hobbyists

Not sales—just short conversations to test who this is really for.

Before building too much, we’re testing who cares most: families and education, foodies and chefs, wellness users, or DIY kit lovers. A few good conversations now save years later.

That’s Grow Cabin as it stands: practical, early, and intentionally learning-focused.

---

## Short reusable briefs (templates)

### 1) One-paragraph briefing
**Grow Cabin** is a controlled-environment grow “cabin” for home growers to reliably produce mushrooms and spring greens using recipes (setpoints + schedules) with logging and automation.

### 2) One-page briefing (outline)
- Problem (inconsistency, mold/contamination, effort)
- Solution (CEA + recipes + repeatable harvests)
- Why now (indoor growing interest, component costs, community)
- What’s unique (recipes + logs + explainable automation)
- MVP scope
- Roadmap milestones
- Ask (design partners / funding / suppliers)

### 3) Briefing templates
**Investor intro (email-sized)**
- 2 lines: what it is + who it’s for
- 1 line: traction/proof so far
- 1 line: ask + why them

**Supplier outreach**
- what we’re building
- what we need (specs/quantities)
- why it’s interesting (repeat purchases, co-marketing)

**Design partner invite**
- what you’ll do (test recipe + provide feedback)
- what you get (early access, discounted unit, influence)

## Next actions
- [ ] Create a 6-slide “mini deck” version of the family briefing

