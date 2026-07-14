---
type: compound
aliases: [oxymetazoline hydrochloride, Rhofade, Afrin, "6-tert-butyl-3-(4,5-dihydro-1H-imidazol-2-ylmethyl)-2,4-dimethylphenol"]
pubchem-cid: 4636
chembl-id: CHEMBL762
drugbank-id: DB00935
molecular-formula: C16H24N2O
molecular-weight-da: 260.37
administration-route: multi-route
biologic: false
mechanisms: [vasoconstrictor, alpha-adrenergic-agonism, alpha-1-agonism]
targets: ["[[adra1a]]", "[[adra2]]"]
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Direct head-to-head parallel-group RCT (oxymetazoline 1% cream vs brimonidine 0.33% gel, n≥200, 12-week) with rebound erythema frequency as a co-primary endpoint alongside responder rate — existing efficacy data are from separate phase 3 programs; the rebound comparison is indirect only."
clinical-trials-active: 0
literature-checked-through: 2026-06-27
verified: true
verified-date: 2026-06-27
verified-by: claude
verified-scope: "REVEAL 1 (PMID 29320594), REVEAL 2 (PMID 29537447), pooled analysis (PMID 30500142), Liu 2023 (PMID 37128814), and Gao 2025 (PMID 40246142) cross-checked against PubMed full abstracts; DrugBank ID confirmed via Wikidata; PubChem CID 4636 and ChEMBL CHEMBL762 confirmed via REST API; Liu 2023 full-text PDF not accessible (hybrid OA, download failed) — n=2298 and brimonidine indirect-comparison claim flagged as abstract-unconfirmed; JDD DOIs for REVEAL papers remain unresolvable (not DOI-indexed in PubMed or Crossref)"
---

# Oxymetazoline

FDA-approved topical α1A-adrenergic receptor agonist for the persistent facial erythema of [[rosacea]]. Applied once daily as a 1% cream (Rhofade), it produces transient dermal vasoconstriction — reducing diffuse facial redness within ~1 hour for approximately 8–12 hours per dose. Like [[brimonidine]] (the α2-selective comparator), oxymetazoline addresses the vascular *symptom* of rosacea erythema rather than its cause: it does not alter the underlying cathelicidin/KLK-5 inflammatory cascade, does not clear fixed [[telangiectasia]] (which require [[interventions/procedural/vascular-laser|vascular laser or IPL]]), and does not modify disease course. Originally developed and still widely used as a nasal decongestant (Afrin, 0.05% intranasal solution). The aging relevance is its FDA-approved role as the primary pharmacological erythema-control option in rosacea, a condition that worsens with cumulative UV exposure and vascular aging.

## Identity

- **PubChem CID:** 4636 (confirmed via PubChem REST API)
- **InChIKey:** WYWIFABBXFUGLM-UHFFFAOYSA-N
- **ChEMBL ID:** CHEMBL762 (confirmed via ChEMBL API; first approved 1986)
- **DrugBank ID:** DB00935 (free base; HCl salt form DBSALT000821 — confirmed via Wikidata Q417813)
- **Molecular formula:** C16H24N2O
- **Molecular weight:** 260.37 g/mol
- **LogP (XLogP3-AA):** 2.9 (moderate lipophilicity; compatible with transdermal penetration)
- **Chemical class:** imidazoline / substituted phenol; sympathomimetic adrenergic agonist
- **CAS:** 1491-59-4 (free base)

## Mechanism of action

### α-Adrenergic receptor agonism → cutaneous vasoconstriction

Oxymetazoline is primarily an **α1A-adrenergic receptor agonist** with partial **α2-adrenergic receptor agonism**. In the dermal context, smooth muscle cells of cutaneous arterioles and venules express α1A-adrenergic receptors whose activation triggers Gq protein → phospholipase C → IP3 / DAG → intracellular Ca²⁺ release → smooth muscle contraction and vessel narrowing. Applied topically as a 1% cream, oxymetazoline penetrates to the superficial dermal vascular plexus and constricts the dilated capillary bed that generates the diffuse, persistent redness of rosacea erythema.

The vasoconstriction is **transient**: as oxymetazoline is metabolised or cleared locally, sympathetic vascular tone is restored and vessels return to their prior diameter. Duration of clinically useful effect is approximately 8–12 hours per once-daily dose, as assessed in the pivotal trials at 3, 6, 9, and 12 hours post-application [^kircik2018][^baumann2018].

