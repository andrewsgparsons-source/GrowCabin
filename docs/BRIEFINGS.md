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

## Progress update briefing (2026-02-10)

**Audience:** family (mom & pop + older kids/teens)

Grow Cabin — Family Briefing Update (What’s Changed Since Last Time)

### In one sentence
Grow Cabin is a home growing system that helps people reliably grow mushrooms and spring greens by using clear “recipes” and simple logging, so good results can be repeated instead of guessed at.

### The problem we’re solving
Lots of people try to grow food at home and give up. Not because they don’t care, but because the environment is hard to control.

Common issues we keep seeing:
- Too much or too little humidity, especially for mushrooms
- Poor airflow, leading to mold or stalled growth
- Inconsistent results — one good harvest, then failure
- No clear record of what worked, so mistakes get repeated

Most DIY methods rely on memory, instinct, or vague advice from forums. That’s frustrating, wasteful, and discouraging.

### Our solution
Grow Cabin is a controlled growing “cabin” paired with a simple operating system.

The key ideas are:
- **Recipes:** clear instructions for temperature, humidity, airflow, light, and timing (a bit like a cooking recipe, but for growing).
- **Logging:** the system records what happened and when, so results can be repeated or improved.
- **Explainable actions:** the system doesn’t just do things silently — it can explain why it’s adjusting air, misting, or waiting.

The aim isn’t to replace people, but to remove guesswork.

### What we’ve built / decided so far
A big shift since the last briefing is that Grow Cabin now has a public dashboard website that acts like a central “brain” for the project.

What that means in practice:
- The dashboard isn’t just a website — it’s becoming a full operating system for the startup.
- It includes:
  - A Kanban board (what we’re doing now, next, later)
  - A decision map (what’s decided vs still open)
  - A brain/mind-map showing how everything links together
  - Clear rules and documentation so nothing lives only in someone’s head

Importantly: All documentation is now readable directly on mobile and desktop, not hidden in files.

The UI (design/layout) has been upgraded to a v2 template with a sidebar and scrollable navigation, so it’s easier to explore without getting lost.

### What’s new since the last briefing
This is where most of the progress has happened.

#### New dashboard sections
We’ve added dedicated pages for:
- Marketing (with expandable sections to keep it readable)
- Stakeholders
- Briefings (so updates like this live in one place)
- Org structure
- Investors
- Startup setup (UK)
- Costs
- Product & process development
- Product design
- Business model
- Partners

All of these are now linked together rather than being separate notes.

#### Costs and numbers (early but real)
We’ve published two early cost models:
- A mock range-based BOM (bill of materials)
- A real extracted BOM from an inbound research bundle

These:
- Render directly as tables on the site
- Can be exported as CSV files
- Are clearly labelled as early and adjustable, not final pricing

This is about transparency, not pretending we know the final numbers yet.

#### Investor groundwork
We’ve done a lot of quiet prep here:
- Mapped out an investor route flow (who, when, and why)
- Created an investor pack checklist
- Built a dedicated Investors page that links costs, stakeholders, and decisions together

No fundraising push yet — this is about being ready, not rushing.

#### UK startup setup
We added a UK startup checklist, covering:
- Ltd vs sole trader
- Name and trademark checks
- Banking and accounting
- Insurance and basic compliance

This is now a tracked research task so it can be deepened properly, not guessed at.

#### Partners and integrations
Instead of building everything from scratch, we’ve decided to:
- Partner with existing mushroom and microgreens kit suppliers where possible
- Use this to speed up version 0, learn faster, and reduce risk

There’s now a Partners page and a research task scanning UK options.

#### Team clarity
We clarified roles and named them consistently (including AI roles, clearly labelled as such).

(Continues — paste remainder of the generated briefing here if you have it.)

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

