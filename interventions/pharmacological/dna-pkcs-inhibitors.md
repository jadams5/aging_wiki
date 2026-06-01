---
type: intervention
aliases: [DNA-PK inhibitors, DNA-PKcs inhibitor class, PRKDC inhibitors, DNA-dependent protein kinase inhibitors]
mode: pharmacological
mechanisms: [dna-pk-inhibition, nhej-blockade, radiosensitization]
targets: ["[[dna-pkcs]]"]
target-hallmarks: ["[[genomic-instability]]"]
target-pathways: ["[[non-homologous-end-joining]]", "[[dna-damage-response]]"]
human-evidence-level: none   # no completed aging-indication trial; oncology Phase 1/2 data exist but are not aging-endpoint data
clinical-stage: phase-2      # aging-context per R24 convention: peposertib has completed Phase 1 (van Bussel 2020) and Phase 1/2 trials in oncology; no aging-indication trial exists. Using phase-2 to reflect the maximum oncology-context stage of the class rather than an aging-context trial milestone.
safety-profile: "investigational (oncology, short-course) | unsafe-long-term (aging)"   # Long-term complete DNA-PKcs LOF causes SCID phenotype (mice: Bosma 1983 Scid model; human: Woodbine 2013 case series); chronic full-class inhibition would be myelosuppressive and immunosuppressive. R24 indication-split convention.
translation-gap: translation-blocked-safety   # Primary translation barrier is not a missing trial but a structural safety concern: complete long-term NHEJ blockade causes immunodeficiency. A sub-complete dosing window for aging is unidentified.
next-experiment: "Identify the lowest peposertib dose in aged wild-type mice (24-month C57BL/6) that biases DSB repair choice toward HR (quantified as Rad51 foci formation per DSB) without reducing peripheral lymphocyte counts below 70% of baseline — establishing whether a therapeutic window exists between pathway-choice modulation and immunosuppression."
clinical-trials-active: 4   # R25 search 2026-05-07: 4 active/recruiting trials on ClinicalTrials.gov for peposertib (NCT04533750, NCT04172532, NCT05868174, NCT02813135 ESMART pediatric arm). All are oncology-context only. AZD7648 Phase 1/2a trial NCT03907969 is COMPLETED. No active aging-indication DNA-PKcs inhibitor trial identified.
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Park 2017 (primary aging-context source) verified against full PDF; van Bussel 2020 (peposertib Phase 1) verified against full PDF; Veuger 2003 confirmed via PubMed efetch (PMID 14522929). Leahy 2004 (NU7441 medicinal chemistry) not verifiable — download failed (no OA URL). Lowndes 2010 and Bosma 1983 not verifiable — closed-access (not_oa). Rim 2025 and Wang 2021: Rim 2025 download failed; Wang 2021 downloaded but not read this pass (qualitative claim only, low priority). Quantitative claims from Park 2017 and van Bussel 2020 corrected against primary sources."
---

# DNA-PKcs inhibitors

DNA-PKcs inhibitors are ATP-competitive small molecules targeting the kinase domain of DNA-dependent protein kinase catalytic subunit ([[dna-pkcs]] / PRKDC), the 470 kDa PIKK-family master regulator of non-homologous end joining ([[non-homologous-end-joining|NHEJ]]) at DNA double-strand breaks (DSBs). Together with the [[ku70-ku80]] heterodimer, DNA-PKcs forms the DNA-PK holoenzyme — the cell's primary sensor and effector for DSB repair via NHEJ.

**In oncology (established):** DNA-PKcs inhibitors are radiosensitizers — blocking NHEJ forces NHEJ-incompetent cells to die after ionising radiation-induced DSBs. Peposertib is the most clinically advanced class member, with completed Phase 1 and multiple active Phase 1/2 oncology trials.

**In aging (speculative):** The aging hypothesis rests on two overlapping ideas: (1) that aged cells preferentially repair DSBs by error-prone NHEJ rather than high-fidelity HR, and DNA-PKcs inhibition might bias repair toward HR, reducing mutagenic burden; and (2) that DNA-PKcs activity drives metabolic and mitochondrial decline in aging muscle by suppressing [[ampk]] [^park2017]. Both hypotheses are mechanistically coherent but untested as aging interventions. The dominant safety concern — that long-term NHEJ blockade causes severe combined immunodeficiency — is a structural barrier that likely prevents the full-class mechanism from being used chronically in a healthy-aging context.

