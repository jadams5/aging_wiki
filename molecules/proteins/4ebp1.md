---
type: protein
aliases: [4EBP1, EIF4EBP1, PHAS-I, "eukaryotic translation initiation factor 4E-binding protein 1", "eIF4E-binding protein 1"]
uniprot: Q13541
ncbi-gene: 1978
hgnc: 3288
mouse-ortholog: Eif4ebp1
ensembl: ENSG00000187840
key-domains: [eIF4E-binding YXXXXLphi motif, TOS motif, disordered linker]
key-ptms: [Thr37-phosphorylation, Thr46-phosphorylation, Thr70-phosphorylation, Ser65-phosphorylation, Ser101-phosphorylation, Ser112-phosphorylation]
pathways: ["[[mtor]]", "[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[loss-of-proteostasis]]", "[[cellular-senescence]]"]
known-interactors: ["[[eif4e]]", "[[mtor]]", "[[raptor]]"]
genage-id: null
druggability-tier: 2
caused-by: []
causes: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Primary-source claims verified against PDFs for Bjedov 2010, Zid 2009, Thoreen 2012 (Nature, PMC manuscript), Gingras 1999, and Gingras 2001. Mannick 2014 not verifiable (closed-access, not_oa); claims tagged #gap/no-fulltext-access. UniProt Q13541 identity fields (uniprot, ncbi-gene, hgnc, ensembl) not independently re-verified against canonical databases on this pass — confirmed only via earlier REST-API check noted in original banner."
---

# 4E-BP1 (EIF4EBP1)

