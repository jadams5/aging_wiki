---
type: biomarker
aliases: [MskAge, Msk-Age, musculoskeletal epigenetic clock, Green 2025 musculoskeletal clock]
modality: dna-methylation
unit: years
training-cohort: "Green 2025 (Aging Cell): multi-tissue musculoskeletal dataset — cartilage, bone, mesenchymal stromal cells (MSCs), skeletal muscle biopsy, and tendon tissue plus blood; 1,048 total samples from GEO (Gene Expression Omnibus) public repositories and UK Centre for Integrated Musculoskeletal Ageing (CIMA); Illumina 450k and EPIC arrays; age range not specified in abstract; 70/30 training/test split (test set n=307)"
n-cpgs-or-features: "3,365 CpGs selected by the genetic algorithm from an initial filtered set of 7,677 candidates (pre-filtered from 338,185 array CpGs by Pearson |r|>0.3 with age). CpGs are then transformed via SVD (singular value decomposition) into principal components for ridge-regression model training — the model input is PCs of the 3,365 CpGs, not raw CpG beta values directly."
model-architecture: "genetic-algorithm-islands-model: penalised genetic algorithm with 4 independent islands (200 chromosomes, 50 per island initially); top 5% fitness individuals selected per island per iteration; 70% crossover rate, 10% mutation rate; cross-island migration of fittest chromosomes every 10 iterations; 400 total iterations; fitness function = ridge regression 10-fold cross-validation MAE averaged across all musculoskeletal tissue types; CpG inclusion penalty of 0.01 years (CpG excluded unless it reduces cross-tissue MAE by at least this threshold). Final model: ridge regression on SVD-transformed PCs of selected CpGs."
training-target: chronological-age
calibration-tissues: ["[[tissues/skeletal-muscle]]", "cartilage", "bone", "tendon", "mesenchymal stromal cells"]
test-retest-icc: null
human-evidence-level: limited
mendelian-randomization: not-tested
intervention-responsive: partial
literature-checked-through: 2026-06-15
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "Primary source (PMC12419849) read end-to-end; all quantitative claims cross-checked. Adjacent citations verified via PubMed/Crossref: Murach 2022 sex corrected (male, not female); Jankowski 2024 n corrected (12+18=30, not ≈50 per group); grip strength/gait speed claim reframed (not tested in paper, not null-reported). MEAT v2/SYMPHONY disambiguation claims confirmed. Exercise dataset (Figure S12) not named in main text — dataset identity remains not fully verifiable from public text alone (supplementary Table S3 required)."
---

# MskAge

MskAge is a DNA methylation (deoxyribonucleic acid methylation) epigenetic clock trained exclusively on **musculoskeletal tissues** — skeletal muscle biopsy, cartilage, bone, tendon, and mesenchymal stromal cells (MSCs) — rather than on blood. It was developed by Green, Reynard, Henstock et al. at the University of Liverpool and published as a preprint in May 2023, then peer-reviewed and published in *Aging Cell* in June 2025 [^green2025]. Its defining methodological innovation is a multi-tissue penalised **genetic algorithm islands model** that selects CpG sites whose age-correlation is consistent *across* musculoskeletal tissue types, rather than optimising for a single tissue, thereby minimising tissue-of-origin bias that confounds pan-tissue and blood-derived clocks when applied to musculoskeletal samples.

MskAge is distinct from the SYMPHONY Age Musculoskeletal sub-clock ([[biomarkers/symphony-age]]), which is trained entirely in **blood** against grip-strength and physical-performance clinical biomarkers, and from the MEAT v2 (Muscle Epigenetic Aging Tool) clock (Voisin, Eynon et al. 2021), which is limited to skeletal muscle biopsy data. MskAge is the first published epigenetic clock to train jointly across the full spectrum of musculoskeletal tissues and to use a genetic-algorithm feature-selection framework designed to resist cross-tissue calibration drift.

---

## Identity and Provenance

