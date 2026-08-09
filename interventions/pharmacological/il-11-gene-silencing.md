---
type: intervention
aliases: [siIL11, siIl11, IL11 RNA interference, IL-11 siRNA nanoparticles]
mode: pharmacological
mechanisms: [rna-interference, anti-inflammatory, extracellular-matrix-remodeling]
targets: ["[[il-11]]"]
target-hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]", "[[loss-of-proteostasis]]"]
target-pathways: ["[[il-11-signaling]]", "[[ras-mapk]]"]
human-evidence-level: preclinical-only
clinical-stage: preclinical
safety-profile: investigational
translation-gap: preclinical-only
next-experiment: "Replicate dose-defined, ovary-targeted siIL11 in older rodents with established fibrosis, biodistribution, ovarian reserve, systemic toxicology, maternal outcomes and multigenerational offspring follow-up."
clinical-trials-active: 0
literature-checked-through: 2026-08-09
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "All ovarian siIl11 efficacy, dose/reporting omissions, pregnancy-count recalculations and AAV/antibody modality boundaries cross-checked against the verified Wu 2026 full-source extraction and its source-workbook adjudications. ClinicalTrials.gov was queried under siIL11, IL11 siRNA, IL-11 RNA-interference and gene-silencing synonyms through 2026-08-09; zero active human trials were identified. Date-filtered PubMed and Europe PMC searches found no human IL-11-silencing trial or superseding ovarian study."
---

# IL-11 gene silencing

IL-11 gene silencing uses RNA interference to reduce production of the [[il-11]] ligand upstream of [[il-11-signaling]]. The represented intervention is a lipid-nanoparticle siRNA formulation tested in middle-aged mice and rats; it is not an antibody and is not an approved siRNA product.

## Ovarian-aging evidence

Wu et al. administered control or siIl11 lipid nanoparticles by tail vein twice weekly for four weeks to 36-week-old mice and 40-week-old rats [^wu2026-silencing]. In mice, the treatment reduced ovarian stiffness by 35.7% relative to control siRNA, lowered collagen/ACTA2/pERK measures and improved selected follicle and ovulation endpoints. Rat results converged for stiffness, fibrosis, follicle counts and litter size.

Pregnancy proportions moved in a favorable direction but were not statistically established when recalculated from the source counts: mouse 3/8 versus 6/8 (two-sided Fisher P≈0.315) and rat 3/10 versus 6/10 (P≈0.370). The paper printed P=0.0004 and P=3.34×10−5 for those contrasts, which are irreconcilable with the stated counts. Mouse litter size was higher among pregnancies, but the caption and source workbook disagree on treated n (5 versus 6). These discrepancies preclude a pregnancy-efficacy claim.

The evidence is preclinical and preventive/attenuating: treatment began during a rapid middle-age decline window, not after advanced fibrosis was demonstrated. The injection volume was reported, but the siRNA concentration or mass dose was not. Tail-vein nanoparticles were not ovary-specific, so extra-ovarian effects could contribute.

## Distinction from AAV and antibodies

The same study used local ovarian-bursal AAV-shIl11ra1 as a separate gene-therapy-style experiment targeting the receptor. Vector serotype, construct/promoter, shRNA sequence, genome dose/titer, injection volume, vendor, control-vector identity and biodistribution were not reported. It should not be treated as the same pharmacological product as siIl11 nanoparticles.

Likewise, [[anti-il-11-antibodies]] are a distinct modality. No antibody was used as an in-vivo ovarian intervention in Wu et al.; antibody evidence was confined to cultured human ovarian fibroblasts.

## Translation gaps

- Dose, control-siRNA sequence, pharmacokinetics, biodistribution and duration of ovarian knockdown were insufficiently characterized.
- There was no dedicated systemic toxicology, immune, wound-healing or reproductive-safety package.
- Long-term endocrine function, menopause timing and offspring health were not established.
- Partial adult suppression must be distinguished from germline *Il11*/*Il11ra1* loss, which produced ligand-null female infertility and ligand-null male subfertility, plus receptor-null-specific craniofacial and bone phenotypes, in the compared mouse lines [^ng2021].

<!-- clinical-trials-active: queried 2026-08-09 for IL11/siIL11 gene-silencing interventions; no RECRUITING or ACTIVE_NOT_RECRUITING human trial identified; recheck in ~6 months -->

Date-filtered PubMed and Europe PMC searches found other preclinical IL-11 siRNA delivery systems for lung fibrosis and wound healing, but no human trial and no later ovarian-aging study that resolves Wu et al.'s missing dose, biodistribution, pregnancy-statistics or offspring-safety questions.

#gap/needs-replication #gap/needs-human-replication #gap/dose-response-unclear #gap/long-term-unknown

## Footnotes

[^wu2026-silencing]: [[studies/wu-2026-il11-ovarian-stiffness]] · doi:10.1038/s43587-026-01159-2 · Wu M et al. · *Nature Aging* 2026;6:1395–1416 · systemic siIl11 nanoparticle experiments in mice and rats plus local ovarian AAV-shIl11ra1 in mice
[^ng2021]: [[studies/ng-2021-il11-il11ra1-loss-of-function]] · doi:10.1038/s41598-021-93623-9 · Ng B et al. · *Scientific Reports* 2021;11:14088 · constitutive mouse ligand/receptor loss-of-function phenotyping
