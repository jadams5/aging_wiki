---
type: sop
aliases: [history bundle, data load file, bundle generation, importer format, history import format]
---

# SOP: generating a history bundle for the aging-simulator importer

How to produce the **history-bundle JSON** that the simulator's *History & plan* importer (milestone M4)
loads to drive a real longitudinal trajectory — biomarker draws, treatment start/stop dates, exposure
changes, and operator (senolytic) campaigns mapped onto the model's channels over time. This is the data-load
file's *spec + recipe*; the parser that consumes it is `parseHistoryBundle()` in `model/engine.mjs` (design:
`model/timeline-history-import-design.md` §14). A validated example lives at
[`model/history-bundle.example.json`](../model/history-bundle.example.json).

The bundle is deliberately **generic and person-agnostic** so it can live in the public repo as a format
spec. A real person's bundle is produced **locally** by a private transform (see *§ Producing a real bundle*)
and is **never committed**.

---

## Privacy posture (read first)

- The simulator app is a **standalone client-side page** — no backend, no network calls, no `localStorage`.
  A loaded bundle stays in browser memory for the session only; nothing is submitted anywhere.
- A **real** bundle contains an exact birth date + longitudinal labs, which is highly identifying. **Never
  commit a real bundle** to either repo. Keep it in the private personal-data repository or a local scratch
  path, load it via the file picker / paste box, and let the page discard it when you reload.
- This SOP, the example file, and the analyte map are all **fake / generic** — no person handle, no private
  path, no real values. Keep them that way (the commit leak-gate enforces it).

---

## Bundle schema (v1)

Top-level object. Every array is **optional** — omit or leave `[]` and it contributes nothing (an
`{ "bundleVersion": 1, "birthDate": … }` with no arrays imports nothing but the DOB sync).

| Field | Type | Notes |
|---|---|---|
| `bundleVersion` | `1` | Required. Anything else **aborts** the import. |
| `birthDate` | `"YYYY-MM-DD"` | Required. Real calendar date; every dated entry is converted to an **age** against it. |
| `sex` | `"male" \| "female"` | Optional; sets the model sex if present. Any other value aborts. |
| `measurements[]` | see below | Lab draws → `biomarker:<med>` anchors. |
| `treatments[]` | see below | Drug start/stop → `treatment:<id>` step (on at start, off at end). |
| `exposures[]` | see below | Behaviour/environment changes → `input:<id>` steps. |
| `nodeInterventions[]` | see below | Node freeze/slow windows → `intervention:<node>` (usually empty for real history; scenario tool). |
| `operators[]` | see below | Senolytic-style campaigns → `operator:<presetId>` pulses. |

**`measurements[]`** — one per lab value:
```json
{ "analyte": "ldl-c-mg-dl", "date": "2020-03-09", "value": 120, "unit": "mg/dL", "assay": "direct", "source": "annual physical" }
```
- `analyte` (preferred) is mapped to a model mediator via the table below; OR give `med` directly (`"LDL"`,
  `"systolicBP"`, `"BMI"`, `"HbA1c"`, `"restingHR"`). Supplying **both** is allowed only if they agree; a
  conflicting or unmapped-analyte-plus-`med` pair is **rejected** (no silent coercion).
- `unit` is **required** and validated against the mediator's canonical unit (with the conversions below);
  an unknown/mismatched unit is **rejected** rather than silently trusted.
- `assay` / `source` are free-text provenance (optional, ignored by the model, shown only in the report).

**`treatments[]`** — `{ "id": "statin", "start": "2018-06-01", "end": null, "dose": 1 }`. `id` ∈ the model's
treatments (`statin`, `antihypertensive`, `metformin`). `dose` ∈ `[0,1]` (default 1). `end` null = ongoing;
a finite `end` emits an explicit dose-0 step (the drug is **not** disease-modifying — stopping rebounds).

**`exposures[]`** — `{ "id": "alcohol", "changes": [ {"date":"…","value":4}, {"date":"…","value":0} ] }`.
`id` ∈ the wired exogenous inputs (`smokingStatus`, `physicalActivity`, `sleep`, `dietSatFat`, `dietFiber`,
`dietSodium`, `alcohol`, `airPollution`, `calorieBalance`). Each `changes[]` entry is a zero-order-hold step
(value persists until the next change; cessation is a hard step). `smokingStatus` is **categorical** —
`value` ∈ `{never, former, current}`; the numeric inputs take a number (out-of-model-range only **warns**).

