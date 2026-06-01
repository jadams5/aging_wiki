---
type: process
aliases: [self-eating, macroautophagy, bulk autophagy]
key-proteins: ["[[ulk1]]", "[[beclin-1]]", "[[atg5]]", "[[atg7]]", "[[lc3]]", "[[p62]]", "[[atg12]]", "[[wipi2]]"]
pathways: ["[[mtor]]", "[[ampk]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
selective-variants: ["[[mitophagy]]", "[[lipophagy]]", "[[xenophagy]]", "[[chaperone-mediated-autophagy]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hansen 2018 and Eisenberg 2009 primary-source claims verified via PMC full text and PubMed abstract respectively; TFEB/CLEAR gene-count (~500) is unsourced against both cited papers — tagged for follow-up; AMPK/TSC2 mechanism in regulation table is not sourced to either cited paper — tagged; spermidine mechanism updated 2026-05-04 R10d to reflect Pietrocola 2015 EP300-selective refinement (narrows the original Eisenberg 2009 'broad HAT' framing) and ATG5/ATG7/ATG8 (LC3)/ATG12 substrate list per Lee & Finkel 2009 ep300.md verification; mouse lifespan evidence for spermidine removed (Eisenberg 2009 only showed oxidative stress inhibition in mice, not lifespan extension)"
---

# Autophagy (macroautophagy)

The cellular bulk-degradation pathway by which damaged organelles, protein aggregates, and other long-lived components are sequestered into double-membraned autophagosomes and delivered to the lysosome for hydrolytic degradation. **Declines with age across organisms from yeast to mammals** and is now recognized as a primary [[hallmarks-of-aging|hallmark]] in its own right ([[disabled-macroautophagy]], added in the 2023 hallmarks update). Restoring autophagy — genetically or pharmacologically — extends lifespan in multiple models.

This page covers **macroautophagy** specifically. Selective variants ([[mitophagy]], [[lipophagy]], [[chaperone-mediated-autophagy]]) and other catabolic pathways ([[ubiquitin-proteasome-system]]) are separate.

## Mechanism — the autophagy machinery

Autophagosome formation proceeds in five conceptual stages, each governed by a distinct ATG-protein subset:

| Stage | Key complex | Function |
|---|---|---|
| **Initiation** | [[ulk1]] (ULK1/ULK2 + ATG13 + FIP200 + ATG101) | mTORC1 inhibits ULK1 directly; AMPK activates it. ULK1 phosphorylates downstream Atg proteins to nucleate the phagophore. |
| **Nucleation** | Class III PI3K complex (Beclin-1 + VPS34 + VPS15 + ATG14L) | Generates PI3P at the phagophore membrane; recruits WIPI proteins. |
| **Elongation** | ATG12–ATG5–ATG16L1 conjugation system + [[lc3]]–PE conjugation system | Two ubiquitin-like conjugation cascades; LC3-II decorates the autophagosome membrane and serves as the canonical autophagy marker. |
| **Cargo recognition** | Receptors: [[p62]]/SQSTM1, NBR1, OPTN, NDP52, TAX1BP1 | Bridge ubiquitinated cargo to LC3 on the inner autophagosome membrane. |
| **Fusion + degradation** | SNARE machinery (STX17, SNAP29, VAMP8) + lysosomal hydrolases | Autophagosome fuses with lysosome → autolysosome; cargo digested; building blocks recycled. |

A complete autophagy flux measurement requires assessing **lysosomal degradation**, not just autophagosome accumulation — a static increase in LC3-II can mean either elevated formation OR blocked clearance. Standard practice uses bafilomycin A1 (lysosomal inhibitor) to distinguish.

## Regulation

| Signal | Effect on autophagy | Mechanism |
|---|---|---|
| Nutrient excess (amino acids, glucose) | ↓ | mTORC1 active → phosphorylates ULK1 + ATG13 → autophagy block |
| Energy stress (low ATP) | ↑ | [[ampk]] active → phosphorylates ULK1 directly (activating); also suppresses mTORC1 via TSC2 and Raptor phosphorylation #gap/unsourced — TSC2/Raptor detail not in Hansen 2018; cite dedicated AMPK-mTOR literature |
| ER stress (UPR) | ↑ | Activated via PERK + ATF4 |
| Hypoxia | ↑ | HIF-1α-dependent + AMPK-dependent |
| DNA damage | ↑ (acutely) | p53-mediated transcriptional induction |
| Glucagon | ↑ | Cyclic AMP → AMPK |

Master transcriptional regulator: **TFEB** ("master regulator of lysosomal biogenesis and autophagy") — phosphorylated and cytoplasm-retained by mTORC1; nuclear-translocated upon mTOR inhibition or starvation, driving expression of many lysosomal/autophagy genes (the CLEAR network). #gap/unsourced — the frequently-cited "~500 genes" figure does not appear in Hansen 2018 or Settembre 2011; the exact number of CLEAR network targets needs a primary citation (likely Palmieri 2011 or a later TFEB ChIP-seq study).

## Selective autophagy

Macroautophagy can be cargo-specific via dedicated receptors:

- **[[mitophagy]]** — selective autophagy of damaged mitochondria. PINK1/Parkin pathway is the canonical induction route. Major cardio- and neuro-aging relevance.
- **[[lipophagy]]** — degradation of lipid droplets. Hepatic/metabolic relevance.
- **Aggrephagy** — clearance of protein aggregates (p62-bridged). Neurodegeneration relevance.
- **Xenophagy** — clearance of intracellular pathogens.
- **Pexophagy / ER-phagy / ribophagy** — peroxisome / ER / ribosome turnover.
- **[[chaperone-mediated-autophagy]]** is *not* macroautophagy — it uses LAMP2A-mediated direct translocation of soluble proteins into the lysosome, bypassing the autophagosome.

## Role in aging

### Decline with age

Autophagic flux declines progressively in nearly every tissue measured across model organisms. Mechanisms include:
- Reduced expression of ATG proteins (ATG5, ATG7, BECN1) in aged tissues
- Lysosomal dysfunction — accumulation of [[lipofuscin]] reduces hydrolase activity
- Disrupted membrane trafficking (autophagosome–lysosome fusion impairment)
- Chronic mTOR over-activation in aged tissues (the "hyperfunction" angle)

### Genetic evidence — autophagy is required for lifespan extension

The longevity benefits of multiple interventions (caloric restriction, mTOR inhibition, IIS reduction, sirtuin activation) are **abolished by autophagy gene knockouts** in worms and flies — establishing autophagy as a downstream convergence point for many longevity pathways [^hansen2018].

### Interventions that induce autophagy

| Intervention | Mechanism | Lifespan evidence |
|---|---|---|
| [[caloric-restriction]] | Reduced amino acid input → mTOR ↓ | Extensive across organisms |
| Intermittent fasting | Periodic mTOR ↓ + AMPK ↑ | Mouse + emerging human data |
| [[rapamycin]] | mTORC1 inhibition → ULK1 disinhibition | Mouse (NIA ITP) |
| [[metformin]] | AMPK activation | Mouse + observational human |
| [[spermidine]] | EP300 inhibitor (specifically narrowed by Pietrocola 2015) — de-represses ATG5/ATG7/ATG8/ATG12 acetylation and reduces H3K56ac; the original "broad HAT inhibitor" framing from Eisenberg 2009 was refined to EP300-selective by Pietrocola 2015 (siRNA screen of 43 acetyltransferases identified EP300 as the unique autophagy-repressor candidate; C646 EP300-specific inhibitor phenocopied the spermidine effect) [^eisenberg2009] | Yeast, worms, flies, human immune cells [^eisenberg2009]; oxidative stress inhibition (not lifespan) in mice; observational human associations |
| Exercise | AMPK + LC3 lipidation increase in muscle | Acute autophagy induction confirmed in human muscle biopsies |

## Methods notes

Common autophagy readouts (each with caveats):
- **LC3-II/LC3-I ratio (Western)** — increased lipidation indicates more autophagosomes; doesn't distinguish formation from blocked clearance.
- **p62 levels** — accumulates when autophagy is blocked; depleted when flux is high. Confounded by transcriptional regulation.
- **GFP-LC3 / mCherry-GFP-LC3 puncta** — gold standard for flux when paired with lysosomal inhibitor controls.
- **Electron microscopy** — direct visualization of autophagosomes; labor-intensive.

## Limitations and gaps

- Quantitative autophagy flux in human tissues is technically difficult; most human aging data is from peripheral cells (PBMCs, fibroblasts) rather than the most-affected tissues (brain, heart). #gap/needs-human-replication
- Whether *boosting* autophagy beyond youthful levels has a hormetic dose-response (too much = bad) is unsettled. #gap/dose-response-unclear
- Cell-type-specific roles of autophagy in aging are not uniform — neurons and cardiomyocytes appear most-dependent; some immune cell contexts may benefit from *less* autophagy.

## Footnotes

[^hansen2018]: doi:10.1038/s41580-018-0033-y · review · multi-organism · key reference for autophagy's role in aging across model systems
[^eisenberg2009]: doi:10.1038/ncb1975 · in-vivo (yeast, worms, flies) + human immune cells · multi-organism · spermidine-induced autophagy extends lifespan; mice: oxidative stress inhibition only (not lifespan); mechanism: HAT inhibition → H3 deacetylation → autophagy transcript upregulation
