---
type: compound
aliases: [Ozempic, Wegovy, Rybelsus, semaglutide, GLP-1 RA]
pubchem-cid: 56843331
inchikey: DLSWIYLPEUIQAV-CCUURXOWSA-N
chembl-id: CHEMBL2107778
drugbank-id: null
cas-number: null
biologic: true
who-inn: semaglutide
molecular-formula: C187H291N45O59
molecular-weight-da: 4114
mechanisms: [glp1-receptor-agonist, weight-loss, anti-inflammatory, glucagon-suppression, gastric-motility-reduction, chondrocyte-metabolic-reprogramming]
targets: ["[[glp1r]]", "[[pomc-neurons]]", "[[ampk]]", "[[pfkfb3]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Aging-specific RCT in healthy older adults (BMI 25–35, no diabetes or CVD) with composite biological-age + frailty endpoint over 5 yr; n>=3,000."
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for all 6 cited DOIs (Wilding 2021 NEJMoa2032183 [STEP-1], Lincoff 2023 NEJMoa2307563 [SELECT], Perkovic 2024 NEJMoa2403347 [FLOW], Weiskirchen 2025 medsci13040265, Kosiborod 2024 jacc.2024.04.038, Petković-Dabić 2025 biom15010046). R34 backfill batch 4 (2026-05-08): EVOKE/EVOKE+ Phase 3 AD trial primary publication (Cummings et al. *Lancet* 2026, doi:10.1016/S0140-6736(26)00459-9, PMID 41865758) — abstract verified against PubMed. SOUL trial primary (McGuire et al. *NEJM* 2025;392:2001–2012, doi:10.1056/NEJMoa2501006, PMID 40162642) — abstract verified. Ad-hoc OA ingest 2026-05-08: Qin et al. *Cell Metab* 2026;38:582–597 (doi:10.1016/j.cmet.2026.01.008, PMID 41666927) — abstract + MeSH/keywords verified against PubMed efetch; PDF NOT in a local paper archive yet (DOI not yet ingested by OpenAlex pipeline as of 2026-05-08); GLP-1R-AMPK-PFKFB3 chondrocyte-metabolic-reprogramming claim flagged as abstract-only sourcing pending PDF verification. Wikilinks spot-checked. Trial result quantitative claims (HRs, weight loss percentages, hsCRP delta) NOT cross-checked against primary PDFs — synthesis-style content lint only."
literature-checked-through: 2026-05-08
---

# Semaglutide

A synthetic GLP-1 receptor agonist approved for type 2 diabetes (Ozempic, 2017) and chronic weight management (Wegovy, 2021). The largest cardiovascular outcomes trial in obesity to date (SELECT, n=17,604) showed a 20% relative reduction in major adverse cardiovascular events (MACE) over ~3 years in overweight/obese adults without diabetes [^lincoff2023]. The compound has attracted geroprotective interest because obesity-driven metabolic dysfunction and chronic inflammation overlap substantially with aging hallmarks — but no trial has yet tested semaglutide against a primary aging or biological-age endpoint. #gap/needs-human-replication

## Identity

| Field | Value |
|---|---|
| WHO INN | semaglutide |
| PubChem CID | 56843331 |
| InChIKey | DLSWIYLPEUIQAV-CCUURXOWSA-N |
| ChEMBL ID | CHEMBL2107778 |
| Molecular formula | C187H291N45O59 |
| Molecular weight | 4,114 Da (peptide) |
| Class | Synthetic GLP-1 analogue — 34-aa peptide |
| Route | Subcutaneous injection (weekly); oral tablet (daily, Rybelsus) |
| Half-life | ~160 h (~7 days) subcutaneous |

**Note on biologic status:** Semaglutide is a peptide biologic, not a small molecule. PubChem CID 56843331 tracks the free-acid conjugate form; no InChI-compatible SMILES is available at typical lengths due to peptide size. ChEMBL CHEMBL2107778 records the bioactivity data.

## Structural basis for long half-life

Native GLP-1(7–36) amide has a plasma half-life of 1–2 minutes due to DPP-IV cleavage and renal clearance. Semaglutide achieves ~7-day dosing through three modifications:

1. **Aib8 substitution** — α-aminoisobutyric acid at position 8 blocks DPP-IV cleavage.
2. **Lys34Arg substitution** — removes a secondary DPP-IV site.
3. **C18 fatty diacid side chain at Lys26** (via a linker) — mediates tight reversible binding to serum albumin, dramatically reducing renal filtration and receptor-mediated clearance [^weiskirchen2025].

The combined effect extends t½ from minutes to ~160 h, enabling once-weekly subcutaneous dosing [^weiskirchen2025].

## Mechanism of action

### Peripheral

**Pancreatic β-cells:** GLP-1R activation → Gαs → adenylyl cyclase → cAMP ↑ → PKA and Epac2 → glucose-dependent insulin secretion (GDIS). Critically, the insulin response is glucose-dependent — minimal effect at fasting glucose, sharply potentiated above ~5 mM. This is the mechanistic basis for the low intrinsic hypoglycemia risk.

**Pancreatic α-cells:** GLP-1R on α-cells → suppressed glucagon release, reducing hepatic glucose output postprandially.

**GI tract:** GLP-1R on vagal afferents and enteric neurons → slowed gastric emptying → blunted postprandial glucose excursions and earlier mechanoreceptor-driven satiety.

### Central

**Hindbrain (area postrema / NTS):** GLP-1R expressed on neurons in circumventricular organs not protected by the blood-brain barrier; direct peptide access drives nausea/satiety signaling.

**Hypothalamic ARC:** GLP-1R on POMC/CART neurons → increased POMC expression and α-MSH release → MC4R activation → reduced food intake. Concurrent inhibition of NPY/AgRP neurons removes orexigenic tone [^unsourced-cns-mechanism]. #gap/unsourced — direct human neuroimaging or optogenetic confirmation of POMC-specific mechanism not yet established; most evidence from rodent intracranial injection studies.

## Clinical indications and trial landscape

### STEP-1 trial — weight loss in obesity without diabetes

Wilding et al. randomized 1,961 adults with BMI ≥30 (or ≥27 with comorbidity) and no diabetes to once-weekly subcutaneous semaglutide 2.4 mg or placebo for 68 weeks (both groups with lifestyle intervention) [^wilding2021].

- Mean body weight loss: **14.9%** semaglutide vs 2.4% placebo (difference −12.4 pp, 95% CI −13.4 to −11.5, p<0.001).
- ≥5% weight loss: 86.4% semaglutide vs 31.5% placebo.
- ≥15% weight loss: 32.0% semaglutide vs 1.7% placebo.
- GI adverse events (nausea/vomiting/diarrhea): more frequent with semaglutide (~80% incidence of any GI AE vs ~50% placebo); mostly mild-to-moderate and front-loaded in first 20 weeks.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (GLP-1R is a human target) |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes (STEP 1–4, SUSTAIN series) |

### SELECT trial — cardiovascular outcomes in obesity without diabetes

Lincoff et al. enrolled 17,604 adults (age ≥45) with BMI ≥27, established CVD, and **no diabetes** and randomized to semaglutide 2.4 mg weekly or placebo; median follow-up ~33.4 months [^lincoff2023].

- **Primary endpoint (3-point MACE: CV death, non-fatal MI, non-fatal stroke): HR 0.80 (95% CI 0.72–0.90, p<0.001)** — a 20% relative risk reduction.
- CV death HR 0.85 (95% CI 0.71–1.01); non-fatal MI HR 0.72 (95% CI 0.61–0.85); non-fatal stroke HR 0.82 (95% CI 0.61–1.10 — imprecise).
- The mechanistic attribution is uncertain: 14.9% weight reduction likely explains part, but the MACE benefit appeared before substantial weight loss; reduced inflammation (hsCRP) has been proposed as an independent pathway.
- hsCRP: semaglutide reduced hsCRP by ~40% from baseline in the STEP-HFpEF program [^kosiborod2024]; SELECT sub-analyses are ongoing.

**The SELECT trial is the strongest current human evidence for a clinically meaningful cardiometabolic benefit of semaglutide in overweight adults without diabetes.**

### FLOW trial — kidney outcomes in T2D + CKD

Perkovic et al. enrolled 3,533 adults with type 2 diabetes and CKD (eGFR 24–75, UACR ≥300 mg/g); randomized to semaglutide 1.0 mg weekly or placebo [^perkovic2024].

- **Primary composite (≥50% eGFR decline, ESKD, kidney- or CV-death): HR 0.76 (95% CI 0.66–0.88, p<0.001)** — 24% relative risk reduction.
- Kidney-specific composite HR 0.79 (95% CI 0.66–0.94).
- eGFR slope: semaglutide −2.19 mL/min/1.73m²/yr vs −3.36 mL/min/1.73m²/yr (placebo), a 35% slower decline.
- This extends semaglutide's evidence base to kidney protection; mechanism may overlap with inflammation and intraglomerular pressure reduction.

### FDA approvals

| Indication | Brand | Approval year | Dose |
|---|---|---|---|
| Type 2 diabetes (SC) | Ozempic | 2017 | 0.5/1.0/2.0 mg weekly |
| T2D (oral) | Rybelsus | 2019 | 7/14 mg daily |
| Chronic weight management | Wegovy | 2021 | 2.4 mg weekly |
| Reduction of CV events (obesity/overweight) | Wegovy | 2024 | 2.4 mg weekly |

## Geroprotective angle — aging biology hypotheses

Semaglutide does not have a dedicated aging trial. The geroprotective case rests on four converging lines:

**1. Obesity as accelerated aging.** Excess adiposity and metabolic syndrome amplify multiple aging hallmarks — [[chronic-inflammation]] (elevated IL-6, TNF-α, CRP), [[deregulated-nutrient-sensing]] (hyperinsulinemia, mTORC1 overactivation), and [[mitochondrial-dysfunction]]. Reversing these via 15% body weight reduction could theoretically reduce biological age. A phase 2b RCT published in *Nature Communications* (n=84; 32 weeks; HIV-associated lipohypertrophy population) found semaglutide 1.0 mg SC weekly produced concordant reductions across multiple epigenetic aging clocks as a **secondary/exploratory endpoint**: PCGrimAge −3.08 yr (p=0.007), PhenoAge −4.90 yr (p=0.004), DunedinPACE −0.09 units/yr (~9% slower pace, p=0.01), after ANCOVA adjustment for baseline BMI, hsCRP, and sCD163 [^corley2025]. Seven of eleven organ-system clocks reached significance (most prominently inflammation −5.01 yr, brain −4.99 yr, heart −4.34 yr). **Critical caveats:** (1) the population is diseased (HIV lipohypertrophy, elevated baseline inflammation); (2) epigenetic aging was not the primary endpoint and no multiple-comparisons correction was applied to the clock battery; (3) three of seven authors are affiliated with TruDiagnostic, the company whose clocks constitute the study endpoints — a material conflict of interest (see [^corley2025]). This does not establish biological-age benefit in a lean, healthy, metabolically normal individual. No trial has yet tested a validated biological-age clock as a **primary endpoint** in a non-diseased population. #gap/needs-healthy-population-replication

**2. Direct anti-inflammatory signaling.** GLP-1R is expressed on macrophages and other immune cells; semaglutide appears to suppress NF-κB-driven cytokine production partly weight-independently. Reductions in hsCRP (~40%) and IL-6 have been observed in clinical trials [^kosiborod2024]; the psoriasis RCT (n=50) documented significant serum IL-6 reduction [^petkovic2025]. However, which anti-inflammatory effects are weight-loss-mediated vs direct GLP-1R remains contested. #gap/no-mechanism

**3. Cardiovascular risk reduction.** The SELECT MACE benefit (HR 0.80) implies prolonged event-free survival in middle-aged to older adults with CVD — a direct healthspan effect. Whether this translates to reduced overall mortality or slower biological aging over longer time horizons is unknown.

**4. CNS and neurodegeneration hypotheses.** GLP-1R is expressed in dopaminergic neurons and astrocytes; preclinical models suggest neuroprotection (α-synuclein clearance, reduced neuroinflammation). Observational studies suggest reduced Parkinson's disease incidence in GLP-1R agonist users (Liraglutide > semaglutide data available).

**5. Cartilage protection in osteoarthritis — weight-loss-independent (R34 update 2026-05-08).** Qin et al. (*Cell Metab* 2026) reported that semaglutide produces chondroprotective effects in obesity-associated [[osteoarthritis]] mouse models that are NOT explained by weight loss or appetite suppression [^qin2026]. Using a precise diet-controlled experimental setting (likely pair-feeding; specific protocol pending PDF verification), the authors dissociated chondroprotection from semaglutide's classical metabolic actions. The proposed mechanism — **the GLP-1R-[[ampk|AMPK]]-PFKFB3 axis** — reprograms chondrocyte metabolism from glycolysis to oxidative phosphorylation under inflammatory conditions, reducing cartilage degeneration, osteophyte formation, synovial lesion, and pain sensitivity. A randomized pilot clinical study (ChiCTR2200066291) is reported to support these findings; n, dose, and primary endpoint are not in the abstract. This is the **first major demonstration of a weight-loss-independent chondroprotective mechanism for any GLP-1 RA in OA**, and provides the contemporary counterpoint to the negative Gudbergsen 2021 systemic-liraglutide OA RCT (cited in [^meurot2022]). The paper adds [[mitochondrial-dysfunction]] (chondrocyte fuel-switch) and [[deregulated-nutrient-sensing]] (AMPK as primary nutrient-sensor) as new hallmark intersections for the indication. **PDF NOT yet verified** — quantitative claims (mouse n's, dose, mg/kg, mechanism specifics including whether AMPK and PFKFB3 modulation was genetic vs pharmacologic, OXPHOS measurement modality) require PDF cross-check before downstream-claim use. #gap/needs-pdf-verification #gap/needs-human-replication.

