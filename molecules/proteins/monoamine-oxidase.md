---
type: protein
aliases: [MAO, MAO-A, MAOA, MAO-B, MAOB, monoamine oxidase, amine oxidase flavin-containing]
uniprot: P27338          # MAOB (primary; aging-relevant isoform)
ncbi-gene: 4129          # MAOB human
hgnc: 6834               # MAOB
ensembl: ENSG00000069535  # MAOB
genage-id: null           # neither MAOA nor MAOB listed in GenAge-human Build 21 (confirmed 2026-06-14)
complex-subunits: ["P21397 (MAOA)"]  # MAOA UniProt; family-page convention — see Identity table
mouse-ortholog: Maob (MAOB; NCBI Gene 17162); Maoa (MAOA; NCBI Gene 17161)
pathways: ["[[monoamine-catabolism]]", "[[dopaminergic-signaling]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]"]
sens-categories: []
druggability-tier: 1   # FDA-approved MAO-B inhibitors (selegiline, rasagiline, safinamide) for Parkinson's disease — an aging-relevant neurodegenerative indication. Aging-context tier; see § Pharmacology
mr-causal-evidence: not-tested  # Mendelian randomization on MAOB activity vs aging outcomes not identified in literature search to 2026-06-14
gtex-aging-correlation: null    # #gap/needs-expression-data — GTEx aging correlation for MAOB not queried; postmortem PET evidence documents age-related increase (see body)
caused-by: []
causes: []
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Canonical IDs (UniProt P27338/P21397, NCBI Gene 4129/4128, HGNC 6834/6833, Ensembl ENSG00000069535/ENSG00000189221, mouse orthologs Maob/17162 + Maoa/17161) confirmed against live UniProt REST, Ensembl REST, and NCBI eutils APIs. Tong 2013 (PMID:23403377) and Fowler 1997 (PMID:9330975) cross-checked against PubMed abstracts + Crossref metadata (full PDFs closed-access/download-failed). Chun 2020 (PMID:33199896) cross-checked against PubMed abstract. Knoll 1989 (PMID:2505007) cross-checked against PubMed abstract. ADAGIO/Olanow 2009 (PMID:19776408) cross-checked against PubMed abstract. Corrections applied: (1) hgnc: field normalised to bare number 6834; (2) Tong 2013 footnote n corrected from 'not specified' to n=38; (3) Knoll 1989 footnote corrected: n=66/group (total 132), dosing frequency corrected from 'every other day' to 'three times a week s.c.', DOI confirmed and added. Literature-recency search (R25) performed 2026-06-14: no superseding meta-analyses or large RCTs on MAO-B inhibition for aging/longevity identified; two 2024–2025 MAs confirm symptomatic PD benefit (consistent with tier-1 framing) but address UPDRS endpoints, not longevity or neuroprotection."
---


# Monoamine Oxidase (MAOA / MAOB)

> **Naming note:** This page covers both isoforms as a family, with **MAO-B (MAOB) as the primary page protein** (aging-relevant isoform; outer-mitochondrial-membrane H₂O₂ source that rises with age). MAO-A (MAOA) is covered in the identity table and isoform section. The wikilinks `[[maoa]]`, `[[maob]]`, `[[mao-a]]`, `[[mao-b]]`, and `[[monoamine-oxidase]]` all resolve here. If individual protein pages are later seeded for MAOA or MAOB, this family page should be retitled and cross-linked per the [[foxo-transcription-factors]] / [[mitofusins]] precedent.

