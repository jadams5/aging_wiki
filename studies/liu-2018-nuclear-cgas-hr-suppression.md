---
type: study
doi: 10.1038/s41586-018-0629-6
pmid: 30356214
pmc: null
title: "Nuclear cGAS suppresses DNA repair and promotes tumorigenesis"
authors: [Liu H, Zhang H, Wu X, Ma D, Wu J, Wang L, Jiang Y, Fei Y, Zhu C, Tan R, Jungblut P, Pei G, Dorhoi A, Yan Q, Zhang F, Zheng R, Liu S, Liang H, Liu Z, Yang H, Chen J, Wang P, Tang T, Peng W, Hu Z, Xu Z, Huang X, Wang J, Li H, Zhou Y, Liu F, Yan D, Kaufmann SHE, Chen C, Mao Z, Ge B]
year: 2018
journal: Nature
study-design: in-vitro
organism: human-cell-lines + mouse-xenograft
n-subjects: null
intervention: ["[[cgas]]"]
hallmarks-tested: ["[[genomic-instability]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [nuclear-cgas-hr-suppression, parp1-timeless-disruption, cgamp-independent, tumor-promotion]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Closed-access paper — *Nature* 2018; no PMC deposit; no local PDF in a local paper archive (DOI lookup confirms `oa_status: closed`, `download_status: not_oa`). Seeded from PubMed-verified abstract only (PMID 30356214, efetch confirmed 2026-05-13). Quantitative claims (n's, p-values, effect sizes, specific cell lines, binding affinities) are NOT in the abstract and are NOT asserted on this page. `#gap/no-fulltext-access` carries throughout. Re-trigger wiki-verifier when full text becomes available (institutional access, preprint, or open-access transition).

# Nuclear cGAS suppresses DNA repair and promotes tumorigenesis

**Liu H, Zhang H, Wu X, Ma D, Wu J, Wang L, Jiang Y, Fei Y, Zhu C, Tan R, Jungblut P, Pei G, Dorhoi A, Yan Q, Zhang F, Zheng R, Liu S, Liang H, Liu Z, Yang H, Chen J, Wang P, Tang T, Peng W, Hu Z, Xu Z, Huang X, Wang J, Li H, Zhou Y, Liu F, Yan D, Kaufmann SHE, Chen C, Mao Z, Ge B · *Nature* 563(7729):131–136 · 2018 · DOI: 10.1038/s41586-018-0629-6 · PMID: 30356214**

## TL;DR

cGAS — best known as a cytosolic DNA sensor — translocates to the nucleus during mitosis and localizes to chromatin at DNA double-strand breaks (DSBs). In the nucleus, cGAS interacts with [[parp1]] via poly(ADP-ribose) and disrupts formation of the PARP1–Timeless complex, which is required for efficient homologous recombination (HR) repair. This HR-suppressive function is independent of cGAS's catalytic activity (cGAMP synthesis not required). In mouse xenograft models, nuclear cGAS promotes tumor growth. Liu et al. 2018 is the foundational paper establishing the "second role" of cGAS as a nuclear HR suppressor, and is the direct prior-art context for [[studies/chen-2025-nmr-cgas-hr-repair]].

## Identity and access status

- **DOI:** 10.1038/s41586-018-0629-6
- **PMID:** 30356214
- **PMC:** null — no PMC deposit; paper is not open-access
- **DOI lookup:** `oa_status: closed` · `download_status: not_oa` · `download_path: null`
- **Citation count:** 611 (OpenAlex, as of 2026-05-13) · FWCI: 29.3 · citation percentile: 100th
- **Local PDF:** not available — permanent blocker for full verification #gap/no-fulltext-access

This page is a **permanent-blocker study page** per CLAUDE.md policy: `verified: false` will remain set until full-text access is obtained. All quantitative claims (specific n's, p-values, effect sizes, binding affinities, dose details, cell lines tested) are withheld because they are not available in the abstract and fabrication is prohibited.

## Key claim (abstract-level)

Nuclear [[cgas]] suppresses [[homologous-recombination]] repair in human and mouse cells. The mechanism, as described in the abstract, proceeds as follows [^liu2018abstract]:

- cGAS translocates to the nucleus, a process occurring notably during mitosis when the nuclear envelope breaks down
- Nuclear cGAS binds chromatin at sites of DSBs
- cGAS interacts with [[parp1]] via poly(ADP-ribose) (PAR)
- This interaction impedes assembly of the PARP1–Timeless complex
- Disruption of PARP1–Timeless impairs HR repair (specifically, the abstract and prior literature indicate RAD51 loading and strand invasion are downstream consequences, though quantitative detail requires the full text) #gap/no-fulltext-access
- The HR-suppressive function is **catalytically independent**: cGAS does not need to synthesize cGAMP to suppress HR — the protein acts as a structural/scaffold interference rather than through its enzymatic output
- In mouse xenograft experiments (tumor model not specified in abstract; B16 melanoma has been widely cited in secondary literature, but this detail requires full-text confirmation) #gap/no-fulltext-access, nuclear cGAS promotes tumor growth
- The study interprets this as a mechanism by which cGAS — even in the absence of immune activation — directly accelerates tumorigenesis by degrading genome integrity

**Timeless** (also known as TIM1) is a replication-fork protection factor and HR cofactor; its PARP1-dependent recruitment to stalled replication forks and DSBs is required for RAD51 filament stabilization. The cGAS-mediated disruption of the PARP1–Timeless axis is thus a mechanistically coherent route to HR impairment. Neither a Timeless nor a RAD51 protein page currently exists in this wiki — these are implicit stubs for future seeding.

Note on organism context: the abstract describes work in human and mouse cell lines and a mouse xenograft model; the paper does not include in vivo aging studies or lifespan data. The study-design field reflects the primary mechanistic experimental system (in-vitro cell lines); the xenograft component is in vivo but the organism is "human tumor cells in immunocompromised mouse host," not a native aging model.

## Conceptual significance

Liu et al. 2018 is the paper that established cGAS as a **bimodal genome-stability regulator**:

1. **Cytosolic mode (canonical):** cytoplasmic dsDNA (from damaged mitochondria, micronuclei, or pathogens) binds cGAS → cGAMP synthesis → [[cgas-sting]] → STING → TBK1 → IRF3 → type I interferon [^sun2013]. This arm is pro-inflammatory but also (in theory) signals damage, and promotes immune clearance of genomically damaged cells.

2. **Nuclear mode (Liu 2018):** nuclear cGAS at DSBs → PARP1–Timeless disruption → HR suppression → accumulation of unrepaired DSBs → genomic instability → tumorigenesis. This arm is *anti-repair* and pro-tumorigenic, independent of the signaling arm.

This bimodal framing resolves a prior paradox: cGAS activation correlates with both anti-tumor immunity (innate immune activation, senescence surveillance) and pro-tumor states (genomic instability, immune escape), because the two arms pull in opposite directions on genome maintenance.

The downstream impact of this framing is substantial:

- It motivates selective inhibition of nuclear cGAS HR-suppressive activity while sparing cytosolic DNA-sensing function — a target-selectivity challenge that remains unresolved #gap/no-mechanism
- It is the foundational prior art for [[studies/chen-2025-nmr-cgas-hr-repair]] (Mao lab, 2025, *Science*), which demonstrates that naked mole-rat cGAS has evolutionarily lost the HR-suppressive function via four amino acid substitutions, converting nuclear cGAS from an HR inhibitor into an HR facilitator. The Chen 2025 paper directly inverts the Liu 2018 finding as its central narrative
- Zhiyong Mao (Tongji University) is co-senior author on both Liu 2018 and Chen 2025, reflecting a sustained programmatic focus on nuclear cGAS biology

## Citing pages in this wiki

The following pages currently reference Liu 2018 directly (as a bare-DOI footnote); they should be updated to cite `[[studies/liu-2018-nuclear-cgas-hr-suppression]]` once this study page is confirmed:

- `[[cgas]]` — protein page; nuclear-localization and HR-suppression sections
- `[[cgas-sting]]` — pathway page; nuclear vs cytosolic function framing
- `[[homologous-recombination]]` — pathway page; cGAS as HR regulator
- `[[dna-damage-response]]` — pathway page; cGAS-at-DSB signaling context
- `[[genomic-instability]]` — hallmark page; nuclear cGAS as a driver of genomic instability
- `[[studies/chen-2025-nmr-cgas-hr-repair]]` — study page; Liu 2018 cited as prior art in the Background section

## Limitations and knowledge gaps

All gaps below are partially or fully contingent on full-text access being unavailable. Priority items for wiki-verifier re-check when access is restored:

1. **PARP1–Timeless binding affinities.** The abstract states cGAS interacts with PARP1 via PAR and disrupts the PARP1–Timeless complex. Specific affinities (Kd values), the structural interface, and whether the disruption is competitive displacement or steric occlusion require the full text. #gap/no-fulltext-access

2. **RAD51 loading quantification.** The HR-impairment downstream of PARP1–Timeless disruption presumably manifests as reduced RAD51 focus formation or strand invasion efficiency. Specific percentages, foci counts, and cell lines are not available from the abstract. #gap/no-fulltext-access

3. **Xenograft tumor model details.** Tumor line, mouse strain (immunocompromised background), n per group, tumor volume measurements, and statistical tests are not reported in the abstract. Secondary literature cites B16 melanoma but this needs full-text confirmation. #gap/no-fulltext-access

4. **cGAS variant mutagenesis.** The catalytic-independence claim implies that a catalytically dead cGAS mutant (e.g., D319A/D319N or equivalent active-site mutation) retains HR-suppressive function. The specific mutant(s) used and the rescue-experiment design require the full text. #gap/no-fulltext-access

5. **Cell lines used for mechanistic work.** Human and mouse lines are indicated in the abstract but not specified. The panel of cell lines and their HR-competence status (BRCA1/2 intact vs deficient) is relevant to interpreting the mechanism's generality. #gap/no-fulltext-access

6. **Nuclear import mechanism details.** The abstract (and PubMed efetch text) references importin-α as the nuclear transport factor for cGAS, but the specific NLS and mitosis-dependence of nuclear entry are not detailed in the abstract. The [[cgas]] protein page lists NLS-295-305 as a key domain; full-text verification would confirm this residue range. #gap/no-fulltext-access

7. **Human evidence status.** All mechanistic data is in cell lines; no in vivo human or clinical data. HR suppression has not been demonstrated as a net effect of cGAS in intact human tissue. #gap/needs-human-replication

---

[^liu2018abstract]: [[studies/liu-2018-nuclear-cgas-hr-suppression]] · n=NR (abstract only) · in-vitro + in-vivo (xenograft) · model: human and mouse cell lines; mouse xenograft · Liu H, Zhang H, Wu X et al. · *Nature* 563:131–136 · 2018 · doi:10.1038/s41586-018-0629-6 · PMID:30356214 · **#gap/no-fulltext-access — closed-access; seeded from abstract only**

[^sun2013]: doi:10.1126/science.1232458 · Sun L, Wu J, Du F, Chen X, Chen ZJ · *Science* 339:786–791 · 2013 · in-vitro · seminal cGAS discovery paper; characterized cGAS as cytosolic DNA sensor synthesizing cGAMP to activate the type I interferon pathway. Local PDF available in a local paper archive.

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · n=NR · in-vitro+in-vivo · model: multiple (cell lines + mouse + naked mole-rat tissue) · Chen Y et al. · *Science* 2025 · doi:10.1126/science.adp5056 · PMID:41066557 · **#gap/no-fulltext-access**
