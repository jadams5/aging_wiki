---
type: protein
aliases: [COMT, catechol-O-methyltransferase, catechol O-methyltransferase]
uniprot: P21964
ncbi-gene: 1312
hgnc: 2228
ensembl: ENSG00000093010
genage-id: null
mouse-ortholog: Comt   # UniProt O88587 (Swiss-Prot reviewed); one-to-one ortholog
pathways:
  - "[[catecholamine-metabolism]]"
  - "[[dopamine-signaling]]"
hallmarks:
  - "[[epigenetic-alterations]]"
  - "[[altered-intercellular-communication]]"
druggability-tier: 1
mr-causal-evidence: partial
gtex-aging-correlation: null
caused-by: []
causes: []
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Priority claims verified against primary sources: Egan 2001 (PMC34453 full text — WCST 4% variance, P=0.001, n=175/219/55, fMRI n=11–16/group all confirmed); Mier 2010 (full text — overall d=0.73 pooled estimate confirmed; footnote corrected to clarify d=0.73 is overall, not executive-subgroup-specific); Metti 2017 (PMC5603384 full text — n=2,202, gait-slowing values 0.22/0.23/0.20 sec/visit, P=0.005 all confirmed); canonical DB IDs verified against live UniProt P21964 flat file (HGNC:2228, GeneID:1312, ENSG00000093010, EC 2.1.1.6 all confirmed); hgnc field corrected from HGNC:2228 to bare numeric 2228 per wiki convention; mouse ortholog O88587 confirmed Swiss-Prot reviewed; Lachman 1996 is closed-access — thermolability claim not independently PDF-verified (consistent with Mier 2010 intro citing same 3–4-fold figure); catechol-estrogen/breast-cancer framing, druggability-tier:1, and mr-causal-evidence:partial not independently verified against separate primary sources beyond in-text cross-checks"
---

# COMT (catechol-O-methyltransferase)

COMT is a S-adenosyl-L-methionine (SAM)-dependent methyltransferase that inactivates catecholamine neurotransmitters (dopamine, norepinephrine, epinephrine) and catechol estrogens (2-OH/4-OH-estradiol) via O-methylation. Its single most-studied functional variant — **Val158Met (rs4680)** — causes a ~3–4-fold difference in enzyme activity between homozygotes, creating one of the best-characterized pharmacogenetic axes in neuroscience, with downstream consequences for prefrontal dopamine tone, executive function, cognitive-aging trajectories, and estrogen-related cancer biology.

## Identity

- **UniProt:** P21964 (COMT_HUMAN)
- **NCBI Gene:** 1312
- **HGNC:** HGNC:2228
- **Ensembl:** ENSG00000093010
- **Gene symbol:** COMT
- **Mouse ortholog:** Comt (UniProt O88587, Swiss-Prot reviewed; one-to-one ortholog)
- **GenAge:** not in GenAge human aging-gene catalog (confirmed absent 2026-06-14)
- **EC number:** 2.1.1.6

## Protein structure and isoforms

COMT is encoded by a single gene on chromosome 22q11.21 and produces two functionally distinct protein isoforms from a single mRNA via alternative translation initiation:

| Isoform | Name | Location | Dominant expression |
|---|---|---|---|
| Isoform 1 (canonical) | MB-COMT (membrane-bound) | Single-pass type II membrane protein; intracellular N-term, extracellular C-term | Brain (neurons, astrocytes); adrenal medulla |
| Isoform 2 | S-COMT (soluble) | Cytoplasm | Liver, erythrocytes, kidney; most peripheral tissues |

MB-COMT is the dominant form in the brain and is the isoform most relevant to synaptic dopamine regulation in the prefrontal cortex. S-COMT dominates peripheral catecholamine clearance and hepatic estrogen metabolism.

The enzyme requires:
- **SAM** (S-adenosyl-L-methionine) as methyl donor
- **Mg²⁺** as cofactor (divalent-cation-dependent activity)

## Catalytic function

COMT catalyzes O-methylation of catechol substrates:

```
Catechol substrate + SAM  →  O-methylated product + SAH
                      (Mg²⁺)
```

**Primary substrates and their O-methylated products:**

