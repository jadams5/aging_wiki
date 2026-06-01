---
type: framework
aliases: [intervention modality map, interventions by mode, modality MOC, "interventions by delivery"]
sources: []
covers: [interventions, modalities, delivery-platforms]
---

# Interventions by modality — synthesis MOC

This page answers: **"What interventions exist in modality X, and how do modalities compare for the same target?"**

Companion to [[frameworks/interventions-by-hallmark]] (axis: which hallmark) and [[frameworks/intervention-classes]] (axis: mechanism). This page slices on the **delivery modality** (cell vs. drug vs. dietary pattern vs. gene-therapy vector vs. blood product). The same atomic intervention page may appear once here and once on each sister MOC; truth lives on the atomic pages, not here.

Mode-A discipline: this page is pure aggregation. No quantitative claims originate here. Each Dataview block queries `interventions/` and `molecules/compounds/` for the corresponding `mode:` value.

> **Round seeded:** R23e (2026-05-06). Replaces the per-folder `_overview.md` design considered in R23a kickoff; matches the established R16 framework-page convention.

---

## Modality taxonomy

The wiki recognises six canonical `mode:` values on `type: intervention` frontmatter (per CLAUDE.md):

| Modality | Delivery substrate | Reversibility | Regulatory archetype | Example anchor |
|---|---|---|---|---|
| `lifestyle` | behavioural — exercise, sleep, social, environmental | high (stop the behaviour) | non-medical (consumer) | [[exercise]] |
| `dietary` | nutrition — fasting protocols, macronutrient patterns | high (resume normal eating) | non-medical (consumer); some medical-food pathways | [[caloric-restriction]] |
| `pharmacological` | small-molecule + biologic drugs | medium (drug-PK-dependent) | FDA / EMA / PMDA NDA-or-BLA pathway | [[rapamycin]] |
| `gene-therapy` | viral-vector + DNA-modifying interventions | low (durable; integration or chronic expression) | FDA RMAT / advanced-therapy regulation | [[aav-tert]] |
| `stem-cell-therapy` | live-cell or cell-derivative grafts | low (engraftment durable; paracrine transient) | FDA RMAT / cellular-therapy pathway | [[hematopoietic-stem-cell-transplantation]] |
| `blood-product` | apheresis-based plasma manipulation | medium (per-session) | FDA / blood-bank regulation | [[plasma-exchange]] |

Boundaries are not always sharp:

- [[in-vivo-partial-reprogramming-therapy]] uses gene-therapy vectors but acts via a stem-cell-biology mechanism (cell-identity manipulation) — classified `stem-cell-therapy` per R23a decision; the AAV-vector view is on [[aav-osk]] (`gene-therapy`).
- [[plasma-exchange]] involves no transplanted cells but uses heterochronic-parabiosis biology — classified `blood-product` after R21 schema escalation.
- iPSC-derived β-cell grafts are `stem-cell-therapy` even though the cellular product is heavily engineered ex vivo; the modality marker tracks the *therapeutic agent*, not the *manufacturing process*.

When in doubt, classify by what physically enters the patient (drug / cells / DNA / plasma / nothing — i.e., behavioural).

---

## Lifestyle

Behavioural interventions: nothing administered, but a sustained change in activity, sleep, or environmental exposure that the body responds to. Highest reversibility, lowest regulatory friction, but adherence is the central problem.

```dataview
TABLE WITHOUT ID file.link AS Intervention, mechanisms AS Mechanisms, target-hallmarks AS Hallmarks, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "interventions"
WHERE mode = "lifestyle"
SORT human-evidence-level DESC, file.name ASC
```

**Cross-modality observation:** lifestyle interventions overlap mechanistically with `dietary` (the meal-timing protocols straddle both); we classify pure-behaviour as `lifestyle` ([[exercise]], [[sleep]], [[heat-exposure]]) and food-composition-or-timing as `dietary`. Lifestyle interventions have the strongest population-evidence base (decades of cohort data) but the weakest mechanistic-RCT base.

---

## Dietary

Nutrition-pattern interventions: fasting protocols, macronutrient compositions, specific-amino-acid restriction. Cohort + small-RCT evidence is strong for cardiometabolic markers; longevity-RCT evidence is uniformly absent.

