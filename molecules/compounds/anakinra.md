---
type: compound
aliases: [Kineret, rIL-1Ra, recombinant IL-1 receptor antagonist, Antril]
pubchem-cid: null
chembl-id: CHEMBL1201570
drugbank-id: DB00026
biologic: true
who-inn: anakinra
molecular-formula: C759H1186N208O232S10
molecular-weight-da: 17300
mechanisms: [il-1-receptor-antagonism]
targets: ["[[il-1r1]]"]
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: phase-3-rct-needed
next-experiment: "Long-duration RCT (≥2 yr) with biological-age clock endpoints + cardiovascular event adjudication in community-dwelling adults ≥65 with elevated hsCRP (≥2 mg/L) and no prior MI — modelled on CANTOS but enrolling pre-morbid individuals; would resolve whether dual IL-1α/IL-1β blockade extends the CANTOS MACE signal to a primary-prevention population."
clinical-trials-active: 29
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Larsen 2007 NEJM (10.1056/NEJMoa065213) primary-source PDF verified end-to-end; ChEMBL CHEMBL1201570 identity fields (INN, molecule_type, first_approval) confirmed via API; ClinicalTrials.gov active-trial count re-queried 2026-05-07; PubChem null CID confirmed (404 on name lookup); molecular formula C759H1186N208O232S10 not independently verified (ChEMBL molecule_properties returns null for biologics; DrugBank 403); Bresnihan 1998, Brucato 2016, Abbate 2022, Ridker 2016, Salmon 2022 PDFs not available — claims from those sources remain unverified against full text"
---

> Partially verified 2026-05-07 (claude). Larsen 2007 NEJM PDF read end-to-end; corrections applied (per-arm n, p-value precision, injection-site reaction rate, PK half-life). ChEMBL identity confirmed. ClinicalTrials.gov count updated to 29 (all active trials; 3 most aging-relevant noted in table). Bresnihan 1998, Brucato 2016, Abbate 2022, Ridker 2016, Salmon 2022 PDFs not available — those claims unverified against full text. See `verified-scope` in frontmatter.

# Anakinra

A recombinant, non-glycosylated form of the endogenous human [[il-1ra|interleukin-1 receptor antagonist (IL-1Ra)]] that competitively occupies [[il-1r1|IL-1 receptor type I (IL-1R1)]] without triggering receptor signalling, thereby blocking both [[il-1a|IL-1α]] and [[il-1b|IL-1β]] from engaging their shared receptor. Marketed by Swedish Orphan Biovitrum (SOBI) as **Kineret**; FDA-approved since 2001 for rheumatoid arthritis, and subsequently for rare autoinflammatory monogenic syndromes, systemic juvenile idiopathic arthritis (sJIA), and recurrent pericarditis. Anakinra is the wiki's closest clinical analog to [[canakinumab]] for the [[chronic-inflammation]] hallmark, with a critical mechanistic distinction: anakinra blocks both IL-1 isoforms at the receptor, whereas canakinumab neutralises IL-1β only.

**PubChem CID:** null — biologics (recombinant proteins) are not assigned small-molecule PubChem CIDs; the frontmatter field is inapplicable for recombinant protein therapeutics. #gap/needs-canonical-id — verify whether a PubChem biological sequences entry or cross-reference exists for anakinra.

## Identity

- **Class:** recombinant protein therapeutic; N-terminally methionylated, non-glycosylated analogue of human IL-1Ra
- **Length:** 153 amino acids (native IL-1Ra) + N-terminal Met = 154 aa; ChEMBL lists 166 aa including the signal peptide precursor form
- **Molecular weight:** ~17.3 kDa (17,300 Da); consistent with the 153-residue non-glycosylated form
- **Molecular formula:** C759H1186N208O232S10 (to be verified against primary characterisation source)
- **Trade name:** Kineret (SOBI); formerly also Antril
- **ChEMBL ID:** CHEMBL1201570 (confirmed: preferred name "ANAKINRA", molecule type "Protein", first approved 2001)
- **DrugBank ID:** DB00026
- **WHO INN:** anakinra