**EVOKE / EVOKE+ Phase 3 in early Alzheimer's disease — NEGATIVE (R34 update 2026-05-08).** Cummings et al. (*Lancet* 2026) reported the first Phase 3 RCTs of oral semaglutide 14 mg flexible-dose vs placebo in early-stage symptomatic AD (mild cognitive impairment or mild dementia, amyloid-confirmed) — n=1,855 (evoke) and n=1,953 (evoke+); 156-week treatment period; primary endpoint change in CDR-SB at week 104 [^cummings2026]. Both trials missed the primary endpoint: mean CDR-SB change at week 104 was 2.3 (semaglutide) vs 2.3 (placebo) in evoke (estimated difference −0.08, 95% CI −0.35 to 0.20, p=0.57) and 2.2 vs 2.1 in evoke+ (difference 0.10, 95% CI −0.17 to 0.38, p=0.46). **Both trials were discontinued due to negative clinical outcome.** Treatment-emergent adverse events were higher with semaglutide (91.2% vs 84.8%) but consistent with the known semaglutide profile. The negative result substantially weakens the GLP-1-RA-as-AD-therapy hypothesis derived from prior observational and preclinical signals; it does NOT rule out potential benefit at earlier disease stages or in non-AD aging-cognition contexts, but it removes the strongest near-term rationale for AD-specific use. This is the first large-scale aging-rejuvenation-relevant Phase 3 endpoint failure for the class.

