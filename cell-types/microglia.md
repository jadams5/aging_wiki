---
type: cell-type
aliases: [brain-resident macrophages, CNS innate immune cells, microglial cells]
tissue-of-origin: ["[[brain]]", "[[spinal-cord]]"]
key-markers-mouse: [CD11b+, CD45-low, CX3CR1+, P2RY12+, TMEM119+, IBA1+]
key-markers-human: [CD11b+, CD45-low, CX3CR1+, P2RY12+, TMEM119+, IBA1+]
lineage-output: []
self-renewal: "yes (slow, local; no significant contribution from peripheral monocytes under steady state)"
aging-relevant: yes
affected-hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
key-aging-phenotypes: ["[[neurodegeneration]]", "[[alzheimers-disease]]"]
typical-niche: "CNS parenchyma; ramified processes continuously survey large territories; regional density varies (highest in substantia nigra, hippocampus, olfactory bulb)"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Ginhoux 2010, Guerreiro 2013 (NEJMoa1211851), Elmore 2014, and Hammond 2019 verified against primary source PDFs. Keren-Shaul 2017 (Cell.com bronze OA) download failed — DAM two-step mechanistic claim and cell-count in footnote not independently confirmed against PDF. Jonsson 2013 (NEJMoa1211103) download stalled; OR ~2.9 confirmed via Europe PMC abstract (OR 2.90, 95% CI 2.16–3.91 combined analysis) but methods/results not read end-to-end. Norden 2013 (Wiley) download failed; aging-priming quantitative claims (2–3× IL-1β) remain unverified against full text — tagged #gap/no-fulltext-access."
---

# Microglia

The resident innate immune cells of the CNS (brain + spinal cord). Microglia are ontogenetically and functionally distinct from peripheral macrophages: they derive from yolk-sac primitive macrophages before embryonic day 8 and self-renew locally throughout life without significant contribution from circulating monocytes [^ginhoux2010]. With aging, microglia undergo profound functional deterioration — becoming pro-inflammatory, morphologically dystrophic, and phagocytically impaired — and are central contributors to age-related neurodegeneration including [[alzheimers-disease]], Parkinson's disease, and ALS.

---

## Identity

### Ontogeny

Microglia are the only CNS-resident macrophages with a **yolk-sac origin**: they derive from primitive myeloid progenitors that colonize the brain rudiment before embryonic day 8 in mice, prior to the establishment of definitive hematopoiesis in the fetal liver [^ginhoux2010]. This distinguishes them from all other CNS macrophages (perivascular, meningeal, and choroid plexus macrophages), which are partially replaced by monocyte-derived cells in adulthood.

Under **homeostatic conditions**, peripheral monocytes do not significantly replenish the microglial pool. Microglia maintain themselves by slow, local proliferation throughout the lifespan, with a turnover half-life estimated at ~100 days in adult mice #gap/needs-human-replication.

| Dimension | Status |
|---|---|
| Ontogeny conserved in humans? | yes |
| Self-renewal from monocytes excluded in humans? | partial (human data are indirect; monocyte exclusion best established in mouse) |
| Replicated in humans? | partial — indirect evidence from CNS transplant studies |

### Canonical surface markers (mouse and human)

| Marker | Notes |
|---|---|
| CD11b (ITGAM) | Pan-myeloid; microglia are CD11b+ CD45-low (distinguishes from infiltrating macrophages, which are CD45-high) |
| CX3CR1 | Fractalkine receptor; high on homeostatic microglia; reduced in activated states |
| P2RY12 | Purinergic receptor; homeostatic marker; lost in activated/disease-associated microglia |
| TMEM119 | Highly specific homeostatic marker; lost upon activation |
| IBA1 (AIF1) | Pan-microglial; retained across activation states; standard IHC marker |
| TREM2 | Triggering receptor expressed on myeloid cells; upregulated in disease-associated microglia (DAM) |

---

## Distribution and niche

Microglia constitute approximately **5–12% of all brain cells** in adult mice (human estimates vary by region, ~0.5–16% of cells depending on method). Regional density is highest in areas vulnerable to neurodegeneration: substantia nigra, hippocampus, basal ganglia, and olfactory bulb. Cerebellar cortex and white matter have lower densities. #gap/unsourced — precise human regional density data across age are incomplete.

Each microglial cell surveys a discrete, largely non-overlapping territory via motile ramified processes, with the entire brain parenchyma covered by collective microglial surveillance at any given time.

---

## Core functions

### Phagocytosis and debris clearance

Microglia are the primary phagocytes of the CNS, clearing:
- Apoptotic cells and cellular debris
- Amyloid-beta (Aβ) oligomers and plaques
- Myelin debris after axonal injury
- Dead or dying neurons

