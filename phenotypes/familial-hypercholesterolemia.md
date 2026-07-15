---
type: phenotype
aliases: [FH, hereditary hypercholesterolemia, type IIa hyperlipoproteinemia, HeFH, HoFH]
icd-10: E78.01
icd-10-hofh: E78.02
affected-tissues: ["[[arterial-wall]]", "[[liver]]", "[[skin]]", "[[tendons]]"]
underlying-hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
typical-onset: "Premature ASCVD; HeFH events typically 40s–50s untreated, HoFH 20s untreated; biological exposure begins at birth"
prevalence-65plus: null
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Beheshti 2020 and Ibrahim 2024 verified via PubMed abstract (PDFs not downloadable — green/hybrid OA but download failed); Tromp 2022 verified against full PDF (local copy at archive); Abifadel 2003 and Abifadel 2023 verified against full PDFs (local copies at archive); Santos 2014 verified via PubMed abstract (PDF download failed); evinacumab ELIPSE HoFH data attribution corrected from Doggrell 2021 review to Raal 2020 NEJM primary trial; Etxebarria 2015 and Goldstein-Brown mutation class schema not re-read against primary PDFs — treat LDLR class descriptions as unverified against primary sources; canonical-DB identity fields not re-checked"
literature-checked-through: 2026-05-09
---

# Familial Hypercholesterolemia

The most clinically important Mendelian dyslipidemia and the original proof-of-concept for the causal role of LDL-cholesterol in atherosclerosis. FH is an autosomal-codominant disorder of LDL clearance causing markedly elevated LDL-C from birth, accelerated [[atherosclerosis]], and premature cardiovascular death — particularly coronary artery disease and, in severe cases, aortic stenosis. Its importance extends beyond clinical genetics: FH patients are the **natural experiment** that established cumulative LDL exposure as causal for ASCVD [^ibrahim-2024], underpinning the entire modern lipid-lowering framework.

Global heterozygous FH (HeFH) prevalence is ~1:313 by the most comprehensive meta-analysis (>10.9 million subjects) [^beheshti-2020], making it far more common than previously assumed (~1:500 Goldstein-Brown era estimate). Despite this, most affected individuals are undiagnosed before their first cardiovascular event [^sturm-2018].

## Genetic architecture

FH arises from loss-of-function (or gain-of-function) variants disrupting hepatic LDL receptor (LDLR) pathway:

| Gene | Frequency among genetically-confirmed FH | Mechanism |
|---|---|---|
| [[ldlr]] | ~85–90% of cases | Loss-of-function; impaired LDL particle uptake |
| [[apob]] | ~5–10% of cases | Typically Arg3500Gln (R3500Q); APOB-100 fails to bind LDLR |
| [[pcsk9]] | ~1–3% of cases | Gain-of-function; accelerates LDLR degradation in endosomes |
| LDLRAP1 | Rare (~<1%) | Autosomal recessive hypercholesterolemia (ARH); impairs LDLR clustering in coated pits |

Frequency estimates are approximate; exact proportions depend on population and diagnostic ascertainment [^abifadel-2023]. Novel pathogenic variants in APOE (rare) and digenic causes also documented.

### PCSK9 founding mutations (Abifadel 2003)

The PCSK9 locus was identified as a third FH gene by Abifadel et al. in two French pedigrees carrying S127R and F216L gain-of-function variants — establishing that PCSK9 gain-of-function mimics LDLR loss-of-function phenotypically [^abifadel-2003]. This mechanistic insight directly motivated the development of PCSK9 inhibitors as a therapeutic class.

## LDLR mutation classes (Goldstein-Brown schema)

The five-class functional classification of LDLR mutations predicts both phenotype severity and therapeutic response [^etxebarria-2015]:

