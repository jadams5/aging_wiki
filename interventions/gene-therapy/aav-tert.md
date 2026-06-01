---
type: intervention
aliases: [AAV-TERT, telomerase gene therapy, AAV9-mTert, AAV-hTERT, AAV9-modhTERT, JV001, JV101]
mode: gene-therapy
mechanisms: [telomere-extension, telomerase-reactivation, telomere-recapping]
target-hallmarks: ["[[telomere-attrition]]", "[[stem-cell-exhaustion]]"]
target-pathways: ["[[telomerase-pathway]]"]
targets: ["[[tert]]", "[[terc]]"]
human-evidence-level: limited
clinical-stage: phase-1
safety-profile: investigational
translation-gap: phase-1-rct-needed
next-experiment: "Phase 2 of catalytically-inactive AAV9-modhTERT (Juvensis JV001) in DCM heart failure — extending the early-Phase-1 MERCURY-DCM (NCT05837143) safety readout into an efficacy-powered cohort; primary endpoint LVEF at 52 wk + cardiac MRI fibrosis. Catalytic-dead modTERT bypasses the canonical telomere-elongation cancer-permissivity tradeoff."
clinical-trials-active: 1
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for the 3 originally cited DOIs (Bernardes 2012 emmm.201200245, Lu 2020 s41586-020-2975-4, Larrick 2015 rej.2015.1695); Parrish 2019 book chapter DOI not verified via archive (book content). 2026-05-08 R34 recency refresh: NCT05837143 (MERCURY-DCM, AAV9-modTERT JV001 in DCM) confirmed via ClinicalTrials.gov v2 API; Zhao 2026 EBioMedicine and Zhao 2026 Cardiovasc Res abstracts cross-checked via PubMed efetch (PMIDs 41806656, 41942104); Xie 2026 Kidney Int abstract cross-checked (PMID 41720267). Quantitative lifespan extension percentages (+24% / +13%) and AAV9 seroprevalence figures still NOT cross-checked against primary PDFs — synthesis-style content lint only for original Bernardes claims."
---

# AAV-TERT gene therapy

Single-administration, adeno-associated virus (AAV)-mediated delivery of the TERT coding sequence (or a modified, catalytically-inactive TERT) to restore telomerase activity — or telomere-end protection — in aging somatic tissues. In the foundational mouse study, intravenous AAV9-mTert extended median lifespan +24% (1-year-old treatment start) or +13% (2-year-old treatment start) without increasing cancer incidence [^bernardes2012]. **All anti-aging lifespan evidence remains preclinical (C57BL/6 mouse).** As of 2026-05-08, the first regulated human trial of a TERT-encoding AAV9 gene therapy is **MERCURY-DCM** (NCT05837143; Juvensis Therapeutics JV001 / AAV9-modhTERT) in dilated cardiomyopathy — n=12, ACTIVE_NOT_RECRUITING in China [^mercury-dcm-nct]. Critically, JV001 uses a **catalytically-inactive, nuclear-retained modhTERT (Y707F + D868A)** that re-protects telomeric ends without elongation [^zhao2026ebiomedicine][^zhao2026cvr] — a design that decouples the cancer-permissivity of canonical telomere extension from the DNA-damage-response shutoff. This shifts the translational landscape: AAV-TERT is no longer purely preclinical, and the catalytic-dead variant is now the lead clinical molecule. The 2015 Bioviva self-experiment remains uninterpretable. The central translational barrier for catalytically-active AAV-TERT remains cancer risk: TERT reactivation is permissive for ~85% of human cancers, and humans accumulate pre-malignant clones over decades in ways that mice in a 2-year lifespan study do not — a barrier the modTERT design attempts to engineer around.

---

## Vector context

### AAV biology

Adeno-associated viruses (AAVs) are small (~25 nm), non-enveloped, single-stranded DNA parvoviruses. As gene-therapy vectors:

- **Non-integrating** (predominantly episomal): AAV genomes persist largely as circular episomes in post-mitotic cells, reducing insertional mutagenesis risk relative to retroviral vectors
- **Long-lived expression**: episomal genomes are diluted by cell division but are stable in post-mitotic tissues (liver, muscle, neurons) for years
- **Serotype tropism**: AAV9 has broad tissue tropism with efficient CNS and cardiac penetrance after systemic IV delivery; the Bernardes 2012 study used AAV9
- **Immunogenicity**: pre-existing neutralizing antibodies against common serotypes (particularly AAV2) are prevalent in human populations (~40–70%); this limits re-dosing and affects efficacy

