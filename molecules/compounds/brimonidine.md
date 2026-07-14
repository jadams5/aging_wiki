---
type: compound
aliases: [brimonidine tartrate, Mirvaso, Alphagan, Alphagan P, UK-14304, Bromoxidine]
pubchem-cid: 2435
chembl-id: CHEMBL844
drugbank-id: DB00484    # confirmed via PubChem RegistryID cross-reference 2026-06-27
cas-number: 59803-98-4
administration-route: topical    # ophthalmic as alternate route (glaucoma); aging-wiki focus is topical rosacea indication
biologic: false
mechanisms: [vasoconstrictor, alpha-adrenergic-agonism, alpha-2-agonism]
targets: []    # ADRA2A (α2A-adrenergic receptor) is the primary target; no wiki protein page exists yet — see body
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: fda-approved    # topical 0.33% gel for rosacea (Mirvaso, 2013); ophthalmic for glaucoma (Alphagan, 1996)
human-evidence-level: strong    # for transient erythema suppression in rosacea; FDA-approved indication
translation-gap: human-evidence-strong    # erythema-suppression indication is fully human-validated; no aging-hallmark gap
next-experiment: "Head-to-head RCT of brimonidine vs oxymetazoline + pulsed-dye laser maintenance vs either agent alone (n≥150), powered for 12-week telangiectasia count as primary structural endpoint alongside CEA, to determine whether topical vasoconstriction during treatment window modulates laser selectivity or reduces rebound erythema frequency."
clinical-trials-active: 0    # ClinicalTrials.gov v2 search 2026-06-27: no active/recruiting trials for brimonidine + rosacea erythema identified
literature-checked-through: 2026-06-27
verified: true
verified-date: 2026-06-27
verified-by: claude
verified-scope: "Identity fields (PubChem CID 2435, CAS 59803-98-4, ChEMBL CHEMBL844, MW, InChIKey) confirmed via live API. DrugBank DB00484 confirmed via PubChem RegistryID. Van Zuuren 2019 BJD (n=152 studies, 20,944 participants, high-certainty GRADE, no rebound in follow-up) verified against full-text PDF. Layton 2015 JEADV quantitative claims (n=92, 71.7% vs 35.7%, 76.1% vs 47.6%, 83.0% vs 38.9%) confirmed via PubMed full abstract (PMID 26416154). Van Zuuren 2015 Cochrane overall statistics (106 studies, 13,631 participants, high quality evidence) confirmed via PubMed abstract; individual-study RR values (2.21, 2.00) not verified against Cochrane full text (not downloadable). Jackson 2014 PMID and author corrected; specific responder rates (Day 1 27.9%, Day 15 55.9%, Day 29 58.3%) not verified against full text (closed-access, no PMC, no DOI). Liu 2023: CEA/SSA hourly RR and application-site dermatitis RR=8.91 confirmed via abstract; week-4 and rebound figures not verified against full text. Fowler 2012 Phase II primary endpoint definition and efficacy figures not verified (closed-access). Case report PMIDs (Routt 2014, Ilkovitch 2014, Werner 2015, Tanghetti 2015) all confirmed via PubMed."
---

# Brimonidine

A selective α2-adrenergic receptor agonist approved as a topical gel (Mirvaso, 0.33%) for **persistent facial erythema of rosacea** — the most common vascular phenotype of a chronic inflammatory skin condition affecting roughly 5–12% of adults [^vanzuuren2019]. Brimonidine produces **direct cutaneous vasoconstriction** within approximately 30 minutes of application, with effect duration of ~12 hours [^fowler2012]. It is a purely **symptomatic treatment**: it transiently masks the functional/vascular component of erythema but does not reduce telangiectasia, suppress the underlying inflammatory cascade, or modify the rosacea disease course. Originally developed and still widely used as an ophthalmic agent for glaucoma (Alphagan, 1996).

## Identity

