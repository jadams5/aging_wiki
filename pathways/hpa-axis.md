---
type: pathway
aliases: [HPA axis, hypothalamic-pituitary-adrenal axis, stress axis, cortisol axis]
kegg: hsa04927
kegg-secondary: [hsa04080]
reactome: null
wikipathways: null
key-nodes:
  - "[[molecules/proteins/crh]]"
  - "[[pomc-processing]]"
  - "[[molecules/proteins/nr3c1]]"
  - "[[molecules/proteins/nr3c2]]"
  - "[[molecules/proteins/hsd11b1-hsd11b2]]"
upstream:
  - "[[pathways/melanocortin-system]]"
  - "[[processes/circadian-rhythm]]"
downstream:
  - "[[nf-kb]]"
  - "[[insulin-igf1]]"
  - "[[phenotypes/sarcopenia]]"
  - "[[phenotypes/osteoporosis]]"
  - "[[phenotypes/immunosenescence]]"
hallmarks:
  - "[[hallmarks/chronic-inflammation]]"
  - "[[hallmarks/altered-intercellular-communication]]"
sens-categories: []
druggability-tier: 2
caused-by: []
causes: []
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Kumari 2011 and Pivonello 2021 verified against full PDFs. Gregory 2020 and Holleman 2026 verified against PubMed abstract (full text not in archive). Gennari 1998 closed-access — abstract only confirms 30–50% fracture figure. Canonical IDs verified against live UniProt REST API (P06850, P04150, P08235, P28845, P80365) and PubChem (CID 5754). KEGG hsa04927 name confirmed. Swaab 2005, Barnes 1998, De Bosscher 2014, Bujalska 2002, Bauer 2005, Harvanek 2021, Viho 2023, Montoliu 2020 — Crossref/PubMed metadata confirmed; full PDFs not re-read (claims are qualitative mechanism statements consistent with standard literature)."
---

# HPA axis (hypothalamic-pituitary-adrenal axis)

The **hypothalamic-pituitary-adrenal (HPA) axis** is the central neuroendocrine stress-response circuit in vertebrates. It coordinates a three-node hormonal cascade — hypothalamic paraventricular nucleus (PVN) → anterior pituitary corticotrophs → adrenal cortex (zona fasciculata) — that drives synthesis and secretion of **cortisol**, the primary human glucocorticoid. The HPA axis integrates signals from the nervous system, immune system, and circadian clock to regulate glucose metabolism, immune function, inflammatory tone, and stress resilience. In aging, chronic low-grade HPA activation and loss of diurnal cortisol rhythm architecture are associated with frailty, mortality, cognitive decline, sarcopenia, osteoporosis, and immunosenescence — though whether cortisol elevation is a driver or marker of biological aging remains actively debated. See [[hypotheses/glucocorticoid-cascade-hypothesis]] for the contested causal hypothesis.

## KEGG and Reactome notes

**KEGG hsa04927** ("Cortisol synthesis and secretion") is the best single canonical match: it covers the ACTH → MC2R → cAMP → StAR → CYP11A1 → CYP17A1 → CYP21A2 → CYP11B1 → cortisol enzymatic cascade within the adrenal zona fasciculata. The secondary entry **hsa04080** ("Neuroactive ligand-receptor interaction") captures CRH and ACTH receptor contexts but is a broad ligand-receptor compendium, not an HPA-specific map. The full HPA circuit — including hypothalamic CRH secretion, negative-feedback GR/MR signaling in the pituitary and brain, and pre-receptor cortisol metabolism via 11β-HSD1/2 — is not represented as a single integrated KEGG pathway; `kegg: hsa04927` is the closest single-map anchor. Reactome has no confirmed top-level HPA-axis pathway entry; `reactome: null` until confirmed. #gap/needs-canonical-id (Reactome, WikiPathways)

## Circuit architecture

### 1. Hypothalamic PVN: CRH and AVP secretion

The parvocellular neurons of the **paraventricular nucleus** (PVN) of the hypothalamus are the primary command nodes of the HPA axis. They co-secrete two peptides into the hypophyseal portal circulation:

- **CRH** (corticotropin-releasing hormone; gene *CRH*; UniProt P06850; 41 amino acids after propeptide cleavage) — the dominant ACTH secretagogue. CRH binds CRHR1 on anterior pituitary corticotrophs, activating a Gs–cAMP–PKA cascade that drives *POMC* transcription and ACTH release.
- **AVP** (arginine vasopressin / ADH) — a co-secretagogue that synergistically potentiates CRH-driven ACTH release via V1b receptors on corticotrophs; AVP alone has weak ACTH-secretagogue activity but markedly amplifies the CRH signal [^swaab2005].

CRH secretion is stimulated by physical or psychological stressors (routed via the amygdala and brainstem), by proinflammatory cytokines (IL-1β, IL-6, TNF-α — acute immune-HPA activation), and by the circadian clock (peaks in the early morning to drive the cortisol awakening response). It is inhibited by negative feedback from cortisol acting on GR in the PVN itself [^swaab2005].

### 2. Anterior pituitary: ACTH from POMC

Pituitary corticotrophs process **POMC** (proopiomelanocortin) via PC1/3 (PCSK1) to generate **ACTH (1–39)** — the trophic hormone for adrenal cortisol synthesis. This cleavage step is detailed on the [[pomc-processing]] page. ACTH release is pulsatile (ultradian) with a prominent circadian peak ~30–45 min after waking (the cortisol awakening response, CAR), driven by the PVN circadian-clock circuit.

ACTH binds **MC2R** (melanocortin-2 receptor) on zona fasciculata cells. MC2R is the only MC receptor that exclusively recognizes ACTH (not shorter MSH peptides); it signals via MC2R/MRAP complex → Gs → cAMP → PKA, driving StAR-mediated cholesterol transport into the inner mitochondrial membrane — the committed step of steroidogenesis. Downstream enzymes (CYP11A1 → HSD3B2 → CYP17A1 → CYP21A2 → CYP11B1) complete the cholesterol-to-cortisol conversion within the adrenal zona fasciculata [see KEGG hsa04927].

### 3. Cortisol: chemistry and receptors

**Cortisol** (hydrocortisone; PubChem CID 5754; molecular formula C₂₁H₃₀O₅; MW 362.5 Da) is a C-21 steroid derived from cholesterol. It circulates largely bound to corticosteroid-binding globulin (CBG, ~75%) and albumin (~15%), with only ~5–10% free and biologically active.

Cortisol acts at two nuclear receptors:

| Receptor | Gene | UniProt | Kd for cortisol | Primary role |
|---|---|---|---|---|
| **Glucocorticoid receptor (GR)** | NR3C1 | P04150 | ~5–30 nM (low affinity) | Stress response, anti-inflammatory transrepression, gluconeogenesis; occupies GREs or tethers to TFs at non-GRE sites |
| **Mineralocorticoid receptor (MR)** | NR3C2 | P08235 | ~0.5–1 nM (high affinity) | Electrolyte balance (kidney, colon); in brain: cognitive/affective regulation at basal cortisol levels |

Because MR has ~10-fold higher affinity for cortisol than GR, MR is substantially occupied at **basal** cortisol concentrations while GR occupation ramps up during stress-induced cortisol peaks. In mineralocorticoid-sensitive tissues (kidney, colon), **11β-HSD2** (gene *HSD11B2*; UniProt P80365) converts cortisol to inactive **cortisone**, protecting MR from glucocorticoid overstimulation and thereby preserving aldosterone selectivity.

### 4. Pre-receptor metabolism: 11β-HSD1 and 11β-HSD2

Two opposing enzymes control tissue-level cortisol availability independently of circulating levels:

- **11β-HSD1** (*HSD11B1*; UniProt P28845) — an NADPH-dependent oxoreductase in the ER lumen of liver, adipose, skeletal muscle, bone, and brain. It converts inactive cortisone → active cortisol locally, amplifying glucocorticoid signaling in these tissues. In mature adipocytes, 11β-HSD1 acts as a reductase (generating cortisol), whereas in undifferentiated adipose stromal cells it favors the dehydrogenase direction (converting cortisol → cortisone), facilitating differentiation [^bujalska2002].
- **11β-HSD2** (*HSD11B2*; UniProt P80365) — an NAD+-dependent dehydrogenase highly expressed in kidney tubular cells and placenta. It rapidly inactivates cortisol → cortisone, creating a mineralocorticoid-selective microenvironment for MR. See [[molecules/proteins/hsd11b1-hsd11b2]].