| Substrate | Product | Clinical relevance |
|---|---|---|
| Dopamine | 3-Methoxytyramine (3-MT) | Plasma 3-MT as dopamine turnover marker |
| Norepinephrine (NE) | Normetanephrine | Plasma normetanephrine — pheochromocytoma diagnostic |
| Epinephrine (Epi) | Metanephrine | Plasma metanephrine — pheochromocytoma diagnostic |
| L-DOPA | 3-O-methyldopa | L-DOPA inactivation (clinically targeted by entacapone) |
| 2-OH-estradiol | 2-Methoxy-estradiol (2-ME2) | Non-genotoxic; anti-proliferative properties |
| 4-OH-estradiol | 4-Methoxy-estradiol | Detoxification of genotoxic catechol estrogen |

COMT works in parallel with **monoamine oxidases A and B (MAO-A/B)** for catecholamine inactivation. In the **prefrontal cortex** specifically, COMT is the *dominant* route of dopamine clearance because the PFC lacks high-density dopamine transporter (DAT) expression; DAT-mediated reuptake is the primary route elsewhere in the striatum. This anatomical asymmetry is why the Val158Met polymorphism disproportionately affects prefrontal dopamine tone relative to striatal dopamine [^egan2001].

For the catecholamine degradation pathway in full, see [[molecules/metabolites/catecholamines]].

## The Val158Met (rs4680) functional polymorphism

The most-studied coding variant in COMT is a **G→A transition at codon 158 of MB-COMT (codon 108 of S-COMT)**, causing a **valine-to-methionine substitution at amino acid 158** (rs4680). This was first characterized as a functional variant by Lachman et al. [^lachman1996].

**Biochemical effects:**

| Genotype | Allele frequency (European) | Enzyme activity | Thermal stability |
|---|---|---|---|
| Val/Val | ~25% | High | Thermostable |
| Val/Met | ~50% | Intermediate | Intermediate |
| Met/Met | ~25% | Low (~3–4× lower than Val/Val) | Thermolabile |

The Met allele produces a thermolabile enzyme with 3–4-fold lower activity at physiological temperature [^lachman1996]. Because COMT is the primary dopamine-clearing enzyme in the PFC, the Met/Met genotype results in higher baseline synaptic dopamine in the prefrontal cortex.

**Note on nomenclature:** The polymorphism is located at position 158 of the full-length MB-COMT protein, but at position 108 of the shorter S-COMT isoform (which has a shorter N-terminus). It is therefore referred to in the literature as Val108/158Met or equivalently Val158Met (MB-COMT numbering is the more common convention).

## Role in cognitive aging

### The "worrier/warrior" hypothesis

The differential prefrontal dopamine tone created by Val158Met has been framed as a behavioral trade-off: the "**worrier**" phenotype (Met/Met; higher PFC dopamine) shows advantages in baseline executive function but greater stress reactivity; the "**warrior**" phenotype (Val/Val; lower PFC dopamine) shows advantages in stress-related performance at the cost of baseline PFC efficiency [^egan2001]. This framing — while heuristically useful — is a simplification of bidirectional, dose-dependent (inverted-U) dopamine effects on PFC function.

### Executive function and working memory: neuroimaging evidence

Egan et al. [^egan2001] demonstrated:
- Met allele load predicted better performance on the Wisconsin Card Sorting Test (WCST), accounting for **4% of variance** in perseverative errors (P=0.001)
- fMRI during an N-back working memory task showed Met carriers had a **more efficient prefrontal physiological response** (lower BOLD activation per unit of cognitive load) — a signature of efficient neural processing
- These effects were seen across patients with schizophrenia, unaffected siblings, and healthy controls

A neuroimaging meta-analysis of 20 studies (2001–2008) found an **overall pooled effect size of d=0.73** (95% CI=0.33–1.14, P<0.001) for COMT genotype on prefrontal activation [^mier2010]. Subgroup analyses showed **opposing directional effects**: the executive cognition subgroup yielded d=0.92 (favoring Met allele carriers — reduced PFC activation reflecting greater neural efficiency), while the emotional processing subgroup yielded d=−1.0 (favoring Val allele carriers). The key point for aging: prefrontal executive function is among the most age-sensitive cognitive domains, and the Val158Met axis is one of the few replicated genetic modifiers of this domain.

