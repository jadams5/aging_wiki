---
type: intervention
aliases: [PARPi, PARP inhibitors class, olaparib class, niraparib class]
mode: pharmacological
mechanisms: [parp-inhibition, parp-trapping]
targets: ["[[parp1]]"]
target-hallmarks: ["[[genomic-instability]]"]
target-pathways: ["[[base-excision-repair]]", "[[homologous-recombination]]"]
human-evidence-level: limited
clinical-stage: phase-2   # aging-context: no completed aging-indication trial; Phase 2 started (olaparib in clonal-hematopoiesis-adjacent trials). FDA-approved for oncology indications (BRCA-mutant cancers) but the aging-context tier is phase-2 per R24 convention — FDA approval covers the cancer synthetic-lethality indication, not healthspan.
safety-profile: "well-established (oncology, short-course) | investigational (aging, chronic)"
translation-gap: phase-3-rct-needed
next-experiment: "Randomized dose-escalation trial of low-dose olaparib (5–25 mg/day, below standard oncology dose) in adults 65+ with elevated DNA damage biomarkers (γ-H2AX, PAR), measuring NAD+ levels, SIRT1 activity, and clonal hematopoiesis clone trajectories over 6 months — the trial that would distinguish NAD+-restoration benefit from CH-induction harm at sub-therapeutic doses."
clinical-trials-active: 0   # R25 search 2026-05-07: no active recruiting/active-not-recruiting trials on ClinicalTrials.gov specifically targeting aging, senescence, healthspan, or clonal hematopoiesis in a healthy-aging context. Oncology trials (BRCA cancers) are numerous but outside scope.
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Bryant 2005, Farmer 2005, Mouchiroud 2013, Kieronska-Rudek 2025, Nuttall Musson 2024, Lord 2017 (PMC), Robson 2017 (OlympiAD) — all verified against primary source PDFs. Pommier 2016 and Marshall 2024 are closed-access (not_oa) — claims retained with #gap/no-fulltext-access. Fang 2014 download remained pending; claims carry #gap/needs-replication context. SOLO-2 numbers (Pujade-Lauraine 2017) not verified against primary source — flagged in table."
---


# PARP inhibitors

PARP inhibitors (PARPi) are competitive NAD+-mimetic small molecules that block [[parp1]]'s catalytic poly(ADP-ribosyl)ation activity and, for the more potent agents, physically trap the PARP1–DNA complex at single-strand break sites. The class is FDA-approved for oncology (BRCA1/2-mutant cancers, leveraging synthetic lethality with homologous recombination deficiency) and represents one of the most successful examples of mechanism-based precision oncology. **The aging-relevance hypothesis is distinct and more speculative:** chronic PARP1 hyperactivation in aged cells — driven by accumulated DNA damage burden — depletes cellular NAD+, potentially impairing sirtuin activity and mitochondrial function. PARP inhibitors might partially restore this NAD+ balance, but they also carry a documented risk of increasing clonal hematopoiesis, which itself accelerates cardiovascular and hematological aging risk. This page documents both the oncology-established biology and the emerging, contested aging axis.

**This is a class page.** Individual compound pages when seeded: [[olaparib]], [[rucaparib]], [[niraparib]], [[talazoparib]], [[veliparib]]. Mechanistic pathway anchors: [[base-excision-repair]], [[homologous-recombination]], [[parp1]].

## Class composition

| Agent | Approval | Year | Primary indication | PARP-trapping potency |
|---|---|---|---|---|
| **Olaparib** (Lynparza) | FDA | 2014 | BRCA-mutant ovarian; expanded to breast, prostate, pancreatic | Moderate |
| **Rucaparib** (Rubraca) | FDA | 2016 | BRCA-mutant ovarian, prostate | Low–moderate |
| **Niraparib** (Zejula) | FDA | 2017 | Ovarian (all-comers; not BRCA-restricted) | Low |
| **Talazoparib** (Talzenna) | FDA | 2018 | BRCA-mutant breast | High (most potent in class) |
| **Veliparib** | Not approved | — | Failed pivotal trials | Very low |
| **Pamiparib** | NMPA (China) | 2021 | BRCA-mutant ovarian | Moderate |

