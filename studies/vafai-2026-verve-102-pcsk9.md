---
type: study
doi: 10.1056/NEJMoa2601283
pmid: 42187087
pmc: null
title: "In Vivo Base Editing of PCSK9 with VERVE-102 for Hypercholesterolemia"
authors: [Vafai SB, Täubel J, Ashdown T, Patel RS, Diamondali S, Cegla J, Soran H, Bashir B, Abitbol A, Gaudet D, Lauzière A, Brunham LR, Newby DE, Nicholls SJ, Scott RS, Kerr J, Tardif JC, Lunken C, Humphries SE, Karsten V, Tyler PD, Zhang X, Huniti N, Flight PA, Jensen CL, Falzone R, Biedenkapp JC, Lister T, Stolz LE, Khera AV, Kathiresan S]
year: 2026
journal: New England Journal of Medicine
study-design: in-vivo
publication-type: research-article
volume: null
issue: null
pages: null
organism: homo-sapiens
n-subjects: 35
intervention: ["[[crispr-base-editing-pcsk9]]"]
hallmarks-tested: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
human-evidence: true
peer-reviewed: true
preregistered: true
preregistration-doi: NCT06164730
key-findings: [pcsk9-reduction-dose-dependent, ldl-cholesterol-reduction, durable-single-dose-editing, galnac-lnp-safety-improvement, first-published-in-vivo-base-editing-phase1]
local-pdf: null
verified: true
verified-date: 2026-06-08
verified-by: claude
verified-scope: "All quantitative claims verified end-to-end against the locally-supplied article PDF (NEJM closed-access, DOI 10.1056/NEJMoa2601283, 11 pp): dose-cohort ns, Table 3 PCSK9 and LDL-C % changes and ranges for all six cohorts, 1.0-mg/kg absolute LDL reduction (128→51, −78 mg/dL), baseline characteristics Table 1, adverse-event Table 2 (74%/1 grade≥3/1 SAE/31% treatment-related/20% IRR/6% fatigue), ALT detail (3/35 ≥2× ULN, peaks 2.0/2.2/2.4×, day 3-4, <2× by day 8), SAE (grade 3 aspiration pneumonitis, 0.45 mg/kg, GERD/hiatal hernia, unrelated), LNP t½ <20 h, Pearson r=−0.68, durability (15/35 ≥1 yr, max 18 mo), data-cutoff 2026-02-27, author list, mechanism description (intron-1 splice-site A·T→G·C, ABE v8.8, Cas9 nickase, GalNAc/ASGPR + ApoE/LDLR). No corrections required — all claims confirmed against source."
---

# In Vivo Base Editing of PCSK9 with VERVE-102 for Hypercholesterolemia

**TL;DR:** The first peer-reviewed, full Phase 1 report of an in-vivo **base-editing** medicine. A single intravenous infusion of VERVE-102 — an adenine base editor (ABE) mRNA plus a *PCSK9*-targeting guide RNA, packaged in a GalNAc-lipid nanoparticle — produced dose-dependent reductions in blood PCSK9 (up to **−88%**) and LDL cholesterol (up to **−62%**, an absolute **−78 mg/dL**) at the 1.0-mg/kg dose, with effects that appeared durable through at least 12 months from one dose. No dose-limiting toxic effects, deaths, or withdrawals occurred across 35 participants.

**Critical context:** This is the publication the wiki's [[crispr-base-editing-pcsk9]] page had been explicitly flagging as the missing "full Phase 1 paper." Two things matter equally here: (1) **the result** — somatic editing of one liver gene can reproduce, from a single dose, the LDL-lowering achieved by chronic PCSK9 monoclonal antibodies; and (2) **the method** — this is early human safety/PD evidence that an LNP-delivered, mRNA-encoded base editor is a tractable therapeutic platform, with implications well beyond PCSK9. The methodology is treated as a first-class entity at [[methods/in-vivo-base-editing]].

---

