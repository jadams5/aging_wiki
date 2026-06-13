---
type: study
doi: 10.1038/s41586-026-10738-7
pmid: null
pmc: null
title: "Targeting Cancer-Specific Mutations with RNA-Triggered Chromatin Shredding"
authors: [Zeng J, Cheng Z, Chen H, Wang, Thompson J, Crosby KT, Han H, Singhal, Ngo W, Xia C, Rosas-Rivera D, Zhang, Kang MH, Mao Y, Diolaiti, Lee G, Diffley JFX, Song Y, Qiu L, Krah NM, Murthy N, Jackson RN, Liu Y, Ashworth A, Doudna JA]
year: 2026
journal: Nature
volume: null
issue: null
pages: "advance online publication (8 June 2026)"
study-design: in-vivo
publication-type: research-article
organism: "human (cell lines) + mus-musculus (xenograft + GEMM)"
n-subjects: null
intervention: ["[[transcript-activated-cell-ablation]]"]
hallmarks-tested: []
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [transcript-activated-chromatin-shredding, cas12a2-trans-cleavage-kills-mammalian-cells, snv-selective-tp53-targeting, oncogene-abundance-threshold-killing, lnp-mrna-delivery-tumor-suppression]
local-pdf: null
verified: true
verified-date: 2026-06-13
verified-by: claude
verified-scope: "Verified against bioRxiv preprint full text (DOI 10.64898/2026.05.08.723607, CC-BY, posted 2026-05-09); all quantitative claims (transcript counts, Mg²⁺ range, co-culture ratios, CCNE1 doses, TP53 patient-sample percentages, n=16,708, delivery efficiency ~7–18%, tumour-model timing) confirmed against PDF text. The peer-reviewed Nature version (DOI 10.1038/s41586-026-10738-7) was not read (paywalled); minor editorial differences from preprint to final publication cannot be excluded."
---

# Zeng et al. 2026 — Transcript-activated chromatin shredding (CRISPR-Cas12a2)

