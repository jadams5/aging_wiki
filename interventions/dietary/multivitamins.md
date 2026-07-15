---
type: intervention
aliases: [multivitamin, multivitamin-mineral supplement, MVM, MVMS, daily multivitamin, one-a-day]
mode: dietary
mechanisms: [micronutrient-repletion, methyl-donor-support]
targets: []
target-hallmarks: []
target-pathways: []
human-evidence-level: limited-negative
clinical-stage: implemented
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "Adequately powered confirmatory RCT of a clean (iron-free, beta-carotene-free, nutritional-dose) multivitamin vs placebo with cognitive decline as the primary endpoint in adults aged 50–65 — to test whether the COSMOS older-adult cognition benefit replicates and extends to midlife. Hard-endpoint benefit (cancer / cardiovascular disease / all-cause mortality) is already effectively excluded by COSMOS + Loftfield, so a further mortality trial is not the priority."
clinical-trials-active: null
literature-checked-through: 2026-06-02
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "Loftfield 2024 (full PDF), Sesso 2022 COSMOS (full PDF), Yeung 2023 COSMOS-Web (full PDF), Baker 2022 COSMOS-Mind (PMC abstract + PMC body text), Vyas 2024 (PubMed structured abstract), Gaziano 2012 PHS-II (PubMed structured abstract), USPSTF 2022 (PubMed structured abstract), HOPE-2 Lonn 2006 (full PDF) all cross-checked. Qualitative beta-carotene/SELECT/vitamin-E signals characterized from USPSTF review framing; individual ATBC/CARET/SELECT PDFs not separately re-read — USPSTF synthesis treated as authoritative for those sub-signals. SEARCH and VITATOPS concordance with HOPE-2 cited per HOPE-2 discussion; those PDFs not independently read."
---

# Multivitamin-mineral supplements

A **multivitamin-mineral supplement** is a single dosage form combining most essential vitamins and several trace minerals at or near nutritional (Daily-Value-scale) doses. It is the most widely consumed dietary supplement in the developed world. As an *aging intervention* it is best understood not as a geroprotector with a mechanism of action but as **insurance against marginal micronutrient deficiency** — which frames both what the evidence shows and why it shows it.

The high-quality evidence converges on a consistent conclusion: in **well-nourished populations, daily multivitamin use does not reduce all-cause mortality, cardiovascular disease, or total cancer.** The single replicated *positive* signal is on **cognition in older adults**. Formulation matters more than the "multivitamin" label suggests — the few ingredients with genuine harm signals (beta-carotene, high-dose vitamin E, iron in iron-replete men) are present in some products and absent in others.

---

## Hard-endpoint evidence (mortality, cancer, cardiovascular disease)

| Study | Design | n | Endpoint | Result |
|---|---|---|---|---|
| Loftfield 2024 [^loftfield2024] | Pooled prospective cohort (3 US cohorts), ≤27 yr | 390,124 | All-cause mortality | **Null** — HR 1.04 (1.02–1.07) first 12 yr; 1.04 (0.99–1.08) thereafter. Cause-specific (cancer/heart/cerebrovascular) all null. |
| COSMOS (Sesso 2022) [^sesso2022] | Randomized, double-blind, placebo-controlled, women ≥65/men ≥60 | 21,442 | Total cancer; cardiovascular disease | **Null** — no significant reduction in total invasive cancer (HR 0.97, 95% CI 0.86–1.09) or total CVD (HR 0.98, 95% CI 0.86–1.12) |
| Physicians' Health Study II (Gaziano 2012) [^gaziano2012] | Randomized, double-blind, placebo-controlled, male physicians, 11.2 yr median | 14,641 | Total cancer | **Modest reduction** — HR 0.92 (0.86–0.998), p=0.04; no cardiovascular or mortality benefit. Older formulation (Centrum Silver, 1997-era), older men. |

**Interpretation.** The randomized trials (which break the confounding that plagues cohort data) and the largest cohort analysis agree: no effect on death, and at best a small, borderline cancer signal in one older male cohort that has not been reproduced. The 2022 **US Preventive Services Task Force** review reached the same place — *insufficient evidence* to recommend multivitamins for cardiovascular or cancer prevention, with an explicit recommendation **against** beta-carotene (raises lung-cancer risk in at-risk groups) and vitamin E (no benefit) [^uspstf2022].

| Dimension | Status |
|---|---|
| Mechanism plausible in humans? | partial — repletion corrects deficiency, but most trial populations were already replete |
| Hard-endpoint benefit in humans? | no (mortality, cardiovascular disease, total cancer) |
| Replicated? | yes — the *null* is replicated across cohort + multiple RCTs |

---

## The cognition exception

The one place a clean multivitamin has shown a **replicated randomized benefit** is cognition in older adults, via sub-studies of COSMOS:

- **COSMOS-Web** (Yeung 2023): n=3,562, web-based memory testing; the multivitamin arm improved immediate recall significantly at 1 year (p=0.025), sustained over 3 years (p=0.011) — estimated equivalent of 3.1 years of age-related memory change [^yeung2023].
- **COSMOS-Mind** (Baker 2022): n≈2,260, telephone cognitive battery; multivitamin slowed global cognitive aging by an estimated ~60% (≈1.8 years) over 3 years [^baker2022].
- A pooled meta-analysis of the three COSMOS cognitive studies confirmed a consistent modest benefit [^vyas2024].

**Caveats.** The effect sizes are small, the mechanism is unestablished (possibly correction of subclinical B-vitamin or other deficiency in elders with declining intake/absorption), and the populations were **≥60 years old** (mean ~73). Whether the benefit extends to cognitively healthy midlife adults is untested — this is the live evidence gap (see `next-experiment`).

---

## Why cohort mortality signals mislead: healthy-user / sick-user confounding

Observational multivitamin–mortality associations are dominated by **confounding that runs in both directions**:

- **Healthy-user bias** — habitual supplement users exercise more, smoke less, and eat better, biasing toward apparent benefit.
- **Sick-user / reverse causation** — people often *start* a multivitamin when health declines ("I should take better care of myself"), biasing toward apparent harm.

The slight HR>1 in Loftfield's first follow-up period is almost certainly residual sick-user confounding, not toxicity; the authors decline to claim harm [^loftfield2024]. This is the central reason a cohort mortality null (or slight positive) cannot be read as "multivitamins are useless or dangerous" — the design cannot resolve a near-zero true effect from confounding of comparable magnitude.

---

## Formulation matters — the harm subset

"Multivitamin" is not one product. Across the cohorts and legacy formulations, the pill frequently contained three ingredients with real harm or null signals, which a modern clean formulation can omit:

- **Beta-carotene** — increases lung-cancer risk in smokers and asbestos-exposed individuals (ATBC, CARET trials); USPSTF recommends against it [^uspstf2022].
- **High-dose vitamin E (≥400 IU)** — increased prostate-cancer incidence in the SELECT trial; no cardiovascular or cancer benefit. *Nutritional* doses (~10–15 IU / 7–11 mg) carry no such signal.
- **Iron** — appropriate in menstruating women and the iron-deficient, but a pro-oxidant cardiovascular and iron-overload concern in iron-replete adult men, for whom an **iron-free** formulation is preferred.

A product that omits all three (iron-free, beta-carotene-free, nutritional-dose vitamin E) has a near-zero downside profile, which is the relevant safety frame for an individual decision even when the population benefit is null.

---

## Who plausibly benefits

Because the mechanism is repletion, expected value concentrates where a deficiency gap exists:

- Marginal or overt micronutrient deficiency (restricted/low-calorie diets, intermittent fasting or skipped meals, malabsorption, bariatric surgery, older adults with declining intake/absorption, certain medications).
- Specific genotype/intake mismatches — e.g., a reduced-function **MTHFR** variant paired with low folate intake, where the **methylated folate (5-MTHF)** form is the appropriate choice over folic acid.
- Populations with documented low diet quality (a plausible source of the COSMOS cognition effect).

In a **well-measured, replete individual**, the marginal expected value approaches zero — there is little deficiency gap to fill, so neither benefit nor harm should be expected from a clean formulation. The decision in that setting is genuinely close to neutral and turns on cost, simplicity preference, and risk tolerance rather than on outcome data.

---

## Note on homocysteine-lowering B-vitamins

Multivitamins supply folate, B12, and B6, which lower plasma homocysteine. The inference that this should reduce cardiovascular events has been **tested and largely failed**: randomized B-vitamin homocysteine-lowering trials (HOPE-2, SEARCH, VITATOPS) did **not** reduce cardiac events, with at most a modest stroke-risk reduction in some analyses [^hope2]. So even the most mechanistically coherent multivitamin component lacks hard-outcome support for cardiovascular prevention — relevant when weighing the B-vitamin/methyl-donor rationale for any individual.

---

## Recent synthesis (2026)

A 2026 umbrella review of 19 meta-analyses (~5.5 million participants) is consistent with the framing above on the two main endpoints — multivitamin use was associated with better global cognition, episodic memory, and immediate recall in older adults, and with **no mortality benefit** — but it additionally reported an association between multivitamin use and **higher risk of age-related macular degeneration (AMD) progression** [^wang2026]. This last signal is unexpected (antioxidant-plus-zinc AREDS-type formulations are used clinically to *slow* AMD progression) and most likely reflects confounding by indication or formulation heterogeneity across the pooled meta-analyses rather than a causal harm; it has not been demonstrated in a randomized multivitamin trial. Flagged here for completeness pending a formulation-resolved analysis. #gap/contradictory-evidence

---

## Related pages

- [[protein-intake]] · [[vitamin-k2]] · [[folate]] · [[mthfr]]
- Frameworks: [[interventions-by-modality]]

---