### What oxymetazoline does NOT do

| Action | Status |
|---|---|
| Reduces cathelicidin LL-37 / KLK-5 (rosacea primary inflammatory axis) | No — does not engage the innate-immune upstream mechanism |
| Clears fixed telangiectasia (structurally ectatic vessels) | No — vasoconstriction is functional, not ablative; fixed vessels require selective photothermolysis |
| Modifies rosacea disease course or progression | No — erythema returns to baseline on cessation; no data on long-term disease modification |
| Reduces papulopustular lesions | No — not indicated for papulopustular phenotype |
| Modulates senescent cell burden or SASP | No — purely hemodynamic mechanism |

For permanent clearance of fixed telangiectasia, see [[interventions/procedural/vascular-laser]] (pulsed-dye laser, KTP laser, IPL). For the anti-inflammatory rosacea agents that target the cathelicidin cascade, see [[rosacea]] § Therapeutic landscape.

### Receptor subtype distinction: α1 (oxymetazoline) vs α2 (brimonidine)

Both oxymetazoline and [[brimonidine]] produce cutaneous vasoconstriction in rosacea erythema but via distinct receptor subtypes:

| Property | Oxymetazoline (Rhofade) | Brimonidine (Mirvaso) |
|---|---|---|
| Primary receptor | α1A-adrenergic (Gq / Ca²⁺ pathway) | α2-adrenergic (Gi / ↓cAMP pathway) |
| Secondary receptor | Partial α2 agonism | Minimal α1 activity |
| Approved formulation | 1% cream, once daily | 0.33% gel, once daily |
| FDA approval (rosacea erythema) | 2017 (Rhofade) | 2013 (Mirvaso) |
| Rebound erythema — phase 3 trials | 2.2% (REVEAL 1) and 1.2% (REVEAL 2); pooled 1.7% [^kircik2018][^baumann2018][^steingold2018] | ~10–30% in case series/open-label literature [^vanzuuren2019] |

**Critical caveat — no head-to-head trial exists.** The apparently lower rebound rate for oxymetazoline vs brimonidine is derived from separate phase 3 programs using different patient populations, study designs, and follow-up assessment methods. The comparison is indirect and should be treated as hypothesis-generating, not as a definitive clinical distinction. #gap/needs-replication

The mechanistic rationale for the difference, when proposed in the literature, notes that α1-receptor agonism on postsynaptic vascular smooth muscle may produce less tachyphylaxis than the α2-receptor's mixed presynaptic/postsynaptic actions (which involve downregulation of presynaptic norepinephrine release, potentially altering baseline sympathetic tone). This is a plausible but unvalidated mechanistic hypothesis.

### Intranasal decongestant context (Afrin, 0.05%)

Oxymetazoline 0.05% solution has been used as an OTC nasal decongestant since the 1970s. The mechanism is identical — α-adrenergic-mediated vasoconstriction — applied to the richly vascularised nasal mucosa rather than facial dermis. The principal safety concern with nasal use is **rhinitis medicamentosa** (rebound nasal congestion), which develops in virtually all patients using nasal oxymetazoline beyond 3–5 days, driven by receptor downregulation and rebound vasodilation. The substantially lower rebound rate for topical 1% cream use in rosacea (1.2–2.2% across REVEAL trials; pooled 1.7%) compared to nasal-route use likely reflects differences in skin vs mucosa receptor density, formulation penetration kinetics, and the chronic once-daily low-frequency application pattern. The nasal OTC use of oxymetazoline is pharmacologically related to but clinically distinct from the rosacea cream indication.

## Efficacy — pivotal phase 3 trials (REVEAL program)

Oxymetazoline 1% cream was evaluated in two independent phase 3 randomised, double-blind, vehicle-controlled trials (REVEAL 1 and REVEAL 2) with an identical primary endpoint: ≥2-grade composite improvement on both the Clinician Erythema Assessment (CEA) and Subject Self-Assessment (SSA) scales at 3, 6, 9, and 12 hours post-dose on day 29.

