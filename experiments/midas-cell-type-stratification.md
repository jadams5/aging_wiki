---
type: experiment
status: proposed
status-changed: 2026-05-20
proposed-date: 2026-05-20
question: "Does mitochondrial dysfunction induce senescence (MiDAS) consistently across major aging-relevant primary human cell types, or is the effect cell-type-restricted such that the mitochondrial-dysfunction → cellular-senescence edge has a context-dependent direction?"
hypothesis: "MiDAS is endothelial-dominant: rotenone/antimycin-A insult induces p16/p21/SASP in HUVEC and HAEC within 14–21 days, but primary cardiomyocytes and dermal fibroblasts show attenuated SASP and a qualitatively different non-canonical senescent phenotype (GDF15-enriched, IL-1α-low), supporting the Anderson-2019-style senescence → mitochondrial-dysfunction direction in those cell types."
resolves-edges: ["[[mitochondrial-dysfunction]] → [[cellular-senescence]]"]
resolves-nodes: []
adds-nodes: []
scale: small-lab
duration-estimate: "6–9 months"
cost-estimate: "$25–45k consumables (primary cells, Luminex panel, qPCR, optional scRNA-seq subset)"
resources-required: [primary-cell-culture, qPCR, flow-cytometry, luminex-or-multiplex-elisa, optional-scrna-seq]
preregistered: false
preregistration-doi: null
published-as: null
related-experiments: []
related-pages:
  - "[[frameworks/causal-graph-data]]"
  - "[[hallmarks/mitochondrial-dysfunction]]"
  - "[[hallmarks/cellular-senescence]]"
  - "[[processes/sasp]]"
last-updated: 2026-05-20
---

# MiDAS cell-type stratification

## Background

The mitochondrial-dysfunction ↔ cellular-senescence edge is the only **`disputed`**-strength edge in [[frameworks/causal-graph-data]]. Two bodies of evidence point opposite directions:

- **Mito → senescence (MiDAS):** Wiley et al. (HUVEC; rotenone/antimycin without DNA damage induces a senescent phenotype via ROS → mTORC1 → NAD+/NADH imbalance; produces a distinct IL-1α-enriched SASP). Cited on [[hallmarks/mitochondrial-dysfunction]] (verified).
- **Senescence → mito:** Anderson 2019 cardiomyocytes — senescent cardiomyocytes accumulate dysfunctional mitochondria and secrete GDF15-enriched non-canonical SASP, suggesting senescence drives secondary mito dysfunction rather than the reverse. Cited on [[hallmarks/cellular-senescence]] (verified).

**Why this edge matters for intervention sequencing:** If MiDAS dominates broadly, mitophagy inducers ([[urolithin-a]], exercise, [[mitochondrial-uncouplers]]) and other mitochondrial-quality interventions are *upstream* of senescent-cell accumulation — they prevent new senescence. If the reverse dominates, those same interventions are *cleanup* — they address a phenotype downstream of cellular-senescence and won't reduce senescent-cell burden. The dominant direction may vary by cell type (endothelium vs cardiomyocyte vs fibroblast), but no published experiment has stratified the question this way at appropriate primary-cell granularity.

## Methods

**Cell types (parallel cultures):**

- Primary HUVEC (Lonza) — endothelial; the classic MiDAS context (Wiley)
- Primary HAEC (Lonza) — arterial endothelial; tests Wiley generalization
- iPSC-derived cardiomyocytes (commercial, e.g., FUJIFILM CDI iCell or in-house if available) — tests Anderson direction
- Primary adult dermal fibroblasts (multiple donors, age-matched 60+) — fibroblast biology, mechanically permissive of senescence

**Insults (three arms × four cell types):**

- Rotenone 100 nM (Complex I inhibition; matches Wiley protocol)
- Antimycin A 1 μM (Complex III inhibition; orthogonal mitochondrial stress)
- CCCP 5 μM (uncoupler; tests whether membrane-potential collapse alone is sufficient)
- Vehicle (DMSO 0.1%)

**Timepoints:** day 7, day 14, day 21 (matching the MiDAS literature; senescence requires ~10–14 days to establish in most contexts).

**Endpoints:**