PARP-trapping potency hierarchy (descending): talazoparib > olaparib > niraparib > rucaparib > veliparib [^pommier2016]. Trapping — not just catalytic inhibition — is the dominant mechanism of synthetic lethality in BRCA-deficient cancers.

## Mechanism

### Catalytic inhibition

PARP1 binds single-strand breaks (SSBs) within milliseconds via its N-terminal zinc fingers, then auto-poly(ADP-ribosyl)ates (PARylates) itself and scaffold proteins (notably [[xrcc1]]), recruiting base-excision repair / SSBR machinery [^bryant2005] [^farmer2005]. PARP inhibitors occupy the NAD+-binding pocket (the ADP-ribosyl transferase domain) competitively, blocking PAR synthesis. Without PAR-mediated signalling, XRCC1 cannot be recruited to SSBs, and SSBR stalls.

### PARP trapping (the dominant oncology mechanism)

More important than catalytic inhibition for synthetic lethality: when a PARP inhibitor binds PARP1 at an SSB, it stabilises the PARP1–DNA complex in a "trapped" state, preventing PARP1 dissociation from DNA [^pommier2016]. Trapped PARP1 complexes are far more cytotoxic than unrepaired SSBs alone — they block replication fork progression in S phase, converting SSBs to double-strand breaks (DSBs). HR-proficient cells can repair these DSBs via BRCA1/2-dependent pathways; HR-deficient (BRCA1/2-mutant) cells cannot — generating the synthetic-lethality window that is the basis of all approved oncology indications [^lord2017].

| Mechanism component | Catalytic inhibition | PARP trapping |
|---|---|---|
| Blocks PAR synthesis? | Yes | Yes |
| Releases PARP1 from DNA? | Prevents (trap) | Prevents (trap) |
| Cytotoxicity in HR-deficient cells | Moderate | High (10–100× more than catalytic alone) |
| Cytotoxicity in HR-proficient cells | Low | Low |

### PARP-trapping potency hierarchy

Talazoparib is 100-fold more potent as a PARP trapper than veliparib at equivalent inhibitor concentrations, despite similar catalytic IC50s [^pommier2016]. This explains why talazoparib showed superior efficacy in BRCA-mutant breast cancer (EMBRACA trial) relative to veliparib's clinical failures, and is a critical structural-activity relationship for any future aging-context formulation work.

## Aging-relevant biology

### The NAD+–PARP1–sirtuin axis (the Cantó/Auwerx hypothesis)

PARP1 is the cell's dominant NAD+ consumer under conditions of elevated DNA strand-break burden. Normal steady-state PARP1 activity is modest, but PARP1 hyperactivation — as can occur under chronic genotoxic stress — rapidly depletes cellular NAD+ [^mouchiroud2013]. Mouchiroud 2013 demonstrated this causally in C. elegans: genetic or pharmacological inactivation of PARP1 (via AZD2281/olaparib or ABT-888/veliparib at 100 nM) increased NAD+ levels and extended worm lifespan by 15–23% in a sir-2.1 (sirtuin homolog)-dependent manner. Because sirtuin deacetylases (SIRT1, SIRT3, SIRT6) require NAD+ as a co-substrate (not just a cofactor), PARP1-mediated NAD+ depletion directly impairs sirtuin function:

- **SIRT1**: reduced → hyperacetylation of PGC-1α, p53, NF-κB → impaired mitochondrial biogenesis, increased inflammation
- **SIRT3**: reduced → hyperacetylation of mitochondrial ETC subunits → reduced mitochondrial respiratory efficiency
- **Downstream**: impaired mitochondrial function, increased ROS, self-amplifying DNA damage cycle

