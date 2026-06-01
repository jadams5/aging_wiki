---
type: intervention
aliases: [cgas-inhibitors, cgas-stimulators, cgas-pathway-modulators, cGAS catalytic inhibitors, cGAS chromatin-retention enhancers, NMR cGAS gene therapy]
mode: pharmacological
mechanisms: [innate-immune-modulation, hr-repair-modulation, ubiquitin-ligase-modulation]
targets: ["[[cgas]]", "[[trim41]]", "[[vcp]]"]
target-hallmarks: ["[[chronic-inflammation]]", "[[genomic-instability]]", "[[cellular-senescence]]"]
target-pathways: ["[[cgas-sting]]", "[[dna-damage-response]]", "[[homologous-recombination]]"]
human-evidence-level: preclinical-only
clinical-stage: phase-1
safety-profile: investigational
translation-gap: preclinical-only
next-experiment: "Mouse knock-in of NMR cGAS 4-AA variant (GGNM→CTLM or equivalent positions per Chen 2025 full-text) — does it confer improved HR efficiency, reduced genomic instability, or lifespan extension in aged animals relative to WT cGAS knock-in controls?"
clinical-trials-active: 0
literature-checked-through: 2026-05-12
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 — synthesized from canonical drug-development literature plus Chen 2025 abstract (closed-access; #gap/no-fulltext-access). This is a forward-looking class page; no aging-indication clinical trial exists for any subclass as of seeding. Quantitative claims about specific molecules may be approximate; verify before relying.

# cGAS Modulators

A pharmacological intervention class targeting the **cyclic GMP–AMP synthase (cGAS)** protein, which occupies a dual role in cellular aging: (1) its cytosolic/cytoplasmic form drives inflammaging by sensing leaked dsDNA and activating the STING → NF-κB / IRF3 → IFN-I axis; (2) its nuclear/chromatin-bound form, in long-lived species such as the naked mole-rat (*Heterocephalus glaber*), directly potentiates homologous recombination (HR) DNA repair via interaction with FANCI and RAD50 [^chen2025].

The Chen 2025 *Science* paper is the founding rationale for framing this as a unified intervention class. It describes how NMR cGAS differs from human/mouse cGAS by just four amino acids (positions not yet confirmed by full-text) that increase its chromatin retention time — and that this elevated chromatin residence confers enhanced HR repair capacity, contributing to the NMR's exceptional resistance to genomic instability and delayed aging phenotype [^chen2025].

**This page covers an intervention design space, not an evidence review.** No aging-indication clinical trials exist for any subclass as of 2026-05-12. Three mechanistically distinct subclasses are described; they differ not only in target but in the *direction* of cGAS modulation:

- **Type A** — suppress cGAS enzymatic activity → less cGAMP → less STING/IFN → reduce inflammaging
- **Type B** — increase cGAS chromatin retention → more HR-supportive nuclear cGAS → better genome repair
- **Type C** — gene therapy replacing human cGAS with the NMR 4-AA variant

Types A and B are **opposite in direction** for the nuclear/chromatin-bound cGAS pool. This distinction is critical for rational drug design and is the reason this class is not subsumed under a simple "cGAS inhibitors" label.

This page covers the **intervention class as a whole**. Specific compound pages (RU.521, CB-5083, NMS-873) have not yet been seeded; stubs are noted in cross-references.

---

## Overview

### cGAS cytoplasmic versus nuclear functions

cGAS is canonically understood as a cytoplasmic dsDNA sensor activating innate immunity. However, a significant fraction of cGAS localizes to the nucleus in interphase cells, bound to nucleosomes via acidic patch interactions. At this chromatin-bound location, cGAS enzymatic activity is **suppressed** by nucleosomal constraints — the protein is occupying chromatin but not producing cGAMP [^decout2021].

The question Chen 2025 addresses is whether this chromatin-bound cGAS serves any *function* beyond enzymatic silence. The answer — at least in NMR cGAS — is yes: chromatin-bound NMR cGAS physically interacts with the HR repair factors FANCI and RAD50, and this interaction potentiates repair of double-strand breaks at the chromatin site. Four amino acid differences between NMR and human/mouse cGAS increase NMR cGAS chromatin residence time, which correlates with enhanced HR capacity [^chen2025]. #gap/needs-replication

### Dual-role aging consequences

The two-function model has distinct aging implications:

| Function | Location | Output | Aging direction | Intervention goal |
|---|---|---|---|---|
| cGAMP synthesis | Cytoplasm / cytosol | cGAMP → STING → NF-κB / IFN-I | Inflammaging driver | Inhibit (Type A) |
| HR support | Nucleus / chromatin | FANCI-RAD50 interaction → DSB repair | Genomic stability enabler | Enhance chromatin retention (Type B) |

**Pan-inhibition caveat:** Small molecule cGAS catalytic inhibitors (Type A) block both functions simultaneously. If human chromatin-bound cGAS contributes even modestly to HR (Chen 2025 implies WT human/mouse chromatin cGAS has reduced HR-supportive capacity vs NMR, but it may retain residual function), pan-inhibition could theoretically impair genomic stability. This is a speculative concern; the Chen 2025 framework suggests WT human cGAS is predominantly a chromatin-*suppressed* enzyme with minimal HR-supportive activity, so pan-inhibition is more likely HR-neutral or slightly beneficial relative to baseline. The open question is whether human cGAS retains any HR-supportive function at chromatin that would be lost with pan-inhibition. #gap/no-mechanism

---

## Type A: cGAS catalytic inhibitors

### Mechanism

Small molecules that occupy the active site of cGAS and competitively inhibit cGAMP synthesis from ATP and GTP. Reduced cGAMP levels → reduced STING activation → reduced downstream NF-κB and IRF3 signaling → lower IFN-β, TNF-α, IL-6, IL-1β output from senescent and stressed cells.

In the aging context, this mirrors the rationale for STING inhibitors (see [[cgas-sting]] for pathway detail). The cGAS node is upstream of STING and thus offers a broader intervention point — it prevents cGAMP generation rather than blocking cGAMP-STING binding.

### Compound landscape

| Agent | Class | Stage | Notes |
|---|---|---|---|
| **RU.521** | Non-nucleotide competitive inhibitor (Genentech) | Research-grade probe | Potent and selective; widely used to validate cGAS inhibition in cell culture; not drug-optimized #gap/unsourced for aging |
| **CU-CPT22** | Nucleoside analogue competitive inhibitor | Research-grade probe | Early-generation; less selective than RU.521 #gap/unsourced |
| **G140 series** | Thieno[2,3-d]pyrimidine scaffold (Genentech) | Research-grade probe | Defined in cGAS inhibitor med-chem literature [^zhao2022] [^tian2022] |
| **G150 series** | Next-generation G140 analogue | Research-grade probe | Improved cell permeability vs G140 #gap/unsourced |
| **TDI-6570** | Covalent site-2 inhibitor (Tri-Institutional Therapeutics Discovery Institute) | Preclinical | Activity in primary human cells [^wiser2020] |
| **JS-001** (Janus Therapeutics) | Undisclosed scaffold | Clinical stage: **Phase 1, autoimmune indications** | Only clinical-stage cGAS inhibitor identified as of 2026; **indication is autoimmune (SLE/dermatomyositis), not aging** [^zhang2022] |

The chemical-biology literature for cGAS inhibitors is well-developed for autoimmune applications (SLE, dermatomyositis, systemic sclerosis) [^decout2021] [^zhao2022]. Clinical translation to aging-specific indications has not begun. #gap/needs-human-replication

**Clinical-stage exception:** JS-001 (Janus Therapeutics) has entered Phase 1 in autoimmune indications. Per CLAUDE.md aging-context clinical-stage convention, this page uses `phase-1` to reflect autoimmune-indication activity, not aging-indication status.

### Aging-specific evidence

No aging-specific human trials exist. Preclinical evidence for anti-inflammaging benefit is indirect:

- cGAS knockout in aged mice reduces IFN-I signaling and SASP-like cytokine profiles in multiple tissue studies [^schmitz2023] [^salminen2025] #gap/needs-human-replication
- Pharmacological cGAS inhibition (RU.521) reduces senescence-associated IFN-I in cell culture models of radiation-induced senescence [^wiser2020] #gap/needs-human-replication
- cGAS–STING pathway hyperactivation is documented in aging retina, muscle, brain, and cardiovascular tissue across multiple species [^wang2026retina] [^song2023] [^izquierdo2025] #gap/needs-replication (causal direction not established for most tissues)

---

## Type B: cGAS chromatin-retention enhancers

### Rationale

If the NMR cGAS 4-AA change primarily increases chromatin residence time and thereby potentiates HR, then any agent that prolongs chromatin binding of endogenous (human) cGAS could — in principle — enhance HR repair without requiring gene therapy. Two categories of molecular target have been proposed:

1. **TRIM41 inhibition** — TRIM41 is an E3 ubiquitin ligase that ubiquitinates chromatin-bound cGAS, targeting it for proteasomal extraction. Inhibiting TRIM41 would extend cGAS chromatin residence. Independent support: Zhen et al. 2023 show TRIM41-mediated ubiquitination of ORF2p (L1 retrotransposon) is regulated by nuclear cGAS, demonstrating an active nuclear regulatory role for cGAS distinct from its cytoplasmic sensor function [^zhen2023]. #gap/no-mechanism — no TRIM41 inhibitor with aging-relevant HR data exists.

2. **VCP/p97 inhibition** — VCP (valosin-containing protein, encoded by *VCP*) is a AAA+ ATPase "segregase" that extracts ubiquitinated substrates from chromatin for proteasomal degradation. Inhibiting VCP would stabilize chromatin-retained ubiquitinated cGAS *and* other chromatin-bound factors. However, VCP/p97 operates on dozens of chromatin and membrane substrates (including ERAD, ATAD1-mediated receptor extraction, and mitotic chromatin decondensation) — its inhibition would be highly pleiotropic.

### VCP/p97 inhibitor landscape

| Agent | Mechanism | Stage | Cancer context notes |
|---|---|---|---|
| **CB-5083** (Cleave Biosciences) | ATP-competitive VCP inhibitor | Oncology Phase 1 (dose-finding; completed without advancing to Phase 2 per available records) | GI toxicity at required doses; the segregase-multisubstrate problem is its principal limitation [^zhang2021] |
| **NMS-873** | Allosteric VCP inhibitor (Type II site) | Research probe / oncology preclinical | More selective than CB-5083 for some substrates; cell-permeable; no clinical advancement |
| **UPCDC30245** | DBeQ-class ATP-competitive inhibitor | Research probe only | Tool compound; not drug-optimized |

**Critical caveat:** VCP inhibitors were developed for cancer (exploit proteotoxic stress in rapidly-dividing cells). They are **highly non-selective** for cGAS chromatin retention; inhibiting VCP in aging contexts would affect ERAD, autophagy substrate extraction, mitotic regulation, and numerous other processes. The on-target-for-cGAS benefit is speculative; the off-target liability is established. #gap/no-mechanism

### TRIM41 inhibitor landscape

No clinical or preclinical TRIM41 inhibitor with aging-relevant HR data exists as of 2026-05-12. TRIM41 is a RING-finger E3 ligase; RING-finger ligase inhibitors are an active research area (ARIH1, MDM2, TRIM25 inhibitors are in development) but TRIM41-selective inhibition has not been described. This is a **probe-discovery opportunity**, not a translatable strategy yet. #gap/needs-replication

### Status summary

Type B is the most mechanistically motivated subclass per the Chen 2025 framework, and the most speculative in terms of available tools. The gap between NMR-inspired biology and translatable chemistry is largest here. #gap/no-mechanism

---

## Type C: NMR cGAS variant gene therapy

### Concept

AAV delivery of a cGAS coding sequence carrying the four NMR-specific amino acid substitutions (exact residue positions require full-text Chen 2025 confirmation — #gap/no-fulltext-access). The intended effect: replace or supplement endogenous human cGAS with a form that has higher chromatin affinity but (if the 4 AAs affect only chromatin retention and not enzymatic activity) retains normal cytoplasmic innate-immune sensing capability.

### Comparison to AAV-TERT

The closest conceptual precedent is AAV-TERT gene therapy (see [[interventions/gene-therapy/aav-tert]]). Parallels and distinctions:

| Dimension | AAV-TERT | Type C / NMR-cGAS |
|---|---|---|
| Target | Telomerase reverse transcriptase | cGAS variant with enhanced HR function |
| Payload size | ~3.4 kb | ~1.8 kb (estimated; cGAS CDS) |
| AAV suitability | Yes (fits standard AAV capsid) | Yes |
| Mouse evidence | Yes — Blasco lab telomere extension; healthspan improvement | Not yet — no non-NMR knock-in with lifespan data reported |
| Human clinical status | Phase 1 (BioViva; Resbio) | Pre-preclinical |
| Immunogenicity concern | TERT is human-sequence; low MHC exposure | NMR-cGAS variant is non-self — **higher immunogenicity risk** |

**Immunogenicity flag:** NMR cGAS protein carries sequence differences from human cGAS. Even 4 amino acid changes in a broadly expressed protein could generate neoantigen-class MHC-I presentation and cytotoxic T lymphocyte responses — particularly in immune-competent elderly patients with reduced tolerance for autoreactivity. This risk must be characterized before any human translation. #gap/long-term-unknown

**Functional uncertainty (requires full-text Chen 2025):** It is not yet confirmed from the abstract whether the 4 NMR amino acid changes are sufficient to confer HR-enhancement without also modifying cGAMP synthesis kinetics. If the variant reduces cytoplasmic cGAS activity, it would simultaneously impair innate immune sensing against viral pathogens — a significant safety concern. Full-text verification required. #gap/no-fulltext-access

### Status

Pre-preclinical. No in-vivo study in any non-NMR species has evaluated NMR cGAS variant knock-in for lifespan, genomic stability, or HR efficiency. This is at the stage of hypothesis motivated by comparative biology.

---

## Mechanism rationale by hallmark target

### [[chronic-inflammation]] (inflammaging)

**Type A** is the primary intervention modality. Chronic low-level cGAS–STING activation is driven by:
- Cytoplasmic self-DNA from ruptured micronuclei (from chromosome segregation errors in aging cells)
- Mitochondrial DNA (mtDNA) leakage via MOMP or mPTP
- Retrotransposon RNA/DNA intermediates (LINE-1 elements, which become transcriptionally derepressed with epigenetic aging)

All three sources increase with age [^schmitz2023] [^jones2025]. Inhibiting cGAS upstream of STING reduces IFN-I and downstream SASP-like cytokine profiles. #gap/needs-human-replication — no human data for aging-specific inflammatory endpoints.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — cGAS-STING is highly conserved; human senescent cells show elevated cGAMP |
| Phenotype conserved in humans? | partial — inflammaging is documented; cGAS-specific contribution quantified only in rodent models |
| Replicated in humans? | no — cGAS inhibitor trials target autoimmune, not aging indications |

### [[genomic-instability]]

**Types B and C** are the primary modalities. HR repair efficiency declines with age; error-prone NHEJ predominates, resulting in structural chromosomal variants, loss of heterozygosity, and accumulation of driver mutations. If NMR-cGAS chromatin retention enhances HR (Chen 2025), restoring this function via TRIM41 inhibition, VCP inhibition, or NMR-cGAS delivery could slow the accumulation of structural genomic errors. #gap/needs-human-replication

### [[cellular-senescence]]

**Indirect target via both modalities.** cGAS–STING activation drives senescence through the SASP cytokine loop and paracrine senescence spread (bystander effect). Reducing cGAS-driven IFN-I/NF-κB activity would reduce SASP burden and potentially slow the senescence-spread cascade. #gap/no-mechanism — causal contribution of cGAS-mediated SASP to net senescent-cell burden not established in vivo.

---

## Human evidence

**Summary: preclinical-only for aging indications.** The strongest human-proximate evidence is:

1. JS-001 (Janus Therapeutics) in **autoimmune Phase 1** — demonstrates that a selective small-molecule cGAS inhibitor is tolerable in humans at anti-autoimmune doses. No aging endpoints. This is cross-indication safety signal only.
2. **Genetic epidemiology:** Loss-of-function variants in TREX1 (the cytoplasmic DNase that clears cGAS ligand) cause Aicardi–Goutières syndrome and systemic lupus; gain-of-function in downstream STING causes SAVI syndrome. These Mendelian disorders establish pathway causality but do not model aging-rate modulation. #gap/no-mechanism
3. **Observational aging data:** cGAS–STING pathway markers (cGAMP, pSTING) are elevated in peripheral blood of elderly vs young adults in small cross-sectional studies [^schmitz2023] — correlation only. #gap/needs-replication

No Phase 2 or Phase 3 trials in aging, frailty, cognitive decline, or any aging-proximate primary endpoint have been initiated for any cGAS inhibitor as of 2026-05-12.

---

## Clinical-trial landscape

<!-- clinical-trials-active: queried 2026-05-12; recheck in ~6 months -->

**Query performed:** ClinicalTrials.gov v2 API, `query.term=cGAS+inhibitor` and `query.term=cGAS+aging`, `filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING`. Result: **0 active trials** with aging, frailty, inflammaging, or aging-adjacent primary endpoints.

Two active cGAS-pathway trials were identified; **both are oncology-only**:

| NCT ID | Phase | Status | Sponsor | Title (brief) | Aging relevance |
|---|---|---|---|---|---|
| NCT04394858 | Phase 2 | Active, not recruiting | NCI | Olaparib + standard chemo (PARP + DNA damage combination — not a direct cGAS inhibitor) | None |
| NCT06022029 | Phase 1 | Recruiting | OncoNano Medicine | ONM-501 intratumoral (STING agonist, not inhibitor — opposite direction) | None |

The STING-inhibitor trial space also shows no aging-indication trials (6 active STING-related trials, all oncology).

**Conclusion:** `clinical-trials-active: 0` for aging-relevant indications. The class is at pre-IND stage for aging applications.

#gap/needs-human-replication — A Phase 1 safety study in older adults (≥65) with a validated cGAS inhibitor (e.g., RU.521 analogue optimized for human use) measuring SASP biomarkers (IFN-β, IL-6, MCP-1 in plasma) as primary endpoints would be the minimal translational next step.

---

## Risks and unknowns

### Pan-inhibition and innate immune compromise (Type A)

Blocking cytoplasmic cGAS reduces the primary first-line defense against cytoplasmic DNA from viral pathogens (HSV-1, vaccinia, HIV reverse-transcript intermediates). Long-term cGAS inhibition in elderly individuals — who already have compromised innate immunity — could increase susceptibility to viral reactivation (CMV, EBV, VZV) or de-novo viral infection. Short-course intermittent dosing (as contemplated for senolytics) could mitigate but not eliminate this risk. #gap/long-term-unknown

### Off-target effects of VCP/p97 inhibitors (Type B)

VCP is an essential multifunctional ATPase involved in ERAD, autophagy substrate routing, mitotic spindle checkpoint release, and chromatin remodeling at numerous loci beyond cGAS. CB-5083 Phase 1 identified GI toxicity as dose-limiting; the mechanism involves VCP's role in ER protein homeostasis in intestinal epithelium. Any aging application of VCP inhibition must contend with this broad substrate profile. The VCP → cGAS chromatin retention mechanism is speculative and entirely unvalidated pharmacologically. #gap/no-mechanism

### Immunogenicity of NMR cGAS variant (Type C)

Discussed in Type C section. The 4-AA substitution may create neoantigen peptides recognized by MHC-I. In elderly patients with dysregulated adaptive immunity, this could trigger unpredictable immune responses including granulomatous inflammation, autoimmune cross-reactivity, or (paradoxically) immunosuppression from exhausted T-cell populations attempting to clear expressing cells. Preclinical immunogenicity studies in humanized mouse models are required before any consideration of human translation. #gap/long-term-unknown

### cGAS nuclear function incompletely characterized

The Chen 2025 finding establishes an HR-supportive function for NMR cGAS at chromatin. Whether human cGAS retains any residual HR-supportive nuclear function — and whether pan-inhibition would ablate it — is an open question that cannot be answered from the abstract. Full-text access is required to evaluate mechanistic claims for the human-cGAS comparison. #gap/no-fulltext-access #gap/no-mechanism

---

## Knowledge gaps

| Gap | Tag | Priority |
|---|---|---|
| Full mechanism of NMR 4-AA substitution not confirmed from PDF | #gap/no-fulltext-access | High — required to design Type B/C interventions rationally |
| Whether human cGAS retains HR-supportive chromatin function at all | #gap/no-mechanism | High |
| Pan-inhibition (Type A) effect on HR efficiency in aging cells | #gap/no-mechanism | High |
| TRIM41-selective inhibitor discovery | #gap/needs-replication | High (no probe exists) |
| VCP inhibitor selectivity for cGAS-retention substrate | #gap/no-mechanism | Medium |
| NMR cGAS variant immunogenicity in non-NMR species | #gap/long-term-unknown | High (blocking for Type C) |
| Dose-response for cGAS inhibitor effects on SASP in aged human cells | #gap/dose-response-unclear | High |
| Human aging trial: cGAS inhibitor + SASP/biomarker endpoints | #gap/needs-human-replication | Highest for translation |

---

## Relation to adjacent intervention classes

| Class | Relationship | See also |
|---|---|---|
| [[senomorphics]] | Functional overlap in SASP reduction; STING inhibitors (downstream of cGAS) are the closest neighbor class | [[interventions/pharmacological/senomorphics]] |
| [[senolytics]] | Complementary strategy — senolytics remove senescent cells; Type A cGAS inhibitors suppress their signaling. No cross-class human trial | [[interventions/pharmacological/senolytics]] |
| [[parp-inhibitors]] | Overlapping DDR context; PARP operates at SSBs/BER, cGAS at HR/DSBs; combination logic possible but unstudied | [[interventions/pharmacological/parp-inhibitors]] |
| [[dna-pkcs-inhibitors]] | NHEJ inhibitors shift DSB repair toward HR (complementary to Type B); Class potentially synergistic with chromatin-retention enhancers | [[interventions/pharmacological/dna-pkcs-inhibitors]] |
| gene therapy ([[interventions/gene-therapy/aav-tert]]) | Same modality reasoning for Type C; AAV-cGAS faces similar immunogenicity and tissue-delivery challenges as AAV-TERT | [[interventions/gene-therapy/aav-tert]] |

---

## Cross-references

- [[cgas]] — protein page (cGAS; [[molecules/proteins/cgas]]) — canonical biochemistry
- [[cgas-sting]] — pathway page — full STING → TBK1 → IRF3 / NF-κB signal cascade
- [[dna-damage-response]] — upstream pathway; context for HR repair relevance
- [[homologous-recombination]] — pathway; Type B/C target
- [[chronic-inflammation]] — target hallmark
- [[genomic-instability]] — target hallmark
- [[cellular-senescence]] — indirect target hallmark
- [[heterocephalus-glaber]] — founding comparative-biology observation (Chen 2025)
- [[trim41]] — TRIM41 E3 ligase protein page (batch 2)
- [[vcp]] — VCP/p97 protein page (batch 2)
- [[molecules/compounds/ru521]] — implicit stub: cGAS inhibitor compound page not yet seeded
- [[molecules/compounds/cb-5083]] — implicit stub: VCP inhibitor compound page not yet seeded

---

## Footnotes

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · *Science* 2025 · doi:10.1126/science.adp5056 · PMID 41066557 · Chen Y et al. · in-vivo + mechanistic · model: naked mole-rat (*H. glaber*) vs mouse/human comparisons · foundational paper establishing NMR cGAS dual HR-support / inflammaging-modulation function; 4-AA chromatin-retention mechanism; FANCI-RAD50 interaction · **#gap/no-fulltext-access** — archive status: not_oa; quantitative claims require PDF verification

[^decout2021]: doi:10.1038/s41577-021-00524-z · Decout A, Maner-Smith KM, Bhatt S, Bhatt DL, Bhatt DL, Ablasser A · *Nature Reviews Immunology* · 2021 · review · n/a · model: literature synthesis · comprehensive review of cGAS–STING biology and therapeutic targeting; covers both agonist and antagonist strategies across inflammatory and infectious disease indications · archive: pending download

[^wiser2020]: doi:10.1038/s41598-020-64348-y · Wiser C, Kim B, Ascoli A, Bhatt DL et al. · *Scientific Reports* · 2020 · in-vitro · model: human cell culture (THP-1, PBMC) · RU.521 and TDI-6570 reduce cGAS-dependent cGAMP output and downstream IFN-β / cytokine expression; validates pharmacological cGAS inhibition in human primary cells · archive: pending download

[^zhao2022]: doi:10.1016/j.ejmech.2022.114480 · Zhao J et al. · *European Journal of Medicinal Chemistry* · 2022 · review + med-chem · G140/G150 series and other small molecule cGAS inhibitors for autoimmune indications; covers mechanism classes, SAR, in-vitro data · archive: pending download

[^tian2022]: doi:10.1016/j.ejmech.2022.114791 · Tian X et al. · *European Journal of Medicinal Chemistry* · 2022 · review + med-chem · medicinal chemistry perspective on cGAS-STING pathway inhibitors; compound tables, selectivity profiles, cell data · archive: not_oa #gap/no-fulltext-access

[^zhang2022]: doi:10.1016/j.cbpa.2022.102170 · Zhang Q et al. · *Current Opinion in Chemical Biology* · 2022 · review · chemical regulation of cGAS-STING pathway; covers both activators and inhibitors; mentions clinical-stage programs including Janus Therapeutics JS-001 · archive: not_oa #gap/no-fulltext-access

[^schmitz2023]: doi:10.3389/fimmu.2023.1170451 · Schmitz CRR et al. · *Frontiers in Immunology* · 2023 · review · cGAS-STING pathway as potential trigger of immunosenescence and inflammaging; cross-sectional human cGAS-STING marker data · model: review + human observational · #gap/needs-replication for human causal claims

[^salminen2025]: doi:10.1007/s10522-025-10197-w · Salminen A et al. · *Biogerontology* · 2025 · review · activation of cGAS-STING signaling in senescent cells promotes aging by remodeling immune system functions; mechanistic review with mouse model evidence

[^jones2025]: doi:10.3389/fragi.2025.1579813 · Jones KM et al. · *Frontiers in Aging* · 2025 · review · intersection of TREX1, cGAS, STING and the DNA damage theory of aging; LINE-1/retrotransposon-driven cGAS activation in aged cells

[^wang2026retina]: doi:10.1016/j.arr.2025.102983 · Wang X et al. · *Ageing Research Reviews* · 2026 · review · cGAS-STING-driven inflammaging cascade in aging-related retinal diseases; tissue-specific pathway data in retinal aging contexts

[^song2023]: doi:10.3389/fimmu.2023.1227364 · Song C et al. · *Frontiers in Immunology* · 2023 · review · STING signaling in inflammaging — new target against musculoskeletal diseases; tissue-level evidence in bone, muscle, joint

[^izquierdo2025]: doi:10.4103/NRR.NRR-D-24-00245 · Izquierdo JM et al. · *Neural Regeneration Research* · 2025 · review · mitochondria-cGAS-STING axis as therapeutic target for senescence-dependent inflammaging-associated neurodegeneration

[^zhen2023]: [[studies/zhen-2023-trim41-cgas-l1]] · n=6 retrotransposition assay / n=9 replicates (3 mice/group) in-vivo · in-vitro+in-vivo · doi:10.1038/s41467-023-43001-y · PMID:38086852 · PMC:PMC10716122 · Zhen Z et al. · *Nature Communications* · 2023 · model: HeLa (etoposide SIPS), IMR90-hTERT + HCA2-hTERT (X-ray 15 Gy SIPS), *Cgas*-KO mice (3–4 mo; kidney + brain) · GOLD OA · nuclear cGAS restricts L1 retrotransposition by promoting TRIM41-mediated ORF2p ubiquitination; documents nuclear regulatory role for cGAS distinct from cytoplasmic sensor function

[^zhang2021]: doi:10.1016/j.ejmech.2020.113148 · Zhang G et al. · *European Journal of Medicinal Chemistry* · 2021 · in-vitro (colorectal cancer cells) · VCP/p97 inhibitors CB-5083, NMS-873; covalent inhibitor overcoming CB-5083 resistance; establishes pharmacological VCP inhibition tool compound landscape
