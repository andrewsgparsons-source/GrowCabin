# Environmental Control System — Bill of Materials

**Date:** 2026-02-10  
**Project:** Budget Grow Shed — Environmental Control Package  
**Target:** 8×6ft (2440×1830mm) insulated growing shed  
**Use cases:** Mushroom fruiting room (primary), microgreen growing (secondary)

---

## Design Philosophy

Two tiers: **Essential** (mushroom-only, minimum viable) and **Enhanced** (mushrooms + microgreens, IoT-ready). The Enhanced tier adds CO₂ monitoring, grow lighting, automated watering, and smart control — features that justify a premium price point.

---

## 1. Enclosure Seals & Mechanical

Items needed to make the shed airtight enough for environmental control.

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| Door seal (rubber strip, self-adhesive) | 5m roll, P-profile EPDM | 1 | £4.50 | £4.50 | Screwfix |
| Duct entry grommets (100mm) | Rubber wall grommet | 2 | £3.00 | £6.00 | Screwfix |
| Aluminium foil tape (PIR joint sealing) | 50mm × 45m | 2 | £5.00 | £10.00 | Wickes |
| Waterproof cable glands (IP68) | PG9/PG11 mixed pack | 1 | £6.00 | £6.00 | Amazon UK |
| Silicone sealant (mould-resistant) | 300ml tube, bathroom-grade | 1 | £5.00 | £5.00 | Screwfix |
| **Subtotal** | | | | **£31.50** | |

---

## 2. Sensors

### Essential (Temp + RH)

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| DHT22 / AM2302 sensor module | ±0.5°C, ±2% RH, digital | 1 | £5.50 | £5.50 | Amazon UK |
| Waterproof DS18B20 probe (backup) | Stainless steel, 1m cable | 1 | £3.50 | £3.50 | Amazon UK |
| **Subtotal (Essential)** | | | | **£9.00** | |

### Optional Upgrades

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| SCD40/SCD41 CO₂ sensor module | 400–2000 ppm, I2C, +temp/RH | 1 | £15.00 | £15.00 | Amazon UK |
| BH1750 light sensor module | Lux meter, I2C | 1 | £3.00 | £3.00 | Amazon UK |
| Soil/substrate moisture sensor | Capacitive (not resistive) | 2 | £3.00 | £6.00 | Amazon UK |
| **Subtotal (Optional)** | | | | **£24.00** | |

**Recommendation:** The SCD40 CO₂ sensor is strongly recommended for mushroom growing — CO₂ above 1000 ppm causes leggy, malformed fruiting bodies. At £15 it's the single most impactful upgrade. The SCD40 also reads temp+RH, potentially replacing the DHT22.

---

## 3. Controller + PSU + Wiring

### Option A: Plug-and-Play (No programming required)

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| Inkbird IHC-200 humidity controller | Plug-in, relay output, probe included | 1 | £28.00 | £28.00 | Amazon UK |
| Inkbird ITC-308 temperature controller | Plug-in, heating+cooling outputs | 1 | £28.00 | £28.00 | Amazon UK |
| Timer switch (mechanical, 24hr) | For fan scheduling | 1 | £5.00 | £5.00 | Screwfix |
| Extension lead (4-gang, surge protected) | 2m, individual switches | 1 | £12.00 | £12.00 | Screwfix |
| **Subtotal (Option A)** | | | | **£73.00** | |

### Option B: Smart / IoT (ESP32-based, programmable)

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| ESP32 development board (e.g. WROOM-32) | WiFi + BLE, 38-pin | 1 | £7.00 | £7.00 | Amazon UK |
| 4-channel relay module (5V, opto-isolated) | For switching fans, humidifier, heater | 1 | £5.50 | £5.50 | Amazon UK |
| 12V 5A DC PSU (switching) | Powers fans + LED strips | 1 | £8.00 | £8.00 | Amazon UK |
| 5V 2A USB PSU (for ESP32) | Micro-USB or USB-C | 1 | £4.00 | £4.00 | Amazon UK |
| Wiring kit (assorted hook-up wire, terminals, connectors) | — | 1 | £8.00 | £8.00 | Amazon UK |
| Junction box (IP65, 4-terminal) | Outdoor rated | 1 | £4.00 | £4.00 | Screwfix |
| DIN rail + terminal blocks (optional, neater install) | — | 1 | £10.00 | £10.00 | Amazon UK |
| **Subtotal (Option B)** | | | | **£46.50** | |

**Recommendation:** Option A is simpler and needs zero coding — ideal for most customers. Option B is cheaper and vastly more capable (data logging, phone alerts, remote monitoring, automated multi-zone control) but requires firmware development. For a product, consider: sell Option A as standard, offer Option B as a "Smart" upgrade tier. You could pre-flash the ESP32 with open-source firmware like ESPHome/Tasmota.

---

## 4. Fan / FAE + Filters

