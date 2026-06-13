---
type: framework
aliases: [biological age, age clocks, "biological age measurement", aging biomarkers, epigenetic clocks overview]
sources: []
covers: [biomarkers, intervention-responsive-aging-tests]
---

# Biological Age Measurement

A navigational MOC for the wiki's biomarker layer. Framework pages do not originate primary claims — follow wikilinks to biomarker pages for n, p-values, and methodology.

---

## Why Biological Age Matters

Chronological age is a covariate, not a mechanism and not a manipulable phenotype. If a geroprotective intervention works, it must do so by changing something biological — and we need ways to measure that change. Biological age estimators are the field's current attempt to provide **a manipulable test for "did intervention X work?"**

The central tension: no biological age estimator currently has a validated causal chain from clock-value to mortality-reduction. All existing clocks are either (a) trained to predict chronological age (first generation), (b) trained to predict mortality risk (second generation), or (c) trained to measure rate-of-biological-change (third generation). Each answers a different question. None has yet been shown to *cause* aging when elevated, or to *extend lifespan* when lowered by an intervention. The field is making progress on this question but has not resolved it.

---

## The Clock Taxonomy

### First generation: chronological-age trained

Trained to predict how old someone is from a biological readout. Not optimized for any health outcome.

| Clock | Modality | Features | MAE vs age | Cross-tissue? |
|---|---|---|---|---|
| [[biomarkers/horvath-clock-2013]] | DNAm | 353 CpGs | 3.6 yr | Yes (51 tissue types) |
| [[biomarkers/hannum-clock-2013]] | DNAm | 71 CpGs | ~3–4 yr | No (blood only) |
| [[biomarkers/lehallier-proteomic-clock-2019]] | Plasma proteomics | 373 proteins | ~2.9 yr (#gap/needs-replication — appears in main Fig. 1g, absent from PMC author manuscript) | No (plasma only) |

**What they answer:** "How old does this tissue look?"  
**What they don't answer:** "How much longer will this person live?" or "Is this intervention slowing aging?"

### Second generation: mortality-trained

Trained against mortality or morbidity endpoints rather than chronological age. They ask: "how risky is this person's biology for death?"

| Clock | Modality | Features | Training target | Mortality HR |
|---|---|---|---|---|
| [[biomarkers/phenoage-2018]] | DNAm (9 clinical biomarkers → 513 CpGs) | 513 CpGs | Clinical PhenoAge (Cox penalized regression → Gompertz mortality score, NHANES III) | DNAm: Meta HR=1.045 [1.039–1.051]; Clinical: HR=1.09 (NHANES IV) |
| [[biomarkers/grimage-2019]] | DNAm (7 protein surrogates + smoking) | Composite | Time-to-death (Framingham) | Highest among clocks |
| [[biomarkers/omicmage]] | DNAm → 40 EBP surrogates (16 protein / 14 metabolite / 10 clinical) | 990 CpGs + 40 EBPs | EMRAge (Cox PH, EHR-anchored) → mortality + morbidity | Gen Scotland all-cause HR=11.31 (CVD 4.14, T2D 4.18); 5-yr mortality AUC 0.892. **TruDiagnostic-proprietary** (substitutes GrimAge in their bundle); positive signal in Corley 2026 semaglutide RCT (−2.2 yr, exploratory) |

**What they answer:** "How much does this person's biology resemble someone who will die sooner?"  
**Limitation:** Mortality-trained clocks may be sophisticated repackagings of known clinical risk factors. Their Mendelian randomization evidence is null for lifespan (Schooling 2025 — see [[hypotheses/information-theory-of-aging]] verified).

### Third generation: pace-of-aging trained

Trained to measure **how fast** someone is aging, not where they are on the aging trajectory.

| Clock | Modality | Features | Training target | ICC |
|---|---|---|---|---|
| [[biomarkers/dunedinpace-2022]] | DNAm | 173 CpGs | Longitudinal pace across 19 biomarkers over 20 yr | 0.96 (95% CI 0.93–0.98) |

**What it answers:** "Is this person aging faster or slower than average right now?"  
**Key advantage:** DunedinPACE is the only clock that has responded to a well-powered human RCT (CALERIE-2; slowed by CR d=−0.25, p<0.003).  
**Key limitation:** Training cohort was young (age 26–45); validation in elderly populations is incomplete.

### Other modalities

| Biomarker | Modality | Page |
|---|---|---|
| Leukocyte telomere length | Direct measurement | [[biomarkers/telomere-length-leukocyte]] |
| Frailty Index | Composite clinical | [[biomarkers/frailty-index]] |
| GlycanAge (IgG N-glycome) | Glycomic | [[biomarkers/glycanage-2017]] — most rapidly intervention-responsive clock characterized to date; 2026 Mijakovac/Lauc preprint (n=20,045 cross-study) reports independent all-cause-mortality association and reversal by HRT, TPE, caloric restriction. See [[studies/mijakovac-2026-igg-glycome-mortality]]. #gap/needs-peer-review |
| SYMPHONY Age / Systems Age (organ-system DNAm) | DNAm, decomposed across 11 physiological systems | [[biomarkers/symphony-age]] — returns a separate DNAm age per organ system (Blood/Brain/Inflammation/Heart/Hormone/Immune/Kidney/Liver/Metabolic/Lung/Musculoskeletal); surfaces *intra-individual aging heterogeneity* rather than one number. Academic "Systems Age" (Sehgal 2025 *Nature Aging*, Yale/Levine); TruDiagnostic commercial implementation. Informational — **no validated organ-clock-targeted interventions as of 2026**. |

### Tissue-specific (skin/epidermis) clocks

A small but growing set of methylation clocks are trained on a single tissue rather than pan-tissue. The skin-specific clocks are the most developed family:

| Clock | Year | Trained on | MAE | Notes |
|---|---|---|---|---|
| [[bormann-epidermis-clock-2016]] | 2016 | n=108 white females (450k punch biopsy + suction blister) | LOOCV ρ=0.92, MAE <5.25 yr; Vandiver indep MAE 6.72 yr vs Horvath 12.1 yr on epidermis | Foundational skin clock; SVM architecture (no compact CpG list); first tissue-specific methylation clock for human epidermis |
| [[qi-23k-epidermis-clock-2026]] | 2026 | 173 CpGs / 23,845-probe panel selected from Infinium EPICv2 array / extends Bormann 2016 cohort with multi-Fitzpatrick validation | CV error 5.66 yr (glmnet MSE); **MAE 4.88 yr** (multi-ethnic external validation) | Cross-Fitzpatrick (I–VI) validated; no detectable ethnic bias; first skin clock moved by a topical intervention (Qi 2026 DHM serum, **−2.08 yr** reduction in 8 wk; open-label, no vehicle control — but paper does include a partial-correlation sunscreen-confound analysis showing the serum-effect survives sunscreen adjustment). **Beiersdorf-funded; 8 of 15 authors are Beiersdorf employees**; same group developed the compound, the clock, and ran the trial — see [[studies/qi-2026-dhm-epigenetic-skin-aging]] (full PDF verified 2026-05-19) |
| [[menendez-vazquez-2025-mitrasolo-mitracluster]] | 2025 | Epidermis (tape-strip + in-vitro material); n=462 enzymatic methyl-sequencing samples (largest reported epidermal MeSeq dataset); dual-clock design (MitraSolo single-sample + MitraCluster region-aggregated) | **MAE ~4 yr** (abstract-reported); intra-individual variation **<2 yr** — best noise-floor characterization among published skin clocks | Independent of the Beiersdorf/DKFZ lineage (Bormann → Qi 23k → TapeLift); developed by **Mitra Bio** with Mahdi Moqri as external co-author; uses enzymatic methyl-seq rather than Illumina arrays — different bioinformatics pipeline; detects rejuvenation signal in Yamanaka-factor-treated cells (in-vitro); full-text unavailable as of 2026-05-19 → CpG counts + architecture + cohort demographics unverified #gap/no-fulltext-access |
| [[tapelift-clock-2026]] | 2026 | tape-strip forehead samples (Caucasian-only training, n=105 enrolled → 71 train / 18 val / 19 independent test) | elastic-net 157 CpGs RMSE 6.2 yr / PC clock 5,021 CpGs RMSE 5.1 yr (independent n=19) | Two-clock paper; Caucasian-only training — the "no non-white bias" property attributed to TapeLift in narrative reviews originates from **Qi 2026's independent application (n=17 multi-ethnic test set)**, NOT from the original Rodríguez-Paredes 2026 paper itself; tumor-suppressor-gene mitotic-age angle distinguishes from pure chronological-age clocks; see [[studies/rodriguez-paredes-2026-tapelift-clock]] |
| [[skin-autofluorescence-age-reader]] | 2004+ | DiagnOptics AGE Reader; UV-excitation fluorescence ~370 nm; volar forearm | n=72,880 (van Waateringe 2019 LifeLines) + n=77,143 (Boersma 2024 LifeLines, 115-mo follow-up); MACE HR 1.54 (Chen 2022 meta-analysis, n=79,389) | Structural biomarker (NOT methylation clock); measures fluorescent-AGE subset on dermal collagen (misses CML — most common AGE); Fitzpatrick V/VI requires dark-skin correction; FDA-cleared Class II; strong evidence base for CV/T2DM/CKD risk stratification |

With four independent skin methylation clocks now seeded as standalone biomarker pages (Bormann 2016, Qi 23k 2026, TapeLift 2026, MitraSolo/MitraCluster 2025), a class MOC at `biomarkers/skin-methylation-clocks.md` may now be warranted to summarize cross-clock comparison and shared limitations. **Caveat:** none of the skin-specific clocks have published test-retest ICC stress-testing analogous to the [[biomarkers/horvath-clock-2013]] PC-version reliability work [^higginsChen2022]; intervention-responsiveness claims should be interpreted with that caveat.

---

## Clock Tradeoffs: What Each Predicts

**The central insight (not yet resolved):** These clocks are measuring different things. A person who scores "old" on Horvath may score "average" on DunedinPACE, and vice versa. An intervention can move one clock without moving others. Whether this reflects real biological heterogeneity (aging has multiple orthogonal dimensions) or methodological noise is the field's central open question.

| Clock | Best at | Worst at | Intervention utility |
|---|---|---|---|
| Horvath 2013 | Cross-tissue comparison; most-studied | Insensitive to interventions; not mortality-optimized | Low (null in multiple RCTs) |
| Hannum 2013 | Blood-specific precision; historical epidemiology | Blood-only; smaller cohort; not mortality-optimized | Low |
| PhenoAge 2018 | Mortality prediction; clinically interpretable components | Null in CALERIE-2; MR evidence null | Low-moderate |
| GrimAge 2019 | Strongest mortality HR; includes disease-biology signals | Null in CALERIE-2; circularity; smoking confound | Low (null in CALERIE-2) |
| DunedinPACE 2022 | Intervention responsiveness; best test-retest ICC; rate-sensitive | Young training cohort; single RCT data only | High (CALERIE-2 positive) |
| LTL | Mechanistically interpretable; disease-specific (CAD causal; longer LTL raises cancer risk) | Poor reliability; no direct MR of all-cause mortality — life expectancy modeling shows ~2.5-yr reduction for LTL >1 s.d. below mean; IPF attribution requires separate citation | Low |
| Frailty Index | Clinical accessibility; cross-species (mouse); direct interpretability | Insensitive in younger/healthier adults; standardization issues | Moderate (exercise RCTs) |
| Lehallier proteomics | Non-DNA modality; non-monotonic waves; mechanistic proteins | Expensive platform; no RCT data | Unknown |

---

## Reproducibility Issues: The Higgins-Chen 2022 Critique

A computational analysis by Higgins-Chen et al. 2022 (Nature Aging; doi:10.1038/s43587-022-00248-2) demonstrated that **conventional DNAm clock scores have substantial technical noise** from batch effects, sample handling, and array normalization — reducing test-retest ICC below what would be needed for sensitive longitudinal tracking [^higginsChen2022]. The paper proposed **principal-component (PC) clock versions** that regress out technical noise components and substantially improve test-retest reliability:

- PC-Horvath, PC-Hannum, PC-PhenoAge, PC-GrimAge all show improved ICC vs conventional versions
- The improvement is meaningful for longitudinal study design — reducing n-requirements for detecting intervention effects
- DunedinPACE's architecture (trained differently) already achieves high ICC (0.96, 95% CI 0.93–0.98) without PC correction

**Implication for wiki:** Clock studies published before PC-correction was available should be interpreted with the technical noise caveat. For new intervention trials, PC-corrected clocks or DunedinPACE are the methodological standard.

**External tools:**
- DNAm Age calculator: https://dnamage.clockfoundation.org/ (web-based; uploads array data and returns multiple clock scores)
- methylClock R package: Bioconductor; implements multiple clocks including PC versions
- methylationGSEA R package: gene-set analysis of methylation data in aging context
- Open Aging Atlas: https://ngdc.cncb.ac.cn/aging/ — multi-omics aging data (transcriptomics, epigenomics, single-cell, some proteomic datasets)

---

## The Intervention-Responsiveness Debate

### What we know from CALERIE-2 (Waziry 2023)

The CALERIE-2 trial is the single most important intervention dataset for clock evaluation:

| Clock | CR effect (2-year ~12% CR; n=197) | Significance |
|---|---|---|
| Horvath 2013 | None | NS |
| PhenoAge | None | NS |
| GrimAge | None | NS |
| DunedinPACE | d=−0.25 (~2–3% slowing per yr) | p<0.003 |

The selective DunedinPACE response creates an interpretive fork in the road:

**Interpretation A (optimistic):** DunedinPACE is more sensitive to the metabolic and multi-system changes induced by CR; the other clocks would eventually respond with longer intervention or deeper restriction. CR does slow biological aging; DunedinPACE captures it; other clocks are insensitive.

**Interpretation B (cautionary):** DunedinPACE was trained on multi-system metabolic biomarkers that CR directly modulates (BMI, HbA1c, triglycerides). The DunedinPACE signal may partly reflect the acute metabolic state of caloric restriction, not a durable acceleration of the aging clock. If subjects resumed ad libitum eating, DunedinPACE would revert quickly — and that reversion would not represent "aging faster again."

Neither interpretation has been ruled out. The critical experiments — (a) CALERIE-2 follow-up post-CR to check DunedinPACE reversion; (b) parallel testing of a pharmacological mimetic that doesn't acutely change these metabolic biomarkers — have not been done. #gap/needs-replication

### The Fitzgerald 2021 Horvath signal

An 8-week multi-modal intervention in n=43 men reduced Horvath age by a mean 3.23 years (p<0.001) [^fitzgerald2021]. This is a **positive Horvath signal** — contradicting the CALERIE-2 null — but with serious caveats: small pilot RCT, unblinded, 8-week duration, not independently replicated. The biological interpretation (whether 8 weeks of diet/lifestyle produces durable epigenetic rejuvenation vs transient methylation normalization) is unresolved. #gap/needs-replication

### DO-HEALTH partial signals

The DO-HEALTH trial (omega-3, vitamin D, exercise, 3 years, n=2,157 elderly adults) showed partial signals on some clock endpoints in secondary analyses. Specific clock responses and effect sizes require verification. #gap/unsourced

---

## What Clock Should You Trust for What?

**For mortality prediction:** GrimAge (strongest HR); PhenoAge (runner up; more interpretable components).  
**For intervention trials:** DunedinPACE (only clock with pre-registered RCT positive result as of 2026); also consider PC-corrected clocks for reliability.  
**For cross-tissue aging (multi-biopsy studies):** Horvath 2013 (sole validated pan-tissue clock).  
**For clinical accessibility:** Frailty Index (no lab required; validated mouse cross-species).  
**For early-life aging signals:** LTL or proteomics (both detect earlier molecular changes than clinical FI).

**Honest summary:** No single clock is clearly superior for all purposes. GrimAge has the strongest mortality association but was trained in mortality, making it somewhat circular as a "true biological age" claim. DunedinPACE is the only clock that responded to a Phase 2-grade RCT, but its training cohort was young and the CR response may partly reflect metabolic confounding. Horvath 2013 remains the most-studied but has not demonstrated intervention responsiveness. The field has not converged on a single standard. #gap/contradictory-evidence

---

## Connection to the Information Theory of Aging

[[hypotheses/information-theory-of-aging]] (verified) argues that epigenetic information loss causally drives aging, citing biological clock data heavily. The key prediction is that interventions that slow biological aging should slow epigenetic clocks. The CALERIE-2 result is consistent with this prediction for DunedinPACE but not for Horvath, PhenoAge, or GrimAge. The Schooling 2025 MR null for all four clocks creates tension with the causal version of the hypothesis. This MOC is the canonical home for the clock-comparison evidence; [[hypotheses/information-theory-of-aging]] is the canonical home for the causal mechanistic hypothesis.

---

## Open Research Priorities

1. **Why do clocks diverge under intervention?** — Mechanistic explanation for CR slowing DunedinPACE but not GrimAge is the highest-priority theoretical question.
2. **DunedinPACE in elderly cohorts** — Does the 26–45 year training extrapolate to those aged 65+?
3. **Post-CR DunedinPACE reversion study** — Does DunedinPACE revert after CR cessation? Essential for distinguishing metabolic confound from true aging-rate change.
4. **Proteomics in RCTs** — No RCT has used the Lehallier clock as a pre-specified endpoint; this is a gap.
5. **PC-clock adoption** — Old studies used noisy conventional clocks; systematic reanalysis with PC clocks is needed for historical consistency.
6. **Causal MR for DunedinPACE** — Has not been tested; high priority.
7. **Clock correlation with hard endpoints in intervention trials** — The field needs an aging intervention where a clock change is followed by a hard endpoint improvement (reduced incidence of disease, reduced frailty); no such study exists yet.

---

## See Also

- [[hallmarks/epigenetic-alterations]] (verified) — hallmark page; mechanism behind DNAm clock signal
- [[hypotheses/information-theory-of-aging]] (verified) — causal hypothesis; clock evidence central
- [[interventions/lifestyle/caloric-restriction]] (verified) — CR intervention; DunedinPACE slowed (Waziry 2023)
- [[biomarkers/horvath-clock-2013]]
- [[biomarkers/hannum-clock-2013]]
- [[biomarkers/phenoage-2018]]
- [[biomarkers/grimage-2019]]
- [[biomarkers/dunedinpace-2022]]
- [[biomarkers/lehallier-proteomic-clock-2019]]
- [[biomarkers/telomere-length-leukocyte]]
- [[biomarkers/frailty-index]]

---

[^higginsChen2022]: doi:10.1038/s43587-022-00248-2 · n=large (multiple array datasets) · computational / observational · Nat Aging 2022 · PC-clock versions substantially improve test-retest ICC vs conventional clocks · archive: download pending

[^fitzgerald2021]: [[studies/fitzgerald-2021-diet-lifestyle-epigenetic-clock]] · n=43 healthy males (38 completers) · rct (small pilot; unblinded) · Horvath age reduced 3.23 yr (p<0.001) in 8-week diet+exercise+sleep+supplement intervention · doi:10.18632/aging.202913 · local PDF available · contested: small n, short duration, not independently replicated
