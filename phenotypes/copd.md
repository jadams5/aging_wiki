---
type: phenotype
aliases: [COPD, chronic obstructive pulmonary disease, emphysema, chronic bronchitis, chronic lower respiratory disease, CLRD]
icd-10: J44
icd-11: CA22  # #gap/needs-icd11-recheck — WHO ICD-11 API requires authentication; CA22 is consistent with standard coding resources but not independently verified here
affected-tissues: ["[[lung]]"]
underlying-hallmarks:
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[stem-cell-exhaustion]]"
  - "[[loss-of-proteostasis]]"
  - "[[epigenetic-alterations]]"
typical-onset: "Symptom onset typically >40 years; accelerates steeply after 60; most diagnoses in the sixth-seventh decade"
prevalence-65plus: "~19–28% by GOLD spirometry in adults ≥65 (Adeloye 2022: 65–69 yr ~19.5%, 70–74 yr ~23.4%, 75–79 yr ~27.8% worldwide); self-reported diagnosis substantially lower due to underdiagnosis"
literature-checked-through: 2026-06-11
verified: true
verified-date: 2026-06-11
verified-by: claude
verified-scope: "Barnes 2017, GBD 2023 (EClinicalMedicine), Adeloye 2022, Stolz 2022 Lancet Commission PDFs read and cross-checked. ICD-11 CA22 code not independently re-verified against WHO ICD-11 browser (API requires authentication); tag #gap/needs-icd11-recheck. Subedi 2025 and Baker 2026 and de la Grange 2021 verified via PubMed abstract and DOI metadata only (full text unavailable or download failed). Supersession check not required for type: phenotype."
---

# COPD — Chronic Obstructive Pulmonary Disease

A progressive, irreversible limitation of airflow caused by structural destruction of the small airways and alveolar parenchyma, compounded by chronic airway inflammation. COPD encompasses two pathological patterns that usually co-exist: **emphysema** (loss of alveolar walls and elastic recoil, causing gas-trapping and hypoxemia) and **chronic bronchitis** (mucus hypersecretion, airway-wall remodeling, and recurrent exacerbations). COPD is widely recognized as a disease of **accelerated lung aging** — it recapitulates, in compressed form, the cellular and molecular hallmarks of normal aging but at a rate far exceeding chronological age [^barnes2017].

COPD is the **fourth leading cause of death globally** (2021 GBD data), responsible for approximately 3.3 million deaths annually, and **rises steeply with age** — it is one of the dominant causes of morbidity and excess mortality in adults over 65 [^gbd2023crd]. In the United States it is tracked under "chronic lower respiratory disease" (CLRD; ICD-10 J40–J47) as a top-5 cause of death.

## Diagnostic framework (GOLD)

The Global Initiative for Chronic Obstructive Lung Disease (GOLD) uses **post-bronchodilator spirometry** as the diagnostic anchor [^stolz2022]:

| Criterion | Definition |
|---|---|
| Airflow obstruction | FEV₁/FVC < 0.70 post-bronchodilator |
| GOLD 1 — mild | FEV₁ ≥ 80% predicted |
| GOLD 2 — moderate | 50% ≤ FEV₁ < 80% predicted |
| GOLD 3 — severe | 30% ≤ FEV₁ < 50% predicted |
| GOLD 4 — very severe | FEV₁ < 30% predicted |

A key limitation flagged by the 2022 Lancet Commission: spirometry is **insensitive for early pathological changes** — small-airway disease and emphysematous destruction may be substantial before FEV₁ falls. CT-based quantification of emphysema and air-trapping offers earlier structural staging [^stolz2022].

## Epidemiology

- **Global prevalence (2019):** 10.3% (95% CI 8.2–12.8%) among adults aged 30–79 by GOLD definition, equivalent to ~392 million people; 80% in low- and middle-income countries [^adeloye2022].
- **Absolute burden:** 212.3 million (200.4–225.1 million) prevalent cases globally; 3.3 million (2.9–3.6 million) deaths (GBD 2019) [^gbd2023crd].
- **Age gradient:** prevalence rises sharply with age; the overwhelming majority of COPD deaths occur in individuals ≥65. By the GOLD spirometry definition, worldwide prevalence in the 65–69 age band is ~19.5% (95% CI 15.8–23.7%), rising to ~23.4% at 70–74 and ~27.8% at 75–79 years [^adeloye2022]; substantial underdiagnosis persists because many older adults attribute dyspnea to "normal aging."
- **Primary risk factors:** cigarette smoking accounts for ~70–80% of cases in high-income countries (pooled OR 3.2 [95% CI 2.5–4.0] for current smokers vs non-smokers; reported as odds ratio from multivariable meta-analysis) [^adeloye2022]; ambient and household air pollution, occupational dust/fumes, and biomass fuel exposure account for the majority of the remainder. See [[exposures/smoking]] and [[exposures/air-pollution]].
- **Sex:** historically male-predominant, but sex gap is narrowing; female smokers may develop COPD at lower cumulative pack-year exposure.

