---
type: protein
aliases: [Insulin-like growth factor 1 receptor, IGF-IR, CD221, IGF1R, JTK13]
uniprot: P08069
ncbi-gene: 3480
hgnc: 5465
genage-id: 15
mouse-ortholog: Igf1r
ensembl: ENSG00000140443
druggability-tier: 1  # SM/AB/OC:Approved Drug (Open Targets, IGF1R)
caused-by: []
causes: []
key-domains: [ligand-binding-extracellular, furin-cleavage, transmembrane, kinase]
key-ptms: [Tyr1161-autophospho, Tyr1165-autophospho, Tyr1166-autophospho, Tyr980-phos-IRS-docking]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[irs1]]", "[[irs2]]", "[[pi3k]]", "[[grb2]]", "[[shc1]]", "[[igf-1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Ullrich 1986 (primary structure/cloning), Holzenberger 2003 (lifespan), Willcox 2008 (FOXO3A association), and Suh 2008 (IGF1R variants in centenarians) verified against local PDFs. Liu 1993 not_oa — perinatal lethality claim retained as field-standard but tagged #gap/no-fulltext-access. Canonical-database identity fields (UniProt accession, NCBI Gene, HGNC, Ensembl) not independently re-verified against live databases — recommend cross-check on next lint pass. Activation-loop Tyr residue numbers (Tyr1161/1165/1166) are the standard UniProt/biochemical literature assignments; Ullrich 1986 identifies the kinase domain region but does not enumerate individual activation-loop phosphotyrosines by position — citation corrected."
---

# IGF1R (Insulin-like Growth Factor 1 Receptor)

IGF1R is the **canonical longevity-determining receptor** of the insulin/IGF-1 signaling (IIS) pathway. Heterozygous loss-of-function extends mammalian lifespan — +33% in female 129/Sv mice [^holzenberger2003] — and loss-of-function alleles are enriched in human centenarians from at least two independent cohorts [^willcox2008][^suh2008]. It is a receptor tyrosine kinase (RTK) that transduces extracellular IGF-1 and IGF-2 signals into the intracellular PI3K–AKT and MAPK/ERK cascades, ultimately controlling cell survival, growth, and the FOXO longevity program.

## Identity

| Field | Value |
|---|---|
| UniProt | P08069 (IGF1R_HUMAN) |
| NCBI Gene | 3480 |
| HGNC | 5465 |
| Ensembl | ENSG00000140443 |
| GenAge ID | HAGRID 15 |
| Mouse ortholog | *Igf1r* (one-to-one) |
| Chromosomal location | 15q26.3 |
| Precursor length | 1,367 amino acids |

## Structure and domain organization

IGF1R is synthesized as a **single-chain 1,367 aa precursor** that is co-translationally glycosylated and then cleaved by a furin-like protease in the Golgi [^ullrich1986]. The mature receptor is an **α₂β₂ disulfide-linked heterotetramer** displayed at the plasma membrane.

### Chain processing (UniProt numbering, precursor)

| Fragment | Residues | Notes |
|---|---|---|
| Signal peptide | 1–30 | Cleaved co-translationally |
| Alpha chain | 31–736 | Extracellular; ligand-binding |
| Furin-linker | 737–740 | 4-residue connector; removed |
| Beta chain | 741–1,367 | Contains transmembrane + kinase |

Two alpha and two beta chains assemble into the α₂β₂ disulfide-bonded tetramer via inter-subunit disulfide bonds (Cys-rich region of alpha chain).

### Domain architecture

- **Signal peptide** (1–30): Directs ER co-translational insertion.
- **L1 / CR / L2 extracellular domain** (alpha chain, 31–736): L-domain repeats flanking a cysteine-rich region constitute the high-affinity ligand-binding site for IGF-1.
- **Fibronectin type III repeats** (three; located in alpha chain and the extracellular segment of the beta chain): Structural scaffold.
- **Transmembrane helix** (beta chain, ~936–959): Single-pass type I topology.
- **Juxtamembrane region** (beta chain, ~960–1000): Contains Tyr980, whose phosphorylation is required for IRS-1 and SHC1 recruitment.
- **Kinase domain** (beta chain, ~1,003–1,259): The catalytic core. Activation requires phosphorylation of three tyrosines in the activation loop. Ullrich 1986 identifies tyrosine kinase features between proreceptor residues 973–1,229 (= precursor residues ~1,003–1,259); the ATP-binding Lys is at proreceptor position 1,003 (precursor Lys1,033).
- **C-terminal tail** (1,275–1,367): Contains regulatory ubiquitination sites (Lys1168, Lys1171) controlling receptor internalization.

### Activation-loop phosphorylation

Sequential autophosphorylation of **Tyr1165, Tyr1161, and Tyr1166** (precursor numbering; equivalent to Tyr1135, Tyr1131, Tyr1136 in the conventional mature-beta-chain offset used in much of the biochemical literature) is required for full kinase activation. Tyr1165 is phosphorylated first; Tyr1161 and Tyr1166 follow. These three tyrosines in the activation loop are the most-used pharmacological readout of receptor activation status in cell-based assays.

> Note on sourcing: Ullrich 1986 [^ullrich1986] defines the primary structure of IGF1R and identifies the kinase domain region (proreceptor residues 973–1229, equivalent to precursor residues ~1003–1259) and ATP-binding motif (Lys1003 in proreceptor = Lys1033 in precursor), but does not enumerate the individual activation-loop phosphotyrosines by position. The Tyr1161/1165/1166 assignments are the standard UniProt/biochemical literature consensus; the sequential phosphorylation order is from subsequent kinetic studies. #gap/needs-replication (activation-loop phosphorylation order in intact cells vs. isolated kinase)

## Ligand specificity and INSR comparison

| Receptor | Primary ligand | Affinity for insulin | Kinase-domain identity to IGF1R |
|---|---|---|---|
| IGF1R | IGF-1 (high), IGF-2 (moderate) | Very low (~100-fold lower than INSR) | — |
| INSR | Insulin (high), IGF-2 (moderate) | — | ~84% (in kinase domain) |

Because of the very high kinase-domain similarity (~84%), INSR and IGF1R can form **hybrid receptors** (one INSR alpha/beta hemireceptor linked to one IGF1R alpha/beta hemireceptor) in tissues co-expressing both receptors (notably skeletal muscle, fat, and heart). Hybrid receptors bind IGF-1 with higher affinity than INSR homodimers, complicating pharmacological targeting of either receptor in isolation. #gap/needs-replication (hybrid receptor biology in vivo)

## Downstream signaling

Ligand binding induces trans-autophosphorylation, activating the kinase toward exogenous substrates:

1. **IRS-1/-2 docking** (via Tyr980 phosphorylation in juxtamembrane region) → IRS acts as scaffold for PI3K p85 SH2-domain binding → PI3K activation → PIP3 generation → AKT recruitment and activation → downstream FOXO inhibition and mTORC1 activation. See [[pi3k-akt-pathway]] and [[insulin-igf1]] for full cascade.

2. **SHC1 and GRB2–SOS docking** → RAS → RAF → MEK → ERK (MAPK pathway) → proliferation, differentiation. This arm is less directly longevity-relevant than the PI3K–AKT–FOXO arm, but contributes to anti-apoptotic signaling.

3. **Negative feedback**: mTORC1-activated S6K1 phosphorylates IRS-1 on serine residues (Ser307/Ser312 in humans), blocking IRS-1/PI3K coupling — the molecular basis for IGF-1 resistance under chronically anabolic conditions. See [[s6k1]].

## Role in development: null lethality

Homozygous *Igf1r*-null mice die at birth from respiratory failure due to severe growth retardation (~45% of normal birth weight) [^liu1993]. This establishes that the receptor is essential for normal prenatal growth but is dispensable for early embryogenesis per se (unlike *Igf1*-null mice, which also die at birth but are larger than *Igf1r*-null). The lethality has precluded pharmacological complete-inhibition strategies for longevity in vivo.

## Role in aging: the haploinsufficiency longevity result

The pivotal mammalian IIS-longevity paper is Holzenberger et al. 2003 (Nature) [^holzenberger2003]. Heterozygous *Igf1r*+/- mice on a 129/Sv background survived significantly longer than wild-type littermates:

| Group | Lifespan extension | Significance |
|---|---|---|
| Females (*Igf1r*+/-) | +33% (756±46 vs 568±49 days) | P<0.001 (t-test); P<0.001 (Cox) |
| Males (*Igf1r*+/-) | +15.9% (679±80 vs 585±69 days) | NS |
| Both sexes combined | +26% | P<0.02 (Cox) |

Key features of the result:
- **Haploinsufficiency only** — a 50% reduction in receptor levels is sufficient. This is notable because it suggests signaling flux, not complete pathway silencing, is the key variable.
- **Sex dimorphism** — females extend lifespan significantly; males do not reach significance. The mechanism is unexplained. #gap/no-mechanism — sex-specific IIS longevity biology may involve interaction with sex steroids or sex-specific IGF-1 axis set-points.
- **Metabolic phenotype** — *Igf1r*+/- mice show improved resistance to oxidative stress, not reduced body weight or altered glucose tolerance, suggesting the longevity effect is not mediated by caloric restriction or systemic metabolic re-programming.
- **Strain caveat** — 129/Sv background. A subsequent study on a C57BL/6 congenic background found a smaller effect (~11% in females; males NS). See GenAge HAGRID 15. The magnitude is strain-dependent. #gap/needs-replication

**Extrapolation assessment:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IGF1R, IRS1/2, PI3K, AKT, FOXO all human-orthologous |
| Phenotype (longevity via IGF1R reduction) conserved? | partial — centenarian cohort associations in humans, but no prospective evidence |
| Replicated in humans? | no (intervention) / yes (centenarian association, two independent cohorts) |

## Human centenarian evidence

### Willcox 2008 — FOXO3A / IIS in Japanese-American men

Willcox et al. 2008 (PNAS) [^willcox2008] performed a nested case-control study within the Honolulu Heart Program / HAAS cohort — a **male-only** cohort of Japanese-American men (n=615 total: 213 men who survived to age ≥95 y vs 402 controls who died up to age 81 y, mean death age ~78.5 y). The primary finding was association of *FOXO3A* rs2802292 with longevity in **men only** (GG vs TT: OR=2.75, 95% CI 1.51–5.02, P=0.0007). As the FOXO3 locus reports pathway-output status rather than IGF1R per se, this study does not directly implicate IGF1R variants. However, the result is mechanistically interpreted as reflecting reduced IIS–AKT–FOXO3 flux in long-lived individuals, of which IGF1R is the receptor-tier node.

> Note on cross-reference: This study is fully cited on [[pi3k-akt-pathway]] and [[insulin-igf1]]; the canonical home of the Willcox 2008 data is [[pi3k-akt-pathway]] (verified-partial). Quoted here for IIS-receptor-tier context only.

### Suh 2008 — functional IGF1R variants in Ashkenazi female centenarians

Suh et al. 2008 (PNAS) [^suh2008] comprehensively screened the *IGF1R* coding sequence in the entire cohort of **384 centenarians (286 female + 98 male; mean age 97.7 y) and 312 age-matched controls**, all Ashkenazi Jewish. The key variant screen was first performed on 79 female centenarians (selected for heights below the population mean, as a proxy for potential IGF-axis alteration) and 161 female controls. The full-cohort results for the two functionally significant nonsynonymous variants were:

| Variant | Full-cohort centenarians (n=384) | Full-cohort controls (n=312) | Notes |
|---|---|---|---|
| Ala-37-Thr (244G>A) | 2 het carriers (0.52%) | 0 | Alpha-chain L1 domain |
| Arg-407-His (1355G>A) | 7 het carriers (1.82%) | 1 het carrier (0.32%) | Alpha-chain L2 domain |
| Combined rare functional variants | 9 carriers (2.3%) | 1 carrier (0.3%) | P=0.02 |

> Note: The per-variant frequencies in the pilot screen of n=79 female centenarians were 1/79 (~1.3%) for each variant, with 0/161 controls carrying either. The full-cohort numbers above are the primary reported results.

Functional follow-up in immortalized lymphocytes from variant carriers (n=6 female centenarian carriers) showed **reduced IGFR levels** and **reduced IGF-I-stimulated AKT phosphorylation** compared to 10 noncarrier centenarian lymphocyte controls, confirming partial loss-of-function. Crucially, despite reduced receptor activity, centenarian mutation carriers showed **elevated circulating IGF-1 levels** (165±21 vs 121±6 ng/mL in noncarriers, P=0.04) — a pattern consistent with compensatory IGF-1 up-regulation in response to reduced receptor signaling. This inverted IGF-1 level is an important caveat when using circulating IGF-1 as a biomarker: elevated IGF-1 in centenarians does not imply high signaling flux when the receptor is partially inactive.

#gap/needs-replication — Only 9 centenarian carriers identified in the full cohort of 384; replication in a larger Ashkenazi or European centenarian cohort has not been reported as of 2026-05-04. Combined result P=0.02 with a small number of carriers warrants independent replication.

## IGF1R vs INSR in aging context

Both receptors are IIS entry points, but their aging-relevant biology differs:

| Feature | IGF1R | INSR |
|---|---|---|
| Primary longevity relevance | Yes — haploinsufficiency extends lifespan in mice; LOF alleles in centenarians | Indirect — insulin sensitivity/metabolic disease; FIRKO mice modestly long-lived |
| Tissue distribution | Ubiquitous; high in muscle, brain, liver, bone | High in insulin-sensitive tissues (liver, fat, muscle) |
| Cancer relevance | Pro-tumorigenic; IGF1R overexpressed in many cancers | Less directly oncogenic |
| Hybrid receptor formation | Yes (with INSR); complicates in-vivo pharmacology | Yes (with IGF1R) |
| Longevity via complete KO | Perinatal lethal [^liu1993] | Embryonic lethal |
| Longevity via heterozygous KO | +26% (129/Sv combined); +33% females [^holzenberger2003] | FIRKO: ~18% (fat-restricted KO) — different model |

## Laron syndrome: a natural experiment in human IGF1R pathway reduction

**Laron syndrome** results from loss-of-function mutations in the **growth hormone receptor (GHR)**, not IGF1R itself. However, because GHR signaling is required for hepatic IGF-1 production, GHR-null individuals have very low circulating IGF-1 — phenocopying IGF1R haploinsufficiency in terms of pathway output.

Laron syndrome patients (>300 individuals studied in Ecuador and elsewhere) show:
- Short stature and obesity
- Apparent resistance to cancer and diabetes compared to unaffected relatives
- No reduction in cardiovascular disease

This is a natural human experiment supporting the hypothesis that low IGF-1 signaling protects against specific age-related diseases, though it does not demonstrate longevity per se. #gap/needs-replication — lifespan data in Laron syndrome cohorts is limited by cohort size and access to mortality records.

> Note: Laron syndrome is a GHR-mutation phenotype, not an IGF1R phenotype. The canonical page for Laron syndrome biology would be [[growth-hormone-receptor]] (implicit stub).

## Pharmacological targeting

### Anti-cancer IGF1R inhibitors (failed in oncology)

Several monoclonal antibodies (figitumumab/CP-751,871, ganitumab/AMG-479, cixutumumab/IMC-A12) and small-molecule IGF1R kinase inhibitors (linsitinib/OSI-906) were developed as anti-cancer agents. Phase III trials largely failed:

- **Figitumumab** (Phase III in non-small cell lung cancer): trial stopped for futility / toxicity. Key on-target toxicity: hyperglycemia (from inhibiting INSR as well as IGF1R at therapeutic doses, given kinase-domain similarity) and thrombocytopenia.
- **Linsitinib** (dual IGF1R/INSR inhibitor): showed activity in Ewing sarcoma but missed endpoints in unselected patient populations.

**Implications for aging:** Complete IGF1R inhibition is too toxic for aging applications. Partial haploinsufficiency (as in mice) or tissue-specific reduction may be the relevant biological dose, but no pharmacological tool achieves this selectively in humans. #gap/dose-response-unclear

### No approved longevity-directed IGF1R drug

As of 2026-05-04, there is no compound in clinical trials with IGF1R reduction as a primary aging or longevity endpoint. The indirect approach — reducing upstream growth hormone (e.g., octreotide for GH suppression) — is being explored in aging contexts but not with IGF1R-specific molecular endpoints.

## Pathway membership and cross-references

- [[insulin-igf1]] — IGF1R is the receptor-tier node; page carries the IIS-longevity narrative in full
- [[pi3k-akt-pathway]] — IGF1R is the upstream RTK activating PI3K–AKT
- [[mtor]] — indirect (via AKT → TSC1/TSC2 → mTORC1 activation)
- [[deregulated-nutrient-sensing]] — parent Hallmark of Aging
- [[irs1]] / [[irs2]] — immediate cytoplasmic substrates; adapter scaffold (implicit stubs)
- [[foxo3]] — key downstream longevity effector (implicit stub)
- [[insr]] — paralog; hybrid receptor formation (implicit stub)

## Limitations and gaps

- #gap/needs-human-replication — all direct lifespan data is from mouse models; human evidence is centenarian cohort associations only.
- #gap/needs-replication — Suh 2008 identified only 9 centenarian IGF1R variant carriers out of 384; the functional variants are rare (combined 2.3% vs 0.3% controls, P=0.02) and require independent replication. Holzenberger 2003 C57BL/6 congenic result attenuated (~11%); no independent replication in a second mammalian species.
- #gap/no-mechanism — sex dimorphism in *Igf1r*+/- mice (females significant, males NS) unexplained.
- #gap/dose-response-unclear — optimal degree of IGF1R signaling reduction for longevity in humans is unknown; too much (cancer drugs) is toxic.
- #gap/contradictory-evidence — circulating IGF-1 levels and longevity in humans show a complex, possibly non-monotonic relationship; centenarian IGF1R variant carriers in Suh 2008 had elevated IGF-1 (165±21 vs 121±6 ng/mL, P=0.04) despite reduced receptor signaling — elevated because of compensatory up-regulation, not because signaling is high. This makes circulating IGF-1 alone an unreliable biomarker for IIS pathway activity in centenarians.
- Liu 1993 (IGF1R null lethal, Cell) is not_oa; the claim of perinatal lethality is well-established in the field and corroborated by multiple downstream studies, but the primary source PDF cannot be verified. #gap/no-fulltext-access

## Footnotes

[^ullrich1986]: doi:10.1002/j.1460-2075.1986.tb04528.x · [[studies/ullrich-1986-igf1r-cloning]] · in-vitro · n=n/a · cDNA cloning and complete primary structure of human IGF-1 receptor; 1,367 aa precursor; 30 aa signal peptide; α chain (proreceptor Glu-1 to ~Arg-706); β chain begins at Asp-711; kinase domain proreceptor residues 973–1,229 (precursor ~1,003–1,259); ~84% kinase-domain identity with INSR; chromosome 15q · EMBO J 1986 · archive: downloaded (bronze OA via PMC)

[^liu1993]: doi:10.1016/s0092-8674(05)80084-4 · [[studies/liu-1993-igf1r-igf1-null-mice]] · in-vivo · genetic model · model: Mus musculus (Igf1r-/- null) · Liu JP, Baker J, Perkins AS, Robertson EJ, Efstratiadis A · Cell 1993 · 2,866 citations · *Igf1r*-null mice die at birth; ~45% normal birth weight; respiratory failure · archive: not_oa #gap/no-fulltext-access

[^holzenberger2003]: doi:10.1038/nature01298 · [[studies/holzenberger-2002-igf1r-lifespan]] · in-vivo · genetic model · model: Mus musculus (129/Sv background, *Igf1r*+/-) · Holzenberger M et al. · Nature 2003 (published online Dec 2002, print Jan 2003) · +26% mean lifespan overall (P<0.02, Cox); +33% females (756±46 vs 568±49 days, P<0.001); +15.9% males (679±80 vs 585±69 days, NS) · archive: downloaded (local PDF)

[^willcox2008]: doi:10.1073/pnas.0801030105 · [[studies/willcox-2008-foxo3-longevity]] · nested case-control · n=615 **men** (213 cases ≥95y; 402 controls died ≤81y, mean death age ~78.5y; Honolulu Heart Program / HAAS) · model: Homo sapiens (Japanese-American men only) · FOXO3A rs2802292 GG vs TT OR=2.75 (95% CI 1.51–5.02, P=0.0007) · PNAS 2008 · archive: downloaded (local PDF)

[^suh2008]: doi:10.1073/pnas.0705467105 · [[studies/suh-2008-igf1r-centenarian-variants]] · case-control · n=384 centenarians (286 female + 98 male; mean age 97.7 y) + 312 controls · model: Homo sapiens (Ashkenazi Jewish) · IGF1R Ala-37-Thr and Arg-407-His variants combined: 9/384 centenarians (2.3%) vs 1/312 controls (0.3%), P=0.02; reduced IGFR levels + reduced AKT phosphorylation in variant carriers; elevated circulating IGF-1 in carriers (165±21 vs 121±6 ng/mL, P=0.04) · PNAS 2008 · archive: downloaded (local PDF)
