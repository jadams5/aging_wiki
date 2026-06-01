---
type: study
doi: 10.1016/j.xcrm.2025.102415
pmid: 41072409
pmc: PMC12629812
title: "Super-adjuvant nanoparticles for platform cancer vaccination"
authors: [Kane GI, Naylor TE, Lusi EF, Brassil ML, Wigglesworth K, Dinnell RW, Diaz-Infante MB, Whiteman LM, Lukas J, Winkler M, Josh R, Cerrutti J, Mori H, Gallucci S, Fitzgerald KA, Atukorale PU]
year: 2025
journal: Cell Reports Medicine
volume: 6
issue: 10
pages: "102415"
publication-type: research-article
study-design: in-vivo
organism: mus-musculus
n-subjects: "n=5–13 per group (in vivo); n=3–4 biological replicates per group (in vitro); 3 human DC donors"
intervention: ["[[pathways/cgas-sting]]", "[[pathways/type-i-interferon-signaling]]"]
hallmarks-tested: []
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [dual-adjuvant-lipid-nanoparticle, sting-tlr4-synergy, ifn-i-amplification, lymph-node-targeted-vaccine, b16f10-melanoma-100pct-survival, panc02-88pct-rejection, 4t1-75pct-rejection, ifnar-blockade-abolishes-efficacy, irf3-irf5-irf7-required]
local-pdf: null
verified: true
verified-date: 2026-05-21
verified-by: claude
verified-scope: "Main text + figures 1–4 + STAR Methods overview + references list verified end-to-end against the local PDF (11 pages). All quantitative claims cross-checked: NP composition (cdGMP + MPLA, 2.5:1 mole ratio, 45 µM + 20 µM in NP loading; in-vivo doses 13.6 nM cdGMP + 4.5 nM MPLA per mouse), >4-fold IFN-α/IFN-β increase in dual vs single-adjuvant or empty NP DCs, IRF3/IRF5/IRF7 KO results, lymph-node accumulation (>3-fold post-boost; 36% dual vs 55% empty NP draining at day 14 boost — verified), B16F10 multivalent-peptide vaccination 100% (10/10) tumor-free at day 48, systemic rechallenge 80% (8/10) rejected, lysate vaccination rejection rates B16F10 69% (9/13), Panc02 88% (7/8), 4T1 75% (6/8), 100% systemic-rechallenge rejection across all three lysate-vaccinated models, IFNAR-block abolishes CD8 polyfunctionality and tumor rejection, transient minimal weight loss + small transient ALT/AST elevations only — all confirmed. Supplementary materials (Figures S1–S6, Tables S1–S2) not separately retrieved; claims derived from supplementary figures (loading-efficiency HPLC Fig S1, IFNAR-block timeline Fig S5/S6, peptide sequences Table S2) noted in body with #gap/needs-supp-verification. Literature-checked-through: 2026-05-21."
literature-checked-through: 2026-05-21
---


# Kane 2025 — Super-adjuvant Nanoparticles for Platform Cancer Vaccination (Cell Reports Medicine)

**Kane GI, Naylor TE, Lusi EF, Brassil ML, Wigglesworth K, Dinnell RW, Diaz-Infante MB, Whiteman LM, Lukas J, Winkler M, Josh R, Cerrutti J, Mori H, Gallucci S, Fitzgerald KA, Atukorale PU · *Cell Reports Medicine* · 2025 · Vol. 6, Issue 10, article 102415 · DOI: 10.1016/j.xcrm.2025.102415 · PMC: PMC12629812 · Open Access (CC-BY-NC-ND)**

