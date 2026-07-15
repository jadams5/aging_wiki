---
type: pathway
aliases: [BDNF-TrkB pathway, NTRK2 signaling, TrkB axis, BDNF receptor pathway]
kegg: hsa04722
reactome: R-HSA-9006115
wikipathways: null
key-nodes:
  - "[[ntrk2|NTRK2 (TrkB)]]"
  - "[[bdnf]]"
  - "[[creb|CREB]]"
  - "[[ras-mapk|MAPK-ERK1/2]]"
  - "[[pi3k-akt-pathway|PI3K-AKT]]"
upstream:
  - "[[neurotrophin-signaling]]"
downstream:
  - "[[synaptic-plasticity]]"
  - "[[ltp-induction]]"
  - "[[hippocampal-neurogenesis]]"
hallmarks:
  - "[[loss-of-proteostasis]]"
  - "[[altered-intercellular-communication]]"
  - "[[stem-cell-exhaustion]]"
sens-categories: []
druggability-tier: 2
caused-by:
  - "[[neurotrophin-signaling]]"
  - "[[bdnf]]"
causes:
  - "[[synaptic-plasticity]]"
  - "[[ltp-induction]]"
  - "[[hippocampal-neurogenesis]]"
  - "[[autophagy]]"
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Jang 2010 (doi:10.1073/pnas.0913572107) and Reichardt 2006 (doi:10.1098/rstb.2006.1894) verified against local PDFs. Webster 2006 and Minichiello 2009 are closed-access (not_oa) — claims derived from those sources tagged #gap/no-fulltext-access and remain unverified. NTRK2 phosphotyrosine site numbering cross-checked against UniProt Q16620 (human) and P15209 (rat); rat-convention numbering documented in body. Reactome R-HSA-9006115 and KEGG hsa04722 IDs confirmed."
---

> Partially verified 2026-05-09. Jang 2010 (PMC2823863) and Reichardt 2006 (PMC1664664) verified against local PDFs. Webster 2006 and Minichiello 2009 are closed-access (not_oa) — claims derived from those sources are unverified against full text and carry #gap/no-fulltext-access tags. See verified-scope in frontmatter.

# TrkB receptor pathway (BDNF-NTRK2 signaling)

The **TrkB pathway** (BDNF → NTRK2/TrkB → MAPK/PI3K/PLC-γ → CREB) is the dominant neurotrophin-signaling axis for aging-relevant brain biology. It mediates synaptic plasticity, adult hippocampal neurogenesis, cognitive resilience, and neuronal survival. Activation depends on [[bdnf|BDNF]] or NT-4/5 binding to the full-length TrkB receptor (TrkB.FL), triggering autophosphorylation and recruitment of three parallel effector arms. A key aging vulnerability is the isoform shift from signaling-competent TrkB.FL toward the dominant-negative truncated isoform TrkB.T1, which blunts BDNF responsiveness in the aged brain. This page covers the TrkB sub-pathway specifically; for pan-neurotrophin biology (TrkA/B/C + p75NTR + NGF/NT-3/NT-4/5), see [[neurotrophin-signaling]].

> **Naming note:** `[[trkb-pathway]]` is the canonical wikilink for this page. The NTRK2 kinase as an individual protein page (when seeded) will live at `molecules/proteins/ntrk2.md` to avoid ambiguity, as established by the pathway/protein naming convention in CLAUDE.md.

---

## Receptor isoforms: TrkB.FL vs TrkB.T1

NTRK2 pre-mRNA is alternatively spliced to produce two major protein isoforms with opposing functional roles:

| Feature | TrkB.FL (full-length) | TrkB.T1 (truncated) |
|---|---|---|
| Kinase domain | Present (catalytically active) | Absent |
| Autophosphorylation | Y515, Y705, Y706, Y816 (rat numbering; human UniProt Q16620: Y516, Y702/Y706/Y707, Y817) | None |
| Downstream signaling | Ras-MAPK, PI3K-Akt, PLC-γ | None (scaffold/dominant-negative) |
| BDNF binding | Yes | Yes |
| Primary function | Signaling transduction | Inhibits productive dimerization with TrkB.FL (dominant-negative); can also modulate BDNF availability via competitive binding [^reichardt2006] |
| Aging change | Decreases relative to T1 | Increases relative to FL |
| Predominant cell type | Neurons (postsynaptic) | Astrocytes; neurons (variable) |