- **Primary citation (peer-reviewed):** Green DC, Reynard LN, Henstock JR, Reppe S, Gautvik K, Peffers MJ, Shanley DP, Clegg PD, Canty-Laird EG (2025) "MskAge — An Epigenetic Biomarker of Musculoskeletal Age Derived From a Genetic Algorithm Islands Model." *Aging Cell* 24(9):e70149 — doi:10.1111/acel.70149 · PMID 40538142 · PMC12419849
- **Preprint:** bioRxiv doi:10.1101/2023.05.04.539347 (posted May 2023; substantially equivalent to published version)
- **Author note:** The brief supplied to this seeder listed Voisin and Eynon as authors. They are the authors of the related **MEAT v2** skeletal muscle clock (doi:10.1002/jcsm.12741, 2021), not of MskAge. The MskAge first author is Daniel C. Green (University of Liverpool). Verify authorship against the primary source if this matters for a downstream citation.
- **Publication status (2026-06-15):** Peer-reviewed and published in *Aging Cell* (June 2025). No longer preprint-only; the verification gap is therefore the Aging Cell paywall PDF (open via PMC12419849).
- **Open access:** Gold OA (PMC open access); PMC full text available at PMC12419849.

---

## What MskAge Measures

MskAge estimates the **biological age of musculoskeletal tissue** from DNA methylation patterns at 3,365 selected CpG sites. Unlike blood-derived clocks applied to musculoskeletal outcomes (e.g., GrimAge, SYMPHONY Age Musculoskeletal sub-clock), MskAge was calibrated *within* musculoskeletal tissue DNA methylation data and therefore avoids the tissue-of-origin confound: a blood-trained clock applied to cartilage or bone biopsy samples will systematically mis-estimate biological age because the baseline methylation landscape differs between tissues, independent of aging.

**Key contrast with the SYMPHONY Age Musculoskeletal sub-clock:**

| Feature | MskAge | SYMPHONY Age Musculoskeletal sub-clock |
|---|---|---|
| Training tissue | Skeletal muscle biopsy, cartilage, bone, tendon, MSCs | Whole blood |
| Training target | Chronological age within musculoskeletal tissues | Clinical biomarkers of physical function (grip strength, gait speed) in blood donors |
| CpG source | Tissue biopsies + ex vivo culture (musculoskeletal) | Blood EPIC/450K array |
| Use case | Research on musculoskeletal tissue specimens; cell-culture aging studies | Blood-draw population studies predicting physical functional decline |
| Biopsy required? | Yes (muscle, cartilage, tendon, bone, or MSC culture) | No |
| Peer-reviewed | Yes (Aging Cell 2025) | Yes (Nature Aging 2025 Systems Age parent paper) |

See [[biomarkers/symphony-age]] for the SYMPHONY/Systems Age framework and its Musculoskeletal sub-clock architecture.

**Key contrast with MEAT v2:**

The MEAT (Muscle Epigenetic Aging Tool) v2 clock (Voisin, Eynon et al. 2021; doi:10.1002/jcsm.12741) is trained on 1,053 skeletal muscle methylomes from human biopsy studies and achieves a mean absolute error (MAE) of approximately 4.4 years [^voisin2021]. MEAT v2 is skeletal-muscle-specific. MskAge is **broader**: it spans all major musculoskeletal tissue types and was explicitly designed so that the selected CpGs track aging equivalently across cartilage, bone, tendon, muscle, and MSCs. The MskAge authors could not benchmark directly against MEAT v2 in their test set because the MEAT training data overlapped with their test samples — an important caveat for any direct comparison [^green2025].

---

## Model Architecture

MskAge uses a three-stage pipeline [^green2025]:

**Stage 1 — CpG pre-filtering.** From the 338,185 CpG sites present on both Illumina 450k and EPIC arrays, sites with Pearson |r| < 0.3 with chronological age across the training data are removed, leaving 7,677 candidate CpGs.

