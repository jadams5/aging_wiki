---
type: intervention
aliases: [NP-adjuvant platforms, lipid-NP cancer-vaccine adjuvants, dual-PRR nanoparticle adjuvants, dual-PAMP nanoadjuvants, multi-agonist nanoparticle vaccines, super-adjuvant NPs]
mode: pharmacological
mechanisms: [innate-immune-pamp-synergy, lymph-node-targeted-delivery, type-i-interferon-amplification, antigen-processing-machinery-upregulation, dendritic-cell-activation, sasp-tme-remodeling-co-administration]
targets: ["[[sting]]", "[[tlr4]]", "[[tlr9]]", "[[tlr3]]", "[[tlr7]]", "[[tlr8]]", "[[irf3]]", "[[irf5]]", "[[irf7]]"]
target-hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
target-pathways: ["[[cgas-sting]]", "[[type-i-interferon-signaling]]", "[[nf-kb]]"]
human-evidence-level: preclinical-only
clinical-stage: preclinical
safety-profile: investigational
translation-gap: "preclinical-only — first-in-human NP-cancer-vaccine trials of dual-PRR-formulated platforms not yet initiated; large-animal toxicology + cytokine-release-syndrome screen + aged-host efficacy all pending"
next-experiment: "Dose-fractionated dual-PRR NP super-adjuvant + multivalent-peptide vaccination in aged (18–22 mo) C57BL/6 mice with B16F10 challenge, with parallel large-animal (NHP) cytokine-release + organ-histopathology screen — establishes whether the >4-fold IFN-α/β synergy and ≥69% tumor-rejection efficacy generalizes to immunosenescent hosts and is safety-translatable."
clinical-trials-active: 0
literature-checked-through: 2026-05-21
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted class page seeded 2026-05-21 on the user's prompt that the Kane 2025 super-adjuvant NP modality is more generally relevant to cancer interventions. Anchored on Kane 2025 (full PDF verified — see [[studies/kane-2025-super-adjuvant-nanoparticles]]) plus prior-art references that are NOT yet seeded as full study pages — quantitative claims for those references are taken from their abstracts and from how Kane 2025 cites them. Verify before relying on those specific numbers.

# Nanoparticle Immunoadjuvants (NP-formulated dual-PRR cancer-vaccine adjuvants)

A class of **lipid- or polymer-based nanoparticles co-encapsulating two or more physically distinct innate-immune agonists** (most commonly a [[cgas-sting|STING agonist]] paired with a [[tlr4|TLR4 agonist]] — but also TLR3, TLR7/8, TLR9 combinations) on a single ~30–60 nm PEGylated particle, with **modular antigenic payload** (peptides, whole tumor lysate, mRNA, neoantigens) co-delivered to the same particle or co-administered. Designed to overcome the historically limited efficacy of single-adjuvant subunit vaccines and the safety burden of whole-pathogen vaccines by **harnessing PAMP synergy through coordinated activation of shared downstream IRF3/IRF5/IRF7 transcription factors** [^kane2025-superadjuvant][^pradhan2021].

This class is **preclinical-only as of 2026** — no NP-formulated dual-PRR cancer-vaccine has entered Phase 1. But the prior-art and current-art accumulating since ~2019 (Atukorale + Mirkin + Irvine + Ruscetti groups, among others) constitute a distinct intervention modality that the wiki tracks as cancer biology shifts from systemic mono-agonist STING-agonist small-molecule trials (largely disappointing in efficacy) to lymph-node-targeted multi-PAMP NP-formulated platforms.

## Why aged hosts matter for this class

**Cancer is overwhelmingly an aging disease.** ~60% of cancers and ~70% of cancer mortality occur in people ≥65 in developed nations (see [[phenotypes/cancer]] § "The aging-cancer paradox"). The population that needs effective cancer vaccines most is the same population that responds worst to conventional adjuvants: immunosenescent older adults exhibit declining naïve T cell pools, impaired DC migration, reduced TLR4 responsiveness in PBMCs, and chronic low-grade inflammaging that desensitizes acute innate-immune signaling (see [[phenotypes/immunosenescence]] and [[hallmarks/chronic-inflammation]]).

**Super-adjuvant platforms in principle compensate** for immunosenescent baseline by maximizing per-particle innate-immune activation: more IFN-α/β per DC, more antigen-processing-machinery upregulation, better lymph-node delivery. But **none of the published preclinical data tests this in aged hosts.** All efficacy is in young immunocompetent mice (8–12-week-old C57BL/6 or BALB/c). Translation to immunosenescent older cancer patients is the central open question.

