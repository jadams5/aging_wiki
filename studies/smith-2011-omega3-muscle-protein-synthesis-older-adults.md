---
type: study
doi: 10.3945/ajcn.110.005611
pmid: 21159787
pmc: PMC3021432
title: "Dietary omega-3 fatty acid supplementation increases the rate of muscle protein synthesis in older adults: a randomized controlled trial"
authors: [Smith GI, Atherton P, Reeds DN, Mohammed BS, Rankin D, Rennie MJ, Mittendorfer B]
year: 2011
journal: American Journal of Clinical Nutrition
study-design: rct
publication-type: research-article
volume: 93
issue: 2
pages: 402-412
organism: homo-sapiens
n-subjects: 16   # 16 randomized (10 men, 6 women; ≥65 y); 15 completers analyzed (omega-3 n=8, corn oil n=7 after 1 withdrawal). Registered NCT00794079
intervention: ["[[molecules/compounds/omega-3-fatty-acids]]"]
hallmarks-tested: ["[[deregulated-nutrient-sensing]]"]
human-evidence: true
peer-reviewed: true
preregistered: true
key-findings: [omega3-sensitizes-not-stimulates-basal-mps, augmented-clamp-induced-mps, p70s6k-phosphorylation-increase-significant, mtor-phosphorylation-trend-not-significant, akt-unaffected, muscle-phospholipid-n3-doubled, confirms-anabolic-resistance-in-elderly]
local-pdf: null
verified: true
verified-date: 2026-08-10
verified-by: claude
verified-scope: "Primary source (PMC3021432, full text) reviewed via web fetch and cross-checked against the abstract-level figures supplied in the seeding brief — basal FSR, clamp-stimulated FSR, phosphorylation p-values, and muscle phospholipid incorporation numbers all matched. 2026-08-10 correction pass: softened the Akt(Thr308)-rules-out-Akt overreach, and corrected the Therdyothin 2025 cross-reference to reflect that meta-analysis's basal-FSR-predominant main pool (cross-checked against the now-verified [[studies/therdyothin-2025-omega3-protein-synthesis-meta-analysis]]) — this trial's clamp-stimulated finding is not refuted by that pooling, only unconfirmed at pooled scale. Companion Smith 2011 Clinical Science paper (doi:10.1042/CS20100597) is cited from the seeding brief, not independently re-verified against primary text here."
---

# Smith et al. 2011 — Omega-3 fatty acids and muscle protein synthesis in older adults

## TL;DR

In a double-blind, randomized, placebo-controlled trial (NCT00794079), 16 healthy older adults (≥65 y) were randomized (16 randomized, 15 completed and analyzed — 8 omega-3, 7 corn oil) to 8 weeks of either 4 g/d omega-3 fatty acids (Lovaza: 1.86 g EPA + 1.50 g DHA as ethyl esters) or an equal volume of corn oil[^smith2011]. Using [ring-²H₅]phenylalanine stable-isotope tracer infusions before and after supplementation, the study found omega-3 supplementation had **no effect on basal (postabsorptive) muscle protein fractional synthesis rate** (FSR) — but it roughly **tripled the increase in FSR produced by a hyperaminoacidemic-hyperinsulinemic clamp** (a simulated-meal stimulus), from 0.009±0.005 to 0.031±0.003 %/h above basal (P=0.004 within-group; P<0.05 vs. corn oil for the before-after change). This was accompanied by a significant increase in clamp-induced p70s6k(Thr389) phosphorylation (P<0.01) and a non-significant trend toward greater mTOR(Ser2448) phosphorylation (P=0.08) — Akt(Thr308) phosphorylation was unaffected. **The mechanism is best described as omega-3 fatty acids sensitizing the muscle anabolic response to amino acids and insulin, not as omega-3 directly stimulating protein synthesis at rest.** A subsequent 2025 systematic review and meta-analysis pooling this and five other trials found no net pooled effect of omega-3 supplementation on muscle protein synthesis (SMD 0.03, P=0.89)[^therdyothin2025] — but that pooled null predominantly reflects **basal**, not clamp-stimulated, FSR (basal FSR was used for the pooled effect in 50% of the included studies), which is the same estimand on which this trial itself found nothing. The meta-analysis's separate stimulated-condition pools were directionally positive but small and non-significant (k=3 exercise-stimulated, SMD 0.41, P=0.16; k=4 anabolic-stimulus, SMD 0.52, P=0.28). So this trial's clamp-stimulated finding is **not refuted or contradicted** by the pooling — the sensitization hypothesis it supports remains unconfirmed at pooled scale, not disproven. #gap/needs-replication

