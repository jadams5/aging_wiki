---
type: protein
aliases: [luteinizing hormone, lutropin, LHB, LH, LH-beta]
uniprot: P01229
ncbi-gene: 3972
hgnc: 6584
ensembl: ENSG00000104826
genage-id: null
mouse-ortholog: Lhb
pathways: ["[[gnrh-signaling]]", "[[hypothalamic-pituitary-gonadal-axis]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
sens-categories: []
complex-subunits: [P01215]
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[gnrh-signaling]]", "[[estradiol]]", "[[testosterone]]", "[[progesterone]]"]
causes: ["[[testosterone]]", "[[menopause]]"]
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Primary-source DOI claims cross-checked against PubMed full abstracts (Zhang 2024, Sims 2023, Vermeulen 1995, Anawalt 2022) and full-text PDF (Casadesus 2005 via PMC11924470). Canonical-DB identity fields verified via UniProt REST API (P01229, P01215), NCBI Gene, HGNC, and Ensembl. Quantitative claims in male-aging section (10–30% LH rise, 1–2%/yr testosterone decline) not independently verifiable from available abstracts — attributed to combined [vermeulen1995][beattie2015][anawalt2022] footnotes; the 1–2%/yr figure may overstate Vermeulen 1995 (~0.6–0.8%/yr). Blair 2015 and Beattie 2015 full texts not retrieved (closed-access, not in local archive). Galbraith 2026 DOI verified via Crossref."
---


# LH (LHB / luteinizing hormone)

Luteinizing hormone is an anterior-pituitary glycoprotein gonadotropin — a heterodimer of the shared alpha subunit (CGA, UniProt P01215, also used by FSH, TSH, and hCG) and the hormone-specific beta subunit (LHB, UniProt P01229). LH is secreted in pulses under the control of hypothalamic [[gnrh-signaling|GnRH]] and acts through the LHCGR receptor (shared with hCG). Its primary roles are testosterone production by [[leydig-cells|Leydig cells]] in men and theca-cell androgen synthesis plus ovulation triggering in women. In aging, LH rises in both sexes as negative feedback from the gonads weakens — most dramatically after [[menopause]], and more modestly in late-life male reproductive decline — making it a key endocrine staging marker. Partner hormone: [[fsh]].

## Identity

- **UniProt:** P01229 (LUHB\_HUMAN)
- **NCBI Gene:** 3972
- **HGNC:** HGNC:6584
- **Ensembl:** ENSG00000104826
- **Mouse ortholog:** Lhb (NCBI Gene 16866; one-to-one ortholog)
- **Length:** 121 amino acids (mature LHB chain, positions 21–141 of the 141-aa precursor; signal peptide is residues 1–20; the mature heterodimer pairs with the 92-amino-acid CGA alpha chain, which is positions 25–116 of the 116-aa CGA precursor)
- **Shared alpha subunit:** CGA (UniProt P01215) — also shared by FSH (FSHB), TSH (TSHB), and choriogonadotropin (CGB). CGA determines glycoprotein hormone family membership; LHB confers receptor specificity.
- **Receptor:** LHCGR (luteinizing hormone/choriogonadotropin receptor) — a Gs-coupled GPCR expressed primarily on gonadal steroidogenic cells; shared with hCG, which has identical downstream signaling but a longer half-life [^blair2015].

## Biochemistry and structure

LH is a cystine-knot glycoprotein. The LHB chain contains six disulfide bonds (positions 29–77, 43–92, 46–130, 54–108, 58–110, 113–120) and one N-linked glycosylation site (Asn50). The alpha subunit contributes two further N-linked glycosylation sites. The glycan patterns modulate half-life and bioactivity; micro-heterogeneity in glycoforms contributes to inter-individual and across-cycle variation in LH bioactivity ratios (immunoactive vs bioactive LH can diverge by two-fold or more). The mature heterodimer cannot be dissociated and re-assembled under physiological conditions — correct non-covalent assembly occurs co-translationally in gonadotrope ER/Golgi.

## Physiology

### Regulation by GnRH pulsatility

LH is released from anterior-pituitary gonadotropes in discrete pulses driven by GnRH from hypothalamic KNDy neurons (co-expressing kisspeptin, neurokinin B, and dynorphin). Pulse frequency encodes gonadal axis tone: high-frequency (every 60–90 min) GnRH pulses favor LH secretion; low-frequency pulses favor FSH. Continuous (non-pulsatile) GnRH exposure paradoxically suppresses LH by downregulating GnRH receptors — the pharmacological basis for GnRH agonist-based androgen deprivation therapy (ADT) in prostate cancer (an initial "flare" as stored LH/FSH is released, then suppression within 2–4 weeks) [^blair2015].