**Stage 2 — Genetic algorithm islands model (feature selection).** A penalised genetic algorithm with 4 independent islands selects the optimal CpG subset from the 7,677 candidates. Each island maintains 50 chromosomes (binary strings encoding CpG inclusion/exclusion). Fitness = mean 10-fold cross-validated MAE across all musculoskeletal tissue types (equal-weighting), computed by ridge regression. The multi-tissue fitness averaging is the key design decision: a CpG must improve age prediction *across* tissue types to be retained, preventing the algorithm from collapsing onto tissue-specific sites. An inclusion penalty of 0.01 years per CpG ensures parsimony (a site must reduce cross-tissue MAE by at least this threshold to survive). After 400 iterations with inter-island migration of the fittest chromosomes every 10 iterations, the algorithm converges on 3,365 CpGs.

**Stage 3 — Ridge regression on PCs.** The 3,365 selected CpGs are transformed via singular value decomposition (SVD) into principal components (PCs). Ridge regression maps these PCs to chronological age. Using PCs rather than raw CpG betas reduces collinearity among the selected sites and improves generalisation across array platforms. #gap/needs-replication — the cross-platform stability advantage has been demonstrated (450k vs. EPIC median MskAge difference: −1.28 years, vs. 3.66 years for Horvath) but not independently replicated in a prospective test set.

---

## Training Data

| Dataset origin | Tissue types | Array | Notes |
|---|---|---|---|
| GEO public repositories | Skeletal muscle, cartilage, bone, tendon, MSCs | 450k and EPIC | Multiple GEO accessions (exact accessions not listed in abstract; see published supplement) |
| UK CIMA (Centre for Integrated Musculoskeletal Ageing) | Musculoskeletal tissues (details in paper) | — | Proprietary dataset |
| **Total training** | Multi-tissue musculoskeletal | — | 1,048 samples; 70% training split |
| **Test set** | Multi-tissue musculoskeletal | — | n=307 (30% split) |

Blood samples were also included in the training set but the clock was not designed for blood primary use; blood performance is not a target metric. #gap/needs-replication — the exact GEO accession list and per-tissue sample counts are in the Aging Cell supplement; the PMC full text abstract-level summary used here does not enumerate these.

---

## Validation Performance

### Chronological age prediction

- Test-set MAE (overall): **±3.51 years** across all musculoskeletal tissues [^green2025]
- Test-set R²: **0.92** vs. chronological age
- Tendon tissue: highest tissue-specific MAE (±5.52 years) — likely reflects lower training data representation
- All other musculoskeletal tissues: MAE < 4 years
- Cross-platform stability: MskAge median difference between 450k and EPIC arrays = −1.28 years; Horvath clock difference = 3.66 years in the same comparison (MskAge substantially more platform-stable) [^green2025]

### Comparison with existing clocks (on musculoskeletal tissue)

MskAge outperformed SkinBlood, PhenoAge, GrimAge, and Hannum clocks (all p < 0.05 on the musculoskeletal test set). The Horvath pan-tissue clock performed comparably to MskAge (p = 0.31, non-significant difference) on this tissue type, suggesting Horvath's pan-tissue generalisation captures a meaningful signal in musculoskeletal tissue even without tissue-specific training. MEAT v2 was not evaluable due to training data overlap. [^green2025] #gap/contradictory-evidence — the Horvath equivalence on accuracy (despite no musculoskeletal-specific training) raises the question of whether musculoskeletal-specific feature selection provides genuine biological signal beyond what a pan-tissue clock already captures, or primarily improves platform stability and cross-tissue consistency.

### Osteoarthritis (OA) acceleration

MskAge detects epigenetic age acceleration in OA-lesioned cartilage [^green2025]:

- Lesioned hip cartilage: **+4.029 years** acceleration (FDR = 0.003)
- Lesioned knee cartilage: **+3.16 years** acceleration (FDR = 0.067, borderline)
- Non-lesioned OA cartilage: trend toward acceleration (not statistically significant)
- Osteopenia / osteoporosis bone: no significant MskAge difference from controls

This is the strongest phenotypic-association finding in the published paper. The OA-lesioned cartilage finding is consistent with prior OA-epigenomics literature showing accelerated methylation dysregulation at disease-affected tissue sites. Whether MskAge acceleration in OA cartilage reflects a cause or consequence of joint damage is not resolved. #gap/no-mechanism #gap/needs-replication

