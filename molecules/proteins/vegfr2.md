---
type: protein
aliases: [KDR, FLK-1, kinase insert domain receptor, fetal liver kinase 1, CD309, VEGFR-2]
uniprot: P35968
ncbi-gene: 3791
hgnc: 6307
ensembl: ENSG00000128052
genage-id: null
pathways: ["[[vegf-signaling]]", "[[pi3k-akt-pathway]]", "[[ras-mapk]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: "#gap/needs-gtex-query — no GTEx aging-correlation data pulled for this page; see sops/finding-tissue-expression.md"
mr-causal-evidence: partial
caused-by: ["[[vegfa]]"]
causes: ["[[pi3k-akt-pathway]]", "[[ras-mapk]]", "[[eNOS]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Zeng 2001 (Tyr951/Tyr1059 functional dissection), Bonner 2013 (capillary rarefaction), Smith 2020 eLife (Tyr949/VE-cadherin permeability), and Lian 2020 (miR-25-3p aging mechanism) verified against primary-source PDFs. Terman 1991 cloning abstract verified via PubMed efetch. UniProt P35968 identity fields (1356aa, HGNC:6307) confirmed via UniProt REST API. Canonical-database cross-identifiers (NCBI Gene 3791, Ensembl ENSG00000128052) assumed correct from frontmatter but not independently re-queried against NCBI/Ensembl portals this pass. Shibuya 2011 review (not_oa), Gustafsson 2005 (not_oa), Lloyd 2005 (not_oa), Hoier 2014 (not_oa), Zhao 2022 (pending at time of verification) not verified against full text — claims attributed to these are lower-confidence."
literature-checked-through: 2026-05-09
---


# VEGFR2 (KDR / FLK-1)

Vascular endothelial growth factor receptor 2 (VEGFR2) is the principal mediator of VEGF-A-driven angiogenesis. It is the dominant pro-angiogenic signal transducer in endothelial cells, controlling proliferation, migration, survival, and vascular permeability. In the aging context, VEGFR2 signaling declines with age in multiple tissues, contributing to capillary rarefaction, impaired exercise-induced angiogenesis, and reduced vascular repair capacity. It is simultaneously the canonical target for anti-angiogenic oncology therapy, making it a protein with sharply divergent indication profiles.

## Identity

- **UniProt:** P35968 (VGFR2_HUMAN)
- **NCBI Gene:** 3791
- **HGNC symbol:** KDR
- **Ensembl:** ENSG00000128052
- **Mouse ortholog:** Kdr (Flk1); one-to-one ortholog
- **Length:** 1,356 amino acids (canonical isoform)
- **Gene locus:** Chromosome 4q12 (co-localized with PDGFRA and KIT)
- **Cloning:** First isolated from human endothelial cells by Terman et al. 1991 using PCR with degenerate primers targeting conserved tyrosine kinase domains [^terman1991]

## Protein structure and class

VEGFR2 is a **Class V receptor tyrosine kinase (RTK)**; single-pass type I transmembrane protein. Three structural modules:

1. **Extracellular domain (ECD):** Seven immunoglobulin-like (Ig-C2) domains. Domains 2–3 are the primary VEGF-A binding interface; domains 4–7 mediate receptor dimerization upon ligand engagement.
2. **Transmembrane helix:** Single-pass; required for plasma membrane localization and dimerization geometry.
3. **Intracellular domain:** Juxtamembrane regulatory segment + bilobed split kinase domain (characteristic of Class V RTKs, shared with PDGFR and KIT) + C-terminal tail.

## Ligands

| Ligand | Binding affinity | Notes |
|---|---|---|
| VEGF-A (all isoforms) | Primary; high affinity | Canonical angiogenic ligand |
| VEGF-C | Moderate (after proteolytic processing) | Shared with VEGFR3 (lymphangiogenesis) |
| VEGF-D | Moderate (after proteolytic processing) | Also binds VEGFR3 |
| VEGF-E (viral) | High | Selective for VEGFR2; OV-NZ2 orf virus |

VEGF-B, PIGF, and VEGF-F do **not** bind VEGFR2 significantly.

## Activation mechanism

Ligand (VEGF-A dimer) bridges two VEGFR2 monomers → receptor homodimerization (or heterodimerization with VEGFR1/VEGFR3) → trans-autophosphorylation at multiple intracellular tyrosines → docking of SH2-domain adaptors → downstream cascade activation [^shibuya2011].

## Key autophosphorylation sites and their signaling outputs

| Site | Downstream adaptor / effector | Functional output |
|---|---|---|
| **Tyr951** | TSAd (T-cell-specific adaptor) → Src | Endothelial cell migration; vascular permeability [^zeng2001] |
| **Tyr1054** | Not functionally essential in endothelial cells | Y1054F mutant retains proliferation and migration comparable to wild-type EGDR [^zeng2001] |
| **Tyr1059** | Catalytic domain; required for MAPK phosphorylation and intracellular Ca²⁺ mobilization | Full kinase-mediated proliferation; Y1059F completely abolishes EGF-stimulated proliferative response [^zeng2001] |
| **Tyr1175** | PLC-γ1 docking site (primary) | PLC-γ1 → PKC → ERK1/2 → proliferation; also Shb adaptor → PI3K-AKT → survival |
| **Tyr1214** | Nck adaptor → p38 MAPK / FGFR → FAK | Actin cytoskeleton reorganization; migration |

Tyr1175 is the dominant signaling node — PLC-γ docking here drives the proliferative and migratory program [^shibuya2011]. Note: Zeng 2001 demonstrates that Tyr951 and Tyr1059 are *functionally* essential in primary HUVEC (Tyr951 for migration, Tyr1059 for proliferation/MAPK/Ca²⁺); Tyr1054 tested by mutagenesis but showed no measurable phenotype in proliferation or migration assays [^zeng2001].

## Downstream signaling axes

- **PLC-γ → PKC-δ/ε → MAPK/ERK** ([[ras-mapk]]): endothelial cell proliferation
- **PI3K → AKT** ([[pi3k-akt-pathway]]): endothelial survival, eNOS activation → nitric oxide production → vasodilation
- **Src → FAK**: focal adhesion dynamics, endothelial migration, tube formation
- **p38 MAPK**: cell migration; also stress-response (less dominant in canonical VEGF signaling)
- **eNOS (via Src and AKT)**: nitric oxide synthesis → vasodilation and anti-inflammatory endothelial tone

## Tissue and cell-type expression

VEGFR2 is expressed predominantly on **vascular endothelial cells** (arterial, venous, capillary) and on hematopoietic progenitors in fetal development. Lower levels in:
- Retinal pericytes
- Dendritic cells
- Neural progenitors (developing brain)
- Megakaryocytes / platelets

In adults, endothelial expression dominates and is regulated by local VEGF levels via a positive feedback loop (VEGF upregulates VEGFR2 transcription via KLF2/KLF4 and SP1).

## Role in aging

### Capillary rarefaction

Aging is associated with loss of capillary density (rarefaction) in skeletal muscle, cardiac muscle, skin, brain, and kidney. The VEGF–VEGFR2 axis is the primary pro-angiogenic maintenance signal; its age-related decline contributes to this phenotype.

Mouse model evidence: skeletal-muscle-specific VEGF knockout (MCK-Cre/VEGFlox/lox on C57BL/6 background, n=8 WT / n=9 KO) recapitulates the capillary rarefaction phenotype — ~60% reduction in skeletal muscle capillary density and ~50% reduction in cardiac muscle capillary density (P≤0.05 for both), leading to impaired insulin-stimulated glucose uptake and muscle insulin resistance [^bonner2013]. The impairment was attributable to poor vascular delivery rather than intrinsic myocyte insulin signaling defects (ex vivo isolated-muscle glucose uptake was equivalent between genotypes). #gap/needs-human-replication — direct VEGFR2 activity measurements in aged human capillary beds are sparse.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | VEGFR2 sequence and signaling axes identical; ECD ligand-binding confirmed in human studies |
| Phenotype conserved in humans? | yes | Capillary rarefaction in aged human skeletal muscle is well-documented histologically |
| Replicated in humans? | partial | VEGF/VEGFR2 expression decline in aged human endothelial cells shown in vitro; direct in-vivo mechanistic proof pending |

### Exercise-induced angiogenesis

Aerobic exercise drives skeletal muscle angiogenesis via VEGF release from contracting muscle fibers → VEGFR2 activation on capillary endothelium. Both the upregulation of VEGF-A and VEGFR2 transcripts in human skeletal muscle post-exercise have been documented [^gustafsson2005], and impaired angiogenic response is observed in aged and diabetic muscle [^kivela2008].

VEGF receptor antagonism blocks exercise-driven arteriogenesis more completely than capillary angiogenesis, suggesting partial VEGFR-independent capillary growth mechanisms [^lloyd2005]. VEGF and VEGFR2 are still considered the dominant regulators of exercise-induced capillary adaptation [^hoier2014].

### Brain microvascular aging

Age-associated cognitive decline correlates with reduced cerebral blood flow and microvascular density. The VEGF–VEGFR2 axis contributes to neurovascular unit maintenance; its decline in aged brain is hypothesized to reduce cerebrovascular reserve. #gap/no-mechanism — causal relationship between VEGFR2 decline and cognitive impairment in humans not established; mechanistic studies remain largely in rodent models.

### Endothelial senescence and VEGFR2

Aged endothelial cells show features of cellular senescence (p21/p16 upregulation, SASP, reduced proliferative capacity). MicroRNA-mediated suppression of VEGFR2 signaling in aging endothelial cells has been described — e.g., in aged C57BL/6 mice (12 months old), miR-25-3p is downregulated in old endothelial cells. miR-25-3p normally promotes angiogenesis by targeting TULA-2 (a protein tyrosine phosphatase): when miR-25-3p is present, TULA-2 is suppressed, allowing SYK Y323 phosphorylation → VEGFR-2 Y1175 phosphorylation → angiogenesis. In aging, miR-25-3p downregulation leads to TULA-2 upregulation, reduced SYK/VEGFR-2 Y1175 phosphorylation, and impaired angiogenic capacity. Restoration of angiogenesis was achieved by miR-25-3p agomir injection (upregulation), which promoted capillary regeneration and blood flow recovery in an aged hindlimb ischemia model [^lian2020]. CircCRIM1, a circular RNA, similarly modulates VEGFR2 expression via the miR-455-3p/Twist1 axis in aging endothelium [^zhao2022]. #gap/needs-replication — both are single-study findings in mouse models.

## Pharmacology and druggability

**Druggability tier: 1** (clinical drugs exist; FDA-approved for oncology indications).

**Oncology anti-angiogenic context (tier-1 basis):**

| Drug | Class | Target | FDA approval |
|---|---|---|---|
| Bevacizumab (Avastin) | mAb | VEGF-A (ligand trap) | 2004 (CRC) |
| Aflibercept (Zaltrap / Eylea) | Fusion protein (decoy receptor) | VEGF-A, VEGF-B, PIGF | 2011 (mCRC / AMD) |
| Ramucirumab (Cyramza) | mAb | VEGFR2 ECD directly | 2014 (gastric, NSCLC, HCC, CRC) |
| Sunitinib | Multi-target TKI | VEGFR1/2/3, PDGFR, KIT, RET | 2006 (RCC, GIST) |
| Sorafenib | Multi-target TKI | VEGFR2/3, RAF, PDGFR | 2005 (HCC, RCC, DTC) |
| Axitinib | TKI (VEGFR-selective) | VEGFR1/2/3 | 2012 (RCC) |
| Lenvatinib | Multi-target TKI | VEGFR1/2/3, FGFR, PDGFR | 2015 (DTC, HCC, endometrial) |
| Cabozantinib | Multi-target TKI | VEGFR2, MET, AXL, RET | 2012 (MTC, RCC, HCC) |

**Aging-context druggability rationale.** All approved drugs *inhibit* VEGFR2 for anti-tumor anti-angiogenic effects. The aging-relevant hypothesis is the inverse — **restoring/augmenting** VEGFR2 signaling in aged tissues to reverse capillary rarefaction and support tissue regeneration. No FDA-approved or clinical-stage drug exists for a pro-angiogenic aging indication. The tier-1 designation is assigned because pharmacological VEGFR2 modulation is clearly tractable (the biology is fully drug-accessible); the direction (inhibition vs activation) distinguishes the aging context from the oncology context. This divergence is a notable gap between the oncology and aging-medicine fields.

**BPC-157 claim.** The synthetic peptide [[bpc-157]] has been claimed to upregulate VEGFR2-mediated angiogenesis based on in vitro and rodent data. The mechanism remains poorly characterized and no human clinical evidence supports VEGFR2-mediated pro-angiogenic effects of BPC-157. #gap/no-mechanism #gap/needs-human-replication

## Co-receptors and modulators

- **VEGFR1 (FLT1):** Acts as a decoy receptor for VEGF-A, limiting VEGFR2 availability. Soluble VEGFR1 (sVEGFR1/sFLT1) is a potent endogenous VEGF antagonist.
- **Neuropilin-1 (NRP1):** Co-receptor that enhances VEGF-A binding to VEGFR2 and potentiates signaling; expressed on arterial endothelium.
- **VE-cadherin:** Interacts with VEGFR2 at adherens junctions; modulates permeability signaling. VEGFR2 pY949 (mouse; equivalent to human Tyr951) → TSAd → c-Src → VE-cadherin Y685 phosphorylation drives vascular leakage selectively; Kdr Y949F knock-in mice show suppressed pathological leakage in CNV and OIR retinopathy models while preserving angiogenesis (since avascular area was not significantly different between genotypes). VE-cadherin pY658, by contrast, was not significantly changed in Y949F mice [^smith2020].
- **Heparan sulfate proteoglycans (HSPGs):** Matrix components that present VEGF to VEGFR2; their composition changes with aging.

## Key interactors (signaling)

- [[vegfa]] — primary extracellular ligand
- PLC-γ1 — Tyr1175 docking; proliferation/migration
- PI3K-p85/p110 — via Shb adaptor at Tyr1175; AKT survival axis
- Src kinase — Tyr951 signaling; VE-cadherin regulation
- NRP1 — co-receptor; arterial angiogenesis

## Limitations and knowledge gaps

- `#gap/needs-gtex-query` — No GTEx aging-correlation data (Spearman ρ across aging tissues) pulled for this page. See `sops/finding-tissue-expression.md`.
- `#gap/needs-human-replication` — Capillary rarefaction mechanism (VEGFR2 decline as driver vs consequence of aging) demonstrated in mice; direct human mechanistic evidence limited.
- `#gap/needs-human-replication` — miR-25-3p/VEGFR2 and circCRIM1/VEGFR2 aging findings are single-study mouse-model data.
- `#gap/no-mechanism` — BPC-157 VEGFR2 upregulation mechanism not characterized mechanistically; downstream targets not mapped.
- `#gap/no-mechanism` — Causal link between VEGFR2 decline and age-related cognitive impairment in humans not established.
- `#gap/needs-replication` — Pro-angiogenic aging interventions targeting VEGFR2 exist only at preclinical stage; no validated human aging trial data.
- `#gap/needs-canonical-id` — GenAge entry not confirmed; HAGR/GenAge database should be checked for a formal KDR/VEGFR2 entry. NCBI Gene 3791 and HGNC 6307 are presumed but not independently re-verified against HGNC portal.

## Footnotes

[^terman1991]: PMID:1656371 · Terman BI et al. · *Oncogene* 1991;6(9):1677–83 · in-vitro (molecular cloning) · model: human endothelial cell cDNA library · original identification of KDR as a novel receptor tyrosine kinase; maps to chromosome 4q
[^shibuya2011]: doi:10.1177/1947601911423031 · Shibuya M · *Genes & Cancer* 2011;2(12):1097–105 · review · 1,513 citations · comprehensive overview of VEGFR signaling architecture and downstream axes
[^zeng2001]: doi:10.1074/jbc.m103130200 · Zeng H, Sanyal S, Mukhopadhyay D · *J Biol Chem* 2001;276(35):32714–9 · in-vitro (EGFR-KDR chimeric receptor mutants expressed in primary HUVEC via retroviral transduction) · n=cell lines (quadruplicate assays, repeated ≥3×) · Tyr951 (kinase-insert domain) essential for migration; Y951F abolishes EGF-stimulated migration but not proliferation or MAPK activation · Tyr1059 (catalytic domain) essential for proliferation, MAPK phosphorylation, and intracellular Ca²⁺ mobilization; Y1059F abolishes proliferative response · Tyr1054 mutant (Y1054F) showed no significant functional difference from WT in either proliferation or migration assays
[^bonner2013]: doi:10.2337/db12-0354 · Bonner JS et al. · *Diabetes* 2013;62(2):572–80 · in-vivo (MCK-Cre/VEGFlox/lox muscle-specific VEGF KO) · n=8 WT (mVEGF+/+) / n=9 KO (mVEGF−/−) · ~60% reduction in skeletal muscle capillary density + ~50% reduction in cardiac muscle capillary density (P≤0.05 both); impaired insulin-stimulated whole-body glucose disposal (blunted by 56±16%, P≤0.05); myocellular insulin action intact in isolated muscle (ex vivo) · model: C57BL/6 background (≥10 backcross generations), 12-week-old chow-fed mice
[^gustafsson2005]: doi:10.1152/japplphysiol.01402.2004 · Gustafsson T et al. · *J Appl Physiol* 2005;98(6):2249–56 · in-vivo (human, exercise intervention) · n=8 · differential VEGF-A isoform and VEGFR expression in human skeletal muscle post-exercise
[^kivela2008]: doi:10.1186/1475-2840-7-13 · Kivelä R et al. · *Cardiovasc Diabetol* 2008;7:13 · in-vivo (mouse, healthy vs diabetic) · blunted VEGF-A and VEGFR-2 angiogenic response in diabetic vs healthy muscle after exercise
[^lloyd2005]: doi:10.1152/ajpheart.00786.2004 · Lloyd PG et al. · *Am J Physiol Heart Circ Physiol* 2005;288(1):H H420–30 · in-vivo (rat, exercise training + VEGFR blockade) · VEGFR antagonism fully blocked arteriogenesis but only partially blocked capillary angiogenesis
[^hoier2014]: doi:10.1111/micc.12117 · Hoier B, Hellsten Y · *Microcirculation* 2014;21(4):301–14 · review · 184 citations · VEGF as primary driver of exercise-induced skeletal muscle capillary growth; dynamics of VEGF release and VEGFR2 signaling
[^lian2020]: doi:10.18632/aging.103834 · Lian C et al. · *Aging (Albany NY)* 2020;12(17):17267–86 · in-vivo (C57BL/6, 12-month-old aged mice; hindlimb ischemia model) + in-vitro (young ECs [8-week] vs old ECs [12-month]) · miR-25-3p is downregulated in old endothelial cells; miR-25-3p promotes angiogenesis by suppressing TULA-2 → enabling SYK Y323 phosphorylation → VEGFR-2 Y1175 phosphorylation; restoration of angiogenesis achieved by miR-25-3p agomir (upregulation) injection, not inhibition; n=3 for in vitro Western blots #gap/needs-replication
[^zhao2022]: doi:10.1155/2022/2062885 · Zhao L et al. · *Oxid Med Cell Longev* 2022;2022:2062885 · in-vitro (aging endothelial model) + in-vivo · circCRIM1/miR-455-3p/Twist1/VEGFR2 axis in vascular aging #gap/needs-replication
[^smith2020]: doi:10.7554/eLife.54056 · Smith RO et al. · *eLife* 2020;9:e54056 · in-vivo (Kdr Y949F/Y949F knock-in mouse; CNV laser-induced retinopathy and OIR oxygen-induced retinopathy models) · VEGFR2 mouse pY949 (= human Tyr951) → TSAd → c-Src → VE-cadherin Y685 phosphorylation drives pathological vascular leakage; Kdr Y949F mice showed significantly reduced microsphere extravasation in CNV lesions (p=0.0006) and OIR tufts (p=0.0033) vs Kdr+/+ · VE-cadherin pY685 reduced in Y949F retinal tufts (p=0.0086); VE-cadherin pY658 not significantly different (ns) · Pathological neoangiogenesis (tuft area) also reduced in Y949F mice but avascular area unchanged, suggesting separation of permeability from developmental angiogenesis · n=9–11 mice per group (CNV); n=6–7 per group (OIR)