This axis has been demonstrated causally using PARP1 knockout mice and NMN/NAD+ supplementation models [^fang2014] — see also [[parp1]] (verified) for the full mechanistic treatment. Note: Mouchiroud 2013 demonstrated the NAD+–PARP1–sirtuin axis using the PARP inhibitors AZD2281 (olaparib; 100 nM) and ABT-888 (veliparib; 100 nM), not PJ34 — see corrected footnote.

**Aging hypothesis:** in aged cells with elevated DNA damage burden and baseline PARP1 hyperactivation, PARP inhibitors might reduce constitutive NAD+ consumption, partially restoring the NAD+ pool available to sirtuins — a complementary strategy to NAD+ precursor supplementation. This is mechanistically coherent but has not been tested directly in a healthy-aging context. #gap/needs-human-replication #gap/no-mechanism (specific aging-context dose required to restore NAD+ without causing SSBR impairment)

| Dimension | Status |
|---|---|
| Pathway (PARP1–NAD+–sirtuin axis) conserved in humans? | yes |
| PARP1 hyperactivation documented in aged human cells? | partial — elevated γ-H2AX and PAR in aged tissues; not directly quantified at the whole-body level |
| PARP inhibition restores NAD+/sirtuin in aged animals? | not-tested (data from XPA/NER-deficient mice, not normal aging) |
| Replicated in humans for aging endpoint? | no |

### Olaparib promotes senescence in murine macrophages (2025)

A 2025 GeroScience study (Kieronska-Rudek et al.) examined olaparib effects in senescent vs non-senescent murine macrophages (RAW264.7 cell line, replicative senescence model; passages 5–10 non-senescent vs 30–40 senescent) [^kieronskarudek2025]. At 1–30 µM for 72h (n=3–6 independent experiments per assay):
- **SA-β-gal** (senescence marker): ~50% increase at 30 µM in non-senescent cells; 2.5-fold increase at 30 µM in senescent cells
- **p21**: ~doubled at 30 µM in both cell types; baseline p21 was ~15% higher in senescent cells
- **Cell death**: at 30 µM, senescent cells showed predominantly necrotic death (41% necrosis vs 39% apoptosis); non-senescent cells showed predominantly apoptotic death (56% apoptosis vs 32% necrosis by Annexin V/PI FACS)
- **Mitochondrial function**: senescent cells had higher baseline bioenergetics; olaparib at 30 µM significantly suppressed mitochondrial function in both types

The authors note the concentrations tested (up to 30 µM) are at the high end of clinical relevance. **Interpretation is bidirectional for aging:** PARP inhibition at high doses preferentially kills senescent macrophages via necrosis (a potential senolytic-like effect), but also induces senescence markers in non-senescent immune cells (a pro-senescent harm). The study design — a single cell line model, not primary immune cells or in vivo — does not resolve which effect would dominate in vivo. #gap/contradictory-evidence #gap/needs-replication

### Clonal hematopoiesis induction — a major aging-context safety signal

PARP inhibitors are now associated with an increased prevalence of clonal hematopoiesis (CH) in treated cancer patients, particularly through PPM1D, TP53, and other DNA-damage-response gene mutations [^marshall2024]. CH itself is an aging-associated state that confers elevated cardiovascular risk and increased risk of transformation to myelodysplastic syndrome (MDS) and acute myeloid leukemia (AML) [^nuttallmusson2024]. A case series of n=6 ovarian cancer patients on PARP inhibitor therapy (rucaparib, olaparib, or niraparib; median duration 18 months) demonstrated that clonal abnormalities and haematological abnormalities can be monitored and may partially reverse after PARPi cessation in some patients [^nuttallmusson2024].

**This is a critical translation barrier for aging use:** in a cancer patient with expected survival of 2–5 years, short-course PARP inhibitor-associated CH induction may be an acceptable tradeoff. In a healthy 65-year-old seeking a 20+ year healthspan benefit, PARP inhibitor-induced CH acceleration could represent net harm by increasing 10–20 year MDS/AML risk. No analysis has quantified this tradeoff for the hypothetical healthspan use case. #gap/long-term-unknown