| Trial | n | Primary outcome | p-value | Key safety / tolerability |
|---|---|---|---|---|
| REVEAL 1 [^kircik2018] | 440 (oxymetazoline n=222; vehicle n=218; 78.9% female; mean age 49.5y) | Significantly greater proportion achieved ≥2-grade CEA+SSA improvement at each time point and overall | p<0.001 overall; p<0.02 at each time point | Adverse event discontinuation rate 1.8% (oxymetazoline) vs 0.5% (vehicle); rebound effect 2.2% vs 1.1% |
| REVEAL 2 [^baumann2018] | 445 (78.7% female; mean age 50.3y; 84.0% moderate CEA; 91.5% moderate SSA at baseline) | Significantly greater primary efficacy vs vehicle | p=0.001 | Rebound erythema 1.2% (oxymetazoline, n=2) vs 0% (vehicle); discontinuations 2.7% vs 0.5% |
| Pooled analysis [^steingold2018] | 885 pooled (78.8% female; 85.8% moderate CEA) | Primary outcome significantly greater oxymetazoline vs vehicle | p<0.001 | Overall adverse events 16.4% oxymetazoline vs 11.8% vehicle; rebound erythema 1.7% vs 0.6%; low incidence of application-site reactions |

### Meta-analytic and systematic review evidence

**Liu et al. 2023 (meta-analysis; n=2,298 per full text — not confirmable from abstract):** Confirmed significantly higher CEA and SSA success rates vs vehicle at 3, 6, 9, and 12 hours post-dose (CEA RR at 3h=1.76, 6h=1.71, 9h=1.63, 12h=1.41; SSA RR at 3h=1.65, 6h=1.75, 9h=1.63, 12h=1.78) [^liu2023]. Overall TEAE incidence significantly higher for oxymetazoline vs vehicle. Application-site dermatitis was the most important individual adverse event (RR=8.91, 95% CI 1.76–45.23 vs vehicle); no other individual adverse event differed significantly between groups. A brimonidine indirect comparison has been attributed to this meta-analysis in secondary literature, but the abstract does not mention brimonidine; this claim is unconfirmed pending full-text verification. #gap/unsourced

**Yuan & Yin 2023 (systematic review):** Confirmed efficacy and safety of oxymetazoline 1% cream for rosacea-associated erythema across available controlled trials [^yuan2023].

**Gao & Xiang 2025 (comparative efficacy meta-analysis; 21 RCTs, 6 topical drugs):** Both brimonidine and oxymetazoline had significant effects on reducing facial redness; ivermectin was more effective than azelaic acid and metronidazole [^gao2025]. All agents were well-tolerated and safe. Confirms that oxymetazoline and brimonidine occupy a distinct vasoconstrictor niche — effective for erythema, not papulopustular lesions.

### Combination with vascular laser (laser + oxymetazoline)

Sodha et al. 2021 (n=36; RCT) found that combined 595 nm pulsed-dye laser (PDL) + oxymetazoline cream was superior to oxymetazoline cream alone for erythema and telangiectasia outcomes at follow-up [^sodha2021]. Nguyen et al. 2026 network meta-analysis (25 RCTs, qualitative synthesis) echoed this, with the combination oxymetazoline + PDL showing superiority for telangiectasia-specific endpoints [^nguyen2026]. The mechanistic rationale is complementary: oxymetazoline reduces functional vasodilation transiently; laser ablates structurally fixed ectatic vessels permanently. The combination provides both immediate and durable benefit. Confidence in the network meta-analysis is limited by high or unclear risk of bias in most constituent RCTs [^nguyen2026]. #gap/needs-replication

## Pharmacokinetics

Systemic PK data for the topical 1% cream formulation are limited in the publicly available literature. Key physicochemical and pharmacodynamic characteristics:

- **Onset of effect:** ~30–60 minutes post-application (estimated from REVEAL trial responder curves)
- **Duration of effect:** ~8–12 hours (assessed at 3, 6, 9, 12 hours post-dose in phase 3 trials; 12-hour time point met in both REVEAL trials)
- **LogP:** 2.9 — moderate lipophilicity enabling epidermal penetration to superficial papillary dermis vasculature
- **Molecular weight:** 260.37 Da — below the ~500 Da dermal penetration threshold
- **Systemic absorption:** Minimal from 1% cream on intact facial skin; cardiovascular adrenergic effects are not reported as a concern at this dose/route; the compound acts primarily on the local dermal vasculature
- **Intranasal PK (0.05% solution, for context):** Rapidly absorbed through nasal mucosa; short plasma half-life (~5–6 hours); systemic levels at nasal decongestant doses can produce measurable cardiovascular effects in susceptible individuals — not applicable to topical 1% cream

