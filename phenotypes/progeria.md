---
type: phenotype
aliases: [HGPS, Hutchinson-Gilford Progeria Syndrome, progeria syndrome, progerin disease]
icd-10: E34.8
affected-tissues: ["[[skin]]", "[[bone]]", "[[blood-vessels]]", "[[heart]]"]
underlying-hallmarks: ["[[genomic-instability]]", "[[loss-of-proteostasis]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
typical-onset: "first year of life (failure to thrive ~6–12 months; diagnosis typically by 18–24 months)"
prevalence: "~1 in 4 million live births (Gordon 2018 JAMA); prevalence ~1 in 20 million living individuals; ~400 known cases ever recorded; ~150–200 alive at any given time"
# Note: schema uses prevalence-65plus: for geriatric phenotypes. HGPS is a pediatric disease with no 65+ population;
# using prevalence: here is a justified schema departure. Document on next CLAUDE.md review.
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Eriksson 2003, Goldman 2004, Cao 2011 JCI, Cao 2011 SciTransMed, Gordon 2014 Circulation, Gordon 2018 JAMA PDFs verified against all load-bearing claims. Scaffidi 2006 PDF download failed (status: failed); claims from that paper remain unverified against primary source — tagged below. De Sandre-Giovannoli 2003 not_oa — tagged. Ocampo 2016 verified on partial-reprogramming.md (verified page) — not re-verified here."
---


# Hutchinson-Gilford Progeria Syndrome (HGPS)

A rare, fatal **segmental progeroid syndrome** caused by a de novo dominant point mutation in *LMNA* that accelerates selected features of aging — especially cardiovascular disease, lipodystrophy, alopecia, and bone/joint degeneration — while conspicuously sparing others (neurodegeneration, cancer predisposition). Median age of death is ~14.5 years, overwhelmingly from atherosclerosis and heart attack or stroke. **HGPS is not a complete model of normal aging**, but it is one of the most powerful probes of which aging phenotypes are nuclear-envelope-driven.

---

## Definition and clinical features

HGPS is clinically silent at birth. The phenotypic cascade emerges in the first year of life and progresses relentlessly:

| Time point | Feature |
|---|---|
| 6–18 months | Failure to thrive; growth deceleration (height and weight fall off percentile curves) |
| 1–2 years | Alopecia (total, including eyebrows and eyelashes); sclerodermatous skin; loss of subcutaneous fat |
| 2–5 years | Delayed and abnormal dentition; high-pitched voice; "aged" facial appearance (prominent eyes, small jaw, beaked nose) |
| Throughout | Progressive joint stiffness; coxa valga; hip dislocations; pathological fractures |
| ~7–10 years | Clinically detectable atherosclerosis; angina; transient ischaemic attacks |
| Mean/median ~14.5–14.6 yr | Death — at least 90% from progressive atherosclerosis of coronary and cerebrovascular arteries [^eriksson2003]; in the largest cohort study (n=258), primary cause was heart failure in 79.4% of identified deaths [^gordon2018]; mean 14.5 yr, median 14.6 yr from untreated natural history (n=195 untreated) [^gordon2018] |

**Segmental nature — important caveat:** HGPS accelerates a specific subset of aging phenotypes. Features conspicuously **absent** or under-represented relative to normal aging:
- Neurodegeneration (cognitive decline, dementia) — not a feature
- Cancer predisposition — not elevated
- Immune senescence — minimal
- Cataracts — not typical

This selectivity is diagnostically informative and cautionary: HGPS is not a miniature version of all aging; it is a window into the cardiovascular/connective tissue arm of the aging phenome.

---

## Genetics

### Canonical mutation: c.1824C>T (p.G608G)

The vast majority (~90%) of HGPS cases are caused by a single recurrent de novo point mutation in exon 11 of *LMNA* [^eriksson2003][^desandre2003]:

- Genomic position: *LMNA* exon 11, c.1824C>T
- Amino acid effect: **silent** at the protein level (both C and T encode glycine at position 608 = p.G608G)
- Mechanism: the C→T change strengthens a cryptic splice donor site 150 bp upstream of the normal exon 11 splice site, causing **deletion of 150 nucleotides (50 amino acids)** from the mature mRNA
- Result: a truncated, internally deleted lamin A protein called **progerin** (also written Δ150 prelamin A)

The mutation is **autosomal dominant** and virtually always arises de novo — parents are unaffected. Germline inheritance is essentially impossible given the severity and early lethality of the disease. Rare non-canonical *LMNA* mutations can produce HGPS-like phenotypes; these are also segmental but may differ in severity and tissue distribution.

### Gene context

[[lmna]] (chromosome 1q22) encodes lamin A and lamin C via alternative splicing. Lamins A and C are type V intermediate filament proteins that form the nuclear lamina — a meshwork on the inner surface of the nuclear envelope that maintains nuclear architecture, tethers heterochromatin, regulates gene expression, and serves as a scaffold for DNA repair factors. For canonical lamin A protein page, see [[lmna]]. #gap/needs-canonical-id — [[lmna]] page not yet seeded.

---

## Molecular mechanism: progerin and nuclear envelope disruption

### The farnesylation trap

Normal prelamin A maturation requires sequential post-translational processing:
1. Farnesylation of a C-terminal CAAX motif by [[farnesyltransferase]]
2. Proteolytic removal of the -AAX tripeptide by ZMPSTE24 (an endoprotease)
3. Carboxymethylation
4. Final cleavage by [[zmpste24]] of the last 15 amino acids (including the farnesylated cysteine) → mature lamin A is **not** farnesylated

**Progerin lacks the second ZMPSTE24 cleavage site** because the 50-aa deletion (Δ150) removes the sequence that ZMPSTE24 recognizes for the final cleavage step. As a result, progerin retains its farnesyl group **permanently** and remains anchored to the inner nuclear membrane [^eriksson2003].

### Downstream nuclear pathology

Permanent farnesylation of progerin causes a cascade of nuclear structural failures [^goldman2004]:

- **Nuclear blebbing and shape irregularities** — the stiff, over-anchored progerin disrupts the normal elastic properties of the lamina; nuclei develop herniations and lobulations visible by electron microscopy
- **Loss of peripheral heterochromatin** — peripheral heterochromatin is progressively lost in late-passage HGPS cells (visible by EM); lamin-B1 segregates away from lamin-A in lobulated late-passage HGPS nuclei [^goldman2004]; H3K27me3 (facultative heterochromatin) is also reduced in HGPS cells and restored by rapamycin [^cao2011stm]
- **DNA damage response (DDR) activation** — progerin accumulation blocks the chain-elongation phase of DNA replication (evidenced by early-S-phase PCNA pattern arrest in late-passage HGPS cells) and disrupts nuclear pore distribution, impairing nuclear trafficking; persistent DDR signaling (γH2AX, 53BP1 foci) has been documented in HGPS cells [^goldman2004] #gap/needs-replication — Goldman 2004 directly demonstrated the replication block and heterochromatin loss; 53BP1/γH2AX characterisation is from subsequent studies
- **Premature cellular senescence** — HGPS cells have drastically reduced replicative lifespan and strongly upregulate p21, p16^INK4a, and other senescence markers; see [[cellular-senescence]]
- **Telomere dysfunction** — telomere shortening in normal cells can trigger the same cryptic splice site that produces progerin, creating a feedforward loop between telomere dysfunction and progerin production [^cao2011jci]
- **Proteostasis failure** — progerin misfolds and aggregates resist normal clearance; see mTOR/autophagy link below

---

## Hallmark contributions of progerin

| Hallmark | Mechanism in HGPS | Status in normal aging |
|---|---|---|
| [[genomic-instability]] | Persistent DDR activation; DNA replication block at early-S-phase (PCNA arrest in late-passage cells [^goldman2004]); disrupted nuclear pore distribution impairs nuclear trafficking; reduced 53BP1-positive foci in rapamycin-treated HGPS cells [^cao2011stm] | Partial overlap — nuclear lamina erosion in aged cells contributes to DDR activation |
| [[cellular-senescence]] | Drastically reduced replicative lifespan; p16/p21 upregulation; SASP production | Senescent cells accumulate with age; SASP context shared |
| [[loss-of-proteostasis]] | Progerin is a misfolded, poorly-cleared protein; rapamycin-induced autophagy clears it [^cao2011stm] | Proteostasis decline is a canonical hallmark |
| [[stem-cell-exhaustion]] | HGPS affects mesenchymal stem cell function; adipogenic differentiation impaired; bone and skin phenotypes partly stem-cell-driven | MSC dysfunction is a contributor to normal aging |
| [[epigenetic-alterations]] | H3K27me3 loss (facultative heterochromatin mark); heterochromatin erosion; peripheral heterochromatin loss visible by EM in late-passage HGPS cells [^goldman2004]; H3K27me3 redistribution reversed by rapamycin [^cao2011stm] | Epigenetic drift is central to aging; HGPS phenocopies this at high speed |

---

## Mouse models

### LAKI G609G knockin (LmnaG609G/G609G)

The primary mouse model of HGPS carries the equivalent of the human c.1824C>T mutation (murine codon G609G) introduced as a knockin into the endogenous *Lmna* locus. Homozygous mice develop HGPS-like phenotypes — growth retardation, lipodystrophy, cardiovascular pathology — with a compressed lifespan of ~6–8 months compared to ~2 years for wild-type littermates.

**This is the model used in Ocampo et al. 2016 partial reprogramming.** Cyclic OSKM expression (2 days on / 5 days off, doxycycline-inducible) extended LAKI mouse lifespan and ameliorated cellular aging hallmarks [^ocampo2016]. See [[partial-reprogramming]] (verified) for full details.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (progerin mechanism is identical; LAKI recapitulates human HGPS mutation) |
| Phenotype conserved in humans? | partial (cardiovascular and metabolic features conserved; neurological differences exist; compressed timeline vs human disease) |
| Replicated in humans? | partial — pharmacological findings (lonafarnib) supported in human trials |

**Important caveat:** The LAKI model recapitulates HGPS, not normal aging. Partial reprogramming results in LAKI mice should not be directly extrapolated to normally aged mice or humans. The Ocampo 2016 experiments also included 12-month-old wild-type mice for some assays, but lifespan extension was demonstrated only in the progeria model. See [[partial-reprogramming]] § Caveats for full treatment. #gap/needs-human-replication

---

## Treatments

### Lonafarnib (farnesyltransferase inhibitor, FTI) — FDA-approved 2020

**Mechanism:** Lonafarnib inhibits the farnesyltransferase enzyme that attaches the farnesyl group to prelamin A's CAAX motif. In HGPS, blocking farnesylation prevents the formation of fully-processed progerin (some partially-processed intermediate accumulates, but it is less toxic than the fully-farnesylated form). This reduces the load of membrane-anchored progerin. See [[lonafarnib]] for compound-level details. #gap/needs-canonical-id — [[lonafarnib]] page not yet seeded.

**Clinical evidence:**

The Progeria Research Foundation ProLon trials established lonafarnib's survival benefit:

- **Gordon et al. 2014 (Circulation)** — Survival analysis combining lonafarnib monotherapy and combination therapy trial cohorts (n=43 treated, n=161 untreated, total n=204); Kaplan–Meier survival analysis of the largest untreated HGPS cohort assembled to that point; mean survival 14.6 yr, median 14.5 yr for untreated; treatment (any farnesylation inhibitor regimen) increased mean survival by **1.6 years** (95% CI 0.8–2.4 yr; P<0.001; HR 0.13, 95% CI 0.04–0.37); first study to demonstrate that treatments influenced HGPS survival [^gordon2014].
- **Gordon et al. 2018 (JAMA)** — Cohort study comparing treated patients from 2 lonafarnib monotherapy trials (ProLon1 n=27, ProLon2 n=36; combined n=63) against contemporaneous matched untreated controls (matched on age, sex, continent of residency) drawn from n=195 untreated patients in the natural history cohort (total n=258 in full cohort); lonafarnib monotherapy 150 mg/m² twice daily. In the primary analysis (ProLon1 vs matched controls): 1 death (3.7%) in 27 treated vs 9 deaths (33.3%) in 27 matched untreated; HR 0.12 (95% CI 0.01–0.93; P=.04). In the combined secondary analysis (n=63 treated vs 63 matched untreated): 4 deaths (6.3%) vs 17 deaths (27.0%); HR 0.23 (95% CI 0.06–0.90; P=.04). Untreated natural history: mean 14.5 yr, median 14.6 yr survival. Median treatment duration 2.2 years [^gordon2018]. This survival benefit supported FDA accelerated approval of lonafarnib in November 2020. **Lonafarnib is the first and only FDA-approved treatment for HGPS.**
- Dose-limiting toxicities: GI toxicity (nausea, vomiting, diarrhea) at higher doses; managed by gradual dose escalation. #gap/dose-response-unclear — optimal dosing for maximum survival benefit vs toxicity not fully resolved.

| Dimension (Gordon 2018) | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — human trial |
| Replicated in humans? | yes — this is the human trial |

### Investigational approaches

| Approach | Rationale | Stage |
|---|---|---|
| Rapamycin (mTOR inhibitor) | Induces autophagy, enhancing clearance of progerin aggregates; reversed HGPS cellular phenotypes in vitro [^cao2011stm] | Preclinical (in vitro; mouse model in development); #gap/needs-human-replication |
| Antisense oligonucleotides (ASOs) targeting cryptic splice site | Block the aberrant splicing to reduce progerin production at the mRNA level | Preclinical; mouse data published; human trials not yet completed |
| CRISPR-Cas9 base editing | Correct the c.1824C>T mutation directly; proof-of-concept in HGPS iPSC-derived cells and mouse model | Preclinical; promising but delivery and off-target safety unresolved |
| Combined lonafarnib + pravastatin + zoledronate | Statins and bisphosphonates partially reduce progerin via alternative farnesylation-pathway effects; combination shown superior to lonafarnib alone in mouse models | Clinical trial ongoing (NCT00916747) |
| Partial reprogramming (OSKM) | Resets epigenetic state without correcting the *Lmna* mutation; demonstrated in LAKI mice [^ocampo2016] | Preclinical only; see [[partial-reprogramming]] |

---

## Relationship to normal aging

### Progerin is detectable in normally aged tissues — but causality is debated

Scaffidi and Misteli (2006) demonstrated that normal human fibroblasts from older donors produce **low levels of progerin** via the same cryptic splice site activated in HGPS, and that these cells display HGPS-like nuclear architectural defects that can be partially reversed by anti-sense inhibition of progerin [^scaffidi2006]. This suggested progerin contributes mechanistically to normal aging. #gap/no-fulltext-access — Scaffidi 2006 PDF download failed; these claims from the wiki have not been verified against the primary source.

Cao et al. (2011 JCI) extended this finding: **telomere shortening in normal cells causally activates progerin production via the cryptic splice site**, creating a feedforward loop — dysfunctional telomeres trigger the same abnormal *LMNA* splicing seen in HGPS; the resulting progerin then further destabilizes the nucleus [^cao2011jci]. #gap/needs-replication

**Caveats and the debate:**
- The level of progerin in normally aged cells is orders of magnitude lower than in HGPS cells; whether this low level has any functionally significant effect on nuclear architecture in vivo is contested #gap/contradictory-evidence
- HGPS cells produce progerin continuously from birth; normal cells produce it only in late replicative senescence when telomeres shorten — fundamentally different kinetics
- The absence of neurodegeneration and cancer in HGPS (which are prominent in normal aging) argues that progerin alone cannot account for all aging hallmarks
- No loss-of-function study in normal aging has directly tested whether blocking low-level progerin production slows aging parameters in non-HGPS contexts

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — cryptic splice site and progerin structure are human |
| Phenotype conserved in humans? | partial — nuclear irregularities in aged cells; whole-organism relevance unclear |
| Replicated in humans? | partial — Scaffidi 2006 and Cao 2011 are human cell studies; in vivo human evidence limited |

The conservative interpretation: HGPS is a **probe**, not a perfect model. It reveals which aging processes are highly sensitive to nuclear lamina dysfunction; it does not establish that nuclear lamina dysfunction at normal-aging levels is a principal driver of normal aging.

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[lmna]] | Gene encoding lamin A/C; mutations cause HGPS; also implicated in other laminopathies |
| [[progerin]] | The truncated lamin A protein produced by the cryptic splice; core molecular lesion |
| [[zmpste24]] | Endoprotease whose cleavage site is deleted in progerin; required for normal lamin A maturation |
| [[farnesyltransferase]] | Enzyme blocked by lonafarnib; farnesylates the CAAX motif that gets permanently retained in progerin |
| [[lonafarnib]] | FDA-approved FTI; first disease-modifying therapy for HGPS |
| [[nuclear-lamina]] | Structural scaffold disrupted by progerin; broader context of laminopathies |
| [[cellular-senescence]] | Progerin drives premature senescence in HGPS cells; shared hallmark |
| [[genomic-instability]] | DDR activation is central to HGPS cell pathology |
| [[partial-reprogramming]] (verified) | Ocampo 2016 used the LAKI G609G mouse model; cyclic OSKM extended LAKI lifespan |
| [[epigenetic-alterations]] | Progerin causes H3K9me3/H3K27me3 loss; epigenetic drift phenocopied in HGPS |
| [[autophagy]] | Rapamycin-induced autophagy clears progerin; mTOR-autophagy axis relevant to treatment |
| [[mtor]] | mTOR inhibition by rapamycin restores progerin clearance in HGPS cells |
| [[hallmarks-of-aging]] | HGPS serves as a segmental accelerated-aging model; multiple hallmarks driven by progerin |
| [[genomic-instability]] | Progerin disrupts DDR scaffolding; persistent DNA damage in HGPS cells |

