---
type: protein
aliases: [MB21D1, cyclic GMP-AMP synthase, C6orf150, h-cGAS]
uniprot: Q8N884
ncbi-gene: 115004
hgnc: 21367
ensembl: ENSG00000164430
genage-id: null   # cGAS not found in GenAge human/model database as of 2026-05-12; #gap/needs-canonical-id
mouse-ortholog: Cgas
key-domains: [N-terminal-disordered-DNA-binding, nucleotidyltransferase-core, KKH-catalytic-loop, NLS-295-305]
key-ptms:
  - Ser305-phosphorylation (inhibitory; AKT/CDK1)
  - Ser435-phosphorylation (activating; PPP6C)
  - Thr68/Ser213-phosphorylation (inhibitory; PRKDC/DNA-PK)
  - Lys384/394/414-acetylation (inhibitory; reduces DNA-binding affinity)
  - Lys47/56/62/83-acetylation (activating; KAT5/Tip60)
  - Lys347-monoubiquitination (promotes oligomerization)
  - Cys404/405-palmitoylation (activating)
pathways: ["[[cgas-sting]]", "[[dna-damage-response]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[genomic-instability]]", "[[mitochondrial-dysfunction]]"]
sens-categories: []
known-interactors: ["[[sting]]", "[[tbk1]]", "[[vcp]]", "[[trim41]]"]
druggability-tier: 2
gtex-aging-correlation: "#gap/unsourced — GTEx CGAS expression-vs-age query not completed; populate per sops/finding-tissue-expression.md"
mr-causal-evidence: not-tested
caused-by:
  - cytosolic dsDNA accumulation (mtDNA leak, chromatin fragments, LINE-1 cDNA)
  - [[mitochondrial-dysfunction]]
  - [[cellular-senescence]]
  - [[genomic-instability]]
