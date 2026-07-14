---
type: compound
aliases: [CrGO-897, engineered CML oxidase, CML deglycase]
pubchem-cid: null
chembl-id: null
drugbank-id: null
administration-route: null
biologic: true
who-inn: null
molecular-formula: null
molecular-weight-da: null
mechanisms: [age-adduct-deglycation]
targets: ["[[carboxymethyl-lysine]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]", "[[loss-of-proteostasis]]"]
clinical-stage: preclinical
human-evidence-level: preclinical-only
translation-gap: preclinical-only
next-experiment: "Blinded dose-ranging in-vivo delivery study in aged large-animal skin or artery, measuring tissue penetration, LC-MS/MS CML reduction, RAGE/NF-kB signaling, biomechanics, PK, immunogenicity, and local hydrogen-peroxide/glyoxylate burden."
clinical-trials-active: 0
literature-checked-through: 2026-07-14
verified: true
verified-date: 2026-07-14
verified-by: claude
verified-scope: "Trabosh 2026 main PDF, Supplementary Information, Nature Portfolio Reporting Summary, and deposited source-data workbook checked end-to-end; quantitative, mechanistic, biological-N, and crosslink-boundary claims verified. ClinicalTrials.gov v2 exact-intervention searches for CMLase and CrGO-897 confirmed 0 active trials on 2026-07-14; PubChem exact-name searches returned no CID, and a ChEMBL exact-name CMLase search returned no record. DrugBank/WHO INN absence and molecular weight remain scoped as not reported/not independently established because the paper supplies no final sequence or canonical biologic record. Source-internal inconsistencies are preserved explicitly: 15 stated substitutions versus 16 round-listed additions; >70% stated aortic reduction versus ~66% from deposited inactive-control means; and CMLase/CrGO-897 in Figure 3 Results versus CrGO-865 in the corresponding proteomics Methods."
---

# CMLase (CrGO-897)

## TL;DR

CMLase (CrGO-897) is an engineered bacterial flavin adenine dinucleotide (FAD)-dependent glycine oxidase that removes protein-bound [[carboxymethyl-lysine|Nε-carboxymethyl-lysine (CML)]] by oxidative dealkylation, regenerating lysine. Trabosh et al. reported substantial CML reduction on model proteins and in ex-vivo human lens, [[arteries|aortic]], and [[skin]] samples at 5 µM overnight.[^trabosh2026] This is the first engineered-biologic example in the `age-adduct-deglycation` mechanism class, but it is **not a demonstrated AGE crosslink breaker**: CML is a mature, stable, monovalent lysine adduct, and the study did not test cleavage of [[glucosepane]], [[pentosidine]], or any other true covalent crosslink.

CMLase remains early preclinical research material. It has not been administered to a living animal or human; delivery, tissue penetration, pharmacokinetics, immunogenicity, off-target proteome activity, functional benefit, and safety are unknown. #gap/needs-human-replication #gap/needs-replication

## Identity

| Field | Status |
|---|---|
| Agent | Engineered glycine-oxidase variant CrGO-897 |
| Starting scaffold | Glycine oxidase from *Calidithermus roseus* (CrGO) |
| Modality | Recombinant enzyme / biologic |
| Canonical identifiers | None reported in the paper. Exact-name PubChem searches for CMLase and CrGO-897 returned no CID, and an exact-name ChEMBL search for CMLase returned no record on 2026-07-14; DrugBank was not independently established. Fields remain null. |
| WHO international nonproprietary name | None reported or independently established; left null |
| Molecular weight / final therapeutic sequence | The paper does not provide a final sequence or canonical biologic record from which an unambiguous molecular weight can be assigned; left null |
| Development stage | Preclinical biochemical and ex-vivo human-tissue proof of concept |

The paper describes CrGO-897 as the product of five rounds of directed evolution after structural screening. More than ten libraries, cumulatively exceeding 5 × 10⁸ variants, were evaluated. Its mutation reporting is internally inconsistent: the main text says the final enzyme contains **15 substitutions plus a two-residue deletion** relative to starting CrGO, whereas Supplementary Table 2 lists 7 + 1 + 3 + 2 + 3 = **16 cumulative substitutions plus the deletion**. The main text and supplement also number the three CrGO-794 substitutions as A61G/A198S/Q214K versus A59G/A196S/Q212K, respectively, apparently using different numbering frames after the two-residue deletion without labeling them. Because no final sequence is supplied, the discrepancy cannot be reconciled from the publication.[^trabosh2026]

