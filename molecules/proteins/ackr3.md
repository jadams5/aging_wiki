---
type: protein
aliases: [CXCR7, RDC1, CMKOR1, GPR159, atypical chemokine receptor 3, "former CXCR7"]
uniprot: P25106
ncbi-gene: 57007
hgnc: 23692
ensembl: ENSG00000144476
genage-id: null
pathways: ["[[cxcl12-cxcr4-pathway]]", "[[chemokine-signaling]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
sens-categories: []
key-domains: [seven-transmembrane-helical-domain, C-terminal-cytoplasmic-tail, beta-arrestin-recruitment-motif]
key-ptms: [N-linked-glycosylation-Asn-3-sites, disulfide-Cys117-Cys196]
known-interactors: ["[[cxcl12]]", "[[cxcr4]]", "[[beta-arrestin2]]"]
complex-subunits: []
is-noncoding-rna: false
mouse-ortholog: Ackr3
druggability-tier: 3
gtex-aging-correlation: "#gap/not-populated — GTEx tissue-by-age ACKR3 Spearman ρ not yet extracted; populate per sops/finding-tissue-expression.md"
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[altered-intercellular-communication]]"]
literature-checked-through: 2026-06-15
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "Rajagopal 2010 (PNAS) verified against full PDF (PMC2818968); Boldajipour 2008 (Cell) verified against PubMed abstract (closed-access; abstract sufficient for gradient-shaping claim); canonical IDs confirmed against UniProt, NCBI Gene, HGNC; Cui 2025 / Cao 2016 / Koch 2020 / Meyrath 2020-2021 / Sigmund 2023 / Ruths 2025 verified against Crossref metadata and PubMed abstracts; ACKR3 renaming year corrected from 2014 to 2013; ITAC vs CXCL12 migration-assay attribution corrected; rVSMC pERK caveat added"
---

# ACKR3 (formerly CXCR7)

Atypical chemokine receptor 3 (ACKR3), historically named CXCR7 and originally cloned as RDC1, is a seven-transmembrane receptor that binds the chemokine [[molecules/proteins/cxcl12|CXCL12 (SDF-1)]] with high affinity — but unlike classical chemokine receptors it does **not** couple to canonical G proteins. Instead ACKR3 acts primarily as a **ligand scavenger and decoy receptor**: it internalizes and degrades CXCL12, shaping the chemokine gradient that drives classical [[cxcr4]]-mediated signaling. Its sole confirmed intracellular output is β-arrestin recruitment; this drives MAPK (pERK) activation in overexpressing cell lines and β-arrestin-dependent migration in cells with endogenous ACKR3 expression, though MAPK induction in cells at physiological expression levels has not been demonstrated [^rajagopal2010]. ACKR3 also scavenges CXCL11, opioid peptides, and certain vasoactive peptides, revealing a broader "atypical" scavenging portfolio. In aging biology, ACKR3 is relevant through its gradient-shaping role in the bone marrow hematopoietic stem cell (HSC) niche, its prominence on vascular and lymphatic endothelial cells, and its participation in paracrine chemokine circuits that regulate tissue regeneration and inflammation.

## Identity

- **UniProt:** P25106 (ACKR3_HUMAN) — Swiss-Prot, manually reviewed
- **NCBI Gene ID:** 57007 (symbol: *ACKR3*)
- **HGNC:** 23692
- **Ensembl:** ENSG00000144476
- **Mouse ortholog:** *Ackr3* (MGI:109562; high conservation; null mice are viable but die perinatally due to ventricular septal defects)
- **Protein length:** 362 amino acids
- **Historical names:** CXCR7 (former HGNC-approved symbol, prior to renaming); RDC1 (original orphan-receptor clone); CMKOR1; GPR159. The current approved HGNC symbol *ACKR3* reflects the July 2013 renaming of atypical chemokine receptors as a distinct subfamily (ACKR1–4), distinguishing them from classical signaling GPCRs (HGNC `date_symbol_changed`: 2013-07-16).