The ratio TrkB.FL:TrkB.T1 declines with age in human hippocampus and temporal cortex [^webster2006]. In aged brain, T1 dominance effectively attenuates BDNF responsiveness even when BDNF ligand is present — a form of signaling-competence loss without ligand deficit. #gap/needs-replication — the Webster 2006 finding is from postmortem human tissue; prospective or longitudinal quantification of the FL:T1 ratio in living aging humans is lacking.

---

## Activation mechanism

BDNF and NT-4/5 bind TrkB.FL extracellular domains, inducing receptor dimerization and transautophosphorylation at four key tyrosines [^reichardt2006]:

- **Y515** (Shc-binding site; juxtamembrane; human Q16620: Y516) → recruits Shc → Grb2 → Sos → Ras activation → MAPK-ERK arm
- **Y705/Y706** (activation loop; human Q16620: Y706/Y707) → kinase activation; required for all downstream signaling. Note: UniProt P15209 annotates a third activation-loop phosphotyrosine at rat Y701 (human Y702); functional distinction from Y705/Y706 pair not addressed in Reichardt 2006.
- **Y816** (PLC-γ1-binding site; C-terminal tail; human Q16620: Y817) → recruits PLC-γ1 → DAG + IP3 arm

Throughout this page, Y-site numbers follow rat NTRK2 (UniProt P15209) convention, which is standard in the experimental TrkB/LTP literature (Minichiello 2009; Jang 2010). Human NTRK2 (UniProt Q16620) positions are 1 higher at each site due to a signal peptide length difference.

FRS2 (FGF receptor substrate 2) also binds Y515-phosphorylated TrkB.FL to contribute to PI3K recruitment. The phosphotyrosine sites are shared architecture across all Trk receptors (TrkA/B/C); specificity is conferred by ligand (BDNF/NT-4 → TrkB vs NGF → TrkA) and by downstream adapter competition.

---

## Three effector arms

### Arm 1: Ras-MAPK-ERK1/2 → CREB → gene expression

Shc (via Y515) → Grb2-Sos complex → Ras-GTP → Raf-MEK1/2 → ERK1/2 phosphorylation → nuclear translocation → **CREB** (Ser133 phosphorylation by RSK2/MSK1) → CRE-element transcription [^minichiello2009].

Key transcriptional outputs:
- *Bdnf* autoregulation (exon-IV-driven transcription) — positive feedback loop
- *Arc/Arg3.1* — immediate-early gene, required for LTP consolidation
- *Fos, Zif268* — activity-dependent plasticity genes
- Pro-survival genes (*Bcl-2*)

This arm is required for long-term potentiation (LTP) induction and associative memory formation. Genetic disruption of TrkB.FL Y515 (Y515F knock-in mice) impairs hippocampus-dependent contextual fear conditioning [^minichiello2009].

### Arm 2: PI3K-AKT-mTOR → protein synthesis, anti-apoptosis, dendritic remodeling

FRS2/Gab1 (via Y515/Y705) → PI3K catalytic subunit (p110) → PIP3 → PDK1 → **AKT** (Ser473/Thr308 phosphorylation) → multiple outputs:

- mTORC1 activation (via TSC1/TSC2 inhibition) → ribosome biogenesis, dendritic protein synthesis → structural LTP
- BAD phosphorylation (Ser136) → dissociation from BCL-2 → **neuronal survival**
- FOXO3a nuclear exclusion → reduced pro-apoptotic gene expression
- GSK3β inhibition → microtubule dynamics, dendritic spine remodeling

This arm connects to [[pi3k-akt-pathway]] and [[mtor]] — see those pages for canonical mechanistic detail. In the aging context, reduced TrkB-driven AKT activation is proposed to contribute to decreased anti-apoptotic tone in aged hippocampal neurons and reduced capacity for structural synaptic plasticity. #gap/needs-human-replication

### Arm 3: PLC-γ-DAG-PKC / IP3-Ca²⁺ → CaMKII → LTP induction

PLC-γ1 (via Y816) → cleaves PIP2 into:
- **DAG** → PKC activation → CaMKII → AMPAR trafficking to synapse → LTP expression
- **IP3** → ER Ca²⁺ release → Ca²⁺/CaM-CaMKII activation → AMPAR phosphorylation (GluA1 Ser831) → LTP

Disrupting TrkB.FL Y816 (Y816F knock-in) blunts hippocampal LTP and spatial memory without abolishing neuronal survival, demonstrating selective dependence on Arm 3 for synaptic modification independent of Arm 2 [^minichiello2009]. #gap/needs-replication — Y816F result is from mice; human relevance not directly established.

