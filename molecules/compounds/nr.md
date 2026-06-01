---
type: compound
aliases: [nicotinamide riboside, NR, NIAGEN, nicotinamide riboside chloride]
pubchem-cid: 439924
inchikey: JLEBZPBDRKPWTD-TURQNECASA-O
chembl-id: CHEMBL438497
drugbank-id: null
cas-number: null
mechanisms: [nad-precursor, sirtuin-activator, ampk-activator, mitochondrial-biogenesis, nad-salvage-pathway]
measured-targets: ["[[sirtuin]]", "[[ampk]]", "[[nad-metabolism]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
clinical-stage: phase-2-trials
human-evidence-level: limited
half-life: "unclear — NR itself is rapidly converted; whole-blood NAD+ elevation sustained 6–8 h post-dose (estimated from Trammell 2016)"
translation-gap: biomarker-only
next-experiment: "Phase 3 hard-endpoint trial in sarcopenia, frailty, or cognitive decline; Freeberg 2022 BP RCT (NCT03821623) results pending — extend to clinical-event endpoints with n>=500."
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Trammell 2016, Martens 2018, Brakedal 2022, Ratajczak 2016, Freeberg 2022 verified against primary source PDFs (R23d). Zhang 2016 (10.1126/science.aaf2693) not verified — download failed (green OA via EPFL repository inaccessible); canonical-database identity fields (PubChem CID, InChIKey, ChEMBL) not independently re-verified against databases. R34 recency refresh (2026-05-08): Heggelund 2024 Nat Aging COPD, McDermott 2024 NICE PAD, Brody 2024 MCI, Takeda 2025 Werner syndrome, Schloesser 2026 Nat Metab three-precursor comparison, Caldo-Silva 2025 J Cachexia muscle meta-analysis integrated from PubMed abstracts + Crossref metadata; PDFs verified locally for Heggelund 2024 + McDermott 2024 (others abstract-only — flagged for future verifier pass)."
literature-checked-through: 2026-05-15
---


# Nicotinamide Riboside (NR)

A naturally-occurring NAD+ precursor vitamin found in milk and certain foods. Orally bioavailable and commercially developed as **NIAGEN** (ChromaDex; FDA GRAS-affirmed 2016). The most extensively human-tested NAD+ precursor as of 2026, with multiple completed Phase 1/2 trials. Central rationale: NAD+ levels decline ~50% between young adulthood and old age; restoring NAD+ is proposed to support [[sirtuin]] signaling, [[mitochondrial-dysfunction|mitochondrial function]], and DNA repair, addressing multiple aging hallmarks.

## Identity

- **PubChem CID:** 439924
- **InChIKey:** JLEBZPBDRKPWTD-TURQNECASA-O
- **ChEMBL:** CHEMBL438497
- **Molecular formula:** C11H15N2O5+ (cationic form)
- **Molecular weight:** 255.25 g/mol
- **IUPAC name:** 1-[(2R,3R,4S,5R)-3,4-dihydroxy-5-(hydroxymethyl)oxolan-2-yl]pyridin-1-ium-3-carboxamide
- **Class:** pyridine nucleoside; NAD+ precursor vitamin
- **Commercial form:** typically as nicotinamide riboside chloride (NR-Cl)
- **Regulatory status:** FDA GRAS-affirmed (2016); dietary supplement in most markets

See also: [[nmn]] (one phosphate group upstream in the same salvage pathway; closest structural analog as a competitor supplement).

## Mechanism of Action

NR enters the [[nad-salvage-pathway|NAD+ salvage pathway]] via a dedicated enzymatic route that **bypasses the NAMPT rate-limiting step**:

```
Dietary NR  →  [NRK1 / NRK2]  →  NMN  →  [NMNAT1/2/3]  →  NAD+
```

**NRK1/2 (nicotinamide riboside kinases)** phosphorylate NR to NMN, which is then converted to NAD+ by NMNAT enzymes [^ratajczak2016]. This route differs from the classical tryptophan de novo pathway and from the NAMPT-dependent route used by nicotinamide (NAM). The key claimed advantage over NAM: NR does not depend on NAMPT, whose activity itself declines with age #gap/unsourced.

Once NAD+ is elevated:
- **[[sirtuin|Sirtuins]] (SIRT1–7)** become more active — sirtuins consume NAD+ as a co-substrate for deacylation reactions, including SIRT1-mediated PGC-1α deacetylation (promoting mitochondrial biogenesis) and SIRT3-mediated mitochondrial protein deacetylation [^zhang2016].
- **[[ampk]]** may be indirectly activated via sirtuin-mediated LKB1 deacetylation, though the AMPK-NR link at physiological doses is less established than the AMPK-[[metformin]] link. #gap/no-mechanism
- **PARP1** competes with sirtuins for NAD+ — elevated NAD+ may also support DNA repair capacity.

### Structural comparison with NMN

NR is the riboside form of nicotinamide; NMN is the corresponding nucleotide (NR + one phosphate). NR must be phosphorylated intracellularly by NRK1/2 to form NMN before it can be converted to NAD+. Whether NR or NMN reaches peripheral tissues more efficiently after oral dosing remains contested, as plasma NMN may be dephosphorylated to NR prior to cellular uptake in many tissues [^ratajczak2016]. #gap/contradictory-evidence

## Effects on Aging Hallmarks

| Hallmark | Effect | Evidence level |
|---|---|---|
| [[deregulated-nutrient-sensing]] | Restores NAD+-dependent sirtuin activity; may re-sensitize nutrient-sensing networks | Limited (human); strong (rodent) |
| [[mitochondrial-dysfunction]] | NR increased mitochondrial function markers and extended lifespan in mice; muscle mitochondrial biogenesis observed | Preclinical strong; human limited |
| [[genomic-instability]] | NAD+ supports PARP1-mediated DNA repair; NR may partially restore repair capacity in aged tissue | Preclinical; no direct human evidence |

## Pharmacokinetics

**Oral bioavailability** is the most important practical constraint. Trammell et al. 2016 showed that NR is uniquely and orally bioavailable in both mice and humans — a significant distinction from some other NAD+ precursors — with dose-dependent elevation of whole-blood NAD+ metabolome [^trammell2016].

Key PK findings from human studies:

| Parameter | Value | Source |
|---|---|---|
| PBMC NAD+ elevation vs placebo | ~60% (median: 12.2 vs 7.7 pmol/mg protein; p=0.048 one-sided) at 1000 mg/day | Martens 2018 [^martens2018] |
| Dose | 1000 mg/day oral (typical trial dose) | Martens 2018 [^martens2018]; Brakedal 2022 [^brakedal2022] |
| Duration to steady-state | Not formally characterized; inferred within 6-week trial window | Martens 2018 [^martens2018] |
| Brain NAD+ elevation (31P-MRS) | Confirmed in 10/13 Parkinson's patients with data at 1000 mg/day × 30 days (p=0.016) | Brakedal 2022 [^brakedal2022] |
| Safety | Well-tolerated; no serious adverse events at 1000 mg/day × 6 weeks in healthy older adults; no AEs in PD patients × 30 days | Martens 2018 [^martens2018]; Brakedal 2022 [^brakedal2022] |

#gap/dose-response-unclear — The dose-response relationship across the 250–2000 mg range in humans has not been fully characterized. Most trials use 1000 mg/day; whether lower doses produce proportionally lower NAD+ elevation, and whether higher doses are more effective or merely accelerate catabolism, is not established.

## Dose-Response and Human Trial Evidence

### Trammell 2016 — Human PK / bioavailability
Single-dose oral NR (100, 300, and 1000 mg) raised whole-blood NAD+ and NAD+ metabolome in a dose-dependent manner in n=12 healthy subjects [^trammell2016]. A separate preliminary experiment in one 52-year-old male at 1000 mg/day for 7 days showed blood NAD+ could rise as much as 2.7-fold; this n=1 observation motivated the clinical trial. First published evidence of oral bioavailability in humans. Open-label design; ChromaDex co-authors (two employees) on the paper [^trammell2016].

### Martens 2018 — Safety and NAD+ elevation in healthy older adults
Randomized double-blind placebo-controlled crossover (2 × 6 weeks): 1000 mg NR/day (500 mg twice daily, NIAGEN) in n=30 randomized (n=24 completed) healthy middle-aged and older adults (55–79 years). Whole-blood PBMC NAD+ elevated ~60% vs placebo (median NR: 12.2 vs placebo: 7.7 pmol/mg protein; p=0.048 one-sided). No statistically significant difference in adverse events between NR and placebo conditions. Exploratory finding: mean SBP −3.9 mmHg overall (not statistically significant after correction for multiple comparisons); among the 13 subjects with above-normal baseline BP (120–139 mmHg) mean SBP was ~9 mmHg lower after NR — exploratory, no formal inference [^martens2018]. **Most frequently cited human NR safety study.**

### Freeberg 2022 — Cardiovascular RCT protocol (phase IIa)
**Study protocol paper, not results.** Freeberg et al. published the protocol for a randomized, double-blind, placebo-controlled, parallel-group phase IIa trial (NCT03821623) designed to evaluate 3 months of NR (500 mg × 2/day) on casual systolic BP and aortic stiffness in n=94 midlife and older adults (age ≥50 years) with above-normal baseline SBP (120–159 mmHg). The protocol was motivated by the exploratory BP signal in Martens 2018 [^freeberg2022]. Results of this trial are not reported in this paper. #gap/needs-replication — Cardiovascular benefit not yet published from this powered trial.

### 2024–2026 RCT wave (recency refresh, R34)

A burst of moderate-quality NR RCTs in disease-specific populations published 2024–2026 — most show NAD+ elevation with selective clinical signals. Findings below are from PubMed abstracts + Crossref metadata; PDFs verified locally for Heggelund 2024 and McDermott 2024 only. #gap/needs-replication on remaining.

- **Heggelund 2024 (Nat Aging) — COPD airway inflammation [^heggelund2024]**: n=40 stable COPD patients, NR for 6 weeks. Sputum IL-8 reduced **−52.6%** vs placebo at week 6 (95% CI −75.7% to −7.6%, p=0.030); effect persisted 12 weeks post-treatment (−63.7%, p=0.034). Whole-blood NAD+ rose >2-fold; plasma IL-6 unchanged. Exploratory: gene-pathway upregulation related to genomic integrity in airway tissue; reduced epigenetic-age signal in airway biopsies. NCT04990869. **First disease-specific NR RCT to hit a primary inflammatory endpoint.**
- **McDermott 2024 (Nat Commun) NICE — peripheral artery disease [^mcdermott2024]**: n=90 PAD patients, NR ± resveratrol vs placebo for 6 months. NR improved 6-min walk distance vs placebo by **+17.6 m** (90% CI +1.8, +∞; primary endpoint met). Per-protocol (≥75% adherence) NR alone improved 6-min walk by +31.0 m; NR+resveratrol +26.9 m — resveratrol added no benefit. **First positive functional-outcome RCT in NR.**
- **Brody 2024 (GeroScience) — MCI cognition pilot [^brody2024]**: n=20 mild cognitive impairment, NR 1 g/day × 10 weeks. NAD+ rose 2.6-fold (p<0.001). Cognition (MoCA) **stable, no improvement**. Default-mode network cerebral blood flow reduced (p=0.013). Pilot — not powered for cognition. #gap/needs-replication
- **Takeda 2025 (Aging Cell) — Werner syndrome crossover [^takeda2025]**: progeroid disorder; NR 1 g/day × 26 weeks crossover, n small. CAVI (cardio-ankle vascular index, arterial stiffness) improved; skin ulcer area decreased; heel pad thinning trend; blood creatinine decreased. Safety profile unchanged. **First positive RCT in a progeroid disease.**
- **Caldo-Silva 2025 (J Cachexia Sarcopenia Muscle) meta-analysis [^caldosilva2025]**: NMN/NR RCTs vs placebo in older adults (mean age 60.9–83). NMN: no significant effect on skeletal muscle index (MD −0.42), handgrip strength, gait speed, or 5-time chair stand test. NR data sparser. **Class-level null on muscle-functional endpoints in older adults.**
- **Schloesser 2026 (Nat Metab) — direct human comparison NR vs NMN vs NAM [^schloesser2026]**: n=65 healthy adults, 14-day randomized open-label. NR and NMN (but NOT NAM) comparably raise circulatory NAD+. Ex vivo with human gut microbiota: both NR and NMN are converted to **nicotinic acid (NA) by gut microbes**, and ex-vivo NA (not NR/NMN/NAM directly) is the potent NAD+ booster in whole blood. Authors propose a **gut-dependent model** where NR/NMN act as systemic NAD+ boosters via microbial NA conversion. **Reframes mechanism debate; superiority of NMN's Slc12a8 route (Grozio 2019) further questioned.** #gap/needs-replication

### Brakedal 2022 (NADPARK) — Phase 1 in Parkinson's disease
Randomized double-blind Phase 1 trial; n=30 newly diagnosed, treatment-naive Parkinson's disease patients (15 NR, 15 placebo); 1000 mg NR/day × 30 days. Key findings: (1) brain NAD+ confirmed elevated via 31P-MRS in the NR group (paired t-test p=0.016), though response was heterogeneous — 10/13 NR patients with available MRS data showed an increase — first in-human demonstration of CNS NAD+ elevation by oral NR; (2) in MRS-responders (n=10) a trend toward decreased MDS-UPDRS was seen (mean decrease 2.33 points, paired t-test p=0.017); no significant UPDRS change in the overall NR group; (3) NR altered cerebral metabolism (FDG-PET network pattern) [^brakedal2022]. **Not powered for efficacy** (Phase 1 safety + target engagement; primary outcome was cerebral NAD+ penetration and metabolic response).

| Study | n | Design | Dose | Duration | Primary finding |
|---|---|---|---|---|---|
| Trammell 2016 [^trammell2016] | 12 (clinical trial arm; plus n=1 pilot) | open-label PK | 100, 300, 1000 mg single dose | single dose | Dose-dependent NAD+ metabolome elevation in blood; NAD+ rose up to 2.7-fold (n=1 pilot at 1000 mg/day × 7 days) |
| Martens 2018 [^martens2018] | 30 randomized; 24 completed | randomized crossover | 1000 mg/day (500 mg × 2) | 6 weeks | PBMC NAD+ elevated ~60% vs placebo (p=0.048 one-sided); well-tolerated; exploratory BP signal not significant overall |
| Freeberg 2022 [^freeberg2022] | 94 planned (protocol only) | rct phase-IIa (protocol) | 1000 mg/day (500 mg × 2) | 3 months | Study protocol — no results reported at publication |
| Brakedal 2022 [^brakedal2022] | 30 (15 NR, 15 placebo) | rct phase-1 | 1000 mg/day | 30 days | Brain NAD+ elevated by 31P-MRS (p=0.016); mild UPDRS trend in MRS-responders only |

## Evidence Quality: Non-Human Studies

Zhang et al. 2016 (Science) showed NR supplementation to aged mice (C57BL/6) improved mitochondrial and stem cell function and extended lifespan [^zhang2016]. This is the most-cited mechanistic NR study in rodents (1173 citations as of DOI lookup, 2026-05-04). **Exact lifespan percentages and sex breakdown not verified** — the PDF failed to download (green OA via EPFL repository inaccessible to archive); the seeder's claim of "+4.6% in females" cannot be confirmed from the source. #gap/no-fulltext-access for lifespan figures; recommend verification when PDF becomes available.

| Dimension | Status |
|---|---|
| Pathway (NAD+/sirtuin/AMPK) conserved in humans? | yes |
| Phenotype (NAD+ decline with age) conserved in humans? | yes |
| Lifespan extension replicated in humans? | no — not yet testable in primary endpoint trials |

#gap/needs-human-replication — Lifespan and healthspan endpoint results in mice have not been replicated in human randomized trials. Human trials to date have used surrogate endpoints (NAD+ levels, BP, physical function) not hard aging endpoints.

## Comparison with NMN

| Feature | NR | [[nmn]] |
|---|---|---|
| Structure | Riboside (no phosphate) | Nucleotide (+ one phosphate) |
| Salvage entry | NRK1/2 → NMN → NAD+ | NMNAT directly → NAD+ |
| Bypasses NAMPT? | Yes | Yes |
| Oral bioavailability in humans | Established (Trammell 2016) | Debated; rapidly converted to NR in gut per some data |
| Human trial depth | Larger — multiple completed RCTs | Growing; fewer completed at this dose range |
| Commercial development | NIAGEN (ChromaDex); GRAS 2016 | Multiple suppliers; GRAS petition filed separately |
| Head-to-head vs NR | No completed published RCT | No completed published RCT |

#gap/contradictory-evidence — No published head-to-head RCT compares NR and NMN pharmacodynamics (NAD+ AUC, tissue distribution) at equivalent molar doses in humans. Claims of superiority of either compound are not yet evidence-based.

## Safety and Tolerability

Based on completed trials at 1000 mg/day up to 6 weeks (Martens 2018) and 30 days (Brakedal 2022):
- Well-tolerated; no serious adverse events [^martens2018] [^brakedal2022]
- Common adverse events: mild GI symptoms (nausea, flushing, leg cramps, headache) — in Martens 2018 two subjects on placebo (not NR) dropped out for side effects; no subject dropped out during the NR phase. In Brakedal 2022, seven NR patients and three placebo patients reported minor AEs, all unrelated to NR
- No liver toxicity signals in reported biochemistry (Martens 2018)

#gap/long-term-unknown — No trial has evaluated NR beyond 6 weeks in a healthy population or 30 days in a disease population. Long-term effects on cancer risk (PARP1 competition; sirtuin modulation of tumor suppressor networks), autoimmunity, or other systems are not established. Animal data does not suggest harm, but dedicated long-term safety studies are absent.

## Limitations and Gaps

- **No hard aging endpoint in humans.** All human trials use surrogate endpoints. The effect of NR on healthspan, frailty, or survival in humans is unknown.
- **The "restore age-related NAD+ deficit" rationale is undermined at the blood level (2026).** [[studies/tretowicz-2026-blood-nad-stable-aging|Trętowicz et al. 2026]] (n=303 across 7 cohorts) found whole-blood NAD+ is stable with age in humans — there is no age-related blood NAD+ deficit to correct in healthy adults. NR still raises blood NAD+ above baseline (confirmed by Trętowicz's twin-pair NR positive-control arm itself), but the supplementation is making "high" higher rather than restoring "low" to normal. The field's strongest remaining rationales for NR in aging are (a) tissue-level NAD+ decline (muscle/skin) and (b) pathological NAD+ deficit in specific disease contexts (COPD, PAD, Werner — where Heggelund 2024, McDermott 2024, Takeda 2025 RCTs met primary endpoints). #gap/contradictory-evidence [^tretowicz2026]
- **Modest effect sizes.** The exploratory BP signal in Martens 2018 (−3.9 mmHg SBP overall, not significant after correction; ~−9 mmHg in elevated-BP subgroup, exploratory) is promising but unconfirmed. Freeberg 2022 is a protocol paper for a powered trial (NCT03821623) designed to test this — results not yet published.
- **Tissue-specific NAD+ dynamics.** Whole-blood NAD+ is a convenient biomarker but may not reflect tissue-specific (muscle, brain, liver) NAD+ adequately. Brakedal 2022 addresses CNS only. As of 2026, [[nad-blood-biomarker|blood NAD+ is **not** a useful aging biomarker]] (Trętowicz 2026); whether it remains a useful pharmacodynamic biomarker for NR engagement is also weakened — the assay can detect NR-induced rise, but the baseline against which to interpret the rise is no longer "age-depressed."
- **NR vs NMN debate unresolved.** Mechanism of peripheral absorption and interconversion (NR ↔ NMN in the gut/plasma) is not fully mapped in humans. #gap/contradictory-evidence
- **Mouse lifespan data unverified.** Zhang 2016 lifespan extension claim cannot be confirmed from the source — PDF download failed (green OA via EPFL inaccessible). Seeder-claimed figure of "+4.6% in females" is unverified. #gap/needs-human-replication #gap/no-fulltext-access
- **ChromaDex commercial interest.** ChromaDex funded or co-funded several early NR trials (including Trammell 2016). Independent academic replication is growing but conflicts of interest should be noted.
- #gap/needs-canonical-id — CAS number for NR-Cl (commercial supplement form) was not retrieved; PubChem entry 439924 represents the cation. The chloride salt (NIAGEN) may carry a distinct CID.

## Classification

- **SENS strategy:** None directly — NR addresses upstream metabolic function rather than a discrete SENS damage category. Relates most closely to mitochondrial maintenance (MitoSENS context if NAD+ supports mitochondrial protein quality).
- **Hallmark targets:** [[deregulated-nutrient-sensing]], [[mitochondrial-dysfunction]]
- **Intervention category:** [[nad-precursors]] (R23d class page) — NMN/NR/niacin/NAM class context.

## Related Pages

- [[nmn]] — structural analog; one phosphate group upstream; parallel supplement category
- [[sirtuin]] — primary effector of NAD+ elevation
- [[ampk]] — indirect effector; pathway overlap with NR effects
- [[mtor]] — downstream of nutrient-sensing network NR modulates
- [[nad-salvage-pathway]] — the biochemical pathway NR feeds #stub
- [[nrk1]] — NRK1 kinase (rate-limiting enzyme for NR → NMN conversion) #stub
- [[deregulated-nutrient-sensing]] — hallmark page
- [[mitochondrial-dysfunction]] — hallmark page
- [[parkinsons-disease]] — disease context for Brakedal 2022 #stub

## Footnotes

[^trammell2016]: [[studies/trammell-2016-nr-bioavailable-humans]] · doi:10.1038/ncomms12948 · n=12 (clinical trial arm) + n=1 (pilot) · open-label PK · model: healthy humans (single dose, 100/300/1000 mg) · ChromaDex co-authors (2 employees) · archive: verified

[^martens2018]: [[studies/martens-2018-nr-older-adults]] · doi:10.1038/s41467-018-03421-7 · n=30 randomized; 24 completed · randomized double-blind crossover · model: healthy middle-aged and older adults (55–79 yr) · archive: verified

[^brakedal2022]: [[studies/brakedal-2022-nadpark-parkinsons]] · doi:10.1016/j.cmet.2022.02.001 · n=30 (15 NR, 15 placebo) · rct phase-1 · model: newly diagnosed treatment-naive Parkinson's disease patients · 30 days · archive: verified

[^zhang2016]: [[studies/zhang-2016-nad-repletion-lifespan-mice]] · doi:10.1126/science.aaf2693 · n=not verified · in-vivo · model: aged C57BL/6 mice · archive: download failed (green OA via EPFL; inaccessible) #gap/no-fulltext-access

[^ratajczak2016]: [[studies/ratajczak-2016-nrk1-nad-metabolism]] · doi:10.1038/ncomms13103 · in-vitro + in-vivo · model: mammalian cell lines (NIH/3T3, HepG2, AML12) + mouse IP injection · archive: verified

[^tretowicz2026]: [[studies/tretowicz-2026-blood-nad-stable-aging]] · doi:10.1038/s42255-026-01537-5 · observational + intervention pooled · n=303 across 7 independent cohorts (Netherlands, Spain, Finland) · whole-blood NAD+ stable with age (all 6 age-comparison analyses null: P 0.24–0.62, R² 0.012–0.051) and stable across exercise/protein interventions in older adults; positive control: 5-month NR supplementation in twin-pair cohort (NCT03951285) raises whole-blood NAD+ as expected — confirms NR's pharmacodynamic effect is detectable on this validated UHPLC-HRMS assay · prior conflicting blood-NAD+/aging literature attributed to pre-analytical handling artifacts (frozen-without-methanol loses 30–80% of NAD+) · *Nature Metabolism* 2026-05-14 · Trętowicz MM et al. (Houtkooper laboratory, Amsterdam UMC) · archive: not yet in archive · `verified: false` (Results/Discussion paywalled; Abstract + Reporting Summary + 8 source-data XLSX directly verified)

[^freeberg2022]: [[studies/freeberg-2022-nr-blood-pressure]] · doi:10.3389/fcvm.2022.881703 · n=94 planned · rct phase-IIa protocol (NCT03821623) · model: midlife and older adults (age ≥50 yr) with above-normal SBP (120–159 mmHg) · no results reported at publication · archive: verified

[^heggelund2024]: [[studies/heggelund-2024-nr-copd-airway-inflammation]] · doi:10.1038/s43587-024-00758-1 · n=40 · rct (randomized double-blind placebo-controlled) · p=0.030 (primary endpoint, sputum IL-8 −52.6%) · model: stable COPD patients · NR 6 weeks · NCT04990869 · archive: local PDF available · *Nature Aging* 2024 · integrated from abstract + Crossref metadata pending full PDF verification

[^mcdermott2024]: [[studies/mcdermott-2024-nice-nr-pad]] · doi:10.1038/s41467-024-49092-5 · n=90 · rct (randomized double-blind placebo-controlled, NR ± resveratrol vs placebo) · primary endpoint met (6MWD +17.6 m, 90% CI +1.8, +∞) · model: peripheral artery disease patients · 6 months · *Nature Communications* 2024 · archive: local PDF available · integrated from abstract + Crossref metadata pending full PDF verification

[^brody2024]: [[studies/brody-2024-nr-mci-cognition]] · doi:10.1007/s11357-023-00999-9 · n=20 · rct pilot (placebo-controlled) · NAD+ 2.6-fold rise (p<0.001) · cognition stable · model: mild cognitive impairment older adults · NR 1 g/day × 10 weeks · *GeroScience* 2024 · archive: pending download · integrated from abstract pending PDF verification

[^takeda2025]: [[studies/takeda-2025-nr-werner-syndrome]] · doi:10.1111/acel.70093 · n small · rct (double-blind randomized crossover placebo-controlled) · CAVI improved; skin ulcer area decreased · model: Werner syndrome (progeroid) patients · NR 1 g/day × 26 weeks crossover · *Aging Cell* 2025 · archive: pending download · integrated from abstract pending PDF verification

[^caldosilva2025]: [[studies/caldosilva-2025-nmn-nr-muscle-meta-analysis]] · doi:10.1002/jcsm.13799 · meta-analysis · NMN: no significant effect on SMI, HGS, gait speed, 5CST in older adults · model: middle-aged to elderly (60.9–83 y) · *Journal of Cachexia, Sarcopenia and Muscle* 2025 · archive: pending · integrated from abstract pending PDF verification

[^schloesser2026]: [[studies/schloesser-2026-nad-precursors-comparison]] · doi:10.1038/s42255-025-01421-8 · n=65 · rct (open-label, placebo-controlled, three-arm comparison NR vs NMN vs NAM) · NR and NMN comparably raise circulatory NAD+; NAM does not · ex-vivo: gut microbes convert NR/NMN to nicotinic acid; NA is the potent NAD+ booster · 14 days · *Nature Metabolism* 2026 · archive: pending download · integrated from abstract pending PDF verification — substantively reframes mechanism debate