## Key functional domains and post-translational modifications

- **Seven transmembrane (7-TM) helical bundle:** structurally similar to canonical GPCRs but with altered intracellular loop sequences that impair Gα-protein coupling
- **N-terminal extracellular domain:** contains the ligand-binding interface for CXCL12 and CXCL11; CXCL12 binds ACKR3 with ~10-fold higher affinity than CXCR4
- **C-terminal cytoplasmic tail (residues 324–362):** the primary docking site for β-arrestin2 after receptor phosphorylation by G-protein receptor kinases (GRKs); essential for constitutive internalization and intracellular trafficking
- **Disulfide bond:** Cys117–Cys196 (conserved in chemokine receptors; maintains tertiary structure)
- **N-linked glycosylation:** three sites; relevant to surface stability and trafficking

## Signaling mechanism: β-arrestin-biased decoy receptor

The defining biochemical property of ACKR3 is its **β-arrestin-biased signaling profile** — a form of functional selectivity in which the receptor is decoupled from G proteins and signals exclusively via β-arrestins. The foundational demonstration came from Rajagopal et al. 2010, who showed that CXCL12 and CXCL11 binding to CXCR7/ACKR3 fails to activate canonical G-protein outputs (cAMP suppression, IP3 generation, Ca²⁺ mobilization) but does recruit β-arrestin and activate MAPK through β-arrestin-dependent scaffolding in transiently transfected HEK293 cells [^rajagopal2010]. To test endogenous ACKR3 function, the authors turned to rat vascular smooth muscle cells (rVSMCs) that express high levels of CXCR7/ACKR3 and minimal CXCR4 or CXCR3. Critically, they used **ITAC (CXCL11)** — not CXCL12 — for the definitive β-arrestin siRNA experiment: CXCL12 (SDF-1α) binds both ACKR3 and CXCR4 in these cells, making it unsuitable to isolate ACKR3-specific effects. β-arrestin2 depletion by siRNA significantly attenuated ITAC-stimulated rVSMC migration (p<0.05), whereas β-arrestin1 depletion did not, indicating that β-arrestin2 is a genuine cell-biological transducer of ACKR3 in at least some cell types [^rajagopal2010]. **Important caveat:** in the same rVSMCs, MAPK (pERK) activation was not detected in response to either SDF-1α or ITAC, even after >48 h serum starvation; pERK induction was observed only in the overexpression (HEK293 transfection) context. The β-arrestin-dependent output in native rVSMCs was therefore cell migration, not MAPK activation [^rajagopal2010].

Three functional modes are attributed to ACKR3, with varying levels of support:

1. **Chemokine scavenging (primary, well-established):** ACKR3 constitutively internalizes CXCL12 via clathrin-coated pits, routing it to early endosomes and then lysosomes for degradation [^boldajipour2008]. This reduces extracellular CXCL12 concentration near ACKR3-expressing cells, creating a spatial sink that sharpens the chemokine gradient sensed by CXCR4-expressing cells migrating elsewhere.

2. **Gradient-shaping (well-established in vivo):** In a landmark zebrafish study, Boldajipour et al. 2008 demonstrated that CXCR7 expressed on somatic flanking cells acts as a chemokine sink for SDF-1α (the zebrafish ortholog of CXCL12), allowing the dynamic transcriptional changes in sdf-1a to be "mirrored by similar dynamics at the protein level" — i.e., ACKR3 scavenging clears chemokine rapidly when production ceases, sharpening temporal gradients. Primordial germ-cell migration along these gradients failed in CXCR7-loss-of-function conditions [^boldajipour2008].

3. **Independent β-arrestin signaling (cell-type-dependent; contested):** In transiently transfected HEK293 cells, ACKR3 β-arrestin recruitment drives pERK (MAPK) activation. In native endogenous systems (rat vascular smooth muscle cells), β-arrestin2 mediates ITAC-stimulated cell migration, but MAPK activation was not detected at all [^rajagopal2010]. Whether ACKR3 drives MAPK in native cells at physiological expression levels — as opposed to overexpression artifacts — is therefore unresolved. Koch & Engele 2020 note that ACKR3's function ranges "from a strictly silent scavenger receptor to an active and independent signaling receptor" depending on cellular context and expression level [^koch2020].

