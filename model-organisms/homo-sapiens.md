---
type: model-organism
aliases: [human, Homo sapiens sapiens, modern human]
species-name: Homo sapiens
common-name: human
typical-lifespan: "~80 years average (OECD); ~122.5 years max-verified (Calment)"
genome-similarity-to-human: "100% (reference organism)"
key-strengths: [the-actual-target-organism, large-epidemiological-cohorts, biomarker-validation-possible, direct-intervention-trials, genetic-association-studies]
key-divergences: [ethical-constraints-prevent-mortality-endpoint-trials, decades-long-trial-timescales, reliance-on-surrogate-endpoints, extreme-individual-variation, confounded-by-lifestyle-and-environment]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Willcox 2008, Suh 2008, Horvath 2013, Waziry 2023, Ravussin 2015, Sebastiani 2012 verified against primary source PDFs. Kraus 2019 (10.1016/s2213-8587(19)30151-2) and Coles 2004 (10.1093/gerona/59.6.b579) not verifiable — both download-failed (not_oa/no OA URL). Claims citing these two sources tagged #gap/no-fulltext-access."
---


# Homo sapiens (human)

**Homo sapiens** is the target organism for all aging research in this wiki. Unlike other entries in `model-organisms/`, humans are the *subject* being studied, not a proxy for another species. This page documents human-specific aging biology, lifespan statistics, major research cohorts, and the features that are poorly captured by model organisms — providing the baseline reference against which all model→human extrapolations (see [[_extrapolation-guide]]) must be measured.

---

## Lifespan distribution

| Metric | Value | Notes |
|---|---|---|
| Average life expectancy (OECD) | ~80 years | Varies 72–86 yr by country; female > male ~5 yr |
| Median adult healthspan | ~60–70 years | Onset of first chronic disease or disability |
| Supercentenarian threshold | 110+ years | Rare: estimated ~300–500 alive globally at any time |
| Maximum verified lifespan | 122.5 years | Jeanne Calment (France, 1875–1997) [^calment] |

The gap between average (~80 yr) and maximum (~122.5 yr) lifespan is far larger than in any laboratory model organism, reflecting the dominant role of lifestyle, environment, and stochastic damage accumulation in human aging outcomes. #gap/unsourced — precise healthspan estimates vary substantially by definition (disability-free, disease-free, functional independence); no single widely-adopted operational definition exists.

[^calment]: [[studies/coles-2004-supercentenarian-demography]] · observational · model: human supercentenarians · doi:10.1093/gerona/59.6.b579 · #gap/no-fulltext-access (download failed; not_oa)

---

## Per-organism extrapolation profile

(Per [[_extrapolation-guide]] § Per-organism extrapolation profiles)

**1. Genome similarity to human:** 100% (by definition; humans are the reference)

**2. Lifespan ratio:** 1.0 (reference); mouse:human ratio ~1:30; worm:human ratio ~1:2000

**3. Conserved systems (well-modeled by other organisms)**

Aging mechanisms that are robustly conserved across model organisms *and* demonstrated in humans:

- **Insulin/IGF-1 signaling (IIS)** — [[insulin-igf1]] pathway downregulation extends lifespan in worm, fly, and mouse; human longevity associations confirmed for FOXO3 and IGF1R [^willcox2008] [^suh2008]
- **mTOR inhibition** — [[mtor]] pathway is conserved; rapamycin extends lifespan in mice; observational human data supportive but no human RCT lifespan endpoint
- **AMPK activation** — [[ampk]] pathway activates with energy stress; metformin (indirect AMPK activator) is associated with longevity in humans [^tame]; see [[metformin]]
- **Cellular senescence** — p16+/p21+ senescent cell accumulation with age documented in human tissue; [[sasp]] composition partly overlapping with mouse SASP data #gap/contradictory-evidence (SASP factor lists differ between mouse and human senescent cells)
- **Telomere attrition** — *Unlike* standard lab mice (which have very long telomeres and active telomerase), humans rely on telomere shortening as a replication counter in most somatic tissues; attrition-associated replicative senescence is a major human aging driver
- **Mitochondrial dysfunction** — progressive respiratory-chain defects accumulate in human post-mitotic tissues (heart, brain, skeletal muscle); well-modeled by mouse heteroplasmy models
- **Sarcopenia** — age-related muscle loss (see [[sarcopenia]]) is universal in humans; onset detectable ~40-50 yr; clinically significant by 70+ yr
- **Epigenetic drift** — DNA methylation age (see Horvath clock [^horvath2013]) accelerates with chronological age; clock-slowing by caloric restriction demonstrated in humans (CALERIE trial) [^waziry2023]
- **Chronic inflammation (inflammaging)** — rising IL-6, TNF-alpha, CRP with age documented in large human cohorts; see [[immunosenescence]]

**4. Divergent systems (poorly captured by model organisms)**

| System | How humans differ | Implication for extrapolation |
|---|---|---|
| Telomere biology | Lab mice (C57BL/6) have telomeres 5–10× longer than humans; constitutive somatic telomerase | Mouse telomere-manipulation findings do not translate cleanly; use wild-derived or *Terc*-KO mice for telomere models |
| Cognitive aging trajectory | Humans show a decades-long cortical thinning and synaptic decline; rodent models poorly capture frontotemporal aging | Neurodegeneration findings from rodents need primate confirmation |
| Atherosclerosis kinetics | Humans accumulate atherosclerotic plaques over decades; mice require genetic manipulation (ApoE-/-, LDLR-/-) to develop equivalent disease | Cardiovascular aging timeline is fundamentally different |
| Gut microbiome composition | Human microbiome is substantially more diverse and diet-dependent than standard inbred mouse microbiome | Microbiome-longevity findings from mice require human replication |
| Drug metabolism (CYP) | Human CYP3A4 substrate specificity differs from mouse CYP3A; some compounds metabolized to active form in mice are not in humans (and vice versa) | Senolytic dosing extrapolation is particularly unreliable |
| Immune aging patterns | Human Th17/Treg balance, NK cell decline kinetics, and vaccine-response decline differ from mouse patterns; thymic involution timeline differs | Immunosenescence interventions in mice need human immunological validation |
| Psychosocial aging | Chronic psychological stress, social isolation, loneliness, and socioeconomic factors causally modulate human aging rate (epigenetic clock data); rodents lack equivalent exposure complexity | Human aging cannot be fully modeled without accounting for psychosocial covariates |
| Caloric restriction effect size | CR extends lifespan ~30–40% in mice; CALERIE (2-year RCT targeting 25% CR) achieved only ~11.7% CR on average, with significant cardiometabolic biomarker improvements (TNF-α, CRP, T3, lipids) and DunedinPACE slowing, but no lifespan endpoint [^calerie2015] [^calerie2019] #gap/no-fulltext-access (Kraus 2019) | Achieved CR was well below target; biomarker effects were significant but modest; lifespan translation unknown (see [[caloric-restriction]]) |

**5. Strengths as the target organism**

- **No extrapolation required** — findings in humans are directly applicable to humans
- **Large cohort availability** — Framingham (~15,000 person-years), BLSA (ongoing since 1958), LLFS, NECS provide longitudinal aging data at scale
- **Genetic association studies** — GWAS with millions of participants enable discovery of longevity loci (FOXO3, APOE, CETP, etc.)
- **Epigenetic clocks validated in human tissue** — biological age can be estimated in living subjects [^horvath2013]
- **Intervention trials possible** — CALERIE, TAME, senolytic Phase 2 trials; surrogate endpoints established

**6. Failure modes / limitations as a research subject**