### Longitudinal evidence across the adult lifespan

More recent work has moved from cross-sectional to longitudinal designs:

- **Miranda et al. 2025** [^miranda2025] followed 235 adults (age 20–94; n=124 returned at 4 years) and found that greater mesocortical thinning interacted with dopaminergic genetic predisposition (including COMT Val158Met) to predict poorer executive function (category switching) — specifically in parietal and posterior cingulate cortex. This longitudinal evidence places COMT within a broader dopaminergic genetic predisposition → brain structural aging → executive function decline axis.

- **Gustavsson et al. 2022** [^gustavsson2022] (n=208; ages 20–79; ~2.75-year follow-up) showed Val/Val homozygotes had greater iron accumulation in striatum and dorsolateral PFC during aging, and that prefrontal iron accumulation correlated with working memory decline. Proposed mechanism: lower PFC dopamine in Val/Val → less dopaminergic neuroprotection → greater iron-mediated oxidative stress → faster PFC deterioration.

- **Li et al. 2022** [^li2022] (adults ages 25–80) showed Val/Val carriers had lower white-matter fractional anisotropy in internal capsule, corona radiata, and posterior thalamic radiation vs. Met carriers — a structural finding consistent with reduced WM integrity as a mediator of age-related cognitive decline.

- **Metti et al. 2017** [^metti2017] (n=2,202; mean age 73.5; 10-year follow-up) found a U-shaped association between COMT genotype and gait-speed decline over 10 years: Val/Val and Met/Met carriers slowed more (0.22–0.23 sec/visit) than Val/Met heterozygotes (0.20 sec/visit; P=0.005). This points to dopaminergic regulation of motor-cognitive integration and PFC contributions to gait control in older adults.

### Hedging the cognitive-aging evidence

**Caution is warranted in applying the Val158Met→cognition axis specifically to aging outcomes:**

1. The Egan 2001 effect (4% of WCST variance) is real but modest. Most cognitive variance in aging is explained by education, cardiovascular risk factors, and other non-genetic factors.
2. The "worrier/warrior" framing is a simplification — studies in stress paradigms frequently show the reverse (Val carriers outperform under acute stress).
3. The Val158Met effect on dopamine may be partially buffered in older adults by declining striatal DAT density and broader dopaminergic system deterioration. Whether the PFC-specific advantage of Met/Met persists or narrows with advancing age is not firmly established.
4. Recent large meta-analyses have found small or null COMT effects in some psychiatric and cognitive domains [^goldbergcomt], emphasizing heterogeneity by task type and population.

#gap/contradictory-evidence — The direction and magnitude of Val158Met effects on executive aging are task-dependent, sex-dependent (see Hupfeld 2018 [^hupfeld2018] for greater effects in males), and population-dependent. No single comprehensive meta-analysis of COMT × age interactions on executive function exists.

## Catechol estrogen metabolism and sex-differential aging

Beyond catecholamine clearance, COMT is a key enzyme in the **catechol estrogen detoxification pathway** — a role directly relevant to the wiki's sex-differential aging coverage.

### The genotoxic catechol estrogen problem

Estradiol (E2) is hydroxylated by CYP1A1/CYP1B1 to catechol estrogens:
- **2-OH-estradiol (2-OHE2)** — the dominant metabolite; relatively non-genotoxic; rapidly O-methylated by COMT to 2-methoxy-estradiol (2-ME2), which has anti-angiogenic and anti-proliferative properties
- **4-OH-estradiol (4-OHE2)** — produced in smaller amounts by CYP1B1; **genotoxic**: undergoes redox cycling via semiquinone/quinone intermediates that form depurinating DNA adducts (4-OHE2-1-N3Ade, 4-OHE2-1-N7Gua), leading to point mutations

COMT methylates both species, but its relative efficiency for 4-OHE2 vs. 2-OHE2 determines the genotoxic catechol estrogen burden. Lavigne et al. (2001) [^lavigne2001] demonstrated directly that COMT inhibition in MCF-7 cells treated with estradiol increased oxidative DNA damage (8-oxo-dG), establishing the protective role of O-methylation against estrogen-induced genotoxicity.

