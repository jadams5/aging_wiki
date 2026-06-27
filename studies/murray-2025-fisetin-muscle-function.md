---
type: study
doi: 10.1111/acel.70114
pmid: 40437670
pmc: PMC12341784
title: "Intermittent Supplementation With Fisetin Improves Physical Function and Decreases Cellular Senescence in Skeletal Muscle With Aging: A Comparison to Genetic Clearance of Senescent Cells and Synthetic Senolytic Approaches"
authors: [Murray KO, Mahoney SA, Ludwig KR, Miyamoto-Ditmon JH, VanDongen NS, Banskota N, Herman AB, Seals DR, Mankowski RT, Rossman MJ, Clayton ZS]
year: 2025
journal: Aging Cell
volume: 24
issue: 8
pages: e70114
study-design: in-vivo
publication-type: research-article
organism: mus-musculus
n-subjects: 98   # fisetin study final n: Young Veh 9, Young Fisetin 11, Old Veh 31, Old Fisetin 39 (=90); p16-3MR and ABT-263 arms are separate independent studies (n=73 and n=54 respectively); 98 = fisetin-arm total
intervention: ["[[fisetin]]", "[[navitoclax]]"]
hallmarks-tested: ["[[hallmarks/cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [fisetin-improves-frailty-old-mice, fisetin-improves-grip-strength-old-mice, no-effect-young-mice, muscle-transcriptome-senescence-genes-lower, comparable-to-genetic-clearance-and-abt263]
local-pdf: null
verified: true
verified-date: 2026-06-26
verified-by: claude
verified-scope: "Full 15-page PDF read end-to-end. All quantitative claims verified against figures, tables, and text. Corrections documented in log/2026-06-26.md. Supplementary data (Data S1, S2) not independently read — they contain raw fold-change/frailty tables already summarised in the main text figures."
literature-checked-through: 2026-06-26
---

# Intermittent Supplementation With Fisetin Improves Physical Function and Decreases Cellular Senescence in Skeletal Muscle With Aging

## TL;DR

Murray et al. (2025) tested a clinically-motivated intermittent oral fisetin regimen (100 mg/kg/day; 1 week on – 2 weeks off – 1 week on) in aged male and female C57BL/6 mice (27–29 months) and show that it mitigates age-related worsening of **frailty** (15% lower frailty index; p=0.0264) and **grip strength** (14% higher; p=0.0038), with no effect in young mice. Bulk RNA-seq of quadriceps muscle reveals favorable modulation of the skeletal muscle transcriptome, including lower abundance of senescence-associated genes — most notably *Cdkn1a*/p21 (ameliorated ~46% of the age-related increase, expression returned to near-young levels) and *Ddit4*/REDD1. Critically, the functional improvements in aged mice were **statistically comparable in magnitude** to two well-established senescence-clearance benchmarks: (1) genetic clearance of p16+ cells in p16-3MR mice (p=0.8281 for frailty comparison), and (2) intermittent oral [[navitoclax]] (ABT-263; 50 mg/kg/day) on the same schedule (p=0.7901 for frailty comparison). **The paper does NOT directly quantify senescent cells in skeletal muscle** — there is no SA-β-galactosidase staining, no p16/p21 IHC cell counting, and no flow cytometry in muscle tissue. The senescence readout in muscle is exclusively transcriptomic (bulk RNA-seq + RT-PCR) and pathway-level (KEGG enrichment). The authors explicitly acknowledge this in the Discussion. The paper provides proof-of-concept support for fisetin as a senolytic strategy for age-related physical function decline, while noting that direct cell-level confirmation in muscle tissue remains needed.

## Design

Three independent in-vivo studies were conducted and results compared post hoc.

**Fisetin study:**
- **Strain + age:** Young (6–8 months) and old male (27 months) C57BL/6N wildtype mice; old female (29 months) p16-3MR mice on C57BL/6 background also included (data combined as no model effect detected). Male and female data combined for all analyses after confirming no sex differences.
- **Dose + route:** Fisetin 100 mg/kg/day oral gavage; vehicle: 10% EtOH, 30% PEG400, 60% Phosal 50 PG
- **Regimen:** 1 week on – 2 weeks off – 1 week on (total 8 weeks from baseline)
- **Final n per group (after attrition from age-related mortality):** Young Veh N=9 (5M/4F), Young Fisetin N=11 (6M/5F), Old Veh N=31 (23M/8F), Old Fisetin N=39 (31M/8F)
- **Endpoints:** Frailty index (31-point validated composite, 7 subdomains; Whitehead et al. 2014); forelimb grip strength normalized to body weight (g/g BW); bulk RNA-seq of quadriceps (N=10/group)

**p16-3MR study (Comparator 1 — genetic senescent-cell clearance):**
- **Strain + age:** Young (6–8 months) and old (27 months male / 29 months female) p16-3MR mice on C57BL/6 background
- **Intervention:** Ganciclovir (GCV) 25 mg/kg/day intraperitoneal × 5 consecutive days to induce p16+ cell clearance
- **Final n:** Young Veh N=18, Young GCV N=17, Old Veh N=18, Old GCV N=20; RT-PCR N=9–10/group
- **Endpoints:** Same frailty index + grip strength; RT-PCR for Cdkn1a, Cdkn2a, Pai1, Lmnb1 in quadriceps

**ABT-263 study (Comparator 2 — synthetic senolytic):**
- **Strain + age:** Young (6 months) and old (27 months) male C57BL/6N mice
- **Dose + route:** ABT-263 50 mg/kg/day oral gavage; same vehicle as fisetin
- **Regimen:** 1 week on – 2 weeks off – 1 week on (same as fisetin)
- **Final n:** Young Veh N=18, Young ABT-263 N=11, Old Veh N=15, Old ABT-263 N=10; RT-PCR N=9–10/group
- **Endpoints:** Same frailty index + grip strength; RT-PCR in quadriceps

**Molecular readouts in all arms:** RT-PCR for senescence markers (Cdkn2a/p16, Cdkn1a/p21, Pai1/PAI-1, Lmnb1/Lamin B1) normalized to Gapdh. No SA-β-galactosidase staining, no IHC cell counting, no flow cytometry performed in skeletal muscle in any arm.

**Investigators were blinded** to treatment group for data collection and biochemical analyses.

## Key results

### Functional outcomes — old mice (fisetin arm)

- Old Veh: frailty index 0.27±0.01 AU (N=31); grip strength 2.90±0.1 g/g BW (N=30)
- Old Fisetin: frailty index 0.23±0.01 AU (N=39); grip strength 3.30±0.1 g/g BW (N=30)
- Fisetin produced **15% lower frailty index** (p=0.0264) and **14% higher grip strength** (p=0.0038) vs Old Veh
- Expressed relative to the aging effect: fisetin attenuated age-related frailty change by **18%** and grip-strength decline by **40%**

### Functional outcomes — comparator arms

| Arm | Frailty reduction vs Old Veh | Grip-strength gain vs Old Veh | p (frailty) | p (grip) |
|---|---|---|---|---|
| Fisetin (100 mg/kg/d oral, 1wk-on/2wk-off/1wk-on) | 15% (N=39) | 14% (N=30) | 0.0264 | 0.0038 |
| GCV/p16-3MR genetic clearance (IP 25 mg/kg/d ×5d) | 27% (N=20) | 22% (N=20) | 0.0224 | 0.0026 |
| ABT-263 (50 mg/kg/d oral, same schedule) | 44% (N=10) | 23% (N=8) | 0.0069 | 0.0172 |

Cross-arm comparison (relative to respective old vehicle groups; Fig. 6): frailty reduction not significantly different between Fisetin vs GCV (p=0.8281) or Fisetin vs ABT-263 (p=0.7901); grip-strength gain not significantly different for Fisetin vs GCV (p=0.9974) or Fisetin vs ABT-263 (p=0.2523). This is a "no significant difference" finding, **not a formal non-inferiority test** — small group sizes (especially ABT-263 old arm N=10) limit the power to detect differences. #gap/needs-replication

### Functional outcomes — young mice

- Fisetin: frailty 0.02±0.01 AU (N=11; p=0.9949 vs Young Veh); grip 4.2±0.3 g/g BW (N=11; p=0.872) — **no effects**
- GCV in young p16-3MR mice: no effect on frailty or grip strength
- ABT-263 in young mice: no effect on frailty (0.02±0.01; p=0.9881) or grip strength (4.79±0.33 g/g BW; p=0.9982)
- Age-specificity is consistent across all three intervention arms

### Skeletal muscle — transcriptomic and RT-PCR readouts (NOT direct cell counting)

**CRITICAL NOTE — exclusively transcriptomic readout in muscle:** The paper contains **no SA-β-galactosidase staining, no p16/p21 immunohistochemistry with cell counting, no flow cytometry, and no RNAscope** in skeletal muscle tissue in any arm. All muscle-senescence evidence is transcriptomic (mRNA abundance). The paper's title claim of "Decreases Cellular Senescence in Skeletal Muscle" rests on:

1. **Bulk RNA-seq (N=10/group; Young Veh, Old Veh, Old Fisetin):** 185 DEGs between Young Veh and Old Veh; 191 DEGs between Old Fisetin and Young Veh (less separation from young than Old Veh); *Cellular Senescence* and *p53 signaling* KEGG pathways enriched in Young-vs-Old-Veh comparison, **no longer enriched** in Young-vs-Old-Fisetin comparison (Fig. 2E vs 2F)
2. **RT-PCR (Cdkn2a, Cdkn1a, Pai1, Lmnb1; N=10/group):**
   - *Cdkn1a* (p21): fisetin ameliorated ~46% of the age-related increase; expression returned to near-young levels (Fig. 3C; p=0.183 vs Young Veh, p=0.193 vs Old Veh — note these are NS; the key finding is directional amelioration relative to aging effect)
   - *Cdkn2a* (p16), *Ankrd1*, *Gadd45a*: **NOT significantly different** with fisetin treatment (in contrast to ABT-263 and GCV)
   - *Ddit4* (REDD1): significantly lower in Old Fisetin vs Old Veh (Fig. 3F; \*\*p<0.01)
   - *Pai1*, *Lmnb1*: no effect of fisetin
3. **Deconvolution analysis:** fisetin did not alter cell-type proportions in bulk RNA-seq data; Cdkn1a reduction by fisetin was estimated to occur across multiple cell types (myonuclei, pericytes, fibro-adipogenic progenitors, neural cells)

**ABT-263 arm RT-PCR (for contrast):** 76% lower Cdkn1a (p<0.0001) and 45% lower Cdkn2a (p=0.0057) vs Old Veh — a broader transcriptomic senescence reduction than fisetin

The authors state in the Discussion: *"senolytic effects observed via gene expression are generally confirmed with cell experiments or histological evaluation... additional research is needed to more comprehensively establish the senolytic and/or senomorphic effects of fisetin in skeletal muscle."* #gap/needs-replication

### Muscle mass — no treatment effects

No effects of treatment (fisetin, GCV, or ABT-263) on muscle mass (soleus, gastrocnemius, tibialis anterior, or quadriceps) were found in young or old mice (Table 2). Age-related lower muscle mass was confirmed (skeletal muscle mass lower in old vs young in each group) but fisetin did not rescue this.

## Relationship to prior fisetin and senolytic-muscle literature

### Contrast with Yousefzadeh 2018 (foundational fisetin paper)

The foundational senolytic characterization of fisetin [^yousefzadeh2018] demonstrated p16+ senescent-cell clearance in **fat, spleen, liver, kidney, and blood** of aged mice (and human adipose tissue ex vivo), but did **not** demonstrate direct senescent-cell-count reduction in **skeletal muscle**. Murray 2025 thus fills an important tissue gap — albeit (per the nuance above) primarily via transcriptomic evidence in this paper.

### Contrast with Dungan 2022 (muscle-hypertrophy senolytic, D+Q)

[[studies/dungan-2022-senolytic-muscle-hypertrophy]] (Dungan et al.) used **dasatinib + quercetin (D+Q)**, not fisetin, to clear senescent cells from overloaded skeletal muscle in old mice, restoring type 2x+2b fiber hypertrophy. Key DEGs in that study included *Ddit4* (downregulated after D+Q) and *Igf1* (upregulated) — both consistent with the present study's direction for *Ddit4* after fisetin. Murray 2025 provides a parallel evidence strand: a different senolytic compound (fisetin), a different functional endpoint (frailty + grip strength at rest rather than hypertrophy under overload), and a different transcriptomic readout context (baseline old-age muscle rather than overloaded muscle).

### Comparator value of the genetic clearance arm

The p16-3MR comparator arm (genetic clearance of all p16+ cells) is a methodological strength — it allows the paper to ask whether fisetin's functional effects match the ceiling set by direct p16+ clearance. Numerically, GCV (27% frailty reduction, 22% grip improvement) and ABT-263 (44%, 23%) show somewhat larger point estimates than fisetin (15%, 14%), but the between-arm comparisons are not significant. The "comparable" claim is specifically a null result on between-arm tests (p=0.83–0.99), which cannot exclude true differences given small ns (ABT-263 old arm N=10). The paper also notes that GCV and ABT-263 additionally reduced *Cdkn2a* (p16) expression while fisetin did not, suggesting "possibly greater influence of clearance of genetic elimination of p16+ cells and ABT-263 on physical function" — the authors explicitly acknowledge fisetin may be less effective, but state this is consistent with fisetin "at least as effective" given non-significant differences. #gap/needs-replication

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Cellular senescence, Cdkn1a/p21, Ddit4/REDD1, and mTOR signaling are all present in human skeletal muscle |
| Phenotype conserved in humans? | partial | Age-related frailty and grip strength decline are well-documented human phenotypes; senescent-cell accumulation in aged human skeletal muscle is confirmed (Moiseeva 2023, Nat Commun 2025 snRNA-seq atlas); but fisetin's functional rescue has not been tested in humans |
| Replicated in humans? | no | No human arm in this study. #gap/needs-human-replication — this is the critical translational gap. Multiple fisetin human trials exist (see [[fisetin]] § Human evidence); whether muscle-specific functional outcomes are primary endpoints in those trials should be confirmed |

## Limitations

- **No direct senescent-cell quantification in muscle.** The paper uses bulk RNA-seq, RT-PCR (Cdkn1a, Cdkn2a, Pai1, Lmnb1), KEGG enrichment, and deconvolution as senescence readouts in skeletal muscle. There is no SA-β-galactosidase staining, no p16/p21 IHC cell counting, no flow cytometry, and no RNAscope in muscle tissue. The authors acknowledge this explicitly in the Discussion. The "decreases cellular senescence" claim in the title rests on transcriptomic evidence only. The transcriptomic changes could reflect senolysis, senomorphic suppression of the SASP/senescence program, or indirect effects on gene expression. #gap/needs-replication
- **Fisetin did not reduce Cdkn2a (p16) expression in muscle**, in contrast to both GCV (44% lower, p=0.0063) and ABT-263 (45% lower, p=0.0057). Fisetin primarily reduced Cdkn1a (p21) and Ddit4. The authors note this may indicate quantitatively lesser clearance of p16+ cells vs the comparators.
- **No muscle mass rescue.** Despite frailty and grip-strength improvements, no treatment effect on muscle mass was detected in any group (quadriceps, soleus, gastrocnemius, tibialis anterior). Grip-strength improvement therefore reflects functional changes independent of hypertrophy.
- **Mouse-only.** No human arm. Whether oral intermittent fisetin at 100 mg/kg/day in mice achieves relevant tissue concentrations in humans — given fisetin's poor oral bioavailability and very short plasma half-life (~0.09 h rapid + 3.1 h terminal) — is uncertain. See [[fisetin]] § Pharmacokinetics. #gap/needs-human-replication
- **Comparability claim based on underpowered between-arm null results.** The "comparable" finding is that Old Fisetin vs Old GCV and Old Fisetin vs Old ABT-263 comparisons are non-significant (p=0.83–0.99 for frailty; p=0.25–0.99 for grip). This is not a non-inferiority test. ABT-263 old arm N=10 has limited power to detect differences. Numerically, ABT-263 produced larger effect sizes (44% frailty reduction) vs fisetin (15%).
- **Three independent studies compared post hoc.** The three arms (fisetin, p16-3MR/GCV, ABT-263) were not conducted concurrently or with a shared control group. Between-arm comparisons (Figure 6) normalize to each study's own old-vehicle group, which mitigates but does not eliminate batch/cohort differences.
- **Single lab / institution.** University of Colorado Boulder + National Institute on Aging collaboration; independent replication needed. #gap/needs-replication
- **Funding.** F32HL167552 (K.O.M.), K99NL159241 (Z.S.C.), F31HL165885 (S.A.M.), 23CDA1053582 (M.J.R.), R01AG055822-04S1 (D.R.S. & Z.S.C.), and Intramural Research Program of the National Institute on Aging (A.B.H. & N.B.); plus VIVA Physician Awards: F32HL167552 (K.O.M.) & 23POST1025630 (K.O.M.). All publicly funded / AHA; no industry sponsors. Authors declare no conflicts of interest.

## Cross-references

- [[fisetin]] — compound page; mechanism, PK, trial landscape
- [[hallmarks/cellular-senescence]] — hallmark page for cellular senescence
- [[skeletal-muscle]] — tissue page; senescence changes with aging
- [[sarcopenia]] — phenotype; grip strength and frailty are closely related endpoints
- [[frailty]] — phenotype; primary functional endpoint in this study
- [[satellite-cells]] — cell type; likely implicated but not directly assessed in this abstract
- [[navitoclax]] — ABT-263, the synthetic senolytic comparator in this study
- [[interventions/pharmacological/senolytics]] — intervention class page; fisetin and ABT-263 context
- [[p21]] — protein encoded by *Cdkn1a*, downregulated in fisetin-treated muscle
- [[studies/yousefzadeh-2018-fisetin-senolytic]] — foundational fisetin senolytic paper (fat/spleen/liver/kidney/blood; not muscle)
- [[studies/dungan-2022-senolytic-muscle-hypertrophy]] — D+Q senolytic in muscle (different compound, hypertrophy endpoint)
- [[ddit4]] — *Ddit4*/REDD1 gene, downregulated in both this study (fisetin) and Dungan 2022 (D+Q) #stub
- [[cdkn1a]] — gene encoding p21; senescence marker downregulated in fisetin-treated muscle #stub

## Cited by wiki pages

[Auto-populated by Obsidian backlinks panel]

---

## Footnotes

[^yousefzadeh2018]: [[studies/yousefzadeh-2018-fisetin-senolytic]] · n=8–9/group (lifespan) · in-vivo · p<0.05 · model: aged WT mice (C57BL/6 × FVB/n F1 hybrid + C57BL/6 for acute arm) + human adipose ex vivo (n=3); demonstrates fisetin as senolytic in fat/spleen/liver/kidney/blood — not muscle. Foundational fisetin senolytic paper.
