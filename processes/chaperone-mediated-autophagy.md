---
type: process
aliases: [CMA, chaperone-mediated autophagy, lysosomal chaperone pathway]
key-proteins: ["[[hsc70]]", "[[lamp2|LAMP-2A]]", "[[hsp90]]", "[[hip]]", "[[hop]]", "[[chip]]"]
pathways: ["[[autophagy]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[disabled-macroautophagy]]"]
selective-variants: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Bandyopadhyay 2008 (MCB), Zhang & Cuervo 2008 (Nat Med), Bourdenx 2021 (Autophagy) verified against primary-source PDFs. Cuervo & Dice 2000 (JBC) and Schneider 2014 (Cell Metab) verified via PubMed abstract + Crossref (PDFs not accessible). Chiang 1989, Cuervo 1996, Dice 1990 verified via PubMed abstracts (not_oa/no-DOI; PDFs inaccessible). Kaushik & Cuervo 2018 Nat Rev Mol Cell Biol not independently verified (download failed; PMC not accessible); claims attributed to it flagged below."
---

# Chaperone-Mediated Autophagy (CMA)

A selective lysosomal degradation pathway that translocates individual cytosolic proteins carrying a KFERQ-like pentapeptide motif directly through the lysosomal membrane — bypassing autophagosome formation entirely. CMA accounts for a substantial fraction of regulated protein turnover in many mammalian tissues and **declines markedly with age**: lysosomes from aged (22-month-old) rats show lower rates of CMA than young rats, with LAMP-2A loss identified as the cause [^cuervo2000], and maintaining LAMP-2A abundance in aged transgenic mice prevents this decline and improves hepatic function [^zhang2008]. CMA is mechanistically distinct from macroautophagy ([[autophagy]]) and microautophagy — it requires neither membrane vesicles nor organelle engulfment.

## Discovery and historical context

Three foundational observations established CMA:

1. **The KFERQ motif (Dice 1990)** — selective lysosomal targeting of cytosolic proteins was traced to a biochemically defined pentapeptide motif. The consensus sequence, KFERQ (Lys-Phe-Glu-Arg-Gln as the prototypical example), is recognized in the cytosol and necessary for substrate targeting to lysosomes [^dice1990]. Estimates of the fraction of cytosolic proteins predicted to carry a KFERQ-like motif range from ~30% (early Dice-era computational estimates) to ~40% (more recent scoring with updated algorithms per Kaushik & Cuervo 2018 [^kaushik2018review]); the range reflects motif-scoring algorithm differences #gap/needs-replication.

2. **HSC70 as the cytosolic chaperone receptor (Chiang 1989)** — a constitutively expressed 70-kDa heat shock protein (HSC70; HSPA8) was identified as the chaperone that recognizes and binds KFERQ-motif-containing substrates and targets them for lysosomal import [^chiang1989]. This biochemically separated CMA from the then-known bulk autophagy pathway.

3. **LAMP-2A as the lysosomal membrane receptor (Cuervo 1996)** — lysosomal-associated membrane protein 2A (LAMP-2A), a single-pass type I membrane glycoprotein and one of three LAMP-2 splice variants, was identified as the receptor on the lysosomal membrane that substrates must bind before translocation [^cuervo1996]. This was the critical molecular handle that enabled subsequent mechanistic dissection.

## Mechanism — five-step model

CMA proceeds through five biochemically separable stages:

