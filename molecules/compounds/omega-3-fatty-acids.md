---
type: compound
aliases: [omega-3s, n-3 fatty acids, omega-3 polyunsaturated fatty acids, n-3 PUFAs, fish oil fatty acids, EPA and DHA]
pubchem-cid: 446284
pubchem-cid-alt: 445580
inchikey: "EPA: JAZBEHYOTPTENJ-JLNKQSITSA-N; DHA: MBMBGCFOFBJSGT-KUBAVDMBSA-N"
chembl-id: CHEMBL460026
drugbank-id: null
administration-route: oral
biologic: false
molecular-formula: "EPA: C20H30O2; DHA: C22H32O2"
molecular-weight-da: "EPA: 302.5; DHA: 328.5"
mechanisms: [lipid-modulation, anti-inflammatory, immunomodulation]
targets: []
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
clinical-stage: supplement
human-evidence-level: strong
translation-gap: biomarker-only
next-experiment: "A multi-year placebo-controlled trial in adults aged 70+ stratified by baseline EPA+DHA status, testing a chemically characterized EPA+DHA formulation with prespecified replicated DNAm-aging measures plus frailty, disability-free survival, cardiovascular events, atrial fibrillation, and mortality."
clinical-trials-active: 136
literature-checked-through: 2026-08-10
verified: true
verified-date: 2026-08-10
verified-by: claude
verified-scope: "DO-HEALTH clock identities, methods, numerics, and limitations verified against open primary full text; Flock omega-3-index and Jackowski oxidation claims verified against open primary full text. Dyerberg 2010, Lawson 1988, Lopez-Toledano 2017, and several legacy outcome/safety/formulation claims were checked against primary PubMed abstracts or authoritative metadata rather than full text; remaining scope and canonical identity checks carried forward from the prior 2026-08-04 verifier pass. Family-stage and aging translation fields were independently adjudicated. **Skeletal-muscle section added 2026-08-10:** Gerling 2019 membrane-compartment numerics verified against PMC open full text; Smith 2011 and Smith 2015 verified against PMC open full text on their atomic study pages; Therdyothin 2025 verified against PMC open full text (PMC11723138), which established that its main muscle-protein-synthesis pool used **basal** fractional synthetic rate and that stimulated-state analyses were reported separately — an adversarial Codex review (gpt-5.6-sol) caught the original draft's conflation of these estimands, and the section was rewritten. Huang 2020 was added after the same review flagged that the original 'no effect in any synthesis' mass claim was false. Santo André 2023, Cornish 2022, Tseng 2023, Timraz 2023, and Herbst 2014 extracted from primary PubMed abstracts with Crossref/PubMed-confirmed bibliographic metadata but not full text; Rodacki 2012 is closed-access and abstract-only (#gap/no-fulltext-access). Remaining pooled effect sizes in the clinical-outcomes table should be re-checked against meta-analysis full texts on the next verifier pass."
---

# Omega-3 fatty acids

## TL;DR

“Omega-3” is a nutrient family, not one interchangeable intervention. Whole fish, alpha-linolenic acid (ALA), nutritional-dose mixed eicosapentaenoic acid (EPA) + docosahexaenoic acid (DHA), concentrated mixed formulations, and purified EPA differ in matrix, chemical form, dose, exposure, outcome evidence, and safety. Triglyceride lowering is the most reproducible pharmacologic effect. Cardiovascular outcomes range from neutral to beneficial depending on formulation and population, and pharmacologic dosing increases atrial-fibrillation risk in some high-risk groups.

DO-HEALTH Bio-Age adds randomized evidence that 1 g/day algal EPA+DHA modestly shifted PC-PhenoAge, original GrimAge2, and original DunedinPACE over three years in adults aged 70+, while PC-GrimAge version 1 was null; the post hoc analysis was limited to a Swiss subsample [^dohealth2025]. This is evidence of **surrogate biomarker responsiveness**, not evidence that omega-3 extends lifespan, disability-free survival, or clinical healthspan. The frontmatter therefore separates strong human evidence for established lipid and indication-specific cardiovascular effects from the `biomarker-only` aging translation gap.

Skeletal muscle is the other heavily promoted aging application, and it holds up weakly. The larger recent meta-analyses find **no consistent average effect on muscle or lean mass** (an earlier, smaller one disagreed); the overall strength effect is very small, with moderate but imprecise estimates for lower-body strength, physical function, and doses above ~2 g/day; and the popular "omega-3 stimulates muscle protein synthesis" mechanism is unconfirmed rather than disproved. See § Skeletal muscle, sarcopenia, and the neuromuscular unit.

For an otherwise healthy, nutritionally replete adult, moderate fish consumption—roughly two servings weekly—within a favorable dietary pattern such as the [[interventions/dietary/mediterranean-diet]] has a more defensible net-positive evidence prior than routine fish-oil supplementation: the food evidence is observational, but large general-population supplement trials were neutral [^mohan2021] [^vital2019] [^ascend2018]. This is not proof that fish itself caused benefit. A chemically well-characterized supplement improves confidence in identity, dose, contaminants, and oxidation state; it does not convert neutral formulation- and population-specific outcome evidence into benefit.

## Identity and family limits

This page is anchored to the free-fatty-acid identities of EPA and DHA. It does not assign one pharmacology to all n-3 fatty acids or delivery forms.

| Species | Common name | PubChem CID | ChEMBL | Role on this page |
|---|---|---:|---|---|
| 20:5n-3 | EPA / icosapent | 446284 | CHEMBL460026 | Primary canonical identity; also delivered as icosapent ethyl |
| 22:6n-3 | DHA / doconexent | 445580 | CHEMBL367149 | Secondary canonical identity |
| 18:3n-3 | ALA / alpha-linolenic acid | 5280934 | not assigned here | Essential plant precursor; not dose-equivalent to EPA or DHA |

