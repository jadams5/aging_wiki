---
type: phenotype
aliases: [geriatric frailty syndrome, frailty syndrome, physical frailty]
icd-10: R54
icd-11: MG2A
affected-tissues:
  - "[[skeletal-muscle]]"
  - "[[bone-marrow]]"
  - "[[brain]]"
  - "[[adipose-tissue]]"
underlying-hallmarks:
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
  - "[[stem-cell-exhaustion]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[deregulated-nutrient-sensing]]"
typical-onset: "65+ generally (clinical frailty); biological underpinnings accumulate from midlife"
prevalence-65plus: "~10–15% aged 65+; ~25–50% aged 85+ (varies by definition)"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Mitnitski 2001, Howlett 2013, Justice 2019 PDFs verified against primary source; Fried 2001 verified against PubMed abstract only (full PDF closed-access, bronze OA URL blocked by publisher paywall); Pahor 2014 verified against PubMed abstract; Rockwood 2007 and Clegg 2013 not verified (not_oa, tagged) | Sex-differences section verified 2026-06-03: Shi 2014 full PDF verified (quantitative FI limits confirmed exactly); Cohen 2018 full PDF verified (dysregulation system claims confirmed); Ahrenfeldt 2019 verified via PMC full text (OR + CI confirmed); Gordon 2018 and Gordon 2019 closed-access (not_oa) — abstract-level only via Crossref metadata; Gordon 2020 (MJA) confirmed via publisher page"
---

> ⚠️ Partial-verification note (2026-05-04): Rockwood 2007 (10.1093/gerona/62.7.722) and Clegg 2013 (10.1016/S0140-6736(12)62167-9) are closed-access and could not be verified against full text. Claims sourced from these two papers are tagged #gap/no-fulltext-access. Fried 2001 full-text PDF was blocked by publisher paywall (bronze OA); verified against PubMed abstract only — quantitative HR claims that could not be confirmed from the abstract are flagged.

# Frailty

Frailty is a clinical syndrome of decreased physiological reserve and increased vulnerability to stressors, resulting in adverse health outcomes including disability, falls, hospitalization, and premature mortality [^fried2001]. It is widely regarded as the canonical integrative aging phenotype — the clinical readout of cumulative hallmark-of-aging burden across multiple organ systems. Frailty is distinct from [[sarcopenia]] (which is restricted to the musculoskeletal system), though sarcopenia is the most prominent component of physical frailty and the two conditions substantially overlap.

Frailty affects ~10–15% of community-dwelling adults aged 65+ and ~25–50% of those aged 85+, depending on the operational definition applied [^clegg2013-review]. The pre-frail state (partial criteria met) may affect an additional 40–50% of older adults, creating a large population at risk of progression.

## Operational definitions

Two major frameworks dominate clinical and research use; they measure different constructs and produce non-interchangeable prevalence estimates.

### Fried Frailty Phenotype (2001) — physical frailty model

Proposed by Fried et al. in the Cardiovascular Health Study (CHS; n=5,317, community-dwelling adults ≥65) [^fried2001]. Defines frailty using five criteria:

| Criterion | Measurement |
|---|---|
| Unintentional weight loss | 10 lbs in past year (the ">5% body weight" alternate threshold is widely cited but not confirmed from abstract; full-text unverified) |
| Exhaustion | Self-reported (CES-D items 7 and 20) |
| Weakness | Grip strength (handgrip dynamometry; lowest quintile by sex + BMI) |
| Slow gait speed | 15-foot walk; lowest quintile by sex + height |
| Low physical activity | Weekly kilocalories (MLTA); lowest quintile by sex |

Classification: 0 criteria = robust; 1–2 = pre-frail; ≥3 = frail [^fried2001]. In the CHS cohort, 6.9% were frail and 40.5% were pre-frail at baseline. Three-year outcomes for frail vs robust adults: unadjusted HRs ranged 1.82–4.46 across outcomes (falls, disability, hospitalization, death); adjusted HRs (controlling for health, disease, and social characteristics) ranged 1.29–2.24 [^fried2001]. #gap/no-fulltext-access — outcome-specific HRs (per-endpoint breakdown) could not be confirmed; full-text PDF is blocked by publisher paywall.