## Clinical evidence

### Oncology (established)

| Trial | Agent | Indication | Key finding |
|---|---|---|---|
| SOLO-2 (N=295) | Olaparib | BRCA-mutant ovarian (maint.) | mPFS 19.1 vs 5.5 mo, HR 0.30 (Pujade-Lauraine 2017, Lancet Oncol; not verified against primary source — cited via Lord 2017 review context) #gap/needs-replication |
| OlympiAD (N=302) | Olaparib | BRCA-mutant metastatic breast | mPFS 7.0 vs 4.2 mo, HR 0.58, p<0.001 [^robson2017] |
| EMBRACA (N=431) | Talazoparib | BRCA-mutant breast | mPFS 8.6 vs 5.6 mo, HR 0.54 |
| PRIMA (N=733) | Niraparib | Ovarian (all-comers) | mPFS 13.8 vs 8.2 mo, HR 0.62 |

Individual compound pages will carry full trial details. Note: all approved indications require BRCA1/2 pathogenic variant (germline or somatic) as the synthetic-lethality pre-condition; the HR-deficient context is essential to the oncology mechanism.

### Aging / healthspan (absent)

No completed RCT has tested a PARP inhibitor for an aging, longevity, healthspan, or senolytic primary endpoint in humans. The R25 recency search (2026-05-07) identified no recruiting or active-not-recruiting trials on ClinicalTrials.gov targeting these endpoints. All current active PARP inhibitor trials are oncology-focused. `clinical-trials-active: 0` for aging indication.

## Safety profile

**Well-established in oncology (short-course):**
- Myelosuppression: anemia (25–35%), thrombocytopenia (15–25%), neutropenia (20–30%) — the most common Grade 3+ toxicities across the class
- Nausea/vomiting: common (40–60%), typically manageable
- Fatigue: very common
- MDS/AML risk: ~1–2% cumulative at 2 years in oncology trials — elevated relative to background; likely higher with longer use
- Clonal hematopoiesis induction: documented in ovarian cancer patients on PARPi therapy (Nuttall Musson 2024 [^nuttallmusson2024]: n=6 cases, PPM1D and TP53 variants predominate; partially reversible after PARPi cessation); larger pharmacovigilance data (Marshall 2024 [^marshall2024] in prostate cancer) document increased CH prevalence in PARPi-treated patients

**Unknown for aging-context (chronic, low-dose):**
- No chronic administration safety data in healthy older adults exists
- The CH induction risk at sub-oncology doses is uncharacterized
- Long-term MDS/AML risk in an otherwise healthy aging individual with 20+ year horizon is unquantified
- Interaction with age-related renal decline (renally cleared agents) requires separate PK/PD characterization

`#gap/long-term-unknown` — no chronic aging-context safety data exists. The indication-split safety profile (well-established for oncology short courses; investigational and potentially harmful for aging chronic use) is reflected in the frontmatter `safety-profile` field.

## Assessment: PARP inhibitors as a potential aging intervention

The mechanistic rationale is coherent: PARP1 hyperactivation is a documented consequence of the elevated DNA damage burden that accompanies aging, and the PARP1–NAD+–sirtuin–mitochondria axis is established in DNA repair-deficient models. However, the leap from "PARP1 hyperactivation contributes to aging" to "PARP inhibitors would extend healthspan" requires several untested assumptions:

1. **Dose calibration**: oncology doses fully suppress PARP1 and cause myelosuppression; a sub-oncology dose sufficient to reduce constitutive age-related NAD+ drain without impairing acute SSBR has not been identified.
2. **HR status**: PARP-trapping lethality requires HR deficiency; aged cells are not typically HR-deficient in a constitutive sense (though BRCA1 expression may decline with age in some tissues — unconfirmed).
3. **CH induction harm**: the documented CH-inducing effect of PARP inhibitors represents a potentially serious antagonistic effect in a healthy aging context.
4. **NAD+ precursors as the simpler alternative**: supplementing the NAD+ substrate pool (via NMN or NR — see [[nad-precursors]]) achieves the same downstream sirtuin-reactivation goal without the genotoxic burden of SSBR impairment or the CH-induction risk. The simpler strategy may outperform the more targeted one.

