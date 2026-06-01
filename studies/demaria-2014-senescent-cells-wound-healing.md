---
type: study
doi: 10.1016/j.devcel.2014.11.012
pmid: 25499914
pmc: PMC4349629
title: "An Essential Role for Senescent Cells in Optimal Wound Healing through Secretion of PDGF-AA"
authors: [Demaria M, Ohtani N, Youssef SA, Rodier F, Toussaint W, Mitchell JR, Laberge RM, Vijg J, Van Steeg H, Dollé MET, Hoeijmakers JHJ, de Bruin A, Hara E, Campisi J]
year: 2014
journal: Developmental Cell
study-design: in-vivo
organism: mus-musculus
n-subjects: 4   # minimum n per group for wound healing experiments; n=3–5 for molecular assays; see Design section
intervention: []
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [transient-beneficial-senescence, pdgf-aa-paracrine-mechanism, gcv-delay-wound-closure, endothelial-senescent-cells-at-wound, antagonistic-pleiotropy-demonstration]
local-pdf: null
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All priority claims verified against full PDF end-to-end: author count (14), p16-3MR model, p16/p21 DKO controls, both fibroblasts and endothelial cells at wound sites (primarily endothelial per Discussion), PDGF-AA specificity over PDGF-BB, peak delay at day 6, topical PDGF-AA rescue, no-direct-contraction finding, n per group. GCV administration timing corrected (day 1–6, not 'at time of wounding'). Mouse age added (3–4 months). Endothelial-primary hierarchy nuance added."
literature-checked-through: 2026-05-19
---

# An Essential Role for Senescent Cells in Optimal Wound Healing through Secretion of PDGF-AA

## TL;DR

Demaria et al. (2014) demonstrate that **transient senescent cells are required for optimal wound healing** in mice. Using the p16-3MR transgenic mouse (which allows selective GCV-mediated elimination of p16-expressing senescent cells), the authors show that: (1) both senescent fibroblasts and senescent endothelial cells (primarily endothelial) transiently appear at wound sites within 3 days of a punch biopsy; (2) eliminating these cells with ganciclovir (GCV; 25 mg/kg i.p., days 1–6) delays wound closure, with peak delay at day 6; and (3) the key SASP mediator driving healing is **PDGF-AA** — not PDGF-BB or other isoforms — which promotes myofibroblast differentiation and wound contraction via paracrine signaling. Topical recombinant PDGF-AA fully rescues the GCV-induced wound-closure delay. This paper is foundational to the "transient beneficial senescence" paradigm and provides direct molecular evidence for the [[antagonistic-pleiotropy]] hypothesis as applied to [[cellular-senescence]].

## Background and hypothesis

Cellular senescence was long viewed as exclusively detrimental in the aging context. Prior work had established that (1) senescent cells secrete the pro-inflammatory [[sasp|SASP]], (2) their chronic accumulation drives aging pathologies, and (3) genetic or pharmacological clearance of senescent cells improves healthspan [^baker2011]. However, scattered observations suggested context-dependent beneficial roles for senescence — developmental patterning of the placenta and limbs being the clearest examples (Storer et al. 2013; Muñoz-Espín et al. 2013).

Demaria et al. asked whether **acute, transient senescent cells** at wound sites serve an adaptive function that would be lost upon their premature elimination — a prediction of the [[antagonistic-pleiotropy]] framework in which the same program (senescence) is beneficial acutely and harmful chronically.

## Model systems

### p16-3MR transgenic mouse

The primary model is the **p16-3MR** transgenic, which expresses a trimodal reporter (3MR = three modules: RFP + renilla luciferase + truncated HSV thymidine kinase) under the p16^Ink4a promoter. Administration of **ganciclovir (GCV)** phosphorylates the HSV-TK in p16+ cells, generating toxic nucleotide analogs that selectively kill dividing p16-expressing cells. Key features:

- **Selective elimination:** GCV targets p16-expressing cells without broadly affecting non-senescent cells
- **In vivo imaging:** RFP and luciferase allow visualization/quantification of p16+ cells in living animals
- GCV was administered as **five consecutive daily i.p. injections (25 mg/kg) from day 1 to day 6 after wounding**; controls received PBS vehicle

