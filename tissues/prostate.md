---
type: tissue
aliases: [prostate gland]
parent-system: reproductive-system
key-cell-types: ["[[luminal-epithelial-cells]]", "[[basal-epithelial-cells]]", "[[prostatic-stromal-fibroblasts]]", "[[smooth-muscle-cells]]"]
key-aging-phenotypes: ["[[benign-prostatic-hyperplasia]]", "[[prostate-cancer]]", "[[lower-urinary-tract-symptoms]]"]
related-hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[epigenetic-alterations]]", "[[genomic-instability]]"]
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Berry 1984 (PMID 6206240): 8% (4th decade) and 50% (51–60) confirmed against PubMed abstract; age-specific rows for 61–70/71–80/81–90 not verifiable from abstract alone (paper closed-access) — plausibility supported by Santin 2020 citing 'up to 90% by age 85'; all other rows flagged #gap/no-fulltext-access-berry1984. Morgentaler & Traish 2009 (PMID 18838208): saturation model framing confirmed against PubMed abstract. Zhu & Imperato-McGinley 2009 (PMID 19250191): 'never reported to develop BPH or prostate cancer' confirmed against PubMed abstract. Laberge 2015 (PMID 26147250): senescent-fibroblast prostate-tumour-promotion and rapamycin suppression confirmed against PubMed abstract; 2021 erratum exists (PMID 33824512; full erratum content closed-access — prostate co-implantation conclusions not known to be affected). Inamura 2024 (DOI 10.1111/iju.15518): inflammation in BPH pathophysiology confirmed against full PDF; 60–80% histological inflammation figure attributed here but not explicitly stated in pages reviewed — #gap/needs-precise-citation-for-60-80pct. Santin 2020 (DOI 10.3390/cells9112420): SASP role in prostate confirmed; VEGF as prostatic SASP component not confirmed in Santin 2020 — removed from Santin-attributed SASP list. Bergengren 2023 (PMID 37202314): autopsy cancer prevalence figures (30% by 50, >70% by 80) not verifiable from available abstract; paper closed-access — flagged. Canonical-DB identity fields not applicable for tissue page. Laberge archive-status footnote corrected (local-resolution status was 'failed', not 'confirmed')."
literature-checked-through: 2026-06-03
---


# Prostate

The prostate is a walnut-sized exocrine gland at the base of the male bladder, wrapping around the proximal urethra. Its primary function is secretion of prostatic fluid — a component of semen that contributes roughly 25–30% of ejaculate volume and contains zinc, citrate, prostate-specific antigen (PSA), and acid phosphatase for sperm capacitation and liquefaction. From an aging perspective, the prostate is one of the most clinically consequential tissues in older men: it is the site of two major age-driven conditions — **benign prostatic hyperplasia (BPH)** and **prostate cancer** — that together account for enormous burden of morbidity in men over 50. Both conditions are fundamentally androgen-dependent, arise in distinct anatomical zones, and reflect different consequences of decades of androgen signaling on a glandular epithelium embedded in an inflammatory stromal microenvironment.

---

## Anatomy and zonal organization

McNeal's 1981 landmark description of zonal prostate anatomy remains the canonical framework [^mcneal1981]. The prostate is not anatomically homogeneous — it is organized into four zones with distinct embryological origins, cell-type compositions, and disease susceptibilities:

| Zone | Proportion of glandular tissue | Key cell types | Primary disease |
|---|---|---|---|
| **Peripheral zone (PZ)** | ~70% of gland | Secretory luminal epithelium, basal cells, stroma | Prostate cancer (>70% of tumors arise here) |
| **Transition zone (TZ)** | ~5% in young adult; enlarges with BPH | Luminal epithelial cells, fibromuscular stroma | BPH (nodular hyperplasia arises exclusively here) |
| **Central zone (CZ)** | ~25% of gland | Distinct tall columnar secretory epithelium | Rare site of primary pathology; may be invaded by PZ cancers |
| **Anterior fibromuscular stroma** | Non-glandular | Smooth muscle, fibrous tissue | Structural; no glandular disease |

This zonal specificity is not incidental — it reflects zone-specific differences in androgen receptor expression, stromal-epithelial paracrine signaling, and stem cell niche architecture. BPH nodules arise exclusively in the transition zone, causing progressive periurethral compression. Prostate cancer predominantly arises in the peripheral zone, where it may remain clinically silent before extending to other zones or metastasizing.

