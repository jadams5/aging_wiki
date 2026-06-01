---
type: compound
aliases: [CoQ10, ubiquinone, ubiquinol, coenzyme Q10, ubidecarenone, Q10]
pubchem-cid: 5281915
chembl-id: CHEMBL454801
drugbank-id: DB09270
biologic: false
molecular-formula: C59H90O4
molecular-weight-da: 863.3
mechanisms: [mitochondrial-bioenergetics, antioxidant]
targets: ["[[electron-transport-chain]]", "[[mevalonate-pathway]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[loss-of-proteostasis]]"]
clinical-stage: supplement
human-evidence-level: limited
translation-gap: biomarker-only
next-experiment: "Double-blind RCT in confirmed statin-myopathy patients with muscle CoQ10 biopsy as primary endpoint and validated CPAX/TSMQ patient-reported myopathy score as secondary; n>=150; resolves whether plasma-level restoration translates to symptom benefit."
clinical-trials-active: null
literature-checked-through: 2026-05-06   # R25; recency search via PubMed eutils 2026-05-06 surfaced Wei 2022, Dohlmann 2022, Kovacic 2025, Ahmad 2024, Raizner 2021, Alehagen 2025 — all integrated. Refresh due 2027-05-06 per CLAUDE.md compound 12-month cadence.
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Pass 1 (2026-05-06): Canonical-DB identity fields confirmed via API (PubChem CID 5281915, ChEMBL CHEMBL454801; DrugBank DB09270 unconfirmable per 403). Taylor 2015 verified via PMC full text. Banach 2014 Mayo, Banach 2015 Pharm Res, Mortensen 2014 Q-SYMBIO, Kalén 1989 verified at abstract level only. Pass 2 (2026-05-06): Dohlmann 2022 verified via PMC full text (PMC9495827); Kovacic 2025 verified via PMC full text (PMC12554813); Ahmad 2024 verified via PMC full text (PMC11441719); Alehagen 2025 verified via PMC full text (PMC12190002). Wei 2022 and Raizner 2021 verified at abstract level only (both closed-access). Corrections made in pass 2: Ahmad screened-records count corrected (5,000 → 5,461 identified / 2,665 screened); Alehagen mean age corrected (~78 → ~77); Kovacic article number corrected (e34 → e72); Kovacic exact p-value added (p=0.043); Dohlmann correlation p-value corrected (p=0.948 → p=0.946); Alehagen IHD subgroup nuanced (male IHD result p=0.06, nominally non-significant); Alehagen footnote expanded with full mortality numbers."
---

# Coenzyme Q10 (CoQ10)

An endogenous lipid-soluble cofactor synthesized in all human cells via the [[mevalonate-pathway]]. Best known as a mobile electron carrier in the [[electron-transport-chain]] of the inner mitochondrial membrane and as a fat-soluble antioxidant. Widely sold as a supplement; plasma levels decline with age and are further suppressed by statin drugs. **Well-powered clinical evidence is mostly null for the most common indication (statin-associated muscle symptoms); a recent meta-analysis is marginally positive but with confidence interval hugging zero.** Two independent trial cohorts (Q-SYMBIO; KiSel-10) suggest cardiovascular mortality benefit but neither has been independently replicated.

## Identity and chemistry

- **PubChem CID:** 5281915 (ubiquinone-10)
- **ChEMBL ID:** CHEMBL454801 (preferred name: ubidecarenone; max development phase 3; ATC C01EB09)
- **DrugBank ID:** DB09270
- **InChIKey:** ACTIUHUUMQJHFO-UPTCCGCDSA-N
- **Molecular formula:** C₅₉H₉₀O₄
- **Molecular weight:** 863.3 Da
- **Class:** 1,4-benzoquinone with a polyisoprenoid side chain (10 isoprene units in the human form; hence "Q10")
- **LogP (XLogP3):** ~19.4 — extremely lipophilic; essentially insoluble in water

The compound exists in two interconvertible redox states: **ubiquinone** (oxidized; the electron acceptor form, accepts 2e⁻ + 2H⁺) and **ubiquinol** (reduced; QH₂, the electron donor form and the predominant antioxidant form in membranes). In the ETC, the molecule shuttles continuously between these states. In the blood, ~95% circulates as ubiquinol at steady state, largely associated with LDL particles.

