---
type: compound
aliases: [Leqembi, BAN2401, lecanemab-irmb]
pubchem-cid: null
chembl-id: CHEMBL3833321
drugbank-id: DB16493
biologic: true
who-inn: lecanemab
molecular-formula: null
molecular-weight-da: ~150000
mechanisms: [amyloid-beta-protofibril-clearance, anti-amyloid-immunotherapy]
targets: ["[[amyloid-beta]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong   # NOTE: 'effect-size-modest' used by seeder is non-canonical (not in CLAUDE.md enum). 'human-evidence-strong' best fits FDA-traditional-approval + n=1795 RCT, though clinical meaningfulness of the effect is actively debated (Cochrane 2026 concludes "trivial" effects on cognition). See verified-scope for rationale. Flag for CLAUDE.md schema discussion if a 'clinically-contested' value is warranted.
next-experiment: "Phase 3 RCT of lecanemab + E2814 (anti-tau) combination vs. lecanemab monotherapy in early AD, with 36-month CDR-SB and hippocampal volume as co-primary endpoints, to determine whether tau co-targeting resolves the ceiling on cognitive benefit."
clinical-trials-active: 6
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "van Dyck 2023 NEJM (Clarity AD primary) verified end-to-end against local PDF. Corrections: ARIA-H placebo rate (2.7%→9.0%), ARIA-H lecanemab rate (13.0%→17.3%), falls rate (11%→10.4%), symptomatic ARIA-E rate added (2.8%), APOE4-stratified ARIA-E rates corrected from body text, brain-volume-paradox claim unattributable to van Dyck 2023 (MRI results not analyzed in primary paper — source removed), QoL percentages (EQ-5D 49%, QOL-AD 56%, ZBI 38%) not in primary paper — removed pending source identification. translation-gap field: non-canonical value 'effect-size-modest' retained with scope note; recommend CLAUDE.md schema discussion. OLE 36-month data (van Dyck 2025 alz.70905): abstract-level only, PDF pending. Cochrane 2026 (Nonino, PMID 41985900) integrated as supersession candidate."
---

> Verified 2026-05-09 against van Dyck 2023 NEJM (Clarity AD primary paper, local PDF). Several safety figures corrected; QoL percentages and brain-volume claim removed pending sourcing. See `verified-scope` in frontmatter for full correction log.

# Lecanemab

Lecanemab (brand name: Leqembi; Eisai/Biogen; INN: lecanemab-irmb) is a humanized IgG1 monoclonal antibody that selectively binds **soluble amyloid-beta (Aβ) protofibrils** — the presumed most neurotoxic aggregation intermediates in Alzheimer's disease. FDA approved July 6, 2023 for early Alzheimer's disease (mild cognitive impairment and mild dementia, amyloid-confirmed). It is the **first anti-amyloid antibody to receive FDA traditional approval with a demonstrated cognitive benefit at the trial's primary endpoint**, and constitutes the clearest clinical proof-of-concept to date for the [[sens-damage-categories|AmyloSENS]] damage-repair strategy.

## Identity and class

- **ChEMBL ID:** CHEMBL3833321
- **DrugBank ID:** DB16493 (verify on next lint pass)
- **WHO INN:** lecanemab-irmb
- **Molecular weight:** ~150,000 Da (IgG1 antibody; no PubChem CID assigned for biologics)
- **PubChem CID:** null (biologics are not assigned PubChem CIDs)
- **Isotype:** humanized IgG1 (intact Fc; required for ADCP-mediated microglial clearance)
- **Mechanism class:** [[frameworks/intervention-classes|anti-amyloid-beta-immunotherapy]] (class added 2026-05-09)
- **AmyloSENS category:** [[sens-damage-categories]] § AmyloSENS (extracellular protein aggregate clearance)

## Mechanism of action

Lecanemab binds with highest affinity to **soluble Aβ protofibrils** (large Aβ aggregates, ~75 nm; presumed most neurotoxic intermediates) and secondarily to fibrils; it has lower affinity for Aβ monomers and Aβ42 fibrils relative to earlier-generation antibodies (aducanumab preferentially binds fibrils and plaques) [^vandyck2023]. The intact IgG1 Fc region engages activating Fcγ receptors on microglia and peripheral monocytes, triggering **antibody-dependent cellular phagocytosis (ADCP)** of amyloid aggregates.

Downstream effect: amyloid-PET centiloid reduction (−59.1 centiloid difference at 18 months vs. placebo; 698-subject substudy) [^vandyck2023], with near-complete amyloid clearance in some participants by 18 months.

**Why protofibrils as the epitope target:** Aβ protofibrils are water-soluble, diffusible, and more potent synaptotoxins per molecule than mature insoluble fibrils — the "toxic oligomer" hypothesis predicts that clearing this fraction has the greatest cognitive benefit per unit clearance. This remains contested; the hypothesis is supported by Clarity AD data but the causal chain from amyloid removal to cognitive slowing is not fully elucidated. #gap/no-mechanism (complete chain from plaque clearance to synapse preservation not established)

## Approval history

| Date | Event |
|---|---|
| January 6, 2023 | FDA **accelerated approval** for early AD (amyloid-confirmed MCI + mild dementia), based on amyloid-PET reduction as surrogate endpoint |
| July 6, 2023 | FDA **traditional approval** conversion, based on Clarity AD 18-month clinical endpoint data |
| ~April 2025 | **EMA conditional marketing authorization** (Europe) — verify date on next lint pass #gap/unsourced |
| July 2023 | CMS reversed prior National Coverage Determination: Medicare covers lecanemab for beneficiaries in qualifying clinical programs |

Note: CMS April 2023 national coverage determination (NCD) was widely reported as a coverage expansion; verify the exact policy date and scope on next lint pass.

## Clinical evidence — Clarity AD (Phase 3)

**Study design:** Clarity AD (NCT03887455) — 18-month, double-blind, placebo-controlled, multicenter Phase 3 RCT. n = 1,795 (lecanemab n=898; placebo n=897). Ages 50–90; early AD (amyloid-confirmed MCI or mild dementia stage) [^vandyck2023].

**Primary endpoint:**

| Outcome | Lecanemab | Placebo | Difference | p |
|---|---|---|---|---|
| CDR-SB change from baseline (18 mo) | +1.21 | +1.66 | −0.45 | <0.001 |
| % slowing of decline | — | — | −27% | <0.001 |

**Secondary endpoints (all p<0.001):**

| Outcome | Difference | Direction |
|---|---|---|
| ADAS-Cog14 | −1.44 points | favors lecanemab |
| ADCOMS | −0.050 | favors lecanemab |
| ADCS-MCI-ADL | +2.0 points | favors lecanemab |
| Amyloid-PET centiloids (substudy, n=698) | −59.1 | favors lecanemab |

**Quality of life secondary outcomes:** EQ-5D-5L, QOL-AD (subject-rated), and ZBI caregiver burden were assessed as exploratory outcomes. The primary paper reports directional improvement favoring lecanemab but specific percentage figures are not reported in the primary paper text or tables [^vandyck2023]. #gap/unsourced (specific QoL percentage figures require a source — not in van Dyck 2023 primary paper; may derive from a conference presentation or supplementary analysis) #gap/needs-replication (exploratory; not pre-specified primary or key secondary)

**On effect size magnitude:** The 0.45-point CDR-SB absolute difference at 18 months is statistically robust (4,500+ citations on the primary paper as of 2026) but the clinical meaningfulness is debated. CDR-SB ranges 0–18; a 0.45-point difference on a scale anchored by global progression stages (~2 points per stage transition) is small in absolute terms. The −27% slowing metric is more intuitive but still reflects modest delay, not disease arrest.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (amyloid-beta aggregation in human AD) |
| Phenotype conserved in humans? | yes (CDR-SB, amyloid-PET in human AD patients) |
| Replicated in humans? | yes (Clarity AD n=1795; Asian sub-cohort analysis 2025 consistent [^vandyck2023_asian]) |

## Open-label extension data (Clarity AD OLE)

**Publication:** van Dyck et al. *Alzheimer's & Dementia* 2025; doi:10.1002/alz.70905 [^ole2025]. OLE allows placebo-arm crossover to active treatment; continued follow-up to 36 months.

**Key OLE findings (from abstract):**
- Benefit continued to accrue in CDR-SB through 36 months with sustained lecanemab treatment, with continued separation relative to the ADNI natural history cohort.
- Lecanemab reduced the risk of progression to the next stage of AD by ~28% compared to the ADNI natural history cohort.
- **69% of lecanemab-treated participants were improving or maintaining cognitive/functional status** at the 4-year assessment window (data cited from AAIC 2025 presentation; full numerical breakdown pending publication).

**Caution on OLE interpretation:** OLE studies lack randomized placebo controls beyond the initial 18-month period. The ADNI natural history cohort comparator is an unrandomized external control. These caveats apply to all 36-month+ extrapolations. #gap/long-term-unknown

## Safety — ARIA

**Class-wide safety liability.** Amyloid-related imaging abnormalities (ARIA) are caused by vascular amyloid destabilization during antibody-mediated clearance. Two types:

- **ARIA-E** (edema/effusions): vasogenic edema and sulcal effusions on FLAIR MRI
- **ARIA-H** (hemosiderin deposits): cerebral microhemorrhages and superficial siderosis on GRE/SWI MRI

**Clarity AD 18-month rates (lecanemab vs. placebo):**

| Safety event | Lecanemab | Placebo |
|---|---|---|
| ARIA-E | 12.6% | 1.7% |
| ARIA-H (total: microhemorrhage + superficial siderosis + macrohemorrhage) | 17.3% | 9.0% |
| Concurrent ARIA-E + ARIA-H | 8.2% | 1.0% |
| Infusion-related reactions | 26.4% | 7.4% |
| Falls | 10.4% | 9.6% |

Most ARIA-E events were **asymptomatic or mild-to-moderate** (91% mild-to-moderate by central MRI reading; 78% asymptomatic) and occurred within the first 3 months (71%), resolving within 4 months after detection (81%). **Symptomatic ARIA-E: 2.8%** in lecanemab (25/898) vs 0% placebo; symptoms included headache, visual disturbance, and confusion. Symptomatic ARIA-H: 0.7% lecanemab vs 0.2% placebo [^vandyck2023].

**APOE4 genotype and ARIA risk:** APOE4 carriers have substantially higher ARIA risk than non-carriers. From Clarity AD Table 3 [^vandyck2023]:

| APOE4 genotype | ARIA-E (lecanemab) | ARIA-E (placebo) |
|---|---|---|
| ε4 noncarrier | 5.4% (15/278) | 0.3% (1/286) |
| ε4 heterozygote | 10.9% (52/479) | 1.9% (9/478) |
| ε4 homozygote | 32.6% (46/141) | 3.8% (5/133) |

Symptomatic ARIA-E was similarly stratified: 1.4% in ε4 noncarriers, 3.4% in ε4 carriers (1.7% heterozygote, 9.2% homozygote). The Phase 2 (BAN2401-G000-201) study additionally established a correlation with maximum lecanemab serum concentration [^aria_phase2].

**APOE4 eligibility and prescribing:** FDA approved lecanemab without APOE4 exclusion criteria, but prescribing information recommends APOE4 genotyping and MRI baseline screening. Homozygous APOE4 carriers are eligible but require enhanced monitoring due to elevated ARIA risk. A 2026 Clarity AD sub-analysis (Perry et al. *J Prev Alzheimer's Dis* 2026) examined benefit specifically in APOE4 non-carriers and heterozygotes [^perry2026].

**Brain volume:** The van Dyck 2023 primary paper explicitly states "Tau PET and volumetric magnetic resonance imaging (MRI) results have not been fully analyzed" — brain volume data are not reported in the primary Clarity AD publication [^vandyck2023]. The "brain volume paradox" (greater MRI-measured volume reduction in lecanemab arm vs. placebo) is reported in subsequent analyses and conference presentations (not yet attributed to a verified publication in this wiki). #gap/unsourced (brain volume finding needs a specific source citation beyond the primary paper) #gap/contradictory-evidence

**Fatal ARIA cases:** Three deaths with suspected lecanemab involvement (including one stroke on concomitant anticoagulation, one intracranial hemorrhage, one ICH in an APOE4 homozygote on concomitant tPA) were reported from trial and early commercial use — the causal attribution debate is active. Lecanemab's label includes a black-box warning about ARIA, and anticoagulant co-administration requires individualized risk-benefit assessment.

## Dosing and administration

- **Dose:** 10 mg/kg IV every 2 weeks (q2w)
- **Route:** Intravenous infusion
- **Monitoring:** MRI at baseline, after doses 5 and 7, and annually thereafter; more frequent if ARIA detected
- **Genetic testing:** APOE genotyping recommended before treatment initiation (informs ARIA counseling, not used as exclusion criterion in current label)
- **Drug interactions:** Use caution with anticoagulants (elevated intracranial hemorrhage risk in the context of ARIA-H)
- **Setting:** Infusion center; no home-infusion approval

#gap/dose-response-unclear — Whether lower doses (e.g., 5 mg/kg) or alternative dosing schedules could maintain cognitive benefit with reduced ARIA risk has not been systematically evaluated in Phase 3.

## Aging context — AmyloSENS

Lecanemab is the field's strongest current evidence that the **AmyloSENS damage-repair strategy** (de Grey 2002) is clinically viable: removing an extracellular protein aggregate produces a measurable downstream cognitive benefit in humans at a disease-relevant endpoint. See [[frameworks/sens-damage-categories]] § AmyloSENS for the broader category context.

The modest effect size (-27% slowing of CDR-SB at 18 months) raises two interpretations:

1. **Amyloid is necessary but not sufficient.** Tau tangles, neuroinflammation, synaptic loss, and TDP-43 pathology co-exist in AD brains and may be the proximate drivers of neurodegeneration after amyloid initiates the cascade. Anti-amyloid clearance removes the "trigger" but leaves the "fire" burning. This interpretation predicts combination therapy (amyloid + tau clearance, e.g., lecanemab + E2814/etalanetug) will outperform monotherapy.

2. **Disease stage too late.** The intervention was applied after years of amyloid accumulation; earlier intervention (prodromal or even preclinical) might show larger benefit. The AHEAD 3-45 trial (NCT04468659; active, not recruiting) is testing this in amyloid-positive cognitively unimpaired participants.

## Related interventions and pipeline

- **[[donanemab]]** (Kisunla; Lilly) — FDA-approved July 2024. Targets pyroglutamate-modified Aβ N3pE in mature plaques. TRAILBLAZER-ALZ-2 Phase 3 data (n=1,736): 35% slowing CDR-SB (integrated Alzheimer's disease rating scale variant) at 18 months; dose-discontinuation protocol (stop after amyloid clearance) demonstrated in the trial. Comparable ARIA profile to lecanemab. Currently the comparator in head-to-head clinical use discussions.
- **Aducanumab (Aduhelm; Biogen)** — traditional FDA approval withdrawn January 2024; fully discontinued November 2024. High ARIA rates, contested efficacy in EMERGE/ENGAGE trials; historically important as the controversy that preceded the Clarity AD design.
- **Etalanetug (E2814; Eisai)** — Phase 2 anti-MTBR-tau antibody. Study 202 (initiated September 2024) uses lecanemab as the backbone for a combination anti-amyloid + anti-tau arm. This is the field's primary test of whether combination clearance improves on monotherapy.
- **BIIB080 (Biogen)** — anti-sense oligonucleotide targeting tau mRNA; Phase 2 CELIA trial ongoing.

## Supersession candidates — evidence discordance

**Cochrane systematic review (Nonino 2026)** [^cochrane2026] — PMID 41985900; doi:10.1002/14651858.CD016297 — *Cochrane Database of Systematic Reviews*, April 2026. Meta-analysis of 17 RCTs, n=20,342, covering nine anti-amyloid antibodies (lecanemab, donanemab, gantenerumab, aducanumab, crenezumab, bapineuzumab, solanezumab, and others).

**Key conclusions:** At 18 months, anti-amyloid antibodies produced "trivial" effects on cognitive function (ADAS-Cog scale) and effects on functional ability described as "small at best." The authors conclude: "Successful removal of amyloid from the brain does not seem to be associated with clinically meaningful effects in people with mild cognitive impairment or mild dementia due to Alzheimer's disease." ARIA risk was increased; serious adverse event rates and mortality did not differ from placebo.

**Discordance with FDA-approval narrative:** This Cochrane review reaches a substantially different characterization than the FDA's traditional approval (based on the same Clarity AD data) and the authors' framing in van Dyck 2023. The statistical significance of CDR-SB difference (p<0.001) is not in dispute; the discordance is about clinical meaningfulness thresholds — whether a 0.45-point CDR-SB difference on an 18-point scale constitutes a meaningful patient benefit. The Cochrane GRADE framework apparently rated the evidence as showing effects too small to be clinically meaningful.

**Flag for main agent:** This discordance should be integrated into the wiki's AmyloSENS framing (see [[frameworks/sens-damage-categories]] § AmyloSENS) and any synthesis discussion of anti-amyloid immunotherapy. The page's current framing ("clearest clinical proof-of-concept to date for the AmyloSENS damage-repair strategy") is accurate regarding mechanism-to-endpoint causal chain, but should be qualified with the Cochrane clinical-meaningfulness finding. Editorial decision on synthesis revision belongs to the main agent, not the verifier.

## Limitations and gaps

1. **Modest absolute effect size.** CDR-SB difference of 0.45 points at 18 months is statistically unambiguous but clinically small on an 18-point scale. Long-term extension data (OLE, 36 months) suggests benefit accrues but OLE lacks a contemporaneous placebo control.
2. **ARIA-E/ARIA-H burden.** ~12–13% ARIA rates (predominantly asymptomatic) require MRI surveillance infrastructure, raise safety concerns for patients on anticoagulants, and introduce practical barriers in under-resourced health systems.
3. **APOE4 homozygotes have elevated ARIA risk** — a population segment with highest AD genetic risk is also at highest treatment risk, creating a difficult clinical tradeoff. #gap/needs-replication (APOE4-stratified benefit/risk ratio requires primary PDF verification)
4. **Amyloid-only mechanism.** Whether Aβ clearance is sufficient (or merely necessary) for cognitive benefit remains unresolved. The anti-tau combination (E2814 + lecanemab) is designed to test this.
5. **Brain volume paradox unresolved.** Greater MRI-measured brain volume loss in treated patients has been reported in post-hoc analyses and conference presentations; not reported in the primary van Dyck 2023 paper (MRI results were explicitly not analyzed). The mechanism (ARIA-related artifact vs. true clearance-related volume change) remains contested. #gap/unsourced (needs verified publication) #gap/contradictory-evidence
6. **No non-AD aging indication.** Lecanemab's FDA approval is strictly for early AD; its utility as a prophylactic in cognitively normal individuals is the subject of AHEAD 3-45 but will not be established for years.
7. **Infrastructure and cost barriers.** IV q2w infusion, APOE genotyping, serial MRI, and specialist oversight create a high-cost access infrastructure that limits real-world deployment, particularly in lower-income settings. CMS coverage conditions add complexity. #gap/long-term-unknown (real-world effectiveness at scale not yet established)

## Footnotes

[^vandyck2023]: doi:10.1056/NEJMoa2212948 · van Dyck CH, Swanson CJ, Aisen P, et al. · *New England Journal of Medicine* 2023 · rct · n=1,795 (898 lecanemab / 897 placebo) · p<0.001 (CDR-SB primary) · model: human, early AD amyloid-confirmed, 50–90 yr · **locally available PDF** (DOI lookup:  (local PDF)) · cited_by_count: 4,536 (FWCI 804.7; citation_percentile 100.0) — Clarity AD 18-month primary endpoint report

[^ole2025]: doi:10.1002/alz.70905 · van Dyck CH, Sperling R, Johnson K, et al. · *Alzheimer's & Dementia* 2025 · open-label extension (no contemporaneous placebo control from 18 mo onward) · n=898 entered OLE from lecanemab arm · model: human, early AD · **PDF: pending download** (OA status: hybrid; oa_url available) · Clarity AD OLE — 36-month sustained benefit report; abstract-only verification 2026-05-09

[^aria_phase2]: doi:10.1002/trc2.12377 · *Alzheimer's & Dementia: Translational Research & Clinical Interventions* 2023 · n=phase 2 lecanemab cohort · rct (phase 2) · model: human, early AD · ARIA incidence in BAN2401-G000-201 Phase 2; establishes APOE4 homozygous higher ARIA-E risk and serum-concentration correlation — abstract-only verification 2026-05-09

[^perry2026]: doi:10.1016/j.tjpad.2026.100507 · Perry R, Kipps C, Soto Martín ME, et al. · *J Prev Alzheimer's Dis* 2026 · rct (post-hoc sub-analysis of Clarity AD) · n=APOE4 non-carrier + heterozygote subset · model: human, early AD · Clarity AD benefit in APOE4 non-carriers and heterozygotes — confirms cognitive benefit in lower-ARIA-risk genotype groups · DOI not yet in archive (archive lookup exit 1)

[^vandyck2023_asian]: doi:10.1016/j.tjpad.2025.100160 · *J Prev Alzheimer's Dis* 2025 · rct (regional sub-analysis of Clarity AD) · model: human, Asian cohort (early AD) · consistent efficacy and safety profile in Asian patients relative to global Clarity AD results

[^metaanalysis2025]: doi:10.1016/j.arr.2024.102620 · Arroyo-Pacheco N, Sarmiento-Blanco S, Vergara-Cadavid G, Castro-Leones M, Contreras-Puentes N · *Ageing Research Reviews* 2025 · meta-analysis · systematic-review · model: human (AD RCTs, lecanemab) · cited_by_count: 23 (FWCI 17.4; citation_percentile 100.0) — confirms pooled efficacy and safety signals consistent with Clarity AD primary; abstract-only verification 2026-05-09

[^safety_meta2026]: doi:10.1016/j.tjpad.2025.100473 · Qi L, Zheng F, Tu M, et al. · *J Prev Alzheimer's Dis* 2026 · meta-analysis · model: human (RCTs + real-world evidence, lecanemab) · safety profile meta-analysis including real-world ARIA and infusion reaction rates — abstract-only verification 2026-05-09

[^cochrane2026]: doi:10.1002/14651858.CD016297 · Nonino F, Minozzi S, Sambati L, Del Giovane C, Baldin E, et al. · *Cochrane Database of Systematic Reviews* 2026 Apr 16 · PMID 41985900 · meta-analysis · n=20,342 (17 RCTs; 9 anti-amyloid antibodies) · model: human (MCI + mild dementia due to AD) · **supersession candidate** — concludes anti-amyloid antibodies produce "trivial" effects on cognition and "small at best" effects on function at 18 months; discordant with FDA-approval framing; clinical-meaningfulness debate flagged for AmyloSENS synthesis