Mushrooms need 4–8 air changes per hour. Shed volume ≈ 8.5m³. Need: 34–68 m³/hr airflow minimum.

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| 100mm inline duct fan (intake) | ~100 m³/hr, 25W | 1 | £18.00 | £18.00 | Amazon UK |
| 100mm inline duct fan (exhaust) | ~100 m³/hr, 25W | 1 | £18.00 | £18.00 | Amazon UK |
| 100mm aluminium flexible ducting | 3m length | 2 | £6.00 | £12.00 | Screwfix |
| 100mm wall grille (louvred, external) | Gravity-close flap | 2 | £5.00 | £10.00 | Screwfix |
| Intake filter (coarse mesh + fine filter pad) | Prevent insects/spores | 1 | £8.00 | £8.00 | Amazon UK |
| HEPA filter (optional, for intake in mushroom fruiting) | Inline 100mm HEPA capsule | 1 | £15.00 | £15.00 | Amazon UK |
| Duct clamps (100mm, jubilee style) | — | 4 | £1.50 | £6.00 | Screwfix |
| **Subtotal (without HEPA)** | | | | **£72.00** | |
| **Subtotal (with HEPA)** | | | | **£87.00** | |

**Note:** For mushroom fruiting, filtered intake is important to reduce contamination. A HEPA filter on the intake is ideal for serious growers. Budget option: fine mesh + synthetic filter pad (£8 vs £15).

**Airflow pattern:** Intake low on one wall, exhaust high on opposite wall — creates natural cross-ventilation and convection.

---

## 5. Humidifier + Optional Heater

### Humidifier

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| **Budget:** Ultrasonic disc fogger (single disc) | 400ml/hr output, 24V | 1 | £12.00 | £12.00 | Amazon UK |
| **Better:** 4–6L ultrasonic humidifier (top-fill) | 300ml/hr, auto-shutoff | 1 | £25.00 | £25.00 | Amazon UK |
| **Best:** Commercial ultrasonic humidifier (13L) | 1000ml/hr, humidistat built in | 1 | £55.00 | £55.00 | Amazon UK |
| Humidity controller (if not using Inkbird above) | Plug-in, probe | 1 | £12.00 | £12.00 | Amazon UK |
| Replacement fogger discs (for disc fogger option) | Pack of 5 | 1 | £5.00 | £5.00 | Amazon UK |

**Recommendation:** For an 8×6 shed at 85%+ RH, a 4–6L humidifier (~£25) is the sweet spot. Disc foggers are cheapest but need a reservoir container and are less reliable. The 13L commercial unit is overkill unless running high throughput.

### Heater (Optional — for winter growing, maintaining 15–21°C)

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| **Budget:** Tubular greenhouse heater 60W | 1ft, IP55, plug-in | 1 | £18.00 | £18.00 | Amazon UK |
| **Better:** Tubular greenhouse heater 120W | 2ft, IP55, thermostat | 1 | £25.00 | £25.00 | Amazon UK |
| **Best:** Oil-filled radiator 500W | Portable, thermostat | 1 | £30.00 | £30.00 | Amazon UK |
| Frost-stat thermostat (if heater lacks one) | Plug-in, 0–20°C range | 1 | £15.00 | £15.00 | Screwfix |

**Recommendation:** For a well-insulated 8×6 shed, 60–120W tubular heaters are sufficient to maintain 15°C through UK winter. PIR insulation + 120W heater = comfortable growing temps Nov–Mar. Oil-filled radiators are overkill unless you're in Scotland and it's -10°C.

**Running cost estimate:**
- 120W heater × 12 hrs/day × 150 winter days = 216 kWh × £0.30/kWh = **~£65/winter**
- 60W heater: ~£32/winter

---

## 6. LEDs (for microgreens) + Optional Watering

### LED Grow Lights

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| **Budget:** LED grow light strip (full spectrum, 1m) | USB/12V, ~10W per strip | 4 | £8.00 | £32.00 | Amazon UK |
| **Better:** T8 LED grow tube (4ft/1200mm) | 18W, full spectrum, linkable | 4 | £12.00 | £48.00 | Amazon UK |
| **Best:** Samsung LM301B quantum board (120W) | Full spectrum, dimmable, driver included | 1 | £45.00 | £45.00 | Amazon UK |
| Timer (for light schedule, 16hr on / 8hr off) | 24hr mechanical or smart plug | 1 | £5.00 | £5.00 | Screwfix |

**Recommendation:** For microgreens on shelving (4 tiers), 4× T8 LED tubes (one per shelf) is the best balance of cost, coverage, and simplicity. Budget strips work but give less uniform light. Quantum boards are for serious production.

### Watering (Optional)

