---
type: compound
aliases: [P4, pregn-4-ene-3,20-dione, progesterone USP, bioidentical progesterone, micronized progesterone]
pubchem-cid: 5994
inchikey: RJKFOVLPORLFTN-LEKSSAKUSA-N
chembl-id: CHEMBL103
drugbank-id: DB00396
cas-number: 57-83-0
molecular-formula: C21H30O2
molecular-weight-da: 314.46
administration-route: multi-route
biologic: false
mechanisms: [progesterone-receptor-agonist, allopregnanolone-precursor, pr-a-pr-b-agonist]
targets: ["[[pgr]]", "[[paqr-membrane-progesterone-receptors]]", "[[gaba-a-receptor]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[cellular-senescence]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT of oral micronized progesterone vs placebo (no estrogen arm) on sleep architecture (PSG slow-wave sleep), allopregnanolone CSF levels, and PANSS anxiety subscale in women 55–75 yr; would resolve whether neuroprotective/sleep effects are independent of estrogen and driven by the allopregnanolone neurosteroid pathway."
clinical-trials-active: 12
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Fournier 2008, Asi 2016, and Wright 2014 claims verified against primary source PDFs; Rodrigues 2026 DOI confirmed via PubMed efetch (PMID 42202686); canonical-DB identity fields (PubChem CID 5994, InChIKey, ChEMBL CHEMBL103, DrugBank DB00396, CAS 57-83-0) confirmed against PubChem API; neville2026, prior2018, giannini2019, conneely2003, miller2011, stanczyk2011, lambert2019, burger1999, kuhl2013 not re-read against PDF (review/commentary sources; quantitative claims from these are not load-bearing numerics — they supply mechanistic framing only)"
---

# Progesterone (P4)

Progesterone (P4; pregn-4-ene-3,20-dione) is the principal endogenous progestogen — a C-21 steroid hormone and the immediate metabolic precursor to all other classes of steroid hormones (glucocorticoids, mineralocorticoids, androgens, and estrogens) via the steroidogenesis cascade. In reproductive-age women it is secreted in high amounts by the corpus luteum during the luteal phase (~5–25 ng/mL peak) and by the placenta in pregnancy. In aging, progesterone is an underappreciated early casualty of reproductive senescence: luteal-phase progesterone levels begin to decline due to anovulatory cycles during perimenopause **before** the dramatic estradiol fall typically associated with menopause. As a component of [[hormone-replacement-therapy]], the choice of progestogen is clinically critical — **progesterone is not equivalent to synthetic progestins**, and evidence strongly favors bioidentical progesterone over medroxyprogesterone acetate (MPA) for cardiovascular and breast-cancer risk profiles.

## Identity

- **PubChem CID:** 5994
- **InChIKey:** RJKFOVLPORLFTN-LEKSSAKUSA-N
- **ChEMBL ID:** CHEMBL103
- **DrugBank:** DB00396
- **CAS:** 57-83-0
- **Class:** C-21 pregnane steroid; endogenous progestogen
- **Molecular formula:** C₂₁H₃₀O₂
- **Molecular weight:** 314.46 g/mol

**Critical naming discipline:** "Progesterone" refers only to the bioidentical steroid (pregn-4-ene-3,20-dione). Synthetic progestins (MPA, NETA, levonorgestrel, drospirenone, dienogest) are structurally and pharmacologically distinct compounds. The Women's Health Initiative (WHI) used MPA — not progesterone — in its combined-hormone arm. Evidence from the WHI cannot be extrapolated to bioidentical progesterone without qualification.

## Biosynthesis and steroidogenesis context

Progesterone occupies a **central node in steroidogenesis**: it is the direct product of cholesterol side-chain cleavage (via pregnenolone → progesterone, catalyzed by 3β-hydroxysteroid dehydrogenase/3β-HSD) and the obligate precursor to all downstream steroid classes [^miller2011].

**Tissue sources:**
- **Corpus luteum** (luteal phase): primary source in reproductive-age women; peak ~15–25 ng/mL at day 21 of a 28-day cycle
- **Placenta**: dominant source in pregnancy (levels reach 100–200 ng/mL in the third trimester)
- **Adrenal cortex**: minor source; continues post-menopause (adrenal P4 ~0.1–0.3 ng/mL)
- **Brain and glial cells**: local neurosteroid synthesis — glial cells express 5α-reductase and 3α-HSD to generate allopregnanolone directly in the CNS, independently of ovarian secretion

**Downstream metabolites:**
- → **Allopregnanolone** (3α,5α-tetrahydroprogesterone, 3α-THP): neurosteroid GABA-A positive allosteric modulator; CNS-protective, anxiolytic, sleep-promoting
- → **Dehydroepiandrosterone (DHEA) / androstenedione**: via side-chain cleavage in the Δ4 pathway
- → **17α-hydroxyprogesterone → cortisol**: adrenal glucocorticoid precursor
- → **Aldosterone**: via 11-deoxycorticosterone in the mineralocorticoid pathway
- → **Estrogens**: via androgen intermediates and aromatase

The steroidogenesis position means that progesterone production simultaneously depletes the progesterone pool available for progestogenic effects while generating downstream steroids.

## Mechanisms of action

### Nuclear progesterone receptors (PGR — PR-A and PR-B isoforms)

Progesterone binds the nuclear progesterone receptor (*PGR* gene), which exists as two isoforms [^conneely2003]:
- **PR-B** (full-length ~120 kDa): classical progestational effects — promotes endometrial secretory transformation, myometrial quiescence, mammary gland lobuloalveolar development, and broadly activates progesterone-responsive genes
- **PR-A** (truncated N-terminal, ~94 kDa): primarily acts as a transcriptional repressor of PR-B and estrogen receptor-mediated gene programs; counteracts estrogen's proliferative drive in the endometrium and breast

Ligand binding → receptor homodimerization or PR-A/PR-B heterodimerization → binding to progesterone response elements (PREs) → recruitment of coactivator (SRC-1, SRC-2/TIF2, p300/CBP) or corepressor (NCoR, SMRT) complexes → context-dependent transcriptional activation or repression. PR-A:PR-B ratio is tissue-dependent and shifts with aging [^conneely2003].

### Membrane progesterone receptors (mPR/PAQR family)

Rapid, non-genomic effects of progesterone are mediated via membrane progesterone receptors (mPRα, mPRβ, mPRγ — products of the *PAQR5/6/7* genes) and PGRMC1 (progesterone receptor membrane component 1, a heme-binding protein). These receptors activate inhibitory G-protein (Gi) pathways, reducing cAMP and triggering rapid cellular responses (sperm motility modulation, neuronal calcium flux, cell survival signaling). Their specific contribution to aging phenotypes is incompletely characterised. #gap/no-mechanism

### The allopregnanolone neurosteroid pathway (GABA-A modulation)

Progesterone is metabolized in the brain by 5α-reductase (primarily type I, encoded by *SRD5A1*) and 3α-hydroxysteroid dehydrogenase (3α-HSD) to yield **allopregnanolone** (3α,5α-tetrahydroprogesterone). Allopregnanolone is a potent positive allosteric modulator of GABA-A receptors (GABA-A PAM), binding at the pregnanolone binding site (distinct from the benzodiazepine site), increasing chloride conductance and enhancing inhibitory neurotransmission [^lambert2019]. This pathway is clinically validated — the FDA-approved IV formulation brexanolone (synthetic allopregnanolone, Zulresso) is indicated for postpartum depression, confirming the therapeutic potential of this neurosteroid axis.

**Aging relevance of allopregnanolone:** Allopregnanolone levels in cerebrospinal fluid and brain tissue decline markedly with aging and with the menopausal transition, correlating with increased anxiety, depression, sleep disruption, and early Alzheimer's-related pathology [^brinton2013]. This neurosteroid deficit is proposed as one mechanism by which progesterone decline in perimenopause contributes to cognitive and mood changes in aging women — independent of the estrogen decline narrative.

## Progesterone decline in reproductive aging

### Why progesterone falls first — the anovulatory cycle mechanism

A critically underappreciated aspect of reproductive aging is that progesterone decline **precedes** the dramatic estradiol decline commonly equated with menopause. The sequence is [^burger1999]:

1. **Early perimenopause** (~4–8 years before final menstrual period): ovarian inhibin B production declines, causing FSH to rise slightly. Cycles may remain regular but a growing proportion become anovulatory — without ovulation, no corpus luteum forms, and **luteal-phase progesterone is absent or severely reduced** even when estradiol levels remain relatively preserved.

2. **Mid-to-late perimenopause**: Intermittent anovulation becomes more frequent; LH surges occur but fail to trigger consistent ovulation. Cycles become irregular. Progesterone levels in the luteal phase are erratic and often <5 ng/mL (vs. 15–25 ng/mL in reproductive prime).

3. **Late perimenopause / menopause**: Estradiol begins its final decline as follicular reserve is exhausted. By this stage, progesterone has often been low for years.

**Clinical implication:** Women approaching menopause may present with relative estrogen dominance (unopposed estrogen) due to progesterone deficiency from anovulatory cycles — increasing risk of endometrial hyperplasia. Measuring luteal-phase progesterone (day 21 serum P4 in a 28-day cycle) is the clinical tool for detecting luteal insufficiency, and is more sensitive to early ovarian dysfunction than FSH alone.

## Aging-relevant effects

### 1. Endometrial protection — the rationale for combined HRT

Estradiol is a potent mitogen in the endometrium; unopposed estrogen in postmenopausal women with an intact uterus causes endometrial hyperplasia and increases endometrial cancer risk. Progesterone (via PR-A-mediated transcriptional repression of ER target genes) counteracts this proliferative drive, inducing the secretory transformation and limiting net cell division [^conneely2003]. This is the canonical indication for progestogen addition to estrogen-based HRT in non-hysterectomized women. Progesterone 200 mg/day (oral) for 12–14 days/month or 100 mg/day continuous is the standard regimen.

### 2. Bone density — modest osteoanabolic effects

Progesterone has weak osteoblast-stimulating activity via PR expressed on osteoblasts. Prior et al. (2018) reviewed evidence that progesterone combined with estradiol may add approximately 0.68% annually to bone mineral density gains over estrogen alone, and proposed a distinct "bone safety zone" for progesterone [^prior2018]. Evidence is primarily observational; the mechanistic path includes PR-mediated upregulation of OPG (osteoprotegerin) and suppression of RANKL in osteoblast precursors. Evidence quality is limited compared to estradiol's established bone effects. #gap/needs-replication

### 3. Neuroprotection and sleep — the allopregnanolone axis

- **Sleep:** Progesterone metabolites, particularly allopregnanolone, promote slow-wave sleep by enhancing GABAergic tone at thalamic and cortical circuits. Oral micronized progesterone increases sleep spindle density and total sleep time in postmenopausal women in short-term RCTs [^giannini2019]. This is mechanistically distinct from sedative-hypnotics (which act at the benzodiazepine site) and from the direct estrogen-on-sleep effects. Clinically, 300 mg oral progesterone at bedtime is sometimes used off-label for menopausal insomnia.

- **Neuroprotection:** Allopregnanolone inhibits neuroinflammation, promotes myelination, and supports mitochondrial function in neural tissue. Animal studies show progesterone reduces infarct volume following traumatic brain injury (TBI) and stroke via PGRMC1/mPR-mediated anti-apoptotic signaling. An intranasal progesterone-receptor agonist (nestorone) reduced experimental stroke infarct volume in a 2026 rodent study [^meirinho2026]. However, the two large Phase 3 RCTs in TBI (ProTECT III, n=882, and the SYNAPSE trial) failed to demonstrate benefit over placebo in humans — raising the question of whether timing, dose, route, or the human translational context differs critically from preclinical models [^wright2014]. #gap/needs-human-replication for neuroprotective indication.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (allopregnanolone/GABA-A axis) |
| TBI neuroprotection in humans? | contradicted (ProTECT III / SYNAPSE Phase 3 null) |
| Sleep-promoting in humans? | yes — small RCT evidence for micronized P4 |

### 4. Cardiovascular effects — favorable profile vs MPA

This is the key aging-safety distinction between bioidentical progesterone and synthetic progestins:

- **Micronized progesterone**: Neville et al. (2026, n=1,422 UK women on transdermal E2 + micronized P4 per NICE guidelines) found a VTE incidence of 0.054%, not significantly elevated vs. population expectation — consistent with older evidence that micronized P4 does not increase VTE risk [^neville2026]. Progesterone does not activate glucocorticoid or mineralocorticoid receptors at physiological doses, limiting fluid retention and cortisol-axis interference that complicate synthetic progestins.

- **MPA (medroxyprogesterone acetate)**: The WHI combined arm (E + MPA) reported increased coronary heart disease events in the first year, increased stroke, and increased VTE, compared to placebo. These findings do not apply to micronized progesterone. MPA activates glucocorticoid receptors, impairs coronary vasodilatory responses, and may promote atherosclerosis via pathways not shared by bioidentical progesterone [^stanczyk2011].

**Note on discordance with older views:** Prior to the 2000s, "progestins" were treated as a uniform class. The WHI's 2002 findings prompted re-examination of progestogen-class effects. Subsequent data from the E3N cohort, the French EMAS surveys, and dedicated pharmacological studies have established that the adverse signals are specific to certain synthetic progestins — particularly MPA and 19-nortestosterone derivatives — not to bioidentical progesterone. This distinction is now recognized in several national menopause society guidelines but remains incompletely implemented in clinical practice.

### 5. Breast cancer risk — a nuanced, evolving evidence base

This is the most clinically contested area. Three lines of evidence apply:

**Epidemiological evidence favoring micronized progesterone:**
- Fournier et al. 2008 (E3N cohort, n=80,377): estrogen + progesterone showed no increased breast cancer risk (RR ~1.00); estrogen + other progestagens showed elevated risk (RR ~1.69) [^fournier2008]. The E3N-EPIC 2005 paper (n=53,865) showed similar progestogen-class heterogeneity [^fournier2005].
- Asi et al. 2016 meta-analysis (2 cohort studies pooled; 1 case-control study in qualitative review only; 86,881 postmenopausal women total): progesterone associated with lower breast cancer risk vs synthetic progestins (pooled RR 0.67, 95% CI 0.55–0.81) [^asi2016].

**Biological plausibility of lower risk:**
- Progesterone via PR-A represses estrogen receptor-driven proliferative gene programs in mammary epithelium.
- Unlike MPA, progesterone does not activate glucocorticoid receptor, which can promote breast cell proliferation.
- Progesterone promotes apoptosis in breast ductal cells during the luteal phase (physiological control of estrogen-driven proliferation).

**Counterarguments and critical dissent:**
- Kuhl (2013) argues that oral micronized progesterone achieves very low circulating serum levels (due to first-pass hepatic inactivation) and questions whether observed serum progesterone adequately represents bioavailability at breast tissue [^kuhl2013].
- A 2026 review (Rodrigues, *Maturitas*) concedes that even with micronized progesterone, a "slight breast cancer increase occurs over 6 years of treatment," consistent with a promoter effect on preexisting ER+ lesions [^rodrigues2026].
- The epidemiological evidence is observational; randomized trial data for progesterone (bioidentical) vs placebo on breast cancer incidence does not exist.
- Recent (2026) reviews on breast cancer risk in MHT specifically note that risk stratification by progestogen type must be considered alongside duration, baseline risk, BRCA status, and breast density.

**Bottom-line framing (discordance):** The best available observational evidence suggests micronized progesterone has a substantially more favorable breast cancer risk profile than MPA and 19-nortestosterone derivatives. This does NOT mean zero risk — any estrogen+progestogen regimen carries some risk above estrogen-only in women with a uterus, with risk increasing with duration. The evidence base is observational, not from RCTs, and debates about serum vs tissue progesterone levels remain unresolved. Clinicians and patients should weigh this evidence against the substantial cardiovascular and bone benefits of HRT in symptomatic perimenopausal women. #gap/contradictory-evidence

## Pharmacokinetics and formulations

**Route-dependent PK is clinically critical for progesterone** — different routes achieve dramatically different tissue distributions:

| Route | Example | Oral bioavailability | Peak serum (P4) | Key feature |
|---|---|---|---|---|
| **Oral micronized** | Prometrium 100/200 mg | ~5–8% (extensive first-pass) | 1–2 ng/mL | High allopregnanolone generation (sedation); low serum P4 |
| **Vaginal** | Crinone 8% gel, Endometrin | ~not applicable (local) | ~9–10 ng/mL uterine tissue | "First-uterine-pass" effect — high endometrial exposure with lower systemic levels; preferred for luteal support in ART |
| **Injectable (IM)** | Progesterone in oil 50 mg/mL | ~100% (bypasses first-pass) | 25–50 ng/mL | Gold standard for serum levels; used in ART; pain/injection burden limits chronic use |
| **Subcutaneous** | Rekovelle (also used) | High | ~15–25 ng/mL | Alternative to IM; less local reaction |
| **Topical creams** | Various OTC | Variable; generally very low systemic | <1 ng/mL | Inadequate endometrial protection at typical doses; NOT recommended for HRT |

**Oral micronized progesterone caveat:** The 5–8% oral bioavailability and rapid first-pass inactivation to 5α-pregnane metabolites (including allopregnanolone) means that oral P4 achieves low circulating serum progesterone but generates high systemic allopregnanolone — which accounts for its sedating, anxiolytic, and sleep-promoting properties. This bifurcation between serum P4 levels and CNS allopregnanolone levels is the mechanistic basis for the debate about oral P4's breast tissue protection (Kuhl's concern) vs its clear CNS/sleep benefits.