causes:
  - "[[sting]] activation → TBK1 → IRF3 → type I IFN (Arm 1)"
  - "[[chronic-inflammation]] via SASP amplification"
  - HR suppression → reduced DSB fidelity (Arm 2 — chromatin-bound cGAS)
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 — canonical cGAS biology synthesized from UniProt Q8N884, NCBI Gene 115004, and training-era summaries of widely-cited primary sources (Sun 2013, Glück 2017, Liu 2018 — all archive-confirmed). NMR-cGAS-HR-suppression arm (Chen 2025 *Science*) cited from abstract only due to closed-access PDF (#gap/no-fulltext-access). Numerics may be approximate; verify before relying on quantitative claims.

# cGAS (CGAS / MB21D1)

Cyclic GMP-AMP synthase is the upstream cytosolic DNA sensor of the [[cgas-sting]] innate immune pathway, and — crucially for aging biology — **a dual-function protein**: in the cytoplasm it is a pro-inflammatory sentinel that drives [[chronic-inflammation|inflammaging]], while on chromatin it acts as a suppressor of homologous recombination (HR) that impairs genome maintenance. Both roles are relevant to aging, and the recently characterized chromatin-suppressor arm provides a mechanistic explanation for why the naked mole-rat — which has four amino-acid divergences in cGAS that alter this arm — enjoys exceptional genome stability.

## Identity

- **UniProt:** Q8N884 (CGAS_HUMAN); Swiss-Prot reviewed entry
- **Gene symbol:** CGAS; aliases MB21D1, C6orf150
- **NCBI Gene ID:** 115004 (confirmed 2026-05-12)
- **HGNC:** 21367 (confirmed 2026-05-12)
- **Ensembl:** ENSG00000164430 (confirmed 2026-05-12)
- **Chromosomal location:** 6q13
- **Mouse ortholog:** Cgas (one-to-one; mouse cGAS shares high sequence identity but has functional divergences in the chromatin-binding domain — see NMR comparison below)
- **Length:** 522 amino acids (canonical human isoform)

## Key functional domains

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal disordered region | 1–160 | Unspecific dsDNA-binding; liquid–liquid phase separation with DNA |
| DNA-binding region 1 | 173–215 | Sequence-independent dsDNA recognition |
| Nucleotidyltransferase core | ~160–490 | Catalytic activity; GTP + ATP → 2'3'-cGAMP |
| KKH catalytic loop | 427–429 | Active-site motif; conserved across cGAS orthologs |
| Nuclear localization signal (NLS) | 295–305 (KRKR-loop) | Required for chromatin association during S-phase |
| Nuclear export signal (NES) | 169–174 | Enables cytoplasmic translocation post-DNA-damage |
| DNA-binding region 2 | 384–407 | Second contact patch; cooperativity with region 1 |

cGAS requires a minimum ~20 bp dsDNA duplex for full catalytic activation; longer DNA triggers cooperative oligomerization and proportionally greater 2'3'-cGAMP output [^sun2013].

## Function: Arm 1 — cytosolic DNA sensor (canonical)

### Sensing mechanism

cGAS surveys the cytoplasm for double-stranded DNA. Under homeostasis, cytoplasmic dsDNA is essentially absent; its appearance signals danger (microbial invasion, organelle damage, genome instability). cGAS recognizes dsDNA in a sequence-independent manner — the relevant features are length (≥20 bp for minimal activation) and the double-stranded configuration [^sun2013].

Upon dsDNA binding, cGAS undergoes a conformational change that repositions the active site, enabling ATP and GTP to be cyclized into **2'3'-cGAMP** — cyclic GMP-AMP with a non-canonical 2'–5'/3'–5' phosphodiester bond that gives it higher STING-binding affinity than bacterial cyclic dinucleotides [^sun2013].

### Output: STING → TBK1 → IRF3 / NF-κB

2'3'-cGAMP diffuses to the ER membrane, where it binds and activates **[[sting]]** (TMEM173). Downstream signaling proceeds through **[[tbk1]]** → IRF3 (type I IFN transcription) and NF-κB (pro-inflammatory cytokines including IL-6, TNF-α, CXCL10, IL-1β). Full pathway architecture is documented on [[cgas-sting]].

### Aging-relevant cytosolic DNA sources

| Source | Aging context |
|---|---|
| Mitochondrial DNA (mtDNA) | Leaked from damaged mitochondria during MOMP sub-threshold events; increases with [[mitochondrial-dysfunction]] |
| Cytosolic chromatin fragments (CCFs) | Released from nuclei of senescent cells via lamin B1 loss and nuclear envelope disruption [^gluck2017] |
| Micronuclei contents | Chromosome mis-segregation products that rupture spontaneously in aged cells |
| LINE-1 reverse-transcribed cDNA | Retrotransposon reactivation due to epigenetic derepression in aged tissues — cytosolic ssDNA/dsDNA hybrids activate cGAS |

Glück et al. 2017 established that cGAS senses CCFs arising from lamin B1 degradation in senescent cells, activating cGAS-STING → SASP cytokines and IFN-I signaling across multiple senescence triggers (oxidative stress, irradiation, oncogene activation) in both human fibroblasts and mouse in vivo models [^gluck2017]. This creates a feed-forward loop: DNA damage → senescence → CCF leakage → cGAS-STING → SASP → paracrine senescence in neighboring cells.

The mtDNA-to-cGAS link is supported by Vizioli et al. 2020, demonstrating that mitochondria-to-nucleus retrograde signaling drives cytoplasmic chromatin formation and cGAS-mediated inflammation during senescence [^vizioli2020].

## Function: Arm 2 — chromatin-bound HR suppressor (recently established)

### Nuclear localization and chromatin tethering

Although classically described as a cytoplasmic protein, cGAS is constitutively present in the nucleus of proliferating cells, where it associates with chromatin — particularly centromeric satellite repeats and LINE elements — via its NLS (Lys295–Lys298 region). In this nuclear compartment, cGAS is normally held inactive by tight chromatin binding, which physically occludes DNA from accessing the catalytic site [^liu2018].

### Suppression of homologous recombination

Liu et al. 2018 (*Nature*, 611 citations) established that **nuclear cGAS suppresses DSB repair by homologous recombination** and that this activity is separable from its cytoplasmic sensing function [^liu2018]. Chromatin-bound cGAS restricts the access of HR effectors to double-strand break (DSB) sites, thereby reducing repair fidelity. In cell and mouse tumor models, nuclear cGAS deletion enhanced HR and reduced tumorigenesis. This paradoxically makes cGAS — a protein studied primarily as an antiviral innate immune sensor — also a **brake on genome maintenance**.

### Chen 2025: TRIM41–P97 eviction and FANCI–RAD50 interference

The molecular mechanism of chromatin-bound cGAS's HR-suppressive function was substantially clarified by Chen et al. 2025 (*Science*), which used the naked mole-rat as a comparative model [^chen2025]:

1. **Eviction mechanism in WT mammals.** Upon DNA damage, cGAS is evicted from chromatin via a two-step process: **TRIM41** (a RING E3 ubiquitin ligase) ubiquitinates cGAS at chromatin damage sites, targeting it for extraction by the **P97/VCP segregase** (AAA-ATPase). This ordered eviction clears cGAS from DSB repair foci.

2. **Why eviction matters.** When cGAS is cleared, the FANCI–RAD50 interaction at DSB sites is restored, enabling productive HR. Chromatin-bound (pre-eviction) cGAS physically limits the FANCI–RAD50 proximity required for HR initiation.

3. **Naked mole-rat (NMR) divergence.** NMR cGAS carries four amino-acid substitutions that weaken both TRIM41-mediated ubiquitination and P97 interaction, resulting in **prolonged chromatin retention** of NMR cGAS after DNA damage. This extended residency paradoxically potentiates HR by a mechanism not yet fully resolved (the Chen 2025 abstract implies that prolonged, correctly-positioned NMR cGAS at damage foci facilitates rather than suppresses FANCI–RAD50 interaction — possibly through a different surface interaction geometry than in human/mouse cGAS). #gap/needs-replication — full mechanistic model requires closed-access PDF verification.

**Important caveat:** Chen 2025 is closed-access; the above mechanistic description is derived from the published abstract and is not verified against the full-text Methods and Results. Quantitative claims (n, p-values, lifespan extension data) are NOT stated here. #gap/no-fulltext-access

## In aging: the dual-burden model

cGAS imposes a **dual aging burden** in humans and mice that is absent (or mitigated) in the naked mole-rat:

| Role | Direction in aging | Mechanism | Hallmark |
|---|---|---|---|
| Arm 1: cytosolic sensor | Pro-inflammatory (amplifies with age) | More cytosolic dsDNA with age → more cGAS-STING activation → SASP amplification, IFN-I elevation | [[chronic-inflammation]], [[cellular-senescence]] |
| Arm 2: chromatin-bound HR suppressor | Pro-genomic instability (chronic brake on repair) | Nuclear cGAS occupancy limits FANCI–RAD50 interaction → reduced HR fidelity at DSBs | [[genomic-instability]] |

These arms are not fully independent: accumulated genomic instability (Arm 2 consequence) generates more cytosolic DNA (Arm 1 input), and the resulting inflammation (Arm 1 output) accelerates mitochondrial dysfunction, which generates more mtDNA (Arm 1 input again). The circuit is self-reinforcing.

The NMR has evolutionarily addressed the Arm 2 problem via cGAS sequence divergence. Human/mouse cGAS has not. This cross-species contrast suggests the Arm 2 burden is not a fixed constraint of innate immune architecture but a tunable parameter — with potential therapeutic implications [^chen2025].

| Dimension | Status | Notes |
|---|---|---|
| Arm 1 (sensing) conserved in humans? | yes | cGAS-STING fully functional in human cells; UniProt confirms |
| Arm 2 (HR suppression) conserved in humans? | yes | Liu 2018 demonstrates in human cell lines |
| NMR-cGAS Arm 2 divergence replicated? | partial | Chen 2025 primary; independent replication pending #gap/needs-replication |
| Aged-tissue cGAS-STING activation in humans? | partial | Indirect evidence via plasma IFN-I signatures; direct tissue protein-level data limited #gap/needs-human-replication |

## Post-translational regulation

cGAS activity is tightly regulated at multiple levels to prevent autoimmunity from self-DNA sensing:

- **Inhibitory phosphorylation** (Ser305 by AKT; Thr68/Ser213 by DNA-PK/PRKDC) — reduces DNA-binding affinity; enriched in proliferating cells to avoid aberrant sensing of nuclear/replication DNA
- **Inhibitory acetylation** (Lys384, 394, 414) — blocks DNA binding; established histone-deacetylase-reversible mechanism
- **Activating acetylation** (Lys47, 56, 62, 83 by KAT5/Tip60) — promotes catalytic activity; coupled to DNA-damage signaling
- **Sumoylation** (Lys347, 384, 394) — inhibitory; blocks DNA binding; part of the nuclear-inactivation mechanism
- **Palmitoylation** (Cys404, Cys405 — activating; Cys474 — inhibitory) — controls membrane association and signaling competence
- **Chromatin binding** — direct nucleosome interaction occludes the DNA-binding groove, inhibiting enzymatic activity in the nucleus (preventing spurious nuclear cGAMP production); this tethering is released at DSB sites by the TRIM41–P97 axis [^chen2025]

## Druggability

**Druggability tier: 2** (high-quality probes exist; no FDA-approved drug for any indication; no aging-validated inhibitor).

Aging-context rationale: Several selective, cell-active cGAS small-molecule inhibitors are established tool compounds:
- **RU.521** — potent non-nucleotide competitive inhibitor of the catalytic site; widely used in murine autoimmune models
- **CU-76** — structurally distinct cGAS inhibitor; activity in mouse AGS-like models
- **G140** and related scaffolds — reported in late-preclinical-stage programs for lupus/interferon-opathy indications

As of 2026-05-12 no cGAS inhibitor has entered a registered clinical trial (ClinicalTrials.gov query returned 0 active/recruiting cGAS-inhibitor trials). Ongoing pharmaceutical programs for Aicardi-Goutières syndrome (AGS) and systemic lupus erythematosus are tracking toward IND-enabling studies but have not yet dosed humans [^tonduti2020]. Therefore the aging-context tier is **2**: clinical-grade probes exist, but no approved drug and no aging-indication trial.

A key therapeutic design challenge: pan-cGAS inhibition would disable both Arm 1 (desirable for anti-inflammaging) and antiviral defense (undesirable in elderly immunosenescent hosts). Selective approaches — enhancing Arm 2 eviction (TRIM41 activation, P97 pathway potentiation, or AAV-delivered NMR-cGAS 4-AA variant) — would specifically address the HR-suppressor burden without compromising Arm 1 antiviral capacity. These strategies remain hypothetical. #gap/needs-human-replication

## Key interactors

- **[[sting]]** — primary effector; cGAS-synthesized 2'3'-cGAMP binds ER-resident STING, activating downstream kinase cascade
- **[[tbk1]]** — third effector (after STING); phosphorylates IRF3 and NF-κB pathway components
- [[trim41]] — E3 ubiquitin ligase mediating chromatin eviction in response to DNA damage (Chen 2025) [^chen2025]
- [[vcp]] (P97) — AAA-ATPase segregase; pulls ubiquitinated cGAS off chromatin after TRIM41-mediated marking [^chen2025]
- **FANCI / RAD50** — HR effectors whose interaction is limited by chromatin-bound cGAS; restored when cGAS is evicted [^chen2025]
- **KAT5 (Tip60)** — acetylates activating lysines (Lys47/56/62/83) in response to DNA damage, coupling genotoxic sensing to cGAS activation
- **DNA-PK (PRKDC)** — phosphorylates Thr68/Ser213 to inhibit cGAS during normal S-phase replication, preventing cytoplasmic DNA sensing from replication intermediates

## Pathway membership

- **[[cgas-sting]]** — cGAS is the pathway's initiating sensor; see pathway page for full architecture
- **[[dna-damage-response]]** — both as a responder (activated by DSBs) and as a modulator (chromatin-bound cGAS limits HR)

## Recency search summary

PubMed recency searches conducted 2026-05-12:
- "cGAS aging senescence inflammaging" (2024–2026): 23 hits; triaged top results. Highest-relevance recent: Salminen et al. 2025 *Biogerontology* (PMID 41241888; review of cGAS-STING in senescent cells and immune remodeling) [^salminen2025] — integrated as a 2025 review citation.
- "cGAS DNA repair homologous recombination aging" (2024–2026): 1 hit (PMID 39515594; nanoplastic-induced senescence via cGAS-STING — adjacent but not directly integrated).
- Chen 2025 *Science* (PMID 41066557; DOI 10.1126/science.adp5056) confirmed via archive — closed access, abstract-only sourcing applied throughout.

The Chen 2025 finding represents a significant post-2023 advance that is directly counter to the prior simplified view of cGAS as purely a pro-inflammatory cytoplasmic sensor. The dual-arm framing is the schema-critical update for this page.

## Limitations and gaps

- **GenAge entry absent**: CGAS not found in GenAge human or model-organism database (2026-05-12 search). May not qualify under GenAge inclusion criteria (requires demonstrated lifespan effect in a controlled experiment). #gap/needs-canonical-id
- **GTEx aging correlation unquantified**: CGAS expression trajectory across tissue-age bins not queried from GTEx v2 API. Populate per `sops/finding-tissue-expression.md`. #gap/unsourced
- **MR evidence absent**: no Mendelian randomization study for CGAS identified; no published GWAS instruments described as of 2026. `mr-causal-evidence: not-tested`.
- **Chen 2025 full-text access blocked**: the chromatin-retention mechanistic model (TRIM41 → ubiquitination → P97 eviction → FANCI–RAD50 restoration) is from the abstract only. Mechanistic detail claimed for NMR cGAS four-AA variant should be verified against full Methods before relying on specific residue-level claims. #gap/no-fulltext-access
- **Liu 2018 closed-access**: nuclear-cGAS HR-suppression paper (Nature, not_oa in archive). Quantitative details of HR suppression magnitude should be verified against the full text. #gap/no-fulltext-access
- **De Cecco LINE-1 citation**: a paper by De Cecco and Sedivy group linking LINE-1 retrotransposon reactivation to cGAS-STING in aging is well-cited in the secondary literature but the specific DOI could not be confirmed via Crossref/PubMed during this seeding pass. Cited descriptively on the [[cgas-sting]] pathway page without a footnote. #gap/unsourced — needs DOI confirmation before adding a footnote here.
- **Human in-vivo aged-tissue data limited**: direct measurement of cGAS-STING activation in human aged tissues at the protein level is sparse; most data come from cell models or mouse aging experiments.
- **Therapeutic strategies (Arm 2 enhancement) are entirely theoretical**: TRIM41-agonist, P97-pathway-potentiation, and AAV-NMR-cGAS approaches have no published preclinical data as of 2026-05-12. #gap/needs-human-replication

## Footnotes

[^sun2013]: [[studies/sun-2013-cgas-cytosolic-dna-sensor]] · n=NR · in-vitro+in-vivo · *Science* 2013 · doi:10.1126/science.1232458 · 4,437 citations · local PDF confirmed in archive

[^gluck2017]: [[studies/gluck-2017-cgas-senescence-ccf]] · n=NR · in-vitro (human WI-38 fibroblasts) + in-vivo (mouse) · *Nature Cell Biology* 2017 · doi:10.1038/ncb3586 · 1,053 citations · local PDF confirmed in archive

[^liu2018]: [[studies/liu-2018-nuclear-cgas-hr-suppression]] · n=NR · in-vitro+in-vivo · *Nature* 2018 · doi:10.1038/s41586-018-0629-6 · 611 citations · not_oa in archive · #gap/no-fulltext-access

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · n=NR · in-vitro+in-vivo · *Science* 2025 · doi:10.1126/science.adp5056 · not_oa in archive · **abstract-only sourcing** · #gap/no-fulltext-access

[^vizioli2020]: doi:10.1101/gad.331272.119 · Vizioli MG et al. · *Genes & Development* 2020 · in-vitro+in-vivo (mouse) · mitochondria-to-nucleus retrograde signaling drives cytoplasmic chromatin and cGAS-mediated inflammation in senescence · DOI lookup pending

[^salminen2025]: doi:10.1007/s10522-025-10353-5 · Salminen A, Kaarniranta K, Kauppinen A · *Biogerontology* 2025 · review · cGAS-STING in senescent cells and immune system remodeling in aging · DOI lookup pending

[^tonduti2020]: doi:10.1080/1744666X.2019.1707663 · Tonduti D et al. · *Expert Review of Clinical Immunology* 2020 · review · cGAS-STING inhibitors in Aicardi-Goutières syndrome pipeline; near-clinical development stage overview
