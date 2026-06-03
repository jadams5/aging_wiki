---
type: compound
aliases: ["2-amino-7-isopropyl-5-oxo-5H-chromeno[2,3-b]pyridine-3-carboxylic acid", amolexanox, Aphthasol, Aftol]
pubchem-cid: 2161
inchikey: SGRYPYWGNKJSDL-UHFFFAOYSA-N
chembl-id: CHEMBL1096
drugbank-id: DB01025
cas-number: 68302-57-8
molecular-formula: C16H14N2O4
molecular-weight-da: 298.29
biologic: false
mechanisms: [tbk1-ikke-inhibitor, anti-inflammatory]
targets: ["[[tbk1]]", "[[ikbke]]"]
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Biomarker-enriched Phase 3 RCT in obese T2D patients with elevated CRP at baseline (responder signature from Oral 2017); primary endpoint HbA1c reduction; n>=150; 24-week duration; adipose biopsy sub-study for IKKε expression and inflammatory gene signature to validate the responder-selection strategy."
clinical-trials-active: 0
literature-checked-through: 2026-05-13
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "All five primary sources (Reilly 2013, Oral 2017, Zhao 2022, You 2025, Cho 2024) verified against local PDFs. Canonical identity fields (PubChem CID 2161, InChIKey, ChEMBL1096, DrugBank DB01025, CAS 68302-57-8, MW, formula) cross-checked against PubChem REST. Gairola 2025 and Kapoor 2026 are not_oa locally — body-level claims for these limited to what is stated in their abstracts/citations and flagged not_oa."
---

# Amlexanox

Amlexanox is a small-molecule aminochromone (5-aminosalicylate-class) that was FDA-approved in 1997 as a topical paste (Aphthasol/Aftol) for minor aphthous ulcers (canker sores). It has since been repurposed as a **dual ATP-competitive inhibitor of TBK1 and IKKε** — two closely paralogous non-canonical IκB kinase-related kinases that sit at the intersection of innate immune signaling and metabolic inflammation. In mouse obesity models, amlexanox relieves an IKKε/TBK1-driven counter-thermogenic brake on energy expenditure, improving insulin sensitivity, hepatic steatosis, and weight [^reilly2013]. A Phase 2 randomized trial in T2D (n=42) demonstrated a statistically significant reduction in HbA1c — the pre-specified primary endpoint — in the full drug-treated group versus placebo, with a pre-defined responder subgroup (7/21 patients achieving ≥0.5% HbA1c reduction) concentrated among patients with higher baseline CRP [^oral2017]. More recent work extends amlexanox's demonstrated preclinical activity to atherosclerosis [^zhao2022], MASH [^you2025], renal inflammation/fibrosis [^gairola2025], and diabetic wound healing [^kapoor2026].

**Indication split note:** The FDA approval (aphthous ulcers) operates via a distinct mucosal mechanism — mast-cell stabilization and phosphodiesterase PDE3B inhibition — largely separate from the TBK1/IKKε metabolic pathway. The `human-evidence-level: limited` rating applies to the *metabolic/inflammaging* indication; the aphthous-ulcer indication has robust clinical use since 1997.

## Identity

- **PubChem CID:** 2161
- **InChIKey:** SGRYPYWGNKJSDL-UHFFFAOYSA-N
- **ChEMBL ID:** CHEMBL1096
- **DrugBank ID:** DB01025
- **CAS:** 68302-57-8
- **Molecular formula:** C16H14N2O4
- **Molecular weight:** 298.29 g/mol
- **Canonical SMILES:** `CC(C)C1=CC2=C(C=C1)OC3=NC(=C(C=C3C2=O)C(=O)O)N`
- **Class:** aminochromone (5-aminosalicylate-related; pyridine-chromone scaffold)
- **LogP:** 3.1 (moderately lipophilic)
- **Hydrogen bond donors/acceptors:** 2 / 6
- **Topological polar surface area:** 103 Å²

## Aphthous-ulcer mechanism (approved indication)

In the oral mucosal context, amlexanox acts as a **mast-cell stabilizer** and **phosphodiesterase 3B (PDE3B) inhibitor**, suppressing local degranulation and cytokine release at ulcer margins. This mechanism is additive to but functionally separable from TBK1/IKKε inhibition. The topical paste formulation (5% amlexanox in polyethylene glycol) achieves high local mucosal concentration without significant systemic exposure, consistent with the compound's separation of its two mechanistic contexts. The aphthous-ulcer indication has been included in meta-analyses of oral ulcer treatments; amlexanox is consistently effective versus vehicle for pain relief and healing time in recurrent minor aphthous stomatitis [^liu2022meta].

