# Contamination & Cleanability Principles (v0)

_Last updated: 2026-02-11_

Purpose: define practical design and operating principles that reduce contamination risk in mushroom-first prototypes.

## 1) Core principles
1. **Design for wipe-down**: smooth, non-absorbent surfaces where possible.
2. **No hidden wet cavities**: avoid joints/traps where moisture can stagnate.
3. **Controlled airflow path**: known intake and exhaust with serviceable filters.
4. **Drain/evaporation awareness**: prevent standing water persistence.
5. **Serviceability first**: components should be reachable for cleaning/replacement.

## 2) Physical design requirements
- Seal penetrations (cable glands, duct entries) with cleanable edges
- Keep electronics away from direct wet zones
- Prefer removable trays/shelves over fixed porous supports
- Ensure floor area can be fully inspected and dried
- Keep humidifier output directed to avoid direct block/tray saturation

## 3) Materials guidance (prototype level)
Preferred:
- sealed plastics, coated metals, wipeable composites
Use with caution:
- exposed unfinished wood, fibrous absorbent materials in wet zone

## 4) Filter and airflow hygiene
- Intake filter must be accessible without disassembly
- Define replacement cadence (e.g., inspect weekly, replace by pressure/visual fouling)
- Log filter changes and cleaning events for traceability

## 5) Cleaning SOP (starter)
### Daily
- quick visual inspection for condensation pools/slime points
- remove visible standing water

### Weekly
- wipe internal surfaces with approved cleaning routine
- inspect fan grilles/duct entry points
- inspect and clean/replace pre-filter media

### Between grow cycles
- full chamber empty-out and wipe-down
- dry-out interval before next inoculated load
- log cycle-close clean completion

## 6) Telemetry + records
Record events:
- `clean_daily`
- `clean_weekly`
- `filter_change`
- `contamination_observed` (location + severity)
- `dryout_complete`

## 7) Risk signals to watch
- repeated contamination near same geometry feature
- persistent RH overshoot + stagnant airflow
- recurring wet spots under humidifier plume path

## 8) P0/P1 acceptance checks
- [ ] All wetted zones visually inspectable
- [ ] No persistent standing water after normal cycle
- [ ] Cleaning routine executable in <20 min weekly
- [ ] Filter can be serviced without major teardown

## 9) Next step
Tie these principles into prototype CAD/model checklist and assembly guide so contamination controls are physical, not just procedural.
