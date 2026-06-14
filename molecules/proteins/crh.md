---
type: protein
aliases: [CRH, corticotropin-releasing hormone, corticotropin-releasing factor, CRF]
uniprot: P06850
ncbi-gene: 1392
hgnc: 2355
ensembl: ENSG00000147571
genage-id: null
is-noncoding-rna: false
pathways:
  - "[[pathways/hpa-axis]]"
  - "[[pathways/pomc-processing]]"
hallmarks:
  - "[[hallmarks/altered-intercellular-communication]]"
  - "[[hallmarks/chronic-inflammation]]"
sens-categories: []
mouse-ortholog: Crh
druggability-tier: 3
gtex-aging-correlation: "CRH is expressed predominantly in hypothalamic PVN and placenta; reliable GTEx tissue-by-age correlation data are not available for hypothalamic-specific subregions. #gap/needs-tissue-expression-data"
mr-causal-evidence: not-tested
caused-by: []
causes:
  - "[[molecules/proteins/pomc]]"
complex-subunits: []
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Canonical IDs confirmed against UniProt REST (P06850), NCBI Gene (1392), HGNC REST (2355), Ensembl (ENSG00000147571), mouse ortholog NCBI Gene (12918). Preprohormone feature boundaries confirmed against UniProt feature annotations. Schwandt 2016 verified against full PDF (PMC5061889): n=44 enrolled/39 completed confirmed, dex-CRF HPA blockade confirmed, alcohol craving null confirmed; fMRI footnote corrected (amygdala attenuation to fearful faces was significant, not null). Coric 2010 verified against PubMed abstract (PMID 20455246): n=260 confirmed, primary outcome is HAM-A change score (not response rate), footnote corrected to reflect primary vs secondary distinction and 2:2:1 randomization ratio. Muglia 1995 verified against PubMed abstract (PMID 7830793): normal growth/fertility/longevity confirmed; closed-access Nature paper, abstract-level only for this source. R25 supersession check: no newer RCTs or meta-analyses found on CRHR1 antagonists in aging context through 2026-06-14."
---

# CRH (corticotropin-releasing hormone)

**Corticotropin-releasing hormone (CRH)** — also called corticotropin-releasing factor (CRF) — is the 41-amino-acid neuropeptide that sits at the apex of the [[pathways/hpa-axis|HPA axis]]. Secreted by parvocellular neurons of the hypothalamic paraventricular nucleus (PVN), it is the primary secretagogue for ACTH release from anterior pituitary corticotrophs and therefore the proximal driver of the entire cortisol cascade. In aging, CRH is primarily relevant as a circuit node — its dysregulation in age-related stress pathophysiology and depression/neurodegeneration interfaces is well-documented mechanistically, but CRH itself is not a validated intervention target for aging. CRH1-receptor antagonists reached clinical trials for depression and anxiety and failed to meet primary endpoints. This page frames CRH's aging relevance honestly as circuitry context, not therapeutic leverage.

## Identity

- **UniProt:** P06850 (CRH_HUMAN)
- **NCBI Gene:** 1392
- **HGNC:** 2355
- **Ensembl:** ENSG00000147571
- **Gene symbol:** CRH (chromosome 8q13.1)
- **RefSeq mRNA / protein:** NM_000756.4 / NP_000747.1
- **GenAge:** not listed (CRH does not meet GenAge curation criteria for a direct aging longevity gene; aging relevance is circuit-mediated rather than direct lifespan genetics) #gap/needs-canonical-id confirmation
- **Mouse ortholog:** Crh (NCBI Gene 12918; ~80–85% sequence identity in the mature peptide region)
- **Preprohormone length:** 196 amino acids; signal peptide 1–24; prodomain 25–153; mature CRH 154–194 (41 aa); C-terminal is amidated (Ile-NH₂, position 194)

## Structure and processing

CRH is a 41-amino-acid amidated peptide. The *CRH* gene encodes a 196-aa preprohormone; after co-translational signal peptide cleavage (residues 1–24) and endoproteolytic cleavage of the prodomain, the 41-aa mature peptide is liberated. The C-terminus is amidated by PAM (peptidylglycine α-amidating monooxygenase) — an amide group that is required for full receptor binding activity [^hauger2008]. The secreted mature peptide has a predicted α-helical secondary structure that engages class B (secretin-family) G-protein-coupled receptors CRHR1 and CRHR2.

**CRH-binding protein (CRHBP):** A secreted glycoprotein that binds CRH with high affinity in portal blood and brain, blocking its receptor access. CRHBP acts as a circulating buffer moderating the effective CRH concentration reaching pituitary corticotrophs. Its expression is modulated by estrogen and stress, adding a layer of post-secretory regulation that is distinct from transcriptional control of CRH itself [^hauger2008].

