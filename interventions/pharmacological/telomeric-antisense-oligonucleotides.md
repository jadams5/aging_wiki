---
type: intervention
aliases: [telomeric antisense oligonucleotides, tASOs, anti-TeloG, anti-TeloC, telomeric DDR-targeting ASOs]
mode: pharmacological
mechanisms: [telomeric-ddr-inhibition, telomeric-rna-steric-blockade]
targets: []
target-hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
target-pathways: ["[[dna-damage-response]]"]
human-evidence-level: preclinical-only
clinical-stage: preclinical
safety-profile: investigational
translation-gap: preclinical-only
next-experiment: "GLP toxicology and dose-ranging in an aged large-animal or nonhuman-primate model, with longitudinal hematopoietic function, genome-wide mutation and clonal-expansion surveillance, and recovery follow-up before a first-in-human telomere-biology-disorder trial."
clinical-trials-active: 0
literature-checked-through: 2026-08-02
verified: true
verified-date: 2026-08-02
verified-by: claude
verified-scope: "All biological, sequence, chemistry, dose, design, evidence-stage, safety and evidence-lineage claims checked against the complete Oppezzo 2026 version of record and Reporting Summary and the cited primary full texts; Crossmark, PubMed, Europe PMC and ClinicalTrials.gov checked through 2026-08-02."
---

# Telomeric antisense oligonucleotides

Telomeric antisense oligonucleotides (tASOs) are experimental, steric-blocking oligonucleotides designed to disrupt the RNA-dependent DNA-damage-response assemblies formed at dysfunctional telomeres. They are **not telomerase activators**, do not target [[terc]], and did not lengthen telomeres in the 2026 mouse study. They instead suppress persistent, telomere-localized DDR signaling downstream of critically short telomeres.[^oppezzo2026]

The leading evidence is one randomized preclinical study in third-generation *Terc*−/− mice, naturally aged wild-type mice, and two older human bone-marrow donors ex vivo. A pooled anti-TeloG-plus-anti-TeloC group improved several molecular and hematopoietic readouts, but those analyses do not establish that each sequence was effective on its own; **only anti-TeloG significantly rescued competitive hematopoietic repopulation** when the sequences were tested separately.[^oppezzo2026] There is no in-vivo human evidence and no registered active clinical trial.

---

## Mechanism and class boundary

Dysfunctional telomeres are transcribed from both strands into telomeric non-coding RNAs (tncRNAs). These transcripts help recruit and organize local DDR factors into RNA-dependent assemblies at chromosome ends. The locked-nucleic-acid (LNA) mixmer tASOs with fully phosphorothioate backbones hybridize to a chosen telomeric-repeat transcript and inhibit its function by steric hindrance; they are not RNase-H-recruiting gapmers and do not use RNA interference.[^rossiello2017] In Oppezzo et al., treatment reduced telomeric dysfunction-induced foci, ATM-pathway readouts, and downstream senescence/inflammatory signals while leaving telomere length unchanged. In the bone-marrow immunofluorescence assay, the ATR-associated pCHK1 signal was minimal and unaffected by tASO.[^oppezzo2026]

This is therefore a pharmacological **damage-response modulation** strategy:

`short/dysfunctional telomere → telomeric transcript-dependent DDR assembly → ATM signaling → senescence/inflammatory dysfunction`

tASOs intervene at the RNA-dependent assembly step. [[interventions/gene-therapy/aav-tert]] and [[telomerase-activators]] instead act upstream by increasing telomerase activity or TERT expression and may alter telomere maintenance.

## Molecules and chemistry

Oppezzo et al. used LNA-modified oligonucleotides with fully phosphorothioate backbones.[^oppezzo2026]

| Reagent | Sequence, 5′→3′ | Intended target | Interpretation |
|---|---|---|---|
| anti-TeloG | `CCCTAACCCTAACCCTAACCC` | G-rich telomeric transcript | C-rich ASO; the more compelling development candidate because it alone significantly restored competitive repopulation |
| anti-TeloC | `GGGTTAGGGTTAGGGTTAGGG` | C-rich telomeric transcript | G-rich ASO; was included in the pooled group with molecular/functional benefits, but its sequence-specific efficacy was not established for most outcomes and it did not significantly rescue competitive repopulation |
| control ASO | `ACTGATAGGGAGTGGTAAACT` | non-telomeric control | pooled with untreated animals in many analyses after no within-pair difference was detected |

