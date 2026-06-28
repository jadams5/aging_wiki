---
type: study
doi: 10.1038/nature17638
pmid: 27074508
pmc: PMC5035541
title: "Age-dependent modulation of vascular niches for haematopoietic stem cells"
authors: [Kusumbe AP, Ramasamy SK, Itkin T, Mäe MA, Langen UH, Betsholtz C, Lapidot T, Adams RH]
year: 2016
journal: Nature
volume: 532
issue: 7599
pages: 380-384
study-design: in-vivo
publication-type: research-article
organism: mus-musculus
n-subjects: "4–12 per group depending on endpoint; multiple independent experiments; C57BL/6J males"
intervention: []
hallmarks-tested: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [type-H-vessel-definition, age-related-niche-decline, pdgfrb-perivascular-cell-decline, notch-activation-niche-restoration, hif-partial-rescue-without-arterialization, pdgfb-perivascular-expansion, cell-intrinsic-hsc-aging-persists]
local-pdf: null
verified: true
verified-date: 2026-06-28
verified-by: claude
verified-scope: "All quantitative claims verified against primary PDF (PMC5035541, 40 pages incl. main figures 1-4 and Extended Data 1-10). Corrigendum (DOI 10.1038/nature19782; Nov 2016) is closed-access and its specific figure corrections could not be confirmed — claims derived from figure panels should be treated as provisional pending corrigendum review. Canonical-database identity fields not re-verified."
---

# Age-dependent modulation of vascular niches for haematopoietic stem cells

## TL;DR

Foundational paper establishing **type-H endothelium** (CD31^hi Emcn^hi) as a specialized bone vascular subtype that anchors hematopoietic stem cell (HSC) niches and drives osteogenesis. Type-H vessels and their associated PDGFRβ+ perivascular cells decline markedly in aged mice. Endothelial **Notch** signaling (but not HIF signaling alone) can restore niche architecture in aged bone — expanding type-H vessels, arterioles, and PDGFRβ+ cells, and raising HSC numbers. Critically, this niche restoration increases HSC *quantity* but fails to rescue HSC *function* because cell-intrinsic DNA damage (γH2AX) persists in aged HSCs regardless of niche status. The paper establishes a conceptual frame that niche aging and cell-intrinsic aging are parallel, independently targetable processes.

---

## Study Context

The [[bone-marrow]] vascular niche was known to regulate HSC quiescence and mobilization partly through [[cxcl12]] (CXCL12/CXCR4 retention signals) and endothelial-derived factors, but the specific vascular subtype responsible for niche function — and how it changes with age — was not established. This paper, from Ralf Adams' lab (Max Planck Institute for Molecular Biomedicine), is the second major study from the group on type-H bone vasculature. It extends the foundational 2014 pair: Kusumbe et al. 2014 (*Nature* 507:323–328, DOI 10.1038/nature13145 [^kusumbe2014]) originally defined type-H (CD31^hi Emcn^hi) bone vessels and documented their age-related decline; [[studies/ramasamy-2014-endothelial-notch-bone|Ramasamy et al. 2014]] (*Nature* 507:376–380 [^ramasamy2014]) established that endothelial Notch–DLL4 signalling drives type-H identity and couples bone vasculature to osteoprogenitor maintenance via angiocrine Noggin. The 2016 Kusumbe paper asked how niche aging intersects with HSC functional aging by applying the established genetic tools in aged mice. #gap/needs-replication — the in vivo findings on vessel typing and niche function are from a single lab; replication in independent labs and other mouse backgrounds would strengthen confidence.

---

## Type-H Endothelium: Definition and Characterization

Type-H vessels are defined by **co-high expression of CD31 (PECAM-1) and Endomucin (Emcn)**, resolved by flow cytometry. They are distinguished from type-L sinusoidal vessels (CD31^lo Emcn^lo), which comprise the majority of bone marrow vascular volume. The operational phenotype of type-H endothelium (ECs) [^kusumbe2016]:

- **Anatomical location:** Metaphysis and endosteum of long bones; the regions most active in bone remodeling and hematopoiesis.
- **Arterial identity markers:** Sox17, ephrin-B2 (Efnb2), Neuropilin-1 (Nrp1), and Sca-1 (Ly-6A/E) — all expressed higher in type-H vs type-L ECs by qPCR.
- **Connectivity:** Positioned directly downstream of arterioles; type-H capillaries thus retain arterial-like properties.
- **Proliferative activity:** Strong EdU (5-ethynyl-2'-deoxyuridine) labeling, distinguishing them from the largely quiescent sinusoidal type-L endothelium.
- **Niche function:** Surrounded by osteoprogenitors (linked to [[osteoblasts]] specification) and secrete factors including stem cell factor (SCF, gene: [[kitlg]]) that support HSC maintenance.

The distinction between type-H and type-L is operationally critical: interventions that expand the wrong vessel subtype (e.g., HIF-mediated type-H expansion without arterialization — see below) fail to improve HSC niche function.

---

## Age-Related Decline of the Bone Vascular Niche

In aged mice (65–70 weeks old) compared with young controls (3–5 weeks old; methods specifies the group range as 2–5 weeks young vs 55–70 weeks aged) [^kusumbe2016]:

- **Arteriole loss:** Tibias from aged mice contained significantly fewer α-smooth-muscle-actin (α-SMA)-covered arteries than young bone (quantified by histomorphometry; n=12 young, 2 independent experiments; P<0.0001; Fig. 1c). Two-tailed unpaired t-test.
- **Ephrin-B2+ EC decline:** Flow cytometry demonstrated significantly reduced ephrin-B2+ (arterial-marker-positive) ECs in aged vs young bone (n=9 young, 5 old mice; P=0.0003; Fig. 1c).
- **NG2+ perivascular cell depletion:** Quantitative analysis confirmed significant reduction in NG2+ perivascular cells in aged long bone (P<0.0001; n=5 mice, 2 tibias per mouse; mean±s.e.m.; Fig. 1d). PDGFRβ+ perivascular cell depletion is demonstrated by immunostaining in aged bone (Extended Data Fig. 5e) but was not independently quantified in a graph in this paper; PDGFRβ+ quantitation is provided only for the genetic manipulation experiments.
- **SCF (KITLG) decline:** ELISA for both cellular (membrane-bound) and secreted (extracellular) SCF pools showed significant reduction in aged mice: cellular SCF P<0.0001, secreted SCF P=0.0008 (n=5 each; mean±s.d.; Fig. 1e), consistent with loss of type-H vessel coverage and associated perivascular cell mass.

The combined decline of type-H vessels + perivascular osteoprogenitors + SCF constitutes a systemic degradation of HSC niche infrastructure that compounds with age. **Not yet replicated in humans** — the aging trajectory of CD31^hi Emcn^hi endothelium in human bone has not been reported as of 2026. #gap/needs-human-replication

---

## HSC Architecture: Coupling to Type-H Vessels

Canonical [[hematopoietic-stem-cells]] (HSC) phenotype in this paper: CD150+ CD48− Lin− Sca1+ c-Kit+ (SLAM LSK) [^kusumbe2016]. Key niche-localization findings:

- SLAM LSK HSCs were **more abundant in the dissected metaphysis** (type-H-rich zone) than in diaphyseal BM flushed from the shaft (n=5, 3 independent experiments; P=0.0119, two-tailed unpaired t-test; Extended Data Fig. 4e) — supporting spatial coupling to type-H vessel density.
- HSCs were found in proximity to type-H vasculature and CD31+ arterioles by imaging (CD150+ CD48- cells near endosteal Emcn+ endothelium; Extended Data Fig. 4f-i).
- [[kitlg]] (SCF) is implicated as the primary HSC-supportive signal from type-H-associated perivascular cells: PDGFRβ+ cells are enriched for *Kitlg* mRNA, and cellular (membrane-anchored) SCF is the functionally limiting form for HSC maintenance.

The perivascular cells (PDGFRβ+, NG2+) are distinct from [[mesenchymal-stem-cells]] in bulk BM but overlap with the osteoprogenitor/reticular cell populations that support HSCs in other niche models.

---

## Notch Signaling: Niche Restoration in Aged Bone

The paper's central mechanistic and translational finding is that **endothelial Notch signaling drives arterialization and type-H vessel expansion**, and this cascade is sufficient to restore niche architecture in aged bone [^kusumbe2016]:

**Loss-of-function** (young mice): EC-specific deletion of *Rbpj* or *Dll4* reduces arteries, ephrin-B2+ ECs, PDGFRβ+ perivascular cells, SCF, and HSC frequency. *Dll4*^iΔEC BM cells showed reduced long-term repopulation (LTR) activity in transplantation.

**Gain-of-function** (young mice): EC-specific deletion of *Fbxw7* (Fbxw7^iΔEC; *Fbxw7* ubiquitinates Notch intracellular domain for degradation, so deletion stabilizes Notch signaling) or overexpression of the Notch1 intracellular domain (NICD^iOE-EC) both produce:
- Arteriole formation
- Expanded Sca1+ ECs (~5-fold vs control for Fbxw7; Extended Data Fig. 6d; n=6; P=0.0095) and ephrin-B2+ ECs (~4-fold; P=0.0043)
- Increased α-SMA coverage, PDGFRβ+ perivascular cells (n=5 for NICD; n=8 and 7 mutants/controls for Fbxw7; P<0.0001; Fig. 2d), [[mesenchymal-stem-cells|MSC]] frequency (n=8; Extended Data Fig. 7a)
- Elevated cellular SCF (Extended Data Fig. 7c)
- Increased HSC frequency (Fbxw7: n=7 mutants, 6 controls; P=0.0022; NICD: n=7 mutants, 6 controls; P<0.0001; Fig. 2e), confirmed by primary and secondary competitive reconstitution assays (Fig. 2e–f; 7 months post-transplant)

**Gain-of-function in aged mice** (55–65 weeks): *Fbxw7*^iΔEC (1000 µg tamoxifen × 5 days, two rounds; analyzed after 16-day rest) produced [^kusumbe2016]:
- Profound expansion of CD31^hi capillaries and CD31+ arterioles (arterioles per mm²: n=5; P=0.0107; Fig. 4c)
- Increased ephrin-B2+ ECs (n=5; P=0.0117; Fig. 4c)
- Increased PDGFRβ+ and NG2+ perivascular cells (shown by immunostaining; Fig. 4d, e)
- Elevated cellular SCF (n=5 mutants, 4 controls; P<0.0001; Fig. 4f)
- **Significantly increased HSC frequency** (n=6 mutants, 4 controls; P=0.0487; Fig. 4g)

See "Cell-Intrinsic Limitation" below for the critical caveat about functional reconstitution. See also [[notch-pathway]].

---

## HIF Signaling: Necessary but Not Sufficient

Endothelial hypoxia-inducible factor (HIF) signaling is required to maintain type-H vessel abundance, but HIF activation alone is insufficient to improve niche function because it fails to drive arterialization [^kusumbe2016]:

**Loss-of-function:** EC-specific *Hif1a* deletion (*Hif1a*^iΔEC) reduces type-H ECs, Sca1+ ECs (n=5; Extended Data Fig. 8h), ephrin-B2+ ECs (n=5 mutants, 6 controls; P=0.0190; Extended Data Fig. 8h), PDGFRβ+ perivascular cells (n=5 mutants, 6 controls; P=0.0043; Fig. 3a), SCF cellular and secreted levels (cellular n=8 P<0.0001; secreted n=7 mutants, 4 controls P=0.0010; Fig. 3b), and HSC frequency (n=7 mutants, 6 controls; P<0.0001; Fig. 3f) — confirming HIF-1α is required for type-H vessel maintenance. Note that n values differ by endpoint: the n=7 mutants, 6 controls figure applies specifically to HSC frequency.

**Gain-of-function via VHL deletion:** *Vhl*^iΔEC (stabilizes HIF-1α and HIF-2α via blockade of VHL-mediated hydroxylation) produced striking expansion of type-H vasculature — yet **did not** increase morphologically identifiable arterioles, Sca1+ cells, or ephrin-B2+ ECs (all ns; Fig. 3e, n=7), or PDGFRβ+ perivascular cells (n=7 mutants, 5 controls; ns; Fig. 3c). Cellular SCF was not significantly elevated (ns; Fig. 3d); secreted SCF was elevated (P=0.0079; Fig. 3d). Consequently, **HSC frequency was not increased** in *Vhl*^iΔEC mice (n=9; ns; Fig. 3f). #gap/no-mechanism — the molecular mechanism by which Notch (but not HIF) drives arterialization and PDGFRβ+ cell expansion was not resolved within this paper.

**Key mechanistic conclusion:** The critical distinction is *arterialization* — type-H vessel identity coupled with α-SMA+ coverage and ephrin-B2 expression. HIF expands type-H vessel count without arterialization; Notch drives arterialization and the PDGFRβ+ perivascular cell expansion that delivers cellular SCF to HSCs.

Double-mutant experiments (*Hif1a*^iΔEC × *Fbxw7*^iΔEC) confirmed Notch is epistatic: Notch activation can rescue type-H vessels and HSC numbers even in the absence of HIF-1α.

---

## PDGF-B Axis and Perivascular Cell Expansion

A parallel approach to niche restoration tested EC-specific PDGF-B overexpression (*Pdgfb*^iOE-EC), reasoning that PDGF-B → PDGFRβ+ perivascular cell recruitment might be sufficient [^kusumbe2016]:

- Increased PDGFRβ+ and α-SMA+ perivascular cells (Fig. 3g, immunostaining)
- Higher cellular SCF levels (n=5; P<0.0001; Fig. 3i)
- Higher HSC frequency (n=5; P<0.0001; Fig. 3h)
- Improved LTR-HSC contribution in competitive transplantation (n=5 and 6 donors; P=0.0026; Fig. 3j; analyzed 14 weeks post-transplant)

This places PDGF-B/[[pdgfrb|PDGFRβ]] signaling as a partially separable axis from Notch-driven arterialization: PDGFRβ+ perivascular cell expansion alone is sufficient to raise HSC numbers, even without full arterial vessel formation. #gap/needs-replication — PDGF-B overexpression approach not tested in aged mice in this paper.

---

## Cell-Intrinsic HSC Aging: The Limiting Factor

The paper's most important caveat — and conceptual contribution — is the demonstration that niche restoration cannot overcome cell-intrinsic HSC aging [^kusumbe2016]:

Although *Fbxw7*^iΔEC in aged mice raised HSC numbers significantly (above), **limiting dilution analysis** of aged *Fbxw7*^iΔEC BM cells (transplanted with age-matched CD45.1 competitor BM) showed **no statistically significant increase in functional reconstitution**: CRU frequency Control 1/85,796 (95% CI 47,871–153,767) vs Fbxw7 1/53,243 (95% CI 29,833–95,021); P=0.275 (ns; n=3 mice per dilution; 18 weeks post-transplant; ELDA software; Extended Data Fig. 10b–c). LTR-HSC contribution at 16 weeks by flow cytometry was also ns (n=6 donors; Extended Data Fig. 10b).

**γH2AX immunostaining** (marker of DNA double-strand breaks and replication stress) confirmed persistence of age-related DNA damage in aged *Fbxw7*^iΔEC HSCs — indistinguishable from aged controls.

The paper concludes:

> "Changes in the bone vasculature of old mice can boost the number of haematopoietic stem and progenitor cells but cannot revert the functionality of aged HSCs due to the persistence of cell-autonomous alterations."

This result frames a key conceptual boundary for [[stem-cell-exhaustion]] interventions: vascular niche restoration and cell-intrinsic rejuvenation are complementary but **non-substitutable** targets. Restoring HSC niche quality is necessary but not sufficient for functional HSC rejuvenation. See also [[genomic-instability]] (the likely basis for γH2AX accumulation) and [[hematopoietic-stem-cells]].

---

## Evidence Quality and Extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — CD31^hi Emcn^hi vessel typing not yet mapped in human bone aging; type-H-equivalent vessels exist in human bone but aging dynamics not published |
| Phenotype conserved in humans? | unknown — arteriolar/vascular niche decline with age plausible but not directly quantified in human bone marrow |
| Replicated in humans? | no — all data are mouse (C57BL/6J males; young 2–5 weeks vs aged 55–70 weeks) |

Mouse-to-human extrapolation caveats for bone vascular niche:
- Mouse HSC niche biology diverges from human in several respects (e.g., mouse HSC phenotyping by Lin−Sca1+c-Kit+ requires Sca1, which has no direct human ortholog)
- Human bone vasculature is more complex anatomically (Haversian canals, larger cortical volumes)
- The aged timepoint (65–70 weeks) corresponds to very late life in C57BL/6 mice; human equivalence is approximate

#gap/needs-human-replication for all major vascular-niche aging claims.

---

## Corrigendum

A corrigendum was published: **DOI 10.1038/nature19782** (*Nature* 539:7628, p. 314; November 10, 2016). The corrigendum is closed-access and its specific figure corrections could not be retrieved during this verification pass (Crossref and PubMed return no abstract; Nature website is paywalled; full-text retrieval failed). The corrected claims on this page should be treated as provisional pending corrigendum review — figure-panel quantitative values are the most likely targets of a typical figure corrigendum. Functional conclusions about Notch vs HIF and the cell-intrinsic aging result were stated in the abstract and are unlikely to be affected. #gap/needs-corrigendum-review

---

## Knowledge Gaps

- #gap/needs-human-replication — CD31^hi Emcn^hi vessel decline with aging not characterized in human bone
- #gap/needs-replication — core vascular-niche aging findings in single lab; independent replication in heterogeneous mouse backgrounds needed
- #gap/no-mechanism — how Notch (but not HIF) drives arterialization and PDGFRβ+ perivascular cell expansion at the molecular level
- #gap/long-term-unknown — whether Notch-activating approaches (e.g., PDGF-B or Fbxw7 pathway targeting) could be delivered pharmacologically without vascular side effects (proliferative vasculopathy risk)
- #gap/needs-replication — PDGF-B axis experiments limited to young mice; aged-mouse data absent for this arm
- #gap/dose-response-unclear — optimal level of Notch activation for niche restoration without pathological angiogenesis not established

---

## Cross-references

[[bone]] · [[bone-marrow]] · [[hematopoietic-stem-cells]] · [[endothelial-cells]] · [[osteoblasts]] · [[mesenchymal-stem-cells]] · [[kitlg]] · [[cxcl12]] · [[notch-pathway]] · [[stem-cell-exhaustion]] · [[altered-intercellular-communication]] · [[genomic-instability]] · [[cxcl12-cxcr4-pathway]]

Implicit stubs seeded by this page: [[pdgfrb]] (PDGFRβ perivascular receptor; not yet a wiki protein page), [[hif1a]] (HIF-1α; endothelial oxygen-sensing; not yet a wiki protein page)

---

## Footnotes

[^kusumbe2016]: [[studies/kusumbe-2016-vascular-niche-aging]] · n=4–12 per group depending on endpoint (most groups n=5–7) · in-vivo · model: C57BL/6J males; 2–5 weeks (young group) vs 55–70 weeks (aged group); Fbxw7 aged experiment: 55–65 weeks · foundational type-H vascular niche aging paper

[^kusumbe2014]: doi:10.1038/nature13145 · Kusumbe AP, Ramasamy SK, Adams RH · *Nature* 2014;507(7492):323–328 · in-vivo (mouse) · original type-H (CD31^hi Emcn^hi) bone vessel definition; age-related decline from ~4 weeks to ~57–70 weeks; pharmacological restoration by deferoxamine mesylate · PMC4943525 · PMID: 24646994 · study page not yet seeded: [[studies/kusumbe-2014-type-h-vessels]] (red link; seed candidate)

[^ramasamy2014]: [[studies/ramasamy-2014-endothelial-notch-bone]] · doi:10.1038/nature13146 · Ramasamy SK, Kusumbe AP, Wang L, Adams RH · *Nature* 2014;507(7492):376–380 · in-vivo · endothelial Notch–DLL4 drives type-H identity; angiocrine Noggin couples to osteoprogenitor pool; foundational mechanistic companion to Kusumbe 2014