The family-level `clinical-stage: supplement` reflects the entity represented here: a nutrient family spanning foods and nonprescription products. FDA approvals belong to specific prescription esters and formulations, not to this family, ALA, free-acid database records, algal oils, krill oils, or over-the-counter supplements. Icosapent ethyl, omega-3-acid ethyl esters, and other prescription formulations warrant separate pages because this family page cannot safely encode their product-specific pharmacokinetics, indications, or labeling.

## Human evidence matrix

| Question or exposure | Best-supported human finding | Healthspan interpretation and boundary |
|---|---|---|
| Whole fish | In pooled prospective cohorts, ≥175 g/week was associated with lower cardiovascular events and mortality in people with vascular disease but not in general-population participants without vascular disease [^mohan2021]. | Observational food-pattern evidence includes substitution, nutrient-matrix, and healthy-user effects; it is not a capsule-equivalence result. |
| Nutritional mixed EPA+DHA | VITAL (460 mg EPA + 380 mg DHA/day) and ASCEND (~1 g/day mixed omega-3) were neutral for their primary cardiovascular outcomes [^vital2019] [^ascend2018]. | Raising EPA+DHA exposure at about 1 g/day has not produced broad primary-prevention benefit. This does not test deficiency correction or every disease subgroup. |
| Concentrated mixed EPA+DHA | STRENGTH was neutral at 4 g/day in statin-treated high-risk adults, whereas PISCES found fewer serious cardiovascular events with 4 g/day fish oil in maintenance hemodialysis [^strength2020] [^pisces2025]. | Mixed formulations cannot be assigned one outcome effect; dialysis evidence does not generalize to community-dwelling adults. |
| Purified EPA | REDUCE-IT found fewer cardiovascular events with 4 g/day icosapent ethyl in selected statin-treated adults with elevated triglycerides (17.2% vs 22.0%; HR 0.75, 95% CI 0.68–0.83) [^reduceit2019]. | Strong evidence for a specific drug, dose, and high-risk indication; not proof that EPA, fish oil, or omega-3s generally extend healthspan. |
| Triglyceride lowering | Pharmacologic EPA and DHA reliably lower triglycerides, with magnitude depending on baseline triglycerides, dose, and formulation; purified DHA and EPA both lowered triglycerides in a direct randomized comparison [^mori2000]. | A validated lipid effect, but not a surrogate guaranteed to predict clinical benefit: REDUCE-IT and STRENGTH had divergent outcomes. |
| Inflammation | In 261 healthy adults, 1.4 g/day EPA+DHA for 18 weeks did not lower C-reactive protein or interleukin-6 [^muldoon2016]. | Membrane and oxylipin remodeling are plausible, but “anti-inflammatory” is context- and assay-dependent rather than a general clinical outcome. |
| Skeletal muscle and sarcopenia | Larger recent syntheses find no average effect on muscle or lean mass, though an earlier smaller one found +0.33 kg; a very small pooled strength effect (SMD 0.12, 95% CI 0.006–0.24) with moderate but imprecise lower-body and high-dose estimates [^santoandre2023] [^cornish2022] [^tseng2023] [^huang2020]. Basal muscle protein synthesis does not pool positive; stimulated-state pools are positive in direction but non-significant and wide [^therdyothin2025]. | Detailed below. The "omega-3 stimulates muscle protein synthesis" claim rests on two small 2011 trials whose effect was conditional on amino-acid/insulin stimulation and has not been replicated. |
| Biological-aging biomarkers | In the 777-person Swiss DO-HEALTH Bio-Age subsample, 1 g/day algal omega-3 (330 mg EPA + 660 mg DHA) for three years shifted PC-PhenoAge (factorial marginal d=−0.16, 95% CI −0.30 to −0.02), original GrimAge2 (omega-3-only arm d=−0.32, 95% CI −0.59 to −0.06), and original DunedinPACE (factorial marginal d=−0.17, 95% CI −0.31 to −0.04; authors described about a 1% pace reduction); PC-GrimAge version 1 was null [^dohealth2025]. | Randomized surrogate evidence with clock-version and contrast specificity. The paper's descriptive 2.9–3.8-month conversion is not a direct randomized-effect conversion and should not be read as biological time gained. Replication and linkage to clinical outcomes are required. |
| Clinical healthspan and mortality | Cardiovascular trials establish population- and formulation-specific benefits or null effects, but none establishes longer lifespan or disability-free survival in generally healthy adults [^vital2019] [^reduceit2019] [^dohealth2025]. | Cardiovascular risk reduction for an indicated high-risk population and movement of a methylation clock are not equivalent to geroprotection. |
| Atrial fibrillation and bleeding | A 2026 meta-analysis found increased new atrial fibrillation only in high-risk patients receiving >1.5 g/day (OR 1.43; absolute risk difference 0.8%); a 2024 meta-analysis found no overall bleeding increase, but high-dose purified EPA added a small absolute bleeding risk [^abuknesha2026] [^javaid2024]. | Safety is dose-, formulation-, and baseline-risk-dependent. Ordinary nutritional exposure should not be assigned the risk profile of high-dose prescription therapy. |

## Formulation, dose, and exposure

### Dose the active fatty acids, not the oil mass

“1,000 mg fish oil” describes carrier-oil mass, not necessarily 1,000 mg EPA+DHA. Evidence should report, and product labels should be read for, **milligrams of EPA and DHA separately per daily serving**, capsule count, chemical form, source, and co-ingredients. A trial of 1 g/day total oil cannot be compared with 1 g/day EPA+DHA unless its analyzed composition is known.

ALA intake should remain separate from preformed EPA+DHA. Stable-isotope work confirms human conversion of ALA, but the yield varies with sex, background diet, and metabolic context; one fixed “EPA+DHA equivalent” is not defensible [^vermunt2000].

