---
type: study
doi: 10.7554/eLife.12997
pmid: 26687007
pmc: PMC4758946
title: "Targeting senescent cells enhances adipogenesis and metabolic function in old age"
authors: [Xu M, Palmer AK, Ding H, Weivoda MM, Pirtskhalava T, White TA, Sepe A, Johnson KO, Stout MB, Giorgadze N, Jensen MD, LeBrasseur NK, Tchkonia T, Kirkland JL]
year: 2015
journal: eLife
volume: 4
pages: "e12997"
study-design: in-vivo
publication-type: research-article
organism: mus-musculus
n-subjects: null
intervention: ["[[interventions/pharmacological/senolytics]]", "[[interventions/pharmacological/senomorphics]]"]
hallmarks-tested: ["[[cellular-senescence]]", "[[deregulated-nutrient-sensing]]", "[[altered-intercellular-communication]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [activin-a-adipogenesis-inhibition, senescent-fat-progenitors-sasp, ink-attac-fat-mass-rescue, jak-inhibition-metabolic-improvement, hepatic-steatosis-reduction, insulin-sensitivity-improvement]
local-pdf: null
verified: true
verified-date: 2026-06-25
verified-by: claude
verified-scope: "All quantitative claims cross-checked against PMC4758946 full text (gold OA). Corrections applied: AP20187 schedule clarified to two 3-day courses (not 6 discrete cycles); ruxolitinib cohort description corrected; SB-431542 receptor specificity language aligned to paper's own phrasing."
literature-checked-through: 2026-06-25
---

# Xu 2015 (eLife) — Targeting senescent cells enhances adipogenesis and metabolic function in old age

**Companion study note:** This is the *eLife* 2015 paper on senescent fat progenitors, activin A, and adipogenesis (Xu, Palmer, Ding, Weivoda, Kirkland et al.). It is a distinct study from the *PNAS* 2015 paper by some of the same authors (Xu, Tchkonia, et al., DOI 10.1073/pnas.1515386112) on JAK inhibition of SASP and physical frailty. Both appeared in 2015 from the Kirkland lab; they are companion studies and should not be conflated. This page covers only the *eLife* paper.

A study from the Kirkland/Tchkonia laboratory at the Mayo Clinic establishing that **senescent fat progenitor cells secrete [[inhba|activin A]]** — a [[tgf-beta|TGF-β superfamily]] ligand — as a key [[sasp|SASP]] factor that paracrinally suppresses [[processes/adipogenesis|adipogenesis]] in neighboring healthy progenitors. Clearance of senescent cells (via the INK-ATTAC genetic system) or suppression of their SASP (via JAK inhibition with ruxolitinib/INCB018424) in old mice partially rescued fat mass, adipogenic gene expression, systemic metabolic parameters, and insulin sensitivity. Published in *eLife* 2015 (open access).

---

## Question

Why does fat mass paradoxically decline in very old age even as obesity is common in middle-aged adults, and what role do senescent cells in adipose tissue play in this decline? Specifically: do senescent cells in fat tissue inhibit new adipocyte formation (adipogenesis), and if so, what is the molecular mechanism?

---

## Design

### Human in vitro experiments

- **Donors:** Primary human subcutaneous fat progenitors (stromal-vascular fraction) from healthy, lean kidney donors (n=6; age 39 ± 3.3 years; BMI 26.6 ± 0.9 kg/m²).
- **Senescence induction:** Ionizing irradiation at 10 Gy; >70% SA-β-galactosidase (SABG)-positive cells achieved within 20 days post-irradiation.
- **Co-culture assay:** Senescent vs. non-senescent "source" progenitors co-cultured with naïve "target" progenitors under adipogenic induction conditions; lipid accumulation scored as readout of adipogenesis.
- **Conditioned medium (CM) experiments:** CM from senescent progenitors applied to naïve target progenitors ± neutralizing antibody against activin A or ± SB-431542 (activin A receptor inhibitor; the paper notes it also inhibits TGFβ signaling via ALK5).
- **JAK inhibitor in vitro:** Ruxolitinib (INCB018424) at 0.6 μM for 72 hours applied to senescent progenitors; activin A mRNA and secreted protein measured.

### Mouse experiments — INK-ATTAC genetic clearance (Fig 4)

- **Model:** INK-ATTAC transgenic mice express an FKBP–caspase-8 fusion under the *p16^Ink4a^* promoter; administration of AP20187 (a chemical inducer of dimerization) selectively triggers apoptosis in p16^Ink4a^-expressing senescent cells [^baker2011].
- **Ages:** 18-month-old wild-type (WT) C57BL/6 and INK-ATTAC+/- mice.
- **AP20187 dosing:** 10 mg/kg i.p., two courses of three consecutive days each, with 14 days between courses — 6 total injection days over ~3 weeks.
- **n:** n=8 for body composition endpoints; n=7 for SABG+ cell quantification.
- **Endpoints:** Fat mass (MRI), SABG+ cells in adipose tissue, circulating activin A, adipose tissue gene expression (C/EBPα, PPARγ, Lipin-1, IL-6, p16^Ink4a^, p21^Cip1^).

### Mouse experiments — JAK inhibitor in vivo (Figs 6–8)

- **Ages:** 22-month-old (n=9 per group; results replicated in a second independent cohort with the same regimen) and 8-month-old C57BL/6 mice (young control arm). NIA supplied mice as 22–24 months old.
- **Drug:** Ruxolitinib (INCB018424) mixed into food; each mouse fed ~0.5 g food containing 60 mg/kg drug daily for 8 weeks; vehicle control = DMSO in food.
- **Endpoints:**
  - Body composition (MRI): fat mass, lean mass
  - Fat depot weights: inguinal, subscapular, brown adipose tissue
  - Circulating activin A (ELISA)
  - Adipose tissue gene expression: PPARγ, C/EBPα, FABP4, adiponectin (Adipo-Q), Lipin-1, GPAT4, ATGL, HSL; activin A transcript in whole fat and isolated progenitors
  - Plasma free fatty acids (FFA), plasma triglycerides
  - Liver weight, hepatic triglycerides (TG; both absolute total and TG/protein ratio)
  - Oral glucose tolerance test (OGTT) with area-under-curve (AUC)
  - Insulin tolerance test (ITT) with AUC
  - Fasting plasma glucose
  - Glucose-stimulated insulin secretion (GSIS)
  - Fat tissue ex vivo p-AKT/total AKT ratio (insulin challenge, n=6)
  - Metabolic rate and food intake (metabolic cages; no difference detected)

---

## Findings

### 1. Senescent fat progenitors inhibit adipogenesis via a paracrine mechanism (Figs 1–2)

Co-culture of naïve target progenitors with senescent source progenitors dramatically reduced lipid accumulation: **only ~20% of target progenitors accumulated lipid** when co-cultured with senescent source cells, compared to **>50% when co-cultured with non-senescent source cells** [^xu2015elife]. This inhibitory effect was recapitulated by conditioned medium (CM) from senescent progenitors, confirming a secreted, paracrine mechanism rather than direct cell–cell contact.

| Condition | Lipid accumulation (% target progenitors) |
|---|---|
| Co-culture with non-senescent source | >50% |
| Co-culture with senescent source | ~20% |

### 2. Activin A is the key SASP mediator of adipogenesis inhibition (Fig 3)

Secretome analysis of senescent fat progenitors identified [[inhba|activin A]] — a homodimer of Inhibin β-A subunits (encoded by *INHBA*), belonging to the [[tgf-beta|TGF-β superfamily]] — as the dominant paracrine inhibitor. Evidence:

- Neutralizing antibody against activin A added to senescent CM **substantially restored adipogenesis** in target progenitors.
- SB-431542 (activin A receptor inhibitor; also blocks TGFβ signaling, acting on ALK4/5/7-type receptors upstream of [[smad2-smad3|SMAD2/3]]) similarly restored adipogenesis when added to senescent CM.
- Direct addition of recombinant activin A to non-senescent progenitors mimicked the senescent CM effect, inhibiting adipogenesis [^zaragosi2010].
- Activin A levels were elevated in conditioned medium from irradiation-senescent progenitors relative to non-senescent controls.

This positions activin A secretion — acting through its type I receptors (ALK4/5/7) and downstream [[smad2-smad3|SMAD2/3]] signaling — as the primary SASP axis through which senescent fat progenitors suppress local adipogenesis. #gap/needs-human-replication

### 3. JAK inhibition suppresses activin A secretion from senescent progenitors in vitro (Fig 5)

Because the JAK/STAT pathway is a major transcriptional driver of the [[sasp|SASP]], the authors tested whether JAK inhibition reduces activin A production from senescent progenitors:

- Ruxolitinib at **0.6 μM for 72 hours** significantly reduced activin A mRNA transcript in senescent progenitors (n=7, p<0.05).
- Ruxolitinib at **0.6 μM for 72 hours** significantly reduced secreted activin A protein by ELISA (n=6, p<0.05).
- Conditioned medium from ruxolitinib-treated senescent progenitors caused **less inhibition of adipogenesis** in naïve target progenitors, confirming functional relevance of the activin A reduction.

### 4. INK-ATTAC genetic senescent cell clearance in old mice blunts fat loss and reduces activin A (Fig 4)

In 18-month-old C57BL/6 mice, AP20187-mediated clearance of p16^Ink4a^-positive senescent cells over 3 weeks:

- **Blunted progressive fat loss:** WT mice lost more fat mass than INK-ATTAC+/- mice during the treatment period (p<0.05 at 3 weeks). Old mice are in a state of ongoing fat tissue deterioration; senescent cell clearance partially reversed this trend.
- **Reduced circulating activin A:** INK-ATTAC+/- mice showed a **>30% reduction in circulating activin A from baseline**, while WT controls showed an **~10% increase**.
- **Reduced SABG+ cells in adipose tissue** (INK-ATTAC+/- vs WT, p<0.05).
- **Increased adipose tissue expression** of pro-adipogenic transcription factors:
  - C/EBPα: significantly higher in INK-ATTAC+/- vs WT (p<0.05)
  - PPARγ: significantly higher in INK-ATTAC+/- vs WT (p<0.05)
  - Lipin-1: increased
- **Decreased adipose tissue expression** of senescence/SASP markers:
  - IL-6: reduced
  - p16^Ink4a^: reduced
  - p21^Cip1^: reduced

### 5. JAK inhibition in old mice rescues fat mass and metabolic parameters (Figs 6–8)

Ruxolitinib (60 mg/kg/day orally in food for 8 weeks) in 22-month-old mice produced a coordinated set of metabolic improvements:

**Body composition:**
- Fat mass was **preserved** in ruxolitinib-treated mice; vehicle controls showed **progressive fat mass loss** (p<0.05).
- Inguinal, subscapular, and brown adipose depots were reduced in vehicle controls but preserved in ruxolitinib-treated mice.
- Lean mass was unchanged in both groups.
- Body weight did not differ significantly between groups.

**Adipose tissue gene expression (ruxolitinib vs. vehicle in 22-month mice; all p<0.05 unless noted):**
- PPARγ: increased
- C/EBPα: increased
- FABP4: increased
- Adiponectin (Adipo-Q): increased
- Lipin-1: increased
- GPAT4 (triglyceride synthesis): increased
- ATGL (adipose triglyceride lipase): induced
- HSL (hormone-sensitive lipase): induced
- Activin A (whole fat and isolated progenitors): suppressed

**Systemic activin A:**
- Circulating activin A was **significantly reduced** in ruxolitinib-treated 22-month-old mice vs. vehicle controls (p<0.05).
- Young (8-month-old) mice showed minimal/non-significant change in circulating activin A with ruxolitinib.

**Lipid metabolism:**
- Plasma free fatty acids (FFA): **reduced** in ruxolitinib-treated aged mice (p<0.05).
- Plasma triglycerides: not significantly different.
- Liver weight: **decreased** in ruxolitinib-treated mice (p<0.05).
- Hepatic triglyceride/protein ratio: **decreased** (p<0.05).
- Total hepatic triglycerides: **decreased** (p<0.05).

**Glucose homeostasis and insulin sensitivity:**
- Oral glucose tolerance: **improved** (p<0.05).
- Insulin tolerance: **improved** (area under curve, p<0.05).
- Fasting plasma glucose: not significantly changed.
- Glucose-stimulated insulin secretion: not altered.
- Fat tissue ex vivo p-AKT/total AKT ratio (insulin challenge): **significantly higher** in ruxolitinib-treated mice (n=6, p<0.05) — indicating improved tissue-level insulin signaling.

**Specificity — young mice:**
- 8-month-old mice treated with ruxolitinib showed minimal effects on fat mass, adipogenesis markers, and insulin tolerance, consistent with the mechanism requiring a substantial senescent cell burden as the driver.

**No metabolic rate or food intake differences** were detected in metabolic cages — ruling out effects mediated by altered energy expenditure or appetite.

---

## Extrapolation table (mouse → human)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Partial — activin A, ALK4/5/7, SMAD2/3 signaling are conserved; in vitro component uses primary human progenitors demonstrating activin A inhibits human adipogenesis; but aging-adipose senescence accumulation in humans not directly quantified in this paper |
| Phenotype conserved in humans? | Partial — age-associated fat redistribution and loss occurs in humans; JAK/STAT-driven SASP is conserved; however, whether senescent fat progenitor activin A secretion accounts for a meaningful fraction of the human phenotype is unknown |
| Replicated in humans? | No — all in vivo endpoints are mouse only; in vitro components use human cells; no clinical trial data #gap/needs-human-replication |

---

## Why it matters

1. **Mechanistic specificity for a poorly understood aging phenotype.** Age-associated fat redistribution (loss of subcutaneous fat, accumulation of visceral and ectopic fat) is a major contributor to metabolic dysfunction in older adults [^tchkonia2010]. This paper provides a tractable molecular mechanism: senescent fat progenitors → activin A → SMAD2/3-mediated suppression of adipogenesis in healthy neighboring progenitors.

2. **Dual-target validation.** Both genetic (INK-ATTAC clearance) and pharmacological (JAK inhibition) approaches converged on the same phenotypic improvement — fat mass preservation, activin A reduction, adipogenic gene rescue — strengthening causal inference despite the absence of randomization or pre-registration.

3. **Ectopic lipid and insulin resistance connection.** The reduction in hepatic triglycerides and improvement in systemic insulin sensitivity in ruxolitinib-treated aged mice links senescent-cell-driven fat dysfunction to the broader metabolic syndrome phenotype, including [[type-2-diabetes]] risk. The likely mechanism: without functional adipogenesis, non-esterified fatty acids released from dysfunctional old adipocytes are preferentially deposited ectopically in liver (and likely skeletal muscle).

4. **JAK inhibitors as senomorphics.** This paper (alongside the companion PNAS paper on JAK inhibition and frailty) established the rationale for repurposing JAK inhibitors as [[interventions/pharmacological/senomorphics|senomorphics]] — agents that suppress SASP without killing senescent cells. Ruxolitinib is FDA-approved for myelofibrosis; the dose used here (60 mg/kg/day in mice) substantially exceeds the human therapeutic range, limiting direct translatability.

5. **Activin A as aging biomarker candidate.** The observation that circulating activin A was reduced >30% by senescent cell clearance (INK-ATTAC) and suppressed by ruxolitinib positions it as a pharmacodynamic biomarker for senomorphic/senolytic treatments in future clinical trials. #gap/needs-human-replication

---

## Connections to the wiki

- [[sasp]] — activin A added as a novel SASP effector from fat progenitors with a specific paracrine adipogenesis-inhibition function; extends the SASP canon beyond canonical IL-6/IL-8/MMP axes
- [[cellular-senescence]] — canonical evidence that senescent fat progenitors accumulate in aged adipose and functionally impair the tissue through paracrine mechanisms
- [[inhba|activin A]] — central mechanistic effector (protein page being seeded in parallel); this study is the primary in-vivo-validated citation for activin A as a SASP factor suppressing adipogenesis
- [[tgf-beta]] — activin A is a TGF-β superfamily member; ALK4/5/7 → SMAD2/3 signaling axis
- [[smad2-smad3]] — downstream transcriptional effectors of activin A signaling; SB-431542 rescue experiment confirms this arm
- [[jak-stat-pathway]] — upstream transcriptional driver of SASP activin A expression; ruxolitinib target
- [[interventions/pharmacological/senolytics]] — INK-ATTAC clearance arm establishes that elimination of senescent cells rescues adipogenesis; conceptually relevant to senolytic drug strategies
- [[interventions/pharmacological/senomorphics]] — ruxolitinib arm is one of the foundational studies establishing JAK inhibition as a senomorphic strategy (cited alongside the companion Xu 2015 PNAS paper on the senomorphics page)
- [[type-2-diabetes]] — insulin sensitivity improvement and hepatic steatosis reduction mechanistically links senescent-fat-progenitor burden to metabolic disease
- [[obesity]] — fat mass paradox in aging (loss of subcutaneous adipose in very old age) is the phenotype studied; ectopic fat redistribution may underlie visceral obesity risk

---

## Limitations

- **All in vivo results are mouse-only.** The human components are limited to isolated fat progenitor cell culture experiments. Whether the observed effects translate to aged humans is unknown. #gap/needs-human-replication
- **INK-ATTAC model selects for p16^Ink4a^-expressing cells**, which may not represent all senescent cells in aged fat tissue. Fat progenitors may differ in their p16^Ink4a^ expression trajectory from other cell types.
- **No randomization or power analysis reported.** Authors explicitly note this in their methods: statistical analysis used two-tailed Student's t-tests, and no formal pre-registration was conducted.
- **Ruxolitinib dose (60 mg/kg/day) is supra-therapeutic in humans.** The clinical dose for myelofibrosis is ~15–25 mg twice daily in adults (~0.4–0.7 mg/kg/day), roughly 100-fold below the mouse dose on a mg/kg basis. Allometric scaling reduces (but does not eliminate) this gap; whether effective SASP suppression occurs at clinically achievable human doses is unresolved. #gap/dose-response-unclear
- **Young mouse (8-month) comparator arm was not treated with ruxolitinib in the full metabolic battery.** The specificity to old mice is inferred from differential response, not a powered age-stratified design.
- **Activin A levels not reported in absolute units** (pg/mL) in the primary text — changes expressed as percent from baseline or as relative comparisons to controls. Exact fold-changes and absolute concentrations would strengthen pharmacodynamic biomarker utility.
- **Fat mass preservation vs. restoration.** The intervention blunted ongoing fat loss; it did not dramatically restore fat mass to young-mouse levels. Magnitude of rescue in humans is highly uncertain.
- **The companion PNAS paper (Xu et al. 2015 — JAK inhibition, frailty, and SASP)** used a different treatment protocol and endpoints; the two papers together strengthen the JAK-inhibitor-as-senomorphic concept but should not be cited interchangeably. See [[interventions/pharmacological/senomorphics]] for the frailty endpoints from the PNAS paper.

---

## Footnotes

[^xu2015elife]: doi:10.7554/eLife.12997 · Xu M et al. · *eLife* 2015 · n=6 human donors (in vitro); n=8 mice (INK-ATTAC arm); n=9/group (ruxolitinib arm) · model: primary human fat progenitors + aged C57BL/6 mice · in-vitro + in-vivo · open access (PMC4758946)

[^baker2011]: doi:10.1038/nature10600 · Baker DJ et al. · *Nature* 2011 · "Clearance of p16Ink4a-positive senescent cells delays ageing-associated disorders" · the foundational INK-ATTAC model paper; established that AP20187-mediated clearance of p16^Ink4a^+ cells in BubR1-progeroid mice delayed lordokyphosis, cataracts, and loss of adipose tissue · n=20–25/group · model: BubR1^H/H^ progeroid + INK-ATTAC mice

[^tchkonia2010]: doi:10.1111/j.1474-9726.2010.00608.x · PMID 20701600 · PMC2941545 · Tchkonia T et al. · *Aging Cell* 2010;9(5):667–684 · "Fat tissue, aging, and cellular senescence" · foundational review establishing that senescent cell accumulation in adipose tissue increases with age and is associated with impaired adipogenic capacity and pro-inflammatory changes in fat tissue · gold OA (PMC)

[^zaragosi2010]: doi:10.2337/db10-0013 · PMID 20530742 · Zaragosi LE et al. · *Diabetes* 2010;59(10):2513–2521 · "Activin A plays a critical role in proliferation and differentiation of human adipose progenitors" · demonstrated that direct addition of recombinant activin A to non-senescent human fat progenitors inhibits adipogenesis; Xu 2015 builds on this to show senescent cells are an endogenous source of activin A in aged fat

[^xu2015pnas]: doi:10.1073/pnas.1515386112 · Xu M, Tchkonia T et al. · *PNAS* 2015 · companion paper from the same lab (same year, same first and senior authors); covers JAK inhibition reducing SASP, alleviating frailty, and improving grip strength/gait speed in old mice — distinct from this eLife paper's adipogenesis/activin A/hepatic steatosis endpoints. See [[interventions/pharmacological/senomorphics]] for the frailty data.
