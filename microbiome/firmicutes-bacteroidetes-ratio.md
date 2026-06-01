---
type: biomarker
aliases: [F/B ratio, F:B ratio, B:F ratio, Firmicutes-to-Bacteroidetes ratio]
modality: composite-clinical
unit: dimensionless ratio
training-cohort: "not-applicable — derived ratio computed directly from 16S rRNA or shotgun metagenomic relative abundances; no statistical training cohort"
n-cpgs-or-features: null
training-target: null
calibration-tissues: ["fecal", "cecal (mouse)"]
test-retest-icc: null
human-evidence-level: limited-negative
mendelian-randomization: not-tested
intervention-responsive: partial
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "All 7 primary sources verified against full PDFs (all downloaded and read end-to-end). Key corrections: (1) Turnbaugh 2006 misattributed as human twin study — corrected to mouse metagenomics paper; human twin data are in Turnbaugh 2009; (2) Mariat 2009 infant age mischaracterized as '3 months' — corrected to '3 weeks–10 months'; (3) Biagi 2010 F/B ratio significance clarified — ratios themselves not significantly different between groups (P=0.73, P=0.55); (4) Ley 2005 model clarified to include three genotypes (ob/ob, ob/+, +/+) and cecal (not fecal) samples; (5) all footnotes updated with verified n, p-values, and archive status."
---

# Firmicutes/Bacteroidetes Ratio (F/B Ratio)

The Firmicutes/Bacteroidetes (F/B) ratio is a phylum-level derived metric expressing the relative abundance of gram-positive Firmicutes versus gram-negative Bacteroidetes in gut microbiota profiles, typically measured by 16S rRNA amplicon sequencing or shotgun metagenomics from fecal samples. **It is one of the most-cited microbiome metrics in aging and obesity literature — and one of the most criticized.** Multiple meta-analyses have failed to replicate the directional claims that drove its popularity, and most current microbiome researchers treat it as an imprecise and often misleading summary statistic. This page exists because the F/B ratio is still reported in many aging papers and is referenced from [[dysbiosis]]; it aims to provide honest framing and redirect to better biomarkers. See [[gut-microbiome-aging-shifts]] for the broader picture of age-related microbiome changes.

## Definition and Computation

**Numerator (Firmicutes):** The largest bacterial phylum in the human gut, comprising gram-positive organisms with low G+C content. Major members include:
- *Lactobacillus* spp. (widely considered beneficial; see [[lactobacillus]])
- *Faecalibacterium prausnitzii* (major butyrate producer; anti-inflammatory)
- *Ruminococcus* spp. (fiber fermenters)
- *Clostridium* spp. (functionally diverse; includes pathogens *and* commensals)
- *Blautia*, *Eubacterium*, *Roseburia* spp.

**Denominator (Bacteroidetes):** The second most abundant phylum; gram-negative, predominantly anaerobic. Major members include:
- *Bacteroides* spp. (dominant genus; degrade complex polysaccharides)
- *Prevotella* spp. (diet-sensitive; high in plant-rich diets)
- *Parabacteroides* spp.

**Computed as:** F/B = (sum of Firmicutes relative abundances) / (sum of Bacteroidetes relative abundances), typically at phylum level. Some papers invert this as B:F. The choice of direction — always check the paper's definition before comparing studies.

**Measurement platform matters critically.** 16S variable regions differ in taxonomic resolution:
- V1-V3 primers: systematically under-detect Bacteroidetes vs Firmicutes
- V3-V4 primers: better balanced but still phylum-level resolution masks within-phylum heterogeneity
- V4 primers: most widely used (Earth Microbiome Project standard); less biased but lower Bacteroidetes sensitivity at low abundance
- Shotgun metagenomics: gold-standard for phylum ratios but rarely used in early cohort studies

Rarefaction depth, DNA extraction method, and storage time all differentially affect phylum-level counts. #gap/dose-response-unclear (methodological batch effects make cross-cohort ratios unreliable).

## Origin and Early Claims (2005–2009)

### Ley et al. 2005 — ob/ob mice

