# Grow Cabin — key snippets (living)

Purpose: capture important chat chunks verbatim-ish so they can be referenced without re-reading long threads.

---

## CEA framing + platform stack (mushrooms + spring greens)

> What you’re describing is squarely Controlled-Environment Agriculture (CEA). In the taxonomy sense:
> - Smart farming (broad) still fits, but it’s vague.
> - Digital agriculture fits if you’re thinking “product + data platform + remote management + traceability.”
> - Precision agriculture is usually about spatial variability in open fields (GNSS, zones, VRT).
> - For an enclosed box/tent/grow chamber, people more often call it CEA / indoor farming / controlled environment.
> - If you want a crisp label for a controllable, mostly-isolated system: closed-loop CEA.
>
> Below is a practical way to frame mushrooms and spring greens (microgreens/baby leaf) as two SKUs on the same core platform.
>
> Common platform (home-prototype friendly)
> Think in layers: sense → decide → actuate → log.
>
> Sensors (minimum viable)
> - Air temp + RH (humidity) inside chamber
> - CO₂ (optional at first for mushrooms; more relevant for leafy greens)
> - Substrate / root-zone moisture (greens) or substrate conditions (mushrooms—often indirect)
> - Light sensor (greens)
> - Water level + flow (if you automate irrigation/humidification)
> - Door/open state (cheap but useful for explaining anomalies)
>
> Actuators (minimum viable)
> - Humidifier (ultrasonic) + dehumidification strategy (often: exhaust fan + dry air ingress)
> - Heater (small) and/or cooling strategy (exhaust + ambient, or Peltier/AC later)
> - Fresh air exchange fan (key for both; critical for mushroom CO₂ management)
> - Lights (greens) with dimming if possible
> - Irrigation/misting for greens (pump + solenoid) / humidity management for mushrooms
>
> Control approach
> - Start with simple rules + hysteresis (reliable, explainable).
> - Add schedules by “growth stage” (incubation vs fruiting; germination vs grow-out).
> - Only later add optimisation/ML (home market values “it just works” more than “AI”).
>
> What to log
> - Time series of sensor readings + actuator states
> - “Stage” + setpoints + user actions (harvest, mist refill, open door)
> This becomes your differentiator: repeatability and recipes.
>
> Mushrooms: what “fully controllable” really means
> - Humidity
> - Fresh air exchange / CO₂
> - Temperature
> - Contamination management
>
> Spring greens: main controllables
> - Light (PPFD / photoperiod)
> - Irrigation timing
> - Air movement
> - Root-zone moisture
>
> “Isolated but controllable”: define isolation level
> 1) stabilised enclosure
> 2) managed exchange
> 3) near-sealed

Source: Telegram message_id 191 (reply to message_id 142)

---

## Brand name brainstorm (directions + shortlists)

> Constraints first (so we don’t generate 200 pretty names that fail in the real world):
> 1) Any vibe preference? (premium vs playful; “lab” vs “garden”; British vs global)
> 2) Do you want the name to cover both mushrooms + greens, or start mushroom-first?
> 3) Hard requirement: .com? (or are we fine with .co.uk / .farm / .grow)
> 4) Any words you hate or must avoid? (e.g., “fungi”, “spore”, “bio”, “tech”, “AI”)
>
> Directions + candidates:
> - Direction A — “Grow system / controllable environment”: Stillroom Grow; ClosedLoop Grow; Pocket CEA; MicroChamber; GrowCabin; HomeHabitat; ClimaGrow; Setpoint
> - Direction B — “Fresh + repeatable harvest”: HarvestCycle; RepeatHarvest; FreshRoutine; CounterCrop; DailyCut; Cut & Cap
> - Direction C — “Mycology + greens without being gross”: Cap & Leaf; Capleaf; Leaf & Loom; Sprout & Spore; Mosscap
> - Direction D — “UK-ish, understated, brandable”: HearthGrow; LarderLab; PantryPlot; The Grow Larder; KitchenCrop
> - Direction E — “Tech-forward but not cringe”: EnviroPilot; GrowOS; CultivarIQ; Chamberly; LoopFarm
>
> Top 5 (for concept: home, controlled, mushrooms+greens): Cap & Leaf; LarderLab; PantryPlot; Setpoint; HarvestCycle

Source: Telegram message_id 197 (reply to message_id 147)