## Pathophysiology: COPD as accelerated lung aging

Peter Barnes (2017) systematically mapped COPD onto the hallmarks of aging framework [^barnes2017], establishing it as the paradigm case of **accelerated aging in a single organ**:

### Cellular senescence

Airway epithelial cells, alveolar type II (AT2) pneumocytes, and lung fibroblasts exhibit markers of cellular senescence (p21, p16^INK4a, SA-β-gal, γH2AX foci) in COPD lung tissue at levels exceeding age-matched non-COPD controls [^subedi2025]. The senescence-associated secretory phenotype (SASP) — driven by NF-κB (activated via p21→p38 MAPK→JAK signaling) and mTORC1 — amplifies local inflammation, activates matrix metalloproteinases causing alveolar wall destruction, and impairs regeneration. Cigarette smoke and particulate matter drive senescence via oxidative DNA damage and telomere shortening at rates that far exceed normal chronological accumulation [^barnes2017]. See [[cellular-senescence]].

A 2026 review updating the hallmarks-of-aging-lung framework highlights that **extracellular matrix (ECM) dysregulation** has emerged as a central, under-appreciated driver: dysfunctional senescent fibroblasts and AT2 cells secrete disorganized ECM, impairing alveolar repair and mechanical compliance [^baker2026].

### Chronic inflammation (inflammaging)

COPD features a persistent low-grade inflammatory milieu — elevated neutrophils, macrophages, and CD8+ T-cells in bronchoalveolar lavage, with systemic spillover of IL-6, IL-8, TNF-α, and CRP. This mirrors and amplifies the systemic "inflammaging" of normal aging (see [[chronic-inflammation]]). Notably, the inflammatory response in COPD persists after smoking cessation, implicating self-sustaining SASP loops rather than ongoing insult alone.

### Mitochondrial dysfunction

Mitochondrial content and oxidative phosphorylation capacity are reduced in COPD airway smooth muscle, alveolar macrophages, and epithelial cells. Reactive oxygen species (ROS) generation — from both cigarette smoke and dysfunctional mitochondria — drives the oxidative stress that initiates and amplifies senescence and inflammation loops [^barnes2017]. [[Mitophagy]] impairment allows accumulation of dysfunctional mitochondria. See [[mitochondrial-dysfunction]].

### Stem cell exhaustion

The alveolar type II cell is the primary progenitor for alveolar repair. In COPD, AT2 cell number, telomere length, and proliferative capacity are all reduced. Basal progenitor cells in conducting airways also show impaired self-renewal — driven partly by TGF-β/Slug/Snail2 signaling, which represses stem-cell-identity transcription factors in COPD bronchial progenitors [^delagrange2021]. The net result: tissue destruction from emphysema and chronic injury cannot be offset by regeneration. See [[stem-cell-exhaustion]].

### Loss of proteostasis and impaired autophagy

Cigarette-smoke exposure impairs the ubiquitin-proteasome system and autophagy in lung cells, causing accumulation of damaged, misfolded, or aggregated proteins. Impaired mitophagy specifically exacerbates the mitochondrial ROS burden. [[Loss-of-proteostasis]] feeds back into the senescence program via unresolved ER stress. Autophagy induction (via AMPK activation or mTOR inhibition) is studied as a potential COPD-modifying mechanism [^barnes2017].

### Epigenetic alterations

Sirtuin 1 (SIRT1), a deacetylase that also deacetylates histones and suppresses NF-κB, is reduced in COPD lung tissue relative to age-matched controls and normal lungs [^barnes2017]. SIRT1 reduction is mechanistically linked to histone hyperacetylation at inflammatory gene loci, amplifying cytokine expression. DNA methylation patterns in COPD airways show accelerated epigenetic age by clock measures. See [[epigenetic-alterations]].

## Clinical manifestations

| Manifestation | Pathological substrate |
|---|---|
| Progressive dyspnea | Airflow obstruction + gas-trapping + impaired diffusion |
| Chronic productive cough | Mucus hypersecretion, mucociliary dysfunction |
| Wheezing, chest tightness | Dynamic airway collapse |
| Acute exacerbations (AECOPD) | Viral/bacterial infection, air-pollution spikes |
| Hypoxemia → cor pulmonale | Hypoxic pulmonary vasoconstriction, RV strain |
| Cachexia and muscle wasting | Systemic inflammation + hypoxia-driven catabolism → comorbid [[sarcopenia]] |
| Exercise intolerance | Ventilatory limitation + skeletal muscle deconditioning |