### Grip strength and gait speed

Grip strength and gait speed were **not assessed** in the Green 2025 paper — these functional outcomes are absent from the study design. The paper does not report null associations with functional measures; it simply does not test them. Whether MskAge in muscle biopsy correlates with physical function outcomes is an open question. By contrast, the SYMPHONY Age Musculoskeletal sub-clock was explicitly trained to predict physical function biomarkers and shows stronger functional associations in blood samples (z = 8.53 for physical function decline; see [[biomarkers/symphony-age]]). Whether tissue-biopsy biological age and blood-surrogate functional age converge or diverge on functional prediction is not yet established. #gap/needs-replication

---

## Ex Vivo and In Vitro Performance

A key validation domain for MskAge is its behaviour in cell-culture and reprogramming experiments — systems where ground truth for "how fast is this cell aging?" exists [^green2025]:

**Population doubling in primary fibroblasts.** MskAge correlates with the number of cell doublings in primary human fibroblast cultures at R² = 0.73 (FDR < 2.37 × 10⁻³⁴), advancing at a rate of **0.45 years per population doubling**. This outperforms the Skin and Blood (SkinBlood) clock on the same fibroblast data (SkinBlood R² = 0.51), providing quantitative evidence that MskAge captures cellular-level aging dynamics more accurately than a purpose-built skin clock for this cell type.

**Cellular reprogramming (iPSC generation).** When MSCs or fibroblasts are reprogrammed to induced pluripotent stem cells (iPSCs), MskAge resets to approximately zero — consistent with the known epigenetic rejuvenation that accompanies full Yamanaka-factor reprogramming. This is a specificity check: a clock that tracked cellular age should reset upon reprogramming, and MskAge does.

**Partial reprogramming (maturation phase).** In partial reprogramming experiments, MskAge shows a **~30-year decrease** (not full reset), consistent with other third-generation clocks that track biological age changes short of full pluripotency induction. This is potentially relevant for partial-reprogramming-based rejuvenation strategies (see [[processes/partial-epigenetic-reprogramming]] if seeded; implicit stub). #gap/needs-human-replication — all reprogramming data are in vitro; no in vivo partial reprogramming data in musculoskeletal tissue exist.

These in vitro properties make MskAge a useful tool for studying musculoskeletal cell aging in culture models, drug screening, or reprogramming experiments where tissue biopsy is not feasible — a distinct use case from population-level epidemiological biomarker use.

---

## Intervention Responsiveness and Reversibility

### Exercise training (primary focus)

**The Green 2025 paper found no significant change in MskAge in a muscle exercise intervention dataset** [^green2025]. This is a null result that constrains interpretation: in the single exercise dataset evaluated, the clock did not detectably shift. The null may reflect:

1. **Statistical power** — the exercise dataset embedded in the paper may have been underpowered for detecting modest clock changes. No sample size, dataset name, or p-value is given in the main text; the analysis is relegated to supplementary Figure S12 with no elaboration, and no power analysis is reported;
2. **Clock sensitivity** — MskAge was optimised for age prediction accuracy, not sensitivity to physiological interventions; it may lack resolution to detect exercise-induced methylation shifts that do not sum to a net chronological-age prediction change;
3. **True biology** — acute exercise training may genuinely not alter the specific 3,365 CpGs selected by the genetic algorithm, even if it alters overall muscle methylation landscapes.

**Context from adjacent literature.** Several studies using other epigenetic clocks or broader RRBS (reduced representation bisulfite sequencing) approaches in skeletal muscle do show exercise-associated methylation changes:

- Murach et al. 2022 demonstrated that late-life progressive weighted wheel running (PoWeR; combined endurance/resistance protocol) in aged male mice attenuated an age-associated promoter hypermethylation shift, with muscle epigenetic age appearing approximately 8 weeks younger than sedentary controls after 8 weeks of training (~8% of murine lifespan) [^murach2022]. The clock used was DNAge™ (a custom mouse epigenetic clock), not MskAge or MEAT. This study is not cited in Green 2025; it is contextual literature.
- Chambers et al. 2025 (Aging Cell) showed that DNAmAGE was decelerated by up to **68%** after muscle injury and regeneration in aged mice (24–25 months), and that a senolytic (BI01) further modestly but significantly decelerated epigenetic age after regeneration [^chambers2025]. Approximately 25% of measured CpGs were altered by the injury-recovery cycle. This study directly demonstrates that muscle methylome and DNAmAGE are responsive to interventions targeting the senescent cell burden in muscle — relevant to whether MskAge constituent loci are modifiable.
- Kawamura et al. 2025 reviewed human and animal studies and concluded that structured exercise training induces "epigenomic rejuvenation, particularly in blood and skeletal muscle," but with "considerable interindividual and organ-specific variability" [^kawamura2025]. The review does not specifically assess MskAge.
- Jankowski et al. 2024 examined 24 weeks of aerobic and resistance exercise training in older adults with and without HIV and found that **exercise effects on skeletal muscle methylation were not statistically significant** — HIV serostatus had more pronounced effects on the muscle methylome than exercise [^jankowski2024]. This is a convergent null.

**The clock-CpG-correlation-versus-causation caveat.** Even when exercise does alter some muscle CpG methylation sites, this does not mean it moves the specific 3,365 CpGs selected by MskAge's genetic algorithm. The genetic algorithm selected sites that are consistent predictors of chronological age across tissues — these may or may not overlap with the sites that are most responsive to physiological perturbations. A CpG that reliably encodes "how old is this tissue" and a CpG that changes with exercise training are not necessarily the same sites. Whether MskAge's constituent CpGs are part of exercise-responsive loci is not established. #gap/needs-replication

**Resistance training as a modifier of upstream drivers.** Even without direct MskAge clock-score data, there is strong mechanistic reason to believe that resistance training is the most tractable intervention for musculoskeletal epigenetic aging:

- Resistance training activates satellite cells, restores mTORC1 anabolic signalling, and maintains Type II fiber cross-sectional area — the cell types and compartments from which MskAge training muscle samples derive (see [[tissues/skeletal-muscle]]).
- Training reduces the senescent cell burden in muscle [^chambers2025], which may in turn prevent epigenetic age acceleration driven by senescent-cell-associated epigenetic drift.
- Methylome-proteome integration in aged exercised mice (Chambers et al., J Physiol 2025) found that late-life exercise promoted "partial epigenetic reprogramming and epigenetic age mitigation" and coordinated regulation of ribosomal and mitochondrial complex I protein abundance [^chambers2025jphys].

**Summary of intervention-responsiveness evidence:**

| Evidence | Direction | Source | Confidence |
|---|---|---|---|
| MskAge in exercise dataset | Null (no significant change) | Green 2025 [^green2025] | Limited (sample size unknown) |
| Muscle epigenetic age (custom mouse clock) — late-life exercise | ~8% younger vs. sedentary | Murach 2022 [^murach2022] | Low (mouse; not MskAge) |
| DNAmAGE in aged muscle — injury + regeneration ± senolytic | Up to 68% deceleration | Chambers 2025 [^chambers2025] | Low (mouse; not MskAge) |
| Skeletal muscle methylome — exercise, humans with HIV | Null (p=0.79 for MEAT v2 clock) | Jankowski 2024 [^jankowski2024] | Low (human; n=30 total; not MskAge) |
| Review: exercise induces "epigenomic rejuvenation" in muscle | Mixed evidence | Kawamura 2025 [^kawamura2025] | Review-level only |

`intervention-responsive: partial` reflects the adjacent evidence of exercise-associated muscle methylation changes, not a positive MskAge-specific RCT result. No RCT has used MskAge as a primary endpoint.

---

## Recency Literature Search (R25)

Search performed 2026-06-15 (per R25 mandatory recency check for biomarker pages):