| Dimension | Status |
|---|---|
| β-arrestin-biased mechanism conserved in humans? | yes — demonstrated in human cell lines and endogenous human tissue |
| Scavenging/gradient-shaping conserved in humans? | yes — pharmacological and genetic evidence in multiple human cell types |
| Replicated independently? | yes — multiple independent groups across zebrafish, mouse, and human systems |

## Broad-spectrum scavenger function: beyond CXCL12

ACKR3's ligand scope extends beyond chemokines:

- **CXCL11:** a second endogenous chemokine ligand; binds ACKR3 with high affinity. CXCL11 is an interferon-γ-induced chemokine with roles in lymphocyte recruitment; ACKR3-mediated scavenging of CXCL11 may limit T-cell trafficking in inflammatory contexts.
- **Opioid peptides:** Meyrath et al. 2020 demonstrated that ACKR3 functions as "a broad-spectrum scavenger for opioid peptides," particularly enkephalins and dynorphins — endogenous ligands for μ, δ, and κ opioid receptors [^meyrath2020]. ACKR3-mediated scavenging reduces opioid peptide bioavailability at classical opioid receptors. A selective ACKR3 competitor peptide (LIH383) blocks this scavenging and potentiates endogenous opioid tone in vitro, suggesting a pharmacological strategy to enhance endogenous analgesia.
- **Proadrenomedullin N-terminal 20 peptides (PAMPs):** PAMP and its processed form PAMP-12 are agonists at ACKR3, triggering β-arrestin recruitment and receptor internalization without G-protein or ERK activation [^meyrath2021]. The classic adrenomedullin scavenging function sometimes attributed to ACKR3 is more nuanced: Sigmund et al. 2023 showed that adrenomedullin internalization in lymphatic endothelial cells is independent of ACKR3 under physiological conditions [^sigmund2023].

This broad ligand portfolio identifies ACKR3 as a multi-substrate "atypical" scavenger that titrates multiple extracellular signaling molecules simultaneously — a biologically important function distinct from its single-chemokine scavenging paradigm.

## Role in the hematopoietic stem cell niche

ACKR3 is expressed on bone marrow endothelial cells, hematopoietic progenitors, and certain stromal populations. Its scavenging function shapes the CXCL12 concentration gradient in the marrow in a manner complementary to, and partially opposed by, classical CXCR4-mediated niche retention [^koch2020]. The dominant model is:

- **CXCR4 on HSCs** senses CXCL12 gradients from CXCL12-abundant reticular (CAR) cells and stromal cells, retaining HSCs in the endosteal and perivascular niches (see [[molecules/proteins/cxcl12]]).
- **ACKR3 on endothelial cells and progenitors** scavenges CXCL12 locally, creating a concentration differential between sinusoidal and endosteal compartments that could direct HSC positioning or mobilization.

Whether ACKR3's scavenging promotes or restrains HSC mobilization in the aged marrow is not directly characterized. ACKR3 expression on neonatal/perinatal heart endothelium is critical for ventricular septum formation (Ackr3-null mice die at birth of ventricular septal defects), indicating that ACKR3 vascular function is essential from the earliest stages. Whether the same ACKR3-driven gradient shaping operates in aged bone marrow is an open question. #gap/needs-replication

## Vascular and endothelial roles: relevance to tissue regeneration

ACKR3 is highly expressed on vascular and lymphatic endothelial cells. In the pulmonary capillary niche, Cao et al. 2016 demonstrated that CXCR7/ACKR3 on pulmonary capillary endothelial cells "acts to prevent epithelial damage and ameliorate fibrosis" after repetitive lung injury [^cao2016]. Key findings:

- Repetitive lung injury suppresses CXCR7 expression on capillary endothelial cells
- Loss of CXCR7 promotes recruitment of VEGFR1-expressing perivascular macrophages that sustain fibrosis
- Administration of a CXCR7 agonist after injury promotes alveolar repair and reduces fibrosis

This finding positions ACKR3 as a **protective receptor on endothelium** whose downregulation contributes to maladaptive tissue responses — an observation with potential relevance to age-related decline in regenerative capacity. Whether ACKR3 expression on pulmonary or systemic vascular endothelium declines with age, or is downregulated by senescence-associated programs, is not established. #gap/needs-replication

| Dimension | Status |
|---|---|
| Vascular protective function conserved in humans? | partial — mouse and in vitro data; no human aging-specific endothelial data |
| Phenotype replicated in aging? | no — lung fibrosis model (repetitive injury, young mice); not aged-mouse model |
| Translatable to aging intervention? | unknown #gap/long-term-unknown |

## Pharmacology and aging-context druggability

**Aging-context tier 3 rationale.** ACKR3 is predicted druggable based on its 7-TM GPCR fold and demonstrated ligand-binding sites, but no clinical drug targets it for any indication as of 2026. Preclinical ACKR3 modulators include:

- **LIH383** — a peptidomimetic competitor of ACKR3's opioid-scavenging function; not in clinical development
- **CXCR7 agonists** (small molecules and peptides) — tested in pulmonary fibrosis models; no clinical-stage candidate
- **EPI-X4 derivatives** — an endogenous albumin-derived peptide; its optimized derivative JM#21 acts primarily as a CXCR4 antagonist and has secondary ACKR3-modulating activity; Ruths et al. 2025 showed CXCR4 (not ACKR3) is upregulated in osteoarthritis cartilage and that JM#21 reduces CXCL12-induced chondrocyte migration; ACKR3 expression was largely unchanged in OA in that study [^ruths2025]; preclinical only

No aging-validated probe exists; no ClinicalTrials.gov trials list ACKR3 as the primary target for an aging indication as of 2026-06-15. Tier 3 (predicted druggable, no aging-validated clinical probe) is appropriate.

`mr-causal-evidence: not-tested` — No Mendelian randomization study has used genetic instruments for *ACKR3* expression to test causal effects on aging-relevant outcomes. ACKR3 eQTLs exist in GTEx, making this feasible. #gap/needs-replication

## Pathway membership

- [[cxcl12-cxcr4-pathway]] (stub) — ACKR3 modulates this pathway by scavenging the CXCL12 ligand, reducing availability for CXCR4-mediated signaling
- [[chemokine-signaling]] (stub) — broader chemokine receptor context; ACKR3 is the prototype "atypical" subfamily member

## Key interactors

- [[molecules/proteins/cxcl12]] — primary chemokine ligand; bound with higher affinity at ACKR3 than at CXCR4; internalized and degraded
- [[cxcr4]] (stub) — the classical signaling counterpart; ACKR3 scavenging directly modulates the CXCL12 gradient available to CXCR4; the two receptors may also heterodimerize in some cell types
- [[beta-arrestin2]] (stub) — the sole canonical intracellular signal transducer; recruited upon ACKR3 activation; scaffolds MAPK activation in select contexts

## Limitations and gaps

1. **Aging-specific expression data absent.** No published GTEx or single-cell aging atlas study has characterized how ACKR3 expression changes with age across tissues. Given its prominence on endothelial cells, age-related endothelial dysfunction could involve ACKR3 downregulation — but this is uncharacterized. #gap/needs-replication

2. **HSC niche ACKR3 gradient function unquantified in aging.** While ACKR3 shapes CXCL12 gradients in development, its quantitative contribution to the aged bone marrow gradient (where CAR-cell CXCL12 secretion declines) is not directly measured. #gap/no-mechanism