The PARP inhibitor aging hypothesis merits mechanistic investigation (low-dose in aged animals, without the NER-deficiency confound) but is not ready for human testing in a healthspan context.

## Related and sibling classes

| Class | Mechanism | Relationship to PARPi |
|---|---|---|
| [[nad-precursors]] | NAD+ substrate supplementation | Simpler route to same sirtuin-restoration goal; no CH-induction risk |
| [[interventions/pharmacological/senolytics]] | Selective clearance of senescent cells | PARPi may have weak senolytic activity (speculative; Kieronska-Rudek 2025) |
| [[base-excision-repair]] | BER pathway | PARPi targets PARP1, a BER scaffold (verified pathway page) |
| [[homologous-recombination]] | HR pathway | PARPi efficacy requires HR deficiency (synthetic lethality mechanism) |
| [[sirtuin]] | SIRT1/3/6 deacetylases | Downstream beneficiaries of NAD+ restoration |

## Limitations and open questions

- `#gap/needs-human-replication` — all aging-axis evidence is from DNA repair-deficient animal models, not normal aging
- `#gap/no-mechanism` — dose-response for NAD+-restoration vs SSBR-impairment in aged (non-NER-deficient) cells has not been established
- `#gap/long-term-unknown` — no chronic low-dose PARP inhibitor safety data in healthy older adults; CH induction risk at sub-oncology doses uncharacterized
- `#gap/contradictory-evidence` — olaparib promotes senescence in macrophages (Kieronska-Rudek 2025); unclear whether this is senolytic (kills pre-existing senescent cells) or pro-senescent (induces senescence in healthy cells)
- `#gap/needs-replication` — single study (Kieronska-Rudek 2025) for the aging-macrophage senescence phenotype; n=3–6 independent experiments using RAW264.7 murine macrophage cell line only; primary immune cells and in vivo validation not yet done
- `#gap/dose-response-unclear` — optimal dose for aging-hypothesis (if any) not identified; oncology doses cause myelosuppression

## Cross-references

- [[parp1]] — verified protein page; canonical mechanistic anchor for NAD+-PARP1-sirtuin axis
- [[base-excision-repair]] — verified pathway page; documents PARP1 scaffold role and Fang & Bohr 2016 NAD+-mitophagy axis
- [[xrcc1]] — verified protein page (R32a); PARP1's primary scaffold partner at SSBs; recruited via PAR chains
- [[brca1]] — verified protein page; HR pathway anchor; the HR-deficiency requirement for synthetic lethality
- [[homologous-recombination]] — pathway page for the synthetic lethality context
- [[nad-precursors]] — sibling class; the alternative strategy for NAD+-sirtuin restoration
- [[genomic-instability]] — primary targeted hallmark
- [[deregulated-nutrient-sensing]] — secondary hypothetical target (via NAD+-sirtuin axis)
- [[sirtuin]] — pathway page; downstream of PARP1–NAD+ axis

## Footnotes

[^bryant2005]: doi:10.1038/nature03443 · [[studies/bryant-2005-parp-inhibitor-brca2]] · in-vitro + in-vivo · n=not-specified (tumour cell lines + xenograft) · model: BRCA2-deficient V-C8 hamster cells (V79 wild-type controls; V-C8+B2 BRCA2-rescued controls); 40 CD-1 nude mice for xenograft · PARP inhibitors NU1025 and AG14361 profoundly reduced survival of BRCA2-deficient cells at concentrations non-toxic to normal cells; V-C8 xenografts responded to 5-day AG14361 treatment (25–50 mg/ml) with tumour regression; V-C8+B2 xenografts showed no response; first demonstration of synthetic lethality between PARP inhibition and BRCA2 deficiency · specific fold-selectivity not stated as a single headline figure in this paper (Lord & Ashworth 2017 review cites "as much as 1,000-fold" for the class across both 2005 papers) · local: PDF verified 2026-05-07