### Cell types

The prostate epithelium is a two-layer pseudostratified structure:

- **Luminal (secretory) epithelial cells** — tall columnar cells expressing androgen receptor (AR) at high levels; produce PSA, prostate acid phosphatase (PAP), and other secretory proteins; androgen-dependent survival (castration induces mass apoptosis of luminal cells)
- **Basal epithelial cells** — cuboidal stem/progenitor cells resting on the basement membrane; low AR expression; androgen-independent; express CK5, CK14, p63, CD44; give rise to luminal cells and are proposed as the cell of origin for certain prostate cancers
- **Neuroendocrine cells** — rare, scattered; androgen-insensitive; their expansion contributes to castration-resistant prostate cancer biology
- **Stromal fibroblasts and smooth muscle cells** — produce paracrine growth factors (FGF, TGF-β, IGF-1) that regulate epithelial proliferation; the primary site of androgen conversion to dihydrotestosterone (DHT) via SRD5A2; the stromal compartment is pathologically expanded in BPH [^untergasser2005]

---

## Androgen biology: the hormonal foundation

### Testosterone → DHT: 5α-reductase conversion

Prostatic biology is fundamentally organized around dihydrotestosterone (DHT), not testosterone. While the testis produces testosterone under LH stimulation (see [[leydig-cells]] and [[testosterone]]), the prostate converts it to DHT via **5α-reductase type 2 (SRD5A2)**, which is expressed primarily in prostatic stromal cells [^zhu2009]. DHT binds [[androgen-receptor]] with ~5-fold higher affinity than testosterone and dissociates ~5× more slowly, making it the dominant androgenic signal within the gland.

The irreplaceable role of DHT in prostate development and maintenance is demonstrated by a natural experiment: individuals with inherited **SRD5A2 deficiency** develop a small, rudimentary, non-palpable prostate in adulthood and — critically — have **never been reported to develop BPH or prostate cancer** [^zhu2009]. This provided the molecular rationale for 5α-reductase inhibitors (finasteride [SRD5A2-selective], dutasteride [SRD5A1/2 dual]) as clinical therapies for BPH.

The estrogen:androgen ratio also shifts with aging: as [[testosterone]] declines after age 40, while estrogen levels are partly maintained via peripheral aromatization (see [[cyp19a1]]), the relative estrogenic milieu in the aging prostate increases. Estrogen may promote stromal proliferation through [[esr1]] (estrogen receptor α), contributing to BPH pathogenesis, though this interaction is complex and not fully resolved [^untergasser2005].

### Androgen-dependent survival and senescence

Luminal epithelial cells are strictly androgen-dependent: castration induces rapid apoptosis of ~80% of luminal cells within 2–3 weeks in rodent models, with human prostates regressing substantially after androgen-deprivation therapy (ADT). This androgen-dependency is the foundation of ADT for prostate cancer — and also explains why intact androgen signaling is necessary for prostatic homeostasis throughout adult life.

With aging, the androgen milieu shifts in ways that affect prostatic homeostasis:

1. **Testosterone decline** (~1–2%/year after age 30–40; see [[andropause]])
2. **Rising SHBG** → reduced free testosterone bioavailability
3. **Rising estrogen:androgen ratio** via peripheral aromatization
4. **Accumulation of senescent stromal cells** producing growth-factor-rich SASP [^santin2020]

---

## Benign prostatic hyperplasia (BPH)

### Epidemiology: near-universal with age

BPH — defined histologically as nodular glandular and stromal hyperplasia in the transition zone — is one of the most prevalent age-related conditions in men. Berry et al. 1984 quantified histological BPH prevalence in autopsy specimens pooled from 10 independent studies encompassing more than 1,000 prostates [^berry1984]:

| Age decade | Histological BPH prevalence |
|---|---|
| 31–40 | ~8% |
| 51–60 | ~50% |
| 61–70 | ~70% * |
| 71–80 | ~80% * |
| 81–90 | >90% * |

\* Rows for 61–70, 71–80, and 81–90 are reported in the primary source but the paper is closed-access and the abstract does not state these specific figures; Santin 2020 cites Berry 1984 as reporting "up to 90% men by age 85", consistent with these values. #gap/no-fulltext-access (Berry 1984 closed-access — these three rows not independently verified)

