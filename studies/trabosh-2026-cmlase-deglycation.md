---
type: study
doi: 10.1038/s41467-026-75141-2
pmid: null
pmc: null
title: "Reversal of protein chemical aging by enzymatic deglycation"
authors: [Trabosh N, Smith J, Hsu MYH, Panja S, Nagaraj R, Olsson N, McAllister FE, Cravens A]
year: 2026
journal: Nature Communications
study-design: in-vitro
publication-type: research-article
volume: 17
issue: 1
pages: "5926"
organism: multi
n-subjects: 7  # 1 lens donor + 4 aorta donors + 2 skin donors; efficacy headlines are single-donor per older tissue
intervention: ["[[cmlase]]"]
hallmarks-tested: []
human-evidence: true  # original ex-vivo human-tissue experiments; no in-vivo human intervention
peer-reviewed: true
preregistered: false
key-findings: [engineered-cml-deglycation, native-lysine-restoration, aged-human-tissue-cml-reduction, no-in-vivo-efficacy, not-crosslink-cleavage]
local-pdf: null
verified: true
verified-date: 2026-07-14
verified-by: claude
verified-scope: "Main article, Supplementary Information, Nature Portfolio Reporting Summary, and deposited source-data workbook checked end-to-end. Crossref metadata/update relations checked on publication date. Internal source inconsistencies are retained and explicitly flagged: 15 stated substitutions vs 16 round-listed additions; >70% stated aortic reduction vs ~66% from deposited inactive-control means; and CrGO-897/CMLase in the Figure 3 results vs CrGO-865 in the corresponding proteomics Methods paragraph."
literature-checked-through: 2026-07-14
---

# Reversal of Protein Chemical Aging by Enzymatic Deglycation (Trabosh 2026)

## TL;DR

Trabosh et al. engineered **CMLase (CrGO-897)**, a bacterial glycine-oxidase variant that oxidatively removes protein-bound [[carboxymethyl-lysine|Nε-carboxymethyl-lysine (CML)]] and regenerates lysine. At 5 µM in vitro, the enzyme reduced CML on model proteins and on ex-vivo human lens, [[arteries|aortic]], and [[skin]] samples from older donors. This is a substantial proof of concept for enzymatic repair of a mature, previously treated-as-irreversible advanced glycation end-product (AGE) adduct, but it is **not yet an AGE crosslink breaker**: CML is a monovalent lysine adduct, and the study neither tested nor cleaved [[glucosepane]] or another covalent protein–protein crosslink. Living *Escherichia coli* powered the growth-coupled directed-evolution selection, but no living mammalian cells, viable tissues, animals, tissue biomechanics, receptor for advanced glycation end-products (RAGE) signaling, delivery, pharmacokinetics, or safety endpoints were tested.[^trabosh2026]

## What the study did

### Enzyme discovery and engineering

The authors began with flavin adenine dinucleotide (FAD)-dependent glycine oxidases because the carboxymethyl-amino portion of CML resembles glycine. A *Bacillus subtilis* enzyme oxidized free CML but not peptide-bound CML. Structural screening of 44,783 AlphaFold-linked oxidase sequences identified a glycine oxidase from *Calidithermus roseus* (CrGO) whose active-site opening lacked a twelve-residue helix and could weakly process a CML-containing peptide.[^trabosh2026]

They then coupled CML-to-lysine conversion to growth of a lysine-auxotrophic *Escherichia coli* strain. More than ten libraries, each averaging 5 × 10⁷ colonies in diversity, were constructed and evaluated through five rounds of directed evolution; the authors report a cumulative screening total exceeding 5 × 10⁸ library members, including exploratory libraries not detailed in the main text. The article describes the final CrGO-897 variant, named CMLase, as containing fifteen substitutions and a two-residue deletion relative to the starting CrGO scaffold. However, the additions listed round-by-round total **sixteen** substitutions (7 + 1 + 3 + 2 + 3); neither the Supplementary Information nor source-data workbook supplies the final variant sequence or a reversion history that reconciles the discrepancy.[^trabosh2026]

### Reaction

CMLase oxidizes the N-carboxymethyl substituent on modified lysine, producing native lysine together with hydrogen peroxide and glyoxylate/glyoxylic acid. This directly repairs the modified residue rather than merely trapping upstream glycation precursors. The enzyme retained activity on free glycine but showed no detectable activity on the other tested canonical free amino acids, terminal glycine- or arginine-containing tripeptides, carboxymethyl-arginine-modified bovine serum albumin (BSA), or unmodified BSA. N-terminal α-amine carboxymethylation was not tested.[^trabosh2026]

## Experimental design

