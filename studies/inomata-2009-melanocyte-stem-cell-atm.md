---
type: study
doi: 10.1016/j.cell.2009.03.037
pmid: 19524511
title: "Genotoxic stress abrogates renewal of melanocyte stem cells by triggering their differentiation"
authors: [Inomata K, Aoto T, Binh NT, Okamoto N, Tanimura S, Wakayama T, Iseki S, Hara E, Masunaga T, Shimizu H, Nishimura EK]
year: 2009
journal: Cell
volume: 137
issue: 6
pages: 1088-1099
study-design: in-vivo
organism: mus-musculus
n-subjects: null   # multiple cohorts; precise per-group n not reported in archive abstract — verify against PDF
intervention: []
hallmarks-tested: ["[[genomic-instability]]", "[[stem-cell-exhaustion]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings:
  - genotoxic-stress-triggers-msc-ectopic-differentiation
  - atm-acts-as-stemness-checkpoint
  - atm-null-sensitizes-mscs-to-lower-ir-doses
  - multiple-genotoxins-converge-on-ddr-differentiation-axis
  - aged-wt-mice-phenocopy-ir-induced-depletion
  - differentiation-not-apoptosis-or-senescence
local-pdf: null
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All priority claims verified against full PDF: ATM direction (protective/3 Gy KO vs 5 Gy WT), genotoxin panel (busulfan/MMC/H₂O₂, no hydroxyurea), differentiation-not-apoptosis conclusion, MITF mechanism, aged-WT phenocopy, author list (11 confirmed). Per-group n not reported in main text — n-subjects: null retained. K14-SCF model role corrected: Dct-lacZ transgenic mice are the primary experimental model; K14-SCF not the dominant system. Chemical genotoxin route corrected to subcutaneous injection. Supersession check performed (R25); literature-checked-through set 2026-05-19."
literature-checked-through: 2026-05-19
---

# Genotoxic stress abrogates renewal of melanocyte stem cells by triggering their differentiation

**Inomata K et al. · Cell 2009;137(6):1088–1099 · doi:10.1016/j.cell.2009.03.037**

## TL;DR

Defines the molecular mechanism by which DNA damage causes hair greying: genotoxic stress triggers **ectopic differentiation** of melanocyte stem cells (McSCs) in the niche — not apoptosis or senescence. ATM kinase acts as a **protective stemness checkpoint** that restrains McSCs from premature fate commitment after genotoxic damage; Atm−/− mice are sensitized, requiring only 3 Gy IR to induce ectopic differentiation where wild-type mice require 5 Gy. Multiple chemically distinct genotoxins (ionizing radiation, busulfan, mitomycin C, hydrogen peroxide) all converge on the same DDR → ectopic-differentiation axis. Aged wild-type follicles phenocopy the irradiated state, positioning this paper as the mechanistic upstream of Nishimura 2005's ectopic-differentiation observation and placing [[genomic-instability]] directly upstream of [[stem-cell-exhaustion]] in the McSC aging cascade.

---

## Background

The ectopic differentiation model of hair greying was established by Nishimura, Granter, and Fisher (2005), which showed that McSCs progressively undergo premature differentiation — migrating out of the bulge niche in a committed melanocyte fate rather than remaining quiescent — as the proximate cause of McSC pool depletion with age. That paper also showed that ionizing radiation dramatically accelerates this process. What was missing was the molecular mechanism connecting DNA damage to the fate switch.

Inomata et al. (2009) address this directly: which DNA damage response pathway bridges genotoxic insult to McSC ectopic differentiation? And why do McSCs differentiate rather than apoptose or senesce in response to DNA damage, as would be expected for most somatic cells?

---

## Model systems

The study employed multiple complementary in vivo models in Mus musculus:

- **Dct-lacZ transgenic mice** — the primary experimental model throughout. The Dct (dopachrome tautomerase) promoter drives lacZ expression in the melanocyte lineage, allowing Dct-lacZ+ melanoblasts/McSCs to be identified and quantified histologically (whole-mount and sectioned lacZ-stained skin). McSC fate — quiescent (unpigmented, KITlow) vs. ectopically differentiated (EPM, KIT+, pigmented) — is read out by Dct-lacZ co-expression with KIT and pigmentation status across hair cycles.
- **Atm−/− mice** — germline ATM knockout (gift from Peter J. McKinnon, St. Jude Children's Research Hospital), crossed to Dct-lacZ background, used to assess the contribution of the ATM checkpoint to McSC fate decisions under genotoxic stress.
- **Wild-type C57BL/6 mice** — baseline controls for dose-response IR and chemical genotoxin experiments.
- **Aged WT mice** — examined alongside young irradiated animals to determine whether natural aging phenocopies the genotoxin-induced state. EPMs found in whisker follicles of 22-month-old mice (Figure 1X).
- **XPD^R722W/R722W TTD mice** — DNA-repair-deficient progeroid mice (gift from Jan Hoeijmakers, EMC); EPMs found sporadically in mid-anagen bulge but not in control XPD+/+ mice (Figures 1Y and 1Z), demonstrating that endogenous DNA damage from defective repair also triggers the EPM phenotype.
- **Additional genetic controls** — Trp53−/−, Ink4a/Arf−/−, and Mc1re/e (extension mutant) mice used to rule out p53, p16INK4a, and MC1R-melanogenesis pathway as required intermediates for EPM induction.

All McSC-fate analyses utilized histological scoring of **ectopically pigmented melanocytes (EPMs)** in the niche — cells that have acquired a KIT+ / pigmented (differentiated) phenotype while still residing within or immediately adjacent to the bulge region, where quiescent stem cells should normally be Tyr−/KIT-low.

---

## Methods overview

1. **Ionizing radiation dose-response** — K14-SCF mice and WT C57BL/6 mice irradiated at varying doses; hair cycle stage standardized; EPM formation and hair colour change scored across multiple subsequent cycles.
2. **Chemical genotoxin panel** — Subcutaneous injection (dorsal skin of 7-week-old mice) of: **busulfan** (40 mg/kg body weight; alkylating agent; DNA crosslinker used in conditioning regimens), **mitomycin C** (MMC; 4 mg/kg body weight; DNA crosslinker; antineoplastic), and **hydrogen peroxide** (H₂O₂; 10 ml/kg body weight as 1% in PBS; oxidative DNA damage). Each was tested for its capacity to trigger McSC EPM formation at 6 days post-injection.
3. **ATM requirement** — Atm−/− vs WT mice irradiated at 3 Gy and 5 Gy; EPM formation scored to determine whether ATM loss alters the differentiation threshold.
4. **Mechanism exclusion** — apoptosis, necrosis, and senescence markers assessed in irradiated McSCs to confirm differentiation, not death, is the predominant response.
5. **Differentiation marker analysis** — KIT upregulation, MITF upregulation, and tyrosinase expression scored in ectopically positioned cells.
6. **Aged WT comparison** — Natural hair follicle aging examined histologically in old mice for spontaneous EPM occurrence and its relation to endogenous DNA damage (γH2AX foci).

---

## Key findings

### 1. Genotoxic stress triggers McSC ectopic differentiation

IR and each of the chemical genotoxins tested (busulfan, MMC, hydrogen peroxide) induced EPM formation in K14-SCF and WT mice — cells morphologically consistent with mature melanocytes (KIT-high, pigmented) appearing in the niche zone where McSCs should be quiescent [^inomata2009]. Hair greying followed as McSC pools were depleted through ectopic commitment.

**Crucially, the differentiation-not-death conclusion** is supported by the absence of apoptotic markers (TUNEL staining) and senescence markers (SA-β-gal staining) in McSCs undergoing ectopic differentiation following IR. The predominant fate of genotoxin-stressed McSCs is premature commitment to a melanocyte fate, not programmed death or stable senescence. This distinguishes McSC biology from the canonical DDR outcome in most somatic cells.

#gap/needs-replication — This conclusion (differentiation as the primary response mode, not apoptosis) is based on one laboratory's histological analysis; independent replication using live fate-tracing at single-cell resolution would strengthen the claim.

### 2. ATM is a protective stemness checkpoint: Atm−/− sensitizes McSCs

In Atm−/− mice, **3 Gy IR** induced substantial EPM formation and hair greying equivalent to the effect of **5 Gy IR in wild-type mice** [^inomata2009]. Lower doses that left WT McSCs intact caused ectopic differentiation in ATM-null animals.

The direction of effect is critical and was corrected after R38 verification: **ATM does NOT promote differentiation — it restrains it.** Loss of ATM function removes the brake on stress-induced ectopic differentiation. The ATM-mediated DDR acts as a gatekeeper that, when properly engaged, presumably allows the cell to pause, assess damage severity, and either complete repair (maintaining stemness) or activate a controlled response. Without ATM, this checkpoint fails and McSCs default to ectopic differentiation at lower stress thresholds.

This positions ATM as a **protective stemness checkpoint** in the McSC niche, parallel to its canonical role as a cell-cycle arrest enforcer in proliferating somatic cells — but with a different downstream output (differentiation rather than arrest/apoptosis/senescence).

**Extrapolation to humans:**

| Dimension | Status |
|---|---|
| ATM function conserved in humans? | yes — ATM sequence and DSB-sensing function highly conserved; biallelic ATM loss (ataxia-telangiectasia) is a well-characterized human disease |
| Premature hair greying in ataxia-telangiectasia patients? | partially noted — AT patients are reported to exhibit premature greying, consistent with the mouse model; not systematically quantified in the literature #gap/needs-human-replication |
| Ectopic differentiation (vs apoptosis) as dominant McSC fate in human AT? | not tested — mechanistic confirmation absent in human hair follicles |

### 3. Chemical genotoxins recapitulate the IR phenotype

Busulfan, mitomycin C, and hydrogen peroxide each induced EPM formation in treated mice, demonstrating that the DDR-to-differentiation axis is not IR-specific but is triggered by chemically diverse forms of DNA damage [^inomata2009]. This generality supports the model that it is the DNA damage signal itself — not a radiation-specific secondary response (e.g., reactive oxygen species from radiolysis, bystander signalling) — that drives McSC fate switching.

Practical implication: chemotherapy regimens using alkylating agents (busulfan, MMC are both clinically used in conditioning or treatment protocols) may carry McSC-depletion as a side effect, potentially contributing to premature hair greying observed in cancer survivors. #gap/needs-human-replication

### 4. Aged WT mice phenocopy irradiated mice

Naturally aged WT mice display spontaneous EPM formation in hair follicles, and this is associated with endogenous DNA damage signals (γH2AX foci) in McSCs [^inomata2009]. This is the paper's core argument that chronic, cumulative, low-level genotoxic stress during normal aging progressively saturates or transiently overwhelms the ATM checkpoint, driving the same ectopic differentiation seen acutely after IR. The aged-mouse phenocopy thus positions this as a plausible mechanism for physiological hair greying.

This paper therefore closes the loop in the mechanistic hierarchy:

**Normal aging → cumulative DNA damage in McSC niche → ATM checkpoint engaged repeatedly → eventual threshold saturation or failure → ectopic differentiation → niche depletion → hair greying**

---

## Mechanism: DDR → MITF upregulation → ectopic differentiation

The paper's proposed mechanistic chain:

1. Genotoxic insult causes DNA double-strand breaks (and oxidative lesions for H₂O₂) in McSCs.
2. Damage is sensed by the MRN complex (MRE11-RAD50-NBS1) and activates **ATM** kinase (autophosphorylation at Ser1981; downstream γH2AX and 53BP1 focus formation).
3. In the normal (WT) context, ATM signaling enforces a checkpoint response. In McSCs, this checkpoint appears to be connected to differentiation circuitry: when damage is sufficient or persistent, it overrides the quiescence program.
4. **MITF** (Microphthalmia-associated transcription factor), the master melanogenic transcription factor, is upregulated in ectopically differentiating McSCs. Mitf-low is a defining stemness marker; Mitf-high is a differentiated melanocyte marker. The paper's data show Mitf upregulation accompanying EPM formation, placing Mitf activation downstream of the DDR signal.
5. Mitf-high cells upregulate tyrosinase (Tyr), KIT receptor, and other differentiation-associated genes, completing the transition from quiescent McSC to committed melanocyte in an ectopic location.
6. Ectopically committed cells vacate the niche (or fail to respond to niche self-renewal signals), irreversibly depleting the stem pool.

Note: the precise molecular link between ATM activation and MITF upregulation was not fully resolved in this paper. Whether ATM acts directly on MITF promoter-regulatory elements, or through an intermediate (p53? CHK2? SCF/KIT axis modulation?), remains an open question. #gap/no-mechanism

---

## Relationship to Nishimura 2005

Inomata 2009 is the **mechanistic upstream** of Nishimura 2005:

- Nishimura 2005 established that ectopic differentiation occurs in aged follicles and that IR accelerates it, but did not identify the molecular pathway.
- Inomata 2009 identifies the **ATM/DDR pathway** as the molecular transducer connecting genotoxic damage to the ectopic differentiation fate decision.

The two papers are complementary: Nishimura 2005 described the phenomenon; Inomata 2009 began its mechanistic dissection. Both are required reading for the [[melanocyte-stem-cells]] and [[hair-greying]] pages.

---

## Limitations

- **Murine model only.** All experiments used Mus musculus. Direct mechanistic confirmation in human McSCs is absent. Conservation of the ATM-to-MITF-to-ectopic-differentiation axis in human hair follicles is inferred from pathway conservation, not demonstrated experimentally. #gap/needs-human-replication
- **Hair follicle bulge focus.** The study is focused on bulge McSCs. Inter-follicular epidermis (IFE) melanocytes, which do not cycle with hair follicle dynamics, were not directly tested — it is unknown whether they share this genotoxin-to-differentiation response. #gap/needs-human-replication
- **EPM scoring as proxy.** Ectopically pigmented melanocyte counts are a histological proxy; single-cell lineage tracing with clonal resolution (as in Sun 2023) would provide stronger causal evidence that EPMs arise from McSC ectopic differentiation events rather than migration from other compartments.
- **ATM-to-MITF gap.** The molecular intermediates between ATM activation and MITF upregulation are not identified. p53, CHK2, or niche-paracrine signals could all plausibly mediate this step. #gap/no-mechanism
- **Per-group n not stated in main text.** The paper reports SEM error bars and uses Student's t test (p<0.001 for the ATM dose-response in Figure 6K), but does not state per-group n explicitly in the main text or figure legends. Exact cohort sizes are likely recorded in the Supplemental Experimental Procedures.
- **Atm−/− mouse: pleiotropic background effects.** Germline Atm knockout produces a complex phenotype (immune deficiency, radiation sensitivity, lymphomagenesis) that could confound interpretation of McSC-specific findings. Inducible conditional McSC-specific ATM knockout would provide cleaner evidence. #gap/needs-replication
- **Mechanistic incompleteness re: differentiation vs. death.** The claim that differentiation is the *primary* response (rather than apoptosis/senescence) may reflect quantification sensitivity; some apoptosis may occur but be below detection threshold in the histological assay used.

---

## Significance and downstream impact

This paper is a citation-percentile-100 paper (355 citations; FWCI 12.48). It had three major impacts:

1. **Mechanistic** — first direct evidence that the DDR/ATM pathway drives McSC fate switching toward ectopic differentiation, establishing genotoxic stress as a mechanistic cause of stem cell exhaustion in the hair follicle.
2. **Conceptual** — the "differentiation, not apoptosis" conclusion reframed how genotoxic stress impacts stem cell compartments: not simply by killing progenitors, but by forcing premature commitment and thereby depleting the renewable pool.
3. **Hallmark integration** — provided one of the earliest clean mechanistic links between the [[genomic-instability]] hallmark and the [[stem-cell-exhaustion]] hallmark via ATM, positioning the DDR pathway as a causal bridge between these two hallmarks.

The paper is referenced as the mechanistic substrate for the ATM-stemness-checkpoint section of [[melanocyte-stem-cells]], and the R38 verifier pass explicitly corrected an earlier inversion of the ATM direction in that page (prior version incorrectly stated ATM promoted differentiation; this paper demonstrates the opposite).

---

## Cited by (wiki)

- [[melanocyte-stem-cells]] — Section "Genotoxic stress and ATM-mediated depletion (Inomata 2009)"
- [[hair-greying]] — upstream mechanistic reference
- [[atm]] — McSC stemness-checkpoint function as an example of ATM's non-canonical role
- [[stem-cell-exhaustion]] — canonical mechanistic example for DDR → stem cell pool depletion
- [[genomic-instability]] — upstream hallmark; this paper provides exemplar evidence

---

## Footnotes

[^inomata2009]: [[studies/inomata-2009-melanocyte-stem-cell-atm]] · doi:10.1016/j.cell.2009.03.037 · Inomata K, Aoto T, Binh NT, Okamoto N, Tanimura S, Wakayama T, Iseki S, Hara E, Masunaga T, Shimizu H, Nishimura EK · Cell 2009;137(6):1088–1099 · in-vivo · model: mus-musculus (primary: Dct-lacZ transgenic mice; also Atm−/−, WT C57BL/6, XPD^R722W/R722W TTD, Trp53−/−, Ink4a/Arf−/−, Mc1re/e; EPM histological scoring) · PDF locally available at  · ATM acts as stemness checkpoint (protective); Atm−/− mice sensitized (3 Gy → EPMs in KO vs 5 Gy required in WT; WT did not gray at 3 Gy); busulfan (40 mg/kg s.c.), MMC (4 mg/kg s.c.), H₂O₂ (1% in PBS, 10 ml/kg s.c.) recapitulate IR phenotype; aged WT mice (22M) phenocopy irradiated young mice; differentiation (MITF/TYRP1/TYR upregulation), not apoptosis (no TUNEL/caspase-3) or senescence (no SA-β-gal/p16INK4a), is the primary DDR response in McSCs · citation percentile 100 (355 citations; FWCI 12.48)
