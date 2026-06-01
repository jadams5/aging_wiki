---
type: compound
aliases: [copper peptide, copper tripeptide-1, GHK-copper, glycyl-L-histidyl-L-lysine copper, GHK, lamin]
pubchem-cid: 139035031
inchikey: LREZPQNYQZAPJC-ACMTZBLWSA-L
chembl-id: null
drugbank-id: null
biologic: true
molecular-formula: C14H21CuN6O4-
molecular-weight-da: 400.9
mechanisms: [extracellular-matrix-remodeling, copper-chaperone, collagen-synthesis-stimulation, anti-inflammatory]
targets: []
hallmarks: []
clinical-stage: supplement
human-evidence-level: limited
translation-gap: biomarker-only
next-experiment: "Randomized double-blind placebo-controlled trial of injectable GHK-Cu (standardized dose) vs placebo in healthy adults 55-75 yr, with primary endpoint of skin collagen density (reflectance confocal microscopy or 4 mm punch biopsy Sircol assay) and secondary endpoints of serum markers of ECM turnover (PICP, PINP); minimum n=60/arm, 6-month treatment duration. Topical formulations have inadequate penetration for such a trial; this is the design that would directly test the injectability claims circulating in clinical practice."
clinical-trials-active: 0
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Pickart 2015 (10.1155/2015/648108) and Pickart 2018 (10.3390/ijms19071987) verified against full PDFs. Maquart 1988 concentrations verified against Crossref abstract (full PDF not_oa). Pickart 1980 DOI corrected via PubMed. DOIs for Hu 2026, Mortazavi 2025, Ogorek 2025, Dymek 2023 confirmed via PubMed. Schlesinger 1977 and Pickart 1987 not_oa — not directly verified; claims attributed to them are low-stakes identity/activity characterizations consistent with downstream reviews. PubChem CIDs 139035031 and 73587 confirmed via PubChem REST API. Plasma decline primary source traced to Pickart 1973 PhD thesis (non-peer-reviewed) in both OA review PDFs."
---

# GHK-Cu (copper tripeptide-1)

GHK-Cu is an endogenous tripeptide — glycyl-L-histidyl-L-lysine chelated to copper(II) — first isolated from human serum albumin in 1973 by Pickart and Thaler and structurally confirmed in 1977 [^schlesinger1977]. It is found in blood plasma, saliva, urine, and cerebrospinal fluid. In vitro and animal studies show it stimulates collagen, elastin, and glycosaminoglycan synthesis by fibroblasts, promotes wound healing, and exhibits anti-inflammatory activity. Topical GHK-Cu derivatives are widely used in cosmetic formulations; injectable preparations were offered by compounding pharmacies under 503A rules before an FDA review raised access concerns. **No large placebo-controlled RCT of injectable GHK-Cu in humans has been conducted.**

## Identity

- **PubChem CID (GHK-Cu complex):** 139035031
- **PubChem CID (free GHK tripeptide):** 73587
- **InChIKey (Cu complex):** LREZPQNYQZAPJC-ACMTZBLWSA-L
- **Molecular formula (Cu complex):** C₁₄H₂₁CuN₆O₄⁻ (charge-balanced anionic form)
- **Molecular weight (Cu complex):** ~400.9 Da
- **Free GHK tripeptide MW:** 340.4 Da; formula C₁₄H₂₄N₆O₄
- **Sequence:** Gly-His-Lys (three amino acids; N-terminus glycine, C-terminus lysine)
- **CAS (GHK free acid):** 49557-75-7 (commonly cited; not independently confirmed in this seeding pass) #gap/needs-canonical-id
- **ChEMBL ID:** not found in ChEMBL as of seeding pass; leave null #gap/needs-canonical-id
- **DrugBank ID:** not assigned; GHK-Cu is not an approved drug

**Note on PubChem:** Two distinct entries exist. CID 73587 is the free tripeptide (GHK, no copper). CID 139035031 is the Cu²⁺ chelate complex — the biologically active species studied in most wound-healing literature. The `pubchem-cid:` frontmatter field refers to the copper-bound form consistent with the compound's clinical use.