| Class | Defect | Mechanism | Notes |
|---|---|---|---|
| 1 — Null | No LDLR protein produced | Promoter or frameshift mutations | Worst phenotype; minimal statin response |
| 2 — Transport-defective | LDLR synthesized but retained in ER | Misfolding prevents ER→Golgi export | Moderate–severe; statins increase immature LDLR accumulation in ER |
| 3 — Binding-defective | LDLR reaches cell surface but cannot bind LDL | Mutation in ligand-binding domain | Moderate phenotype |
| 4 — Internalization-defective | LDLR binds LDL at surface but cannot enter coated pits | Mutation in cytoplasmic tail | Moderate |
| 5 — Recycling-defective | LDLR fails to dissociate from ligand in endosome → both degraded | Mutation prevents acid-induced release | Surface LDLR can be upregulated by statins → *better statin response than Class 1* |

Clinical implication: Patients with null LDLR mutations (Class 1) achieve worse LDL-C lowering on statins than those with defective mutations or no identified mutation. In a Brazilian HeFH cohort (n=156), only 22.5% of null-mutation carriers reached LDL-C target vs 27.1% of defective-mutation carriers and 47.4% of those with no identified mutation; null mutations were independently associated with higher odds of not reaching LDL-C target (OR 9.07, 95% CI 1.41–58.16, p=0.02) [^santos-2014]. The mechanism is that statins upregulate LDLR transcription via the functional allele — patients with null alleles have no receptor to upregulate. #gap/needs-replication — single-center cohort study.

## Heterozygous FH (HeFH)

**Prevalence:** 1:313 globally (95% CI 1:384 to 1:256) by meta-analysis; the general-population subanalysis covered 44 studies and 10.9 million subjects from a 104-study total meta-analysis [^beheshti-2020]. This supersedes the older 1:500 estimate. Prevalence is higher in founder populations (Afrikaners, Lebanese Christians, French Canadians, Ashkenazi Jews, Finns: up to 1:67–100 in some founder groups) and lower in some East Asian populations.

**LDL-C:** Typically 200–400 mg/dL untreated (vs population mean ~130 mg/dL).

**Clinical features:**
- Tendon xanthomas (Achilles, dorsal hand/finger extensor tendons) — pathognomonic when present; absent in many HeFH patients
- Corneal arcus (premature; <45 years in men, <50 in women — less specific)
- Xanthelasma (periorbital lipid deposits — low specificity for FH)
- Premature CHD: men typically by 40s–50s, women 50s–60s untreated
- Family history: first-degree relatives with premature CAD and/or elevated LDL

**Underdiagnosis:** Estimates suggest <20–25% of HeFH individuals globally are diagnosed before a cardiovascular event [^sturm-2018]. Most clinical lipid panels do not flag LDL-C in isolation as FH unless it exceeds 190 mg/dL, and clinical xanthomas are absent in many patients.

## Homozygous FH (HoFH)

HoFH arises from inheriting pathogenic variants from both parents (true homozygotes or compound heterozygotes). True nullizygous homozygotes (Class 1/1) have virtually no functional LDLR and the most severe phenotype.

**Prevalence:** Previously estimated at ~1:1,000,000; Tromp 2022 uses ~1:300,000 as the worldwide estimate; the EAS Consensus Panel (cited in Abifadel 2023) derives 1:160,000–300,000 by Hardy-Weinberg calculation from HeFH prevalence [^tromp-2022][^abifadel-2023].

**LDL-C:** 600–1000 mg/dL untreated in null/null; somewhat lower in compound heterozygotes with residual receptor function.

**Clinical features:**
- Tendon xanthomas, cutaneous (planar) xanthomas, and xanthelasma from childhood or infancy
- Corneal arcus from childhood
- **Aortic stenosis** — lipid deposition in aortic valve cusps, creating obstructive physiology in the 2nd–3rd decade of life
- Untreated: major cardiovascular events and/or death typically by 3rd decade

**International registry data (751 HoFH patients, 38 countries):** ASCVD or aortic stenosis present in 9% of patients already at the time of diagnosis; median age of first CV event was a decade earlier in non-high-income vs high-income countries (24.5 vs 37.0 years) [^tromp-2022]. Patients globally are "diagnosed too late, undertreated, and at high premature ASCVD risk."

## Diagnostic criteria

