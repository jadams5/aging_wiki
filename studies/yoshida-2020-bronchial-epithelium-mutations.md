---
type: study
doi: 10.1038/s41586-020-1961-1
pmid: 31996850
pmc: PMC7021511
title: "Tobacco smoking and somatic mutations in human bronchial epithelium"
authors: [Yoshida K, Gowers KHC, Lee-Six H, Chandrasekharan DP, Coorens T, Maughan EF, Beal K, Menzies A, Millar FR, Anderson E, Clarke SE, Pennycuick A, Thakrar RM, Butler CR, Kakiuchi N, Hirano T, Hynds RE, Stratton MR, Martincorena I, Janes SM, Campbell PJ]
year: 2020
journal: Nature
study-design: in-vivo
publication-type: research-article
volume: 578
issue: 7794
pages: 266-272
organism: homo-sapiens
n-subjects: 16
intervention: []
hallmarks-tested: ["[[genomic-instability]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [somatic-mutation-burden-per-cell, smoking-mutagenic-effect-normal-tissue, ex-smoker-near-normal-cell-population, driver-mutation-prevalence, mutational-signatures-SBS4-SBS5]
local-pdf: null
verified: true
verified-date: 2026-06-12
verified-by: claude
verified-scope: "Full PMC OA text cross-checked (PMC7021511). Supplementary Table 1 not independently accessed (Excel file not accessible via PMC web); per-subject pack-year data confirmed present in supplement per Methods statement. Main-text quantitative claims verified. See corrections in log/2026-06-12.md."
---

# Tobacco Smoking and Somatic Mutations in Human Bronchial Epithelium

**TL;DR:** Whole-genome sequencing of 632 single-cell-derived colonies from bronchial epithelial biopsies across 16 subjects (3 children, 4 never-smokers, 6 ex-smokers, 3 current smokers) provides the first systematic quantification of somatic mutation burden in **normal** (non-cancerous) human bronchial epithelium as a function of tobacco exposure. Current smokers accumulate ~5,300 additional SNVs per cell beyond the age-matched baseline (median; 95% CI 3,660–6,930); ex-smokers accumulate ~2,330 additional SNVs per cell (95% CI 1,180–3,480). Critically, a subpopulation of cells with near-normal mutation burdens — carrying far fewer mutations than expected for active smokers — is **fourfold more frequent in ex-smokers than in current smokers** (95% CI 2.0–7.9×; p = 3×10⁻⁶) and carries longer telomeres, pointing to quiescent stem-cell progeny that avoided tobacco mutagenesis. This subpopulation is the proposed cellular basis for the lung's partial recovery after smoking cessation — the "quit benefit" mechanism operating at the level of normal-tissue somatic mutation. This is the **canonical normal-tissue anchor** for the [[exposures/smoking]] → [[hallmarks/genomic-instability]] dose-response in the causal graph; it is complementary to and distinct from Alexandrov 2016, which quantified mutation burden in **cancer-tissue** lung adenocarcinomas.

---

## Why this study is indexed here (use case)

The aging-simulator causal graph carries a stub edge `smoking → genomic-instability` whose populate-blocker is the lack of a verified normal-tissue smoking→somatic-mutation dose-response. Alexandrov et al. 2016 (Science, doi:10.1126/science.aag0299), cited on the [[hallmarks/genomic-instability]] page, quantifies smoking-associated mutational signatures in lung **cancer** genomes — a selection-distorted endpoint. Yoshida 2020 provides the biologically appropriate anchor: mutation burden in histologically normal bronchial cells from subjects with known smoking histories, before any oncogenic transformation. This distinction is critical for any model of mutation-accrual rate in normal aging tissue.

---

## Study design

| Field | Value |
|---|---|
| Tissue | Main or secondary bronchi (biopsies or brushings) |
| Cell isolation | Enzymatic dissociation → EpCAM+ epithelial cell flow sorting → one cell per well onto mouse feeder layers → single-cell-derived clonal colonies |
| Sequencing | Whole-genome sequencing (WGS); average coverage 16× (minimum inclusion threshold 8×; >95% sensitivity at 15×) |
| Variant calling | Single-nucleotide variants (SNVs) and small insertions/deletions (indels) called against each subject's matched germline; somatic mutation burden = genome-wide SNVs per cell |
| Subjects | 16 total: 3 children (never-smokers, used for baseline rate calibration), 4 adult never-smokers, 6 ex-smokers, 3 current smokers |
| Colonies sequenced | 632 total |
| Mutational signature decomposition | COSMIC SBS signature framework |

**No laser-capture microdissection.** Unlike some normal-tissue WGS studies, this study cultured cells through a colony step (EpCAM+ sorted cells expanded on feeder layers); individual colonies derive from single founder cells and their full genomes are sequenced after expansion. This avoids single-cell amplification artefacts at the cost of any selection bias during the culture step (cells that proliferate in vitro are captured; quiescent cells may be under-represented — a verifier-flagged caveat for the near-normal cell finding; see § Limitations).

---

## Key quantitative findings

### Baseline somatic mutation rate (age-dependent, endogenous)

- Normal bronchial epithelial cells accrue somatic mutations throughout life at a rate of **~22 SNVs per cell per year** (95% CI 20–25; p = 10⁻⁸) in non-smokers [^yoshida2020].
- Indels accumulate at **~0.7 per cell per year** (95% CI 0.6–0.8; p = 10⁻⁶).
- The dominant endogenous signature is **COSMIC SBS-5** (clock-like, attributed to replication fidelity errors + deamination of methylated cytosines).

These figures establish the age-related normal-tissue mutation-accrual baseline for the bronchial epithelium. They are directly applicable to populating the endogenous (age-driven) arm of the `genomic-instability` node as a rate-integrated quantity.

**Absolute burden at specific ages (for simulator use):** The paper does not state absolute per-cell SNV counts at specific age milestones directly. Figure 1B shows the regression of individual colony mutation counts against age (linear fit, coloured by smoking status), from which an approximate absolute burden can be read. Using the reported slope (22 SNVs/cell/year) and accepting the regression model's intercept implies an order-of-magnitude estimate: a never-smoker at age 50 carries approximately **~1,100 SNVs/cell** (50 yr × 22 SNVs/yr) as a rough linear projection. The regression intercept (burden at age 0) is not explicitly reported in the text; it is visible only from Figure 1B. Because the intercept is not reported numerically, the simulator should treat 22 SNVs/cell/year as the verified rate and derive the absolute burden by integration over age, rather than hard-coding a specific age-point value. #gap/intercept-not-reported — the numeric intercept from Figure 1B regression should be read from the figure if a precise absolute baseline is required.

### Smoking-associated additional mutation burden

| Smoking status | Additional SNVs per cell (vs never-smoker age-matched baseline) | 95% CI | SD within group |
|---|---|---|---|
| Never-smokers (adults) | 0 (reference) | — | ~290/cell |
| Ex-smokers | +2,330 | 1,180–3,480 | ~2,350/cell |
| Current smokers | +5,300 | 3,660–6,930 | ~2,100/cell |

The **massive increase in variance** within smoking groups (SD ~2,100–2,350/cell vs ~290/cell in never-smokers; p < 10⁻¹⁶ across categories) is itself a major finding: smoking does not uniformly mutate all cells — some cells in current smokers carry near-never-smoker burdens, while others carry extreme burdens. This heterogeneity is the empirical basis for the near-normal cell subpopulation [^yoshida2020].

**Note on per-pack-year slope:** The authors explicitly state: "Among current and ex-smokers, we found no significant correlation of mutation burden with duration of cigarette smoking or the number of cigarettes smoked per day." Per-subject smoking history data (including pack-years, cigarettes/day, and duration) are in Supplementary Table 1 (confirmed in Methods: "Details of the patients studied are listed in Supplementary Table 1"), but with only 3 current smokers and 6 ex-smokers the study is severely underpowered for regression. **A continuous per-pack-year dose-response slope is not derivable from this study.** The broad range of additional mutation burden across subjects (~1,000–10,000 SNVs above baseline, per the main text range) reflects between-subject variance, not a dose-response curve — and the study itself could not resolve whether this variance tracks pack-years. Only a categorical (never/ex/current) representation is empirically defensible from this dataset. #gap/dose-response-unclear — a larger normal-tissue WGS cohort (n ≥ 30–50 smokers with quantified pack-year histories) would be required to estimate the per-pack-year coefficient for the simulator.

**Indels from smoking:** Current smokers acquired ~101 extra indels per cell and ex-smokers ~51 extra indels per cell (combined smoking-effect p = 0.001). No separate 95% CIs are reported for these two subgroup estimates; the p-value covers the overall smoking effect on indel burden.

### Mutational signatures

- **SBS-4** (tobacco-associated; C>A transversions characteristic of PAH bulky adducts): present in smokers, absent in never-smokers.
- **SBS-16** (T>A/T>C): present in 5–15% of mutations in several current or ex-smokers; absent from never-smokers.
- **SBS-B (Sig-B)** (T>A/T>C): also evident only in subjects with a smoking history.
- **SBS-5** (endogenous, clock-like): major contributor across all subjects; elevated in smokers — ex-smokers 1,140 additional SBS-5 mutations/cell (95% CI 590–1,700); current smokers 2,200 additional/cell (95% CI 1,590–2,810; p < 10⁻¹⁶). The SBS-5 elevation in smokers suggests that tobacco also accelerates the endogenous mutation-accrual clock, not only directly mutagenises via PAH adducts.
- **APOBEC (SBS-2/13)**: mostly absent from bronchial cells, but episodically contributed hundreds of mutations in individual cells — temporally restricted, clustered bursts. #gap/no-mechanism — the trigger for these APOBEC bursts in normal bronchial epithelium is not established.

### Driver mutation prevalence

| Group | Cells with ≥1 driver mutation | Notes |
|---|---|---|
| Children | 0% | Baseline; age-calibration |
| Adult never-smokers | 4–14% | Increases ~1.5-fold per decade of life (95% CI 1.2–2.1; p = 0.004) |
| Current smokers | ≥25% | 0–6% of cells carried 2–3 drivers |
| Effect size (smokers vs never-smokers) | 2.1-fold (95% CI 1.0–4.4; p = 0.04) | Limited power (n=3 current smokers) |

Driver mutations were identified across a panel of 86 driver genes reported in lung cancer or normal skin/oesophagus tissues (Methods). Key mutated genes identified include NOTCH1, TP53, ARID2, FAT1, PTEN, CHEK2, and ARID1A. The striking prevalence in never-smoker middle-aged adults (4–14%) is consistent with earlier work by Martincorena et al. showing widespread positive selection in normal epithelia and establishes that premalignant clonal expansion is a ubiquitous feature of aging bronchial tissue even without smoking exposure [^yoshida2020].

### The near-normal mutation-burden cell subpopulation (the "quit benefit" mechanism)

A subset of cells in ex-smokers and a smaller fraction in current smokers carry mutation burdens within the range expected for never-smokers of the same age. **Definition used:** a cell is classified as "near-normal" when its mutation burden is less than 2 within-patient non-smoker standard deviations plus 2 between-patient non-smoker standard deviations above the age-estimated never-smoker burden (Methods).

- **Frequency in ex-smokers:** ~20–40% of sequenced cells (range across subjects; exact per-subject data in supplement).
- **Frequency in current smokers:** rare (quantitative threshold not explicitly stated in main text; described as "rarely present").
- **Fourfold enrichment in ex-smokers vs current smokers:** 95% CI 2.0–7.9×; p = 3×10⁻⁶ [^yoshida2020].
- **Origin:** Polyclonal (not a single clone that expanded). Cells show **longer telomeres** than their highly-mutated counterparts from the same subjects (p = 0.0009 for the interaction with smoking status). The telomere evidence suggests these are **descendants of quiescent basal stem cells that had fewer cell divisions** and therefore less replication-associated mutagenesis and less time for tobacco carcinogens to act.
- **Mechanistic interpretation:** Smoking cessation allows replenishment of the bronchial epithelium from a reservoir of mitotically quiescent stem cells that were partly shielded from tobacco mutagenesis. The authors invoke a two-compartment model: "relatively short-lived proliferative progenitors are slowly replenished from a quiescent stem cell pool, but the progenitors are more exposed to tobacco carcinogens." A physically protected niche or mitotic quiescence itself (replication being required to convert adducted DNA to fixed mutations) could explain how quiescent stem cells escape mutagenesis. **The mutation burden in highly-mutated cells is irreversible at the cell level:** the authors note that lung cancers arising in ex-smokers "typically show high mutation burden associated with active tobacco signatures" — implying damaged cells retain their burden permanently. The lower population-average burden in ex-smokers therefore reflects **dilution by expanding near-normal cells, not cellular repair of mutational damage.** This distinction is critical for the simulator: model irreversible per-cell accrual + quiescent-cell repopulation, not mutation removal or decay. The authors conclude: "Stopping smoking, at any age, does not just slow the accumulation of further damage, but can reawaken cells unscathed by past lifestyle choices."

This finding is the only **human normal-tissue** quantitative evidence for the quit-benefit mechanism at the cellular/mutational level and is cited in the [[exposures/smoking]] page as context for the reversibility section.

---

## Evidence-quality table

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — DNA mutagenesis by tobacco carcinogens (PAH adducts → SBS-4) is fully human |
| Phenotype conserved in humans? | Yes — study is entirely human (n=16; normal bronchial epithelium) |
| Replicated in humans? | Partial — the SBS-4 tobacco signature in cancer genomes is well-replicated (Alexandrov 2016); the normal-tissue quantification of per-cell mutation burden in non-cancer tissue is novel and not yet independently replicated at comparable resolution; the near-normal cell subpopulation finding is a single-study observation #gap/needs-replication |

---

## Limitations

1. **Small n.** 16 subjects total; only 3 current smokers and 6 ex-smokers. This severely limits power for per-pack-year regression, subgroup analyses, and dose-response quantification. The "no significant per-pack-year correlation" finding is almost certainly an underpowered null, not a true absence of dose-response. #gap/dose-response-unclear

2. **In-vitro culture selection bias.** Single cells are expanded as colonies on feeder layers before sequencing. Cells capable of proliferating in culture may differ systematically from non-proliferating quiescent cells in vivo. If highly quiescent cells (the near-normal subpopulation in ex-smokers) are *more* likely to survive and form colonies, the near-normal frequency could be overestimated. If quiescent cells proliferate *less* efficiently in culture, they would be under-represented. The direction and magnitude of this bias are not fully characterized in the paper. #gap/unsourced (culture-selection bias quantification not provided).

3. **No per-pack-year slope.** Because smoking duration and intensity data are in supplementary tables and no significant correlation was found (limited n), the simulator cannot be populated with a per-pack-year coefficient from this study alone. Alexandrov 2013 (Nature, cancer tissue) provides the slope in cancer tissue, which is a different (selection-distorted) endpoint.

4. **Single tissue type.** Findings apply to bronchial epithelial basal cells. Generalizability to other smoking-exposed tissues (e.g., bladder epithelium, oral mucosa, oesophagus) requires separate studies; some COSMIC signature data exist for these tissues but at lower resolution.

5. **Children as baseline.** Endogenous mutation rate calibration uses 3 children as the age-0 reference population. Developmental mutations and childhood-specific exposures could confound the age-calibration. The adult never-smoker slope is more reliable for adult aging biology.

---

## Relation to causal graph and wiki cross-references

This study is the **primary normal-tissue citation** for:

- [[exposures/smoking]] → [[hallmarks/genomic-instability]] stub edge (SBS-4 accumulation in normal bronchial basal cells; dose-response pending larger study)
- [[processes/somatic-mutation-accumulation]] § Tissue-rate table (bronchial epithelium baseline: ~22 SNVs/cell/year)
- [[hallmarks/genomic-instability]] § Somatic mosaicism (human normal-tissue in vivo evidence)
- [[exposures/smoking]] § Mutagenesis mechanism and § Reversibility (quit-benefit normal-tissue cellular basis)

The near-normal cell finding also constitutes in vivo human evidence for the **resilience and regenerative capacity** arm of the [[processes/somatic-mutation-accumulation]] framework — specifically the proposition that tissue-level mutation burden is not simply a ratchet but can be partially reset by stem-cell-pool expansion under reduced mutagenic pressure.

**Comparison with Alexandrov 2016 (doi:10.1126/science.aag0299):** Alexandrov 2016 quantifies smoking-associated mutation burden in ~5,000 cancer genomes across multiple tumor types, identifying SBS-4 as the canonical tobacco signature and estimating ~150 additional SNVs/cell/year in lung adenocarcinomas from active smokers. These figures are **not directly comparable** to Yoshida 2020's normal-tissue data for three reasons: (a) cancer genomes undergo subsequent selection-driven mutation accumulation beyond the initiating burden; (b) lung adenocarcinomas arise from peripheral alveolar pneumocytes / Club cells, not from the central airway basal cells assayed by Yoshida 2020; (c) the analysis unit in Alexandrov 2016 is the tumor genome, not a normal cell. Yoshida 2020 is therefore the appropriate citation for the normal-tissue mutagenic baseline; Alexandrov 2016 is appropriate only for cancer-tissue mutation burden or signature identification.

**Cagan et al. 2022 (doi:10.1038/s41586-022-04618-z; Nature)** — cross-mammalian somatic mutation rate study — provides the evolutionary context: somatic mutation burden at end of life is constrained to ~3-fold variation across 16 mammalian species spanning 30-fold lifespan difference, suggesting mutation rates are subject to evolutionary constraint linked to lifespan. Yoshida 2020's human bronchial data (22 SNVs/cell/year endogenous) is consistent with the ~23–29 SNVs/cell/year reported for human tissues in Cagan 2022 and is cited alongside it in [[processes/somatic-mutation-accumulation]].

---

## Footnotes

[^yoshida2020]: [[studies/yoshida-2020-bronchial-epithelium-mutations]] · n=16 subjects (3 children, 4 never-smokers, 6 ex-smokers, 3 current smokers); 632 colonies · in-vivo, WGS of single-cell-derived bronchial epithelial colonies · human tissue · doi:10.1038/s41586-020-1961-1 · pmid:31996850 · pmc:PMC7021511 (OA) · Nature 578:266-272 (2020) · Wellcome Sanger Institute; senior authors Martincorena I, Janes SM, Campbell PJ · 346 citations (Semantic Scholar, as of 2026-06-12)
