---
type: intervention
aliases: [AAV-FS344, AAV-follistatin, follistatin gene therapy, AAV1-FS344]
mode: gene-therapy
mechanisms: [myostatin-antagonism, activin-antagonism, muscle-anabolism]
targets: ["[[myostatin]]"]
target-hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
target-pathways: ["[[tgf-beta]]"]
human-evidence-level: limited
clinical-stage: phase-1
safety-profile: investigational
translation-gap: phase-2-needed
next-experiment: "Phase 2 RCT in age-related sarcopenia (n≥60, 65+ yrs) with composite primary endpoint: lean-mass change by DXA + 6-minute walk test + grip strength; pre-specified subgroup analysis by baseline serum myostatin levels."
clinical-trials-active: 1
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Primary sources verified from local PDFs: Lee & McPherron 2001 (PNAS, full PDF), Mendell 2017 (Mol Ther, full PDF), Schuelke 2004 (NEJM, full PDF), Greenberg 2017 critique (Mol Ther, full PDF). White & LeBrasseur 2014 (whitelebrasseur2014) is not_oa — claims attributed to it (myostatin rise with age, altered secretome) are tagged use-with-caution in the footnote and not independently verified. Rodino-Klapac 2009 (rodino2009) download failed — preclinical mechanistic claims attributed to it are not independently verified; #gap/no-fulltext-access applies to that footnote. Canonical identity fields not applicable (intervention page, no database IDs). Mendell 2016 conference abstract (mendell2016abs) not downloaded — superseded by full 2017 paper for all quantitative claims. R34 recency pass (2026-05-08): PubMed search for follistatin gene therapy 2024–2026 returned 18 hits and follistatin-aging/sarcopenia returned 38 hits; no new AAV-follistatin clinical-trial primary results, no Phase 2 readouts, no new safety follow-ups identified. NCT07443826 (CALM-AF-AI) confirmed RECRUITING per ClinicalTrials.gov 2026-05-08. No edits required from this pass; FORTITUDE-class trials referenced in the brief returned no follistatin-relevant hits — the FORTITUDE trial naming appears to belong to a different program."
---

# AAV-Follistatin gene therapy

Intramuscular delivery of an adeno-associated virus (AAV) encoding follistatin (FST), a naturally secreted glycoprotein that binds and neutralises myostatin (GDF-8) and related activins in the extracellular space. Myostatin is the dominant negative regulator of skeletal muscle mass in mammals; its blockade drives muscle fibre hypertrophy and satellite cell activation [^leemcpherron2001]. AAV-mediated follistatin overexpression has completed a Phase 1 trial in inclusion body myositis (IBM) and Becker muscular dystrophy (NCT01519349), with modest functional improvements and no serious adverse events [^mendell2017]. **As of 2026-05-06, no completed Phase 2 trial exists for any indication; a Phase 1/2a sarcopenia-specific trial (NCT07443826) is actively recruiting.** Antibody-based myostatin antagonists (bimagrumab, trevogrumab) are the competing clinical modality with a simpler regulatory path, but the gene-therapy approach offers the potential for durable single-administration effect.

---

## Follistatin biology

Follistatin (FST) is a monomeric glycoprotein encoded by the *FST* gene (chromosome 5q11.2 in humans) that was originally characterised as an activin-binding protein in the pituitary. Its broader role as a pan-TGF-β ligand trap became clear when Lee & McPherron demonstrated that FST overexpression in transgenic mice produced muscle mass increases that met or exceeded those seen in myostatin knockout mice — implying that follistatin sequesters additional growth-inhibiting ligands beyond myostatin alone [^leemcpherron2001].

Key binding targets of follistatin relevant to muscle:

| Ligand | Family | Effect on muscle when follistatin blocks it |
|---|---|---|
| Myostatin (GDF-8) | TGF-β | Removes primary negative regulator of myofibre hypertrophy |
| [[inhba|Activin A]] | TGF-β | Removes catabolic signal; activin A rises with age and disease |
| Activin B | TGF-β | Secondary catabolic signal; less muscle-specific than activin A |
| BMP-11 (GDF-11) | TGF-β | Controversial; may oppose muscle growth in some contexts |

Three isoforms exist (FST-288, FST-303, FST-315), with FST-315 being the predominant circulating form. The FS344 vector (AAV1 serotype) encodes a secreted follistatin isoform designed for local paracrine action after intramuscular injection, with limited systemic distribution intended to confine hypertrophic effects to injected muscles.

