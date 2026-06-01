---
type: study
doi: 10.1038/s41467-023-43001-y
pmid: 38086852
pmc: PMC10716122
title: "Nuclear cGAS restricts L1 retrotransposition by promoting TRIM41-mediated ORF2p ubiquitination and degradation"
authors: [Zhen Z, Chen Y, Wang H, Tang H, Zhang H, Liu H, Jiang Y, Mao Z]
year: 2023
journal: Nature Communications
study-design: in-vitro+in-vivo
organism: multiple
n-subjects: null
intervention: ["[[cgas]]", "[[trim41]]"]
hallmarks-tested: ["[[genomic-instability]]", "[[cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [nuclear-cgas-restricts-l1-retrotransposition, trim41-e3-ligase-ubiquitinates-orf2p, chk2-phosphorylates-cgas-s120-s305, dna-damage-potentiates-restriction, senescence-activates-pathway, cancer-mutations-disrupt-pathway]
local-pdf: null
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "All 9 seeder-flagged quantitative claims cross-checked against full PDF (Nat Commun 14:8217). Corrections: (1) study-design updated from in-vitro to in-vitro+in-vivo (paper includes Cgas-KO mouse kidney/brain qPCR data); (2) organism updated from human-cell-lines to multiple; (3) senescence-section corrected — IMR90-hTERT and HCA2-hTERT used X-ray irradiation (15 Gy, SIPS Day 9), not etoposide; etoposide SIPS (10 µg/mL, 20 min) was used in HeLa cells. Core quantitative claims (2.2-/2.5-fold retrotransposition increase n=6; 9 replicates/3 mice in-vivo; CHK2→S120/S305; 5 MS ligases; TRIM41 coiled-coil+ORF2p EN domain; MG132+K48-Ub; 7/37 cancer mutants; three mechanistic groups) all confirmed accurate. Supersession check: no contradicting meta-analyses or RCTs found; one parallel mechanism paper (Huang 2025 EMBO Rep PMID 40825873 — STING restricts L1 via ORF1p lysosomal degradation, cGAS-independent) does not contradict Zhen 2023."
---

# Nuclear cGAS restricts L1 retrotransposition by promoting TRIM41-mediated ORF2p ubiquitination and degradation

**Zhen Z, Chen Y, Wang H, Tang H, Zhang H, Liu H, Jiang Y, Mao Z · *Nature Communications* · 2023 · DOI: 10.1038/s41467-023-43001-y · PMID: 38086852 · PMC: PMC10716122**

Senior author: Mao Z (same lab as [[studies/chen-2025-nmr-cgas-hr-repair]]). Gold OA; full text at PMC10716122. Citation count: 34 (DOI lookup, 2026-05-13); FWCI: 6.59 (99th percentile citation impact). Local PDF downloaded during seeding.

## TL;DR

Nuclear [[cgas]] serves as a genome-stability guardian against LINE-1 (L1) retrotransposition. Upon DNA damage, CHK2 phosphorylates cGAS at S120 and S305, strengthening its association with the E3 ubiquitin ligase [[trim41]]. [[trim41]] then polyubiquitinates L1-encoded ORF2p (the reverse transcriptase/endonuclease), targeting it for proteasomal degradation. Loss of cGAS increased L1 retrotransposition 2.2–2.5-fold in human cells. The same pathway is active in senescent cells and is disrupted by 7 of 37 cancer-associated cGAS mutations. This is the conceptual prequel to [[studies/chen-2025-nmr-cgas-hr-repair]]: it establishes the nuclear-cGAS / TRIM41 / ubiquitin axis that Chen 2025 later shows to operate on cGAS itself.

## Background

LINE-1 (L1) retrotransposons comprise roughly 17% of the human genome. Normally silenced by DNA methylation and heterochromatin, L1 elements are progressively reactivated in aging and senescent cells, contributing to genomic instability through insertional mutagenesis and — crucially — to inflammaging through the generation of cytosolic L1 cDNA that activates cGAS-STING signaling [^dececco2019]. ORF2p is the L1-encoded reverse transcriptase and endonuclease essential for the retrotransposition "copy-paste" mechanism; it had lacked a characterized posttranslational regulatory pathway prior to Zhen et al. 2023.

[[cgas]] was previously known chiefly for two functions: (1) cytosolic DNA sensing that activates the [[cgas-sting]] pathway producing cGAMP → STING → IRF3 → type I IFN (the canonical inflammaging arm); and (2) nuclear HR suppression, wherein chromatin-bound cGAS obstructs repair-complex assembly at DNA double-strand breaks (Liu et al. 2018 — [[studies/liu-2018-nuclear-cgas-hr-suppression]] if extant; otherwise [^liu2018]). Zhen 2023 adds a third nuclear function: direct restriction of ORF2p protein levels through the TRIM41 ubiquitin-proteasome axis.

[[trim41]] is a RING-type E3 ubiquitin ligase whose aging-context role was established primarily by this paper and by [[studies/chen-2025-nmr-cgas-hr-repair|Chen 2025]]. Its coiled-coil domain mediates interaction with ORF2p; its RING domain catalyzes K48-linked polyubiquitination for proteasomal targeting.

## Key findings

All quantitative data below are sourced from the PMC10716122 full text, pulled via WebFetch [^zhen2023].

### 1. cGAS is required for L1 restriction in human cells

- cGAS overexpression reduced L1 retrotransposition in HeLa cells in a dose-dependent manner [^zhen2023].
- cGAS knockout in HeLa cells increased retrotransposition efficiency by **2.2- and 2.5-fold** (n=6 independent experiments) [^zhen2023].
- Genomic L1 copy number was significantly elevated in cGAS-deficient HeLa cells and in *Cgas* knockout mice (kidney and brain tissues; n=9 measurements from three independent mice per group; quantified by qPCR targeting genomic ORF2 DNA) [^zhen2023]. #gap/needs-human-replication

### 2. cGAS selectively targets ORF2p, not ORF1p

- cGAS overexpression markedly reduced ORF2p protein levels with no effect on ORF1p levels [^zhen2023].
- ORF2p degradation was proteasome-dependent: the proteasome inhibitor MG132 blocked cGAS-mediated ORF2p reduction [^zhen2023].
- cGAS promoted **K48-linked polyubiquitination** of ORF2p — the canonical targeting signal for the 26S proteasome [^zhen2023].

### 3. TRIM41 is the E3 ligase that bridges cGAS to ORF2p

- Mass spectrometry of cGAS immunoprecipitates identified five candidate E3 ligases; **only TRIM41 overexpression phenocopied the ORF2p reduction** seen with cGAS [^zhen2023].
- TRIM41 knockout abolished cGAS-mediated suppression of L1 retrotransposition [^zhen2023].
- The **EN domain of ORF2p** and the **coiled-coil domain of TRIM41** were the critical interaction surfaces [^zhen2023].
- The interaction model: cGAS binds ORF2p and scaffolds TRIM41 recruitment → TRIM41 polyubiquitinates ORF2p → proteasomal degradation → reduced retrotransposition [^zhen2023].

### 4. DNA damage potentiates the restriction pathway via CHK2-mediated cGAS phosphorylation

- Upon DNA damage, **CHK2 phosphorylates cGAS at S120 and S305** (both within RXXS/RXXT phosphorylation consensus motifs) [^zhen2023].
- Phosphorylation **strengthens the cGAS–TRIM41 interaction** without altering the cGAS–ORF2p interaction [^zhen2023].
- S120A single mutant and S305A single mutant each partially abrogated the cGAS suppressive effect; the **S120A/S305A double mutant reduced the inhibitory effect further** than either single mutant alone [^zhen2023].
- CHK2 inhibition disrupted the damage-induced enhancement of cGAS-TRIM41 association [^zhen2023].
- Phosphorylation was detected specifically in the **nuclear fraction**, consistent with nuclear rather than cytosolic cGAS executing this function [^zhen2023].

### 5. The pathway is active in senescent cells

- Stress-induced premature senescent (SIPS) HeLa cells (induced by etoposide, 10 µg/mL, 20-min treatment on Day 4 post-transfection; FACS analysis Day 10) showed elevated CHK2 phosphorylation and increased cGAS S120 and S305 phosphorylation [^zhen2023].
- cGAS knockout **attenuated L1 retrotransposition repression in SIPS HeLa cells** (n=3 independent experiments) [^zhen2023].
- Nuclear localization of phosphorylated cGAS in senescent cells was also confirmed in X-ray-irradiated IMR90-hTERT and HCA2-hTERT fibroblasts (15 Gy; cells lysed on Day 9); these lines were used specifically for the subcellular fractionation validation of nuclear pS120/pS305-cGAS, not for the retrotransposition assay [^zhen2023].

### 6. Cancer-associated cGAS mutations disrupt the restriction pathway

- Of 37 cancer-associated cGAS mutants analyzed, **7 abolished L1 retrotransposition suppression** while maintaining canonical cytosolic immune-sensing functions [^zhen2023].
- Mechanistic grouping of the seven loss-of-function mutations:
  - P486L, L377P, S345L → decreased cGAS–CHK2 binding (upstream phosphorylation arm)
  - D408N, E383K → disrupted phosphorylated-cGAS–TRIM41 interaction
  - E216D, F433L, P486L → attenuated cGAS–ORF2p interaction
- This separation of function (intact cGAMP synthesis, lost ORF2p restriction) implies the two activities map to distinct structural surfaces and are independently mutable [^zhen2023].

## Mechanistic position — the nuclear-cGAS / TRIM41 regulatory module

Zhen 2023 and [[studies/chen-2025-nmr-cgas-hr-repair|Chen 2025]] together establish a coherent **nuclear-cGAS / TRIM41 / ubiquitin / VCP** regulatory module operating on chromatin, in which the substrate of ubiquitination differs but the core architecture is conserved:

| Paper | Substrate of TRIM41-mediated ubiquitination | Downstream effector | Functional outcome |
|---|---|---|---|
| Zhen 2023 (this paper) | L1 ORF2p | Proteasomal degradation | L1 retrotransposition suppressed |
| Chen 2025 | cGAS itself | VCP/p97-mediated chromatin eviction | HR de-repressed; in NMR, TRIM41 activity is weakened → cGAS retained → HR potentiated |

The relationship is: Zhen 2023 identifies TRIM41 as the E3 for nuclear cGAS-associated chromatin substrates and establishes the CHK2 → cGAS-phosphorylation → TRIM41 recruitment mechanism; Chen 2025 shows that **this same TRIM41 activity turns back on cGAS itself**, and that the NMR's four-amino-acid divergence weakens the TRIM41-cGAS interaction specifically, thereby prolonging chromatin retention and potentiating HR repair. NMR evolution has tuned the TRIM41 regulatory arm to selectively relax cGAS auto-eviction while presumably retaining some ORF2p-targeting capacity.

## Aging and senescence relevance

L1 reactivation is a hallmark of aging and cellular senescence. In senescent cells, L1 elements are transcriptionally derepressed (methylation loss, heterochromatin erosion), and ORF2p activity produces cytosolic L1 cDNA, which activates cGAS-STING and amplifies the SASP — connecting L1 reactivation directly to [[chronic-inflammation|inflammaging]] [^dececco2019].

Zhen 2023 establishes that **cGAS has a chromatin-protective function antagonistic to L1 transposition**, distinct from — and in some ways opposing — its STING-activation role:

- Cytosolic cGAS function: detects L1 cDNA products → drives STING → inflammaging
- Nuclear cGAS function (this paper): restricts L1 at the source → fewer retrotransposition events → fewer L1 cDNA copies → less STING activation (indirect)

The direction-of-effect on chronic inflammation therefore depends on which arm dominates in a given cellular context. In senescent cells, elevated CHK2 activity (from chronic DNA damage signaling) may actually potentiate the nuclear ORF2p-restriction arm via the S120/S305 phosphorylation mechanism — a potential compensatory feedback loop. Whether this loop is quantitatively meaningful in aged tissue in vivo remains untested. #gap/no-mechanism

## Limitations and gaps

1. **Cell-line predominance.** Primary mechanistic work was performed in HeLa cells (a cancer cell line) and validated in IMR90-hTERT and HCA2-hTERT (immortalized fibroblasts). Relevance to primary human cells, aged tissue, and in vivo aging is inferred rather than demonstrated. #gap/needs-human-replication

2. **Mouse in-vivo data is limited to copy-number increase in young mice.** The *Cgas* knockout mice were 3–4 months old — not aged. Whether L1 copy-number expansion in cGAS-deficient tissue scales with aging and whether it produces functional phenotypic consequences in vivo is not shown. #gap/needs-human-replication

3. **Directionality of chronic inflammation not directly tested.** The paper does not measure SASP markers, cytokine output, or IFN-stimulated gene expression as a function of the cGAS/TRIM41/ORF2p axis activity. The prediction that nuclear cGAS restriction of ORF2p reduces cytosolic L1 cDNA and thereby dampens STING activation is mechanistically coherent but not directly demonstrated here. #gap/no-mechanism

4. **CHK2 as the upstream kinase — specificity.** CHK2 is a broadly active DNA damage kinase; other substrates (BRCA2, CDC25A, p53) are also phosphorylated under damage conditions. The contribution of CHK2-mediated cGAS-S120/S305 phosphorylation to L1 restriction specifically (vs. other DNA damage responses simultaneously) is not isolated. #gap/no-mechanism

5. **Translation to cancer risk vs aging.** The 7 cancer-associated cGAS mutations establish disease relevance for tumorigenesis; whether common aging-associated somatic mutations in CGAS disrupt L1 restriction (vs. just cancer-driver mutations) is not examined. #gap/needs-human-replication

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Entire CHK2 → cGAS-pS120/pS305 → TRIM41 → ORF2p-Ub → proteasome axis demonstrated in human cell lines (HeLa, IMR90-hTERT, HCA2-hTERT) |
| Phenotype conserved in humans? | partial | Human cell line evidence for L1 copy-number control; no primary human tissue or in-vivo aging data |
| Replicated in humans? | no | No independent replication in human cohorts or aged primary cells reported |

The *Cgas* knockout mouse data (kidney/brain copy-number increase) provides in-vivo support for the restriction mechanism, but in young mice — not aged. #gap/needs-human-replication

## See also

- [[cgas]] — protein page; cGAS dual-function biology, nuclear and cytosolic arms; K48-ubiquitination PTM registry
- [[trim41]] — protein page; E3 ligase architecture; coiled-coil ORF2p interaction surface; Chen 2025 cGAS-eviction role
- [[vcp]] — P97/VCP segregase; acts downstream of TRIM41-mediated ubiquitination of cGAS in the Chen 2025 arm; not directly invoked in Zhen 2023 (ORF2p is proteasomally degraded, not chromatin-evicted)
- [[cgas-sting]] — pathway page; cytosolic-sensing arm driven by L1 cDNA products; nuclear cGAS restriction (this paper) as antagonistic upstream brake
- [[genomic-instability]] — hallmark; L1 retrotransposition as a mechanism of somatic genome diversification in aging
- [[cellular-senescence]] — hallmark; SIPS validation in this paper; L1 reactivation as senescence driver
- [[chronic-inflammation]] — hallmark; L1-driven SASP amplification via cGAS-STING; this paper's mechanism is an upstream brake on that loop
- [[studies/chen-2025-nmr-cgas-hr-repair]] — mechanistic sequel; same Mao lab; TRIM41 now ubiquitinates cGAS itself; NMR four-AA divergence weakens this → prolonged cGAS chromatin retention → HR potentiated
- [[studies/liu-2018-nuclear-cgas-hr-suppression]] — prior work establishing nuclear cGAS as HR suppressor in human and mouse cells (same protein, different chromatin substrate function)

---

[^zhen2023]: [[studies/zhen-2023-trim41-cgas-l1]] · n=null (cell-based mechanistic study; n=6 for retrotransposition assay, n=9 replicates/3 mice per group for in-vivo copy-number) · in-vitro+in-vivo · model: HeLa (etoposide SIPS), IMR90-hTERT + HCA2-hTERT (X-ray 15 Gy SIPS; subcellular fractionation), *Cgas*-KO mice (3–4 mo; kidney + brain) · Zhen Z et al. · *Nature Communications* 2023 · doi:10.1038/s41467-023-43001-y · PMID:38086852 · PMC:PMC10716122 · GOLD OA

[^dececco2019]: doi:10.1038/s41586-018-0784-9 · De Cecco M et al. · *Nature* · 2019 · 1175 citations · closed-access; not in a local paper archive · in-vivo + in-vitro · "L1 drives IFN in senescent cells and promotes age-associated inflammation"; established that L1 reactivation in senescent cells generates cytosolic cDNA that activates cGAS-STING and amplifies SASP; foundational context for L1-aging connection. #gap/needs-replication (senescent-cell data primarily murine)

[^liu2018]: doi:10.1038/s41586-018-0629-6 · Liu H et al. · *Nature* · 2018 · 611 citations · closed-access; not in a local paper archive · in-vitro + in-vivo · "Nuclear cGAS suppresses DNA repair and promotes tumorigenesis"; established nuclear cGAS as an HR inhibitor; prior work contextualizing Zhen 2023 as a third nuclear function (ORF2p restriction) independent of the HR-suppression axis.
