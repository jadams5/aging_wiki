---
type: protein
aliases: [VDAC1, voltage-dependent anion channel 1, porin 31HM, plasmalemmal porin, VDAC-1]
uniprot: P21796
ncbi-gene: 7416
hgnc: 12669
mouse-ortholog: Vdac1
ensembl: ENSG00000213585
druggability-tier: 2
caused-by: []
causes: []
key-domains: [19-strand-beta-barrel, N-terminal-alpha-helix, voltage-sensor]
key-ptms: [Ala2-N-acetylation, Ser193-phosphorylation-NEK1, Lys-polyubiquitination-PRKN]
pathways: ["[[mitophagy]]", "[[apoptosis-pathway]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
known-interactors: ["[[parkin]]", "[[bak]]", "[[bax]]", "[[bcl-xl]]", "[[p62]]", "[[pink1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Bayrhuber 2008 (human VDAC1 X-ray+NMR hybrid, 4.0 Å), Ujwal 2008 (mouse VDAC1 X-ray, 2.3 Å), and Baines 2007 (VDAC1/3 DKO MEFs) verified against local PDFs. Hiller 2008 (NMR) not downloaded (no OA URL available — not_oa after retry). Adedoja 2025 download failed (HTTP 520). Cheng 2003 closed-access (not_oa). Geisler 2010 claims inherited from parkin.md prior verified pass. Canonical-DB identity fields (UniProt P21796, NCBI Gene 7416, HGNC 12669) not independently re-queried."
---


# VDAC1

The most abundant protein of the outer mitochondrial membrane (OMM) — a 283-amino-acid voltage-gated anion channel that serves as the primary metabolic gateway between the mitochondrial intermembrane space (IMS) and the cytosol. VDAC1 conducts ATP, ADP, NADH, phosphate, and Ca2+ in its open state, coupling inner-membrane bioenergetics to cytosolic metabolism. It is also a convergence point for apoptotic and mitophagic signaling, but its precise mechanistic role in both is actively debated.

## Identity

| Field | Value |
|---|---|
| UniProt | P21796 (VDAC1_HUMAN; Swiss-Prot, manually reviewed) |
| NCBI Gene | 7416 |
| HGNC | 12669 |
| Gene symbol | VDAC1 |
| Mouse ortholog | Vdac1 (one-to-one) |
| Length | 283 amino acids (canonical human isoform) |
| Molecular weight | ~31 kDa |
| Subcellular location | OMM (primary); also plasma membrane, ER-mitochondria contact sites |

**Naming note:** "VDAC1" refers to the protein; no separate pathway page exists for the VDAC family. VDAC2 and VDAC3 are paralogs with distinct functions (see Paralogs section).

## Structure

VDAC1 adopts a **19-strand β-barrel** that spans the OMM. The outer barrel dimensions are approximately 3.5 × 3.1 nm (horizontal) × 4 nm (vertical); the inner pore at the orifice is approximately 2.7 × 2.4 nm (27 × 24 Å) narrowing to 2.7 × 1.4 nm at the center where the N-terminal helix partially occludes the channel, in its open state [^bayrhuber2008][^ujwal2008]. Three independent structural studies published in 2008 resolved the fold:

- **NMR in detergent micelles** (Hiller et al. 2008) — solution structure of human VDAC1 in LDAO micelles [^hiller2008]
- **X-ray + NMR hybrid, human VDAC1** (Bayrhuber et al. 2008) — 4.0 Å X-ray resolution, conjoint NMR/X-ray structure determination [^bayrhuber2008]
- **X-ray crystallography, mouse VDAC1** (Ujwal et al. 2008) — 2.3 Å resolution in lipidic bicelles; detailed metabolite-gating insights; all 283 aa resolved [^ujwal2008]

A short **N-terminal α-helix** (residues ~1–26) folds into the pore lumen and acts as a voltage sensor / gating element: it partially occludes the channel at high membrane potentials (>30–40 mV), switching the channel from its open anion-selective state to a closed cation-selective state. At physiological OMM potentials (typically low, ~10–20 mV), VDAC1 resides predominantly in the open conformation.

**Key PTMs relevant to channel function and protein–protein interactions:**

- Ser193 phosphorylation by NEK1 — modulates VDAC1 closure; implicated in apoptotic regulation
- K27-linked polyubiquitination by [[parkin]] — mitophagy signal (see Parkin substrate role below)
- N-terminal acetylation (Ala2) — co-translational; function unclear

## Paralogs: VDAC family

| Paralog | Abundance | Key distinguishing feature |
|---|---|---|
| VDAC1 | Most abundant (~25–30% of OMM protein mass) | Primary metabolic gateway; predominant isoform |
| VDAC2 | Less abundant | Essential chaperone for BAK — VDAC2 keeps BAK inactive at OMM [^cheng2003] |
| VDAC3 | Least abundant; less characterized | Possible role in mitochondrial redox sensing |

**VDAC2–BAK relationship:** VDAC2 was shown to directly bind and suppress BAK at the OMM, preventing spontaneous BAK activation [^cheng2003]. Loss of VDAC2 allows BAK to adopt an active conformation even in the absence of BH3-only signals. This is a VDAC2-specific function — VDAC1 does not chaperone BAK equivalently.

| Dimension | Status |
|---|---|
| VDAC2–BAK interaction conserved in humans? | yes (human cell lines studied) |
| Phenotype conserved in humans? | partial (no human VDAC2 KO; mouse KO is lethal) |
| Replicated in humans? | no (genetic evidence only from cancer cell contexts) |

## Function: metabolic gateway

In its predominant open state, VDAC1 is the principal route for:

- **ATP/ADP exchange** — import ADP for ATP synthase; export newly synthesized ATP to cytosol
- **NADH shuttle** — outer-membrane step in malate-aspartate shuttle for cytosolic NADH reoxidation
- **Phosphate (Pi)** — import for oxidative phosphorylation
- **Ca2+ transfer** — passes Ca2+ from cytosol into IMS at ER-mitochondria contact sites ([[MAMs]]), where VDAC1 interacts with IP3Rs

Loss of VDAC1 disrupts mitochondrial bioenergetics and Ca2+ signaling, though cells can partially compensate via VDAC2/VDAC3 in most contexts.

## Role in apoptosis — the MAC controversy

### Initial model: VDAC1 oligomers as the cytochrome c release pore

Early studies proposed that VDAC1 oligomerizes in response to apoptotic signals to form a "mitochondrial apoptosis-induced channel" (MAC) large enough (~4–6 nm) to release cytochrome c (~12 kDa) across the OMM. In this model, VDAC1 oligomers — potentially in complex with [[bax]] or [[bak]] — would constitute the pore-forming machinery of MOMP. Several lines of biochemical evidence supported VDAC1's co-immunoprecipitation with BAX and an anti-apoptotic role for VDAC1-targeting compounds.

### Counter-evidence: VDAC1/3 double KO MEFs — BAX/BAK still functional

Baines et al. 2007 generated *Vdac1*-null, *Vdac3*-null, and *Vdac1/Vdac3* double-knockout mouse embryonic fibroblasts (MEFs) [^baines2007]. Key findings:

- Double-KO MEFs underwent **normal MOMP** (cytochrome c release, caspase-3 cleavage, PARP cleavage, and cell death) in response to multiple apoptotic stimuli (staurosporine, TNFα, adenoviral Bax overexpression, tBid, and H₂O₂)
- VDAC1/3-null MEFs were, if anything, more sensitive than wild-type to Ca²⁺ overload-induced death; no protection was observed
- Mitochondrial permeability transition pore (mPTP) opening (measured by calcein-CoCl₂ fluorescence and mitochondrial swelling) was also unaffected by Vdac1/3 loss in MEFs
- **Note:** The paper demonstrated equivalent downstream apoptotic outputs (cytochrome c release, caspase cleavage, cell death); it did not directly measure BAX translocation to mitochondria or BAK activation as discrete steps

This directly falsified the model in which VDAC1 (or VDAC3) is the obligatory pore for cytochrome c release.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (BAX/BAK MOMP pathway conserved) |
| Phenotype conserved in humans? | yes (VDAC-independent MOMP documented in human cell lines) |
| Replicated in humans? | no (human VDAC1/3 DKO genetics not achieved in vivo) |

### Current consensus view

VDAC1 is **not the obligatory cytochrome c release pore**. BAX and BAK form the OMM pore directly via BAX/BAK homo-oligomers (see [[bax]] and [[bak]] pages). However, VDAC1 **modulates** the apoptotic response in multiple ways:

- Recruits pro-apoptotic proteins (hexokinase II displacement releases VDAC-bound HK-II → increases susceptibility to MOMP)
- Mediates anti-apoptotic BCL-2 family interactions at the OMM — [[bcl-xl]] binds VDAC1 to modulate ion flux, though the functional significance is debated (see [[bcl-xl]])
- VDAC1 oligomers may still play a **modulatory** (not obligatory) role in amplifying apoptotic signaling in certain cell types

#gap/contradictory-evidence — The exact mechanism by which VDAC1 modulates (rather than executes) MOMP remains incompletely resolved.

## Parkin substrate role and mitophagy

PINK1 accumulates on depolarized mitochondria and phosphorylates ubiquitin (Ser65) + [[parkin]] (Ser65 of Ubl domain), activating Parkin's E3 ubiquitin ligase activity. Geisler et al. 2010 established that VDAC1 is among the first OMM proteins ubiquitinated upon mitochondrial depolarization [^geisler2010]:

- VDAC1 is ubiquitinated predominantly with **K27-linked polyubiquitin chains** (atypical linkage) — the study identified both K27 and K63 linkages on VDAC proteins
- Ubiquitinated VDAC1 recruits **[[p62]]** (SQSTM1) to the mitochondrial surface
- p62 links ubiquitinated OMM cargo to the autophagosome machinery (via its LIR motif binding LC3), facilitating selective engulfment of damaged mitochondria
- VDAC1 (and VDAC2) silencing impaired PINK1/Parkin-dependent mitophagy, confirming that VDAC1 ubiquitination is functionally necessary — not merely correlative — in this model

**Note:** The Geisler 2010 K27-linkage claim on [[parkin]].md is marked verified-partial; the VDAC1 as Parkin substrate claim was confirmed in the primary source PDF by a prior verification pass on the parkin page.

| Dimension | Status |
|---|---|
| PINK1/Parkin/VDAC1 pathway conserved in humans? | yes (human cell line data; Parkin overexpression system) |
| Phenotype conserved in humans? | partial (no in vivo human mitophagy genetic data for VDAC1 specifically) |
| Replicated in humans? | in-progress (Parkinson's disease genetics supports PINK1/Parkin; VDAC1 role not independently validated in patient tissue) |

## Aging relevance

### Metabolic gateway bottleneck in aged mitochondria

VDAC1's abundance (~25–30% of OMM protein mass) makes it a potential gatekeeper for the bioenergetic decline observed in aging. Aged mitochondria exhibit reduced membrane potential, altered cristae morphology, and impaired OXPHOS capacity (see [[mitochondrial-dysfunction]]). If VDAC1 conductance or gating properties shift with age — due to oxidative modification, altered lipid environment, or post-translational changes — this could impair ATP/ADP exchange and amplify the bioenergetic deficit. #gap/unsourced — direct evidence for age-associated changes in VDAC1 channel properties in human tissue is lacking.

### VDAC1 oligomerization and Ca2+ dysregulation

Elevated VDAC1 oligomerization has been observed under conditions of elevated ROS and in neurodegenerative disease contexts (amyloid-beta interaction with VDAC1 documented in Alzheimer's disease models). VDAC1 oligomers may form a large pore that releases mitochondrial DNA (mtDNA) into the cytosol, activating the [[cgas-sting-pathway]] and driving [[chronic-inflammation]]. This mechanism has been proposed in endothelial aging contexts #gap/needs-replication. #gap/needs-human-replication

### Reduced VDAC-1 function extends lifespan in C. elegans

Adedoja et al. 2025 reported that reduced VDAC-1 function in *C. elegans* extends lifespan via activation of the **mitochondrial unfolded protein response** (mtUPR), requiring elements of the PeBoW ribosome biogenesis complex [^adedoja2025]. #gap/needs-human-replication — C. elegans lifespan results require extensive validation before translation to mammalian biology; the mtUPR pathway is conserved but the VDAC1 regulatory axis is not established in mammals.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (mtUPR is conserved; VDAC1 regulation of mtUPR is worm-specific so far) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

### Cancer overexpression (Warburg context)

VDAC1 is overexpressed in multiple cancer types, consistent with the Warburg effect: cancer cells upregulate glycolysis and require high-capacity ATP/ADP exchange through VDAC1. Hexokinase II (HK-II) binding to VDAC1 couples glycolysis to mitochondrial ATP production and simultaneously suppresses MOMP (anti-apoptotic). This pro-survival interaction makes the VDAC1-HK-II interface a cancer drug target, though this is orthogonal to aging per se. #gap/unsourced

## Pathway membership

- [[mitophagy]] — Parkin substrate; ubiquitinated VDAC1 recruits p62 → autophagosome
- [[apoptosis-pathway]] — OMM component; modulates (not executes) BAX/BAK MOMP
- [[mitochondrial-dysfunction]] — primary OMM metabolic gateway; bioenergetic relevance in aging
- [[pink1-parkin-pathway]] — upstream kinase PINK1 activates Parkin → VDAC1 ubiquitination cascade

## Key interactors

| Protein | Nature of interaction | Functional consequence |
|---|---|---|
| [[parkin]] | E3 ubiquitin ligase → VDAC1 (substrate) | K27-polyUb; mitophagy signal [^geisler2010] |
| [[pink1]] | Upstream kinase activating Parkin | Indirect: depolarization → PINK1 → Parkin → VDAC1 Ub |
| [[p62]] | Adaptor binding polyUb-VDAC1 | Bridges ubiquitinated OMM cargo to autophagosome |
| [[bak]] | VDAC2-specific chaperone client (NOT VDAC1) | VDAC2 keeps BAK inactive; loss of VDAC2 → BAK activation [^cheng2003] |
| [[bax]] | Reported co-IP at OMM | Disputed functional significance post-Baines 2007 |
| [[bcl-xl]] | Reported VDAC1 binding; disputed | Proposed to modulate ion flux; mechanism contested; see [[bcl-xl]] |
| Hexokinase II | Physical OMM binding via N-terminal domain | Couples glycolysis to OXPHOS; suppresses MOMP |

## Pharmacology

No clinically approved VDAC1-targeting drug exists. Investigational approaches:

- **DIDS** (4,4'-diisothiocyanatostilbene-2,2'-disulfonic acid) — VDAC channel blocker; disrupts VDAC1-HK-II interaction; pro-apoptotic in cancer cell lines; non-specific (also blocks other anion channels); not clinically developed
- **NADH analogs** — some bind VDAC1 pore and modulate conductance; research tools only
- **siRNA / antisense** approaches targeting VDAC1 — explored in cancer; no aging-specific therapeutic program
- **Erastin** — VDAC2/3 modulator (not VDAC1-selective); disrupts system xCT/VDAC2 interaction; triggers ferroptosis; unrelated to VDAC1 aging biology

#gap/dose-response-unclear — no dose-response data for any VDAC1-targeted intervention in aging models.

## Limitations and gaps

- #gap/unsourced — Direct evidence for age-dependent changes in VDAC1 channel conductance or PTM landscape in aged human tissue.
- #gap/needs-human-replication — VDAC-1 reduction → lifespan extension established only in *C. elegans* (Adedoja 2025); not replicated in mammalian models.
- #gap/needs-replication — VDAC1 oligomerization → mtDNA release → cGAS/STING activation in aging endothelium (single-study report, 2026).
- #gap/contradictory-evidence — VDAC1 role in MOMP: original MAC model vs. VDAC-dispensable Baines 2007 DKO result; current modulatory view incompletely mechanized.
- #gap/no-mechanism — How K27-linked vs K63-linked polyubiquitin on VDAC1 differentially direct cargo to autophagosome vs proteasome.
- #gap/needs-canonical-id — VDAC1 not in GenAge human subset; GenAge ID unknown.
- #gap/no-fulltext-access — Cheng 2003 (doi:10.1126/science.1083995): closed-access (not_oa); VDAC2–BAK chaperone claims on this page are unverified against the primary source.
- #gap/no-fulltext-access — Adedoja 2025 (doi:10.1101/gad.352979.125): download failed (HTTP 520 from publisher); diamond OA but not currently fetchable; C. elegans lifespan/mtUPR claims on this page are unverified against the primary source.
- #gap/no-fulltext-access — Hiller 2008 (doi:10.1126/science.1161302): no OA URL available; NMR-specific structural claims not independently verified (structural details cross-checked via Bayrhuber 2008 and Ujwal 2008 citations of Hiller's work).

## Footnotes

[^hiller2008]: [[studies/hiller-2008-vdac1-nmr]] · doi:10.1126/science.1161302 · in-vitro structural (NMR) · model: human VDAC1 in LDAO micelles · 19-strand β-barrel architecture; N-terminal helix voltage sensor · #gap/no-fulltext-access — no OA URL available in archive; PDF not downloaded; structural details for Hiller-derived claims sourced from Bayrhuber 2008 and Ujwal 2008 cross-references
[^bayrhuber2008]: [[studies/bayrhuber-2008-vdac1-crystal]] · doi:10.1073/pnas.0808115105 · in-vitro structural (X-ray + NMR hybrid, 4.0 Å X-ray resolution) · model: human VDAC1 refolded in E. coli · 19-strand β-barrel confirmed; outer barrel 3.5 × 3.1 nm × 4 nm; inner pore ≈1.5 × 1 nm; N-terminal helix Tyr7–Val17 folded inside barrel at midpoint
[^ujwal2008]: [[studies/ujwal-2008-vdac1-crystal-mouse]] · doi:10.1073/pnas.0809634105 · in-vitro structural (X-ray 2.3 Å, bicelle crystallization) · model: mouse VDAC1; all 283 aa resolved + 47 water molecules · Rfree 27.7%, Rwork 24.2% · inner pore 27 × 24 Å at orifice, narrowing to 27 × 14 Å at N-terminal helix; N-terminal segment aa 1–26 resolved; helix aa 6–20; hinge Gly21–Gly25; metabolite-gating mechanism
[^cheng2003]: [[studies/cheng-2003-vdac2-bak]] · doi:10.1126/science.1083995 · in-vitro + in-vivo · n=814 cited · model: HEK293 cells, MEFs · VDAC2 physically chaperones BAK at OMM; loss-of-function allows spontaneous BAK activation; VDAC1 does not rescue
[^baines2007]: [[studies/baines-2007-vdac-dispensable]] · doi:10.1038/ncb1575 · in-vivo/in-vitro (genetic KO + MEFs) · model: Vdac1-/-, Vdac3-/-, Vdac1/3-DKO mouse MEFs (E13.5–15.5); also isolated cardiac/liver mitochondria · stimuli: Ca²⁺ (100–250 µM), tBH (100 µM), recombinant Bax (1 µg), tBid (0.25 µg), staurosporine (300 nM), TNFα (3 ng/ml) · cytochrome c release, caspase-3/PARP cleavage, and MPT (calcein-CoCl₂) all unaffected by Vdac1/3 loss; DKO MEFs showed enhanced death at some stimuli; **LOCAL PDF available**
[^geisler2010]: [[studies/geisler-2010-parkin-vdac1-mitophagy]] · doi:10.1038/ncb2012 · in-vitro (human cell lines, Parkin overexpression) · VDAC1/2 ubiquitinated by Parkin with K27/K63 polyUb; required for p62 recruitment and mitophagy flux; **LOCAL PDF available** · claim verified on [[parkin]] (verified-partial, 2026-05-04)
[^adedoja2025]: [[studies/adedoja-2025-vdac1-lifespan-mtUPR]] · doi:10.1101/gad.352979.125 · in-vivo (C. elegans) · n=not-extracted · reduced VDAC-1 function extends lifespan via mtUPR activation; PeBoW complex required · #gap/no-fulltext-access — download failed (HTTP 520; publisher redirect); diamond OA but not currently fetchable · #gap/needs-human-replication