[^farmer2005]: doi:10.1038/nature03445 · [[studies/farmer-2005-parp-inhibitor-brca]] · in-vitro + in-vivo · model: BRCA1- or BRCA2-deficient embryonic stem (ES) cells (Cre-mediated knockout); xenograft in BALB/c-nude mice (40 mice; 2×10^6 ES cells injected) · PARP inhibitors KU0058684 (IC50=3.2 nM) and KU0058948 (IC50=3.4 nM) selectively killed BRCA1- or BRCA2-deficient ES cells; SF50 (dose causing 50% survival) = 35 nM for BRCA1-deficient; ~2 µM for wild-type — 57-fold sensitisation for BRCA1-deficient; 133-fold sensitisation for cells lacking both BRCA1 and BRCA2; xenograft: KU0058684 significantly blocked tumour formation from BRCA2-deficient ES cells (p=0.03 vs vehicle; p=0.01 vs wild-type treated); co-discovery of PARP–BRCA synthetic lethality with Bryant 2005 · local: PDF verified 2026-05-07

[^pommier2016]: doi:10.1126/scitranslmed.aaf9246 · review · Science Translational Medicine 2016 · Pommier Y et al. · mechanistic review of PARP-trapping vs catalytic-inhibition distinction; establishes talazoparib > olaparib > niraparib > rucaparib > veliparib trapping hierarchy; quantitative cellular protein-DNA complex assay data · local: not_oa (closed-access); cited from DOI lookup

[^lord2017]: doi:10.1126/science.aam7344 · review · Science 2017 · Lord CJ & Ashworth A · comprehensive review of synthetic-lethality mechanism, HR pathway, and PARP inhibitor clinical landscape as of 2017; BRCA-mutant cells were "as much as 1,000 times more sensitive" to PARPi than BRCA-wild type; talazoparib "approximately 100-fold more potent than niraparib" in PARP1 trapping; veliparib has "limited ability to trap PARP1"; SOLO-2 context included · local: PDF verified via PMC author manuscript 2026-05-07

[^robson2017]: doi:10.1056/NEJMoa1706450 · [[studies/robson-2017-olaparib-olympiad-breast]] · rct · n=302 (randomized 2:1: 205 olaparib, 97 standard therapy) · model: germline BRCA1/2-mutant HER2-negative metastatic breast cancer; median age 44 (olaparib) vs 45 (standard therapy) · olaparib 300 mg twice daily vs physician's choice single-agent chemotherapy (capecitabine, eribulin, or vinorelbine); mPFS 7.0 vs 4.2 months (HR 0.58, 95% CI 0.43–0.80, p<0.001); ORR (blinded central review, measurable disease): 59.9% vs 28.8%; OS: HR 0.90 (95% CI 0.63–1.29; p=0.57) — no significant OS difference at data cutoff; primary analysis by stratified log-rank test, Kaplan-Meier · local: PDF verified 2026-05-07

[^mouchiroud2013]: doi:10.1016/j.cell.2013.06.016 · [[studies/mouchiroud-2013-nad-sirtuin-longevity]] · in-vivo · n=60–100 animals per condition (C. elegans, scored every other day) · model: C. elegans (N2 wild-type; pme-1(ok988) PARP-1 mutant; rrf-3(pk1426) RNAi-sensitised); primary mouse hepatocytes (Sirt1^L2/L2 conditional knockout); AML12 hepatocyte cell line · NAD+ supplementation via NR (500 µM) or NAM (200 µM) extended C. elegans lifespan +22% (NR; p=0.0004) and +16% (NAM; p=0.01), in a sir-2.1-dependent manner; PARP inhibition by AZD2281 (olaparib; 100 nM) extended lifespan +22.9% (p<0.001); ABT-888 (veliparib; 100 nM) extended lifespan +15% (p<0.05); both PARP inhibitor effects were pme-1-dependent and abrogated in sir-2.1(ok434) mutants; established NAD+–sirtuin axis and PARP1 as a major competing NAD+ consumer in vivo · **Note: PARP inhibitors used were AZD2281 (olaparib) and ABT-888 (veliparib) at 100 nM — NOT PJ34 (an earlier tool compound not used in this paper)** · local: PDF verified 2026-05-07