### Chemical form and meal effects

EPA/DHA can be presented as natural or re-esterified triglycerides, ethyl esters, free fatty acids, phospholipids, or other structured lipids. In a 72-person two-week comparison delivering approximately 3.3 g/day EPA+DHA, serum-lipid incorporation relative to natural fish oil was higher for re-esterified triglycerides (124%), lower for ethyl esters (73%), and not significantly different for free fatty acids (91%) [^dyerberg2010]. These short-term relative-bioavailability values are formulation-specific and do not rank clinical outcomes.

Meal composition especially affects conventional ethyl esters. In an early human absorption study, a high-fat-meal experiment was compared with previously reported low-fat-meal data; EPA and DHA ethyl-ester absorption was about threefold higher, reaching approximately 60% [^lawson1988]. In a later single-dose study, one self-emulsifying ethyl-ester formulation eliminated the measured food effect for DHA but only partly attenuated it for EPA [^lopeztoledano2017]. These product-specific studies do not support a universal “take every omega-3 with fat” rule. Use the tested formulation's instructions and record fed/fasted conditions in pharmacokinetic studies.

### Exposure biomarkers

Plasma EPA/DHA reflects recent intake and lipid transport; erythrocyte EPA+DHA, often reported as an “omega-3 index,” integrates exposure over a longer interval. In a five-month randomized dose-response study of 115 healthy adults, 0–1,800 mg/day EPA+DHA increased erythrocyte EPA+DHA dose-dependently, while body weight, baseline value, age, sex, and physical activity explained additional response variability [^flock2013]. Therefore:

- report baseline and follow-up values from the same validated assay;
- report EPA and DHA separately when formulation effects matter;
- interpret achieved exposure alongside adherence, body size, diet, and duration; and
- do not treat a proposed omega-3-index cutoff as a validated treatment target for healthspan, biological aging, or longevity.

There is no useful single plasma half-life for this family page: acute absorption, lipoprotein transport, metabolism, and membrane incorporation operate on different time scales and vary by chemical form.

## Mechanistic interpretation

At pharmacologic exposure, EPA and DHA change hepatic triglyceride synthesis/export and clearance. They also incorporate into membrane and circulating lipid pools, changing substrate availability for cyclooxygenase, lipoxygenase, and cytochrome-P450 products. In a randomized crossover experiment, ALA-rich and DHA-rich supplements produced distinct time- and sex-dependent plasma oxylipin profiles, and DHA increased some EPA-derived oxylipins [^gabbs2021].

EPA and DHA can supply precursors within the [[pathways/spm-pathway]], but analytical measurement remains difficult and no large outcomes trial has established specialized-pro-resolving-mediator change as the causal bridge to clinical benefit. Likewise, additional double bonds increase chemical peroxidizability, but that susceptibility does not prove that properly characterized omega-3 exposure causes net oxidative injury in humans. Product oxidation before ingestion and endogenous membrane oxidation after incorporation are distinct questions.

## Skeletal muscle, sarcopenia, and the neuromuscular unit

Muscle is this family's most-promoted aging application after cardiovascular risk, and it is where popular mechanistic summaries diverge most sharply from the pooled evidence. The defensible summary is: **recent larger syntheses find no consistent average effect on muscle or lean mass; the overall strength effect is very small, while selected lower-body, physical-function, and high-dose estimates are moderate but heterogeneous or imprecise; and the muscle-protein-synthesis mechanism is unconfirmed rather than disproved.**

A caution about reading this section: the pooled nulls are mostly *failures to detect*, drawn from small, high-risk-of-bias literatures. They constrain how confidently benefit can be claimed; they do not establish that omega-3 does nothing for muscle. Note also that null protein synthesis and real strength gains are not in conflict — strength can improve through neural drive or contractile quality without measurable hypertrophy.

### Anabolic sensitization, not basal stimulation

In a randomized controlled trial, 16 healthy older adults received omega-3 or corn oil for 8 weeks. Omega-3 did **not** change basal postabsorptive muscle protein synthesis (0.051 ± 0.005 %/h to 0.053 ± 0.008 %/h; P = 0.80). It augmented the rise produced by a hyperaminoacidemic–hyperinsulinemic clamp (from 0.009 ± 0.005 to 0.031 ± 0.003 %/h above basal; P < 0.01), with greater p70S6K(Thr389) phosphorylation (P < 0.01); the mTOR(Ser2448) difference did not reach significance (P = 0.08) [^smith2011mps]. An uncontrolled within-subject study in nine healthy 25–45-year-olds reproduced the pattern [^smith2011cs].

What these trials support is **enhancement of the muscle protein synthesis response to combined amino-acid and insulin stimulation** — not an unconditional stimulatory effect. Secondary sources routinely compress this to "omega-3 stimulates muscle protein synthesis," dropping the condition under which it was observed. The distinction is load-bearing for [[phenotypes/sarcopenia]], where one relevant lesion is anabolic resistance rather than a depressed basal synthesis rate.

**The sensitization hypothesis is unconfirmed rather than refuted — and the distinction turns on which estimand was pooled.** A 2025 meta-analysis found no effect on muscle protein synthesis (SMD 0.03; 95% CI −0.35 to 0.40; I² = 30%; P = 0.89; k = 6, N = 188), but its main analysis used **basal** fractional synthetic rate, explicitly selecting the basal value from the one trial reporting both. Basal rates are precisely where the trials above also found nothing, so the headline pooled null does not contradict them. The stimulated-state analyses — the ones that actually test sensitization — were directionally positive but underpowered and imprecise: SMD 0.41 (95% CI −0.16 to 0.98; I² = 0%; P = 0.16; k = 3) with acute exercise stimulation, and SMD 0.52 (95% CI −0.64 to 1.67; I² = 77%; P = 0.28; k = 4) with an anabolic stimulus during measurement. The authors state they did not detect an increase in the stimulated response, while also noting the hypothesis remains open. Whole-body protein synthesis did increase, on three trials (SMD 0.51; 95% CI 0.12–0.90; N = 105) [^therdyothin2025].