## Effects on aging hallmarks

| Hallmark | Proposed effect | Evidence quality |
|---|---|---|
| [[chronic-inflammation]] | Reduces hsCRP ~40%, IL-6; weight-loss + possible direct GLP-1R effect on macrophages | Clinical RCT (STEP-HFpEF, psoriasis) |
| [[deregulated-nutrient-sensing]] | Reduces hyperinsulinemia; indirect mTORC1 deactivation via caloric restriction effect | Mechanism inferred; no direct mTOR assay in humans |
| [[mitochondrial-dysfunction]] | Adipose tissue mitochondrial function improves with weight loss; **chondrocyte glycolysis-to-OXPHOS shift via GLP-1R-AMPK-PFKFB3 in OA mice [^qin2026]** | Mouse model + pilot RCT; PDF unverified |
| [[cellular-senescence]] | No direct trial data; obesity increases senescent cell burden; weight loss hypothesized to reduce p16+ cells | Not tested #gap/unsourced |
| [[deregulated-nutrient-sensing]] (chondrocyte) | AMPK activation in chondrocytes downregulates PFKFB3 → restores OXPHOS metabolism in OA mice [^qin2026] | Mouse + pilot RCT; mechanism specifics PDF-unverified |

## Pharmacokinetics and dosing

- **Bioavailability (SC):** ~89%; absorption is slow (tmax ~1–3 days).
- **Bioavailability (oral):** ~1% (Rybelsus); requires fasting + large water volume absorption-enhancement.
- **Half-life (SC):** ~160 h, enabling once-weekly dosing.
- **Protein binding:** >99% albumin (via C18 fatty diacid side chain).
- **Metabolism:** proteolytic cleavage of peptide backbone and fatty acid side chain oxidation; no meaningful CYP450 involvement.
- **Renal clearance:** minimal; dose adjustment not required for CKD.
- **Titration:** dose escalation over 16–20 weeks is required (0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg for Wegovy) to minimize GI AEs.

