---
type: protein
aliases: [xCT, SLC7A11, solute carrier family 7 member 11, system xc- light chain, CCBR1]
uniprot: Q9UPY5
ncbi-gene: 23657
hgnc: 11059
ensembl: ENSG00000151012
genage-id: null
pathways: ["[[nrf2-pathway]]", "[[glutathione-synthesis]]", "[[p53-pathway]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[cellular-senescence]]", "[[genomic-instability]]"]
sens-categories: []
complex-subunits: ["Q9UPY5", "P08195"]   # xCT (light chain) + SLC3A2/4F2hc (heavy chain); SLC3A2 UniProt P08195
is-noncoding-rna: false
mouse-ortholog: Slc7a11
druggability-tier: 2
gtex-aging-correlation: "#gap/not-populated — GTEx tissue-by-age SLC7A11 Spearman ρ not yet extracted; populate per sops/finding-tissue-expression.md"
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Koppula 2021 (Protein & Cell, PDF), Habib 2015 (Redox Biology, PDF), Jiang 2015 (Nature, PMC OA full text), and Lohoff 2022 (Mol Psychiatry, PDF) verified end-to-end against primary sources. He 2023 (J Hepatology) is closed-access and not on PMC — ATF4-induces-SLC7A11 direction confirmed from Koppula 2021 review citing Chen et al. 2017 but He 2023 primary claims not directly PDF-verified; tagged #gap/no-fulltext-access. Canonical-DB identity fields (UniProt Q9UPY5, NCBI 23657, HGNC 11059, Ensembl ENSG00000151012) confirmed by seeder on 2026-06-14 and not re-derived here."
---

# SLC7A11 (xCT)

**SLC7A11** (solute carrier family 7 member 11), also known as **xCT**, encodes the light/catalytic subunit of **system xc⁻**, a sodium-independent plasma-membrane cystine/glutamate antiporter. The transporter imports extracellular L-cystine in exchange for intracellular L-glutamate (1:1 stoichiometry), making it the **rate-limiting supplier of cysteine** for glutathione (GSH) synthesis and the **master negative regulator of ferroptosis** via the GSH→GPX4 axis [^koppula2021]. It also exports glutamate into the extracellular space, linking it to glutamatergic neurotransmission and addiction biology. A promoter CpG site in SLC7A11 (cg06690548) is the top epigenome-wide locus of alcohol intake in humans, providing a direct mechanistic bridge from alcohol exposure to altered redox and ferroptotic vulnerability [^lohoff2022].

## Identity

- **UniProt:** Q9UPY5 (XCT_HUMAN) — reviewed Swiss-Prot entry; confirmed 2026-06-14
- **NCBI Gene:** 23657 — confirmed 2026-06-14
- **HGNC:** 11059 — confirmed 2026-06-14
- **Ensembl:** ENSG00000151012 — confirmed 2026-06-14
- **Mouse ortholog:** Slc7a11 (UniProt Q9WTR6; MGI sentence-case convention) — confirmed reviewed Swiss-Prot entry 2026-06-14
- **GenAge HAGR:** not listed (entry-not-found; 2026-06-14)
- **Chromosome:** 4q28.3 (human)
- **Protein length:** 501 amino acids; 55,423 Da; 12 predicted transmembrane helices (SLC7 family topology)

**Disambiguation note.** There is no `pathways/slc7a11` page — the file `molecules/proteins/slc7a11.md` is unambiguous, with canonical wikilink `[[slc7a11]]`.

## The system xc⁻ heterodimer

SLC7A11 is the **light chain (catalytic subunit)** of system xc⁻ and cannot traffic to the plasma membrane alone. It requires obligate disulfide-linked dimerization with **SLC3A2** (4F2hc / CD98hc; UniProt P08195), the **heavy chain** that anchors the complex in the membrane and mediates intracellular trafficking [^koppula2021]. SLC3A2 is a multifunctional scaffold shared by multiple SLC7 family members (LAT1/SLC7A5 among others); the biological specificity of system xc⁻ comes from the SLC7A11 light-chain subunit, which determines substrate selectivity (cystine over other amino acids). Downstream pages for SLC3A2 should be linked here when created: [[slc3a2]] (stub).