[^loftfield2024]: Loftfield E et al. "Multivitamin Use and Mortality Risk in 3 Prospective US Cohorts." *JAMA Network Open* 2024 · doi:10.1001/jamanetworkopen.2024.18729 · n=390,124 (NIH-AARP 327,732; PLCO 42,732; AHS 19,660) · pooled prospective cohort · follow-up up to 24 yr (NIH-AARP), 27 yr (PLCO), 26 yr (AHS) · all-cause mortality multivariable HR 1.04 (95% CI 1.02–1.07) FP1; 1.04 (95% CI 0.99–1.08) FP2; cause-specific HRs (heart disease, cancer, cerebrovascular) all null · authors attribute HR>1 to residual confounding, decline to claim harm · model: US adults free of cancer and major chronic disease at baseline

[^sesso2022]: Sesso HD et al. "Multivitamins in the prevention of cancer and cardiovascular disease: the COSMOS randomized clinical trial." *Am J Clin Nutr* 2022 · doi:10.1093/ajcn/nqac056 · n=21,442 · randomized · total cancer HR 0.97 (95% CI 0.86–1.09) p=0.57; total CVD HR 0.98 (95% CI 0.86–1.12) — both null · model: US adults (women ≥65, men ≥60; mean age 72.1)

[^gaziano2012]: Gaziano JM et al. "Multivitamins in the Prevention of Cancer in Men: the Physicians' Health Study II RCT." *JAMA* 2012 · doi:10.1001/jama.2012.14641 · n=14,641 · randomized · total cancer HR 0.92 (0.86–0.998) p=0.04; no cardiovascular/mortality benefit · model: male US physicians ≥50 yr

[^yeung2023]: Yeung LK et al. "Multivitamin Supplementation Improves Memory in Older Adults: A Randomized Clinical Trial (COSMOS-Web)." *Am J Clin Nutr* 2023 · doi:10.1016/j.ajcnut.2023.05.011 · n=3,562 (ITT) · randomized · improved immediate recall at 1 yr (p=0.025), sustained over 3 yr (p=0.011); effect ≈3.1 yr of age-related memory change · model: adults ≥60 yr (mean 71.0)

[^baker2022]: Baker LD et al. "Effects of cocoa extract and a multivitamin on cognitive function: a randomized clinical trial (COSMOS-Mind)." *Alzheimer's & Dementia* 2023 · doi:10.1002/alz.12767 · n=2,262 · randomized · global cognition benefit: mean z=0.07 (95% CI 0.02–0.12) p=0.007 over 3 yr; estimated ~1.8 yr (60%) slowing of cognitive aging · model: adults (women ≥65, men ≥60; mean age 73, 60% women)

[^vyas2024]: Vyas CM et al. "Effect of multivitamin-mineral supplementation versus placebo on cognitive function: results from the COSMOS clinic subcohort and meta-analysis of 3 COSMOS cognitive studies." *Am J Clin Nutr* 2024 · doi:10.1016/j.ajcnut.2023.12.011 · PMID 38244989 · meta-analysis (COSMOS-Clinic n=573, COSMOS-Mind n=2,158, COSMOS-Web n=2,472; nonoverlapping) · global cognition benefit: mean difference 0.07 SD (95% CI 0.03–0.11) p=0.0009; episodic memory 0.06 SD (95% CI 0.03–0.10) p=0.0007; equivalent to ~2 yr reduction in cognitive aging · model: COSMOS participants ≥60 yr

[^uspstf2022]: US Preventive Services Task Force (Mangione CM et al.). "Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer: US Preventive Services Task Force Recommendation Statement." *JAMA* 2022 · doi:10.1001/jama.2022.8970 · PMID 35727271 · evidence review · I statement (insufficient evidence) for multivitamins; D recommendation (recommends against) beta-carotene (harms outweigh benefits with moderate certainty) and vitamin E (no net benefit with moderate certainty) for CVD/cancer prevention

[^hope2]: Representative homocysteine-lowering RCT: Lonn E et al. (HOPE-2 Investigators). "Homocysteine Lowering with Folic Acid and B Vitamins in Vascular Disease." *N Engl J Med* 2006 · doi:10.1056/NEJMoa060900 · PMID 16531613 · n=5,522 · randomized · primary composite (CV death, MI, stroke) RR 0.95 (95% CI 0.84–1.07) p=0.41 — null; stroke RR 0.75 (95% CI 0.59–0.97) p=0.03 — modest reduction · model: adults ≥55 yr with vascular disease/diabetes. Concordant findings reported in SEARCH and VITATOPS. #gap/contradictory-evidence (mechanism plausible, hard endpoints null)

[^wang2026]: Wang Y et al. "Umbrella review of multivitamin/mineral supplementation and health outcomes." *Ageing Research Reviews* 2026 · 114:102965 · PMID 41308839 · umbrella review of 19 meta-analyses, n≈5,535,426 · multivitamin associated with improved global cognition / episodic memory / immediate recall in older adults; no all-cause mortality benefit; reported association with higher AMD-progression risk (likely confounded by indication/formulation; not from a randomized multivitamin trial) · model: pooled (predominantly older-adult) populations. Surfaced via 2026-06-02 supersession check; AMD signal not independently verified against the included primary studies.