The ratio entered the literature via a landmark study comparing cecal microbiota in genetically obese (*ob/ob*) mice, lean heterozygous (*ob/+*), and wild-type (+/+) C57BL/6J littermates (n=19 total; 3 litters) [^ley2005]. In *ob/ob* animals, Bacteroidetes were reduced 50% relative to lean mice (P<0.05), with a proportional Firmicutes increase — i.e., elevated F/B ratio in obese animals. The effect was division-wide and independent of kinship and gender. This mouse cecal result was immediately framed as a potential obesity biomarker, despite the study using cecal (not fecal) samples and a single genetically-determined obesity model.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | contested (see below) |
| Phenotype conserved in humans? | partial (inconsistent across cohorts) |
| Replicated in humans? | contradicted by meta-analysis |

### Turnbaugh et al. 2006 — mouse metagenomics and energy-harvest capacity

Turnbaugh et al. 2006 is primarily a mouse metagenomics paper, not a human study [^turnbaugh2006]. The authors characterized the caecal microbiomes of ob/ob and lean littermates by shotgun sequencing, confirming the elevated Firmicutes-to-Bacteroidetes ratio in obese mice. Crucially, they also demonstrated via germ-free mouse colonization that the obese microbiota had **greater energy-harvest capacity** — mice colonized with an ob/ob microbiota showed a significantly greater percentage increase in total body fat (47 ± 8.3% vs 27 ± 3.6%) over two weeks than mice colonized with a lean microbiota. This transplantation experiment provided mechanistic evidence that the microbiota composition causally affects energy extraction, which is a distinct and important claim from the ratio itself. The paper also briefly references, in the introduction, prior findings in humans (citing Ley et al. 2006 Nature as the companion paper), but the human twin cohort data appear in Turnbaugh et al. 2009 (*Nature* 457:480–484), a separate publication. **Note:** the wiki previously misattributed human twin data to this paper; Turnbaugh 2006 is a mouse study. #gap/needs-human-replication (the energy-harvest mechanism has not been directly demonstrated in humans)

### Mariat et al. 2009 — aging extension

The aging-context extension came from a cross-sectional 16S study comparing infants, adults, and elderly humans [^mariat2009]. The study reported highly variable F/B ratios across age groups:
- Infants (3 weeks–10 months): mean F/B ≈ 0.4 (Bacteroidetes-dominant)
- Adults (25–45 yr): mean F/B ≈ 10.9 (Firmicutes-dominant)
- Elderly (70–90 yr): mean F/B ≈ 0.6 (drop back toward Bacteroidetes)

The observed *decline* in F/B with old age in this cohort (adults → elderly) contradicted the obesity literature's "high F/B = bad" framing — elderly people in this cohort had low F/B but are not metabolically healthy by aging metrics. This was the first indication that directional interpretation was context-dependent. #gap/contradictory-evidence

## Why the F/B Ratio is Contested

### Sze & Schloss 2016 — the meta-analysis that changed the field

The most important challenge to the F/B ratio as an obesity (and by extension, aging) biomarker came from a 10-study meta-analysis [^sze2016]. Key findings:

- **No significant association between F/B ratio and obesity** across datasets — the ratio showed no consistent obesity signal despite Shannon diversity showing a modest (but small; 2.07% difference) effect
- **Effect size is small and cohort-dependent**: individual studies claiming F/B increases in obesity could not be reproduced across independent cohorts
- Machine-learning models trained on one cohort's microbiome to predict obesity performed at near-chance levels in independent cohorts (median accuracy per model 33.01–64.77%, overall median 56.68%)
- The authors concluded that "significant associations were observed among Shannon diversity...and obesity status. They were not observed for the ratio of Bacteroidetes and Firmicutes or their individual relative abundances."

This meta-analysis did not debunk microbiome-obesity associations entirely — α-diversity changes are real — but it specifically falsified the F/B ratio as a reliable quantitative biomarker for obesity status.

### Phylum-level resolution masks biologically opposite effects

A more fundamental criticism: **Firmicutes is functionally incoherent as a phylum.** It contains:
- *Faecalibacterium prausnitzii* — the predominant butyrate-producing species; a **decrease** in F. prausnitzii correlates with IBD, colitis, and aging-related gut inflammation; its loss is generally considered pathological
- Pathogenic clostridia including *C. difficile* — a **cause** of severe gut disease
- *Lactobacillus* spp. — broadly associated with mucosal immunity and health
- *Roseburia*, *Eubacterium rectale* — beneficial fermenters