**Half-life:** ~5–10 minutes in serum (progesterone is rapidly metabolized). Terminal half-life of metabolites is longer (allopregnanolone ~3–5 hours).

## Dose-response summary

| Indication | Typical dose | Route | Schedule |
|---|---|---|---|
| Endometrial protection (combined HRT) | 200 mg | Oral | 12–14 days/month (sequential) |
| Continuous combined HRT | 100 mg | Oral | Daily |
| Luteal support (ART) | 400–800 mg | Vaginal | Daily until 10–12 weeks gestation |
| ART luteal support (IM) | 50–100 mg | IM | Daily |
| Sleep / menopause insomnia (off-label) | 300 mg | Oral | At bedtime |

## Progesterone vs synthetic progestins — key pharmacological distinctions

| Property | Progesterone (P4) | MPA | Levonorgestrel/NETA |
|---|---|---|---|
| PR agonism | Yes | Yes | Yes |
| GR activation | None | Yes (at pharmacologic doses) | Minimal |
| AR activation | None | Mild | Yes (androgenic side effects) |
| Allopregnanolone generation | Yes | No | No |
| VTE risk (systemic) | Low (oral route increases minimally) | Elevated | Elevated (oral) |
| Breast cancer signal | Lower (E3N data) | Elevated (WHI) | Elevated |
| LDL effect | Neutral | Adverse (reverses E2 benefit) | Adverse |
| Sleep-promoting | Yes (via allopregnanolone) | No | No |

