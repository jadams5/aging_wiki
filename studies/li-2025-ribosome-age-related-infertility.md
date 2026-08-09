---
type: study
doi: 10.1016/j.xcrm.2025.102424
pmid: 41151579
pmc: PMC12711675
title: "Ribosome dysregulation and intervention in age-related infertility"
authors: [Li J, Wang H, Zhu P, Chen H, Zuo H, et al.]
year: 2025
journal: Cell Reports Medicine
volume: 6
issue: 11
pages: "102424"
publication-type: research-article
study-design: rct
organism: multi
n-subjects: null  # Multi-part study: 100 biospecimen donors plus 100 randomized participants, with nested/pooled assay units and ex-vivo mouse cohorts
intervention: ["[[rapamycin]]"]
hallmarks-tested: ["[[loss-of-proteostasis]]", "[[epigenetic-alterations]]", "[[genomic-instability]]", "[[deregulated-nutrient-sensing]]"]
human-evidence: true
peer-reviewed: true
preregistered: true  # ChiCTR2300069828
key-findings: [age-associated-ribosome-gene-upregulation, cumulus-cell-proteostasis-disruption, age-associated-h3k9me3-redistribution, rapamycin-improves-embryo-morphology, borderline-secondary-clinical-pregnancy-signal]
local-pdf: null
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Full article and supplied supplements checked: figure legends, sample-level Tables S1/S4, participant-level Tables S5/S6, trial protocol, statistical-analysis plan and CONSORT checklist. Trial counts, denominators and reported estimates were cross-checked; restricted raw omics data were not reanalyzed. PubMed/PMC and current literature checked for corrections, retractions and supersession through 2026-08-09."
---

# Ribosome dysregulation and intervention in age-related infertility

## TL;DR

Li et al. profiled germinal-vesicle [[oocytes]] and surrounding [[cumulus-cells]] from IVF/ICSI donors and reported age-associated upregulation of cytosolic and mitochondrial ribosome/translation programs, with declining meiotic, lysosomal, proteasomal and oxidative-stress programs. Older cumulus cells had more 18S/28S rRNA, enlarged but fewer nucleoli, higher protein synthesis, lower lysosomal signal and more protein aggregates. Small methylome and H3K9me3 CUT&Tag cohorts suggested that locus-specific hypomethylation and loss/redistribution of heterochromatin could release ribosome-gene transcription. Rapamycin or cycloheximide reduced protein-synthesis/senescence-associated readouts in cultured cumulus cells; rapamycin also improved maturation, ROS and spindle endpoints in **ex-vivo** mouse oocyte culture.

In ChiCTR2300069828, 100 women described as having more than one failed IVF cycle were randomized to standard treatment with or without oral rapamycin 1 mg/day for 21–28 days before oocyte retrieval. MII-oocyte yield was null, while several embryo-count/morphology endpoints favored rapamycin. Clinical pregnancy, a secondary outcome analyzed only after embryo transfer, was 20/40 versus 11/39 (RR 1.77, 95% CI 0.98–3.19; P=0.047). The confidence interval includes 1, allocation-stage attrition was substantial, and live-birth follow-up was incomplete and null among participants who had reached their due date. This is an intriguing small single-centre RCT, not established fertility efficacy or safety. #gap/needs-replication #gap/long-term-unknown

## Design

### Human discovery samples

The investigators collected **71 GV-stage oocytes and 114 cumulus-cell samples from 100 donors aged 23–48 years**. Donors underwent IVF/ICSI with their own oocytes for maternal-age or male-factor indications; endometriosis, cancer, chronic infection and autoimmune or genetic disease were excluded. MII oocytes were retained for clinical fertilization, so all research oocytes were immature GV-stage cells obtained after controlled ovarian stimulation.

The apparent sample size changes by assay and unit of independence:

| Assay | Material | Biological sampling and analytical n |
|---|---|---|
| Smart-seq2 | Oocytes | 25 oocytes from 19 donors aged 24–43 passed QC. Each oocyte was library-duplicated; 48 of the 50 technical-library profiles were retained and analyzed rather than collapsing to 25 oocytes or 19 donors. |
| Smart-seq2 | Cumulus cells | 30 samples from 15 donors aged 24–43; two samples came from each donor and were analyzed as 30 profiles. |
| MethylC-seq | Oocytes | Four pooled libraries, two/age group; each library combined 10 GV oocytes from 3–5 similarly aged donors. Thus 40 oocytes total, from 7 younger and 9 older donors in Table S1. |
| MethylC-seq | Cumulus cells | Six one-donor libraries: two younger (ages 28, 28) and four labeled older (ages 34, 35, 42, 42). Figure S4 places the 34-year-old sample in the nominal “>34” group. |
| H3K9me3 CUT&Tag | Cumulus cells | Four donors total: young ages 30 and 31, older ages 41 and 39. The two paired batches used different cell inputs (10,000 versus 30,000), held equal within each batch. |
| H3K9me3 immunofluorescence | Cumulus cells | Three donors/group (ages 28, 31, 31 versus 38, 39, 43); 200 cells analyzed. |
| Nucleolin morphology | Cumulus cells | Six donors per age group; 100 cells/sample, reported and tested as n=600 cells/group rather than donor-level n=6/group. |
| 18S/28S qPCR | Cumulus cells | 22 donor samples, ages 24–44. |
| LysoTracker and Proteostat | Cumulus cells | Six donor samples/group, 80 cells/sample and reported n=480 cells/group, drawn from 12 donors across five paired experimental batches. |
| Oocyte Proteostat | Oocytes | Three donors/group across three paired experiments. |

The donor, oocyte/cell-sample, technical-library and imaged-cell counts should not be treated as interchangeable independent n values. Several inferential tests nevertheless used technical-library profiles, imaged cells/fields, CpG sites or CUT&Tag peaks as observations without a donor-level mixed model; their nominal P values therefore do not establish donor-level replication.

### Age-transition analysis

Age-correlated genes were selected using |r|≥0.4 in oocytes and |r|≥0.5 in cumulus cells with BH-adjusted P<0.05, using the duplicated/nested RNA-seq profiles described above. A transcriptomic transition near age 34 was visually inferred from those correlation-selected heatmaps and then reused to define grouped analyses; no prespecified breakpoint, change-point model or out-of-sample threshold-selection procedure was reported. The manuscript also variably writes the older group as “>34” or “>34 (including 34),” and Figure S4 assigns an age-34 methylome to that group. An independent published oocyte dataset showed a similar visual age pattern and ribosome enrichment, but the precise age-34 threshold remains data-derived rather than prospectively validated.

### Cell-culture and ex-vivo mouse interventions

- Human cumulus cells were cultured for three days with rapamycin 0.25 or 0.50 µM or cycloheximide 0.30 µM. Protein-synthesis assays used 0.50 µM rapamycin or 0.30 µM cycloheximide. The highlighted SA-β-gal panel used one young (26-year-old) and one older (37-year-old) donor culture in three repeated experiments with 20 fields/experiment.
- Young (2-month) and old (10-month) C57BL/6 females were euthanized, ovaries dissected and GV oocytes isolated. Oocytes were split into IVM medium with or without rapamycin 0.50 µM for 17–18 h. This is **ex-vivo oocyte maturation**, not systemic or in-vivo rapamycin treatment.
- Mouse cumulus-cell immunoblotting used four young and four old mice; other panels used three experimental batches, 15–40 oocytes/condition or 400 imaged cells as specified in Figure S9.

### Randomized clinical trial

ChiCTR2300069828 was a single-centre, parallel, 1:1 randomized trial at the Children's Hospital of Shanxi and Women Health Center of Shanxi. Eligible participants were described as infertile women with more than one prior failed IVF cycle; mean age was 36.4±4.9 years with rapamycin and 34.8±4.7 years with control. The protocol and registry title referred to diminished ovarian reserve, but the published inclusion criteria did not require a specific AMH, AFC or FSH threshold. The registry specified ages 25–45, yet participant-level Tables S5–S6 include one 49-year-old control participant and one 46-year-old rapamycin participant without explaining these eligibility deviations. Moreover, 64/100 participants are listed as being in cycle 2, with cycle number defined as including the reported cycle; that appears to imply only one previous cycle for most participants and makes implementation of the stated “more than one IVF cycle failure” criterion unclear.

| Element | Details |
|---|---|
| Enrollment | 122 screened; 22 excluded without reasons in the trial-flow figure; 100 randomized, 50/group |
| Control | Standard long GnRH-agonist stimulation protocol |
| Rapamycin | Same protocol plus oral sirolimus 1 mg/day for 21–28 days, from endogenous-hormone downregulation through oocyte retrieval |
| Prespecified primary outcomes | Oocyte number and embryo number |
| Secondary outcome | Clinical pregnancy, defined as intrauterine gestational sac 30 days after transfer |
| Randomization | SPSS-generated odd/even numbers placed in sequential envelopes; assignment opened at enrollment |
| Masking/placebo | No placebo; no participant, clinician, embryologist or outcome-assessor blinding was reported after allocation, and the CONSORT checklist marked blinding “n/a” |
| Power | 42/group for an assumed 30% versus 60% clinical-pregnancy rate, inflated to 50/group for 10% dropout |