**This is a class page.** Individual compound pages when seeded: [[peposertib]], [[nu7441]], [[azd7648]], [[cc-115]]. Mechanistic pathway anchors: [[non-homologous-end-joining]], [[dna-damage-response]], [[dna-pkcs]].

## Class composition

| Agent | Status | Year | Primary indication | Notes |
|---|---|---|---|---|
| **Peposertib** (M3814, nedisertib) | Clinical Phase 1/2 | 2020 (Ph1 report) | Advanced solid tumours; radiosensitizer combinations | Most advanced; multiple active trials; van Bussel 2020 [^vanbussel2020] |
| **NU7441** | Research probe | 2004 | Preclinical only | Selective DNA-PK inhibitor; used in majority of preclinical mechanistic studies [^leahy2004] |
| **NU7026** | Research probe | 2003 | Preclinical only | First selective tool compound; radiosensitization shown with PARP-1 inhibitor AG14361 [^veuger2003] |
| **AZD7648** | Clinical Phase 1/2a completed | NCT03907969 | Advanced malignancies | AstraZeneca pipeline; Phase 1/2a completed 2024 (30 participants) |
| **VX-984 (M9831)** | Abandoned clinical | — | Advanced solid tumours | Discontinued; no published trial report identified #gap/unsourced |
| **CC-115** | Clinical (oncology) | — | Dual DNA-PK + mTOR inhibitor; oncology | Distinct dual-target mechanism; mTOR activity complicates aging-context interpretation |
| **Wortmannin** | Research probe only | — | Preclinical only | Pan-PIKK irreversible inhibitor (DNA-PKcs, PI3K, ATM, ATR); not clinical-grade due to hepatotoxicity and poor selectivity |

## Mechanism

### Kinase domain inhibition and NHEJ blockade

DNA-PKcs is an ATP-dependent serine/threonine kinase. DNA-PKcs inhibitors compete with ATP at the PI3K-homology kinase domain, blocking:
- **Autophosphorylation** at Ser2056 and the ABCDE cluster (Thr2609, Thr2638, Thr2647) — required for conformational activation and release of DSB-end-processing factors
- **Substrate phosphorylation** — XRCC4, LIG4, Artemis, and RPA32 are key downstream targets whose phosphorylation is required for NHEJ completion

Net effect: NHEJ-incompetent cells cannot rejoin DSBs. Under ionising radiation, unrepaired DSBs accumulate → G2/M checkpoint arrest → apoptosis. This is the radiosensitizer rationale [^veuger2003].

### Pathway-choice effect (aging hypothesis)

In cycling cells, DSB repair pathway choice is determined by competition between NHEJ (DNA-PKcs-dependent; fast but error-prone) and homologous recombination (BRCA2/RAD51-dependent; slow, high-fidelity, S/G2-restricted). Evidence from aging senescent microglia suggests that NHEJ preferentially activates over HR in the context of aging — reflected in elevated 53BP1 foci and reduced BRCA1 activity — shifting repair toward mutagenic outcomes [^rim2025]. Similarly, the BRCA1/53BP1 balance controls the NHEJ-HR choice, with 53BP1-dominated states (increasingly prevalent in aged cells) suppressing resection and locking cells into NHEJ [^lowndes2010].

The hypothesis: sub-complete DNA-PKcs inhibition at doses insufficient to abrogate all NHEJ could shift the NHEJ:HR competition toward HR in S/G2-phase cells, reducing the rate of mutagenic insertions and deletions. This is a directionally sound argument but lacks direct experimental support in normally aging animals. #gap/needs-human-replication #gap/no-mechanism

| Dimension | Status |
|---|---|
| Pathway (NHEJ vs HR balance) conserved in humans? | yes |
| NHEJ preference documented in aged human cells? | partial — elevated 53BP1 and γH2AX persistence in aged tissues; Rim 2025 (microglia) #gap/needs-replication |
| DNA-PK inhibition shifts DSB repair toward HR in aged animals? | not-tested |
| HR-shift reduces mutagenic burden in aging? | not-tested |

### DNA-PKcs → AMPK suppression axis (metabolic aging)