#gap/needs-human-replication · #gap/needs-aged-host-validation

## Mechanism

The core mechanism is **PAMP-synergy through coordinated IRF activation**:

| Agonist class | Receptor | Adapter | Kinase | Transcription factor |
|---|---|---|---|---|
| Cyclic dinucleotides (cdGMP, 2′3′-cGAMP, diABZI) | [[sting|STING]] | (TBK1/IKKε direct) | TBK1, IKKε | IRF3, IRF7, NF-κB |
| MPLA / LPS | [[tlr4|TLR4]] (TRIF arm) | TRIF + TRAM | TBK1, IKKε | IRF3, IRF7, NF-κB |
| MPLA / LPS | [[tlr4|TLR4]] (MyD88 arm) | MyD88 + TIRAP | IRAK4, IRAK1 | NF-κB, IRF5 |
| Poly(I:C) | TLR3 | TRIF | TBK1 | IRF3, NF-κB |
| R848 / resiquimod | TLR7/8 | MyD88 | IRAK | IRF7, NF-κB |
| CpG ODN | TLR9 | MyD88 | IRAK | IRF7, NF-κB |

When two agonists from this table are presented to the same APC **on the same nanoparticle** (not as free agonists), the kinetics of receptor engagement and downstream IRF/NF-κB activation produce **>4-fold IFN-α/β amplification** vs single agonists [^kane2025-superadjuvant][^pradhan2021]. The synergy is **shared-IRF dependent**: IRF3, IRF5, and IRF7 KO iBMDMs all show blunted IFN-I production with dual-adjuvant NPs vs WT, and IFNAR-blockade *in vivo* abolishes tumor protection [^kane2025-superadjuvant]. The synergy is **NP-dependent**: free-agonist combinations do NOT reliably reproduce the in-vivo efficacy of NP-formulated combinations, likely because NP encapsulation controls receptor-encounter kinetics and bypasses serum degradation of cyclic dinucleotides.

Secondary mechanisms:

- **Lymph-node-directed drainage.** ~30–60 nm PEGylated NPs preferentially drain to nearest draining lymph nodes after s.c. injection (the size window for direct lymphatic uptake is ~10–100 nm; smaller NPs leak into blood, larger NPs are trapped at the injection site). Empty and dual-adjuvant NPs drain similarly at 1 h but dual-adjuvant NPs accumulate >3-fold more after boost (24 h post-boost), consistent with active DC-mediated ferrying after dual-PRR activation [^kane2025-superadjuvant].
- **Antigen-processing machinery upregulation.** Dual-adjuvant NPs synergistically upregulate *Tap1*, *Tap2*, *Erap1*, *B2m*, *H2-K1*, *H2-D1* in primary CD11c⁺ DCs — the peptide-MHC-I loading machinery — providing a mechanistic basis for the enhanced CD8⁺ T cell priming observed downstream [^kane2025-superadjuvant].
- **SASP-mediated TME remodeling (when combined with senescence-inducing therapy).** In immune-cold solid tumors (notably PDAC), pre-treatment with senescence-inducing RAS-targeted therapy ([[trametinib]] MEK inhibitor + [[palbociclib]] CDK4/6 inhibitor) generates a [[cellular-senescence|therapy-induced senescent]] (TIS) tumor population whose [[chronic-inflammation|SASP]] remodels the immunosuppressive TME — restoring immune infiltration that NP-delivered dual-PRR agonists can then exploit [^chibaya2024]. This is the **cancer-aging interface most directly relevant to this wiki**: the same biology this wiki tracks as pathological in aged tissues (chronic SASP-driven inflammaging, immunosenescent stromal dysfunction) is being *deliberately and acutely deployed* as a vaccine-priming strategy in tumors. The therapeutic window between productive acute SASP and pathological chronic SASP is the central translational question.

## Representative platforms

### Kane 2025 — STING + TLR4 dual-PRR lipid NP for platform cancer vaccination

The most recent and fully-characterized entry in the class.

