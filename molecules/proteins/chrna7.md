---
type: protein
aliases: [α7nAChR, alpha-7 nicotinic acetylcholine receptor, nAChR alpha7, CHRNA7, nicotinic acetylcholine receptor subunit alpha-7]
uniprot: P36544
ncbi-gene: 1139
hgnc: 1960
ensembl: ENSG00000175344
genage-id: null
pathways: ["[[pathways/cholinergic-anti-inflammatory-pathway]]", "[[pathways/nf-kb]]"]
hallmarks: ["[[hallmarks/chronic-inflammation]]"]
sens-categories: []
mouse-ortholog: Chrna7
druggability-tier: 2
gtex-aging-correlation: "#gap/not-queried — GTEx v2 CHRNA7 age-correlation not pulled; query per sops/finding-tissue-expression.md on next lint pass"
mr-causal-evidence: not-tested
caused-by: ["acetylcholine (vagal efferent release)", "nicotine (exogenous)", "[[pathways/cholinergic-anti-inflammatory-pathway]]"]
causes: ["[[pathways/nf-kb]] suppression (macrophage/microglial)", "JAK2/STAT3 activation", "TNF-α inhibition", "IL-6/IL-1β suppression"]
literature-checked-through: 2026-06-13
verified: true
verified-date: 2026-06-13
verified-by: claude
verified-scope: "Wang 2003 (Nature), Costantini 2019 (PNAS), Courties 2022 (Front Immunol) verified against full PDFs. Canonical identifiers (UniProt P36544, NCBI Gene 1139, HGNC:1960, Ensembl ENSG00000175344) independently confirmed against live databases. CHRFAM7A chromosomal location corrected 15q13.1→15q13.2. Courties 2022 n values and male-only experimental design added to footnote. Encenicline n=319 not directly confirmed from PDF (Keefe 2015 PDF not read — review/summary papers confirm Phase 3 hold). GTEx aging correlation not queried (#gap/not-queried retained). Remaining footnote-level papers (rosasBallina2011, baezPagan2015, wuYJ2021, benDavid2020, zhangY2023, zhou2023, sitapara2020, linY2022, ikonomovic2009, hernandez2012, theFO2007) not verified against primary PDFs."
---

# CHRNA7 — α7 Nicotinic Acetylcholine Receptor

**CHRNA7** (cholinergic receptor nicotinic alpha-7 subunit; gene symbol *CHRNA7*; protein: neuronal acetylcholine receptor subunit alpha-7, UniProt P36544) encodes the pore-forming subunit of the **α7 homopentameric nicotinic acetylcholine receptor (α7nAChR)**. The receptor is a ligand-gated cation channel with unusually high calcium permeability, expressed on neurons throughout the central nervous system and — critically for aging biology — on peripheral macrophages, microglia, T cells, and epithelial cells. CHRNA7 is the **essential receptor of the [[pathways/cholinergic-anti-inflammatory-pathway|cholinergic anti-inflammatory pathway]]**: vagally-released acetylcholine, and cholinergic T-cell-derived acetylcholine, signal through macrophage α7nAChR to suppress [[pathways/nf-kb|NF-κB]]-driven cytokine production, providing a hard-wired neural brake on systemic [[hallmarks/chronic-inflammation|inflammaging]] [^wang2003].

A human-specific partial-duplication gene, **CHRFAM7A**, encodes a dominant-negative regulator of α7nAChR that has no direct mouse ortholog — a species divergence with implications for translating animal-model anti-inflammatory data to humans (see below).

## Identity

| Field | Value | Source |
|---|---|---|
| UniProt | P36544 (ACHA7_HUMAN) — Swiss-Prot manually curated | UniProt REST API, accessed 2026-06-13 |
| NCBI Gene | 1139 | NCBI Gene, accessed 2026-06-13 |
| HGNC | 1960 (HGNC:1960) | NCBI Gene record, accessed 2026-06-13 |
| Ensembl | ENSG00000175344 | NCBI Gene record, accessed 2026-06-13 |
| Chromosome | 15q13.3 | NCBI Gene |
| Sequence length | 502 amino acids | UniProt P36544 |
| Mouse ortholog | Chrna7 (NCBI Gene 11441; chr 7) | NCBI Gene Mus musculus record |