**`nodeInterventions[]`** — `{ "node": "cellular-senescence", "start": "…", "end": null, "efficacy": 0.3 }`.
`node` ∈ any non-stub graph node (12 hallmark + 11 driver/cause). `efficacy` ∈ `[0,1]` (default 0.3). This is
a **scenario** lever (slow a node's accrual), not a record of something that happened — usually `[]` for a
real history.

**`operators[]`** — `{ "id": "dq-one-off", "dates": ["2026-05-01"], "scenario": {"killScenario":"central","reboundScenario":"central"} }`.
`id` ∈ the operator presets (`dq-one-off`). `dates[]` are dosing campaigns. `scenario` is optional (defaults
to the preset's central kill/rebound); keys are validated against the preset's scenario sets.

---

## Analyte → mediator mapping

| analyte key(s) | mediator | canonical unit | also accepts |
|---|---|---|---|
| `ldl-c-mg-dl`, `ldl-mg-dl`, `ldl-c`, `ldl` | `LDL` | `mg/dL` | `mmol/L` (×38.67) |
| `hba1c-pct`, `hba1c-percent`, `hba1c` | `HbA1c` | `%` | `mmol/mol` (IFCC→NGSP) |
| `bp-systolic-mmhg`, `sbp-mmhg`, `systolic-bp-mmhg`, `systolic-bp` | `systolicBP` | `mmHg` | — |
| `bmi`, `bmi-kg-m2` | `BMI` | `kg/m^2` | — |
| `resting-hr-bpm`, `rhr-bpm`, `resting-hr` | `restingHR` | `bpm` | `/min` |

**`apoB` is intentionally NOT mapped.** apoB ≠ LDL-C (different scale); an apoB analyte is reported *unmapped*
and dropped as a driver (kept only as an annotation) until a dedicated apoB mediator exists
(`#gap/apob-mediator`). Diastolic BP, triglycerides, CAC, DEXA sub-measures, etc. are likewise unmapped —
they ride as annotations, not model inputs.

---

## How dates and collisions are handled (annual grid)

The model runs on an **annual grid** (ages 20–100, 1-year steps). Each `date` becomes a fractional age
(`date − birthDate`) and is **snapped to the nearest whole year**. Consequences to expect in the import
report:

- Two draws of the same analyte landing in the **same year** → merged, **later date wins** (a warning lists
  the merge).
- A treatment that **starts and stops within one year** → collapses to the stop step (no modeled effect) —
  reported.
- A date **outside ages 20–100** → clamped to the grid edge, with a warning.
- Multiple windows for one `intervention:<node>`, or multiple `operator` entries for one preset → merged to
  a single window / a single combined dosing schedule.

---

## What the validator rejects vs. tolerates

- **Aborts** the whole import (existing timeline untouched): bad/missing `bundleVersion`, missing/invalid
  `birthDate`, bad `sex`, invalid JSON, or a total entry count over the cap.
- **Skips + reports** the single entry (the rest still import): unknown id/med, unmapped-analyte-with-med,
  missing/unknown unit, non-finite value, date before birth, `end ≤ start`, dose/efficacy out of `[0,1]`,
  bad categorical/scenario value, impossible calendar date.
- **Warns** (still imports): same-year merges, grid clamps, numeric exposure outside the model range.

Always read the import report — `loaded` counts per channel, `warnings`, `unmapped`, `errors`.

---

## Producing a real bundle (private, local)

A small **local transform in the private personal-data repository** assembles the bundle from existing
records and writes it to a local file (never committed):

1. **Birth date + sex** from the person record.
2. **`measurements`** from the dated lab panels — emit one entry per analyte using the **snake-case-with-units
   analyte keys** above, copying the value, the draw date, and the unit verbatim (the unit is load-bearing —
   do not assume canonical). Unmapped analytes may be included; they'll be reported and skipped.
3. **`treatments`** from medication start/stop dates (map each drug to its model `id`; omit drugs with no
   model channel).
4. **`exposures`** from behaviour/tracking history (smoking status transitions; alcohol, activity, sleep,
   diet, sodium, air-pollution step changes). Down-sample dense tracking streams to step changes — don't emit
   a point per day.
5. **`operators`** from any senolytic-style campaign dates; **`nodeInterventions`** usually `[]`.
6. Validate locally (load it into the importer, or run it through `parseHistoryBundle`) and **confirm 0
   errors** before relying on it.

The transform's mechanics + the real records stay private; only this generic format crosses into the public
repo. Run the commit leak-gate before any commit.

---

## See also

- `model/timeline-history-import-design.md` — full design (engine time-profiles, the importer, privacy).
- `model/history-bundle.example.json` — a complete, parser-validated example.
- [[sops/personal-tracking]] — what applied-health data to track and how (the upstream of a real bundle).