The anti-Telo name refers to the **RNA strand targeted**, not the oligonucleotide's own base composition. The study pooled untreated plus control-ASO animals and anti-TeloG plus anti-TeloC animals for many endpoints. That increases power for a class-level comparison but prevents sequence-specific efficacy from being inferred for most outcomes.[^oppezzo2026]

## Evidence

### Telomerase-deficient mice

Third-generation *Terc*−/− mice aged 2–3 months received 15 mg/kg intraperitoneally twice weekly for four weeks and were assessed two or nine months later. Treatment reduced telomeric DDR and senescence markers in marrow and spleen without changing telomere length, improved colony formation and hematopoietic-stem/progenitor-cell quiescence, partially normalized immune and inflammatory phenotypes, and improved antibody response to vaccination.[^oppezzo2026]

The decisive functional test was competitive transplantation. Anti-TeloG significantly increased donor contribution in peripheral blood and donor-derived LSK cells across follow-up, including B-, T- and myeloid-lineage output. Anti-TeloC did not significantly restore competitive repopulation.[^oppezzo2026]

### Naturally aged wild-type mice

Wild-type C57BL/6J mice treated at 15–16 months with the same four-week regimen were assessed for marrow endpoints at about 18 months. LSK γH2AX-high and γH2AX/pKAP1 double-positive fractions decreased significantly, whereas the pKAP1-high fraction alone did not; bulk-marrow *Cdkn2a/p16* messenger RNA fell, colony formation improved, and LSK abundance itself did not increase. A separate vaccine readout measured three weeks after vaccination also showed higher binding-antibody signal.[^oppezzo2026] This broadens the result beyond complete telomerase deficiency but remains a single-study mouse finding.

### Human cells ex vivo

CD34+ bone-marrow cells from two healthy, non-frail male hip-replacement donors aged 60 and 75 years were exposed to 30 μM tASO ex vivo. Pooled tASO means for erythroid and myeloid colony output increased in both donors, but individual anti-TeloG and anti-TeloC responses were nonuniform and descriptive. The experiment had only two biological donors, three technical replicates per donor, and no inferential statistics.[^oppezzo2026] This establishes human-cell exposure, not human therapeutic evidence; `human-evidence-level` therefore remains `preclinical-only`.

### Evidence lineage and replication

The approach traces to a 2017 study showing that antisense blockade of telomeric DDR RNAs could suppress signaling at dysfunctional telomeres; a corrigendum corrected swapped DAPI panels in one supplementary figure without retracting the work.[^rossiello2017] Later reports extended the concept to progeria models and amyloid-stressed neurons.[^aguado2019][^sepe2025] A 2025 *tert*−/− zebrafish study is still a preprint.[^allavena2025]

These studies substantially overlap in senior investigators and do not constitute independent-laboratory replication. Searches of PubMed and Europe PMC through 2026-08-02 found no randomized human trial, meta-analysis, systematic review, or independent translational replication of the tASO/telomeric-DDR intervention. Crossmark showed the 2026 anchor as current, with no correction or retraction.

## Dosing and delivery tested

| Context | Exposure |
|---|---|
| G3 *Terc*−/− and aged wild-type mice | 15 mg/kg intraperitoneally, twice weekly for 4 weeks |
| Acute irradiation-specificity experiment | 15 mg/kg intraperitoneally, twice weekly for 5 weeks; irradiation 24 h after the last dose |
| Mouse marrow colony assay ex vivo | 10 μM |
| Human CD34+ HSPCs ex vivo | 30 μM, replenished at cell splitting |

No pharmacokinetic, organ-distribution, dose-ranging, or clinically scalable HSPC-delivery program was reported. Intraperitoneal dosing in mice does not establish a practical human route.[^oppezzo2026]

## Safety and cancer-surveillance problem

Nine months after the short mouse course, blood counts remained in a similar range, spleen weight was unchanged, and hematopoietic histology/necropsy found no overt malignancy. The acute systemic response to 4.5 Gy ionizing radiation remained intact, supporting some telomere selectivity rather than global DDR paralysis.[^oppezzo2026]

Those observations do **not** resolve the central risk: attenuating checkpoint signaling at critically short telomeres could permit genomically damaged or premalignant clones to persist. In 166 people with telomere biology disorders, somatic DDR-pathway alterations were common and loss-of-function *ATM* clones could bypass DDR-mediated senescence; short-term pharmacological ATM inhibition improved cell fitness without detectable chromosomal instability, but the clinical cohort demonstrates why clonal surveillance is necessary when weakening this checkpoint.[^sande2025] Oppezzo et al. did not include genome-wide mutation analysis, cytogenetic instability, clonal-hematopoiesis tracking, adequately powered tumor surveillance, chronic repeat dosing, comprehensive organ toxicology, or a large-animal model. A preventive aging indication would require a particularly low risk tolerance. #gap/long-term-unknown #gap/needs-human-replication