Phagocytic capacity is critically dependent on **TREM2 signaling**: TREM2 promotes microglial metabolic reprogramming and migration toward amyloid deposits. TREM2 loss-of-function impairs Aβ clearance and accelerates plaque accumulation in mouse AD models [^jonsson2013].

### Synapse pruning

During development, microglia mediate **complement-dependent synapse elimination** via C1q/C3 opsonization and CR3-mediated phagocytosis (Beth Stevens lab work). This process normally refines neural circuits but is aberrantly reactivated in aging and neurodegeneration #gap/no-mechanism — the triggers for inappropriate synapse pruning in the aged brain are not fully established.

### Cytokine secretion and immunosurveillance

Homeostatic microglia continuously survey the parenchyma and respond to PAMPs and DAMPs by secreting:
- **Pro-inflammatory:** TNF-α, IL-1β, IL-6, IL-12
- **Anti-inflammatory/trophic:** IL-10, TGF-β, BDNF, IGF-1

The balance between these programs is lost in aging (see Aging Features below).

---

## Aging features

### Morphological changes

Aged microglia adopt **dystrophic morphology**: shortened, de-ramified, beaded, or fragmented processes; cytoplasmic swelling; reduced process surveillance velocity. This contrasts with activated microglia (which show amoeboid retraction) and represents a distinct aged state. Dystrophic microglia are prominent in aged human brain post-mortem tissue, where they co-localize with Aβ plaques and tau tangles. #gap/unsourced — quantitative morphological studies across human lifespan are sparse.

### Primed / exaggerated activation

Aged microglia become **"primed"** — displaying a baseline-elevated inflammatory tone and mounting an exaggerated, prolonged response to immune challenge [^norden2013]:
- Elevated resting levels of IL-1β, TNF-α, and IL-6 in aged vs. young brain
- Following peripheral LPS challenge, aged microglia produce ~2–3× more IL-1β than young microglia (mouse; quantification from Norden 2013 review — primary sources cited therein not verified) #gap/no-fulltext-access — Norden 2013 full-text not accessible via archive (download failed); quantitative claim unverified against review source
- Prolonged microglial activation after challenge correlates with intensified sickness behavior and cognitive decline in aged mice #gap/needs-human-replication

### Impaired phagocytosis

Aged microglia show reduced phagocytic uptake of Aβ, myelin debris, and apoptotic cells relative to young microglia, despite increased pro-inflammatory output. This combination — heightened cytokine secretion + impaired clearance — is mechanistically central to plaque accumulation in Alzheimer's disease.

### Transcriptional heterogeneity revealed by scRNA-seq

Single-cell RNA-seq has resolved multiple functionally distinct microglial states across aging. Hammond et al. 2019 profiled 76,149 cells across development (E14.5–P540) and identified 9 transcriptionally distinct states [^hammond2019]; Keren-Shaul et al. 2017 identified disease-associated microglia (DAM) in an AD mouse model [^kerenshaul2017]:

| State | Key markers | Biology | Source |
|---|---|---|---|
| Homeostatic | P2RY12+, TMEM119+, CX3CR1-high | Surveillance; tissue maintenance | Both |
| DAM (Disease-Associated Microglia) | TREM2+, ApoE+, Lpl+, Cst7+, P2RY12-low | Activated around Aβ plaques; phagocytic; restricts plaque spread | [^kerenshaul2017] |
| Aging OA2 | Ccl4+, Il1b+, Lpl+, Cst7+; 2–4× increase at P540 vs P100 | Pro-inflammatory; increased in aged brain | [^hammond2019] |
| Aging OA3 (interferon-response) | Ifitm3+, Irf7+, Rtp4+; small subset | Type-I IFN signaling; increased with age | [^hammond2019] |
| Proliferating | Rrm2+, Ube2c+, Birc5+, Cenpa+ | Reactive expansion; prominent in development and after injury | [^hammond2019] |
| Injury-responsive | Apoe+, Cst7+, Lpl+, Axl+, P2ry12-low | Activated by LPC-demyelination; overlaps DAM transcriptionally | [^hammond2019] |

DAM emerge in a **two-step process**: a TREM2-independent first step (homeostatic → Stage 1 DAM, marked by downregulation of P2RY12 and Cx3cr1 and upregulation of Apoe) followed by a TREM2-dependent second step (Stage 1 → Stage 2 DAM, requiring TREM2 signaling for full upregulation of Lpl, Cst7, and Trem2 itself) [^kerenshaul2017]. #gap/needs-replication — DAM two-step model from Keren-Shaul 2017 PDF not yet independently verified (download failed).

| Dimension | Status |
|---|---|
| DAM state identified in humans? | yes — analogous TREM2-hi/P2RY12-low cluster in human AD post-mortem scRNA-seq |
| DAM protective or damaging? | contested — early DAM may be protective (clearance); chronic DAM activation may worsen inflammation #gap/contradictory-evidence |
| Replicated across labs? | yes (DAM replicated; additional substates vary by atlas) |