---

## Limitations and gaps

- **Segmental, not global:** HGPS accelerates cardiovascular/connective tissue aging while sparing neurodegeneration and cancer; it is an incomplete model of normal aging. Do not overextract mechanism claims to non-cardiovascular hallmarks without independent evidence. #gap/contradictory-evidence
- **Low-level progerin in normal aging — causal role unclear:** Detection in aged fibroblasts and a feedforward loop with telomere shortening have been shown, but whether this contributes functionally to in vivo aging at non-HGPS levels is unresolved. #gap/no-mechanism
- **Treatment: survival benefit demonstrated, not cure:** Lonafarnib monotherapy associated with significantly lower mortality rate (HR 0.12–0.23 vs untreated contemporaneous controls; median follow-up ~2.2 yr) [^gordon2018]; combination therapy (lonafarnib + pravastatin + zoledronate) associated with ~1.6 yr mean survival increase [^gordon2014]; HGPS patients still die in early–mid adolescence. Disease remains fatal. #gap/long-term-unknown
- **ASO and CRISPR therapies:** Preclinical only; no completed human trial data. #gap/needs-human-replication
- **Partial reprogramming (Ocampo 2016):** Demonstrated in progeria model, not normal aging. Cannot be directly extrapolated. See [[partial-reprogramming]] § Caveats. #gap/needs-human-replication
- **Rapamycin in HGPS:** Cellular evidence for progerin clearance via autophagy is strong; in vivo human HGPS trial data with rapamycin alone is limited. #gap/needs-human-replication
- **Mouse model limitations:** LAKI G609G mice have compressed timelines and may not fully recapitulate the cardiovascular pathology in HGPS children; some phenotypes differ between homo- and heterozygous knockins. #gap/needs-replication