| Item | Spec | Qty | Unit Price | Total | Supplier |
|------|------|-----|-----------|-------|----------|
| 12V mini water pump (peristaltic or diaphragm) | 1–3 L/min | 1 | £8.00 | £8.00 | Amazon UK |
| Drip irrigation tubing kit (4mm micro-drip) | 10m + connectors + drippers | 1 | £10.00 | £10.00 | Amazon UK |
| 20L water reservoir (food-grade jerry can) | — | 1 | £8.00 | £8.00 | Amazon UK |
| Float valve (auto top-up for humidifier reservoir) | — | 1 | £5.00 | £5.00 | Amazon UK |
| **Subtotal (watering)** | | | | **£31.00** | |

**Note:** Most microgreen growers use manual bottom-watering (trays sitting in shallow water). Automated drip irrigation is a nice-to-have, not essential for small scale.

---

## 7. Assembly / Test / Packaging / Shipping / Returns

Placeholder estimates for product costing:

| Item | Estimate | Notes |
|------|----------|-------|
| Assembly labour (wiring, testing) | £30–50 | ~1 hour skilled work |
| QC/testing (run each system, check sensors) | £10–15 | 15–20 min per unit |
| Packaging (box, foam, instructions) | £10–15 | Custom box + printed manual |
| Shipping (UK mainland, parcel) | £8–15 | Depending on courier + weight |
| Returns allowance (5% return rate) | ~£5 per unit avg | Built into margin |
| **Subtotal** | **£63–100** | |

---

## Summary — Complete System Costs

### Tier 1: ESSENTIAL (Mushroom growing, plug-and-play)

| Category | Cost |
|----------|------|
| Enclosure seals & mechanical | £31.50 |
| Sensors (temp + RH only) | £9.00 |
| Controller (Inkbird IHC-200 humidity) | £28.00 |
| Controller (Inkbird ITC-308 temp) | £28.00 |
| Timer + extension lead | £17.00 |
| Fans × 2 + ducting + grilles + filter | £72.00 |
| Humidifier (4–6L ultrasonic) | £25.00 |
| **ESSENTIAL TOTAL** | **£210.50** |

### Tier 2: ENHANCED (Mushroom + Microgreens, IoT-ready)

| Category | Cost |
|----------|------|
| Enclosure seals & mechanical | £31.50 |
| Sensors (SCD40 CO₂/temp/RH + light + moisture) | £33.00 |
| Controller (ESP32 + relays + PSUs + wiring) | £46.50 |
| Fans × 2 + ducting + grilles + HEPA filter | £87.00 |
| Humidifier (4–6L ultrasonic) | £25.00 |
| Heater (120W tubular) | £25.00 |
| LED grow lights (4× T8 tubes + timer) | £53.00 |
| Watering system (pump + drip kit + reservoir) | £31.00 |
| **ENHANCED TOTAL** | **£332.00** |

### With Assembly/Packaging/Shipping (product cost)

| Tier | Components | Assembly/Pack/Ship | **Total Product Cost** |
|------|-----------|-------------------|----------------------|
| Essential | £210.50 | ~£65 | **~£275** |
| Enhanced | £332.00 | ~£85 | **~£417** |

### Suggested Retail Pricing (2.5–3× markup for margin + overheads)

| Tier | Cost | Retail (inc VAT) | Margin |
|------|------|-----------------|--------|
| Essential Kit | £275 | **£599–£699** | 54–61% gross |
| Enhanced Kit | £417 | **£899–£1,099** | 54–62% gross |
| Complete Shed + Essential Kit | £920+£275 = £1,195 | **£2,499–£2,999** | 52–60% gross |
| Complete Shed + Enhanced Kit | £1,330+£417 = £1,747 | **£3,499–£3,999** | 50–56% gross |

---

## Key Supplier Links

| Supplier | URL | Best For |
|----------|-----|----------|
| Amazon UK | amazon.co.uk | Sensors, ESP32, humidifiers, LED lights, small electronics |
| Screwfix | screwfix.com | Ducting, grilles, sealants, cable, timers, heaters |
| Wickes | wickes.co.uk | Foil tape, larger building materials |
| The Pi Hut | thepihut.com | ESP32, sensors, electronics (UK stock, fast delivery) |
| CPC Farnell | cpc.farnell.com | Industrial sensors, DIN rail components, IP-rated enclosures |
| RS Components | uk.rs-online.com | Professional-grade sensors and controllers |

---

## Notes for Parametric Model Integration

When adding environmental control to the 3D configurator:
- **Duct penetrations:** Two 100mm circular holes in opposite walls (low intake, high exhaust)
- **Electrical entry:** One cable gland point (rear wall, near floor)
- **Humidifier position:** Floor level, centre or near intake fan
- **Heater position:** Low on wall, away from moisture
- **Sensor position:** Mid-height, centre of shed, away from direct airflow
- **Shelving:** 4-tier wire rack (600mm deep × 1200mm wide × 1800mm tall) — show in model
- **LED mounts:** Underside of each shelf tier
