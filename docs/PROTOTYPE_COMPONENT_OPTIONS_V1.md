# Prototype 0 — Component Options & Evaluations (Small Chamber)

_Last updated: 2026-02-11_

Goal: shortlist practical options for each core component in the first small mushroom-first prototype (~1200 × 600 × 1800 mm).

Scoring key (1–5):
- **Reliability** (repeatable operation)
- **Complexity** (lower wiring/software burden = higher score)
- **Control quality** (how well it supports stable environmental control)
- **Cost efficiency** (value for money for P0)

> Pricing is indicative UK retail and should be re-quoted before purchase.

---

## 1) Chamber / enclosure

### Option A — Grow tent / shelving enclosure
- **Cost:** ~£80–£180
- **Pros:** fastest setup, low capex, easy iteration
- **Cons:** less rigid sealing, aesthetics, durability
- **Scores:** Reliability 3.5 | Complexity 5 | Control quality 3.5 | Cost efficiency 5

### Option B — Small framed insulated box (DIY)
- **Cost:** ~£180–£350
- **Pros:** better thermal/humidity stability, cleaner airflow control
- **Cons:** more build time, more fabrication risk
- **Scores:** Reliability 4 | Complexity 3 | Control quality 4.5 | Cost efficiency 4

**Recommendation for P0:** Option A unless we already have build time and tools.

---

## 2) Temperature/RH sensing

### Option A — DHT22-class sensor
- **Cost:** ~£5–£10
- **Pros:** cheap, easy, widely used
- **Cons:** modest accuracy/stability, can drift in high humidity
- **Scores:** Reliability 3 | Complexity 5 | Control quality 3 | Cost efficiency 5

### Option B — SHT31/SHT35-class sensor
- **Cost:** ~£10–£20
- **Pros:** better stability/accuracy than DHT22 class
- **Cons:** slightly higher cost, still not CO2-aware
- **Scores:** Reliability 4 | Complexity 4.5 | Control quality 4 | Cost efficiency 4

**Recommendation for P0:** Option B if budget allows; otherwise Option A + frequent sanity checks.

---

## 3) CO2 sensing (optional but valuable)

### Option A — No CO2 sensor in first pass
- **Cost:** £0
- **Pros:** simplest possible build
- **Cons:** weaker FAE tuning and morphology diagnostics
- **Scores:** Reliability 3.5 | Complexity 5 | Control quality 2.5 | Cost efficiency 4

### Option B — SCD40/SCD41 class NDIR CO2
- **Cost:** ~£15–£35
- **Pros:** strong signal for mushroom FAE decisions; often includes temp/RH
- **Cons:** integration effort and added cost
- **Scores:** Reliability 4.5 | Complexity 4 | Control quality 5 | Cost efficiency 4.5

**Recommendation for P0:** Option B (high-value upgrade).

---

## 4) Control architecture

### Option A — Plug-and-play controllers (Inkbird humidity/temp style)
- **Cost:** ~£50–£80 total
- **Pros:** quickest to operational control, low coding risk
- **Cons:** weaker telemetry integration and flexible logic
- **Scores:** Reliability 4.5 | Complexity 5 | Control quality 3.5 | Cost efficiency 4.5

### Option B — ESP32 + 4ch relay + PSU
- **Cost:** ~£20–£50 core electronics
- **Pros:** rich logging/control, extensible to future product
- **Cons:** firmware and wiring complexity
- **Scores:** Reliability 3.5 | Complexity 2.5 | Control quality 4.5 | Cost efficiency 4.5

### Option C — Hybrid (recommended)
- Plug-and-play actuation now + ESP32 passive logging layer
- **Cost:** ~£80–£130
- **Pros:** de-risks control while still collecting useful data
- **Cons:** mixed architecture complexity
- **Scores:** Reliability 4.5 | Complexity 4 | Control quality 4.5 | Cost efficiency 4

**Recommendation for P0:** Option C if possible, else A.

---

## 5) Fresh-air exchange fans (100 mm)

### Option A — Low-cost inline pair
- **Cost:** ~£30–£50 pair
- **Pros:** cheap and available
- **Cons:** noisier, higher variance in actual flow/performance
- **Scores:** Reliability 3 | Complexity 5 | Control quality 3 | Cost efficiency 4.5

### Option B — Branded quieter inline fans (e.g., Manrose/Vent-Axia class)
- **Cost:** ~£79–£150 each (observed ranges)
- **Pros:** lower noise, better build quality
- **Cons:** materially higher cost for P0
- **Scores:** Reliability 4.5 | Complexity 5 | Control quality 4 | Cost efficiency 3

**Recommendation for P0:** Option A initially; upgrade only if airflow/noise issues appear.

---

## 6) Humidification

### Option A — Ultrasonic disc fogger + reservoir
- **Cost:** ~£12–£25
- **Pros:** cheapest entry
- **Cons:** more fiddly, maintenance burden, reliability variance
- **Scores:** Reliability 2.5 | Complexity 3 | Control quality 3 | Cost efficiency 4.5

### Option B — 4–6L ultrasonic humidifier
- **Cost:** ~£25–£45
- **Pros:** practical sweet spot, easier operation, stable output
- **Cons:** still consumer-grade variability
- **Scores:** Reliability 4 | Complexity 5 | Control quality 4 | Cost efficiency 5

### Option C — Commercial larger humidifier
- **Cost:** ~£55+
- **Pros:** higher output headroom
- **Cons:** overkill for small chamber; cost/space/noise
- **Scores:** Reliability 4 | Complexity 4.5 | Control quality 4.5 | Cost efficiency 2.5

**Recommendation for P0:** Option B.

---

## 7) Intake filtration

### Option A — Mesh + filter pad
- **Cost:** ~£5–£12
- **Pros:** cheap and easy replacement
- **Cons:** lower filtration performance
- **Scores:** Reliability 3 | Complexity 5 | Control quality 3 | Cost efficiency 5

### Option B — Inline HEPA capsule (100 mm)
- **Cost:** ~£15–£35
- **Pros:** better contamination control
- **Cons:** pressure drop and added cost
- **Scores:** Reliability 4.5 | Complexity 4 | Control quality 4.5 | Cost efficiency 3.5

**Recommendation for P0:** Start A; switch to B if contamination pressure is high.

---

## 8) Suggested P0 bundle (balanced)

- Enclosure: Option A (tent/shelving)
- Temp/RH: SHT31-class (or DHT22 fallback)
- CO2: SCD40/SCD41 class
- Control: Hybrid C (or Plug-and-play A)
- FAE fans: Option A low-cost pair
- Humidifier: Option B 4–6L ultrasonic
- Filtration: Option A mesh/pad initially

### Expected total (small prototype)
- **Low:** ~£320
- **Typical:** ~£420
- **Upper with extras:** ~£550

---

## 9) Next step
Create a locked shopping list (exact SKUs + quantities + fallback alternatives) for one chosen architecture:
- **Path 1:** quickest build (Plug-and-play)
- **Path 2:** data-first build (Hybrid)