## Receptor pharmacology

CRH signals through two receptors:

| Receptor | Gene | Major expression | Coupling | Role in HPA axis |
|---|---|---|---|---|
| CRHR1 | CRHR1 | Anterior pituitary corticotrophs, amygdala, cerebral cortex | Gs → cAMP → PKA | Primary ACTH secretagogue signal; dominant stress-axis receptor |
| CRHR2 | CRHR2 | Lateral septum, dorsal raphe, heart, skeletal muscle, vasculature | Gs → cAMP | Modulatory; stress recovery and energy balance; less ACTH-secretagogue activity |

At the anterior pituitary, CRH binding to CRHR1 activates the Gs–cAMP–PKA cascade, driving *POMC* transcription and ACTH release in synergy with AVP (arginine vasopressin) acting at V1b receptors. ACTH release triggers adrenal glucocorticoid synthesis; the downstream cascade is detailed on [[pathways/hpa-axis]] and [[pathways/pomc-processing]].

## Role in the HPA axis circuit

CRH is the apex input in the three-node HPA cascade:

```
Hypothalamic PVN → CRH → Anterior pituitary corticotrophs → ACTH (from POMC) → Adrenal cortex → Cortisol
```

CRH secretion is stimulated by physical/psychological stressors (routed via amygdala and brainstem), proinflammatory cytokines (IL-1β, IL-6, TNF-α — immune-to-HPA activation), and the circadian clock (driving the cortisol awakening response). It is inhibited by negative feedback from cortisol acting on glucocorticoid receptors (GR, [[molecules/proteins/nr3c1|NR3C1]]) in the PVN itself and from CRH's own autoinhibition [^swaab2005].

The full circuit architecture — including ACTH biosynthesis from [[molecules/proteins/pomc|POMC]], adrenal steroidogenesis, pre-receptor cortisol metabolism by [[molecules/proteins/hsd11b1-hsd11b2|HSD11B1/HSD11B2]], and cortisol action via NR3C1/NR3C2 — is documented on [[pathways/hpa-axis]]. This page covers CRH specifically.

## Aging-relevant biology

**Framing caveat:** The aging-relevance of CRH is primarily indirect — mediated through the downstream cortisol cascade and circuit-level HPA dysregulation, rather than through CRH's own biology changing in isolation. CRH neuron activity and HPA set-point in normal healthy aging show modest, context-dependent changes that are much smaller than those seen in depression, Alzheimer's disease, or Cushing syndrome. The following is mechanistic/circuit context; the main aging biology lives on [[pathways/hpa-axis]].

### CRH neuron changes with age: modest in healthy aging, amplified in disease states

In the human hypothalamus, the number and soma size of CRH-immunoreactive PVN neurons show modest increases during aging in neurologically healthy individuals, but substantially larger increases in Alzheimer's disease and major depression — reflecting the greater degree of HPA-axis dysregulation in those conditions versus normal aging [^swaab2005]. Interpretation requires distinguishing three populations:

1. **Healthy aging** — modest CRH/HPA activation; diurnal cortisol slope flattens; blunted negative-feedback sensitivity
2. **Depression in older adults** — substantially elevated HPA activation; post-dexamethasone cortisol markedly elevated; a systematic review and meta-analysis of 20 studies (n > 1,000 subjects; Belvederi Murri et al. 2014) found effect sizes for DST non-suppression in older depressed patients were approximately 3x larger than in younger depressed patients [^belvederi2014]
3. **Alzheimer's disease** — CRH is reduced in the cerebral cortex of AD patients (UniProt annotation, based on immunoreactive loss in post-mortem tissue) despite paradoxical PVN activation; the loss of cortical CRH may reflect local neurodegeneration rather than PVN output changes

These three distinct patterns make it important not to conflate "aging" CRH changes with disease-state changes. #gap/contradictory-evidence

### HPA negative feedback blunting with age

The key age-related functional change is **blunting of the negative-feedback loop**: older individuals show less suppression of cortisol and ACTH after dexamethasone challenge, and a flatter diurnal cortisol slope despite similar or modestly elevated 24-hour cortisol area-under-curve compared with young adults [^buckley2005]. This negative-feedback blunting is consistent with impaired GR sensitivity in the PVN and pituitary. Whether this involves reduced CRH sensitivity to cortisol feedback, reduced GR density in the PVN, or upstream hippocampal circuit changes remains unresolved [^swaab2005]. #gap/no-mechanism