Three clinical scoring systems are in current use; genetic testing is increasingly the reference standard:

### Dutch Lipid Clinic Network (DLCN) criteria

Point-based scoring system incorporating family history (first-degree relative with premature CHD or known FH), personal history of premature ASCVD, physical exam findings (tendon xanthomas, corneal arcus), and LDL-C levels. Scoring thresholds: ≥8 = definite FH; 6–7 = probable FH; 3–5 = possible FH; <3 = unlikely FH. Most widely used in European and research contexts. LDL-C thresholds for efficient genetic testing selection: ~5.79 mmol/L (<40 yr) and ~6.7 mmol/L (≥40 yr) [^mickiewicz-2016].

### Simon Broome criteria (UK)

Simpler two-tier classification (definite vs possible FH) based on total cholesterol, LDL-C, family history, physical findings, and genetic confirmation. Used by NHS cascade screening programs.

### MEDPED (Make Early Diagnoses, Prevent Early Deaths)

LDL-C thresholds adjusted for age and first-degree relative status to diagnose FH in index cases and relatives. Used primarily in US family cascade screening programs.

**Genetic confirmation** is preferred over clinical scoring when available, as clinical criteria have significant false-positive and false-negative rates; a positive genetic result enables more confident cascade screening of relatives [^sturm-2018].

## Treatment landscape

### HeFH treatment — stepwise intensification

Treatment goal: LDL-C <70 mg/dL (high-risk); <55 mg/dL (very-high-risk with established ASCVD or other high-risk features). Early treatment is paramount given the cumulative-exposure model.

1. **High-intensity [[statins|statin]]** — rosuvastatin 20–40 mg/day or atorvastatin 40–80 mg/day. Reduces LDL-C 50–60%. Upregulates functional LDLR allele via [[srebp-2]]-mediated transcriptional activation of [[hmgcr]] and [[ldlr]]. Response depends on mutation class (see above).
2. **[[ezetimibe|Ezetimibe]]** — adds ~18–20% further LDL-C reduction by blocking [[npc1l1|NPC1L1]] internalization, reducing intestinal cholesterol absorption and stimulating hepatic LDLR expression. Standard add-on if statin alone insufficient. IMPROVE-IT 2015 validates additive CV benefit.
3. **PCSK9 inhibitors** (alirocumab, evolocumab) — monoclonal antibodies blocking [[pcsk9]]-mediated LDLR degradation; add 50–60% LDL-C reduction on top of maximal statin + ezetimibe. Clinical standard for FH with residual LDL elevation or established ASCVD.
4. **[[bempedoic-acid|Bempedoic acid]]** — ATP-citrate lyase (ACLY) inhibitor; liver-specific bioactivation by ACSVL1 → no SAMS; reduces LDL-C ~18% monotherapy, more in combination. CLEAR Outcomes 2023 (HR 0.87) — useful in statin-intolerant FH patients.
5. **Inclisiran** — siRNA targeting PCSK9 mRNA; twice-yearly injection; similar LDL-C reduction to antibody-class PCSK9i; now approved in multiple regions.

### HoFH treatment — LDLR-dependent vs LDLR-independent

The distinction between LDLR-defective (residual function) and LDLR-null genotypes is critical for therapy selection:

**LDLR-defective HoFH** (Class 2–5 compound heterozygotes with some residual LDLR): statins + ezetimibe + PCSK9i are worthwhile; response is limited but meaningful.

**LDLR-null/null HoFH** (Class 1/1): minimal response to statins or PCSK9i; require LDLR-independent approaches:

- **Evinacumab** (ANGPTL3 inhibitor) — monoclonal antibody blocking ANGPTL3, which normally inhibits lipoprotein lipase and endothelial lipase; evinacumab reduces LDL-C via an LDLR-independent mechanism (reduced VLDL production + enhanced TG-rich lipoprotein clearance). In the ELIPSE HoFH Phase 3 trial (n=65, 2:1 randomization, 15 mg/kg IV q4w), reduced LDL-C by 47.1% vs +1.9% for placebo (between-group difference −49.0 percentage points, 95% CI −65.0 to −33.1, p<0.001) independent of LDLR genotype [^raal-2020]. FDA-approved for HoFH. Current standard-of-care for null/null patients.
- **Lomitapide** — [[mtp|microsomal triglyceride transfer protein (MTP)]] inhibitor; blocks hepatic ApoB-containing VLDL assembly upstream of LDLR, reducing LDL-C ~50% (Cuchel 2013 Lancet, n=29 HoFH); dose-limiting hepatic steatosis (mean liver fat 1.0% → 8.6% NMRS at 26 wk); used as add-on therapy in HoFH.
- **LDL apheresis** — extracorporeal removal of LDL particles; reduces LDL-C 50–75% acutely; biweekly sessions; indicated as adjunct for refractory HoFH or as bridge to other therapy.
- **Orthotopic liver transplant** — transplants LDLR-competent hepatocytes, normalizing LDL clearance; reserved for most severe refractory cases.
- **Gene therapy / base editing:** [[interventions/gene-therapy/crispr-base-editing-pcsk9|Verve VERVE-101]] (PCSK9 base-editing) targets hepatic PCSK9 permanently to remove the degradation signal on LDLR; Phase 1b data pending; potential future standard for HoFH and ultra-high-risk HeFH. #gap/needs-replication

## Cumulative LDL exposure model

FH is the strongest natural experiment for LDL causality. Unlike Mendelian randomization studies (which capture average population-level genetic variation), FH subjects are exposed to 2–5× normal LDL concentrations continuously from birth. Coronary artery disease risk scales with cumulative exposure (LDL-C × years).

Key evidence: Among FH patients, every 75 mmol/L·years of cumulative LDL-C exposure was associated with a doubling of percent atheroma volume; even early-treated FH patients showed substantially higher plaque burden than controls, emphasizing that lifetime exposure — not just current LDL — determines ASCVD risk [^ibrahim-2024].

The World Heart Federation Cholesterol Roadmap explicitly frames the goal of treatment as *reducing cumulative apoB exposure* over a lifetime, with FH as the motivating model [^ray-2022].

This framing has clinical implications: earlier treatment initiation (including pediatric treatment of FH children) offers disproportionate benefit relative to late-stage intervention, because it truncates the exposure × time integral. FH provides the rationale for aggressive early LDL lowering even in younger adults with genetically elevated LDL.

## Genetic / cascade screening

First-degree relatives of an FH index case have a 50% prior probability of carrying the pathogenic variant (autosomal codominant inheritance). Cascade screening — systematic genetic or clinical testing of relatives of confirmed FH cases — is cost-effective:

- Netherlands DECON program (1994–2014): >28,000 FH patients identified via national cascade program before 2014 transition to healthcare-integrated approach; regulatory changes limiting active family outreach reduced detection rates post-2014 [^louter-2017]
- Spain national cascade program: cost-effectiveness analysis showed €29,608/QALY gained (dominant from societal perspective), preventing 847 coronary events and 203 deaths in a 9,000-patient cohort over 10 years [^lazaro-2017]
- Systematic reviews conclude cascade screening is cost-effective in most settings [^rosso-2017]

#gap/needs-replication — international uptake data for cascade screening programs; rates vary enormously by country and remain poorly characterized outside Europe.

## Hallmark mapping

FH is an accelerated-aging phenotype for vascular biology — it compresses the normal lifetime LDL exposure trajectory by delivering 3–5× the physiological LDL load from birth. The molecular pathway from elevated ApoB → endothelial retention → oxidative modification → foam cell formation → atherosclerosis is the same as in non-FH ASCVD.

- [[chronic-inflammation]] — SASP-like foam cell and VSMC senescence in plaques; elevated circulating CRP and inflammatory cytokines; senescent macrophage accumulation may be enriched by the high-ApoB environment
- [[altered-intercellular-communication]] — modified LDL (oxLDL) acts as a paracrine signal inducing endothelial dysfunction, monocyte recruitment, and vascular smooth muscle cell phenotypic switching; the ApoB/LDLR signaling axis is disrupted by every FH-causing variant