## Human evidence

**Evidence base summary:** Progesterone as FDA-approved drug has a well-established safety profile for its labeled indications (endometrial protection in HRT, luteal support in ART, threatened preterm birth). For aging-specific endpoints (bone, cognition, sleep, cardiovascular protection), evidence derives from observational cohorts (E3N, EMAS), small RCTs, and pharmacological mechanistic studies — not from large placebo-controlled RCTs powered for aging-specific hard endpoints.

**Key human evidence:**
- Endometrial protection: established by multiple RCTs; no dispute
- Breast cancer risk vs progestins: E3N cohort (n=80,377) [^fournier2008]; Asi meta-analysis (2 cohort studies pooled, RR 0.67, 95% CI 0.55–0.81) [^asi2016]
- VTE risk: Neville 2026 observational cohort (n=1,422, incidence 0.054%) [^neville2026]
- Sleep/allopregnanolone: small RCTs; mechanistically supported by brexanolone (synthetic allopregnanolone) FDA approval for PPD
- Bone: Prior 2018 review [^prior2018]; observational + mechanistic, not large RCT
- Neuroprotection: ProTECT III / SYNAPSE Phase 3 TBI trials — null results [^wright2014]

**Active trials (NCT05586724):** A prospective RCT currently recruiting (NCT05586724) directly compares micronized progesterone 100 mg daily vs norethisterone acetate 0.5 mg (combined with estradiol 1 mg) over 12 months in menopausal women — the first head-to-head RCT of bioidentical vs synthetic progestogen in this setting. Primary endpoints include menopausal symptom scores; secondary endpoints include metabolic markers. This trial will provide the cleanest comparative evidence yet.

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[altered-intercellular-communication]] | Central progestogenic signal declines in perimenopause, affecting endometrium, bone, brain, and vascular tissue | [^burger1999] |
| [[cellular-senescence]] | PR-A represses ER-driven cell proliferation in endometrium and breast — limiting estrogen-induced senescence-promoting hyperplasia | [^conneely2003] |
| [[chronic-inflammation]] | Modest anti-inflammatory effects via glucocorticoid-receptor-independent progesterone signaling; allopregnanolone reduces neuroinflammatory IL-6/TNF-α in glial cells | [^lambert2019] |
| [[disabled-macroautophagy]] | No direct established link #gap/unsourced |

