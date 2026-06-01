---
type: intervention
aliases: [prolonged fasting, extended fasting, multi-day fasting, water fasting, water-only fast, complete caloric restriction, prolonged water fast]
mode: lifestyle
mechanisms: [ketogenesis, autophagy-induction, mtor-inhibition, ampk-activation, ecm-remodeling, lipolysis]
targets: []
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
target-pathways: ["[[mtor]]", "[[ampk]]", "[[insulin-igf1]]", "[[sirtuin]]"]
human-evidence-level: limited
clinical-stage: implemented
safety-profile: investigational
translation-gap: phase-3-rct-needed
next-experiment: "Controlled prolonged-fasting trial (≥5 days, water-only) with a caloric-matched gradual-weight-loss comparator arm and pre-registered endpoints spanning BOTH the putative benefits (proteome/biological-age, amyloid-β, muscle/bone-sparing) AND the harm signals now documented (hsCRP, urinary 11-dehydro-TXB2 platelet activation, liver transaminases, uric acid), in an older (>60) and ancestrally diverse cohort — to weigh whether the >3-day adaptations net-benefit or net-harm cardiometabolic risk, especially in people with subclinical atherosclerosis."
clinical-trials-active: null
literature-checked-through: 2026-05-26
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-26 (updated same day) — the intervention-level synthesis here is built on **three** human studies read from local PDFs: [[studies/pietzner-2024-fasting-proteome|Pietzner 2024]] (7-day Olink, verified), [[studies/commissati-2025-prolonged-fasting-inflammation|Commissati 2025]] (~10-day SOMAScan, verified), and [[studies/dai-2024-21day-fasting-hypometabolism|Dai 2024]] (21-day clinical chemistry, partial). Older historical starvation-physiology and detailed refeeding-syndrome clinical literature are still **not** systematically ingested. Treat cross-study generalizations as provisional.

# Prolonged fasting (multi-day complete caloric restriction)

**Prolonged fasting** is voluntary **complete caloric restriction sustained for ≥48–72 hours**, typically with *ad libitum* water (and sometimes non-caloric electrolytes) only — a "water-only fast." It is mechanistically and physiologically **distinct** from the wiki's other fasting/restriction pages:

- It is **not** sustained moderate [[caloric-restriction|caloric restriction (CR)]], which reduces daily intake ~12–25% indefinitely while preserving micronutrients (CALERIE benchmark).
- It is **not** [[interventions/lifestyle/intermittent-fasting|intermittent fasting (IF)]], whose fasting windows (16:8, ADF, 5:2) are ≤48 h and recur cyclically.
- It crosses into **fasting-mimicking-diet (FMD)** territory in duration but, unlike FMD, permits **zero** caloric intake.

The defining new insight (Pietzner 2024) is that the **systemic, multi-organ molecular response to fasting does not begin until after ~3 days** — *past the duration of every commonly practiced IF protocol* — which reframes prolonged fasting as a qualitatively different intervention rather than "more IF." [^pietzner2024]

This page covers the prolonged complete-fast modality. For the chronic-CR evidence base (lifespan across organisms, CALERIE biomarker trials, CR mimetics) see [[caloric-restriction]]; for cyclic short fasting see [[interventions/lifestyle/intermittent-fasting]].

## Physiology of a multi-day fast

The classical fuel-utilization cascade, confirmed in the 7-day water-only fast of Pietzner 2024 (n=12 healthy adults) [^pietzner2024]:

| Phase | Approx. timing | Dominant physiology |
|---|---|---|
| Post-absorptive | 0–24 h | Hepatic glycogenolysis; falling insulin |
| Gluconeogenic | 1–2 days | Glycogen depleted; gluconeogenesis from glycerol, lactate, amino acids; glucose falls |
| Ketogenic switch | 2–3 days | Free fatty acids rise and plateau; **3-hydroxybutyrate rises continuously**; ketones become primary brain fuel |
| Protein-sparing | >3 days | Urinary nitrogen **falls** (renal urea reabsorption spares protein pools); systemic proteome remodeling begins |