- **Composition.** Lipid NP co-encapsulating cdGMP (STING agonist, hydrophilic) + MPLA (TLR4 agonist, hydrophobic) at **2.5:1 cdGMP/MPLA mole ratio**, ~30–60 nm PEGylated, total NP lipid 10 mg/mL. Antigens co-administered (peptides or whole tumor lysate).
- **In vivo efficacy.** Multivalent B16F10 peptide (Trp1+Trp2+gp100) prime/boost vaccination: 100% (10/10) tumor-free at day 48; 80% (8/10) systemic rechallenge rejected. Whole-lysate vaccination: 69% (9/13) B16F10 melanoma, 88% (7/8) Panc02 PDAC, 75% (6/8) 4T1 TNBC rejection — 100% systemic-rechallenge rejection across all three models.
- **IFNAR blockade abolishes efficacy** → clean demonstration that type I IFN through IFNAR is the necessary effector.
- See [[studies/kane-2025-super-adjuvant-nanoparticles]] for the full extracted study record. [^kane2025-superadjuvant]

### Chibaya 2024 — STING + TLR4 NP combined with senescence-inducing TIS for PDAC (the cancer-aging bridge)

The same Atukorale + Fitzgerald + Ruscetti group's earlier paper directly relevant to this wiki because it explicitly leverages **therapy-induced senescence** to remodel the immune-cold pancreatic-ductal-adenocarcinoma microenvironment.

- **Combination.** Lipid NP STING (cdGMP) + TLR4 (MPLA) dual agonist + systemic [[trametinib]] (MEK inhibitor) + [[palbociclib]] (CDK4/6 inhibitor) — the "T/P" regimen induces senescence-like arrest in RAS-mutant tumor cells, with the resulting [[chronic-inflammation|SASP]] remodeling the immunosuppressive TME.
- **Mouse models.** Transplanted + autochthonous (genetically engineered) PDAC models. Both tumor STING AND host STING were required for the response (cell-autonomous tumor sensing + host innate sensing both load-bearing).
- **Human PDAC samples.** STING/TLR4-mediated IFN-I signaling correlated with enhanced NK and CD8⁺ T cell infiltration ex vivo.
- **The conceptual bridge for the aging wiki:** TIS is being deployed as a vaccine-priming strategy — the *same* SASP biology that drives chronic inflammaging in aged tissues is harnessed acutely to break tumor immune cold. Cancer-aging trade-off in microcosm.
- Patent application (PCT/US2024/029125) filed by UMass Chan + UMass Amherst on combinations of NP-loaded immune agonists with RAS-targeted therapies; commercial development through NanoVax Therapeutics. [^chibaya2024]

### Baljon 2024 — STING + TLR4 with peptide neoantigens (independent group, optimized combinations)

Independent group reporting an optimized lipid NP for STING + TLR4 agonist co-delivery with peptide neoantigens. Shows the class is not exclusive to the Atukorale group and that the optimal combinations are an active design space. [^baljon2024]

### Nakamura 2021 — STING-LNP overcomes anti-PD-1 resistance via NK activation

Mono-agonist (STING only) lipid nanoparticle — but mechanistically important: shows STING-LNP overcomes anti-PD-1 resistance in B16F10 melanoma lung metastasis via NK cell activation. Suggests NP-STING combinations with checkpoint blockade are the natural Phase 1 combination strategy for the dual-PRR platforms above. [^nakamura2021]

### Atukorale 2019 — original dual-PRR NP precedent (systemic codelivery; CDN + MPLA)

The Atukorale group's original 2019 paper demonstrating that NP encapsulation of synergistic immune agonists enables systemic codelivery to tumor sites with IFN-β-driven antitumor immunity. The conceptual precedent for Kane 2025 + Chibaya 2024. [^atukorale2019]

### Pradhan 2021 — biophysics of MPLA + CpG NP synergy (mechanistic deep-dive)

Mechanistic deep-dive on TRAF6-IRF5 kinetics, TRIF, and biophysical factors driving particle-mediated MPLA + CpG synergy. Establishes that NP-mediated co-presentation (not just co-administration of free agonists) is responsible for the synergy. [^pradhan2021]

## Aging-context relevance

The intervention class is mechanistically and translationally interesting to the aging wiki for several reasons:

1. **Cancer is an aging disease.** Every cancer-vaccine intervention is implicitly an aging-relevant intervention. The patients who need them most are immunosenescent.
2. **Immunosenescent compensation.** Super-adjuvants in principle compensate for impaired baseline APC function in aged hosts, but this is untested in aged-mouse or older-adult-human cohorts. Validating dual-PRR NP super-adjuvants in 18–22-month C57BL/6 mice is the most aging-relevant follow-up.
3. **TIS-as-vaccine-priming exploits SASP biology.** Chibaya 2024 deliberately induces senescence (via trametinib + palbociclib) to remodel the immune-cold PDAC TME. The same SASP biology that drives chronic inflammaging in aged tissues is being weaponized acutely against tumors. Therapeutic window is the key translational question.
4. **STING modulator class divergence.** [[cgas-sting]] STING *antagonists* (H-151 etc.) are being explored to suppress aging-related chronic IFN-I (inflammaging); STING *agonists* (this class) for acute cancer-vaccine priming. The same pathway is both a target of inhibition (chronic) and amplification (acute) depending on the aging-context — the wiki's recurring **dual-edged-sword** framing of IFN-I biology applies here.
5. **mRNA-LNP infrastructure carryover.** The lipid-NP infrastructure that COVID mRNA vaccines mainstreamed (Acuitas, Genevant, Moderna lipid libraries) is directly applicable to NP-cancer-adjuvant platforms. The translational ramp is potentially faster than first-in-class pharmacological interventions because the lipid-NP regulatory + GMP-manufacturing pathways are established.

## Limitations and gaps

- **No human trials of dual-PRR NP cancer adjuvants** as of 2026. Mono-agonist STING-LNP trials (e.g., MK-2118, ulevostinag) have been ongoing but largely disappointing in efficacy. NanoVax Therapeutics (Kane + Atukorale-founded) holds patent (US Patent 12377118, 8/5/2025) but no announced NCT.
- **Aged-host efficacy untested.** All published efficacy in young C57BL/6 or BALB/c mice (typically 8–12 weeks). #gap/needs-aged-host-validation
- **Cytokine-release-syndrome risk unmodeled.** Systemic IFN-I storm is the dose-limiting concern; no large-animal toxicology or comprehensive cytokine-release screens reported. Histopathology of major organs not assessed in Kane 2025 (acknowledged by authors). #gap/long-term-unknown
- **TLR4 hyporesponsiveness in aged human PBMCs.** Older adults exhibit declining TLR4 surface expression and signaling capacity in monocytes. Whether the supraphysiological PRR amplification this NP class provides overcomes that baseline hyporesponsiveness is unmodeled. #gap/needs-mechanism
- **Therapeutic window for TIS-as-priming (Chibaya 2024 axis).** Distinguishing productive acute SASP (cancer-vaccine priming) from pathological chronic SASP (inflammaging, secondary malignancy) is the central translational question — particularly relevant for older patients with baseline senescent-cell burden. #gap/dose-response-unclear
- **Customizability across non-CDN STING agonists not tested.** Kane 2025 uses cdGMP (cyclic dinucleotide). Synthetic non-CDN agonists (diABZI, MSA-2) have superior PK and serum stability but compatibility with the dual-NP platform is untested. #gap/needs-replication
- **Combination with checkpoint blockade not tested in Kane 2025.** Nakamura 2021 showed STING-LNP overcomes anti-PD-1 resistance; whether the dual-PRR NP super-adjuvant + PD-1/PD-L1 blockade combination further amplifies efficacy is the natural Phase 1 combination strategy. #gap/needs-replication

## Cross-references

- [[cgas-sting]] § STING agonists for cancer immunotherapy — pathway-level home for STING-agonist biology
- [[type-i-interferon-signaling]] § STING + TLR4 dual-PAMP nanoparticle adjuvants — pathway-level home for IFN-I amplification axis
- [[phenotypes/cancer]] § Modern therapeutic landscape — cancer-phenotype-level home for NP-adjuvant modality
- [[phenotypes/immunosenescence]] — the aged-host condition that motivates super-adjuvant development
- [[hallmarks/chronic-inflammation]] — the SASP biology weaponized in Chibaya 2024
- [[hallmarks/cellular-senescence]] — therapy-induced senescence as vaccine-priming strategy (Chibaya 2024)
- [[interventions/pharmacological/bacterial-cancer-therapy]] — adjacent modality (live-bacterium cancer therapy); same conceptual lineage of innate-immune amplification at the tumor site
- [[studies/kane-2025-super-adjuvant-nanoparticles]] — anchor study for the class

## Footnotes

[^kane2025-superadjuvant]: [[studies/kane-2025-super-adjuvant-nanoparticles]] · doi:10.1016/j.xcrm.2025.102415 · PMID:41072409 · PMC:PMC12629812 · in-vitro+in-vivo · "Super-adjuvant nanoparticles for platform cancer vaccination" · Kane GI et al. · *Cell Reports Medicine* 6(10):102415 · 2025 · n=3–4 biological replicates in vitro; 5–13 mice per group in vivo · model: mouse macrophages + iBMDMs (Irf3/Irf5/Irf7 KO) + primary mouse splenic CD11c⁺ DCs + primary human DCs (3 donors); in vivo C57BL/6 (B16F10, Panc02) + BALB/c (4T1) · archive: downloaded (gold OA via PMC) · full-PDF verified