The 10-isoprene side chain anchors CoQ10 in the inner mitochondrial membrane lipid bilayer. The benzoquinone head group alternates between facing Complex I/II (where it accepts electrons) and facing Complex III (where it donates them).

## Endogenous role

### Mevalonate pathway origin

CoQ10 is synthesized via the mevalonate pathway, sharing the upstream steps — including the HMG-CoA reductase (HMGCR) step — with cholesterol biosynthesis. After farnesyl pyrophosphate, the pathway bifurcates: cholesterol synthesis proceeds via squalene synthase, while the decaprenyl tail of CoQ10 is built by PDSS1/PDSS2 and then attached to the ring structure assembled by COQ2–COQ9. **This shared upstream dependency with cholesterol is the biochemical basis for statin-mediated CoQ10 depletion** (see below).

### Electron transport chain carrier

CoQ10 is the mobile electron shuttle between the NADH dehydrogenase complex ([[electron-transport-chain]] Complex I), succinate dehydrogenase (Complex II), and the bc1 complex (Complex III). It accepts electrons from both Complex I and Complex II and delivers them to Complex III, enabling continuation of the respiratory chain and proton pumping for ATP synthesis. Without adequate CoQ10, electron flow through the ETC is rate-limited; under extreme deficiency, the chain stalls and reactive oxygen species (ROS) accumulate at Complex I.

### Membrane antioxidant

Ubiquinol (QH₂) is a potent lipid-soluble antioxidant and the only endogenously synthesized lipophilic antioxidant in cell membranes. It scavenges lipid peroxyl radicals, regenerates membrane-bound vitamin E (tocopherol) from its radical form, and inhibits lipid peroxidation chain reactions. This function is independent of ETC participation and occurs in all cellular membranes — not only mitochondria.

## Age-related decline

CoQ10 concentrations in human tissues peak early in adulthood and then decline progressively. In the canonical demonstration, Kalén et al. measured ubiquinone content across the lifespan in multiple human organs (infant to age 81) and rat tissues: ubiquinone peaked at ~20 years in most human organs, then declined continuously [^kalen1989]. Tissues measured were lung, heart, spleen, liver, kidney, pancreas, and adrenal. Specific percentage declines and skeletal muscle data are reported in the full paper (not accessible at abstract level — full text closed-access). #gap/needs-human-replication — quantitative decline values below sourced from the paper's data but not independently confirmed at abstract level.

| Tissue | Peak age (approx.) | Decline by ~80 yr |
|---|---|---|
| Heart | ~20 yr | ~50% (Kalén data; full text not accessed) |
| Skeletal muscle | ~20 yr | ~50% (not in abstract tissue list — verify against full text) |
| Pancreas | ~1 yr | substantial |
| Adrenal | ~1 yr | substantial |

The *decline* in tissue CoQ10 with aging is well-established. Whether oral supplementation restores tissue (not just plasma) levels is a distinct and much weaker claim — see Bioavailability section.

Whether the age-associated decline is a *cause* of mitochondrial dysfunction or simply a *consequence* of reduced mitochondrial mass and ETC enzyme activity with aging remains unresolved. #gap/contradictory-evidence #gap/no-mechanism

[^kalen1989]: Kalén A, Appelkvist EL, Dallner G · "Age-related changes in the lipid compositions of rat and human tissues" · *Lipids* 1989;24(7):579–584 · doi:10.1007/BF02535072 · PMID:2779364 · observational · human organs n=infant–81 yr range · tissues measured: lung, heart, spleen, liver, kidney, pancreas, adrenal (+ rat tissues) · ubiquinone peaked at 20 yr in most organs then declined; peak at 1 yr for pancreas/adrenal · specific percentage declines and skeletal muscle data not confirmed from abstract; full text not accessed (closed-access)

## Statin–CoQ10 interaction

### Biochemical claim: statins reduce circulating CoQ10 (well-supported)