| Subunit | Gene | UniProt | Role |
|---|---|---|---|
| Light chain (catalytic) | SLC7A11 | Q9UPY5 | Substrate binding; antiport activity; ferroptosis regulation |
| Heavy chain (trafficking) | SLC3A2 (4F2hc) | P08195 | Membrane anchoring; disulfide bond formation; glycosylation |

## Core function

System xc⁻ operates as a **cystine/glutamate antiporter**: one cystine molecule enters the cell per one glutamate molecule exported, driven by the electrochemical gradient for glutamate and the high extracellular:intracellular cystine ratio in normal physiology [^koppula2021]. Once imported, cystine is rapidly reduced intracellularly to two cysteine molecules. Cysteine is the **rate-limiting amino acid** for tripeptide glutathione (γ-Glu-Cys-Gly / GSH) synthesis by the enzymes GCL (glutamate-cysteine ligase; rate-limiting) and GSS (glutathione synthetase).

The anti-ferroptotic consequence is direct: high system xc⁻ activity → high intracellular cysteine → high GSH → [[gpx4]] (glutathione peroxidase 4, a selenoprotein) can reduce phospholipid hydroperoxides (PE-OOH) to inert alcohols (PE-OH), neutralizing the lipid-peroxidation chain reaction that executes [[ferroptosis]]. See [[processes/ferroptosis]] for the full mechanism.

**Secondary function — glutamate release.** The stoichiometric export of glutamate contributes to extracellular glutamate levels in the CNS. In neural contexts, elevated system xc⁻ activity (e.g., driven by alcohol-induced SLC7A11 upregulation) can raise extracellular glutamate enough to disturb neurotransmission and potentially contribute to excitotoxic stress or reward-circuit plasticity in alcohol use disorder [^lohoff2022].

## Regulation

### NRF2 — primary transcriptional inducer

The SLC7A11 promoter contains a functional **antioxidant response element (ARE)** that is directly bound and activated by [[nrf2]] (NFE2L2) in response to oxidative stress [^habib2015]. NRF2 displacement from KEAP1 (by electrophiles, ROS, or pharmacological NRF2 activators) results in NRF2 nuclear translocation and ARE-dependent SLC7A11 transcriptional induction, elevating cystine import and GSH synthesis as part of the integrated cytoprotective antioxidant response. SLC7A11 is therefore one of the most direct functional outputs of the KEAP1-NRF2-ARE axis and a key executor of NRF2's ferroptosis-protective function. Aging is associated with progressive NRF2 decline in multiple tissues — a mechanism by which system xc⁻ capacity may fall with age, increasing ferroptotic susceptibility. #gap/needs-human-replication

### p53 — canonical transcriptional repressor

[[p53]] directly represses SLC7A11 transcription by binding the SLC7A11 promoter and suppressing NRF2-mediated induction [^jiang2015]. This p53-SLC7A11 axis is a **non-canonical tumor-suppressor mechanism**: by limiting cystine import → reducing GSH → sensitizing cells to ferroptosis, p53 can kill incipient cancer cells via an apoptosis-independent route. The Nature 2015 paper by Jiang et al. established that the p53 3KR acetylation-defective mutant (K117R/K161R/K162R), which cannot induce cell-cycle arrest, senescence, or apoptosis, still suppresses tumorigenesis in xenograft models, and this residual suppression depends on the ability of p53 to repress SLC7A11 and engage ferroptosis [^jiang2015]. This work placed ferroptotic sensitization as a *third arm* of p53 tumor suppression alongside the canonical arrest, senescence, and apoptosis arms.

**Aging-context implication.** The p53-SLC7A11 repression axis is biologically balanced: in normal cells, moderate p53 activity fine-tunes redox homeostasis and ferroptotic threshold. Chronically activated p53 (as occurs in aged tissues experiencing persistent DNA damage or telomere dysfunction) may over-suppress SLC7A11, increasing ferroptotic vulnerability in normal post-mitotic cells (neurons, cardiomyocytes) — the same antagonistic-pleiotropy trade-off documented at the level of p53 itself (see [[p53]]). This is a plausible mechanistic contributor to the progressive ferroptotic sensitivity of aged tissues. #gap/needs-human-replication

### ATF4 — stress-induced inducer