## Target and mechanism

Anakinra is a **competitive antagonist** at IL-1R1 and IL-1R type II (IL-1R2). It binds both receptor subtypes without recruiting the IL-1 receptor accessory protein (IL-1RAcP) and therefore cannot initiate the downstream MyD88–IRAK–TRAF6–IKK–NF-κB signalling cascade that IL-1α or IL-1β would trigger. The mechanistic consequence is complete blockade of both IL-1 isoform signals at therapeutic concentrations.

This receptor-level mechanism distinguishes anakinra from:

- **[[canakinumab]]** — binds free IL-1β only; leaves IL-1α-mediated signalling intact. CANTOS-type benefit is therefore IL-1β-selective. Anakinra, by blocking both isoforms, should in principle suppress a broader swathe of the inflammatory programme — including IL-1α-driven components of the [[senescence-associated-secretory-phenotype|SASP]] (IL-1α is a paracrine SASP amplifier and can drive senescence spreading). Whether this broader blockade translates to additive benefit vs higher infection risk is unresolved. #gap/needs-replication
- **[[rilonacept]]** — IL-1 trap (decoy receptor fusion protein) capturing both IL-1α and IL-1β extracellularly; longer half-life than anakinra.
- **[[canakinumab]]** — see above.

The upstream pathway context: [[nlrp3-inflammasome]] → IL-1β cleavage → IL-1R1 engagement → [[nf-kb]] → pro-inflammatory gene expression. Anakinra blocks the receptor step; canakinumab blocks the cytokine step. See [[chronic-inflammation]] for the full inflammaging network.

## Pharmacokinetics

| Parameter | Value |
|---|---|
| Route | Subcutaneous injection (SC) |
| Standard dose | 100 mg/day SC (RA and most autoinflammatory indications) |
| NOMID/CAPS | Up to 2–8 mg/kg/day may be required |
| Half-life | ~6–8 hours (short, due to renal clearance of the small ~17 kDa protein) [Larsen 2007 discussion; package insert range] |
| Bioavailability (SC) | ~95% |
| Clearance | Predominantly renal filtration (small molecular weight bypasses FcRn recycling unlike IgG antibodies) |
| Tmax | 3–7 hours post-SC injection |

The short ~6–8 hour half-life requires **daily subcutaneous dosing** — a significant practical burden relative to canakinumab's once-every-3-months schedule. This contributes to adherence challenges outside specialised clinic settings and limits large-scale prevention use.

## FDA approvals

| Year | Indication |
|---|---|
| 2001 | Rheumatoid arthritis (moderately-to-severely active; 18+) — first biologic approval for RA [^bresnihan1998] |
| 2012 | Neonatal-onset multisystem inflammatory disease (NOMID) / CAPS |
| 2020 | Systemic juvenile idiopathic arthritis (sJIA) — FDA-approved in paediatric patients ≥2 yr |
| 2021 | Recurrent pericarditis (colchicine-resistant / corticosteroid-dependent) [^brucato2016] |

Off-label use includes adult-onset Still's disease (AOSD), sharing pathophysiology with sJIA; colchicine-resistant familial Mediterranean fever (FMF); and other periodic fever syndromes.

## Aging-relevant evidence

### Type 2 diabetes and beta-cell function

The most quantitatively striking aging-relevant finding: Larsen et al. (2007 NEJM) randomised 70 patients with type 2 diabetes (34 anakinra, 35 placebo) to anakinra 100 mg/day SC vs placebo for 13 weeks [^larsen2007]. Results:

- HbA1c decreased by **0.46 percentage points** more in the anakinra arm than placebo (95% CI 0.01–0.90; P=0.03).
- Proinsulin/insulin ratio fell in the anakinra group (P=0.005), and C-peptide AUC (oral glucose tolerance test + IV stimulation combined) increased (P=0.05), directly indexing beta-cell secretory improvement; insulin sensitivity was unchanged on clamp (P=0.58) and HOMA-based analysis (P=0.60) — locating the benefit at the beta cell, not peripheral tissues.
- IL-6 and CRP fell significantly (P<0.001 and P=0.002 respectively at 13 weeks), confirming IL-1 blockade reduced systemic inflammation.
- **Injection-site reactions** occurred in 17/34 (50%) anakinra-treated patients vs 0/35 placebo patients; no patient discontinued due to adverse events. No symptomatic hypoglycaemia was observed.