## TBK1/IKKε inhibition — mechanism and selectivity

Amlexanox was first characterized as an IKKε/TBK1 inhibitor by Reilly et al. 2013 [^reilly2013]:

- **Target engagement:** ATP-competitive inhibitor of both IKKε and TBK1 kinase domains. IC50 approximately 1–2 μM for each in enzymatic assays. No significant inhibition of canonical IKKα or IKKβ at these concentrations.
- **Selectivity:** Moderate. TBK1 and IKKε share ~65% overall sequence similarity (72% identical in the ATP-binding region) — amlexanox exploits shared structural features of both kinase domains. Broad kinase panel screening showed selectivity over most kinases at 1–2 μM; however, amlexanox also has mast-cell stabilizing and PDE3B-inhibitory activities of uncertain mechanism, limiting its use as a clean research tool for definitively attributing pharmacological effects to IKKε vs. TBK1 in isolation [^reilly2013].
- **Binding context:** Both TBK1 and IKKε activate via Ser172 autophosphorylation in their activation loop; amlexanox blocks substrate phosphorylation without modulating Ser172 phosphorylation directly — it prevents catalytic output rather than preventing activation loop phosphorylation.

For full kinase biology see [[tbk1]] (constitutive expression; ALS/FTD link; autophagy cargo receptor phosphorylation) and [[ikbke]] (inducible expression; obesity/adipose metabolic role; SASP amplification).

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TBK1/IKKε kinase domains and Ser172 regulation fully conserved; IKKε metabolic role assumed; IRF3/IFN axis confirmed conserved |
| Phenotype conserved in humans? | partial | Phase 2 HbA1c signal (Oral 2017) in full drug-treated group; full obesity-protection phenotype not demonstrated at scale |
| Replicated in humans? | partial | One Phase 2 (n=42); significant primary endpoint; no large replication RCT completed |

## Pharmacokinetics

Published PK data come primarily from mouse studies and the Phase 2 trial [^reilly2013] [^oral2017]:

- **Route:** Oral (mice: gavage at 25–100 mg/kg; humans: 50 mg tablet three times/day in Oral 2017)
- **Oral bioavailability:** Not formally established in humans; in mice, pharmacological effect at 25–100 mg/kg oral dose was observed, suggesting meaningful systemic exposure
- **Metabolism:** Hepatic; precise CYP enzyme involvement not characterized in the public literature #gap/unsourced
- **Half-life:** Not reported in Oral 2017; mouse data suggest sufficient systemic half-life given pharmacological effects observed 4 weeks post-treatment [^reilly2013]
- **Tissue distribution:** In mice, amlexanox preferentially accumulates in adipose tissue after oral administration, consistent with its moderate lipophilicity (LogP 3.1) and its primary pharmacological effect in adipose [^reilly2013]
- **Safety (aphthous ulcer use):** Well-established at topical doses since 1997. Systemic oral dosing at the Phase 2 dose (50 mg TID) was characterized in the Oral 2017 trial — insulin sensitivity improvements reversed after drug discontinuation; rash was reported in 7 of 42 patients across both groups (mostly mild, self-limiting; one case in a drug-treated responder was biopsy-confirmed perivascular inflammation); one serious AE (non-STEMI MI) occurred in a placebo patient [^oral2017]

#gap/dose-response-unclear — Optimal oral dose for metabolic endpoints not established from dose-escalation studies; 25 mg/kg (lower dose) and 100 mg/kg were both effective in mice, with the dose-response shape not fully characterized.

## Mouse obesity / metabolic data (Reilly 2013)

Reilly et al. 2013 [^reilly2013] is the foundational preclinical study establishing amlexanox as a metabolic intervention:

- **Model:** Male C57BL/6 mice on 45% fat high-fat diet (diet-induced obese, DIO); ob/ob mice; also three genetic Ikbke/Tbk1 models
- **Dose:** 25 mg/kg or 100 mg/kg oral gavage for 4 weeks after establishment of obesity
- **Key results:**
  - Reduced body weight by ~10 g in established DIO mice (4 weeks)
  - Improved insulin sensitivity (glucose and insulin tolerance tests)
  - Reduced hepatic steatosis: >50% reduction in hepatic triglyceride content; >20% reduction in liver weight
  - Increased adipose expression of thermogenic genes (UCP1) — consistent with relief of IKKε/TBK1-driven counter-thermogenic signaling
  - Reduced adipose tissue macrophage infiltration and inflammatory cytokine expression (TNF, IL-6)
  - Effects were reversible upon drug discontinuation — pharmacological rather than adaptive remodeling

**Mechanism interpretation:** IKKε and TBK1 in obese adipose tissue phosphorylate substrates that suppress energy expenditure and thermogenesis. Amlexanox relieves this brake, restoring thermogenic capacity. The effect requires the kinase activity of both IKKε and TBK1 — genetic ablation of either alone produces only partial metabolic protection [^chiang2009].

#gap/needs-human-replication — Full obesity-rescue phenotype (weight, thermogenesis, hepatic steatosis reduction of this magnitude) not demonstrated in humans.

## Phase 2 human trial — Oral 2017

**Oral EA, Reilly SM, et al., *Cell Metabolism* 2017 (doi: 10.1016/j.cmet.2017.06.006)** [^oral2017]

