---
type: method
aliases: [MR, two-sample MR, Mendelian randomisation, instrumental variable analysis, IV analysis]
abbreviation: MR
category: causal-inference
year-introduced: 2003
canonical-reference: "[[studies/davey-smith-2003-mendelian-randomization]]"
current-protocols-citation: null
related-methods:
  - "[[methods/wgcna]]"
typical-use-cases:
  - "Testing whether a circulating protein or biomarker is *causal* for aging-related disease vs merely predictive (the `mr-causal-evidence:` field on `type: protein` pages)"
  - "Genetic validation of drug targets: variants near a gene are used as instruments for the protein's expression or level to estimate likely drug effect on outcome"
  - "Resolving confounding in observational epidemiology of aging exposures (e.g., IGF-1 axis, inflammatory proteins, epigenetic clocks vs lifespan)"
  - "cis-MR / pQTL-MR: single-instrument MR using a cis-pQTL for a circulating protein as its own IV — the cleanest instrument when available"
  - "Populating `mendelian-randomization:` frontmatter on `type: biomarker` pages"
key-limitations:
  - "Horizontal pleiotropy — instrument SNPs may affect the outcome via pathways other than the exposure; violates exclusion restriction"
  - "Weak-instrument bias — instruments with F-statistic <10 produce biased, unreliable estimates; bias toward the null in two-sample designs but toward confounded observational estimate in one-sample designs"
  - "Winner's curse — top GWAS hits overestimate true effect size; leads to inflated IV strength in the same GWAS used for instrument selection"
  - "Sample overlap between exposure and outcome GWAS inflates type I error in two-sample designs"
  - "Population stratification — ancestry-heterogeneous discovery GWAS can produce spurious instruments"
  - "Canalization / developmental compensation — germline-encoded lifelong reduction of an exposure may not parallel the effect of a short-term pharmacological intervention on the same target (especially relevant for aging interventions vs. MR null results)"
  - "Linear-effect assumption — standard IVW assumes a linear, monotonic effect of the exposure on the outcome; threshold or U-shaped effects are missed"
  - "Cannot capture somatic or time-varying exposures — germline variants are fixed at birth; clonal somatic mutations (CHIP: DNMT3A, TET2, ASXL1, JAK2 V617F, SF3B1) are not instrumentable via standard germline MR (see `not-applicable-somatic` enum)"
evidence-weight-implication: "MR-supported causal claims are stronger than observational association but weaker than a randomised controlled trial; a null MR result does not falsify a causal role — it specifically says 'lifelong genetic modulation of this exposure does not alter the outcome,' which is distinct from 'a drug targeting this pathway for 2 years would have no effect.'"
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Davey Smith & Hemani 2014, Bowden 2015 MR-Egger, Bowden 2016 I²_GX, Hemani 2018 MR-Base, Verbanck 2018 MR-PRESSO, Henry 2022 Circulation — all verified against local PDFs. Davey Smith & Ebrahim 2003 closed-access (not_oa) — foundational claims verified via Crossref metadata + citation context in open secondary sources. STROBE-MR 2021 PDF not yet downloaded (bronze OA, download in progress) — checklist structure verified via Europe PMC abstract + Crossref (20 main items + 30 sub-items; JAMA 326(16):1614–1621). Schooling 2025 cross-checked against already-verified studies/schooling-2025-mr-epigenetic-clock-lifespan.md (not re-read). Canonical-database identity fields not applicable (methods page, no PubChem/UniProt). Protein-page count 146 confirmed by live grep."
---

# Mendelian Randomization

Mendelian randomization (MR) is a causal inference method that uses germline genetic variants — typically GWAS-significant SNPs — as instrumental variables (IVs) for a modifiable exposure, exploiting the random assortment of alleles at meiosis to approximate a "natural randomised controlled trial." Because allele assignment is unrelated to most environmental and behavioural confounders, MR can estimate the causal effect of an exposure (e.g., a circulating protein level) on an outcome (e.g., parental lifespan) while largely mitigating the confounding and reverse causation that plague conventional observational epidemiology. It is the primary method used to populate the `mr-causal-evidence:` field on `type: protein` pages across this wiki, and is the subject of dedicated wiki conventions in [[sops/finding-population-evidence]].

---

## Principle

MR exploits a classical property of Mendelian inheritance: alleles segregate randomly at meiosis, so a person's germline genotype — unlike lifestyle, diet, or socioeconomic status — is not confounded by the environment they grow up in [^daveysmith2003]. A genetic variant that robustly predicts an exposure level therefore acts like a randomly-assigned instrument for that exposure across the population.

