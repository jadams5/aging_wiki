---
type: protein
aliases: [FANCI, KIAA1794, Fanconi anemia group I protein, FA complementation group I]
uniprot: Q9NVI1
ncbi-gene: 55215
hgnc: 25568
mouse-ortholog: Fanci
ensembl: ENSG00000140525
genage-id: null
pathways: ["[[dna-damage-response]]", "[[homologous-recombination]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by:
  - "DNA-damage signal via ATR/ATM → FA-core-complex activation"
  - "FA-core-complex (FANCA/B/C/E/F/G/L/M/FAAP24/FAAP100) monoubiquitination of FANCD2 and FANCI"
  - "cGAS chromatin retention (Chen 2025 — enhances FANCI–RAD50 interaction at DSBs)"
causes:
  - "ID2 complex chromatin loading and ICL-lesion recognition"
  - "Downstream HR-factor scaffolding (BRCA2, PALB2, RAD51)"
  - "RAD50 recruitment to DSB sites (Chen 2025)"
verified: false
verified-date: null
verified-by: null
verified-scope: null
literature-checked-through: 2026-05-12
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 — synthesized from UniProt Q9NVI1, NCBI Gene 55215, and widely-cited FA-pathway literature. The FANCI–RAD50 axis (Chen 2025) is cited from the abstract only due to closed-access PDF (#gap/no-fulltext-access). Numerics may be approximate; verify before relying on quantitative claims.

# FANCI (Fanconi anemia complementation group I)

FANCI is a 1,328-amino-acid nuclear DNA-repair protein that heterodimerizes with [[fancd2]] to form the **ID2 complex** — the central effector node of the [[Fanconi anemia pathway|Fanconi anemia (FA) pathway]]. Monoubiquitination of the ID2 complex activates interstrand crosslink (ICL) repair and scaffolds downstream [[homologous-recombination]] factors. A 2025 *Science* paper (Chen et al.) identifies FANCI as a partner of [[rad50]] at general DNA double-strand breaks (DSBs), with the interaction enhanced by chromatin-retained [[cgas]] — extending FANCI's functional reach beyond its canonical ICL context.

## Identity

- **UniProt:** Q9NVI1 (FANCI_HUMAN) — Swiss-Prot (manually reviewed)
- **NCBI Gene:** 55215
- **HGNC:** 25568
- **Ensembl:** ENSG00000140525
- **Chromosomal location:** 15q26.1
- **Mouse ortholog:** Fanci (NCBI Gene 208836); one-to-one ortholog
- **Length:** 1,328 amino acids; 4 isoforms via alternative splicing
- **GenAge:** not listed (FANCI absent from GenAge Build 21 human gene set)
- **OMIM:** MIM 609053 (Fanconi anemia complementation group I)

## Key functional domains and PTMs

FANCI adopts a solenoid fold comprising 65 helices, 17 beta strands, and 10 turns, enabling it to cradle and scan double-stranded DNA as part of the ID2 heterodimer [^alcon2020].

Key post-translational modifications:
- **Monoubiquitination at Lys-523** — the activation mark deposited by the FA core complex; required for nuclear focus formation and HR-factor recruitment [^alcon2020]
- **Phosphorylation** at Ser-407, Ser-556, Ser-730, Thr-952, Ser-1121 — ATR-dependent phosphorylation at multiple sites modulates DNA-binding and complex dynamics
- **Deubiquitination by USP1–UAF1** — removes the Lys-523 mark to terminate the repair signal; UAF1 binds FANCI directly [^rennie2021]

## In the Fanconi anemia pathway (ID2 complex, monoubiquitination, ICL repair)

FANCI forms a constitutive heterodimer with [[fancd2]], together designated the **ID2 complex**. Upon detection of an interstrand crosslink (ICL) — a covalent lesion that locks both DNA strands and blocks replication forks — the upstream FA core complex (comprising FANCA, FANCB, FANCC, FANCE, FANCF, FANCG, FANCL, FANCM, FAAP24, FAAP100) monoubiquitinates both FANCI at Lys-523 and FANCD2 at Lys-561 in a cooperative, interdependent manner [^lemonidis2023]. **Note (per 2026-05-13 verifier pass on [[fancd2]]):** the relationship between FANCI and FANCD2 monoubiquitination in cells is interdependent (Lemonidis 2023 model: FANCI-ub maintains FANCD2-ub by inhibiting USP1–UAF1-mediated deubiquitination), but Longerich et al. 2014 (*NAR*) showed FANCD2 monoubiquitination is *largely independent* of FANCI ubiquitination in the original kinetic experiments — i.e., the FANCD2 mono-ub event does not require prior FANCI ub. The mature consensus integrates both: FANCI ub is dispensable for the initial FANCD2 ub event but required for sustaining/maintaining it through repair cycles.

The monoubiquitinated ID2 complex undergoes a conformational change: cryo-EM structures demonstrate that ubiquitinated FANCD2–FANCI adopts a closed "clamp" conformation enclosing double-stranded DNA, with ubiquitin acting as a molecular pin that stabilizes the closed form [^alcon2020]. **Structural note:** Alcón et al. 2020 (*NSMB*) reconstituted the structure using *Gallus gallus* (chicken) FANCD2–FANCI orthologs — chicken FANCI K525 corresponds to human FANCI K523 — and in that reconstituted system FANCD2 was monoubiquitinated by the chicken FA core complex; FANCI itself was not monoubiquitinated in the structural preparation. The closed-clamp conformation is therefore established for FANCD2-ub-only ID2, not strictly ID2-(ub)2. This chromatin-clamped complex then scaffolds the downstream "ID2-interactome" of HR and nuclease factors required to unhook and repair the ICL:

- **BRCA2 / FANCD1** — Rad51 loader; delivers RAD51 filament to the resected ssDNA
- **PALB2 / FANCN** — bridging factor between BRCA1 and BRCA2 at the break
- **RAD51** — strand invasion mediator for HR template copying
- **FAN1 nuclease** — ICL unhooking endonuclease
- **SLX4 / FANCP** — scaffold for SLX1, MUS81, XPF endonucleases; coordinates dual incisions flanking the crosslink

FANCI ubiquitination maintains FANCD2 ubiquitination by preventing excessive deubiquitination and enabling re-ubiquitination within the DNA-bound complex — an interdependent positive-feedback loop that sustains repair at the lesion site until completion [^lemonidis2023].

Repair is terminated when USP1–UAF1 removes the ubiquitin marks. UAF1 binds FANCI directly, providing substrate specificity for the deubiquitinase complex [^rennie2021].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Canonical FA pathway; all components are human genes |
| Phenotype conserved in humans? | yes | Biallelic mutations cause Fanconi anemia in humans |
| Replicated in humans? | yes | Fanconi anemia is the direct human loss-of-function phenotype |

## In general DSB repair — the Chen 2025 FANCI–RAD50 axis

A 2025 *Science* paper using naked mole-rat biology as a model system (Chen et al., doi:10.1126/science.adp5056) identified a novel regulatory circuit in which chromatin-retained [[cgas]] — when prolonged by the distinct NMR chromatin-affinity mechanism — **enhances the interaction between FANCI and [[rad50]]**, promoting RAD50 recruitment to DNA damage sites and potentiating homologous recombination [^chen2025].

This extends FANCI's canonical role: whereas its FA-pathway activity is specific to ICLs, the Chen 2025 data suggest FANCI participates at general DSB repair foci through a RAD50-dependent mechanism. **[[rad50]]** is the ATPase subunit of the MRN complex (MRE11–RAD50–NBS1), which is the initial DSB sensor; its recruitment facilitates end resection and ATM activation.

**Key mechanistic ambiguities — #gap/no-fulltext-access:**

1. **ID2 complex vs monomeric FANCI.** The abstract reports an "interaction between repair factors FANCI and RAD50." It is unclear whether the relevant FANCI species is (a) the intact monoubiquitinated ID2 complex (FANCI + FANCD2), (b) free FANCI monomer, or (c) FANCI in a distinct sub-complex at DSBs. Resolving this would determine whether FANCD2 is co-recruited and whether monoubiquitination is required for the RAD50 interaction.
2. **Direct vs scaffolded interaction.** Whether cGAS retention enhances FANCI–RAD50 interaction through direct protein–protein contact, through cGAS acting as a structural scaffold, or via a chromatin-accessibility mechanism is not resolvable from the abstract alone.
3. **Species specificity.** The Chen 2025 study uses naked mole-rat biology. Whether the magnitude or mechanism of cGAS-enhanced FANCI–RAD50 interaction is conserved in humans at physiological cGAS-chromatin retention levels requires independent verification. #gap/needs-human-replication

## In aging

### Fanconi anemia as a segmental progeroid syndrome

Biallelic loss-of-function mutations in any FA pathway gene — including FANCI — cause **Fanconi anemia (FA)**, characterized by progressive bone marrow failure, cancer predisposition (leukemia, squamous cell carcinomas), skeletal abnormalities, and growth retardation. FA is classified as a **segmental progeroid syndrome** — it reproduces selected features of accelerated aging (genomic instability, bone marrow failure, cancer predisposition) without recapitulating all aging phenotypes [^mori2018].

This progeroid overlap arises because the FA pathway is critical in long-lived stem cell populations, particularly hematopoietic stem cells (HSCs), whose function depends on genome fidelity over decades. Loss of ICL-repair capacity in HSCs causes progressive genotoxic attrition resembling the clonal HSC dynamics of normal aging at accelerated tempo [^li2022].

### ICL accumulation and FA-pathway demand with age

ICLs are not merely exogenous (chemotherapy-induced) lesions. Multiple endogenous sources of ICL-forming agents accumulate with age:

- **Endogenous aldehydes** (formaldehyde, acetaldehyde, acrolein, 3-aminopropanal) — byproducts of metabolic one-carbon metabolism and polyamine catabolism. Deficiency of aldehyde-detoxifying enzymes (ADH5, ALDH3-family, ALDH9A1) causes ICL accumulation requiring FA pathway repair [^jung2025].
- **Lipid aldehydes** — produced by lipid peroxidation under oxidative stress; cross-link DNA directly [^jung2025].

The FA genomic instability signature has been identified in cancer samples from patients with FA pathway gene mutations, confirming that endogenous aldehyde exposure over a lifetime imposes a substantial ICL burden [^webster2022]. This implies that partial reduction of FA-pathway efficiency (e.g., from aging-associated epigenetic silencing, DNA methylation of FANCI or partner genes, or accumulation of somatic FANCI mutations in aging HSCs) could accelerate ICL-driven genome instability even in people without inherited FA.

### Sex-specific aging of the FA pathway

A 2025 study in human lymphocytes (Rall-Scharpf et al., *Nucleic Acids Research*) found that FA pathway activity declines specifically in older women, with a shift toward translesion synthesis as an alternative ICL-bypass route, while older men upregulate fork-remodeling and PARP-dependent repair [^rall2025]. This sex-specific divergence in FA-pathway aging is a novel finding with potential implications for sex differences in FA-associated cancer risk at age. #gap/needs-replication — single study; lymphocyte-specific; mechanism unknown.

### FA pathway in hematopoietic stem cell aging

Functional FANCD2 (the ID2 complex partner) is required in HSCs from fetal development through adult life. NIPA, a Fanconi anemia-associated protein that regulates FANCD2 nuclear localization, is essential for HSC function under replication stress; NIPA knockout mice develop bone marrow failure and a premature aging phenotype [^kreutmair2020]. These data reinforce that ID2-complex-dependent ICL repair is continuously required to maintain the HSC pool over a lifespan — and that partial attrition of this capacity phenocopies accelerated hematopoietic aging.

## Knowledge gaps

1. **FANCI–RAD50 binding mode at DSBs.** The structural interface between FANCI and RAD50 has not been defined. Does FANCI contact the RAD50 coiled-coil, the ATPase head, or MRE11? Is the interaction direct or bridged (via FANCD2, or via cGAS itself)? #gap/no-fulltext-access #gap/needs-replication
2. **Monoubiquitination requirement for RAD50 recruitment.** Does the Chen 2025 cGAS→FANCI–RAD50 axis require prior monoubiquitination of FANCI at Lys-523, or does it operate via unmodified FANCI? This determines whether FA-core-complex activation is a prerequisite for the cGAS-enhanced DSB repair mechanism.
3. **Human conservation of the cGAS–FANCI–RAD50 axis.** Chen 2025 was demonstrated in naked mole-rat cells; the extent to which human cGAS chromatin affinity (notably lower than NMR cGAS) produces a similar enhancement of FANCI–RAD50 interaction is unknown. #gap/needs-human-replication
4. **Age-related decline in FANCI expression / activity in human tissues.** No GTEx aging-correlation data have been curated for FANCI (`gtex-aging-correlation: null`); whether FANCI protein levels or ubiquitination efficiency decline in aged human HSCs or other tissues is not established. #gap/unsourced
5. **Somatic FANCI mutations in aging.** Whether FANCI accumulates somatic loss-of-function mutations in aged tissues (analogous to DNMT3A / TET2 in CHIP) is not documented. ICL-repair pathway genes are not established CHIP drivers, but the question has not been systematically studied.
6. **Druggability.** FANCI has no clinical drug, probe, or clinical-stage inhibitor (Open Targets tier 4). No aging-context modulator exists. Potential strategies — FA-pathway enhancers to boost ICL repair in aging, or FANCI-specific ubiquitination stimulators — are entirely hypothetical.

## Pathway membership

- [[dna-damage-response]] — ATR/ATM → FA-core-complex → ID2-monoubiquitination arm
- [[homologous-recombination]] — ID2 complex scaffolds RAD51/BRCA2/PALB2 at ICLs; Chen 2025 RAD50 axis at general DSBs
- Fanconi anemia pathway (implicit — no dedicated wiki page yet; closest canonical node is [[dna-damage-response]]) #stub

## Key interactors

| Partner | Interaction type | Notes |
|---|---|---|
| [[fancd2]] | Constitutive heterodimer (ID2 complex) | Mutual stabilization; co-monoubiquitinated by FA core complex |
| FANCL / UBL5 | FA core complex subunits | Deposit monoubiquitin at Lys-523 |
| USP1–UAF1 | Deubiquitinase | UAF1 contacts FANCI directly; removes Lys-523 mark [^rennie2021] |
| [[rad50]] | Interaction at DSBs | Enhanced by cGAS chromatin retention (Chen 2025) [^chen2025] |
| [[brca2]] / FANCD1 | Downstream HR factor | Scaffolded by monoubiquitinated ID2 at ICLs |
| [[palb2]] / FANCN | Downstream HR factor | Bridging BRCA1–BRCA2 at ICLs |

## Footnotes

[^alcon2020]: doi:10.1038/s41594-020-0380-1 · Alcón P et al. · *Nat Struct Mol Biol* 2020 · cryo-EM of FANCD2–FANCI closed clamp on DNA · in-vitro structural + biochemical · key result: monoubiquitination of FANCD2 induces closed-clamp conformation enclosing dsDNA; ubiquitin acts as molecular pin · archive: pending

[^lemonidis2023]: doi:10.15252/embj.2022111898 · Lemonidis K et al. · *EMBO J* 2022 · cryo-EM + biochemistry · interdependent FANCI–FANCD2 ubiquitination; FANCI ubiquitination prevents FANCD2 deubiquitination and enables re-ubiquitination · archive: pending

[^rennie2021]: doi:10.1038/s41594-021-00576-8 · Rennie ML et al. · *Nat Struct Mol Biol* 2021 · crystal structure of USP1–UAF1 bound to FANCI–ubiquitin · UAF1 establishes extensive FANCI interface · archive: pending

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · *Science* 2025 · doi:10.1126/science.adp5056 · PMID 41066557 · cited_by: 17 · abstract-only (closed-access PDF) · **#gap/no-fulltext-access** — FANCI–RAD50 interaction enhanced by chromatin-retained cGAS; RAD50 recruitment to damage sites; HR potentiation; model: naked mole-rat cells

[^webster2022]: doi:10.1038/s41586-022-05253-4 · Webster ALH et al. · *Nature* 2022 · n=1,000+ cancer genomes · observational (genomic) · FA pathway deficiency causes characteristic genomic rearrangement signature from endogenous aldehyde exposure · archive: pending

[^jung2025]: doi:10.1083/jcb.202407141 · Jung M et al. · *J Cell Biol* 2025 · in-vitro + cell-line · ALDH9A1 deficiency + FA pathway loss = synthetic lethality; polyamine-derived aldehydes (3-aminopropanal, acrolein) as endogenous ICL sources · archive: failed download

[^rall2025]: doi:10.1093/nar/gkaf498 · Rall-Scharpf M et al. · *Nucleic Acids Research* 2025 · in-vitro (human lymphocytes from aged donors) · observational · FA pathway activity declines in older women; shift to TLS; older men upregulate fork-remodeling · archive: completed (PDF available)

[^kreutmair2020]: doi:10.1172/JCI126215 · Kreutmair S et al. · *J Clin Invest* 2020 · in-vivo (mouse KO) · NIPA loss causes FA-pathway dysfunction, HSC DNA damage accumulation, and premature aging + bone marrow failure phenotype · archive: pending

[^li2022]: doi:10.3724/abbs.2022053 · Li N et al. · *Acta Biochim Biophys Sin* 2022 · review · FA/BRCA pathway in hematopoietic system aging; ICL-repair capacity in long-lived HSCs

[^mori2018]: doi:10.1002/humu.23367 · Mori T et al. · *Hum Mutat* 2018 · case series + review · ERCC4/XPF mutations in segmental progeroid syndromes; contextualizes FA progeroid overlap with other DNA-repair-deficiency disorders