The mechanism is upstream of SMAD2/3 signalling: follistatin sequesters myostatin before receptor engagement, preventing ALK4/ALK5 receptor activation and the SMAD2/3 transcriptional complex that represses muscle anabolic genes. See [[tgf-beta]] for pathway-level SMAD signalling detail.

---

## Human genetic proof-of-concept — Schuelke 2004

The strongest human genetics evidence that myostatin loss-of-function drives muscle hypertrophy is a NEJM case report of a boy born with an inactivating myostatin mutation who displayed extraordinary muscle development with no adverse health effects at age 4.5 years [^schuelke2004]. This established that complete myostatin blockade is safe in humans at paediatric ages and produces the expected hypertrophy phenotype. **This is a single case; long-term safety of lifelong myostatin deficiency in adulthood is unknown** #gap/needs-replication #gap/long-term-unknown.

---

## Mendell 2017 Phase 1 trial (IBM + Becker MD) — NCT01519349

The foundational human gene therapy trial. **Note on timing:** the trial completed accrual circa 2014–2015; a conference abstract appeared in 2016 [^mendell2016abs]; the full peer-reviewed publication appeared in 2017 [^mendell2017]. The user brief refers to this as "Mendell 2015"; the citable primary source is the 2017 Molecular Therapy paper.

**Design:** Open-label, single-group Phase 1 (NCT01519349; n=15 total: 9 sIBM + 6 BMD; 3 sIBM received unilateral dosing only and are not analysed in this paper). rAAV1.CMV.huFS344, 6×10¹¹ vg/kg per leg, delivered by bilateral IM injection to the quadriceps in 12 sites per leg under EMG/MRI guidance. **Registered primary endpoint: safety** (Grade III or higher treatment-related toxicities at 2 years); the 6MWT comparison vs an external clinic cohort is a post-hoc efficacy analysis on a non-pre-specified endpoint.

**IBM cohort results (from Mendell 2017):**

| Measure | Outcome |
|---|---|
| Serious adverse events | None reported |
| 6MWT | 4 of 6 participants improved (absolute change +58 m to +153 m); 2 minimally improved (+5 m and +23 m); annualised median change +56.0 m/yr vs −25.8 m/yr in matched untreated sIBM controls (n=8), p=0.01 |
| Muscle biopsy | Decreased fibrosis (reduced TGF-β, Col1A, fibronectin expression); increased muscle fibre number and normalised fibre size distribution; mTORC1 activation (increased phospho-S6P and phospho-4E-BP1); no reduced myostatin protein expression was reported |
| Immunogenicity | No consistent pattern of T-cell immunity to AAV1 capsid; serum anti-follistatin antibody levels remained below 1:50 titers throughout; no adverse immunogenicity-related loss of expression documented |

**Limitations of the trial:**

- n=6 in the sIBM cohort (the full trial NCT01519349 enrolled 15 subjects: 9 sIBM + 6 Becker MD; 3 sIBM received unilateral dosing only and are not analysed in this paper); no placebo arm; functional effect sizes are uninterpretable without a concurrent control arm
- Registered primary endpoint was **safety** (Grade III or higher treatment-related toxicities at 2 years); the 6MWT comparison vs clinic controls is a post-hoc-defined efficacy analysis on a non-pre-specified endpoint — a point specifically criticised by Greenberg 2017 [^greenberg2017critique]
- Subjects received ≥4 co-interventions (AAV-FS344 gene therapy, 60 days high-dose prednisone, structured exercise programme, open-label placebo effects); efficacy cannot be attributed to gene therapy alone
- IM delivery to quadriceps only; no systemic distribution data; cannot address sarcopenia as a whole-body condition
- Only 2 of 6 subjects have 6MWT data at the registered 2-year endpoint in this publication

### Extrapolation to general aging-related sarcopenia

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Myostatin–FST axis is well-characterised in humans; human genetics supports it (Schuelke 2004) |
| Phenotype conserved in humans? | partial | IBM is an inflammatory myopathy, not sarcopenia; results may not extrapolate to age-related muscle loss |
| Replicated in humans? | in-progress | NCT07443826 is a Phase 1/2a trial in age-related sarcopenia; results pending |

#gap/needs-replication (no controlled trial in sarcopenia population)