### 5. Negative feedback

Cortisol exerts negative feedback at two levels:

1. **Anterior pituitary** — GR activation suppresses *POMC* transcription and inhibits ACTH secretion; this is the dominant acute-feedback arm.
2. **Hypothalamic PVN** — GR activation suppresses *CRH* and *AVP* gene expression and reduces secretagogue release [^swaab2005].

Additional ultra-short feedback exists within the hypothalamus (CRH inhibiting its own neurons) and at limbic sites (hippocampus, amygdala, prefrontal cortex), which project inhibitory or excitatory signals to the PVN to modulate set-point and gain of the feedback loop [^sapolsky1986].

## Cortisol signaling mechanisms

### Genomic (GRE-mediated) transcription

Cytoplasmic GR is held in a chaperone complex (HSP90, HSP70, FKBP51). Cortisol binding triggers conformational change, chaperone dissociation, receptor dimerization, and nuclear import. The GR dimer binds **glucocorticoid response elements** (GREs) in target gene promoters, recruiting coactivators (SRC-1, p300/CBP) and driving transcriptional activation. Key GRE-driven target genes include:

- **PEPCK** and **G6PC** (gluconeogenic enzymes — acute cortisol → hepatic glucose output)
- **GILZ** (glucocorticoid-induced leucine zipper — anti-inflammatory mediator)
- **FKBP51** (negative feedback on GR itself)

### Transrepression of NF-κB and AP-1

GR suppresses inflammatory gene expression via **tethering transrepression**: the GR monomer (not dimer) physically interacts with p65 (NF-κB) or c-Jun (AP-1), preventing their binding to target DNA and recruiting histone deacetylases [^barnes1998]. This mechanism accounts for the majority of glucocorticoid anti-inflammatory effects — suppression of IL-1β, TNF-α, IL-6, IL-8, COX-2, iNOS. It also underlies the major clinical use of synthetic glucocorticoids (prednisolone, dexamethasone) as immunosuppressants. See [[nf-kb]] for the NF-κB side of this interaction. The transrepression arm is separable from GRE-driven metabolic effects, which is the basis for "dissociated glucocorticoid" drug development programs seeking anti-inflammatory benefit without the catabolic and metabolic side-effects [^debosscher2014].

### Cortisol effects by tissue

| Tissue | Effect | Mechanism |
|---|---|---|
| Liver | Gluconeogenesis ↑, glycogen synthesis ↑ | GRE → PEPCK, G6Pase induction |
| Adipose (visceral) | Lipolysis ↑, glucose uptake ↓, fat redistribution | GR + 11β-HSD1 amplification |
| Skeletal muscle | Proteolysis ↑ (via MuRF1/MAFbx), protein synthesis ↓ | GRE → ubiquitin-proteasome pathway |
| Bone | Osteoblast apoptosis ↑, osteoclastogenesis ↑ | GR inhibits Wnt/Runx2; stimulates RANKL |
| Immune cells | Lymphocyte apoptosis, cytokine suppression | Transrepression of NF-κB/AP-1 |
| Brain (hippocampus, PFC) | Impairs LTP, reduces BDNF, promotes GR downregulation | GRE + transrepression |
| Kidney | Na+ retention, K+ excretion (via MR at basal levels) | MR → ENaC upregulation; 11β-HSD2 gating |

## Temporal architecture: circadian, ultradian, and stress-reactive

**Circadian.** Cortisol secretion follows a circadian rhythm driven by the suprachiasmatic nucleus (SCN) clock: troughs at ~midnight, rising during late sleep, reaching a **cortisol awakening response (CAR)** — a pulse 50–160% above pre-waking baseline within 30–45 min of waking. The CAR is followed by a declining afternoon and evening trough [^montoliu2020]. The amplitude of the morning-to-evening decline constitutes the **diurnal cortisol slope** — a biomarker of circuit integrity.

**Ultradian.** Superimposed on the circadian envelope is ~1-hour pulsatile secretion, with 10–20 pulses/day in humans. Ultradian pulses produce oscillating GR occupation, which is important for maintaining target-tissue sensitivity (sustained occupation leads to GR downregulation).

