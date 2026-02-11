# Mushroom Species Selection Matrix (v0)

_Last updated: 2026-02-11_

Purpose: support decision for first v0 mushroom species with a practical scoring framework.

## 1) Candidate species (initial)
- Oyster (Pleurotus spp.)
- Lion’s Mane (Hericium erinaceus)
- Shiitake (Lentinula edodes)

## 2) Scoring dimensions (1–5)
- **Environmental robustness** (tolerance to control drift)
- **Beginner success probability**
- **Cycle speed** (faster to harvest = higher score)
- **Contamination sensitivity** (less sensitive = higher score)
- **Market pull / desirability**
- **Recipe/control complexity** (simpler = higher score)

## 3) Draft scoring (assumption-based, to validate)

| Species | Robustness | Beginner success | Cycle speed | Contam tolerance | Market pull | Control simplicity | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| Oyster | 4.5 | 4.5 | 4.5 | 4.0 | 4.0 | 4.5 | **26.0** |
| Lion’s Mane | 3.5 | 3.5 | 3.5 | 3.0 | 4.5 | 3.5 | **21.5** |
| Shiitake | 3.0 | 3.0 | 2.5 | 3.0 | 4.0 | 3.0 | **18.5** |

## 4) Provisional recommendation
For v0 prototype speed and reliability, start with **Oyster** as default first species.

Rationale:
- Strong beginner profile
- Faster learning loops
- Better tolerance for early control-system imperfections

## 5) Decision gate (Andrew)
Confirm whether to lock:
- **v0 species = Oyster**,
- with Lion’s Mane as second species in queue once P1 is stable.

## 6) Next step actions
- [ ] Build `mushroom-oyster-v0` recipe from `RECIPE_SCHEMA_V0`
- [ ] Define target RH/temp/FAE ranges for first run card
- [ ] Add species-specific KPI targets (days-to-harvest, morphology quality)