## Aging-relevance

FH accelerates the vascular aging trajectory without altering the molecular aging rate elsewhere — making it a model for decomposing vascular aging from systemic aging. The senescent foam cell accumulation in FH plaques provides a cellular bridge to [[cellular-senescence]] as a hallmark. FH subjects who survive to 65+ represent a selected cohort who escaped premature mortality, often due to milder variant classes or earlier treatment — their longitudinal cardiovascular data inform the relationship between prior LDL exposure and residual risk in older adults.

## Limitations and gaps

- **Diagnostic underascertainment** — the majority of the ~1:313 globally affected individuals are undiagnosed; lipid cascade screening is not standard in most countries outside the Netherlands, UK, and Spain. #gap/needs-human-replication
- **Mutation-class phenotyping** — comprehensive mutation-class-to-clinical-outcome data are sparse; most FH registries lack functional characterization of LDLR variants
- **HoFH prevalence** — revised estimates (1:160,000–300,000) lack large prospective denominator data; primarily registry-derived
- **Pediatric treatment** — statins in children with FH are guideline-recommended but long-term (>20 year) safety data in pediatric starters are not yet available; trial follow-up too short to fully characterize cumulative benefit vs risk #gap/long-term-unknown
- **PCSK9 gain-of-function spectrum** — PCSK9 GoF mutation frequency in FH varies by population; functional characterization of rare PCSK9 variants is incomplete #gap/needs-replication
- **Atherosclerosis regression** — even with optimal LDL-C lowering, FH patients carry substantially elevated plaque burden; optimal strategies for regression (vs stabilization) are unclear #gap/no-mechanism

## Footnotes

[^beheshti-2020]: doi:10.1016/j.jacc.2020.03.057 · Beheshti SO, Madsen CM, Varbo A, Nordestgaard BG · J Am Coll Cardiol 2020 · 104 studies total across 4 population categories; general-population subanalysis: n=10,921,310 subjects, 44 studies · meta-analysis · FH prevalence 0.32% (1:313, 95% CI 1:384–1:256) in general population; 3.2% in ischemic heart disease; 6.7% in premature IHD · supersedes older 1:500 estimate · not_oa (PDF download failed)

[^abifadel-2003]: doi:10.1038/ng1161 · Abifadel M, Varret M, Rabès JP et al. · Nature Genetics 2003;34:154–156 · in-vivo genetic · n=2 French pedigrees (HC92 carrying S127R in exon 2; HC60 carrying F216L in exon 4) · identifies PCSK9 gain-of-function S127R and F216L mutations as a third cause of autosomal dominant FH beyond LDLR and APOB · local PDF:  (local PDF)

[^abifadel-2023]: doi:10.1111/joim.13577 · Abifadel M, Boileau C · J Intern Med 2023 · review · genetic and molecular architecture of FH; covers LDLR, APOB, PCSK9, APOE, LDLRAP1; notes FH "is still largely underdiagnosed worldwide" · local PDF:  (local PDF)

[^sturm-2018]: doi:10.1016/j.jacc.2018.05.044 · Sturm AC, Knowles JW, Gidding SS et al. · J Am Coll Cardiol 2018 · expert consensus · recommends genetic testing as standard care; cascade testing of first-degree relatives; early therapy initiation improves risk stratification · not_oa (no local PDF)

[^tromp-2022]: doi:10.1016/S0140-6736(21)02001-8 · Tromp TR, Hartgers ML, Hovingh GK et al. · Lancet 2022 · retrospective cohort · n=751 HoFH patients (52% female), 38 countries, 88 institutions · 9% already had ASCVD or aortic stenosis at diagnosis; median age of first MACE 24.5 yr (IQR 17.0–34.5, non-HIC) vs 37.0 yr (IQR 29.0–49.0, HIC); paper uses ~1:300,000 as worldwide HoFH prevalence estimate · local PDF:  (local PDF))02001-8.pdf

