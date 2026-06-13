---
type: biomarker
aliases: [OMICmAge, DNAmEMRAge, EMRAge clock, EBP clock, TruDiagnostic aging clock, TruAge COMPLETE clock]
modality: dna-methylation
unit: years
training-cohort: "Chen 2026: Mass General Brigham Aging Biobank Cohort (MGB-ABC) — EMRAge developed from 31,264 MGB Biobank participants (Cox PHM, 19 retained variables); DNAmEMRAge / OMICmAge training subset n=3,451 (2,762 train / 689 test) with complete multi-omic data; TruDiagnostic Biobank (n=14,213), Generation Scotland (n=18,672), and All of Us (n=10,769) as independent validation cohorts"
n-cpgs-or-features: "DNAmEMRAge: 1,097 CpGs + age; OMICmAge: 990 CpGs + 40 epigenetic biomarker proxies (EBPs: 16 protein, 14 metabolite, 10 clinical) selected via elastic net from 396 candidate EBPs"
model-architecture: elastic-net
training-target: mortality
calibration-tissues: ["whole-blood"]
test-retest-icc: null
human-evidence-level: limited
mendelian-randomization: not-applicable
intervention-responsive: partial
literature-checked-through: 2026-06-12
verified: true
verified-date: 2026-06-12
verified-by: claude
verified-scope: "Published paper (doi:10.1038/s43587-026-01073-7, PMC13004675) verified via PubMed abstract (PMID 41741793) and full PMC HTML; preprint (PMC10614756) verified via PMC HTML. Corrections applied: Spearman rho 0.92→0.91 (published paper value); AUC values updated from preprint to published paper (MGB-ABC OMICmAge 5-yr 0.889→0.892, 10-yr 0.874→0.873; DNAmEMRAge 5-yr 0.894→0.898, 10-yr not previously stated→0.890); overstated PCGrimAge comparison corrected (OMICmAge is lower than PCGrimAge in Generation Scotland AUC, not higher); All of Us validation cohort (n=10,769) added; specific hazard ratios from published paper added; gap/no-fulltext-access tag removed from [^chen2026] footnote. Corley 2026 (PMID 42156721), Dawson 2025 (PMID 41173838) verified against PubMed abstracts — both match wiki claims. Harvanek 2024 preprint (medrxiv) inaccessible (403); wiki characterization unverifiable against full text. Canonical-DB identity fields (PubChem etc.) not applicable to this clock type."
---

# OMICmAge

A third-generation DNA methylation biological-age clock developed through a collaboration between **TruDiagnostic and Harvard/Mass General Brigham**, published in *Nature Aging* in 2026. OMICmAge extends the GrimAge design principle — using DNAm to proxy clinical mortality predictors — by integrating **40 epigenetic biomarker proxies (EBPs)** spanning proteomic, metabolomic, and clinical domains into a single composite score, anchored to an electronic-medical-record-derived mortality phenotype (EMRAge). It is the primary clock in TruDiagnostic's consumer "TruAge COMPLETE" panel, positioned as a successor to [[grimage-2019]] in their commercial offering. The clock is **proprietary** (training weights not fully public), which limits independent third-party replication relative to GrimAge or [[phenoage-2018]].

## Identity and Origin