A separate and potentially distinct aging-relevant mechanism: Park 2017 (Cell Metabolism) demonstrated that DNA-PKcs activity suppresses [[ampk]] in skeletal muscle in a DNA-damage-independent manner, via phosphorylation of HSP90α at Thr5/7 [^park2017]. DNA-PK autophosphorylation (p-DNA-PK at Ser2056) in skeletal muscle was elevated approximately 3-fold in 15-year-old vs 1-year-old rhesus macaques (Figure 1B; n=5 per age group; Mann-Whitney p<0.01); direct p-DNA-PK measurement was not feasible in mice because the anti-human DNA-PK antibody did not cross-react with mouse DNA-PK. Correspondingly, p-HSP90α (Thr5/7) was elevated in aged rhesus macaque muscle (n=6 per group, p<0.01) and in old C57BL/6J mice (25-month vs 3-month; n=5 per group, p<0.05). DNA-PKcs inhibition with NU7441 (incorporated orally in high-fat diet pellets for 3 months starting from 1 month of age; 1 µM cell-based assay dose) partially restored HSP90α–AMPK interaction and increased AMPK activity and mitochondrial biogenesis (Figures 3I, 4F/H). Deletion of DNA-PKcs from skeletal muscle progenitors (MCK-Cre x DNA-PKcs(fl/fl) mice, termed MDPKO) delayed the metabolic and physical decline associated with aging. Note: no mg/kg i.p. dose is reported in this paper; NU7441 was administered in food pellets in vivo.

This result is particularly important because it is (a) locally verified against the primary source PDF and (b) mechanistically orthogonal to the NHEJ-HR pathway-choice hypothesis — it suggests DNA-PKcs inhibition might benefit aging muscle independently of DNA repair considerations. However, the study used constitutive DNA-PKcs knockout (not a selective inhibitor with a defined therapeutic window), and the generalisability across tissues is unknown. #gap/needs-replication #gap/needs-human-replication

| Dimension | Status |
|---|---|
| DNA-PKcs suppresses AMPK via HSP90α in muscle? | yes (Park 2017, in-vivo, aged C57BL/6 mice) |
| Conserved in humans? | partial — PRKDC expression elevates with age in some GTEx tissues; HSP90α orthology is high |
| DNA-PKcs inhibitor reproduces DNA-PKcs KO benefit in aged muscle? | partial (Park 2017 used NU7441 in aged mice; limited dose-response characterization) |
| Replicated by independent group? | no #gap/needs-replication |

## Clinical evidence

### Oncology (established — class-level)

The class has an established oncology rationale as a radiosensitizer. The first-in-human trial of peposertib (Phase 1, n=31 enrolled; Efficacy Analysis Set n=21) found that the MTD was not reached at the maximum administered dose of 400 mg twice daily (BID); the recommended Phase 2 dose (RP2D) was declared as 400 mg BID. One DLT was reported in the 300 mg BID cohort (combination of low-grade gastrointestinal non-serious AEs and long recovery duration). The most common peposertib-related TEAEs were nausea (n=17), fatigue (n=14), pyrexia (n=11), and constipation (n=10); Grade 3 TEAEs occurred in 7/31 patients (23%), most commonly maculopapular rash. No objective tumour responses (complete or partial) were observed; 12/31 patients (39%) had stable disease as best overall response, lasting ≥12 weeks in 7 patients. Median treatment duration was 6.0 (range 0.3–69.0) weeks [^vanbussel2020].

Active oncology trials as of 2026-05-07 (per ClinicalTrials.gov v2):
- NCT04533750 — peposertib + radiation, head and neck SCC (Phase 1; active, not recruiting)
- NCT04172532 — peposertib + radiation, locally advanced pancreatic adenocarcinoma (Phase 1/2; recruiting)
- NCT05868174 — peposertib + 177Lu-TLX250 radioimmunotherapy, solid tumours (Phase 1b; recruiting)
- NCT02813135 — ESMART pediatric relapsed/refractory malignancies (Phase 1/2; recruiting — includes DNA-PK inhibitor arm)

AZD7648 Phase 1/2a (NCT03907969) completed 2024 (30 participants, advanced malignancies). No published primary results identified as of literature check date.

### Aging / healthspan (absent)

No completed or active trial of a DNA-PKcs inhibitor for aging, longevity, healthspan, senolytic, or geroprotective endpoints exists on ClinicalTrials.gov as of 2026-05-07. `clinical-trials-active: 4` reflects oncology-only trials. Aging-indication count: 0.

## Safety profile