### CRH, stress, and the glucocorticoid cascade hypothesis

The [[pathways/hpa-axis]] page documents the glucocorticoid cascade hypothesis (Sapolsky 1986) in full. CRH is the upstream input to this proposed self-amplifying loop: chronic stress → elevated CRH → elevated cortisol → hippocampal damage → impaired GR negative feedback → further CRH disinhibition → progressive cortisol elevation. The hypothesis's strong version (cortisol driving irreversible hippocampal neurodegeneration in humans) has not been confirmed, and the CRH-first driver interpretation is not directly testable in humans — CRH is measured only via surrogate endpoints (HPA stimulation tests, CSF CRH in select cohorts). The contribution of CRH-level changes specifically to this loop, versus downstream cortisol dynamics, is not disentangled.

### CRH in Alzheimer's disease: dual roles

Post-mortem studies have consistently found **reduced cortical CRH immunoreactivity** in Alzheimer's disease patients, consistent with loss of CRH-expressing interneurons in the cortex. In vitro data suggest CRH may have **neuroprotective** properties against Aβ toxicity — CRH stabilized calcium homeostasis and reduced Aβ-induced neurotoxicity in primary neuronal cultures via a cAMP-dependent mechanism [^pedersen2001]. Whether this cortical neuroprotective CRH role is mechanistically distinct from the hypothalamic-PVN stress axis is uncertain. CRH receptor abnormalities in AD are also reported. These observations suggest CRH has brain functions beyond the HPA axis, but the net effect of CRH changes in AD pathogenesis is not established. #gap/no-mechanism #gap/needs-human-replication

### CRH-deficient mice: glucocorticoid dispensability in adult life

A genetic loss-of-function model is informative: CRH-knockout mice (generated by targeted ES cell mutation) showed postnatal glucocorticoid deficiency due to absent ACTH drive, yet exhibited **normal growth, fertility, and longevity** postnatally, despite severe glucocorticoid insufficiency [^muglia1995]. This indicates that the glucocorticoid stress response mediated by CRH is critical in utero (for fetal organ maturation) but not essential for normal adult lifespan under unstressed vivarium conditions. The relevance to the human stress–aging interface is limited by the unstressed nature of laboratory housing. #gap/needs-human-replication

## Pharmacology: CRHR1 antagonists and their clinical failures

CRH1-receptor antagonists were developed primarily as anxiolytic/antidepressant candidates on the hypothesis that HPA hyperactivity drives depression and anxiety. The class has a consistent record of Phase 2 clinical failures:

| Compound | Indication tested | Key trial outcome |
|---|---|---|
| Pexacerfont (BMS-562086) | Generalized anxiety disorder | Phase 2b; n=260 randomized (2:2:1: pexacerfont : placebo : escitalopram); double-blind active-comparator trial; primary outcome (HAM-A change from baseline at week 8): pexacerfont **failed to separate from placebo**; escitalopram separated from placebo at weeks 1, 2, 3, 6, and 8 (p<0.02); secondary response rates: 42% pexacerfont vs. 42% placebo vs. 53% escitalopram [^coric2010] |
| Verucerfont | Alcohol-dependent anxious women | Phase 2; n=44 enrolled/39 completed; potently blocked HPA axis response to dex-CRF test; **alcohol craving (primary outcome) unaffected**; right amygdala response to fearful faces attenuated (significant fMRI finding); alcohol-cue brain responses mixed; clinical anti-craving endpoint negative [^schwandt2016] |
| Antalarmin | Animal model lead compound | Preclinical only; no human efficacy data; used as a tool compound to establish that CRH1 blockade suppresses stress responses |

**Reasons for failure.** Several hypotheses have been proposed: (1) CRHR1 blockade may adequately suppress HPA but the HPA pathway is not the primary driver of clinical depression/anxiety (dissociation between neuroendocrine biomarker and clinical response); (2) CRHBP and CRHR2 compensatory mechanisms; (3) inadequate patient stratification (patients were not selected for HPA hyperactivation at baseline, diluting any treatment signal). None have been validated in a prospective enrichment trial. **No CRHR1 antagonist has received regulatory approval for any indication.**

**Aging-context druggability assessment — tier 3.** CRHR1 antagonists are high-quality pharmacological probes (antalarmin and successors), but the class failed clinical proof-of-concept in depression/anxiety — the closest human stress-aging indication. No aging-specific trial exists or is active. The separation between neuroendocrine biomarker efficacy and clinical outcomes undermines confidence that CRHR1 blockade would translate to geroprotection even if a trial were attempted. Tier 1 would require an approved aging indication; tier 2 requires a validated clinical probe with positive Phase 2 data in any indication. CRHR1 antagonists cleared neither bar in the relevant disease context. Tier 3 (predicted druggable but no validated human probe) is appropriate.

