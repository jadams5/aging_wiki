---
type: hallmark
aliases: [epigenetic drift, epigenetic age, age-related epigenetic changes]
category: primary
mechanistic-tier: proximal
intervention-tractability: moderate
caused-by: ["[[genomic-instability]]", "[[deregulated-nutrient-sensing]]"]
causes: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
introduced: 2013
sens-correspondence: []
key-pathways: ["[[sirtuin]]", "[[dna-methylation]]", "[[histone-modification]]"]
key-phenotypes: ["[[cancer]]", "[[immunosenescence]]"]
key-proteins: ["[[sirt1]]", "[[sirt6]]"]
key-interventions: ["[[caloric-restriction]]", "[[partial-reprogramming]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Synthesis-MOC: no novel primary-source claims on this page. All quantitative figures (Horvath 2013 n=7,844/82 datasets/51 tissues/MAE=3.6 yr; Waziry 2023 CALERIE 11.9% CR / DunedinPACE d=−0.25 p<0.003 / PhenoAge+GrimAge NS; Yang 2023 ICE details deferred to information-theory-of-aging) cross-checked against verified atomic pages: [[homo-sapiens]] (verified), [[hypotheses/information-theory-of-aging]] (verified), [[caloric-restriction]] (verified with scope), [[sirtuin]] (verified with scope), [[sirt1]] (verified), [[spermidine]] (verified), [[caenorhabditis-elegans]] (verified with scope). Wikilinks confirmed to resolve (study stubs noted as stubs). No factual corrections required."
---

# Epigenetic Alterations

One of the four **Primary** hallmarks of aging (López-Otín 2013, retained in the 2023 expanded framework). The central mechanistic hypothesis explaining this hallmark — that aging is driven by progressive **loss of epigenetic information** — is documented in full on [[hypotheses/information-theory-of-aging]] (verified).

**This page is a synthesis-MOC.** It aggregates evidence from verified atomic pages via wikilinks. It does not restate primary study data — follow wikilinks for n, p-values, and methodology.

---

## Definition (per López-Otín 2013)

Age-associated changes in the epigenome — the regulatory landscape of DNA methylation, histone modifications, chromatin remodeling, and noncoding RNA expression — that progressively disrupt cellular identity and gene expression programs. Unlike genomic mutations (permanent sequence-level damage), epigenetic changes are in principle reversible, which underlies therapeutic interest in epigenetic reprogramming.

The hallmark encompasses four overlapping layers:

| Layer | Age-associated change |
|---|---|
| **DNA methylation** | Global hypomethylation (especially at repetitive elements); focal hypermethylation at CpG islands of developmental genes; drift in tissue-specific patterns |
| **Histone modifications** | Loss of H3K9me3 and H4K20me3 (heterochromatin marks); altered H3K27me3 distribution; reduced H3K9ac and H4K16ac deacetylation capacity as SIRT1 declines |
| **Chromatin compaction** | Progressive heterochromatin erosion; transposable element de-repression; nucleosome occupancy shifts |
| **Noncoding RNA** | Altered miRNA and lncRNA expression affecting chromatin-regulatory circuits |

---

## Epigenetic clocks: the key biomarker evidence

The most tractable readout of age-associated DNA methylation drift is the family of **epigenetic clocks** — algorithms trained on CpG methylation data to predict biological age.

### Horvath 2013: pan-tissue clock (human; well-established)

The foundational clock, trained on 353 CpG sites across 51 human tissues and cell types, predicts chronological age with ~3.6-year mean absolute error in held-out test data [^horvath2013]. Epigenetic clock acceleration — aging faster than chronological age — robustly predicts all-cause mortality, frailty, and disease risk across large human epidemiological cohorts. See [[homo-sapiens]] (verified; Horvath 2013 n=7,844 samples pan-tissue). This clock-biomarker relationship is **not disputed**; it is the empirical foundation on which the hallmark stands.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (clock built on human data) |
| Phenotype conserved in humans? | yes (acceleration predicts mortality) |
| Replicated in humans? | yes (multiple independent cohorts; multiple second-generation clocks) |

### Multi-clock landscape: second and third generation clocks

First-generation clocks (Horvath 2013, Hannum 2013) were trained to predict chronological age. Second-generation clocks (**GrimAge**, **PhenoAge**) were trained to predict mortality and disease onset. Third-generation clocks (**DunedinPACE**) were trained to predict the longitudinal *rate* of biological change — the "pace of aging" — rather than absolute biological age.

These distinct training objectives produce distinct readouts. The practical consequence is documented in the CALERIE intervention data (see below): an intervention can move one clock without moving others. Whether this reflects biological reality (the intervention targets one aging sub-process but not others) or methodological artifact (confounding of methylation by caloric intake per se) is unresolved. See [[hypotheses/information-theory-of-aging]] (verified) § Notes/open questions for extended discussion.

---

## Mechanisms: how epigenetic information is lost

### 1. DNA methylation drift

CpG methylation patterns are maintained by DNMT3A/B (de novo methyltransferases) and DNMT1 (maintenance methyltransferase at replication forks), counterbalanced by TET1/TET2/TET3 demethylases. With age, stochastic errors in both maintenance and de novo methylation accumulate across cell divisions and even in post-mitotic cells, producing drift that erodes tissue-specific regulatory boundaries. The drift is not random — specific loci are consistently hyper- or hypomethylated across individuals and tissues — which is why clock algorithms can be trained.

### 2. SIRT1 decline and histone deacetylation loss

In mammals SIRT1 primarily deacetylates H3K9ac (Pal & Tyler 2016); H4K16ac is a secondary mammalian SIRT1 substrate but is the **primary** target of yeast Sir2 in the foundational replicative-aging system (Dang 2009 — see [[processes/histone-acetylation]] for the Sir2/Sas2/H4K16ac yeast lifespan axis). As cellular NAD+ declines with age (via CD38 upregulation, PARP hyperactivation, and reduced NAMPT salvage — see [[sirtuin]] verified), SIRT1 activity falls, acetylation marks accumulate, and heterochromatin erodes. See [[sirt1]] (verified) for the full substrate map and the SIRT1–NF-κB anti-inflammatory axis. See [[sirtuin]] (verified) for the NAD+ decline mechanism and the SIRT6-genome-integrity axis.

The ICE model (Inducible Changes to the Epigenome, Yang 2023) proposes that DNA double-strand break repair — by redistributing chromatin regulators including SIRT1 and HDAC1 away from their home loci — progressively erodes regulatory fidelity over time. This is the mechanistic heart of [[hypotheses/information-theory-of-aging]] (verified).

### 3. Chromatin compaction loss and transposable element de-repression

Loss of H3K9me3 at pericentromeric heterochromatin and transposable elements (LINEs, SINEs) allows their transcription and retrotransposition. This is both a consequence and a potential amplifier of genomic instability (see [[genomic-instability]]) — newly inserted elements can disrupt gene regulatory regions and trigger innate immune sensing (cGAS-STING activation from cytoplasmic retrotransposon RNA/DNA). #gap/unsourced — primary citations for transposable element de-repression in aged human tissues are needed for this page.

### 4. SIRT6 and genome maintenance

SIRT6 deacetylates H3K9ac and H3K56ac at double-strand break sites, facilitating DNA repair, and suppresses IGF-1 signaling at the chromatin level. SIRT6 knockout mice die at ~4 weeks with a degenerative aging-like syndrome; SIRT6 transgenic overexpression extended median lifespan ~15% in males (single study). See [[sirtuin]] (verified) for the SIRT6 section with appropriate gap flags. The overlap between epigenetic maintenance and genomic stability is mechanistically tight under this framework.

---

## The causal question: biomarker vs driver

The hallmark is well-established as a **correlate** of aging. The deeper question — whether epigenetic drift *causally drives* aging, or is a downstream readout of other damage processes — remains contested. This is the central empirical divide:

**Evidence that epigenetic changes are causal:**
- Yang 2023 ICE system: site-specific DSBs that mimic epigenetic disruption (without permanent sequence damage) accelerated epigenetic clock and produced age-related physiological changes in mice; OSK reprogramming reversed both — see [[hypotheses/information-theory-of-aging]] (verified) for n, design, and caveats.
- OSK partial reprogramming reverses functional aging phenotypes in mouse retinal ganglion cells (Lu 2020) — mechanism requires TET1/TET2 DNA demethylases — see [[hypotheses/information-theory-of-aging]] (verified).

**Evidence against a simple causal story:**
- Mendelian randomization using genetically-predicted epigenetic clock acceleration as an instrument found **null effects on lifespan** across four clocks (GrimAge, PhenoAge, HannumAge, IEAA) in human cohorts (Schooling 2025, n up to ~415,000 fathers / ~412,000 mothers). This challenges the interpretation that clock-acceleration is causally on the path from molecular damage to mortality — see [[hypotheses/information-theory-of-aging]] (verified). Note: Schooling 2025 is a 2025 paper with no citations as of 2026-05-04; treat as preliminary.
- Single-lab dominance: the strongest mechanistic evidence (ICE, Yang 2023; OSK retinal, Lu 2020) originates from the Sinclair laboratory; independent replication at the same systemic level is pending.

#gap/contradictory-evidence — causal vs biomarker interpretation is the defining open question for this hallmark. See [[hypotheses/information-theory-of-aging]] (verified) for the full evidence table and "what would update this hypothesis" section.

---

## Interventions targeting this hallmark

### Caloric restriction — slows DunedinPACE (human; limited)

Two-year CR in CALERIE (mean ~11.9% achieved restriction) significantly slowed the DunedinPACE epigenetic pace-of-aging clock (effect d=−0.25, p<0.003). However, PhenoAge and GrimAge showed no significant change in the same trial. See [[caloric-restriction]] (verified) and [[homo-sapiens]] (verified; Waziry 2023 n=197). The clock-divergence finding is a substantive complication — see the Waziry 2023 section in [[hypotheses/information-theory-of-aging]] (verified) for detailed interpretation.

| Dimension | Status |
|---|---|
| CR slows biological aging clocks in humans? | partial (DunedinPACE yes; PhenoAge/GrimAge NS in same trial) |
| Mechanism (sirtuin/mTOR/AMPK)? | conserved in humans (see [[caloric-restriction]] verified) |
| Replicated? | no independent replication of CR-DunedinPACE finding |

#gap/needs-replication — single trial; clock-divergence reduces confidence in the "CR slows epigenetic aging" interpretation.

### Partial reprogramming — restores youthful methylation (preclinical only)

OSK (Oct4, Sox2, Klf4) partial reprogramming via AAV delivery reverses epigenetic age and restores tissue function in mouse models (retinal ganglion cells: [[studies/lu-2020-osk-vision-restoration]]; systemic ICE reversal: [[studies/yang-2023-epigenetic-information-loss]]). Both Lu 2020 and Yang 2023 use **3-factor OSK** (NOT OSKMNL — OSKMNL is the [[studies/lapasset-2011-ipsc-senescent-rejuvenation|Lapasset 2011]] full-iPSC cocktail, distinct context). See [[hypotheses/information-theory-of-aging]] (verified) and [[partial-reprogramming]] (verified process page) for mechanism + honest caveats (single-lab; preclinical; teratoma risk in two-copy 4F mice; gene-copy-number is a key safety determinant per Ocampo 2016 verifier R31). #gap/needs-human-replication

### Sirtuins and NAD+ supplementation

SIRT1 and SIRT6 maintain histone deacetylation marks that preserve heterochromatin. Their activity depends on cellular NAD+ availability, which declines with age. NAD+ precursor supplementation (NMN, NR) is the primary clinical strategy to support sirtuin activity. See [[sirtuin]] (verified) for the NAD+ decline mechanism and NAD+ precursor human trial evidence (blood NAD+ raised; aging endpoints unproven). See [[sirt1]] (verified) for substrate interactions.

#gap/long-term-unknown — no human trial has demonstrated an aging endpoint from NAD+ precursor supplementation or sirtuin activation strategies.

### HDAC inhibitors

HDAC inhibitors are FDA-approved in oncology (vorinostat, romidepsin) for their ability to re-activate silenced tumor-suppressor genes. Their role in aging is theoretically relevant — deacetylation-loss is a feature of aged chromatin — but no aging clinical trial has been completed. Class I HDAC inhibitors risk disrupting protective heterochromatin; selectivity is a major challenge. #gap/long-term-unknown #gap/unsourced — primary citations needed for HDAC inhibitor use in aging contexts beyond oncology.

### Spermidine — EP300 inhibition and histone acetylation

Spermidine induces autophagy via inhibition of the acetyltransferase EP300, which normally acetylates H3K56 and autophagy regulators (ATG5, ATG7, ATG12, LC3). See [[spermidine]] (verified). The connection to the epigenetic-alterations hallmark is indirect — EP300 inhibition reduces histone acetylation and induces autophagy, which may clear protein aggregates and support cellular homeostasis, rather than directly restoring methylation patterns or heterochromatin. Cross-link to [[disabled-macroautophagy]] is more direct.

### Diet-driven methylation: folate and B12

One-carbon metabolism (folate, B12, methionine cycle) supplies the SAM (S-adenosylmethionine) methyl donor for DNMT-mediated DNA methylation. Deficiency of folate or B12 is associated with global DNA hypomethylation. This is a foundational biochemical link between dietary status and epigenetic maintenance, but the evidence that supplementation of folate/B12 at non-deficient baseline levels modulates epigenetic aging meaningfully is weak. #gap/unsourced — primary citations for folate/B12 supplementation effects on epigenetic clocks are needed.

---

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[epigenetic-alterations]])
  OR contains(target-hallmarks, [[epigenetic-alterations]])
