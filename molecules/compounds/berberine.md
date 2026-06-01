---
type: compound
aliases:
  - berberine hydrochloride
  - berberine HCl
  - BBR
  - "5,6-dihydro-9,10-dimethoxybenzo[g]-1,3-benzodioxolo[5,6-a]quinolizinium"
pubchem-cid: 2353
chembl-id: CHEMBL31096
drugbank-id: DB04115
cas-number: 2086-83-1
molecular-formula: "C20H18NO4+"
molecular-weight-da: 336.4
biologic: false
mechanisms: [ldlr-mrna-stabilization, ampk-activation, tmao-suppression-microbial, jak2-stat3-inhibition, glp1-secretion-stimulation, pcsk9-reduction, gut-microbiome-modulation, anti-inflammatory]
targets: ["[[ldlr]]", "[[ampk]]", "[[jak-stat-pathway]]", "[[mtor]]", "[[akkermansia-muciniphila]]", "[[pcsk9]]"]
hallmarks: ["[[chronic-inflammation]]", "[[dysbiosis]]", "[[deregulated-nutrient-sensing]]"]
clinical-stage: supplement
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Multi-region (non-Chinese) adequately-powered RCT to confirm CRC-adenoma prevention (Chen/Tan signal) — current 6-year followup data (Tan 2025) limited to Chinese cohort with adenoma history; effect-size replication in Western populations with different dietary microbiomes is the single most informative next step."
clinical-trials-active: 40
literature-checked-through: 2026-05-18
verified: true
verified-date: 2026-05-18
verified-by: claude
verified-scope: "Partial. Ma 2022 (doi:10.1038/s41392-022-01027-6) verified end-to-end against local PDF — TMAO/CutC/FMO mechanism, hamster IMT_max numerics, human n=21 plaque-score and IMT-IS-NOT-significant distinction all confirmed and corrected from initial extraction. Lei 2026 BRAVO (PMC12811813) and Tan 2025 (PMC12490254) verified against PMC full text — co-primary-endpoint negativity, secondary-endpoint positivity, n's, HRs, CIs, p-values all extracted directly. Chen 2020 dose (300 mg BID) confirmed via PubMed efetch; n=891 evaluable confirmed. Not verified: Kong 2004 (not_oa; quantitative claims from secondary citations), Yang 2023 meta (not_oa), Derosa 2013 (not_oa), Zhu 2015 (DOI not in major aggregators), Cameron 2008, Yu 2010, Turner 2008, Yin 2008, Lan 2015 — all citations from training memory and brief, flagged in footnotes."
---

> ⚠️ Partially verified 2026-05-18. Ma 2022 PDF, BRAVO 2026 PMC, Tan 2025 PMC, Chen 2020 abstract all primary-source-verified. Kong 2004, Yang 2023, Derosa 2013, Zhu 2015 and other supporting citations are secondary-sourced pending full PDF access — see footnotes and `verified-scope` for the precise audit. The `clinical-trials-active: 40` figure is an order-of-magnitude estimate; exact count not independently queried from ClinicalTrials.gov API on this date. #gap/needs-ct-gov-count-refresh

# Berberine

An isoquinoline alkaloid extracted from *Berberis vulgaris* (barberry), *Berberis aristata*, *Hydrastis canadensis* (goldenseal), and *Coptis chinensis* (Chinese goldthread). Berberine forms bright yellow crystals and has been used in traditional Chinese medicine (TCM) for millennia as an antimicrobial and anti-diarrheal agent. Modern interest is driven by an unusual convergence of cardiometabolic, microbiome, and colorectal cancer prevention signals from Chinese RCT literature. Its near-zero oral systemic bioavailability (~0.68%) is not a limitation but the primary enabling pharmacology: berberine acts largely as a **gut-luminal agent**, remodeling microbial populations and suppressing microbial metabolite production rather than reaching most target tissues through the bloodstream.

Mechanistically closest neighbor: [[metformin]] — both inhibit mitochondrial Complex I indirectly and activate AMPK by raising AMP:ATP ratio. But berberine's dominant human-evidence signals come from a different axis entirely: post-transcriptional LDLR mRNA stabilization (lipid-lowering) and gut microbiome remodeling (TMAO suppression, colorectal adenoma prevention). See [[interventions/pharmacological/ampk-activators]] for class-level comparison.

## Identity and physicochemistry

| Field | Value |
|---|---|
| PubChem CID | 2353 |
| ChEMBL | CHEMBL31096 |
| DrugBank | DB04115 |
| CAS | 2086-83-1 |
| Molecular formula | C20H18NO4+ (quaternary ammonium cation; always carries positive charge) |
| MW (free cation) | 336.4 g/mol |
| MW (HCl salt) | 371.8 g/mol |
| Common pharmaceutical form | Berberine hydrochloride — the salt form used in essentially all RCTs and supplements |
| Solubility | Sparingly water-soluble; freely soluble in dilute acid; poorly soluble in ethanol |
| Bioavailability (oral) | ~0.68% (Liu 2010) [^liu2010] — among the lowest oral bioavailabilities of any clinically-active compound; most of the compound remains in the gut lumen |

The cationic structure (permanent + charge on the nitrogen) is pharmacokinetically important: berberine is a substrate for P-glycoprotein efflux transporters and organic cation transporters (OCT1/OCT2), and is extensively eliminated by the gut wall before reaching systemic circulation. Absorbed berberine undergoes rapid first-pass hepatic biotransformation; ~50% of the absorbed fraction is converted to berberrubine, thalifendine, demethyleneberberine, and jatrorrhizine — some of which retain biological activity [^liu2010].

The paradox: how does a compound with 0.68% bioavailability produce measurable plasma lipid changes and systemic clinical effects? Four answers: (i) LDLR mRNA stabilization is a hepatic effect requiring only trace hepatic exposure; (ii) TMAO-axis and microbiome effects require zero systemic exposure — purely luminal; (iii) AMPK activation in intestinal epithelium is sufficient for some metabolic effects; (iv) active metabolites (berberrubine) may reach systemic circulation at higher concentrations than the parent. Full resolution remains incomplete. #gap/no-mechanism