- **No mortality endpoint** — RCTs with human lifespan as a primary outcome are ethically and practically impossible (decades-long, prohibitive cost); must rely on surrogate endpoints (epigenetic age, biomarkers of aging, healthspan metrics)
- **Extreme individual variation** — genetic background heterogeneity means effect sizes are smaller and harder to detect than in inbred mouse strains; larger samples required
- **Ethical constraints on interventions** — genetic interventions, extreme dietary restriction, and gerotherapeutics with unknown long-term safety cannot be tested as freely as in animal models
- **Confounding by lifestyle / SES** — diet, exercise, smoking, socioeconomic status, access to healthcare all affect aging rate; disentangling these from genetic effects is a central challenge
- **Survivor bias in centenarian studies** — individuals studied at 100+ yr are survivors of decades of selection pressure; their genetic and physiological profiles are not representative of the general population trajectory

---

## Human longevity genetics

The following longevity-associated loci have the strongest and most-replicated human evidence:

### FOXO3 (FOXO3A)
The rs2802292 GG genotype in *FOXO3* is associated with ~2.75-fold increased odds of reaching 95+ years in the Honolulu Heart Program / Kuakini cohort [^willcox2008], with later replications across European, Okinawan, German, Danish, and Chinese cohorts. FOXO3 encodes a forkhead transcription factor in the [[insulin-igf1]] pathway; longevity alleles appear to upregulate [[autophagy]], stress resistance, and [[ampk]]-dependent pathways. See [[molecules/proteins/foxo3]] for mechanistic detail. #gap/needs-replication — individual replication study effect sizes vary; meta-analysis support is strong but OR estimates differ by study.

[^willcox2008]: [[studies/willcox-2008-foxo3a-longevity]] · n=615 (213 longevity cases ≥95 yr + 402 average-lived controls; drawn from HHP/HAAS cohort of 3,741 Japanese-American men) · nested case-control · OR=2.75 (GG vs TT, 95% CI 1.51–5.02, p=0.0007) for survival to 95+ · model: Honolulu Heart Program / Kuakini cohort · doi:10.1073/pnas.0801030105 · locally available

### IGF1R (IGF-1 receptor)
Suh et al. (2008) identified heterozygous loss-of-function mutations in *IGF1R* in Ashkenazi Jewish centenarians (n=384 centenarians vs 312 controls); 9 centenarians (2.3%) carried either of two nonsynonymous mutations (Ala-37-Thr or Arg-407-His) vs 1 control (0.3%), p=0.02. Carriers showed reduced IGF-1 receptor (IGFIR) signaling activity in immortalized lymphocytes, and female offspring of centenarians overall had 35% *higher* serum IGF-1 levels (p<0.01) — interpreted as a compensatory response to reduced IGFIR sensitivity — and were 2.5 cm shorter than controls (p<0.001) [^suh2008]. Consistent with the evolutionarily conserved IIS longevity axis (worm *daf-2*, fly *InR*, mouse *Igf1r*+/-).

[^suh2008]: [[studies/suh-2008-igf1r-centenarian]] · n=384 centenarians / 312 controls · observational (case-control) · model: Ashkenazi Jewish centenarians · doi:10.1073/pnas.0705467105 · locally available

### APOE
- *APOE ε2* allele: longevity-associated; lower Alzheimer's risk, lower cardiovascular risk
- *APOE ε4* allele: anti-longevity; 3–4× increased Alzheimer's risk; common in short-lived individuals; strongly depleted in centenarian populations [^sebastiani2012]

[^sebastiani2012]: [[studies/sebastiani-2012-centenarian-genetics]] · review (NECS overview 1994–2012; GWAS sub-study: 801 centenarians + 914 controls) · model: New England Centenarian Study · doi:10.3389/fgene.2012.00277

### Other replicated longevity loci
CETP, HMGA2, CDKN2A/B, and multiple GWAS loci with small individual effects; polygenic longevity score work ongoing. #gap/unsourced for individual loci beyond FOXO3/IGF1R/APOE — see [[studies/sebastiani-2012-centenarian-genetics]] for NECS overview.