Anti-TeloG and anti-TeloC should also not be treated as interchangeable products. A 2025 neuronal study advanced anti-TeloG for downstream experiments while citing toxicity concerns associated with G-rich ASO sequences, the sequence class that includes anti-TeloC.[^sepe2025] This is a development warning, not evidence of systemic anti-TeloC toxicity in the hematopoietic study.

## Translation status

| Dimension | Assessment |
|---|---|
| Aging hallmark targeted | Telomere attrition consequences; downstream cellular senescence and stem-cell exhaustion |
| Conserved human mechanism | Plausible; telomeric transcripts and DDR machinery exist in human cells |
| Best organism evidence | One randomized study in *Terc*−/− and naturally aged mice |
| Human evidence | Two older male donors ex vivo; no in-vivo exposure |
| Clinical stage | Preclinical |
| Active trials | 0 as of 2026-08-02; ClinicalTrials.gov v2 active-status search for `telomeric antisense oligonucleotide`, `anti-TeloG`, or `anti-TeloC` |
| Main bottlenecks | Product selection, marrow/HSPC delivery, PK/biodistribution, and genomic/cancer safety |

## Knowledge gaps

- Independent replication, including sequence-separated anti-TeloG and anti-TeloC arms, is needed. #gap/needs-replication
- The minimal effective dose, exposure-response curve, tissue distribution, persistence, and optimal delivery route are unknown. #gap/dose-response-unclear
- Human evidence is limited to two male donors ex vivo; sex, ancestry, telomere-disease genotype, and age heterogeneity are untested. #gap/needs-human-replication
- The therapeutic window between reversing maladaptive persistent tDDR and weakening tumor-suppressive genomic surveillance is unknown. #gap/long-term-unknown
- Durability after repeat courses, immune responses to the oligonucleotide chemistry, and off-target hybridization were not established.

## Cross-references

- [[studies/oppezzo-2026-telomeric-ddr-hematopoiesis]] — anchor 2026 study
- [[telomere-attrition]] — upstream lesion and hallmark
- [[dna-damage-response]] — pathway being locally modulated
- [[hematopoietic-stem-cells]] — principal functional target population
- [[telomerase-pathway]] and [[terc]] — mechanistically adjacent but not activated by tASOs
- [[interventions/gene-therapy/aav-tert]] and [[telomerase-activators]] — telomere-restorative approaches with a different intervention point

## Footnotes

[^oppezzo2026]: [[studies/oppezzo-2026-telomeric-ddr-hematopoiesis]] · Oppezzo A et al. · doi:10.1038/s43587-026-01136-9 · randomized in-vivo + ex-vivo study · assay-specific mouse groups generally n=3–26; human n=2 male donors · outcome assessment unblinded except histopathology · G3 *Terc*−/− and aged C57BL/6J mice; aged human CD34+ HSPCs ex vivo · *Nature Aging* 2026

[^rossiello2017]: Rossiello F et al. · doi:10.1038/ncomms13980 · in-vitro + in-vivo · dysfunctional-telomere models · *Nature Communications* 2017 · corrected by doi:10.1038/ncomms15344 (swapped Supplementary Fig. 3d DAPI panels); unretracted

[^aguado2019]: Aguado J et al. · doi:10.1038/s41467-019-13018-3 · in-vitro + in-vivo · Hutchinson–Gilford progeria patient fibroblasts and *Lmna*G609G mice · *Nature Communications* 2019

[^sepe2025]: Sepe S et al. · doi:10.1038/s44318-025-00521-1 · in-vitro and mouse neuronal models · telomeric DDR modulation in amyloid-β42-stressed neurons · *The EMBO Journal* 2025

[^allavena2025]: Allavena G et al. · doi:10.1101/2025.05.23.655694 · preprint · in-vivo · *tert*−/− zebrafish · not peer reviewed

[^sande2025]: Sande CM et al. · doi:10.1172/JCI181659 · n=166 people with telomere biology disorders plus primary-cell experiments · observational cohort + in-vitro pharmacology · 47.6% had clonal hematopoiesis and 21.5% had somatic DDR-pathway variants; low-dose ATM inhibition bypassed senescence without detectable chromosomal instability in the reported assays · *Journal of Clinical Investigation* 2025
