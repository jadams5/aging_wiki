---
type: study
doi: 10.1038/nature10600
pmid: 22048312
pmc: PMC3468323
title: "Clearance of p16Ink4a-positive senescent cells delays ageing-associated disorders"
authors: [Baker DJ, Wijshake T, Tchkonia T, LeBrasseur NK, Childs BG, van de Sluis B, Kirkland JL, van Deursen JM]
year: 2011
journal: Nature
volume: 479
issue: 7372
pages: 232-236
study-design: in-vivo
publication-type: research-article
organism: mus-musculus
n-subjects: null
intervention: []
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [ink-attac-transgene, p16-cell-clearance-delays-aging-phenotypes, progeroid-model, late-life-clearance-attenuates-established-decline, senescent-cells-causally-drive-tissue-dysfunction]
local-pdf: null
verified: true
verified-date: 2026-06-30
verified-by: claude
verified-scope: "Full text verified via PMC3468323. Sex, genetic background, and per-group n confirmed from Methods. Figure-encoded quantitative values (muscle fiber diameters, exercise duration/distance/work, fat depot weights, adipocyte size) are not stated as numbers in the main text and could not be extracted from the PMC HTML rendering — qualitative descriptions confirmed accurate. WT arm reframed from 'no phenotypic benefit' to safety-control (see corrections). Late-life cataract finding added."
---

# Baker et al. 2011 — INK-ATTAC: p16^Ink4a-cell clearance delays ageing-associated disorders

