---
type: cell-type
aliases: [HSCs, hematopoietic stem cells, haematopoietic stem cells]
tissue-of-origin: ["[[bone-marrow]]"]
key-markers-mouse: [Lin-, Sca-1+, c-Kit+, CD150+, CD48-]
key-markers-human: [CD34+, CD38-, CD90+, CD45RA-, CD49f+]
lineage-output: [myeloid, lymphoid]
self-renewal: yes
aging-relevant: yes
affected-hallmarks: ["[[stem-cell-exhaustion]]", "[[genomic-instability]]", "[[epigenetic-alterations]]"]
key-aging-phenotypes: ["[[immunosenescence]]", "[[anemia-of-aging]]", "[[clonal-hematopoiesis]]"]
typical-niche: "endosteal + perivascular bone marrow niches"
niche-signaling: ["[[notch-pathway]]", "[[wnt-beta-catenin]]", "[[bmp-signaling]]", "[[tgf-beta]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Rossi 2007, Beerman 2010, Sudo 2000, Pang 2011, and Jaiswal 2014 verified against primary source PDFs (Jaiswal 2014 prevalence CIs added 2026-05-06 R26e from body Results § p.2490; CHD/stroke HRs use body Results § values 1.2–3.5 / 1.3–4.8, which differ from abstract 1.2–3.4 / 1.4–4.8 by ±0.1 due to abstract rounding — body is canonical. Cluster-wide consistency confirmed against [[clonal-hematopoiesis]], [[dnmt3a]], [[asxl1]] verified pages all using body values). Genovese 2014 verified against PubMed abstract (PDF blocked by Cloudflare; abstract sufficient to confirm n, gene list, and HR). Pinho & Frenette 2019 (Nature Rev MCB) and Akunuru & Geiger 2016 (Trends Mol Med) not verified against full PDFs — both closed-access or download-failed; niche claims tagged #gap/no-fulltext-access. CD49f marker in human frontmatter not sourced to a paper verified here."
---


# Hematopoietic Stem Cells (HSCs)

Bone-marrow-resident multipotent stem cells that give rise to all blood lineages (myeloid + lymphoid). The most-studied stem cell population in aging biology because they are isolatable by surface immunophenotyping, functionally testable via transplantation reconstitution, and directly connected to multiple aging hallmarks. HSC function declines characteristically with age — paradoxically increasing in number while decreasing in per-cell reconstitution capacity and shifting toward myeloid-biased differentiation.

## Identity and surface markers

HSCs are operationally defined by their immunophenotype, which differs between mouse and human:

### Mouse (canonical LSK + SLAM)

The minimal gate ("LSK") identifies Lineage-negative, Sca-1-positive, c-Kit-positive cells; further refinement via SLAM markers isolates long-term HSCs (LT-HSCs):

| Marker | LT-HSC | ST-HSC | Notes |
|---|---|---|---|
| Lin (B220, CD3, Gr-1, Mac-1, Ter119) | negative | negative | Exclusion of committed lineages |
| Sca-1 (Ly6A) | + | + | Stem/progenitor enrichment |
| c-Kit (CD117) | high | high | Receptor tyrosine kinase; SCF receptor |
| CD150 (SLAM) | + | low/− | Key LT-HSC marker |
| CD48 | − | − | Low/negative in LT-HSCs |
| CD34 | low/− | + | Inverse of human pattern |

### Human

Human HSCs lack a direct Sca-1 equivalent; immunophenotyping relies on CD34 positivity and lineage/activation marker exclusion:

| Marker | HSC | Progenitor | Notes |
|---|---|---|---|
| CD34 | + | + | Broad stem/progenitor; ~1% of BM cells |
| CD38 | − | + | Exclusion of committed progenitors |
| CD90 (Thy-1) | + | low/− | Enriches for LT-HSCs within CD34+CD38− |
| CD45RA | − | − (HSC); + (lymphoid) | Exclusion of lymphoid-primed progenitors |
| CD49f (integrin α6) | + | − | Enriches true LT-HSCs from CD34+CD38−CD90+ |

> Note: Mouse-human translation of surface phenotypes is imperfect. CD34 is low/negative in mouse LT-HSCs but high in human HSCs — a species difference that reflects distinct proliferative states, not a functional divergence in stemness.

## Niche

HSCs occupy two spatially distinct niches in the [[bone-marrow]]:

- **Endosteal niche** — periosteal surface, CXCL12-abundant reticular (CAR) cells and osteoblasts; associated with HSC quiescence and long-term maintenance [^pinho-frenette-2019].
- **Perivascular niche** — sinusoidal endothelium; CXCL12/CXCL4 gradients; associated with HSC mobilization and some proliferative activity [^pinho-frenette-2019].

CXCL12 (SDF-1) produced by niche stromal cells is the dominant HSC-retention signal, acting through CXCR4 on HSCs. Disrupting this axis (G-CSF mobilization) is the basis of clinical stem cell mobilization for transplantation.

## Self-renewal and functional assay

HSCs are defined by self-renewal capacity (ability to divide and produce daughter HSCs) and multipotency (ability to reconstitute all blood lineages). The **gold-standard functional assay** is competitive transplantation into lethally irradiated recipients:

1. Isolate test HSCs (marked by CD45.2 in mice)
2. Mix with congenic competitor cells (CD45.1)
3. Inject into irradiated recipient
4. Measure %CD45.2 in peripheral blood at 4, 8, 12, 16 weeks
5. ≥1% multilineage chimerism at 16 weeks = functional HSC

This assay has no human equivalent outside the allogeneic transplant setting.

## Aging phenotypes

HSC aging is one of the best-characterized examples of [[stem-cell-exhaustion]] at a cellular level. Changes fall into four categories:

### 1. Increased abundance, reduced per-cell function

Aged mouse [[mus-musculus]] bone marrow contains substantially more immunophenotypic HSCs than young marrow, yet each aged HSC has significantly reduced reconstitution capacity in competitive transplant assays [^sudo2000]. Sudo et al. 2000 used the CD34⁻KSL (Lin⁻Sca-1⁺c-Kit⁺CD34⁻) gate and found a ~17-fold expansion in the frequency of these cells between 2 and 18 months of age in C57BL/6 mice (Table II: 0.005% at 2mo → 0.087% at 18mo). The often-cited SLAM refinement (CD150⁺CD48⁻ within LSK) was introduced by Kiel et al. 2005 and is a distinct gating strategy from Sudo 2000. This paradox arises because the immunophenotype drifts with age — more cells fulfill the surface marker criteria without possessing functional stemness. #gap/unsourced — the "~10×" figure sometimes cited in secondary literature is not the Sudo 2000 number; strain-specific magnitude varies across studies.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — Pang et al. 2011 confirmed in human BM |

Pang et al. 2011 confirmed this pattern in human bone marrow: Lin⁻CD34⁺CD38⁻CD90⁺CD45RA⁻ HSCs are significantly increased in frequency in elderly donors (65+ y) compared to young donors (20–35 y; n=11 young, n=13 elderly; p<10⁻⁷ by Student's t-test), with the increase visible both as a fraction of CD34⁺ cells and as a fraction of total BM mononuclear cells [^pang2011]. The paper does not report a specific fold-change number in text; the magnitude is readable from Fig. 1B. Per-cell functional reconstitution is not directly testable in humans. #gap/needs-human-replication — direct per-cell functional data in humans is not available for obvious ethical/experimental reasons.

### 2. Myeloid-biased differentiation

Aged HSCs preferentially produce myeloid progeny (granulocytes, monocytes) at the expense of lymphoid output (T cells, B cells, NK cells). This shift occurs intrinsically within the HSC pool, not solely due to environmental changes [^beerman2010].

Mechanistically, Beerman et al. 2010 showed the aged HSC pool is enriched for a subpopulation that is intrinsically myeloid-biased, prospectively identifiable by high expression of Slamf1/CD150 (Slamf1^high HSCs) within the Lin⁻Sca-1⁺c-Kit⁺flt3⁻CD34⁻ compartment [^beerman2010]. Slamf1^high HSCs represent less than 25% of LT-HSCs in young mice (3 months) but progressively predominate with age, constituting the majority of the HSC pool by 24 months. Slamf1^low HSCs give predominantly balanced lineage reconstitution. The paper does not characterize a separate "lymphoid-biased" HSC subpopulation. This clonal expansion of intrinsically myeloid-biased clones leads to:

- Reduced naive T cell and B cell production → contributes to [[immunosenescence]]
- Elevated myeloid output → increased monocyte-derived inflammation
- Reduced immune surveillance competence

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — observed in human elderly BM (Pang 2011) |

[^beerman2010]: [[studies/beerman-2010-myeloid-bias-hsc]] · n=3–10 recipients per group (competitive transplantation of 10 or 180 Slamf1^high or Slamf1^low HSCs), young=3–4 months, midaged=12 months, old=22–24 months · in-vivo · model: C57BL/6 · doi:10.1073/pnas.1000834107

### 3. DNA damage accumulation

Aged HSCs accumulate unrepaired DNA damage — double-strand breaks (DSBs) detectable by γH2AX foci — at a higher rate than young HSCs. Rossi et al. 2007 showed that HSC quiescence (the majority of LT-HSCs are in G0) attenuates the DNA damage response, allowing damage to accumulate over years [^rossi2007].

HSCs from aged mice with deficiencies in specific DNA repair pathways (HR, NHEJ, NER) show accelerated functional decline, confirming that repair capacity constrains HSC longevity [^rossi2007].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | in-progress — CHIP studies are the functional readout |

[^rossi2007]: [[studies/rossi-2007-dna-damage-hsc-aging]] · n=multiple cohorts · in-vivo · model: repair-deficient aged C57BL/6 mice · local PDF available · doi:10.1038/nature05862

### 4. Clonal Hematopoiesis of Indeterminate Potential (CHIP)

CHIP is the age-associated clonal expansion of HSC progeny carrying somatic mutations, most commonly in epigenetic regulators (*DNMT3A*, *TET2*, *ASXL1*). Splicing factors (*SF3B1*, *SRSF2*) are also recurrently mutated but are substantially less frequent than the epigenetic regulator genes. These mutations confer a competitive growth advantage within the HSC niche, allowing a single mutant HSC clone to dominate hematopoiesis without causing overt blood cancer.

Key epidemiology from two landmark 2014 NEJM studies:

- **Jaiswal et al. 2014** — whole-exome sequencing of n=17,182 individuals; CHIP mutations detected in 5.6% (95% CI 5.0–6.3) of persons aged 60–69, 9.5% (95% CI 8.4–10.8; 219 of 2,300) aged 70–79, 11.7% (95% CI 8.6–15.7; 37 of 317) aged 80–89, and 18.4% (95% CI 12.1–27.0; 19 of 103) aged 90–108; the discussion notes ~10% of individuals **>70 years** carry these lesions. Carriers had HR=11.1 (95% CI 3.9–32.6) for hematologic malignancy; HR=1.4 (95% CI 1.1–1.8; P=0.02) for all-cause mortality; HR=2.0 (95% CI 1.2–3.5; P=0.02) for incident coronary heart disease; and HR=2.6 (95% CI 1.3–4.8; P=0.003) for ischemic stroke [^jaiswal2014].
- **Genovese et al. 2014** — whole-exome sequencing of n=12,380 individuals; CHIP observed in >10% of persons **>65 years** and ~1% under 50; *DNMT3A*, *ASXL1*, and *TET2* are most mutated genes; HR=12.9 (95% CI 5.8–28.7) for subsequent hematologic cancer [^genovese2014].

The cardiovascular risk is thought to be mediated by TET2-mutant macrophages producing excess IL-1β and IL-6, directly linking CHIP to [[chronic-inflammation]] and [[immunosenescence]].

[^jaiswal2014]: [[studies/jaiswal-2014-chip-adverse-outcomes]] · n=17,182 · observational (exome sequencing) · model: human blood DNA · doi:10.1056/NEJMoa1408617
[^genovese2014]: [[studies/genovese-2014-chip-cancer-risk]] · n=12,380 · observational (whole-exome sequencing) · model: human blood DNA · doi:10.1056/NEJMoa1409405

## Epigenetic aging in HSCs

HSC aging is also reflected in the **epigenetic clock**: HSCs from aged mice show altered DNA methylation patterns at lineage-specification loci, with hypermethylation at lymphoid genes and relative hypomethylation at myeloid genes — mirroring the functional myeloid bias at the epigenetic level. This links [[epigenetic-alterations]] directly to HSC functional output. #gap/needs-replication — mechanistic link between methylation changes and lineage bias is correlational; causal direction not fully established.

## Niche deterioration with age

The bone marrow niche itself ages in parallel with HSCs, making it difficult to separate intrinsic HSC aging from extrinsic niche effects. Aged niches feature:

- Increased adipogenesis in bone marrow (replacement of hematopoietic space by adipocytes)
- Reduced endosteal osteoblast activity → less HSC-supporting CXCL12 and SCF
- Altered vascular integrity in the perivascular niche
- Pro-inflammatory signals from aged stromal cells [^pinho-frenette-2019]

Heterochronic transplant experiments (young HSCs into aged recipients, and vice versa) in mice show that the niche contributes to HSC aging but intrinsic changes are dominant: young HSCs transplanted into aged mice show modest aging acceleration, while aged HSCs retain defects in young recipients [^akunuru2016]. #gap/needs-human-replication

[^pinho-frenette-2019]: [[studies/pinho-frenette-2019-hsc-niche-review]] · review · model: mouse + human · doi:10.1038/s41580-019-0103-9 · #gap/no-fulltext-access — PDF download failed (Nature Reviews MCB; green OA via PMC but retrieval failed; re-verify on next lint pass)
[^akunuru2016]: [[studies/akunuru-2016-hsc-aging-review]] · review · model: mouse · doi:10.1016/j.molmed.2016.06.003 · #gap/no-fulltext-access — closed-access (Trends in Molecular Medicine; not_oa per a local paper archive)

## Hallmark connections

| Hallmark | Mechanism in HSCs |
|---|---|
| [[stem-cell-exhaustion]] | Canonical example — per-cell reconstitution declines with age despite numerical expansion |
| [[genomic-instability]] | DSB accumulation due to quiescence-attenuated DDR; CHIP somatic mutations |
| [[epigenetic-alterations]] | Methylation drift at lineage-specific loci; epigenetic clock acceleration |
| [[chronic-inflammation]] | CHIP-associated TET2/DNMT3A-mutant macrophages overproduce IL-1β/IL-6 |
| [[immunosenescence]] | Myeloid bias reduces naive lymphocyte output; adaptive immune output contracts |

## Therapeutic relevance

### Allogeneic HSC transplantation

The clinical gold-standard for replacing aged or malignant HSC compartments. See [[hematopoietic-stem-cell-transplantation]] for the full intervention page (donor-age effects on engraftment, heterochronic-HSCT preclinical evidence, donor-derived CHIP transmission). Age itself is a contraindication above ~75 years due to conditioning toxicity, not HSC biology — donor HSC quality is not assessed at a functional per-cell level clinically.

### Gene therapy targeting HSCs

Ex vivo lentiviral or CRISPR modification of autologous HSCs (e.g., correction of hemoglobinopathies: sickle cell disease, β-thalassemia). Age-associated reduction in HSC mobilization yield with G-CSF is a practical problem for elderly donors/patients. #gap/long-term-unknown — long-term reconstitution safety in aged hosts is not well characterized.

### Targeting CHIP

- **IL-1β blockade** (canakinumab) — tested in the CANTOS trial for cardiovascular risk; showed reduced cardiovascular events and reduced lung cancer incidence. TET2-CHIP carriers may disproportionately benefit. #gap/needs-replication — CHIP-stratified subgroup analysis is post-hoc.
- **TET2 restoration** — preclinical only; re-expressing TET2 in TET2-mutant HSCs reduced atherosclerotic plaque burden in mice. #gap/needs-human-replication

### HSC rejuvenation strategies

- **Epigenetic reprogramming** — partial OSK(M) reprogramming of aged HSCs restores some youthful gene expression in vitro; in-vivo efficacy not established. #gap/needs-replication
- **Targeting the niche** — CXCL12 manipulation, anti-inflammatory niche conditioning. Preclinical.
- **Senolytics** ([[senolytics]]) — aged BM contains senescent stromal cells (not HSCs themselves, which rarely senesce given their quiescence) that may degrade the niche; clearing these could improve HSC function indirectly. #gap/no-mechanism

## Limitations and gaps

- `#gap/needs-human-replication` — Per-cell functional reconstitution data in aged humans is not obtainable; epidemiological studies (CHIP prevalence, lineage-skewing by flow) provide only correlative readouts.
- `#gap/needs-replication` — Many mouse-to-mouse heterochronic niche results require validation in independently-derived aged cohorts.
- `#gap/no-mechanism` — The molecular switch that determines whether an age-associated somatic mutation becomes CHIP vs. remains neutral is not understood; VAF thresholds used clinically (>2%) are arbitrary.
- `#gap/long-term-unknown` — CHIP natural history studies have median follow-up <10 years; the proportion of CHIP cases that eventually progress to MDS/AML over a lifetime is unknown.
- `#gap/unsourced` — Exact magnitude of per-cell reconstitution decline with age in inbred mouse strains needs strain-specific citation; current claim is directional only.

## See also

- [[stem-cell-exhaustion]] — hallmark page; HSCs are the canonical cellular substrate
- [[immunosenescence]] — functional downstream consequence of HSC myeloid bias
- [[anemia-of-aging]] — downstream consequence of reduced erythroid output
- [[fth1]] — ferritin heavy chain; conditional Fth1 knockout reported to compromise HSC survival/iron homeostasis (Yi 2024, abstract-level only) — links HSC maintenance to iron-detox capacity
- [[clonal-hematopoiesis]] — dedicated CHIP page (implicit stub)
- [[bone-marrow]] — niche tissue page (implicit stub)
- [[mus-musculus]] — primary model organism for HSC aging studies
- [[genomic-instability]] — hallmark page; DNA damage in HSCs
- [[epigenetic-alterations]] — hallmark page; methylation drift in HSCs
- [[chronic-inflammation]] — hallmark connected via CHIP macrophage phenotype
- [[senolytics]] — potential niche-targeting intervention

## Footnotes

[^sudo2000]: [[studies/sudo-2000-hsc-age-characteristics]] · n=6–11 mice per age group · in-vivo · model: C57BL/6 (B6-Ly5.1), age cohorts 2, 6, 12, 18 months · doi:10.1084/jem.192.9.1273
[^pang2011]: [[studies/pang-2011-human-hsc-myeloid-bias-age]] · n=13 young (20–35 y) + 11 elderly (65+ y) BM donors; 5 midaged (42–61 y) for gene expression · observational · model: human bone marrow · doi:10.1073/pnas.1116110108
