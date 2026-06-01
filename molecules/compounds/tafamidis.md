---
type: compound
aliases: [Vyndaqel, Vyndamax, tafamidis-meglumine, Fx-1006A, tafamidis free acid]
pubchem-cid: 11001318
chembl-id: null
drugbank-id: DB05984
biologic: false
who-inn: tafamidis
molecular-formula: C14H7Cl2NO3
molecular-weight-da: 308.1
mechanisms: [ttr-tetramer-stabilization, anti-amyloid-stabilizer]
targets: ["[[transthyretin]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Phase 3 RCT of tafamidis + TTR-siRNA (patisiran/vutrisiran) combination vs either monotherapy in early-stage ATTR-CM — the dual-mechanism hypothesis (stabilize residual tetramers + suppress new TTR synthesis) is biologically sound but untested; this is the single experiment that could establish whether combination exceeds either agent's mortality benefit."
clinical-trials-active: 5
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "ATTR-ACT (Maurer 2018) and Coelho 2012 verified against downloaded PDFs; Facin 2025 verified against downloaded PDF; Bulawa 2012 Kd values verified against PubMed abstract (not_oa, no full PDF); Hussain 2025 verified against PubMed abstract (download failed); Damy 2025 and Judge 2025/Fontana 2025 not independently verified (not_oa or not in archive) — claims retained as-is from seeder with gap tags; canonical-DB identity fields (DrugBank DB05984, InChIKey) not independently re-verified"
---

# Tafamidis

The first FDA-approved oral disease-modifying therapy for transthyretin amyloid cardiomyopathy (ATTR-CM). A small-molecule kinetic stabilizer of the transthyretin (TTR) tetramer: it binds at the two thyroxine-binding sites on the TTR dimer-dimer interface, raising the activation-energy barrier against tetramer dissociation and preventing the amyloidogenic cascade. Branded as **Vyndaqel** (tafamidis meglumine, 80 mg/day) and **Vyndamax** (tafamidis free acid, 61 mg/day), both from Pfizer. In the ATTR-ACT Phase 3 trial (n=441, 30 months), tafamidis reduced all-cause mortality (HR 0.70; 29.5% vs 42.9%) and cardiovascular hospitalization frequency (RRR 0.68; 0.48 vs 0.70/yr) vs placebo [^maurer2018]. The **founding clinical proof-of-concept for the AmyloSENS precursor-stabilization strategy.**

## Identity

- **PubChem CID:** 11001318 (free acid form)
- **InChIKey:** TXEIIPDJKFWEEC-UHFFFAOYSA-N
- **Molecular formula:** C14H7Cl2NO3
- **Molecular weight:** 308.1 Da (free acid); tafamidis meglumine salt ~503 Da
- **DrugBank:** DB05984
- **ChEMBL:** #gap/needs-canonical-id — ChEMBL entry not confirmed; canonical ID omitted rather than invented
- **Class:** benzoxazole carboxylic acid; small-molecule kinetic stabilizer
- **Route:** oral
- **WHO INN:** tafamidis

## Approval history

| Jurisdiction | Indication | Approval date | Form |
|---|---|---|---|
| Japan PMDA | hATTR polyneuropathy (Val30Met) | June 2011 | Tafamidis meglumine |
| EMA | hATTR polyneuropathy | November 2011 | Tafamidis meglumine |
| FDA | ATTR-CM (both hATTR-CM and wtATTR-CM) | May 3, 2019 | Vyndaqel (meglumine) + Vyndamax (free acid) |
| EMA | ATTR-CM | February 2020 | Tafamidis meglumine |

**US polyneuropathy indication not approved.** Tafamidis was reviewed for hATTR polyneuropathy by the FDA; the agency found the Phase 2/3 trial (Coelho 2012 Neurology) did not meet its primary endpoints in the intent-to-treat population and did not grant US approval for that indication [^coelho2012]. Japan and Europe approved for hATTR-PN; the US approval is ATTR-CM only.

## Mechanism of action

TTR amyloidogenesis follows a defined sequential pathway: the native TTR homotetramer must first **dissociate to monomers** (rate-limiting step), which then undergo partial unfolding and misassembly into amyloid fibrils. TTR in plasma is predominantly the homotetrameric form, stabilized by quaternary contacts at the dimer-dimer interface.

Tafamidis binds selectively to the two thyroxine (T4)-binding sites located at the dimer-dimer interface of the TTR tetramer. The two sites display **negative binding cooperativity** (first-site Kd ~2 nM; second-site Kd ~200 nM) [^bulawa2012]. At clinical plasma concentrations (~1 µM), tafamidis occupies primarily one site per tetramer; this is sufficient to provide substantial kinetic stabilization. Tafamidis does not affect thyroid hormone axis because its binding affinity for TTR greatly exceeds that of T4, and displaced T4 is compensated by the large free T4 pool.

**Degree of stabilization at clinical dose:** ~70% TTR stabilization at 80 mg/day (meglumine) in plasma. This leaves ~30% of circulating TTR tetramers without stabilizer occupancy and thus vulnerable to the amyloidogenic pathway. The residual unoccupied fraction is thought to underlie the incomplete (but substantial) clinical benefit. Acoramidis (FDA 2024) was designed to achieve near-complete (≥90%) stabilization by occupying both sites with higher affinity — see §Comparison to acoramidis.

The mechanism is strictly **kinetic** (raising the activation-energy barrier for dissociation) rather than thermodynamic (altering equilibrium between folded and unfolded states). This distinction matters for interpreting the class's inability to reverse established amyloid deposits.

## Clinical evidence

### ATTR-ACT Phase 3 trial (ATTR-CM)

The pivotal evidence base [^maurer2018]:

| Parameter | Value |
|---|---|
| Trial | ATTR-ACT (NCT01994889) |
| Design | Randomized, double-blind, placebo-controlled |
| n | 441 (176 tafamidis 80 mg; 88 tafamidis 20 mg; 177 placebo) |
| Duration | 30 months |
| Indication | ATTR-CM (hATTR-CM and wtATTR-CM) |
| Primary endpoint | Hierarchical composite: all-cause mortality then frequency of CV hospitalizations (Finkelstein-Schoenfeld method) |
| Primary result (win ratio) | 1.695 (95% CI 1.255–2.289); p<0.001 — tafamidis superior |
| All-cause mortality | HR 0.70 (95% CI 0.51–0.96); 29.5% (78/264) vs 42.9% (76/177) |
| CV hospitalization frequency | RRR 0.68 (95% CI 0.56–0.81); 0.48/yr vs 0.70/yr placebo |
| 6-minute walk | Less decline vs placebo (p<0.001) |
| KCCQ-OS | Less decline in QoL vs placebo (p<0.001) |
| Efficacy-evaluable population | Superior results in patients with longer disease duration / earlier stage |

The primary endpoint (hierarchical composite) was met: tafamidis was superior to placebo (p<0.001). The mortality HR of ~0.70 corresponds to approximately a 30% relative reduction in all-cause mortality over 30 months. These are intention-to-treat results from the combined 80 mg + 20 mg tafamidis arms; 80 mg showed larger absolute benefit than 20 mg.

**Stage-stratified long-term benefit (post-hoc, ATTR-ACT + open-label extension, up to 90 months):** In NAC Stage I, continuous tafamidis showed HR 0.43 (p<0.001) for mortality vs placebo-to-tafamidis crossover; Stage II: HR 0.51 (p=0.003); Stage III: HR 0.75 (p=0.298, non-significant) [^damy2025]. This gradient indicates early-disease initiation dramatically amplifies benefit — Stage III patients derive numerically less survival benefit, likely because established amyloid burden is not reversed by stabilization. This is the strongest current evidence for early screening and treatment initiation.

**Meta-analytic confirmation (2025):** A systematic review + meta-analysis of 7 RCTs (Hussain et al. 2025) found tafamidis associated with OR 0.55 (95% CI 0.42–0.73; I²=41%; p<0.0001) for all-cause mortality, consistent with the ATTR-ACT primary analysis [^hussain2025]. Reduction in CHF exacerbations was also significant (OR 0.71; 95% CI 0.51–0.99; p=0.04). A separate 7-RCT systematic review of all TTR-targeted therapies (Facin et al. 2025, n=2,526) found, in the TTR stabilizer subgroup (ATTR-ACT + ATTRibute-CM; tafamidis + acoramidis combined), RR 0.71 (95% CI 0.59–0.87; p=0.0006) for all-cause mortality and RR 0.81 (95% CI 0.73–0.89; p<0.0001) for hospitalizations; TTR silencers (patisiran, inotersen, revusiran, vutrisiran) showed no significant mortality reduction (RR 0.79; 95% CI 0.37–1.68; p=0.54) [^facin2025]. Note: the stabilizer-subgroup figures include acoramidis and are not tafamidis-specific.

### hATTR polyneuropathy Phase 2/3 trial

The first human RCT of tafamidis [^coelho2012]:

- n=128 randomized (65 tafamidis, 63 placebo); ITT population n=125; 18 months; Val30Met hATTR-PN
- Co-primary endpoints (NIS-LL responder analysis AND TQOL change): **both not met** in ITT. NIS-LL responders: 45.3% vs 29.5% (p=0.068); TQOL LS mean difference −5.2 points (p=0.116)
- Efficacy-evaluable (EE) population: NIS-LL responders 60.0% vs 38.1% (p=0.041); TQOL difference 8.8 points (p=0.045)
- TTR stabilization: 98% of tafamidis-treated vs 0% placebo (p<0.0001) — mechanistic proof-of-concept
- The discrepancy between ITT and EE results reflects disease stage at enrollment (early-stage patients in the EE subgroup responded better)

Based on this trial, the FDA did not approve tafamidis for polyneuropathy in the US; Japan and EMA approved for hATTR-PN. The mechanistic result (98% TTR stabilization vs 0%) provided the pharmacodynamic confirmation that drove ATTR-CM development.

## Pharmacokinetics

| Parameter | Value |
|---|---|
| Bioavailability | High oral bioavailability (~>90% in animal models); well-absorbed |
| Plasma protein binding | >99% (highly albumin and TTR-bound) |
| Half-life | ~49 hours (tafamidis free acid); supports once-daily dosing |
| Metabolism | Minimal hepatic metabolism; primarily glucuronidated |
| Elimination | Fecal (primary), renal (minor) |
| Clinical dose (ATTR-CM) | Vyndaqel: 80 mg/day (meglumine salt); Vyndamax: 61 mg/day (free acid, bioequivalent to 80 mg meglumine) |

The long half-life (~2 days) supports once-daily dosing and enables near-steady-state plasma concentrations with minimal peak-trough variability. At 80 mg/day, trough plasma concentrations substantially exceed the TTR T4-site Kd, supporting the ~70% stabilization observed.

## Comparison to acoramidis

Acoramidis (Attruby; BridgeBio Pharma) received FDA approval in November 2024 for ATTR-CM, becoming the second oral TTR stabilizer. Key cross-class comparisons:

| Feature | Tafamidis | Acoramidis |
|---|---|---|
| FDA approval | May 2019 | November 2024 |
| Mechanism | Binds primarily one T4 site (negative cooperativity) | Occupies both T4 sites (higher affinity, symmetric) |
| TTR stabilization at clinical dose | ~70% | ≥90% (near-complete) |
| Pivotal trial | ATTR-ACT: HR ~0.70 mortality (30 mo) | ATTRibute-CM: win ratio 1.8; HR ~0.57 mortality+CV (42 mo) |
| Head-to-head trial | None completed as of 2026-05-09 | — |
| Annual cost (US) | ~$200,000–$250,000/yr | Similar range |

**Caveat on cross-trial comparison:** The two trials differ in duration (30 vs 42 months), primary endpoint definition, and patient population. The nominally more favorable HR in the acoramidis trial cannot be directly attributed to the higher TTR stabilization without a head-to-head design. The mechanistic hypothesis (more complete stabilization → greater benefit) is plausible but unproven. #gap/contradictory-evidence — note that acoramidis OLE data at month 42 (HR 0.57 for composite) appears more favorable than tafamidis ATTR-ACT (HR ~0.70 mortality at 30 mo), but the comparison is cross-trial only [^judge2025].

## Competing TTR-targeted strategies

The ATTR-CM therapeutic landscape now includes three mechanistic approaches:

| Class | Agents | Mechanism | FDA status |
|---|---|---|---|
| TTR tetramer stabilizers | Tafamidis, [[acoramidis]] | Prevent dissociation → prevent amyloidogenesis | Approved |
| TTR RNA interference | [[patisiran]], vutrisiran | siRNA reduces hepatic TTR synthesis | Approved (ATTR-PN 2018; ATTR-CM 2024) |
| TTR antisense | Inotersen | ASO reduces hepatic TTR synthesis | Approved (ATTR-PN 2018) |

**Combination strategy hypothesis:** Stabilizing residual TTR tetramers (tafamidis/acoramidis) while simultaneously reducing total TTR production (siRNA/ASO) could offer additive or synergistic benefit. HELIOS-B (vutrisiran in ATTR-CM, n=655) allowed concurrent tafamidis use; ~43% of the HELIOS-B population was on tafamidis at baseline [^fontana2025]. Post-hoc analyses of HELIOS-B comparing on-tafamidis vs off-tafamidis subgroups may inform the combination question, but a dedicated combination RCT has not been initiated as of 2026-05-09. #gap/needs-replication

## Safety

Tafamidis is generally well-tolerated. Key safety observations from ATTR-ACT and post-marketing:

- **Adverse event rates:** In ATTR-ACT, overall AE frequency was similar between tafamidis and placebo arms; the drug was not associated with excess SAEs in the trial.
- **UTI and diarrhea:** Slightly higher rates in tafamidis vs placebo in some analyses — likely related to the patient population's age and comorbidity burden rather than drug-specific.
- **Thyroid function:** Tafamidis binds TTR's T4 sites but does not displace endogenous T4 from the thyroid axis at clinical doses. No clinically meaningful alterations in thyroid function tests reported in ATTR-ACT.
- **Drug interactions:** Tafamidis is highly protein-bound; co-administration with strong CYP inhibitors/inducers is not expected to alter exposure significantly (minimal hepatic metabolism). Review co-medications for competitive TTR-binding drugs (diflunisal — another TTR stabilizer used off-label — competes for the same binding site).
- **No reversal of established amyloid:** The mechanism is purely preventive; patients with extensive cardiac amyloid deposition at baseline benefit less (Stage III: non-significant mortality reduction).

## Aging context — AmyloSENS strategy

Tafamidis is the **first FDA-approved drug in the AmyloSENS category of the SENS damage-repair framework.** The AmyloSENS strategy targets extracellular amyloid accumulation as a contributor to age-related organ dysfunction — see [[frameworks/sens-damage-categories]] §AmyloSENS.

Wild-type ATTR-CM (wtATTR-CM) is an age-associated disease driven by normal (non-mutant) TTR: as TTR circulates over decades, kinetic instability in the aging plasma environment results in progressive tetramer dissociation, fibril formation, and myocardial deposition. Prevalence of wtATTR-CM increases steeply with age; autopsy studies suggest subclinical TTR amyloid deposition is present in a majority of individuals over 80. The diagnosis is clinically underrecognized: significant proportions of patients labeled HFpEF harbor undiagnosed wtATTR-CM [^tanaka2026].

The ATTR-ACT trial's ~30% mortality reduction establishes that **pharmacological prevention of amyloid formation can deliver survival benefit** — a foundational proof-of-concept for the AmyloSENS strategy. This makes tafamidis the first disease-modifying drug for any age-associated amyloid disease to achieve a hard mortality endpoint in a prospective Phase 3 trial.

**Hallmark mapping:**
- Primary: [[loss-of-proteostasis]] — TTR amyloid is an extracellular proteostasis failure; tafamidis prevents accumulation of pathological aggregates
- Secondary: [[altered-intercellular-communication]] — cardiac amyloid disrupts cardiomyocyte mechanical coupling and electrical signaling via physical intercalation

## Extrapolation and translation status

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | Yes — TTR amyloidogenesis mechanism established in human biochemistry |
| Hard endpoint in humans? | Yes — ATTR-ACT: HR 0.70 (95% CI 0.51–0.96) all-cause mortality; win ratio 1.695 (p<0.001); 30 months; Phase 3 RCT n=441 |
| Replicated? | Yes — multiple post-hoc analyses, meta-analyses; acoramidis ATTRibute-CM independently confirms the class |
| Long-term (>5 yr) data? | Yes — ATTR-ACT OLE up to 90 months; continuous tafamidis arm maintained benefit vs placebo-crossover |

Translation barriers:
1. **Does not reverse established amyloid** — Stage III patients benefit less; early diagnosis is essential
2. **Cost** — ~$200,000–$250,000/yr in the US; limiting global access, particularly in resource-constrained settings
3. **Diagnosis lag** — median delay from symptom onset to ATTR-CM diagnosis has historically been years; widespread echocardiographic and scintigraphic screening could expand eligible population
4. **wtATTR-CM underdiagnosis** — substantial proportion of HFpEF patients have unrecognized wtATTR-CM [^tanaka2026] #gap/needs-human-replication (screening implementation data)

## Related pages

- [[transthyretin]] — target protein; TTR genetics, structure, amyloidogenesis mechanism
- [[acoramidis]] — second-generation TTR stabilizer (FDA 2024); higher TTR stabilization, similar mechanism class
- [[patisiran]] — TTR RNAi (siRNA); reduces TTR synthesis rather than stabilizing tetramers
- [[loss-of-proteostasis]] — hallmark page for amyloid and proteostasis failures
- [[frameworks/sens-damage-categories]] — AmyloSENS framework overview; AmyloSENS §6 covers extracellular amyloid strategies

## Limitations and gaps

- **Does not reverse established amyloid deposits.** Patients with advanced cardiac amyloid burden at treatment initiation have attenuated benefit. Combination with amyloid-clearing strategies (currently investigational for TTR-amyloid; contrast with anti-Aβ antibody success in Alzheimer's — different structural target) is an open question.
- **~30% of TTR tetramers remain unstabilized** at clinical dose — the mechanism is incomplete; acoramidis addresses this with higher occupancy, but head-to-head evidence is absent.
- **US approval covers ATTR-CM only.** hATTR polyneuropathy patients in the US are directed to RNAi/ASO therapies (patisiran/inotersen) rather than tafamidis for the neuropathy indication.
- **Combination with siRNA unstudied.** No dedicated RCT has tested tafamidis + TTR-siRNA; HELIOS-B subgroup data are observational. #gap/needs-replication
- **Cost and access.** At ~$200,000+/yr in the US, the drug is accessible mainly in high-income settings; global adoption is limited. Generics are not yet available (patent expiry anticipated ~2030s).
- **wtATTR-CM diagnosis frequently delayed.** Even with effective treatment available, most patients are diagnosed at symptomatic / advanced stages; early screening protocols are not yet standard of care.

#gap/needs-canonical-id — ChEMBL ID for tafamidis not confirmed; verify at https://www.ebi.ac.uk/chembl/ using InChIKey TXEIIPDJKFWEEC-UHFFFAOYSA-N.

## Footnotes

[^maurer2018]: doi:10.1056/nejmoa1805689 · Maurer MS, Schwartz JH, Gundapaneni B, et al. · *N Engl J Med* 2018;379:1007–1016 · rct · n=441 (264 tafamidis pooled / 177 placebo) · model: adults with ATTR-CM (hATTR-CM and wtATTR-CM); 30-month placebo-controlled · primary endpoint (Finkelstein-Schoenfeld hierarchical composite) met: win ratio 1.695 (95% CI 1.255–2.289; p<0.001); all-cause mortality HR 0.70 (95% CI 0.51–0.96); CV hospitalization RRR 0.68 (95% CI 0.56–0.81) · funded by Pfizer · in archive: downloaded

[^coelho2012]: doi:10.1212/wnl.0b013e3182661eb1 · Coelho T, Maia LF, Martins da Silva A, et al. · *Neurology* 2012;79(8):785–792 · rct · n=128 randomized (65 tafamidis / 63 placebo); ITT n=125 · model: hATTR polyneuropathy Val30Met, 18-month placebo-controlled · co-primary ITT endpoints not met: NIS-LL responders 45.3% vs 29.5% (p=0.068), TQOL difference p=0.116; EE population: NIS-LL responders 60.0% vs 38.1% (p=0.041); 98% TTR stabilization vs 0% (p<0.0001) · in archive: downloaded (PMC)

[^bulawa2012]: doi:10.1073/pnas.1200395109 · Bulawa CE, Connelly S, Devit M, et al. · *Proc Natl Acad Sci USA* 2012;109(24):9629–9634 · in-vitro + biophysical · model: purified TTR protein + binding assays · Kd site 1 ~2 nM; Kd site 2 ~200 nM; negative cooperativity; selectivity for tetramer over monomer · not in archive (not_oa)

[^damy2025]: doi:10.1093/eurheartj/ehae666.1063 · Damy T, Wang R, Maurer MS, Gillmore JD, Fontana M · *Eur Heart J* 2025 (conference proceeding, long-term OLE analysis) · post-hoc analysis of ATTR-ACT + OLE, up to 90 months · n=350 evaluable · Stage I: HR 0.43 (p<0.001); Stage II: HR 0.51 (p=0.003); Stage III: HR 0.75 (p=0.298) · in archive: download status not_oa

[^hussain2025]: doi:10.1016/j.cpcardiol.2025.103129 · Hussain B, Duhan S, Patel B, et al. · *Curr Probl Cardiol* 2025;50(9):103129 · meta-analysis · 7 RCTs · OR 0.55 (95% CI 0.42–0.73; I²=41%; p<0.0001) all-cause mortality; OR 0.71 (0.51–0.99; p=0.04) CHF exacerbations · not yet confirmed in archive

[^facin2025]: doi:10.36660/abc.20240830 · Facin LC, Romeiro IPF, et al. · *Arq Bras Cardiol* 2025;122(8):e20240830 · meta-analysis + systematic review · 7 RCTs; 2,526 participants · TTR stabilizers vs placebo: all-cause mortality RR 0.71 (0.59–0.87; p=0.0006); hospitalizations RR 0.81 (0.73–0.89; p<0.0001) · not yet confirmed in archive

[^judge2025]: doi:10.1161/CIRCULATIONAHA.124.072447 · Judge DP, Gillmore JD, Alexander KM, et al. · *Circulation* 2025 · rct OLE · n=participants from ATTRibute-CM (acoramidis trial) continuing into OLE · HR 0.57 for all-cause mortality or first CV hospitalization (continuous treatment arm vs placebo-crossover, through month 42) · cited for acoramidis cross-trial comparison; not a head-to-head vs tafamidis · not yet confirmed in archive

[^fontana2025]: doi:10.1056/NEJMoa2409001 · Fontana M, Berk JL, Gillmore JD, et al. · *N Engl J Med* 2025;392(1):33–44 · rct · n=655 · model: adults with ATTR-CM (HELIOS-B trial of vutrisiran); HR 0.72 composite endpoint (p=0.01); HR 0.65 all-cause mortality (p=0.01) at 42 months; ~43% of enrolled patients concurrently on tafamidis · not yet confirmed in archive

[^tanaka2026]: PMID 41656575 · Tanaka H · *Int J Cardiol* 2026;450 · review · model: n/a · discusses underdiagnosis of wtATTR-CM in HFpEF population; proposes screening framework; not a primary clinical trial