## Background

Aging is associated with **anabolic resistance** — a blunted muscle protein synthesis response to anabolic stimuli (amino acids, insulin, resistance exercise) relative to younger adults, thought to contribute causally to age-related muscle loss ([[phenotypes/sarcopenia|sarcopenia]])[^smith2011]. This trial tested whether chronic omega-3 fatty acid intake — previously shown to alter skeletal-muscle cell-membrane phospholipid composition and downstream signal transduction — could restore or augment the anabolic response to a nutrient/insulin stimulus in older adults, independent of exercise.

## Design

- **Subjects:** 16 healthy, sedentary (<1 h/wk structured exercise) adults ≥65 y (10 men, 6 women), non-obese (BMI ~25.6-25.7 kg/m²), free of cardiovascular disease, diabetes, and medications affecting protein metabolism; no baseline fish-oil use — **16 randomized, 15 completed and analyzed**
- **Randomization:** Double-blind, randomized to omega-3 fatty acid (n=8 completers) or corn oil control (n=7 completers, one withdrawal from an initial n=8); identical capsule packaging
- **Intervention:** 4 g/d Lovaza (1.86 g EPA [20:5n-3] + 1.50 g DHA [22:6n-3] as ethyl esters) vs. equal-volume corn oil, for 8 weeks; compliance 96±4% (omega-3) vs. 100% (corn oil)
- **Primary outcome measurement:** Muscle protein FSR via [ring-²H₅]phenylalanine tracer infusion (priming 2.8 µmol/kg fat-free mass [FFM]; continuous 0.08 µmol·kg FFM⁻¹·min⁻¹, raised to 0.12 during the clamp), with quadriceps biopsies at 60, 240, and 420 min, calculated by standard precursor-product modeling using both plasma and muscle intracellular free phenylalanine as the precursor pool
- **Two physiological conditions tested, pre- and post-intervention:**
  1. **Basal (postabsorptive)** muscle FSR
  2. **Hyperaminoacidemic-hyperinsulinemic clamp** (3 h; insulin infused at 20 mU·m² BSA⁻¹·min⁻¹ with 80/40 mU priming steps, amino acids at 105 mg·kg FFM⁻¹·h⁻¹, euglycemia maintained ~5.5 mmol/L) — designed to simulate the aminoacidemia/insulinemia of a mixed meal
- **Signaling assays:** Immunoblotting for mTOR(Ser2448), p70s6k(Thr389), and Akt(Thr308) phosphorylation in muscle biopsies during the clamp
- **Secondary endpoints:** Muscle phospholipid fatty acid composition, fasting metabolic panel (glucose, insulin, HOMA-IR, lipids), inflammatory markers (CRP, IL-6, TNF-α), whole-body glucose and phenylalanine kinetics

## Results

### Basal muscle protein synthesis: no effect

Using muscle free phenylalanine as the precursor pool, basal FSR was unchanged by omega-3 supplementation (0.051±0.005 %/h before vs. 0.053±0.008 %/h after, P=0.80); corn oil likewise had no effect on basal FSR or anabolic signaling. **Omega-3 fatty acids did not stimulate resting muscle protein synthesis.**

### Clamp-stimulated protein synthesis: augmented

The hyperaminoacidemic-hyperinsulinemic clamp raised FSR above basal in both groups before intervention, consistent with reduced (but present) anabolic responsiveness typical of older adults. After 8 weeks:

- **Omega-3 group:** the clamp-induced increase in FSR above basal rose from 0.009±0.005 %/h to 0.031±0.003 %/h (P=0.004, muscle-phenylalanine precursor model)
- **Corn oil group:** the clamp-induced increase was unchanged (0.013±0.005 %/h before vs. 0.013±0.007 %/h after, P=0.94)
- Between-group comparison of the before-after change favored omega-3 (P=0.01, plasma-phenylalanine precursor model)

**This is the central finding, and it is a sensitization of the anabolic response to a nutrient/insulin stimulus — not a basal stimulatory effect.** Sources that describe this trial as "omega-3 stimulates muscle protein synthesis" without the basal/clamp distinction are overstating the result.

### Anabolic signaling

- **p70s6k(Thr389) phosphorylation** during the clamp increased significantly more after omega-3 than after corn oil (P<0.01 for the before-after change in the clamp-induced increase)
- **mTOR(Ser2448) phosphorylation** showed a similar directional trend but did **not** reach conventional significance (P=0.08 for the before-after change; reported by the authors as P=0.07 in a between-group comparison) — **this is not a statistically significant finding and should not be reported as one**
- **Akt(Thr308) phosphorylation** was unaffected by omega-3 supplementation in either basal or clamp conditions (P≥0.28) — this argues against a simple Akt-mediated mechanism at the time points sampled, and is consistent with (though does not definitively prove) the mTOR/p70s6k effect being routed independently of the canonical insulin-Akt-mTORC1 axis; unchanged phosphorylation at the sampled time points does not rule out a role for Akt at other time points or through mechanisms not captured by this single-time-point immunoblot

### Muscle incorporation and safety

Muscle phospholipid omega-3 content approximately doubled with supplementation (total n-3: 5.04±0.45% to 9.03±0.95% of total fatty acids, P<0.01; EPA and DHA individually P<0.01 each), confirming tissue-level dosing efficacy. No adverse events were reported. Fasting metabolic and inflammatory markers (glucose, insulin, HOMA-IR, lipids, CRP, IL-6, TNF-α) were not meaningfully changed by either arm.

### Confirms anabolic resistance in aging

As a validation of the model, the authors note the clamp-induced increase in FSR above basal was roughly half as large in these older subjects (0.011±0.003 %/h) as previously reported in young adults (0.022±0.004 %/h, P<0.05) under comparable conditions — consistent with the anabolic-resistance framework this trial was designed to test an intervention against.

## Companion study (same group, not separately seeded)

A related trial by the same laboratory tested a similar 8-week, 4 g/d Lovaza protocol (no corn-oil comparator) in n=9 healthy adults aged 25-45 y[^smith2011cs]. It found the same qualitative pattern: no change in basal FSR, but clamp-stimulated FSR rose from 0.062±0.004 to 0.083±0.007 %/h, with ~50% increases in clamp-phase phospho-mTOR and phospho-p70S6K, plus greater muscle protein concentration and protein/DNA ratio after supplementation. **This companion study is an uncontrolled, single-arm, pre/post design with no placebo group** — a materially weaker evidence-quality tier than the randomized, corn-oil-controlled 2011 AJCN trial described above, and it was conducted in middle-aged (not older) adults, so it corroborates mechanism and dose but not the aging-specific claim.

## Significance for aging interventions

This trial is frequently cited as mechanistic support for omega-3 supplementation ([[molecules/compounds/omega-3-fatty-acids]]) as an adjunct anti-[[phenotypes/sarcopenia|sarcopenia]] strategy, on the logic that if omega-3 fatty acids sensitize the muscle to the anabolic stimulus of a protein-containing meal, chronic supplementation alongside adequate dietary protein could partially counteract age-related anabolic resistance and preserve lean mass over time. The proposed mechanism converges on the [[mtor|mTOR]]-p70s6k signaling axis, independent of (and apparently not routed through) Akt. However, the trial measured only an acute (single clamp session) surrogate of anabolic signaling over 8 weeks — it did **not** measure lean mass, strength, or any functional outcome, and the authors explicitly state the study was underpowered to detect changes in appendicular lean body mass.

## Limitations