| Step | Event | Key molecules |
|---|---|---|
| 1 | **Substrate recognition** | Cytosolic [[hsc70]] (+ co-chaperones HIP, HOP, HSP40, HSP90) recognizes the KFERQ-like motif on unfolded or partially denatured substrate proteins |
| 2 | **Lysosomal targeting** | HSC70–substrate complex traffics to the lysosomal membrane; substrate binds monomeric LAMP-2A at the cytosolic tail |
| 3 | **LAMP-2A multimerization** | Monomeric LAMP-2A assembles into a ~700 kDa translocation complex; substrate must be unfolded to thread through |
| 4 | **Translocation** | Substrate is unfolded and pulled through the LAMP-2A channel into the lysosomal lumen; luminal HSC70 (lys-hsc70) pulls the substrate; lysosomal HSP90 stabilizes LAMP-2A in the multimeric state |
| 5 | **Degradation + complex disassembly** | Substrate is degraded by lysosomal cathepsins; lys-hsc70 disassembles the LAMP-2A multimer back to monomers; monomers are re-stabilized in lipid microdomains |

**LAMP-2A is the rate-limiting step.** The assembly/disassembly cycle of the LAMP-2A translocation complex — not substrate availability or HSC70 abundance — sets the rate of CMA flux [^bandyopadhyay2008]. Lysosomal HSP90 (not to be confused with cytosolic HSP90) stabilizes the multimeric form of LAMP-2A, while lys-hsc70 promotes its disassembly after substrate delivery. Overexpressing LAMP-2A alone is sufficient to increase CMA in cells and in vivo.

### The KFERQ motif in detail

The KFERQ pentapeptide is degenerate. The biochemical requirements are:
- A glutamine (Q) at position 1 or 5 of the pentapeptide (essential)
- Flanking residues: one or more positively charged (Lys K, Arg R), one or more hydrophobic (Phe F, Ile I, Leu L, Val V), and one or more negatively charged (Glu E, Asp D)
- The motif can be "masked" in folded proteins and exposed upon partial unfolding or post-translational modification

Oxidative modification and other post-translational events can expose or create KFERQ-like motifs, linking CMA to redox stress responses [^kaushik2018review].

## Major substrates and disease relevance

CMA substrates are typically soluble cytosolic proteins that participate in signaling, metabolism, or transcription regulation. Examples with disease-aging relevance:

| Substrate | Disease / function context |
|---|---|
| GAPDH | Metabolic enzyme; glycolytic moonlighting |
| IκBα (NFKBIA) | NF-κB inhibitor; its CMA-mediated degradation links CMA to [[nf-kb]] signaling |
| MEF2D | Neuronal transcription factor; pathogenic in PD when CMA is impaired |
| RND3 (RhoE) | Rho GTPase; regulates cytoskeletal dynamics |
| alpha-synuclein (WT) | Parkinson's disease; mutant or aggregated forms block LAMP-2A |
| tau | Alzheimer's disease; CMA clears non-aggregated tau; CMA failure promotes tangle accumulation |
| Mutant huntingtin fragments | HD-relevant; CMA degrades small huntingtin fragments |
| PED/PEA-15 | Survival signaling; links CMA to apoptosis regulation |

**Alpha-synuclein and LAMP-2A blockade** is particularly notable: the A53T and A30P PD-associated alpha-synuclein mutants bind LAMP-2A but cannot be translocated, effectively blocking the receptor and inhibiting CMA of all other substrates — a dominant-negative mechanism [^kaushik2018review]. #gap/needs-human-replication (dominant-negative LAMP-2A blockade in vivo established in cell models and mouse; human PD-brain evidence is correlative)

## CMA in aging

### Age-related decline

CMA activity declines with age in all tissues examined, with liver being the best-characterized:

- Hepatic CMA decreases in old rats (22 months) compared to young adults, with both substrate binding to the lysosomal membrane and transport into lysosomes declining with age [^cuervo2000]. The exact percentage decline is not stated in the abstract; the decline is not due to reduced cytosolic HSC70 levels, but specifically to reduced LAMP-2A content at the lysosomal membrane [^cuervo2000]. #gap/needs-replication (quantitative % decline figure needs confirmation from paper body text — full PDF not accessible)
- LAMP-2A protein levels fall in aged lysosomes because the rate of LAMP-2A degradation at the lysosomal membrane increases with age (faster turnover from membrane lipid-raft to non-raft microdomains where it is susceptible to degradation) #gap/needs-replication — this mechanism is established in isolated lysosomes; whether it is the sole driver in vivo in human tissues is unclear.
- Cytosolic HSC70 levels do not substantially decline with age, confirming the bottleneck is at LAMP-2A.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (LAMP-2A identified in human lysosomes; substrate motif conserved) |
| Phenotype (CMA decline) conserved in humans? | partial (fibroblast + peripheral-blood data; liver data from rodents) |
| Replicated in humans? | no (no human hepatic CMA flux measurements in aging cohorts) |