## Plasma decline narrative — what the primary literature actually shows

The widely-cited figure of **200 ng/mL (young, ~20 yr) → 80 ng/mL (older, ~60 yr)** appears throughout Pickart-group reviews (e.g., Pickart & Margolina 2018 [^pickart2018]; Pickart et al. 2015 [^pickart2015]). Both review PDFs were read in full: Pickart 2015 cites this figure to reference [1] (Pickart 1973 PhD thesis, University of California San Francisco); Pickart 2018 cites it to reference [6] (also the 1973 thesis). **The primary measurement source is therefore an unpublished PhD thesis, not a peer-reviewed analytical study.** No primary measurement paper quantifying plasma GHK by age in a defined human cohort with reported sample sizes, assay methodology, and demographic data has been identified. #gap/unsourced

The original identification of GHK as a serum factor is in Schlesinger et al. 1977 [^schlesinger1977] and the growth-modulating characterization in Pickart & Thaler 1980 [^pickart1980]; neither paper reports age-stratified plasma concentrations. Pickart & Lovejoy 1987 [^pickart1987] reviews biological activity but again does not contain the age-stratified ng/mL figures.

**Practical implication for the wiki:** the plasma-decline claim originates from Pickart's 1973 doctoral thesis and has been propagated across 50+ years of review papers without a peer-reviewed primary measurement study. It should be treated as #gap/unsourced until a primary measurement study with sample sizes, assay method (e.g., LC-MS/MS plasma quantification), and age-cohort demographics is published and replicated.

**What can be stated with reasonable confidence:**
- GHK is an endogenous human plasma peptide [^schlesinger1977].
- Plasma copper-binding capacity and cuproenzyme activity do decline with age in several studies, consistent with reduced endogenous GHK-Cu bioavailability, but this is distinct from measuring GHK peptide levels directly.
- The biological plausibility of an age-related decline is high given that GHK is derived from albumin proteolysis and albumin glycation/oxidation increases with age.

## Mechanism of action

### Collagen and ECM synthesis

The founding mechanistic claim is stimulation of collagen type I and type III synthesis by human fibroblasts in culture [^maquart1988]. The Maquart et al. 1988 study (FEBS Letters) showed that GHK-Cu stimulates collagen synthesis beginning between 10⁻¹² M and 10⁻¹¹ M, maximizing at 10⁻⁹ M (1 nM), independent of changes in cell proliferation [^maquart1988]. This remains the most-cited primary mechanistic paper.

Subsequent in vitro and small animal studies have reported additional effects:
- Stimulation of elastin synthesis in dermal fibroblasts [^pickart2015] #gap/needs-replication
- Upregulation of glycosaminoglycan (GAG) synthesis, including decorin and dermatan sulfate
- MMP-2 upregulation (matrix remodeling) alongside TIMP-1/2 upregulation (matrix protection) — the net effect on collagen degradation is context-dependent #gap/contradictory-evidence

### Copper delivery to cuproenzymes

GHK-Cu serves as a bioavailable source of Cu²⁺ for copper-dependent enzymes, including:
- **Lysyl oxidase (LOX):** cross-links collagen and elastin; requires Cu²⁺ as cofactor; essential for tensile strength. GHK-Cu may support LOX activity in copper-deficient microenvironments (e.g., post-wound ischemic tissue).
- **Cu/Zn superoxide dismutase (SOD1):** antioxidant enzyme; requires Cu²⁺.
- **Ceruloplasmin:** plasma ferroxidase; copper-dependent.

The physiological relevance of GHK-Cu as a *systemic* copper chaperone at endogenous concentrations is unclear — albumin and ceruloplasmin dominate systemic copper transport. The copper-delivery role is more plausible in local tissue microenvironments (e.g., wound beds, granulation tissue).

### Gene expression modulation (review-level claim)

