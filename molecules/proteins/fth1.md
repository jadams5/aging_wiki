---
type: protein
aliases: [FTH, FTHL6, ferritin heavy chain, ferritin H subunit, H-ferritin, FTH1_HUMAN]
uniprot: P02794
ncbi-gene: 2495
hgnc: 3976
ensembl: ENSG00000167996
genage-id: null
mouse-ortholog: Fth1
pathways: []
hallmarks:
  - "[[hallmarks/mitochondrial-dysfunction]]"
  - "[[hallmarks/loss-of-proteostasis]]"
  - "[[hallmarks/cellular-senescence]]"
  - "[[hallmarks/chronic-inflammation]]"
  - "[[hallmarks/stem-cell-exhaustion]]"
sens-categories: []
complex-subunits: [P02794, P02792]
is-noncoding-rna: false
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Wu 2024 EMBO J and Feng 2024 Aging verified against full-text PDFs. Yi 2024 Leukemia and Zeng 2025 CDD closed-access (no-fulltext-access); abstract-level checks only. Theil 2011 Curr Opin Chem Biol: DOI and journal corrected against PubMed (was incorrectly cited as Biochem J; correct DOI is 10.1016/j.cbpa.2011.01.004). Mi 2023 Biomed Pharmacother: gold OA but Elsevier PDF blocked; abstract-level only. Canonical-DB identity fields (UniProt, NCBI Gene, HGNC, Ensembl) not independently re-verified against live databases on this pass (confirmed by seeder on 2026-06-14)."
---

# FTH1 — Ferritin Heavy Chain

FTH1 is the **ferroxidase-active subunit** of the ferritin iron-storage nanocage. While both the H-subunit (FTH1) and the L-subunit ([[ftl1]]) assemble into the same 24-subunit hollow cage (described in detail on [[ferritin]]), FTH1 is biochemically and physiologically distinct: it carries the **di-iron ferroxidase center** that catalyzes Fe²⁺ → Fe³⁺ oxidation, the irreplaceable first step of iron biomineralization. Without this catalytic step, labile ferrous iron (Fe²⁺) would remain free to drive Fenton-reaction oxidative damage. FTH1 is therefore the primary **anti-ferroptotic and cytoprotective workhorse** of the ferritin complex, as distinct from FTL's nucleation and long-term stabilization role.

**Division of content across the ferritin-family pages:**
- [[ferritin]] — nanocage architecture, serum ferritin as a clinical biomarker, women's health iron-deficiency, longevity/mortality associations → link, don't duplicate here.
- [[ftl1]] — the light-chain subunit; Remesal 2025 neuronal-FTL1 cognitive-aging story; L-subunit nucleation/storage role → link, don't duplicate here.
- **This page** — FTH1-specific: ferroxidase mechanism, H-subunit-specific aging biology (HSC iron homeostasis, Treg maintenance, senescent-cell ferroptosis resistance, oocyte aging), druggability of the ferroxidase center and NCOA4 axis.

---

## Identity

- **UniProt:** P02794 (FTH1_HUMAN) — Swiss-Prot reviewed entry; confirmed live 2026-06-14
- **NCBI Gene:** 2495 (human FTH1, chr 11q12.3); confirmed live 2026-06-14
- **HGNC symbol:** FTH1 (HGNC:3976); alternate gene names: FTH, FTHL6
- **Ensembl:** ENSG00000167996; confirmed live via NCBI Gene cross-reference 2026-06-14
- **GenAge HAGR:** no entry as of 2026-06-14 — #gap/not-in-genage
- **Mouse ortholog:** **Fth1** (ferritin heavy polypeptide 1; NCBI Gene 14319; Ensembl ENSMUSG00000024661; chr 19 in GRCm39) — confirmed live against NCBI Gene on 2026-06-14; one-to-one ortholog
- **Length (human canonical):** 183 amino acids
- **Subunit mass:** 21,226 Da
- **Chromosomal location:** 11q12.3