## Mechanism of action (primary molecular targets)

Mechanisms are kept distinct here from primary effects (biomarker changes) and downstream effects (clinical endpoints), which appear in separate sections below.

### LDLR mRNA stabilization (Kong 2004)

Berberine binds the 3′-untranslated region (3′-UTR) of *LDLR* mRNA via an ERK1/2-dependent mechanism, extending transcript half-life and thus increasing surface LDLR protein without altering *LDLR* gene transcription [^kong2004]. This is mechanistically **distinct from statins** in a clinically significant way:

| Agent | Primary mechanism | Level of action |
|---|---|---|
| Statins (HMG-CoA reductase inhibitors) | Inhibit HMGCR → ↓ intracellular cholesterol → SCAP/INSIG dissociation → ↑ SREBP-2 cleavage → ↑ LDLR gene transcription | Transcriptional |
| Berberine | Binds 3′-UTR of LDLR mRNA → ↑ mRNA stability → ↑ surface LDLR protein | Post-transcriptional |

The non-overlapping mechanism implies additivity with statins — and meta-analytic data (Yang 2023) [^yang2023] confirms enhanced LDL-C lowering in berberine+statin versus statin-alone arms. Cross-link: [[ldlr]], [[pcsk9]].

### Gut microbial TMAO-axis suppression (Ma 2022)

Trimethylamine N-oxide (TMAO) is produced from dietary choline and L-carnitine via a two-step microbial-hepatic process: (i) gut bacteria expressing choline-TMA-lyase (CutC) convert choline to trimethylamine (TMA); (ii) hepatic FMO3 oxidizes TMA to TMAO. TMAO at elevated plasma concentrations promotes atherosclerosis (Wang 2011; Tang 2013).

**Critical mechanistic refinement from Ma 2022.** Berberine itself is *not* the direct CutC inhibitor — it is a prodrug. Gut-bacterial nitroreductase (NR) reductively converts berberine to **dihydroberberine (dhBBR)**, and dhBBR is the active inhibitor of (i) bacterial CutC (the canonical choline-TMA-lyase) and (ii) a *gut-bacterial* flavin-containing monooxygenase that oxidizes TMA→TMAO in the lumen (this is a separate enzyme from hepatic FMO3). **Hepatic FMO3 itself is NOT inhibited by berberine** — Ma 2022 confirmed this in liver homogenate assays. The plasma-TMAO reduction is entirely attributable to reduced gut delivery of TMA and gut-luminal TMAO to portal circulation [^ma2022].

This mechanistic picture is supported by the IP-injection control: berberine 20 mg/kg given intraperitoneally produced higher systemic blood levels but did NOT reduce fecal or plasma TMAO, confirming the effect requires gut-luminal presence (and thus bacterial NR-mediated conversion to dhBBR).

Quantitative effects in Ma 2022's hamster model (HFD-fed, n=6 per group, 3 months treatment):
- Plasma TMAO ↓ 47% (low dose, 100 mg/kg) to 52% (high dose, 200 mg/kg) at 2 months (p<0.01, p<0.001)
- Fecal TMAO ↓ 46% (low) to 69% (high) at 2 months — and ↓ ~98% acutely 6h post single oral dose (Figure 1b)
- Plasma TMAO ↓ 58–64% in the 3-month endpoint cohort (***p<0.001)

Fecal microbiota transplant from BBR-treated to recipient HFD hamsters reproduced the TMAO reduction — confirming the effect is microbiota-mediated and transferable. Ma 2022 also documents enrichment of [[akkermansia-muciniphila]] in treated mice and humans — an effect downstream of the broader microbiome remodeling, not a direct berberine-AKK interaction. Cross-link: [[firmicutes-bacteroidetes-ratio]], [[microbiome/gut-microbiome-aging-shifts]].

This positions berberine as a **"vitamin-like non-absorbable luminal agent"** in Ma et al.'s framing — its low systemic bioavailability is the delivery mechanism, not a pharmacokinetic problem. The vitamin analogy is precise: like a B-vitamin functioning as a cofactor in enzyme reactions, berberine functions as a substrate for bacterial NR to produce dhBBR, which then inhibits microbial CutC and FMO. See [[studies/ma-2022-berberine-tmao-atherosclerosis]] for the full mechanistic dissection.

### Indirect AMPK activation (Complex I-mediated)

Berberine partially inhibits mitochondrial Complex I, raising intracellular AMP:ATP ratio, which via LKB1 drives Thr172 phosphorylation of AMPKα [^turner2008]. Activated AMPK then:

- Phosphorylates Raptor (Ser722/Ser792) → direct mTORC1 inhibition
- Phosphorylates TSC2 (Ser1387) → indirect mTORC1 inhibition via Rheb-GTP depletion
- Phosphorylates ULK1 (Ser317/Ser555) → autophagy induction
- Phosphorylates ACC1/2 (Ser79) → inhibits fatty acid synthesis, activates fatty acid oxidation
- Activates PGC-1α → mitochondrial biogenesis

This is the same chassis as [[metformin]]. Full AMPK substrate table and class-level mechanism: [[interventions/pharmacological/ampk-activators]]. The fraction of berberine's metabolic effects attributable to systemic versus intraluminal/mucosal AMPK activation is unresolved — a microbiome-mediated AMPK-independent route analogous to the Cabreiro 2013 *C. elegans*/metformin mechanism is plausible but untested. #gap/no-mechanism

### JAK2/STAT3 inhibition in vascular smooth muscle cells (Zheng 2025)