3. **β-arrestin signaling scope unresolved.** Whether the MAPK-activating β-arrestin arm is a general ACKR3 property or a cell-type-specific gain-of-function remains contested across multiple published reviews [^koch2020]. The resolution requires isoform-specific and cell-type-matched studies. #gap/contradictory-evidence

4. **Opioid-scavenging and aging pain uncharacterized.** If ACKR3 scavenging of enkephalins/dynorphins affects endogenous analgesia, age-related changes in ACKR3 expression could contribute to altered pain perception in older adults — a hypothesis that has not been tested. #gap/needs-human-replication

5. **MIF-ACKR3 axis in cachexia newly identified.** Cui & Xiao 2025 (*Cell Metab*) identified ACKR3 as the primary MIF receptor in adipose stem and progenitor cells, mediating cancer-cachexia-related fat loss [^cui2025]. Whether this axis is relevant to aging-related sarcopenia/adipose atrophy is unknown — this is a newly opened research area. #gap/needs-replication

6. **Adrenomedullin scavenging contested.** Earlier literature attributed adrenomedullin scavenging to ACKR3; Sigmund et al. 2023 refuted this in lymphatic endothelial cells, showing AM internalization is ACKR3-independent at physiological concentrations [^sigmund2023]. Vasoactive peptide scavenging claims for ACKR3 should be interpreted cautiously.

## See also

- [[molecules/proteins/cxcl12]] — the primary ligand; wiki page documents the chemokine gradient biology from the ligand perspective
- [[cxcr4]] (stub) — the classical signaling receptor whose gradient is modulated by ACKR3 scavenging
- [[hallmarks/stem-cell-exhaustion]] — hallmark that ACKR3-shaped CXCL12 gradients may contribute to in aged bone marrow
- [[hallmarks/altered-intercellular-communication]] — ACKR3 scavenging shapes paracrine chemokine circuits
- [[hallmarks/chronic-inflammation]] — ACKR3 modulation of CXCL11 may affect inflammatory T-cell trafficking
- [[cell-types/hematopoietic-stem-cells]] (stub) — primary biology of HSCs; ACKR3 shapes the CXCL12 gradient that governs niche retention
- [[cxcl12-cxcr4-pathway]] (stub) — canonical signaling axis modulated by ACKR3

---

## Footnotes

[^rajagopal2010]: doi:10.1073/pnas.0912852107 · PMID 20018651 · Rajagopal S, Kim J, Ahn S, Craig S, Lam CM, Gerard NP, Gerard C, Lefkowitz RJ · *Proc Natl Acad Sci USA* 2010;107(2):628–632 · in-vitro (transiently transfected HEK293 cells) + in-vivo (rat vascular smooth muscle cells with endogenous CXCR7) · Foundational demonstration that CXCR7/ACKR3 is β-arrestin-biased: neither CXCL12 nor CXCL11 activates G-protein outputs (cAMP, IP3, Ca²⁺) but both recruit β-arrestin2 and activate MAPK in transfected HEK293 cells; in native rat VSMCs, β-arrestin2 siRNA significantly attenuates ITAC (CXCL11)-stimulated migration (p<0.05; β-arrestin1 siRNA had no effect); pERK was NOT detected in native rVSMCs with either ligand even after >48 h serum starvation (Fig. S1) — pERK induction is an overexpression-context finding only

[^boldajipour2008]: doi:10.1016/j.cell.2007.12.034 · PMID 18267076 · Boldajipour B, Mahabaleshwar H, Kardash E, Reichman-Fried M, Blaser H, Minina S, Wilson D, Xu Q, Raz E · *Cell* 2008;132(3):463–473 · in-vivo (zebrafish, loss-of-function) · CXCR7 on somatic flanking cells acts as a chemokine sink for SDF-1α; constitutive internalization allows transcriptional dynamics to be mirrored at the protein level; required for correct primordial germ cell migration along CXCL12 gradients; establishes gradient-shaping as the primary in-vivo CXCR7 function