**The three core IV assumptions:**

| Assumption | Formal name | What it requires | Main threat |
|---|---|---|---|
| 1. Relevance | Instrument strength | SNP(s) must predict the exposure (F-stat >10 per IV) | Weak instruments → biased, imprecise estimates |
| 2. Independence | Exogeneity | Instrument is not confounded with the outcome | Population stratification, assortative mating |
| 3. Exclusion restriction | No direct effect | Instrument affects outcome *only* via the exposure | Horizontal pleiotropy |

The third assumption is the hardest to satisfy and is the reason MR results require sensitivity analyses rather than simple IVW-point-estimate reporting [^daveysmith2014].

**Biological intuition:** Imagine two people who are genetically identical except that one carries a variant associated with ~0.3 SD higher circulating IGF-1. If, across a population, the high-IGF-1 genotype carriers have a systematically shorter parental lifespan proxy, the most parsimonious interpretation is that higher IGF-1 causally shortens lifespan — because the variant had no other channel to act on. Any confounding of *genotype* with *outcome* would require assortative mating on the specific gene locus or a pleiotropic pathway bypassing IGF-1, both of which are testable.

---

## Workflow

### Standard two-sample MR

Two-sample MR is the dominant design: exposure instruments come from one GWAS cohort; outcome effect estimates come from a separate GWAS cohort. Separating the cohorts avoids sample overlap and is enabled by summary-statistics sharing [^hemani2018].

```r
library(TwoSampleMR)

# Step 1: Extract instruments for exposure (e.g., circulating IGF-1)
exposure_dat <- extract_instruments(outcomes = "ieu-b-4879")
# Clumping criteria: p < 5×10⁻⁸, r² < 0.001, 10 Mb window

# Step 2: Look up instrument effects in outcome GWAS (e.g., parental lifespan)
outcome_dat <- extract_outcome_data(
  snps = exposure_dat$SNP,
  outcomes = "ebi-a-GCST90012130"
)

# Step 3: Harmonise strands + align effect alleles
dat <- harmonise_data(exposure_dat, outcome_dat)

# Step 4: Primary estimate
res <- mr(dat)    # IVW = default primary estimator

# Step 5: Sensitivity analyses
mr_pleiotropy_test(dat)   # MR-Egger intercept (directional pleiotropy test)
mr_heterogeneity(dat)     # Cochran's Q (instrument consistency)
```

**Primary estimator — Inverse Variance Weighted (IVW):** Combines per-instrument Wald ratios (β_outcome / β_exposure) weighted by precision. Assumes all instruments are valid (no horizontal pleiotropy). Equivalent to a weighted random-effects meta-analysis of per-SNP causal estimates.

**OpenGWAS IDs** are the stable, version-specific dataset identifiers to record in footnotes (format: `ieu-b-XXXX`, `ebi-a-GCSTXXXXXXXX`, `ukb-b-XXXX`, `finn-b-XXXX`). The IEU OpenGWAS API (`https://api.opengwas.io/api/`) and R package `ieugwasr` provide programmatic access.

### cis-MR / pQTL-MR for protein exposures

For circulating protein levels, the preferred design uses a **cis-pQTL** — a SNP in or near the gene encoding the protein that affects the protein's own level in plasma or tissue. A single strong cis-pQTL (F-stat typically >>100 in large proteomics GWAS) is often sufficient as an instrument, and the cis-only design sharply reduces horizontal pleiotropy risk because the SNP has a short genomic reach [^daveysmith2014]. This design underlies the Henry 2022 protein-MR screen for heart failure targets [^henry2022]. As large-scale proteomics GWAS (deCODE, UKB-PPP, AGES) are integrated into OpenGWAS, cis-pQTL MR is increasingly the standard for protein-level causal inference relevant to this wiki.

---

## Output format

- **IVW point estimate:** β (SD units of exposure per SD or per doubling of outcome) or OR, with 95% CI.
- **MR-Egger intercept p-value:** the test for directional pleiotropy; a significant intercept (P <0.05) indicates that instruments have a net directional pleiotropic effect on the outcome independent of the exposure. #gap/instrument-validity-uncertain when positive.
- **Cochran's Q / I²:** heterogeneity across instrument estimates; high I² suggests some instruments are invalid. Also relevant: **I²_GX**, the attenuation factor for measurement error in MR-Egger specifically [^bowden2016i2].
- **Weighted Median / Weighted Mode:** alternative estimators robust to up to 50% (WM) or a plurality (mode) of invalid instruments; directional consistency with IVW is the key sensitivity check.
- **MR-PRESSO global test and outlier correction:** detects and removes outlier instruments driven by horizontal pleiotropy; produces an outlier-corrected IVW estimate [^verbanck2018].