### Male reproductive axis

In men, LH acts on testicular Leydig cells via LHCGR → cAMP → PKA → StAR protein induction → cholesterol import into the mitochondrial inner membrane → steroidogenic enzyme activation (CYP11A1, CYP17A1, HSD17B3) → testosterone synthesis. Testosterone provides negative feedback at both the hypothalamus (suppressing GnRH pulse frequency) and pituitary (reducing gonadotrope sensitivity to GnRH) to regulate LH secretion. FSH acts in parallel on Sertoli cells to support spermatogenesis. LH is therefore the primary driver of circulating testosterone in men.

### Female reproductive axis

In women, the LH profile across the menstrual cycle is more complex:

1. **Follicular phase** — low-amplitude LH pulses support theca-cell androstenedione production (aromatized to estradiol by [[granulosa-cells]]). FSH drives follicle selection and granulosa proliferation; LH provides the androgenic substrate.
2. **Mid-cycle LH surge** — the dominant follicle produces sufficient estradiol to switch the pituitary and hypothalamus into a positive-feedback mode. The resulting abrupt 8–10-fold LH surge (and smaller FSH co-surge) triggers: oocyte resumption of meiosis, follicle wall remodeling/rupture (ovulation), and luteinization of the granulosa-theca complex.
3. **Luteal phase** — LH sustains the corpus luteum, which secretes progesterone. If fertilization occurs, hCG from the trophoblast rescues the corpus luteum (LHR cross-reacts with hCG) and maintains progesterone until placental steroidogenesis takes over.

## Aging biology

### Post-menopausal LH rise

The transition to menopause is driven by exhaustion of the primordial follicle pool, leading to failing estradiol and inhibin-B secretion. Loss of negative feedback causes both LH and FSH to rise markedly. In the menopausal transition, FSH typically rises earlier and to a proportionally greater degree than LH (the FSH:LH ratio increases), reflecting FSH's additional inhibin-B regulation. Both hormones reach plateau values substantially above premenopausal norms in established post-menopause, where they remain chronically elevated for decades. FSH rises more dramatically (often cited as 10–20× above follicular-phase norms); LH rises to a lesser degree (typically 3–5× above mid-follicular-phase reference ranges in clinical practice). #gap/needs-human-replication — precise fold-rise values vary substantially by assay and reference population; the Anawalt 2022 citation here is inappropriate (that review covers male androgen decline). A dedicated reference for post-menopausal gonadotropin normative values should be added.

The chronically elevated LH of post-menopause is primarily a read-out of gonadal failure — the pituitary is responding correctly. However, given LHCGR expression in extra-gonadal tissues, persistent supra-physiological LH concentrations may have direct effects beyond the ovary (see CNS section).

### LH in male reproductive aging

In men, LH rises modestly with age, but the picture is substantially more heterogeneous than in women because the testicular decline is gradual and there is no discrete endpoint equivalent to menopause. Key features [^vermeulen1995] [^beattie2015] [^anawalt2022]:

- Mean testosterone declines approximately 1–2% per year from the third decade onwards (substantial inter-individual variation).
- LH tends to rise modestly (10–30% above young-adult norms by age 70–80) as a compensatory response to declining Leydig cell steroidogenic capacity.
- The **compensatory rise often fails** — i.e., LH is elevated relative to a young baseline, yet testosterone is still low-normal or frankly low. This defines "primary testicular failure" (or the Leydig cell exhaustion component of andropause): the testis cannot respond to the higher LH signal.
- Aging Leydig cells show reduced StAR expression, mitochondrial dysfunction, and increased oxidative stress — mechanistically reviewed by Beattie et al. and Papadopoulos et al. [^beattie2015] [^papadopoulos2021].
- A secondary component exists: hypothalamic GnRH pulse amplitude declines with age, while pulse frequency is maintained in most studies [^vermeulen1995] — this reduces LH secretory amplitude ("secondary" or mixed hypogonadism component).
- The net result: in clinical late-onset hypogonadism, the FSH/LH ratio and the LH-to-testosterone ratio are diagnostically useful. Elevated LH with low testosterone points toward primary testicular failure; normal or low LH with low testosterone suggests a secondary (central) component requiring pituitary evaluation.