In atherosclerotic vascular smooth muscle cells (VSMCs), berberine suppresses JAK2/STAT3 signalling, blocking phenotypic switching from the contractile (αSMA+, SM22α+) to synthetic (proliferative, migratory, ECM-secreting) VSMC state [^zheng2025]. Phenotypic switch promotes plaque vulnerability; berberine's restoration of contractile phenotype contributes to plaque stability through a mechanism independent of lipid lowering. Cross-link: [[jak-stat-pathway]], [[chronic-inflammation]].

### GLP-1 secretion stimulation (gut L-cells)

Yu 2010 reports berberine stimulates GLP-1 release from intestinal L-cells [^yu2010], providing a mechanistic link between luminal berberine exposure and glycemic effects via the incretin axis. This is considered a secondary supporting mechanism — not load-bearing for the lipid-lowering or cancer-prevention effects. The magnitude of GLP-1 stimulation at clinical berberine doses has not been rigorously quantified in dose-response studies.

### PCSK9 secretion reduction (Cameron 2008)

Berberine reduces hepatic PCSK9 secretion, preserving surface LDLR from PCSK9-mediated lysosomal degradation [^cameron2008]. This is secondary to the LDLR mRNA stabilization effect and contributes additively to net surface LDLR increase. Cross-link: [[pcsk9]]. One sentence: the PCSK9 effect compounds the Kong 2004 mRNA stabilization to increase surface LDLR via two independent routes.

## Primary effects (direct biomarker changes)

These are measurable molecular and clinical biomarker changes that follow directly from the mechanisms above.

### Lipid panel

| Biomarker | Effect | Magnitude | Key sources |
|---|---|---|---|
| LDL-C | ↓ | ~15–25% (pooled ~20%) | Kong 2004 [^kong2004]; Derosa 2013 [^derosa2013]; Yang 2023 meta [^yang2023] |
| ApoB | ↓ | Proportional to LDL-C | Derosa 2013 [^derosa2013]; Yang 2023 meta [^yang2023] |
| Total cholesterol | ↓ | ~15% | Yang 2023 meta [^yang2023] |
| Triglycerides | ↓ | ~20–25% | Derosa 2013 [^derosa2013] |
| HDL-C | ↑ | ~5% (small) | Yang 2023 meta [^yang2023] |

The ~20% LDL-C reduction is approximately half the potency of moderate-dose statins (~40%), but the mechanism is non-overlapping, making combination rational. Yang 2023 meta (n=44 RCTs for lipid endpoints; n=13 RCTs for IMT) reports consistent lipid effects across studies [^yang2023].

### Glycemic markers

| Biomarker | Effect | Magnitude | Key sources |
|---|---|---|---|
| Fasting glucose | ↓ | ~15–20 mg/dL (in T2D) | Yin 2008 [^yin2008] |
| HbA1c | ↓ | ~0.5–1.0% (in T2D) | Yin 2008 [^yin2008]; Lan 2015 meta [^lan2015] |
| HOMA-IR | ↓ | Significant | Yin 2008 [^yin2008] |

Head-to-head vs metformin (500 mg TID each, 3-month duration): comparable glycemic reduction in Chinese T2D patients [^yin2008]. Berberine is not FDA/EMA-approved as a glucose-lowering agent.

### Inflammatory and vascular biomarkers

- **Plasma TMAO**: ↓ in hyperlipidemic patients in the Ma 2022 human sub-study [^ma2022] — direct readout of CutC/D inhibition.
- **hsCRP**: ↓ in acute ischemic stroke patients on berberine + atorvastatin vs atorvastatin alone at 30 days [^zhu2015]. Yang 2023 meta also reports anti-inflammatory signal across pooled studies [^yang2023].
- **Adipocyte fatty acid binding protein (A-FABP)**: ↓ at 30 days in stroke patients on berberine + atorvastatin [^zhu2015]. #gap/needs-replication — single study, Chinese journal, limited accessibility.
- **Akkermansia muciniphila abundance**: ↑ in gut microbiome of treated mice and humans [^ma2022].

## Downstream effects (clinical and aging-relevant endpoints)

### Atherosclerotic plaque — early signal, methodologically limited

**The mechanistic case** for berberine reducing atherosclerotic burden is strong by proxy: ~20% LDL-C reduction (Kong 2004, Yang 2023) combined with TMAO suppression (Ma 2022) and JAK2/STAT3-dependent VSMC phenotype preservation (Zheng 2025) converge on established atherogenesis drivers. Lowering ApoB-particle burden reduces atherosclerosis — this is robustly established from statin (CTT consortium) and PCSK9 inhibitor trials and needs no new proof of principle.

**The direct IMT evidence** is weaker than the mechanism story suggests, and a subtle methodological point matters:

Ma 2022's human sub-study (n=21 atherosclerosis patients, 4 months of oral berberine 1 g/day) was **open-label and non-randomized**, with a parallel non-randomized statin reference arm (n=12) [^ma2022]. The clinically significant endpoint reported was the composite **carotid plaque score** (sum of plaque thicknesses across 12 carotid positions) — which decreased −3.2% in the berberine arm (6.57 → 6.36 mm; one-tailed paired t-test p<0.05; 12/21 patients improved, 3 unchanged, 6 worsened). **Carotid IMT itself** decreased a numerically identical 3.2% (2.81 → 2.72 mm) but **was NOT statistically significant (P=0.067)**.

This distinction matters because secondary literature (and the YouTube source that prompted this page) often reports the −3.2% effect as "IMT reduction" — Ma 2022's actually-significant endpoint was the composite plaque score, not IMT. The mouse model (golden hamsters, not ApoE−/−, despite frequent secondary attribution) showed robust IMT_max reduction of 22% (100 mg/kg) and 29% (200 mg/kg) at 3 months.

The Yang 2023 meta-analysis (13 RCTs on IMT, 44 RCTs on lipid endpoints) is the largest evidence aggregation, but a critical methodological concern: a review of the 13 IMT studies used in Yang 2023 found that multiple contributing trials were published in regional Chinese journals not indexed in major English-language databases, making source verification difficult [^yang2023]. #gap/contradictory-evidence — the pooled IMT estimate is plausible but the component studies cannot be independently cross-checked.