The honest reading: **no pooled evidence that omega-3 raises basal muscle protein synthesis, and no confirmed replication of the sensitization effect either — but the stimulated-state pools are too small and too wide to rule it out.** Confidence intervals spanning −0.64 to 1.67 are compatible with meaningful benefit and with harm. The muscle-versus-whole-body dissociation is likewise unexplained. #gap/contradictory-evidence #gap/needs-replication

### Membrane incorporation is compartment-specific

Twelve weeks of 2 g/day EPA + 1 g/day DHA in ten healthy young men (uncontrolled, no placebo) increased total phospholipid content in whole muscle (~56–57%; P < 0.05) and sarcolemma (38%; P = 0.05) but not in mitochondria. **Fatty-acid composition is a separate measure and moved differently:** EPA and DHA content rose roughly threefold in whole muscle and in mitochondria, where the omega-6:omega-3 ratio fell (P < 0.001) and the unsaturation index rose (14%; P < 0.01) — whereas in the sarcolemma only DHA increased, with EPA, the omega-6:omega-3 ratio, and the unsaturation index all unchanged [^gerling2019]. The paper cautions that absolute values cannot be compared directly across fractions, because whole muscle and isolated membranes use different normalization denominators; the compartments can be ranked for *responsiveness*, not for absolute magnitude. A companion study in 18 young men reported mitochondrial EPA up about 450% and DHA about 320%, no change in maximal substrate-supported respiration, improved ADP sensitivity independent of the creatine-kinase shuttle, and increased mitochondrial reactive-oxygen-species emission capacity **without** any rise in the measured oxidative-damage products [^herbst2014].

Two corrections follow for anyone summarizing this work. First, "the mitochondrial membrane does not change" applies **only to total mitochondrial phospholipid abundance**; mitochondrial fatty-acid composition remodeled substantially, while the **sarcolemma was the least responsive** compartment — the authors' own framing. Whole muscle and mitochondria cannot be ranked against each other here (both showed roughly the same 14% unsaturation-index rise, under different denominators). Second, the increased ROS-emission capacity came with no increase in the **measured** oxidative-damage products, which is not the same as excluding all oxidative injury — but it is certainly not evidence *for* omega-3-induced oxidative damage.

Both studies are small, uncontrolled, and in healthy young men. They cannot carry claims about aged muscle, and no study connecting this membrane remodeling to a change in any clinical muscle outcome was identified for this page — the signaling step between membrane composition and protein synthesis is assumed, not demonstrated. #gap/no-mechanism

### Clinical outcomes

| Endpoint | Pooled finding | Boundary |
|---|---|---|
| Muscle or lean mass | No detectable average effect in the larger and more recent syntheses: SMD 0.07 (95% CI −0.02 to 0.17) across 14 studies and 1,443 participants [^santoandre2023]; SMD 0.09 (95% CI −0.10 to 0.28) across 16 studies [^cornish2022]; no regimen increased skeletal muscle mass in a 16-RCT network meta-analysis [^tseng2023]. **But not unanimous:** an earlier, smaller meta-analysis found +0.33 kg (95% CI 0.05–0.62), rising to +0.67 kg (95% CI 0.16–1.18) in the >2 g/day subgroup [^huang2020]. | The recent, larger syntheses dominate, but "no effect" overstates it — this is *no consistent pooled effect*, not a demonstrated absence. Two further dissenting signals: a 6-month RCT reported +3.6% thigh muscle volume (95% CI 0.2–7.0%), with a lower bound near zero and 27% dropout [^smith2015muscle]; and the three trials measuring **knee-extensor** mass specifically all found increases, against null whole-body lean mass [^timraz2023]. A regional effect too small or too localized for whole-body DXA is not excluded. |
| Muscle strength | Very small pooled effect: SMD 0.12 (95% CI 0.006–0.24; P = 0.04), with high risk of bias across included studies and only moderate NutriGrade certainty [^santoandre2023]. Lower-body strength fared better (SMD 0.54, 95% CI 0.33–0.75) than upper-body (null) elsewhere [^cornish2022]; grip strength was not significant (SMD 0.61, 95% CI −0.05 to 1.27) with I² = 90% [^timraz2023]. | A lower bound of 0.006 is effectively zero. Heterogeneity is severe and effects do not replicate across strength measures. |
| Physical function | No pooled effect on muscle function (SMD 0.03; 95% CI −0.09 to 0.15) [^santoandre2023], against improved timed-up-and-go and 30-second sit-to-stand but unchanged walking performance [^cornish2022], and improved lower-extremity function at >2.5 g/day (SMD 0.73; 95% CI 0.16–1.30) [^tseng2023]. | Measure-dependent: chair-rise and timed-up-and-go move while gait speed does not. Whether this is a real lower-body-specific effect or selective reporting across heterogeneous batteries is unresolved. |
| Dose and exercise pairing | No significant dose (<2 versus ≥2 g/day) or resistance-training interaction was **detected** [^santoandre2023] — a non-significant moderator test, not evidence of equivalence, and these subgroups were not well powered. Two other syntheses point the other way: >2.5 g/day gave the largest network estimates [^tseng2023], and >2 g/day doubled the pooled mass effect [^huang2020]. | Genuinely unresolved rather than flatly contradictory — the syntheses differ in population, dose cut-point, outcome definition, and pairwise-versus-network method. #gap/dose-response-unclear |

### The neuromuscular unit