SORT clinical-stage DESC
```

See [[frameworks/interventions-by-hallmark]] for the full matrix and gaps analysis. Partial reprogramming (OSK/OSKM) is the highest-potential frontier with zero clinical-stage representation as of R16.

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[hypotheses/information-theory-of-aging]] (verified) | **Central mechanistic hypothesis**: epigenetic information loss as causal driver of aging; OSK reprogramming as proposed reversal strategy |
| [[sirt1]] (verified) | Histone deacetylase; H3K9ac/H4K16ac; SIRT1 decline contributes to heterochromatin erosion |
| [[sirtuin]] (verified) | Pathway-level: NAD+ decline; SIRT6 genome maintenance; pharmacology |
| [[caloric-restriction]] (verified-partial) | CR slows DunedinPACE in CALERIE; epigenetic clock-divergence finding |
| [[homo-sapiens]] (verified) | Horvath 2013 clock (n=7,844); CALERIE Waziry 2023; epigenetic drift well-documented in human cohorts |
| [[caenorhabditis-elegans]] (verified-partial) | daf-2 loss-of-function affects chromatin state; no CpG methylation (different mechanism) |
| [[genomic-instability]] | DNA double-strand breaks trigger epigenetic redistribution of chromatin regulators (ICE model); the two hallmarks are mechanistically coupled under information theory |
| [[cellular-senescence]] | Senescent cells show aberrant methylation patterns; SASP partly driven by de-repressed repetitive elements triggering cGAS-STING |
| [[disabled-macroautophagy]] | Autophagy induction (by CR, spermidine) partly counteracts epigenetic dysregulation indirectly; EP300 is a shared node |
| [[deregulated-nutrient-sensing]] | mTOR/AMPK/sirtuin axis links nutrient sensing to NAD+ availability and SIRT1 activity |
| [[partial-reprogramming]] (verified) | OSK strategy for reversing epigenetic age; covers Lu 2020, Yang 2023, Ocampo 2016, Browder 2022 |
| [[cancer]] | Hypermethylation of tumor-suppressor CpG islands is a canonical oncogenic epigenetic mechanism; aging-associated drift predisposes |
| [[biomarkers/horvath-clock-2013]] | Pan-tissue 353-CpG clock; foundational observational evidence for this hallmark; null in CALERIE-2 CR intervention |
| [[biomarkers/hannum-clock-2013]] | Blood-specific 71-CpG clock; null in CALERIE-2 |
| [[biomarkers/phenoage-2018]] | Second-generation mortality-trained clock; null in CALERIE-2 |
| [[biomarkers/grimage-2019]] | Strongest mortality-prediction DNAm clock; null in CALERIE-2 |
| [[biomarkers/dunedinpace-2022]] | Pace-of-aging clock; the only clock that responded to CR in CALERIE-2; preferred intervention-trial endpoint |
| [[frameworks/biological-age-measurement]] | MOC comparing all epigenetic clock types; clock-divergence under interventions; reproducibility critique |

---

## Open questions and gaps

1. **Causal vs biomarker**: the most important unresolved question — is epigenetic clock acceleration a cause of functional aging decline, or a highly correlated biomarker of other damage processes? The ICE system (Yang 2023) provides the strongest available evidence for causality, but confounds remain and human evidence is lacking. Schooling 2025 MR is the strongest evidence against a simple causal model. See [[hypotheses/information-theory-of-aging]] (verified) for the full evidence balance. #gap/contradictory-evidence

2. **Clock-by-clock divergence**: different clocks (DunedinPACE vs GrimAge vs PhenoAge) respond differently to the same intervention (CR, CALERIE). This heterogeneity implies either biological reality (interventions modulate distinct aging sub-processes) or methodological bias (caloric intake per se confounds methylation-based clocks). Mechanistic explanation needed. #gap/contradictory-evidence

3. **Single-lab dominance**: the mechanistic evidence for epigenetic information loss as causal (ICE, Yang 2023; OSK reprogramming) derives primarily from the Sinclair laboratory. Independent replication at the systemic level is the highest-priority experimental need. #gap/needs-replication

4. **Teratoma risk and partial reprogramming safety**: partial reprogramming (OSK without c-Myc) is designed to avoid full dedifferentiation, but the safety window is tissue-specific and unstudied in humans. Clinical translation requires a Phase 1 safety dataset that does not yet exist. #gap/long-term-unknown

5. **Human mechanistic data gap**: all direct causal evidence for epigenetic information loss driving aging comes from mouse models (ICE, OSK retinal, LAKI partial reprogramming). No equivalent human study exists as of 2026-05-04. #gap/needs-human-replication

6. **Heterochromatin-transposable element axis**: the link between heterochromatin erosion, transposable element de-repression, cGAS-STING activation, and SASP-like inflammation with age is mechanistically compelling but poorly characterized in aged human tissue. Primary citations needed on this page. #gap/unsourced

7. **HDAC inhibitors in aging**: no aging-endpoint human trial data yet; class-level toxicity from disrupting protective heterochromatin is uncharacterized. #gap/long-term-unknown

---

## See also

- [[hallmarks-of-aging]] — parent framework MOC; all 12 hallmarks
- [[hypotheses/information-theory-of-aging]] (verified, FULL) — the central testable mechanistic hypothesis about this hallmark
- [[studies/horvath-2013-epigenetic-clock]] — stub; foundational clock paper (doi:10.1186/gb-2013-14-10-r115)
- [[studies/waziry-2023-calerie-epigenetic-clock]] — stub; CALERIE CR + DunedinPACE (doi:10.1038/s43587-022-00357-y)
- [[studies/yang-2023-epigenetic-information-loss]] — stub; ICE + OSK reversal (doi:10.1016/j.cell.2022.12.027)
- [[studies/schooling-2025-mr-epigenetic-clock-lifespan]] (verified R31b) — MR null result (doi:10.1186/s40246-025-00852-4)
- [[studies/lopez-otin-2013-hallmarks-of-aging]] — foundational hallmark framework paper

---

## Position in causal hierarchy

This hallmark is classified as **Proximal damage class** (mechanistic-tier: proximal / intervention-tractability: moderate). See [[frameworks/hallmark-causality-graph]] for the full hierarchy and intervention-sequencing argument.

Direct upstream nodes per `caused-by:` frontmatter: [[genomic-instability]] (DSBs redistribute chromatin regulators — ICE model); [[deregulated-nutrient-sensing]] (SIRT1 activity linked to NAD+ / nutrient-sensing axis).
Direct downstream nodes per `causes:` frontmatter: [[cellular-senescence]] (epigenetic drift → senescence entry; OSK reversal evidence), [[stem-cell-exhaustion]] (methylation drift at lineage loci drives HSC myeloid bias — Beerman 2010).
Edge evidence is in [[frameworks/causal-graph-data]].

---

[^horvath2013]: [[studies/horvath-2013-epigenetic-clock]] · n=7,844 non-cancer samples (82 datasets, 51 tissues/cell types) · observational (multi-tissue) · test-set MAE=3.6 yr · model: human tissues pan-age · doi:10.1186/gb-2013-14-10-r115 · local PDF available (via [[homo-sapiens]] verified)