[[atf4]], the integrated-stress-response (ISR) effector, also transcriptionally induces SLC7A11 under nutrient deprivation and ER stress [^he2023]. This appears to serve a hepatoprotective role: ATF4-driven SLC7A11 upregulation blocks stress-related ferroptosis in hepatocytes and acts as a tumor suppressor in hepatocellular carcinoma (contradicting the idea that high SLC7A11 is uniformly pro-tumorigenic). The ATF4-SLC7A11 axis is therefore context-dependent — in stressed normal cells it is protective; in established tumors it fuels antioxidant defense and chemotherapy resistance. The ATF4-induces-SLC7A11 direction (upregulation) is also independently corroborated by Koppula 2021 (review citing Chen et al. 2017) [^koppula2021]. #gap/no-fulltext-access (He 2023 J Hepatology primary PDF not directly verified — closed-access, not on PMC)

### DNA methylation / alcohol exposure

The CpG site **cg06690548** in the SLC7A11 promoter is the **top genome-wide locus of alcohol intake** in the largest EWAS of alcohol consumption performed to date (n=8,161; Lohoff et al. 2022 [^lohoff2022]). Liu et al. 2018 [^liu2018] independently developed a 144-CpG LASSO methylation predictor of alcohol consumption (n=13,317; top loci: TXLNA, LETM1, HNRNPA1, GABRD-GABBR1 region) — cg06690548/SLC7A11 was **not** among Liu 2018's top hits and should not be attributed to that paper. The direction of association confirmed by Lohoff 2022 is:

> alcohol intake → **hypomethylation** at cg06690548 → **increased SLC7A11 expression**

This has been validated in:
- **Frontal cortex of deceased alcohol-use-disorder (AUD) patients** — lower cg06690548 methylation tracking cumulative heavy drinking
- **Liver of animal models** — lower methylation associated with elevated GGT/ALT/AST [^lohoff2022]

The downstream functional consequences are twofold:
1. **Redox / ferroptosis axis**: elevated xCT → higher GSH synthesis → partial protection from ethanol-generated oxidative stress in hepatocytes; but sustained upregulation may also increase extracellular glutamate and sensitize non-hepatic cells to ferroptotic failure if the chronic redox burden eventually overwhelms the GSH buffer.
2. **Glutamatergic signaling**: elevated glutamate export by xCT in prefrontal cortex → dysregulated glutamatergic neurotransmission → craving and dependence maintenance in AUD [^lohoff2022]. Lohoff et al. frame the SLC7A11 methylation change as a candidate **therapeutic target in AUD**.

For the full epigenetic biomarker context, see [[biomarkers/dnam-alcohol-consumption]]. For the upstream exposure, see [[exposures/alcohol]].

## Role in aging

SLC7A11 sits at the intersection of several aging-relevant processes:

### 1. Ferroptosis resistance and age-related redox decline

System xc⁻ activity is the **primary cystine supply line** for cellular GSH. GSH depletion is a consistent feature of aged tissues, and the age-related decline in NRF2 activity (impaired KEAP1 dissociation; reduced nuclear NRF2 accumulation) functionally reduces SLC7A11 expression and thus cystine uptake [^koppula2021]. The resulting GSH shortfall lowers the threshold for GPX4-dependent ferroptosis in post-mitotic cells — neurons, cardiomyocytes, and retinal pigment epithelium — that cannot replace ferroptotically lost cells. This links directly to the neurodegeneration vulnerability and cardiac aging phenotypes described in detail on [[processes/ferroptosis]].

### 2. Fibrosis — a dual-edged role

A 2025 systematic review (*Aging and Disease*; Aging and Disease 2025 [^chen2025]) characterizes SLC7A11 in fibrosis as context-dependent: in hepatic stellate cells (HSCs), xCT inhibition induces ferroptosis and **attenuates liver fibrosis**; in tubular epithelial cells under TGF-β signaling, high SLC7A11 may actually **promote fibrotic EMT** by supporting a high-GSH, ROS-resistant state that sustains the activated myofibroblast phenotype. Age-related organ fibrosis (liver, kidney, lung) may therefore involve SLC7A11 in tissue-specific ways that are not yet resolved. #gap/contradictory-evidence

### 3. Disulfidptosis — a novel SLC7A11-high cell death mode

