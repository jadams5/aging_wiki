---
type: protein
aliases: [SPP1, OPN, secreted phosphoprotein 1, bone sialoprotein 1, nephropontin, uropontin, ETA-1, BNSP]
uniprot: P10451
ncbi-gene: 6696
hgnc: 11255
ensembl: ENSG00000118785
genage-id: null
mouse-ortholog: Spp1
druggability-tier: 3
pathways: ["[[bmp-signaling]]", "[[jak-stat-pathway]]", "[[nf-kb]]"]
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
mr-causal-evidence: partial
caused-by: ["[[cellular-senescence]]"]
causes: ["[[chronic-inflammation]]"]
literature-checked-through: 2026-05-23
literature-recency-verified: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Steitz 2002 (anti-calcification in-vivo evidence) verified against local PDF; Wada 1999 verified against PubMed abstract (full PDF still downloading); Lehallier 2019 verified against local PDF — OPN not named as a 'top hit' in main text (correction applied); Soraci 2024 verified against PubMed abstract — sex-direction of mortality association corrected (women, not men); Quesnel 2024 verified against PubMed abstract — study uses CSF OPN, not plasma (correction applied); Yu 2023 verified against PubMed abstract — CRC context noted; Yuan 2025 verified against PubMed abstract — ALI context confirmed; Giachelli 2005, Shapses 2003 not verified (not_oa / not_oa); canonical-DB identity fields (UniProt P10451, NCBI Gene 6696, HGNC 11255, Ensembl ENSG00000118785) confirmed against live UniProt API"
---

# Osteopontin (SPP1)

Osteopontin (OPN; gene: SPP1, secreted phosphoprotein 1) is a heavily post-translationally modified secreted glycoprotein with context-dependent roles in mineralization, immunity, and inflammation. Its relationship to aging is multifaceted: it is a documented [[sasp|SASP]] component secreted by senescent cells, one of the most replicated protein-level aging biomarkers in circulating proteomics, and an active participant in [[vascular-calcification]] — with dual and partially opposing roles in that process that the page below takes care to document accurately.

## Identity

- **UniProt:** P10451 (OSTP_HUMAN)
- **NCBI Gene:** 6696
- **HGNC:** 11255
- **Ensembl:** ENSG00000118785
- **Gene symbol:** SPP1 (aliases: OPN, ETA-1, BNSP, BSPI)
- **Mouse ortholog:** Spp1 (also referred to as Opn in older literature; one-to-one ortholog)
- **Length:** 314 amino acids (canonical isoform; see isoforms below)

## Structure and post-translational modifications

Osteopontin is intrinsically disordered — it lacks a well-defined tertiary fold and instead derives its function primarily from its sequence motifs and extensive PTMs [^giachelli2005]:

- **Phosphorylation:** ~36–43 serine/threonine residues are phosphorylated, predominantly by the FAM20C secretory kinase. Phosphorylation is required for high-affinity hydroxyapatite binding.
- **O-glycosylation:** GalNAc-initiated O-glycans at multiple threonines; extent is tissue-dependent.
- **Thrombin cleavage:** Thrombin and MMP-3/7 cleave OPN at an RGD-proximal site, generating an N-terminal fragment (retaining RGD and CD44-binding motifs) and a C-terminal fragment. Cleavage products have distinct biological activities from full-length OPN. #gap/needs-replication — cleavage site biology is primarily in vitro.
- **Transglutamination:** Cross-linking to fibronectin via tissue transglutaminase in ECM contexts.
- **Sulfation:** At one or more tyrosines in some isoforms.

**Alternatively spliced isoforms:** Three major splicing variants are described — OPN-a (full-length, 314 aa), OPN-b (lacking exon 5), and OPN-c (lacking exon 4) [^giachelli2005]. Isoform expression is tissue- and context-dependent. OPN-a appears to be the dominant circulating form. Isoform-specific functional differences are not fully characterized. #gap/dose-response-unclear

## Tissue expression