The Fried phenotype has been the dominant definition in pharmaceutical and senolytic trial endpoints. Its limitation is reliance on specific physical performance tests that may miss cognitive and social dimensions of frailty.

### Frailty Index — cumulative deficit model (Rockwood)

The Frailty Index (FI) counts health deficits (symptoms, signs, diagnoses, disabilities) and expresses frailty as a proportion: FI = deficits present / total deficits assessed [^mitnitski2001]. The original formulation used 92 variables drawn from the Canadian Study of Health and Aging (CSHA; n=2,913 individuals; survival analysis n=1,468 with death-date records). The FI is continuous, works with standard electronic health record data, and performs as well or better than the Fried Phenotype for adverse outcome prediction.

Key properties of the FI [^rockwood2007]:
- Submaximal limit: even the most frail individuals rarely exceed FI ~0.7 (biological ceiling)
- Exponential relationship between FI and mortality risk
- Each 0.01 increment in FI associated with ~3% increase in mortality risk in community-dwelling adults

The Clinical Frailty Scale (CFS; Rockwood 2005) is a clinician-administered 9-point ordinal scale derived from the FI framework, widely used in hospital and intensive care settings (score ≥5 = frail). A mouse analogue of the FI has been validated, enabling preclinical frailty research [^howlett2013].

### FRAIL scale

Five self-reported questions (Fatigue, Resistance, Ambulation, Illness burden, Loss of weight). Each scored 0 or 1; ≥3 = frail. Less granular than Fried; practical for primary care screening. Not widely used in aging mechanism research.

**Key implication for wiki use:** Unless otherwise specified, "frailty" on this page refers to the Fried Frailty Phenotype. When citing prevalence or outcome data, the definition used must be stated explicitly.

## Pathophysiology

Frailty is a convergent multi-system phenotype; no single mechanism is sufficient. The hallmarks most implicated:

### 1. Sarcopenia — the musculoskeletal core

Loss of skeletal muscle mass, strength, and function (see [[sarcopenia]]) is the most prominent biological substrate of physical frailty. Shared mechanisms include satellite cell dysfunction ([[stem-cell-exhaustion]]), anabolic resistance to amino acids and exercise ([[deregulated-nutrient-sensing]] / blunted [[mtor|mTORC1]] activation), and accumulation of dysfunctional mitochondria in muscle fiber ([[mitochondrial-dysfunction]]). Sarcopenia and frailty overlap by ~50% in population studies but are not identical: cognitive and immunological dimensions of frailty are not captured by sarcopenia criteria.

### 2. Cellular senescence accumulation and SASP

Senescent cells accumulate across multiple tissues with age ([[cellular-senescence]]). Their senescence-associated secretory phenotype (SASP) — including IL-6, IL-1β, TNF-α, MMP-3, GDF-15 — drives systemic inflammation, disrupts tissue architecture, and impairs stem cell niches [^justice2019-ipf]. This mechanism links frailty to multiple organ systems simultaneously: SASP from adipose tissue, skeletal muscle, bone marrow, and brain can all contribute to the frailty phenotype. Senolytics that clear SASP-secreting cells are a key preclinical intervention strategy. #gap/needs-human-replication — direct senolytic reversal of frailty-defining endpoints not yet shown in RCTs.

### 3. Chronic inflammation / inflammaging

Elevated circulating IL-6, CRP, TNF-α, and other inflammatory markers consistently predict frailty incidence and progression in prospective cohort studies [^clegg2013-review]. This "inflammaging" pattern ([[chronic-inflammation]]) is both a cause (cytokine-driven catabolism of muscle; suppression of satellite cell function; disruption of hematopoiesis) and an effect (senescent cells, gut dysbiosis, and impaired immune clearance all amplify the inflammatory signal). Whether inflammation is upstream or downstream of other frailty mechanisms is not fully resolved. #gap/contradictory-evidence

### 4. Immunosenescence and immune system remodeling

Age-associated immune remodeling ([[immunosenescence]]) contributes to frailty through multiple routes: diminished response to infection and vaccination increases morbidity risk; clonal hematopoiesis (CHIP) and myeloid skewing of the hematopoietic stem cell (HSC) pool ([[stem-cell-exhaustion]] / [[hematopoietic-stem-cells]]) alter inflammatory tone; accumulation of terminally differentiated, exhausted T cells (the immune risk profile, IRP) is independently associated with frailty and mortality. Frail individuals show more pronounced immunosenescence features than age-matched non-frail adults.

