---
type: phenotype
aliases: [anemia in older adults, idiopathic anemia of aging, unexplained anemia of aging, UAA, geriatric anemia]
icd-10: D64.9
icd-11: 3A00.Z
affected-tissues: ["[[bone-marrow]]", "[[hematopoietic-stem-cells]]", "[[peripheral-blood]]"]
underlying-hallmarks: ["[[stem-cell-exhaustion]]", "[[chronic-inflammation]]", "[[genomic-instability]]"]
typical-onset: "65+ (clinically defined); biological HSC decline begins earlier"
prevalence-65plus: "~10% age 65+; ~20% age 85+ (WHO criteria: Hb <12 g/dL women / <13 g/dL men)"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Guralnik 2004 (local PDF, downloaded), Jaiswal 2014 (local PDF), Genovese 2014 (local PDF, downloaded), Sudo 2000 (local PDF), Beerman 2010 (local PDF) all verified against primary source PDFs. Nemeth 2004 (10.1172/JCI20945) is not_oa with no local PDF — IL-6/hepcidin mechanism claims remain unverified against primary source; #gap/no-fulltext-access retained on that footnote."
---


# Anemia of Aging

Anemia defined by WHO thresholds — hemoglobin (Hb) below 12 g/dL in women or 13 g/dL in men — affecting adults aged ≥65. Prevalence is approximately 10% at age 65 and rises to ~20% at age 85 [^guralnik2004]. Clinically meaningful: anemia in older adults is independently associated with increased all-cause mortality, cognitive decline, falls, and hospitalizations. The most striking biological feature of geriatric anemia is its **etiology distribution**: roughly one-third nutritional deficiency, one-third anemia of chronic disease / inflammation, and one-third "unexplained" — no deficiency, no chronic disease, no renal failure, no overt hematologic malignancy identifiable on standard workup. This unexplained category is aging-specific and directly implicates [[stem-cell-exhaustion]] in [[hematopoietic-stem-cells]] as a pathogenic substrate.

## Etiologic categories

Large community cohort data (NHANES III and subsequent analyses) establish the following approximate breakdown in adults aged ≥65 [^guralnik2004]:

| Category | Approximate fraction | Mechanism |
|---|---|---|
| Nutritional deficiency | ~33% | Iron, B12, or folate deficiency |
| Anemia of chronic disease / inflammation (ACI) | ~33% | Hepcidin-mediated iron sequestration; CKD-associated EPO deficit |
| Unexplained anemia of aging (UAA) | ~30–35% | No identifiable cause on standard workup; reflects aging-specific biology |

### Nutritional deficiency anemias

**Iron deficiency** is the most common nutritional cause. In older adults the dominant mechanism is chronic gastrointestinal blood loss (peptic disease, angiodysplasia, colorectal pathology) rather than dietary inadequacy. Impaired gastric acid secretion (atrophic gastritis, PPI use) reduces non-heme iron absorption. Functional iron deficiency also arises in the context of ACI (see below).

**Vitamin B12 (cobalamin) deficiency** causes macrocytic, megaloblastic anemia. Mechanisms in older adults include: pernicious anemia (autoimmune destruction of gastric parietal cells → intrinsic factor loss), food-cobalamin malabsorption (atrophic gastritis → impaired release of protein-bound B12, distinct from pernicious anemia and not corrected by standard oral supplementation at low doses), and [[metformin]]-associated B12 depletion via impaired ileal absorption (demonstrated in the DPP trial). #gap/unsourced for metformin-B12 claim on this page — see [[metformin]] page for sourced discussion.

**Folate deficiency** has become rarer in populations with mandatory folate fortification of grains (US, Canada, much of Europe since late 1990s), but remains a risk in alcohol use disorder and restricted diets.

### Anemia of chronic disease / inflammation (ACI)

ACI is driven by the IL-6 → hepcidin axis [^nemeth2004]:

1. Chronic inflammation (infection, cancer, autoimmunity, cardiopulmonary disease, obesity) drives sustained IL-6 elevation.
2. IL-6 acts on hepatocytes via JAK1/STAT3 signaling to upregulate synthesis of **hepcidin**, a 25-amino-acid peptide hormone.
3. Hepcidin binds ferroportin (FPN1/SLC40A1) on duodenal enterocytes and macrophages, triggering ferroportin internalization and degradation.
4. Ferroportin degradation blocks iron efflux from intracellular stores: iron becomes sequestered in reticuloendothelial macrophages, unable to reach erythroid precursors.
5. The result is functional iron deficiency (iron stores present but unavailable) and suppressed erythropoiesis.

Chronic kidney disease (CKD) adds a second mechanism: reduced renal EPO production compounding iron restriction. CKD-related anemia is categorized separately but mechanistically overlaps with ACI.

Diagnostic fingerprint of ACI: low serum iron, low TIBC, elevated ferritin (acute-phase reactant), elevated CRP/ESR, elevated hepcidin.

### Unexplained anemia of aging (UAA)

The ~30–35% of geriatric anemia with no identifiable cause after comprehensive workup is the biologically most interesting category. UAA is characterized by:

- Mild normocytic normochromic anemia (Hb typically 10–12 g/dL in women, 11–13 g/dL in men)
- Normal iron studies, normal B12/folate, no evidence of hemolysis
- Normal renal function (or disproportionate anemia for degree of CKD)
- Bone marrow: may show reduced erythroid precursor density; may show low-level clonal dysplasia not meeting MDS criteria
- Mildly elevated or inappropriately normal EPO for degree of anemia (blunted EPO response)

UAA likely represents the cumulative hematopoietic consequence of [[stem-cell-exhaustion]], clonal hematopoiesis ([[genomic-instability]]), and smoldering [[chronic-inflammation]] operating below the clinical threshold for a definitive diagnosis.

## Pathophysiology — HSC contributions

Anemia of aging is the most direct clinical readout of hematopoietic stem cell aging. The relevant biology is detailed on [[hematopoietic-stem-cells]]; key points:

### HSC pool expansion with functional decline

In aged mice, the total CD34⁻KSL bone marrow population (the phenotypic HSC-enriched fraction) expands ~17-fold from 2 to 18 months of age [^sudo2000]. However, the functional HSC subset within this pool increases only ~2.2-fold; the majority of the 17-fold expansion consists of "defective HSCs" — cells with impaired lymphoid differentiation potential — and myeloid progenitors. Per-HSC repopulation activity declines accordingly, so total hematopoietic output does not scale with the numerical expansion. The aged HSC pool is large but functionally impaired: reduced self-renewal fidelity, increased myeloid bias, and reduced lymphoid and (critically for anemia) erythroid output per cell.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — human HSC pool shows numerical changes with age; per-cell functional decline is broadly conserved |
| Phenotype conserved in humans? | yes — anemia of aging is a human phenotype; HSC functional decline is the proposed mechanism |
| Replicated in humans? | in-progress — functional HSC data in humans is limited by lack of in-vivo competitive repopulation assays |

### Myeloid skewing — erythroid output at the expense of lymphopoiesis

Aged HSCs exhibit myeloid-biased differentiation [^beerman2010]: the Slamf1-hi (CD150-hi) myeloid-biased HSC fraction expands with age while the Slamf1-lo lymphoid-balanced fraction contracts. Beyond immune consequences ([[immunosenescence]]), this myeloid bias occurs at the expense of balanced lineage output — erythroid progenitor seeding may be reduced or quality-impaired in the aged marrow environment even when total myeloid output is maintained. #gap/no-mechanism — the specific link between Beerman's myeloid-biased HSC expansion and reduced erythropoiesis has not been directly demonstrated.

### Clonal hematopoiesis of indeterminate potential (CHIP)

CHIP — the age-associated acquisition of somatic driver mutations in hematopoietic stem cells, detectable as clones at ≥2% variant allele frequency in peripheral blood — is highly prevalent in older adults and mechanistically bridges [[genomic-instability]] and anemia of aging [^jaiswal2014]:

- Prevalence: 5.6% at age 60–69, 9.5% at 70–79, 11.7% at 80–89, and 18.4% at ≥90 in the Jaiswal 2014 exome-sequencing cohort; ~10% of persons >65 overall in the Genovese 2014 Swedish WES cohort
- Most common mutated genes: **DNMT3A**, **TET2**, **ASXL1** (epigenetic regulators)
- CHIP carriers have elevated all-cause mortality (HR ~1.4), coronary heart disease (HR ~2.0), and stroke (HR ~2.6) independent of anemia
- Hematologic consequences of CHIP include macrocytosis, mild cytopenia, and dysplastic features that can progress to myelodysplastic syndrome (MDS) or acute myeloid leukemia (AML) — but the absolute risk per year is low (~0.5–1% per year in CHIP without dysplasia)

The CHIP/early MDS spectrum represents the pathological extreme of clonal HSC aging, and UAA may represent the sub-threshold hematopoietic insufficiency of this spectrum in many elderly individuals.

For CHIP prevalence and hematologic cancer risk see [^genovese2014] (independently observed CHIP in ~10% of persons >65 in a Swedish whole-exome sequencing cohort of 12,380 individuals; hematologic cancer HR 12.9, 95% CI 5.8–28.7; all-cause mortality HR 1.4, 95% CI 1.0–1.8).

### Inflammaging — the IL-6 link to HSC biology

Chronic low-grade inflammation — the "inflammaging" phenotype captured under [[chronic-inflammation]] — contributes to anemia of aging through multiple routes:

1. **Direct ACI mechanism** (IL-6 → hepcidin → iron sequestration) as described above
2. **HSC niche disruption**: inflammatory cytokines alter the bone marrow niche, promoting myeloid at the expense of erythroid progenitor support
3. **EPO resistance**: inflammatory cytokines suppress EPO receptor signaling in erythroid progenitors, blunting the bone marrow response even when EPO is administered

The IL-6 → hepcidin axis is particularly well-established as a mechanistic bridge between aging-associated inflammation and functional iron deficiency [^nemeth2004].

## Diagnostic workup

Standard evaluation for anemia in an older adult:

| Test | Purpose |
|---|---|
| CBC + reticulocyte count | Classify by MCV (microcytic/normocytic/macrocytic); assess marrow compensatory response |
| Iron panel (serum iron, TIBC, ferritin) + transferrin saturation | Distinguish iron deficiency (low ferritin) from ACI (low iron, low TIBC, elevated ferritin) |
| Serum B12 and folate; methylmalonic acid (MMA) if B12 borderline | Detect cobalamin / folate deficiency; MMA more sensitive than B12 alone |
| Renal function (creatinine, eGFR) | Assess CKD contribution |
| EPO level | Inappropriate EPO response (elevated relative to degree of anemia) distinguishes primary bone marrow failure; inappropriately normal EPO suggests EPO resistance |
| SPEP + serum free light chains | Screen for plasma cell dyscrasia / multiple myeloma |
| Peripheral blood smear | Morphologic clues (hypersegmented neutrophils → B12/folate; ring sideroblasts → MDS-RS; dysplastic changes → MDS) |
| Somatic variant panel (NGS) | CHIP/MDS somatic driver mutation detection if unexplained anemia persists; detects DNMT3A, TET2, ASXL1, SF3B1, other drivers |
| Bone marrow biopsy | Reserved for suspected MDS, aplasia, or infiltrative disease (myeloma, lymphoma); not required in straightforward nutritional deficiency or ACI |

## Adverse outcomes

Even mild anemia in older adults is independently associated with clinical harm [^guralnik2004]:

- **Mortality**: increased all-cause mortality in multiple cohort studies; specific HR not reported in Guralnik 2004 (prevalence study) #gap/unsourced — HR estimates require separate citation
- **Cognitive decline**: anemia accelerates cognitive aging; mechanistic link uncertain (hypoxia? vascular? shared pathophysiology?)
- **Falls and fractures**: anemia → fatigue → reduced muscle oxygenation → sarcopenic overlap; also medication side-effects of workup
- **Reduced exercise capacity and quality of life**: hemoglobin directly limits VO2max; physically relevant even at Hb 11–12 g/dL
- **Hospitalization and surgical risk**: pre-operative anemia is a significant predictor of post-surgical complications
- **Progression to MDS/AML**: in the CHIP/MDS subset; overall annual transformation risk 0.5–1%

## Management and interventions