A high F/B ratio could reflect Lactobacillus enrichment (beneficial) or Clostridium enrichment (pathological). Without genus-level resolution, the ratio is ambiguous. The same critique applies to Bacteroidetes, where *Bacteroides fragilis* has both protective (enterotoxin-negative) and pathogenic (enterotoxin-positive) strains.

### Directional uncertainty in aging cohorts

The directionality of F/B changes in aging is not resolved, and multiple well-powered studies disagree:

**F/B increases with age** (Firmicutes-rise): some early cohorts, including interpretation of Mariat 2009 adult vs elderly data in the opposite direction depending on reference age group.

**F/B decreases with age / centenarians show Firmicutes loss:** Biagi et al. 2010 examined young adults (Y; 20–40 yr), elderly (E; 60–80 yr), and centenarians (C; ≤104 yr) [^biagi2010]. Centenarians showed significant rearrangement in Firmicutes composition — specifically, a decrease in anti-inflammatory *Faecalibacterium prausnitzii* (qPCR p=0.02 for C vs E) and expansion of facultative anaerobes (predominantly Proteobacteria). Centenarian composition differed significantly from both younger adults and 70-year-olds by multivariate analysis (RDA; MCPP P=0.002), while elderly and young adult groups were not significantly different from each other. Critically, **the Firmicutes/Bacteroidetes ratio itself was not significantly different between the three groups** (P=0.73 between Bacteroidetes proportions; P=0.55 between Firmicutes/Bacteroidetes ratios) — the meaningful differences were at genus level, not phylum level. The F/B ratios reported were: centenarians 3.6, elderly 5.1, young adults 3.9.

**Diet confounds age:** Claesson et al. 2012, examining 178 elderly subjects in varied living situations, found that **diet quality** — not chronological age per se — was the dominant predictor of microbiota composition [^claesson2012]. Long-stay care residents (lower diet diversity) had significantly less diverse microbiota than community-dwelling elderly on varied diets, with correlated frailty and inflammation markers. This suggests age-F/B associations may be diet confounds.

**Uniqueness — not ratio — predicts healthy aging:** The most methodologically rigorous recent aging cohort study (Wilmanski et al. 2021; Nature Metabolism) found that microbiome **uniqueness** — compositional drift away from a Bacteroides-dominated "common" profile — was positively associated with healthy aging and 4-year survival [^wilmanski2021]. Survival analyses applied only to the longitudinal MrOS cohort (N=706 community-dwelling males; 85+ subgroup N=256) — Arivale and AGP were cross-sectional. MrOS is exclusively male — note this in survival-claim citations. Individuals who maintained high Bacteroides dominance into old age had *decreased* survival. Notably, this framing does not map cleanly onto F/B ratio at all — it captures individuation of the microbiome rather than Firmicutes vs Bacteroidetes balance. #gap/contradictory-evidence (the Wilmanski survival finding implies Bacteroides-dominated microbiomes — low F/B — predict poor aging outcomes, further complicating the older F/B narrative).

**Single-intervention preclinical signal — Zhang 2023 nmrHas2 mouse:** The Zhang et al. 2023 (*Nature*) [[has2|HAS2]] transgenic mouse study — primarily an investigation of [[hyaluronic-acid|HMW-HA]] augmentation as a longevity intervention — reported a microbiome shift in old transgenic animals consistent with the Wilmanski direction: **Bacteroidetes ↑ and Firmicutes ↓** in old nmrHas2 mice (n=9) vs age-matched creER controls (n=10), p<0.05 [^zhang2023]. Family-level analysis showed pro-inflammatory taxa (*Streptococcaceae*, *Lachnospiraceae*, *Deferribacteraceae*) were less abundant and *Muribaculaceae* (associated with longevity in the long-lived blind mole-rat *Spalax leucodon*) was more abundant in old nmrHas2 animals. **This is a single mouse study with small n at the F/B endpoint; it should be interpreted as consistent with — not validating — the Wilmanski uniqueness/Bacteroides-dominance framework, and does not rehabilitate phylum-level F/B ratio as a useful biomarker.** The mechanistic interpretation is that [[hyaluronic-acid|HMW-HA]] in tissue + improved gut barrier function permits a microbiome compositional shift toward longevity-associated taxa, not that the F/B ratio itself is the lever. See [[studies/zhang-2023-nmrhas2-mouse-healthspan]] for full quantitative detail.

