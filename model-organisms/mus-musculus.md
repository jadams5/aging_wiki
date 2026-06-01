---
type: model-organism
species-name: Mus musculus
common-name: house mouse
typical-lifespan: "2–3 years (median 24–30 months in standard inbred strains; up to ~36 months in some long-lived strains or under caloric restriction)"
genome-similarity-to-human: "~80% one-to-one orthologs (MGSC 2002)"
lifespan-ratio-to-human: "~1:30 (2–3 yr vs 80 yr)"
key-strengths: [transgenics, lifespan-tractability, mammalian-physiology, multi-site-ITP-validated, inbred-strain-control, genetic-tools]
key-divergences: [telomere-biology, immune-aging, microbiome, drug-metabolism-CYP]
itp-validated: true
verified: true
verified-date: 2026-05-14
verified-by: claude
verified-scope: "Primary-source PDFs verified for the original 7 cited DOIs (Harrison 2009, Holzenberger 2003, Martin-Montalvo 2013, MGSC 2002, Prowse & Greider 1995, Strong 2016, Schaum et al. 2020) — read in full with corrections applied. 2026-05-14 first additions verified against full PDFs: Martin/Mattson 2010 (PNAS 'metabolically morbid' — Perspective article; Table 1 confirms obesity/hypertension/insulin resistance claims; framing accurate), Rosshart 2017 (Cell wildling microbiome — disease-resistance claims verified; 'immune competence' wording corrected to 'reduced immunopathological inflammation'; survival figures 92% vs ~17% confirmed from Fig. 5A), Runge 2025 (Nat Comms wildling phenotype — wildling-like phenotype framing confirmed; oral gavage TX system verified), Ivimey-Cook 2025 (Aging Cell vertebrate meta-analysis — 911 effect sizes / 167 papers / 8 vertebrate species; rapamycin + DR significant, metformin not; framing accurate with caveat that rapamycin effect is sensitive to publication-bias adjustment and measure choice). All four PDF-verified. 2026-05-14 second-pass additions now PDF-verified: Richter/Garner 2011 PLoS ONE (heterogenization-improves-reproducibility claim confirmed; F₁,₂₈=4.222 p=0.049; weak-effect caveat added to footnote; body claim directionally accurate); Swallow 1998 Behav Genet (75% increase / 10 generations quantitative claim confirmed verbatim from abstract; rpm-vs-minutes mechanism detail and realized heritability 0.19 added to footnote). All 13 cited DOIs now PDF-verified."
---


# *Mus musculus* — house mouse

The house mouse is the **dominant vertebrate model in aging biology**, combining a short lifespan (~2–3 years) with mammalian physiology, a rich toolkit of genetic and transgenic methods, and deep infrastructure including the **NIA Interventions Testing Program (ITP)** — the gold-standard multi-site replication protocol for longevity interventions in mice. Approximately 80% of mouse protein-coding genes have clear one-to-one human orthologs (1:1 orthologues with reciprocal best-match support) [^mgsc2002], making the mouse substantially more translatable than invertebrate models for most aging pathways.

## Identity and resources

| Field | Value |
|---|---|
| Species | *Mus musculus* (house mouse) |
| NCBI Taxonomy ID | 10090 |
| Genome assembly | GRCm39 (as of 2024) |
| Typical median lifespan | 24–30 months (inbred), up to ~36 months (CR or long-lived strains) |
| Lifespan ratio to human | ~1:30 |
| One-to-one orthologs with human | ~80% of protein-coding genes (reciprocal best-match 1:1) [^mgsc2002] |
| AnAge ID | see AnAge entry for *Mus musculus* |

[^mgsc2002]: doi:10.1038/nature01262 · Mouse Genome Sequencing Consortium · review · model: in-silico genomic analysis

## Strain landscape

**Strain background is the single largest source of irreproducibility in mouse aging research.** Common strains differ substantially in spontaneous disease prevalence, tumor spectrum, metabolic phenotypes, lifespan, and drug response. Findings in one strain should not be generalized to mice as a species without multi-strain replication.