The monoamine oxidases are **FAD-dependent outer mitochondrial membrane (OMM) enzymes** that catalyse the oxidative deamination of monoamine neurotransmitters and dietary amines, generating an aldehyde intermediate, **hydrogen peroxide (H₂O₂)**, and ammonia. Two isozymes encoded by adjacent genes on chromosome Xp11.3 perform this reaction with complementary but overlapping substrate selectivity: **MAO-A** (serotonin/norepinephrine-preferring) and **MAO-B** (phenylethylamine/benzylamine-preferring); both degrade dopamine and tyramine. In aging, **MAO-B is the more consequential isoform**: it rises steeply across the human lifespan in astrocytes and glia, generating increasing H₂O₂ that drives oxidative stress in surrounding neurons — connecting this enzyme mechanistically to the [[hallmarks/mitochondrial-dysfunction]] and [[hallmarks/chronic-inflammation]] hallmarks and to the neuropathology of [[phenotypes/parkinsons-disease]] and Alzheimer's disease. MAO-B is the target of FDA-approved inhibitors selegiline (deprenyl), rasagiline, and safinamide for Parkinson's disease. Their effect on the aging rate itself remains contested.

---

## Identity

| Feature | MAOA | MAOB |
|---|---|---|
| UniProt | P21397 (AOFA_HUMAN) | P27338 (AOFB_HUMAN) |
| NCBI Gene (human) | 4128 | 4129 |
| HGNC | HGNC:6833 | HGNC:6834 |
| Ensembl | ENSG00000189221 | ENSG00000069535 |
| Length | 527 amino acids | 520 amino acids |
| Chromosome | Xp11.3 | Xp11.3 |
| Mouse ortholog | Maoa (Gene ID: 17161) | Maob (Gene ID: 17162) |
| GenAge-human | not listed | not listed |
| Cofactor | FAD (covalently bound, Cys406-FAD thioether) | FAD (covalently bound, Cys397-FAD thioether) |
| Membrane topology | Outer mitochondrial membrane (OMM); C-terminal anchor | Same |
| Key inhibitors (selective) | Clorgyline (irreversible); moclobemide (reversible) | Selegiline/deprenyl (irreversible, low dose); rasagiline (irreversible); safinamide (reversible) |

Both MAOA and MAOB are **Swiss-Prot (manually reviewed)** UniProt entries. Both genes are on the **X chromosome at Xp11.3**, arranged in tandem head-to-tail orientation roughly 10–20 kb apart, apparently arising by duplication of a common ancestor. They share ~70% amino acid sequence identity overall.

**#gap/needs-canonical-id** — GenAge-human (Build 21, confirmed 2026-06-14) does not list either MAOA or MAOB as aging-relevant genes. This likely reflects the HAGR database's focus on genetic manipulations that alter lifespan rather than enzymatic changes that correlate with aging; the absence should not be interpreted as a lack of aging relevance.

---

## Reaction mechanism

Both isoforms catalyse the same oxidative deamination reaction on the OMM:

```
R-CH₂-NH₂ + O₂ + H₂O  →  R-CHO + H₂O₂ + NH₃
```

The **FAD cofactor** accepts the amine-derived electrons, producing FADH₂. Molecular O₂ reoxidises FADH₂, restoring FAD and producing **H₂O₂** as an obligate byproduct. The aldehyde intermediate is then processed by aldehyde dehydrogenases to the corresponding acid (e.g., DOPAC from dopamine, 5-HIAA from serotonin, VMA from norepinephrine).

**The H₂O₂ production step is the central aging-relevant feature.** MAO-B is localised to the OMM and releases H₂O₂ into both the intermembrane space and the cytosol. Because the OMM is proximate to the electron transport chain, elevated MAO-B activity with age constitutes a local source of ROS adjacent to the most ROS-sensitive cellular components.

---

## Substrate and inhibitor selectivity

| Substrate | MAO-A preference | MAO-B preference | Shared |
|---|---|---|---|
| Serotonin | Primary (selective) | | |
| Norepinephrine | Primary (selective) | | |
| Phenylethylamine (PEA) | | Primary (selective) | |
| Benzylamine | | Primary (selective) | |
| Dopamine | | | Both (roughly equal) |
| Tyramine | | | Both (MAO-A at low concentrations; MAO-B at high) |

The substrate split is of clinical importance: MAO-A inhibition risks the **"cheese reaction"** (tyramine pressor crisis from dietary tyramine, undetoxified when MAO-A is blocked, → unopposed sympathomimetic surge → hypertensive emergency). Selective MAO-B inhibitors at approved doses for PD do not carry this risk at normal dietary tyramine levels (low-dose selegiline ≤10 mg/day; rasagiline ≤1 mg/day), though the selectivity becomes partial at higher doses or with high dietary tyramine loads.

