---
type: protein
aliases: [TRIM41, RNF210, "Ring finger protein 210", "tripartite motif-containing protein 41"]
uniprot: Q8WV44
ncbi-gene: 90933
hgnc: 19013
ensembl: ENSG00000146063
genage-id: null
pathways: ["[[cgas-sting]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]", "[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[cgas]]", "[[vcp]]", "[[bcl10]]"]
key-domains: [RING-zinc-finger, B-box-zinc-finger, coiled-coil, B30.2-SPRY]
key-ptms: [Thr84-phosphorylation, Ser447-phosphorylation, Lys256-SUMOylation, auto-ubiquitination]
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: [chromatin-bound-substrate-binding, DNA-damage-signaling]
causes: [cGAS-chromatin-eviction, substrate-ubiquitination-and-degradation]
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 — synthesized from canonical UniProt/NCBI metadata (Q8WV44, HGNC:19013 confirmed) and the Chen 2025 *Science* abstract (#gap/no-fulltext-access for that paper). The cGAS chromatin-eviction mechanistic model is cited from Chen 2025 abstract only; residue-level claims should be verified against the full text before relying on them. Aging-context relevance is largely indirect via cGAS regulation.

# TRIM41

TRIM41 (Tripartite Motif Containing 41; also annotated as RNF210) is a RING-type E3 ubiquitin ligase that mediates innate antiviral defense, cell-cycle regulation, and genomic stability by ubiquitinating diverse substrates for proteasomal degradation. Its newly characterized role — ubiquitinating chromatin-bound cGAS to license its eviction by the P97/VCP segregase — places it at the intersection of the cGAS-mediated HR-suppression axis and DNA double-strand break (DSB) repair, with direct implications for understanding the exceptional genomic stability of the naked mole-rat (NMR) and for potential pro-longevity interventions.

## Identity

- **UniProt:** Q8WV44 (TRIM41_HUMAN)
- **NCBI Gene ID:** 90933
- **HGNC:** 19013 (symbol: TRIM41)
- **Ensembl:** ENSG00000146063
- **Chromosome:** 5q35.3
- **Length:** 630 amino acids (canonical isoform; at least one alternative transcript, NM_201627.3 / NP_963921.1, is annotated)
- **No GenAge entry** — TRIM41 is not in the HAGR GenAge curated aging gene set as of 2026-05-12; aging relevance is established via Chen 2025 and Zhen 2023 but not yet catalogued in GenAge. #gap/needs-canonical-id

## Architecture

TRIM41 follows the canonical **TRIM-family tripartite motif** architecture, with a C-terminal substrate-recognition module:

| Domain | Residues (approx.) | Function |
|---|---|---|
| RING zinc finger (degenerate) | 20–61 | E3 ubiquitin ligase catalytic activity; recruits E2 conjugating enzyme |
| B-box zinc finger | 222–263 | Protein–protein interaction; modulates self-association and substrate access |
| Coiled-coil | 264–373 | Homo- and heterodimerization; TRIM-family member interaction |
| B30.2 / SPRY domain | 413–630 | Substrate-recognition module; antiviral nucleoprotein binding; cGAS interaction surface |

The RING domain is classified as "degenerate" — it retains catalytic competence for ubiquitin transfer but diverges slightly in primary sequence from the canonical RING consensus. The B30.2/SPRY domain is the primary determinant of substrate specificity and is common across the ~70-member TRIM family.

**Key PTMs:**
- Thr84 and Ser447 phosphorylation — regulatory; kinases not fully characterized #gap/no-mechanism
- Lys256 SUMOylation — potential nuclear localization / activity modulation #gap/no-mechanism
- Auto-ubiquitination — a hallmark of active RING E3s; regulates TRIM41 turnover

**Subcellular localization:** Both cytoplasm and nucleus, consistent with TRIM41 acting on both cytosolic substrates (viral nucleoproteins, PKC) and nuclear substrates (cGAS at damage foci, LINE-1 ORF2p).

## Function and substrate spectrum

TRIM41 operates across at least three functional contexts:

### 1. Antiviral innate immune defense

TRIM41 directly binds the nucleoproteins (NP) of influenza A virus and vesicular stomatitis virus (VSV), ubiquitinating them for proteasomal degradation [^trim41-antiviral-refs]. It also activates the innate antiviral response through monoubiquitination of **cGAS** and polyubiquitination of **BCL10**, facilitating NF-κB and IRF3 pathway activation — roles distinct from the DNA-damage-context cGAS ubiquitination described below.

### 2. Cell-cycle and signaling regulation

TRIM41 has been reported to ubiquitinate protein kinase C (PKC) isoforms, Pin1, STAT2, and ZSCAN21 in the literature, though the aging relevance of these substrates is not established. TOP3B is listed as an interactor in the UniProt entry [^uniprot-q8wv44].

### 3. Genomic stability: L1 retrotransposon suppression (Zhen et al. 2023)

Nuclear cGAS suppresses LINE-1 (L1) retrotransposition by scaffolding TRIM41-mediated ubiquitination of the L1-encoded **ORF2p** reverse transcriptase, targeting it for degradation [^zhen2023]. DNA damage activates CHK2, which phosphorylates cGAS at specific serine residues, strengthening the cGAS–TRIM41 interaction and enhancing ORF2p clearance. This axis was shown to operate in **senescent cells** following DNA damage — directly connecting TRIM41 to the aging-relevant retrotransposon reactivation phenotype. Several cancer-associated cGAS mutations that disrupt this TRIM41-interaction surface are described in Zhen et al. 2023.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TRIM41 is a human protein; the cGAS–TRIM41–ORF2p axis described in human cells |
| Phenotype conserved in mammals? | yes | Senescent cell data in Zhen 2023; NMR comparative data in Chen 2025 |
| Replicated in humans in vivo? | no | Both key studies are cell-line / mouse / NMR data #gap/needs-human-replication |

## In the cGAS chromatin-eviction cycle (Chen et al. 2025)

The primary aging-relevant function of TRIM41 is its role in the **cGAS chromatin eviction–HR suppression axis**, characterized by Chen et al. 2025 in *Science* [^chen2025].

**The eviction cycle:**

1. After DSB induction, human/mouse cGAS binds chromatin at or near damage foci.
2. TRIM41 ubiquitinates chromatin-bound cGAS, marking it for recognition by the **P97/VCP AAA-ATPase segregase**.
3. P97 extracts ubiquitinated cGAS from chromatin, clearing it from the DSB repair site.
4. Premature eviction of cGAS disrupts its interaction with the HR repair proteins **FANCI** and **RAD50**, suppressing HR efficiency.

**NMR divergence and its implications:**

NMR cGAS carries four amino-acid substitutions that reduce TRIM41-mediated ubiquitination and weaken P97 interaction. As a result, NMR cGAS is retained on chromatin longer after DNA damage, which paradoxically potentiates HR — presumably because extended, correctly-positioned NMR cGAS at damage foci facilitates rather than suppresses the FANCI–RAD50 scaffold [^chen2025]. Chen et al. 2025 report that introducing these four NMR-specific changes into human/mouse cGAS reproduces the HR-enhancement phenotype, and that cells and tissues expressing NMR-variant cGAS show delayed aging hallmarks and extended lifespan in model systems.

**Therapeutic implication of TRIM41 inhibition:**

If TRIM41 is the enzyme that prematurely removes cGAS from chromatin in human cells, then a selective TRIM41 inhibitor could mimic the NMR phenotype — keeping cGAS on chromatin longer, potentiating HR, and reducing the accumulation of DSB-derived mutations over time. This is a conceptually attractive but entirely pre-proof-of-concept strategy [^chen2025]. #gap/needs-human-replication #gap/no-mechanism — the specific lysine residue(s) on cGAS ubiquitinated by TRIM41 are not specified in the Chen 2025 abstract and require full-text verification before structure-based drug design could proceed.

**Important caveat:** TRIM41 also monoubiquitinates cGAS in the antiviral context (activating innate immunity). A pan-TRIM41 inhibitor might therefore impair antiviral cGAS signaling. Selective targeting of the chromatin-eviction function (vs. antiviral-activation function) would require understanding which E2 enzyme, which ubiquitin chain type, and which cGAS surface each involves. This selectivity challenge is unresolved. #gap/no-mechanism

## In aging

TRIM41 is not an established aging gene (no GenAge entry, no classical longevity-phenotype mouse knockout literature). Its aging relevance is currently grounded in two lines of evidence:

**1. Genomic stability maintenance via L1 suppression (Zhen 2023):** In senescent cells, where LINE-1 retrotransposons reactivate and contribute to cGAS-STING-driven [[chronic-inflammation|inflammaging]], the nuclear cGAS–TRIM41 axis restricts ORF2p activity [^zhen2023]. Loss of this function (e.g., via cancer-associated cGAS mutations that disrupt TRIM41 binding) would be expected to increase retrotransposon-derived cytosolic DNA, amplifying the pro-inflammatory [[cgas-sting]] signal. This places TRIM41 as a protective factor against one driver of inflammaging.

**2. cGAS chromatin-eviction gating of HR quality (Chen 2025):** By determining how quickly cGAS vacates DSB foci, TRIM41 controls the temporal window during which cGAS can scaffold HR repair factors. In species with longer lifespans (NMR), this window is extended via evolution; in humans and mice, the TRIM41-driven eviction appears premature relative to the NMR optimum [^chen2025]. Whether TRIM41 expression or activity changes with age in human tissues is unknown. #gap/needs-human-replication

**Hallmark linkage:**
- **[[genomic-instability]]** — via both the HR-suppression (Chen 2025) and L1-retrotransposon-restriction (Zhen 2023) functions
- **[[chronic-inflammation]]** — indirectly, via modulating cGAS chromatin-retention and its downstream STING/NF-κB outputs

## Pathway membership

- **[[cgas-sting]]** — TRIM41 is a key regulator of cGAS subcellular localization and activity state in the DNA-damage context
- **[[dna-damage-response]]** — participates in DSB-site cGAS clearance that determines HR vs NHEJ pathway balance

## Key interactors

- **[[cgas]]** — primary substrate in the DNA-damage and antiviral contexts; TRIM41 ubiquitinates cGAS at chromatin damage foci (Chen 2025) and in the antiviral-activation context (UniProt annotation)
- **[[vcp]]** (P97) — the downstream AAA-ATPase that extracts TRIM41-ubiquitinated cGAS from chromatin; part of the same eviction complex
- **[[rad50]] / FANCI** — HR repair proteins whose access to DSBs is gated by the TRIM41-mediated cGAS eviction cycle; not direct TRIM41 interactors but downstream functional effectors

## Druggability

**Tier 3 (predicted druggable; no clinical drug or aging-validated probe exists).** TRIM41 is a RING-type E3 ubiquitin ligase. E3 ligases as a class have been historically considered undruggable (large, flat interaction surfaces), but the emergence of the **PROTAC / molecular glue** platform has validated RING E3s (including CRBN, VHL, MDM2) as pharmacological targets. Small-molecule E3 inhibitors (catalytic-activity inhibitors) targeting the RING–E2 interface also exist for several family members.

For TRIM41 specifically:
- No published small-molecule TRIM41 inhibitor
- No clinical trial involving TRIM41 as a target
- No probe compound listed in ChEMBL or SGC portal as of seeding
- Structure-based design is feasible but requires knowing which cGAS lysine residue is targeted (gap)

A TRIM41 inhibitor selective for the chromatin-eviction context (sparing antiviral E3 activity) would be the pharmacologically meaningful tool compound, but this selectivity problem is unsolved. #gap/no-mechanism

**Aging-context druggability rationale:** Tier 3 reflects the class-level tractability of RING E3s via PROTAC/molecular-glue platforms, offset by the absence of any validated TRIM41 probe and the unresolved selectivity challenge. Strict Open Targets tier 1 (approved drug for aging indication) does not apply.

## Knowledge gaps

1. **Ubiquitination site on cGAS** — which specific lysine residue(s) does TRIM41 target on chromatin-bound cGAS? Required for structure-based inhibitor design. Abstract of Chen 2025 does not specify; full-text access blocked. #gap/no-fulltext-access #gap/no-mechanism
2. **Age-dependent expression** — does TRIM41 protein abundance or activity change in human tissues with age? No GTEx aging-correlation data retrieved. #gap/needs-human-replication
3. **Functional selectivity** — how do the chromatin-eviction ubiquitination and antiviral-monoubiquitination functions of TRIM41 differ biochemically? Different E2 partners? Different chain topologies? Required to design a function-selective inhibitor. #gap/no-mechanism
4. **In vivo genomic-stability phenotype** — does TRIM41 knockout/knockdown in mammalian cells or mice increase DSB mutagenesis rates or accelerate aging phenotypes? No published knockout mouse model described. #gap/needs-replication
5. **TRIM41 in the DDR kinase cascade** — CHK2 phosphorylates cGAS to strengthen the cGAS–TRIM41 interaction (Zhen 2023); does ATM/ATR activity also directly regulate TRIM41? #gap/no-mechanism
6. **Other DDR-relevant substrates** — does TRIM41 have additional DNA-damage-response substrates beyond cGAS and ORF2p? #gap/unsourced

## Footnotes

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · *Science* 2025 · doi:10.1126/science.adp5056 · PMID:41066557 · in-vivo + in-vitro · model: naked mole-rat / human/mouse cell lines · **#gap/no-fulltext-access** (closed-access; mechanistic detail cited from abstract only)

[^zhen2023]: [[studies/zhen-2023-trim41-cgas-l1]] · n=6 retrotransposition assay / n=9 replicates (3 mice/group) in-vivo · in-vitro+in-vivo · doi:10.1038/s41467-023-43001-y · PMID:38086852 · PMC:PMC10716122 · Zhen Z et al. · *Nature Communications* 2023 · model: HeLa (etoposide SIPS), IMR90-hTERT + HCA2-hTERT (X-ray 15 Gy SIPS), *Cgas*-KO mice (3–4 mo; kidney + brain) · GOLD OA · establishes TRIM41 as the E3 ligase for cGAS-scaffolded ORF2p ubiquitination in senescent cells after DNA damage

[^trim41-antiviral-refs]: UniProt Q8WV44 cites PubMed:28169297 (Bhatt 2017), PubMed:29899090, and PubMed:31979016 for the nucleoprotein-targeting antiviral function · review-level; cited for mechanism, not effect size

[^uniprot-q8wv44]: UniProt Q8WV44 (TRIM41_HUMAN), accessed 2026-05-12 · canonical source for domain architecture, PTMs, and subcellular location