### Why AAV for TERT

TERT's coding sequence (~3.4 kb for mTert) fits within the AAV packaging limit (~4.7 kb). Non-integrating episomal persistence is a partial safety feature: TERT expression should wane as highly mitotic cells turn over, limiting the duration of telomerase reactivation in self-renewing tissue. In the Bernardes 2012 protocol, this is by design — short-lived TERT reactivation in proliferating cells was the intended mechanism. However, in post-mitotic tissues (neurons, cardiomyocytes), episomal persistence means sustained TERT expression, raising the question of whether long-lived TERT activity in these cells is beneficial or risky.

---

## Foundational preclinical evidence — Bernardes 2012

Bernardes de Jesus et al. delivered AAV9-mTert (or eGFP control) by single IV injection to C57BL/6 mice at either **1 year** or **2 years** of age — equivalent to treatment beginning in middle-aged or elderly mice. The delivery achieved persistent mTert expression across multiple tissues. Key results [^bernardes2012]:

| Cohort | n (mTERT / control) | Median lifespan extension | p-value |
|---|---|---|---|
| 1-year-old start | 21 / 43 (pooled control) | **+24%** | p<0.05 Log Rank |
| 2-year-old start | 23 / 29 (pooled control) | **+13%** | p<0.05 Log Rank |

Additional phenotypic improvements in treated mice:
- Reduced fasting insulin (improved insulin sensitivity)
- Increased femur bone mineral density
- Improved neuromuscular coordination (Rota-Rod and Tightrope tests)
- Improved mitochondrial function (referenced indirectly via metabolic phenotype)

**Cancer incidence was not increased** relative to controls (p=0.87) — a critical safety finding.

### Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | AAV delivery and TERT catalytic mechanism are conserved; TERT sequence is ~70% identical between mouse and human |
| Phenotype conserved in humans? | unknown | C57BL/6 telomeres are ~40 kb at baseline vs ~10 kb human; the telomere-shortening dynamics and tissue reserve differ substantially |
| Replicated in humans? | no | No controlled trial; Bioviva self-experiment (n=1, no controls) not interpretable |

**Key caveats on the Bernardes 2012 result:**
- Single lab (Blasco group, CNIO, Madrid); no multi-site ITP-style replication
- n per group is modest (21–23 treated mice per cohort); long-term cancer risk at very old ages is not fully characterized — the eGFP control mice died before reaching ages where age-related cancers peak
- C57BL/6 mice develop spontaneous cancers (primarily lymphoma) at 2–3 years; the study observation period may be insufficient to detect a late-emerging cancer-risk signal from TERT reactivation
- The +24% / +13% magnitude is striking but not replicated; the one subsequent mouse study using a different viral vector (CMV-TERT; Jaijyan et al. PNAS 2022) was retracted in August 2025 due to data integrity concerns and must not be cited

#gap/needs-replication #gap/needs-human-replication

---

## Bioviva self-experiment (2015) — unauthorized; not peer-reviewed

In September 2015, Elizabeth (Liz) Parrish, CEO of Bioviva Sciences, self-administered two gene therapy vectors: one expressing hTERT and one expressing a myostatin antagonist (to counter muscle wasting), manufactured by Bioviva under the trade name BPS-001. The procedure was performed outside the US (reportedly in Colombia) to avoid FDA pre-IND oversight.

**Reported outcome:** Bioviva claimed in a 2016 press release that telomere length in Parrish's white blood cells had increased from a measured baseline. No independent laboratory verification protocol, blinding, or pre-specified statistical analysis was applied.

**Why this is not evidence:**
- n=1 with no concurrent control; telomere length varies substantially between measurements due to technical noise (±0.5–1 kb by qPCR-based FISH; even more by standard qPCR)
- No peer-reviewed publication of the design, methods, or results
- No dose characterization of what was actually administered or achieved transduction
- FDA subsequently sent a warning communication to Bioviva regarding unauthorized product development (documented in public FDA records) #gap/unsourced — specific FDA communication citation not confirmed; retain as contextual note

Parrish has since published a book chapter describing the rationale [^parrish2019book], but this does not constitute clinical evidence. The self-experiment is catalogued here as historical context — the first human to self-administer an aging-targeted gene therapy — but carries **no evidential weight** for safety or efficacy. It is explicitly outside the regulated trial system.

---

## Cancer trade-off: the central safety barrier

