---
type: phenotype
aliases: [endometriotic disease, endometriosis uteri, pelvic endometriosis]
icd-10: N80
icd-11: GA15
affected-tissues: ["[[ovary]]", "[[pelvic-peritoneum]]", "[[uterus]]"]
underlying-hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]", "[[epigenetic-alterations]]", "[[cellular-senescence]]"]
typical-onset: "Reproductive years, typically 25–35 at diagnosis (symptoms may begin at menarche); mean diagnostic delay 6–10 years from symptom onset"
prevalence-65plus: "Primarily a reproductive-age disease; postmenopausal persistence estimated ~2–5% of cases; rare recurrence post-menopause on HRT"
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Barnard 2024 JAMA HRs verified against PMC11255975 full text; Kvaskoff 2021 CIs verified against Crossref abstract (canonical source); Bulun 2019 aromatase/progesterone-resistance mechanism verified against local PDF (PMC6693056); ICD-11 GA15 not independently confirmed via WHO live database (API unavailable) — flagged for next lint pass; canonical DB identity fields (ICD-10 N80, PubMed footnote DOIs) confirmed via Crossref/PubMed"
literature-checked-through: 2026-06-03
---

# Endometriosis

A chronic, estrogen-dependent, inflammatory condition defined by the growth of endometrial-like glands and stroma outside the uterine cavity. Affects approximately 10% of reproductive-age women globally (~190 million individuals) [^zondervan2020] and is the leading cause of chronic pelvic pain and a major driver of female infertility. A key feature relevant to aging biology: lesions are **self-sustaining via local aromatase ([[cyp19a1]]) overexpression**, creating an intracrine estrogen loop that persists even when systemic estrogen declines — until menopause extinguishes the systemic hormonal milieu.

## Classification and diagnosis

Endometriosis presents in three main morphological forms with overlapping but distinct biology [^bulun2019]:

| Form | Location | Hallmark feature |
|---|---|---|
| Superficial peritoneal lesions | Pelvic peritoneum surface | Shallow implants; most common |
| Ovarian endometriomas | Ovary (chocolate cysts) | Blood-filled cysts; highest cancer-transition risk |
| Deep infiltrating endometriosis (DIE) | Rectovaginal septum, bladder, bowel | Invasive into peritoneum ≥5 mm; most severe pain/infertility |

**Diagnostic gold standard** is laparoscopic visualization with histologic confirmation. There is no validated non-invasive diagnostic biomarker in routine clinical use, contributing to the 6–10 year mean diagnostic delay from symptom onset [^as-sanie2025]. CA-125 is elevated in some patients but has poor sensitivity and specificity for endometriosis [^ahn2017].

ICD-10 N80 captures the full disease spectrum with anatomic subcodes (N80.0 uterine, N80.1 ovarian, N80.2 fallopian tube, N80.3 pelvic peritoneum, N80.4–N80.9 other/unspecified sites).

## Pathophysiology

### Retrograde menstruation and implantation

The dominant mechanistic hypothesis is Sampson's retrograde menstruation theory: endometrial cells shed via the fallopian tubes into the pelvic cavity during menstruation implant and proliferate ectopically. Retrograde menstruation is near-universal (~90% of menstruating women), yet only ~10% develop endometriosis, implicating additional susceptibility factors — immune surveillance failure, genetic predisposition, epigenetic reprogramming of ectopic cells, and hormonal permissiveness [^zondervan2020].

### Estrogen dependence and local aromatase amplification

Endometriosis lesions are exquisitely estrogen-dependent. Critically, they produce their own estrogen via local overexpression of [[cyp19a1]] (aromatase, the rate-limiting enzyme converting androgens to [[estradiol]]) [^bulun1999]:

- Normal endometrium has minimal CYP19A1 expression; ectopic endometriotic stromal cells express it robustly.
- Local estradiol production stimulates prostaglandin E₂ (PGE₂) synthesis, which in turn upregulates CYP19A1 — a self-amplifying positive feedback loop.
- This intracrine loop renders lesions **partially autonomous from systemic estrogen**, explaining why estrogen-lowering therapies (GnRH agonists, danazol) suppress but may not eliminate lesions, and why postmenopausal recurrence occurs in women on HRT [^mori2018].

### Progesterone resistance

A defining molecular feature of endometriotic tissue is **progesterone resistance** — blunted transcriptional response to [[progesterone]] that normally suppresses endometrial proliferation and coordinates immune tolerance [^zhang2023]:

- Progesterone receptor B (PR-B) isoform is selectively downregulated in ectopic lesions via promoter hypermethylation and histone modification; PR-A dominates, which is transcriptionally less active.
- Reduced expression of progesterone-responsive genes (HOXA10, HOXA11, IGFBP-1) impairs the decidualization response.
- This resistance explains why progestin-only therapies (norethindrone, dienogest) provide partial relief and why combination regimens are often required.
- Epigenetic silencing of PR-B is considered a primary driver, not merely a secondary consequence, of the ectopic phenotype — linking endometriosis to the [[epigenetic-alterations]] hallmark [^maclean2022].

### Chronic inflammation and immune dysregulation

The peritoneal microenvironment in endometriosis is profoundly inflamed [^zondervan2020]:

- Elevated peritoneal fluid concentrations of IL-1β, IL-6, IL-8, TNF-α, and VEGF.
- Macrophages are recruited but functionally polarized toward anti-inflammatory/pro-angiogenic M2 phenotypes that aid lesion survival rather than clearance.
- NK cell cytotoxicity against ectopic endometrial cells is reduced in affected women.
- Mast cells, T-regulatory cells, and B-cell infiltration of lesions further suppress anti-lesion immunity.
- This chronic inflammatory niche connects endometriosis to [[chronic-inflammation]] and contributes to the systemic and local pain sensitization that characterizes the disease.

### Cellular senescence in lesions

Recent work has identified cellular senescence as a functional component of the endometriotic microenvironment [^yan2025] [^patel2025]:

- Stromal fibroblasts within lesions exhibit hallmarks of senescence (p16^INK4a^, p21^CIP1^, SA-β-gal positivity) in response to iron overload from recurrent microhemorrhage in endometriomas.
- Senescent cells within lesions secrete a SASP (senescence-associated secretory phenotype) enriched in IL-6, IL-8, MMP-2, MMP-9, and VEGF — amplifying inflammation, promoting angiogenesis, and driving fibrosis.
- Iron-mediated oxidative stress from hemolysis in "chocolate cysts" is a plausible initiator of senescence in the lesion microenvironment.
- The clinical relevance of senolytic strategies for endometriosis is early-stage and not yet human-validated. #gap/needs-human-replication

### Epigenetic reprogramming

Ectopic endometrial cells undergo extensive epigenetic remodeling that distinguishes them from eutopic endometrium [^koukoura2016]:

- Hypermethylation of the PR-B promoter (PGRBP2) silences progesterone sensitivity.
- CpG island hypermethylation of E-cadherin, HOXA genes, and steroidogenic factor 1 (NR5A1) promoters is documented.
- Global DNA hypomethylation alongside locus-specific hypermethylation — a pattern consistent with the [[epigenetic-alterations]] hallmark.
- These changes are stable through cell division, suggesting epigenetic memory contributes to lesion persistence and may partly explain why surgical removal is not curative.

## The aging angle

### 1. Self-sustaining estrogen loop — persistence across the hormonal lifespan

The CYP19A1-driven intracrine loop means lesions are not simply "fed" by ovarian estrogen but produce a local estrogenic environment. This has implications at each life stage:

- **Perimenopause:** as ovarian estrogen production becomes erratic, local lesion aromatase may maintain sufficient intracrine estradiol to sustain disease activity even as systemic levels fluctuate.
- **Postmenopause:** systemic estrogen withdrawal usually induces lesion regression. However, women on hormone replacement therapy (HRT), particularly estrogen-only regimens, can experience postmenopausal recurrence — documented in case series and a systematic review (Rzewuska 2023) [^rzewuska2023].
- **Practical implication:** women with a history of endometriosis who require HRT for [[menopause|menopausal]] symptom management or osteoporosis prevention should generally use combined estrogen-progestogen regimens rather than estrogen alone, even after hysterectomy.

### 2. Relationship to age at menopause

Endometriosis is associated with altered timing of menopause, though causality is contested [^haas2014]:

- Several cohort studies report a small but measurable association between endometriosis and **earlier natural menopause** (by ~1–2 years on average), possibly via accelerated follicular depletion from recurrent ovarian hemorrhage and inflammation.
- Ovarian endometriomas (cystectomy) are associated with reduced ovarian reserve (anti-Müllerian hormone), representing a direct structural mechanism for earlier ovarian aging.
- Conversely, the prolonged anovulation and low-estrogen states induced by surgical or medical treatment may paradoxically influence overall estrogen exposure across life. #gap/needs-replication

