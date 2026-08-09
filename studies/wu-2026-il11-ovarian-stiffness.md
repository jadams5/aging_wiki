---
type: study
doi: 10.1038/s43587-026-01159-2
pmid: 42393307
pmc: PMC13375564
title: "Modulating IL-11-dependent matrix stiffness to delay ovarian aging"
authors: [Wu M, Zhu Q, Xiong J, Tang W, Chen D, et al.]
year: 2026
journal: Nature Aging
volume: 6
issue: 7
pages: "1395-1416"
publication-type: research-article
study-design: in-vivo
organism: multi
n-subjects: null  # multiple human, mouse, rat and cell cohorts; exact per-experiment n in body
intervention: ["[[il-11-gene-silencing]]"]
hallmarks-tested: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
human-evidence: true  # cross-sectional human tissue and primary-cell evidence; no human therapeutic intervention
peer-reviewed: true
preregistered: false
key-findings: [human-ovarian-stiffness-increases-with-age, il11-erk-dependent-ovarian-fibroblast-activation, matrix-stiffness-impairs-follicle-function, il11ra1-loss-protects-rodent-ovarian-function, siIl11-improves-selected-aged-rodent-reproductive-endpoints]
local-pdf: null
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Publisher PDF read end-to-end and checked against the Nature Portfolio Reporting Summary, Supplementary Tables 1, 2 and 4, and the statistical source-data workbook. Human cohorts, AFM/collagen results, proteomics, primary-fibroblast and matrix-culture experiments, all mouse/rat perturbations, fertility/null outcomes, statistics, conflicts and limitations were verified. Publisher/PubMed/PMC searches through 2026-08-09 found no correction, retraction, expression of concern or superseding primary study; unresolved internal source inconsistencies are explicitly retained in the body."
---

# Modulating IL-11-dependent matrix stiffness to delay ovarian aging

## TL;DR

Wu et al. found that human [[ovary|ovarian]] cortical stiffness, hydroxyproline and collagen-I-rich matrix increased cross-sectionally with age and in chemotherapy-associated [[premature-ovarian-insufficiency]], [[polycystic-ovary-syndrome]] and [[endometriosis]]. Primary-human-cell and mouse-culture experiments support a model in which [[tgf-beta|TGF-β1]] induces [[il-11]], IL-11/[[il-11-receptor-alpha-1|IL11RA1]] activates [[ras-mapk|ERK1/2]] in ovarian fibroblasts, and collagen deposition stiffens the matrix; experimentally stiff matrices impaired mouse follicle growth and granulosa-cell proliferation and steroidogenesis. Recombinant IL-11 worsened mouse ovarian stiffness and fertility, whereas germline *Il11ra1* deletion protected aging, doxorubicin-POI and DHEA-PCOS models. Adult si*Il11* lipid nanoparticles and local ovarian AAV-sh*Il11ra1* improved several stiffness and reproductive endpoints in aged rodents.

The human results are observational or ex vivo; every organ-level rescue was in rodents. Despite the paper's use of "anti-IL-11 therapy," **no anti-IL-11 antibody was tested as an in-vivo ovarian intervention**. The adult interventions tested progression during middle-age, not reversal of established fibrosis. #gap/needs-human-replication #gap/needs-replication

## Design

### Human tissue cohorts

All normal ovaries came from people undergoing oophorectomy for cervical or endometrial carcinoma. Samples were in the proliferative phase; donors had not received hormone therapy, radiotherapy or chemotherapy, and a pathologist excluded ovarian metastasis.