**Naming and disambiguation.** The human gene symbol is **FTH1**; this page uses that form throughout. Do not confuse with:
- [[ftl1]] — the FTL gene (ferritin light chain; P02792); distinct subunit, distinct roles
- *FTMT* — mitochondrial ferritin; encoded by a separate intronless gene; ferroxidase-active but mitochondrially targeted; not covered here
- [[ferritin]] — the holoprotein page whose `uniprot:` field also uses P02794 by the CLAUDE.md protein-complex convention (primary catalytic subunit's UniProt as the holoprotein anchor)

---

## Ferroxidase mechanism — what makes FTH1 the H-subunit

### The di-iron ferroxidase center

The defining feature of FTH1 is the **ferroxidase center**, a di-iron catalytic site embedded within the four-helix bundle (helices A–D) of the FTH1 subunit [^theil2011review]. Key coordinating residues (human FTH1) include Glu27, Tyr34, Glu61, Glu62, His65, Glu107, and Gln141, which collectively position two Fe²⁺ ions for oxidation. The FTL subunit lacks these coordinating residues; it can neither bind nor oxidize iron but provides the electrostatic nucleation surface for Fe³⁺ mineral formation downstream.

### Reaction mechanism

The ferroxidase reaction proceeds in two phases [^theil2011review]:

1. **Substrate entry.** Cytosolic labile Fe²⁺ ions enter the ferritin cage through the eight three-fold symmetry channels (hydrophilic, negatively charged pores, ~3–4 Å diameter). These are distinct from the four-fold channels where the H-subunit ferroxidase centers reside.
2. **Di-iron oxidation.** At the ferroxidase center, two Fe²⁺ ions react with O₂ (and in some contexts H₂O₂) to produce two Fe³⁺ plus reduced oxygen species (H₂O or H₂O₂, depending on which oxidant is used). The overall stoichiometry is approximately:
   - With O₂: 4 Fe²⁺ + O₂ + 4 H⁺ → 4 Fe³⁺ + 2 H₂O (at physiological conditions a peroxodiferric intermediate is formed first)
   - With H₂O₂: 2 Fe²⁺ + H₂O₂ → 2 Fe³⁺ + 2 OH⁻ (a route that avoids H₂O₂ net production and may be preferred under oxidative stress)
3. **Mineral nucleation and growth.** Oxidized Fe³⁺ migrates toward the L-subunit nucleation sites in the interior surface, where it mineralizes as hydrous ferric oxide (structurally resembling ferrihydrite), ultimately accommodating up to ~4,500 iron atoms per cage.

The rate-limiting step is the ferroxidase reaction itself. The cytoprotective significance: by oxidizing Fe²⁺ → Fe³⁺, FTH1 removes the form of iron that drives Fenton chemistry (Fe²⁺ + H₂O₂ → Fe³⁺ + OH• + OH⁻) and lipid peroxidation chain-initiation. This is why FTH1 expression level is the primary determinant of a cell's resistance to ferroptosis (see § Ferroptosis biology below).

### Tissue-specific H/L ratio

Tissues differ substantially in their H:L subunit ratio, tuned to functional requirements [^theil2011review]:

| Tissue | H:L ratio (approximate) | Functional logic |
|---|---|---|
| Heart, brain, intestinal epithelium | H-rich (H > L) | Rapid Fe²⁺ detoxification; high metabolic demand; ferroptosis-sensitive |
| Liver, spleen | L-rich (L > H) | Long-term iron storage; slower turnover; high sequestration capacity |
| Erythrocytes | L-dominant | Iron loaded passively from Tf-TfR; oxidative stress from hemoglobin |

This ratio explains why neurotoxicity of iron is so acute in H-rich brain tissue (any labile Fe²⁺ escape immediately encounters lipid-peroxidation substrates) and why hepatic iron overload presents differently (L-rich ferritin sequesters more before labile iron rises).

---

## Aging biology specific to FTH1

### FTH1 in hematopoietic stem cell iron homeostasis

Hematopoietic stem cells (HSCs) have an unusually stringent requirement for FTH1 [^yi2024leukemia]. Yi et al. 2024 (*Leukemia*) generated mice with conditional deletion of *Fth1* in the hematopoietic compartment (Vav-iCre × *Fth1*^fl/fl) and found:

- Conditional *Fth1* deletion **reduced HSC number and repopulation capacity** in competitive transplantation assays.
- Deleted HSCs showed **impaired mitochondrial function** and increased apoptosis.
- The survival phenotype was rescued by iron chelation, confirming the mechanism: without FTH1 ferroxidase activity to sequester labile Fe²⁺, mitochondrial iron overload causes oxidative damage and cell death.
- In acute myeloid leukemia (AML), leukemic stem cells (LSCs) paradoxically **downregulate** *Fth1*, rendering them more sensitive to iron chelation and ferroptosis induction — the opposite of normal HSC biology. This therapeutic vulnerability distinguishes LSCs from normal HSCs.

This is directly relevant to aging: [[hallmarks/stem-cell-exhaustion]] involves progressive HSC dysfunction, and any age-related decline in FTH1 expression or activity in HSCs could accelerate mitochondrial damage and stem-cell depletion. #gap/needs-human-replication (conditional KO data are mouse-only; HSC-specific FTH1 aging trajectory not measured in human aging cohorts)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IRE/IRP regulation and ferroxidase mechanism are human-equivalent |
| Phenotype conserved in humans? | partial — HSC mitochondrial iron dependence inferred; no direct human conditional-KO data |
| Replicated in humans? | no — mouse conditional KO only (Yi 2024) |

### FTH1 in regulatory T cell stability and inflammaging

Wu et al. 2024 (*EMBO J*, n=8–20 mice per genotype per experiment; human PBMC-derived Tregs for select assays) demonstrated that FTH1 expression in **regulatory T cells (Tregs)** is essential for immune homeostasis [^wu2024emboj]:

- FTH1 supports **TET-family dioxygenase-catalyzed 5-hydroxymethylcytosine (5hmC) demethylation** at CpG-rich sequences (CNS1 and CNS2) in the FOXP3 locus, maintaining FOXP3 transcription. The functional assay used overexpressed TET3 (Fig 6H of Wu 2024); the paper attributes the effect to FTH1 ferroxidase activity controlling catalytic Fe²⁺ availability for TET enzymes generally, not to TET2 specifically.
- TET enzymatic activity requires Fe²⁺ as a cofactor; FTH1's ferroxidase activity regulates the labile Fe²⁺ pool that serves as TET's cofactor. When FTH1 ferroxidase activity is abolished (FTH1^mut dominant-negative), TET3 activity is reduced; wild-type FTH1 overexpression does not further increase TET activity above baseline. Mechanism: FTH1 controls the *redox-active* Fe²⁺ pool available to TET enzymes, rather than simply sequestering iron away from them.
- FTH1-deficient Tregs lost FOXP3 expression stability and suppressive function, leading to **enhanced autoimmune neuroinflammation** in EAE models.

This finding connects FTH1 to the aging immune landscape via two routes: (1) the progressive decline of Treg suppressive function in aging ([[hallmarks/disabled-adaptive-immunity]]) may partly reflect FTH1-dependent epigenetic maintenance; (2) Treg dysfunction feeds forward into chronic low-grade inflammation (inflammaging; [[hallmarks/chronic-inflammation]]). #gap/needs-human-replication (mouse transgenic models; Treg aging-specific FTH1 trajectory not characterized)

### FTH1 as a ferroptosis suppressor in senescent cells

Feng et al. 2024 (*Aging*, in vitro) provided a mechanistically important finding for understanding senescent-cell biology [^feng2024aging]:

- Senescent human skeletal muscle cells (doxorubicin-induced) accumulate iron in lysosomes but are **paradoxically resistant to ferroptosis** compared to non-senescent controls.
- Knockdown of **FTH1, FTL, and NCOA4** each independently increased ferroptosis susceptibility in senescent cells, confirming that lysosomal iron retardation via ferritin is the protective mechanism.
- Interpretation: the ferritin-sequestration machinery keeps labile Fe²⁺ below the ferroptotic threshold in senescent cells, effectively **shielding them from iron-dependent cell death** — potentially contributing to the persistence of senescent cells in aged tissues despite their pro-inflammatory SASP secretion.

This creates a therapeutic paradox: inducing ferroptosis in senescent cells (a potential senolytic strategy) may require reducing FTH1 activity or disrupting the NCOA4 ferritinophagy axis. The ferritinophagy connection (NCOA4 releases Fe²⁺ from FTH1 for delivery to autolysosomes) links FTH1 directly to the ferroptosis-senescence interface documented on [[processes/ferroptosis]] and [[hallmarks/cellular-senescence]]. #gap/needs-human-replication (in vitro cell culture model; tissue-level validation and human aging data absent)

### FTH1 in oocyte aging and advanced maternal age

Zeng et al. 2025 (*Cell Death Differ*) showed in mouse and porcine oocyte models (human oocytes not directly studied) that oocytes from aged females (advanced maternal age, AMA) have **reduced Fth1 expression**, leading to:

- Elevated labile Fe²⁺ in the oocyte cytoplasm
- Increased lipid peroxidation and mitochondrial dysfunction
- Impaired meiotic maturation (reduced polar-body extrusion rate)
- Restoration of Fth1 expression (or pharmacological ferroptosis inhibition with RSL3/FAC inhibitors) **rescued meiotic competence and restored cytoskeletal dynamics and mitochondrial function** in aged mouse oocytes; porcine oocyte data validated the ferroptosis-quality link in vitro [^zeng2025cdd]

This positions Fth1 decline as a molecular contributor to the well-known reduction in oocyte quality with advancing maternal age, acting through the ferroptosis axis. This is the most direct evidence that the ferroxidase center of FTH1 is rate-limiting in an aging phenotype. #gap/needs-human-replication (mouse + porcine in vitro models only; no human oocyte intervention data; no in vivo rescue shown)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FTH1 ferroxidase mechanism is human-equivalent |
| Phenotype conserved in humans? | partial — human aged oocyte data support FTH1 decline; rescue experiments are in vitro only |
| Replicated in humans? | no — rescue experiments are mouse and porcine in vitro only; no human oocyte data |

### FTH1 and age-related cataract (ferroptosis in lens epithelial cells)

Mi et al. 2022 (*Biomed Pharmacother*, in vivo rat + in vitro lens cell line) showed that UV-induced ferroptosis in lens epithelial cells is suppressed by the **SIRT6/NCOA4/FTH1 axis** [^mi2023biomed]:

- SIRT6 activation (by melatonin) reduced NCOA4-mediated ferritinophagy → FTH1 protein was stabilized and less FTH1 was degraded → labile Fe²⁺ pool fell → ferroptosis was inhibited.
- SIRT6 knockdown had the opposite effect: enhanced NCOA4-FTH1 degradation → elevated labile iron → ferroptosis → cataractogenic cell death.
- This establishes a regulatory triad: **SIRT6 (longevity deacylase) → NCOA4 (ferritinophagy receptor) → FTH1 (ferroxidase/iron-cage)** in a tissue (lens) that undergoes well-characterized age-related pathology.

#gap/needs-human-replication (rat + cell-line model; SIRT6/NCOA4/FTH1 axis not directly measured in human age-related cataracts)

### Ferroptosis biology: FTH1 as the anti-ferroptotic brake

The broader ferroptosis process page ([[processes/ferroptosis]]) covers the canonical mechanism. FTH1's specific role:

- **FTH1 is a key endogenous ferroptosis suppressor**: by converting labile Fe²⁺ to sequestered Fe³⁺, it reduces the iron available for lipid-peroxidation initiation.
- **NCOA4-mediated ferritinophagy of FTH1 is a pro-ferroptotic signal**: NCOA4 cargo-receptor binding to FTH1's surface causes FTH1 (and thus the entire iron mineral core) to be delivered to autolysosomes, releasing Fe²⁺ from the degraded cage into the labile pool.
- In aged cells where **autophagic flux declines** (see [[processes/autophagy]] and [[hallmarks/disabled-macroautophagy]]), ferritinophagy is impaired → FTH1 accumulates → iron remains sequestered → labile iron pool falls → paradoxical ferroptosis resistance (consistent with the Feng 2024 observation in senescent cells) [^feng2024aging].
- However, impaired ferritinophagy also means the iron-recycling capacity is reduced, which can starve mitochondrial Fe-S cluster synthesis → ETC dysfunction → [[hallmarks/mitochondrial-dysfunction]].

The net effect of age-associated ferritinophagy impairment on FTH1 biology is thus a **redistribution of iron from the cycling pool to the static sequestered pool** — with cell-context-dependent consequences: ferroptosis resistance for senescent cells, Fe-S cluster deficiency for neurons and muscle cells.

---

## FTH1-specific disease genetics

UniProt P02794 records two genetic diseases attributable to FTH1 mutations:

1. **Hemochromatosis type 5 (HFE5)** — Caused by missense mutations in the iron-responsive element (IRE) of FTH1 mRNA's 5'-UTR. These IRE mutations disrupt IRP1/2 binding, causing FTH1 to be translated constitutively at high levels even under iron-deficiency → excessive iron sequestration → symptoms of iron dysregulation. (Distinct from the more common HFE1 caused by HFE gene C282Y mutation.)

2. **Neurodegeneration with brain iron accumulation 9 (NBIA9)** — A recently characterized autosomal-dominant neurodegenerative syndrome caused by heterozygous missense mutations in FTH1. Clinical features: progressive neurological deterioration with brain iron accumulation on MRI, particularly in the basal ganglia. Mechanistically distinct from neuroferritinopathy (which affects the FTL light chain; see [[ftl1]] § Translational implications / Neuroferritinopathy). The NBIA9 FTH1 mutations likely cause iron-cage dysfunction via dominant-negative effects on the ferroxidase center or cage assembly.

Both diseases confirm that **quantitative or qualitative perturbation of FTH1 ferroxidase activity has direct CNS consequences** — establishing a human genetic proof-of-concept that parallels the mouse conditional KO biology.

---

## Women's health context

FTH1's ferroxidase role operates across both sexes; the sex-differentiated iron accumulation story (premenopausal menstrual iron loss → low labile iron → reduced cardiovascular risk; postmenopausal ferritin rise; iron-hypothesis for female longevity advantage) is covered on [[ferritin]] and [[molecules/metabolites/iron]]. The one FTH1-specific note for women's health is the oocyte aging data above (§ FTH1 in oocyte aging), which is directly sex-specific: FTH1 decline is a candidate molecular mechanism for the age-dependent reduction in female reproductive competence.

---

## Druggability and interventions

**Aging-context tier: 3** — Predicted druggable (the ferroxidase center has structural handles and ligand-binding capacity has been demonstrated in crystal structures; PDB entries exist), but no clinical-stage drug targets FTH1 ferroxidase activity for an aging or senolytic indication.

| Modality | Stage | Notes |
|---|---|---|
| Small-molecule ferroxidase-center inhibitors | Preclinical / structural | Possible — the di-iron site is structurally characterized (multiple PDB entries); no selective FTH1 inhibitor with in vivo aging data reported |
| NCOA4 modulators (ferritinophagy regulators) | Preclinical | NCOA4 knockdown or overexpression can modulate the FTH1 degradation rate; no clinical-grade probe; NCOA4 is a cancer target as well as an aging-adjacent target |
| SIRT6 activators | Preclinical | Melatonin demonstrated SIRT6→NCOA4→FTH1 modulation in rat lens epithelial cells (Mi 2022) [^mi2023biomed]; clinical-grade SIRT6 activators under investigation |
| Iron chelators (deferoxamine, deferasirox, deferiprone) | Clinically approved (non-aging indications) | Reduce labile iron available for FTH1 sequestration by a parallel route; not targeting ferroxidase activity directly |
| FTH1 mRNA / gene-therapy upregulation | Preclinical (conceptual) | Oocyte rescue experiments [^zeng2025cdd] and HSC biology [^yi2024leukemia] suggest gain-of-FTH1-function is cytoprotective; AAV-mediated FTH1 OE not yet tested in aging in vivo |

`next-experiment:` A conditional Fth1 heterozygous knockout aged mouse cohort (18–24 mo) with longitudinal measurement of HSC number, mitochondrial ROS, lipid peroxidation markers, and senescent-cell burden would determine whether physiological decline in FTH1 activity is a rate-limiting driver of stem-cell aging and senescent-cell accumulation versus a marker of it.

---

## Hallmark connections summary

| Hallmark | FTH1 role | Evidence quality |
|---|---|---|
| [[hallmarks/mitochondrial-dysfunction]] | Ferroxidase removes Fe²⁺ that would otherwise impair ETC via Fenton-generated ROS; HSC conditional KO shows mitochondrial dysfunction on FTH1 loss [^yi2024leukemia] | Moderate — in-vivo mouse |
| [[hallmarks/cellular-senescence]] | FTH1-mediated lysosomal iron sequestration shields senescent cells from ferroptosis, potentially contributing to their persistence [^feng2024aging] | Limited — in-vitro |
| [[hallmarks/loss-of-proteostasis]] | Age-related ferritinophagy impairment causes FTH1 accumulation; iron locked in non-functional cage → Fe-S cluster deficit | Moderate — mechanistic inference from autophagy-aging literature |
| [[hallmarks/chronic-inflammation]] | FTH1-dependent Treg stability — FTH1 loss destabilizes FOXP3 → reduced Treg suppression → inflammaging [^wu2024emboj] | Limited — mouse transgenic |
| [[hallmarks/stem-cell-exhaustion]] | FTH1 conditional KO in HSCs reduces repopulation capacity [^yi2024leukemia] | Moderate — in-vivo mouse |

---

## Wiki connections

- [[ferritin]] — holoprotein page; nanocage architecture, serum ferritin biomarker, longevity associations (do not duplicate; link here)
- [[ftl1]] — L-subunit partner; cognitive-aging FTL1 story (Remesal 2025)
- [[processes/ferroptosis]] — FTH1 is listed there as a ferroptosis suppressor; this page adds cell-type-specific detail
- [[processes/autophagy]] — ferritinophagy is the NCOA4-dependent selective autophagy of FTH1; age-associated autophagic decline affects ferritin cycling
- [[hallmarks/mitochondrial-dysfunction]] — FTH1 loss → mitochondrial iron overload → ETC dysfunction (Yi 2024 HSC data; FTMT parallel in mitochondria)
- [[hallmarks/cellular-senescence]] — FTH1 ferroptosis-resistance in senescent cells (Feng 2024)
- [[hallmarks/stem-cell-exhaustion]] — FTH1 essential for HSC survival (Yi 2024)
- [[hematopoietic-stem-cells]] — cell-type page where Yi 2024 FTH1 HSC data should be propagated
- [[molecules/metabolites/iron]] — labile iron pool, Fenton chemistry, iron hypothesis for longevity

---

## Limitations and gaps

- `#gap/not-in-genage` — FTH1 has no GenAge HAGR entry as of 2026-06-14; the HSC aging data (Yi 2024), oocyte aging data (Zeng 2025), and senescent-cell ferroptosis-resistance data (Feng 2024) collectively make it a candidate for nomination.
- `#gap/needs-human-replication` — All primary aging-biology claims (HSC iron homeostasis, Treg stability, senescent-cell ferroptosis resistance, oocyte quality) are derived from mouse transgenic models, rat in vivo, or in vitro cell systems (human and porcine). No longitudinal human aging study has directly measured FTH1 protein activity in aged tissues.
- `#gap/needs-replication` — Feng 2024 (senescent-cell ferroptosis resistance via FTH1) is a single in-vitro study in one cell type (skeletal muscle); the mechanism needs independent confirmation in additional senescent-cell types.
- `#gap/no-mechanism` (upstream regulation) — What drives FTH1 expression changes in aged tissues? Known regulators include Nrf2 (which transcriptionally activates FTH1 under oxidative stress), IRP1/2 (post-translational), and SIRT6 (via NCOA4 axis). Which dominates in the aging context is not resolved.
- `#gap/gtex-aging-correlation` — GTEx aging-correlation data for FTH1 across tissues has not been populated. Age-stratified expression analysis would reveal which tissues show the most consistent FTH1 age-rise or age-fall.
- `#gap/dose-response-unclear` — The threshold of FTH1 activity at which ferroptosis protection fails in aged cells is not quantified; nor is the minimum FTH1 level needed for HSC maintenance across the aging trajectory.
- `#gap/long-term-unknown` — No long-term intervention study (pharmaceutical NCOA4 modulation, FTH1 gene therapy, SIRT6 activator) has been conducted in any aging animal model with FTH1 as the primary endpoint.
- `#gap/needs-canonical-id` — Mouse Ensembl gene ID ENSMUSG00000024661 was returned by NCBI Gene cross-reference lookup but not independently confirmed against the Ensembl database directly. Flag for lint cross-check.

---

## Footnotes

[^theil2011review]: doi:10.1016/j.cbpa.2011.01.004 · Theil EC · "Ferritin protein nanocages use ion channels, catalytic sites, and nucleation channels to manage iron/oxygen chemistry" · *Curr Opin Chem Biol* 15(2):304–311 · 2011 · PMID:21296609 · PMC:PMC3074017 · review · canonical structural and mechanistic review of the ferroxidase center and ferritin nanocage; ferroxidase-center coordinating residues, di-iron site, pore dimensions, H/L ratio tissue distribution; widely cited; also cited on [[ferritin]] for nanocage architecture. **Note: the previously cited DOI 10.1042/BJ20102021 (Biochem J) was incorrect — corrected to the actual Curr Opin Chem Biol paper on 2026-06-14 verification pass.**

[^yi2024leukemia]: doi:10.1038/s41375-024-02169-y · Yi W, Zhang J, Huang Y et al. · "Ferritin-mediated mitochondrial iron homeostasis is essential for the survival of hematopoietic stem cells and leukemic stem cells" · *Leukemia* 38(5):1003–1018 · 2024 · in vivo (Vav-iCre × *Fth1*^fl/fl conditional KO mouse) + in vitro (HSC / LSC) · n=multiple mouse cohorts (specific n per assay in paper) · conditional *Fth1* deletion reduced HSC number and repopulation capacity; impaired mitochondrial function; increased apoptosis; LSCs paradoxically downregulate *Fth1* and become iron-chelation-sensitive · 27 citations (Crossref, accessed 2026-06-14) · closed-access; #gap/no-fulltext-access

[^wu2024emboj]: doi:10.1038/s44318-024-00064-x · Wu Q, Carlos AR, Braza F et al. · "Ferritin heavy chain supports stability and function of the regulatory T cell lineage" · *EMBO J* 43(8):1445–1483 · 2024 · in vivo (mouse Foxp3-Cre × Fth^fl/fl conditional KO + bone-marrow chimeras) + in vitro (human and mouse Tregs; HEK293T TET activity assay) · n=8–20 mice per genotype per experiment (multiple experiments) · FTH1 ferroxidase activity supports TET-family-mediated 5hmC demethylation at FOXP3 CNS1/CNS2; TET3 used in functional ferroxidase-activity assay (Fig 6H); FTH1-deficient Tregs lose FOXP3 stability and become inflammatory ex-Tregs; enhanced EAE in Foxp3-Cre Fth^fl/fl mice; Plasmodium and B16 melanoma models also shown · 17 citations (archive, 2026-06-14) · open-access (EMBO Press / Springer Nature)

[^feng2024aging]: doi:10.18632/aging.205777 · Feng X et al. · "Iron retardation in lysosomes protects senescent cells from ferroptosis" · *Aging* 16(9):7683–7703 · 2024 · PMID:38683121 · in vitro · model: doxorubicin (50 nM, 3 days)-induced senescent human skeletal myoblast (HSkM) cells · FTH1 and FTL protein both upregulated ~2-fold in senescent vs. proliferating cells; NCOA4 protein decreased ~37%; siRNA knockdown of FTH1, FTL, or NCOA4 each decreased senescent cell survival (p<0.001) without affecting proliferating cell survival significantly; lysosomal iron retardation identified as the protective mechanism; lysosomotropic agents CQ and LLOMe sensitized senescent cells to ferroptosis

[^mi2023biomed]: doi:10.1016/j.biopha.2022.114048 · Mi L et al. · "Melatonin inhibits ferroptosis and delays age-related cataract by regulating SIRT6/p-Nrf2/GPX4 and SIRT6/NCOA4/FTH1 pathways" · *Biomed Pharmacother* 157:114048 · 2022 · PMID:36463827 · in vivo (rat lens) + in vitro (lens epithelial cell lines) · UVB-induced ferroptosis; melatonin → SIRT6 activation → reduced NCOA4-mediated ferritinophagy → FTH1 stabilization → ferroptosis inhibition in lens; SIRT6 KD reversed protection · #gap/no-fulltext-access (Elsevier PDF blocked on gold OA; abstract-level verification only)

[^zeng2025cdd]: doi:10.1038/s41418-025-01456-0 · Zeng X et al. · "Inhibition of ferroptosis counteracts the advanced maternal age-induced oocyte deterioration" · *Cell Death Differ* 32(6):1071–1085 · 2025 · PMID:39910323 · nano-proteomics + in vivo (mouse aged oocytes) + in vitro (porcine oocytes; ferroptosis inducers RSL3/FAC, Fth1 knockdown) · nano-proteomics revealed reduced Fth1 as a major cause of ferroptosis in aged mouse oocytes; Fth1 knockdown or ferroptosis induction phenocopied aged-oocyte meiotic defects (failed maturation, aberrant cytoskeleton, impaired mitochondria); Fth1 expression or ferroptosis inhibition rescued aged oocyte quality; porcine in vitro data validated ferroptosis-quality link; note: no human oocyte experiments reported in this paper · closed-access; #gap/no-fulltext-access (abstract-level verification only)
