# Grow Cabin — UK Partner Shortlist (v0 draft)

_Last updated: 2026-02-11_

Scope: starter shortlist built from existing internal research docs (no outreach yet).

## 1) Build/infrastructure suppliers (UK)

| Category | Brand / Supplier | Product(s) | UK availability | Price range | Integration opportunity | Notes | Link |
|---|---|---|---|---|---|---|---|
| Enclosure hardware | Screwfix | Ducting, grilles, seals, timers, heaters, fixings | Yes (nationwide) | £ | Reference BOM baseline | Strong retail availability; practical for repeat builds | https://www.screwfix.com |
| Build materials | Wickes | CLS timber, OSB3, EPS/PIR, tapes, cladding | Yes (nationwide) | £-££ | Reference BOM baseline | Core source in current shed BOM work | https://www.wickes.co.uk |
| Electronics retail | Amazon UK | Sensors, fans, humidifiers, LED tubes, ESP32 | Yes | £-££ | Fast prototype sourcing | Broad catalog; quality variance to manage with approved SKUs | https://www.amazon.co.uk |
| Electronics specialist | The Pi Hut | ESP32/dev boards/sensors | Yes (UK stock) | ££ | Preferred dev components | Better consistency than generic marketplaces | https://thepihut.com |
| Electronics distributor | RS Components (UK) | Industrial sensors/controllers/enclosures | Yes | ££-£££ | Upgrade path to pro-grade SKUs | Good for scale-up quality and traceability | https://uk.rs-online.com |
| Electronics distributor | CPC Farnell | Components, enclosures, power | Yes | ££ | Secondary pro-grade source | Useful dual-source strategy | https://cpc.farnell.com |

## 2) Environmental control vendors (candidate reference components)

| Category | Brand / Supplier | Product(s) | UK availability | Price range | Recipe implications | Integration opportunity | Link |
|---|---|---|---|---|---|---|---|
| Humidity control | Inkbird (via UK retail channels) | IHC-200 (humidity), ITC-308 (temperature) | Yes | ££ | Stable setpoint control for mushroom fruiting | v0 plug-and-play tier | https://www.amazon.co.uk/s?k=inkbird+ihc-200 |
| Smart control | ESP32 ecosystem (multi-vendor) | ESP32 + relay stack | Yes | £ | Enables logging/alerts/recipe automation | v0 smart tier / future app integration | https://thepihut.com |

## 3) Gaps still to fill (required for gc-024 completion)

- Mushroom kits/fruiting blocks suppliers (UK) — **pending**
- Microgreens kits/seeds/media suppliers (UK) — **pending**
- Grow lighting brands/SKUs shortlist with shelf-fit guidance — **pending**
- Controller ecosystem comparison (humidity + CO2 + FAE) with support-boundary scoring — **pending**

## 4) Candidate reference-kit direction (provisional)

- **Reference build supply spine:** Screwfix + Wickes + Amazon UK (prototype speed)
- **Reference control stack (easy):** Inkbird humidity/temperature controllers
- **Reference control stack (smart):** ESP32 + relay + approved sensor set
- **Scale-up supplier direction:** RS/CPC for component reliability once v0 architecture is locked

## 5) Next step checklist

- [ ] Add 10–20 UK partner entries across mushrooms/microgreens/lights/controllers using `PARTNER_SHORTLIST_TEMPLATE.md`
- [ ] Score each candidate for repeatability, support risk, and physical fit constraints
- [ ] Pick 1–2 reference kits for v0 and update `PARTNERS.md`
