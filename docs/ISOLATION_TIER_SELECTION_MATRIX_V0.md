# Isolation Tier Selection Matrix (v0)

_Last updated: 2026-02-11_

Purpose: choose the right CEA control tier for v0 prototype and early product direction.

## 1) Tier options
- **Tier 1 — Stabilised enclosure**
  - Passive/room-driven exchange, minimal active airflow control
- **Tier 2 — Managed exchange**
  - Controlled intake/exhaust + filtration + scheduled FAE
- **Tier 3 — Near-sealed**
  - Tight envelope, stronger filtration/pressure control, highest complexity

## 2) Scoring dimensions (1–5)
- Build complexity (simpler = higher)
- Time-to-prototype speed
- Environmental control quality
- Contamination-risk management
- Cost efficiency for v0
- Supportability (home user friendliness)

## 3) Draft scoring (assumption-based)

| Tier | Build simplicity | Speed | Control quality | Contam management | Cost efficiency | Supportability | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| Tier 1 | 5.0 | 5.0 | 2.5 | 2.5 | 5.0 | 4.5 | **24.5** |
| Tier 2 | 3.5 | 4.0 | 4.0 | 4.0 | 4.0 | 4.0 | **23.5** |
| Tier 3 | 2.0 | 2.0 | 5.0 | 4.5 | 2.5 | 2.5 | **18.5** |

## 4) Provisional recommendation
For Grow Cabin v0, target **Tier 2 (Managed exchange)** as the practical default.

Why:
- Large control improvement over Tier 1,
- materially lower complexity than Tier 3,
- best balance for mushroom-first outcomes and explainable operation.

## 5) Deployment strategy
- Start physical P0 learning at Tier 1.5/2-lite where needed (fast setup).
- Converge to full Tier 2 baseline by P1 with documented FAE + filtration behavior.
- Keep Tier 3 as future roadmap for premium/high-control path only.

## 6) Decision gate (Andrew)
Confirm lock for v0:
- **Target isolation tier = Tier 2**,
- with explicit fallback if prototype constraints force temporary Tier 1 operation.

## 7) Next actions
- [ ] Reflect tier choice in one-page brief and pricing assumptions
- [ ] Tie tier choice into prototype model presets
- [ ] Add tier-specific acceptance criteria to runbooks