The claim that omega-3 acts on the motor unit rather than the muscle fiber alone traces largely to one trial: 45 women aged about 64 were assigned to strength training alone, or strength training plus 2 g/day fish oil for 90 days, or the same with fish oil started 60 days before training. Peak torque and rate of torque development rose in all arms, more so in the fish-oil arms; muscle activation level and electromechanical delay changed only in the fish-oil arms, and chair-rising performance was better [^rodacki2012]. There was **no placebo capsule** — the comparator received training only — so expectancy and adherence effects are uncontrolled, and n was about 15 per arm.

Electromyographic activation and electromechanical delay are consistent with an effect somewhere in the motor unit, but they cannot localize it to the nerve, the neuromuscular junction, or the fiber's excitation–contraction coupling — nor separate it from an unblinded expectancy effect. No placebo-controlled replication of the activation finding has been identified for this page. #gap/needs-replication

### Bottom line for this page

Omega-3 should not be presented as a mass-building intervention in older adults, and the mechanistic story usually told for it — direct stimulation of muscle protein synthesis — is not what the primary trials showed and has not been replicated. What remains is a very small overall strength effect, with larger but imprecise estimates for lower-body strength, physical function, and higher doses, resting on a literature with high risk of bias. Whether that is clinically meaningful is unresolved, and a dose-responsive effect above roughly 2 g/day is a live hypothesis rather than a settled null. It does not displace [[interventions/lifestyle/exercise|resistance training]] or adequate [[protein-intake|protein intake]], the two interventions with substantially stronger evidence for [[phenotypes/sarcopenia]].

## Nutrient biology and recurring misconceptions

### Essentiality and conversion

Humans cannot synthesize the double-bond positions that define the n-3 and n-6 families de novo; dietary ALA and linoleic acid are essential precursors [^nasem2005]. Human evidence is not limited to historical rodent work: a child receiving long-term ALA-deficient parenteral nutrition developed neurological and biochemical abnormalities that improved after ALA provision [^holman1982]. This case supports essentiality but does not define an optimal population intake.

The US National Academies set an **Adequate Intake**, not an RDA, for ALA: 1.6 g/day for adult men and 1.1 g/day for adult women [^nasem2005]. It did not set a total-omega-3 or EPA+DHA RDA. Humans can synthesize the n-9 triene Mead acid during essential-fatty-acid deficiency; suppression of Mead acid after ALA/linoleic-acid provision is a normal correction of deficiency, not evidence that dietary essential fats disable a needed synthesis pathway [^farrell1988].

### Why the omega-6:omega-3 ratio is insufficient

A ratio erases absolute amounts, molecular species, replacement nutrient, source, and achieved tissue exposure. The same ratio can represent tenfold-different substrate flux, and lowering it by adding EPA/DHA is not equivalent to removing linoleic acid. In OPTILIP, manipulating the dietary n-6:n-3 ratio did not improve insulin sensitivity; lipid changes depended on whether EPA+DHA were actually added [^optilip2006]. Higher circulating linoleic acid was associated with lower total cardiovascular disease and cardiovascular mortality in a pooled analysis of 30 prospective cohorts, contradicting the assumption that a larger omega-6 numerator is intrinsically harmful [^marklund2019]. Report ALA, EPA, DHA, linoleic acid, and arachidonic acid separately where possible. #gap/contradictory-evidence

### What Inuit observations do and do not show

The influential 1979 Greenland Inuit report measured platelet fatty acids and hemostatic function; it did not test tissue oxidation as a cause of bleeding or myocardial infarction [^dyerberg1979]. A later historical review found that the original work had not established unusually low coronary-disease prevalence [^fodor2014]. In the first prospective Inuit cohort, 2,924 Greenlanders followed for a median 9.7 years showed no association between membrane EPA+DHA and incident cardiovascular disease (incidence-rate ratio 0.99 per percentage point; 95% CI 0.95–1.03) [^senftleber2020]. These observations neither prove universal benefit nor oxidation-mediated harm and should not override formulation-specific randomized evidence.

## Safety and monitoring

| Domain | Evidence-informed concern | Practical monitoring boundary |
|---|---|---|
| Atrial fibrillation | Risk rises most consistently with pharmacologic dosing in cardiovascular-risk populations; REDUCE-IT and STRENGTH both recorded excess atrial fibrillation, and the updated meta-analysis localized the significant pooled signal to high-risk patients receiving >1.5 g/day [^reduceit2019] [^strength2020] [^abuknesha2026]. | At high doses, review prior atrial fibrillation and monitor new palpitations, pulse irregularity, or documented arrhythmia; do not extrapolate the high-dose signal to ordinary fish intake. |
| Bleeding | Aggregate randomized evidence does not show more overall, intracranial, or gastrointestinal bleeding, while high-dose purified EPA shows a small absolute increase [^javaid2024]. | Review anticoagulants, antiplatelets, bleeding history, and planned procedures; avoid using platelet biochemistry alone to infer clinical bleeding. |
| Atherogenic lipoproteins | In a six-week trial, 4 g/day DHA increased LDL cholesterol by 8% and LDL particle size by 0.25 nm; EPA did not significantly change either [^mori2000]. | For pharmacologic treatment, assess triglycerides together with LDL-C, non-HDL-C, and, when clinically relevant, ApoB rather than assuming triglyceride lowering improves every lipid measure. |
| Formulation and adherence | Total oil mass, EPA/DHA content, ester form, meals, and capsule count can materially change achieved exposure [^dyerberg2010] [^lawson1988]. | Record the exact product/formulation and EPA+DHA dose; use a follow-up lipid panel or exposure biomarker only when it will change management. |

This table is a research synthesis, not individualized medical advice. Prescription-dose use and peri-procedural decisions require clinician review.

## Product identity, contaminants, and oxidation quality

Product quality should be operationalized as measured attributes, not brand reputation:

