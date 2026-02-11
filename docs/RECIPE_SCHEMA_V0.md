# Grow Cabin — Recipe Schema v0 (Draft)

_Last updated: 2026-02-11_

Purpose: define a simple, versioned recipe model for stage-based environmental control in early prototypes.

## 1) Design goals
- Human-readable and editable
- Stage-based control (manual stage switching allowed in v0)
- Explicit safety limits and defaults
- Easy to log and debug against telemetry

## 2) Top-level structure
```json
{
  "recipeId": "mushroom-oyster-v0",
  "name": "Oyster Mushroom — v0",
  "version": "0.1.0",
  "cropType": "mushroom",
  "createdAt": "2026-02-11T00:00:00Z",
  "updatedAt": "2026-02-11T00:00:00Z",
  "author": "Andy",
  "notes": "Prototype recipe",
  "stages": [ ... ],
  "safety": { ... },
  "controls": { ... },
  "metadata": { ... }
}
```

## 3) Stage object
```json
{
  "stageId": "fruiting",
  "label": "Fruiting",
  "order": 2,
  "entry": {
    "manual": true,
    "notes": "Switch when pins visible"
  },
  "duration": {
    "mode": "open",
    "minHours": 48,
    "maxHours": 240
  },
  "targets": {
    "rh": { "min": 85, "max": 92 },
    "tempC": { "min": 16, "max": 21 },
    "co2ppm": { "min": 500, "max": 1200 }
  },
  "actuation": {
    "humidifier": { "mode": "hysteresis", "onBelow": 85, "offAbove": 92, "minOnSec": 45, "minOffSec": 60 },
    "fae": { "mode": "scheduled", "periodSec": 600, "runSec": 60 }
  },
  "alerts": {
    "rhHigh": 95,
    "rhLow": 80,
    "co2High": 1500
  }
}
```

## 4) Safety block (global)
```json
{
  "safety": {
    "maxRhPercent": 97,
    "minRhPercent": 60,
    "maxTempC": 30,
    "minTempC": 5,
    "maxCo2ppm": 3000,
    "failsafe": {
      "sensorTimeoutSec": 120,
      "onSensorFault": "humidifier_off_fan_safe_cycle"
    }
  }
}
```

## 5) Control policy block (global)
```json
{
  "controls": {
    "samplingIntervalSec": 30,
    "logIntervalSec": 30,
    "stageSwitch": "manual",
    "timezone": "Europe/London"
  }
}
```

## 6) Metadata block
```json
{
  "metadata": {
    "prototypeLevel": "P1",
    "hardwareProfile": "tier-hybrid",
    "species": "oyster",
    "source": "internal-draft"
  }
}
```

## 7) Validation rules (v0)
- `version` must be semver-like (`x.y.z`)
- Stage `order` must be unique and contiguous
- Target min <= max
- Hysteresis `onBelow` < `offAbove`
- Safety bounds must include stage bounds
- Required fields: `recipeId`, `version`, `cropType`, `stages`, `safety`, `controls`

## 8) Recommended first recipe set
- `mushroom-oyster-v0`
- `mushroom-lionsmane-v0` (placeholder)
- `greens-microgreens-v0` (placeholder for Prototype 2)

## 9) Next steps
- Create JSON schema file (`recipe.schema.json`)
- Add sample recipe JSON files
- Tie runbook logging fields to recipe version/stage IDs