### 5. Hormonal dysregulation

Frailty is associated with declining levels of several anabolic/regulatory hormones:
- **IGF-1 / GH axis**: reduced GH pulsatility and circulating IGF-1 contribute to sarcopenia and reduced tissue repair capacity
- **Testosterone** (men) and **estrogen** (women): postmenopausal / andropause hormonal changes accelerate musculoskeletal frailty
- **DHEA-S**: declines with age (adrenopause) and correlates inversely with frailty severity; causality not established #gap/no-mechanism
- **Vitamin D**: deficiency is common in frail older adults and associated with worse outcomes; supplementation evidence in frailty is mixed #gap/contradictory-evidence

### 6. Cognitive frailty subtype

When cognitive impairment co-occurs with physical frailty in the absence of dementia, this is termed "cognitive frailty" (IANA/IAGG consensus). The cognitive frailty subtype is associated with higher rates of dementia conversion and greater mortality risk than either condition alone. Neural substrates include white matter lesions, reduced brain volume, and accumulation of senescent microglia. Cross-link: [[neurodegeneration]], [[alzheimers-disease]].

## Assessment instruments summary

| Tool | Type | Criteria | Setting |
|---|---|---|---|
| Fried Phenotype | Physical phenotype | 5 criteria (0–5) | Research, clinical trial |
| Frailty Index (FI) | Cumulative deficit | ≥30 variables (0–1 ratio; original CSHA formulation used 92) | Population, EHR |

**Canonical Frailty Index biomarker page:** [[biomarkers/frailty-index]] — Mitnitski/Rockwood derivation, mouse-translation (Howlett 2013 31-item clinical FI), submaximal-limit (~0.7) literature, MR + intervention-responsiveness assessment. Quantitative claims about FI itself live there; this phenotype page focuses on frailty as a clinical syndrome.


| Clinical Frailty Scale (CFS) | Clinical global | 9-point ordinal | Hospital, ICU |
| FRAIL scale | Self-report | 5 yes/no items (0–5) | Primary care |
| SPPB | Performance | Gait speed + balance + chair stand | Clinical, trial |

Gait speed alone is a powerful frailty biomarker: speed < 0.8 m/s defines severe sarcopenia (EWGSOP2) and predicts mortality independently. Grip strength below sex-specific cutpoints is the most commonly used single-item frailty screen.

## Biomarkers

No single biomarker is diagnostic; panels are most predictive:

| Biomarker | Direction with frailty | Notes |
|---|---|---|
| Gait speed | Decreased | <0.8 m/s = high-risk threshold |
| Grip strength | Decreased | Sex-specific cutoffs (EWGSOP2: <27 kg men / <16 kg women) |
| hsCRP | Elevated | Inflammatory component; confounded by acute illness |
| IL-6 | Elevated | Inflammatory predictor of incident frailty in CHS cohort; specific citation to Fried 2001 could not be confirmed from abstract (IL-6 not mentioned) — may be from later CHS analysis #gap/unsourced |
| IGF-1 | Decreased | Anabolic axis decline |
| 25-OH vitamin D | Decreased | Association; causality unclear |
| Lymphocyte count | Decreased | Immunosenescence marker |
| Albumin | Decreased | Late-stage marker; poor nutritional/hepatic reserve |

#gap/needs-replication — no biomarker panel has been validated prospectively for frailty staging and treatment response in a randomized trial.

## Adverse outcomes

Frailty predicts adverse outcomes independent of comorbidities in prospective data [^fried2001] [^clegg2013-review]:

| Outcome | Approximate HR (frail vs robust) | Source |
|---|---|---|
| All-cause mortality (3-yr) | ~2–5× unadjusted; ~1.3–2.2× adjusted | Fried 2001 abstract (full-text unverified) #gap/no-fulltext-access |
| Incident disability | ~2–4× unadjusted | Fried 2001 abstract (full-text unverified) #gap/no-fulltext-access |
| Falls | ~1.5–2× | Fried 2001 abstract (full-text unverified); Clegg 2013 (not_oa) |
| Hospitalization | ~1.5–2× | Fried 2001 abstract (full-text unverified) #gap/no-fulltext-access |
| Surgical complications | ~2–4× | Clegg 2013 (not_oa) #gap/no-fulltext-access |
| Cognitive decline / dementia conversion | ~2× | Clegg 2013 (not_oa) #gap/no-fulltext-access |

