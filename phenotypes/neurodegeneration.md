---
type: phenotype
aliases: [neurodegenerative diseases, neurodegenerative disorders, NDDs]
icd-10: null   # overview category; covers G20 (PD), G30 (AD), G35 (MS), G10 (HD), G12 (ALS), and others
icd-11: null   # covers 8A00–8E5Z range across multiple chapters; see disease-taxonomy table
affected-tissues: ["[[brain]]", "[[spinal-cord]]"]
underlying-hallmarks:
  - "[[loss-of-proteostasis]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[disabled-macroautophagy]]"
  - "[[chronic-inflammation]]"
  - "[[cellular-senescence]]"
  - "[[stem-cell-exhaustion]]"
typical-onset: "60+ for most sporadic forms; juvenile or early-onset for some genetic forms (e.g., juvenile ALS, Huntington's disease)"
prevalence-65plus: "~10–15% combined for AD + PD + other NDDs in adults 65+ (estimates vary widely by geography and diagnostic criteria)"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hara 2006 (nature04724) and Komatsu 2006 (nature04723): Cre driver, inclusion body type, survival outcome verified against full-text PDFs. Wong & Cuervo 2010 (nn.2575): all three NDD-specific CMA/autophagy claims verified against full text. Bouzid 2023 (s41591-023-02397-2): OR=0.64 and P=3.8e-5 confirmed; n corrected from wrong >47,000 to 5,730 (1,362 AD + 4,368 controls) via published abstract; main-text full text not readable (supplementary file only). van Dyck 2023 (NEJMoa2212948): CDR-SB primary endpoint and ARIA rates verified against full text; ARIA-E corrected from wrong ~21% to 12.6%; ARIA-H corrected from wrong ~35% to 17.3%; combined ARIA-E or ARIA-H 21.5% added. Hartl 2011 and Lin & Beal 2006: not_oa, unverifiable — claims are consensus-level. DiSabato 2016: full text unavailable (no PMC URL) — neuroinflammation claims tagged #gap/no-fulltext-access. Latent-viral-reactivation note (shared mechanistic feature §6) added 2026-06-07 from YouTube-lead ingest; effect sizes cross-confirmed against PMC summaries + secondary sources, full content + primary-PDF verification deferred to [[alzheimers-disease]] (abstract/summary-level, pending verifier PDF pass)."
---

# Neurodegeneration (overview)

Age-associated neurodegenerative diseases (NDDs) are a heterogeneous group of chronic, progressive disorders characterized by selective loss of neurons and/or glial cells in the CNS and/or peripheral nervous system. They share a common epidemiological signature — **incidence rises steeply and approximately exponentially with age** — and a common mechanistic substrate: the convergence of multiple [[hallmarks-of-aging]] in post-mitotic cells with limited regenerative capacity. This page is an **overview and category page**; see [[alzheimers-disease]] and [[parkinsons-disease]] for disease-specific content.

## Disease taxonomy

