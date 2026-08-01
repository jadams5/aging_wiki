---
type: study
doi: 10.1038/s41586-026-10821-z
pmid: 42486977
pmc: null
title: "Genetic background sets the trajectory of experimental cancer evolution"
authors: [Aitken SJ, Connor F, Feig C, Rayner TF, Lukk M, et al.]
year: 2026
journal: Nature
study-design: in-vivo
publication-type: research-article
volume: null
issue: null
pages: "advance online publication (22 July 2026); article PDF 1-10"
organism: "mus-musculus (three strains/subspecies) + mus-caroli"
n-subjects: 215
intervention: [diethylnitrosamine]
hallmarks-tested: ["[[genomic-instability]]", "[[telomere-attrition]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [genetic-background-shapes-tumour-evolution, convergent-ras-mapk-selection, strain-specific-driver-choice, strain-specific-inferred-whole-genome-duplication, somatic-germline-epistasis, genetic-background-shapes-early-clonal-selection]
local-pdf: null
verified: true
verified-date: 2026-07-30
verified-by: claude
verified-scope: "Full article PDF (including Methods, Extended Data and Reporting Summary), Supplementary Note, Supplementary Tables 1-3 and Fig. 5 source data checked; all claims on this page cross-checked."
---

# Aitken et al. 2026 — Genetic background and experimental cancer evolution

## TL;DR

Aitken and colleagues repeatedly induced liver tumours with the same single neonatal dose of diethylnitrosamine (DEN) in 215 male mice spanning four divergent genetic backgrounds, then analysed 581 histologically homogeneous dysplastic nodules by matched histology and whole-genome sequencing, with tumour RNA sequencing and normal-liver regulatory profiling in subsets. The strains differed in the fixed collection time needed to reach a pilot-defined 100%-macroscopic-incidence endpoint, mutation burden and spectrum, inferred whole-genome-duplication propensity, the number and identity of selected drivers, driver-by-background transcriptional effects, and the survival of the earliest post-mutagenesis lineages. Yet **550/581 nodules (94.7%, reported as 95%) carried at least one probable activating mutation in the [[ras-mapk|RAS–MAPK pathway]]**. The study therefore separates pathway-level convergence from genotype-level contingency: the same carcinogenic exposure and common oncogenic pathway can produce different evolutionary routes on different inherited backgrounds [^aitken2026].

For aging biology, this is strong controlled evidence that the phenotypic consequences of [[somatic-mutation-accumulation|somatic mutations]] depend on the inherited genome in which they arise. It is relevant to [[genomic-instability]], [[telomere-attrition]], and age-associated [[cancer]], but it is **not** a normal-aging, lifespan, or human study.

## Study design

### Experimental hierarchy

| Background | Taxon | DEN-treated males | Tumours selected for WGS | Collection after DEN |
|---|---|---:|---:|---:|
| C3H/HeOuJ (C3H) | *Mus musculus domesticus* | 104 | 370 | 25 weeks (postnatal day 190) |
| C57BL/6J (BL6) | *Mus musculus domesticus* | 12 | 55 | 36 weeks (postnatal day 267) |
| CAST/EiJ (CAST) | *Mus musculus castaneus* | 54 | 84 | 38 weeks (postnatal day 281) |
| CAROLI/EiJ (CAROLI) | *Mus caroli* | 45 | 72 | 78 weeks (postnatal day 561) |

The resulting nested design comprised **4 backgrounds, 110 litters, 215 animals and 581 independently arising tumours**. Multiple tumours were sampled from individual livers; mixed-effects models were used to distinguish background, litter, animal and tumour-level associations [^aitken2026].

### Exposure and sampling

- Male mice received one intraperitoneal dose of **DEN, 20 mg/kg**, at postnatal day 15 between 08:00 and 09:00.
- Collection ages differed by background and were chosen from pilot data as timepoints by which 100% of surviving DEN-treated mice would have macroscopic tumours. The authors use these fixed strain-specific endpoints as a tumour-latency readout, but the analysed mice were not serially monitored to measure individual tumour-onset times.
- Untreated age-matched animals were examined for spontaneous tumours, and additional spontaneous liver tumours were collected during colony surveillance.
- The 581 lesions in the main analysis were at least 2 mm, histologically homogeneous dysplastic nodules, had more than 70% tumour cells, and had sufficient material. Sixteen additional DEN-induced hepatocellular carcinomas were whole-genome sequenced and released (C3H 1, BL6 11, CAST 0, CAROLI 4) but excluded from the reported main analyses; lesions with extensive necrosis, mixed morphology, nodule-in-nodule appearance or substantial normal-liver contamination were also excluded.
- DEN assignment was neither randomized nor blinded because it was an established induction protocol. Histology was blinded and assessed twice by a histopathologist [^aitken2026].

### Molecular readouts

| Readout | Main sample set | Purpose |
|---|---:|---|
| Whole-genome sequencing (minimum 40×) | 581 DEN-induced tumours | Mutational burden and signatures, drivers, copy-number changes, lesion segregation, multiallelism and clonal history |
| Total RNA sequencing | 386 tumours; normal-liver comparators | Tumour state, driver-by-background epistasis and shared-environment effects |
| Histopathology and digital nuclear morphometry | 581 tumours | Diagnosis, tumour features and support for inferred polyploidy |
| ChIP–seq, ATAC–seq and RNA-seq of postnatal-day-15 liver | Strain-matched biological replicates | Baseline regulatory state and transcription-coupled mutation-rate modelling |
| Telomere-repeat abundance from WGS | Normal liver and tumours | Background differences and associations with inferred genome duplication and clonal dynamics |

## Key results

### 1. Background tracked tumour susceptibility, but mutation burden did not explain it

The strain-specific collection endpoints at 100% macroscopic incidence were 25 weeks after DEN in C3H, 36 weeks in BL6, 38 weeks in CAST and 78 weeks in CAROLI; untreated spontaneous tumours followed the same susceptibility ordering. These endpoints support a strain-level susceptibility/latency ordering but are not observed per-animal latency distributions. Median base-substitution burden was highest in CAST (**17.6 mutations/Mb**) and BL6 (**16.6/Mb**), not in the most susceptible C3H (**13.5/Mb**); CAROLI was similar to C3H (**13.3/Mb**). Mutation burden differed by background (ANOVA **P = 1.12 × 10⁻¹³**) but not detectably by shared litter or animal environment [^aitken2026].

The DEN2 signature contributed a median 11.8–14.1% of substitutions across backgrounds, but 14% of C3H and 7% of BL6 tumours had more than 30% DEN2 mutations. Lower normal-liver *Mgmt* expression in C3H and BL6 was consistent with saturation of direct O⁶-ethylguanine repair in those outliers, but this was an explanatory association rather than a direct perturbation test [^aitken2026].

**Interpretation:** inherited background changed how DEN damage was processed, but more mutations did not equate to earlier cancer. This cautions against treating somatic mutation count alone as a sufficient measure of oncogenic consequence.

### 2. CAROLI showed a distinct inferred whole-genome-duplication trajectory associated with short telomeres

Nearly all C3H (97%), BL6 (94%) and CAST (100%) tumours retained the chromosome-scale mutational asymmetry expected from lesion segregation. By contrast, **27/72 CAROLI tumours were classified as whole-genome duplicated** (37.5%; reported as 37%) because they were mutationally symmetric. These symmetric tumours had 1.4-fold higher mutation load (**P = 0.0014**), 1.8-fold lower variant allele frequency (**P = 5.8 × 10⁻¹⁵**) and approximately doubled nuclear volume. This joint pattern supports, but does not directly observe, whole-genome duplication caused by failed karyokinesis in the first mitosis after DEN exposure [^aitken2026].

CAROLI had the shortest telomeres in untreated postnatal-day-15 liver, and its tumours had shorter telomeres than matched young liver. Among the 25 inferred-WGD tumours with one of the four annotated MAPK drivers, all carried *Braf* (one also carried *Hras*); two inferred-WGD tumours lacked an annotated MAPK driver. These tumours were enriched for aneuploidy and copy-number alteration. The co-occurrence supports a background–driver association and motivated the authors' telomere-crisis hypothesis, but no telomere or mitosis perturbation established causality [^aitken2026].

### 3. Oncogenic pathway convergence concealed background-specific driver choice

Across all 581 tumours, **550 (94.7%, rounded to 95%) carried at least one probable activating mutation in a RAS–MAPK gene**. The reported gene-level counts were *Braf* (252 tumours), *Hras* (224), *Egfr* (84) and *Kras* (21). Those counts sum to 581 because 31 tumours carried two of these MAPK genes while a different 31 carried none; they are not four mutually exclusive groups. The drivers were strongly but not perfectly mutually exclusive, supporting common pathway-level selection across the four genomes [^aitken2026].

The route into that pathway nevertheless differed markedly:

- MAPK driver-gene frequencies varied by background (χ² **P = 6.59 × 10⁻¹⁴**).
- Among *Hras* drivers, the Q61 amino-acid substitution varied by background (χ² **P = 2.69 × 10⁻⁶**); Q61L was entirely absent from BL6 despite occurring in the other backgrounds.
- C3H tumours typically needed a median of **one** identified driver, whereas BL6, CAST and CAROLI typically carried at least two (**P = 1.97 × 10⁻¹³**, C3H versus the other backgrounds).
- Driver preferences could not be explained by local sequence divergence, modeled mutation spectra, mutation burden, transcription-coupled repair, litter or shared animal environment.

The authors proposed BL6-specific presentation of an HRAS-Q61L neoepitope as one possible reason that this driver was absent in BL6, but computational immune-presentation predictions did not explain the broader pattern and provided little support for immune editing as the general mechanism [^aitken2026].

### 4. Somatic drivers and inherited background interacted epistatically

Tumour transcriptomes shared a broadly conserved core MAPK response, despite the different drivers and backgrounds. Independent-component analysis nevertheless identified non-additive driver-by-background interactions in gene-expression programs, especially:

- IC11: [[p53-pathway|p53 cellular-stress signalling]];
- IC16: PPAR and [[tgf-beta|TGF-β signalling]];
- IC15: xenobiotic metabolism.

For example, *Braf*-driven CAST tumours were more enriched for the IC16 program than *Braf*-driven C3H tumours, whereas *Egfr*-driven tumours showed the opposite background ordering. Thus, the same somatic driver did not impose the same downstream state on every inherited genome [^aitken2026].

Some transcriptional programs, unlike genome stability and driver choice, were coordinated within animals or litters. The clearest was a circadian-rhythm signature associated with tumour-collection time, showing that the nested design could detect shared-environment effects when present [^aitken2026].

### 5. Background changed the earliest clonal-selection dynamics

Persistent DEN lesions generated multiallelic sites whose chromosome-scale distribution allowed inference of the tumour's most recent common ancestor (MRCA) generation after mutagenesis. All backgrounds produced some tumours whose MRCA was a first-generation daughter of the damaged cell—an "instant transformation" pattern retaining much of the early combinatorial diversity [^aitken2026].

C3H tumours were much more likely to have a first-generation MRCA; other backgrounds usually had later MRCAs (**P = 6.6 × 10⁻⁹**, C3H versus pooled others). Among the 390 tumours in the Fig. 5 source data that were analyzable for post-MRCA growth, **107/390 (27.4%)** rejected the uniform-growth model: C3H 85/280 (30.4%), BL6 7/26 (26.9%), CAST 11/50 (22.0%) and CAROLI 4/34 (11.8%). The paper's **23 ± 8%** is the unweighted mean ± standard deviation of these four strain percentages, not the proportion of all 581 tumours; between-strain differences were not significant. The authors therefore interpreted the background effect mainly as differential **loss of lineages very early after mutagenesis**, rather than more frequent post-MRCA selective sweeps, but this conclusion is model-based [^aitken2026].

## What the study establishes for aging biology

1. **Mutation burden is not phenotypic destiny.** The most cancer-susceptible background did not have the highest mutation burden; transformation threshold, driver compatibility and early lineage survival were more discriminating.
2. **Germline–somatic epistasis is experimentally demonstrable.** An acquired driver can produce different transcriptional and evolutionary consequences depending on inherited background. This adds an important modifier to simple mutation-count models of [[genomic-instability]].
3. **Telomere state may route damaged cells into different genome-instability modes.** Short CAROLI telomeres coincided with a specific *Braf*-associated whole-genome-duplication trajectory, connecting [[telomere-attrition]] to secondary aneuploidy without proving causality.
4. **Cancer evolution can converge at pathway level while diverging at mutation level.** RAS–MAPK activation was nearly universal, but the selected gene, allele, number of drivers and clonal history depended on background.

The paper does **not** test whether somatic mutations drive organismal aging, limit lifespan, or cause non-neoplastic age-related dysfunction. Its strongest aging-wiki use is as a modifier study for the [[somatic-mutation-accumulation]] → [[cancer]] relationship, not as direct evidence for a general somatic-mutation theory of aging.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Core DNA-damage, repair and RAS–MAPK biology conserved? | yes | DEN adduct processing, MAPK driver selection, aneuploidy and whole-genome duplication have human analogues, but this study did not test conservation in human samples. |
| Liver-tumour phenotype conserved? | partial | DEN produces hepatocyte-derived lesions resembling human [[hepatocellular-carcinoma]], but the exposure, developmental timing and driver spectrum are model-specific. |
| Polygenic diversity relevant to human ancestry? | partial | The mouse panel spans variation comparable to or exceeding that between human ancestry groups, but CAROLI is a separate species and four fixed backgrounds cannot represent human population structure. |
| Replicated in humans? | no | Human ancestry-associated driver frequencies and whole-genome duplication are consistent contextual observations, not a controlled replication of these causal effects. #gap/needs-human-replication |

## Limitations

- **Male-only neonatal model.** All DEN-treated animals were male and exposed at postnatal day 15. Sex-by-background effects and adult or old-age exposure were not tested. #gap/needs-replication
- **One acute carcinogen and one tissue.** A single high-intensity DEN exposure in liver may not generalize to chronic endogenous damage, other carcinogens, other tissues or spontaneous age-associated tumour evolution. #gap/needs-human-replication
- **Background and collection age are coupled.** Tumours were harvested at 25–78 weeks after DEN depending on background. This enabled comparison at a pilot-defined 100% macroscopic-incidence endpoint but makes age and background inseparable for some molecular features, including telomeres. The paper's "latency" is a strain-level proxy, not an individually observed time-to-tumour outcome.
- **Main analysis selected homogeneous dysplastic nodules.** All 581 main-analysis tumours were dysplastic nodules; 16 sequenced DEN-induced hepatocellular carcinomas were released but excluded, as were heterogeneous, necrotic and low-cellularity lesions. This improves variant calling but narrows generalizability to later and more complex disease.
- **Non-randomized induction.** DEN treatment was not randomized or blinded, although exposure was standardized and histopathology was blinded. The principal comparisons were between inbred backgrounds rather than DEN versus vehicle.
- **Unequal sample contribution.** C3H contributed 370 of 581 tumours and incorporated a previously generated cohort. The analyses modeled the animal–litter hierarchy, but numerical dominance and cohort/batch differences remain relevant.
- **Some mechanisms are inferred.** Whole-genome duplication was inferred from mutational symmetry, variant allele frequency and nuclear size rather than directly observed during the first mitosis; telomere crisis and BL6-specific immune editing were mechanistic interpretations, not experimentally perturbed causes. #gap/no-mechanism
- **MRCA and post-MRCA selection are model-derived.** MRCA generation assumes independent dilution of lesion-containing strands, and the dispersion test depends on detectable multiallelic windows. Simulations showed that very strong subclonal sweeps can fall below detection and be classified as a later MRCA. Figure 5 and its source data report 390 analyzable tumours, whereas the Methods text says 389.
- **Four backgrounds are not human populations.** The design proves that inherited background can redirect tumour evolution under controlled conditions; it does not quantify the effect size of ancestry in humans or justify applying any strain-specific driver preference clinically. #gap/needs-human-replication

## Data and reproducibility

The article is open access under CC BY 4.0. New datasets include ENA whole-genome sequencing accession **PRJEB15138**, ArrayExpress RNA-seq **E-MTAB-16391**, BioImage Archive whole-slide images **S-BSST384**, ArrayExpress ChIP–seq **E-MTAB-14454**, and ArrayExpress ATAC-seq **E-MTAB-14144**. Previously published C3H/CAST data were also reanalysed. The authors provide the analysis pipeline and environment configuration through the repository named in the article's Code availability section [^aitken2026].

## Related pages

- [[genomic-instability]] — genetic background modifies mutation processing, genome duplication and aneuploidy.
- [[processes/somatic-mutation-accumulation]] — mutation count alone did not predict susceptibility; inherited background modified selection.
- [[telomere-attrition]] — CAROLI short telomeres coincided with an inferred early whole-genome-duplication route.
- [[ras-mapk]] — nearly universal pathway-level convergence with background-specific driver and allele choice.
- [[cancer]] — controlled evidence for polygenic germline–somatic epistasis in cancer evolution.
- [[hepatocellular-carcinoma]] — model-specific liver-cancer relevance and translation limitations.
- [[model-organisms/mus-musculus]] — background choice materially changed cancer susceptibility and evolutionary trajectory.

## Footnote

[^aitken2026]: [[studies/aitken-2026-genetic-background-cancer-evolution]] · n=215 DEN-treated male mice (110 litters; 4 genetic backgrounds), 581 independently arising dysplastic liver nodules in the main analysis · in-vivo · model: *Mus musculus domesticus* C3H/HeOuJ and C57BL/6J, *M. musculus castaneus* CAST/EiJ, and *Mus caroli* CAROLI/EiJ; single DEN 20 mg/kg intraperitoneal at postnatal day 15 · matched histology, WGS, tumour RNA-seq and normal-liver regulatory profiling · doi:10.1038/s41586-026-10821-z · PMID 42486977.