Telomerase is reactivated in approximately **85% of human cancers** — it is one of the most pan-cancer hallmarks of malignancy. The mechanism is primarily transcriptional: TERT promoter hotspot mutations (C228T, C250T) create de novo ETS-factor binding sites, dramatically upregulating TERT expression in established cancer cells (see [[tert]] § Cancer: TERT promoter hotspot mutations).

The concern for TERT gene therapy is different but related: introducing exogenous TERT into aging tissues means delivering a survival advantage to **any pre-malignant clone** already present. In a 70-year-old human, the mutational burden across stem cell compartments is orders of magnitude higher than in a 1–2-year-old mouse, and clonal hematopoiesis of indeterminate potential (CHIP) clones with driver mutations are present in ~10–20% of individuals over 70.

### Why Bernardes 2012 may underestimate cancer risk in humans

1. **Mouse telomeres are very long.** Wild-type C57BL/6 mice have ~40 kb telomeres — far above the critical length at which telomere-driven genomic instability begins. The oncogenic potential of TERT reactivation in a cell with critically short telomeres (more common in aging humans) is higher than in a cell with normal-length telomeres.
2. **Observation time is limited.** Mice live 2–3 years. Cancer latency in humans is decades. A 24-month follow-up in mice may not capture late-emerging oncogenic events.
3. **Pre-malignant clone burden.** As noted, aging humans carry pre-malignant clones at frequencies not present in specific-pathogen-free young mice. TERT expression in these clones is the worst-case scenario.

### Mitigation strategies under discussion

- **Transient mRNA delivery** (Larrick & Mendelsohn 2015 [^larrick2015] — low-quality review; use with caution): using TERT mRNA rather than AAV to limit expression duration. This addresses the episomal persistence problem but raises efficacy questions — is a single short burst of TERT activity sufficient to meaningfully extend telomeres across target tissues?
- **Tissue targeting**: limiting TERT delivery to specific compartments (e.g., HSCs ex vivo in the HSCT setting) where cancer surveillance can be applied and the telomere-deficiency phenotype is the primary pathology
- **Concurrent tumor-suppressor codelivery**: the Tomás-Loba 2008 approach (p53/p16/p19-overexpressing genetic background + TERT) has no practical human equivalent via gene therapy #gap/unsourced

---

## Related aging gene therapy approaches

AAV-TERT is one of several AAV-based aging interventions in preclinical development. For context:

| Approach | Vector | Target | Best evidence | Status |
|---|---|---|---|---|
| **AAV-TERT** | AAV9 IV | TERT (telomere extension) | Bernardes 2012 [^bernardes2012] | Preclinical |
| **AAV-OSK (partial reprogramming)** | AAV2 intravitreal | OCT4, SOX2, KLF4 (epigenetic rejuvenation) | Lu 2020 *Nature* [^lu2020] | Preclinical; Sinclair group |
| **AAV-TBX18 (cardiac pacemaker)** | AAV (IV or intracardiac) | TBX18 (sinoatrial node gene) | Kapoor 2013 *Sci Transl Med* | Preclinical; regulatory pathway separate |
| **AAV-FOXO3 (longevity TF)** | AAV | FOXO3 | Hypothesis-level; Davinelli 2017 GWAS context | Not yet tested in vivo as gene therapy #gap/unsourced |

The OSK partial reprogramming approach is the strongest emerging competitor in terms of scientific validation — Lu 2020 demonstrated epigenetic age reversal and functional restoration (vision) in aging mice using AAV-delivered OSK [^lu2020]. See [[partial-reprogramming]] for full analysis.

---

## Catalytically-inactive modTERT — the "telomere recapping" strategy (R34 2026-05-08 update)

A second-generation strategy emerged in 2026 from the Chang group (Shanghai Jiao Tong) and Juvensis Therapeutics: **AAV9-modhTERT (JV001/JV101)**, encoding a TERT engineered with two point mutations (Y707F and D868A) that abolish reverse-transcriptase catalytic activity while preserving nuclear localization and telomere-end binding via TPP1 / [[shelterin]] [^zhao2026cvr][^zhao2026ebiomedicine]. The therapeutic concept is **telomere recapping**: re-protecting deprotected telomeric ends to silence telomeric DNA-damage response signaling (p53 ser15 phosphorylation), without elongating the telomere. This decouples the protective function from the canonical cancer-permissive function.