---

## Aging relevance

### MAO-B rises with age in the brain

The most directly aging-relevant property of MAO-B is its **progressive increase in expression and activity across the human lifespan**, particularly in astrocytes and glia. Two complementary lines of evidence establish this:

1. **Postmortem human brain:** Postmortem immunoblot studies confirm MAO-B protein levels increase continuously from infancy to senescence; MAO-A levels are higher in infants but are overtaken by MAO-B as MAO-B rises more steeply — "MAO-B levels kept increasing steadily to senescence" in frontal, temporal, and parietal cortex and in striatum [^tong2013]. The postmortem data extend an earlier finding from Carlsson et al. (1980) that MAO-B activity increases in multiple brain regions with normal aging [^carlsson1980].

2. **PET imaging in living humans:** Fowler et al. (1997) used [¹¹C]L-deprenyl-D₂ PET in 21 healthy subjects aged 23–86 and found MAO-B activity significantly increased (p < 0.004) in all brain regions examined except the cingulate gyrus, confirming that the postmortem finding reflects a genuine in-vivo aging change rather than a post-mortem artifact [^fowler1997]. A 2022 first-in-humans evaluation of ¹⁸F-SMBT-1 (a novel fluorinated MAO-B PET tracer for reactive astrogliosis) confirmed the tracer "accurately captured known age-related increases in MAO-B expression" and correlated strongly with established MAO-B distribution patterns across 77 participants [^villemagne2022].

The mechanistic inference is that rising MAO-B activity generates a higher chronic H₂O₂ flux in the aging brain, contributing to the cumulative oxidative burden postulated by the [[hypotheses/free-radical-theory-of-aging]] — though the causal weight of this specific route is debated in the context of that theory's superseded status as a *unifying* aging explanation (see [[hypotheses/free-radical-theory-of-aging]] for the broader antioxidant-trial null-result literature).

| Dimension | Status |
|---|---|
| MAO-B rise with age in humans? | yes — postmortem + in-vivo PET converge |
| Causal for aging pathology (MAO-B → neurodegeneration)? | partial — Alzheimer models; see § below |
| Replicated target for longevity in humans? | no — no powered human trial of lifespan #gap/needs-human-replication |

### Astrocytic MAO-B, H₂O₂, and Alzheimer-like pathology

A major mechanistic advance came from Chun et al. (2020, *Nature Neuroscience*) using a novel chemogenetic model that converts mild reactive astrocytes into severe reactive astrocytes. Severe reactive astrocytes accumulated **excess MAO-B protein**, which produced **H₂O₂ as an obligate byproduct**; the elevated H₂O₂ caused GABA synthesis (from putrescine catabolism), glial activation, tauopathy, neuronal death, brain atrophy, cognitive impairment, and eventual death. Treatment with a potent H₂O₂ scavenger (AAD-2004) largely prevented these features. Crucially, validation in human AD brain tissue confirmed elevated MAO-B in severe reactive astrocytes relative to controls [^chun2020]. This study establishes a **MAO-B → H₂O₂ → neurodegeneration** mechanistic axis in a model that recapitulates human AD neuropathology.

Separately, sembragiline — a selective MAO-B inhibitor developed for Alzheimer's disease — was characterised as protecting against neuronal loss and reducing ROS formation and reactive astrogliosis in transgenic AD animal models [^borroni2017]. Phase 2 trials of sembragiline in Alzheimer's disease (NCT01677754) showed no benefit on primary cognitive endpoints in patients with mild-to-moderate AD, suggesting either that MAO-B inhibition in established disease is insufficient, that the patient selection was too late, or that the hypothesis needs refinement. #gap/contradictory-evidence

A 2026 clinical study of 55 healthy older adults (ages 60–79) found that reduced dopamine integrity — itself downstream of MAO-B-driven dopamine degradation in the nigrostriatal system — was the strongest predictor of lower cognitive performance, with reduced glial function potentially underlying dopaminergic losses [^crine2026]. This correlational evidence links the MAO-B age-rise to cognitive aging trajectories in healthy individuals, extending the mechanistic relevance beyond frank neurodegeneration.

