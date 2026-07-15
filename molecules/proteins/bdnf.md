---
type: protein
aliases: [brain-derived neurotrophic factor, BDNF, ANON2, BULN2, Abrineurin]
uniprot: P23560
ncbi-gene: 627
hgnc: 1033
ensembl: ENSG00000176697
genage-id: 191
pathways: ["[[neurotrophin-signaling]]", "[[trkb-pathway]]", "[[pi3k-akt-pathway]]", "[[ras-mapk]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]", "[[loss-of-proteostasis]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: "Serum BDNF declines significantly with age (cross-sectional; see Aging trajectory section). GTEx tissue-level gene expression aging correlation not formally queried via API in this seeding pass. #gap/needs-gtex-aging-correlation"
mr-causal-evidence: partial
caused-by: ["[[exercise]]", "[[pi3k-akt-pathway]]"]
causes: ["[[neurotrophin-signaling]]", "[[trkb-pathway]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Erickson 2011, Wrann 2013, Egan 2003, Sleiman 2016, Hartmann 2001 verified against primary-source PDFs. Connor 1997 unverifiable (not_oa; closed-access). Canonical-DB identity fields (UniProt P23560, NCBI Gene 627, HGNC:1033, Ensembl ENSG00000176697, GenAge 191) not independently re-queried against databases."
---


# BDNF (Brain-Derived Neurotrophic Factor)

The prototypical member of the neurotrophin family and the most abundant neurotrophin in the adult mammalian brain. BDNF is essential for the survival, differentiation, and synaptic plasticity of neurons, and is the key mediator linking aerobic exercise to hippocampal neurogenesis and cognitive preservation in aging. Its decline with age — measurable in serum and inferred from post-mortem brain data — makes it a central node in the neurocognitive aging literature and a tractable pharmacodynamic biomarker. The biology of BDNF is complicated by its pro-form: pro-BDNF and mature BDNF signal through distinct receptors with opposing cellular outcomes.

## Identity

- **UniProt:** P23560 (BDNF_HUMAN); Swiss-Prot (manually curated)
- **NCBI Gene:** 627
- **HGNC symbol:** BDNF (HGNC:1033)
- **Ensembl:** ENSG00000176697 (15 transcripts; 4 major protein isoforms)
- **GenAge HAGRID:** 191 (GenAge human aging gene database)
- **Gene locus:** Chromosome 11p14.1
- **Mouse ortholog:** Bdnf (Mus musculus; high sequence conservation in mature domain)
- **Protein family:** NGF (nerve growth factor) superfamily; cystine-knot cytokine fold
- **Aliases:** Abrineurin; ANON2; BULN2

## Processing: pre-pro-BDNF → pro-BDNF → mature BDNF

BDNF is synthesized as a 32 kDa precursor (**pre-pro-BDNF**), with a signal peptide that directs it into the secretory pathway. Cleavage of the signal peptide yields **pro-BDNF** (32 kDa), which is itself biologically active. Within the trans-Golgi network and secretory vesicles, pro-BDNF is cleaved by FURIN-family proprotein convertases and, after secretion, by plasmin and matrix metalloproteinases (MMPs) in the extracellular space to generate **mature BDNF** (~14 kDa). Three disulfide bonds (Cys141-Cys208, Cys186-Cys237, Cys196-Cys239) stabilize the mature domain. Asparagine-121 carries N-linked glycosylation.

The processing ratio (pro-BDNF vs. mature BDNF released) is activity-dependent and spatially regulated — high-frequency glutamatergic stimulation triggers local release from dendritic secretory granules [^hartmann2001], enabling synapse-specific neurotrophin signalling.

## Pro-BDNF vs. mature BDNF: opposing receptor systems

This is a critical mechanistic distinction that is often glossed over in lay and clinical literature:

| Form | Receptor | Downstream effector | Biological outcome |
|---|---|---|---|
| Pro-BDNF (32 kDa) | p75NTR (low-affinity neurotrophin receptor) | RhoA → JNK/p53 | Apoptosis, LTD, synaptic pruning |
| Mature BDNF (14 kDa) | TrkB (NTRK2; high-affinity kinase receptor) | PI3K-AKT, MAPK/ERK, PLCγ | Neuronal survival, LTP, synaptogenesis, neurogenesis |

Pro-BDNF binding to p75NTR (often in complex with sortilin) activates a pro-apoptotic programme and facilitates long-term depression (LTD). This is not a mere inactive precursor — it is a functional opposing signal. The balance between pro-BDNF and mature BDNF in the extracellular space therefore functions as a bidirectional switch between synaptic strengthening and pruning/elimination. Pharmacological strategies that aim to increase BDNF signalling must consider which form predominates in the target tissue. #gap/needs-replication — the extracellular pro-BDNF:mature-BDNF ratio in aging human brain is not well characterised.

## Val66Met polymorphism (rs6265)

The most widely-studied functional SNP in the BDNF gene. A single G→A substitution at codon 66 (Val→Met in the prodomain) results in:

- Impaired trafficking of BDNF-containing vesicles from the cell body to dendrites and axon terminals
- **Significantly reduced activity-dependent secretion** of BDNF (depolarisation-evoked release is lower in Met-allele neurons; constitutive secretion is unaffected or slightly increased) [^egan2003]
- Lower episodic verbal memory performance (WMS-R delayed recall) and abnormal hippocampal fMRI activation during an N-back working memory task in Met-carriers vs. Val/Val homozygotes [^egan2003]

Population frequency: Val/Val ~50%, Val/Met ~40%, Met/Met ~10% (varies by ancestry). Met/Met carriers show the largest deficit in activity-dependent secretion and hippocampal memory performance.

**As an MR instrument:** Val66Met (rs6265) is used as a Mendelian randomisation instrument for BDNF signalling capacity, primarily in psychiatric and cognitive aging GWAS settings. However, the instrument is imperfect: rs6265 affects BDNF secretion but not total BDNF production levels, BDNF is expressed from both alleles and signal is partly redundant, and the Met-allele effect size on circulating serum BDNF is modest and context-dependent. MR studies using rs6265 as the sole instrument are therefore underpowered and subject to weak-instrument bias. **`mr-causal-evidence: partial`** — genetic instruments (rs6265 and several linked variants) are available but no well-powered MR study has definitively established causal bidirectionality between BDNF signalling and age-related cognitive outcomes in humans [^egan2003]. #gap/needs-replication for fully-powered MR analysis.

## Tissue expression

**CNS-dominant.** Highest expression in:
- Hippocampus (dentate gyrus, CA3, CA1) — primary site of adult neurogenesis and LTP
- Amygdala — fear memory consolidation
- Cerebral cortex (layers II, V) — corticothalamic and corticostriatal projection neurons
- Cerebellum

**Peripheral sources:**
- Skeletal muscle (minor source; upregulated by exercise-induced PGC-1α)
- Heart, lung, testis, prostate, placenta (low-level)
- Platelets — **important caveat**: platelets constitutively take up and store BDNF from plasma, and platelet BDNF is released upon activation during blood collection. Most of what is measured as "serum BDNF" is therefore **platelet-derived**, not brain-derived. This creates a major interpretive problem: serum BDNF is only an indirect, noisy proxy for brain BDNF. A high-serum-BDNF day may reflect platelet activation rather than central neurotrophin signalling. #gap/needs-replication — validated central-surrogate biomarkers for brain BDNF in living humans are lacking.

Plasma BDNF (platelet-poor) is a more conservative measure but still not a validated proxy for CSF or hippocampal BDNF.

## Aging trajectory

### Serum BDNF declines with age

Cross-sectional human studies document a significant decline in circulating BDNF with advancing age. This association is found across multiple independent cohorts. The decline is thought to reflect both reduced neuronal production and altered platelet dynamics with aging. #gap/needs-replication — longitudinal within-person data across decades are limited.

### CSF and post-mortem brain BDNF

Post-mortem hippocampal tissue from Alzheimer's disease patients shows marked reduction in BDNF-immunoreactive neurons compared to age-matched controls, with reductions detected by both immunohistochemistry (protein) and in situ hybridisation (mRNA) in hippocampus and temporal cortex [^connor1997]. This is consistent with loss of the trophic support that maintains cholinergic and other vulnerable neuronal populations in the aging brain.

| Dimension | Status |
|---|---|
| Serum BDNF declines with age? | Yes — cross-sectional evidence; #gap/needs-replication longitudinally |
| Brain BDNF reduced in AD? | Yes — post-mortem data [^connor1997] |
| CSF BDNF tracks brain BDNF? | Partial — CSF BDNF is used as a proxy but sampling is invasive |
| Serum BDNF reflects brain BDNF? | Weak — largely platelet-derived; major caveat (see Tissue expression) |

## Exercise induction of BDNF

Exercise is the best-validated non-pharmacological inducer of BDNF in the brain. Two mechanistic chains are established:

### 1. PGC-1α / FNDC5 / irisin pathway

Aerobic exercise in skeletal muscle → upregulates **PGC-1α** (peroxisome proliferator-activated receptor-γ coactivator 1α) → drives expression of **FNDC5** (fibronectin type III domain-containing protein 5) in both muscle and hippocampus → FNDC5 is cleaved to release **irisin** as a circulating myokine → peripheral adenoviral overexpression of FNDC5 in liver (raising circulating irisin) increased hippocampal Bdnf mRNA in BALB/c mice; lentiviral FNDC5 knockdown in primary cortical neurons blocked FNDC5-induced Bdnf upregulation [^wrann2013]. PGC-1α global knockout (Pgc1a−/−) mice showed significantly reduced hippocampal Fndc5 expression. This PGC-1α/ERRα → FNDC5 → BDNF axis links peripheral metabolic exercise adaptations to central neurotrophin signalling. **Important caveat:** direct irisin treatment of primary hippocampal neurons did not produce a statistically significant increase in Bdnf mRNA in the paper's hippocampal-specific validation (Figure 7D), suggesting the in-vivo route involves additional complexity beyond direct neuronal irisin signalling. The exercise mice used were male 6-week-old C57/Bl6 wild-type with running-wheel access for 30 days.

### 2. β-Hydroxybutyrate / HDAC inhibition pathway

Prolonged exercise elevates the ketone body **β-hydroxybutyrate (BHB; paper uses D-β-hydroxybutyrate, DBHB)** in the hippocampus → BHB inhibits HDAC2 and HDAC3 occupancy at the activity-dependent promoter I (pI) of the BDNF gene → histone H3 acetylation increases at this locus → BDNF mRNA upregulated in hippocampus [^sleiman2016]. The exercise-induced decrease in hippocampal Hdac2 and Hdac3 mRNA was confirmed; Hdac1 was unaffected. Intraventricular infusion of DBHB (2 mM) in C57BL/6 mice reproduced exercise-like hippocampal Bdnf pI induction (n=3 ctrl, 5 DBHB); treatment of hippocampal slices with DBHB (0.8 mM) also increased Bdnf expression and enhanced TrkB-dependent neurotransmitter release. A DBHB transporter inhibitor blocked both hippocampal DBHB accumulation and the Bdnf response, confirming the transport-dependent mechanism. This pathway provides a mechanistic rationale for ketogenic dietary strategies and fasting-associated BHB as brain-BDNF inducers. #gap/needs-human-replication — all data from mice and primary neuronal cultures.

### Functional consequence: hippocampal volume preservation

In a randomised controlled trial (n=120 sedentary older adults; 60 aerobic, mean age 67.6 y; 60 stretching control, mean age 65.5 y), one year of aerobic exercise training increased **anterior hippocampal volume by ~2%** (left +2.12%, right +1.97%) versus a ~1.4% decline in the stretching control group [^erickson2011]. Within the aerobic group, greater changes in serum BDNF were correlated with greater increases in hippocampal volume (r=0.36–0.37, p<0.01 for left and right). However, the aerobic exercise group did **not** show significantly greater increases in serum BDNF than the stretching control group overall (Time × Group interaction: p=0.23). On the spatial memory task, both groups improved in accuracy across the year; the aerobic group did **not** outperform the stretching group (Time × Group interaction: p=0.40, ns). Increased hippocampal volume within the aerobic group was correlated with memory improvement (r=0.23–0.29, p<0.05). This is the most direct human evidence linking exercise → hippocampal structural preservation, with BDNF as a correlate of volume change within the exercise group rather than a confirmed mediator.

| Dimension | Status |
|---|---|
| Exercise → BDNF in rodents? | Yes — well-replicated [^wrann2013] |
| Exercise → BDNF in humans? | Yes — serum and CSF data |
| BDNF → hippocampal volume in humans? | Partial — BDNF change correlated with volume change within aerobic group; no between-group BDNF difference; not mechanistically confirmed as mediator [^erickson2011] |
| PGC-1α/FNDC5 axis in humans? | Partial — irisin circulates in humans; CNS effect not directly demonstrated |
| BHB → BDNF in humans? | Not yet — rodent/in-vitro only [^sleiman2016] #gap/needs-human-replication |

## Alzheimer's disease context

BDNF reduction is one of the most consistent molecular findings in Alzheimer's disease brain:
- Post-mortem hippocampus and temporal cortex show reduced BDNF-immunoreactive neurons [^connor1997]
- BDNF decline correlates with amyloid plaque burden and cognitive performance decline in multiple cross-sectional studies
- TrkB signalling supports the survival of basal forebrain cholinergic neurons — the population most depleted in early AD; their loss is a proximal cause of declarative memory failure
- Amyloid-β oligomers have been shown experimentally to interfere with TrkB signalling, creating a feedback loop where amyloid accumulation further suppresses the pro-survival neurotrophin signal

BDNF is thus positioned both as a biomarker of neurodegeneration and as a mechanistic target in therapeutic strategies for AD. #gap/needs-human-replication — no BDNF-raising intervention has yet demonstrated disease modification in a Phase 3 AD trial.

## Serum BDNF as a biomarker — major caveat

Serum BDNF is widely used in aging and cognitive research as a proxy for brain BDNF, but this use is problematic:

1. **Platelet contamination.** Platelets sequester BDNF from plasma during blood clotting. Serum BDNF therefore primarily reflects platelet BDNF content rather than neuronal secretion. Platelet count and platelet activation state introduce substantial variability.
2. **Peripheral vs. central disconnect.** Peripheral BDNF (from platelets, endothelium, muscle) and central BDNF are not tightly coupled. Exercise raises both, but the serum signal may be driven peripherally.
3. **Pre-analytical sensitivity.** Serum BDNF varies with processing time, centrifugation protocol, freeze-thaw cycles, and time of day. Cross-study comparisons of absolute values are unreliable.

**Plasma BDNF** (centrifuged before clotting, platelet-poor) is more reflective of genuine circulating BDNF but is still not validated as a specific CNS biomarker. **CSF BDNF** is the most direct accessible brain proxy but is obtained invasively.

#gap/needs-replication — a validated non-invasive biomarker for brain BDNF levels in aging humans does not yet exist.

## Therapeutics targeting the BDNF / TrkB axis

Direct administration of recombinant BDNF is not clinically feasible: the mature protein does not cross the blood-brain barrier (BBB) efficiently, has a short serum half-life, and systemic delivery produces dose-limiting side effects (hyperalgesia, weight loss). Research strategies include:

### TrkB small-molecule agonists
- **7,8-Dihydroxyflavone (7,8-DHF)** — a naturally occurring flavonoid identified as a selective TrkB agonist; crosses the BBB; active in rodent models of cognitive decline. #gap/needs-human-replication — no clinical trial data in aging populations.
- **LM22A-4** — synthetic small-molecule TrkB agonist; active in rodent models of TBI and Huntington's disease. No clinical aging data.
- **ANA-12** — TrkB antagonist (used experimentally as a tool to probe BDNF/TrkB necessity; not therapeutic).

### Intranasal BDNF delivery
Intranasal BDNF bypasses the BBB via the olfactory/trigeminal nerve pathways. Proof-of-concept in rodents; no published human trials as of 2026-05-09. #gap/needs-human-replication.

### Exercise
The most validated and safest strategy to raise brain BDNF in humans. The Erickson 2011 RCT used 3 days/week of moderate-intensity aerobic walking (targeting 40 min/session; 60–75% heart rate reserve after week 7) for one year [^erickson2011]. No pharmacological intervention has matched the hippocampal structural benefit size documented for exercise in well-controlled human trials.

### Compounds that induce BDNF as a secondary mechanism
- **[[semax]]** — synthetic ACTH-fragment peptide; documented to raise hippocampal BDNF mRNA and protein in rodents (1.4-fold, single intranasal dose); BDNF elevation also demonstrated in human stroke patients (plasma BDNF) in Russian clinical trials. TrkB-upregulation is the primary documented molecular mechanism of Semax.
- **[[dihexa]]** — a synthetic peptidomimetic with procognitive effects in rodents. The "more potent than BDNF" framing circulated in secondary sources **has no surviving primary source**: confirmed absent from McCoy 2013 (the only intact non-retracted primary study, verified against full PDF); the claim most likely originates from the retracted Benoist 2014 paper. Dihexa does not replicate or mimic BDNF directly; its proposed c-Met/HGF mechanism is unconfirmed following retraction. Do not cite any comparative potency claim relative to BDNF for dihexa.

### BDNF-axis drugs in clinical development
Open Targets Platform lists BDNF as a target with moderate disease-association evidence across neuropsychiatric and neurodegenerative indications. No BDNF agonist or TrkB small-molecule has achieved FDA approval. **Druggability tier 2 (aging context):** clinical-stage TrkB agonists exist (7,8-DHF in Phase 1/2 exploratory; LM22A-4 in preclinical) but no drug is validated for an aging-cognition indication. The aging-context tier (2) is lower than the maximum cross-indication druggability because the BDNF/TrkB field has not yet produced a Phase 3-ready clinical compound for cognitive aging.

## Pathway membership

- [[neurotrophin-signaling]] — BDNF/TrkB is the canonical neurotrophin signalling axis; page is an implicit stub (does not exist as of 2026-05-09)
- [[trkb-pathway]] — downstream of BDNF; TrkB-PI3K-AKT and TrkB-MAPK/ERK arms; implicit stub
- [[pi3k-akt-pathway]] — TrkB signals through PI3K → AKT → mTOR for neuronal survival
- [[ras-mapk]] — TrkB signals through RAS → ERK1/2 for synaptic plasticity
- [[exercise]] — exercise intervention that most robustly upregulates BDNF in humans

## Hallmark associations

- **[[altered-intercellular-communication]]** — BDNF is a canonical paracrine/autocrine signalling molecule; age-related decline in hippocampal BDNF secretion represents a deterioration of intercellular neurotrophic communication in the aging CNS.
- **[[stem-cell-exhaustion]]** — BDNF supports the survival and differentiation of neural stem cells in the dentate gyrus. Age-related BDNF decline contributes to the well-documented decline in adult hippocampal neurogenesis.
- **[[loss-of-proteostasis]]** — Speculative: BDNF/TrkB signalling supports the protein quality-control machinery in neurons; BDNF deficit may impair proteasomal degradation of misfolded proteins (tau, α-synuclein). Less directly supported than the other two hallmarks. #gap/no-mechanism for this specific link.

## Evidence quality summary

| Claim | Evidence level | Notes |
|---|---|---|
| BDNF declines with age (serum) | Moderate | Cross-sectional human cohorts; platelet-confound caveat |
| BDNF reduced in AD brain (post-mortem) | Strong | Multiple independent studies [^connor1997] |
| Exercise raises hippocampal BDNF (rodent) | Strong | [^wrann2013] + multiple confirmatory studies |
| Exercise raises serum BDNF (human) | Moderate | Multiple RCTs; confounded by platelet source |
| Exercise → hippocampal volume gain (human) | Strong | RCT [^erickson2011]; +2.12%/+1.97% vs −1.4% control; p<0.001 |
| BDNF as mediator of hippocampal volume gain (human) | Weak-moderate | BDNF change correlated with volume change within aerobic group (r=0.36–0.37); no between-group BDNF difference; not mechanistically confirmed [^erickson2011] |
| Val66Met reduces activity-dependent BDNF secretion | Strong | [^egan2003]; replicated |
| 7,8-DHF is a TrkB agonist (rodent) | Moderate | Multiple publications; no human trial |
| Intranasal BDNF increases brain BDNF | Preclinical only | Rodent-only; human BBB not bypassed by nasal route for proteins |

## Limitations and gaps

1. **Serum BDNF is not a clean brain biomarker.** Most measured serum BDNF is platelet-derived. Studies using serum BDNF as a proxy for brain BDNF must be interpreted cautiously. #gap/needs-replication for validated CNS-specific BDNF biomarker in humans.

2. **No approved TrkB agonist drug exists.** Despite decades of research, no TrkB-targeting clinical drug has received regulatory approval. 7,8-DHF and related compounds remain at early clinical stages. #gap/needs-human-replication.

3. **Pro-BDNF:mature-BDNF ratio in aging brain unmeasured.** The opposing pro-apoptotic (pro-BDNF/p75NTR) vs. pro-survival (mature BDNF/TrkB) balance is critical but has not been systematically characterised in aging human brain. #gap/needs-replication.

4. **Val66Met MR instrument limitations.** rs6265 is widely used as an instrument but has weak-instrument limitations for cognitive-aging MR; no fully powered MR study has established BDNF causal directionality for age-related cognitive decline. `mr-causal-evidence: partial`. #gap/needs-replication.

5. **GTEx aging correlation not queried.** Formal GTEx v2 API query for BDNF tissue-level aging expression trajectory was not completed in this seeding pass. #gap/needs-gtex-aging-correlation.

6. **Exercise → BDNF dose-response undefined.** Optimal exercise modality, intensity, and duration for maximal hippocampal BDNF induction in older adults is not established from controlled trials. #gap/dose-response-unclear.

7. **CNS delivery of BDNF protein remains unsolved.** Direct therapeutic BDNF protein delivery to the aging brain faces unresolved BBB penetration, delivery route, and dose-response challenges. #gap/dose-response-unclear.

8. **GenAge HAGRID 191 entry evidence basis not reviewed.** The inclusion of BDNF in GenAge-human was confirmed by ID but the underlying supporting references were not reviewed in this seeding pass. #gap/needs-replication for specific GenAge evidence claims.

## Cross-references

- [[altered-intercellular-communication]] — hallmark page; BDNF is a canonical intercellular neurotrophic signal
- [[stem-cell-exhaustion]] — hallmark page; neural stem cell support
- [[exercise]] — intervention page; exercise is the most validated BDNF inducer
- [[pi3k-akt-pathway]] — downstream TrkB signalling arm
- [[ras-mapk]] — downstream TrkB signalling arm (ERK1/2)
- [[semax]] — BDNF/TrkB-upregulation mechanism; human BDNF elevation data in stroke patients
- [[dihexa]] — "more potent than BDNF" claim has no surviving primary source; see Dihexa page for retracted-mechanism context

## Footnotes

[^hartmann2001]: doi:10.1093/emboj/20.21.5887 · Hartmann M, Heumann R, Lessmann V · *EMBO J* 2001;20(21):5887–5897 · in-vitro · model: cultured rat hippocampal neurons (embryonic day 20, Wistar ST) transfected with BDNF-GFP; high-frequency stimulation via high K⁺ (50 mM)/glutamate (300 µM) or tetanic presynaptic stimulation (16 bursts of 50 pulses at 50 Hz) · demonstrates activity-dependent BDNF release from postsynaptic dendritic secretory granules at glutamatergic (not GABAergic) synaptic junctions; postsynaptic Ca²⁺ influx required (blocked by 0 mM extracellular Ca²⁺ and VGCC blockers); extrasynaptic dendritic release also observed; release confirmed from postsynaptic structures by Ca²⁺/FM4-64 co-localization experiments · n reported per experiment (17 cells/90 clusters for K⁺/Glu; 8 cells for tetanic; not a cohort n); 503 citations

[^egan2003]: doi:10.1016/S0092-8674(03)00035-7 · Egan MF, Kojima M, Callicott JH, Goldberg TE, Kolachana BS, Bertolino A, Zaitsev E, Gold B, Goldman D, Dean M, Lu B, Weinberger DR · *Cell* 2003;112(2):257–269 · observational (human genetic) + in-vitro · model: n=641 subjects (controls, schizophrenia patients, unaffected siblings) genotyped for Val66Met (rs6265); WMS-R episodic verbal memory; fMRI cohorts (Cohort 1: 8 val/val, 5 val/met; Cohort 2: 12 val/val, 5 val/met) during N-back working memory task; cultured hippocampal neurons (E20 Wistar rat) expressing vBDNF-GFP or mBDNF-GFP · Met-allele carriers: reduced WMS-R delayed recall, abnormal bilateral hippocampal fMRI activation during N-back task, reduced hippocampal NAA (neuronal integrity marker); Met-BDNF neurons: reduced KCl-depolarisation-evoked secretion (~19 ng/ml vs ~30 ng/ml for val); constitutive secretion unaffected; mBDNF failed to localise to secretory granules or synapses · 3836 citations; 100th percentile impact

[^wrann2013]: doi:10.1016/j.cmet.2013.09.008 · Wrann CD, White JP, Salogiannnis J, Laznik-Bogoslavski D, Wu J, Ma D, Lin JD, Greenberg ME, Spiegelman BM · *Cell Metab* 2013;18(5):649–659 · in-vivo + in-vitro · model: male 6-week-old C57/Bl6 wild-type mice (30-day wheel running); global Pgc1a knockout mice (Pgc1a−/−); 5-week-old male wild-type BALB/c mice (peripheral adenoviral FNDC5 delivery); primary cortical neurons (PGC-1α/FNDC5 forced expression, FNDC5 shRNA knockdown, irisin treatment) · exercise induces hippocampal Bdnf mRNA via PGC-1α/ERRα → FNDC5 axis; lentiviral FNDC5 KD in primary cortical neurons blocked FNDC5-induced Bdnf expression; peripheral adenoviral liver-FNDC5 raised hippocampal Bdnf in BALB/c mice; Pgc1a KO mice showed reduced hippocampal Fndc5 · CAVEAT: irisin treatment of primary hippocampal neurons did not produce statistically significant Bdnf induction (Figure 7D) · 1292 citations; 100th percentile impact

[^erickson2011]: doi:10.1073/pnas.1015950108 · Erickson KI, Voss MW, Prakash RS, Basak C, Szabo A, Chaddock L, Kim JS, Heo S, Alves H, White SM, Wojcicki TR, Mailey E, Vieira VJ, Martin SA, Pence BD, Woods JA, McAuley E, Kramer AF · *PNAS* 2011;108(7):3017–3022 · rct · n=120 (60 aerobic mean age 67.6 y, 60 stretching control mean age 65.5 y); sedentary community-dwelling older adults (55–80 y); 1-year moderate-intensity walking intervention · aerobic group: left hip +2.12%, right hip +1.97%; control: left −1.40%, right −1.43%; both anterior hippocampus specific; posterior hippocampus unchanged · Time×Group interaction for serum BDNF was NOT significant (p=0.23); BDNF change correlated with hippocampal volume change within aerobic group only (r=0.36–0.37, p<0.01) · Time×Group interaction for spatial memory was NOT significant (p=0.40); both groups improved; hippocampal volume within aerobic group correlated with memory improvement (r=0.23–0.29) · 4574 citations; 100th percentile impact

[^sleiman2016]: doi:10.7554/eLife.15092 · Sleiman SF, Henry J, Al-Haddad R, El Hayek L, Abou Haidar E, Stringer T, Ulja D, Karuppagounder SS, Holson EB, Ratan RR, Ninan I · *eLife* 2016;5:e15092 · in-vivo + in-vitro · model: C57BL/6 mice (4 weeks of age; n=10 ctrl, n=11 exercise for running-wheel experiments; n=3–5 for i.c.v. DBHB experiments); primary cortical neurons (DBHB, HDAC inhibitors); hippocampal slices · DBHB (D-β-hydroxybutyrate) accumulates in hippocampus after exercise; DBHB inhibits HDAC2 and HDAC3 binding at Bdnf promoter I; HDAC2 and HDAC3 mRNA and ChIP-binding decreased in hippocampus with exercise (Hdac1 unaffected); intraventricular DBHB (2 mM) significantly induced hippocampal Bdnf pI expression in vivo; DBHB transporter inhibitor blocked both hippocampal DBHB accumulation and Bdnf induction; DBHB enhanced TrkB-dependent neurotransmitter release in hippocampal slices (K252a-sensitive) · 721 citations; 100th percentile impact

[^connor1997]: doi:10.1016/S0169-328X(97)00125-3 · Connor B, Young D, Yan Q, Faull RL, Synek B, Dragunow M · *Mol Brain Res* 1997;49(1-2):71–81 · observational (post-mortem) · model: human AD vs. age-matched control post-mortem hippocampus and temporal cortex · immunohistochemistry + in situ hybridisation; reduced BDNF-immunoreactive neurons and mRNA in AD hippocampus and temporal cortex; consistent with loss of trophic support for cholinergic neurons · 579 citations; 100th percentile impact · **NOTE: closed-access (`not_oa` per a local paper archive); claims attributed to this source could not be verified against full PDF** #gap/no-fulltext-access