The mechanistic interpretation is that pancreatic islet IL-1β (produced locally in response to high-glucose and lipid stress) is a driver of beta-cell dysfunction in T2D — anakinra corrects this local inflammasome-mediated cytotoxicity. This is not a general insulin-sensitising mechanism (contrast with metformin). The finding remains under-replicated at longer durations; the 13-week window does not establish durability. #gap/needs-replication #gap/long-term-unknown

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (trial enrolled humans) |
| Phenotype conserved in humans? | yes (HbA1c endpoint) |
| Replicated in humans? | limited (single trial, n=70, 13 weeks) |

### Cardiovascular disease — post-STEMI heart failure prevention

A programme of pilot and pooled analyses by Abbate and colleagues (the VCU-ART series) has tested anakinra in ST-segment-elevation MI (STEMI):

Pooled analysis of VCUART 1 and 2 (n=139 total; 84 anakinra, 55 placebo) found that anakinra significantly reduced the composite of **all-cause death or new-onset heart failure** at one year: 8.2% vs 29.1% (log-rank P=0.002) [^abbate2022]. CRP area-under-the-curve decreased from 222.82 to 75.48 mg·day/L (P<0.001), confirming IL-1 blockade. Injection-site reactions were more common with anakinra (22.6% vs 5.5%); serious infection rates were comparable. This mechanistic rationale — IL-1-driven peri-infarct inflammation amplifies myocardial injury and remodelling — aligns with the [[nlrp3-inflammasome]] → IL-1β → cardiomyocyte apoptosis axis.

The VA-ART4 trial (NCT05177822) is currently **active, not recruiting** — a larger powered test of this hypothesis. #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (human STEMI trial) |
| Phenotype conserved in humans? | yes (HF + death endpoints) |
| Replicated in humans? | in-progress (pooled pilots; VA-ART4 ongoing) |

### Atherosclerosis and inflammaging context