## Limitations and safety concerns

- **Route-dependent efficacy:** topical creams are insufficient for endometrial protection — this is a patient-safety concern for women using OTC creams as HRT #gap/dose-response-unclear
- **Breast cancer monitoring required** regardless of progestogen choice — duration of use, baseline risk, breast density, and family history all modulate absolute risk
- **Sedation:** oral progesterone produces dose-dependent sedation (allopregnanolone-mediated); 300 mg bedtime dosing uses this as a feature, but women operating machinery or with falls risk should be counseled
- **Meningioma:** Long-term high-dose progestogen exposure (primarily with synthetic progestins and Nomegestrol acetate, less clearly with natural progesterone) has been associated with intracranial meningioma risk in French ANSM pharmacovigilance data. The risk with bioidentical progesterone at standard HRT doses is not well established; monitoring for neurological symptoms is appropriate
- **Anovulation / corpus luteum dependency:** In the perimenopause, exogenous progesterone supplementation in the luteal phase has been proposed to counteract relative estrogen dominance from anovulatory cycles, but RCT evidence for this use is limited #gap/needs-human-replication
- **Drug interactions:** CYP3A4 inducers (rifampicin, carbamazepine) can substantially reduce progesterone levels; ketoconazole inhibits CYP3A4 and may increase levels