| Attribute | What a useful lot-specific report should show | Interpretation limit |
|---|---|---|
| Identity and potency | EPA and DHA separately per serving, analytical method, chemical form, lot number, and agreement with label claim | Total “fish oil” mass is not active EPA+DHA dose; identity does not establish efficacy. |
| Primary oxidation | Peroxide value (PV), conventionally in mEq O2/kg oil | PV measures hydroperoxides and can fall as primary products decompose; it cannot stand alone. |
| Secondary oxidation | para-Anisidine value (p-AV), with disclosure of flavors or matrices that can interfere with the assay | p-AV estimates aldehydic secondary products; flavored/colored products complicate comparisons. |
| Combined oxidation | TOTOX = 2 × PV + p-AV | Common voluntary ceilings—PV ≤5, p-AV ≤20, TOTOX ≤26—are manufacturing-quality limits, not validated human healthspan thresholds [^jackowski2015]. |
| Contaminants | Independent, lot-specific identity/potency plus relevant heavy-metal, PCB/dioxin, and microbiological testing with method and acceptance criteria | “Third-party tested” without analytes, methods, lot linkage, and results is not auditable; a passing result does not predict clinical benefit. |

In a survey of 171 North American products, 50% of successfully tested products exceeded at least one voluntary oxidation limit, although formulation and flavoring interfered with some assays [^jackowski2015]. Small human trials comparing more- and less-oxidized oils are short and inconsistent: one seven-week trial found no between-group difference in measured oxidative-stress or inflammatory biomarkers, while related analyses reported some lipoprotein differences without hard outcomes [^ottestad2012] [^rundblad2017]. These data support measuring oxidation and avoiding poorly characterized material; they do not define a PV, p-AV, or TOTOX level that predicts long-term disease. #gap/long-term-unknown

## Aging-hallmark relevance

| Hallmark | Relationship | Evidence boundary |
|---|---|---|
| [[chronic-inflammation]] | Changes membrane fatty-acid and oxylipin/resolution-substrate pools | Human inflammatory biomarkers are inconsistent, and no anti-inflammaging indication is established. |
| [[altered-intercellular-communication]] | Alters lipid mediators exchanged among platelets, leukocytes, endothelium, and liver | Biochemical plausibility is stronger than evidence that mediator changes cause healthspan benefit. |

The DO-HEALTH signal belongs under biological-age measurement, not as proof that omega-3 corrects a Hallmark of Aging. This page does not assign [[mitochondrial-dysfunction]] because membrane incorporation and peroxidizability do not establish reversal of age-related mitochondrial dysfunction in humans.

## Clinical-trial landscape

ClinicalTrials.gov returned **136** recruiting or active-not-recruiting records for the broad intervention query `omega-3 fatty acids` on 2026-08-04. The count spans indications, combinations, doses, and formulations and must not be read as 136 aging or cardiovascular trials.

<!-- clinical-trials-active: queried 2026-08-04; ClinicalTrials.gov v2 query.intr="omega-3 fatty acids"; RECRUITING + ACTIVE_NOT_RECRUITING; broad family count; recheck in ~6 months -->

## Limitations and next evidence step

- DO-HEALTH Bio-Age is the central aging-specific result, but it was a post hoc analysis of a 777-person national subsample with only baseline and year-3 measurements, no technical replicates, no formal study-specific sample-size calculation, and no single primary clock. PC-PhenoAge, original GrimAge2, and original DunedinPACE shifted, while PC-GrimAge version 1 did not; mediation of morbidity, disability, or death was not established [^dohealth2025]. #gap/needs-replication
- No direct outcomes trial isolates purified EPA from EPA+DHA with the same population, achieved exposure, dose, and inert comparator. The divergent REDUCE-IT, STRENGTH, and PISCES results cannot identify the responsible factor by cross-trial comparison. #gap/contradictory-evidence
- No omega-3-index threshold is validated as a treatment target for slower biological aging or longer healthspan.
- Specialized pro-resolving mediators are not standardized enough to serve as a clinical dosing target or proven outcome mediator.
- Family-level `human-evidence-level` and active-trial fields still obscure formulation-specific differences; `clinical-stage: supplement` avoids attributing prescription-esters' approvals to the nutrient family, and dedicated prescription-product pages remain the highest-priority structural split.

The frontmatter `next-experiment` prioritizes the aging ambiguity: replicate the methylation-clock signal while measuring frailty, disability-free survival, cardiovascular events, atrial fibrillation, and mortality in the same older-adult trial.

## Cross-references

- [[biomarkers/phenoage-2018]] — clock family; DO-HEALTH used the PC-PhenoAge implementation rather than the original clock
- [[biomarkers/dunedinpace-2022]] — original pace-of-aging measure shifted in DO-HEALTH
- [[studies/bischoff-ferrari-2025-do-health-biological-aging]] — verified atomic extraction of the DO-HEALTH Bio-Age analysis
- [[frameworks/biological-age-measurement]] — interpretation limits for intervention-responsive aging clocks
- [[phenotypes/sarcopenia]] — age-related muscle loss; omega-3 sits well below resistance training and protein intake in the intervention ranking
- [[studies/therdyothin-2025-omega3-protein-synthesis-meta-analysis]] — the pivotal null pooling of the muscle-protein-synthesis mechanism
- [[studies/santo-andre-2023-n3pufa-muscle-meta-analysis]] — flagship muscle mass/strength/function synthesis
- [[studies/smith-2011-omega3-muscle-protein-synthesis-older-adults]] and [[studies/smith-2015-omega3-muscle-mass-function-older-adults]] — the positive-outlier trials
- [[studies/rodacki-2012-fish-oil-strength-training-elderly-women]] — neuromuscular/motor-unit evidence, no placebo arm
- [[phenotypes/cardiovascular-aging]] — clinical cardiovascular-aging context
- [[exposures/dietary-fat-quality]] — food-level fat-quality and substitution framework
- [[interventions/dietary/mediterranean-diet]] — favorable dietary-pattern context for moderate fish intake
- [[pathways/lipoprotein-metabolism]] and [[molecules/proteins/lpl]] — triglyceride transport and clearance context
- [[pathways/spm-pathway]] — specialized pro-resolving-mediator pathway and measurement caveats
- [[biomarkers/heart-rate-variability-biomarker]] — autonomic cardiovascular biomarker; not treated here as a validated omega-3 healthspan surrogate
- [[chronic-inflammation]] and [[altered-intercellular-communication]] — mapped Hallmarks of Aging