In Pietzner 2024, 7 days produced **5.7 ± 0.8 kg** weight loss (~1.9 BMI units). Notably:
- Acute weight loss was split between **lean (−3.6 kg)** and **fat (−1.6 kg)** mass, but the **lean-mass loss almost fully reversed within 3 days of refeeding** (−0.69 kg residual) while fat loss was sustained (−1.85 kg) — i.e., the acute "muscle loss" of a short prolonged fast is largely fluid/labile-protein, not durable sarcopenic loss. [^pietzner2024]
- **Subcutaneous** fat fell but **visceral** fat did not (over only 7 days); **no bone-mass loss** was detectable (p=0.42). [^pietzner2024]

## Mechanisms of geroprotection

Prolonged fasting drives the same core longevity-pathway shifts as CR/IF, but to a **deeper and more sustained** degree because nutrient input is zero:

| Pathway | Effect under prolonged fasting | Cross-link |
|---|---|---|
| [[mtor\|mTORC1]] | Strongly suppressed (amino acids + insulin near-floor) | shared with [[caloric-restriction]], [[rapamycin]] |
| [[ampk]] | Sustained activation (low ATP/AMP) | |
| [[autophagy]] | Robust, prolonged induction past the ~16 h IF threshold | required mediator |
| Ketogenesis | Continuous 3-hydroxybutyrate rise; BHB as neuronal fuel + signaling metabolite | shared with [[ketogenic-diet]] |
| [[insulin-igf1\|IIS]] | IGF-signaling pathway enriched among fasting-responsive proteins | |

### Beyond energy metabolism: ECM remodeling

The distinctive finding of Pietzner 2024 is that the prolonged-fast plasma proteome is dominated by **non-metabolic, extracellular-matrix (ECM) remodeling** rather than a purely energy-centric signature [^pietzner2024]:
- The fasting signature was strongly enriched for **ECM proteins (p<3.6×10⁻⁷)**, with late-appearing (day ≥2–3) declines in ECM-receptor interaction, elastic-fiber, and vascular-wall proteins — interpreted as **structural ECM degradation, plausibly contributing to the acute lean-mass loss**.
- The single most fasting-associated protein was **tenascin-R**, a **brain-specific** ECM component of perineuronal nets (beta=−0.73, p<2.4×10⁻³⁷). Rising 3-hydroxybutyrate tracked **lower** plasma brain-ECM proteins (brevican, vitrin) and neurotrophic factors — a candidate molecular basis for the long-known efficacy of **ketogenic/fasting therapy in drug-resistant epilepsy**. [^pietzner2024]

This positions prolonged fasting as engaging [[loss-of-proteostasis]] and ECM/structural biology, not only [[deregulated-nutrient-sensing]].

### Muscle- and bone-sparing TGF-β suppression

Both proteomic studies converge on a **coordinated down-regulation of TGF-β-superfamily negative regulators of muscle and bone** — a plausible adaptive mechanism to *protect* lean tissue during starvation [^commissati2025]:
- **INHBA −3.3 fold, myostatin −2 fold, GDF11/8 −1.6 fold** (Commissati 2025); inhibiting myostatin/GDF11 is associated with preserved muscle and increased bone density.
- **Parathyroid hormone fell 2.1-fold** (compensatory bone-sparing), consistent with Pietzner's finding of **no measurable bone-mass loss** over 7 days.

This molecular signature aligns with the clinical observation that acute lean-mass loss during a short fast is **largely reversible on refeeding** — the body appears to actively defend muscle/bone rather than catabolize them indiscriminately.

### Amyloid-β reduction (neuro signal)

Commissati 2025 was the **first to report that prolonged fasting lowers circulating amyloid-β** — plasma **Aβ40 and Aβ42 both fell** (targeted mass spec), returning to baseline after refeeding, while the **clinically validated Aβ42/Aβ40 ratio was unchanged** [^commissati2025]. Reduced synaptogenesis- and amyloid-fibril-formation pathways, plus a non-significant BDNF-increase trend (+1.32 fold), echo Pietzner's ketone→neural-ECM axis. Whether lower production or accelerated clearance, and whether it has any Alzheimer's-relevant benefit, is unknown. #gap/no-mechanism

## Human evidence

The high-resolution human evidence base rests on three medically-supervised, single-arm, uncontrolled cohorts read end-to-end here: **Pietzner 2024** (7-day, Olink), **Commissati 2025** (~10-day, SOMAScan), and **Dai 2024** (21-day, clinical chemistry). They span 7→21 days and converge strongly — but all lack a control group.

### Pietzner et al. 2024 — 7-day fasting plasma proteome (Nat Metab)