---

## Footnotes

[^eriksson2003]: [[studies/eriksson-2003-progeria-lmna-mutation]] · doi:10.1038/nature01629 · Eriksson M et al. · Nature 2003;423(6937):293–298 · n=20 unrelated HGPS patients (classic) + 2 atypical cases, + 12 unaffected first-degree relatives + 6 HeLa/lymphoblastoid controls · observational/genetic · model: human · local PDF available · 2153 citations; citation_percentile=100 · identified the recurrent de novo c.1824C>T (G608G) silent mutation in LMNA exon 11 in 18/20 classic HGPS patients; showed activation of cryptic splice site producing 150-nt (50 aa) deletion in prelamin A mRNA; 48% of patient fibroblasts had misshapen nuclei; stated "death occurs on average at age 13" and "at least 90% of patients die from progressive atherosclerosis of the coronary and cerebrovascular arteries" — note: the 14.5–14.6 yr mean/median figures come from later larger-cohort studies (Gordon 2014/2018, n=161–204 untreated)

[^desandre2003]: doi:10.1126/science.1084125 · De Sandre-Giovannoli A et al. · Science 2003;300(5628):2055 · concurrent independent discovery of truncated lamin A (progerin) in HGPS; same exon 11 mutation · model: human · not_oa — no local PDF · 1448 citations; citation_percentile=100

