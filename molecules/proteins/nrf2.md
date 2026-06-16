---
type: protein
aliases: [NFE2L2, nuclear factor erythroid 2-related factor 2, NF-E2-related factor 2]
uniprot: Q16236
ncbi-gene: 4780
hgnc: 7782
ensembl: ENSG00000116044
genage-id: 283
mouse-ortholog: Nfe2l2
is-noncoding-rna: false
key-domains: [Neh1-bZIP, Neh2-KEAP1-binding, Neh3-transactivation, Neh4-transactivation, Neh5-transactivation, Neh6-GSK3-degron, Neh7-RXRalpha-repression]
key-ptms: [Ser40-phosphorylation, Lys596-acetylation, Lys599-acetylation, Lys-ubiquitination-Neh2]
pathways: ["[[nrf2-pathway]]", "[[antioxidant-response]]", "[[keap1-nrf2-are-axis]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]", "[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[keap1]]", "[[small-maf-proteins]]", "[[cullin3]]", "[[gsk3-beta]]", "[[p21]]"]
druggability-tier: 1
gtex-aging-correlation: "#gap/not-populated — GTEx tissue-by-age NFE2L2 Spearman ρ not yet extracted; populate per sops/finding-tissue-expression.md"
mr-causal-evidence: partial
caused-by: []
causes: ["[[mitochondrial-dysfunction]]", "[[loss-of-proteostasis]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Primary-source claims verified via PubMed abstracts (Lynch 2021 PMID 33068037, Lynch 2019 PMID 30656180, Pergola 2011 PMID 21699484, de Zeeuw 2013 PMID 24206459) and PMC full texts (PMC7894504, PMC4496027, PMC9762786/Yamamoto 2018). UniProt Q16236 verified via REST API (length 605, DLG motif 29-31, ETGE motif 79-82, Lys596/Lys599 acetylation, Ser40 phosphorylation). GenAge ID 283 confirmed via HAGR web entry. Open Targets ENSG00000116044 confirmed tier-1 (Approved Drug SM tractability). KEAP1 27-Cys count verified from UniProt Q14145 sequence. ClinicalTrials.gov v2 6 omaveloxolone active trials confirmed. Itoh 1997 closed-access (not_oa); Shilovsky 2022 closed-access (not_oa) — claims from these unverified against full PDF. Narasimhan 2016 download pending; Kobayashi 2004 download pending."
---

# Nrf2 (NFE2L2)

**Disambiguation:** This page covers **Nrf2** (gene *NFE2L2*; nuclear factor erythroid 2-related factor 2), the master transcription factor of the cytoprotective antioxidant / phase II detoxification response. This is **distinct from NRF1** (gene *NRF1*; Nuclear Respiratory Factor 1), a mitochondrial biogenesis transcription factor with unrelated function — see `[[nrf1]]` (stub, to be seeded separately). The two names are frequently confused in the literature.

Nrf2 is the central coordinator of the cellular stress-response program that upregulates antioxidant enzymes, glutathione biosynthesis machinery, and phase II detoxifying enzymes. Its activity declines with age in multiple tissues; genetic or pharmacological reduction of Nrf2 activity accelerates hallmark aging phenotypes in model organisms, while activation of the pathway is a target of clinical-stage small molecules.

## Identity

- **UniProt:** Q16236 (NFE2L2_HUMAN) — Swiss-Prot (manually reviewed)
- **NCBI Gene ID:** 4780 (gene symbol: *NFE2L2*)
- **HGNC:** 7782
- **Ensembl:** ENSG00000116044
- **Mouse ortholog:** *Nfe2l2* (one-to-one; high functional conservation)
- **GenAge:** entry 283 (human aging database)
- **Length:** 605 amino acids (canonical isoform)
- **Chromosome:** 2q31.2

## Domain architecture (Neh domains)

| Domain | Residues (approx.) | Function |
|--------|-------------------|---------|
| Neh2 | ~17–86 | KEAP1 binding via ETGE (79-82) and DLG (29-31) motifs; substrate for ubiquitination |
| Neh1 | ~435–560 | CNC + bZIP DNA-binding domain; heterodimerizes with small Maf proteins (UniProt annotates bZIP core 497–560) |
| Neh3 | ~560–605 | C-terminal transactivation; CHD6 co-activator recruitment (UniProt: CHD6-interaction 591–596) |
| Neh4 | ~84–116 | Transactivation; CBP/p300 binding |
| Neh5 | ~116–183 | Transactivation; CBP/p300 binding (redundant with Neh4) |
| Neh6 | ~329–379 | DSGIS/DSAPGS β-TrCP degrons; KEAP1-independent degradation via GSK-3β |
| Neh7 | ~207–316 | RXRα-mediated repression (Wang et al. 2013; NOT described in Yamamoto 2018 — requires separate citation) |

Note: Yamamoto 2018 (Physiol Rev) describes six Neh domains (Neh1–Neh6). Neh7, which mediates RXRα interaction to repress Nrf2, was described by Wang et al. 2013 (PMID 23530057). The residue ranges for Neh1–Neh6 are from the literature; only the bZIP sub-domain of Neh1 (497–560), the DLG motif (29–31), and ETGE motif (79–82) are explicitly annotated in UniProt Q16236. #gap/needs-replication — Neh7 residue boundaries are approximate; Neh7 citation should be added from Wang 2013 when this page is next extended.

The ETGE motif (high affinity for KEAP1) and DLG motif (low affinity) in Neh2 operate as a "hinge-and-latch" mechanism: both must engage KEAP1 simultaneously to present Nrf2 Lys residues to the CUL3-RBX1 E3 ligase for ubiquitination [^yamamoto2018].

## Canonical regulation: KEAP1-CUL3 axis

Under basal, non-stressed conditions, Nrf2 has a very short half-life (~20 min). Cytoplasmic **KEAP1** (Kelch-like ECH-associated protein 1) forms a homodimer that simultaneously binds Nrf2-Neh2 and acts as a substrate adaptor for the **CUL3-RBX1** E3 ubiquitin ligase complex, driving constitutive Nrf2 polyubiquitination and proteasomal degradation [^kobayashi2004].

KEAP1 contains **27 reactive cysteine residues** (particularly Cys151, Cys273, Cys288) that function as electrophilic sensors. Modification of Cys151 by electrophiles or reactive oxygen species disrupts KEAP1-CUL3 coupling, preventing Nrf2 ubiquitination. Newly synthesized Nrf2 then escapes degradation, accumulates in the nucleus, heterodimerizes with small Maf proteins (MafG, MafF, MafK), and binds **Antioxidant Response Elements (ARE)** / Electrophile Response Elements (EpRE; consensus 5'-TGACNNNNGCN-3') in target gene promoters [^itoh1997].

A secondary, KEAP1-independent degradation route operates via the **Neh6 degrons** recognized by β-TrCP (SCF E3 ligase), providing a redox-independent brake on Nrf2 activity [^yamamoto2018].

## Key transcriptional targets

The ARE-regulated gene battery includes the principal cytoprotective programs:

| Category | Key targets |
|----------|------------|
| Glutathione synthesis | GCLC, GCLM (rate-limiting step), GSR, GSTM1, GSTP1 |
| Cystine import | [[slc7a11]] / xCT (system xc⁻ light chain; supplies cystine for GSH synthesis; directly ARE-regulated → ferroptosis resistance) |
| Thioredoxin system | TXN1, TXNRD1 |
| NADPH generation | G6PD, IDH1, ME1 |
| Oxidant removal | NQO1, HO-1 (HMOX1), PRDX1, SOD2 |
| Proteasome | PSMA3, PSMB5 (enhanced proteolytic capacity) |
| Ferritin | FTH1, FTL (iron sequestration) |
| Phase II enzymes | UGTs, SULTs, multiple GSTs |

HO-1 and NQO1 are the most widely used biomarkers of Nrf2 activity in experimental and clinical settings.

## Nrf2 and aging

### Expression decline with age

Nrf2 activity declines with age in multiple tissues and cellular contexts [^shilovsky2022][^narasimhan2016]. In human fibroblasts:

- NRF2 function (measured by ARE reporter and NQO1/GCLC target expression) declines during replicative senescence.
- NRF2 silencing triggers premature senescence phenotypes.
- Continuous NRF2 activation extends fibroblast replicative lifespan in culture [GenAge entry 283].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — identical KEAP1-Nrf2-ARE mechanism |
| Expression-with-age conserved in humans? | yes — fibroblast senescence data; GTEx correlation not yet extracted |
| Lifespan effect replicated in humans? | partial — genetic evidence limited; fibroblast lifespan extension in vitro |

#gap/needs-human-replication — Direct in-vivo evidence for Nrf2 activity decline driving human aging phenotypes is largely observational; prospective interventional data sparse.

### Nrf2-knockout and aging-accelerated models (mouse)

- **Nrf2-null mice** (*Nfe2l2*−/−) exhibit increased oxidative stress markers, higher susceptibility to carcinogen-induced tumors, and impaired cytoprotective responses compared to WT, consistent with accelerated redox-damage accumulation [GenAge 283].
- In a **progeria context**, progerin (the mutant lamin A accumulating in Hutchinson-Gilford Progeria Syndrome) sequesters Nrf2, impairing antioxidant transcription and likely contributing to the accelerated-aging phenotype [GenAge 283].
- Caloric restriction retains its lifespan-extending and insulin-sensitizing effects in Nrf2-null mice, indicating CR-mediated longevity does not require Nrf2 as the sole effector [GenAge 283]. #gap/needs-replication — this specific finding is limited to a single mouse study.

### Cross-hallmark connections

Nrf2's decline with aging connects to multiple hallmarks:

- **[[loss-of-proteostasis]]** — Nrf2 induces proteasome subunits (PSMA3, PSMB5) and autophagy-supportive genes (SQSTM1/p62); its decline reduces proteolytic capacity.
- **[[chronic-inflammation]]** — Nrf2 suppresses NF-κB pro-inflammatory signaling via competitive CBP/p300 sequestration and by reducing ROS-driven NLRP3 inflammasome activation; loss of Nrf2 allows chronic low-grade inflammation.
- **[[mitochondrial-dysfunction]]** — NQO1, SOD2, and HMOX1 are mitochondria-protective; Nrf2 decline leaves mitochondria more vulnerable to ROS-mediated damage. Additionally, Nrf2 influences mitochondrial biogenesis through crosstalk with PGC-1α.

## Cancer paradox

Nrf2 exhibits a well-documented **biphasic/contextual role in cancer**:

- In **normal/premalignant cells**: tumor-suppressive — prevents oxidative DNA damage and mutagenesis that initiates carcinogenesis.
- In **established tumors**: tumor-promoting — somatic loss-of-function mutations in *KEAP1* occur in ~17–20% of non-small cell lung cancers (NSCLC; ~17.8% in lung adenocarcinoma per TCGA Caucasian cohort; lower in East Asian populations) and other malignancies, causing constitutive Nrf2 hyperactivation that confers chemoresistance and metabolic advantages to cancer cells.

This duality complicates therapeutic Nrf2 activation: activators that are beneficial in the context of aging-related oxidative stress could theoretically support growth of existing occult tumors. This risk is considered manageable at low-dose/intermittent regimens but warrants long-term safety monitoring in clinical trials [^yamamoto2018].

## Druggability (aging-context tier: 1)

**Druggability tier: 1** — an FDA-approved drug exists that engages Nrf2 via the same KEAP1 cysteine-modification mechanism relevant to aging. Tier 1 is assigned on the aging-context convention: omaveloxolone's approved indication (Friedreich ataxia) is not aging per se, but the drug works by activating the same KEAP1-Nrf2-ARE pathway that declines with age, and bardoxolone methyl (CDDO-Me) advanced through Phase 3, with additional non-CKD indications under investigation.

| Drug | Mechanism | Status (2026) | Notes |
|------|-----------|--------------|-------|
| Omaveloxolone (Skyclarys; CDDO-EA) | Cys151 modification → KEAP1-CUL3 disruption | **FDA-approved Feb 2023** (Friedreich ataxia, age ≥16) | First FDA-approved Nrf2 activator; ~$370k/yr list price |
| Bardoxolone methyl (CDDO-Me) | Same class | Phase 2 positive (CKD); Phase 3 BEACON failed | BEACON terminated for cardiovascular events (hospitalizations for heart failure) [^dezeeuw2013]; additional indications in progress |
| Dimethyl fumarate (Tecfidera) | Alkylates KEAP1 Cys151 (and other cysteines) | FDA-approved (MS 2013) | Nrf2 activation is one of multiple mechanisms; primarily MS indication |
| Sulforaphane (SF) | KEAP1 Cys151 + Cys273 modification | Supplement / early clinical | Highly studied in preclinical aging models; multiple Phase 1–2 trials |

### MOXIe Part 1 — Phase 2 dose-ranging (Lynch 2019)

Randomized (3:1 omaveloxolone:placebo), double-blind Phase 2 dose-ranging study of omaveloxolone in 69 Friedreich ataxia patients across doses 2.5–300 mg/day for 12 weeks. The drug was well tolerated; optimal pharmacodynamic changes (ferritin, GGT) observed at 80–160 mg/day. The primary outcome (peak workload at maximal exercise) did not reach significance. At 160 mg/day, the secondary outcome (mFARS) improved 2.3 points vs placebo (p=0.06; 6.0 points in subgroup without pes cavus, p=0.01). This was NOT an open-label study — it used 3:1 randomization. Confirmed target engagement and informed dose selection of 150 mg/day for Part 2 [^lynch2019].

### MOXIe Part 2 — registrational Phase 2 (Lynch 2021)

International, double-blind, randomized, placebo-controlled, parallel-group **registrational Phase 2** trial (the paper itself uses this designation, not Phase 3). 103 patients aged 16–40 with genetically confirmed FA were randomized 1:1 to omaveloxolone 150 mg/day (n=51) or placebo (n=52). Primary endpoint: mFARS at 48 weeks. The full analysis set (FAS) included 40 omaveloxolone and 42 placebo patients. In the FAS, omaveloxolone showed −1.55 ± 0.69 points (vs +0.85 ± 0.64 placebo), a treatment difference of **−2.40 ± 0.96 points (p=0.014)** [^moxie2021]. This was the pivotal trial supporting FDA approval in February 2023 for FA in patients ≥16 years.

Note: "Phase 3" language is used colloquially in the press and FDA communications but the published paper designates this as "registrational Phase 2." The FDA approval age range (≥16) is broader than the trial enrollment range (16–40).

### Bardoxolone CKD story: Phase 2 promise, Phase 3 failure

Pergola et al. 2011 (NEJM; BEAM trial): 227 CKD patients with type 2 diabetes randomized 1:1:1:1 to bardoxolone methyl at target doses of 25, 75, or 150 mg/day vs. placebo. Primary outcome: eGFR change at **24 weeks**. All active dose groups showed significant eGFR improvement vs placebo at 24 weeks: +8.2 ± 1.5 mL/min/1.73 m² (25 mg), +11.4 ± 1.5 (75 mg), +10.4 ± 1.5 (150 mg); all p<0.001. At 52 weeks, improvements were maintained but somewhat attenuated: +5.8 ± 1.8 (25 mg), +10.5 ± 1.8 (75 mg), +9.3 ± 1.9 (150 mg) [^pergola2011]. This established proof-of-concept for bardoxolone-mediated renal protection.

De Zeeuw et al. 2013 (BEACON trial; NEJM): 2185 patients with type 2 diabetes and stage 4 CKD randomized to bardoxolone 20 mg/day vs. placebo. Primary composite: ESRD or cardiovascular death. Trial terminated early (median follow-up 9 months) on DSMB recommendation due to a higher rate of cardiovascular events in the bardoxolone arm. Specifically: 96 bardoxolone patients were hospitalized for heart failure or died from heart failure vs. 55 placebo patients (HR 1.83; 95% CI 1.32–2.55; p<0.001). No benefit on the renal composite endpoint (HR 0.98; 95% CI 0.70–1.37; p=0.92). The paper proposes fluid retention / volume expansion as the mechanism for the heart failure excess [^dezeeuw2013]. The BEACON failure significantly cooled enthusiasm for Nrf2 activators as aging interventions but did not disqualify the mechanism — the advanced CKD/heart failure population may have been particularly vulnerable, and lower doses or different populations may have different risk profiles.

### Active trials (as of 2026-05-07)

ClinicalTrials.gov v2 search for "omaveloxolone OR bardoxolone" (RECRUITING + ACTIVE_NOT_RECRUITING): 6 active trials for omaveloxolone (all Friedreich ataxia post-approval indications or pediatric extensions); 0 active bardoxolone aging trials confirmed. No pure aging-indication Nrf2 activator trials in RECRUITING status at this time.

#gap/long-term-unknown — Long-term safety of Nrf2 activators specifically for age-related indications (not Friedreich ataxia) is not established in humans.

## Population genetics / Mendelian randomization

`mr-causal-evidence: partial` — GWAS hits in *NFE2L2* and *KEAP1* loci have been reported for longevity-related phenotypes (oxidative stress biomarkers, CKD progression, lung function), providing instruments. A formal MR study testing Nrf2 signaling as causal for human aging outcomes has not been published as of 2026. #gap/needs-replication — MR instrument available but study pending.

## Key interactors

- **[[keap1]]** — primary cytoplasmic repressor; KEAP1 homodimer presents Nrf2 to CUL3-RBX1
- **[[cullin3]]** — catalytic subunit of the E3 ligase; CUL3-RBX1-KEAP1 complex
- **[[small-maf-proteins]]** — obligate nuclear heterodimerization partner for ARE binding
- **[[p62]] (SQSTM1)** — Nrf2 target gene and feedback activator; p62 competes with Nrf2 for KEAP1 binding (Ser351-phosphorylated p62 sequesters KEAP1, amplifying Nrf2 activation during autophagy stress)
- **[[gsk3-beta]]** — phosphorylates Neh6 degrons (DSGIS motif), licensing β-TrCP-dependent degradation — a KEAP1-independent off-switch
- **[[pgc-1alpha]]** — co-regulatory crosstalk: both are induced by AMPK; PGC-1α and Nrf2 co-regulate mitochondrial protective genes

## Pathway membership

- [[nrf2-pathway]] (stub) — the full KEAP1-Nrf2-ARE signaling network
- [[antioxidant-response]] (stub) — broader cytoprotective process
- See also: [[mtor]] (antagonistic: mTORC1 inhibits autophagy-mediated p62 induction of Nrf2); [[ampk]] (activating: AMPK → PGC-1α → Nrf2 target co-activation)

## Limitations and gaps

- #gap/not-populated (`gtex-aging-correlation`) — GTEx tissue-by-age Spearman ρ for NFE2L2 not extracted; populate per `sops/finding-tissue-expression.md`.
- #gap/needs-human-replication — In-vivo evidence that Nrf2 activity decline causally drives human aging phenotypes is observational; no RCT targets Nrf2 for a primary aging endpoint.
- #gap/long-term-unknown — Long-term safety of Nrf2 activators at doses used for aging applications is unknown; the BEACON cardiovascular signal has not been fully explained.
- #gap/contradictory-evidence — The cancer paradox (tumor-suppressive in normal cells, tumor-promoting in established cancer) creates genuine biological tension for long-term systemic Nrf2 activation strategies.
- #gap/dose-response-unclear — Optimal dose/duration of Nrf2 activation for aging-related endpoints in humans is completely undefined.
- `nrf2-pathway` (implicit stub) — a dedicated pathway page for the KEAP1-Nrf2-ARE network does not yet exist.
- `keap1`, `small-maf-proteins`, `cullin3` (implicit stubs) — interactor pages do not yet exist.
- `antioxidant-response` (implicit stub) — process page does not yet exist.

## Footnotes

[^itoh1997]: doi:10.1006/bbrc.1997.6943 · Itoh K et al. · *Biochem Biophys Res Commun* 1997 · n=N/A · in-vitro · founding paper demonstrating Nrf2/small-Maf heterodimer binds AREs and induces phase II detoxifying enzyme genes · closed OA (not_oa) — full text unverified #gap/no-fulltext-access

[^kobayashi2004]: doi:10.1128/MCB.24.16.7130-7139.2004 · Kobayashi A et al. (Yamamoto M lab) · *Mol Cell Biol* 2004 · n=N/A · in-vitro + cell-based · demonstrated KEAP1 acts as substrate adaptor for CUL3-RBX1 E3 ligase driving constitutive Nrf2 polyubiquitination and proteasomal degradation · green OA; download pending at time of verification — claims verified via Yamamoto 2018 review (PMC9762786)

[^yamamoto2018]: doi:10.1152/physrev.00023.2017 · Yamamoto M, Kensler TW, Motohashi H · *Physiol Rev* 2018 · review · comprehensive 30-year KEAP1-Nrf2 system review; Neh1–Neh6 domain architecture (Neh7 NOT described); hinge-and-latch model; Cys151/Cys273/Cys288 sensor residues; disease associations · PMID 29717933 · PMC9762786 (full text verified via PMC HTML)

[^shilovsky2022]: doi:10.1134/S0006297922010060 · Shilovsky GA · *Biochemistry (Moscow)* 2022 · review · Nrf2/KEAP/ARE lability across cell aging models; "capacity for Nrf2 activation steadily declines with age" conclusion · closed OA (not_oa) — full text unverified #gap/no-fulltext-access

[^narasimhan2016]: doi:10.3389/fphys.2016.00241 · Narasimhan M, Rajasekaran NS · *Front Physiol* 2016 · review · Nrf2 antioxidant signaling in cardiac aging; exercise as Nrf2 activator in aged myocardium · gold OA; download pending at time of verification

[^lynch2019]: doi:10.1002/acn3.660 · Lynch DR et al. · *Ann Clin Transl Neurol* 2019 (online 2018) · n=69 · Phase 2 randomized (3:1 drug:placebo) dose-ranging · omaveloxolone 2.5–300 mg/day × 12 wk in Friedreich ataxia; primary endpoint (peak workload) non-significant; mFARS improved 2.3 pts vs placebo at 160 mg (p=0.06); 4.4 pts vs placebo in subgroup without pes cavus (p=0.01) · PMID 30656180 · PMC6331199

[^moxie2021]: doi:10.1002/ana.25934 · Lynch DR et al. · *Ann Neurol* 2021 · n=103 randomized (omaveloxolone n=51, placebo n=52); FAS n=82 (40+42) · registrational Phase 2 (paper's own designation), double-blind, parallel-group · omaveloxolone 150 mg/day vs placebo × 48 wk; mFARS treatment difference −2.40 ± 0.96 points (p=0.014) in FAS; age 16–40 yr · pivotal trial supporting FDA approval Feb 2023 (indicated for FA ≥16 yr) · PMID 33068037 · PMC7894504 (full text verified)

[^pergola2011]: doi:10.1056/NEJMoa1105351 · Pergola PE et al. (BEAM) · *N Engl J Med* 2011 · n=227 · Phase 2 RCT · bardoxolone methyl 25/75/150 mg vs placebo in CKD+T2DM; primary endpoint eGFR at 24 wk: +8.2/+11.4/+10.4 mL/min/1.73 m² (all p<0.001 vs placebo); at 52 wk: +5.8/+10.5/+9.3 mL/min/1.73 m² · PMID 21699484

[^dezeeuw2013]: doi:10.1056/NEJMoa1306033 · de Zeeuw D et al. (BEACON) · *N Engl J Med* 2013 · n=2185 · Phase 3 RCT · bardoxolone 20 mg vs placebo in CKD+T2DM; terminated at median 9-month follow-up; HF hospitalization/death: 96 vs 55 (HR 1.83; 95% CI 1.32–2.55; p<0.001); renal composite HR 0.98 (p=0.92) · PMID 24206459 · PMC4496027 (full text verified)