[^zhang2023]: [[studies/zhang-2023-nmrhas2-mouse-healthspan]] · doi:10.1038/s41586-023-06463-0 · PMID 37612507 · PMC10666664 · Zhang Z, Tian X, Lu JY et al. (Gorbunova/Seluanov labs) · *Nature* 2023; 621(7977):196-205 · in-vivo · n=9 nmrHas2 vs n=10 creER (microbiome cohort, pooled sexes) · randomized · p<0.05 · phylum-level F/B shift toward Bacteroidetes-dominance + family-level pro-inflammatory taxa reduction in old nmrHas2 mice; consistent with Wilmanski 2021 direction · archive: not in OA-package distribution (PMC author manuscript); verified against PMC10666664 HTML

## Current Status as a Biomarker

| Attribute | Assessment |
|---|---|
| Reproducibility | Poor — fails cross-cohort replication in meta-analyses |
| Directional consistency | Absent — opposite directions reported in aging vs obesity contexts |
| Mechanistic specificity | None — phyla are too broad to carry mechanistic claims |
| Methodological sensitivity | High — primer choice, rarefaction, storage all shift phylum ratios |
| Clinical utility | Not recommended as primary metric by current expert consensus |
| Preferred alternatives | α-diversity, genus-level abundances (Akkermansia, Bifidobacterium, Faecalibacterium), functional gene capacity (butyrate-gene abundance) |

Most current microbiome reviews and expert guidelines (as of 2025–2026) explicitly caution against using F/B as a primary biomarker. The metric persists in the literature partly because it is simple to compute and partly as a legacy metric from historically influential studies.

## Preferred Alternatives

The wiki's more reliable biomarkers and microbiome metrics:

- **[[akkermansia-muciniphila]] abundance** — single-taxon metric with RCT evidence for intervention-responsiveness; see the AKK page for full mechanistic context
- **[[bifidobacterium]] abundance** — age-related decline well-documented; strong prebiotic-response signal
- **[[lactobacillus]] abundance** — diet- and intervention-responsive; genus-level genus resolution provides mechanistic anchor
- **[[scfa-signaling]]** — functional output of fermentative microbiota; butyrate gene-capacity is measurable by shotgun metagenomics and more mechanistically specific than phylum ratios
- **α-diversity (Shannon/OTU count)** — modestly but consistently associated with health in meta-analyses (Sze & Schloss 2016 positive result); direction is consistent (higher diversity = healthier, generally)
- **Microbiome uniqueness** (Wilmanski 2021 framework) — emerging metric; positively predicts healthy aging and survival

## Limitations and Gaps

- #gap/contradictory-evidence — directional claims are cohort-specific; no consensus direction in aging context
- #gap/needs-replication — early F/B obesity claims (Ley 2005 mouse study; Ley 2006 Nature companion letter in humans) are not reproducible across independent human cohorts per Sze & Schloss 2016 meta-analysis
- #gap/no-mechanism — even if F/B ratios co-vary with aging or metabolic outcomes, phylum-level resolution provides no mechanism
- The optimal summary statistic for gut microbiome aging state is unresolved — this is an active research area. No single metric has emerged to replace F/B as the field's simple headline number.
- Germ-free mouse data (Turnbaugh 2006 energy-harvest colonization experiments) remain the strongest evidence that microbiome composition causally influences metabolic phenotype, but this does not validate F/B ratio as the relevant summary statistic for that effect.

## Cross-References

- [[dysbiosis]] — hallmark page that contextualizes gut microbiome changes in aging; F/B ratio is mentioned but deprioritized in favor of genus-level and functional metrics
- [[gut-microbiome-aging-shifts]] — overview entity for age-associated gut microbiome changes; preferred landing page for longitudinal trajectory data
- [[akkermansia-muciniphila]] — best-characterized single-taxon aging-relevant microbe in the wiki
- [[bifidobacterium]] — age-declining commensal with prebiotic intervention evidence
- [[lactobacillus]] — diet- and intervention-responsive commensal
- [[scfa-signaling]] — pathway by which microbiome-derived short-chain fatty acids signal to host tissues

---