*University of Massachusetts Amherst (Biomedical Engineering) + UMass Chan Medical School (Innate Immunity, Molecular Cell & Cancer Biology). Corresponding author: Prabhani U. Atukorale (patukorale@umass.edu). Funded by NCI K22 CA262355 (P.U.A.), NIBIB R21 EB034465 (P.U.A.), UMass Amherst Institute for Applied Life Sciences (IALS) Translational Fellowship (G.I.K.). Conflicts of interest: P.U.A. and G.I.K. are inventors on US Patent 12377118 (8/5/2025) and US Patent Application 63/658,800 related to this work; both are founders of NanoVax Therapeutics, Inc. K.A.F. is on the Scientific Advisory Board of Generation Bio and Janssen Immunology, founder of Danger Bio, and a paid consultant for Moderna.*

## TL;DR

The authors report a lipid-based nanoparticle (NP) cancer-vaccine adjuvant platform that co-encapsulates a STING agonist ([[2-3-cgamp|cyclic diguanosine monophosphate]] / cdGMP, hydrophilic) and a TLR4 agonist (monophosphoryl lipid A / MPLA, hydrophobic) on the same ~30–60 nm PEGylated particle. *In vitro*, dual-adjuvant NPs produced a >4-fold increase in type I interferons (IFN-α and IFN-β) in mouse macrophages, primary mouse splenic CD11c⁺ DCs, and primary human DCs from 3 donors compared with single-adjuvant or empty NP controls. The synergy required IRF3, IRF5, **and** IRF7 (KO studies). NPs preferentially drained to lymph nodes (>3-fold accumulation after boost vs empty NPs) and activated CD11c⁺ DCs there. *In vivo*, subcutaneous prime/boost vaccination with NPs co-delivered with either multivalent B16F10 melanoma-associated peptides (Trp1 + Trp2 + gp100) or whole tumor-cell lysate produced striking tumor-free outcomes: 100% (10/10) of mice vaccinated with multivalent peptides + dual NPs survived 48 days post-orthotopic-challenge with B16F10 (vs 0/5 in naive); 80% (8/10) rejected systemic rechallenge. Whole-lysate vaccination delivered 69% (9/13) tumor rejection in B16F10 melanoma, 88% (7/8) in Panc02 pancreatic ductal adenocarcinoma, and 75% (6/8) in 4T1 triple-negative breast cancer, with 100% rejection of systemic rechallenge across all three models. IFNAR antibody blockade abolished both CD8⁺ polyfunctionality and tumor rejection — confirming type I IFN as the central effector axis. Preclinical; no human efficacy data. #gap/needs-human-replication

## Why this matters for the aging wiki

Cancer is one of the dominant late-life diseases; cancer vaccines are an aging-relevant intervention modality where immunosenescent older adults have historically responded poorly to conventional adjuvants. Kane 2025 is *not* an aging-mechanism study — it is a preclinical mouse cancer-vaccine platform paper — but it is mechanistically load-bearing in three places already covered by this wiki:

1. **[[pathways/cgas-sting]] § STING agonists for cancer immunotherapy.** Adds a next-generation modality (dual STING + TLR4 lipid NP) to the existing landscape of ADU-S100/MIW815, diABZI, MSA-2 STING-mono-agonist cancer-immunotherapy programs. Confirms that lymph-node-targeted, antigen-co-delivered STING agonism via biocompatible lipid carriers achieves more than additive immune activation when paired with a second innate PAMP (TLR4 → TRIF/TRAM axis).
2. **[[pathways/type-i-interferon-signaling]] § Interventions modulating type I IFN.** Provides clean *in vivo* mechanistic evidence that STING+TLR4 dual-PRR engagement produces synergistic IFN-α/β through shared downstream IRF3/IRF5/IRF7 amplification — and that IFNAR blockade fully abolishes the therapeutic effect, demonstrating IFN-I as a necessary effector for cancer-vaccine-driven adaptive immunity. This is the *acute pro-IFN-I* arm of the dual-edged IFN-I-in-aging biology this wiki tracks (where the *chronic tonic IFN-I* arm drives inflammaging — see [[chronic-inflammation]]).
3. **[[phenotypes/cancer]] / [[phenotypes/immunosenescence]].** Whole-tumor-lysate vaccination as a modality bypasses the antigen-discovery bottleneck that has limited neoantigen-based cancer vaccines (Keskin 2019; Spiegel 2021). For an immunosenescent host where APC function is impaired, super-adjuvants that maximize per-particle innate-immune activation are particularly relevant — though this paper used young C57BL/6 / BALB/c mice and does NOT directly test aged-host vaccination. #gap/needs-replication