**Naming note.** The protein encoded by CHRNA7 is referred to as α7nAChR, α7 nAChR, or simply α7. This page uses the gene symbol CHRNA7 for the gene and α7nAChR for the protein complex.

## Protein structure and biophysics

α7nAChR is a **homopentamer**: five identical CHRNA7 subunits assemble in a ring around a central ion-conducting pore. Each subunit contains an extracellular ligand-binding domain (residues 23–233), four transmembrane helices (TM1–TM4), and a large intracellular loop between TM3 and TM4 (residues 316–466) that mediates intracellular signaling and receptor modulation [UniProt P36544].

Key biophysical properties distinguish α7nAChR from other nicotinic receptor subtypes:

| Property | α7nAChR (homopentamer) | Other nAChR subtypes |
|---|---|---|
| **Ca²⁺ permeability** | Very high (Ca²⁺/Na⁺ permeability ratio ~10:1) | Lower (α4β2 ~2:1) |
| **Desensitization kinetics** | Fast — channel closes within milliseconds of sustained agonist exposure | Slower for some subtypes |
| **Agonist binding** | 5 orthosteric sites at subunit–subunit interfaces | Varies by subunit composition |
| **Antagonists** | α-bungarotoxin (αBTx, high affinity, selective); methyllycaconitine (MLA) | Subtype-specific |
| **Post-synaptic function** | Mediates rapid excitatory neurotransmission; amplifies Ca²⁺-dependent signaling | Ion-specific effects vary |

Key PTMs (from UniProt P36544):
- **N-linked glycosylation** at Asn46, Asn90, Asn133 — essential for proper receptor folding and trafficking to the plasma membrane.
- **Disulfide bonds** at Cys150–Cys164 and Cys212–Cys213 — form the characteristic "vicinal disulfide" Cys-loop (CysΔCys motif) shared by all Cys-loop ion channel family members.

The fast desensitization kinetics of α7nAChR are pharmacologically important: sustained agonist exposure rapidly inactivates the channel, which limits tonic activation in vivo and shapes the pharmacology of agonist development (see below).

## Expression profile: neuronal and non-neuronal

α7nAChR was originally characterized as a neuronal receptor. Its expression in non-neuronal tissues — particularly immune cells — defines its aging-relevant biology.

**Neuronal expression:**
- Abundant in the cerebral cortex, hippocampus, cerebellum, and basal ganglia.
- Expressed on both pre- and post-synaptic neurons; at pre-synaptic terminals, α7nAChR activation amplifies neurotransmitter release.
- In the basal forebrain, forms heteropentamers with CHRNB2 (β2 subunit) — a distinct molecular species with different pharmacology.

**Non-neuronal (immune-relevant) expression:**
- **Macrophages and monocytes** — the essential cellular substrate of the cholinergic anti-inflammatory pathway [^wang2003].
- **Microglia** — the resident brain macrophages; age-related α7nAChR function in microglia is a nexus for neuroinflammaging.
- **T lymphocytes** — particularly memory T cells, which produce and release acetylcholine through a vagal reflex arc, then signal back to macrophages via α7nAChR [^rosasBallina2011].
- **Alveolar macrophages and epithelial cells** — relevant to lung inflammation.
- **Osteoblasts and chondrocytes** — protective role in joint homeostasis demonstrated in age-related osteoarthritis models [^courties2022].

The non-neuronal expression is functionally significant: α7nAChR on macrophages lacks the classical electrophysiological channel current seen in neurons (likely due to channel-independent downstream signaling through intracellular loops), yet retains the capacity to suppress NF-κB-driven cytokine production [^baezPagan2015].

## The CHRFAM7A dominant-negative: a human-specific modifier

