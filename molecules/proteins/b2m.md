---
type: protein
aliases: [B2M, beta-2-microglobulin, beta2-microglobulin, "beta-2 microglobulin"]
uniprot: P61769
ncbi-gene: 567
hgnc: 914
ensembl: ENSG00000166710
genage-id: null   # not found in GenAge human or models database as of 2026-05-05 #gap/needs-canonical-id
pathways: ["[[mhc-class-i]]", "[[antigen-presentation]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: null   # Open Targets query failed; anti-B2M antibodies are in preclinical/investigational stage #gap/no-opentargets-entry
caused-by: ["[[chronic-inflammation]]"]
causes: ["[[stem-cell-exhaustion]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Smith 2015 (nm.3898), Bjorkman 1987 (329506a0), Lu 2019 (aging.101684), Zhong 2020 (s13041-020-0559-8), and Villeda 2011 (nature10357) all verified against local PDFs. UniProt P61769 disulfide bond coordinates verified via REST API. Canonical-DB identity fields (NCBI Gene 567, HGNC 914, Ensembl ENSG00000166710) not independently re-queried — recommend cross-check on next lint pass."
---

# B2M (beta-2-microglobulin)

Beta-2-microglobulin is an 11.7 kDa single-domain protein that is the obligate non-covalent light chain of all MHC class I complexes (HLA-A/B/C in humans). Beyond its structural role in antigen presentation, soluble B2M circulates in blood and rises with age; it is a component of the [[grimage-2019]] DNAm mortality clock and, critically, has been identified as a **heterochronic-parabiosis "old-blood factor"** that independently impairs adult hippocampal neurogenesis and cognitive function in mice [^smith2015].

## Identity

- **UniProt:** P61769 (B2MG_HUMAN)
- **NCBI Gene ID:** 567
- **HGNC symbol:** B2M
- **Ensembl:** ENSG00000166710
- **Length:** 119 aa (full precursor including 20-residue signal peptide); **99 aa mature secreted form** (signal peptide cleaved between positions 20–21)
- **Molecular weight:** ~11.7 kDa (mature form)
- **Mouse ortholog:** B2m (one-to-one ortholog)

## Domain architecture

- **Signal peptide:** residues 1–20 (cleaved co-translationally)
- **Ig-like C1-type domain:** residues 25–113 of the precursor (single immunoglobulin-fold domain)
- **Disulfide bond:** Cys25–Cys80 in precursor numbering (positions 5 and 60 of the mature 99 aa chain; stabilizes the Ig fold) [^bjorkman1987]
- No transmembrane segment: B2M is entirely extracellular — either cell-surface-associated (non-covalently bound to MHC-I heavy chain) or secreted into blood/urine

## Function

### Structural role: MHC class I assembly

B2M is an obligate non-covalent subunit of every surface MHC class I (HLA-A, HLA-B, HLA-C in humans) heterodimer [^bjorkman1987]. The ternary complex — heavy chain + B2M + antigenic peptide — is required for:

- Correct folding and ER export of the HLA-I heavy chain
- Peptide loading by the TAP-associated loading complex
- Stable cell-surface expression
- Recognition by CD8+ T cells

Mice with germline *B2m* deletion (*B2m*-/- mice) lack surface MHC-I entirely, resulting in near-complete absence of mature CD8+ T cells, demonstrating that no other protein can substitute [^bjorkman1987]. #gap/needs-human-replication — the equivalent functional conclusion in humans is inferred from mouse genetics and from the rare IMD43 immunodeficiency (P61769 Pro11 variant in UniProt).

### Soluble B2M: a circulating shed fragment

MHC-I complexes turn over continuously at the cell surface; upon complex dissociation or proteolytic shedding, free B2M is released into interstitial fluid and plasma. Serum B2M concentration is thus a readout of MHC-I turnover rate across all nucleated cells — and of renal clearance (B2M is freely filtered and reabsorbed by proximal tubular cells, so CKD elevates serum B2M). Normal serum B2M in healthy young adults is roughly 1–2 mg/L; it rises modestly with age, more steeply with CKD or lymphoproliferative disease. #gap/dose-response-unclear — the normal aging trajectory for plasma B2M and the threshold at which the aging-neurogenic effects are physiologically relevant have not been established in humans.

## Aging biology — heterochronic parabiosis and neurogenesis

This is the primary aging-relevant section. The core result is from the Villeda laboratory.

### Background: the aging systemic milieu

Villeda et al. 2011 used heterochronic parabiosis (surgically joining the circulation of young and old mice) to demonstrate that soluble factors in old blood suppress hippocampal neurogenesis and spatial memory in young mice, while young blood partially rescues neurogenesis in old mice [^villeda2011]. That paper identified CCL11 as one candidate old-blood factor. Smith et al. 2015 (same lab) then screened additional age-elevated plasma proteins and identified B2M.

### Smith 2015 — B2M as a pro-aging systemic factor

Smith LK et al., *Nature Medicine* 2015 (doi:10.1038/nm.3898) identified B2M as a circulating factor that rises with age and impairs adult hippocampal neurogenesis [^smith2015]. Key findings:

- Systemic administration of recombinant human B2M protein to young adult (3-month) male C57BL/6 mice at **100 μg/kg** via intraorbital injection (5 injections over 12 days) impaired hippocampal neurogenesis (reduced Dcx+, Nestin+, Mcm2+, BrdU+ cells in the dentate gyrus) and spatial learning/memory in the RAWM, phenocopying the age-related cognitive decline
- Local (stereotaxic) B2M injection into the dentate gyrus of young mice at 0.1 μg/μl (0.50 μl per side) similarly impaired hippocampal-dependent learning and memory; effects were reversible at 30-day follow-up
- Genetic deletion of *B2m* in aged (17-month) mice improved hippocampal neurogenesis (increased Dcx+ and BrdU+ cells) and cognitive performance (enhanced spatial learning in RAWM; increased contextual fear memory freezing) compared to aged wild-type controls
- The neurogenic effects depend **in part on surface MHC-I expression**: local B2M injection failed to impair cognition or neurogenesis in *Tap1*-/- mice (which lack surface MHC-I), directly implicating the MHC-I pathway. The authors note that data "does not distinguish between the effects of MHC I expression at the systemic versus local levels" and that B2M may act via both canonical MHC-I-dependent and non-canonical MHC-I-independent mechanisms in the CNS
- No systemic anti-B2M antibody treatment arm was reported in Smith 2015; antibody blockade as an intervention is a translational implication discussed in the paper's conclusion, not a tested experimental result #gap/needs-replication

#gap/needs-human-replication — all mechanistic and rescue data are from mouse models. No human intervention study targeting B2M for cognitive function or neurogenesis has been completed as of 2026-05-05.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | B2M protein sequence and role in MHC-I are highly conserved; soluble shedding mechanism is shared |
| Phenotype conserved in humans? | partial | Elevated serum B2M associates with cognitive decline in observational human studies but causal direction is unestablished |
| Replicated in humans? | no | Mouse-only intervention data; human trials absent |

### Proposed mechanism

Two partially overlapping mechanistic axes are supported by primary evidence:

**Axis 1 — MHC-I dependent (Smith 2015):** B2M acts at the cell surface in concert with MHC-I molecules. TAP1-deficient mice (which fail to load peptides onto MHC-I and thus have greatly reduced surface MHC-I) are protected from both the cognitive impairment and the neurogenesis deficits caused by local B2M injection, directly implicating surface MHC-I in the effect [^smith2015]. B2M accumulates in the aged hippocampus (confirmed by Western blot in aged mice and young heterochronic parabionts), and the authors propose that elevated B2M stabilizes or dysregulates MHC-I complexes on neural progenitors in a non-canonical, immune-independent manner.

**Axis 2 — TLR4/NF-κB (Zhong 2020):** In a separate study using direct B2M injection into the dentate gyrus of adult C57BL/6 mice (n=10/subgroup behavioral; n=6/subgroup molecular), TLR4-knockout mice showed partial but significant protection from B2M-induced cognitive decline (Morris Water Maze), reduced neuroinflammation (lower IL-1β, TNF-α in hippocampus), improved neurogenesis (BrdU+/NeuN+ cells), and better synaptic protein preservation (synaptophysin, PSD-95) compared to wild-type mice receiving the same B2M dose [^zhong2020]. This supports the following axis [^zhong2020]:

1. B2M in brain parenchyma activates **TLR4** on microglia and neural progenitors
2. TLR4 signals via **MyD88/NF-κB**, upregulating IL-1β and TNF-α
3. Downstream neuroinflammation suppresses hippocampal neural stem cell proliferation and increases apoptotic neuronal death (Bcl-2/Bax ratio decreased; cleaved caspase-3 increased)
4. Net effect: reduced adult hippocampal neurogenesis, impaired synaptic plasticity, and spatial memory deficit

Whether the MHC-I axis (Smith 2015) and the TLR4 axis (Zhong 2020) operate in sequence, in parallel, or in different cell populations is unresolved. #gap/no-mechanism — the relative contributions of direct MHC-I-dependent B2M-neural signaling vs TLR4-driven microglial activation remain unresolved; both pathways have partial experimental support.

## GrimAge biomarker connection

B2M is one of the **seven plasma protein DNAm-surrogates** incorporated into [[grimage-2019]] (Lu 2019). GrimAge's composite architecture works by first building DNAm predictors for each plasma protein, then combining those predictors (plus a smoking-pack-years estimator) via elastic net Cox regression trained on time-to-death [^lu2019]. The seven plasma protein surrogates are: ADM, B2M, cystatin C, GDF-15, leptin, PAI-1, and TIMP-1.

The inclusion of B2M in GrimAge reflects its known association with mortality in population studies — B2M levels correlate with cardiovascular risk and overall mortality across multiple cohorts — and the fact that its DNAm-predicted level adds independent predictive signal for lifespan in the FHS training data. Importantly, this is a predictive association, not an established causal relationship; B2M-accelerated aging (as measured by GrimAge) may partly reflect accumulated CKD-driven B2M elevation rather than direct CNS toxicity. #gap/contradictory-evidence — whether the GrimAge B2M component captures the neurogenic/CNS mechanism identified by Smith 2015, or primarily reflects renal and cardiovascular biology, is not established.

See [[grimage-2019]] for the full clock architecture and performance data.

## Clinical biomarker uses

Serum B2M is used clinically in several contexts unrelated to aging research:

- **Multiple myeloma (MM)** — a component of the International Staging System (ISS) for MM; serum B2M >5.5 mg/L = Stage III disease with poorest prognosis; elevated due to high plasma cell turnover
- **Chronic kidney disease** — rises as glomerular filtration falls; serum B2M is a sensitive marker of tubular function loss and accumulates in dialysis-related amyloidosis (B2M-derived amyloid deposits in joints/carpal tunnel after long-term hemodialysis — hereditary variant AMYLD6 in UniProt is a missense-amyloid, distinct from dialysis-amyloid)
- **Lymphoid malignancies** — elevated in CLL, NHL, Waldenstrom macroglobulinemia; used in staging and prognosis
- **Aging** — mild elevation with healthy aging; modest association with all-cause mortality in population studies (the basis for GrimAge inclusion). The magnitude of aging-associated elevation is far smaller than in MM or end-stage CKD

Note: the clinical utility of serum B2M as an aging biomarker independent of renal function has not been rigorously established. #gap/needs-replication

## Therapeutic angles

### Anti-B2M antibodies for cognitive aging

Smith 2015 raised the possibility that targeting B2M could ameliorate age-related cognitive decline, based on the finding that genetic B2m deletion in aged mice improved neurogenesis and cognition [^smith2015]. The paper's discussion explicitly raises B2M as a potential therapeutic target and states that "age-related cognitive and regenerative dysfunction observed during aging could be ameliorated by targeting B2M in old age." However, Smith 2015 did not include a systemic anti-B2M antibody treatment arm — antibody blockade as an aging intervention has not been tested in any published preclinical or human study as of 2026-05-05. #gap/needs-replication #gap/needs-human-replication

### MM-directed therapeutics

In multiple myeloma, B2M is explored as a drug-delivery target (B2M-coupled cytotoxic payloads leveraging B2M's surface expression on myeloma cells). This is oncology-directed and not directly aging-relevant, but shares the biology of B2M's role in MHC-I surface presentation.

### Indirect modulation

- Interventions that reduce chronic inflammation could in principle reduce the rate of MHC-I turnover and thus B2M shedding
- Improving renal function (reducing CKD progression) would lower B2M accumulation independently of its production rate
- No geroprotector is known to specifically target the B2M/neurogenesis axis

## Pathway and network membership

- [[mhc-class-i]] — B2M is the obligate light chain; pathway page is an implicit stub
- [[antigen-presentation]] — context for canonical B2M function; implicit stub
- [[chronic-inflammation]] — B2M elevation is both a readout and potentially a driver of neuroinflammation
- [[stem-cell-exhaustion]] — acts via suppression of neural stem cell (hippocampal) proliferation
- [[neurogenesis]] — the process impaired by elevated circulating B2M; implicit stub
- [[neural-stem-cells]] — the cell population directly affected; implicit stub

## Cross-references

- [[grimage-2019]] — B2M is one of the 7 plasma protein surrogates in the GrimAge composite
- [[ccl11]] — the other major Villeda-lab old-blood factor (from parabiosis, 2011); implicit stub — planned R18 batch
- [[mus-musculus]] — primary model organism for Smith 2015 neurogenesis data
- [[hallmarks/stem-cell-exhaustion]] — downstream consequence of B2M signaling
- [[hallmarks/chronic-inflammation]] — upstream driver and consequence of B2M elevation

## Limitations and gaps

- **#gap/needs-human-replication** — All neurogenesis / cognitive-rescue data are from mouse models. No human clinical trial targeting B2M for cognitive aging has been completed.
- **#gap/no-mechanism** — The CNS mechanism of soluble B2M action is partially characterized (TLR4/NF-κB axis proposed); relative contributions of direct neural vs microglial vs niche signaling unresolved.
- **#gap/contradictory-evidence** — It is unclear whether the GrimAge B2M-surrogate component captures the CNS/neurogenic biology or primarily reflects renal and cardiovascular B2M drivers. These could be independent aging-relevant signals.
- **#gap/dose-response-unclear** — The normal aging trajectory for plasma B2M and the concentration threshold at which neurogenic effects manifest in vivo are not established.
- **#gap/needs-canonical-id** — GenAge entry for B2M was not found in the HAGR database; confirm whether B2M qualifies for GenAge inclusion given Smith 2015 evidence, or whether its aging relevance is considered insufficient for the inclusion criteria.
- **#gap/no-opentargets-entry** — Druggability tier from Open Targets Platform could not be retrieved (API failure on 2026-05-05); requires manual check.

## Footnotes

[^bjorkman1987]: doi:10.1038/329506a0 · Bjorkman PJ, Saper MA, Samraoui B, Bennett WS, Strominger JL, Wiley DC (1987) "Structure of the human class I histocompatibility antigen, HLA-A2" · *Nature* 329:506–512 · in-vitro (X-ray crystallography, 3.5 Å resolution) · n/a · model: human HLA-A2 purified from homozygous lymphoblastoid cells; first crystal structure of MHC-I showing β₂m (12K light chain, ~90 aa extracellular, Ig-like fold) in complex with heavy chain · B2M secondary structure shown in Fig. 3 (Cys25–Cys80 spanning the Ig domain, consistent with UniProt P61769) · DOI 329506a0 confirmed correct (Nature Vol. 329, Oct 1987); not to be confused with 313756a0 (Ullrich insulin receptor, Nature 1985) · local PDF available

[^smith2015]: doi:10.1038/nm.3898 · Smith LK, He Y, Park JS, Bieri G et al. (Villeda lab) · "β2-microglobulin is a systemic pro-aging factor that impairs cognitive function and neurogenesis" · *Nat Med* 21(8):932–937, 2015 · in-vivo (mouse) + in-vitro · model: male C57BL/6 mice (young = 3 months; aged = 17–18 months), B2m-/- KO, Tap1-/- KO; all studies done in male mice · n calculated by power analysis (α=0.05, power=0.8) — exact group sizes not reported in methods; multiple independent cohorts across experiment arms · systemic B2M dose: 100 μg/kg (intraorbital, 5 doses over 12 days); local (stereotaxic) dose: 0.1 μg/μl × 0.50 μl per DG hemisphere · key results: exogenous B2M reduced Dcx+, Nestin+, BrdU+ cells in DG; aged B2m-/- mice showed improved RAWM performance and increased Dcx+/BrdU+ cells vs WT controls; Tap1-/- mice were protected from local B2M cognitive effects, implicating surface MHC-I · local PDF available (PMC4529371)

[^villeda2011]: doi:10.1038/nature10357 · Villeda SA et al. (Wyss-Coray lab) · "The ageing systemic milieu negatively regulates neurogenesis and cognitive function" · *Nature* 477(7362):90–94, 2011 · in-vivo (mouse) + in-vitro · model: young (3 months) and aged C57BL/6 mice; heterochronic parabiosis, plasma injection, and in vivo CCL11 administration · identified six factors elevated in old blood across both normal aging and heterochronic parabiosis: CCL2, CCL11, CCL12, CCL19, Haptoglobin, and β2-microglobulin; CCL11/Eotaxin was the primary candidate tested functionally · established that old blood suppresses hippocampal neurogenesis (Dcx+, BrdU+ cells reduced) and impairs contextual fear conditioning and RAWM performance in young heterochronic parabionts · B2M noted as elevated but its neurogenic role not functionally tested (context for Smith 2015) · local PDF available (PMC3170097)

[^lu2019]: doi:10.18632/aging.101684 · Lu AT et al. (Horvath lab) · "DNA methylation GrimAge strongly predicts lifespan and healthspan" · *Aging* 2019 · observational (longitudinal cohort meta-analysis) · training n=1,731 (FHS 70% split); validation n=6,935 across 5 cohorts · model: human adults, whole blood, Illumina 450K/EPIC · B2M confirmed as one of 7 plasma protein DNAm surrogates in GrimAge composite (Stage 1/Stage 2 model) · local PDF available (PMC6366976)

[^zhong2020]: doi:10.1186/s13041-020-0559-8 · Zhong Q, Zou Y, Liu H et al. · "Toll-like receptor 4 deficiency ameliorates β2-microglobulin induced age-related cognition decline due to neuroinflammation in mice" · *Molecular Brain* 13:20, 2020 · in-vivo (mouse, WT C57BL/6 + TLR4-KO) + in-vitro (primary hippocampal neurons) · n=10/subgroup (behavioral, Morris Water Maze); n=6/subgroup (molecular: TLR4 mRNA, synaptic proteins, cytokines, neurogenesis); n=4/subgroup (histology) · B2M injected into dentate gyrus of hippocampus; assessed 7 and 28 days post-injection · key results: TLR4-KO mice partially but significantly protected from B2M-induced MWM deficits, neuroinflammation (IL-1β, TNF-α), neurogenesis suppression, and synaptic protein loss (synaptophysin, PSD-95); TLR4/MyD88/NF-κB axis implicated; apoptosis (Bcl-2/Bax ratio, cleaved caspase-3) also partially rescued in TLR4-KO · gold OA; local PDF available
