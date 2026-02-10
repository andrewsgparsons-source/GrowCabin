# Project Log — Parametric Shed Configurator

**Project:** Babylon.js Parametric Garden Building Configurator  
**Client / Owner:** Andrew Parsons — Bespoke Shed Company  
**Design Engineer:** James (AI)  
**Repo:** https://github.com/andrewsgparsons-source/Parametric-shed2-staging  
**Kanban:** https://andrewsgparsons-source.github.io/shed-project-board/  

---

## How to Read This Log

Each entry follows this format:

```
### [DATE] — [TITLE]
**Status:** In Progress / Complete / Blocked  
**Kanban:** #card-number  
**Commits:** hash(es)  
**Summary:** What was done, what was decided, what's next.
```

Entries are reverse-chronological (newest first).

---

## Log Entries

### 2026-02-10 — Environmental Control System BOM Complete
**Status:** Complete (reference document)  
**Kanban:** #124  
**Commits:** None (research only)  

**Summary:**  
Detailed Bill of Materials for environmental control systems across two tiers:

- **Essential tier (mushroom growing, plug-and-play):** £210.50 components → ~£275 shipped → retail £599–699
- **Enhanced tier (mushroom + microgreens, IoT-ready):** £332 components → ~£417 shipped → retail £899–1,099

Seven categories costed: enclosure seals, sensors, controllers, fans/FAE, humidifier, heater, LEDs/watering.

Two controller approaches documented:
- **Option A:** Plug-and-play Inkbird controllers (no coding, £73)
- **Option B:** ESP32 IoT system (programmable, data logging, remote monitoring, £46.50)

Complete shed + kit pricing estimated at £2,499–3,999 retail.

**Document:** `research/environmental-control-bom.md`

---

### 2026-02-10 — Budget Range: Initial Design Brief
**Status:** In Progress — awaiting component breakdown from Andrew  
**Kanban:** #124  
**Commits:** None yet (design phase)  

**Brief from Andrew:**
- Add a **new product range** to the parametric model — budget tier
- Distinctive appearance: **light blue or light green** sheet material
- Look: industrial-influenced but still garden-appropriate ("something you'd be happy to have at home")
- Consider **steel framing** as an alternative to timber (cost-dependent)
- Potentially **two ranges**: Budget and Premium
- Include **shelving and racking** in the 3D model
- **Bill of materials** for environmental control systems (grow sheds — mushroom/microgreen)
- Andrew sending component breakdown — standing by

**Design Decisions Pending:**
1. Sheet material type (corrugated metal? composite panel? fibre cement?)
2. Steel vs timber framing (cost comparison needed)
3. Colour palette (light blue vs light green vs both as options)
4. Range naming and marketing positioning
5. Shelving/racking configuration
6. Environmental control spec (awaiting Andrew's component list)

**Next Steps:**
- Receive component breakdown from Andrew
- Research material options and approximate costs
- Produce initial design concepts for review

**Reference:** Full materials research at `research/budget-grow-sheds.md`

---

### 2026-02-10 — Budget Grow Shed: Materials Research Complete
**Status:** Complete (reference document)  
**Kanban:** #124  
**Commits:** None (research only)  

**Summary:**  
Comprehensive UK materials pricing for insulated 8×6 growing sheds (mushroom/microgreen).

**Key findings:**
- **Budget build:** ~£920 (EPS insulation, OSB3 cladding, felt roof)
- **Better build:** ~£1,330 (PIR insulation, featheredge cladding, Onduline roof)
- PIR insulation recommended for mushroom growing (foil = built-in vapour barrier at 80-95% RH)
- No UK company currently sells a purpose-built mushroom growing shed — potential market gap
- Cheapest framing: CLS 38×63mm at £3.75/2.4m (Wickes)
- Cheapest sheet: OSB3 9mm at £20/sheet (Wickes)

**Document:** `research/budget-grow-sheds.md` — full BOM, supplier directory, environmental specs

---

## Active Items (as of 2026-02-10)

| # | Title | Status | Priority | Category |
|---|-------|--------|----------|----------|
| 109 | Synthetic slate tile roof covering | In Progress | High | Configurator |
| 124 | Budget buildings range | In Progress | High | Business |
| 77 | Animation production pipeline | In Progress | High | Animation |
| 82 | Natural language → animation mapping | In Progress | High | Animation |
| 28 | Code documentation + JSDoc | In Progress | Medium | Configurator |
| 13 | Competitor intelligence | In Progress | Medium | Marketing |

## High-Priority Backlog

| # | Title | Priority | Category |
|---|-------|----------|----------|
| 22 | Fix apex roof on attached buildings | High | Configurator |
| 50 | Attached building frame penetrating plywood | High | Configurator |
| 20 | Embed configurator on website | High | Website |
| 15 | SEO improvements | High | Website |
| 18 | Monetisation strategy | High | Business |
| 19 | Fastest-to-revenue roadmap | High | Business |
