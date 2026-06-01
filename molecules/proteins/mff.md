---
type: protein
aliases: [C2orf33, mitochondrial fission factor, MFF protein]
uniprot: Q9GZY8
ncbi-gene: 56947
hgnc: 24858
mouse-ortholog: Mff
ensembl: ENSG00000168958
genage-id: null
pathways: ["[[mitochondrial-dynamics]]"]
hallmarks: ["[[mitochondrial-dysfunction]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[ampk]]"]
causes: ["[[drp1]]", "[[mitophagy]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Toyama 2016 (PMC4852862), Gandre-Babbe 2008, Loson 2013, and Liu & Chan 2015 primary-source PDFs verified. Otera 2010 (JCB) and EMPF2 2020 (Clin Genet) remain closed-access (#gap/no-fulltext-access). Canonical-database identity fields (UniProt Q9GZY8, NCBI Gene 56947, HGNC 24858, Ensembl ENSG00000168958, TM aa 323–340, CC aa 291–322, MW ~38.5 kDa) verified against UniProt REST."
---


# MFF (Mitochondrial Fission Factor)

MFF is a tail-anchored outer mitochondrial membrane (OMM) protein that functions as the **primary receptor** recruiting cytosolic [[drp1]] to fission sites in mammalian cells. MFF knockdown suppresses DRP1 OMM localization and causes mitochondrial elongation even when [[fis1]] remains intact, establishing MFF as the dominant DRP1 recruitment factor in mammals [^otera2010]. MFF also localizes to peroxisomes and promotes peroxisomal fission by the same DRP1-recruitment mechanism. Its activity is directly gated by [[ampk]]: under energy stress, AMPK phosphorylates MFF at multiple Ser/Thr sites, acutely increasing fission and triggering [[mitophagy]] via the fission-before-segregation circuit. MFF is therefore a critical node linking cellular energy state to mitochondrial quality control — and, transitively, to the [[mitochondrial-dysfunction]] hallmark of aging.

## Identity

| Feature | Value |
|---|---|
| UniProt | Q9GZY8 (MFF_HUMAN) — Swiss-Prot (manually reviewed) |
| NCBI Gene | 56947 |
| HGNC symbol | MFF (alias: C2orf33) |
| Ensembl | ENSG00000168958 |
| Canonical length | 342 aa |
| MW | ~38.5 kDa |
| Mouse ortholog | Mff (one-to-one) |
| GenAge (human) | not listed; aging relevance based on functional evidence |

> **Naming note:** The gene was designated C2orf33 (chromosome 2 open reading frame 33) before the protein function was characterized; MFF is the current approved symbol per HGNC. This page uses MFF throughout. No `pathways/mff.md` exists — pathway context is on [[mitochondrial-dynamics]].

## Topology and domains

MFF is a **type IV tail-anchored membrane protein**: its C-terminal transmembrane helix (aa ~323–340 per UniProt) anchors it to the OMM in a bitopic orientation with an N-terminal cytoplasmic domain that faces the cytosol [^gandrebabbe2008]. This topology positions the cytoplasmic domain to directly engage the cytosolic DRP1 pool.

Key structural features:

- **Coiled-coil region (aa ~291–322):** Immediately upstream of the transmembrane anchor; likely contributes to receptor oligomerization and DRP1 binding geometry.
- **Cytoplasmic N-terminal domain:** Unstructured with multiple AMPK-target Ser/Thr residues (see Phosphorylation section). No known folded ligand-binding domain — MFF is a scaffold/receptor, not an enzyme.
- **Transmembrane anchor (aa ~323–340):** Single-pass C-terminal; insufficient on its own for OMM targeting — the adjacent basic cluster and/or chaperone-mediated post-translational insertion are likely required.

MFF also localizes to peroxisomes, where it performs an analogous role recruiting DRP1 for peroxisomal fission.

## Identification

Gandre-Babbe & van der Bliek 2008 identified MFF as the novel tail-anchored OMM/peroxisome protein encoded by the open reading frame C2orf33 [^gandrebabbe2008]. The key experiments were performed in HeLa cells. RNAi silencing (siRNA targeting exons 2 and 8) reduced MFF protein by ~88% and produced strikingly interconnected mitochondrial networks indistinguishable from Drp1 siRNA, observed in 94 ± 5% of cells (350–400 cells, 4 independent transfection experiments); enlarged/tubular peroxisomes were also observed. Critically, MFF **overexpression did not cause fragmentation** — the percentage of cells with fragmented mitochondria was 6.0 ± 3.8% in Mff-transfected cells vs 7.7 ± 1.7% in untransfected controls (100–200 cells, 3 independent experiments), unlike Fis1 overexpression which does induce fission. These loss-of-function phenotypes established MFF as a bona fide fission regulator, though the paper did not directly implicate DRP1 recruitment as the mechanism (that came from Otera 2010). MFF was found in a ~200-kDa complex distinct from the Drp1 and Fis1 complexes. #gap/needs-replication — independent cell-type validation came from subsequent studies.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MFF is a human gene; fission phenotype established in human cell lines |
| Phenotype conserved in humans? | yes — MFF LoF mutations cause EMPF2 in humans (see Disease section) |
| Replicated in humans? | yes (genetic, EMPF2 case series) |

## MFF as the primary DRP1 receptor

Otera et al. 2010 resolved the question of which OMM receptor is dominant for DRP1 recruitment in mammalian cells [^otera2010]. Using siRNA in HeLa and HCT116 cells:

- **MFF knockdown** — strongly reduced DRP1 OMM localization and elongated the mitochondrial network, comparable in magnitude to DRP1 knockdown itself.
- **FIS1 knockdown** — little or no effect on DRP1 OMM localization or mitochondrial morphology under basal conditions.
- **Combined MFF + FIS1 knockdown** — no additive effect beyond MFF alone.

This established that MFF, not [[fis1]], is the primary DRP1 recruitment factor in dividing mammalian cells — a striking reversal from the yeast model where Fis1p is the essential receptor. MFF knockdown is therefore the gold-standard genetic tool to assess DRP1-dependent fission in mammalian cell biology. #gap/no-fulltext-access — Otera 2010 (JCB, not_oa) claims unverified against full text; consistent with drp1.md annotation.

Loson et al. 2013 placed MFF within the full set of four mammalian DRP1 receptors using MEF knockout lines (Fis1-null, Mff-null, Fis1/Mff-double-null) [^loson2013]. Key findings: (a) Mff-null MEFs show more severe elongation than Fis1-null MEFs; Fis1/Mff-double-null cells are more severely elongated than either single null, approaching Drp1-null, indicating Fis1 has a secondary independent role in MEFs. (b) MiD49 or MiD51 single siRNA knockdown each independently caused mitochondrial elongation (not requiring combined knockdown); simultaneous MiD49+MiD51 double knockdown was not more severe than either alone. (c) When MiD49 or MiD51 are expressed in Fis1/Mff-double-null cells, they can partially restore Drp1 recruitment and support CCCP-induced fragmentation, demonstrating that MiDs can function independently of both Fis1 and Mff. (d) Fis1 and Mff each contribute independently to DRP1 puncta density and size on mitochondria. The paper establishes that all four receptors can recruit Drp1, with Mff playing the dominant role under basal conditions in MEFs.

Liu & Chan 2015 further dissected the biochemistry: MFF preferentially recruits **oligomerized** DRP1 rather than DRP1 monomers, suggesting MFF functions as an oligomeric assembly platform rather than simply a tethering docking site [^liuchan2015]. #gap/needs-replication — this selectivity for oligomerized DRP1 was demonstrated biochemically but the in-vivo relevance under physiological GTP concentrations is less clear.

## Post-translational regulation

### AMPK-mediated phosphorylation (fission activation)

The most aging-relevant regulatory event on MFF is direct phosphorylation by [[ampk]] during energy stress. Toyama et al. 2016 (*Science*) established:

1. AMPK is required for rapid mitochondrial fragmentation in response to ETC inhibitors (rotenone, antimycin A) — AMPK double-knockout (α1/α2 DKO) U2OS cells and MEFs fail to fragment under these conditions [^toyama2016]. Note: CCCP-induced fragmentation operates via OPA1 cleavage (a distinct pathway) and is less dependent on AMPK in this system.
2. MFF is a direct AMPK substrate; AMPK phosphorylates MFF at **Ser155 and Ser172** (human MFF numbering), the two validated AMPK phospho-acceptors characterized in the paper. In vitro kinase assays showed mutation of Ser172 alone attenuates most phosphorylation; full ablation requires mutation of both sites (SA2 double mutant: Ser155Ala/Ser172Ala).
3. Phosphomimetic MFF (SD2: Ser155Asp/Ser172Asp; SE2: Ser155Glu/Ser172Glu) causes constitutive gain-of-function fission — shortened mitochondria even without stress stimuli. Phosphonull MFF (SA2) blocks AICAR- and rotenone-induced DRP1 recruitment to mitochondria and energy-stress-induced fragmentation; basal DRP1 localization to mitochondria remains largely normal in SA2 cells. Explicit mitophagy flux measurements are not reported in this paper.

This positions MFF as the **downstream effector** of the AMPK energy-stress fission signal: AMP↑ → AMPK activation → MFF phosphorylation (Ser155/Ser172) → increased DRP1 OMM recruitment → fission. The circuit provides a direct mechanistic link between the [[ampk]] energy-sensing pathway and mitochondrial morphology control. In vivo validation used mouse layer 2/3 cortical neurons (via in utero electroporation): neurons expressing SA2 MFF showed elongated dendritic mitochondria, while SD2 MFF caused constitutive fragmentation, demonstrating that AMPK-site phosphorylation of MFF is functionally critical in post-mitotic mammalian neurons [^toyama2016].

**Aging implication:** AMPK activity declines with age in multiple tissues. If AMPK-driven MFF phosphorylation is a gating step for energy-stress-induced fission, age-associated AMPK decline could blunt the acute fission/mitophagy response to mitochondrial damage — contributing to the accumulation of dysfunctional mitochondria characteristic of aged tissue. #gap/needs-human-replication — the age-dependent decline in AMPK→MFF→fission signaling has not been directly demonstrated in aged human tissue; the causal contribution to the aging mitophagy deficit is inferred from molecular logic.

| Dimension | Status |
|---|---|
| AMPK→MFF phosphorylation conserved in humans? | yes — demonstrated in human cell lines |
| Age-associated AMPK decline effect on MFF? | unknown — not directly measured |
| Replicated in humans? | no — no in-vivo human data |

### Other phosphorylation sites

UniProt Q9GZY8 lists additional phosphorylation sites on the MFF cytoplasmic domain from high-throughput phosphoproteomic datasets (pSer157, pSer202, pSer229, pSer233, pSer295; pThr115, pThr200). Note that Ser155 and Ser172 are the validated AMPK sites (Toyama 2016); the remaining listed sites have no assigned kinase and their functional significance is unknown. #gap/no-mechanism

## Receptor redundancy and the fission stoichiometry question

The four mammalian DRP1 receptors (MFF, MID49, MID51, FIS1) display overlapping but non-identical functions:

| Receptor | Fission role | DRP1 effect | Notes |
|---|---|---|---|
| MFF | Positive recruiter | Recruits oligomerized DRP1; promotes fission | Dominant receptor in dividing cells [^otera2010] |
| MID49 | Bifunctional | Recruits DRP1 but can tether without scission | AMPK-independent [^loson2013] |
| MID51 | Bifunctional | Recruits and inhibits DRP1; GDP-binding sensitive | Nucleotide-dependent switch |
| FIS1 | Minor (mammals) | Minimal DRP1 recruitment contribution | Important in yeast; mammalian role unclear [^otera2010] |

MID49 and MID51 can form a ternary complex with DRP1 that retains DRP1 at the OMM without immediately triggering scission — a "holding" or "priming" state that is converted to productive fission by downstream signals (ΔΨm collapse, PINK1 activity). MFF appears to be the receptor that converts this held state into active scission, though the molecular choreography between receptors at a single fission site is not fully resolved. #gap/no-mechanism

## Disease associations: EMPF2

Loss-of-function mutations in MFF cause **encephalopathy due to defective mitochondrial and peroxisomal fission 2 (EMPF2; OMIM 614874)**, an autosomal recessive disorder with neonatal or infantile onset [^empf2_2020]. Clinical features include severe intellectual disability, psychomotor delay, hypotonia, microcephaly, basal ganglia abnormalities, and elevated plasma lactate in some cases. Fibroblasts from patients show abnormally elongated mitochondria and peroxisomes, confirming the fission deficit.

EMPF2 is the recessive counterpart to EMPF1 (caused by dominant DNM1L mutations — see [[drp1]]). The phenotypic overlap reflects their shared fission-defect mechanism, though EMPF2 typically presents with more purely neurological features because the recessive inheritance means complete loss of MFF function rather than a dominant-negative effect.

**Key contrast to EMPF1:** EMPF1 (DRP1 LoF) affects both mitochondrial and peroxisomal fission because DRP1 is the shared fission GTPase for both organelles. EMPF2 (MFF LoF) produces a similar combined phenotype because MFF is also required for peroxisomal fission in addition to mitochondrial fission — confirming that MFF is the upstream OMM receptor in both organellar fission pathways. #gap/needs-replication — EMPF2 is a rare disorder described in small case series; the full phenotypic spectrum and genotype-phenotype correlations are incompletely characterized.

## Role in mitophagy

MFF sits at the bottleneck of the fission-before-mitophagy quality-control circuit established by Twig et al. 2008 (described in full on [[mitochondrial-dynamics]] and [[mitophagy]]):

1. Energy stress or ΔΨm decline → AMPK activation / PINK1 stabilization
2. AMPK phosphorylates MFF → increased DRP1 OMM recruitment
3. DRP1 ring assembly at MFF-enriched OMM contact sites → membrane constriction and scission
4. Asymmetric fission isolates low-ΔΨm daughter mitochondria
5. PINK1 accumulates on isolated, depolarised mitochondria → Parkin recruitment → ubiquitin-mediated [[mitophagy]]

Phosphorylation-null MFF (SA2) mutants that block step 2 abolish energy-stress-induced DRP1 recruitment and fission [^toyama2016], consistent with MFF activity being rate-limiting for the upstream segregation step. Direct measurement of mitophagy flux downstream of MFF phosphorylation was not reported in Toyama 2016; the link to mitophagy clearance is inferred from the fission block. #gap/no-mechanism

In the context of aging: if MFF is insufficiently activated (e.g., due to AMPK decline or reduced signaling upstream), the fission-mitophagy axis is impaired, damaged mitochondria persist, and the bioenergetic deterioration characteristic of the [[mitochondrial-dysfunction]] hallmark may accumulate.

## Aging biology summary

MFF is not a direct lifespan-determining gene in the sense of having GenAge entries or longevity GWAS hits. Its aging relevance is **mechanistic and indirect**:

1. **AMPK–MFF axis declines with age.** AMPK activity falls in aged skeletal muscle, liver, and brain in rodents; if MFF phosphorylation falls in parallel, the energy-stress fission response is blunted. #gap/needs-human-replication
2. **MFF as gatekeeper for mitophagy.** Impaired fission → impaired mitophagic clearance → accumulation of dysfunctional mitochondria → ROS → further mitochondrial damage (feedforward loop consistent with the [[mitochondrial-dysfunction]] hallmark).
3. **Network-level balance.** MFF controls the rate of fission; its activity relative to fusion GTPases ([[mitofusins]], [[opa1]]) determines whether the network is elongated or fragmented. Aged post-mitotic cells typically shift toward fragmentation or paradoxically toward over-fusion (DRP1 decline) — either extreme impairs mitochondrial quality control. MFF activity modulation could in principle normalize fission rate, though no aging-focused MFF intervention has been tested. #gap/long-term-unknown

## Druggability

MFF is a tail-anchored scaffolding protein without an obvious enzymatic active site. Its primary function is surface-exposed PPI-mediated DRP1 recruitment (OMM-facing cytoplasmic domain). PPI inhibitors targeting this interface are a possible therapeutic angle, but no tool compounds or clinical leads have been reported as of early 2026. **Open Targets Platform druggability** (queried 2026-05-06, ENSG00000168958): tier 3 (predicted druggable) — no approved drug, no advanced/Phase 1 clinical, no structure-with-ligand, no high-quality ligand or pocket, no druggable-family classification across SM/AB/OC modalities. Positive signals are confined to the PROTAC modality: database-evidence ubiquitination (`Database Ubiquitination = true`) and existing protein half-life data (`Half-life Data = true`), suggesting PROTAC-mediated degradation is the most tractable chemical-biology route should aging or disease indications motivate it. #gap/no-mechanism — the precise structural interface between MFF and oligomerized DRP1 is not resolved at atomic resolution, limiting rational design of either PPI inhibitors or PROTAC ligands.

## Limitations and gaps

| Gap | Tag | Notes |
|---|---|---|
| Open Targets druggability tier | `#gap/no-opentargets-entry` | API query failed during seeding; tier not confirmed; likely 3–4 given PPI mechanism |
| Age-dependent MFF phosphorylation status | `#gap/needs-human-replication` | AMPK→MFF Ser155/Ser172 phosphorylation in aged human tissue not directly measured; causal contribution to mitophagy decline is inferred |
| No GenAge entry | — | MFF not listed in GenAge Build 21; aging relevance via functional circuit only |
| Non-AMPK phosphorylation site kinases | `#gap/no-mechanism` | UniProt-annotated phosphosites on MFF (Ser157, 202, 229, 233, 295; Thr115, 200) have no assigned kinase |
| MFF-dependent mitophagy flux | `#gap/no-mechanism` | Toyama 2016 shows SA2 MFF blocks energy-stress fission but does not directly measure mitophagy flux; the mitophagy link is inferred |
| MFF–DRP1 interaction structure | `#gap/no-mechanism` | Atomic-resolution structure of MFF cytoplasmic domain in complex with oligomerized DRP1 is not available; limits rational design |
| EMPF2 genotype–phenotype | `#gap/needs-replication` | EMPF2 is a rare disorder; full allele spectrum and phenotypic range incompletely described |
| Receptor choreography at fission sites | `#gap/no-mechanism` | The temporal/spatial order in which MFF, MID49, MID51 engage DRP1 at a single fission event is unresolved |
| Otera 2010 primary source | `#gap/no-fulltext-access` | Closed-access (not_oa per a local paper archive); MFF-as-primary-recruiter claims unverified against full text |
| EMPF2 case paper | `#gap/no-fulltext-access` | Closed-access (not_oa per a local paper archive); disease phenotype details unverified against full text |

## Cross-references

- [[drp1]] — primary DRP1 GTPase recruited by MFF; verified R12/R25
- [[fis1]] — co-seeded sibling receptor; mammalian DRP1-recruitment role disputed
- [[mid49]] — co-seeded sibling receptor; bifunctional recruiter/inhibitor
- [[mid51]] — co-seeded sibling receptor; related to MID49
- [[mitofusins]] — OMM fusion GTPases; oppose fission; MFN2 degraded downstream of DRP1/fission by PINK1/Parkin
- [[opa1]] — IMM fusion GTPase; opposes fission; L-OPA1 degradation by OMA1 upon ΔΨm collapse is the post-fission fusion-arrest signal
- [[ampk]] — directly phosphorylates MFF to activate fission under energy stress (Toyama 2016); verified
- [[mitochondrial-dynamics]] — pathway page; full fission machinery overview including all four DRP1 receptors
- [[mitophagy]] — fission-dependent selective autophagy; MFF is gatekeeper of the upstream segregation step
- [[pink1-parkin-pathway]] — PINK1 accumulation on low-ΔΨm post-fission mitochondria is the downstream quality-control signal
- [[mitochondrial-dysfunction]] — the hallmark driven by fission/fusion imbalance and impaired mitophagy
- [[disabled-macroautophagy]] — MFF loss impairs mitophagy flux (via blocked fission-segregation step)

## Footnotes

[^gandrebabbe2008]: doi:10.1091/mbc.e07-12-1287 · [[studies/gandre-babbe-2008-mff-identification]] · in-vitro (RNAi siRNA + overexpression, HeLa cells; primary Drosophila siRNA screen in S2 cells) · model: HeLa cells (main experiments); Drosophila S2 cells (initial screen) · siRNA elongation phenotype in 94 ± 5% cells (n=350–400 cells, 4 experiments); overexpression does NOT cause fragmentation (6.0 ± 3.8% fragmented vs 7.7 ± 1.7% control); MFF in ~200-kDa complex distinct from Drp1/Fis1 · Crossref-confirmed title: "The Novel Tail-anchored Membrane Protein Mff Controls Mitochondrial and Peroxisomal Fission in Mammalian Cells" · 755 citations; green OA; verified against PDF

[^otera2010]: doi:10.1083/jcb.201007152 · [[studies/otera-2010-mff-drp1-recruitment]] · in-vitro (siRNA knockdown + live imaging, HeLa/HCT116) · model: human cell lines · Crossref-confirmed title: "Mff is an essential factor for mitochondrial recruitment of Drp1 during mitochondrial fission in mammalian cells" · 1,073 citations; closed-access #gap/no-fulltext-access

[^loson2013]: doi:10.1091/mbc.E12-10-0721 · [[studies/loson-2013-drp1-receptors-fission]] · in-vitro (Fis1-null, Mff-null, Fis1/Mff-double-null MEF knockout lines; MiD49/MiD51 siRNA knockdown; CCCP-induced fission assays; FRAP) · model: mouse embryonic fibroblasts (MEFs); HeLa cells (siRNA) · Mff-null more severe than Fis1-null; MiD49 or MiD51 single knockdown each independently cause elongation; MiDs can restore fission in Fis1/Mff-null background · Crossref-confirmed title: "Fis1, Mff, MiD49, and MiD51 mediate Drp1 recruitment in mitochondrial fission" · 1,168 citations; green OA; verified against PDF

[^toyama2016]: doi:10.1126/science.aab4138 · [[studies/toyama-2016-ampk-mff-fission]] · in-vitro + in-vivo (AMPK α1/α2 DKO U2OS cells + MEFs + primary hepatocytes; phosphomimetic/phosphonull Mff mutants; mouse cortical neurons via in utero electroporation) · model: human U2OS cells, mouse MEFs, mouse primary hepatocytes, mouse cortical neurons in vivo · AMPK phosphorylates MFF at Ser155 and Ser172 (human numbering); SA2 phosphonull blocks energy-stress DRP1 recruitment; SD2/SE2 phosphomimetic causes constitutive fission · Crossref-confirmed title: "AMP-activated protein kinase mediates mitochondrial fission in response to energy stress" · 1,022 citations; green OA (PMC4852862); verified via PMC full text

[^liuchan2015]: doi:10.1091/mbc.E15-08-0591 · [[studies/liu-chan-2015-mff-oligomerized-drp1]] · in-vitro (yeast two-hybrid screen of Drp1 mutants; GST pulldown with recombinant proteins; SEC; Drp1-null MEF reconstitution) · model: yeast two-hybrid + recombinant protein biochemistry + Drp1-null mouse MEFs · Mff binds Drp1 oligomers (tetramers or higher) via Drp1 stalk domain; insert B of Drp1 inhibits Mff binding; MiD51/MiD49 can recruit Drp1 dimers; Mff-binding Drp1 mutants (10, 16, 17) lack fission activity in MEFs · Crossref-confirmed title: "The mitochondrial fission receptor Mff selectively recruits oligomerized Drp1" · 183 citations; green OA; verified against PDF

[^empf2_2020]: doi:10.1111/cge.13740 · [[studies/empf2-2020-mff-mutation-child]] · in-vivo + genetics (case report + fibroblast assays, n=1 proband) · model: human pediatric case + primary fibroblasts · Crossref-confirmed title: "Encephalopathy due to defective mitochondrial and peroxisomal fission 2 caused by a novel MFF gene mutation in a young child" · 21 citations; closed-access #gap/no-fulltext-access