```dataview
TABLE WITHOUT ID file.link AS Intervention, mechanisms AS Mechanisms, target-hallmarks AS Hallmarks, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "interventions"
WHERE mode = "dietary"
SORT human-evidence-level DESC, file.name ASC
```

**Cross-modality observation:** all dietary interventions converge on a few molecular axes — [[mtor]] inhibition, [[ampk]] activation, [[autophagy]] induction, [[sirtuin]] activation, [[fgf21]]-mediated stress signaling — with [[caloric-restriction]] as the canonical reference. The pharmacological-class axis ([[mtor-inhibitors]], [[ampk-activators]], [[nad-precursors]]) reproduces these signals via small molecules. Choosing dietary vs. pharmacological is a question of adherence, side-effect profile, and durability rather than mechanism.

---

## Pharmacological

Small-molecule and biologic drugs. Largest historical R&D infrastructure; clearest regulatory pathway; mechanism-class is captured in detail on [[frameworks/intervention-classes]].

```dataview
TABLE WITHOUT ID file.link AS Intervention, mechanisms AS Mechanisms, target-hallmarks AS Hallmarks, human-evidence-level AS "Evidence", clinical-stage AS Stage, translation-gap AS "Gap"
FROM "interventions"
WHERE mode = "pharmacological"
SORT clinical-stage DESC, file.name ASC
```

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanisms, hallmarks AS Hallmarks, human-evidence-level AS "Evidence", clinical-stage AS Stage
FROM "molecules/compounds"
WHERE clinical-stage
SORT clinical-stage DESC, file.name ASC
```

**Cross-modality observation:** the pharmacological space subdivides cleanly by mechanism (covered on [[frameworks/intervention-classes]] — senolytics, senomorphics, mTOR-inhibitors, NAD-precursors, AMPK-activators, sirtuin-activators, GLP-1 agonists, etc.). The class pages anchor specific compound pages; the mechanism MOC is the right entry point for "what hits hallmark X via pharmacology". This block is here for modality-symmetry but is functionally redundant with the class MOC.

---

## Gene therapy

Viral-vector + DNA-modifying interventions. Highest theoretical durability (single-administration permanent edit) but highest cancer + immunogenicity risk and the steepest regulatory bar. Modality is in early ascent: VERVE-101 / VERVE-102 (PCSK9 base-editing) is the first in-human in-vivo somatic-base-editing program with durable cardiovascular geroprotection as the implicit goal.

```dataview
TABLE WITHOUT ID file.link AS Intervention, targets AS Targets, mechanisms AS Mechanisms, target-hallmarks AS Hallmarks, human-evidence-level AS "Evidence", clinical-stage AS Stage
FROM "interventions"
WHERE mode = "gene-therapy"
SORT clinical-stage DESC, file.name ASC
```

**Cross-modality observation:** gene-therapy modality fragments by vector + edit-type:

| Vector | Edit type | Durability | Aging-relevant programs |
|---|---|---|---|
| AAV (serotypes 2/9/PHP.eB) | Episomal expression cassette | Months–years (non-integrating); persistent in non-dividing cells | [[aav-tert]] (telomerase), [[aav-klotho]] (Klotho), [[aav-follistatin]] (myostatin antagonism), [[aav-osk]] (Yamanaka-factor pulsing) |
| LNP-Cas9-base-editor | Permanent single-base substitution | Lifetime (DNA-level edit) | [[crispr-base-editing-pcsk9]] (VERVE) |
| mRNA-LNP | Transient protein expression (hours–days) | Single-dose; repeat as needed | [[in-vivo-partial-reprogramming-therapy]] mRNA-LNP-OSK arm; multiple preclinical |

The AAV-vector deep dive is on [[aav-tert]] (precedent) and [[aav-osk]] (most R23b detail). Cancer risk is the load-bearing translation barrier across the modality.

---

## Stem-cell therapy

Live-cell + cell-derivative grafts. Decades of clinical experience for hematologic disease ([[hematopoietic-stem-cell-transplantation]]); aging-specific use is overwhelmingly preclinical or early-phase.

```dataview
TABLE WITHOUT ID file.link AS Intervention, mechanisms AS Mechanisms, target-hallmarks AS Hallmarks, human-evidence-level AS "Evidence", clinical-stage AS Stage, translation-gap AS "Gap"
FROM "interventions"
WHERE mode = "stem-cell-therapy"
SORT clinical-stage DESC, file.name ASC
```

**Cross-modality observation — three sub-modalities that should not be conflated:**

1. **Engraftment-based replacement** ([[hematopoietic-stem-cell-transplantation]], some [[ipsc-derived-cell-therapy]] applications like iPSC-RPE / iPSC-DA / iPSC-β) — the transplanted cells durably take up residence and provide function. Highest mechanistic confidence; highest cancer/teratoma surveillance burden.
2. **Paracrine / immunomodulatory** ([[mesenchymal-stem-cell-therapy]]) — transplanted cells largely don't engraft long-term; they secrete signaling molecules, modulate immune state, and are cleared. Easier safety profile; mechanism is contested ("Medicinal Signaling Cell" reframe per Caplan 2017).
3. **Cell-identity manipulation in situ** ([[in-vivo-partial-reprogramming-therapy]]) — no cells are transplanted; instead, host cells are temporarily reprogrammed via vector-delivered Yamanaka factors. Modality-conventional classification puts this under `stem-cell-therapy` because the *biological state change* is cell-identity reprogramming, but the delivery is gene-therapy-typed. The narrower [[aav-osk]] page covers the AAV-specific implementation.

The three sub-modalities target different hallmarks (replacement → [[stem-cell-exhaustion]]; paracrine → [[chronic-inflammation]] + [[altered-intercellular-communication]]; reprogramming → [[epigenetic-alterations]]).

---

## Blood product

Apheresis-based interventions: therapeutic plasma exchange, neutral blood exchange, young-plasma transfer, plasma-derived fractions. Conceptually anchored in [[heterochronic-parabiosis]] biology (R18 backlog); clinically anchored in [[plasma-exchange]] (verified) including the AMBAR mild-AD signal.

```dataview
TABLE WITHOUT ID file.link AS Intervention, mechanisms AS Mechanisms, target-hallmarks AS Hallmarks, human-evidence-level AS "Evidence", clinical-stage AS Stage, translation-gap AS "Gap"
FROM "interventions"
WHERE mode = "blood-product"
SORT clinical-stage DESC, file.name ASC
```

**Cross-modality observation:** blood-product is the smallest modality bucket (one page as of R23 close) but is operationally simple — TPE infrastructure is FDA-approved for ~100 indications already. The distinction from `stem-cell-therapy` is that no cells are transplanted; only acellular plasma fractions are exchanged, replaced, or diluted. Mechanism debate (young-factor introduction vs. old-factor removal vs. dilution-only) overlaps directly with the heterochronic-parabiosis literature on [[satellite-cells]] (Conboy 2005) and [[hematopoietic-stem-cells]] (multiple groups).

---

## Cross-modality decision tree

When the clinical target is a single hallmark, several modalities often compete. Some practical heuristics:

- **Telomere attrition** → [[aav-tert]] (gene-therapy) is the only durable approach; pharmacological telomerase activators (TA-65) have weak evidence; lifestyle/dietary do not directly affect telomere length. Cancer risk is the deciding question.
- **Stem-cell exhaustion** → [[hematopoietic-stem-cell-transplantation]] (replacement, hematopoietic-only), [[mesenchymal-stem-cell-therapy]] (paracrine, multi-tissue, weak engraftment), [[in-vivo-partial-reprogramming-therapy]] (in-situ, broad, preclinical), [[plasma-exchange]] (systemic factor manipulation). Choice depends on which compartment is depleted.
- **Deregulated nutrient-sensing** → multi-modal: [[caloric-restriction]] / [[intermittent-fasting]] / [[methionine-restriction]] (dietary), [[mtor-inhibitors]] / [[ampk-activators]] (pharmacological). Adherence vs. side-effect tradeoff.
- **Chronic inflammation** → multi-modal: [[mesenchymal-stem-cell-therapy]] (paracrine), [[plasma-exchange]] (acute reduction), [[senolytics]] (clearing inflammatory senescent cells), [[crispr-base-editing-pcsk9]] (cardiovascular-aging-relevant), [[exercise]] (lifestyle).
- **Epigenetic alterations** → [[in-vivo-partial-reprogramming-therapy]] / [[aav-osk]] are the only direct modulators; [[nad-precursors]] (sirtuin substrate) and [[caloric-restriction]] are upstream of histone-deacetylation flux but not direct readers/writers.

The full hallmark-by-modality matrix is the union of [[frameworks/interventions-by-hallmark]] (per-hallmark blocks) and the modality blocks above. Both query the same atomic pages; this MOC's contribution is the modality-axis grouping and the cross-modality-decision context.

---

## Watchdog blocks

### Watchdog 1 — Modality count (flag empty buckets)

```dataview
TABLE WITHOUT ID rows.file.link AS Interventions, length(rows) AS Count
FROM "interventions"
GROUP BY mode
SORT length(rows) DESC
```

> Every canonical `mode:` value should return ≥1 row. As of R26 close (2026-05-06, post `mode:` audit): `lifestyle` (3 — exercise, sleep, heat-exposure), `dietary` (5 — caloric-restriction, intermittent-fasting, time-restricted-eating, methionine-restriction, ketogenic-diet), `pharmacological` (7), `gene-therapy` (5), `stem-cell-therapy` (4), `blood-product` (1). If a bucket drops to zero, it should be flagged on the ROADMAP.

### Watchdog 2 — Missing modality

```dataview
LIST FROM "interventions"
WHERE !mode
```

> Every `type: intervention` page must have a `mode:` field. Should return empty.

### Watchdog 3 — Stale clinical-stage

```dataview
TABLE WITHOUT ID file.link AS Intervention, mode AS Modality, clinical-stage AS Stage, verified-date AS "Verified"
FROM "interventions"
WHERE contains(["phase-1","phase-2","phase-3","phase-4"], string(clinical-stage))
  AND (date(verified-date) < date(today) - dur(180 days) OR !verified-date)