---

## Major human aging research cohorts

| Cohort | Start | N (approx) | Focus |
|---|---|---|---|
| Framingham Heart Study | 1948 | ~15,000 original + offspring + third gen | Cardiovascular aging; now broad multi-system |
| Baltimore Longitudinal Study of Aging (BLSA) | 1958 | ~3,000 cumulative | Multi-system longitudinal phenotyping; oldest US aging study |
| New England Centenarian Study (NECS) | 1994 | ~1,600 centenarians | Extreme longevity genetics; family studies |
| Okinawan Centenarian Study | 1975 | ~900 centenarians | Dietary and genetic factors in exceptional longevity |
| Long Life Family Study (LLFS) | 2006 | ~5,000 (clustered families) | Family-based genetic architecture of longevity |
| CALERIE (Phase 2) | 2007 | 220 randomized (218 started) | Only human RCT of sustained caloric restriction (targeting 25% CR × 2 yr; achieved ~11.7%); epigenetic + cardiometabolic outcomes [^calerie2015] [^waziry2023] |
| TAME trial | design 2016 (Barzilai) | 3,000 (planned) | Metformin vs placebo; geroscience-based trial; primary endpoint: composite aging-related events. **Not currently ClinicalTrials.gov-registered as of 2026-05** (NCT04977829 is invalid; NCT02432287 is unrelated MILES n=16; NCT03138915 is unrelated radiomics study). See [[metformin]]. |

