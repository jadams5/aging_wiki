---
type: compound
aliases: ["N'-(3-aminopropyl)butane-1,4-diamine", "N-(3-aminopropyl)putrescine", spermidine trihydrochloride]
pubchem-cid: 1102
inchikey: ATHGHQPFGPMSJY-UHFFFAOYSA-N
chembl-id: CHEMBL1374440
drugbank-id: null
cas-number: 124-20-9
mechanisms: [autophagy-inducer, ep300-inhibitor, caloric-restriction-mimetic, polyamine]
measured-targets: ["[[ep300]]"]
targets: ["[[autophagy]]", "[[mtor]]", "[[ampk]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
clinical-stage: supplement
human-evidence-level: limited-negative
half-life: "#gap/dose-response-unclear — not well-characterized after oral administration in humans"
translation-gap: phase-3-rct-needed
next-experiment: "Phase 2/3 hard-endpoint trial in cognitive decline at higher dose than SmartAge (which used only 0.9 mg/day — too low?); POLYCAD will provide first cardiovascular hard-endpoint readout in 2026."
clinical-trials-active: 11
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Eisenberg 2016 (nm.4222) verified from full PDF — mouse strain, n per group, lifespan %, cardioprotection mechanism corrected; Pietrocola 2015 (cdd.2014.215) verified from full PDF — mechanism reframed from HAT-broad to EP300-specific, H3K14ac corrected to H3K56, cell models confirmed; Kiechl 2018 (nqy102) partially verified from PubMed abstract — n=829, HR 0.74 (0.66–0.83) confirmed, unverified tertile HR estimate removed; Eisenberg 2009 (ncb1975) unverifiable (bronze OA, download failed twice) — organism-specific claims confirmed from PubMed abstract only; Madeo 2018 (science.aan2788) unverifiable (not_oa); canonical-database identity fields (PubChem CID 1102, InChIKey, CAS, ChEMBL) not independently re-verified against databases. **2026-05-08 R34 recency refresh:** integrated Schwarz 2022 SmartAge JAMA Network Open RCT (PubMed-abstract-verified — null primary memory endpoint at 0.9 mg/day × 12 mo; this is the best-powered human cognition trial to date and is NEGATIVE), Keohane 2024 Nutr Res polyamine bioavailability RCT (PubMed-abstract-verified — 40 mg/day × 4 weeks: minimal effect on circulating polyamines, raising bioavailability questions), Thorup 2025 POLYCAD protocol (Trials, NCT06186102 — 24 mg/day × 48 weeks in n=187 elderly CAD patients, ongoing), He 2025 CATIS post-stroke observational (J Am Heart Assoc — high plasma polyamines associated with WORSE post-stroke cognitive impairment, contradicting the simple `more spermidine = better` framing). Active-trial count 11 from ClinicalTrials.gov v2 API 2026-05-08 (RECRUITING + ACTIVE_NOT_RECRUITING). **human-evidence-level upgraded from `limited` to `limited-negative`** — best-powered cognition RCT (SmartAge) reported null primary endpoint at the dose tested."
---

# Spermidine

A natural polyamine found in all living cells and in many foods, spermidine is one of the best-characterized lifespan-extending compounds in model organisms. Its core mechanism is [[autophagy]] induction via inhibition of the acetyltransferase [[ep300]], which normally represses autophagy by acetylating ATG5, ATG7, ATG8 (LC3), and ATG12 [^pietrocola2015]. It extends lifespan in yeast, worms, and flies [^eisenberg2009] and in mice [^eisenberg2016]; whether it extends human lifespan is unknown. Observational data from the Bruneck Study link higher dietary spermidine intake to lower all-cause mortality in humans [^kiechl2018], but the only completed Phase 2b RCT (SmartAge, n=100, 12 months at 0.9 mg/day) was **null on its primary cognitive endpoint** in older adults with subjective cognitive decline [^schwarz2022], and a 2024 PK study found that even 40 mg/day for 4 weeks had minimal effect on circulating polyamines [^keohane2024]. A separate prospective cohort linked higher plasma polyamines to **worse** post-stroke cognitive impairment [^he2025] — opposite to the Bruneck dietary signal. It is sold as a food supplement; the human evidence base is therefore mixed, and the POLYCAD cardiovascular RCT (NCT06186102, completion ~August 2026) is the next major readout [^thorup2025].

## Identity

- **PubChem CID:** 1102
- **InChIKey:** ATHGHQPFGPMSJY-UHFFFAOYSA-N
- **CAS:** 124-20-9
- **IUPAC (preferred):** N'-(3-aminopropyl)butane-1,4-diamine
- **Molecular formula:** C₇H₁₉N₃
- **Molecular weight:** 145.25 g/mol (free base); typically supplied and dosed as trihydrochloride salt (~254.2 g/mol)
- **logP (XLogP3-AA):** −1.0 — strongly hydrophilic; freely soluble in water
- **Hydrogen bond donors / acceptors:** 3 / 3
- **Charge at physiological pH:** tri-cationic (all three amines protonated at pH 7.4); associates with DNA and RNA in vivo

## Biosynthesis

Spermidine is the product of a branched polyamine pathway originating from arginine:

```
Arginine → Ornithine (via ARG2/arginase)
Ornithine → Putrescine (via ODC1 / ornithine decarboxylase)
Putrescine → Spermidine (via SRM / spermidine synthase; aminopropyl donor: dcSAM)
Spermidine → Spermine (via SMS / spermine synthase)
```

Spermidine is also obtained exogenously from diet (highest concentrations in wheat germ, soybean, aged cheese, mushrooms, peas, and fermented foods) and from gut microbiota biosynthesis. Intracellular concentrations are tightly regulated by ornithine decarboxylase (ODC1, rate-limiting step) and by spermidine/spermine N¹-acetyltransferase (SAT1, catabolic). Endogenous spermidine levels decline with age in human blood and tissues [^madeo2018review]. #gap/needs-replication — tissue-specific age-decline data in humans are sparse.

## Mechanism of action

### Autophagy induction via EP300 inhibition

Spermidine induces [[autophagy]] by inhibiting the acetyltransferase EP300 (E1A-binding protein p300) [^pietrocola2015]. In a cell-free system, spermidine competitively inhibited recombinant EP300's acetyltransferase activity against its substrate histone H3 (this inhibition was reversed by raising acetyl-CoA levels 10-fold, consistent with competitive inhibition). A systematic siRNA screen of 43 acetyltransferase candidates identified EP300 (and NAA20) as the only candidates whose knockdown induced the full autophagy-inducing triad (GFP-LC3 puncta formation, p62/SQSTM1 depletion, and s6RP dephosphorylation); EP300 is specifically described as "an endogenous repressor of autophagy." Treatment with the selective EP300 inhibitor C646 phenocopied spermidine-induced autophagy without causing global protein deacetylation, underscoring the EP300-selectivity of the mechanism [^pietrocola2015].

**Mechanism framing note:** Pietrocola 2015 itself frames the mechanism as EP300-specific (not HAT-broad). The paper's conclusions explicitly state "EP300 acts as an endogenous repressor of autophagy and that potent autophagy inducers including spermidine de facto act as EP300 inhibitors." The broader HAT-inhibition framing (applied in autophagy.md) extrapolates beyond what this paper demonstrates. Whether additional HATs contribute in vivo remains unresolved. #gap/no-mechanism

Downstream consequences of EP300 inhibition that promote autophagy [^pietrocola2015]:
- Reduced cytoplasmic protein acetylation (including cytoplasmic/non-nuclear targets relevant to autophagy)
- mTORC1 inhibition (as evidenced by reduced p-S6RP signal, correlating with autophagy induction)
- EP300 directly acetylates and inhibits ATG5, ATG7, ATG8 (LC3), and ATG12 — its inhibition de-represses these autophagy proteins

### Relationship to mTOR and AMPK

Spermidine's autophagy-inducing effect appears partially independent of conventional [[mtor]] inhibition and [[ampk]] activation pathways in some model systems [^eisenberg2009]. Unlike rapamycin (mTOR inhibitor) or [[caloric-restriction]] (AMPK activation + mTOR inhibition), spermidine acts upstream at the level of chromatin/acetylome. In practice, all three pathways converge on autophagy and interactions likely exist in vivo — but the HAT-inhibition mechanism is distinct from the classical nutrient-sensing axis. #gap/no-mechanism — full network integration of spermidine's acetylome effects with mTORC1/ULK1/AMPK signaling is not yet resolved.

### Effects on histone acetylation

Spermidine treatment reduces acetylation of histone H3 at K56 (Ac-H3(K56) in the in vitro assay), the EP300-preferred substrate site tested in the cell-free biochemical system [^pietrocola2015]. The original claim that "H3K14ac is most consistently reported" is not supported by Pietrocola 2015, which uses H3K56 as the substrate readout. Total H3 protein levels were unchanged, confirming the effect is on acetylation status, not protein abundance. Note: the broader histone deacetylation observed in cells treated with spermidine is a reduction in global cytoplasmic/nuclear acetyl-lysine signal — specific site-level attribution beyond H3K56 is not established in this paper. #gap/no-mechanism

## Pharmacology and bioavailability

- **Oral absorption:** Spermidine is absorbed in the small intestine. Absorption is substantial but not precisely quantified; much of dietary spermidine reaches portal circulation as free polyamine.
- **Metabolism:** Rapidly taken up by tissues and incorporated into tRNA (as hypusine precursor for eIF5A) and chromatin. Catabolism via SAT1 + PAOX back to putrescine.
- **Half-life:** Not well-characterized after oral dosing in humans. #gap/dose-response-unclear
- **Safety:** Spermidine is an endogenous molecule present in all cells. Dietary supplementation at doses up to ~1.2 mg/day (food-level) is well-tolerated. Higher doses used in trials (~1.2–6 mg/day supplement) have not produced serious adverse events in published pilot data, but long-term safety data are limited. #gap/long-term-unknown

## Efficacy across model organisms

**Species-specific attribution is critical here.** The two Eisenberg papers cover different organisms and should not be conflated.

### Yeast, nematodes, and Drosophila — Eisenberg 2009

Spermidine supplementation extended chronological lifespan in *S. cerevisiae*, replicative lifespan in worms (*C. elegans*), and lifespan in flies (*Drosophila melanogaster*), all in an autophagy-dependent manner [^eisenberg2009]. In mice (C57BL/6), Eisenberg 2009 showed **reduced oxidative stress markers** — it did NOT demonstrate lifespan extension in mice [^eisenberg2009]. The mouse lifespan claim was removed from [[autophagy]] during verification (verifier flagged this distinction).

| Model organism | Effect in Eisenberg 2009 | Autophagy dependence |
|---|---|---|
| *S. cerevisiae* | Chronological lifespan extension | Yes (atg-mutant epistasis) |
| *C. elegans* | Replicative lifespan extension | Yes |
| *D. melanogaster* | Lifespan extension | Yes |
| *M. musculus* (C57BL/6) | Reduced oxidative stress; NO lifespan data | N/A |

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (autophagy/HAT biology conserved) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no (observational data only) |

#gap/needs-human-replication

### Mouse lifespan extension and cardioprotection — Eisenberg 2016

Mouse lifespan extension by spermidine was demonstrated in a separate 2016 paper [^eisenberg2016]. Eisenberg et al. 2016 (*Nature Medicine*) showed:

- Lifespan extension in aged C57BL/6J mice fed spermidine in drinking water (~10% median lifespan prolongation; life-long cohort N=40/41 control/spermidine female mice, p=0.018 Breslow test; late-in-life cohort N=91/86 control/spermidine male and female mice starting at 18 months, p=0.012)
- Cardioprotective effects: improved cardiac diastolic function (reduced LV end-diastolic pressure, reduced myocardial stiffness constant β), reduced cardiac hypertrophy (reduced LV mass/tibia length ratio), and improved ventricular-vascular coupling in aged mice
- Autophagy-dependent mechanism confirmed (genetic epistasis: cardiomyocyte-specific *Atg5* knockout mice failed to show cardioprotection from spermidine; spermidine actually aggravated LV hypertrophy in *Atg5*-deficient cardiomyocytes)
- Reduced inflammation: lower circulating TNF-α in aged mice (IL-6 not reported as specifically reduced in this study) #gap/needs-replication

These are distinct claims from Eisenberg 2009 and should be cited to Eisenberg 2016 specifically.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (cardiac) conserved in humans? | partial (observational correlation) |
| Replicated in humans? | no |

#gap/needs-human-replication #gap/needs-replication

## Human evidence

### Observational — dietary spermidine intake and mortality

The Bruneck Study (prospective population-based cohort, Bruneck, Italy) found that higher dietary spermidine intake was associated with lower all-cause mortality over 20-year follow-up (1995–2015) [^kiechl2018]. Key findings (verified from PubMed abstract; full PDF not available):
- n=829 participants (49.9% male), aged 45–84 years; 341 deaths during follow-up
- Diet assessed by repeated dietitian-administered validated 118-item food frequency questionnaire at four time points
- HR per 1-SD higher spermidine intake: **0.74** (95% CI: 0.66–0.83; p<0.001), adjusted for age, sex, caloric intake
- Fully adjusted model HR: **0.76** (95% CI: 0.67–0.86; p<0.001)
- The previously noted "HR ~0.6 for top vs bottom tertile" was an unverified estimate — the abstract-confirmed metric is HR per 1-SD increase, not a top-vs-bottom-tertile comparison
- Independent validation in SAPHIR study: HR 0.71 (95% CI: 0.53–0.95; p=0.019)
- Observational design — cannot establish causation; confounding by healthy diet pattern is a major limitation

**This is the strongest human evidence for spermidine's longevity relevance, but it is observational.** #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | unknown — only correlation |
| Replicated in humans (RCT)? | no — trials ongoing |

### Clinical trials — completed

#### Schwarz 2022 SmartAge — cognitive decline (best-powered human trial)

The SmartAge trial is the largest and longest published RCT of spermidine supplementation in humans, and **its primary endpoint was null** [^schwarz2022]:

- **Design:** randomized, double-masked, placebo-controlled phase 2b
- **Population:** n=100 adults 60–90 yr with subjective cognitive decline (49% female; mean age 69)
- **Arms:** 0.9 mg/day spermidine from wheat-germ extract vs microcrystalline cellulose placebo
- **Duration:** 12 months (89/100 completed)
- **Primary outcome:** memory performance (Mnemonic Similarity Task mnemonic discrimination) — **NULL** (between-group difference −0.03; 95% CI −0.11 to 0.05; p=0.47)
- **Secondary:** also null. Exploratory analyses suggested possible effects on inflammation and verbal memory; require independent replication at higher doses.
- **Safety:** balanced AE profile.
- **NCT:** NCT03094546

This is the **single most important data point for the human-evidence assessment of spermidine.** A 12-month, well-designed, monocenter Phase 2b in the at-risk population most plausibly responsive to a CR-mimetic/autophagy-inducer (subjective cognitive decline) found no benefit on the prespecified primary cognitive endpoint at the dose tested. Dose interpretation: 0.9 mg/day is at the low end of the range used in supplementation studies and is comparable to (or below) typical dietary spermidine intake — open question whether higher doses (3–24 mg/day used in newer trials) would shift outcomes. #gap/dose-response-unclear

#### Keohane 2024 — bioavailability concerns at 40 mg/day

A 2024 Nutrition Research RCT raises concerns about whether oral spermidine supplementation reaches the systemic compartment [^keohane2024]:

- **Design:** double-blind randomized within-subject placebo-controlled
- **Population:** n=37 healthy men 50–70 yr, BMI 18.5–28
- **Arm:** high-purity spermidine trihydrochloride supplement (hpSPD) at 40 mg/day vs placebo
- **Findings:** **minimal effects on circulating polyamines** despite the relatively high oral dose. The authors describe this as the first investigation into safety of a high-purity spermidine trihydrochloride supplement.
- **Interpretation:** Substantial first-pass metabolism, gut-microbiota and tissue uptake, or rapid catabolism may limit oral bioavailability. The implication is that "supplemented spermidine = elevated systemic spermidine" may not be true in humans, complicating the interpretation of dose-response from observational dietary data (Kiechl 2018) to oral-supplement RCTs. #gap/dose-response-unclear

#### Félix 2024 — combination supplement (AM3 + spermidine + hesperidin)

A combination-supplement RCT [^felix2024]:

- **Design:** randomized placebo-controlled, n=41 (30–63 yr, 2 mo)
- **Arm:** AM3 (150 mg) + spermidine (0.6 mg) + hesperidin (50 mg) twice daily
- **Findings:** improved Immunity Clock biological-age estimate by ~11 yr (immune-function readout); reduced oxidative-inflammatory state.
- **Interpretation:** Cannot attribute effects specifically to spermidine — the spermidine dose (0.6 mg/day total in two capsules?) is sub-SmartAge — and the AM3 immunomodulator is the likely active. Listed for completeness. #gap/contradictory-evidence — small effect attribution problem.

### Clinical trials — ongoing

| NCT | Trial | Indication | Phase | Status (as of 2026-05-08) |
|---|---|---|---|---|
| NCT03094546 | SmartAge (Schwarz 2022) | Subjective cognitive decline; older adults | Phase 2b | Completed — primary endpoint null |
| NCT06186102 | POLYCAD (Thorup 2025) | Coronary artery disease; ≥65 yr, n=187, 24 mg/day × 48 wk | Phase 2 | Active — first hard-endpoint cardiovascular RCT [^thorup2025] |
| NCT06017219 | Bioavailability of spermidine in healthy males | PK | N/A | Active not recruiting |
| NCT05459961 | Metabolic responses to spermidine | Metabolic | N/A | Active not recruiting |
| NCT07035626 | Spermidine for radiation-induced xerostomia (head & neck cancer) | Cancer-supportive | N/A | Recruiting |
| NCT07383311 | Autophagy-enhancers for sleep disturbances | Sleep | N/A | Recruiting |
| NCT07058974 | Exercise + pharmacologic intervention on systemic inflammation | Inflammation | N/A | Recruiting |

#gap/long-term-unknown — No completed large RCT has reported a lifespan, healthspan, or senescent-cell-clearance endpoint for spermidine supplementation in humans. POLYCAD (NCT06186102, completion expected August 2026) will provide the first powered cardiovascular hard-endpoint readout.

### Contradictory observational signal — He 2025 CATIS post-stroke cohort

A 2025 prospective ancillary analysis of the CATIS trial reported an **increased** risk of post-stroke cognitive impairment with higher plasma polyamine levels [^he2025]:

- **Design:** prospective cohort, ancillary to the CATIS RCT (NCT01840072)
- **Population:** n=619 ischemic stroke patients
- **Findings:** highest vs lowest quartile of plasma putrescine, spermidine, and spermine: adjusted ORs for PSCI = 1.81 (1.09–3.00), 1.81 (1.09–3.01), and 1.92 (1.15–3.20), respectively (MMSE-defined PSCI). Net reclassification improvement +32% for putrescine.
- **Interpretation:** The signal is **opposite in sign** to the Bruneck Study (Kiechl 2018) all-cause-mortality association in the general population. Possible explanations: (1) plasma polyamines reflect different biology in the post-stroke setting than in healthy aging — potentially elevated polyamine flux from cell death, ornithine decarboxylase activation in injured neurons, or altered SAT1 catabolism; (2) circulating spermidine measurements may not reliably indicate intracellular autophagy-inducing concentrations; (3) the Bruneck signal may be confounded by overall healthy-diet patterns rather than spermidine causality. #gap/contradictory-evidence

This contradiction is important: the human evidence for spermidine is now genuinely mixed, not uniformly positive.

## Effects on aging hallmarks

| Hallmark | Effect | Organism | Evidence |
|---|---|---|---|
| [[disabled-macroautophagy]] | Restores autophagy flux via EP300 inhibition (Pietrocola 2015); autophagy-dependent cardioprotection in mice (Eisenberg 2016) | Yeast, worm, fly, mouse | [^eisenberg2009] [^eisenberg2016] [^pietrocola2015] |
| [[deregulated-nutrient-sensing]] | Partially mTOR-independent CR-mimetic effect (mTORC1 inhibition correlated with EP300-mediated deacetylation) | Yeast, mouse | [^pietrocola2015] [^madeo2018review] |
| [[mitochondrial-dysfunction]] | Reduced oxidative stress markers in ageing mice | Mouse | [^eisenberg2009] |
| [[chronic-inflammation]] | Reduced circulating TNF-α in aged mice (IL-6 reduction not reported by Eisenberg 2016) | Mouse | [^eisenberg2016] |

## As a caloric restriction mimetic

Spermidine is classified as a CR-mimetic because it recapitulates key molecular and phenotypic features of caloric restriction — particularly autophagy induction and acetylome reprogramming — without requiring caloric deficit [^pietrocola2015] [^madeo2018review]. The CR-mimetic framing distinguishes it from:

- **Rapamycin:** mTOR inhibitor (upstream in the nutrient-sensing cascade; immunosuppressive at therapeutic doses)
- **Metformin:** AMPK activator via complex I inhibition (primarily metabolic targets)
- **Fisetin/Quercetin:** Senolytics (selective clearance of senescent cells; different primary mechanism)

Combination with rapamycin is theoretically additive (complementary mechanisms), but this has not been tested in mammalian longevity studies. #gap/needs-replication

## Limitations and gaps

- **Best-powered cognition RCT was null** (SmartAge / Schwarz 2022; n=100, 12 months at 0.9 mg/day) — primary endpoint mnemonic discrimination did not differ from placebo. This is the strongest single piece of human RCT evidence on the table and it is negative at the dose tested. Whether higher doses (POLYCAD uses 24 mg/day) would shift outcomes is the central open question.
- **Bioavailability question** (Keohane 2024): 40 mg/day for 4 weeks had minimal effect on circulating polyamines, suggesting oral spermidine is heavily metabolized first-pass or rapidly redistributed; "more in = more circulating" is not established. This complicates the Bruneck-to-supplement extrapolation.
- **Contradictory directional signals** between Bruneck (lower mortality with higher dietary spermidine) and CATIS post-stroke (higher PSCI risk with higher plasma polyamines). #gap/contradictory-evidence
- **Dose-response in humans is unknown.** The Kiechl 2018 Bruneck data report HR per 1-SD increase in dietary spermidine; absolute intake levels associated with the benefit are not reported in the abstract (full text not available). The "~80–100 µmol/day" figure cited in earlier versions of this page was not verified against the primary source. Most supplements deliver 1–6 mg/day; SmartAge used 0.9 mg/day; POLYCAD uses 24 mg/day; Keohane tested 40 mg/day. The dose-response curve is essentially unmapped in humans. #gap/dose-response-unclear #gap/no-fulltext-access
- **No completed human RCT with a longevity or healthspan hard endpoint.** All positive human efficacy is observational; the only completed Phase 2b RCT (SmartAge) was null.
- **EP300-specific vs broader HAT involvement.** Pietrocola 2015 establishes EP300 as the endogenous repressor and shows that EP300-selective inhibition is sufficient to induce autophagy. Whether additional HATs contribute in primary human tissues or in vivo contexts beyond the cell-culture models in that paper is unresolved. #gap/no-mechanism
- **Endogenous decline with age is established in blood** but quantitative tissue-level data in humans are sparse. #gap/needs-replication
- **Mouse cardioprotection (Eisenberg 2016) has not been replicated in an independent mammalian cohort.** POLYCAD (NCT06186102, n=187, 24 mg/day × 48 wk, completion ~August 2026) will provide the first powered human cardiac readout. #gap/needs-replication
- **Long-term supplementation safety in humans:** SmartAge demonstrated 12-month safety at 0.9 mg/day; safety at higher therapeutic doses (24+ mg/day) over multi-year horizons is unknown. #gap/long-term-unknown

## Related pages

- [[autophagy]] — primary downstream process; spermidine is the canonical natural autophagy inducer
- [[ep300]] — primary molecular target (competitive acetyltransferase inhibitor); page is a stub
- [[mtor]] — nutrient-sensing pathway; mTORC1 inhibition correlated with EP300-mediated deacetylation in cell models
- [[ampk]] — alternative CR-mimetic arm; mechanistic relationship with spermidine is additive but distinct
- [[caloric-restriction]] — reference intervention; spermidine mimics key molecular signatures
- [[rapamycin]] — complementary mechanism (mTOR inhibitor)
- [[lc3]], [[beclin-1]], [[ulk1]] — autophagy machinery downstream of spermidine's EP300-inhibitory effect
- [[disabled-macroautophagy]] — primary hallmark targeted
- [[deregulated-nutrient-sensing]] — secondary hallmark

## Footnotes

[^eisenberg2009]: [[studies/eisenberg-2009-spermidine-longevity]] · in-vivo (yeast/worm/fly) + in-vivo (mouse oxidative stress only — no mouse lifespan data) · model: *S. cerevisiae*, *C. elegans*, *D. melanogaster*, C57BL/6 mice · doi:10.1038/ncb1975 · archive: not downloaded (bronze OA, download failed twice) · abstract-verified via PubMed PMID 19801973 · #gap/no-fulltext-access

[^eisenberg2016]: [[studies/eisenberg-2016-spermidine-cardioprotection]] · in-vivo (mouse) · n=40/41 (life-long, female) and n=91/86 (late-in-life, male+female) · model: aged C57BL/6J mice · ~10% median lifespan prolongation · doi:10.1038/nm.4222 · archive: downloaded (green OA via HAL, PMC manuscript) · PDF-verified 2026-05-04

[^pietrocola2015]: [[studies/pietrocola-2015-spermidine-ep300]] · in-vitro + in-vivo · model: human U2OS cells, HeLa cells, MEFs, *S. cerevisiae* (no mouse in-vivo lifespan data in this paper) · doi:10.1038/cdd.2014.215 · journal: Cell Death and Differentiation · archive: downloaded (PDF-verified 2026-05-04)

[^madeo2018review]: [[studies/madeo-2018-spermidine-health-disease]] · review · doi:10.1126/science.aan2788 · journal: Science · archive: not_oa (closed access, permanently unverifiable) · #gap/no-fulltext-access

[^kiechl2018]: [[studies/kiechl-2018-spermidine-mortality]] · observational · cohort: Bruneck Study · n=829 (49.9% male, age 45–84; 341 deaths, 20-yr follow-up 1995–2015) · HR 0.74 (95% CI 0.66–0.83; p<0.001) per 1-SD spermidine; replicated in SAPHIR (HR 0.71, 0.53–0.95) · doi:10.1093/ajcn/nqy102 · journal: Am J Clin Nutr · archive: download failed (bronze OA) · abstract-verified via PubMed PMID 29955838 · #gap/no-fulltext-access (full quantitative tables unverified)

[^schwarz2022]: [[studies/schwarz-2022-smartage-spermidine-cognition]] · doi:10.1001/jamanetworkopen.2022.13875 · n=100 (51 spermidine / 49 placebo; 89 completed) · rct (Phase 2b, double-masked, placebo-controlled, monocenter) · primary mnemonic discrimination ns (between-group difference −0.03; 95% CI −0.11 to 0.05; p=0.47) · model: 60–90 yr adults with subjective cognitive decline; 0.9 mg/day wheat-germ extract × 12 months (NCT03094546) · journal: JAMA Network Open · authors: Schwarz C, Benson GS, Horn N, Wurdack K, Grittner U, Schilling R, Märschenz S, Köbe T, Hofer SJ, Magnes C, Stekovic S, Eisenberg T, Sigrist SJ, Schmitz D, Wirth M, Madeo F, Flöel A · abstract-verified via PubMed PMID 35616942

[^keohane2024]: [[studies/keohane-2024-spermidine-bioavailability]] · doi:10.1016/j.nutres.2024.09.012 · n=37 · rct (double-blind randomized within-subject placebo-controlled) · primary outcome: minimal change in circulating polyamines · model: healthy men 50–70 yr, BMI 18.5–28; 40 mg/day high-purity spermidine trihydrochloride supplement · journal: Nutrition Research · authors: Keohane P, Everett JR, Pereira R, Cook CM, Blonquist TM, Mah E · abstract-verified via PubMed PMID 39405978

[^thorup2025]: [[studies/thorup-2025-polycad-protocol]] · doi:10.1186/s13063-025-09176-z · n=187 (1:1 randomization) · rct (Phase 2 single-centre, double-blind, placebo-controlled, superiority) — **protocol; trial ongoing** · model: ≥65 yr CAD patients with preserved LVEF, prior revascularisation/MI ≥3 mo before screening; 24 mg/day spermidine × 48 weeks (NCT06186102) · journal: Trials · authors: Thorup CV, Jeppesen CNA, Jensen TH, Tinggaard AB, Hvas CL, Rud CL, et al. (Aarhus University Hospital, Denmark) · enrolment began 2024-01-04, completion anticipated August 2026 · abstract-verified via PubMed PMID 41168834

[^he2025]: [[studies/he-2025-catis-polyamines-pscI]] · doi:10.1161/JAHA.124.037465 · n=619 · observational (prospective ancillary cohort to CATIS RCT NCT01840072) · highest vs lowest quartile aORs for PSCI: putrescine 1.81 (1.09–3.00), spermidine 1.81 (1.09–3.01), spermine 1.92 (1.15–3.20) · model: ischemic stroke patients, 3-month follow-up, MMSE/MoCA · journal: Journal of the American Heart Association · abstract-verified via PubMed PMID 39817544 · #gap/contradictory-evidence (signal opposite to Bruneck/Kiechl 2018)

[^felix2024]: [[studies/felix-2024-am3-spermidine-hesperidin]] · doi:10.3390/antiox13111391 · n=41 · rct (placebo-controlled) · combination supplement (AM3 150 mg + spermidine 0.6 mg + hesperidin 50 mg, 2× daily, 2 mo); Immunity Clock biological-age estimate −11 yr · model: adults 30–63 yr · journal: Antioxidants (Basel) · authors: Félix J, Díaz-Del Cerro E, Baca A, López-Ballesteros A, Gómez-Sánchez MJ, De la Fuente M · abstract-verified via PubMed PMID 39594533 · #gap/contradictory-evidence (combination intervention; spermidine attribution problem)