## Mechanism of action

### Direct repair of an established AGE adduct

CMLase oxidizes the N-carboxymethyl substituent attached to a protein lysine, producing restored lysine together with hydrogen peroxide and glyoxylate/glyoxylic acid. The net action is repair of an already formed AGE adduct rather than inhibition of glycation, scavenging of an upstream dicarbonyl, or accelerated turnover of the damaged protein.[^trabosh2026]

This is why the canonical mechanism value is `age-adduct-deglycation`. It is distinct from:

- **AGE-formation inhibitors** such as carbonyl traps, which reduce future AGE formation but do not restore existing modified residues.
- **Early Amadori-product deglycation** by [[fn3k]] or [[microbial-amadori-deglycation|fructosyl-amino acid oxidases]], which generally acts earlier in the Maillard cascade.
- **`age-crosslink-cleavage`**, which would require severing a bifunctional bridge such as glucosepane between two residues.

### Substrate specificity

CrGO-897 had Kₘ = 0.51 ± 0.10 mM and kcat = 5.3 ± 0.4 × 10⁻³ s⁻¹ on the AA-CML-AA peptide, corresponding to catalytic efficiency of approximately 1.0 × 10⁻² s⁻¹ mM⁻¹ and an approximately ninefold gain over the starting CrGO scaffold. With 5 µM CMLase and 1 µM CML-modified bovine serum albumin (CML-BSA), hydrogen peroxide accumulated at 0.90 µM/h.[^trabosh2026]

The reported specificity panel found no detectable activity on unmodified BSA, carboxymethyl-arginine-modified BSA, other tested canonical free amino acids besides glycine, or glycine/arginine positioned at the termini of tested tripeptides. Activity on CML at protein N-terminal α-amines was not directly tested. Site-resolved proteomics found incomplete coverage, but the Methods identify the active enzyme in that experiment as the immediate predecessor **CrGO-865**, not final CrGO-897; Figure 3 and the Results call it CMLase. Incomplete site coverage is therefore demonstrated for the engineering lineage, but exact CrGO-897 site coverage is unresolved.[^trabosh2026]

## Evidence

### Model proteins

At 5 µM overnight, CMLase reduced anti-CML enzyme-linked immunosorbent assay (ELISA) signal by **52–97%** across chemically CML-modified BSA, casein, collagen, hemoglobin, and sheep retinal total-protein extract (Figure 3A, n = 4 assay replicates). Sodium dodecyl sulfate–polyacrylamide gel electrophoresis under the site-proteomics reaction conditions found no CML-BSA fragmentation; however, the Methods identify the active enzyme for those conditions as CrGO-865. A separate duplicate capillary western explicitly using 1 µM CrGO-897 also showed reduced anti-CML signal relative to inactive CeGO-763.[^trabosh2026]

Site-resolved liquid chromatography–tandem mass spectrometry (LC–MS/MS) on CML-BSA found lower CML occupancy at 30 of 33 mapped lysines after treatment; 21 sites decreased by more than 50%, 7 by more than 90%, and 3 heavily modified sites by less than 5% (n = 3 assay replicates). The Methods specify CrGO-865 for this experiment despite the Figure 3/Results label of CMLase. Repair was not determined by surface exposure alone; a secondary site-level analysis found a weak correlation with local flexibility (B-factor; Spearman r = 0.3695, approximate two-sided p = 0.0343, n = 33 sites), and sequence-context associations were descriptive.[^trabosh2026]

### Ex-vivo human tissue

