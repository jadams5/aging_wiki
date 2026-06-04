---
type: study
doi: 10.7554/eLife.58914
pmid: 33063668
pmc: PMC7591257
title: "Effects of lifelong testosterone exposure on health and disease using Mendelian randomization"
authors: [Mohammadi-Shemirani P, Chong M, Pigeyre M, Morton RW, Gerstein HC, Paré G]
year: 2020
journal: eLife
volume: 9
issue: null
pages: e58914
study-design: observational
publication-type: research-article
organism: homo-sapiens
n-subjects: 161268
intervention: []
hallmarks-tested: ["[[altered-intercellular-communication]]", "[[deregulated-nutrient-sensing]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [testosterone-prostate-cancer-men, testosterone-hypertension-men, testosterone-alopecia-men, testosterone-bone-mineral-density-men, no-t2d-benefit-men, no-cardiovascular-benefit-men, 461-outcomes-screened]
local-pdf: null
verified: true
verified-date: 2026-06-04
verified-by: claude
verified-scope: "Full OA PDF (PMC7591257) read end-to-end. All quantitative claims in Tables 1–2, abstract, and Discussion cross-checked. Corrections applied: (1) multiple-testing method clarified as Bonferroni throughout (not FDR); (2) instrument description updated from placeholder to accurate 93-SNP IVW MR; (3) HDL adverse finding added (was absent from key findings); (4) prostate cancer OR confirmed (placeholder hedge removed); (5) spinal stenosis OR added from Table 2. Hypertension OR 1.17 (1.08–1.26) confirmed against Table 2."
literature-checked-through: 2026-06-04
---

# Effects of lifelong testosterone exposure on health and disease using Mendelian randomization

**Mohammadi-Shemirani P et al. · *eLife* 9:e58914 · 2020 · DOI: 10.7554/eLife.58914**

PMID: 33063668 · PMC: PMC7591257 · 66 citations (OpenAlex). Gold open access.

## TL;DR

Mohammadi-Shemirani et al. conducted a broad-scope Mendelian randomization (MR) screen of **461 outcomes** in 161,268 UK Biobank males, testing whether genetically predicted higher testosterone is causally linked to health and disease. The study found a mixed picture: testosterone causally increases bone mineral density and decreases body fat (beneficial), but also causally increases prostate cancer risk, androgenic alopecia, spinal stenosis, and hypertension (adverse). Critically, **no benefit was found for type 2 diabetes, cardiovascular, or cognitive outcomes** — a finding that partially contradicts Ruth et al. 2020, which found a protective T2D effect in men (OR 0.86). This discordance is an active gap in the MR testosterone literature.

## Study Design

### Population

- **Cohort:** UK Biobank, **males only**, n = 161,268
- **Scope:** Broad phenome-wide screen — **461 outcomes** tested spanning metabolic, cardiovascular, musculoskeletal, neurological, urological, dermatological, and endocrine domains
- **Instrument:** 93 independent SNPs associated with calculated free testosterone (CFT) at genome-wide significance (p<5×10⁻⁸), after excluding any variant with a nominal SHBG association (p<0.05) in the same UK Biobank sample and any variant in the HLA region. The 93 signals were identified by LD-pruning (r²<0.01 using 1000 Genomes Europeans) from an initial 7,048 SNPs that survived the SHBG exclusion filter. Chip-based heritability of CFT = 15% (95% CI 14–16%); these 93 SNPs explain 3.7% of CFT variance.
- **Exposure:** Genetically predicted calculated free testosterone (CFT), expressed per 0.1 nmol/L increase. CFT was calculated using the Vermeulen equation from measured total T, SHBG, and albumin.
- **Primary analysis:** Inverse-variance weighted (IVW) one-sample MR. Sensitivity analyses: MR-Egger (no directional pleiotropy detected, p_intercept >0.05 for all outcomes), weighted median, MR-RAPS (consistent with IVW for all significant outcomes), MR-PRESSO (pleiotropic variants detected for several outcomes but removal did not change significance or interpretation), leave-one-out (no single outlying variant drove significant outcomes)

### Scope

This study followed two analytic tracks: (1) a **pre-specified a priori arm** of 22 outcomes with known relevance to TRT (physical/metabolic/adverse effects from prior RCTs), using Bonferroni correction for 22 tests (p<2.27×10⁻³); and (2) a **phenome-wide discovery arm** of 439 outcomes (415 diseases + 24 biomarkers) using Bonferroni correction for 439 tests (p<1.14×10⁻⁴). The "461 outcomes" total reported in the abstract is the sum of both arms. Multiple-testing correction throughout is **Bonferroni, not FDR**.

## Key Findings

### Confirmed beneficial causal effects

Per 0.1 nmol/L higher CFT (Bonferroni-significant, p<2.27×10⁻³ for the 22-outcome a priori arm):

- **Bone mineral density:** +0.40 SD (95% CI 0.25–0.54; p=1.10×10⁻⁷) [^mohammadi2020] — consistent with both observational data and TRT RCTs; mechanism likely via aromatization to estradiol acting on bone remodeling ([[cyp19a1]] / [[esr1]] axis)
- **Fat-free body mass:** +1.91% (95% CI 1.48–2.35; p=9.06×10⁻¹⁸) [^mohammadi2020] — consistent with testosterone's anabolic effects via [[androgen-receptor]]
- **Body fat percentage:** −1.88% (95% CI −2.31 to −1.45; p=1.65×10⁻¹⁷) [^mohammadi2020]
- **Hematocrit:** +1.37% (95% CI 1.12–1.62; p=1.03×10⁻²⁷) [^mohammadi2020] — erythropoiesis-stimulating effect; context-dependent: beneficial in anemia, adverse in polycythemia
- **C-reactive protein (CRP):** −0.085 SD (95% CI −0.119 to −0.052; p=6.15×10⁻⁷) [^mohammadi2020] — discovered in the phenome-wide arm (Table 2); consistent with testosterone's anti-inflammatory effects

### Confirmed adverse causal effects

Per 0.1 nmol/L higher CFT:

- **Prostate cancer:** OR 1.51 (95% CI 1.21–1.88; p=2.10×10⁻⁴) [^mohammadi2020] — Bonferroni-significant in the 22-outcome arm; consistent with Ruth 2020 and biological plausibility (AR-driven proliferation)
- **Androgenic alopecia:** OR 1.49 (95% CI 1.19–1.86; p=5.28×10⁻⁴) [^mohammadi2020] — Bonferroni-significant; consistent with DHT-mediated (via SRD5A2) hair follicle miniaturization
- **Hypertension:** OR 1.17 (95% CI 1.08–1.26; p=1.05×10⁻⁴) [^mohammadi2020] — significant in the phenome-wide arm (Table 2); sodium/water retention mechanism via AR on renal tubule or aldosterone interaction
- **Spinal stenosis:** OR 2.03 (95% CI 1.51–2.75; p=3.82×10⁻⁶) [^mohammadi2020] — significant in the phenome-wide arm (Table 2); plausible via androgenic bone/ligamentum hypertrophy
- **HDL cholesterol:** −0.074 SD (95% CI −0.109 to −0.039; p=3.62×10⁻⁵) [^mohammadi2020] — significant in the phenome-wide arm (Table 2); lowered HDL is an adverse cardiovascular-risk signal; also found in the Testosterone Trials (Mohler/Snyder)
  
### Null findings — clinically important

**No significant causal benefit found for (a priori arm, Bonferroni threshold p<2.27×10⁻³):**

- **Type 2 diabetes:** OR 1.02 (95% CI 0.81–1.28; p=0.87) — no protective effect [^mohammadi2020]
- **Heart failure:** OR 1.01 (95% CI 0.76–1.34; p=0.95) [^mohammadi2020]
- **All stroke:** OR 1.18 (95% CI 0.90–1.56; p=0.23) [^mohammadi2020]
- **Ischemic stroke:** OR 0.92 (95% CI 0.61–1.37; p=0.67) [^mohammadi2020]
- **Myocardial infarction:** OR 1.23 (95% CI 1.00–1.53; p=0.05) — borderline; does not reach Bonferroni threshold; note the lower CI bound of 1.00 indicates slight signal [^mohammadi2020]
- **Dementia:** OR 1.26 (95% CI 0.67–2.34; p=0.47) — no cognitive benefit [^mohammadi2020]
- **Venous thromboembolism:** OR 1.02 (95% CI 0.74–1.40; p=0.92) [^mohammadi2020]
- **Diastolic blood pressure:** +0.27 mmHg (95% CI −0.30 to 0.85; p=0.35); **systolic blood pressure:** −0.12 mmHg (95% CI −1.23 to 1.00; p=0.84) — despite the significant hypertension risk finding, blood pressure as a continuous outcome was not significantly changed [^mohammadi2020]

These null cardiovascular and cognitive findings are consistent with the TRAVERSE RCT's (Lincoff 2023) largely neutral finding on MACE endpoints, though the TRAVERSE population was older and selected for CVD risk. The null T2D finding **diverges from Ruth 2020**, which found OR 0.86 for T2D in men.

## Discordance with Ruth 2020 on T2D in Men

The two UK Biobank MR studies in men published in 2020 reach **different conclusions** on whether testosterone causally protects against T2D in men:

| Study | Population (males) | T2D finding |
|---|---|---|
| Ruth 2020 | UK Biobank sub-sample | OR 0.86 (95% CI: 0.76–0.98) — **protective** |
| Mohammadi-Shemirani 2020 | UK Biobank n=161,268 males | **No significant association** |

Potential explanations:
1. **Instrument differences:** Different SNP sets for the genetic instrument; different sample overlap; different instrument strength
2. **Power:** T2D subgroup power may differ by analysis design
3. **Analytical pipeline:** Different MR implementation and sensitivity analysis choices
4. **Multiple testing correction:** Ruth 2020 pre-specified T2D as a key outcome; Mohammadi-Shemirani applied phenome-wide correction (461 outcomes)
5. **Sample overlap:** Both draw on UK Biobank; sample overlap can introduce winner's-curse-derived discordance

This discordance means the causal status of testosterone's T2D effect in men **cannot be considered established** from MR data alone. It remains an active gap. #gap/contradictory-evidence

## Critical Appraisal

### Strengths

- **Broad phenome-wide scope** (461 outcomes) — reduces selective-outcome reporting bias; enables unexpected discoveries (e.g., spinal stenosis)
- **Large sample** (n=161,268 men) — substantial power for common outcomes
- **Gold open access** — fully verifiable
- **Sensitivity analyses** for horizontal pleiotropy
- **Male-only** design is correct for an intrinsically sex-dimorphic exposure

### Weaknesses and MR-specific caveats

- **Winner's curse** — same UK Biobank discovery population issue as Ruth 2020
- **Lifelong-exposure interpretation** — genetic instruments reflect lifetime trajectory of elevated testosterone; not equivalent to TRT-trial-style supplementation
- **Horizontal pleiotropy** — testosterone SNPs may affect disease through SHBG or non-testosterone pathways; MR-Egger sensitivity analysis addresses this partially
- **UK Biobank healthy-volunteer bias** — underrepresentation of chronically ill men; may bias cardiovascular and T2D null findings toward null
- **Multiple testing (461 tests)** — phenome-wide correction increases false-negative risk for moderate true effects; some real associations may have been missed
- **No women** — the study is male-only; cannot assess the sex-divergent T2D effect that is the central finding of Ruth 2020

## Significance in the Wiki

Mohammadi-Shemirani 2020 is the broadest-scope testosterone MR study in males and the primary evidence source for:
1. Causal cardiovascular and T2D null findings (no benefit in males) — important counterweight to TRT-optimism
2. Broadest systematic catalogue of testosterone causal effects across the male phenome
3. The T2D discordance with Ruth 2020 — a live methodological debate

Together with Ruth 2020 and the TRAVERSE RCT, this paper anchors the causal evidence base for [[molecules/compounds/testosterone]]'s risk-benefit profile.

## Extrapolation Assessment

| Dimension | Status |
|---|---|
| Population: human? | Yes (UK Biobank males) |
| Causal inference design: MR? | Yes |
| Sex-stratified? | Males only (by design) |
| Replicated? | Partially consistent with Ruth 2020 on prostate cancer and bone density; discordant on T2D |
| Null CV finding consistent with RCT? | Yes — TRAVERSE MACE non-inferiority largely confirms |

## Cross-References

- [[studies/ruth-2020-testosterone-mr-disease]] — sister MR study (both sexes, n=425,097; more detailed cancer outcomes; T2D protective in men at OR 0.86)
- [[molecules/compounds/testosterone]] — compound page; integrate MR evidence here via propagation
- [[phenotypes/andropause]] — male testosterone decline with aging
- [[hallmarks/altered-intercellular-communication]] — systemic endocrine signaling hallmark
- [[hallmarks/deregulated-nutrient-sensing]] — T2D and metabolic context
- [[tissues/prostate]] — prostate cancer risk

## Footnotes

[^mohammadi2020]: [[studies/mohammadi-shemirani-2020-testosterone-mr-elife]] · n=161,268 UK Biobank males · mendelian-randomization · 93 SHBG-filtered SNP instruments · 461 outcomes screened (22 a priori + 439 phenome-wide; Bonferroni correction throughout) · model: human (UK Biobank; white British ancestry; males only) · all effects per 0.1 nmol/L higher CFT · adverse: prostate cancer OR 1.51 (1.21–1.88; p=2.1×10⁻⁴), alopecia OR 1.49 (1.19–1.86), hypertension OR 1.17 (1.08–1.26), spinal stenosis OR 2.03 (1.51–2.75), HDL −0.074 SD, hematocrit +1.37% · beneficial: BMD +0.40 SD (0.25–0.54), fat-free mass +1.91%, body fat −1.88%, CRP −0.085 SD · null: T2D OR 1.02 (0.81–1.28; p=0.87), heart failure OR 1.01, stroke OR 1.18, dementia OR 1.26, VTE OR 1.02 · no CV or cognitive benefit · full text verified 2026-06-04 (PMC7591257)
