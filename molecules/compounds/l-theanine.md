---
type: compound
aliases: [theanine, N5-ethyl-L-glutamine, N-ethyl-L-glutamine, Suntheanine]
pubchem-cid: 439378
inchikey: DATAGRPVKZEWHA-YFKPBYRVSA-N
chembl-id: CHEMBL3039113
drugbank-id: DB12444
cas-number: 3081-61-6
administration-route: oral
biologic: false
molecular-formula: C7H14N2O3
molecular-weight-da: 174.20
mechanisms: []
targets: []
hallmarks: []
clinical-stage: supplement
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Preregistered pure-L-theanine dose-ranging RCT in adults aged 60-80 with at least 12 months of follow-up, validated cognitive endpoints, objective sleep measures, and a prespecified mild-cognitive-impairment subgroup."
clinical-trials-active: 8
literature-checked-through: 2026-07-11
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-07-11. Compound identity was checked against PubChem, ChEMBL, and DrugBank, and the 2026 human evidence synthesis was checked against publisher materials, but the full meta-analysis article was subscription-only and unavailable for end-to-end verification (DOI 10.1038/s41380-026-03727-9). #gap/no-fulltext-access

# L-theanine

L-theanine is the naturally occurring L-enantiomer of N5-ethylglutamine, a non-protein amino acid found in tea (*Camellia sinensis*) and sold as an oral dietary supplement. Human trials primarily examine acute attention, stress, mood, and sleep outcomes. The evidence is neurobehavioral rather than geroscience-specific: no trial has shown that L-theanine slows biological aging, prevents age-related cognitive decline, or modifies an aging hallmark.

## Identity

| Field | Value |
|---|---|
| PubChem CID | 439378 |
| ChEMBL ID | CHEMBL3039113 |
| DrugBank ID | DB12444 |
| InChIKey | DATAGRPVKZEWHA-YFKPBYRVSA-N |
| CAS | 3081-61-6 |
| IUPAC name | (2S)-2-amino-5-(ethylamino)-5-oxopentanoic acid |
| Molecular formula | C7H14N2O3 |
| Molecular weight | 174.20 g/mol |
| Isomeric SMILES | `CCNC(=O)CC[C@@H](C(=O)O)N` |

Identity fields were checked against the PubChem L-theanine record (CID 439378), which cross-references ChEMBL and DrugBank.[^pubchem]

## Human cognitive and affective evidence

The most comprehensive current synthesis is [[studies/gerolymos-2026-l-theanine-meta-analysis|Gerolymos et al. 2026]], a meta-analysis of 31 placebo-controlled oral randomized trials (n=1,168). Its strongest result was improved acute choice reaction time (SMD 0.51, 95% CI 0.25-0.77; 7 comparisons, 151 participants). This was a short-term laboratory outcome across several doses, not evidence of durable cognitive enhancement.[^gerolymos2026]

Other outcomes were less persuasive:

- Acute stress improved only modestly (SMD 0.312, 95% CI 0.001-0.623), with 4 of 7 contributing trials at high risk of bias.
- Fatigue was not significantly improved (SMD 0.30, 95% CI -0.26 to 0.86).
- Anxiety results were generally inconsistent and non-significant.
- The full depressive-symptom analysis was null and heterogeneous; a positive SMD 0.69 (95% CI 0.13-1.25) appeared only after excluding one outlying study.
- Dropout did not differ from placebo (RR 1.04, 95% CI 0.84-1.29), and no serious adverse events were reported during the studied periods.

These results support `human-evidence-level: limited`: there is a plausible acute-attention signal, but mood/stress results are unstable and long-term clinical benefit is unproven. #gap/long-term-unknown #gap/dose-response-unclear

## Aging relevance

The meta-analysis included only one trial specifically enrolling middle-aged and older adults (n=52) and did not provide an age-stratified pooled estimate. It therefore cannot answer whether acute reaction-time changes translate to preserved cognition with aging. `hallmarks: []` is intentional: neither the meta-analysis nor the current human trial landscape demonstrates modification of a canonical Hallmark of Aging.

The next useful study is not another small acute crossover experiment. It is an adequately powered, preregistered trial in older adults that separates normal aging from mild cognitive impairment, tests more than one dose, uses validated longitudinal cognitive outcomes and objective sleep measures, and follows participants long enough to assess persistence and safety.

## Clinical trials

As of 2026-07-11, ClinicalTrials.gov listed 8 records matching L-theanine/theanine with status `RECRUITING` or `ACTIVE_NOT_RECRUITING` (NCT05854017, NCT07682532, NCT07298161, NCT07220447, NCT07135232, NCT07092878, NCT07189442, and NCT07319117). This is a deduplicated registry keyword count, not eight L-theanine monotherapy trials: most test multi-ingredient formulations, co-interventions, or adjunctive regimens. Only NCT07220447 clearly tests L-theanine alone.

<!-- clinical-trials-active: queried 2026-07-11 via ClinicalTrials.gov v2 API using L-theanine and theanine; RECRUITING + ACTIVE_NOT_RECRUITING; unique NCT IDs. Recheck in ~6 months. -->

## Limitations and gaps

1. **Aging outcomes are absent.** Acute attention and psychiatric symptom scales do not establish geroprotection or prevention of cognitive aging.
2. **Endpoint pools are small.** The 31-trial total obscures that the choice-reaction-time pool contained 151 participants and the stress pool 120.
3. **Dose-response remains unclear.** The attention pool combined several doses, while newer dose-ranging trials report outcome-specific rather than uniform benefits.
4. **Long-term safety is not established by short trials.** No serious adverse events in small, short studies cannot exclude uncommon or chronic-use harms.
5. **Mechanism is deliberately not assigned here.** The supplied efficacy meta-analysis does not establish a molecular target or aging-relevant mechanism; proposed neurotransmitter mechanisms require a separate primary-source verification pass.

## Footnotes

[^pubchem]: PubChem Compound Summary for L-theanine, CID 439378 · canonical identity record accessed 2026-07-11 · https://pubchem.ncbi.nlm.nih.gov/compound/439378

[^gerolymos2026]: [[studies/gerolymos-2026-l-theanine-meta-analysis]] · n=1,168 (31 randomized trials) · meta-analysis · model: healthy and clinical human populations · strongest endpoint: acute choice reaction time SMD 0.51 (95% CI 0.25-0.77; 7 comparisons, 151 participants) · doi:10.1038/s41380-026-03727-9 · PMID 42410082 · #gap/no-fulltext-access