Statins inhibit HMGCR, suppressing the mevalonate pathway and thereby reducing both cholesterol and CoQ10 biosynthesis. This is not in dispute mechanistically. Meta-analytic evidence confirms it in plasma: a systematic review and meta-analysis of 8 placebo-controlled treatment arms found statins significantly reduced plasma CoQ10 concentrations (weighted mean difference −0.44 μmol/L, 95% CI −0.52 to −0.37, p<0.001) [^banach2015pharmres]. Subgroup analyses found significant reductions with each statin type studied (atorvastatin, simvastatin, rosuvastatin, pravastatin) with broadly similar effect sizes (WMD range −0.41 to −0.49 μmol/L). There was no significant differential effect between lipophilic and hydrophilic statins.

**Important caveat:** Plasma CoQ10 is largely carried by LDL particles. Statins lower LDL, so some of the plasma CoQ10 reduction may simply reflect fewer LDL carriers rather than reduced total-body CoQ10. Muscle biopsy studies show inconsistent results on whether tissue (as opposed to plasma) CoQ10 is actually depleted by statins — this distinction matters enormously for the myopathy hypothesis.

[^banach2015pharmres]: Banach M et al. · "Statin therapy and plasma coenzyme Q10 concentrations — A systematic review and meta-analysis of placebo-controlled trials" · *Pharmacological Research* 2015;99:329–336 · doi:10.1016/j.phrs.2015.07.008 · PMID:26192349 · meta-analysis · 8 placebo-controlled treatment arms · WMD −0.44 μmol/L (95% CI −0.52 to −0.37, p<0.001) reduction in plasma CoQ10 · no differential effect between lipophilic and hydrophilic statins · abstract verified via PubMed PMID:26192349; full text not accessed (closed-access)

### Clinical claim: does CoQ10 supplementation reduce statin-associated muscle symptoms?

The well-powered evidence is mostly null. A recent meta-analysis is marginally positive but with a confidence interval that hugs zero. A 2021 *JACC* focus seminar reads the field as supportive of CoQ10 for SAMS, but that synthesis was published before a key Banach 2014 effect-size correction (see footnote and Limitations) and may not survive a re-read with current numerics.

| Study | Year / journal | Design | n | Result |
|---|---|---|---|---|
| Banach et al. [^banach2014mayo] | 2014 *Mayo Clin Proc* | Meta-analysis (6 RCTs) | 302 | **Null** — pain SMD −0.53 (95% CI −1.33 to 0.28, p=0.20); CK no change |
| Taylor et al. [^taylor2015] | 2015 *Atherosclerosis* | RCT in confirmed simvastatin-myalgia | 41 | **Null** — BPI-SF pain severity p=0.53, interference p=0.56 |
| Wei et al. [^wei2022] | 2022 *Ir J Med Sci* | Meta-analysis (8 RCTs) | 472 | **Null** — pain SMD −0.59 (95% CI −1.54 to 0.36, p=0.22); CK p=0.84 |
| Dohlmann et al. [^dohlmann2022] | 2022 *Antioxidants* | Mechanistic RCT in simvastatin patients ± myalgia | 37 | **Null** — *muscle* CoQ10 unchanged by 400 mg × 8 wk; mitochondrial respiratory capacity unchanged; myalgia unchanged |
| Kovacic et al. [^kovacic2025] | 2025 *J Nutr Sci* | Meta-analysis (7 RCTs) | 389 | **Marginally positive but fragile** — pain WMD −0.96 (95% CI −1.88 to −0.03, p=0.043); 4/7 individual trials positive, 3/7 null; **I²=93.3% (extreme heterogeneity)**; per the paper's own sensitivity analysis, removing any one of 4 individual studies (Dohlmann, Derosa, Tóth, Skarlovnik) pushes the result to p>0.05 |
| Ahmad et al. [^ahmad2024] | 2024 *Cureus* | Narrative systematic review (1 meta + 4 RCTs) | 800 | **Narratively positive**; *Cureus* is low-tier (no quantitative pooling) — weight accordingly |

**Mechanistic load-bearing study — Dohlmann 2022.** This is the most informative single study because it measured muscle CoQ10 directly via biopsy and assessed mitochondrial respiratory capacity, mitochondrial content (citrate synthase), and ROS production before and after supplementation. Result: 400 mg/day CoQ10 × 8 weeks did **not** raise muscle CoQ10 or improve mitochondrial function in simvastatin-treated patients. This directly tests the mechanistic premise of the supplementation hypothesis (oral → tissue → mitochondrial restoration → symptom relief) and the chain breaks at the first step.

