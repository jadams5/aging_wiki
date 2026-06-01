---
type: protein
aliases: [TANK-binding kinase 1, NAK, T2K, TBK-1]
uniprot: Q9UHD2
ncbi-gene: 29110
hgnc: 11584
mouse-ortholog: Tbk1
ensembl: ENSG00000183735
druggability-tier: 2
caused-by: []
causes: []
key-domains: [kinase, ubiquitin-like, coiled-coil, scaffold-dimerization]
key-ptms: [Ser172-autophosphorylation, Ser172-trans-phosphorylation]
pathways: ["[[mitophagy]]", "[[autophagy]]", "[[xenophagy]]", "[[cgas-sting]]", "[[pink1-parkin-pathway]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[optn]]", "[[ndp52]]", "[[p62]]", "[[sting]]", "[[irf3]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Pomerantz 1999, Hemmi 2004, Heo 2015, Cirulli 2015, Freischmidt 2015, Reilly 2013 verified against primary source PDFs. Wild 2011 not verifiable (not_oa); Ser177/LC3 attribution to Wild 2011 is consistent with Heo 2015 citations. Domain boundary table attributed to UniProt Q9UHD2, not individually re-verified against UniProt REST. Canonical-DB identity fields (UniProt Q9UHD2, NCBI Gene 29110, HGNC 11584) confirmed via UniProt REST API at seeding; not re-checked in this verification pass."
---

# TBK1 (TANK-binding kinase 1)

TBK1 is a constitutively expressed serine/threonine kinase of the IKKε/TBK1 family (non-canonical IκB kinase-related kinases) that sits at the intersection of two independently important cellular programs: **innate antiviral immunity** via the cGAS–STING–IRF3 axis and **selective autophagy** via phosphorylation of cargo receptors [[optn]], [[ndp52]], and [[p62]]. Mutations causing TBK1 haploinsufficiency are a confirmed cause of familial amyotrophic lateral sclerosis (ALS) and frontotemporal dementia (FTD), making TBK1 directly relevant to aging-associated neurodegeneration.

## Identity

- **UniProt:** Q9UHD2 (TBK1_HUMAN)
- **NCBI Gene:** 29110
- **HGNC symbol:** TBK1
- **Ensembl:** ENSG00000198793
- **Mouse ortholog:** Tbk1 (one-to-one)
- **Length:** 729 amino acids (canonical isoform)
- **Alternative names:** NAK (NF-κB-activating kinase), T2K

TBK1 was first characterized in 1999 as a novel IKK-related kinase acting in the TRAF2–TANK–TBK1 signaling complex to activate NF-κB [^pomerantz1999]. The same kinase was independently described as T2K (TBK2) shortly afterward.

## Domain organization

| Domain | Residues (approx.) | Function |
|---|---|---|
| Kinase domain (KD) | 9–310 | Catalytic activity; activation loop contains Ser172 |
| Ubiquitin-like domain (ULD) | 309–385 | Substrate recruitment; contributes to dimerization |
| Coiled-coil / scaffold dimerization domain (SDD-1) | 407–657 | Homo-dimerization required for trans-autophosphorylation |
| C-terminal domain (CTD / SDD-2) | 657–729 | Adaptor-protein interactions (TANK, SINTBAD, NAP1) |

Domain boundaries are from UniProt Q9UHD2 (accessed 2026-05-04); minor differences exist between sources.

## Activation mechanism

TBK1 is regulated primarily through **Ser172 in the activation loop**:

1. TBK1 constitutively forms homodimers via the SDD.
2. Upon pathway activation (downstream of STING, MAVS, or TRIF), TBK1 dimers trans-phosphorylate each other at Ser172.
3. Activated TBK1 phosphorylates downstream substrates — IRF3/7 in the innate immune axis, and autophagy cargo receptors in the selective-autophagy axis.
4. PP2A and PPM1B dephosphorylate Ser172 to terminate signaling.

Autophosphorylation at Ser172 is both necessary and sufficient for catalytic activity; pharmacological inhibitors (amlexanox, BX795) compete with ATP at the kinase domain and prevent substrate phosphorylation.

## Signaling role 1 — Innate antiviral immunity (cGAS–STING axis)

The canonical innate immune arm of TBK1 signaling:

**cGAS → cGAMP → STING → TBK1 → IRF3 → type I IFN**

1. **cGAS** detects cytosolic double-stranded DNA (from viral infection, mitochondrial leakage, or nuclear envelope rupture in senescent cells) and synthesizes the second messenger cGAMP.
2. cGAMP binds and activates **STING** (at the ER membrane), which recruits and activates TBK1.
3. TBK1 phosphorylates **IRF3** (and IRF7), driving their dimerization, nuclear translocation, and transcriptional activation of type I interferons (IFN-α/β) and interferon-stimulated genes (ISGs).

The role of TBK1 in LPS and double-stranded RNA signaling was established by Hemmi et al. 2004, which used gene-targeted TBK1−/− and IKKε−/− mouse embryonic fibroblasts to demonstrate that TBK1 is the primary kinase required for LPS- and dsRNA-induced IFN-β production, with IKKε playing a secondary redundant role (IFN-β abolished only in TBK1/IKKε double-knockout cells) [^hemmi2004].

**Aging relevance:** The cGAS–STING–TBK1 pathway is activated in senescent cells — cytoplasmic chromatin fragments and micronuclei from damaged nuclear DNA act as endogenous dsDNA "danger signals," driving cGAS activation and SASP-amplifying IFN signaling. This links TBK1 activity to the [[chronic-inflammation|inflammaging]] axis of cellular aging. For further detail see [[cgas-sting]].

## Signaling role 2 — Selective autophagy (cargo receptor phosphorylation)

TBK1 is a key regulator of [[mitophagy]] and [[xenophagy]] through phosphorylation of autophagy cargo receptors, operating downstream of the [[pink1-parkin-pathway]]:

### OPTN (optineurin) — Ser177 phosphorylation

- PINK1-activated Parkin ubiquitinates the outer mitochondrial membrane (K48/K63 chains) on depolarized mitochondria.
- [[optn]] binds phosphorylated ubiquitin and is recruited to damaged mitochondria.
- **TBK1 phosphorylates OPTN-Ser177**, enhancing OPTN binding to LC3/GABARAPL2 (via the LIR motif) and amplifying mitophagy flux [^wild2011]. TBK1 additionally phosphorylates OPTN at Ser473 and Ser513 (within the UBAN domain) to enhance polyubiquitin chain binding and promote OPTN retention on depolarized mitochondria [^heo2015].
- The same TBK1–OPTN axis operates in [[xenophagy]] — phospho-OPTN restricts *Salmonella* infection (the experimental model in Wild 2011). #gap/no-fulltext-access for Wild 2011 (closed-access); Ser177 attribution confirmed via citation in Heo 2015.

### NDP52 — TBK1-dependent recruitment

- [[ndp52]] is recruited to ubiquitinated mitochondria (and pathogens) via its SKICH domain.
- TBK1 phosphorylates NDP52 and stimulates its autophagy activity in a manner parallel to OPTN; the two receptors operate redundantly but cooperatively on the same cargo [^heo2015].
- Lazarou 2015 established that OPTN and NDP52 are the primary mitophagy receptors downstream of PINK1-Parkin ubiquitin signals (NDP52 cited per OPTN page as upstream of TBK1 activation).

### p62 (SQSTM1) — Ser403 phosphorylation

- TBK1 (and CK2) phosphorylate [[p62]]-Ser403 within the UBA domain, enhancing p62's binding to polyubiquitinated cargo and driving autophagosome formation.
- p62 is in the same ALS genetic network as TBK1 and OPTN.

### Reciprocal activation loop

TBK1 and its autophagy receptor substrates form a positive-feedback loop: receptor binding to cargo licenses TBK1 activation (via OPTN-mediated dimerization and Ser172 trans-phosphorylation), and active TBK1 phosphorylates the receptors to enhance their binding affinity. This amplifies the autophagy signal specifically at sites of damaged organelles or pathogens. Evidence for this reciprocal activation comes from the mitophagy field (summarized in Heo 2015) [^heo2015].

| Substrate | Phospho-site | Effect on autophagy | Source |
|---|---|---|---|
| OPTN | Ser177 | Enhanced LIR–LC3/ATG8 binding → mitophagy/xenophagy amplification | Wild 2011 [^wild2011] |
| OPTN | Ser473, Ser513 | Enhanced polyubiquitin-chain (K63) binding via UBAN domain → OPTN retention on depolarized mitochondria, TBK1 activation | Heo 2015 [^heo2015] |
| NDP52 | Multiple | Enhanced cargo capture; cooperates redundantly with OPTN | Heo 2015 [^heo2015] |
| p62/SQSTM1 | Ser403 | Enhanced UBA-ubiquitin affinity | — |

## Aging and neurodegeneration — TBK1 mutations in ALS/FTD

TBK1 is a **confirmed ALS/FTD gene**. Two landmark studies in 2015 established haploinsufficiency as the mechanism:

- **Cirulli et al. 2015** (exome sequencing in 2869 ALS patients and 6405 controls, discovery + replication combined) identified TBK1 loss-of-function variants as a significant ALS risk gene (combined p = 3.60 × 10−11, dominant not-benign model) [^cirulli2015]. TBK1 dominant not-benign variants were found in 1.099% of cases vs 0.194% of controls. The study linked TBK1 to the same pathway as OPTN, SQSTM1/p62, and VCP, framing ALS as partly a selective autophagy failure disease.
- **Freischmidt et al. 2015** (Nature Neuroscience) directly demonstrated **TBK1 haploinsufficiency** in familial ALS and FTD patients, identifying 8 different dominant loss-of-function mutations in 9 of 252 familial ALS index cases (approximately 3.6%, or ~4% among genetically unexplained fALS after excluding known SOD1/C9orf72 cases) [^freischmidt2015]. LoF variants were absent in 827 German controls and in 1,010 sporadic ALS cases screened by HRMA. The mechanistic model: TBK1 haploinsufficiency → impaired OPTN/NDP52 phosphorylation → defective mitophagy and selective autophagy → accumulation of damaged organelles and protein aggregates → neurodegeneration. In vitro, CCD2-domain mutations (p.690-713del, p.Glu696Lys) disrupted OPTN binding but preserved kinase activity and IRF3 phosphorylation.

The ALS genetic network involving TBK1 also includes **OPTN** (mutations in optineurin cause glaucoma and rare ALS), **p62/SQSTM1** (mutations cause Paget's disease and rare ALS/FTD), and **VCP** (an AAA-ATPase that extracts ubiquitinated proteins from organelles for degradation). These genes converge functionally on selective autophagy.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TBK1 sequence, kinase domain, and Ser172 regulation all conserved |
| Phenotype conserved in humans? | yes — TBK1 haploinsufficiency causes familial ALS/FTD in humans (Freischmidt 2015) |
| Replicated in humans? | yes for ALS genetics; autophagy phosphorylation mechanism in human cell lines |

#gap/needs-replication — The precise contribution of TBK1 haploinsufficiency to sporadic (vs familial) ALS is less clearly established. Cirulli 2015 estimated TBK1 variants in ~1–3% of ALS cases; the population-attributable risk is small.

## Pharmacology — TBK1 inhibitors

TBK1 is a druggable kinase with active interest in both inflammatory/metabolic and neurodegeneration contexts.

### Amlexanox (dual TBK1/IKKε inhibitor)

Amlexanox (approved for aphthous ulcers in the US, and asthma/allergic rhinitis in Japan) was identified as a dual inhibitor of TBK1 and IKKε (IC50 approximately 1–2 μM for both), and shown to improve obesity-related metabolic dysfunction in mice — reversibly reducing weight gain (~10 g in established obesity after 4 weeks), improving insulin sensitivity, and reducing hepatic steatosis (liver triglyceride reduced >50%) in diet-induced obese C57BL/6 mice at 25–100 mg/kg oral gavage [^reilly2013]. The mechanism involves relief of TBK1/IKKε-driven counter-inflammatory signaling that limits energy expenditure in obese adipose tissue, resulting in increased thermogenesis and UCP1 expression. The 2013 paper is entirely preclinical mouse work; it explicitly proposed future clinical studies for obesity and type 2 diabetes. #gap/needs-human-replication

#gap/dose-response-unclear #gap/long-term-unknown

### Preclinical TBK1 inhibitors

- **BX795** — ATP-competitive TBK1/PDK1 dual inhibitor; used as a pharmacological tool in cell studies but off-target activity at PDK1 limits specificity.
- **GSK8612** — more selective TBK1 inhibitor developed by GlaxoSmithKline; used in mechanistic studies of innate immune vs autophagy arm specificity; not clinically advanced as of 2026.
- **TBK1 PROTACs** — degrader molecules targeting TBK1 for proteasomal elimination; in preclinical development; may offer advantages over catalytic inhibitors for contexts where TBK1 scaffolding (vs catalysis) drives pathology. #gap/needs-human-replication

**Note on therapeutic complexity:** TBK1 has both pro-inflammatory roles (driving IFN/SASP in senescent cells) and pro-survival roles (enabling mitophagy and cargo clearance). Inhibition could plausibly worsen neurodegenerative autophagy failure while improving senescence-associated inflammation — the net effect is context- and tissue-dependent. #gap/contradictory-evidence

## Pathway membership

- [[mitophagy]] — OPTN/NDP52 phosphorylation arm; core component
- [[xenophagy]] — same OPTN axis; *Salmonella* clearance (Wild 2011 model)
- [[autophagy]] — general selective autophagy; p62 phosphorylation
- [[pink1-parkin-pathway]] — downstream effector of Parkin-ubiquitinated cargo recognition
- [[cgas-sting]] — downstream kinase; IRF3 phosphorylation for type I IFN production

## Key interactors

- [[optn]] — primary autophagy receptor substrate; Ser177 phospho-site drives LC3 binding
- [[ndp52]] — autophagy receptor substrate; cooperates with OPTN on mitophagy
- [[p62]] — autophagy cargo receptor; Ser403 phospho-target
- [[sting]] — upstream activator in innate immune axis; recruits TBK1 to ER
- [[irf3]] — downstream transcription factor substrate; type I IFN response
- TANK / NAP1 / SINTBAD — adaptor proteins binding TBK1 CTD; scaffold function; different adaptors confer subcellular localization specificity

## Limitations and gaps

- **Scaffolding vs catalytic functions not fully dissected.** TBK1 has non-catalytic scaffolding roles (particularly in receptor-mediated NF-κB activation) that are not fully separated from its kinase function in most cell-biology experiments. Inhibitor studies may miss scaffolding-dependent biology. #gap/no-mechanism
- **Tissue specificity in autophagy vs immunity.** Which tissues primarily rely on TBK1 for autophagy vs innate immunity is not well-mapped, making it difficult to predict the systemic effects of TBK1 inhibition.
- **Mouse TBK1 heterozygous models.** The mouse Tbk1-null is embryonic lethal (~E14.5). Tbk1+/− and conditional alleles exist; aging phenotypes in Tbk1-haploinsufficient mice are not yet comprehensively published. #gap/needs-human-replication
- **ALS pathology mechanism specificity.** It remains unclear whether ALS from TBK1 haploinsufficiency is primarily caused by failure of mitophagy (damaged mitochondria accumulate), failure of xenophagy, or failure of TBK1's adaptor functions in other signaling contexts.
- **Liu 2015 TBK1/autophagy signaling paper.** The brief supplied DOI `10.1038/nature14488` for a "Liu 2015 TBK1 autophagy reciprocal phosphorylation" paper, but this DOI resolves to a phytoplankton ecology paper — the correct DOI was not confirmed during this seeding pass and is excluded from citations. #gap/unsourced — claims attributed to "Liu 2015" in the brief need source verification.

## Footnotes

[^pomerantz1999]: doi:10.1093/emboj/18.23.6694 · Pomerantz JL & Baltimore D 1999 · in-vitro (biochemical) · model: HEK293 + in vitro kinase · TBK1 cloned as novel IKK-related kinase in TRAF2/TANK complex; NF-κB activation; cited_by ~583

[^hemmi2004]: doi:10.1084/jem.20040520 · Hemmi H et al. 2004 · in-vitro (mouse EF cell lines, genetic knockouts) · model: Tbk1−/− and IKKε−/− mouse embryonic fibroblasts (EFs, from E12.5 embryos) · TBK1 required for LPS- and poly(I:C)-induced IFN-β and IRF-3 activation; complete abolition only in IKKε/TBK1 double-KO EFs; cited_by ~572

[^wild2011]: doi:10.1126/science.1205405 · Wild P et al. 2011 · in-vitro + in-vivo (Drosophila) · model: human cell lines + fly · TBK1 phosphorylates OPTN-Ser177; phospho-OPTN → enhanced LC3 binding; restricts *Salmonella* growth; already verified on [[optn]] page; cited_by ~900+

[^heo2015]: doi:10.1016/j.molcel.2015.08.016 · Heo JM et al. 2015 · in-vitro (human cell lines) · model: HeLa Flip-In T-REx (HFT) cells + HEK293T; PARKIN-inducible system; mitochondrial depolarization with antimycin A/oligomycin · PINK1-Parkin ubiquitylation drives OPTN/NDP52 recruitment and TBK1 activation (pS172); TBK1 phosphorylates OPTN-S473 and OPTN-S513 to enhance polyubiquitin chain binding; TBK1 knockout impairs mitophagy; OPTN and NDP52 cooperate redundantly for TBK1 activation; cited_by ~844

[^cirulli2015]: doi:10.1126/science.aaa3650 · Cirulli ET et al. 2015 · observational (exome sequencing, ALS cohort) · n=2869 ALS patients + 6405 controls (discovery + replication) · TBK1 identified as ALS risk gene (combined p=3.60×10−11); TBK1 variants in 1.099% cases vs 0.194% controls; pathway co-localization with OPTN/SQSTM1/VCP; cited_by ~970

[^freischmidt2015]: doi:10.1038/nn.4000 · Freischmidt A et al. 2015 · observational (exome sequencing + HRMA; familial ALS/FTD cohort) · n=252 fALS index cases + 827 controls (exome); 1,010 sALS + 650 controls (HRMA screen) · TBK1 dominant LoF mutations in 9/252 fALS (~3.6%; p=1.67×10−7); absent in 827 controls; ~4% of genetically unexplained fALS; FTD also caused; CCD2-domain mutations disrupt OPTN binding; cited_by ~764

[^reilly2013]: doi:10.1038/nm.3082 · Reilly SM et al. 2013 · in-vivo (mouse, preclinical only) · model: diet-induced obese (DIO) C57BL/6 mice + ob/ob mice; 3 T2K/Ikbke genetic models · amlexanox (TBK1/IKKε dual inhibitor; IC50 ~1–2 μM) reduced weight ~10 g, improved insulin sensitivity, reduced hepatic steatosis (>50% triglyceride reduction) in obese mice; no human data in this paper — clinical trials proposed as future work; cited_by ~428