## Design

| Field | Value |
|---|---|
| Trial | Heart-2 ([NCT06164730](https://clinicaltrials.gov/study/NCT06164730)) |
| Phase / design | Phase 1, open-label, **single-ascending-dose**, non-randomized, single-arm (no formal statistical testing; this is a non-prespecified interim analysis) |
| Sponsor | Verve Therapeutics (wholly owned subsidiary of Eli Lilly) |
| Sites | Australia, Canada, New Zealand, United Kingdom |
| Population | Adults 18–70 yr with heterozygous familial hypercholesterolemia (HeFH) and/or premature coronary artery disease (CAD; onset ≤55 yr men, ≤65 yr women); fasting LDL-C ≥70 mg/dL on maximum tolerated lipid-lowering therapy |
| Key exclusions | Uncontrolled hypertension, inadequately controlled type 2 diabetes, ongoing PCSK9-inhibitor use |
| n (this interim) | **35** (data-cutoff 2026-02-27; planned enrollment up to 85) |
| Intervention | Single IV infusion (~4 h) of VERVE-102: mRNA encoding adenine base editor **v8.8** + *PCSK9* guide RNA, encapsulated in a **GalNAc-lipid nanoparticle** |
| Dose levels (total RNA) | 0.3 (n=4), 0.45 (n=6), 0.6 (n=4), 0.7 (n=8), 0.8 (n=6), 1.0 mg/kg (n=7) |
| Premedication | Dexamethasone (day before + day of infusion) + histamine H₁- and H₂-receptor antagonists |
| Observation | Inpatient ≥2 days; weekly through day 28; then days 60, 90, 180, 270, 365; up to 18 months at cutoff |
| Primary objective | Safety (CTCAE v5.0) |
| Secondary objectives | Pharmacokinetics; pharmacodynamics — % and absolute change from baseline in plasma PCSK9 and fasting LDL-C (time-averaged from day 28 by trapezoidal AUC) |

**Mechanism of the edit.** The guide RNA directs the editor to a splice site at the 5′ end of *intron 1* of *PCSK9*. An A·T → G·C conversion alters the splice site, enabling read-through to a stop codon that prevents translation and expression of PCSK9 protein in the liver. The ABE combines an engineered adenosine deaminase with a catalytically-impaired **Cas9 nickase** (nicks one strand rather than making a double-strand break). The GalNAc moiety adds asialoglycoprotein-receptor (ASGPR)-mediated hepatocyte uptake on top of the ApoE/LDL-receptor uptake of the lipid nanoparticle. See [[methods/in-vivo-base-editing]] for the full platform mechanics and [[pcsk9]] for target biology.

### Baseline characteristics (N=35)

| Characteristic | Value |
|---|---|
| Mean age (range) | 52 yr (27–66) |
| Male sex | 24 (69%) |
| Race — White / Asian / Black | 30 (86%) / 6 (17%) / 1 (3%) |
| Mean LDL cholesterol | 129 ± 42 mg/dL |
| Mean PCSK9 | 455 ± 98 µg/L |
| Clinical status — HeFH only / HeFH + premature CAD / premature CAD only | 20 (57%) / 9 (26%) / 6 (17%) |
| Concomitant statin (high-intensity / moderate-low / none) | 25 (71%) / 7 (20%) / 3 (9%) |
| Concomitant ezetimibe | 15 (43%) |

---

## Results

### Pharmacodynamics — dose-dependent, substantial

Time-averaged change from baseline (day 28 onward), by dose cohort:

| Dose (mg/kg) | n | PCSK9 % change (range) | LDL-C % change (range) |
|---|---|---|---|
| 0.3 | 4 | −51 (−73 to −30) | −9 (−26 to 26) |
| 0.45 | 6 | −59 (−92 to −34) | −44 (−57 to −30) |
| 0.6 | 4 | −61 (−84 to −38) | −45 (−54 to −34) |
| 0.7 | 8 | −64 (−93 to −34) | −33 (−70 to −14) |
| 0.8 | 6 | −77 (−87 to −66) | −51 (−86 to −16) |
| **1.0** | **7** | **−88 (−94 to −78)** | **−62 (−79 to −45)** |

At 1.0 mg/kg the mean LDL cholesterol fell from **128 mg/dL** (3.3 mmol/L) at baseline to a time-averaged **51 mg/dL** (1.3 mmol/L) — an absolute reduction of **78 mg/dL** (2.0 mmol/L). The total RNA dose administered correlated with the magnitude of LDL reduction (Pearson r = **−0.68**).

### Durability

Follow-up extended to a maximum of 18 months; **15 of 35 participants had ≥1 year** of follow-up. PCSK9 and LDL reductions at day 28 were consistent with the time-averaged values across follow-up, reflecting a stable response — the durability expected of a DNA-level edit persisting through hepatocyte turnover (hepatocyte lifespan ~200–300 days). #gap/long-term-unknown — durability beyond ~12 months in humans, and across decades of hepatocyte regeneration, remains unproven.

### Safety

| Event | n (%) |
|---|---|
| Any adverse event | 26 (74) |
| Any grade ≥3 | 1 (3) |
| Any serious adverse event | 1 (3) |
| Any treatment-related AE | 11 (31) |
| Infusion-related reaction (all grade 1–2) | 7 (20) |
| Fatigue | 2 (6) |

- **No dose-limiting toxic effects, no deaths, no withdrawals.** All participants received the full planned dose.
- **Transient ALT elevations:** 3 of 35 had ALT ≥2× ULN (peaks 2.0, 2.2, 2.4× ULN; 1 in the 0.7-mg/kg and 2 in the 1.0-mg/kg cohort), peaking on day 3–4 and falling below 2× ULN by day 8. Asymptomatic. No event exceeded grade 3.
- **One serious AE:** grade 3 aspiration pneumonitis ~2 weeks post-infusion in a 0.45-mg/kg participant with gastroesophageal reflux disease and sliding hiatal hernia; hospitalized, discharged next day; assessed by the site investigator as **unrelated** to VERVE-102.
- **Pharmacokinetics:** lipid-nanoparticle components cleared rapidly; mean terminal half-life of the primary LNP component was **<20 h** — consistent with transient base-editor exposure followed by a permanent genomic edit.

The authors emphasize that the GalNAc-LNP (a reformulation from the predecessor VERVE-101) was **not** associated with the infusion reactions, larger ALT rises, and thrombocytopenia reported with earlier in-vivo editing programs — supporting the field view that the lipid nanoparticle, not the editor cargo, is the principal driver of acute adverse events.

---

## Extrapolation to the wiki's core question

This is a **human** trial, so the usual model-organism extrapolation table mostly resolves to "yes":

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | The trial *is* in humans; the PCSK9–LDLR axis is the validated target |
| Phenotype conserved (LDL-lowering)? | yes | Demonstrated directly; magnitude (−62%) matches PCSK9 mAbs (40–60%) |
| Replicated / durable in humans? | in-progress | Single Phase 1, n=35, interim; durability shown to ~12 mo; hard CV-outcome benefit predicted but untested |

The geroprotective thesis (atherosclerosis is a cumulative-LDL-exposure disease, so a one-time durable lowering early in life should compound protection) is mechanistically supported but **not** directly tested here: the authors note that a 78-mg/dL reduction maintained over 20 years is *predicted* to cut ASCVD risk by >50% for most patients, citing prior Mendelian-randomization/consensus modeling — this is an extrapolation, not a measured endpoint. #gap/needs-human-replication

---

## Interpretive caveats

1. **Not powered for, and did not assess, cardiovascular outcomes.** All efficacy here is biomarker (PCSK9, LDL-C). #gap/needs-replication
2. **Non-prespecified interim analysis, single-arm, open-label, no formal statistical testing.** Effect-size point estimates per small dose cohort (n=4–8) carry wide uncertainty; the 0.7-mg/kg LDL response (−33%) being numerically below the 0.6-mg/kg (−45%) cohort illustrates small-cohort noise.
3. **Short follow-up relative to the durability claim.** "Durable" rests on ≤18-month data in a minority of participants; the cross-decade persistence that the cumulative-exposure rationale requires is unproven. #gap/long-term-unknown
4. **Off-target / long-term safety not the focus of this interim report.** Nonclinical off-target screening was done largely in cells from White donors; the cohort was 86% White. Genome-wide off-target surveillance in humans is the load-bearing future safety question for the platform — see [[methods/in-vivo-base-editing]]. #gap/long-term-unknown
5. **Selected, premedicated, inpatient-observed population** with stable disease — safety may not transfer to broader, unmonitored outpatient use.

---

## Hallmarks engaged

- [[chronic-inflammation]] — atherosclerosis is an inflammatory lesion; durable LDL-lowering reduces the lipid driver of plaque inflammation.
- [[altered-intercellular-communication]] — PCSK9 has pleiotropic signaling roles beyond LDLR degradation; the net aging-context effect of its somatic ablation is uncharacterized. #gap/no-mechanism

## Limitations (authors' stated)

Phase 1; selected population; premedication and inpatient observation; not powered for statistical effect size; never assessed cardiovascular disease; short, non-prespecified-interim follow-up precluding long-term safety (including off-target) and durability assessment; majority-White cohort and predominantly White-donor nonclinical off-target work. All participants are expected to enroll in a 15-year long-term follow-up study per regulatory guidance.

## Conflict of interest

Sponsored by **Verve Therapeutics, a wholly owned subsidiary of Eli Lilly**. Many authors are Verve/Lilly employees; the study was designed by the sponsor and the first manuscript draft written by sponsor employees. Treat the framing accordingly; the quantitative tables are the primary evidence.

---

## Cross-references

- **Intervention program:** [[crispr-base-editing-pcsk9]] — VERVE-101/102 program page (this study is its primary Phase 1 publication)
- **Method:** [[methods/in-vivo-base-editing]] — the base-editing platform, off-target landscape, and delivery ramifications
- **Target:** [[pcsk9]] · [[ldlr]] · [[lipoprotein-metabolism]]
- **Phenotype:** [[atherosclerosis]] · [[familial-hypercholesterolemia]] · [[cardiovascular-aging]]
- **Comparator therapeutics:** PCSK9 mAbs (evolocumab/alirocumab) and siRNA (inclisiran), documented on [[pcsk9]]; [[statins]]
- **Delivery sibling:** [[patisiran]] (LNP-delivered hepatic RNAi) · [[cell-types/hepatocytes]] · [[tissues/liver]]
- **Modality framing:** [[interventions-by-modality]] · [[longevity-escape-velocity]] (gene editing as durable aging-intervention modality)

---

## Footnotes

[^vafai2026]: [[studies/vafai-2026-verve-102-pcsk9]] · doi:10.1056/NEJMoa2601283 · Vafai SB, Täubel J, …, Khera AV, Kathiresan S · *N Engl J Med* 2026 (published online May 25, 2026) · PMID 42187087 · n=35 · in-vivo (human; open-label single-ascending-dose Phase 1, non-randomized) · NCT06164730 (Heart-2); single IV VERVE-102 (ABE8.8 mRNA + PCSK9 gRNA in GalNAc-LNP), 0.3–1.0 mg/kg total RNA; at 1.0 mg/kg PCSK9 −88% and LDL-C −62% (−78 mg/dL absolute), durable ≥12 mo; no dose-limiting toxicity; 1 unrelated SAE; transient ALT ≤2.4× ULN in 3/35. Sponsor: Verve Therapeutics (Eli Lilly). Closed-access (NEJM) — verified against the article PDF.
