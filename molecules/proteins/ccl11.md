---
type: protein
aliases: [eotaxin, eotaxin-1, "C-C motif chemokine 11", SCYA11]
uniprot: P51671
ncbi-gene: 6356
hgnc: 10610
ensembl: ENSG00000172156
mouse-ortholog: Ccl11
genage-id: null
pathways: ["[[chemokine-signaling]]"]
hallmarks: ["[[chronic-inflammation]]", "[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 1
caused-by: []
causes: ["[[neurogenesis-decline]]"]
complex-subunits: []
is-noncoding-rna: false
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Villeda 2011, Jose 1994, Smith 2015, Hoefer 2017, Mehdipour 2021, Williams 2015 primary-source PDFs verified; Villeda 2014 (10.1038/nm.3569) not verified — green OA but download failed (no downloadable URL survives archive filtering); canonical-database identity fields (UniProt P51671, NCBI Gene 6356, HGNC 10610, PubChem) not independently re-verified against databases"
---

# CCL11 (Eotaxin-1)

CCL11 (C-C motif chemokine ligand 11), originally named eotaxin, is a secreted CC-family chemokine that has acquired central importance in aging biology as the prototypical **pro-aging circulating factor**. While classically studied as a potent eosinophil recruiter in allergic inflammation, CCL11 rose to prominence in aging research through the 2011 Villeda/Wyss-Coray heterochronic parabiosis screen, which identified it as one of several blood-borne proteins that increase with age and — when administered to young animals — impair adult hippocampal neurogenesis and cognitive function [^villeda2011].

## Identity

- **UniProt:** P51671 (CCL11_HUMAN, manually reviewed / Swiss-Prot)
- **Gene:** CCL11 (alias SCYA11)
- **NCBI Gene:** 6356
- **HGNC:** 10610
- **Ensembl:** ENSG00000172156
- **Mouse ortholog:** Ccl11 (one-to-one; orthologous pro-aging function demonstrated directly in parabiosis experiments)
- **Precursor length:** 97 amino acids
- **Mature peptide:** residues 24–97 (74 amino acids)
- **Molecular weight (mature):** ~8.4 kDa (10.7 kDa precursor including signal peptide)
- **GenAge:** not listed as of 2026-05-05 #gap/unsourced — CCL11 does not have a GenAge-human entry despite strong aging evidence; absence likely reflects GenAge's focus on longevity-modifying genes rather than circulating aging factors. Seeder confirmed this via HAGR lookup.

## Chemokine family and structure

CCL11 belongs to the **CC (beta) chemokine subfamily**, defined by adjacent N-terminal cysteine residues that form two characteristic disulfide bonds (Cys32–Cys57; Cys33–Cys73). These bonds stabilize a conserved Greek-key fold required for receptor engagement. #gap/unsourced — Williams 2015 (cited below) is a historical opinion piece that does not describe these structural details; disulfide bond positions and functional requirement need citation from a structural biochemistry source (e.g., NMR/crystallography paper or UniProt annotation).

**Key structural features:**

- Two disulfide bonds are required for biological activity
- O-linked glycosylation at Thr-94 (Gal-GalNAc disaccharide; sialylated)
- 3D structures solved by NMR (PDB: 1EOT, 2EOT) and X-ray crystallography (PDB: 7SCS)

**Primary receptor:** CCR3 (C-C chemokine receptor type 3) — a Gi-coupled GPCR expressed on eosinophils, basophils, mast cells, and — critically for aging biology — neural progenitor cells and microglia in the hippocampus.

## Classical biology: eosinophil chemoattractant

CCL11 was first isolated in 1994 by Jose et al. from bronchoalveolar lavage fluid of a guinea pig allergic airway inflammation model [^jose1994]. In that context, it was defined by two properties: (1) potent and selective eosinophil recruitment at picomolar concentrations (1–2 pmol sufficient to induce substantial eosinophil accumulation in vivo), and (2) functional selectivity — neutrophils were not recruited.

Physiological roles in non-aging contexts:

- **Eosinophil recruitment** during Th2 immune responses (asthma, atopic dermatitis, helminth infection) via CCR3 on eosinophils
- **Basophil and mast cell chemotaxis** (CCR3 is expressed on all three cell types)
- **Endothelial chemotaxis and angiogenesis** via PI3K/Akt pathway activation (secondary function; lower-affinity receptor interactions)
- Induced by TNF, IL-1α, and IFN-γ in airway and gut epithelium

CCL11 is constitutively expressed at low levels in multiple tissues, with high expression in airway epithelium, gut lamina propria, and — relevant for aging — produced by stromal fibroblasts throughout the body.

## Aging biology

### CCL11 as a pro-aging circulating factor (Villeda 2011)

The landmark Villeda et al. 2011 study used heterochronic parabiosis — surgically joining the circulation of young and old mice — to ask whether the aged systemic environment is itself sufficient to impair neurogenesis in young brains, and conversely whether young blood can rescue neurogenesis in old brains [^villeda2011].

**Key findings from Villeda 2011:**

- Old plasma alone (injected systemically into young mice) was sufficient to impair hippocampal neurogenesis and spatial learning/memory, even without parabiosis surgery — establishing causality
- Proteomic profiling of mouse plasma measured 66 cytokines, chemokines, and secreted signaling proteins; **17 proteins** correlated with decreased neurogenesis during aging, and **15 proteins** were elevated in young heterochronic parabionts; the **6-factor intersection** (CCL2, CCL11, CCL12, CCL19, Haptoglobin, β2-microglobulin) was the priority candidate list — CCL11 was at the top of this list
- **Plasma CCL11 increases with age** from young (~3 months) to old (~18–24 months) mice — the paper reports this as a continuous increase across ages 6, 12, 18, 24 months (5–6 animals per age group, Fig 3b); the approximate magnitude visible in Fig 3b is ~6-fold at 24 months vs youngest, but this fold-change is not stated numerically in the text #gap/needs-replication
- Old plasma alone injected into young mice (i.v., 4 times over 10 days; n=8 young-plasma recipients, n=7 old-plasma recipients) decreased Dcx+ neurogenesis and impaired contextual fear conditioning and RAWM spatial learning — establishing causality independent of parabiosis surgery
- In humans: plasma CCL11 increases with age from 20 to 90 years (cross-sectional; r=0.40, p=5.6×10⁻⁷, 95% CI: 0.26–0.53; Mann-Whitney U test); CSF CCL11 also elevated in subjects aged 65–90 vs 20–45 years (p<0.01, t-test)
- Systemic CCL11 administration to young mice (10 μg/kg via intraperitoneal injection on days 1, 4, 7, and 10) impaired hippocampal neurogenesis and spatial memory, phenocopying the old-blood effect (n=6–10 per group for neurogenesis; n=12–16 per group for behavioral assays)

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | CCL11/CCR3 axis structurally conserved; CCR3 expressed on human neural progenitor cells |
| Phenotype conserved in humans? | partial | Human plasma CCL11 rises with age (cross-sectional); effect on human neurogenesis not directly tested |
| Replicated in humans? | no | No direct human neurogenesis experiment; circumstantial from biomarker studies |

#gap/needs-human-replication — The direct causal link (elevated CCL11 → impaired neurogenesis → cognitive decline) has been established in mice; human intervention evidence is absent.

### Mechanism of action in the aging brain

CCL11 is blood-brain barrier (BBB) permeable at the concentrations found in aged plasma. Within the CNS, CCR3 is expressed on:

- **Neural stem/progenitor cells** in the subgranular zone of the dentate gyrus — direct inhibition of proliferation/differentiation
- **Microglia** — may shift toward pro-inflammatory activation states
- **CNS microvasculature** — endothelial CCR3 may also modulate local neuroinflammation

The exact intracellular signaling cascade downstream of CCR3 activation in neural progenitor cells is incompletely characterized. #gap/no-mechanism

### Young-blood reversal of CCL11-associated decline (Villeda 2014)

Villeda et al. 2014 (Nature Medicine) showed that repeated young-blood plasma infusions into aged mice restored hippocampal neurogenesis and improved spatial learning/memory — the mirror experiment to the 2011 finding [^villeda2014]. This study conceptually established that removing pro-aging factors (including CCL11) from the systemic milieu, or diluting them with young factors, can partially reverse aging-associated cognitive decline in mice.

> Note: Villeda 2014 PDF could not be downloaded (green OA but no retrievable URL via a local paper archive). Specific quantitative claims (n per group, effect sizes) for this study are not verified. #gap/no-fulltext-access

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | Human plasma factor age-changes broadly parallel mouse data |
| Phenotype conserved in humans? | in-progress | Young plasma studies in humans ongoing (Alkahest; see [[interventions/stem-cell-therapy]]) |
| Replicated in humans? | in-progress | Small human cohort data from Alzheimer trials; underpowered |

### Sister papers: B2M (Smith 2015)

The parallel Wyss-Coray lab study (Smith et al. 2015, Nature Medicine) identified **β2-microglobulin ([[b2m]])** as a second pro-aging blood factor, independently of CCL11, that impairs hippocampal neurogenesis via a distinct mechanism [^smith2015]. These two papers together define the "pro-aging circulating factor" research program.

## CCL11 as a clinical biomarker

Plasma and serum CCL11 levels are elevated in multiple aging-related conditions, though for most the causal relationship vs. epiphenomenal inflammation is unclear:

- **Normal aging:** robust cross-sectional increase; confirmed across rodent and human cohorts #gap/unsourced — specific human cohort size and study design for the cross-sectional human data need primary citation from the Villeda 2011 supplemental or a dedicated epidemiology paper
- **Alzheimer's disease:** CCL11 has been reported elevated in AD plasma and CSF in multiple small studies; biomarker potential under investigation #gap/needs-replication
- **Multiple sclerosis:** elevated serum CCL11 reported (mechanism unclear; may reflect general neuroinflammation or Th2 skewing) #gap/unsourced
- **Schizophrenia:** elevated plasma CCL11 in a subset of patients (mechanistic significance uncertain) #gap/unsourced

CCL11 in aged blood products: Hoefer et al. 2017 documented that CCL11 is detectable in **fresh-frozen plasma (FFP; n=168, median 69.4 pg/ml) and erythrocyte concentrate (EC; n=160, median 42.7 pg/ml)** but was detectable in only 3 of 8 platelet concentrate (PC) samples [^hoefer2017]. CCL11 increased significantly with donor age in both FFP and EC (FFP: r=0.349, p=3.8×10⁻⁵; EC: r=0.438, p=6.8×10⁻⁹; Pearson correlation), independent of sex and storage time — raising questions about whether blood transfusions from older donors inadvertently transfer pro-aging signals.

## Plasma dilution and factor removal (Mehdipour 2021)

Mehdipour et al. 2021 (GeroScience) demonstrated that **neutral blood exchange (NBE; plasma dilution with 5% mouse serum albumin + saline)** in aged (22–24 months) male C57/B6 mice (n=4 YY controls, n=4 OO controls, n=4–7 ONBE) improved cognition (whisker discrimination and novel object recognition tests) and significantly reduced neuroinflammation (fewer CD68+ activated microglia in thalamus/hypothalamus; p<0.0002 vs OO) [^mehdipour2021]. A single NBE was sufficient. Senolytic ABT-263 reduced brain senescence (SA-βGal signal) but did **not** significantly enhance hippocampal neurogenesis and had a weaker effect on neuroinflammation than NBE. The paper's proteomics identified neuroprotective/neurogenic proteins upregulated after NBE but did not single out CCL11 normalization as the mechanism — CCL11 is mentioned as one of the age-elevated factors from prior literature (citing Villeda 2011). This work supports the "pro-aging factor removal/dilution" model over the "pro-youth factor addition" model.

#gap/no-mechanism — Whether CCL11 normalization is mechanistically required for the plasma dilution cognitive effect, vs. being a correlate, is not established.

## Therapeutic landscape

### Anti-CCR3 targeting

Open Targets Platform (ENSG00000172156) assigns CCL11 **druggability tier 1** — approved drugs exist targeting this protein or its pathway across small molecule (SM), antibody (AB), PROTAC (PR), and other clinical (OC) modalities. This reflects CCR3-directed and CCL11-directed clinical programs primarily in allergy/inflammation indications, not aging.

- **Bertilimumab** — a fully human anti-CCL11 (eotaxin-1) monoclonal antibody (anti-CCL11, not anti-CCR3) developed for eosinophilic GI disease and Crohn's disease; has completed Phase 2 clinical trials in those indications. No published data on aging or cognitive decline #gap/long-term-unknown
- **Anti-CCR3 antibodies** — preclinical tools (AstraZeneca, academic); not yet in aging trials
- No clinical-stage compound specifically targeting CCL11 for aging/cognitive indications as of 2026-05-05

### Young plasma and plasma dilution

- **Heterochronic young-plasma infusion** — showed cognitive benefit in aged mice [^villeda2014]; human trials ongoing for Alzheimer's (Alkahest / GRF6019 program); CCL11 is one of the pro-aging factors presumed to be diluted
- **Neutral blood exchange** — plasma dilution without young-plasma addition; proof-of-concept in aged mice [^mehdipour2021]; no human aging trial data yet

### Indirect targeting

- [[caloric-restriction]] and [[intermittent-fasting]] reduce circulating inflammatory chemokines including CCL11 in some studies #gap/unsourced
- [[exercise]] interventions may reduce plasma CCL11 in older adults, though data are sparse #gap/unsourced

## Pathway and cross-links

- [[chemokine-signaling]] — canonical CCL11/CCR3 signaling through Gi → PI3K/Akt and MAPK cascades
- [[chronic-inflammation]] — CCL11 is both a marker and driver of inflammaging
- [[stem-cell-exhaustion]] — impairs hippocampal neural stem cell activity; relevant to broader stem cell niche deterioration via systemic milieu
- [[altered-intercellular-communication]] — prototypical secreted aging factor that remodels distant tissue environments
- [[neurogenesis]] — direct target tissue; see [[neural-stem-cells]]
- [[microglia]] — CCR3-expressing CNS cell type; responds to CCL11 in aged brain
- [[alzheimers-disease]] — candidate biomarker; elevated in AD plasma/CSF
- [[b2m]] — parallel pro-aging circulating factor identified in same research program
- [[gdf11]] — another heterochronic blood factor studied by overlapping groups; contrasting proposed direction (GDF11 as pro-youth factor, contested)
- [[mus-musculus]] — primary model in which aging phenotype was established
- [[homo-sapiens]] — cross-sectional human plasma data confirm age-related increase

## Limitations and gaps

1. **Mouse→human causality gap** `#gap/needs-human-replication` — All mechanistic evidence (CCL11 → impaired neurogenesis → cognitive decline) is from rodent parabiosis and injection models. No human intervention data exist.
2. **No CCL11-specific human trial** `#gap/long-term-unknown` — Bertilimumab has completed trials in eosinophilic disease but not in aging or cognitive indications.
3. **AD/MS/schizophrenia biomarker data under-powered** `#gap/needs-replication` — Most studies in neurological conditions are small, cross-sectional, and have not consistently separated CCL11 from a general "inflammation" signature.
4. **CNS mechanism incompletely resolved** `#gap/no-mechanism` — CCR3 expression in neural progenitors and microglia is established, but intracellular cascades mediating neurogenesis suppression are not fully mapped.
5. **Plasma dilution attribution** `#gap/no-mechanism` — Whether cognitive benefit from plasma dilution (Mehdipour 2021) requires CCL11 normalization specifically, or is driven by other factors, is unknown.
6. **GenAge absent** `#gap/unsourced` — CCL11 is not in GenAge despite strong aging evidence; may warrant submission to HAGR. Verified absent as of 2026-05-05.

## Footnotes

[^villeda2011]: doi:10.1038/nature10357 · Villeda SA et al. (Wyss-Coray lab) · *Nature* 477:90–94, 2011 · in-vivo · model: heterochronic parabiosis (C57BL/6 mice, male and female) + plasma injection into young adult mice (n=8 young-plasma, n=7 old-plasma recipients) + CCL11 injection (n=6–10 neurogenesis; n=12–16 behavioral); plasma proteomics: 400–500 mice per age group · p<0.05–0.001 (various tests) · human: plasma r=0.40, p=5.6×10⁻⁷ (20–90 yr); CSF p<0.01 (20–45 vs 65–90 yr) · citation percentile: 100th (FWCI 48.8) · OA: PMC3170097
[^jose1994]: doi:10.1084/jem.179.3.881 · Jose PJ et al. · *J Exp Med* 179(3):881–887, 1994 · in-vivo · model: guinea pig allergic airways · foundational eotaxin discovery paper · 817 citations
[^villeda2014]: doi:10.1038/nm.3569 · Villeda SA et al. (Wyss-Coray lab) · *Nat Med* 20(6):659–663, 2014 · in-vivo · model: aged C57BL/6 mice + young plasma infusion · 1059 citations; FWCI 40.1 · OA status: green, but PDF download failed (no downloadable URL survives archive filtering) — claims on this page attributed to Villeda 2014 are unverified against the primary source #gap/no-fulltext-access
[^smith2015]: doi:10.1038/nm.3898 · Smith LK et al. (Wyss-Coray lab) · *Nat Med* 21(8):932–937, 2015 · in-vivo · model: aged C57BL/6 mice · β2-microglobulin as parallel pro-aging factor · 488 citations
[^hoefer2017]: doi:10.3389/fnagi.2017.00402 · Hoefer J et al. · *Front Aging Neurosci* 9:402, 2017 · observational · model: human blood bank samples · CCL11 increases with donor age in transfusion products
[^mehdipour2021]: doi:10.1007/s11357-020-00297-8 · Mehdipour M et al. (Conboy lab) · *GeroScience* 2021 · in-vivo · model: aged C57BL/6 mice · neutral blood exchange improves cognition + reduces neuroinflammation · 78 citations
[^williams2015]: doi:10.3389/fimmu.2015.00084 · Williams TJ · *Front Immunol* 6:84, 2015 · review · structural and functional overview of CCL11