**Acute stress.** Psychological or physical stressors drive a rapid (within minutes) CRH/AVP surge → ACTH peak → cortisol rise (peaking 30–60 min after stressor onset). The acute cortisol response is adaptive — mobilizing glucose, suppressing immune activation, redirecting attention. The capacity for this response is distinct from (and partially independent of) the chronic baseline level.

## Aging-relevant biology

### Flattening of the diurnal cortisol slope

In healthy aging, the overall magnitude of the 24-hour cortisol secretion is modestly increased or unchanged, but the **diurnal amplitude** — the morning-to-evening decline — is attenuated (slope flattening). A key prospective cohort study (Whitehall II; n=4,047 UK civil servants; mean follow-up 6.1 years) found that **a flatter salivary cortisol diurnal slope was associated with increased all-cause mortality** (HR = 1.30 per SD reduction in slope steepness; 95% CI 1.09–1.55) and strongly with cardiovascular mortality (HR = 1.87; 95% CI 1.32–2.64) [^kumari2011]. Morning cortisol level and the CAR amplitude did not predict mortality independently. This prospective association establishes slope flattening as a prognostically meaningful biomarker; **causality remains uncertain** (#gap/contradictory-evidence — confounding by pre-existing disease cannot be excluded in this design).

### The glucocorticoid cascade hypothesis (Sapolsky)

The **glucocorticoid cascade hypothesis** (Sapolsky, Krey, McEwen, 1986) proposes a self-amplifying feedback loop: chronic stress → elevated cortisol → hippocampal CA1 neuron damage → impaired GR-mediated negative feedback → further cortisol elevation → progressive hippocampal damage and cognitive decline [^sapolsky1986]. The hypothesis was influential in framing the HPA–cognition relationship and motivated decades of research. However, its strong version (cortisol causes irreversible hippocampal neurodegeneration in humans) has not been confirmed: the 2005 Swaab et al. comprehensive review of human and animal data concluded that evidence for glucocorticoid-induced irreversible hippocampal damage in humans is insufficient, and that HPA hyperactivity in depression is more likely bidirectional and not simply causal [^swaab2005]. The 2026 Holleman et al. systematic review (54 studies, 91% cross-sectional) found that "elevated cortisol levels tended to be associated with Alzheimer's disease–related biomarkers" but associations varied substantially by cortisol measurement methodology, and longitudinal evidence is sparse [^holleman2026]. Current consensus: the hippocampus–HPA relationship is real but likely bidirectional; cortisol-as-primary-driver of neurodegeneration remains contested. #gap/contradictory-evidence

### Cortisol, stress, and epigenetic aging (GrimAge connection)

Cumulative psychosocial stress is associated with accelerated GrimAge (an epigenetic mortality predictor incorporating a cortisol-correlated DNAm composite) in a community sample of 444 adults; the effect was moderated by psychological resilience [^harvanek2021]. The GrimAge proxy was built partly from DNAm sites correlating with ACTH/cortisol physiology. This observation links HPA dysregulation to epigenetic aging clocks, though the directionality and causality are not established by observational cross-sectional data. See [[biomarkers/grimage-2019]] for the full GrimAge architecture.

### Glucocorticoids and sarcopenia

Chronic glucocorticoid exposure — whether from endogenous HPA hyperactivation or iatrogenic (exogenous glucocorticoid therapy) — promotes skeletal muscle wasting via multiple mechanisms: upregulation of muscle-specific ubiquitin E3 ligases MuRF1 and MAFbx, suppression of IGF-1 signaling, inhibition of mTOR, and activation of myostatin. A 2021 review (Kamwa et al.) identifies glucocorticoids among the hormonal determinants of sarcopenia and frailty, alongside anabolic hormone deficits [^kamwa2021]. Whether the modest cortisol elevation in non-stressed healthy aging contributes meaningfully to sarcopenia — versus iatrogenic glucocorticoid use in patients — is not established. See [[phenotypes/sarcopenia]] for quantitative sarcopenia criteria and prevalence data. #gap/needs-human-replication (cortisol-level contribution to community-dwelling sarcopenia)

### Glucocorticoids and osteoporosis

Glucocorticoid-induced osteoporosis (GIOP) is the most common secondary osteoporosis, arising primarily from exogenous glucocorticoid therapy (estimated 30–50% fracture incidence in long-term users) [^gennari1998]. The mechanism involves GR-mediated: (1) osteoblast apoptosis and reduced bone formation via Wnt/Runx2 pathway suppression; (2) increased RANKL/OPG ratio promoting osteoclastogenesis; (3) impaired calcium absorption (GR antagonizes vitamin D signaling in gut and kidney). Whether the modest endogenous cortisol increase in aging contributes to age-related bone loss beyond the iatrogenic context is plausible but not definitively established. See [[phenotypes/osteoporosis]] for quantitative bone-density and fracture-risk data.

### Glucocorticoids and immunosenescence

Chronic glucocorticoid exposure drives thymic involution and reduces cell-mediated immunity — changes that resemble immunosenescence. In older adults, the cortisol/DHEA ratio rises (as DHEA declines more than cortisol), potentially amplifying immunosuppressive effects. Peripheral lymphocytes in aged individuals show **reduced glucocorticoid sensitivity** (receptor downregulation as a compensatory response), complicating both biomarker interpretation and therapeutic use [^bauer2005]. The HPA–immunosenescence axis may contribute to the chronic inflammatory state ([[hallmarks/chronic-inflammation]]) and immune dysregulation ([[phenotypes/immunosenescence]]). See [[phenotypes/immunosenescence]] for quantitative data on T-cell and NK-cell changes.

### Cushing syndrome as a model of accelerated glucocorticoid aging

Chronic hypercortisolism (Cushing syndrome — from pituitary ACTH-secreting adenoma, adrenal adenoma, or ectopic ACTH) produces a phenotype that superficially resembles accelerated aging: central visceral adiposity, sarcopenia, osteoporosis, impaired glucose tolerance, hypertension, immunosuppression, and hippocampal volume loss. This natural experiment supports a causal role for sustained cortisol excess in producing aging-like end-organ damage; the reversibility upon successful treatment of the hypercortisolemia is partial, arguing for some degree of permanent tissue-level effect [^swaab2005].

### Cortisol directionality: driver vs. marker

Throughout the aging-context sections above, a critical epistemic caveat applies: the dominant observational and correlational evidence cannot distinguish cortisol-as-driver from cortisol-as-shared-biomarker of underlying biological aging. Mendelian randomization studies using cortisol-axis genetic instruments are sparse, and the polyhormonal nature of aging (simultaneous changes in DHEA, IGF-1, sex steroids, melatonin) makes independent attribution difficult. The Cushingoid model provides the strongest causal evidence for cortisol-driven pathology, but at supraphysiological levels far above healthy aging. #gap/contradictory-evidence — causality of basal cortisol in healthy aging versus marker status is unresolved.

## HPA axis and the sympatho-adrenal axis

The HPA axis is the **slow, sustained** stress response (onset 30–60 min; effects hours–days via genomic mechanisms). It should be distinguished from the **fast, short** sympatho-adrenal medullary response (onset seconds; effects via catecholamine release from the adrenal medulla): see [[molecules/metabolites/catecholamines]]. Chronic stress involves synergistic activation of both axes; the catecholamine axis mediates the acute flight-or-fight response while HPA-axis cortisol governs the metabolic and immune recovery phase. Both converge on [[nf-kb]] modulation (catecholamines via β-adrenergic/cAMP → NF-κB activation; cortisol via GR → NF-κB transrepression — an opposed-sign cross-talk).

The cholinergic anti-inflammatory pathway (vagus nerve → acetylcholine → α7nAChR on macrophages → NF-κB suppression) provides an additional autonomic brake on inflammation; see [[pathways/cholinergic-anti-inflammatory-pathway]] and [[tissues/vagus-nerve]].

## Therapeutic landscape

### Druggability tier: 2 (aging-context)

Multiple clinical drugs modulate the HPA axis or glucocorticoid signaling, but none carries an approved **aging indication**:

- **Exogenous glucocorticoids** (prednisone, dexamethasone, hydrocortisone) — FDA-approved for inflammatory, autoimmune, and oncology indications; produce iatrogenic Cushingoid aging-phenotype with chronic use (sarcopenia, osteoporosis, skin thinning, metabolic syndrome, immunosuppression). These are not aging interventions.
- **Mifepristone** (RU-486) — a competitive GR + PR antagonist; FDA-approved for Cushing syndrome (Korlym). Not evaluated for aging indications.
- **Relacorilant** — a selective GR modulator with minimal PR antagonism and modest HPA axis disinhibition in comparison to mifepristone. Phase 2 open-label study in Cushing syndrome (n=34): 63.6% hypertension response, 50% glycemic response at high dose [^pivonello2021]. Preclinical data show peripheral GR antagonism with limited ACTH rebound [^viho2023]. No aging trial registered.
- **11β-HSD1 inhibitors** — a pharmaceutical target for attenuating tissue-level cortisol amplification in metabolic syndrome, visceral adiposity, and Alzheimer's disease. Systematic review of 29 clinical studies (Gregory et al. 2020): one Phase 2 trial met HbA1c primary endpoint in diabetes; trials in metabolic syndrome, obesity, and Alzheimer's disease failed primary endpoints [^gregory2020]. The class remains investigational; no approved 11β-HSD1 inhibitor exists.

**Aging-context druggability tier 2 justification:** High-quality probe compounds exist for GR (mifepristone, relacorilant) and 11β-HSD1 (multiple clinical-stage inhibitors); glucocorticoid biology is among the best-understood in medicine. However, no agent has an aging-validated indication, and the tradeoff between HPA-axis modulation and immune/metabolic consequences makes a clean aging intervention difficult to define. Tier 1 would require an agent with efficacy and approval for an aging-specific endpoint (e.g., frailty reversal, geroprotective trial); this does not exist as of 2026.

### Lifestyle modulation

**Sleep** is a primary regulator of HPA axis function: sleep restriction or disruption flattens the diurnal cortisol slope, elevates evening cortisol, and blunts the CAR. Normalizing sleep architecture is the highest-evidence behavioral intervention for HPA-axis optimization. See [[interventions/lifestyle/sleep]]. **Mindfulness-based stress reduction** (MBSR) modestly attenuates cortisol output in observational and small RCT literature, but effect sizes are inconsistent across trials — not covered here in depth (#gap/needs-human-replication for MBSR cortisol effects in older adults).

## Canonical IDs

| Entity | Gene | UniProt | Notes |
|---|---|---|---|
| CRH (corticotropin-releasing hormone) | CRH | P06850 | 41-aa peptide; see hypothalamus PVN |
| GR (glucocorticoid receptor) | NR3C1 | P04150 | Nuclear receptor; primary cortisol sensor at stress concentrations |
| MR (mineralocorticoid receptor) | NR3C2 | P08235 | High-affinity cortisol / aldosterone receptor |
| 11β-HSD1 (cortisol regenerase) | HSD11B1 | P28845 | Regenerates active cortisol in visceral adipose, liver, bone |
| 11β-HSD2 (cortisol inactivase) | HSD11B2 | P80365 | Protects mineralocorticoid tissue from cortisol; protects MR |
| Cortisol (hydrocortisone) | — | PubChem CID 5754; C₂₁H₃₀O₅; MW 362.5 | Free fraction ~5–10% of circulating total |
| ACTH | POMC-derived | See [[pomc-processing]] | 39 aa; cleaved from POMC by PC1/3 |
| KEGG | hsa04927 | — | Cortisol synthesis and secretion (adrenal steroidogenesis) |
| Reactome | null | — | No confirmed HPA-specific top-level entry #gap/needs-canonical-id |

## Extrapolation status

| Dimension | Status |
|---|---|
| Circuit conserved in humans? | Yes — CRH/ACTH/cortisol axis is one of the most conserved neuroendocrine circuits across mammals |
| Phenotype conserved in humans? | Yes — Cushing syndrome validates cortisol-driven aging-like pathology; diurnal slope–mortality association is a human cohort finding |
| Replicated aging data in humans? | Partial — Whitehall II slope-mortality is replicated in principle; mechanism (cortisol-as-driver) not confirmed; 11β-HSD1 human trials largely negative |

## Limitations and gaps

- #gap/needs-canonical-id — Reactome and WikiPathways: no confirmed top-level HPA-axis pathway entries. The adrenal steroidogenesis is covered in KEGG hsa04927; the broader neuroendocrine circuit lacks a single canonical entry across all databases.
- #gap/contradictory-evidence — Whether the cortisol diurnal slope flattening in aging **causes** adverse outcomes (vs. is a shared biomarker of biological age) is unresolved. Prospective associations exist (Whitehall II [^kumari2011]) but Mendelian randomization evidence is sparse.
- #gap/contradictory-evidence — The glucocorticoid cascade hypothesis (cortisol driving irreversible hippocampal damage) is contested; human clinical data do not confirm the strong causal version [^swaab2005][^holleman2026].
- #gap/needs-human-replication — Contribution of community-dwelling (non-Cushingoid) cortisol levels to sarcopenia, bone loss, and immunosenescence in healthy older adults is not definitively established; evidence is confounded by concurrent anabolic hormone decline.
- Protein pages now exist (seeded + verified 2026-06-14) for [[molecules/proteins/crh]], [[molecules/proteins/nr3c1]] (GR), [[molecules/proteins/nr3c2]] (MR), and the combined [[molecules/proteins/hsd11b1-hsd11b2]] (11β-HSD1/2).
- #gap/stub — [[hypotheses/glucocorticoid-cascade-hypothesis]] page does not yet exist; theory is described in-line above.
- [[molecules/metabolites/catecholamines]] — the SNS/adrenal-medulla sibling stress axis (fast catecholamine arm vs slow glucocorticoid arm).
- 11β-HSD1 inhibitor clinical trials have largely failed to meet primary endpoints in obesity and metabolic syndrome; the translational gap for this target is significant [^gregory2020].

## Cross-references

- [[pomc-processing]] — ACTH biosynthesis from POMC in pituitary corticotrophs
- [[pathways/melanocortin-system]] — ACTH → MC2R in adrenal; α-MSH from arcuate POMC neurons
- [[nf-kb]] — GR transrepression of NF-κB: primary anti-inflammatory molecular mechanism
- [[hallmarks/chronic-inflammation]] — HPA axis as modulator of inflammaging
- [[hallmarks/altered-intercellular-communication]] — cortisol as a long-range endocrine signal dysregulated in aging
- [[phenotypes/sarcopenia]] — glucocorticoid contribution to muscle catabolism
- [[phenotypes/osteoporosis]] — glucocorticoid-induced bone loss (GIOP)
- [[phenotypes/immunosenescence]] — cortisol/DHEA ratio and immune aging
- [[biomarkers/grimage-2019]] — GrimAge methylation clock incorporating cortisol-correlated DNAm sites
- [[interventions/lifestyle/sleep]] — sleep as the primary behavioral HPA-axis regulator
- [[pathways/cholinergic-anti-inflammatory-pathway]] — complementary autonomic anti-inflammatory axis
- [[tissues/vagus-nerve]] — efferent limb of the cholinergic anti-inflammatory pathway
- [[molecules/metabolites/catecholamines]] — fast sympatho-adrenal axis; distinct from slow HPA cortisol axis
- [[molecules/proteins/sgk1]] — serum/glucocorticoid-regulated kinase 1; direct GR transcriptional target mediating Na+ transport and neuronal stress responses
- [[organ-systems/endocrine-system]] — navigational overlay for the adrenal gland and endocrine axes

## Footnotes

[^sapolsky1986]: doi:10.1210/edrv-7-3-284 · Sapolsky RM, Krey LC, McEwen BS · *Endocrine Reviews* 1986 · review · foundational glucocorticoid cascade hypothesis; chronic glucocorticoid exposure → hippocampal damage → impaired negative feedback → further cortisol elevation · model: rat + human data synthesis

[^swaab2005]: doi:10.1016/j.arr.2005.03.003 · Swaab DF, Bao A-M, Lucassen PJ · *Ageing Research Reviews* 2005 · review · n=N/A · HPA axis in human aging, depression, and neurodegeneration; CRH as central regulator; insufficient clinical evidence for cortisol-driven irreversible hippocampal damage in humans; HPA hyperactivity in depression likely bidirectional

[^kumari2011]: doi:10.1210/jc.2010-2137 · Kumari M, Shipley M, Stafford M, Kivimaki M · *J Clin Endocrinol Metab* 2011 · observational (prospective cohort) · n=4,047 · Whitehall II civil servants; 6.1-year follow-up; flatter diurnal salivary cortisol slope associated with all-cause mortality HR=1.30 (95% CI 1.09–1.55) and cardiovascular mortality HR=1.87 (95% CI 1.32–2.64) per SD reduction in slope steepness; morning level and CAR not independently predictive

[^barnes1998]: doi:10.1042/cs0940557 · Barnes PJ · *Clinical Science* 1998 · review · n=N/A · GR transrepression of NF-κB and AP-1; direct protein–protein interaction mechanism; histone deacetylase recruitment; molecular basis of glucocorticoid anti-inflammatory action

[^debosscher2014]: doi:10.1007/s00018-013-1367-4 · De Bosscher K et al. · *Cell Mol Life Sci* 2014 · in-vitro mechanistic · selective GR modulation distinguishes NF-κB transrepression from AP-1 suppression; non-steroidal GR ligands with dissociated profiles; model: cell-based

[^bauer2005]: doi:10.1080/10253890500100240 · Bauer ME · *Stress* 2005 · review · n=N/A · glucocorticoids and immunosenescence; cortisol/DHEA ratio rises with aging; peripheral lymphocyte GR sensitivity decreases; thymic involution accelerated by chronic glucocorticoid exposure

[^kamwa2021]: doi:10.23736/S2724-6507.20.03198-3 · Kamwa V, Welch C, Hassan-Smith ZK · *Minerva Endocrinology* 2021 · review · n=N/A · endocrinology of sarcopenia and frailty; glucocorticoids as catabolic hormones promoting muscle loss; hormone replacement for confirmed deficiencies; large RCTs needed

[^gennari1998]: doi:10.1007/BF03339655 · Gennari C, Martini G, Nuti R · *Aging (Milano)* 1998 · review · glucocorticoid-induced osteoporosis as most common secondary osteoporosis; dual pathology of increased bone resorption + reduced formation; estimated 30–50% fracture incidence in chronic corticosteroid users

[^bujalska2002]: doi:10.1210/jcem.87.3.8301 · Bujalska IJ et al. · *J Clin Endocrinol Metab* 2002 · in-vitro (human omental adipose stromal cells) · 11β-HSD1 switches from dehydrogenase (cortisol→cortisone) in undifferentiated cells to reductase (cortisone→cortisol) in mature adipocytes; promotes adipogenesis; model: human adipose cell culture

[^pivonello2021]: doi:10.3389/fendo.2021.662865 · Pivonello R et al. · *Front Endocrinol* 2021 · Phase 2 open-label · n=34 · Cushing syndrome; relacorilant 250–400 mg/day; 63.6% BP response, 50% glycemic response; no antiprogesterone effects or hypokalemia; GR antagonist without mifepristone's off-target PR effects

[^viho2023]: doi:10.1530/JOE-22-0263 · Viho EMG et al. · *J Endocrinol* 2023 · preclinical (mouse) · relacorilant antagonizes peripheral GR with modest HPA axis disinhibition vs mifepristone; prevents hyperinsulinemia and immunosuppression; selective peripheral action confirmed

[^gregory2020]: doi:10.1016/j.metabol.2020.154246 · Gregory S et al. · *Metabolism* 2020 · systematic review · 29 studies · 11β-HSD1 inhibitors in diabetes, obesity, metabolic syndrome, Alzheimer's; one Phase 2 trial met HbA1c endpoint; metabolic syndrome and AD trials failed primary endpoints; translation challenging

[^harvanek2021]: doi:10.1038/s41398-021-01735-7 · Harvanek ZM et al. · *Transl Psychiatry* 2021 · observational · n=444 · cumulative stress associated with accelerated GrimAge; psychological resilience moderated the effect; cortisol/ACTH physiology correlated with DNAm aging acceleration

[^holleman2026]: doi:10.1016/j.yfrne.2026.101246 · Holleman J et al. · *Front Neuroendocrinol* 2026 · systematic review · 54 studies (91% cross-sectional) · elevated cortisol tended to associate with Alzheimer's disease fluid and neuroimaging biomarkers; associations varied by measurement methodology; longitudinal evidence sparse; sex-differential analysis in only 6.8% of studies

[^montoliu2020]: doi:10.3389/fpsyg.2020.00983 · Montoliu T, Hidalgo V, Salvador A · *Front Psychol* 2020 · observational · n=79 (ages 59–81) · personality traits modulate HPA functioning in older adults; higher neuroticism → greater CAR and diurnal cortisol slope disruption; conscientiousness and extraversion protective for normal cortisol patterns