### LAMP-2A restoration rescues aged-mouse hepatic function

Zhang & Cuervo (2008) generated a double transgenic mouse model (Alb-Tet-off-LAMP-2A; FVB background) in which liver-specific LAMP-2A expression could be modulated via doxycycline, preventing the age-dependent decrease in receptor abundance [^zhang2008]. Mice maintained normal LAMP-2A levels until 22–26 months of age. Consequences of maintaining LAMP-2A (and CMA) in aged mice included:
- Reduced accumulation of oxidized proteins in liver cytosol (carbonyl groups, 4-HNE)
- Improved hepatic function: lower serum ALT, less apoptosis (TUNEL+/caspase-3+ cells), faster drug clearance (zoxazolamine paralysis test)
- Improved macroautophagy markers (reduced double-membrane vesicle accumulation, lower LC3-II)
- Reduced lipofuscin accumulation

This study established that maintenance of CMA activity until advanced age prevents — or substantially slows — the functional failure associated with cellular proteotoxicity and intracellular damage accumulation [^zhang2008]. #gap/needs-human-replication

**Note on Schneider et al. (2014):** The DOI 10.1016/j.cmet.2014.06.009 (Schneider JL, Suh Y, Cuervo AM; Cell Metab 2014) is a complementary but distinct study — a conditional liver-specific CMA *knockout* (Albumin-Cre; L2A^f/f) showing that CMA loss causes hepatic glycogen depletion, hepatosteatosis, altered glucose homeostasis, and dysregulation of carbohydrate/lipid metabolic enzymes. It does not describe LAMP-2A overexpression rescue. Both studies together establish CMA as a causal regulator of hepatic metabolism [^schneider2014].

### Cross-talk with macroautophagy

CMA and macroautophagy compensate for each other. Genetic or pharmacological inhibition of CMA upregulates macroautophagy, and vice versa [^kaushik2018review]. However, this compensation is incomplete — some substrates are CMA-specific (those whose degradation requires unfolding through the LAMP-2A channel), and macroautophagy cannot fully substitute for CMA during sustained CMA impairment in post-mitotic cells (neurons, cardiomyocytes). In the context of aging, both pathways decline, eliminating the compensatory buffer [^kaushik2018review].

## CMA in neurodegeneration

CMA has particular importance in post-mitotic neurons, which cannot dilute damaged proteins through cell division:

- **Parkinson's disease**: wild-type alpha-synuclein is a CMA substrate; dopaminergic neuron survival partly depends on CMA-mediated clearance. A53T/A30P mutants block LAMP-2A and impair CMA of MEF2D (a neuronal survival factor), increasing neuronal vulnerability.
- **Alzheimer's disease**: tau is a CMA substrate; hyperphosphorylated tau is poor CMA substrate → accumulates. Bourdenx et al. (2021) showed that CMA is the primary autophagy route maintaining the metastable proteome in neurons, and CMA decline worsens Alzheimer's pathology in mouse models; pharmacological CMA activation improved behavioral and pathological outcomes [^bourdenx2021].
- **Huntington's disease**: short huntingtin fragments are CMA substrates; expanded-repeat huntingtin impairs CMA and macroautophagy.

## Pharmacological modulation

CMA lacks well-developed pharmacological activators compared to macroautophagy. Current candidates:

