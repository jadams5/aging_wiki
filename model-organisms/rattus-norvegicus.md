---
type: model-organism
species-name: Rattus norvegicus
common-name: Brown rat / Norway rat / lab rat
aliases: [lab rat, Norway rat, brown rat, white rat, Wistar rat, Fischer 344 rat]
ncbi-taxonomy: 10116
typical-lifespan: "2–4 years (median ~24–36 months; strain-dependent; some strains under CR approach 4 years)"
lifespan-ratio-to-human: "~25x shorter"
genome-similarity-to-human: "~90% one-to-one orthologs (slightly higher than mouse by some estimates)"
genome-size-mb: 2750
adult-cell-count: null
itp-validated: false
key-strengths: [larger-body-size, surgical-tractability, cardiovascular-aging, behavioral-assays, longer-lifespan-than-mouse, CR-foundational-model]
key-divergences: [telomere-biology, immune-aging, drug-metabolism-CYP, limited-transgenic-toolkit-historically]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Rat Genome Consortium 2004 (ortholog %, genome size) verified against local PDF. Masoro 1982 PNAS verified against local PDF. Anisimov 2010 verified against local PDF (SHR organism ambiguity resolved; CBA rat error corrected; rat strain table corrected). McCay 1935 (10.1093/jn/10.1.63) and Yu/Masoro 1985 (10.1093/geronj/40.6.657): closed-access, not verifiable — #gap/no-fulltext-access retained. Moran 2005 (10.1007/s10522-005-4808-0): closed-access, not verifiable. Burwell 1994 (10.1016/0197-4580(94)90027-2): download failed after retry, not verifiable. Gallagher 2002 (10.1002/hipo.10016): closed-access, not verifiable."
---


# *Rattus norvegicus* — lab rat

The laboratory rat is the **second-most-used vertebrate model in aging biology**, historically preceding the mouse as the primary mammalian aging system. Its longer lifespan (~2–4 years vs mouse ~2–3 years), **larger body size** (enabling surgical interventions and cardiovascular monitoring impossible in mice), and **richer behavioral repertoire** make it irreplaceable for certain experimental domains. Crucially, rats provided the foundational caloric restriction evidence: McCay et al. 1935 and Yu, Masoro & McMahan 1985 established the 30–50% lifespan-extension figures in rats — not mice — that anchored CR as the defining longevity intervention for decades [^mccay1935][^yumasoro1985]. The NIA maintains dedicated rat aging colonies (Fischer 344, Brown Norway, and F344×BN F1 hybrid) alongside its mouse resources.

## Identity and resources

| Field | Value |
|---|---|
| Species | *Rattus norvegicus* (Brown Norway / Norway rat) |
| NCBI Taxonomy ID | 10116 |
| Genome assembly | mRatBN7.2 (2022 updated assembly) |
| Typical median lifespan | 24–36 months (strain-dependent) |
| Lifespan ratio to human | ~1:25 |
| Genome size | ~2,750 Mb |
| One-to-one orthologs with human | ~90% of protein-coding genes [^rgsc2004] |
| AnAge entry | *Rattus norvegicus* (see genomics.senescence.info/species/) |

[^rgsc2004]: doi:10.1038/nature02426 · Rat Genome Sequencing Project Consortium · in-silico · model: Brown Norway rat genome vs human GRCh; local PDF available at DOI lookup

## Strain landscape

Strain background shapes aging phenotype substantially in rats, as in mice.

| Strain | Median lifespan | Common aging uses | Notable features |
|---|---|---|---|
| **Fischer 344 (F344)** | ~24–28 months ♂ | NIA standard; CR studies; tumor burden | High incidence of testicular interstitial cell tumors ♂; leukemia; pituitary tumors; well-characterized |
| **Brown Norway (BN)** | ~30–36 months ♂ | Cardiovascular; immune aging | Longer-lived than F344; fewer spontaneous tumors; used in NIA aging colony |
| **F344×BN F1 hybrid** | ~32–38 months ♂ | Sarcopenia; behavioral aging | NIA preferred hybrid; combines F344 tractability with BN lifespan; superior sarcopenia model vs F344 alone [^moran2005] |
| **Wistar** | ~24–30 months | Metabolic; general pharmacology | Outbred; used widely in Europe; more variable than inbred strains |
| **Sprague-Dawley (SD)** | ~24–30 months | Toxicology; physiology | Outbred; common in pharmaceutical research; high obesity incidence on ad libitum diet |
| **Spontaneously Hypertensive Rat (SHR)** | ~18–24 months | Cardiovascular aging; hypertension | Genetic model of essential hypertension; accelerated cardiovascular aging; stroke-prone substrain (SHRSP) available |