| Cohort | Age | n | Source and definition |
|---|---:|---:|---|
| Reproductively young | 18–28 y | 30 | Cancer-related oophorectomy; mean AMH 3.857 ± 1.647 ng/ml |
| Middle-aged | 35–42 y | 37 | Same surgical context; mean AMH 1.809 ± 0.864 ng/ml |
| Older | 47–52 y | 40 | Same surgical context; the cohort summary reports AMH <0.06 ng/ml, although Supplementary Table 1 contains several recorded values of 0.08–0.38 ng/ml |
| Age-matched control | 30–40 y | 20 | Comparator in Fig. 1; its characteristics and whether it was independent of the 107 age-series donors were not reported in Methods or Supplementary Table 1 |
| Chemotherapy-associated POI | 30–40 y | 16 | Preoperative chemotherapy; FSH >25 IU/l |
| PCOS | 30–40 y | 10 | Cancer-surgery patients with irregular cycles, polycystic ultrasound appearance and at least 12 small antral follicles in one ovary |
| Ovarian endometriosis | 30–40 y | 20 | Marginal ovarian tissue from endometriotic-cyst dissection |

AFM measured Young's modulus in fresh-frozen, 30-µm cortex sections taken 50–80 µm below the surface; each location was indented three times and ten positions per tissue were averaged. Hydroxyproline, Masson's trichrome, picrosirius red and immunohistochemistry assessed matrix/fibrosis. ^68Ga-FAPI-04 PET was shown only as representative young-versus-old images with no cohort size reported. TMT proteomics used **n=4 biological replicates per age group**; age-stratified collagen and TGF-β1 immunohistochemistry used n=9/group. These were cross-sectional associations, not longitudinal measurements of stiffening within the same person.

### Cell and matrix experiments

- Low-passage (≤P3) primary human ovarian fibroblasts were stimulated for 24 h with TGF-β1 or recombinant human IL-11 (10 ng/ml). Each RNA-sequencing contrast used n=3/group; collagen, ACTA2, migration, phosphokinase and inhibitor assays tested the candidate pathway. Donor ages, number of independent donors and donor-to-replicate mapping were not reported.
- The in-vitro neutralizing anti-IL-11 antibody appeared only in these fibroblast experiments. Figure 2 and Extended Data Fig. 5 specify 2 µg/ml, whereas Methods give the antibody's ND50 as 80 µg/ml in the presence of 10 ng/ml IL-11; Methods do not state a separate applied concentration, and the source workbook does not resolve the mismatch.
- Early secondary follicles isolated from 12–13-day-old C57BL/6 mice were cultured for 12 days in 0.5% (soft) or 2% (stiff) alginate. The legend reports growth n=80/group and steroid hormones n=15/group, but the source workbook labels the growth time series n=20/group and hormone timepoints n=10/group; the effective independent sample size cannot be reconciled.
- Primary mouse granulosa cells were cultured on collagen-coated 3-kPa or 30-kPa polyacrylamide substrates (cell area n=40/group; proliferation n=20/group; hormones n=15/group).

### Rodent intervention matrix

| Model | Perturbation | Route and timing | Principal group sizes and endpoints |
|---|---|---|---|
| Young C57BL/6 females, 8 wk | Recombinant mouse IL-11, 100 µg/kg | Methods and Reporting Summary: subcutaneous daily for 28 d; Fig. 3: twice weekly for 4 wk (unresolved) | Body weight n=13 control/16 IL-11; most ovarian endpoints n=5–8; estrous n=16/group; litter n=6/group |
| Physiologic aging | Germline C57BL/6J *Il11ra1*−/− vs WT littermates at 48 wk | Lifelong deletion | Umbrella n=25/group; most AFM, fibrosis, hormones, follicles, ovulation and IVF assays n=5–6; snRNA-seq n=3/group |
| Chemotherapy POI | WT or germline *Il11ra1*−/−; doxorubicin 10 mg/kg | Two intraperitoneal doses, once weekly, from 8 wk | Umbrella n=30/group; analyzed subsets generally n=5–6 |
| PCOS-like injury | WT or germline *Il11ra1*−/−; DHEA 60 mg/kg | Subcutaneous daily for 28 d from 4 wk | Umbrella n=30/group; analyzed subsets generally n=6 |
| Reproductive aging, mouse | si*Il11* or control-siRNA lipid nanoparticles; 100 µl/injection | Tail-vein intravenous, twice weekly for 4 wk from 36 wk; euthanasia 7 d later | Umbrella n=30/group; AFM/follicles/ovulation n=6; pregnancy n=8; litter n=3 control/5 treated |
| Reproductive aging, rat | si*Il11* or control-siRNA lipid nanoparticles; 100 µl/injection | Tail-vein intravenous, twice weekly for 4 wk from 40 wk | Umbrella n=30/group; most endpoints n=5–6; pregnancy n=10; litter n=5 |
| Reproductive aging, mouse | AAV-sh*Il11ra1* vs control | Single ovarian-bursal microinjection at 48 wk; 4-wk follow-up | Umbrella n=25/group; reported endpoint n=6/group |