### MAO-B and Parkinson's disease

**MAO-B is the enzyme responsible for metabolising MPTP → MPP⁺**, the reactive cation that selectively destroys dopaminergic neurons in the substantia nigra pars compacta (SNc) and produces experimental parkinsonism. This MPTP pathway helped establish MAO-B as a pharmacological target and provided the rationale for clinical trials of MAO-B inhibitors in Parkinson's disease neuroprotection. For the full Parkinson's disease page including genetics (PINK1, Parkin, SNCA, LRRK2) and dopaminergic neurodegeneration biology, see [[phenotypes/parkinsons-disease]].

In the aging context, the same progressive dopaminergic neuron loss that produces PD in a pathological extreme — ~70–80% SNc cell depletion at symptom onset — may occur as a quantitatively smaller but qualitatively similar process during normal aging: striatal dopamine synthesis and dopamine transporter (DAT) availability decline at ~8–10% per decade in healthy adults, as documented by PET imaging. MAO-B inhibition can attenuate this decline by reducing dopamine degradation, but whether this affects the aging rate or merely symptom timing is unknown.

### MAO-A and depression/aging

MAO-A preferentially degrades serotonin and norepinephrine, making it the primary enzymatic target relevant to mood regulation and the pharmacology of antidepressant MAO inhibitors. MAO-A levels appear relatively stable or modestly increasing with age in human brain [^tong2013]. In aging biology, MAO-A is most relevant to:

- **Age-associated depression** — reduced central serotonin/norepinephrine tone from increased MAO-A turnover + declining neurotransmitter synthesis
- **Inflammation-driven depressive phenotypes** — MAO-A is upregulated by pro-inflammatory cytokines (IL-4, IFN-γ) and may mediate the serotonin depletion seen in neuroinflammation

The serotonin–aging–depression link intersects with catecholamine aging biology documented on [[molecules/metabolites/catecholamines]]; however, quantitative claims about MAO-A aging changes are less well-characterized than those for MAO-B. #gap/needs-replication

---

## Pharmacology

### MAO-B inhibitors (aging-context primary)

| Drug | Selectivity | Mechanism | FDA status | Indication | Aging relevance |
|---|---|---|---|---|---|
| Selegiline ((-)-deprenyl) | MAO-B selective (≤10 mg/day) | Irreversible — acetylenic propargylamine group forms covalent adduct with FAD N5 | FDA-approved | Parkinson's disease (adjunct to levodopa); major depressive disorder (transdermal; non-selective at therapeutic patch doses) | Preclinical rodent-lifespan claims (see below); dopaminergic neuroprotection |
| Rasagiline | MAO-B selective | Irreversible propargylamine | FDA-approved | Early and advanced PD (mono/adjunct) | ADAGIO delayed-start RCT — contested neuroprotection signal |
| Safinamide | MAO-B selective (reversible) + sodium-channel blocker | Dual mechanism; reversible MAO-B inhibition | FDA-approved | PD adjunct to levodopa | Combination MAO-B/anti-glutamatergic; no longevity data |

**Druggability-tier-1 rationale:** All three FDA-approved MAO-B inhibitors are approved for Parkinson's disease — an age-strongly-associated neurodegenerative indication. Parkinson's disease incidence increases ~10-fold between ages 50 and 80 and is clinically inseparable from aging biology. The aging-context `druggability-tier: 1` therefore applies: a clinical drug exists and is used for an aging-relevant indication that directly engages this protein. This is distinct from the aging-longevity indication (where human evidence is absent); see § Selegiline and rodent lifespan below.

### MAO-A inhibitors