Eukaryotic translation initiation factor 4E-Binding Protein 1 — a 118-amino-acid intrinsically disordered translational repressor that is the dominant substrate through which [[mtor|mTORC1]] gates cap-dependent protein synthesis. In its hypophosphorylated state, 4E-BP1 sequesters [[eif4e]] (the mRNA 5' cap-binding factor) and prevents assembly of the eIF4F translation initiation complex. mTORC1 phosphorylates 4E-BP1 in a defined hierarchical order, releasing eIF4E and enabling anabolic translation. 4E-BP1 activity is the pivot through which nutrient and growth-factor sensing is coupled to the translational program — and its dysregulation in aging is a core mechanism linking constitutive mTORC1 signaling to the loss of translational fidelity, SASP amplification, and age-associated tissue decline.

**Naming note:** The gene symbol is *EIF4EBP1*; the protein is conventionally written 4E-BP1 (with hyphens). Early literature used the synonym PHAS-I (heat- and acid-stable phosphorylation target). This page uses "4E-BP1" as the primary protein name. The pathway page `[[mtor]]` covers the upstream signaling context; this page focuses on 4E-BP1's molecular function and aging relevance.

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q13541 (4EBP1_HUMAN) |
| NCBI Gene | 1978 |
| HGNC | 3288 |
| Ensembl | ENSG00000187840 |
| Chromosomal location | 8p12 |
| Length | 118 amino acids |
| MW | ~15 kDa (runs anomalously on SDS-PAGE) |
| Mouse ortholog | Eif4ebp1 (one-to-one) |
| GenAge entry | not listed #gap/needs-canonical-id |

#gap/needs-canonical-id — EIF4EBP1 was not found in GenAge-human or GenAge-models databases as of 2026-05-04. Given the strong *Drosophila* lifespan data (see below), it may qualify for inclusion; flagged for follow-up with HAGR curators.

---

## Functional domains

- **eIF4E-binding motif (YXXXXLphi, residues ~54–60)** — the canonical eIF4E-binding sequence shared with eIF4G; this motif is the competitive interface through which 4E-BP1 displaces eIF4G from eIF4E. When phosphorylated at Ser65 (the last site in the hierarchy), the motif's affinity for eIF4E drops sharply, releasing eIF4E for productive translation.
- **TOS motif (FEMDI, residues 114–118)** — C-terminal raptor-binding (RAPTOR/RPTOR) motif that recruits 4E-BP1 to the mTORC1 complex for phosphorylation. Analogous to the TOS motif in S6K1. Deletion of the TOS motif renders 4E-BP1 constitutively hypophosphorylated and repressive even when mTORC1 is active.
- **Disordered linker** — the bulk of the protein is intrinsically disordered; phosphorylation introduces electrostatic repulsion that remodels the disordered ensemble and displaces the YXXXXLphi motif from eIF4E.

---

## Post-translational modifications and phosphorylation hierarchy

mTORC1 phosphorylates 4E-BP1 in a strict sequential order [^gingras1999][^gingras2001]:

1. **Thr37 and Thr46** — priming phosphorylations; required for all subsequent phosphorylation events. These sites are partially rapamycin-resistant (catalytic mTOR inhibitors suppress them more completely than allosteric rapamycin). Phosphorylation here does not release eIF4E.
2. **Thr70** — intermediate phosphorylation; depends on prior Thr37/Thr46 phosphorylation.
3. **Ser65** — the final, rate-limiting step that dissociates 4E-BP1 from eIF4E. Fully rapamycin-sensitive.

| Site | Kinase | Rapamycin sensitivity | Functional consequence |
|---|---|---|---|
| Thr37, Thr46 | mTORC1 (FRAP) | partial | priming; necessary but insufficient to release eIF4E |
| Thr70 | mTORC1 | sensitive | intermediate step |
| Ser65 | mTORC1 | sensitive | final phosphorylation in hierarchy; Ser65 alone (or Ser65+Thr70) is **insufficient** to release eIF4E — full release requires all priming sites [^gingras2001] |
| Ser101, Ser112 | DYRK2 | mTOR-independent | role less well characterized #gap/unsourced |

**Key concept:** Only the fully hyperphosphorylated (Thr37/46 + Thr70 + Ser65) form is released from eIF4E. Intermediate phosphorylation states can bind eIF4E with reduced but non-zero affinity. This means partial mTORC1 inhibition (e.g., rapamycin at physiological concentrations) may not fully de-repress 4E-BP1, while catalytic mTOR inhibitors achieve more complete suppression of Thr37/46.

---

## Core mechanism: gating cap-dependent translation

In nutrient-replete, growth-factor-stimulated conditions:

1. Insulin/IGF-1 → [[insulin-igf1|PI3K-Akt]] → Akt phosphorylates TSC2 → TSC1/2 complex inactivated → Rheb-GTP accumulates → mTORC1 active.
2. mTORC1 phosphorylates 4E-BP1 at Thr37/46, Thr70, then Ser65.
3. Hyperphosphorylated 4E-BP1 is released from eIF4E.
4. Free eIF4E recruits eIF4G (scaffold) and eIF4A (helicase) → **eIF4F complex** assembled.
5. eIF4F binds the m^7^GTP 5' cap of mRNAs and unwinds secondary structure → 43S pre-initiation complex recruited → translation initiated.

In nutrient-deprived or mTORC1-inhibited conditions, the reverse occurs: hypophosphorylated 4E-BP1 sequesters eIF4E, blocking eIF4F assembly, and cap-dependent translation is globally suppressed.

**mRNA selectivity:** Not all mRNAs are equally sensitive to 4E-BP1 status. Transcripts with complex 5' UTR secondary structure or 5' terminal oligopyrimidine (5' TOP) motifs — encoding ribosomal proteins and translation factors — are preferentially regulated by the eIF4F complex and are therefore most sensitive to 4E-BP1 [^thoreen2012]. This was established by ribosome profiling in mouse embryonic fibroblasts (MEFs) treated with the catalytic mTOR inhibitor Torin1 (250 nM) vs vehicle: 5' TOP and TOP-like mRNA translation collapsed when 4E-BP1/2 were active, while IRES-dependent or short 5' UTR mRNAs were largely unaffected. In 4E-BP1/2 double-knockout MEFs, Torin1 had no significant effect on TOP mRNA translation, confirming the 4E-BP family is both necessary and sufficient for this selectivity.

| mRNA class | 4E-BP1 sensitivity | Examples |
|---|---|---|
| 5' TOP mRNAs | high | ribosomal proteins, elongation factors |
| Structured 5' UTR ("eIF4A-dependent") | high | cyclin D1, ODC, c-Myc |
| Short, unstructured 5' UTR | low | most housekeeping genes |
| IRES-containing | none | XIAP, some viral mRNAs |

---

## Role in aging

### *Drosophila*: 4E-BP overexpression extends lifespan under dietary restriction

The most direct aging evidence for 4E-BP comes from *Drosophila*. Zid et al. (2009) showed that:

- Dietary restriction (DR) in flies activates 4E-BP (via dTORC1 inhibition), shifting the translational landscape toward nuclear-encoded mitochondrial mRNAs, particularly electron transport chain (ETC) subunits.
- Flies overexpressing activated d4E-BP on **rich food** extended mean lifespan **~11% in males and ~22% in females** (p<0.0001, log-rank). Overexpression on DR food (0.25% YE) did **not** extend lifespan in either sex, consistent with 4E-BP already being near-maximally active under DR [^zid2009].
- The lifespan benefit of DR was substantially blunted in 4E-BP-null flies: control male flies showed a **35% lifespan extension on DR**, while 4E-BP-null males showed only **8%**; control females showed **42%**, null females showed **13%** — indicating that 4E-BP mediates the majority but not all of the DR lifespan benefit [^zid2009].
- The mechanism proposed: 4E-BP-mediated selective translation of mitochondrial mRNAs improves ETC complex assembly and mitochondrial respiration efficiency, reducing oxidative damage. #gap/no-mechanism — the causal chain from 4E-BP → mitochondrial translation → lifespan is plausible but not fully resolved; alternative mechanisms (e.g., reduced overall translation reducing proteotoxic stress) have not been excluded.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | mTORC1 → 4E-BP1 → eIF4E axis is functionally conserved; 4E-BP1/2/3 exist in mammals |
| Phenotype conserved in humans? | unknown | No equivalent 4E-BP overexpression experiment in humans or mammals |
| Replicated in humans? | no | #gap/needs-human-replication |

### Rapamycin lifespan extension: 4E-BP and autophagy as parallel effectors

Bjedov et al. (2010) showed that rapamycin extends lifespan in *Drosophila* via at least two separable mechanisms downstream of TORC1: **autophagy** (Atg5-dependent) and **translational repression** (4E-BP-dependent) [^bjedov2010]. Key findings:

- Rapamycin extended median lifespan in wild-type (*yw*) flies (p=0.0033, log-rank; Figure 5C control arm).
- In *4E-BP-null* flies, rapamycin did **not** significantly extend lifespan (p=0.4027, log-rank; Figure 5C) — indicating that 4E-BP is required for the rapamycin lifespan benefit, not merely one of several parallel effectors.
- In *Atg5*-RNAi flies (autophagy-deficient), rapamycin lifespan extension was similarly abolished (p=0.5383, log-rank; Figure 5E).
- The two pathway deficiencies were independently sufficient to abolish the effect, suggesting 4E-BP-mediated translational repression and autophagy are **parallel, non-redundant** mechanisms by which rapamycin extends lifespan — each is necessary.

This framing has important therapeutic implications: interventions that only restore autophagy (e.g., [[caloric-restriction]] mimetics focused on AMPK) may capture only part of rapamycin's longevity benefit; restoration of 4E-BP1 activity may provide additive benefit.

#gap/needs-human-replication — The autophagy + 4E-BP dual-effector model derives from *Drosophila*; the relative contributions in mammals (and humans) remain unquantified.

### mTORC1 hyperactivation in aging: constitutively low 4E-BP1 activity

A consistent feature of aged tissues across model organisms is **constitutive mTORC1 activity** — driven by accumulated nutrient sensing noise, chronic insulin resistance, reduced AMPK activity, and loss of upstream negative regulators. Chronically active mTORC1 maintains 4E-BP1 in the hyperphosphorylated, eIF4E-released state [^blagosklonny-unsourced]. This has several downstream consequences:

- **Anabolic overdrive:** selective overproduction of cell-growth machinery mRNAs (ribosomes, translation factors) at the expense of stress-response and mitochondrial mRNAs.
- **SASP amplification (see below).**
- **Reduced translational fidelity:** excess cap-dependent translation is associated with increased protein aggregation burden, contributing to [[loss-of-proteostasis]].

#gap/unsourced — The specific claim that aged tissues show reduced 4E-BP1 hypophosphorylation (i.e., more eIF4E released) compared to young tissues requires a primary tissue proteomics citation; this is mechanistically expected from the known mTORC1 hyperactivation-in-aging literature but a direct comparison study needs to be identified.

### SASP translation control via 4E-BP1

Many SASP mRNAs — encoding IL-6, IL-8, MMP3, CCL2, and other inflammatory mediators — possess complex 5' UTRs and are preferentially translated by eIF4F [^mannick2014]. When mTORC1 is active and 4E-BP1 is hyperphosphorylated, cap-dependent translation of these transcripts is permitted, amplifying the SASP. Conversely:

- RAD001 (everolimus, an mTOR inhibitor) in elderly volunteers reduced markers associated with immunosenescence and improved vaccine responses, consistent with reduced mTORC1 signaling and partial 4E-BP1 re-activation [^mannick2014].
- The SASP-suppressive effect of rapamycin observed in senescent cells is at least partly attributable to 4E-BP1 re-activation, though direct evidence isolating the 4E-BP1 contribution from other rapamycin effects (autophagy induction, S6K1 inhibition) in human senescent cells is lacking. #gap/needs-replication

See [[sasp]] for the full SASP translational control context.

---

## Pathway membership

- [[mtor]] — 4E-BP1 is the principal substrate of mTORC1's translational output arm; also see [[mtor]] for the rapamycin partial-vs-full inhibition pharmacology (Thr37/46 rapamycin resistance is covered there)
- [[insulin-igf1]] — upstream of mTORC1 via PI3K-Akt-TSC2 axis; growth-factor inputs converge on 4E-BP1 phosphorylation

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[eif4e]] | direct protein-protein binding (YXXXXLphi:dorsal surface) | hypophosphorylated 4E-BP1 sequesters eIF4E; hyperphosphorylated form released |
| [[mtor]] (mTORC1) | kinase → substrate | sequential phosphorylation at Thr37/46, Thr70, Ser65 releases eIF4E |
| [[raptor]] | scaffold (via TOS motif) | recruits 4E-BP1 to mTORC1 for phosphorylation; loss of raptor contact renders 4E-BP1 constitutively active |
| eIF4G | indirect competition | eIF4G and 4E-BP1 share the eIF4E dorsal surface; they are mutually exclusive binders |
| KLHL25 (BCR-KLHL25) | E3 ubiquitin ligase | ubiquitinates hypophosphorylated 4E-BP1 at Lys57; marks inactive 4E-BP1 for proteasomal degradation |

---

## Mammalian 4E-BP family members

Three paralogs exist in mammals:

| Paralog | Gene | Expression | Notes |
|---|---|---|---|
| 4E-BP1 | *EIF4EBP1* | ubiquitous; high in metabolic tissues (liver, adipose, muscle) | most studied; primary aging-relevant isoform |
| 4E-BP2 | *EIF4EBP2* | high in brain | knockout mice show synaptic plasticity and autism-like phenotypes #gap/unsourced |
| 4E-BP3 | *EIF4EBP3* | low/restricted expression | least characterized |

Functional redundancy between 4E-BP1 and 4E-BP2 means single-knockout experiments may underestimate 4E-BP function; the Thoreen 2012 study used 4E-BP1/2 double-knockout MEFs to demonstrate that 5' TOP mRNA translation becomes **resistant** to Torin1 in the absence of the 4E-BP family, establishing 4E-BPs as the necessary mediators of TOP mRNA selectivity [^thoreen2012].

---

## Aging interventions that modulate 4E-BP1

- [[mtor|rapamycin]] — the canonical 4E-BP1 activator via mTORC1 inhibition; allosteric rapamycin incompletely suppresses Thr37/46 phosphorylation, meaning partial 4E-BP1 re-activation; catalytic mTOR inhibitors achieve more complete 4E-BP1 re-activation at the cost of broader toxicity
- [[caloric-restriction]] — activates [[ampk]], suppresses mTORC1, and thereby promotes 4E-BP1 hypophosphorylation; the *Drosophila* 4E-BP lifespan data were obtained in a CR context [^zid2009]
- [[metformin]] — AMPK activator → mTORC1 suppression → partial 4E-BP1 re-activation; the extent of 4E-BP1 contribution to metformin's geroprotective effects is unresolved #gap/no-mechanism
- Exercise — acute resistance exercise activates mTORC1 → 4E-BP1 hyperphosphorylation → anabolic translation; this is likely beneficial in the short-term (muscle protein synthesis) but the chronic effect in aged tissue remains complex #gap/dose-response-unclear

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| No mammalian lifespan extension by 4E-BP overexpression | #gap/needs-human-replication | All longevity data is from Drosophila; mouse 4E-BP overexpression studies needed |
| 4E-BP1 tissue proteomics in human aging | #gap/unsourced | Direct comparison of 4E-BP1 phosphorylation state in young vs aged human tissues not yet cataloged on this page |
| 4E-BP1 contribution to rapamycin longevity benefit in mice | #gap/needs-replication | Bjedov 2010 autophagy+4E-BP dual mechanism established in flies; mammalian partition study lacking |
| SASP contribution isolation | #gap/needs-replication | Isolating the 4E-BP1-specific contribution to SASP suppression (vs other rapamycin effects) not demonstrated in human senescent cells |
| Rapamycin partial Thr37/46 resistance | #gap/no-mechanism | Mechanistic basis of Thr37/46 rapamycin resistance (mTORC1-substrate-access model vs mTOR conformational model) unresolved |
| 4E-BP2 and 4E-BP3 in aging | #gap/unsourced | Aging relevance of the two paralogs not characterized |
| GenAge inclusion | #gap/needs-canonical-id | EIF4EBP1 absent from GenAge-models despite strong Drosophila lifespan data; candidate for submission |

---

## Footnotes

[^gingras1999]: doi:10.1101/gad.13.11.1422 · [[studies/gingras-1999-4ebp1-two-step-phosphorylation]] · n=N/A · in-vitro (biochemical, recombinant protein) + in-vivo (293 cells) · model: baculovirus-expressed and immunoprecipitated FRAP/mTOR with recombinant human 4E-BP1; serum-stimulated 293 cells · 1,322 citations · locally available: yes · Gingras et al. established that FRAP/mTOR phosphorylates 4E-BP1 specifically on Thr37 and Thr46 (two-step priming); these are the primary FRAP/mTOR sites; Thr37/46 phosphorylation does not disrupt the 4E-BP1/eIF4E complex but is prerequisite for subsequent serum-sensitive (Ser65, Thr70) phosphorylation events

[^gingras2001]: doi:10.1101/gad.912401 · [[studies/gingras-2001-4ebp1-hierarchical-phosphorylation]] · n=N/A · in-vitro + in-vivo (HEK293 cells) · model: phosphomutant HA-tagged 4E-BP1 constructs in HEK293T; 2D IEF/SDS-PAGE with phosphospecific antibodies against Ser65 and Thr70 · 875 citations · locally available: yes · Gingras et al. 2001 established the full in-vivo sequential order: Thr37/46 → Thr70 → Ser65; critically, Ser65 alone or Ser65+Thr70 is **insufficient** to abrogate eIF4E binding — full release from eIF4E requires the complete hierarchy of phosphorylation events including the Thr37/46 priming sites

[^thoreen2012]: doi:10.1038/nature11083 · [[studies/thoreen-2012-mtorc1-5top-translation]] · n=N/A · in-vitro (ribosome profiling, mouse embryonic fibroblasts) · model: wild-type MEFs (4EBP1/2^+/+;p53^-/-) and 4E-BP1/2 DKO MEFs (4EBP1/2^-/-;p53^-/-) treated with 250 nM Torin1 (catalytic mTOR inhibitor) for 2 h · 1,456 citations · locally available: yes · Thoreen et al. showed that 4E-BP family is necessary and sufficient to explain mTORC1's regulation of 5' TOP mRNA translation; 4E-BP1/2 DKO cells are resistant to Torin1-mediated suppression of 5' TOP translation; also identified previously unrecognized TOP-like motifs extending the regulated mRNA set

[^zid2009]: doi:10.1016/j.cell.2009.07.034 · [[studies/zid-2009-4ebp-drosophila-lifespan]] · n=not specified (fly cohorts) · in-vivo (Drosophila melanogaster) · model: d4E-BP-null flies vs activated-d4E-BP overexpressors (armadillo-Gal4 driver); yeast-extract dietary restriction paradigm (0.25% YE = DR; 5% YE = rich food) · 541 citations · locally available: yes · Zid et al. (Cell 2009) showed DR activates 4E-BP and selectively upregulates translation of nuclear-encoded mitochondrial mRNAs (Complex I and IV ETC subunits); activated d4E-BP overexpression extends mean lifespan 11% (males) and 22% (females) on rich food but not on DR; 4E-BP-null flies show only 8% (males) vs 35% control and 13% (females) vs 42% control lifespan extension on DR, demonstrating 4E-BP mediates the majority of DR lifespan benefit (p<0.0001, log-rank)

[^bjedov2010]: doi:10.1016/j.cmet.2009.11.010 · [[studies/bjedov-2010-rapamycin-drosophila-longevity]] · n=not specified (fly cohorts) · in-vivo (Drosophila melanogaster) · model: yw and w^Dah^ wild-type, 4E-BP-null (Tettweiler et al. 2005), Atg5-RNAi, and control flies + rapamycin feeding (200 µM) · 1,075 citations · locally available: yes · Bjedov et al. established that rapamycin extends Drosophila lifespan via two parallel necessary mechanisms — autophagy (Atg5-dependent) and translational repression (4E-BP-dependent); in 4E-BP-null flies rapamycin did not significantly extend lifespan (p=0.4027, log-rank; Fig. 5C); in Atg5-RNAi flies extension was similarly abolished (p=0.5383, Fig. 5E); both pathways are independently required

[^mannick2014]: doi:10.1126/scitranslmed.3009892 · [[studies/mannick-2014-mtor-immune-aging]] · n=218 (elderly volunteers, age ≥65) · rct (RAD001 everolimus vs placebo) · model: elderly humans · 730 citations · locally available: not (closed access — not OA) · Mannick et al. showed 6-week RAD001 treatment improved influenza vaccine responses ~20% and reduced PD-1 on T cells in elderly volunteers; human evidence that mTORC1 inhibition (and by implication partial 4E-BP1 re-activation) can modulate age-related immune decline #gap/no-fulltext-access

[^blagosklonny-unsourced]: #gap/unsourced — the "constitutive mTORC1 hyperactivation in aged tissues → 4E-BP1 hyperphosphorylated" framing draws on Blagosklonny's hyperfunction theory of aging and general mTOR-aging literature; a specific primary citation quantifying 4E-BP1 phosphorylation state in aged vs young mammalian tissues is needed. Candidate DOI: 10.1016/j.cmet.2012.06.012 (Blagosklonny 2012 mTOR review) — not yet checked in archive.