The three-arm summary:

| Arm | Proximal adapter | Key effector | Aging-relevant output |
|---|---|---|---|
| Ras-MAPK-ERK | Shc/Grb2 | CREB | Gene expression for plasticity, Bdnf autoregulation |
| PI3K-AKT-mTOR | FRS2/Gab1 | AKT, mTOR | Neuronal survival, dendritic protein synthesis |
| PLC-γ-IP3/DAG | PLC-γ1 | CaMKII, PKC | LTP expression, AMPAR trafficking |

---

## Role in aging

### Hippocampal decline and memory

BDNF-TrkB signaling supports adult hippocampal neurogenesis (subgranular zone, dentate gyrus). Neurogenesis declines with aging; reduced TrkB.FL activation is one proposed mechanism [^reichardt2006]. Correlative: hippocampal BDNF and TrkB.FL mRNA decrease across the human lifespan in temporal cortex (neonatal peak → age-related decline in TK+ isoform), while TrkB TK- (T1) remains more stable [^webster2006]. This isoform rebalancing toward T1 limits the effective signaling output per unit of BDNF ligand.

**Cognitive aging:** Aged rodents with impaired spatial memory show reduced phospho-TrkB (pY705) in hippocampus, and pharmacological TrkB activation (7,8-DHF) rescues spatial memory and synaptic plasticity in cognitively impaired aged rats [^zeng2012jnc]. #gap/needs-human-replication — rodent-to-human extrapolation is plausible but not directly tested.

### Alzheimer's disease

Postmortem cortex from AD patients shows reduced TrkB.FL protein relative to age-matched controls. Reduced TrkB activation is proposed to contribute to deficient CREB-driven neuroprotective gene expression in AD neurons. Whether this is causal or secondary to neurodegeneration is not established. #gap/contradictory-evidence — some studies report BDNF reduction as primary; others argue TrkB downstream signaling failure is the key node.

---

## Downstream processes

- **[[synaptic-plasticity]]** — CREB-driven gene expression (Arm 1) + AMPAR trafficking (Arm 3) together constitute the molecular basis of LTP; TrkB is required for late-phase LTP (L-LTP) consolidation.
- **[[ltp-induction]]** — Arm 3 (PLC-γ-CaMKII) directly gates AMPAR insertion at potentiated synapses.
- **[[hippocampal-neurogenesis]]** — TrkB signaling on progenitor cells promotes survival and differentiation of newborn dentate granule neurons.

---

## Pharmacology (aging-context)

| Agent | Class | Target | Status | Notes |
|---|---|---|---|---|
| 7,8-dihydroxyflavone (7,8-DHF) | Small-molecule TrkB agonist | TrkB.FL | Preclinical | BBB-penetrant; oral; activates TrkB via extracellular domain (CC-2 domain), not kinase; Kd ≈ 320 nM [^jang2010]; rescues memory in aged rodents [^zeng2012jnc] |
| LM22A-4 | Small-molecule TrkB partial agonist | TrkB.FL (loop 2 domain) | Preclinical | Lower potency than 7,8-DHF; neuroprotective in TBI mouse models [^lm22a4] |
| ACD855/ACD856 | Positive allosteric modulator (PAM) | TrkA + TrkB | Preclinical | Increased hippocampal ACh ~40%, restored age-induced cognitive deficit in 18-month mice in one study [^dahlstrom2021]; #gap/needs-replication |

**Druggability-tier: 2.** No FDA-approved TrkB agonist exists for any aging-related indication. 7,8-DHF and LM22A-4 are high-quality preclinical probes; their aging-context clinical stage is preclinical. Full drug-level data lives on the individual compound pages.

**Cross-references:**
- [[semax]] — claims BDNF→TrkB axis activation per Russian primary literature; mechanism partially overlapping
- [[dihexa]] — **does NOT primarily signal via TrkB**; earlier reports of c-Met-linked mechanism are in the literature; verify current consensus on [[dihexa]] page before drawing mechanistic parallels to TrkB

---

## Relationship to parent pathway

[[neurotrophin-signaling]] covers the full four-neurotrophin, three-Trk + p75NTR landscape. The TrkB pathway is the largest single sub-pathway by aging-literature volume, warranting its own atomic page. Key distinctions from TrkA (NGF) and TrkC (NT-3): TrkB is the only Trk receptor prominently expressed by pyramidal neurons in hippocampus and cortex; TrkA is primarily expressed by cholinergic basal forebrain neurons (relevant to AD via septal-hippocampal projection); TrkC is enriched in proprioceptors and cerebellum. For the shared upstream signaling architecture (shared adapter binding, shared Ras-MAPK/PI3K/PLC-γ arms), see [[neurotrophin-signaling]].

