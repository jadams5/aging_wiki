---
type: study
doi: 10.1038/s41586-026-10542-3
pmid:
pmc:
title: "Universal transcriptomic hallmarks of mammalian ageing and mortality"
authors: [Tyshkovskiy A, Kholdina D, Davitadze M, Molière A, Moldakozhayev A, Tongu Y, Kasahara T, Glubokov D, Eames A, Kats LM, Vladimirova A, Ying K, Liu H, Zhang B, Khasanova U, Moqri M, Van Raamsdonk JM, Harrison DE, Strong R, Abe T, Dmitriev SE, Gladyshev VN]
year: 2026
journal: Nature
study-design: meta-analysis
publication-type: research-article
organism: multi-species
n-subjects: "11,165 transcriptomes (3,876 mouse + 663 rat + 2,623 crab-eating macaque + 4,003 human) across >25 tissues and 4 species; plus newly generated bulk RNA-seq (182 ITP-cohort mouse livers; 24 Klotho-KO/control kidney + skeletal muscle) and snRNA-seq (Klotho-KO vs control kidney + brain)"
intervention: ["[[caloric-restriction]]", "[[rapamycin]]", "[[in-vivo-partial-reprogramming-therapy]]", "[[heterochronic-parabiosis]]", "[[klotho]]"]
hallmarks-tested: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[mitochondrial-dysfunction]]", "[[epigenetic-alterations]]", "[[altered-intercellular-communication]]", "[[deregulated-nutrient-sensing]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [multi-species-transcriptomic-clocks, mortality-clock-outperforms-chronological, universal-mortality-genes-cdkn1a-gpnmb-lgals3, modular-architecture-of-mortality-hallmarks, module-specific-clocks, chronic-disease-accelerates-inflammatory-modules, cr-and-klotho-target-metabolic-modules, in-vitro-damage-recapitulates-mortality-signature, reprogramming-and-parabiosis-rejuvenate-tage, embryonic-ground-zero-u-curve, ukbiobank-plasma-mortality-validation, framingham-time-to-death-prediction, transcriptomic-dnam-clock-correlation]
local-pdf: null
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Main text (pp.1–14) and Methods (pp.16–24) read end-to-end from the user-provided PDF; all quantitative claims on this page cross-checked against main-text figures/captions (Figs 1–6) and Methods. Extended Data Figs (pp.25–55) and Supplementary Tables/Discussion were NOT exhaustively read — claims sourced from them are flagged inline. Author list transcribed from the PDF title page (not yet cross-checked against PubMed efetch; PMID/PMC not yet assigned at time of extraction). Canonical clock performance metrics taken from Fig 1j–p and Fig 2a captions."
literature-checked-through: 2026-05-29
---

# Universal transcriptomic hallmarks of mammalian ageing and mortality

**Tyshkovskiy A, Kholdina D, Davitadze M, Molière A, Moldakozhayev A, Tongu Y, Kasahara T, Glubokov D, Eames A, Kats LM, Vladimirova A, Ying K, Liu H, Zhang B, Khasanova U, Moqri M, Van Raamsdonk JM, Harrison DE, Strong R, Abe T, Dmitriev SE, Gladyshev VN · *Nature* · 2026 · DOI: 10.1038/s41586-026-10542-3 · received 1 Jul 2024, accepted 14 Apr 2026, published 27 May 2026 · open access**

## TL;DR

This is the most comprehensive multi-species transcriptomic-aging study to date: >11,000 transcriptomes from >25 tissues across **mouse, rat, crab-eating macaque and human** were integrated to build interpretable **transcriptomic clocks (tAge)** of chronological age, normalized age, **expected mortality** (Gompertz log-hazard) and **maximum lifespan**. The central conceptual advance is the **mortality clock**: unlike chronological-age clocks (largely insensitive to lifespan-extending interventions), mortality clocks integrate ageing-associated *and* intervention-modulating changes, robustly separating short- from long-lived models and predicting time-to-death in human blood comparably to second-generation DNA-methylation clocks while staying mechanistically interpretable.

Three genes — **`CDKN1A`/p21, `GPNMB`, `LGALS3`/galectin-3** — emerge as the most consistent up-regulated markers of mammalian ageing, mortality and disease, and their **plasma protein levels predict all-cause mortality and multimorbidity in UK Biobank** (n≈50,000 each). Network decomposition (WGCNA) resolves ageing/mortality into a **modular architecture** — inflammation, interferon signalling, mitochondrial function, chromatin modification, ECM organization — and **module-specific clocks** reveal that chronic diseases primarily accelerate *inflammatory* modules whereas caloric restriction and `Klotho` deficiency act on *metabolic/mitochondrial* modules. Damage models (replicative senescence, γ-irradiation, metabolic poisoning) raise tAge; rejuvenating manipulations (cell immortalization, partial reprogramming, heterochronic parabiosis, early embryogenesis) lower it.

## Why this matters for the wiki

This paper fills a structural gap: the wiki previously covered DNA-methylation clocks ([[horvath-clock-2013]], [[grimage-2019]], [[dunedinpace-2022]], [[phenoage-2018]]) and a proteomic clock ([[lehallier-proteomic-clock-2019]]) but had **no transcriptomic clock**. The clock family is now documented at [[transcriptomic-clock-tage]]. It also establishes [[gpnmb]] and [[lgals3]] as first-class aging-biology entities and provides a quantitative, pathway-resolved framework for ranking interventions by *which subsystem* they rejuvenate — directly serving the wiki query "what interventions target [hallmark]?" at module resolution.

## Study design

A hybrid of (1) **newly generated RNA-seq** and (2) a large **computational meta-analysis**:

- **New bulk RNA-seq** — livers from the NIA [[interventions/pharmacological/itp|Interventions Testing Program]] (ITP) UM-HET3 mice: 170 old (22-month) males + females across **20 ITP interventions**, plus 12 young (4–6 month) controls; 182 total liver samples after QC.[^itp-design] Kidney + gastrocnemius skeletal muscle from 6 [[klotho]]-KO + 6 age-matched C57BL/6J controls.
- **New snRNA-seq** — kidney + brain from one 8-week control and one age-matched `Klotho`-KO mouse.
- **Meta-dataset** — published transcriptomes + survival data aggregated to **4,539 rodent samples across 96 data sources, 26 tissues, 79 interventions** (mouse + rat), plus **2,623 crab-eating macaque** (>30 tissues) and **4,003 human** (brain, blood, skeletal muscle, skin) samples — **11,165 samples across 4 species** total.[^meta-scale]

Mortality was estimated by fitting **Gompertz models** (μ(t)=Ae^{rt}) to cohort/strain/sex/intervention-specific survival curves, then computing each sample's expected log-hazard rate from its chronological age and experimental group; normalized age = chronological age ÷ expected maximum (99.9th-percentile) lifespan.

## Key findings

### 1. Transcriptomic clocks: chronological, mortality, lifespan, module-specific

Elastic-net (interpretable, sparse) and Bayesian-ridge (uncertainty-quantified) models were trained. Performance:

| Clock | Cohort | Performance |
|---|---|---|
| Rodent chronological (multi-tissue) | held-out | R²=0.88, r=0.94 |
| Rodent **relative** chronological (reference-centred) | held-out | median R²=0.92, r=0.96 |
| Multi-species chronological | LOFO cross-validation, all 4 species | **r=0.952** — comparable to the pan-mammalian DNAm clock (r=0.953)[^panmammal] |
| Multi-species **mortality** clock | macaque test | r=0.91, R²=0.84 |
|  | human test | r=0.94, R²=0.86 |
|  | mouse test | r=0.96, R²=0.93 |
|  | rat test | r=0.92, R²=0.85 |

~9,059–9,167 genes were associated with both chronological age and expected mortality (P_adj<0.05); 3,098–4,439 genes with maximum lifespan and mortality after adjusting for age — indicating systemic, multi-gene regulation of longevity.[^geneassoc] Tissue-specific and single-mouse-tissue clocks performed comparably (r=0.94–0.982), so integrating tissues does not degrade accuracy.

The **chronological clock was largely insensitive to lifespan-extending interventions**, whereas **normalized-age and mortality clocks captured both ageing *and* intervention effects** — the mortality clock discriminated lifespan-modulating models better than a dedicated "lifespan clock," arguing that integrating ageing + intervention information yields the best molecular health biomarker.

### 2. Universal ageing/mortality genes

Conserved **up-regulated** with age/mortality (down with lifespan): **`Cdkn1a`/p21** (p53-pathway cell-cycle inhibitor), **`Gpnmb`** (inflammation-associated glycoprotein), **`Lgals3`**/galectin-3, `Cst7` (cystatin F), `S100a6`/`S100a8`/`S100a4`, `Casp1`, `Eda2r`, `Vsig4`. Conserved **down-regulated**: `Sparc` (ECM synthesis/wound-healing regulator), `Nrep`, `Col1a1`, `Col3a1` (regenerative capacity). `Igf1` (canonical longevity regulator) declined with age and was negatively associated with lifespan; `Fmo3` increased; `Nmrk1` (NAD⁺ biosynthesis), `Gpx1` (glutathione peroxidase) were pro-longevity; `Ddost` (AGE processing) was negatively associated with lifespan.[^genes]

GSEA: lifespan-positive/ageing-negative pathways included oxidative phosphorylation, mitochondrial biogenesis, xenobiotic and fatty-acid metabolism; interferon signalling and haemostasis showed the opposite (pro-ageing/pro-mortality) pattern.

### 3. Modular architecture of ageing & mortality hallmarks

WGCNA yielded **28 robust rodent co-expression modules** (15 multi-species), reproducible across sexes. After filtering, **23 rodent + 14 multi-species module-specific clocks** were retained. Modules cluster into immune (inflammation, interferon, T-cell — positively associated with age/mortality, negatively with lifespan) versus metabolic (oxidative phosphorylation, lipid metabolism — opposite). Heat-stress-response, translation/ribosome and ECM/EMT modules showed **co-directional (adaptive/compensatory)** correlations, and protein-processing/ER + mTOR-signalling modules associated with *longevity* but not chronological age — i.e., some lifespan regulation is partly independent of chronological ageing.

### 4. Module clocks reveal *which subsystem* each perturbation hits

- **Chronic diseases** (AD/5xFAD, CKD, ischaemic stroke, NASH, diabetic nephropathy; 9 rodent datasets) accelerated mortality tAge in nearly all models, with the **largest and most consistent effects in inflammation/interferon modules**. **HCC was the exception** — *lower* mortality tAge (tumour dedifferentiation/"youth-like" ECM + cell-cycle programmes) alongside up-regulated inflammatory/p53 signalling.[^disease]
- **Caloric restriction** *reduced* mortality tAge, strongest in **metabolic modules** (haem/ROS, lipid/PPAR, cholesterol/mTOR).[^cr]
- **`Klotho`-KO progeria** accelerated tAge via **energy-metabolism + NRF2** modules (not inflammation — immune modules were *down*-regulated), showing this progeroid model drives metabolic, not inflammatory, molecular ageing. `Cdkn1a` was up in both kidney and muscle.[^klotho]
- **LPS** neuroinflammation raised tAge most in immune modules.

### 5. Damage models raise tAge; rejuvenation lowers it

- **Replicative senescence** (human primary fibroblasts + WI-38): tAge rose with passage, *preceding* overt phenotype; `CDKN1A` a top contributor. **hTERT overexpression** prevented senescence and abolished the tAge rise.
- **γ-irradiation (20 Gy)** raised tAge in mouse *and* naked-mole-rat embryonic + skin fibroblasts; **oligomycin and 2-DG** (metabolic stressors) raised tAge.
- Notably, **DNA-methylation age was *not* changed by γ-irradiation or hTERT** — transcriptomic clocks capture more dynamic, damage-associated states while DNAm captures longer-term stochastic change (complementary modalities).
- **iPSC reprogramming** lowered tAge (rejuvenation), strongest in the **EMT/MET** module.
- **Heterochronic parabiosis** (old partners): mortality tAge fell after 2 months; top contributor `Nrep`; `Cdkn1a` and `Vcam1` down.
- **Embryogenesis**: U-shaped tAge with a minimum ("ground zero") around **E10**, a systemic rejuvenation phase E8.5–E15; `Cdkn1a`, `S100a8/9`, `Lgals3` down to E10 then up. Supports the [[information-theory-of-aging|"ground zero"]] reset concept at the transcriptomic level.

### 6. Human translation

- **UK Biobank plasma proteomics** (Olink, >50,000 participants): **GPNMB (n=50,117), CDKN1A (n=51,276), LGALS3 (n=51,647)** protein concentrations were positively associated with **all-cause mortality and a broad multimorbidity spectrum** (cardiac arrest, heart failure, liver cirrhosis, diabetes, kidney failure, depression, atherosclerosis, sleep disorders).
- **Framingham Heart Study**: transcriptomic mortality clocks predicted **time-to-death** in blood (RNA-seq n=3,698) comparably to second-generation DNAm clocks (DunedinPACE, YingDamAge, PhenoAge) and outperformed first-generation transcriptomic chronological clocks; transcriptomic and DNAm clock outputs were positively correlated after age/sex adjustment, **strongest for the chromatin-modification module clock** ↔ epigenetic clocks, hinting at a mechanistic DNAm↔chromatin link.
- Human disease tissue (Crohn's, ulcerative colitis, CKD, AD, heart failure): mortality tAge acceleration after age/sex adjustment.

## Resources

- **TACO** — Transcriptomic Age Calculator Online: https://app.gladyshevlab.org/TACO/
- **tAge** R package; trained clock weights on Zenodo (doi:10.5281/zenodo.18763485).

## Extrapolation to humans

| Dimension | Status |
|---|---|
| Signature conserved in humans? | **yes** — gene- and pathway-level ageing signatures conserved mouse→rat→macaque→human; cross-species chronological clock r=0.952 |
| Mortality prediction in humans? | **yes** — Framingham blood time-to-death + UK Biobank plasma all-cause mortality |
| Intervention effects validated in humans? | **partial** — CR/reprogramming/parabiosis effects shown in rodents/cells; human intervention-response of tAge not yet tested in an RCT #gap/needs-human-replication |

## Limitations & open questions

- Mortality-clock training depends on Gompertz survival fits per cohort/strain/sex/intervention; quality varies with the underlying survival data.
- Human data are blood/skin/brain/muscle-weighted; macaque and human lack the tissue breadth of the rodent meta-dataset.
- Causality is associational at the clock level; the UK Biobank protein associations are observational (Cox models adjusted for age/sex), not Mendelian-randomized. #gap/no-mechanism
- Whether transcriptomic tAge *responds to intervention in a human RCT* (as DunedinPACE did to CR in CALERIE-2) is untested. #gap/needs-human-replication

## Related pages

- [[transcriptomic-clock-tage]] · [[gpnmb]] · [[lgals3]] · [[p21]] · [[cst7]] · [[eda2r]] · [[vsig4]] · [[s100a8-s100a9]] · [[klotho]] · [[igf-1]]
- [[caloric-restriction]] · [[in-vivo-partial-reprogramming-therapy]] · [[heterochronic-parabiosis]] · [[information-theory-of-aging]] · [[chronic-inflammation]]
- Species: [[model-organisms/macaca-fascicularis]] (crab-eating macaque — the primate arm of this study)
- Methods used: [[methods/wgcna]] (module discovery) · [[methods/single-cell-rna-seq]] (Tabula Muris Senis + Klotho-KO snRNA-seq, via metacells)
- Conserved down-regulated regenerative genes: [[sparc]] · [[nrep]] · [[col1a1]] · [[col3a1]]
- Companion comparative-transcriptomics work from the same lab: [[model-organisms/balaena-mysticetus]] (Tyshkovskiy 2023, 41-species longevity signatures)

[^itp-design]: ITP interventions profiled (livers): 17-DMAG, b-GPA, minocycline, mitoQ, rapamycin, canagliflozin, candesartan cilexetil, geranylgeranyl acetone, 17-α-oestradiol, MIF098, nicotinamide riboside, 1,3-butanediol, captopril, leucine, PB125, sulindac, syringaresinol, and rapamycin+acarbose combinations. The intervention panel deliberately spanned survival-neutral, detrimental, and beneficial compounds (some sex-specific, e.g. 17-α-oestradiol and canagliflozin act in males). · model: UM-HET3 mice, 22–23 months · this study (newly generated RNA-seq)
[^meta-scale]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=11,165 transcriptomes (3,876 mouse + 663 rat + 2,623 crab-eating macaque + 4,003 human) · meta-analysis + new in-vivo RNA-seq · model: mouse/rat/macaque/human, >25 tissues
[^panmammal]: Comparison benchmark is the Lu et al. 2023 pan-mammalian DNA-methylation clock (r=0.953 across species); the multi-species transcriptomic chronological clock here reached r=0.952. · model: cross-species
[^geneassoc]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · linear mixed-effects models on the aggregated meta-dataset · P_adj<0.05 · model: rodent meta-dataset (n=4,539)
[^genes]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · elastic-net clock coefficients + mixed-effects gene-trait associations · model: multi-tissue rodent + multi-species. Direction stated relative to ageing/mortality (up) vs maximum lifespan (down) unless noted.
[^disease]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · 9 rodent disease datasets, module-specific mortality clocks · ANOVA, P_adj<0.05 · model: mouse/rat disease models (AD-5xFAD, CKD, ischaemic stroke, NASH, diabetic nephropathy, HCC). Gpnmb/Cdkn1a/Lgals3 up in ≥5 of the models.
[^cr]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=8 caloric-restriction datasets, LODO framework · mixed-effects · model: mouse liver (C57BL/6J, DBA/2J, B6C3F1)
[^klotho]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=6 Klotho-KO + 6 controls per tissue (bulk) + paired snRNA-seq · mixed-effects/ANOVA · model: C57BL/6J Klotho-KO kidney, skeletal muscle, brain. Klotho deficiency limits maximum lifespan to ~4–5 months.