### MR footnote format (per [[sops/finding-population-evidence]])

```markdown
[^henry2022mr]: [[studies/henry-2022-proteomics-heart-failure-mr]] · MR (cis-pQTL) · IVs=1–125 per protein (median 23) ·
  RR per 1 SD increase in NPX protein unit · exposure GWAS: SCALLOP consortium n=30,931 ·
  outcome: heart failure (HERMES consortium 47,309 HF cases, 26 studies) ·
  sensitivity: multiverse analysis (120 instrument-selection × MR-model combinations); robust = directionally concordant across all combinations
```

Full footnote conventions including `IVs=N`, `β=X (95% CI)`, OpenGWAS IDs, and sensitivity-method results are documented in [[sops/finding-population-evidence]] § "MR footnote convention."

---

## Key parameters

| Parameter | Standard value | Notes |
|---|---|---|
| Instrument p-value threshold | p < 5×10⁻⁸ | Genome-wide significance; sometimes relaxed to 5×10⁻⁶ for low-heritability exposures |
| LD clumping | r² < 0.001, 10 Mb window | Ensures instruments are approximately independent |
| F-statistic per IV | >10 | Weak-instrument threshold; values 10–30 still confer bias; >100 preferred for cis-pQTL |
| Winner's curse correction | Sometimes applied | Replication-sample effect sizes preferred; shrinkage methods available |
| MR-Egger intercept α | P <0.05 | Directional pleiotropy flag; note: low power with few instruments |
| I²_GX threshold | >0.9 preferred | Below 0.9 means MR-Egger estimates may be attenuated by measurement error [^bowden2016i2] |
| Co-localisation PP4 | >0.8 | Required alongside cis-MR to distinguish causal from LD-confounded association |

---

## Validation and QC

- **Instrument quality table:** every MR publication should report per-instrument F-statistics and the overall Q statistic; if absent, MR result reliability is uncertain — flag `#gap/instrument-validity-uncertain`.
- **Directionality cross-check:** MR-Egger, Weighted Median, and Weighted Mode should all point the same direction as IVW; a directional discordance across methods is a red flag for widespread pleiotropy.
- **Co-localisation:** when using a cis-pQTL or eQTL as instrument, co-localisation (coloc package; posterior probability PP4 >0.8) confirms that the same variant drives both the exposure signal and the outcome signal in the region, rather than distinct variants in LD. Without co-localisation, the instrument may be tagging a different causal variant.
- **Bidirectional MR:** running MR in both directions (exposure → outcome; outcome → exposure) tests for reverse causation. If significant in both directions, the system may be bidirectionally regulated; interpret with caution and flag `#gap/bidirectional-mr-not-done` when only unidirectional MR was published.
- **STROBE-MR checklist [^strobemr2021]:** the reporting standard for MR studies. The checklist has 20 main items and 30 sub-items (50 items total), organised into 6 sections (Title/Abstract, Introduction, Methods, Results, Discussion, Other Information). Verify that citing studies address STROBE-MR reporting requirements before upweighting their MR conclusions. Published 2021, now standard expectation for journals.

---

## Limitations and failure modes

### Horizontal pleiotropy (the dominant threat)
A pleiotropic SNP affects the outcome via a pathway other than the claimed exposure — violating the exclusion restriction. For example, a variant in the *IL6R* region used as an instrument for circulating IL-6 may also affect downstream CRP, fibrinogen, or T-cell compartments, producing a causal estimate that conflates multiple pathways. MR-Egger tests for *directional* (systematic) pleiotropy; MR-PRESSO removes individual outlier instruments; Weighted Median is robust to 50% invalid instruments. None of these fully rescue heavily pleiotropic instrument sets.

### Weak-instrument bias
F-statistic <10 signals a weak instrument. In two-sample designs, weak-instrument bias is toward the null, making weak-instrument MR results conservatively biased — but also substantially underpowered. In one-sample designs, bias is toward the confounded observational association — more dangerous. Exclude or weight down instruments with F <10.

### Canalization / developmental compensation
A germline variant that reduces exposure *from conception* may trigger compensatory developmental adaptations that do not occur when a drug acutely reduces the same exposure in a 60-year-old. This is directly relevant to interpreting null MR results for aging biomarkers.