**Cardiology field-position read.** Raizner & Quiñones' 2021 *JACC* focus seminar concluded "the weight of evidence as reflected in meta-analyses supports the use of exogenous CoQ10 in SAMS" [^raizner2021]. Important caveat: this synthesis predates Wei 2022, Dohlmann 2022, and Kovacic 2025; and it likely cites Banach 2014 according to its originally-published numbers (which the *Mayo Clin Proc* abstract correctly reports as null, p=0.20 — but a casual reading could mistake the SMD −0.53 point estimate for a positive result). Treat the JACC seminar's conclusion as a 2021-vintage field-position summary, not a current synthesis.

**Guideline position:** The ACC/AHA Task Force on Statin Safety (2014) and subsequent updates do **not endorse** CoQ10 supplementation for prevention or treatment of statin-associated muscle symptoms, citing insufficient evidence.

**Bottom line for the statin-trial context:** Biochemical rationale is solid (statins reduce mevalonate-pathway CoQ10 synthesis; plasma CoQ10 falls). Clinical translation is mostly absent: 4 of 5 quantitative analyses (Banach 2014, Taylor 2015, Wei 2022, Dohlmann 2022) are null, including the only RCT that directly measured muscle-tissue CoQ10. Kovacic 2025's positive pooled estimate is fragile — I²=93.3% extreme heterogeneity, and removing any of 4 individual studies (per the paper's own sensitivity analysis) collapses statistical significance. Whether CoQ10 supplementation *before* statin initiation prevents muscle symptoms (rather than treating them after onset) remains untested.

[^banach2014mayo]: Banach M et al. · "Effects of coenzyme Q10 on statin-induced myopathy: a meta-analysis of randomized controlled trials" · *Mayo Clinic Proceedings* 2015;90(1):24–34 · doi:10.1016/j.mayocp.2014.08.021 · PMID:25440725 · meta-analysis · n=302 across 6 RCTs (5 studies with 253 participants in pain analysis) · SMD −0.53 (95% CI −1.33 to 0.28, p=0.20) for muscle pain — non-significant · plasma CK: no significant change (MD 11.69 U/L, 95% CI −14.25 to 37.63, p=0.38) · conclusion: no significant benefit · full text not accessed (closed-access); abstract verified via PubMed PMID:25440725

[^taylor2015]: Taylor BA et al. · "A randomized trial of coenzyme Q10 in patients with confirmed Statin Myopathy" · *Atherosclerosis* 2015;238(2):329–335 · doi:10.1016/j.atherosclerosis.2014.12.016 · PMID:25545331 · PMC4298455 · randomized double-blind crossover · n=41 confirmed statin-myalgia patients (120 screened; 41 confirmed via placebo-controlled simvastatin challenge) · simvastatin 20 mg/day + CoQ10 600 mg/day (ubiquinol) vs placebo × 8 wk · primary endpoint: BPI-SF pain severity (p=0.53) and interference (p=0.56) — no significant difference · serum CoQ10 rose 1.3→5.2 mcg/mL with supplementation (p<0.05); no muscle biopsy performed · verified via PMC full text

## Bioavailability

Oral CoQ10 has poor and highly variable absorption — a critical caveat because plasma level rises do not prove tissue (especially muscle or brain) restoration.

Key pharmacokinetic facts:
- **Absorption:** CoQ10 is absorbed in the small intestine via the same lymphatic route as other fat-soluble vitamins. Absorption is enhanced significantly when taken with dietary fat. Bioavailability of crystalline ubiquinone is typically <5% in fasted state; formulation matters substantially (soft-gel, emulsified, nanoemulsion forms increase absorption 2–4x).
- **Ubiquinol vs. ubiquinone:** Ubiquinol (the reduced form) is claimed to have higher oral bioavailability based on plasma-level pharmacokinetics studies. The magnitude of the advantage is contested and formulation-dependent; most studies show 1.5–2x higher peak plasma levels with ubiquinol formulations at equivalent doses.
- **Tissue penetration:** Even after doses that substantially raise serum CoQ10, intramuscular CoQ10 restoration has not been confirmed. Taylor 2015 [^taylor2015] did not perform muscle biopsy (the authors acknowledged this limitation); other biopsy studies exist in the literature but are not the primary source cited here. CNS penetration appears negligible at oral doses. #gap/dose-response-unclear — muscle CoQ10 tissue levels after oral supplementation are insufficiently characterized.
- **LDL carrier dependency:** Most circulating CoQ10 is associated with LDL. Plasma CoQ10 should be interpreted relative to LDL-cholesterol, not as an absolute value.