| FSH/LH staging in males | Interpretation |
|---|---|
| LH elevated, FSH elevated, testosterone low | Primary (testicular) failure; Leydig cell exhaustion |
| LH normal or low, FSH low, testosterone low | Secondary (hypothalamic/pituitary) failure |
| LH mildly elevated, testosterone low-normal | Compensatory response; early/partial Leydig cell failure |

### LH and the hypothalamic-pituitary-gonadal axis in aging

Both sexes show a shift from tight pulsatile regulation to a more tonic, elevated basal LH state with age. In women this is abrupt (menopausal transition); in men gradual. The HPG axis is entangled with aging more broadly through its connections to [[altered-intercellular-communication]]: gonadal steroids modulate immune cell function, bone turnover, muscle anabolism, adipose distribution, and CNS function. LH elevation is therefore not isolated — it accompanies and may amplify the systemic changes of [[menopause]] and late-life male hypogonadism.

## Contested role in CNS aging and Alzheimer's disease

### Mechanistic basis

LHCGR transcripts and protein have been detected in hippocampus, entorhinal cortex, and other brain regions in both rodents and humans, suggesting LH can act directly on neurons [^blair2015]. The Casadesus/Bowen/Smith "gonadotropin hypothesis of Alzheimer's disease" (first proposed ~2000–2002 by Bowen and colleagues; reviewed in Casadesus et al. 2005) proposes that rising post-menopausal LH directly contributes to amyloid-beta production and tau pathology, independent of estrogen decline [^casadesus2005]. Supporting observations include: LHR co-localizing with amyloid plaques in post-mortem AD brain; LH promoting amyloid precursor protein processing toward amyloidogenic products in cell-culture; and epidemiological correlation of LH elevation with cognitive decline.

### Rodent intervention data

More recent mouse work has extended this hypothesis:

- **Zhang et al. 2024** — Ovariectomized APP/PS1 (AD model) mice treated to suppress peripheral LH (via GnRH antagonist or other LH-lowering approach) showed rescue of OVX-associated cognitive impairment mediated through EGR1 (early growth response-1) and acetylcholinesterase (AChE) pathway changes in dorsal hippocampus, rather than by estradiol supplementation. The study also found higher pituitary LH-mRNA and higher hippocampal EGR1 in post-mortem AD human brains, with a positive correlation between peripheral LH and posterior hippocampal EGR1. N per group not stated in abstract. **Note:** the mechanism demonstrated is EGR1/cholinergic, not amyloid plaque reduction or tau phosphorylation [^zhang2024]. This is a mechanistic intervention study, not a clinical trial.
- **Sims et al. 2023** — 12-month-old female Lhcgr−/− (genetic LHCGR knockout) mice showed full rescue of an age-related anxiety phenotype (dark-light box and fear conditioning tests) that was prominent in age-matched wild-type females [^sims2023]. LHCGR loss did not affect recognition memory (NOR) or working spatial memory (Y-maze). Male mice and 3-month-old mice of either sex showed no consistent deficits on any test. This is a genetic KO study, not a pharmacological-suppression study. Establishes a female-sex-specific and age-specific anxiety phenotype linked to LH signaling, in a non-AD model.

### Caveats and contrast with FSH evidence

The FSH direct-action hypothesis has moved more rapidly into mechanistic understanding and has some human translational data (see [[fsh]]). The LH-CNS hypothesis remains primarily rodent-based. The foundational Casadesus 2005 review was produced by a group that included consultants and shareholders of Voyager Pharmaceutical, the company developing leuprolide acetate for AD treatment — a material conflict of interest that should be factored into weight of this hypothesis. Key uncertainties:

- Brain LHCGR expression levels in humans appear low and tissue-dependent — quantitative data are limited.
- Whether circulating LH crosses the blood-brain barrier in sufficient amounts to act on central receptors (versus local pituitary-portal or retrograde transport mechanisms) is unresolved.
- One small human RCT of leuprolide acetate in AD exists (Bowen et al. 2015; n=109 women, 48 weeks; doi:10.3233/JAD-141626): the primary endpoints (ADAS-Cog, ADCS-CGIC) were not statistically significant in the overall cohort, though a pre-specified subgroup on acetylcholinesterase inhibitors showed benefit at high dose. The trial was underpowered and the hypothesis-generating subgroup analysis limits conclusions. The overlapping FSH suppression in any GnRH-agonist/antagonist intervention makes attribution to LH specifically difficult.