| Drug | Class | Mechanism | Status | Cheese-reaction risk |
|---|---|---|---|---|
| Phenelzine | Non-selective irreversible | Hydrazine; covalent FAD modification | FDA-approved (depression) | High — dietary tyramine restriction required |
| Tranylcypromine | Non-selective irreversible | Propylamine-derived cyclopropyl ring-opening | FDA-approved (depression) | High |
| Moclobemide | MAO-A selective, reversible (RIMA) | Competitive/reversible; displaced by tyramine | Available outside US (EU/Canada) | Low — "moclobemide-safe" diet; not available in USA |
| Clorgyline | MAO-A selective irreversible | Research use only | Not approved | — |

### ADAGIO trial: rasagiline and neuroprotection debate

The ADAGIO trial (N=1,176; randomized, double-blind, delayed-start design) tested whether early rasagiline treatment in previously untreated PD patients resulted in better outcomes than delayed-start treatment — the delayed-start design attempts to distinguish symptomatic from disease-modifying effects. At 1 mg/day, early-start met all three hierarchical efficacy endpoints at 72 weeks, providing a signal "consistent with a possible disease-modifying effect"; however, the 2 mg/day arm failed to meet the primary endpoint despite appearing more efficacious symptomatically [^olanow2009]. The divergent dose-effect and incomplete blinding led to substantial methodological debate: Ahlskog & Uitti (2010) argued the results more likely reflect symptomatic confounding and small effect sizes than true neuroprotection [^ahlskog2010]. The neuroprotection hypothesis for rasagiline in Parkinson's disease remains unconfirmed. #gap/contradictory-evidence

### Selegiline and rodent lifespan — a contested literature

Knoll, Dallo, and Yen (1989) reported that aged male rats receiving low-dose selegiline (0.25 mg/kg s.c. three times a week from the end of their second year) lived significantly longer than controls (191.91 ± 2.31 vs 147.05 ± 0.56 weeks mean lifespan; n=66/group), with the longest-living treated rat dying during the 226th week of life versus 164 weeks for the longest control — described as the "first instance that a well aimed medication prolonged lifespan" beyond normal species maximum [^knoll1989]. Subsequent studies reported mixed results: Syrian hamsters showed a 3-month delay in age-related cognitive decline with chronic selegiline; aged female NMRI mice showed no memory improvement [^stoll1994]. A 2016 study in rats tested BPAP (a more potent synthetic analog of selegiline designed to enhance the "enhancer effect" on dopaminergic tone) and reported significant lifespan extension versus controls [^knoll2016]. However:

- The original Knoll 1989 result has **not been replicated under rigorous controlled conditions** comparable to the NIA Interventions Testing Program (NIA ITP); selegiline is not listed as an ITP-tested compound in the published ITP rounds.
- The lifespan-extending mechanism proposed (selegiline as an "enhancer substance" augmenting dopaminergic tone independent of MAO-B inhibition) is contested and involves a distinct pharmacological hypothesis from the MAO-B-inhibition aging rationale.
- Metabolites of selegiline at low doses include L-amphetamine and L-methamphetamine, which have stimulant activity that could confound activity-based lifespan metrics.
- No prospective randomized controlled trial in humans has tested selegiline for a longevity endpoint.

**Assessment:** The selegiline rodent-lifespan literature is **suggestive but not robust**. It should not be cited as primary evidence for MAO-B inhibition extending human aging. The stronger aging-biology rationale is the mechanistic one: MAO-B-derived H₂O₂ contributes to an oxidative and neuroinflammatory state that is quantifiably elevated in the aging brain, and MAO-B inhibition reduces this source. #gap/needs-human-replication

---

## Pathway membership

- [[monoamine-catabolism]] — primary enzyme responsible for the enzymatic degradation of serotonin, norepinephrine, dopamine, and phenylethylamine (stub; this page is canonical until a dedicated pathway page is seeded)
- [[dopaminergic-signaling]] — MAO-B degrades dopamine, setting the ceiling for nigrostriatal and mesolimbic dopamine signaling (stub)
- [[hallmarks/mitochondrial-dysfunction]] — OMM-localised H₂O₂ production from MAO-B activity is an age-amplified source of mitochondria-proximal ROS
- [[hallmarks/chronic-inflammation]] — astrocytic MAO-B-derived H₂O₂ drives reactive astrogliosis and neuroinflammation