- **PubChem CID:** 2435 (confirmed — "brimonidine" is synonym #1 in the PubChem record)
- **CAS:** 59803-98-4
- **InChIKey:** XYLJNLCSTIOKRM-UHFFFAOYSA-N
- **ChEMBL ID:** CHEMBL844 (free base form)
- **Molecular formula:** C11H10BrN5
- **Molecular weight:** 292.13 g/mol
- **Class:** quinoxaline derivative; imidazoline-substituted; α2-adrenergic receptor agonist
- **Trade names:** Mirvaso (0.33% gel; rosacea); Alphagan / Alphagan P (0.1–0.2% ophthalmic; glaucoma); Lumify (0.025% ophthalmic; eye redness)
- **Primary FDA approval:** August 2013 (Mirvaso, topical 0.33% gel, Galderma); glaucoma approval 1996

## Mechanism of action

Brimonidine is a **selective α2-adrenergic receptor agonist** — it has substantially higher affinity for ADRA2A (the predominant cutaneous α2 subtype) than for α2B, α2C, and markedly higher than for α1 receptors. This distinguishes it from oxymetazoline (mixed α1/α2 agonist) [^joezwiak2026].

**Vasoconstriction pathway:**
1. Brimonidine binds ADRA2A on vascular smooth-muscle cells of the superficial dermal vasculature
2. Gαi/o coupling inhibits adenylyl cyclase → reduces intracellular cAMP
3. Reduced PKA activity → maintained myosin light-chain kinase activity → smooth-muscle contraction
4. Net: **vasoconstriction** of superficial arterioles and venules → reduced blood flow through the dermal microvasculature → transient reduction in diffuse erythema

Additionally, presynaptic α2 autoreceptors on sympathetic terminals are activated → reduced norepinephrine release. This mechanism is exploited in the ophthalmic context (reduces aqueous humor production via ciliary body α2 receptors + increases uveoscleral outflow).

**What brimonidine does NOT do:**
- Does NOT ablate or structurally alter telangiectatic vessels. Fixed [[telangiectasia]] (permanently ectatic vessels) requires vascular laser (PDL, KTP) or IPL for structural clearance [^vanzuuren2019].
- Does NOT suppress the cathelicidin/KLK-5 innate-immune cascade driving [[rosacea]] inflammation.
- Does NOT reduce papulopustular lesions, Demodex burden, or any of the upstream rosacea pathomechanisms.
- Does NOT address the [[chronic-inflammation]] hallmark at the biological level — it addresses only its downstream vascular phenotype.

| Mechanism conservation (symptomatic indication) | Status |
|---|---|
| Receptor (ADRA2A) present and functionally similar in humans? | yes — ADRA2A is well-characterised in human cutaneous vasculature |
| Erythema suppression replicated in humans? | yes — pivotal Phase III RCTs + Cochrane review |
| Structurally modifies telangiectasia or underlying disease? | no |

## Efficacy

### Phase II and III pivotal data

The clinical development programme comprised Phase II and Phase III randomised, double-blind, vehicle-controlled multicentre studies.

**Phase II (Fowler 2012 BJD):** Two identical multicentre RCTs of brimonidine tartrate 0.5% gel (≡ 0.33% brimonidine free base = Mirvaso concentration) applied once daily for 4 weeks in patients with moderate-to-severe persistent facial erythema of rosacea. The primary endpoint was a composite ≥2-grade improvement on both CEA (Clinician Erythema Assessment) and PSA (Patient Self-Assessment) at any post-dose time point. Brimonidine was significantly more efficacious than vehicle within 30 minutes on Day 1 (P<0.001); efficacy increased further over the treatment period [^fowler2012].

**Phase III (combined n=553):** Two identical Phase III RCTs (Study A n=260, Study B n=293) using the same design. Speed-of-onset analysis of these Phase III data [^jackson2014] showed:

| Timepoint | Brimonidine | Vehicle | P value |
|---|---|---|---|
| Day 1 success rate | 27.9% | 6.9% | <0.001 |
| Day 15 success rate | 55.9% | 21.1% | <0.001 |
| Day 29 success rate | 58.3% | 32.0% | <0.001 |

Effect onset: statistically significant at ≥30 minutes post-application on Day 1. Effect duration: ~12 hours per-day. No tachyphylaxis was observed across 29 days in the primary trial analyses [^fowler2012].

**Layton 2015 JEADV (n=92):** An 8-day multicentre RCT in subjects with self-perceived severe erythema of rosacea. At Day 8: 71.7% of brimonidine-treated subjects achieved ≥1-grade CEA improvement vs 35.7% of vehicle (P=0.0011); 76.1% achieved PSA improvement vs 47.6% (P=0.004); 83.0% reported daily redness control on Day 1 vs 38.9% [^layton2015].

### Cochrane systematic review evidence (van Zuuren 2015)

A Cochrane systematic review and meta-analysis of rosacea interventions (106 RCTs, 13,631 participants) identified two brimonidine trials meeting inclusion criteria [^vanzuuren2015]:

- Risk ratio (treatment success at 3 hours): 2.21 (95% CI 1.52–3.22) and 2.00 (95% CI 1.33–3.01) across the two studies
- Importantly: **"No rebound or worsening of erythema after treatment cessation"** in the trial data
- Quality of evidence rated **high** for the erythema outcome

The 2019 updated systematic review (van Zuuren 2019 BJD, GRADE high certainty) confirmed sustained evidence for brimonidine for persistent erythema, with meta-analysis showing significantly greater responder rates vs vehicle [^vanzuuren2019].

## Rebound erythema — the key clinical caveat

**Discordance between trial data and post-marketing experience.** The controlled RCTs consistently found no rebound erythema after cessation [^vanzuuren2015]. However, post-marketing case reports and expert surveys document a clinically important rebound phenomenon in a subset of patients.

**Case report evidence:** Two 2014 case reports in JAAD documented patients experiencing paradoxical erythema worsening after brimonidine 0.33% gel application — in some cases more severe than baseline — with one proposing the term "dermatitis medicamentosa" [^routt2014][^ilkovitch2014]. A later case report proposed an α-adrenergic receptor upregulation mechanism analogous to rhinitis medicamentosa with nasal decongestants — chronic agonist use leads to receptor supersensitisation and rebound vasodilatation upon removal [^werner2015].

**Expert panel estimate:** A 2015 expert panel consensus (Tanghetti et al., *J Drugs Dermatol*) estimated rebound erythema in approximately 10–20% of patients in real-world use, a far higher rate than the near-zero rate observed in the 4-week Phase III trials [^tanghetti2015].

**Mechanistic hypothesis:** The proposed mechanism — upregulation of α2-adrenergic receptors or their downstream signalling components under chronic agonist exposure, producing receptor hypersensitivity and paradoxical vasodilation on drug withdrawal — is biologically plausible but has not been directly confirmed in human skin. Practical mitigation strategies suggested by expert consensus include intermittent application, skin conditioning protocols before starting brimonidine, and transitioning to combination anti-inflammatory therapy that addresses the underlying rosacea.

**Reconciling the discordance:** The most parsimonious explanation is that the controlled 4-week trial washout periods (with close clinical monitoring) did not capture the rebound pattern that emerges in longer-duration real-world use with irregular application. Patient population differences (skin barrier integrity, concurrent medications, topical regimen history) may also contribute.

#gap/contradictory-evidence — Trial data: no rebound. Post-marketing expert consensus: ~10–20% incidence. A prospective observational study powered to estimate real-world rebound incidence with standardised application schedules would resolve this discordance.

## Ophthalmic use (context only)

Brimonidine has been FDA-approved for intraocular pressure reduction in open-angle glaucoma and ocular hypertension since 1996 (Alphagan 0.2% then Alphagan P 0.15% and 0.1% ophthalmic solutions). The ophthalmic mechanism is the same receptor pharmacology: α2 agonism reduces aqueous humor production by the ciliary body (Gαi → ↓cAMP) and additionally increases uveoscleral outflow. At ophthalmic doses (0.1–0.2%), systemic exposure is minimal. In 2017, Lumify (0.025% ophthalmic solution) was FDA-approved for conjunctival redness relief. This page focuses on the topical dermatological indication; ophthalmic data are noted for compound completeness only.

**Systemic exposure caution with topical facial use:** A case report (PMID 39045525; 2024) documented symptomatic bradycardia associated with topical brimonidine 0.33% gel in a patient — a reminder that facial skin (especially periorbital and nasal skin) has relatively high vascularity and percutaneous absorption. Use in patients on antihypertensives, beta-blockers, or CNS depressants may produce additive hemodynamic effects [^joezwiak2026].

## Comparison with oxymetazoline

Both brimonidine and oxymetazoline are FDA-approved topical vasoconstrictors for rosacea-associated persistent erythema. They differ in receptor pharmacology:

| Feature | Brimonidine 0.33% (Mirvaso) | Oxymetazoline 1% (Rhofade) |
|---|---|---|
| Primary receptor | α2-adrenergic (Gαi) | α1 + partial α2 (Gq/Gαi) |
| FDA approval | 2013 | 2017 |
| CEA responder rate at week 4 | ~56–58% vs ~21–32% vehicle (Phase III) | ~38% vs vehicle (meta-analysis, n=2,298) [^liu2023] |
| Rebound erythema rate | ~10–20% (post-marketing estimates) | ~1% (meta-analysis estimate); application-site dermatitis more prominent [^liu2023] |
| Notable AE | Paradoxical flushing/rebound | Application-site dermatitis (RR 8.91 vs vehicle) |

No head-to-head RCT comparing brimonidine and oxymetazoline on the same primary endpoint has been published as of 2026-06-27. #gap/needs-replication

## Aging relevance

Rosacea predominantly affects adults in the 30–60 year age range and worsens in severity with cumulative UV exposure and age-related changes in dermal vasculature, innate immune tone, and microbiome composition (see [[rosacea]]). In older adults (65+), facial erythema is a frequent cosmetic concern and quality-of-life issue.

Brimonidine treats the **vascular symptom** of rosacea erythema without addressing any of the underlying aging biology. In the context of this wiki's hallmarks framework:

- The compound provides **symptomatic relief** for a phenotypic output of [[chronic-inflammation]] (the cathelicidin/KLK-5 innate-immune dysregulation of rosacea drives fixed vasodilation and structural vascular changes).
- It does **not** suppress SASP, reduce senescent cell burden, modulate cathelicidin, or address any López-Otín hallmark mechanistically.
- As such, it fits the aging wiki primarily as context for understanding the management gap in rosacea: there is a clear need for treatments that address the underlying vascular aging biology (collagen support loss, senescent endothelial SASP) rather than only symptomatic vasoconstriction.

A 2024 review of rosacea pharmacotherapy in older adults (Lee & Chien, *Drugs Aging*) identifies brimonidine and oxymetazoline as first-line agents for centrofacial erythema while noting the need to "balance adequate potency with minimising skin irritation and other adverse effects" in older populations — adverse-event profiles have not been systematically characterised in adults ≥65 in dedicated trial substrata [^leechien2024]. #gap/long-term-unknown

## Limitations and gaps

1. **No structural disease modification.** Brimonidine produces no durable reduction in telangiectasia count, rosacea recurrence frequency, or underlying inflammatory burden. Patients using it for months to years without concomitant disease-modifying treatment (topical ivermectin, azelaic acid, photoprotection) may experience worsening structural disease despite symptomatic control of daily redness.

2. **Rebound incidence unclear.** The trial/post-marketing discordance (~0% vs ~10–20%) has not been resolved by a prospective observational study with standardised methods. #gap/contradictory-evidence

3. **No older-adult-specific safety data.** All pivotal RCTs enrolled predominantly 30–60-year-olds. Pharmacokinetic profile (percutaneous absorption, systemic exposure) in thin, barrier-impaired elderly skin has not been studied. Systemically absorbed brimonidine could cause hemodynamic effects (hypotension, bradycardia) in patients on antihypertensives or beta-blockers. #gap/long-term-unknown

4. **No combination therapy RCT vs structural endpoints.** Whether combining brimonidine with vascular laser or disease-modifying anti-rosacea agents improves structural endpoints (telangiectasia count, TEWL, barrier function) is untested in controlled studies.

5. **ADRA2A protein page missing.** The primary target ADRA2A lacks a dedicated wiki protein page. `[[adra2a]]` is an implicit stub; the compound's receptor biology links to a non-existent page. #gap/stub

## Cross-references

- [[rosacea]] — the clinical condition this compound is approved to treat; cathelicidin/KLK-5 pathophysiology
- [[erythema]] — chronic erythema framework; comparative efficacy data vs other topical agents
- [[telangiectasia]] — fixed structural vascular lesions that brimonidine does not address; PDL/IPL required
- [[chronic-inflammation]] — the upstream hallmark whose vascular phenotype brimonidine symptomatically suppresses
- [[cellular-senescence]] — SASP-driven pro-angiogenic milieu underlying progressive vascular aging in rosacea skin
- [[skin-aging]] — cumulative UV/MMP/collagen loss axis enabling vessel ectasia
- [[interventions/procedural/vascular-laser]] — structural treatment modality for fixed telangiectasia (implicit stub)

## Footnotes

[^fowler2012]: doi:10.1111/j.1365-2133.2011.10716.x · Fowler J, Jarratt M, Moore A, Meadows K, Pollack A, Steinhoff M, Liu Y, Leoni M; Brimonidine Phase II Study Group · *British Journal of Dermatology* 2012;166(3):633–641 · randomized · n=2 identical multicentre RCTs of moderate-to-severe facial erythema of rosacea; brimonidine tartrate 0.5% gel (= 0.33% free base) once daily 4 weeks vs vehicle; statistically significant ≥2-grade composite CEA+PSA success within 30 min on Day 1 (P<0.001); effect duration ~12 h; no tachyphylaxis at 29 days; no rebound erythema in washout · model: human Phase II

[^jackson2014]: PMID 24918560 · Jackson JM, Fowler J, Moore A, Jarratt M, Jones T, Meadows K, Steinhoff M, Rudisill D, Leoni M · *J Drugs Dermatol* 2014;13(6):699–704 · secondary analysis of Phase III pivotal-study data; improvement in facial erythema within 30 minutes of initial application; day-by-day responder rates at 30-min post-application: Day 1 27.9% vs 6.9%, Day 15 55.9% vs 21.1%, Day 29 58.3% vs 32.0% (all P<0.001 brimonidine vs vehicle) · Phase III studies n=260 + n=293 = n=553 combined · **specific responder-rate figures not independently confirmed against full text (closed-access, no DOI in PubMed, no PMC)**

[^layton2015]: PMID 26416154 · Layton AM, Schaller M, Homey B et al. · *Journal of the European Academy of Dermatology and Venereology* 2015;29(12):2405–2410 · randomized · n=92; brimonidine gel 0.33% once daily 8 days vs vehicle; Day 8: 71.7% vs 35.7% ≥1-grade CEA improvement (P=0.0011); 76.1% vs 47.6% PSA improvement (P=0.004); 83.0% vs 38.9% daily redness control on Day 1; no rebound erythema analysis conducted

[^vanzuuren2015]: PMID 25919144 · van Zuuren EJ, Fedorowicz Z, Carter B, van der Linden MMD, Charland L · *Cochrane Database of Systematic Reviews* 2015;(4):CD003262 · systematic review and meta-analysis · 106 included studies; 13,631 participants; two brimonidine trials included; RR at 3h: 2.21 (95%CI 1.52–3.22) and 2.00 (95%CI 1.33–3.01); no rebound or worsening of erythema after treatment cessation in RCT data; high quality evidence

[^vanzuuren2019]: doi:10.1111/bjd.17590 · van Zuuren EJ, Fedorowicz Z, Tan J, van der Linden MMD, Arents BWM, Carter B, Charland L · *British Journal of Dermatology* 2019;181(1):65–79 · systematic review with GRADE · 152 studies, 20,944 participants; GRADE high certainty for brimonidine for persistent erythema; also high certainty for azelaic acid and ivermectin for papulopustular phenotype

[^routt2014]: PMID 24438976 · Routt ET, Levitt JO · *Journal of the American Academy of Dermatology* 2014;70(2):e37–e38 · case report · rebound erythema and burning sensation following brimonidine tartrate gel 0.33%; n=1; **abstract-only verification**

[^ilkovitch2014]: PMID 24742853 · Ilkovitch D, Pomerantz RG · *Journal of the American Academy of Dermatology* 2014;70(5):e109–e110 · case report/commentary · "brimonidine effective but may lead to significant rebound erythema"; n=1; **abstract-only verification**

[^werner2015]: PMID 25780983 · Werner K, Kobayashi TT · *Dermatology Online Journal* 2015;21(3):13030/qt93n0n7pp · case report with photo-documentation · proposes "dermatitis medicamentosa" terminology; mechanism proposed: upregulation of α-adrenergic receptors analogous to nasal decongestant dependence (rhinitis medicamentosa); 28-year-old woman (Fitzpatrick II), progressive worsening of baseline erythema several hours following treatment; symptoms improved on Mirvaso discontinuation · n=1; **abstract-only verification**

[^tanghetti2015]: PMID 25607906 · Tanghetti EA et al. · *Journal of Drugs in Dermatology* 2015;14(1):33–40 · expert panel consensus recommendations · optimization strategies and terminology proposed to distinguish physiologically distinct adverse events; estimated rebound erythema incidence ~10–20% in real-world use · **abstract only — abstract is truncated in PubMed; ~10–20% rebound estimate not confirmed from abstract text and requires full-text verification**

[^joezwiak2026]: doi:10.3390/ijms27031281 · PMID 41683709 · Jóźwiak W, Pietrusiewicz M, Piechota-Urbańska M, Markowicz-Piasecka M · *International Journal of Molecular Sciences* 2026;27(3):1281 · review · mechanisms beyond ophthalmology: α2-AR activation → vasoconstriction + reduced neurogenic inflammation; emerging use for alcohol flushing, post-procedural redness, hemostasis in Mohs surgery; rebound erythema flagged; advanced delivery systems (hydrogel/lipid carriers) reviewed · open access

[^leechien2024]: doi:10.1007/s40266-024-01115-y · PMID 38649625 · Lee JJ, Chien AL · *Drugs and Aging* 2024;41(5):407–421 · review · rosacea pharmacotherapy in older adults; brimonidine and oxymetazoline identified as first-line for centrofacial erythema; balance between potency and skin irritation in older patients; specific efficacy/AE data in ≥65 age group not reported in primary trials · **abstract-only verification**

[^liu2023]: doi:10.1111/jocd.15747 · Liu F, Zhou Q, Wang H, Fu H, Li Y, Tao M, Luo H, Cao Y · *Journal of Cosmetic Dermatology* 2023;22(9):2408–2419 · meta-analysis · PMID 37128814 · oxymetazoline 1% cream: significantly higher CEA and SSA success rates vs vehicle at 3, 6, 9, 12 h; application-site dermatitis RR=8.91 (95%CI 1.76–45.23 vs vehicle); ~38% CEA two-grade improvement at week 4 and ~1% rebound erythema rate cited but not confirmed from abstract — require full-text verification for these specific figures #gap/needs-replication