[^goldman2004]: doi:10.1073/pnas.0402943101 · Goldman RD et al. · PNAS 2004;101(24):8963–8968 · n=HGPS patient fibroblast lines (HGADFN003; 2-yr-old donor) + normal aged (92-yr) and foreskin fibroblast controls · in-vitro · model: human cell lines · local PDF available · 1098 citations; citation_percentile=100 · documented progressive nuclear shape abnormalities (lobulation increasing from 31% at P6 to 80.9% at P26), loss of peripheral heterochromatin (by electron microscopy, not histone-mark staining), clustering of nuclear pores, and thickening of the nuclear lamina correlating with passage number in HGPS cells; LA∆50 injection into normal cells rapidly induces the same lobulations; late-passage HGPS cells show early-S-phase PCNA arrest suggesting DNA replication block; H3K9me3/H3K27me3 histone marks NOT characterized in this paper (that is from Cao 2011 SciTransMed and Shumaker et al.)

[^scaffidi2006]: doi:10.1126/science.1127168 · Scaffidi P, Misteli T · Science 2006;312(5776):1059–1063 · n=normal human fibroblasts from donors aged 0–96 yr · in-vitro/observational · model: human (primary cells) · download status: failed (green OA via PMC per metadata, but no PMC candidate URLs found by downloader) #gap/no-fulltext-access · 1185 citations; citation_percentile=100 · showed low-level progerin production via cryptic splice in normally-aged human fibroblasts; older donors produced more progerin; anti-sense suppression of progerin reversed nuclear defects in aged cells; first evidence linking progerin to normal aging mechanism · UNVERIFIED against primary PDF — claims from this paper on the wiki have not been cross-checked

