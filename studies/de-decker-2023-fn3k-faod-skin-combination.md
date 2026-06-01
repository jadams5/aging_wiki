---
type: study
doi: 10.3390/ijms24108981
pmid: 37240327
pmc: PMC10219073
title: "Enzymatic Deglycation of Damaged Skin by Means of Combined Treatment of Fructosamine-3-Kinase and Fructosyl-Amino Acid Oxidase"
authors: [De Decker I, Notebaert M, Speeckaert MM, Claes KEY, Blondeel P, Van Aken E, Van Dorpe J, De Somer F, Heintz M, Monstrey S, Delanghe JR]
year: 2023
journal: International Journal of Molecular Sciences
volume: 24
issue: 10
pages: "8981"
study-design: in-vitro
publication-type: research-article
organism: homo-sapiens
n-subjects: 19
intervention: ["[[fn3k]]", "[[microbial-amadori-deglycation]]"]
hallmarks-tested: []
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [combination-enzyme-synergy, fn3k-faod-43pct-age-reduction, hypertrophic-scar-elasticity-improvement, aminoguanidine-outperformed]
local-pdf: null
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Full PDF verified (doi:10.3390/ijms24108981). Critical correction: glycating agent is glycolaldehyde dimer (the paper's text and methods use 'glycolaldehyde (GA)' throughout; 'glyceraldehyde dimer' was a seeder error — glycolaldehyde is 2-carbon C₂H₄O₂, glyceraldehyde is 3-carbon C₃H₆O₃). n=19 confirmed (female patients, mean age 26.05±9.02 years, gender-affirming subcutaneous mastectomy). AF reduction percentages confirmed from Results §2.1: FN3K 31%, FAOD 33%, FN3K+FAOD 43%, aminoguanidine 28%, PBS ~0%. Statistical significance confirmed from Figure 1: FN3K/FAOD/combination arms p<0.0001 (****); aminoguanidine p<0.001 (***); PBS ns. AF wavelengths confirmed from §4.6: excitation 370 nm, emission 390–700 nm (broadband composite, not pentosidine-specific). Elasticity values confirmed: 3.205±0.0733 mm → 3.622±0.114 mm, ~13% improvement, p≤0.001, n=1 scar (paired t-test). No LC-MS for specific AGE species — only bulk AF on healthy skin + MIR spectroscopy on scar. No specific AGE species identified. Statistical test: paired t-tests after Shapiro-Wilk normality confirmation."
literature-checked-through: 2026-05-20
---


# Enzymatic Deglycation of Damaged Skin by Means of Combined Treatment of FN3K and FAOD (De Decker 2023)

## TL;DR

De Decker et al. (2023) demonstrate that **combining the mammalian deglycating enzyme FN3K with the microbial amadoriase FAOD achieves ~43% autofluorescence reduction in glycolaldehyde dimer-damaged human skin specimens** — outperforming either enzyme alone (FN3K alone: 31%; FAOD alone: 33%) and exceeding the positive-control AGE inhibitor aminoguanidine (28%). This is the first published demonstration that combining a mammalian phosphorylative deglycation enzyme with a microbial oxidative deglycation enzyme produces synergistic or additive deglycation in a human-tissue context. The study also shows FN3K treatment improves mechanical elasticity in hypertrophic scar tissue. Both findings are ex-vivo (no live organisms treated); no in-vivo efficacy data are reported.

## Background

Non-enzymatic glycation of skin proteins by sugars — the Maillard reaction — is a hallmark of skin aging, producing advanced glycation end products (AGEs) that cross-link structural proteins such as collagen and elastin, impairing tissue mechanics and driving inflammation via RAGE signaling (see [[advanced-glycation-end-products]]). Two distinct enzymatic strategies for deglycation have been characterized:

- **[[fn3k]] (FN3K):** Mammalian ATP-dependent kinase; phosphorylates early-Maillard fructosamine (Amadori) products at C3, producing fructosamine-3-phosphate that spontaneously decomposes to restore the native lysine residue. Intracellular; releases 3-deoxyglucosone as a reactive by-product.
- **[[microbial-amadori-deglycation]] (FAOD/amadoriase):** Microbial FAD-dependent oxidase; oxidatively cleaves fructosyl-amino-acid bonds, releasing glucosone + H₂O₂. Extracellular-compatible; broader substrate access in matrix environments.

The two enzymes attack different substrate classes (FN3K: fructoselysine Amadori products; FAOD: α- and ε-glycated substrates, with Delanghe 2024 evidence for wider scope including CML and CEL) and operate via mechanistically distinct routes. This study asks whether the two can act complementarily on damaged skin.

## Study design

- **Model:** Ex-vivo human skin specimens from female patients (mean age 26.05 ± 9.02 years) undergoing subcutaneous mastectomies. n = 19 healthy breast skin specimens + 1 hypertrophic scar specimen.
- **Glycation induction:** Specimens incubated with **25 mM glycolaldehyde dimer–PBS solution** (crystalline form, Sigma-Aldrich; the compound is referred to as "glycolaldehyde (GA)" throughout the paper, though the commercial reagent is sold as glycolaldehyde dimer — the cyclic hydrate form that releases glycolaldehyde on dissolution) for 3 hours at 37°C to generate AGEs (primarily fluorescent species detectable by AF).
- **Treatment arms:** (1) FN3K monotherapy; (2) FAOD monotherapy; (3) FN3K + FAOD combination; (4) aminoguanidine (positive control, AGE inhibitor); (5) PBS (negative control).
- **Primary readout:** Autofluorescence (AF) measured at excitation 370 nm / emission 390–700 nm — a composite signal from multiple fluorescent AGE species (pentosidine, vesperlysine, crossline, and others). The AF readout does not distinguish individual AGE species.
- **Secondary readout (scar):** Mechanical elongation of hypertrophic scar tissue at standardized load (5 N) as a proxy for elasticity.

Note: glycolaldehyde is a two-carbon dialdehyde (C₂H₄O₂; distinct from glyceraldehyde, which is a three-carbon triose, C₃H₆O₃) that generates a high burden of AGEs rapidly at millimolar concentrations and is an established skin-glycation research tool. This is not a physiological glycation model (physiological AGEs form over years from glucose; this is an acute in-vitro induction over hours). Results describe deglycation potential but may overestimate therapeutic efficacy in chronically glycated in-vivo tissue.

## Findings

### Primary endpoint — autofluorescence reduction

| Treatment | Mean AF reduction | Statistics |
|---|---|---|
| FN3K monotherapy | 31% | p<0.0001 vs baseline (****) |
| FAOD monotherapy | 33% | p<0.0001 vs baseline (****) |
| FN3K + FAOD combination | **43%** | p<0.0001 vs baseline (****) |
| Aminoguanidine (positive control) | 28% | p<0.001 vs baseline (***) |
| PBS (negative control) | ~0% | ns |

Statistical test: paired t-tests (Shapiro-Wilk normality confirmed; GraphPad Prism v9; significance threshold p<0.05). The AF reduction percentages are **mean reductions** (all 19 specimens per arm) between the post-modification (glycated) baseline and post-treatment timepoint at 6 hours. The combination therapy outperformed both monotherapies and the positive control aminoguanidine [^dedecker2023]. The additive rather than antagonistic interaction suggests the two enzymes act on non-overlapping substrate pools within the skin tissue — consistent with their distinct mechanisms (phosphorylation vs. oxidation) and substrate specificities (FN3K: intracellular fructosyl-lysine substrates in residual cell fragments or superficial dermal layers; FAOD: extracellular-accessible glycated amino groups).

#gap/needs-replication — Single-laboratory, single-model study; n=19 from a narrow demographic (young female mastectomy patients). Independent replication with aged skin and physiologically glycated specimens is required.

### Secondary endpoint — hypertrophic scar elasticity

FN3K treatment of hypertrophic scar tissue increased elongation at 5 N loading force from 3.205 ± 0.0733 mm (untreated) to 3.622 ± 0.114 mm (treated) — approximately a 13% improvement in mechanical flexibility. This suggests that enzymatic reversal of AGE cross-links improves biomechanical properties of fibrotic, glycation-burdened tissue [^dedecker2023].

#gap/needs-replication — Single scar specimen; no statistical comparison was possible (n=1). Mechanistically interesting but not confirmatory.

## Mechanistic interpretation

The combination therapy's superiority is consistent with the two-tier Amadori-product landscape in skin:

- **FN3K substrate pool:** Intracellular fructosyl-lysine on residual keratinocyte and fibroblast proteins within the specimen; accessible to the kinase mechanism.
- **FAOD substrate pool:** Extracellular fructosyl-amino groups on collagen-associated peptides and surface glycated proteins; accessible to the secreted oxidase.

Since the two enzymes do not share identical substrate pools and do not compete for the same bond, combining them increases overall substrate coverage. This is the **combination-therapy precedent** for the AGE-clearance pharmacology landscape — the first evidence that mammalian + microbial deglycating enzymes can act synergistically in human tissue.

A critical caveat: both FN3K and FAOD generate reactive by-products (3-deoxyglucosone and H₂O₂, respectively) that require downstream detoxification. Whether co-application produces additive by-product burdens with in-vivo cytotoxicity was not assessed in this ex-vivo model. See [[fn3k]] § "Critical trade-off" and [[microbial-amadori-deglycation]] § "Therapeutic limitations."

## Extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FN3K and FAOD are well-characterized; Maillard chemistry is conserved in human skin |
| Phenotype (AF reduction) conserved in humans? | partial — autofluorescence is a validated surrogate for AGE burden, but the glycolaldehyde dimer model differs from physiological Maillard progression; the study used human tissue but not in-vivo or aged tissue |
| Replicated in humans? | no — ex-vivo model only; no live-patient intervention |

## Limitations

- **Acute glycolaldehyde dimer model, not chronic physiological glycation.** 25 mM glycolaldehyde dimer over 3 hours generates an AGE burden that may not replicate the crosslink composition of naturally aged skin (which accumulates predominantly glucosepane and pentosidine over years under normoglycemic conditions).
- **Young skin specimens** (mean age 26 ± 9 years). Natural skin AGE accumulation occurs primarily in aged dermis; the treatment target clinically would be 60–80-year-old tissue with different collagen crosslink density and composition.
- **Autofluorescence is a composite readout.** AF at 370/390–700 nm measures multiple fluorescent AGEs simultaneously; it does not confirm which specific AGE species were reduced.
- **n=19 healthy specimens + n=1 scar.** The scar finding is mechanistically suggestive but statistically uninformative.
- **By-product cytotoxicity not assessed.** FN3K releases 3-DG; FAOD releases H₂O₂. In ex-vivo tissue without live cellular metabolism, these by-products are not cleared; their accumulation and potential for tissue damage was not measured.
- **No pharmacokinetic or delivery data.** How FN3K and FAOD would be delivered to the dermis in a therapeutic context (topical, injection, etc.) is not addressed.

#gap/long-term-unknown — Effects of combination enzyme therapy on chronically glycated aged tissue in vivo remain untested.
#gap/needs-replication — Single laboratory; independent replication required.

## See also

- [[fn3k]] — the mammalian partner enzyme; mechanism, substrate scope, and therapeutic context
- [[microbial-amadori-deglycation]] — the FAOD partner enzyme; mechanism, substrate scope, and therapeutic context
- [[advanced-glycation-end-products]] — upstream process; AGE formation in skin aging
- [[processes/glucosepane]] — principal mature ECM crosslink; NOT cleaved by either enzyme
- [[age-crosslink-breakers]] — broader intervention class

## Footnotes

[^dedecker2023]: [[studies/de-decker-2023-fn3k-faod-skin-combination]] · n=19 skin specimens (healthy breast skin; mean age 26 ± 9 years) + n=1 hypertrophic scar · in-vitro (ex-vivo human tissue; glycolaldehyde dimer-induced glycation model; 25 mM glycolaldehyde dimer–PBS, 3 h, 37°C) · model: human breast skin specimens post-glycolaldehyde-dimer incubation · FN3K alone −31% AF; FAOD alone −33% AF; FN3K+FAOD −43% AF; aminoguanidine −28% AF; PBS ~0% (all three enzymatic arms p<0.0001 vs baseline; aminoguanidine p<0.001 vs baseline; PBS ns) · AF: excitation 370 nm / emission 390–700 nm (broadband, not pentosidine-specific) · elasticity: 3.205±0.0733 mm → 3.622±0.114 mm (+13%; p≤0.001 paired t-test) · full PDF verified 2026-05-20 (doi:10.3390/ijms24108981)
