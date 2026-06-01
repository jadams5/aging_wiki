---
type: hallmark
aliases: [compromised immune surveillance, age-related immune dysfunction, immune-aging hallmark, immunosurveillance failure, disabled adaptive immunity]
category: integrative
introduced: proposed
sens-correspondence: ["[[apoptosenes]]"]
key-pathways: ["[[jak-stat-pathway]]", "[[mtor]]", "[[il-7-signaling]]", "[[notch-pathway]]", "[[wnt-beta-catenin]]"]
key-phenotypes: ["[[immunosenescence]]", "[[cancer]]", "[[clonal-hematopoiesis]]", "[[anemia-of-aging]]", "[[frailty]]"]
mechanistic-tier: integrative
intervention-tractability: moderate
caused-by: ["[[stem-cell-exhaustion]]", "[[telomere-attrition]]", "[[cellular-senescence]]", "[[chronic-inflammation]]", "[[epigenetic-alterations]]"]
causes: ["[[chronic-inflammation]]", "[[cancer]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Fahy 2019 (acel.13028): primary PDF verified — enrollment corrected 9→10 (1 dropout), epigenetic age −1.5yr vs baseline confirmed, −6.5yr/yr acceleration confirmed, GrimAge 2yr decrease confirmed. Mannick 2021 (S2666-7568-21-00062-3): primary PDF verified — Phase 2b (19% vs 28%) and Phase 3 failure (26% vs 25%) confirmed. Amor 2020 (s41586-020-2403-9): primary PDF verified — lifespan extension in aged wild-type mice qualified (not in main paper text; lung adenocarcinoma survival + liver fibrosis reversal confirmed). Mannick 2014 (scitranslmed.3009892): not_oa; verified via PubMed efetch abstract (PMID 25540326) — ~20% vaccine response improvement and PD-1 reduction confirmed. Bredenkamp 2014: DOI corrected dev.115899→dev.103614 (PMID 24715454 confirmed via PubMed). Genah 2026: real paper confirmed (PMID 41888548; mechanism matches abstract). Heng 2005: DOI 10.4049/jimmunol.175.5.2982 confirmed via Crossref (PMID 16116185). GPNMB footnotes: zhang2025 DOI confirmed 10.1080/21645515.2025.2479229 (PMID 40088037); cao2024 DOI confirmed 10.1016/j.biopha.2024.117433 (PMID 39260327). Nikolich-Žugich 2018, Goronzy 2019, Franceschi 2014: not_oa or pending; used as review citations only, no quantitative primary claims extracted to this page. Dai 2024, Sato 2022, Zhang 2023: not yet downloaded; claims are mechanistic-qualitative only, consistent with PubMed abstracts."
literature-checked-through: 2026-05-07
---

# Disabled Adaptive Immunity

> **Schema note (escalate to main agent):** The `type: hallmark` schema does not define a value for `introduced: proposed` — the schema only shows `2013` and `2023`. This page uses `proposed` as an extension to capture candidate-hallmark status not covered by the current enum. The field `literature-checked-through` is defined on `type: compound / intervention / biomarker / hypothesis` but not on `type: hallmark`. It is included here because of the high-velocity biotech intervention content, per seeder discretion (R25 recency rationale). Both deviations are flagged for CLAUDE.md schema update.

Age-associated collapse of adaptive immune surveillance — the progressive failure of T cells, B cells, NK cells, and the thymus to mount effective responses against novel pathogens, emerging tumors, and accumulating senescent cells. **This is not one of López-Otín's 12 formally adopted hallmarks** (the 2023 revision added disabled macroautophagy, chronic inflammation, and dysbiosis; adaptive immune failure was not among them). It is a **proposed candidate hallmark** — the mechanistic case for elevation has been made repeatedly in the literature (Nikolich-Žugich 2018 [^nikolich2018]; Goronzy & Weyand 2019 [^goronzy2019]; Franceschi & Campisi 2014 [^franceschi2014]) and the biotech intervention landscape is now rich enough to warrant hallmark-level synthesis.

**Differentiation from related wiki pages:** [[immunosenescence]] is the phenotype-level page covering clinically observable immune decline (IRP, vaccine response, infection susceptibility, compartment changes). This page is the **mechanism-level and biotech-intervention synthesis** — why the adaptive immune surveillance machinery fails at a molecular level, and what the intervention pipeline looks like. Do not duplicate claims from [[immunosenescence]]; cross-link instead.

---

## Why a hallmark candidate? The case for and against

### The case for elevation

Three arguments justify treating disabled adaptive immunity as a distinct hallmark-level entity:

1. **The "Side B" surveillance axis.** The dominant geroscience framing emphasizes damage accumulation (genomic instability, senescent cells) and impaired removal of misfolded proteins. An underappreciated complementary axis is the failure of the immune system to *surveil and clear* damaged cells — senescent cells, pre-neoplastic clones, and pathogen-infected cells. When the clearance axis fails, even modest increases in damage production become amplified pathologically. The 2020 discovery that uPAR-targeted CAR-T cells could clear senescent cells and restore tissue homeostasis [^amor2020] concretized this surveillance framing — immune engineering can functionally substitute for the failing surveillance apparatus.

2. **Canonical proposals exist.** Nikolich-Žugich 2018 explicitly frames immunosenescence as an aging hallmark, arguing it meets the same criteria as the López-Otín set: (a) it accumulates with aging, (b) experimental acceleration phenocopies aging, (c) experimental amelioration attenuates aging phenotypes [^nikolich2018]. The Fahy 2019 TRIIM trial demonstrated that restoring thymic output in humans reversed an age-associated composite immune profile and produced a mean −1.5 year epigenetic age reversal [^fahyTriim2019] — the most direct human "reversal-of-immunological-aging" evidence available.

3. **The intervention landscape demands hallmark-level navigation.** At least four distinct mechanism classes are now in clinical trials specifically targeting immune aging (thymic regeneration, mTOR inhibition for immune function, CAR-T senolytic clearance of immune-senescent populations, IL-15/NK-axis stimulation). Organizing this landscape requires a hallmark-level synthesis page.

### The case against (honest assessment)

The primary reason López-Otín et al. have not adopted this is strong: **adaptive immune failure is plausibly downstream of hallmarks that are already in the framework.** HSC myeloid bias (stem-cell-exhaustion → reduced lymphoid output) + thymic involution (cellular-senescence in thymic stromal cells + epigenetic-alterations in TECs) + telomere attrition in T cell clones adequately account for most of the adaptive immune decline. Under this view, the adaptive immune system is a victim of upstream hallmarks, not a primary damage source of its own. Adding it would risk making the hallmark set less parsimonious.

**Resolution:** This wiki treats it as a proposed integrative candidate hallmark. The `category: integrative` designation is consistent with this — integrative hallmarks in the López-Otín schema are themselves downstream consequences (stem-cell-exhaustion, altered-intercellular-communication). The distinction from those examples is debatable; the debate is documented here, not resolved.

---

## Mechanistic core: what specifically fails

### Thymic involution

The thymus is the sole organ that produces new naive T cells from bone-marrow-derived precursors. Involution begins at puberty, is driven by sex steroid suppression of thymic epithelial cell (TEC) proliferation (androgen receptor signaling suppresses FOXN1 transcription in cortical TECs), and produces near-complete parenchyma-to-adipose replacement by age 60 in most individuals [^nikolich2018]. Thymic output declines from ~16% of the naive T cell pool in young adults to <1% by old age [^goronzy2019].

Key molecular drivers:
- **FOXN1** — the master transcription factor for TEC identity and function; declines with age in both cortical and medullary TECs. FOXN1 restoration in aged mice (achieved via lentiviral delivery or genetic conditional reactivation) reverses thymic involution and restores naive T cell output [^bredenkamp2014] #gap/needs-human-replication.
- **KGF/FGF7 axis** — keratinocyte growth factor supports TEC proliferation; used clinically (palifermin) to reduce chemotherapy-induced thymic damage post-HSCT; aging-rejuvenation use is preclinical.
- **Sex steroid suppression** — castration or LHRH agonist administration transiently restores thymic output in both mouse models and human HSCT recipients; Heng et al. 2005 demonstrated castration restored early T lineage progenitors in thymic involution mouse models [^heng2005].
- **Nitazoxanide** (FDA-approved antiparasitic) — a 2026 Cell Death and Differentiation report found it promotes FOXN1 expression in TECs via a proteasome inhibition → ER stress → unfolded protein response (UPR) → autophagy axis, accelerating thymic recovery post-irradiation in mice [^genah2026] #gap/needs-human-replication. This is a notable recent result: nitazoxanide's established safety profile could accelerate clinical translation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FOXN1 drives human TEC identity; involution is universal |
| Phenotype conserved in humans? | yes — thymic adipose replacement documented radiologically in humans |
| Replicated in humans? | yes (involution); no (regeneration — single TRIIM trial) |

### T cell repertoire contraction

Repeated antigen stimulation and homeostatic proliferation (the primary mode of maintaining naive T cell numbers after thymic output fails) erode T cell telomeres → replicative senescence → accumulation of TEMRA cells (terminally differentiated effector memory re-expressing CD45RA). See [[immunosenescence]] for compartment detail. The dominant driver of repertoire collapse in CMV-seropositive individuals is chronic CMV-specific CD8+ clonal expansion ("memory inflation"), which can consume 10–50% of the total CD8+ compartment [^nikolich2018] #gap/no-fulltext-access.

T cell senescence markers relevant to surveillance failure:
- **KLRG1+, CD57+, CD28−**: canonical terminal differentiation / senescence markers
- **Loss of TCR diversity**: age-associated contraction of the unique clonotype count reduces novel-antigen recognition breadth
- **PD-1 upregulation with age**: inhibitory receptor that accumulates on exhausted T cells; forms part of the Mannick 2014 immune aging mechanism

### B cell remodeling

Age-associated remodeling of the B cell compartment reduces antibody quality and breadth:
- Naive B cell output from bone marrow declines (HSC myeloid bias; see [[stem-cell-exhaustion]])
- Impaired class-switch recombination and somatic hypermutation → lower-avidity antibodies
- Reduced germinal center reactions → smaller, weaker primary responses to novel antigens
- **Age-associated B cells (ABCs)** expand: characterized by CD21−CD11c+T-bet+ZEB2+ phenotype; poor GC responders; associated with autoimmune phenomena. ZEB2 is the transcription factor required for ABC differentiation in both mice and humans — JAK1/3 inhibitors reduce ABC accumulation [^dai2024] #gap/needs-replication in aging-specific context.
- **CD153+CD30L+ senescence-associated T cells** drive ABC accumulation in aged kidneys via CD153/CD30 signaling, promoting tertiary lymphoid tissue formation and organ injury [^sato2022] — a specific senescence-ABC-organ damage circuit.

### NK cell functional decline

NK cells show a paradoxical pattern: **numbers increase but per-cell cytotoxicity decreases** (the NK paradox). Key changes:
- Shift toward mature CD56dim subsets; CD56bright subset (cytokine-producing, less cytotoxic) is relatively reduced
- Reduced **natural cytotoxicity receptors** (NKp30, NKp46) on NK cells — the most consistent activating-receptor change [^almeida2011nk]. NK-cell **NKG2D is comparatively preserved / inconsistent** across studies; the robust NKG2D decline is on aged *T* cells, not NK cells — a common cell-type conflation (see [[processes/senescence-immune-surveillance]] for the reconciled evidence and CMV confounding)
- Increased inhibitory receptor expression
- Net effect: cancer immunosurveillance is impaired despite numerically normal or elevated NK counts

See [[immunosenescence]] for compartment epidemiology; the mechanism behind per-cell cytotoxicity decline is incompletely characterized #gap/no-mechanism.

### HSC myeloid bias and clonal hematopoiesis

HSC aging produces reduced lymphoid output — fewer T and B cell progenitors — directly contributing to adaptive immune decline. Clonal hematopoiesis of indeterminate potential (CHIP; *DNMT3A*, *TET2*, *ASXL1* mutations) in aged HSCs further distorts immune output by giving growth-advantaged clones disproportionate representation in all downstream lineages. See [[stem-cell-exhaustion]] and [[clonal-hematopoiesis]] for the full CHIP evidence base.

### Senescent immune cells themselves

Senescent T cells (TEMRA, KLRG1+CD57+) accumulate with age and produce a SASP-like secretome of pro-inflammatory cytokines that *accelerates* the senescent cell burden more broadly — a paracrine loop that simultaneously degrades adaptive immune function and worsens [[chronic-inflammation]]. This is the key mechanistic link that makes disabled adaptive immunity *also* an upstream contributor to inflammaging, not purely a downstream consequence.

### Macrophage and innate immune dysfunction

Aged macrophages show reduced efferocytosis (clearance of apoptotic and senescent cells), altered M1/M2 polarization balance (increased baseline inflammatory tone), and reduced TLR responsiveness to novel pathogens. Reduced efferocytosis means senescent cells that should be cleared by macrophage surveillance persist longer, compounding the SASP burden.

---

## Functional consequences

- **Cancer immunosurveillance failure** → elevated cancer incidence with age; see [[cancer]] for the full aging-cancer paradox. Note: accelerating cancer risk with age is not solely attributable to accumulated somatic mutations — immune surveillance failure is a parallel and potentially independent driver.
- **Vaccine non-response** → detailed in [[immunosenescence]] with dose and adjuvant data (Fluzone HD +24.2% relative efficacy; Shingrix 89.8% in 70+).
- **Infection susceptibility** → influenza, pneumococcal disease, herpes zoster disproportionately fatal in elderly.
- **Failed senescent-cell clearance** → NK cells and macrophages normally recognize and kill senescent cells via activating receptor engagement (canonical mechanism: [[processes/senescence-immune-surveillance]]); age-related loss of NK cytotoxicity reduces this immunological senolytic axis, paradoxically increasing the role that pharmacological senolytics must play.
- **Autoimmunity paradox** → despite functional immune *decline*, rates of autoimmune phenomena increase with age (polymyalgia rheumatica, giant cell arteritis); probable mechanism: loss of regulatory T cell (Treg) suppression + ABC/TLT accumulation; see also ZEB2/ABC circuit [^dai2024].

---

## Biotech intervention landscape

This section covers mechanism-of-action classes targeting the failed adaptive immune surveillance machinery. For senolytic approaches (small-molecule senolytics targeting SCAP pathways), see [[cellular-senescence]] and [[interventions/pharmacological/senolytics]]; those act on the *production* side of senescent cell burden. The programs below target the *clearance/surveillance* side or directly rejuvenate specific immune compartments.

### Class 1: Thymic regeneration

**TRIIM trial (Fahy et al. 2019) — landmark human proof-of-concept**

Fahy et al. 2019 enrolled 10 healthy males aged 51–65 in a 12-month open-label pilot (recombinant human GH 0.015 mg/kg/day + DHEA 50 mg/day + metformin 500 mg/day); one volunteer was removed after approximately one month (self-reported bradycardia), leaving 9 completers. Thymic MRI showed regeneration of thymic parenchyma in 7 of 9 completing subjects (2 had abnormally low baseline thymic fat-free fraction and did not respond significantly). Epigenetic age (DNA methylation clock composite across four clocks) showed a mean −1.5 year reversal after 1 year of treatment versus baseline (−2.5-year change compared to no treatment); the reversal rate accelerated from −1.6 year/year from months 0–9 to −6.5 years/year during months 9–12. GrimAge showed a 2-year decrease in epigenetic versus chronological age that persisted 6 months after treatment discontinuation [^fahyTriim2019]. This is the first human demonstration that a pharmacological protocol can reverse thymic involution by radiological criteria and produce simultaneous epigenetic age reversal. **Critical caveats: n=9 completers, no randomized control arm, single unblinded cohort.** Interpretation requires the ongoing TRIIM-X trial.

**TRIIM-X (NCT04375657) — recruiting as of May 2025**

Phase 2 expansion, n≈85, sponsor Intervene Immune Inc. Randomized (full TRIIM protocol vs. active control receiving metformin + DHEA only). Primary endpoints: epigenetic age, thymic density by MRI, safety/tolerability. Expected completion date not retrieved — check ClinicalTrials.gov.

**FOXN1 reactivation approaches (preclinical)**

Bredenkamp et al. (Blackburn lab) showed that conditional FOXN1 reactivation in aged mice reversed thymic involution and restored naive T cell output — demonstrating that aged thymic stroma retains regenerative capacity if the master TEC transcription factor is restored [^bredenkamp2014]. Small-molecule FOXN1 activators are not in clinical development as of 2026. Viral-vector approaches are preclinical only #gap/needs-human-replication.

**Nitazoxanide — emerging thymic regeneration signal (2026)**

See mechanistic core section above [^genah2026]. Preclinical only; FDA-approved drug repurposing; safety profile is established for short courses. #gap/needs-human-replication

**KGF/FGF7 (palifermin)**

FDA-approved for chemotherapy-induced mucositis; used post-HSCT to support thymic regeneration; limited data specifically for age-related involution. Preclinical thymic-epithelial support data exists; repurposing for aging requires clinical study.

**Sex steroid blockade (LHRH agonists: leuprolide, degarelix)**

Heng et al. 2005 demonstrated castration in mouse models restored early T lineage progenitors in both age-related and chemo-induced involution [^heng2005]. Sutherland and Boyd (2005) established the pharmacological sex-steroid-ablation approach in the post-HSCT regeneration context. Leuprolide + aromatase inhibitor trials post-allo-HSCT have shown transient thymic output increases in small studies; not practical at population scale due to side effects.

**Recombinant IL-7 (NT-I7 / efineptakin alfa — NeoImmune Tech)**

IL-7 is required for naive T cell homeostatic proliferation and survival. Recombinant IL-7 drives expansion of the naive T cell pool in lymphopenic states (post-HSCT, HIV, COVID-19 critical illness). Phase 2 trials exist in these indications; aging-specific application is exploratory. IL-7 does not address thymic *output* per se — it promotes homeostatic expansion of existing naive T cells — but partially compensates for the loss of new thymic emigrants.

**Mesenchymal stromal cell (MSC) thymic support**

Zhang et al. 2023 (Blood Advances, n=mouse GVHD model) showed MSCs promoted TEC quantity/maturity and increased Aire+ medullary TECs via CCL25-CCR9 signaling [^zhang2023]. Preclinical; MSC approaches are in clinical development for GVHD (separate indication from aging-thymic-regeneration).

---

### Class 2: CAR-T immunological senolytics

This class engineers T cells to recognize and kill senescent cells — the synthetic reconstruction of the failing NK/macrophage immunosurveillance axis.

**uPAR CAR-T (Amor et al. 2020, Nature) — foundational preclinical demonstration**

Amor et al. 2020 (Lowe lab / Sloan Kettering) generated CAR-T cells targeting urokinase plasminogen activator receptor (uPAR), a cell-surface protein upregulated on senescent cells. uPAR-CAR-T cells [^amor2020]:
- Eliminated senescent cells in vitro with high specificity
- Extended survival in lung adenocarcinoma-bearing mice (where therapy-induced-senescence stromal cells support tumor progression; uPAR-CAR-T significantly prolonged survival vs controls)
- Reversed liver fibrosis in a mouse chemical (CCl4) and diet-induced NASH fibrosis model (senescent hepatic stellate cells cleared, fibrosis regressed, ALT/AST reduced, p<0.001 SA-β-Gal staining)
- Note: a claim about physiological lifespan extension in aged wild-type mice was not substantiated in the main paper text; the paper demonstrates disease-model survival and fibrosis reversal endpoints #gap/needs-replication

**Evidence quality:**

| Dimension | Status |
|---|---|
| uPAR upregulated on senescent cells in humans? | yes — uPAR (PLAUR) is elevated on senescent cells in multiple human tissue types |
| CAR-T reversal of fibrosis conserved in humans? | not tested #gap/needs-human-replication |
| Lifespan extension in mice replicated? | not yet #gap/needs-replication |

**No CAR-T senolytic is in clinical trials for aging indications as of 2026.** The uPAR-CAR-T approach was disclosed in 2020; clinical translation requires manufacturing scale-up, safety characterization (on-target uPAR expression on non-senescent cells including wound-healing fibroblasts and some immune subsets), and a defined aging indication.

**GPNMB-targeting senescence vaccines**

Suda et al. and follow-up Chinese research groups identified glycoprotein non-metastatic melanoma protein B (GPNMB) as a senescent cell surface antigen. Two 2024–2025 papers report nanovaccines and dendritic cell vaccines carrying GPNMB-derived peptide antigens that induced CD8+ T cell clearance of senescent adipocytes and cardiomyocytes in high-fat diet and aged mouse models, improving metabolic dysfunction and cardiac function [^zhang2025][^cao2024]. This approach uses native immune machinery (vaccination → anti-GPNMB CD8+ T cells) rather than ex-vivo engineered CAR-T cells — potentially more scalable but lower potency per cell. Preclinical only in mice. #gap/needs-human-replication

**Unanswered safety concern for all senolytic immune approaches:** uPAR and GPNMB are not exclusively expressed on senescent cells. Wound-healing fibroblasts, some macrophages, and tissue-repair cells express both antigens. The therapeutic window — sufficient potency to reduce senescent cell burden without disrupting tissue repair — has not been characterized in aged primates or humans.

---

### Class 3: NK cell rejuvenation and IL-15 axis stimulation

**N-803 / Anktiva (nogapendekin alfa inbakicept) — FDA-approved IL-15 superagonist**

N-803 is an IL-15 receptor agonist complex (IL-15 + IL-15Rα-Fc fusion) developed by ImmunityBio. It received FDA accelerated approval in 2024 for BCG-unresponsive non-muscle-invasive bladder cancer. IL-15 drives NK cell proliferation, cytotoxicity, and longevity — addressing the aging-associated NK cytotoxicity decline through direct cytokine replacement. Aging-specific clinical trials for NK rejuvenation have not been reported as of 2026 #gap/needs-human-replication, but the mechanism is directly relevant to the failed NK surveillance axis.

**iPSC-derived NK cell therapies**

Fate Therapeutics (FT-538, FT-516, and related programs) and other groups produce NK cells derived from iPSC clonal master cell lines, addressing the manufacturing scalability limitation of autologous NK cell expansion. These programs are primarily in oncology indications (Phase 1–2 for hematologic malignancies). Aging-surveillance application requires a defined indication; off-label compassionate use is not established.

**CAR-NK approaches**

NK cells can be engineered with CARs targeting senescent cell antigens (analogous to CAR-T senolytics) with a potentially more favorable safety profile: NK cells are typically short-lived and do not persist long-term, reducing risks of sustained on-target off-tumor toxicity. Preclinical CAR-NK programs for senolysis are reported but not yet in clinical trials for aging indications.

---

### Class 4: mTOR inhibition for immune rejuvenation

**Mannick 2014 — first geroprotector RCT with human immune endpoint**

Mannick et al. 2014 demonstrated that RAD001 (everolimus) 0.5 mg/day or 5 mg/week in healthy elderly volunteers (~70 years old) improved influenza vaccine immune response by approximately 20%, and reduced PD-1 expression on CD4+ and CD8+ T cells — the inhibitory receptor that accumulates with age on exhausted T cells [^mannick2014]. This was the first prospective RCT demonstrating a geroprotector compound can improve immune function in aged humans.

**RTB101 Phase 2b/3 — lessons from failure**

RTB101 (dactolisib analog, selective TORC1 inhibitor), oral, in elderly adults (>65 years): Phase 2b 10 mg/day reduced laboratory-confirmed respiratory tract infections by 19% vs 28% in placebo. The Phase 3 trial failed to meet the primary endpoint of clinically symptomatic respiratory illness [^mannick2021]. The Phase 2b/3 discordance may reflect primary-endpoint choice (laboratory-confirmed vs. symptomatic illness) rather than a null immune effect. The interferon-induced antiviral gene expression upregulation (the mechanistic readout) was confirmed in Phase 3. RTB101 is not in further development for aging-immune indications. **Lesson:** mTOR inhibition for aging-immune function is biologically active but the Phase 3 RTI endpoint was a poor functional readout.

**PEARL trial (rapamycin)**

Rapamycin in older adults (multiple ongoing trials including PEARL); immune subset analyses are secondary endpoints in some designs. Full immune-endpoint data from PEARL not published as of 2026 seeding date. See [[mtor]] for the broader rapamycin aging evidence base.

---

### Class 5: HSC rejuvenation and CHIP-targeted approaches

**Anti-CD117 (c-Kit) antibody conditioning**

Non-myeloablative HSC niche clearance using anti-CD117 antibodies creates HSC engraftment space without chemotherapy toxicity. Magenta Therapeutics (MGTA-117) developed this approach for HSCT conditioning; the company wound down ~2023 but the approach continues in academic programs and other sponsors. For aging applications, non-toxic conditioning could enable HSC replacement or gene-corrected HSC transplantation in older individuals for whom standard myeloablative conditioning is prohibitive — potentially addressing CHIP-driven immune distortion. Clinical-stage: early clinical trials for conditioning (non-aging indications); aging-specific use is conceptual #gap/needs-human-replication.

**CHIP-targeted interventions**

TET2-mutant HSC clones produce excess IL-1β and IL-6, distorting immune output and driving cardiovascular risk. Therapeutic approaches targeting CHIP-mutant clones are emerging (TET2-mutant clone-specific small molecules; see also CANTOS post-hoc analysis suggesting anti-IL-1β may reduce CHIP-associated cardiovascular risk). See [[clonal-hematopoiesis]] for the full evidence base. No CHIP-specific immune-aging trial is registered as of 2026.

**Partial epigenetic reprogramming in immune cells**

Transient Yamanaka factor expression in aged T cells and HSCs is preclinical; Altos Labs, NewLimit, and Life Biosciences are the major programs exploring in-vivo partial reprogramming. Immune cell applications would need to demonstrate epigenetic clock reversal without loss of antigen-specificity (a fundamental tension: memory T cell identity is epigenetically encoded; resetting epigenetic age could erase immunological memory). No published clinical programs as of 2026. #gap/long-term-unknown #gap/needs-human-replication

---

## Causal-graph integration

**Upstream (causes this hallmark):**
- [[stem-cell-exhaustion]] — HSC myeloid bias → reduced B and T cell progenitor output; primary upstream driver
- [[telomere-attrition]] — T cell clone replicative exhaustion; CD8+ TEMRA senescence
- [[cellular-senescence]] — senescent TECs impair thymic function; senescent stromal cells disrupt bone marrow lymphoid niche
- [[chronic-inflammation]] — inflammaging cytokines (IL-6, TNF-α) accelerate T cell terminal differentiation; NF-κB drives senescent T cell SASP
- [[epigenetic-alterations]] — age-related FOXN1 silencing in TECs; methylation drift at T cell identity loci

**Downstream (this hallmark causes):**
- [[chronic-inflammation]] — senescent T cell SASP and failed efferocytosis drive systemic inflammaging; bidirectional
- [[cancer]] — failed tumor immunosurveillance allows nascent clones to escape; the cancer-immunity-aging trifecta

---

## Knowledge gaps

- **Why not formally adopted?** The most likely reason is parsimony: the López-Otín framework can account for adaptive immune failure as downstream of stem-cell-exhaustion + cellular-senescence + telomere-attrition + epigenetic-alterations without adding a new primary category. Whether disabled adaptive immunity generates independent effects not captured by those hallmarks — the test for elevation — has not been definitively established. #gap/needs-replication
- **Single validated biomarker absent.** The Immune Risk Profile (IRP) is the closest — a composite of CD4:CD8 ratio, CMV seropositivity, B cell count, mitogen proliferative response — with prospective mortality prediction in the OCTO/NONA cohorts. But IRP has not been widely replicated with strict cutpoints in independent cohorts. No single functional readout captures the full surveillance capacity of the adaptive immune system. #gap/needs-replication
- **Mouse models miss CMV.** Standard inbred mouse strains are CMV-naive; the CMV-driven CD8+ repertoire collapse central to human immunosenescence is not modeled. Preclinical CAR-T and vaccine senolytic results may behave differently in humans with CMV-driven immune aging.
- **Thymic regeneration translation gap.** Rodent thymic involution is more complete and earlier-onset than human; humans retain some functional thymic tissue longer than rodents per age-adjusted comparisons. The regenerative capacity of the human involuted thymus is incompletely characterized — mouse FOXN1-reactivation results may overestimate human responsiveness. #gap/needs-human-replication
- **CAR-T senolytic window at scale.** The therapeutic index of uPAR CAR-T or GPNMB-targeted approaches requires characterization in aged primates before human trials. On-target off-senescent-cell toxicity (wound healing fibroblasts, macrophages) is the primary safety concern. #gap/long-term-unknown
- **Reprogramming vs memory erasure tension.** Partial epigenetic reprogramming of T cells would need to reverse epigenetic aging marks without erasing TCR clonotype identity and antigen-specific memory — a fundamental mechanistic tension with no resolved solution. #gap/no-mechanism

---

## Decision framework: target immunogenicity dictates intervention choice

Surveillance-augmenting interventions only deliver lesion regression where the target is *immunogenically detectable*. This sounds obvious but is the single most useful filter for predicting whether a Side-B intervention will work on a given aging-driven cellular insult. The augment-vs-target choice maps onto target immunogenicity:

| Target type | Side-A (slow accumulation) | Side-B (augment surveillance) | Targeted intervention |
|---|---|---|---|
| **Highly immunogenic neoantigens** — MMR-deficient tumors, viral antigens, some senescence markers (uPAR, GPNMB) | Helpful but slow | **Highly effective** — biotech revolution of the last decade (CAR-T, checkpoint inhibitors, neoantigen vaccines) | Effective but increasingly redundant with Side-B |
| **Weakly immunogenic mutations** — most cancers, signaling-mutation-driven lesions (GNAQ Q209L; see [[cherry-angioma]]) | Helpful | Modest at best — engineered immunity (TCR-T, neoantigen vaccines) can compensate but is expensive and per-target | **Most reliable path** — direct molecular intervention against the driver |
| **Non-mutational damage** — lipofuscin, AGE crosslinks, senescent cells lacking surface markers | Helpful | Possible only with engineered targeting (e.g., antibody conjugation to a SASP-specific marker) | **Required** — AGE breakers, lipofuscin-clearing enzymes, allotopic mtDNA expression |
| **Damage in immune-privileged sites** — CNS, eye, gonads | Helpful | Largely irrelevant (immune system can't access) | **Required** — local delivery |

The implication: **a complete longevity strategy needs both augmentation and direct targeting; the right balance depends on the target's immunogenicity profile.** This page (the augmentation axis) does its best work where natural immunity already partially recognizes the target and we are amplifying a working signal. Where the natural signal is absent — as in the GNAQ-driven dermal endothelial clones that produce [[cherry-angioma|cherry angiomas]] — augmentation hits diminishing returns regardless of how thoroughly the surveillance machinery is rejuvenated, and direct molecular intervention (here, MEK/ERK inhibition or Gαq-pathway antagonism) becomes the only credible lever.

This framework also explains a recurring observation in the field: **why CHIP and clonal mosaicism remain so therapeutically intractable.** DNMT3A/TET2 loss-of-function mutations in HSCs produce minimal neoantigens (loss-of-function in proteins that don't get displayed via MHC-I generates almost no presented mutant peptide), and CHIP cells are immune cells themselves — a perfectly rejuvenated immune system would still have to attack itself to eliminate them. Most CHIP clones thus require either direct molecular intervention (DNMT3A-mutant-clone-selective inhibitors, currently undeveloped) or the brute-force approach of HSC replacement via [[hematopoietic-stem-cells|HSC]] conditioning + transplant. No amount of thymic regeneration helps.

---

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[disabled-adaptive-immunity]])
  OR contains(target-hallmarks, [[disabled-adaptive-immunity]])
SORT clinical-stage DESC
```

See [[frameworks/interventions-by-hallmark]] for the full matrix.

---

## Cross-references

**Phenotype page (do not duplicate claims from here):**
- [[immunosenescence]] — functional decline, IRP, vaccine responses, CMV memory inflation, compartment epidemiology

**Upstream hallmark pages:**
- [[stem-cell-exhaustion]] — HSC myeloid bias; CHIP; reduced lymphoid output
- [[telomere-attrition]] — T cell replicative exhaustion; TCR diversity loss
- [[cellular-senescence]] — senescent TECs; niche disruption; ABC-senescent T cell loops
- [[chronic-inflammation]] — inflammaging driving T cell terminal differentiation
- [[epigenetic-alterations]] — FOXN1 silencing in TECs; T cell identity-locus drift

**Related phenotypes:**
- [[clonal-hematopoiesis]] — CHIP-driven immune distortion
- [[cancer]] — failed tumor immunosurveillance
- [[anemia-of-aging]] — HSC output failure (myeloid/lymphoid co-decline)
- [[frailty]] — composite syndrome including immune component

**Interventions:**
- [[interventions/pharmacological/senolytics]] — addresses senescent cell production + accumulation (complementary to this page's clearance axis)
- [[mtor]] — mTOR inhibition for immune function (Mannick 2014, RTB101)
- [[rapamycin]] — leading mTOR inhibitor; PEARL trial

**Parent frameworks:**
- [[hallmarks-of-aging]] — this is a proposed addition to the López-Otín set; not yet formally included
- [[sens-damage-categories]] — [[apoptosenes]] partial overlap (senescent immune cells accumulate via anti-apoptotic resistance; senolytics and CAR-T address this)

---

## Position in causal hierarchy

Proposed classification: **Integrative outcome tier** (mechanistic-tier: integrative / intervention-tractability: moderate). Downstream of the primary and antagonistic hallmarks; upstream of chronic-inflammation (via senescent-T-cell SASP loop) and cancer (via failed tumor surveillance). The moderate tractability rating reflects: (a) two classes already have human proof-of-concept (mTOR inhibition for immune function; thymic regeneration by MRI + epigenetic clock); (b) no Phase 3 trial specifically targeting aging immune surveillance has succeeded for a longevity-relevant endpoint; (c) the field is moving rapidly with multiple mechanism classes entering Phase 1–2 (TRIIM-X, CAR-T senolytics, IL-15 agonists).

---

## Footnotes

[^nikolich2018]: doi:10.1038/s41590-017-0006-x · Nikolich-Žugich J (2018) "The twilight of immunity: emerging concepts in aging of the immune system" · Nature Immunology · review · cited_by: ~995 · comprehensive cross-compartment immunosenescence review; proposes immunosenescence meets hallmark criteria · archive: not_oa #gap/no-fulltext-access

[^goronzy2019]: doi:10.1038/s41577-019-0180-1 · Goronzy JJ, Weyand CM (2019) "Mechanisms underlying T cell ageing" · Nature Reviews Immunology · review · cited_by: ~456 · OA: green (PMC7584388) · thymic contribution to T cell generation declines from ~16% to <1% over adult lifetime; T cell memory inflation documented; verified via PMC full text on [[immunosenescence]]

[^franceschi2014]: doi:10.1093/gerona/glu057 · Franceschi C, Campisi J (2014) "Chronic Inflammation (Inflammaging) and Its Potential Contribution to Age-Associated Diseases" · J Gerontology Series A · review · cited_by: ~3600 · foundational inflammaging-immunosenescence bidirectional framework

[^fahyTriim2019]: doi:10.1111/acel.13028 · PMID 31496122 · PMCID PMC6826138 · Fahy GM, Brooke RT, Watson JP et al. (2019) "Reversal of epigenetic aging and immunosenescent trends in humans" · Aging Cell · open-label pilot (n=10 enrolled / 9 completers; healthy males 51–65 yr; 1 dropout ~1 month) · GH 0.015 mg/kg/day + DHEA 50 mg/day + metformin 500 mg/day × 12 months; thymic parenchyma increased by MRI in 7/9 (2 non-responders had abnormally low baseline TFFF); mean epigenetic age −1.5 yr vs baseline (−2.5 yr vs no-treatment counterfactual); rate −1.6 yr/yr at months 0–9 accelerating to −6.5 yr/yr at months 9–12; GrimAge 2-yr decrease sustained 6 months post-treatment · primary PDF verified 2026-05-07 · cited_by: 470

[^bredenkamp2014]: doi:10.1242/dev.103614 · PMID 24715454 · PMCID PMC3978836 · Bredenkamp N, Nowell CS, Blackburn CC (2014) "Regeneration of the aged thymus by a single transcription factor" · Development 141(8):1627-37 · in-vivo (mouse conditional FOXN1 reactivation in aged TECs) · forced TEC-specific upregulation of FOXN1 in fully involuted aged thymus resulted in robust regeneration; increased thymopoiesis and naive T cell output; regenerated organ resembled juvenile thymus in architecture and gene expression · #gap/needs-human-replication · DOI corrected from dev.115899 (wrong) to dev.103614 (verified via PubMed PMID 24715454)

[^heng2005]: doi:10.4049/jimmunol.175.5.2982 · PMID 16116185 · Heng TSP, Goldberg GL, Gray DHD, Sutherland JS, Chidgey AP, Boyd RL (2005) "Effects of castration on thymocyte development in two different models of thymic involution" · J Immunology 175(5):2982-93 · in-vivo (mouse age-associated and chemotherapy-induced involution models) · castration restored early T lineage progenitors (ETPs) reduced by age; ETP number (not reconstitution potential) was restored following castration; castration also enhanced intrathymic proliferation in chemo-induced involution model; reversible sex steroid ablation approach established · DOI confirmed via Crossref · archive: bronze OA (pending download) · cited_by: 211

[^amor2020]: doi:10.1038/s41586-020-2403-9 · PMID 32555459 · PMCID PMC7583560 · Amor C, Feucht J, Leibold J et al. (Lowe lab / Sloan Kettering) (2020) "Senolytic CAR T cells reverse senescence-associated pathologies" · Nature 583(7814):127-132 · in-vivo + in-vitro · uPAR-targeted CAR-T cells eliminate senescent cells in vitro and in vivo; significantly prolonged survival in lung adenocarcinoma-bearing mice (therapy-induced senescent stroma model); reversed CCl4-induced and diet-induced NASH liver fibrosis (p<0.001 SA-β-Gal; reduced ALT/AST); physiological lifespan extension in aged wild-type mice not reported in main paper text · primary PDF verified 2026-05-07 · cited_by: 960

[^genah2026]: doi:10.1038/s41418-026-01724-7 · PMID 41888548 · Genah S, Pellegrino M, Giansanti M et al. (Velardi lab, Bambino Gesù / van den Brink lab, City of Hope) (2026) "Proteasome inhibition promotes Foxn1 expression in thymic epithelial cells and induces thymic regeneration in mice" · Cell Death & Differentiation · in-vitro (TEC screen) + in-vivo (mouse radiation model) · FDA-approved compound screen identified nitazoxanide (NTZ) as FOXN1 inducer; mechanism: NTZ → proteasome inhibition → ER stress → unfolded protein response (UPR) → autophagy (compensatory, pro-survival); NTZ accelerated thymic recovery post-irradiation including restoration of thymic architecture and cellularity; FOXN1 and downstream targets induced in TECs in vivo; T-cell selection and tolerance mechanisms preserved · DOI confirmed real via PubMed (paper published ahead-of-print March 2026) · archive: not checked

[^mannick2014]: doi:10.1126/scitranslmed.3009892 · PMID 25540326 · Mannick JB, Del Giudice G, Lattanzi M et al. (Novartis) (2014) "mTOR inhibition improves immune function in the elderly" · Science Translational Medicine 6(268):268ra179 · rct (healthy elderly volunteers; RAD001 0.5 mg/day or 5 mg/week) · RAD001 enhanced influenza vaccine response by about 20%; reduced percentage of CD4 and CD8 T cells expressing PD-1; first geroprotector RCT with positive human immune endpoint · archive: closed-access (not_oa); verified via PubMed abstract PMID 25540326 · cited_by: 730

[^mannick2021]: doi:10.1016/S2666-7568(21)00062-3 · PMID 33977284 · PMCID PMC8102040 · Mannick JB, Teo G, Bernardo P et al. (resTORbio) (2021) "Targeting the biology of ageing with mTOR inhibitors to improve immune function in older adults: phase 2b and phase 3 randomised trials" · Lancet Healthy Longevity 2(5):e250-e262 · Phase 2b (n=652; adults ≥65yr at high RTI risk): RTB101 10 mg/day reduced lab-confirmed RTIs in 34/176 (19%) vs 50/180 (28%) placebo (OR 0.601 [90% CI 0.391–0.922]; p=0.02); Phase 3 (n=1024; adults ≥65yr): RTB101 10 mg/day did not reduce clinically symptomatic respiratory illness (134/511 [26%] RTB101 vs 125/510 [25%] placebo; OR 1.07 [90% CI 0.80–1.42]; p=0.65); IFN-induced antiviral gene upregulation confirmed in both trials · primary PDF verified 2026-05-07 · cited_by: 100

[^dai2024]: doi:10.1126/science.adf8531 · Dai D et al. (2024) "The transcription factor ZEB2 drives the formation of age-associated B cells" · Science · in-vivo + in-vitro + human samples · ZEB2 required for ABC differentiation in mice and humans; JAK1/3 inhibitors reduce ABC accumulation in autoimmune models; MEF2B repression blocks GC B cell fate · PMID: 38271512 · archive: not checked

[^sato2022]: doi:10.1172/JCI146071 · Sato Y et al. (2022) "CD153/CD30 signaling promotes age-dependent tertiary lymphoid tissue expansion and kidney injury" · J Clin Investigation · in-vivo (aged mouse kidney model + human samples) · CD153/CD30 signaling between senescence-associated T cells and ABCs drives TLT formation; disruption reduces ABC numbers and attenuates inflammation + fibrosis · PMID: 34813503 · archive: not checked

[^zhang2023]: doi:10.1182/bloodadvances.2022008901 · Zhang X et al. (2023) "Mesenchymal stromal cells ameliorate chronic GVHD by boosting thymic regeneration in a CCR9-dependent manner in mice" · Blood Advances · in-vivo (mouse GVHD model) · MSCs promoted TEC quantity/maturity via CCL25-CCR9; increased Aire+ medullary TECs · PMID: 37363876 · archive: not checked

[^zhang2025]: doi:10.1080/21645515.2025.2479229 · PMID 40088037 · PMCID PMC11916409 · Zhang K, Yin Q, Ma Y et al. (2025) "Nanovaccine loaded with seno-antigen target senescent cells to improve metabolic disorders of adipose tissue and cardiac dysfunction" · Human Vaccines & Immunotherapeutics 21(1):2479229 · in-vivo (high-fat diet progeroid mouse model) · GK-NaV GPNMB-peptide nanovaccine promoted DC maturation and CD8+ T cell activation; eliminated senescent adipocytes and cardiomyocytes; improved metabolic function · DOI confirmed via PubMed PMID 40088037 · archive: not checked #gap/needs-human-replication

[^cao2024]: doi:10.1016/j.biopha.2024.117433 · PMID 39260327 · Cao Y, Du X, Yu J et al. (2024) "Seno-antigen-pulsed dendritic cell vaccine induce anti-aging immunity to improve adipose tissue senescence and metabolic abnormalities" · Biomedicine & Pharmacotherapy 179:117433 · in-vivo (HFD young, aged, and natural aging mouse models) · Gpnmb-CP-DC vaccine activated CD8+ T cells with enhanced cytotoxicity and memory; eliminated senescent adipocytes; improved metabolic outcomes; minimal efficacy with Gpnmb-CP protein vaccine in aged mice (DC vehicle required) · DOI confirmed via PubMed PMID 39260327 · archive: not checked #gap/needs-human-replication
[^almeida2011nk]: doi:10.1016/j.humimm.2011.01.009 · Almeida-Oliveira A et al. · *Hum Immunol* 2011 Apr;72(4):319-29 · observational (flow cytometry, healthy donors childhood→old age) · NK cells: NKp30 + NKp46 (NCRs) decreased in elderly; **NKG2D decreased on T cells, NOT NK cells** — the source of the NK-vs-T cell-type distinction · PMID 21262312 · abstract directly read 2026-05-31; full PDF not retrieved #gap/needs-fulltext-verification · canonical reconciliation on [[processes/senescence-immune-surveillance]]