**Note on CRHR2.** CRHR2 is expressed in cardiovascular and metabolic tissues and has attracted interest as a mediator of urocortin effects on cardiac protection and energy balance, but this is distinct from CRH's own HPA function and has no aging-validated pharmacology. #gap/no-mechanism

## Evidence-quality table

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — CRH/CRHR1/ACTH axis is among the most conserved neuroendocrine circuits in vertebrates |
| Phenotype conserved in humans? | Partial — HPA age-related changes documented in humans; cortical CRH loss in AD documented; causal role of CRH changes per se not established |
| Replicated in humans? | Not directly — CRH is rarely measured directly in aging humans (CSF access required for CNS CRH); surrogate HPA endpoint data replicated across cohorts |

## Extrapolation notes: mouse vs. human

The CRH-knockout mouse [^muglia1995] provides valuable proof-of-concept that the adult stress-glucocorticoid axis is not required for normal lifespan under vivarium conditions, but this result does not translate cleanly to human aging because: (1) laboratory mice are not subject to the psychosocial stressors that characterize human aging; (2) the CRH-knockout model removes CRH entirely, not just the age-related modulation of it; (3) laboratory lifespan is much shorter than the time course over which HPA dysregulation would plausibly accumulate damage in humans. The Romeo et al. 2007 data on developmental CRH expression [^romeo2007] inform early-life programming but are not directly relevant to aging.

## Limitations and gaps

- #gap/needs-tissue-expression-data — GTEx v2 aging correlations not available for hypothalamic PVN subregions; CRH expression in relevant aging tissues cannot be extracted from bulk GTEx data.
- #gap/no-mechanism — The cellular mechanism by which age-related changes in CRH neuron activity occur (whether loss of hormonal inputs, intrinsic neuronal changes, or altered afferent circuit drive) is not resolved.
- #gap/contradictory-evidence — The pattern of CRH/PVN changes in healthy aging versus depression versus Alzheimer's disease is qualitatively different; conflation of these three contexts is a common source of interpretive error in the literature.
- #gap/needs-human-replication — Direct CRH measurement in human aging (requiring CSF samples) is rarely done; virtually all aging HPA data are surrogate cortisol measurements rather than direct CRH quantification.
- #gap/needs-canonical-id — GenAge listing for CRH not confirmed; the gene may not meet HAGR curation criteria.
- The failed CRHR1 antagonist clinical trials (pexacerfont, verucerfont) do not rule out circuit-level CRH contributions to aging — they only establish that CRHR1 blockade does not treat depression or anxiety as assessed by those trial designs. An aging-specific enriched trial has not been attempted.
- CRHR2's role in aging biology is essentially unexplored; it is a distinct receptor from CRHR1 with different tissue distribution and may mediate cardiovascular and metabolic aspects of CRH action that are relevant to age-related disease. #gap/no-mechanism

## Cross-references

