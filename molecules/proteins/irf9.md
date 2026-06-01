---
type: protein
aliases: [ISGF3γ, p48, ISGF3 gamma subunit, ISGF3G]
uniprot: Q00978
ncbi-gene: 10379
hgnc: 6131
ensembl: ENSG00000213928
genage-id: null
mouse-ortholog: Irf9
key-domains: [DNA-binding, IRF-association-domain]
key-ptms: [Ser139-phosphorylation]
pathways: ["[[type-i-interferon-signaling]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[stat1]]", "[[stat2]]"]
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-13
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "All six primary sources verified against PDFs (Rengachari 2018 PNAS, Platanitis 2019 Nat Commun, Fink & Grandvaux 2013 JAK-STAT, Odama 2023 JAFC, Lei 2025 Nat Commun) or PMC full-text XML (Meyts & Casanova 2021 Eur J Immunol). Canonical IDs (UniProt Q00978, NCBI Gene 10379, HGNC 6131, Ensembl ENSG00000213928) confirmed via UniProt REST. Corrections applied: see verified-scope log and log.md."
---


# IRF9 (Interferon Regulatory Factor 9)

The DNA-binding subunit of the ISGF3 transcription factor trimer. IRF9 provides sequence-specific recognition of the interferon-stimulated response element (ISRE), completing the [[type-i-interferon-signaling]] signaling axis downstream of JAK kinase activation of [[stat1]] and [[stat2]]. Unlike its trimer partners, IRF9 is not phosphorylated during type-I IFN activation — it functions as the constitutive DNA-targeting component.

## Identity

- **UniProt:** Q00978 (IRF9_HUMAN)
- **NCBI Gene:** 10379
- **HGNC symbol:** IRF9 (synonym in older literature: ISGF3G)
- **Mouse ortholog:** Irf9 (one-to-one; high sequence conservation)
- **Length:** 393 amino acids
- **Subcellular location (basal):** Cytoplasm; translocates to nucleus upon type-I IFN stimulation [^uniprot-q00978]

## Domain architecture

IRF9 contains two principal functional regions:

1. **DNA-binding domain (DBD)** — positions ~9–116; harbors the characteristic IRF-family tryptophan pentad repeat that contacts the ISRE consensus GAAA motif within target gene promoters [^rengachari2018]. This domain confers ISGF3's target-gene selectivity and distinguishes ISRE-dependent activation from GAS-element-driven transcription used by homodimeric STAT1.

2. **IRF-association domain (IAD)** — C-terminal; mediates constitutive (phosphorylation-independent) interaction with [[stat2]] and, via STAT2, with phospho-[[stat1]] [^platanitis2019]. The IAD is essential for ISGF3 assembly; structural studies show that IRF9 docks onto the coiled-coil domain of STAT2 through this region [^rengachari2018].

IRF9 carries a single known phosphorylation site (Ser139) whose functional significance is not fully characterized [^uniprot-q00978]. #gap/no-mechanism for Ser139 phosphorylation consequences.

## ISGF3 trimer and type-I IFN signaling

The canonical type-I IFN signaling cascade [^platanitis2019]:

1. IFN-α or IFN-β binds the IFNAR1/IFNAR2 receptor heterodimer.
2. Receptor-associated TYK2 and JAK1 transphosphorylate STAT1 (Tyr701) and STAT2 (Tyr690).
3. In the classical cytoplasmic assembly model, phospho-STAT1 and phospho-STAT2 heterodimerize and then recruit IRF9 (via its constitutive interaction with STAT2-IAD) to form the **ISGF3** (Interferon-Stimulated Gene Factor 3) trimer in the cytoplasm. However, Platanitis 2019 [^platanitis2019] challenges this model: their ChIP-seq and proximity-labeling data in murine macrophages indicate that STAT2-IRF9 pre-complexes are constitutively present at ISG promoters and that ISGF3 assembly likely occurs **on DNA** rather than pre-assembled in the cytoplasm.
4. ISGF3 (however assembled) translocates to or forms in the nucleus and binds ISRE sequences to activate hundreds of interferon-stimulated genes (ISGs), including antiviral effectors (Mx, OAS, ISG15) and feedback regulators.

**IRF9's unique role in the trimer.** STAT1 and STAT2 are phosphorylated and contribute the transcriptional activation surface; IRF9 provides ISRE recognition without requiring phosphorylation of itself [^fink-grandvaux2013]. Structural and biochemical studies confirmed that STAT2-IRF9 pre-forms a dimeric complex that exists constitutively at low level, independently of IFN stimulation; IFN signaling then recruits phospho-STAT1 to complete the trimer [^platanitis2019]. This molecular switch — from STAT2-IRF9 dimer to ISGF3 trimer — is the key gating mechanism determining transcriptional amplitude. #gap/needs-replication (STAT2-IRF9 dimer pre-complex confirmed in cell lines; in-vivo significance across primary cell types not fully established).

