---
type: protein
aliases: [LAMP-2, LAMP-2A, LAMP-2B, LAMP-2C, LAMP-2D, "lysosome-associated membrane protein 2", "lysosomal membrane glycoprotein 2", LGP96, CD107b]
uniprot: P13473
ncbi-gene: 3920
hgnc: 6501
ensembl: ENSG00000005893
genage-id: null   # LAMP2 not found in GenAge-human as of 2026-05-05; #gap/needs-canonical-id for GenAge
druggability-tier: 4
caused-by: []
causes: []
key-isoforms: [LAMP-2A, LAMP-2B, LAMP-2C, LAMP-2D]
mouse-ortholog: Lamp2
pathways: ["[[chaperone-mediated-autophagy]]", "[[autophagy]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[disabled-macroautophagy]]"]
known-interactors: ["[[hsc70]]", "[[hsp90]]", "[[cathepsin-l]]", "[[cathepsin-d]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Bandyopadhyay 2008 (MCB) and Zhang & Cuervo 2008 (Nat Med) verified against primary source PDFs. Massey 2006 (PNAS) verified against primary source PDF. Cuervo & Dice 2000 (JBC) verified via Europe PMC abstract + Crossref (local PDF status: failed — hybrid OA but download failed). Cuervo & Dice 1996 (Science) and Cuervo 2004 (Science) not verified — closed access. Nishino 2000 (Nature) not verified — closed access; DOI 10.1038/35022604 confirmed correct via Crossref. Eskelinen 2002 (MBC) not verified — pending. Fujiwara 2013 (Autophagy) not verified — pending. Anguiano 2013 (Nat Chem Biol) not verified — pending. Schneider 2014 (Cell Metab) not verified from PDF — corrupted download in archive (Cell Press media kit stored instead of paper, see a local paper archive BUG-5); DOI 10.1016/j.cmet.2014.06.009 confirmed correct via Crossref/Europe PMC; paper title and authorship confirmed. Bourdenx 2021 (Cell) not verified — pending. Canonical-database identity fields (UniProt P13473, NCBI Gene 3920, HGNC 6501) not independently re-verified against databases."
---

# LAMP2 (Lysosome-Associated Membrane Protein 2)

This page covers all four LAMP2 splice isoforms (LAMP-2A, LAMP-2B, LAMP-2C, LAMP-2D). Per wiki convention (R13), the `[[lamp-2a]]` wikilink resolves to this page via the frontmatter alias `LAMP-2A` rather than a separate isoform page. LAMP-2A specifically is the **obligate receptor for chaperone-mediated autophagy (CMA)** — arguably the single most aging-relevant function of the LAMP2 locus.

**TL;DR:** LAMP2 encodes a heavily glycosylated lysosomal membrane protein whose alternatively spliced C-terminal exons generate four functionally distinct isoforms. LAMP-2A is the rate-limiting CMA receptor; its abundance declines progressively in aged rat liver (22 months vs. young; magnitude stated in body text of Cuervo & Dice 2000, JBC — full PDF not locally available), directly limiting CMA flux and causing accumulation of damaged proteins. Restoring LAMP-2A in aged FVB mice rescues CMA and hepatic proteostasis (Zhang & Cuervo 2008). Loss-of-function mutations cause Danon disease (X-linked cardiomyopathy/myopathy). Mutant α-synuclein blocks CMA at the LAMP-2A translocation step, mechanistically linking CMA failure to Parkinson's disease.

---

## Identity

- **UniProt:** P13473 (LAMP2_HUMAN) — Swiss-Prot (manually curated)
- **NCBI Gene:** 3920
- **HGNC:** 6501 (symbol: LAMP2)
- **Mouse ortholog:** Lamp2
- **Chromosome:** Xq24 (X-linked — critical for Danon disease inheritance pattern)
- **Canonical isoform length:** 410 amino acids (LAMP-2A; signal peptide cleaved to 382 aa mature form)
- **Apparent MW:** ~120 kDa (mature, fully glycosylated); peptide backbone ~45 kDa
- **GenAge entry:** not listed in GenAge-human as of 2026-05-05 #gap/needs-canonical-id

---

## Splice isoforms — alternative C-terminal exons

The LAMP2 gene uses alternative splicing at the 3'-end to produce four isoforms, each with an identical lumenal domain but a distinct transmembrane and cytoplasmic tail encoded by a different terminal exon. This tail difference confers entirely different functions.

| Isoform | Exon | Cytosolic tail | Primary function | Key tissue expression |
|---|---|---|---|---|
| **LAMP-2A** | 9a | KKIKKQKK (type-1 CMA motif) | CMA receptor — obligate for substrate import | Liver, lung, placenta |
| **LAMP-2B** | 9b | Distinct basic sequence | Autophagosome-lysosome fusion | Broad; heart, skeletal muscle |
| **LAMP-2C** | 9c | RNA-binding motif | RNautophagy (selective RNA degradation) | Heart, brain, skeletal muscle |
| **LAMP-2D** | — | Primate-specific | Not yet fully characterized | Primate-specific #gap/unsourced |

The existence of LAMP-2C as an RNA-targeting pathway receptor (termed RNautophagy) was established in Fujiwara et al. 2013 — the cytosolic tail binds RNA directly, independent of CMA machinery [^fujiwara2013]. LAMP-2D is a recently characterized primate-specific isoform; functional data are sparse. #gap/needs-replication

---

## Topology and glycosylation

LAMP2 is a **type I transmembrane glycoprotein** (single-pass; N-terminus lumenal, C-terminus cytosolic):

- **Signal peptide:** residues 1–28 (cleaved co-translationally)
- **First lumenal domain:** residues 29–192 — disulfide-stabilized
- **Hinge/O-glycosylation region:** residues 193–228 — heavily decorated with O-linked glycans, forming a glycan "shield" that protects the lumenal face from lysosomal hydrolases
- **Second lumenal domain:** residues 229–375
- **Transmembrane helix:** residues 376–399 (single pass)
- **Cytosolic tail:** residues 400–410 — short (~12 aa), **isoform-specific** (encoded by alternative terminal exons)

The protein carries approximately 16 N-linked glycosylation sites (some as polylactosaminoglycans) and extensive O-linked glycans in the hinge region. This glycan coat constitutes the bulk of the apparent ~120 kDa molecular weight and protects the protein from degradation in the lysosomal lumen.

---

## CMA mechanism (LAMP-2A isoform)

[[chaperone-mediated-autophagy]] (CMA) is a selective autophagy pathway in which cytosolic proteins bearing a KFERQ-like pentapeptide motif are individually translocated into the lysosomal lumen for degradation. LAMP-2A is the **obligate, rate-limiting receptor** for this process.

### Step-by-step

1. A substrate protein with a KFERQ-like motif is recognized by cytosolic [[hsc70]] (HSPA8) and its cochaperones (HSP40, HSP90, HIP, HOP).
2. The HSC70-substrate complex docks at **LAMP-2A monomers** on the lysosomal limiting membrane [^cuervo1996].
3. LAMP-2A monomers multimerize into a **high-molecular-weight translocation complex** (~700 kDa, characterized by native gel electrophoresis, BNE, gel filtration, and sucrose density gradient centrifugation) [^bandyopadhyay2008]. This assembly is dynamically regulated by lumenal hsp90.
4. The substrate is **unfolded** (a prerequisite for translocation through the narrow channel) and translocated into the lysosomal lumen.
5. **Lumenal HSC70** (lys-hsc70) captures the substrate on the inside, completing import.
6. Lumenal cathepsins ([[cathepsin-l]], [[cathepsin-d]], and others) degrade the substrate.
7. The LAMP-2A complex **disassembles** back to monomers; LAMP-2A is itself degraded at the lysosomal membrane following regulated sequential cleavage — the rate is accelerated when hsp90 is inhibited [^bandyopadhyay2008]. The ~36 h half-life figure is not stated in Bandyopadhyay 2008 and requires a separate primary citation. #gap/unsourced

### Rate-limiting step

LAMP-2A levels, not substrate availability or HSC70 levels, are rate-limiting for CMA flux. Substrate binding to LAMP-2A is the limiting step: levels of LAMP-2A at the lysosomal membrane are tightly controlled and constitute the primary regulatory mechanism for CMA [^massey2006]. Note: the Massey 2006 paper itself demonstrates the consequences of LAMP-2A knockdown (RNAi blockage); the overexpression result (that LAMP-2A overexpression increases CMA) is cited within Massey 2006 as established in prior Cuervo & Dice work (Traffic 2000, Science 1996). The attribution here is consistent with the pathway logic but the direct experimental demonstration of the overexpression effect is from earlier papers [^cuervo1996].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | LAMP-2A and CMA machinery fully conserved; human liver CMA demonstrated |
| Phenotype conserved in humans? | yes | Danon disease (LAMP2 LoF) in humans; CMA substrate accumulation documented |
| Replicated in humans? | partial | CMA decline observed in human aging (fibroblasts, tissue); no randomized intervention trials |

---

## Aging biology

### LAMP-2A decline with age — the core finding

CMA activity declines markedly with age in rodent liver. The mechanistic basis is a selective reduction in **LAMP-2A protein levels** at the lysosomal membrane — not a decline in HSC70 or other pathway components [^cuervo2000].

- **Cuervo & Dice 2000** demonstrated a progressive age-related decrease in LAMP-2A levels at the lysosomal membrane in 22-month rat liver (not 24-month as sometimes cited), with a corresponding decline in both substrate binding and transport into lysosomes, as measured by uptake of radiolabeled substrates. Importantly, this paper also included late-passage human fibroblasts, which showed the same age-related LAMP-2A decline [^cuervo2000]. #gap/needs-human-replication — human data limited to cultured fibroblasts; the quantitative in vivo liver decline has not been directly measured in aged humans.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial (fibroblast data in Cuervo 2000; liver not directly measured in aged humans in vivo) |
| Replicated in humans? | no (quantitative in vivo liver decline rodent only; fibroblast data supports conservation) |

### Restoration of CMA reverses age-related proteostasis decline

**Zhang & Cuervo 2008** — double transgenic mice with liver-specific, doxycycline-inducible LAMP-2A overexpression ("Alb-Tet-off-L2A" model; FVB background, albumin promoter driving Tet-off LAMP-2A). In aged (22–26 month) mice [^zhang2008]:
- CMA flux restored to young-mouse levels (GAPDH uptake comparable to 6-month WT)
- Reduced accumulation of oxidized proteins (carbonyl groups) and protein aggregates (polyubiquitin) in hepatocytes
- Preserved hepatic function as measured by zoxazolamine clearance time (liver function test), alanine aminotransferase levels, and apoptotic cell count
- Reduced hepatic lipid droplet accumulation and improved mitochondrial ultrastructure
- Albumin secretion is not explicitly quantified in the paper — glucose homeostasis is assessed indirectly via organelle morphology, not glucose tolerance testing

This is direct causal evidence that the LAMP-2A decline drives the aging-associated deterioration in hepatic CMA, rather than being a bystander. #gap/needs-human-replication — transgenic mouse model only.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (hepatic proteostasis failure with age) conserved in humans? | partial |
| Replicated in humans? | no |

**Schneider, Suh & Cuervo 2014** — liver-specific CMA knockout mice show accelerated metabolic dysfunction, including lipid accumulation (fatty liver) and impaired glucose/carbohydrate metabolism, even in young animals, reinforcing the protective role of CMA [^schneider2014]. MeSH terms (from PubMed) confirm findings include fatty liver, altered carbohydrate metabolism, and homeostasis disruption in liver-specific CMA-KO mice. Note: the local PDF for this paper is corrupted in the archive (Cell Press media kit downloaded instead — see a local paper archive BUG-5); claims are partially supported by Crossref/Europe PMC metadata. Body-text quantitative details (specific fold-changes in lipid accumulation, enzyme activities) not verified from primary source. #gap/needs-replication

---

## Danon disease

**Danon disease** (OMIM 300257) is an X-linked dominant lysosomal storage disorder caused by loss-of-function mutations in *LAMP2*. Clinical triad:

- **Hypertrophic cardiomyopathy** (HCM) — the dominant cause of death in males; onset in adolescence–early adulthood
- **Skeletal myopathy** — variable severity; proximal > distal weakness
- **Intellectual disability / cognitive impairment** — variable; more common in males

**Genetics:** X-linked dominant — males are severely affected (hemizygous) and typically die of cardiac causes in their 30s without transplantation; female carriers present later (4th–6th decade) due to skewed X-inactivation. Over 60 pathogenic LAMP2 variants described including nonsense, frameshift, splice-site, and missense mutations [^nishino2000].

**Pathology:** The primary cellular lesion is **autophagosome accumulation** — massive vacuolar change in cardiomyocytes and skeletal muscle fibers due to impaired autophagosome-lysosome fusion, a function specifically attributed to LAMP-2B [^eskelinen2002].

**Mouse model:** Lamp2-/- mice (Eskelinen et al. 2002) recapitulate the human phenotype with massive autophagosome accumulation in heart, liver, pancreas, and skeletal muscle. These mice provided the key insight that LAMP-2B is the isoform required for autophagosome-lysosome fusion in cardiomyocytes, and that LAMP-2A / LAMP-2C cannot substitute in this role [^eskelinen2002].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (Danon disease is a human disease) |
| Replicated in humans? | yes (multiple independent LAMP2 LoF families; >60 variants) |

---

## alpha-Synuclein and Parkinson's disease

Wild-type α-synuclein is a **bona fide CMA substrate** — it contains a KFERQ-like motif and is degraded via LAMP-2A-mediated lysosomal import under normal conditions [^cuervo2004].

Pathogenic α-synuclein mutants — particularly **A53T** and **A30P** — bind LAMP-2A and HSC70 with similar affinity to wild-type, but **block the translocation step**. They accumulate at the lysosomal membrane as competitive inhibitors, impairing degradation of both mutant α-synuclein itself and other CMA substrates (GAPDH, IkBα, MEF2D, etc.) [^cuervo2004]. See [[alpha-synuclein]] for the full mechanistic discussion.

This establishes a direct molecular link between Parkinson's disease genetic risk variants and CMA failure at the LAMP-2A level. Additionally:
- **UCH-L1 G93A** (PD-associated) and **DJ-1** mutations also impair CMA via LAMP-2A interactions #gap/unsourced — citations needed for UCH-L1 and DJ-1 specifically
- Dopaminergic neurons accumulate CMA-dependent substrates with age; see [[parkinsons-disease]]
- Tau (the primary Alzheimer's disease protein) is also a CMA substrate — its aggregation-prone forms may similarly impair LAMP-2A function; see [[tau]] and [[alzheimers-disease]]

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (CMA block by mutant α-syn) conserved in humans? | yes (human iPSC-derived neurons show same phenotype) |
| Replicated in humans? | in-progress (CMA restoration as PD therapeutic strategy is under preclinical investigation) |

---

## CMA activators targeting LAMP-2A

Because LAMP-2A levels are rate-limiting, increasing its abundance is the primary pharmacological strategy for CMA activation.

### AR7 — retinoic acid receptor antagonist

Anguiano et al. 2013 performed a screen for small molecules that increase LAMP-2A protein levels and identified **AR7**, a retinoic acid receptor alpha (RARα) antagonist that increases LAMP-2A without altering its mRNA, suggesting post-transcriptional stabilization [^anguiano2013]. In aged retinal pigment epithelium and primary neurons, AR7 restored CMA flux and reduced oxidative stress markers. Preclinical only; no human trials. #gap/needs-human-replication

### Pharmacological CMA enhancement — Bourdenx et al. 2021

Bourdenx et al. 2021 (Cell) reported pharmacological CMA activators that prevent collapse of the neuronal proteome and ameliorate pathology in two Alzheimer's disease mouse models (tau accumulation and α-synuclein overexpression) [^bourdenx2021]. Available locally:  returns pending. The specific compound class and mechanism of LAMP-2A upregulation should be verified against the primary source PDF. #gap/needs-replication #gap/needs-human-replication

---

## Key interactors

- **[[hsc70]]** (HSPA8) — cytosolic chaperone that recognizes KFERQ motifs and delivers substrates to LAMP-2A; also present in lumenal form (lys-hsc70) that pulls substrates into the lysosome
- **[[hsp90]]** (HSPC1) — lumenal hsp90 regulates LAMP-2A complex assembly/disassembly
- **[[cathepsin-l]]** — major lumenal protease for CMA substrate degradation
- **[[cathepsin-d]]** — accessory lumenal protease
- **TMEM175** — lysosomal proton channel; UniProt data indicates LAMP2 acts as a direct inhibitor #gap/unsourced — needs primary citation; this TMEM175 interaction is a newer finding not covered by verified references on this page

---

## Pathway membership

- **[[chaperone-mediated-autophagy]]** — LAMP-2A is the defining molecular component; the pathway cannot function without it
- **[[autophagy]]** — LAMP-2B required for autophagosome-lysosome fusion (macroautophagy); LAMP-2C for RNautophagy

---

## Limitations and gaps

- **LAMP-2A decline mechanism in aging is not fully resolved.** Bandyopadhyay 2008 shows that hsp90 stabilizes LAMP-2A at the lysosomal membrane while it transitions between multimeric forms; loss of hsp90 function accelerates LAMP-2A degradation. Whether age-related changes in lysosomal hsp90 contribute to the LAMP-2A decline, and whether cholesterol-regulated lateral mobility is involved, remains unresolved [^bandyopadhyay2008]. #gap/no-mechanism
- **Human aging data for CMA flux is indirect.** The Cuervo 2000 rat liver finding has not been replicated with direct liver biopsies in aging humans — methodological constraint (ethical access). #gap/needs-human-replication
- **LAMP-2D function is uncharacterized.** Primate-specific; no functional studies identified. #gap/unsourced
- **CMA pharmacological activators have not entered human trials.** AR7 and related compounds remain preclinical. ClinicalTrials.gov: no trials identified for LAMP2A or CMA activation as primary intervention as of 2026-05-05. #gap/long-term-unknown
- **UCH-L1 and DJ-1 interactions with LAMP-2A** are stated in multiple reviews but primary citations for the precise mechanism are not cited on this page. #gap/unsourced
- **Isoform-specific overexpression rescue experiments** — the Zhang 2008 transgenic used a LAMP-2A-specific construct (Lamp2a cDNA downstream of TRE under albumin promoter; FVB background). The construct is LAMP-2A-specific; isoform specificity is confirmed. The model is FVB (not C57BL/6), which should be noted for extrapolation: male FVB mice have a median lifespan of ~19 months and maximum ~30 months. #gap/needs-replication — single-lab transgenic, not yet independently replicated.

---

## Footnotes

[^cuervo1996]: [[studies/cuervo-1996-lamp2a-cma-receptor]] · doi:10.1126/science.273.5274.501 · in-vitro + in-vivo · model: rat liver lysosomes · identified LGP96/LAMP-2A as CMA receptor; archive: not_oa

[^cuervo2000]: [[studies/cuervo-2000-cma-aging-decline]] · doi:10.1074/jbc.M002102200 · in-vivo + in-vitro · model: rat liver (22-mo "old" vs young) + late-passage human fibroblasts · LAMP-2A protein level decline with age; CMA flux decline (both substrate binding and transport); JBC 275:31505–31513; archive: failed (hybrid OA; download failed)

[^massey2006]: [[studies/massey-2006-lamp2a-cma-blockage]] · doi:10.1073/pnas.0507436103 · in-vitro · model: NIH 3T3 mouse fibroblasts (LAMP-2A RNAi knockdown clones) · selective blockage of LAMP-2A expression impairs CMA; compensatory macroautophagy upregulation; CMA-deficient cells more sensitive to oxidative stressors; LAMP-2A is rate-limiting for CMA; PNAS 103:5805–5810; published in PNAS (not JCB as per some secondary sources); archive: locally available (downloaded 2026-05-05)

[^bandyopadhyay2008]: [[studies/bandyopadhyay-2008-lamp2a-complex]] · doi:10.1128/MCB.02070-07 · in-vitro + biochemical · model: rat liver lysosomes (48h-starved) + NIH 3T3, H460, LS cells · LAMP-2A organizes into dynamic protein complexes (~700 kDa translocation complex required for substrate transport); hsc70 disassembles complexes, lumenal hsp90 stabilizes LAMP-2A at lysosomal membrane; MCB 28:5747–5763; archive: locally available

[^zhang2008]: [[studies/zhang-2008-cma-aging-liver]] · doi:10.1038/nm.1851 · in-vivo · model: aged FVB transgenic mice (Alb-Tet-off-L2A), 22–26 mo · CMA restoration in aged liver improves proteostasis and hepatic function; archive: locally available

[^schneider2014]: [[studies/schneider-2014-cma-liver-metabolism]] · doi:10.1016/j.cmet.2014.06.009 · in-vivo · model: liver-specific CMA-KO mice (Schneider JL, Suh Y, Cuervo AM) · CMA loss leads to metabolic dysregulation (fatty liver, impaired carbohydrate metabolism); Cell Metab 20:417–432; archive: corrupted (Cell Press media kit — BUG-5); PDF not readable; claims partially verified via PubMed/Crossref abstract+metadata only

[^nishino2000]: [[studies/nishino-2000-danon-disease]] · doi:10.1038/35022604 · human genetics · model: Danon disease patients (multiple families) · LAMP2 LoF mutations cause X-linked vacuolar cardiomyopathy and myopathy (Danon disease); Nature 406:906–910; DOI confirmed correct via Crossref (note: old seeder had DOI 35022595 which is a different paper — Tanaka 2000 Lamp2-/- mouse study in same Nature issue); archive: not_oa

[^eskelinen2002]: [[studies/eskelinen-2002-lamp2-knockout]] · doi:10.1091/mbc.e02-02-0114 · in-vivo · model: Lamp2-/- mouse (Saftig lab) · autophagosome accumulation in multiple tissues; LAMP-2B required for autophagosome-lysosome fusion; archive: pending

[^cuervo2004]: [[studies/cuervo-2004-alpha-syn-cma]] · doi:10.1126/science.1101738 · in-vitro + in-vivo · model: SH-SY5Y cells + rat primary dopaminergic neurons · A53T/A30P α-syn block CMA at LAMP-2A translocation step; archive: not_oa

[^fujiwara2013]: [[studies/fujiwara-2013-rna-autophagy]] · doi:10.4161/auto.23002 · in-vitro · model: HeLa cells · LAMP-2C cytosolic tail binds RNA; RNautophagy pathway; published in Autophagy (not Mol Biol Cell); archive: pending

[^anguiano2013]: [[studies/anguiano-2013-ar7-cma-activator]] · doi:10.1038/nchembio.1230 · in-vitro + in-vivo · model: aged retina / primary neurons · AR7 increases LAMP-2A via RARα antagonism; restores CMA in aged cells; archive: pending. Note: DOI in some secondary sources listed incorrectly as 10.1038/nchembio.1271 — verified correct DOI via Europe PMC

[^bourdenx2021]: [[studies/bourdenx-2021-cma-neuroproteostasis]] · doi:10.1016/j.cell.2021.03.048 · in-vivo · model: AD mouse models (tau + α-syn) · pharmacological CMA activation preserves neuronal proteostasis; archive: pending