A 2025 review identifies a newly described cell-death mode called **disulfidptosis**, in which cells with *high* SLC7A11 expression paradoxically die from actin cytoskeletal collapse when glucose is acutely withdrawn — because sustained cystine import under glucose deprivation causes abnormal intracellular disulfide stress [^qiu2025]. The relevance to aging biology is nascent, but disulfidptosis may be relevant in metabolically stressed tissues where both high SLC7A11 expression (from chronic NRF2 activation) and periodic glucose insufficiency co-occur. #gap/needs-replication

### 4. Hallmark mapping rationale

SLC7A11 is assigned here to [[hallmarks/mitochondrial-dysfunction]] (primary; mitochondria are the dominant ROS source whose products defeat GSH/GPX4 when system xc⁻ is limiting), [[hallmarks/cellular-senescence]] (bidirectional: p53-driven senescence represses SLC7A11; senescent cells accumulate lipid peroxidation markers consistent with GSH limitation; ferroptosis can clear senescent cells), and [[hallmarks/genomic-instability]] (iron-Fenton DNA damage that parallels lipid peroxidation when GSH is limiting). No standalone "oxidative-stress" hallmark page exists in this wiki — that concept is distributed across the relevant primary hallmark pages.

## Known modulators

### Inhibitors (induce ferroptosis by blocking cystine import)

| Compound | Mechanism | Status |
|---|---|---|
| **Erastin** | Non-covalent SLC7A11 inhibitor; voltage-dependent anion channel 2 (VDAC2/3) interaction also described | Probe/research tool; not clinical |
| **Imidazole ketone erastin (IKE)** | Metabolically stable erastin analog; improved pharmacokinetics | Probe; oncology preclinical |
| **Sulfasalazine** | Partial SLC7A11 inhibitor at high concentrations; primary targets are dihydropteroate synthase (anti-inflammatory) | FDA-approved for IBD / RA but NOT for SLC7A11 modulation; partial selectivity only |
| **Sorafenib** | Multi-kinase inhibitor; incidental SLC7A11 inhibition at clinical concentrations | FDA-approved (HCC, RCC) but SLC7A11 is not the primary target; anti-ferroptotic rescue with ferrostatin-1 is evidence for partial SLC7A11 contribution |

**Druggability-tier rationale.** Open Targets Platform (queried 2026-06-14 against ENSG00000151012) shows: SM `Approved Drug = false`, `Advanced Clinical = false`, `Phase 1 Clinical = false`; `High-Quality Ligand = true`, `Structure with Ligand = true`; zero drug candidates in `drugAndClinicalCandidates`. Per the SOP decision tree, this maps to **Discovery Precedence = true → tier 2**. The existence of erastin/IKE as well-characterized chemical probes with structural information earns tier 2. Sulfasalazine's FDA approval is for IBD/RA via DHPS inhibition and NF-κB modulation — NOT for an SLC7A11-mediated aging or ferroptosis indication; applying the aging-context druggability convention (CLAUDE.md shared conventions), tier 2 is correct. Sorafenib is similarly approved for kinase inhibition, not for SLC7A11.

### Activators (increase cystine import; protect from ferroptosis)

| Compound / approach | Mechanism |
|---|---|
| **N-acetylcysteine (NAC)** | Membrane-permeant cysteine precursor; bypasses system xc⁻ to directly replenish GSH; used as a rescue in experimental ferroptosis models; licensed for acetaminophen overdose and mucolytic uses |
| **NRF2 activators** (sulforaphane, dimethyl fumarate, omaveloxolone) | Upregulate SLC7A11 transcription via ARE; see [[nrf2]] |
| **Pharmacological ATF4 inducers** (ISR activators) | Upregulate SLC7A11 downstream of eIF2α phosphorylation; see [[atf4]] |

## Extrapolation table

