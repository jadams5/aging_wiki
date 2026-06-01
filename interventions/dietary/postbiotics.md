---
type: intervention
aliases: [postbiotic, tyndallized probiotic, heat-killed probiotic, paraprobiotics]
mode: dietary
mechanisms: [gut-microbiome-modulation, anti-inflammatory]
targets: []
target-hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
target-pathways: ["[[lps-tlr4-nfkb]]", "[[scfa-signaling]]"]
human-evidence-level: limited
clinical-stage: implemented
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "Placebo-controlled 6-month RCT of pasteurized Akkermansia muciniphila (10^10 cells/day) in adults ≥70 yr with frailty or sarcopenia phenotype, using gut-barrier (zonulin/LPS), inflammatory (hsCRP, IL-6), and lean-mass endpoints."
clinical-trials-active: 3
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "All four primary sources verified against full PDFs: Salminen 2021 (ISAPP definition wording and boundary table confirmed accurate); Depommier 2019 (mean age corrected ~47→~51 yr; insulin sensitivity measurement corrected hyperinsulinaemic-clamp→HOMA; LPS ~35% figure removed — specific percentage not stated in source); Kang 2024 (mean age 65.03±3.83 yr added; primary endpoint p-values and follistatin p=0.0063 confirmed); Arai 2018 (mouse strain corrected C57BL/6→BALB/c). Clinical-trials count (3) and NCT numbers not independently re-verified against ClinicalTrials.gov API for this pass."
---

# Postbiotics

An intervention class defined by the ISAPP (International Scientific Association of Probiotics and Prebiotics) 2021 consensus as a **"preparation of inanimate microorganisms and/or their components that confers a health benefit on the host"** [^salminen2021]. The key distinction from [[probiotics]] is that the microorganisms must be non-viable (heat-killed, sonicated, or otherwise inactivated). The class covers whole-cell preparations, disrupted cells, fermentation supernatants, and isolated cell-wall fragments — provided the preparation (not an isolated purified molecule) is the active agent.

Postbiotics are gaining traction as an aging-relevant intervention category for three practical reasons: safety (no live-cell bacteremia risk), stability (shelf-stable, no cold chain), and regulatory predictability (defined-composition batch chemistry). The strongest proof-of-concept human evidence is pasteurized [[akkermansia-muciniphila]], which retains metabolic benefits over live cells [^depommier2019].

## ISAPP 2021 canonical definition — what is and is not a postbiotic

The ISAPP 2021 consensus statement (Salminen et al. *Nat Rev Gastroenterol Hepatol* 2021) is the authoritative regulatory and scientific reference [^salminen2021]. Key boundary conditions:

| Included | Excluded |
|---|---|
| Heat-inactivated whole-cell preparations | Live probiotic bacteria |
| Tyndallized (repeated steam sterilization) preparations | Purified isolated metabolites (e.g., butyrate alone, isolated SCFA) |
| Sonicated / disrupted cell fragments | Isolated proteins / peptides from fermentation |
| Fermentation supernatants (matrix of metabolites + cell-wall fragments + secreted molecules as an intact mixture) | Prebiotics (substrates that feed live microorganisms) |
| Isolated cell-wall components (peptidoglycan, lipoteichoic acid, exopolysaccharides) | |

**Practical implication:** butyrate supplements (sodium butyrate, tributyrin) are **not** postbiotics per strict ISAPP 2021 — they are isolated metabolites and would be classified as compounds. Many commercial products labelled "postbiotic" violate this definition. The wiki treats [[scfa-signaling]]-relevant metabolites (butyrate, propionate, acetate) separately. For the aging context, the isolation question matters because the full fermentation matrix may deliver immunomodulatory cell-wall components (peptidoglycan → TLR2; LTA → TLR2) alongside metabolites, with different receptor pharmacology than the isolated metabolite.

## Postbiotic types per ISAPP 2021

**1. Heat-inactivated / pasteurized whole-cell preparations**

The most studied form. Examples: pasteurized *Akkermansia muciniphila* (Depommier 2019), heat-killed *Lacticaseibacillus paracasei* MCC1849, tyndallized lactic acid bacteria. Heat inactivation preserves surface-antigen integrity (Amuc_1100 outer-membrane protein on *A. muciniphila*), enabling pattern-recognition-receptor engagement without viable-cell risks.

**2. Sonicated / mechanically disrupted cells**

Sonication fragments the cell body; the suspension contains cytoplasmic contents + cell-wall debris. Used in research settings; fewer commercial products. Amuc_1100 was originally studied as a purified protein from *A. muciniphila* before the whole-pasteurized-cell preparation was characterised.

