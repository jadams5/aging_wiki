---
type: experiment
status: proposed
status-changed: 2026-05-20
proposed-date: 2026-05-20
question: "Can a senescent-cell-selective surface marker (identified from single-cell aging atlases) be converted into a clinically deployable PET imaging tracer for in-vivo quantification of senescent-cell burden across tissues — enabling biomarker-stratified senolytic trial design?"
hypothesis: "At least one surface marker enriched on senescent cells across multiple tissues in the Tabula Muris Senis / CellxGene aging atlases (candidate shortlist: DPP4, NOTCH3, B2M, GPNMB, CD9) can be targeted with a radiolabeled antibody / affibody / peptide ligand to produce a PET tracer whose signal in aged vs young mouse tissue correlates ≥ r=0.6 with ex-vivo p16+ / SA-β-gal+ cell density."
resolves-edges:
  - "[[cellular-senescence]] → [[chronic-inflammation]] (biomarker-stratified senolytic trial enablement)"
resolves-nodes:
  - "[[hallmarks/cellular-senescence]]"
adds-nodes: []
scale: large-clinic
duration-estimate: "3–5 years (Phase 0/1)"
cost-estimate: "$2–8M (multi-year; radiochem facility, antibody/affibody development, GMP-grade prep for first-in-human, IRB + IND)"
resources-required: [single-cell-atlas-access, antibody-or-affibody-engineering, radiochemistry-facility-with-cu-64-or-zr-89-or-f-18, small-animal-pet-imaging, gmp-prep-for-clinical-translation, ind-regulatory-pathway]
preregistered: false
preregistration-doi: null
published-as: null
related-experiments:
  - "[[experiments/midas-cell-type-stratification]]"
related-pages:
  - "[[frameworks/causal-graph-data]]"
  - "[[hallmarks/cellular-senescence]]"
  - "[[processes/sasp]]"
  - "[[interventions/pharmacological/senolytics]]"
last-updated: 2026-05-20
---

# In-vivo senescent-cell PET tracer development

## Background

Per [[hallmarks/cellular-senescence]] and the wiki's interventions-by-hallmark matrix, cellular senescence is the most clinically-advanced Tier-2 hallmark — but senolytic trials are bottlenecked by the absence of an in-vivo senescent-cell burden biomarker.

**The Farr 2024 quercetin Phase 2 trial** missed primary endpoint in unstratified n=60 but the high-T-cell-p16 tertile responded (cited on [[hallmarks/cellular-senescence]]). Biomarker-stratified enrollment is now the rate-limiting step for senolytic clinical development. The matrix-level blocker is: every senolytic trial currently has to use indirect proxies (SASP cytokines, ex-vivo p16 in accessible tissues like adipose or PBMC) rather than a direct in-vivo measure of senescent-cell density in target tissue.

**The UNITY pivot** is a parallel signal: UBX0101 failed in osteoarthritis (UNITY) despite proof-of-concept in mouse cartilage. Whether this reflects (a) wrong senolytic mechanism, (b) wrong dose/exposure, or (c) wrong senescent-cell subtype targeted is impossible to disentangle without in-vivo senescent-cell-burden imaging. UBX1325 (BCL-xL-selective, intravitreal) succeeded in BEHOLD DME — supports the "cell-type-matched" framing but doesn't generalize tissue-by-tissue without a screening tool.

**The matrix implication (per [[frameworks/causal-graph-data]] § Edge-blocker tracker):** the [[cellular-senescence]] → [[chronic-inflammation]] edge is `high`-tractability at the senolytic-drug layer (D+Q, UBX1325 succeeding clinically) but the *biomarker-stratified-trial* enabler is null. Resolving the biomarker gap is the highest-leverage unblock for the entire senolytic clinical program.

## Methods

**Phase 0 — Target discovery (computational + bench validation, year 1):**

- Mine single-cell aging atlases for surface markers enriched on senescent cells across tissues:
  - Tabula Muris Senis (10x + Smart-seq2; ~24 mouse tissues × age strata)
  - CellxGene Census (aggregated multi-study scRNA)
  - Aging Atlas (CNCB)
- Rank candidates by:
  - Surface-protein status (exposed extracellular epitope required for radioligand binding)
  - Fold-enrichment in p16-high / SASP-high cell populations
  - Cross-tissue conservation (markers specific to one tissue have limited clinical utility)
  - Healthy-cell baseline expression (low background = better signal-to-noise)
  - Already-published as senescence marker in any context (deprioritize purely-novel markers without validation)
- Shortlist (preliminary, from published atlas mining): DPP4, NOTCH3, B2M (β2-microglobulin), GPNMB, CD9, FAP, uPAR (Amor 2020 CAR-T precedent on [[hallmarks/cellular-senescence]]).
- Bench validation of top 3 candidates: IHC + flow cytometry on aged-mouse multi-tissue panel; quantitative comparison vs gold-standard SA-β-gal + p16-mRNA in same sections.

**Phase 1 — Ligand engineering (year 1–2):**