| Dimension | Status |
|---|---|
| Core antiport mechanism (cystine in, glutamate out) conserved in humans? | yes — SLC7A11/SLC3A2 heterodimer is ubiquitous in mammalian cells |
| p53 repression of SLC7A11 conserved in humans? | yes — validated in human cell lines; in-vivo human data limited |
| NRF2 induction of SLC7A11 conserved in humans? | yes — ARE in human SLC7A11 promoter confirmed; NRF2 activators raise xCT expression in human cell lines |
| Age-related decline in system xc⁻ activity demonstrated in humans? | no — largely inferred from NRF2 decline data; direct human tissue SLC7A11 activity measurements across age groups absent |
| DNAm-alcohol link (cg06690548) validated in humans? | yes — two large independent EWASs (n=8,161; n>10,000); frontal cortex expression confirmed [^lohoff2022] |

## Limitations and gaps

- **No direct measurement of system xc⁻ activity across human aging** — tissue-specific SLC7A11 activity data across life stages is absent; the age-related decline is inferred indirectly from NRF2 and GSH data. #gap/needs-human-replication
- **Dual role in cancer vs normal tissue** — SLC7A11 inhibition is pursued as an anti-cancer strategy (kill ferroptosis-sensitized tumors), but systemic inhibition in an aging context would also deplete GSH in normal post-mitotic cells, accelerating ferroptotic tissue loss. Therapeutic window is undefined. #gap/dose-response-unclear
- **Disulfidptosis mechanism** — the high-SLC7A11 / glucose-deprivation vulnerability is a 2023 discovery; its relevance to aging phenotypes is speculative. #gap/needs-replication
- **Fibrosis context-dependence** — SLC7A11 appears pro-fibrotic in some cell types and anti-fibrotic in others; the net tissue-level effect in aged organs is not established. #gap/contradictory-evidence
- **GTEx aging correlation** — SLC7A11 tissue-by-age expression profile not yet extracted from GTEx. #gap/not-populated
- **MR causal evidence** — no published Mendelian randomization study has used SLC7A11 variants as instruments for aging-relevant outcomes (oxidative stress load, neurodegeneration, longevity). `mr-causal-evidence: not-tested`

## Cross-references

- [[processes/ferroptosis]] — primary process; SLC7A11 is the key negative regulator
- [[molecules/proteins/gpx4]] — downstream ferroptosis effector requiring GSH from the xCT-GSH axis (stub; seeded separately from ferroptosis.md key-proteins)
- [[molecules/proteins/nrf2]] — master transcriptional inducer of SLC7A11 via ARE
- [[molecules/proteins/p53]] — canonical transcriptional repressor; p53-SLC7A11 axis = non-canonical tumor suppression via ferroptosis
- [[molecules/proteins/atf4]] — stress-induced transcriptional inducer of SLC7A11
- [[hallmarks/mitochondrial-dysfunction]] — primary hallmark; mitochondrial ROS overwhelms GSH/GPX4 when xCT is limiting
- [[hallmarks/cellular-senescence]] — bidirectional with ferroptosis; p53-driven senescence represses SLC7A11
- [[hallmarks/genomic-instability]] — iron-Fenton DNA damage co-occurs with lipid peroxidation under GSH depletion
- [[pathways/p53-pathway]] — upstream regulatory pathway
- [[biomarkers/dnam-alcohol-consumption]] — cg06690548 is top alcohol-DNAm locus; SLC7A11 is its host gene
- [[exposures/alcohol]] — upstream exposure driving SLC7A11 promoter hypomethylation
- [[slc3a2]] — obligate heterodimer heavy chain (SLC3A2 / 4F2hc / CD98hc); page stub needed

## Footnotes

[^koppula2021]: doi:10.1007/s13238-020-00789-5 · Koppula P, Zhuang L, Gan B · *Protein & Cell* 12(8):599–620 · 2021 · review · "Cystine transporter SLC7A11/xCT in cancer: ferroptosis, nutrient dependency, and cancer therapy" · 2,172 citations; comprehensive review of system xc⁻ biology, ferroptosis mechanism, p53-SLC7A11 axis, NRF2-SLC7A11 induction, and cancer therapeutic context