[^chibaya2024]: doi:10.1126/scitranslmed.adj9366 · PMID:39196961 (NCBI lookup recommended) · in-vitro+in-vivo · "Nanoparticle delivery of innate immune agonists combined with senescence-inducing agents promotes T cell control of pancreatic cancer" · Chibaya L*, DeMarco KD*, Lusi CF, Kane GI, Brassil ML, Parikh CN, Murphy KC, Chowdury SR, Li J, Ma B, Naylor TE, Cerrutti J, Mori H, Diaz-Infante M, Peura J, Pitarresi JR, Zhu LJ, Fitzgerald KA, Atukorale PU#, Ruscetti M# · *Sci Transl Med* 16(762):eadj9366 · 28 Aug 2024 · model: transplanted + autochthonous PDAC (KPC-derived + GEMM); human PDAC samples · archive: downloaded (bronze OA via HHS Public Access PMC) · STING+TLR4 dual-agonist lipid NP + MEK inhibitor (trametinib) + CDK4/6 inhibitor (palbociclib) "T/P"; senescence-induced SASP remodels immune-cold PDAC TME → NP-delivered dual-PRR agonists prime IFN-I-driven T cell response; both tumor and host STING required; durable anti-tumor efficacy. **Full study page not yet seeded — claims here are from the abstract + the editor's summary on the PMC preprint version; verify quantitative claims before relying. #gap/needs-full-extraction**

[^baljon2024]: doi:10.1021/acsnano.3c04471 · "A Cancer Nanovaccine for Co-Delivery of Peptide Neoantigens and Optimized Combinations of STING and TLR4 Agonists" · Baljon JJ, Kwiatkowski AJ, Pagendarm HM, Stone PT, Kumar A, Bharti V, Schulman JA, Becker EW, Roth EW, Christov P, Bonami RH · *ACS Nano* 18(8):6845–6862 · 2024 · model: mouse (B16F10 + MC38 + 4T1) · archive: downloaded (hybrid OA) · **Full study page not yet seeded; claims here are from title + abstract — verify before relying. #gap/needs-full-extraction**

[^nakamura2021]: doi:10.1136/jitc-2021-002852 · "STING agonist loaded lipid nanoparticles overcome anti-PD-1 resistance in melanoma lung metastasis via NK cell activation" · Nakamura T, Sato T, Endo R, Sasaki S, Takahashi N, Sato Y, Hyodo M, Hayakawa Y, Harashima H · *J Immunother Cancer* 9:e002852 · 2021 · model: mouse B16F10 lung metastasis · archive: pending download (gold OA) · **Full study page not yet seeded; claims here are from title + abstract — verify before relying. #gap/needs-full-extraction**

[^atukorale2019]: doi:10.1158/0008-5472.CAN-19-0381 · "Nanoparticle Encapsulation of Synergistic Immune Agonists Enables Systemic Codelivery to Tumor Sites and IFNβ-Driven Antitumor Immunity" · Atukorale PU, Raghunathan SP, Raguveer V, Moon TJ, Zheng C, Bielecki PA, Wiese ML, Goldberg AL, Covarrubias G, Hoimes CJ, Karathanasis E · *Cancer Research* 79(20):5394–5406 · 2019 · model: mouse (multiple tumor models) · archive: closed (not_oa) · **Full study page not yet seeded; claims here are from title + abstract — verify before relying. #gap/no-fulltext-access #gap/needs-full-extraction**

[^pradhan2021]: doi:10.1126/sciadv.abd4235 · "TRAF6-IRF5 kinetics, TRIF, and biophysical factors drive synergistic innate responses to particle-mediated MPLA-CpG co-presentation" · Pradhan P, Toy R, Jhita N, Atalis A, Pandey B, Beach A, Blanchard EL, Moore SG, Gaul DA, Santangelo PJ et al. · *Sci Adv* 7:eabd4235 · 2021 · model: mouse macrophages + DCs; biochemical reconstitution · archive: pending download (gold OA) · the canonical mechanistic paper for *why* particle-mediated PAMP co-presentation produces synergy that free-agonist co-administration does not. **Full study page not yet seeded; claims here are from title + Kane 2025's citation summary — verify before relying. #gap/needs-full-extraction**