Note: HRs vary substantially across studies and definitions. In Fried 2001 (CHS cohort), the published abstract reports 3-year unadjusted HRs ranging 1.82–4.46 across outcomes (falls, disability, hospitalization, death), and adjusted HRs 1.29–2.24. The previously cited HR ~6.0 for mortality could not be confirmed from the available source text (full-text PDF is behind a publisher paywall; abstract-level verification only). The table above reflects conservative estimates consistent with the abstract. #gap/no-fulltext-access #gap/needs-replication

## Interventions

Evidence ranked strongest first.

### Exercise — resistance + aerobic training (gold standard non-pharmacological)

Resistance training is the most effective intervention for physical frailty. Even pre-frail and frail older adults show clinically meaningful strength and functional gains with structured programs. The LIFE Study (Lifestyle Interventions and Independence for Elders; n=1,635 community-dwelling adults aged 70–89 meeting mobility-limitation criteria) randomized participants to structured moderate-intensity physical activity (150 min/week walking + resistance + balance + flexibility) vs health education [^pahor2014-life]. Primary outcome: major mobility disability (inability to complete 400m walk test) was significantly reduced in the activity arm (HR 0.82, 95% CI 0.69–0.98, p=0.03) over ~2.6 year follow-up [^pahor2014-life]. Frailty reversal (pre-frail → robust) has been demonstrated in multiple exercise RCTs, though most are short-term. #gap/long-term-unknown

### Nutrition — protein adequacy and distribution

- Daily protein ≥ 1.2–1.5 g/kg body weight for frail older adults (RDA of 0.8 g/kg is insufficient for this population — see [[sarcopenia]] for mechanistic rationale and [[protein-intake]] for the full evidence base, including Bauer 2013 PROT-AGE + Deutz 2014 ESPEN consensus)
- Even distribution across meals (~30–40 g protein per meal) appears more effective than skewed intake
- Leucine supplementation (~3 g/meal) helps overcome anabolic resistance
- Vitamin D repletion (25-OH-D > 30 ng/mL) recommended when deficient; evidence for supplementation in non-deficient individuals is weaker

### Multidomain interventions

The FINGER trial (Finland) and similar multidomain trials (combining exercise, nutrition, cognitive training, and vascular risk management) have shown modest effects on cognitive outcomes and functional decline in at-risk older adults, suggesting multi-component approaches are superior to single-domain interventions for the cognitive frailty subtype. Effect sizes are modest in most trials. #gap/needs-replication

### Senolytics — dasatinib + quercetin (D+Q), emerging

The first-in-human senolytic trial by Justice et al. 2019 (n=14 idiopathic pulmonary fibrosis patients; open-label pilot; D 100 mg + Q 1250 mg/day for 3 consecutive days × 3 weeks) showed improvements in frailty-adjacent physical function endpoints: 6-minute walk distance (+21.5 m from baseline 447 m, ~+4.8%, p=0.012), 4-m gait speed (+0.12 m/s, p=0.024), and timed 5-repetition chair-stands (−2.2 s, p=0.013) [^justice2019-ipf]. **Important caveat:** IPF is not a frailty population; these are surrogate endpoints, not primary frailty outcomes; study was uncontrolled. The clinical relevance to geriatric frailty specifically is translational inference rather than demonstrated efficacy. #gap/needs-replication #gap/needs-human-replication

### Pharmacological targets under investigation

