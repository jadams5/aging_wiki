---
type: protein
aliases: [X-inactive specific transcript, XIST lncRNA, NCRNA00001, LINC00001]
uniprot: null
ncbi-gene: 7503
hgnc: 12810
ensembl: ENSG00000229807
genage-id: null
is-noncoding-rna: true
pathways: ["[[polycomb-repressive-complex-2]]", "[[x-chromosome-inactivation]]"]
hallmarks: ["[[epigenetic-alterations]]"]
sens-categories: []
complex-subunits: []
mouse-ortholog: Xist
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-applicable-somatic
caused-by: []
causes: ["[[epigenetic-alterations]]"]
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Dou 2024 (Cell) verified against local PDF (pages 1-14): all quantitative claims (5/8 pathology, p=0.009, anti-CENPB p=0.02, 53 autoantigens, 28/37 novel) confirmed; XIST RNA size corrected (human ~19 kb, not ~17 kb). Carrel & Willard 2005 (Nature) verified against local PDF: 15% consistent escapers + 10% variable confirmed; 15–25% framing accurate. Zhao 2008 verified against PubMed abstract (PMC open): RepA/PRC2/EZH2 claims confirmed; PDF not read locally (not in archive). Chu 2015 verified against PubMed abstract (PMC open): 81 proteins, SPEN/A-repeat/gene-silencing claims confirmed; PDF not read locally (not in archive). Canonical IDs (NCBI Gene 7503, HGNC 12810, ENSG00000229807, RefSeq NR_001564, Xq13.2) not independently re-verified against live databases — seeder pulled from HGNC REST API 2026-06-03; recommend cross-check on next lint pass."
---

# XIST (X-inactive specific transcript)

XIST is the master long non-coding RNA (lncRNA) of [[x-chromosome-inactivation|X-chromosome inactivation (XCI)]] in mammals. Transcribed exclusively from the future inactive X chromosome (Xi), the ~19 kb human XIST transcript (mouse Xist is ~17 kb) coats the Xi in cis, recruits silencing machinery (PRC2, SPEN, macroH2A), and drives the formation of stable facultative heterochromatin across the entire chromosome. Because XIST is constitutively expressed in all female somatic cells, its ribonucleoprotein (RNP) complex is a uniquely female molecular structure — and one now recognized as a source of autoantigens driving female-biased autoimmune disease [^dou2024]. Age-related erosion of Xi heterochromatin, and the downstream consequences for [[immunosenescence|immune dysregulation]], are active areas of research. **XIST does not encode a protein** — it functions entirely as an RNA molecule; `uniprot: null` is structurally accurate, not a data gap. #gap/needs-canonical-id is not applicable.

## Identity

- **Gene type:** Long non-coding RNA (lncRNA); RNA, long non-coding (HGNC locus group)
- **NCBI Gene ID:** 7503 (XIST, *H. sapiens*)
- **HGNC ID:** HGNC:12810
- **Ensembl gene:** ENSG00000229807
- **Chromosomal location:** Xq13.2 (X-inactivation center, XIC)
- **RefSeq transcript:** NR_001564 (multiple splice variants; 13 annotated transcript variants by NCBI)
- **Alias symbols:** NCRNA00001, DXS1089, swd66, LINC00001, DXS399E (prior symbol)
- **Mouse ortholog:** *Xist* (highly conserved syntenic locus; functional conservation of XCI initiation confirmed in mouse models)
- **UniProt:** null — XIST produces no protein product; UniProt does not index lncRNA gene products

## Structure: Repeat Domains and Functional Modules

The XIST transcript contains at least six classes of tandemly repeated sequence elements (RepA–RepF), each recruiting distinct protein effectors [^raposo2021]:

| Repeat | Location (approx.) | Key binding partner | Primary function |
|---|---|---|---|
| **A-repeat** | 5′ region | SPEN (SHARP), PRC2 (via EZH2) | Gene silencing initiation |
| **B-repeat** | Central | HNRNPK | PRC1 recruitment; H2AK119ub |
| **C-repeat** | Central | HNRNPU (SAF-A) | Xi tethering to nuclear lamina |
| **D-repeat** | 3′ region | YY1, CIZ1 | Anchoring XIST to Xi |
| **E-repeat** | 3′ region | MATR3 | Spreading / localization |
| **F-repeat** | Scattered | Context-dependent | Modulatory |

The A-repeat is the functionally critical silencing domain: deletion of A-repeat from XIST abolishes gene silencing while preserving Xi coating and localization [^chu2015]. The B-repeat domain recruits PRC1 (via HNRNPK) and is required for H2A monoubiquitination (H2AK119ub), a mark that reinforces the silent state independently of H3K27me3.

A 2024 study revealed that G-quadruplex (G4) folding within XIST RNA acts as an intrinsic brake on PRC2 activity — during initiation, G4 structures in the A-repeat region are resolved to allow full PRC2 engagement; this stepwise mechanism prevents premature chromatin silencing during the early developmental window when XIST is being established [^lee2024].

## Mechanism of Action in XCI

XIST operates through a hierarchical cascade. For the full XCI process, see [[x-chromosome-inactivation]]; what follows focuses on XIST's molecular effector role.

### Step 1 — Upregulation and cis-coating

On the future Xi (chosen by a stochastic mechanism during early post-implantation development), XIST expression is induced and the RNA accumulates in the nucleus, spreading in cis across the entire Xi. The antisense lncRNA **TSIX** — transcribed across the XIST locus on the opposite strand — is expressed from the active X (Xa), suppressing XIST there and maintaining asymmetric coating. XIST coating is detectable within hours of induction and precedes chromatin compaction.

### Step 2 — PRC2 recruitment and H3K27me3 spreading

The A-repeat domain of XIST directly recruits Polycomb Repressive Complex 2 (PRC2; core catalytic subunit EZH2) via the RepA sub-element — an interaction first characterized by Zhao et al. [^zhao2008]. PRC2 deposits H3K27me3 across the Xi, the canonical mark of facultative heterochromatin. This is the primary histone modification establishing transcriptional silence. EZH2 is the RNA-binding subunit within PRC2 that directly contacts RepA.

### Step 3 — SPEN-mediated gene silencing

SPEN (also called SHARP or MINT) is the immediate effector of gene silencing downstream of A-repeat binding. Chu et al. identified SPEN as one of the most critical XIST-associated proteins through a comprehensive ChIRP-MS screen of 81 XIST interactors [^chu2015]. SPEN contains RNA recognition motif (RRM) domains that bind XIST A-repeat and a SPOC domain that recruits the NuRD deacetylase complex and HDAC3 — the immediate enzymatic link between XIST coating and histone deacetylation at silenced gene promoters. Importantly, SPEN appears to have co-opted an ancestral antiviral function: Carter et al. showed that Spen binds endogenous retroviral RNA sequences structurally similar to XIST's A-repeat, suggesting XCI silencing machinery was recruited from pre-existing RNA-mediated antiviral defense [^carter2020].

### Step 4 — Chromatin compaction and macroH2A incorporation

Downstream of the primary PRC2/SPEN events, the Xi accumulates additional silencing layers:
- **macroH2A** histone variants replace canonical H2A, stabilizing the silent state
- **H2AK119ub** deposition (PRC1, recruited via B-repeat/HNRNPK)
- **DNA methylation** at CpG islands of silenced gene promoters (DNMT3A/DNMT3B)
- **Loss of active marks** (H3K4me3, H3K27ac)
- **3D reorganization** — the Xi compacts into a Barr body, a cytologically visible dense nuclear compartment

These layers are mutually reinforcing: loss of any single mark is insufficient to reactivate silenced genes, explaining the extreme stability of XCI once established.

## Aging Relevance

### 1. XCI erosion and XIST integrity