**Key example — epigenetic clocks:** Schooling et al. 2025 [^schooling2025] found null MR evidence for epigenetic clock acceleration causally reducing lifespan across four clock measures (GrimAge, PhenoAge, Hannum, Horvath) and telomere length. **This does not falsify epigenetic clocks as biomarkers, nor does it falsify clock-resetting interventions.** It specifically says: "lifelong genetic predisposition to faster biological aging, as captured by germline pQTLs for clock methylation loci, does not detectably reduce parental lifespan proxy in the UK Biobank." Short-term interventions that reverse epigenetic age by months rather than decades, or that affect biological systems not captured by the clock's training target, remain a distinct question.

### Somatic and time-varying exposures: `not-applicable-somatic`
Standard germline MR cannot instrument somatic mutations that accumulate stochastically during life. This is the explicit basis for the `not-applicable-somatic` enum value on the `mr-causal-evidence:` field of protein pages for CHIP drivers ([[dnmt3a]], [[asxl1]], [[jak2]], [[sf3b1]]). For these proteins, whether somatic gain-of-function variants causally drive cardiovascular disease and mortality is established by clonal expansion epidemiology (Genovese 2014, Jaiswal 2014), not by germline MR. Citing a "no germline MR" result for these proteins as evidence they are non-causal would be a methodological error.

### Sample overlap
Using the same cohort for both exposure and outcome GWAS in two-sample MR inflates type I error (false positives). UK Biobank is the source of many exposure GWAS (Neale Lab, Pan-UKBB) *and* of major outcome GWAS for aging traits, so overlap is endemic. Flag claims using `#gap/sample-overlap-possible` when both datasets draw from UKB.

### Linear-effect and monotonicity assumptions
Standard IVW assumes the causal effect is linear across the exposure range captured by the instruments. Non-linear causal effects (e.g., J-shaped IGF-1/mortality relationships) are not captured and produce misleading IVW estimates. Non-linear MR extensions (Staley & Burgess 2017 fractional polynomial approach) exist but are rarely applied in aging-context papers.

---

## Evidence-weight implications for this wiki

When a `type: protein` page carries `mr-causal-evidence: yes`:

1. **Stronger than observational.** The MR estimate is less confounded than an observational β, but not unconfounded — horizontal pleiotropy is the main residual concern. Check whether sensitivity analyses (MR-Egger, WM, PRESSO) agree in direction.
2. **Not equivalent to an RCT.** MR simulates *lifelong* exposure differences of typically <<1 SD, while a pharmacological intervention acts over months/years at potentially larger effect sizes. Null MR ≠ null drug effect; positive MR ≠ guaranteed drug effect.
3. **`mr-causal-evidence: partial`** means sensitivity analyses are inconsistent or instruments are weak (F <20, or MR-Egger and WM disagree). Read the body footnote before trusting the direction.
4. **`mr-causal-evidence: not-applicable-somatic`** is not "null" — it is a methodological statement that germline MR is not the right tool. Evidence for these proteins comes from CHIP epidemiology, not MR.
5. **Null MR for biomarkers (e.g., epigenetic clocks) does not contradict intervention evidence.** The canalization caveat applies most strongly to biomarkers that are themselves integrators of many upstream pathways — the instrument may insufficiently perturb the relevant biology at the relevant life stage.

A claim labelled `MR` in a footnote warrants a check of: (a) IVs=N and F-statistics, (b) sensitivity analysis consistency, (c) co-localisation if cis-pQTL design, (d) sample overlap flag, (e) whether the exposure GWAS and outcome GWAS are from the same era and ancestry.

---

## Related methods

| Method | Relationship | Use case |
|---|---|---|
| GWAS (genome-wide association study) | Upstream dependency | MR instruments are GWAS-significant hits; the quality of MR depends on the quality of the exposure GWAS |
| Colocalization (coloc) | Complementary | Required alongside cis-MR to confirm same causal variant drives exposure and outcome signals; `coloc` R package |
| MR-Base / IEU OpenGWAS | Infrastructure | The platform for two-sample MR via TwoSampleMR package; see [[sops/finding-population-evidence]] |
| Observational epidemiology | Compared against | MR is used specifically to validate or refute observational associations; concordance strengthens causal inference |
| Randomised controlled trial | Higher-weight comparator | RCTs remain the gold standard for efficacy claims; MR and RCT together constitute the strongest causal evidence hierarchy for aging interventions |
| Genome-wide polygenic scores (GPS) | Related but distinct | GPS aggregates variants to predict phenotype; MR uses variants as causal instruments — different inferential goal |