---

## Aging-relevance rationale

Myostatin is a member of the TGF-β superfamily that functions as a circulating negative regulator of muscle mass throughout adult life. Its relevance to aging-related muscle decline is supported by several lines of evidence:

1. **Rising myostatin with age.** Circulating and intramuscular myostatin expression increases with advancing age in humans [^whitelebrasseur2014], coinciding with progressive sarcopenic muscle loss. Whether this rise is causal or adaptive is not definitively resolved. #gap/no-mechanism

2. **Satellite cell regulation.** Myostatin suppresses satellite cell activation and self-renewal via SMAD2/3, contributing to reduced regenerative capacity of aged muscle. This maps to the [[stem-cell-exhaustion]] hallmark (satellite cells are the resident muscle stem cells — see [[satellite-cells]]).

3. **Paracrine and endocrine signalling.** Myostatin is secreted by muscle and acts both locally and systemically; its antagonism by follistatin is thus relevant to [[altered-intercellular-communication]] (myostatin as an aging-amplifying secreted signal). Aged muscle has an altered secretome relative to young muscle that includes elevated myostatin and activin A [^whitelebrasseur2014].

4. **Functional consequence.** Sarcopenia (defined as loss of muscle mass + function) affects ~10–15% of adults over 65 and predicts fall risk, hospitalisation, and mortality. See [[sarcopenia]] for the full epidemiology and mechanistic breakdown.

The therapeutic rationale is therefore: AAV-mediated follistatin overexpression could provide durable local suppression of the myostatin/activin brake, promoting satellite cell activation and fibre hypertrophy in targeted muscle groups — potentially reversing or retarding the sarcopenic trajectory with a single administration.

---

## Competing modalities: antibody-based myostatin antagonists

Several protein-based myostatin and activin antagonists have advanced further in clinical development than AAV-follistatin for sarcopenia:

| Agent | Mechanism | Status (2026) | Developer |
|---|---|---|---|
| Bimagrumab | Anti-ActRIIA/IIB antibody (blocks activin + myostatin receptor) | Phase 2 completed (sarcopenia, obesity); Phase 3 planned | Novartis / Scholar Rock |
| Trevogrumab | Anti-myostatin monoclonal antibody | Phase 2/3 for FSHD; sarcopenia programme active | Regeneron |
| Apitegromab | Anti-pro-myostatin/latent-myostatin antibody | Phase 2/3 SMA | Scholar Rock |

**Relative to AAV-follistatin, antibody-based antagonists have:**
- Reversible pharmacology (safer for unknown long-term effects)
- Systemic distribution (addresses whole-body sarcopenia, not one muscle group)
- A more established regulatory precedent
- Larger clinical databases

**The gene therapy advantage** is the potential for permanent or very long-lived effect from a single injection, which could be relevant if long-term antibody dosing is cost- or compliance-limited. This advantage has not yet been demonstrated to translate to meaningful superiority in any head-to-head comparison. #gap/needs-replication

---

## Translation barriers

1. **IM-only delivery.** The AAV1.FS344 construct is delivered intramuscularly to targeted muscle groups, not systemically. This is appropriate for focal dystrophies (Becker MD, IBM) but limits utility for sarcopenia, which requires whole-body muscle mass restoration. Systemic IV delivery of higher-titre AAV9 or AAV-rh74 encoding follistatin might achieve broader distribution, but safety data for systemic follistatin overexpression (liver, ovary, bone) are limited and ovarian follicle development would be a concern (follistatin is a key regulator of reproductive biology via activin A). #gap/long-term-unknown

2. **Permanent overexpression safety.** Unlike an antibody with a 2–4-week half-life, AAV-driven gene expression is intended to be long-lived (years in post-mitotic cells). Chronic supraphysiological follistatin may dysregulate activin-mediated bone remodelling, cardiac function, and reproductive axis in ways not captured in short-term trials. #gap/long-term-unknown

3. **AAV immunogenicity.** Pre-existing neutralising antibodies against AAV1 in a subset of the population will reduce transduction efficiency or require pre-screening. Re-dosing is impractical with the same serotype.

4. **No active sarcopenia IND (as of 2026-05-06).** The NCT07443826 trial is early-stage; no Phase 2 data exist for aging-related sarcopenia as a primary indication. The regulatory path requires validated sarcopenia endpoints (lean mass + functional composite), which are still being standardised.