[^etxebarria-2015]: doi:10.1002/humu.22721 · Etxebarria A, Benito-Vicente A, Palacios L et al. · Human Mutation 2015 · functional characterization · classifies 7 LDLR variants across Classes 2–5; statin response better in Class 2 vs Class 5 variants · model: iPSC/in-vitro

[^santos-2014]: doi:10.1016/j.atherosclerosis.2013.12.028 · Santos PCJ Lima, Morgan AC, Jannes CE et al. · Atherosclerosis 2014 · observational · n=156 Brazilian HeFH patients (null mutations n=40, defective n=59, no identified mutation n=57) · LDL-C target achievement: null 22.5%, defective 27.1%, no identified mutation 47.4% (p=0.02) · null mutations independently associated with higher odds of not reaching LDL-C target (OR 9.07, 95% CI 1.41–58.16, p=0.02) · not_oa (PDF download failed)

[^raal-2020]: doi:10.1056/NEJMoa2004215 · Raal FJ, Rosenson RS, Yancopoulos GD et al. · N Engl J Med 2020;383:711–720 · randomized · n=65 HoFH patients (2:1 evinacumab 15 mg/kg IV q4w vs placebo) · primary endpoint week 24: LDL-C −47.1% (evinacumab) vs +1.9% (placebo); between-group difference −49.0 percentage points (95% CI −65.0 to −33.1; p<0.001); absolute reduction −132.1 mg/dL; effective in null/null genotypes · ELIPSE HoFH Phase 3 trial; FDA-approved for HoFH

[^ibrahim-2024]: doi:10.1093/eurjpc/zwae028 · Ibrahim S, Reeskamp LF, de Goeij JN, Hovingh GK et al. · Eur J Prev Cardiol 2024 · observational · n=90 genetically confirmed FH patients + 45 controls (mean age 41 yr, 38% female) · coronary plaque prevalence 51% (46/90) vs 22% (10/45), OR 3.66 (95% CI 1.62–8.27); every 75 mmol/L·years cumulative LDL-C exposure associated with doubling of percent atheroma volume; mean cumulative LDL-C 181 ± 54 mmol/L·yr (FH) vs 105 ± 33 mmol/L·yr (controls); even early-treated FH patients showed excess atherosclerosis · confirms cumulative-LDL causal model · not_oa (PDF download failed)

[^ray-2022]: doi:10.5334/gh.1154 · Ray KK, Ference BA, Séverin T et al. · Global Heart 2022 · World Heart Federation Cholesterol Roadmap 2022 · advocates reducing cumulative apoB exposure as primary ASCVD prevention strategy; FH used as proof-of-concept model for LDL causality · local PDF:  (local PDF)

[^louter-2017]: doi:10.1016/j.atherosclerosissup.2017.05.019 · Louter L, Defesche J, Roeters van Lennep J · Atherosclerosis Suppl 2017 · Netherlands DECON program 1994–2014: >28,000 FH patients identified; post-2014 regulatory change limiting active family outreach reduced new detections · not_oa

[^lazaro-2017]: doi:10.1016/j.jacl.2017.01.002 · Lázaro P, Pérez de Isla L, Watts GF et al. · J Clin Lipidol 2017 · cost-effectiveness · n=9,000-patient cohort, Spain · prevented 847 coronary events, 203 deaths over 10 yr; €29,608/QALY gained (dominant from societal perspective) · not_oa

[^rosso-2017]: doi:10.7416/ai.2017.2178 · Rosso A, Pitini E, D'Andrea E et al. · Ann Ig 2017 · systematic review · 7 economic evaluations 2002–2015 · cascade screening cost-effective in most settings · not_oa

[^mickiewicz-2016]: doi:10.1016/j.atherosclerosis.2016.03.025 · Mickiewicz A, Chmara M, Futema M et al. · Atherosclerosis 2016 · DLCN validation in Poland · LDL-C thresholds for efficient genetic testing: 5.79 mmol/L (<40 yr), 6.7 mmol/L (≥40 yr) · archive status: pending