The human genome contains **CHRFAM7A** — a partial duplication of CHRNA7 located on chromosome 15q13.2, proximal to CHRNA7 on 15q13.3. CHRFAM7A encodes a truncated protein (missing the first two exons of CHRNA7 and therefore lacking part of the ligand-binding domain) that co-assembles with full-length CHRNA7 subunits and **acts as a dominant-negative** by blocking ligand binding to heteropentamers containing the truncated subunit [^costantini2019].

Key features of CHRFAM7A:
- **Human-specific**: no direct ortholog exists in mice or other rodents studied to date. This is a critical species divergence — rodent models of α7nAChR biology reflect the full-length receptor without this endogenous dominant-negative brake.
- **Amplifies inflammatory responses**: CHRFAM7A transgenic mice showed amplified macrophage pro-inflammatory cytokine output and expanded hematopoietic stem cell mobilization compared to wild-type controls [^costantini2019]. A complementary study found CHRFAM7A primes macrophages for heightened early pro-inflammatory responses [^zhou2023].
- **RIC3 chaperone dependency**: the RIC3 chaperone facilitates α7nAChR maturation and folding. RIC3 silencing in macrophages eliminates cholinergic anti-inflammatory responses and has been associated with multiple sclerosis pathology — implicating the trafficking/folding pathway as a disease-relevant modulator [^benDavid2020].
- **Translation caveat**: every preclinical study in rodents evaluating α7nAChR agonists for anti-inflammatory efficacy operates without endogenous CHRFAM7A. Human immune cells endogenously express CHRFAM7A, which may dampen α7nAChR agonist efficacy. This is an important translational uncertainty. #gap/needs-human-replication

## Role in the cholinergic anti-inflammatory pathway

The [[pathways/cholinergic-anti-inflammatory-pathway|cholinergic anti-inflammatory pathway]] is the neural circuit by which the efferent vagus nerve suppresses systemic inflammatory responses. CHRNA7 is the **essential terminal receptor** in this circuit.

**Circuit architecture:**

1. Inflammatory signals (cytokines, PAMPs) are detected peripherally and relayed to the nucleus tractus solitarius (NTS) in the brain via afferent vagal fibers.
2. The dorsal motor nucleus of the vagus (DMNV) integrates this input and drives efferent vagal output.
3. Vagal efferents release **[[molecules/metabolites/acetylcholine|acetylcholine]]** (ACh) in the spleen and other lymphoid organs.
4. **Memory CD4+ T cells** in the spleen express choline acetyltransferase (ChAT) and can synthesize and release ACh when stimulated by vagal norepinephrine (NE) acting through β2-adrenergic receptors [^rosasBallina2011].
5. ACh (and/or exogenous cholinergic agonists) binds **α7nAChR on macrophages**, suppressing pro-inflammatory cytokine production.

**Wang et al. 2003 — establishing α7 as the essential receptor.** The landmark Wang et al. 2003 *Nature* paper used Chrna7−/− mice to demonstrate that α7 subunit deficiency abolishes the capacity of vagal stimulation to suppress TNF-α production in macrophages, establishing CHRNA7 as the non-redundant effector receptor of the anti-inflammatory pathway [^wang2003]. #gap/needs-human-replication — the genetic necessity of CHRNA7 has been demonstrated in mice; human genetics data (e.g., CHRNA7 null individuals) are not available for the inflammatory phenotype.

**Downstream signaling in macrophages** — two parallel arms:

| Arm | Key components | Effect |
|---|---|---|
| **NF-κB suppression** | α7nAChR activation → inhibition of IκB degradation → reduced p65/p50 nuclear translocation | Suppresses IL-6, IL-1β, TNF-α transcription |
| **JAK2/STAT3 activation** | α7nAChR → JAK2 → STAT3 phosphorylation | Anti-inflammatory STAT3 target genes; possibly SOCS3 induction antagonizing IL-6 signaling |

Both arms have been described in macrophage models; the relative contribution of each is context-dependent [^baezPagan2015] [^wuYJ2021]. The JAK2/STAT3 arm is a positive anti-inflammatory signal rather than simple signal inhibition, and has been pharmacologically exploited by novel α7 agonists in sepsis models [^linY2022].

**Extrapolation table:**