Pickart & Margolina 2018 [^pickart2018] synthesized Broad Institute Connectivity Map microarray data showing GHK modulates 31.2% of human genes by ≥50% (approximately 2152 genes stimulated or suppressed at ≥50% cutoff per their Table 1; the figure of ">4000 genes" circulated in earlier Pickart-group reviews [^pickart2015] refers to a lower-threshold analysis from a 2014 dataset). Gene targets include those associated with DNA repair, anti-inflammatory signalling, anti-cancer pathways, and the ubiquitin-proteasome system. This is a review-paper synthesis; the underlying microarray datasets were not independently validated in this pass and should be treated with caution — review-derived gene-expression claims require primary dataset confirmation. #gap/needs-replication

### Anti-inflammatory activity

Zebrafish larval models show GHK-Cu attenuates LPS-induced and CuSO₄-induced inflammation by reducing neutrophil/macrophage migration, suppressing pro-inflammatory cytokines (TNF-α, IL-6), and upregulating anti-inflammatory IL-10 [^hu2026]. Mechanism involves JAK1 pathway downregulation. This is an early-stage model; human relevance is unknown. #gap/needs-human-replication

### Angiogenesis and nerve growth

Pickart & Lovejoy 1987 [^pickart1987] and subsequent in vivo studies report GHK-Cu promotes blood vessel formation and nerve outgrowth in wound models. The molecular mechanism for angiogenesis is incompletely characterized; HIF-1α involvement is proposed but not confirmed.

## Effects on aging hallmarks

No direct link to a canonical López-Otín hallmark has been established in a verifiable primary source. Plausible associations (speculative):

| Hallmark | Proposed association | Evidence quality |
|---|---|---|
| [[altered-intercellular-communication]] | GHK-Cu acts as a paracrine peptide signal modulating fibroblast and immune cell behaviour | Mechanistic, in vitro; no in vivo aging model |
| [[chronic-inflammation]] | Anti-inflammatory effects documented in zebrafish model | Single model organism; #gap/needs-human-replication |
| [[stem-cell-exhaustion]] | ECM niche quality supports stem cell function in aged muscle/skin | Indirect; no direct data |

**Decision:** `hallmarks:` left empty in frontmatter. An association with [[altered-intercellular-communication]] is the most defensible given the paracrine signalling mechanism, but cannot be asserted without direct aging-model evidence. The R16 intervention matrix checklist requires at least one hallmark wikilink for compound pages — this is a **schema gap that must be escalated** (see summary below). #gap/needs-canonical-hallmark-assignment

## Topical vs. injectable — clinical evidence split

**Topical (cosmetic and wound-healing):**
- GHK-Cu is an ingredient in numerous cosmetic products (face serums, wound-healing creams) in concentrations typically 0.01–2%.
- Topical delivery is the best-supported route by the (limited) human data. A 2025 review by Mortazavi et al. [^mortazavi2025] identifies a "surprising absence of clinical studies" despite widespread cosmetic use.
- Skin permeation of GHK-Cu through intact stratum corneum is limited; liposomal and palmitoylated derivatives (Pal-GHK, Pal-GQPR) are used to improve penetration [^ogorek2025; ^dymek2023].
- No FDA-approved topical GHK-Cu drug product exists; it is a cosmetic ingredient regulated as such.

**Injectable (compounding pharmacy context):**
- Before FDA PCAC 503A bulk-list restrictions, injectable GHK-Cu was formulated by compounding pharmacies for subcutaneous or intramuscular use.
- No published placebo-controlled RCT of injectable GHK-Cu in humans for any indication has been identified in this seeding pass.
- Injectable copper administration carries risk of copper toxicity (see Safety below); the therapeutic window relative to toxicity has not been characterized for GHK-Cu specifically.

**Practical rule:** topical cosmetic evidence does NOT transfer to injectable efficacy claims. The routes have different PK profiles, different dose delivered to systemic circulation, and different risk profiles.

## Pharmacokinetics

Formal human PK data for GHK-Cu is sparse.