[^calerie2015]: [[studies/ravussin-2015-calerie]] · n=220 randomized (218 ITT; 145 CR, 75 AL) · rct · achieved 11.7±0.7% CR over 2 yr (target: 25%) · model: healthy non-obese adults aged 21–51 yr · doi:10.1093/gerona/glv057
[^calerie2019]: [[studies/kraus-2019-calerie-cardiometabolic]] · n=218 · rct · model: healthy non-obese adults · doi:10.1016/s2213-8587(19)30151-2 · #gap/no-fulltext-access (download failed; OA URL present but unreachable)
[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · n=197 with baseline + follow-up DNAm data (128 CR, 69 AL; from 220 randomized) · rct · model: healthy non-obese adults (CALERIE) · doi:10.1038/s43587-022-00357-y
[^tame]: [[studies/barzilai-tame-trial]] · TAME design paper (Barzilai et al. 2016, Cell Metab 23:1060–1065) · NOT currently ClinicalTrials.gov-registered as of 2026-05; previously cited NCT04977829, NCT02432287, NCT03138915 are all incorrect (verified via CT.gov v2 API 2026-05-08) · model: adults 65–79 yr (planned ~3,000) · #gap/long-term-unknown #gap/no-mechanism

---

## Surrogate endpoints and biomarkers of aging

Because mortality cannot serve as a primary endpoint in human aging trials, validated surrogate endpoints are critical. The most established:

- **Epigenetic clocks** — Horvath's pan-tissue clock (353 CpG sites) predicts chronological age with ~3.6 yr MAE in test data across human tissues [^horvath2013]; accelerated clock predicts all-cause mortality, frailty, and disease risk. Second-generation clocks (GrimAge, PhenoAge, DunedinPACE) are more predictive of aging-related outcomes. CALERIE showed that 2-year CR intervention (mean ~11.9% achieved, not the 25% target) slowed the *pace* of aging as measured by DunedinPACE (24-month d=−0.25, 95% CI −0.41 to −0.09, p<0.003), corresponding to a ~2–3% slowing of biological aging rate per year; however, CR did not significantly change PhenoAge or GrimAge [^waziry2023].
- **Frailty indices** — Fried phenotype (5-item) and Rockwood frailty index (30–70 items) quantify functional aging; predictive of hospitalization, disability, mortality
- **Biological age algorithms** — composite scores (phenotypic age, metabolomic age) from clinical laboratory values
- **Telomere length** — average leukocyte telomere length (LTL) declines ~20–50 bp/yr; shorter LTL associated with aging diseases, but causal directionality unclear for most outcomes #gap/no-mechanism

[^horvath2013]: [[studies/horvath-2013-epigenetic-clock]] · observational (multi-tissue) · n=7,844 non-cancer samples from 82 datasets (51 tissues/cell types) · test-set MAE=3.6 yr · model: human tissues across age · doi:10.1186/gb-2013-14-10-r115

---

## Hallmarks in human context

Hallmarks of aging documented in humans (with human-specific caveats):

| Hallmark | Human Evidence Level | Key Caveats |
|---|---|---|
| [[genomic-instability]] | Strong | Somatic mutation accumulation in normal human tissues well-documented by clonal hematopoiesis studies |
| [[telomere-attrition]] | Strong | Replicative senescence is a real human aging driver; unlike lab mice, humans have short telomeres and limited somatic telomerase |
| [[epigenetic-alterations]] | Strong | Horvath clock; methylation drift well-documented in human longitudinal cohorts |
| [[loss-of-proteostasis]] | Strong | Protein aggregates (Aβ, tau, TDP-43, α-syn) accumulate in human brain aging |
| [[deregulated-nutrient-sensing]] | Moderate | IIS axis longevity associations confirmed; CR biomarker effects modest in humans vs mice |
| [[mitochondrial-dysfunction]] | Strong | Respiratory-chain mutations accumulate in human muscle and brain with age |
| [[cellular-senescence]] | Strong | p16+ senescent cells accumulate in human tissues; ex vivo senolytic clearance demonstrated |
| [[stem-cell-exhaustion]] | Strong | HSC clonal hematopoiesis; satellite cell decline in sarcopenia; intestinal stem cell dysfunction |
| [[altered-intercellular-communication]] | Moderate | Inflammaging, SASP factors measurable in human plasma; causal role under investigation |
| [[chronic-inflammation]] | Strong | Inflammaging CRP/IL-6/TNF-alpha trends documented in Framingham, BLSA and others |
| [[dysbiosis]] | Limited | Gut microbiome diversity changes with age in humans; causality unclear |
| [[disabled-macroautophagy]] | Moderate | Autophagy flux decline with age in human peripheral blood cells and muscle; biopsy data limited |

---

## Limitations and gaps

- #gap/needs-replication — TAME trial (metformin vs aging composite endpoint) is ongoing; no primary result yet as of 2026
- #gap/long-term-unknown — long-term effects of most candidate geroprotectors (rapamycin, senolytics, NAD+ precursors) remain unknown in humans
- #gap/no-mechanism — mechanisms by which psychosocial factors (loneliness, SES, stress) modulate epigenetic aging rate in humans are incompletely understood
- #gap/unsourced — population-level healthspan estimates vary widely by definition; a single operational definition has not been adopted across cohort studies
- #gap/contradictory-evidence — SASP composition in human vs mouse senescent cells overlaps only partially; cross-species SASP-based therapeutic targets need human-side confirmation
- No dedicated page yet exists for the frailty-index methodology or the DunedinPACE clock; these would be useful downstream stubs

---

## See also

- [[_extrapolation-guide]] — rubric for evaluating model→human translation
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis: why model-organism interventions systematically underperform in human trials
- [[insulin-igf1]] — IIS pathway; FOXO3 and IGF1R longevity associations
- [[caloric-restriction]] — CALERIE trial; CR effect sizes in humans vs mice
- [[sarcopenia]] — human muscle aging phenotype
- [[immunosenescence]] — human immune aging; Th17/Treg, NK cell decline
- [[metformin]] — TAME trial geroprotector candidate
- [[autophagy]] — conserved longevity pathway; flux declines in human aging
- [[sasp]] — SASP differences between mouse and human senescent cells
- [[hallmarks-of-aging]] — master framework; all hallmarks have human evidence