**Honest framing:** The most defensible clinical claim is the ApoB/LDL-C reduction (well-documented) → reduced atherosclerotic burden (inferred from the established ApoB-CVD causal relationship). Direct plaque-reversal evidence in humans is insufficient to make a strong claim. Tag: #gap/needs-replication.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — LDLR mRNA stabilization, TMAO-CutC/D axis |
| IMT reduction replicated independently? | Partial — Yang 2023 meta includes inaccessible component studies |
| Prospective CV-outcome RCT in Western population? | No |

### Colorectal adenoma prevention — strongest human signal

This is arguably berberine's most impressive human evidence and the least confounded by the mechanism-complexity concerns above.

**Chen 2020 (Lancet Gastroenterol Hepatol; CBAR trial; NCT02226185)** — multicenter, double-blind, placebo-controlled RCT across 7 Chinese clinical centers; **n=891 evaluable** (429 berberine, 462 placebo) of 895 enrolled, adults with prior colorectal adenoma on colonoscopy; **berberine HCl 300 mg BID (600 mg/day) versus placebo for up to 2 years post-polypectomy**. Primary outcome: adenoma recurrence on follow-up colonoscopy. **Result: RR 0.77 (95% CI 0.66–0.91, p=0.001) — 23% relative risk reduction** [^chen2020]. Advanced-adenoma recurrence reduced by approximately 50% (precise CI/p not extracted from abstract; verify in PDF). Berberine well tolerated; constipation the main adverse event.

**Tan 2025 (Cell Rep Med; CBAR-FE extension)** — 6-year post-treatment observational followup of the Chen 2020 cohort; **n=648** with follow-up colonoscopy (314 original berberine, 334 original placebo arm) from 781 contactable participants. After berberine discontinuation:
- **Any adenoma recurrence (primary): adjusted HR 0.58 (95% CI 0.45–0.74, p<0.001)** — effect strengthened over time (OR 0.50 beyond year 5 vs OR 0.63 at years 3–5)
- **Any colorectal neoplasm: adjusted HR 0.75 (95% CI 0.62–0.91, p=0.004)**
- **Advanced adenoma: adjusted HR 0.99 (p=0.57) — NULL** (only 13 events berberine vs 17 placebo; underpowered)
- Kaplan-Meier at 5.2 years: 35.5% of berberine arm neoplasm-free vs 24.0% placebo [^tan2025]

The non-significant advanced-adenoma result is the critical caveat the secondary literature often omits: the durable effect is on low-grade lesion recurrence, not on the highest-risk precursors. The durable protection after drug withdrawal is nonetheless striking and is most consistent with **sustained gut microbiome remodeling** (once established, a shifted ecology may persist). AKK enrichment documented in Ma 2022 is mechanistically plausible as the mediator.

**Caveats (important):**
1. Both Chen 2020 and Tan 2025 are China-only studies; the gut microbiome is highly diet-dependent, and the CRC-prevention effect may not generalize to Western populations with different dietary patterns and baseline microbiome composition. #gap/needs-replication
2. The post-trial followup is observational — the randomization no longer protects against confounding from year 3 onwards.
3. The non-significant advanced-adenoma HR in Tan 2025 (the clinically most-relevant precursor) is a meaningful limitation — the durability claim rests on lower-grade recurrence prevention, not on prevention of the highest-risk lesions.
4. The specific dominant pathway (Wnt suppression? JAK/STAT? microbiome-mediated metabolite reduction? direct anti-proliferative?) is not established. #gap/no-mechanism

**Proposed mechanisms for CRC prevention:**
- Direct inhibition of pro-proliferative pathways in colonocytes (Wnt, JAK/STAT) — in vitro evidence exists but translational relevance at 600 mg/day luminal berberine is unquantified
- Sustained microbiome remodeling — consistent with Tan 2025 durability signal
- Reduced systemic inflammation — hsCRP reduction may reflect reduced colonic mucosal inflammation #gap/no-mechanism

### MASLD / NAFLD — primary endpoints failed; lipid + inflammatory secondaries positive

**Lei 2026 BRAVO trial (JAMA Netw Open; PMID 41543854)** [^lei2026]: multicenter RCT across 11 Chinese hospitals; **n=337 randomized** (169 berberine, 168 placebo); diabetes-free adults with obesity and MASLD; berberine 1 g/day vs placebo for 6 months. **Both arms also received individualized lifestyle counseling** (the active comparator confound emphasized below).

**Co-primary endpoints — NEGATIVE:**

| Endpoint | Berberine | Placebo | Between-group difference (97.5% CI) | p |
|---|---|---|---|---|
| VAT area relative change | −0.6% | −2.0% | +1.38% (−2.43 to +5.18) | 0.42 |
| Liver fat absolute change | +0.1 pp | −1.1 pp | +0.87 pp (−0.39 to +2.13) | 0.12 |

**Secondary endpoints — POSITIVE:**

| Endpoint | Berberine vs placebo difference | 95% CI | p |
|---|---|---|---|
| LDL-C | −7.72 mg/dL | −13.13 to −1.93 | **0.008** |
| ApoB | −3.42 mg/dL | −6.33 to −0.51 | **0.02** |
| hs-CRP | −0.072 mg/dL | −0.140 to −0.004 | **0.04** |
| Weight, BMI, waist, HbA1c, fasting glucose, TG | — | — | NS (all p>0.05) |

Both arms lost ~1.9 kg via the lifestyle co-intervention, eliminating between-arm separation on body-composition endpoints. The lipid-lowering separation (LDL-C, ApoB) — small in absolute terms but statistically robust — **survived this active comparator** and is mechanism-driven (LDLR mRNA stabilization, post-transcriptional and independent of weight loss). See [[studies/lei-2026-bravo-berberine-masld]] for full design.

