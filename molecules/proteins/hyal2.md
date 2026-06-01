---
type: protein
aliases: [HYAL2, Hyal-2, hyaluronoglucosaminidase-2, hyaluronidase-2, LUCA2, LuCa-2, "lung carcinoma protein 2"]
uniprot: Q12891
ncbi-gene: 8692
hgnc: 5321
ensembl: ENSG00000068001
genage-id: null   # not in GenAge human curated set as of 2026-05-27; search returned no match
mouse-ortholog: Hyal2   # MGI sentence-case; mouse UniProt O35632; one-to-one ortholog
pathways: ["[[hyaluronan-catabolism]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 3   # Open Targets (ENSG00000068001): all SM buckets false (no approved SM drug, no clinical SM, no high-quality pocket or ligand); antibody modality has high-confidence membrane-accessibility signals (UniProt loc high conf + TMHMM + UniProt SigP true). Aging-context tier 3 reflects GPI-anchored extracellular face accessibility to biologics/antibodies and demonstrated siRNA knockdown efficacy, but NO validated small-molecule probe or approved drug for any aging indication exists. See Druggability section.
gtex-aging-correlation: null   # not yet checked; #gap/needs-tissue-expression-check
mr-causal-evidence: not-tested   # no published Mendelian randomization study linking HYAL2 to aging outcomes as of 2026-05-27; GWAS instruments exist (OMIM 603551) but no aging-outcome MR
caused-by: []
causes: ["[[hyaluronic-acid]]"]
literature-checked-through: 2026-05-27
verified: true
verified-date: 2026-05-27
verified-by: claude
verified-scope: "Sun 2025 (doi:10.3389/fmed.2025.1529936) verified end-to-end against local PDF — all quantitative claims confirmed: BALB/c nude female 6-wk, acute UVB 300 mJ/cm² total over 5 days (not 300 mJ/cm²/day), chronic 10-wk two-phase schedule confirmed, 1×10⁶ cells s.c., n=3 per group for all in-vivo experiments, p<0.05/p<0.01 one-way ANOVA, all outcome endpoints (HA content, water content, elasticity, wrinkle score, epidermal/dermal thickness) confirmed. HYAL2 fragment size ~20 kDa confirmed from Introduction. UniProt Q12891 confirmed: 473 aa, signal peptide 1-20, mature chain 21-448, Asp135 active site (proton donor), 5 disulfide bonds, 3 N-glycosylation sites, EGF-like domain 361-439, GPI anchor at Gly448 (amidated). Open Targets ENSG00000068001 re-queried via API 2026-05-27: all SM buckets false confirmed; AB modality: UniProt loc high conf TRUE, GO CC high conf TRUE, UniProt SigP or TMHMM TRUE — consistent with druggability-tier 3 assessment; PROTAC: Database Ubiquitination TRUE (no clinical stage). He 2026 (PMID 41806573) AKT direction confirmed via abstract: LMW-HA suppresses/inhibits AKT phosphorylation (CD44/AKT inactivation) — wiki footnote correct. Sinova 2023 (PMID 37443444) HYAL2 upregulation confirmed via abstract; note: abstract also states acute UV increases HA amount in human epidermis — consistent with gap/contradictory-evidence framing already on page. Lee 2026 (PMID 41543308), Zych 2023 (PMID 37630991) directional claims confirmed via abstracts. Oh 2022 (PMID 35122447) gefitinib/EGFR claim not independently verifiable (closed-access) — tagged not_oa."
---

# HYAL2 (Hyaluronidase-2)

HYAL2 is the dominant GPI-anchored, acid-active cell-surface hyaluronidase responsible for the **initial cleavage of high-molecular-weight hyaluronan (HMW-HA) into intermediate-size fragments** (~20 kDa). It functions as the first step in a two-enzyme degradation relay: HYAL2 clips HMW-HA at the cell surface, and HYAL1 completes digestion to small oligosaccharides in lysosomes. Because HMW-HA is cytoprotective and anti-inflammatory while LMW-HA fragments are pro-inflammatory (full mechanism on [[hyaluronic-acid]]), HYAL2 sits at the **control point of the aging-relevant HMW→LMW balance**. Rising HYAL2 activity with UV exposure and aging shifts tissue HA toward the pro-inflammatory LMW pool, feeding forward into [[chronic-inflammation|inflammaging]].

## Identity

| Field | Value |
|---|---|
| UniProt (human) | Q12891 (HYAL2_HUMAN) |
| UniProt (mouse) | O35632 |
| NCBI Gene | 8692 |
| HGNC | 5321 |
| Ensembl | ENSG00000068001 |
| EC number | 3.2.1.35 |
| Gene locus | 3p21.3 (chromosome 3 short arm) |
| Protein length | 473 amino acids (53,860 Da; signal peptide residues 1–20; mature chain 21–448) |
| Mouse ortholog | Hyal2 (one-to-one; UniProt O35632) |
| GenAge ID | null — not in GenAge human curated set as of 2026-05-27 |

**Locus note.** 3p21.3 is a region with multiple established tumor-suppressor genes; HYAL2 originally identified under the alias "lung carcinoma protein 2" (LuCa-2 / LUCA2) based on its chromosomal position in a LOH region frequently deleted in lung cancer [^luca2-alias]. Its tumor-suppressor role, if any, is independent of the aging-HA axis and is not the focus of this page.

## Key molecular features

- **GPI anchor:** Cleaved C-terminal propeptide; mature protein is tethered to the outer leaflet of the plasma membrane via glycosylphosphatidylinositol. This positions the active site extracellularly, where it contacts substrate HA. GPI anchorage also allows shedding into exosomes/extracellular vesicles.
- **Active site:** Asp135 is the proton donor (acid-active; pH optimum ~3.7 in vitro, but cell-surface activity at physiological pH has been demonstrated).
- **Post-translational modifications:** 3 N-linked glycosylation sites; 5 disulfide bonds; EGF-like domain (residues 361–439).
- **Secretion/lysosomal duality:** Though GPI-anchored, HYAL2 is also detected in lysosomes and cytoplasmic vesicles (UniProt), suggesting trafficking between compartments. Lysosomal HYAL1 (EC 3.2.1.35; lysosomal, soluble, acid-active) completes degradation of HYAL2-generated fragments to oligosaccharides.

## Distinction from related enzymes

| Enzyme | Location | Product | Aging/context relevance |
|---|---|---|---|
| **HYAL2** | GPI-anchored cell surface, vesicles | ~20 kDa fragments (intermediate) | Primary controller of HMW-HA → LMW conversion; this page |
| **HYAL1** | Lysosomal (secreted) | Tetra- to hexasaccharides | Completes HA degradation; lower expression in NMR lymph nodes vs mouse |
| **TMEM2** | Cell surface (non-GPI, transmembrane) | Low-MW fragments | NMR TMEM2 lacks hyaluronidase activity (Bauer 2024) — contributes to NMR HMW-HA advantage; see [[tmem2]] |
| **PH-20 / SPAM1** | Testicular, acrosomal | HA oligomers | Sperm-HA dissolution at fertilization; pharmaceutical form = hylenex/Hylenex (recombinant human; subcutaneous dispersion agent). **NOT an aging enzyme.** |

> **PH-20 / hylenex confusion warning.** Pharmaceutical hyaluronidase products (Hylenex, Amphadase, Vitrase) use recombinant PH-20/SPAM1 or bovine HYAL, not HYAL2. HYAL2 knockdown or inhibition is not the mechanism of these drugs, and studies of pharmaceutical hyaluronidase should not be extrapolated to HYAL2 biology.

## Role in the HA-MW aging axis

The molecular-weight-dependent biology of HA is documented in full on [[hyaluronic-acid]]. HYAL2 is the gating enzyme:

- HMW-HA (≥1 MDa) occupies [[cd44]] in a multivalent configuration that activates NF2 (merlin), suppresses YAP/TAZ via the Hippo pathway, and enforces contact inhibition — an anti-proliferative, anti-inflammatory signal. This is the mechanism underlying naked mole-rat cancer resistance (Tian 2013) [^tian2013].
- HYAL2 cleavage generates ~20 kDa LMW-HA fragments that engage [[cd44]] and TLR2/TLR4 as pro-inflammatory DAMPs, activating NF-κB and amplifying [[chronic-inflammation|inflammaging]]. HYAL2-generated LMW-HA has been shown to promote nucleus pulposus cell senescence via a CD44/AKT axis in intervertebral disc degeneration [^he2026], illustrating the feedforward loop between HYAL2 activity, LMW-HA, and cellular senescence in aged tissues.
- The naked mole rat's HMW-HA advantage involves both elevated [[has2]] synthesis *and* reduced degradation. NMR TMEM2 lacks hyaluronidase activity (Bauer 2024) and NMR HYAL2 expression is lower than mouse HYAL2 in lymph nodes (del Marmol 2021; see [[hyaluronic-acid]] for details) [^delmarmol2021].

Aging shifts the HYAL2/HAS2 balance toward degradation via at least two mechanisms: (1) UV exposure acutely upregulates HYAL2 transcription and protein in mouse dorsal skin [^sun2025] and in UV-irradiated human epidermis [^sinova2023]; (2) chronic inflammation feeds back to increase hyaluronidase activity, further fragmenting the HA matrix that otherwise restrains inflammatory signaling.

## Skin-aging context

### Sun et al. 2025 (primary source)

Sun et al. 2025 (*Frontiers in Medicine*, doi:10.3389/fmed.2025.1529936; gold OA, PMC12069053) provides the first in-vivo validation that HYAL2 knockdown improves skin-aging endpoints [^sun2025]. Key verified facts (user confirms PMC full text read):

**Model:** BALB/c nude female mice (6 weeks), two protocols — (1) acute photoaging: UVB 300 mJ/cm² **total** over 5 days (5 MEDs at 100 µW/cm²); (2) chronic photoaging: UVB 10-week two-phase protocol (120 mJ/cm²/week × 4 weeks, then 180 mJ/cm²/week × 6 weeks; 130 MED total).

**Finding:** HYAL2 mRNA and protein are significantly upregulated in UVB-irradiated mouse dorsal skin (both acute and chronic models). HA content decreases with UV exposure ("gradual reduction in HA content and dehydration").

**Intervention:** Engineered human adipose-derived stem cells (ADSCs) secreting HYAL2-targeting siRNA packaged into small extracellular vesicles (sEVs); delivered by subcutaneous implantation of 1×10⁶ cells.

**Outcomes after HYAL2 knockdown** (all p<0.05 or p<0.01, one-way ANOVA; n=3 replicates):
- Restored dermal HA content
- Restored skin water content
- Improved elasticity
- Reduced wrinkle score
- Restored epidermal and dermal thickness

**Evidence quality:**

| Dimension | Status | Notes |
|---|---|---|
| Pathway (HYAL2 → HA-MW balance) conserved in humans? | partial | MW-dependent HA biology is established in human tissue; HYAL2 upregulation on UV confirmed in human epidermis (Sinova 2023) [^sinova2023] |
| Phenotype (HYAL2 inhibition improves skin aging) conserved in humans? | unknown | Demonstrated only in BALB/c nude mouse; no human-skin HYAL2 knockdown data |
| Replicated in humans? | no | Mouse only; single study; n=3 |

#gap/needs-human-replication — Mouse-only study; the siRNA/cell-therapy modality is not a pharmacological HYAL2 inhibitor; no human-skin HYAL2 expression or intervention data exists.

### Sinova et al. 2023 (human epidermal data)

Sinova et al. 2023 (*Experimental Dermatology*, doi:10.1111/exd.14875) examined HA metabolism in UV-irradiated human epidermis [^sinova2023]. Key finding: **acute UV exposure upregulates HYAL2 gene expression** alongside other hyaluronan-metabolizing enzymes in human epidermal models. This is the primary human-skin evidence that the HYAL2/UV relationship demonstrated in mouse by Sun 2025 is also present in human epidermis — though the paper does not include a pharmacological intervention.

### HA-content contradiction flag

#gap/contradictory-evidence — Sun 2025 (mouse UVB) reports HA *decreases* in photoaging, while [[skin-aging]] and [[hyaluronic-acid]] document that human solar elastosis shows HA *accumulation* in the dermis (particularly in the elastin-degradation zone). These observations are likely not contradictory but may reflect:
- Species difference (mouse vs human dermis)
- Compartmental difference (epidermal vs dermal HA pools)
- Measurement method (bulk HA content assay vs histological localization)
- Stage of damage (acute UV loss vs chronic solar elastosis accumulation representing pathological HMW→LMW conversion in a distinct compartment)

This discordance is unresolved. Do not assert that HA universally decreases or universally accumulates in photoaged skin without specifying compartment, species, and measurement method.

## Pathway membership and interactors

- [[hyaluronic-acid]] — substrate; HYAL2 is the primary enzyme controlling HMW-HA turnover at the cell surface
- [[has2]] — opposing enzyme (synthesis); HYAL2/HAS2 ratio determines local HA-MW balance
- [[cd44]] — receptor for both HMW-HA (anti-inflammatory mode) and LMW-HA (pro-inflammatory mode); HYAL2 activity shifts which mode predominates
- [[tmem2]] — parallel cell-surface HA-degrading enzyme; NMR loss-of-function contributes to HMW-HA advantage (see [[hyaluronic-acid]])
- [[chronic-inflammation]] — downstream of LMW-HA accumulation via TLR2/TLR4 → NF-κB
- [[skin-aging]] — tissue context where HYAL2-UV upregulation is best characterized

## Druggability (aging context)

**Open Targets assessment (ENSG00000068001; accessed 2026-05-27):**
- Small molecule: no approved drug, no clinical-stage drug, no high-quality ligand, no high-quality pocket, no druggable-family flag — **all SM tractability buckets are false**.
- Antibody/biologic modality: UniProt loc high conf TRUE, GO CC high conf TRUE, UniProt SigP or TMHMM TRUE — membrane-accessible for biologic targeting. (Note: Open Targets combines SigP and TMHMM as a single "UniProt SigP or TMHMM" bucket; GO CC high conf is an additional independent positive signal.)
- Proteolysis-targeting chimera (PROTAC) modality: no literature, no ubiquitination data from UniProt (database ubiquitination true, but no clinical stage).

**Aging-context druggability-tier: 3** (predicted druggable via biologic/antibody approach based on GPI-anchored extracellular accessibility; no validated SM probe; no clinical drug for any aging indication).

**Existing broad hyaluronidase inhibitors.** Several compounds inhibit hyaluronidase activity non-selectively in vitro:
- [[escin]] — in-vitro hyaluronidase inhibition (non-selective across HYAL isoforms); the clinical relevance of this activity is uncertain and no HYAL2-selective escin dosing has been established. See [[escin]] § mechanism.
- Sulfated polysaccharides (heparin, chondroitin sulfate) — competitive inhibition
- Some flavonoids (quercetin, luteolin) — at concentrations well above dietary exposure

None of these is a selective HYAL2 inhibitor. None has been validated for an aging-skin indication in controlled human studies.

**Translation gap:** The Sun 2025 siRNA/sEV/ADSC approach is a proof-of-concept for HYAL2 knockdown improving skin aging — but it is an RNAi cell therapy, not a pharmacological inhibitor. The key next experiment is a topical or systemic small-molecule HYAL2-selective inhibitor tested in a human photoaging RCT. No such compound exists in clinical development as of 2026-05-27. #gap/needs-selective-inhibitor

## Recency literature summary (R25; PubMed search 2021–2026)

Search terms: "HYAL2 AND (skin aging OR photoaging OR hyaluronidase aging)"; also "HYAL2 AND (meta-analysis OR RCT OR systematic review)". Date window: 2021–2026-05-27.

**High-priority hits:** No meta-analyses or RCTs identified (search returned 0 results for HYAL2 + RCT/meta-analysis filter). This is consistent with HYAL2's status as a preclinical target with no human interventional trial.

**Key recent papers integrated:**
1. **Sun et al. 2025** (PMID 40365494; anchor paper — primary source for this page) [^sun2025]
2. **Sinova et al. 2023** (PMID 37443444) — human epidermal HYAL2 UV upregulation; highest relevance as human-context corroboration [^sinova2023]
3. **Lee et al. 2026** (PMID 41543308) — photoaging plant extract downregulates HYAL1+HYAL2 in vivo; consistent with HYAL2-inhibition hypothesis [^lee2026]
4. **Zych et al. 2023** (PMID 37630991) — Sphagnum extracts increased HYAL2 in human dermal fibroblasts; cautionary re: some plant extracts [^zych2023]
5. **Oh et al. 2022** (PMID 35122447) — gefitinib (EGFR inhibitor) reduces HYAL2 mRNA/protein in keratinocytes; pharmacological context (EGFR → HYAL2 regulation) [^oh2022]

No recency search source contradicts the overall framing; Sun 2025 and Sinova 2023 are mutually reinforcing.

## Limitations and gaps

- #gap/needs-human-replication — all functional HYAL2 knockdown data is mouse-only (Sun 2025); Sinova 2023 confirms human HYAL2 UV-upregulation at transcript level but has no intervention arm
- #gap/needs-selective-inhibitor — no selective small-molecule HYAL2 inhibitor exists; broad hyaluronidase inhibitors lack isoform specificity
- #gap/contradictory-evidence — HA-content direction in photoaged skin differs between mouse (Sun 2025: decrease) and human solar elastosis literature (accumulation); unresolved compartment/species/method confound
- #gap/needs-tissue-expression-check — GTEx aging correlation for HYAL2 not checked; age-related expression trajectory across human tissues unknown
- #gap/needs-replication — Sun 2025 n=3; single study; single intervention modality (siRNA/ADSC/sEV)

## Cross-references

- [[hyaluronic-acid]] — molecular-weight biology, NMR HMW-HA mechanisms, translation gap (HYAL inhibition as strategy)
- [[has2]] — opposing enzyme in the HA synthesis/degradation balance
- [[cd44]] — primary receptor through which HA-MW shift exerts downstream signaling effects
- [[skin-aging]] — tissue context; Sun 2025 findings integrated there
- [[chronic-inflammation]] — downstream hallmark of LMW-HA accumulation
- [[altered-intercellular-communication]] — SASP / paracrine inflammaging context
- [[tmem2]] — parallel cell-surface HA-degrading enzyme (stub; page not yet created)
- [[escin]] — broad non-selective hyaluronidase inhibitor; in-vitro only; no HYAL2-selective aging validation

## Footnotes

[^luca2-alias]: The alias "lung carcinoma protein 2" (LuCa-2 / LUCA2) originates from the identification of HYAL2 in a frequent LOH region at 3p21.3 in non-small-cell lung cancer; the alias reflects chromosomal mapping, not a demonstrated HYAL2 tumor-suppressor function. UniProt Q12891 (HYAL2_HUMAN), accessed 2026-05-27.

[^tian2013]: doi:10.1038/nature12234 · Tian X et al. · *Nature* 2013 · n=in-vitro (NMR/mouse/guinea pig fibroblasts) + engineered-cell rescue experiments · model: naked mole rat vs mouse/guinea pig cells; HAS2 knockdown + HYAL2 overexpression restore oncogenic transformation susceptibility · HYAL2 overexpression used as rescue tool confirming HMW-HA as mechanistically required for NMR contact inhibition

[^delmarmol2021]: doi:10.1038/s41598-021-86967-9 · del Marmol D et al. · *Scientific Reports* 2021 · n=3 NMR skin samples · in-vitro/ex-vivo · NMR HYAL2 expression lower than mouse HYAL2 in lymph nodes; NMR HA peak at ~2.5 MDa by SEC; Alcian Blue critique of Tian 2013 methodology

[^sun2025]: doi:10.3389/fmed.2025.1529936 · Sun B, He Y, Zhang L et al. · *Frontiers in Medicine* 2025;12:1529936 · in-vivo (mouse) · n=3 per group · model: BALB/c nude female 6-wk mice — acute UVB (300 mJ/cm² total over 5 days; 5 MEDs at 100 µW/cm²) and chronic (10-wk, two-phase: 120 mJ/cm²/wk × 4 wk then 180 mJ/cm²/wk × 6 wk; 130 MED total) · intervention: engineered human ADSCs secreting HYAL2-targeting siRNA via sEVs, s.c. implant 1×10⁶ cells · HYAL2 upregulated by UVB; knockdown restores HA + water content, elasticity, thickness, reduces wrinkles (p<0.05–0.01, one-way ANOVA) · PMID 40365494 · PMC12069053 (gold OA; PDF verified end-to-end 2026-05-27: )

[^sinova2023]: doi:10.1111/exd.14875 · Sinova R et al. · *Experimental Dermatology* 2023 · in-vitro/ex-vivo (human epidermal models) · model: UV-irradiated human epidermis · HYAL2 gene expression upregulated after acute UV alongside other HA-metabolizing enzymes; provides human-skin corroboration of mouse HYAL2/UV relationship · PMID 37443444 · closed-access; not locally downloaded

[^he2026]: doi:10.1016/j.bbrc.2026.153576 · He S et al. · *Biochemical and Biophysical Research Communications* 2026 · in-vitro (nucleus pulposus cells) · HYAL2-generated LMW-HA suppresses AKT via CD44, promoting cell senescence and ECM degradation in intervertebral disc degeneration · PMID 41806573

[^lee2026]: doi:10.1002/mnfr.70378 · Lee et al. · *Molecular Nutrition & Food Research* 2026 · in-vivo (mouse) + in-vitro · Gynostemma pentaphyllum hydrodistillate + damulin B prevent UVB photoaging via ROS suppression and downregulation of HYAL1 + HYAL2 · PMID 41543308 · bronze OA; download pending

[^zych2023]: doi:10.3390/ph16081076 · Zych M et al. · *Pharmaceuticals* 2023 · in-vitro (normal human dermal fibroblasts) · Sphagnum extracts increased HYAL2, HYAL3, HYAL4 gene expression — cautionary for use in anti-aging cosmetics framed as HA-preserving · PMID 37630991 · gold OA

[^oh2022]: doi:10.1111/exd.14538 · Oh et al. · *Experimental Dermatology* 2022 · in-vitro (HaCaT keratinocytes) · gefitinib (EGFR inhibitor) suppresses HAS2, HAS3, CD44, HYAL1, HYAL2 mRNA + protein — EGFR signaling regulates HYAL2 expression in skin cells · PMID 35122447 · closed-access; not locally downloaded