**Preclinical evidence (Zhao 2026, EBioMedicine + Cardiovasc Res):** AAV9-modhTERT under cardiac troponin-T promoter regulation reversed cardiac function decline in transverse-aortic-constriction (TAC) and ischemia-reperfusion mouse heart-failure models [^zhao2026ebiomedicine][^zhao2026cvr]. Mechanism: blocked telomeric DDR → silenced p53 → restored mitochondrial biogenesis (PGC-1α, TFAM), reduced fibrosis, prevented mitochondrial DNA m6A methylation, alleviated chronic myocardial inflammation. Efficacy is independent of telomerase catalytic activity, validating the "recapping without elongation" framework.

**Cardio-renal extension (Xie 2026, Kidney International):** Telomere-recapping gene therapy was also beneficial in cardio-renal syndrome type 4 (CRS4) — heart failure driven by chronic kidney disease, where short leukocyte telomere length predicts cardiovascular mortality [^xie2026]. Same Chang group; modTERT delivered into the cardio-renal axis.

**Cardiomyocyte telomere shortening is well-established** in human heart failure (Chang 2018 PNAS) and in cynomolgus monkey HF cardiomyocytes by Q-FISH [^zhao2026ebiomedicine] — providing the biological rationale for cardiac-targeted telomere protection.

The catalytic-dead modTERT class is mechanistically distinct from Bernardes 2012 AAV9-mTert and represents a separate translational pathway. It does not address the original "telomere extension as anti-aging" hypothesis directly — but it does provide a near-term clinical proof of concept that AAV9-encoded modified TERT can be delivered safely to humans. #gap/needs-replication — independent labs have not yet replicated the Chang group's modTERT findings.

---

## Translation gap and regulatory landscape

### Current status

As of 2026-05-08, the only regulated clinical-stage AAV-TERT gene therapy is **MERCURY-DCM (NCT05837143)** — Juvensis Therapeutics' AAV9-modhTERT (JV001) in dilated cardiomyopathy, an early-Phase-1 dose-escalation (2×10^11 vg/kg, 6×10^11 vg/kg) intracoronary delivery in n=12 patients with HFrEF (LVEF ≤35%, NYHA II-IV); status ACTIVE_NOT_RECRUITING with primary completion July 2025 [^mercury-dcm-nct]. The trial is conducted at Shanghai East Hospital, sponsored by Shanghai Jiao Tong University collaborators with Juvensis. **It is not an aging-indication trial** — DCM heart failure is the indication — but it constitutes the first regulated human exposure to an AAV9-encoded TERT variant. Catalytic-dead modTERT design specifically engineers around the cancer-permissivity barrier; cancer surveillance is built into the protocol.

No FDA-approved or EMA-authorized AAV-TERT trials for aging-related indications exist. The remaining TERT-related clinical-stage gene therapy products target cancer via TERT-directed immunotherapy (e.g., TERT peptide vaccines, DNA plasmid cancer vaccines — categorically different from TERT-expression gene therapy).

The nearest regulated clinical context for telomere-biology gene therapy is **imetelstat** (a TERC-targeting oligonucleotide that inhibits telomerase), FDA-approved in 2024 for MDS anemia — the opposite direction (inhibition, not activation). See [[tert]] § Therapeutic landscape.

### Plausible path to clinical translation

The most defensible near-term path to human testing of telomerase gene therapy for aging-related indication is the **short-telomere syndrome** niche:

Conditions such as **dyskeratosis congenita**, **idiopathic pulmonary fibrosis with TERT/TERC mutations**, and **aplastic anemia from telomerase insufficiency** represent monogenic indications where:
1. The telomere-maintenance deficit is causal and established (not inferred from aging biology alone)
2. Patients are often younger and have fewer pre-malignant clones than elderly aging-intervention candidates
3. The clinical unmet need is severe enough to accept investigational risk
4. Cancer surveillance can be built into trial design

In the HSCT (hematopoietic stem cell transplantation) context specifically, ex vivo TERT delivery to HSCs before reinfusion could allow: (a) limiting transduction to the hematopoietic compartment, (b) monitoring for clonal outgrowth post-transplant, and (c) leveraging existing HSCT safety infrastructure.

This is the basis for the `next-experiment` field: "Phase 1/2 of transient AAV-TERT in HSCT context for short-telomere syndrome; n=20–50; primary endpoints: marrow reconstitution + 5-year cancer surveillance by WGS."

#gap/needs-human-replication — no human trial data; the HSCT-niche path is a proposed design, not a registered trial.

---

## Gaps and limitations