[^koch2020]: doi:10.1124/molpharm.120.000056 · PMID 32883765 · Koch C, Engele J · *Mol Pharmacol* 2020;98(5):577–585 · review · Comprehensive critical review of ACKR3/CXCR7 biology; positions the receptor's function across a spectrum from "strictly silent scavenger" to "active independent signaling receptor"; attributes cell-type-dependence as the resolution to apparent contradictions in the field

[^meyrath2020]: doi:10.1038/s41467-020-16664-0 · PMID 32561830 · Meyrath M, Szpakowska M, Zeiner J, Massotte L, Merz MP, Benkel T, Simon K, Ohnmacht J, Turner JD, Krüger R, Seutin V, Ollert M, Kostenis E, Chevigné A · *Nat Commun* 2020;11(1):3033 · in-vitro (pharmacological ligand profiling; mouse opioid neuroscience) · ACKR3 functions as a broad-spectrum scavenger for endogenous opioid peptides (enkephalins, dynorphins); LIH383 selectively competes for ACKR3 opioid scavenging and potentiates endogenous opioid tone; extends ACKR3 ligand scope beyond chemokines

[^meyrath2021]: doi:10.1021/acsptsci.1c00006 · PMID 33860204 · Meyrath M, Palmer CB, Reynders N, Vanderplasschen A, Ollert M, Bouvier M, Szpakowska M, Chevigné A · *ACS Pharmacol Transl Sci* 2021;4(2):813–823 · in-vitro (pharmacological; β-arrestin recruitment assay) · PAMP and PAMP-12 are agonists of ACKR3 with high potency; trigger β-arrestin recruitment and internalization without G-protein or ERK activation; extend atypical scavenging portfolio to vasoactive peptides

[^sigmund2023]: doi:10.1371/journal.pone.0285597 · PMID 37252916 · Sigmund EC, Bauer A, Jakobs BD, Tatliadim H, Tacconi C, Thelen M, Legler DF, Halin C · *PLoS One* 2023;18(5):e0285597 · in-vitro (human lymphatic endothelial cells) · Adrenomedullin internalization in lymphatic endothelial cells is independent of ACKR3 under physiological concentrations; canonical AM receptors (CALCRL + RAMP2/3) mediate AM responses; cautions against over-attribution of AM scavenging to ACKR3

[^cao2016]: doi:10.1038/nm.4035 · PMID 26779814 · Cao Z, Lis R, Ginsberg M, Chavez D, Shido K, Rabbany SY, Fong GH, Sakmar TP, Rafii S, Ding BS · *Nat Med* 2016;22(2):154–162 · in-vivo (mouse, repetitive lung injury model) + in-vitro · CXCR7/ACKR3 on pulmonary capillary endothelial cells prevents epithelial damage and fibrosis; repetitive injury suppresses CXCR7 expression; CXCR7 agonist administration after injury promotes alveolar repair and reduces fibrosis; positions ACKR3 as a protective endothelial receptor in tissue regeneration

[^cui2025]: doi:10.1016/j.cmet.2025.01.018 · PMID 40020680 · Cui Q, Xiao RP · *Cell Metab* 2025;37(4):954–970.e8 · in-vivo (mouse cancer cachexia model) · ACKR3 identified as the predominant MIF receptor in adipose stem and progenitor cells; adipose-progenitor-specific Ackr3 deletion markedly alleviates tumor-induced cachexia; opens MIF-ACKR3 axis as a new research thread in adipose atrophy; aging relevance not yet established

[^ruths2025]: doi:10.1186/s13075-025-03691-9 · PMID 41331944 · Ruths L et al. · *Arthritis Res Ther* 2025;27:222 · in-vitro (human OA cartilage / chondrocytes) · EPI-X4 derivative JM#21 acts primarily as a CXCR4 antagonist; also modulates ACKR3 activity; the paper's primary finding is CXCR4 upregulation in OA with ACKR3 expression largely unchanged; preserves chondrocyte function in vitro; preclinical only; note: the primary CXCL12-pathway target of JM#21 is CXCR4, not ACKR3