The siRNA injection volume was specified but the siRNA concentration/mass dose and control-siRNA sequence were not. For the AAV experiment, vector serotype, promoter/construct, shRNA sequence, genome dose or titer, injection volume, vendor and control-vector identity were not reported anywhere in the article or supplements; its age, route, follow-up and n came only from the Extended Data Fig. 10 schematic/caption.

## Key results

### Human ovarian stiffness and ECM increase with age and ovarian pathology

AFM Young's modulus increased stepwise from young to middle-aged to older human ovarian cortex. In the age-matched pathological series, POI, PCOS and endometriosis samples were each stiffer than controls. Hydroxyproline rose in parallel, and Masson/picrosirius-red staining showed more matrix. Polarized picrosirius red attributed most of the change to thick collagen-I-rich fibers; thin collagen-III-rich fibers were largely unchanged. The exploratory FAPI-PET images also showed higher uptake in older ovaries, but the authors explicitly called for a larger cohort.

Processed proteomics identified age-group differences enriched for ECM organization/extracellular-space Gene Ontology terms and TGF-β pathway annotations; individual COL1A1, COL1A2, COL3A1 and COL4A1 increases were demonstrated by immunohistochemistry (n=9/group), not by the differential-protein table. Multiplex staining showed COL1A1/TGF-β1/DCN coexpression, and COL1A1-high regions were mechanically stiffer than COL1A1-low regions (n=20 measured regions/group; donor independence was not reported). These data associate age and disease with fibrosis and stiffness but do not establish that stiffness caused the human endocrine or fertility phenotype.

### Matrix stiffness directly impairs mouse follicle and granulosa-cell function in culture

Follicles in stiff alginate grew less over 12 days and secreted less estradiol and progesterone than follicles in soft alginate. Granulosa cells on 30-kPa substrates spread more, formed thicker actin stress fibers, proliferated less and produced less estradiol and progesterone than cells on 3-kPa substrates. These controlled mouse experiments support stiffness as a causal local constraint, but they did not test intact human follicles or reproduce the full ovarian niche.

### TGF-β1–IL-11–ERK fibroblast mechanism

TGF-β1 (10 ng/ml, 24 h) strongly increased *IL11* in primary human ovarian fibroblasts; CTGF/CCN2, bFGF and PDGF also increased IL-11 (the paper redundantly lists the synonymous CTGF and CCN2 names as separate treatments). Ovarian IL-11 rose with age in humans, mice and rats (n=6/age/species in expression assays), correlated positively with age and negatively with AMH in human tissue (n=40), and was elevated in the three pathological cohorts. The correlation test is internally inconsistent: Extended Data Fig. 5 says Pearson, whereas Methods specify Spearman.

Recombinant IL-11 induced ACTA2, collagen and fibroblast migration. In-vitro IL-11 neutralization attenuated TGF-β1-induced activation. IL-11 RNA sequencing showed induction of multiple collagen genes and ECM–receptor programs. Several pathway families were engaged, including NOTCH, PI3K–AKT, cGMP–PKG, MAPK and mTOR, but ERK1/2 inhibitors gave the strongest suppression of *COL1A1*. Phosphokinase arrays and immunoblotting showed ERK/p90RSK activation. The inhibitor-screen Methods and immunoblot/caption identify SCH772984 (5 nM), but Fig. 2m's quantitative axes and its source-data sheet label U0126; because U0126 is absent from Methods, the inhibitor identity for that quantitative immunofluorescence panel is unresolved.