| Disease | Abbrev. | Aggregating protein | Main affected cell types | ICD-10 | Typical onset |
|---|---|---|---|---|---|
| Alzheimer's disease | AD | Amyloid β (extracellular plaques); tau (intraneuronal NFTs) | Cortical pyramidal neurons; hippocampal CA1/entorhinal neurons | G30 | Sporadic: 65+; EOAD/familial: 40s–50s |
| Parkinson's disease | PD | α-synuclein (Lewy bodies / Lewy neurites) | Dopaminergic neurons, substantia nigra pars compacta | G20 | Sporadic: 60+; genetic (LRRK2/PINK1/Parkin): variable |
| Amyotrophic lateral sclerosis | ALS | SOD1; TDP-43 (most common); FUS; C9orf72 dipeptide repeats | Upper + lower motor neurons (spinal cord + motor cortex) | G12.2 | 50s–70s (sporadic); earlier in familial |
| Huntington's disease | HD | Huntingtin (polyQ expansion >36 repeats) | Medium spiny neurons, caudate-putamen striatum | G10 | Typically 30s–50s (CAG-length-dependent) |
| Frontotemporal dementia | FTD | Tau (FTD-tau / Pick's) or TDP-43 (FTD-TDP); FUS (rare) | Frontal + temporal lobe pyramidal neurons; von Economo neurons | G31.0/G31.09 | 45–65 (earlier than AD) |
| Prion diseases | CJD/GSS/FFI | PrP^Sc (misfolded prion protein) | Neurons (widespread); astrocytes | A81/G31.82 | Variable; sporadic CJD: ~65; familial: variable |
| Multiple system atrophy | MSA | α-synuclein (glial cytoplasmic inclusions) | Oligodendrocytes; autonomic neurons; cerebellar | G23.3 | 50s–60s |
| Progressive supranuclear palsy | PSP | Tau (4R tauopathy) | Subthalamic nucleus; substantia nigra; globus pallidus | G23.1 | 60+ |
| Corticobasal degeneration | CBD | Tau (4R tauopathy) | Cortical + basal ganglia neurons | G31.85 | 60+ |
| Dementia with Lewy bodies | DLB | α-synuclein (cortical + limbic Lewy bodies) | Cortical neurons; cholinergic neurons | G31.83 | 70s |

## Shared mechanistic features

Despite their clinical and genetic diversity, all NDDs share a recognizable mechanistic core. These shared features make neurodegeneration a tractable target for cross-disease aging biology.

### 1. Protein aggregation as a universal feature

Every NDD is defined by the accumulation of a disease-specific protein in an aggregated, misfolded conformation. The specific protein differs per disease (see taxonomy table), but the underlying failure — the collapse of the [[loss-of-proteostasis|proteostasis]] network — is common to all [^hartl2011].

The healthy proteostasis network spans synthesis (ribosomes, co-translational chaperones), folding (HSP70/HSP90/chaperonin systems), disaggregation (HSP100/AAA-ATPases), and degradation (UPS via [[ubiquitin-proteasome-system]]; [[autophagy]]; [[chaperone-mediated-autophagy]]). Aging erodes all three limbs of this network simultaneously:

- Chaperone capacity declines with age; heat-shock response is blunted [^hartl2011] #gap/needs-human-replication.
- [[autophagy|Macroautophagy]] flux decreases with age (mTOR hyperactivation, beclin-1 decline) — see [[disabled-macroautophagy]].
- [[chaperone-mediated-autophagy]] (CMA) substrate delivery slows due to reduced LAMP-2A receptor availability on lysosomes with age — reviewed on the [[chaperone-mediated-autophagy]] page.
- Proteasome activity decreases in aged brain (multiple studies; see [[loss-of-proteostasis]]) #gap/unsourced.

| Dimension | Status |
|---|---|
| Protein aggregation in aging conserved in humans? | yes |
| Proteostasis decline conserved in humans? | yes |
| Replicated in intervention trials? | partially (rapamycin/caloric restriction modulate autophagy; no trial has reversed neurodegeneration via proteostasis alone) |

### 2. Autophagy failure — the foundational genetic proof

The clearest genetic evidence that basal autophagy is **essential** for neuronal homeostasis comes from two landmark conditional knockout studies:

- Neuron-specific **Atg5** deletion (nestin-Cre; Atg5^flox/flox × nestin-Cre; constitutive neuronal) causes progressive motor deficits and the accumulation of ubiquitin-positive inclusion bodies throughout the brain, beginning within weeks and resulting in neurodegeneration — even in the absence of any disease-associated aggregate protein [^hara2006]. This is verified on the [[lc3]] page.
- Neuron-specific **Atg7** deletion produces an identical phenotype: progressive motor/behavioral deficits and diffuse ubiquitin-positive inclusions, establishing that basal autophagic turnover is required for baseline neuronal health [^komatsu2006]. This is verified on the [[atg7]] page.

These are **THE founding genetic experiments** demonstrating that loss of macroautophagy alone — absent any NDD-specific mutation — is sufficient to cause neurodegeneration. They directly link [[disabled-macroautophagy]] (a hallmark of normal aging) to NDD pathogenesis.

In the context of specific NDDs, autophagy failure is compounded by disease-specific interactions:

- **PD**: mutant α-synuclein inhibits CMA by occupying the LAMP-2A receptor [^wongcuervo2010] #gap/needs-replication.
- **AD**: autophagic vacuoles accumulate in dystrophic neurites and are a major source of amyloid β production [^wongcuervo2010].
- **HD**: polyQ huntingtin is selectively degraded by CMA; disease-length expansions block CMA [^wongcuervo2010].

| Dimension | Status |
|---|---|
| Autophagy requirement for neuronal survival conserved in humans? | yes (inferred from Atg5/7 KO; ALS TDP-43 models) |
| Autophagy defects in human NDD tissue? | yes (electron microscopy of AD/PD brain; ALS motor neurons) |
| Therapeutic autophagy induction in human NDD? | in-progress (rapamycin trials; no approved NDD autophagy therapy) |

### 3. Mitochondrial dysfunction

Mitochondrial pathology is prominent across the NDD spectrum [^linbeal2006]:

- **PD** has the most direct link: Complex I deficiency was identified in PD substantia nigra decades ago; MPTP toxicity (Complex I inhibitor) recapitulates nigrostriatal degeneration; and the PINK1/Parkin pathway — mutations in which cause familial PD — is the canonical mitophagy quality-control axis (see [[mitophagy]] and [[parkin]] pages).
- **AD**: mitochondrial membrane potential decline; cytochrome c oxidase deficits; increased ROS in hippocampal and cortical neurons; amyloid β disrupts mitochondrial dynamics.
- **ALS**: mutant SOD1 mislocalizes to mitochondria; TDP-43 and FUS regulate mitochondrial mRNA; mitochondrial fragmentation is an early feature.
- **HD**: polyQ huntingtin disrupts PGC-1α (master mitochondrial biogenesis regulator), causing striatal energy deficit.

With age, mtDNA somatic mutation burden increases in neurons (post-mitotic, no dilution by replication), and [[mitophagy]] declines as PINK1/Parkin axis is partially impaired. This creates a vicious cycle: impaired mitophagy → dysfunctional mitochondria persist → increased ROS → further mtDNA damage → more aggregate-prone proteins.

| Dimension | Status |
|---|---|
| Mitochondrial dysfunction in human NDD? | yes (direct measurements in post-mortem brain) |
| PINK1/Parkin pathway conserved in humans? | yes |
| Mitochondria-targeted therapy effective in human NDD? | no (multiple trials failed; elamipretide in Barth syndrome ongoing) |

### 4. Neuroinflammation

The brain is not immunologically inert: [[microglia]] are resident CNS immune cells, and their activation state shifts dramatically with both aging and NDD. The key actors:

**Microglia**: In normal aging, microglia transition toward a dystrophic/senescent state with reduced surveillance capacity. In NDD, microglia adopt **disease-associated microglia (DAM)** transcriptional states — TREM2-dependent phagocytic states that attempt aggregate clearance but at the cost of releasing inflammatory mediators [^disabato2016]. TREM2 loss-of-function variants (R47H OR ~4.5, Guerreiro 2013 — verified on [[microglia]] page) substantially increase AD risk, implicating defective microglial clearance in disease progression.

**Astrocytes**: Reactive astrogliosis releases complement components (C1q, C3), cytokines, and SASP-like factors. Senescent astrocytes contribute a chronic low-grade neuroinflammatory milieu.

**Complement**: C1q deposits on synapses in the aging brain and in AD/PD, tagging them for microglial-mediated elimination — contributing to the synaptic loss that parallels cognitive decline #gap/needs-replication.

**SASP linkage**: Senescent cells accumulate in the aging CNS (senescent astrocytes, oligodendrocytes, microglia). Their SASP promotes a pro-inflammatory environment that accelerates neuronal vulnerability — see [[cellular-senescence]] and [[sasp]].

| Dimension | Status |
|---|---|
| Microglial neuroinflammation in human NDD? | yes (PET imaging + post-mortem; TREM2 GWAS) |
| SASP-driven neuroinflammation in humans? | partial (senescent astrocytes shown in aging human brain; causal contribution contested) |
| Anti-inflammatory therapy effective in human NDD? | limited (CANTOS showed reduced stroke risk; no approved NDD neuroinflammation therapy) |

### 5. Selective neuronal vulnerability

A striking and incompletely explained feature of NDDs is that only specific neuronal populations are preferentially affected, despite systemic aging and widespread proteostasis decline:

- **AD**: hippocampal CA1 and entorhinal layer II neurons first (Braak staging); then broadly cortical.
- **PD**: dopaminergic neurons of the substantia nigra pars compacta preferentially — thought to relate to high metabolic demand, dopamine oxidation chemistry, and long unmyelinated axonal arbors requiring high mitochondrial density.
- **ALS**: motor neurons (upper + lower). Notably, sensory neurons largely spared.
- **HD**: medium spiny neurons of the striatum (caudate + putamen), particularly the indirect pathway.

The cellular features that confer vulnerability are not yet unified into a single model #gap/no-mechanism. Contributing factors include: high metabolic demand, long unmyelinated axonal arbors, calcium influx kinetics, proximity to dopamine oxidation products, and low basal autophagy flux rates relative to aggregate production rates.

### 6. Latent viral reactivation (emerging risk modifier)

A long-marginal idea — that latent neurotropic viruses contribute to sporadic neurodegeneration — has gained traction since 2024. The **antimicrobial-protection hypothesis** recasts amyloid-β as an innate-immune effector, with chronic/recurrent CNS infection (rather than the aggregate itself) as a proximal driver of sporadic AD [^vojtechova2022]. The strongest support is quasi-experimental: a regression-discontinuity natural experiment in Wales found that herpes-zoster (shingles) vaccine eligibility causally reduced new dementia diagnoses, with the effect concentrated in women [^eyting2025nd]. Because varicella-zoster virus (VZV) causes both direct astrocytic amyloidogenesis and cerebral vasculopathy, the mechanism plausibly spans **both** AD and **vascular dementia** — the wiki does not yet have a dedicated vascular-dementia page (#stub candidate). Candidate pathogens beyond VZV include HSV-1, *P. gingivalis*, and *C. pneumoniae*; causation is not established and the vaccine benefit may instead reflect non-specific trained immunity. Full evidence, effect sizes, and caveats live on [[alzheimers-disease]] § Infectious hypothesis. #gap/no-mechanism

## Aging biology of neurodegeneration

### Exponential incidence with age

The most striking epidemiological feature of NDDs is their steep age-dependence. AD doubles in prevalence roughly every five years after age 65; PD incidence increases similarly. This pattern suggests that aging biology — rather than a single disease-causing mutation — is the primary permissive factor for most sporadic NDD. Even familial forms (which carry highly penetrant mutations) manifest decades after birth, implying that the aging cellular milieu is permissive for phenotypic expression.

### Genetic risk architecture

Major common-variant genetic risks for NDDs are tightly linked to hallmarks:

- **APOE ε4** — strongest common-variant AD risk (OR ~3.7 heterozygous / ~12 homozygous vs ε3/ε3); mechanisms include cholesterol transport, amyloid clearance, tau propagation, and microglial lipid metabolism.
- **TREM2 R47H** — AD OR ~4.5; impairs microglial phagocytosis (see [[microglia]] page, verified).
- **LRRK2 G2019S** — most common familial PD variant; gain-of-function kinase; disrupts autophagy and vesicular trafficking.
- **GBA1 variants** — second most common PD genetic risk; encodes glucocerebrosidase; LoF impairs lysosomal function → α-synuclein accumulation (direct link proteostasis ↔ NDD).

### Clonal hematopoiesis (CHIP) and AD risk

A surprising finding from a multi-cohort meta-analysis (n = 5,730 total: 1,362 with AD dementia; 4,368 controls): CHIP — the age-associated clonal expansion of hematopoietic stem cells carrying somatic mutations in DNMT3A, TET2, ASXL1 etc. — is associated with **reduced** AD dementia risk (meta-analysis OR = 0.64, P = 3.8 × 10^-5) [^bouzid2023]. Mendelian randomization analyses supported a potential causal association. The same CHIP mutations were detected in microglia-enriched brain fractions in 7 of 8 CHIP carriers examined, and single-nucleus chromatin profiling showed mutated cells comprised a large proportion of the microglial pool. The counterintuitive protective association aligns with the observation that CHIP may alter microglial function or amyloid clearance via myeloid cells. Mechanism unclear #gap/no-mechanism.

### Somatic mosaicism

Post-mitotic neurons accumulate somatic mutations throughout life — including retrotransposon insertions, copy-number variants, and point mutations. Rates are higher in NDD-affected brain regions than age-matched controls in some studies. Whether this drives vulnerability or is a consequence of neuronal stress remains unsettled #gap/contradictory-evidence.

## Translational landscape

| Disease | Approved mechanism-targeting therapy | Stage | Notes |
|---|---|---|---|
| AD | Lecanemab (anti-Aβ antibody) | FDA-approved (2023, accelerated; full approval 2024) | CDR-SB 1.21 vs 1.66 (diff −0.45, 95% CI −0.67 to −0.23, P<0.001) at 18 mo; ~27% less decline vs placebo [^lecanemab2023]; ARIA-E 12.6% vs 1.7% placebo; ARIA-H 17.3% vs 9.0% placebo; infusion reactions 26.4%; early-stage only (MCI + mild dementia, Aβ-confirmed) |
| AD | Donanemab (anti-Aβ antibody) | FDA-approved (2024) | TRAILBLAZER-ALZ 2; tau PET sub-group analysis |
| PD | Levodopa/carbidopa | Established (symptomatic) | Does not halt progression; dopamine replacement |
| PD | GDNF / gene therapy | Phase 1/2 (various) | Neuroprotective strategy; no approved disease-modifying therapy |
| ALS (SOD1-ALS) | Tofersen (ASO against SOD1 mRNA) | FDA-approved (2023, accelerated) | Reduces CSF neurofilament light; functional benefit modest |
| SMA (SMN1 deficiency) | Risdiplam / nusinersen / onasemnogene | FDA-approved | SMN exon-7 splicing correction / SMN2 upregulation / gene replacement |
| HD | Huntingtin-lowering (ASOs, RNAi) | Phase 2/3 (multiple) | Lowering mutant HTT is the goal; trial results mixed |
| Prion diseases | — | No approved therapy | Anle138b (Phase 1); quinacrine failed |

**Key gap**: No NDD has an approved therapy that demonstrably halts neuronal loss. Lecanemab/donanemab represent the first anti-amyloid antibodies showing statistically significant (if modest) clinical benefit, but effect sizes are small and the disease-modification debate continues. #gap/long-term-unknown

## Hallmark mapping

Neurodegeneration is the **ultimate integrative phenotype** of brain aging — converging all hallmarks that disproportionately affect post-mitotic, high-metabolic neurons:

| Hallmark | NDD connection |
|---|---|
| [[loss-of-proteostasis]] | Universal: aggregation of disease-specific proteins; chaperone and UPS decline |
| [[disabled-macroautophagy]] | Genetic proof (Atg5/Atg7 KO); CMA impairment in PD/AD/HD |
| [[mitochondrial-dysfunction]] | PINK1/Parkin PD axis; Complex I; energy deficit in HD; mtDNA burden |
| [[chronic-inflammation]] | DAM microglia; reactive astrogliosis; complement-mediated synapse elimination |
| [[cellular-senescence]] | Senescent astrocytes/oligodendrocytes/microglia; SASP neuroinflammation |
| [[stem-cell-exhaustion]] | Neural stem cell (NSC) proliferative decline in hippocampal neurogenesis; oligodendrocyte precursor aging |
| [[genomic-instability]] | Somatic mosaicism in neurons; retrotransposon de-repression |
| [[epigenetic-alterations]] | Epigenetic clocks accelerated in AD brain; repeat-element de-repression |

## Related pages

- **Disease-specific pages (seeded R8a):** [[alzheimers-disease]], [[parkinsons-disease]]
- **Key molecular mediators:** [[microglia]], [[atg7]], [[lc3]], [[chaperone-mediated-autophagy]], [[mitophagy]], [[parkin]], [[p62]]
- **Hallmarks:** [[loss-of-proteostasis]], [[mitochondrial-dysfunction]], [[disabled-macroautophagy]], [[chronic-inflammation]], [[cellular-senescence]]
- **Processes:** [[autophagy]], [[mitophagy]], [[chaperone-mediated-autophagy]]
- **Implicit stubs (wikilinks to pages not yet seeded):** [[tau]], [[alpha-synuclein]], [[sod1]], [[tdp-43]], [[huntingtin]], [[trem2]], [[pink1]], [[ubiquitin-proteasome-system]], [[neural-stem-cells]], [[unfolded-protein-response]]

## Limitations and gaps

- **This page does not duplicate disease-specific content.** Mechanism depth for AD, PD, ALS, and HD belongs on their dedicated pages. #stub risk for specific-disease content if those pages are not seeded.
- **Prion biology is understated.** PrP^Sc templating, spongiform vacuolation, and transmissibility are unusual features not shared with other NDDs; a dedicated page would be warranted.
- **MSA/PSP/CBD are listed but not developed.** No dedicated pages exist; content is summary-level only. #gap/unsourced for specific mechanistic claims about these rarer synucleinopathies/tauopathies.
- **Causal direction of neuroinflammation vs neurodegeneration is unresolved.** In most NDDs it is unclear whether neuroinflammation causes neuronal loss or is a downstream response to dying neurons. #gap/contradictory-evidence
- **Effect size of autophagy-inducing therapies on human neurodegeneration is unknown.** The Atg5/Atg7 KO experiments are mouse models; clinical translation of autophagy enhancement remains preclinical. #gap/needs-human-replication
- **Bouzid 2023 CHIP-AD association is surprising and mechanism-free.** Protective CHIP effect on AD is provocative but OR confidence intervals are wide; mechanism is speculative. #gap/no-mechanism #gap/needs-replication

## Footnotes

[^hartl2011]: [[studies/hartl-2011-proteostasis-review]] · doi:10.1038/nature10317 · Hartl FU, Bracher A, Hayer-Hartl M · review · Nature 2011;475:324-332 · 3,442 citations · comprehensive framework for proteostasis network components and aging-related collapse; not_oa; no local PDF — claims are consensus-level and broadly corroborated

[^hara2006]: [[studies/hara-2006-atg5-neural-autophagy]] · doi:10.1038/nature04724 · Hara T et al. · in-vivo · Nature 2006;441:885-889 · n=conditional KO cohort · model: Atg5^flox/flox × nestin-Cre mice · neuron-specific Atg5 deletion causes progressive motor deficits + ubiquitin-positive inclusions throughout brain within weeks; some Atg5^flox/flox; nestin-Cre mice die after three weeks; foundational genetic proof that basal macroautophagy is required for neuronal homeostasis · local PDF confirmed: DOI lookup 10.1038/nature04724 · also verified on [[lc3]] page

[^komatsu2006]: [[studies/komatsu-2006-atg7-neural-autophagy]] · doi:10.1038/nature04723 · Komatsu M et al. · in-vivo · Nature 2006;441:880-884 · n=26 mutants (Atg7^flox/flox; nestin-Cre), 41 controls (KM survival curve) · model: Atg7^flox/flox × nestin-Cre mice · neuron-specific Atg7 deletion produces progressive behavioral deficits, ubiquitin-positive inclusions, and death within 28 weeks; proteasome function unaffected · local PDF confirmed: DOI lookup 10.1038/nature04723 · verified on [[atg7]] page

[^wongcuervo2010]: [[studies/wong-cuervo-2010-autophagy-neurodegeneration]] · doi:10.1038/nn.2575 · Wong E, Cuervo AM · review · Nature Neuroscience 2010;13(7):805-811 · covers macroautophagy and CMA dysfunction across NDDs: in PD, pathogenic α-synuclein variants and truncated tau interfere with the CMA translocation complex (blocking LAMP-2A-mediated degradation); in AD, autophagic vacuoles accumulate in dystrophic neurites as a source of amyloid β production; in HD, polyQ huntingtin blocks CMA; cross-talk between macroautophagy and UPS reviewed · local PDF confirmed and content verified: DOI lookup  (local PDF)

[^linbeal2006]: doi:10.1038/nature05292 · Lin MT, Beal MF · review · Nature 2006;443:787-795 · 6,282 citations · comprehensive review of mitochondrial dysfunction across PD, AD, ALS, HD; not_oa; no local PDF #gap/no-fulltext-access

[^disabato2016]: doi:10.1111/jnc.13607 · DiSabato DJ, Quan N, Godbout JP · review · Journal of Neurochemistry 2016;139(Suppl 2):136-163 · neuroinflammation review covering microglial activation states, astrocyte reactivity, complement, cytokine signaling in the aging brain; bronze OA (download failed — no PMC URL found; claims unverified against full PDF) #gap/no-fulltext-access

[^bouzid2023]: [[studies/bouzid-2023-chip-alzheimers]] · doi:10.1038/s41591-023-02397-2 · Bouzid H et al. · observational (meta-analysis) · Nature Medicine 2023;29(7):1662-1670 · n=5,730 total (1,362 AD; 4,368 controls) · CHIP meta-analysis OR=0.64 (protective) vs AD dementia, P=3.8×10^-5; Mendelian randomization supports causal association; CHIP mutations detected in microglia-enriched brain fraction in 7/8 carriers; mechanism unknown · local PDF archived but only supplementary author list retrieved — main text quantitative claims verified via published abstract (Europe PMC) · #gap/needs-replication

[^vojtechova2022]: doi:10.1371/journal.ppat.1010929 · Vojtechova I, Machacek T, Kristofikova Z, Stuchlik A, Petrasek T · *PLoS Pathogens* 2022;18(11):e1010929 · review / hypothesis · proposes Aβ as an antimicrobial peptide and chronic CNS infection as the primary driver of sporadic AD · open access · full content on [[alzheimers-disease]]

[^eyting2025nd]: doi:10.1038/s41586-025-08800-x · Eyting M, Xie M, Michalik F, Heß S, Chung S, Geldsetzer P · *Nature* 2025;641:438-446 · quasi-experimental (regression-discontinuity natural experiment; Wales DOB cutoff 2 Sep 1933) · zoster-vaccine receipt reduced dementia by absolute 3.5 pp / relative 20.0% (95% CI 6.5–33.4) over 7 yr (instrumental-variable estimate); effect concentrated in women · n=282,541 · model: human · effect sizes + full caveats verified on [[alzheimers-disease]]

[^lecanemab2023]: doi:10.1056/NEJMoa2212948 · van Dyck CH et al. · rct · New England Journal of Medicine 2023;388(1):9-21 · n=1,795 randomized (898 lecanemab; 897 placebo); safety population same · lecanemab 10 mg/kg biweekly × 18 months; primary endpoint CDR-SB: 1.21 (lecanemab) vs 1.66 (placebo), diff −0.45 (95% CI −0.67 to −0.23), P<0.001; ARIA-E 12.6% vs 1.7% placebo; ARIA-H (microhemorrhages/hemosiderin) 17.3% vs 9.0% placebo; combined ARIA-E or ARIA-H 21.5% vs 9.5% placebo; infusion-related reactions 26.4% vs 7.4%; early-stage AD only (MCI + mild dementia, Aβ confirmed by PET or CSF) · local PDF verified: DOI lookup  (local PDF)
