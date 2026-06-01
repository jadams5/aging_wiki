---
type: protein
aliases: [SRY-related HMG-box 2, SOX-2, Transcription factor SOX-2]
uniprot: P48431
ncbi-gene: 6657
hgnc: 11195
mouse-ortholog: Sox2
ensembl: ENSG00000181449
druggability-tier: 2
caused-by: []
causes: []
key-domains: [HMG-box, 9aaTAD-transactivation]
key-ptms: [Lys42-methylation, Lys117-methylation, Ser251-phosphorylation, Lys-sumoylation, Lys-ubiquitination]
pathways: ["[[wnt-signaling]]", "[[pluripotency-network]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
known-interactors: ["[[oct4]]", "[[klf4]]", "[[nanog]]", "[[tet1]]", "[[tet2]]"]
genage-id: null
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Avilion 2003 (10.1101/gad.224503) and Suh 2007 (10.1016/j.stem.2007.09.002) verified against full PDFs; Lu 2020, Yang 2023, Ocampo 2016 consistency-checked against previously verified PDFs; Ferri 2004 unverifiable (closed-access, not_oa); UniProt P48431 identity fields (length 317 aa, HMG-box 41–109) verified via REST API; canonical-database fields NCBI Gene 6657, HGNC 11195, Ensembl ENSG00000181449 not independently re-verified — recommend cross-check on next lint pass"
---

# SOX2

SOX2 (SRY-related HMG-box 2) is a transcription factor and master regulator of pluripotency, best known as the "S" in the Yamanaka factor cocktail (Oct4 / Sox2 / Klf4 / c-Myc = OSKM; or OSK without c-Myc). In the adult organism it is constitutively expressed in neural stem and progenitor cells in the subventricular zone (SVZ) and hippocampal dentate gyrus, where it sustains stem cell identity. Its central place in [[partial-reprogramming]] makes it directly relevant to the [[information-theory-of-aging]] hypothesis and to any therapeutic strategy targeting [[epigenetic-alterations]].

---

## Identity

- **UniProt:** P48431 (SOX2_HUMAN) — manually curated (Swiss-Prot)
- **NCBI Gene:** 6657
- **HGNC:** 11195 (approved symbol: SOX2)
- **Ensembl:** ENSG00000181449
- **Mouse ortholog:** Sox2 (one-to-one; highly conserved; same expression pattern in neural stem cells)
- **Length:** 317 amino acids (single canonical isoform)
- **Chromosome:** 3q26.33 (human)
- **Gene structure:** predominantly single-exon coding sequence (intronless within the ORF) — a notable structural feature shared with several pluripotency regulators

---

## Key functional domains

| Domain | Residues | Function |
|---|---|---|
| HMG-box | 41–109 | Sequence-specific DNA binding; minor-groove interaction; defines SOX family |
| 9aaTAD transactivation motif | 272–280 | Transcriptional activation |
| N-terminal disordered region | 1–43 | Protein interaction surface |
| C-terminal disordered region | 297–317 | Regulatory; PTM target |

The HMG-box contacts DNA in the minor groove and introduces a large bend (~60–85°) in the double helix, remodeling chromatin to make target promoters accessible to co-activator complexes. SOX2 typically binds DNA cooperatively with POU-domain partners, most critically OCT4 (POU5F1).

---

## Function

### Pluripotency and embryonic development

SOX2 is an essential regulator of pluripotency in embryonic stem cells (ESCs) and the inner cell mass (ICM). Genetic deletion of *Sox2* in mice causes peri-implantation lethality, with abnormal implants observed at ~6.0 dpc and no surviving homozygous mutants recovered after 5.5–7.5 dpc, due to failure of epiblast maintenance [^avilion2003]. In ESCs, SOX2 forms a trimeric complex with OCT4 on composite "SOCT" or "MORE-type" elements at target promoters including *FGF4*, *UTF1*, *NANOG*, and *ZFP206* to maintain the pluripotency gene expression network.

SOX2 and OCT4 are mutually dependent for stable nuclear expression: depletion of OCT4 leads to SOX2 downregulation and vice versa, constituting a positive-feedback loop at the core of the pluripotency network.

### Neural stem and progenitor cell maintenance

In the post-natal and adult nervous system, SOX2 is one of the few pluripotency-associated factors to maintain expression. It marks neural stem and progenitor cells throughout the neuraxis, most importantly in two adult neurogenic niches:

- **Subventricular zone (SVZ)** — SOX2-positive type B cells (radial glia-like) give rise to transit-amplifying type C cells and ultimately olfactory bulb interneurons
- **Hippocampal dentate gyrus (DG)** — SOX2-positive radial glia-like progenitors (type 1 cells) generate newborn granule neurons

Conditional hypomorphic reduction of Sox2 in adult mice causes progressive neurodegeneration and severely impaired adult hippocampal and SVZ neurogenesis [^ferri2004]. #gap/no-fulltext-access — quantitative details (n, severity metrics, statistical tests) cannot be verified; Ferri 2004 is closed-access. In vivo fate-mapping of Sox2-expressing cells in the adult hippocampus (SGZ) confirmed their multipotency and self-renewal: Sox2+ cells generate predominantly neurons (PROX1+ granule neurons ~89% by NEUN/PROX1 co-labeling) and astrocytes (GFAP+/S-100β+, ~6–10%), with the Sox2+ progenitor population maintained long-term [^suh2007]. Oligodendrocyte production was demonstrated only in vitro (Sox2-GFP cells cocultured with P0 hippocampal neurons), not confirmed by in vivo fate-mapping; the in vivo lineage-tracing data does not support the oligodendrocyte claim.

SOX2 suppresses neuronal differentiation — it acts as a developmental switch, keeping progenitors undifferentiated while permitting gliogenic and secondary neurogenic fate decisions depending on co-expressed factors and signaling context.

### Subcellular localization and regulation

SOX2 is predominantly nuclear; nuclear import is facilitated by exportin-4 (XPO4) in reverse (i.e., XPO4 promotes nuclear retention). Acetylation promotes nuclear localization; HDAC3-mediated deacetylation redistributes SOX2 to the cytoplasm, coupling its activity to metabolic and stress states. WWP2 (a HECT-domain E3 ubiquitin ligase) ubiquitinates SOX2, targeting it for proteasomal degradation — providing a constitutive turnover mechanism that helps maintain SOX2 at appropriate levels. Sumoylation inhibits DNA binding.

---

## Role in partial reprogramming

SOX2 is the "S" in the OSKM and OSK Yamanaka factor combinations. In the landmark 2006 discovery of induced pluripotent stem cell (iPSC) reprogramming, retroviral co-expression of *Oct4*, *Sox2*, *Klf4*, and *c-Myc* in mouse fibroblasts was sufficient to generate ESC-like iPSCs with full developmental potency [^takahashi2006]. SOX2 is required for this process: it cannot be substituted by other SOX-family members at endogenous expression levels in the iPSC context.

In **partial reprogramming** — the transient, sub-dedifferentiation expression strategy relevant to the [[information-theory-of-aging]] — SOX2 is retained in the OSK (no c-Myc) triple combination used by the Sinclair group:

- **Lu 2020 (Nature):** Tet-Off AAV2 intravitreal delivery of a polycistronic OSK construct to retinal ganglion cells (RGCs) restored youthful DNA methylation patterns, promoted axon regeneration after optic nerve crush (1- and 3-month-old mice), and reversed vision loss in a glaucoma model and in naturally aged mice (3- and 12-month-old mice used for the aging vision experiments); this required SOX2 as part of the OSK complex — and required TET1 and TET2 DNA demethylases (knockdown of either abrogated the benefit; TET3 not required) [^lu2020]. **Local PDF available.**
- **Yang 2023 (Cell):** OSK reprogramming reversed ICE-system-induced epigenetic aging acceleration (up to ~57% reversal of DNA methylation age advance) across multiple tissues in a mouse model designed to causally test whether epigenetic disruption drives aging [^yang2023]. **Local PDF available.**
- **Ocampo 2016 (Cell):** Cyclic OSKM (doxycycline-inducible 2d on / 5d off) ameliorated hallmarks of aging in progeria mice and improved injury recovery in 12-month-old wild-type mice — used the full OSKM combination including c-Myc [^ocampo2016]. **Local PDF available.**

**SOX2's specific contribution within the OSK complex** is not fully dissected at the mechanistic level in partial reprogramming. Its role likely involves: (i) pioneer-like HMG-box binding to condensed chromatin at youthful enhancers, (ii) cooperative loading of OCT4 onto composite elements, and (iii) recruitment of TET demethylases (possibly via direct interaction with TET1/TET2). #gap/no-mechanism — the individual contribution of SOX2 vs OCT4 vs KLF4 within the OSK complex to epigenetic clock reversal has not been dissected in partial reprogramming studies.

---

## Aging relevance

### SOX2 in adult neural stem cell aging

Adult hippocampal and SVZ neurogenesis declines dramatically with age, and this decline has been proposed to contribute to age-related cognitive impairment. SOX2-expressing neural stem/progenitor cells are the primary source of new neurons in both niches.

Key aging-relevant observations:
- SOX2+ type B cells in the SVZ and type 1 radial glia-like cells in the hippocampal DG decrease in number and proliferative activity with age in rodents and likely in humans (human adult neurogenesis is debated; see below) #gap/contradictory-evidence
- Sox2 expression level in remaining aged progenitors has been reported to decrease, potentially contributing to impaired neurogenic commitment #gap/needs-replication
- Interventions that partially restore youthful epigenetic states (including partial reprogramming) may recover SOX2+ progenitor function — this is an active area of investigation in the context of [[partial-reprogramming]] and cognitive aging #gap/no-mechanism

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (SOX2+ NSCs identified in adult human SVZ; same HMG-box domain) |
| Phenotype conserved in humans? | partial (age-related neurogenesis decline confirmed in rodents; human adult hippocampal neurogenesis debated — some studies find SOX2+ progenitors persist to old age, others find near-absent DCX+ newborn neurons in aged human DG) |
| Replicated in humans? | no direct intervention data |

#gap/contradictory-evidence — human adult hippocampal neurogenesis levels and their age-related decline are actively disputed; the SOX2+ progenitor pool in humans has been documented in SVZ but human DG evidence is less consistent.

### Stem cell exhaustion hallmark

SOX2's role in sustaining neural progenitor identity makes it a node in the [[stem-cell-exhaustion]] hallmark. As adult neural stem cells enter quiescence or undergo age-related functional decline, SOX2 expression and activity are potential mediating factors. However, whether declining SOX2 in aged NSCs is a cause of exhaustion or a consequence of upstream age-driving signals is unknown. #gap/no-mechanism #gap/unsourced — a primary source directly quantifying SOX2 protein levels in aged vs young human NSCs is needed.

### SOX2 and epigenetic alterations

SOX2 target loci in the genome accumulate differential DNA methylation with age — a pattern consistent with (but not limited to) the [[information-theory-of-aging]] model. In the context of partial reprogramming, OSK expression — including SOX2 — acts upstream of TET1/TET2-mediated active demethylation to restore youthful CpG patterns [^lu2020]. The directionality (SOX2 → TET recruitment → demethylation → youthful state) is supported by the Lu 2020 TET knockdown data but has only been demonstrated in RGCs. Whether the same mechanism operates in NSCs or other aging-relevant cell types is unknown.

---

## Regulation

### Transcriptional

SOX2 is transcriptionally regulated by its own enhancer network — two major enhancers (SRR1 and SRR2) located ~3 kb upstream and downstream of the TSS drive expression in pluripotent cells. In neural progenitors, distinct enhancers maintain expression in the adult brain. The pluripotency-network feedback loop (OCT4 → SOX2 → NANOG → OCT4) is the dominant positive regulator in ESCs and iPSCs.

### Post-translational

| Modification | Residue | Enzyme | Effect |
|---|---|---|---|
| Methylation | Lys-42 | SET7/9 | ? (context-dependent; may affect DNA binding) |
| Methylation | Lys-117 | SET7/9 | Promotes proteasomal degradation |
| Phosphorylation | Ser-251 | PKC? | Cytoplasmic redistribution |
| Ubiquitination | Lys (multiple) | WWP2 | Proteasomal degradation |
| Sumoylation | Lys (multiple) | SUMO E3 | Inhibits DNA binding |
| Deacetylation | Lys | HDAC3 | Cytoplasmic redistribution |

#gap/unsourced — the specific kinase for Ser-251 phosphorylation requires primary source confirmation.

---

## Disease associations

### Anophthalmia / microphthalmia (MCOPS3)

Heterozygous loss-of-function mutations in *SOX2* cause **Microphthalmia, Syndromic, 3** (OMIM #206900; also called anophthalmia-esophageal-genital [AEG] syndrome), characterized by unilateral or bilateral anophthalmia or severe microphthalmia, esophageal atresia in a subset, and genital anomalies. SOX2 is required for optic cup formation during embryonic eye development. Approximately 10% of severe bilateral anophthalmia cases carry pathogenic *SOX2* variants.

### Cancer stem cell phenotype

SOX2 is amplified or overexpressed in multiple cancer types (lung squamous cell carcinoma via 3q26 amplification; glioblastoma; gastric cancer; esophageal squamous cell carcinoma). In these contexts SOX2 promotes cancer stem cell properties: self-renewal, resistance to differentiation, and chemotherapy resistance. This is the oncogenic face of the same molecular activity that maintains neural progenitor identity in normal tissue. The relationship between SOX2-driven cancer stem cell biology and aging is not direct — aged tissue accumulates mutations that can activate SOX2 inappropriately — but this is distinct from the normal aging decline of SOX2+ progenitors.

---

## Key interactors

- **[[oct4]]** (OCT4/POU5F1) — obligate co-factor in pluripotency; forms heterodimer on composite elements; mutually stabilized with SOX2
- **[[klf4]]** — fellow Yamanaka factor; forms the OSK complex for partial reprogramming
- **[[nanog]]** — target gene of the SOX2-OCT4 complex in ESCs; also regulates SOX2 expression in a feedback loop
- **[[tet1]]** / **[[tet2]]** — TET demethylases required for OSK-mediated epigenetic clock reversal in RGCs (Lu 2020) [^lu2020]; putative direct interactors
- **XPO4** (Exportin-4) — facilitates nuclear retention of SOX2
- **WWP2** — E3 ubiquitin ligase responsible for SOX2 proteasomal turnover

---

## Pharmacology / targeting

No approved therapeutics target SOX2 directly. SOX2 is not currently considered a druggable target due to its role as a transcription factor (disordered; protein–protein interaction surface; no catalytic active site). However:

- **SOX2 re-expression strategies** — AAV-mediated OSK delivery (including SOX2) is the central delivery approach in partial reprogramming experiments (Lu 2020 [^lu2020]; Yang 2023 [^yang2023])
- **mRNA delivery** — being explored by biotechs (e.g., Turn Biotechnologies) for transient OSK expression; avoids genomic integration risk of retroviral/lentiviral vectors
- **Indirect modulation** — upstream regulators (PI3K-AKT signaling, mTOR, SIRT1) affect SOX2 protein stability; geroprotectors that act through these pathways may modulate SOX2 activity in neural progenitors #gap/no-mechanism

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[partial-reprogramming]] (verified) | SOX2 is the "S" in OSK and OSKM; required for all partial reprogramming experiments; see full mechanistic context there |
| [[hypotheses/information-theory-of-aging]] (verified) | OSK including SOX2 is the proposed epigenetic-reversal intervention; SOX2 function underpins the hypothesis |
| [[oct4]] (planned stub) | Obligate SOX2 co-factor; the "O" in OSK; separate protein page |
| [[klf4]] (planned stub) | "K" in OSK; partial reprogramming factor |
| [[c-myc]] (planned stub) | "M" in OSKM; omitted from safer OSK protocols; proto-oncogene |
| [[epigenetic-alterations]] | The hallmark SOX2 engages via OSK-mediated TET recruitment and demethylation |
| [[stem-cell-exhaustion]] | SOX2 maintains adult NSC identity; age-related loss of SOX2+ progenitors is a proposed contributor |
| [[cellular-senescence]] | Limited direct evidence; SOX2 re-expression in senescent cells has been explored in partial reprogramming contexts #gap/unsourced |
| [[tet1]] (stub) | Required for OSK-mediated epigenetic reversal in RGCs (Lu 2020); TET1/TET2 knockdown abrogates OSK benefit |
| [[tet2]] (stub) | Required alongside TET1; TET3 not required |
| [[neural-stem-cells]] (stub) | Primary cell type maintaining SOX2 expression in adults; site of age-related neurogenesis decline |
| [[adult-neurogenesis]] (stub) | Process driven by SOX2+ progenitors; declines with age |
| [[wnt-signaling]] | Upstream regulator of SOX2 expression in neural progenitors; WNT activation upregulates SOX2 in NSC niche |

---

## Limitations and gaps

#gap/no-mechanism — the individual contribution of SOX2 (vs OCT4 vs KLF4) to OSK-mediated epigenetic clock reversal in partial reprogramming has not been mechanistically dissected; single-factor deletion experiments in the partial reprogramming context are lacking.

#gap/needs-human-replication — all OSK partial reprogramming experiments demonstrating epigenetic clock reversal are mouse-only (Lu 2020 RGCs; Yang 2023 ICE model); no human tissue data.

#gap/contradictory-evidence — the extent of adult human hippocampal neurogenesis (and therefore the aging-relevance of SOX2+ DG progenitors in humans) is actively disputed; key papers reach opposite conclusions using different methodologies.

#gap/needs-replication — SOX2 protein level changes with age in NSCs: the claim that SOX2 expression declines in aged progenitors is not well-documented with highly-cited, replicated primary sources; needs direct quantification.

#gap/unsourced — the specific kinase for SOX2 Ser-251 phosphorylation and its functional consequence need primary-source confirmation.

---

## Footnotes

[^avilion2003]: doi:10.1101/gad.224503 · in-vivo + in-vitro (mouse Sox2-null embryos + ESCs + chimera rescue) · design: germline knockout (Sox2 ORF replaced by β-geo via homologous recombination; MF1 and 129/SvEv backgrounds) · model: Mus musculus · Genes & Development 2003 · n=multiple embryonic litters; Table 1: 34 embryos at 5.5–7.5 dpc, 44 at 9.5–11.5 dpc, 135 at 4 wk pp — no homozygous mutants recovered postnatally · archive status: PDF downloaded (diamond OA) · **Sox2-null embryos die peri-implantation (~6.0 dpc); epiblast fails to be maintained; Sox2 essential for epiblast and ExE lineages; chimeras rescued to 7.5 dpc before dying of ExE defect**

[^takahashi2006]: doi:10.1016/j.cell.2006.07.024 · in-vitro (mouse embryonic + adult fibroblast → iPSC) · design: gain-of-function (retroviral OSKM) · model: Mus musculus fibroblasts · Cell 2006 · citation_percentile=100; cited_by=26,108 · archive status: metadata confirmed; PDF pending (bronze OA) · **foundational discovery that OSKM including SOX2 is sufficient to reprogram somatic cells to pluripotency**

[^ferri2004]: doi:10.1242/dev.01204 · in-vivo (conditional Sox2 hypomorphic reduction) · design: conditional genetic reduction · model: Mus musculus adult brain · Development 2004 · n=multiple cohorts · citation_percentile=100; cited_by=658 · archive status: confirmed closed-access (not_oa per a local paper archive); full PDF unavailable — quantitative claims from this paper UNVERIFIED #gap/no-fulltext-access · **Sox2 deficiency in adults causes neurodegeneration and impaired SVZ/hippocampal neurogenesis — cannot verify quantitative details without PDF**

[^suh2007]: doi:10.1016/j.stem.2007.09.002 · in-vivo fate-mapping + lentiviral/retroviral lineage tracing (Sox2-GFP transgenic mice; Sox2-Cre/GFP retrovirus into ROSA26-loxP-GFP reporter mice) · design: fate-mapping + in vitro NSC characterization · model: Mus musculus (C57BL/6), 6-week-old adult hippocampus (SGZ) · n=54 hemispheres for retroviral tracing (363 clusters total; avg 6.7 ± 1.5 clusters/hemisphere); n=5 for Ki67 proliferation analysis (5.2% ± 2.67% Ki67+) · Cell Stem Cell 2007 · archive status: PDF downloaded (bronze OA) · **Sox2+ cells in adult hippocampal SGZ are multipotent (neurons ~89%, astrocytes ~6–10% in vivo) and self-renewing; oligodendrocyte potential shown in vitro only; Sox2+ pool size constant even with increased neurogenesis (running)**

[^lu2020]: [[studies/lu-2020-osk-vision-restoration]] · in-vivo (Tet-Off AAV2 dual-vector system, intravitreal delivery to RGCs; OSK as polycistronic AAV2-TRE-OSK + AAV2-rtTA) · model: Mus musculus (optic nerve crush: 1- and 3-month-old; aging vision: 3- and 12-month-old; glaucoma model separately) · doi:10.1038/s41586-020-2975-4 · **local PDF available** · citation_percentile=100; FWCI=113 · TET1/TET2 required (knockdown of either abrogated benefit); TET3 not required; **SOX2 is part of the OSK complex delivering epigenetic reversal; c-Myc excluded; ~90% of 464 age-altered RGC transcripts restored to youthful levels by OSK**

[^yang2023]: [[studies/yang-2023-epigenetic-information-loss]] · in-vivo (ICE system: multi-tissue) · model: C57BL6/J Mus musculus · doi:10.1016/j.cell.2022.12.027 · **local PDF available** · citation_percentile=100; FWCI=108 · OSK reversed DNAme age by up to ~57% in ICE mice; **SOX2 part of OSK complex used for reversal**

[^ocampo2016]: [[studies/ocampo-2016-partial-reprogramming]] · in-vivo (cyclic dox-inducible OSKM) · model: LAKI G609G knockin (HGPS mouse) + 12-month-old WT C57BL/6J · doi:10.1016/j.cell.2016.11.052 · **local PDF available** · citation_percentile=100; FWCI=34.8 · uses full OSKM (SOX2 + c-Myc included); cyclic 2d-on/5d-off protocol