- **PubMed search 1 (high-priority — RCTs, meta-analyses, systematic reviews):** `MskAge AND (meta-analysis[pt] OR randomized controlled trial[pt] OR systematic review[pt])` — zero results; entity too new for trial literature.
- **PubMed search 2 (broad recent — 2021–2026):** `skeletal muscle DNA methylation clock aging epigenetic` — 19 hits; triaged to 6 most relevant.
- **PubMed search 3:** `muscle epigenetic clock exercise resistance training DNA methylation 2021–2026` — 4 hits; all reviewed.
- **Europe PMC search:** `Green Reynard musculoskeletal epigenetic clock genetic algorithm` — confirmed published paper (Aging Cell 2025) and preprint (bioRxiv 2023).

Key recency findings integrated:
- **Chambers et al. 2025** (PMID 40259517; Aging Cell): senolytic + injury-regeneration → up to 68% DNAmAGE deceleration in aged mouse muscle. Important context for intervention responsiveness.
- **Kawamura et al. 2025** (PMID 40632934; Aging 2025): exercise as geroprotector — epigenomic rejuvenation in muscle review. Consistent with adjacent exercise-muscle-methylation literature.
- **Chambers et al. 2025** (PMID 39058663; J Physiol 2025): late-life exercise + methylome-proteome integration in aged mice — partial epigenetic reprogramming.
- **Jankowski et al. 2024** (PMID 37920126; Aging Cell 2024): exercise null for muscle methylation in HIV/non-HIV older adults. Convergent null with MskAge's own null.
- **Yang et al. 2025** (PMID 41297061; Aging 2025): 20 age-associated CpG markers in human pectoralis major (autopsy); distinct small-panel model; no exercise data.
- **No contradictions found** with training-era data — the field consistently shows that muscle-specific clocks outperform blood clocks on musculoskeletal tissue but that exercise responsiveness of specific clock CpGs is not established.

---

## Extrapolation Table

| Dimension | Status |
|---|---|
| Trained in human musculoskeletal tissue? | Yes (skeletal muscle biopsy + cartilage + bone + tendon + MSCs) |
| Validated against a disease phenotype? | Yes — OA-lesioned cartilage (significant acceleration) |
| Replicated independently? | No — single-group development study; MEAT v2 comparison not evaluable due to data overlap |
| Exercise-responsive (MskAge-specific)? | Null result in the published paper; adjacent clock literature mixed |
| Causality established (MR)? | Not tested — no germline instruments for MskAge score |

---

## Limitations and Gaps

1. **Muscle biopsy required.** MskAge cannot be estimated from a blood draw. Tissue biopsy (muscle needle biopsy, cartilage arthroscopic sample, bone core, tendon biopsy) is required. This sharply limits clinical scalability and rules out serial longitudinal monitoring at the intervals used for blood-based clocks (monthly or quarterly). Use is currently restricted to research settings. #gap/long-term-unknown

2. **No RCT endpoint.** MskAge has never been used as a primary or secondary endpoint in a human randomized controlled trial. Exercise, senolytic, or pharmacological intervention responsiveness is entirely inferred from adjacent literature using different clocks. #gap/needs-replication

3. **Null exercise result (single dataset, undisclosed n, no power analysis).** The only exercise dataset evaluated in the paper showed no significant MskAge change (supplementary Figure S12). No sample size, dataset identity, p-value, or power analysis is provided in the main text. This null could reflect inadequate statistical power, insensitivity of the clock, or true biology. Powered exercise RCT data are needed. #gap/needs-replication

4. **Training cohort heterogeneity and undisclosed composition.** The training dataset aggregates GEO public data across multiple studies (heterogeneous age ranges, ethnicities, tissue-collection protocols). Per-tissue sample counts and exact GEO accession numbers are in the paper supplement, not the abstract, and could not be verified from the PMC summary alone. #gap/needs-replication

5. **Functional aging associations (grip strength, gait speed) not tested.** The Green 2025 paper did not assess grip strength or gait speed — these endpoints are absent from the study design. Whether MskAge in muscle biopsy predicts functional outcomes is unknown, limiting its current value as a *functional* aging biomarker relative to clocks explicitly trained on functional outcomes (e.g., SYMPHONY Age Musculoskeletal sub-clock). See [[biomarkers/symphony-age]]. #gap/needs-replication