The gap between "plasma CoQ10 rises after supplementation" and "tissue CoQ10 is restored" is the fundamental translational weakness of CoQ10 supplementation. #gap/dose-response-unclear — what oral dose, in what formulation, with what fat intake, durably raises *muscle* or *brain* CoQ10 above the pre-depletion baseline?

## Other aging-relevant evidence

### Heart failure and cardiovascular mortality

Two independent randomized trial streams — Q-SYMBIO (CoQ10 monotherapy in chronic HF) and KiSel-10 (selenium + CoQ10 combination in elderly with low selenium) — both report cardiovascular mortality benefit. They sample different populations and use different intervention designs; together they constitute the strongest cardiovascular signal for CoQ10, though neither has been independently replicated by a separately-run confirmatory trial.

#### Q-SYMBIO (CoQ10 monotherapy in chronic HF)

The Q-SYMBIO trial (Mortensen et al.) randomized 420 patients with moderate-to-severe chronic heart failure to CoQ10 300 mg/day (as 100 mg three times daily) or placebo for 2 years [^mortensen2014]. The primary short-term endpoints at 16 weeks — changes in NYHA functional classification, 6-minute walk test, and NTproBNP levels — were all non-significant. The primary long-term endpoint at 2 years (composite major adverse cardiovascular events, time-to-first-event) was reached by 15% of CoQ10 patients vs 26% of placebo patients (HR 0.50, 95% CI 0.32–0.80, p=0.003). Secondary outcomes were also significantly improved: cardiovascular mortality (9% vs 16%, p=0.026), all-cause mortality (10% vs 18%, p=0.018), and hospital stays for HF (p=0.033). This result generated considerable interest but is a single multicenter trial. #gap/needs-replication — no large confirmatory RCT of CoQ10 monotherapy in HF has been completed as of 2026.

#### KiSel-10 (selenium + CoQ10 combination in elderly)

KiSel-10 randomized 443 elderly Swedish participants (mean age ~77, both sexes, low baseline selenium status — Sweden has selenium-poor soil) to combined supplementation (selenium 200 µg + CoQ10 200 mg/day) or placebo for 4 years, followed by 6+ years of post-intervention observation. The original 2013 publication and multiple long-term follow-ups have reported persistent cardiovascular mortality reduction in the combined-supplement arm. The most recent analysis (Alehagen 2025) added a sex-stratified analysis: 10-year CV mortality was lower in females overall (11.3% vs 33.0% active vs placebo, p=0.0001), and supplementation reduced this risk to a greater extent in females than in males (Cox HR 0.29 vs 0.61) [^alehagen2025]. In subjects without ischemic heart disease at enrollment, the supplementation effect was more pronounced in females (4.7% vs 28.7%, p<0.0001) than in males (23.7% vs 40.0%, p=0.03); in subjects with established IHD, the authors report approximately 50% reduction in CV deaths in both sexes (female p=0.02, male p=0.06), though the male IHD result was nominally non-significant.

**Interpretation caveats:**
- The KiSel-10 intervention is a **combination** of selenium and CoQ10. Without a factorial design (selenium-only and CoQ10-only arms), the contribution of CoQ10 versus selenium cannot be separated. Selenium-only trials in the same population have shown independent benefit, suggesting both components may contribute.
- The cohort had **low baseline selenium status**. Effects in selenium-replete populations (e.g., the United States, where selenium intake is generally adequate) cannot be assumed to transfer.
- Like Q-SYMBIO, KiSel-10 is a single trial cohort with multiple follow-up papers; it has not been independently replicated.

#gap/needs-human-replication — KiSel-10 effects depend on a single Swedish low-selenium cohort; replication in selenium-replete populations and with single-component arms is needed to attribute the benefit to CoQ10 specifically.

### Migraine prophylaxis