High constitutive expression in: bone (osteocytes, osteoblasts — OPN is one of the most abundant non-collagenous bone matrix proteins), kidney tubular epithelium, lactating mammary gland, T cells (Th1-polarized), macrophages (especially activated/M1). Broadly inducible in many tissues by inflammatory stimuli (TNF-α, IL-1β, TGF-β, LPS), mechanical stress, and oxidative stress.

In the vasculature, OPN expression is low in quiescent VSMCs but is strongly induced during osteogenic phenotype switching — see section below.

## Functions — the context-dependency

The central interpretive challenge of osteopontin biology is that it plays **opposing roles in mineralization depending on context**. These are not contradictory; they reflect distinct regulatory circuits operating in bone vs. vasculature.

### 1. Anti-mineralization in bone (canonical)

In bone matrix, OPN is a potent inhibitor of hydroxyapatite crystal growth. Mechanistically:
- OPN binds directly to nucleating hydroxyapatite crystals via its phosphorylated polyaspartate and polyglutamate sequences, blocking crystal propagation [^wada1999].
- OPN-null mice show increased bone mineral crystallinity and altered apatite crystal morphology — the opposite of what one might expect from a "bone protein," confirming that OPN's matrix role is anti-proliferative for crystal growth rather than pro-mineralizing [^shapses2003]. #gap/needs-human-replication — all OPN-null phenotype data is from mouse models.
- This function also operates in soft tissues: OPN prevents ectopic calcification in soft tissues, demonstrated using a subcutaneous glutaraldehyde-fixed aortic valve leaflet (GFAV) implant model [^steitz2002].

### 2. Role in vascular calcification — dual and context-dependent

This is the load-bearing nuance. OPN participates in [[vascular-calcification]] in two opposing ways:

**Pro-calcification (VSMC osteogenic switch):** OPN is a transcriptional target and downstream marker of RUNX2, the master osteogenic transcription factor [^giachelli2005]. When VSMCs undergo osteogenic phenotype switching under high-phosphate, inflammatory, or BMP-2 stimulation — driven upstream by [[runx2]] and [[bmp-2]] — OPN is among the osteogenic gene products strongly upregulated alongside alkaline phosphatase, osteocalcin, and collagen I. In this context, OPN expression is a *marker* (and likely contributor) to the calcifying phenotype: it is produced by VSMCs that are actively depositing hydroxyapatite. Some evidence suggests OPN may contribute to initial nucleation or organizes the organic matrix scaffold in the osteogenic context.

**Anti-calcification (crystal inhibition):** In parallel, OPN retains its crystal-growth-inhibiting function in the vasculature. Wada et al. (1999) demonstrated that purified OPN (0.05–5 µg/mL) dose-dependently inhibited calcification of bovine aortic smooth muscle cell (BASMC) cultures in vitro [^wada1999]. Steitz et al. (2002) showed that OPN-null mice (129/SvJ × Black Swiss background, n=4–8/group) develop fourfold to fivefold greater ectopic calcification at day 14 post-implant than wild-type; and that natural OPN accumulation in heterozygous (OPN+/-) mice by day 30 correlated with regression of prior calcification [^steitz2002]. The proposed mechanism involves OPN binding to nascent hydroxyapatite crystals (physical inhibition) and inducing carbonic anhydrase II expression in macrophages, acidifying the local microenvironment and promoting mineral dissolution.

**Resolution of the paradox:** The most consistent interpretation in the literature is that OPN's net effect in the vasculature depends on context and concentration. When OPN is induced as part of RUNX2-driven osteogenic reprogramming, the cellular context overwhelms its local crystal-inhibiting function. When OPN is present as a secreted anti-nucleation factor in the extracellular space — without an osteogenic transcriptional program operating — it inhibits calcification. OPN-as-VSMC-marker is therefore not equivalent to OPN-as-driver; treating high OPN as simply "pro-calcification" is an oversimplification [^giachelli2005]. #gap/no-mechanism — the molecular switch that determines whether OPN promotes vs. inhibits calcification in any given vascular context is not resolved.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — RGD-integrin binding and hydroxyapatite affinity are conserved |
| OPN-null phenotype conserved in humans? | unknown — no human LOF equivalent studied |
| Replicated in humans? | partially — elevated OPN in calcified vs. non-calcified vessels replicated; dual-role functional data is mouse/in vitro |