**Multimorbidity is the rule, not the exception.** Cardiovascular disease, type 2 diabetes, osteoporosis, anxiety/depression, and lung cancer co-occur at elevated rates in COPD, many sharing the same accelerated-aging mechanistic substrate [^barnes2017].

## Risk factors

| Factor | Magnitude / notes |
|---|---|
| Cigarette smoking | pooled OR ~3.2 (95% CI 2.5–4.0) for current smokers; dose-response with pack-years; see [[exposures/smoking]] |
| Air pollution (ambient PM₂.₅/ozone + household biomass) | Major driver in LMICs; independent of smoking; see [[exposures/air-pollution]] |
| Occupational dust/fumes | Coal dust, silica, cadmium, isocyanates |
| Alpha-1 antitrypsin deficiency (AATD) | Monogenic susceptibility (~1% of COPD cases); accelerated emphysema |
| Early life lung development | Low birth weight, childhood respiratory infections, bronchopulmonary dysplasia |
| Older age | Strongest modifier of disease expression; "senile emphysema" even without exposure |

## Outcomes and mortality

COPD is associated with significant excess mortality, primarily from **respiratory failure**, **cardiovascular events** (shared inflammatory/metabolic substrate), and **lung cancer** (independent of smoking). Five-year mortality in GOLD 3–4 disease exceeds 50% in many registry cohorts. Acute exacerbations are the primary driver of hospitalization and functional decline; each hospitalized exacerbation is associated with ~10% excess 1-year mortality. #gap/needs-replication for age-stratified excess mortality figures — cite GBD data for global burden.

## Hallmark mapping

COPD exemplifies **multi-hallmark convergence** in a single tissue:

| Hallmark | Lung-specific manifestation |
|---|---|
| [[cellular-senescence]] | AT2, airway epithelial, and fibroblast senescence; SASP-driven destruction |
| [[chronic-inflammation]] | Persistent neutrophil/macrophage/T-cell infiltrate; systemic spillover |
| [[mitochondrial-dysfunction]] | ROS amplification; impaired mitophagy; reduced OXPHOS in muscle and lung |
| [[stem-cell-exhaustion]] | AT2 progenitor depletion; impaired alveolar regeneration |
| [[loss-of-proteostasis]] | UPS/autophagy impairment; ER stress; misfolded protein accumulation |
| [[epigenetic-alterations]] | SIRT1 reduction; histone hyperacetylation at NF-κB loci; accelerated epigenetic clock |

## Therapeutic landscape

### Established (symptom control / exacerbation prevention)

- **Smoking cessation** — the only intervention shown to modify FEV₁ decline trajectory; neutralizes the primary driver
- **Bronchodilators** (LAMA/LABA, dual therapy) — reduce dynamic hyperinflation, improve dyspnea and exercise tolerance
- **ICS/LABA combinations** — indicated in eosinophilic COPD (blood eos ≥300 cells/μL); reduce exacerbations
- **Pulmonary rehabilitation** — strong evidence for exercise capacity and quality of life; no FEV₁ effect
- **Supplemental O₂** — reduces mortality in severe resting hypoxemia (PaO₂ <55 mmHg)

### Aging-mechanism-targeting (investigational)

| Target | Agent / approach | Status |
|---|---|---|
| Senescent cell clearance | Senolytics (dasatinib + quercetin, navitoclax) | Preclinical lung evidence; no powered COPD-specific trial registered as of 2026-06-11 |
| SASP suppression | JAK inhibitors (ruxolitinib), SIRT1 activators (SRT1720) | Preclinical |
| Autophagy/mTOR | Rapamycin (mTOR inhibition → autophagy induction) | Preclinical in smoke models |
| NAD⁺ repletion | NMN / NR | Preclinical; no COPD-powered human trial |
| SIRT1 restoration | Resveratrol analogues | Preclinical; Phase 2 trials yielded mixed results |

#gap/needs-human-replication — No senolytic or geroprotective agent has yet demonstrated FEV₁-trajectory modification in a powered randomized trial for COPD.

## Limitations and gaps

