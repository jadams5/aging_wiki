---
type: protein
aliases: [GLO1, lactoylglutathione lyase, methylglyoxalase, S-D-lactoylglutathione methylglyoxal-lyase, glyoxalase I, glyoxalase-1]
uniprot: Q04760
ncbi-gene: 2739
hgnc: HGNC:4323
ensembl: ENSG00000124767
mouse-ortholog: Glo1
pathways: ["[[advanced-glycation-end-products]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: partial
caused-by: []
causes: []
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Samanta 2024 (Brain 2025;148:262-275) verified against full PDF — quantitative MG accumulation figures, transgenic model details, LTP rescue data, and MWM results all confirmed; citation updated with correct volume/pages; Mendler 2015 author list corrected (Michael not Mendler L); Rabbani 2021 design confirmed as crossover RCT; specific doses (90+120 mg/day) not confirmed from abstract — flagged #gap/dose-response-unclear; Cely 2026 and Prevenzano 2022 remain abstract-only (#gap/no-fulltext-access); Thornalley 2003 confirmed closed-access (not_oa) — claims sourced from this review (intracellular MG ~1-5 µM, age-related GLO1 decline, Zn²⁺ mechanism) flagged #gap/no-fulltext-access; canonical-DB identity fields (UniProt Q04760 etc.) not independently re-verified. 2026-05-20 extension verified against full PDF: CORDIOPREV 2024 (doi:10.1186/s12933-024-02451-4) — critical correction: MG measured by competitive ELISA (OxiSelect Kit), NOT LC-MS/MS (seeder error from HTML extraction); baseline MedDiet MG corrected to 3.18±0.07 µg/mL (from imprecise '~3.18'); PBMC mRNA source confirmed; Bonferroni correction confirmed; non-worsening IMT subgroup n=408 (166 low-fat + 242 MedDiet) confirmed; GLO1-mRNA-vs-IMT correlation is post-hoc (confirmed from paper's limitations)."
---


# GLO1 (Glyoxalase-1)

Glyoxalase-1 is the first and rate-limiting enzyme of the **glyoxalase system** (GLO1 + GLO2 + glutathione) and the principal cellular detoxifier of [[methylglyoxal]] — the most reactive endogenous α-dicarbonyl and the dominant precursor to several major AGE species (MG-H1, CEL, MOLD, argpyrimidine). By converting methylglyoxal to S-D-lactoylglutathione before it can modify proteins, GLO1 constitutes **Tier 1** of the natural AGE-defense hierarchy — preventing AGE formation rather than reversing it. The system is conserved in all domains of life. Age-related decline in GLO1 activity is a proposed contributor to the rising AGE burden observed in aging tissues.

For the upstream context of AGE formation and its consequences, see [[advanced-glycation-end-products]]. For the Tier 2 (early-glycation reversal) enzymes, see [[fn3k]] and [[microbial-amadori-deglycation]].

## Identity

- **UniProt:** Q04760 (LGUL_HUMAN)
- **NCBI Gene:** 2739
- **HGNC:** HGNC:4323
- **Ensembl:** ENSG00000124767
- **ChEMBL Target:** CHEMBL2424 (human lactoylglutathione lyase)
- **Mouse ortholog:** Glo1 (one-to-one ortholog; ~86% protein sequence identity)
- **EC:** 4.4.1.5 (S-D-lactoylglutathione methylglyoxal-lyase)
- **Size:** 184 amino acids; active as a homodimer (~46 kDa total)

## Catalytic mechanism

GLO1 catalyzes the first step of the two-enzyme glyoxalase system:

**Step 1 (GLO1):** Methylglyoxal (MG) + reduced glutathione (GSH) spontaneously form a hemithioacetal. GLO1 isomerizes this hemithioacetal to **S-D-lactoylglutathione (SLG)** via a proton-transfer mechanism through an enediol intermediate. No net redox occurs; GLO1 is a lyase (isomerase). The reaction is essentially irreversible under physiological conditions.

**Step 2 (GLO2):** S-D-lactoylglutathione + H₂O → D-lactate + GSH. Catalyzed by glyoxalase-2 (GLO2/HAGH); regenerates free glutathione for another catalytic cycle.

**Net reaction:** Methylglyoxal → D-lactate (via GSH recycling). No cofactor consumed; no H₂O₂ released. This is metabolically clean relative to the FAOD/amadoriase family.

**Metal center:** Human GLO1 is a **Zn²⁺-dependent metalloenzyme** (Zn²⁺ at active site) [^thornalley2003]. Some bacterial GLO1 homologs use Ni²⁺ instead. The zinc is coordinated by His5, Glu172, His126, and Gln33 in human GLO1; mutations at these positions abolish activity.

**Turnover:** High catalytic efficiency; kcat/Km ~10⁶ M⁻¹s⁻¹ for methylglyoxal-hemithioacetal; intracellular MG is maintained at a steady-state of ~1–5 µM in mammalian cells under normoglycemic conditions largely due to GLO1 flux [^thornalley2003].

## Substrate scope

**Primary substrate:** methylglyoxal-hemithioacetal (the spontaneous adduct of methylglyoxal + GSH). High activity.

**Secondary substrates:** glyoxal-hemithioacetal, hydroxypyruvaldehyde-hemithioacetal, phenylglyoxal-hemithioacetal — all at lower rates than methylglyoxal [^thornalley2003].

**Non-substrates:** GLO1 does NOT act on mature AGEs (CML, CEL, MG-H1, glucosepane, pentosidine). Its activity is strictly at the pre-AGE reactive-dicarbonyl stage.

## Tissue distribution and aging

GLO1 is ubiquitously expressed across tissues. Expression is highest in tissues with high glycolytic flux (erythrocytes, liver, muscle, kidney) — consistent with the correlation between triose-phosphate fragmentation (the major MG source) and GLO1 demand.

**Age-related decline:** Thornalley and colleagues have documented that GLO1 activity decreases with age across multiple tissues and cell types [^thornalley2003] [^rabbani2016]. Mechanistically, this decline has been attributed to:
- Oxidative inactivation of the Zn²⁺ active site (cysteine-dependent redox regulation of GLO1 stability)
- Reduced Nrf2-driven transcriptional induction of *GLO1* in aging cells (the *GLO1* promoter contains ARE/ARE-like elements)
- Post-translational modifications (nitrosylation at Cys139) that impair activity

The net effect: as GLO1 activity declines with age, intracellular MG accumulation increases, raising formation rates of MG-H1, CEL, MOLD, and argpyrimidine. This creates positive feedback with oxidative stress: more MG-derived AGEs → more RAGE activation → more NF-κB → more ROS → more GLO1 inactivation.

## Model-organism evidence for longevity role

**C. elegans:** Mendler et al. 2015 demonstrated that *glod-4* (the C. elegans GLO1 ortholog) is **required for insulin-induced lifespan extension under high-glucose conditions** — GLO1 activity impaired by high glucose is restored by human insulin, and this rescue depends on *glod-4* [^mendler2015]. Note: the study found "no change in lifespan was observed following either suppression or overexpression of glyoxalase-1" alone, indicating GLO1 is necessary but not sufficient for lifespan effects — it functions within the daf-16/FOXO signaling context.

**Mouse (GLO1 knockdown / conditional KO):**
- Prevenzano et al. 2022 (*EMBO Reports*) showed that partial GLO1 knockdown in mice causes **age-dependent glucose intolerance and impaired insulin secretion** via methylglyoxal accumulation in pancreatic β-cells, with senescence markers (p21, p16) elevated; senolytic treatment (dasatinib + quercetin) rescued the β-cell phenotype [^prevenzano2022]. This is the first direct evidence linking GLO1 decline to age-related β-cell dysfunction in a mammalian model.
- Samanta et al. 2024 (*Brain* 2025;148:262–275) demonstrated that synaptic mitochondria are an early and major target of AGEs and MG in aging mouse brain (C57BL/6, 3–30 months, n=3–8/group) [^samanta2024]. MG in synaptic mitochondria was 6.2±0.11 nM at 6 months rising to 26.2±1.2 nM at 30 months (vs non-synaptic mitochondria <1 nM at 6 months; P<0.05 for synaptic vs non-synaptic difference from 6 months). At 20 and 30 months, MG-AGE levels in synaptic mitochondria (35.3±3.4 and 54.0±3.3 ng/mg protein) were significantly higher than non-synaptic (19.9±1.8 and 30.3±2.2; P<0.05). Transgenic mice overexpressing neuronal GLO1 (thy-1 promoter) showed 60–80% reduction in synaptic mitochondrial MG/AGE levels, restored COX I and COX IV activity, improved ATP production, and rescued AGE-impaired LTP in hippocampal CA1 neurons and mEPSC frequency in cultured hippocampal neurons. Synaptic mitochondria are particularly vulnerable to MG-derived glycation due to high energy demand and susceptibility to oxidative stress at synapses; GLO1 overexpression protects specifically this compartment and improves Morris water maze performance in AGE-diet-challenged mice.
- Cely et al. 2026 (*Physiol Genomics*) showed that partial Glo1 loss in mice causes age- and sex-dependent metabolic dysfunction (obesity, hyperglycemia) with altered transcription-factor networks (*Hnf4a*, *Arntl* as female-biased regulators); notably, "methylglyoxal-derived AGE accumulation was altered only in male skeletal muscle and did not explain broader phenotypes" — implying metabolic reprogramming by GLO1 loss extends beyond direct AGE chemistry [^cely2026].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — glyoxalase system is universal; Zn²⁺ mechanism conserved in human GLO1 |
| Phenotype (β-cell dysfunction, cognitive decline) conserved in humans? | partial — human T2D involves β-cell AGE accumulation; cognitive-aging link is mechanistically plausible but not established with GLO1-specific human genetics |
| Replicated in humans? | partial — CORDIOPREV 2024 (5-year RCT, n=809 CHD patients) demonstrated dietary GLO1 mRNA upregulation (PBMCs) and MG stabilization (ELISA); consistent with shorter-term Rabbani 2021 crossover RCT; however: single trial, CHD population only, GLO1 measured as PBMC mRNA not protein/activity, IMT subgroup analysis is post-hoc, aging endpoints not tested. "Partial" reflects human RCT existence (not merely preclinical), but falls short of "yes" given these limitations |

## GLO1 inducers and pharmacology

GLO1 is transcriptionally regulated by **Nrf2** (NFE2L2) via antioxidant response elements (AREs) in the *GLO1* promoter. Compounds that activate Nrf2 thus indirectly induce GLO1. Key pharmacological GLO1 inducers:

**Trans-resveratrol + hesperetin (combination):** Rabbani, Xue, Weickert, Thornalley et al. 2021 (*Nutrients*) showed in a randomized double-blind placebo-controlled crossover trial in overweight/obese human subjects that combination trans-resveratrol + hesperetin (tRES-HESP) induced GLO1 expression and reduced plasma MG, with Glo1 expression negatively correlated with post-treatment OGTT area-under-the-curve plasma glucose (r = −0.56, p < 0.05) [^rabbani2021]. tRES-HESP also decreased low-grade inflammation (CCL2, COX-2, IL-8, RAGE) and reversed insulin resistance; plasma MG correlated negatively with arterial dilatation (r = −0.48, p < 0.05). This is a first-in-human demonstration of pharmacological GLO1 induction in a metabolic disease context. #gap/dose-response-unclear — specific doses (previously cited as 90 mg/day tRES + 120 mg/day HESP) are not confirmed from abstract; require full-text verification.

**Hesperetin-glucuronide:** A metabolite of hesperetin (flavanone from citrus) is thought to be the active form at the cellular level; its glucuronide form achieves tissue distribution. Thornalley lab identified hesperetin-glucuronide as a specific Nrf2/GLO1 inducer in human vascular endothelial cells.

**CORDIOPREV 2024 — 5-year dietary RCT (whole Mediterranean diet):** Gutierrez-Mariscal et al. 2024 (*Cardiovascular Diabetology*; PMID 39402581) is the longest-duration human evidence for dietary GLO1 induction. This pre-specified sub-study of the CORDIOPREV parallel-arm RCT (n=809; CHD patients; 5 years; Mediterranean diet vs. low-fat control) found [^cordioprev2024glo1]:

- **Methylglyoxal (measured by competitive ELISA; OxiSelect Kit, Cell Biolabs; not LC-MS/MS):** Low-fat diet baseline 3.05 ± 0.08 µg/mL; significantly increased by Δ+0.44 ± 0.04 µg/mL over 5 years (p=0.029 within-arm). Mediterranean diet baseline 3.18 ± 0.07 µg/mL; maintained stable (Δ−0.03 ± 0.05; ns). Between-arm difference: p<0.001.
- ***GloxI* (GLO1 mRNA; non-worsening IMT subgroup):** Mediterranean diet increased GloxI expression (Δ+0.08 ± 0.07; p<0.05); low-fat diet decreased it (Δ−0.10 ± 0.07; p<0.05).
- ***AGER1* mRNA (non-worsening IMT subgroup):** Mediterranean diet increased (Δ+0.22 ± 0.04; p<0.05); low-fat diet decreased (Δ−0.19 ± 0.09; p<0.05).
- **sRAGE (non-worsening IMT subgroup):** Mediterranean diet increased sRAGE +187.3 ± 22 pg/mL (p=0.004); low-fat diet did not change sRAGE significantly.
- **Carotid IMT (non-worsening subgroup):** Mediterranean diet −0.101 ± 0.011 mm vs low-fat −0.056 ± 0.002 mm (p=0.009 between arms).

**Key distinction from Rabbani 2021:** CORDIOPREV uses a whole dietary pattern (olive oil enriched MedDiet) over 5 years vs. isolated trans-resveratrol + hesperetin over 8 weeks. CORDIOPREV establishes that the GLO1 induction signal is **durable over 5 years under real-world dietary conditions** — the most clinically translatable evidence context. Limitations: GLO1 measured as PBMC mRNA only (not protein or enzyme activity; source = peripheral blood mononuclear cells, qRT-PCR with primer qHsaCID0011227, housekeeping genes GAPDH/ACTB); MG measured by ELISA (protein-adducted form), not LC-MS/MS; CHD population (may not generalize to healthy aging); the non-worsening IMT subgroup (n=408: 166 low-fat + 242 MedDiet) is post-hoc stratification; Bonferroni correction applied for multiple comparisons.

[^cordioprev2024glo1]: [[studies/cordioprev-2024-meddiet-glo1]] · n=809 (432 MedDiet; 377 low-fat; from CORDIOPREV n=1002 CHD patients) · rct (parallel-arm; 5 yr) · model: established CHD patients (Córdoba, Spain) · MG by competitive ELISA (OxiSelect Kit); baseline 3.18±0.07 (MedDiet) vs 3.05±0.08 µg/mL (low-fat; ns); ΔMG −0.03 (MedDiet; ns) vs +0.44±0.04 µg/mL (low-fat; p=0.029); p<0.001 between arms · GloxI mRNA (PBMCs; qRT-PCR): Δ+0.08±0.07 AU (MedDiet) vs Δ−0.10±0.03 AU (low-fat; p<0.05 each; non-worsening IMT subgroup n=408) · AGER1 mRNA: Δ+0.22±0.04 vs Δ−0.19±0.09 (p<0.05 each) · sRAGE +187.3±22 pg/mL MedDiet (p=0.004) · IMT-CC −0.101±0.011 mm (MedDiet) vs −0.056±0.002 mm (low-fat; p=0.009) · full PDF verified 2026-05-20 (doi:10.1186/s12933-024-02451-4)

**Broader GLO1-inducing agents** (preclinical or mechanistic evidence only, not clinical GLO1-specific trials as of 2026):
- Sulforaphane (from broccoli) — activates Nrf2 broadly
- Carnosine (β-Ala-His dipeptide) — acts as an MG scavenger AND may upregulate GLO1 (see [[methylglyoxal]])
- Benfotiamine — activates transketolase (reduces triose-phosphate buildup, reducing MG formation rate, indirectly reducing GLO1 load)
- Various dietary polyphenols via Nrf2/ARE

**druggability-tier: 2 rationale:** No FDA-approved drug targets GLO1 specifically for an aging indication. The trans-resveratrol/hesperetin combination is the best-developed pharmacological approach with human RCT evidence for GLO1 induction, but aging endpoints have not been tested. Small-molecule direct GLO1 activators (not Nrf2-mediated) have been explored as research probes [^rabbani2016]. Rated tier 2 (high-quality probe-stage + Nrf2 indirect inducers in clinical trials; no aging-indication drug).

## Cross-species variation

Long-lived species comparisons: whether GLO1 activity or expression is elevated in naked mole rat, bowhead whale, Greenland shark, or other long-lived species relative to short-lived comparators has been proposed but systematic comparative data are sparse. This would be an important test of whether GLO1 activity is an evolutionary determinant of the rate of AGE accumulation and aging pace. #gap/needs-replication

## Genetic variation and disease

**Copy-number variation:** GLO1 copy-number variations (duplications) have been associated with anxiety and behavioral phenotypes in mouse models (Bhatt lab studies); a human CNV at 6p21.3 (the *GLO1* locus) has been reported to associate with behavioral traits. These associations are not directly relevant to aging but establish GLO1 as a target where natural genetic variation matters.

**A111E variant:** A missense variant (Ala111Glu) has reduced catalytic activity relative to wild-type; population frequency varies by ancestry. Whether carriers show elevated tissue MG or faster AGE accumulation has not been studied.

**mr-causal-evidence: partial** — GWAS hits exist for glycemic traits at the *GLO1* locus (chr 6p21.3); however, no published MR study has specifically tested GLO1 expression or activity as a causal mediator of an aging outcome. The partial designation reflects "instrument available but not yet leveraged for MR."

## Limitations and gaps

- GLO1 is strictly a **pre-AGE enzyme** (Tier 1) — it prevents formation of MG-derived AGEs but has no activity against any established AGE modification or crosslink. #gap/no-mechanism for mature AGE clearance.
- The decline of GLO1 with aging is documented but the quantitative relationship between GLO1 activity, tissue MG levels, and tissue AGE burden in normoglycemic aging humans has not been established as a dose-response. #gap/needs-human-replication.
- Cross-species GLO1 activity comparisons in long-lived species are absent. #gap/needs-replication.
- Pharmacological GLO1 induction via Nrf2 activators has human evidence for GLO1 gene induction in short-term trials, but effects on tissue AGE accumulation or aging endpoints have not been tested. #gap/long-term-unknown.
- The Samanta 2024 brain finding (synaptic mitochondria GLO1 overexpression improves cognition in aging mice) needs replication and mechanistic validation in primate or human models. #gap/needs-human-replication.

## See also

- [[methylglyoxal]] — substrate and AGE precursor; Tier 1 defense target
- [[fn3k]] — Tier 2 deglycation (Amadori products)
- [[microbial-amadori-deglycation]] — fungal/bacterial Amadori-product oxidases
- [[advanced-glycation-end-products]] — upstream process biology; three-tier defense framework
- [[carboxymethyl-lysine]] — CML; downstream AGE of the glyoxal pathway
- [[glucosepane]] — dominant mature ECM crosslink; beyond GLO1's reach
- [[age-crosslink-breakers]] — intervention class
- [[chronic-inflammation]] — downstream hallmark activated by AGE-RAGE signaling

## Footnotes

[^thornalley2003]: doi:10.1042/bst0311343 · Thornalley PJ · *Biochem Soc Trans* 2003;31(Pt 6):1343–8 · PMID:14641060 · review · documents GLO1 structure, Zn²⁺ mechanism, substrate scope, and age/oxidative-stress-related decline in GLO1 activity; characterizes decreased GLO1 in aging and disease contexts · archive: closed-access (not_oa) · #gap/no-fulltext-access

[^rabbani2016]: doi:10.1007/s10719-016-9705-z · Rabbani N, Xue M, Thornalley PJ · *Glycoconj J* 2016;33(4):513–25 · PMID:27406712 · review · documents dicarbonyl stress mechanisms, GLO1 decline in aging and disease, and clinical therapeutic development of GLO1 inducers · archive: OA hybrid; download pending

[^mendler2015]: doi:10.1007/s00125-014-3415-5 · Mendler M, Schlotterer A, Ibrahim Y, Kukudov G, Fleming T, Bierhaus A, Riedinger C, Schwenger V, Herzig S, Hecker M, Tyedmers J, Nawroth PP, Morcos M · *Diabetologia* 2015;58(2):393–401 · PMID:25322843 · in-vivo · model: *C. elegans* high-glucose lifespan assay · *glod-4* (GLO1 ortholog) required for insulin-induced lifespan extension under high glucose; "no change in lifespan was observed following either suppression or overexpression of glyoxalase-1" alone; GLO1/glod-4 functions within daf-16/insulin context · archive: status pending

[^prevenzano2022]: doi:10.15252/embr.202152990 · Prevenzano I, Leone A, Longo M, et al. · *EMBO Rep* 2022;23(10):e52990 · PMID:35620868 · in-vivo · model: GLO1 partial knockdown mice (aging phenotype) · age-dependent glucose intolerance and impaired insulin secretion; elevated β-cell senescence markers (p21, p16); senolytic treatment (D+Q) rescued β-cell dysfunction · archive: OA bronze; download pending #gap/no-fulltext-access

[^samanta2024]: doi:10.1093/brain/awae229 · Samanta S, Akhter F, Xue R, Sosunov AA, Wu L, Chen D, Arancio O, Yan SF, Yan SS · *Brain* 2025;148:262–275 · PMID:39001866 · in-vivo + ex-vivo + in-vitro · model: aging C57BL/6 mice (3–30 months; n=3–8/group); GLO1-Tg mice (thy-1 promoter); primary hippocampal neurons + hippocampal slices · synaptic mitochondrial MG rose from 6.2±0.11 nM (6 mo) to 26.2±1.2 nM (30 mo) vs <1 nM non-synaptic (P<0.05 from 6 mo); MG-AGEs at 30 mo: 54.0±3.3 vs 30.3±2.2 ng/mg protein synaptic vs non-synaptic; GLO1-Tg reduced synaptic mitochondrial MG/AGEs 60–80% vs non-Tg AGE-diet mice; restored COX I/IV activity and ATP; rescued AGE-impaired LTP (fEPSP slope; P<0.001; n=10–15 slices/group) and mEPSC frequency; improved Morris water maze performance · Samanta and Akhter contributed equally · archive: PDF locally available at  (verified 2026-05-20)

[^rabbani2021]: doi:10.3390/nu13072374 · Rabbani N, Xue M, Weickert MO, Thornalley PJ · *Nutrients* 2021;13(7):2374 · PMID:34371884 · rct (randomized, double-blind, placebo-controlled, crossover) · model: overweight/obese human subjects · tRES-HESP combination induces GLO1 expression; Glo1 expression negatively correlated with OGTT glucose AUC (r = −0.56, p < 0.05); plasma MG negatively correlated with endothelial-independent arterial dilatation (r = −0.48, p < 0.05); reduced CCL2/COX-2/IL-8/RAGE; reversed insulin resistance · specific doses (90 mg/day tRES + 120 mg/day HESP) not confirmed from abstract — require full-text · archive: status pending

[^cely2026]: doi:10.1152/physiolgenomics.00106.2025 · Cely I, Blencowe M, Shu L, et al. · *Physiol Genomics* 2026 · PMID:41543389 · in-vivo · model: partial GLO1-loss mice (aging study) · age- and sex-dependent metabolic dysfunction (obesity, hyperglycemia); Hnf4a + Arntl identified as female-biased transcriptional regulators; MG-derived AGE accumulation altered only in male skeletal muscle, not explaining broader phenotypes — metabolic reprogramming extends beyond direct AGE chemistry · archive: status pending #gap/no-fulltext-access