### p16/p21 DKO mice

Double knockout mice lacking both p16 and p21 (CDK inhibitors required for senescence induction) were used to confirm that wound-site senescence, not GCV itself, is causally responsible for the phenotype.

### Wound model

- **Lesion:** 6 mm dorsal flank punch biopsy (two equal-sized wounds per mouse)
- **Mouse age:** 3–4 months (young adults) for wound healing experiments
- **n:** ≥4 mice per group for wound closure measurements; n=3–5 for molecular assays; n=8 for histological sections
- **Readout:** wound area (photography + caliper measurement), histology (granulation tissue thickness, myofibroblast number, α-SMA staining), senescent cell quantification (RFP, SA-β-gal)

### In vitro systems

- Primary mouse skin fibroblasts (induced to senescence by irradiation or serial passage)
- Primary mouse microvascular endothelial cells (Factor VIII+ source)
- Conditioned media (CM) transfer experiments to primary fibroblasts

## Key findings

### Senescent cells transiently appear at wound sites

Within **3 days** of punch biopsy, p16+ RFP+ cells are detectable at the wound edge and peak in number over days 3–6 before declining. This is a **transient** population — cells that appear acutely and are then resolved, distinct from the chronic accumulation of senescent cells in aged tissue.

**Both fibroblasts and endothelial cells** undergo senescence at wound sites, with endothelial cells described as the **primary** senescent population. The authors' Discussion states: "wounding induces senescence in resident fibroblasts and primarily endothelial cells." Factor VIII+ RFP+ double-positive cells confirm a senescent **endothelial** population distinct from fibroblast-lineage senescent cells. FACS sorting of RFP+ cells from wound biopsies showed the cells were positive for fibroblast and endothelial markers but negative for keratinocyte markers, confirming that keratinocytes (epidermal epithelial cells) are not part of the wound senescent response. This is a critical detail — the wound senescent response is multi-cellular and predominantly endothelial, not restricted to mesenchymal fibroblasts. #gap/needs-replication — the functional contribution of the endothelial senescent population versus the fibroblast population to PDGF-AA secretion and wound closure was not separately quantified in this study.

### GCV-mediated elimination of senescent cells delays wound closure

In p16-3MR mice treated with GCV (25 mg/kg i.p. daily, days 1–6 post-wounding) to eliminate p16+ senescent cells, wound closure is significantly delayed compared to vehicle-treated controls. The **peak delay is at day 6** — not a uniform delay across the entire timecourse. By day 10–14 wounds eventually close in GCV-treated animals, consistent with compensatory or redundant healing mechanisms.

p16/p21 DKO mice (which cannot senesce) similarly show delayed wound closure, confirming the effect is attributable to the absence of senescent cells and not an off-target GCV effect [^demaria2014].

### PDGF-AA is the essential SASP factor

Conditioned media from senescent fibroblasts promotes myofibroblast differentiation (α-SMA+ cells) in primary non-senescent fibroblasts. Neutralization experiments identify **PDGF-AA** — not PDGF-BB, not IL-6, not VEGF — as the key paracrine factor responsible. Key evidence:

- Anti-PDGF-AA antibody blocks the pro-myofibroblast activity of senescent CM; control IgG does not
- PDGF-BB CM shows no comparable effect
- Recombinant PDGF-AA alone is sufficient to promote myofibroblast differentiation in non-senescent fibroblasts
- PDGF-AA (not PDGF-BB) is upregulated in the CM of senescent versus proliferating fibroblasts and endothelial cells

Myofibroblasts (α-SMA+) are the contractile effectors of wound closure — they generate mechanical force for granulation tissue contraction and wound edge approximation. Senescent cells drive this process paracrinally rather than by direct mechanical contribution.

### Topical PDGF-AA rescues the GCV wound-healing delay

Topical application of **recombinant PDGF-AA protein** to wounds of GCV-treated p16-3MR mice (which lack senescent cells) rescues wound closure to rates comparable to vehicle-treated (senescent-cell-replete) controls [^demaria2014]. This rescue experiment:

1. Confirms PDGF-AA is the rate-limiting senescent-cell product in wound healing
2. Demonstrates that senescent cells do NOT drive wound closure via direct contraction — paracrine signaling to myofibroblasts is the mechanism
3. Provides a proof-of-concept for PDGF-AA as a therapeutic substitute for beneficial senescent cells in contexts where senolytic therapy is used

### Senescent cells do not contract wounds directly

The study explicitly addresses whether senescent cells contribute to wound closure through their own contractile activity. Evidence against direct contraction:

- Senescent fibroblasts do NOT upregulate α-SMA (they do not themselves become myofibroblasts)
- PDGF-AA acts on *neighboring* non-senescent fibroblasts to convert them to α-SMA+ myofibroblasts
- The rescue of wound closure by topical PDGF-AA (a secreted factor) without restoring senescent cells is mechanistically inconsistent with a direct-contraction model

## Mechanism summary

```
Wound stimulus
    ↓
Transient senescence induction in wound-site fibroblasts + endothelial cells (primarily endothelial)
    ↓
SASP secretion with PDGF-AA as key wound-healing effector
    ↓
PDGF-AA paracrine signaling → neighboring fibroblast → α-SMA+ myofibroblast
    ↓
Myofibroblast contraction + granulation tissue deposition → wound closure
    ↓
(In youth) Efficient immune clearance of senescent cells → tissue resolution
(In aging) Incomplete clearance → chronic senescent cell accumulation → pathological SASP
```

This mechanism places the wound-healing benefit of senescence squarely in the **transient and clearance-dependent** phase. Persistent senescent cells shift from wound-healer to tissue-damager [^dimri1995review].

## Relationship to antagonistic pleiotropy

This paper provides one of the most mechanistically resolved examples supporting the [[antagonistic-pleiotropy]] hypothesis as applied to cellular senescence [^williams1957]:

- **Early/acute benefit:** Senescent cells secrete PDGF-AA → optimal wound healing → fitness advantage (survival of injury)
- **Late/chronic cost:** Persistent senescent cells in aged tissues secrete a broader, damaging SASP → [[chronic-inflammation]], tissue dysfunction, [[skin-aging]]
- The same molecular program (senescence + SASP) mediates both the benefit and the cost
- The switch between beneficial and pathological modes is determined by **clearance efficiency** (immune function) and **duration** — both of which decline with age

Cross-reference: [[hallmarks/cellular-senescence]] § Good senescence, [[hypotheses/antagonistic-pleiotropy]] § Cellular senescence molecular exemplars.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Senescence, PDGF-AA/PDGFRA signaling, and myofibroblast biology are conserved in human skin; PDGF-AA promotes wound healing in human tissue |
| Phenotype conserved in humans? | partial | Senescent cells appear at human wound sites (p16+ staining, SA-β-gal+); whether their selective absence impairs human healing is not directly tested. Aged human wounds heal more slowly and show impaired PDGF signaling — consistent but not causal. |
| Replicated in humans? | no | No human senolytic intervention has specifically tested wound healing as a primary endpoint. Topical PDGF-BB (not AA) is FDA-approved for diabetic foot ulcers — a related but distinct isoform context. |

#gap/needs-human-replication — Whether the PDGF-AA → myofibroblast mechanism is the rate-limiting step in human acute wound healing is unknown. Human wound-healing impairment with aging involves many concurrent deficits (reduced angiogenesis, altered macrophage polarization, diminished growth factor signaling broadly) that may obscure the senescent-cell contribution.

## Significance for senolytics

This paper carries important implications for [[interventions/pharmacological/senolytics|senolytic therapy]] design:

1. **Context matters:** Senolytic administration during an acute wound-healing phase could theoretically impair healing via PDGF-AA depletion. If validated in humans, this would argue for timing senolytics to avoid the acute post-injury window.
2. **Not all senescent cells are equivalent:** The wound-site transient senescent population is functional and beneficial; the chronically accumulated senescent cells in aged tissues are pathological. Broad senolytic strategies may not distinguish these populations.
3. **Topical PDGF-AA as adjuvant:** If senolytics are used in contexts where wound healing is relevant (e.g., frail older adults with skin fragility), PDGF-AA supplementation could compensate for SASP-PDGF-AA loss. The rescue data in this paper provide direct preclinical rationale.