| Target / Agent | Rationale | Status |
|---|---|---|
| Senolytics (D+Q, fisetin, navitoclax) | SASP clearance; improve stem cell niche | Phase 2 trials ongoing; IPF pilot favorable |
| GLP-1 agonists (semaglutide, etc.) | Weight/muscle composition; systemic inflammation | Concern for muscle loss with obesity treatment; ongoing trials |
| Testosterone (men with low T) | Anabolic; muscle mass | Modest functional benefit; cardiovascular safety contested |
| mTOR inhibitors (rapamycin/RAD001) | mTOR hyperactivation in aging; immune remodeling | Mannick 2014 rapalogue improved vaccine response in elderly; frailty RCT absent |
| IL-6 / IL-1β inhibition (tocilizumab, canakinumab) | Inflammaging; SASP suppression | CANTOS (canakinumab) showed reduced cardiovascular events; frailty endpoint absent |
| Metformin (TAME trial) | Multi-target geroprotector; AMPK activation | TAME Phase 3 design (Barzilai 2016); not currently ClinicalTrials.gov-registered as of 2026-05 (NCT03138915 cited previously is unrelated — hepatic CT angiography study); see [[metformin]] |

## Sex differences and the male-female health-survival paradox

### The paradox

Across population studies, women have consistently **higher frailty prevalence and higher Frailty Index scores** than age-matched men, yet women have **lower mortality** — both overall and, in most cohorts, at equivalent frailty severity [^gordon2018-paradox] [^gordon2020-review]. This is the "male-female health-survival paradox": women accumulate more health deficits, but survive them better. The paradox is clinically important because it means standard frailty thresholds may carry different prognostic weight by sex.

In a large European cohort (n=113,299 adults aged 50+), women had 56% higher odds of frailty than men after adjustment (OR 1.56, 95% CI 1.51–1.62) [^ahrenfeldt2019]. In FI-based studies using the Beijing Longitudinal Study of Aging (n=3,257 adults 55+), women's FI values were higher at every age, yet their FI ceiling — the submaximal limit beyond which near-complete 5-year mortality is observed — was higher too (women ~0.52 at age 65 vs men ~0.44 at age 60), meaning women tolerate a greater absolute deficit burden before dying [^shi2014-fi-sex].

This is distinct from (but related to) [[female-longevity-advantage]]: the frailty paradox is one specific facet of that broader phenomenon, operating via differential deficit type and survival tolerance rather than simply through lower disease incidence.

### Candidate explanations

No single mechanism is established. The leading candidates are complementary rather than mutually exclusive:

1. **Deficit type, not just quantity.** Women accumulate disproportionately more non-lethal deficits — musculoskeletal pain, depression, sensory impairment, urinary symptoms — that inflate frailty scores without directly increasing short-term mortality risk. Men, by contrast, accumulate fewer but more lethal deficits (cardiovascular disease, respiratory failure, organ dysfunction). Gordon & Hubbard (2019) reviewed sex differences in chronic disease burden and found this differential deficit composition largely, though not fully, accounts for the paradox [^gordon2019-mad]. #gap/contradictory-evidence — the composition hypothesis does not explain survival differences when men and women are matched on equivalent FI levels.

2. **Frailty-instrument sex-specificity.** The Fried Frailty Phenotype applies **sex-specific cutpoints** for grip strength (men <27 kg / women <16 kg; EWGSOP2 thresholds) and gait speed (lowest quintile stratified by sex and height). This design partially corrects for absolute differences in muscle mass, but does not adjust for other dimensions where male/female distributions diverge (e.g., fatigue and weight loss criteria may have different clinical weight by sex). #gap/no-mechanism — whether the sex-adjusted cutpoints overcorrect or undercorrect the true paradox is not established.

3. **Hormonal and endocrine contributors.** Estrogen withdrawal at [[menopause]] accelerates musculoskeletal frailty trajectories — bone loss, adipose redistribution, and anabolic resistance all accelerate perimensopausally. Testosterone decline at [[andropause]] is independently associated with [[sarcopenia]] and grip-strength loss in men; paradoxically, the more precipitous mid-life testosterone drop in men may contribute to earlier-onset lethal deficit accumulation, despite their lower overall frailty burden. The net hormonal effect on the survival vs. frailty balance is unresolved. #gap/no-mechanism

4. **Physiological dysregulation tolerance.** Cohen et al. (2018; InCHIANTI + BLSA + NHANES cohorts) found men have **higher global physiological dysregulation** — particularly in oxygen transport and hematopoietic systems (p<0.001) — than women, yet do not convert to frailty at equivalent rates, suggesting sex-specific thresholds for translating dysregulation into functional deficit [^cohen2018-dysreg]. The mechanism underlying this differential tolerance is unknown.