| Tissue | Exposure and assay | Result | Biological N |
|---|---|---|---|
| Lens, age 64 | 5 µM overnight; hydrolysis + LC–MS/MS | Paper states **45% lower total CML**; deposited triplicate means imply ~47% | one donor homogenate; three assay measurements |
| Lens, age 64 | 5 µM overnight; anti-CML ELISA | Paper states **78% lower signal**; deposited triplicate means imply ~77% | same donor; three assay measurements |
| Abdominal aorta, age 75 | 5 µM overnight; anti-CML immunohistochemistry | Paper states **>70% lower DAB staining**; deposited means imply ~66% versus inactive enzyme (~62% versus no-enzyme/antibody-only) | four aligned spatial regions from one donor |
| Abdominal skin, age 74 | 5 µM overnight; anti-CML immunohistochemistry | Paper states **>55% lower staining**; deposited means imply ~58% in epidermis and ~63% in dermis versus inactive enzyme | four spatial regions from one donor; separately treated age-31 tissue |

The figures document seven donors total: one lens donor, four aorta donors (three young contextual specimens and the 75-year-old efficacy specimen), and two skin donors. The lens difference between LC–MS/MS (45% stated) and ELISA (78% stated) is consistent with preferential enzyme access to surface-exposed, antibody-detectable CML while hydrolysis/mass spectrometry captures buried CML as well. Each headline older-tissue demonstration nevertheless uses one donor; assay measurements and image regions are not independent human subjects. No treatment-comparison inferential statistics or confidence intervals were reported, and the aortic ">70%" statement is not reproduced by the deposited group means.[^trabosh2026]

### What was not tested

- No living mammalian cell culture, animal, or human was treated to test efficacy. The directed-evolution selection did use living *E. coli* expressing enzyme in the periplasm, but it was not a therapeutic model.
- No RAGE binding/signaling, nuclear factor-κB activation, inflammatory cytokine, fibrosis, tissue-elasticity, arterial-compliance, lens-transparency, or other functional endpoint was measured.
- No glucosepane, pentosidine, or other crosslink substrate was tested.
- No administration route, formulation, biodistribution, pharmacokinetics, or pharmacodynamic duration was established.
- No dose-response in intact tissue was reported; the human ex-vivo experiments used 5 µM overnight (18 h), and no therapeutically achievable living-tissue exposure was established.

## Critical boundary: CML repair is not crosslink cleavage

[[carboxymethyl-lysine|CML]] modifies one lysine residue. Its removal can restore local charge and may reduce ligand burden for [[rage|RAGE]], but it does not sever a bridge between collagen chains or demonstrate restoration of extracellular-matrix mechanics. [[glucosepane]] is a bifunctional lysine–arginine crosslink and the dominant mature AGE crosslink in adult human extracellular matrix; the Trabosh paper identifies it as a possible target for future enzyme engineering and describes it as still resistant to reversal.[^trabosh2026]

Therefore, CMLase belongs to `age-adduct-deglycation`, not `age-crosslink-cleavage`. It is relevant to the broader [[age-crosslink-breakers]] landscape as proof that mature AGE chemistry can be enzymatically engineered, but it does not validate that intervention class's defining crosslink-cleavage claim.

## Hallmark mapping

| Hallmark | Rationale | Evidence level |
|---|---|---|
| [[loss-of-proteostasis]] | Direct chemical repair of damaged protein lysines | Target engagement only; restored protein function was not tested |
| [[altered-intercellular-communication]] | CML-modified proteins can act as aberrant extracellular signals through RAGE | Indirect mapping; RAGE signaling was not measured after treatment |
| [[chronic-inflammation]] | Reduced CML ligand burden could lower downstream inflammatory signaling | Hypothesized consequence only; no cytokine or inflammation endpoint |

The hallmark links support mechanism-matrix discoverability; they do **not** mean that CMLase reversed any formal hallmark phenotype in vivo.[^trabosh2026]

## Delivery, safety, and translational constraints

