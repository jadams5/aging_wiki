---
type: compound
aliases: [Attruby, AG10, ACO-001]
pubchem-cid: 71464713
chembl-id: null
drugbank-id: null
biologic: false
who-inn: acoramidis
molecular-formula: C15H17FN2O3
molecular-weight-da: 292.30
mechanisms: [ttr-tetramer-stabilization, anti-amyloid-stabilizer]
targets: ["[[transthyretin]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT vs tafamidis in ATTR-CM, powered for all-cause mortality; or acoramidis + vutrisiran combination RCT to assess whether dual stabilization+knockdown exceeds either monotherapy."
clinical-trials-active: 6
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Judge 2025 JACC (doi:10.1016/j.jacc.2024.11.042) and Judge 2025 Circulation OLE (doi:10.1161/CIRCULATIONAHA.124.072771) verified against full local PDFs — all quantitative claims confirmed. Gillmore 2024 NEJM primary (doi:10.1056/NEJMoa2305434) verified abstract-level only (PDF download failed); primary endpoint win ratio and safety figures confirmed via PubMed efetch abstract; full methods/subgroup details in Gillmore 2024 not independently read. Maurer 2025 JACC, Masri 2026 JACC, Alexander 2026 JAMA Cardiology, Facin 2025 ABC, Briasoulis 2026 CPC: abstract-level only — DOI lookup failed or not attempted. ClinicalTrials.gov active trial count and all 6 NCT numbers confirmed 2026-05-09."
---

# Acoramidis

An orally bioavailable small-molecule transthyretin (TTR) tetramer stabilizer approved by the FDA on November 22, 2024 (brand name Attruby; BridgeBio Pharma / Bayer) for the treatment of transthyretin amyloid cardiomyopathy (ATTR-CM), both wild-type and hereditary (variant) forms. Acoramidis is the most potent TTR stabilizer in clinical use, achieving near-complete (≥90%) TTR stabilization at the approved dose — a significant advance over the first-in-class agent tafamidis (~70% stabilization). The landmark ATTRibute-CM Phase 3 trial (n=632, 30 months) demonstrated a hierarchical composite win ratio of 1.8 (95% CI 1.4–2.2; P<0.001) over placebo [^gillmore2024]; a pre-specified secondary analysis found 35.9% vs 50.5% event rates for the composite of all-cause mortality or first CV hospitalization (HR 0.64; P=0.0008) [^judge2025]. In aging-biology terms, acoramidis is the second FDA-approved AmyloSENS-class compound and the most advanced demonstration that near-complete oral small-molecule amyloid-precursor stabilization is achievable and clinically meaningful.

## Identity

- **PubChem CID:** 71464713
- **Molecular formula:** C15H17FN2O3
- **Molecular weight:** 292.30 Da
- **IUPAC name:** 3-[3-(3,5-dimethyl-1H-pyrazol-4-yl)propoxy]-4-fluorobenzoic acid
- **InChIKey:** WBFUHHBPNXWNCC-UHFFFAOYSA-N
- **WHO-INN:** acoramidis
- **Brand name:** Attruby (BridgeBio / Bayer)
- **Development code:** AG10; ACO-001
- **Approved indication:** ATTR cardiomyopathy (wild-type + hereditary/variant)
- **Dosing:** 800 mg orally twice daily (per FDA label)
- **ChEMBL ID:** not confirmed; #gap/needs-canonical-id (ChEMBL lookup pending)
- **DrugBank ID:** not confirmed; #gap/needs-canonical-id

## Mechanism of action

TTR circulates as a homotetramer that transports thyroxine (T4) and retinol-binding protein. The tetramer has two symmetrical thyroxine-binding sites (T4 binding pockets) at the dimer-dimer interface. Amyloidogenesis proceeds through rate-limiting tetramer dissociation to monomers, followed by partial unfolding and misassembly into amyloid fibrils that deposit in the myocardium, peripheral nerves, and connective tissues.

Acoramidis stabilizes the TTR tetramer by binding cooperatively to **both T4-binding sites** simultaneously, raising the activation energy barrier for tetramer dissociation [^gillmore2024]. This dual-site, near-complete occupancy distinguishes acoramidis from tafamidis, which preferentially occupies one of the two T4 sites at clinical dose, achieving ~70% stabilization. Independent pharmacodynamic analyses within ATTRibute-CM confirmed that acoramidis produces ≥90% TTR stabilization measured by the fluorescence exclusion assay in serum samples from trial participants [^alexander2026].

Critically, acoramidis raises rather than suppresses serum TTR concentration: within 28 days of treatment initiation, mean serum TTR rose by ~9.1 mg/dL; each 5 mg/dL increment in early TTR rise was independently associated with a 31.6% relative reduction in all-cause mortality probability, and bootstrap mediation analysis showed that the early TTR-rise "fully mediates" the effect of acoramidis on mortality [^maurer2025]. This provides a mechanistic biomarker link between TTR stabilization and clinical outcome.

| Mechanism dimension | Acoramidis | Tafamidis |
|---|---|---|
| T4-site occupancy | Both sites (~dual-site) | Primarily one site |
| TTR stabilization | ≥90% | ~70% |
| Serum TTR effect | Rises (~+9.1 mg/dL at 28 days) | Rises (similar pattern) |
| Route | Oral BID 800 mg | Oral QD 80 mg |
| Structural class | Fluorobenzoic acid / dimethylpyrazole | Benzoxazole / difluorophenyl |

#gap/needs-replication — The ≥90% stabilization figure derives from BridgeBio/ATTRibute-CM trial-sponsored assays. Independent academic replication of the stabilization magnitude comparison vs tafamidis using matched assay conditions has not been published as of 2026-05-09.

## Regulatory status

- **FDA traditional approval:** November 22, 2024 — ATTR-CM (wild-type + hereditary), oral 800 mg BID
- **EMA:** Regulatory filing status — acoramidis received EU marketing authorization recommendation as of 2025; full approval in European markets pending as of 2026-05-09 #gap/needs-replication (verify current EMA status)
- **Japan / other markets:** not confirmed; #gap/unsourced

## Clinical evidence — ATTRibute-CM Phase 3

**Study design [^gillmore2024]:** Randomized, double-blind, placebo-controlled Phase 3 trial; n=632 patients (2:1 allocation, 422 acoramidis : 210 placebo); 30-month treatment period; multi-center international. Primary endpoint: 4-step hierarchical composite (all-cause mortality, cardiovascular hospitalizations, NT-proBNP change from baseline, 6-minute walk distance change from baseline) — analyzed as win ratio. Enrolled ATTR-CM patients (both wild-type and variant), NYHA class I–III.

**Primary endpoint result [^gillmore2024]:** Win ratio 1.8 (95% CI 1.4–2.2; P<0.001). 63.7% of all pairwise comparisons favored acoramidis vs 35.9% favoring placebo.

**Pre-specified secondary analysis — all-cause mortality + first CV hospitalization [^judge2025]:**

| Outcome | Acoramidis (n=409) | Placebo (n=202) | HR | 95% CI | P |
|---|---|---|---|---|---|
| ACM or first CV hosp | 35.9% | 50.5% | 0.64 | 0.50–0.83 | 0.0008 |
| First CV hospitalization alone | 26.7% | 42.6% | 0.60 | 0.45–0.80 | 0.0005 |
| Annualized hosp frequency | 0.22/yr | 0.45/yr | RRR 50% | 95% CI 36–64% | <0.0001 |

**Cumulative/recurrent events analysis [^masri2026]:** Cumulative cardiovascular mortality or recurrent hospitalization through month 30: HR 0.51 (95% CI 0.43–0.62; P<0.0001). An estimated 53 events avoided per 100 treated participants by month 30 (95% CI 29–79).

**Adverse events [^gillmore2024]:** Total adverse events similar between groups (98.1% acoramidis vs 97.6% placebo); serious adverse events 54.6% vs 64.9% (numerically lower in the acoramidis arm). No drug-specific safety signal was identified; tolerability was good.

**Subgroup analysis — wt vs variant ATTR-CM [^alexander2026]:**

| Subgroup | n | Month-30 HR (ACM + first CV hosp) | P |
|---|---|---|---|
| Wild-type ATTR-CM | 552 | 0.69 | 0.007 |
| Variant ATTR-CM | 59 | 0.41 | 0.01 |
| p.Val142Ile (Black variant) | 35 | Consistent benefit (reported) | — |

Numerically greater relative risk reduction in variant vs wild-type ATTR-CM, though the variant subgroup was small (n=59) and the interaction test was not reported.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human clinical trial data |
| Phenotype conserved in humans? | yes — primary human endpoint |
| Replicated in humans? | yes — Phase 3 RCT, n=632 |

## Long-term data — ATTRibute-CM open-label extension (OLE)

**OLE report [^judge2025ole]:** 389 patients enrolled in the OLE (263 continued acoramidis from Phase 3; 126 switched from placebo to acoramidis after the blinded period). Follow-up extended through month 42 from randomization.

| OLE outcome | Continuous acoramidis vs placebo-to-acoramidis | HR | 95% CI | P |
|---|---|---|---|---|
| ACM or first CV hosp | Favoring continuous treatment | 0.57 | 0.46–0.72 | <0.0001 |
| All-cause mortality alone | — | 0.64 | 0.47–0.88 | — |
| First CV hosp alone | — | 0.53 | 0.41–0.69 | — |

**Key OLE implication:** Placebo-to-acoramidis crossover patients did not fully "catch up" to the continuous-treatment arm by month 42, suggesting early treatment initiation produces durable benefits not recoverable by delayed initiation. #gap/long-term-unknown — OLE data extend to 42 months; disease progression and durability beyond this window remain unknown.

## Comparison to other ATTR-CM therapies

### vs Tafamidis (Vyndamax / Vyndaqel)

Tafamidis was the first-in-class FDA-approved TTR stabilizer (2019), validated in the ATTR-ACT trial (n=441, 30 months; HR 0.70 for ACM + CV hosp vs placebo). Acoramidis and tafamidis share the same general mechanism (TTR tetramer stabilization) and the same oral route, but **no head-to-head randomized trial has been conducted** as of 2026-05-09. Cross-trial comparisons are confounded by patient population differences and trial design.

The key mechanistic distinction is stabilization completeness: acoramidis (~≥90%) vs tafamidis (~70%). Whether this translates to superior clinical outcomes is unknown. A systematic review and meta-analysis including both agents (TTR stabilizer class together) found: pooled 29% mortality reduction (RR 0.71; P=0.0006) and 19% hospitalization reduction (RR 0.81; P<0.0001) vs placebo for TTR stabilizers overall [^facin2025].

#gap/contradictory-evidence — A network meta-analysis of imaging parameters found patisiran, tafamidis, and vutrisiran showing numerically greater global longitudinal strain improvement vs placebo than acoramidis, though the clinical significance of imaging differences vs hard mortality/hospitalization endpoints is uncertain [^briasoulis2026].

### vs TTR silencers (patisiran, vutrisiran, inotersen)

Patisiran (siRNA; FDA 2018) and vutrisiran (siRNA; FDA 2022 for hATTR polyneuropathy; FDA 2024 for ATTR-CM with polyneuropathy) reduce TTR production rather than stabilizing the tetramer. They are mechanistically distinct and may be combinable with stabilizers — this is under investigation.

Meta-analysis data suggest TTR silencers show no significant mortality or hospitalization reduction in ATTR-CM as a class (RR not significant; P>0.05 for silencers vs placebo in [^facin2025]), contrasting with the significant benefit seen for stabilizers — though this analysis pools heterogeneous trial populations and caution is warranted about cross-trial comparisons.

## Aging biology context — AmyloSENS

In the SENS damage-category framework ([[sens-damage-categories]]), ATTR-CM represents an **AmyloSENS** target: extracellular amyloid accumulation is a form of "junk inside cells / between cells" that accumulates with age and contributes to tissue dysfunction. By the eighth decade, wild-type TTR amyloid deposits are detectable in ~25% of autopsied hearts, making ATTR-CM a prevalent but historically under-recognized age-convergent disease [^gillmore2024].

Acoramidis demonstrates three key proof-of-concept points for AmyloSENS:

1. **Near-complete amyloid-precursor stabilization is achievable orally.** The ≥90% TTR stabilization at a well-tolerated oral dose shows that pharmacological prevention of amyloid fibril formation from a circulating precursor protein is clinically feasible.
2. **Stabilization translates to mortality benefit in the relevant time horizon.** 30-month all-cause mortality benefit (HR 0.64 vs placebo) confirms that preventing ongoing amyloid deposition in already-affected patients confers meaningful survival advantage — even without reversing existing deposits.
3. **Earlier is better.** OLE data suggest continuous treatment from diagnosis produces durably better outcomes than delayed initiation, consistent with the progressive amyloid burden hypothesis.

The strategy does not reverse existing amyloid deposits (compare to [[lecanemab]] and [[donanemab]] in Aβ amyloidosis, which attempt plaque clearance). Whether combination of stabilizer + silencer + clearance agent would be synergistic is theoretically plausible but untested.

## Active clinical trials (as of 2026-05-09)

6 trials actively recruiting or active-not-recruiting per ClinicalTrials.gov:

| NCT | Condition | Phase | Status |
|---|---|---|---|
| NCT06563895 | ATTR amyloidosis (asymptomatic carriers, prevention) | Phase 3 | Recruiting |
| NCT07306949 | ATTR-CM | Phase 4 | Recruiting |
| NCT07235462 | ATTR-CM (real-world registry) | Observational | Recruiting |
| NCT07112066 | Cardiac ATTR (diagnostic study) | N/A | Recruiting |
| NCT06465810 | ATTR amyloidosis | Observational | Recruiting |
| NCT04988386 | ATTRibute-CM OLE | Phase 3 | Active, not recruiting |

**Noteworthy:** NCT06563895 is a prevention trial in **asymptomatic TTR variant carriers** — the most ambitious AmyloSENS application of the class, testing whether pre-emptive TTR stabilization prevents ATTR-CM onset in a screen-detected high-risk population.

## Safety profile

- **Overall tolerability:** Well-established from Phase 3 (n=632, 30 months). No class-specific adverse events beyond those expected in a ATTR-CM population.
- **SAE frequency:** 54.6% in acoramidis arm vs 64.9% in placebo arm [^gillmore2024] — numerically favoring acoramidis, largely reflecting reduced cardiovascular hospitalizations.
- **Hepatotoxicity:** Not flagged as a concern in ATTRibute-CM; TTR is hepatically synthesized; stabilization does not appear to alter hepatic TTR production adversely.
- **Drug interactions:** Not systematically characterized in post-approval labeling as of available data; #gap/unsourced — formal CYP interaction data should be checked against FDA label directly.
- **Pregnancy:** ATTR-CM predominantly affects elderly patients; formal pregnancy safety data are not available (typical for this patient population).

## Related compounds and interventions

- [[tafamidis]] — first-in-class TTR stabilizer (FDA 2019), same mechanism, lower stabilization completeness. No head-to-head trial vs acoramidis.
- [[patisiran]] — TTR siRNA (FDA 2018 hATTR polyneuropathy); knocks down TTR production rather than stabilizing the tetramer. Different mechanism; potential combination partner.
- [[vutrisiran]] — TTR siRNA (FDA 2022 hATTR polyneuropathy, 2024 ATTR-CM with polyneuropathy). More recent approval in ATTR-CM space.
- [[lecanemab]] — Aβ amyloid-targeted antibody; different amyloid target, different mechanism (immunotherapy-mediated clearance vs stabilization). Illustrates the diversity of AmyloSENS strategies.
- [[donanemab]] — Aβ amyloid-targeted antibody; pyroglutamate-Aβ selective clearance. Same general AmyloSENS framing as acoramidis but CNS/Alzheimer's disease focus.

## Limitations and gaps

- **ATTR-CM indication only.** Acoramidis does not have approval for ATTR polyneuropathy (the other major ATTR disease presentation). Whether efficacy in polyneuropathy would be comparable to stabilizers + silencers is unknown.
- **No head-to-head vs tafamidis.** The clinically important question of comparative effectiveness within the TTR stabilizer class is unresolved. Cross-trial comparisons suggest broadly similar effects, but this is confounded by population and design differences.
- **Durability beyond 42 months unknown.** OLE data reach month 42; whether benefit is sustained or progressive amyloid burden eventually overwhelms the stabilization approach is unknown. #gap/long-term-unknown
- **Does not reverse existing deposits.** Acoramidis prevents new fibril formation but does not clear accumulated amyloid from the myocardium. Combination with a clearance agent (analogous to TTR antibody approaches in development) would be the logical next step.
- **Pharmacoeconomics.** Both tafamidis and acoramidis are high-cost drugs (annual costs in the five-figure range in the US). Comparative cost-effectiveness and payer uptake in the context of an established tafamidis market are active questions. #gap/unsourced — formal cost-effectiveness analyses should be sought from the health economics literature.
- **Real-world effectiveness.** ATTRibute-CM enrolled patients willing and able to participate in a 30-month RCT; real-world effectiveness in older, frailer, more comorbid ATTR-CM patients is tracked via NCT07235462 but results are pending.
- **ChEMBL and DrugBank IDs not confirmed.** #gap/needs-canonical-id — verify ChEMBL and DrugBank entries on next lint pass.

## Footnotes

[^gillmore2024]: doi:10.1056/NEJMoa2305434 · Gillmore JD, Judge DP, Cappelli F, Fontana M, Garcia-Pavia P, Gibbs S, Grogan M, Hanna M, Hoffman J, Masri A, Maurer MS, Nativi-Nicolau J, Obici L, Poulsen SH, Rockhold F, Shah KB, Soman P, Garg J, Chiswell K, Xu H, Cao X, Lystig T, Sinha U, Fox JC, and the ATTRibute-CM Investigators · *New England Journal of Medicine* 2024;390(2):132–142 · n=632 · rct · win ratio 1.8 (95% CI 1.4–2.2; P<0.001) primary composite; safety: AEs 98.1% vs 97.6%; SAEs 54.6% vs 64.9% · model: human ATTR-CM (wild-type + variant) · PMID 38197816 · archive: PDF download failed (OA link connection error 2026-05-09); primary endpoint figures confirmed via PubMed abstract; safety figures cross-confirmed in Judge 2025 JACC full PDF

[^judge2025]: doi:10.1016/j.jacc.2024.11.042 · Judge DP, Alexander KM, Cappelli F, et al. · *Journal of the American College of Cardiology* 2025;85(10):1003–1014 · n=611 (mITT: acoramidis n=409, placebo n=202) · rct-secondary-analysis · HR 0.64 (95% CI 0.50–0.83; P=0.0008) for ACM+first-CV-hosp; annualized CVH frequency RRR 50% (RR ratio 0.50, 95% CI 0.36–0.70; P<0.0001) · model: human ATTR-CM · PMID 40074465 · archive: full PDF verified 2026-05-09

[^judge2025ole]: doi:10.1161/CIRCULATIONAHA.124.072771 · Judge DP, Gillmore JD, Alexander KM, Ambardekar AV, Cappelli F, et al. · *Circulation* 2025 · n=389 (OLE cohort: 263 continuous acoramidis, 126 placebo-to-acoramidis) · rct-open-label-extension · HR 0.57 (95% CI 0.46–0.72; P<0.0001) for ACM+first-CVH at month 42; ACM alone HR 0.64 (95% CI 0.47–0.88; P=0.006); first CVH alone HR 0.53 (95% CI 0.41–0.69; P<0.0001) · model: human ATTR-CM · PMID 39556242 · archive: full PDF verified 2026-05-09

[^maurer2025]: doi:10.1016/j.jacc.2025.03.542 · Maurer MS, Judge DP, et al. · *Journal of the American College of Cardiology* 2025 · n=557 evaluated · rct-secondary-analysis · early serum TTR rise (+9.1 mg/dL at 28 days) fully mediates acoramidis mortality effect per mediation analysis · model: human ATTR-CM · PMID 40398971 · archive: download failed · **abstract-level extraction 2026-05-09**

[^masri2026]: doi:10.1016/j.jacc.2025.09.013 · Masri A, Judge DP, et al. · *Journal of the American College of Cardiology* 2026 · n=632 (ATTRibute-CM) · rct-secondary-analysis · HR 0.51 (95% CI 0.43–0.62) for cumulative CV mortality + recurrent hosp; 53 events avoided/100 treated · model: human ATTR-CM · PMID 41143759 · archive: download pending · **abstract-level extraction 2026-05-09**

[^alexander2026]: doi:10.1001/jamacardio.2025.4477 · Alexander KM, Davis MK, Akinboboye O, et al. · *JAMA Cardiology* 2026 · n=611 (wt=552, variant=59) · rct-secondary-analysis · wt HR 0.69 (p=0.007); variant HR 0.41 (p=0.01) for ACM+first-CV-hosp at month 30; acoramidis ≥90% TTR stabilization confirmed · model: human ATTR-CM subgroups · PMID 41205147 · archive: not checked · **abstract-level extraction 2026-05-09**

[^facin2025]: doi:10.36660/abc.20240830 · Facin LC, Romeiro IPF, Sapahia K, et al. · *Arquivos Brasileiros de Cardiologia* 2025 · n=2526 across 7 RCTs · meta-analysis · TTR stabilizers: RR 0.71 mortality (p=0.0006), RR 0.81 hospitalizations (p<0.0001); TTR silencers: no significant mortality benefit · model: human ATTR-CM/hATTR trials · PMID 41059800 · **abstract-level extraction 2026-05-09**

[^briasoulis2026]: doi:10.1016/j.cpcardiol.2026.103265 · Briasoulis A, Georgiopoulos G, et al. · *Current Problems in Cardiology* 2026 · systematic-review + network meta-analysis · patisiran/tafamidis/vutrisiran showed numerically greater GLS improvement vs placebo than acoramidis; extracellular volume not significantly changed across agents · PMID 41554387 · **abstract-level extraction 2026-05-09**