Management targets the underlying etiology:

| Etiology | First-line intervention |
|---|---|
| Iron deficiency | Oral or IV iron repletion; treat source of blood loss; oral: ferrous sulfate 325 mg BID (low-dose protocols may improve tolerability) |
| B12 deficiency | IM cyanocobalamin (1000 µg/month after loading) OR high-dose oral supplementation (1000–2000 µg/day) even in pernicious anemia — intestinal absorption via passive diffusion at high doses bypasses intrinsic factor dependence |
| Folate deficiency | Folic acid 1 mg/day oral |
| ACI / CKD-related | Address underlying inflammatory disease; erythropoiesis-stimulating agents (ESA: epoetin alfa, darbepoetin alfa) in CKD-associated anemia with Hb <10 g/dL; IV iron as adjunct; ESA target Hb 10–11 g/dL (avoid over-correction → thrombosis risk) |
| MDS del(5q) | Lenalidomide — achieves RBC transfusion independence in ~67% of del(5q) MDS in pivotal trial |
| MDS-RS (ring sideroblast) | Luspatercept (activin receptor ligand trap) — first-in-class TGFβ superfamily ligand trap; reduces transfusion burden in MDS-RS |
| Transfusion threshold (stable) | Hb ~7–8 g/dL for stable non-cardiac patients; Hb ~8 g/dL for cardiovascular disease or symptomatic patients |

**Senolytic potential (preclinical only):** Clearance of senescent cells in aged mouse bone marrow niche may improve HSC function and hematopoietic output. This is mechanistically plausible given niche senescence data but has not been tested in human anemia trials. #gap/needs-human-replication

## Hallmark mapping

| Hallmark | Mechanistic contribution |
|---|---|
| [[stem-cell-exhaustion]] | Primary — aged HSC pool expands numerically but declines per-cell functionally; myeloid skewing at expense of erythroid output |
| [[chronic-inflammation]] | IL-6 → hepcidin → iron sequestration (ACI mechanism); marrow niche disruption; EPO resistance |
| [[genomic-instability]] | CHIP — somatic driver mutations in HSCs accumulate with age; CHIP → MDS → AML spectrum; direct contributor to UAA |

Anemia of aging is also cross-linked with [[sarcopenia]] (shared pathophysiology: inflammation, stem cell exhaustion, activity limitation) and [[immunosenescence]] (shared HSC biology; myeloid skewing affects immune output).

## Limitations and gaps

- **UAA mechanism poorly defined.** The ~30–35% of geriatric anemia that is truly unexplained has no validated mechanistic explanation beyond "aging." Whether HSC dysfunction, EPO hyporesponsiveness, CHIP-subthreshold dysplasia, or unmeasured inflammation accounts for the majority is unknown. #gap/no-mechanism
- **CHIP → anemia causality not established.** CHIP is associated with mild anemia in cohort data, but whether clonal HSCs directly cause anemia or both are parallel consequences of aging is contested. #gap/contradictory-evidence
- **EPO hyporesponsiveness in UAA.** The EPO-to-hemoglobin relationship appears blunted in very old adults, but studies are small and confounded. #gap/needs-replication
- **No aging-specific anemia treatment target.** Current treatment targets the proximate cause (iron, B12, EPO, transfusion) not the aging biology. No approved therapy addresses HSC functional decline or CHIP as an anemia treatment. #gap/needs-human-replication
- **Hemoglobin thresholds.** WHO thresholds (Hb <12 F / <13 M) were established in 1968 and may not optimally capture clinically meaningful anemia in older adults — some argue functional thresholds should be higher in frail elderly. #gap/unsourced — this debate is covered in review literature but specific primary-source consensus citation needed.
- **Sex and ethnic variation in reference ranges.** Hb cutoffs are not stratified by age within the elderly range or by ethnicity; this may affect prevalence estimates. #gap/needs-replication

## Footnotes