**3. Fermentation supernatants**

The conditioned medium from probiotic fermentation. Contains secreted metabolites, bacteriocins, exopolysaccharides, and shed cell-wall fragments. Difficult to standardise across batches (metabolite profile depends on fermentation conditions). Regulatory status is complex.

**4. Cell-wall components**

Purified peptidoglycan (muramyl dipeptide → NOD2 ligand), lipoteichoic acid (TLR2 ligand), and exopolysaccharides. These are on the boundary between postbiotics and bioactive compounds per ISAPP 2021 — inclusion depends on whether they are presented as isolated purified molecules or as components of a defined preparation.

## Why postbiotics for aging

### Safety advantage over live probiotics

Healthy elderly individuals and especially those who are immunocompromised, frail, sarcopenic, or hospitalised carry non-trivial bacteremia risk from probiotic supplementation. Case reports of *Lactobacillus*- and *Bifidobacterium*-related sepsis in immunosuppressed patients are documented in the clinical literature. Heat-killed preparations cannot cause colonisation or translocate systemically as viable organisms. This advantage is particularly relevant for aged populations where the trial populations of greatest interest (frailest, multi-morbid elderly) are most likely to be immunocompromised. #gap/needs-human-replication — the quantitative comparative risk between live-probiotic and postbiotic bacteremia in elderly is not established in prospective trials.

### Stability advantage

Live probiotic viability declines with time, temperature, and manufacturing stress. Colony-forming unit (CFU) counts on label frequently overstate viable cell delivery at the point of consumption. Postbiotics — being inactivated — carry no viability concern; the defined composition is stable at room temperature, enabling standard supply chains and long shelf lives. For trial design, this enables controlled-dose delivery impossible with live probiotics.

### Standardisation advantage

Defined batch composition (cell count, inactivation method, QC markers) enables cleaner regulatory filing and more reproducible clinical trial conditions. This matters for the translation pathway: a postbiotic can in principle go through a conventional IND/NDA pathway rather than requiring the complex manufacturing-compliance standards of live biologic drug products.

## Mechanism of action in the aging context

Postbiotics engage the host immune system via **pattern-recognition receptors (PRRs)** that detect conserved microbial structures:

| Receptor | Ligand (postbiotic source) | Downstream effect |
|---|---|---|
| TLR2 | Peptidoglycan, lipoteichoic acid (Gram-positive cell wall) | NF-κB activation → tolerogenic cytokine rebalancing (context-dependent; primarily anti-inflammatory at low-level tonic stimulation) |
| TLR4 | LPS (Gram-negative outer membrane; present at low level in inactivated preparations) | NF-κB → IL-6, IL-1β, TNFα (generally pro-inflammatory; risk at high LPS concentration) |
| NOD2 | Muramyl dipeptide (peptidoglycan fragment) | RIPK2 → NF-κB; homeostatic gut-immune training |
| Specific receptor (Amuc_1100) | *A. muciniphila* outer membrane protein | TLR2/TLR4 co-activation → improved gut barrier integrity, metabolic signalling |

**Gut barrier improvement** is a central proposed mechanism for postbiotic aging-relevance: age-associated increase in gut permeability (see [[gut-barrier]]) allows LPS translocation → systemic [[chronic-inflammation]]. Postbiotics that strengthen tight-junction integrity (via improved mucus layer coverage, TLR-mediated barrier gene upregulation) could reduce this LPS leak. The Depommier 2019 pasteurized *A. muciniphila* data showed reduced intestinal permeability (serum LPS significantly decreased vs baseline and vs placebo, though no specific percentage was stated in the paper) alongside metabolic improvements [^depommier2019], though the trial was small and not in elderly subjects specifically.

**SCFA-bypass mechanism** is distinct from ISAPP-compliant postbiotics: whole-cell preparations deliver cell-wall immunomodulatory signals plus a matrix of metabolites, not the isolated SCFA-receptor-engagement that butyrate supplements target. See [[scfa-signaling]] for the receptor pharmacology of free SCFAs.

## Aging-specific evidence

### Pasteurized *Akkermansia muciniphila* — Depommier 2019

The strongest proof-of-concept that a non-viable postbiotic retains or exceeds the efficacy of the live equivalent [^depommier2019]. Three-arm pilot RCT in overweight and insulin-resistant adults (mean age ~51 yr across groups: placebo 49.5±9.7, pasteurized 52.8±7.2, live 52.9±8.6 yr; not elderly per se): (1) placebo, (2) live *A. muciniphila* 10^10 cells/day, (3) pasteurized *A. muciniphila* 10^10 cells/day. n=32 completers across 3 months.