The report says envelopes were unknown to clinical investigators before opening, but does not document opacity, tamper evidence or who prepared/held them. Thus sequence generation is described, while concealment implementation and post-allocation masking remain incompletely reported. The statistical-analysis plan did not prespecify an intention-to-treat population, handling of missing outcomes or multiplicity adjustment across the several oocyte, embryo and pregnancy endpoints.

## Key results

### Ribosome, rRNA and nucleolar programs rise with age

Among age-correlated transcripts, 253 genes rose and 517 fell in older oocytes; ribosome and oxidative-phosphorylation pathways were enriched among increases, while kinetochore, microtubule-organizing, actin, cohesion and DNA-repair programs fell. In cumulus cells, 396 genes rose and 2,181 fell; ribosome genes increased while lysosome, proteasome, metabolic and oxidative-stress programs decreased. Both cytosolic large/small ribosomal subunits and several mitochondrial ribosome genes contributed.

Older cumulus cells had greater nucleolin-defined total nucleolar area but fewer nucleoli. 18S and 28S rRNA abundance increased with donor age. p-mTOR rose, LC3-II fell and homopropargylglycine incorporation showed higher translation. These measures support greater ribosome biogenesis/translation, but increased transcript or rRNA abundance alone does not prove more functional ribosomes or better translational fidelity.

### Protein production increases while clearance and proteostasis decline

LysoTracker signal decreased with age, lysosome/proteasome transcripts fell and Proteostat-positive aggregates increased in cumulus cells. By contrast, protein aggregates in human oocytes increased only slightly and **not significantly**. The proposed imbalance—higher synthesis plus lower clearance—is therefore strongest in cultured cumulus cells and should not be generalized unqualified to the oocyte.

Rapamycin 0.50 µM reduced the age-associated protein-synthesis signal, and rapamycin or cycloheximide reduced SA-β-gal activity in older cumulus cells. These short culture experiments show that suppressing translation changes senescence-associated readouts; they do not establish that ribosome-gene upregulation alone causes age-related infertility.

### Small epigenomic cohorts suggest locus-specific deregulation

Oocyte methylomes showed a slight global methylation increase with age and more hypermethylated than hypomethylated DMRs. *RPS15* was hypomethylated/upregulated and *CUL4B* hypermethylated/downregulated in integrated analysis. Cumulus-cell global methylation changed little, although 2,398 hypermethylated and 2,227 hypomethylated DMRs were reported and ribosome-gene promoters/bodies tended toward lower methylation. L1 expression rose as L1 methylation fell; AZT reduced L1 and 53BP1 foci, but a human causal chain from L1 to ribosome dysregulation was not directly established.

H3K9me3 abundance decreased with age by immunofluorescence and CUT&Tag, including at ribosome-biogenesis, rRNA-processing and ribosome-gene regions. Chaetocin inhibition of H3K9me3 increased selected ribosome transcripts. H3K27me3 immunofluorescence was unchanged. With only two CUT&Tag donors per age group and two pooled oocyte methylomes per group, peak- or CpG-level tests cannot supply the missing donor-level replication; these mechanistic epigenomic findings are hypothesis-generating.

### Ex-vivo rapamycin improves aged-mouse oocyte readouts

In old mouse cumulus cells, rapamycin reduced phosphorylation of 4E-BP1 and S6, SA-β-gal and ROS. In oocytes matured ex vivo, rapamycin lowered p-S6 without changing total S6, increased polar-body extrusion/MII maturation, lowered ROS and reduced disrupted spindles and chromosome misalignment. No mouse was dosed systemically, no mating or live-birth endpoint was tested, and the experiment does not establish in-vivo reproductive efficacy.

### Trial embryo outcomes improve despite a null MII yield

Three control and five rapamycin participants produced no MII oocytes, leaving **47 control versus 45 rapamycin participants** in the embryo analysis. The published medians (Q1, Q3) were:

| Outcome | Rapamycin | Control | P |
|---|---:|---:|---:|
| MII oocytes retrieved | 3 (1, 4) | 2 (1, 3) | 0.108 |
| 2PN zygotes | 3 (2, 4) | 2 (1, 3) | 0.012 |
| Day-3 embryos | 2 (1, 3) | 1 (1, 2) | 0.001 |
| Good-quality day-3 embryos | 2 (1, 3) | 1 (0, 1) | <0.001 |
| Day-5/6 blastocysts | 2 (2, 2), n=21 | 1 (1, 1), n=12 | 0.012 |
| Top-quality day-5/6 blastocysts | 1 (0, 2), n=21 | 0 (0, 0), n=12 | 0.043 |

