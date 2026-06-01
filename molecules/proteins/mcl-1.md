---
type: protein
aliases: [MCL1, BCL2L3, "Induced myeloid leukemia cell differentiation protein Mcl-1", "Bcl-2-like protein 3", EAT]
uniprot: Q07820
ncbi-gene: 4170
hgnc: 6943
mouse-ortholog: Mcl1
ensembl: ENSG00000143384
druggability-tier: 1
caused-by: []
causes: []
key-domains: [BH3, BH1, BH2, transmembrane-anchor, PEST-region]
key-ptms: [Ser159-phosphorylation, Thr163-phosphorylation, Ser162-phosphorylation, ubiquitination-K5, ubiquitination-K40, caspase3-cleavage-Asp127, caspase3-cleavage-Asp157]
pathways: ["[[apoptosis-pathway]]", "[[p53-pathway]]"]
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
known-interactors: ["[[bak]]", "[[bax]]", "[[bim]]", "[[puma]]", "[[noxa]]", "[[bad]]"]
sens-categories: ["[[apoptosenes]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "All locally-available primary sources read in full (Kozopas 1993, Opferman 2003, Wang 2013, Zhu 2016, Troiani 2022, Vogler 2025). Kotschy 2016 not_oa — claims from that source remain unverified (#gap/no-fulltext-access noted in footnote). Shahbandi 2020 download failed — claims from that source remain unverified (#gap/no-fulltext-access noted in footnote). UniProt/NCBI/HGNC/Ensembl identity fields not independently re-checked against canonical databases."
---

# MCL-1 (MCL1)

**MCL-1** (Myeloid Cell Leukemia 1; gene *MCL1*) is an anti-apoptotic member of the Bcl-2 family and the **dominant anti-apoptotic regulator of BAK** at the mitochondrial outer membrane. It is distinguished from its Bcl-2 family paralogs (BCL-2, BCL-xL, BCL-w) by a uniquely short protein half-life (often cited as ~20–30 minutes in cycling cells; precise figure is source-dependent and not stated in Vogler 2025 #gap/unsourced) driven by continuous ubiquitin-proteasome degradation through its N-terminal PEST region. This rapid turnover makes MCL-1 the most dynamically tunable apoptosis rheostat in the family — a cellular sensor that couples the apoptosis decision to ongoing survival signaling. *MCL1* is one of the most frequently amplified anti-apoptotic genes in human cancer (TCGA data; #gap/unsourced for precise TCGA rank). MCL-1 inhibitors (S63845, AMG-176, AZD-5991) are under clinical investigation as cancer therapeutics but have encountered cardiotoxicity as a dose-limiting concern — mechanistically explained by a cardiomyocyte-specific requirement for MCL-1 survival signaling.

**Naming note:** No pathway page named `mcl-1` exists. The pathway context for MCL-1 is covered under [[apoptosis-pathway]]. This page uses "MCL-1" per UniProt convention (MCL1_HUMAN, Q07820); the gene symbol is *MCL1*.

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q07820 (MCL1_HUMAN) |
| NCBI Gene | 4170 |
| HGNC | 6943 |
| Ensembl | ENSG00000143384 |
| Chromosomal location | 1q21.2 |
| Protein length | 350 aa (canonical anti-apoptotic isoform) |
| MW | ~37 kDa (37.3 kDa predicted; Kozopas 1993) |
| Mouse ortholog | Mcl1 (one-to-one; function conserved) |
| GenAge entry | not confirmed — check HAGR Build 21 #gap/needs-canonical-id |

---

## Discovery and historical context

*MCL1* was identified in 1993 by Kozopas and colleagues during a screen for genes induced during differentiation of the myeloid leukemia cell line ML-1. The name derives from its expression context: **M**yeloid **C**ell **L**eukemia differentiation. Sequence analysis revealed homology to *BCL2*, immediately placing it in the emerging family of apoptosis regulators [^kozopas1993]. At the time, BCL-2 was the only known anti-apoptotic family member; MCL-1 was the first identified paralog with a distinct N-terminal extension and rapid turnover properties that set it apart.

The short protein half-life — among the shortest documented for any human protein — became appreciated as MCL-1's defining biophysical feature. Unlike BCL-2 and BCL-xL, which are stable proteins accumulating to steady-state levels over hours, MCL-1 is constitutively synthesized and degraded on a short cycle (often cited as ~20–30 minutes in the literature; the specific figure is not stated in Vogler 2025 and should be confirmed against primary pulse-chase studies [^vogler2025] #gap/unsourced). This makes MCL-1 levels acutely sensitive to translational arrest, growth factor withdrawal, or genotoxic stress — any insult that shifts the synthesis:degradation balance will rapidly collapse MCL-1 abundance and lower the apoptotic threshold.

---

## Domain architecture and localization

MCL-1 is a multi-domain Bcl-2 family member with an unusually long N-terminal extension that has no homology to other family members and contains the regulatory PEST region:

| Domain | Residues (approx., UniProt Q07820) | Function |
|---|---|---|
| Unstructured N-terminal extension | 1–170 | Contains PEST-like region (104–175); site of E3-ligase targeting; no known direct apoptosis function — primarily a degradation signal |
| BH3 domain | 209–223 | Present but inaccessible in anti-apoptotic conformation; embedded within folded structure; required for homo- and heterodimerization |
| BH1 domain | 252–272 | Forms part of the hydrophobic binding groove |
| BH2 domain | 304–319 | Completes the binding groove; required for BAK/BAX sequestration |
| Transmembrane helix | 328–348 | C-terminal anchor; targets MCL-1 to the mitochondrial outer membrane (MOM) |

**Key structural distinction from BCL-2/BCL-xL:** The extended N-terminal region is absent from BCL-2 and is much shorter in BCL-xL. This extra N-terminal mass carries the PEST domain and multiple E3-ligase docking motifs, explaining why MCL-1 is so much more rapidly turned over than its paralogs.

**Subcellular localization:** Primarily mitochondrial outer membrane (MOM); also reported at ER and in the nucleus [UniProt Q07820]. The MOM localization is the functionally relevant compartment for apoptosis regulation.

**Alternative isoform:** A shorter alternative splice variant lacking the N-terminal extension and TM domain is reported to localize to the mitochondrial inner membrane and has been suggested to have a pro-apoptotic or pro-metabolic function (distinct from the canonical MOM-anchored isoform). This page covers the canonical anti-apoptotic isoform.

---

## Post-translational modifications and half-life regulation

MCL-1's short half-life (often cited as ~20–30 minutes; precise figure not stated in Vogler 2025 #gap/unsourced) is set by the balance of phosphorylation-driven ubiquitination and active deubiquitination [^vogler2025]:

| PTM | Site | Enzyme | Consequence |
|---|---|---|---|
| Phosphorylation | Thr-163 | ERK1/2 (survival signal) | Stabilizes MCL-1 by reducing MULE-mediated ubiquitination; couples MCL-1 abundance to RAS-ERK growth-factor signaling |
| Phosphorylation | Ser-159 | GSK-3β (pro-apoptotic signal) | Primes MCL-1 for ubiquitination by β-TrCP E3 ligase → proteasomal degradation |
| Phosphorylation | Ser-162 | CDK1 (mitosis) | Promotes APC/C^Cdc20-mediated ubiquitination and degradation during mitosis |
| Ubiquitination | K5, K40, K136, K194, K197 | MULE (HUWE1), β-TrCP, FBW7, APC/C^Cdc20 | Polyubiquitination → 26S proteasome → rapid degradation |
| Deubiquitination | Multiple | USP9X, USP20 | Removes ubiquitin chains → increases MCL-1 stability and anti-apoptotic capacity |
| Caspase-3 cleavage | Asp-127, Asp-157 | Caspase-3 | Generates a C-terminal truncation that acquires pro-apoptotic activity; feedforward amplification during apoptotic execution |

**Regulatory logic:** The competing phosphorylation at Thr-163 (stabilizing; ERK) vs Ser-159 (destabilizing; GSK-3β) means that MCL-1 stability is directly coupled to PI3K-AKT-ERK survival signaling. Withdrawal of growth factor signaling simultaneously withdraws Thr-163 phosphorylation and activates GSK-3β → rapid MCL-1 collapse → lowered BAK threshold → apoptosis. This is why MCL-1 functions as an acute-response rheostat rather than a stable structural guard.

---

## Mechanism of apoptosis inhibition

MCL-1 operates at the MOM to prevent **mitochondrial outer membrane permeabilization (MOMP)** through the same general mechanism as BCL-2 and BCL-xL — sequestration of pro-apoptotic family members via its BH3-binding groove — but with critical selectivity differences:

### BAK is the primary MCL-1 substrate

MCL-1 has **high affinity for BAK** and is the dominant anti-apoptotic regulator holding BAK in check at the MOM [^vogler2025]. In contrast, BCL-xL and BCL-2 have higher relative affinity for BAX. This creates a therapeutic divergence: navitoclax (BCL-2/BCL-xL/BCL-w inhibitor) releases BAX-dependent apoptosis while leaving MCL-1-sequestered BAK intact; MCL-1 inhibitors release BAK directly.

| Effector | Primary anti-apoptotic guard | Secondary guard |
|---|---|---|
| BAK | MCL-1 | BCL-xL |
| BAX | BCL-xL | BCL-2, MCL-1 (lower affinity) |

### BH3-only protein selectivity

MCL-1's binding groove has a distinct selectivity profile from BCL-2/BCL-xL [^vogler2025]:

| BH3-only protein | Affinity for MCL-1 | Notes |
|---|---|---|
| BIM | High | Direct activator; Opferman 2003 FP Kd 74 ± 2 nM (BIM-BH3 peptide vs GST-MCL-1, fluorescence polarization) [^opferman2003]. **Method-dependent value** — Chen 2005 (Mol Cell 17:393) reports BIM IC50 vs MCL-1 = 2.4 nM in competitive binding format. The two assay formats are not directly comparable (FP Kd vs competitive IC50); both readouts place BIM-MCL-1 binding in the high-affinity regime. See [[bim]] for full discussion of the method comparison. |
| NOXA | High (selective for MCL-1) | Sensitizer BH3-only; selective neutralization of MCL-1 + A1 only — Chen 2005 IC50 vs MCL-1 = 24 nM, vs A1 = 180 nM, negligible for BCL-2/BCL-xL/BCL-w. NOXA is the cell's endogenous tool for selectively targeting MCL-1/BAK [^vogler2025]. |
| PUMA | High (5.0 nM) | Pan-binder per Chen 2005 (IC50 vs MCL-1 = 5.0 nM, comparable to its BCL-2/xL/w affinities). Reclassification: PUMA's pan-binding profile is necessary but not sufficient for direct activator status — Chipuk 2010 Fig 1B classifies PUMA as sensitizer/derepressor only. See [[puma]] for the contested classification. |
| BAD | Low | Selectively targets BCL-2/BCL-xL/BCL-w; negligible affinity for MCL-1 — explaining why BAD overexpression does not neutralize MCL-1 |

**NOXA as a selective MCL-1 antagonist:** NOXA (encoded by *PMAIP1*) is a p53 transcriptional target that functions as a selective MCL-1 sensitizer. Its BH3 sequence has a distinct binding mode that allows high-affinity engagement with MCL-1's groove but poor binding to the BCL-2/BCL-xL groove. This selectivity means NOXA induction — in response to p53 activation, genotoxic stress, or proteasome inhibition — specifically disrupts MCL-1-held BAK without displacing BCL-xL-sequestered BAX [^vogler2025]. NOXA is thus the cell's endogenous tool for selectively targeting the MCL-1/BAK axis.

---

## Role in aging: SCAP function in senescent cells

### MCL-1 as a BAK-specific SCAP node

Senescent cells resist apoptosis via upregulation of anti-apoptotic Bcl-2 family members — the **Senescent Cell Anti-Apoptotic Pathways (SCAPs)**. The [[bak]] page establishes MCL-1 as the dominant anti-apoptotic regulator of BAK in senescent cells, based on pharmacological dissection of SCAP architecture. MCL-1 inhibitors (S63845) can trigger senolytic apoptosis in cell types where BAK is the dominant MOMP effector.

Single-cell transcriptomics provided direct evidence of MCL-1's senolytic relevance. Troiani et al. 2022 (*Nature Communications*) used scRNA-seq to profile senescent tumor cells and showed that MCL-1 is the **dominant upregulated anti-apoptotic gene in senescent tumor cell populations**; pharmacological MCL-1 inhibition with S63845 completely eliminated senescent tumor cells and metastases in preclinical models, whereas navitoclax (BCL-2/BCL-xL) only partially reduced them [^troiani2022]. This implies that the senescent tumor cell SCAP is MCL-1-dominant — not BCL-xL-dominant as in endothelial cells.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | MCL-1 MOM localization, BH-domain interactions, and BAK selectivity are conserved; Troiani 2022 scRNA-seq data is from mouse prostate tumor models (Pten-/- mice); human cancer cell lines used for in vitro validation only |
| Phenotype conserved in humans? | partial | SCAP upregulation in senescent cells confirmed in human cell lines and tumor tissue; primary aged non-tumor human tissue MCL-1 SCAP mapping is less characterized |
| Replicated in humans? | no | All MCL-1 senolytic data is preclinical; no completed human aging-indication MCL-1 inhibitor trials as of 2026-05-04 #gap/needs-human-replication |

### Cell-type specificity and the multi-target SCAP problem

A critical caveat from the Zhu 2016 siRNA study (see [[bcl-2]] page) is that senescent IMR90 fibroblasts require the **triple combination of BCL-2 + BCL-xL + BCL-w knockdown** (not single knockdown) for senolysis — suggesting that in fibroblasts, MCL-1's contribution to the SCAP may be partly redundant with BCL-w [^zhu2016]. The cell-type-specific dominance of MCL-1 vs BCL-xL vs BCL-w depends on which anti-apoptotic family member is most upregulated in that particular senescent cell type. #gap/needs-replication — systematic mapping of MCL-1 SCAP dominance across primary aged human tissue types has not been published.

Furthermore, Shahbandi et al. 2020 showed that in chemotherapy-induced senescent breast cancer cells, MCL-1 co-inhibition is specifically required when NOXA expression is low: navitoclax alone was insufficient, but the addition of an MCL-1 inhibitor rescued senolytic activity [^shahbandi2020]. This points to NOXA/MCL-1 expression levels as a biomarker of senolytic sensitivity in the MCL-1/BAK axis.

---

## Genetic evidence: tissue-specific MCL-1 requirements

Conditional knockout studies have delineated which tissues depend most critically on MCL-1 for survival:

- **Lymphocytes (T and B cells):** Opferman et al. 2003 (*Nature*) showed that conditional deletion of *Mcl1* in hematopoietic cells caused **profound reduction in both T and B lymphocytes** due to apoptosis; splenic B cells were reduced to ~12% of normal, and T cells were markedly reduced. Residual cells in both lineages had escaped Cre-mediated deletion (retaining intact *Mcl1f* alleles), confirming that MCL-1 is continuously required for lymphocyte survival, not just during development [^opferman2003]. This established MCL-1 as a constitutive survival factor for post-mitotic lymphocytes.

- **Cardiomyocytes:** Wang et al. 2013 (*Genes & Development*) demonstrated that cardiomyocyte-specific deletion of *Mcl1* causes **lethal dilated cardiomyopathy with mitochondrial dysfunction**. In the constitutive model (Ckmm-Cre), all pups died within the first 10 days of birth; in the inducible adult model (Myh-CreER), fatal cardiomyopathy developed within ~3 weeks of tamoxifen induction. Cardiomyocytes undergo massive apoptosis, leading to progressive cardiac failure and early death [^wang2013]. This is the mechanistic basis for the **cardiotoxicity** observed with MCL-1 inhibitor drugs in clinical development. Cardiomyocytes depend on MCL-1 more acutely than on BCL-2 or BCL-xL, which distinguishes their survival architecture from most other cell types.

| Tissue | MCL-1 KO phenotype | Implication for MCL-1 inhibitor therapy |
|---|---|---|
| Lymphocytes (T/B cells) | Rapid lymphocyte apoptosis [^opferman2003] | Immunosuppression risk with MCL-1 inhibitors |
| Cardiomyocytes | Lethal cardiomyopathy [^wang2013] | Dose-limiting cardiotoxicity in clinical development |
| Most tumor cells | Survival; cancer-promoting | Target for MCL-1 inhibitor cancer therapy |

---

## Pharmacological targeting: MCL-1 inhibitors

MCL-1's BH3-binding groove has been a challenging drug target due to its unusually flat and electrostatically distinct binding surface compared to BCL-2. First-generation BH3 mimetics (navitoclax, venetoclax) do not effectively engage MCL-1's groove — NOXA's binding mode differs from BAD/ABT-class molecules. The development of selective MCL-1 BH3 mimetics required structure-guided medicinal chemistry.

### S63845

S63845 is the prototypical selective MCL-1 BH3 mimetic. Kotschy et al. 2016 (*Nature*) reported that S63845 binds the MCL-1 groove with sub-nanomolar affinity, displacing BAK and BH3-only proteins, and induces apoptosis across diverse hematological and solid tumor models — including many navitoclax-resistant cancer types that are MCL-1-dependent [^kotschy2016]. Critically, S63845 showed minimal activity in BCL-2-dependent models (consistent with target selectivity). Preclinical cardiac safety signals were noted in that study. Troiani et al. 2022 extended its application as a senolytic [^troiani2022]. Clinical development for oncology is ongoing (Phase 1 trials). As a senolytic agent in aging, S63845 is **preclinical only**, with cardiotoxicity as the primary translation barrier. #gap/needs-human-replication #gap/dose-response-unclear

### AMG-176 and AMG-397

AMG-176 is a selective covalent-like MCL-1 inhibitor advanced by Amgen through Phase 1 trials in hematological malignancies. AMG-397 is an orally bioavailable analog. Both have demonstrated MCL-1 selectivity and on-target tumor-cell apoptosis in Phase 1 studies. **Cardiotoxicity** was a notable finding in Phase 1 data for AMG-176 (reversible cardiac troponin elevation), consistent with the cardiomyocyte MCL-1 KO phenotype. Clinical development status as senolytic agents is not established as of 2026-05-04. #gap/unsourced — confirm AMG-176 Phase 1 cardiac safety outcomes at ClinicalTrials.gov.

### AZD-5991

AZD-5991 (AstraZeneca) is another selective MCL-1 inhibitor in Phase 1 clinical trials for hematological malignancies. It has demonstrated potent MCL-1 binding and tumor-cell apoptosis induction in preclinical models. Cardiac safety profiling is ongoing. #gap/unsourced — confirm AZD-5991 clinical status at ClinicalTrials.gov.

**Summary of MCL-1 inhibitor landscape for senolytic development:**

| Drug | Selectivity | Senolytic evidence | Cardiotoxicity | Clinical stage |
|---|---|---|---|---|
| S63845 | MCL-1 | Yes (Troiani 2022, preclinical) [^troiani2022] | Noted preclinically | Phase 1 (oncology) |
| AMG-176 | MCL-1 | Not established | Troponin elevation (Phase 1) | Phase 1 (oncology) |
| AMG-397 | MCL-1 | Not established | Under study | Phase 1 (oncology) |
| AZD-5991 | MCL-1 | Not established | Under study | Phase 1 (oncology) |
| Navitoclax | BCL-2/BCL-xL/BCL-w | Yes (but misses MCL-1/BAK axis) | Thrombocytopenia (BCL-xL) | Phase 2 (oncology + senolytics) |

#gap/needs-human-replication — No MCL-1 inhibitor has an approved aging indication or completed senolytic clinical trial as of 2026-05-04.

---

## MCL-1 in cancer amplification

*MCL1* is located at chromosomal locus 1q21.2, a region recurrently amplified in multiple human cancer types. The gene is among the most frequently amplified anti-apoptotic genes in TCGA data, with copy-number gains found in myeloma, lung, breast, and other solid tumors. MCL-1 amplification correlates with resistance to BCL-2/BCL-xL inhibitors (navitoclax, venetoclax) — a major clinical resistance mechanism — and predicts sensitivity to MCL-1-selective inhibitors [^kotschy2016] [^vogler2025]. In the aging context, this cancer amplification pattern is relevant because: (1) cancer is a dominant aging disease, and (2) MCL-1-amplified tumors represent a population where MCL-1-targeted senolysis would be most effective and most needed.

#gap/unsourced — precise TCGA frequency data (% of cancers with MCL1 amplification, ranking relative to other Bcl-2 family members) should be pulled from cBioPortal before stating specific numbers.

---

## Pathway membership

- [[apoptosis-pathway]] — MCL-1 is a core anti-apoptotic regulator at the BAK checkpoint; its inhibition is required to access BAK-mediated MOMP in MCL-1-dependent cell types
- [[p53-pathway]] — p53 transcriptionally induces NOXA, the selective endogenous MCL-1 antagonist; p53 also induces PUMA, which binds MCL-1 among other anti-apoptotic proteins
- [[cellular-senescence]] — MCL-1 is upregulated as a SCAP component in senescent tumor cells (Troiani 2022); BAK-dominant senescent cell populations are MCL-1-dependent for survival

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[bak]] | Direct binding (BH3 groove); high affinity | MCL-1 is the dominant BAK anti-apoptotic guard; MCL-1 loss or inhibition directly releases BAK for MOMP |
| [[bax]] | Direct binding (BH3 groove); moderate affinity | Secondary BAX guard; BCL-xL is more important for BAX tonic suppression |
| [[bim]] | BH3:groove (high affinity) | Direct activator BH3-only; BIM can displace BAK from MCL-1 if BIM levels exceed sequestration capacity |
| [[noxa]] | BH3:groove (selective for MCL-1) | Selective MCL-1 sensitizer; NOXA induction (p53-driven) is the cell's endogenous tool for specifically disrupting MCL-1/BAK |
| [[puma]] | BH3:groove (moderate affinity, pan-specific) | p53 transcriptional target; binds MCL-1 among other anti-apoptotic proteins |
| [[bad]] | Negligible (low affinity for MCL-1 groove) | BAD does not neutralize MCL-1; selective for BCL-2/BCL-xL/BCL-w groove |
| [[p53]] | Indirect (transcriptional inducer of NOXA, PUMA) | DNA damage → p53 → NOXA induction → selective MCL-1 neutralization → BAK activation |

---

## Aging interventions that modulate MCL-1

- [[interventions/pharmacological/senolytics]] — MCL-1 inhibitors (S63845) are an emerging senolytic class targeting MCL-1-dependent senescent cell populations; preclinical only; cardiotoxicity barrier
- NOXA induction strategies — pharmacological approaches to upregulate NOXA (e.g., proteasome inhibitors, p53 reactivators) may indirectly neutralize MCL-1 and have been explored in cancer; not yet characterized as senolytics
- [[caloric-restriction]] — reduces senescent cell burden via indirect mechanisms; MCL-1-specific role not established #gap/no-mechanism
- [[mtor]] inhibition (rapamycin) — may affect MCL-1 translation through S6K1/4EBP1-dependent protein synthesis reduction; not directly demonstrated #gap/unsourced

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| MCL-1 SCAP dominance in non-tumor senescent cells | #gap/needs-replication | Troiani 2022 scRNA-seq data is from tumor material; MCL-1 dominance vs BCL-xL in primary aged (non-tumor) human tissues uncharacterized |
| MCL-1 inhibitor senolytic dose-response in vivo | #gap/dose-response-unclear | No published senolytic dose-response for S63845, AMG-176, or AZD-5991 in chronologically aged animals or humans |
| Cardiotoxicity mitigation for MCL-1 senolytic use | #gap/long-term-unknown | Cardiomyocyte-specific MCL-1 requirement (Wang 2013) creates a fundamental therapeutic index problem; tissue-targeted delivery or intermittent dosing strategies are hypothetical |
| MCL-1 SCAP contribution vs BCL-w in IMR90 fibroblasts | #gap/contradictory-evidence | Zhu 2016 siRNA data implicates BCL-2 + BCL-xL + BCL-w triple combination in IMR90 senolysis; MCL-1's contribution was not explicitly dissected in that study |
| GenAge entry for MCL1 | #gap/needs-canonical-id | MCL1 GenAge status not confirmed; aging relevance is primarily mechanistic (SCAP biology), not based on direct lifespan-modification experiments in model organisms |
| MCL-1 amplification frequency in TCGA | #gap/unsourced | cBioPortal should be consulted for precise copy-number amplification frequencies before stating specific percentages |
| NOXA-based senolytic strategy | #gap/needs-replication | NOXA as selective MCL-1 antagonist is well-characterized in cancer biology but has not been systematically tested as a senolytic strategy in aging models |
| MCL-1 inner-membrane isoform (pro-metabolic function) | #gap/no-mechanism | The shorter MCL-1 isoform localizing to the mitochondrial inner membrane has been suggested to support mitochondrial bioenergetics; its role in aging is unexplored |

---

## Footnotes

[^kozopas1993]: doi:10.1073/pnas.90.8.3516 · Kozopas KM, Yang T, Buchan HL, Zhou P, Craig RW · 1993 · PNAS 90(8):3516–3520 · in-vitro · model: ML-1 myeloid leukemia differentiation screen · 965 citations; locally downloaded · original discovery of MCL1 as a BCL-2 homolog expressed during myeloid differentiation; 350 aa protein (37.3 kDa predicted); PEST sequences identified in N-terminal extension

[^opferman2003]: doi:10.1038/nature02067 · Opferman JT, Letai A, Beard C, Sorcinelli MD, Ong CC, Korsmeyer SJ · 2003 · Nature 426(6967):671–676 · in-vivo · model: conditional Mcl1 deletion mouse (lymphocyte lineage; Lck-Cre and CD19-Cre) · 777 citations; locally downloaded · established MCL-1 as continuously required anti-apoptotic factor for T and B lymphocyte survival; lymphocyte-specific deletion caused profound reduction in both lineages (splenic B cells to ~12% of normal; T cells markedly reduced); residual cells had escaped Cre-mediated deletion

[^wang2013]: doi:10.1101/gad.215855.113 · Wang X, Bathina M, Lynch J, Koss B, Calabrese C, Frase S, Schuetz JD, Rehg JE, Opferman JT · 2013 · Genes & Development 27(12):1351–1364 · in-vivo · model: cardiomyocyte-specific conditional Mcl1 knockout mice (constitutive Ckmm-Cre and inducible Myh-CreER) · 262 citations; locally downloaded · cardiomyocyte-specific Mcl1 deletion caused lethal dilated cardiomyopathy with mitochondrial respiratory chain dysfunction (confirmed by ECHO and OCR assays); constitutive model: all pups died within first 10 days of birth; inducible adult model: fatal cardiomyopathy within ~3 weeks of tamoxifen; mechanistic basis for cardiotoxicity of MCL-1 inhibitors

[^kotschy2016]: doi:10.1038/nature19830 · Kotschy A, Szlavik Z, Murray J, Davidson J et al. · 2016 · Nature 538(7626):477–482 · in-vitro + in-vivo · model: diverse cancer cell lines and mouse xenograft models · 1,025 citations; archive: not_oa, not downloaded · S63845 is a potent selective MCL-1 inhibitor that induces apoptosis across diverse cancer models including BCL-2/BCL-xL-resistant types; established MCL-1 selectivity vs BCL-2/BCL-xL; identified preclinical cardiac safety signals #gap/no-fulltext-access

[^troiani2022]: doi:10.1038/s41467-022-29824-1 · Troiani M, Colucci M, D'Ambrosio M et al. · 2022 · Nature Communications 13:2388 · in-vitro + in-vivo · model: mouse prostate tumor models (Pten-/- and Pten-/-;Timp1-/- transgenic mice) for scRNA-seq; human prostate cancer cell lines (PC3 shTIMP1, LNCaP) and mouse xenograft models for in vitro/in vivo validation · 110 citations; locally downloaded · scRNA-seq identified MCL-1 (Mcl1) as the dominant upregulated anti-apoptotic gene in senescent tumor cells; S63845 completely eliminated senescent tumor cells and metastases while navitoclax (ABT263) only partially reduced them; established MCL-1 inhibitors as a senolytic class for tumor-derived senescent populations

[^zhu2016]: doi:10.1111/acel.12445 · Zhu Y, Tchkonia T et al. · 2016 · Aging Cell 15(3):428–435 · in-vitro · model: senescent IMR90 human lung fibroblasts, HUVECs, primary preadipocytes · locally downloaded · triple BCL-2 + BCL-xL + BCL-w siRNA combination (reflecting navitoclax's target profile) was senolytic in IMR90 cells; BCL-xL alone was not sufficient; MCL-1 not independently dissected in this study

[^shahbandi2020]: doi:10.1038/s41418-020-0564-6 · Shahbandi A, Rao SG, Anderson JB et al. · 2020 · Cell Death and Differentiation · in-vitro + in-vivo · model: chemotherapy-induced senescent breast cancer cells; mouse tumor model · 115 citations; archive: download failed — PDF not locally available #gap/no-fulltext-access · navitoclax alone insufficient for senolysis when NOXA expression is low; co-inhibition of MCL-1 rescues senolytic activity; NOXA/MCL-1 expression identified as a biomarker of senolytic sensitivity — quantitative claims from this source are unverified

[^vogler2025]: doi:10.1038/s41392-025-02176-0 · Vogler M et al. · 2025 · Signal Transduction and Targeted Therapy · review · 139 citations; locally downloaded · comprehensive current review of BCL-2 family mechanisms, MCL-1 turnover regulation, BH3-only protein selectivity profiles, and clinical development of BH3 mimetics including MCL-1 inhibitors