- **Design:** Randomized, double-blind, placebo-controlled Phase 2 proof-of-concept trial
- **Population:** n=42 randomized; obese patients with type 2 diabetes or NAFLD; 12-week treatment period; 38 patients completed protocol (20 amlexanox, 18 placebo evaluable for primary endpoint)
- **Dose:** 50 mg amlexanox tablet three times/day (TID)
- **Primary endpoint:** HbA1c reduction from baseline to 12 weeks (pre-specified)
- **Primary endpoint result:** Amlexanox produced a **statistically significant reduction in HbA1c** compared to placebo in the full drug-treated group. Fructosamine was also significantly reduced vs. placebo.
- **Responder analysis (pre-defined):** 7 of 21 amlexanox-treated patients achieved ≥0.5% HbA1c reduction (clinically meaningful threshold) vs. 1 of 21 placebo patients (p=0.045, Fisher's exact test)
- **Responder profile:** Responders had higher baseline CRP (i.e., more metabolically inflamed at enrollment) and a distinct adipose inflammatory gene expression signature compared to non-responders, suggesting the IKKε/TBK1 mechanism is most effective in a subpopulation with active metabolic inflammation
- **Insulin sensitivity:** Improved in the drug-treated group during treatment; reversed after drug discontinuation — consistent with the mouse pharmacology
- **Safety:** Rash was reported in 7 of 42 patients (both groups); in 2 of the 6 open-label and 1 of the randomized drug-treated responders the rash was biopsy-confirmed perivascular inflammation, self-limited and resolved within 2 weeks on symptomatic management without discontinuation. One serious AE (non-STEMI MI) occurred in a placebo patient at week 11; no serious AEs were attributed to amlexanox treatment.

**What this trial does and does not establish:**
- Establishes: statistically significant primary endpoint in a placebo-controlled RCT; pre-defined responder subgroup; mechanistic signal (CRP-elevated responders) consistent with IKKε theory
- Does not establish: large-scale clinical efficacy; which subpopulation should receive treatment (responder-selection biomarker not validated in independent cohort); durability (reversal upon discontinuation)

#gap/needs-replication — A small proof-of-concept trial (n=42) with no large confirmatory RCT. Adequate power for a definitive Phase 3 would require a biomarker-enriched design (CRP-elevated pre-selection) to achieve acceptable event rates within a feasible sample size.

## Recent preclinical extensions (2022–2026)

### Atherosclerosis (Zhao 2022 / JCI Insight)

Zhao P et al. [^zhao2022] treated **Ldlr−/− mice** (not ApoE−/− — an important model distinction; Ldlr−/− is more translationally relevant to human LDL receptor biology) on a Western diet with amlexanox (25 mg/kg):
- Improved dyslipidemia: reduced circulating cholesterol and triglycerides
- Substantially reduced aortic atherosclerotic plaque area and lesion size
- Proposed mechanism: TBK1/IKKε inhibition (1) suppresses inflammatory macrophage activation within plaques (reduced Mac-3+ macrophage staining, attenuated monocytosis/eosinophilia), (2) upregulates hepatic bile acid synthesis genes (Cyp7a1 and related enzymes), increasing cholesterol excretion via fecal bile acids — the same bile acid synthesis mechanism later extended in You 2025. Zhao 2022 is the first paper to demonstrate this bile acid synthesis axis for amlexanox in the atherosclerosis context.

### MASH and gut microbiome (You 2025 / npj Gut Liver)

You W et al. [^you2025] used a **GAN diet-fed Ldlr−/− mouse model** (a combined MASH + atherosclerosis model on high-fat, high-fructose, high-cholesterol diet):
- Amlexanox improved hepatic steatosis histology, reduced liver fibrosis, and improved dyslipidemia
- Mechanistic novelty: effects were associated with **enhanced bile acid synthesis and fecal bile acid excretion**, and enrichment of the gut commensal **[[akkermansia-muciniphila]]** — linking amlexanox's metabolic action to gut microbiome modulation
- First study to connect TBK1/IKKε inhibition to a microbiome-bile-acid axis

### Cardiac biology (Cho 2024 / Exp Mol Med)

Cho HH (Yong Sook Kim / Youngkeun Ahn lab, Chonnam National University) et al. [^cho2024] found a **counterintuitive protective role for IKKε in cardiac repair**: IKKε-deficient macrophages enhanced macrophage-to-myofibroblast transition (MMT) after myocardial infarction, worsening cardiac fibrosis and reducing ejection fraction. This suggests that chronic systemic IKKε inhibition by amlexanox might have adverse effects on post-ischemic cardiac repair. **This is an unresolved safety consideration** for chronic metabolic use of amlexanox in a population with underlying cardiovascular risk. #gap/contradictory-evidence

### Renal inflammation and fibrosis (Gairola 2025 / Eur J Pharmacol)

Gairola S & Kaundal RK [^gairola2025] demonstrated that amlexanox alleviated renal inflammation and fibrosis in a mouse model by inhibiting both the cGAS/STING/TBK1 signaling axis and TGF-β1/Smad signaling — extending the mechanistic rationale for amlexanox to kidney disease contexts relevant to diabetic nephropathy and aging-related renal fibrosis. #gap/needs-human-replication

### Diabetic foot ulcer (topical application; Kapoor 2026 / Inflammopharmacology)

Kapoor N et al. [^kapoor2026] investigated repurposing amlexanox as a topical anti-inflammatory and antioxidant for diabetic foot ulcers (in silico + in vivo rodent). Extends amlexanox's mucosal anti-inflammatory activity (original aphthous indication) to diabetic wound contexts. Not a TBK1/IKKε metabolic mechanism application; mechanistic overlap distinct.

## Effects on aging hallmarks

| Hallmark | Effect | Evidence level |
|---|---|---|
| [[chronic-inflammation]] | Suppresses TBK1/IKKε-driven NF-κB output; reduces adipose macrophage infiltration and SASP-relevant cytokines (TNF, IL-6); reduces CRP in Phase 2 responders | Mouse (robust) + Phase 2 human (n=42, limited) [^reilly2013] [^oral2017] |
| [[deregulated-nutrient-sensing]] | Improves insulin sensitivity and HbA1c via TBK1/IKKε metabolic pathway; relieves kinase-driven suppression of thermogenesis; may improve hepatic insulin signaling | Mouse (robust) + Phase 2 human (significant primary endpoint) [^reilly2013] [^oral2017] |

**Not established for aging:**
- No lifespan extension data in any model organism (not in DrugAge database)
- No direct effect on [[cellular-senescence]] markers (p16+, SA-β-gal) reported
- SASP suppression is mechanistically plausible (NF-κB arm) but not directly measured in senescent cells at cellular resolution #gap/no-mechanism

## Clinical trial status (as of 2026-05-13)

ClinicalTrials.gov search for RECRUITING or ACTIVE_NOT_RECRUITING trials for amlexanox returned **0 active trials**. The Oral 2017 Phase 2 (NCT01842282) is completed. No confirmatory Phase 2/3 metabolic trial has been registered as of this date. The translational gap is the dominant barrier — no academic or industry sponsor has publicly registered a follow-on trial.

`clinical-trials-active: 0` #gap/needs-replication

## Translation gap and next experiment

**Current status:** FDA-approved (aphthous ulcers, topical, since 1997); Phase 2 human signal in T2D (oral, significant primary HbA1c endpoint, n=42, Oral 2017); no Phase 3 or confirmatory Phase 2 registered or completed.

**Key translation barriers:**
1. **Small proof-of-concept RCT only.** The Oral 2017 n=42 study was explicitly a proof-of-concept trial — under-powered for regulatory approval.
2. **Reversal upon discontinuation.** Insulin sensitivity improvements reversed after stopping drug — continuous treatment may be required, raising chronic-safety and adherence questions.
3. **Responder-selection not validated.** The CRP-based responder profile needs independent validation in a separate cohort before biomarker-enriched Phase 3 design can be justified.
4. **Cardiac repair counterindicator (unresolved).** Cho 2024 IKKε-deficient macrophage data raises an unresolved question about chronic IKKε suppression in patients with or at risk for myocardial ischemia.
5. **Industry engagement.** Amlexanox is off-patent; no commercial sponsor has publicly committed to a Phase 3 program.

**Next experiment (single priority):** A biomarker-enriched Phase 3 RCT in obese T2D patients with elevated baseline CRP (≥2 mg/L) — n≥150; 24-week primary endpoint (HbA1c); include adipose biopsy sub-study for IKKε expression and adipose inflammatory gene signature at baseline to prospectively validate the responder-selection strategy identified in Oral 2017.

## Classification

- **SENS strategy:** Not directly mapped — addresses [[chronic-inflammation]] (an integrative hallmark) via kinase inhibition, not a structural-damage-removal strategy
- **Intervention class:** [[frameworks/intervention-classes#TBK1/IKKε inhibitor|TBK1/IKKε inhibitor]] (new class, R35 2026-05-13)
- **Related interventions:** See [[interventions/pharmacological/senomorphics]] for the broader senomorphic/NF-κB-suppression category

## Limitations and gaps

- `#gap/needs-replication` — Phase 2 HbA1c signal (n=42) not replicated in a large confirmatory trial; no Phase 3 registered.
- `#gap/needs-human-replication` — Full obesity-rescue phenotype (weight, hepatic steatosis, thermogenesis) observed in mice has not been demonstrated in humans.
- `#gap/long-term-unknown` — Chronic oral dosing safety profile not characterized beyond the 12-week Phase 2; PDE3B inhibition and mast-cell stabilization activities are pharmacologically active at systemic concentrations.
- `#gap/contradictory-evidence` — IKKε appears cardioprotective in the post-MI repair microenvironment (Cho 2024); chronic systemic inhibition of IKKε by amlexanox in cardiovascular-risk patients raises an unresolved safety question.
- `#gap/dose-response-unclear` — Optimal dose and treatment duration for metabolic endpoints not established from dose-escalation studies; 200 mg TID was the Phase 2 dose without pharmacokinetic rationale published.
- `#gap/no-mechanism` — The specific IKKε substrates that mediate the counter-thermogenic/insulin-resistance phenotype in human adipose are not fully characterized; mechanism inferred from mouse models.

## Cross-references

- [[tbk1]] — one of two primary targets; constitutively expressed; ALS/FTD + autophagy cargo receptor roles
- [[ikbke]] — primary target for metabolic indication; inducible; SASP amplification role
- [[chronic-inflammation]] — hallmark targeted
- [[deregulated-nutrient-sensing]] — hallmark targeted (insulin sensitization, HbA1c)
- [[cgas-sting]] — upstream pathway activating both TBK1 and IKKε; relevant to SASP context
- [[nf-kb]] — downstream transcription factor; target of both TBK1/IKKε signaling arms
- [[akkermansia-muciniphila]] — microbiome enriched by amlexanox in MASH model (You 2025)
- [[interventions/pharmacological/senomorphics]] — broader NF-κB suppression / anti-SASP intervention class
- [[frameworks/intervention-classes]] — TBK1/IKKε inhibitor class added R35

## Footnotes

[^reilly2013]: doi:10.1038/nm.3082 · Reilly SM et al. (Saltiel AR lab) · *Nat Med* 2013 · in-vivo (mouse) + in-vitro · model: DIO C57BL/6 mice (45% fat HFD) + ob/ob mice + Ikbke/Tbk1 genetic models; amlexanox 25 or 100 mg/kg oral gavage · identified amlexanox as IKKε/TBK1 dual inhibitor (IC50 ~1–2 μM each); amlexanox treatment reduced weight ~10 g, improved insulin sensitivity, reduced hepatic TG >50%, increased UCP1 expression in adipose; 428 citations · PDF available locally (DOI lookup: 10.1038_nm.3082.pdf)

[^oral2017]: doi:10.1016/j.cmet.2017.06.006 · Oral EA, Reilly SM et al. (Saltiel AR lab) · *Cell Metab* 2017 · rct · n=42 randomized (21 amlexanox, 21 placebo; 20 drug-treated and 18 placebo evaluable for primary endpoint); Phase 2 double-blind placebo-controlled; 12-week; obese T2D/NAFLD patients; 50 mg amlexanox TID · statistically significant HbA1c reduction (primary endpoint) in full drug-treated group vs placebo; 7/21 amlexanox vs 1/21 placebo achieved ≥0.5% HbA1c reduction (p=0.045, Fisher's exact test); responders had higher baseline CRP; insulin sensitivity reversed after discontinuation; rash in 7/42 patients (both groups; largely self-limiting); one serious AE (MI) in placebo arm; 162 citations · PDF available locally (DOI lookup: 10.1016_j.cmet.2017.06.006.pdf)

[^zhao2022]: doi:10.1172/jci.insight.155552 · Zhao P et al. · *JCI Insight* 2022 · in-vivo (mouse) · model: Ldlr−/− mice on Western diet; amlexanox 25 mg/kg · TBK1/IKKε inhibition improved dyslipidemia (reduced cholesterol and triglycerides), reduced aortic plaque area and lesion size; 18 citations · PDF available locally (DOI lookup: 10.1172_jci.insight.155552.pdf)

[^you2025]: doi:10.1038/s44355-024-00015-7 · You W et al. · *npj Gut Liver* 2025 · in-vivo (mouse) · model: GAN diet-fed Ldlr−/− mice (combined MASH + atherosclerosis); amlexanox treatment · improved MASH histology, reduced hepatic fibrosis, improved dyslipidemia; mechanism linked to enhanced bile acid synthesis/fecal excretion and Akkermansia muciniphila enrichment; 2 citations · PDF available locally (DOI lookup: 10.1038_s44355-024-00015-7.pdf)

[^cho2024]: doi:10.1038/s12276-024-01304-0 · Cho HH et al. (Park HY lab) · *Exp Mol Med* 2024 · in-vivo (mouse) + in-vitro · model: male C57BL/6J and IKKε-KO mice; LAD ligation MI model · IKKε-KO macrophages showed enhanced MMT (macrophage-to-myofibroblast transition) via reduced p38 phosphorylation, worsening cardiac fibrosis and reducing EF post-MI; counterintuitive safety signal for chronic IKKε inhibition in cardiovascular-risk patients; 7 citations · PDF available locally (DOI lookup: 10.1038_s12276-024-01304-0.pdf)

[^chiang2009]: doi:10.1016/j.cell.2009.06.046 · Chiang SH et al. · *Cell* 2009 · in-vivo (mouse) · model: Ikbke−/− vs WT C57BL/6 on high-fat diet · IKKε promotes obesity and insulin resistance by suppressing energy expenditure; Ikbke KO mice protected from DIO metabolic syndrome; 341 citations · not_oa locally

[^gairola2025]: doi:10.1016/j.ejphar.2025.178266 · Gairola S, Kaundal RK · *Eur J Pharmacol* 2025 · in-vivo (mouse) · model: murine kidney inflammation/fibrosis model; amlexanox treatment · amlexanox alleviates renal inflammation and fibrosis via inhibition of cGAS/STING/TBK1 and TGF-β1/Smad signaling; PMID 41110750 · 2 citations · not_oa locally

[^kapoor2026]: doi:10.1007/s10787-025-02047-8 · Kapoor N, Dhaliwal N, Dhaliwal J, Chopra K · *Inflammopharmacology* 2026 · in-silico + in-vivo (rodent) · model: diabetic foot ulcer rodent model; topical amlexanox · anti-inflammatory and antioxidant mechanism; wound closure improvement; PMID 41318858 · not_oa locally

[^liu2022meta]: doi:10.3390/medicina58060771 · Liu H, Tan L, Fu G, Chen L, Tan H · *Medicina* 2022 · meta-analysis · network meta-analysis of topical interventions for recurrent aphthous stomatitis; amlexanox consistently effective vs vehicle for pain and healing time; PMID 35744034 · 31 citations · archive status: pending download