### 3. Cancer risk — clear-cell and endometrioid ovarian cancer

Endometriosis is an established, histotype-specific risk factor for ovarian cancer. Evidence quality is high:

**Kvaskoff et al. 2021 (systematic review and meta-analysis, n=49 population-based studies):** [^kvaskoff2021]
- Clear-cell ovarian carcinoma: RR 3.44 (95% CI 2.82–4.42)
- Endometrioid ovarian carcinoma: RR 2.33 (95% CI 1.82–2.98)
- No statistically significant association with high-grade serous ovarian cancer — the distinction is histotype-specific, not a global ovarian cancer risk.
- Very small association with breast cancer (RR ~1.04, 95% CI 1.00–1.09) — clinical significance uncertain.

**Barnard et al. 2024 (JAMA, population-based cohort, Utah Population Database, final analytic n=78,476 women with endometriosis):** [^barnard2024]
- Among women with deep infiltrating endometriosis and/or ovarian endometriomas: adjusted HR for all ovarian cancers 9.66 (95% CI 7.77–12.00); for type I cancers (clear-cell + endometrioid + mucinous + low-grade serous) HR 18.96 (95% CI 13.78–26.08); for type II (high-grade serous) HR 3.72 (95% CI 2.31–5.98).
- Women with superficial peritoneal endometriosis also had significantly elevated ovarian cancer risk: aHR 2.82 (95% CI 2.27–3.51) — lower than DIE/endometrioma patients but not zero.
- Final analytic cohort: 78,476 women with endometriosis (after exclusion of prevalent cancers, bilateral oophorectomy, etc.) matched 1:5 to 372,430 controls (initial identification n=78,893 before exclusions).
- Implication: risk is subtype-specific by endometriosis morphology and by ovarian cancer histotype; endometrioma/DIE patients carry the highest absolute risk.