| Strain | Median lifespan | Common uses | Notable aging features |
|---|---|---|---|
| C57BL/6J (B6) | ~26–28 months ♂, ~28–30 months ♀ | Default "workhorse"; most genetic studies | Prone to age-related obesity, hepatosteatosis, hearing loss; short telomeres vs. some other strains |
| 129/Sv | ~22–26 months | Immunology, ES cell work | Background for Holzenberger 2003 IGF1R+/− longevity study [^holzenberger2003] |
| BALB/cJ | ~24–28 months | Immunology | High incidence of hepatocellular tumors with age |
| FVB/NJ | ~20–24 months | Transgenics (prolific breeders) | Shorter lifespan; prone to mammary tumors |
| **UM-HET3** | ~25–28 months | **ITP standard stock** | 4-way genetically heterogeneous (CB6F1 × C3D2F1 cross); designed to minimize single-background artifacts [^harrison2009] |

**Key strain-specific corrections documented in this wiki:**
- Holzenberger 2003 IGF1R+/− lifespan effect was on **129/Sv background**, not C57BL/6; mean lifespan +26% combined (P<0.02), female-only result +33% (P<0.001); males +15.9% (NS) — see [[insulin-igf1]] page for details [^holzenberger2003].
- Martin-Montalvo 2013 metformin main result was in **C57BL/6**; a B6C3F1 replication cohort was non-significant — see [[metformin]] page [^martinmontalvo2013].

[^holzenberger2003]: doi:10.1038/nature01298 · Holzenberger M et al. · n=20 Igf1r+/− ♀ + 17 WT ♀; 12 Igf1r+/− ♂ + 16 WT ♂ (cohort 1) · in-vivo · p<0.02 combined, p<0.001 females · model: 129/Sv mice (Igf1r+/−); mean lifespan +26% combined, +33% ♀, +15.9% ♂ (NS)
[^martinmontalvo2013]: doi:10.1038/ncomms3192 · Martin-Montalvo A et al. · in-vivo · p=0.02 (Gehan-Breslow) · model: male C57BL/6 mice; 0.1% w/w metformin from ~6 months; B6C3F1 replication cohort NS (p=0.064)

## NIA Interventions Testing Program

The **NIA Interventions Testing Program (ITP)** is the most rigorous aging intervention protocol in mouse biology. Key design elements:
- **Multi-site replication**: all protocols run simultaneously at three independent NIA-funded sites (Jackson Laboratory, University of Michigan, UT Health San Antonio).
- **Genetically heterogeneous stock**: UM-HET3 mice (4-way F1 cross) reduce single-background artifacts.
- **Both sexes**: ITP tests males and females separately, revealing sex-specific effects.
- **Pre-specified interventions**: tested at multiple doses starting from a young age or (for late-life starts) after ~9–20 months.

Selected ITP-positive interventions:

| Intervention | Median lifespan extension | Sex specificity | Reference |
|---|---|---|---|
| Rapamycin (late-life start, 14 mg/kg food) | +9% ♂, +13% ♀ mean lifespan; +9% ♂, +14% ♀ at 90th percentile | Both | Harrison 2009 [^harrison2009] |
| Acarbose (started 16 mo, 1000 ppm) | +6% ♂ median; +2% ♀ median (NS) | Male-biased | Strong 2016 [^strong2016] |
| 17α-estradiol (14.4 ppm) | +19% ♂ median | Male only | Strong 2016 [^strong2016] |
| Canagliflozin | ~14% ♂ | Male-biased | ITP 2020 #gap/needs-replication |

Note: effect sizes above are approximate; verify against primary sources. #gap/needs-replication applies where only one ITP cohort has reported.

[^harrison2009]: doi:10.1038/nature08221 · Harrison DE et al. · n=~1,901 total (pooled 3 sites) · in-vivo · p<0.0001 (log-rank) · model: UM-HET3 genetically heterogeneous mice; rapamycin (14 mg/kg food) started at 600 days (~20 months)
[^strong2016]: doi:10.1111/acel.12496 · Strong R et al. · n=144 ♂ (17aE2), 147 ♂ (ACA) · in-vivo · log-rank p<0.001 (17aE2 ♂), p<0.000 (ACA ♂) · model: UM-HET3 mice; multi-site ITP; 17aE2 at 14.4 ppm; ACA at 1000 ppm started at 16 months

## Genome similarity and conserved aging pathways

Of protein-coding genes, ~80% have clear one-to-one human orthologs (reciprocal best-match criterion) [^mgsc2002]; ~99% have at least some human homologue. The following aging-relevant pathways are well-conserved (pathway components functionally orthologous):