---

## Microglial senescence

Aged microglia share features with [[cellular-senescence|senescent cells]] (SA-β-gal activity, p21/p16 upregulation, SASP-like cytokine secretion) and have been classified as "senescent-like" in some studies. However, whether aged/dystrophic microglia meet the canonical definition of cellular senescence (permanent cell-cycle arrest + SASP) is debated — microglia are slowly proliferating, not post-mitotic, complicating the senescence designation. #gap/contradictory-evidence #gap/unsourced — dedicated studies quantifying p16+ microglia in aged human brain are lacking.

The functional overlap with [[chronic-inflammation]] is clear: aged/senescent-like microglia contribute substantially to CNS **inflammaging** — the chronic low-grade neuroinflammation that accelerates aging across many brain regions.

---

## TREM2 and Alzheimer's disease risk

**TREM2 R47H** is among the highest-impact single-gene risk variants for late-onset Alzheimer's disease. Jonsson et al. found OR 2.90 (95% CI 2.16–3.91, P=2.1×10⁻¹², combined Icelandic + replication cohorts) for rs75932628-T [^jonsson2013]. Guerreiro et al. confirmed this in an independent European case-control series (1092 AD cases + 1107 controls discovery set; 1887 cases + 4061 controls replication), finding OR 4.5 (95% CI 1.7–11.9) for R47H specifically [^guerreiro2013]. The two independent concurrent papers were published simultaneously in the same issue of NEJM (January 10, 2013, Vol. 368:2).

| Dimension | Status |
|---|---|
| TREM2 R47H effect size replicated? | yes — multiple independent cohorts |
| Mechanism (how R47H impairs microglia)? | partial — reduced TREM2 ligand binding and downstream PI3K/AKT signaling; impaired phagocytosis and metabolic fitness in microglia; precise human mechanism still under study |
| Therapeutic target status? | active — anti-TREM2 agonist antibodies and TREM2 mimetics in Phase 1–2 trials |

TREM2 is expressed almost exclusively by microglia in the brain; TREM2 risk variants thus directly implicate microglial dysfunction in AD pathogenesis. See [[alzheimers-disease]] for broader disease context.

---

## Disease relevance

### Alzheimer's disease

- Microglia surround and partially phagocytose Aβ plaques in early AD; insufficient clearance allows plaque growth.
- Tau pathology triggers a distinct microglial activation program, potentially amplifying neuronal loss.
- GWAS hits enriched in myeloid-expressed genes (TREM2, CR1, CLU, BIN1) indicate microglial biology is genetically central to AD risk.
- DAM state may be initially protective (Keren-Shaul 2017) but chronic activation contributes to synaptic damage and neuronal loss.

### Parkinson's disease

- Substantia nigra microglia are activated in PD; α-synuclein aggregates act as DAMPs to trigger TLR2/4-dependent microglial activation.
- Activated microglia produce NO and ROS that accelerate dopaminergic neuron loss. #gap/unsourced — human in vivo evidence limited; mechanism established in vitro and in rodent models.

### ALS

- Spinal cord microglia shift from an early neuroprotective to a late-stage neurotoxic profile during ALS progression in SOD1 mouse models. #gap/needs-human-replication

---

## Therapeutic relevance: microglial repopulation

**CSF1R inhibitors** (e.g., PLX3397, PLX5622) deplete ~99% of brain microglia within ~3 weeks of dietary administration (PLX3397 at 290 mg/kg chow) by blocking the survival signal from CSF1R (c-Fms) [^elmore2014]. Upon inhibitor withdrawal, repopulation begins within 48–72 hours via proliferation of nestin-expressing progenitor cells found throughout the CNS; microglial numbers return to control levels within ~7 days [^elmore2014].

**Rationale for repopulation therapy in aging:**
- Replace aged, dysfunctional microglia with a "young" functional population
- Eliminate accumulated epigenetic damage in the long-lived microglial pool

**Current evidence:**
- Elmore 2014 (PLX3397) showed that microglia depletion in young adult mice causes no cognitive deficits and mildly enhanced Barnes maze learning; cognitive benefits from repopulation in aged mice are from subsequent work by the Green lab and others, not from Elmore 2014 itself. #gap/needs-replication #gap/unsourced — aged-mouse repopulation benefit claims require dedicated citation
- Long-term cognitive effects and optimal repopulation protocols under active investigation. #gap/long-term-unknown
- No human trials of CSF1R inhibition for microglial repopulation as of 2026-05-04 (CSF1R inhibitors are in trials for other CNS indications, e.g., ALSP). #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Repopulation demonstrated in mouse? | yes [^elmore2014] |
| Cognitive benefit in aged mouse? | partial — some studies positive; heterogeneous results across labs |
| Human trial data? | none (as of 2026-05-04) |