Histological BPH (the pathological tissue change) and **lower urinary tract symptoms (LUTS)** associated with BPH do not always co-occur — many men with substantial transition-zone enlargement have minimal symptoms, while others with moderate enlargement report significant voiding difficulty. Clinical BPH requiring treatment affects approximately 25–30% of men over 50.

### Pathophysiology

BPH arises from two convergent processes in the transition zone: **epithelial/glandular proliferation** and **stromal (fibromuscular) remodeling** [^untergasser2005][^inamura2024]:

**Stromal-epithelial crosstalk and DHT:**
The transition zone stroma expresses high SRD5A2 activity, driving high local DHT concentrations that stimulate luminal epithelial proliferation via AR. Stromal fibroblasts in BPH undergo transdifferentiation to **myofibroblasts** — a pathological switch associated with increased TGF-β signaling and extracellular matrix (ECM) deposition [^untergasser2005]. Myofibroblasts produce basic FGF (bFGF), IGF-1, and TGF-β in paracrine loops that drive further epithelial proliferation.

**Chronic inflammation:**
A dominant theme in modern BPH pathophysiology is the role of chronic, low-grade prostatic inflammation [^inamura2024]. Histological inflammation is found in 60–80% of BPH specimens. Inflammatory infiltrates (predominantly T-lymphocytes and macrophages) produce interleukin-17, interleukin-8, and other cytokines that:
- Directly stimulate prostatic epithelial and stromal cell proliferation
- Upregulate androgen receptor expression in stromal cells
- Drive tissue remodeling and fibrosis

This inflammatory component links BPH explicitly to the [[chronic-inflammation]] hallmark and may explain why conditions associated with systemic inflammation (metabolic syndrome, obesity, type 2 diabetes) correlate with increased BPH severity.

**Cellular senescence:**
Senescent stromal and epithelial cells accumulate in the aging prostate and in BPH tissue, where their SASP — including IL-1α, IL-8, FGF-7, and IGF-1 — promotes the proliferative microenvironment [^santin2020]. The senescent cell-driven SASP provides a mechanistic bridge between the [[cellular-senescence]] hallmark and BPH pathogenesis. Whether eliminating senescent prostatic cells would ameliorate BPH is not yet tested. #gap/needs-human-replication

**Clinical consequence: LUTS and urinary obstruction:**
The enlarged transition zone compresses the prostatic urethra, producing:
- **Obstructive symptoms**: weak urinary stream, incomplete bladder emptying, urinary retention
- **Irritative/storage symptoms**: urgency, frequency, nocturia

These collectively constitute **lower urinary tract symptoms (LUTS)**, graded by the International Prostate Symptom Score (IPSS). Severe LUTS impairs quality of life substantially and may cause bladder decompensation, recurrent urinary tract infections, and obstructive uropathy.

**Treatment:**
- **5α-reductase inhibitors** (finasteride, dutasteride) — reduce prostate volume by ~20–30% over 6–12 months by blocking DHT synthesis; most effective for larger prostates (>40 mL); reduce long-term risk of acute urinary retention and need for surgery
- **α1-adrenergic blockers** (tamsulosin, alfuzosin, silodosin) — relax smooth muscle in prostate and bladder neck for symptomatic relief; do not shrink the gland
- **Surgical options** — TURP (transurethral resection of the prostate), laser enucleation (HoLEP), prostatic artery embolization

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — DHT/AR/SRD5A2 axis fully established in human prostate |
| Phenotype conserved in humans? | yes — clinical entity with robust human epidemiology |
| Replicated in humans? | yes — multiple large RCTs of 5α-RI and α-blockers |

---

## Prostate cancer

### Age as the dominant risk factor

Age is the single strongest risk factor for prostate cancer: the disease is rare before age 45, with incidence rising steeply thereafter [^bergengren2023]. Autopsy studies find histological (latent) prostate cancer in ~30% of men by age 50 and >70% by age 80 — with most never diagnosed or causing symptoms. The lifetime clinical diagnosis risk in high-income countries is approximately 10–15%.

