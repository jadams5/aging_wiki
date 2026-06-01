---
type: protein
aliases: [TET2, "ten-eleven translocation 2", "methylcytosine dioxygenase TET2", KIAA1546]
uniprot: Q6N021
ncbi-gene: 54790
hgnc: 25941
mouse-ortholog: Tet2
ensembl: ENSG00000168769
druggability-tier: 2
caused-by: []
causes: []
genage-id: null
pathways: ["[[dna-demethylation]]", "[[epigenetic-clock]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[chronic-inflammation]]", "[[stem-cell-exhaustion]]"]
known-interactors: ["[[idax-cxxc4]]", "[[dnmt3a]]", "[[asxl1]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Ito 2010 (Nature), Delhommeau 2009 (NEJM), Moran-Crusio 2011 (Cancer Cell), Cimmino 2017 (Cell), and Agathocleous 2017 (Nature) claims verified against primary-source PDFs. Ko 2011 (PNAS) is closed-access (not_oa) — claims from that paper tagged. Ko 2013 IDAX DOI corrected from 10.1016/j.molcel.2013.05.004 (wrong paper) to 10.1038/nature12052 (Nature); PDF unavailable (download failed) — IDAX-related claims not directly verified against source text. Fuster 2017 (Science) remains #gap/no-fulltext-access. UniProt identity fields (accession Q6N021, length 2002 aa, NCBI Gene 54790, HGNC 25941) spot-checked against live UniProt Q6N021 JSON — confirmed correct. Svensson 2022 CANTOS quantitative claims cross-referenced from verified canakinumab.md (R12) — not re-verified independently here."
---

# TET2

TET2 (ten-eleven translocation methylcytosine dioxygenase 2) is an Fe(II)- and α-ketoglutarate-dependent dioxygenase that initiates active DNA demethylation by iteratively oxidizing 5-methylcytosine (5mC) to 5-hydroxymethylcytosine (5hmC), 5-formylcytosine (5fC), and 5-carboxylcytosine (5caC). It is the second-most-common driver of [[clonal-hematopoiesis]] (CHIP) and is central to the [[chronic-inflammation]] axis linking somatic mutation in hematopoietic stem cells to accelerated cardiovascular aging. TET2 loss-of-function mutations are the canonical example of how age-acquired somatic mutations in non-cancer tissue can remodel systemic inflammation independently of malignant transformation.

## Identity

- **UniProt:** Q6N021 (TET2_HUMAN)
- **NCBI Gene:** 54790
- **HGNC:** 25941
- **Mouse ortholog:** Tet2 (one-to-one; phenotypically tractable KO model available)
- **Length:** 2,002 amino acids (canonical isoform)
- **Chromosome:** 4q24
- **Gene family:** TET family — TET1, TET2, TET3; all Fe(II)/2-oxoglutarate-dependent dioxygenases; conserved catalytic core, divergent N-terminal regulatory regions

**Naming note:** This page covers the TET2 protein/gene. There is no `pathways/tet2.md` in this wiki; pathway-level context is covered under [[dna-demethylation]] and [[epigenetic-alterations]].

## Domain architecture

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal regulatory region | ~1–1100 | Intrinsically disordered; protein–protein interactions; membrane targeting; no catalytic activity |
| Cys-rich domain | ~1129–1481 | Contributes to DNA binding; part of the broader catalytic fold |
| DSBH (double-stranded β-helix) core | ~1481–1936 | Core catalytic domain; contains the HxD...H iron-binding triad and the RxxxxxR motif for α-KG coordination |

**Key difference from TET1/TET3:** TET1 and TET3 contain an N-terminal CXXC zinc-finger that directly binds CpG dinucleotides. TET2 lacks this CXXC domain — it was lost during vertebrate evolution when a chromosomal inversion separated the ancestral CXXC domain (now the independently encoded gene *IDAX*, also called *CXXC4*) from the dioxygenase domain. TET2 therefore acquires CpG-island specificity via its binding partner [[idax-cxxc4]] rather than through an intrinsic zinc finger [^ko2013]. #gap/needs-replication — the in-vivo functional significance of IDAX-mediated TET2 targeting vs other recruitment mechanisms is not fully resolved.

## Catalytic chemistry

TET2 catalyzes the iterative oxidation of 5-methylcytosine within genomic DNA using molecular oxygen and α-ketoglutarate (α-KG, also called 2-oxoglutarate) as co-substrates, with Fe(II) in the active site. Step 1 (5mC→5hmC) was established by Tahiliani 2009 for TET1 [^tahiliani2009] and extended to TET2/TET3 by Ito 2010 [^ito2010]. Steps 2 and 3 (further oxidation to 5fC and 5caC) were established by subsequent work in 2011 (Ito et al., He et al.) not separately cited here — the overall iterative cascade is:

```
5mC + α-KG + O₂  →  5hmC + succinate + CO₂    (step 1; established by Tahiliani 2009 [^tahiliani2009] / Ito 2010 [^ito2010])
5hmC + α-KG + O₂  →  5fC + succinate + CO₂     (step 2; established 2011) #gap/unsourced — needs citation for steps 2-3
5fC  + α-KG + O₂  →  5caC + succinate + CO₂    (step 3; established 2011) #gap/unsourced
```

5fC and 5caC are recognized and excised by thymine-DNA glycosylase (TDG), followed by base-excision repair (BER) to restore unmodified cytosine — completing the net demethylation cycle. 5hmC itself is not directly excised; it can also serve as an epigenetic mark recognized by dedicated readers, making TET2 relevant both as a demethylase and as a 5hmC writer.

**The IDH1/IDH2 connection:** Mutant IDH1 (R132) and IDH2 (R140, R172) convert α-KG to 2-hydroxyglutarate (2HG), a structural isomer that competitively inhibits all α-KG-dependent dioxygenases including TET2. #gap/unsourced — the IDH/2HG/TET2 mutual exclusivity finding (Dang et al. 2009; Xu et al. 2011) is not cited here with a primary source; the Delhommeau 2009 citation that was here has been removed as Delhommeau 2009 predates IDH mutation characterization in myeloid cancer. This explains why IDH1/2 mutations in AML phenocopy TET2 loss-of-function: both suppress TET2-mediated demethylation, leading to overlapping hypermethylator phenotypes. The therapeutic implication flows in the reverse direction — IDH1/IDH2 inhibitors (ivosidenib, enasidenib) that reduce 2HG production can partially restore TET2 activity in IDH-mutant malignancies (see [[therapeutic-angles]] below).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TET2/5hmC pathway directly characterized in human cells |
| Phenotype conserved in humans? | yes — human TET2 LoF produces myeloid malignancy; CHIP phenotype in humans |
| Replicated in humans? | yes (for hematological phenotypes); in-progress (for cardiovascular phenotypes) |

## Biological roles

### Hematopoietic stem cell homeostasis

TET2 is highly expressed in hematopoietic stem and progenitor cells (HSPCs) and acts as a rheostat for self-renewal versus differentiation. *Tet2* knockout in mice leads to:

- Expanded HSC compartment and enhanced self-renewal capacity [^morancrusio2011][^ko2011]
- Myeloid-biased differentiation at the expense of lymphoid output
- Progressive myeloproliferative disease with CMML-like features by 20 weeks (splenomegaly >250 mg, marked peripheral monocytosis, neutrophilia, myeloid dysplasia in bone marrow and spleen) [^morancrusio2011]; long-term malignancy penetrance rate not explicitly stated at 12 months in this paper — the 20-week phenotype is the primary reported endpoint #gap/needs-replication

The mechanism appears to involve TET2-mediated demethylation at stem-cell-associated loci that normally promote differentiation. Loss of TET2 locks HSCs in a hypermethylated, hyper-self-renewing state. For the epidemiological perspective on TET2 CHIP clone dynamics and expansion kinetics, see [[clonal-hematopoiesis]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TET2 mutations produce myeloid malignancy in humans via same mechanism |
| Phenotype conserved in humans? | yes — myeloid bias, HSC expansion observed in human TET2-LoF CHIP clones |
| Replicated in humans? | yes (hematological malignancy phenotype well-established) |

### Macrophage inflammation regulation

TET2-deficient macrophages and monocytes display a hyper-inflammatory phenotype that is the primary mechanistic link between TET2-CHIP and cardiovascular disease [^fuster2017]:

- Elevated production of [[il-1b|IL-1β]] and IL-6 in response to LPS and oxidized lipid stimulation
- Increased NLRP3 inflammasome activation — partially explained by TET2-regulated demethylation at the *Nlrp3* promoter (TET2 loss → increased promoter methylation → paradoxically elevated Nlrp3 expression via a mechanism still under investigation) #gap/no-mechanism
- Enhanced [[nf-kb]] target gene expression

This macrophage phenotype is cell-autonomous: *Tet2*-conditional knockout restricted to the myeloid lineage alone is sufficient to accelerate atherosclerosis in LDLR-null mouse models [^fuster2017]. The cardiovascular consequences are covered in depth at [[clonal-hematopoiesis]] (canonical home for the CHIP-CVD axis data and the Svensson 2022 CANTOS subgroup HR=0.38 result).

### T cell and adaptive immune roles

TET2 also functions in T cells, where it supports:

- FOXP3+ regulatory T cell (Treg) differentiation — TET2 demethylates the *Foxp3* conserved non-coding sequence 2 (CNS2) to stabilize Foxp3 expression
- Effector T cell fate decisions in some inflammatory contexts

The T cell-aging relationship is less characterized than the myeloid phenotype and is not a current focus of this wiki. #gap/needs-replication

## Disease — somatic loss-of-function mutations

TET2 is a tumor suppressor via haploinsufficiency. Somatic LoF mutations (frameshift, nonsense, missense in the catalytic core) are found across myeloid and some lymphoid malignancies:

| Disease | TET2 mutation frequency in Delhommeau 2009 (n=309 total) | Reference |
|---|---|---|
| MDS (various subtypes) | 19% (15/81 patients) | [^delhommeau2009] |
| MPN (JAK2 V617F+ and V617F−) | 12% (24/198 patients; with or without JAK2 V617F) | [^delhommeau2009] |
| Secondary AML | 24% (5/21 patients) | [^delhommeau2009] |
| CMML (chronic myelomonocytic leukemia) | 22% (2/9 patients) | [^delhommeau2009] |
| All myeloid disorders (overall) | 15% (46/309 patients) | [^delhommeau2009] |
| CHIP (in population cohorts) | ~10% of CHIP carriers; 2nd-most-common driver after DNMT3A | see [[clonal-hematopoiesis]] |

**Note on Delhommeau 2009 frequencies vs later literature:** The per-disease frequencies in Delhommeau 2009 reflect the specific patient mix and sequencing design (n=309 total). Subsequent larger cohort studies — including those cited in Cimmino 2017 — report CMML ~50%, MDS ~30%, and AML ~10% de novo [^cimmino2017]; those higher estimates come from later, more targeted sequencing studies not from Delhommeau 2009. The wiki previously attributed ~50–60% CMML frequency to Delhommeau 2009; that is incorrect — that frequency comes from later literature.

**Delhommeau 2009** first identified TET2 as a recurrently mutated tumor-suppressor gene in myeloid cancers across MDS, MPN, and AML patients [^delhommeau2009]. At the time, TET2's enzymatic function was not yet known — the connection to 5hmC chemistry was established contemporaneously by Tahiliani 2009 [^tahiliani2009] and Ito 2010 [^ito2010].

**CHIP frequency:** In Jaiswal 2014 (n=17,182 WES), TET2 was mutated in 72 persons vs 403 for DNMT3A, making it the second-most-common CHIP driver. For the full CHIP driver landscape and cohort data, see [[clonal-hematopoiesis]] (canonical home; cross-reference only).

## CHIP-CVD axis

The mechanistic chain from TET2 somatic mutation to cardiovascular disease is the protein's central aging-biology relevance:

1. TET2-LoF somatic mutation acquired in an HSPC during normal aging
2. Clonal expansion of the TET2-mutant clone (CHIP)
3. TET2-deficient monocytes/macrophages differentiated from the clone enter the arterial wall
4. Hyper-inflammatory IL-1β/NLRP3 activation in TET2-deficient macrophages accelerates atherosclerosis

**Mouse causal evidence (Fuster 2017):** Transplanting *Tet2*-null bone marrow into LDLR-null atherosclerosis-susceptible mice accelerated plaque formation and elevated IL-1β/IL-6 in plaques. The effect was attributable to *Tet2*-null macrophages and was driven by NLRP3 inflammasome hyperactivation [^fuster2017]. #gap/no-fulltext-access — Fuster 2017 PDF unavailable in archive (status: failed); quantitative plaque area differences and exact inflammatory markers cannot be independently verified on this page. Refer to [[clonal-hematopoiesis]] for the full extrapolation table.

**Human evidence and therapeutic implication:** The CANTOS trial CHIP subgroup (Svensson 2022) demonstrated that IL-1β blockade with [[canakinumab]] showed concentrated cardiovascular benefit in TET2-mutated CHIP carriers (HR=0.38 for MACE, 95% CI 0.15–0.96, P=0.04; P-interaction=0.14, NS) compared to non-TET2-CHIP participants [^svensson2022]. This is the canonical result for the [[canakinumab]] page and [[clonal-hematopoiesis]] — it is cross-referenced here as the key translational anchor for TET2's protein-page, but the quantitative details and full caveats live on those pages.

#gap/needs-replication — the Svensson 2022 finding is a post-hoc exploratory subgroup analysis (26% power per the paper's own limitations); a prospective trial in TET2-CHIP carriers has not been completed.

## Mouse genetics summary

| Model | Phenotype | Reference |
|---|---|---|
| *Tet2*-/- constitutive KO (conditional Vav-Cre) | Progressive CMML-like disease by 20 weeks: splenomegaly (spleen weight >250 mg), peripheral monocytosis, neutrophilia, myeloid dysplasia, extramedullary hematopoiesis; expanded HSC/LSK compartment; viable and fertile | [^morancrusio2011] |
| *Tet2*+/- heterozygous (Vav-Cre) | Partial HSC expansion; increased self-renewal and extramedullary hematopoiesis; monocytosis; myeloid transformation at lower penetrance than homozygous KO — haploinsufficiency is sufficient to confer transformation in vivo | [^morancrusio2011] |
| *Tet2*-/- KO mice + LDLR-null background (BM transplant) | Accelerated atherosclerosis; elevated plaque IL-1β/IL-6; NLRP3 hyperactivation in macrophages | [^fuster2017] |
| *Tet2/Tet3* double KO in neural stem cells | Severely impaired neurogenesis; #gap/needs-replication for aging context | #gap/unsourced — requires primary citation |

The *Tet2*-/- mouse is an excellent model for CHIP genetics because the phenotype (clonal expansion, myeloid malignancy) parallels the human disease trajectory, unlike many cancer-predisposition models that lack tissue-specific fidelity.

## Therapeutic angles

### Vitamin C (ascorbate) — TET2 reactivation

Ascorbate (vitamin C) is a co-factor that maintains iron in the Fe(II) state required for TET2 catalysis. In settings where residual TET2 protein is present (e.g., heterozygous LoF or hypomorphic mutations), ascorbate supplementation can augment TET2 enzymatic activity:

- Cimmino et al. 2017 (*Cell*) showed that vitamin C treatment mimics *Tet2* restoration in a reversible RNAi mouse model (*VTA-shTet2*), blocking aberrant HSC self-renewal, promoting differentiation and cell death, and suppressing human leukemic colony formation from primary AML PDXs [^cimmino2017]. Mechanistic basis: vitamin C acts as an electron donor to restore Fe²⁺ in the TET2 active site, increasing 5hmC and driving demethylation. The effect on re-plating was blocked in *Tet2⁻/⁻;Tet3* knockdown cells (partially dependent on TET family), indicating the vitamin C effect is at least partly TET-mediated. Vitamin C also enhanced sensitivity to PARP inhibition in leukemia cells.
- Agathocleous et al. 2017 (*Nature*) showed that HSCs/MPPs normally accumulate unusually high levels of ascorbate (2–20-fold higher than restricted progenitors), and that systemic ascorbate depletion in *Gulo*⁻/⁻ mice increased HSC frequency and function partly by reducing Tet2 activity (evidenced by reduced 5hmC in HSCs); ascorbate depletion also cooperated with *Flt3*-ITD mutations to accelerate leukemogenesis, and these effects were attenuated in *Gulo*⁻/⁻;*Tet2*Δ/Δ compound mutant mice [^agathocleous2017].

#gap/needs-human-replication — both studies are preclinical. Whether ascorbate supplementation at physiological or supraphysiological doses meaningfully reduces CHIP progression or myeloid malignancy risk in humans with heterozygous TET2 mutations has not been tested in a clinical trial.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ascorbate/Fe(II) chemistry is conserved; TET2 expressed in human HSCs |
| Phenotype conserved in humans? | unknown — human HSC TET2 activation by ascorbate not directly demonstrated |
| Replicated in humans? | no |

### IDH1/IDH2 inhibitors — indirect TET2 restoration

Ivosidenib (IDH1 inhibitor) and enasidenib (IDH2 inhibitor) reduce 2-hydroxyglutarate production by mutant IDH enzymes, partially restoring α-KG availability and thereby permitting residual TET2 activity. This is a co-occurring-mutation strategy (IDH1/2 + TET2 co-mutation scenarios), not a standalone TET2 therapy. Both are FDA-approved for IDH-mutant AML. Their relevance to aging/CHIP is limited to the mechanistic overlap.

### α-KG supplementation

α-Ketoglutarate as a dietary supplement or pharmaceutical has been proposed as a TET2 co-factor replenishment strategy. Entirely preclinical for this indication; no clinical data for CHIP or TET2 restoration. #gap/needs-human-replication #gap/no-mechanism — the pharmacokinetic relationship between oral α-KG dosing and intracellular TET2 co-factor availability in HSCs is not established.

### Direct TET2 restoration (no clinical program)

Re-expression of TET2 in *Tet2*-null HSCs reduces clonal dominance and atherosclerosis in mouse models. No human gene-therapy or small-molecule TET2 reactivation program is in clinical stage as of 2026-05-05. #gap/needs-human-replication

## Cross-references

- [[clonal-hematopoiesis]] — canonical home for CHIP epidemiology, CHIP-CVD axis mechanism, CANTOS-CHIP subgroup data (verified R12; cross-reference only from this page)
- [[dnmt3a]] — most-common CHIP driver; epigenetic regulator; implicit stub
- [[asxl1]] — third-most-common CHIP driver; Polycomb-associated; implicit stub
- [[hematopoietic-stem-cells]] — cellular biology of HSCs; cohort prevalence data (verified-partial)
- [[atherosclerosis]] — cardiovascular consequence of TET2-CHIP; Fuster 2017 cross-reference (verified-partial)
- [[microglia]] — brain-resident macrophages derived from hematopoiesis; TET2 expressed; CHIP mutations detected in microglial fraction (Bouzid 2023; verified-partial)
- [[epigenetic-alterations]] — hallmark page; TET2 is a direct epigenetic writer
- [[chronic-inflammation]] — hallmark page; TET2-LoF macrophage hyperactivation
- [[stem-cell-exhaustion]] — CHIP is both a product and modifier of HSC aging
- [[canakinumab]] — IL-1β blocker; CANTOS-CHIP result (verified R12)
- [[il-1b]] — downstream effector of TET2-LoF macrophage hyperactivation; implicit stub (co-seeded R13)
- [[idh1]] / [[idh2]] — IDH1/2 mutations produce 2HG that inhibits TET2; implicit stubs
- [[5hmc]] — the primary oxidation product of TET2 activity; implicit stub
- [[tet1]] — TET family member with CXXC zinc finger; implicit stub
- [[idax-cxxc4]] — CpG-targeting partner of TET2 (CXXC4/IDAX); implicit stub
- [[nlrp3-inflammasome]] — upstream of IL-1β maturation; TET2-regulated in macrophages
- [[nf-kb]] — downstream of IL-1β signaling
- [[dna-demethylation]] — pathway page (implicit stub)

## Limitations and gaps

- **No TET2-specific CHIP prospective trial.** The CANTOS-CHIP subgroup (Svensson 2022) is an exploratory post-hoc analysis (26% power); a prospective trial enrolling TET2-CHIP carriers to test IL-1β blockade or other targeted interventions has not been completed. #gap/needs-replication
- **TET2 restoration human evidence absent.** Vitamin C and α-KG restoration of TET2 function are preclinical findings only. #gap/needs-human-replication
- **Nlrp3/TET2 epigenetic mechanism incompletely mapped.** The precise CpG sites and quantitative relationship between TET2 activity and NLRP3 expression in primary human macrophages have not been systematically characterized. #gap/no-mechanism
- **TET2-CHIP vs DNMT3A-CHIP cardiovascular risk.** Whether TET2-CHIP and DNMT3A-CHIP carry equal or distinct cardiovascular risk levels in humans is unclear — CANTOS subgroup data suggest TET2-specific benefit from IL-1β blockade, implying mechanistic divergence. #gap/needs-replication
- **Neurodegeneration.** The Bouzid 2023 finding (CHIP associated with AD protection, OR=0.64; not TET2-specific) has unclear mechanistic basis; TET2's specific contribution to CNS aging through the microglial compartment is an open question. #gap/no-mechanism #gap/needs-replication — see [[clonal-hematopoiesis]] for the full Bouzid 2023 framing.
- **Ko 2011 DOI correction confirmed.** The source brief cited DOI 10.1073/pnas.1112744108; Crossref lookup confirmed the correct DOI is 10.1073/pnas.1112317108 (title: "Ten-Eleven-Translocation 2 (TET2) negatively regulates homeostasis and differentiation of hematopoietic stem cells in mice"). Paper is closed-access (#gap/no-fulltext-access); claims attributed to Ko 2011 cannot be independently verified from source text.
- **Ko 2013 IDAX DOI correction (critical).** The seeder cited DOI 10.1016/j.molcel.2013.05.004 for the Ko/IDAX paper. That DOI resolves to an unrelated BMP-Smad signaling paper (Xu et al. 2013, "Arginine Methylation Initiates BMP-Induced Smad Signaling"). The correct DOI for Ko M et al. "Modulation of TET2 expression and 5-methylcytosine oxidation by the CXXC domain protein IDAX" is 10.1038/nature12052 (Nature 2013). The corrected DOI is now in the footnote. The paper is green OA but both download attempts failed — claims attributed to [^ko2013] are not directly source-verified. #gap/needs-replication

## Footnotes

[^tahiliani2009]: [[studies/tahiliani-2009-tet1-5hmc]] · doi:10.1126/science.1170116 · Tahiliani M, Koh KP, Shen Y et al. · Science 2009;324:930-935 · discovery that TET1 (MLL partner) converts 5mC to 5hmC via Fe(II)/α-KG-dependent oxidation; established the biochemical reaction mechanism for TET-family enzymes; n=N/A (biochemical + cell-line study) · in-vitro + in-vivo · model: mammalian cells (HEK293, mouse ES cells) · archive status: pending download (green OA)

[^ito2010]: [[studies/ito-2010-tet2-5hmc]] · doi:10.1038/nature09303 · Ito S, D'Alessio AC, Taranova OV, Hong K, Sowers LC, Zhang Y · Nature 2010;466:1129-1133 · demonstrated that all three Tet proteins (Tet1, Tet2, Tet3) catalyze 5mC → 5hmC oxidation in a Fe(II)- and α-KG-dependent manner; in-vitro using baculovirus-expressed Flag-tagged catalytic domains on methylated oligonucleotides; in-vivo via overexpression in U2OS and HEK293 cells showing reduced 5mC staining; primary paper focus is Tet1's role in ES-cell self-renewal (Nanog regulation) and ICM specification — TET2/3 enzymatic activity is the secondary finding; n=N/A (biochemical + cell overexpression) · in-vitro + in-vivo (cell-based) · model: mouse Tet catalytic domains expressed in baculovirus/mammalian cells; mouse E14Tg2A ES cells for Tet1 functional studies · archive status: **locally available** —  (local PDF) · **PDF verified 2026-05-05**

[^delhommeau2009]: [[studies/delhommeau-2009-tet2-myeloid-cancer]] · doi:10.1056/NEJMoa0810069 · Delhommeau F, Dupont S, Della Valle V et al. · NEJM 2009;360:2289-2301 · first identification of somatic TET2 mutations in myeloid cancers; n=309 patients (81 MDS, 198 MPN, 21 secondary AML, 9 CMML); overall TET2 defects in 15% (46/309); by subtype: MDS 19% (15/81), MPN 12% (24/198), secondary AML 24% (5/21), CMML 22% (2/9); TET2 function was unknown at time of publication — paper establishes tumor-suppressor role only by genetic evidence · observational (sequencing case series) · model: human myeloid malignancy patients · archive status: **locally available** —  (local PDF) · **PDF verified 2026-05-05**

[^morancrusio2011]: [[studies/moran-crusio-2011-tet2-hsc-myeloid]] · doi:10.1016/j.ccr.2011.06.001 · Moran-Crusio K, Reavie L, Shih A et al. · Cancer Cell 2011;20:11-24 · conditional *Tet2* KO (Vav-Cre) mice develop progressive CMML-like disease by 20 weeks: splenomegaly (spleen weight >250 mg, p<0.05), marked peripheral monocytosis (p<0.01), neutrophilia, myeloid dysplasia in BM and spleen; expanded LSK/HSC compartment (p<0.0001 at 20 weeks); competitive transplantation shows Tet2−/− HSCs outcompete WT by 23 weeks (>90% of PBCs are Tet2−/−); Tet2+/− heterozygous mice also show aberrant self-renewal and extramedullary hematopoiesis (haploinsufficiency is sufficient); n≥3 per genotype for most experiments; n=15 per genotype for competitive transplants · in-vivo · model: mus-musculus (conditional Vav-Cre × Tet2-floxed; C57BL/6 × 129/SvEv hybrid background) · archive status: **locally available** —  (local PDF) · **PDF verified 2026-05-05**

[^ko2011]: [[studies/ko-2011-tet2-hsc-differentiation]] · doi:10.1073/pnas.1112317108 · Ko M, Bandukwala HS, An J, Lamperti E, Thompson EC, Hastie R, Tsangaratou A, Rajewsky K, Koralov SB, Rao A · PNAS 2011;108:14566-14571 · "Ten-Eleven-Translocation 2 (TET2) negatively regulates homeostasis and differentiation of hematopoietic stem cells in mice" · DOI confirmed via Crossref 2026-05-05 · archive status: **#gap/no-fulltext-access** — closed OA (not_oa per archive); content of this paper not independently verified from source PDF · **Note: DOI in original source brief was incorrect (1112744108); corrected to 1112317108 via Crossref/PMID 21873190**

[^fuster2017]: [[studies/fuster-2017-tet2-chip-atherosclerosis]] · doi:10.1126/science.aag1381 · Fuster JJ et al. · Science 2017;355:842-847 · Tet2-null BM transplant into LDLR-null atherosclerosis mice accelerated plaque formation; mechanism: NLRP3/IL-1β hyperactivation in Tet2-null macrophages; Tet2 conditional myeloid KO sufficient for phenotype · in-vivo · model: mus-musculus (LDLR-/- background, BM transplant) · archive status: **#gap/no-fulltext-access** — PDF download failed (status: failed); quantitative plaque size values not independently verifiable from this page

[^cimmino2017]: [[studies/cimmino-2017-tet2-ascorbate-leukemia]] · doi:10.1016/j.cell.2017.07.032 · Cimmino L, Dolgalev I, Wang Y et al. · Cell 2017;170:1079-1095 · primary model: reversible RNAi *Tet2*-knockdown mouse (*VTA-shTet2*); vitamin C treatment mimics Tet2 restoration — blocks aberrant HSPC self-renewal (2-fold increase in CFUs in KD vs RS cells; restoration blocks re-plating beyond P5), promotes differentiation and cell death (increased Annexin V+ cells in RS), suppresses human leukemic colony formation from primary AML PDXs; vitamin C increases 5hmC ~2-fold and decreases 5mC ~30% in cKit+ cells; effect partially TET-dependent (attenuated in Tet2−/−;Tet3-KD cells); vitamin C also sensitizes leukemia cells to PARP inhibition; mechanism: vitamin C acts as electron donor restoring Fe²⁺ in TET active site, increasing rate of 5mC oxidation up to 8-fold in vitro · in-vitro + in-vivo · model: mus-musculus (VTA-shTet2 reversible KD) + human AML PDX + human leukemia cell lines · archive status: **locally available** —  (local PDF) · **PDF verified 2026-05-05**

[^agathocleous2017]: [[studies/agathocleous-2017-ascorbate-hsc-leukemia]] · doi:10.1038/nature23876 · Agathocleous M, Meacham CE, Burgess RJ et al. · Nature 2017;549:476-481 · key findings: (1) HSCs/MPPs accumulate ascorbate at 2–20-fold higher levels than restricted progenitors, declining with differentiation; (2) ascorbate depletion in *Gulo*⁻/⁻ mice significantly increases HSC frequency and function partly via reduced Tet2 activity (reduced 5hmC in HSCs/MPPs); (3) ascorbate depletion cooperates with *Flt3*-ITD mutations to accelerate leukemogenesis — effect abrogated in *Gulo*⁻/⁻;*Tet2*Δ/Δ compound mutants; (4) ascorbate repletion restores 5hmC and normalizes HSC frequency; ascorbate acts through both Tet2-dependent and Tet2-independent mechanisms in myeloid progenitors · in-vivo · model: mus-musculus (*Gulo*⁻/⁻ ascorbate-depleted; *Mx1-Cre;Tet2*fl/fl conditional KO; *Gulo*⁻/⁻;*Tet2*Δ/Δ compound) + human bone marrow samples · archive status: **locally available** —  (local PDF) · **PDF verified 2026-05-05**

[^ko2013]: doi:10.1038/nature12052 · Ko M, An J, Bandukwala HS et al. · Nature 2013 · "Modulation of TET2 expression and 5-methylcytosine oxidation by the CXXC domain protein IDAX" · characterization of IDAX/CXXC4 as TET2 CpG-targeting binding partner; demonstrated IDAX provides CpG affinity to TET2 at gene promoters · in-vitro + in-vivo · model: mouse + HEK293 cells · archive status: download failed (green OA, PMC-backed, but URL filter blocked both attempts) · **DOI CORRECTED from 10.1016/j.molcel.2013.05.004 (that DOI resolves to an unrelated BMP-Smad signaling paper by Xu et al. 2013) — claims from this footnote not directly verified against source text** #gap/needs-replication

[^svensson2022]: [[studies/svensson-2022-cantos-chip-tet2]] · doi:10.1001/jamacardio.2022.0386 · Svensson EC et al. · pre-specified exploratory genomic substudy within rct (CANTOS) · JAMA Cardiology 2022 · n=3,923 (338 CHIP-positive; TET2-CHIP subgroup: HR=0.38 for MACE, 95% CI 0.15–0.96, P=0.04; P-interaction=0.14 NS) · canakinumab cardiovascular benefit concentrated in TET2-CHIP carriers · model: post-MI humans · canonical home: [[clonal-hematopoiesis]] and [[canakinumab]] · archive status: locally available (PMC) — see canakinumab.md for full quantitative details