---

## Limitations and open questions

- **Human data lag**: most mechanistic microglial aging data are from mouse models. Human post-mortem scRNA-seq studies are growing but are confounded by agonal state and post-mortem interval. #gap/needs-human-replication
- **Senescence vs. priming vs. dystrophy**: no consensus on whether these represent distinct states or a spectrum; lack of uniform markers hampers comparison across studies. #gap/contradictory-evidence
- **Sex differences**: microglial density, transcriptome, and aging trajectory differ between male and female mice; extent in humans unclear. #gap/unsourced
- **DAM functional interpretation**: whether DAM is protective (restrains plaque expansion, Keren-Shaul 2017) or damaging (drives neuroinflammation) remains contested and likely context-dependent. #gap/contradictory-evidence
- **Repopulation therapy durability**: repopulated microglia age at the same rate as native microglia; whether iterative repopulation can extend CNS healthspan is unknown. #gap/long-term-unknown

---

## Cross-references

- [[chronic-inflammation]] — CNS inflammaging is largely microglial-mediated
- [[cellular-senescence]] — aged microglia share senescent-like features; relationship debated
- [[alzheimers-disease]] — TREM2 genetics, DAM, Aβ clearance
- [[neurodegeneration]] — shared microglial contributions across AD, PD, ALS
- [[trem2]] — the key microglial risk gene for AD (protein page; implicit stub)
- [[csf1r]] — survival receptor; target for microglial depletion/repopulation (implicit stub)
- [[inflammaging]] — systemic and CNS chronic inflammation in aging

---

## Footnotes

[^ginhoux2010]: doi:10.1126/science.1194637 · Ginhoux F et al. · in-vivo (mouse fate mapping) · model: Runx1-MERCre-MER × Rosa26^R26R-eYFP lineage tracing; progenitors arise before E8.0, seed brain via blood vessels E8.5–E9.5 · foundational paper establishing yolk-sac origin of adult microglia · cited_by: ~4919

[^kerenshaul2017]: doi:10.1016/j.cell.2017.05.018 · Keren-Shaul H et al. · in-vivo (mouse scRNA-seq) · model: 5XFAD Alzheimer mouse model · identified DAM two-step transition (Stage 1 TREM2-independent; Stage 2 TREM2-dependent) · cited_by: ~5115 · #gap/no-fulltext-access — PDF download failed (Cell.com 403); n-cells figure and precise DAM marker list not verified against primary source

[^hammond2019]: doi:10.1016/j.immuni.2018.11.004 · Hammond TR et al. · in-vivo (mouse scRNA-seq across lifespan) · model: C57BL/6 mice ages E14.5, P4/5, P30, P100, P540 + LPC-injury; n=76,149 cells from 41 mice · identified 9 transcriptionally distinct microglia states; aging enriched OA2 (Ccl4+, Il1b+) and OA3 (interferon-response: Ifitm3+, Irf7+) clusters · cited_by: ~2166

[^jonsson2013]: doi:10.1056/NEJMoa1211103 · Jonsson T et al. · observational (genome sequencing + case-control) · model: Icelandic population cohort + replication in US, Norway, Netherlands, Germany · TREM2 R47H (rs75932628) OR 2.92 (95% CI 2.09–4.09) discovery; OR 2.90 (95% CI 2.16–3.91, P=2.1×10⁻¹²) combined · cited_by: ~2511 · note: OR confirmed via abstract (full-text PDF download stalled)

[^guerreiro2013]: doi:10.1056/NEJMoa1211851 · Guerreiro R et al. · observational (case-control; exome + Sanger sequencing) · model: European case-control; 1092 AD cases + 1107 controls (discovery); 1887 AD cases + 4061 controls (replication) · TREM2 R47H OR 4.5 (95% CI 1.7–11.9); all-variant combined OR 4.59 (95% CI 2.49–8.46, P=9×10⁻⁹) · confirmed TREM2 risk in independent population · cited_by: ~2949

[^norden2013]: doi:10.1111/j.1365-2990.2012.01306.x · Norden DM, Godbout JP · review (published 2012/2013, Neuropathology and Applied Neurobiology) · model: mouse + review of aging neuroinflammation literature · cited_by: ~744 · #gap/no-fulltext-access — PDF download failed; quantitative IL-1β claims not verified against full text

[^elmore2014]: doi:10.1016/j.neuron.2014.02.040 · Elmore MR et al. · in-vivo (mouse) · model: C57BL/6 adult mice (2–18 months); PLX3397 (290 mg/kg chow) as primary in vivo CSF1R inhibitor · ~99% microglial elimination by 21 days; repopulation from nestin+ progenitors begins 48–72 hr after drug withdrawal; full numerical recovery by ~7 days · cited_by: ~1920