| Outcome | Pasteurized A.m. vs placebo | Statistical note |
|---|---|---|
| Insulin sensitivity (HOMA) | Improved (+28.62±7.02%, p=0.002 vs baseline) | Statistically significant vs baseline; not formally powered for group comparison |
| Serum LPS (intestinal permeability proxy) | Significantly reduced vs baseline and vs placebo | Exploratory endpoint; no specific percentage stated in source |
| Body weight | Modest reduction (~2.3 kg) | Exploratory |
| Blood cholesterol | Improved total and HDL ratios | Exploratory |
| Safety | No adverse events attributable to supplementation | Consistent across live and pasteurized arms |

Critically: the **pasteurized form showed numerically comparable or better improvements** than the live-cell arm across most endpoints — the first direct human evidence that the non-viable form retains efficacy. #gap/needs-replication — n=32 completers, short duration, not elderly cohort; warrants replication in older / frail populations. The wiki's [[akkermansia-muciniphila]] page covers the microbe; the compound-level pasteurized preparation awaits a dedicated `[[akkermansia-supplementation]]` page.

### Pasteurized *A. muciniphila* HB05 — Kang 2024 (sarcopenia-relevant)

12-week double-blind RCT in 100 elderly Korean adults (mean age 65.03±3.83 yr; entry criterion: SARC-CalF score <11, aged ≥60) [^kang2024]. Pasteurized *A. muciniphila* HB05 at 10^10 cells/day vs placebo. Primary finding: significantly improved peak torque (left leg extensor, p<0.05) and peak torque per body weight. Follistatin (myostatin antagonist) elevated. No safety concerns. #gap/needs-replication — single RCT; muscle endpoint is a secondary surrogate. Result is notable because it suggests postbiotics targeting [[dysbiosis]] may have downstream relevance to [[sarcopenia]] via the gut-muscle axis.

### Heat-killed *Lacticaseibacillus paracasei* MCC1849 — Arai 2018 (mouse IgA; human relevant?)

Mouse study demonstrating orally administered heat-killed *L. paracasei* MCC1849 enhances antigen-specific IgA secretion and induces follicular helper T cells [^arai2018]. Provides mechanistic plausibility for immunological postbiotic effects. Human relevance: Sato 2023 Nutrients RCT (n not specified in searched results) reported heat-killed MCC1849 maintained physical condition in healthy adults (not elderly-specific). #gap/needs-human-replication in elderly populations.

### Recent 2023–2026 recency search findings

PubMed search (postbiotic AND (elderly OR aging OR older) AND (randomized OR RCT), 2022–2026) returned 15 hits; high-priority results:

- **Kim 2026 (Nutrients)** — Heat-killed *Lactobacillus acidophilus* IDCC 3302 in adults; no placebo-adjusted benefit for primary wrinkle endpoints; exploratory skin elasticity signal. Not elderly-specific. Not informative for core aging mechanism.
- **Lee 2026 (J Microbiol Biotechnol)** — Tyndallized *Clostridium butyricum* postbiotic in knee osteoarthritis older adults; no significant clinical efficacy vs placebo despite safety. #gap/contradictory-evidence for anti-inflammatory postbiotic claims in musculoskeletal endpoints.
- **Lee 2025 (Nutrients)** — Heat-treated *Limosilactobacillus fermentum* PS150 improved sleep quality in insomnia; not aging-specific. Illustrative of the range of postbiotic physiological targets.

Overall recency assessment: the postbiotic-elderly RCT literature is nascent (2023–2026). Depommier 2019 and Kang 2024 remain the highest-quality aging-relevant RCTs as of May 2026.

## Distinction from related interventions

| Intervention | Relationship to postbiotics |
|---|---|
| [[probiotics]] | Live microorganisms; postbiotics are explicitly inactivated versions |
| [[prebiotics]] | Substrates that feed live gut microbes; not microbial-origin products |
| [[scfa-signaling]] / butyrate supplements | Isolated metabolites; **not postbiotics per ISAPP 2021 strict definition** (colloquial misuse is common) |
| [[fmt]] | Live-microbe-based ecosystem transplant; not a postbiotic |
| [[akkermansia-supplementation]] | A specific postbiotic (pasteurized whole-cell *A. muciniphila*); see dedicated compound page when seeded |

Many commercial products labelled "postbiotic" contain isolated butyrate, purified LPS, or defined proteins — these are compounds, not postbiotics in the ISAPP sense. This definitional looseness undermines evidence aggregation across commercial trials. Wiki convention follows strict ISAPP 2021.