6. **Phenotypic scope limited to OA cartilage.** The only significant phenotypic association is cartilage aging in OA — potentially driven by local tissue damage rather than systemic musculoskeletal aging. Bone, tendon, and skeletal muscle phenotypes did not show significant MskAge acceleration in available datasets. #gap/no-mechanism

7. **MEAT v2 comparison not evaluable.** Training-test data overlap with Voisin's MEAT v2 prevented a head-to-head benchmark — the most informative comparison for users deciding between the two skeletal-muscle-applicable clocks. #gap/needs-replication

8. **No Mendelian randomization.** No germline genetic instruments for MskAge as a composite exposure have been constructed. Causal inference from MskAge acceleration to musculoskeletal disease outcomes is not established. #gap/needs-replication

9. **In vitro data not confirmed in vivo (reprogramming).** The partial reprogramming (~30-year MskAge decrease) finding is in cell culture only. In vivo partial reprogramming in musculoskeletal tissue has not been tested with this clock. #gap/needs-human-replication

10. **`dnam-muscle-function-markers` sibling page** — a concurrent sibling seed page ([[biomarkers/dnam-muscle-function-markers]]) covering broader DNAm markers of muscle function is linked here as an implicit stub; confirm that page exists before relying on this cross-reference.

---

## Cross-references

- [[biomarkers/symphony-age]] — SYMPHONY Age / Systems Age Musculoskeletal sub-clock; trained in blood on physical function biomarkers; contrast with MskAge's tissue-biopsy-based approach
- [[biomarkers/dunedinpace-2022]] — pace-of-aging clock; currently the only DNAm clock with positive RCT intervention data (CALERIE-2); blood-based
- [[biomarkers/grimage-2019]] — GrimAge; mortality-trained blood clock; compared against in the Green 2025 paper (significantly worse on musculoskeletal tissue)
- [[biomarkers/horvath-clock-2013]] — pan-tissue Horvath clock; performed comparably to MskAge in the musculoskeletal tissue test set
- [[biomarkers/dnam-muscle-function-markers]] — sibling page covering broader DNAm markers of muscle function (implicit stub — confirm existence)
- [[tissues/skeletal-muscle]] — skeletal muscle tissue page; satellite-cell aging, sarcopenic mechanisms, exercise-protective interventions
- [[phenotypes/sarcopenia]] — sarcopenia phenotype; canonical downstream consequence of musculoskeletal aging
- [[hallmarks/epigenetic-alterations]] — hallmark context for DNAm clocks; MskAge CpGs reflect epigenetic drift in musculoskeletal tissue
- [[processes/partial-epigenetic-reprogramming]] — in vitro reprogramming resets MskAge; page may not exist yet (implicit stub)
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC; MskAge should be listed as the tissue-biopsy-based musculoskeletal representative

---

## Footnotes

[^green2025]: doi:10.1111/acel.70149 · Green DC, Reynard LN, Henstock JR, Reppe S, Gautvik K, Peffers MJ, Shanley DP, Clegg PD, Canty-Laird EG · *Aging Cell* 2025 · 24(9):e70149 · PMID 40538142 · PMC12419849 (gold OA) · preprint: doi:10.1101/2023.05.04.539347 (bioRxiv 2023) · observational (development + test-set validation); n=1,048 training samples; n=307 test set · tissues: skeletal muscle, cartilage, bone, tendon, MSCs + blood (Illumina 450k and EPIC arrays) · 3,365 CpGs selected by penalised genetic algorithm islands model (4 islands, 400 iterations); SVD → ridge regression · test-set MAE ±3.51 yr overall; R²=0.92; OA lesioned hip cartilage +4.029 yr acceleration (FDR=0.003); fibroblast population-doubling R²=0.73 (0.45 yr/doubling); MSC→iPSC resets to ~0; no significant MskAge change in exercise intervention dataset · model: human musculoskeletal tissue biopsy