5. **Competing antibody modality.** If bimagrumab or trevogrumab receive regulatory approval for sarcopenia — a feasible near-term scenario — the commercial rationale for a more complex gene therapy approach narrows substantially.

---

## Active clinical trials (as of 2026-05-06)

| NCT | Title | Phase | Status | Conditions | Sponsor |
|---|---|---|---|---|---|
| NCT01519349 | Follistatin Gene Transfer to Patients With Becker Muscular Dystrophy and Sporadic Inclusion Body Myositis | 1 | Completed | Becker MD, IBM | Nationwide Children's Hospital |
| NCT07443826 | CALM-AF-AI: Counteracting Age-related Loss of Muscle With AAV-Follistatin (±VEGF plasmid) | 1/2a | Recruiting | Sarcopenia, age-related muscle decline | — |

`clinical-trials-active: 1` (NCT07443826 recruiting as of 2026-05-06; confirmed via ClinicalTrials.gov v2 API).

No trials specifically in aging-healthy-adult or longevity endpoints exist as of this date.

---

## Gaps and limitations

- **No Phase 2 controlled data.** The entire efficacy evidence base in humans is an open-label n=6 IBM cohort with no control arm, subject to significant natural-history confounds. #gap/needs-replication

- **IBM ≠ sarcopenia.** IBM is an immune-mediated inflammatory myopathy. Generalising the IBM trial result to age-related sarcopenia requires at minimum a dedicated sarcopenia cohort — now initiating in NCT07443826. #gap/needs-human-replication

- **Mendell 2017 disputed.** A formal published letter (Greenberg 2017) challenged the Mendell 2017 paper on multiple grounds: the reported primary outcome (6MWT) was not the registered primary outcome (safety); the "annualised 6MWT" is a post-hoc-defined metric; co-administration of prednisone + structured exercise + open-label placebo effects makes AAV attribution impossible; and the AE reporting was misleading (fall rate 33%, not the 6% stated in the paper) [^greenberg2017critique]. No published rebuttal from the Mendell group has appeared as of wiki creation 2026-05-06. This is a live scientific dispute. #gap/contradictory-evidence

- **Long-term safety of persistent FST overexpression unknown.** Follistatin regulates bone metabolism (activin/BMP axis), ovarian folliculogenesis, and cardiac hypertrophic signalling. Lifelong overexpression in muscle (with some paracrine/endocrine spillover) has not been characterised in any long-term animal study. #gap/long-term-unknown

- **Dose-response undefined.** A single dose level per cohort was tested in NCT01519349; optimal dose for muscle hypertrophy vs. acceptable systemic exposure has not been established. #gap/dose-response-unclear

- **[[myostatin]] protein page is a stub.** This page links heavily to [[myostatin]] (the protein), which does not yet have a dedicated page. Given that four separate claims on this page depend on myostatin biology details, promoting [[myostatin]] to R24b is recommended (see summary).

---

## Cross-references

- [[myostatin]] (implicit stub — no page; R24b promotion candidate; this page depends on it)
- [[tgf-beta]] (R20 verified-partial) — pathway; SMAD2/3 signalling downstream of myostatin receptor ALK4/ALK5
- [[sarcopenia]] (existing page) — target phenotype for aging application
- [[satellite-cells]] (verified-partial) — resident muscle stem cells; myostatin suppresses their activation
- [[stem-cell-exhaustion]] (hallmark) — satellite cell depletion is a key sarcopenia driver
- [[altered-intercellular-communication]] (hallmark) — myostatin as aging-amplifying secreted paracrine/endocrine signal
- [[aav-tert]] (verified R23b sibling) — sibling gene therapy page; compare translation-gap strategies
- [[aav-klotho]] (R23b sibling) — another systemic aging gene therapy
- [[aav-osk]] (R23b sibling) — partial-reprogramming approach; different mechanism
- [[crispr-base-editing-pcsk9]] (R23b sibling) — cardiovascular gene therapy; regulatory precedent
- [[hallmarks-of-aging]] — stem-cell-exhaustion and altered-intercellular-communication
- [[sens-damage-categories]] — applicable to intracellular junk / extracellular junk (indirect)

---

## Footnotes