- **Biochemical screening:** purified glycine-oxidase homologs and engineered variants; kinetic assays were generally run in triplicate.
- **Model protein substrates:** chemically CML-modified BSA, casein, collagen, hemoglobin, and sheep-eye total protein extract. Active enzyme was compared with catalytically inactive CeGO-763.
- **Site-resolved proteomics:** liquid chromatography–tandem mass spectrometry (LC–MS/MS) mapped CML occupancy at 33 lysines on CML-BSA after active or inactive enzyme treatment (n = 3 assay replicates).
- **Human lens:** soluble protein from one 64-year-old donor lens was treated overnight with 5 µM CMLase and assessed by LC–MS/MS and CML enzyme-linked immunosorbent assay (ELISA).
- **Human tissue sections:** formalin-fixed paraffin-embedded abdominal aorta and skin sections were treated overnight with 5 µM CMLase or inactive control and quantified by anti-CML immunohistochemistry. The older efficacy tissues were aorta from one 75-year-old donor and abdominal skin from one 74-year-old donor. Three younger aorta donors (ages 20, 25, and 25) provided staining context; skin from one 31-year-old donor was also treated and quantified. Together with the one 64-year-old lens donor, the figures document **seven human donors total**, but each older-tissue efficacy headline comes from one donor.
- **Blinding and statistics:** tissue staining/data analysis for Figure 4 and Supplementary Figures 15–20 was blinded to tissue/enzyme identity. The authors report successful independent assay repetitions on different days, generally n ≥ 3, but no power analysis or null-hypothesis tests for the treatment comparisons. The sole inferential test reported is a secondary Spearman correlation between B-factor and site-level repair (r = 0.3695, approximate two-tailed p = 0.0343; n = 33 sites). Tissue-region measurements are spatial subsamples, not independent donors.[^trabosh2026]

## Key results

### Catalytic gain and protein-level activity

The starting CrGO had a catalytic efficiency on the AA-CML-AA peptide of approximately 1.2 × 10⁻³ s⁻¹ mM⁻¹. CrGO-897 reached approximately 1.0 × 10⁻² s⁻¹ mM⁻¹ on the same substrate (Kₘ = 0.51 ± 0.10 mM; kcat = 5.3 ± 0.4 × 10⁻³ s⁻¹), an approximately **8.9-fold** improvement calculated from Supplementary Table 3. The Discussion's ">10-fold" characterization is therefore only an approximation and is not reproduced by the tabulated values. With 5 µM CMLase and 1 µM CML-BSA, hydrogen peroxide accumulated at 0.90 µM/h; unmodified BSA and no-enzyme controls generated no detectable signal. Sodium dodecyl sulfate–polyacrylamide gel electrophoresis showed no protein fragmentation after overnight exposure, arguing against proteolysis as the explanation for reduced CML signal.[^trabosh2026]

### Broad but incomplete repair across model proteins

Overnight treatment with 5 µM CMLase reduced anti-CML ELISA signal by **52–97%** across the tested CML-modified model proteins (n = 4 assay replicates in Figure 3A). Means reconstructed from the deposited values give approximately **53% for BSA, 97% for casein, 80% for collagen, 91% for sheep-eye total protein extract, and 89% for hemoglobin**. In CML-BSA proteomics, 30 of 33 detected CML-modified lysines decreased after treatment; 21 sites decreased by more than 50%, and 7 by more than 90%. Three strongly modified sites showed less than 5% reduction. Activity depended partly on local sequence and structural context rather than surface exposure alone.[^trabosh2026]

### Ex-vivo human tissues

| Sample | Treatment/readout | Reported change | Evidence unit |
|---|---|---|---|
| Lens, age 64 | 5 µM overnight; hydrolysis + LC–MS/MS | Paper states **45% lower total CML**; deposited triplicate means imply ~47% | one donor homogenate; three assay measurements |
| Lens, age 64 | 5 µM overnight; anti-CML ELISA | Paper states **78% lower signal**; deposited triplicate means imply ~77% | same donor; three assay measurements |
| Abdominal aorta, age 75 | 5 µM overnight; anti-CML immunohistochemistry | Paper states **>70% lower DAB staining**, but deposited means imply ~66% versus inactive enzyme (~62% versus no-enzyme/antibody-only) | four aligned spatial regions from one donor |
| Abdominal skin, age 74 | 5 µM overnight; anti-CML immunohistochemistry | Paper states **>55% lower staining** in epidermis and dermis; deposited means imply ~58% and ~63%, respectively, versus inactive enzyme | four spatial regions from one donor; separately treated age-31 tissue |

The lens discrepancy (45% by LC–MS/MS versus 78% by ELISA) is attributed by the authors to preferential access to surface-exposed, immunoreactive CML: hydrolysis/mass spectrometry measures the total CML pool, including buried sites. The paper did not perform inferential statistics on these donor-level outcomes, and multiple assay measurements or image regions do not increase the biological donor N. The aortic ">70%" statement is not reproduced by the deposited group means.[^trabosh2026]

