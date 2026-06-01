---
type: model-organism
species-name: Canis lupus familiaris
common-name: dog
aliases: [Canis familiaris, domestic dog, canine]
ncbi-taxonomy: 9615
typical-lifespan: "10–13 years (median across breeds); 6–8 yr giant breeds; 14–18 yr small breeds"
lifespan-ratio-to-human: "~7–9× shorter than human (breed-dependent)"
genome-similarity-to-human: ~85%
genome-size-mb: 2410
adult-cell-count: null
itp-validated: no
key-strengths: [co-housed-exposome, within-species-breed-size-lifespan-tradeoff, naturally-occurring-aging-pathologies, large-cohort-clinical-studies, fda-regulatory-precedent, lifespan-ratio-enables-longitudinal-studies]
key-divergences: [breed-genetic-bottlenecks, body-size-lifespan-inverted-vs-mammals-generally, diet-and-husbandry-confounded, reproductive-status-confounded, gh-igf1-axis-magnitude-uncertain]
literature-checked-through: 2026-05-14
verified: true
verified-date: 2026-05-14
verified-by: claude
verified-scope: "Creevy 2022, TRIAD 2025, Kraus 2013, Urfer 2017, Urfer 2020, Harrison 2026, Jiménez 2024 verified against local PDFs; Greer 2007 verified against PubMed abstract (closed-access, not_oa — full PDF unavailable); Sutter 2007 download failed (Science paywall) — haplotype claim and citation count checked against DOI lookup only, not full PDF; Loyal RXE/TAS dates verified against official Loyal press releases"
---


# *Canis lupus familiaris* — domestic dog

The domestic dog is an emerging aging-research organism with three properties that no other mammal simultaneously offers: **(1) the breed-size lifespan paradox** — a within-species inversion of the mammalian body-size-vs-lifespan relationship that provides a natural experiment for the somatotropic-axis-vs-aging tradeoff; **(2) the co-housed exposome** — companion dogs share the same air, water, food supply, and social environment as their owners, removing the confounding environmental heterogeneity that plagues cross-species comparisons; and **(3) an active FDA regulatory pathway** — Loyal Inc.'s LOY-001 received the first-ever FDA "Reasonable Expectation of Effectiveness" (RXE) finding for a drug targeting lifespan extension in 2023, creating a regulatory precedent. The [[dog-aging-project]] (Creevy/Kaeberlein/Promislow) provides the field's largest enrolled longitudinal companion-animal cohort.

## Identity and resources

| Field | Value |
|---|---|
| Species | *Canis lupus familiaris* |
| NCBI Taxonomy ID | 9615 |
| AnAge max lifespan | ~29 years (exceptional individuals; data from BlueCross UK registry) |
| Typical lifespan | 10–13 yr median (varies strongly by breed and body size) |
| Giant breeds (Great Dane, Mastiff) | ~6–8 yr median |
| Small breeds (Chihuahua, Yorkshire Terrier) | ~14–18 yr |
| Genome assembly | CanFam3.1 / Dog10K_Boxer_Tasha / ROS_Cfam_1.0 (2021 reference) |
| Genome size | ~2,410 Mb |
| Genome similarity to human | ~85% (one-to-one ortholog level) |
| Key labs | Creevy/Kaeberlein/Promislow (Dog Aging Project, U Washington/Texas A&M); Greer/Sutter (breed-size genetics, NC State/NIH); Jiménez (canine aging hallmarks, Colgate); Halloran (veterinary geriatrics) |

## The breed-size lifespan paradox

**This is the central unique feature of the dog as a model organism.** Across mammals broadly, larger body size correlates with *longer* lifespan — elephants outlive mice; whales outlive dolphins. Within dogs, the relationship is **inverted**: the largest breeds (Great Danes, Mastiffs, Saint Bernards) have median lifespans of ~6–8 years, while the smallest breeds (Chihuahuas, Yorkshire Terriers, Toy Poodles) routinely live 14–18 years. This within-species inversion provides a **natural experiment for the somatotropic axis** that mammalian interspecies comparisons cannot replicate.

