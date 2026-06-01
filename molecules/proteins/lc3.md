---
type: protein
aliases: [MAP1LC3B, LC3B, LC3, light chain 3, microtubule-associated protein 1 light chain 3 beta, ATG8]
uniprot: Q9GZQ8
ncbi-gene: 81631
hgnc: 13352
mouse-ortholog: Map1lc3b
ensembl: ENSG00000140941
druggability-tier: 4
caused-by: []
causes: []
key-domains: [ubiquitin-like-fold, LIR-docking-site, C-terminal-glycine]
key-ptms: [Gly120-PE-conjugation, Gly120-PS-conjugation, PKA-inhibitory-phosphorylation]
pathways: ["[[autophagy]]", "[[mitophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[sqstm1]]", "[[atg4b]]", "[[atg7]]", "[[atg3]]", "[[beclin-1]]", "[[ulk1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Ichimura 2000, Kabeya 2000, Hara 2006, Komatsu 2006, and Klionsky 2021 primary-source PDFs verified; Pankiv 2007 and Mizushima & Yoshimori 2007 unverifiable (download failed, no OA URL); canonical-database identity fields (UniProt Q9GZQ8, NCBI Gene 81631, HGNC 13352, Ensembl ENSG00000197548) not independently re-verified against databases"
---

# LC3 / MAP1LC3B

The canonical mammalian autophagosome membrane marker. LC3B (gene *MAP1LC3B*) is a ubiquitin-like modifier that becomes covalently lipidated and inserted into the autophagosomal membrane — enabling biochemical quantification of autophagy flux, cargo recruitment via LIR-motif cargo receptors, and selective autophagy targeting. It is the most widely used single readout of autophagy activity in cell biology and aging research.

## Identity

- **UniProt:** Q9GZQ8 (MAP1LC3B_HUMAN; Swiss-Prot reviewed)
- **Gene:** MAP1LC3B (aliases: MAP1ALC3)
- **NCBI Gene ID:** 81631
- **HGNC:** 13352
- **Ensembl:** ENSG00000197548
- **Mouse ortholog:** Map1lc3b (one-to-one; function and lipidation machinery fully conserved)
- **Length:** 125 amino acids (pro-LC3 form; mature form after ATG4 cleavage = 120 aa exposing C-terminal Gly120)
- **Molecular weight:** ~14.7 kDa (apparent MW on SDS-PAGE: LC3-I ~16–18 kDa, LC3-II ~14–16 kDa despite heavier mass due to PE adduct altering SDS binding; Kabeya 2000 observed 18 kDa / 16 kDa for rat LC3; Klionsky 2021 gives 16–18 kDa / 14–16 kDa as the standard range)

## Paralog family — the mammalian ATG8 superfamily

Mammals encode **six ATG8 family members** divided into two subfamilies (note: Klionsky 2021 lists LC3B2 as an additional LC3 subfamily member, which would bring the canonical count to seven; LC3B2 is omitted from the table below as it is less studied in aging contexts):

| Subfamily | Members | UniProt (human) | Notes |
|---|---|---|---|
| LC3 | LC3A (MAP1LC3A) | Q9H492 | Two splice variants (LC3A-I and LC3A-II); -I/-II/-III notation refers to processing state, not splice variant count |
| LC3 | LC3B (MAP1LC3B) | Q9GZQ8 | **Canonical aging/autophagy marker** |
| LC3 | LC3C (MAP1LC3C) | Q9BXW4 | Restricted expression; roles in STING-autophagy |
| GABARAP | GABARAP | O95166 | Autophagosome maturation/fusion |
| GABARAP | GABARAPL1 | Q9H0R8 | Neuronal; enriched in brain |
| GABARAP | GABARAPL2 (GATE-16) | P60520 | Golgi-associated; ER-Golgi transport |

In yeast, all six functions are compressed into a **single gene: *ATG8*** [^ichimura2000]. The diversification in mammals may reflect expanded cargo-selectivity requirements. LC3B is the most abundant and ubiquitously expressed family member; it is the default choice for Western blot and immunofluorescence readouts of autophagy in most mammalian cell types.

## Structure and maturation

LC3B adopts a **ubiquitin-like fold** (Pfam: PF02991) with an N-terminal alpha-helical extension absent in canonical ubiquitin. The protein is synthesized as **pro-LC3** and requires obligate processing:

### Maturation cascade

1. **Pro-LC3 synthesis** — ribosome produces full-length precursor (human LC3B: 125 aa).
2. **ATG4 protease cleavage** — ATG4B (the primary mammalian isoform; four ATG4 paralogues exist: ATG4A/B/C/D) cleaves C-terminal residues after Gly120, exposing the glycine's carboxyl group. This produces **LC3-I** (cytosolic, Gly120 C-terminal) [^kabeya2000].
3. **ATG7 activation (E1-like)** — ATG7 adenylates the Gly120 carboxyl in an ATP-dependent reaction, forming a high-energy LC3-AMP intermediate, then transfers LC3 to an ATG7 active-site Cys via thioester bond.
4. **ATG3 conjugation (E2-like)** — ATG7 transfers LC3 to ATG3 (E2-like enzyme) via transthioesterification.
5. **ATG12–ATG5–ATG16L1 complex (E3-like)** — the ATG12~ATG5 conjugate (itself formed by a parallel ubiquitin-like cascade) recruits ATG16L1 and functions as the E3, facilitating transfer of LC3 to **phosphatidylethanolamine (PE)** on the autophagosomal membrane. The product is **LC3-II** (PE-conjugated). Note: Ichimura 2000 [^ichimura2000] established the E1 (Apg7) and E2 (Apg3) steps in yeast Apg8 conjugation; the E3-like role of ATG12–ATG5–ATG16L1 for mammalian LC3-PE was demonstrated in subsequent work (Hanada et al. 2007 Nat Cell Biol; Fujita et al. 2008 Nat Cell Biol). #gap/unsourced — a study page for the E3-specific citation is needed.

LC3-II is membrane-anchored and appears on **both the inner and outer autophagosomal membrane leaflets**. On the outer leaflet, it can be deconjugated back to LC3-I by ATG4B after autophagosome closure — enabling recycling. LC3-II on the inner leaflet is degraded upon lysosomal fusion.

### Slower SDS-PAGE migration of LC3-I vs LC3-II

A common source of confusion: despite the added PE adduct making LC3-II heavier, it runs **faster** (apparent lower MW) on SDS-PAGE than LC3-I. This is because the hydrophobic PE moiety alters SDS binding and the lipid anchor reduces aqueous migration rate differently from the expected mass shift. Apparent MW values vary by system: Kabeya 2000 observed LC3-I at ~18 kDa and LC3-II at ~16 kDa for rat LC3; Klionsky 2021 gives 16–18 kDa (LC3-I) and 14–16 kDa (LC3-II) as the standard mammalian range. The two forms are distinguishable on standard PAGE [^mizushima-yoshimori2007].

## LC3-II as an autophagy flux readout

### What LC3-II level measures

LC3-II accumulation = autophagosome **formation rate minus degradation rate**. A static increase in LC3-II can reflect either:

- **Increased autophagy induction** (more autophagosomes forming), OR
- **Impaired autophagy completion** (block in fusion or lysosomal degradation)

These are biologically opposite scenarios. They cannot be distinguished from a single Western blot time-point [^mizushima-yoshimori2007].

### Flux assay — lysosomal inhibitor blockade

Standard practice (per Klionsky 2021 guidelines): compare LC3-II levels **with and without lysosomal inhibitors** (bafilomycin A1, chloroquine, or ammonium chloride) [^klionsky2021]:

- If LC3-II **increases further** upon inhibitor treatment → autophagic flux is active (degradation was occurring)
- If LC3-II does **not increase** upon inhibitor treatment → flux is blocked upstream (autophagosomes not forming or not delivering cargo)

This "flux assay" is the minimal requirement for concluding that a treatment increases autophagy rather than merely blocking degradation.

### LC3-II in aging

In **post-mitotic neurons**, elevated basal LC3-II in aged animals may reflect impaired lysosomal clearance rather than enhanced autophagy initiation. Conditional knockout of *Atg5* in neural precursor cells (Hara 2006, nestin-Cre) and conditional knockout of *Atg7* in CNS cells (Komatsu 2006, nestin-Cre) each independently cause progressive neurodegeneration in mice, with ubiquitin-positive inclusion body accumulation — establishing that basal autophagy is essential for neuronal proteostasis [^hara2006] [^komatsu2006]. #gap/needs-human-replication — these KO studies are mouse only; human neurodegeneration causally linked to autophagy impairment is indirect.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ATG8 lipidation cascade identical in human cells |
| Phenotype conserved in humans? | partial — neurodegeneration from autophagy failure is conserved; aging-specific LC3 accumulation profiling is incomplete |
| Replicated in humans? | no — Atg5/Atg7 neural KO neurodegeneration is mouse-only; human genetic equivalents not identified |

## LIR motif — cargo receptor binding

LC3 family members interact with **LIR (LC3-interacting region) motifs** on cargo receptors. The consensus LIR is:

```
W/F/Y - x - x - L/I/V
```

Also called the AIM (Atg8-interacting motif) in yeast. LIR-containing cargo receptors include:

| Receptor | Gene | Cargo targeted | LIR core |
|---|---|---|---|
| p62 / Sequestosome-1 | SQSTM1 | Ubiquitinated protein aggregates | WSTL |
| NBR1 | NBR1 | Ubiquitinated cargo, complement | YIII |
| NDP52 | CALCOCO2 | Ubiquitinated bacteria, mitochondria | ILVV |
| Optineurin | OPTN | Ubiquitinated bacteria, mitochondria | FAVI |
| BNIP3 | BNIP3 | Damaged mitochondria (hypoxia) | YEVL |
| FUNDC1 | FUNDC1 | Mitochondria (hypoxia) | YEVL |
| TEX264 | TEX264 | ER (ER-phagy) | — |

p62/SQSTM1 is the best-characterized cargo receptor — it binds polyubiquitinated substrates via its UBA domain and LC3 via its LIR motif, bridging cargo to the autophagosomal membrane [^pankiv2007]. p62 level itself is often used as a secondary autophagy readout: p62 **accumulates** when autophagy is impaired (because it is itself a cargo), so elevated p62 combined with elevated LC3-II suggests a block in flux rather than enhanced initiation.

## Selective autophagy variants

LC3 participates in all major selective autophagy subtypes via cargo-specific receptors:

- **[[mitophagy]]** — BNIP3/NIX (hypoxia-induced), FUNDC1, or the PINK1-Parkin-driven ubiquitin pathway (p62/NDP52/OPTN as receptors)
- **Aggrephagy** — p62/NBR1 targeting ubiquitin-decorated protein aggregates
- **Xenophagy** — NDP52/OPTN/p62 targeting ubiquitin-coated intracellular bacteria
- **ER-phagy** — TEX264, FAM134B, RTN3L, SEC62
- **Pexophagy** — NBR1 in mammals
- **Lysophagy** — galectin-3 / p62 after lysosomal membrane permeabilization

## Role in aging

### Autophagy flux declines with age

Multiple lines of evidence indicate that autophagy flux decreases in aged tissues:

- LC3-II accumulation in aged mouse brain without compensatory increase in degradation markers (impaired flux interpretation) #gap/needs-human-replication
- ATG5, ATG7, and Beclin-1 protein levels decrease in aged rodent tissues in multiple studies #gap/unsourced — a systematic multi-tissue census citation is needed
- Neural-specific *Atg5* deletion (Hara 2006, nestin-Cre) and neural-specific *Atg7* deletion (Komatsu 2006, nestin-Cre) each independently produce a neurodegeneration phenotype with ubiquitin-positive inclusions, progressive behavioral deficits, and early death in mice [^hara2006] [^komatsu2006]
- *Atg5* transgenic overexpression in mice extends median lifespan ~17.2% (n=65 WT / 70 Tg; χ²=17.32 p<0.001) — see [[ulk1]] for details on this finding via the autophagy initiation axis

### GABARAP subfamily in aging

The GABARAP subfamily may play distinct roles from LC3 subfamily in autophagosome maturation and lysosomal fusion — age-related changes in GABARAP subfamily members are less characterized than LC3B. #gap/unsourced — a comparative aging-specific profiling citation is needed.

## Pathway membership

- [[autophagy]] — core effector; ATG4-ATG7-ATG3-ATG5/12/16L1 cascade; marks phagophore and autophagosome
- [[mitophagy]] — required for receptor-mediated mitophagic targeting; LIR-docking of BNIP3/FUNDC1/NDP52/OPTN
- [[mtor]] — mTORC1 suppresses autophagy initiation via [[ulk1]] phosphorylation; LC3-II accumulation is a downstream readout of mTOR inhibition
- [[ampk]] — activates [[ulk1]], relieving mTOR brake; AMPK-dependent autophagy flux read out by LC3-II increase

## Key interactors

- [[atg4b]] — required for pro-LC3 cleavage; also deconjugates LC3-II from outer membrane post-fusion (recycling arm)
- [[atg7]] — E1-like activating enzyme in lipidation cascade
- [[atg3]] — E2-like conjugating enzyme
- [[beclin-1]] — part of PI3K complex (VPS34-Beclin-1-ATG14L) that generates PI3P to recruit phagophore nucleation machinery; upstream of LC3 lipidation
- [[ulk1]] — initiating kinase; ULK1 complex activation leads to downstream ATG cascade activation and LC3-II accumulation
- [[sqstm1]] — primary cargo receptor for ubiquitinated substrates; LIR-docking partner

## Biochemical assay notes

- **Western blot:** Urea-containing sample buffer or methanol fixation improves LC3-II band intensity (lipid anchor requires careful lysis). Standard RIPA lysis may underestimate LC3-II.
- **Immunofluorescence:** LC3 puncta (dots) = autophagosomes; diffuse cytoplasmic signal = LC3-I. Puncta count per cell is an autophagosome number readout, not a flux readout — combine with lysosomal markers (LAMP1/2) or inhibitor treatment.
- **GFP-LC3 constructs:** Tandem mCherry-GFP-LC3 reporters allow flux monitoring — GFP is quenched in the acidic lysosome while mCherry is not; ratio reports autophagosome-lysosome fusion status.
- **LC3-II/I ratio vs absolute LC3-II:** Klionsky 2021 guidelines explicitly discourage using LC3-II/LC3-I ratio as the primary metric because LC3-I levels vary independently; LC3-II should be normalized to a housekeeping protein (e.g., actin or GAPDH) rather than to LC3-I, with the caveat that even housekeeping proteins may vary under autophagy-inducing conditions [^klionsky2021].

## Limitations and gaps

- **Paralog compensation:** LC3A, LC3B, LC3C, and GABARAPs are partially redundant. LC3B knockout alone may be compensated. Studies using only LC3B antibodies may miss redistribution among family members. #gap/needs-replication
- **Aging-tissue LC3-II profiling:** Systematic multi-organ aging atlas of LC3-II flux (formation rate vs degradation rate separately) in humans is lacking. #gap/unsourced
- **GABARAP subfamily aging biology:** LC3 subfamily is far better characterized than GABARAP subfamily in aging contexts. #gap/unsourced
- **LC3B as a proxy for all autophagy:** Selective autophagy subtypes may be regulated differently from bulk macroautophagy; LC3B alone cannot distinguish these. #gap/no-mechanism for subtype specificity in aged cells.
- **Human genetic evidence:** No human loss-of-function variant in MAP1LC3B with a confirmed aging phenotype is known. The aging-relevance of LC3 in humans is inferred from mouse KO and flux studies. #gap/needs-human-replication

## Footnotes

[^kabeya2000]: [[studies/kabeya-2000-lc3-autophagosome]] · doi:10.1093/emboj/19.21.5720 · in-vitro + in-vivo · model: rat brain + COS-7 cells · 6,474 citations (OpenAlex) · Kabeya Y et al., EMBO J 2000. First characterization of LC3 as mammalian Atg8 homologue; demonstrated LC3-I→LC3-II conversion on autophagosome membranes. Archive: pending download.

[^ichimura2000]: [[studies/ichimura-2000-atg8-ubiquitin-lipidation]] · doi:10.1038/35044114 · in-vitro + in-vivo · model: yeast + mammalian cell-free · 2,016 citations · Ichimura Y et al., Nature 2000. Established ubiquitin-like conjugation cascades for ATG8 and ATG12; defined E1/E2/E3 analogy for autophagy conjugation systems. Archive: local PDF available.

[^pankiv2007]: [[studies/pankiv-2007-p62-lir-lc3]] · doi:10.1074/jbc.m702824200 · in-vitro · model: HEK293 cells · 4,465 citations · Pankiv S et al., J Biol Chem 2007. Showed p62/SQSTM1 binds LC3 directly via LIR motif (WSTL); point mutations in LIR abolished co-IP and autophagic degradation of ubiquitinated cargo. Archive: pending download.

[^hara2006]: [[studies/hara-2006-atg5-neural-neurodegeneration]] · doi:10.1038/nature04724 · in-vivo · model: Atg5 neural conditional KO mice (nestin-Cre) · 3,796 citations · Hara T et al., Nature 2006. Showed that loss of basal autophagy (via Atg5 deletion) in neural cells causes progressive neurodegeneration with ubiquitin-positive cytoplasmic inclusion bodies; established requirement for autophagy in neuronal protein homeostasis. Archive: local PDF available.

[^komatsu2006]: [[studies/komatsu-2006-atg7-cns-neurodegeneration]] · doi:10.1038/nature04723 · in-vivo · model: Atg7 CNS-specific KO mice (Nestin-Cre) · 3,439 citations · Komatsu M et al., Nature 2006. Companion paper to Hara 2006; independently showed CNS-specific Atg7 loss causes inclusion body neurodegeneration; replicated the essential role of autophagy in neuronal proteostasis. Archive: local PDF available.

[^mizushima-yoshimori2007]: [[studies/mizushima-yoshimori-2007-lc3-immunoblotting]] · doi:10.4161/auto.4600 · review · model: N/A · 2,575 citations · Mizushima N & Yoshimori T, Autophagy 2007. Definitive guide to interpreting LC3 Western blots; clarified that LC3-II runs faster than LC3-I despite heavier mass; established flux-measurement requirements. Archive: pending download.

[^klionsky2021]: [[studies/klionsky-2021-autophagy-guidelines-4th]] · doi:10.1080/15548627.2020.1797280 · review · model: N/A · 2,434 citations · Klionsky DJ et al., Autophagy 2021. Fourth edition consensus guidelines for autophagy assays; advises comparing LC3-II to housekeeping proteins rather than to LC3-I (LC3-II/LC3-I ratio is discouraged as a primary metric); mandates flux controls (lysosomal inhibitors or equivalent); stresses LC3/GABARAP levels alone do not address autophagic flux. Archive: local PDF available.