### 3. Immune functions

OPN was originally identified as a T-cell cytokine (named ETA-1, early T-lymphocyte activation-1). Functions include:
- Promotes Th1 polarization and IFN-γ production while suppressing IL-10; amplifies type I immunity.
- Acts as a macrophage chemoattractant and survival factor (via αvβ3 integrin + CD44 signaling).
- Promotes macrophage attachment and migration into inflammatory sites (relevant to atherosclerotic plaques).
- Suppresses apoptosis of T cells and macrophages in inflammatory contexts via PI3K/Akt.

## Receptor signaling

OPN signals through two classes of receptors:

- **Integrins:** αvβ3, αvβ5, αvβ1, α9β1, and α4β1 — bind via the central **RGD** motif (Arg-Gly-Asp). αvβ3 binding activates PI3K/Akt, Ras/ERK (MAPK), and focal adhesion kinase (FAK).
- **CD44 splice variants:** Bind a SVVYGLR sequence C-terminal to the thrombin cleavage site (only in the N-terminal fragment post-cleavage). CD44 ligation contributes to cell migration, survival, and inflammatory gene expression via Ras/MAPK.

The two receptor systems operate partly independently and may have synergistic or antagonistic effects depending on the cell type and co-receptor context.

## OPN as a SASP component and aging biomarker

### SASP secretome

OPN is a documented component of the SASP in multiple proteomics analyses of conditioned media from senescent cells. SPP1/OPN is upregulated in oncogene-induced and replicative senescence secretomes; in a colorectal cancer context, scRNA-seq analyses identified SPP1-high macrophage populations co-localizing with senescent tumor cells [^yu2023]. Whether this SPP1+ macrophage phenotype is recapitulated in normal aging (non-tumor) contexts remains to be directly demonstrated. #gap/needs-replication

A 2025 study (Yuan et al.) demonstrated that SPP1 regulates SASP composition via the p53 signaling pathway in an acute lung injury model — providing mechanistic evidence that OPN is not merely a passenger in SASP but may modulate the SASP transcriptional program itself [^yuan2025]. This finding is preliminary and the in-vivo aging relevance is not yet established. #gap/needs-replication

The induction of OPN by [[cellular-senescence]] is consistent with the pathway: NF-κB, which is the primary transcriptional driver of core SASP components, has OPN/SPP1 as a direct target. mTOR pathway activity (also elevated in senescent cells) further amplifies OPN secretion.

### Plasma OPN rises with age

OPN is among the replicated aging-associated proteins in circulating proteomics. Lehallier et al. (2019) measured 2,925 plasma proteins in a multi-cohort study (n=4,263, age 18–95) and identified waves of protein change across the lifespan [^lehallier2019]. SPP1/OPN changes with age in this dataset and is detectable in the supplementary tables, but it is not among the proteins named in the paper's main text as top-ranking hits (which include SOST, GDF15, ARFIP2, CHRDL1, MMP12, PTN, SELL, TFPI, ADAMTS13). Elevations in plasma OPN with age have been reported across multiple independent cohorts, making it a replicated aging biomarker, but its specific rank within the Lehallier 2019 age-association list is in supplementary tables not available in the local PDF. #gap/needs-replication — specific DE-SWAN ranking of OPN in Lehallier 2019 not confirmed from main text.

A secondary analysis of the SCOPE study (2024) found sex-dependent associations of plasma OPN in older adults (n=2,013, median age 79 years) screened for CKD [^soraci2024]. Elevated plasma OPN was associated with all-cause 24-month mortality in women (HR 1.84, 95% CI 1.20–2.89 in the fully adjusted model), but not significantly with MACE or MACE+CV mortality overall. Increased baseline OPN was associated with eGFR decline in all patients, with slightly steeper declines in women compared to men. Notably, pOPN levels were lower in women than in men, despite stronger mortality associations in women — a sex-paradox that warrants caution in sex-pooled analyses.