The **F344×BN F1 hybrid** is now the NIA-preferred rat aging model for muscle aging research: it develops sarcopenia with a profile more representative of human loss-of-muscle-mass-with-age than the F344 alone, which accumulates atypical muscle pathology [^moran2005].

[^moran2005]: doi:10.1007/s10522-005-4808-0 · Moran AL et al. · in-vivo · model: F344 vs F344×BN male rats; comparative contractile properties and muscle mass across ages

## Foundational caloric restriction studies — rats, not mice

The initial CR lifespan-extension evidence that established the field came from rats. This is frequently misattributed to mice in secondary literature.

- **McCay, Crowell & Maynard 1935**: restricted albino rats post-weaning to retard growth; median lifespan extended substantially vs controls in the first controlled demonstration that diet can modulate lifespan in mammals [^mccay1935]. #gap/no-fulltext-access (closed-access; quantitative effect sizes should be verified against original).
- **Yu, Masoro & McMahan 1985**: randomized Fischer 344 rats to ad libitum vs 60% of ad libitum feeding; food-restricted rats lived ~30–40% longer (median and maximal) and showed delayed onset of chronic diseases, establishing the CR effect across a well-characterized inbred strain [^yumasoro1985]. #gap/no-fulltext-access (closed-access).
- **Masoro, Yu & Bertrand 1982 PNAS**: primary data paper (n=115/group, male Fischer 344 rats, 60% of ad lib intake) showing CR markedly prolonged lifespan (mean: 701 days ad lib vs 986 days restricted, ~41% extension) *without* reducing caloric intake per gram of body weight — arguing against the metabolic rate hypothesis for CR life extension. The paper does not support a broad "aging retardation" interpretation; its thesis is that fuel flux per gram of body weight is not the mechanism [^masoro1982]. #gap/needs-replication (pre-replication-era single-lab study).

**Important calibration point for the wiki:** The ~30–50% lifespan extension figures from CR that appear in many secondary sources refer to rat data from these studies. Mouse CR data from later studies (C57BL/6 and UM-HET3 under ITP conditions) tend to show more modest effects (~10–25%). See [[caloric-restriction]] and [[mus-musculus]] for direct comparison.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (mTOR, AMPK, autophagy all respond to CR in humans) |
| Phenotype conserved in humans? | partial (healthspan markers improve; lifespan extension magnitude undemonstrated in humans) |
| Replicated in humans? | in-progress / contradicted for magnitude (CALERIE 2-year RCT) |

[^mccay1935]: doi:10.1093/jn/10.1.63 · McCay CM, Crowell MF, Maynard LA · in-vivo · model: albino rats, post-weaning dietary restriction; n=several cohorts; archive confirmed (closed-access)
[^yumasoro1985]: doi:10.1093/geronj/40.6.657 · Yu BP, Masoro EJ, McMahan CA · in-vivo · model: Fischer 344 rats, 60% ad libitum CR; archive confirmed (closed-access)
[^masoro1982]: doi:10.1073/pnas.79.13.4239 · Masoro EJ, Yu BP, Bertrand HA · in-vivo · n=115/group · male Fischer 344 rats · 60% of ad lib CR from 6 weeks of age · primary data paper: argues against metabolic rate hypothesis for CR life extension; mean LS 701d (ad lib) vs 986d (restricted)

## NIA rat aging colonies and the absence of an ITP equivalent

Unlike mice, rats do **not** have an equivalent of the NIA Interventions Testing Program (ITP) multi-site replication framework. The NIA does maintain rat aging colonies — specifically the Fischer 344, Brown Norway, and F344×BN F1 hybrid — and distributes aged rats to investigators. However, there is no pre-specified multi-site replication protocol for longevity interventions analogous to the mouse ITP. #gap/unsourced (NIA colony details should be verified against current NIA aging colony documentation.)

This means rat longevity intervention studies generally carry less inferential weight than ITP-validated mouse results: they are typically single-lab, single-strain, not pre-specified, and often not replicated. The absence of a rat ITP is a significant gap in the field. #gap/needs-replication

## Genome similarity and conserved aging pathways

The 2004 rat genome sequence (Brown Norway strain) revealed ~90% of rat protein-coding genes have clear one-to-one human orthologs [^rgsc2004], slightly higher than the commonly cited ~85% figure for mice. All major aging-relevant pathways present in mice are also present in rats; rats do not add unique pathway conservation advantages over mice:

- **[[mtor]] signaling** — conserved; rapamycin inhibits rat mTORC1 via identical mechanism.
- **[[insulin-igf1]] / IIS pathway** — conserved; IGF1, IGF1R, IRS1, PI3K, AKT, FOXO all orthologous.
- **[[ampk]] pathway** — conserved; AMPK α/β/γ subunits orthologous.
- **[[autophagy]]** — ATG gene family conserved; autophagic flux declines with age in rat tissues.
- **[[sirtuin]] pathway** — SIRT1–7 all have rat orthologs; NAD+-dependent function conserved.
- **[[p53-pathway]] and senescence biology** — TP53, p21, p16/CDKN2A, RB conserved; [[cellular-senescence]] accumulation documented in aged rat tissues.
- **[[nf-kb]] inflammatory signaling** — conserved; inflammaging phenotype present in aged rats.

## Known divergences from human (and from mouse)

### 1. Telomere biology

As with standard mouse strains, laboratory rat strains maintain **constitutive telomerase activity** in most somatic tissues, and have longer telomeres than humans. Telomere shortening is not a primary aging mechanism in standard rat models. The rat is not a valid model for telomere-driven replicative senescence without genetic engineering. See [[telomere-attrition]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (components conserved; regulation diverges; telomerase repression absent) |
| Phenotype conserved in humans? | no (in standard lab strains) |
| Replicated in humans? | yes (telomere attrition confirmed as human aging feature independently) |

### 2. Transgenic toolkit (historically limited; CRISPR has narrowed the gap)

Until the 2010s, rat transgenics were substantially harder to generate than mouse transgenics: embryonic stem cell lines were not available, and pronuclear injection efficiency is lower. This limited the use of knockout and knock-in approaches. **CRISPR/Cas9 has substantially closed this gap** — rat knockouts are now routine — but the historical deficit means the rat has far fewer established aging-related transgenic lines than the mouse, and the tooling ecosystem (antibody panels, reporter lines, Cre drivers) remains thinner. #gap/unsourced (CRISPR timeline claim; verify against key rat CRISPR papers)

### 3. Drug metabolism (CYP differences)

As with mice, rat CYP450 enzyme repertoires differ from human CYP3A4 and other human CYP enzymes. Rat is somewhat pharmacologically closer to humans than mouse for some CYP substrates (rat has been used preferentially in some PK studies), but large interspecies differences remain. Dose-response in rat does not directly translate to human dose. #gap/unsourced (specific CYP comparison claim)

### 4. Immune aging

Rat and human immune systems share the same limitations as mouse re: Th1/Th2 balance differences, distinct NK receptor families (rat Ly49/NKR-P1 vs human KIR), and SASP composition differences. Rat immunosenescence data should not be assumed to map directly to human without cross-validation. See [[immunosenescence]].

## Strengths as an aging model

### 1. Larger body size: surgical and physiological tractability

At 200–500 g adult body weight vs ~25 g for mice, rats enable:
- **Cardiovascular instrumentation**: blood pressure telemetry, echocardiography, aortic catheterization, and cardiac catheterization are substantially easier than in mice. The rat is the preferred model for longitudinal cardiovascular aging studies.
- **Serial blood sampling**: repeated, adequate-volume blood draws are feasible in rats but highly stressful or impractical in mice for longitudinal studies.
- **Stereotaxic surgery**: intracranial injections, electrode implantation, lesioning of specific brain structures — the rat brain is large enough for reliable targeting. This makes rats superior for [[neurodegeneration]] models.
- **Drug PK studies**: larger blood volumes allow PK characterization at multiple time points per animal, reducing n needed.

### 2. Behavioral repertoire (cognitive aging)

Rats have a richer behavioral repertoire than mice in several aging-relevant domains:

- **Morris water maze**: Rats were the original species for the Morris water maze spatial navigation task. Aged (24+ month) rats show reliable spatial memory deficits correlated with hippocampal changes — individual differences in aged-rat MWM performance track with hippocampal PKCγ and synaptic integrity [^gallagher2002]. This individual-differences approach has been foundational for understanding cognitive aging variance. #gap/needs-human-replication
- **Novel object recognition**: Working memory decline with age is well-characterized in rats.
- **Radial arm maze, social cognition, fear conditioning**: All have more extensive aged-rat literature than aged-mouse literature.

The rat is generally considered the **gold standard for cognitive aging behavioral paradigms**, in part because the behavioral outputs are more robust and interpretable than in mice.

[^gallagher2002]: doi:10.1002/hipo.10016 · Gallagher M et al. · in-vivo · model: aged Long-Evans and Fischer 344 rats; Morris water maze; hippocampal PKCγ correlates with individual spatial memory performance

### 3. Cardiovascular aging: the SHR model and beyond

- The **Spontaneously Hypertensive Rat (SHR)** is a genetic model for essential hypertension with an accelerated cardiovascular aging phenotype. It develops left ventricular hypertrophy, vascular stiffness, and end-organ damage analogous to human hypertensive heart disease. The stroke-prone substrain (SHRSP) allows modeling of hypertension-driven cerebrovascular disease.
- Aged **Wistar** and **F344** rats develop aortic stiffening, left ventricular hypertrophy, and diastolic dysfunction that parallel human age-related cardiac changes.
- The **F344×BN F1 hybrid** aorta shows age-related increases in oxidative stress and altered mechanotransduction paralleling human vascular aging [^moran2005]. #gap/needs-human-replication

**Clarification on Anisimov SHR studies**: The [[metformin]] page notes that Anisimov's SHR lifespan studies used mice, not rats. Confirmed against the primary source (Table 1, Anisimov 2010): SHR is listed under the **Mouse** section of Table 1 (ref [70] in that paper = "Metformin slows down aging and extends life span of female SHR mice," *Cell Cycle* 2008). The rat lifespan data in Anisimov 2010 uses female outbred **LIO** rats (phenformin and buformin studies) and male **Fischer-344** rats (metformin, ref [75] = Smith et al. 2010). There is no CBA rat strain in this paper. Readers should verify organism identity against primary sources before citing. #gap/needs-human-replication

[^anisimov2010]: doi:10.18632/aging.100230 · Anisimov VN · review · n=multiple animal models · model: rat (LIO female outbred, Fischer-344 male) and mouse (SHR female, FVB/N, NMRI, 129/Sv, C3H/Sn); SHR data are from mice NOT rats (Table 1); PDF verified

### 4. Longer lifespan than mouse: cleaner longitudinal studies

The 2–4 year rat lifespan (vs 2–3 years for mice) provides a larger window for longitudinal studies of aging biomarkers. The F344×BN F1 hybrid in particular reaches 3+ years reliably, enabling studies of late-life phenotypes that would require very old (and thus expensive and scarce) mice. The longer lifespan also means a larger absolute "aging period" per animal — more time points, more tissue, more data per cohort.

### 5. Sarcopenia model: F344×BN superiority

The F344×BN F1 hybrid is a **better sarcopenia model than F344 alone**: it shows progressive decline in muscle mass and contractile force parallel to human sarcopenia, without the atypical muscle pathology (neoplasms, atrophy artifacts) that confound F344-only muscle aging studies [^moran2005]. Muscle fiber type transitions (type II → type I with age), mitochondrial dysfunction, and neuromuscular junction changes in this hybrid recapitulate human patterns more closely. See [[sarcopenia]].

## Behavioral assessment of aging: F344 vs BN vs F1

Burwell et al. 1994 compared behavioral aging phenotypes across F344, BN, and F344×BN F1 male rats using standardized tasks including open-field activity, swimming, sensorimotor, and maze performance [^burwell1994]. Key findings:

- **F344**: Shorter lifespan, more aggressive age-related cognitive decline, higher tumor burden with age.
- **BN**: Longer lifespan, milder cognitive aging, but different disease trajectory.
- **F344×BN F1**: Intermediate lifespan; shows graded, progressive cognitive decline suitable for intervention studies.

The F1 hybrid was specifically recommended for aging research requiring a reliable, graded cognitive decline phenotype without the confounds of F344's tumor burden.

[^burwell1994]: doi:10.1016/0197-4580(94)90027-2 · Burwell RD et al. · in-vivo · model: male F344, BN, and F344×BN F1 rats; behavioral aging battery; n=multiple cohorts; #gap/no-fulltext-access (hybrid OA but download failed; claims unverified against PDF)

## Failure modes — cases where rat misled or limited aging research

### Overestimation of CR effect magnitude

The foundational rat CR studies (McCay 1935, Yu/Masoro 1985) were conducted under conditions — post-weaning restriction, near-starvation levels in some cohorts — that are not directly comparable to CR as practiced today (10–30% reduction in adults). The 30–50% lifespan extension figures should not be treated as the expected human benefit. See [[caloric-restriction]]. #gap/needs-human-replication

### Lack of multi-site replication infrastructure

Without an ITP equivalent, most rat longevity intervention claims rest on single-lab, single-strain results. Effect sizes are likely inflated by publication bias. This is a fundamental weakness compared to the mouse ITP framework.

### Tumor spectrum confounds (F344)

The F344 strain has an unusually high incidence of interstitial cell tumors (testis), large granular lymphocyte leukemia, and pituitary adenomas. These contribute substantially to mortality and can confound interpretation of intervention effects as lifespan changes when what is really being measured is tumor-onset delay. Investigators must distinguish anti-tumor effects from genuine aging retardation.

### Historically limited transgenics

The absence of robust transgenic tools until CRISPR means that mechanistic aging studies requiring loss-of-function genetics (e.g., pathway-specific knockouts) were done almost exclusively in mice. Rat mechanistic aging genetics remains sparse.

## Key aging interventions tested in rat

| Intervention | Rat model | Main finding | Human evidence |
|---|---|---|---|
| Caloric restriction | Multiple strains (F344, albino) | ~30–50% median LS extension in foundational studies [^mccay1935][^yumasoro1985] | Limited/contradicted for lifespan magnitude (CALERIE) |
| Metformin | Female outbred LIO rats and male Fischer-344 rats | No significant mean or maximum lifespan extension in rats in reviewed studies; buformin extended LIO rat mean LS by 7% (ns) and last-10% LS by 12% (p<0.05); metformin in F344 males showed no significant effect [^anisimov2010] | TAME trial in-progress (human); rat data not directly in TAME rationale |
| Exercise (voluntary wheel running) | F344 and F344×BN | Preserved muscle mass, cardiovascular function; attenuated sarcopenia | Strong human evidence (separate human exercise literature) |
| Rapamycin | Various | Lifespan extension reported in some rat studies; less robust than mouse ITP data | Limited; ongoing trials |

## Limitations and gaps

- **No ITP equivalent**: No multi-site, pre-specified, genetically heterogeneous rat longevity intervention program exists. All rat intervention results should be considered lower-confidence than ITP-validated mouse results. #gap/needs-replication
- **Telomere biology**: Same limitation as standard mouse strains — constitutive somatic telomerase means rats are not valid models for telomere-driven aging. [[telomere-attrition]] #gap/needs-human-replication
- **Tumor-specific mortality confounds (F344)**: F344 strain-specific tumor spectrum can masquerade as lifespan extension; investigators must report cause-specific mortality and tumor incidence separately. #gap/unsourced (needs primary source confirming this confound)
- **CRISPR mechanistic gap**: Despite CRISPR closing the transgenic gap technically, the ecosystem of conditional knockouts, Cre drivers, and reporter lines remains far thinner than in mouse. Many mechanistic aging questions cannot yet be addressed in rat. #gap/unsourced
- **SHR organism identity**: Resolved for Anisimov 2010 — SHR data in that paper are from mice, not rats (Table 1 explicitly lists SHR under Mouse section; ref [70] = "Metformin slows down aging and extends life span of female SHR mice," *Cell Cycle* 2008). The [[metformin]] page may still need updating to reflect this correction.
- **Female rat aging data**: Historically, many rat aging studies used only males (F344 males are more commonly characterized). Sex-specific aging data in female rats is sparser. #gap/unsourced
- **Microbiome confounding**: As with mice, facility-specific microbiome effects are uncontrolled variables in rat aging studies. #gap/unsourced

## See also

- [[mus-musculus]] — the dominant vertebrate aging model; direct comparator; has ITP infrastructure
- [[_extrapolation-guide]] — three-dimension rubric for model→human extrapolation
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis on why rodent-validated interventions systematically underperform in humans
- [[caloric-restriction]] — McCay 1935 and Yu/Masoro 1985 foundational CR work in rats
- [[mtor]] — conserved longevity pathway; rapamycin works in rats and mice
- [[sarcopenia]] — muscle aging; F344×BN F1 hybrid is preferred rat model
- [[neurodegeneration]] — rat behavioral assays (Morris water maze) are gold standard
- [[metformin]] — Anisimov rat lifespan studies; note SHR organism ambiguity
- [[telomere-attrition]] — telomere biology; same divergence from human as mouse
- [[cellular-senescence]] — p16/p21 senescence biology conserved in rats
- [[immunosenescence]] — immune aging divergences apply to rats as to mice
- [[cardiovascular-aging]] — SHR and aged rat cardiovascular models
