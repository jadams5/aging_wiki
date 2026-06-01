---
type: protein
aliases: [APAF1, apoptotic peptidase activating factor 1, CED-4 mammalian homolog, KIAA0413]
uniprot: O14727
ncbi-gene: 317
hgnc: 576
ensembl: ENSG00000120868
genage-id: null
mouse-ortholog: Apaf1
druggability-tier: 2
caused-by: []
causes: []
key-domains: [CARD, NB-ARC, WD40-repeats]
key-ptms: []
pathways: ["[[apoptosis-pathway]]"]
hallmarks: ["[[cellular-senescence]]"]
sens-categories: []
known-interactors: ["[[cytochrome-c]]", "[[caspase-9]]", "[[xiap]]", "[[hsp70]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Zou 1997, Acehan 2002, Cecconi 1998, Yoshida 1998, and Soengas 2001 primary-source PDFs verified end-to-end. Yuan 1992 (CED-4) not_oa — CED-4 ortholog claim unverified against source but is consistent with Zou 1997 which cites and discusses Yuan 1992 directly. Honarpour 2000 not_oa — male infertility claim unverified against source; DOI confirmed correct (10.1006/dbio.1999.9585) via Crossref. UniProt O14727 domain boundaries (CARD 1–90, NB-ARC 104–415, WD40 613–1248) confirmed via UniProt REST API. Canonical-database identity fields (PubChem, HGNC numeric ID, NCBI Gene 317) not independently re-checked beyond what was seeded."
---

# APAF-1 (Apoptotic Protease-Activating Factor 1)

The core scaffold of the [[apoptosome]] — the cytosolic caspase-activation wheel that executes the intrinsic apoptotic program after [[bax]]/[[bak]] permeabilize the mitochondrial outer membrane (MOMP). APAF-1 is the mammalian ortholog of *C. elegans* CED-4, and its discovery linked the nematode cell-death program directly to cytochrome c–triggered caspase cascade in vertebrates. Loss of APAF-1 expression is a confirmed resistance mechanism in human melanoma, making it a convergence point between apoptosis deficiency, tumor evolution, and the SENS [[apoptosenes]] frame of aging.

## Identity

| Field | Value |
|---|---|
| UniProt | O14727 (APAF1_HUMAN) |
| NCBI Gene | 317 |
| HGNC | 576 |
| Gene symbol | APAF1 |
| Mouse ortholog | Apaf1 (one-to-one) |
| Protein length | 1,248 aa (canonical isoform Apaf-1XL; UniProt O14727). Note: Zou 1997 cloned a 1,194 aa isoform (GenBank AF013263) from HeLa cell cytosol; the 1,248 aa canonical sequence is the XL isoform incorporating an additional WD40 repeat. |
| Molecular weight | ~141.8 kDa (canonical 1,248 aa isoform); Zou 1997 measured the purified HeLa protein as ~130 kDa by SDS-PAGE, consistent with the shorter isoform |
| Subcellular location | Cytoplasm (cytosol); redistributes to perinuclear region upon activation |

**Note on naming convention:** No pathway page named `apaf-1` exists; the pathway page is [[apoptosis-pathway]]. This protein page therefore uses the bare name `apaf-1.md` without a disambiguating suffix, consistent with the [[p53]] precedent.

## Discovery

APAF-1 was purified in 1997 from HeLa cell cytosolic fractions by Zou et al. as the factor required for cytochrome c–dependent activation of caspase-3 in a cell-free apoptosis reconstitution system [^zou1997]. The reconstitution required four components: APAF-1, a second cytosolic fraction designated Apaf-3 (subsequently identified as pro-caspase-9 by Li et al. 1997 in the same issue of Cell), cytochrome c, and dATP; either the Apaf-1 or Apaf-3 fraction alone was insufficient. The molecule was recognized immediately as a vertebrate homolog of *C. elegans* CED-4 [^yuan1992], the cell-death effector identified in the canonical Horvitz ced-3/ced-4/ced-9 pathway. The same year, [[p53-pathway|p53]] functional studies were establishing that pro-apoptotic signaling converged on mitochondria; APAF-1 provided the biochemical bridge between cytochrome c release and executioner caspase activation.

## Domain organization

APAF-1 has a modular three-domain architecture that encodes both its regulated autoinhibition and its activation mechanism [^zou1997]:

| Domain | Residues (human, canonical 1,248 aa isoform; UniProt O14727) | Function |
|---|---|---|
| CARD (Caspase Recruitment Domain) | 1–90 | Homotypic CARD–CARD interaction with pro-caspase-9; licenses recruitment to the apoptosome |
| NB-ARC (Nucleotide-Binding, APAF-1, R-proteins, CED-4; also called CED-4 homology domain) | 104–415 | ATPase domain; contains Walker A (∼residue 145) and Walker B (∼residue 230) nucleotide-binding motifs; exchanges ADP for dATP/ATP after cytochrome c binding; drives oligomerization |
| WD40 repeats (C-terminal; two tandem β-propellers) | 613–910 (first propeller, 7-bladed) + 922–1,248 (second propeller, 6-bladed) | Cytochrome c binding site (modeled between the two propellers in the bridge region); hold the NB-ARC/CARD in autoinhibited state; 13 repeats total in canonical isoform; 12 repeats in the shorter isoform cloned by Zou 1997 |

Note on residue boundaries: the domain boundaries 1–90 (CARD), 104–415 (NB-ARC), and 613–1,248 (WD40) are from UniProt O14727 annotation. Zou 1997 described the APAF-1 domain structure in the 1,194 aa isoform as: NH2-terminal 85 aa (CED-3 homologous), followed by 320 aa (CED-4 homologous), followed by 12 WD-40 repeats. The two sets of boundaries are consistent once the isoform difference is accounted for.

In the ground state, the WD40 repeats fold back onto the NB-ARC domain and physically occlude the CARD, preventing pro-caspase-9 recruitment. Cytochrome c binding to the WD40 repeats releases this intramolecular autoinhibition, allowing nucleotide exchange and the oligomerization step [^acehan2002]. #gap/needs-replication — the precise cytochrome c contact residues within the WD40 domain remain to be fully characterized at atomic resolution in the activated state.

## Isoforms

UniProt records six named isoforms: Apaf-1XL, Apaf-1L, Apaf-1S, Apaf-1M, Apaf-1XS, and Apaf-1-ALT, generated by alternative splicing. The principal difference among the best-characterized isoforms (XL vs L vs S) is in the WD40 repeat region, which influences stoichiometry of cytochrome c binding and sensitivity to XIAP-mediated inhibition. #gap/unsourced — isoform-specific functional distinctions beyond this general framing require primary citation; the isoform data are from UniProt O14727 annotation (accessed 2026-05-04).

## Apoptosome assembly

Following MOMP, cytochrome c released into the cytosol from the intermembrane space binds the C-terminal WD40 repeats of APAF-1, inducing conformational change that exposes the CARD and the nucleotide-binding cleft [^acehan2002]. The sequence of events:

1. **Cytochrome c binding** — relieves WD40-mediated autoinhibition of the NB-ARC/CARD
2. **Nucleotide exchange** — ADP replaced by dATP or ATP in the NB-ARC domain; GTPase activity not required
3. **Oligomerization** — seven APAF-1 molecules assemble into a heptameric wheel (calculated mass ~1 MDa) visible by cryo-EM as a seven-spoke "wheel" with a central hub and seven spokes; each spoke has a Y-domain comprising two WD40 β-propellers with cytochrome c modeled in the bridge region between the propellers [^acehan2002]
4. **Pro-caspase-9 recruitment** — each APAF-1 CARD in the apoptosome recruits one pro-caspase-9 zymogen via CARD–CARD homotypic interaction → gives a 7:7 stoichiometry
5. **Caspase-9 activation** — proximity-induced autoprocessing; the apoptosome acts as an allosteric platform that dramatically lowers the threshold for caspase-9 activation
6. **Executioner caspase cleavage** — activated caspase-9 cleaves pro-caspase-3 and pro-caspase-7, committing the cell to apoptosis

The cryo-EM structure of the wheel was determined at 27 Å resolution using ~3,400 CTF-corrected particles by Acehan et al. 2002 [^acehan2002]. The Apaf-1 isoform used in that study was the 13-WD40-repeat, 1,248-residue canonical (XL) isoform expressed in insect cells. Particles with 6-fold symmetry were also observed but represented less than 1% of the total population. Higher-resolution structures (post-2010 cryo-EM) have since been reported but are not cited here. #gap/unsourced — atomic-resolution apoptosome structures (post-2010 cryo-EM, e.g., Cheng 2016 Science or Pang 2015 Mol Cell) need citation if mechanistic details from those works are added.

## Regulation of the apoptosome

### XIAP inhibition
[[xiap]] (X-linked inhibitor of apoptosis protein) binds and inhibits caspase-9 within the assembled apoptosome. XIAP's BIR3 domain targets the caspase-9 linker peptide exposed after CARD-mediated recruitment, suppressing effector caspase cleavage. This creates a post-assembly checkpoint: even after apoptosome formation, XIAP can buffer the lethal caspase signal. Senescent cells exploit XIAP upregulation as part of their apoptosis-resistance network. #gap/unsourced — specific XIAP-caspase-9 IC50 and apoptosome-context data need citation.

### HSP70 inhibition
HSP70 (heat shock protein 70) inhibits apoptosome assembly upstream of oligomerization, likely by chaperoning APAF-1 in its monomeric state and preventing ATPase-driven oligomerization. This provides a stress-protective brake in cells experiencing non-lethal proteotoxic stress. #gap/unsourced — primary citation for HSP70–APAF-1 interaction required.

### Nucleolin enhancement
Nucleolin has been reported to promote apoptosome assembly in a nucleotide-dependent manner. #gap/unsourced — mechanism and experimental context need primary citation.

### PHAPI (pp32/ANP32A) binding
PHAPI binds the nucleotide-loaded form of APAF-1 and has been reported to enhance caspase activation in cell-free systems. This interaction may be relevant to apoptosome stoichiometry. #gap/unsourced — primary citation required.

## Genetic knockout phenotypes (mouse)

Cecconi et al. 1998 generated *Apaf1*-null mice using a gene-trap insertion approach [^cecconi1998]. Homozygous knockouts showed:

- Severe defects in programmed cell death during brain development: massive brain overgrowth with ectopic cell masses in the diencephalon and midbrain (excessive survival of cells normally eliminated by apoptosis), abnormally enlarged choroid plexus of the fourth ventricle
- Craniofacial abnormalities (facial midline cleft, absence of skull vault, rostral exencephaly, cleft palate) and ocular malformations (thickened retina, abnormal lens polarization, persistence of hyaloid capillary system)
- Interdigital web persistence (failure of digit-sculpting apoptosis)
- Embryonic lethality: no homozygous embryos found beyond e16.5; the *Apaf1* mutation is lethal by this stage [per Cecconi 1998 Table 1: total of 31 homozygous identified across e10.5–e17.5, zero at e17.5–e18.0]
- Embryonic fibroblasts from *Apaf1*−/− animals were markedly resistant to multiple apoptotic stimuli (anti-Fas, C6-ceramide, staurosporine)

Yoshida et al. 1998 independently generated *Apaf1*-null mice using conventional targeted disruption (deletion of Walker A/B P-loop exon) and confirmed the same neurodevelopmental phenotype [^yoshida1998]. Key additional findings from Yoshida 1998:
- Of 190 offspring from heterozygous intercrosses: 11 (6%) homozygous mutants identified at newborn stage, but all but three were found dead at birth or died within 12 hr — confirming perinatal lethality in the large majority
- *Apaf1*−/− thymocytes were resistant to dexamethasone, etoposide, and γ-irradiation but retained sensitivity to Fas-mediated killing — establishing that Fas-mediated apoptosis in thymocytes is **independent** of Apaf1
- Cytochrome c release from mitochondria was not impaired in *Apaf1*−/− embryonic fibroblasts, confirming Apaf1 acts downstream of cytochrome c release

Honarpour et al. 2000 subsequently characterized a distinct adult phenotype in surviving *Apaf1*-null males: male infertility due to impaired apoptosis in the testis [^honarpour2000], establishing that APAF-1-dependent apoptosis is also required for germ-cell homeostasis in adults.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — APAF-1/cytochrome c/caspase-9 axis identical |
| Phenotype conserved in humans? | partial — developmental apoptosis conserved; KO studies mouse-only |
| Replicated in humans? | no direct KO equivalent; cancer loss-of-function studies provide partial evidence |

## Cancer context — loss of APAF-1 in melanoma

Soengas et al. 2001 demonstrated that APAF-1 is functionally inactivated in a substantial fraction of human metastatic melanomas, via promoter hypermethylation and/or chromosomal deletion [^soengas2001]. Key findings:

- LOH at the Apaf-1 locus on chromosome 12q22–23 was found in >40% of 24 metastatic melanoma tumor/normal pairs (10/24); tumors with LOH expressed little Apaf-1 mRNA by in situ hybridization
- In 19 metastatic melanoma cell lines: 10 were "Apaf-1 negative" (little to no protein), 4 had intermediate levels (70–30% of normal melanocytes), and 5 were "Apaf-1 positive"
- Apaf-1-negative cell lines were invariably chemoresistant (to adriamycin/ADR); Apaf-1-positive lines showed robust apoptosis
- Restoration of APAF-1 expression (via retroviral Apaf-1XL overexpression or 5-aza-2'-deoxycytidine treatment) in Apaf-1-negative cells rescued caspase-9 processing and markedly enhanced chemosensitivity
- The mechanism of silencing involves LOH plus transcriptional silencing by methylation, but **not** by direct CpG methylation of the Apaf-1 core promoter: bisulfite sequencing excluded extensive methylation of the CpG island in the 5' UTR (residues −680 to +420 of transcription start). The methylation more likely affects an enhancer or other regulatory element outside the core promoter [^soengas2001]. No point mutations in the Apaf-1 coding sequence were detected in the cell lines tested

This study established APAF-1 loss as a convergent apoptosis-evasion strategy in cancer progression — distinct from [[bcl-xl]]/[[bcl-2]]/[[mcl-1]] overexpression, because it acts downstream of the BCL-2 family decision point rather than upstream [^soengas2001].

#gap/needs-replication — frequency of APAF-1 silencing in melanoma vs other tumor types not yet comprehensively characterized; pan-cancer APAF-1 expression landscape needs citation.

## Aging context

### Apoptosome function and senescent-cell accumulation

Senescent cells accumulate with age in part because they upregulate anti-apoptotic proteins (the SCAP — Senescent Cell Anti-apoptotic Pathway) including [[bcl-2]], [[bcl-xl]], [[bcl-w]], and XIAP [see [[apoptosis-pathway]]]. The question of whether APAF-1 expression itself changes in senescent cells or in aged tissues has not been systematically characterized. #gap/unsourced — APAF-1 protein levels in senescent vs proliferating human cells need citation.

**Hypothesized mechanism linking APAF-1 to senescent-cell apoptosis resistance:** Even if BCL-2 family members are successfully neutralized by BH3-mimetic senolytics (e.g., [[navitoclax]]), downstream attenuation of apoptosome function (via XIAP upregulation or APAF-1 downregulation) could buffer the signal and prevent complete senolytic efficacy. This is a #gap/no-mechanism point: the relative contribution of APAF-1 axis changes vs BCL-2 family changes in age-dependent apoptosis resistance of senescent cells remains unresolved.

### Tissue homeostasis and T-cell clonal dynamics

In immunological aging ([[immunosenescence]]), T-cell clonal expansion and the accumulation of dysfunctional exhausted T cells partly reflect impaired apoptotic elimination of antigen-experienced clones. The intrinsic (APAF-1-dependent) pathway intersects with T-cell homeostasis because cytokine-withdrawal-induced apoptosis of T cells is largely mitochondria-dependent. Whether APAF-1 expression declines in aged T cells contributing to clonal stability of exhausted populations is unexplored. #gap/unsourced

### APAF-1 and the GenAge database

APAF-1 does not currently have a GenAge entry (no experimentally demonstrated aging or longevity effect in model organisms per HAGR search, accessed 2026-05-04). #gap/needs-canonical-id — `genage-id: null` because no entry found. This absence is notable given the Apaf1-KO mouse phenotype — the developmental lethality may preclude long-term lifespan studies. Conditional alleles would be required to assess aging effects.

## Pathway membership

- [[apoptosis-pathway]] — intrinsic mitochondrial axis; APAF-1 is the obligate downstream effector of MOMP
- [[p53-pathway]] — p53 activates [[bax]] and [[puma]], triggering MOMP and cytochrome c release → APAF-1 activation
- [[bcl-2-family-signaling]] — BCL-2, BCL-xL, MCL-1 all act upstream by preventing cytochrome c release; APAF-1 is downstream of their decision

## Key interactors

| Interactor | Interaction type | Notes |
|---|---|---|
| [[cytochrome-c]] | activating ligand | binds WD40 C-terminal; triggers conformational change |
| [[caspase-9]] | substrate/scaffold | CARD–CARD recruitment; apoptosome platform activates caspase-9 |
| [[xiap]] | inhibitor | BIR3 domain targets caspase-9 in assembled apoptosome |
| [[hsp70]] | inhibitor | inhibits oligomerization; stress-protective |
| [[bax]] / [[bak]] | indirect upstream | MOMP executors; release cytochrome c that activates APAF-1 |
| [[puma]] / [[bid]] | indirect upstream | BH3-only proteins that relieve BCL-2/xL/MCL-1 → enabling BAX/BAK-MOMP |

## Limitations and gaps

- `#gap/unsourced` — isoform-specific functional distinctions (APAF-1XL vs APAF-1L) need primary citation beyond UniProt annotation.
- `#gap/unsourced` — XIAP-mediated inhibition of caspase-9 within the apoptosome needs citation for quantitative IC50 and apoptosome-context specificity.
- `#gap/unsourced` — HSP70, nucleolin, PHAPI regulation of APAF-1/apoptosome assembly — all need primary citations.
- `#gap/unsourced` — APAF-1 expression changes in senescent cells, aged tissues, or exhausted T cells.
- `#gap/needs-human-replication` — all APAF-1 KO phenotype data are in mouse; no human loss-of-function germline variant data.
- `#gap/needs-canonical-id` — GenAge ID is null; APAF-1 absent from GenAge as of 2026-05-04.
- `#gap/no-mechanism` — whether APAF-1 axis contributes to senescent-cell apoptosis resistance independently of BCL-2 family upregulation is unknown.
- Atomic-resolution cryo-EM structures of the assembled apoptosome (post-2010 Cheng, Pang, etc.) are not cited here; the body should be updated if mechanistic claims derived from those structures are added.

---

## Footnotes

[^zou1997]: [[studies/zou-1997-apaf1-cytochrome-c-caspase]] · doi:10.1016/s0092-8674(00)80501-2 · in-vitro (HeLa cell-free reconstitution) · n=biochemical purification · model: human HeLa; confirmed cytochrome c–APAF-1–caspase-3 axis · PDF: local 

[^yuan1992]: doi:10.1242/dev.116.2.309 · in-vivo (C. elegans) · n=genetic analysis · Yuan & Horvitz 1992 — CED-4 encodes novel protein expressed during programmed cell death; established APAF-1 ortholog identity · PDF: not_oa

[^acehan2002]: doi:10.1016/s1097-2765(02)00442-2 · in-vitro (cryo-EM reconstruction) · n=~3,400 particles (apoptosome); ~5,400 particles (procaspase-9 complex) · Acehan et al. 2002 — three-dimensional structure of the apoptosome at 27 Å (FSC 0.5 cutoff) reveals heptameric wheel; calculated mass ~1 MDa; 7 APAF-1 + up to 7 pro-caspase-9; used 1,248 aa (13-WD40) isoform · PDF: local 

[^cecconi1998]: [[studies/cecconi-1998-apaf1-knockout]] · doi:10.1016/s0092-8674(00)81732-8 · in-vivo (mouse, Apaf1 KO) · n=homozygous KO embryos/neonates · Cecconi et al. 1998 — massive brain overgrowth, craniofacial defects, perinatal lethality · PDF: local 

[^yoshida1998]: doi:10.1016/s0092-8674(00)81733-x · in-vivo (mouse, Apaf1 KO) · n=independent KO line · Yoshida et al. 1998 — confirms CNS-selective apoptosis requirement; parallel publication to Cecconi 1998 in same Cell issue · PDF: local 

[^honarpour2000]: doi:10.1006/dbio.1999.9585 · in-vivo (mouse, Apaf1 KO adult survivors) · n=surviving homozygous males · Honarpour et al. 2000 — male infertility phenotype in Apaf1-null adults; testicular apoptosis requires APAF-1 · PDF: not_oa

[^soengas2001]: [[studies/soengas-2001-apaf1-melanoma]] · doi:10.1038/35051606 · in-vitro + human tumor tissue · n=~40% metastatic melanoma lines/biopsies tested · Soengas et al. 2001 — APAF-1 promoter methylation/chromosomal loss in melanoma; restoration rescues chemotherapy sensitivity · PDF: local 