**Interpretation:** This is an informative failure. It confirms that berberine's metabolic effects in non-diabetic MASLD patients are **primarily cholesterol-mediated rather than adiposity-mediated**, and that AMPK activation (the mechanism proposed to reduce adiposity) is either insufficient at clinical doses or mediated locally in the gut without systemic fat-mobilizing consequence when measured against a lifestyle-active comparator. The hs-CRP reduction (small but significant) is a novel finding consistent with anti-inflammatory secondary effect. #gap/contradictory-evidence — the BRAVO body-composition failure conflicts with prior meta-analytic evidence for berberine's weight/adiposity effects (which mostly compared berberine vs no intervention, not vs lifestyle).

### Glycemic control in T2D

Berberine produces glycemic effects comparable to metformin in head-to-head Chinese RCTs at 1,500 mg/day (500 mg TID) [^yin2008]. Magnitude: ~0.5–1.0% HbA1c reduction over 3 months. However:
- Berberine is not approved as a T2D drug in US or EU — it is sold as a supplement
- Regulatory-grade pivotal trials have not been conducted outside China
- Metformin remains first-line for T2D management with decades of safety data

Cross-link: [[type-2-diabetes]], [[metformin]].

### Aging-relevant hallmark integration

Berberine engages three hallmarks with documented human signals:

| Hallmark | Mechanism | Human evidence quality |
|---|---|---|
| [[deregulated-nutrient-sensing]] | AMPK activation; GLP-1 secretion | Limited — Chinese RCTs; glycemic endpoints |
| [[chronic-inflammation]] | hsCRP reduction; TMAO suppression | Limited — RCT subsets |
| [[dysbiosis]] | TMAO-axis suppression; AKK enrichment; CRC prevention | Limited to moderate — Chen 2020 RCT; Ma 2022 sub-study |

**Hallmarks NOT directly engaged** (important to avoid overreach):
- Genomic instability — no direct evidence
- Telomere attrition — no direct evidence
- Epigenetic alterations — no direct evidence
- Loss of proteostasis — indirect via AMPK → autophagy, but no autophagy-flux or proteostasis human data
- Stem cell exhaustion — no direct evidence

**Lifespan and aging-specific trial data:** Berberine has **no** Interventions Testing Program (ITP) lifespan data, no DrugAge entry with lifespan-extension evidence, and no equivalent of the TAME trial in design. Preclinical rodent lifespan studies are sparse and not from NIA-ITP-quality protocols. Distinguished from [[metformin]] where the observational mortality signal (Bannister 2014) and mouse lifespan data (Martin-Montalvo 2013) are more developed. This is the most important honest caveat: berberine's evidence base is metabolic/microbiome, not longevity per se.

## Pharmacokinetics and dosing

**Key PK parameters:**

| Parameter | Value | Source |
|---|---|---|
| Oral bioavailability | ~0.68% | Liu 2010 [^liu2010] |
| Primary elimination route | Gut wall / hepatic first-pass | Liu 2010 [^liu2010] |
| Active metabolites | Berberrubine, thalifendine, demethyleneberberine, jatrorrhizine | Liu 2010 [^liu2010] |
| Estimated plasma half-life | ~28 h (berberine + metabolites combined) | Based on Drug Metab Dispos data; #gap/needs-verification |
| Tissue distribution | Favors liver, adipose, intestinal wall | |
| Drug transporter interactions | P-glycoprotein substrate; OCT1/OCT2 substrate | |

**Doses by indication (all as berberine HCl):**

| Indication | Dose | Schedule | Key source |
|---|---|---|---|
| Lipid-lowering | 500 mg | BID (1,000 mg/day) | Kong 2004 [^kong2004]; Derosa 2013 [^derosa2013] |
| Glycemic control (T2D) | 500 mg | TID (1,500 mg/day) | Yin 2008 [^yin2008] |
| CRC adenoma prevention | 300 mg | BID (600 mg/day) | Chen 2020 [^chen2020]; Tan 2025 [^tan2025] |
| Atherosclerosis trials | 500 mg | BID (1,000 mg/day) | Ma 2022 [^ma2022] |

The lower CRC adenoma dose (600 mg/day vs 1,000 mg/day for lipids) makes sense mechanistically: the relevant CRC target is the gut lumen, where luminal berberine concentrations far exceed systemic — a 300 mg BID dose likely delivers very high luminal exposure at the colonic mucosa.

## Drug interactions and safety

### CYP3A4 inhibition (clinically significant)

Berberine inhibits CYP3A4 in vitro and at clinical doses. This increases plasma exposure of CYP3A4 substrates:
- **Statins metabolized by CYP3A4** (simvastatin, atorvastatin, lovastatin): increased statin AUC → elevated rhabdomyolysis risk. Paradoxically, berberine is often combined with statins for additive LDL-C lowering — if so, use lower statin doses and monitor for myopathy.
- **Calcineurin inhibitors** (cyclosporine, tacrolimus): narrow therapeutic index; berberine co-administration can cause toxicity.
- **Macrolides** (clarithromycin), **azole antifungals**: not typical aging-medicine concerns but relevant for users on polypharmacy regimens.

### P-glycoprotein inhibition

Berberine inhibits P-glycoprotein, increasing AUC of P-gp substrates including **digoxin** (narrow therapeutic index — potentially dangerous) and some chemotherapy agents.

### Gastrointestinal effects

Consistent with metformin class: dose-dependent diarrhea, cramping, abdominal discomfort. Usually transient. Dose reduction generally resolves symptoms. The mechanism is likely related to direct luminal effects on gut motility and microbiome perturbation.

### Pregnancy contraindication

**Absolutely contraindicated in pregnancy.** Berberine displaces bilirubin from albumin → neonatal kernicterus risk. This is well-documented in the traditional medicine and neonatal literature.

### Long-term safety