### Val158Met and breast cancer risk

The low-activity Met/Met genotype has been proposed to reduce COMT-mediated detoxification of 4-OHE2, potentially increasing genotoxic estrogen burden. Ji et al. (2008) [^ji2008] identified COMT promoter variants (rs2020917, rs737865) associated with reduced breast cancer risk in premenopausal women. Saintot et al. (2003) [^saintot2003] showed COMT low-activity alleles may interact with CYP1B1 and SULT1A1 polymorphisms and tobacco exposure to modulate breast cancer risk.

**Key caveat:** The epidemiological evidence for Val158Met specifically as a breast cancer risk modifier is **inconsistent across studies** and meta-analyses have not confirmed a robust main effect. The COMT-catechol estrogen axis remains a biologically plausible mechanism rather than a confirmed epidemiological risk factor. #gap/contradictory-evidence

For the primary estradiol compound page and sex-differential aging context, see [[molecules/compounds/estradiol]].

## Pharmacology and clinical use: COMT inhibitors in Parkinson's disease

COMT inhibitors are an established pharmacological class in **Parkinson's disease (PD)** management, used as adjuncts to levodopa + dopa decarboxylase inhibitor (carbidopa) therapy. By blocking peripheral COMT-mediated O-methylation of L-DOPA to 3-O-methyldopa, they extend the plasma half-life and brain bioavailability of levodopa, reducing "wearing off" motor fluctuations.

| Drug | Class | Selectivity | Dosing | FDA status | Notes |
|---|---|---|---|---|---|
| Entacapone | Nitrocatechol | Peripheral | 200 mg with each L-DOPA dose (TID-QID) | FDA-approved (1999) | First-line adjunct; also available as Stalevo (entacapone+L-DOPA+carbidopa) |
| Opicapone | Nitrocatechol | Peripheral | 50 mg once daily | FDA-approved (2020) | Once-daily convenience; Phase 3 showed ~60 min/day OFF-time reduction vs placebo [^fabbri2018] |
| Tolcapone | Nitrocatechol | Peripheral + central | 100–200 mg TID | FDA-approved; black-box warning | Rare fulminant hepatotoxicity → restricted use; requires liver monitoring |

A historical review of entacapone's 40-year drug-development programme is provided by Männistö et al. (2024) [^mannisto2024].

COMT inhibitors used in PD treatment act **peripherally** (entacapone, opicapone) to extend L-DOPA availability and do not directly modulate synaptic dopamine in the PFC the way the Val158Met polymorphism does (which acts constitutively at the postsynaptic cell).

See [[phenotypes/parkinsons-disease]] for the full PD pharmacological management section, which lists COMT inhibitors in the dopamine-replacement table.

## Druggability-tier rationale

**Tier 1** — entacapone, opicapone, and tolcapone are all FDA-approved drugs that act by inhibiting COMT, with Parkinson's disease as an aging-relevant neurodegenerative indication. PD is unambiguously an age-related disease (incidence rises steeply after 60). This satisfies the aging-context tier-1 criterion: "a clinical drug exists for an aging indication that engages this entity." This differs from p53's tier-1 (which requires reference to indirect upstream pharmacology) — COMT inhibition is the direct mechanism of action of approved drugs in an aging-prevalent disease.

## MR-causal-evidence assessment

`mr-causal-evidence: partial`

Val158Met (rs4680) is one of the most-studied functional coding variants in human genetics. It is a strong *instrument* for prefrontal dopamine tone and COMT activity, but the causal inference picture is partial:

- **GWAS hits exist** for cognitive traits, schizophrenia, Parkinson's disease risk, and pain sensitivity that point to the COMT locus
- **Mendelian randomization studies** using Val158Met as an instrument have been performed for cognitive outcomes and psychiatric phenotypes, but the results are **heterogeneous** by domain and the instrument is relatively weak in genome-wide MR contexts (Val158Met explains only a fraction of variance in cognitive endpoints)
- **No published MR study** has definitively established COMT activity as causally upstream of a specific aging phenotype (e.g., PFC volume loss, gait speed decline) in a well-powered general-population cohort

