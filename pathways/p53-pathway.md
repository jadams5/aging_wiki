---
type: pathway
aliases: [TP53 pathway, p53 signaling, p53 signaling pathway, TP53 network, p53 stress response]
kegg: hsa04115
reactome: R-HSA-3700989
wikipathways: WP1742
key-nodes: ["[[p53]]", "[[mdm2]]", "[[atm]]", "[[atr]]", "[[chek1]]", "[[chek2]]", "[[arf]]", "[[p21]]", "[[puma]]", "[[bax]]", "[[noxa]]"]
upstream: ["[[dna-damage-response]]", "[[oncogenic-stress]]", "[[insulin-igf1]]", "[[ribosomal-stress]]"]
downstream: ["[[cellular-senescence]]", "[[apoptosis-pathway]]", "[[cell-cycle-arrest]]", "[[dna-repair]]"]
hallmarks: ["[[genomic-instability]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "DOIs for all 10 footnotes verified via DOI lookup + Crossref; two wrong DOIs corrected (el-Deiry WAF1 and Nakano PUMA); quantitative claims for ~500 target genes and ~5.5h pulse period corrected against primary sources (Levine/Oren 2009 and Lahav 2004); Haupt 1997, Vousden/Lane 2007, and Levine/Oren 2009 PDFs read end-to-end; rufini2013 and bieging2014 PDFs closed-access (not_oa / pending) — qualitative claims consistent with their known scope and not independently re-read"
---


# p53 signaling pathway

The **p53 pathway** is the cell's primary stress-surveillance and tumor-suppression axis. It integrates upstream signals from DNA damage, oncogene activation, ribosomal stress, and hypoxia — all via the central transcription factor [[p53]] (TP53) — and arbitrates between three downstream programs: transient **cell-cycle arrest**, permanent **[[cellular-senescence|senescence]]**, and **[[apoptosis-pathway|apoptosis]]**. A tight negative-feedback loop through [[mdm2]] keeps the system off in unstressed cells.

> **Naming note:** This page covers the *pathway* and is the canonical `[[p53-pathway]]` wikilink target. For protein-level details (domains, PTMs, interactors, pharmacology), see [[p53]] (`molecules/proteins/p53.md`). The two pages are intentionally distinct to avoid a name collision between `pathways/p53-pathway.md` and `molecules/proteins/p53.md`.

Canonical pathway IDs: KEGG `hsa04115` · Reactome `R-HSA-3700989` (Transcriptional Regulation by TP53) / parent `R-HSA-5633007` (Regulation of TP53 Activity) · WikiPathways `WP1742` (TP53 network).

## Upstream activators

Under basal conditions [[p53]] protein is continuously synthesised but rapidly targeted for proteasomal degradation by [[mdm2]], keeping steady-state levels low. Four broad classes of stress lift this suppression:

### 1. DNA double-strand breaks (DSBs) — ATM/ATR axis

DSBs recruit and activate the [[atm]] kinase (Ataxia-Telangiectasia Mutated); replication-fork stalling activates the related kinase ATR. Both phosphorylate downstream checkpoint kinases ([[chek2]] / CHEK1) and directly phosphorylate p53 at **Ser15** (Ser15 in humans). Ser15 phosphorylation, along with Ser20 phosphorylation by CHEK2, disrupts the p53–MDM2 interaction and blocks nuclear export of p53, causing p53 to accumulate [^giaccia1998].

| Signal | Sensor kinase | p53 phospho-site | Primary outcome |
|---|---|---|---|
| DSBs | [[atm]] → CHEK2 | Ser15, Ser20 | Arrest → repair or apoptosis |
| Replication stress / UV | ATR → CHEK1 | Ser15 | Arrest → restart or apoptosis |

### 2. Oncogenic stress — ARF

When oncogenes such as RAS, MYC, or E1A are aberrantly activated, the alternate reading frame protein **ARF** (encoded by CDKN2A; same locus as p16^Ink4a^) is induced. ARF binds and sequesters MDM2 in the nucleolus, preventing MDM2-mediated p53 degradation even in the absence of DNA damage. This "oncogene-induced senescence" arm is the dominant tumour-suppression mechanism in early preneoplastic lesions [^vousdenlane2007].

### 3. Ribosomal stress

Perturbation of ribosome biogenesis (e.g., nucleolar disruption, 5S rRNA accumulation) releases ribosomal proteins — RPL5, RPL11, RPL23, RPS7 — that bind and inhibit MDM2, again stabilising p53. This links p53 activation to translational capacity surveillance.

### 4. Hypoxia and metabolic stress

Severe hypoxia stabilises p53 via HIF-1α-independent mechanisms including reduced MDM2 abundance; mild hypoxia can prime cells toward apoptosis while sparing arrest. Nutrient stress and metabolic imbalance also contribute — p53 is itself a metabolic regulator, activating TIGAR (TP53-Induced Glycolysis and Apoptosis Regulator) and SESN1/2, coupling the stress response to antioxidant and energy-sensing programs.

## p53 stabilisation: PTM-driven release from MDM2

Under normal conditions the MDM2–p53 auto-regulatory loop maintains p53 half-life at ~20–30 minutes [^haupt1997] (consensus figure from pulse-chase studies; see footnote for source caveat):

1. **MDM2 binds p53** at the N-terminal transactivation domain, blocking co-activator recruitment.
2. **MDM2 E3-ligase activity** ubiquitinates p53 at multiple C-terminal lysines → nuclear export and proteasomal degradation.
3. **p53 transcriptionally activates MDM2** → forming the negative-feedback loop.

Stress-induced PTMs break this cycle:
- **ATM/CHEK2 phosphorylation** of Ser15/Ser20 — reduces MDM2 binding affinity.
- **CBP/p300 acetylation** of Lys382 — competes with MDM2-mediated ubiquitination at the same residues; shifts p53 target-gene selectivity.
- **ARF sequestration of MDM2** — blocks MDM2 before it reaches p53.

The net result is p53 nuclear accumulation and activation of a transcriptional program spanning hundreds of target genes [^levineoren2009]. #gap/unsourced — the commonly-cited figure of "~500" is not stated in Levine & Oren 2009 (which says "hundreds of genes" and "many dozens"); the specific number requires a dedicated genome-wide ChIP-seq citation.

## Downstream programs

The stabilised p53 tetramer binds p53 response elements (two 10-base half-sites, separated by 0–13 bp) across the genome. Three canonical output programs are induced; the "choice" depends on stress severity, cellular context, and PTM pattern:

### A. Cell-cycle arrest (via p21 / CDKN1A)

p53 directly transactivates **[[p21]]** (CDKN1A), the most potent CDK inhibitor in the p21/p27/p57 family. p21 inhibits CDK4/6–CyclinD and CDK2–CyclinE, blocking Rb phosphorylation and stalling cells in G1 (predominantly) or G2/M. This arrest is initially reversible — sufficient for DNA repair programs ([[dna-repair]]) to operate before re-entry [^eldeiry1993].

Key p53 → arrest targets: `CDKN1A` (p21), `GADD45A/B/G`, `14-3-3σ` (G2/M arrest), `CCNG1/2` (Cyclin G — negative feedback modulators).

### B. Cellular senescence

Sustained or severe p53/p21 signalling — particularly when p16^Ink4a^ from the same CDKN2A locus is co-induced — locks the cell into **permanent cell-cycle exit** known as [[cellular-senescence|senescence]]. Senescent cells remain metabolically active, resist apoptosis (via anti-apoptotic BCL-2 family upregulation), and secrete the **SASP** (senescence-associated secretory phenotype), a pro-inflammatory cytokine cocktail that impacts surrounding tissue [^rufini2013].

p53-driven senescence is the primary mechanism of **oncogene-induced senescence (OIS)**: aberrant oncogene activation → ARF → MDM2 inhibition → p53 → p21 + p16 → irreversible arrest, blocking tumour progression at an early stage.

### C. Apoptosis (via PUMA / BAX / NOXA)

Severe or irreparable damage shifts p53 transcriptional output toward pro-apoptotic targets that engage the **intrinsic (mitochondrial) pathway**:

| p53 target | Gene | Mechanism |
|---|---|---|
| **PUMA** | BBC3 | BH3-only protein; neutralises all anti-apoptotic BCL-2 members; required for p53-dependent apoptosis in multiple contexts |
| **NOXA** | PMAIP1 | BH3-only; preferentially binds MCL-1; cooperates with PUMA |
| **BAX** | BAX | Multi-domain pro-apoptotic; cytoplasmic → mitochondrial OM on activation; forms pores |
| **APAF-1** | APAF1 | Builds apoptosome with cytochrome c → caspase-9 activation |
| **FAS / DR5** | FAS, TNFRSF10B | Extrinsic pathway amplification |

PUMA and BAX accumulation at the mitochondrial outer membrane promotes **MOMP** (mitochondrial outer membrane permeabilisation), releasing cytochrome c into the cytoplasm → apoptosome → caspase-9 → caspase-3 → cell death [^nakano2001puma].

The arrest/senescence/apoptosis switch is not fully understood. Current models emphasise:
- **p53 accumulation dynamics** — pulse vs sustained activation favours arrest vs apoptosis respectively.
- **PTM pattern** — K120 acetylation by PCAF/TIP60 is enriched in apoptotic contexts.
- **Cell type and prior state** — epithelial cells tend toward apoptosis; fibroblasts toward senescence.

#gap/no-mechanism — Quantitative rules governing the arrest vs senescence vs apoptosis switch are not fully resolved.

## Negative feedback: MDM2 as a p53 transcriptional target

**MDM2** is itself one of the most robustly induced p53 transcriptional targets [^haupt1997]. This creates the canonical negative-feedback loop:

```
Stress → p53 stabilisation → p53 activates MDM2 → MDM2 degrades p53 → p53 ↓
```

The loop produces oscillatory p53 pulses after DNA damage (observed by live-cell imaging in individual cells). Each pulse has a width of ~350 min (~5.8 h, mean ± 160 min s.d.); the interval between consecutive pulse maxima is ~440 min (~7.3 h, mean ± 100 min s.d.). Pulse number — not pulse amplitude or shape — encodes the dose of DNA damage [^lahav2004].

MDM4 (MDMX) is a structural paralogue of MDM2 that binds p53 at the same interface but lacks E3-ligase activity; it acts as a co-repressor rather than a degradation signal. MDM2–MDM4 heterodimerisation enhances MDM2's E3 activity in some contexts.

## Role in aging

### Antagonistic pleiotropy: cancer suppression vs. tissue aging

p53 is a textbook example of **antagonistic pleiotropy** in aging biology: the same tumour-suppressive function that benefits young organisms accumulates costs over time. See [[p53]] for the full genetic evidence (Tyner 2002 p53+/m mice; Maier 2004 p44 mice). The pathway-level summary:

| Effect of p53 activity | Young organism | Old organism |
|---|---|---|
| Oncogene-induced senescence | Prevents early tumorigenesis | Contributes to senescent-cell burden |
| DNA-damage apoptosis | Eliminates pre-cancer cells | Depletes stem-cell pools |
| SASP induction | Paracrine anti-tumour signalling | Chronic low-grade inflammation ([[chronic-inflammation]]) |
| Cell-cycle arrest | Buys time for repair | Impairs regeneration and wound healing |

The net result over decades is tissue accumulation of senescent cells (see [[cellular-senescence]]), progressive [[stem-cell-exhaustion]], and amplified [[chronic-inflammation|inflammaging]] — contributing to multiple hallmarks simultaneously [^rufini2013].

### p53 pathway activity changes with age

Basal p53 activity increases in multiple aged tissues in mice and humans, consistent with rising loads of persistent DNA damage (DSBs, oxidative lesions, telomere erosion). This elevated basal activity is proposed to accelerate the senescent-cell accumulation seen with age, creating a positive feedback: damage → p53 → senescence → SASP → further DNA damage → more p53 activity. #gap/needs-replication

### Cross-talk with other longevity pathways

| Partner pathway | Interaction | Direction |
|---|---|---|
| [[mtor]] | mTOR inhibition can attenuate p53-driven senescence in some contexts; p53 activates mTOR-suppressive genes (SESN1/2, AMPK-activating targets) | Complex; context-dependent |
| [[insulin-igf1]] | IIS suppression → reduced MDM2 production via AKT (AKT phosphorylates and activates MDM2) → net p53 activation; IIS-deficient long-lived mice have modestly elevated p53 activity | Moderate evidence |
| [[dna-damage-response]] | p53 is the primary transcriptional effector of the DDR; upstream (ATM/ATR) ↔ downstream (p53) are tightly coupled | Core relationship |

## Pharmacology

| Agent | Target | Mechanism | Stage |
|---|---|---|---|
| Nutlin-3 / RG7388 (idasanutlin) / AMG-232 | MDM2–p53 interface | Small-molecule disruptors of MDM2–p53 binding; reactivate WT p53 in MDM2-overexpressing tumours | Phase I–III (oncology) |
| APR-246 (eprenetapopt) | Mutant p53 refolding | Restores WT conformation to gain-of-function p53 mutants | Phase III (AML) |
| PRIMA-1 / MIRA-1 | Mutant p53 | Related to APR-246 mechanism | Preclinical |
| Senolytics ([[fisetin]], navitoclax, dasatinib + quercetin) | BCL-2 / BCL-XL (downstream of p53) | Clear p53-induced senescent cells; act downstream of p53 pathway output | Preclinical + Phase I/II |
| PUMA BH3 mimetics | PUMA/BAX axis | Promote apoptosis in cells with intact p53 | Preclinical |

**Aging relevance of MDM2 inhibitors:** nutlin-class compounds can paradoxically *promote* senescence in normal (WT p53) cells by stabilising p53 — potentially worsening age-related senescent cell accumulation rather than clearing it. #gap/contradictory-evidence — use in healthy aging is not validated and could be harmful.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TP53, MDM2, ATM, CHEK1/2, p21, PUMA, BAX — all highly conserved; same response elements; same downstream logic |
| Phenotype conserved in humans? | partial | Li-Fraumeni syndrome (loss-of-function p53) → early cancer, confirming tumour-suppression arm; no human hyperactive-p53 model exists |
| Replicated in humans? | in-progress | Mechanistic conservation strong; whether elevated basal p53 accelerates human aging requires longitudinal biomarker studies |

## Limitations and gaps

- #gap/no-mechanism — The quantitative "decision switch" between arrest, senescence, and apoptosis is not mechanistically resolved.
- #gap/needs-human-replication — All in-vivo aging evidence is from mouse transgenic models (Tyner 2002, Maier 2004). Direct human evidence for p53-driven tissue aging is indirect and observational.
- #gap/contradictory-evidence — mTOR–p53 interaction direction is context-dependent and contested across cell types.
- #gap/needs-replication — Elevated basal p53 activity as a driver of aged-tissue senescence accumulation is plausible but not established in humans with prospective data.
- MDM2 inhibitors as potential pro-aging or senolytic agents: completely open question.

## Footnotes

[^tyner2002]: [[studies/tyner-2002-p53-mutant-aging]] · n=35 (p53+/m) + 56 (p53+/+) · in-vivo (mouse, transgenic) · P<0.0001 (survival curve) · model: p53+/m on mixed C57BL/6 × 129/Sv background
[^maier2004]: doi:10.1101/gad.1162404 · in-vivo (mouse, p44 short-isoform overexpression) · independent replication of accelerated-aging-from-hyperactive-p53 finding
[^haupt1997]: doi:10.1038/387296a0 · in-vitro (H1299, HeLa, T47D cells; pulse-chase analysis) · foundational mechanistic paper establishing MDM2 as the primary E3 ligase for p53 proteasomal degradation; demonstrates rapid elimination of labelled p53 in cells co-expressing MDM2. Note: the "20–30 min" half-life figure cited in the pathway text is a widely-used field consensus not explicitly stated as that precise range in this letter; the companion paper Kubbutat et al. 1997 (doi:10.1038/387299a0) co-published in the same Nature issue may be the better primary citation for the specific number.
[^vousdenlane2007]: doi:10.1038/nrm2147 · review · comprehensive coverage of p53 signalling including ARF, MDM2 feedback, and disease context
[^levineoren2009]: doi:10.1038/nrc2723 · review · 30-year retrospective on p53 biology including oscillatory dynamics and transcriptional network breadth
[^rufini2013]: doi:10.1038/onc.2012.640 · review · focused on senescence and aging; covers OIS, SASP, and antagonistic pleiotropy at the pathway level
[^giaccia1998]: doi:10.1101/gad.12.19.2973 · review · in-vitro / in-vivo · covers ATM/ATR → p53 phosphorylation cascade in detail
[^eldeiry1993]: doi:10.1016/0092-8674(93)90500-p · in-vitro · discovery paper: WAF1 identified as a direct p53 transcriptional target and mediator of p53 tumour suppression; Cell 75:817-825 (1993). Note: previous wiki footnote key was [^eldeiry1994] with a wrong DOI (10.1016/0092-8674(94)90273-9 resolves to a Drosophila Jun paper); corrected to 1993 Cell paper.
[^nakano2001puma]: doi:10.1016/s1097-2765(01)00214-3 · in-vitro / in-vivo · discovery of PUMA (BBC3) as a direct p53 pro-apoptotic target; Nakano K & Vousden KH, Molecular Cell 7:683-694 (2001). Note: previous wiki DOI (10.1016/s1097-2765(01)00373-x) did not resolve; corrected to verified DOI.
[^lahav2004]: doi:10.1038/ng1293 · in-vitro (live-cell fluorescence microscopy, MCF7 and H1299 cells) · Lahav G et al., Nature Genetics 36:147-150 (2004) · foundational single-cell measurement of p53-Mdm2 oscillatory dynamics; first pulse width 350 ± 160 min (~5.8 h); inter-pulse interval 440 ± 100 min (~7.3 h)
[^bieging2014]: doi:10.1038/nrc3711 · review · comprehensive mechanistic review of tumour-suppressive outputs with clinical implications