## Why this is not yet a crosslink-breaker result

[[carboxymethyl-lysine|CML]] attaches at one lysine residue and does **not** covalently bridge two amino acids or protein chains. Removing it may restore lysine charge and reduce [[rage|RAGE]] ligand burden, but it does not demonstrate reversal of the collagen-stiffening crosslinks targeted by [[age-crosslink-breakers]]. The dominant mature human extracellular-matrix crosslink [[glucosepane]] is chemically distinct; this paper names glucosepane as an example for future enzyme-engineering campaigns and describes it as still resistant to reversal.[^trabosh2026]

Accordingly, the strongest supported claim is **mature AGE-adduct repair**, not restoration of crosslinked-tissue mechanics. A future glucosepane-active enzyme could emerge from the platform, but no such activity is shown here. This distinction is central to interpreting the paper.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Target chemistry present in humans? | yes | Endogenous CML accumulated over decades was tested directly in human lens, aorta, and skin. |
| Native tissue access demonstrated? | partial | Activity was shown in homogenized lens protein and thin fixed tissue sections, where diffusion barriers are far lower than in an intact organ. |
| Functional phenotype restored? | no | No biomechanics, cellular function, inflammatory signaling, or tissue physiology was measured. |
| Replicated in living humans? | no | No in-vivo administration or clinical intervention occurred. |

#gap/needs-human-replication #gap/needs-replication

## Limitations and verification priorities

1. **Single-donor older-tissue evaluations.** The headline lens, aorta, and skin reductions derive from one older donor per tissue. Technical/region replicates cannot establish population-level efficacy; the total seven-donor count includes younger contextual/comparator specimens.
2. **No living mammalian-system exposure.** Fixed 4-µm tissue sections and homogenized lens protein maximize enzyme access; penetration into intact, dense, crosslinked extracellular matrix is unknown. The living-cell component was the *E. coli* selection system, not a mammalian efficacy or safety model.
3. **No functional rescue.** CML removal was measured chemically or immunohistochemically, but RAGE signaling, nuclear factor-κB activation, cytokines, tissue elasticity, vascular compliance, and lens transparency were not tested.
4. **No crosslink substrate.** Glucosepane and pentosidine cleavage were not tested. CML is non-crosslinking.
5. **Substrate coverage is incomplete.** Some BSA sites resisted repair, carboxymethyl-arginine was not processed, and N-terminal carboxymethylation remains uncharacterized.
6. **Translational safety is unknown.** The enzyme is bacterial and may be immunogenic; delivery route, tissue half-life, repeat dosing, off-target proteome activity, and local hydrogen-peroxide/glyoxylate burden were not evaluated. #gap/long-term-unknown
7. **Limited statistical inference.** No formal hypothesis tests, confidence intervals, or donor-level replication support the ex-vivo percentage reductions. The only reported inferential test was the secondary site-level B-factor correlation (Spearman p = 0.0343).
8. **Internal reporting inconsistencies.** The round-listed substitutions total 16 although the article states 15; deposited aortic means imply ~66% rather than >70% reduction versus inactive enzyme; and the Figure 3 results label the proteomics treatment CMLase/CrGO-897 whereas the corresponding Methods paragraph names CrGO-865.
9. **Commercial conflict and patent.** The first and senior authors were affiliated with Revel Pharmaceuticals, which filed U.S. Provisional Patent Application 64/039,597 on the work and named both as inventors. Other authors declared no conflict. The study received National Institute on Aging small-business awards R43AG084351 and R44AG084351.

## Data availability

Raw proteomics data were deposited to ProteomeXchange/PRIDE as **PXD070124**. Processed proteomics, enzyme kinetics, ELISA, and histology measurements accompany the article as source data.[^trabosh2026]

## See also

- [[carboxymethyl-lysine]] — the mature monovalent AGE adduct actually repaired
- [[advanced-glycation-end-products]] — broader AGE formation and damage context
- [[glucosepane]] — dominant human extracellular-matrix AGE crosslink; not tested here
- [[age-crosslink-breakers]] — intervention class whose substrate boundary should remain distinct
- [[microbial-amadori-deglycation]] — related microbial oxidative deglycation precedent
- [[rage]] — proposed downstream signaling target; not measured in this study

## Footnotes

[^trabosh2026]: [[studies/trabosh-2026-cmlase-deglycation]] · doi:10.1038/s41467-026-75141-2 · in-vitro + ex-vivo human tissue · biochemical assays generally n ≥ 3; seven human donors documented across figures, but headline older lens/aorta/skin outcomes each use one donor and technical/spatial subsamples · model: living *E. coli* selection, purified CML-modified proteins, and human lens, aorta, and skin samples · no treatment-comparison p-values; secondary B-factor correlation p = 0.0343 · peer-reviewed