Greer, Canterberry, and Murphy (2007) established the statistical relationship across 77 AKC-registered breeds: weight was the strongest predictor of lifespan (r = −0.679, p<0.001; n>700 dogs), with height also inversely correlated (r = −0.603, p<0.05) [^greer2007]. The association is robust across registries and veterinary databases.

Kraus, Pavard, and Promislow (2013) decomposed the mechanism: large dogs die young **primarily because they age faster**, not because they have earlier senescence onset or higher baseline mortality [^kraus2013]. Analyzing mortality data from 74 breeds, they found a strong positive association between body mass and the *rate* of aging — large dogs accelerate through the same aging trajectory at higher speed. This is mechanistically informative: it points toward a biological timer linked to body size rather than an early-life disease burden.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — GH/IGF-1 axis is conserved; within-human inter-individual variation of IGF-1 does not straightforwardly mirror the within-dog breed pattern |
| Phenotype conserved in humans? | no — humans with higher circulating IGF-1 in the normal range do not clearly age faster; within-species body-size-to-lifespan relationship in humans is modest and confounded |
| Replicated in humans? | no — within-species test is not possible in humans |

## The IGF-1 / GH axis hypothesis for breed-size lifespan

Sutter et al. 2007 (*Science*) performed a genome-wide association study across dog breeds and identified a single IGF1 haplotype on chromosome 15 as a **major quantitative trait locus** for small body size [^sutter2007]. The haplotype is nearly fixed in all small breeds and nearly absent from giant breeds (669 citations as of 2026). This paper established the molecular bridge from "body size" to "IGF-1 signaling" within the dog species.

The mechanism proposed: large breeds have higher circulating IGF-1, which drives faster growth, accelerated cellular turnover, and a more aggressively anabolic somatotropic axis throughout life. By the [[hyperfunction-theory]] logic ([[hypotheses/hyperfunction-theory]]), this sustained growth signaling past the reproductive window becomes pathological — accelerating [[deregulated-nutrient-sensing]], promoting cancer risk, and shortening lifespan. In this framing, the within-dog body-size-lifespan tradeoff is a **direct within-species replication** of the across-species evidence from GHR-/- (Laron) mice and Laron syndrome in humans: the same axis, the same direction, the same functional consequence.

This mechanistic hypothesis underlies Loyal Inc.'s drug pipeline (see below): LOY-001 and LOY-003 target circulating IGF-1 reduction specifically in large breeds.

Cross-references: [[igf-1]], [[insulin-igf1]], [[growth-hormone-receptor]], [[deregulated-nutrient-sensing]], [[hyperfunction-theory]].

**Key gap:** The exact circulating IGF-1 levels disaggregated by breed size, and their correlation with aging *rate* rather than just body size, have not been comprehensively characterized. The causal chain from elevated IGF-1 → accelerated aging within dogs is inferred, not directly demonstrated experimentally. #gap/needs-replication

## Active aging research programs

### Dog Aging Project (DAP)

The Dog Aging Project (DAP) is a large-scale longitudinal citizen-science cohort founded by Kate Creevy (Texas A&M), Matt Kaeberlein, and Daniel Promislow (University of Washington). Described formally in Creevy, Akey, Kaeberlein, Promislow et al. 2022 (*Nature*), the DAP enrolls companion dogs across the United States with owner-reported phenotypes, annual health surveys, veterinary record linkage, genomic sequencing, and biobanked blood and fecal samples [^creevy2022]. At the time of the 2022 *Nature* paper, over 30,000 canine owners had enrolled dogs [^creevy2022]; as of early 2026, DAP communications report more than 47,000 dogs enrolled, and the TRIAD protocol paper (2025) refers to "nearly 50,000 participating dog-owner pairs" [^triad2025].

