---
type: protein
aliases: [SERPINE1, PAI-1, PAI1, plasminogen activator inhibitor 1, plasminogen activator inhibitor-1, serpin E1, endothelial plasminogen activator inhibitor]
uniprot: P05121
ncbi-gene: 5054
hgnc: 8583
ensembl: ENSG00000106366
genage-id: 301
pathways: ["[[tgf-beta]]", "[[p53-pathway]]", "[[insulin-igf1]]"]
hallmarks: ["[[cellular-senescence]]", "[[altered-intercellular-communication]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
is-noncoding-rna: false
mouse-ortholog: Serpine1
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: partial
caused-by: ["[[cellular-senescence]]", "[[tgf-beta]]", "[[p53-pathway]]", "[[insulin-igf1]]"]
causes: ["[[cellular-senescence]]", "[[cardiovascular-aging]]", "[[cardiac-fibrosis]]"]
key-domains: [serpin-domain, reactive-center-loop]
literature-checked-through: 2026-08-31
verified: true
verified-date: 2026-08-31
verified-by: claude
verified-scope: "Full-page primary-source verification; canonical identifiers, quantitative claims, registry status, conflicts, and supersession/retraction status checked. GTEx aging correlation remains unpopulated."
---

# PAI-1 (SERPINE1)

PAI-1 is a secreted serpin that restrains fibrinolysis by inhibiting tissue-type and urokinase-type plasminogen activators. In aging biology it is both a component of the [[sasp|senescence-associated secretory phenotype (SASP)]] and an experimentally supported effector downstream of p53. Rare-human genetics and 2025 vascular experiments support a **heterozygous-advantage / optimal-range model**: lifelong partial reduction is associated with favorable metabolic, vascular, and survival phenotypes, whereas complete deficiency causes bleeding and is associated with early cardiac fibrosis. PAI-1 is therefore a tractable but window-sensitive target, not a simple "lower is always better" biomarker.[^khan2017][^khan2021][^khoddam2025]

## Identity

- **Official gene:** *SERPINE1* (serpin family E member 1); chromosome 7q22.1[^canonical]
- **UniProt:** P05121 (PAI1_HUMAN; reviewed Swiss-Prot)[^canonical]
- **NCBI Gene / HGNC / Ensembl:** 5054 / HGNC:8583 / ENSG00000106366[^canonical]
- **GenAge:** HAGRID 301; the mouse GenAge ortholog is *Serpine1*[^canonical]
- **Mouse ortholog:** *Serpine1*[^canonical]
- **Protein:** 402-aa precursor, including an N-terminal secretion signal; mature extracellular PAI-1 is a member of the serpin family.[^canonical]

## Canonical function

PAI-1 rapidly inhibits tissue-type plasminogen activator (tPA/PLAT) and urokinase-type plasminogen activator (uPA/PLAU), reducing conversion of plasminogen to plasmin and thereby slowing fibrin-clot dissolution. It also binds vitronectin and participates in extracellular-matrix adhesion, migration, and remodeling independently of clot lysis.[^canonical]

This canonical function creates a physiological lower boundary. Complete PAI-1 deficiency produces excessive fibrinolysis and delayed bleeding after trauma, surgery, or childbirth; heterozygous carriers in the Amish founder kindred do not show the same bleeding phenotype.[^fay1997] The same proteolytic network intersects with tissue remodeling, so both PAI-1 excess and absence can be pathological in different tissues and contexts.[^khan2021][^khoddam2025]

## Regulation and cellular senescence

### p53→PAI-1 effector arm

In primary mouse embryo fibroblasts and primary human BJ fibroblasts, RNA-interference suppression of *SERPINE1* allowed cells to escape replicative senescence despite p53 pathway activation. Kortlever et al. therefore placed PAI-1 as a critical downstream p53 target required for replicative senescence in those fibroblast systems, rather than merely a passive marker.[^kortlever2006]

The evidence supports a cell-autonomous p53→PAI-1 senescence arm in the tested fibroblast systems and broader, context-dependent extracellular effects:

1. DNA damage and other stresses activate [[p53-pathway|p53]] and increase *SERPINE1* expression.
2. PAI-1 is required for stable arrest in those experiments and is also found in senescence-associated secretory profiles.
3. Effects on extracellular proteolysis, growth-factor availability, adhesion, and matrix remodeling are plausible tissue-level routes, but the cited experiments did not establish a single paracrine mechanism.[^kortlever2006][^khan2017]

The exact causal bridge is context-dependent. Proposed mechanisms include preservation of IGFBP3 through reduced proteolysis, altered [[insulin-igf1|IGF-1]] signaling, and signaling through vitronectin/LRP1-associated adhesion networks; none yet explains all senescence phenotypes across cell types. #gap/no-mechanism

### Marker versus mediator

PAI-1 is useful as a senescence-associated readout, but circulating PAI-1 is not specific for senescent cells because it also participates in hemostatic and metabolic physiology.[^canonical][^levine2021] Its value is strongest when combined with orthogonal senescence measures rather than interpreted as a stand-alone circulating SASP test.

## Human evidence

### Lifelong partial deficiency: the Berne Amish natural experiment

Khan et al. studied 177 adults from a related founder population, including 43 carriers of the *SERPINE1* c.699_700dupTA loss-of-function allele. Compared with noncarriers, heterozygotes had approximately 10% longer age-adjusted leukocyte telomere length (primary endpoint; P=0.007), 28% lower fasting insulin (P=0.035), and 0% versus 7% diabetes prevalence (P=0.001). In extended-pedigree survival analyses, null-allele carriers had median survival of 85 versus 75 years (P=0.037).[^khan2017]

These data are unusually informative human genetics, but they are not a randomized intervention. The variant is private to a related founder population; survival genotype was directly or obligately ascertained in only 56 of 221 relatives with known dates of birth and death; and linkage to another inherited factor cannot be completely excluded. The study supports a protective association of lifelong partial PAI-1 reduction, not a validated dose target for pharmacological inhibition. #gap/needs-replication

### The safety boundary: complete deficiency is different

The favorable heterozygous phenotype does **not** extrapolate to complete loss. In a detailed study of 17 young adults from three related families, cardiac magnetic resonance late gadolinium enhancement consistent with replacement fibrosis was present in 6 of 9 *SERPINE1*-null homozygotes versus 0 of 8 heterozygous/wild-type controls (P=0.001). In an extended-kindred echocardiographic analysis, global longitudinal strain did not differ between 36 heterozygotes and 119 wild-type participants, supporting recessive rather than heterozygous cardiac risk.[^khan2021]

The mechanistic iPSC-cardiomyocyte arm used cells from only one null participant and one control and is hypothesis-generating. Still, the human imaging phenotype aligns with age-dependent cardiac fibrosis in *Serpine1*-null mice and argues for an optimal PAI-1 range: excess favors thrombosis, senescence, metabolic dysfunction, and vascular stiffening; partial reduction may be protective; complete absence can impair hemostasis and cardiac homeostasis.[^khan2021][^khoddam2025]

## Vascular aging

Khoddam et al. extended the human natural experiment with 33 heterozygous adults and 33 age- and sex-matched noncarriers not included in the 2017 cohort. Pulse-wave velocity was lower in heterozygotes after adjustment for age and sex (adjusted difference −1.182 m/s; 95% CI −1.784 to −0.580; P=0.0002). The same paper engineered the human frameshift into mice: *Serpine1*^TA700/+ mice had about 50% lower circulating PAI-1, approximately 20% lower pulse-wave velocity at ≥600 days, and 17% longer overall survival than wild-type littermates.[^khoddam2025]

The causal perturbation series was internally coherent. Heterozygous mice were protected from l-NAME-induced increases in pulse-wave velocity, systolic blood pressure, and diastolic dysfunction; stabilized human PAI-1 overexpression worsened the corresponding measures; and oral TM5614 (20 mg/kg/day for 6 weeks after vascular pathology had been induced) restored pulse-wave velocity to baseline and lowered systolic and diastolic blood pressure. Aortic bulk and single-cell RNA sequencing nominated reduced *Ccn1*/*Itgb1* signaling and altered vascular smooth-muscle cell plasticity as candidate mediators, not established direct pathways.[^khoddam2025]

These experiments strengthen causality for vascular physiology, but l-NAME inhibition of nitric-oxide synthase is an induced hypertension/stiffness model rather than natural aging. The transcriptomic mechanism is exploratory, and the pharmacology has not yet been shown to reverse age-established human arterial stiffness. #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | PAI-1/tPA/uPA fibrinolysis and the c.699_700dupTA dosage effect are directly observed in humans |
| Phenotype conserved in humans? | partial | Heterozygotes show lower pulse-wave velocity; mouse lifespan and reversal data are not human-replicated |
| Replicated in humans? | partial | Two related-founder cohorts support partial deficiency; direct inhibitor geroscience efficacy remains unproven |

## Metabolic mechanisms

PAI-1 sits within a reciprocal metabolic loop: insulin, glucose, free fatty acids, obesity, and inflammatory signals can raise its expression, while genetic or pharmacological reduction alters hepatic lipid-regulatory transcription. In mice, TM5614 lowered hepatic *Pcsk9* expression, plasma PCSK9, and cholesterol; partial genetic deficiency produced a concordant pattern. In frozen plasma from the Amish kindred, 16 heterozygotes had lower PCSK9 than 17 noncarriers (P=0.02).[^levine2021]

This establishes a plausible PAI-1→[[pcsk9]] metabolic axis, but most mechanistic effect sizes come from mouse liver. The small human comparison measured circulating PCSK9 rather than hepatic flux or clinical cardiovascular outcomes, and lower HDL cholesterol accompanied lower LDL cholesterol in some mouse experiments. #gap/needs-human-replication #gap/no-mechanism

Independent population genetics provides supporting but bounded causal evidence. A Mendelian-randomization analysis estimated higher PAI-1 to increase coronary-heart-disease risk (OR 1.22 per unit higher log-transformed PAI-1; 95% CI 1.01–1.47) and fasting glucose, while the type 2 diabetes estimate was directionally consistent but not significant. The PAI-1 instruments explained only 0.9% of circulating variance, and the coronary-heart-disease direction lacked the multi-method sensitivity support used for BMI→PAI-1. The frontmatter is therefore `partial`: this is disease-trait MR, not validated causal evidence for aging or longevity.[^song2017]

## GrimAge connection

DNAm PAI-1 is one of seven DNA-methylation-based plasma-protein surrogates selected for the [[grimage-2019]] mortality clock. Lu et al. trained the protein surrogates in 2,356 Framingham participants and validated GrimAge using 7,375 methylation arrays from 6,935 people. Age-adjusted DNAm PAI-1 was associated with lifespan, comorbidity count, and type 2 diabetes.[^lu2019]

This is **not a plasma PAI-1 assay**. The 211-CpG DNAm PAI-1 estimator correlated only modestly with measured PAI-1 in the held-out Framingham test set (r=0.36), and its mortality signal may capture upstream metabolic, inflammatory, or cell-composition biology. GrimAge supports PAI-1-related prediction, not by itself target causality or a therapeutic threshold.[^lu2019]

## Druggability and therapeutic boundary

**Aging-context tier 1 rationale.** PAI-1 has direct, orally administered small-molecule inhibitors with human exposure, and TM5614 has reached an explicitly aging-focused clinical study. Tier 1 here denotes clinical tractability, not approved or established geroprotective efficacy.

- In a 75-participant randomized, double-blind phase II trial for mild-to-moderate COVID-19 pneumonia, TM5614 did not significantly improve the primary oxygenation endpoint (1.5 versus 4.0; P=0.22) or oxygen-duration endpoint (2.0 versus 3.5 days; P=0.34). No severe or serious adverse event was attributed to TM5614 during this short trial, which excluded patients with bleeding tendency. This is useful human exposure evidence but neither efficacy evidence for COVID-19 nor evidence of chronic geroscience safety.[^hirai2024]
- A Japanese single-arm, open-label study specifically evaluating anti-aging effects of TM5614 in adults aged 50–75 with stable cardiometabolic disease completed follow-up in 2026 with 20 enrolled and 19 in the full-analysis set. Five participants had adverse events; one liver-dysfunction event could not be excluded as drug-related. The registry-reported within-person biomarker changes cannot establish therapeutic benefit, direct regulation of individual immune/neurotrophic proteins, or epigenetic rejuvenation without a comparator and peer-reviewed analysis. No peer-reviewed geroscience efficacy publication was identified through 2026-08-31.[^jrct2026]
- Mouse vascular reversal, lipid-metabolism, and senescence experiments justify target engagement studies, but safe chronic inhibition must preserve enough PAI-1 for hemostasis and cardiac homeostasis.[^khoddam2025][^levine2021][^khan2021]

No PAI-1 inhibitor is approved as an anti-aging therapy. The key translational question is not whether PAI-1 can be inhibited, but whether partial, biomarker-guided inhibition can reproduce the heterozygous state without approaching the complete-deficiency boundary. #gap/dose-response-unclear #gap/long-term-unknown

## Pathway and network membership

- Fibrinolysis — direct inhibition of tPA and uPA; a dedicated pathway page has not yet been seeded
- [[p53-pathway]] and [[cellular-senescence]] — p53-responsive effector and SASP component
- [[tgf-beta]] and [[cardiac-fibrosis]] — context-dependent matrix-remodeling relationship; both excess and complete deficiency can be fibrotic in different settings
- [[insulin-igf1]] and [[deregulated-nutrient-sensing]] — reciprocal metabolic regulation and proposed IGFBP3/IGF-1 proteolytic link
- [[cardiovascular-aging]] — arterial stiffness, endothelial dysfunction, thrombosis, and diastolic physiology
- [[grimage-2019]] — DNAm surrogate included in the mortality-prediction composite

## Limitations and gaps

- **#gap/needs-replication** — The human longevity and partial-deficiency evidence comes from one related founder population; independent population or allelic-series replication is needed.
- **#gap/needs-human-replication** — Direct reversal of vascular aging and most lipid/senescence mechanisms remain mouse or cell-culture findings.
- **#gap/dose-response-unclear** — The safe chronic-inhibition window between heterozygous benefit and complete-deficiency bleeding/fibrosis is undefined.
- **#gap/long-term-unknown** — Long-duration PAI-1 inhibition has not established effects on clinical aging outcomes, cardiac fibrosis, or delayed bleeding.
- **#gap/no-mechanism** — CCN1/ITGB1, IGFBP3/IGF-1, extracellular proteolysis, and receptor-mediated signaling are candidate links; their relative importance is unresolved.
- **Biomarker specificity:** plasma PAI-1 and DNAm PAI-1 reflect overlapping but non-identical biology and should not be used interchangeably.
- **GTEx gap:** age-stratified human tissue expression was not extracted in this pass; `gtex-aging-correlation` remains null.

## Footnotes

[^canonical]: UniProtKB P05121 (PAI1_HUMAN), reviewed entry; NCBI Gene 5054; HGNC:8583; Ensembl ENSG00000106366; GenAge human HAGRID 301 · canonical-database records accessed 2026-08-31 · human protein identity, 402-aa precursor, secretion, serpin family, tPA/uPA inhibition, vitronectin interaction, and mouse ortholog cross-checked across UniProt/NCBI/GenAge

[^fay1997]: pmid:9207454 · Fay WP et al. · "Human plasminogen activator inhibitor-1 (PAI-1) deficiency: characterization of a large kindred with a null mutation in the PAI-1 gene" · *Blood* 1997;90:204–208 · observational pedigree study · model: Old Order Amish kindred · complete deficiency caused delayed bleeding; heterozygotes did not manifest abnormal bleeding

[^kortlever2006]: doi:10.1038/ncb1448 · Kortlever RM, Higgins PJ, Bernards R · *Nature Cell Biology* 2006;8:877–884 · in-vitro genetic perturbation · model: primary human BJ fibroblasts and primary mouse embryo fibroblasts · *SERPINE1* RNA interference enabled escape from replicative senescence and placed PAI-1 downstream of p53

[^khan2017]: doi:10.1126/sciadv.aao1617 · Khan SS, Shah SJ, Klyachko E et al. · *Science Advances* 2017;3:eaao1617 · n=177 enrolled (43 null-allele carriers; primary analyses focused on heterozygotes; 7 young homozygotes excluded) + extended pedigree n=221 with known lifespan, genotype directly/obligately assigned in n=56 · cross-sectional observational + pedigree survival analysis · P=0.007 leukocyte telomere length; P=0.035 fasting insulin; P=0.001 diabetes prevalence; P=0.037 survival · model: adult human founder kindred

[^khan2021]: doi:10.1001/jamacardio.2020.6909 · Khan SS, Shah SJ, Strande JL et al. · *JAMA Cardiology* 2021;6:841–846 · n=17 primary imaging cohort (9 homozygous null; 8 heterozygous/wild-type controls) + n=155 extended-kindred echocardiography · observational + hypothesis-generating iPSC-cardiomyocyte study · 6/9 versus 0/8 late gadolinium enhancement, P=0.001 · model: young adult human founder kindred; iPSC arm from one null and one control donor

[^khoddam2025]: doi:10.1172/JCI196714 · Khoddam A, Kalousdian A, Eren M et al. · *Journal of Clinical Investigation* 2025;135:e196714 · human n=33 heterozygotes + 33 age/sex-matched noncarriers; mouse survival n=24 wild-type + 45 heterozygotes; l-NAME genetic arm n=10 wild-type + 9 heterozygotes; TM5614 arm n=16 control + 19 treated · observational human physiology + CRISPR allelic series + in-vivo pharmacology + bulk/scRNA-seq · model: human founder kindred and C57BL/6J mice · 17% longer mouse overall survival; 20 mg/kg/day oral TM5614 for 6 weeks after 4-week l-NAME induction · conflict: Toshio Miyata disclosed founding/chairing Renascience; authors stated the company did not influence study design or interpretation

[^levine2021]: doi:10.1038/s41598-020-79948-x · Levine JA, Oleaga C, Eren M et al. · *Scientific Reports* 2021;11:430 · in-vivo pharmacology/genetics + human observational comparison · mouse groups generally n=6–7; human plasma n=16 heterozygotes + 17 controls · model: male C57BL/6J mice on chow or high-fat/high-sugar diet and adult human founder-kindred plasma · P=0.02 human PCSK9 comparison · conflicts: Levine/Miyata/Vaughan disclosed a provisional patent; Levine disclosed Eli Lilly employment/equity; Miyata disclosed Renascience employment

[^song2017]: doi:10.1161/JAHA.116.004918 · Song C, Burgess S, Eicher JD et al. · *Journal of the American Heart Association* 2017;6:e004918 · systematic meta-analysis + summary-statistic Mendelian randomization · OR 1.22 per unit higher log PAI-1 for coronary heart disease (95% CI 1.01–1.47) · model: human GWAS consortia · fasting-glucose effect supported; type 2 diabetes estimate not significant; instrument/pleiotropy limitations apply

[^lu2019]: doi:10.18632/aging.101684 · Lu AT, Quach A, Wilson JG et al. · *Aging* 2019;11:303–327 · observational longitudinal cohort-model development and validation · n=2,356 Framingham training/test; validation 7,375 arrays from 6,935 people across five cohorts · model: human whole-blood DNA methylation · DNAm PAI-1 used 211 CpGs and correlated r=0.36 with measured PAI-1 in held-out Framingham data · conflict: UC Regents held a provisional patent; Lu and Horvath were named inventors

[^hirai2024]: doi:10.1038/s41598-023-50445-1 · Hirai T, Asano K, Ito I et al. · *Scientific Reports* 2024;14:165 · phase II open-label n=26 + randomized double-blind placebo-controlled n=75 (39 TM5614, 36 placebo) · primary endpoint P=0.22; secondary oxygen-duration endpoint P=0.34 · model: Japanese adults with mild-to-moderate COVID-19 pneumonia · disease-specific efficacy was null; human exposure does not establish geroscience efficacy · conflict: Miyata disclosed Renascience stock

[^jrct2026]: [jRCTs021250011](https://jrct.mhlw.go.jp/en-latest-detail/jRCTs021250011) · "Clinical study to evaluate the anti-aging effects of a PAI-1 inhibitor (TM5614)" · n=20 enrolled; safety set n=20; full-analysis set n=19 · single-arm, open-label, uncontrolled interventional registry study; registry purpose listed as basic science · model: adults aged 50–75 with stable hypertension, type 2 diabetes, chronic kidney disease, or dyslipidemia · completed 2026; results posted 2026-07-31; no shared participant-level data; registry summary only, not peer-reviewed efficacy evidence