#gap/needs-replication — Formal MR causal inference using Val158Met or COMT-region eQTLs as instruments for aging-relevant PFC cognitive outcomes has not been published as of the literature search date.

## Pathway membership and key interactors

COMT participates in:
- **Catecholamine catabolism** — parallel to MAO-A/B; see [[molecules/metabolites/catecholamines]] for the full degradation table
- **Catechol estrogen metabolism** — downstream of CYP1A1/CYP1B1; upstream of estrogen-quinone genotoxicity
- **L-DOPA pharmacokinetics** — peripheral O-methylation of L-DOPA to 3-OMD; the primary target for COMT inhibitor adjunct therapy

Key interactors:
- **MAO-A/B** — complementary catecholamine-clearance enzymes; COMT and MAO work in parallel; MAO dominates intraneuronal (mitochondrial outer membrane) catecholamine degradation while COMT dominates postsynaptic and perisynaptic degradation
- **CYP1B1** — upstream enzyme that generates 4-OH-estradiol substrate for COMT in estrogen metabolism
- **SULT1A1** (sulfotransferase) — alternative conjugation route for catechol estrogens; genetic variation in SULT1A1 may modulate the relative burden shifted to COMT

## Extrapolation table

| Dimension | Status | Notes |
|---|---|---|
| Enzyme function conserved in mammals? | Yes | Comt mouse ortholog (O88587) is one-to-one; COMT inhibitors used in PD translate from rat/mouse models |
| Val158Met functional effect conserved across populations? | Yes | rs4680 characterised across European, East Asian, and African-descent populations; allele frequencies vary; functional biochemistry (3–4× activity difference) replicated |
| Cognitive aging effects replicated in humans? | Partial | Multiple neuroimaging + longitudinal cohort studies; no large-scale pre-registered MR-based causal inference; effect sizes modest |
| Catechol estrogen genotoxicity replicated in humans? | Partial | Mechanistically plausible; epidemiological association with breast cancer risk inconsistent |

## Limitations and gaps

- #gap/contradictory-evidence — Meta-analyses of Val158Met × cognition show heterogeneity by task type (executive vs emotional paradigms have opposite Val/Met directionality); the net cognitive aging effect is not a simple "Met = better" story.
- #gap/needs-replication — No well-powered MR study has established COMT activity as a causal contributor to PFC-dependent cognitive aging trajectories in a general population.
- #gap/contradictory-evidence — Val158Met association with breast cancer risk is biologically plausible (catechol estrogen detoxification) but epidemiologically inconsistent across studies.
- #gap/needs-human-replication — The mechanistic link between Val158Met genotype, catechol estrogen burden, and DNA damage specifically (via 4-OHE2 depurinating adducts) has been demonstrated in cell lines [^lavigne2001] but not in prospective human tissue studies.
- #gap/needs-canonical-id — COMT does not currently appear in the GenAge human aging-gene catalog (confirmed absent; this absence itself may warrant a GenAge nomination if the cognitive-aging evidence matures).

## See also

- [[molecules/metabolites/catecholamines]] — full catecholamine class page; COMT listed as homeostasis protein; degradation table
- [[phenotypes/parkinsons-disease]] — primary disease indication for COMT inhibitors; COMT inhibitors listed in pharmacological management table
- [[molecules/compounds/estradiol]] — catechol estrogen precursor; sex-differential aging context
- [[hallmarks/epigenetic-alterations]] — SAM-dependent methylation links COMT to the one-carbon cycle and broader epigenetic regulation
- [[hallmarks/altered-intercellular-communication]] — catecholamine signaling axis
- [[pathways/dopamine-signaling]] — broader dopaminergic pathway context (stub; not yet seeded)
- [[pathways/catecholamine-metabolism]] — full catecholamine biosynthesis/degradation pathway (stub; not yet seeded)
- [[cell-types/neurons]] — primary brain cell type where MB-COMT is expressed
- [[phenotypes/neurodegeneration]] — parent phenotype category

---

## Footnotes