---

## Pages citing this method

This list is maintained by the lint pass; regenerate periodically via `grep -rl "mr-causal-evidence" /aging_wiki/molecules/proteins/`.

**Protein pages using `mr-causal-evidence:` field (146 pages as of 2026-05-29):**

Representative high-traffic pages:

- [[molecules/proteins/igf-1]] — `mr-causal-evidence: yes`; key aging-MR target
- [[molecules/proteins/gpnmb]] — `mr-causal-evidence: yes`
- [[molecules/proteins/lgals3]] — `mr-causal-evidence: yes`; galectin-3 HF cis-MR [^henry2022]
- [[molecules/proteins/apob]] — `mr-causal-evidence: yes`
- [[molecules/proteins/apoe]] — `mr-causal-evidence: yes`
- [[molecules/proteins/il-6]] — `mr-causal-evidence: yes`
- [[molecules/proteins/lpa]] — `mr-causal-evidence: yes`
- [[molecules/proteins/growth-hormone-receptor]] — `mr-causal-evidence: yes`
- [[molecules/proteins/dnmt3a]] — `mr-causal-evidence: not-applicable-somatic` (CHIP driver; germline MR not applicable; see § Somatic exposures above)
- [[molecules/proteins/asxl1]] — `mr-causal-evidence: not-applicable-somatic`
- [[molecules/proteins/jak2]] — `mr-causal-evidence: not-applicable-somatic`
- [[molecules/proteins/sf3b1]] — `mr-causal-evidence: not-applicable-somatic`

**Study pages using MR methodology:**

- [[studies/schooling-2025-mr-epigenetic-clock-lifespan]] — null MR for four epigenetic clocks and telomere length vs parental lifespan proxy; key example of the canalization caveat

**SOPs referencing this method:**

- [[sops/finding-population-evidence]] — full workflow for MR queries + MR footnote format + gap markers

---

## Limitations and gaps

- `#gap/needs-current-protocols-anchor` — no formal Current Protocols chapter covers two-sample MR; the canonical references are the primary methods papers cited here (Davey Smith & Ebrahim 2003, Davey Smith & Hemani 2014, Bowden 2015, Hemani 2018). When a canonical textbook chapter is identified, update `current-protocols-citation:` frontmatter.
- `#gap/needs-replication` — the canalization caveat and its specific relevance to epigenetic-clock MR null results (Schooling 2025) is well-established in principle but the mechanistic literature on how germline-lifelong exposure reduction differs from pharmacological short-term intervention is still developing; the null-MR-does-not-falsify-intervention claim should be treated as methodological consensus rather than strongly evidenced empirical fact.
- The "Pages citing this method" section lists only representative protein pages; a full Dataview query is needed to surface all 144+ protein pages using `mr-causal-evidence:`. The lint pass should regenerate this list periodically.

---

## Verification log

**2026-05-29 — initial seed (claude):** Methods page seeded from primary-source abstracts + `sops/finding-population-evidence.md` + CLAUDE.md schema conventions. All six canonical DOIs (Davey Smith 2003, Davey Smith & Hemani 2014, Bowden MR-Egger 2015, Bowden I²_GX 2016, Hemani MR-Base 2018, Verbanck MR-PRESSO 2018, STROBE-MR 2021, Henry 2022, Schooling 2025) verified via  or Crossref. Protein-page citation count (144) confirmed by `grep -rl` command. `verified: false`; pending primary-source PDF cross-check of quantitative claims (F-stat thresholds, I²_GX cutoffs, PRESSO simulation details).

**2026-05-29 — first verification pass (claude):** PDFs read for Davey Smith & Hemani 2014, Bowden 2015 MR-Egger, Bowden 2016 I²_GX, Hemani 2018 MR-Base, Verbanck 2018 MR-PRESSO, Henry 2022 Circulation. Schooling 2025 cross-checked against verified study page. Davey Smith 2003 closed-access — citation metadata confirmed via Crossref. STROBE-MR 2021 PDF still downloading (bronze OA) — checklist structure verified via Europe PMC abstract. Four corrections applied: (1) STROBE-MR item count "24-item" → "20 main items + 30 sub-items" (abstract-level error); (2) STROBE-MR footnote volume/issue "328(22):2261–2269" → "326(16):1614–1621" (wrong citation); (3) Henry 2022 MR footnote example replaced — original cited "co-localisation PP4 >0.8 required" which is not the sensitivity method Henry 2022 used (they used multiverse analysis; coloc PP4 is separately correct general guidance in the QC section body); (4) protein-page count "144" → "146" (live grep confirmed). `verified: true`.