## Active clinical trials

As of 2026-05-07, ClinicalTrials.gov shows 3 active trials matching postbiotic + aging:

| Trial | NCT | Intervention | Status | Primary outcome |
|---|---|---|---|---|
| AnexLB | NCT07110896 | Humiome® Post LB (heat-inactivated bacteria + fermentation medium), 340 mg/day | Recruiting | Cognitive function, stress |
| PostWelLB | NCT07471659 | Humiome® Post LB, 340 mg/day | Recruiting | Cognitive + stress outcomes |
| CLARITY | NCT07060898 | Urolithin A (Mitopure) — note: urolithin A is a gut-metabolite-derived compound, borderline ISAPP compliance | Active, not recruiting | Primary completion Nov 2025 |

Note: Urolithin A in CLARITY is a purified isolated metabolite, placing it on the ISAPP 2021 boundary. Its wiki page [[urolithin-a]] treats it as a compound rather than a postbiotic per the strict definition.

## Evidence quality summary

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | Yes — TLR2/NOD2 receptors + gut barrier biology are fully conserved |
| Phenotype conserved in humans? | Partial — metabolic effects in Depommier 2019; muscle effects in Kang 2024; full aging-hallmark modulation untested in human elderly |
| Replicated in humans? | Partial — two RCTs (Depommier 2019, Kang 2024) with positive signals; null results in musculoskeletal endpoint (Lee 2026 osteoarthritis) |

## Limitations and gaps

- **Small-n human trials.** The best postbiotic-aging RCTs (Depommier 2019: n=32 completers; Kang 2024: n=100) are substantially underpowered for hard endpoints. #gap/needs-replication
- **Not elderly-specific (Depommier 2019).** Mean age ~51 yr (groups ~49–53 yr) in the largest metabolic RCT; translation to ≥70 yr frail populations is undemonstrated. #gap/needs-human-replication
- **Mechanism imprecision.** It is unclear which component of the pasteurized preparation (Amuc_1100 protein, peptidoglycan, LTA, secreted metabolites) drives the observed efficacy. Mechanism is inferred, not experimentally deconstructed in the clinical context. #gap/no-mechanism
- **Heterogeneous class.** The ISAPP definition encompasses very different preparations (pasteurized whole cells vs isolated cell-wall fragments vs fermentation supernatants). These likely have distinct receptor pharmacologies and cannot be treated as interchangeable in efficacy claims.
- **Label discipline is loose.** Most commercial products labelled "postbiotic" do not conform to ISAPP 2021. This makes observational and survey evidence unreliable without ingredient verification.
- **Gut-muscle and gut-brain axes.** The Kang 2024 sarcopenia signal and sleep-improvement trials suggest postbiotic effects may extend beyond gut-local outcomes, but these cross-tissue effects have minimal mechanistic human characterisation. #gap/no-mechanism #gap/long-term-unknown
- **Long-term safety in elderly.** No long-term safety data exist for chronic postbiotic use in frail or immunocompromised aged subjects. #gap/long-term-unknown

## Footnotes

[^salminen2021]: doi:10.1038/s41575-021-00440-6 · Salminen S et al. · *Nat Rev Gastroenterol Hepatol* · 2021 · n=N/A · review (consensus statement) · ISAPP expert panel; 1841 citations as of 2026-05 (citation percentile: top 0.01%) · defines the canonical postbiotic class

[^depommier2019]: [[studies/depommier-2019-pasteurized-akkermansia]] · doi:10.1038/s41591-019-0495-2 · n=32 completers across 3 arms (placebo n=11, pasteurized n=12, live n=9) · rct · model: overweight insulin-resistant humans (mean age ~51 yr across groups) · local PDF available · first human RCT showing pasteurized A. muciniphila retains metabolic efficacy vs live bacteria; insulin sensitivity by HOMA

[^kang2024]: doi:10.3390/nu16234037 · Kang CH et al. · *Nutrients* · 2024 · n=100 · rct · model: elderly adults with reduced muscle function · pasteurized A. muciniphila HB05 at 10^10 cells/day × 12 weeks; improved peak torque and follistatin levels · gold OA

[^arai2018]: doi:10.1371/journal.pone.0199018 · Arai S et al. · *PLoS ONE* · 2018 · n=~16/group (mouse) · in-vivo · model: BALB/c mice (7 wk old, male SPF) · heat-killed L. paracasei MCC1849 → IgA induction + follicular helper T cell expansion · gold OA; 87 citations