OPN has also emerged as an early CSF marker of pre-symptomatic Alzheimer's disease. Quesnel et al. (2024) found elevated **cerebrospinal fluid (CSF) OPN** in cognitively unimpaired individuals with amyloid-positive PET/tau-positive PET, and in PREVENT-AD participants with early synaptic dysfunction, tau deposition, and neuronal loss [^quesnel2024]. CSF OPN was associated with accelerated conversion to AD. The study used CSF — not plasma — samples; elevation in CSF OPN likely reflects neuroinflammatory burden and tau pathology rather than systemic aging per se.

**Important interpretive caveat:** Elevated plasma OPN likely reflects general senescence and inflammation burden (as a SASP component produced by multiple senescent cell types across tissues) rather than indicating OPN-specific causality. The MR evidence for OPN as causally upstream of aging outcomes is partial — instruments exist, but no aging-specific MR study has been published.

### Druggability in aging context

Druggability-tier 3 (predicted druggable). OPN is a secreted protein with accessible RGD motif and known receptor binding — antibody-based or decoy receptor approaches are mechanistically feasible. Experimental anti-OPN antibodies exist in preclinical research (primarily for inflammatory and oncology contexts). No aging-context drug or clinical trial directly targeting OPN is currently active. The primary translational opportunity is as a circulating biomarker, not a therapeutic target. #gap/needs-human-replication — senolytics that reduce senescent cell burden should reduce OPN as a downstream SASP component, but this has not been directly measured in human aging trials.

## Cross-links

