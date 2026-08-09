---
type: intervention
aliases: [IL-11 inhibitors, anti-IL11, IL-11 neutralizing antibodies, IL11RA antibodies, IL-11 pathway inhibitors]
mode: pharmacological
mechanisms: [il11-neutralization, il11ra-blockade, anti-inflammatory, extracellular-matrix-remodeling]
targets: ["[[il-11]]", "[[il-11-receptor-alpha-1]]"]
target-hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[altered-intercellular-communication]]", "[[deregulated-nutrient-sensing]]"]
target-pathways: ["[[il-11-signaling]]", "[[ras-mapk]]", "[[ampk]]", "[[mtor]]", "[[jak-stat-pathway]]"]
human-evidence-level: preclinical-only
clinical-stage: preclinical
safety-profile: investigational
translation-gap: preclinical-only
next-experiment: "Independent late-life replication in genetically heterogeneous mice with histopathology, chronic safety and reproductive/immune endpoints, followed by a biomarker-led older-adult dose-ranging trial only if the safety window is favorable."
clinical-trials-active: 3
literature-checked-through: 2026-08-09
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Widjaja 2024 efficacy, dosing and safety-boundary claims cross-checked against its verified full-source extraction; Wu 2026 and Ng 2021 modality/reproductive claims cross-checked against their verified full-source extractions. ClinicalTrials.gov was re-queried by target and agent synonym through 2026-08-09, confirming three active non-aging antibody trials and the completed LASN01 studies. Date-filtered PubMed and Europe PMC searches found no human aging trial, independent direct replication of the X203 lifespan experiment or superseding large RCT/meta-analysis."
---

# Anti-IL-11 antibodies

Anti-IL-11 interventions block either the [[il-11]] ligand or [[il-11-receptor-alpha-1|IL11RA]]. The geroscience rationale comes from mouse genetics and research antibodies, with a separate human clinical-development program in fibroinflammatory diseases. No antibody has been tested for aging, lifespan, frailty or ovarian aging in humans.

## Research agents

| Agent | Target | Evidence represented here | Status |
|---|---|---|---|
| X203 | IL-11 ligand | Late-life mouse healthspan and lifespan; 40 mg/kg i.p. every 3 weeks for healthspan and monthly for survival | Preclinical research antibody |
| X209 | IL11RA | Serial-passage human cardiac-fibroblast experiments | Preclinical research antibody |
| LASN01 | IL11RA | Phase 1/2a pulmonary fibrosis/TED and Phase 2 TED | Both studies completed (NCT05331300; NCT06226545); non-aging indications |
| BI 765423 | IL-11 ligand | Phase 2 idiopathic pulmonary fibrosis | Recruiting (NCT07036523); non-aging indication |
| 9MW3811 | IL-11 ligand | Phase 1 healthy volunteers; Phase 2 pathological scar | Phase 1 completed (NCT05740475); Phase 2 recruiting (NCT07576608); non-aging indications |
| HB0056 | TSLP and IL-11 bispecific | Phase 1 single-dose healthy-volunteer study | Recruiting (NCT06612970); non-aging indication |

<!-- clinical-trials-active: queried 2026-08-09; count includes direct IL-11/IL11RA agents in RECRUITING or ACTIVE_NOT_RECRUITING trials, deduplicated by NCT ID; recheck in ~6 months -->

## Aging evidence

Widjaja et al. treated 75-week-old C57BL/6J mice with X203. A 25-week healthspan regimen improved measured frailty, grip, body composition, glucose handling, fibrosis and inflammatory/senescence-associated readouts. In separate survival cohorts, monthly treatment from 75 weeks was associated with longer reported median mouse lifespan in both sexes [^widjaja2024]. The survival data came from one program, were incompletely mature at the data cutoff, and have not been independently replicated in heterogeneous mice.

Human experiments in that paper were cultured cells, not treated people. Thus `human-evidence-level: preclinical-only` is an aging-context classification even though other IL-11 drugs have entered human trials for disease indications.

## Ovarian-aging boundary

