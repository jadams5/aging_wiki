---
type: study
doi: 10.1038/s41598-019-44676-4
pmid: 31186457
pmc: PMC6560215
title: "Failure of Oxysterols Such as Lanosterol to Restore Lens Clarity from Cataracts"
authors: [Daszynski DM, Santhoshkumar P, Phadte AS, Sharma KK, Zhong HA, Lou MF, Kador PF]
year: 2019
journal: Scientific Reports
study-design: in-vitro
publication-type: research-article
volume: 9
issue: 1
pages: 8459
organism: multi
n-subjects: "24 rat lenses (6/group); 13 human lens specimens reported across assays (human donor count incompletely specified)"
intervention: ["[[lanosterol]]"]
hallmarks-tested: ["[[loss-of-proteostasis]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [no-rat-lens-clearing, no-human-lens-protein-solubilization, no-high-affinity-alpha-b-crystallin-docking-prediction]
local-pdf: null
verified: true
verified-date: 2026-08-18
verified-by: claude
verified-scope: "Complete PMC6560215 full text, methods, Figures 2-8, and docking Tables 1-2 checked; model induction, exposures, human specimen structure, assay-level replication, PDB structures, pockets, positive control, scores, and limitations verified. Human donor count is not fully recoverable because the three 70-year-old lenses and the 72-year-old lens pair lack complete donor attribution. Internal docking prose/table and mutant-centroid inconsistencies are retained explicitly. PubMed, Europe PMC, PMC, and publisher records checked for supersession and publication updates through 2026-08-18."
---

# Daszynski et al. 2019 — Failure of lanosterol and related oxysterols to restore lens clarity

## TL;DR

Across rat-lens organ culture, human donor-lens protein assays, and computational docking, the authors found no evidence that lanosterol or 25-hydroxycholesterol restored clarity or solubilized aggregated lens protein under the tested conditions. Fifteen-millimolar lanosterol liposomes did not reverse three experimentally induced rat-lens opacities; neither oxysterol shifted soluble-versus-insoluble protein in the tested human material; and docking did not predict high-affinity binding to the three αB-crystallin structures.[^daszynski2019] This is a multi-assay negative result, not proof that every cataract model, formulation, or delivery route must fail. #gap/contradictory-evidence

## Design

### Rat-lens organ culture

- **Specimens:** 24 clear lenses dissected from 5-week-old, approximately 125-g Sprague–Dawley rats, allocated as six lenses per group after overnight pre-incubation.
- **Initial 48 hours:** one group remained uninduced; the other groups received an equatorial forceps squeeze (blunt trauma), 10 mM ouabain (Na+/K+-ATPase inhibition), or 1 mM of an unnamed experimental toxic glycoprotein chaperone that induced water influx and osmotic cataract.
- **Lanosterol exposure:** media for every group was then replaced with TC-199 medium containing 15 mM sonicated lanosterol liposomes for another 48 hours. Thus, the experiment had a clear-lens reference group but no induced-cataract group receiving vehicle or blank liposomes during the second period.
- **Assessment:** lenses were photographed over a grid after washing; outer-grid pixel densities were standardized. The paper does not report masked grading or a quantitative opacity scale.

### Human donor-lens assays

- **Lanosterol, intact fragments:** two lenses from one 47-year-old donor were each divided into four quadrants and incubated for 72 hours at 37 °C with 0.20 mM lanosterol or ethanol vehicle. Figure 3 reports `n=4` fragment measurements per condition, not four donors. Three additional lenses from 70-year-old humans reportedly gave similar results but were analyzed separately and shown only as `data not shown`; their donor count was not stated.
- **25-hydroxycholesterol, intact fragments:** six frozen lenses from three 60-year-old donors were each cut into thirds. Two fragments from different lenses were pooled into each of nine samples, giving `n=3` composite samples at 0, 0.25, or 0.50 mM for 72 hours.
- **Both oxysterols, homogenates:** a pair of 72-year-old lenses supplied homogenates exposed for 24 hours to 0, 100, or 200 µM lanosterol or 25-hydroxycholesterol at two protein loads. The experiment was run three times from that same lens pair; these are repeat assays, not three donor pairs.

The 13 reported human lens specimens comprise the 47-year-old pair, three additional 70-year-old lenses, six lenses from the three 60-year-old donors, and the 72-year-old pair. Because the paper does not fully specify donors for the latter two age groups, the frontmatter reports lens specimens rather than a person-level `n`.

### Docking

Lanosterol, 25-hydroxycholesterol, and ATP were docked with MOE 2016 and Schrödinger Maestro/Glide against two wild-type human αB-crystallin structures (PDB 2WJ7 and 2KLR) and the R120G mutant (2Y1Z). The authors tested the proposed dimer-interface pocket and the experimentally described ATP-interactive β4–β8 groove. ATP was a positive-control ligand: in the MOE comparison it was scored in its ATP pocket while the sterols were scored at the dimer interface, whereas the Glide analysis placed all three ligands into both regions.[^daszynski2019]

| Analysis | Lanosterol | 25-hydroxycholesterol | ATP control and interpretation |
|---|---|---|---|
| MOE, 2WJ7 | Dimer-interface score −4.33; predicted Kd 652.44 µM | Dimer-interface score −6.75; predicted Kd 10.82 µM | ATP at its own pocket scored −12.72 (0.44 nM); sterol scores for 2KLR/2Y1Z were unfavorable or not determinable. |
| Glide, ATP-interactive groove | No suitable lanosterol pose for any structure | 2WJ7 score −3.20 (4.42 mM); no result for 2KLR/2Y1Z | ATP scores were −8.23, −5.57, and −9.65 for 2WJ7, 2KLR, and 2Y1Z. |
| Glide, dimer interface | Predicted Kd 3.55 mM (2WJ7), 73.63 mM (2KLR), and not determined (2Y1Z) | Predicted Kd 579 µM, 1.22 mM, and 7.74 mM, respectively | No oxysterol result reached the authors' heuristic for therapeutically significant low-micromolar binding (docking score ≤−8). |

The MOE values above follow Table 1. A results sentence describes wild-type ATP scores as approximately −2 kcal/mol, but the table reports −12.72 and −11.48 with nanomolar predicted Kd values; the prose is internally inconsistent and appears to have dropped the digit `1`.

## Results

All three induced rat-lens groups remained opaque and progressed to mature opacity with nuclear involvement during the second 48-hour period despite lanosterol exposure; the uninduced group remained relatively clear. Because there was no induced vehicle-only arm in that period, the pre/post images directly show a lack of reversal but do not estimate whether lanosterol changed the progression rate relative to vehicle.

The 47-year-old lens-fragment assay showed no soluble/insoluble protein shift with 0.20 mM lanosterol (`P>0.5`); the three 70-year-old lenses reportedly agreed, but their data were not shown. The pooled 60-year-old fragments showed no difference across 0, 0.25, and 0.50 mM 25-hydroxycholesterol (`P=0.79`). The 72-year-old homogenates likewise showed no shift with either oxysterol at 100 or 200 µM (`P>0.05`).[^daszynski2019]

The docking calculations predicted substantially weaker binding for both oxysterols than for the ATP positive control. This supports the authors' conclusion that the tested static structures and pockets do not predict high-affinity αB-crystallin binding; docking alone cannot establish that no interaction occurs in a lens.

## Interpretation and limitations

This is a broader negative test than an isolated-protein assay because it combines intact viable rat lenses, aged human donor-lens material, and an explicit computational test of a proposed binding mechanism. It nevertheless has important boundaries:

- The rat experiment compared cataract induction states, not lanosterol versus blank liposome within each induced model; photography was not reported as masked or quantitatively graded.
- The induced trauma, ion-transport, and osmotic models are acute and mechanistically different from decades-old human age-related cataract.
- The human experiments used few donors, fragment pooling, and repeat assays from the same lenses. Fragment or technical `n` must not be presented as independent participants.
- The proposed dimer-interface docking pocket had no co-crystal ligand or experimentally specified oxysterol-contact residues. The Methods identify chain-A Phe55 as the 2WJ7 centroid, the same pocket for 2KLR, and Phe118 for 2Y1Z, whereas Table 2 and later discussion generalize the Phe55-centroid label across the models. This internal reporting inconsistency and the static structures further limit the docking interpretation.
- Direct organ-culture or homogenate exposure does not test whether an ocular formulation reaches an intact living human lens safely.

The result should therefore constrain broad claims of reliable aggregate dissolution while leaving formulation, aggregate state, cataract subtype, and delivery as unresolved boundary conditions. #gap/contradictory-evidence

## Supersession status

Date-filtered PubMed and Europe PMC searches through 2026-08-18 found later model- and delivery-dependent positive reports, including nanoparticle studies in inherited-cataract rats, a small subconjunctival-depot study in cynomolgus monkeys, cell/lentoid experiments, and more recent purified-protein work.[^supersession] None directly repeated and overturned all three Daszynski rat-lens models or the small donor-lens solubility assays. No parent-lanosterol human therapeutic result, randomized trial, systematic review, or meta-analysis superseded this study. The later mixed evidence is synthesized on [[lanosterol]]; the monkey experiment is detailed at [[studies/zhang-2022-lanosterol-cynomolgus-cataracts]].

PMC, PubMed, Europe PMC, and publisher searches found no indexed correction, retraction, or expression of concern for this article through 2026-08-18.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human lens tissue and human αB-crystallin structures were examined. |
| Phenotype conserved in humans? | partial | Whole-lens opacity reversal was tested only in rat lenses. |
| Replicated in humans? | no | Human experiments were ex vivo, not a clinical intervention. |

## Cited by wiki pages

[Auto-populated by Obsidian backlinks]

[^daszynski2019]: Daszynski DM, Santhoshkumar P, Phadte AS, Sharma KK, Zhong HA, Lou MF, Kador PF · doi:10.1038/s41598-019-44676-4 · PMID:31186457 · PMCID:PMC6560215 · 24 cultured rat lenses, 13 reported human donor-lens specimens, and in-silico αB-crystallin docking · complete open-access full text, figures, and tables verified.

[^supersession]: Representative later primary studies: Nagai et al., doi:10.3390/ijms21031048 and doi:10.3390/pharmaceutics12070629; Zhang et al., doi:10.1093/pcmedi/pbac021, PMID:36196296, PMCID:PMC9523460; Su et al., doi:10.1016/j.bbrep.2024.101679, PMID:38501050, PMCID:PMC10945048; Cheng et al., doi:10.1016/j.saa.2025.126558, PMID:40516309. PubMed and Europe PMC date- and publication-type searches were run through 2026-08-18; neither database returned a post-2019 lanosterol-cataract randomized controlled trial, systematic review, or meta-analysis.