The MII-yield primary component was null. Blastocyst outcomes came from selected subsets because extended culture depended on day-3 embryo quality and patient preference, so those n=21 versus n=12 comparisons were not preserved randomized groups. One rapamycin participant underwent two treated cycles, and Table S6 appears to average her cycle counts (including fractional values), another unit-of-analysis complication.

### Pregnancy signal is secondary, marginal and post-randomization

By the report cutoff, 40/45 rapamycin and 39/47 control participants with MII oocytes had completed embryo transfer. Clinical pregnancy occurred in **20/40 versus 11/39**:

- absolute difference 21.8 percentage points (95% CI 0.8–42.8)
- risk ratio **1.77** (95% CI **0.98–3.19**)
- P=**0.047**

This analysis conditions on reaching transfer and is not an intention-to-treat comparison of all 50 randomized participants per arm. The effect is borderline: the reported two-sided confidence interval includes the null even though the chi-square P value is just below 0.05.

Transfer stage was chosen after randomization based on day-3 embryo quality and participant preference: rapamycin 20 day-3/20 day-5–6 versus control 28 day-3/11 day-5–6. The actual stage-specific pregnancy counts were 9/20 versus 8/28 after day-3 transfer and 11/20 versus 3/11 after day-5–6 transfer. However, the published stage table instead divides each count by **all** transferred participants: 9/40 versus 8/39 (22.5% versus 20.5%; RR 1.10, 95% CI 0.47–2.55; P=0.830) and 11/40 versus 3/39 (27.5% versus 7.7%; RR 3.58, 95% CI 1.08–11.85; P=0.021). Transfer-stage claims are therefore both denominator-mislabeled and especially vulnerable to post-treatment selection; neither comparison is a randomized stage-specific effect.

### Live birth was incomplete and null at cutoff

Among pregnant participants who had reached their due date, **10/14 rapamycin versus 6/8 control** delivered live-born infants (71.4% versus 75.0%); the paper states this did not differ but gives no exact P value or confidence interval. At cutoff, the 20 rapamycin clinical pregnancies comprised 10 participants with live birth, four pregnancy losses and six ongoing pregnancies; the 11 control pregnancies comprised six with live birth, one pregnancy loss, one ectopic pregnancy and three ongoing pregnancies. Conditioning on pregnancy and due-date availability cannot estimate randomized live-birth efficacy, and outcomes per randomized participant were incomplete. The statement that live births “further confirm safety” is therefore not supported by a completed comparative safety analysis.

## Null, negative and unresolved findings

- Rapamycin did **not** significantly increase the number of MII oocytes retrieved (P=0.108).
- Under the authors' all-transfer denominators, the day-3 pregnancy comparison was null (9/40 versus 8/39; P=0.830); the within-stage denominators were 9/20 versus 8/28, but transfer stage was selected after treatment.
- Human oocyte Proteostat aggregation was not significantly different with age, unlike the pronounced cumulus-cell signal.
- H3K27me3 immunofluorescence did not differ between young and older cumulus cells.
- Live birth among due-date participants was numerically similar and statistically null; randomized live-birth rates were not available.
- The study did not determine whether oral rapamycin acted directly on the ovary/oocyte or indirectly through systemic effects.
- No aneuploidy testing, euploid-embryo rate, implantation per embryo, cumulative live birth per randomized participant, longer-term child outcome or independent replication was reported.
- The ex-vivo mouse experiment did not test mating, pregnancy or live birth. #gap/needs-replication #gap/no-mechanism

## Safety and adverse observations

The protocol listed known sirolimus risks and planned adverse-event and laboratory monitoring with an independent DSMB. The article did **not** provide an adverse-event table, treatment-emergent laboratory results, discontinuations attributable to rapamycin, adherence, achieved blood concentrations or a formal maternal/fetal safety analysis; its CONSORT checklist marked the harms item “n/a.” A 21–28-day course before oocyte retrieval is shorter than transplant exposure but does not establish reproductive safety. No placebo and no reported post-allocation blinding increase ascertainment risk for subjective symptoms and embryo morphology. Incomplete pregnancy/live-birth follow-up and the small sample cannot exclude miscarriage, congenital, neonatal, infection, metabolic or immunosuppressive harms. #gap/long-term-unknown