## Aging relevance

### Rosacea, cumulative UV, and the aging vasculature

Rosacea erythema has both a functional component (episodic vasodilation driven by neurogenic and inflammatory triggers) and a structural component (fixed telangiectasia from decades of UV-driven perivascular collagen loss, progressive vessel ectasia, and SASP-mediated angiogenic milieu — see [[telangiectasia]] and [[erythema]]). Oxymetazoline addresses the functional vasodilation component. The structural component (fixed telangiectasia) does not respond to oxymetazoline and requires laser ablation.

With aging, the structural component becomes dominant: the ratio of permanent-to-functional erythema shifts toward fixed vessels as UV-driven perivascular matrix loss accumulates and senescent-fibroblast SASP (VEGF-A, MMP secretion) destabilises the vascular scaffold further. Oxymetazoline's utility therefore depends on how much of the patient's erythema burden is functional (vasotonically modifiable) vs structural (ectatic and fixed).

### Rosacea treatment in older adults

Lee & Chien 2024 (review: rosacea pharmacology in older adults) noted that topical vasoconstrictors — oxymetazoline and brimonidine — are the only FDA-approved pharmacological options specifically targeting the erythema phenotype in rosacea. The safety profile is generally appropriate for older adults without severe cardiovascular comorbidities; significant systemic adrenergic effects are not expected from topical 1% cream at once-daily dosing [^lee2024]. The review highlights that the clinical evidence base for rosacea treatments in patients aged 65+ is thin, with the pivotal trials dominated by 30–60-year-old participants.

### Positioning within the rosacea management ladder

| Clinical goal | Agent class | Agent(s) |
|---|---|---|
| Reduce diffuse functional erythema (transient, vasotonically modifiable) | α-adrenergic agonist (symptomatic) | oxymetazoline (α1); [[brimonidine]] (α2) |
| Reduce cathelicidin/KLK-5 inflammatory cascade | Anti-inflammatory topical | azelaic acid 15%, ivermectin 1% cream, metronidazole 0.75–1% |
| Reduce papulopustular lesions systemically | Sub-antimicrobial doxycycline 40 mg MR | |
| Permanently clear fixed telangiectasia or diffuse structural erythema | Vascular laser / IPL | PDL 585–595 nm, KTP 532 nm, IPL 515–1200 nm |

For the full rosacea therapeutic landscape, see [[rosacea]] § Therapeutic landscape. For the vascular mechanisms of telangiectasia, see [[telangiectasia]].

## Extrapolation table

| Dimension | Status |
|---|---|
| Mechanism characterised in humans? | Yes — α1A-adrenergic receptor agonism on cutaneous vascular smooth muscle; phase 3 trials confirm hemodynamic vasoconstriction in facial erythema of rosacea |
| Phenotype (erythema reduction) replicated? | Yes — two independent phase 3 RCTs + pooled analysis + meta-analysis all confirm CEA/SSA improvement |
| Replicated vs vehicle in humans? | Yes — two pivotal phase 3 RCTs [^kircik2018][^baumann2018] |

## Limitations and gaps

1. **Symptomatic, not disease-modifying.** Oxymetazoline reduces the vascular expression of rosacea erythema without altering cathelicidin/KLK-5 dysregulation, Demodex burden, or the senescent-cell SASP angiogenic milieu. Erythema returns to baseline on cessation; no data on long-term disease course modification. #gap/no-mechanism (for any disease-modifying effect)

2. **Rebound erythema comparison with brimonidine is indirect.** The rebound rate for oxymetazoline was 2.2% in REVEAL 1, 1.2% in REVEAL 2, and 1.7% in the pooled analysis — all substantially lower than the ~10–30% reported for brimonidine in case-series and open-label literature. However, this comparison comes from separate trial programs and case-series literature, not a head-to-head RCT; the difference may reflect study design as much as pharmacology. #gap/needs-replication