- **Cancer risk in humans is not resolved.** The single mouse lifespan study (Bernardes 2012) showed no increased cancer over a 2–3-year horizon; this does not rule out a cancer-risk signal over a human 30–40-year post-treatment horizon, particularly in the presence of pre-existing clonal mutations. #gap/long-term-unknown

- **No multi-site replication.** Bernardes 2012 is a single-lab result. The one attempted replication (Jaijyan PNAS 2022) was retracted due to data integrity concerns. The preclinical evidence base rests on a single paper. #gap/needs-replication

- **Telomere length ≠ telomere function.** Measuring telomere length (qPCR or FISH) as a biomarker does not guarantee functional improvement; telomere-binding protein composition ([[shelterin]]) and t-loop stability matter as much as raw length. None of the preclinical studies have characterized functional telomere protection comprehensively. #gap/no-mechanism

- **Dose-response unknown.** The Bernardes 2012 study used a single dose. Whether lower doses provide proportional benefit with reduced risk, or whether a dose-response relationship exists for cancer risk, is entirely unknown. #gap/dose-response-unclear

- **Mouse-to-human telomere biology divergence.** C57BL/6 mice have ~40 kb telomeres (4x longer than human ~10 kb) and somatic telomerase activity is much less strictly repressed. The extrapolation of "+13–24% lifespan" to any human endpoint is highly uncertain. #gap/needs-human-replication

- **AAV immunogenicity.** A significant fraction of humans have pre-existing neutralizing antibodies against common AAV serotypes. AAV9 seroprevalence in humans is lower than AAV2 (~20–40%), but this still affects efficacy distribution in clinical studies and would likely require pre-screening. #gap/unsourced — specific AAV9 seroprevalence figure not cited here; needs primary source.

- **Stub pages.** [[telomerase-pathway]] is referenced here and on [[tert]] but not yet seeded. [[shelterin]] is implicitly referenced. Both are high-priority stubs.

---

## Cross-references

- [[tert]] (verified R18) — protein-level detail; Bernardes 2012 and Tomás-Loba 2008 verified against PDFs; see especially §AAV-TERT gene therapy and §Disease associations
- [[terc]] (verified-partial R18) — obligate RNA template subunit; mutations implicated in DKC and IPF
- [[shelterin]] (implicit stub) — telomere-capping complex; TPP1 recruits telomerase to telomere
- [[telomere-attrition]] (verified hallmark) — parent hallmark page; Bernardes 2012 numbers independently verified there
- [[cellular-senescence]] — downstream of telomere-driven DNA damage signaling
- [[stem-cell-exhaustion]] — HSC compartment is primary target for telomere-attrition biology in aging
- [[partial-reprogramming]] (verified-partial) — competing/complementary aging gene therapy strategy; Lu 2020 OSK approach
- [[dyskeratosis-congenita]] (implicit stub) — monogenic telomere-maintenance disease; most defensible near-term clinical target
- [[idiopathic-pulmonary-fibrosis]] (implicit stub) — TERT/TERC mutation carriers; short-telomere syndrome niche
- [[sens-damage-categories]] — OncoSENS maps obliquely (TERT reactivation is a cancer-permissive mechanism)
- [[hallmarks-of-aging]] — telomere-attrition hallmark is the target

---

## Footnotes

[^bernardes2012]: doi:10.1002/emmm.201200245 · Bernardes de Jesus B, Vera E, Schneeberger K, Tejera AM, Ayuso E, Bosch F, Blasco MA · in-vivo · EMBO Mol Med 2012 · 4:691–704 · model: C57BL/6 mice; single IV injection of AAV9-mTert at 1 yr (mTERT n=21, pooled control n=43) or 2 yr (mTERT n=23, pooled control n=29) · +24% median lifespan (1-yr cohort, p<0.05 Log Rank); +13% median lifespan (2-yr cohort, p<0.05 Log Rank); improved insulin sensitivity, BMD, neuromuscular coordination; cancer incidence not increased (p=0.87) · archive: local PDF available (gold OA)

[^lu2020]: doi:10.1038/s41586-020-2975-4 · Lu Y, Brommer B, Tian X, Krishnan A, Meer M, Wang C, Vera DL, Zeng Q, Yu D, Bonkowski MS, Yang JH, Zhou S, Hoffmann EM, Karg MM, Bhanu BV, Garcia BA, Bhanu NV, Sinclair DA et al. · in-vivo · Nature 2020 · 588:124–129 · model: Mus musculus (C57BL/6J); AAV2-OSK intravitreal injection in aged mice and in a glaucoma model · restored youthful DNA methylation patterns, axon regeneration after crush injury, and visual acuity in aged mice; epigenetic reprogramming without full dedifferentiation; DNA damage required as an initiating signal for epigenetic loss · archive: local PDF available (green OA via PMC)