1. **Tissue penetration.** Lens homogenate and 4-µm fixed tissue sections minimize diffusion barriers. An intact artery or dermis has dense, crosslinked extracellular matrix that a large enzyme may not penetrate. #gap/dose-response-unclear
2. **Immunogenicity.** CMLase is derived from a bacterial oxidase. Repeat administration could provoke neutralizing antibodies, hypersensitivity, or cellular immune responses; de-immunization has not been reported.
3. **Reaction byproducts.** Each repair event produces hydrogen peroxide and glyoxylate/glyoxylic acid. The authors argue that low CML abundance should make this load small relative to endogenous clearance, but local production and toxicity were not measured.[^trabosh2026]
4. **Incomplete site access.** Three heavily modified BSA lysines showed less than 5% repair in the site-proteomics experiment. Because the Methods assign that experiment to CrGO-865 while the Results call the enzyme CMLase, the exact resistant-site profile of CrGO-897 remains unresolved.
5. **Unknown off-target scope.** The tested substrate panel was limited. Proteome-wide modification, oxidation, and long-duration exposure studies are absent.
6. **No functional efficacy or durability.** It is unknown whether CML returns after enzyme clearance, whether protein function is restored, or whether repeated dosing is required. #gap/long-term-unknown
7. **Commercial conflict.** Revel Pharmaceuticals filed U.S. Provisional Patent Application 64/039,597 on the work, naming first author Narisa Trabosh and senior author Aaron Cravens as inventors; both were Revel-affiliated. Other authors declared no conflict.[^trabosh2026]

## Human evidence and clinical trials

Human lens, aorta, and skin were used **ex vivo**, but no participant was dosed and no clinical efficacy or safety outcome exists. This supports `human-evidence-level: preclinical-only`, not `limited` human evidence.

As of 2026-07-14, separate official ClinicalTrials.gov v2 exact-intervention searches for `CMLase` and `CrGO-897` each returned **zero** recruiting or active-not-recruiting trials. `clinical-trials-active: 0` is therefore current to the literature-check date.

<!-- clinical-trials-active: queried 2026-07-14; terms: CMLase, CrGO-897; recheck in ~6 months -->

## Literature recency check

The required 2026-07-14 searches found:

- PubMed high-priority search for CMLase/CrGO-897 plus randomized trials, meta-analyses, or systematic reviews (2021-07-14 through 2026-07-14): **0 hits**.
- PubMed broad recent search for CMLase, CrGO-897, or "enzymatic deglycation" (2024-07-14 through 2026-07-14): **0 hits**.
- Europe PMC named search (2021-07-14 through 2026-07-14): **2 hits**, comprising the 2023 FN3K/FAOD skin-deglycation study and a 2026 review false-positive; neither independently evaluated CMLase.
- The founding Trabosh 2026 DOI was published on the search date and was not yet indexed by PubMed or Europe PMC.

No independent CMLase replication, in-vivo efficacy paper, clinical study, or contradictory result was found. `literature-checked-through: 2026-07-14` records this search. #gap/needs-replication

## Development priority

The decisive next experiment is a blinded, dose-ranging in-vivo delivery study in aged large-animal skin or artery that jointly measures:

- tissue exposure and penetration;
- LC–MS/MS-confirmed CML target engagement;
- RAGE/nuclear factor-κB and inflammatory readouts;
- tissue biomechanics or vascular function;
- pharmacokinetics, anti-drug antibodies, proteome-wide off-targets, and local hydrogen-peroxide/glyoxylate burden.

Without those data, the main uncertainty is not whether purified CMLase can catalyze CML removal, but whether a safe exposure can reach enough naturally modified sites in living tissue to produce a durable functional benefit.

## See also

- [[studies/trabosh-2026-cmlase-deglycation]] — founding primary study
- [[carboxymethyl-lysine]] — the mature monovalent AGE substrate
- [[advanced-glycation-end-products]] — broader glycation-damage landscape
- [[glucosepane]] — dominant true extracellular-matrix AGE crosslink; not cleaved here
- [[age-crosslink-breakers]] — adjacent but mechanistically distinct intervention class
- [[microbial-amadori-deglycation]] — earlier oxidative deglycation enzyme family
- [[rage]] — downstream signaling receptor not tested in the CMLase paper

## Footnotes

[^trabosh2026]: [[studies/trabosh-2026-cmlase-deglycation]] · doi:10.1038/s41467-026-75141-2 · in-vitro + ex-vivo human tissue · enzyme kinetics and site proteomics n = 3 assay replicates, model-protein ELISA n = 4, CrGO-897 capillary western n = 2; seven human donors documented, but headline older lens/aorta/skin outcomes each use one donor and aorta/skin image quantification uses n = 4 regions · model: living *E. coli* selection, purified CML-modified proteins, and human lens, aorta, and skin samples · no treatment-comparison p-values; secondary B-factor correlation p = 0.0343
