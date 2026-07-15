---
type: compound
aliases: [Imcivree, RM-493, BIM-22493]
pubchem-cid: 11993702
chembl-id: CHEMBL3301624
drugbank-id: null
who-inn: setmelanotide
biologic: true
molecular-formula: C49H68N18O9S2
molecular-weight-da: 1117.3
mechanisms: [melanocortin-receptor-agonism, mc4r-selective-agonism, appetite-suppression]
targets: ["[[mc4r]]", "[[mc1r]]", "[[mc3r]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: phase-3-rct-needed
next-experiment: "Phase 2 RCT of setmelanotide in older adults with sarcopenia or cancer cachexia, co-administered with resistance training, primary endpoint lean mass or handgrip strength at 6 months"
clinical-trials-active: 4
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Collet 2017 (Mol Metab) verified against full local PDF — trial design, n, dosing, weight-loss effect sizes, CIs, p-values, receptor pharmacology confirmed. VENTURE 2025 (Lancet DE) verified via PubMed efetch abstract (full PDF not yet downloaded). Haqq 2022 (Lancet DE) and Clément 2020 (Lancet DE) are closed-access/download-failed — body claims verified against R35-Stage2 corrections brief; full PDF cross-check not performed for those two sources. PubChem CID 11993702 molecular formula, weight, InChIKey confirmed via PubChem API. ChEMBL CHEMBL3301624 and DrugBank ID not independently re-verified against those databases."
---

# Setmelanotide

An FDA-approved synthetic cyclic octapeptide (8-amino-acid) analogue of [[alpha-msh|alpha-melanocyte-stimulating hormone (α-MSH)]] with selective agonist activity at the [[mc4r|melanocortin-4 receptor (MC4R)]]. Marketed as **Imcivree** (Rhythm Pharmaceuticals). Approved 2020 for monogenic obesity due to POMC, PCSK1, or LEPR deficiency; indication expanded 2022 to Bardet-Biedl Syndrome (BBS). **Aging-context relevance is speculative:** MC4R agonism for sarcopenia or cachexia in older adults has not been evaluated in clinical trials.

## Identity

- **PubChem CID:** 11993702
- **ChEMBL ID:** CHEMBL3301624 (free base); CHEMBL4650273 (acetate salt, marketed form)
- **InChIKey:** HDHDTKMUACZDAA-PHNIDTBTSA-N
- **Molecular formula:** C₄₉H₆₈N₁₈O₉S₂
- **Molecular weight:** 1117.3 Da
- **Class:** synthetic cyclic octapeptide; α-MSH analogue
- **Route:** subcutaneous injection daily; 10 mg/mL solution
- **WHO INN:** setmelanotide

## Mechanism of action

Setmelanotide is a **conformationally constrained cyclic peptide** (disulfide bridge between Cys² and Cys⁷ residues) that acts as a selective, high-potency agonist at MC4R, a class-A GPCR coupled to Gs protein. MC4R is expressed in paraventricular hypothalamic neurons and mediates the anorexigenic arm of the melanocortin energy-homeostasis pathway: activation increases adenylyl cyclase → cAMP → reduced appetite and increased energy expenditure [^markham2021].

**Receptor selectivity profile** (relative to non-selective parent α-MSH / Melanotan-II):

| Receptor | Role | Setmelanotide activity |
|---|---|---|
| MC4R | Hypothalamic anorexigenic circuit | Primary target — full agonist, high potency |
| MC1R | Melanocyte melanogenesis; skin | Cross-reactivity — causes hyperpigmentation AE |
| MC3R | Hypothalamus; energy regulation | Partial cross-reactivity |
| MC2R | Adrenocortical ACTH receptor | Minimal binding |
| MC5R | Exocrine glands | Minimal binding |

In POMC-deficient patients, endogenous α-MSH production is absent, leaving hypothalamic MC4R constitutively understimulated — the molecular basis for hyperphagia and severe early-onset obesity. Setmelanotide bypasses the upstream POMC → α-MSH → MC4R axis by directly activating MC4R [^clement2020].

In LEPR-deficient patients, leptin signalling fails to upregulate POMC/α-MSH production, similarly creating functional MC4R understimulation; setmelanotide also rescues this phenotype, though with lower response rate than POMC deficiency [^clement2020].

## FDA approval history

Two approved indications as of 2026-05-09:

| Approval | Date | NDA | Indication | Population |
|---|---|---|---|---|
| ORIG-1 | 2020-11-25 | NDA213793 | Obesity due to POMC, PCSK1, or LEPR deficiency | Age ≥6 years |
| SUPPL-1 | 2022-06-16 | NDA213793/S-001 | Obesity due to Bardet-Biedl Syndrome (BBS) | Age ≥6 years |

**Important classification note:** Both approved indications are for rare *monogenic or syndromic* obesity — not for common polygenic obesity, age-related weight gain, sarcopenia, or any aging indication. The `clinical-stage: fda-approved` field reflects the maximal regulatory status; the `translation-gap: phase-3-rct-needed` field reflects that no aging-relevant indication has been evaluated [^markham2021].

## Phase 3 clinical trial evidence

### Clément 2020 — POMC and LEPR deficiency [^clement2020]

Phase 3 single-arm open-label multicentre trials (two parallel cohorts). Enrolled n=10 POMC/PCSK1-deficient and n=11 LEPR-deficient participants. Primary endpoint: ≥10% body weight loss at 52 weeks.

| Cohort | n | ≥10% weight loss (primary EP) | Hunger score reduction |
|---|---|---|---|
| POMC/PCSK1 deficiency | 10 | 80% | −27.1% |
| LEPR deficiency | 11 | 45% | −43.7% |

Most common adverse events: injection site reactions, skin hyperpigmentation (MC1R cross-reactivity), nausea. No drug-related serious adverse events. No weight loss observed in placebo run-in period prior to treatment.

### Haqq 2022 — Bardet-Biedl and Alström syndrome [^haqq2022]

Phase 3 multicentre randomised double-blind placebo-controlled trial (14-week DB period) with subsequent 52-week open-label phase. Enrolled n=32 BBS + n=6 Alström = **38 total**. Primary endpoint: ≥10% body weight reduction at end of 52-week open-label period in BBS participants ≥12 years.

- Primary endpoint met: **32.3% of BBS participants** achieved ≥10% weight loss (95% CI 16.7–51.4%, p=0.0006 vs pre-defined null hypothesis of ≤5%)
- None of the 6 Alström patients met the weight-loss threshold (Alström syndrome differs from BBS in MC4R pathway involvement)
- Most common AEs: hyperpigmentation 61%, injection site erythema 48%, nausea

### Collet 2017 — MC4R deficiency (Phase 1b) [^collet2017]

Phase 1b randomised double-blind placebo-controlled study (NOT a case series). Total enrolled n=49 (41 males + 8 females, ages 19–53, BMI 26.2–40.3 kg/m²) across 5 cohorts, of whom n=8 were heterozygous MC4R carriers (n=6 setmelanotide + n=2 placebo) and n=41 were obese controls without MC4R variants (n=5 setmelanotide + n=3 placebo shown in Table 1 comparison; remainder in other cohorts). Dose: 0.01 mg/kg/24h subcutaneous continuous infusion for 28 days. Primary weight-change results at Day 29:

- **MC4R heterozygous carrier arm (n=6 setmelanotide):** −3.48 kg from baseline (95% CI −4.99 to −1.96), p<0.0001; waist circumference −5.83 cm (95% CI −9.70 to −1.96), p=0.005
- **Obese control arm (n=5 setmelanotide):** −3.07 kg from baseline (95% CI −4.11 to −2.04), p<0.0001

Identified MC4R loss-of-function as a non-responsive context — setmelanotide cannot rescue complete loss-of-function MC4R mutations (in contrast to POMC/LEPR deficiency where the receptor is intact); heterozygous partial-LOF MC4R carriers did respond. This pharmacological distinction guided the Phase 3 indication selection. No increase in HR or BP observed at any dose in either obese controls or MC4R mutation carriers.

### VENTURE trial (Lancet DE 2025) — pediatric extension [^venture2025]

Phase 3 open-label multicentre trial in children aged 2–5 years with POMC/LEPR deficiency or BBS. Published Lancet Diabetes Endocrinol 2025;13(1):29–37 (doi:10.1016/S2213-8587(24)00273-0; PMID 39549719). Enrolled n=12 (7 POMC/LEPR + 5 BBS; 1 BBS patient later excluded for not meeting BMI threshold); 11 completed. Mean age 3.6 years (SD 0.9). Co-primary endpoints at 52 weeks: ≥0.2-point BMI Z-score decrease (WHO) and mean % BMI change.

- 10/12 (83%, 95% CI 58.7–99.8%) achieved ≥0.2-point BMI Z-score reduction at 52 weeks
- Mean BMI change: −18% (SD 13) overall; −26% (SD 11) in POMC/LEPR; −10% (SD 9) in BBS
- 91% of caregivers reported less hunger at baseline vs Week 52
- AEs: all mild or moderate; hyperpigmentation, vomiting, nasopharyngitis, upper respiratory tract infections, injection site reactions; no serious AEs, no discontinuations, no deaths

## Active clinical trials (ClinicalTrials.gov, 2026-05-09)

**4 RECRUITING / ACTIVE_NOT_RECRUITING / ENROLLING_BY_INVITATION:**

| NCT | Phase | Status | Condition |
|---|---|---|---|
| NCT05774756 | Phase 3 | Active, not recruiting | Acquired hypothalamic obesity |
| NCT06760546 | Phase 3 | Recruiting | Congenital hypothalamic obesity (sub-study) |
| NCT06596135 | Phase 3 | Enrolling by invitation | MC4R pathway obesity disorders (broad) |
| NCT06772597 | Phase 2 | Active, not recruiting | Prader-Willi syndrome |

No trial registered for sarcopenia, cachexia, frailty, or any aging-primary endpoint as of 2026-05-09. #gap/needs-human-replication

## Pharmacokinetics

- **Route:** subcutaneous injection, once daily
- **Concentration:** 10 mg/mL solution; doses titrated 1–3 mg/day
- **Half-life:** approximately 11 hours (terminal); supports once-daily dosing (contrast with short-lived endogenous α-MSH)
- **Cyclic structure advantage:** the disulfide bridge confers conformational stability that markedly extends plasma half-life relative to linear α-MSH (~minutes) [^markham2021]
- **Metabolism:** proteolytic degradation; renal and hepatic pathways; no CYP450-mediated metabolism anticipated for peptides

## Adverse effects

| Adverse effect | Frequency | Mechanism |
|---|---|---|
| Skin hyperpigmentation | Very common (~50–70%) | MC1R cross-reactivity in melanocytes → melanogenesis |
| Injection site reactions | Very common (~48%) | Local peptide injection response |
| Nausea | Common | MC4R/central appetite axis |
| Spontaneous penile erections | ~5% of males | MC4R CNS pleiotropic effect (BBB-crossing peptide) |
| Blood pressure increase | Observed | MC4R cardiovascular axis; concerning in older patients |

The hyperpigmentation signal is a class-level effect of MC-receptor agonists. The melanoma risk signal documented for non-selective agonists (Melanotan II) should be tracked in long-term setmelanotide registries; per the class note in `frameworks/intervention-classes.md`, all melanocortin-receptor-agonist compound pages must disclose this. No confirmed melanoma causal link for setmelanotide exists as of 2026-05-09. #gap/long-term-unknown

## Aging-context assessment

### Potential relevance

MC4R agonism could theoretically address two contexts in aging:

1. **Sarcopenia / cachexia:** Anorexia of aging and disease-associated cachexia involve dysregulated appetite and accelerated muscle wasting. MC4R is a potent appetite driver — *agonism* suppresses appetite, however, making it contraindicated for anorexia-of-aging. MC4R *antagonism* has been proposed for cachexia, but that is a different pharmacological approach from setmelanotide.

2. **Hypothalamic obesity in older adults:** Acquired hypothalamic dysfunction (post-cranial radiation, craniopharyngioma, traumatic brain injury) phenocopies congenital MC4R pathway deficiency. NCT05774756 targets this acquired form.

### Key aging-context caveats

- **Appetite suppression exacerbates sarcopenia risk:** In older adults with low caloric intake or pre-existing sarcopenia, further appetite suppression from MC4R agonism could worsen lean mass loss unless paired with supervised resistance training and protein supplementation. The compound's effect on lean-to-fat mass ratio in older adults is not established.
- **Cardiovascular concern:** MC4R agonism raises blood pressure modestly. Older patients with hypertension or cardiovascular comorbidity represent a higher-risk population.
- **MC4R agonism ≠ energy-sensing intervention:** Despite mechanistic adjacency to the POMC/leptin/MC4R nutrient-sensing axis (placed under `[[deregulated-nutrient-sensing]]`), setmelanotide does not directly modulate mTOR, AMPK, insulin signaling, or sirtuins. The hallmark assignment reflects the upstream pathway, not a demonstrated aging-biology effect.
- **No DrugAge entry:** No lifespan-extension data for setmelanotide or MC4R agonists in any model organism. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| MC4R pathway conserved in humans? | Yes — all Phase 3 data is human |
| Aging-hallmark phenotype conserved? | Unknown — no aging-indication trial |
| Replicated in aging context? | Not tested |

## Classification

- **Mechanism class:** `melanocortin-receptor-agonism` (see `frameworks/intervention-classes.md` § melanocortin-receptor-agonist) — class already defined; no new class needed
- **Hallmark target:** [[deregulated-nutrient-sensing]] (MC4R/POMC/leptin nutrient-sensing axis)
- **Related intervention class:** [[peptide-therapeutics]]
- **SENS category:** none directly applicable

## Cross-references

- [[mc4r]] — primary target; see R35-Stage2 page
- [[mc1r]] — cross-reactive receptor (hyperpigmentation mechanism)
- [[mc3r]] — partial cross-reactivity
- [[alpha-msh]] — endogenous parent peptide; see stub
- [[pomc]] — upstream precursor; deficiency is primary approved indication
- [[leptin]] — LEPR deficiency is the second approved indication context
- [[sarcopenia]] — potential adverse interaction (appetite suppression in older adults); no beneficial evidence established
- [[deregulated-nutrient-sensing]] — hallmark via MC4R/POMC axis

## Limitations and gaps

- **No aging-indication data.** All Phase 3 evidence is in rare monogenic/syndromic pediatric and young-adult obesity. Extrapolation to aging biology is speculative. #gap/needs-human-replication
- **Appetite suppression may be harmful in older adults** without structured nutritional support and exercise; sarcopenic obesity is a plausible adverse outcome.
- **Melanoma risk monitoring:** long-term MC1R cross-reactivity safety data in aging populations with accumulated UV exposure is absent. #gap/long-term-unknown
- **Lean mass effects unknown:** no body-composition (DXA) endpoint has been reported for setmelanotide trials vs. a comparator in older adults.
- **DrugBank ID not confirmed.** PubChem and ChEMBL IDs are confirmed; DrugBank ID left null pending manual lookup. #gap/needs-canonical-id

## Footnotes

[^clement2020]: doi:10.1016/S2213-8587(20)30364-8 · Clément K, van den Akker E, Argente J, Bahm A, Chung WK, et al. · *Lancet Diabetes Endocrinol* 2020;8(12):960–970 · n=10 (POMC/PCSK1) + n=11 (LEPR) · single-arm open-label Phase 3 · primary endpoint ≥10% weight loss at 52 weeks: 80% (POMC), 45% (LEPR) · model: human; monogenic obesity · archive: not_oa
[^haqq2022]: doi:10.1016/S2213-8587(22)00277-7 · Haqq AM, Chung WK, Dollfus H, Haws RM, Martos-Moreno GÁ, Poitou C, Yanovski JA, Mittleman RS, Yuan G, Forsythe E, Clément K, Argente J · *Lancet Diabetes Endocrinol* 2022;10(12):859–868 · n=38 (32 BBS + 6 Alström) · randomised double-blind placebo-controlled Phase 3 + 52-week open-label · primary endpoint 32.3% of BBS patients ≥10% weight loss (p=0.0006) · model: human; BBS/Alström syndrome · archive: OA via PMC9847480 (download failed; use PMC)
[^collet2017]: doi:10.1016/j.molmet.2017.06.015 · Collet TH, Dubern B, Mokrosinski J, Connors H, Keogh JM, Mendes de Oliveira E, et al. · *Mol Metab* 2017;6(10):1321–1329 · n=49 total (n=8 MC4R heterozygous carriers: 6 setmelanotide + 2 placebo; n=41 obese controls without MC4R variants) · Phase 1b randomised double-blind placebo-controlled · dose 0.01 mg/kg/24h SC for 28 days · MC4R carrier arm: weight −3.48 kg (95% CI −4.99 to −1.96), p<0.0001; obese controls: −3.07 kg (95% CI −4.11 to −2.04), p<0.0001; heterozygous MC4R carriers responded; complete LOF MC4R = non-responders · model: human · archive: downloaded (gold OA)
[^markham2021]: doi:10.1007/s40265-021-01470-9 · Markham A · *Drugs* 2021;81(3):397–403 · drug review / first-approval summary · n/a · model: review; FDA approval documentation · archive: not_oa
[^venture2025]: doi:10.1016/S2213-8587(24)00273-0 · PMID 39549719 · Argente J, Verge CF, Okorie U, et al. · *Lancet Diabetes Endocrinol* 2025;13(1):29–37 · n=12 enrolled (7 POMC/LEPR + 5 BBS; 11 completed) · Phase 3 open-label · 10/12 (83%) ≥0.2-point BMI Z-score reduction at 52 wk; mean BMI −18% overall (−26% POMC/LEPR, −10% BBS); no serious AEs · model: human; ages 2–5 years · archive: not yet downloaded; abstract verified via PubMed efetch 2026-05-09