## Adverse effects and safety concerns

| Adverse effect | Frequency / notes |
|---|---|
| Nausea | ~44% semaglutide vs 16% placebo (STEP-1) — most common, peaks in weeks 4–12 |
| Vomiting | ~24% semaglutide vs 6% placebo (STEP-1) |
| Diarrhea | ~30% semaglutide vs 16% placebo (STEP-1) |
| Gallbladder disease | Increased risk (~2.6% vs 1.2%; rapid weight loss increases bile lithogenicity) |
| Pancreatitis | Rare; causal relationship debated; contraindicated in history of pancreatitis |
| Medullary thyroid carcinoma | Black-box warning (rodent signal; human risk not established but contraindicated in MEN2 / family history MTC) |
| **Muscle mass loss** | **Weight loss includes ~25–40% lean mass loss, not all adipose** — a clinically significant concern for older adults where sarcopenia risk is elevated #gap/long-term-unknown |
| Diabetic retinopathy | Worsening observed in early SUSTAIN trials in T2D patients with pre-existing retinopathy (transient, mechanism unclear) |
| Injection-site reactions | Mild, common |

**Muscle-loss caveat for aging context:** In STEP-1, body composition data showed lean mass declined alongside fat mass during rapid weight loss. For older adults (>65) where baseline muscle mass and function may already be compromised, rapid semaglutide-induced weight loss may worsen or unmask [[sarcopenia]]. This is an unresolved safety signal for any aging-specific application. #gap/long-term-unknown