[^ley2005]: doi:10.1073/pnas.0504978102 · Ley RE et al. · *PNAS* 2005 · observational · model: C57BL/6J ob/ob, ob/+, and +/+ mice · n=19 total (3 mothers + 16 offspring across 3 families) · cecal contents, 16S rRNA gene sequencing (5,088 sequences total) · ob/ob animals had a statistically significant 50% reduction in Bacteroidetes relative to lean mice (P<0.05) and proportionally greater Firmicutes; effects were division-wide and independent of kinship and gender · archive: local PDF available

[^turnbaugh2006]: doi:10.1038/nature05414 · Turnbaugh PJ, Ley RE et al. · *Nature* 2006 · metagenomics + germ-free transplantation · model: C57BL/6J ob/ob mice and lean littermates · shotgun sequencing of caecal microbiomes confirmed elevated Firmicutes-to-Bacteroidetes ratio in ob/ob mice; germ-free transplantation showed ob/ob microbiota recipients gained significantly more body fat (47 ± 8.3% vs 27 ± 3.6% increase) over 2 weeks; n recipients = 9 (obese donor) vs 10 (lean donor) · **This is a mouse study** — human twin data are in Turnbaugh et al. 2009 (Nature 457:480–484) · archive: local PDF available

[^mariat2009]: doi:10.1186/1471-2180-9-123 · Mariat D et al. · *BMC Microbiology* 2009 · observational (cross-sectional) · model: human infants (n=21; age 3 weeks–10 months), adults (n=21; age 25–45 yr), elderly (n=20; age 70–90 yr) · qPCR-based phylum quantification · reported F/B ≈ 0.4 (infant), 10.9 (adult), 0.6 (elderly); differences between infants and adults and between adults and elderly were statistically significant (P<0.05 by Wilcoxon); infant vs elderly difference was not significant · archive: local PDF available

[^sze2016]: doi:10.1128/mBio.01018-16 · Sze MA & Schloss PD · *mBio* 2016 · meta-analysis · 10 independent obesity-microbiome 16S datasets (PRISMA guidelines); no significant F/B ratio association with obesity in any individual study or pooled analysis; Shannon diversity 2.07% lower in obese individuals (significant by random-effects model, all P<0.011, but biologically modest); machine-learning cross-cohort median accuracy 56.68% (range 33.01–64.77%) · archive: local PDF available

[^biagi2010]: doi:10.1371/journal.pone.0010667 · Biagi E et al. · *PLoS ONE* 2010 · observational · model: human young adults (Y; n=~18; 20–40 yr), elderly (E; n=~18; 60–80 yr), centenarians (C; n=~18; ≤104 yr) · HITChip microarray + qPCR · centenarians showed significant decrease in *Faecalibacterium prausnitzii* (qPCR p=0.02) and expansion of facultative anaerobes (Proteobacteria); F/B ratio differences between groups were NOT statistically significant (P=0.73, P=0.55); F/B ratios: C=3.6, E=5.1, Y=3.9 · archive: local PDF available

[^claesson2012]: doi:10.1038/nature11319 · Claesson MJ et al. · *Nature* 2012 · observational · n=178 elderly subjects (non-antibiotic-treated; community, day-hospital, rehabilitation, or long-stay care); diet data from 168 subjects; 16S rRNA V4 amplicons; microbiota composition correlated with residence location and diet type (Monte-Carlo P<0.0001); long-stay care residents had significantly less diverse microbiota and higher inflammatory markers (IL-6, IL-8, CRP) and frailty indices (Barthel, FIM) than community-dwelling subjects; there was no significant correlation between the Bacteroidetes:Firmicutes ratio and BMI · archive: local PDF available

[^wilmanski2021]: doi:10.1038/s42255-021-00348-0 · Wilmanski T et al. · *Nature Metabolism* 2021 · observational · multi-cohort (Arivale, AGP cross-sectional + MrOS longitudinal); survival analyses applied only to the longitudinal MrOS cohort (N=706 community-dwelling males, 85+ subgroup N=256 — MrOS is exclusively male) · microbiome compositional uniqueness (Bray-Curtis dissimilarity) increased with age starting at 40–50 yr and was positively associated with healthy aging; in 85+ yr old MrOS participants, retaining high relative *Bacteroides* abundance was significantly associated with increased all-cause mortality (4-year follow-up); low uniqueness also predicted decreased survival; F/B ratio was not the focus — uniqueness is a beta-diversity metric that does not map onto phylum ratios · archive: local PDF available
