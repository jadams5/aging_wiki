---
type: protein
aliases: [FOXO3A, FKHRL1, AF6q21, forkhead box O3]
uniprot: O43524
ncbi-gene: 2309
hgnc: 3821
genage-id: 123
mouse-ortholog: Foxo3
ensembl: ENSG00000118689
druggability-tier: 3  # SM:Structure with Ligand only (Open Targets, FOXO3)
caused-by: []
causes: []
key-domains: [forkhead-DNA-binding, nuclear-localization-signal, nuclear-export-sequence, transactivation, AKT-phospho-sites]
key-ptms: [Thr32-phospho-AKT, Ser253-phospho-AKT, Ser315-phospho-AKT, Ser209-phospho-MST1, Ser30-phospho-AMPK, Lys-acetyl-SIRT1]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]", "[[autophagy]]", "[[ampk]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[cellular-senescence]]"]
sens-categories: []
known-interactors: ["[[akt]]", "[[14-3-3]]", "[[sirt1]]", "[[mst1]]", "[[ampk]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Brunet 1999, Willcox 2008, Kops 2002, Dijkers 2000, Mammucari 2007, Hosaka 2004 verified against local PDFs. Castrillon 2003 not_oa (closed access) — kept unverified with gap tag. Anderson 1998 cloning DOI unresolvable — flagged. Canonical-database identity fields (UniProt O43524, NCBI Gene 2309, GenAge 123) not independently re-verified against databases."
---


# FOXO3 (Forkhead Box O3)

FOXO3 is a Forkhead family transcription factor and the **most-replicated longevity-associated gene in human GWAS** — its G allele at rs2802292 has been independently confirmed in Japanese-American, Ashkenazi Jewish, German, Italian, and Chinese cohorts. As the primary nuclear effector downstream of the [[insulin-igf1]] / [[pi3k-akt-pathway]] axis, FOXO3 integrates nutrient and growth-factor signals to regulate apoptosis, stress resistance, autophagy, and cell-cycle arrest. When [[akt|AKT]] is active (fed, growth-factor-replete state), FOXO3 is phosphorylated and sequestered in the cytoplasm; when AKT is suppressed (fasting, stress), FOXO3 enters the nucleus and drives a broad pro-longevity transcriptional program.

## Identity

- **UniProt:** O43524 (FOXO3_HUMAN) — reviewed Swiss-Prot entry
- **NCBI Gene:** 2309
- **HGNC symbol:** FOXO3 (formerly FOXO3A in older literature; FKHRL1 in earliest nomenclature)
- **Ensembl:** ENSG00000118689
- **Mouse ortholog:** Foxo3 (one-to-one ortholog; highly conserved forkhead domain)
- **C. elegans ortholog:** [[daf-16]] (the founding member of the FOXO longevity-regulatory axis)
- **Length:** 673 amino acids (canonical isoform)
- **GenAge human entry:** 123 (rs2802292 G allele associated with longevity, multiple populations)
- **Chromosomal location:** 6q21; involved in t(6;11)(q21;q23) translocation fusing FOXO3 to KMT2A/MLL1 in secondary acute leukemia

**Nomenclature note:** The gene was formerly designated FOXO3A in the dbSNP/GWAS literature (e.g., rs2802292 is often described as a "FOXO3A SNP"). Current HGNC-approved symbol is FOXO3. Both names appear in cited literature; this page uses FOXO3 throughout with FOXO3A in aliases.

## FOXO family in mammals

Four mammalian paralogs, all regulated by AKT:

| Paralog | Old name | Primary tissue expression | Aging relevance |
|---|---|---|---|
| FOXO1 | FKHR | Ubiquitous; high in adipose, liver | Metabolic regulation; no strong longevity GWAS signal |
| **FOXO3** | FKHRL1 | Ubiquitous; highest in brain, heart | **Strongest human longevity GWAS; canonical longevity TF** |
| FOXO4 | AFX | Ubiquitous | Senescent cell survival; FOXO4-p53 interaction targeted by senolytic peptides |
| FOXO6 | — | Brain-restricted | Memory; minimal aging literature |

FOXO1/3/4 share conserved AKT phosphorylation sites and DNA-binding specificity; FOXO6 lacks a nuclear export sequence and is constitutively nuclear.

## Domain organization

```
N-terminus ←————————————————————————————→ C-terminus
  Thr32    [~aa 1–156]  [FH DBD 157–251]  [NLS 242–259]  [NES]  [TAD]  Ser315
  |                           |                                           |
  AKT site               FHRE binding                               AKT site
  (14-3-3)             (TTGTTTAC)                               (cytoplasmic export)
  
  Ser253 (central AKT site) falls within the forkhead domain C-terminal lobe
```

Key structural elements:

- **AKT phosphorylation sites (Thr32, Ser253, Ser315):** Three conserved sites phosphorylated by AKT1/2/3; Thr32 and Ser253 create 14-3-3 docking surfaces; Ser315 promotes nuclear export
- **Forkhead DNA-binding domain (aa 157–251):** Winged-helix structure; recognizes the canonical FHRE consensus 5'-[AG]TAAA[TC]A-3' (UniProt lists 5'-[AG]TAAA[TC]A-3')
- **Nuclear localization signal (NLS, aa 242–259):** Overlaps with the DBD C-terminus; 14-3-3 binding masks the NLS
- **Nuclear export sequence (NES):** CRM1-dependent export; phospho-Ser315 facilitates CRM1 association
- **C-terminal transactivation domain (TAD):** Recruits transcriptional co-activators

## Regulation — post-translational modifications

### AKT phosphorylation (inhibitory)

The canonical inactivation mechanism [^brunet1999]:

1. Growth factors / insulin activate [[pi3k-akt-pathway]] → AKT phosphorylates FOXO3 at **Thr32, Ser253, and Ser315**
2. Phospho-Thr32 and phospho-Ser253 recruit **14-3-3 proteins** → sequester FOXO3 in cytoplasm
3. Phospho-Ser315 drives CRM1-dependent nuclear export
4. Net result: FOXO3 transcriptionally inactive; pro-survival gene expression dominates

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (FOXO3 cytoplasmic in fed state) conserved? | yes |
| Replicated in humans? | yes (pharmacological + genetic evidence) |

### SIRT1 deacetylation (activating)

Under caloric restriction and nutrient stress, [[sirt1]] deacetylates FOXO3 at multiple lysine residues. SIRT1-mediated deacetylation potentiates FOXO3 transcriptional activity, particularly toward stress-resistance (MnSOD, catalase) and cell-cycle arrest targets, while attenuating pro-apoptotic outputs. This provides a mechanistic link between [[caloric-restriction]], SIRT1 activation, and FOXO3-driven longevity signaling. #gap/needs-replication (precise lysine sites and functional outcome hierarchy not fully resolved in primary literature)

### MST1 phosphorylation (activating, stress-response)

STK4/MST1 (a Hippo pathway kinase) phosphorylates FOXO3 at **Ser209** in response to oxidative stress, promoting nuclear translocation independently of AKT dephosphorylation. This provides an AKT-bypass route to FOXO3 activation under oxidative conditions. CDK1/2 also phosphorylate FOXO3 inhibitorily (during S and G2/M phases). #gap/unsourced (MST1-FOXO3 Ser209 phosphorylation — citation needed; Lehtinen et al. 2006 Nature likely source; not in Kops 2002)

### AMPK phosphorylation (activating)

[[ampk]] phosphorylates FOXO3 at **Ser30** (and additional sites in FOXO1), directly activating FOXO3 transcriptional activity under energy-deplete conditions. This positions FOXO3 as an output node where both the energy-sensing arm ([[ampk]]) and the growth-factor arm ([[pi3k-akt-pathway]]) converge. #gap/unsourced (the specific downstream target gene hierarchy activated by AMPK-pFOXO3 vs AKT-released FOXO3 is not well characterized)

### IKKβ phosphorylation (inhibitory)

IKBKB/IKKβ (NF-κB pathway kinase) phosphorylates FOXO3 at Ser644, promoting cytoplasmic sequestration. This creates a feedback loop: inflammatory signals (which activate IKKβ) suppress FOXO3, consistent with the pro-inflammatory / pro-aging role of NF-κB signaling. #gap/needs-replication

## Transcriptional targets

FOXO3 drives a broad pro-longevity gene expression program when active. Key targets:

### Apoptosis

| Gene | Product | Outcome |
|---|---|---|
| [[bim]] (BCL2L11) | BIM pro-apoptotic BH3-only protein | Apoptosis induction [^dijkers2000] |
| PUMA (BBC3) | PUMA pro-apoptotic BH3-only protein | Apoptosis induction |
| FasL (FASLG) | Fas ligand | Death receptor pathway activation |
| TRAIL (TNFSF10) | TRAIL death ligand | Extrinsic apoptosis |

FOXO3-driven apoptosis is context-dependent — it is most important in hematopoietic cells under cytokine withdrawal and in oncogenically transformed cells. In normal quiescent cells, FOXO3 predominantly activates stress-resistance rather than apoptosis programs [^kops2002].

### Cell-cycle arrest

| Gene | Product | Outcome |
|---|---|---|
| CDKN1B (p27/Kip1) | CDK inhibitor | G1 arrest |
| CDKN1A (p21) | CDK inhibitor | G1/S arrest (FOXO3 also a p21 transcription target cooperatively with p53) |
| Cyclin G2 | Inhibitory cyclin | G1/S checkpoint |
| RBL2 (p130) | RB-related pocket protein | E2F repression |

### Oxidative stress resistance

| Gene | Product | Outcome |
|---|---|---|
| [[sod2|SOD2 (MnSOD)]] | Mitochondrial superoxide dismutase | ROS detoxification [^kops2002] |
| CAT (catalase) | H2O2 detoxification enzyme | ROS detoxification |
| SESN3 | Sestrin-3 | mTOR inhibition + antioxidant |

Kops et al. 2002 showed that FOXO3-deficient cells accumulate elevated ROS and are hypersensitive to oxidative stress, establishing FOXO3 as a direct transcriptional activator of MnSOD/SOD2 (demonstrated by ChIP, luciferase reporter, and northern blot in that paper) [^kops2002]. Catalase as a direct FOXO3 target is supported by other literature but was not directly demonstrated in Kops 2002. #gap/needs-replication (FOXO3-driven catalase transcription needs independent citation)

### Autophagy

| Gene | Product | Outcome |
|---|---|---|
| BECN1 ([[beclin-1]]) | Beclin-1; autophagy initiation | Autophagosome nucleation |
| BNIP3 ([[bnip3]]) | Mitophagy receptor | Mitochondrial clearance |
| ATG12 | ATG12; autophagy conjugation | Autophagosome elongation |
| MAP1LC3B (LC3B) | LC3-II; autophagosome membrane | Autophagosome formation |
| GABARAPL1 | GABARAP-L1 | Autophagosome maturation |

Mammucari et al. 2007 demonstrated in skeletal muscle in vivo that FoxO3 is sufficient and necessary to activate autophagy gene expression; constitutively active FoxO3 induced atrophy and autophagic vacuole formation, while dominant-negative FoxO3 blocked denervation-induced autophagy [^mammucari2007].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (FOXO3→autophagy induction) conserved? | yes |
| Replicated in humans? | in-progress — autophagy upregulation in fasted humans is well-established but direct FOXO3-ChIP evidence in human tissue is limited |

### DNA damage response

| Gene | Product | Outcome |
|---|---|---|
| GADD45A | Growth arrest / DNA damage gene | NER co-factor; G2/M checkpoint |
| GADD45B | GADD45 beta isoform | Similar to GADD45A |

### Muscle proteolysis (atrogenes)

Under prolonged fasting or denervation, FOXO3 transactivates **atrogin-1 (FBXO32/MAFbx)** and **MuRF1 (TRIM63)**, muscle-specific E3 ubiquitin ligases that target sarcomeric proteins for proteasomal degradation. This is the molecular basis of FOXO3's dual role: beneficial (nutrient sensing → autophagy → proteostasis) at physiological activation levels; pathological (atrogene induction → sarcopenia) at sustained high activation [^mammucari2007]. #gap/contradictory-evidence — the dose-response relationship between FOXO3 activation level/duration and the balance of beneficial vs. muscle-wasting outputs is incompletely characterized. See [[sarcopenia]].

## Human longevity genetics

### rs2802292 — the canonical longevity SNP

The strongest human genetic evidence for FOXO3 comes from GWAS and candidate-gene studies of exceptional longevity:

**Willcox 2008 (Japanese-American Honolulu Heart Program cohort):** Homozygous GG genotype at rs2802292 associated with exceptional longevity (OR = 2.75, P = 0.0007) vs TT genotype; heterozygous GT intermediate [^willcox2008]. G allele also associated with reduced all-cause mortality in the combined analysis. #gap/needs-replication only in the sense that effect sizes vary across cohorts; the direction of effect (G allele protective) is replicated.

**Multi-cohort replication:** The rs2802292 G allele association has been independently replicated in:
- Ashkenazi Jewish centenarians (Albert Einstein College of Medicine cohort)
- German long-lived individuals (Kiel cohort)
- Italian nonagenarians/centenarians
- Chinese long-lived individuals (multiple cohorts)

**Mechanistic interpretation:** rs2802292 is an intronic SNP; the G allele is associated with modestly higher FOXO3 expression in some tissues, consistent with a partial gain-of-function. The exact molecular mechanism (altered splicing, transcription factor binding, etc.) has not been fully resolved. #gap/no-mechanism (exact functional effect of rs2802292 G allele on FOXO3 expression/activity)

| Dimension | Status |
|---|---|
| Gene conserved in humans? | yes — it IS a human gene |
| Longevity association replicated in humans? | yes — 5+ independent cohorts |
| Causal mechanism established? | no — GWAS association; functional mechanism of SNP unclear |

## Knockout phenotype in mice

### Foxo3-/- (single KO) — Castrillon 2003

Foxo3-null female mice develop normally but show **premature ovarian failure** due to constitutive activation of primordial ovarian follicles, leading to follicle depletion [^castrillon2003]. Male Foxo3-null mice are fertile. The ovarian phenotype was independently confirmed by Hosaka et al. 2004 [^hosaka2004] (all oocytes degenerated by 12 weeks in Foxo3a-/- females). Adult Foxo3-null mice are also reported to display lymphadenopathy and splenomegaly (myeloid infiltration) [^castrillon2003] — this claim is unverifiable against the full text (closed-access paper). #gap/no-fulltext-access (Castrillon 2003 — lymphadenopathy/splenomegaly claim cannot be confirmed; Hosaka 2004 found no consistent non-ovarian histological abnormalities in Foxo3a-null mice across 30+ tissues)

This phenotype — not a classic aging/lifespan phenotype — highlights that FOXO3's most dosage-sensitive function in mice is follicle quiescence, not longevity per se. The longevity-relevant biology emerges more clearly in compound knockouts and in the context of nutrient-sensing manipulation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (follicle activation via FOXO3 conserved) |
| Phenotype conserved in humans? | partial (premature ovarian insufficiency in humans associated with FOXO3 variants, but rarer and less dramatic) |
| Replicated in humans? | no direct equivalent KO; limited observational data |

#gap/needs-human-replication — the aging/longevity phenotype of Foxo3 deficiency is not directly testable in humans.

### Foxo1/3/4 single KOs — Hosaka 2004

Hosaka et al. 2004 generated individual germline knockouts of Foxo1, Foxo3a, and Foxo4 [^hosaka2004]:

- **Foxo1-/-**: embryonic lethal at E10.5 due to vascular defects (disorganized dorsal aorta, intersomitic vessels, absent yolk sac vasculature)
- **Foxo3a-/- females**: premature ovarian failure (see above) — same paper confirms the Castrillon 2003 ovarian finding; all oocytes degenerated by 12 weeks
- **Foxo4-/-**: grossly normal appearance, no consistent histological abnormalities in any tissue examined

The distinct phenotypes illustrate that FOXO paralogs have largely non-redundant in vivo roles. The paper does NOT describe a triple KO.

> **Attribution note:** The "Foxo1/3/4 triple KO → hemangiomas and thymic lymphomas" phenotype frequently cited in the FOXO literature derives from **Paik et al. 2007** (Cell 128:309–323) and/or **Tothova et al. 2007** (Cell 128:325–339), not from Hosaka 2004. These papers used conditional (Cre-lox) triple deletion strategies. #gap/unsourced — these triple-KO claims require a separate citation to Paik 2007 or Tothova 2007 if added to this page.

## Connection to C. elegans longevity

In [[caenorhabditis-elegans]], the FOXO3 ortholog [[daf-16]] is the primary transcriptional effector of the insulin/IGF-1 signaling (IIS) pathway. Mutations that reduce the worm IIS receptor [[daf-2]] (the insulin/IGF-1 receptor ortholog) extend lifespan by up to **100%** in worms — a lifespan extension that is entirely dependent on DAF-16/FOXO3. This is the most genetically clean demonstration that FOXO ortholog activation drives longevity in a metazoan.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IIS→FOXO axis highly conserved |
| Lifespan extension via FOXO activation replicated in humans? | no — not testable directly; longevity GWAS provides indirect evidence |
| Effect magnitude in mammals? | much smaller — no analogous gain-of-function mammalian lifespan extension published |

#gap/needs-human-replication — the remarkable lifespan extension seen in daf-16-dependent IIS reduction in worms has no equivalent magnitude in any mammalian model. The mechanism is conserved but effect sizes diverge dramatically.

## Aging context — why FOXO3 matters

FOXO3 occupies a uniquely central position in aging biology:

1. **Downstream effector of the most-replicated pro-aging pathway:** [[insulin-igf1]] → [[pi3k-akt-pathway]] → AKT → pFOXO3 (inactive). Reducing IIS activity extends lifespan in worms, flies, and mice — FOXO3/daf-16 activation is either necessary or sufficient for most of this extension.

2. **Multi-hallmark integrator:** Active FOXO3 simultaneously addresses [[deregulated-nutrient-sensing]], [[disabled-macroautophagy]] (autophagy gene induction), and cellular stress resistance (antioxidant genes), positioning it as a master regulator across multiple hallmarks of aging.

3. **Only longevity gene with >5 independent human cohort replications:** The rs2802292 G allele association with exceptional longevity is the most-replicated human longevity genetic finding, distinguishing FOXO3 from most other candidate longevity genes.

4. **Context-dependency limits therapeutic targeting:** The same FOXO3 activation that promotes stress resistance and autophagy at low/moderate levels also drives atrophy (atrogenes) at sustained high levels. A pharmacological FOXO3 activator would need tissue-selectivity or dose-control not currently achievable.

## Pathway membership

- [[insulin-igf1]] — primary upstream suppressor via IGF-1R → IRS → PI3K → AKT → pFOXO3
- [[pi3k-akt-pathway]] — AKT is the proximal FOXO3 kinase (Thr32/Ser253/Ser315)
- [[autophagy]] — FOXO3 transactivates BECN1, BNIP3, ATG12, LC3B, GABARAPL1
- [[ampk]] — AMPK phospho-activates FOXO3 (Ser30) under energy stress
- [[sirtuin]] — SIRT1 deacetylates FOXO3; SIRT3 interacts with FOXO3 in mitochondria
- [[apoptosis]] — FOXO3 transactivates BIM, PUMA, FasL, TRAIL
- [[dna-damage-response]] — FOXO3 transactivates GADD45A/B

## Key interactors

- [[akt]] — primary inhibitory kinase (Thr32/Ser253/Ser315)
- [[14-3-3]] — cytoplasmic retention after AKT phosphorylation
- [[sirt1]] — deacetylates FOXO3; activating; connects FOXO3 to [[caloric-restriction]] signaling
- [[mst1]] — phosphorylates Ser209 under oxidative stress; activating (AKT-bypass)
- [[bim]] — direct transcriptional target; connects FOXO3 to intrinsic apoptosis; verified [^dijkers2000]
- [[beclin-1]] — direct transcriptional target; connects FOXO3 to autophagy initiation

## Limitations and gaps

- #gap/no-mechanism — exact functional consequence of rs2802292 G allele (splicing? expression? chromatin?) is unresolved
- #gap/needs-human-replication — FOXO3 activation sufficient to extend lifespan demonstrated only in invertebrates; mammalian data is suggestive (KO phenotypes, GWAS) but not mechanistically complete
- #gap/dose-response-unclear — the FOXO3 activation threshold that tips from beneficial (autophagy, stress resistance) to harmful (atrogene-driven muscle wasting) is not quantified
- #gap/contradictory-evidence — FOXO4-p53 axis in senescent cells (Baar et al. 2017 FOXO4 interfering peptide as senolytic) highlights that different FOXO paralogs can have opposing roles in specific aging contexts; FOXO3/FOXO4 interaction in senescence is incompletely characterized
- #gap/unsourced — the precise tissue hierarchy of FOXO3 expression changes with human aging (age-related reduction vs. increase vs. tissue-specific) needs citation from Aging Atlas / GTEx data
- #gap/long-term-unknown — no completed randomized trial of an intervention specifically targeting FOXO3 activation as a longevity endpoint

## Footnotes

[^brunet1999]: doi:10.1016/S0092-8674(00)80595-4 · n=N/A (biochemical/cell study) · in-vitro · model: CCL39 fibroblasts (Chinese hamster lung), 293T cells, cerebellar granule neurons, Jurkat T cells · Cell 1999; **local PDF available** · First demonstration that AKT directly phosphorylates FKHRL1/FOXO3 at Thr32/Ser253/Ser315 in cells; Thr32 and Ser253 create 14-3-3 docking surfaces (S315A mutant retains 14-3-3 binding; T32A/S253A double mutant abolishes it); cytoplasmic sequestration confirmed; primary death gene identified as Fas ligand (FasL)

[^willcox2008]: doi:10.1073/pnas.0801030105 · n=615 total (213 cases survived to ≥95y, mean attained age 97.9y; 402 controls died before age 81, mean attained age 78.5y) · nested case-control · p=0.0007 (GG vs TT at rs2802292; OR=2.75, 95% CI 1.51–5.02); TG vs TT OR=1.91 (95% CI 1.34–2.72, P=0.0003) · model: human (Japanese-American men; Honolulu Heart Program / HAAS cohort, Oahu) · PNAS 2008; **local PDF available** · GG homozygotes associated with exceptional longevity; also verified on [[pi3k-akt-pathway]] page

[^kops2002]: doi:10.1038/nature01036 · n=N/A (cell study) · in-vitro · model: DL23 (inducible FOXO3a human colon carcinoma line), MEFs (Sod2-/- and wild-type), 3T3-L6 cells, 293T cells · Nature 2002; **local PDF available** · FOXO3a-deficient cells accumulate elevated ROS and are hypersensitive to glucose-deprivation-induced apoptosis; FOXO3 directly activates MnSOD/SOD2 transcription via an inverse FOXO-binding element (DBE1) in the SOD2 promoter, confirmed by ChIP; catalase not directly demonstrated in this paper

[^dijkers2000]: doi:10.1016/s0960-9822(00)00728-4 · n=N/A (cell study) · in-vitro · model: IL-3-dependent hematopoietic cells (Ba/F3) · Current Biology 2000; 965 citations; **local PDF available** · FKHR-L1 (FOXO3) transactivates BIM (BCL2L11) promoter; BIM induction is required for FKHRL1-driven apoptosis; also verified on [[bim]] page

[^mammucari2007]: doi:10.1016/j.cmet.2007.11.001 · n=N/A (mouse in vivo) · in-vivo · model: mouse skeletal muscle tibialis anterior (electroporation-based gene delivery); C2C12 cells; MEFs · Cell Metabolism 2007; **local PDF available** · FoxO3 constitutively active form sufficient to induce autophagy vacuole formation and muscle atrophy in vivo; dominant-negative FoxO3 blocks fasting/denervation-induced autophagy; primary direct transcriptional targets confirmed by ChIP and reporter assay: LC3 (MAP1LC3B), Bnip3, Bnip3l, Gabarapl1; Beclin-1 and Atg12 shown induced at 3-day denervation (Supplemental Fig S1, less prominently than LC3/Bnip3); atrogin-1 and MuRF1 controlled by FoxO3 via the ubiquitin-proteasomal pathway (independently of autophagy)

[^castrillon2003]: doi:10.1126/science.1086336 · n=~N/A (Foxo3-/- mouse colony) · in-vivo · model: Foxo3-null mouse (C57BL/6) · Science 2003; 932 citations; not_oa (closed access) · #gap/no-fulltext-access · Foxo3-null females show constitutive primordial follicle activation leading to premature ovarian failure; Foxo3-null mice also develop lymphadenopathy and splenomegaly

[^hosaka2004]: doi:10.1073/pnas.0400093101 · n=N/A (germline single KO mouse colonies) · in-vivo · model: Foxo1-/-, Foxo3a-/-, Foxo4-/- individual germline KO mice (C57BL/6 and 129/Sv backgrounds) · PNAS 2004; **local PDF available** · Foxo1-/- embryonic lethal (E10.5; vascular defects); Foxo3a-/- females show premature ovarian failure (all oocytes degenerated by 12 weeks); Foxo4-/- grossly normal; no triple KO in this paper — the hemangioma/lymphoma triple-KO phenotype is from Paik et al. 2007 (Cell) or Tothova et al. 2007 (Cell)