#gap/needs-human-replication — the LH-Alzheimer's mechanistic link has rodent support and one underpowered RCT (Bowen 2015, n=109; primary endpoints NS) but lacks a definitive well-powered human RCT or Mendelian randomization data directly implicating LHB (as opposed to downstream sex steroids or FSH).

A 2024 review (Butler et al.) summarizes current evidence for endocrine dyscrasia in AD and places LH among several candidate axes with plausible but unconfirmed human roles [^butler2024]. A 2026 review (Galbraith et al.) situates gonadotropins including LH across the lifespan in the context of neurodevelopment and neurodegeneration [^galbraith2026].

| Dimension | Status | Notes |
|---|---|---|
| LHCGR expressed in human brain? | partial | Detected in limited post-mortem studies; quantification uncertain |
| LH promotes amyloid pathology? | partial (rodent) | App/PS1 + OVX model; not replicated in humans |
| LH suppression rescues cognition? | partial (rodent + 1 small human RCT) | Rodent: EGR1/cholinergic pathway in OVX-APP/PS1; Human: leuprolide RCT n=109, primary endpoints NS [Bowen 2015] |
| Mendelian randomization evidence? | not-tested | No published MR study instrumenting LHB for AD outcomes |

## Disease associations (germline)

- **Hypogonadotropic hypogonadism 23 (HH23)** — autosomal recessive; caused by loss-of-function variants in LHB (e.g., Q74R disrupts receptor binding); characterized by absent or incomplete sexual maturation, impaired fertility, and low gonadotropin levels [UniProt P01229].

## Clinical applications relevant to aging

### Fertility medicine

Recombinant LH (r-LH; lutropin alfa) or r-hCG (cross-reactive at LHCGR) is used in assisted reproduction to support follicular development when endogenous LH is insufficient. Also used in men with hypogonadotropic hypogonadism to restore testicular testosterone production and fertility (hCG is preferred due to longer half-life). Not relevant to the aging-endocrinology context beyond establishing the LHCGR pharmacology.

### GnRH agonist/antagonist therapy for prostate cancer

GnRH agonists (leuprolide, goserelin) and antagonists (degarelix, relugolix) suppress LH secretion, driving testosterone to castration levels, for androgen-sensitive prostate cancer. This is the major pharmacological application of LH-axis manipulation in aging men. GnRH antagonists avoid the initial LH flare seen with agonists and may have cardiovascular advantages under investigation [^blair2015]. Not a direct aging-biology intervention (the goal is testosterone suppression for cancer control, not HPG-axis restoration).

### Testosterone replacement therapy in male aging

Exogenous testosterone suppresses LH via negative feedback, eliminating endogenous Leydig cell stimulation and testicular testosterone production. Thus TRT lowers LH to near-zero; monitoring of LH during TRT serves mainly to confirm adequate exogenous testosterone is suppressing the axis (or to detect non-adherence).

## Druggability tier

**Tier 2 (aging context).** LHCGR is a tractable GPCR target — GnRH agonists and antagonists that suppress LH are clinical-stage drugs (FDA-approved for prostate cancer and endometriosis). However, in the aging-biology context the goal would be modulating the chronically elevated LH of post-reproductive life, a use case with no FDA-approved drug. The GnRH antagonist class (kisspeptin pathway modulators, NK3R antagonists) is in clinical investigation for menopausal vasomotor symptoms. No drug has a validated aging-rejuvenation or AD indication targeting LH as of 2026.

## Key interactors

- **LHCGR** — cognate receptor; shared with hCG; Gs-GPCR → cAMP → PKA → steroidogenesis cascade
- **CGA** (UniProt P01215) — shared alpha subunit, essential for heterodimer formation and receptor binding
- **[[fsh]]** (FSHB, UniProt P01225) — partner gonadotropin sharing CGA; FSH and LH are co-regulated by GnRH and co-secreted by the same gonadotrope cells; FSH acts on granulosa/Sertoli, LH on theca/Leydig

## Pathway membership

- [[gnrh-signaling]] — LH is the primary GnRH-regulated secretory product of pituitary gonadotropes
- [[hypothalamic-pituitary-gonadal-axis]] — LH is the key HPG axis effector linking pituitary to gonadal steroidogenesis

## Related entities