With age, the heterochromatin state of the Xi undergoes progressive erosion — part of the broader [[epigenetic-alterations]] hallmark. Though XIST RNA itself continues to be expressed in aged cells, the downstream silencing marks it deposits become increasingly unstable:

- H3K27me3 at the Xi declines with age in some tissues
- DNA methylation at silenced gene promoters shows increased variability (not uniform erosion) in large aging cohorts [^liu2023-xci-page]
- Escape gene expression from the Xi increases in aged cells, indicating that XIST-maintained silencing is leaky in old tissue

Whether these changes reflect impaired XIST RNA function, reduced abundance, or downstream effector loss (e.g., EZH2 decline, SPEN dissociation) is not yet established. #gap/no-mechanism

### 2. XIST RNP complex as a female-specific autoantigen

The most striking aging-adjacent discovery is that the XIST RNP complex — the full assemblage of 81 proteins associated with XIST RNA (during XCI establishment in mouse ESCs; 10 through direct RNA-protein interaction, others through indirect protein-protein interaction) — functions inadvertently as a source of autoantigens, driving female-biased autoimmunity [^dou2024].

Dou et al. (2024, *Cell*) used a transgenic male mouse model expressing ΔRepA-Xist — a truncated, non-silencing Xist allele that retains RNP-complex assembly but cannot silence genes in cis (thus avoiding lethality). This design isolates the RNP immunogenicity signal from any XCI-dosage effect.

Key findings:

- **SJL/J background** (autoimmune-prone): ΔRepA-Xist males treated with pristane (lupus chemical inducer) developed markedly more severe multi-organ pathology than WT males; 5/8 tgXist males reached female-level pathology scores (≥10), vs 0/8 WT males (p=0.009, FDR<0.05). Anti-CENPB autoantibodies were significantly elevated (p=0.02, FDR<0.05).
- **C57BL/6J background** (autoimmune-resistant): tgXist males did not develop lupus-like disease even after 1 year, though T-cell chromatin states shifted toward a female-like pattern — indicating the RNP complex is not sufficient alone but amplifies pre-existing autoimmune susceptibility.
- **Patient serology** (dermatomyositis, systemic sclerosis, SLE): 53 XIST-associated proteins showed significant reactivity in patient sera; 28 of 37 high-confidence XIST complex proteins were novel autoantigens not previously described for these diseases.

The mechanistic implication: XIST RNA continuously assembles a large, nuclear RNP complex in all female somatic cells. When cells undergo apoptosis or NETosis (especially in inflammatory contexts), XIST RNP components are released extracellularly and presented to the adaptive immune system. Because this complex is exclusively female (males lack constitutive XIST expression), it adds a structurally-unique autoantigen axis orthogonal to the escape-gene-dosage hypothesis of female autoimmune bias.

**Aging interaction:** how XIST complex immunogenicity changes with age is not yet characterized. One plausible hypothesis: as XCI erodes and Xi heterochromatin becomes less compact, XIST RNA and its associated proteins may be more accessible to cytoplasmic sensors; conversely, the increased cellular turnover and apoptotic burden in aged tissues may increase release of XIST RNP antigens into circulation. Both predictions are untested. #gap/no-mechanism

See [[immunosenescence]] for the broader immune-aging context and [[x-chromosome-inactivation]] § Autoimmunity link for the full Dou 2024 dataset.

### 3. XIST and cancer

Loss of XIST expression and Xi reactivation occurs in multiple cancers. The relationship is complex:

- **Breast cancer:** The Xi is frequently lost cytogenetically in breast cancer cells, and remaining X chromosomes often lose XIST expression — effectively erasing XCI [^sirchia2005]. This is more commonly chromosomal loss than epigenetic reactivation.
- **Endometrial and ovarian cancers:** Reduced XIST expression and XCI erosion have been documented, though whether this is causal or a downstream consequence of global hypomethylation is debated.
- **Tumor suppressor gene reactivation concern:** Xi carries many genes that are normally monoallelically expressed. XIST loss raises the theoretical concern that a tumor-suppressor allele previously silenced on the Xi could be reactivated, or conversely that an oncogenic allele could gain biallelic expression. The clinical implications for specific genes remain active areas of investigation. #gap/needs-replication