Ridker (2016 review, Circ Res) noted that small ischaemia studies demonstrated reductions in acute-phase hsCRP with anakinra, contextualising it within the [[chronic-inflammation]] therapeutics landscape alongside canakinumab and colchicine [^ridker2016review]. However, no anakinra trial has replicated the scale of CANTOS (n=10,061) for cardiovascular event endpoints in a primary- or secondary-prevention population. The key point: CANTOS established the *IL-1β* hypothesis; whether simultaneous IL-1α suppression (via anakinra's receptor-level blockade) adds incremental cardiovascular protection is formally untested. #gap/needs-human-replication

### Aortic aneurysm — cautionary signal

A murine study found that pharmacological IL-1α disruption (which anakinra would also achieve) **worsened** abdominal aortic aneurysm (AAA) expansion [^salmon2022]. If this IL-1α-specific AAA-protective effect translates to humans, anakinra's dual IL-1α + IL-1β blockade could be counterproductive in patients with AAA — in contrast to the presumably safer IL-1β-selective canakinumab. This is a preclinical signal only and has not been confirmed in human AAA trials, but warrants flagging. #gap/needs-human-replication #gap/contradictory-evidence

## Comparison to canakinumab

| Feature | Anakinra | Canakinumab |
|---|---|---|
| Mechanism | Competitive IL-1R1/IL-1R2 antagonist | IL-1β neutralising monoclonal antibody (IgG1κ) |
| IL-1α coverage | Yes — both IL-1α and IL-1β blocked | No — IL-1α signalling intact |
| Molecular weight | ~17.3 kDa | ~145 kDa |
| Half-life | ~6–8 hours | ~26 days |
| Dosing schedule | 100 mg/day SC | 50–300 mg q3mo SC |
| Patient burden | High (daily injections) | Low (4 injections/year) |
| Approved (aging-adjacent) | RA, NOMID, sJIA, pericarditis | CAPS, TRAPS, FMF, sJIA |
| CANTOS-class RCT | None (VCU-ART pooled n=139) | CANTOS n=10,061 |
| Infection risk (human trial) | Injection-site reactions; serious infections comparable to placebo in VCU-ART | Fatal infection/sepsis excess: 0.31 vs 0.18/100 PY (P=0.02) in CANTOS |
| Annual cost (list price) | ~$20,000–30,000 USD (RA dose, biosimilar available) | ~$150,000–200,000 USD (orphan pricing) |
| Biosimilar availability | Yes (Kineret biosimilars entering market) | No |
| SASP suppression hypothesis | Stronger (blocks IL-1α, the paracrine SASP amplifier) | Weaker (IL-1β only) |

The cost and dosing-burden profile positions anakinra as more tractable for a chronic prevention trial than canakinumab, provided the daily-injection burden can be managed. Biosimilar entry may further reduce cost.

## Translation gap — aging-specific

Despite FDA approval and a substantial safety record in inflammatory diseases, anakinra has no Phase 3 trial for any aging-indication (atherosclerosis prevention, frailty, biological-age deceleration). Several barriers mirror canakinumab:

1. **Infection risk.** Daily IL-1 receptor blockade chronically impairs an important innate immune axis. The VCU-ART data showed injection-site reactions dominated; serious infection was comparable to placebo in those small trials, but longer-duration / larger-scale use could reveal a signal analogous to (or exceeding) canakinumab's CANTOS sepsis excess. #gap/long-term-unknown
2. **Daily injection burden.** For a healthy aging individual, 365 injections/year is a near-insurmountable adherence barrier without continuous clinical support. Long-acting formulations or delivery systems would be required for population-level prevention.
3. **No aging-endpoint evidence.** No trial has measured biological-age clocks, frailty indices, or lifespan as outcomes for anakinra.
4. **Translation-gap category:** `phase-3-rct-needed` — the mechanism is human-validated, the safety is characterised, but no RCT in an aging-primary-prevention population exists.

**Next experiment:** Long-duration RCT (≥2 yr) with biological-age clock endpoints + cardiovascular event adjudication in community-dwelling adults ≥65 with elevated hsCRP (≥2 mg/L) and no prior MI — modelled on CANTOS but enrolling pre-morbid individuals; would resolve whether dual IL-1α/IL-1β blockade extends the CANTOS MACE signal to a primary-prevention population.

## Cross-references

- **Target:** [[il-1r1]]
- **Cytokines blocked:** [[il-1a]], [[il-1b]]
- **Upstream:** [[nlrp3-inflammasome]]
- **Downstream signalling blocked:** [[nf-kb]]
- **Hallmark:** [[chronic-inflammation]]
- **Comparator drugs:** [[canakinumab]] (IL-1β neutraliser; longer half-life; no IL-1α blockade), [[rilonacept]] (IL-1 trap)
- **Intervention class:** [[interventions/pharmacological/senomorphics]]
- **Approved-indication comparison:** [[il-1b]] target page for the receptor-level biology

## Active clinical trials (ClinicalTrials.gov, 2026-05-07)

As of 2026-05-07 re-query, 29 trials with anakinra as the intervention are RECRUITING or ACTIVE_NOT_RECRUITING across all indications. The three most aging-relevant are listed below; the broader set spans sepsis, pericarditis, dengue hyperinflammation, osteoarthritis, CAR-T toxicity, and other inflammatory conditions.

| NCT | Title | Status | Condition |
|---|---|---|---|
| NCT06336733 | Colchicine-resistant FMF: on-demand anakinra vs standard care | RECRUITING | Familial Mediterranean Fever |
| NCT05814159 | Anakinra in Japanese patients with Still's disease (sJIA + AOSD) | ACTIVE_NOT_RECRUITING | sJIA / AOSD |
| NCT05177822 | VA-ART4: IL-1 blockade in acute MI to prevent heart failure | ACTIVE_NOT_RECRUITING | Heart failure post-STEMI |

None of the active trials are for aging-specific endpoints. VA-ART4 is the most aging-relevant (cardiovascular prevention in a post-MI population).

## Limitations and open questions

- **Dual IL-1α/IL-1β blockade — is stronger necessarily better for aging?** Anakinra should in principle produce more complete SASP suppression than canakinumab (by blocking IL-1α, the paracrine SASP amplifier). This prediction has not been directly tested in a human aging trial. #gap/needs-human-replication
- **Aortic aneurysm signal.** Murine evidence suggests IL-1α blockade worsens AAA [^salmon2022]. If confirmed in humans, anakinra would be contraindicated in patients with aortic pathology — an important safety stratification question. #gap/needs-human-replication
- **Long-term infection risk under sustained daily blockade.** The VCU-ART trials (total n=139; ~3–12 months) are too small and short to detect the fatal-sepsis signal seen in CANTOS (n=10,061; median 3.7 years). #gap/long-term-unknown
- **PubChem CID:** null — not applicable for this recombinant protein biologic; verify whether a PubChem cross-reference biologics entry exists. #gap/needs-canonical-id
- **Molecular formula verification.** The formula C759H1186N208O232S10 requires cross-check against primary characterisation documentation. #gap/needs-verification
- **No biomarker-guided patient selection strategy** for the aging-prevention indication (analogous gap to canakinumab). #gap/unsourced

## Footnotes

[^bresnihan1998]: [[studies/bresnihan-1998-anakinra-ra]] · n=472 randomised (placebo + three anakinra doses) · rct · 150 mg/day arm: significant reduction in joint swelling, morning stiffness; first biologic demonstrating beneficial effect on joint erosion rate · model: RA patients (adults) · doi:10.1002/1529-0131(199812)41:12<2196::AID-ART15>3.0.CO;2-2 · PDF not downloaded (status: not_oa)

[^larsen2007]: [[studies/larsen-2007-anakinra-t2d]] · n=70 randomised (34 anakinra, 35 placebo); 67 completed (34 anakinra, 33 placebo) · rct · 13 weeks · HbA1c between-group difference: −0.46 percentage points (95% CI 0.01–0.90; P=0.03); proinsulin/insulin ratio reduced (P=0.005); C-peptide AUC enhanced (oral+IV combined P=0.05); IL-6 (P<0.001) and CRP (P=0.002) reduced; insulin sensitivity unchanged (clamp P=0.58, HOMA P=0.60); transient injection-site reactions: 17/34 anakinra vs 0/35 placebo · model: type 2 diabetes patients (adults, age ~60, BMI ~31) · doi:10.1056/NEJMoa065213 · PDF locally available

[^brucato2016]: [[studies/brucato-2016-airtrip-pericarditis]] · n=21 randomised · rct · anakinra reduced pericarditis recurrence to 18.2% vs 90% placebo (P<0.001); median flare-free survival not reached in anakinra arm · model: colchicine-resistant / corticosteroid-dependent recurrent pericarditis patients · doi:10.1001/jama.2016.15826 · PDF not downloaded (status: pending)

[^abbate2022]: [[studies/abbate-2022-vcuart-pooled]] · n=139 (84 anakinra, 55 placebo); pooled from VCUART 1 + 2 + 3 pilot RCTs · rct (pooled) · all-cause death or new-onset HF: 8.2% vs 29.1% (log-rank P=0.002); CRP AUC: 75.48 vs 222.82 mg·day/L (P<0.001) · model: STEMI patients (adults) · doi:10.1093/ehjcvp/pvab075 · PDF not downloaded (status: pending)

[^ridker2016review]: [[studies/ridker-2016-circ-res-review]] · review · model: human atherosclerosis / inflammaging context · doi:10.1161/CIRCRESAHA.115.306656 · PDF not downloaded (status: pending)

[^salmon2022]: [[studies/salmon-2022-il1a-aaa-mice]] · in-vivo · genetic and pharmacological IL-1α disruption worsened aortic aneurysm in murine AAA model · model: mouse aortic aneurysm · doi:10.1016/j.avsg.2022.05.024 · PDF not downloaded (status: pending)
