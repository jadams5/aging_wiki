---
type: study
doi: 10.1038/s41586-021-04282-9
pmid: 35110758
pmc: PMC8940555
title: "An open science study of ageing in companion dogs"
authors: [Creevy KE, Akey JM, Kaeberlein M, Promislow DEL, Dog Aging Project Consortium]
year: 2022
journal: Nature
volume: 602
issue: 7895
pages: 51-57
study-design: observational
organism: canis-lupus-familiaris
n-subjects: null   # enrolling cohort; Creevy 2022 reports >30,000 at Dec 2020 snapshot (verified against PDF); TRIAD 2025 protocol paper refers to "nearly 50,000" (see body)
intervention: []   # observational; no intervention arm in this paper (TRIAD is the intervention arm — see [[triad-trial]])
hallmarks-tested: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]", "[[epigenetic-alterations]]", "[[cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: protocol-published   # DAP operates under the published Creevy 2022 study protocol
key-findings: [cohort-design-published, open-science-citizen-science-model, owner-reported-phenotype-validation, biobank-infrastructure, breed-stratified-cohort, precision-cohort-nested]
local-pdf: null
aliases: [dog-aging-project, DAP, Dog Aging Project]
verified: false
verified-date: null
verified-by: null
literature-checked-through: 2026-05-14
---

> ⚠️ Auto-extracted by Claude on 2026-05-14. Verify quantitative claims and source attributions against primary sources. Cohort enrollment numbers grow continuously; verify against most-recent DAP publications before quoting.

# Dog Aging Project — program anchor page

**Primary citation:** Creevy, Akey, Kaeberlein, Promislow et al. — *Nature* 2022; doi:10.1038/s41586-021-04282-9

## TL;DR

The **Dog Aging Project (DAP)** is a large-scale, open-science, citizen-science longitudinal cohort study of aging in companion dogs, founded by Kate Creevy (Texas A&M), Matt Kaeberlein, and Daniel Promislow (University of Washington), with initial funding from the NIA. The Creevy 2022 *Nature* paper is the **foundational program design paper**, not a single-experiment results paper — it describes the study rationale, two-tier cohort architecture (Pack vs. Precision), sampling strategy, biospecimen and data infrastructure, and the open-data philosophy. DAP is simultaneously:

- A **cohort study** (longitudinal owner-reported phenotype + veterinary record linkage)
- A **biobank** (blood, fecal, DNA, RNA, methylation arrays from the Precision sub-cohort)
- An **open-data resource** (data accessible to the research community)
- The **host program for the [[triad-trial]]** (rapamycin intervention arm)

**Enrollment trajectory (verified primary-source figures):** Creevy et al. 2022 reports **>30,000 enrolled at Dec 2020 snapshot** in the foundational *Nature* paper [^creevy2022]. The TRIAD 2025 protocol paper (Coleman & Creevy) references **"nearly 50,000"** in its background section [^triad2025]. Secondary sources (DAP website, news coverage) cite intermediate figures (~47,000); these are not independently verified against published DAP outputs. The cohort is the **largest enrolled longitudinal companion-animal aging study in history**. Subsequent publications have used DAP data to characterize metabolomic mortality signatures, epigenetic aging clocks, multimorbidity networks, and Alzheimer's-relevant biomarker platforms in dogs.

## Cohort design and enrollment

The Creevy 2022 paper established a **two-tier architecture**:

### Pack Cohort

The Pack Cohort is the broad enrollment arm — open to any owner of a companion dog in the United States who registers via the DAP citizen-science portal. Enrollment involves:

- Annual owner-reported health and environment surveys (Health and Life Experience Survey, HLES)
- Consent to veterinary record access
- Optional participation in ancillary studies

This cohort provides **epidemiologic scale**: tens of thousands of dogs with longitudinal owner-reported phenotype data and heterogeneous genetic backgrounds. The trade-off is that molecular data (biospecimens, omics) are not routinely collected from Pack Cohort participants.

### Precision Cohort

The Precision Cohort is a **nested, intensively-phenotyped sub-cohort** of approximately 1,000 dog-owner pairs recruited from Pack Cohort participants with additional inclusion criteria. Described formally in Prescott et al. 2025 (*GeroScience*) [^prescott2025]:

- n=976 dogs with complete biospecimen collection at enrollment
- Longitudinal annual clinic visits with standardized physical examinations, blood draws, urine, fecal, and hair samples
- Immunophenotyping, metabolite quantification, microbiome characterization, and epigenomic profiling
- Biospecimen banking for long-term multi-omic longitudinal analyses
- Data hosted on Terra (open-access cloud platform)

The Precision Cohort is the source for the Harrison 2026 metabolomics mortality paper and the McCoy 2024 epigenetic clock work.

### Sampling strategy and diversity

Dogs are enrolled across the US with no geographic restriction. The cohort spans:

- Pure breeds and mixed-breed animals (DAP deliberately includes mixed-breed to avoid breed-specific bottleneck confounding)
- A wide body-size range (from small to giant breeds), enabling within-cohort size-lifespan analyses
- Dogs living with their owners in household environments — providing the co-housed exposome translational advantage over laboratory-housed animals

Enrollment is **not** random — owners self-select to participate, introducing affluence and health-consciousness selection bias that must be accounted for in analyses (see Limitations).

## Biobank and biospecimens

The Precision Cohort biobank infrastructure collects:

| Biospecimen | Primary use |
|---|---|
| Whole blood / PBMC | Immunophenotyping, DNA, RNA |
| Plasma | Metabolomics (Raftery lab), proteomics |
| Urine | Metabolomics, renal biomarkers |
| Fecal | Microbiome sequencing |
| Hair / buccal | DNA methylation arrays (epigenetic clock development) |

Genomic sequencing (low-coverage whole genome) is available for a large fraction of the Pack Cohort, enabling GWAS-style analyses across the diverse genetic background.

## Key publications from the Dog Aging Project

This section lists major DAP outputs beyond the foundational Creevy 2022 design paper.

### Foundational program papers

**Creevy et al. 2022 — program design** [^creevy2022]
*Nature* 602:51-57. The primary citation for this page. Establishes cohort rationale, two-tier design, open-science philosophy, and scientific priorities. Described Dogs' co-housed exposome, spontaneous disease, and genetic diversity as key translational advantages.

**Prescott et al. 2025 — Precision Cohort design and data resource** [^prescott2025]
*GeroScience* 47:5725-5748. Formal description of the Precision Cohort architecture, enrollment of 976 dogs, biospecimen protocols, and multi-omic data infrastructure. Confirms the Precision Cohort as a publicly accessible research resource (Terra platform).

### Translational biomarker findings

**Harrison et al. 2026 — dogs and humans share biomarkers of mortality** [^harrison2026]
*J Gerontol A* 81(4):glaf279. **The most directly translational DAP result to date.** In n=937 DAP Precision Cohort dogs, plasma metabolomics identified an individual-metabolite-level mortality signature. Crucially, the effect of individual metabolites on all-cause mortality in humans was **strongly positively correlated** with their association with all-cause mortality in dogs — validating dogs as a translational model at the molecular-biomarker level. The co-housed exposome design makes this finding particularly compelling: it cannot easily be attributed to environmental confounding.

**McCoy et al. 2024 — epigenetic clock and breed-size aging rate** [^mccoy2024]
*bioRxiv* preprint (doi:10.1101/2024.10.03.616519; peer review pending). DNA methylation profiled across >3 million CpG sites in 864 DAP dogs, yielding a canine epigenetic clock. Larger breed sizes had epigenomes averaging **0.37 years older per chronological year** than the smallest breed cohort. Higher residual epigenetic age correlated with **34% increased annual mortality risk**. Validates the breed-size-accelerated-aging hypothesis at the epigenetic level and provides a methylation-based biomarker for future DAP intervention studies.

**Harrison et al. 2025 — protein catabolites as blood-based aging biomarkers** [^harrison2025]
*Aging Cell* (doi:10.1111/acel.70226). In DAP Precision Cohort dogs, protein catabolite metabolites in blood track aging physiology — extending the metabolomic biomarker work to proteomic-catabolite signatures.

### Intervention arm

**Urfer et al. 2017 — rapamycin pilot RCT (predecessor to TRIAD)** [^urfer2017]
*GeroScience* 39:117-127. Pre-DAP pilot RCT, n=24 middle-aged companion dogs, 10-week rapamycin at non-immunosuppressive doses vs. placebo. Improved diastolic and systolic cardiac function; no adverse effects. This pilot established feasibility and estimated effect sizes for the TRIAD power calculation. See [[triad-trial]].

**Coleman, Creevy et al. 2025 — TRIAD protocol paper** [^triad2025]
*GeroScience* (doi:10.1007/s11357-024-01484-7; PMC12181551; local PDF available). Full protocol paper for the Test of Rapamycin In Aging Dogs. Prospective, double-masked, randomized, placebo-controlled, multicenter trial of rapamycin in healthy middle-aged dogs. Co-primary endpoints: lifespan and healthspan (including cognitive, cardiac, metabolic measures). Described as "the first rigorous test of a pharmacologic intervention against biological aging with lifespan and healthspan metrics as endpoints to be performed outside of the laboratory in any species." See [[triad-trial]] for full design details.

### Multimorbidity and disease characterization

**Fang et al. 2025 — first comorbidity networks in companion dogs** [^fang2025]
*PLoS Comput Biol* (doi:10.1371/journal.pcbi.1012728). Built the first cross-disease comorbidity network in companion dogs using DAP Health and Life Experience Survey data, mapping which chronic conditions co-occur more than expected — enabling canine multimorbidity research analogous to human EHR comorbidity analyses.

**Long et al. 2025 — chronic diagnosis inventory for canine multimorbidity** [^long2025]
*Am J Vet Res* (doi:10.2460/ajvr.25.02.0038). Developed and validated the CDI (Chronic Diagnosis Inventory) — a standardized tool for capturing veterinarian-diagnosed chronic conditions from DAP veterinary records, enabling reliable multimorbidity characterization across the cohort.

**McGrath et al. 2025 — companion dog as translational model for Alzheimer's disease** [^mcgrath2025]
*Alzheimer's Dement* (doi:10.1002/alz.70630). Describes a longitudinal research platform and post-mortem protocols within DAP for studying canine cognitive dysfunction (CCD) as a model of Alzheimer's disease, linking DAP infrastructure to the Alzheimer's research community.

## TRIAD relationship

The Dog Aging Project's **intervention arm** is the TRIAD (Test of Rapamycin In Aging Dogs) trial — a rapamycin vs. placebo randomized controlled trial currently enrolling from the DAP companion-dog cohort. TRIAD uses the DAP infrastructure (Pack Cohort dog identification, owner-enrollment model, Precision Cohort multi-omic characterization) as its participant base and data framework. See [[triad-trial]] for full design, endpoints, sample-size rationale, and status.

The DAP is thus unique in combining:
1. An observational longitudinal cohort (Pack + Precision)
2. An embedded pharmacological intervention trial (TRIAD)
3. An open biobank

This architecture — analogous to a large human cohort (e.g., UK Biobank) embedding an RCT (e.g., ASPREE) — is unusual in animal research.

## Citizen-science model and open data

DAP's citizen-science model is a defining feature. Key elements:

- **Owner-enrollment:** dogs are enrolled by their owners via an online portal; no requirement for veterinary-clinic referral or research-institution proximity. This enables geographic diversity and scale that would be impossible through clinic-based recruitment.
- **Owner-reported phenotypes:** the HLES (Health and Life Experience Survey) collects data annually on dog behavior, cognition, activity, diet, environment, and health — owner-reported rather than clinician-administered. Validation against veterinary records and standardized assessments is ongoing.
- **Open data:** DAP operates under an explicit open-science mandate. Data are deposited in the Terra platform and published under open-access policies, enabling secondary analyses by external researchers. The Prescott 2025 precision-cohort paper explicitly describes this resource as "publicly accessible."
- **No lab housing:** companion dogs remain in their home environments. This preserves ecological validity but sacrifices experimental control — a trade-off the DAP accepts deliberately as consistent with its translational goals.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | mTOR, IGF-1/GH, aging-hallmark pathways are conserved |
| Phenotype conserved in humans? | partial | Spontaneous disease (cognitive dysfunction, OA, lymphoma, diabetes) mirrors human phenomenology; breed-size-lifespan inversion is dog-specific |
| Replicated in humans? | in-progress | Metabolomic mortality signature conserved (Harrison 2026); TRIAD lifespan results pending |

## Limitations

**Owner self-selection and attrition bias.** Owners who enroll in DAP tend to be more engaged with their dogs' health, more affluent, and more educated than the general pet-owning population. This creates selection toward healthier-than-average dogs with more attentive veterinary care. Attrition due to owner death, relocation, financial barriers, or dog death before endpoints may not be random — dogs that die early from disease may be underrepresented if owners disengage after death. #gap/needs-replication

**Breed representation imbalances.** Mixed-breed dogs (mutts) are enrolled, but specific pure breeds are likely over- and under-represented relative to the US dog population. Breed-stratified analyses must account for differential breed participation.

**US-skewed cohort.** DAP is a US-only cohort. Dietary patterns, veterinary care access, spay/neuter norms, and breed prevalence differ substantially from European or Asian dog populations, limiting generalizability.

**No random sampling.** Enrollment is entirely voluntary and driven by owner motivation — not a population-based random sample. This means epidemiological inferences require careful confounding adjustment.

**Owner-reported phenotypes may be inaccurate.** Health and Life Experience Survey data depend on owner observations and recall, which may differ from clinical diagnosis. The CDI tool (Long 2025) and veterinary record linkage improve accuracy, but for conditions with subtle presentations (early cognitive decline, mild pain), owner reports may underestimate prevalence. #gap/needs-replication

**Censoring patterns.** Dogs may be euthanized for quality-of-life reasons before natural death — a major censoring source in companion-animal mortality analyses. The relationship between owner decisions to euthanize and underlying disease severity is complex and may differ from end-of-life patterns in humans.

**TRIAD results pending.** The field-defining pharmacological lifespan intervention in dogs has not yet reported primary outcomes. Until TRIAD reports, DAP's role as a pharmacological testing platform remains prospective. #gap/long-term-unknown

## Cross-references

- [[model-organisms/canis-lupus-familiaris]] — full dog model-organism page; breed-size paradox; IGF-1 axis; Loyal pipeline
- [[triad-trial]] — TRIAD rapamycin intervention embedded within DAP; may be an implicit stub
- [[rapamycin]] — TRIAD intervention compound; mTOR inhibitor
- [[mtor-inhibitors]] — pharmacological class; TRIAD context
- [[mtor]] — primary mechanistic target; conserved in dogs
- [[deregulated-nutrient-sensing]] — hallmark; DAP-tested; IGF-1/mTOR axis
- [[epigenetic-alterations]] — hallmark; DAP methylation clock work (McCoy 2024)
- [[cellular-senescence]] — hallmark; p16+ senescent cells in aged dogs
- [[chronic-inflammation]] — hallmark; inflammaging markers in companion dogs

## Limitations and gaps summary

- `#gap/needs-replication` — DAP Precision Cohort metabolomic mortality signature (Harrison 2026) is the first cross-species validation; needs independent replication in a second canine cohort.
- `#gap/long-term-unknown` — TRIAD lifespan and healthspan primary outcomes are pending; pharmacological proof-of-concept in dogs has not yet been established.
- `#gap/needs-replication` — Breed representation in DAP does not reflect the national dog population; breed-stratified analyses must be interpreted with this bias in mind.
- `#gap/needs-citation-verification` — Intermediate enrollment counts (~47,000 from DAP website / news coverage) not verified against published DAP outputs. Verified primary-source figures: Creevy 2022 (>30,000, Dec 2020 snapshot); TRIAD 2025 ("nearly 50,000"); Prescott 2025 Precision Cohort (n=976 with complete biospecimens).
- `[[triad-trial]]` — implicit stub; page may not yet exist; cross-link will resolve when seeded.

---

## Footnotes

[^creevy2022]: [[studies/creevy-2022-dog-aging-project]] · n=cohort design paper (no subjects enrolled yet at publication) · observational (cohort protocol) · model: *Canis lupus familiaris* companion dogs, USA · *Nature* 2022, vol 602:51-57 · PMID 35110758; PMC8940555

[^prescott2025]: doi:10.1007/s11357-025-01571-3 · Prescott J, Keyser AJ, Litwin P, Dunbar MD, McClelland R, Ruple A, Ernst H, Butler BL, Kauffman M, Avery A, Harrison BR, Partida-Aguilar M, McCoy BM, Slikas E, Greenier AK, Muller E, Algavi YM, Bamberger T, Creevy KE, Borenstein E, Snyder-Mackler N, Promislow DEL, DAP Consortium · observational (cohort design / data-resource paper) · n=976 dogs enrolled with complete biospecimen collection · *GeroScience* 2025, 47:5725-5748 · PMID 40038157; PMC12397037 · not_oa locally (closed access) · Precision Cohort architecture, multi-omic biospecimen protocols, Terra open-data platform

[^harrison2026]: doi:10.1093/gerona/glaf279 · Harrison BR, Akey JM, Snyder-Mackler N, Raftery D, Creevy KE, Promislow DEL, DAP Consortium · observational · n=937 dogs, DAP Precision Cohort · plasma metabolomics; effect of individual metabolites on all-cause mortality in humans strongly correlated with same metabolites in dogs (conserved molecular mortality signature) · *J Gerontol A* 2026, 81(4):glaf279 · PMID 41429575 · download pending; **abstract-only verification 2026-05-14**

[^mccoy2024]: doi:10.1101/2024.10.03.616519 · McCoy BM, Mariner BL, Cheng CF, Slikas E, Adjangba C, Greenier A, Brassington L, Marye A, Harrison BR, Partida-Aguilar M, Bamberger T, Algavi Y, Muller E, Harris A, Rout E, DAP Consortium · observational · n=864 dogs, DAP Precision Cohort · DNA methylation >3 million CpGs; epigenetic clock; larger breeds 0.37 yr older per chronological yr; higher residual epigenetic age → 34% increased annual mortality · *bioRxiv* preprint 2024 (peer review pending) · PMID 39553930 · download pending; **preprint — not yet peer-reviewed**

[^harrison2025]: doi:10.1111/acel.70226 · Harrison BR, Promislow DEL, DAP Consortium · observational · DAP Precision Cohort · protein catabolite blood biomarkers of aging physiology in companion dogs · *Aging Cell* 2025 · PMID 41121965 · download pending; **abstract-only verification 2026-05-14**

[^urfer2017]: doi:10.1007/s11357-017-9972-z · Urfer SR, Kaeberlein TL, Mailheau S, Bergman PJ, Creevy KE, Promislow DEL, Kaeberlein M · rct · n=24 middle-aged companion dogs · 10-week rapamycin (non-immunosuppressive dose) vs placebo · improved diastolic + systolic cardiac function; no adverse effects · *GeroScience* 2017, 39:117-127 · PMID 28374166 · download pending (bronze OA)

[^triad2025]: doi:10.1007/s11357-024-01484-7 · Coleman AE, Creevy KE et al., DAP Consortium · study protocol · prospective DBRPCT; rapamycin vs placebo; healthy middle-aged companion dogs; co-primary endpoints lifespan + healthspan · *GeroScience* 2025 · PMID 39951177; PMC12181551

[^fang2025]: doi:10.1371/journal.pcbi.1012728 · Fang A, Ma J, DAP Consortium · observational · DAP cohort · first comorbidity networks in companion dogs; cross-disease co-occurrence networks from HLES survey data · *PLoS Comput Biol* 2025 · PMID 40811246 · **abstract-only verification 2026-05-14**

[^long2025]: doi:10.2460/ajvr.25.02.0038 · Long T, Ruple A, DAP Consortium · observational (validation study) · development and validation of Chronic Diagnosis Inventory (CDI) for canine multimorbidity documentation from veterinary records · *Am J Vet Res* 2025 · PMID 40164106 · **abstract-only verification 2026-05-14**

[^mcgrath2025]: doi:10.1002/alz.70630 · McGrath S, Keene CD, DAP Consortium · observational + protocol paper · longitudinal research platform and post-mortem protocols for canine Alzheimer's/CCD model within DAP · *Alzheimer's Dement* 2025 · PMID 40995864 · **abstract-only verification 2026-05-14**

[^cflupfamiliaris]: [[model-organisms/canis-lupus-familiaris]] — enrollment figure (>47,000) cited from secondary DAP sources; Pack Cohort total should be confirmed against published DAP annual reports. #gap/needs-citation-verification
