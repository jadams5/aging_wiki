---
type: study
doi: 10.1038/s43587-026-01136-9
pmid: 42380622
pmc: PMC13375536
title: "Therapeutic inhibition of telomeric DNA damage response rescues hematopoietic dysfunction driven by telomere shortening and aging"
authors: [Oppezzo A, Sepe S, Cicio G, Cancila V, Sasso E, Conti A, et al.]
year: 2026
journal: Nature Aging
study-design: in-vivo
publication-type: research-article
volume: 6
issue: 7
pages: "1377-1394"
organism: multi
n-subjects: null
intervention: ["[[telomeric-antisense-oligonucleotides]]"]
hallmarks-tested: ["[[telomere-attrition]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [telomeric-ddr-suppression-without-telomere-elongation, reduced-p16-and-inflammatory-signals, improved-hspc-quiescence-and-colony-formation, anti-telog-competitive-repopulation-rescue, aged-wild-type-mouse-replication, two-donor-human-ex-vivo-signal]
local-pdf: null
literature-checked-through: 2026-08-02
verified: true
verified-date: 2026-08-02
verified-by: claude
verified-scope: "Complete 33-page version-of-record article (main text, Methods, all figure and Extended Data captions) and 4-page Nature Portfolio Reporting Summary checked end-to-end; metadata, design, endpoint-specific sample sizes, doses, time points, statistical tests and P values, treatment-arm pooling, acute irradiation scope, telomere-length nulls, human ex-vivo characterization, safety limits and competing interests were cross-checked. PubMed, Crossref, publisher and Europe PMC correction/retraction/update records were checked through 2026-08-02; no correction, retraction, expression of concern or superseding study was identified."
---

# Therapeutic inhibition of telomeric DNA damage response rescues hematopoietic dysfunction driven by telomere shortening and aging

## TL;DR

Oppezzo et al. used locked-nucleic-acid telomeric antisense oligonucleotides (tASOs) to inhibit telomeric noncoding-RNA-dependent DNA damage signaling in third-generation, telomerase-RNA-deficient (*Terc*−/−) mice. A four-week systemic course reduced telomere-dysfunction-induced foci, p16-associated senescence and selected inflammatory signals, improved [[hematopoietic-stem-cells|hematopoietic stem and progenitor cell]] (HSPC) quiescence and colony formation, and produced durable bone-marrow and spleen benefits without elongating telomeres. Similar molecular and functional signals occurred in physiologically aged wild-type mice. The strongest in-vivo HSPC endpoint was qualified, however: only anti-TeloG—not anti-TeloC—significantly rescued competitive repopulation. The human arm consisted solely of ex-vivo colony assays using CD34+ cells from two male donors, so it does not establish human efficacy or safety.[^oppezzo2026]

The study supports persistent telomeric DNA damage response (tDDR) as a modifiable contributor to hematopoietic dysfunction. It does **not** show reversal of [[telomere-attrition]], demonstrate clinical benefit, or establish that genome-wide DNA damage responses remain intact beyond one acute irradiation challenge in mouse hematopoietic tissues.

## Intervention and proposed mechanism

Critically short or dysfunctional telomeres generate G-rich and C-rich telomeric noncoding RNAs that help assemble persistent [[dna-damage-response]] factors at telomeres. The two tested tASOs were complementary to these strands:

- **Anti-TeloG:** `CCCTAACCCTAACCCTAACCC`.
- **Anti-TeloC:** `GGGTTAGGGTTAGGGTTAGGG`.
- **Control ASO:** an unrelated-sequence oligonucleotide.
- All were locked-nucleic-acid-modified oligonucleotides with fully phosphorothioate backbones.

The intervention is designed to block telomeric-RNA function and suppress downstream tDDR signaling rather than restore [[terc]], reactivate the [[telomerase-pathway]], or lengthen telomeres. This distinction is experimentally supported: telomeric fluorescence intensity at the early follow-up and relative telomere length by quantitative PCR at the late follow-up remained unchanged between control and tASO-treated *Terc*−/− mice.[^oppezzo2026]

## Design

### Third-generation *Terc*−/− mouse experiments

- **Animals:** Third-generation *Terc*−/− mice on a C57BL/6J background; both sexes were used. Treatment began at 2–3 months of age.
- **Dose:** 15 mg/kg by intraperitoneal injection, twice weekly for four weeks.
- **Arms:** Untreated, control ASO, anti-TeloG and anti-TeloC, with age-matched wild-type mice as a reference.
- **Main follow-up:** [[bone-marrow]] and [[spleen]] collected two months after the treatment course, when mice were approximately five months old.
- **Late follow-up:** Separate cohorts were analyzed nine months after treatment, at approximately 12 months old.
- **Allocation:** Simple randomization balanced groups for sex, birth date and litter origin.
- **Pooling:** Unless specified otherwise, untreated plus control-ASO mice were pooled as “*Terc*−/− controls,” and anti-TeloG plus anti-TeloC mice were pooled as “tASO-treated.” The authors state that no significant biological or statistical differences were detected within either pair. Cohort/batch-stratified results are not displayed for most endpoints.

Because experiments used multiple overlapping cohorts and tissue-specific subsets with varying sample sizes, the paper does not provide a deduplicated total animal count; `n-subjects` is therefore left null.

### Physiologically aged wild-type mice

C57BL/6J wild-type mice received the same 15 mg/kg, twice-weekly, four-week regimen, with injections administered between 15 and 16 months of age. The principal marrow analyses were described as occurring two months after the final dose, at 18 months; five-month-old wild-type mice were the young reference. For the vaccine experiment, mice were vaccinated at that follow-up and serum IgG was measured three weeks later. Aged PBS/control-ASO mice and aged anti-TeloG/anti-TeloC mice were pooled into control and tASO groups, respectively.[^oppezzo2026]

### Human ex-vivo experiment

Bone-marrow CD34+ HSPCs came from only two healthy, non-frail male donors, aged 60 and 75, undergoing hip-replacement surgery. Immunocompromised participants, people with a cancer history or treatment, and HBV-, HCV- or HIV-positive participants were excluded. Cryopreserved cells received 30 µM control ASO, anti-TeloG or anti-TeloC ex vivo, refreshed at each split. Eight days later, 800 cells were plated per condition; erythroid and myeloid colonies were counted blind after two weeks. Three technical replicates were averaged for each donor. There was no young-donor arm and no valid donor-level inferential test at `n = 2`.[^oppezzo2026]

## Endpoints

- **tDDR and broader DDR:** γH2AX and phosphorylated KAP1 by flow cytometry; γH2AX foci, phosphorylated ATM and phosphorylated CHK1; telomere-dysfunction-induced foci (TIFs) by γH2AX/telomere immunoFISH; an acute ionizing-radiation challenge.
- **Telomere length:** Telomeric fluorescence intensity and relative telomere-length quantitative PCR.
- **Senescence/inflammation:** Cdkn2A/p16-high cells in marrow, spleen and hematopoietic subsets; *Cdkn2a/p16* messenger RNA in aged wild-type marrow; IL-3, IL-6, IL-17A, interferon-γ and tumor-necrosis-factor-α in plasma and marrow fluid.
- **Tissue homeostasis:** Blinded semiquantitative histopathology; immune-cell immunohistochemistry, blood counts, spleen weight and necropsy. Blinding was not reported for the immunohistochemistry.
- **HSPCs:** LSK, long-term HSC, short-term HSC and progenitor frequencies; γH2AX/pKAP1, p16 and Ki67 state; colony-forming-unit (CFU) assays.
- **Functional tests:** Competitive bone-marrow transplantation and spike-specific serum IgG after a 1-µg SARS-CoV-2 mRNA vaccine.
- **Human arm:** Ex-vivo erythroid and myeloid CFU formation only.

## Key results

### tASOs suppressed telomeric damage signaling without elongating telomeres

At the two-month follow-up, pooled tASO treatment reduced γH2AX-high, pKAP1-high and double-positive cells in marrow and spleen relative to pooled *Terc*−/− controls. TIFs were also reduced in marrow (`n = 3` wild type, `n = 5` *Terc*−/− controls, `n = 5` tASO-treated), whereas mean telomeric fluorescence remained shorter than wild type and did not increase with tASO (`n = 3`, `6` and `6`). At nine months post-treatment, lower marrow TIF burden persisted while marrow and splenic telomere length remained unchanged.[^oppezzo2026]

The authors tested nontelomeric DDR preservation in adult wild-type mice given ASO twice weekly for **five** weeks, followed 24 hours later by 4.5-Gy total-body irradiation and analysis one hour after irradiation. γH2AX and pKAP1 responses in marrow and spleen were not detectably different among untreated, control-ASO and tASO groups (`n` generally 5–6 per irradiated group). This supports preservation under that acute assay; it does not establish intact genome-wide repair across DNA-lesion types, tissues, doses or longer time courses.

### Senescence-associated and inflammatory readouts decreased

Pooled tASO treatment reduced Cdkn2A/p16-high cells in bulk marrow and spleen and across several hematopoietic subsets at the two-month follow-up. This is consistent with a lower senescence-associated burden, but p16 alone is not a definitive multi-marker identification of senescent cells. Plasma IL-3, IL-6, interferon-γ and tumor-necrosis-factor-α were low across groups; the reported significant reductions for these cytokines occurred mainly in marrow fluid. Plasma IL-17A was higher in *Terc*−/− controls than wild type and lower after tASO.[^oppezzo2026]

### Bone-marrow and spleen pathology improved at late follow-up

At 12 months, pooled *Terc*−/− controls showed marrow erythroid contraction, myeloid expansion, megakaryocyte abnormalities and erythro-/hemophagocytosis, as well as splenic architectural and extramedullary-hematopoiesis changes. The pooled tASO group had lower total pathological scores in marrow (`P < 0.0001`) and spleen (`P = 0.0107`) versus *Terc*−/− controls (`n = 5` wild type, `n = 15` controls, `n = 12` tASO-treated). The histopathologist was blinded; the paper says representative findings came from two independent cohorts, but cohort-specific estimates are not shown.[^oppezzo2026]

Immunohistochemistry at the same time point indicated partial normalization of PAX5+ B cells, MPO+ granulocytes, CD41+ megakaryocyte/platelet-lineage cells, TER119+ erythroid cells and selected IBA1+ macrophage measures. Not every splenic feature normalized, and anti-TeloG and anti-TeloC were pooled for the primary comparisons.

### HSPC state and colony formation improved

At five months, total LSK frequency did not significantly differ across wild-type, *Terc*−/− control and pooled tASO groups. tASO modestly increased the long-term HSC fraction and reduced short-term HSCs, lowered DDR and p16 readouts, and restored a more quiescent Ki67-low balance in long- and short-term HSCs; multipotent progenitors did not show the same quiescence shift. CFU output from equal numbers of marrow cells was lower in *Terc*−/− controls and increased to near wild-type levels after in-vivo tASO (`n = 16` wild type, `n = 21` controls, `n = 26` tASO-treated; control versus tASO `P = 0.0007`). Direct 10-µM ex-vivo tASO also increased murine CFU output, supporting a cell-intrinsic component.[^oppezzo2026]

At the nine-month follow-up, total LSK frequency again remained unchanged while marrow CFU formation was improved (`n = 9` wild type, `n = 15` controls, `n = 18` tASO-treated; control versus tASO `P < 0.0001`). Colony assays demonstrate short-term progenitor output, not long-term self-renewal by themselves.

### Only anti-TeloG significantly rescued competitive repopulation

Marrow from five-month-old CD45.2 donors was mixed 1:1 with age-matched wild-type CD45.1 competitor marrow and transplanted into lethally irradiated CD45.1/CD45.2 recipients. Donor contribution was followed in blood at weeks 4, 8, 12 and 16 and in recipient-marrow LSK cells at week 16. Unlike most analyses, anti-TeloG and anti-TeloC were disaggregated.[^oppezzo2026]

Anti-TeloG-treated donor marrow significantly improved peripheral-blood, LSK and multilineage reconstitution toward wild-type performance. Anti-TeloC did not show the same significant long-term rescue. At week 16, peripheral-blood group sizes were `n = 8` wild type, `n = 14` pooled *Terc*−/− controls, `n = 5` anti-TeloG and `n = 7` anti-TeloC; endpoint LSK group sizes were `n = 6`, `8`, `5` and `4`. The anti-TeloG blood-series sample count decreased from six at week 4 to five thereafter, with no reason stated in the figure legend. This divergence is central: pooled molecular and CFU benefits do not establish equivalent durable efficacy for both tASOs.

### Vaccine IgG increased

Young *Terc*−/− mice were vaccinated two months after tASO treatment. Spike-specific serum IgG at three weeks was higher in the pooled tASO group than pooled controls (`n = 17` controls, `n = 9` tASO; `P = 0.0025`). In aged wild-type mice, pooled tASO likewise increased spike-specific IgG relative to aged controls (`n = 10/group`; `P = 0.0026`). These are single-antigen, single-time-point binding-antibody measurements; neutralization, cellular immunity, infection protection and durability were not tested.

### Findings extended to aged wild-type mice, but human evidence remained preliminary

In aged wild-type marrow, total-cell DDR markers showed only a downward trend after pooled tASO, while *Cdkn2a/p16* expression significantly decreased. LSK frequency was unchanged; within LSK cells, the γH2AX-high fraction and the γH2AX-high/pKAP1-high double-positive fraction decreased significantly, whereas the pKAP1-high fraction alone did not. CFU output improved (aged control versus tASO `P = 0.0160`), as did vaccine IgG. Key aged-wild-type endpoints generally used 8–10 mice per aged group.[^oppezzo2026]

For each human donor, the mean of the pooled anti-TeloG/anti-TeloC observations exceeded the mean of the pooled untreated/control-ASO observations for both erythroid and myeloid colonies. The individual oligonucleotide pattern was not uniform—for example, donor 1 anti-TeloG myeloid output did not exceed that donor's untreated value—and the pooling was descriptive only. With two donors and technical replicates averaged within donor, the authors appropriately performed no statistical analysis. This is a hypothesis-generating ex-vivo observation—not evidence that tASOs rejuvenate human HSCs, improve hematopoiesis in a person, or are clinically safe.

## Safety findings

Across *Terc*−/− cohorts, the authors reported improved weight trajectories, unchanged spleen weight, no adverse shift in standard blood counts, a more lymphoid/less granulocytic blood differential at the late follow-up, and no visible tumor or overt hematological malignancy at necropsy nine months after treatment. These observations argue against obvious hematopoietic toxicity from one treatment course in this model.[^oppezzo2026]

They do not establish comprehensive systemic safety: the study was not powered for uncommon tumors, did not report a full clinical-chemistry or organ-toxicity panel, did not assess ASO immunogenicity or sequence-dependent off-target hybridization, and did not test repeated lifetime dosing. No lifespan, frailty, infection, leukemia incidence or other clinical endpoint was measured. #gap/long-term-unknown

There is also an unresolved genomic-surveillance trade-off. Because tDDR is checkpoint signaling elicited by dysfunctional chromosome ends, suppressing it could permit persistence or expansion of cells carrying critically short telomeres. The study did not measure chromosome-end fusions, karyotypic instability, somatic mutation burden or clonal hematopoiesis. A negative gross necropsy for visible tumors and overt hematological malignancy cannot resolve that cancer-risk question.

## Interpretation

The unchanged telomere-length readouts make the paper conceptually important: improvement occurred despite persistent short telomeres, supporting the proposition that sustained signaling from dysfunctional telomeres—not telomere length alone—contributes to hematopoietic decline. tASO is therefore better understood as a tDDR-signaling intervention than a telomere-rejuvenation or telomerase-restoration therapy.

The evidence is strongest for causal modulation within the specific *Terc*−/− mouse system because the intervention reduced telomeric foci and improved several downstream phenotypes. Even there, the experiment cannot fully separate direct HSPC effects from changes in inflammation and the marrow niche, and it does not rule out unmeasured ASO effects. The anti-TeloG/anti-TeloC split in competitive transplantation further argues against treating “tASO” as one homogeneous efficacy result. #gap/no-mechanism

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Target pathway conserved in humans? | yes | Human dysfunctional telomeres and persistent DDR signaling are biologically relevant, but the intervention's selectivity and exposure were not established in vivo in humans. |
| Disease model representative? | partial | Third-generation telomerase-null mice model severe telomere dysfunction and aspects of telomere biology disorders; normal human aging is slower, genetically diverse and not telomerase-null. Aged wild-type mice improve relevance but retain mouse telomere and immune-system divergences. |
| Hematopoietic phenotype conserved? | partial | HSPC exhaustion, myeloid skewing and immune decline occur with human aging, but the mouse endpoints were mostly molecular, histological, CFU and transplant-surrogate measures. |
| Replicated in human cells? | preliminary | Two male-donor ex-vivo CD34+ CFU assays showed a directional signal without donor-level statistical inference. |
| Replicated in living humans? | no | No dosing, pharmacokinetics, target engagement, safety or clinical outcome was tested. #gap/needs-human-replication |

## Limitations

1. **No deduplicated animal count.** Numerous overlapping cohorts, varying per-endpoint sample sizes and pooled batches prevent a reliable study-wide `n`.
2. **Pooled treatment arms.** Anti-TeloG and anti-TeloC were usually combined, as were untreated and control-ASO animals. Disaggregated competitive-transplant data show that the two active oligonucleotides are not functionally interchangeable.
3. **Small transplant subgroups.** The anti-TeloG and anti-TeloC endpoint groups had only five and four recipients for marrow LSK reconstitution.
4. **Minimal human evidence.** Human experiments used two non-frail male donors, no young comparison group and no in-vivo intervention; technical replicates do not raise biological `n`. #gap/needs-human-replication
5. **No power calculation or preregistration.** Sample size was not predetermined statistically, and no registered protocol was reported.
6. **Mostly unblinded.** Investigators were not blinded to allocation during experiments or outcome assessment except for Figure 3 histopathology; human colony counting was stated to be blind.
7. **Normality was assumed, not tested.** Parametric tests were used with often-small groups. Effect sizes and confidence intervals were generally not reported; plots show means ± standard errors and exact *P* values.
8. **Outlier handling was incompletely transparent.** Grubbs' test was used to exclude outliers, but the number, groups and values excluded were not enumerated.
9. **Cohort effects are not displayed.** At least two mouse batches were treated and analyzed separately, but most figures pool their observations without batch-stratified estimates or an explicit batch term.
10. **p16 is not senescence-specific.** Cdkn2A/p16-high flow cytometry or messenger RNA alone cannot identify the complete senescent-cell state.
11. **Narrow global-DDR and genomic-surveillance safety tests.** Preservation of irradiation-induced γH2AX/pKAP1 was tested only after one 4.5-Gy challenge, in mouse hematopoietic tissues, at one hour. Chromosome fusions, karyotypic instability, mutation burden and clonal hematopoiesis were not assessed.
12. **No telomere restoration.** Telomere length remained short; benefit should not be described as reversing telomere attrition.
13. **Surrogate outcomes.** CFU, histology, transplantation chimerism and vaccine IgG are mechanistically useful but do not substitute for lifespan, disease incidence, infection protection or patient-centered endpoints.
14. **Single laboratory and no independent replication.** #gap/needs-replication
15. **Commercial conflicts.** Fabrizio d'Adda di Fagagna and Francesca Rossiello are inventors on patent applications covering RNA products and therapeutic oligonucleotides; d'Adda di Fagagna is a shareholder of TAG Therapeutics.

## Data and reporting

The article states that supporting data are provided with the paper and available from the corresponding author on request. Mouse allocation was randomized and balanced by sex, date of birth and litter. Both sexes were used; the Reporting Summary states that no sex-specific differences were observed, but sex-stratified outcome estimates were not reported, so that statement cannot be independently evaluated from the article. The authors declared use of ChatGPT for language and readability, followed by author review and editing.

## See also

- [[telomere-attrition]] — the upstream damage state remained unchanged in length.
- [[dna-damage-response]] — the signaling process targeted downstream of dysfunctional telomeres.
- [[terc]] and [[telomerase-pathway]] — the deleted telomerase component and pathway modeled.
- [[hematopoietic-stem-cells]] and [[stem-cell-exhaustion]] — the central cell compartment and aging phenotype tested.
- [[cellular-senescence]] and [[chronic-inflammation]] — downstream p16 and cytokine-associated readouts.
- [[bone-marrow]], [[spleen]] and [[immunosenescence]] — tissues and functional-aging context.

## Footnotes

[^oppezzo2026]: [[studies/oppezzo-2026-telomeric-ddr-hematopoiesis]] · doi:10.1038/s43587-026-01136-9 · randomized in-vivo mouse study with ex-vivo human-cell arm · multiple overlapping mouse cohorts (main endpoint-specific group sizes generally n = 3–26; no deduplicated total reported) · human n = 2 male donors · mostly unblinded · model: third-generation *Terc*−/− and aged C57BL/6J mice plus human bone-marrow CD34+ HSPCs · peer-reviewed