**Established in oncology (short-course):**
- The MTD was not reached in peposertib Phase 1 (van Bussel 2020 [^vanbussel2020]); the single DLT occurred at 300 mg BID (combination of low-grade GI non-serious AEs and long recovery duration); most common TEAEs at the RP2D (400 mg BID) were maculopapular rash, nausea, and pyrexia; Grade 3 TEAEs in 23% of patients; no Grade 4/5 treatment-related events
- Myelosuppression expected at doses that significantly suppress NHEJ in bone marrow (same vulnerability as with PARP inhibitors but via a different mechanism — NHEJ is the dominant DSB repair pathway in non-dividing and slowly dividing hematopoietic cells)
- Combination with ionising radiation or genotoxic chemotherapy amplifies DSB burden (intended effect for radiosensitization; potentially harmful in healthy tissue)

**Structural safety concern for aging (long-term):**
- Complete DNA-PKcs deficiency in mice causes the Scid phenotype (severe combined immunodeficiency — failure of V(D)J recombination → absent T and B cells; Bosma 1983 [^bosma1983]) #gap/unsourced for human equivalent
- Human PRKDC hypomorphic mutations cause Omenn-like combined immunodeficiency (distinct from but analogous to the Scid phenotype) — meaning even partial long-term loss is immunologically costly
- Chronic full blockade in a healthy aging individual would be expected to produce progressive lymphopenia and T/B cell dysfunction
- The critical unknown: whether a sub-complete dose exists that is sufficient to bias DSB pathway choice (modest shift from NHEJ toward HR) without causing clinically significant immunosuppression #gap/dose-response-unclear

The indication-split safety profile (`investigational (oncology, short-course) | unsafe-long-term (aging)`) reflects this asymmetry.

## Assessment: DNA-PKcs inhibitors as a potential aging intervention

The mechanistic case is more speculative than the PARP inhibitor aging hypothesis and faces a larger safety barrier:

1. **Safety ceiling**: Unlike PARP inhibitors, which cause myelosuppression at oncology doses but are tolerable at sub-oncology levels, DNA-PKcs inhibitors carry a structural immunosuppression risk even at moderate doses — because NHEJ is required for V(D)J recombination in developing lymphocytes. Any chronic dose sufficient to meaningfully suppress NHEJ may impair immune reconstitution or maintenance.

2. **HR-shift hypothesis requires empirical validation**: The claim that aged cells preferentially use error-prone NHEJ (rather than HR) and that DNA-PKcs inhibition can redirect them to HR is biologically plausible but not directly demonstrated in normally aging primary cells with a pharmacological agent at defined doses.

3. **The metabolic/AMPK angle is the strongest aging signal**: Park 2017's demonstration that DNA-PKcs constitutively suppresses AMPK in aged muscle (independent of acute DNA damage) is the most compelling aging-relevance finding, because it suggests a DNA-repair-independent role. If replicated, this would position low-dose DNA-PKcs inhibition as a potential metabolic aging intervention — but the therapeutic window and long-term safety remain entirely uncharacterised.

4. **Simpler alternative**: Metformin, AICAR, and direct AMPK activators achieve AMPK activation without the immunosuppression risk of DNA-PKcs inhibition. If the primary benefit is AMPK activation, the simpler route is preferred.

5. **Senolytic angle (very speculative)**: PRKDC/DNA-PKcs activity is elevated in some contexts of persistent DNA damage response activation, which senescent cells exhibit chronically. Whether DNA-PKcs inhibition could preferentially kill senescent cells (which have elevated DDR signalling) vs healthy cells has not been tested. The patel-2025 paper (PMID 40557871) suggests a DNA-PKcs → JNK → p53 pathway during replication catastrophe that could push cells toward apoptosis rather than senescence — but this is replication-stress-specific, not a general senolytic mechanism. #gap/no-mechanism

## Related and sibling classes

| Class | Mechanism | Relationship to DNA-PKcs inhibitors |
|---|---|---|
| [[interventions/pharmacological/parp-inhibitors]] | PARP1 catalytic inhibition / trapping | Parallel DNA-repair-enzyme inhibitor class; overlapping radiosensitizer rationale; Veuger 2003/2004 combined both classes [^veuger2003] |
| [[interventions/pharmacological/senolytics]] | Selective senescent cell killing | DNA-PKcs inhibitors might have weak senolytic activity (very speculative); no evidence |
| [[non-homologous-end-joining]] | NHEJ DSB repair pathway | Primary pathway target of this class |
| [[dna-damage-response]] | DDR signalling | Broader pathway in which DNA-PKcs is the NHEJ-specific PIKK node |
| [[ampk]] | Energy sensing kinase | Downstream of DNA-PKcs suppression in aged muscle (Park 2017); the metabolic aging axis |
| [[genomic-instability]] | Primary targeted hallmark | DNA-PKcs inhibition aims to reduce error-prone NHEJ-driven mutagenesis |