CoQ10 (300–400 mg/day) has been studied for migraine prevention with modest evidence; not aging-relevant and not developed further here. One line for completeness.

## Hallmark connections

| Hallmark | Mechanism | Evidence strength |
|---|---|---|
| [[mitochondrial-dysfunction]] | Age-related CoQ10 decline may worsen ETC efficiency; ETC is primary site of ROS generation in mitochondria | Correlational — tissue decline documented [^kalen1989]; causality unproven |
| [[loss-of-proteostasis]] | Membrane lipid peroxidation damages mitochondrial and ER membranes; ubiquinol limits chain reaction | Mechanistic; no direct human evidence linking CoQ10 levels to proteostasis phenotypes #gap/no-mechanism |

## Limitations and gaps

- **Plasma ≠ tissue.** All clinically reported CoQ10 levels and statin-depletion data are plasma measurements. Muscle and brain biopsy data are sparse and inconsistent.
- **Formulation heterogeneity.** Clinical trials use variable formulations, doses (100–1200 mg/day), and co-administration conditions. Trial pooling in meta-analyses aggregates this heterogeneity.
- **Primary vs. secondary CoQ10 deficiency.** Inherited CoQ10 biosynthesis enzyme mutations (e.g., COQ8A, PDSS2) cause severe multi-system disease at the tissue level — these primary deficiencies respond to supplementation. Statin-induced depletion is secondary and may not produce equivalent tissue deficiency; conflating the two is a common error in supplement marketing.
- **Confounding in aging studies.** Tissue CoQ10 decline with age co-occurs with declining mitochondrial biogenesis, declining cell number in high-demand tissues, and multiple hormonal changes. The decline may be epiphenomenal rather than causal.
- **ACC/AHA non-endorsement.** Current cardiovascular guidelines do not recommend CoQ10 supplementation for any cardiac indication except as investigational in heart failure.

#gap/dose-response-unclear — optimal dose and formulation for tissue-level restoration unknown; Dohlmann 2022 directly shows that 400 mg/day × 8 wk does not raise muscle CoQ10
#gap/contradictory-evidence — statin myopathy: 4 of 5 quantitative analyses (Banach 2014, Taylor 2015, Wei 2022, Dohlmann 2022) null; Kovacic 2025 marginally positive (CI hugs zero); JACC focus seminar (Raizner 2021) reads field as supportive but predates Wei/Dohlmann/Kovacic
#gap/needs-human-replication — Q-SYMBIO and KiSel-10 cardiovascular benefits each depend on a single trial cohort; KiSel-10's combination design also conflates selenium and CoQ10 contributions
#gap/no-mechanism — KiSel-10 sex-difference effect (greater female benefit) lacks a mechanistic explanation

## Cross-references

- [[mitochondrial-dysfunction]] — the hallmark most directly linked
- [[loss-of-proteostasis]] — secondary via membrane oxidative damage
- [[electron-transport-chain]] — primary functional role (stub — page does not yet exist)
- [[mevalonate-pathway]] — biosynthesis pathway; CoQ10 ubiquinone is the FPP-derived non-sterol isoprenoid branch product depleted alongside cholesterol when statins inhibit HMGCR (the mechanistic basis for the CoQ10-statin-myopathy hypothesis, mostly null in clinical trials)
- [[mtor]] — upstream regulator of mitochondrial biogenesis; indirect link
- [[ampk]] — activates PGC-1α, driving CoQ10 synthesis via increased mitochondrial biogenesis

## Footnotes

[^kalen1989]: Kalén A, Appelkvist EL, Dallner G · "Age-related changes in the lipid compositions of rat and human tissues" · *Lipids* 1989;24(7):579–584 · doi:10.1007/BF02535072 · PMID:2779364 · observational · human organs n=infant–81 yr range · tissues measured: lung, heart, spleen, liver, kidney, pancreas, adrenal (+ rat tissues) · ubiquinone peaked at 20 yr in most organs then declined; peak at 1 yr for pancreas/adrenal · specific percentage declines and skeletal muscle data not confirmed from abstract; full text not accessed (closed-access)

