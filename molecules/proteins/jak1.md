---
type: protein
aliases: [Janus kinase 1, JAK-1, JAK1A, JAK1B]
uniprot: P23458
ncbi-gene: 3716
hgnc: 6190
ensembl: ENSG00000162434
genage-id: null
mouse-ortholog: Jak1
pathways: ["[[jak-stat-pathway]]", "[[type-i-interferon-signaling]]"]
hallmarks: ["[[chronic-inflammation]]", "[[immunosenescence]]"]
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[chronic-inflammation]]", "[[sasp]]"]
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Xu 2015 PNAS and Kandhaya-Pillai 2022 Aging Cell verified against local PDFs; Xu 2016 Pharmacological Research (review) and Levy 2002 Nat Rev Mol Cell Biol (not_oa) not re-read — Levy 2002 tagged gap/no-fulltext-access; UniProt P23458 domain boundaries, length, and canonical IDs verified against live REST endpoint"
literature-checked-through: 2026-05-13
---


# JAK1 (Janus kinase 1)

JAK1 is the most broadly engaged non-receptor tyrosine kinase in the JAK family. It is constitutively associated with the cytoplasmic tails of a wide range of cytokine receptor subunits — including **IFNAR2** (type I IFN receptor), **IFNGR1** (type II IFN receptor), **gp130/IL6ST** (IL-6 family receptors), and the **common γ-chain** (IL-2/4/7/9/15/21 family) — and serves as the obligate transphosphorylation partner that licenses STAT activation downstream of these receptors. In aging, JAK1 is a pharmacologically tractable node in the [[chronic-inflammation|inflammaging]] circuitry: FDA-approved JAK1-selective and pan-JAK inhibitors (upadacitinib, abrocitinib, filgotinib, ruxolitinib, baricitinib, tofacitinib) suppress SASP cytokine signaling, reduce systemic inflammation, and improve frailty phenotypes in preclinical aging models. This makes JAK1 a tier-1 druggability target for aging biology.

## Identity

- **UniProt:** P23458 (JAK1_HUMAN); Swiss-Prot (manually curated), confirmed 2026-05-13
- **NCBI Gene ID:** 3716
- **HGNC:** 6190
- **Ensembl:** ENSG00000162434
- **Aliases:** JAK1A, JAK1B (splice variants described but JAK1 is the conventional symbol)
- **Mouse ortholog:** Jak1 (one-to-one; high sequence conservation)
- **Protein length:** 1,154 amino acids (canonical isoform)
- **UniProt synonyms:** JAK1A, JAK1B

> **Naming note:** This page is `[[jak1]]` — the protein. The pathway page is `[[jak-stat-pathway]]`. No `pathways/jak1.md` file exists; this page resolves all `[[jak1]]` wikilinks unambiguously.

## Domain architecture

JAK1 contains four structurally recognizable domains arranged N→C:

| Domain | Residues (approx.) | Function |
|---|---|---|
| **FERM** | 34–420 | Receptor binding; tethers JAK1 to the cytoplasmic domain of cytokine receptor subunits via the FERM F3 lobe |
| **SH2-like** | 439–544 | Phosphotyrosine-docking module; contributes to receptor interaction and intramolecular regulation |
| **Pseudokinase (JH2)** | 583–855 | Regulatory domain; lacks catalytic activity but suppresses JH1 in the basal (unliganded) state and mediates transphosphorylation activation upon receptor dimerization. UniProt annotation: "Protein kinase 1" |
| **Kinase (JH1)** | 875–1153 | Catalytic domain; principal site of pharmacological inhibition; activation-loop autophosphorylation at Y1034/Y1035 is required for full kinase activity. UniProt annotation: "Protein kinase 2" |

The JH2 pseudokinase is a defining feature of JAK family members and is the basis for the "Janus" (two-faced) naming: the catalytically active JH1 domain is juxtaposed with the catalytically inactive JH2 domain. Ligand-induced receptor dimerization brings JAK pairs into proximity, enabling trans-phosphorylation that relieves JH2-mediated autoinhibition [^levy2002].

Ubiquitination of JAK1 by RNF125 targets it for proteasomal degradation, providing negative-feedback attenuation. Dephosphorylation of the Y1034/Y1035 activation loop by PTPN2 (TC-PTP) further negatively regulates JAK1 activity.

## Receptor association map

JAK1 is constitutively pre-associated with specific receptor subunits before ligand binding:

| Cytokine class | JAK1 partner subunit | Co-JAK | Primary STATs | Aging relevance |
|---|---|---|---|---|
| Type I IFN (IFN-α/β) | IFNAR2 | TYK2 (on IFNAR1) | STAT1, STAT2 (+IRF9 → ISGF3) | Core driver of interferogenic inflammaging via cGAS-STING / LINE-1 axis |
| Type II IFN (IFN-γ) | IFNGR1 | JAK2 (on IFNGR2) | STAT1 homodimer | Elevated in senescent cell SASP; drives MHC-I upregulation |
| IL-6 family (IL-6, IL-11, OSM, LIF, IL-27) | gp130 / IL6ST | JAK2 or TYK2 | STAT3 | IL-6/STAT3 axis is the canonical inflammaging cytokine circuit |
| Common γ-chain (γc) family (IL-2, IL-4, IL-7, IL-9, IL-15, IL-21) | IL2RG (γc) | JAK3 | STAT5, STAT6 | IL-7/JAK1 supports naïve T-cell homeostasis; declines with age → lymphopenia |
| IL-10 | IL10RA | JAK1 (on IL10RA) + TYK2 | STAT3 | Anti-inflammatory; impaired IL-10 → excess SASP |
| GM-CSF (CSF2), IL-3, IL-5 | Common β-chain (βc/CSF2RB) | JAK2 | STAT5 | Myeloid skewing; GM-CSF elevated in aged BM |

JAK1 is the broadest-engagement JAK precisely because it pairs with the obligate signal-transducing subunits (IFNAR2, gp130, γc, IL10RA) rather than the ligand-binding subunits — making it the common catalytic arm of the most inflammaging-relevant cytokines.

## Canonical activation mechanism

The four-step cascade follows the pan-JAK model described on [[jak-stat-pathway]]:

1. Cytokine binds extracellular receptor domains → induces receptor subunit dimerization or conformational change.
2. Pre-associated JAK1 and its co-JAK (e.g., TYK2 on IFNAR, JAK2 on gp130) are brought into proximity → trans-phosphorylate each other's JH1 activation loops (JAK1 at Y1034/Y1035).
3. Activated JAK1 phosphorylates specific tyrosines on the receptor cytoplasmic tail → creates docking sites for STAT SH2 domains.
4. Recruited STATs are phosphorylated by JAK1 → dimerize → translocate to nucleus → activate transcriptional programs (ISGs, acute-phase reactants, proliferative genes).

## Role in aging

### Inflammaging via SASP amplification

Senescent cells secrete a characteristic SASP comprising IL-6, IL-8, IL-1α/β, TNF-α, IFN-β, and MMP3/10, among others. IL-6 (the dominant SASP cytokine in most contexts) signals via gp130/JAK1/STAT3 in both autocrine and paracrine modes — reinforcing the senescent state while propagating inflammation to neighboring cells and systemically [^xu2015]. TNF-α and IFN-γ synergize to hyper-activate JAK/STAT1 beyond what either cytokine achieves alone, further amplifying SASP and — notably — upregulating ACE2 expression [^kandhaya2022].

JAK inhibition blunts SASP amplification without necessarily clearing senescent cells (mechanistically, a **senomorphic** effect rather than a senolytic). Xu et al. (2015) demonstrated in 24-month-old C57BL/6 male mice that oral ruxolitinib (INCB18424; a JAK1/JAK2 inhibitor) reduced physical frailty markers — rearing activity, ambulation, grip strength, and RotaRod speed — and adipose tissue macrophage infiltration after 10 weeks of treatment, without affecting senescent cell number [^xu2015]. (Tofacitinib was evaluated in the in vitro SASP experiments but was not administered in the mouse frailty phenotyping arm.) **Not yet demonstrated in a powered human aging/frailty RCT** #gap/needs-human-replication.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — JAK1 sequence and receptor-pairing logic identical |
| Phenotype conserved in humans? | partial — SASP/JAK1 biology confirmed in human cell culture; frailty endpoint unverified in humans |
| Replicated in humans? | no — mouse model only for frailty endpoints; clinical JAK inhibitors reduce inflammatory biomarkers in RA/IBD patients but aging-specific RCT data are limited |

### Type I IFN signaling and interferogenic aging

In aged tissues, accumulated cytosolic self-nucleic acids (leaked mitochondrial DNA, LINE-1 retrotransposon cDNA, chromatin bridges) constitutively activate [[cgas-sting]] → produce tonic IFN-β → engage IFNAR2/JAK1/TYK2 → chronic low-level STAT1 and ISG induction. This "interferogenic" state is increasingly recognized as a driver of the senescence-associated inflammatory background in older adults [^kandhaya2022]. JAK1 inhibition (or TYK2 inhibition) dampens ISRE-driven ISG expression downstream of IFNAR without affecting cGAS-STING itself — distinguishing this pharmacological approach from upstream STING antagonists. See [[type-i-interferon-signaling]] for the full pathway.

### Loss-of-function phenotype: a natural control experiment

Germline loss-of-function mutations in JAK1 cause severe combined immunodeficiency (SCID) in humans — establishing that JAK1 is non-redundantly required for lymphocyte development and cytokine signaling. This biological necessity is the reason why therapeutic JAK inhibition carries immunosuppression risk; the clinical challenge is partial inhibition that reduces inflammaging without ablating protective immunity.