Cancer-specific XIST function is outside this wiki's aging-mechanisms scope; these notes provide cross-linking context for users investigating aging-cancer intersections.

## Key Interactors

| Protein | Function in XIST RNP | XIST Domain |
|---|---|---|
| [[ezh2]] (PRC2 catalytic) | H3K27me3 deposition; recruited via RepA | A-repeat |
| [[suz12]] (PRC2 scaffolding) | PRC2 complex integrity | A-repeat |
| SPEN / SHARP | Gene silencing via HDAC3/NuRD; immediate effector | A-repeat |
| HNRNPK | PRC1 recruitment; H2AK119ub | B-repeat |
| HNRNPU / SAF-A | Xi nuclear tethering | C-repeat |
| CIZ1 | Xi anchoring at nuclear matrix | D-repeat |
| macroH2A / H2AFY | Xi chromatin stabilization (histone variant) | downstream |
| YY1 | Transcription factor; XIST anchoring | D-repeat |

Most interactors were characterized by the systematic ChIRP-MS study (Chu et al. 2015 [^chu2015]) and subsequent structure-function analyses. For interactors linked to the autoantigen function specifically, see Dou et al. 2024 [^dou2024].

## Pathway Membership

- [[x-chromosome-inactivation]] — master lncRNA effector; the canonical home for the full XCI process description (this page covers XIST's molecular mechanism in detail; that page covers the full XCI process including TSIX regulation, escape, skewing, and aging-context integration)
- [[polycomb-repressive-complex-2]] — PRC2 is the primary chromatin-writing complex recruited by XIST; EZH2 directly contacts RepA
- [[epigenetic-alterations]] — XIST-maintained Xi heterochromatin is a component of the female epigenetic landscape; its age-related erosion is part of this hallmark

## Extrapolation Quality

| Dimension | Status | Notes |
|---|---|---|
| Mechanism conserved in humans? | yes | XIST/XCI is highly conserved across eutherian mammals; RepA-PRC2 interaction confirmed in human cells |
| Aging phenotype conserved in humans? | partial | Xi erosion with age shown in human cohorts; causal chain to disease not yet established in humans |
| Replicated in humans? | partial | XIST RNP autoantigenicity confirmed in human DM/SSc/SLE patient serology (Dou 2024); Xi epigenetic instability confirmed in large cohort (Liu 2023); mechanistic intervention data human-only pending |

## Limitations and Gaps

- The mechanism by which XIST RNA itself changes (or does not change) with age — in terms of transcript levels, splice isoform ratios, or secondary structure — has not been characterized systematically across aging tissues. Most aging studies measure downstream marks (H3K27me3, DNA methylation) rather than XIST RNA directly. #gap/no-mechanism
- Whether XIST complex immunogenicity increases with age (due to greater cellular turnover, increased apoptotic burden, or changed RNP composition in aged cells) is entirely unexplored. #gap/needs-replication
- The druggability of XIST-mediated XCI for aging applications is essentially zero at present. PRC2 inhibitors (e.g., tazemetostat) are in oncology use but would erode XCI if used systemically — the opposite of what would be needed to restore Xi heterochromatin. No clinical probe restores XIST function specifically. #gap/no-mechanism
- lncRNA-specific schema issue: the `mr-causal-evidence:` field is set to `not-applicable-somatic` because XIST is a lncRNA gene on the X chromosome — germline MR via GWAS instruments is structurally inapplicable (X-linkage complicates standard instrument derivation, and XIST's constitutive expression in all female somatic cells makes the germline-exposure-to-outcome model incoherent for this locus). This is a distinct case from CHIP-driver somatic variants; the `not-applicable-somatic` enum is repurposed here with documented rationale.

## Footnotes

[^zhao2008]: doi:10.1126/science.1163045 · Zhao J, Sun BK, Erwin JA, Song JJ, Lee JT · *Science* 2008 · PMID:18974356 · in-vitro / molecular (mouse ESC) · n=N/A · RepA sub-element within XIST directly recruits PRC2 via EZH2 RNA-binding; PRC2 required for H3K27me3 deposition on Xi; model: mouse embryonic stem cells

[^chu2015]: doi:10.1016/j.cell.2015.03.025 · Chu C, Zhang QC, da Rocha ST, Flynn RA, et al. · *Cell* 2015 · PMID:25843628 · in-vitro / molecular (ChIRP-MS) · n=N/A · systematic discovery of 81 XIST RNA-binding proteins; SPEN interaction via A-repeat domain confirmed essential for gene silencing; model: mouse/human cell lines

[^dou2024]: doi:10.1016/j.cell.2023.12.037 · Dou DR, Zhao Y, Belk JA, Zhao Y, et al. · *Cell* 2024 · in-vivo (transgenic mouse, ΔRepA-Xist) + patient serology (DM/SSc/SLE) · XIST RNP complex promotes female sex-biased autoimmunity; 5/8 tgXist SJL/J males reached female-level pathology (p=0.009); 53 XIST-associated autoantigens in patient sera; 28/37 high-confidence XIST complex proteins were novel autoantigens; C57BL/6J males resistant to disease development; local PDF: available

[^lee2024]: doi:10.1016/j.molcel.2024.04.015 · Lee YW, Weissbein U, Blum R, Lee JT · *Molecular Cell* 2024 · in-vitro / molecular · G-quadruplex folding in XIST A-repeat region antagonizes PRC2 activity in a stepwise manner; G4 resolution required for full PRC2 engagement during XCI initiation

[^carter2020]: doi:10.7554/eLife.54508 · Carter AC, Xu J, Nakamoto MY, et al. · *eLife* 2020 · in-vitro / molecular · PMID:32379046 · Spen/SHARP binds endogenous retroviral RNA sequences with structural homology to XIST A-repeat; suggests XCI coopted pre-existing antiviral RNA-silencing machinery

[^raposo2021]: doi:10.1042/bst20210253 · Raposo AC, Casanova M, Gendrel AV, da Rocha ST · *Biochemical Society Transactions* 2021 · review · tandem repeat modules of XIST lncRNA: functions of RepA–RepF in X-chromosome inactivation; 34 citations as of search date

[^loda2022]: doi:10.1038/s41580-021-00438-7 · Loda A, Collombet S, Heard E · *Nature Reviews Molecular Cell Biology* 2022 · review · comprehensive review of gene regulation during XCI; XIST as master regulator; chromatin 3D reorganization on Xi

[^carrel2005]: doi:10.1038/nature03479 · Carrel L, Willard HF · *Nature* 2005 · observational (genome-wide XCI survey) · ~15–25% of human X-linked genes escape XCI; escape enriched on Xp; local PDF: available

[^sirchia2005]: doi:10.1158/0008-5472.CAN-04-3465 · Sirchia SM, Ramoscelli L, Grati FR, et al. · *Cancer Research* 2005 · PMID:15781624 · in-vitro (breast cancer cell lines) · Xi frequently lost cytogenetically in breast cancer; active X replicates instead; model: BRCA1-defective and wild-type breast cancer cell lines

[^liu2023-xci-page]: Referenced from [[x-chromosome-inactivation]] footnote [^liu2023] — doi:10.1186/s13148-023-01549-y · Liu Y, Sinke L, et al. · *Clinical Epigenetics* 2023 · observational · n=2343F/1688M (discovery) · inactive X accumulates age-related epigenetic variability (1098 aVMCs vs 80 aDMCs) rather than uniform mean shifts