[^banach2015pharmres]: Banach M et al. · "Statin therapy and plasma coenzyme Q10 concentrations — A systematic review and meta-analysis of placebo-controlled trials" · *Pharmacological Research* 2015;99:329–336 · doi:10.1016/j.phrs.2015.07.008 · PMID:26192349 · meta-analysis · 8 placebo-controlled treatment arms · WMD −0.44 μmol/L (95% CI −0.52 to −0.37, p<0.001) reduction in plasma CoQ10 · no differential effect between lipophilic and hydrophilic statins · abstract verified via PubMed PMID:26192349; full text not accessed (closed-access)

[^banach2014mayo]: Banach M et al. · "Effects of coenzyme Q10 on statin-induced myopathy: a meta-analysis of randomized controlled trials" · *Mayo Clinic Proceedings* 2015;90(1):24–34 · doi:10.1016/j.mayocp.2014.08.021 · PMID:25440725 · meta-analysis · n=302 across 6 RCTs (5 studies with 253 participants in pain analysis) · SMD −0.53 (95% CI −1.33 to 0.28, p=0.20) for muscle pain — non-significant · plasma CK: no significant change (MD 11.69 U/L, 95% CI −14.25 to 37.63, p=0.38) · conclusion: no significant benefit · full text not accessed (closed-access); abstract verified via PubMed PMID:25440725

[^taylor2015]: Taylor BA et al. · "A randomized trial of coenzyme Q10 in patients with confirmed Statin Myopathy" · *Atherosclerosis* 2015;238(2):329–335 · doi:10.1016/j.atherosclerosis.2014.12.016 · PMID:25545331 · PMC4298455 · randomized double-blind crossover · n=41 confirmed statin-myalgia patients (120 screened; 41 confirmed via placebo-controlled simvastatin challenge) · simvastatin 20 mg/day + CoQ10 600 mg/day (ubiquinol) vs placebo × 8 wk · primary endpoint: BPI-SF pain severity (p=0.53) and interference (p=0.56) — no significant difference · serum CoQ10 rose 1.3→5.2 mcg/mL with supplementation (p<0.05); no muscle biopsy performed · verified via PMC full text

[^mortensen2014]: Mortensen SA et al. · "The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO" · *JACC Heart Failure* 2014;2(6):641–649 · doi:10.1016/j.jchf.2014.06.008 · PMID:25282031 · randomized double-blind · n=420 · CoQ10 100 mg 3× daily (300 mg/day total) × 2 yr vs placebo · primary short-term endpoints at 16 wk (NYHA class, 6-min walk, NTproBNP): all non-significant · primary long-term endpoint at 2 yr (composite MACE): 15% vs 26%, HR 0.50 (95% CI 0.32–0.80), p=0.003 · all-cause mortality: 10% vs 18%, p=0.018 · abstract verified via PubMed PMID:25282031; full text not accessed (closed-access)

[^wei2022]: Wei H, Xin X, Zhang J · "Effects of coenzyme Q10 supplementation on statin-induced myopathy: a meta-analysis of randomized controlled trials" · *Irish Journal of Medical Science* 2022;191(2):719–725 · doi:10.1007/s11845-021-02651-x · PMID:33999383 · meta-analysis · 8 RCTs total (6 for CK n=281; 4 for muscle pain n=220); n=472 statin-treated overall · CK: MD 3.29 U/L (95% CI −29.58 to 36.17), p=0.84 · pain: SMD −0.59 (95% CI −1.54 to 0.36), p=0.22 · conclusion: no significant benefit · abstract-level verification only (closed-access)

[^dohlmann2022]: Dohlmann TL, Kuhlman AB, Morville T et al. · "Coenzyme Q10 Supplementation in Statin Treated Patients: A Double-Blinded Randomized Placebo-Controlled Trial" · *Antioxidants (Basel)* 2022;11(9):1698 · doi:10.3390/antiox11091698 · PMID:36139772 · randomized double-blind placebo-controlled · n=37 simvastatin-treated patients (with and without myalgia) · CoQ10 400 mg/day × 8 wk · primary measures: muscle CoQ10 content (biopsy), mitochondrial respiratory capacity, citrate synthase activity, ROS production, myalgia VAS · result: muscle CoQ10 unchanged (individual ΔCoQ10 vs ΔVAS: r=0.0136, p=0.946), mitochondrial function unchanged (all complexes; CS activity: CoQ10 131±8 → 137±8 vs placebo 126±11 → 127±11 µmol·g⁻¹·min⁻¹), ROS production unchanged, myalgia VAS unchanged · analysed n=18 CoQ10 (11 with myalgia) and 17 placebo (8 with myalgia) after 1 dropout per arm · conclusion: no effect on muscle CoQ10, mitochondrial function, or myalgia symptoms · verified via PMC full text (PMC9495827)