See also [[molecules/metabolites/catecholamines]] for the broader monoamine metabolism context, including the COMT degradation route, the catecholamine biosynthesis cascade, and the sympathetic-tone aging phenotype (the catecholamines page's `homeostasis-proteins:` field references `[[maoa]]` — should be updated to point to this combined page).

---

## Key interactors

- **Clorgyline** (research probe) — irreversible MAO-A-selective; used to dissect isoform-specific contributions in biochemical studies
- **Selegiline/rasagiline/safinamide** — irreversible/reversible MAO-B-selective inhibitors (see Pharmacology above)
- **Tyramine** — substrate handled differentially; MAO-A in gut epithelium prevents dietary tyramine from reaching systemic circulation; MAO-B less effective at tyramine detoxification
- **[[tyrosine-hydroxylase]]** — upstream enzyme in catecholamine synthesis; MAO activity sets the degradation rate that TH synthesis must match to maintain dopamine steady-state
- **[[comt]]** — parallel catecholamine degradation pathway (O-methylation); COMT and MAO act on different substrates and positions; both decrease substrate availability for the other's route (see [[molecules/metabolites/catecholamines]])

---

## Limitations and gaps

- **#gap/needs-human-replication** — No randomised controlled trial has tested MAO-B inhibition for a longevity endpoint in humans. The rodent selegiline-lifespan literature is inconsistent and lacks NIA ITP confirmation.
- **#gap/contradictory-evidence** — Sembragiline (MAO-B inhibitor) failed Phase 2 in Alzheimer's disease, suggesting MAO-B inhibition alone is insufficient in established AD; the mechanistic Chun 2020 data in astrocyte models may not translate to disease-stage pharmacological intervention.
- **#gap/needs-replication** — The Chun 2020 MAO-B → H₂O₂ → tauopathy axis has been demonstrated in transgenic mouse and human AD brain tissue, but longitudinal intervention trials specifically targeting astrocytic MAO-B in prodromal AD are lacking.
- **#gap/needs-expression-data** — GTEx aging-tissue correlation for MAOB (e.g., Spearman ρ across brain regions stratified by donor age) has not been queried for this page; PET + postmortem data confirm the trend but are not directly comparable to GTEx transcript-level correlations.
- **#gap/dose-response-unclear** — The dose of MAO-B inhibition required to meaningfully reduce age-related H₂O₂ flux in human astrocytes (versus the dose approved for PD motor symptoms) has not been established; the two goals may require different pharmacodynamic targets.
- **#gap/no-mechanism** — The upstream driver of MAO-B upregulation with aging (transcriptional, post-transcriptional, epigenetic?) in astrocytes is not well characterized.
- **#gap/needs-canonical-id** — Neither MAOA nor MAOB has a GenAge-human entry (Build 21 confirmed 2026-06-14). This may reflect the HAGR taxonomy (genetic longevity manipulations vs enzymatic aging correlates) rather than a biological finding.

---

## See also

- [[molecules/metabolites/catecholamines]] — catecholamine biosynthesis, MAO degradation route, and the aging-sympathetic-overdrive phenotype
- [[phenotypes/parkinsons-disease]] — dopaminergic neurodegeneration; MPTP/MAO-B; PINK1/Parkin/LRRK2 genetics
- [[hallmarks/mitochondrial-dysfunction]] — OMM ROS production; mitochondrial quality control; the hallmark that best captures the H₂O₂ aging consequence
- [[hallmarks/chronic-inflammation]] — astrocytic MAO-B drives neuroinflammation; reactive astrogliosis
- [[hypotheses/free-radical-theory-of-aging]] — broader oxidative-stress hypothesis; relevant for framing MAO-B as one specific ROS source; note that the broad theory is "superseded" as unifying explanation but MAO-B → H₂O₂ remains mechanistically well-supported in the neurodegeneration context
- [[molecules/proteins/alpha-synuclein]] — co-player in dopaminergic PD neuropathology; MAO-B metabolises dopamine whose metabolites (DOPAL) can promote α-synuclein aggregation
- [[comt]] — parallel catecholamine inactivation enzyme

---

## Footnotes

[^tong2013]: doi:10.1038/jcbfm.2013.19 · PMID:23403377 · PMC:3677103 · Tong J, Meyer JH, Furukawa Y, Boileau I, Chang LJ, Wilson AA, Houle S, Kish SJ · "Distribution of monoamine oxidase proteins in human brain: implications for brain imaging studies" · *J Cereb Blood Flow Metab* 33(6):863–871 · 2013 · observational (postmortem human brain, quantitative immunoblotting) · n=38 (regional distribution cohort); developmental/aging series spans 21 hours to 99 years of age · MAO-B levels increased continuously from infancy to senescence; MAO-B overtook MAO-A after infancy; regional data validated against PET outcome measures (PET underestimates regional contrast ~2-fold vs protein levels) · model: postmortem human brain tissue

[^fowler1997]: doi:10.1016/s0197-4580(97)00037-7 · PMID:9330975 · Fowler JS, Volkow ND, Wang GJ, Logan J, Pappas N, Shea C, MacGregor R · "Age-related increases in brain monoamine oxidase B in living healthy human subjects" · *Neurobiol Aging* 18(4):431–435 · 1997 · observational (in-vivo PET) · n=21 healthy subjects (age range 23–86 years) · [¹¹C]L-deprenyl-D₂ PET; MAO-B increased p < 0.004 in all brain regions except cingulate gyrus; inverse trend between brain glucose metabolism and MAO-B in frontal/parietal cortex (p < 0.03) · model: living healthy human subjects

[^carlsson1980]: Carlsson A, Adolfsson R, Aquilonius SM, Gottfries CG, Oreland L, Svennerholm L, Winblad B · "Biogenic amines in human brain in normal aging, senile dementia, and chronic alcoholism" · *Adv Biochem Psychopharmacol* 23:295–304 · 1980 · observational (postmortem human brain) · foundational postmortem study identifying age-related increases in MAO-B activity in multiple brain regions alongside dopamine decline in the nigrostriatal system · note: DOI not available for this book-chapter source; verified via Crossref and PubMed abstract metadata

[^chun2020]: doi:10.1038/s41593-020-00735-y · PMID:33199896 · Chun H, Im H, Kang YJ, Kim Y, Shin JH, Won W, Lim J, Ju Y, Park YM, Kim S, et al. · "Severe reactive astrocytes precipitate pathological hallmarks of Alzheimer's disease via H₂O₂⁻ production" · *Nature Neuroscience* 23:1555–1566 · 2020 · in-vitro + in-vivo (chemogenetic GiD model + 3D culture + transgenic mice + human AD brain tissue) · key finding: excessive H₂O₂ from MAO-B in severe reactive astrocytes causes tauopathy, neuronal death, brain atrophy, cognitive impairment; reversed by H₂O₂ scavenger AAD-2004; validated in human AD brain · model: multiple including primary human tissue

[^villemagne2022]: doi:10.2967/jnumed.121.263254 · PMID:35086898 · Villemagne VL, Harada R, Doré V, Furumoto S, Mulligan R, Kudo Y, et al. · "First-in-Humans Evaluation of 18F-SMBT-1, a Novel 18F-Labeled Monoamine Oxidase-B PET Tracer for Imaging Reactive Astrogliosis" · *J Nucl Med* 63(12):1833–1839 · 2022 · in-vivo (PET, first-in-humans) · n=77 participants across cognitive status groups · ¹⁸F-SMBT-1 showed robust brain entry, reversible kinetics, high MAO-B selectivity, and accurately captured age-related MAO-B increases; validated against established MAO-B distribution patterns · model: human

[^olanow2009]: doi:10.1056/NEJMoa0809335 · PMID:19776408 · Olanow CW, Rascol O, Hauser R, Feigin PD, Jankovic J, Lang A, et al. (ADAGIO Study Investigators) · "A double-blind, delayed-start trial of rasagiline in Parkinson's disease" · *N Engl J Med* 361(13):1268–1278 · 2009 · RCT (delayed-start design) · n=1,176 previously untreated PD patients · rasagiline 1 mg/day (early-start) met all three hierarchical endpoints at 72 weeks; 2 mg/day arm failed primary endpoint; results "consistent with a possible disease-modifying effect" at 1 mg but dose-divergence introduces confounding #gap/contradictory-evidence · model: human

[^ahlskog2010]: doi:10.1212/WNL.0b013e3181d7d8e2 · PMID:20368634 · Ahlskog JE, Uitti RJ · "Rasagiline, Parkinson neuroprotection, and delayed-start trials: still no satisfaction?" · *Neurology* 74(14):1143–1148 · 2010 · review/critical analysis · highlights methodological concerns with ADAGIO trial including small effect sizes, probable incomplete blinding, and divergent dose-responses; concludes neuroprotection claim is not established · model: human (clinical trial analysis)

[^borroni2017]: doi:10.1124/jpet.117.241653 · PMID:28642233 · Borroni E, Bohrmann B, Grueninger F, Prinssen E, Nave S, Loetscher H, Chinta SJ, Rajagopalan S, Rane A, Siddiqui A, Ellenbroek B, Messer J, Pähler A, Andersen JK, Wyler R, Cesura AM · "Sembragiline: A Novel, Selective Monoamine Oxidase Type B Inhibitor for the Treatment of Alzheimer's Disease" · *J Pharmacol Exp Ther* 362(3):413–423 · 2017 · in-vitro + in-vivo (transgenic animal models) · sembragiline reduced ROS formation, reactive astrogliosis, and neuronal loss in AD models; Phase 2 clinical trial results were negative on primary cognitive endpoints (NCT01677754) · model: in-vitro + transgenic mouse; Phase 2 human trial negative

[^knoll1989]: doi:10.1016/0024-3205(89)90103-3 · PMID:2505007 · Knoll J, Dallo J, Yen TT · "Striatal dopamine, sexual activity and lifespan. Longevity of rats treated with (-)deprenyl" · *Life Sci* 45(6):525–531 · 1989 · in-vivo · n=66 saline-control + 66 deprenyl-treated (total 132); aged male rats treated from end of 2nd year of life with (-)-deprenyl 0.25 mg/kg s.c. three times a week until death; treated cohort lived significantly longer than controls (191.91 ± 2.31 vs 147.05 ± 0.56 weeks); longest-living treated rat died during 226th week vs 164 weeks (longest control); strain not specified in abstract · foundational but unreplicated under current ITP standards #gap/needs-replication

[^stoll1994]: doi:10.1016/0024-3205(94)00396-3 · PMID:7997074 · Stoll S, Hafner U, Pohl O, Müller WE · "Age-related memory decline and longevity under treatment with selegiline" · *Life Sci* 55(25-26):2155–2163 · 1994 · in-vivo · aged female NMRI mice showed no memory improvement with selegiline; Syrian hamsters showed 3-month delay in age-related cognitive decline; mixed species-specific results

[^knoll2016]: doi:10.1016/j.lfs.2016.10.023 · PMID:27777099 · Knoll J, Miklya I · "Longevity study with low doses of selegiline/(-)-deprenyl and (2R)-1-(1-benzofuran-2-yl)-N-propylpentane-2-amine (BPAP)" · *Life Sci* 167:1–8 · 2016 · in-vivo (rats) · BPAP (catecholaminergic activity enhancer) extended lifespan more potently than selegiline; rats preserved learning ability with age; same research group as Knoll 1989; no independent replication #gap/needs-replication

[^crine2026]: doi:10.1177/0271678X261441065 · PMID:41964364 · Crine V, Johansson J, Ericsson O, et al. · "The role of dopamine decline, astrocyte reactivity, and cerebral small-vessel disease in cognitive aging" · *J Cereb Blood Flow Metab* · 2026 · observational · n=55 healthy older adults (ages 60–79) · reduced dopamine transporter availability strongest predictor of lower cognitive performance; MAO-B levels assessed; reduced glial function potentially underlying dopaminergic losses in aging · model: human, cross-sectional
