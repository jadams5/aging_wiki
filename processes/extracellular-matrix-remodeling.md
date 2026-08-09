---
type: process
aliases: [ECM remodeling, matrix remodeling, extracellular-matrix turnover, tissue-matrix remodeling]
key-proteins: ["[[col1a1]]", "[[col3a1]]", "[[mmp-9]]", "[[sparc]]", "[[lox]]"]
pathways: ["[[tgf-beta]]", "[[il-11-signaling]]", "[[ras-mapk]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: 2
caused-by: ["[[tgf-beta]]", "[[il-11-signaling]]"]
causes: ["[[loss-of-proteostasis]]", "[[altered-intercellular-communication]]"]
literature-checked-through: 2026-08-09
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "TGF-beta–IL-11–ERK fibroblast mechanism checked against verified Schafer 2017 and Wu 2026 full-source extractions; ovarian collagen/hyaluronan mechanics and human-versus-mouse boundaries checked against verified Amargant 2020 and Wu 2026. Date-filtered PubMed and Europe PMC searches through 2026-08-09 were reviewed for newer ovarian-mechanics work. The page distinguishes direct matrix evidence from untested AGE/LOX and YAP/TAZ mechanisms."
---

# Extracellular-matrix remodeling

Extracellular-matrix (ECM) remodeling is the regulated synthesis, crosslinking, organization and degradation of collagens, elastin, fibronectin, proteoglycans and associated matrix proteins. It is necessary for development, ovulation, wound repair and mechanical homeostasis. Chronic imbalance toward deposition and contraction produces fibrosis and tissue stiffening; excess degradation produces structural failure.

## Core control logic

- In primary human cardiac fibroblasts, TGF-β1 increased *IL11* RNA 8.5-fold across 84 donors. Species-matched IL-11 drove largely post-transcriptional, ERK-dependent matrix protein production, while IL-11/IL11RA perturbation reduced fibroblast activation [^schafer2017]. This established an autocrine TGF-β–IL-11–ERK relay in cardiac and renal fibroblast systems, not a universal mechanism in every tissue.
- Wu et al. extended that relay to primary human ovarian fibroblasts: TGF-β1 induced IL-11, recombinant IL-11 induced ACTA2, collagen and migration, and IL-11 neutralization or ERK inhibition attenuated selected culture outputs [^wu2026]. The complete pathway was assembled across human tissue, cultured cells and rodents rather than causally tested end-to-end in people.
- Cell-driven collagen deposition, lysyl-oxidase-mediated crosslinking, nonenzymatic [[advanced-glycation-end-products|AGE]] crosslinking and hyaluronan abundance are mechanistically distinct levers on matrix mechanics. The cited ovarian studies directly tested collagen and hyaluronan or IL-11-dependent collagen deposition; they did not test AGE cleavage, LOX inhibition or YAP/TAZ mediation.

## Aging interpretation

“Aging ECM” should not be treated as synonymous with either fibrosis or stiffness. In the ovary, Amargant et al. supplied the direct causal mechanical anchor in mice: old CB6F1 ovaries had a Young's modulus of 4.56±2.03 versus 1.79±0.08 kPa in young ovaries (mean±SEM; n=8 ovaries/cohort); ex-vivo collagenase lowered old-ovary stiffness from 4.36±1.24 to 2.28±0.61 kPa in small groups (young control n=2, old control n=4, treated old n=4); and catalytically inactive *Has3* ovaries were 6.67±2.00 versus 2.51±0.66 kPa in wild type (n=5/group) [^amargant2020]. These experiments distinguish collagen accumulation from hyaluronan loss as two contributors to mouse ovarian mechanics.

The human arm of Amargant et al. was narrower: hyaluronan staining declined with age, but collagen was non-monotonic because the 0–10-year cohort was comparable to the oldest cohort; no human mechanics were measured. Wu et al. later measured human cortical stiffness directly by atomic-force microscopy and found cross-sectional increases with age and ovarian pathology, together with collagen-I-rich matrix; collagen-III-rich fibers were largely unchanged [^wu2026]. Those surgical-tissue data are human evidence for association, not longitudinal remodeling or therapeutic causality.

## Ovarian example

Primary human [[ovarian-stromal-fibroblasts]] supported a TGF-β1 → IL-11 → ERK → collagen mechanism, and experimentally stiff alginate or polyacrylamide matrices impaired mouse follicle or granulosa-cell function. The artificial-matrix experiments establish a stiffness effect but do not show that fibroblasts were necessary. Genetic or adult RNA perturbation of IL-11 signaling reduced matrix stiffness and improved selected follicle, ovulation or litter outcomes in rodents [^wu2026]. Adult-siRNA pregnancy counts favored treatment but were nonsignificant when recalculated from the source counts, contrary to the printed P values. Human causality and therapeutic efficacy remain untested.

This cellular collagen-deposition program should not be conflated with GlycoSENS-style nonenzymatic crosslinks. Both may affect mechanics, but Wu et al. intervened on fibroblast signaling and collagen accumulation rather than directly cleaving AGE crosslinks.

The aging-context `druggability-tier: 2` reflects research-grade antibody, genetic and RNA probes for this remodeling axis. Phase 2 IL-11 antibodies in non-aging fibrotic indications do not establish a clinical aging intervention.

## Gaps

- Neither Amargant et al. nor Wu et al. measured longitudinal matrix turnover in the same people.
- Cross-study stiffness values are not interchangeable: Amargant et al. indented intact fresh mouse ovaries, whereas Wu et al. indented 30-µm fresh-frozen human cortical sections.
- Softening established fibrosis may not restore cells or follicles already lost.
- A clinical study must test normal repair and tissue selectivity rather than infer them from antifibrotic efficacy. #gap/needs-human-replication #gap/dose-response-unclear #gap/long-term-unknown

## Footnotes

[^schafer2017]: [[studies/schafer-2017-il11-cardiovascular-fibrosis]] · doi:10.1038/nature24676 · Schafer S et al. · *Nature* 2017;552:110–115 · foundational TGF-β–IL-11 fibroblast evidence
[^amargant2020]: [[studies/amargant-2020-ovarian-stiffness]] · doi:10.1111/acel.13259 · Amargant F et al. · *Aging Cell* 2020;19:e13259 · mouse ovarian indentation and matrix perturbation plus cross-sectional human histology
[^wu2026]: [[studies/wu-2026-il11-ovarian-stiffness]] · doi:10.1038/s43587-026-01159-2 · Wu M et al. · *Nature Aging* 2026;6:1395–1416 · human ovarian mechanics, primary fibroblasts, culture systems and rodent interventions
