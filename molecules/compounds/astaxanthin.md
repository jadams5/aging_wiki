---
type: compound
aliases: ["(3S,3'S)-astaxanthin", "all-trans-astaxanthin", "Bioastin", "Astareal", "E161j"]
pubchem-cid: 5281224
pubchem-cid-alt: null
inchikey: MQZIGYBFDRPAKN-UWFIBFSHSA-N
chembl-id: CHEMBL1255871
drugbank-id: DB06543
administration-route: oral
biologic: false
molecular-formula: C40H52O4
molecular-weight-da: 596.85
mechanisms: [antioxidant, nrf2-activator, lipid-peroxidation-inhibitor, anti-inflammatory]
targets: []
hallmarks: ["[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]", "[[genomic-instability]]"]
clinical-stage: supplement
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Dose-optimisation ITP cohort confirming which concentration and start-age reliably extends male UM-HET3 lifespan across all three sites (and excludes female harm), prerequisite before human healthspan RCT design."
clinical-trials-active: 1
literature-checked-through: 2026-06-30
verified: true
verified-date: 2026-06-30
verified-by: claude
verified-scope: "Korstanje 2026 (paywalled; no PMC; no open-access full text) is ABSTRACT-CONFIRMED ONLY — astaxanthin null both sexes; female pooled signal attributed to a Jackson-Lab control-female anomaly, not surviving site-exclusion. Per-arm doses/start-ages/p-values/n's are NOT verified: a prior verifier pass wrote full-PDF-sourced numbers (880 ppm etc.) that were a paywall-redirect WebFetch fabrication (same values independently flagged during korstanje-2026 study-page verification); those specifics have been removed and tagged #gap/no-fulltext-access. Liu 2021 verified against full PDF: combination formulation (AX 12 mg + tocotrienol 10 mg + zinc 6 mg), n=42 muscle-endurance / n=40 GXT, fat oxidation values are combined-group not male-only — corrected. Zhou 2021 SMD values and study counts verified against forest plots (Figure 4). DrugBank DB06543 confirmed via PubChem cross-reference. Harrison 2024 not re-read; cross-checked against verified studies/harrison-2024-itp-astaxanthin-meclizine.md."
---

# Astaxanthin

A xanthophyll carotenoid (C40H52O4) responsible for the red-orange pigment of *Haematococcus pluvialis* microalgae, krill, wild salmon, and shrimp. Widely marketed as an antioxidant supplement. Gained longevity-research prominence when the NIA Interventions Testing Program (ITP) reported a **12% median male lifespan extension in UM-HET3 mice** (Harrison 2024) [^harrison2024itp]. A subsequent ITP cohort (Korstanje 2026) did **not replicate** this result and reported a potential female harm signal [^korstanje2026], creating unresolved discordance at the highest level of preclinical lifespan testing. This discordance is the central open question for astaxanthin longevity candidacy; human aging-endpoint trials do not yet exist.

## Identity