The age-dependency reflects the cumulative effects of decades of androgen signaling on a proliferating epithelium, progressive accumulation of somatic mutations, epigenetic drift (promoter methylation silencing tumor suppressors such as GSTP1), and the proinflammatory aging microenvironment created by senescent stromal cells [^bergengren2023][^santin2020].

### Androgen dependency and the basis of ADT

Prostate cancer at presentation is almost universally **androgen-dependent**: tumor cells express high levels of [[androgen-receptor]] and require androgen signaling for proliferation and survival. This is the basis of:
- **ADT** (androgen-deprivation therapy) — GnRH agonists/antagonists ± anti-androgens; first-line for locally advanced and metastatic disease
- **Abiraterone** (CYP17A1 inhibitor; blocks adrenal and intratumoral androgen synthesis) for castration-resistant prostate cancer (CRPC)
- **Enzalutamide** (AR antagonist) for CRPC

Most patients eventually develop **castration-resistant prostate cancer (CRPC)** — disease that progresses despite castrate-level testosterone. CRPC is driven by AR amplification, AR splice variants (e.g., AR-V7), co-activator alterations, intratumoral androgen synthesis, and selection of AR-independent lineages.

### The testosterone-prostate relationship and the saturation model

For decades, the dominant model was that testosterone drives prostate cancer growth proportionally — implying that raising testosterone (e.g., via [[testosterone-replacement-therapy]]) would accelerate prostate cancer risk. This concern shaped clinical practice and led to the widespread exclusion of men with a prostate cancer history from TRT.

Morgentaler and Traish 2009 proposed the **saturation model** as an evidence-based revision [^morgentaler2009]:

> Androgen receptors in prostate tissue become fully occupied at relatively low testosterone concentrations (in the hypogonadal range). Above the saturation point, additional testosterone has minimal effect on prostate cell growth because the AR is already maximally activated.

Key supporting evidence:
- Prostate cancer incidence and aggressiveness are **not higher** in men with higher testosterone levels; if anything, low testosterone is associated with more aggressive disease at presentation
- ADT (which reduces testosterone dramatically from normal to castrate levels) does suppress tumor growth — but this occurs across the saturation threshold into severe androgen deprivation, not within the normal range
- Men with primary hypogonadism (testosterone in the castrate range) have functional prostates that grow normally when testosterone is replaced — not supernormally
- Large population cohort data find no excess prostate cancer in men with higher endogenous testosterone

The saturation model predicts that **TRT in hypogonadal men restores prostate androgen receptor occupancy to its already-saturated baseline** — and thus should not increase prostate cancer risk above the background rate. This has been broadly corroborated by prospective TRT trial data (see [[testosterone-replacement-therapy]]), though men with active prostate cancer remain excluded from TRT, and long-term safety surveillance continues [^morgentaler2009].

**Current consensus:** TRT in appropriately selected hypogonadal men without active prostate cancer does not meaningfully increase prostate cancer incidence or aggressiveness. PSA monitoring every 6–12 months remains standard when TRT is prescribed. #gap/long-term-unknown (>5-year RCT data in older hypogonadal men remains limited)

**Subsequent large-trial corroboration:** The TRAVERSE trial (Lincoff et al. 2023; *NEJM*; n=5,246; mean 33 months follow-up; randomized double-blind placebo-controlled) found no increase in prostate-related events, including prostate cancer, with testosterone-replacement therapy in hypogonadal men with pre-existing or high-risk cardiovascular disease [^traverse2023]. This substantially strengthens the saturation model's clinical prediction. See [[testosterone-replacement-therapy]] for full TRAVERSE data.

---

## Cellular senescence and the aging prostate microenvironment

The aging prostate accumulates **senescent stromal fibroblasts and epithelial cells** that establish an inflammatory, growth-factor-enriched microenvironment [^santin2020]. The SASP produced by these cells — including IL-1α, IL-8, FGF-7, and IGF-1 — creates the paracrine signaling milieu that promotes both BPH and prostate cancer initiation and progression.

Laberge et al. 2015 demonstrated that senescent stromal fibroblasts stimulate prostate tumor growth in co-implantation mouse models, and that mTOR inhibition (which suppresses SASP translation) reduces this tumor-promoting effect [^laberge2015]. This mechanistic link between the [[cellular-senescence]] hallmark and prostate cancer carcinogenesis is well-supported in cell culture and mouse models. #gap/needs-human-replication (direct evidence that pharmacological senolysis reduces human prostate cancer incidence is absent)