```text
age / ovarian injury → TGF-β1 and other fibrotic inputs → IL-11
      → IL11RA1 → ERK1/2 → fibroblast activation + collagen secretion
      → matrix stiffening → impaired follicle growth and steroidogenesis
```

The complete arrow chain was assembled across human tissue, primary cells and rodents; it was not causally intervened on from end to end in humans.

### Recombinant IL-11 is sufficient to worsen the mouse phenotype

Four weeks of recombinant IL-11 increased ovarian Young's modulus, hydroxyproline, collagen, ACTA2 and pERK; lowered AMH and estradiol; raised FSH; and reduced litter size. Body weight was unchanged. The plotted and workbook values show **fewer**, not more, primary follicles (means 34.2 versus 19.7), antral follicles (26.3 versus 11.5) and total healthy follicles (218.2 versus 142.5) after IL-11. The Results prose says all three "increased," which is an unresolved direction error; the numerical source data and the accompanying endocrine/fertility phenotype support the decrease direction.

Estrous-cycle regularity was reported as 70% versus 30% in control mice and 43.75% versus 56.25% after IL-11 (n=16/group). A 70% proportion is not attainable with n=16, and the reported Fisher–Freeman–Halton P=0.0003 is not compatible with the nearest integer counts, so this significance claim is not independently reproducible. The dosing schedule is also irreconcilable: Methods and the Reporting Summary specify daily subcutaneous dosing, while the Fig. 3 schematic says twice weekly.

### Germline *Il11ra1* loss protects aging and injury models

At 48 weeks, *Il11ra1*−/− ovaries had lower AFM stiffness, hydroxyproline, collagen, ACTA2 and pERK than WT. Secondary follicles increased, atretic follicles decreased and total healthy follicles showed a borderline trend (P=0.0503); AMH and estradiol were higher and FSH lower. Superovulation yielded more oocytes, but **two-cell and blastocyst development rates did not differ**. snRNA-seq retained 56,363 nuclei from n=3 animals/group and found fewer activated fibroblasts, with lower stromal ECM programs; cell-proportion inferences remain based on three biological replicates per genotype.

In doxorubicin-treated mice, knockout attenuated but did not normalize matrix stiffness, fibrosis, pERK and ovarian dysfunction. In DHEA-treated mice it attenuated stiffness/fibrosis, normalized elevated testosterone, improved estrous cycling and increased antral follicles and ovulated oocytes. In both models, fertilization/early-embryo development rates were not significantly changed. Because the deletion was germline and present before either injury, these are protection/prevention experiments, not post-injury therapeutic rescue.

### Adult gene silencing improves middle-aged rodent endpoints

The si*Il11* liposomes were approximately 116 nm (PDI 0.203) with >96% reported encapsulation. After four weeks, mouse ovarian stiffness was 35.7% lower than with control siRNA; hydroxyproline/collagen, ACTA2 and pERK fell; secondary, antral and total healthy follicles and ovulated oocytes increased; and atretic follicles decreased. Rat results converged: lower stiffness and collagen/ACTA2/pERK, more secondary/antral/total healthy follicles and corpora lutea, fewer atretic follicles, and larger litters.

Pregnancy proportions moved in a favorable direction but the reported significance is not credible under the stated Fisher's exact test: mouse source data show 3/8 versus 6/8 pregnancies (figure P=0.0004; recalculated two-sided Fisher P≈0.315), and rat data show 3/10 versus 6/10 (figure P=3.34×10−5; recalculated P≈0.370). Mouse litter size increased among pregnancies, but the caption says n=3 versus 5 whereas the workbook contains three control and six treated litter values. These discrepancies preclude treating pregnancy success as a statistically established effect.

