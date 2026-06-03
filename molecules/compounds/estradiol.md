---
type: compound
aliases: [17-beta-estradiol, E2, oestradiol, 17β-estradiol]
pubchem-cid: 5757
pubchem-cid-alt: null
chembl-id: CHEMBL135
drugbank-id: DB00783
cas-number: 50-28-2
administration-route: multi-route
biologic: false
molecular-formula: C18H24O2
molecular-weight-da: 272.4
mechanisms: [estrogen-receptor-agonist, collagen-synthesis-stimulation, nitric-oxide-signaling, anti-inflammatory]
targets: ["[[esr1]]", "[[esr2]]", "[[gper]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[deregulated-nutrient-sensing]]", "[[loss-of-proteostasis]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Phase 3 RCT of transdermal 17β-estradiol initiated within 3 years of menopause vs. placebo, powered on 10-year MACE and cognitive decline composite, to definitively confirm the timing-hypothesis benefit window and separate E2 from conjugated equine estrogen class effects."
clinical-trials-active: 8
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Primary-source claims verified against Khosla 2012 (PMC3424385 HTML), Campos 2024 (PubMed abstract), Chlebowski 2023 (PubMed abstract), Melville 2025 (PubMed abstract), He 2026 (PubMed abstract + Crossref). Canonical DB IDs confirmed via PubChem REST and ChEMBL API. DrugBank DB00783 and CAS 50-28-2 not independently re-queried — recommend cross-check on next lint pass. HR ~1.26 for CEE+MPA not independently traceable to Chlebowski 2023 text (review paper cites WHI primary reports; original Rossouw/Chlebowski 2002-2003 JAMA papers not read end-to-end)."
---

# Estradiol (17β-estradiol, E2)

17β-Estradiol is the principal endogenous estrogen and the most potent naturally occurring estrogen in humans. It is produced primarily by granulosa cells of the ovarian follicle in premenopausal women and, after menopause, by peripheral aromatization of androgens in adipose tissue. As a pharmaceutical, E2 is the active estrogen in systemic [[hormone-replacement-therapy]] and in [[topical-estrogens]], available in oral, transdermal, vaginal, and injectable forms. Its decline at [[menopause]] is a central hormonal driver of female aging — responsible for bone loss, cardiovascular risk shift, skin collagen decline, and probable contributions to cognitive vulnerability.

The two other major endogenous estrogens — estrone (E1; PubChem CID 5870) and estriol (E3; PubChem CID 5756) — are distinct compounds with their own CIDs and lower receptor binding affinity; this page covers E2 specifically.

## Identity

- **PubChem CID:** 5757
- **ChEMBL ID:** CHEMBL135
- **DrugBank ID:** DB00783
- **CAS:** 50-28-2
- **InChIKey:** VOXZDWNPVJITMN-ZBRFXRBCSA-N
- **Molecular formula:** C₁₈H₂₄O₂ (MW 272.4 Da)
- **Class:** C18 steroid hormone; estrane skeleton; 3,17-diol

## Biosynthesis

### Premenopausal — two-cell/two-gonadotropin model

Ovarian E2 production requires the coordinated activity of two adjacent cell types in the Graafian follicle [^bulun2022]:

1. **Theca cells** (LH-driven): convert cholesterol → pregnenolone → androstenedione and testosterone via the CYP11A1 → CYP17A1 cascade.
2. **Granulosa cells** (FSH-driven): aromatase ([[cyp19a1]] / CYP19A1) converts androstenedione → estrone and testosterone → 17β-estradiol.

17β-Hydroxysteroid dehydrogenase type 1 (HSD17B1) in granulosa cells then reduces estrone → estradiol (higher-potency final product). Serum E2 in a reproductive-age woman varies from ~40 pg/mL (follicular phase) to >200 pg/mL (preovulatory LH surge).

### Postmenopausal — peripheral aromatization

After ovarian follicle depletion at menopause, circulating E2 falls to <20 pg/mL. Residual estrogen derives from peripheral aromatization of adrenal androstenedione in adipose tissue, liver, skin, and muscle — all expressing CYP19A1 at lower levels than granulosa cells [^bulun2022]. This explains why adiposity is modestly protective against postmenopausal bone loss (more aromatization substrate) but simultaneously elevates ER+ breast cancer risk.

## Mechanism of action

### Genomic (nuclear receptor) pathway

E2 diffuses across the plasma membrane and binds nuclear estrogen receptors [[esr1]] (ERα, encoded by *ESR1*) and [[esr2]] (ERβ, encoded by *ESR2*). Ligand binding causes receptor homodimerization (or ERα:ERβ heterodimers), conformational change exposing the activation function-2 (AF-2) surface, and translocation of the complex to estrogen response elements (EREs; consensus GGTCAnnnTGACC) in gene promoters. Coactivator complexes (SRC-1/NCOA1, SRC-3/NCOA3, CBP/p300) are recruited, driving target-gene transcription [^bulun2022].

**Tissue-selective effects via ERα vs ERβ distribution:**
- **Bone:** ERα dominant in both osteoblasts and osteoclasts. E2 via ERα restrains osteoclastogenesis (osteoclast-specific ERα deletion increases osteoclast lifespan and reduces trabecular bone mass) and promotes osteoblast survival [^khosla2012].
- **Uterus/breast:** ERα dominant → proliferative signalling (relevant to cancer risk).
- **Vasculature:** both receptors expressed in endothelial and smooth-muscle cells.
- **Brain:** both receptors in hippocampus, hypothalamus, frontal cortex — ERβ relatively enriched.

SERMs (selective estrogen receptor modulators — tamoxifen, raloxifene) exploit tissue-specific cofactor context to produce agonist effects in some tissues and antagonist effects in others.

### Non-genomic pathway

Rapid (seconds-to-minutes) estradiol signalling operates through membrane-associated [[gper]] (GPER/GPR30), a G-protein-coupled receptor, and through membrane-localised pools of ERα:

- GPER activation → cAMP, PI3K-AKT, ERK1/2 → rapid ion channel regulation, endothelial NO synthase (eNOS) activation, and calcium signalling [^levin2015].
- These non-genomic effects underlie rapid vasodilation, rapid neuroprotective responses, and mitochondrial membrane-potential stabilization.

## Aging-relevant physiology

### Bone: RANKL/OPG balance and osteoclast lifespan

Estradiol restrains bone resorption through two complementary mechanisms [^khosla2012]:
1. **RANKL/OPG ratio:** E2 suppresses RANKL expression by osteoblastic cells, T-cells, and B-cells while upregulating OPG (osteoprotegerin, the RANKL decoy receptor), reducing osteoclast differentiation from precursors.
2. **Osteoclast apoptosis:** E2 promotes apoptosis of mature osteoclasts via ERα-mediated signalling (osteoclast-specific ERα deletion studies show increased osteoclast lifespan and reduced trabecular bone mass); FasL induction in osteoclasts is one documented mechanism (Nakamura et al., *Cell* 2007, cited within Khosla 2012), limiting their resorptive lifespan.

Menopause removes this restraint: urinary bone-resorption markers rise within months; cortical bone loss accelerates to ~3% per year in the first post-menopausal decade. This is the dominant mechanism of postmenopausal [[osteoporosis]]. #gap/needs-human-replication applies to specific molecular pathway data — the clinical bone-loss phenotype is well established.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (bone loss at menopause) replicated in humans? | yes — definitively |
| Reversed by E2 replacement? | yes — HRT prevents bone loss (WHI confirmed) |

### Cardiovascular: endothelial protection and the timing hypothesis

In young women, estradiol has several cardioprotective effects [^mendelsohn2005]:
- **Endothelial NO:** eNOS activation via GPER and non-genomic ERα → vasodilation, anti-platelet effects.
- **Lipid profile:** raises HDL-C, lowers LDL-C and lipoprotein(a) (most pronounced with oral route via hepatic first pass).
- **Anti-inflammatory:** suppresses NF-κB and reduces circulating CRP and IL-6 in healthy endothelium.

The **timing hypothesis** (critical): early observational data showing lower MI rates in hormone-therapy users prompted the Women's Health Initiative (WHI) RCT. WHI enrolled women >60 years (average 63, ~10 years post-menopause); the oral CEE+MPA arm showed a modest increase in coronary events. Subsequent re-analysis found the excess risk confined to women who initiated >10 years post-menopause with established subclinical atherosclerosis — early initiators (within ~5–10 years of menopause, <60 years) showed a neutral-to-protective trend [^lambrinoudaki2026]. Meta-analyses of hormone-therapy effects on blood pressure show that transdermal and oral estradiol (with or without progestogen) are blood-pressure-neutral, whereas oral conjugated equine estrogens plus progestogen increased systolic blood pressure (SMD = 0.60 mmHg, 95% CI 0.19–1.01) and hypertension risk [^campos2024]. The key distinction is therefore the **type of estrogen** (conjugated equine vs. bioidentical estradiol) as well as the route, with hepatic first-pass synthesis of angiotensinogen contributing to the pressor effect of oral CEE.

**Current consensus (2026):** Transdermal 17β-estradiol initiated within 5–10 years of menopause (the "window of opportunity") is the approach most likely to replicate the cardiovascular benefits seen in observational studies. Later initiation in women with pre-existing vascular disease carries excess risk. This remains an area of active clinical investigation. See [[cardiovascular-aging]].

### Skin and collagen

Dermal fibroblasts express ERα and ERβ. Estradiol binding drives ERE-mediated transcription of:
- **COL1A1, COL3A1** (type I and III collagen): the structural scaffolding proteins whose loss underlies post-menopausal skin thinning.
- **Hyaluronan synthases (HAS1, HAS2):** maintain dermal hydration and viscoelasticity.
- **TIMP-1:** tissue inhibitor of MMP-1, suppressing collagen degradation.

Post-menopausal women lose approximately 2% of skin collagen per year in the first decade after menopause [^brincat2005]. Estrogen also modulates TGF-β signalling: in the context of skin fibrosis, estrogens counteract TGF-β profibrotic activity [^avouac2020]. See [[skin-aging]] and [[topical-estrogens]] for topical application context.

### Brain: neuroprotection and the critical-window hypothesis

Estradiol exerts neuroprotective effects in several domains [^marchant2022]:
- **Mitochondrial support:** ERβ in neuronal mitochondria regulates ATP synthesis and reduces ROS production.
- **Synaptic plasticity:** ERα/ERβ signalling regulates dendritic spine density in hippocampus; E2 upregulates BDNF.
- **Anti-neuroinflammatory:** suppresses microglial NF-κB and NLRP3 activation.
- **Amyloid:** E2 reduces amyloid precursor protein processing and promotes Aβ clearance in preclinical models.

The **critical window hypothesis in the brain** parallels the cardiovascular timing hypothesis: estrogen initiating within years of menopause may preserve cognitive function; late initiation in an already-deprived brain may have neutral or adverse effects [^marchant2022]. A 2026 systematic review of 24 structural MRI studies found that negative structural outcomes (e.g., reduced hippocampal volume) were consistently confined to studies where MHT was initiated long after menopause or administered as oral CEE; studies accounting for initiation timing or examining transdermal estradiol showed predominantly neutral or regionally specific positive outcomes [^he2026]. A 2025 Lancet Healthy Longevity meta-analysis (Melville et al.; n=1,016,055 across 10 studies) found no significant overall association between MHT use and risk of mild cognitive impairment or dementia; subgroup analyses by timing, duration, and formulation also showed no significant effects, underscoring the high uncertainty and heterogeneity in this literature [^melville2025].

**Discordance with older literature:** Several observational cohort studies (before WHI) reported lower Alzheimer's disease rates in HRT users. The WHI Memory Study (initiated late after menopause, older population) reported increased dementia risk. The timing-window hypothesis proposes these findings are consistent (not contradictory), but Melville 2025's meta-analytic subgroup analysis by timing showed no significant effects in either direction — the high heterogeneity and methodological limitations of the available studies preclude firm conclusions. The wiki documents both bodies of evidence; neither is silently privileged. See [[alzheimers-disease]]. `#gap/contradictory-evidence`

### Metabolic effects

E2 promotes insulin sensitivity (partially via ERα in liver and skeletal muscle, enhancing GLUT4 translocation and adiponectin signalling). Post-menopausal women show increased visceral fat deposition and worsened insulin resistance partly attributable to E2 loss. Adipose distribution shifts from gynoid (gluteofemoral) to android (visceral) at menopause, increasing cardiometabolic risk independently of weight gain [^bulun2022].

## Estradiol decline as a node of female aging

The menopausal E2 withdrawal is unusual among aging-related hormonal changes in that it is rapid (~2–3 year transition), nearly complete (>90% reduction in serum E2), and causally drives multiple concurrent aging phenotypes in bone, cardiovascular system, skin, and brain. This positions declining E2 as a central orchestrator of **accelerated female aging** — not merely a correlate. The physiological systems it had modulated reveal their dependence simultaneously, producing the clustered multi-system vulnerability that characterizes the early post-menopausal period.

E2 decline is best mapped to the [[altered-intercellular-communication]] hallmark: estradiol is a systemic endocrine signal whose withdrawal disrupts tissue-cell paracrine interactions, stem cell niche maintenance (e.g., satellite-cell regulation in muscle), and neuroendocrine feedback loops.

## Clinical use

### Forms and routes

| Route | Form | First-pass | Notes |
|---|---|---|---|
| Oral | Estradiol valerate, micronized E2 | Yes — significant hepatic conversion to estrone | Elevates SHBG, angiotensinogen; higher thrombosis risk |
| Transdermal | Patch, gel, spray (0.025–0.1 mg/day) | Minimal | Preferred for CV-neutral effects; avoids hepatic first-pass |
| Vaginal | Cream, ring, tablet (low-dose local) | Very low systemic absorption | Indicated for genitourinary syndrome; systemic effects minimal |
| Injectable | Cypionate, valerate ester (IM/SQ) | None | Used when adherence to daily/weekly dosing is problematic |

**Bioidentical vs conjugated equine estrogens (CEE):** Bioidentical 17β-estradiol has the same molecular structure as endogenous E2. CEE (Premarin) is a mixture of equine estrogens including equilin and equilenin, which differ from E2 in structure, receptor affinity, and metabolic profile. Most mechanistic estrogen research uses E2 specifically; extrapolating WHI CEE findings directly to transdermal bioidentical E2 should be done with caution.

### Progestogen co-administration

Women with an intact uterus require a progestogen alongside estrogen to prevent endometrial hyperplasia. The choice of progestogen matters: micronized [[progesterone]] (bioidentical) appears to carry lower VTE and breast cancer risk than synthetic progestins (medroxyprogesterone acetate, norethisterone) in observational data, though head-to-head RCT data are limited.

## Cancer risk duality (antagonistic-pleiotropy framing)

Estradiol's proliferative signalling in estrogen-receptor-positive (ER+) tissues is the primary driver of ER+ breast cancer risk. Lifetime estrogen exposure (early menarche, late menopause, nulliparity) is a well-established epidemiological risk factor. The WHI CEE+MPA arm showed a modest increase in ER+ breast cancer (HR ~1.26 after >5 years). The CEE-alone arm (women post-hysterectomy) showed a *decrease* in breast cancer risk — highlighting that the progestogen component, not estrogen alone, drove much of the WHI breast cancer signal [^chlebowski2023].

For postmenopausal women, the breast cancer risk/benefit balance is:
- **Short-term (<5 years):** risk increase modest; broadly outweighed by symptom relief, bone benefit, and cardiovascular benefit when initiated early.
- **Long-term (>5–10 years):** increased ER+ breast cancer risk accumulates; more individualized discussion required.

The framing for this wiki: E2's proliferative action in reproductive-age tissues is a cost of its systemic protective effects — a textbook **antagonistic-pleiotropy** pattern. Declining E2 with age eliminates this cancer risk while simultaneously withdrawing protective effects in bone, vasculature, skin, and brain. #gap/contradictory-evidence — the net benefit vs. harm of long-term HRT in healthy postmenopausal women requires individualized assessment; population-level summary statistics obscure subgroup heterogeneity by age at initiation, route, progestogen type, and BRCA status.

## Pharmacokinetics

- **Oral estradiol:** extensive first-pass metabolism; bioavailability ~5%; peak plasma E2 within 4–6 h; t₁/₂ ~12–17 h. Most circulating estrogen is estrone (E1) and E1-sulfate after oral dosing.
- **Transdermal estradiol:** bypasses hepatic first pass; delivers physiological E2:E1 ratio (~1:1); steady-state plasma E2 achieved within 24 h of patch application; dose-linear across 0.025–0.1 mg/day range.
- **Metabolism:** hepatic CYP3A4/CYP1A2 hydroxylation to catechol estrogens (2-OHE2, 4-OHE2), then O-methylation via COMT; sulfation (SULT1E1) and glucuronidation for renal/biliary excretion; enterohepatic recirculation contributes to prolonged exposure.

## Effects on aging hallmarks

| Hallmark | Effect | Direction | Evidence |
|---|---|---|---|
| [[altered-intercellular-communication]] | Estradiol is a systemic endocrine signal; its loss disrupts tissue-cell crosstalk in bone, vascular, neural, and muscle niches | Withdrawal = harmful | [^khosla2012] [^bulun2022] |
| [[deregulated-nutrient-sensing]] | E2 enhances insulin sensitivity via ERα in liver/muscle; loss → visceral adiposity, insulin resistance | Withdrawal = harmful | [^bulun2022] |
| [[loss-of-proteostasis]] | ERE-driven COL1A1/COL3A1 expression in dermal fibroblasts maintains collagen matrix; withdrawal → collagen loss | Withdrawal = harmful | [^brincat2005] |
| [[cardiovascular-aging]] | Endothelial NO, lipid benefits, anti-inflammatory; timing-dependent (see body) | Protective in window | [^mendelsohn2005] [^campos2024] |
| [[osteoporosis]] | RANKL/OPG balance, osteoclast apoptosis | Protective | [^khosla2012] |
| [[alzheimers-disease]] | Neuroprotection, critical-window dependent; late initiation may not benefit | Uncertain overall | [^melville2025] [^he2026] |

## Limitations and gaps

- **Timing-hypothesis RCT gap:** No large RCT has enrolled women within 1–3 years of menopause and followed them 10+ years for hard cardiovascular or cognitive endpoints using transdermal bioidentical E2. The timing hypothesis is supported by mechanistic and re-analysis data, not a primary-endpoint RCT. `#gap/needs-human-replication`
- **Route-selectivity:** Most RCT data (WHI) used oral CEE, not transdermal E2. Extrapolating WHI benefit/risk data to transdermal bioidentical E2 requires caution. `#gap/needs-replication`
- **Progestogen interaction:** MHT is rarely estrogen-only (except post-hysterectomy); the progestogen choice meaningfully modifies outcomes, making "estradiol effects" difficult to isolate in clinical evidence.
- **Breast cancer risk accumulation:** Long-term (>10 year) HRT carries meaningful ER+ breast cancer risk that must be individualized. `#gap/long-term-unknown`
- **Male physiology:** Estradiol is relevant in men (bone maintenance, libido, adiposity) but this page focuses on the female aging context where the effects are dominant. Male E2 biology would extend the page substantially and is deferred. `#gap/unsourced`
- **GPER-specific biology:** Non-genomic GPER signalling is incompletely characterized; its relative contribution to E2's cardio- and neuroprotective effects vs. nuclear receptor signalling is not fully resolved.

## Footnotes

[^bulun2022]: Bulun SE, Yilmaz BD, Sison C, Miyazaki K, Bernardi L, Liu S, Kohlmeier A, Lin Z, Yin P, Milad M, Wei JJ · "Endometriosis" and "Ovarian Steroidogenesis" chapters · *Endocr Rev* 2019;40(4):1048–1079 + additional endocrine physiology sources · review · model: human endocrine physiology

[^khosla2012]: Khosla S, Oursler MJ, Monroe DG · "Estrogen and the skeleton" · *Trends Endocrinol Metab* 2012;23(11):576–581 · doi:10.1016/j.tem.2012.03.008 · review · n=mechanistic summary · model: human + mouse

[^mendelsohn2005]: Mendelsohn ME, Karas RH · "Molecular and Cellular Basis of Cardiovascular Gender Differences" · *Science* 2005;308(5728):1583–1587 · doi:10.1126/science.1112062 · review · model: human + mouse endothelial cell

[^marchant2022]: Marchant I, Stojanova J, Acevedo L, Olivero P · "Estrogen rapid effects: window of opportunity for aging brain" · *Neural Regen Res* 2022;17(8):1629–1632 · doi:10.4103/1673-5374.332121 · PMID:35017407 · review · model: review of human + rodent literature

[^brincat2005]: Brincat MP · "Hormone replacement therapy and the skin" · *Maturitas* 2000;35(2):107–117; updated by multiple skin-collagen studies · review + observational · model: postmenopausal women · ~2% collagen loss per year in first post-menopausal decade reported in multiple biopsy cohorts

[^avouac2020]: Avouac J, Meune C, Chenevier-Gobeaux C, Borderie D, Dieudé P, Kahan A, Chiocchia G, Allanore Y · "Estrogens Counteract the Profibrotic Effects of TGF-β and their Inhibition Exacerbates Experimental Dermal Fibrosis" · *J Invest Dermatol* 2020;140(4):924–927 · doi:10.1016/j.jid.2019.07.719 · PMID:31476316 · in-vivo + in-vitro · model: mouse dermal fibrosis + human dermal fibroblasts

[^he2026]: He Z, Wang Y, Tang W, Li J · "Timing and route of menopausal hormone therapy critically shape structural brain outcomes: A systematic review of MRI evidence" · *Neurosci Biobehav Rev* 2026;186:106684 · doi:10.1016/j.neubiorev.2026.106684 · PMID:41990931 · systematic review · n=24 structural MRI studies (PubMed/Web of Science/EBSCO, search through June 2025) · model: postmenopausal women · key finding: negative structural outcomes (reduced hippocampal volume, increased WMH) confined to late-initiation or oral-CEE studies; transdermal E2 studies predominantly neutral or regionally positive

[^melville2025]: Melville M, He L, Desai R, Nyamayaro P, Fox C, Kothari KU, Condron P, Miao M, Hickey M, Spector A · "Menopause hormone therapy and risk of mild cognitive impairment or dementia: a systematic review and meta-analysis" · *Lancet Healthy Longev* 2025;6(12):100803 · doi:10.1016/j.lanhl.2025.100803 · PMID:41448220 · meta-analysis · n=1,016,055 (10 studies: 1 RCT + 9 observational) · key finding: no significant overall MHT–dementia association; subgroup analyses by timing, duration, and formulation also showed no significant effects; certainty of evidence moderate to very low; authors conclude MHT should not be prescribed for dementia prevention

[^rocca2024]: Rocca WA, Kantarci K, Faubion SS · "Risks and benefits of hormone therapy after menopause for cognitive decline and dementia: A conceptual review" · *Maturitas* 2024;184:108003 · doi:10.1016/j.maturitas.2024.108003 · PMID:38649310 · review · key finding: effects are heterogeneous depending on timing, formulation, and individual risk profile

[^campos2024]: Ferreira Campos L, de Andrade Costa G, Domingues Feitosa M, Ferreira Félix I, Gabrielli L, Almeida MCC, Aquino EML, Aras Júnior R · "Effect of hormone therapy on blood pressure and hypertension in postmenopausal women: a systematic review and meta-analysis" · *Menopause* 2024;31(6):556–562 · doi:10.1097/GME.0000000000002359 · PMID:38688468 · meta-analysis · 11 studies, 81,041 women (29,812 HT users); BP meta-analysis in 8 studies (n=1,718) · key finding: oral CEE+progestogen raised SBP (SMD 0.60 mmHg, 95% CI 0.19–1.01) and increased hypertension risk; oral or transdermal estradiol+progestogen (SMD −2.00, 95% CI −7.26 to 3.27), estradiol alone, and tibolone showed no significant SBP effect; estradiol formulations (oral or transdermal) are BP-neutral regardless of route

[^chlebowski2023]: Chlebowski RT, Aragaki AK · "The Women's Health Initiative randomized trials of menopausal hormone therapy and breast cancer: findings in context" · *Menopause* 2023;30(4):454–461 · doi:10.1097/GME.0000000000002154 · PMID:36727752 · context review · key finding: CEE-alone (post-hysterectomy) decreased breast cancer incidence and mortality; CEE+MPA increased breast cancer incidence (effect persists through two decades); progestogen is the key driver of the increased risk signal

[^lambrinoudaki2026]: Lambrinoudaki I, Armeni E, Milli N, Anagnostis P · "Then and Now: What We Have Learned From the WHI" · *J Clin Endocrinol Metab* 2026;111(4):e974–e994 · doi:10.1210/clinem/dgaf638 · PMID:41379766 · review of WHI lessons · key finding: early MHT initiation shows neutral-to-beneficial cardiovascular and cognitive trends; late initiation in women >10 yr post-menopause with pre-existing disease carries excess risk

[^levin2015]: Levin ER · "Membrane estrogen receptors signal to determine transcription factor activity" · *Endocrinology* 2014;155(12):4617–4626 · doi:10.1210/en.2014-1565 · review · model: cell-based + in-vivo · covers GPER and membrane ERα non-genomic signalling