**Proposed mechanisms for malignant transformation** (contested; #gap/no-mechanism for most steps):
- Chronic iron overload from hemorrhage → oxidative DNA damage.
- ARID1A, PIK3CA, KRAS mutations found in both endometriomas and adjacent clear-cell/endometrioid cancers, consistent with a clonal precursor relationship.
- Loss of E-cadherin + acquisition of mesenchymal features.
- Chronic SASP-driven inflammatory microenvironment facilitating clonal selection.

**Framing note:** absolute ovarian cancer risk remains low even with endometriosis. The population-attributable risk is uncertain. The Barnard 2024 data show a morphology gradient: endometrioma/DIE patients carry the highest relative risk (aHR ~9.66 for all ovarian cancer), while superficial peritoneal endometriosis also confers a significant but lower elevation (aHR ~2.82). Women with any endometriosis subtype should receive informed counseling; surveillance conversations are most urgent for endometrioma/DIE patients given the substantially higher absolute risk in that subgroup.

### 4. Regression after menopause (estrogen dependence confirmed)

Symptomatic regression of endometriosis after natural menopause is well-documented and represents the primary natural history evidence that the disease is estrogen-driven [^haas2014]. Most women experience relief from pain and regression of lesions within the first 1–2 years after estrogen withdrawal. This is mechanistically consistent with CYP19A1 being the key sustaining factor — once systemic estrogen is absent, local aromatase activity alone is insufficient to fully maintain lesion viability in most cases. Postmenopausal recurrence occurs mainly when exogenous estrogen is reintroduced (HRT) or in obese women (adipose tissue aromatase activity).

## Interventions

Current disease management does not "cure" endometriosis; it suppresses it hormonally or removes lesions surgically. No disease-modifying geroprotective agent is validated.

| Intervention | Mechanism | Evidence summary |
|---|---|---|
| Combined oral contraceptives | Suppress ovulation; reduce cyclic estrogen; some progestogen anti-proliferative effect | First-line; effective pain reduction; not suitable for fertility-seeking patients |
| Progestins (norethindrone, dienogest, depot MPA) | Direct progestogenic suppression of lesion growth | Effective; work despite PR resistance at higher doses; amenorrhea-inducing |
| GnRH agonists/antagonists (leuprolide, elagolix) | Medical menopause via pituitary suppression of LH/FSH | Effective; bone loss limits long-term use; add-back therapy needed |
| Aromatase inhibitors ([[cyp19a1]] inhibitors: letrozole, anastrozole) | Block local estrogen synthesis directly at lesion level | Second-line; used in refractory/postmenopausal cases; combined with progestin |
| Laparoscopic surgical excision | Physical removal of lesion + endometriomas | Gold standard for diagnosis + fertility; high recurrence rate (40–50% at 5 years) |
| Senolytics (investigational) | Target senescent cells in lesions to reduce SASP | Preclinical only; azithromycin tested in a mouse model [^sonehara2025]; no human trial registered as of 2026-06-03 #gap/needs-human-replication |

## Hallmark mapping

| Hallmark | Mechanistic connection |
|---|---|
| [[chronic-inflammation]] | Peritoneal cytokine milieu (IL-6, TNF-α, VEGF); macrophage polarization; pain sensitization |
| [[altered-intercellular-communication]] | SASP from senescent lesion cells; paracrine PGE₂/CYP19A1 feedback; immune crosstalk |
| [[epigenetic-alterations]] | PR-B promoter methylation; HOXA gene silencing; global methylation dysregulation |
| [[cellular-senescence]] | Iron-induced senescence in endometrioma stromal cells; SASP amplification of disease |

## Extrapolation notes

| Dimension | Status |
|---|---|
| Pathways conserved in humans? | yes (human-specific disease; animal models are partial approximations only) |
| Phenotype modeled in animals? | partial — baboon, rodent (surgically-induced) models used; do not reproduce full pathophysiology |
| Human clinical data? | yes — robust epidemiological and mechanistic data in humans |

## Limitations and gaps

- **Diagnostic delay:** no validated non-invasive biomarker; laparoscopy remains required for definitive diagnosis, delaying treatment by 6–10 years on average. #gap/needs-replication for many proposed serum/urine biomarkers.
- **Cancer risk framing:** absolute ovarian cancer risk remains modest even in high-risk endometrioma/DIE subgroups; surveillance guidelines are not yet standardized. #gap/unsourced for evidence-based surveillance intervals.
- **Senescence causality:** it is not established whether senescent cells in lesions are drivers of disease progression or secondary responses to the inflammatory-iron milieu. #gap/no-mechanism
- **Menopause timing:** the association with earlier menopause is based on observational cohort data; ovarian reserve impacts from surgical cystectomy confound the relationship. #gap/needs-replication
- **Postmenopausal persistence:** the prevalence, natural history, and cancer risk in postmenopausal endometriosis are poorly characterized due to small cohort sizes. #gap/needs-replication
- **No disease-modifying therapy:** current interventions are suppressive, not curative; recurrence after surgery is high. Epigenetic-targeting strategies (e.g., EZH2 inhibitors to reverse PR-B silencing) are preclinical. #gap/needs-human-replication

## Footnotes

[^zondervan2020]: doi:10.1056/NEJMra1810764 · Zondervan KT, Becker CM, Missmer SA · *New England Journal of Medicine* 382:1244-1256 (2020) · review · n=not applicable (review of epidemiological and mechanistic literature) · model: human · "affects roughly 10% of reproductive-age women" — widely cited prevalence figure; local PDF: not_oa (closed access), DOI confirmed in archive (1895 citations, citation percentile 100)

[^bulun2019]: doi:10.1210/er.2018-00242 · Bulun SE et al. · *Endocrine Reviews* 40(4):1048-1079 (2019) · review · model: human · comprehensive mechanistic review covering aromatase amplification, progesterone resistance, and immune dysregulation; DOI confirmed in archive (762 citations, citation percentile 100)

[^as-sanie2025]: doi:10.1001/jama.2025.2975 · As-Sanie S, Mackenzie SC, Morrison L, Schrepf A, Zondervan KT, Horne AW, Missmer SA · *JAMA* 334(1):64 (2025) · review · model: human · 2025 JAMA clinical review; diagnostic delay of 6-10 years cited; DOI confirmed in archive (57 citations, citation percentile 100)

[^bulun1999]: doi:10.1677/erc.0.0060293 · Bulun SE, Zeitoun K, Takayama K et al. · *Endocrine Related Cancer* 6(2) (1999) · review/mechanistic · model: human tissue · seminal characterization of CYP19A1 overexpression in endometriotic stromal cells and the PGE₂-aromatase positive feedback loop; DOI confirmed in archive

[^mori2018]: doi:10.1111/jog.13743 · Mori T et al. · *Journal of Obstetrics and Gynaecology Research* (2018) · review · model: human · aromatase as a therapeutic target; aromatase inhibitors in refractory/postmenopausal endometriosis; DOI confirmed via Crossref

[^zhang2023]: doi:10.3390/ijms24086992 · Zhang P, Wang G · *International Journal of Molecular Sciences* 24(8):6992 (2023) · review · model: human tissue · current evidence and mechanisms of progesterone resistance; PR-B methylation, HOXA gene silencing; DOI confirmed in archive (local PDF available, 77 citations, citation percentile 100)

[^maclean2022]: doi:10.3390/cells11040647 · MacLean JA 2nd, Hayashi K · *Cells* 11(4):647 (2022) · review · model: human · progesterone actions and resistance in gynecological disorders; epigenetic mechanisms of PR-B silencing; DOI confirmed via Crossref

[^yan2025]: doi:10.7150/ijbs.123036 · Yan ZY, Zhou WJ, Ye JF et al. · *International Journal of Biological Sciences* (2025) · review · model: human · cellular senescence as a regulator of endometrial physiological remodeling and pathological disorders; DOI confirmed in archive (gold OA, 0 citations — very recent)

[^patel2025]: doi:10.1007/s43032-025-01999-0 · Patel R et al. · *Reproductive Sciences* (2025) · review · model: human · iron, senescence, and fibrosis nexus in endometriosis; DOI confirmed in archive

[^kvaskoff2021]: doi:10.1093/humupd/dmaa045 · Kvaskoff M et al. (incl. Zondervan KT, Missmer SA) · *Human Reproduction Update* 27(2):393-420 (2021) · systematic-review and meta-analysis · n=49 population-based case-control and cohort studies · model: human · endometriosis and cancer; overall ovarian cancer SRR 1.93 (95% CI 1.68–2.22); clear-cell SRR 3.44 (95% CI 2.82–4.42, 5 studies); endometrioid SRR 2.33 (95% CI 1.82–2.98, 5 studies); breast cancer SRR 1.04 (95% CI 1.00–1.09, 20 studies); thyroid cancer SRR 1.39 (95% CI 1.24–1.57, 5 studies); no significant high-grade serous association; 247 citations

[^barnard2024]: doi:10.1001/jama.2024.9210 · Barnard ME et al. (Utah Population Database) · *JAMA* 332(6) (2024) · cohort · n=78,476 women with endometriosis in final analytic cohort (initial identification n=78,893 before exclusions for prevalent cancer/oophorectomy), matched 1:5 to 372,430 controls · model: human · endometrioma/DIE subtype: aHR 9.66 (95% CI 7.77–12.00) all ovarian cancers; aHR 18.96 (95% CI 13.78–26.08) type-I (endometrioid + clear-cell + mucinous + low-grade serous); aHR 3.72 (95% CI 2.31–5.98) type-II (high-grade serous); superficial peritoneal endometriosis: aHR 2.82 (95% CI 2.27–3.51) all ovarian cancers — significantly elevated but lower than DIE/endometrioma subgroup; PMC11255975 (green OA)

[^rzewuska2023]: doi:10.14336/AD.2023.1022 · Rzewuska N et al. · *Aging and Disease* (2023) · case series + literature review · model: human · postmenopausal endometriosis; recurrence on HRT documented; DOI confirmed via PubMed (PMID 37962456)

[^haas2014]: doi:10.1155/2014/746705 · Haas D et al. · *BioMed Research International* (2014) · review/cohort analysis · model: human · postmenopausal endometriosis patients; pre- and postmenopausal factors; earlier menopause association; DOI confirmed via PubMed (PMID 24987703)

[^koukoura2016]: doi:10.3892/mmr.2016.4925 · Koukoura O et al. · *Molecular Medicine Reports* (2016) · review · model: human · DNA methylation in endometriosis; PR-B promoter methylation; CpG island patterns; DOI confirmed via PubMed (PMID 26934855)

[^ahn2017]: doi:10.1016/j.fertnstert.2017.01.009 · Ahn SH et al. · *Fertility and Sterility* (2017) · review · model: human · biomarkers in endometriosis; CA-125 sensitivity/specificity limitations; DOI confirmed via PubMed (PMID 28189296)

[^sonehara2025]: doi:10.1186/s12958-025-01381-4 · Sonehara R et al. · *Reproductive Biology and Endocrinology* (2025) · in-vivo · model: mouse (surgically-induced endometriosis) · azithromycin as a senotherapeutic strategy for preventing endometriosis progression; preclinical only; DOI confirmed via PubMed (PMID 40140889)