## Limitations and open questions

- `#gap/needs-human-replication` — both the HR-shift and AMPK-metabolic aging hypotheses are based on mouse data; no human aging evidence exists
- `#gap/dose-response-unclear` — no dose identified that achieves meaningful pathway-choice shift or AMPK benefit without causing immunosuppression
- `#gap/long-term-unknown` — no chronic safety data in healthy older adults; complete DNA-PKcs blockade causes SCID; the sub-complete-dose window for aging is uncharacterised
- `#gap/needs-replication` — Park 2017 metabolic aging finding (DNA-PKcs → HSP90α → AMPK in muscle) has not been independently replicated
- `#gap/no-mechanism` — senolytic angle entirely speculative; no mechanistic study tests DNA-PKcs inhibition specifically in senescent vs non-senescent healthy cells (outside oncology senescence models)
- `#gap/contradictory-evidence` — DNA-PKcs inhibition in oncology models induces therapy-induced senescence (Wang 2021 [^wang2021]) — whether this would be net benefit or harm in a healthy-aging context is undefined

## Cross-references

- [[dna-pkcs]] — verified protein page; canonical mechanistic anchor; Park 2017 DNA-PKcs → AMPK axis is fully detailed there
- [[ku70-ku80]] — verified heterodimer page; forms the DNA-PK holoenzyme with DNA-PKcs
- [[non-homologous-end-joining]] — verified pathway page; the primary process blocked by this class
- [[dna-damage-response]] — broader DDR pathway context
- [[ampk]] — downstream metabolic target via the HSP90α axis (Park 2017)
- [[genomic-instability]] — primary targeted hallmark
- [[stem-cell-exhaustion]] — secondary hypothetical target (DNA-PKcs in HSC quiescence via AMPK suppression; speculative)
- [[interventions/pharmacological/parp-inhibitors]] — sibling DNA-repair-enzyme inhibitor class

## Footnotes

[^park2017]: doi:10.1016/j.cmet.2017.04.008 · [[studies/park-2017-dnapk-ampk-aging]] · in-vivo + in-vitro · n=varies by experiment: gamma-H2AX western (Fig 1A): n=10/group (C57BL/6J, 3-mo young vs 25-mo old); p-DNA-PK rhesus (Fig 1B): n=5/age group (1, 3, 10, 15 yr); p-HSP90α rhesus (Fig 1C): n=6/group; p-HSP90α mice (Fig 1D): n=5/group; p-AMPK SCID (Fig 3F): n=3 young / n=6 middle-aged per genotype; NU7441 in vivo (Figs 4G/H, 5E/F): n=5–13/group · model: C57BL/6J mice (young 3-mo vs middle-aged 12–14 mo vs old 25-mo); rhesus macaques (Macaca mulatta, 1–15 yr); SCID mice (B6.CB17-Prkdc(scid)/SzJ); MDPKO mice (MCK-Cre x DNA-PKcs(fl/fl)); C2C12 myotubes · p-DNA-PK ~3-fold elevated in 15-yr vs 1-yr rhesus skeletal muscle (Mann-Whitney p<0.01); DNA-PKcs phosphorylates HSP90α Thr5/7 → disrupts HSP90α chaperone function for LKB1/AMPK → reduced AMPK activity with aging; NU7441 (incorporated in HFD food pellets; oral delivery; in-vitro 1 µM cell-based dose) restored AMPK activity, increased mitochondrial biogenesis, improved treadmill running distance; MDPKO mice showed elevated p-AMPK and improved mitochondrial markers vs fl/fl at 17 months; caloric restriction (30%, 3.4 yr) in rhesus reduced p-DNA-PK and p-HSP90α · local: PDF available (download_status: completed); verified against full PDF 2026-05-07