- For each validated target:
  - Antibody route: hybridoma or scFv engineering against surface epitope.
  - Affibody / DARPin route: smaller scaffold (~6–14 kDa); better tissue penetration than IgG; preferred for PET pharmacokinetics.
  - Peptide route: phage-display-derived high-affinity binders; smallest scaffold, fastest pharmacokinetics, lowest cost; preferred if affinity adequate.
- Cross-validation: affinity (KD by SPR or BLI), specificity (counter-screen against young-cell surface).

**Phase 2 — Radiochemistry + small-animal PET (year 2–3):**

- Couple top ligand to chelator (NOTA, DOTA, DFO depending on radionuclide):
  - ⁶⁴Cu (t½ 12.7 h) — first-pass screening
  - ⁸⁹Zr (t½ 78 h) — IgG-scale biodistribution
  - ¹⁸F — clinical-translation candidate
- In-vivo PET in young vs aged mouse cohorts (n=10 per arm, m+f):
  - Whole-body biodistribution time-course
  - Comparison to ex-vivo gold standard: euthanize at imaging endpoint, harvest multi-tissue panel, p16-mRNA + SA-β-gal + IHC.
  - Primary: correlation of PET signal vs ex-vivo senescent-cell density per tissue (target r ≥ 0.6).
- Validation in senolytic-responsive mouse model: pre/post D+Q dosing; expect PET signal reduction matching ex-vivo cell-clearance.

**Phase 3 — Translational readiness (year 3–5):**

- GMP-grade reagent preparation.
- Toxicology + dosimetry per FDA microdose-exploratory-IND pathway.
- First-in-human imaging study (Phase 0 microdose, n=12–24 healthy young vs aged volunteers): demonstrates tracer human pharmacokinetics + senescent-cell-burden signal correlates with age.

## Expected outcomes and interpretation

| Result | Interpretation |
|---|---|
| Validated tracer with r ≥ 0.6 PET vs ex-vivo correlation, demonstrated senolytic responsiveness | **Field-changing biomarker.** Unlocks biomarker-stratified senolytic Phase 2 trial design; enables drug discovery on tissue-specific senolytics; supports senescent-cell-density as a regulatory-grade endpoint. |
| Single-tissue tracer (works in liver/adipose but not brain or vasculature) | Useful but bounded. Multi-marker imaging strategy needed for whole-body coverage. |
| No single marker captures multi-tissue burden | **Confirms cell-type heterogeneity hypothesis on [[hallmarks/cellular-senescence]].** Pivots strategy toward multi-marker imaging (e.g., dual-radionuclide); refines senescent-cell-subtype classification. |
| Tracer signal correlates with age but not with senolytic response | Tracer reflects "aged-cell" rather than "senescent-cell" — useful but for different question. Re-validate target. |

## Why this is `large-clinic` scale and listed anyway

This is the only proposed experiment in this initial batch that is NOT `small-lab`. Listed because:
1. The matrix surfaces it as the single highest-leverage unblock for the entire [[interventions/pharmacological/senolytics]] clinical program.
2. The Phase 0 (atlas mining + Phase 1 bench validation of top 3 markers) is small-lab scale and could be done independently as a preparatory step before Phase 2+ scaling.
3. Acknowledgment that the matrix-as-tracker should not only show small-lab experiments; documenting the larger blocker keeps the leverage view honest.

**For a wet-lab solo investigator,** the tractable subset is Phase 0 (atlas mining → top-3 marker selection → IHC/flow validation on aged mouse tissue). The radiochemistry, GMP, and IND phases are necessarily collaborative or industry-scaled.

## Decision points

- **Marker prioritization criteria:** above shortlist is a starting point; the actual ranking depends on the atlas analysis. Pre-register the ranking criteria before mining to avoid post-hoc selection.
- **Ligand format:** IgG vs affibody vs peptide is a pharmacokinetics tradeoff. IgG has best affinity / specificity but slow tissue clearance (poor PET signal-to-noise). Affibody / peptide is preferred for PET but requires more engineering.
- **First-in-human pathway:** microdose-exploratory-IND vs full Phase 1. Microdose is faster and cheaper but limits dose escalation; full Phase 1 is the standard.

## Open questions

- Is the Amor 2020 uPAR CAR-T target also suitable for PET imaging? uPAR is a senescent-cell surface marker and a validated CAR-T target — the imaging-PET version is a natural follow-on but not published.
- Should we additionally pursue **non-radiolabel imaging** (MRI contrast agent based on iron-loaded nanoparticle bound to senescent-cell ligand) as a parallel modality? Avoids radiation dose; more amenable to longitudinal imaging. Lower spatial resolution / sensitivity.
- **Solo-investigator entry-point:** Phase 0 alone is a publishable contribution if the atlas-mining + IHC validation produces a ranked surface-marker shortlist with comparative data. Scope as a year-1 standalone deliverable independent of Phase 2+ ambitions.

## Conversation lineage

- **2026-05-20** drafted from the matrix-blocker brainstorming session. Origin: user's wet-lab framing → the survey identified that biomarker-stratified senolytic trials are the rate-limiting clinical step (Farr 2024 quercetin trial precedent), and no in-vivo senescent-cell PET tracer exists. Acknowledged this is `large-clinic` scale; Phase 0 is the small-lab-tractable entry point.