***Nature***, advance online 8 June 2026. doi:[10.1038/s41586-026-10738-7](https://doi.org/10.1038/s41586-026-10738-7). Corresponding author **Jennifer A. Doudna** (Gladstone Institutes / Innovative Genomics Institute, UC Berkeley / HHMI). Open-access preprint: bioRxiv doi:10.64898/2026.05.08.723607.

**Access:** *Nature* version paywalled. This page was verified against the openly-licensed (CC-BY) bioRxiv preprint (DOI 10.64898/2026.05.08.723607) full text on 2026-06-13; all quantitative claims confirmed. Minor editorial differences between the preprint and the final *Nature* version cannot be excluded.

---

## What this paper is

A primary research paper introducing **"transcript-activated chromatin shredding"**: a programmable way to kill a chosen cell by its **RNA signature**. It repurposes **CRISPR-Cas12a2** — an RNA-guided nuclease from a bacterial abortive-infection system — so that, when its guide RNA recognises a specific target messenger RNA *inside* a mammalian cell, the enzyme switches into a non-specific ("*trans*"/collateral) nuclease that **shreds that cell's own chromatin**, triggers a DNA-damage response, and kills it. The transcript is the address: only cells expressing the trigger RNA die.

For the molecular technique itself (mechanism, parameters, limitations) see [[methods/cas12a2-trans-cleavage]]; for the modality framing (targeted programmable cell ablation as a gene-therapy class) see [[transcript-activated-cell-ablation]]. This page records the primary findings.

The paper is a companion to the foundational eukaryotic-cell-killing demonstration **Scholz et al. 2026** (*Nature*, doi:10.1038/s41586-026-10466-y) [^scholz2026]; both build on the original characterisation of Cas12a2 abortive infection, **Dmytrenko et al. 2023** [^dmytrenko2023].

---

## Mechanism established

- **Cas12a2 cleaves chromatin in *trans* on RNA recognition (in vitro).** Purified *Sulfuricurvum* SuCas12a2 ribonucleoproteins (RNPs) degraded fluorescently-labelled RNA and double-stranded DNA, and cleaved supercoiled plasmid in *trans*, only when the cognate target RNA was present; non-targeting guide RNA controls were inert. A chromatinised 10.6-kb plasmid was degraded more slowly than naked DNA, producing a mono-/di-/tri-nucleosome ladder — i.e. preferential cleavage of internucleosomal **linker** regions. RNPs also degraded chromatin in nuclei extracted from HEK293 cells (targeting guide only) [^zeng2026].
- **Activation kills mammalian cells via a DNA-damage response.** Nucleofecting SuCas12a2 RNPs targeting *GFP* mRNA into HEK293-GFP cells (10–100 pmol) halted proliferation, with enlarged/fragmented nuclei by 72 h (mitotic catastrophe) and increased γH2AX (double-strand-break marker) and phospho-KAP1 S824 (heterochromatic-damage marker). In genome-engineered RPE1 cells the DNA-damage reporter rose within 4 h, peaking 24–48 h [^zeng2026].
- **Killing scales with target-transcript abundance.** In HEK293 clones with ~550 (Low), ~1,100 (Mid), or saturating (High) *GFP* transcripts/cell (single-molecule FISH), a low 5-pmol guide dose killed High cells but only mildly affected Mid/Low; GFP-negative cells were unaffected [^zeng2026].
- **Activity is sufficient at mammalian Mg²⁺.** Although slower at physiological free Mg²⁺ (~0.1–1 mM) than at the 10 mM used in bacterial biochemistry, *trans* DNA cleavage still occurred at 0.1 mM, and killing efficiency was Mg²⁺-independent across 0.1–10 mM RNP pre-incubation [^zeng2026].

## Selectivity — killing cancer cells by their transcript signature

Three orthogonal selectivity levers were demonstrated, all in human cell lines:

1. **Oncogene over-expression (abundance threshold).** In U2OS cells with doxycycline-inducible cyclin E1 (~50 vs ~560 *CCNE1* transcripts/cell), some guides killed regardless of level, but two guides killed **only** the high-expressing (induced) state — a targeting window distinguishing high from low expression of the *same* transcript. *MYC* was also targetable [^zeng2026].
2. **In-frame indel junction.** PC9 non-small-cell-lung-cancer cells carry an endogenous *EGFR* exon-19 deletion (E746_A750del, a 15-bp deletion). A guide spanning the deletion **junction** (a sequence absent from normal cells) caused robust growth arrest + DNA-damage markers in PC9 but had no effect on *EGFR*-wild-type RPE1 cells [^zeng2026].
3. **Single-nucleotide variant via a mutation-created PFS.** SuCas12a2 requires an adenine-rich **protospacer-flanking site (PFS)** 3′ of its RNA target (analogous to a PAM). The *TP53* R248Q mutation is a G→A substitution that **itself creates** the activating "mutA" PFS — so the enzyme fires only on the mutant transcript. Transfecting an R248Q guide into Cas12a2-expressing RPE1 p53^R248Q cells caused robust growth arrest, with **no** change in wild-type RPE1 [^zeng2026].

**Specificity controls (the strong part of the paper):**
- In a 1:1 competitive co-culture of RPE1 p53^R248Q (mCherry) vs RPE1 wild-type (GFP), a non-targeting guide left the mutant outgrowing wild-type (GFP/mCherry ratio ~0.62 at 96 h); the R248Q guide **reversed** this to ~4.5 (wild-type outgrew mutant) [^zeng2026].
- A control mutant, p53^R175H (identical to wild-type *at* the R248 position), showed **no** growth change with the R248Q guide — and selectivity held despite R175H cells expressing *more* *TP53* transcript (~500/cell) than R248Q cells (~400/cell) and far more than wild-type (~25/cell). So selectivity tracks the **mutation**, not expression level. Phospho-KAP1 rose only in R248Q cells; FUCCI imaging showed extended G2 arrest + fragmented nuclei (mitotic catastrophe) [^zeng2026].
- Endogenous setting: PC9 cells (endogenous p53^R248Q, ~83 transcripts/cell) treated with the R248Q guide showed growth defects, DNA-damage markers, and propidium-iodide⁺/Annexin-V⁺ death by 96 h [^zeng2026].
- Additional *TP53* mutations targeted: R280K and E285K (both G→A), and M246I (a G→C single-nucleotide variant) in NCI-H23 cells. A single guide-target mismatch can reduce activity, which the authors exploit for discrimination [^zeng2026].

**Targetability across patients.** Analysing *TP53* coding mutations in 16,708 patient samples: **25.7%** are B-to-A substitutions (B = G/C/T) that could create or enhance an activating PFS, and **73.2%** carry an A, ABA, or AA motif within 24 nt of the 3′ end usable as a PFS [^zeng2026].

## In vivo (mouse) — LNP delivery suppresses tumours

- **Delivery as mRNA.** Capped, pseudouridylated mRNA encoding nuclear-localised Cas12a2 (in-vitro transcribed), co-delivered with the R248Q guide (transfection or lipid nanoparticles, LNPs), reproduced selective killing of PC9 cells [^zeng2026].
- **MYC-driven liver tumours (genetically-engineered model).** In tumour-prone FVB/NJ mice with transposase-integrated *MYC*, LNPs co-packaging Cas12a2 mRNA + an anti-*MYC* guide (treatment from day 6) **reduced tumour surface area** (% of liver) and liver-to-body-weight ratio versus controls [^zeng2026].
- **PC9 lung xenografts.** SORT (lung-tropic) LNPs delivered cargo to ~7–18% of xenograft cells (modest, hence multi-dosing). Six doses of Cas12a2 mRNA + R248Q-guide LNPs **reduced tumour progression** (bioluminescence) versus controls. In an **advanced** model (1 million cells, 21-day pre-treatment growth), the LNPs did **not** shrink established lung-tumour burden but **delayed metastasis** formation [^zeng2026].

---

## Significance for the wiki

**This is a cancer paper; it does not test senescence or aging.** Its relevance here is as a **new programmable cell-ablation modality** that is conceptually orthogonal to everything in the current senolytic toolkit, plus one direct p53-aging cameo.

1. **A fourth senolytic-adjacent killing mechanism.** Every small-molecule senolytic in the wiki kills by exploiting senescent-cell **anti-apoptotic dependencies** (the SCAP framework; see [[senolytics]]). Transcript-activated shredding kills by **RNA identity** instead — independent of apoptotic priming. It would sit alongside BH3-mimetics, uPAR-targeted CAR-T cells, and suicide-gene systems (Oisin; INK-ATTAC/p16-3MR proof-of-concept) as a distinct fourth route. See [[transcript-activated-cell-ablation]] for that framing and its (currently hypothetical) senescence application.
2. **It plugs into — and is bounded by — the senotype problem.** The just-ingested SenNet work ([[studies/suryadevara-2026-senotypes]], [[studies/anerillas-2026-sencat]]) shows senescent cells are heterogeneous with **no universal marker**. A transcript-addressed killer is exactly what "senotype-targeted senotherapeutics" would require — but the *same* heterogeneity is the obstacle: there is no senescence-exclusive trigger transcript (p16/*CDKN2A* is not senescence-specific), and abundance-thresholding would need a senescence transcript reliably above the killing threshold only in senescent cells. See [[cellular-senescence]] § *Senescent-cell heterogeneity and the senotype concept*.
3. **A clean p53-aging tradeoff cameo.** The authors deliberately *kill* p53-mutant cells rather than *restore/activate* p53 — explicitly because unintended p53 activation in healthy cells "can induce senescence and whole-genome duplication." That is the same antagonistic-pleiotropy tradeoff the wiki documents at [[studies/tyner-2002-p53-mutant-aging]] and [[p53]] (tumour-suppression vs accelerated aging).

---

## Limitations and gaps

- **No aging/senescence data.** Every selectivity demonstration uses a cancer-defining transcript (mutant *TP53*, *EGFR* deletion, amplified oncogene). Transfer to senescent-cell clearance is unproven and non-trivial (point 2 above). #gap/no-mechanism (for the aging application specifically)
- **Delivery is the bottleneck.** In-vivo efficacy depended on LNPs; tumour-cell delivery was ~7–18%, requiring repeat dosing, and the system **failed to reduce established advanced tumour burden** (only delayed metastasis). Reaching senescent cells dispersed across many tissues is harder than reaching a tumour mass. #gap/long-term-unknown
- **Collateral/off-target by design.** Once activated, *trans*-cleavage is non-specific within the cell — so the entire safety margin rests on trigger-transcript selectivity. Bystander killing of any cell crossing the activation threshold, and innate-immune activation by the DNA-damage/LNP cargo, are the principal hazards. See [[methods/cas12a2-trans-cleavage]] § *Limitations*.
- **Verification scope.** Numerics verified against the bioRxiv preprint full text (DOI 10.64898/2026.05.08.723607); all quantitative claims confirmed. The peer-reviewed *Nature* version (DOI 10.1038/s41586-026-10738-7) remains paywalled — minor editorial changes between preprint and final version cannot be excluded. #gap/no-fulltext-access (journal version only)
- **Companion/origin papers cited by DOI only** (Scholz 2026; Dmytrenko 2023) — candidates for their own study pages if the platform earns deeper coverage.

---

## Cross-references

- [[methods/cas12a2-trans-cleavage]] — the molecular technique (mechanism, parameters, failure modes)
- [[transcript-activated-cell-ablation]] — the intervention/modality page (programmable cell ablation; aging framing)
- [[senolytics]] — existing senolytic modalities this would extend
- [[cellular-senescence]] — senotype-heterogeneity section; the motivating + bounding problem
- [[p53]] · [[p53-pathway]] — the targeted tumour suppressor; p53-activation-induces-senescence tradeoff
- [[studies/tyner-2002-p53-mutant-aging]] — the p53 tumour-suppression vs aging tradeoff
- [[cancer]] — therapeutic-landscape context; undruggable-mutation targeting
- [[studies/suryadevara-2026-senotypes]] · [[studies/anerillas-2026-sencat]] — senotype heterogeneity (why this is hard for senescence)

---

## Footnotes

[^zeng2026]: [[studies/zeng-2026-cas12a2-chromatin-shredding]] · doi:10.1038/s41586-026-10738-7 (*Nature* 2026; preprint doi:10.64898/2026.05.08.723607) · Zeng J, …, Doudna JA · in-vitro (human cell lines: HEK293/HEK293T, hTERT-RPE1, U2OS, PC9, NCI-H23) + in-vivo (mus-musculus: MYC-transposon liver GEMM in FVB/NJ; PC9 lung xenografts in immunodeficient mice) · transcript-activated chromatin shredding via SuCas12a2 *trans*-cleavage; SNV/indel/abundance selectivity; LNP mRNA+gRNA delivery reduced liver-tumour surface area and delayed lung-metastasis. Verified against CC-BY bioRxiv preprint full text (2026-06-13); *Nature* version paywalled.

[^scholz2026]: doi:10.1038/s41586-026-10466-y · Scholz N, Thompson J, Crosby KT, …, Jackson RN, Beisel CL, Liu Y · *Nature* 2026 (published 6 May 2026) · companion foundational paper — RNA-triggered, sequence-specific killing of eukaryotic cells by Cas12a2 via genome-wide DNA shredding; basis the Doudna paper applies to cancer-specific transcripts. Closed-access — cited from metadata; candidate for its own study page. #gap/no-fulltext-access

[^dmytrenko2023]: doi:10.1038/s41586-022-05559-3 · Dmytrenko O, Neumann GC, Hallmark T, …, Jackson RN, Beisel CL · *Nature* 2023 · 613(7944):588-594 · origin paper — Cas12a2 elicits **abortive infection** via RNA-triggered, non-specific destruction of dsDNA/ssDNA/ssRNA after recognising a target RNA with an activating PFS, inducing an SOS DNA-damage response and growth arrest. Establishes the trans-cleavage mechanism repurposed here. Closed-access — cited from metadata. #gap/no-fulltext-access