- [[fsh]] — partner gonadotropin; rises earlier and higher post-menopause; shared alpha subunit
- [[menopause]] — LH rises dramatically; chronically elevated LH is a staging biomarker
- [[granulosa-cells]] — FSH target cells; theca cells (not yet seeded) are the direct LH target in female follicle
- [[ovary]] — primary female target organ
- [[alzheimers-disease]] — contested non-gonadal LH target via LHCGR in hippocampus
- [[altered-intercellular-communication]] — LH elevation constitutes a systemic endocrine shift driving downstream tissue changes

## Gaps and limitations

#gap/needs-human-replication — LH-CNS/Alzheimer's hypothesis: rodent-mechanistic only; no human MR or RCT.

#gap/needs-replication — Whether elevated LH (independent of estrogen loss) drives extra-gonadal aging effects in humans requires mechanistic human studies.

#gap/needs-canonical-id — LHCGR (the receptor) does not yet have an atomic page; UniProt P22888 (LHCGR\_HUMAN) is the accession. Leydig cells page does not yet exist (referenced as [[leydig-cells]] but no file present). Andropause / male late-onset hypogonadism does not have a dedicated phenotype page.

## Footnotes

[^blair2015]: doi:10.1016/j.yhbeh.2015.06.020 · Blair JA et al. · *Hormones and Behavior* 2015 · review · n=N/A · summarizes evidence for LHCGR expression in rodent and human brain and experimental evidence for LH direct CNS action; 48 citations

[^casadesus2005]: doi:10.1007/s00018-004-4384-0 · Casadesus G, Atwood CS, Zhu X et al. (corresponding: Smith MA) · *Cell Mol Life Sci* 2005 · review · n=N/A · synthesizes epidemiological + cell-culture + mouse data proposing LH (not estrogen loss) as a key driver of AD amyloidogenesis via cell-cycle reentry; cites leuprolide acetate trial initiation (then in progress). **COI declared:** work funded by Voyager Pharmaceutical; Atwood, Perry, and Smith were consultants and shareholders of Voyager (the company developing leuprolide for AD).

[^zhang2024]: doi:10.1016/j.neurobiolaging.2023.12.007 · Zhang YN et al. · *Neurobiology of Aging* 2024 · in-vivo (mouse, OVX + APP/PS1 AD model; also human post-mortem) · LH suppression (not E2 supplementation) rescues OVX-associated cognitive impairment via EGR1/AChE pathway in dorsal hippocampus; human post-mortem AD brains show correlated LH-mRNA and hippocampal EGR1 elevation; n per group not stated in abstract; PMID 38185053

[^sims2023]: doi:10.1038/s41380-023-02209-6 · Sims S et al. · *Molecular Psychiatry* 2023 · 28(8):3324-3331 · in-vivo (mouse, genetic KO, 12-month-old) · Lhcgr−/− females show full rescue of age-related anxiety (dark-light box + fear conditioning) but no effect on recognition or spatial memory; phenotype absent in males and in 3-month-old mice; design: genetic KO, not pharmacological suppression; PMID 37563278

[^vermeulen1995]: doi:10.1159/000184233 · Vermeulen A, Kaufman JM · *Hormone Research* 1995 · review · n=N/A · classic review of HPG axis aging in men; 218 citations

[^beattie2015]: doi:10.1016/j.exger.2015.02.014 · Beattie MC et al. · *Experimental Gerontology* 2015 · review · n=N/A · Leydig cell aging mechanisms; StAR/mitochondrial dysfunction; 123 citations

[^papadopoulos2021]: doi:10.1016/bs.vh.2020.12.023 · Papadopoulos V et al. · *Vitamins and Hormones* 2021 · review · n=N/A · molecular mechanisms and therapeutic targets of Leydig cell aging; 20 citations

[^anawalt2022]: doi:10.1007/s11154-022-09765-2 · Anawalt BD, Matsumoto AM · *Reviews in Endocrine and Metabolic Disorders* 2022 · review · n=N/A · physiology and clinical implications of androgen decline with aging; 47 citations

[^butler2024]: doi:10.3233/JAD-240334 · Butler T et al. · *Journal of Alzheimer's Disease* 2024 · review · n=N/A · endocrine dyscrasia in AD etiology and therapy; LH among candidate axes

[^galbraith2026]: doi:10.59249/EVST3084 · Galbraith JA et al. · *Yale Journal of Biology and Medicine* 2026 · review · n=N/A · gonadotropins across the lifespan; neurodevelopment-neurodegeneration continuum