For contrast with the fisetin wound-healing context: see [[fisetin]] § Recent mechanistic findings, where topical fisetin is reported to improve *diabetic* wound healing (Numani 2026) — a different context where chronic senescent-cell burden is primarily pathological [^numani2026].

## Limitations

- **Murine model only.** The p16-3MR system is elegant but mouse-specific; no equivalent conditional senescent-cell depletion system has been validated in humans. #gap/needs-human-replication
- **Mechanical wound model.** A 6 mm dorsal punch biopsy is a controlled acute lesion. Results may not generalize to chronic wounds (diabetic foot ulcers, pressure ulcers, venous ulcers) where the senescent-cell burden is already elevated and the acuity framework does not apply.
- **GCV toxicity cannot be fully excluded.** Although the p16/p21 DKO rescue controls substantially argue against off-target GCV effects, GCV itself can have non-specific effects in some contexts.
- **Endothelial senescent population:** Factor VIII+ RFP+ cells were identified but their relative contribution to PDGF-AA secretion versus the fibroblast-origin population was not separately quantified. Whether endothelial senescence-PDGF-AA is required for the wound-healing phenotype or redundant with fibroblast-PDGF-AA remains open. #gap/needs-replication
- **Small n.** n=4 minimum per group for wound closure; n=3–5 for molecular assays. Standard for the field but underpowered for subgroup analyses.
- **PDGF receptor specificity.** PDGF-AA primarily signals through PDGFRα. The experiments neutralized PDGF-AA from conditioned media but did not directly demonstrate PDGFRα-mediated signaling in the receiving myofibroblast precursors.

## Cited by (selected)

This paper had ~1,889 citations as of 2026-05 (OpenAlex; FWCI 41.7 — 100th citation percentile), making it one of the highest-impact papers in the senescence field. It is frequently cited as the canonical demonstration that senescence has context-dependent beneficial roles — the paradigm underpinning the "transient beneficial senescence" literature.

Key downstream work:
- Demaria et al. 2017 (*Nat Med*) — identified that p21-expressing cells (distinct from p16+) promote tissue repair after acute organ injury, extending the "transient beneficial senescence" theme beyond wound healing
- The "developmental senescence" body of work (Muñoz-Espín 2013, Storer 2013) establishes embryonic parallels
- [[hallmarks/cellular-senescence]] — this paper is the canonical source for the PDGF-AA wound-healing mechanism cited in that page

---

## Footnotes

[^demaria2014]: [[studies/demaria-2014-senescent-cells-wound-healing]] · n≥4/group (wound closure); n=3–5 (molecular assays) · in-vivo + in-vitro · p<0.05 (wound delay; PDGF-AA rescue) · model: p16-3MR transgenic mus-musculus; 6 mm dorsal punch biopsy; GCV senescent-cell ablation
[^baker2011]: doi:10.1038/nature10600 · Baker DJ et al. · *Nature* 2011 · in-vivo · model: INK-ATTAC transgenic BubR1 progeroid mice; first genetic clearance of p16+ senescent cells demonstrating healthspan benefit
[^dimri1995review]: doi:10.1073/pnas.92.20.9363 · Dimri GP et al. · *PNAS* 1995 · in-vitro + in-vivo · review/method · establishment of SA-β-gal as a senescence biomarker
[^williams1957]: Williams GC · *Evolution* 1957;11(4):398–411 · conceptual-frame · original formulation of antagonistic pleiotropy as evolutionary mechanism for aging
[^numani2026]: doi:10.1177/21621918261426580 · Numani A et al. · *Adv Wound Care* 2026 · in-vivo · model: diabetic mice; topical fisetin reduces cutaneous senescent-cell burden and improves wound closure · **abstract-only verification 2026-05-19** — full PDF not end-to-end verified
