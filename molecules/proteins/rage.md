---
type: protein
aliases: [AGER, advanced glycation end-product receptor, receptor for advanced glycation end products]
uniprot: Q15109
ncbi-gene: 177
hgnc: 320
ensembl: ENSG00000204305
mouse-ortholog: Ager
pathways: ["[[nf-kb]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]", "[[cellular-senescence]]"]
sens-categories: ["[[glycosenes]]"]
druggability-tier: 2
caused-by: []
causes: ["[[chronic-inflammation]]", "[[sasp]]"]
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Shin 2025 PDF fully verified (see [[shin-2025-rehmgb1-paracrine-senescence]] for corrections log); FPS-ZM1 100 nM rescue concentration confirmed; RAGE → JAK2 → STAT1 axis confirmed by Western (p-AKT, p-NF-κB p65, p-JAK2, p-STAT1 all elevated by ReHMGB1 vs OxHMGB1/PBS, p < 0.05 to < 0.01, n = 3). Canonical-DB identifiers (UniProt Q15109, HGNC 320, NCBI Gene 177) confirmed by UniProt API query 2026-05-20. Upstream receptor-biology framing (Schmidt 1992, Bierhaus 2005, azeliragon STEADFAST Phase 3 outcome) is canonical but not PDF-verified against primary trial sources (#gap/needs-replication)."
---

# RAGE — Receptor for Advanced Glycation End Products

A 404-aa pattern-recognition receptor (gene: *AGER*) that binds an unusually wide range of ligands — [[advanced-glycation-end-products|AGEs]], S100/calgranulin family proteins, β-amyloid, [[hmgb1|HMGB1]] (reduced form per Shin 2025), and other DAMPs — and transduces sustained NF-κB and JAK/STAT activation in response. Highly expressed in lung (alveolar epithelium baseline-high — atypical for a pattern-recognition receptor), but upregulated on macrophages, endothelial cells, vascular smooth-muscle cells, microglia, and senescent cells under inflammatory/diabetic/aging conditions. **A central convergence node where AGE-driven (glycation), HMGB1-driven (DAMP/SASP), and S100-driven (inflammatory) signals all funnel into the same NF-κB-amplifying loop.**

The aging-relevant logic:

1. **AGE accumulation with age** drives RAGE engagement → chronic NF-κB → endothelial dysfunction, vascular stiffening, microvascular complications. See [[advanced-glycation-end-products]] and [[glucosepane]].
2. **Reduced HMGB1 (ReHMGB1) from senescent cells** drives RAGE engagement → senescence propagation (per [[shin-2025-rehmgb1-paracrine-senescence]]). The recipient cell's RAGE → JAK2 → STAT1 + PI3K-AKT/NF-κB p65 activation drives SASP gene expression and cell-cycle arrest. Shin 2025 confirmed this by Western blot (ReHMGB1 increased RAGE protein, p-AKT, p-NF-κB p65, p-JAK2, p-STAT1 vs OxHMGB1 or PBS; n = 3, p < 0.05 to < 0.01) and pharmacological rescue (**FPS-ZM1 at 100 nM** RAGE antagonist abrogated ReHMGB1-induced senescence; the **JAK2 inhibitor Momelotinib at 0.3 μM** also rescued).
3. **Receptor feed-forward.** RAGE is itself an NF-κB transcriptional target — engagement upregulates the receptor, amplifying responsiveness to ligand. This positive-feedback architecture distinguishes RAGE from most pattern-recognition receptors.

The result is that RAGE sits at a privileged position in inflammaging biology: a single receptor that integrates **glycation damage, sterile DAMP release, and SASP propagation**.

---

## Splice variants

- **Full-length membrane RAGE (mRAGE / flRAGE)** — canonical signaling form; 3 extracellular Ig-like domains (V, C1, C2), single transmembrane span, short cytoplasmic tail with diaphanous-1 binding site for downstream signaling.
- **Soluble RAGE (sRAGE)** — circulating decoy isoform lacking the transmembrane + cytoplasmic domain. Produced by alternative splicing (esRAGE / RAGE_v1) and by ADAM10/MMP9-mediated proteolytic cleavage of mRAGE. **Circulating sRAGE acts as a ligand sink** — higher sRAGE is generally protective against RAGE-driven pathology. sRAGE plasma levels are reduced in type 2 diabetes, cardiovascular disease, and Alzheimer's; some longevity cohorts show preserved sRAGE in centenarians. #gap/needs-replication

This dual-isoform architecture creates a natural therapeutic handle: rebalancing the mRAGE/sRAGE ratio toward sRAGE attenuates pathology. Recombinant sRAGE has been tested preclinically.

---

## Ligands

| Ligand class | Examples | Aging relevance |
|---|---|---|
| AGEs | CML-modified proteins, methylglyoxal-derived AGEs, [[glucosepane]] crosslinks | Diabetic complications; vascular aging; ECM stiffening |
| S100 / calgranulins | S100A8, S100A9 (calprotectin), S100B, S100A12 | Inflammaging; myeloid-driven sterile inflammation |
| HMGB1 (reduced) | [[hmgb1]] redox-state-selective per Shin 2025 | Senescence propagation; SASP amplification |
| β-amyloid | Aβ40, Aβ42 | Alzheimer's neurodegeneration |
| LPA / lysophosphatidic acid | LPA species | Lipid-driven RAGE activation; context-dependent |
| Lysophosphatidylcholine, oxidized phospholipids | oxLDL components | Atherogenesis |

The ligand promiscuity is structural — the V domain binds many different beta-sheet-rich or amyloid-like motifs.

---

## Downstream signaling

RAGE has no intrinsic kinase activity. Engagement of the cytoplasmic tail recruits:

- **Diaphanous-1 (DIAPH1)** — primary direct binding partner; required for downstream cytoskeletal + signaling responses.
- **TIRAP/MyD88** — couples to NF-κB activation.
- **PKC** isoforms, Rac1, Cdc42 — cytoskeletal + ROS-generating arms.
- **JAK2/STAT3** — direct coupling reported in some contexts; canonical in the Shin 2025 ReHMGB1 → JAK/STAT senescence axis.

Net output: **persistent NF-κB activation + ROS generation + JAK/STAT activation**, with cytoskeletal remodeling.

---

## Druggability

`druggability-tier: 2` — high-quality probes exist; one failed Phase 3 (Alzheimer's); no aging-indication trial:

- **Azeliragon (TTP488)** — small-molecule RAGE antagonist; Phase 3 STEADFAST trial in mild Alzheimer's disease **failed** for primary efficacy endpoint (2018). Now in subgroup-targeted Phase 3 (diabetic AD patients). Probes the receptor but the Alzheimer's failure tempers enthusiasm for the AGE-RAGE-amyloid mechanism.
- **FPS-ZM1** — research-grade RAGE antagonist (rodent BBB-penetrant); widely used in mechanism studies.
- **Soluble RAGE (sRAGE) decoy** — recombinant; preclinical.
- **Anti-RAGE monoclonal antibodies** — preclinical (e.g., XT-M4).
- **DIAPH1 disruption** — emerging strategy from the Schmidt lab; targets the cytoplasmic-tail / DIAPH1 interface; preclinical only.

Aging-context tier reflects the lack of an aging-validated clinical drug despite multiple advanced-stage probes. Shin 2025 nominates RAGE blockade as a senomorphic strategy — repurposing of existing RAGE probes for an aging indication has not been attempted. #gap/needs-human-replication.

---

## Extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (RAGE, ligands, downstream all conserved) |
| Phenotype conserved in humans? | partial (azeliragon Phase 3 failure in AD; diabetic complications association well-established) |
| Replicated in humans? | partial (AGE-RAGE-vascular axis: yes via epidemiology; ReHMGB1-RAGE-senescence axis: no human data yet) |

---

## Cross-references

[[hmgb1]] · [[shin-2025-rehmgb1-paracrine-senescence]] · [[advanced-glycation-end-products]] · [[glucosepane]] · [[carboxymethyl-lysine]] · [[nf-kb]] · [[jak-stat-pathway]] · [[chronic-inflammation]] · [[cellular-senescence]] · [[altered-intercellular-communication]] · [[sasp]]
