---
type: protein
aliases: [HMG-1, HMG1, high mobility group box 1, high mobility group protein 1, amphoterin]
uniprot: P09429
ncbi-gene: 3146
hgnc: 4983
ensembl: ENSG00000189403
mouse-ortholog: Hmgb1
pathways: ["[[nf-kb]]", "[[jak-stat-pathway]]", "[[cgas-sting]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 2
caused-by: []
causes: ["[[sasp]]", "[[chronic-inflammation]]", "[[cellular-senescence]]"]
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Shin 2025 PDF fully verified end-to-end (see [[shin-2025-rehmgb1-paracrine-senescence]] for the corrections log). Canonical-DB identifiers (UniProt P09429, HGNC 4983, NCBI Gene 3146, Ensembl ENSG00000204305) confirmed by UniProt API query 2026-05-20. Redox-biology framing draws on Venereau 2012 + Zandarashvili 2013 + Yang/Antoine literature — Shin 2025 reference list cross-checked but those upstream papers not yet PDF-verified locally (#gap/needs-replication on Lotze 2005, Davalos 2013, Schiraldi 2012 — not yet seeded as study pages). Druggability content (azeliragon, glycyrrhizin, anti-HMGB1 mAbs, recombinant thrombomodulin) is canonical pharmacology; not PDF-verified against primary trial sources."
---

# HMGB1 — High Mobility Group Box 1

A 215-aa nuclear architectural protein that doubles as a quintessential **damage-associated molecular pattern (DAMP)** when released into the extracellular space. Inside the nucleus, HMGB1 binds DNA in a sequence-nonspecific, structure-dependent manner via two HMG-box domains, bending DNA and facilitating chromatin remodeling, transcription, DNA repair, and V(D)J recombination. Outside the cell, HMGB1 is one of the most studied DAMPs in immunology and inflammation biology — released passively from necrotic/pyroptotic cells and actively secreted (via inflammasome activation, JAK/STAT signaling, or hyperacetylation-dependent nucleocytoplasmic shuttling) by activated immune cells, senescent cells, and stressed tissues. Listed as a canonical SASP factor [^coppe2008] and a primary contributor to "sterile inflammation" / inflammaging.

The aging-relevant biology hinges on three redox-sensitive cysteines (C23, C45, C106) that determine **which extracellular activity HMGB1 displays** (Venereau 2012; Yang/Antoine; Schiraldi 2012):

| Redox state | Cysteine configuration | Receptor / activity |
|---|---|---|
| **Fully reduced (ReHMGB1)** | C23, C45, C106 all -SH | Chemoattractant via CXCR4 (HMGB1·CXCL12 heterocomplex; Schiraldi 2012); **senescence propagation via [[rage]] → JAK/STAT + PI3K-AKT/NF-κB** (per [[shin-2025-rehmgb1-paracrine-senescence]]) |
| **Disulfide (DsHMGB1)** | C23–C45 intramolecular disulfide; C106 -SH | Pro-inflammatory cytokine inducer via TLR4 (canonical macrophage activation; Venereau 2012) |
| **Sulfonyl (OxHMGB1)** | All three cysteines oxidized to -SO₃H | Inactive — fails to induce senescence (Shin 2025 Fig 2: SA-β-gal, EdU, p21 all non-significant vs PBS at 20 μg/mL) and fails to activate immune cells |

Because the cysteine oxidation states equilibrate with extracellular redox conditions, HMGB1's biological activity is **not a fixed property** — it is gated by the redox environment. **Serum half-life of reduced HMGB1 is ~17 min** (Zandarashvili 2013 NMR spectroscopy in extracellular fluids; Shin 2025 ref [58]), meaning extracellular ReHMGB1 must engage receptors within a narrow active window before oxidative inactivation. Therapeutic strategies cannot stabilize ReHMGB1 in vivo — interventions must instead target downstream RAGE/JAK signaling or sequester all HMGB1 forms regardless of redox state.

**Aged human serum carries elevated ReHMGB1.** Shin 2025 Supp Fig 6 demonstrated that in human serum, older (70–80 yr) individuals have significantly elevated reduced HMGB1 compared to younger (~40 yr) individuals, while total HMGB1 trended up but was non-significant. The parallel finding in 24-mo C57BL/6 mice (Supp Fig 5): both total and reduced HMGB1 elevated in aged serum. This positions **redox-form-specific HMGB1 measurement** as a candidate plasma biomarker of inflammaging tempo, orthogonal to bulk total-HMGB1.

---

## Aging-relevant roles

### As a SASP factor

HMGB1 is constitutively released from senescent cells as part of the senescence-associated secretome [^coppe2008] (HMGB1 listed in the original Coppé 2008 SASP characterization — see [[sasp]]). Davalos et al. 2013 mapped HMGB1 as a key SASP factor that is **lost from the senescent nucleus** and accumulates in the extracellular space, contributing to NF-κB activation in surrounding cells. #gap/needs-replication (Davalos 2013 not yet seeded as a study page on this wiki).

### As a senescence propagator (Shin 2025)

[[shin-2025-rehmgb1-paracrine-senescence]] establishes that **only the reduced redox form (ReHMGB1) propagates senescence to bystander cells**, acting via [[rage]] → [[jak-stat-pathway]] (specifically JAK2 → STAT1) + PI3K-AKT/[[nf-kb]] → SASP gene expression + cell-cycle arrest. Key specifics from the paper:

- **In vitro (20 μg/mL × 72 h)**: ReHMGB1 induces senescence-like phenotypes in WI-38, BJ foreskin, primary renal epithelial, and human skeletal-muscle (HSKM) cells (Supp Fig 3). OxHMGB1 inert across all four cell types.
- **Transcriptomically**: ReHMGB1 produces 1,087 DEGs that closely resemble IR-induced primary senescence (GSE13027 dataset); OxHMGB1 produces a divergent profile enriched for interferon response rather than senescence. p15^INK4b^ (CDKN2B) — a bystander senescence marker — is specifically upregulated by ReHMGB1.
- **In vivo (3-mo C57BL/6J, single IV 5 mg/kg, 7 dpt)**: systemic ReHMGB1 elevates serum IL-6 + IL-1β (TNF-α ns) and induces *p21* upregulation in gastrocnemius, tibialis anterior, and liver (heart + kidney trend up but ns). p16+/p21+ dual-positive cells increase in TA myofibers (p < 0.001); HMGB1+ myonuclei decrease (p < 0.01) — consistent with nuclear-to-extracellular HMGB1 export.
- **Pharmacological rescue**: FPS-ZM1 (100 nM RAGE antagonist) and Momelotinib (0.3 μM JAK2 inhibitor — FDA-approved for myelofibrosis) both abrogate ReHMGB1-induced senescence in WI-38, confirming RAGE → JAK2 → STAT1 is functionally necessary.
- **Therapeutic blockade (15-mo C57BL/6J, BaCl₂ TA injury model)**: single IV dose of anti-HMGB1 mAb clone 3E8 (BioLegend 651402) at 0.1 mg/kg on Day −1 reduces senescent-cell burden, increases MyoD+ myogenic progenitor recruitment, partially restores myofiber CSA, and **fully restores grip strength to uninjured levels** (rotarod + treadmill also improved). The mAb is **not isoform-specific** — it targets all HMGB1 redox forms; the paper notes isoform-selective tools are an outstanding need.

Conboy MJ + IM are co-authors on the paper, reflecting the conceptual lineage from heterochronic-parabiosis biology (Conboy 2005, Rebo 2016) to Jeon's single-blood-exchange senescence-transfer paper (Jeon 2022 Nat Metab) to this redox-form-resolved propagator identification.

### As an NLRP3-inflammasome–coupled DAMP

[[pyroptosis|Pyroptotic]] cell death releases HMGB1 along with IL-1β and IL-18 (see hallmarks/chronic-inflammation.md and [[gsdmd]]). Released HMGB1 then signals through TLR4 (disulfide form) and RAGE (reduced form) on neighboring cells, amplifying [[chronic-inflammation|inflammaging]]. The HMGB1 → RAGE → NF-κB loop is a positive-feedback amplifier on top of the IL-1β/NF-κB loop already operating in aged tissue.

### As a substrate for sirtuin / acetyltransferase regulation

HMGB1 nuclear retention vs. cytoplasmic release is regulated by lysine acetylation (hyperacetylation drives release) and deacetylation (SIRT1-mediated deacetylation retains HMGB1 in the nucleus). #gap/needs-replication (the SIRT1-HMGB1 link is implied by sirtuin-loss-of-function studies but the primary-source mapping has not been added to this wiki — links to [[sirt1]] should be developed when this evidence is seeded).

---

## Receptors

- **[[rage]]** (AGER) — primary receptor for the reduced (ReHMGB1) form per Shin 2025; also receives [[advanced-glycation-end-products|AGEs]] and S100 proteins, making RAGE a multi-DAMP convergence node.
- **TLR4** — primary receptor for the disulfide form; drives macrophage NF-κB activation.
- **TLR2** — minor; context-dependent.
- **CXCR4** (in complex with CXCL12) — HMGB1 forms heterocomplex with CXCL12 that signals through CXCR4 for monocyte recruitment (Schiraldi 2012). #gap/needs-replication

---

## Druggability

`druggability-tier: 2` — multiple high-quality probes exist but no aging-validated clinical drug:

- **Glycyrrhizin** (licorice triterpenoid) — binds HMGB1 directly, blocks chemoattractant + cytokine activity. Probe-quality; not aging-validated. Used in Japan as a hepatitis treatment.
- **Anti-HMGB1 monoclonal antibodies** (e.g., the 2G7 mAb from Tracey lab; Shino-Test 2D6) — preclinical only.
- **Recombinant thrombomodulin (ART-123, recomodulin)** — sequesters and inactivates HMGB1 via Lys-cleavage in its lectin-like domain. Approved in Japan for sepsis-associated DIC.
- **Soluble RAGE (sRAGE)** decoys — preclinical only.
- **RAGE antagonists** (azeliragon, FPS-ZM1) — small-molecule receptor blockers; azeliragon failed Phase 3 in Alzheimer's disease (TTP488); FPS-ZM1 is a research-grade probe.
- **Upstream cholinergic restraint** — activation of the [[pathways/cholinergic-anti-inflammatory-pathway]] via macrophage [[molecules/proteins/chrna7|α7nAChR]] suppresses active HMGB1 secretion; the α7 agonist GTS-21 reduces HMGB1 release from activated macrophages, positioning the vagal cholinergic circuit as an endogenous brake on the HMGB1 DAMP loop rather than a direct HMGB1-binding agent [^sitapara2020].

The Shin 2025 result revives interest in repurposing these agents for aging indications; the question is whether redox-form-selective interventions (i.e., targeting only ReHMGB1) can preserve any beneficial roles of HMGB1 in development, wound healing, or regeneration. #gap/dose-response-unclear.

---

## Extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (HMGB1, RAGE, TLR4, JAK/STAT, NF-κB all canonical in humans) |
| Phenotype conserved in humans? | unknown (no human in-vivo aging-rejuvenation evidence) |
| Replicated in humans? | no (no clinical trial of HMGB1 blockade for aging indication; azeliragon Alzheimer's failure noted) |

---

## Cross-references

[[shin-2025-rehmgb1-paracrine-senescence]] · [[rage]] · [[sasp]] · [[cellular-senescence]] · [[chronic-inflammation]] · [[altered-intercellular-communication]] · [[advanced-glycation-end-products]] · [[nf-kb]] · [[jak-stat-pathway]] · [[pyroptosis]] · [[gsdmd]]

## Footnotes

[^coppe2008]: doi:10.1371/journal.pbio.0060301 · in-vitro + in-vivo · HMGB1 is listed among the SASP factors characterized in the foundational SASP paper · see [[sasp]] for verified content

[^sitapara2020]: doi:10.1186/s10020-020-00224-9 · in-vivo (mouse) + in-vitro · the α7nAChR agonist GTS-21 attenuates HMGB1 accumulation/release and reduces injury in an acute-inflammation (hyperoxic acute lung injury) model · cross-referenced from [[molecules/proteins/chrna7]] (cholinergic anti-inflammatory pathway); not independently verified against full PDF on this page #gap/needs-replication