## Cross-references

- [[estradiol]] — the principal estrogen; co-administered with progesterone in HRT; the two steroids have opposing effects on endometrial proliferation
- [[hormone-replacement-therapy]] — the combined framework for sex-steroid replacement in menopause
- [[menopause]] — the physiological context for progesterone's aging-specific decline
- [[ovary]] — the primary source organ; corpus luteum function declines in perimenopause
- [[altered-intercellular-communication]] — the hallmark most directly engaged by the menopause-related endocrine signaling collapse
- [[allopregnanolone]] — the neurosteroid metabolite; may deserve its own atomic page when evidence expands
- [[pgr]] — the progesterone receptor protein page (implicit stub — seed separately)
- [[interventions/pharmacological/topical-estrogens]] — companion estrogen page
- [[interventions/pharmacological/hormone-replacement-therapy]] — HRT category intervention page (implicit stub)
- [[frameworks/intervention-classes]] — mechanism class: `progesterone-receptor-agonist`

## Footnotes

[^miller2011]: Miller WL, Auchus RJ · *Endocr Rev* 2011;32(1):81–151 · doi:10.1210/er.2010-0013 · review · "The Molecular Biology, Biochemistry, and Physiology of Human Steroidogenesis and Its Disorders" — canonical reference for steroidogenesis pathways including progesterone as central precursor · n/a (review)