[^lachman1996]: doi:10.1097/00008571-199606000-00007 · PMID:8807664 · Lachman HM, Papolos DF, Saito T, et al. · "Human catechol-O-methyltransferase pharmacogenetics: description of a functional polymorphism and its potential application to neuropsychiatric disorders" · *Pharmacogenetics* 6(3):243–250 · 1996 · in-vitro genetic characterization · n=not specified (population survey) · First description of the G→A transition at codon 158 creating Val→Met substitution; established 3–4× enzyme activity variation between Val/Val and Met/Met homozygotes; associated with thermal instability of the Met enzyme

[^egan2001]: doi:10.1073/pnas.111134598 · PMID:11381111 · Egan MF, Goldberg TE, Kolachana BS, et al. · "Effect of COMT Val108/158Met genotype on frontal lobe function and risk for schizophrenia" · *Proc Natl Acad Sci USA* 98(12):6917–6922 · 2001 · cross-sectional + family-based association (104 trios) + fMRI subsample (n=11–16/group); cognitive testing n=175 patients + 219 siblings + 55 controls · Met allele load predicts 4% variance reduction in WCST perseverative errors (P=0.001); Met carriers show more efficient prefrontal fMRI response; Val allele overtransmitted to schizophrenic offspring · 1,971 citations (Crossref 2026)