5. **Behavioural and reporting factors.** Women report more symptoms, seek medical care more often, and may be more willing to endorse functional limitations in survey instruments. This inflates measured FI without necessarily reflecting proportionately worse underlying biology.

### Clinical implications

The paradox means:
- Frailty scores should not be compared directly across sexes without interpretation context.
- Men at the same Fried Phenotype frailty level as women may carry higher short-term mortality risk.
- Intervention trials that do not stratify by sex may mask important effect-size differences. #gap/needs-replication — sex-stratified efficacy data for most frailty interventions (exercise, nutrition, senolytics) are absent from the primary literature [^gordon2020-review].

[^gordon2018-paradox]: doi:10.1016/j.maturitas.2017.09.011 · Gordon EH, Peel NM, Hubbard RE · Maturitas 2018;107:13-18 · observational · review of hospitalised older adults; characterises the male-female health-survival paradox; women more frail, men higher short-term mortality at equivalent frailty · archive: not_oa

[^gordon2020-review]: doi:10.5694/mja2.50466 · Gordon EH, Hubbard RE · Med J Australia 2020;212(4):183-188 · review · sex differences in frailty across definitions; paradox framing; intervention evidence gaps by sex · archive: not_oa

[^gordon2019-mad]: doi:10.1016/j.mad.2019.02.004 · Gordon EH, Hubbard RE · Mech Ageing Dev 2019;179:44-50 · review · examines whether sex differences in chronic disease composition explain the sex-frailty paradox; deficit-type hypothesis; partial support · archive: not_oa

[^shi2014-fi-sex]: doi:10.1093/gerona/glt143 · Shi J, Yang Z, Song X, Yu P, Fang X, Tang Z, Peng D, Mitnitski A, Rockwood K · J Gerontol Biol Sci Med Sci 2014;69(6):702-709 · n=3,257 adults 55+ (Beijing Longitudinal Study of Aging) · observational (5-yr longitudinal) · FI constructed from 35 variables; women's FI higher at every age (F=67.87, p<.001); 99% submaximal FI limit: women 0.52±0.04 (age 65) vs men 0.44±0.02 (age 60); FI ≥99th-percentile limit associated with near-complete 5-yr mortality in both sexes; highest absolute FI: 0.69 in women, 0.61 in men (FI never exceeded 0.7) · archive: gold OA, PDF downloaded

[^ahrenfeldt2019]: doi:10.1007/s00038-019-01270-9 · Ahrenfeldt LJ, Möller S, Thinggaard M, Christensen K, Lindahl-Jacobsen R · Int J Public Health 2019;64(7):1025-1036 · n=113,299 Europeans aged 50+ (SHARE study, 2004–2015) · observational (multi-wave) · frailty defined by modified Fried Phenotype (5 items); women OR 1.56 (95% CI 1.51–1.62) for frailty vs men after adjustment for age, wave, region, education, BMI; frailty prevalence: men 14.9% vs women 20.1%; sex differences largest in Southern Europe; supports the male-female health-survival paradox · archive: PMC7237816 (open access via PMC)

[^cohen2018-dysreg]: doi:10.1093/gerona/glx146 · Cohen AA, Legault V, Li Q, Fried LP, Ferrucci L · J Gerontol Biol Sci Med Sci 2018;73(2):175-184 · n=13,909 total (InCHIANTI n=1,147; BLSA n=1,024; NHANES n=11,738); aged 55+ · observational · men show higher physiological dysregulation globally (β=0.172, p<.0001) and specifically in oxygen transport (β=0.175, p<.0001) and hematopoiesis (β=0.220, p<.0001) but not electrolytes, lipids, or liver/kidney function; higher D_M does not translate to proportionately higher frailty risk in men; supports male-female dysregulation-frailty paradox · archive: gold OA, PDF downloaded

## Hallmark mapping

Frailty is the most hallmark-integrated clinical phenotype in aging. It maps to:

| Hallmark | Mechanism in frailty |
|---|---|
| [[cellular-senescence]] | SASP-driven systemic inflammation; impaired stem cell niches across tissues |
| [[chronic-inflammation]] | Inflammaging cytokines (IL-6, CRP) predict frailty incidence and progression |
| [[stem-cell-exhaustion]] | HSC myeloid skew (CHIP); satellite cell dysfunction (sarcopenia); neural stem cell decline (cognitive frailty) |
| [[mitochondrial-dysfunction]] | Skeletal muscle ETC decline; reduced ATP production; exercise intolerance |
| [[deregulated-nutrient-sensing]] | Anabolic resistance to protein/amino acids; blunted mTOR/IGF-1 signaling |
| [[loss-of-proteostasis]] | Impaired UPS and autophagy in muscle; protein aggregation in cognitive frailty |

