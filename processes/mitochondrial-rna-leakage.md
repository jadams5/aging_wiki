---
type: process
aliases: [mtRNA-MAVS axis, cytosolic mt-dsRNA, mitochondrial dsRNA leakage, mtRNA-driven SASP]
key-proteins: ["[[mavs]]", "[[bax]]", "[[bak1]]", "[[bcl-xl]]", "[[pnpt1]]"]
pathways: ["[[rig-i-mavs-pathway]]", "[[type-i-interferon-signaling]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[cellular-senescence]]", "[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: 3
caused-by: ["[[mitochondrial-dysfunction]]", "[[bax]]/[[bak1]] miMOMP", "PNPase ([[pnpt1]]) loss", "SEC61A1-mediated permeability"]
causes: ["[[sasp]]", "[[chronic-inflammation]]", "paracrine senescence amplification", "tissue-specific aging phenotypes (cognitive decline, hepatic inflammation)"]
literature-checked-through: 2026-05-13
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Synthesis page aggregating already-verified atomic content; cross-link integrity and quantitative consistency verified against verified source pages (mavs.md, rig-i-mavs-pathway.md, type-i-interferon-signaling.md). Primary PDFs not re-read in this pass (sources verified during 2026-05-13 type-I-IFN cluster sweep). All 7 footnote DOIs confirmed against source pages. Specific numbers verified: Dhir 2018 ~90-fold IFN-β matches mavs.md; Hou 2011 ~1 ng / ~16 ng / 30 min matches rig-i-mavs-pathway.md; Seth 2005 CARD 10-77 + TM 514-535 matches mavs.md; Jiménez-Loygorri 2024 2.3 mg/kg/day i.p. × 8 weeks matches type-i-interferon-signaling.md. Victorelli 2025 aggregate counts (~5/cell vs ~0; p=0.0001) sourced from PDF-verified rig-i-mavs-pathway.md work (PDF not re-read here). 3-lab convergence attributions confirmed. cGAS-STING parallel table RNA/DNA arm assignments verified as correct. All 5 cross-reference integrations (sasp.md, cellular-senescence.md, mitochondrial-dysfunction.md, rig-i-mavs-pathway.md, mavs.md) confirmed present."
---

# Mitochondrial RNA leakage

The **mitochondrial RNA leakage axis** is a damage-associated molecular pattern (DAMP) pathway in which mitochondrial-derived double-stranded RNA (mt-dsRNA) escapes from the mitochondrial matrix into the cytoplasm, is recognized by the cytosolic RNA sensors RIG-I and MDA5, activates the OMM-tethered adaptor [[mavs]], and drives type-I interferon production and SASP amplification. **Three independent labs have converged on this mechanism** as a major driver of cellular senescence (cell-level) and inflammaging (organism-level), establishing the mtRNA arm as a mechanistic bridge from the [[mitochondrial-dysfunction]] hallmark to the [[cellular-senescence]] hallmark.

This axis is **distinct from but complementary to** the parallel mtDNA–[[cgas-sting]] arm. The two arms together establish mitochondria as a **dual-modality DAMP source** in aged cells — releasing both DNA (sensed via [[cgas]]→[[sting]]) and RNA (sensed via RIG-I/MDA5→[[mavs]]) in response to mitochondrial damage.

---

## Mechanism

### 1. Origin of cytosolic mt-dsRNA

The mitochondrial genome is transcribed bidirectionally from both heavy and light strands, generating **long complementary antisense transcripts** that anneal into long mt-dsRNA species in the mitochondrial matrix. Under physiological conditions, the matrix-localized 3′-to-5′ exoribonuclease **PNPase** (encoded by *PNPT1*) degrades these dsRNA species before they can escape; **bi-allelic loss-of-function in PNPT1** unleashes mt-dsRNA cytoplasmic accumulation and drives a type-I interferonopathy with ~90-fold IFN-β mRNA induction [^dhir2018].

### 2. Cytosolic leakage mechanisms

Two pathways permit mt-dsRNA exit from mitochondria:

- **miMOMP** (minority mitochondrial outer-membrane permeabilization) — sub-apoptotic [[bax]]/[[bak1]] pore formation during senescence; the OMM becomes selectively permeable to mtRNA without full-scale cell death. In senescent fibroblasts and FFC-diet MASH mouse hepatocytes, **BAX/BAK double-knockout abolishes cytosolic mt-dsRNA accumulation, RIG-I/MDA5 expression upregulation, MAVS aggregate formation (~5 aggregates/cell senescent vs ~0 in proliferating; p=0.0001), and SASP cytokine secretion** [^victorelli2025].
- **SEC61A1-dependent leakage** — recently described in aging brain; the SEC61 translocon contributes to mtRNA escape independently of BAX/BAK. Sec61a1 knockdown alleviates mt-dsRNA cytoplasmic accumulation and rescues cognitive aging in wild-type mice [^zhang2026].

### 3. Cytosolic RNA sensing

Cytosolic mt-dsRNA is recognized by:
- **RIG-I (DDX58)** — binds short dsRNA with 5′-triphosphate ends
- **MDA5 (IFIH1)** — binds longer dsRNA (>1 kb), particularly relevant for the long bidirectional mtRNA transcripts

In senescent cells, both sensors are transcriptionally upregulated, and RNA-immunoprecipitation experiments confirm direct binding of RIG-I and MDA5 to mtRNA species [^victorelli2025].

### 4. MAVS signalosome assembly and downstream signaling

RIG-I/MDA5 CARD-CARD interaction with [[mavs]] on the outer mitochondrial membrane triggers MAVS **prion-like polymerization** into amyloid-like fibrils (~1 ng activated MAVS converts ~16 ng endogenous MAVS into aggregates in 30 min) [^hou2011]. The activated signalosome recruits TBK1/IKKε, which phosphorylate [[irf3]]/[[irf7]] → IFN-α/β transcription. A parallel arm drives NF-κB → pro-inflammatory cytokine transcription (IL-6, IL-8, CXCL chemokines) that constitutes the SASP secretome [^seth2005]. Full signaling architecture on the [[rig-i-mavs-pathway]] page.

---

## Independent confirmations — 3-lab convergence (2024–2026)

| Paper | Lab | Model system | Key result |
|---|---|---|---|
| **Victorelli et al. 2025** *Nat Commun* | Passos (Newcastle/Mayo) | IR- and replicatively-senescent MRC5 + IMR90 fibroblasts; FFC-diet MASH mouse with hepatocyte-specific *Bax/Bak* dKO | BAX/BAK dKO abolishes cytosolic mtRNA, RIG-I/MDA5 upregulation, MAVS aggregates, and SASP. STING inhibition > MAVS knockdown for SASP reduction in this model |
| **López-Polo et al. 2024** *Nat Commun* | Serrano (CNIO/IRB Barcelona) | Senescent human fibroblasts | mt-dsRNA accumulation drives senescent-cell SASP via cytosolic RNA sensing; independent replication of the core mechanism [^lopez-polo2024] |
| **Zhang et al. 2026** *Cell Research* | Beijing (multi-institutional) | Naturally aging C57BL/6 mouse brain; 5xFAD AD mouse model; human AD brain tissue | SEC61A1-mediated mtRNA leakage → MAVS → neuroinflammation → cognitive decline (without motor deficit); *Sec61a1* or *Mavs* knockdown rescues cognitive aging in WT mice [^zhang2026] |

The convergence across **3 labs, 2 disease contexts (MASH + AD/cognitive aging), and 3 organ systems (liver, brain, cellular fibroblasts)** establishes the mt-dsRNA-MAVS-SASP axis as a robust, reproducible aging mechanism.

---

## Relationship to the parallel cGAS-STING (mtDNA) arm

The mtRNA-MAVS axis is **mechanistically parallel** to the better-characterized mtDNA–cGAS–STING axis:

| Feature | mtRNA arm *(this page)* | mtDNA arm *([[cgas-sting]])* |
|---|---|---|
| DAMP species | mt-dsRNA | cytosolic mtDNA fragments |
| Sensors | RIG-I (DDX58), MDA5 (IFIH1) | [[cgas]] |
| Adaptor | [[mavs]] (OMM-tethered) | [[sting]] (ER-tethered) |
| Downstream kinase | TBK1, IKKε | TBK1 (predominantly) |
| Effector TFs | IRF3, IRF7, NF-κB | IRF3, NF-κB |
| Output | IFN-α/β, SASP cytokines | IFN-β, SASP cytokines |
| Leakage mechanism | BAX/BAK miMOMP; SEC61A1 | BAX/BAK miMOMP; mitochondrial permeability transition |

Victorelli 2025 directly compared the two arms in their MASH model and found **STING inhibition reduces SASP more than MAVS knockdown** — the cGAS-STING (DNA) arm appears dominant in their system. However, the two arms are **not redundant**: each responds to a different DAMP species, and the relative dominance likely varies by tissue and damage modality. In Zhang 2026's aging-brain context, the MAVS arm appears load-bearing for the cognitive phenotype, suggesting tissue-specific arm dominance.

---

## Aging-context significance

This axis provides a **mechanistic bridge** for the long-observed correlation between mitochondrial dysfunction and cellular senescence (López-Otín hallmark co-occurrence). The causal chain:

1. **Mitochondrial damage** (oxidative stress, mtDNA mutations, electron transport chain decline) → [[bax]]/[[bak1]] miMOMP or SEC61A1-mediated permeability
2. **mtRNA + mtDNA leakage** into cytoplasm
3. **RIG-I/MDA5 (RNA arm) + [[cgas]] (DNA arm)** sensor engagement
4. **[[mavs]] + [[sting]] signalosomes** drive IFN + NF-κB
5. **SASP amplification** → paracrine senescence + tissue inflammation

The axis connects multiple hallmarks:
- [[mitochondrial-dysfunction]] — provides the proximal damage signal
- [[cellular-senescence]] — provides the SASP amplification loop
- [[chronic-inflammation]] — provides the organism-level inflammaging output
- [[disabled-macroautophagy]] — failed [[mitophagy]] clearance leaves the leakage source intact (Jiménez-Loygorri 2024 ties mitophagy preservation to type-I IFN suppression in aged retina, supporting this upstream framing) [^jimenez2024]

---

## Therapeutic angles

| Intervention class | Mechanism | Aging-context tractability |
|---|---|---|
| **BAX/BAK inhibitors** | Block miMOMP-mediated mtRNA leakage | Broadly toxic — BAX/BAK required for canonical apoptosis; selective subapoptotic blockade not yet achieved clinically. #gap/translation-blocked-safety |
| **PNPT1/PNPase augmentation** | Enhance matrix mt-dsRNA degradation | Untested; Dhir 2018 establishes PNPase loss as causal in monogenic disease (proof-of-principle) but no augmentation strategy exists. #gap/preclinical-only |
| **RIG-I/MDA5 antagonists** | Block cytosolic RNA sensing | Tool compounds exist; no clinically advanced antagonist (most RIG-I pharmacology has pursued agonism for antiviral/oncology indications). #gap/preclinical-only |
| **MAVS inhibitors** | Block adaptor signalosome assembly | No clinical inhibitor; CARD-domain oligomerization is challenging to drug. Tier 4 directly; modulated indirectly via TBK1/IKKε. |
| **TBK1/IKKε inhibitors** | Block downstream IFN production | [[amlexanox]] (FDA-approved 1997 + Phase 2 T2D primary HbA1c endpoint hit, Oral 2017) — the **only clinically advanced node** in this axis. Shared with the cGAS-STING arm. |
| **JAK inhibitors** | Block downstream IFN-α/β signaling | [[jak1]] inhibitors (ruxolitinib, baricitinib) suppress SASP in aged mice (Xu 2015) — tier-1 aging-context pharmacology. |
| **Senolytics** | Eliminate senescent cells generating the damage signal | [[bcl-xl]]-targeting (navitoclax) addresses downstream rather than the mtRNA axis directly. |

The mtRNA arm is currently **less clinically tractable** than the cGAS-STING arm (where STING antagonists are advancing for autoimmune indications), but the **TBK1/IKKε bottleneck** offers a shared pharmacological handle pointing back to [[amlexanox]].

---

## Knowledge gaps

- **Human in-vivo evidence is limited** — most data are from cellular models or mouse tissue. Human cohort evidence for the mtRNA arm specifically (vs the cGAS-STING arm, which has multiple human cohort signals) is sparse. #gap/needs-human-replication
- **Tissue-context dominance** — Victorelli 2025 (MASH model) shows cGAS-STING > MAVS for SASP; Zhang 2026 (aging brain) shows MAVS is load-bearing for cognitive phenotype. Which tissues default to which arm, and what determines the balance, is unresolved. #gap/dose-response-unclear
- **Quantification of mtRNA species** — the exact mtRNA species (anti-light-strand transcripts, mature processed mt-mRNAs, ncRNAs) that escape and activate RIG-I/MDA5 are not fully characterized. Dhir 2018 implicates long bidirectional transcripts; whether shorter mtRNA species also contribute is unclear. #gap/no-mechanism
- **Intervention tractability** — BAX/BAK inhibition is broadly toxic; PNPase augmentation is untested; direct RIG-I/MDA5/MAVS antagonists are not clinically advanced. The shared TBK1/IKKε bottleneck ([[amlexanox]]) is the most tractable handle. #gap/long-term-unknown
- **Integration with mitophagy** — mitophagy clearance of damaged mitochondria should prevent the leakage substrate, but the quantitative coupling between mitophagy efficiency and mtRNA arm activity is not fully mapped. Jiménez-Loygorri 2024 establishes the link in aged retina via type-I IFN suppression. #gap/no-mechanism

---

## Cross-references

- **Upstream hallmark**: [[mitochondrial-dysfunction]]
- **Downstream hallmarks**: [[cellular-senescence]], [[chronic-inflammation]]
- **Downstream effector**: [[sasp]]
- **Canonical signaling pathway**: [[rig-i-mavs-pathway]] (RNA arm); [[cgas-sting]] (parallel DNA arm); [[type-i-interferon-signaling]] (downstream IFN integrator)
- **Adaptor protein**: [[mavs]]
- **Related processes**: [[mtdna-heteroplasmy]] (parallel mtDNA damage axis); [[mitophagy]] (quality-control pathway)
- **Pharmacological handle**: [[amlexanox]] (TBK1/IKKε inhibitor shared with cGAS-STING arm); [[jak1]] (downstream IFN signaling)
- **Effector proteins**: [[bax]], [[bak1]], [[bcl-xl]], [[pnpt1]], [[irf3]], [[irf7]]

---

## Footnotes

[^dhir2018]: doi:10.1038/s41586-018-0363-0 · Dhir A et al. · *Nature* 2018 · in-vivo (human + mouse) · model: primary fibroblasts from 4 PNPT1-mutation patients + hepatocyte-specific PNPase KO mice · ~90-fold IFN-β mRNA induction upon PNPase depletion; PNPase-depleted cells show cytoplasmic dsRNA distribution; MDA5 (not RIG-I) is primary sensor; MAVS knockdown abrogates IFN-β induction; classified as type I interferonopathy · PDF locally available · verified 2026-05-13 (MAVS protein page verification pass)

[^victorelli2025]: doi:10.1038/s41467-025-66159-z · Victorelli S et al. · *Nat Commun* 2025 · PMID 41398033 · in-vitro + in-vivo · model: IR- and replicatively-senescent MRC5/IMR90 fibroblasts; FFC-diet MASH mouse with hepatocyte-specific *Bax/Bak* dKO · cytosolic mtRNA accumulation, RIG-I/MDA5 upregulation, MAVS aggregates (~5 vs ~0 per cell; p=0.0001), and SASP all abolished by BAX/BAK dKO; STING inhibition > MAVS knockdown for SASP reduction · gold OA; PDF locally available · verified 2026-05-13 (RIG-I/MAVS pathway verification pass)

[^lopez-polo2024]: doi:10.1038/s41467-024-51363-0 · López-Polo V et al. · *Nat Commun* 2024 · in-vitro · model: senescent human fibroblasts (Serrano lab) · independent replication: mt-dsRNA accumulation drives senescent-cell SASP via cytosolic RNA sensing; consistent with Victorelli 2025 mechanism

[^zhang2026]: doi:10.1038/s41422-026-01224-w · Zhang [et al.] · *Cell Research* 2026 · PMID 41692872; PMC13092635 (OA release 2027-05-01) · in-vivo · model: naturally aging C57BL/6 mouse brain + 5xFAD AD mice + human AD brain tissue · SEC61A1-mediated mtRNA leakage → MAVS → neuroinflammation → cognitive decline (no motor deficit); *Sec61a1* or *Mavs* knockdown rescues cognitive aging in WT mice · abstract verified 2026-05-13 via PubMed efetch (full PDF not yet OA)

[^hou2011]: doi:10.1016/j.cell.2011.06.041 · Hou F et al. · *Cell* 2011 · in-vitro · MAVS prion-like polymerization on OMM; K63-Ub4 requirement; ~1 ng PK-MAVS converts ~16 ng endogenous MAVS in 30 min · PDF locally available · verified 2026-05-13

[^seth2005]: doi:10.1016/j.cell.2005.08.012 · Seth RB, Sun L, Ea CK, Chen ZJ · *Cell* 2005 · in-vitro + in-vivo · MAVS discovery paper; CARD domain (10–77); TM domain (514–535) OMM-essential for signaling; NF-κB + IRF3 + IRF7 activation · PDF locally available · verified 2026-05-13

[^jimenez2024]: doi:10.1038/s41467-024-45044-1 · Jiménez-Loygorri JI et al. · *Nat Commun* 2024 · in-vivo · urolithin A 2.3 mg/kg/day i.p. × 8 weeks in aged mice; mitophagy preservation suppresses type-I IFN signaling in aged retina · PDF locally available · verified 2026-05-13 (type-I-IFN pathway verification pass)