[^cao2011jci]: doi:10.1172/JCI43578 · Cao K, Blair CD, Faddah DA et al. · J Clin Invest 2011;121(7):2833–2844 · n=6 independent primary fibroblast lines (donors aged 10–92 yr) + immortalized lines + dyskeratosis congenita (DC) patient lines; also TERT-immortalized and H-rasV12 oncogene-induced senescence lines · in-vitro · model: human (primary cells) · local PDF available · 297 citations; citation_percentile=100 · using a 2-color progerin splicing reporter construct (GFP/DsRed), demonstrated that activation of the cryptic LMNA splice site correlates with cell passage number (not donor age); telomere shortening (not oncogene-driven senescence) is the upstream activator — telomerase overexpression suppressed progerin production 3–10-fold; cells with short dysfunctional telomeres (DC patients with TERT haploinsufficiency) showed >2-fold elevated progerin; TRF2^ΔBAM (uncapped telomeres) induced >8-fold progerin upregulation; extensive alternative splicing of multiple other genes also occurred during telomere-driven senescence; feedforward loop: telomere dysfunction → progerin → further nuclear destabilization → accelerated senescence · Cao year resolved: this is definitively the 2011 JCI paper; any prior reference to "Cao 2007 JCI" was erroneous

[^cao2011stm]: [[studies/cao-2011-rapamycin-progeria]] · doi:10.1126/scitranslmed.3002346 · Cao K et al. · Sci Transl Med 2011;3(89):89ra58 · n=HGPS patient-derived fibroblasts (in vitro) · in-vitro · model: human cell lines · local PDF available · 345 citations; citation_percentile=100 · rapamycin induced autophagy and enhanced progerin clearance; reversed nuclear blebbing, cellular senescence markers, and gene expression abnormalities in HGPS fibroblasts; first evidence for mTOR-autophagy axis as therapeutic target in HGPS