**ISRE vs GAS specificity.** ISGF3 (IRF9-containing) binds ISRE; homodimeric pSTAT1:pSTAT1 binds GAS (gamma-activated sequence). The two recognition elements are distinct, providing a mechanism by which the cell can differentially activate antiviral vs pro-inflammatory gene programs downstream of a single cytokine receptor family [^fink-grandvaux2013].

## Knockout phenotype

Irf9-/- mice show impaired antiviral innate immunity due to failure to activate ISG expression after IFN-α/β stimulation, but in-vivo viral challenge studies have been limited [^meyts-casanova2021]. In-vitro work (p48-/- embryonic fibroblasts and peritoneal macrophages) showed dramatically impaired induction of the antiviral state against EMCV, VSV, and HSV after IFN-α stimulation. The sole in-vivo infection model reported for Irf9-/- mice is LCMV: unlike Stat1-/- mice (which succumb), Irf9-/- mice survive LCMV infection but develop chronic liver and CNS inflammation with CD8+ T-cell exhaustion [^meyts-casanova2021]. In-vivo VSV survival curves in Irf9-/- mice have not been published as of Meyts & Casanova 2021. #gap/needs-replication (in-vivo antiviral-challenge data sparse; susceptibility characterized mainly in vitro).

In humans, rare biallelic loss-of-function variants in IRF9 cause **Immunodeficiency 65 (IMD65)**, an autosomal recessive condition. The best-characterized patient (Hernandez et al., cited in Meyts & Casanova 2021) presented with life-threatening influenza pneumonia and severe complications following MMR vaccination (biliary perforation, DIC), consistent with abrogated type-I/III IFN cellular responses [^meyts-casanova2021]. #gap/needs-replication (only one fully characterized IRF9-deficient pedigree reported as of Meyts & Casanova 2021; clinical spectrum not fully defined).

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ISGF3 complex and ISRE-driven ISG induction conserved; IMD65 confirms human essentiality |
| Phenotype conserved in humans? | yes | Mouse KO and human IMD65 both show extreme viral susceptibility |
| Replicated in humans? | partial | Human loss-of-function cases confirm antiviral role; aging-specific role untested |

## Aging context

IRF9's direct aging literature is sparse. The relevant connection runs through two intersecting threads:

### Tonic type-I IFN signaling and inflammaging

Age-associated increases in tonic (low-level constitutive) type-I IFN signaling are a recognized component of [[chronic-inflammation]] in aged tissues. Lei 2025 [^lei2025] demonstrates that NRF1 transcriptionally upregulates TBK1 and IRF3 in senescent cells, activating the innate immune response and driving type-I IFN (Ifnb1/Ifna4) production and SASP; NRF1 deficiency delayed senescence and extended lifespan in aged mice. This NRF1-TBK1/IRF3 axis drives **production** of type-I IFN — the resulting secreted IFN would then signal through IFNAR to activate JAK-STAT and ISGF3 (including IRF9) in neighboring cells. However, IRF9 itself is not mentioned in Lei 2025; the connection from this upstream IFN-production axis to IRF9/ISGF3 is an inference from pathway logic, not a direct finding of that paper. Direct evidence for age-related changes in IRF9 expression or ISGF3 occupancy at ISREs across aging cohorts is lacking. #gap/needs-human-replication

### IRF9 in the SASP interferon module

Senescent cells elaborating the senescence-associated secretory phenotype ([[sasp]]) include a type-I IFN component among SASP factors, and ISG induction in bystander cells is partially ISGF3-dependent [^odama2023]. Betulinic acid was shown to suppress IRF9 **protein levels** (western blot) in high-passage human dermal fibroblasts (NHDFs), reducing downstream ISG expression (IFIT1, IFITM1, IFI6, MX1, OAS2 by qPCR) and alleviating SA-β-gal senescence markers (from ~47% to ~24% SA-β-gal+ cells at 10 µM BA) [^odama2023]. IRF9 siRNA knockdown in senescent NHDFs independently reduced IFIG expression, confirming the IRF9-dependency of the IFN-driven gene program. This is the most direct published in-vitro evidence linking IRF9 specifically to senescent cell biology. Weight: single study, in-vitro, compound-intervention design; mechanism vs. confound unclear. #gap/needs-replication

### R25 recency search summary (2022–2026)

PubMed search `IRF9 AND (aging OR senescence OR inflammaging)`, mindate 2022, maxdate 2026, returned 6 papers. Triage:

- **PMID 37116884 (Odama 2023)** — discretionary; in-vitro only, but directly links IRF9 to senescence phenotypes. Integrated above.
- **PMID 37377275 (Qin 2023)** — mutant p53 / IFN-I; tangential to aging.
- Remaining papers: disease-specific or RNA-binding (skipped).

No meta-analyses or RCTs on IRF9 in aging were found. No training-era citations contradicted by recent literature. Literature is thin; IRF9 remains a low-direct-aging-evidence protein with mechanistic plausibility through the IFN-senescence axis.

## Pathway membership

- [[type-i-interferon-signaling]] — ISGF3 trimer assembly and ISRE-driven ISG activation
- [[jak-stat-pathway]] — downstream of TYK2/JAK1 STAT1/STAT2 phosphorylation

## Druggability

**Tier 4 (undruggable directly).** IRF9 functions as a TF DNA-binding subunit; directly inhibiting a TF's DNA-binding domain with a small molecule remains intractable at clinical scale. The [[jak-stat-pathway]] provides an upstream pharmacological handle: JAK inhibitors (ruxolitinib, baricitinib) block STAT1/STAT2 phosphorylation and thereby suppress ISGF3 assembly and ISG induction, including IRF9-dependent outputs. No IRF9-selective inhibitors are in clinical or advanced preclinical development. #gap/needs-canonical-id (no Open Targets target entry found for IRF9; druggability tier assigned based on TF class evidence).

## Knowledge gaps

- **No direct human aging data.** IRF9's contribution to age-related type-I IFN elevation is inferred from pathway logic; no human study has measured IRF9 protein activity or ISGF3 occupancy at ISREs across aging cohorts. #gap/needs-human-replication
- **SASP-IFN module specificity.** Whether IRF9/ISGF3 is the dominant vs. redundant transducer of the IFN component of SASP (vs. IRF3, IRF7, or other STAT complexes) is unresolved. #gap/no-mechanism
- **Ser139 phosphorylation.** Functional consequence unknown. #gap/no-mechanism
- **GTEx aging expression.** No aging-correlated expression data extracted for this page. #gap/needs-canonical-id
- **Mendelian randomization.** No MR instrument or study identified; `mr-causal-evidence: not-tested`. #gap/needs-replication

## Footnotes

[^uniprot-q00978]: UniProt Q00978 (IRF9_HUMAN), accessed 2026-05-13 · curated Swiss-Prot entry · human protein; includes domain coordinates, PTMs, disease associations (IMD65), and subcellular localization annotations.

[^rengachari2018]: doi:10.1073/pnas.1718426115 · Rengachari S et al. · in-vitro (structural, X-ray crystallography + biochemistry) · model: recombinant STAT2-IRF9 fragments · PNAS 2018 · 83 citations · confirms IRF9 IAD docks on STAT2 coiled-coil; DBD positions 9–116 characterized.

[^platanitis2019]: doi:10.1038/s41467-019-10970-y · Platanitis E et al. · in-vitro / cell-based · Nature Communications 2019 · 211 citations · molecular switch from STAT2-IRF9 dimer to ISGF3 trimer; pre-complex demonstrated biochemically and in cells.

[^fink-grandvaux2013]: doi:10.4161/jkst.27521 · Fink K & Grandvaux N · review · JAK-STAT 2013 · 122 citations · STAT2 and IRF9 functional overview including ISRE vs GAS specificity; IRF9 non-phosphorylation feature described.

[^meyts-casanova2021]: doi:10.1002/eji.202048793 · Meyts I & Casanova JL · review · Eur J Immunol 2021 · 86 citations · genetic deficiencies of type-I IFN pathway in humans and mice; IRF9-null mouse phenotype and IMD65 human cases covered.

[^odama2023]: doi:10.1021/acs.jafc.2c08563 · Odama M et al. · in-vitro (human dermal fibroblasts, siRNA + compound) · J Agric Food Chem 2023 · 10 citations · betulinic acid downregulated IRF9 and ISG expression; siRNA-confirmed IRF9 role in IFN-driven senescence markers. Single study; weight accordingly.

[^lei2025]: doi:10.1038/s41467-025-66368-6 · Lei H et al. · in-vivo (mouse) + in-vitro (Primary MEF) · Nature Communications 2025 · NRF1 transcriptionally upregulates TBK1 and IRF3 in senescent cells, promoting type-I IFN (Ifnb1/Ifna4) production and SASP; NRF1 deficiency delayed senescence and extended lifespan in aged mice. Note: IRF9 is not directly studied in this paper — the downstream ISGF3/IRF9 connection is an inference from pathway logic (produced IFN signals through IFNAR → JAK-STAT → ISGF3).