Wu et al. did **not** test an anti-IL-11 antibody as an ovarian therapy in vivo. Their therapeutic rodent interventions were systemic siIl11 lipid nanoparticles and local ovarian AAV-shIl11ra1; an IL-11-neutralizing antibody was used only in cultured primary human ovarian fibroblasts [^wu2026]. Figure legends specify 2 µg/ml, whereas Methods report only an ND50 of 80 µg/ml in the presence of 10 ng/ml IL-11 and do not state a separate applied concentration, leaving the culture exposure unresolved. Those RNA/gene-silencing results support the target but should not be represented as antibody efficacy in women or animals.

## Human clinical development outside aging

As of 2026-08-09, three active ClinicalTrials.gov studies used direct or bispecific IL-11 inhibition: BI 765423 in idiopathic pulmonary fibrosis (NCT07036523), 9MW3811 in pathological scar (NCT07576608), and HB0056 in healthy volunteers (NCT06612970). All were `RECRUITING`; none studied aging, frailty, lifespan or ovarian aging. LASN01 studies NCT05331300 and NCT06226545 were completed. NCT06226545 posted results for 41 participants with thyroid eye disease, but this small indication-specific dataset does not establish chronic safety in older healthy adults.

The registries also leave major reproductive and geriatric gaps. The BI 765423 trial permits older adults but excludes women with reproductive potential; the 9MW3811 study excludes pregnancy and breastfeeding and requires contraception; and HB0056 is a single-dose study limited to ages 18–55 and excludes pregnancy. These are appropriate trial safeguards, not evidence that sustained IL-11 blockade is reproductively safe.

The aging-context `clinical-stage` remains **preclinical**, consistent with the wiki convention that a clinical drug in another indication does not upgrade an aging program.

## Safety and translation risks

- **Development and fertility:** homozygous *Il11* knockout females were infertile and knockout males produced smaller litters; craniosynostosis-like and trabecular-bone phenotypes were receptor-null-specific in the compared mouse lines. Adult partial inhibition may differ, but a therapeutic window must be demonstrated [^ng2021].
- **Unresolved injury-model mortality:** preliminary use of an earlier bleomycin protocol caused greater mortality in *Il11* knockout than *Il11ra1* knockout mice, prompting a lower dose and day-14 endpoint in the published experiment; the cause was not resolved [^ng2021].
- **Unmeasured immune and repair safety:** the aging-mouse study did not test infection susceptibility, wound healing or vaccine responses, so chronic blockade in older adults would need those endpoints [^widjaja2024].
- **Metabolic weight loss:** marked fat and body-weight reduction was pharmacodynamic in mice; mechanism and human desirability are unresolved [^widjaja2024].
- **Immunogenicity and chronic dosing:** the mouse study did not supply a human chronic-antibody safety package.
- **Conflicts:** the 2024 study disclosed patents and ownership/consulting interests related to IL-11 therapeutics; independent replication is especially important.

## Recency and supersession

Date-filtered PubMed and Europe PMC searches through 2026-08-09 found a newer anti-IL-11 study in an aged-mouse pulmonary-fibrosis model [^miao2026], but no independent direct replication of late-life X203 survival, no completed final update to the censored 2024 survival dataset, and no human aging RCT or meta-analysis. The newer disease-model paper therefore does not supersede the aging-context classification or the replication gap.

#gap/needs-replication #gap/needs-human-replication #gap/long-term-unknown #gap/dose-response-unclear

## Footnotes

[^widjaja2024]: [[studies/widjaja-2024-il11-healthspan-lifespan]] · doi:10.1038/s41586-024-07701-9 · Widjaja AA et al. · *Nature* 2024;632:157–165
[^wu2026]: [[studies/wu-2026-il11-ovarian-stiffness]] · doi:10.1038/s43587-026-01159-2 · Wu M et al. · *Nature Aging* 2026;6:1395–1416
[^ng2021]: [[studies/ng-2021-il11-il11ra1-loss-of-function]] · doi:10.1038/s41598-021-93623-9 · Ng B et al. · *Scientific Reports* 2021;11:14088 · constitutive IL-11/IL11RA1 loss-of-function reproductive and developmental phenotyping in mice
[^miao2026]: doi:10.1016/j.bcp.2026.118204 · Miao Y et al. · *Biochemical Pharmacology* 2026 · in-vivo · model: aged-mouse pulmonary fibrosis; adjacent disease-model evidence, not a lifespan replication