- **[[mtor]] signaling** — mTOR kinase, RAPTOR, RICTOR, S6K1, 4EBP1, TSC1/2 all directly orthologous; rapamycin inhibits both mouse and human mTORC1 via identical FKBP12–rapamycin–FRB mechanism.
- **[[insulin-igf1]] / IIS pathway** — IGF1, IGF1R, IRS1, PI3K, AKT, FOXO all conserved; longevity effects of reduced IIS demonstrated in both mouse and worm, with partial human evidence (centenarian IGF1 studies).
- **[[ampk]] pathway** — AMPK α/β/γ subunits conserved; energy sensing mechanism orthologous.
- **[[autophagy]]** — ATG gene family broadly conserved; autophagic flux decline with age observed in both species.
- **[[sirtuin]] pathway** — SIRT1–7 all have human orthologs; NAD+-dependent deacetylase function conserved.
- **[[p53-pathway]] and senescence biology** — TP53, p21, p16/CDKN2A, RB conserved; [[cellular-senescence]] accumulation with age documented in mouse and human.
- **[[dna-damage-response]]** — ATM, ATR, BRCA1/2, PARP1 conserved; DSB repair capacity declines with age in both.
- **[[nf-kb]] inflammatory signaling** — NF-κB p65/p50 conserved; inflammaging phenotype observed in both.

## Known divergences from human

These are the systems where mouse-to-human extrapolation is most fraught. See [[_extrapolation-guide]] for the full rubric.

### 1. Telomere biology

Laboratory mouse strains (especially C57BL/6) have **telomeres 5–10× longer** than human telomeres, and **telomerase activity is maintained in most (but not all) somatic tissues** — detected in liver, kidney, spleen, and testis but absent from brain [^prowsegreider1995]. In humans, telomerase is repressed in most somatic cells after development, causing progressive telomere attrition with age — a major driver of replicative senescence.

Consequence: standard mouse strains are **poor models for telomere-driven aging**. Telomere shortening is not a primary aging mechanism in standard B6 mice. Wild-derived strains (CAST/Ei) and telomerase-knockout (*Tert−/−*) mice have been developed specifically to model human-like telomere dynamics. See [[telomere-attrition]] for detail.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (components conserved; regulation diverges) |
| Phenotype conserved in humans? | no (in standard lab strains) |
| Replicated in humans? | yes (telomere attrition confirmed as human aging feature) |

[^prowsegreider1995]: doi:10.1073/pnas.92.11.4818 · Prowse KR, Greider CW · in-vivo · model: M. spretus, M. musculus (BALB/c, C57BL/6) multiple tissues; telomerase detected in liver, kidney, spleen, testis; absent from brain; human somatic tissues lack detectable telomerase by TRAP assay

### 2. Immune system aging (immunosenescence)

Mouse and human immune systems differ in several ways relevant to aging:
- **Th1/Th2 balance**: mice are more Th2-skewed than humans in some contexts; cytokine profiles differ.
- **NK cell receptors**: mouse Ly49 vs human KIR receptor families — analogous function, non-homologous genes.
- **Neutrophil lifespan**: shorter in mice (~6–8 h) vs humans (~5–7 days); relevant to inflammatory burden modeling.
- **CD8 T cell exhaustion kinetics** in aging differ between strains and vs humans.
- **SASP composition**: the specific cytokines and chemokines comprising the [[sasp|Senescence-Associated Secretory Phenotype]] differ between mouse and human senescent cells; mouse SASP factor lists should be cross-checked against human cell data. #gap/needs-human-replication

See [[immunosenescence]] for the broader context.

### 3. Microbiome composition