Cross-references: [[sarcopenia]] (direct mechanistic component), [[immunosenescence]] (IRP, CHIP, vaccine response), [[interventions/pharmacological/senolytics]] (Justice 2019 translational pilot), [[interventions/lifestyle/caloric-restriction]] (frailty-relevant endpoints in CALERIE; mTOR axis), [[hematopoietic-stem-cells]] (HSC aging contributes to CHIP and immune frailty).

## Model organism relevance

A validated mouse Clinical Frailty Index (Whitehead et al. / Howlett 2013) uses 31 clinically assessed deficit variables in C57BL/6J mice (coat condition, alopecia, gait, kyphosis, vestibular disturbance, ocular discharge, nasal discharge, body weight, temperature, etc.) and shows strong concordance with human FI data from the SHARE survey (n=30,025) [^howlett2013]. The clinical FI increases progressively with age in a graded fashion (exponential fit, r²=0.91) and is highly reproducible across trials (r²=0.97, p<0.0001). Mortality prediction: FI acceleration was observed immediately prior to death in one aged animal; the authors note that a full mortality-prediction analysis requires a larger study. The paper does not demonstrate mortality-predictive validity independent of age. Correlations with lifespan-extending interventions (rapamycin, caloric restriction) are from subsequent literature, not from this paper.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — hallmark mechanisms are conserved |
| Phenotype conserved in humans? | yes — FI validated in rodents; outcome predictiveness similar |
| Replicated in humans? | yes — Fried Phenotype replicated across continents; FI replicated in multiple cohorts |

## Limitations and gaps

- **Definition heterogeneity** — Fried Phenotype, FI, FRAIL scale, and CFS produce substantially different prevalence estimates in the same population. No single definition has been universally adopted for clinical trials, limiting cross-trial comparability. #gap/needs-replication
- **Biomarker validation gap** — No blood-based biomarker panel has been prospectively validated for frailty staging or treatment monitoring in an RCT. #gap/needs-replication
- **Reversibility evidence** — Robust evidence that frailty (as opposed to pre-frailty) can be reversed to "robust" status in older adults (≥75) with interventions is limited. Most positive trials enrolled pre-frail or mildly frail participants. #gap/long-term-unknown
- **Mechanistic causality** — The relative contribution of senescence, inflammation, and hormonal decline to frailty onset vs progression is not established. Cross-sectional data dominate; mechanistic intervention data (e.g., senolytic RCTs with frailty primary endpoints) are absent. #gap/no-mechanism
- **Cognitive frailty** — The cognitive frailty subtype is less well-operationalized than physical frailty; its mechanistic basis (e.g., senescent microglia, neuroinflammation) is understudied. #gap/needs-replication
- **Mouse FI validation gap** — While the mouse FI is validated, the concordance between interventions that reduce the mouse FI and human frailty-reducing interventions has not been formally tested in a prospective manner. #gap/needs-human-replication

## Footnotes

[^fried2001]: [[studies/fried-2001-frailty-phenotype]] · doi:10.1093/gerona/56.3.M146 · Fried LP, Tangen CM, Walston J, Newman AB, Hirsch C, Gottdiener J, Seeman T, Tracy R, Kop WJ, Burke G, McBurnie MA · J Gerontol Biol Sci Med Sci 2001;56(3):M146-M156 · n=5,317 community-dwelling adults ≥65 (4,735 original + 582 African American cohort; CHS) · observational (prospective cohort; 7- and 4-yr follow-up respectively) · Fried Frailty Phenotype defined and validated; prevalence 6.9% frail / 40.5% pre-frail; 3-yr unadjusted HRs 1.82–4.46 across outcomes; adjusted HRs 1.29–2.24; outcome-specific HR breakdown not confirmed (abstract-level verification only — full-text PDF blocked by publisher paywall) · archive: bronze OA; full-text PDF download failed #gap/no-fulltext-access