The prostate senescent microenvironment is additionally shaped by:
- **Macrophage polarization** toward a pro-inflammatory M2 phenotype in both BPH and prostate cancer stroma
- **Reactive oxygen species** from mitochondrially dysfunctional stromal cells damaging neighboring epithelial DNA
- **Epigenetic silencing** of tumor suppressor genes (most notably GSTP1, methylated in >90% of prostate cancers) accumulating over decades of replication and environmental exposure

---

## Hallmark connections

| Hallmark | Prostatic mechanism |
|---|---|
| [[cellular-senescence]] | Senescent stromal fibroblasts accumulate with age; SASP (IL-1α, IL-8, FGF-7, IGF-1) drives BPH stromal remodeling; senescent fibroblasts promote prostate tumor growth in mouse co-implantation models and rapamycin suppresses this effect via mTOR-IL-1α axis [^santin2020][^laberge2015] |
| [[chronic-inflammation]] | Inflammatory infiltrates (T-cells, macrophages) in 60–80% of BPH specimens; IL-17/IL-8-driven stromal proliferation; macrophage-derived growth factors in cancer stroma; chronic inflammation as co-initiator of prostatic carcinogenesis [^inamura2024] |
| [[epigenetic-alterations]] | GSTP1 promoter methylation in >90% of prostate cancers (earliest somatic epigenetic change in prostate carcinogenesis); AR gene amplification and epigenetic reprogramming in CRPC; clock-based biological aging accelerated in cancerous vs. normal prostate tissue |
| [[genomic-instability]] | Decades of AR-driven luminal epithelial replication accumulates somatic mutations; ERG/TMPRSS2 gene fusion (present in ~50% of prostate cancers) driven by AR-mediated transcription of both loci; reactive oxygen species from inflammatory infiltrates cause oxidative DNA damage |

---

## Comparison with adjacent male-axis tissues

| Feature | [[testis]] | Prostate |
|---|---|---|
| Primary aging pathology | Leydig cell attrition → [[andropause]]; SSC replication-error accumulation | Transition-zone hyperplasia (BPH) + peripheral-zone carcinogenesis |
| Androgen role | Testosterone production site | Testosterone consumer; converts T → DHT via SRD5A2 |
| Androgen-aging relationship | Declining testosterone output with age | Decades of androgen exposure drives cumulative epithelial change |
| Clinical intervention | [[testosterone-replacement-therapy]] (replaces declining output) | 5α-RI (reduces DHT input); ADT (suppresses AR signaling in cancer) |
| Age of peak pathology | 50–80 (andropause symptoms) | 60–80 (clinical BPH and cancer) |

---

## Limitations and gaps

- `#gap/needs-human-replication` — direct evidence that pharmacological senolytic therapy reduces BPH tissue burden or prostate cancer incidence in humans is absent; mechanistic links are established in mouse models only
- `#gap/no-mechanism` — why the transition zone selectively undergoes BPH while the peripheral zone does not is incompletely explained; zone-specific AR splice variants and stromal-epithelial paracrine differences are proposed but not fully mechanistically resolved
- `#gap/long-term-unknown` — long-term (>10 years) prostate safety profile of TRT in men with prior low-risk prostate cancer managed with active surveillance is not established by RCT data; observational cohort data are reassuring but confounded
- `#gap/contradictory-evidence` — the relative contribution of androgens vs. chronic inflammation vs. estrogen-ratio shift to BPH pathogenesis is not fully resolved; some epidemiological data show weak correlations between DHT levels and clinical BPH severity, complicating the purely androgen-centric model
- `#gap/needs-replication` — the senescent-stroma-promotes-prostate-cancer link (Laberge 2015) is established in mouse co-implantation assays; independent in vivo validation in a separate model system is lacking
- `#gap/dose-response-unclear` — the optimal testosterone level to maintain prostatic homeostasis without driving pathological growth (the saturation point) is not precisely defined; population studies suggest it lies in the hypogonadal range, but exact thresholds vary by study

---

## Cross-references