[^leemcpherron2001]: doi:10.1073/pnas.151270098 · Lee SJ, McPherron AC · in-vivo · Proc Natl Acad Sci USA 2001 · 98(16):9306–9311 · model: mouse (transgenic FST overexpression; hybrid SJL/C57BL/6 founders × wild-type C57BL/6 F1 offspring) · follistatin overexpression (human short-form isoform driven by myosin light chain promoter) produced muscle mass increases of 194–327% in best founder (F3), exceeding those seen in myostatin null mice in comparable backgrounds; authors attribute the excess effect to blockade of additional follistatin-sensitive ligands beyond myostatin (e.g., GDF-11, activins); defines follistatin as an in vivo muscle-growth promoter and functional myostatin antagonist · archive: local PDF available

[^mendell2017]: doi:10.1016/j.ymthe.2017.02.015 · Mendell JR et al. (Sahenk Z, Al-Zaidy S, Rodino-Klapac LR, Lowes LP, Alfano LN, Berry K, Miller N, Yalvac M, Dvorchik I, Moore-Clingenpeel M, Flanigan KM, Church K, Shontz K, Curry C, Lewis S, McColly M, Hogan MJ, Kaspar BK) · phase-1 · Mol Ther 2017 · 25(4):870–879 · model: human sIBM (n=6 analysed; full trial NCT01519349 n=15 including Becker MD); rAAV1.CMV.huFS344, 6×10¹¹ vg/kg per leg, bilateral IM injection to quadriceps · registered primary endpoint: safety (Grade III+ toxicities at 2 years); 6MWT efficacy analysis is post-hoc vs n=8 matched untreated clinic controls; annualised median 6MWT +56.0 m/yr treated vs −25.8 m/yr untreated (p=0.01); absolute changes ranged from +5 m to +153 m across 6 subjects; biopsy: decreased fibrosis, mTORC1 activation; no consistent T-cell immunity; anti-follistatin antibodies remained <1:50; no treatment-related AEs or SAEs · archive: local PDF available

[^mendell2016abs]: doi:10.1016/s1525-0016(16)33306-8 · Mendell JR et al. · conference abstract · Mol Ther 2016 · 24:S197–S198 · preliminary 6MWT improvement data from NCT01519349; superseded by full paper [^mendell2017] for quantitative claims

[^schuelke2004]: doi:10.1056/NEJMoa040933 · Schuelke M, Wagner KR, Stolz LE, Hübner C, Riebel T, Kömen W, Braun T, Tobin JF, Lee SJ · case-report · N Engl J Med 2004 · 350(26):2682–2688 · model: human (single paediatric case); homozygous loss-of-function myostatin mutation · gross skeletal muscle hypertrophy from birth; increased strength; no adverse effects at 4.5 years; proof-of-concept that myostatin loss of function is safe in humans · archive: local PDF available

[^whitelebrasseur2014]: doi:10.1159/000356740 · White TA, LeBrasseur NK · review · Gerontology 2014 · 60(2):89–97 · model: review of human + rodent data · summarises evidence for myostatin rise with aging; links myostatin to sarcopenic phenotype; not OA · archive: not_oa (no local PDF) — use with caution; review-level evidence only

[^rodino2009]: doi:10.1002/mus.21244 · Rodino-Klapac LR, Haidet AM, Kota J, Handy C, Kaspar BK, Mendell JR · review · Muscle Nerve 2009 · 39(3):283–296 · model: review; preclinical mouse + canine AAV-follistatin data · provides preclinical mechanistic detail for AAV-mediated FST delivery; rat and dog intramuscular delivery data · archive: pending download (green OA via PMC)

[^greenberg2017critique]: doi:10.1016/j.ymthe.2017.09.002 · Greenberg SA · letter/commentary · Mol Ther 2017 · 25(10):2235–2237 · critical analysis of Mendell 2017 [^mendell2017]; specific criticisms: (1) the published primary outcome (6MWT) contradicts the ClinicalTrials.gov-registered primary outcome (safety at 2 years); (2) the "annualised 6MWT" is a post-hoc-defined imaginary metric; (3) the treated group received 4 co-interventions (AAV-FS344, prednisone, exercise, placebo effect), making AAV attribution impossible; (4) AE frequency is misrepresented (fall rate was 33%, not 6%); (5) the conclusion that this is "the first trial to show clear evidence of treatment benefit in sIBM" neglects prior randomised trials; does not present new primary data; no published rebuttal from the Mendell group as of wiki creation 2026-05-06 · archive: local PDF available