- **Primary citation:** Chen Q, Dwaraka VB, Carreras-Gallo N, Armstrong JF, Sehgal R, et al. (2026) *Nature Aging* 6(3):722–737 — doi:10.1038/s43587-026-01073-7 (published online 25 February 2026)
- **Preprint (2023):** Chen Q et al. (2023) *bioRxiv* — doi:10.1101/2023.10.16.562114 (openly available via PMC10614756)
- **Accompanying editorial:** doi:10.1038/s43587-026-01072-8 (*Nature Aging* 6(3):483–484)
- **Clock type:** Third-generation (mortality-trained, multi-omic EBP composite)
- **First author:** Qingwen Chen (Channing Division of Network Medicine, Brigham and Women's Hospital / Harvard Medical School)
- **Senior/corresponding authors:** Ryan Smith (TruDiagnostic), Jessica Lasky-Su (Brigham and Women's Hospital / HMS); Vadim N. Gladyshev and Albert T. Higgins-Chen also in consortium
- **Input modality:** Illumina EPIC array (whole blood)
- **Output units:** Years (biological age); acceleration = OMICmAge − chronological age

## Three-Stage Architecture

OMICmAge is built in three nested stages, each representing a distinct biological layer:

### Stage 1: EMRAge (clinical mortality phenotype)

Using electronic medical record (EMR) data from **31,264 Mass General Brigham Biobank participants** (split 70:30 into ~21,885 training and ~9,379 testing), the investigators first constructed **EMRAge** — a composite clinical mortality risk score derived from routine laboratory biomarkers (complete blood count, metabolic panel, lipids, etc.) using a Cox proportional hazards model retaining 19 variables from an initial 27 clinical phenotypes, each with adjusted p ≤ 0.05. EMRAge plays the same role that the FHS mortality outcomes played in GrimAge: it provides a biological-age-in-years anchor defined by real-world clinical outcomes [^chen2026].

### Stage 2: DNAmEMRAge (pure methylation clock)

A second-stage elastic net model was trained to predict EMRAge from blood DNAm, retaining **1,097 CpGs** (plus age as a covariate). This is a direct methylation proxy for the EMR mortality phenotype — structurally analogous to GrimAge v1's approach, but anchored to a much larger and more clinically heterogeneous training set (~31,000 vs ~2,356 FHS participants) [^chen2026].

### Stage 3: OMICmAge (multi-omic EBP composite)

The final model layers an additional 40 **epigenetic biomarker proxies (EBPs)** on top of DNAmEMRAge. EBPs are DNAm-based surrogates for individual clinical-chemistry, proteomic, and metabolomic analytes — i.e., methylation estimates of circulating protein or metabolite levels. Of 396 candidate EBPs (266 metabolite, 109 protein, 21 clinical) that were constructed from available multi-omic data in the MGB-ABC discovery subset (n=3,451), **40 were retained by penalized regression** when predicting EMRAge mortality risk: 16 protein EBPs, 14 metabolite EBPs, and 10 clinical EBPs. Albumin was the most heavily weighted individual EBP; androsterone sulfate was among the retained metabolite EBPs. The final OMICmAge model thus uses **990 CpGs** (the feature footprint of all 40 retained EBPs) integrated into one score, still quantifiable from a single blood DNAm assay [^chen2026].

The EBP architecture makes OMICmAge multi-omic in an important sense: it integrates proteomic, metabolomic, and clinical chemistry signal, but **does not require a protein or metabolomics assay at the time of measurement** — the EBPs are all predicted from methylation, so blood DNAm alone is sufficient at the point of care. This distinguishes OMICmAge from true multi-omic clocks that require multiple assays.

| Component | EBPs included | CpGs |
|---|---|---|
| DNAmEMRAge | 0 EBPs; direct DNAm→EMRAge | 1,097 |
| OMICmAge addition | 40 EBPs (16 protein, 14 metabolite, 10 clinical) from 396 candidates | 990 (subset) |
| OMICmAge overlap with prior clocks | ≤3 CpGs shared with any prior clock | — |

## Training and Validation

| Cohort | N | Role |
|---|---|---|
| MGB Biobank (EMRAge) | 31,264 (~21,885 train / ~9,379 test) | EMRAge clinical phenotype derivation |
| MGB-ABC (full omic) | 3,451 (2,762 train / 689 test) | DNAmEMRAge + OMICmAge training |
| TruDiagnostic Biobank | 14,213 (preprint: 12,666; published: 14,213 after QC of 14,698) | Independent validation |
| Generation Scotland | 18,672 | Independent validation (most credible external) |
| All of Us | 10,769 | Additional independent validation (published paper only) |

The inclusion of TruDiagnostic's own biobank as a primary validation cohort is a notable limitation: because TruDiagnostic is the commercial partner, this cohort cannot be considered fully independent. Generation Scotland provides genuine external validation.

## Performance Characteristics

### Correlation with EMRAge

In the held-out test set:
- OMICmAge–EMRAge Spearman rho = **0.91**, R² = **0.84**, mean absolute error ≈ 4.97 years [^chen2026] (the preprint reported rho=0.92 for the test set; the published *Nature Aging* paper reports rho=0.91 for both train and test)

### Mortality and morbidity prediction (5- and 10-year survival AUC)

In the MGB-ABC held-out test set, OMICmAge achieved **5-year AUC = 0.892, 10-year AUC = 0.873** and DNAmEMRAge achieved **5-year AUC = 0.898, 10-year AUC = 0.890** for all-cause mortality [^chen2026]. In the independent Generation Scotland cohort, OMICmAge achieved **5-year AUC = 0.861, 10-year AUC = 0.859**, which was marginally lower than PCGrimAge (5-yr 0.870, 10-yr 0.866) in that cohort — the advantage over PCGrimAge is cohort-specific and not universal [^chen2026].

For morbidity endpoints, OMICmAge showed the highest hazard ratios among tested clocks for most outcomes in Generation Scotland: incident all-cause mortality HR = **11.31** (p = 2.65 × 10⁻²³), CVD HR = **4.14** (p = 2.46 × 10⁻²¹), type 2 diabetes HR = **4.18** (p = 5.75 × 10⁻²⁵); COPD was the exception where PCGrimAge performed better [^chen2026].

### CpG novelty

Maximum overlap with any prior DNAm clock is **≤3 shared CpGs**, indicating OMICmAge captures largely orthogonal genomic signal relative to GrimAge, PhenoAge, Horvath, and Hannum clocks [^chen2026]. (For comparison, PhenoAge and Horvath share 50 CpGs; Horvath and Hannum share 29.) This is consistent with its EMR-derived training target differing from FHS mortality (GrimAge) and NHANES mortality (PhenoAge).

## Comparison to Sibling Clocks

| Feature | Horvath 2013 | PhenoAge 2018 | GrimAge 2019 | DunedinPACE 2022 | OMICmAge 2026 |
|---|---|---|---|---|---|
| Training target | Chronological age | Mortality (KDM) | Time-to-death | Longitudinal pace | EMR mortality |
| Architecture | Elastic net CpGs | 2-stage (clinical + CpG) | 7 protein surrogates + pack-years | 19-biomarker pace | 40 EBPs + CpGs |
| n-features | 353 CpGs | 513 CpGs | 1,030 CpGs | 173 CpGs | 990 CpGs + 40 EBPs |
| Training N | 7,844 | 9,926 (stage 1) / 456 (stage 2) | 2,356 (FHS) | 1,037 | ~31,000 (EMR) / 3,451 (full omic) |
| Calibration tissue | Pan-tissue | Blood | Blood | Blood | Blood |
| Mortality HR strength | Low | Moderate | Strongest (among 2nd-gen) | Moderate | Comparable or superior to GrimAge (claimed) |
| CR response (CALERIE-2) | NS | NS | NS | Significant | Not tested in CALERIE-2 |
| 3rd-party validation | Extensive | Extensive | Extensive | Growing | Limited (training-cohort overlap concern) |
| Proprietary | No | No | No | No | Partial (TruDiagnostic; preprint OA) |

See also [[biomarkers/symphony-age]] (a parallel multi-omic clock initiative; page in progress).

## Intervention-Responsiveness Evidence

No pre-registered intervention RCT has used OMICmAge as a prospectively specified primary endpoint as of 2026-06-12. Two exploratory post-hoc results exist:

### Positive signal: semaglutide in HIV-associated lipohypertrophy (Corley 2026)

In a **randomized, double-blind, placebo-controlled trial** of semaglutide vs placebo in 84 participants with HIV-associated lipohypertrophy (32 weeks), OMICmAge showed a **−2.2 year change (p=0.009)** in the semaglutide arm relative to placebo [^corley2026]. This is the first RCT evidence that OMICmAge is modifiable. Caveats: (1) epigenetic aging was **not pre-specified** — the analysis is a post-hoc exploratory sub-study; (2) the population is a specific HIV/metabolic disease context, not healthy aging; (3) no correction for multiple clock comparisons was reported. #gap/needs-replication in healthy adults.

### Positive signal: ketamine treatment for MDD/PTSD (Dawson 2025)

In a **small pre-post pilot** (n=20 adults with MDD or PTSD; 6 ketamine infusions at 0.5 mg/kg), OMICmAge showed a reduction in epigenetic age alongside GrimAge V2 and PhenoAge [^dawson2025]. GrimAge and PhenoAge were also reduced, suggesting this may reflect a non-specific stress-reduction signal rather than genuine aging slowdown. No placebo control; n=20 severely limits interpretation. #gap/needs-replication

### Cross-disease: accelerated OMICmAge in schizophrenia (Harvanek 2024, preprint)

A meta-analysis (1,891 schizophrenia patients vs 1,881 controls) found OMICmAge was significantly elevated in schizophrenia after multiple-comparison correction, alongside DNAmEMRAge and CausAge [^harvanek2024]. This supports discriminant validity — OMICmAge detects disease-associated biological aging acceleration — but does not directly speak to intervention responsiveness.

## Mendelian Randomization Status

`mendelian-randomization: not-applicable` — OMICmAge is a **composite clock score**, not a single molecular entity. It integrates 40 EBP signals and ~990 CpGs; no germline genetic instrument can be constructed for the aggregate score in a way that is interpretable in a conventional MR framework. This is the same reasoning applied to DunedinPACE and other composite scores. #gap/no-mechanism — whether OMICmAge acceleration causally contributes to mortality (rather than merely predicting it) cannot be tested by MR.

## Proprietary Status and Independent Validation Concern

OMICmAge is the flagship clock in TruDiagnostic's "TruAge COMPLETE" consumer testing panel. The preprint makes training code partially available and the bioRxiv version is openly accessible (PMC10614756), but **the production weights used in TruDiagnostic's commercial assay are not publicly described**. This means:

1. Independent research groups cannot precisely reproduce the commercial score.
2. The dominant validation cohort in the published paper is TruDiagnostic's own biobank — an inherent conflict of interest.
3. The Generation Scotland validation is the most credible independent external test.

Compare to [[grimage-2019]] (fully described in the paper; independently reproduced in >2,000 studies) and [[dunedinpace-2022]] (code publicly released; independently validated in multiple cohorts). OMICmAge has had substantially less independent third-party validation at time of publication. #gap/needs-replication

## Limitations and Gaps

1. **Proprietary commercial context** — TruDiagnostic co-developed and commercially deploys this clock; independent replication is limited and the dominant validation cohort is not independent. #gap/needs-replication

2. **No CALERIE-2 data** — The most well-powered human aging-intervention RCT (CALERIE-2, n=197, 2-year ~12% CR) did not include OMICmAge. Comparison to GrimAge and DunedinPACE's CALERIE-2 performance is therefore impossible. #gap/long-term-unknown

3. **EBP list not fully published** — The primary paper references the full 40-EBP list in a supplementary table; the main text identifies albumin and androsterone sulfate but does not enumerate all 40 components, limiting mechanistic interpretation. #gap/unsourced — verify full EBP list from Extended Table S2 in Chen 2026.

4. **Blood only** — Trained and validated exclusively in whole blood; no cross-tissue calibration available or validated.

5. **Training-cohort size advantage (EMRAge) vs narrow omic subset** — The 31,264-participant EMRAge derivation sample gives a very large clinical anchor, but the full-omic training subset used for DNAmEMRAge and OMICmAge is only n=3,451 — smaller than GrimAge's effective training set after accounting for the proxy architecture. The claim of superior performance needs independent scrutiny.

6. **No MR evidence** — As a composite clock, OMICmAge acceleration cannot be tested as a causal factor in mortality by MR, leaving open whether it is causal or confounded.

7. **Recency** — Published 2026; virtually no independent validation literature exists yet. The TranslAGE platform (Borrus et al. 2025, preprint) systematically benchmarks epigenetic clocks including OMICmAge across 179 datasets / >42,000 samples, which will be a key independent validation resource as it clears peer review.

## Aging-Context Interpretation

OMICmAge is positioned as the **most clinically comprehensive DNAm clock** for biological-age estimation — capturing not just mortality risk (like GrimAge) but multi-system morbidity through its EBP architecture. The design rationale is sound: anchoring to 31,264 real-world clinical outcomes provides a mortality phenotype more representative of the general population than FHS (GrimAge) or NHANES (PhenoAge). The novelty of CpG features (~0 overlap with prior clocks) is also encouraging for complementary information content.

However, two caveats should temper enthusiasm in the aging-research context:

- **Pre-specified intervention evidence is absent.** The only positive intervention signal (semaglutide, Corley 2026) is from a post-hoc exploratory analysis in a metabolically diseased population. For trials seeking a validated primary endpoint, [[dunedinpace-2022]] currently has the stronger track record (CALERIE-2 RCT).
- **Proprietary commercialization** creates a validation conflict that has not yet been resolved by the field. GrimAge accumulated its evidence base over six years in independent academic labs; OMICmAge is at month zero.

For **clinical consumer use** (TruAge COMPLETE), OMICmAge offers a single-blood-draw composite that integrates protein, metabolite, and clinical signals otherwise requiring separate assays. Whether it outperforms GrimAge2 as a clinician-actionable risk score in routine practice remains to be established.

## Cross-references

- [[biomarkers/grimage-2019]] — structural predecessor; same EBP-proxy design principle
- [[biomarkers/phenoage-2018]] — sibling mortality-trained second-generation clock
- [[biomarkers/dunedinpace-2022]] — pace clock; currently best intervention-trial endpoint
- [[biomarkers/horvath-clock-2013]] — first-generation reference clock
- [[biomarkers/hannum-clock-2013]] — first-generation reference clock
- [[biomarkers/telomere-length-leukocyte]] — orthogonal aging biomarker
- [[biomarkers/symphony-age]] — parallel multi-omic clock (in progress)
- [[hallmarks/epigenetic-alterations]] — hallmark page situating DNAm clocks
- [[processes/dna-methylation]] — molecular process underlying all DNAm clocks
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC

## Footnotes

[^chen2026]: doi:10.1038/s43587-026-01073-7 · PMID 41741793 · PMCID PMC13004675 · Chen Q, Dwaraka VB, Carreras-Gallo N et al. · *Nature Aging* 6(3):722–737, 2026 · training n=3,451 MGB-ABC (2,762 train / 689 test); EMRAge discovery n=31,264; validation: TruDiagnostic n=14,213 + Generation Scotland n=18,672 + All of Us n=10,769 · observational (multi-cohort training + validation) · model: human adults, whole blood, Illumina EPIC 850K · OMICmAge–EMRAge: rho=0.91, R²=0.84, MAE=4.97 yr (test set); MGB-ABC mortality AUC: 5-yr=0.892, 10-yr=0.873; Gen Scotland AUC: 5-yr=0.861 (PCGrimAge 0.870); Gen Scotland mortality HR=11.31 per s.d. (p=2.65×10⁻²³)

[^chen2026preprint]: doi:10.1101/2023.10.16.562114 · Chen Q et al. · bioRxiv 2023 (preprint of Chen 2026; OA via PMC10614756) · n=3,451 training / 12,666 TruDiagnostic validation (increased to 14,213 in published paper) · in-silico / observational · preprint reports OMICmAge–EMRAge rho=0.92 (test set), R²=0.84, MAE≈4.97 yr; 5-yr mortality AUC=0.889, 10-yr AUC=0.874; ≤3 CpG overlap with any prior clock · published paper corrects rho to 0.91 (both train and test) and AUC to 0.892/0.873 (MGB-ABC); use [^chen2026] for current canonical values · model: human adults, whole blood

[^corley2026]: doi:10.1038/s41467-026-72861-3 · Corley MJ, Dwaraka VB, Pang AP, Labbato D, Smith R, Eckard AR, McComsey GA · *Nature Communications* 2026 · rct (randomized double-blind placebo-controlled; n=84 total; semaglutide n=45 vs placebo n=39; 32 weeks) · model: adults with HIV-associated lipohypertrophy · OMICmAge: −2.2 years, p=0.009 (post-hoc exploratory; not pre-specified endpoint) · #gap/needs-replication in healthy aging populations

[^dawson2025]: doi:10.1038/s41398-025-03683-y · Dawson KL et al. · *Translational Psychiatry* 2025 · pilot pre-post (n=20; 6 ketamine infusions 0.5 mg/kg; no placebo arm) · model: adults with MDD or PTSD · OMICmAge reduction observed post-treatment; GrimAge V2 and PhenoAge also reduced; no between-group comparison · #gap/needs-replication

[^harvanek2024]: doi:10.1101/2024.10.28.24316295 · Harvanek ZM, Sehgal R, Borrus D et al. · medRxiv preprint 2024 · meta-analysis (1,891 schizophrenia vs 1,881 controls) · OMICmAge, DNAmEMRAge, CausAge, and overall SystemsAge significantly elevated in schizophrenia after multiple-comparison correction · model: human adults, whole blood · preprint (not yet peer-reviewed)