- **QX77 / CA77.1** — small-molecule allosteric activators of LAMP-2A attributed to Kaushik & Cuervo 2018 [^kaushik2018review]; increase CMA flux in cell culture. #gap/needs-replication #gap/dose-response-unclear **Unverified: Kaushik 2018 PDF not accessible; compound names not independently confirmed in source.**
- **AR.7** — a retinoid derivative reported to increase CMA; mechanism involves LAMP-2A stabilization. Tested in neurodegeneration cell models. Clinical stage: preclinical. #gap/needs-replication #gap/long-term-unknown **Unverified: source attribution not independently confirmed — Kaushik 2018 PDF inaccessible.**
- **CA (unnamed small molecule, Bourdenx 2021)** — a newly designed small molecule CMA activator with favorable brain permeability, tested in two AD mouse models (MAPT/tau and APP/Aβ); described as a "CA" without a systematic name in Bourdenx et al. 2021 [^bourdenx2021]. The compound is characterized in the companion Cell 2021 paper (Bourdenx M et al. Cell 184:2696–2714). #gap/dose-response-unclear #gap/long-term-unknown
- **Indirect CMA inducers**: oxidative stress (physiological), serum withdrawal, nutritional stress — activate CMA but lack specificity.

No CMA-targeting compound has yet entered clinical trials (as of 2026-05-04). #gap/long-term-unknown

## CMA in cancer

CMA has context-dependent roles in cancer:

- **Tumor-suppressive**: CMA degrades oncoproteins (mutant HIF-1α stabilizing factors, Myc) and key glycolytic enzymes (GAPDH under oxidative stress), limiting tumor cell survival.
- **Tumor-promoting**: many cancer cells upregulate CMA to survive nutrient stress and chemotherapy; LAMP-2A overexpression is documented in breast and other cancers, providing chemotherapy resistance [^kaushik2018review].

The context-dependence makes CMA a challenging cancer target and distinguishes it from macroautophagy, which is more uniformly tumor-suppressive in established tumors.

## Relationship to other degradation pathways

| Pathway | Vesicle? | Selectivity | Rate-limiting step | Age change |
|---|---|---|---|---|
| [[autophagy]] (macroautophagy) | Yes (autophagosome) | Bulk + selective (via receptors) | ULK1 complex / mTOR | Declines |
| Microautophagy | Yes (lysosomal membrane invagination) | Bulk or selective | Not defined | Unknown in aging |
| **CMA** | **No** | **Selective (KFERQ-motif only)** | **LAMP-2A concentration** | **Declines** |
| [[ubiquitin-proteasome-system]] | No | Selective (ubiquitin-tagged) | Proteasome availability | Declines |

## Limitations and gaps

- **No human in vivo CMA flux measurement**: all quantitative aging data derive from isolated rodent lysosomes or cell lines. Human evidence for CMA decline is indirect (substrate accumulation, LAMP-2A levels in biopsies). #gap/needs-human-replication
- **KFERQ motif prevalence**: the figure is a computational prediction ranging from ~30% (early estimates) to ~40% (Kaushik & Cuervo 2018); algorithm differences account for the spread; experimental substrate validation is far more limited. #gap/needs-replication
- **CMA activators are preclinical**: QX77/CA77.1 and AR.7 have not been tested in aged animal models for lifespan or healthspan outcomes. #gap/long-term-unknown #gap/dose-response-unclear
- **CMA–macroautophagy compensation threshold**: the point at which CMA decline becomes functionally irreversible (macroautophagy compensation fails) is not characterized in any aged tissue. #gap/no-mechanism
- **Dice 1990 DOI absent**: the foundational KFERQ-motif paper (Semin Cell Biol, PMID 2103896) has no DOI in PubMed; cited as PMID only. #gap/needs-canonical-id
- **DOI correction during seeding (4 BUG-2 instances)**: Chiang 1989, Cuervo & Dice 2000, Bandyopadhyay 2008, and Schneider 2014 were originally cited with wrong DOIs; all confirmed corrected via DOI lookup and PubMed. The Schneider 2014 DOI (10.1016/j.cmet.2014.06.009) maps to the CMA knockout paper, not a LAMP-2A overexpression rescue study — the rescue study is Zhang & Cuervo 2008 (10.1038/nm.1851); the page has been corrected accordingly.
- **Cuervo 2000 PDF not accessible** (hybrid OA; download failed); the ">30% decline" figure cited in the original seeded page was not confirmed in the abstract — the body text percentage is not independently verified. #gap/needs-replication
- **Kaushik & Cuervo 2018 PDF not accessible** (download failed, PMC access blocked); claims attributed to this review (pharmacological activators QX77/CA77.1/AR.7; CMA–macroautophagy compensation; substrate list) are unverified against the source. #gap/no-fulltext-access