***Nature* 479: 232–236, 2011.** doi:[10.1038/nature10600](https://doi.org/10.1038/nature10600) · PMID:22048312 · PMC:PMC3468323

The **foundational genetic proof-of-concept** that [[cellular-senescence|senescent cells]] causally drive age-associated tissue dysfunction — and that eliminating them (via a drug-inducible suicide transgene targeting p16^Ink4a-expressing cells) can delay or attenuate that dysfunction. This paper used a **progeroid mouse model** and a **purely genetic tool** (INK-ATTAC), making its conclusions **entirely independent** of the p16-antibody reagents implicated in the 2025–2026 p16-immunodetection scandal.

---

## Model and experimental system

### BubR1^H/H progeroid mouse

BubR1 (encoded by *Bub1b*) is a critical component of the spindle assembly checkpoint. **BubR1^H/H** ("H" = hypomorphic) mice carry two hypomorphic alleles that drastically reduce BubR1 protein levels, causing accelerated accumulation of age-related phenotypes including lordokyphosis (spinal curvature), cataracts, lipodystrophy, and sarcopenia — with a markedly shortened lifespan relative to wild-type. This is a **progeroid model of accelerated aging**, not chronological aging; see § Caveats below.

**Methods details (confirmed from primary source):** All experimental animals were **female**. Mice were on a **mixed 129 × C57BL/6 × FVB genetic background**. Two independent INK-ATTAC transgenic lines were used (**lines 3 and 5**); both showed selective GFP expression colocalizing with endogenous p16^Ink4a. Primary phenotype cohorts (lifelong clearance, Fig. 2): **n = 6 females per genotype per treatment**. Senescence marker cohorts (SA-β-gal, Fig. 3): **n = 3 per group**. Late-life clearance cohorts (Fig. 4): n = 5–9 per group (varies by time point). Statistical tests: two-tailed unpaired t-tests for all pairwise comparisons.

### INK-ATTAC transgene

The key tool introduced in this paper. INK-ATTAC encodes a **drug-inducible suicide switch** expressed selectively in p16^Ink4a-positive cells:

- A **2,617-bp fragment of the murine *Cdkn2a*/p16^Ink4a promoter** drives expression of a membrane-targeted **FKBP–Caspase-8 fusion protein** (FKBP-Casp8) plus an IRES-EGFP reporter.
- **AP20187**, a synthetic dimerizer drug (CID compound), binds FKBP and forces dimerization of the Caspase-8 domain — triggering apoptosis.
- Because only p16^Ink4a-expressing cells transcribe the transgene, AP20187 selectively kills **only the p16^Ink4a-positive (senescent) subpopulation**, leaving p16^Ink4a-negative cells intact.
- The EGFP reporter allows GFP sorting: sorted GFP+ cells confirmed to have markedly higher endogenous *p16^Ink4a* mRNA than GFP− counterparts by qRT-PCR, validating transgene fidelity [^baker2011].
- **No antibody involved** — this makes the INK-ATTAC results immune to concerns about anti-p16 antibody specificity (the 2025–2026 Bhatt/Bhati controversy).

**AP20187 dosing:** intraperitoneal injection at **0.2 µg g^−1 body weight every 3 days** throughout the treatment period.

---

## Experimental arms and key results

### Arm 1: Lifelong clearance (treatment from 3 weeks of age)

BubR1^H/H;INK-ATTAC mice treated with AP20187 from weaning (3 weeks) to endpoint (10 months):

| Tissue/phenotype | AP20187-treated BubR1^H/H | Untreated BubR1^H/H |
|---|---|---|
| **Skeletal muscle — sarcopenia** | Larger muscle fiber diameters; significantly greater exercise duration, distance, and work performed (all p<0.05) | Severe atrophy and reduced exercise capacity |
| **Adipose tissue — lipodystrophy** | All major fat depots significantly larger; adipocytes markedly increased in size; subdermal adipose tissue significantly increased | Near-complete loss of subcutaneous and visceral fat |
| **Eye — cataracts** | Substantially delayed onset | Early-onset cataracts |
| **Spine — lordokyphosis** | Delayed onset | Progressive spinal curvature from young age |

SA-β-galactosidase staining in adipose tissue showed a **marked decrease** in AP20187-treated BubR1^H/H animals, confirming that senescent-cell burden was reduced in situ [^baker2011].

### Arm 2: Late-life clearance (treatment from 5 months of age)

A critical translational arm — treating mice only **after** progeroid phenotypes were already established (from 5 months to 10 months):

- **Skeletal muscle:** Increased mean muscle fiber diameters and improved performance on treadmill exercise tests — demonstrating that clearance can **attenuate progression** of established sarcopenia, not only prevent it [^baker2011].
- **Adipose tissue:** Most fat depots enlarged relative to untreated BubR1^H/H;INK-ATTAC controls.
- **Eye — cataracts:** Cataracts had **already fully matured** by the onset of AP20187 treatment at 5 months and **remained unchanged** — clearance could not reverse fully established lens opacity, indicating that the reversibility window for this endpoint closes before 5 months in BubR1^H/H mice.
- Together these results show that **senescent-cell accumulation is not simply a scar of past damage** — ongoing presence of p16^Ink4a+ cells is required to sustain the dysfunction, and their removal reverses it even in later life for muscle and adipose tissue (but not for phenotypes fully established before clearance begins, such as mature cataracts).

### Arm 3: Wild-type safety-control arm

BubR1-WT;INK-ATTAC mice were continuously treated with AP20187 until 8 months of age as a **safety control**: the paper reports **no adverse effects** from this protocol, confirming that AP20187-induced clearance of p16^Ink4a+ cells in non-progeroid mice does not cause overt toxicity. Detailed phenotypic measurements analogous to the BubR1^H/H arms (exercise capacity, muscle histology, fat depot mass) were not reported for this WT group in the main text. Supplementary data showed that INK-ATTAC-3 WT mice do accumulate p16^Ink4a-positive cells with chronological aging, providing a mechanistic basis for inferring (but not demonstrating in this paper) that longer treatment in older WT animals could produce measurable phenotypic rescue — an inference directly addressed by Baker 2016 [^baker2016natural], where the same INK-ATTAC system in naturally aged mice did extend healthspan.

---

## Mechanistic interpretation

The INK-ATTAC system established, for the first time, that:

1. p16^Ink4a-positive cells are **not merely bystanders** — their causal removal attenuates organ dysfunction.
2. p16^Ink4a+ cells accumulate selectively in aging and progeroid tissues at sites of dysfunction (adipose, muscle, eye lens).
3. The dysfunction is **reversible** (late-life arm): ongoing p16^Ink4a+ cell presence is required, not just their historical accumulation.
4. Clearance is well-tolerated: no overt toxicity from AP20187 or from selective loss of p16^Ink4a+ cells, supporting a senolytic therapeutic window.

The mechanism downstream of clearance — whether reduced [[sasp|SASP]] signaling, stem/progenitor cell niche restoration, reduced tissue inflammation, or a combination — was not dissected in this paper. See [[cellular-senescence]] for the SASP framework and downstream pathway evidence.

---

## Relationship to the [[p16-rb-pathway]]

INK-ATTAC uses only a **promoter fragment** of *Cdkn2a* (the locus encoding p16^Ink4a). It does not require antibody-based p16 protein detection. This makes the causal conclusions robust regardless of p16-antibody specificity debates (see [[methods/p16-immunodetection]] for the antibody-specificity controversy and what it does and does not affect). The INK-ATTAC approach identifies p16-*transcriptionally-active* cells; the fraction of these cells that are "truly" senescent by additional criteria (SA-β-gal, p21, morphology) was not exhaustively enumerated but GFP/p16 qRT-PCR colocalization validates the logic [^baker2011].

---

## Downstream work and cross-references

- **[[studies/baker-2016-naturally-occurring-senescent-clearance]]** — the critical natural-aging follow-up: the same INK-ATTAC system showed that p16^Ink4a+ cell clearance extends *healthspan* (median lifespan +~25%) in normally aged mice (not just progeroid BubR1^H/H), resolving the WT arm null result from this 2011 paper. #gap/needs-replication — Baker 2016 used a different mouse stock and only one sex; independent replication in naturally aging animals from non-transgenic backgrounds is needed.
- **[[interventions/pharmacological/senolytics]]** — the therapeutic class this paper genetically validated; all current pharmacological senolytics (D+Q, fisetin, navitoclax) are attempts to replicate INK-ATTAC pharmacologically.
- **[[cellular-senescence]]** — primary atomic home for the senescent-cell biology framing.
- **[[pathways/p16-rb-pathway]]** — the pathway whose p16^Ink4a arm defines the transgene-target population.
- **[[methods/p16-immunodetection]]** — explains why this paper's conclusions are antibody-independent and why that distinction matters post-2025.

---

## Caveats and limitations

1. **Progeroid model only (2011 paper).** BubR1^H/H mice age abnormally fast due to spindle checkpoint deficiency — not a model of chronological aging. Whether p16^Ink4a+ cells in normally aged animals drive equivalent dysfunction was not addressed until Baker 2016.
2. **Quantitative effect sizes not fully reported.** The PMC full text describes effects as "significantly increased/decreased" with p<0.05 but specific percentage changes for muscle fiber diameter or fat depot weight are not stated in the main text; they are encoded in figure panels. Verify specific numbers against Figures 2–4 in the PDF.
3. **No lifespan data in this paper.** The BubR1^H/H;INK-ATTAC AP20187-treated mice were not followed to natural death — only endpoint phenotyping at 10 months was reported.
4. **Sex and genetic background.** All experimental animals were **female** on a **mixed 129 × C57BL/6 × FVB genetic background**. Results are therefore specific to female mice on an admixed background; generalizability to male mice or pure inbred lines is not established by this paper. #gap/needs-replication
5. **INK-ATTAC is a transgene, not a drug.** Translation to human therapeutics requires a pharmacological equivalent capable of selective senescent-cell killing — the central challenge addressed by the senolytic drug-development field.

[^baker2011]: [[studies/baker-2011-ink-attac]] · n=6/group primary phenotype cohort; n=3/group SA-β-gal; n=5–9 late-life arm · all female; mixed 129 × C57BL/6 × FVB background · in-vivo · p<0.05 (two-tailed unpaired t-test) for muscle/adipose endpoints · model: BubR1^H/H progeroid mouse; INK-ATTAC transgene lines 3 and 5 + AP20187 dimerizer

[^baker2016natural]: [[studies/baker-2016-naturally-occurring-senescent-clearance]] · in-vivo · model: naturally aged INK-ATTAC mice · lifespan + healthspan endpoints — stub; #gap/needs-stub-expansion