| Endpoint | Method | Purpose |
|---|---|---|
| SA-β-gal | X-gal staining + quantitative imaging | Canonical senescence marker |
| p16/p21/p53 mRNA + protein | qPCR + Western | Senescence program induction |
| SASP panel | Luminex 12-plex (IL-6, IL-8, IL-1α, IL-1β, MMP-3, MMP-9, MCP-1, GROα, TNFα, GDF15, TIMP-1, PAI-1) | Distinguishes canonical (IL-6/8/MCP-1) vs MiDAS (IL-1α-enriched) vs Anderson (GDF15-enriched) SASP signatures |
| Lipofuscin autofluorescence | Flow cytometry (488 ex / 585 em) | Cumulative mitochondrial-lysosomal axis dysfunction |
| Mitochondrial membrane potential | TMRM, flow | Insult-engagement readout |
| BrdU incorporation | Flow | Senescence-associated proliferative arrest |
| scRNA-seq (single timepoint, day 14 subset) | 10x Genomics, 5k cells per condition | Resolves population heterogeneity — does the SASP shift reflect cell-state heterogeneity or genuine cell-type-specific programs? |

**Controls:**

- Replicative-senescence positive control (late-passage HUVEC) — establishes canonical-SASP reference
- DNA-damage senescence positive control (2 Gy γ-irradiation) — orthogonal upstream
- IMR-90 fibroblast (extensively-characterized senescence model) — sanity check

**Donor n:** 3 biological replicates per cell type, 3 technical replicates per condition. Powered to detect 30% SASP-marker fold-change vs vehicle at α=0.05, β=0.20 in pilot.

## Expected outcomes and interpretation

| Result pattern | Edge interpretation | Intervention implication |
|---|---|---|
| All 4 cell types: p16/SASP induction | MiDAS generalizes; mito-dysfunction → senescence broadly | Mitophagy inducers are upstream interventions; should reduce senescent-cell burden |
| Only HUVEC + HAEC: induction; cardiomyocyte + fibroblast: no induction | MiDAS is endothelial-restricted | Mitophagy inducers benefit vascular aging; cardiomyocyte/skin senescence requires upstream DNA-damage / telomere-attrition / mTOR routes |
| Mixed (e.g., HUVEC + fibroblast: yes; cardiomyocyte: no) | Cell-type-specific; depends on baseline mitochondrial reserve + proliferative capacity | Stratify intervention by tissue context |
| SASP signature shifts qualitatively (IL-1α vs GDF15) by cell type | Cell-type-specific SASP programs exist | Senolytic efficacy will vary by cell type; informs senolytic-system design (see [[hallmarks/cellular-senescence]] cell-type-matching gap) |

## Why this is the smallest-cost / fastest-feedback resolving experiment in the matrix

Per [[frameworks/causal-graph-data]] § Edge-blocker tracker (R45 layer): this is the only edge resolvable at `small-lab` scale with off-the-shelf primary cells and standard senescence-biology tooling. Most other edges in the matrix sit behind clinical-trial or gene-therapy infrastructure. The MiDAS-direction question has been outstanding since ~2016 and no published study has done the cell-type-stratified comparison at this granularity.

## Decision points

- **Choice of cardiomyocyte model:** iPSC-derived cardiomyocytes have known maturation issues (fetal-like phenotype). If they fail to senesce under any insult including DNA-damage positive control, switch to primary aged-rodent cardiomyocytes as backup.
- **SASP panel composition:** 12-plex Luminex is the practical maximum; full SASP atlas (Basisty 2020 multi-omic) would require proteomic facility access and is deferred to a follow-on if Phase 1 results merit.
- **scRNA-seq scope:** included as an optional subset on day 14 only; full time-course scRNA-seq triples consumables cost and is gated on Phase 1 results.

## Open questions

- Should we add a metabolic-flux endpoint (Seahorse XF) to confirm insult engagement? Adds equipment requirement but tightens mechanism.
- Should we include an early-passage HUVEC vehicle arm to disentangle proliferative-exhaustion artifact from genuine MiDAS?
- What's the right donor-age window for the fibroblast and HAEC arms? Donor age covaries with senescent-cell burden at baseline; using 60+ donors is more aging-relevant but introduces baseline heterogeneity.

## Conversation lineage

- **2026-05-20** drafted from the matrix-blocker brainstorming session. Origin: user's question about wet-lab-scale leverage points given their wet-lab training. The disputed mito↔senescence edge surfaced as the only matrix edge resolvable at small-lab scale with off-the-shelf reagents.