The conceptual frame this paper reframes for the wiki: **STING-agonist cancer immunotherapy is shifting from systemic-delivered mono-agonist small molecules (ADU-S100 trials largely disappointing) to lymph-node-targeted, multi-PAMP NP-formulated dual-adjuvant platforms.** Whether this generalizes to older / immunosenescent hosts is the open translational question.

## Platform design

**Composition.** A lipid-based NP co-encapsulating two physically distinct innate agonists on the same particle:

| Agonist | Class | Loading concentration in NP (in vitro) | Loading in vivo (per mouse dose) |
|---|---|---|---|
| **cdGMP** (cyclic diguanosine monophosphate) | STING agonist (cyclic dinucleotide / CDN); hydrophilic | 45 µM | 13.6 nM |
| **MPLA** (monophosphoryl lipid A) | TLR4 agonist; hydrophobic; activates TRIF/TRAM arm | 20 µM | 4.5 nM |

Optimal cdGMP/MPLA **mole ratio = 2.5 : 1**. Particle properties: ~30–60 nm hydrodynamic diameter, PEGylated surface for stealth + colloidal stability, PDI ~0.2, total NP lipid 10 mg/mL. Tumor antigens (peptides or cell lysate) were co-administered, not chemically conjugated (cysteine-conjugation of Trp2 with/without a 6-glycine spacer did not improve responses).

## Key in vitro findings