Key translational strengths of the DAP design:
- Diverse genetic backgrounds spanning hundreds of breeds plus mixed-breed animals.
- Companion dogs share the owner's household exposome — diet, environment, social structure.
- Owner-reported phenotype data (cognitive function, physical activity, cancer, cardiovascular disease) enables epidemiologic analysis without a laboratory housing context.
- Blood and fecal biobanking enables multi-omic longitudinal analyses.

A 2026 study by Harrison, Akey, Snyder-Mackler, Raftery, Creevy, and Promislow (*J Gerontol A*, n=937 dogs, Precision Cohort) demonstrated that **dogs and humans share a conserved metabolomic signature of mortality**: the effect of individual plasma metabolites on all-cause mortality in humans was strongly correlated with their association with all-cause mortality in companion dogs [^harrison2026]. This validates dogs as a translational aging model at the molecular biomarker level.

### TRIAD — Test of Rapamycin In Aging Dogs

The TRIAD (Test of Rapamycin In Aging Dogs) trial is described in a 2025 *GeroScience* protocol paper by Coleman, Creevy et al. [^triad2025]. It is a prospective, parallel-group, double-masked, randomized, placebo-controlled, multicenter trial of rapamycin (sirolimus) in healthy companion dogs aged ≥7 years and weighing 20–55 kg, drawn from the Dog Aging Project. A total of 580 dogs are randomized (≈290 per arm). The trial uses lifespan and healthspan metrics as co-primary endpoints — described by the authors as "the first rigorous test of a pharmacologic intervention against biological aging with lifespan and healthspan metrics as endpoints to be performed outside of the laboratory in any species." The rapamycin dose is 0.15 mg/kg once weekly for 52 weeks, followed by a 24-month post-treatment monitoring period (total study duration 36 months) [^triad2025].