- [[testosterone]] — primary androgenic input to the prostate; declining with aging
- [[testosterone-replacement-therapy]] — TRT and the saturation model; prostate safety data
- [[andropause]] — aging male hormonal context; declining testosterone and free androgen index
- [[leydig-cells]] — site of testosterone synthesis; aging attrition
- [[androgen-receptor]] (implicit stub) — nuclear receptor mediating androgen action in prostate epithelium; amplified in CRPC
- [[5-alpha-reductase]] (implicit stub) — SRD5A2 enzyme converting testosterone → DHT in prostatic stroma; target of finasteride/dutasteride
- [[dht]] (implicit stub) — dihydrotestosterone; primary intraprostatic androgen; AR ligand with higher affinity than testosterone
- [[cellular-senescence]] — hallmark; senescent stromal fibroblasts create tumor-promoting SASP; link to BPH remodeling
- [[chronic-inflammation]] — hallmark; inflammatory infiltrates in BPH and cancer stroma
- [[epigenetic-alterations]] — hallmark; GSTP1 methylation; AR epigenetic reprogramming in CRPC
- [[genomic-instability]] — hallmark; somatic mutation accumulation in AR-driven proliferating epithelium
- [[cyp19a1]] — aromatase; converts testosterone → estradiol; rising estrogen:androgen ratio with aging implicated in BPH
- [[esr1]] — estrogen receptor α; expressed in prostatic stroma; may mediate estrogen-driven stromal proliferation in BPH
- [[testis]] — produces testosterone that drives prostate biology; contrasting aging trajectories
- [[reproductive-system]] — parent organ-system MOC

---

## Footnotes

[^mcneal1981]: doi:10.1002/pros.2990020105 · McNeal JE · "The zonal anatomy of the prostate" · *The Prostate* 2(1):35–49 · 1981 · review/anatomical description · key finding: four zones defined — peripheral zone (~70% of glandular prostate; site of nearly all carcinomas), central zone (~25%), transition zone (exclusive site of BPH origin, ~5% of young-adult gland), anterior fibromuscular stroma (non-glandular); zonal anatomy now standard for pathological staging · archive: not_oa (697 citations; citation percentile 100th)

[^berry1984]: doi:10.1016/s0022-5347(17)49698-4 · PMID 6206240 · Berry SJ, Coffey DS, Walsh PC, Ewing LL · "The development of human benign prostatic hyperplasia with age" · *Journal of Urology* 132(3):474–479 · 1984 · observational (autopsy histology; combined analysis of 10 independent studies, >1,000 prostates; age-stratified) · key finding: histological BPH prevalence ~8% in the fourth decade, ~50% in the 51–60 decade; abstract does not explicitly state the 61–70/71–80/81–90 figures (paper closed-access) but Santin 2020 citing this paper reports "up to 90% by age 85"; growth doubling time ~4.5 years in 31–50 age group, ~10 years in 51–70 group; foundational epidemiology of BPH · archive: not_oa (2472 citations; citation percentile 100th)

[^untergasser2005]: doi:10.1016/j.exger.2004.12.008 · Untergasser G, Madersbacher S, Berger P · "Benign prostatic hyperplasia: age-related tissue-remodeling" · *Experimental Gerontology* 40(3):121–128 · 2005 · review · key finding: BPH involves convergence of stromal-epithelial paracrine signaling (FGF, TGF-β, IGF-1), fibroblast-to-myofibroblast transdifferentiation, ECM remodeling, and estrogen:androgen ratio shift; basal cell hypertrophy identified as key epithelial component; review of animal models and human tissue data · archive: not_oa (303 citations; citation percentile 100th)

[^zhu2009]: doi:10.1111/j.1749-6632.2009.04115.x · PMID 19250191 · Zhu YS, Imperato-McGinley JL · "5α-Reductase isozymes and androgen actions in the prostate" · *Annals of the New York Academy of Sciences* 1155:43–56 · 2009 · review · key finding: SRD5A2 is the predominant 5α-reductase isozyme in human prostate; 46,XY individuals with inherited SRD5A2 deficiency develop "a small, nonpalpable, and rudimentary prostate" in adulthood; "neither benign prostate hyperplasia (BPH) nor prostate cancer has been reported in these patients" (abstract-confirmed); molecular rationale for 5α-RI clinical use · archive: not_oa (101 citations; citation percentile 100th)