- **Topical:** skin penetration is low for the free peptide; effective topical delivery requires formulation engineering (liposomes, palmitoyl conjugates) [^ogorek2025].
- **Injectable:** once in circulation, GHK peptide is expected to have a short half-life (~minutes to low hours) due to proteolytic degradation by serum and tissue peptidases; copper would redistribute to albumin and ceruloplasmin. No published human PK study was found.
- **Oral bioavailability:** tripeptides are partially absorbed intact but predominantly hydrolyzed to amino acids; GHK-specific oral bioavailability is not reported. #gap/dose-response-unclear

## Safety

**Topical:** generally well-tolerated at cosmetic concentrations; no serious adverse events reported in reviews.

**Injectable copper context:** Copper toxicity (hepatic accumulation, oxidative damage) is well-documented at supraphysiological doses. GHK-Cu at pharmacological injectable doses delivers bioavailable copper; the therapeutic index relative to copper toxicity for this specific formulation is not characterized. This is a material safety gap for injectable use. #gap/long-term-unknown

**No human clinical safety study for injectable GHK-Cu was found** in this seeding pass.

## Human evidence summary

| Route | Evidence | Notes |
|---|---|---|
| Topical cosmetic | Preclinical + observational cosmetic literature | No blinded RCT with objective endpoints |
| Injectable | None identified | No published trial |
| Ex vivo skin | Mechanistic collagen-synthesis data in fibroblasts | Well-replicated at cell level; not in vivo human |

`human-evidence-level: limited` — applies to topical route with the note that the evidence base is largely cosmetic-grade (no blinded RCT with objective endpoints). Injectable evidence is `none`.

## Translation gap and next experiment

- `translation-gap: biomarker-only` — existing evidence demonstrates mechanistic activity (collagen synthesis in cell culture, wound healing in animals) but no validated biomarker of systemic GHK-Cu activity in aging humans exists, and no efficacy endpoint in a powered human trial has been demonstrated.
- The `next-experiment:` field (see frontmatter) describes the single study that would resolve the injectable human-evidence gap: a blinded RCT with objective skin collagen endpoint.

## Clinical trials

ClinicalTrials.gov v2 query for "GHK copper tripeptide" with status RECRUITING/ACTIVE_NOT_RECRUITING returned **0 active trials** as of 2026-05-09. #gap/long-term-unknown

## Classification

- **Intervention-classes:** [[frameworks/intervention-classes]] — `extracellular-matrix-remodeling` (new class, added R36 2026-05-09), `copper-chaperone`, `collagen-synthesis-stimulation`
- **SENS strategy:** not mapped (ECM repair does not correspond directly to a canonical SENS damage category)
- **Hallmark target:** none directly established (see hallmarks section above)
- **Clinical category:** cosmetic ingredient (topical); compounding-pharmacy biologic (injectable, pre-FDA restriction); not an FDA-approved drug in either context

## Limitations and gaps

- **Plasma decline figures trace to an unpublished PhD thesis.** The 200→80 ng/mL (age 20→60) claim is propagated across Pickart-group reviews; both OA review PDFs (2015, 2018) were verified and both trace this figure to Pickart 1973 (PhD thesis, UCSF), not to a peer-reviewed analytical measurement study. #gap/unsourced
- **No injectable human RCT.** All injectable use has been clinical practice without a controlled trial. #gap/needs-human-replication
- **No large topical RCT with objective endpoints.** Cosmetic evidence is primarily industry-sponsored and lacks blinding/objective skin-collagen measurement.
- **Hallmark assignment is unclear.** GHK-Cu does not map cleanly to any López-Otín hallmark via verified primary evidence. #gap/needs-canonical-hallmark-assignment
- **Review-dominated citation landscape.** Most mechanistic claims originate from Pickart-group review papers that synthesize older primary work; independent replication by other groups is limited for many claims.
- **Copper toxicity at injectable doses is uncharacterized.** #gap/long-term-unknown
- **ChEMBL and CAS IDs not confirmed.** #gap/needs-canonical-id

## Footnotes