## See also

- [[autophagy]] — macroautophagy; distinct mechanism, compensatory relationship
- [[mitophagy]] — selective macroautophagy of mitochondria; orthogonal to CMA
- [[ubiquitin-proteasome-system]] — alternative selective cytosolic protein degradation
- [[loss-of-proteostasis]] — hallmark; CMA decline is a primary contributing mechanism
- [[hsc70]] — cytosolic chaperone and key CMA substrate-recognition factor (stub)
- [[lamp2]] — rate-limiting lysosomal membrane receptor for CMA (LAMP-2A is the splice variant; verified protein page covers all four LAMP-2 isoforms)
- [[alpha-synuclein]] — CMA substrate that blocks LAMP-2A when mutated (stub)
- [[nf-kb]] — IκBα is a CMA substrate; links CMA to inflammatory signaling

## Footnotes

[^dice1990]: PMID:2103896 (no DOI in PubMed) · Dice JF, Semin Cell Biol 1990 Dec;1(6):449-55 · in-vitro · model: cell-free lysosome system + purified proteins · KFERQ pentapeptide motif identification as selective lysosomal targeting signal

[^chiang1989]: doi:10.1126/science.2799391 · Chiang HL, Terlecky SR, Plant CP, Dice JF · Science 1989 · in-vitro · model: isolated rat liver lysosomes + purified proteins · 70 kDa heat shock protein (HSC70) identified as cytosolic chaperone mediating selective lysosomal import · 959 citations · not_oa · **Note: task brief cited 10.1126/science.2538923 (a multiubiquitin paper); corrected to 10.1126/science.2799391 per PMID 2799391 and archive title match**

[^cuervo1996]: doi:10.1126/science.273.5274.501 · Cuervo AM, Dice JF · Science 1996 · in-vitro + in-vivo · model: isolated rat liver lysosomes · LAMP-2A identified as rate-limiting lysosomal membrane receptor for CMA · 937 citations · not_oa

[^cuervo2000]: doi:10.1074/jbc.M002102200 · Cuervo AM, Dice JF · J Biol Chem 2000;275(40):31505-13 · in-vivo · model: rat liver (old = 22 months per abstract; young age not stated in abstract) · Age-related decline in CMA: both substrate binding and lysosomal transport decrease; LAMP-2A decrease identified as cause; cytosolic HSC73 levels unchanged · 636 citations · hybrid OA (PDF inaccessible) · **Note 1: task brief cited 10.1126/science.288.5475.2199; corrected to 10.1074/jbc.M002102200 per PMID 10806201. Note 2: ">30% decline" figure from original seeding is NOT confirmed in abstract — requires body-text verification; tagged #gap/needs-replication**