## Footnotes

[^mohan2021]: doi:10.1001/jamainternmed.2021.0036 · Mohan D et al. · pooled prospective cohorts · n=191,558 · observational · adults with and without vascular disease across 58 countries
[^vital2019]: doi:10.1056/NEJMoa1811403 · Manson JE et al. · VITAL · n=25,871 · randomized placebo-controlled factorial trial · median follow-up 5.3 years · US primary prevention
[^ascend2018]: doi:10.1056/NEJMoa1804989 · ASCEND Study Collaborative Group · n=15,480 · randomized placebo-controlled trial · mean follow-up 7.4 years · adults with diabetes without known cardiovascular disease
[^strength2020]: doi:10.1001/jama.2020.22258 · Nicholls SJ et al. · STRENGTH · n=13,078 · randomized double-blind trial · statin-treated high-risk adults
[^pisces2025]: doi:10.1056/NEJMoa2513032 · PMID 41201837 · Lok CE et al. · PISCES · n=1,228 · randomized double-blind placebo-controlled trial · 3.5-year follow-up · adults receiving maintenance hemodialysis
[^reduceit2019]: doi:10.1056/NEJMoa1812792 · Bhatt DL et al. · REDUCE-IT · n=8,179 · randomized double-blind trial · median follow-up 4.9 years · statin-treated high-risk adults with elevated triglycerides
[^mori2000]: doi:10.1093/ajcn/71.5.1085 · Mori TA et al. · n=59 randomized (56 completed) · randomized double-blind placebo-controlled trial · 4 g/day purified EPA versus DHA versus olive oil · 6 weeks
[^muldoon2016]: doi:10.1111/joim.12442 · Muldoon MF et al. · n=261 · randomized double-blind placebo-controlled trial · 1.4 g/day EPA+DHA · 18 weeks · healthy adults
[^dohealth2025]: [[studies/bischoff-ferrari-2025-do-health-biological-aging]] · n=777 Swiss subsample of the 2,157-participant RCT · rct, post-hoc 2×2×2 factorial biomarker analysis · adults ≥70 years · omega-3 intervention 1 g/day (330 mg EPA + 660 mg DHA from marine algae) · 3 years · DOI:10.1038/s43587-024-00793-y
[^abuknesha2026]: doi:10.1161/CIRCEP.125.014785 · PMID 42517224 · Abuknesha NR et al. · peer-reviewed meta-analysis · 35 RCTs / 37 datasets · n=114,592 · new-onset atrial fibrillation
[^javaid2024]: doi:10.1161/JAHA.123.032390 · Javaid M et al. · systematic review/meta-analysis · randomized trials · n=120,643 · bleeding outcomes
[^vermunt2000]: doi:10.1007/BF02664762 · Vermunt SH et al. · n=12 · controlled stable-isotope study · healthy adults · dietary ALA conversion and oxidation
[^dyerberg2010]: doi:10.1016/j.plefa.2010.06.007 · Dyerberg J et al. · n=72 · double-blind formulation comparison with single-blind natural-oil arms · approximately 3.3 g/day EPA+DHA · 2 weeks · serum-lipid incorporation
[^lawson1988]: doi:10.1016/S0006-291X(88)80937-9 · Lawson LD, Hughes BG · comparative human absorption study · fish-oil triglycerides versus ethyl esters with high- versus previously tested low-fat meals
[^lopeztoledano2017]: doi:10.1016/j.jacl.2017.01.017 · Lopez-Toledano MA et al. · n=24 · randomized open-label three-period crossover · single-dose self-emulsifying EPA/DHA ethyl esters under fasted, low-fat, and high-fat conditions
[^flock2013]: doi:10.1161/JAHA.113.000513 · Flock MR et al. · n=115 · randomized double-blind placebo-controlled dose-response trial · 0–1,800 mg/day EPA+DHA · approximately 5 months · erythrocyte omega-3 index
[^gabbs2021]: doi:10.1093/jn/nxaa294 · Gabbs M et al. · randomized double-blind crossover trial · approximately 4 g/day ALA-rich versus DHA-rich supplements · healthy young adults
[^nasem2005]: doi:10.17226/10490 · Institute of Medicine / National Academies · Dietary Reference Intakes report · authoritative recommendation synthesis · ALA Adequate Intake rather than a total-omega-3 or EPA+DHA RDA
[^holman1982]: doi:10.1093/ajcn/35.3.617 · Holman RT, Johnson SB, Hatch TF · case intervention · child receiving long-term ALA-deficient parenteral nutrition · neurological and biochemical response to ALA repletion
[^farrell1988]: doi:10.1093/ajcn/48.2.220 · Farrell PM et al. · n=63 · prospective serial biochemical measurements · premature infants · feeding timing, Mead acid, and triene:tetraene ratio
[^optilip2006]: doi:10.1093/ajcn/84.6.1290 · Griffin MD et al. · OPTILIP · randomized controlled feeding trial · adults aged 45–70 · dietary n-6:n-3 ratio manipulation
[^marklund2019]: doi:10.1161/CIRCULATIONAHA.118.038908 · Marklund M et al. · individual-level pooled analysis of 30 prospective cohorts · observational · circulating omega-6 biomarkers and incident cardiovascular outcomes
[^dyerberg1979]: doi:10.1016/S0140-6736(79)91490-9 · Dyerberg J, Bang HO · cross-sectional physiological study · Greenland Inuit platelet fatty acids and hemostatic function
[^fodor2014]: doi:10.1016/j.cjca.2014.04.007 · PMID 25064579 · Fodor JG et al. · historical literature review · Inuit coronary-disease ascertainment and the origin of the cardioprotection narrative
[^senftleber2020]: doi:10.1016/j.atherosclerosis.2020.08.032 · Senftleber NK et al. · n=2,924 · first prospective Inuit cohort study · observational · omega-3 biomarkers/intake and cardiovascular outcomes
[^jackowski2015]: doi:10.1017/jns.2015.21 · Jackowski SA et al. · analytical survey · 171 North American over-the-counter omega-3 products · peroxide, para-anisidine, and TOTOX measures
[^ottestad2012]: doi:10.1017/S0007114511005484 · Ottestad I et al. · n=54 · randomized double-blind trial · oxidized versus high-quality fish oil versus high-oleic sunflower oil · 7 weeks
[^rundblad2017]: doi:10.1017/S0007114517001167 · Rundblad A et al. · n=54 · randomized controlled trial · oxidized versus high-quality fish oil · lipoprotein-subclass endpoints
[^smith2011mps]: [[studies/smith-2011-omega3-muscle-protein-synthesis-older-adults]] · n=16 randomized (15 completed/analyzed) · randomized controlled trial · p=0.004 within-group; p=0.01 between-group change · model: healthy older adults · 8 weeks omega-3 versus corn oil · NCT00794079 · DOI:10.3945/ajcn.110.005611
[^smith2011cs]: doi:10.1042/CS20100597 · PMID 21501117 · Smith GI et al. · *Clinical Science* 2011;121(6):267–278 · n=9 · single-arm pre/post, no control group · p<0.05 · model: healthy adults aged 25–45 · 8 weeks 4 g/day
[^smith2015muscle]: [[studies/smith-2015-omega3-muscle-mass-function-older-adults]] · n=60 randomized / 44 completed · randomized controlled trial · p<0.05 · model: healthy adults aged 60–85 · 6 months fish-oil-derived n-3 versus corn oil · NCT01308957 · DOI:10.3945/ajcn.114.105833
[^rodacki2012]: [[studies/rodacki-2012-fish-oil-strength-training-elderly-women]] · n=45 · randomized, **no placebo arm** (comparator was strength training alone) · model: women aged ~64 · 2 g/day fish oil · DOI:10.3945/ajcn.111.021915
[^therdyothin2025]: [[studies/therdyothin-2025-omega3-protein-synthesis-meta-analysis]] · n=188 (muscle protein synthesis, k=6) / n=105 (whole-body, k=3) · meta-analysis · ns for muscle protein synthesis (P=0.89) · model: healthy adults and clinical populations · **main pool used basal FSR**, selecting the basal value where a trial reported both; stimulated-state analyses reported separately and non-significant · search cutoff December 2022 · DOI:10.1093/nutrit/nuae055 · PMC11723138
[^huang2020]: doi:10.3390/nu12123739 · PMID 33291698 · PMC7761957 · Huang YH et al. · *Nutrients* 2020;12(12):3739 · 10 RCTs · meta-analysis · p<0.05 for muscle mass · model: older adults · earlier and smaller than the syntheses above; found +0.33 kg muscle mass (95% CI 0.05–0.62) and +0.67 kg in the >2 g/day subgroup (95% CI 0.16–1.18)
[^santoandre2023]: [[studies/santo-andre-2023-n3pufa-muscle-meta-analysis]] · n=1,443 across 14 studies · meta-analysis · p=0.04 strength, ns mass and function · model: healthy young and older adults · high risk of bias, moderate NutriGrade certainty · DOI:10.1016/j.advnut.2022.11.005
[^cornish2022]: doi:10.3390/nu14112221 · PMID 35684018 · Cornish SM et al. · *Nutrients* 2022;14(11):2221 · n=2,438 across 16 studies · meta-analysis · p<0.05 lower-body strength, ns lean mass · model: adults aged ≥55 without disease
[^tseng2023]: doi:10.1016/j.arr.2023.102014 · PMID 37442370 · Tseng PT et al. · *Ageing Research Reviews* 2023;90:102014 · 16 RCTs · frequentist network meta-analysis · ns for muscle mass · model: adults with or at high risk of sarcopenia · PROSPERO CRD42022347161
[^timraz2023]: doi:10.3390/nu15163579 · PMID 37630768 · Timraz M et al. · *Nutrients* 2023;15(16):3579 · n=488 across 5 RCTs · meta-analysis · ns for grip strength (p=0.07), I²=90% · model: older adults · PROSPERO CRD42021267011
[^gerling2019]: doi:10.3389/fphys.2019.00348 · PMID 30984028 · PMC6449797 · Gerling CJ et al. · *Frontiers in Physiology* 2019;10:348 · n=10 · single-arm pre/post, no control group · model: healthy recreationally active young men (~23 y) · 12 weeks 2 g EPA + 1 g DHA/day · note: the published abstract reports whole-muscle phospholipid +57% while the results text reports +56%; both are cited here as ~56–57% pending a full-PDF check
[^herbst2014]: doi:10.1113/jphysiol.2013.267336 · PMID 24396061 · Herbst EAF et al. · *Journal of Physiology* 2014;592(6):1341–1352 · n=18 · single-arm pre/post, no control group · p<0.05 · model: healthy young men · 12 weeks 2 g EPA + 1 g DHA/day