Daily plasma proteomics (2,923 targets, Olink Explore 3072) across a 7-day water-only fast in 12 healthy adults, with proteogenomic disease mapping [^pietzner2024]. Key results:
- **One-third of the plasma proteome (1,044 targets, 35.9%) changed significantly**; 144 by >2 SD. See [[studies/pietzner-2024-fasting-proteome]] for the full account.
- **Delayed onset:** only 6 proteins significant at 24 h and 54 at 48 h — the systemic response **emerges only after 3 days**, with the count of decreasing proteins growing exponentially thereafter. 66 proteins were still abnormal 3 days after refeeding.
- **Distinct from weight loss:** proteome change correlated only weakly (r=−0.20) with weight; far more proteins associated with the fasting/ketone signal (n=452) than with weight change (n=49). The dissociation is driven by the profound post-3-day response.
- **Proteogenomic map:** 212 proteins putatively causally linked to ~500 diseases. For **52.2%** of predicted protein–disease links, fasting moved proteins in a **compensatory** (risk-lowering) direction (e.g., SWAP70 ↓ → potential rheumatoid-arthritis relief; HYOU1 ↓ → potential coronary-disease compensation); a minority moved toward higher risk (e.g., coagulation factor XI ↑ → thrombotic risk).

### Commissati et al. 2025 — ~10-day water-only fast + refeeding (Mol Metab)

An independent SOMAScan (1,317-protein) study of n=20 **older, overweight** adults (mean age 52, BMI 28.8) across a mean **9.8-day water-only fast + 5.3-day guided refeeding** (Fontana group) [^commissati2025]. It is the key **replication + counterpoint** to Pietzner:
- **Replicates the signature with "no discrepancies":** 44 decreased + 5 increased proteins overlapped at the 7-day endpoint despite a different platform; FGF19 and soluble leptin receptor increases reproduced. The water-only-PF proteome signature is **highly conserved**. Only **6.6% of proteins changed**, and **<1% remained altered after refeeding** — confirming the response is largely **transient**.
- **But the primary finding is harm-flavored:** PF is **acutely pro-inflammatory** (hsCRP **+129%**; ↑ hepcidin, ferritin, IL-8, MMP9, midkine), **raises liver transaminases** (AST +65%, ALT +64%), and **activates platelets** (urinary 11-dehydro-TXB2 +21%/+36%). See § Safety below — this materially reshapes the risk picture.
- **Lipids rose** during the fast (total/LDL/non-HDL cholesterol, then triglycerides +32% post-refeeding); **PCSK9 decreased** (−1.49 fold). Oxidative-stress markers did **not** improve.
- Added the **amyloid-β reduction** and reinforced the **TGF-β muscle/bone-sparing** signature (above).

### Dai et al. 2024 — 21-day fast hypometabolism (Sci Rep)

A pre-registered Chinese space-medicine study (n=13) of a **21-day complete water-only fast** — the **upper-duration anchor** [^dai2024]. Profound **hypometabolic adaptation** (resting energy expenditure **−20%**), deep ketosis (BHB 0.1 → 6.6 mmol/L), ~15% weight loss, and — notably — **uric acid roughly doubled** (385 → 866 µmol/L, a concrete adverse effect). Blood counts, liver, and cardiac function showed adaptive but not structurally damaging changes: under supervision, **21 days was organ-safe** in healthy adults. Framed for survival/spaceflight, not aging — no aging-biomarker or proteomic endpoints.

### Relationship to the IF/CR trial evidence

Calorie-matched RCTs of IF and TRE (Trepanowski 2017; Liu 2022) show **no benefit beyond caloric reduction** when calories are equalized — see [[interventions/lifestyle/intermittent-fasting]]. Pietzner 2024 does not overturn this for short fasts; rather, it argues the **interesting biology lives past the 3-day mark**, which calorie-matched IF trials never reach. Whether the >3-day proteome remodeling translates into durable health or biological-age benefit is **untested**. #gap/needs-human-replication

## Cross-organism extrapolation

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | mTOR/AMPK/autophagy/IIS + ketogenesis all operate in humans; this study *is* human |
| Phenotype conserved in humans? | partial | Proteome + metabolic adaptations robustly demonstrated; durable health/lifespan effect not measured |
| Replicated in humans? | partial | The proteome signature replicated across two independent cohorts + platforms (Pietzner Olink, Commissati SOMAScan) with "no discrepancies"; but no controlled trial, and no durable health/lifespan endpoint |