Mouse gut microbiome differs substantially from humans in dominant phyla and metabolic capacity. This matters for:
- Drug bioavailability (urolithin A, for instance, is microbiome-produced; conversion efficiency differs).
- [[chronic-inflammation]] baseline (facility-specific housing effects on mouse microbiome can alter inflammatory phenotype and lifespan in ways that don't map to human exposures).
- Interpretation of dietary intervention results (CR, fasting) where microbiome is a confounding variable. #gap/unsourced

### 4. Drug metabolism (CYP differences)

Mouse and human CYP450 enzyme repertoires differ in substrate specificity:
- Mouse CYP3A isoforms differ from human CYP3A4; compounds metabolized to active form in mice may not convert equivalently in humans.
- Relevant for pharmacological aging interventions: a compound's mouse dose–response does not necessarily translate to human dose.
- Documented for senolytic D+Q and fisetin: effective mouse doses are mg/kg orders of magnitude higher than typical human supplement doses; human PK translation is non-trivial. See [[fisetin]], [[dasatinib]], [[quercetin]].

## Lab-mouse confounds (design artifacts vs species biology)

Distinct from species-level biological divergences (telomere biology, CYP enzymes, immune-system architecture — covered above), the **husbandry conditions of standard SPF laboratory mice** introduce a separate class of confounds that systematically inflate intervention effect sizes relative to what either wild mice or humans would experience. Treat these as *experimental-design artifacts*, not as fixed properties of *Mus musculus* as a species.

Standard lab mice (single inbred strain, SPF housing, ad libitum chow, sedentary cage, sub-thermoneutral room temperature, low pathogen exposure) are **not metabolically healthy controls**. Martin, Ji, Maudsley & Mattson (2010) [^martin2010] argued that ad libitum-fed, sedentary laboratory rodents — the standard control population in nearly all interventional aging studies — exhibit obesity, glucose intolerance, hypertension, and accelerated cardiovascular pathology relative to their wild conspecifics or to caloric-restricted controls. Many "longevity-extending" interventions reported in such mice may be partially correcting the husbandry-induced morbidity rather than engaging a fundamental aging mechanism. This shifts the question from "does this intervention extend lifespan in mice?" to "how much of the mouse signal reflects rescue from a maladaptive baseline?"

Empirical support for this concern comes from comparisons of SPF lab mice with **wildling mice** — laboratory C57BL/6 engrafted with wild-mouse microbiota. Rosshart et al. (2017) [^rosshart2017] showed that wild-derived microbiota improved disease resistance and reduced immunopathological inflammation in lab-strain mice (92% survival from lethal influenza A challenge vs ~17% for SPF controls; reduced colitis-associated tumorigenesis); the mechanism is better-calibrated innate immune signalling rather than generically enhanced immune competence. Runge et al. (2025) [^runge2025] characterized the wildling phenotype more comprehensively using a scalable oral-gavage transplantation system, finding that natural-microbiota engraftment recapitulates wild-mouse immune and physiological features including CD8 T-cell subset maturation, gut transcriptome, and systemic cytokine profiles. Implication: any intervention validated only in SPF lab mice may be testing on a microbiome-immune phenotype that no human (or wild mouse) shares.

| Confound | Effect on baseline | Implication for translation |
|---|---|---|
| **Ad libitum feeding** | Mild-to-moderate obesity, insulin resistance, hepatic steatosis [^martin2010] | Interventions that improve metabolic health may over-perform in lab mice; effects shrink in calorie-controlled humans |
| **Single inbred strain** | No within-cohort genetic variance | Single-strain results frequently fail to replicate in UM-HET3 ITP cross-strain validation (canonical case: metformin). Richter, Garner et al. 2011 multi-lab study found that **population heterogenization** (randomly mixing multiple strains within a study) actually *improves* cross-laboratory reproducibility relative to single-strain protocols [^richter2011] — counter to the standard hypothesis that genetic standardization aids reproducibility |
| **SPF housing** | Microbiome impoverished; immune system naive | Anti-inflammatory and microbiome-mediated interventions may over-perform; wildling phenotype work suggests substantial effects on immune aging [^rosshart2017] [^runge2025] |
| **Sedentary cage** | Skeletal muscle and cardiovascular phenotype deconditioned | Exercise-mimetic interventions may over-perform; voluntary-wheel-running mice show altered drug response. Garland's high-runner selection lines (Swallow, Carter & Garland 1998 [^swallow1998]) are the canonical model demonstrating that voluntary-exercise capacity is strongly heritable in mice and that selecting for it produces physiologically distinct animals — implying that cage-confined sedentary mice are not the only "normal" baseline |
| **Sub-thermoneutral temperature** (standard 22°C vs mouse thermoneutral ~30°C) | Chronic mild cold stress; elevated metabolic rate; altered brown adipose tissue activity | Metabolic interventions may engage thermogenic adaptation specific to sub-thermoneutral housing; ambient temperature is rarely controlled across labs |

**Wild-derived strains** (CAST/Ei, WSB/EiJ, PWK/PhJ — the Collaborative Cross founders, plus the four-way Diversity Outbred stock) are the methodological corrective for the strain-and-husbandry artifact but remain under-used in interventional aging studies relative to their value. ITP's UM-HET3 stock is a four-way F1 cross designed to reduce single-background artifacts but does not address the SPF/ad libitum/sedentary confounds.

These design artifacts are part of why standard mouse interventional results systematically over-predict human benefit. See [[hypotheses/translation-failure-of-aging-interventions]] for the broader synthesis frame.

[^martin2010]: doi:10.1073/pnas.0912955107 · Martin B, Ji S, Maudsley S, Mattson MP · *PNAS* 2010;107(14):6127-6133 · perspective/review · "'Control' laboratory rodents are metabolically morbid: why it matters" · PMID 20194732 · canonical articulation of the lab-rodent baseline-morbidity confound; Table 1 documents elevated body weight (600–700 g standard vs 350–500 g CR), blood pressure (110–130 vs 80–90 mmHg), plasma insulin, LDL, and pro-inflammatory cytokines (TNFα, IL-6) in standard-housed vs CR Sprague–Dawley rats
[^rosshart2017]: doi:10.1016/j.cell.2017.09.016 · Rosshart SP, Vassallo BG, Angeletti D et al. · *Cell* 2017;171(5):1015-1028.e13 · in-vivo · model: GF C57BL/6 reconstituted with wild *Mus musculus domesticus* microbiota (WildR mice) · "Wild Mouse Gut Microbiota Promotes Host Fitness and Improves Disease Resistance" · PMID 29056339 · 92% WildR vs ~17% Lab/LabR survival from lethal influenza A (PR8) challenge (p<0.0001 log-rank; Fig. 5A); mechanism is limited immunopathological inflammation (reduced pro-inflammatory cytokines), not broadly enhanced immune competence; also reduced AOM/DSS colorectal tumorigenesis
[^runge2025]: doi:10.1038/s41467-025-60554-2 · Runge S, von Zedtwitz S, Maucher AM, Bruno P et al. · *Nature Communications* 2025;16:5301 · in-vivo · model: C57BL/6 lab mice engrafted via single oral gavage of wildling fecal material (TXwildlings) · "Laboratory mice engrafted with natural gut microbiota possess a wildling-like phenotype" · PMID 40506454 · TXwildlings adopt wildling-like microbiome by day 28; colon transcriptome differs by only 2 genes vs wildlings (vs 1,422 genes vs lab mice); CD8 T-cell subset maturation, gut cytokine profile, and systemic immune traits recapitulate wildling phenotype; scalable TX system suitable for standard SPF facilities
[^richter2011]: doi:10.1371/journal.pone.0016461 · Richter SH, Garner JP, Zipser B, Lewejohann L, Sachser N, Touma C, Schindler B, Chourbaji S, Brandwein C, Gass P, van Stipdonk N, van der Harst J, Spruijt B, Võikar V, Wolfer DP, Würbel H · *PLoS ONE* 2011;6(1):e16461 · multi-lab in-vivo study · n=384 female mice (C57BL/6NCrl + DBA/2NCrl, n=32/strain/lab) · 6 independent labs · PMID 21305027 · "Effect of population heterogenization on the reproducibility of mouse behavior: a multi-laboratory study" · counterintuitive finding: heterogenized (multi-strain) cohorts show significantly lower between-lab variance than standardized single-strain cohorts across 29 behavioral measures (strain-by-lab F-ratio: F₁,₂₈=4.222, p=0.049); mechanistically, heterogenization shifts variation from between-experiment to within-experiment; caveat: effect was weak — between-laboratory variation substantially exceeded within-laboratory variation in both designs, and authors conclude more powerful heterogenization strategies are needed
[^swallow1998]: doi:10.1023/a:1021479331779 · Swallow JG, Carter PA, Garland T Jr · *Behavior Genetics* 1998;28(3):227-237 · selection-experiment in-vivo · PMID 9670598 · "Artificial selection for increased wheel-running behavior in house mice" · founding paper of the Garland high-runner (HR) mouse selection lines; 4 selected lines + 4 control lines; after 10 generations, HR lines ran 75% more revolutions per day than control lines (increase driven mainly by higher rpm rather than more minutes/day); realized heritability averaged 0.19 (range 0.12–0.24 across selected lines); the HR lines have since become a major model system for understanding the physiology and genetics of voluntary activity in mice

## Strengths as an aging model

1. **Mammalian physiology**: organ-level aging phenotypes (sarcopenia, neurodegeneration, cardiovascular aging, metabolic syndrome) are directly analogous. See [[sarcopenia]], [[mitochondrial-dysfunction]].
2. **Lifespan tractability**: 2–3 year lifespan allows complete lifespan studies within a single research program; not feasible in primates.
3. **Genetic tractability**: CRISPR/Cas9, Cre-lox conditional knockouts, inducible transgenics, congenic strain construction — richer toolkit than any other mammal.
4. **Multi-site ITP validation**: the NIA ITP provides the highest standard of evidence for longevity interventions available in any model organism — three-site replication with genetically heterogeneous stock and pre-specified analysis.
5. **Single-cell and organ-level atlases**: Schaum et al. 2020 [^tabulamuris2020] provides bulk RNA-seq of 17 organs across the mouse lifespan plus integration with the companion Tabula Muris Senis scRNA-seq atlas (529,823 cells from 20 organs), enabling hypothesis generation at single-cell resolution. Note: doi:10.1038/s41586-020-2499-y is the organ-temporal-signatures paper; the primary TMS scRNA atlas is doi:10.1038/s41586-020-2496-1.
6. **Historical depth**: decades of inbred strain characterization, established disease models (e.g., *ob/ob* for metabolic syndrome), well-characterized aging phenotypes in JAX aging colonies.

[^tabulamuris2020]: doi:10.1038/s41586-020-2499-y · Schaum N et al. (Tabula Muris Consortium companion paper) · bulk RNA-seq of 17 organs at 10 ages, C57BL/6JN males (n=4/age); scRNA-seq of 529,823 cells reported in the companion TMS atlas (doi:10.1038/s41586-020-2496-1) · in-vivo · model: C57BL/6JN mice aged 1–27 months

## Failure modes — cases where mouse misled aging research

These are documented instances where mouse results did not translate to humans and should be kept in mind when interpreting any single-organism finding.

### Caloric restriction effect size

CR extends median lifespan ~30–40% in standard inbred mice. The largest controlled human CR trial (CALERIE, 2-year, 25% CR) found no lifespan extension and only modest healthspan biomarker effects. The *magnitude* of benefit appears poorly conserved, even if the underlying mechanisms (mTOR inhibition, AMPK activation, autophagy induction) are conserved. #gap/needs-human-replication

A 2025 vertebrate meta-analysis (Ivimey-Cook, Sultanova & Maklakov, *Aging Cell*) [^ivimeycook2025] tested cross-species translation of three CR-mimetic interventions directly: **rapamycin** and **dietary restriction** mirror each other and extend lifespan across vertebrates; **metformin does not** show consistent lifespan extension across species. This is the first formal cross-vertebrate meta-analysis to separate translation-resilient from translation-fragile geroscience interventions and is one of the clearest empirical anchors for the translation-failure pattern. See [[hypotheses/translation-failure-of-aging-interventions]].

[^ivimeycook2025]: doi:10.1111/acel.70131 · Ivimey-Cook ER, Sultanova Z, Maklakov AA · *Aging Cell* 2025;24:e70131 · meta-analysis · "Rapamycin, Not Metformin, Mirrors Dietary Restriction-Driven Lifespan Extension in Vertebrates: A Meta-Analysis" · PMID 40532901 · 911 effect sizes from 167 papers across 8 vertebrate species; DR and rapamycin both significantly extend lifespan (p<0.001); metformin effect overlaps zero in most models (p=0.069–0.088); DR and rapamycin did not significantly differ from each other; note: rapamycin effect is sensitive to publication-bias adjustment and choice of mean vs median lifespan — adjusted log-response means significant but unadjusted means may not be; high heterogeneity (I²=96.5%) across all treatments

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (mTOR, AMPK, autophagy all respond to CR in humans) |
| Phenotype conserved in humans? | partial (healthspan markers improve; lifespan extension undemonstrated) |
| Replicated in humans? | in-progress / contradicted for lifespan magnitude |

### Inbred vs heterogeneous stock results

A large fraction of published mouse longevity-gene papers use a single inbred background (often C57BL/6). Many of these effects weaken or disappear in genetically heterogeneous backgrounds (UM-HET3) or in different inbred strains. The ITP specifically uses UM-HET3 to filter this; pure-inbred results should be treated as preliminary. #gap/needs-replication

### C. elegans IIS extrapolation calibration (relevant contrast)

For context when comparing with worm data: *daf-2* (IIS) mutants live 2× as long in *C. elegans*; IGF1R+/− mice live ~26% longer on average (mean lifespan, both sexes combined) on 129/Sv background [^holzenberger2003]; human IGF1 receptor variants have much smaller effects. The pathway is conserved; the effect magnitude attenuates from worm → mouse → human. See [[caenorhabditis-elegans]] for the worm side.

### Senolytic dosing

Mouse-effective doses for dasatinib+quercetin and fisetin are mg/kg values substantially higher than common human supplement doses. PK translation to humans is non-trivial; human trials are in progress. See [[fisetin]], [[dasatinib]], [[quercetin]], [[cellular-senescence]].

## Key aging interventions tested in mouse

Below is a summary of major interventions with verified mouse lifespan evidence, pointing to canonical pages:

| Intervention | Canonical page | Mouse result | Human evidence |
|---|---|---|---|
| Rapamycin (mTOR inhibition) | [[mtor]], [[rapamycin]] | +9% ♂, +13% ♀ mean LS; +9% ♂, +14% ♀ at 90th percentile (ITP, both sexes) [^harrison2009] | Limited; ongoing trials |
| Metformin (AMPK activator) | [[metformin]] | +5.83% mean LS (C57BL/6 males, 0.1% w/w, Gehan-Breslow p=0.02) [^martinmontalvo2013] | TAME trial in progress |
| IGF1R haploinsufficiency | [[insulin-igf1]] | +26% mean LS combined sexes (P<0.02); ♀ +33% (P<0.001); ♂ +15.9% (NS) (129/Sv) [^holzenberger2003] | Genetic association studies only |
| Acarbose (1000 ppm, started 16 mo) | — | +6% ♂ median LS, +2% ♀ (NS) (ITP, UM-HET3) [^strong2016] | None (aging indication) |
| 17α-estradiol (14.4 ppm) | — | +19% ♂ median LS (P<0.001), no effect ♀ (ITP, UM-HET3) [^strong2016] | None (aging indication) |
| Fisetin (senolytic) | [[fisetin]] | +10% median LS, improved healthspan | Phase 2 trials in progress |

## Limitations and gaps

- **Telomere biology**: standard inbred mouse strains are not valid models for telomere-driven aging. Use wild-derived or *Tert−/−* models for this question. [[telomere-attrition]] #gap/needs-human-replication
- **SASP composition**: mouse SASP factor lists require cross-validation against human senescent cell data before using to predict human inflammatory signatures. [[sasp]] #gap/needs-human-replication
- **Microbiome confounding**: facility-specific microbiome effects are a major uncontrolled variable in mouse aging studies; no standard correction exists. #gap/unsourced
- **Sex differences**: many older mouse aging papers used only males (to avoid estrous cycle variability). ITP now requires both sexes; earlier literature should be read with this limitation in mind. #gap/unsourced
- **Single-lab replication**: the majority of published mouse longevity findings have not been replicated in the ITP or any multi-site design. #gap/needs-replication
- **Maximum lifespan vs median lifespan**: many papers report mean or median lifespan; maximum lifespan figures require separate consideration and are more susceptible to small-n artifacts.
- **Canagliflozin ITP result**: ITP-positive (male-biased, ~14%) but only one cohort has reported as of this writing. #gap/needs-replication

## See also

- [[_extrapolation-guide]] — three-dimension rubric for mouse→human extrapolation
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis frame for why mouse-validated interventions systematically underperform in humans; lab-mouse confound is one of the three tiers
- [[mtor]] — most-validated longevity pathway; Harrison 2009 ITP rapamycin result
- [[insulin-igf1]] — IIS pathway; Holzenberger 2003 IGF1R+/− result on 129/Sv
- [[metformin]] — AMPK activator; Martin-Montalvo 2013 C57BL/6 result
- [[rapamycin]] — mTOR inhibitor; ITP positive
- [[telomere-attrition]] — telomere biology; major mouse–human divergence
- [[cellular-senescence]] — p16/p21 senescence; conserved but SASP differs
- [[autophagy]] — well-conserved across mouse and human
- [[sarcopenia]] — muscle aging phenotype modeled in aged mice
- [[immunosenescence]] — immune aging; notable divergences
- [[sasp]] — SASP composition differs between mouse and human senescent cells
- [[caenorhabditis-elegans]] — contrasting invertebrate model (lower ortholog %, larger IIS effects)