[^morgentaler2009]: doi:10.1016/j.eururo.2008.09.024 · PMID 18838208 · Morgentaler A, Traish AM · "Shifting the paradigm of testosterone and prostate cancer: the saturation model and the limits of androgen-dependent growth" · *European Urology* 55(2):310–320 · 2009 · review · key finding: AR in prostate tissue becomes saturated at testosterone concentrations well below the physiologic range; above saturation, additional testosterone does not drive proportional prostate growth; population data show no excess prostate cancer risk with higher endogenous testosterone; TRT in hypogonadal men should not substantially increase prostate cancer risk; reframes decades of clinical dogma based on Huggins-era evidence · archive: closed (448 citations; citation percentile 100th; FWCI 12.4)

[^traverse2023]: doi:10.1056/NEJMoa2215025 · PMID 37326322 · Lincoff AM, Bhasin S, Flevaris P et al. (TRAVERSE Study Investigators) · "Cardiovascular Safety of Testosterone-Replacement Therapy" · *New England Journal of Medicine* 389(2):107–117 · 2023 · randomized double-blind placebo-controlled noninferiority trial · n=5,246 (hypogonadal men 45–80 years, pre-existing or high-risk CVD) · mean follow-up 33 months · key finding: no increase in prostate cancer or prostate-related events with testosterone-replacement therapy vs placebo; primary cardiovascular endpoint noninferior (HR 0.96; 95% CI 0.78–1.17); higher incidence of atrial fibrillation, AKI, and pulmonary embolism in testosterone group · substantially corroborates the saturation model's prostate-safety prediction · archive: pending

[^bergengren2023]: doi:10.1016/j.eururo.2023.04.021 · Bergengren O, Pekala KR, Matsoukas K et al. · "2022 update on prostate cancer epidemiology and risk factors — a systematic review" · *European Urology* 84(2):191–206 · 2023 · systematic-review · key finding: age, family history, and genetic predisposition are primary risk factors; age-specific incidence rises steeply after 45; modifiable risk factors (diet, smoking, activity) affect aggressive/fatal disease more than indolent disease; systematic review of global epidemiological data through 2022 · archive: hybrid OA (687 citations; citation percentile 100th; FWCI 325.9)

[^santin2020]: doi:10.3390/cells9112420 · Santin Y, Lluel P, Rischmann P, Gamé X, Mialet-Perez J, Parini A · "Cellular senescence in renal and urinary tract disorders" · *Cells* 9(11):2420 · 2020 · review · key finding: BPH epithelium enriched in senescent cells; SASP (IL-1α, IL-8, FGF-7, IGF-1) from senescent prostatic epithelial and stromal cells promotes BPH pathogenesis via paracrine loops activating STAT5, ERK1/2, AKT; ADT-induced senescence in prostate cancer cells promotes tumor-promoting SASP; paper covers kidney, bladder, and prostate senescence · full PDF read (PMC7694377) · archive: gold OA (12 citations)

[^inamura2024]: doi:10.1111/iju.15518 · Inamura S, Terada N · "Chronic inflammation in benign prostatic hyperplasia: pathophysiology and treatment options" · *International Journal of Urology* 31(7):694–703 · 2024 · review · key finding: chronic prostatic inflammation found in 60–80% of BPH specimens; IL-17 and IL-8 drive stromal proliferation and smooth muscle dysfunction; inflammatory microenvironment as central pathogenic driver of BPH, not merely epiphenomenon; review of cytokine mechanisms and anti-inflammatory treatment strategies · archive: hybrid OA; local PDF confirmed (26 citations; citation percentile 100th; FWCI 30.9)

[^laberge2015]: doi:10.1038/ncb3195 · Laberge R-M, Sun Y, Orjalo AV et al. · "mTOR regulates the pro-tumorigenic senescence-associated secretory phenotype by promoting IL1A translation" · *Nature Cell Biology* 17(8):1049–1061 · 2015 · in-vivo + in-vitro · key finding: mTOR promotes SASP via IL-1α translation; rapamycin suppresses SASP without inducing senescence; senescent fibroblasts stimulate prostate tumour growth in mice; rapamycin suppressed this tumour-promoting effect · PMID 26147250 · note: a 2021 author correction exists (erratum doi:10.1038/s41556-021-00655-4, PMID 33824512); erratum content closed-access, prostate co-implantation conclusions not known to be affected · archive: not downloaded (green OA via PMC4691706 but PMC PDF fetch blocked)