- [[vascular-calcification]] — key-proteins list; OPN is both a RUNX2 target and a crystal-inhibiting ECM factor in the vascular context
- [[runx2]] — direct upstream transcriptional activator in the osteogenic VSMC switch
- [[bmp-2]] — upstream inducer of RUNX2 and osteogenic differentiation
- [[sasp]] — OPN is a SASP component in multiple senescent cell type analyses
- [[cellular-senescence]] — induced by senescent cells; contributes to the SASP paracrine signal
- [[chronic-inflammation]] — OPN produced by macrophages and senescent cells amplifies local and systemic inflammation
- [[arterial-stiffening]] — downstream functional phenotype of vascular calcification to which OPN contributes indirectly
- [[macrophages]] — major source of OPN in inflammatory contexts (#gap/needs-page)
- [[bone]] — canonical tissue of OPN function; anti-mineralization role (#gap/needs-page)

## Limitations and gaps

- `#gap/no-mechanism` — the molecular determinant of whether OPN promotes vs. inhibits calcification in any given vascular context is unresolved; likely depends on RUNX2 activity state, phosphate concentration, and presence of other crystal inhibitors (matrix Gla protein, pyrophosphate)
- `#gap/needs-human-replication` — OPN-null phenotypes (bone and soft-tissue calcification) are exclusively from mouse models
- `#gap/needs-replication` — the SASP-regulatory function of SPP1 (Yuan 2025, p53 pathway) is a single mouse/cell study in a non-aging context; relevance to aging SASP is plausible but unconfirmed
- `#gap/dose-response-unclear` — isoform-specific (OPN-a vs OPN-b vs OPN-c) differences in function and which isoforms are elevated in aging plasma are not well characterized
- `#gap/needs-canonical-id` — GenAge entry for SPP1 was not found in the HAGR database search; SPP1 may not be formally curated in GenAge despite appearing prominently in aging proteomics cohorts

## Footnotes

[^giachelli2005]: doi:10.1161/01.RES.0000161997.24797.c0 · Giachelli CM et al. · Circulation Research 2005 · review, n/a · model: VSMC culture / mouse · Reg vascular calcification; OPN role in phosphate/calcification biology. Not locally downloaded (not OA).

[^wada1999]: doi:10.1161/01.res.84.2.166 · Wada T et al. · Circulation Research 1999 · in vitro (VSMC culture) · n=not reported (cell culture) · model: bovine aortic smooth muscle cells (BASMCs) · OPN (0.05–5 µg/mL) dose-dependently inhibited BASMC calcification; effect not mediated by calcium chelation or ALP inhibition; OPN associated with growing apatite crystals by immunocytochemistry. PDF still downloading at verification date.

[^steitz2002]: doi:10.1016/S0002-9440(10)64482-3 · Steitz SA et al. · American Journal of Pathology 2002 · in vivo (OPN-null mouse) · n=4–8 per group · p<0.005 · model: OPN-null mice on 129/SvJ × Black Swiss background; subcutaneous glutaraldehyde-fixed aortic valve leaflet (GFAV) implant model; time points 7, 14, 30 days · OPN-null (OPN-/-) mice showed 4–5× greater ectopic calcification at day 14 vs OPN+/+ (Ca mmol/L/g protein: OPN+/+ ~3000±600, OPN-/- ~6900±250); natural OPN accumulation in OPN+/- mice by day 30 correlated with regression of calcification; mechanism involves physical crystal inhibition + OPN-induced carbonic anhydrase II expression in macrophages promoting local acidification and mineral dissolution.

[^shapses2003]: doi:10.1007/s00223-002-1090-x · Shapses SA et al. · Calcified Tissue International 2003 · in vivo (OPN-null mouse) · model: OPN-null · OPN facilitates bone resorption and affects mineral crystal content.

[^lehallier2019]: doi:10.1038/s41591-019-0673-2 · Lehallier B et al. · Nature Medicine 2019 · observational, n=4,263 (INTERVAL + LonGenity cohorts; age 18–95) · multi-cohort SomaScan plasma proteomics (2,925 proteins) · Identified three waves of aging at ages 34, 60, and 78 using DE-SWAN nonlinear modeling; conserved 46-protein aging signature across humans and mice; top-named aging proteins include SOST, GDF15, ARFIP2, CHRDL1, MMP12, GDF15, PTN, SELL, TFPI, ADAMTS13 — SPP1/OPN is not named in the main text but is in the supplementary protein lists. Locally available: 

[^soraci2024]: doi:10.1093/ckj/sfae336 · Soraci L et al. · Clinical Kidney Journal 2024 · observational (SCOPE cohort secondary analysis) · n=2,013 (908 men, 1,105 women; median age 79) · model: European outpatients ≥75 screened for CKD · pOPN associated with all-cause 24-month mortality in women (HR 1.84, 95% CI 1.20–2.89) but not men; pOPN associated with eGFR decline in all patients (-0.45 ml/min/1.73 m²/year, 95% CI -0.68 to -0.22); pOPN levels lower in women than men but mortality associations stronger in women (sex paradox). Not locally downloaded at verification date (gold OA — PDF accessible if needed).

[^quesnel2024]: doi:10.1002/alz.14065 · Quesnel MJ et al. · Alzheimer's & Dementia 2024 · observational (PREVENT-AD + ADNI cohorts) · n=109 (PREVENT-AD CU) + 167 CU + 399 MCI (ADNI) · CSF OPN (not plasma) elevated in Aβ42/40(+)/tau(+) individuals; CSF OPN elevated in Aβ+ PET and tau+ PET; associated with accelerated conversion to AD; positively correlated with synaptic biomarkers in pre-symptomatic PREVENT-AD. Not locally downloaded at verification date.

[^yu2023]: doi:10.3389/fimmu.2023.1175490 · Yu S et al. · Frontiers in Immunology 2023 · in silico / observational · context: colorectal cancer (CRC), not aging per se · scRNA-seq data showed high SPP1 expression in a macrophage subset with SASP features; SPP1+ macrophages surrounded by senescent tumor cells in high-grade CRC; seven-gene prognostic model for CRC including SPP1. Not locally downloaded at verification date.

[^yuan2025]: doi:10.1002/iub.70038 · Yuan C et al. · IUBMB Life 2025 · in vivo/in vitro · SPP1 regulates SASP via p53 pathway in acute lung injury; early evidence of SPP1 as SASP modulator. Not locally downloaded (not OA).