[^mitnitski2001]: [[studies/mitnitski-2001-frailty-index]] · doi:10.1100/tsw.2001.58 · Mitnitski AB, Mogilner AJ, Rockwood K · TheScientificWorld 2001;1:323-336 · n=2,913 CSHA participants (n=1,468 with death-date data for survival analysis) · observational (cross-sectional + longitudinal components of CSHA) · introduces Frailty Index as accumulation-of-deficits metric using 92 variables; FI increases at ~3% per year; survival probability estimable from FI without reference to chronological age; submaximal limit ~0.7 not stated in this paper (appears in later Rockwood/Mitnitski work) · archive: gold OA, PDF downloaded

[^rockwood2007]: [[studies/rockwood-2007-frailty-deficits]] · doi:10.1093/gerona/62.7.722 · Rockwood K & Mitnitski A · J Gerontol Biol Sci Med Sci 2007;62(7):722-727 · observational · review/analysis of FI properties; submaximal limit; exponential mortality relationship; ~3%/0.01 FI increment · archive: closed-access (not_oa) #gap/no-fulltext-access

[^clegg2013-review]: [[studies/clegg-2013-frailty-lancet]] · doi:10.1016/S0140-6736(12)62167-9 · Clegg A et al. · Lancet 2013;381(9868):752-762 · review · comprehensive clinical review of frailty; prevalence, mechanisms, outcomes, and interventions; IL-6 as inflammatory predictor highlighted · archive: closed-access (not_oa) #gap/no-fulltext-access

[^howlett2013]: [[studies/howlett-2013-mouse-frailty-index]] · doi:10.1093/gerona/glt136 · Whitehead JC, Hildebrand BA, Sun M, Rockwood MR, Rose RA, Rockwood K, Howlett SE · J Gerontol Biol Sci Med Sci 2014;69(6):621-632 (advance access September 2013) · in-vivo (C57BL/6J mice, female primary cohort; n=293 survival curve; n=14 aged in clinical FI experiments) · validates 31-item noninvasive clinical FI in mice via clinical assessment (coat, gait, eye, musculoskeletal, respiratory, etc.); clinical FI increases progressively with age (r²=0.91, exponential); concordance with human SHARE FI data (n=30,025); mortality prediction: FI acceleration observed in one animal prior to death — full mortality-prediction validation requires larger study (authors' limitation) · archive: bronze OA, PDF downloaded · **Note: task brief originally cited 10.1016/j.mad.2013.12.003 (wrong paper); DOI corrected to 10.1093/gerona/glt136 (BUG-2)**

[^justice2019-ipf]: [[studies/justice-2019-senolytics-ipf]] · doi:10.1016/j.ebiom.2018.12.052 · Justice JN et al. · EBioMedicine 2019;40:554-563 · n=14 IPF patients (aged 70.8±7.9 yr; 12 male, 2 female) · open-label pilot (uncontrolled; single-arm) · D 100 mg + Q 1250 mg/day × 3 consecutive days × 3 weeks (9 total dosing days); 6MWT +21.5 m (~+4.8%, baseline 447±83 m, p=0.012); 4-m gait speed +0.12 m/s (p=0.024); timed chair-stands −2.2 s (p=0.013); SPPB improved (p=0.003); grip strength and pulmonary function (FEV1, FVC) unchanged; skin biopsy senescent cell assay planned but omitted due to technical complications · archive: local PDF at 

[^pahor2014-life]: [[studies/pahor-2014-life-trial]] · doi:10.1001/jama.2014.5616 · Pahor M et al. (LIFE Study Investigators) · JAMA 2014;311(23):2387-2396 · n=1,635 community-dwelling adults aged 70–89 (n=818 physical activity; n=817 health education) · rct · structured moderate-intensity physical activity (walking + resistance + balance + flexibility; ~150 min/week; center-based 2×/week + home-based 3–4×/week) vs health education workshops; primary outcome major mobility disability (inability to complete 400m walk) HR 0.82 (95% CI 0.69–0.98, p=0.03) over ~2.6 yr follow-up; persistent mobility disability HR 0.72 (95% CI 0.57–0.91, p=0.006) · archive: green OA; PDF download failed (archive URL redirect not resolved) #gap/no-fulltext-access
