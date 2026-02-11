# Architecture Decision Matrix — One Chamber vs Two Variants (v0)

_Last updated: 2026-02-11_

Purpose: evaluate whether Grow Cabin v0 should launch as a single multi-crop chamber or split into two variants/inserts.

## 1) Options
- **Option A:** Single chamber for mushrooms + greens via recipe switching
- **Option B:** Two variants (or swappable inserts) optimized per crop class

## 2) Scoring dimensions (1–5)
- Engineering complexity (lower complexity = higher score)
- Time-to-first-prototype speed
- Crop-environment fit quality
- User clarity/onboarding simplicity
- Manufacturing/SKU simplicity
- Support burden risk (lower support ambiguity = higher score)

## 3) Draft scoring (assumption-based)

| Option | Eng complexity | Time-to-prototype | Env fit quality | Onboarding clarity | SKU simplicity | Support risk | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| A: Single chamber | 4.0 | 4.5 | 3.0 | 3.5 | 5.0 | 3.0 | **23.0** |
| B: Two variants/inserts | 2.5 | 2.5 | 4.5 | 4.5 | 2.5 | 4.0 | **20.5** |

## 4) Provisional recommendation (v0)
Start with **Option A (single chamber)** for speed and SKU simplicity, with explicit guardrails:
- mushrooms-first baseline settings,
- optional greens profile in later prototype stage,
- document compromises clearly.

## 5) Mitigation plan for Option A compromises
- Lock one baseline physical layout that supports both airflow and lighting paths
- Use stage/recipe constraints to avoid unsupported combinations
- Add contamination and cleaning SOP to reduce cross-mode risks
- Introduce insert/variant roadmap only after stability proof

## 6) Decision gate (Andrew)
Confirm whether to lock for v0:
- **Single chamber baseline**,
- with explicit roadmap checkpoint for variant split after P1/P2 evidence.

## 7) Next actions
- [ ] Add this decision to Decisions map (with assumptions and reversal triggers)
- [ ] Define “variant split triggers” (e.g., repeated compromise failures)
- [ ] Reflect final choice in one-page brief and investor narrative
