---
type: study
doi: 10.1038/s41586-020-2975-4
pmid: 33268865
pmc: PMC7752134
title: "Reprogramming to recover youthful epigenetic information and restore vision"
authors: [Lu Y, Brommer B, Tian X, Krishnan A, Meer M, Wang C, Vera DL, Zeng Q, Yu D, Bonkowski MS, Yang JH, Zhou S, Hoffmann EM, Karg MM, Schultz MB, Kane AE, Davidsohn N, Korobkina E, Chwalek K, Rajman LA, Church GM, Hochedlinger K, Gladyshev VN, Horvath S, Levine ME, Gregory-Ksander MS, Ksander BR, He Z, Sinclair DA]
year: 2020
journal: Nature
volume: 588
pages: 124-129
study-design: in-vivo
organism: mus-musculus
n-subjects: null   # variable by experiment arm; see Design section; no single headline N reported
intervention: ["[[interventions/stem-cell-therapy/in-vivo-partial-reprogramming-therapy]]"]
hallmarks-tested: ["[[epigenetic-alterations]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [osk-axon-regeneration-optic-nerve-crush, osk-glaucoma-vision-rescue, osk-aged-vision-restoration, dnam-clock-reversal-rgcs, tet1-tet2-required-mechanism, no-tumor-formation-21-months, doxycycline-withdrawal-preserves-benefit]
local-pdf: null
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Full PDF read end-to-end (main text + extended data figs 1–10 + methods). All arms cross-checked for ages, n, AAV architecture, DNAm clock identity, safety arm duration, TET mechanism, COI. Human neuron arm added (missing from auto-extraction). Exact axon counts from figures not recapitulated as numeric table — reported as statistical significance tiers from figure legends. Dox withdrawal persistence duration not reported as a specific timepoint by the paper beyond 'sustained after withdrawal.'"
---

# Reprogramming to recover youthful epigenetic information and restore vision

**Lu Y et al. (Sinclair DA, senior author) · *Nature* 588, 124–129 · 2020 · DOI: 10.1038/s41586-020-2975-4**

771 citations as of 2026-05-07 · FWCI 113.1 · citation_percentile 100

## TL;DR

AAV2-mediated delivery of three Yamanaka factors — OCT4, SOX2, and KLF4 (**OSK**, deliberately omitting c-Myc) — into mouse retinal ganglion cells (RGCs) restores youthful DNA methylation patterns and rescues vision in three distinct experimental contexts: optic nerve crush injury, glaucoma, and natural aging. Reversal of the epigenetic aging signature in RGCs depends on TET1 and TET2 DNA demethylases (knockdown of either abrogates the benefit; TET3 is dispensable). Systemic AAV9-OSK found no increase in tumor incidence after 10–18 months of continuous induction. This is the foundational primary source for in-vivo transient OSK partial reprogramming as a therapeutic strategy. It demonstrates that functional aging in a post-mitotic somatic tissue can be reversed — not merely slowed — by epigenetic reprogramming without inducing pluripotency. The study used two AAV architectures: Tet-Off (expression on by default, dox suppresses) for the primary ONC injury arm, and Tet-On (dox activates expression) for post-injury and aging arms.

---

## Background and rationale

The study is motivated by the [[hypotheses/information-theory-of-aging|information theory of aging]]: progressive epigenetic drift (particularly DNA methylation changes at CpG sites captured by the [[biomarkers/horvath-clock-2013|Horvath DNAm clock]]) is posited as a causal driver of functional decline, not merely a correlate. If so, resetting the epigenetic state of aged cells toward a younger pattern should restore function — without requiring the sequence-level DNA repair that distinguishes [[epigenetic-alterations]] from [[genomic-instability]].

The retina is a tractable system: RGCs are accessible via intravitreal injection, their function is quantifiable by visual acuity and electrical recordings, and the optic nerve crush (ONC) model provides an acute functional readout of axon regeneration capacity.

Critically, c-Myc was excluded from the factor set to reduce oncogenic risk, yielding a three-factor OSK system. The study engineered a dual-AAV system under a tetracycline response element (TRE) promoter that can be operated in two modes: **Tet-Off** (AAV2 carrying tTA transactivator; expression is on by default and doxycycline suppresses it) used for the primary optic nerve crush arm; and **Tet-On** (AAV2 carrying rtTA; doxycycline activates expression) used for the post-injury and natural aging arms. Both modes use two vectors — one encoding the TRE-driven OSK polycistron, one encoding the transactivator — enabling reversible transcription-factor induction. Expression was observed in approximately 40% of RGCs after intravitreal injection as estimated by immunostaining.

---

## Design

The paper comprises **four distinct experimental contexts** across multiple cohorts. There is no single headline N; each arm is sized independently.

### Arm 1 — Optic nerve crush (ONC) in young mice: axon regeneration

- **Model:** C57BL/6J mice, 1 month old at ONC surgery (n = 8 for OSK; n = 6 for d2EGFP control per Extended Data Fig. 4a–b)
- **Intervention:** Intravitreal Tet-Off AAV2 carrying polycistronic OSK (AAV2-tTA + AAV2-TRE-OSK) or control vectors, administered 2 weeks before ONC. Expression is on by default; doxycycline in drinking water suppresses it. Axon regeneration was quantified at 4 weeks post-crush.
- **Readout:** Anterograde axon tracing (Alexa Fluor 555–conjugated cholera toxin B, CTB-555) at 4 weeks post-crush; RGC survival (RBPMS+ cell counts); the greatest regeneration occurred when all three genes were co-delivered as a polycistron in a single AAV particle
- **Key result:** OSK-treated mice showed significantly greater axon regeneration beyond the crush site (axons extended over 5 mm into the chiasm at 12–16 weeks) and higher RGC survival vs. controls; suppression of OSK by dox prevented both effects. When factors were delivered individually or via separate monocistronic AAVs, no regeneration was observed.

### Arm 2 — Optic nerve crush in adult/aged mice: axon regeneration capacity across ages

- **Model:** C57BL/6J mice at 1 month, 3 months, and 12 months old at ONC surgery (n = 8, 5, and 8 respectively for OSK; n = 6, 5, and 6 for d2EGFP controls per Extended Data Fig. 4a)
- **Intervention:** Same Tet-Off/Tet-On AAV2 OSK system; axon regeneration assessed at 2 weeks post-crush (2 wpc); extended treatment (5 wpc) tested in 12-month-old mice
- **Key result:** In 12-month-old mice, OSK treatment doubled RGC survival compared to controls, similar to what was observed in 1- and 3-month-old mice. Axon regeneration was slightly weaker in older mice at 2 wpc, but when extended to 5 wpc, robust regeneration still occurred with no increase in RGC number, indicating OSK's effect is on RGC function, not proliferation.

### Arm 3 — Glaucoma model: vision rescue

- **Model:** Microbead-induced ocular hypertension (MIOH) in C57BL/6J mice; IOP elevated unilaterally for 21 days by anterior-chamber injection of polystyrene microbeads (15-µm diameter, FluoSpheres), with saline injection as non-glaucomatous control
- **Intervention:** Intravitreal AAV2 (Tet-On) + OSK expression induced for 4 weeks after axonal and RGC loss had been established (4 weeks post-microbead); treated n = 9, 7, 6, and 8 eyes for axon density; n = 7, 5, 6, and 5 eyes for RGC counts per Extended Data Fig. 9c–d
- **Readouts:** Axon density (PPD-stained optic nerve cross-sections); RGC counts (Brn3a immunostaining); visual acuity (optomotor response, OMR); pattern electroretinogram (PERG, N1+P1 amplitude)
- **Key result:** OSK-treated glaucomatous eyes showed restoration of axon density equivalent to non-glaucomatous eyes; significant increase in visual acuity vs. pre-treatment baseline; PERG amplitude improved. The paper describes this as the first example of vision loss reversal after glaucomatous injury has occurred (prior approaches focused on neuroprotection before injury).

### Arm 4 — Natural aging: restoring age-related vision loss

- **Model:** C57BL/6J mice at **3 months old and 11 months old** (paper text page 7: "we treated 3- and 11-month-old mice"); females from NIA Aged Rodent Colonies were used for aging experiments. Vision naturally declines in C57BL/6J from ~6 months onward. Vision restoration was NOT seen in 18-month-old mice (likely because an age-dependent increase in corneal opacity interfered with assessment per footnote 43).
- **Intervention:** Intravitreal Tet-On AAV2-tTA;TRE-OSK (or −OSK control); OSK expression induced by doxycycline in drinking water for 4 weeks. PERG and OMR measured before and after. RGCs were FACS-purified for RNA-seq and DNAm analysis.
- **Readouts:** Visual acuity (OMR, optokinetic motor response); PERG; a custom DNAm aging signature (1,226 CpG sites, derived from the first principal component of genome-wide RRBS across 1 mo, 12 mo, 30 mo mice); transcriptomic profiling of FACS-sorted RGCs (RNA-seq vs 5-month-old young controls)
- **Key results:**
  - OSK restored visual acuity and RGC electrical activity (PERG) in aged mice to levels comparable to young mice; the RGC counts and axon density were not significantly increased, indicating functional (not structural) restoration
  - The DNAm aging signature (PC1 score across 1,226 CpG sites) of RGCs was significantly reversed by OSK treatment; TET1 and TET2 knockdown each counteracted OSK's effect on DNAm age in 12-month-old mice (Extended Data Fig. 10l)
  - mRNA levels of 464 genes altered during aging were ~90% restored to youthful levels by OSK in 12-month-old RGCs (Fig. 4c–d)
  - Benefit persisted after doxycycline withdrawal (OSK expression is transient; the epigenetic correction proved durable under the conditions tested)

**Note on DNAm clock:** The paper uses a ribosomal DNA methylation clock (67/72 CpG sites per ribosomal repeat, referenced as Wang & Lemos 2019) for initial age correlation, supplemented by a custom 1,226-site aging signature derived from RRBS data from sorted RGCs. This is NOT the Horvath 2013 human blood/tissue clock. The custom clock is RGC-specific and was derived by the authors from their own multi-age RGC RRBS dataset.

### Arm 5 — Mechanism: TET demethylase dependence

- **Approach:** Knockdown of TET1, TET2, or TET3 in RGCs via AAV-shRNA (sh-Tet1 or sh-Tet2; titer ratio 5:5:1 with AAV2-tTA;TRE-OSK) in the ONC model; also conditional knockout of Tet2 in RGCs via AAV2-Cre delivery to Tet2flox/flox mice; additionally, TDG (thymine-DNA glycosylase) knockdown tested (n = 4 retinas/eyes per condition per Extended Data Figs. 6, 7)
- **Key result:** TET1 and TET2 knockdown each independently abrogated OSK-driven axon regeneration and RGC survival (Extended Data Fig. 6e–f; n = 4 eyes, 10/7/9 retinas). TET3 knockdown had no significant effect (P = 0.089 for Tet3 knockdown vs Scr control). Tet2 conditional knockout (Tet2 cKO) via Cre also abrogated OSK-driven regeneration (Extended Data Fig. 6h–j). TDG knockdown completely abolished the beneficial effects of OSK (Extended Data Fig. 7a–d), establishing that TDG-mediated active demethylation (not passive, replication-dependent demethylation) is required. Overexpression of the TET1 catalytic domain alone had no protective or regenerative effect.
- **Interpretation:** OSK upregulates TET1 and TET2 (but not TET3) at the mRNA level; TET1/TET2 then mediate active DNA demethylation at specific loci (enriched at PRC2/H3K27me3-associated sites); TDG converts the oxidized cytosine intermediates back to unmodified cytosine. This targeted demethylation is necessary but not sufficient for axon regeneration and RGC survival; global demethylation (via TET1 catalytic domain overexpression) does not recapitulate the benefit.
- **Human neuron confirmation:** OSK also counteracted axon loss and DNAm aging in differentiated human SH-SY5Y neuroblastoma-derived neurons in vitro; neurite area was 15-fold greater in OSK-transduced cells vs controls at 9 days post-vincristine damage; this effect was blocked by TET2 knockdown (not by mTOR-S6K inhibition), and the Tet2 dependence was conserved in both mice and humans (Extended Data Fig. 8).

### Arm 6 — Safety: systemic AAV9 in young and old mice

The paper reports two distinct systemic safety experiments (Extended Data Fig. 1g–n):

**Experiment A — young and old mice (AAV9-rtTA;TRE-OSK, retro-orbital injection):**
- **Model:** Young C57BL/6J mice (5 months old at injection) and aged C57BL/6J mice (20 months old at injection); continuous doxycycline in drinking water for OSK induction
- **Duration:** 10–18 months of continuous OSK induction; young mice monitored for 18 months (to ~23 months); aged mice for at least 10 months
- **Readout:** Tumor histology, organ pathology, body weight, survival (Extended Data Fig. 1g–i)
- **Key result:** "After 10–18 months of continuous OSK induction, no increase in tumor incidence or negative effects on overall health were observed" (paper main text, page 3)

**Experiment B — aged transgenic cohort (Extended Data Fig. 1j–n):**
- **Model:** C57BL/6J mice at 21 months old injected intravenously with AAV9-rtTA + AAV9-TRE-GFP (control) or AAV9-TRE-OSK; doxycycline for 10 months (mice reaching ~32 months old). WT, n = 11; GFP, n = 10; OSK high, n = 7; OSK low, n = 8 mice.
- **Key result:** Tumor incidence table (Fig. 1l): systemic tumors — WT 72.7% (8/11), GFP 90% (9/10), OSK 66.7% (10/15); liver tumors — WT 63.6% (7/11), GFP 50% (5/10), OSK 46.7% (7/15); liver tumor score and white blood cell counts showed no significant difference between groups (one-way ANOVA). Tumor incidence was similar across WT, GFP-control, and OSK groups — no excess tumor burden attributable to OSK.

**Summary:** No increase in tumor formation was attributable to OSK expression. Aged mice (~32 months) do develop spontaneous tumors at substantial background rates (~65–90% regardless of treatment), confirming the importance of comparing to age-matched controls. The safety data does not report 0 tumors total; it reports no increase in the OSK arm relative to controls.

---

## Key quantitative findings

| Finding | Detail | Gap / caveat |
|---|---|---|
| Axon regeneration after ONC | OSK polycistronic treatment significantly increased regenerating axon numbers vs controls; p < 1×10⁻¹⁰ at multiple distances post-crush (Extended Data Fig. 5f); axons extended >5 mm into chiasm at 12–16 wpc with extended induction | RGC-specific (Vglut2-CRE arm confirmed); effect requires polycistronic delivery in single AAV particle |
| RGC survival after ONC | Survival of OSK-positive RGCs ~3× that of nearby OSK-negative RGCs or GFP-control RGCs at 2 wpc; cell-autonomous effect (Extended Data Fig. 4i–k) | Mouse model only; no human RGC data |
| Glaucoma model vision rescue | OMR visual acuity and PERG amplitude significantly improved; axon density and RGC counts restored to non-glaucomatous levels (p = 0.022–0.004, Extended Data Fig. 9c–d); paper states this is first reversal of vision loss after glaucomatous injury | Microbead IOP model; not identical to human glaucoma pathology #gap/needs-human-replication |
| Aged vision restoration | In 3-month-old and 11-month-old mice, OSK restored OMR visual acuity and PERG to young-mouse levels; effect absent in 18-month-old mice (corneal opacity confound) | Mouse aging; 11-month age = approximately middle-aged, not geriatric mouse #gap/needs-human-replication |
| Transcriptome restoration | ~90% of 464 age-altered genes in 12-month-old RGCs restored to youthful levels by OSK (Fig. 4c–d); 44 age-downregulated genes involved in olfactory receptor/axon targeting | RNA-seq on FACS-sorted RGCs (12 mo vs 5 mo young) |
| DNAm aging signature reversal | OSK reversed the PC1 DNAm aging score in RGCs; ribosomal DNAm clock age also reversed; TET1 and TET2 KD each blocked DNAm reversal in 12-month-old mice. Custom 1,226-CpG signature — NOT the Horvath 2013 human clock. Exact delta values in Extended Data Fig. 10k–l. | Species-specific RGC clock; single-lab; not validated in other tissues #gap/needs-human-replication |
| TET1/TET2 requirement | Either TET1 or TET2 KD (AAV-shRNA) blocks OSK-driven axon regeneration and RGC survival; TET3 KD has no significant effect (P = 0.089); TET2 conditional KO (Tet2flox/flox + Cre) recapitulates. TDG knockdown also abolishes benefit. | Mechanism in RGCs only; may differ in other tissues |
| Human neuron data | OSK counteracted axon loss in differentiated human SH-SY5Y neurons in vitro; 15-fold greater neurite area at day 9 post-vincristine vs controls (Extended Data Fig. 8h–i); blocked by TET2 KD | In vitro; neuroblastoma-derived cell line; not primary human RGCs |
| No excess tumor formation | OSK tumor incidence similar to age-matched WT and GFP controls in 32-month-old mice (Extended Data Fig. 1l); 10–18 months continuous systemic AAV9-OSK showed no increase in tumor incidence vs controls | Spontaneous tumor background rate 65–90% in aged mice regardless of treatment; reassuring but single-study #gap/needs-replication |
| Dox withdrawal persistence | After dox removal, epigenetic and functional benefits were maintained in subsequent assessments (Fig. 4 and Extended Data Fig. 5e) | Duration of benefit post-withdrawal not fully characterized beyond study timeframe |

---

## Mechanistic model

OSK upregulates TET1 and TET2 (but not TET3) at the mRNA level. TET1 and TET2 then oxidize 5-methylcytosine (5-mC) at selected CpG sites — enriched at PRC2-complex/H3K27me3-associated loci and genes involved in synaptic transmission and light detection. The PRC2 complex may serve to recruit TET1/TET2 to specific genomic sites. TDG (thymine DNA glycosylase) completes active demethylation by converting the oxidized cytosine intermediates back to unmodified cytosine. The net result:

1. Targeted (not global) reversal of hypermethylation drift at aging/injury-affected CpG sites (measured by a custom 1,226-CpG RGC aging signature and ribosomal DNAm clock — not the Horvath 2013 human clock)
2. Younger gene-expression program (transcriptomic shift in 12-month-old RGCs toward 5-month-old RGC profile; ~90% of 464 age-altered genes restored)
3. Youthful axon regeneration capacity and electrophysiological function (OMR, PERG)

Critically, this mechanism does **not** require:
- DNA sequence repair (no DSBs induced, unlike ICE model in [[studies/yang-2023-epigenetic-information-loss]] if seeded)
- Cell division or cell replacement (BrdU labeling confirmed no RGC proliferation)
- Induction of pluripotency (Nanog not upregulated; cell identity retained throughout)
- Global demethylation (overexpression of TET1 catalytic domain alone had no protective effect; targeted demethylation is necessary but not sufficient — OSK brings the targeting information)

This places Lu 2020 as the primary experimental support for the TET-mediated epigenetic reset mechanism within [[hypotheses/information-theory-of-aging]].

---

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | TET1/TET2 are highly conserved across mammals; OCT4/SOX2/KLF4 are human transcription factors. RGC biology overlaps human glaucoma. DNAm clock architecture differs (species-specific CpG sites). |
| Phenotype conserved in humans? | unknown | No human retinal OSK study published. Human glaucoma and age-related vision loss have different etiologies from the mouse models used. |
| Replicated in humans? | no | #gap/needs-human-replication |

#gap/needs-human-replication — all experiments conducted in C57BL/6J mice; no human RGC or other tissue partial reprogramming data exists as of 2026-05-07.

#gap/needs-replication — single-lab origin (Sinclair laboratory, Harvard); no independent replication of the vision-restoration or epigenetic clock reversal findings in RGCs at comparable depth as of 2026-05-07.

---

## Limitations

- All experiments are in C57BL/6J inbred mice; the genetic uniformity may not predict results in outbred or aged human populations.
- The retina is an immunologically privileged, small, accessible tissue — AAV2 intravitreal delivery does not generalize to systemic delivery challenges for other tissues.
- The "aged" mice in the primary vision restoration arm are 3 months old and 11 months old; 11 months is middle-aged for a C57BL/6J mouse (median lifespan ~2 years), not geriatric. Vision restoration was not seen in 18-month-old mice due to corneal opacity, so the oldest successfully treated age is 11 months.
- The Horvath mouse clock used as an epigenetic readout is not the same as the human Horvath 2013 clock; cross-species clock comparisons require caution.
- Long-term persistence of the epigenetic benefit is not characterized beyond the study timeframe.
- Safety arm used AAV9 (systemic, retro-orbital) while the efficacy arms used AAV2 (intravitreal) — different serotypes with different tissue-tropism profiles; the safety data does not fully predict the efficacy-arm delivery route.
- No independent replication by other groups as of 2026-05-07.
- COI: David Sinclair is a consultant to, inventor of patents licensed to, board member of, and equity owner of Iduna Therapeutics (a Life Biosciences company developing epigenetic reprogramming therapies), and an advisor to Zymo Research; disclosed in the paper (page 1). Additional co-authors (Y.L., L.A.R., S.H.) are equity owners of Iduna Therapeutics; M.S.B. is a shareholder in MetroBiotech; K.C. is an equity owner in Life Biosciences.

---

## Relationship to adjacent studies

| Study | Relationship |
|---|---|
| [[studies/ocampo-2016-partial-reprogramming]] | Prior pillar of in-vivo partial reprogramming; used cyclic OSKM in progeria model (Belmonte group); independently supports the field but with c-Myc and a disease model, not natural aging |
| Yang 2023 (Cell) — ICE model | Follow-on from Sinclair group; ICE system provides causal evidence for epigenetic disruption → aging; OSK reverses ICE-accelerated aging; #gap/stub — no dedicated study page yet |
| [[studies/waziry-2023-calerie-epigenetic-clock]] | Human RCT measuring epigenetic clocks under caloric restriction; shares DNAm clock readout methodology but tests a different intervention |

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[partial-reprogramming]] (process, verified) | Process page covering this study in the context of the full partial reprogramming field; Lu 2020 is one of two pillar studies cited there |
| [[interventions/stem-cell-therapy/in-vivo-partial-reprogramming-therapy]] (verified) | Intervention class page; Lu 2020 is the primary source for AAV-OSK gene therapy arm |
| [[interventions/gene-therapy/aav-osk]] | Gene-therapy modality view of OSK delivery; Lu 2020 is the foundational reference |
| [[hypotheses/information-theory-of-aging]] (verified) | Lu 2020 is cited as primary experimental support for TET-mediated epigenetic clock reversal |
| [[epigenetic-alterations]] (hallmark, verified) | Hallmark this study directly interrogates; DNAm drift in RGCs reversed by OSK |
| [[biomarkers/horvath-clock-2013]] (verified) | DNAm clock used as readout for epigenetic age in RGCs |
| [[molecules/proteins/oct4]] | OCT4 — OSK component; recruits TET demethylases |
| [[molecules/proteins/sox2]] | SOX2 — OSK component |
| [[molecules/proteins/klf4]] | KLF4 — OSK component |
| [[molecules/proteins/tet1]] | TET1 — required for OSK-driven benefit; knockdown abrogates effect |
| [[molecules/proteins/tet2]] | TET2 — required for OSK-driven benefit; knockdown abrogates effect; TET3 is NOT required |

---

## Footnotes

[^lu2020self]: doi:10.1038/s41586-020-2975-4 · in-vivo (AAV2 Tet-Off [ONC primary arm] + Tet-On [post-injury and aging arms], polycistronic OSK, intravitreal; mouse) · model: C57BL/6J (optic nerve crush 1, 3, 12 mo; glaucoma [IOP microbead]; aging vision restoration 3 mo and 11 mo; safety: young [5 mo → 18 mo induction] + aged [20 mo → 10+ mo induction] with AAV9 systemic; 21-mo-old mice used in extended safety cohort, with 10 mo dox, to age 32 mo) · 771 citations; citation_percentile=100; FWCI=113.1 · local PDF available · Sinclair group, Harvard · TET1/TET2 required; TET3 dispensable; TDG required; c-Myc excluded; no excess tumor formation attributable to OSK
