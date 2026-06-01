---
type: protein
aliases: [hepatocyte growth factor, scatter factor, SF, HPTA, F-TCF, hepatopoietin-A]
uniprot: P14210
ncbi-gene: 3082
hgnc: 4893
ensembl: ENSG00000019991
genage-id: null
pathways: ["[[hgf-met-signaling]]", "[[pi3k-akt-pathway]]", "[[ras-mapk]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Koike 2025 and Birchmeier 2003 verified against local PDFs; Tu 2020 abstract+intro verified against local PDF (key claims confirmed); Rodgers 2017 verified against PubMed abstract only (gold OA but PDF download failed); Nakamura 1989 and Trusolino 2010 unverifiable (not_oa and download-failed respectively); canonical IDs re-confirmed against UniProt P14210 and NCBI Gene 3082"
---

# HGF (hepatocyte growth factor)

A secreted, multifunctional growth factor and the sole known ligand for the c-MET receptor tyrosine kinase. HGF is produced primarily by mesenchymal cells and drives epithelial proliferation, motility, morphogenesis, and regeneration across multiple tissues (liver, kidney, skeletal muscle, neural). With age, HGF signalling tone declines in several tissues and niche environments, impairing stem-cell activation and tissue repair. The receptor ([[c-met]]) is independently an oncogene — chronic HGF-MET stimulation is pro-tumorigenic, which limits therapeutic enthusiasm for HGF agonism in aging contexts.

> **Note on Dihexa:** The compound [[dihexa]] was framed in promotional contexts as an "HGF mimetic" based on the 2014 Benoist et al. paper. That paper has been **retracted**; the surviving McCoy 2013 primary source attributes c-Met mechanism to "unpublished data." The Dihexa-HGF mechanistic link is therefore **not on secure footing**. The present HGF page describes HGF biology as it stands in the literature and is not an endorsement of the Dihexa mechanism claim. See [[dihexa]] for the full retraction context.

## Identity

- **UniProt:** P14210 (HGF_HUMAN) — manually reviewed (Swiss-Prot)
- **NCBI Gene:** 3082
- **HGNC:** 4893 (symbol: HGF)
- **Ensembl:** ENSG00000019991
- **Gene locus:** 7q21.11
- **Mouse ortholog:** *Hgf* (one-to-one; ~90% protein sequence identity)
- **Length:** 728 amino acids (full precursor, canonical isoform)
- **GenAge ID:** null — HGF is not in the GenAge curated aging-gene database as of 2026-05-09 #gap/needs-canonical-id

## Domain architecture and processing

HGF is synthesized as a single-chain 728-aa inactive precursor (pro-HGF). Proteolytic activation by **HGF activator (HGFA)**, matriptase (ST14), or hepsin cleaves at Arg494-Val495, releasing a disulfide-linked two-chain active heterodimer [^birchmeier2003]:

- **Alpha-chain (~60 kDa):** N-terminal domain (N) + four Kringle domains (Kringle 1–4). Birchmeier 2003 designates this domain simply "N" (amino-terminal); it contains the main receptor-binding site. Kringle domains mediate heparan-sulfate proteoglycan (HSPG) binding, concentrating HGF in the extracellular matrix near target cells.
- **Beta-chain (~30 kDa):** Serine-protease-fold but **enzymatically inactive** — the catalytic triad residues are replaced; the fold is retained purely for receptor engagement.
- **Interchain linkage:** single disulfide bond (Cys487–Cys604 in canonical numbering) connecting the chains.

The NK4 splice isoform (N-terminal domain + all 4 Kringle domains, lacking the beta-chain) acts as a **competitive antagonist** of full-length HGF at c-MET and also as an anti-angiogenic agent. #gap/needs-replication — therapeutic NK4 antagonism in aging contexts has not been tested.

## Receptor and downstream signalling

**Receptor: c-MET** (encoded by the *MET* proto-oncogene; see [[c-met]]). c-MET is a single-pass receptor tyrosine kinase expressed on epithelial, endothelial, and stem cells.

Activation cascade [^trusolino2010]:

```
HGF (two-chain active form)
  → binds c-MET extracellular Sema + PSI domains
  → receptor homodimerization → transautophosphorylation of Tyr1234/1235 in kinase activation loop
  → recruitment of Gab1 (docking platform) + Grb2 adaptor
    ↓
  PI3K → AKT → mTORC1 / FOXO → survival, protein synthesis, autophagy inhibition
  RAS → RAF → MEK → ERK → proliferation, motility
  PLC-γ → PKC, Ca2+ → motility, morphogenesis
  STAT3 → transcription → survival, EMT
```

The Gab1 scaffold is the key HGF/MET-specific node; Birchmeier 2003 establishes Gab1 as "the most crucial substrate for Met signalling," enabling the sustained ERK/MAPK and PI3K activation that produces qualitatively different (morphogenetic, "branching tubulogenesis") outputs versus signals from other growth-factor receptors [^birchmeier2003].

## Biological functions

- **Mitogen:** Originally identified as a potent hepatocyte mitogen; effective at ~1 ng/ml in vitro [^nakamura1989].
- **Scatter factor (motogen):** Causes epithelial cells to dissociate and migrate — independently discovered as "scatter factor" before identity with HGF was established.
- **Morphogen:** Induces branching tubulogenesis in epithelial cells in 3D collagen gels (canonical "tubulogenesis assay").
- **Anti-apoptotic:** PI3K-AKT activation promotes survival; relevant in hepatic and neural injury contexts.
- **Angiogenic:** Promotes endothelial migration and tube formation.
- **Sources:** Primarily secreted by mesenchymal/stromal cells — fibroblasts, mesenchymal stem cells (MSCs), Kupffer cells (liver), smooth-muscle cells. Paracrine/endocrine signalling to epithelial targets.

## Role in aging and regeneration

### Tissue regeneration and the stem-cell niche

HGF-MET signalling is required for efficient activation of several adult stem cell populations:

**Skeletal muscle satellite cells:** Koike et al. (2025) used scRNA-seq in young (8-week-old) and aged (24-month-old) C57BL/6J male mice to identify the **Mac_1** macrophage subpopulation as the key driver of satellite-cell (MuSC) proliferation during muscle regeneration. Mac_1 interacts with MuSCs via HGF/c-MET signalling and suppresses **Cdkn1b** (p27Kip1, a cell-cycle brake) in MuSCs, thereby inducing their proliferation. With aging, HGF expression is downregulated in macrophages of regenerating muscle and Mac_1 proliferative capacity is reduced, impairing regeneration. Administration of exogenous HGF (0.5 μg/day every other day) to aged or macrophage-depleted mice partially rescued the regenerative defect [^koike2025]. #gap/needs-replication — single study in male C57BL/6J only; mechanistic confirmation and human evidence needed.

**G_Alert priming:** HGFA (the serine protease that cleaves pro-HGF into active HGF) is released systemically following injury and primes distant skeletal muscle stem cells (MuSCs) and fibro-adipogenic progenitors (FAPs) into a heightened "G_Alert" state that accelerates tissue repair response [^rodgers2017]. Administering active HGFA to animals is sufficient to induce G_Alert in stem cells throughout the body. This systemic priming mechanism implies HGF tone can influence regenerative potential at sites remote from injury. #gap/needs-human-replication

**Werner syndrome / premature aging:** Gene correction of the WRN (Werner helicase) mutation in mesenchymal stem cells restores HGF secretion and PI3K/AKT-mediated angiogenic capacity — linking stromal HGF insufficiency to at least one progeroid aging phenotype [^tu2020].

### Altered intercellular communication in aging

HGF is a secreted paracrine factor whose signalling tone reflects the health of the mesenchymal niche. In the context of [[altered-intercellular-communication]] (a recognized hallmark), impaired stromal HGF production represents a loss of pro-regenerative signal from the niche — mechanistically similar to SASP-driven pro-inflammatory signalling in senescent cells, but in the opposite direction (loss of trophic, gain of inflammatory).

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | HGF and c-MET are highly conserved vertebrate proteins; human HGF activates mouse c-MET and vice versa |
| Phenotype conserved in humans? | partial | Satellite cell decline + impaired muscle regeneration well documented in human aging, but direct HGF-MET causation not established |
| Replicated in humans? | no | No RCT or MR study testing HGF-MET as a causal driver of aging-associated regenerative decline in humans |

#gap/needs-human-replication — HGF's role in human aging is largely inferred from model-organism data and disease-state studies.

### Caution: oncogenic context

c-MET is a proto-oncogene. Somatic *MET* amplification, *MET* exon 14 skipping mutations, and paracrine HGF overexpression in tumour stroma are driver alterations in lung, gastric, renal, and brain cancers [^trusolino2010]. Chronic systemic elevation of HGF or c-MET agonism carries a real cancer-promotion risk. This is the primary safety concern for any proposed HGF-mimetic therapeutic in aging, including the contested [[dihexa]] mechanism.

## Druggability

**Aging-context tier 2 rationale.** Multiple c-MET inhibitors are FDA-approved for oncology indications (capmatinib/Tabrecta for METex14-mutant NSCLC, 2020; tepotinib/Tepmetko for METex14 NSCLC, 2021; savolitinib in combination regimens). Anti-HGF monoclonal antibodies (ficlatuzumab, rilotumumab) and bispecific antibodies (amivantamab — EGFR+MET, FDA 2021 for NSCLC) are available. However, **no HGF agonist or c-MET activating agent exists for an aging or regenerative medicine indication** — the approved pharmacology runs entirely in the inhibitory direction (oncology). Native recombinant HGF (VM202 DNA plasmid encoding HGF) has been tested in Phase 3 for diabetic peripheral neuropathy (Helixmith) with repeatedly mixed results; it is not validated for aging. Tier 2 reflects clinical-stage tools available (high-quality oncology probes) without aging-indication validation.

### Therapeutic landscape

| Agent | Class | Status | Notes |
|---|---|---|---|
| Capmatinib (Tabrecta) | c-MET TKI | FDA-approved (NSCLC METex14, 2020) | Inhibitor, not agonist; oncology only |
| Tepotinib (Tepmetko) | c-MET TKI | FDA-approved (NSCLC METex14, 2021) | Inhibitor; oncology only |
| Savolitinib | c-MET TKI | Approved (China); Phase 3 (US/EU) | Inhibitor; oncology |
| Ficlatuzumab | Anti-HGF mAb | Phase 2 (HNSCC, NCT06064877 recruiting) | Neutralizes HGF; oncology |
| Amivantamab | Bispecific EGFR+MET mAb | FDA-approved (NSCLC, 2021) | Inhibitory; oncology |
| VM202 / Engensis | HGF plasmid gene therapy | Phase 3 (diabetic neuropathy) — mixed results | HGF agonist; not aging-indication |
| KP-100LI (dHGF formulation) | Recombinant HGF | Phase 3 (NCT05627648, vocal fold scar) | Regenerative indication; not aging per se |
| NK4 | Competitive HGF antagonist | Preclinical | Anti-angiogenic; research tool |
| [[dihexa]] | Claimed HGF mimetic hexapeptide | Preclinical only | Primary mechanistic paper retracted (Benoist 2014); c-Met connection rests on "unpublished data" per McCoy 2013 |

**Active trials (ClinicalTrials.gov, 2026-05-09):** 3 active/recruiting trials involving HGF as a measured endpoint or therapeutic agent — all are oncology or vocal-cord regeneration contexts, none are aging-indication trials.

## Pathway membership

- [[hgf-met-signaling]] — primary pathway (implicit stub; needs seeding)
- [[pi3k-akt-pathway]] — downstream of c-MET via Gab1
- [[ras-mapk]] — downstream of c-MET via Grb2/SOS → RAS → ERK

## Key interactors (curated)

- [[c-met]] — sole signalling receptor (deferred; implicit stub)
- Gab1 — docking adaptor for c-MET-specific PI3K/SHP2/PLC-γ signalling
- HGFA (hepatocyte growth factor activator) — serine protease that cleaves pro-HGF → active HGF; systemic injury sensor [^rodgers2017]
- Heparan-sulfate proteoglycans (HSPGs) — extracellular matrix reservoirs of pro-HGF; present HGF to c-MET at the cell surface

## Limitations and gaps

- `#gap/needs-canonical-id` — HGF is absent from GenAge; this may reflect editorial scope (GenAge focuses on lifespan-modifying genes, not regeneration factors) rather than true aging-irrelevance. MR evidence for HGF in human aging is absent (`mr-causal-evidence: not-tested`).
- `#gap/needs-human-replication` — satellite-cell / muscle-regeneration aging data is largely murine; the Koike 2025 macrophage-MET finding requires independent replication and human confirmation.
- `#gap/no-mechanism` — the G_Alert HGFA-priming mechanism (Rodgers 2017) is elegantly described but the downstream signalling linking G_Alert to long-term regenerative decline in aging has not been worked out.
- `#gap/long-term-unknown` — safety of sustained HGF/c-MET agonism in aging humans is unknown; pro-tumorigenic risk is theoretically real but not quantified in aging populations.
- `gtex-aging-correlation: null` — GTEx tissue-by-age correlation data not yet pulled for HGF; populate per `sops/finding-tissue-expression.md`.

## Footnotes

[^nakamura1989]: doi:10.1038/342440a0 · Nakamura T et al. · *Nature* 1989 · n=N/A (biochemical; 82 kDa protein purification from rat platelets) · in-vitro · model: rat hepatocyte primary culture; pure HGF mitogenic at ~1 ng/ml · 2174 citations · #gap/no-fulltext-access — paper is closed-access (not_oa per a local paper archive); ~1 ng/ml mitogenic potency claim not independently verifiable from local PDF

[^birchmeier2003]: doi:10.1038/nrm1261 · Birchmeier C et al. · *Nat Rev Mol Cell Biol* 2003 · review · 2577 citations · local PDF: 

[^trusolino2010]: doi:10.1038/nrm3012 · Trusolino L, Bertotti A, Comoglio PM · *Nat Rev Mol Cell Biol* 2010 · review · 1208 citations · model: MET signalling principles, development, regeneration, and cancer · #gap/no-fulltext-access — download failed (bronze OA but PDF not accessible via archive); MET receptor and downstream cascade description on this page is attributed to this review but could not be independently verified from full text

[^koike2025]: doi:10.1111/acel.70042 · Koike H et al. · *Aging Cell* 2025 · in-vivo (mouse) + 3D muscle organoid · n=4/group (qPCR analyses); n=3/group (in vivo rescue experiments) · model: C57BL/6J male mice, young (8 wk) vs aged (24 mo); CTX-induced TA muscle injury; scRNA-seq identified Mac_1 macrophage subpopulation drives MuSC proliferation by suppressing Cdkn1b via HGF/c-MET signalling; HGF expression reduced in aged macrophages; exogenous HGF (0.5 μg/day every other day) partially rescued regeneration · local PDF: 

[^rodgers2017]: doi:10.1016/j.celrep.2017.03.066 · Rodgers JT, Schroeder MD, Ma C, Rando TA · *Cell Rep* 2017 · PMID: 28423312 · PMCID: PMC5468096 · in-vivo (mouse) · n=not confirmed (PDF download failed despite gold OA status) · model: injury-induced systemic HGFA release converts quiescent MuSCs and FAPs into G_Alert state; active HGFA sufficient to induce G_Alert throughout body and accelerate tissue repair; represents systemic HGF-axis regulation beyond local paracrine signalling · abstract confirmed via PubMed efetch; full PDF unverifiable (DOI lookup failure — #gap/no-fulltext-access for quantitative details)

[^tu2020]: doi:10.1111/acel.13116 · Tu J et al. · *Aging Cell* 2020 · in-vitro · n=2 corrected iPSC clones (C21, C24) vs WRN−/− WS iPSCs; validated in bone-defect and wound-healing mouse models · model: Werner syndrome (WRN p.R369X) fibroblast-derived iPSCs differentiated to MSCs via CRISPR/Cas9 gene correction (HDR); WRN-corrected MSCs restore HGF secretion, PI3K/AKT activation, and pro-angiogenic function; HGF critically downregulated in WRN−/− MSCs · local PDF: 
