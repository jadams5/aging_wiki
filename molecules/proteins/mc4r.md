---
type: protein
aliases: [melanocortin 4 receptor, MC4-R, melanocortin receptor 4]
uniprot: P32245
ncbi-gene: 4160
hgnc: 6932
ensembl: ENSG00000166603
genage-id: null
is-noncoding-rna: false
pathways: ["[[melanocortin-system]]", "[[pomc-processing]]", "[[camp-signaling]]", "[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: "MC4R expression is CNS-enriched (hypothalamus, PVN, cortex, brainstem); GTEx v2 tissue-level aging correlation not computed — hypothalamic samples are rare in GTEx due to collection difficulty. Age-associated declines in MC4R-relevant upstream POMC neuron activity are better characterised in mouse than human GTEx. #gap/needs-tissue-expression-data"
mr-causal-evidence: partial
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "UniProt P32245 canonical IDs confirmed via REST API. Farooqi 2003 (NEJM) and Lotta 2019 (Cell) claims verified against full PDFs. Collet 2017 (Mol Metab) verified against full PDF. Baldini 2019 (J Endocrinol) verified against full PDF. Haqq 2022 (Lancet DE) n and primary endpoint verified via PMC9847480 full text (local PDF download failed). Clément 2020 (Lancet DE) not verifiable — closed-access (not_oa per a local paper archive); banner note added on those claims. FDA approval dates confirmed via openFDA API (NDA213793)."
---

# MC4R (melanocortin 4 receptor)

MC4R is a class-A G-protein-coupled receptor (GPCR) expressed primarily in the paraventricular nucleus (PVN) of the hypothalamus, where it serves as the canonical effector of the central [[melanocortin-system|leptin-melanocortin]] pathway for energy homeostasis. Loss-of-function mutations in MC4R are the most common monogenic cause of severe human obesity (~1–5% of cases); gain-of-function variants protect against obesity, type 2 diabetes, and coronary artery disease. Setmelanotide (Imcivree, FDA-approved 2020) is an MC4R agonist approved for monogenic MC4R-pathway-deficiency obesity. In the aging context, MC4R is most relevant to the [[deregulated-nutrient-sensing]] hallmark through its role in appetite regulation and energy expenditure, and to the emerging literature on anorexia of aging and cachexia.

## Identity

- **UniProt:** P32245 (MC4R_HUMAN)
- **NCBI Gene:** 4160
- **HGNC:** 6932 (symbol: MC4R)
- **Ensembl:** ENSG00000166603
- **Genomic location:** Chromosome 18q21.32 (single exon; no introns — uncommon for GPCRs)
- **Length:** 332 amino acids; molecular weight ~36.9 kDa
- **Mouse ortholog:** Mc4r (one-to-one; high sequence conservation)

## Structure and biochemistry

MC4R is a 7-transmembrane GPCR (rhodopsin family, class A). Key structural features:

- **Seven transmembrane helices** — characteristic of all melanocortin receptors (MC1R–MC5R)
- **N-linked glycosylation** — three sites in the N-terminal extracellular domain; required for proper trafficking to cell surface
- **S-palmitoylation** — Cys-318 (C-terminal tail); anchors the tail to the inner leaflet, influencing receptor trafficking and G-protein coupling
- **Disulfide bonds** — multiple intra- and (reported) inter-subunit; the receptor can form homodimers though the functional significance is unclear
- **No introns** — single exon gene, unusual among GPCRs; makes frameshift mutations particularly impactful (truncating the entire receptor)

### Signaling

MC4R is primarily coupled to **Gαs**: agonist binding raises intracellular cAMP via adenylyl cyclase activation, driving PKA-mediated phosphorylation cascades that suppress appetite and increase energy expenditure [^baldini2019].

A secondary β-arrestin–mediated arm has been described and is therapeutically important. Lotta et al. 2019 found that naturally occurring human MC4R gain-of-function variants with **β-arrestin signaling bias** (but not cAMP bias alone) confer protection against obesity, T2D, and CAD — suggesting the β-arrestin pathway is the metabolically productive one [^lotta2019]. This finding has implications for next-generation agonist design.

**Inverse agonist / constitutive activity:** MC4R has significant constitutive (ligand-independent) Gαs activity. AgRP (Agouti-related peptide) acts as an inverse agonist — suppressing basal cAMP below constitutive levels — rather than a simple competitive antagonist. This constitutional activity means that even partial loss-of-function from heterozygous mutations reduces total signaling capacity meaningfully.

## Ligands

| Ligand | Type | Source |
|---|---|---|
| α-MSH (ACTH 1-13) | Endogenous agonist (high affinity) | [[alpha-msh]] — POMC cleavage product, arcuate POMC neurons |
| β-MSH | Endogenous agonist | POMC cleavage product |
| γ-MSH | Weaker agonist (MC3R-preferring) | POMC cleavage |
| ACTH (1-39) | Agonist | Pituitary corticotropes |
| AgRP | Inverse agonist | Arcuate AgRP/NPY neurons |
| Setmelanotide | Synthetic agonist (FDA-approved) | [[setmelanotide]] (stub) |
| [[melanotan-ii\|Melanotan II]] | Synthetic pan-MC agonist (unapproved) | Non-selective; also MC1R/MC3R/MC5R |

## Expression and tissue distribution

- **Primary:** PVN hypothalamus — the central satiety node. MC4R-expressing PVN neurons project to brainstem autonomic centers and regulate both food intake and sympathetic outflow to brown adipose tissue.
- **Other CNS:** Cortex, hippocampus, amygdala, brainstem dorsal vagal complex. Distribution explains non-metabolic effects (MC4R agonism raises heart rate / blood pressure — a key clinical liability of setmelanotide).
- **Peripheral (minor):** Gut enteroendocrine cells, adipocytes (low expression). Peripheral expression is orders of magnitude lower than hypothalamic; physiological significance is debated.

## Function

MC4R is the primary integrator of long-range energy-status signals in the CNS:

1. **Appetite suppression** — α-MSH from arcuate POMC neurons activates PVN MC4R → cAMP → reduces orexigenic neuropeptide release → decreased food intake.
2. **Energy expenditure** — MC4R signaling increases sympathetic outflow to brown adipose tissue, raising thermogenesis and resting metabolic rate. Mc4r-null mice are obese but also cold-intolerant.
3. **Glucose homeostasis** — independent of adiposity, MC4R mutations worsen insulin sensitivity; part of the reason why MC4R loss-of-function produces hyperinsulinemia disproportionate to fat mass.
4. **Cardiovascular tone** — MC4R agonism raises heart rate and blood pressure via sympathetic activation. This is an on-target liability of agonist therapy, not an off-target side effect.

## MC4R and monogenic obesity

Loss-of-function (LoF) MC4R mutations are the **most common cause of monogenic severe obesity** in humans [^farooqi2003]:

- Prevalence in severely obese cohorts: ~5.8% in pediatric severe obesity (Farooqi et al. 2003, n=500); 1–5% in adult severe-obesity cohorts depending on cutoffs.
- Inheritance: **codominant** — heterozygous carriers have intermediate BMI elevation; homozygous/compound-heterozygous individuals have severe childhood-onset obesity, hyperphagia, and hyperinsulinemia. This contrasts with most Mendelian obesity genes where only homozygotes are affected.
- Phenotype: hyperphagia (increased meal size), increased linear growth (hyperinsulinemic), normal fasting leptin per fat mass, no adrenal insufficiency (distinguishes from POMC deficiency).
- Over 200 unique LoF variants identified; frameshift, nonsense, and missense mutations that impair surface trafficking, Gs coupling, or ligand binding all produce the phenotype.
- #gap/needs-replication — population prevalence estimates vary substantially by diagnostic criteria and cohort ascertainment strategy; the 5.8% figure from Farooqi 2003 may overestimate community prevalence.

**Gain-of-function variants:** Lotta et al. 2019 (n=~452,300 UK Biobank participants; n=~0.5 million including additional replication cohorts) identified naturally occurring GoF MC4R variants (n=9) that activate both Gαs and β-arrestin pathways [^lotta2019]. Carriers of β-arrestin-biased GoF alleles had lower BMI (β=−0.39 kg/m² per allele, p=2×10⁻⁴²), lower odds of obesity (OR 0.81 per allele), up to 50% lower risk of obesity (2-allele carriers), lower T2D risk (OR 0.88), and lower CAD risk (OR 0.94). The cardiometabolic protection was driven by variants with β-arrestin signaling bias — variants with cAMP bias alone (without β-arrestin bias) did not protect against T2D or CAD. β-arrestin recruitment explained 88% of the variance in BMI associations across MC4R variants (R²=0.88, p=3×10⁻⁵).

## Therapeutics

### Setmelanotide (Imcivree)

Setmelanotide is a cyclic heptapeptide MC4R agonist (ring structure analogous to [[melanotan-ii|Melanotan II]] but optimized for MC4R selectivity and β-arrestin engagement). FDA-approved November 25, 2020 (NDA213793 ORIG-1) for:

- POMC deficiency obesity
- PCSK1 deficiency obesity
- LEPR deficiency obesity

Expanded June 16, 2022 (SUPPL-1) to add:

- Bardet-Biedl syndrome obesity

**Phase 3 evidence:** In open-label trials of POMC/LEPR-deficient patients, setmelanotide achieved ≥10% bodyweight loss in 80% of POMC-deficient and ~45% of LEPR-deficient participants [^clement2020]. #gap/no-fulltext-access — these figures could not be independently verified against the primary PDF (closed-access paper). In a randomized placebo-controlled trial of Bardet-Biedl syndrome and Alström syndrome (n=38 enrolled: 32 BBS + 6 Alström), 32.3% (95% CI 16.7–51.4%; p=0.0006) of patients ≥12 years in the full analysis set achieved ≥10% bodyweight reduction after 52 weeks on setmelanotide vs 0% on placebo — all responders had BBS [^haqq2022].

**Safety:** Most common adverse effects are injection-site reactions, nausea, hyperpigmentation (on-target MC1R effect), and sexual adverse effects (spontaneous erection in males — same MC4R mechanism as [[melanotan-ii|Melanotan II]]'s best-known property). Clinically important: **blood pressure elevation** from sympathetic MC4R activation. BP monitoring is required.

**Early proof-of-concept:** Collet et al. 2017 demonstrated setmelanotide was ~10–500-fold more potent than α-MSH at rescuing signaling by mutant MC4Rs in cell-based assays, and conducted a randomized double-blind placebo-controlled Phase 1b trial (28 days; n=6 MC4R-heterozygous carriers on setmelanotide, n=2 placebo; plus n=41 obese controls) showing significant weight loss in the MC4R-deficient arm (mean −3.48 kg, p<0.0001 vs baseline) without BP or HR elevation [^collet2017].

**Other development programs:** Multiple MC4R agonists are in development for broader obesity indications (not just monogenic). As of 2026-05-09, 4 active/recruiting trials (ClinicalTrials.gov: NCT06760546, NCT06772597, NCT05774756, NCT05093634) evaluate setmelanotide in congenital hypothalamic obesity, Prader-Willi syndrome, and related conditions.

### Druggability-tier rationale

**Tier 1** — an FDA-approved drug (setmelanotide) targets MC4R directly and is used for a genetic obesity indication that centrally involves the same receptor. The aging-context tier-1 is appropriate: MC4R agonism is validated as a pharmacological modality in humans; whether it applies to aging-specific appetite decline (anorexia of aging) is an unanswered question that does not degrade the tier. No aging-indication approval exists.

## Aging context

### Anorexia of aging and cachexia

Age-associated involuntary weight loss — the "anorexia of aging" — is a major contributor to [[sarcopenia|sarcopenia]] and frailty. The melanocortin system may be involved:

- POMC neuron activity in the arcuate nucleus, and thus α-MSH release to PVN MC4R, may be tonically elevated or dysregulated in aged rodents — potentially contributing to reduced appetite-drive restoration after fasting. The mechanism is not established in humans. #gap/needs-human-replication #gap/unsourced
- Cancer cachexia and chronic-disease cachexia involve elevated melanocortin system tone; MC4R antagonists have been proposed as anti-cachexia agents, though none is FDA-approved.
- AgRP/NPY neurons — which oppose MC4R activation — appear to decline in function with age in some rodent models, potentially biasing the system toward greater MC4R activation and reduced orexigenic tone. #gap/needs-human-replication

### Hallmark linkage

MC4R links to the [[deregulated-nutrient-sensing]] hallmark as follows: the leptin-melanocortin axis is a canonical nutrient-sensing relay (leptin → arcuate POMC/AgRP → MC4R PVN → appetite + expenditure). Age-associated leptin resistance, reduced POMC neuron sensitivity, and potential MC4R signaling shifts all represent failures of nutrient-sensing regulation. MC4R does not directly intersect with mTORC1, AMPK, or sirtuins, but converges on [[insulin-igf1]] signaling through its effects on insulin sensitivity and hyperinsulinemia in LoF carriers.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — POMC/MC4R axis is highly conserved mammals |
| Phenotype (obesity, appetite) conserved? | yes — human LoF mutation phenotype mirrors Mc4r-null mice |
| Aging-specific changes replicated in humans? | no — primarily rodent data for age-MC4R dynamics |

### MR evidence

**Partial** — MC4R LoF variants are well-established GWAS hits for obesity and BMI. Mendelian randomization studies using MC4R locus instruments have been conducted for obesity-related endpoints (BMI, T2D, CAD). The Lotta 2019 study used a population-genetics approach with n~452,300 (UK Biobank) that is MR-adjacent (variant stratification by functional consequence), demonstrating causal protective effects of β-arrestin-biased GoF variants on metabolic disease [^lotta2019]. A formal two-sample MR for aging-specific outcomes (frailty, longevity, sarcopenia) has not been published as of 2026-05-09. `partial` reflects: GWAS instruments exist and have been deployed for metabolic-disease MR; aging-specific MR not yet attempted.

## Pathway membership

- [[melanocortin-system]] — the central leptin → POMC → α-MSH → MC4R → PVN → appetite/expenditure axis
- [[pomc-processing]] — upstream biosynthesis and processing of MC4R's primary endogenous ligand
- [[camp-signaling]] — primary downstream second-messenger cascade
- [[insulin-igf1]] — convergent metabolic regulation; MC4R mutations produce hyperinsulinemia and insulin resistance

## Key interactors

- [[alpha-msh]] — primary endogenous agonist; POMC-derived; released from arcuate POMC neurons
- **AgRP** — endogenous inverse agonist; released from arcuate AgRP/NPY neurons; competes with α-MSH at MC4R and suppresses constitutive activity
- **MRAP2** (Melanocortin Receptor Accessory Protein 2) — modulates MC4R surface expression and signaling; MRAP2 mutations cause obesity in mice and have been identified in human severe obesity cohorts #gap/unsourced

## Limitations and gaps

- **No MC4R wiki page for [[melanocortin-system]] pathway** — this pathway does not yet have an atomic page; linked as implicit stub.
- **[[setmelanotide]]** — no compound page yet; stub implied by link.
- **[[camp-signaling]]** — no pathway page; implicit stub.
- **Aging-specific data is almost entirely rodent** — the hypothesis that MC4R dysregulation contributes to anorexia of aging lacks human mechanistic validation. #gap/needs-human-replication
- **MRAP2 interaction** needs a primary citation before the interactor claim can be confirmed. #gap/unsourced
- **β-arrestin pathway selectivity** — whether setmelanotide vs next-generation β-arrestin-biased agonists differ in aging-relevant outcomes is unknown. #gap/no-mechanism
- **GTEx aging correlation** cannot be computed for hypothalamic MC4R due to tissue scarcity in GTEx. #gap/needs-tissue-expression-data
- **Formal aging-outcome MR** not yet published. #gap/needs-replication

## Footnotes

[^farooqi2003]: doi:10.1056/NEJMoa022050 · Farooqi IS et al. (Farooqi, Keogh, Yeo, Lank, Cheatham, O'Rahilly) · NEJM 2003 · n=500 probands with severe early-onset obesity (recruited from 750 subjects; first consecutive 500 unrelated probands) · observational + in-vitro functional assay · model: human pediatric severe obesity cohort (UK, GOOS study) · 29/500 (5.8%) had pathogenic MC4R mutations (23 heterozygous, 6 homozygous); codominant inheritance — heterozygotes 68% prevalence of early-onset obesity; homozygotes all severely obese; subjects with residual receptor signaling had less severe phenotype

[^lotta2019]: doi:10.1016/j.cell.2019.03.044 · Lotta LA et al. (Lotta, Mokrosinski, Farooqi) · Cell 2019 · n=~452,300 UK Biobank (BMI n=450,708); ~0.5 million including replication cohorts · population-genetics/functional-variant-stratification · model: human GWAS + HEK293 cell-based assays · 61 MC4R variants characterised; 9 GoF, 47 LoF · GoF variants with β-arrestin signaling bias: OR 0.81 obesity (p=3×10⁻³⁸), OR 0.88 T2D (p=4×10⁻⁶), OR 0.94 CAD (p=0.02); β-arrestin recruitment explained 88% of BMI-association variance · cAMP-biased GoF without β-arrestin bias did not protect against T2D/CAD

[^clement2020]: doi:10.1016/S2213-8587(20)30364-8 · Clément K et al. (Clément, Kühnen) · Lancet Diabetes Endocrinol 2020 · n=21 (POMC/LEPR-deficient) · open-label phase 3 · model: human monogenic obesity · ≥10% weight loss in 80% POMC-deficient and ~45% LEPR-deficient participants · NOT VERIFIED: closed-access (not_oa per a local paper archive); numerics sourced from secondary literature #gap/no-fulltext-access

[^haqq2022]: doi:10.1016/S2213-8587(22)00277-7 · Haqq AM et al. (Haqq, Argente) · Lancet Diabetes Endocrinol 2022 · n=38 enrolled (32 BBS + 6 Alström); double-blind, randomised, placebo-controlled phase 3 + open-label period · rct · 32.3% (95% CI 16.7–51.4%; p=0.0006) of patients ≥12 years achieved ≥10% bodyweight reduction after 52 weeks setmelanotide vs 0% placebo; all responders had BBS · verified via PMC9847480 (local PDF download failed)

[^collet2017]: doi:10.1016/j.molmet.2017.06.015 · Collet TH et al. (Collet, Farooqi, Van der Ploeg) · Mol Metab 2017 · randomised double-blind placebo-controlled phase 1b RCT (28 days) + in-vitro · n=6 MC4R-heterozygous on setmelanotide, n=2 placebo, n=41 obese controls · model: human MC4R-deficient patients + HEK293 cell-based assay · setmelanotide ~10–500× more potent than α-MSH at mutant MC4Rs; significant weight loss (−3.48 kg vs baseline, p<0.0001) and waist circumference reduction in MC4R-deficient arm; no BP/HR elevation

[^baldini2019]: doi:10.1530/JOE-18-0596 · Baldini G & Phelan KD · J Endocrinol 2019 · review · model: CNS melanocortin circuit · synthesises evidence on POMC/AgRP/MC4R neuron circuit, Gs-cAMP signaling mechanism, and therapeutic implications for genetic obesity