SORT verified-date ASC
```

> Clinical-stage entries decay every 6 months per `sops/integrating-clinical-trials.md`. Re-run ClinicalTrials.gov v2 query for any row returning here.

---

## Cross-references

- [[frameworks/interventions-by-hallmark]] — sister MOC; axis = hallmark.
- [[frameworks/intervention-classes]] — sister MOC; axis = pharmacological mechanism class.
- [[hallmarks-of-aging]] — the upstream framework that all interventions target.
- [[sens-damage-categories]] — alternative damage-category framework.

---

## Limitations and gaps

- The `dietary` vs. `lifestyle` distinction was reconciled in R26 (2026-05-06): [[caloric-restriction]] flipped from `mode: lifestyle` to `mode: dietary`. R23c outputs (intermittent-fasting, TRE, methionine-restriction, ketogenic-diet) were already correct. Pages physically located in `interventions/lifestyle/` may carry either `lifestyle` or `dietary` mode tags — the folder name is not a constraint on the mode value (lifestyle/ is the catchall directory for non-pharmacological non-cellular interventions per CLAUDE.md). Lint pass should verify mode/folder agreement is not enforced.
- Some modalities are under-represented: `blood-product` has a single anchor page; `gene-therapy` covers viral-vector AAV well but lacks dedicated lentiviral / mRNA-LNP-monotherapy pages. R24+ should consider pages for [[aav-foxn1]] (thymic regeneration), [[crispr-lpa]] (Lp(a) editing), and [[mrna-lnp-vaccines-aging]] (analogous to COVID-vaccine immunosenescence reversal trials).
- The decision tree above is based on current 2026-05-06 evidence; should be re-derived if any major cross-modality RCT (e.g., TAME results, PEARL-2, Verve heart-3) reports.
- Interventions that aren't yet seeded on the wiki but are clinically prominent: [[gdf15-blockade]] (anti-cachexia anti-aging), [[bimagrumab]] (sarcopenia, FDA fast-tracked 2024), [[rejuventate-thymic-aging]] (Fahy TRIIM-X). These should appear in the appropriate modality block when seeded.
