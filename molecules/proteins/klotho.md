---
type: protein
aliases: [KL, alpha-Klotho, αKlotho, klotho 1]
uniprot: Q9UEF7
ncbi-gene: 9365
hgnc: 6344
ensembl: ENSG00000133116
genage-id: 17
mouse-ortholog: Kl
key-isoforms: [membrane-Klotho, secreted-Klotho]
key-domains: [KL1-glycohydrolase, KL2-glycohydrolase, transmembrane, signal-peptide]
pathways: ["[[insulin-igf1]]", "[[fgf-signaling]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 3
caused-by: []
causes: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Arking 2002, Dubal 2014, Saar-Kovrov 2021 verified against primary source PDFs; Kurosu 2005 lifespan figures (±30%/±18%) unverified — PDF not downloadable (green OA via PMC but archive fetch failed; retry recommended); Kuro-o 1997, Arking 2005, Liu 2007 unverifiable (closed-access); GenAge ID 17 confirmed via HAGR web; Open Targets druggability tier confirmed via API (tier 3 — antibody/biologic tractability predicted, no clinical drug); canonical-database identity fields (UniProt Q9UEF7, NCBI Gene 9365, HGNC 6344) not independently re-verified against databases"
---

> Verified 2026-05-05 (claude). Arking 2002, Dubal 2014, and Saar-Kovrov 2021 checked against primary source PDFs; GenAge ID 17 and Open Targets druggability confirmed via live APIs. Kurosu 2005 lifespan percentages remain unverified (PDF fetch failed; see verified-scope). Kuro-o 1997, Arking 2005, Liu 2007 unverifiable (closed-access). Corrections applied: (1) Arking 2002 cohort corrected from "525 Ashkenazi Jewish" to the actual three-population study (Bohemian Czech + Baltimore Caucasian + Baltimore African-American); (2) the claimed "+3-year life expectancy" figure removed — the paper reports no such absolute number; (3) Dubal 2014 age range corrected from 53–86 to 52–85; (4) druggability-tier set to 3 based on Open Targets API response. Liu 2007 attribution as Wnt-antagonism paper confirmed correct.

# Klotho (KL)

Klotho is among the strongest single-gene aging modifiers identified in a mammalian system. Its discovery via a hypomorphic mouse that ages prematurely at 3 weeks and dies by 8-9 weeks established it as a central longevity regulator; subsequent overexpression experiments showed 20-30% lifespan extension. In humans, a compound haplotype (KL-VS) shows heterozygote-advantage association with longevity, cognitive function, and cardiovascular risk. Klotho intersects the [[insulin-igf1|IIS]] axis and the FGF23-phosphate homeostasis axis, making it one of the few proteins that directly bridges nutrient sensing and mineral metabolism in the context of aging.

## Identity

- **UniProt:** Q9UEF7 (KLOT_HUMAN) — Swiss-Prot reviewed entry
- **NCBI Gene ID:** 9365
- **HGNC:** 6344 (symbol: KL)
- **Ensembl:** ENSG00000133116
- **GenAge-human:** Entry 17
- **Mouse ortholog:** Kl (one-to-one; highly conserved across the protein-coding region)
- **Canonical length:** 1,012 amino acids
- **Molecular weight:** ~116 kDa (unprocessed); runs at ~130 kDa on SDS-PAGE due to heavy N-glycosylation (seven predicted N-linked glycosylation sites)

**Naming note:** "Klotho" refers to alpha-Klotho (this page; gene: KL). Beta-Klotho (gene: KLB; liver-enriched; co-receptor for FGF21) is a distinct protein. Gamma-Klotho (LCTL) is structurally related but functionally divergent. All three belong to the family-1 glycosyl hydrolase superfamily by sequence but lack catalytic activity. This page covers alpha-Klotho exclusively.

## Domain architecture

| Domain | Residues (approx.) | Function |
|---|---|---|
| Signal peptide | 1-34 | ER targeting; cleaved |
| KL1 domain | 57-506 | Glycosyl hydrolase fold (catalytically inactive); binds FGFR1c ectodomain |
| KL2 domain | 515-953 | Second glycosyl hydrolase fold; contributes to FGF23 binding |
| Transmembrane | 953-973 | Single-pass type I anchor; site of ectodomain shedding |
| Short cytoplasmic tail | 974-1012 | No known signaling function |

The KL1 and KL2 domains are paralogous repeats derived from bacterial beta-glucosidases. Despite the fold, multiple active-site residues essential for glycosidase catalysis are substituted in Klotho, and glycosidase activity is absent or minimal under physiological conditions.

## Isoforms and processing

**Membrane Klotho (mKlotho):** The full-length 1,012-aa protein is expressed predominantly at the apical surface of kidney proximal tubule cells. Membrane Klotho forms a ternary complex with FGFR1c (and at lower affinity, FGFR3c and FGFR4) and FGF23, acting as an obligate co-receptor that dramatically increases the affinity of FGFR1c for FGF23. Without Klotho, physiological FGF23 concentrations do not activate FGFR1c efficiently.

**Secreted/soluble Klotho (sKlotho):** The Klotho ectodomain (approximately the KL1+KL2 tandem, ~65-70 kDa) is constitutively shed from the cell surface by ADAM10 and ADAM17 metalloprotease sheddases [^saar-kovrov2021]. A second cleavage step (possibly by furin or BACE1) can release KL1 and KL2 as separate fragments. Soluble Klotho circulates in serum and is present in urine and CSF. In serum, sKlotho concentrations range approximately 300-800 pg/mL in healthy young adults and decline with age and in CKD. sKlotho lacks a FGF23-scaffolding function but retains the ability to modulate ion channels, inhibit IGF-1 receptor signaling, and act as a Wnt antagonist (see below).

**Alternative spliced secreted isoform:** A shorter, alternatively spliced isoform encoding only part of KL1 and lacking the transmembrane domain is produced in a subset of tissues; its physiological significance is debated. #gap/needs-replication

## Tissue expression

Klotho mRNA and protein are highly restricted:

- **Kidney** (distal convoluted tubule and collecting duct) — dominant expression site; >10x higher than any other tissue
- **Choroid plexus** — the main source of Klotho in CSF; relevant to neuroprotective functions
- **Parathyroid gland** — regulates PTH secretion in response to phosphate/FGF23
- **Placenta, prostate, small intestine** — lower-level expression
- **Brain** (neurons, particularly hippocampus and cerebellum) — disputed; some studies find low mRNA, others find immunoreactive protein

Critically absent from: liver (where beta-Klotho is expressed), muscle, heart.

## Discovery: the klotho hypomorph

Kuro-o et al. 1997 identified the Klotho gene by positional cloning of a recessive mutation causing premature aging phenotypes in mice [^kuroo1997]. A CTGF gene-trap insertion 5' of exon 1 caused hypomorphic expression (~20% of normal). Affected mice appeared grossly normal at birth but by 3 weeks developed:

- Skin atrophy and subcutaneous fat loss
- Vascular calcification and arteriosclerosis
- Osteoporosis
- Pulmonary emphysema
- Hyperphosphatemia and elevated 1,25-dihydroxyvitamin D
- Hypogonadism and infertility
- Growth retardation (low IGF-1 levels)
- Cognitive impairment
- Premature death at 8-9 weeks (~61-day median lifespan often cited in secondary literature; #gap/no-fulltext-access — Kuro-o 1997 PDF is closed-access and the precise 61-day median figure cannot be verified against the primary source)

The constellation resembled accelerated human aging including features of chronic kidney disease (hyperphosphatemia), cardiovascular aging, and osteoporosis. The phenotype was fully penetrant and reproduced across multiple independently-derived alleles.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FGF23-Klotho-FGFR1c axis functionally identical; KL gene loss causes HFTC3 (hyperphosphatemic familial tumoral calcinosis) in humans |
| Phenotype conserved in humans? | yes — CKD patients with loss of kidney Klotho expression develop vascular calcification, hyperphosphatemia, and accelerated cardiovascular aging |
| Replicated in humans? | yes — loss-of-function phenotype replicated; gain-of-function (overexpression) not testable in humans |

## Klotho-FGF23 axis: phosphate homeostasis

The primary endocrine function of membrane Klotho is co-receptor activity for **FGF23** — a bone-derived phosphaturic hormone. The core circuit:

1. Elevated phosphate intake → osteoblasts/osteocytes secrete [[fgf23|FGF23]]
2. FGF23 + mKlotho → activate FGFR1c in kidney → suppress NaPi-IIa/IIc sodium-phosphate cotransporters → phosphaturia
3. FGF23 + mKlotho → suppress CYP27B1 (1-alpha-hydroxylase) → reduce 1,25-dihydroxyvitamin D synthesis → reduce intestinal phosphate absorption
4. FGF23 + mKlotho → suppress PTH → reduce phosphate reabsorption

Disruption of this axis in either direction produces disease: Klotho deficiency mimics elevated FGF23 resistance and produces hyperphosphatemia; FGF23 excess (tumor-induced osteomalacia, X-linked hypophosphatemia) produces severe phosphate wasting. In aging, kidney Klotho expression declines substantially, blunting FGF23 signaling and contributing to the phosphate dyshomeostasis seen in CKD and in normal aging.

## Lifespan extension by Klotho overexpression

Kurosu et al. 2005 created transgenic mice overexpressing Klotho under the EF-1alpha ubiquitous promoter and found significant lifespan extension in both sexes [^kurosu2005]:

- Per-line breakdown (verified against Kurosu 2005 PMC2536606 by [[interventions/gene-therapy/aav-klotho]] verifier 2026-05-06 R26c):
  - **EFmKL46 line, male:** +20.0% median lifespan
  - **EFmKL48 line, male:** +30.8% median lifespan
  - **EFmKL46 line, female:** +18.8%
  - **EFmKL48 line, female:** +19.0%
- Range: ~19–31% across lines and sexes; the often-quoted "~30%" headline figure refers specifically to EFmKL48 males.

Mechanistically, Kurosu et al. found that secreted Klotho inhibits insulin and IGF-1 receptor signaling — specifically, sKlotho inhibits ligand binding or receptor-level activation at the cell surface, without entering the cell. This shifts FOXO transcription factors toward the nucleus, reducing oxidative stress and upregulating stress-response gene programs. The overexpressors showed enhanced resistance to oxidative stress and no cancer-rate differences sufficient to explain the lifespan effect. Circulating Klotho in transgenic plasma was elevated **~2× over WT** (the often-cited "2–4×" range was an over-extrapolation per aav-klotho verifier 2026-05-06; paper specifies ~2×). **Note:** an earlier draft of this page also attributed suppressed p53/p21 expression to Kurosu 2005; that claim has no basis in the source and was removed during R26c propagation 2026-05-06.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IGF-1R signaling and FOXO pathway are conserved |
| Phenotype conserved in humans? | partial — KL-VS heterozygotes show longevity association (see below), suggesting gain-of-function direction is relevant |
| Replicated in humans? | no — gene therapy / transgenic OE not testable; KL-VS is a partial functional proxy |

#gap/needs-human-replication — Direct experimental lifespan extension evidence is mouse-only.

## Mechanism: inhibition of IGF-1/insulin signaling

sKlotho inhibits IIS by engaging the ectodomain of IGF-1R and INSR at the cell surface, reducing receptor phosphorylation without requiring intracellular access [^kurosu2005]. Downstream consequences in cell-culture and transgenic mouse models:

- Reduced AKT/PKB phosphorylation
- FOXO1/3 nuclear retention (transcription of MnSOD, catalase, GADD45)
- Reduced mTORC1 activity (indirectly, via reduced AKT)
- Enhanced autophagy flux #gap/needs-replication — autophagy link is indirect; primary evidence in mouse kidney tubules only

This positions Klotho as a naturally-circulating hormone that dampens the pro-aging IIS axis — with parallels to the IGF-1R heterozygous mouse (+26% lifespan), but via a secreted antagonist rather than a receptor hypomorph.

## Klotho as Wnt antagonist

Liu et al. 2007 found that Klotho functions as a secreted Wnt ligand antagonist [^liu2007]. In klotho-deficient mice, Wnt signaling is augmented in multiple tissues; supplementation with recombinant Klotho or Klotho peptides suppresses Wnt target genes. Excessive Wnt signaling in klotho-null tissues drives premature cellular senescence (via Wnt-induced p21 and p16 expression), linking Klotho deficiency to the [[cellular-senescence]] hallmark through a second mechanism distinct from IIS. #gap/needs-replication — Liu 2007 is a single study; independent replication of the Wnt-antagonism mechanism in vivo is limited.

## KL-VS centenarian variant: heterozygote advantage

Arking et al. 2002 identified the **KL-VS haplotype** — a compound variant carrying F352V (rs9536314) + C370S (rs9527025) in the KL1 domain — via a population-based association study across three independent cohorts: Bohemian Czechs (n=390 newborns + 415 elderly), Baltimore Caucasians (n=420 newborns + 723 elderly), and Baltimore African-Americans (n=226 newborns + 242 elderly) [^arking2002]. In the Bohemian Czech primary cohort, KL-VS heterozygotes showed a **1.43-fold (95% CI 1.02–2.01) increased survival rate to age 75** (P=0.036), and a positive effect on longevity (P<0.05 for individuals over age 80 on Kaplan–Meier analysis). No absolute year-of-life-expectancy figure was reported.

Arking et al. 2005 extended these findings to a separate cardiovascular phenotyping cohort (closed-access; n not independently verified) [^arking2005]:

- **KL-VS heterozygotes** (one copy): OR 1.57 for 5-year survival; lower blood pressure; higher HDL cholesterol; reduced stroke risk
- **KL-VS homozygotes** (two copies): INCREASED mortality and stroke risk vs non-carriers

This **heterozygote advantage / homozygote disadvantage** pattern is the key KL-VS finding. It parallels other evolutionary balancing-selection loci and may explain why KL-VS has not been selected to fixation.

Molecular basis: KL-VS alters KL1 domain folding, potentially increasing secretion of the KL1 fragment selectively. Whether F352V or C370S is the functionally relevant substitution is unresolved. #gap/no-mechanism

**Population caveat:** Arking 2002 used Bohemian Czech, Baltimore Caucasian, and Baltimore African-American cohorts. Arking 2005 (closed-access) used an additional cardiovascular phenotyping cohort whose exact composition was not independently verified. The heterozygote advantage was only statistically significant in the Czech cohort, not in the two Baltimore populations (where only the homozygote disadvantage replicated). Some subsequent GWAS have not replicated the KL-VS longevity association at genome-wide significance. #gap/contradictory-evidence

## Cognition: Klotho as a brain-protective factor

Dubal et al. 2014 showed that heterozygous KL-VS carrier status in humans positively associates with higher cognitive performance across multiple domains in adults aged 52–85 [^dubal2014]:

- Tested across three independent aging cohorts totaling 718 individuals (age 52–85, predominantly U.S. Caucasian, no dementia; MMSE ≥28 inclusion threshold); ~26% of individuals were KL-VS heterozygotes, ~3% homozygotes (excluded)
- KL-VS heterozygotes performed significantly better on a global composite cognitive Z-score in each cohort and in meta-analysis (Cohen's d = 0.34 across cohorts; p<0.05 to p<0.001 depending on cohort)
- Cognitive benefit was independent of age, sex, education, and APOE ε4 status; not detected by conventional GWAS (KL-VS advantage is heterozygote-specific and would be missed by additive-allele models)
- In parallel transgenic mouse experiments, systemic klotho elevation (KL overexpressor line 46, C57BL/6 background, EF-1α promoter) improved spatial learning in Morris water maze (p<0.01 log rank for survival; KL mice reached platform 2.5x faster in probe trial) and enhanced hippocampal LTP; effects were age-independent

The cognitive benefit appears to operate through a GluN2B subunit-dependent mechanism in hippocampal synapses, distinct from the IIS and Wnt mechanisms described above.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — synaptic GluN2B plasticity is conserved |
| Phenotype conserved in humans? | yes — KL-VS association is in a human cohort |
| Replicated in humans? | in-progress — initial human association needs independent replication; mechanistic replication in a second human cohort lacking |

## Transcriptomic-clock characterization of Klotho-KO progeria (2026)

Tyshkovskiy et al. 2026 generated new bulk RNA-seq (kidney + skeletal muscle) and snRNA-seq (kidney + brain) from `Klotho`-KO mice and applied multi-tissue transcriptomic mortality clocks (with `Klotho` itself excluded from the feature set to avoid circularity). Findings refine *how* Klotho loss ages the organism at the network level [^tyshkovskiy2026]:

- **Klotho-KO accelerates molecular age systemically**, with the strongest tAge acceleration in **energy-metabolism (respiration/mitochondrial-translation, cholesterol/mTOR) and NRF2-signalling modules** — *not* inflammatory modules, which were actually **down-regulated**. This positions the Klotho progeroid model as driving **metabolic, not inflammatory, molecular ageing**, mirroring the metabolic dysfunction of short-lived animals.
- `Cdkn1a`/[[p21]] was among the top genes driving the pro-ageing shift in **both kidney and muscle** — consistent with Klotho's role in preventing cellular senescence.
- snRNA-seq showed the acceleration is **cell-type-heterogeneous**: significant tAge acceleration in nearly all kidney cell types (except collecting-duct) and in brain neurons/astrocytes/oligodendrocytes, but microglia showed a *marginal decrease* in mortality tAge (consistent with the absent inflammatory activation).
- Note: this model (`Klotho−/−`, CLEA Japan) is reported to limit **maximum lifespan to ~4–5 months**, distinct from the original Kuro-o hypomorph (~8–9 weeks; see Discovery above) — different alleles/expression levels.

This is direct, clock-quantified evidence that a *lifespan-limiting* intervention and a *lifespan-extending* one (caloric restriction) act on **overlapping metabolic modules in opposite directions** — see [[transcriptomic-clock-tage]] and [[caloric-restriction]].

## Disease associations

**Chronic kidney disease (CKD):** Kidney Klotho expression declines progressively with CKD stage. Soluble serum Klotho falls in parallel, making sKlotho a candidate biomarker of kidney aging and CKD severity. Low sKlotho in CKD correlates with vascular stiffness, cardiovascular events, and mortality independent of GFR. Mechanism: loss of Klotho removes brake on FGF23 signaling → FGF23 rises to compensate → left ventricular hypertrophy (a direct FGF23 off-target cardiac effect) → increased cardiovascular mortality.

**Cardiovascular disease:** Klotho expression is reduced in atherosclerotic plaques and in aging vessel walls. sKlotho has direct anti-calcification, anti-oxidant, and anti-inflammatory effects on endothelial and smooth-muscle cells in vitro.

**Alzheimer's disease:** Klotho levels are reported lower in CSF and serum of AD patients in some studies; KL-VS genotype may modify AD risk. #gap/contradictory-evidence — effect sizes are inconsistent across cohorts.

**Hyperphosphatemic familial tumoral calcinosis type 3 (HFTC3):** Rare autosomal recessive loss-of-function mutations in KL cause severe ectopic calcification, the human homolog of the klotho mouse hyperphosphatemia phenotype. Validates the FGF23 co-receptor function in humans.

## Therapeutic angles

**sKlotho as biomarker:** Serum sKlotho can be measured by ELISA. Levels decline with age (~50% between ages 25 and 75 in cross-sectional studies) and with kidney disease. Standardization of assays across labs remains a barrier to clinical deployment. #gap/dose-response-unclear

**Recombinant sKlotho:** Preclinical studies in rodent CKD and aging models show renoprotective and cardioprotective effects of injected or infused recombinant sKlotho. No human trials have yet progressed to phase 2 with a longevity endpoint. #gap/needs-human-replication

**Gene therapy:** Stoyek et al. and other groups have used AAV-mediated Klotho overexpression in aged mouse hearts and kidneys with protective effects. Human gene therapy is not in active clinical trials for aging indications as of 2026.

**Small-molecule Klotho inducers:** Several compounds (ACE inhibitors, some PPAR agonists, vitamin D analogs) upregulate renal Klotho expression in mice and in limited human data from CKD cohorts. None is approved with a Klotho-induction indication. **Druggability tier 3** (Open Targets Platform, ENSG00000133116, verified 2026-05-05): no approved drug, no clinical-stage small molecule or protein degrader; antibody/biologic tractability predicted based on UniProt confirmed high-confidence surface/secreted localization and signal peptide (all clinical-stage SM/AB/PR flags = false; surface accessibility flags = true). No #gap/no-opentargets-entry — target entry confirmed.

## Pathway membership

- [[insulin-igf1]] — sKlotho inhibits IGF-1R/INSR; modulates downstream AKT-FOXO axis
- [[fgf-signaling]] — mKlotho is obligate co-receptor for FGF23-FGFR1c; also modulates FGFR1c/4 responses to FGF19/21 indirectly via beta-Klotho competition #stub
- [[vascular-calcification]] — Klotho directly inhibits VSMC osteogenic transdifferentiation (FGF23-independent mechanism via TRPC channels + Wnt antagonism); declining Klotho with age is a primary driver of age-related medial calcification
- [[deregulated-nutrient-sensing]] — Klotho decline with age blunts the brake on IIS and dysregulates phosphate-mineral sensing
- [[chronic-inflammation]] — Klotho suppresses NF-kB activation; low Klotho correlates with elevated IL-6, TNF-alpha in CKD; Wnt-driven senescence is pro-inflammatory

## Key interactors

- [[fgf23|FGF23]] — primary co-receptor binding partner; obligate for FGF23 activity at FGFR1c
- [[adam10|ADAM10]] / [[adam17|ADAM17]] — ectodomain sheddases producing sKlotho #stub
- [[igf1r|IGF-1R]] — inhibited by sKlotho at receptor ectodomain level
- [[foxo3|FOXO3]] — downstream effector of Klotho-mediated IIS suppression

## Limitations and gaps

- **Human experimental evidence:** All gain-of-function lifespan evidence is in [[mus-musculus]]. KL-VS genotype effects in [[homo-sapiens]] are observational and so far primarily from U.S. (Baltimore) and Central European (Bohemian Czech) cohorts; broader population generalization requires replication. #gap/needs-human-replication
- **KL-VS mechanism:** The molecular basis for why F352V + C370S heterozygosity is beneficial but homozygosity is detrimental is unresolved. #gap/no-mechanism
- **Cognitive replication:** The Dubal 2014 cognitive association needs independent replication in a non-overlapping cohort. #gap/needs-replication
- **sKlotho assay standardization:** Commercial ELISA kits differ substantially in measured concentrations; quantitative comparisons across studies are unreliable. #gap/dose-response-unclear
- **Druggability tier:** Confirmed tier 3 (Open Targets API, 2026-05-05): predicted biologic-tractable target (surface/secreted localization confirmed); no approved drug or clinical-stage molecule targeting KL directly.
- **Brain expression:** Debate over whether neurons express meaningful Klotho; determines whether cognitive effects are central or systemic (peripheral sKlotho → brain). #gap/contradictory-evidence
- **Wnt antagonism mechanism:** Liu 2007 finding (Klotho as secreted Wnt antagonist) needs independent replication. #gap/needs-replication
- **Aging atlas data:** Tissue-specific Klotho expression with age in humans not extracted from GTEx or Aging Atlas. Recommended for next wiki pass.

## Footnotes

[^kuroo1997]: [[studies/kuroo-1997-klotho-aging-syndrome]] · doi:10.1038/36285 · n=not specified (colony-level survival curve) · in-vivo · model: klotho hypomorphic mice (CTGF gene-trap on mixed background) · 3,766 citations (Crossref) · not locally available (closed-access)

[^kurosu2005]: [[studies/kurosu-2005-klotho-suppression-aging]] · doi:10.1126/science.1112766 · in-vivo · model: Klotho transgenic overexpressor mice (EF-1alpha promoter; **C3H background, 4× backcross** — verified via PMC2536606 by aav-klotho verifier R26c 2026-05-06; previous footnote incorrectly stated "C57BL/6 per Dubal 2014 methods" — Dubal 2014's COGNITIVE-arm experiments used C57BL/6 back-crosses but Kurosu 2005's lifespan experiments themselves were on C3H) · per-line lifespan: EFmKL46 male +20.0%, EFmKL48 male +30.8%, EFmKL46 female +18.8%, EFmKL48 female +19.0% · circulating sKlotho ~2× WT (NOT 2–4×) · 1,892 citations (Crossref) · OA: PMC2536606 (verified end-to-end by aav-klotho verifier 2026-05-06)

[^arking2002]: [[studies/arking-2002-klotho-human-aging]] · doi:10.1073/pnas.022484299 · n=2,242 across 3 populations (Bohemian Czech: 805; Baltimore Caucasian: 1,143; Baltimore African-American: 468; newborns + elderly) · observational · model: Homo sapiens · 480 citations (Crossref) · bronze OA · PDF verified 2026-05-05

[^arking2005]: [[studies/arking-2005-klotho-klvs-cardiovascular]] · doi:10.1161/01.RES.0000157171.04054.30 · n=525 (Ashkenazi Jewish cohort) · observational · model: Homo sapiens · 277 citations (Crossref) · closed-access · not locally available

[^dubal2014]: [[studies/dubal-2014-klotho-cognition]] · doi:10.1016/j.celrep.2014.03.076 · n=718 human (3 cohorts, age 52–85, no dementia) + KL transgenic mouse experiments · observational (human) + in-vivo (mouse) · p<0.05–0.001 for KL-VS cognitive benefit; Cohen's d=0.34 across cohorts · model: Homo sapiens + C57BL/6 KL overexpressor · 311 citations (Crossref) · gold OA · PDF verified 2026-05-05

[^liu2007]: [[studies/liu-2007-klotho-wnt-signaling-aging]] · doi:10.1126/science.1143578 · n=not specified · in-vivo · model: klotho-deficient mice · 742 citations (Crossref) · closed-access · not locally available

[^saar-kovrov2021]: [[studies/saar-kovrov-2021-klotho-shedding-ckd]] · doi:10.3389/fcvm.2020.617842 · review (mini-review) · model: review of Klotho shedding mechanisms + CKD + vascular biology literature · 42 citations (Crossref) · gold OA · PDF verified 2026-05-05

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · *Nature* 2026 · n=6 Klotho-KO + 6 controls per tissue (bulk RNA-seq) + paired snRNA-seq (1 KO + 1 control) · mixed-effects / module-specific elastic-net mortality clocks; ANOVA, P_adj<0.05 · model: C57BL/6J Klotho-KO kidney, skeletal muscle, brain · KO accelerates metabolic/NRF2-module tAge (not inflammatory); Cdkn1a top driver in kidney + muscle; max lifespan ~4–5 months
