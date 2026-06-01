---
type: protein
aliases: [FKBP1A, FK506-binding protein 12, FKBP-12, FKBP-1A, calstabin-1, rotamase, immunophilin FKBP12]
uniprot: P62942
ncbi-gene: 2280
hgnc: 3711
mouse-ortholog: Fkbp1a
ensembl: ENSG00000088832
druggability-tier: 1  # SM:Approved Drug (rapamycin/tacrolimus) — Open Targets, FKBP1A
caused-by: []
causes: []
key-domains: [PPIase-FKBP-type, drug-binding pocket]
key-ptms: [N-terminal Met removal, Lys53 N6-acetylation, Lys53 N6-succinylation]
pathways: ["[[mtor]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[mtor]]", "[[tgfbr1]]", "[[ryr1]]", "[[calcineurin]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Sabers 1995 and Harrison 2009 verified against primary source PDFs; Laplante & Sabatini 2012 review verified against PDF; Choi 1996, Brown 1994, Mannick 2014 closed-access (not_oa) — partial verification via Crossref abstracts only; Lamming 2012 green OA but download failed — unverified; canonical-database identity fields (UniProt, NCBI Gene, HGNC, Ensembl) not independently re-checked against databases"
---

# FKBP12 (FKBP1A)

A small (~12 kDa), abundantly expressed cytosolic immunophilin with peptidyl-prolyl cis-trans isomerase (PPIase) catalytic activity. FKBP12 is not itself an aging-related protein — it has no direct senolytic, geroprotective, or lifespan-extending activity. Its central relevance to aging biology is entirely pharmacological: it is the **obligate intracellular receptor** for rapamycin and its analogs (rapalogs). The FKBP12-rapamycin complex, not rapamycin alone, binds and inhibits [[mtor|mTORC1]], making FKBP12 a passive but indispensable intermediary in the best-validated pharmacological longevity intervention in mammals. FKBP12 performs a parallel role in immunosuppression: the FKBP12-tacrolimus (FK506) complex inhibits calcineurin, a mechanistically distinct action unrelated to mTOR.

---

## Identity

| Field | Value |
|---|---|
| UniProt | P62942 (FKB1A_HUMAN) |
| NCBI Gene | 2280 |
| HGNC ID | 3711 |
| HGNC symbol | FKBP1A |
| Ensembl | ENSG00000088832 |
| Mouse ortholog | Fkbp1a (one-to-one; sequence highly conserved) |
| Length | 108 amino acids |
| MW | ~11,951 Da (12 kDa by convention) |
| GenAge | Not listed in GenAge human database |

**Naming note:** The gene symbol is *FKBP1A*; the protein is most commonly called FKBP12 (for its 12 kDa mass) or FKBP-12. The alias "calstabin-1" (calcium channel stabilizing binding protein) refers to its role at ryanodine receptors. This page uses FKBP12 as the primary protein name.

---

## Functional domains

- **PPIase FKBP-type domain (residues ~20–108)** — the single catalytic domain; contains both the peptidyl-prolyl isomerase active site and the drug-binding pocket. The isomerase and drug-binding functions partially overlap: ligand binding (rapamycin or tacrolimus) fills the hydrophobic cavity that also binds the proline-containing substrate peptide, competitively inhibiting PPIase activity.
- **Drug-binding pocket** — a shallow hydrophobic cleft that accommodates the macrolide ring systems of rapamycin (sirolimus) and tacrolimus (FK506). The binding is tight (K_d ~0.2 nM for rapamycin) but non-covalent. Occupancy of this pocket does not change FKBP12 subcellular localization.

---

## Post-translational modifications

| PTM | Site | Consequence |
|---|---|---|
| N-terminal Met removal | Met1 | Constitutive; produces mature 107-residue protein |
| N6-acetylation | Lys53 | Function unknown |
| N6-succinylation | Lys53 | Function unknown |

No phosphorylation sites have been identified in curated databases (UniProt P62942, reviewed 2026-05-04). #gap/needs-replication — Lys53 modifications are annotated without primary functional data; their significance in drug-binding or aging contexts is unexplored.

---

## Core mechanism: FKBP12 as a rapamycin co-receptor

### Step 1: Rapamycin binds FKBP12

Rapamycin enters cells (highly lipophilic; passive diffusion) and binds the drug-binding pocket of cytosolic FKBP12 with K_d ~0.2 nM. This is among the tightest small-molecule–protein interactions known. The binding is entropy-driven; the macrolide ring adopts a specific conformation that makes extensive van der Waals contacts with the hydrophobic pocket.

### Step 2: FKBP12-rapamycin complex docks onto the FRB domain of mTOR

The binary FKBP12-rapamycin complex presents a composite surface that binds the **FRB (FKBP12-Rapamycin-Binding) domain** of [[mtor|mTOR]] with K_d ~12 nM [^choi1996]. This interaction requires both components simultaneously — neither FKBP12 alone nor rapamycin alone binds the FRB domain with appreciable affinity under physiological conditions. The ternary complex FKBP12-rapamycin-FRB was resolved by X-ray crystallography [^choi1996], establishing the structural basis for the unusual "molecular glue" pharmacology.

### Step 3: Inhibition of mTORC1

The FRB domain is located adjacent to the mTOR kinase domain. FKBP12-rapamycin binding at FRB inhibits mTOR's activity toward mTORC1 substrates — primarily [[s6k1]] (p70-S6K1) and [[4e-bp1]] [^laplante2012]. The result is selective inhibition of mTORC1 phosphorylation of these substrates, reducing anabolic signaling (protein synthesis, lipid synthesis, nucleotide synthesis) and de-repressing [[autophagy]]. **However, exactly how the binding of FKBP12-rapamycin to mTORC1 inhibits its activity is unknown** — the steric-occlusion model for substrate access is mechanistically plausible but as of 2012 was not established [^laplante2012]. #gap/no-mechanism

### mTORC2 is acutely insensitive

**mTORC2** is not acutely sensitive to rapamycin: FKBP12-rapamycin cannot bind to intact mTORC2, though the structural basis for this selectivity is not fully characterized [^laplante2012]. However, chronic rapamycin exposure (weeks to months) reduces mTORC2 signaling in some, but not all, cell types by suppressing mTORC2 assembly, causing delayed mTORC2 inhibition and insulin resistance via Akt dephosphorylation at Ser473 [^lamming2012]. This chronic mTORC2 effect is cell-type and tissue dependent, and its relative contribution to both adverse metabolic effects and longevity benefits of rapamycin is an active area of investigation. #gap/contradictory-evidence

---

## FKBP12 vs FKBP51 / FKBP52

The FKBP family has >15 members in mammals. FKBP12 is the primary intracellular receptor for rapamycin at pharmacological doses; the larger family members FKBP51 (FKBP5, ~51 kDa) and FKBP52 (FKBP4, ~52 kDa) also have PPIase domains but their drug-binding pockets differ structurally and they bind rapamycin with far lower affinity. For clinical rapalog pharmacology, FKBP12 binding is the operative interaction. #gap/needs-replication — the dose at which other FKBPs begin to contribute to rapamycin action in vivo has not been rigorously characterized.

---

## Tacrolimus (FK506): a parallel FKBP12-dependent mechanism

Tacrolimus binds FKBP12 using the same drug-binding pocket, forming an FKBP12-tacrolimus complex that targets **calcineurin** (protein phosphatase 2B, PP2B) rather than mTOR. Calcineurin dephosphorylates NFAT transcription factors, enabling their nuclear translocation and cytokine gene expression (IL-2, IL-4). FKBP12-tacrolimus inhibits calcineurin, blocking T-cell activation — the basis for tacrolimus's use as a transplant immunosuppressant. This mechanism is entirely distinct from the rapamycin-mTOR axis: FKBP12 is the shared adapter but the downstream biology is unrelated.

The two drugs compete for the same FKBP12 binding pocket. Co-administration of rapamycin and tacrolimus can cause competitive displacement and altered PK/PD — a clinically important interaction in transplant medicine.

---

## Subcellular location

FKBP12 is predominantly **cytosolic**, consistent with its role intercepting rapamycin and tacrolimus before they reach membrane-associated complexes. It also associates peripherally with the **sarcoplasmic reticulum** membrane (cytoplasmic side) via interaction with the ryanodine receptor (RYR1, RYR2, RYR3), where it stabilizes the closed state of the RYR calcium channel (hence "calstabin-1"). This sarcoplasmic reticulum interaction is unrelated to drug binding or mTOR signaling.

---

## Other protein interactions

| Interactor | Functional role |
|---|---|
| [[mtor]] | FRB domain binding (via rapamycin complex); mTORC1 substrate-access block |
| Calcineurin (PPP3CA) | FK506 complex target; unrelated to rapamycin/mTOR axis |
| [[tgfbr1]] (ALK5) | FKBP12 keeps TGFBR1 in an inactive conformation, blocking TGF-β type I receptor activation; released upon TGF-β stimulation. Rapamycin-FKBP12 complex displaces FKBP12 from TGFBR1, potentially sensitizing cells to TGF-β — a secondary pharmacological consideration. |
| RYR1, RYR2, RYR3 | Sarcoplasmic reticulum membrane; stabilizes closed-channel conformation; modulates excitation-contraction coupling in muscle |
| ACVR1B (ALK4) | Inhibits activin receptor; parallel to TGFBR1 interaction |
| APP | Association with amyloid precursor protein reported; functional significance unclear #gap/no-mechanism |

---

## Role in aging biology

FKBP12 has no independently characterized pro-longevity or anti-aging function. Its aging relevance is entirely downstream of rapamycin/rapalog pharmacology.

### Rapamycin longevity requires FKBP12

Harrison et al. 2009 demonstrated that rapamycin fed starting at 600 days of age (equivalent to ~60 human years) extended lifespan in genetically heterogeneous mice: mean lifespan increased 13% in females and 9% in males; 90th-percentile (maximal) lifespan increased 14% in females and 9% in males [^harrison2009]. This effect is **entirely dependent on FKBP12-rapamycin complex formation**: cells from FKBP12-null animals are insensitive to rapamycin-mediated mTORC1 inhibition, and rapalog analogs that cannot bind FKBP12 do not inhibit mTORC1 in cells. #gap/needs-replication — while the FKBP12-dependence of rapalog action is mechanistically established in vitro, a formal in-vivo lifespan experiment in tissue-specific FKBP12-null mice has not been published.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | FKBP12-rapamycin-mTOR ternary complex is conserved; FRB domain is nearly identical; rapalogs work in human cells via same mechanism |
| Phenotype conserved in humans? | in-progress | Rapamycin/rapalogs used clinically; immune rejuvenation seen in Mannick 2014 [^mannick2014]; lifespan endpoint not feasible in humans |
| Replicated in humans? | in-progress | Mannick 2014 (RAD001/everolimus, n=218 elderly) showed mTORC1 inhibition and vaccine-response improvement; PEARL and other trials ongoing #gap/long-term-unknown |

### Tissue-specific FKBP12 expression and rapalog sensitivity

FKBP12 is ubiquitously expressed across human tissues (confirmed via GTEx). However, quantitative FKBP12 protein levels vary across tissues and may contribute to differential mTORC1 inhibition kinetics between organs for the same rapamycin plasma concentration. This is largely unexplored as an explanation for the tissue-specific efficacy and toxicity profiles of rapalogs. #gap/no-mechanism

### Rapalog clinical pharmacology: FKBP12 is rate-limiting

The dose-response for mTORC1 inhibition by rapamycin is determined by the intracellular FKBP12-rapamycin complex concentration — which in turn depends on: (1) rapamycin intracellular accumulation, (2) total available FKBP12, and (3) FKBP12 fractional occupancy. At clinical doses, FKBP12 is generally not saturating, so mTORC1 inhibition is partial and substoichiometric. This partial inhibition profile underpins the rationale for intermittent vs continuous dosing strategies in geroprotection — continuous dosing eventually depletes mTOR from mTORC2, causing metabolic side effects, whereas intermittent dosing may preferentially inhibit mTORC1 while allowing mTORC2 to recover [^lamming2012]. #gap/dose-response-unclear

---

## Pathway membership

- [[mtor]] — FKBP12 is required for rapamycin-mediated mTORC1 inhibition; the interaction occurs at the FRB domain of mTOR within the mTORC1 complex

FKBP12 is **not** a constitutive signaling node in the mTOR pathway under drug-free conditions. It appears on the mTOR pathway page only in the context of rapalog pharmacology.

---

## Pharmacology

### Rapalogs that depend on FKBP12

All clinically used rapalogs operate via FKBP12:

| Drug | Alias | Clinical use | FKBP12-dependent? |
|---|---|---|---|
| Sirolimus | Rapamycin | Transplant, Lymphangioleiomyomatosis (FDA-approved) | yes |
| Everolimus | RAD001 | Oncology, Transplant, TSC (FDA-approved) | yes |
| Temsirolimus | CCI-779 | Oncology (FDA-approved) | yes |
| Ridaforolimus | AP23573 | Oncology (investigational) | yes |

All rapalogs share the FKBP12-binding pharmacophore (the "binding domain" of the macrolide ring); the variable effector domain determines FKBP-bound complex stability and membrane permeability.

### No direct FKBP12-targeted geroprotection

No drug has been developed to modulate FKBP12 itself for aging benefit. FKBP12 is not a therapeutic target — it is a pharmacological intermediary. Attempts to design bifunctional molecules that redirect FKBP12-rapamycin complexes to non-mTOR targets are an area of chemical biology research (PROTAC-adjacent), but none have aging-specific applications as of 2026.

---

## Discovery context

The identification of FKBP12 as the rapamycin receptor and its connection to mTOR:

- **1991–1992**: FKBP12 purified as the cellular binding protein for both FK506 and rapamycin [background; widely replicated].
- **1994**: Brown et al. identified a ~289 kDa mammalian protein (FRAP/mTOR) pulled down by FKBP12-rapamycin affinity chromatography — the first demonstration that FKBP12-rapamycin targets mTOR [^brown1994].
- **1995**: Sabers et al. independently isolated the same target from rat brain and YAC-1 murine T-lymphoma cells, confirming FKBP12-rapamycin (not FK506) complex as the relevant species; also isolated full-length mTOR cDNA (2549 aa, 289 kDa) [^sabers1995].
- **1996**: Choi et al. solved the crystal structure of the FKBP12-rapamycin-FRB ternary complex, providing the structural basis for the ~12 nM ternary K_d and the steric-occlusion mechanism [^choi1996].

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| FKBP12-null lifespan study absent | #gap/needs-replication | In-vivo proof that rapamycin longevity requires FKBP12 in tissue-specific knockouts; mechanistic inference from cell culture |
| Tissue-specific FKBP12 levels | #gap/no-mechanism | Unexplored as a contributor to organ-selective rapamycin effects and toxicity |
| Chronic mTORC2 inhibition mechanism | #gap/contradictory-evidence | How continuous rapamycin eventually inhibits mTORC2; whether this limits longevity benefit is actively debated |
| Optimal rapalog dosing for geroprotection | #gap/dose-response-unclear | Intermittent vs continuous; optimal dose in aged humans not established; FKBP12 occupancy kinetics not characterized in aged tissues |
| Lys53 PTM function | #gap/no-mechanism | Annotated but functionally uncharacterized |
| FKBP12-TGFBR1 displacement by rapamycin | #gap/no-mechanism | Secondary effect of rapamycin via TGFBR1 sensitization; aging-relevant implications unexplored |
| Human longevity endpoint | #gap/needs-human-replication | Lifespan extension demonstrated only in mice; human trials powered only for surrogate endpoints |

---

## Footnotes

[^choi1996]: doi:10.1126/science.273.5272.239 · in-vitro (X-ray crystallography + binding assays) · model: recombinant human FKBP12, rapamycin, mTOR FRB domain · 919 citations · not verified against PDF (closed-access; not_oa per archive) #gap/no-fulltext-access · Crossref abstract confirms: crystal structure at 2.7 Å of human FKBP12-rapamycin-FRB ternary complex; "extensive interactions between rapamycin and both proteins, but fewer interactions between the proteins" · K_d values (~12 nM ternary, ~0.2 nM binary) cited in wiki are sourced from this paper but cannot be confirmed without full text

[^brown1994]: doi:10.1038/369756a0 · in-vitro (affinity chromatography, kinase assay) · model: bovine brain extract + human cells · 2043 citations · not verified against PDF (closed-access; not_oa per archive) #gap/no-fulltext-access · Crossref: title confirmed "A mammalian protein targeted by G1-arresting rapamycin–receptor complex"; no abstract available via Crossref · key finding: mTOR (FRAP, ~289 kDa) identified as the cellular target of FKBP12-rapamycin complex

[^sabers1995]: doi:10.1074/jbc.270.2.815 · in-vitro (affinity purification, mammalian cells) · model: rat brain + YAC-1 murine T-lymphoma cells · 871 citations · verified against PDF · key finding: independent isolation of mTOR as FKBP12-rapamycin target; FKBP12-rapamycin complex (not FK506) required; mTOR binding reduced in rapamycin-resistant YAC-1 clones; full-length mTOR cDNA isolated (2549 aa, 289 kDa predicted MW)

[^harrison2009]: doi:10.1038/nature08221 · in-vivo (mouse, dietary rapamycin) · model: genetically heterogeneous UM-HET3 mice (CB6F1 × C3D2F1 cross); n=1,960 total; 674 controls, ~317–328/treatment group · 3643 citations · locally downloaded at  · key finding: late-life rapamycin (600 days) extends mean lifespan 9% (males) and 13% (females); 90th-percentile (maximal) lifespan 9% (males) and 14% (females); log-rank p<0.0001 pooled

[^lamming2012]: doi:10.1126/science.1215135 · in-vivo (mouse, rapamycin) + in-vitro · model: C57BL/6 mice; primary hepatocytes · 68 citations · not verified against PDF (download failed; green OA but MIT DSpace 403; retry failed) #gap/no-fulltext-access · key finding (unverified): chronic rapamycin inhibits mTORC2, causing insulin resistance via Akt Ser473 dephosphorylation; mTORC2-specific deletion fails to extend lifespan, suggesting mTORC1 is the longevity-relevant target

[^laplante2012]: doi:10.1016/j.cell.2012.03.017 · review (Cell 2012) · n=N/A · 8286 citations · verified against PDF (locally downloaded) · key context: comprehensive review of mTOR complex structure and signaling; confirms FKBP12-rapamycin binds mTORC1 but not mTORC2; notes that exactly how FKBP12-rapamycin inhibits mTOR kinase activity toward mTORC1 substrates "is unknown"; chronic rapamycin reduces mTORC2 assembly in some but not all cell types

[^mannick2014]: doi:10.1126/scitranslmed.3009892 · rct · model: elderly humans ≥65 yr, n=218 · 730 citations · not verified against PDF (closed-access; not_oa per archive) #gap/no-fulltext-access · Crossref abstract confirms only: "mTOR inhibition by RAD001 improves immune responses in elderly volunteers receiving an influenza vaccination" · specific effect sizes (~20% vaccine response improvement, infection incidence reduction) cited in wiki body text cannot be confirmed without full text