- **Small sample size.** 16 randomized, 15 completed and analyzed (8 omega-3 vs. 7 corn oil) is underpowered for anything beyond the tracer/signaling primary endpoints; the authors state a much larger cohort would be needed to reliably detect changes in lean body mass. #gap/needs-replication
- **Surrogate, acute endpoint.** The primary outcome is a single clamp-day tracer measurement of FSR, not a longitudinal measure of muscle mass, strength, or function. Whether repeated meal-time sensitization over months translates into preserved lean mass is untested here. #gap/no-mechanism
- **mTOR phosphorylation result is not significant.** P=0.08 (within-group) / P=0.07 (between-group) — reported here as a non-significant trend, not a positive finding, despite frequent downstream mischaracterization in secondary/lay sources.
- **Does not directly generalize at pooled scale — but is not contradicted by pooling either.** A 2025 systematic review and meta-analysis of 6 trials (k=6, including this one) found no significant pooled effect of omega-3 PUFA on muscle protein synthesis (SMD 0.03, 95% CI −0.35 to 0.40, I²=30%, P=0.89) — but that main pool predominantly measured **basal**, not clamp-stimulated, FSR (basal FSR was used for the pooled effect in 50% of the 6 included studies), the same estimand on which this trial itself found no effect. The meta-analysis's separate stimulated-condition pools (k=3 exercise-stimulated, SMD 0.41, 95% CI −0.16 to 0.98, P=0.16; k=4 anabolic-stimulus, SMD 0.52, 95% CI −0.64 to 1.67, P=0.28) were directionally positive, consistent with this trial's clamp-stimulated finding, but too small and imprecise to confirm it. Whole-body protein synthesis was separately increased across a smaller subset of pooled studies (k=3, SMD 0.51, 95% CI 0.12-0.90)[^therdyothin2025]. The correct reading is that this trial's sensitization hypothesis remains **unconfirmed, not refuted**, at pooled scale. #gap/needs-replication — see [[studies/therdyothin-2025-omega3-protein-synthesis-meta-analysis]] for the pooled analysis.
- **Elderly-specific replication is thin.** The companion Clinical Science study corroborating mechanism was conducted in middle-aged, not older, adults, and used an uncontrolled design[^smith2011cs].
- **No exercise arm.** The clamp is a nutrient/insulin stimulus only; whether omega-3 similarly sensitizes the response to resistance exercise (the more clinically relevant anabolic stimulus for preventing sarcopenia) is not tested in this trial. See [[studies/rodacki-2012-fish-oil-strength-training-elderly-women]] for a fish-oil + strength-training human trial.

## Cited by wiki pages

[Auto-populated by Obsidian backlinks panel]

---

## Footnotes

[^smith2011]: Smith GI, Atherton P, Reeds DN, Mohammed BS, Rankin D, Rennie MJ, Mittendorfer B · doi:10.3945/ajcn.110.005611 · *Am J Clin Nutr* 2011;93(2):402-412 · n=16 randomized (15 completers) · rct (double-blind, placebo-controlled) · model: healthy adults ≥65 y · PMID 21159787 · PMC3021432 · NCT00794079
[^smith2011cs]: Smith GI, Atherton P, Reeds DN, Mohammed BS, Rankin D, Rennie MJ, Mittendorfer B · doi:10.1042/CS20100597 · *Clinical Science* 2011;121(6):267-278 · n=9 · single-arm pre/post, no control group · model: healthy adults 25-45 y · PMID 21501117 · PMC3499967 · companion mechanistic study; corroborates clamp-sensitization pattern in a younger, non-aging cohort under a weaker (uncontrolled) design
[^therdyothin2025]: [[studies/therdyothin-2025-omega3-protein-synthesis-meta-analysis]] · k=6 trials pooled (muscle FSR, predominantly basal/unstimulated estimand) · meta-analysis · P=0.89 (ns, pooled basal-predominant muscle FSR) · doi:10.1093/nutrit/nuae055 · PMID 38777807 · *Nutrition Reviews* 2025;83(2):e131-e143