[^mier2010]: doi:10.1038/mp.2009.36 · PMID:19417742 · Mier D, Kirsch P, Meyer-Lindenberg A · "Neural substrates of pleiotropic action of genetic variation in COMT: a meta-analysis" · *Mol Psychiatry* 15(9):918–927 · 2010 · neuroimaging meta-analysis · 20 studies (2001–2008); overall random-effects pooled estimate d=0.73 (Z=3.52, P<0.001, 95% CI=0.33–1.14) for COMT genotype effect on PFC activation; subgroup analysis shows opposing effects: cognitive processing subgroup d=0.92 (favoring Met allele carriers; reduced PFC activation = more efficient processing), emotional processing subgroup d=−1.0 (favoring Val allele carriers); no evidence of publication bias (Egger's test P=0.22)

[^miranda2025]: doi:10.1016/j.neurobiolaging.2024.11.005 · PMID:39613505 · Miranda GG, Gonen C, Kraft JN, Rodrigue KM, Kennedy KM · "Lifespan longitudinal changes in mesocortical thickness and executive function: Role of dopaminergic genetic predisposition" · *Neurobiol Aging* 146:58–73 · 2025 · longitudinal cohort · n=235 adults (age 20–94); n=124 at 4-year follow-up · COMT Val158Met × cortical thinning interaction predicts worse executive-function (category switching) in parietal and posterior cingulate cortex

[^gustavsson2022]: doi:10.3389/fnhum.2022.838228 · PMID:35571998 · Gustavsson J, Papenberg G, Falahati F, Laukka EJ, Kalpouzos G · "Contributions of the Catechol-O-Methyltransferase Val158Met Polymorphism to Changes in Brain Iron Across Adulthood and Their Relationships to Working Memory" · *Front Hum Neurosci* 16:838228 · 2022 · longitudinal lifespan (structural equation modelling) · n=208 (ages 20–79; ~2.75-year follow-up) · Val/Val carriers show greater iron accumulation in striatum + dlPFC during aging; PFC iron accumulation correlated with working memory decline

[^li2022]: doi:10.1523/ENEURO.0413-21.2022 · PMID:35346961 · Li X, Salami A, Avelar-Pereira B, Bäckman L, Persson J · "White-Matter Integrity and Working Memory: Links to Aging and Dopamine-Related Genes" · *eNeuro* 9(2):ENEURO.0413-21.2022 · 2022 · observational lifespan · adults ages 25–80 · Val/Val carriers had lower FA in internal capsule, corona radiata, and posterior thalamic radiation vs Met carriers; WM integrity mediated age-related working memory differences

[^metti2017]: doi:10.1111/jgs.14980 · PMID:28640434 · Metti AL, Rosano C, Boudreau R, et al. · "Catechol-O-Methyltransferase Genotype and Gait Speed Changes over 10 Years in Older Adults" · *J Am Geriatr Soc* 65(9):2016–2022 · 2017 · prospective longitudinal cohort · n=2,202 (mean age 73.5 ± 2.85); 10-year follow-up · U-shaped genotype effect on gait slowing: Val/Val and Met/Met slow more (0.22–0.23 sec/visit) than Val/Met (0.20 sec/visit; P=0.005); race-stratified effects noted

[^hupfeld2018]: doi:10.1016/j.neurobiolaging.2018.02.005 · PMID:29525179 · Hupfeld KE, Vaillancourt DE, Seidler RD · "Genetic markers of dopaminergic transmission predict performance for older males but not females" · *Neurobiol Aging* 66:180.e11–180.e21 · 2018 · observational · n=4,605–7,331 older adults (Health and Retirement Study) · COMT genotypes associated with reduced dopamine metabolism → poorer balance and memory; sex difference: effect stronger in males; effects magnified with advancing age (esp. age 85+)

[^lavigne2001]: PMID:11606384 · Lavigne JA, Goodman JE, Fonong T, Odwin S, He P, Roberts DW, Yager JD · "The effects of catechol-O-methyltransferase inhibition on estrogen metabolite and oxidative DNA damage levels in estradiol-treated MCF-7 cells" · *Cancer Res* 61(20):7488–7494 · 2001 · in-vitro (MCF-7 human breast cancer cells) · COMT inhibition → increased 8-oxo-dG (oxidative DNA damage); O-methylation of 2-OH-E2 by COMT is protective against oxidative DNA damage; establishes causal protective role of COMT in catechol estrogen detoxification · no DOI assigned in PubMed XML (pre-DOI era); PMID confirmed

[^ji2008]: doi:10.1158/0008-5472.can-08-0043 · PMID:18632656 · Ji Y, Olson J, Zhang J, et al. · "Breast cancer risk reduction and membrane-bound catechol O-methyltransferase genetic polymorphisms" · *Cancer Res* 68(14):5997–6005 · 2008 · case-control · MB-COMT promoter SNPs (rs2020917, rs737865) associated with reduced breast cancer risk in premenopausal women; effect attributed to altered catechol estrogen inactivation

[^saintot2003]: doi:10.1002/ijc.11432 · PMID:14520706 · Saintot M, Malaveille C, Hautefeuille A, Gerber M · "Interactions between genetic polymorphism of cytochrome P450-1B1, sulfotransferase 1A1, catechol-o-methyltransferase and tobacco exposure in breast cancer risk" · *Int J Cancer* 107(4):652–657 · 2003 · case-control (Southern France) · COMT low-activity variants + CYP1B1 + SULT1A1 + tobacco → multiplicative breast cancer risk elevation; genotoxic 4-OH-estradiol proposed as shared mediator

[^fabbri2018]: doi:10.1002/mds.27475 · PMID:30264443 · Fabbri M, Ferreira JJ, Lees A, et al. · "Opicapone for the treatment of Parkinson's disease: A review of a new licensed medicine" · *Mov Disord* 33(10):1528–1539 · 2018 · systematic review + Phase 3 RCT data synthesis · opicapone Phase 3 (BIPARK-I and BIPARK-II): ~60 min/day OFF-time reduction vs placebo; European Commission approval 2016; FDA approval 2020; once-daily COMT inhibitor with favorable safety vs tolcapone (no hepatotoxicity)

[^goldbergcomt]: doi:10.1016/j.biopsych.2008.07.032 · PMID:18838132 · Goldman D, Weinberger DR, Malhotra AK, Goldberg TE · "The role of COMT Val158Met in cognition" · *Biol Psychiatry* 65(1):e1–e4 · 2009 · commentary/meta-perspective · cautions against overinterpreting effect sizes; notes heterogeneity across paradigms and populations; emphasizes opposing effects (executive vs emotional) as the key complexity

[^mannisto2024]: doi:10.1007/s40120-024-00629-2 · PMID:38809484 · Männistö PT, Keränen T, Reinikainen KJ, et al. · "The Catechol O-Methyltransferase Inhibitor Entacapone in the Treatment of Parkinson's Disease: Personal Reflections on a First-in-Class Drug Development Programme 40 Years On" · *Neurol Ther* 13(4):1039–1054 · 2024 · historical review · traces entacapone from 1980s discovery through Phase 3 trials and clinical adoption; establishes entacapone as first-in-class COMT inhibitor for PD adjunct therapy; documents Stalevo (levodopa+carbidopa+entacapone) combination product history
