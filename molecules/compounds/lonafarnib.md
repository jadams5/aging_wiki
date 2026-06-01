---
type: compound
aliases: [SCH-66336, Zokinvy, farnesyltransferase inhibitor HGPS]
pubchem-cid: 148195
inchikey: DHMTURDWPRKSOA-RUZDIDTESA-N
chembl-id: CHEMBL298734
drugbank-id: DB06105
cas-number: null   # not confirmed via PubChem; #gap/needs-canonical-id
biologic: false
mechanisms: [farnesyltransferase-inhibitor, progerin-mislocalization-blocker]
targets: ["[[farnesyltransferase]]", "[[lmna]]"]
hallmarks: ["[[genomic-instability]]", "[[loss-of-proteostasis]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: phase-3-rct-needed   # strong evidence in HGPS; no RCT data for non-HGPS aging
next-experiment: "Phase 2 trial of lonafarnib in older adults (70+) with elevated progerin-positive cells and subclinical cardiovascular risk; n>=200; primary endpoint cardiovascular event rate at 3 yr."
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for all 6 cited DOIs (Capell 2005 pnas.0506001102, Gordon 2014 CIRCULATIONAHA.113.008285, Gordon 2018 jama.2018.3264, Scaffidi 2006 science.1127168, Eriksson 2003 nature01629, Cao 2011 JCI43578); the user-flagged DOI corrections (Capell 2005 → 0506001102, ChEMBL → CHEMBL298734) are correctly carried through. R34 backfill batch 4 (2026-05-08): added 2026 HGPS therapeutic landscape review (Pruthvi Raj 2026, *Curr Gene Ther*, doi:10.2174/0115665232415170251130041834, PMID 42099136) as context for emerging strategies — abstract verified. Wikilinks spot-checked. Quantitative HRs (0.12, 0.23) and survival figures NOT cross-checked against primary PDFs — synthesis-style content lint only; Scaffidi 2006 PDF unavailable per page note."
literature-checked-through: 2026-05-08
---

# Lonafarnib (Zokinvy)

The **first and only FDA-approved disease-modifying therapy for Hutchinson-Gilford Progeria Syndrome** (HGPS), approved November 2020 under the brand name Zokinvy. Lonafarnib is a non-peptidomimetic farnesyltransferase inhibitor (FTI) originally developed in the 1990s for oncology (Schering-Plough / SCH-66336), later rescued and repurposed for HGPS through the Progeria Research Foundation. Its mechanism — blocking farnesylation of progerin, the pathological truncated lamin A protein that causes HGPS — extends directly from the molecular lesion of the disease. Human survival benefit has been demonstrated in two matched-cohort analyses with HRs of 0.12 and 0.23 vs untreated contemporaneous controls, making lonafarnib one of the most robust pharmacological interventions with quantified survival benefit in a human progeroid syndrome.

---

## Identity

| Field | Value |
|---|---|
| PubChem CID | 148195 |
| InChIKey | DHMTURDWPRKSOA-RUZDIDTESA-N |
| ChEMBL ID | CHEMBL298734 |
| DrugBank ID | DB06105 |
| CAS number | not confirmed (#gap/needs-canonical-id) |
| Molecular formula | C27H31Br2ClN4O2 |
| Molecular weight | 638.83 g/mol |
| Class | non-peptidomimetic farnesyltransferase inhibitor |
| Route | oral (twice-daily capsule) |
| Brand name | Zokinvy (Eiger BioPharmaceuticals) |
| FDA approval | November 20, 2020 (accelerated approval; rare disease) |
| ATC code | A16AX20 |

---

## Mechanism of action

### Normal prelamin A maturation

Mature lamin A — a structural component of the nuclear lamina — is produced from prelamin A through sequential post-translational processing:

1. **Farnesylation:** [[farnesyltransferase]] attaches a farnesyl isoprenoid group to the C-terminal CAAX motif of prelamin A.
2. **-AAX cleavage:** The -AAX tripeptide is removed by RCE1/ZMPSTE24.
3. **Carboxymethylation:** The exposed cysteine is carboxymethylated.
4. **Final ZMPSTE24 cleavage:** [[zmpste24]] removes the terminal 15 amino acids, including the farnesylated cysteine — the mature lamin A protein is **not** permanently farnesylated.

### The progerin farnesylation trap

In HGPS, the de novo *LMNA* c.1824C>T mutation activates a cryptic splice site that deletes 50 amino acids (150 nt) from prelamin A, producing **progerin** (also Δ150 prelamin A). The 50-aa deletion removes the ZMPSTE24 recognition site for the final cleavage step. Progerin therefore:

- Completes steps 1–3 (farnesylated, -AAX cleaved, carboxymethylated)
- **Cannot** undergo step 4 (final ZMPSTE24 cleavage)
- Retains its farnesyl group **permanently**, remaining anchored to the inner nuclear membrane [^eriksson2003]

This permanent membrane anchoring is the root cause of HGPS nuclear pathology: nuclear blebbing, heterochromatin loss, DNA damage response activation, and premature cellular senescence.

### Lonafarnib's action

Lonafarnib competitively inhibits [[farnesyltransferase]] at the CAAX-binding pocket, preventing attachment of the farnesyl group to progerin's CAAX motif [^capell2005]. Without farnesylation:

- Progerin cannot anchor to the inner nuclear membrane
- Nuclear architecture is partially restored
- Downstream progerin-driven pathology is attenuated

**Not a cure:** lonafarnib does not correct the *LMNA* splicing defect or eliminate progerin production — it reduces the toxicity of the progerin that is made. Some partially-processed, non-farnesylated progerin intermediates do accumulate, but these appear less toxic than the fully-farnesylated form [^capell2005].

---

## Clinical evidence in HGPS

### Gordon 2014 — first survival analysis

Gordon et al. (2014, *Circulation*) performed the first survival analysis in HGPS, combining treated patients from two ProLon clinical trial cohorts with the largest-assembled untreated natural history cohort [^gordon2014]:

- **n=43 treated** (any farnesylation inhibitor regimen from ProLon1 and combination trials) vs **n=161 untreated** (natural history registry)
- Untreated natural history: mean 14.6 yr, median 14.5 yr survival
- **Treatment effect: mean survival increase of 1.6 years** (95% CI 0.8–2.4 yr; P<0.001)
- HR for death 0.13 (95% CI 0.04–0.37) for treated vs contemporaneous untreated controls
- Median follow-up in treated cohort: 5.3 years

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human trial |
| Phenotype conserved in humans? | yes — human trial |
| Replicated in humans? | yes — this is the human trial |

### Gordon 2018 — JAMA matched-cohort study

Gordon et al. (2018, *JAMA*) — the pivotal study supporting FDA accelerated approval — compared lonafarnib-treated HGPS patients from two clinical trials (ProLon1 and ProLon2) against contemporaneous matched untreated controls from the natural history cohort [^gordon2018]:

- **Total natural history cohort:** n=258 patients
- **Treated:** n=63 (ProLon1 n=27; ProLon2 n=36); lonafarnib monotherapy 150 mg/m² twice daily
- **Controls:** matched untreated contemporaneous controls (age-, sex-, continent-matched from n=195 untreated patients)
- **Median treatment duration:** 2.2 years

**Primary analysis (ProLon1 vs matched controls):**
- 1 death (3.7%) in 27 treated vs 9 deaths (33.3%) in 27 matched untreated
- **HR 0.12 (95% CI 0.01–0.93; P=.04)**

**Combined secondary analysis (n=63 treated vs 63 matched untreated):**
- 4 deaths (6.3%) vs 17 deaths (27.0%)
- **HR 0.23 (95% CI 0.06–0.90; P=.04)**

**Untreated natural history (n=195):** mean survival 14.5 yr, median 14.6 yr; primary cause of death in identified deaths: heart failure in 79.4%.

This mortality reduction supported FDA accelerated approval of lonafarnib (as Zokinvy) in November 2020 — the first and only drug approved for HGPS.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human trial |
| Phenotype conserved in humans? | yes — human trial |
| Replicated in humans? | yes (ProLon1 and ProLon2 arms both show benefit) |

---

## Pharmacokinetics

- **Route:** oral, twice-daily capsule
- **Approved dose:** initiated at 115 mg/m² twice daily; escalated to 150 mg/m² twice daily based on tolerability (per prescribing information)
- **Half-life:** approximately 4 hours (moderate; supports twice-daily dosing) #gap/needs-canonical-id — precise PK parameters should be confirmed against FDA label or published PK study
- **Metabolism:** primarily hepatic CYP3A4/5 substrate; significant first-pass effect
- **GI absorption:** moderate oral bioavailability; lipophilic compound (haloaromatic structure with two bromines and one chlorine)
- **Dose-limiting toxicity:** GI toxicity (nausea, vomiting, diarrhea, anorexia) — the primary side-effect profile managed by dose escalation schedules in clinical trials

#gap/dose-response-unclear — The optimal dose for maximum survival benefit vs tolerability in HGPS is not fully resolved. The approved dose (150 mg/m² BID) was the highest tolerated dose in ProLon1/2; whether higher exposure would confer greater benefit is unknown.

---

## Side-effect profile

Lonafarnib's main adverse effects in HGPS clinical trials:

| Effect | Frequency / Severity |
|---|---|
| Nausea / vomiting / diarrhea | Very common; dose-dependent; managed by gradual escalation |
| Fatigue | Common |
| Anorexia / weight loss | Common; especially early in treatment |
| Electrolyte disturbances | Occasional (secondary to GI losses) |
| Headache | Common |
| Elevated liver enzymes | Occasional; monitor |

GI toxicity is the primary safety signal and was the reason for the dose-titration schedule in ProLon trials. No black-box warning is issued for HGPS at approved doses, but standard monitoring is required.

---

## Hypothesis: progerin accumulation in normal aging

### The Scaffidi 2006 observation

Scaffidi and Misteli (2006, *Science*) demonstrated that normal human fibroblasts from older donors produce **low levels of progerin** via the same *LMNA* cryptic splice site activated in HGPS, and that aged cells display HGPS-like nuclear architectural defects partially reversible by antisense suppression of progerin [^scaffidi2006]. This was the first evidence that progerin is not exclusive to HGPS but may be a component of normal aging.

#gap/no-fulltext-access — Scaffidi 2006 PDF download failed in the academic archive (status: failed). Claims from this paper on this page have not been verified against the primary source.

### Cao 2011 extension: telomere-progerin feedforward loop

Cao et al. (2011, *J Clin Invest*) showed that **telomere shortening in normal cells causally activates the cryptic LMNA splice site**, creating a feedforward loop: dysfunctional telomeres trigger progerin production, which further destabilizes the nucleus and accelerates cellular senescence [^cao2011jci]. See [[progeria]] § Relationship to normal aging for detailed caveats.

### Why this matters for lonafarnib

If low-level progerin contributes to nuclear dysfunction in normally aged cells, lonafarnib (or related FTIs) could theoretically reduce this burden. **However, no human clinical evidence for lonafarnib benefit in non-HGPS aging exists.** The hypothesis remains mechanistically plausible but experimentally untested.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — cryptic LMNA splicing shown in human cells |
| Phenotype conserved in humans? | partial — nuclear defects shown in aged fibroblasts in vitro; whole-organism in vivo relevance unclear |
| Replicated in humans? | no — no interventional RCT in non-HGPS adults |

#gap/needs-human-replication — No completed human trial has tested whether FTI treatment reduces progerin burden or aging phenotypes in non-HGPS older adults.

---

## Access and cost

- **Estimated US list price:** ~$1.4M/year (as of 2024; extreme rare-disease pricing driven by ultra-small patient population)
- **Patient population:** ~400 known HGPS cases ever recorded; ~150–200 alive at any given time globally
- **Orphan drug status:** designated in the US and EU
- **Compassionate use / expanded access:** available through the Progeria Research Foundation and Eiger BioPharmaceuticals for confirmed HGPS patients

---

## Hallmark mapping

| Hallmark | Lonafarnib's relationship |
|---|---|
| [[genomic-instability]] | Progerin causes persistent DNA damage response (DDR) activation; lonafarnib reduces progerin nuclear anchoring, thereby partially relieving DDR signaling in HGPS cells |
| [[loss-of-proteostasis]] | Farnesylated progerin aggregates and resists autophagic clearance; blocking farnesylation produces less-toxic intermediates; also see [[autophagy]] and rapamycin as complementary strategy |
| [[cellular-senescence]] | HGPS cells are prematurely senescent; lonafarnib treatment partially restores replicative capacity and reduces senescence marker expression (P21 levels) in HGPS cell lines #gap/needs-replication |
| [[epigenetic-alterations]] | Progerin drives H3K27me3 and heterochromatin loss in HGPS nuclei; lonafarnib's impact on epigenetic marks has not been independently quantified in human trials |

---

## Combination strategies (investigational)

Lonafarnib is also being studied in combination with pravastatin and zoledronate (HGPS combination trial NCT00916747). Both drugs additionally interfere with the farnesylation/isoprenylation pathway at upstream steps (HMG-CoA reductase; farnesyl-pyrophosphate synthesis), potentially providing additive reduction in progerin farnesylation. Pre-clinical mouse data showed combination superior to lonafarnib alone. Human combination trial data not yet mature as of 2026-05-05.

## Emerging therapeutic landscape (R34 update 2026-05-08)

Pruthvi Raj et al. (*Curr Gene Ther* 2026) reviewed the broader therapeutic landscape for HGPS [^pruthviraj2026]. Lonafarnib remains the only FDA-approved disease-modifying agent and continues to provide modest survival benefit. Investigational strategies under active development:

- **Gene editing approaches** — CRISPR/Cas9 and base-editing for direct correction of the LMNA c.1824C>T mutation (Koblan et al. 2021 *Nature* established proof-of-principle in LAKI mice; clinical translation pending)
- **Antisense oligonucleotides (ASOs)** — block use of the cryptic splice site, redirecting splicing toward wild-type lamin A
- **ICMT inhibitors** — block the carboxymethylation step in prelamin A maturation, providing an alternative targeting node to FTI
- **Angiopoietin-2 modulation** — newly proposed as a target for the vascular and skeletal complications that drive most HGPS mortality
- **Cardiovascular interventions** — TAVR and ascending aortic constriction explored in high-risk HGPS patients

The review framing positions lonafarnib as foundational care providing modest benefit, with long-term HGPS management expected to depend on RNA-based and gene-editing approaches that address the upstream LMNA splicing defect rather than the downstream farnesylation step.

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[progeria]] | Primary clinical indication; HGPS mechanism page (verified R11) |
| [[lmna]] | Gene encoding lamin A/C; *LMNA* c.1824C>T produces progerin; lonafarnib targets the post-translational farnesylation step |
| [[farnesyltransferase]] | Direct molecular target; lonafarnib's binding site |
| [[zmpste24]] | The endoprotease whose cleavage site is absent in progerin; why progerin remains farnesylated |
| [[genomic-instability]] | Hallmark driven by progerin-induced nuclear pathology |
| [[loss-of-proteostasis]] | Hallmark: farnesylated progerin aggregates; lonafarnib reduces toxic species |
| [[cellular-senescence]] | Progerin drives premature senescence in HGPS cells |
| [[autophagy]] | Complementary therapeutic approach — rapamycin-induced autophagy clears progerin by different mechanism |
| [[nuclear-lamina]] | The structural scaffold disrupted by permanently-farnesylated progerin |
| [[partial-reprogramming]] | Ocampo 2016 tested cyclic OSKM in the LAKI progeria mouse model — an orthogonal approach to the same disease |

---

## Limitations and gaps

- **Not a cure:** Lonafarnib suppresses progerin toxicity but does not correct the *LMNA* splicing mutation or eliminate progerin production. HGPS patients still die in early–mid adolescence despite treatment. #gap/long-term-unknown
- **Survival benefit is real but modest in absolute terms:** HR 0.12–0.23 vs untreated controls is statistically strong; in absolute terms, mean survival gain ~1.6 yr from an already-short disease course. The disease remains fatal.
- **Non-HGPS aging — no human trial data:** The hypothesis that lonafarnib might slow nuclear-lamina-driven aspects of normal aging is biologically plausible (low-level progerin in aged cells; telomere-progerin feedforward loop) but entirely untested in non-HGPS humans. #gap/needs-human-replication
- **Cost as translation barrier:** ~$1.4M/yr is prohibitive for any aging-prevention application even if efficacy were demonstrated. A lower-cost FTI or alternative delivery would be required for population-scale use.
- **No biomarker endpoint for non-HGPS aging:** If a trial were conducted in older adults, there is no validated circulating biomarker of progerin-related nuclear dysfunction to serve as a surrogate endpoint. #gap/no-mechanism
- **CAS number not confirmed:** Lonafarnib CAS should be confirmed against PubChem or ChEMBL before citing in regulatory documents. #gap/needs-canonical-id
- **Scaffidi 2006 primary PDF unavailable:** Claims about progerin in normal aging cells have not been verified against the primary source. #gap/no-fulltext-access

---

## Footnotes

[^capell2005]: doi:10.1073/pnas.0506001102 · Capell BC, Erdos MR, Madigan JP et al. · PNAS 2005;102(36):12879–12884 · n=HeLa, HEK293, NIH3T3 cells transiently transfected with progerin construct + primary HGPS patient fibroblasts · in-vitro · model: human cell lines + mouse NIH3T3 · download status: pending (bronze OA) · 380 citations; citation_percentile=100 · demonstrated that FTI treatment restored normal nuclear architecture in progerin-expressing cells and reduced nuclear blebbing in HGPS patient fibroblasts; foundational mechanism paper for the FTI therapeutic strategy in HGPS. Note: DOI corrected from user-submitted 10.1073/pnas.0506152102 to confirmed 10.1073/pnas.0506001102 (verified via PubMed PMID 16129833).

[^gordon2014]: [[studies/gordon-2014-lonafarnib-progeria-survival]] · doi:10.1161/CIRCULATIONAHA.113.008285 · Gordon LB, Massaro J, D'Agostino RB Sr et al. · Circulation 2014;130(1):27–34 · n=43 treated, n=161 untreated (total n=204) · observational survival analysis · model: human · local PDF available · 234 citations; citation_percentile=100 · first survival analysis in HGPS; treatment with any farnesylation inhibitor regimen associated with mean survival increase of 1.6 yr (95% CI 0.8–2.4 yr; P<0.001; HR 0.13, 95% CI 0.04–0.37); median follow-up 5.3 yr

[^gordon2018]: [[studies/gordon-2018-lonafarnib-jama]] · doi:10.1001/jama.2018.3264 · Gordon LB, Shappell H, Massaro J et al. · JAMA 2018;319(16):1687–1695 · n=258 total; 63 treated (ProLon1 n=27, ProLon2 n=36) vs contemporaneous matched untreated controls · observational matched cohort · model: human · local PDF available · 210 citations; citation_percentile=100 · lonafarnib monotherapy 150 mg/m² twice daily; primary analysis (ProLon1) HR 0.12 (95% CI 0.01–0.93; P=.04); combined analysis HR 0.23 (95% CI 0.06–0.90; P=.04); median treatment duration 2.2 yr; primary cause of death heart failure 79.4%; supported FDA accelerated approval Nov 2020

[^scaffidi2006]: doi:10.1126/science.1127168 · Scaffidi P, Misteli T · Science 2006;312(5776):1059–1063 · n=normal human fibroblasts from donors aged 0–96 yr · in-vitro/observational · model: human (primary cells) · download status: failed #gap/no-fulltext-access · 1185 citations; citation_percentile=100 · low-level progerin production via cryptic LMNA splice site detected in normally-aged fibroblasts; older donors produced more progerin; antisense suppression of progerin reversed nuclear defects in aged cells; UNVERIFIED against primary PDF

[^eriksson2003]: doi:10.1038/nature01629 · Eriksson M et al. · Nature 2003;423(6937):293–298 · n=20 unrelated HGPS patients + controls · observational/genetic · model: human · identified *LMNA* c.1824C>T silent mutation activating cryptic splice site; showed permanent farnesylation of progerin underlies nuclear anchoring defect · see [[progeria]] for full footnote

[^cao2011jci]: doi:10.1172/JCI43578 · Cao K, Blair CD, Faddah DA et al. · J Clin Invest 2011;121(7):2833–2844 · n=6 primary fibroblast lines + immortalized lines · in-vitro · model: human (primary cells) · local PDF available · 297 citations; citation_percentile=100 · telomere shortening activates the cryptic LMNA splice site causally; telomerase overexpression suppressed progerin production 3–10-fold; feedforward loop between telomere dysfunction and progerin production established

[^pruthviraj2026]: doi:10.2174/0115665232415170251130041834 · pmid:42099136 · review · Pruthvi Raj R, Swetha BR, Thomas J · *Curr Gene Ther* 2026 May 5 (online ahead of print) · therapeutic landscape review of HGPS — confirms lonafarnib as the only FDA-approved disease-modifying agent providing modest survival benefit; emerging strategies = gene editing, antisense oligonucleotides, ICMT inhibitors, angiopoietin-2 modulation, TAVR/aortic constriction in high-risk patients
