---
type: protein
aliases: [ATF-4, CREB-2, activating transcription factor 4, TaxREB67]
uniprot: P18848
ncbi-gene: 468
hgnc: 786
ensembl: ENSG00000128272
genage-id: null
mouse-ortholog: Atf4
key-domains: [bZIP, basic-motif, leucine-zipper]
key-ptms: [Ser215-phosphorylation, Ser219-phosphorylation, Lys311-acetylation, Lys53-SUMOylation, Lys259-SUMOylation, PHD3-hydroxylation, SCF-BTRC-ubiquitination]
pathways: ["[[integrated-stress-response]]", "[[unfolded-protein-response]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[disabled-macroautophagy]]"]
sens-categories: []
known-interactors: ["[[eif2alpha]]", "[[perk]]", "[[chop]]", "[[atf3]]", "[[gadd34]]", "[[nrf2]]"]
complex-subunits: []
is-noncoding-rna: false
druggability-tier: null
caused-by: ["[[eif2alpha]]", "[[perk]]"]
causes: ["[[chop]]", "[[atf3]]", "[[gadd34]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 5 cited DOIs cross-checked via DOI lookup (Harding 2000-isr, Harding 2000-perk, Vattem 2004, Lu 2004, Krukowski 2020) — titles match cited author/year/topic. No local PDFs available. Broken wikilink [[perk-pathway]] → [[perk]] corrected during sweep. UniProt P18848 / NCBI 468 / HGNC 786 not re-checked against canonical databases."
---

# ATF4 (Activating Transcription Factor 4)

ATF4 is the master transcriptional effector of the [[integrated-stress-response]] (ISR): a 351-amino-acid bZIP transcription factor whose translation is **selectively upregulated** when global cap-dependent translation is suppressed by [[eif2alpha]] phosphorylation. Chronic or dysregulated ATF4 activity in aged brain is implicated in cognitive decline, and ATF4 hyperactivation in cancer underlies hypoxia tolerance and therapy resistance.

## Identity

- **UniProt:** P18848 (ATF4_HUMAN)
- **NCBI Gene:** 468
- **HGNC symbol:** ATF4 (HGNC:786)
- **Ensembl:** ENSG00000128272
- **Mouse ortholog:** Atf4 (one-to-one ortholog)
- **Length:** 351 amino acids (canonical isoform)
- **Other names:** CREB-2 (historical); TaxREB67 (HTLV-1 Tax-responsive element binding protein 67)
- **GenAge entry:** none identified (#gap/needs-canonical-id — confirm absence via GenAge human search)

## Key functional domains

- **bZIP domain** (residues ~278–341) — mediates sequence-specific DNA binding at CRE-like sites (consensus: 5'-GTGACGT[AC][AG]-3') and homo/heterodimerization with other bZIP family members (ATF3, CHOP/DDIT3, CEBPB, FOS, JUN)
- **Basic motif** (~280–300) — direct DNA contact
- **Leucine zipper** (~306–334) — dimerization interface
- No canonical activation domain of the acidic-blob type; transcriptional activation is context- and partner-dependent

## Translational regulation: the uORF mechanism

ATF4 mRNA carries an unusually structured 5' UTR with two upstream open reading frames (uORFs):

- **uORF1** (short, ~3 codons) — permits ribosome re-initiation at the downstream ORF after translation; acts as a positive regulatory element
- **uORF2** (overlapping with the ATF4 main ORF in frame position) — under normal ternary-complex-abundant conditions, ribosomes that translate uORF1, reload a new ternary complex quickly, and re-initiate at uORF2 instead of the ATF4 ORF; ATF4 protein is not produced

When [[eif2alpha]] is phosphorylated (by [[perk]], GCN2, HRI, or PKR), the ternary complex (eIF2-GTP-Met-tRNA) becomes limiting. Ribosomes that translate uORF1 then scan forward but cannot re-initiate at uORF2 because ternary complex reloading is slow; they bypass uORF2 and re-initiate at the ATF4 main ORF instead. The net result: **global protein synthesis falls, but ATF4 translation rises** [^harding2000-isr] [^vattem2004].

This mechanism is conserved from yeast (where the ortholog is GCN4, regulated by a four-uORF mechanism and GCN2) to mammals, and is the molecular basis for ISR selectivity.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes |

## ATF4 as ISR master effector

Once translated, ATF4 is a broadly acting transcription factor driving a gene-expression programme that — in the acute phase — is adaptive and pro-survival:

- **[[atf3]]** — a feedback repressor; ATF3 heterodimerizes with ATF4 and dampens ISR gene expression over time
- **[[chop]] (DDIT3)** — a bZIP/death domain TF; ATF4-CHOP heterodimer shifts the response toward apoptosis / terminal UPR when stress is unresolvable
- **[[gadd34]] (PPP1R15A)** — the p-eIF2α phosphatase regulatory subunit; ATF4-induced GADD34 recruits PP1 to dephosphorylate eIF2α, providing negative feedback and allowing translational recovery
- **Asparagine synthetase (ASNS)** — amino acid metabolic adaptation
- **Amino acid transporters** — SLC7A11 (xCT), SLC7A5 (LAT1), and related solute carriers; upregulated to increase amino acid import under nutrient stress
- **NRF2 (NFE2L2) targets** — indirect: ATF4 and NRF2 share target loci and interact at the AR-like element; oxidative stress coregulation [^lu2004]
- **Autophagy genes** — ATF4 has been reported to induce MAP1LC3B (LC3B) and other ATGs under ER stress, linking the ISR to [[autophagy]] #gap/needs-replication

The ATF4 transcriptional programme is transient by design: GADD34-mediated eIF2α dephosphorylation and ATF3-mediated repression together shut down ATF4 activity once stress resolves.

## Post-translational regulation

ATF4 protein stability is tightly controlled:

- **SCF(β-TrCP)** E3 ubiquitin ligase ubiquitinates ATF4 at a phosphodegron requiring sequential phosphorylation at Ser219 (by RSK) and Ser215 (by GSK3); proteasomal degradation under basal conditions keeps ATF4 low [^lu2004]
- **PHD3 (EGLN3)** hydroxylates ATF4 at Pro>XX (exact site under study), linking ATF4 stability to oxygen sensing; may contribute to hypoxia-induced ATF4 accumulation #gap/needs-replication
- **p300/EP300** acetylates Lys311, affecting transcriptional potency in a context-dependent manner
- SUMOylation at Lys53, Lys259, Lys267, Lys272 (multiple SUMO sites; functional significance of individual sites not fully resolved) #gap/unsourced — sites from UniProt P18848; primary citation for functional significance not confirmed

## Role in aging

### Chronic ISR activation and cognitive aging

In aged mammals, multiple stressors — accumulated unfolded proteins, mitochondrial dysfunction, oxidative stress, reduced proteostasis capacity — sustain low-grade eIF2α phosphorylation and thus chronically elevated ATF4 activity in post-mitotic neurons. This constitutive ISR activation is thought to impair long-term potentiation (LTP) and memory consolidation by suppressing overall protein synthesis required for synaptic plasticity.

**Evidence (mouse):**

Krukowski et al. 2020 administered ISRIB (ISR inhibitor, which reactivates eIF2B to restore ternary-complex levels despite p-eIF2α) to aged mice and observed reversal of age-related spatial and working memory deficits, with concurrent reduction of elevated ATF4 levels in aged brain tissue [^krukowski2020]. #gap/needs-replication — single study; ISRIB mechanism also involves eIF2B subunit stabilization independently of ATF4 per se.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ISR is highly conserved |
| Phenotype conserved in humans? | partial — age-related cognitive decline is universal, but role of ATF4 specifically is not directly shown in humans |
| Replicated in humans? | no — only mouse pharmacology; no human ATF4-cognitive-aging trial data |

#gap/needs-human-replication — Whether suppressing ATF4/ISR activity improves cognitive aging in humans is untested. ClinicalTrials.gov search for ISRIB or ISR inhibitors in aging/cognitive decline returned no completed trials as of 2026-05.

### ATF4 knockdown in aged neurons

ATF4 knockdown (shRNA/antisense in aged-brain mouse models) produces partial rescue of synaptic and memory phenotypes in some reports #gap/unsourced — specific DOI not confirmed; tag for verification. The claim is mechanistically coherent but needs a primary citation.

## Role in disease

### Cancer: drug resistance and hypoxia tolerance

ATF4 is hyperactivated in many solid tumors via:

1. **Hypoxia** — tumor hypoxia activates HIF-1α-independent eIF2α phosphorylation (HRI branch) and may stabilize ATF4 via PHD3 inhibition
2. **Nutrient deprivation** — GCN2-mediated eIF2α phosphorylation under amino acid scarcity (common in nutrient-poor tumor microenvironments) drives ATF4-dependent amino acid transporter induction (SLC7A11, SLC7A5), enabling survival
3. **Chemotherapy stress** — many genotoxic agents trigger ISR via PERK or HRI, transiently inducing ATF4 and its pro-survival gene targets

ATF4-driven upregulation of ASNS confers asparagine self-sufficiency, enabling resistance to L-asparaginase in ALL and other malignancies #gap/unsourced.

### UPR-PERK arm coordination

ATF4 is the sole transcriptional output of the [[perk]] arm of the [[unfolded-protein-response]]. The three UPR branches (PERK/ATF4, IRE1/XBP1, ATF6) converge on overlapping but distinct target genes; ATF4 specifically drives the CHOP-dependent apoptotic output when ER stress is unresolvable. Cells with hypomorphic PERK show enhanced ER stress sensitivity, confirming the ATF4 axis is required for adaptive translational regulation [^harding2000-perk].

## Pathway membership

- [[integrated-stress-response]] — central effector; sole transcription factor selectively translated under p-eIF2α
- [[unfolded-protein-response]] — PERK arm output
- [[perk]] — kinase upstream of p-eIF2α → ATF4 axis (PERK protein page)
- [[autophagy]] — indirect; ATF4 may induce autophagy genes under prolonged ISR

## Key interactors

- [[eif2alpha]] — upstream; when phosphorylated, licenses ATF4 translation via uORF bypass
- [[perk]] — upstream eIF2α kinase for ER stress; one of four mammalian eIF2α kinases
- [[chop]] — heterodimer partner; ATF4-CHOP drives apoptotic gene expression
- [[atf3]] — heterodimer partner and feedback repressor; dampens ATF4 targets
- [[gadd34]] — ATF4 transcriptional target; GADD34-PP1 dephosphorylates p-eIF2α (negative feedback)
- [[nrf2]] — co-regulator at overlapping oxidative-stress response elements

## Pharmacological context

There is no approved drug targeting ATF4 directly. Indirect modulators include:

- **ISRIB** (integrated stress response inhibitor) — research tool; stabilizes eIF2B, restores ternary complex and suppresses ATF4 induction; demonstrates cognitive rescue in aged mice [^krukowski2020]; no human trial data
- **Salubrinal / Guanabenz / Sephin1** — pharmacological eIF2α phosphatase inhibitors (block GADD34-PP1); prolong ATF4 induction as a strategy for certain diseases (not aging)
- **GSK3 inhibitors** — block ATF4 Ser215 phosphorylation and thus delay SCF(β-TrCP) degradation; may modulate ATF4 levels in neurodegeneration contexts #gap/dose-response-unclear

## Limitations and gaps

- `#gap/needs-human-replication` — ATF4's role in human cognitive aging is entirely inferential from mouse ISR pharmacology
- `#gap/needs-replication` — ATF4 knockdown rescue of aged-neuron phenotypes: no primary DOI confirmed; needs sourcing
- `#gap/unsourced` — ATF4-induced autophagy gene upregulation: mechanistically plausible, primary citation not confirmed
- `#gap/unsourced` — SUMOylation functional significance: sites from UniProt P18848; functional data not confirmed
- `#gap/unsourced` — ATF4/ASNS in L-asparaginase resistance: claim needs primary citation
- `#gap/no-mechanism` — PHD3 hydroxylation site and oxygen-sensing-to-ATF4-stability link is incompletely characterized
- `#gap/needs-canonical-id` — GenAge ID: no entry found; confirm absence against GenAge-human and GenAge-models databases
- `#gap/needs-canonical-id` — HGNC ID 786 assumed from standard nomenclature; not independently verified against HGNC database; cross-check on next lint pass

## Footnotes

[^harding2000-isr]: doi:10.1016/s1097-2765(00)00108-8 · Harding HP, Novoa I, Zhang Y et al. · *Molecular Cell* 2000 · n=N/A · in-vitro + in-vivo (mouse) · design: mechanistic · model: mammalian cells / mouse; 3199 citations; shows eIF2 kinases selectively enhance ATF4 production under stress

[^harding2000-perk]: doi:10.1016/s1097-2765(00)80330-5 · Harding HP, Zhang Y, Bertolotti A et al. · *Molecular Cell* 2000 · n=N/A · in-vitro + in-vivo (mouse) · design: mechanistic · model: PERK-knockout cells; 1988 citations; establishes PERK as required for translational regulation during UPR

[^vattem2004]: doi:10.1073/pnas.0400541101 · Vattem KM, Wek RC · *PNAS* 2004 · n=N/A · in-vitro · design: mechanistic · model: rabbit reticulocyte lysate + mammalian cell culture; 1669 citations; defines uORF1/uORF2 re-initiation mechanism controlling ATF4 translation

[^lu2004]: doi:10.1083/jcb.200408003 · Lu PD, Harding HP, Ron D · *J Cell Biology* 2004 · n=N/A · in-vitro + in-vivo · design: mechanistic · model: MEFs and mouse; 980 citations; ISR gene expression regulation via uORF re-initiation; ATF4 as ISR integration point

[^krukowski2020]: doi:10.7554/eLife.62048 · Krukowski K et al. · *eLife* 2020 · n=N/A (multiple cohorts, ~10-20/group typical for this design) · in-vivo · design: randomized (mouse, aged C57BL/6) · model: aged mice; 164 citations; ISRIB reverses age-related memory decline with reduced ATF4 in aged brain