| Dimension | Status |
|---|---|
| Pathway (α7 → NF-κB suppression) conserved in humans? | partial — human macrophage data exist; α7 ion-channel currents absent in human macrophages but downstream signaling present |
| Phenotype (vagotomy → inflammation) conserved in humans? | partial — clinical vagotomy data support but confounders present |
| Replicated in humans interventionally? | no — no randomized trial in humans of α7 agonist for an inflammaging or aging indication |

## Aging relevance

### Macrophage α7nAChR and inflammaging

As [[hallmarks/chronic-inflammation|inflammaging]] accumulates with age, systemic levels of TNF-α, IL-6, and IL-1β chronically rise. The cholinergic anti-inflammatory pathway — via macrophage/microglial α7nAChR — is one of the endogenous counter-regulatory mechanisms that normally constrains this inflammatory tone. Multiple lines of evidence suggest this brake weakens with age:

- **Age-associated decline in vagal tone**: Heart rate variability (a surrogate for vagal efferent output) declines with age, consistent with reduced cholinergic anti-inflammatory drive. #gap/unsourced — direct measurement of splenic vagal ACh output with age has not been reported in humans.
- **Microglial α7nAChR in neuroinflammaging**: PNU282987 (an α7-selective agonist) reduced pro-inflammatory markers and oxidative stress in D-galactose-induced aging model mice, improving cognitive performance, operating through α7nAChR/Nrf2/HO-1 signaling [^zhangY2023]. While this is a chemically-induced aging model rather than natural aging, it suggests α7nAChR-mediated pathways remain modulable in aged neuronal/glial environments. #gap/needs-human-replication

- **Joint aging**: Chrna7−/− mice develop significantly more severe cartilage lesions (right knee, OARSI histological scoring) during age-related osteoarthritis than wild-type controls at 9 and 12 months, with no difference in subchondral bone remodeling [^courties2022]. This is naturally-aged male mice — not a chemical model — establishing a loss-of-function aging phenotype for CHRNA7 in the musculoskeletal context. Note: the parallel human OA osteoblast experiments showed no significant anti-inflammatory effect of nicotine (n=4), possibly due to CHRFAM7A expression. #gap/needs-human-replication

### Amyloid-β binding and Alzheimer's disease

High-affinity binding of aggregated amyloid-β (Aβ₁₋₄₂) to α7nAChR has been characterized in brain tissue, particularly in regions of high plaque burden [^ikonomovic2009]. The interaction is complex and contested:

- α7nAChR expression appears **upregulated** in cortical areas with high Aβ plaque density, possibly as a compensatory response.
- Aβ binding to α7nAChR can **activate** the receptor at low concentrations (potentially triggering downstream signaling including ERK and PI3K), but may also contribute to receptor internalization and cholinergic dysfunction at higher concentrations.
- **The net effect** — whether Aβ-α7nAChR interaction is neuroprotective or neurotoxic — is dose- and context-dependent and not resolved. #gap/contradictory-evidence