---

## Limitations and gaps

- **TrkB.FL:T1 isoform ratio in aging** — Webster 2006 is cross-sectional postmortem human data; no longitudinal quantification exists. The ratio likely varies by brain region and cell type (neuronal vs astrocytic T1). #gap/needs-replication
- **Human trial absence** — No clinical trial has specifically targeted TrkB signaling for cognitive aging in healthy humans. 7,8-DHF is the most advanced probe but has not entered Phase 1 for aging. #gap/needs-human-replication
- **Arm-specific contributions to aging pathology** — Which of the three effector arms is the primary bottleneck in aged brain (MAPK-CREB vs PI3K-AKT vs PLC-γ-CaMKII) is not established in humans. #gap/no-mechanism
- **BDNF vs TrkB.FL availability** — In aged brain, BDNF ligand levels also decline; distinguishing a receptor-level (TrkB.FL:T1 ratio) from ligand-level (reduced BDNF secretion) bottleneck is methodologically difficult in postmortem samples. #gap/contradictory-evidence
- **WikiPathways ID** — A dedicated WikiPathways entry for TrkB-specific signaling in humans was not confirmed at time of seeding. #gap/needs-canonical-id

---

## Footnotes

[^reichardt2006]: doi:10.1098/rstb.2006.1894 · Reichardt LF · *Phil Trans R Soc B* 2006 · review · n=N/A · model: review of vertebrate neurotrophins · 2,137 citations · verified against local PDF (PMC1664664)

[^minichiello2009]: doi:10.1038/nrn2738 · Minichiello L · *Nat Rev Neurosci* 2009 · review · n=N/A · model: mouse knock-in genetics + review · 1,020 citations · not_oa (closed access; unverified locally) #gap/no-fulltext-access — Y515F/Y816F knock-in phenotypes and arm-specific LTP/memory claims derived from this source could not be verified against full text

[^webster2006]: doi:10.1016/j.modgep.2006.03.009 · Webster MJ, Herman MM, Kleinman JE, Shannon Weickert C · *Gene Expression Patterns* 2006 · observational · n=postmortem human tissue series (hippocampus + temporal cortex) · model: human lifespan postmortem · 215 citations · not_oa (unverified locally) #gap/no-fulltext-access — TrkB.FL:T1 ratio aging shift, specific n, and age-range are unverified against full text; TrkB TK+ mRNA declines with age; TrkB TK- (T1) more stable across lifespan in temporal cortex

[^jang2010]: doi:10.1073/pnas.0913572107 · Jang SW, Liu X, Yepes M, Shepherd KR, Miller GW, Liu Y, Wilson WD, Xiao G, Blanchi B, Sun YE, Ye K · *PNAS* 2010 · in-vivo + in-vitro · n=4–12 mice/group · model: mouse only (TrkB F616A knockin + C57BL/6; no aging arm) · 661 citations · verified against local PDF (PMC2823863) — identifies 7,8-DHF as selective TrkB agonist (activates TrkB but not TrkA or TrkC); BBB-penetrant i.p. 5 mg/kg; binds TrkB ECD CC-2 domain; Kd ≈ 320 nM; neuroprotective in KA, MCAO stroke, and MPTP-PD models in mice

[^zeng2012jnc]: doi:10.1111/j.1471-4159.2012.07882.x · Zeng Y, Lv F, Li L, Yu H, Dong M, Fu Q · *J Neurochem* 2012 · in-vivo · n=aged rats · model: aged Wistar rat · rescues spatial memory + synaptic plasticity with 7,8-DHF in cognitively impaired aged rats · not_oa (unverified locally)

[^lm22a4]: doi:10.1016/j.expneurol.2021.113652 · Fletcher JL et al. · *Exp Neurol* 2021 · in-vivo · n=mouse TBI model · model: Mus musculus · 56 citations · not_oa (closed access) — LM22A-4 neuroprotective in pediatric TBI; aging efficacy not directly tested

[^dahlstrom2021]: doi:10.3390/cells10112834 · Dahlström M et al. · *Cells* 2021 · in-vivo · n=18-month mice · model: aged Mus musculus · ACD855/ACD856 PAMs restore cognition; single study; #gap/needs-replication