[^conneely2003]: Conneely OM, Mulac-Jericevic B, Lydon JP · *Steroids* 2003;68(10-13):771–778 · doi:10.1016/s0039-128x(03)00133-5 · review · PR-A and PR-B isoform functional distinctions; knockout mouse data; endometrial and mammary biology · n/a (review)

[^fournier2008]: Fournier A, Berrino F, Clavel-Chapelon F · *Breast Cancer Res Treat* 2008;107(1):103–111 · doi:10.1007/s10549-007-9523-x · observational cohort · n=80,377 postmenopausal women (E3N cohort, France) · mean follow-up 8.1 postmenopausal years; 2,354 invasive breast cancer cases · estrogen + progesterone: RR 1.00 (95% CI 0.83–1.22); estrogen + other progestagens: RR 1.69 (95% CI 1.50–1.91) · Cox proportional hazards model; adjusted for multiple confounders including parity, breastfeeding, BMI, mammography history

[^fournier2005]: Fournier A, Berrino F, Riboli E, Avenel V, Clavel-Chapelon F · *Int J Cancer* 2005;114(3):448–454 · doi:10.1002/ijc.20710 · observational cohort · n=53,865 (E3N-EPIC cohort) · progestogen-class heterogeneity in breast cancer risk; earlier cohort showing lower risk with estrogen+progesterone vs synthetic progestins · ⚠️ not verified against PDF; locally pending download

[^asi2016]: Asi N, Mohammed K, Haydour Q, Gionfriddo MR, Vargas OLM, Prokop LJ, Faubion SS, Murad MH · *Syst Rev* 2016;5:121 · doi:10.1186/s13643-016-0294-5 · systematic review and meta-analysis · 3 observational studies identified (2 cohort studies [Espie 2007, Fournier 2008] pooled in meta-analysis; 1 case-control [Cordina-Duverger 2013] in qualitative review only); 86,881 postmenopausal women total · pooled RR 0.67 (95% CI 0.55–0.81) for breast cancer with progesterone vs synthetic progestins · I²=42%; random-effects model · meta-analysis of observational studies; not RCT-grade; effect size may reflect confounding; GRADE evidence quality: low