3. **No long-term controlled trial beyond 29 days.** The pivotal REVEAL trials ran 29 days with a vehicle control; there is a 52-week open-label extension (PMID 29879249, Tanghetti et al. 2018) but no long-term placebo-controlled comparison. #gap/long-term-unknown

4. **Application-site dermatitis risk.** The Liu 2023 meta-analysis reports RR=8.91 (95% CI 1.76–45.23) vs vehicle for application-site dermatitis [^liu2023] — the most important individual adverse event by meta-analysis; no other individual adverse event reached statistical significance. The wide confidence interval reflects low absolute event counts. #gap/needs-replication (replication in head-to-head vs brimonidine)

5. **No active trials as of 2026-06-27.** ClinicalTrials.gov v2 API returned 0 active or recruiting trials for oxymetazoline rosacea. Post-approval development appears limited to characterisation of combination regimens.

6. **No 65+ subgroup analysis.** The pivotal REVEAL trials enrolled predominantly adults aged 30–60. Treatment response and safety in patients >65 are not separately reported. #gap/needs-replication

7. **No study on whether regular use retards structural progression.** The key unanswered question for long-term use is whether symptom management (reducing episodic vasodilation and vascular stress) slows the accumulation of structural telangiectasia. No evidence addresses this. #gap/no-mechanism

## Cross-references

