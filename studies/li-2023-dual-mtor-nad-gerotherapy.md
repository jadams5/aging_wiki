---
type: study
doi: 10.1101/2023.01.16.523975
pmc: PMC9882180
title: "A dual mTOR/NAD+ acting gerotherapy"
authors: [Li J, Kumar S, Miachin K, Bean NL, Halawi O, Lee S, Park JW, Pierre TH, Hor JH, Ng SY, Wallace KJ, Rindtorff N, Miller TM, Niehoff ML, Farr SA, Kletzien RF, Colca J, Tanis SP, Chen Y, Griffett K, McCommis KS, Finck BN, Peterson TR]
year: 2023
journal: bioRxiv (preprint)
study-design: in-vivo
organism: multi
n-subjects: null
intervention: ["[[bioio-1001]]"]
hallmarks-tested: ["[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
human-evidence: false
peer-reviewed: false
preregistered: false
key-findings: [sirt3-mtor-nad-intersection, lpin1-fao-convergence, nash-reversal, als-lifespan-extension]
local-pdf: null
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Full PDF read end-to-end (all 33 pages). Three factual corrections applied: (1) PDB accession corrected from 5514 to 4BN4; (2) SOD1-G93A mouse strain corrected from C57BL/6J to SV129; (3) conflict-of-interest statement corrected to match paper's disclosure section. ALS mouse n not reported in paper — limitation note preserved. Canonical-DB identity fields for BIOIO-1001 not independently re-verified."
---

> **Preprint — not peer-reviewed** (bioRxiv, January 2023). All claims are preliminary and have not undergone formal peer review.

# A dual mTOR/NAD+ acting gerotherapy

## TL;DR

Li et al. report a genome-wide CRISPRa screen in K562 cells that identifies **SIRT3** — the mitochondrial NAD+-dependent deacetylase — as the top genetic intersection between the mTOR/insulin pathway and the NAD+ pathway. The proposed mechanism is **shared regulation of fatty acid oxidation (FAO)**: mTORC1 targets LPIN1 (a phosphatidate phosphatase governing lipid flux) while SIRT3 deacetylates and activates mitochondrial FAO enzymes. The authors then characterize BIOIO-1001, a novel pioglitazone-derived compound (lacking the thiazolidinedione ring) that activates this SIRT3-centered intersection. BIOIO-1001 shows efficacy in mouse models of NASH and ALS (SOD1-G93A transgenic mice), with ALS lifespan extension of ~26% and paralysis delay of ~29%. The mTOR–NAD+ cross-talk is proposed as a therapeutic target for multiple age-related diseases simultaneously. **No NMN or NR was studied; the mTOR–NAD+ cross-talk is inferred from shared metabolic targets, not demonstrated by direct molecular epistasis.**

## Design

### Genome-wide CRISPRa screen
- **Cell line:** K562 CRISPRa-competent cells
- **Library:** Human Genome-wide CRISPRa-v2
- **Compound tested:** BIOIO-1001 at 50 µM (duplicate)
- **Hit identification:** Top-3 sgRNA average phenotype, p < 0.05 threshold
- **Validated top hit:** SIRT3
- **LPIN1 status:** Directionally consistent but sub-threshold (not a statistically significant hit)

### NASH mouse models
- **HFD model:** Male C57BL/6J mice on high-fat diet (60% kcal fat; 10 weeks); then BIOIO-1001 or pioglitazone (30 mg/kg/day oral gavage) for 10 days; n=6/group (transcriptional profiling subset; metabolic experiment n not explicitly stated per group in text)
- **HTF-C (NASH) model:** Male C57BL/6J mice on high trans-fat (40% kcal)/fructose (20% kcal)/cholesterol (2% w/w) diet (16 weeks); then BIOIO-1001 or vehicle (oral gavage) for 3 weeks; n=6 (biochemistry); n=10–13 (NAS/fibrosis scoring)
- **Ex vivo validation:** Primary hepatocytes from SIRT3 wildtype and SIRT3-deficient mice

### ALS models
- **Sporadic ALS (human iPSC motor neurons):** BIOIO-1001 at 1, 5, 10 µM; motor neuron survival assessed at day 31 via ISL1/DAPI staining
- **Familial ALS (SOD1-G93A mice):** SV129 background; treatment initiated at 9 weeks of age (paper notes typical lifespan ~18 weeks in this model); continued to endpoint; n not explicitly stated in figure legends or methods

### Endpoints
- Liver triglycerides, ALT/AST, NAS/fibrosis scoring, gene expression (hepatic inflammation/fibrosis markers)
- ALS: survival curves, paralysis onset, plasma triglycerides
- HFD: glucose tolerance, insulin sensitivity, AKT phosphorylation (Ser473) in muscle, plasma triglycerides, NEFAs

## Key results

### CRISPRa screen
- SIRT3 scored as top validated genetic hit for BIOIO-1001; follow-up experiments confirmed SIRT3 dependence in ex vivo hepatocytes (CPT1b and UCP3 expression lost in SIRT3-KO cells)
- LPIN1 was directionally consistent in the screen but did not reach statistical significance — the mTOR/LPIN1 arm of the proposed cross-talk is not directly validated by the screen data

### NASH/metabolic
- Liver triglycerides significantly reduced by BIOIO-1001 vs. vehicle (n=6; ANOVA with Tukey's test; p < 0.05)
- ALT/AST substantially lower than vehicle controls
- BIOIO-1001 more protective than pioglitazone at the transcriptional level for inflammation and fibrosis markers
- HFD study: plasma triglycerides uniquely reduced by BIOIO-1001 (not pioglitazone); improved glucose tolerance, insulin sensitivity; enhanced AKT Ser473 phosphorylation in muscle
- No PPARγ activation (unlike pioglitazone)

### ALS (SOD1-G93A mice)
- **Lifespan extension: ~26%** (vs vehicle)
- **Paralysis delay: ~29%** (vs vehicle)
- Plasma triglycerides *increased* in ALS mice treated with BIOIO-1001 (context-dependent; authors note elevated plasma triglycerides correlate with better ALS prognosis in humans)
- Sporadic ALS iPSC motor neurons: protective at 1, 5, 10 µM

### Lipid metabolomics (liver)
- Phosphatidic acid (LPIN1 substrate) increased; diacylglycerol (LPIN1 product) decreased — consistent with LPIN1 modulation but mechanism of how BIOIO-1001 affects LPIN1 not directly shown

### BIOIO-1001 chemical biology
- In silico docking (DiffDock): highest-confidence pose binds SIRT3 outside the NAD-Ribose pocket (PDB: 4BN4; SIRT3 in complex with ADP-ribose, 1.3 Å resolution) — direct NAD+ competitive binding not predicted
- Does not activate PPARγ, mitochondrial pyruvate carrier, or a panel of nuclear hormone receptors

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway (SIRT3/mTOR/FAO) conserved in humans? | yes | Conserved enzymes; but SIRT3's role in human aging is not fully established |
| Phenotype (NASH, ALS) conserved from mice? | partial | NASH pathology relevant; SOD1-G93A is familial ALS only (~2% of ALS cases) |
| Replicated in humans? | no | Preprint; no human arms; no NIA ITP equivalent; #gap/needs-human-replication |

## Limitations

- **Preprint — not peer-reviewed.** All claims are preliminary.
- **LPIN1 was not a significant CRISPRa hit** — the mTOR arm of the proposed dual cross-talk is under-supported by the screen data.
- **Mechanistic directionality not established.** The paper does not show mTOR regulating NAD+ pools or NAD+/SIRT3 regulating mTOR directly — cross-talk is inferred from shared lipid metabolic targets.
- **n per group small** (n=6 for biochemistry; n=10–13 for histology). Two different genetic backgrounds used: C57BL/6J for NASH/HFD studies; SV129 for SOD1-G93A ALS survival studies.
- **SOD1-G93A model** represents familial ALS with a rare mutation — very limited translatability to sporadic ALS or general aging.
- **n not reported for ALS survival curves** — cannot evaluate statistical power.
- **AKT phosphorylation** observed in muscle is AKT Ser473 (mTORC2 substrate), not a direct mTORC1 output — does not confirm mTORC1 modulation by BIOIO-1001.
- **Conflicts of interest declared:** T.R.P. is founder of BIOIO (the company that owns BIOIO-1001 as an asset); T.M.M. declares consulting/advisory relationships with Ionis, Biogen, Cytokinetics, Disarm Therapeutics, BIOIO, UCB, Regeneron, and Denali. No patent-inventor conflict is disclosed in the preprint's COI section.

## Cited by wiki pages

- [[pathways/sirtuin]] — SIRT3-mTOR-FAO cross-talk section
- [[pathways/mtor]] — NAD+/Sirtuin axis (SIRT3/FAO intersection) bullet