[^kovacic2025]: Kovacic S, Habicht SD, Eckert GP · "Effects of coenzyme Q10 supplementation on myopathy in statin-treated patients: a systematic review and meta-analysis" · *Journal of Nutritional Science* 2025;14:e72 · doi:10.1017/jns.2025.10043 · PMID:41158831 · meta-analysis (random-effects model) · 7 RCTs (35–76 patients each, 30–90 day duration, CoQ10 100–600 mg/day); n=389 total (202 intervention, 187 control) · pain: WMD −0.96 (95% CI −1.88 to −0.03), p=0.043 · 4 of 7 individual trials positive, 3 of 7 null · significant heterogeneity: I²=93.3%, p<0.001 · subgroup analysis: benefit only significant in studies with low (<5) baseline pain score · *J Nutr Sci* (Cambridge) open-access · verified via PMC full text (PMC12554813)

[^ahmad2024]: Ahmad K, Manongi NJ, Rajapandian R et al. · "Effectiveness of Coenzyme Q10 Supplementation in Statin-Induced Myopathy: A Systematic Review" · *Cureus* 2024;16(8):e68316 · doi:10.7759/cureus.68316 · PMID:39350827 · narrative systematic review (PRISMA 2020); 5,461 records identified → 2,665 screened → 5 selected (1 meta-analysis + 4 RCTs); n=800 total across studies · narrative conclusion: all included RCTs showed improvement with CoQ10 · *Cureus* is open-access (low-tier journal; no quantitative pooling performed) · verified via PMC full text (PMC11441719)

[^raizner2021]: Raizner AE, Quiñones MA · "Coenzyme Q10 for Patients With Cardiovascular Disease: JACC Focus Seminar" · *Journal of the American College of Cardiology* 2021;77(5):609–619 · doi:10.1016/j.jacc.2020.12.009 · PMID:33538259 · published 9 February 2021 · narrative review / focus seminar · positions: "the weight of evidence as reflected in meta-analyses supports the use of exogenous CoQ10 in SAMS"; Q-SYMBIO suggests adjunctive role in HF; large-scale RCTs lacking; hypothesizes "statin-related CoQ10 deficiency may play a role in patients with diastolic HF" (framed as hypothesis warranting further exploration) · abstract-level verification via PubMed PMID:33538259 (closed-access; full text not accessed) · important caveat: predates Wei 2022, Dohlmann 2022, and Kovacic 2025

[^alehagen2025]: Alehagen U, Aaseth JO, Schomburg L et al. · "Selenium and Coenzyme Q10 Supplementation and Sex Differences in Cardiovascular Mortality" · *Antioxidants (Basel)* 2025;14(6):685 · doi:10.3390/antiox14060685 · PMID:40563319 · sex-stratified sub-analysis of KiSel-10 RCT cohort (n=443; mean age 77.0–77.3, balanced sex: 221 active / 222 placebo, ~106–115 per sex per arm; low baseline selenium ~67 µg/L) · selenium 200 µg + CoQ10 200 mg/day × 4 yr + 6 yr passive follow-up (10 yr total) · 10-year CV mortality: females — 11.3% (active) vs 33.0% (placebo), Chi2 14.74, p=0.0001; males — 29.6% (active) vs 44.5% (placebo), Chi2 5.42, p=0.02 · Cox HR: females 0.29, males 0.61 (greater female benefit overall) · in non-IHD subjects: female benefit pronounced (4.7% vs 28.7%, p<0.0001); male benefit smaller (23.7% vs 40.0%, p=0.03) · in subjects with established IHD: ~50% reduction in CV deaths in both sexes (female p=0.02, male p=0.06) · intervention is combination (selenium + CoQ10); CoQ10 contribution cannot be isolated · verified via PMC full text (PMC12190002)
