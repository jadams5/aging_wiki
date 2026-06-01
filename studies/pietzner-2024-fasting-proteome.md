---
type: study
doi: 10.1038/s42255-024-01008-9
pmid: 38429390
pmc: PMC7617311
title: "Systemic proteome adaptions to 7-day complete caloric restriction in humans"
authors: [Pietzner M, Uluvar B, Kolnes KJ, Jeppesen PB, Frivold SV, Skattebo Ø, Johansen EI, Skålhegg BS, Wojtaszewski JFP, Kolnes AJ, Yeo GSH, O'Rahilly S, Jensen J, Langenberg C]
year: 2024
journal: Nature Metabolism
volume: 6
issue: 4
pages: 764-777
study-design: in-vivo
publication-type: research-article
organism: homo-sapiens
n-subjects: 12
intervention: ["[[prolonged-fasting]]"]
hallmarks-tested: ["[[loss-of-proteostasis]]", "[[deregulated-nutrient-sensing]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [one-third-plasma-proteome-changes, systemic-response-only-after-3-days, ecm-remodeling-tenascin-R, fasting-distinct-from-weight-loss, proteogenomic-disease-map, swap70-rheumatoid-arthritis, hyou1-coronary-disease]
local-pdf: null
verified: true
verified-date: 2026-05-26
verified-by: claude
verified-scope: "Main text + Methods read end-to-end from local Europe PMC author-manuscript PDF (PMC7617311); all quantitative claims on this page (n, weight/body-composition deltas, protein counts, SD-unit changes, p-values, pQTL betas, odds ratios, posterior probabilities) transcribed directly from the manuscript. Supplementary tables/figures (per-protein cluster assignments, full ~500-outcome proteogenomic catalog) not independently re-derived. Note: Europe PMC author-manuscript carries the working title 'Systemic Adaptions to Extreme Caloric Restrictions of Different Durations in Humans'; the published Nat Metab title used here."
---

# Systemic proteome adaptions to 7-day complete caloric restriction in humans

**Pietzner M, Uluvar B, … O'Rahilly S, Jensen J, Langenberg C · *Nature Metabolism* 6(4):764–777 · 2024 · DOI: 10.1038/s42255-024-01008-9**

The first in-depth temporal map of the human plasma proteome across a **7-day water-only fast**, combining broad-capture proteomics with proteogenomic (pQTL → disease) integration. The headline conceptual advances: (1) the systemic, multi-organ response **does not begin until after ~3 days** of complete fasting — far longer than any commonly practiced intermittent-fasting window; (2) the fasting proteome signature is **largely independent of weight loss**; and (3) it is dominated by **non-metabolic, extracellular-matrix (ECM) remodeling** rather than a purely energy-centric switch. See [[prolonged-fasting]] for the intervention-level synthesis.

## Design

- **n = 12** apparently healthy, non-smoking adults (5 women, 7 men); mainly (all but one) white-European ancestry. Exclusion: any known disease, body fat <15% (F) / <12% (M).
- **Intervention:** stringent 7-day fast, **absolute caloric restriction with *ad libitum* water only**.
- **Sampling:** morning (6–9 am) fasting blood drawn 2 days before, **daily during** the 7-day fast, and for 3 days after resuming *ad libitum* food intake. DXA at days −4/−1 (baseline mean), day 7, and day 10.
- **Proteomics:** 2,923 protein targets via 2,941 assays across 117 samples on the **Olink Explore 3072** platform (proximity extension assay, NPX/log2 units). ~80% (n=2,334) of targets had >75% of values above the limit of detection. All NPX values scaled to pre-fasting mean/SD, so changes read in **standard-deviation (SD) units**.
- **Statistics:** linear mixed models (timepoint = fixed effect, participant = random effect); Benjamini–Hochberg FDR at q<5%. Proteogenomic integration used external large-scale pQTL + GWAS data with colocalization (posterior probability, PP).

## Physiological response (clinical chemistry + body composition)

- Mean weight loss **5.7 kg (SEM ±0.8)** over 7 days (≈1.9 BMI units; baseline 77.5 kg, BMI 25.4); weight stayed **3.1 ± 0.6 kg below baseline** after 3 days of refeeding.
- Weight loss split between **lean mass (−3.6 ± 0.49 kg, p<5.5×10⁻¹²)** and **fat mass (−1.6 ± 1.3 kg, p<9.9×10⁻¹³)**. Subcutaneous fat fell (−0.21 ± 0.07 kg, p<5.1×10⁻⁸); **visceral fat did not** (−0.07 ± 0.09 kg, p=0.12); **no bone-mass loss** (0.008 ± 0.014 kg, p=0.42).
- **Lean-mass loss was almost completely reversed** (−0.69 ± 0.49 kg) within 3 days of refeeding, whereas **fat loss was sustained** (−1.85 ± 0.34 kg) — i.e., the acute lean-mass drop is largely a fluid/protein-pool phenomenon, not durable muscle catabolism.
- Expected glucose→lipid fuel switch within 2–3 days: plasma glucose fell, free fatty acids rose and plateaued, and **3-hydroxybutyrate rose continuously** throughout the fast (ketogenesis). Urinary nitrogen fell only **late** in the fast, consistent with increased renal urea reabsorption to spare protein.

## Core proteomic findings

- **1,044 targets (35.9%) changed significantly** (FDR q<5%) over the study; **144 changed by >2 SD** (22 up, 122 down).
- **The systemic response is delayed:** only **n=6** proteins were significant at 24 h and **n=54** at 48 h (p<4.7×10⁻⁵); the bulk of change appeared **only after 3 days**. The count of *decreasing* proteins grew exponentially after day 3; *increasing* proteins plateaued after day 3. **66 proteins remained significantly different** from pre-fasting levels 3 days after refeeding.
- Canonical feeding/fasting hormones behaved as expected or surprisingly muted: **leptin** fell sharply (max −2.39 SD at day 4, p<7.7×10⁻³⁴); **thyrotropin** fell (min −1.41 SD at day 2). **Ghrelin** (+0.28 SD, p=0.66), **adiponectin** (−0.46 SD at day 7, p=0.01), and **BDNF** (−0.47 SD, p=0.57) changed little.
- Largest movers (>4 SD), proposed as **novel markers of prolonged (≥3 day) fasting**: **follistatin (FST)** +5.62 SD at day 3 (p<3.2×10⁻⁴⁴); **[[pcsk9]]** 4.75 SD extreme at day 7 (p<4.1×10⁻⁴⁷); **NBL1** −5.20 SD at day 7 (p<8.4×10⁻¹⁵). Only **3 proteins** showed significant sex-differential effects. #gap/contradictory-evidence — **PCSK9 direction:** the manuscript's page-4 text labels PCSK9 a "4.75 s.d. units increase," but the **same paper assigns PCSK9 to the *declining* cluster 4** (below), and [[studies/commissati-2025-prolonged-fasting-inflammation|Commissati 2025]] independently found PCSK9 **decreased** (−1.49 fold) during a comparable fast with **"no discrepancies"** vs this study at the 7-day endpoint. Low-insulin/SREBP-2 biology also predicts a decrease. The "increase" wording appears to be a manuscript-internal error; **PCSK9 most likely decreases** during prolonged fasting (magnitude ~4.75 SD, extreme at day 7).
- **Pathway enrichment** among changed proteins: IGF signaling ([[insulin-igf1]]), cytokine signaling, lipoprotein metabolism, plus less-described changes in complement/coagulation, protein glycosylation, cell adhesion, and neutrophil degranulation.
- **Tissue origin (Human Protein Atlas):** changed proteins were enriched for those specifically expressed in **liver, pancreas, adipose tissue, and intestine** — a genuinely multi-organ response.

## Nine temporal trajectory clusters

NAvMix clustering of the 1,034 changing targets yielded **9 clusters** — 3 increasing, 6 decreasing — mapping distinct dynamics:
- **Increasing (clusters 1–3):** hunger signaling (agouti-related peptide), lipid regulators (LDL-receptor, ANGPTL4), IGF-binding proteins, protein-degradation enzymes (cathepsins B/L), transient complement activation (p<1.6×10⁻⁵), and exocrine-pancreas proteins persistently elevated even after refeeding (REG1B, REG3G).
- **Early-declining (cluster 4):** the glucose→lipid switch — PYY, PCSK9, lipoprotein lipase ([[lpl]]), APOA4, ECM organization (collagens, hyaluronidase-1), iron metabolism, plus strong sustained changes in EPHA1 (epithelial motility) and BPIFA2.
- **Late-declining (clusters 5–7):** changes **not appearing until day 2–3**, enriched for ECM-receptor interaction (p<1.1×10⁻⁸), elastic-fiber proteins (p<4.8×10⁻⁴), and vascular-wall cell-surface interaction — interpreted as **structural ECM degradation in the vasculature** plausibly contributing to lean-mass loss. Includes fetuin-B, chemerin (RARRES2), and bone-metabolism proteins (SFRP4, osteoglycin). Senescence marker GLB1 and angiogenesis proteins (AMOT, SPON1, THBS2) overshot baseline after refeeding.
- **Compensatory (cluster 8):** end-of-study exocrine-pancreas proteins (REG3A, elastases).
- **Stress response (cluster 9):** 'cellular response to stress' (PSME2) + nucleotide metabolism, returning to baseline by day 7 even before refeeding; intracellular origin suggests leakage from erythroid/blood cells adapting to fasting.

## Fasting is distinct from weight loss

Modeling proteome change against weight change vs against 3-hydroxybutyrate: weight and 3-OHB trajectories were only **weakly correlated (r = −0.20)**. Most proteins (**n=452**) associated with the **fasting** signal (3-OHB) rather than with weight change (**n=49**). This dissociates **prolonged fasting from short-term weight loss** — but the authors stress early (≤48 h) changes were subtle relative to the profound post-3-day changes, so the dissociation is driven by the late, duration-dependent response.

Two proteins tracked **weight** most tightly (declining with loss, rebounding with regain): **pulmonary surfactant protein D (SFTPD;** beta=0.08, p<7.0×10⁻¹⁷**)**, genetically linked to COVID-19 critical illness, and **IL-7 receptor (IL7R;** beta=0.12, p<9.3×10⁻¹³**)**, linked to autoimmune disease (multiple sclerosis, asthma) — candidate mediators of adiposity-associated disease risk.

## ECM remodeling and the ketone–neural-ECM link

The fasting signature was strongly enriched for **ECM proteins (p<3.6×10⁻⁷)**. The single most-associated protein was **tenascin-R**, a **brain-specific ECM protein** integral to perineuronal nets (beta=−0.73, p<2.4×10⁻³⁷). Rising plasma 3-hydroxybutyrate was strongly associated with **lower** plasma levels of brain-specific ECM members (brevican, vitrin) and neurotrophic factors (neurotrophin-4) — offering a candidate molecular path for the **centuries-old efficacy of ketogenic/fasting therapy in drug-resistant epilepsy**.

## Proteogenomic disease map

Linking the 1,044 fasting-responsive proteins to germline pQTLs and disease GWAS established **putatively causal links for 212 proteins across ~500 diseases/health measures**. Early-changing (<2-day) proteins showed little disease linkage except lipid genes (PCSK9, LPL, ANGPTL4); **late, ≥3-day-changing proteins carried the diverse disease associations.** For **652 of 1,044 predicted protein–disease links (52.2%), prolonged fasting moved the protein in a direction that *compensates* for genetically predicted adverse risk**; for the remainder, fasting moved proteins toward higher predicted risk.

Worked examples:
- **SWAP70 ↔ rheumatoid arthritis** (colocalization PP=99.1%): the rs4910499 A-allele (MAF 36.9%) raises plasma SWAP70 (beta=0.28, p<4.0×10⁻²⁷) **and** RA risk (OR 1.08, p<6.7×10⁻¹⁰). Fasting **lowered** SWAP70 (p<6.0×10⁻⁵, ~1.5 SD drop peaking day 6) — a candidate partial explanation for **RA symptom/pain relief reported during prolonged fasting**.
- **HYOU1 ↔ coronary artery disease** (PP=95.1%): the rs1177562 T-allele (MAF 40.3%) raises HYOU1 (beta=0.20, p<2.8×10⁻¹⁶) and CAD risk (OR 2.02 per SD genetically predicted HYOU1, 95% CI 1.54–2.64, p<3.0×10⁻⁷); also linked to higher adiposity/fat mass/liver enzymes and lower HDL. HYOU1 (an HSP70-family ER chaperone accumulating under hypoxia) **fell during fasting** — potential compensation for CAD risk; mechanism unestablished.
- **INHBC ↔ triglycerides:** rs61352607 G-allele (beta=0.65, p<3.4×10⁻¹³⁹) raises triglycerides (PP 96.0%); INHBC rose with triglycerides during fasting (beta=0.49, p<3.7×10⁻⁵). Liver-expressed; possible novel endocrine TG regulator.
- **Bone:** 7 proteins genetically linked to *higher* bone-mineral-density declined during fasting (TNFRSF11A, SFRP4, HIP1R, RGMA, PGF, GALNT3, ATXN3), but bone-*promoting* markers also declined (AXL, GDF15/GFRAL, ADAM12, ANGPTL7) — net effect ambiguous, and **total bone mass was unchanged** over the 7 days (p=0.42).
- **Adverse-direction example:** coagulation **factor XI** rose, aligning with its genetically predicted higher thrombotic-event risk — a putative harm signal during prolonged fasting.

## Limitations (authors' + extracted)

- **n=12, no control group, homogeneous (white-European, young, healthy)** — restricts generalizability; cachexia/severe-starvation states untested.
- Proteogenomic 'compensation' predictions are **exploratory**; the frequency/intensity of fasting needed to translate into clinical benefit is unknown, and the paper explicitly warns against reading fasting as a "sole solution" for the diseases discussed.
- Platform coverage is finite (no direct brain/tissue proteomics); diurnal rhythm in the response may be partly missed by once-daily sampling.

## Cross-references

- [[prolonged-fasting]] — intervention page anchored on this study
- [[studies/commissati-2025-prolonged-fasting-inflammation]] — independent ~10-day water-only fast (SOMAScan); replicates this signature with "no discrepancies," but adds the pro-inflammatory + platelet-activation findings and reconciles PCSK9 direction
- [[studies/dai-2024-21day-fasting-hypometabolism]] — 21-day fast; upper-duration physiology/hypometabolism anchor
- [[caloric-restriction]] — chronic moderate CR (CALERIE); contrast with complete multi-day fasting
- [[interventions/lifestyle/intermittent-fasting]] — IF (≤48 h); this study shows the systemic signature only emerges *past* the IF window
- [[loss-of-proteostasis]] · [[deregulated-nutrient-sensing]] — hallmarks engaged
- [[pcsk9]] · [[lpl]] · [[insulin-igf1]] — fasting-responsive lipid/IGF nodes with existing pages
- [[ketogenic-diet]] — shares the 3-hydroxybutyrate → neural-ECM axis proposed here
