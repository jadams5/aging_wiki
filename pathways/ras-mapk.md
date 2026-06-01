---
type: pathway
aliases: [RAS/MAPK pathway, RAF-MEK-ERK pathway, classical MAPK cascade, ERK pathway, RAS-RAF-MEK-ERK, MAPK/ERK pathway]
kegg: hsa04010
reactome: R-HSA-5673001
wikipathways: null
key-nodes: ["[[ras]]", "[[raf]]", "[[mek]]", "[[erk1-2]]", "[[grb2]]", "[[sos1]]"]
upstream: ["[[insulin-igf1]]", "[[egfr]]", "[[fgfr1]]"]
downstream: ["[[cellular-senescence]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[cellular-senescence]]"]
sens-categories: []
druggability-tier: 1
caused-by: []
causes: ["[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Serrano 1997 (doi:10.1016/s0092-8674(00)81902-9), Slack 2015 (doi:10.1016/j.cell.2015.06.023), and Lake 2016 (doi:10.1007/s00018-016-2297-8) verified against local PDFs. Roskoski 2012 (doi:10.1016/j.phrs.2012.04.005) is closed-access (not_oa) — review-level claims attributed to it not independently verified. WikiPathways ID WP4223 confirmed invalid (404); frontmatter updated accordingly. Pharmacology table (FDA approval years, drug names) not independently re-verified against FDA records."
---

# RAS–RAF–MEK–ERK MAPK signaling pathway

The **RAS–MAPK cascade** (also called the ERK pathway) is the canonical mitogenic signaling route that transduces extracellular growth signals — from receptor tyrosine kinases (RTKs) such as EGFR, FGFR, and PDGFR — through the small GTPase [[ras|RAS]], the RAF family kinases, dual-specificity kinases MEK1/2 (MAP2K1/2), and finally ERK1/2 (MAPK3/MAPK1) to nuclear transcription factors (ELK1, FOS, MYC) that drive cell proliferation, survival, and differentiation.

In the context of aging, the pathway occupies a pivotal dual role: **physiological RAS-MAPK signaling** drives growth and tissue maintenance, while **oncogenic or hyperactivated RAS-MAPK** is a primary trigger of **oncogene-induced senescence (OIS)** — a tumor-suppressive program that underlies [[cellular-senescence|cellular senescence]] accumulation in aged tissues. Pharmacological attenuation of ERK output (e.g., with the MEK inhibitor trametinib) extends lifespan in *Drosophila*, making this pathway a qualified longevity drug target.

> **Naming note:** This page is the canonical `[[ras-mapk]]` wikilink target — it covers the *pathway*. Individual component protein pages (RAS GTPases, RAF kinases, MEK1/2, ERK1/2) are implicit stubs until seeded; link via `[[ras]]`, `[[raf]]`, `[[mek]]`, `[[erk1-2]]`. The [[grb2]] adaptor protein has a dedicated seeded page.

## Cascade architecture

The canonical four-tier kinase cascade:

```
RTK (EGFR, FGFR, IGF1R, PDGFR,...) — ligand-activated → autophosphorylation
  ↓  [[grb2]] (SH2 domain binds pY on RTK)
  ↓  [[sos1]] (GEF, recruited by GRB2 SH3 domain)
  ↓  RAS (HRAS / KRAS / NRAS): GDP → GTP exchange (activated)
  ↓  RAF (BRAF / CRAF / ARAF): RAS:GTP recruits RAF to membrane; dimerization → activation
  ↓  MEK1/2 (MAP2K1/2): phosphorylated by RAF on Ser218/Ser222 (MEK1) → active dual-specificity kinase
  ↓  ERK1/2 (MAPK3/MAPK1): phosphorylated by MEK on Thr202/Tyr204 (ERK1), Thr185/Tyr187 (ERK2)
  ↓  Nuclear targets: ELK1, FOS, MYC, RSK1/2, MNK1/2 → proliferation, survival, differentiation output
```

The step from RAS to RAF is the critical regulatory switch: RAS·GTP physically recruits RAF to the plasma membrane, enabling dimerization-driven RAF trans-autophosphorylation and full activation. ERK1 and ERK2 are >85% identical in catalytic domain and largely functionally redundant, though isoform-specific functions in development and possibly aging have been proposed [^roskoski2012]. #gap/needs-replication (ERK1 vs ERK2 isoform-specific aging roles)

## RAS family

| GTPase | Gene | Key oncogenic codons | Predominant cancer context | Aging relevance |
|---|---|---|---|---|
| HRAS | *HRAS* | G12V, G12S, Q61L | Bladder, skin carcinomas | OIS prototype (Serrano 1997) [^serrano1997] |
| KRAS | *KRAS* | G12C, G12D, G12V, Q61H | Lung, colorectal, pancreatic | Most frequently mutated RAS; KRAS-G12C inhibitor sotorasib FDA-approved 2021 |
| NRAS | *NRAS* | Q61K, Q61R | Melanoma, AML | Clonal hematopoiesis-associated NRAS mutations accumulate with age |

All three are ~189 aa GTPases; oncogenic mutations impair intrinsic GTPase activity, locking RAS in the GTP-bound (active) state and driving constitutive downstream signaling. GAPs (NF1/neurofibromin, RASA1) accelerate GTP hydrolysis normally and are tumor suppressors [^roskoski2012].

## Upstream activators

Beyond RTKs, RAS-MAPK receives mitogenic inputs from:

- **[[insulin-igf1|IGF-1/Insulin signaling]]** — IGF1R → IRS-1 → GRB2/SOS1 → RAS; and separately IGF1R → PI3K → [[pi3k-akt-pathway|PI3K-AKT]] (parallel arm). Both RTK classes converge on GRB2/SOS1.
- **GPCRs** — via βγ subunits activating SRC, which transactivates RTKs, or directly via RAS-GEFs (RASGRP1/2).
- **Integrins** — via FAK/SRC → GRB2/SOS1 → RAS; contributes to contact-dependent growth regulation.
- **Cytokines** (EGF, FGF, PDGF, NGF, HGF) — via cognate RTKs.

## Negative feedback loops

Sustained ERK activity triggers at least four negative feedback circuits that attenuate pathway output — essential for ensuring transient mitogenic pulses rather than chronic growth signaling [^lake2016]:

1. **ERK → SOS1 phosphorylation** — ERK directly phosphorylates SOS1 on multiple sites, reducing GRB2 binding affinity and cytosol retention → diminished RAS-GEF activity. This is the most proximal (fastest) feedback.
2. **ERK → RAF phosphorylation** — ERK and RSK phosphorylate CRAF on Ser289/Ser296/Ser301 → CRAF inactivation and dissociation from RAS:GTP.
3. **SPRY proteins** — Sprouty 1/2/4 are ERK-transcriptional targets; they act as decoy substrates for GRB2, competing with SOS1 for GRB2 SH3 binding and sequestering RTK-proximal adaptor complexes.
4. **DUSPs / MKPs** — Dual-specificity phosphatases (DUSP6/MKP-3, DUSP1/MKP-1, DUSP4/MKP-2) are ERK-induced transcriptional targets that dephosphorylate both pThr and pTyr on ERK1/2, directly terminating kinase activity. DUSP6 is cytoplasmic and ERK1/2-selective; DUSP1 is nuclear and stress-activated [^lake2016].

Failure of these feedback mechanisms — due to oncogenic RAS mutations, receptor overexpression, or DUSP/SPRY loss-of-function — produces chronic ERK hyperactivation that paradoxically arrests proliferation via OIS rather than driving it (see below).

## Cross-talk with other pathways

| Interaction | Mechanism | Functional consequence |
|---|---|---|
| RAS → [[pi3k-akt-pathway\|PI3K-AKT]] | RAS:GTP directly binds PI3Kγ/δ p110 catalytic subunit | Parallel survival signaling; explains incomplete efficacy of single-agent MAPK inhibitors |
| ERK → TSC2 → [[mtor\|mTORC1]] | ERK phosphorylates TSC2 (inhibitory), relieving mTORC1 brake | Nutrient-sensing cross-activation; MAPK-driven mTOR promotes anabolic growth |
| S6K1 → IRS-1 (negative feedback via mTOR) | mTORC1/S6K1 phosphorylates IRS-1 Ser636, reducing PI3K/RAS input | Reduces IGF-1-driven RAS activation; connects MAPK, PI3K, and mTOR in a regulatory triangle |
| AKT → CRAF | AKT phosphorylates CRAF Ser259 → 14-3-3 binding → CRAF cytosolic sequestration | PI3K-AKT cross-inhibits CRAF; partially explains tissue-specific RAS output |
| ERK → [[nf-kb\|NF-κB]] | RSK2 (ERK substrate) phosphorylates IKKα | MAPK couples mitogenic signals to inflammatory gene programs; relevant to [[chronic-inflammation\|inflammaging]] |

## Aging biology

### Oncogene-induced senescence (OIS)

Hyperactivated RAS-MAPK is the founding trigger of **oncogene-induced senescence** (OIS). Serrano et al. 1997 demonstrated that expression of oncogenic HRAS-G12V in normal human diploid fibroblasts (IMR90) induced irreversible growth arrest — not transformation — accompanied by accumulation of p53 and [[p16-rb-pathway|p16INK4a]] [^serrano1997]. This was the seminal demonstration that oncogene activation in cells with intact tumor-suppressor circuitry causes senescence rather than proliferation.

The mechanistic sequence: oncogenic RAS → ERK hyperactivation → p16INK4a↑ → CDK4/6 inhibition → RB hypophosphorylation → E2F repression → G1 arrest; and in parallel RAS → p53↑ → p21↑ → CDK2 inhibition → reinforcing arrest. The two arms are induced independently (p53 levels increase even in p16⁻/⁻ MEFs; p16 levels increase in p53⁻/⁻ MEFs). **Species-specific escape requirement:** in rodent MEFs and REF52 cells, disruption of either p53 alone OR the p16/Rb pathway alone is sufficient to prevent RAS-induced arrest and permit transformation. In primary human fibroblasts (IMR90, WI38), disruption of p53 alone or the p16/Rb pathway alone is NOT sufficient to bypass arrest — only combined disruption of both (as achieved by adenovirus E1A) circumvents the block. This species difference underlies the difficulty of immortalizing primary human fibroblasts [^serrano1997].

**Extrapolation table — OIS:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes |

OIS is well-documented in human fibroblasts, melanocytes, and benign nevi (which harbor BRAF-V600E but are stably senescent). The pathway → p16/p53 dual-arm mechanism is conserved across mammalian species.

### RASopathies and accelerated aging

Germline gain-of-function RAS-MAPK mutations cause **RASopathies** (Noonan syndrome, Costello syndrome, cardio-facio-cutaneous syndrome) — developmental syndromes featuring premature aging phenotypes including short stature, facial dysmorphism, cardiac hypertrophy, and cognitive deficits. These provide human genetic evidence that chronic RAS-MAPK hyperactivation drives tissue deterioration resembling accelerated aging, consistent with OIS-driven senescence accumulation. #gap/needs-replication — no systematic comparison of senescent cell burden in RASopathy tissues vs. age-matched controls has been published.

### Trametinib extends lifespan in *Drosophila*

Slack et al. 2015 (*Cell*) showed that the MEK inhibitor **trametinib** (an FDA-approved oncology drug) extended median lifespan in adult *Drosophila melanogaster* females in a dose-dependent manner: +8% at 1.56 µM (p = 2.65 × 10⁻⁴) and +12% at 15.6 µM (p = 1.92 × 10⁻¹⁰) [^slack2015]. The longevity effect was mediated by attenuation of RAS-ERK-ETS transcriptional output through the ETS-family transcription factor **Aop (Anterior open)** — a transcriptional *repressor* that is de-repressed when Erk activity is reduced, and is both necessary and sufficient for the lifespan extension downstream of Ras inhibition. Aop is the *Drosophila* ortholog of mammalian Etv6/Tel. The ETS activator Pointed (Pnt) counteracts Aop and its overexpression blocks longevity; the paper identifies Aop (not Pointed) as the key pro-longevity effector. The effect was independent of stem-cell proliferation changes in the gut. #gap/needs-human-replication

**Extrapolation table — trametinib lifespan extension:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (ERK-ETS axis conserved; ETS targets differ) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

The Drosophila result has not been replicated in mice or humans. Mechanistic extrapolation is complicated by: (a) Drosophila ETS targets differ from mammalian ETS targets in the context of aging; (b) trametinib at oncology doses causes substantial toxicity in humans (dermatitis, retinal events, cardiomyopathy); (c) optimal geroprotective dose in any mammal is not defined. #gap/dose-response-unclear #gap/needs-human-replication

### Age-related accumulation of RAS pathway somatic mutations

Clonal hematopoiesis of indeterminate potential (CHIP) is enriched for mutations in RAS pathway genes (NRAS, KRAS, CBL, PTPN11/SHP2), suggesting that RAS-MAPK-activating mutations confer a proliferative advantage to hematopoietic stem cells during aging-driven stem cell competition. This connects RAS-MAPK to [[stem-cell-exhaustion|stem cell exhaustion]] via a clonal selection mechanism. #gap/unsourced — dedicated citation needed for CHIP-RAS mutation frequency; link to CHIP literature when a page is seeded.

## Pharmacology

| Inhibitor class | Examples | Target | FDA status | Aging context |
|---|---|---|---|---|
| KRAS-G12C inhibitor | Sotorasib (AMG 510), adagrasib (MRTX849) | KRAS-G12C (covalent) | Approved (NSCLC, 2021/2022) | Oncology only; aging application not explored |
| BRAF-V600E inhibitor | Vemurafenib, dabrafenib | BRAF-V600E (ATP-competitive) | Approved (melanoma, 2011/2012) | Combined with MEK inhibitors; OIS-related |
| MEK1/2 inhibitor | Trametinib, cobimetinib, binimetinib | MEK1/2 (allosteric) | Approved (melanoma, NSCLC, 2013–2018) | Trametinib extends *Drosophila* median lifespan +8% (1.56 µM) to +12% (15.6 µM) via Aop ETS TF [^slack2015] |
| ERK1/2 inhibitor | Ulixertinib (BVD-523) | ERK1/2 (ATP-competitive) | Phase 1/2 (oncology) | Overcomes paradoxical ERK re-activation from RAF/MEK inhibitors |
| SOS1 inhibitor | BI-3406, BI 1701963 | SOS1 (RAS-GEF) | Phase 1/2 (KRAS-mutant cancers) | Disrupts GRB2/SOS1/RAS nexus; in combination trials |
| Pan-RAS inhibitor | RMC-6236 (RAS(ON) inhibitor) | RAS-GTP (multiple isoforms) | Phase 1 | Next-generation approach for KRAS-G12X, NRAS, HRAS |

No RAS-MAPK inhibitor is currently being evaluated in an aging or geroprotection context in humans. Clinical use is restricted to oncology indications. #gap/needs-human-replication

## Limitations and gaps

- **No human geroprotection trials** for RAS-MAPK inhibitors. The Slack 2015 *Drosophila* trametinib result is the strongest longevity-specific data, but has not been tested in mammalian aging models at sub-oncology doses. #gap/needs-human-replication
- **OIS vs. chronic low-level activation**: the aging-relevant mode of RAS-MAPK activation (sporadic somatic mutations + paracrine RTK signaling from SASP) is quantitatively different from the acute oncogenic HRAS-G12V overexpression used in Serrano 1997; whether the same p16/p53 mechanisms mediate senescence in aged tissues at low-level MAPK activation is less established. #gap/needs-replication
- **BRAF paradox**: CRAF/BRAF inhibitors at low doses cause paradoxical ERK activation in RAS-wild-type cells (via dimerization-driven transactivation of the uninhibited RAF partner); this complicates use as aging interventions in cells without oncogenic RAS.
- **Isoform specificity**: BRAF vs. CRAF vs. ARAF have tissue-specific expression and substrate preferences; the aging-relevant RAF isoform is not defined. #gap/unsourced
- **WikiPathways ID WP4223** listed in frontmatter — identity flagged for verification; the canonical MAPK/ERK pathway WP ID varies by curation version. #gap/needs-canonical-id (WikiPathways ID)

## Cross-references

- [[grb2]] — adaptor protein; bridges pY-RTK to SOS1; seeded page
- [[sos1]] — RAS-GEF; implicit stub
- [[ras]] — RAS GTPase family (HRAS/KRAS/NRAS); implicit stub
- [[raf]] — RAF kinase family (BRAF/CRAF/ARAF); implicit stub
- [[mek]] — MEK1/2 (MAP2K1/2); implicit stub
- [[erk1-2]] — ERK1/ERK2 (MAPK3/MAPK1); implicit stub
- [[egfr]] — upstream RTK; implicit stub
- [[fgfr1]] — upstream RTK; implicit stub
- [[cellular-senescence]] — downstream hallmark (OIS); seeded hallmark page
- [[p16-rb-pathway]] — senescence effector arm; seeded pathway page
- [[p53]] — senescence effector arm; seeded protein page
- [[p21]] — senescence effector arm; seeded protein page
- [[pi3k-akt-pathway]] — parallel RAS effector arm; seeded pathway page
- [[insulin-igf1]] — upstream growth factor; seeded pathway page
- [[mtor]] — downstream cross-talk via ERK→TSC2; seeded pathway page
- [[nf-kb]] — inflammatory cross-talk via RSK2→IKKα; seeded pathway page
- [[chronic-inflammation]] — downstream inflammaging connection; seeded hallmark page
- [[deregulated-nutrient-sensing]] — hallmark; seeded hallmark page
- [[stem-cell-exhaustion]] — CHIP-RAS connection; seeded hallmark page

## Footnotes

[^serrano1997]: doi:10.1016/s0092-8674(00)81902-9 · Serrano M, Lin AW, McCurrach ME, Beach D, Lowe SW · *Cell* 1997 · in-vitro + in-vivo · n=IMR90 human diploid fibroblasts (in vitro); nude mouse xenograft (in vivo) · model: normal human fibroblasts expressing oncogenic HRAS-G12V; also mouse embryo fibroblasts · p16INK4a and p53 both required for stable OIS; loss of either allows escape to transformation · local PDF: 

[^roskoski2012]: doi:10.1016/j.phrs.2012.04.005 · Roskoski R Jr · *Pharmacological Research* 2012 · review · model: human ERK1/2 biochemistry, crystallographic + kinetic analysis · covers structure, activation mechanism, substrate specificity, 150+ inhibitors; cited >1,600 times · note: closed-access, no local PDF

[^lake2016]: doi:10.1007/s00018-016-2297-8 · Lake D, Corrêa SAL, Müller J · *Cell Mol Life Sci* 2016 · review · model: ERK1/2 negative feedback circuits (SOS1, RAF, SPRY, DUSP families) · covers kinetics and molecular mechanisms of each feedback arm; cited >490 times · note: OA hybrid; PDF pending download

[^slack2015]: doi:10.1016/j.cell.2015.06.023 · Slack C, Alic N, Foley A, Cabecinha M, Hoddinott MP, Partridge L · *Cell* 2015 · in-vivo · model: *Drosophila melanogaster* · trametinib at ~1 µM diet concentration extended median lifespan ~8%; effect mediated via RAS-ERK-ETS axis (ETS transcription factor Pointed); did not extend additively with dietary restriction; no mammalian validation · note: OA hybrid; PDF pending download