---

[^daveysmith2003]: doi:10.1093/ije/dyg070 · Davey Smith G, Ebrahim S · *Int J Epidemiol* 32(1):1–22 · 2003 · foundational paper coining "Mendelian randomization" and establishing the IV-framework rationale; n/a (methods/theory) · cited >6,000 times; archive: not downloaded (closed-access)

[^daveysmith2014]: doi:10.1093/hmg/ddu328 · Davey Smith G, Hemani G · *Hum Mol Genet* 23(R1):R89–98 · 2014 · "Mendelian randomization: genetic anchors for causal inference in epidemiological studies"; reviews two-sample MR design, sensitivity analyses, and cis-pQTL extensions; n/a (review) · cited >4,800 times; archive: downloaded —  (local PDF)

[^bowden2015]: doi:10.1093/ije/dyv080 · Bowden J, Davey Smith G, Burgess S · *Int J Epidemiol* 44(2):512–525 · 2015 · introduces MR-Egger regression for detecting and correcting directional pleiotropy; defines the InSIDE assumption; n/a (methods) · cited >10,000 times; archive: downloaded —  (local PDF)

[^bowden2016i2]: doi:10.1093/ije/dyw220 · Bowden J, Del Greco M F, Minelli C, Davey Smith G, Sheehan NA, Thompson JR · *Int J Epidemiol* 45(6):1961–1974 · 2016 · introduces I²_GX statistic to assess attenuation bias in MR-Egger due to measurement error; I²_GX <0.9 signals caution (MR-Egger attenuated toward null); n/a (methods) · archive: downloaded —  (local PDF)

[^hemani2018]: doi:10.7554/elife.34408 · Hemani G et al. · *eLife* 7:e34408 · 2018 · describes MR-Base platform and TwoSampleMR R package; defines two-sample MR workflow and OpenGWAS dataset IDs; database: 11 billion SNP-trait associations from 1,673 GWAS at publication; n/a (platform/methods) · cited >7,900 times; archive: downloaded —  (local PDF)

[^verbanck2018]: doi:10.1038/s41588-018-0099-7 · Verbanck M, Chen C-Y, Neale B, Do R · *Nat Genet* 50:693–698 · 2018 · introduces MR-PRESSO (three components: global test, outlier test, distortion test); applied to 4,250 MR tests from 82 GWA datasets; detects horizontal pleiotropy in >48% of significant MR causal claims (48.69% within IVW-significant subset); n/a (simulation + applied) · cited >8,700 times; archive: downloaded —  (local PDF)

[^strobemr2021]: doi:10.1001/jama.2021.18236 · Skrivankova VW et al. · *JAMA* 326(16):1614–1621 · 2021 · STROBE-MR: reporting checklist for MR studies (20 main items + 30 sub-items in 6 sections); now the standard reporting requirement for major journals; n/a (guidelines) · cited >3,600 times; archive: pending download

[^henry2022]: doi:10.1161/CIRCULATIONAHA.121.056663 · Henry A et al. (HERMES + SCALLOP Consortia) · *Circulation* 145(16):1205–1217 · 2022 · proteomics + cis-pQTL MR screen of 90 cardiovascular proteins for heart failure causal associations; observational cohort: 3,019 participants / 732 HF events (HOMAGE, PIVUS, ULSAM); MR outcome GWAS: HERMES consortium 47,309 HF cases from 26 studies; exposure GWAS: SCALLOP consortium n=30,931; primary MR: LD r²<0.4 + p<10⁻⁴ instrument selection; robustness confirmed by multiverse analysis (120 parameter combinations); 8 proteins causally associated including galectin-3 (Gal-3/LGALS3, positive) and adrenomedullin (ADM, protective); no colocalisation step applied — sensitivity via multiverse directional concordance; key aging-context application of cis-MR design · archive: downloaded —  (local PDF)

[^schooling2025]: doi:10.1186/s40246-025-00852-4 · Schooling CM, Li S, Jiesisibieke ZL · *Hum Genomics* 19:143 · 2025 · null MR for GrimAge, PhenoAge, Hannum clock, Horvath clock, and telomere length vs parental lifespan proxy; key example of canalization caveat · see [[studies/schooling-2025-mr-epigenetic-clock-lifespan]]; archive: downloaded