[^gordon2014]: doi:10.1161/CIRCULATIONAHA.113.008285 · Gordon LB et al. · Circulation 2014;130(1):27–34 · n=43 treated (farnesylation inhibitor trials), n=161 untreated, total n=204 · observational/survival analysis (NOT a Phase 2 outcomes paper — primary outcomes of ProLon1 are in Gordon 2012 PNAS) · model: human · local PDF available · 234 citations; citation_percentile=100 · first survival analysis in HGPS; mean survival 14.6 yr, median 14.5 yr for untreated (n=204 Kaplan–Meier); treatment (any farnesylation inhibitor) associated with mean survival increase of 1.6 yr (95% CI 0.8–2.4 yr; P<0.001; HR 0.13, 95% CI 0.04–0.37); 5/43 deaths in treated vs 21/43 deaths in matched untreated; median follow-up 5.3 yr

[^gordon2018]: doi:10.1001/jama.2018.3264 · Gordon LB et al. · JAMA 2018;319(16):1687–1695 · n=258 total in natural history cohort; 63 treated (ProLon1 n=27, ProLon2 n=36) vs contemporaneous matched untreated controls (NOT historical controls — matched on age, sex, continent) · observational cohort study · model: human · local PDF available · 210 citations; citation_percentile=100 · untreated natural history: mean 14.5 yr, median 14.6 yr; primary analysis HR 0.12 (95% CI 0.01–0.93; P=.04); combined analysis HR 0.23 (95% CI 0.06–0.90; P=.04); median treatment duration 2.2 yr; primary cause of death in identified cases: heart failure 79.4% (of n=73 identified deaths); supported FDA accelerated approval Nov 2020 · NOTE: the "2.5 years longer (median 14.6 yr vs 13.4 yr; log-rank p=0.0013)" figures from the AI extraction are NOT present in this paper and have been removed

[^ocampo2016]: [[studies/ocampo-2016-partial-reprogramming]] · doi:10.1016/j.cell.2016.11.052 · Ocampo A et al. · Cell 2016;167(7):1719–1733 · in-vivo (cyclic dox-inducible OSKM) · model: LAKI G609G knockin HGPS mouse + 12-month-old WT C57BL/6J · local PDF available · 903 citations; citation_percentile=100 · cyclic 2d-on/5d-off OSKM extended lifespan in progeria model; ameliorated cellular aging hallmarks; **progeria model only — not normal aging**; see [[partial-reprogramming]] for full caveats