[^larrick2015]: doi:10.1089/rej.2015.1695 · Larrick JW, Mendelsohn AR · review · Rejuvenation Res 2015 · 18(2):185–187 · model: commentary; reviews Bernardes 2012 and suggests transient mRNA TERT delivery as safer alternative · archive: not_oa (no local PDF); low citation count (n=3); use as contextual note only

[^parrish2019book]: doi:10.1007/978-3-030-16920-6_24 · Parrish E · book chapter · "Extending Healthy Human Lifespan Using Gene Therapy" in: *Biomarkers of Human Aging* (Springer) 2019 · narrative description of Bioviva rationale; not peer-reviewed original research · archive: not_oa; no local PDF · do NOT cite for efficacy or safety claims; historical context only

[^zhao2026ebiomedicine]: doi:10.1016/j.ebiom.2026.106203 · Zhao Y, Bao X, Xiong W et al. (Chang ACY group, Shanghai Jiao Tong) · in-vivo + in-vitro · *EBioMedicine* 2026 · 126:106203 · model: TAC-induced WT and p53 cardiac-KO mouse HF; Ang II-stimulated hiPSC-CMs; cynomolgus monkey HF cardiomyocyte Q-FISH · AAV9-modhTERT^Y707F,D868A^ (catalytically inactive, nuclear-retained) under cTnT promoter reversed cardiac function decline, prevented fibrosis, blocked telomeric DDR + p53 ser15-P, restored PGC-1α/TFAM and mitochondrial biogenesis, reduced ROS and chronic inflammation; commercial form JV101 sponsored by Juvensis Therapeutics · PMID 41806656; PMC12993239 (OA); local PDF status not yet checked · disclosure: senior authors hold Juvensis equity

[^zhao2026cvr]: doi:10.1093/cvr/cvag077 · Zhao Y, Bao X, Xiong W et al. (Chang ACY group) · in-vivo + in-vitro · *Cardiovascular Research* 2026 · 122(6):cvag077 · model: TPP1-KO U2OS cells, hiPSC-CMs (CRISPR/Cas9), Ang II + I/R mouse HF models · catalytically-inactive AAV9-modhTERT (JV101) recruited to telomeric ends via TPP1 TEL-patch; restored cardiac function in HF models; mechanism: silenced p53 → rescued mitochondrial biogenesis + prevented mtDNA m6A methylation · PMID 41942104 · disclosure: Juvensis sponsorship

[^xie2026]: doi:10.1016/j.kint.2026.01.022 · Xie D, Wang C, Wan X et al. (Chang ACY + Ding W groups) · in-vivo + in-vitro · *Kidney International* 2026 · 109(5):923–938 · model: mouse + human cardiomyocyte models of cardio-renal syndrome type 4 (CKD-driven HF) · TERT overexpression (telomere recapping) provided cardiac protection in CRS4; correlates short leukocyte telomere length with CV mortality in advanced CKD patients · PMID 41720267 · disclosure: Juvensis collaborator

[^mercury-dcm-nct]: NCT05837143 · MERCURY-DCM · "An Exploratory Clinical Study of JV001 in the Treatment of Patients With Heart Failure Due to Dilated Cardiomyopathy (Telomere Recapping to Restore Mitochondrial Biogenesis Study for Dilated Cardiomyopathy)" · Sponsor: Shanghai East Hospital + Juvensis Therapeutics Biotechnology · Phase: EARLY_PHASE1 · n=12 (ACTUAL) · design: open-label, sequential 6+6 dose-escalation (2×10^11 vg/kg; 6×10^11 vg/kg intracoronary infusion) · status (as of 2026-05-08): ACTIVE_NOT_RECRUITING · started 2023-03-30; primary completion estimated 2025-07-30; full completion 2025-12-30 · primary endpoints: dose-limiting toxicity within 28 days; AE/SAE incidence within 1 year · secondary: LVEF, cardiac MRI remodeling, NT-proBNP, 6MWT, NYHA, AAV9-NAb formation, viral DNA shedding · location: Shanghai East Hospital, China · IDs verified via ClinicalTrials.gov v2 API on 2026-05-08