The Tan 2025 6-year followup of Chen 2020 is the longest available human safety signal for berberine — no excess serious adverse events were reported in the berberine arm. However, 6 years is a short window for a supplement targeting aging endpoints where decades of use might be envisioned. #gap/long-term-unknown

### Regulatory classification

**Variable by jurisdiction:**
- United States: dietary supplement (not FDA-approved drug); regulated as a supplement under DSHEA
- China: classified and used as a prescription drug (for T2D, dyslipidemia, GI infections) under NMPA
- European Union: varies by country; generally supplement or herbal medicine
- No major-market FDA/EMA approval for any cardiometabolic indication

## Comparative positioning

| Compound | Primary target | LDL-C effect | Glucose effect | Mechanism uniqueness | Aging-evidence quality | Safety |
|---|---|---|---|---|---|---|
| **Berberine** | LDLR mRNA + gut microbiome | ↓ ~20% | ↓ moderate | High (post-transcriptional + luminal) | Limited (RCT lipid/glycemic/CRC; no longevity) | Good 6yr; CYP3A4 interaction |
| **[[metformin]]** | Complex I + AMPK | Neutral | ↓ strong | High (Complex I + microbiome) | Moderate (observational mortality; TAME pending) | Very well-established |
| **Statins** | HMGCR | ↓ 30–50% | Diabetogenic (slight) | Moderate (transcriptional LDLR) | Strong (outcomes trials: CTT) | Well-established; myopathy ~1–5% |
| **[[ezetimibe]]** | NPC1L1 | ↓ ~15–20% | Neutral | High (intestinal absorption blockade) | Strong (IMPROVE-IT add-on; SHARP) | Excellent |
| **[[bempedoic-acid]]** | ACLY | ↓ ~18% | Neutral | High (ACLY → no muscle SAMS) | Moderate (CLEAR Outcomes) | Good (gout risk +) |

**Berberine vs metformin for aging:** Both activate AMPK via Complex I. Metformin has far more aging-specific evidence (Bannister 2014 mortality; TAME Phase 3 trial; ITP rodent data). Berberine's advantage is the gut-microbiome/CRC axis, which metformin does not share. Neither should be presented as equivalent to the other for aging endpoints.

## Recency literature check (2021–2026)

Recency search conducted via PubMed eutils 2026-05-18: queries "berberine AND (meta-analysis OR RCT OR systematic review)" 2021–2026 and "berberine AND (colorectal adenoma OR atherosclerosis OR MASLD)" 2024–2026.

**Key findings:**

- **BRAVO trial (Lei 2026, PMID 41543854, JAMA Netw Open)** [^lei2026]: Primary endpoint (adiposity) NEGATIVE. Integrated above. Materially changes the picture for berberine-as-adiposity-reducer in MASLD.
- **Tan 2025 (PMID retrieved; Cell Rep Med, doi:10.1016/j.xcrm.2025.102293)** [^tan2025]: 6-year CRC-adenoma followup. Integrated above. Strengthens the CRC-prevention signal substantially.
- **Zheng 2025 (doi:10.1016/j.ejphar.2025.178234)** [^zheng2025]: JAK2/STAT3 in VSMC. New mechanistic insight integrated above.
- **PMID 42043671 (Chinese Journal of Integrative Medicine, April 2026)**: Berberine promotes mitochondrial biogenesis via SIRT1/PGC-1α in atherosclerosis. Adds mechanistic detail on AMPK→PGC-1α arm; no new clinical data. Not integrated as primary citation (Chinese medicine journal; weight accordingly).
- **No new multi-region pivotal RCT** on atherosclerotic outcomes or CRC prevention published 2024–2026. The field awaits a definitive non-Chinese-population trial.

No recency findings contradicted the training-era evidence base; BRAVO represents a new null result rather than a contradiction of existing positive signals (prior evidence for adiposity reduction was mostly meta-analytic/smaller studies, not from a dedicated powered RCT in MASLD).

## Open questions and gaps

- **#gap/needs-replication** — Most IMT/plaque data comes from trials in remote Chinese journals with limited accessibility; non-Chinese-population RCT for cardiovascular outcomes is absent.
- **#gap/no-mechanism** — Dominant pathway for durable post-discontinuation CRC adenoma prevention (Tan 2025) is uncharacterized; microbiome reprogramming is plausible but not demonstrated mechanistically.
- **#gap/no-mechanism** — How does berberine at 0.68% oral bioavailability produce systemic lipid changes? The LDLR mRNA mechanism requires hepatic exposure; whether trace hepatic concentrations suffice, whether active metabolites carry more, or whether enteric AMPK plays a role is unresolved.
- **#gap/long-term-unknown** — Safety and efficacy beyond 6 years (current maximum from Tan 2025 followup) unknown; lifespan-extension data nonexistent.
- **#gap/contradictory-evidence** — BRAVO primary endpoint failure on adiposity vs secondary lipid wins; pre-BRAVO smaller studies suggested weight/adiposity reduction. Meta-analytic IMT source-traceability problem (Yang 2023 component studies inaccessible).
- **#gap/needs-human-replication** — All aging-specific hallmark engagement is inferred from surrogate markers (hsCRP, TMAO, AKK enrichment); no aging-endpoint RCT (disability-free survival, functional decline, biological age clock) exists for berberine. No ITP or equivalent rodent lifespan study.
- **#gap/dose-response-unclear** — The difference between the CRC adenoma dose (600 mg/day) and the lipid-lowering dose (1,000 mg/day) suggests different dose-response relationships for different mechanisms; the optimal dose for any single indication is not rigorously defined.

## See also

