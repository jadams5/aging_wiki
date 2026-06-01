---
type: compound
aliases: [Mounjaro, Zepbound, LY3298176]
pubchem-cid: 166567236
pubchem-cid-alt: null
chembl-id: CHEMBL4297839
drugbank-id: null
administration-route: injectable
biologic: true
who-inn: tirzepatide
molecular-formula: C225H348N48O68
molecular-weight-da: 4813
mechanisms: [dual-incretin-agonist, glp1-receptor-agonist, gipr-agonism, weight-loss, central-appetite-suppression, gastric-emptying-delay, anti-inflammatory, glucagon-suppression, beta-cell-preservation]
targets: ["[[glp1r]]", "[[gipr]]", "[[insulin-igf1]]", "[[pomc-neurons]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Aging-specific RCT in non-diabetic adults age 65+ with composite frailty + biological-age + MACE endpoint over 5 yr, with mandatory resistance-training co-intervention arm to isolate lean-mass loss mitigation; n>=3,000."
clinical-trials-active: 119
literature-checked-through: 2026-05-31
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-31. Verify quantitative claims and source attributions against primary sources. Canonical-DB IDs (PubChem CID 166567236, ChEMBL CHEMBL4297839) verified via API on 2026-05-31 but not cross-checked against the full compound records. Trial data (SURPASS-2 weight-loss arms, retatrutide heart-rate bpm) sourced from PubMed abstracts and crossref metadata — full PDF cross-check required.

# Tirzepatide

A synthetic 39-residue fatty-acylated peptide that acts as a **dual agonist of the GIP receptor (GIPR) and the GLP-1 receptor (GLP-1R)** — the first approved agent in the dual-incretin-agonist class. Approved by the FDA in 2022 for type 2 diabetes (Mounjaro) and 2023 for chronic weight management (Zepbound). Produces weight loss of ~15–21% body weight (vs ~14% for semaglutide 2.4 mg at comparable doses), and demonstrated cardiovascular non-inferiority vs dulaglutide in a large head-to-head MACE trial (SURPASS-CVOT 2025). Of aging-biology interest because its cardiometabolic effects overlap with multiple aging hallmarks; the GIP arm and its independent contribution are poorly characterised in healthy aging populations, making tirzepatide both the most efficacious incretin agonist currently approved and the one with the most residual mechanistic uncertainty.

## Identity

| Field | Value |
|---|---|
| WHO INN | tirzepatide |
| PubChem CID | 166567236 |
| ChEMBL ID | CHEMBL4297839 |
| DrugBank ID | not confirmed; #gap/needs-canonical-id |
| Molecular formula | C225H348N48O68 |
| Molecular weight | ~4,813 Da (39-residue fatty-acylated peptide) |
| Class | Dual GLP-1R / GIPR agonist; biologic peptide |
| Route | Subcutaneous injection (weekly) |
| Brand names | Mounjaro (T2D indication), Zepbound (obesity/weight management) |
| Manufacturer | Eli Lilly and Company (research code: LY3298176) |

**Note on biologic classification:** Tirzepatide is a synthetic 39-residue peptide — larger and more structurally complex than semaglutide (34 residues) — but still small enough to have a PubChem CID (unlike most monoclonal antibodies). The FDA classifies it as a new molecular entity, not a biologic (it lacks a biologics license application). `biologic: true` is used in this wiki to indicate it is a peptide therapeutic, not a small molecule; see schema convention.

**Note on LY3298176:** This is the Eli Lilly research code for tirzepatide, confirmed in published trial registrations (NCT04255433 / SURPASS-CVOT). It is listed in `aliases:` as a stable cross-reference.

## Structural basis for activity

Native GIP(1–42) and GLP-1(7–36) amide have plasma half-lives of ~7 minutes and ~2 minutes respectively (DPP-4 cleavage). Tirzepatide is engineered with:

1. **Aib2 substitution** at position 2 of the GIP-backbone — blocks DPP-4 cleavage, extending half-life.
2. **C20 fatty diacid side chain at Lys26** via a gamma-glutamic acid / mini-PEG linker — mediates reversible albumin binding, dramatically reducing renal filtration and extending t½ to ~5 days (enabling weekly dosing).
3. **Dual-receptor pharmacology** — the peptide sequence is derived from GIP but incorporates GLP-1 pharmacophore elements; it activates both GIPR and GLP-1R with approximately balanced potency.

## Mechanism of action

### GLP-1 receptor arm (shared with semaglutide, liraglutide)

- **Pancreatic β-cells:** GLP-1R → Gαs → cAMP ↑ → glucose-dependent insulin secretion (GDIS). Insulin response is glucose-dependent; low intrinsic hypoglycemia risk.
- **Pancreatic α-cells:** Suppressed glucagon release → reduced hepatic glucose output.
- **GI tract / vagal afferents:** Gastric emptying delay → blunted postprandial glucose excursion and earlier satiety.
- **Hypothalamus/brainstem:** GLP-1R on POMC/CART and AgRP neurons → appetite suppression.

### GIP receptor arm (tirzepatide-specific; distinguishes it from pure GLP-1 agonists)

The GIPR arm is the mechanistic distinction from semaglutide and other pure GLP-1 agonists. GIP is the other incretin hormone, secreted by intestinal K-cells. GIPR is expressed in:

- **Adipocytes:** GIPR activation promotes fat storage when calories are available and may facilitate fat mobilisation during energy deficit; in the context of weight loss programs, this adipocyte GIPR effect appears to enhance fat-mass reduction beyond the GLP-1 effect alone.
- **Hypothalamic neurons:** GIPR expressed in the hypothalamus; proposed to reduce appetite and food reward via CNS signalling distinct from GLP-1R.
- **Pancreatic β-cells:** GIP enhances glucose-dependent insulin secretion (additive with GLP-1 arm) and may support β-cell preservation.
- **Bone:** GIP may reduce bone resorption; clinical significance unclear.

**Critical gap:** The independent contribution of GIPR agonism to tirzepatide's efficacy in non-obese, non-diabetic, or healthy-aging populations is essentially unstudied. Most mechanistic data comes from T2D and obesity trials where GLP-1R agonism alone is already substantial. Whether GIPR independently extends healthy longevity or reduces aging hallmarks when GLP-1 tone is already high is unknown. #gap/no-mechanism

### Net aging-mechanism frame

Tirzepatide's aging-hallmark effects are primarily **downstream of weight/adiposity reduction and metabolic improvement** rather than direct molecular interventions:

| Mechanism | Hallmark addressed | Directness |
|---|---|---|
| Visceral adiposity reduction | [[chronic-inflammation]] (IL-6, CRP, TNFα from adipose) | Indirect (weight-mediated) |
| Insulin sensitisation, reduced hyperinsulinemia | [[deregulated-nutrient-sensing]] | Indirect (weight-mediated) |
| Cardioprotection (MACE reduction) | [[altered-intercellular-communication]] | Direct + indirect |
| Anti-inflammatory effect (partially weight-independent?) | [[chronic-inflammation]] | Contested — #gap/no-mechanism |
| Lean-mass loss (negative effect) | [[stem-cell-exhaustion]] (via sarcopenia progression) | Direct negative effect |

## Clinical indications and trial landscape

### SURPASS-2 — head-to-head vs semaglutide in T2D

Frías et al. randomized 1,879 patients with type 2 diabetes (on metformin ± SGLT-2i background) to tirzepatide 5/10/15 mg or semaglutide 1 mg once weekly for 40 weeks in an open-label phase 3 trial [^frias2021].

**HbA1c reductions (primary endpoint):**
- Tirzepatide 5 mg: −2.01 percentage points
- Tirzepatide 10 mg: −2.24 percentage points
- Tirzepatide 15 mg: −2.30 percentage points
- Semaglutide 1 mg: −1.86 percentage points
- All tirzepatide doses were non-inferior to semaglutide; 10 mg and 15 mg were superior (p<0.001)

**Body weight — treatment differences vs semaglutide (from abstract):**
- Tirzepatide 5 mg: −1.9 kg greater than semaglutide
- Tirzepatide 10 mg: −3.6 kg greater than semaglutide
- Tirzepatide 15 mg: −5.5 kg greater than semaglutide (p<0.001 for all)

**Important note:** The SURPASS-2 abstract reports treatment *differences* versus semaglutide, not absolute weight-loss values per arm. Absolute weight loss in each arm is reported in the paper body (Table 2). #gap/needs-human-replication (absolute values require full PDF verification).

### SURMOUNT-1 — weight loss in obesity without T2D

Jastreboff et al. randomized 2,539 adults with BMI ≥30 (or ≥27 with comorbidity) and no type 2 diabetes to once-weekly tirzepatide (5/10/15 mg) or placebo for 72 weeks [^jastreboff2022].

- Body weight loss at 72 weeks: **−15.0%, −19.5%, and −20.9%** for 5 mg, 10 mg, and 15 mg respectively vs −3.1% placebo (all p<0.001)
- ≥20% body weight loss achieved by: 50% (10 mg) and 57% (15 mg) of participants vs 3% placebo
- ≥5% body weight loss: reached by ≥91% of participants at 10/15 mg
- GI adverse events (nausea, diarrhea, vomiting) were the most common, mostly mild-to-moderate, peak during dose escalation; discontinuation rates 4.3–7.1%

This exceeds the weight loss achievable with semaglutide 2.4 mg in STEP-1 (−14.9%) [^wilding2021] and is among the largest pharmacological weight losses reported outside bariatric surgery. Whether the superior weight-loss translates to superior MACE reduction vs semaglutide is not yet established.

### SURPASS-CVOT — cardiovascular outcomes vs dulaglutide

Nicholls et al. enrolled 13,165–13,299 patients with T2D and established cardiovascular disease (atherosclerosis or peripheral artery disease) and randomized to tirzepatide 5/10/15 mg or dulaglutide 1.5 mg weekly; median follow-up 46.9 months [^nicholls2025]. This is an **active-comparator** design (tirzepatide vs another GLP-1 RA), not vs placebo.

**Primary endpoint (3-component MACE: cardiovascular death, MI, stroke):**
- Tirzepatide: 801 events (12.2%)
- Dulaglutide: 862 events (13.1%)
- HR 0.92 (95.3% CI: 0.83–1.01)
- **Non-inferiority demonstrated (p=0.003)** — tirzepatide is at minimum not worse than dulaglutide
- **Superiority NOT demonstrated (p=0.09)** — the trial was not powered to show superiority vs an active GLP-1 RA comparator

**Post-hoc 6-component cardiorenal composite analysis (JAMA Cardiology 2026):**

Nissen et al. performed a pre-specified post-hoc analysis using an expanded 6-component endpoint (cardiovascular death, MI, stroke, hospitalisation for heart failure, urgent revascularisation, and progression of kidney disease) from the SURPASS-CVOT dataset [^nissen2026].

- Tirzepatide: 1,559 events (23.7%)
- Dulaglutide: 1,803 events (27.4%)
- HR 0.84 (95% CI: 0.79–0.90; p<0.001)

**Critical framing of the post-hoc:** This HR 0.84 finding is hypothesis-generating, not confirmatory. Key caveats:

1. **Post-hoc design** — the 6-component endpoint was not the pre-specified primary endpoint. Post-hoc composite expansion is a well-known method for finding apparent significance in neutral trials.
2. **Active comparator bias** — comparison is vs dulaglutide (itself an effective GLP-1 RA with established MACE benefit), not vs placebo. The 16% relative reduction is the margin above a GLP-1 RA baseline.
3. **Sensitivity analyses** using 5- and 4-component composites yielded similar HRs (0.86), strengthening internal consistency but not pre-specified status.

A separate study page for the primary SURPASS-CVOT publication is at [[studies/surpass-cvot-2025]].

### No head-to-head MACE trial vs semaglutide

**There is currently no completed randomized trial comparing tirzepatide vs semaglutide on cardiovascular outcomes.** SURPASS-CVOT used dulaglutide (a lower-efficacy GLP-1 RA) as the comparator. Claims that tirzepatide is superior to semaglutide for MACE are not supported by direct trial evidence as of 2026-05-31. #gap/needs-human-replication

## Comparison with retatrutide (triple agonist)

Retatrutide (LY3437943) adds a third receptor agonist arm — **glucagon receptor (GCGR)** — to the GLP-1R + GIPR combination. Glucagon receptor agonism increases energy expenditure and resting metabolic rate, producing additive weight loss effects at the cost of greater heart rate elevation [^jastreboff2023_reta].

**Retatrutide phase 2 obesity trial (Jastreboff 2023, NEJM):** Weight loss at 48 weeks ranged from −8.7% (1 mg) to −24.2% (12 mg), with dose-dependent increases in heart rate that peaked at 24 weeks and declined thereafter. The abstract does not report specific bpm values by dose group; heart rate data is in the paper body.

**Approximate heart rate context (user-verified; PDF confirmation required):**
- Tirzepatide: ~2–4 bpm increase (from SURPASS trial safety data — verify in paper body)
- Retatrutide 8–12 mg: ~3–7 bpm increase (from retatrutide Phase 2 Table 3 / safety data — verify in paper body)

These figures are cited from user-provided context against the primary publications; abstract-only search did not recover the specific bpm values. #gap/needs-replication — Verify both tirzepatide and retatrutide heart-rate bpm values from full paper bodies.

The heart rate difference is clinically relevant for older patients with underlying arrhythmia or HF risk. Tirzepatide's lower heart-rate effect is mechanistically consistent with the absence of glucagon receptor agonism (GCGR stimulation drives sympathetic activation and heart rate rise via cAMP in the SA node). #gap/no-mechanism — the direct cardiac mechanism of differential heart rate effects between incretin agonist subtypes is not fully characterised.

## Lean mass and muscle preservation concern

Like all incretin-receptor agonists, tirzepatide causes substantial loss of lean (fat-free) mass alongside fat loss. Locatelli et al. (2024) reviewed body-composition data across incretin agents and found that approximately **25% of total weight lost comes from fat-free mass, equivalent to ~6 kg lean mass in a typical trial** [^locatelli2024]. This is described as "comparable to a decade or more of aging" in terms of lean-mass loss rate.

For aging individuals, this raises concern about **incretin-agonist-accelerated sarcopenia:**
- Fat-free mass loss includes skeletal muscle, reducing functional capacity, fall risk, and metabolic reserve
- The effect is not unique to tirzepatide — it is a class effect shared with semaglutide and other GLP-1 RAs
- Resistance training attenuates but does not eliminate lean-mass loss during GLP-1 RA treatment
- Combination with myostatin inhibitors or GDF-8 antagonists is being investigated in early trials

#gap/dose-response-unclear — dose-dependent body composition data for tirzepatide specifically (lean mass fraction by dose: 5 mg vs 10 mg vs 15 mg) is not established from available abstracts. The proportion lean mass at higher doses may differ from the class average.

**Note on osteoarthritis / cartilage signal:** The GLP-1R-mediated chondrocyte-metabolic-reprogramming signal seen with semaglutide in Qin et al. (2026) [[studies/qin-2026-semaglutide-oa]] is **NOT attributable to tirzepatide** based on current evidence. That study specifically tested semaglutide; whether GIPR agonism adds, subtracts, or is neutral for cartilage is unknown. Do not extrapolate the semaglutide OA signal to tirzepatide. #gap/needs-human-replication

## Dosing and pharmacokinetics

| Parameter | Value |
|---|---|
| Approved doses (T2D) | 2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg, 15 mg SC weekly |
| Starting dose | 2.5 mg × 4 weeks (initial dose-escalation step) |
| Maximum dose | 15 mg SC weekly |
| Half-life | ~5 days (enables once-weekly dosing) |
| Bioavailability | ~80% subcutaneous (vs oral peptide bioavailability ~1%; no oral formulation approved) |
| Clearance | Primarily proteolytic degradation; renal clearance minor |
| Dose escalation | Required to minimise GI adverse events; 4-week intervals |

**PK compared to semaglutide:** Tirzepatide's ~5-day half-life is slightly shorter than semaglutide's ~7-day half-life but sufficient for weekly dosing. The GIPR agonism does not substantially alter PK relative to the GLP-1 component. No oral tirzepatide formulation is currently approved (unlike oral semaglutide / Rybelsus).

## FDA approval status and indications

- **Mounjaro (tirzepatide SC injection):** Approved by FDA May 2022 for type 2 diabetes mellitus as adjunct to diet and exercise.
- **Zepbound (tirzepatide SC injection):** Approved by FDA November 2023 for chronic weight management in adults with BMI ≥30 or ≥27 with at least one weight-related comorbidity.
- **Not yet approved:** Heart failure, NASH/MASH, sleep apnea (SURMOUNT-OSA trial ongoing), osteoarthritis.

## Safety profile

- **Most common adverse events:** Nausea (17–22%), diarrhea (13–16%), vomiting (6–10%), constipation — predominantly GI, onset during dose escalation, mostly mild-to-moderate, resolving within weeks.
- **Serious adverse events:** 5–7% tirzepatide vs 3% semaglutide in SURPASS-2 [^frias2021]; requires monitoring.
- **Pancreatitis risk:** Labeled warning; monitoring recommended in high-risk patients.
- **Thyroid C-cell tumours:** Class warning based on rodent data; clinical significance in humans unestablished. Contraindicated in personal or family history of medullary thyroid carcinoma or MEN2.
- **Lean mass loss:** See section above — clinically meaningful sarcopenic signal, particularly in older populations.
- **Heart rate elevation:** ~2–4 bpm increase; lower than retatrutide but should be considered in patients with arrhythmia or SA node dysfunction. #gap/needs-replication (specific bpm values not confirmed from abstract).
- **Diabetic retinopathy:** Rapid glycaemic improvement can transiently worsen retinopathy; monitor in T2D patients with pre-existing retinopathy.

## Effects on aging hallmarks

| Hallmark | Evidence | Quality |
|---|---|---|
| [[chronic-inflammation]] | Reduces hsCRP, IL-6, adipose-derived inflammatory cytokines via adiposity reduction; direct GLP-1R anti-inflammatory signalling proposed but weight-independent component poorly quantified | Strong — large RCT populations; mechanism partly indirect |
| [[deregulated-nutrient-sensing]] | Improves insulin sensitivity, reduces hyperinsulinemia and fasting insulin; reduces IGF-1 modestly | Strong — multiple large T2D + obesity RCTs |
| [[stem-cell-exhaustion]] | Negative: lean-mass loss (~25% of weight loss) may accelerate functional muscle decline; no direct stem-cell data | Preclinical concern; clinical monitoring required |
| [[altered-intercellular-communication]] | Reduced MACE (dulaglutide comparator) suggests vascular anti-inflammatory effect; not established vs placebo | Limited from SURPASS-CVOT (active comparator design) |

## GIP receptor biology and the GIPR controversy

Paradoxically, GIPR agonism had long been considered **potentially harmful** in obesity — early data suggested GIP enhanced fat storage and insulin resistance. Tirzepatide's superior weight loss has challenged this model: either the dual agonism creates a mechanistically distinct state, or GIPR signalling in the CNS (rather than adipose) drives the incremental weight-loss effect.

A competing hypothesis is that GIPR **antagonism** (not agonism) also produces weight loss by a different mechanism — suggesting GIPR modulation in either direction may be beneficial depending on context. This pharmacological paradox is unresolved [^unsourced-gipr-paradox]. #gap/no-mechanism — the molecular basis of GIPR's contribution to tirzepatide's superior efficacy vs GLP-1 agonists alone is not established.

## Limitations and gaps

- **GIP arm biology in aging is unstudied.** All major trial populations were T2D or obese — extrapolation to healthy aging (normal-weight, non-diabetic older adults) is not supported. #gap/needs-human-replication
- **No placebo-controlled cardiovascular outcomes trial** (SURPASS-CVOT used dulaglutide as active comparator). Whether tirzepatide reduces absolute MACE risk vs no treatment is inferred from the class effect, not directly demonstrated.
- **Lean mass loss** is a real aging-negative signal. The optimal co-intervention strategy (resistance training intensity, protein intake, anabolic adjuncts) is not established.
- **No aging-primary endpoint trial.** No completed RCT has tested tirzepatide against biological age, frailty, or all-cause mortality in a healthy older adult population. #gap/needs-human-replication
- **Long-term data (>5 yr) absent.** SURPASS-CVOT's 46.9-month median follow-up is the longest available.
- **Rebound on discontinuation.** Weight regain after stopping is substantial (~50–65% of lost weight by 1 year in semaglutide cessation data; tirzepatide-specific discontinuation data limited). Implications for frailty in older adults who cycle on/off therapy are unknown.
- **Biologic-level PK** (no oral form approved; subcutaneous injection required; cold-chain storage) presents access and adherence barriers distinct from small-molecule drugs.

## Classification

- **Mechanism class:** Dual incretin agonist (GLP-1R + GIPR)
- **SENS strategy:** Not directly mapped (reduces adiposity-driven damage accumulation; no direct SENS damage-repair category)
- **Intervention category:** [[interventions/pharmacological/glp1-agonists]]

## Related pages

- [[semaglutide]] — canonical GLP-1 RA comparator; SELECT MACE trial; OA cartilage signal
- [[interventions/pharmacological/glp1-agonists]] — class-level page; trial landscape
- [[glp1r]] — GLP-1 receptor protein page (forward reference; may not yet exist)
- [[gipr]] — GIP receptor protein page (forward reference; may not yet exist)
- [[deregulated-nutrient-sensing]] — upstream aging hallmark
- [[chronic-inflammation]] — primary hallmark targeted
- [[type-2-diabetes]] — primary approved indication
- [[studies/surpass-cvot-2025]] — SURPASS-CVOT primary publication study page (parallel seed)

## Footnotes

[^frias2021]: doi:10.1056/NEJMoa2107519 · Frías JP, Davies MJ, Rosenstock J, et al. · *N Engl J Med* 2021;385(6):503–515 · n=1,879 · rct · open-label, 40-week, phase 3 · model: T2D adults on metformin ± SGLT-2i · tirzepatide 5/10/15 mg weekly vs semaglutide 1 mg weekly · HbA1c reduction at 40 wk: −2.01/−2.24/−2.30 pp (tirzepatide) vs −1.86 pp (semaglutide); weight treatment differences vs semaglutide: −1.9/−3.6/−5.5 kg · archive: closed-access (not locally downloaded); 1,641 citations; citation percentile 100th

[^jastreboff2022]: doi:10.1056/NEJMoa2206038 · Jastreboff AM, Aronne LJ, Ahmad NN, et al. · *N Engl J Med* 2022;387(3):205–216 · n=2,539 · rct · double-blind, 72-week, phase 3 (SURMOUNT-1) · model: obese adults without T2D (BMI ≥30 or ≥27 + comorbidity) · tirzepatide 5/10/15 mg weekly vs placebo · body weight change at 72 wk: −15.0%/−19.5%/−20.9% vs −3.1% placebo (all p<0.001) · archive: bronze OA; 2,649 citations; citation percentile 100th

[^nicholls2025]: doi:10.1056/NEJMoa2505928 · Nicholls SJ et al. (SURPASS-CVOT) · *N Engl J Med* 2025 · n=13,299 · rct · double-blind, active-comparator, median 46.9 months · model: T2D + established CVD · tirzepatide 5/10/15 mg weekly vs dulaglutide 1.5 mg weekly · primary 3-pt MACE HR 0.92 (95.3% CI 0.83–1.01); non-inferiority p=0.003; superiority p=0.09 (not met) · archive: green OA (pending download); 2 citations to date

[^nissen2026]: doi:10.1001/jamacardio.2026.0767 · Nissen SE, Wolski K, D'Alessio D, et al. · *JAMA Cardiol* 2026 (published online 2026-03-28) · post-hoc analysis of SURPASS-CVOT · 6-component cardiorenal composite HR 0.84 (95% CI 0.79–0.90; p<0.001) · absolute risk reduction 3.7%; NNT=27 · note: POST-HOC (not pre-specified primary endpoint); hypothesis-generating only · archive: DOI not yet in archive

[^jastreboff2023_reta]: doi:10.1056/NEJMoa2301972 · Jastreboff AM, Kaplan LM, Frías JP, et al. · *N Engl J Med* 2023;389(6):514–526 · n=338 · rct · double-blind, 48-week, phase 2 · model: obese adults without T2D · retatrutide (1/2/4/8/12 mg) vs placebo · body weight change at 48 wk: −8.7% (1 mg) to −24.2% (12 mg) vs −2.1% placebo · dose-dependent heart rate increases peaked at 24 wk; specific bpm values in paper body (not reported in abstract) · archive: closed-access; 807 citations; citation percentile 100th

[^locatelli2024]: doi:10.2337/dci23-0100 · Locatelli JC, Costa JG, Haynes A, et al. · *Diabetes Care* 2024 (Oct) · review · incretin-based weight loss and lean-mass changes · approximately 25% of total weight lost is fat-free mass with incretin agents; ~10% body weight lost or ~6 kg lean mass; equivalent to ">decade of aging" in rate of lean-mass decline · resistance exercise can partially mitigate lean-mass loss

[^wilding2021]: doi:10.1056/NEJMoa2032183 · Wilding JPH, Batterham RL, Calanna S, et al. · *N Engl J Med* 2021;384(11):989–1002 · n=1,961 · rct · double-blind, 68-wk, phase 3 (STEP-1) · model: obese adults without T2D · semaglutide 2.4 mg weekly vs placebo · mean body weight loss −14.9% vs −2.4% (difference −12.4 pp, 95% CI −13.4 to −11.5, p<0.001) · cited here for comparison with tirzepatide weight-loss data

[^unsourced-gipr-paradox]: #gap/unsourced — The GIPR agonism vs antagonism paradox and the proposed CNS mechanism for tirzepatide's GIP contribution are discussed in the mechanistic literature but no primary citation has been confirmed for this page. Needs literature search targeting GIPR CNS biology and tirzepatide mechanism-of-action papers.
