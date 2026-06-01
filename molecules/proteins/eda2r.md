---
type: protein
aliases: [XEDAR, TNFRSF27, ectodysplasin A2 receptor, EDA2R]
uniprot: Q9HAV5
ncbi-gene: 60401
hgnc: 17756
ensembl: ENSG00000131080
genage-id: null
mouse-ortholog: Eda2r
pathways: ["[[nf-kb]]", "[[p53-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: "Top-ranked age-upregulated gene pan-tissue in GTEx v8 (Spearman ρ = 0.372, rank 1 in pan-tissue multi-tissue analysis, all solid tissues evaluated; Barbera et al. 2025 Fig. 1b). Also top-ranked composite cardiometabolic aging predictor across heart/liver/skeletal muscle/adipose in Arif et al. 2025 GTEx analysis. Tissue-specific ρ values not extracted per tissue — #gap/needs-gtex-quantification"
mr-causal-evidence: not-tested
caused-by: ["[[p53-pathway]]", "[[dna-damage-response]]"]
causes: ["[[chronic-inflammation]]"]
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Canonical identity (UniProt Q9HAV5/TNR27_HUMAN, NCBI Gene 60401, HGNC:17756, Ensembl ENSG00000131080, mouse ortholog Eda2r/245527) verified against live UniProt API and NCBI Gene. Barbera 2025 (Nat Commun) verified against full PDF — all central claims confirmed; gtex-aging-correlation ρ and pan-tissue rank corrected. Arif 2025 (GeroScience) verified against full PDF — study design corrected from 'meta-analysis' to primary GTEx transcriptomic analysis; EDA2R top cardiometabolic predictor ranking and AUC values added. Yan 2000 (Science) verified against full PDF — TRAF1/3/6 binding and two-amino-acid molecular switch confirmed. Tyshkovskiy 2026 claim treated as sourced per verified study page. Tanikawa 2010 (MCR) not verified — closed-access (not_oa); claims tagged. Bilgic 2023 (Nature) not verified — download still pending at verification time; claims tagged. Yang 2019 Biosci Rep (PMID 31829409) confirmed absent from page — retraction Aug 2024 correctly excluded."
---


# EDA2R (ectodysplasin A2 receptor / XEDAR / TNFRSF27)

EDA2R is a **TNF receptor superfamily (TNFRSF) member** whose expression is robustly upregulated with age across human and rodent tissues, making it one of the most consistently identified transcriptomic hallmarks of mammalian aging. Originally characterised in ectodermal development, its aging significance lies in its role as a **p53 transcriptional target** that drives downstream **NF-κB-dependent parainflammation** and, via its ligand EDA-A2, links systemic metabolic stress to skeletal muscle atrophy.

## Identity

| Field | Value |
|---|---|
| UniProt | Q9HAV5 (TNR27_HUMAN) |
| NCBI Gene | 60401 |
| HGNC symbol | EDA2R |
| Ensembl | ENSG00000131080 |
| Mouse ortholog | Eda2r (NCBI Gene 245527; X-linked in both species) |
| GenAge ID | not present |
| Chromosomal location | Xq12 |
| Protein length | 297 amino acids; 32.8 kDa |

## Structure and molecular biology

EDA2R is a **single-pass type III transmembrane protein**: the N-terminus is cytoplasmic, the C-terminus (residues 1–138) is extracellular. The ectodomain contains three **TNFR-Cys repeats** (multiple disulfide bonds) characteristic of the TNFRSF and mediating ligand binding. An N-linked glycosylation site at Asn74 is present [^uniprot-q9hav5].

**Ligand specificity.** The TNFRSF27 ectodomain binds specifically to the **EDA-A2 splice isoform** of ectodysplasin A (encoded by *EDA*) but not to EDA-A1 (which signals through EDAR/TNFRSF11A) [^yan2000]. A two-amino-acid molecular switch in EDA distinguishes which receptor isoform it engages.

**Intracellular signaling.** Upon EDA-A2 binding, EDA2R recruits **TRAF3 and TRAF6** adaptor proteins (plus TRAF1), activating the **NF-κB** and **JNK** pathways [^uniprot-q9hav5]. The NIK (NF-κB-inducing kinase, *MAP3K14*) arm of the non-canonical NF-κB pathway is the mechanistically characterised effector in skeletal muscle atrophy contexts [^bilgic2023].

**Alternative splicing.** Multiple protein isoforms exist via alternative splicing (NM_021783.5, NM_001199687.3, NM_001242310.1) — functional consequences not fully characterised.

## EDA2R as a p53 transcriptional target

Tanikawa et al. 2010 established that *EDA2R* is a **direct p53 target gene**: the *EDA2R* promoter contains a canonical p53-binding response element, p53 transactivates *EDA2R* expression in response to genotoxic stress, and EDA2R–EDA-A2 signalling contributes to the p53-dependent apoptosis programme [^tanikawa2010]. This places EDA2R downstream of the canonical [[p53-pathway]] → [[cellular-senescence]] / apoptosis axis, consistent with its upregulation in aging tissues where chronic p53 activation is sustained. #gap/no-fulltext-access (Tanikawa 2010 closed-access; claims not verified against full PDF)

| Dimension | Status | Notes |
|---|---|---|
| p53 response element in promoter | yes | Confirmed by ChIP and reporter assays in Tanikawa 2010 |
| Pathway conserved in humans? | yes | p53 → EDA2R transactivation shown in human cell lines |
| Phenotype conserved in non-human organisms? | partial | Mouse Eda2r expression increases with age; functional cascade demonstrated in cancer-cachexia models in mice [^bilgic2023] |

## Aging relevance

### Conserved transcriptomic aging marker

EDA2R/`Eda2r` is consistently listed among the top age-upregulated genes across tissues and species in large transcriptomic aging analyses:

- **Tyshkovskiy et al. 2026 (*Nature*):** `Eda2r` was identified as a conserved gene **upregulated with ageing and contributing to elevated mortality tAge** across a multi-species meta-dataset (11,165 transcriptomes; mouse, rat, macaque, human). It appears in the conserved upregulated set alongside [[gpnmb]], [[lgals3]], [[p21|Cdkn1a]], `Vsig4`, and `Cst7` — genes that are positively associated with chronological age, expected mortality, and negatively associated with maximum lifespan [^tyshkovskiy2026].
- **Barbera et al. 2025 (*Nature Communications*):** Demonstrated that **elevated EDA2R is a tissue-independent hallmark of aging** in humans and other species, including in accelerated aging models. Enhanced EDA2R signalling in muscle cells triggers **parainflammatory responses** resembling age-related muscle loss. Conditions including obesity, insulin resistance, and type-2 diabetes showed elevated circulating EDA-A2 ligand, and EDA2R receptor inhibition was proposed as a potential therapeutic target for age-associated pathologies [^barbera2025]. Note: the brief for this page described this paper as "Barbera et al. 2024" but the PMID 39988718 record confirms publication date February 23, 2025.
- **Arif et al. 2025 (*GeroScience*):** In a primary transcriptomic analysis of GTEx v8 data across 40 human tissues (young <40 vs aged >65 years), *EDA2R* was identified as the **top-ranked composite cardiometabolic aging predictor** (Fig. 5E; AUC 0.91 for composite cardiometabolic random-forest model), ranking above GDF15. EDA2R was consistently upregulated across cardiometabolic tissues (heart, liver, skeletal muscle, adipose), and correlated positively with age-related clinical markers including total cholesterol, C-reactive protein, body weight, and intima-media thickness via the SCAPIS-SciLifeLab longitudinal network model [^arif2025].

### EDA2R–NIK axis in muscle wasting and cachexia

The mechanistic pathway is best characterised in **skeletal muscle**:

- **Bilgic et al. 2023 (*Nature*):** Cancer-associated muscle atrophy (cachexia) is mediated by **tumour-secreted EDA-A2** acting on skeletal muscle EDA2R, activating **NIK (MAP3K14)** and the non-canonical NF-κB pathway, which in turn drives ubiquitin–proteasome-mediated protein degradation and muscle fibre atrophy. Blocking EDA2R or NIK in mouse cancer models attenuated cachexia-associated muscle loss [^bilgic2023]. Because EDA-A2/EDA2R signalling is upregulated during normal aging (without cancer), this NIK–NF-κB axis is a plausible **parainflammatory mediator of age-associated sarcopenia** as well. #gap/no-fulltext-access (Bilgic 2023 PDF download pending at verification time; claims not verified against full PDF)
- **Özen & Kir 2024 (*Trends in Molecular Medicine*):** Review formalising EDA2R–NIK as a conserved skeletal muscle pathophysiology pathway relevant to both cancer cachexia and age-associated muscle dysfunction [^ozen2024].

## Druggability (aging-context tier 3)

EDA2R is **predicted druggable** (tier 3) at the receptor-ligand interface. The Bilgic et al. 2023 data established proof-of-concept for EDA2R inhibition (soluble decoy receptor approach) in preclinical cancer cachexia — but no clinical-stage anti-EDA2R agent currently exists for any indication, and no aging-validated probe has been developed. Tier 3 reflects:
- Clear mechanistic rationale (EDA-A2/EDA2R/NIK axis drives atrophy/parainflammation)
- TNFRSF ectodomain as an established druggable class (precedent: denosumab against RANK-RANKL)
- No approved drug, no Phase ≥1 trial, no high-quality tool compound yet

#gap/no-aging-probe

## Pathway membership

- [[nf-kb]] — canonical and non-canonical NF-κB activation via TRAF3/TRAF6/NIK
- [[p53-pathway]] — transcriptional target of p53 (upstream regulator)

## Key interactors

- [[p53]] (upstream transcription factor — directly activates *EDA2R* expression)
- TRAF1, TRAF3, TRAF6 (intracellular adaptor proteins; NIK activation)
- EDA-A2 / EDA isoform A2 (cognate ligand; no dedicated wiki page yet)

## Parainflammation and hallmark connections

EDA2R connects to two aging hallmarks:

1. **[[chronic-inflammation]]** — EDA2R-NIK-NF-κB signalling induces pro-inflammatory gene expression in skeletal muscle and likely other tissues; the Barbera et al. 2025 paper frames this as "parainflammation" — a low-grade, chronic inflammatory state intermediate between homeostatic signalling and full inflammatory activation, characteristic of aged tissues.
2. **[[cellular-senescence]]** — EDA2R is a p53 transcriptional target; p53 chronically activated in senescent cells would continuously drive *EDA2R* transcription, potentially amplifying SASP-adjacent parainflammatory signalling in and around senescent cells.

The Tyshkovskiy 2026 data show `Eda2r` upregulated across species and interventions in a pattern consistent with both hallmarks — it tracks with inflammation modules (upregulated in chronic disease models, not significantly reversed by caloric restriction in the published module analysis).

## Gaps and open questions

- **Causality unresolved.** All current human evidence is associational (transcriptomic upregulation in aging cohorts). Whether elevated EDA2R *drives* age-associated parainflammation and sarcopenia or is a downstream consequence of p53 activation or other aging stressors is untested in a human context. No Mendelian-randomization study has been published. #gap/no-mechanism
- **`mr-causal-evidence`** not yet populated. #gap/needs-population-evidence
- **GTEx quantification absent.** Tissue-specific Spearman ρ across age from GTEx v10 has not been extracted for this page. #gap/needs-gtex-quantification
- **GenAge exclusion.** EDA2R is not in the GenAge human aging gene database — possibly reflecting its recent emergence as an aging gene rather than an absence of evidence; recommend submission to HAGR for review. #gap/unsourced
- **X-linkage and sex differences.** Both *EDA2R* (human) and *Eda2r* (mouse) are X-linked. Whether aging-associated upregulation shows sex-differential patterns (e.g., due to X-inactivation escape in females) is unstudied. #gap/needs-replication
- **EDA2R isoform biology.** Three splice isoforms exist; which is the dominant form in aged skeletal muscle and whether isoform ratios shift with age is unknown. #gap/unsourced

## Related pages

[[p21]] · [[gpnmb]] · [[lgals3]] · [[p53]] · [[nf-kb]] · [[chronic-inflammation]] · [[cellular-senescence]] · [[transcriptomic-clock-tage]] · [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · [[sarcopenia]]

## Footnotes

[^uniprot-q9hav5]: UniProt Q9HAV5 (TNFRSF27_HUMAN), reviewed entry, accessed 2026-05-29 · Swiss-Prot curated · 297 aa, 32,759 Da · transmembrane topology, TNFR-Cys repeats, TRAF1/3/6 binding, HGNC:17756, NCBI Gene 60401

[^yan2000]: doi:10.1126/science.290.5491.523 · Yan M et al. · *Science* 2000 · n=biochemical · in-vitro · model: recombinant EDA isoforms + receptor binding · defines the two-amino-acid molecular switch between EDA-A1/EDAR and EDA-A2/XEDAR specificity · locally downloaded

[^tanikawa2010]: doi:10.1158/1541-7786.MCR-09-0484 · Tanikawa C, Rizzo C, Kumar V, Nakamura Y, Matsuda K · *Molecular Cancer Research* · 2010 · in-vitro · p53 ChIP + reporter assays in human cell lines · establishes *EDA2R* as a direct p53 transcriptional target with a canonical p53-response element in the promoter · not OA; not in local archive

[^bilgic2023]: doi:10.1038/s41586-023-06047-y · Bilgic SN, Domaniku A, Toledo B, et al. · *Nature* · 2023 · in-vivo (mouse) + mechanistic · cancer cachexia models; EDA2R-NIK axis in skeletal muscle; blockade attenuates atrophy · 87 citations; in archive (download pending)

[^barbera2025]: doi:10.1038/s41467-025-56918-3 · Barbera MC, Guarrera L, Re Cecconi AD, et al. (20 authors) · *Nature Communications* · 2025 · vol 16(1):1898 · PMID 39988718 · observational (human cohorts) + mechanistic (cell / rodent) · EDA2R elevated tissue-independently across aging and in accelerated-aging models; EDA-A2 elevated in obesity/insulin-resistance/T2D; parainflammatory muscle signalling · impact score 0.87 (99th percentile); locally downloaded (PDF available at DOI lookup)

[^ozen2024]: doi:10.1016/j.molmed.2024.02.002 · Özen SD, Kir S · *Trends in Molecular Medicine* · 2024 · PMID 38443222 · review · EDA2R–NIK signalling in skeletal muscle pathophysiology; cancer cachexia and aging muscle framed together · 16 citations; closed-access

[^arif2025]: doi:10.1007/s11357-025-01672-z · Arif M, Lehoczki A, Hasko G, Lohoff FW, Ungvari Z, Pacher P · *GeroScience* · 2025 · pp 5917–5936 · PMID 40295347 · primary transcriptomic analysis (GTEx v8; 40 tissues; young <40 vs aged >65 years) + co-expression network + random-forest ML · *EDA2R* top-ranked composite cardiometabolic aging predictor (composite AUC 0.91); #1 in feature-importance ranking above GDF15; positively correlated with cardiometabolic clinical markers in SCAPIS-SciLifeLab longitudinal network · locally downloaded

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · Tyshkovskiy A et al. · *Nature* · 2026 · doi:10.1038/s41586-026-10542-3 · n=11,165 transcriptomes, 4 species · meta-analysis + new RNA-seq · `Eda2r` in conserved upregulated aging/mortality gene set; verified wiki page