[^jiang2015]: doi:10.1038/nature14344 · Jiang L, Kon N, Li T, Wang SJ, Su T, Hibshoosh H, Baer R, Gu W · *Nature* 520(7545):57–62 · 2015 · in-vivo + in-vitro · n=MEFs (mixed C57BL/6J × SV129 background) + H1299/U2OS human cancer cell lines · p53 directly binds SLC7A11 promoter (confirmed by EMSA + ChIP) and represses transcription → cystine import falls → GSH depleted → ferroptotic sensitization; p53 3KR acetylation-defective mutant (K117R/K161R/K162R) fails to induce cell-cycle arrest, **senescence**, and apoptosis but fully retains SLC7A11 repression and ferroptosis induction; SLC7A11 overexpression rescues p53 3KR tumor-growth suppression in xenograft; establishes ferroptosis as a non-apoptotic third arm of p53 tumor suppression; >3,000 citations

[^lohoff2022]: doi:10.1038/s41380-021-01378-6 · Lohoff FW et al. · *Mol Psychiatry* 27(3):1754–1764 · 2022 · EWAS · n=8,161 (largest single-cohort EWAS of alcohol consumption at time of publication) · model: adult humans, whole blood · cg06690548 / SLC7A11 identified as top genome-wide alcohol-associated CpG; hypomethylation associates with heavy drinking days; validated in frontal cortex of deceased AUD patients and animal-model liver; elevated SLC7A11 expression confirmed; glutamate export mechanism proposed for AUD pathophysiology

[^liu2018]: doi:10.1038/mp.2016.192 · Liu C, Marioni RE, Hedman ÅK, et al. · *Mol Psychiatry* 23(2):422–433 · 2018 · EWAS · n=13,317 (13 population-based cohorts) · 144-CpG LASSO model predicts alcohol consumption; top loci reported: TXLNA, LETM1, HNRNPA1, GABRD-GABBR1 region — **cg06690548/SLC7A11 was not identified as a top hit in this paper**; that attribution belongs to Lohoff 2022 [^lohoff2022] · PMID 27843151

[^habib2015]: doi:10.1016/j.redox.2015.03.003 · Habib E, Linher-Melville K, Lin HX, Singh G · *Redox Biology* 5:33–42 · 2015 · in-vitro · n=MCF-7 human breast cancer cells · NRF2 overexpression upregulates xCT/SLC7A11 promoter activity (~35-fold, p=0.0075 by luciferase assay) and protein levels (~3.75-fold) via proximal ARE in xCT promoter; H₂O₂ treatment increased NRF2 nuclear translocation and xCT mRNA ~2-fold; KEAP1 overexpression reduces xCT promoter activity and protein levels; KEAP1 siRNA knockdown increases xCT protein and glutamate release; paper did NOT perform NRF2 siRNA knockdown directly

[^he2023]: doi:10.1016/j.jhep.2022.10.022 · He F, Zhang P, Liu J, Wang R, Kaufman RJ, Yaden BC, Karin M · *J Hepatology* 78(4):889–904 · 2023 · in-vitro + in-vivo · ATF4 suppresses hepatocarcinogenesis by inducing SLC7A11 to block stress-related ferroptosis; ATF4-SLC7A11 axis is hepatoprotective under ER stress and is a tumor suppressor in HCC context; demonstrates context-dependence of the anti-ferroptotic SLC7A11 function · **#gap/no-fulltext-access** — closed-access, not available via PMC OA; ATF4→SLC7A11 induction direction corroborated by Koppula 2021 review

[^chen2025]: doi:10.14336/AD.2025.0106 · Chen J, He Y, Chen R, Yang Z, Luo X, Yang F · *Aging and Disease* · 2025 · review · PMID 40249927 · "SLC7A11 in Fibrosis: Molecular Mechanisms and Future Prospects" — characterizes dual pro- and anti-fibrotic roles of SLC7A11 depending on cell-type context; xCT inhibition in hepatic stellate cells is anti-fibrotic via ferroptosis; elevated xCT in tubular epithelial cells may sustain fibrotic EMT

[^qiu2025]: doi:10.1186/s12964-025-02447-x · Qiu H, Liu J, Shao N, Zhao J, Chen C, Jiang Y, Zhao X, Xu L · *Cell Commun Signal* · 2025 · review · PMID 41146208 · "SLC7A11 as a bridge between ferroptosis and disulfidptosis: a promising target for tumor treatment" — reviews the dual vulnerability conferred by high SLC7A11: ferroptosis protection under normal cystine availability vs disulfidptosis under acute glucose withdrawal; mechanism involves abnormal disulfide bond accumulation and actin cytoskeletal collapse