## Extrapolation and clinical interpretation

| Dimension | Status | Notes |
|---|---|---|
| Human age association? | yes, selected IVF samples | Ribosome/translation changes were measured in stimulated GV oocytes and cumulus cells, with substantial technical/donor clustering. |
| Mechanism perturbed in human cells? | partial | Rapamycin/CHX changed translation and SA-β-gal in short cumulus-cell culture; direct human-oocyte perturbation was not performed. |
| Randomized human efficacy? | preliminary | Embryo morphology/count endpoints favored rapamycin, MII yield was null, and secondary pregnancy analysis excluded participants who did not reach transfer. |
| Live-birth efficacy and safety? | not established | Follow-up was incomplete and the reported due-date subset was null. |

The trial population—women averaging approximately 36 years and selected for prior IVF failure—does not represent unselected age-related infertility, natural conception or menopause delay. Morphology-based embryo quality is clinically relevant but cannot replace cumulative live birth or offspring safety. #gap/needs-human-replication

## Limitations and conflicts

- **Biological independence and pseudoreplication:** oocyte technical duplicates and two cumulus samples per donor inflate RNA-profile counts relative to biological donors. Several image panels test hundreds of cells/fields from only 3–6 donors/group, and mouse panels similarly report oocytes or cells rather than animals as n.
- **Data-derived age boundary:** age 34 was visually inferred from correlation-selected profiles, inconsistently expressed as >34 while including 34, and then reused for group comparisons. It is not a validated clinical threshold.
- **Tiny epigenomic n:** oocyte MethylC-seq had two pooled libraries/group; cumulus MethylC-seq had two younger versus four nominally older donors; CUT&Tag had two donors/group with unequal cell inputs across batches. CpG/peak-level P values do not overcome these donor counts.
- **Selected biospecimens:** research oocytes were GV-stage cells after ovarian stimulation from IVF/ICSI donors. Results may not describe naturally ovulated MII oocytes or unstimulated ovaries.
- **Causal scope:** translation inhibition changed senescence and mouse-maturation readouts, but rapamycin affects [[mtor]], [[autophagy]] and many metabolic programs beyond ribosome biogenesis.
- **Trial masking and placebo:** sequence generation and sequential envelopes were described, but envelope safeguards were not; no placebo or post-allocation blinding was reported. Embryo morphology and transfer decisions can be observer- and preference-sensitive.
- **Eligibility and trial flow:** reasons for the 22 screening exclusions were not reported. Two participant ages exceeded the registry's 25–45 range, and the supplemental cycle counts make the stated requirement for more than one prior failed cycle unclear.
- **Post-randomization exclusions:** embryo outcomes omitted eight randomized participants without MII oocytes; pregnancy omitted additional participants who had not completed transfer. No full intention-to-treat efficacy analysis was presented.
- **Transfer-stage confounding and denominator labeling:** extended culture and transfer day depended on post-treatment embryo quality and patient wishes; the paper's stage rows use all transferred participants, not recipients of that transfer stage, as denominators. Stage-specific pregnancy comparisons were not randomized.
- **Power assumptions:** the trial was powered for a large 30-percentage-point pregnancy improvement despite calling pregnancy secondary; it was not powered for live birth or safety.
- **Multiplicity and analysis plan:** several correlated oocyte, embryo and pregnancy outcomes were tested without a prespecified hierarchy or multiplicity correction; missing-data and intention-to-treat rules were not specified.
- **Incomplete follow-up:** live-birth reporting was conditioned on pregnancy and reaching the due date, with ongoing pregnancies at cutoff.
- **Endpoint classification:** Table S5 labels one ectopic pregnancy as a “singleton” clinical pregnancy even though the prespecified definition required an intrauterine gestational sac.
- **Safety reporting:** protocol monitoring does not substitute for published adverse-event, laboratory, fetal and neonatal data.
- **Conflicts:** the authors declared no competing interests.

#gap/needs-replication #gap/needs-human-replication #gap/long-term-unknown #gap/dose-response-unclear

## Related pages

- [[oocytes]], [[cumulus-cells]], [[ovary]] and [[age-related-female-infertility]]
- [[ribosome-biogenesis]], [[protein-synthesis]], [[loss-of-proteostasis]] and [[autophagy]]
- [[mtor]], [[rapamycin]] and [[mtor-inhibitors]]
- [[epigenetic-alterations]] and [[genomic-instability]]

## Cited by wiki pages

[Auto-populated by Obsidian backlinks panel]