- **Underdiagnosis** — the majority of people with spirometry-confirmed COPD are undiagnosed or diagnosed late (GOLD 3–4); prevalence estimates from self-report substantially undercount true burden. #gap/needs-replication
- **Spirometry insensitivity** — FEV₁/FVC threshold of 0.70 misclassifies some older adults without significant pathology as COPD (fixed-ratio vs LLN debate) [^stolz2022]; early alveolar and small-airway disease is invisible to spirometry.
- **COPD-aging mechanism causality** — most mechanism data is from cross-sectional comparisons of COPD vs non-COPD lungs; MR and longitudinal studies directly testing aging hallmarks as causal drivers (rather than consequences) of COPD progression are sparse. #gap/needs-replication
- **Geroprotective target validation** — no COPD-specific senolytic or NAD⁺-repletion trial has reported. Translating the accelerated-aging framework to therapy remains an open problem. #gap/needs-human-replication
- **ECM mechanics** — the contribution of ECM composition changes (age-dependent collagen cross-linking, elastin loss) to loss of lung elastic recoil is mechanistically established but not yet targetable.
- **Missing exposure pages** — [[exposures/smoking]] and [[exposures/air-pollution]] are listed as wikilinks but seeded in the same batch; links are expected stubs.

## See also

- [[lung]] · [[cellular-senescence]] · [[chronic-inflammation]] · [[mitochondrial-dysfunction]]
- [[stem-cell-exhaustion]] · [[loss-of-proteostasis]] · [[epigenetic-alterations]]
- [[sarcopenia]] (frequent co-morbidity)
- [[exposures/smoking]] · [[exposures/air-pollution]]

## Footnotes

[^barnes2017]: doi:10.1146/annurev-physiol-022516-034314 · Barnes PJ · *Annual Review of Physiology* 2017;79:517-539 · n=N/A (review) · review · model: human + multiple · 218 citations · PMID 27959617 · Foundational framing of COPD as accelerated lung aging; systematically maps COPD onto hallmarks of aging including cellular senescence, telomere shortening, PI3K-mTOR activation, impaired autophagy, mitochondrial dysfunction, stem cell exhaustion, epigenetic changes, and inflammaging

[^stolz2022]: doi:10.1016/S0140-6736(22)01273-9 · Stolz D, Mkorombindo T, Dransfield MT et al. · *Lancet* 2022;400(10356):921-972 · n=N/A (Lancet Commission) · review/commission · model: human · 588 citations · PMID 36075255 · Comprehensive 2022 Lancet Commission report; covers diagnosis, epidemiology, risk factors, pathophysiology, and treatment; flags spirometry insensitivity for early disease and calls for elimination strategy

[^gbd2023crd]: doi:10.1016/j.eclinm.2023.101936 · GBD 2019 Chronic Respiratory Diseases Collaborators · *EClinicalMedicine* 2023;59:101936 · n=204 countries (systematic analysis) · meta-analysis/systematic review · model: human · PMID 37229504 · COPD: 212.3 million prevalent cases, 3.3 million deaths globally in 2019; leading cause of mortality among chronic respiratory diseases; smoking and air pollution are leading attributable risk factors

[^adeloye2022]: doi:10.1016/S2213-2600(21)00511-7 · Adeloye D, Song P, Zhu Y et al. · *Lancet Respir Med* 2022;10(5):447-458 · n=162 articles across 260 sites in 65 countries · systematic review + modelling · model: human · PMID 35279265 · Global COPD prevalence 10.3% (95% CI 8.2–12.8%) in adults 30–79 years by GOLD definition; 391.9 million people; pooled OR 3.2 (95% CI 2.5–4.0) for current smokers vs non-smokers (multivariable meta-analysis of ORs, not a relative risk); 80% of cases in LMICs; age-stratified worldwide prevalence: 65–69 yr 19.5%, 70–74 yr 23.4%, 75–79 yr 27.8% (Table 1)

[^subedi2025]: doi:10.1016/j.arr.2025.102813 · Subedi S, Guntipally M, Suwal N et al. · *Ageing Research Reviews* 2025;110:102813 · n=N/A (review) · review · model: human + in vitro · PMID 40571131 · Comprehensive 2025 review of cellular senescence mechanisms in COPD; covers SASP, oxidative stress, DNA damage, telomere shortening, and senolytic therapeutic strategies; notes COPD accounts for ~3.5 million deaths (2021 figures)

[^baker2026]: doi:10.1183/13993003.01272-2025 · Baker JR, Beaulieu D, Avci E et al. · *European Respiratory Journal* 2026;2501272 · n=N/A (review) · review · model: human + multiple · PMID 41819537 · 10-year update on hallmarks of ageing in the lung; highlights ECM dysregulation, extracellular vesicles, and microbiome as emerging mechanisms alongside canonical cellular-senescence drivers; covers COPD, IPF, and lung cancer

[^delagrange2021]: doi:10.1007/s11033-021-06664-8 · de la Grange P et al. · *Molecular Biology Reports* 2021 · in vitro · model: human COPD bronchial epithelial progenitors · PMID 34436724 · TGF-β/Slug/Snail2 signaling represses stem-cell-identity transcription factors in COPD bronchial progenitors, contributing to epithelial progenitor exhaustion