[^bandyopadhyay2008]: doi:10.1128/MCB.02070-07 · Bandyopadhyay U, Kaushik S, Varticovski L, Cuervo AM · Mol Cell Biol 2008;28(18):5747-5763 · in-vitro · model: isolated liver lysosomes from adult male Wistar rats (200–250 g); NIH 3T3 mouse fibroblasts; H460 and HCT-116 cell lines · LAMP-2A organizes into multiple complexes at the lysosomal membrane (>800 kDa, 720–680 kDa, 520 kDa, 250 kDa, 110 kDa monomer); the ~700 kDa complex is the CMA translocation complex — enriched in CMA-active lysosomes and required for substrate translocation. hsc70 is found in lower-molecular-weight complexes (≤250 kDa) and promotes LAMP-2A disassembly from the 700 kDa complex in an ATP-independent manner; hsp90 (luminally associated) is required for LAMP-2A stability during transitions between multimeric states. Substrates bind monomeric LAMP-2A, not the 700 kDa complex. · 529 citations · green OA · **Note: task brief cited 10.1128/MCB.00115-08 (not found in archive); corrected to 10.1128/MCB.02070-07 per PMID 18644871 and DOI lookup title match**

[^schneider2014]: doi:10.1016/j.cmet.2014.06.009 · Schneider JL, Suh Y, Cuervo AM · Cell Metab 2014 · in-vivo · model: liver-specific CMA **knockout** mouse (Albumin-Cre; L2A^f/f) · CMA blockage in liver causes hepatic glycogen depletion, hepatosteatosis, altered glucose homeostasis; key carbohydrate and lipid metabolic enzymes normally degraded by CMA accumulate when CMA is blocked · 321 citations · bronze OA · **CORRECTION: this paper is a CMA LOSS-OF-FUNCTION study, not a LAMP-2A overexpression rescue. The rescue study is Zhang & Cuervo 2008 (10.1038/nm.1851). Original seeding incorrectly described this DOI as an overexpression rescue. Note: task brief DOI 10.1016/j.cmet.2014.07.011 was corrected to 10.1016/j.cmet.2014.06.009 per Crossref.**

[^zhang2008]: doi:10.1038/nm.1851 · Zhang C, Cuervo AM · Nat Med 2008;14(9):959-965 · in-vivo · model: Alb-Tet-off-LAMP-2A double transgenic mice, FVB background, 22–26 months (aged) · Maintaining LAMP-2A abundance in aged liver prevents CMA decline; benefits include: reduced oxidized proteins (carbonyl/4-HNE), lower serum ALT, less apoptosis, faster zoxazolamine clearance, improved macroautophagy markers, reduced lipofuscin · 496 citations · green OA · **Added at verification: this is the actual LAMP-2A restoration rescue paper; previously incorrectly attributed to Schneider 2014**

[^kaushik2018review]: doi:10.1038/s41580-018-0001-6 · Kaushik S, Cuervo AM · Nat Rev Mol Cell Biol 2018 · review · multi-model · Comprehensive CMA mechanism, regulation, substrates, aging, disease, and pharmacology review. States ~40% of proteins in the mammalian proteome contain a canonical KFERQ-like motif. · 1,278 citations · listed as green OA (PMC6399518) but PMC access was blocked at verification (download failed; PMC returned "not Open Access"). Claims attributed to this review that were not independently verified: QX77/CA77.1 activator names, AR.7 retinoid derivative, CMA–macroautophagy compensation details. #gap/no-fulltext-access

[^bourdenx2021]: doi:10.1080/15548627.2021.1935007 · Bourdenx M, Gavathiotis E, Cuervo AM · Autophagy 2021;17(8):2040-2042 · review/punctum · model: CKL2A^-/- (neuronal CMA knockout) mouse + human AD transcriptomic data + mouse AD models (MAPT/tau and APP/Aβ) · CMA is the primary autophagy pathway maintaining the metastable neuronal proteome (proteins at risk of aggregation); CMA loss worsens AD-like pathology; a newly designed small molecule CMA activator ("CA", unnamed in this paper — described in companion Cell 2021 paper) with brain permeability improved behavior and pathology in two AD mouse models · Companion paper: Bourdenx M et al. Cell 2021;184(10):2696-2714 · 42 citations · bronze OA