### Gain-of-function: autoinflammatory disease

Somatic and germline gain-of-function variants in JAK1 (notably at Asp-634 and Ile-703, in or near the JH2 pseudokinase domain) cause constitutive kinase activation and produce an autoinflammatory syndrome — Autoinflammation, Immune dysregulation, and Eosinophilia (AIIDE) — characterized by elevated type I IFN signaling, atopic disease, and multiorgan inflammation. These GOF variants are clinically distinct from the age-related tonic JAK1 hyperactivation arising from SASP/interferogenic inputs.

## Pharmacology — JAK inhibitor landscape

JAK1 is the most-targeted JAK in current clinical therapeutics. The inhibitor landscape spans two selectivity tiers:

### Selective JAK1 inhibitors

| Drug | JAK selectivity | FDA approval | Aging-relevant? |
|---|---|---|---|
| **Upadacitinib** (Rinvoq) | JAK1-selective | RA, PsA, AS, AD, UC, CD | Yes — highest selectivity for JAK1; lower hematologic risk than pan-JAK |
| **Abrocitinib** (Cibinqo) | JAK1-selective | Atopic dermatitis | Plausible; AD involves IFN/IL-4/IL-13 JAK1 signaling |
| **Filgotinib** (Jyseleca) | JAK1-selective | RA (EU/Japan), UC | Yes — approved for inflammatory diseases; lower JAK2-related anemia risk |

Selective JAK1 inhibitors were developed to reduce on-target toxicities from JAK2 inhibition (anemia, thrombocytopenia) and JAK3 inhibition (lymphopenia). In the context of aging-interventions, selectivity for JAK1 over JAK2 is particularly attractive because the key inflammaging cytokines (IL-6/gp130/JAK1, IFN-α/β/IFNAR2/JAK1) are predominantly JAK1-mediated, whereas JAK2 drives erythropoietin and growth hormone signaling that are independent of the SASP.

### Pan-JAK inhibitors engaging JAK1

| Drug | JAK selectivity | Aging-evidence |
|---|---|---|
| **Ruxolitinib** (Jakafi) | JAK1/JAK2 | Xu 2015 PNAS — reduced frailty in 24-month-old C57BL/6 male mice after 10 wk; n=8–9/group [^xu2015] |
| **Tofacitinib** (Xeljanz) | JAK1/JAK2/JAK3 | Xu 2015 in vitro SASP experiments (siRNA knockdown panel); not administered in the mouse frailty arm [^xu2015] |
| **Baricitinib** (Olumiant) | JAK1/JAK2 | In vitro evidence for SASP reduction; no dedicated aging RCT as of 2026-05-13 |

**Aging-context druggability tier-1 rationale.** FDA-approved JAK1-selective inhibitors (upadacitinib, abrocitinib, filgotinib) exist, demonstrating that JAK1 is a regulated clinical target. Preclinical aging data from Xu 2015 PNAS (ruxolitinib and tofacitinib in aged mice, 839 citations, locally available PDF) establishes a direct aging-frailty mechanism for JAK1/2 inhibition [^xu2015]. The tier-1 designation reflects: existing FDA-approved drugs that engage JAK1 + direct preclinical aging-frailty evidence + ongoing aging-specific investigation. This differs from the tier-1 max-druggability criterion: no JAK inhibitor is FDA-approved for an aging indication specifically, but multiple are approved for inflammatory diseases driven by the same cytokine circuits (IL-6/STAT3, IFN/STAT1) that drive inflammaging.

### Xu/Kirkland perspective (2016)

Xu, Tchkonia, and Kirkland published a programmatic perspective in *Pharmacological Research* (2016) explicitly proposing JAK/STAT inhibition as an aging intervention strategy, laying out the SASP → JAK1 → STAT3 mechanistic rationale and calling for clinical trials targeting frailty [^xu2016]. This paper formalizes JAK1 as a geroprotective target beyond its autoimmune indication.

### Safety profile: immunosuppression and cardiovascular risk

All approved JAK inhibitors carry FDA black-box warnings for serious infections, malignancy (particularly lymphoma), MACE (major adverse cardiovascular events), and thrombosis. The ORAL Surveillance trial (2022, tofacitinib vs TNF inhibitors in RA) documented elevated MACE and malignancy with tofacitinib at age ≥50 with ≥1 cardiovascular risk factor. This is a significant translational constraint for aging applications: the target population (older, potentially frail adults) overlaps substantially with the high-risk group that showed adverse cardiovascular signals. #gap/long-term-unknown — the safety profile of low-dose or intermittent JAK inhibition specifically designed for aging/frailty (not autoimmune disease) is unknown. This represents the primary `translation-gap` for repurposing JAK inhibitors as geroprotectors.