[^voisin2021]: doi:10.1002/jcsm.12741 · Voisin S et al. (incl. Eynon N as corresponding author) · *Journal of Cachexia, Sarcopenia and Muscle* 2021 · n=1,053 human skeletal muscle methylomes (ages 18–89; 10 studies meta-analysed; MEAT v2 update adds 371 samples to original MEAT) · observational meta-analysis · MEAT v2 MAE ~4.4 yr vs. chronological age; 6,710 differentially methylated regions (FDR<0.005) across 6,367 genes · model: human skeletal muscle biopsy (Illumina arrays) · note: MEAT training data overlaps MskAge test set; direct head-to-head comparison not feasible

[^murach2022]: doi:10.1111/acel.13527 · Murach KA, Dimet-Wiley AL, Wen Y et al. · *Aging Cell* 2022 · n=5/group aged mice (22–24 months); 8-week progressive weighted wheel running (PoWeR; combined endurance-resistance) vs. sedentary · in-vivo mouse exercise intervention + epigenetic clock analysis (DNAge™ clock) · late-life exercise attenuated age-associated shift toward promoter hypermethylation; exercised aged muscle epigenetic age ~8 weeks younger than sedentary controls (~8% of murine lifespan) · model: aged male mice · PMID 34932867 · note: clock is DNAge™ (custom mouse epigenetic clock), not MskAge; not cited in Green 2025

[^chambers2025]: doi:10.1111/acel.70068 · Chambers TL, Wells J, Koopmans PJ, Morena F, Malik ZB, Greene NP, Filareto A et al. · *Aging Cell* 2025 · n=aged male mice (24–25 months); 35-day recovery after BaCl₂-induced muscle regeneration ± senolytic BI01 · in-vivo mouse senolytic + injury-regeneration experiment · DNAmAGE decelerated up to 68% after injury in aged muscle; senolytics further significantly decelerated epigenetic age; ~25% of CpGs altered by injury-recovery; key genes regulated: Col, Hdac, Hox, Wnt family · model: aged male mice, skeletal muscle · PMID 40259517 · note: uses pan-tissue mouse DNAmAGE clock, not MskAge; provides mechanistic precedent for muscle epigenetic plasticity

[^chambers2025jphys]: doi:10.1113/JP286681 · Chambers TL, Dimet-Wiley A, Keeble AR, Haghani A et al. (Murach KA, Wen Y corresponding authors) · *The Journal of Physiology* 2025 · 603(1):211–237 · n=aged female mice (22–24 months); late-life progressive weighted wheel running (PoWeR) · in-vivo mouse exercise + pan-mammalian methylation arrays · late-life exercise promotes partial epigenetic reprogramming and "epigenetic age mitigation" in muscle; differentially methylated promoters regulate Nr4a3, Hes1, Hox genes; methylome-proteome integration implicates ribosomal and mitochondrial complex I protein abundance · model: aged female mice, skeletal muscle · PMID 39058663

[^kawamura2025]: doi:10.18632/aging.206278 · Kawamura T, Higuchi M, Radak Z, Taki Y · *Aging (Albany NY)* 2025 · review · inverse relationship between cardiorespiratory fitness and epigenetic age acceleration in observational studies; structured exercise "can induce epigenomic rejuvenation, particularly in blood and skeletal muscle" but with "considerable interindividual and organ-specific variability"; no randomised trial evidence specific to MskAge · model: human and animal studies review · PMID 40632934

[^jankowski2024]: doi:10.1111/acel.14025 · Jankowski CM, Konigsberg IR, Wilson MP et al. · *Aging Cell* 2024 · n=12 people with HIV + n=18 uninfected controls; 24-week aerobic + resistance exercise training · controlled trial with two HIV-serostatus groups · 237 differentially methylated positions identified after training; exercise effect on MEAT v2 epigenetic clock score not statistically significant (p=0.79); 983 DMPs distinguished HIV from controls at baseline; HIV serostatus had more pronounced effects on muscle methylome than exercise · model: human skeletal muscle biopsy (vastus lateralis), adults ≥50 yr · PMID 37920126 · note: uses MEAT v2 clock analysis, not MskAge-specific; convergent null for exercise-muscle-methylation effect on epigenetic clock score
