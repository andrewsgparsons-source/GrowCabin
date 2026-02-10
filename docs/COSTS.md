# Grow Cabin — Costs (preliminary)

This is a **mock** cost model to help us reason about price bands and architecture choices.

- Spreadsheet (CSV): `docs/COSTS_MOCKUP.csv`
- Model style: **low/high** unit cost ranges so we can quickly see sensitivity.

## How to use
1) Open the CSV in Google Sheets / Excel
2) Add a totals row that sums `ExtCostLow_GBP` and `ExtCostHigh_GBP`
3) Toggle optional items (CO₂, light sensor, heater, watering, display) based on the chosen MVP

## Notes
- Early prototypes will be more expensive (one-offs) than production.
- For investor conversations, we’ll later split:
  - BOM (hardware)
  - assembly + QA
  - packaging/shipping
  - support/returns

## Next upgrades
- Create separate sheets for **Tier 1 / Tier 2 / Tier 3** designs
- Add a unit economics view: price → gross margin → support/returns → contribution margin