Local ovarian-bursal AAV-sh*Il11ra1* also lowered stiffness and collagen and increased primary, secondary, antral and total healthy follicles and litter size after four weeks. This supports an ovarian-local component, but the absent vector/dose/control details and lack of biodistribution or leakage testing prevent a definitive claim of ovary-restricted action. AAV gene silencing is not an antibody experiment and was not tested in people.

## Null, negative and unresolved findings

- Recombinant IL-11 did not change body weight, most organ indices, or serum CK, ALT, LDH-L and creatinine; heart index decreased.
- In aged *Il11ra1*−/− mice, primordial, primary, antral and corpus-luteum counts were not significant, and total healthy follicles narrowly missed conventional significance (P=0.0503).
- *Il11ra1* loss did not improve two-cell or blastocyst development rates in the aging experiment and did not change fertilization/early-development rates in the doxorubicin or DHEA models.
- Doxorubicin-associated ovarian stiffness remained higher than untreated controls even in knockout mice, indicating partial rather than complete protection.
- Collagen III was mostly unchanged in aging and pathological human ovaries; the matrix signal was dominated by collagen-I-rich fibers.
- No study arm tested an anti-IL-11 antibody in an intact ovary, animal or person. The antibody evidence was confined to primary-human-fibroblast culture.
- Pregnancy counts in the adult mouse and rat siRNA arms favored si*Il11*, but neither contrast is significant when recalculated with the stated two-sided Fisher's exact test; the much smaller printed P values are irreconcilable with the source counts.
- Long-term persistence of reproductive/endocrine benefits, offspring outcomes, menopause timing and reversal of established ovarian fibrosis remain unknown. #gap/long-term-unknown #gap/no-mechanism

## Safety and adverse observations

Short recombinant-IL-11 exposure left body weight and most serum organ-injury markers unchanged but decreased heart index; this was not investigated mechanistically. The siRNA and AAV arms did not report a dedicated systemic toxicology, biodistribution, immunogenicity or adverse-event package. Tail-vein nanoparticles were explicitly non-ovary-specific and could act in multiple organs. The local AAV experiment reduced that particular confound but introduced gene-therapy-specific safety and persistence questions.

The article's statement that the siRNA/liposome approach is FDA-approved should not be read as approval of this **si*Il11* cargo and formulation**; no clinical regulatory or safety dataset for the actual ovarian-aging intervention was presented.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Stiffness/ECM phenotype observed in humans? | yes, observational | AFM and collagen assays were performed in age-stratified and disease-associated surgical tissue; sampling was cross-sectional and cancer-surgery enriched. |
| IL-11 mechanism supported in human material? | partial | Human ovarian expression and primary fibroblast perturbations support TGF-β1→IL-11→ERK→collagen, but no intact human ovary was treated. |
| Organ-level rescue replicated across species? | rodent only | Genetic and adult silencing results converged in mice; si*Il11* nanoparticles also improved rat endpoints. |
| Human fertility or endocrine benefit demonstrated? | no | No participant received IL-11 inhibition, and no pregnancy, live-birth or menopause endpoint was tested clinically. |

The human cohorts establish association, not therapeutic efficacy. Surgical ascertainment, underlying cervical/endometrial cancer and narrow reproductive-phase inclusion limit population generalizability. A clinical translation path would require ovary-targeted exposure, reproductive and systemic safety, durable endocrine/fertility outcomes and evidence that established human fibrosis can be modified. #gap/needs-human-replication

## Limitations and conflicts