- [[interventions/pharmacological/ampk-activators]] — class page; berberine discussed as member
- [[metformin]] — mechanistic neighbor; more aging-specific evidence
- [[ldlr]] — primary molecular target of LDLR mRNA stabilization mechanism
- [[pcsk9]] — secondary target; berberine reduces hepatic PCSK9 secretion
- [[hmgcr]] — statin target; contrast with berberine's post-transcriptional LDLR mechanism
- [[jak-stat-pathway]] — berberine suppresses JAK2/STAT3 in VSMCs
- [[ampk]] — central kinase in berberine's indirect activation pathway
- [[mtor]] — downstream of AMPK; suppressed by berberine via Raptor/TSC2
- [[akkermansia-muciniphila]] — gut microbe enriched by berberine treatment
- [[firmicutes-bacteroidetes-ratio]] — broader microbiome shift context
- [[microbiome/gut-microbiome-aging-shifts]] — process page for dysbiosis context
- [[gut-barrier]] — berberine's luminal effects may modulate gut barrier integrity; see process page
- [[lipoprotein-metabolism]] — pathway context for LDL-C/ApoB effects
- [[chronic-inflammation]] — hallmark targeted via hsCRP/TMAO axis
- [[dysbiosis]] — hallmark targeted via microbiome remodeling
- [[deregulated-nutrient-sensing]] — hallmark targeted via AMPK/GLP-1 axis
- [[atherosclerosis]] — primary downstream phenotype of interest
- [[type-2-diabetes]] — glycemic indication
- [[cancer]] — CRC adenoma prevention (Chen 2020 / Tan 2025)
- [[ezetimibe]] — mechanistic comparator (intestinal lipid-absorption blockade vs berberine's luminal-microbial mechanism)
- [[bempedoic-acid]] — mechanistic comparator (ACLY inhibition)
- [[interventions/pharmacological/statins]] — primary comparator for LDL-C lowering; additive with berberine

## Footnotes

[^liu2010]: doi:10.1124/dmd.110.033936 · Liu YT, Han J, Liu BS, Wang T, Wang CZ, Chen J, Xu XL, Ma Y, Ma H, Zheng J, Jin W, Xu M · *Drug Metab Dispos* 2010;38(10):1779-1788 · in-vivo (rat) + in-vitro · model: male Sprague-Dawley rats (oral and i.v. berberine HCl) + Caco-2 cell monolayers · oral bioavailability 0.68% in rats (n=6); extensive P-gp-mediated efflux and CYP3A4/3A4 first-pass metabolism; active metabolites berberrubine, thalifendine, demethyleneberberine, jatrorrhizine identified · not_oa

[^kong2004]: doi:10.1038/nm1135 · Kong W, Wei J, Abidi P, Lin M, Inaba S, Li C, Wang Y, Wang Z, Si S, Pan H, Wang S, Wu J, Wang Y, Li Z, Liu J, Jiang JD · *Nat Med* 2004;10(12):1344-1351 · in-vitro (HepG2 cells) + in-vivo (hamster, n=20/group) + human case series (n=32 hyperlipidemic) · LDLR mRNA half-life ↑ ~3-fold in HepG2; serum cholesterol ↓ 26% in hyperlipidemic hamsters at 100 mg/kg/d × 10 d; LDL-C ↓ mean 21% (range 12–32%) in human subjects at 500 mg BID × 3 mo · model: HepG2 + hamster + human · #gap/no-fulltext-access — not_oa (archive status confirmed)

[^ma2022]: [[studies/ma-2022-berberine-tmao-atherosclerosis]] · doi:10.1038/s41392-022-01027-6 · Ma SR, Tong Q, Lin Y et al · *Signal Transduct Target Ther* 2022;7:207 · ChiCTR-OPN-17012942 · HFD-fed golden hamsters (n=37 across 6 groups; 3-month treatment) + open-label human arm n=21 atherosclerosis patients (BBR 1 g/day × 4 months) + statin reference n=12 non-randomized · hamster: IMT_max ↓ 22% (100 mg/kg, p<0.05) and 29% (200 mg/kg, p<0.01); plasma TMAO ↓ 58–64% (p<0.001); fecal TMAO ↓ up to 98% acutely · human: composite carotid plaque score ↓ 3.2% (6.57→6.36 mm, one-tailed paired t-test p<0.05, n=21); carotid IMT ↓ 3.2% (2.81→2.72 mm, P=0.067, NOT significant) · mechanism: gut-bacterial nitroreductase converts berberine → dihydroberberine (dhBBR); dhBBR inhibits bacterial CutC + gut-bacterial FMO (hepatic FMO3 unchanged); FMT confirmed microbiota-mediated · **local PDF available in a local paper archive; primary-source verified**

[^turner2008]: doi:10.2337/db07-1552 · Turner N, Li JY, Gosby A, To SW, Cheng Z, Miyoshi H, Taketo MM, Cooney GJ, Kraegen EW, James DE, Hu LH, Li J, Ye JM · *Diabetes* 2008;57(5):1414-1418 · in-vitro + in-vivo (mouse) · Complex I inhibition demonstrated in isolated muscle mitochondria; berberine raises AMP:ATP ratio and activates AMPK Thr172 phosphorylation; berberine and its derivative dihydroberberine reduce hepatic lipid accumulation · model: isolated mitochondria + male C57BL/6 mice · pending download

[^zheng2025]: doi:10.1016/j.ejphar.2025.178234 · Zheng Y et al. · *Eur J Pharmacol* 2025 · in-vitro (VSMC) + in-vivo (mouse atherosclerosis model) · JAK2/STAT3 signalling suppressed in ox-LDL-stimulated VSMCs; contractile marker retention (αSMA, SM22α); plaque stability improvement in mouse model · model: mouse VSMCs + ApoE−/− mouse · pending download

[^derosa2013]: doi:10.1517/14712598.2013.776037 · Derosa G, Maffioli P, Cicero AF · *Expert Opin Biol Ther* 2013;13(4):475-482 · randomized · n=144 low-CV-risk subjects (T2DM + elevated CV risk excluded) · berberine 500 mg TID × 8 wk · LDL-C ↓ ~17%, TG ↓ ~22%, TC ↓ ~15%; ApoB ↓ proportional to LDL-C · model: human · #gap/no-fulltext-access — pending download

[^yang2023]: doi:10.1016/j.phymed.2023.154716 · Yang Y et al. · *Phytomedicine* 2023 · meta-analysis · 44 RCTs for lipid endpoints; 13 RCTs for IMT; pooled berberine+statin ↓ IMT vs statin alone; multiple of the 13 IMT component trials in remote/inaccessible Chinese journals — source-traceability concern documented in body · model: human meta-analysis · pending download — #gap/contradictory-evidence (IMT component study accessibility)

[^zhu2015]: doi:10.3969/j.issn.1672-6731.2015.01.010 · Zhu X et al. · *Chinese Journal of Stroke* 2015 · RCT · n reported in study · acute ischemic stroke patients · berberine + atorvastatin vs atorvastatin alone × 30 d · hsCRP ↓ and A-FABP ↓ in combination arm · model: human · #gap/no-fulltext-access — DOI not registered in major English-language aggregators; Chinese journal

[^chen2020]: [[studies/chen-2020-berberine-adenoma-rct]] · doi:10.1016/S2468-1253(19)30409-1 · PMID 31926918 · Chen YX, Gao QY, Zou TH, Wang BM, Liu SD, Sheng JQ, Ren JL, Zou XP, Liu ZJ, Lv B, Dou XT, Cao HL, Yang XN, Sun XM, Yao J, Lu W, Chen HM, Yin J, Fang JY · *Lancet Gastroenterol Hepatol* 2020;5(3):267-275 · CBAR trial (NCT02226185); multicentre double-blind RCT across 7 Chinese centers · n=891 evaluable (429 berberine, 462 placebo) of 895 enrolled, adults with prior colorectal adenoma history · 300 mg BID berberine (600 mg/day) × up to 2 y vs placebo post-polypectomy · adenoma recurrence RR 0.77 (95% CI 0.66–0.91, p=0.001); advanced adenoma reduction ~50% · model: human · #gap/no-fulltext-access — not_oa (archive confirmed); abstract verified via PubMed efetch

[^tan2025]: [[studies/tan-2025-berberine-adenoma-6yr-followup]] · doi:10.1016/j.xcrm.2025.102293 · PMC12490254 · Tan YJ, Zou TH, Yu K, Sheng JQ, Jin P, Zhang MJ, Zou XP, Dou XT, Liu SD, Huang SH, Ren JL, Yang XN, Liu ZJ, Sun XM, Wang BM, Cao HL, Zhang YX, Gao QY, Chen HM, Cui Y, Chen YX, Fang JY · *Cell Rep Med* 2025;6:102293 · CBAR-FE prospective 6-yr post-treatment observational follow-up of Chen 2020 cohort · n=648 with follow-up colonoscopy (314 berberine, 334 placebo) from 781 contactable · any-adenoma recurrence adjusted HR 0.58 (95% CI 0.45–0.74, p<0.001); any-neoplasm adjusted HR 0.75 (0.62–0.91, p=0.004); **advanced-adenoma adjusted HR 0.99 (p=0.57) — NULL**; effect strengthens over time · model: human (Chinese cohort; post-trial observational) · PMC full text verified

[^lei2026]: [[studies/lei-2026-bravo-berberine-masld]] · doi:10.1001/jamanetworkopen.2025.54152 · PMID 41543854 · PMC12811813 · Lei L, Wang B, Zhao L et al; BRAVO Collaborative Group · *JAMA Netw Open* 2026;9(1):e2554152 · multicenter RCT (11 Chinese hospitals); n=337 randomized (169 berberine, 168 placebo); 6 months · diabetes-free adults with obesity + MASLD; berberine 1 g/day vs placebo, both arms received lifestyle counseling · co-primary endpoints NEGATIVE: VAT diff +1.38% (p=0.42), liver fat diff +0.87 pp (p=0.12); secondary endpoints POSITIVE: LDL-C −7.72 mg/dL (p=0.008), ApoB −3.42 mg/dL (p=0.02), hs-CRP −0.072 mg/dL (p=0.04) · model: human · PMC full text verified

[^yin2008]: doi:10.1016/j.metabol.2008.01.013 · Yin J, Xing H, Ye J · *Metabolism* 2008;57(5):712-717 · RCT · n=97 patients with T2DM · berberine 500 mg TID × 3 mo vs metformin 500 mg TID (head-to-head) · fasting glucose ↓ ~15 mg/dL; HbA1c ↓ 0.7–0.9%; HOMA-IR ↓; comparable to metformin arm · model: human · pending download

[^lan2015]: doi:10.3390/nu7075209 · Lan J, Zhao Y, Dong F, Yan Z, Zheng W, Fan J, Sun G · *Nutrients* 2015;7(7):5767-5787 · meta-analysis · 27 RCTs · HbA1c ↓ weighted mean -0.71% (95% CI -0.91 to -0.51) vs control; FBG ↓; TG ↓ · model: human meta-analysis · open-access

[^cameron2008]: doi:10.1016/j.atherosclerosis.2007.01.028 · Cameron J, Ranheim T, Kulseth MA, Leren TP, Berge KE · *Atherosclerosis* 2008;201(2):452-455 · in-vitro (HepG2 cells) · berberine reduces PCSK9 mRNA and secretion; LDLR protein increases; mechanism partially mediated by HNF1α · model: HepG2 cells · pending download

[^yu2010]: doi:10.1016/s1875-5364(10)60004-4 · Yu HY, Ying M, Ying M, Zhou N, Zhao YZ, Shan X · *Chin J Nat Med* 2010 (approximated; original paper in Chinese pharmacology literature) · in-vitro / in-vivo · berberine stimulates GLP-1 secretion from intestinal L-cells; incretin-mediated insulin secretion enhancement · model: rodent intestinal perfusion + L-cell culture · #gap/no-fulltext-access — note: Yu 2010 DOI assigned from brief; verify DOI accuracy against primary source; #gap/needs-verification
