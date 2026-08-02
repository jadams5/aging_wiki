---
type: study
doi: 10.1073/pnas.2524897123
pmid: 41843680
pmc: PMC13012039
title: "Senolytic treatment induces oligodendrocyte dysfunction and demyelination in the corpus callosum"
authors: [Lombardo ER, Pijewski RS, Lustig JT, Dhari Z, Lahiri A, Papile LE, Lavoie ER, Scanlon VM, Bartley JM, Crocker SJ]
year: 2026
journal: Proceedings of the National Academy of Sciences
volume: 123
issue: 12
pages: e2524897123
study-design: in-vivo
publication-type: research-article
organism: multi
n-subjects: null
intervention: ["[[dasatinib]]", "[[quercetin]]"]
hallmarks-tested: ["[[loss-of-proteostasis]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [dq-rostral-corpus-callosum-demyelination, oligodendrocyte-dysfunction-without-detected-cell-death, opc-differentiation-inhibition, unfolded-protein-response-associated-signature]
local-pdf: null
verified: true
verified-date: 2026-08-02
verified-by: claude
verified-scope: "The complete 10-page main article, figures, and Methods were checked against PubMed metadata. Supporting information was unavailable and was not verified; SI-only PCA and time-lapse details beyond the main-text summary, sequencing replicate/QC information, sex, and study-wide animal accounting therefore remain unresolved. Verification covers claims attributed to this paper, not the secondary human-MS studies cited in its Discussion. PubMed and publisher-record searches found no correction, retraction, expression of concern, or material direct replication as of 2026-08-02."
---

# Senolytic treatment induces oligodendrocyte dysfunction and demyelination in the corpus callosum

## TL;DR

Lombardo et al. tested an intermittent oral [[dasatinib]] plus [[quercetin]] (D+Q) regimen in healthy young and aged C57BL/6J mice and found reduced compact myelination and Luxol-fast-blue evidence of myelin loss in the rostral corpus callosum of the [[brain]]. Primary rat oligodendrocyte-lineage cultures exposed directly to the same agents showed impaired oligodendrocyte precursor cell (OPC) differentiation and rapid retraction of mature-oligodendrocyte processes without a significant increase in the assayed cell-death readouts. Transcriptomics and in-vivo staining implicated endoplasmic-reticulum stress and the [[unfolded-protein-response]], but the proposed D+Q → unfolded-protein-response → oligodendrocyte dysfunction → demyelination chain was not tested by a rescue experiment. This is a material preclinical safety signal for systemic D+Q, not evidence of human demyelination or of a class effect shared by all [[interventions/pharmacological/senolytics|senolytics]].

## Design

### Healthy-mouse intervention

- **Animals:** Young (reported as 3–4 months) and aged (22 months) wild-type C57BL/6J mice. Sex was not stated in the main article.
- **Intervention:** Dasatinib 5 mg/kg plus quercetin 50 mg/kg by oral gavage, once every other day during weeks 1 and 3 (three doses in each treatment week; six doses total). Weeks 2 and 4 were drug-free.
- **Control vehicle:** 10% ethanol, 30% PEG-400, and 60% Phosal-50PG.
- **Timing:** Brain collection at the end of week 4.
- **Myelin endpoints:** Transmission electron microscopy (TEM) of the rostral corpus callosum with axonal g-ratio measurement; Luxol fast blue histology in aged mice; axon diameter as a potential confounder.
- **Displayed TEM sample:** Three mice per age/treatment group. The analysis included 2,000 axons per aged treatment group and 1,500 axons per young treatment group. The methods state that the experiment was replicated three times, but the paper displays data from one experiment.
- **Cell-death and stress endpoints:** TUNEL and cleaved-caspase-3/Olig2 staining in aged mouse brain; ATF4/Olig2 and XBP1/Olig2 staining in the rostral corpus callosum. The Results text locates the TUNEL/caspase analysis in the corpus callosum, whereas the Figure 2 legend says the quantification shown was within the hippocampus; the main article does not resolve this discrepancy.

The paper does not report one deduplicated total animal count across the TEM, histology, cell-death, and stress-marker cohorts; `n-subjects` is therefore left null rather than inferred.

### Primary rat oligodendrocyte experiments

- **Source:** Primary OPCs isolated from cortices of postnatal-day-0–3 rat pups.
- **Exposure:** Dasatinib 50 nM, quercetin 50 µM, the combination, or vehicle.
- **Mature oligodendrocytes:** OPCs were differentiated for 72 hours and then exposed for 24 hours. Outcomes included TUNEL, MBP/Olig2 immunocytochemistry, live-imaging process complexity, and bulk RNA sequencing.
- **Differentiating OPCs:** D, Q, D+Q, or vehicle was present during a 72-hour differentiation interval. Outcomes included the fractions of MBP+ and Olig2+ cells and lactate-dehydrogenase release.

## Key results

### D+Q reduced myelination in young and aged healthy mice

- D+Q shifted corpus-callosum axonal g-ratio distributions upward relative to age-matched vehicle controls, consistent with thinner compact myelin: aged `P < 0.0001`, young `P = 0.0001` by Kolmogorov–Smirnov tests. These are axon-level distribution tests; they treat thousands of axons nested within three mice per group as observations and do not establish an animal-level inferential result.
- Mean axon diameter did not differ significantly between D+Q and vehicle groups, arguing against axon-caliber imbalance as the explanation for the g-ratio result.
- The authors interpreted representative Luxol-fast-blue images from aged mice as myelin loss in the anterior/rostral corpus callosum and reported no loss in the body or splenium. The main article gives no sample size, quantitative effect estimate, or statistical test for this histology result, and the anatomical selectivity was unexplained.
- The paper did not provide a numerical mouse-level effect estimate or confidence interval for the g-ratio shift.

### Dysfunction occurred without detected oligodendrocyte loss

- In mature rat oligodendrocytes, TUNEL positivity did not differ significantly across vehicle, D, Q, and D+Q (`n = 3/group`, `P = 0.0788`).
- Lactate-dehydrogenase release from differentiating OPC cultures was also nonsignificant (`n = 5/group`, `P = 0.0596`).
- In aged mouse brain, TUNEL (`n = 4/group`, `P = 0.4479`) and cleaved-caspase-3/Olig2 (`n = 4/group`, `P = 0.2429`) did not differ significantly between D+Q and vehicle. The main text and Figure 2 legend disagree on whether the quantified region was corpus callosum or hippocampus.
- The authors also report unchanged Olig2+ cell counts. Within the sensitivity and anatomical coverage of these assays, the data support dysfunction rather than detected acute killing of the oligodendrocyte lineage over this four-week window; they do not exclude cell loss in an unmeasured region or time window.

### OPC differentiation and mature-cell morphology were impaired

- D+Q reduced the fraction of MBP+ cells after 72 hours of OPC differentiation (`n = 5/group`, except quercetin `n = 4`; one-way ANOVA `P < 0.05`) without changing the fraction of Olig2+ cells (`P = 0.7881`).
- In already mature oligodendrocytes, the MBP+ fraction was not significantly changed (`P = 0.1447`), but cellular process complexity was markedly lower (`n = 4/group`, one-way ANOVA `P < 0.0001`).
- Live imaging showed process retraction beginning within approximately 20 minutes. Dasatinib, quercetin, and D+Q each produced an approximately 45% decline in complexity over 24 hours, whereas vehicle-treated cells increased in complexity.

These single-agent in-vitro effects prevent attribution of the phenotype specifically to the combination, but only the combination was tested in vivo.

### Endoplasmic-reticulum-stress and unfolded-protein-response-associated signatures increased

- Relative to vehicle-treated mature oligodendrocytes, bulk RNA sequencing identified 6,191 differentially expressed genes after D+Q, 5,761 after dasatinib, and 3,823 after quercetin.
- Ingenuity Pathway Analysis predicted activation of XBP1- and ATF6-linked chaperone programs, macroautophagy/autophagy, the unfolded protein response, and ATF4-linked endoplasmic-reticulum-stress signaling, alongside inhibition of translation initiation, elongation, and termination.
- D+Q increased unfolded-protein-response-associated transcripts including *Hspa5/Bip*, *Xbp1*, *Atf4*, *Ddit3/Chop*, *Trib3*, and *Asns*. It downregulated myelination-related *Fyn* and *Myrf* and several genes involved in MBP mRNA transport, while increasing differentiation inhibitors *Sox5*, *Id2*, and *Id4*.
- In aged mouse rostral corpus callosum, D+Q increased ATF4+/Olig2+ cells (`n = 3/group`, `P < 0.01`) and XBP1+/Olig2+ cells (`n = 3/group`, `P < 0.032`).

The pathway result is mechanistically coherent but remains associative: the study did not block PERK/ATF4, XBP1, or another unfolded-protein-response arm to test whether doing so prevents process retraction or demyelination. It also did not directly report PERK or eIF2α phosphorylation, and total XBP1 staining does not by itself establish IRE1-mediated XBP1 splicing.

## Interpretation for aging interventions

The study raises a safety concern for treating D+Q exposure as uniformly beneficial. Oligodendrocytes have an unusually high protein-synthesis burden, and D+Q directly perturbed primary neonatal-rat oligodendrocytes in culture; those cultures were neither selected for nor demonstrated to contain senescent cells. Importantly, the investigators did not measure senescent-cell burden or demonstrate senolytic target engagement in the brain. The results therefore establish an adverse effect of this drug regimen, but do not show that the injury was caused by senescent-cell clearance itself.

The age comparison also argues against a toxicity restricted to old animals: young mice showed the compact-myelin phenotype too. Conversely, only one mouse dose schedule was tested, brain pharmacokinetics were not measured, and the affected rostral corpus-callosum region may not translate directly to intermittent human D+Q regimens. #gap/needs-human-replication #gap/needs-replication #gap/no-mechanism

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Core oligodendrocyte myelination biology and unfolded-protein-response machinery are conserved, but whether D+Q evokes the same response in human oligodendrocytes was not tested. |
| Phenotype conserved in humans? | partial | Corpus-callosum demyelination and oligodendrocyte stress occur in human disease, but D+Q-induced demyelination was tested only in mice and rat cells. |
| Replicated in humans? | no | No imaging, cerebrospinal-fluid myelin marker, neuropathology, or clinical demyelination endpoint was studied. #gap/needs-human-replication |

## Limitations

- **Small biological sample for the primary in-vivo endpoint:** the displayed TEM result used three mice per group. Thousands of axons were analyzed with a Kolmogorov–Smirnov test, but axons from the same mouse are not independent biological subjects; mouse-level effect estimates and confidence intervals were not reported.
- **Representative experiment:** the TEM methods say the experiment was replicated three times, yet only one experiment is presented and the repeat results are not pooled.
- **Qualitative myelin-loss histology:** the main article provides no `n`, effect size, quantification, or statistical test for the Luxol-fast-blue result.
- **Anatomical inconsistency in cell-death assays:** the Results text says the TUNEL/caspase analysis was in corpus callosum, while the Figure 2 legend says the displayed quantification was in hippocampus.
- **Incomplete sample reporting:** a total unique-animal count, sex allocation, randomization, allocation concealment, and blinding were not stated in the main article. Biological-replicate counts, differential-expression thresholds, and sequencing quality-control details for RNA sequencing were also not reported in the main article and could not be checked without the supporting information.
- **No senolytic target-engagement measurement:** the study did not quantify senescent cells before or after treatment, so senolysis cannot be separated from direct off-target pharmacology.
- **Combination attribution:** only D+Q was tested in vivo; dasatinib and quercetin individually produced rapid process retraction in vitro.
- **Mechanism not rescued:** transcriptomic pathway inference and ATF4/XBP1 staining support, but do not prove, unfolded-protein-response causality.
- **No direct pathway-state measurement:** PERK/eIF2α phosphorylation and XBP1 splicing were not reported.
- **Single dose and no pharmacokinetics:** no dose–response experiment or plasma/brain drug-exposure measurement was reported.
- **Regional selectivity unexplained:** Luxol fast blue loss was confined to the rostral corpus callosum; the body and splenium were unaffected.
- **No functional endpoint:** cognition, conduction, locomotion, and behavior were not tested.
- **No recovery assessment:** the study ended after week 4 and did not test reversibility, remyelination, or delayed progression.
- **Healthy-animal model:** no multiple-sclerosis, aging-related white-matter-disease, or remyelination-challenge cohort was studied.
- **Single laboratory and no independent replication.** #gap/needs-replication
- **No human evidence.** #gap/needs-human-replication

## Cited by wiki pages

[Auto-populated by Obsidian backlinks panel]