[^vanbussel2020]: doi:10.1038/s41416-020-01151-6 · [[studies/vanbussel-2020-peposertib-phase1]] · phase-1 clinical trial · n=31 enrolled; Safety Analysis Set n=31; Efficacy/Dose-Escalation Analysis Set n=21 · model: humans (advanced solid tumours, multiple histologies; median age 66 yr, 61% male) · peposertib (M3814) dose-escalation (100–200 mg QD; 150–400 mg BID; 21-day cycles); MTD not reached; RP2D declared 400 mg BID; one DLT (300 mg BID: GI AEs + long recovery); most common TEAEs: nausea, fatigue, pyrexia; Grade 3 TEAEs in 23%; no partial or complete responses; 12/31 (39%) stable disease ≥12 wk in 7; median treatment duration 6.0 (0.3–69.0) weeks · local: PDF downloaded (PMC OA); verified against full PDF 2026-05-07

[^leahy2004]: doi:10.1016/j.bmcl.2004.09.060 · in-vitro · model: cell-free kinase assay; HT29 colon cancer cells · NU7441 identified as highly potent (IC50 14 nM in cell-free assay) and selective DNA-PK inhibitor from chromenone library screen; cell-based DNA-PK inhibition at 1–10 µM; 100-fold selectivity over PI3K · local: download failed (no OA URL found by archive); not verified against primary source — quantitative values (IC50, selectivity) unverified #gap/no-fulltext-access · 400 citations

[^veuger2003]: PMID:14522929 · Cancer Research 2003, vol.63 pp.6008–6015 · Veuger SJ, Curtin NJ, Richardson CJ, Smith GCM, Durkacz BW · in-vitro + in-vivo · model: SW620 colon carcinoma cells; tumour xenografts in CD-1 nude mice · NU7026 (DNA-PK inhibitor, IC50 0.14 µM in cell-free) combined with PARP-1 inhibitor AG14361 completely abolished potentially lethal DSB repair in irradiated cells; combination prevented 90% of DSB rejoining 24h post-IR; additive radiosensitization in clonogenic assay; xenograft growth delay · No DOI indexed; PMID confirmed via PubMed efetch; not in archive (no DOI record)

[^lowndes2010]: doi:10.1016/j.dnarep.2010.07.012 · review · Lowndes NF · DNA Repair 2010 · BRCA1/53BP1 balance as gatekeeper of NHEJ vs HR pathway choice; 53BP1 inhibits DNA end-resection (HR initiation); aging/BRCA1-impaired contexts favour 53BP1 dominance and NHEJ; mechanistic review of pathway-choice implications for senescence and cancer risk · local: closed-access (not_oa) #gap/no-fulltext-access

[^rim2025]: doi:10.1002/glia.70028 · in-vitro · Rim C et al. · Glia 2025 · model: primary mouse microglia (young vs senescent) · senescent microglia preferentially activate NHEJ over HR in DNA damage response; nuclear profilin-1 dysregulation contributes to impaired NHEJ kinetics; phagocytic function impaired in senescent microglia · n=not-specified; preliminary evidence; single tissue/cell type · local: download failed (no OA URL resolved by archive); not verified against primary source #gap/needs-replication #gap/no-fulltext-access

[^wang2021]: doi:10.1016/j.apsb.2021.07.029 · in-vitro + in-vivo · Wang M et al. · Acta Pharmaceutica Sinica B 2021 · n=not-specified (NSCLC cell lines; xenograft) · model: A549 and H1299 non-small cell lung cancer cell lines · M3814 (peposertib) at 0.1–1 µM combined with cisplatin/paclitaxel induced p53-dependent accelerated senescence response in NSCLC cells; M3814 enhanced chemosensitivity ~2–3-fold in combination; xenograft model showed synergistic tumour control · Therapy-induced senescence as mechanism of cell death — relevance to healthy-aging senescence context is inverted (senescence induction is the harm to avoid in aging, not the therapeutic goal) · local: PDF downloaded; not read this verification pass — qualitative claim only; re-verify quantitative numbers on next pass

[^bosma1983]: doi:10.1038/301527a0 · in-vivo · Bosma MJ, Custer RP, Bosma GC · Nature 1983 · model: C.B-17 scid/scid mice (homozygous Prkdc mutation) · original description of the severe combined immunodeficient (Scid) mouse phenotype; SCID mice lack functional B and T cells due to failure of V(D)J recombination; Prkdc mutation subsequently identified as causative (1992); establishes that NHEJ (via DNA-PKcs) is essential for adaptive immune development and that complete DNA-PKcs deficiency is incompatible with normal immune function · local: closed-access (not_oa); 2194 citations; DOI confirmed in archive · #gap/no-fulltext-access