[^guralnik2004]: [[studies/guralnik-2004-anemia-aging-nhanes]] · doi:10.1182/blood-2004-05-1812 · Guralnik JM, Eisenstaedt RS, Ferrucci L, Klein HG, Woodman RC · observational · n=4,199 (community-dwelling adults ≥65 with hemoglobin data, NHANES III phases 1–2, 1988–1994; cause-of-anemia analysis in phase-2 subset) · Blood 2004;104(8):2263-2268 · prevalence: 10.6% overall ≥65; 11.0% men, 10.2% women; rising to ~20% women / ~25% men at age ≥85; anemia causes: ~34% nutritional deficiency, ~33.6% unexplained (UA), ~32% ACI or renal insufficiency or both · model: human population study · archive: local PDF available ((local PDF))

[^nemeth2004]: [[studies/nemeth-2004-il6-hepcidin-anemia-inflammation]] · doi:10.1172/JCI20945 · Nemeth E, Rivera S, Gabayan V, Keller C, Taudorf S, Pedersen BK, Ganz T · in-vivo + in-vitro · n=human subjects + mouse models · Journal of Clinical Investigation 2004;113(9):1271-1276 · IL-6 identified as necessary and sufficient cytokine for hepcidin induction during inflammation; hepatocyte STAT3 signaling pathway; establishes the IL-6 → hepcidin → hypoferremia axis · archive: not_oa, no local PDF #gap/no-fulltext-access

[^jaiswal2014]: [[studies/jaiswal-2014-chip-aging-outcomes]] · doi:10.1056/NEJMoa1408617 · Jaiswal S et al. · observational (whole-exome sequencing, 22 cohorts) · n=17,182 individuals · NEJM 2014;371(26):2488-2498 · CHIP prevalence: 5.6% age 60–69, 9.5% age 70–79, 11.7% age 80–89, 18.4% age ≥90; most common drivers DNMT3A, TET2, ASXL1; all-cause mortality HR 1.4 (95% CI 1.1–1.8), coronary heart disease HR 2.05 (95% CI 1.2–3.4), ischemic stroke HR 2.6 (95% CI 1.4–4.8) among carriers vs non-carriers · model: human · archive: local PDF available ((local PDF))

[^genovese2014]: [[studies/genovese-2014-chip-blood-cancer]] · doi:10.1056/NEJMoa1409405 · Genovese G et al. · observational (whole-exome sequencing, Swedish national cohort) · n=12,380 individuals · NEJM 2014;371(26):2477-2487 · CHIP with candidate driver mutations observed in ~10% of persons >65 (5.7% ≥65 with candidate drivers; higher if unknown-driver clones included); hematologic cancer HR 12.9 (95% CI 5.8–28.7); death HR 1.4 (95% CI 1.0–1.8); top driver genes DNMT3A, ASXL1, TET2 · model: human · archive: local PDF available ((local PDF))

[^sudo2000]: [[studies/sudo-2000-hsc-aging-characteristics]] · doi:10.1084/jem.192.9.1273 · Sudo K, Ema H, Morita Y, Nakauchi H · in-vivo competitive repopulation · n=2-month-old (young) vs 18-month-old (aged) C57BL/6 mice · J Exp Med 2000;192(9):1273-1280 · total CD34⁻KSL pool expands 17.4-fold from 2 to 18 months (Table VII); functional HSC subset within CD34⁻KSL increases only ~2.2-fold; majority of expansion is defective HSCs and progenitors with impaired lymphoid output; aging HSCs have reduced erythroid and lymphoid reconstitution relative to myeloid · model: mus-musculus · archive: local PDF available ((local PDF))

[^beerman2010]: [[studies/beerman-2010-hsc-myeloid-bias-aging]] · doi:10.1073/pnas.1000834107 · Beerman I, Bhattacharya D, Zandi S, Sigvardsson M, Weissman IL, Bhattacharya D, Rossi DJ · in-vivo competitive repopulation · young adult (4 mo) vs old (22–24 mo) C57BL/6 mice · PNAS 2010;107(12):5465-5470 · Slamf1-hi (CD150-hi) myeloid-biased HSC fraction expands with age; Slamf1-lo lymphoid-balanced fraction contracts; exactly two HSC subsets identified within LSKCD34⁻flt3⁻ compartment; mechanism is clonal expansion of pre-existing myeloid-biased subsets rather than cell-intrinsic reprogramming · model: mus-musculus · archive: local PDF available ((local PDF))