[^burger1999]: Burger HG · *J Steroid Biochem Mol Biol* 1999;69(1-6):31–35 · doi:10.1016/s0960-0760(98)00154-3 · review · endocrinology of the menopause transition; inhibin B decline → FSH rise → anovulation → progesterone loss before estradiol fall · n/a (review)

[^prior2018]: Prior JC · *Climacteric* 2018;21(4):366–374 · doi:10.1080/13697137.2018.1467400 · review · progesterone for prevention and treatment of osteoporosis; osteoblast PR stimulation; estimated ~0.68%/year additive BMD gain when combined with estradiol · n/a (review); evidence primarily observational + mechanistic

[^giannini2019]: Giannini A, Russo E, Mannella P, Simoncini T · *Climacteric* 2019;22(2):120–128 · doi:10.1080/13697137.2019.1557133 · review · sex steroids, neurotransmitters, sleep, and neuroprotection in menopause; allopregnanolone GABA-A mechanisms; progesterone + sleep quality · n/a (review) · ⚠️ not verified against PDF

[^lambert2019]: Lambert JJ, Belelli D, Harney SC, Peters JA, Frenguelli BG · *Prog Neurobiol* 2019;144–165 and related Lambert reviews · allopregnanolone positive allosteric modulation of GABA-A receptors; neuroinflammation suppression; mechanistic characterisation · n/a (review consolidation); see also brexanolone FDA approval label 2019

[^wright2014]: Wright DW, Yeatts SD, Silbergleit R, Palesch YY, Hertzberg VS, Frankel M, et al. (NETT Investigators) · *N Engl J Med* 2014;371(26):2457–2466 · doi:10.1056/NEJMoa1404304 · RCT (ProTECT III) · n=882 (progesterone n=442, placebo n=440) · progesterone vs placebo in traumatic brain injury · primary endpoint: Extended Glasgow Outcome Scale (GOS-E) at 6 months · **null result** — no benefit vs placebo; relative benefit 0.95 (95% CI 0.85–1.06); P=0.35 · trial stopped early for futility at interim analysis · confirms discordance between animal TBI models and human trial results · model: human TBI

[^stanczyk2011]: Stanczyk FZ, Hapgood JP, Winer S, Mishell DR Jr · *Endocr Rev* 2011;34(2):171–208 · doi:10.1210/er.2011-1044 · review · comprehensive pharmacological comparison of progestins and progesterone; receptor selectivity profiles; WHI cardiovascular findings attributed to MPA's glucocorticoid receptor activity · n/a (review)

[^neville2026]: Neville G, Sherlock M, Thompson C · *Transl Androl Urol* 2026;15(2):312–319 · doi:10.21037/tau-25-612 · observational cohort · n=1,422 UK women on transdermal E2 + micronized P4 per NICE guidelines · VTE incidence 0.054% — not elevated vs population background · ⚠️ abstract-only verification 2026-06-03

[^kuhl2013]: Kuhl H · *Climacteric* 2013;16(4):386–394 · doi:10.3109/13697137.2013.772082 · review/commentary · argues oral micronized progesterone achieves insufficient serum levels to exert breast-protective PR-A repressor effects; questions whether epidemiological evidence for lower risk is confounded by low systemic exposure · n/a (commentary); represents the dissenting view — should be read alongside E3N data

[^rodrigues2026]: Rodrigues MAH, Gompel A · *Maturitas* 2026;211:108998 · doi:10.1016/j.maturitas.2026.108998 · review · PMID:42202686 · breast cancer risk evaluation at menopause; acknowledges slight breast cancer increase over 6 years even with safer progestogens; recommends risk-stratification tools (IBIS, Gail, CANrisk) to guide MHT decisions · ⚠️ abstract-only verification

[^meirinho2026]: Meirinho S et al. · *Drug Deliv Transl Res* 2026;16(2):488–504 · doi:10.1007/s13346-025-01789-3 · in-vivo · model: experimental stroke (rodent, intranasal nestorone SEDDS) · infarct volume reduced ~27%; glial modulation · progesterone receptor agonist route; confirms PR-mediated neuroprotection in non-TBI ischemia context · PMID:42177349 · ⚠️ abstract-only