- **PubChem CID:** 5281224 — (3S,3'S)-astaxanthin, the dominant natural stereoisomer from *H. pluvialis*; confirmed via live PubChem name-to-CID query 2026-06-30
- **ChEMBL ID:** CHEMBL1255871 — confirmed via InChIKey lookup 2026-06-30; ChEMBL Max Phase 3.0 (eye-health / cosmetic indications, not aging)
- **InChIKey:** MQZIGYBFDRPAKN-UWFIBFSHSA-N
- **Molecular formula:** C40H52O4
- **Molecular weight:** 596.85 Da
- **LogP:** ~8.9 — highly lipophilic; accumulates preferentially in membrane lipid bilayers and lipid-rich tissues
- **Class:** xanthophyll (oxygenated carotenoid); tetraterpene
- **DrugBank ID:** DB06543 — confirmed via PubChem CID 5281224 cross-reference

**Stereochemistry and form note.** The natural (3S,3'S) form predominates in *H. pluvialis* and krill-derived products. Synthetic astaxanthin (used in aquaculture feed) is a racemic mixture of the (3R,3'R) enantiomer, the (3S,3'S) enantiomer, and the (3R,3'S) meso form; the three forms differ in specific antioxidant activity and tissue metabolism. In algae and krill, astaxanthin is predominantly stored as fatty acid mono- and di-esters; hydrolysis to free astaxanthin occurs partly in the gut before absorption. Most longevity studies and the ITP experiments used *H. pluvialis*-derived material. This page primarily covers the natural free-base (3S,3'S) form.

## Mechanism of action

Astaxanthin's primary documented activities in aging-relevant contexts:

**1. Membrane-spanning lipid-phase antioxidant.** Unlike most carotenoids (which embed in one membrane leaflet), astaxanthin's polar hydroxyl and keto groups at both ends of the conjugated polyene chain allow it to span the full lipid bilayer. This geometry positions the conjugated pi-system at the mid-membrane region where lipid-peroxidation chain reactions initiate, making it a mechanistically superior lipid-peroxidation-inhibitor compared to beta-carotene or alpha-tocopherol in the membrane context [^basher2026review]. It also quenches singlet oxygen (¹O₂) via physical deactivation (energy transfer → heat), regenerating the molecule rather than consuming it.

**2. Nrf2/ARE pathway activation.** Astaxanthin activates the Nrf2 (Nuclear factor erythroid 2-related factor 2) transcription factor, which drives the antioxidant-response-element (ARE) gene battery — including HO-1 (heme oxygenase-1), NQO1 (NADPH quinone oxidoreductase-1), and glutathione biosynthesis enzymes [^basher2026review]. In rodent aging models, this leads to increased endogenous antioxidant-enzyme expression. Nrf2 activation is the leading mechanistic hypothesis for astaxanthin's ITP lifespan effect, but the ITP did not test mechanism directly. #gap/no-mechanism — the upstream molecular event coupling astaxanthin to Keap1/Nrf2 release (direct covalent modification of Keap1 cysteines vs indirect redox modulation) is not confirmed in longevity-relevant contexts.

**3. Anti-inflammatory signalling.** Astaxanthin suppresses NF-κB activation and downstream cytokine production (IL-6, TNFα) in vitro and rodent models, likely secondary to ROS suppression [^basher2026review]. Direct molecular interaction with the NF-κB pathway has not been established independently of antioxidant activity.

**What is NOT established:** Astaxanthin is not a senolytic, does not directly inhibit mTOR, does not act as an NAD+ precursor, and has no documented BCL-2 family protein interaction. Its potential anti-aging mechanism, if real, is most likely through reducing oxidative-stress drivers of aging biology rather than any single defined molecular target.

## Effects on aging hallmarks

| Hallmark | Proposed effect | Evidence base |
|---|---|---|
| [[mitochondrial-dysfunction]] | Accumulates in mitochondrial inner membrane; reduces mitochondrial ROS in vitro and in rodent exercise models | [^liu2021rct] (human, exercise context); [^basher2026review] |
| [[chronic-inflammation]] | Suppresses NF-κB, reduces IL-6/TNFα; Nrf2-driven HO-1 induction | [^basher2026review] (review, animal models) |
| [[genomic-instability]] | Reduces UV-induced DNA strand breaks and modulates DNA repair pathway expression in vitro | [^sevimli2026] (in vitro, human adipose-derived MSCs) |

Evidence quality is predominantly preclinical. No aging hallmark endpoint has been assayed in a powered human RCT.

## Lifespan data — NIA Interventions Testing Program

This is the highest-quality preclinical longevity evidence and currently shows active discordance between two independent ITP cohorts.

### Harrison 2024 — positive result (male-specific)

[[studies/harrison-2024-itp-astaxanthin-meclizine]]: Astaxanthin at ~1840 ppm achieved diet concentration (target: 4000 ppm; only 46% achieved — astaxanthin is difficult to incorporate homogeneously into mouse chow) fed continuously from 12 months of age extended **median male lifespan by 12%** pooled across three sites (log-rank p=0.003) [^harrison2024itp]. Cross-site consistency was strong: JAX +11%, UT +11%, UM +14%. Female lifespan: +3%, p=0.64 (not significant). The 90th-percentile lifespan (maximum lifespan proxy) showed a non-significant +6% in males (Wang-Allison p=0.19). This male-specific, cross-site-consistent result is ITP-credible but not replicated as of 2026.

| Sex | Median Δ | Log-rank p |
|---|---|---|
| Male | +12% | p=0.003 |
| Female | +3% | p=0.64 (NS) |

### Korstanje 2026 — non-replication with context-dependent female signal

In a subsequent ITP cohort evaluating eight compound groups (including astaxanthin, [[meclizine]], mitoglitazone, pioglitazone, alpha-ketoglutarate, mifepristone, methotrexate, and an atorvastatin–telmisartan combination), **astaxanthin did not significantly extend lifespan in either sex** [^korstanje2026]. Per the abstract, the compounds were tested "at novel doses or starting ages" relative to the earlier cohorts — i.e., the astaxanthin arms here did **not** reproduce the exact ~1840 ppm / 12-month-start condition of Harrison 2024.

> ⚠️ **Full-text not accessed — per-arm quantitative data unverified.** This paper is paywalled (Springer; no PMC deposit; no open-access full text). The specific achieved doses, start ages, per-arm median-lifespan deltas, p-values, and group n's are **not in the abstract** and are **not recorded here**: an automated fetch of the paywalled PDF returned plausible-looking but fabricated numbers (the same fabricated values were independently flagged and rejected during verification of [[studies/korstanje-2026-itp-null-cohort]]). Only abstract-confirmed claims are stated below. #gap/no-fulltext-access

**Female signal (abstract-confirmed, qualitative).** In the 3-site pooled analysis, astaxanthin (with late-start mitoglitazone and pioglitazone) was associated with reduced female lifespan; however, this cohort had anomalously long control-female survival at one site (The Jackson Laboratory), and when that site was excluded only mitoglitazone and pioglitazone retained a significant negative female effect — the astaxanthin female signal did **not** survive. The authors attribute the pooled astaxanthin female signal to the site control-female anomaly, not to a genuine drug effect; it should **not** be treated as confirmed toxicity.

### Framing the discordance

Both results come from the same platform (UM-HET3, three sites, same methodology), so the discordance is not a model/strain artifact. The abstract attributes the non-replication to the different dose/start-age conditions tested. Two non-exclusive interpretations: (a) astaxanthin's benefit, if real, requires a specific dose/age window (the higher ~1840 ppm / 12-month condition of Harrison 2024 was not re-tested here); (b) the original Harrison 2024 positive (p=0.003, no Wang-Allison maximum-lifespan change) was a borderline result now unconfirmed by the ITP's built-in replication. #gap/contradictory-evidence — do NOT design human aging trials on the Harrison 2024 result alone; the original dose-matched condition has not been independently replicated. Exact per-arm parameters await genuine full-text access to [^korstanje2026].

## Human evidence

Human-evidence-level is `limited`: human RCTs exist for non-longevity surrogate endpoints (skin, exercise adaptation), but **no aging or longevity endpoint RCT exists**.

**Skin aging (meta-analysis, 2021):** Zhou et al. 2021 meta-analysed 11 studies — 9 RCTs on oral astaxanthin and 2 open-label topical/oral-topical studies [^zhou2021]. Oral astaxanthin (4–12 mg/day, 4–16 weeks) significantly improved skin **moisture** (SMD 0.53, 95% CI 0.05–1.01, p=0.03) and **elasticity** (SMD 0.77, 95% CI 0.19–1.35, p=0.009), but did **not** significantly reduce wrinkle depth (SMD −0.26, 95% CI −0.58–0.06, p=0.11). Effect sizes are modest; individual trials had small n (typically <50) and variable blinding quality.

**Exercise adaptation in older adults (RCT, 2021):** Liu et al. 2021 randomised 42 healthy adults aged 65–82 years to a combination supplement or placebo during 3 months of endurance training [^liu2021rct]. **Important:** the AX supplement was a combination product (AstaReal AX; Bellevue WA) containing **astaxanthin 12 mg + tocotrienol 10 mg + zinc 6 mg** per day — not pure astaxanthin; observed effects cannot be attributed to astaxanthin alone. The AX group showed improved specific muscle endurance (training-induced increase was statistically significant only in AX, not placebo: p<0.05). For fat oxidation at submaximal intensity in the S1 exercise phase: increase was greater in AX vs placebo (AX 0.76 ± 0.18 g vs PL 0.23 ± 0.15 g — these are **combined-group** values for both sexes; Figure 4a shows the AX vs sex-matched-PL contrast was statistically significant in males only). Carbohydrate oxidation reduction and exercise efficiency improvement were male-specific (p<0.05, males; NS, females). No frailty, functional, or aging-biomarker endpoint was reported. This is a secondary analysis of a previously published study (Liu et al. 2018). Caveat: n=42 (TA endpoint) / n=40 (GXT/fat-oxidation endpoint); combination formulation limits compound-specific attribution.

**Active aging-context trial (2026):** One active aging-related clinical trial was identified — NCT07475546 (AgelessRx, Phase 3, Active Not Recruiting), which uses astaxanthin as one of seven compounds in a proprietary combination supplement ("Infinite Supplement"). This is not an astaxanthin-specific trial; it cannot generate isolated compound-level evidence. Primary outcomes: VO₂max, cognitive performance (Creyos), iAge inflammation index, lean body mass (DEXA). Results not yet available.

#gap/needs-human-replication — No adequately-powered, placebo-controlled RCT with a hard aging, frailty, or longevity endpoint for astaxanthin exists in the literature.

## Pharmacokinetics

- **Lipophilicity (logP ~8.9):** Extreme; partitions into lipid-rich compartments (adipose, liver, retina, skin, mitochondrial membranes). Aqueous solubility is negligible.
- **Oral bioavailability:** Highly formulation-dependent. Esterified forms require gut esterase hydrolysis before absorption. Co-administration with lipid-containing meals substantially increases absorption. Standard capsule supplementation (4–12 mg/day) achieves low-nanomolar peak plasma concentrations.
- **Distribution:** Skin, retina, adipose, and brain accumulation consistent with observed peripheral effect profiles.
- **Elimination:** Primarily via feces (lipophilic compound); no major CYP-interaction liability identified in existing reviews, but formal drug-interaction studies are lacking.
- **Dose gap:** The ITP success (~1840 ppm dietary concentration, estimated ~40–60 mg/kg/day in mice) far exceeds typical human supplement doses (4–12 mg/day). Allometric body-surface scaling to a 70 kg human suggests ~240–420 mg/day human-equivalent, but mouse-chow bioavailability cannot be directly compared to capsule bioavailability. #gap/dose-response-unclear

## Dose-response summary

| Study | Organism | n | Dose | Route | Duration | Key result |
|---|---|---|---|---|---|---|
| Harrison 2024 ITP [^harrison2024itp] | UM-HET3 (3 sites) | ~100–200/sex | ~1840 ppm est. 40–60 mg/kg/day | Dietary | Continuous from 12 mo | Male median +12% (p=0.003); female +3% NS |
| Korstanje 2026 ITP [^korstanje2026] | UM-HET3 (3 sites) | not verified | lower dose / different start age than Harrison 2024 (exact values #gap/no-fulltext-access) | Dietary | — | **Null both sexes**; pooled female signal attributed to a Jackson-Lab control anomaly (did not survive site-exclusion) |
| Liu 2021 RCT [^liu2021rct] | Human (65–82 yr) | 42 (TA); 40 (GXT) | Combination: AX 12 mg + tocotrienol 10 mg + zinc 6 mg/day | Oral | 3 months + ET | Muscle endurance improved (AX, p<0.05); fat oxidation increase greater in AX vs PL (combined-group); downstream effects male-specific; no aging endpoint |
| Zhou 2021 meta-analysis [^zhou2021] | Human | ~300 across trials | 4–12 mg/day | Oral | 4–16 weeks | Skin moisture + elasticity improved; wrinkle depth NS |

## Classification

- **SENS correspondence:** Not a primary SENS damage-reversal agent; closest to mitochondria-protection support; does not reverse an established SENS damage category directly
- **Hallmark targets:** [[mitochondrial-dysfunction]], [[chronic-inflammation]], [[genomic-instability]]
- **Clinical category:** dietary supplement; EU food colouring (E161j); not FDA-approved as a drug for any indication

## Limitations and concerns

- **ITP non-replication is the dominant concern.** A second ITP cohort (Korstanje 2026) failed to replicate the Harrison 2024 male lifespan extension, testing astaxanthin at a lower dose and different start ages (exact parameters unverified — paywalled; #gap/no-fulltext-access). The positive Harrison result at ~1840 ppm / 12 months is unconfirmed by direct dose-matched replication. #gap/contradictory-evidence
- **Mechanism unknown for the longevity effect.** The Nrf2/antioxidant framing is plausible but not established as causal in the ITP context. No mechanistic sub-cohort was reported in Harrison 2024. #gap/no-mechanism
- **Dose achieved in ITP was 46% of target.** The highest under-achievement of any compound in the Harrison 2024 cohort. Optimal dose is unconstrained from above; the female harm seen in Korstanje 2026 could reflect dose-related toxicity at a different concentration or age.
- **Male-sex specificity is unexplained.** Could reflect pharmacokinetic sex differences in carotenoid esterification, transport, or tissue distribution, or sex-specific differences in baseline oxidative burden. Without a mechanism study, sex-specificity cannot be extrapolated. #gap/no-mechanism
- **Human aging data is absent.** The skin and exercise RCTs are encouraging but irrelevant to longevity endpoint translation. No aging biomarker, frailty composite, or mortality endpoint has been assessed in a human RCT.
- **Long-term safety in humans unknown.** EU approval as a food colouring (E161j) covers low-dose exposures; high-dose long-term supplementation has not been formally assessed in clinical safety studies. #gap/long-term-unknown
- **Antioxidant class translation caveat.** The broad antioxidant class has repeatedly failed or shown harm in large cardiovascular and cancer prevention RCTs (vitamin E / HOPE-TOO; beta-carotene / ATBC; vitamin C / HPFS). Astaxanthin's membrane-spanning geometry and Nrf2-activator activity may distinguish it from simple chain-breaking antioxidants, but the class-level translation record is poor. See [[hypotheses/free-radical-theory]].

## Cross-references

- [[studies/harrison-2024-itp-astaxanthin-meclizine]] — the verified ITP study page (astaxanthin + fisetin + meclizine arms)
- [[studies/korstanje-2026-itp-null-cohort]] — ITP C2022 cohort; non-replication of astaxanthin and meclizine at alternative doses/ages
- [[meclizine]] — co-positive ITP compound from Harrison 2024; parallel page (stub)
- [[fisetin]] — co-tested ITP compound that was null in same Harrison 2024 cohort
- [[mitochondrial-dysfunction]] — primary hallmark target
- [[chronic-inflammation]] — secondary hallmark target
- [[hypotheses/free-radical-theory]] — contested mechanistic frame for antioxidant interventions

## Footnotes

[^harrison2024itp]: [[studies/harrison-2024-itp-astaxanthin-meclizine]] · doi:10.1007/s11357-023-01011-0 · PMID 38041783 · PMC10828146 (gold OA) · Harrison DE, Strong R, Reifsnyder P et al. (29 authors) · *GeroScience* 2024;46(1):795–816 · in-vivo · NIA ITP · UM-HET3 genetically heterogeneous mice, 3 sites (JAX/UT/UM), both sexes · astaxanthin ~1840 ppm dietary from 12 months → male median +12% (p=0.003), JAX +11%, UT +11%, UM +14%; female +3% (p=0.64 NS) · verified: true (2026-06-30)

[^korstanje2026]: [[studies/korstanje-2026-itp-null-cohort]] · doi:10.1007/s11357-026-02201-2 · PMID 41843349 · Korstanje R, Strong R, Salmon AB, … Harrison DE, … Miller RA · *GeroScience* 2026 (online 17 March 2026) · in-vivo · NIA ITP · UM-HET3 mice · **abstract-confirmed:** astaxanthin (among 8 compound groups) did not increase lifespan in either sex, tested "at novel doses or starting ages"; pooled-3-site female signal for astaxanthin attributed to a Jackson-Lab control-female anomaly and did not survive site-exclusion (only mitoglitazone + pioglitazone retained female harm). **Per-arm doses/start-ages/p-values/n's NOT verified** — paper is paywalled (no PMC; no open-access full text); an automated PDF fetch returned fabricated values that were rejected · #gap/no-fulltext-access #gap/contradictory-evidence

[^zhou2021]: doi:10.3390/nu13092917 · PMID 34578794 · Zhou X, Cao Q, Orfila C, Zhao J, Zhang L · *Nutrients* 2021;13(9):2917 · systematic review + meta-analysis (PRISMA) · 11 studies total: 9 RCTs oral astaxanthin + 2 open-label topical/oral-topical; 8 RCTs pooled (162 ASX + 131 PL = 293 subjects) · oral ASX 4–12 mg/day, 4–16 weeks · forest plots (Figure 4) confirm: moisture SMD 0.53 (95% CI 0.05, 1.01) I²=52% p=0.03 (5 studies); elasticity SMD 0.77 (95% CI 0.19, 1.35) I²=75% p=0.009 (6 studies); wrinkle depth SMD −0.26 (95% CI −0.58, 0.06) I²=0% p=0.11 (5 studies) · several included trials had unclear RoB; some industry-funded · skin aging endpoints only; no longevity or functional aging endpoint · verified against full PDF 2026-06-30

[^liu2021rct]: doi:10.14814/phy2.14887 · PMID 34110707 · Liu SZ, Valencia AP, VanDoren MP, Shankland EG, Roshanravan B, Conley KE, Marcinek DJ · *Physiological Reports* 2021;9(11):e14887 · RCT (secondary analysis of Liu et al. 2018) · n=42 TA muscle-endurance primary endpoint; n=40 (PL n=18, AX n=22) completed GXT · AX formulation: astaxanthin 12 mg + tocotrienol 10 mg + zinc 6 mg/day (AstaReal AX) — NOT pure astaxanthin · TA muscle endurance: significant training effect driven by AX group (p<0.05); AX vs PL delta NS · fat oxidation S1 phase combined-group: AX 0.76 ± 0.18 g vs PL 0.23 ± 0.15 g; sex-stratified analysis significant for AX males vs sex-matched PL only (Figure 4a); carbohydrate oxidation reduction and exercise efficiency improvement: male-specific (p<0.05) · no aging biomarker or frailty endpoint · funded by NIH (T32 AG000057, P01 AG001751)

[^basher2026review]: PMID 42193197 · Basher AA, Ibrahim NA, Liu HY, Basher NS et al. · *Antioxidants* 2026 · review · multifunctional benefits of astaxanthin in aging, oxidative stress, immune dysfunction, gut and skin health · cited here for membrane-spanning mechanism overview and NF-κB/Nrf2 pathway evidence summary · DOI unconfirmed from abstract metadata — verify before treating as a primary-mechanism source · **abstract-only verification 2026-06-30** #gap/unsourced pending DOI confirmation

[^sevimli2026]: PMID 42033587 · Sevimli M, Kurt H, Sevimli TS · *Cell Biochemistry and Biophysics* 2026 · in vitro · UV-B-irradiated human adipose-derived MSCs ± astaxanthin · modulation of oxidative stress, DNA repair pathway expression, and cell migration · cited here for genomic-instability hallmark line only · DOI unconfirmed from abstract metadata · **abstract-only verification 2026-06-30** #gap/unsourced pending DOI confirmation