TRIAD was preceded by a 2017 pilot RCT (n=24 middle-aged dogs, 10 weeks) that showed improvement in age-related cardiac function (both diastolic and systolic measures) without clinical adverse effects at non-immunosuppressive rapamycin doses [^urfer2017]. The NIH provided a ~$7 million expansion grant for TRIAD in 2025 (per public announcements; not independently verified via academic source — #gap/needs-citation-verification).

Cross-references: [[rapamycin]], [[mtor-inhibitors]], [[mtor]], [[dog-aging-project]], [[triad-trial]].

**Current status (as of 2026-05-14):** TRIAD is actively enrolling; no interim results have been published. The protocol paper (DOI 10.1007/s11357-024-01484-7) is locally available in the academic archive and is the primary source for design details.

### Loyal Inc. — commercial longevity drug pipeline

Loyal Inc. (San Francisco, CA; CEO Celine Halioua) is pursuing veterinary pharmaceutical development targeting canine lifespan extension, with a three-drug pipeline disclosed to date. Loyal has **not** publicly disclosed active pharmaceutical ingredients for any of its drugs; mechanism claims below are inferences from public regulatory filings, press releases, and independent analysis (notably the FIRE substack analysis by Doc), and should be treated as speculative. Use `#gap/no-disclosure` for API identity.

| Drug | Target population | Suspected mechanism | Formulation | FDA status |
|---|---|---|---|---|
| LOY-001 | Large/giant breeds (>40 lb) | IGF-1 reduction (suspected somatostatin-pathway agent or anti-IGF-1 antisense oligonucleotide; API not disclosed) #gap/no-disclosure | Injectable, estimated quarterly | RXE complete Nov 2023 — FIRST FDA RXE for lifespan extension in any species |
| LOY-002 | Dogs ≥10 years weighing ≥14 lb (any size) | Metabolic dysfunction targeting (strongly suspected PPARα agonist / fenofibrate analog per independent analysis; API not disclosed) #gap/no-disclosure | Daily oral | RXE accepted Feb 26, 2025; TAS accepted Jan 13, 2026 |
| LOY-003 | Large/giant breeds (daily alternative to LOY-001) | IGF-1 reduction; mechanism same suspected class as LOY-001 (API not disclosed) #gap/no-disclosure | Daily oral | Earlier-stage; regulatory status not publicly confirmed as of 2026-05-14 |

**FDA RXE regulatory note:** The FDA's "Reasonable Expectation of Effectiveness" (RXE) conditional approval pathway for veterinary drugs does not require the same evidence standard as full drug approval. For novel claims (lifespan extension), RXE means the FDA found the preclinical mechanistic and efficacy data "reasonably expected" to support effectiveness — not that effectiveness has been demonstrated in a completed clinical trial. Loyal must complete confirmatory studies for full approval. The LOY-001 RXE is nonetheless a **regulatory precedent with significant implications for human longevity drug development**: it establishes that a government agency can evaluate and issue a positive finding on a lifespan extension claim.

No peer-reviewed primary literature from Loyal's LOY-001/002/003 preclinical programs has been published as of 2026-05-14. #gap/needs-citation-verification

## Conserved systems (vs. human)

The dog shares the following aging-relevant systems with humans at a level that supports translational inference:

**Co-housed exposome.** Companion dogs and their owners share the same household air, water supply, dietary patterns (via shared food culture and household food access), circadian schedules, and social structure. This is a unique translational advantage: when a study links a dietary or environmental factor to aging outcomes in companion dogs, the confounding from environmental heterogeneity is substantially reduced compared to laboratory-housed animals on standardized chow, or to cross-species comparisons where environmental exposure is unknown.

**Spontaneous age-associated disease.** Dogs develop naturally-occurring forms of the major human age-associated diseases: canine cognitive dysfunction (CCD) with amyloid pathology, tau pathology, and cortical atrophy resembling Alzheimer's-spectrum dementia; canine osteoarthritis with cartilage degradation kinetics similar to human OA; canine diffuse large B-cell lymphoma with overlapping driver mutations to human DLBCL; and spontaneous diabetes, cardiovascular disease, and kidney disease. These are not induced by genetic manipulation or xenobiotic exposure — they arise in the normal life course of aging companion animals.

**GH/IGF-1 and mTOR axes.** These canonical aging pathways are conserved in dogs. The IGF-1/GH → mTOR → nutrient sensing axis ([[insulin-igf1]], [[mtor]]) operates in dogs as in other mammals, and dogs are pharmacologically responsive to rapamycin (mTOR inhibitor) as shown in the pilot TRIAD data [^urfer2017].

**Metabolomic aging signatures.** The Harrison et al. 2026 finding (n=937 DAP dogs) of a conserved metabolomic mortality signature between dogs and humans is direct evidence that at least the plasma metabolomic landscape of aging-associated mortality is shared [^harrison2026].

**Veterinary geriatrics.** Established veterinary geriatrics infrastructure (clinical assessment tools, FAST scale, canine frailty index) enables standardized health-span phenotyping in large cohorts.

## Divergent systems / extrapolation caveats

### Within-species body-size-lifespan relationship is inverted versus the mammalian-wide pattern

The within-dog breed pattern (large = shorter lifespan) is the opposite of the mammalian-wide pattern (large = longer lifespan across species). This means the **IGF-1 breed-size-lifespan finding is specifically a within-species phenomenon** driven by selective breeding compressing the normal allometric biology. The finding cannot be used to argue that higher circulating IGF-1 causes shorter lifespan in humans directly from within-dog data alone — the inference requires the corroborating evidence from Laron syndrome, GHR-/- mice, and centenarian genetics. #gap/contradictory-evidence (apparent contradiction with mammalian-wide allometry requires careful framing)

### Breed-level genetic bottlenecks

Modern dog breeds are products of intensive selective breeding that created severe genetic bottlenecks within each breed — high inbreeding coefficients, small effective population sizes, and breed-specific allele fixations. This means dogs within a breed are genetically far less diverse than humans within any continental ancestry group. Breed-specific aging trajectories may reflect founder effects and breed-specific pathological alleles (e.g., hip dysplasia genes in German Shepherds, BOAS in Bulldogs) rather than fundamental aging biology. Mapping across breeds is required, and pure-breed data must be interpreted with breed genetics in mind.

### Diet and husbandry confounded by owner behavior

Unlike laboratory animals on standardized chow, companion dogs' diets, exercise levels, and veterinary care access are determined by their owners. These are highly correlated with owner socioeconomic status, age, and health behaviors — creating confounding pathways between "dog outcomes" and "owner behaviors" that are difficult to disentangle. The DAP explicitly attempts to control for this through owner surveys, but residual confounding is substantial [^creevy2022].

### Reproductive status confounding

Spay/neuter status is a major lifespan confounder in companion dogs. The Urfer et al. 2020 study (n=20,970 dogs across 3 US primary care veterinary clinics) found that gonadectomy was associated with longer lifespan, with the survival advantage being statistically significant in females but not independently significant in males after correcting for weight and clinic [^urfer2020]. Most companion dogs in North American cohorts are spayed or neutered, whereas wild/working-dog populations and breeding lines are typically intact. This splits the cohort along a reproductive-status axis that interacts with the hormonal environment in ways that complicate interpretation of lifespan outcomes.

### GH/IGF-1 axis magnitude uncertain in the translational direction

The quantitative IGF-1 differences between large and small dog breeds have not been comprehensively characterized in a way that maps to aging-rate endpoints. The causal inference from "large breeds have shorter lifespans" → "elevated IGF-1 causes accelerated aging" is biologically plausible and mechanistically grounded, but intermediate measurements (circulating IGF-1 by breed across life course, cellular mTOR activity, FOXO localization) are sparse. #gap/needs-replication

## Strengths summary

1. **Co-housed exposome.** The strongest translational argument for the dog model: environmental confounders are minimized because dogs share the human household. Studies linking diet, environment, or social factors to aging outcomes in companion dogs are far more interpretable than cross-species comparisons.

2. **Within-species breed-size natural experiment.** The ~2–3-fold lifespan difference between giant and small breeds, mapped to a single IGF1 haplotype, provides a within-species test of the somatotropic-axis-vs-aging tradeoff that mouse and human data cannot replicate. Mechanistic manipulations (Loyal LOY-001/003; TRIAD rapamycin) can be tested in this natural experiment.

3. **Naturally occurring aging pathologies.** Canine cognitive dysfunction, osteoarthritis, lymphoma, and other spontaneous age-associated diseases occur at high rates in aged companion dogs and closely mirror human disease phenomenology — without genetic engineering or artificial induction.

4. **Large enrolled cohorts.** The Dog Aging Project has enrolled >47,000 companion dogs with longitudinal owner-reported phenotyping, biobanking, and multi-omic characterization. This is a scale unmatched in any laboratory aging model.

5. **FDA regulatory precedent.** LOY-001's RXE establishes that a government regulatory agency can formally evaluate and positively find a drug's "reasonable expectation of effectiveness" for a *lifespan extension* claim. This precedent has downstream implications for the regulatory path for human longevity drugs.

6. **Lifespan ratio enables longitudinal studies.** At ~7–9× shorter lifespan than humans, a dog aging study from middle age (5–6 years) to natural death can be completed in 5–10 years — practical for a research program, unlike primate or human studies.

## Failure modes / known translation pitfalls

**Breed-specific pathologies may confound aging outcomes.** Giant breeds (Great Danes, Irish Wolfhounds) have elevated rates of dilated cardiomyopathy and osteosarcoma — breed-specific disease burdens that may be responsible for a significant fraction of their shorter lifespans independent of fundamental aging rate. The Kraus 2013 decomposition suggests accelerated aging rate is the primary driver, but breed-specific disease has not been fully separated from the aging-rate signal. #gap/needs-replication

**Spay/neuter status creates cohort stratification.** North American companion-dog cohorts are predominantly spayed/neutered (>80% in most DAP analyses), while European and working-dog populations are predominantly intact. This geographic and cultural split complicates cross-cohort comparisons. Hormonal environment differences (intact vs. castrated) may interact with aging-rate mechanisms.

**No ITP equivalent.** The NIA Interventions Testing Program (ITP) — the multi-site pre-specified laboratory lifespan test that validated rapamycin, acarbose, and other compounds in mice — does not operate in dogs. TRIAD is the first multi-site prospective pharmacological lifespan trial in dogs, and it is ongoing. Dog-aging intervention claims before TRIAD results will lack the ITP-equivalent validation standard. #gap/needs-replication

**Owner attrition and selection bias.** Companion-dog cohorts are subject to attrition by owner death, relocation, and economic barriers to veterinary care. Healthier and more affluent owners may be more likely to enroll and remain enrolled — creating selection bias in the direction of underestimating morbidity and overestimating longevity in the cohort.

**Commercial pipeline lacks peer-reviewed data.** The Loyal LOY-001/002/003 programs have generated sufficient regulatory evidence for FDA RXE findings but have not published peer-reviewed primary preclinical literature. The mechanistic claims about LOY-001/003 (IGF-1 reduction) and LOY-002 (metabolic improvement) are inferences, not confirmed published findings. #gap/needs-citation-verification

## Hallmarks of aging expression in the dog

The Jiménez 2024 review in *GeroScience* synthesized the current status of aging hallmarks research in domestic dogs across ten domains [^jimenez2024]:

| Hallmark | Dog evidence quality | Notes |
|---|---|---|
| [[genomic-instability]] | Limited | Accumulation of DNA damage in aged dogs documented; limited mechanistic detail |
| [[telomere-attrition]] | Moderate | Telomere shortening with age in dogs confirmed; rate differs by breed size (larger breeds shorten faster) |
| [[epigenetic-alterations]] | Moderate-strong | Canine methylation clocks developed; accelerated epigenetic aging in large breeds |
| [[loss-of-proteostasis]] | Limited | Evidence in aged dog tissue; few mechanistic studies |
| [[deregulated-nutrient-sensing]] | Strong | IGF-1/GH axis as breed-size determinant; mTOR conserved; rapamycin pharmacologically effective |
| [[mitochondrial-dysfunction]] | Limited | Some evidence in aged dog muscle; less characterized than rodent models |
| [[cellular-senescence]] | Moderate | Senescent cells detected in aged dog tissues; p16 expression age-associated |
| [[chronic-inflammation]] | Moderate | Inflammaging markers increase with age in dogs; parallels to human CRP/IL-6 patterns |
| [[stem-cell-exhaustion]] | Limited | Hematopoietic and mesenchymal stem cell aging studied; limited data |
| Dysbiosis | Emerging | Microbiome shifts with age in dogs; breed-size differences in gut microbiome composition |

#gap/needs-replication (most hallmarks in dogs have limited mechanistic characterization compared to mouse or human)

## Limitations and gaps

- `#gap/needs-replication` — The causal chain from elevated circulating IGF-1 → accelerated aging rate within dogs is inferred from the body-size-lifespan correlation and the IGF1 haplotype genetics; no direct interventional evidence within dogs (TRIAD tests mTOR inhibition, not IGF-1 directly).
- `#gap/no-disclosure` — Loyal LOY-001, LOY-002, LOY-003 active pharmaceutical ingredients are not publicly disclosed; mechanism claims are speculative.
- `#gap/needs-citation-verification` — TRIAD NIH ~$7M expansion grant (2025); Loyal LOY-003 regulatory status; LOY-001/002/003 preclinical data. These are referenced from public announcements and secondary sources, not peer-reviewed papers. Note: LOY-002 TAS acceptance date is January 13, 2026 per Loyal's official press release (not December 2025 as initially drafted).
- `#gap/long-term-unknown` — TRIAD lifespan results are pending; no long-term pharmacological intervention data in dogs as of 2026-05-14.
- `#gap/needs-replication` — Breed-specific disease burden vs. fundamental aging rate contribution to giant-breed shorter lifespan; the Kraus 2013 decomposition should be replicated with larger and more breed-diverse datasets.
- `#gap/contradictory-evidence` — Within-dog body-size-lifespan inversion vs. mammalian-wide positive body-size-lifespan scaling; the within-species finding does not necessarily transfer to human inter-individual IGF-1 variation.

## See also

- [[dog-aging-project]] — longitudinal companion-dog cohort; enrollment design; Creevy/Kaeberlein/Promislow
- [[triad-trial]] — TRIAD protocol; rapamycin in middle-aged medium-to-large dogs; pending lifespan results
- [[rapamycin]] — mTOR inhibitor; TRIAD intervention; NIA ITP-validated in mice
- [[mtor-inhibitors]] — drug class; TRIAD context
- [[mtor]] — conserved in dogs; TRIAD mechanistic target
- [[igf-1]] — IGF-1 ligand; circulating level correlates with breed size
- [[insulin-igf1]] — IIS pathway; somatotropic axis; primary mechanistic hypothesis for breed-size-lifespan tradeoff
- [[growth-hormone-receptor]] — GH/IGF-1 axis; Laron syndrome parallel; Loyal LOY-001/003 upstream target
- [[deregulated-nutrient-sensing]] — hallmark; IIS/mTOR hyperactivation; dog breed-size data is a within-species replicate
- [[hyperfunction-theory]] — evolutionary/mechanistic frame explaining why sustained GH/IGF-1 signaling shortens lifespan
- [[hypotheses/hyperfunction-theory]] — hypothesis page; breed-size paradox as supporting evidence
- [[cellular-senescence]] — hallmark; p16-positive senescent cells in aged dogs
- [[chronic-inflammation]] — hallmark; inflammaging markers in aged companion dogs
- [[mus-musculus]] — primary mammalian aging model comparator; ITP-validated; transgenic toolkit
- [[heterocephalus-glaber]] — extreme-longevity comparator; ~10× longer than predicted; cancer resistant
- [[_extrapolation-guide]] — rubric for model→human extrapolation; apply before using dog data in human inference
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis on why model-organism interventions systematically underperform in humans (companion-dog data is intermediate between lab mouse and human cohort — partly evades lab-mouse confounds)

---

[^greer2007]: doi:10.1016/j.rvsc.2006.06.005 · Greer KA, Canterberry SC, Murphy KE · observational · n>700 dogs, 77 AKC breeds · weight best predictor of lifespan (r=−0.679, p<0.001); height r=−0.603 (p<0.05) · model: *Canis lupus familiaris* domestic breeds; closed-access (not_oa) #gap/no-fulltext-access

[^kraus2013]: doi:10.1086/669665 · Kraus C, Pavard S, Promislow DEL · observational · n=74 breeds · large dogs die young primarily due to accelerated aging rate (not earlier senescence onset or higher baseline mortality) · model: *Canis lupus familiaris* breed mortality data; OA via HAL

[^sutter2007]: doi:10.1126/science.1137045 · Sutter NB, Bustamante CD, Chase K et al. · observational + GWAS · genome-wide association; single IGF1 haplotype (chr15) near-fixed in small breeds, absent in giant breeds; major QTL for small size · model: *Canis lupus familiaris* breed genetics; 669 citations; download pending

[^creevy2022]: doi:10.1038/s41586-021-04282-9 · Creevy KE (Texas A&M), Akey JM (Princeton), Kaeberlein M (U Washington), Promislow DEL (U Washington) and DAP Consortium · observational cohort · longitudinal open-science companion-dog cohort; >30,000 dogs enrolled at time of publication (Dec 2020 DAP Pack data); 5 nested cohorts (Pack, Foundation, Precision, TRIAD, Centenarian); owner-reported phenotypes via HLES survey, electronic veterinary records, biobanked blood/fecal/hair/urine samples, low-coverage WGS; data shared via Terra platform (Broad/MIT-Harvard) · model: *Canis lupus familiaris* companion dogs, USA; *Nature* 2022 (602:51–57); local PDF available via a local paper archive

[^triad2025]: doi:10.1007/s11357-024-01484-7 · Coleman AE, Creevy KE et al. and DAP Consortium · study protocol · PMID 39951177; PMC OA at https://www.ncbi.nlm.nih.gov/pmc/articles/12181551 · prospective DBRPCT; N=580 randomized (≈290/arm); rapamycin 0.15 mg/kg once weekly for 52 weeks vs. placebo; eligibility: ≥7 yr, 20–55 kg, reproductively sterilized; lifespan + healthspan co-primary endpoints; 36-month total study duration; conducted at 8 veterinary teaching hospitals + 11 non-academic specialty practices; described as "first rigorous pharmacologic test against biological aging with lifespan endpoints outside the laboratory in any species" · *GeroScience* 2025; local PDF available via a local paper archive

[^urfer2017]: doi:10.1007/s11357-017-9972-z · Urfer SR, Kaeberlein TL, Mailheau S, Bergman PJ, Creevy KE, Promislow DEL, Kaeberlein M · randomized placebo-controlled (3-arm: placebo, 0.05 mg/kg, 0.1 mg/kg rapamycin 3×/week) · n=29 randomized; 24 completed per-protocol (n=8 placebo, n=5 low rapa, n=11 high rapa); 10-week treatment in dogs ≥6 yr, ≥18 kg; improved fractional shortening (systolic; p=0.036 linear model) and E/A ratio (diastolic; p=0.045 Wilcoxon) in rapamycin-treated dogs vs. placebo; no clinical adverse effects; significant decrease in MCV in rapamycin group · model: *Canis lupus familiaris* companion dogs, greater Seattle area; GeroScience 2017 (39:117–127); 170 citations; local PDF available via a local paper archive

[^urfer2020]: doi:10.1186/s40575-020-00086-8 · Urfer SR, Kaeberlein M, Promislow DEL, Creevy KE · observational · n=20,970 privately owned dogs from 3 independent US primary care veterinary clinics; Kaplan-Meier + Cox proportional hazards; overall MST=15.4 yr (95% CI 15.2–15.7); gonadectomy associated with longer lifespan (stronger in females); larger body size correlated with shorter lifespan; no significant lifespan difference between purebred and mixed-breed dogs; Mountain ancestral group had 3.5–4.6 yr shorter MST than other groups · model: *Canis lupus familiaris*; *Canine Medicine and Genetics* 2020 (7:7); OA gold; local PDF available via a local paper archive

[^harrison2026]: doi:10.1093/gerona/glaf279 · Harrison BR, Akey JM, Snyder-Mackler N, Raftery D, Creevy KE, Promislow DEL and DAP Consortium · observational · n=937 dogs (DAP Precision Cohort); LC-MS plasma metabolomics (133 metabolites); 23 metabolites associated with all-cause mortality at FDR≤5%; sign of hazard concordant between dogs and humans in 64% of shared metabolites (Fisher's p=9.3×10⁻⁹); HR correlation between dogs and 9 human cohorts: Pearson r=0.52 (p=8.9×10⁻⁸); 104 deaths over mean 2.6-yr follow-up · model: *Canis lupus familiaris* vs. human; *J Gerontol A* 2026 (81(4):glaf279); published 2025-12-22; OA; local PDF available via a local paper archive

[^jimenez2024]: doi:10.1007/s11357-023-00911-5 · Jiménez AG · review · *GeroScience* 2024 (Vol 46, pp. 241–255); published online 2023-08-18; 18 citations; synthesizes dog aging hallmarks literature across 10 domains (genomic instability, telomere attrition, epigenetic alterations, loss of proteostasis, deregulated nutrient sensing, mitochondrial dysfunction, cellular senescence, stem cell exhaustion, altered intercellular communication, microbiome); identifies research gaps · model: *Canis lupus familiaris*; OA via PMC
