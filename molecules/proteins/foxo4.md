---
type: protein
aliases: [FOXO4, AFX, AFX1, MLLT7, forkhead box O4, AFX1 forkhead-like]
uniprot: P98177
ncbi-gene: 4303
hgnc: 7139
genage-id: null
mouse-ortholog: Foxo4
ensembl: ENSG00000184481
druggability-tier: 4  # no SM tractability features (Open Targets, FOXO4)
caused-by: []
causes: []
key-domains: [forkhead-DNA-binding, AKT-phosphorylation-sites, nuclear-export-sequence, transactivation]
key-ptms: [Thr32-phospho-AKT, Ser197-phospho-AKT, Ser262-phospho-AKT, Lys-acetyl-CREBBP, monoubiquitination-oxidative-stress]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[cellular-senescence]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[akt]]", "[[14-3-3]]", "[[p53]]", "[[sirt1]]", "[[usp7]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Baar 2017, Hosaka 2004, Tothova 2007, and Brunet 1999 claims verified against primary PDFs. UniProt P98177 AKT phospho-site residue numbers verified against live UniProt feature table. Borkhardt 1997 (not_oa) unverifiable — leukemia translocation claims cannot be confirmed from primary source."
---


# FOXO4 (Forkhead Box Protein O4)

FOXO4 is the third mammalian FOXO paralog — sharing the canonical AKT-regulated cytoplasmic sequestration mechanism with [[foxo1]] and [[foxo3]], but distinguished by its **central role in senescent cell survival via a FOXO4-p53 protein-protein interaction**. Unlike FOXO1 (hepatic metabolic axis) or FOXO3 (multi-tissue longevity genetics), FOXO4's most aging-relevant function is in maintaining senescent cells alive: in senescent cells, FOXO4 accumulates and interacts with [[p53]] to prevent p53-driven apoptosis, thereby sustaining the senescent state and its associated [[sasp|SASP]]. The FOXO4-DRI senolytic peptide (Baar 2017) exploits this mechanism by disrupting the FOXO4-p53 interaction, releasing p53 to the cytoplasm and triggering selective apoptosis of senescent cells — a major proof-of-concept for protein-protein interaction senolytics.

## Identity

- **UniProt:** P98177 (FOXO4_HUMAN; reviewed Swiss-Prot entry)
- **NCBI Gene:** 4303
- **HGNC symbol:** FOXO4 (previously AFX, AFX1; chromosomal translocation designation MLLT7)
- **Mouse ortholog:** Foxo4 (one-to-one ortholog)
- **Length:** 505 amino acids (canonical isoform)
- **Chromosomal location:** Xq13.1; involved in t(X;11)(q13;q23) translocation in acute leukemias
- **GenAge:** No human entry confirmed #gap/needs-canonical-id; no models entry confirmed — FOXO4 aging evidence currently not curated in GenAge despite Baar 2017

**Nomenclature note:** The gene was originally identified as AFX (Acute lymphocytic leukemia [or AFX forkhead-domain gene]) and designated MLLT7 (Myeloid/Lymphoid or Mixed-Lineage Leukemia Translocation To 7) in leukemia contexts. Current HGNC-approved symbol is FOXO4. All three names appear in cited literature; this page uses FOXO4 throughout.

## FOXO family context

Four mammalian FOXO paralogs, all regulated by AKT at three conserved phosphorylation sites:

| Paralog | Old name | Primary tissue context | Key aging role |
|---|---|---|---|
| [[foxo1]] | FKHR | Liver, adipose, beta-cells | Hepatic gluconeogenesis; no strong longevity GWAS signal |
| [[foxo3]] | FKHRL1 | Ubiquitous; brain, heart | Strongest human longevity GWAS (rs2802292); canonical longevity TF |
| **FOXO4** | AFX / MLLT7 | Ubiquitous | **Senescent cell survival via FOXO4-p53 interaction; FOXO4-DRI senolytic peptide** |
| FOXO6 | — | Brain-restricted | Memory consolidation; minimal aging literature |

FOXO4 is the **most senescence-associated FOXO paralog** — its expression is selectively elevated in senescent cells relative to proliferating and quiescent cells [^baar2017].

## Domain organization

| Region | Residues (approx.) | Function |
|---|---|---|
| N-terminal regulatory domain | 1–99 | Contains AKT phospho-site Thr32; 14-3-3 docking |
| Forkhead (winged-helix) DNA-binding domain | 100–188 | Sequence-specific DNA binding to FHRE consensus; contains Ser197 |
| Nuclear export sequence (NES) | ~200–220 (approx.) | CRM1-dependent cytoplasmic export after phosphorylation |
| C-terminal transactivation domain | ~220–505 | Contains Ser262 AKT site; transcriptional activation; acetylation by CREBBP/CBP; deacetylation by SIRT1 |

Residue boundaries from UniProt P98177 feature table (forkhead domain 100–188 confirmed); other boundaries approximate. #gap/unsourced — precise NES boundaries should be cross-checked against UniProt feature table and primary structural literature.

**Note on phospho-site numbering:** UniProt P98177 lists AKT phosphorylation sites as Thr32, Ser197, Ser262 — confirmed against the live UniProt P98177 feature table (evidence: ECO:0000269|PubMed:16272144 for Thr32; PubMed:10217147, 10518537, 16272144 for Ser197 and Ser262). These are **analogous to FOXO3 Thr32/Ser253/Ser315 and FOXO1 Thr24/Ser256/Ser319** by sequence homology. An alternate numbering (Thr28/Ser193/Ser258) appears in older literature and may reflect a different isoform annotation; the current canonical UniProt canonical-isoform numbering is Thr32/Ser197/Ser262.

## AKT phosphorylation and cytoplasmic sequestration

AKT (PKB) phosphorylates FOXO4 at Thr32, Ser197, and Ser262 — the three conserved sites shared across the FOXO paralog family. By analogy with the directly demonstrated FOXO3 (FKHRL1) mechanism [^brunet1999]:

1. Insulin/IGF-1 → [[pi3k-akt-pathway]] → AKT activation
2. AKT phosphorylates FOXO4 at Thr32 and Ser197 → recruits [[14-3-3]] proteins → cytoplasmic sequestration
3. Phospho-Ser262 drives CRM1-dependent nuclear export
4. Net result: FOXO4 transcriptionally inactive; proliferative/survival gene expression dominates

Dephosphorylation (under fasting, PTEN activity, or PI3K inhibition) allows nuclear re-import. UniProt P98177 notes that monoubiquitination under oxidative stress also promotes nuclear retention.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Cytoplasmic sequestration in fed state conserved? | yes (by analogy with FOXO1/3; direct human data for FOXO4 specifically is limited) |
| Replicated in humans? | partial — mechanism confirmed in cell lines; in-vivo human data limited |

#gap/needs-replication — direct evidence for AKT→FOXO4 nuclear exclusion in primary human cells (vs. cell lines) is limited compared with FOXO1/3.

## Transcriptional targets

FOXO4 shares the core FHRE binding motif with FOXO1 and FOXO3 and likely activates overlapping target genes. Confirmed or well-supported targets include:

| Gene | Product | Context |
|---|---|---|
| *CDKN1B* (p27/Kip1) | CDK inhibitor | G1/S cell-cycle arrest |
| *BCL2L11* ([[bim]]) | BIM pro-apoptotic BH3-only protein | Apoptosis induction (shared with FOXO3) |
| *IGFBP1* | IGF-binding protein 1 | Insulin-response element binding (earliest characterized FOXO4 target) |
| *HIF1A* | HIF-1alpha | FOXO4 suppresses HIF1A expression; hypoxia-response modulation |

#gap/unsourced — FOXO4-specific target gene ChIP-seq data distinguishing FOXO4 from FOXO1/3 binding sites in aging or senescent cells is limited; most target gene claims are inferred from paralog family studies. A FOXO4-specific ChIP-seq in senescent cells would be highly informative.

## Discovery — AFX/MLL translocation in acute leukemia

FOXO4 was identified as the gene at the Xq13.1 breakpoint in the t(X;11)(q13;q23) translocation in acute leukemias [^borkhardt1997]. This translocation fuses the N-terminal portion of FOXO4 (then called AFX) to the C-terminal SET/histone methyltransferase domain of KMT2A/MLL1, creating a constitutively active "rogue activator" fusion protein. The AFX designation — and the leukemia context — preceded the protein's identification as a FOXO family member and a downstream AKT substrate. A parallel rearrangement fuses FOXO3 (then AF6q21) to MLL1 in secondary acute leukemia at 6q21, establishing that multiple FOXO paralogs are recurrent leukemia oncoproteins when fused to MLL1.

| Dimension | Status |
|---|---|
| Cancer relevance of FOXO4-MLL1 fusion? | established in rare pediatric/secondary acute leukemias |
| Normal FOXO4 function in hematopoiesis? | maintains HSC quiescence / stress resistance as part of FOXO1/3/4 redundant network [^tothova2007] |

## Knockout phenotype — Foxo4-/- mice

Foxo4-null mice (*Foxo4-/-*) are **viable and grossly normal** with no consistent histological abnormalities in any tissue examined [^hosaka2004]. This is in stark contrast to:
- *Foxo1-/-*: embryonic lethal at E10.5 from vascular defects
- *Foxo3-/-* females: premature ovarian failure

The lack of overt Foxo4-/- phenotype suggests that FOXO4's functions are largely compensated by FOXO1 and/or FOXO3 in normal development. The FOXO4-specific phenotype (senescent cell survival) emerges primarily in aged, post-mitotic, or chemotherapy-stressed contexts that were not assessed in the original germline knockout study.

**Triple Foxo1/3/4 conditional KO:** Conditional deletion of all three somatic FOXO paralogs in the hematopoietic compartment (Mx1-Cre; Mx1-Cre+;FoxO1/3/4L/L strategy, induced by poly-IC at 4 weeks) causes severe hematopoietic stem cell ([[hematopoietic-stem-cells|HSC]]) defects: a 4.6-fold decrease in the LSK (Lin-Sca-1+c-Kit+) compartment, myeloid lineage expansion (leukocytosis with relative neutrophilia), lymphoid developmental abnormalities, and impaired long-term repopulation capacity [^tothova2007]. HSCs accumulate elevated reactive oxygen species (ROS) (~2.5-fold increase, p<0.0001), and this phenotype is rescued by N-acetyl-L-cysteine (NAC) treatment in vivo. Critically, single-KO Foxo4-/- mice in the same hematopoietic conditional system show **no HSC phenotype** — only the triple-KO fully manifests the cell-cycle and apoptosis defects, establishing functional redundancy among all three paralogs in this compartment. This establishes FOXO1/3/4 functional redundancy in HSC maintenance — the individual Foxo4-/- showing no phenotype is explained by FOXO1/3 compensation.

| Dimension | Status |
|---|---|
| Single Foxo4-/- phenotype in mice? | grossly normal — no overt phenotype [^hosaka2004] |
| Triple Foxo1/3/4 conditional KO in HSCs? | severe HSC defect + ROS accumulation [^tothova2007] |
| Human equivalent? | no equivalent genetic data; FOXO4 variants not associated with specific human aging phenotypes |

## FOXO4-DRI senolytic peptide (Baar 2017) — major aging-relevant finding

This is the most significant aging-specific finding for FOXO4 and distinguishes it from its paralogs.

### Background: FOXO4 in senescent cell survival

In senescent cells — whether induced by oncogene activation, genotoxic stress (doxorubicin), or replicative exhaustion — **FOXO4 protein levels are selectively elevated** relative to proliferating cells [^baar2017]. FOXO4 interacts directly with [[p53]] in senescent cells, sequestering p53 in a nuclear complex that prevents p53 from translocating to the cytoplasm and mitochondria to drive apoptosis. This FOXO4-p53 interaction thus functions as a **pro-survival mechanism specific to senescent cells** — by sustaining p53 in a transcriptionally active but pro-apoptotic-output-inhibited state. The net result: senescent cells are resistant to spontaneous apoptosis, accumulate with age, and secrete the [[sasp|SASP]] that drives tissue deterioration.

This mechanism is distinct from the BH3-mimetic senolytic strategy (e.g., [[navitoclax]], which inhibits BCL-2/BCL-xL to restore apoptotic priming) and represents a separate pro-survival axis specific to the senescent state.

### FOXO4-DRI peptide design

Baar et al. 2017 designed a **cell-permeable interfering peptide** to disrupt the FOXO4-p53 interaction [^baar2017]:

- **Structure:** D-amino acid retroinverso (DRI) peptide spanning FOXO4 residues **86–206** — covering the Forkhead domain and adjacent p53-interaction region; the DRI format uses D-amino acid isomers in reverse sequence, conferring protease resistance and cell permeability. The exact amino acid sequence (D-isoform): H-ltlrkepaseiaqsileaysqngwanrrsggkrppprrqrrkkrg-OH (MW 5358.2) [^baar2017]
- **Mechanism:** FOXO4-DRI competes with endogenous FOXO4 for p53 binding → disrupts FOXO4-p53 nuclear complex → releases p53 to the cytoplasm → p53 drives mitochondrial apoptosis selectively in senescent cells
- **Selectivity basis:** Non-senescent cells have low nuclear FOXO4 and/or p53 is in a different activation state; FOXO4-DRI preferentially triggers apoptosis in cells where both FOXO4 and activated p53 are co-elevated (the senescent state)

### In vivo results (Baar 2017)

In vivo mouse models used in Baar 2017 [^baar2017]:
- **Doxorubicin chemotoxicity model:** Wild-type C57BL/6 mice dosed with doxorubicin (0.1 µM × 2, with 2-day interval), analyzed 7 days later
- **Fast-aging model:** XpdTTD/TTD mice (trichothiodystrophy DNA-repair model on C57BL/6 background) at **26–60 weeks** of age
- **Naturally aged model:** Wild-type C57BL/6J p16::3MR mice at **115–130 weeks** of age (not "~2 years"; 115–130 weeks ≈ 2.2–2.5 years, reported as 104-week mice in Figure 7)

Key outcomes:

- **Senescence marker reduction:** FOXO4-DRI reduced p16ink4a-driven RLUC bioluminescence and FOXO4 foci in liver cells of doxorubicin-treated and XpdTTD/TTD mice; reduced SA-β-GAL activity in tubular kidney cells of XpdTTD/TTD mice
- **Hair density restoration:** Improved fur score (0–4 scale, from very patchy toward wild-type density) in XpdTTD/TTD mice; reduced abdominal temperature (a proxy for fur density loss) [^baar2017]
- **Renal function:** Reduced **plasma urea** (primary endpoint) in XpdTTD/TTD (n=7–8/group) and naturally aged p16::3MR mice; plasma **creatinine** also reduced as independent confirmation (Figure 7I). The paper does not report glomerular filtration rate or creatinine clearance directly — plasma urea is the primary marker used throughout.
- **Fitness:** Improved responsiveness to physical stimuli (scored 0–3) and increased voluntary running wheel distance (km/day) in XpdTTD/TTD mice; improved exploratory behavior in naturally aged mice [^baar2017]
- **Selectivity:** Minimal apoptosis of non-senescent fibroblasts at tested doses; WT-p53 tumor cells also showed sensitivity (an on-target risk for therapeutic use); platelet levels not substantially affected (unlike pan-BCL inhibitors)

#gap/needs-human-replication — All FOXO4-DRI data are from mouse models (C57BL/6 doxorubicin chemotoxicity; XpdTTD/TTD fast-aging; naturally aged p16::3MR on C57BL/6J background). No human clinical trial data as of 2026.

#gap/needs-replication — Baar 2017 is a single landmark study; independent replication of the specific FOXO4-p53 mechanism and DRI peptide efficacy by other groups is limited #gap/needs-replication.

| Dimension | Status |
|---|---|
| FOXO4-p53 interaction in senescent cells conserved in humans? | partial — FOXO4 and p53 are both expressed in human senescent cells; direct interaction not yet formally demonstrated in primary human tissue |
| Senolytic phenotype (apoptosis induction in senescent cells) conserved? | in-progress — human cell-line data supportive; in vivo human data absent |
| Replicated in humans? | no — no completed human trial of FOXO4-DRI as of 2026 |

### FOXO4-DRI vs. other senolytics

FOXO4-DRI represents a distinct mechanistic class from the first-generation senolytics:

| Senolytic | Primary target | Mechanism | Selectivity basis |
|---|---|---|---|
| Dasatinib + Quercetin ([[dasatinib]] + [[quercetin]]) | Multiple kinases / flavonoid pleiotropism | Multiple pro-survival pathway disruption | Broad; empirically discovered |
| [[navitoclax]] (ABT-263) | BCL-2, BCL-xL, BCL-w | BH3-mimetic; restores apoptotic priming | Requires BCL-2 family over-reliance |
| [[fisetin]] | Multiple (senomorphic + senolytic) | Not fully resolved | Empirical |
| **FOXO4-DRI** | FOXO4-p53 protein-protein interaction | Releases p53 from nuclear FOXO4 complex → cytosolic apoptosis | Mechanistically targeted to senescent cell survival node |

FOXO4-DRI is notable as the first senolytic designed from **mechanistic understanding of senescent cell survival** rather than discovered empirically. This positions it as a proof-of-concept for a new generation of PPI (protein-protein interaction) senolytics.

### Clinical status and trial pipeline

No completed Phase 1 or Phase 2 clinical trial of FOXO4-DRI as of 2026. The peptide's pharmacokinetics (peptide delivery, bioavailability, dosing interval) and safety profile (p53 activation in WT-p53 tumor cells is a theoretical concern) remain early-stage challenges. #gap/long-term-unknown — long-term safety of periodic senolysis via FOXO4-DRI (stem cell reserve depletion, immune function) has not been evaluated.

## Role in aging — summary

FOXO4's contribution to aging biology operates through two intersecting mechanisms:

1. **Shared FOXO family role (nutrient sensing / stress resistance):** Like FOXO1 and FOXO3, FOXO4 is a downstream nuclear effector of the [[insulin-igf1]] / [[pi3k-akt-pathway]] axis. In low-nutrient / low-growth-factor conditions, FOXO4 enters the nucleus and contributes to antioxidant and cell-cycle arrest gene expression. In aged animals with chronic [[deregulated-nutrient-sensing|insulin signaling dysregulation]], FOXO4 likely participates in the broader FOXO-mediated tissue aging program alongside FOXO1/3 — though FOXO4-specific (non-redundant) contributions in normal tissue aging are poorly characterized.

2. **Senescent cell survival (FOXO4-specific, aging-dominant):** FOXO4 accumulates in senescent cells and sustains their survival by sequestering p53. This function may be **the primary non-redundant aging-relevant role of FOXO4** — one not easily compensated by FOXO1 or FOXO3, and now therapeutically targetable via FOXO4-DRI.

## Pathway membership

- [[insulin-igf1]] — downstream nuclear effector (INSR/IGF1R → IRS → PI3K → AKT → pFOXO4 cytoplasmic)
- [[pi3k-akt-pathway]] — direct AKT substrate; Thr32/Ser197/Ser262 phosphorylation
- [[cellular-senescence]] — FOXO4 sustains senescent cell survival via FOXO4-p53 interaction; FOXO4-DRI disrupts this
- [[p53-pathway]] — direct protein-protein interaction with p53 in senescent cells; modulates p53 nuclear vs. cytoplasmic localization

## Key interactors

- [[akt]] — primary inhibitory kinase; Thr32/Ser197/Ser262 phosphorylation → cytoplasmic sequestration
- [[14-3-3]] — cytoplasmic anchor; binds phospho-Thr32 + phospho-Ser197 (by analogy with FOXO3 mechanism)
- [[p53]] — **key aging-relevant interaction**; FOXO4 sequesters p53 in the nucleus of senescent cells to prevent apoptosis; targeted by FOXO4-DRI [^baar2017]
- [[sirt1]] — deacetylates FOXO4 (by analogy with FOXO1/3); activating under CR/fasting; UniProt confirms CREBBP/CBP acetylation with SIRT1 deacetylation #gap/unsourced (FOXO4-specific SIRT1 deacetylation site residue numbers not confirmed from primary literature; inferred from paralog homology)
- [[usp7]] — deubiquitinase; deubiquitinates FOXO4; UniProt P98177 lists monoubiquitination (oxidative stress-responsive, promotes nuclear localization) with USP7-mediated reversal #gap/unsourced (USP7-FOXO4 interaction needs primary citation)

## Limitations and gaps

- `#gap/needs-human-replication` — All in-vivo FOXO4-DRI senolytic data from mouse models (doxorubicin chemotoxicity model; XpdTTD/TTD fast-aging model; naturally aged C57BL/6 p16::3MR mice); no completed human clinical trial as of 2026.
- `#gap/needs-replication` — Baar 2017 (10.1016/j.cell.2017.02.031) is the single primary study establishing FOXO4-p53 senescent survival mechanism and DRI peptide efficacy; independent replication of the mechanism by other groups using complementary approaches is limited.
- AKT phospho-site residue numbers **resolved**: UniProt P98177 canonical isoform uses Thr32/Ser197/Ser262, confirmed against live UniProt feature table (2026-05-04). Alternate numbering (Thr28/Ser193/Ser258) in some older literature likely reflects a different isoform annotation.
- `#gap/unsourced` — FOXO4-specific transcriptional target genes in aging/senescent cells: no FOXO4-specific ChIP-seq data distinguishing FOXO4 from FOXO1/3 binding sites; most target claims inferred from paralog family studies.
- `#gap/unsourced` — USP7-FOXO4 interaction and monoubiquitination functional consequences need primary citation beyond UniProt annotation.
- `#gap/needs-canonical-id` — GenAge human or models entry for FOXO4 not confirmed; database does not appear to curate FOXO4 despite clear aging relevance via Baar 2017.
- `#gap/long-term-unknown` — safety of chronic or repeated FOXO4-DRI dosing (potential depletion of p53-expressing stem cell pools; tumor suppression risk in WT-p53 cancers) has not been evaluated in long-term studies.
- `#gap/dose-response-unclear` — optimal dosing regimen for FOXO4-DRI as a senolytic (dose, frequency, duration) not established; Baar 2017 used a single dosing protocol.
- The distinction between FOXO4's contributions vs. FOXO1/3 in normal (non-senescent) aging tissue is incompletely characterized. Foxo4-/- single KO mice show no phenotype, making functional dissection difficult without conditional or paralog-competitive strategies.

## Footnotes

[^baar2017]: doi:10.1016/j.cell.2017.02.031 · Baar MP et al. 2017 · in-vivo (C57BL/6; XpdTTD/TTD fast-aging mice 26–60 wks; naturally aged p16::3MR mice 104–130 wks; doxorubicin chemotoxicity model) + in-vitro (IMR90 and WI-38 human fetal lung fibroblasts; BJ foreskin fibroblasts) · Cell 169:132-147 · FOXO4-DRI (residues 86–206 DRI peptide, MW 5358.2) disrupts FOXO4-p53 interaction → p53 nuclear exclusion → caspase-3/7-dependent apoptosis selectively in senescent cells (SI50=11.73 vs. IR-senescent IMR90; SI50=12.91 vs. doxo-senescent IMR90); in vivo: reduced plasma urea (primary kidney endpoint), improved fur density score, improved physical responsiveness, increased running wheel activity in fast-aging and naturally aged mice; platelet count unaffected; 1,365 citations (100th percentile FWCI) · archive: local PDF available

[^borkhardt1997]: doi:10.1038/sj.onc.1200814 · Borkhardt A et al. 1997 · in-vivo (human acute leukemia tumor genetics) · Oncogene 14:195-202 · Cloning and characterization of AFX (FOXO4), the gene at Xq13 fusing to MLL/KMT2A in t(X;11)(q13;q23) acute leukemias; first identification of the FOXO4 locus · 242 citations · archive: not_oa (no local PDF); #gap/no-fulltext-access

[^hosaka2004]: doi:10.1073/pnas.0400093101 · Hosaka T et al. 2004 · in-vivo (germline Foxo1-/-, Foxo3a-/-, Foxo4-/- single KO colonies; C57BL/6 and 129/Sv backgrounds) · PNAS 101:2975-2980 · Foxo4-/- mice grossly normal; no consistent histological abnormalities in any tissue; Foxo1-/- lethal E10.5 (vascular); Foxo3a-/- females show premature ovarian failure; no triple KO in this paper · 674 citations (100th percentile) · archive: local PDF available at  (local PDF)

[^tothova2007]: doi:10.1016/j.cell.2007.01.003 · Tothova Z et al. 2007 · in-vivo (Mx1-Cre+;FoxO1/3/4L/L conditional triple KO in hematopoietic compartment; C57BL/6; n=6-8 Cre+, n=3-7 Cre-) · Cell 128:325-339 · FOXO1/3/4 triple KO in HSCs → 4.6-fold LSK decrease, myeloid expansion, lymphoid abnormalities, ~2.5-fold ROS increase (p<0.0001), impaired long-term repopulation; single Foxo4-/- shows no HSC phenotype; NAC rescues HSC compartment in vivo; FOXOs are critical mediators of HSC resistance to physiologic oxidative stress · 1,533 citations (100th percentile FWCI) · archive: local PDF available

[^brunet1999]: doi:10.1016/s0092-8674(00)80595-4 · Brunet A et al. 1999 · in-vitro (CCL39 fibroblasts, 293T, cerebellar granule neurons) · Cell 96:857-868 · AKT phosphorylates FKHRL1/FOXO3 at Thr32/Ser253/Ser315; Thr32+Ser253 create 14-3-3 docking surfaces; Ser315 drives nuclear export independently; seminal paper establishing the AKT-FOXO paradigm — FOXO4 phospho-sites (Thr32/Ser197/Ser262 per UniProt P98177) assigned by sequence homology to this mechanism · local PDF available