## Safety and contraindications

Prolonged complete fasting is **investigational and not a casual practice** — it warrants medical supervision, especially beyond 3–5 days. The 2025 proteomic data have **strengthened the safety concerns**, showing PF is *not* a clean anti-inflammatory intervention:

- **Acute systemic inflammation** — contrary to the chronic-CR anti-inflammatory picture (CALERIE; see [[caloric-restriction]]), PF **raises** inflammation: **hsCRP +129%** in n=20, and a **+66.6% rate of significant CRP increase across a 1,422-person validation cohort, regardless of fast duration (5–20 days)** [^commissati2025]. CRP normalizes on refeeding. Whether this is adaptive "trained immunity" or harmful is unresolved. #gap/contradictory-evidence (vs the assumption that fasting is anti-inflammatory)
- **Platelet activation / thrombotic risk** — urinary **11-dehydro-TXB2** (a gold-standard in-vivo platelet-activation + cardiovascular-risk biomarker) rose **+21% (fasting) / +36% (refeeding)** with no change in platelet count (degranulation, not production); vWF + soluble GP1Bα rose [^commissati2025]. This **substantiates** the procoagulant signal Pietzner inferred genetically (coagulation **factor XI** rose, aligning with predicted thrombotic risk [^pietzner2024]). **Concerning for anyone with existing cardiovascular disease or unstable atherosclerotic plaque.**
- **Hepatic stress** — liver transaminases rose (**AST +65%, ALT +64%**), persisting into refeeding [^commissati2025].
- **Hyperuricemia** — serum uric acid roughly **doubled** over a 21-day fast (385 → 866 µmol/L) [^dai2024]; relevant to gout and renal risk.
- **Transient post-refeeding insulin resistance** — glucose and HOMA-IR rose significantly on reintroduction of food [^commissati2025].
- **Refeeding syndrome** — potentially fatal electrolyte shifts (hypophosphatemia, hypokalemia, hypomagnesemia, thiamine depletion) on resuming food after prolonged fasting; requires monitored, gradual refeeding. (Detailed clinical literature not yet ingested — #gap/needs-replication for primary citation.) Hypokalemia and arrhythmia were among the severe adverse events reported [^commissati2025].
- **Lean-mass loss** is acute but largely reversible over a short fast, and the TGF-β/PTH signature suggests active muscle/bone defense [^pietzner2024] [^commissati2025]; risk of durable sarcopenic loss still rises with fast duration and in older adults.
- **Common mild AEs:** headache, weakness, fatigue, insomnia, dry mouth, orthostatic hypotension (prompting transition to broth/juice in ~30% of one cohort) [^commissati2025].
- **Contraindicated** in: type 1 diabetes / insulin or sulfonylurea use (hypoglycemia), pregnancy/lactation, history of eating disorders, underweight/malnourished individuals, frail elderly (sarcopenia risk), and — given the platelet/inflammation/lipid data — caution in **established cardiovascular disease**.
- The high-resolution evidence base is **single-arm, uncontrolled, small (n=12–20), and self-selected** — though it now spans both lean-young (Pietzner) and older-overweight (Commissati) cohorts, generalizability to multimorbid populations is unestablished.

## Open questions

1. **Benefit vs harm, on net** — PF simultaneously moves putative-beneficial markers (amyloid-β ↓, muscle/bone-sparing, autophagy ↑) *and* harm markers (hsCRP ↑, platelet activation ↑, liver enzymes ↑, uric acid ↑, lipids ↑). Does it net-benefit or net-harm cardiometabolic risk, especially in people with subclinical atherosclerosis? #gap/contradictory-evidence
2. **Is the acute inflammation adaptive or pathological** — "trained immunity" / hormetic vs a genuine pro-atherogenic insult? Resolved only by hard-outcome follow-up. #gap/no-mechanism
3. **Is the molecular signature durable**, or does it fully reverse on refeeding (Pietzner: 66/1,044 proteins still abnormal at +3 d; Commissati: <1% persist)? #gap/long-term-unknown
4. **Are the proteogenomic 'compensation' predictions clinically real** — do repeated prolonged fasts measurably lower RA/CAD risk, or is this purely cross-sectional inference? #gap/no-mechanism
5. **Optimal duration/frequency** for any benefit vs the refeeding-syndrome, thrombotic, and lean-mass risks is undefined. #gap/dose-response-unclear
6. **Biological-age endpoints** (DunedinPACE etc.) have never been measured across a prolonged fast.

## Cross-references

- [[studies/pietzner-2024-fasting-proteome]] — anchor study, 7-day Olink (verified)
- [[studies/commissati-2025-prolonged-fasting-inflammation]] — ~10-day SOMAScan replication + inflammation/platelet counterpoint (verified)
- [[studies/dai-2024-21day-fasting-hypometabolism]] — 21-day upper-duration / hypometabolism / hyperuricemia anchor
- [[caloric-restriction]] — sustained moderate CR; distinct modality, deeper shared mechanism base. **Key contrast: chronic CR is anti-inflammatory (CALERIE); prolonged fasting is acutely pro-inflammatory**
- [[interventions/lifestyle/intermittent-fasting]] — cyclic ≤48 h fasting; systemic signature emerges *past* the IF window
- [[interventions/lifestyle/time-restricted-eating]] — circadian-aligned eating window; shallowest fasting depth
- [[ketogenic-diet]] — shares the sustained-ketosis / 3-hydroxybutyrate axis (incl. the neural-ECM/epilepsy link)
- [[interventions/lifestyle/methionine-restriction]] — amino-acid-specific restriction; CR-signaling overlap
- [[autophagy]] · [[mtor]] · [[ampk]] · [[insulin-igf1]] · [[sirtuin]] — shared longevity pathways
- [[loss-of-proteostasis]] · [[deregulated-nutrient-sensing]] · [[chronic-inflammation]] — hallmark targets
- [[pcsk9]] · [[lpl]] — fasting-responsive lipid nodes with existing pages

## Footnotes

[^pietzner2024]: [[studies/pietzner-2024-fasting-proteome]] · n=12 (5F/7M, healthy young white-European adults) · in-vivo human, single-arm uncontrolled · 7-day water-only fast; daily plasma proteomics (2,923 targets, Olink Explore 3072) + proteogenomic disease mapping · doi:10.1038/s42255-024-01008-9 · *Nat Metab* 2024;6(4):764–777 · local PDF verified (PMC7617311) · 1,044 proteins (35.9%) changed (FDR<5%); systemic response only after 3 days; ECM enrichment p<3.6×10⁻⁷; tenascin-R beta=−0.73 p<2.4×10⁻³⁷; proteome–weight correlation r=−0.20; 212 proteins linked to ~500 diseases, 52.2% of links compensatory · model: human

[^commissati2025]: [[studies/commissati-2025-prolonged-fasting-inflammation]] · n=20 (11F/9M, mean age 52, BMI 28.8) · in-vivo human, single-arm uncontrolled + two external validation cohorts (incl. n=1,422 Buchinger-Wilhelmi) · mean 9.8-day water-only fast + 5.3-day guided refeeding; SOMAScan 1,317 proteins + targeted MS (amyloid-β) + ELISAs · doi:10.1016/j.molmet.2025.102152 · *Mol Metab* 2025;102152 · local PDF verified (Fontana group; accepted pre-proof) · 6.6% proteins changed (<1% persist post-refeeding); replicates Pietzner with "no discrepancies"; hsCRP +129% (p=0.0004), 66.6% CRP-rise in validation cohort regardless of duration; urinary 11-dehydro-TXB2 +21%/+36%; AST +65%/ALT +64%; INHBA −3.3/myostatin −2/GDF11/8 −1.6 fold; PCSK9 −1.49 fold; Aβ40+Aβ42 ↓ (ratio unchanged) · model: human

[^dai2024]: [[studies/dai-2024-21day-fasting-hypometabolism]] · n=13 (8M/5F, mean age 40.5, BMI 24.5) · in-vivo human, single-arm, pre-registered (ChiCTR2100048399) · 21-day complete water-only fast (34-day protocol incl. refeeding) · clinical chemistry + indirect calorimetry · doi:10.1038/s41598-024-80049-2 · *Sci Rep* 2024;14:28550 (PMC11574170) · local PDF, verified:false (abstract+methods read) · weight −14.96%; resting energy expenditure −20.3%; BHB 0.1→6.61 mmol/L; uric acid 385→866 µmol/L; organ-safe to 21 days under supervision · model: human