- [[pathways/hpa-axis]] — full HPA axis circuit; canonical IDs, cortisol signaling mechanisms, aging biology, druggability table
- [[pathways/pomc-processing]] — ACTH biosynthesis from POMC in pituitary corticotrophs (the downstream target of CRH)
- [[molecules/proteins/pomc]] — POMC prohormone; CRH drives its transcription and processing in pituitary corticotrophs
- [[molecules/proteins/nr3c1]] — glucocorticoid receptor; mediates cortisol negative feedback to CRH neurons in PVN (#stub — concurrent seed)
- [[molecules/proteins/nr3c2]] — mineralocorticoid receptor; high-affinity cortisol sensor at basal concentrations (#stub — concurrent seed)
- [[molecules/proteins/hsd11b1-hsd11b2]] — pre-receptor cortisol metabolism enzymes (#stub — concurrent seed)
- [[hallmarks/altered-intercellular-communication]] — cortisol as a long-range endocrine signal; CRH is the upstream hormonal driver
- [[hallmarks/chronic-inflammation]] — HPA axis modulates inflammaging via GR transrepression of NF-κB
- [[hypotheses/glucocorticoid-cascade-hypothesis]] — contested causal hypothesis in which CRH-driven cortisol plays a self-amplifying role in aging (#stub)

## Footnotes

[^swaab2005]: doi:10.1016/j.arr.2005.03.003 · Swaab DF, Bao A-M, Lucassen PJ · *Ageing Research Reviews* 2005 · review · n=N/A · 789 citations · comprehensive review of human brain stress system in depression and neurodegeneration; CRH PVN changes across healthy aging, Alzheimer's disease, and major depression; modest CRH neuron changes in healthy aging vs. substantial changes in disease states; HPA hyperactivity in depression likely bidirectional

[^belvederi2014]: doi:10.1016/j.psyneuen.2013.12.004 · Belvederi Murri M et al. · *Psychoneuroendocrinology* 2014 · systematic review and meta-analysis · 20 studies, 43 comparisons · 323 citations · older depressed patients showed substantially greater HPA dysregulation than younger depressed patients; post-dexamethasone cortisol effect size 3.22 in older vs. younger group; model: human; design: meta-analysis of observational studies

[^buckley2005]: doi:10.1176/appi.ajgp.13.5.344 · Buckley TM, Schatzberg AF · *Am J Geriatr Psychiatry* 2005 · review · n=N/A · age-related HPA axis rhythm changes parallel sleep disruption; negative-feedback blunting (DST non-suppression) documented in aging; pharmacological normalization of nocturnal CRH proposed to improve memory consolidation in older adults

[^muglia1995]: doi:10.1038/373427a0 · Muglia L, Jacobson L, Dikkes P, Majzoub JA · *Nature* 1995 · PMID 7830793 · vol. 373, pp. 427–432 · in-vivo (transgenic mouse; CRH-knockout by targeted ES cell mutation) · 535 citations · CRH-deficient mice show normal postnatal growth, fertility, and longevity despite severe glucocorticoid insufficiency; establishes that CRH-driven glucocorticoid axis is critical in utero (lung maturation) but not required for unstressed adult lifespan; model: Mus musculus (background not specified in abstract; closed-access; abstract-level verification only) #gap/no-fulltext-access

[^pedersen2001]: doi:10.1006/nbdi.2001.0395 · Pedersen WA et al. · *Neurobiology of Disease* 2001 · in-vitro (primary neuronal cultures + transgenic mice) · 86 citations · CRH demonstrated neuroprotection against Aβ toxicity via cAMP-dependent calcium homeostasis stabilization; cortical CRH loss in AD brains; suggests CRH has brain functions beyond the HPA stress axis; model: rat primary neurons + mtAPP transgenic mouse

[^hauger2008]: doi:10.1016/j.ejphar.2007.11.075 · Hauger RL et al. · *European Journal of Pharmacology* 2008 · review · n=N/A · synaptic physiology of central CRH system; CRHR1 and CRHR2 receptor pharmacology; CRH-binding protein as circulating regulator; C-terminal amidation required for full receptor activity; CRHR1 vs. CRHR2 expression and coupling differences

[^coric2010]: doi:10.1002/da.20695 · Coric V et al. · *Depression and Anxiety* 2010 · PMID 20455246 · randomized double-blind active-comparator and placebo-controlled trial · n=260 randomized in 2:2:1 ratio (pexacerfont : placebo : escitalopram) · primary outcome: mean change from baseline to week 8 on HAM-A total score — pexacerfont 100 mg/day failed to separate from placebo; escitalopram separated at weeks 1, 2, 3, 6, and 8 (p<0.02); secondary response rates: 42% pexacerfont, 42% placebo, 53% escitalopram; GAD indication; establishes CRHR1 blockade does not produce clinical anxiolysis in unselected GAD population

[^schwandt2016]: doi:10.1038/npp.2016.61 · Schwandt ML et al. · *Neuropsychopharmacology* 2016 · PMC5061889 · randomized double-blind placebo-controlled trial · n=44 enrolled, 39 completed (verucerfont n=18, placebo n=21) · verucerfont 350 mg/day for 3 weeks (after 1-week single-blind placebo lead-in) · verucerfont potently blocked HPA axis response to dex-CRF test (both cortisol and ACTH; p<0.005 and p=0.03 treatment effects); alcohol craving (primary outcome) left unaffected on both script and Trier/CR challenge procedures; right amygdala BOLD response to fearful faces was significantly attenuated (p=0.03 FWE-corrected); responses to alcohol-associated stimuli showed mixed/increased activation in some brain regions; demonstrates pharmacodynamic CRHR1 engagement (neuroendocrine) without clinical anti-craving efficacy; model: human (anxious alcohol-dependent women ages 21–65)

[^romeo2007]: doi:10.1159/000102950 · Romeo RD et al. · *Neuroendocrinology* 2007 · in-vivo (rat; prepubertal vs. adult) · prepubertal males show greater CRH mRNA expression in PVN following acute stress than adults; developmental context; not directly relevant to adult aging but informs developmental programming of the HPA set-point