This is a major mechanistic question in [[phenotypes/alzheimers-disease|Alzheimer's disease]] biology. The cholinergic hypothesis of AD posits that basal forebrain cholinergic neuron loss drives cognitive decline; α7nAChR sits at the intersection of this hypothesis, Aβ pathology, and neuroinflammation.

Forwarded cross-link: see [[phenotypes/alzheimers-disease]] for galantamine and other acetylcholinesterase inhibitors that indirectly augment α7nAChR signaling by increasing synaptic ACh concentration.

## Pharmacology

### Agonists

| Compound | Selectivity | Status | Notes |
|---|---|---|---|
| **Nicotine** | Non-selective (all nAChR subtypes) | Widely used (tobacco, NRT) | Anti-inflammatory at low doses via α7; addictive via α4β2; pro-carcinogenic via other mechanisms; not a viable aging intervention |
| **GTS-21 (DMXB-A)** | Partial agonist, α7-selective | Phase 2 trials (cognition, sepsis) | Improved macrophage phagocytosis in hyperoxia model [^sitapara2020]; Phase 2 schizophrenia (attention); not aging-validated |
| **PNU282987** | Full agonist, α7-selective | Tool compound (preclinical) | Used in most mechanistic studies; restored cognitive function in D-galactose aging model [^zhangY2023]; not in human trials |
| **AR-R17779** | Selective agonist | Preclinical | Reduced intestinal inflammation in post-operative ileus models [^theFO2007] |
| **Encenicline (EVP-6124)** | Partial agonist, α7-selective | Phase 3 (halted) | Phase 2 showed improved cognition in schizophrenia and mild-to-moderate Alzheimer's disease [^keefe2015] [^deardorff2015]; Phase 3 trials were placed on clinical hold by FDA in 2015 due to GI side effects; development status uncertain as of 2026 |

The clinical hold on encenicline illustrates the safety challenges of partial α7 agonists in CNS indications. The GI effects likely reflect peripheral α7nAChR activation in the enteric nervous system.

### Positive allosteric modulators (PAMs)

PAMs bind at sites distinct from the orthosteric ACh-binding site and enhance channel opening probability without directly activating the receptor. They have theoretical advantages over orthosteric agonists: they only potentiate signaling when endogenous ACh is present (preserving spatiotemporal selectivity) and may avoid the fast-desensitization penalty of orthosteric full agonists.

**PNU-120596** is the most widely characterized α7 PAM (type II PAM — dramatically slows desensitization in addition to enhancing opening). Extensively used in preclinical studies; not in human trials. The potent desensitization-slowing activity is both its strength as a research tool and a potential liability for therapeutic development (prolonged receptor activation may trigger excitotoxic effects in neurons).

### Antagonists (research tools)

- **α-bungarotoxin (αBTx)** — snake venom toxin; high-affinity, irreversible α7-selective blocker; the canonical α7 pharmacological probe.
- **Methyllycaconitine (MLA)** — plant alkaloid; competitive, reversible α7-selective antagonist; less toxic than αBTx.

Neither antagonist has therapeutic applications; they are used in research to confirm α7-mediated effects.

### Clinical trial landscape (aging indication)

No α7 agonist or PAM has completed a clinical trial with an explicit aging, inflammaging, or longevity primary endpoint as of 2026. Active trials have focused on:
- Cognitive impairment in Alzheimer's disease and schizophrenia
- Sepsis-associated organ dysfunction (GTS-21 / vagus nerve stimulation)
- Inflammatory bowel disease (vagal nerve stimulation indirectly via the pathway)

Longevity-specific clinical use is untested. #gap/needs-human-replication #gap/long-term-unknown

## Druggability — aging-context tier 2

**Aging-context druggability-tier: 2** (high-quality preclinical probes exist; no FDA-approved drug for an aging/inflammaging indication).

Reasoning:
- Multiple selective α7 agonists and PAMs exist with confirmed mechanistic activity in preclinical inflammation models.
- The cholinergic anti-inflammatory pathway is mechanistically validated in mice (Wang 2003 Chrna7−/−) and supported by correlative human data.
- Encenicline reached Phase 3 for cognition but hit a clinical hold; no compound has been tried for an aging-specific indication.
- Tier 1 would require an FDA-approved or EMA-approved drug for an aging/inflammaging indication engaging CHRNA7 — none exists.
- The CHRFAM7A dominant-negative adds translational uncertainty unique to humans.
- Tier 3 would be assigned if only theoretical druggability existed — but the well-characterized pharmacology and preclinical mechanistic validation justify tier 2.

## Key interactors

- **[[pathways/cholinergic-anti-inflammatory-pathway]]** — the macroscale neural circuit in which CHRNA7 is the terminal effector receptor.
- **[[pathways/nf-kb]]** — primary downstream target suppressed by α7nAChR activation in macrophages; p65/p50 nuclear translocation is blocked.
- **CHRFAM7A** — human-specific dominant-negative co-assembler; no wiki page yet (implicit stub). #gap/needs-stub
- **RIC3 chaperone** — essential ER chaperone for α7nAChR maturation and surface expression; silencing eliminates macrophage anti-inflammatory response [^benDavid2020]. Implicit stub.
- **[[hallmarks/chronic-inflammation]]** — CHRNA7 is a modulatory brake on this hallmark via the cholinergic anti-inflammatory pathway.
- **[[phenotypes/alzheimers-disease]]** — Aβ₁₋₄₂ binds α7nAChR; complex interaction reviewed in [^hernandez2012].

## `mr-causal-evidence: not-tested` — justification

No Mendelian randomization study has used CHRNA7 or CHRFAM7A germline variants as instruments to test causal effects on inflammaging, Alzheimer's disease risk, or longevity. GWAS signals at the 15q13.3 locus are known, but these primarily associate with epilepsy, schizophrenia, intellectual disability, and smoking behavior — not directly with inflammatory biomarkers or aging-specific outcomes via MR. Additionally, the confounding of CHRNA7 by CHRFAM7A variants (and the structural complexity of the 15q13.3 deletion/duplication region, which shows high copy-number variation) makes germline variant-based MR technically challenging for this locus. `not-tested` is the correct enum; `partial` would require at least a published instrument and attempted but underpowered MR study.

## Limitations and knowledge gaps

- **No aging-indication clinical probe**: α7 agonists have not been tested for inflammaging, longevity, or aging-composite endpoints in human trials. Mechanistic extrapolation from rodent data is the dominant evidence base. #gap/needs-human-replication
- **CHRFAM7A translational gap**: human macrophages express CHRFAM7A; rodents do not. Every preclinical efficacy study is conducted without this endogenous dominant-negative. The magnitude of the efficacy attenuation it causes in humans is unknown. #gap/needs-human-replication
- **Fast desensitization limits tonic activation**: α7nAChR desensitizes rapidly under sustained agonist exposure. How tonic cholinergic signaling overcomes or accommodates this in vivo (particularly in macrophages, which lack classical channel currents) is not fully resolved.
- **α7nAChR channel-independence in macrophages**: non-neuronal α7nAChR appears to signal through intracellular loops without measurable ionic current. The coupling mechanism (G-protein-like? Src kinase?) remains incompletely characterized. #gap/no-mechanism
- **GTEx aging correlation not queried**: CHRNA7 tissue-by-age expression profile (Spearman ρ across GTEx tissues with age) not yet pulled; #gap/not-queried — populate per `sops/finding-tissue-expression.md` on next lint pass.
- **Aβ–α7nAChR interaction**: the functional consequences of Aβ binding to α7nAChR are not settled. Whether it contributes to or protects against neurodegeneration depends on affinity state, Aβ aggregate form, and cellular context. #gap/contradictory-evidence
- **HGNC / Ensembl verified**: HGNC:1960 confirmed directly against HGNC REST API (genenames.org) returning symbol CHRNA7, Entrez ID 1139, Ensembl ENSG00000175344, location 15q13.3 — all consistent with frontmatter (2026-06-13 verification pass).

## Cross-references

[[pathways/cholinergic-anti-inflammatory-pathway]] · [[pathways/nf-kb]] · [[hallmarks/chronic-inflammation]] · [[phenotypes/alzheimers-disease]] · [[molecules/proteins/hmgb1]] (HMGB1 release suppressed by GTS-21 / α7 activation) · [[exposures/smoking]] (nicotine activates α7nAChR non-selectively) · [[processes/cellular-senescence]] · [[cell-types/microglia]]

## Footnotes

[^wang2003]: doi:10.1038/nature01339 · in-vivo · Wang H, Yu M, Ochani M, Amella CA, Tanovic M, Susarla S, Li JH, Wang H, Yang H, Ulloa L, Al-Abed Y, Czura CJ, Tracey KJ · *Nature* 2003 · CHRNA7 (α7) subunit is required for vagal stimulation and cholinergic agonists to suppress macrophage TNF-α production; Chrna7−/− macrophages failed to respond to nicotine or acetylcholine; vagus nerve stimulation failed to reduce serum TNF in Chrna7−/− mice during endotoxemia; established α7 as the non-redundant effector receptor of the cholinergic anti-inflammatory pathway · model: B6.129S7-Chrna7tm1Bay (C57BL/6 background) Chrna7−/− mice + LPS endotoxemia · n=10/group (serum TNF); 6/group (liver/spleen TNF); 8/group (IL-1β); 9/group (IL-6); 10–11/group (vagal stimulation); 8/group (peritoneal macrophages) · cited ~2,200×

[^rosasBallina2011]: doi:10.1126/science.1209985 · in-vivo + ex-vivo · Rosas-Ballina M, Olofsson PS, Ochani M et al. · *Science* 2011 · n=multiple mouse groups · memory CD4+ T cells expressing ChAT synthesize and release ACh to relay vagal anti-inflammatory signals; T-cell-derived ACh signals to macrophage α7nAChR; vagus → NE → T cell → ACh → macrophage circuit defined · model: ChAT-eGFP reporter mice + adoptive transfer · cited ~1,100×

[^baezPagan2015]: doi:10.1007/s11481-015-9601-5 · review · Báez-Pagán CA, Delgado-Vélez M, Lasalde-Dominicci JA · *Journal of Neuroimmune Pharmacology* 2015 · n/a (review) · comprehensively reviews α7nAChR-mediated anti-inflammatory signaling in macrophages; NF-κB suppression and JAK2/STAT3 activation as dual downstream arms; notes absence of whole-cell channel currents in macrophages despite functional signaling; cited ~250×

[^costantini2019]: doi:10.1073/pnas.1821853116 · in-vivo + in-vitro · Costantini TW, Chan TW, Cohen O, Langness S, Treadwell S, Williams E, Eliceiri BP, Baird A · *PNAS* 2019 · CHRFAM7A blocks ligand binding to both mouse and human α7nAChR; EF1α-promoter CHRFAM7A transgenic mice showed significantly expanded LSK/LK hematopoietic stem cell reservoir in bone marrow; biased HSC differentiation toward monocyte lineage; amplified myeloid cell mobilization and inflammatory responses after burn injury (SIRS model); establishes human-specific translational gap for α7 agonist biology · model: CHRFAM7A transgenic C57BL/6 background mice (two independent lines) + sibling controls; male mice only for SIRS experiments · cited ~100×

[^wuYJ2021]: doi:10.1007/s10753-020-01396-6 · review · Wu YJ, Wang L, Ji CF, Jia JB, Shi X, Gui ZH, Long B, Yin XX · *Inflammation* 2021 · n/a (review) · α7nAChR-mediated cholinergic anti-inflammatory pathway in T cells, macrophages, and dendritic cells; NF-κB and JAK2/STAT3 crosstalk reviewed; cited ~90×

[^benDavid2020]: doi:10.1016/j.intimp.2020.106381 · in-vitro · Ben-David Y, Kagan S, Cohen Ben-Ami H, Bhatt DL, Lomasney JW, Kem WR, Soreq H · *International Immunopharmacology* 2020 · RIC3 chaperone controls α7nAChR maturation; RIC3 silencing abolishes cholinergic agonist anti-inflammatory effects in macrophages; RIC3 expression correlates with multiple sclerosis pathology · model: human macrophage cell lines · cited ~50×

[^courties2022]: doi:10.3389/fimmu.2022.842538 · in-vivo · Courties A, Petit J, Do A, Legris M, Kouki I, Pigenet A et al. · *Frontiers in Immunology* 2022 · Chrna7−/− mice developed significantly more severe cartilage lesions (OARSI score, right knee histology) than WT at both 9 and 12 months with no difference in subchondral bone remodeling; nicotine via α7nAChR partially suppressed IL-1β-induced IL-6 and MMP3 production in murine osteoblasts; nicotine had no significant effect in human OA osteoblasts (n=4), possibly due to CHRFAM7A; establishes loss-of-function aging-musculoskeletal phenotype for CHRNA7 in mice · model: male Chrna7−/− B6.129S7-Chrna7tm1Bay/J mice vs WT siblings, natural aging · n=7 WT / 12 KO (9 months); 7 WT / 8 KO (12 months)

[^zhangY2023]: doi:10.1016/j.exger.2023.112139 · in-vivo · Zhang Y, Ma R, Wang W, Deng Q, Cao C, Yu C, Li S, Shi L, Tian J · *Experimental Gerontology* 2023 · PNU282987 (α7-selective agonist) improved cognitive impairment, reduced neuroinflammation and oxidative stress in D-galactose-induced aging model mice via α7nAChR/Nrf2/HO-1 pathway · model: D-galactose aging model mice · n=multiple groups · note: chemical aging model, not natural aging

[^zhou2023]: doi:10.1002/cbin.12083 · in-vivo + ex-vivo · Zhou R, Niu K, Wang C et al. · *Cell Biology International* 2023 · CHRFAM7A transgenic mice show heightened pro-inflammatory macrophage cytokine profile during early sepsis stages; CHRFAM7A primes macrophages for amplified early innate immune responses · model: CHRFAM7A transgenic mice + peritoneal macrophages

[^sitapara2020]: doi:10.1186/s10020-020-00224-9 · in-vivo + ex-vivo · Sitapara RA, Gauthier AG, Patel VS, Lin M, Zur M, Ashby CR Jr, Mantell LL · *Molecular Medicine* 2020 · GTS-21 suppressed HMGB1 release and restored macrophage phagocytosis under hyperoxia; α7-mediated mechanism; potential therapeutic for ventilator-associated pneumonia · model: murine hyperoxia model + macrophage cultures

[^linY2022]: doi:10.1016/j.bmc.2022.116811 · in-vitro + in-vivo · Lin Y, Wongkrajang K, Shen X et al. · *Bioorganic & Medicinal Chemistry* 2022 · diarylheptanoids activate α7nAChR-JAK2-STAT3 and suppress NF-κB; reduced inflammatory markers in sepsis models; proof-of-concept for non-traditional α7 agonist scaffold · model: macrophage cultures + mouse sepsis model

[^ikonomovic2009]: doi:10.1001/archneurol.2009.46 · observational · Ikonomovic MD, Wecker L, Abrahamson EE et al. · *Archives of Neurology* 2009 · α7nAChR binding elevated in cortical areas with high Aβ plaque burden in early Alzheimer's disease; Aβ concentration rises with clinical disease progression; possible compensatory upregulation in plaque-burdened regions · model: human AD brain tissue (post-mortem) · n=human cohort

[^hernandez2012]: doi:10.2174/138945012800398973 · review · Hernandez CM, Dineley KT · *Current Drug Targets* 2012 · dual neuroprotective/neurotrophic roles of α7nAChR in AD; Aβ disrupts cholinergic phenotype via aberrant α7 signaling; reviewed α7 agonist therapeutic rationale in AD · n/a (review)

[^keefe2015]: doi:10.1038/npp.2015.176 · rct · Keefe RSE, Meltzer HA, Dgetluck N et al. · *Neuropsychopharmacology* 2015 · randomized double-blind placebo-controlled; encenicline (EVP-6124) showed clinically meaningful improvements in cognition and function in schizophrenia patients; generally well-tolerated · n=319 (pooled doses vs placebo) · model: human (schizophrenia)

[^deardorff2015]: doi:10.1586/14737175.2015.995639 · review + phase-2 summary · Deardorff WJ, Shobassy A, Grossberg GT · *Expert Review of Neurotherapeutics* 2015 · EVP-6124 showed statistically significant cognitive/functional improvements vs placebo in Phase 1/2 Alzheimer's trials; tolerable safety profile; Phase 3 subsequently placed on clinical hold for GI events · n/a (review of Phase 1–2 trials)

[^theFO2007]: doi:10.1053/j.gastro.2007.07.022 · in-vivo · The FO, Boeckxstaens GE, Snoek SA et al. · *Gastroenterology* 2007 · AR-R17779 (α7-selective agonist) reduced intestinal inflammation and prevented delayed gastric emptying in post-surgical ileus models; α7nAChR-mediated anti-inflammatory effect in enteric immune cells · model: murine surgical manipulation