## Translation gap

`human-evidence-strong` — robust RCT evidence for cardiometabolic benefit exists (SELECT MACE, FLOW kidney endpoints). The gap is **aging-specific**:

- No trial has enrolled by chronological or biological age as primary criterion.
- No trial has used a validated biological-age clock as a **primary** endpoint; the Corley et al. (*Nature Communications* 2026) HIV lipohypertrophy RCT measured several clocks as secondary/exploratory endpoints [^corley2025], but in a diseased population only, and with material COI from TruDiagnostic-affiliated co-authors.
- No trial has enrolled healthy older adults without diabetes or established CVD — the population most relevant to primary aging prevention.
- The muscle-loss safety concern in older adults with borderline sarcopenia has not been prospectively addressed.

## Gaps and open questions

- #gap/no-mechanism — Relative contribution of weight loss vs direct GLP-1R signaling to cardiovascular and anti-inflammatory benefits in SELECT not yet parsed.
- #gap/long-term-unknown — Consequences of 10–15% lean mass loss in older adults on long-term functional outcomes (grip strength, gait speed, fall risk) not reported in existing trials.
- #gap/needs-human-replication — CNS neuroprotective claims (Parkinson's, Alzheimer's) rest largely on preclinical data + observational signals; Phase 2 RCTs ongoing.
- #gap/needs-healthy-population-replication — Biological-age clock response (GrimAge, DunedinPACE, PhenoAge) measured in HIV lipohypertrophy RCT as a secondary/exploratory endpoint [^corley2025], but not yet tested as a primary endpoint or in a healthy non-diseased population. Corley et al. (*Nat Commun* 2026) provides signal in a diseased cohort with material TruDiagnostic COI; a dedicated aging RCT in healthy older adults using an independent epigenetic platform is needed for confirmation.
- #gap/dose-response-unclear — Optimal dose for aging-specific benefit (if any) unknown; 2.4 mg weekly chosen for maximal weight loss, not for any aging-primary endpoint.

## Cross-references

- Related class: [[glp1-agonists]] (R21 intervention class page — implicit stub)
- Primary receptor: [[glp1r]] (implicit stub)
- Linked conditions: [[type-2-diabetes]], [[atherosclerosis]], [[osteoarthritis]] (R34 ad-hoc 2026-05-08)
- Relevant hallmarks: [[chronic-inflammation]], [[deregulated-nutrient-sensing]], [[cellular-senescence]], [[mitochondrial-dysfunction]] (chondrocyte fuel-switch)
- Downstream phenotype concern: [[sarcopenia]]
- Companion OA study: [[studies/qin-2026-semaglutide-oa]] (semaglutide systemic, weight-loss-independent); see also [[studies/meurot-2022-liraglutide-oa]] (liraglutide IA delivery, MIA mouse) for class-level joint mechanism
- Epigenetic clock endpoints measured in HIV lipohypertrophy RCT [^corley2025]: [[biomarkers/grimage-2019]], [[biomarkers/phenoage-2018]], [[biomarkers/dunedinpace-2022]] — not yet tested as primary endpoints in a healthy/non-diseased population
- Possible shared GDF15-mediated appetite pathway: [[gdf15]]

## Footnotes

[^wilding2021]: [[studies/wilding-2021-step1-semaglutide-obesity]] · n=1,961 · rct · p<0.001 · model: obese/overweight non-diabetic adults (68 weeks, semaglutide 2.4 mg SC weekly vs placebo) · doi:10.1056/NEJMoa2032183