- [[rosacea]] — full phenotype page: cathelicidin/KLK-5 axis, ROSCO classification, therapeutic landscape
- [[erythema]] — chronic erythema mechanism hub; vascular and inflammatory axes
- [[telangiectasia]] — fixed ectatic vessels; what oxymetazoline does NOT address; selective photothermolysis
- [[brimonidine]] — α2-selective comparator (compound page — implicit stub, not yet seeded #gap/stub)
- [[interventions/procedural/vascular-laser]] — pulsed-dye laser, KTP laser, IPL for permanent vessel clearance
- [[chronic-inflammation]] — primary hallmark of rosacea; cathelicidin/KLK-5 innate immune axis
- [[cellular-senescence]] — SASP angiogenic milieu amplifying vascular phenotype in aged dermis
- [[skin-aging]] — UV/MMP/collagen axis; broader photoaging context

## Footnotes

[^kircik2018]: PMID 29320594 · Kircik LH, DuBois J, Draelos ZD, Werschler P, Grande K, Cook-Bolden FE, Weng E, Berk DR, Ahluwalia G · J Drugs Dermatol 2018;17(1):97–105 · doi: not indexed in PubMed or Crossref (JDD 2018 papers not DOI-assigned) · rct · n=440 (oxymetazoline n=222; vehicle n=218; 78.9% female; mean age 49.5y; most had moderate erythema) · model: adults with moderate-to-severe persistent facial erythema of rosacea · REVEAL 1; primary endpoint (≥2-grade CEA+SSA improvement) met p<0.001 overall and p<0.02 at each time point; TEAE discontinuations 1.8% (oxymetazoline) vs 0.5% (vehicle); most common TEAEs: application-site dermatitis, application-site erythema, headache (1.4% each in oxymetazoline group); rebound effect (post-treatment erythema worsening) 2.2% (oxymetazoline) vs 1.1% (vehicle); abstract-verified

[^baumann2018]: PMID 29537447 · Baumann L, Goldberg DJ, Stein Gold L, Tanghetti EA, Lain E, Kaufman J, Weng E, Berk DR, Ahluwalia G · J Drugs Dermatol 2018;17(3):290–298 · doi: not indexed in PubMed or Crossref (JDD 2018 papers not DOI-assigned) · rct · n=445 (78.7% female; mean age 50.3y; 84.0% moderate CEA; 91.5% moderate SSA at baseline) · model: adults with moderate-to-severe persistent facial erythema of rosacea · REVEAL 2; primary endpoint met p=0.001; individual CEA p<0.001, SSA p=0.011; digital image analysis of erythema reduction favored oxymetazoline p<0.001; TEAE discontinuations 2.7% vs 0.5%; rebound erythema 2 patients (1.2%) in oxymetazoline group vs 0 in vehicle group; abstract-verified

[^steingold2018]: PMID 30500142 · Stein-Gold L, Kircik L, Draelos ZD, Werschler P, DuBois J, Lain E, Baumann L, Goldberg D, Kaufman J, Tanghetti E, Ahluwalia G, Alvandi N, Weng E, Berk D · J Drugs Dermatol 2018;17(11):1201–1208 · doi: not indexed in PubMed or Crossref (JDD 2018 papers not DOI-assigned) · pooled analysis · n=885 (78.8% female; 85.8% moderate CEA; 91.2% moderate SSA) · Pooled REVEAL 1+2; primary outcome met p<0.001; individual CEA and SSA scores p<0.001; digital image analysis of erythema reduction p<0.001; TEAE incidence 16.4% (oxymetazoline) vs 11.8% (vehicle); rebound erythema (post-treatment worsening) 1.7% vs 0.6%; abstract-verified

[^liu2023]: doi:10.1111/jocd.15747 · Liu F, Zhou Q, Wang H, Fu H, Li Y, Tao M, Luo H, Cao Y · J Cosmet Dermatol 2023;22(9):2408–2419 · PMID 37128814 · meta-analysis · n=2,298 (full-text figure; not in abstract) · CEA RR at 3h=1.76 (95% CI 1.53–2.03), 6h=1.71 (1.47–2.00), 9h=1.63 (1.40–1.90), 12h=1.41 (1.18–1.67); SSA RR at 3h=1.65, 6h=1.75, 9h=1.63, 12h=1.78; application-site dermatitis most important individual adverse event (RR=8.91, 95% CI 1.76–45.23 vs vehicle); no other individual AE significantly higher; brimonidine indirect comparison not mentioned in abstract — unconfirmed; full-text PDF not accessible (hybrid OA, download failed)

[^yuan2023]: doi:10.1111/jocd.15467 · Yuan X, Yin D · J Cosmet Dermatol 2023;22(1):69–78 · PMID 36237138 · systematic review · abstract-confirmed: efficacy and safety of oxymetazoline 1% cream for rosacea-associated erythema confirmed across included controlled trials

[^gao2025]: doi:10.1016/j.ad.2024.12.026 · Gao X, Xiang W · Actas Dermosifiliograficas 2025;116(8):863–875 · PMID 40246142 · systematic review + meta-analysis · 21 RCTs included; 6 topical drugs (minocycline, ivermectin, azelaic acid, metronidazole, brimonidine, oxymetazoline) · Ivermectin more effective than azelaic acid and metronidazole; azelaic acid better efficacy than metronidazole; both brimonidine and oxymetazoline have significant effects on reducing facial redness; all agents well-tolerated · abstract-verified

[^sodha2021]: doi:10.1002/lsm.23439 · Sodha P, Suggs A, Munavalli GS, Friedman PM · Lasers Surg Med 2022;54(2):226–234 · PMID 34233378 · rct · n=36 · Combined 595 nm PDL + oxymetazoline cream superior to oxymetazoline cream alone for erythema and telangiectasia outcomes; abstract-confirmed

[^nguyen2026]: doi:10.1111/ddg.15961 · Nguyen L, Sorbe C, Seeber N, Schneider SW, Herberger K · JDDG 2026;24(1) · PMID 41273013 · systematic review + network meta-analysis · 25 RCTs included · Combination oxymetazoline + PDL superior for telangiectasia-specific endpoints; most constituent RCTs had unclear or high risk of bias — results hypothesis-generating only #gap/needs-replication

[^lee2024]: doi:10.1007/s40266-024-01115-y · Lee JJ, Chien AL · Drugs Aging 2024;41(5):419–432 · PMID 38649625 · review · Rosacea in older adults; topical vasoconstrictors (oxymetazoline, brimonidine) are the only FDA-approved erythema-specific pharmacological options; safety generally appropriate for older adults without severe cardiovascular comorbidity; pivotal trial evidence dominated by 30–60 year-old populations; abstract-confirmed

[^vanzuuren2019]: doi:10.1111/bjd.17590 · van Zuuren EJ, Fedorowicz Z, Tan J, van der Linden MMD, Arents BWM, Carter B, Charland L · Br J Dermatol 2019;181(1):65–79 · PMID 30585305 · systematic review with GRADE · Brimonidine for persistent erythema: GRADE high certainty of efficacy; rebound erythema ~10–30% from clinical literature cited within review; full citation also on [[rosacea]]