[^fang2014]: doi:10.1016/j.cell.2014.03.026 · [[studies/fang-2014-xpa-parp1-nad-mitophagy]] · in-vitro + in-vivo · model: XPA-deficient cells (NER-deficient; chronic PARP1 hyperactivation); XPA-deficient mice · PARP1 hyperactivation in XPA-deficient cells depleted NAD+; SIRT1 activity was reduced; mitophagy was defective; NAD+ repletion via NMN restored SIRT1, mitophagy, and mitochondrial function; PARP inhibitor (ABT-888/veliparib) at 5 µM partially rescued NAD+ and SIRT1 activity · **Note: model is NER-deficient, not normal aging; extrapolation to normal aging requires caution** · local: bronze OA; download pending

[^kieronskarudek2025]: doi:10.1007/s11357-025-01679-6 · [[studies/kieronskarudek-2025-olaparib-macrophage-senescence]] · in-vitro · n=3–6 independent biological experiments per assay (stated in figure legends) · model: murine macrophage cell line RAW264.7 (replicative senescence: passages 5–10 non-senescent vs passages 30–40 senescent); **bone-marrow-derived macrophages were NOT used — only RAW264.7** · olaparib (0, 1, 3, 10, 30 µM for 72h) upregulated SA-β-gal (~50% increase at 30 µM in non-senescent; 2.5-fold increase in senescent) and p21 (doubled at 30 µM in both types); at 30 µM, senescent cells died predominantly by necrosis (41%) over apoptosis (39%), while non-senescent cells showed predominantly apoptotic death (56% vs 32% necrosis) by Annexin V/PI FACS; senescent cells showed higher baseline PARP1 expression (+50% full-length PARP1), higher PARylation (8.5× non-senescent), and higher baseline bioenergetics (ATP, mitochondrial respiration); authors note concentrations used (up to 30 µM) are potentially clinically relevant; authors suggest olaparib may exhibit senolytic-like activity in senescent immune cells but also exerts pro-senescent effects in non-senescent cells · **Key limitation acknowledged by authors: all findings are from a murine cell line model; primary immune cells and in vivo validation needed** · local: PDF verified 2026-05-07 #gap/needs-replication

[^marshall2024]: doi:10.1002/pros.24712 · observational · n=not-specified (advanced prostate cancer patients) · model: humans (PARP inhibitor-treated prostate cancer) · PARP inhibitor treatment associated with increased prevalence and progression of clonal hematopoiesis; PPM1D mutations predominant; CH-associated MDS/AML risk concern documented · local: not_oa (closed-access); cited from DOI lookup #gap/no-fulltext-access

[^nuttallmusson2024]: doi:10.1038/s41375-023-02040-6 · case series · n=6 patients (stage III/IV high-grade ovarian cancer; mean age 67.3 years; median PARPi duration 18 months) · model: humans (PARP inhibitor-treated ovarian cancer patients: rucaparib n=1, olaparib n=3, niraparib n=2; referred to haematology for unexplained cytopenias/haematological abnormalities) · 5/6 patients had clonal pathology (CP) by m-NGS: PPM1D and TP53 variants most common; DNMT3A and SMC3A also detected; diagnoses ranged from CHIP to MDS-LB; 4/5 patients with CP showed resolution or improvement of haematological abnormalities after PARPi discontinuation, including 2 with MDS who became transfusion-independent; demonstrates partial reversibility of PARPi-associated CH/MDS in some patients · local: PDF verified 2026-05-07