- **Prevention versus reversal:** the authors describe the 36-week mouse intervention as a model of rapid ovarian decline and explicitly state that it tested prevention of fibrosis progression. Older animals with established fibrosis are needed before claiming reversal.
- **Developmental confounding:** *Il11ra1* deletion was germline in the aging, POI and PCOS arms. Prior reports associate complete *Il11* or *Il11ra1* loss with infertility; the authors distinguish adult partial silencing and report normal fertility in heterozygotes, but homozygous-developmental selection remains a major interpretive caveat.
- **Systemic delivery and underreported reagents:** tail-vein si*Il11* nanoparticles were not ovary-targeted, so ovarian improvement could partly reflect extra-ovarian effects. The siRNA mass/concentration and control-siRNA sequence were omitted. AAV-bursal delivery supports a local component but did not reproduce the siRNA intervention; the article supplied no AAV Methods section, serotype, construct/promoter, shRNA sequence, titer/genome dose, injection volume, vendor, control-vector identity or biodistribution assessment.
- **Small analyzed subsets:** umbrella cohorts of 25–30/group often contributed only n=5–6 to individual endpoints; snRNA-seq used n=3 animals/group. No statistical method was used to predetermine sample size.
- **Allocation and blinding:** Methods broadly say animals were randomized, but the Reporting Summary specifies random assignment only for WT mice and rats; transgenic animals were grouped by genotype. Investigators were not blinded during allocation, experiments or outcome assessment.
- **Proteomic reproducibility:** the raw TMT mass-spectrometry files were irretrievably lost after physical hard-drive failure and had no complete off-site backup. Processed DEP lists and enrichment/source files remain, but raw-data reprocessing is impossible. DEP calls used nominal P≤0.05 and |fold change|≥1.2 without multiple-testing adjustment; pathway enrichment did use BH-FDR correction.
- **Human observational design and reporting:** no longitudinal human stiffness trajectory or human intervention was performed. Cancer-related surgery, chemotherapy selection in POI, and small PCOS and endometriosis cohorts create selection and confounding risks. The age-matched control group and FAPI-PET sample size were not characterized, and primary-fibroblast donor ages, donor count and donor-to-replicate mapping were not reported.
- **Measurement/reporting inconsistencies:** AFM was performed on frozen sections rather than living ovaries. The publisher files do not resolve the daily-versus-twice-weekly recombinant-IL-11 schedule, the Results-versus-source-data follicle direction, the 2-µg/ml figure-versus-80-µg/ml-ND50 Methods anti-IL-11 values, the SCH772984-versus-U0126 ERK-inhibitor identity, the Pearson-versus-Spearman correlation method, or the matrix-culture sample sizes. The adult-siRNA pregnancy P values and mouse litter n also disagree with the source workbook.
- **Exclusions:** Methods say no data were excluded from analyses, whereas the Reporting Summary says human samples not meeting diagnostic criteria were excluded; this appears to refer to eligibility screening, but the wording is not reconciled.
- **Endpoint breadth:** many histological, hormonal and reproductive outcomes were tested without a study-wide multiplicity framework. Serum sex steroids were measured by ELISA; the authors call for LC–MS/MS in longer-term studies.
- **Conflicts:** the authors declared no competing interests.
- **Publication integrity:** publisher, PubMed and PMC searches through 2026-08-09 found no correction, retraction, expression of concern or superseding primary study. Later commentary does not independently replicate the work.

#gap/needs-replication #gap/needs-human-replication #gap/long-term-unknown #gap/dose-response-unclear

## Related pages

- [[ovary#Ovarian microenvironment aging]] and [[ovarian-stromal-fibroblasts]]
- [[il-11]], [[il-11-receptor-alpha-1]] and [[il-11-signaling]]
- [[tgf-beta]], [[ras-mapk]] and [[extracellular-matrix-remodeling]]
- [[premature-ovarian-insufficiency]], [[polycystic-ovary-syndrome]] and [[endometriosis]]
- [[il-11-gene-silencing]]
- [[anti-il-11-antibodies]] — target-class context only; no antibody was tested as an ovarian intervention in this study
- [[studies/amargant-2020-ovarian-stiffness]] and [[studies/ng-2021-il11-il11ra1-loss-of-function]]
- [[studies/schafer-2017-il11-cardiovascular-fibrosis]] and [[studies/widjaja-2024-il11-healthspan-lifespan]]

## Cited by wiki pages

[Auto-populated by Obsidian backlinks panel]