[^lincoff2023]: [[studies/lincoff-2023-select-semaglutide-cvd]] · n=17,604 · rct · p<0.001 · model: overweight/obese adults with established CVD without diabetes (~33.4 mo) · doi:10.1056/NEJMoa2307563

[^perkovic2024]: [[studies/perkovic-2024-flow-semaglutide-ckd]] · n=3,533 · rct · p<0.001 · model: T2D + CKD adults (semaglutide 1.0 mg SC weekly vs placebo) · doi:10.1056/NEJMoa2403347

[^weiskirchen2025]: doi:10.3390/medsci13040265 · review · Weiskirchen R, Lonardo A · Medical Sciences 2025 · bench-to-bedside review of semaglutide PK, molecular modifications, and clinical program · local copy: pending

[^kosiborod2024]: doi:10.1016/j.jacc.2024.04.038 · rct (STEP-HFpEF sub-analysis) · n=529 · Kosiborod et al. · JACC 2024 · semaglutide reduced hsCRP and NT-proBNP across NYHA class in HFpEF · local copy: downloaded

[^petkovic2025]: doi:10.3390/biom15010046 · open-label rct · n=50 · Petković-Dabić et al. · Biomolecules 2025 · semaglutide reduced serum IL-6 and hsCRP in obese T2D patients with psoriasis · local copy: downloaded

[^qin2026]: [[studies/qin-2026-semaglutide-oa]] · doi:10.1016/j.cmet.2026.01.008 · pmid:41666927 · in-vivo (mouse OA + obesity, C57BL/6 male) + pilot RCT (ChiCTR2200066291) · Qin H, Yu J, Yu H, et al.; corresponding Tong L, Chen D, Speakman JR, Zhang HT · *Cell Metab* 2026;38:582–597.e6 · weight-loss-independent chondroprotection via GLP-1R-AMPK-PFKFB3 axis; chondrocyte glycolysis→OXPHOS shift · **PDF NOT yet in a local paper archive (DOI not ingested as of 2026-05-08); quantitative claims unverified — use abstract-level claims only**

[^meurot2022]: [[studies/meurot-2022-liraglutide-oa]] · doi:10.1038/s41598-022-05323-7 · companion liraglutide-OA paper; intra-articular delivery; verified-true (PDF read end-to-end 2026-05-08) · cited here for class-level GLP-1R cartilage-expression confirmation and the negative Gudbergsen 2021 systemic-liraglutide OA RCT counterpoint

[^cummings2026]: doi:10.1016/S0140-6736(26)00459-9 · pmid:41865758 · Cummings JL, Atri A, Sano M, Zetterberg H, Scheltens P, Knop FK, Johannsen P, Wichmann CA, Abschneider RM, Leon T, Feldman HH · *Lancet* 2026 Mar 19 (online ahead of print) · two parallel Phase 3 RCTs (evoke NCT04777396, evoke+ NCT04777409) · n=3,808 total (1,855 evoke + 1,953 evoke+); amyloid-confirmed early-stage AD; ages 55–85 (mean 72.2); oral semaglutide 14 mg flexible-dose vs placebo for 156 weeks · **PRIMARY ENDPOINT NEGATIVE** — CDR-SB change at week 104 estimated difference −0.08 (95% CI −0.35 to 0.20, p=0.57) evoke; 0.10 (95% CI −0.17 to 0.38, p=0.46) evoke+ · safety consistent with prior semaglutide indications · trials discontinued for negative clinical outcome · funded Novo Nordisk · local copy: pending (Lancet OA via CC BY 4.0)

[^corley2025]: [[studies/corley-2025-semaglutide-epigenetic-aging]] · n=84 (45 semaglutide / 39 placebo) · rct (double-blind phase 2b, 32 wk) · model: HIV-associated lipohypertrophy adults; virologically suppressed HIV on ART · doi:10.1038/s41467-026-72861-3 · published *Nature Communications* 2026-05-19 (preprint doi:10.1101/2025.07.09.25331038 originally deposited on medRxiv 2025) · **COI: 3/7 authors affiliated with TruDiagnostic (Corley MJ — scientific advisor; Dwaraka V, Smith R — employees); TruDiagnostic performed all clock analyses — material conflict as clock vendor co-authored study showing their own clocks respond to drug** · epigenetic clocks were secondary/exploratory endpoints (parent trial primary = CT/DEXA adipose tissue); no multiple-comparisons correction across clock battery; population not generalizable to healthy non-diseased individuals