[^schlesinger1977]: doi:10.1007/bf02002806 · Schlesinger DH, Pickart L, Thaler MM · *Experientia* 1977;33(3):324-325 · review/isolation · model: human serum fractionation · structural identification of the growth-modulating serum tripeptide as Gly-His-Lys · 28 citations · archive: not_oa
[^pickart1980]: doi:10.1002/jcp.1041020205 · Pickart L, Thaler MM · *Journal of Cellular Physiology* 1980;102(2):129-139 · PMID 6246126 · in-vitro · model: human hepatoma cells · GHK (glycylhistidyllysine) identified as plasma growth-modulating tripeptide; association with Cu²⁺ and Fe²⁺ ions characterized; complexes stimulate hepatoma cell adhesiveness and growth
[^pickart1987]: doi:10.1016/0076-6879(87)47121-8 · Pickart L, Lovejoy S · *Methods in Enzymology* 1987;147:314-328 · review · 57 citations · review of GHK biological activity including collagen, angiogenesis, nerve growth claims · archive: not_oa
[^maquart1988]: doi:10.1016/0014-5793(88)80509-x · Maquart FX, Pickart L, Laurent M, Gillery P, Monboisse JC, Borel JP · *FEBS Letters* 1988;238(2):343-346 · in-vitro · model: human fibroblast cultures · GHK-Cu stimulates collagen synthesis; onset between 10⁻¹² M and 10⁻¹¹ M, maximum at 10⁻⁹ M, independent of proliferation changes · 173 citations · archive: not_oa (concentrations confirmed via Crossref abstract)
[^pickart2015]: doi:10.1155/2015/648108 · Pickart L, Vasquez-Soltero JM, Margolina A · *BioMed Research International* 2015;2015:648108 · review · 125 citations · 7-page review of GHK mechanisms in skin regeneration; collagen, elastin, GAG synthesis claims synthesized from multiple primary sources; no original data; plasma-decline figure (200→80 ng/mL, age 20→60) cited to Pickart 1973 PhD thesis · archive: downloaded (PMC4508379)
[^pickart2018]: doi:10.3390/ijms19071987 · Pickart L, Margolina A · *International Journal of Molecular Sciences* 2018;19(7):1987 · review · 115 citations · 13-page review of GHK protective and regenerative actions; Broad Institute Connectivity Map gene-expression data: 31.2% of human genes altered ≥50% (~2152 genes stimulated or suppressed per Table 1); plasma-decline figure (200→80 ng/mL) cited to Pickart 1973 PhD thesis; no original primary data; review-grade evidence only · archive: downloaded (PMC6073405)
[^hu2026]: doi:10.1016/j.ejphar.2026.178880 · PMID 41997403 · Hu J, Zhang C, Wang F · *European Journal of Pharmacology* 2026 · in-vivo · model: zebrafish larvae (CuSO₄ and LPS inflammation models) · GHK-Cu reduces neutrophil/macrophage migration, pro-inflammatory cytokines; increases IL-10; JAK1 pathway downregulation
[^mortazavi2025]: doi:10.34172/bi.30071 · PMID 39963574 · Mortazavi SM, Mohammadi Vadoud SA, Moghimi HR · *BioImpacts* 2025 · review · notes "surprising absence of clinical studies" on topical GHK despite widespread cosmetic use; covers GHK and Pal-GHK anti-wrinkle evidence
[^ogorek2025]: doi:10.3390/molecules30010136 · PMID 39795193 · Ogórek K, Nowak K, Wadych E, Ruzik L, Timerbaev AR, Matczuk M · *Molecules* 2025 · review · skin permeation methodology for liposomal GHK-Cu; GHK-Cu noted as "fairly hydrophilic with limited permeation through the lipophilic stratum corneum"; identifies major gaps in standardized assessment approaches
[^dymek2023]: doi:10.3390/pharmaceutics15102485 · PMID 37896245 · Dymek M, Olechowska K, Hąc-Wydro K, Sikora E · *Pharmaceutics* 2023 · in-vitro · liposomal GHK-Cu formulation; ~100 nm particles; encapsulation efficiencies 31.7% (cationic) and 20.0% (anionic); 48.9% elastase inhibition