- **Cytokine synergy in macrophages and primary DCs.** Dual-adjuvant NPs (RAW 264.7 macrophages, primary mouse splenic CD11c⁺ DCs, primary human DCs from 3 donors) drove >4-fold higher IFN-α and IFN-β vs single-adjuvant NPs, empty NPs, or free agonists. Synergy also seen for TNF-α, IL-6, RANTES, CCL2/MCP-1, CCL3, CCL4, CXCL5/LIX, CXCL10/IP-10, GM-CSF.
- **IRF dependency.** Iboth IRF3, IRF5, and IRF7 KO iBMDMs all showed substantially blunted IFN-I production with dual-adjuvant NPs vs WT, with the strongest dependence on IRF3 + IRF5; IRF7 KO retained lower-magnitude but notable IFN-β. Confirms shared downstream IRF amplification as the synergy mechanism (vs alternative explanations like NP-mediated kinetics or unrelated parallel pathways).
- **Antigen-processing machinery upregulation.** Significantly higher transcript expression of *B2m*, *Erap1*, *H2d1*, *H2k1*, *Tap1*, *Tap2* in CD11c⁺ DCs treated with dual-adjuvant NPs vs single-adjuvant or empty NP. *Tap1*/*Tap2* synergistic — i.e., the TAP peptide transporters that load MHC class I with cytosolic peptides scale super-additively with dual PRR engagement. Mechanistic basis for the enhanced CD8⁺ T cell responses observed downstream.

## Key in vivo findings

### Lymph node drainage and DC activation

- Subcutaneous tail-base injection. NPs labeled with lipophilic dye DiI; tracked via *ex vivo* spectrum imaging of nearest draining inguinal lymph nodes.
- **>3-fold increased NP accumulation in nearest draining lymph nodes for dual-adjuvant vs empty NPs after boost (day 14 + 24 h)**, despite no difference at the 1 h post-injection time point — i.e., NP physical attributes alone (size, charge) drive trafficking, but DC-mediated ferrying amplifies accumulation after dual-PRR activation.
- 36% of dual-adjuvant NP dose was found in draining lymph nodes vs 55% for empty NPs at day-14 boost (lower because particles got taken up/processed faster, not because they failed to drain).
- Confocal IF of lymph nodes: significantly more CD11c⁺ DCs and CD80⁺ (activated) DCs and elevated IFN-β signal in dual-adjuvant vs empty-NP and free-agonist groups.

### Tumor models (preclinical mouse efficacy)

Prime/boost schedule: day 0 prime, day 14 boost, day 35 second boost (multivalent-peptide and lysate experiments). Local orthotopic challenge with tumor cells ~3 weeks post-second-boost; systemic IV rechallenge ~3 weeks after that.

**Multivalent peptide vaccination (B16F10 melanoma; Trp1 + Trp2 + gp100):**
- 100% (10/10) of mice vaccinated with multivalent peptides + dual-adjuvant NPs survived to day 48 post-orthotopic-challenge with B16F10 (0.5×10⁶ cells s.c.); 0% (0/5) survival in naive controls (all dead by day 27).
- Tumor volume at day 27 post-challenge: dual NP vaccinated ≈0 mm³; cdGMP-only NP ≈100 mm³; free-agonists ≈400+ mm³; naive ≈400+ mm³. p<0.0001 vs naive/free agonists.
- Long-term Kaplan-Meier: dual-NP cohort survival ~100% to day 250; other groups all <day 100.
- **Systemic rechallenge (IV 1×10⁶ B16F10 cells, day ~70):** 8/10 (80%) of dual-NP vaccinated mice rejected systemic rechallenge; 0/5 naive rejected. Immunological memory established.

**Whole tumor-cell lysate vaccination (platform across 3 aggressive tumor models):**

| Tumor model | Tumor type | Local challenge tumor rejection | Systemic rechallenge tumor rejection |
|---|---|---|---|
| **B16F10** | Melanoma (C57BL/6 host) | **69% (9/13)** | 100% |
| **Panc02** | Pancreatic ductal adenocarcinoma (C57BL/6 host) | **88% (7/8)** | 100% |
| **4T1** | Triple-negative breast cancer (BALB/c host) | **75% (6/8)** | 100% |

Polyfunctional CD8⁺ T cells (IFN-γ⁺ TNF-α⁺ on intracellular cytokine staining of PBMCs after *ex vivo* lysate restimulation) were significantly elevated in lysate-vaccinated mice across all three models; polyfunctional CD4⁺ T cells and CD19⁺ B cells also expanded with antigen-specific IgG production confirmed by plasma ELISA.

### Type I IFN dependence (IFNAR blockade)

Bi-weekly anti-IFNAR antibody treatment throughout the entire B16F10-lysate vaccination regimen completely abolished tumor rejection in the local-challenge cohort — despite detectable polyfunctional CD8⁺ T cells (CD4⁺ polyfunctionality was significantly reduced, however). **This is the clean causal demonstration that type I IFN signaling through IFNAR is necessary for super-adjuvant-NP-driven anti-tumor protection.** It also implies that the polyfunctional CD8⁺ T cells alone, in the absence of intact IFN-I signaling at the time of tumor challenge, are insufficient to clear tumor — supporting an IFN-I-mediated tumor-microenvironment-reprogramming arm distinct from T cell priming.

### Safety

- Transient mild weight loss following injections (rapidly regained over days).
- Small transient ALT and AST elevations (no significant ALT/AST increase in the full-dose group; mild elevation in half-dose-prime / double-dose-boost group, which paradoxically also had weaker T cell responses — suggesting a negative-feedback / dampening effect of high-dose innate sensing).
- No large-animal data presented. The authors explicitly flag the absence of large-animal toxicity data, inflammatory mediator screens (CRP, IL-6 systemic), and major-organ histopathology as limitations.

## Limitations explicitly acknowledged in the paper

- Modular customizability across antigenic payloads demonstrated, but customizability across alternative immunostimulatory agents (other STING agonists, other TLR agonists) not tested in this paper.
- Non-CDN STING agonists not yet tested.
- All efficacy in young immunocompetent mice. **No aged-host data, no large-animal data, no human efficacy.** Translation to immunosenescent older cancer patients is the open question.
- Inflammatory-cytokine release syndrome risk and histopathological organ assessment not addressed.

## Aging-context relevance

This paper does not directly address aging biology. Its relevance to this wiki is **mechanistic and intervention-modality-focused**:

- **STING-agonist landscape.** The cGAS-STING pathway is a major aging-relevant pathway (drives inflammaging via SASP IFN-I; see [[hallmarks/chronic-inflammation]] and [[pathways/cgas-sting]] § Aging-relevant biology). STING agonism for cancer is therapeutically the *opposite direction* from STING antagonism for inflammaging, but the mechanistic data on lipid-NP STING-agonist pharmacology generated here informs both modalities.
- **TLR4 in aging.** TLR4 signaling itself is altered with age (declining naïve TLR4 responses in aged human PBMCs; chronic LPS-driven TLR4 activation in gut-leak inflammaging). Whether dual-PRR vaccine adjuvants compensate for immunosenescent baseline TLR4 hyporesponsiveness in older hosts is an open question this paper does not address.
- **Cancer vaccine modality.** Cancer is one of the dominant late-life diseases. Effective preventive or early-treatment cancer vaccines in older adults — the population at highest baseline cancer risk and immunosenescent baseline immune fitness — is an enormous unmet need. This paper is preclinical-only in young mice; whether a super-adjuvant platform overcomes the historically poor vaccine responses in elderly cancer patients is the natural follow-up. #gap/needs-human-replication

## Open questions raised

- **Aged-host efficacy.** Does the >4-fold IFN-α/β synergy and lymph-node DC activation hold in immunosenescent (e.g., 18–24-month C57BL/6) mice? This is the most aging-relevant follow-up.
- **Non-CDN STING agonists.** Would a synthetic non-CDN STING agonist (diABZI, MSA-2) on the same dual-NP platform recapitulate the synergy, and would it improve translatability (CDNs have poor pharmacokinetics and are unstable in serum)?
- **Histopathology + cytokine release.** No organ histopathology or systemic-cytokine-release-syndrome screen reported. Critical for clinical translation.
- **Combination with checkpoint inhibitors.** PD-1/PD-L1 axis was not tested in this paper. Synergy with established checkpoint blockade is the natural Phase 1 combination strategy.

## Pages citing this study

- [[interventions/pharmacological/nanoparticle-immunoadjuvants]] — **anchor study for this intervention class page**
- [[pathways/cgas-sting]] § STING agonists for cancer immunotherapy
- [[pathways/type-i-interferon-signaling]] § STING + TLR4 dual-PAMP nanoparticle adjuvants (the inverse modality)
- [[phenotypes/cancer]] § Modern therapeutic landscape — "Nanoparticle immunoadjuvants" bullet

## Footnotes

[^kane2025]: doi:10.1016/j.xcrm.2025.102415 · PMID:41072409 · PMC:PMC12629812 · in-vitro+in-vivo · "Super-adjuvant nanoparticles for platform cancer vaccination" · Kane GI et al. · *Cell Reports Medicine* 6(10):102415 · 2025 · model: RAW 264.7 macrophages, iBMDMs (IRF3/IRF5/IRF7 KO + WT), primary mouse CD11c⁺ DCs, primary human DCs (3 donors); in vivo C57BL/6 (B16F10 melanoma, Panc02 PDAC) + BALB/c (4T1 TNBC) · archive: downloaded (gold OA via PMC) · n: 3–4 biological replicates per in vitro condition; 5–13 mice per in vivo group · lipid NP co-encapsulating cdGMP (STING agonist, 45 µM) + MPLA (TLR4 agonist, 20 µM) at 2.5:1 mole ratio drives synergistic IFN-α/β; multivalent-peptide vaccination 100% (10/10) B16F10 tumor-free at day 48; lysate vaccination 69% (9/13) B16F10, 88% (7/8) Panc02, 75% (6/8) 4T1 tumor rejection; IFNAR blockade abolishes efficacy.