## Cross-species note: JAK1 vs JAK2 V617F

The somatic gain-of-function mutation **JAK2 V617F** (found in >95% of polycythemia vera and ~50% of essential thrombocythemia/myelofibrosis) is a distinct molecular story occurring on a *different* gene, JAK2 — despite ruxolitinib (a JAK1/2 inhibitor) being approved for treatment. If a `[[jak2]]` protein page exists, the JAK2 V617F somatic mutation / CHIP context lives there. Do not conflate JAK1 LOF/GOF biology with JAK2 V617F myeloid clonal expansion.

## Pathway membership and downstream propagation

- [[jak-stat-pathway]] — the overarching JAK/STAT pathway; JAK1 is one of four JAKs
- [[type-i-interferon-signaling]] — JAK1/TYK2 relay downstream of IFNAR; see that page for full two-phase architecture
- [[chronic-inflammation]] — hallmark downstream of tonically elevated JAK1-mediated cytokine signaling in aged tissues
- [[sasp]] — SASP cytokines (IL-6, IFN-β) activate JAK1 in autocrine/paracrine modes
- [[immunosenescence]] — JAK1-dependent γc cytokine signaling (IL-7) supports naïve T-cell homeostasis; age-related decline contributes to immune contraction

## Limitations and knowledge gaps

- **No aging-specific RCT.** As of 2026-05-13, no completed powered RCT has assessed a JAK inhibitor primarily for aging, frailty, or physical function in otherwise-healthy older adults. The TAME trial (metformin, aging endpoint) and similar geroscience trials provide a regulatory template but JAK inhibitors have not yet followed this path. #gap/needs-human-replication
- **Frailty phenotype mechanism in mice is incompletely characterized.** Xu 2015 quantified serum cytokine reductions (IL-6, GM-CSF, G-CSF, IP-10, CXCL-1 significantly reduced by ruxolitinib vs vehicle; Fig. 7A) alongside frailty improvements, establishing co-occurrence. However, whether SASP cytokine reduction is the direct cause of improved frailty (vs. other JAK1/2-mediated effects on non-senescent cells) was not established. #gap/no-mechanism (partial)
- **Dose-response for aging effects is unknown.** The mouse studies used doses calibrated to rheumatoid arthritis, not to the lower chronic exposure that might be appropriate for a geroprotective application. #gap/dose-response-unclear
- **JAK2-mediated hematopoietic suppression** confounds pan-JAK inhibitor use in older adults who may have borderline anemia or thrombocytopenia. Selective JAK1 inhibitors (upadacitinib, filgotinib) theoretically reduce this risk but lack comparative frailty data.
- **GTEx aging correlation** not yet populated for JAK1. #gap/needs-canonical-id — run `sops/finding-tissue-expression.md` on next verifier pass.
- **MR causal evidence** not tested. No GWAS loci for frailty or longevity have been formally attributed to JAK1 germline variation via Mendelian randomization. `mr-causal-evidence: not-tested`.
- **Mouse vs human SASP composition diverges.** The dominant SASP cytokines and the relative contribution of JAK1 vs JAK2 to SASP amplification differ across cell types and species — the mouse aging-frailty findings may not quantitatively extrapolate. #gap/needs-human-replication

## Footnotes

[^xu2015]: [[studies/xu-2015-jak-inhibitor-sasp-frailty]] · doi:10.1073/pnas.1515386112 · n=8–9/group (ruxolitinib/INCB18424 vs vehicle; CLAMS n=8, grip/RotaRod n=9) · in-vivo · p<0.05 (rearing, ambulation, grip strength, RotaRod speed vs vehicle) · model: 24-month-old C57BL/6 male mice, 10 wk treatment; local PDF available

[^kandhaya2022]: [[studies/kandhaya-pillai-2022-tnf-ifng-jak-sasp]] · doi:10.1111/acel.13646 · in-vitro · model: human umbilical vein endothelial cells (HUVECs); replicative senescence (passage 11–14) + cytokine synergy (TNF-α + IFN-γ → hyper-activated JAK/STAT1 → ACE2/DPP4 upregulation + SASP amplification); ruxolitinib normalized ACE2; local PDF available

[^xu2016]: doi:10.1016/j.phrs.2016.05.015 · review · Xu M, Tchkonia T, Kirkland JL · *Pharmacological Research* 2016 · programmatic perspective on JAK/STAT as aging-intervention target; not a primary experimental study

[^levy2002]: doi:10.1038/nrm754 · review · Levy DE, Darnell JE Jr. · *Nat Rev Mol Cell Biol* 2002 · canonical JAK-STAT mechanism including JH2 autoinhibition model; widely cited foundational reference · #gap/no-fulltext-access (not_oa per a local paper archive; JH2 autoinhibition claim unverified against full text)
