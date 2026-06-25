---
type: compound
aliases: [piplartine, PL, piperlongumine alkaloid, "1-[(E)-3-(3,4,5-trimethoxyphenyl)prop-2-enoyl]-2,3-dihydropyridin-6-one"]
pubchem-cid: 637858
pubchem-cid-alt: null
chembl-id: CHEMBL465843
drugbank-id: null
administration-route: oral
biologic: false
molecular-formula: C17H19NO5
molecular-weight-da: 317.34
mechanisms: [senolytic, ros-induction]
targets: ["[[oxr1]]"]
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
clinical-stage: preclinical
human-evidence-level: preclinical-only
translation-gap: preclinical-only
next-experiment: "Intermittent oral dosing study in a senescence-accelerated mouse model (e.g., aged C57BL/6, 20–24 months) comparing senescent-cell clearance and healthspan metrics against fisetin and D+Q; establish pharmacokinetics (Cmax, Tmax, t½, tissue distribution) in a rodent PK study before any human trial design."
clinical-trials-active: 0
literature-checked-through: 2026-06-24
verified: true
verified-date: 2026-06-24
verified-by: claude
verified-scope: "Wang 2016 (doi:10.18632/aging.101100) and Zhang 2018 (doi:10.1111/acel.12780) verified against full PDFs; EC50s, selectivity ratios, synergy CDI values, and mechanism-discordance adjudication are primary-source-confirmed. Secondary sources (Liu 2018, Zhang 2024, Dotou 2024, Ali 2025) verified for volume/issue/pages against Crossref; full PDFs of secondary sources not re-read."
---

# Piperlongumine

A naturally-occurring alkaloid/amide isolated from *Piper longum* (long pepper). Identified as a **natural senolytic** in 2016, meaning it can preferentially induce apoptosis in senescent cells relative to proliferating cells. Also extensively studied as an anti-cancer agent through pro-oxidant and ROS-amplifying mechanisms in tumor cells. As a senolytic, piperlongumine is positioned in the same class as [[fisetin]], [[quercetin]], and [[dasatinib]], but differs in molecular weight, structure-activity relationships, and mechanistic rationale. Its senolytic mechanism involves OXR1 as a direct binding target (Zhang 2018), with the upstream ROS-independence finding of Wang 2016 reconcilable: PL binds and degrades OXR1 upstream of ROS, but acute ROS elevation per se is not the proximal kill signal (see Mechanism section). As of 2026-06-24, **no human clinical trials in aging or senolytic indications are registered**.

Also known as **piplartine** (an older alias still prevalent in the biochemistry literature); both names refer to the same compound (CAS 20069-09-4).

## Identity

- **PubChem CID:** 637858
- **ChEMBL ID:** CHEMBL465843
- **CAS:** 20069-09-4
- **InChIKey:** VABYUUZNAVQNPG-BQYQJAHWSA-N
- **Molecular formula:** C17H19NO5
- **Molecular weight:** 317.34 Da
- **Stereochemistry:** (E)-configuration at the propenyl double bond; a single defined geometric isomer, not a racemate
- **Class:** alkaloid / vinylogous amide; contains both an α,β-unsaturated lactam and a cinnamoyl Michael-acceptor moiety
- **Source plant:** *Piper longum* L. (long pepper); also detected in several other *Piper* species

## Mechanism of action

### Senolytic selectivity

Wang et al. 2016 identified piperlongumine as a senolytic through phenotypic screening in human WI-38 fibroblasts induced into senescence via ionizing radiation, replicative exhaustion, or oncogenic Ras expression [^wang2016]. The compound preferentially killed senescent cells while sparing proliferating controls. Quantitative selectivity from Table 1 of Wang 2016: EC50 in non-senescent controls (NCs) = 20.28 µM; EC50 in IR-induced SCs = 7.97 µM (selectivity ratio NC/SC = 2.54); EC50 in replication-exhausted SCs = 6.24 µM (ratio = 3.25); EC50 in Ras-induced SCs = 7.09 µM (ratio = 2.86). Wang 2016 concludes the senolytic activity is independent of ROS induction (see Mechanism adjudication below).

### OXR1 as a candidate mechanism

Zhang et al. 2018 applied chemical proteomics (ABPP — activity-based protein profiling) to identify direct binding targets of piperlongumine in senescent cells and found **OXR1 (oxidation resistance 1)** as a principal cellular target [^zhang2018]. Key reported findings:
- Piperlongumine causes OXR1 protein degradation selectively in senescent WI-38 fibroblasts
- OXR1 loss leads to elevated intracellular ROS and triggering of apoptosis in senescent cells
- Knockdown of OXR1 in non-senescent cells recapitulates senescent-cell sensitivity to oxidative death
- Structural analogs with enhanced Michael-acceptor reactivity showed improved selectivity in subsequent SAR studies [^liu2018], supporting a covalent-binding mechanism at OXR1

**Mechanism adjudication (verified against both full PDFs):** The apparent discordance is reconcilable once the specific experimental designs are compared.

Wang 2016 demonstrated that γ-tocotrienol (GT3, 5 µM) — a potent ROS scavenger that does NOT chemically react with PL in media — fully reversed PL-induced ROS elevation in IR-SCs but had **no inhibitory effect on PL-induced SC death**. This definitively shows that acute ROS elevation per se is not the executioner signal; PL kills SCs through a mechanism that is upstream of, or parallel to, ROS. (Separately, NAC blocked SC death, but Wang 2016 showed this is because NAC chemically inactivates PL via conjugate addition to the C2–C3 α,β-unsaturated imide, forming NAC-PL which is not senolytic — it is not an antioxidant rescue.)

Zhang 2018 demonstrated that **genetic knockdown of OXR1** (the direct PL-binding target identified by ABPP proteomics) recapitulates selective SC killing by reducing expression of antioxidant enzymes (GPX2, HO-1, CAT), leading to elevated ROS and apoptosis that is abrogated by NAC. This is a chronic, sustained reduction in antioxidant capacity — mechanistically distinct from the acute ROS scavenging in Wang 2016.

**Resolution:** PL acts upstream by directly binding and inducing proteasomal degradation of OXR1 in SCs (Zhang 2018). This progressively erodes the senescent cell's antioxidant enzyme defense network. The resulting sustained elevation of ROS then drives apoptosis. Acute scavenging of ROS (GT3 experiment, Wang 2016) partially relieves the downstream signal but does not rescue cells because the upstream OXR1-loss cascade continues. The two papers thus measure different points in the same pathway: Wang 2016 tests whether acute ROS elevation is the proximal death trigger (it is not); Zhang 2018 establishes that the sustained OXR1→antioxidant-enzyme→ROS cascade IS required for SC killing. These are complementary rather than contradictory findings.

### Synergy with BCL-2 family inhibitors

Wang et al. 2016 demonstrated synergistic senescent-cell killing when piperlongumine was combined with ABT-263 ([[navitoclax]]) in IR-induced WI-38 SCs [^wang2016]. Conditions tested: 1.25 µM ABT-263 + 5 or 10 µM PL; and 10 µM PL + 0.08–1.25 µM ABT-263. Synergy was quantified by the coefficient of drug interaction (CDI) method (CDI = AB/[A×B]; CDI <1 synergistic, CDI <0.7 strongly synergistic). CDI values for 10 µM PL + 0.08–1.25 µM ABT-263 ranged from 0.02–0.41, indicating strong synergistic killing of IR-SCs; the combination was not toxic to non-senescent controls at these concentrations (Figure 4, Table 3 of Wang 2016; n=3–6). This is mechanistically coherent: PL engages the OXR1/ROS/antioxidant-defense axis while navitoclax targets BCL-xL/BCL-2 anti-apoptotic proteins, and combinatorial disruption of two independent survival pathways produces synergistic SC death. #gap/needs-replication — confirmed only in the IR-SC in vitro model; not yet tested in vivo.

### Pro-oxidant mechanism in cancer context (and dual-activity note)

Piperlongumine is also a well-studied anti-cancer agent with a documented pro-oxidant mechanism: it elevates intracellular ROS in cancer cells by inhibiting oxidative-stress-defense enzymes (including glutathione S-transferase Pi 1, GSTP1). While this anti-cancer mechanism pre-dates the senolytic literature, there is potential overlap — senescent cells accumulate ROS and have altered redox homeostasis, possibly making them vulnerable to the same pro-oxidant pressure that kills cancer cells. The OXR1 axis may represent a senescence-specific vulnerability not present in most non-senescent somatic cells.

**Note on mechanism class assignment:** PL has been described as an antioxidant in some contexts (free-radical scavenging via the methoxyphenyl chromophore). Its primary aging-relevant mechanism is `ros-induction` downstream of OXR1 degradation — sustained antioxidant enzyme erosion elevates ROS in SCs. The `antioxidant` class is therefore **not** listed in `mechanisms:` to avoid a false cross-query signal. The Wang 2016 observation that acute ROS elevation is not the proximal kill trigger is fully compatible with OXR1-mediated chronic antioxidant erosion being the actual mechanism (see Mechanism adjudication above); no revision of the mechanism class assignment is needed.

### Michael acceptor chemistry

The compound contains two electrophilic Michael-acceptor sites: the α,β-unsaturated carbonyl of the cinnamoyl group and the endocyclic double bond of the dihydropyridinone ring. Both are required for full activity — Wang 2016 showed that reduction of either double bond (2,3-dihydro-PL or 7,8-dihydro-PL) abolished or greatly reduced senolytic activity against IR-SCs (Figure 1D of Wang 2016). Zhang et al. 2024 further optimization yielded compound 24 with ~50-fold improved senolytic potency versus parent PL in senescent WI-38 fibroblasts [^analog2024], consistent with Michael addition to protein cysteine thiols (including OXR1) as the primary covalent engagement mode.

## Effects on aging hallmarks

| Hallmark | Effect | Model | Evidence |
|---|---|---|---|
| [[cellular-senescence]] | Selectively kills radiation-, replication-, and Ras-senescence-induced WI-38 fibroblasts; reduces OXR1; elevates intracellular ROS in senescent cells | Human WI-38 fibroblasts in vitro | [^wang2016] [^zhang2018] |
| [[chronic-inflammation]] | Reduces senescence markers and inflammatory effectors (downstream of senescent cell clearance) in cartilage ex vivo model; blocks IL-1β-induced chondrocyte senescence | Goat cartilage ex vivo; rat OA model | [^kapoor2023] [^endo2026] |

Extrapolation table:

| Dimension | Status |
|---|---|
| Pathway (OXR1/SCAP disruption) conserved in humans? | yes (OXR1 is a human protein; WI-38 are human cells) |
| Senolytic phenotype conserved in humans in vivo? | unknown — no human in vivo data |
| Replicated in humans? | no #gap/needs-human-replication |

## In vivo aging data

No in vivo lifespan or healthspan study of piperlongumine in aged rodents has been published in the senolytic context as of 2026-06-24. The vast majority of reported evidence is in cell culture (human fibroblasts, cancer cell lines). #gap/needs-human-replication

Two recent studies provide partial in vivo evidence in disease models, not aging per se:
- Endo et al. 2026 (rat knee OA model): oral piperlongumine alleviated meniscus and cartilage degeneration and suppressed senescence markers in vivo [^endo2026].
- Ali et al. 2025: piperlongumine + D+Q failed to prevent chemotherapy-induced bone loss in mice over 12 months, with senescence markers resolving spontaneously while bone deficits persisted — **negative result for this combination in this context** [^ali2025].

**The absence of a lifespan or multi-organ healthspan study in aged rodents is the primary evidence gap separating piperlongumine from [[fisetin]] and D+Q in the senolytic field.**

## Analog development

The hit-to-lead campaign around piperlongumine is active:
- Liu et al. 2018 (PMID 29925484): first systematic SAR series of PL analogs evaluated for senolytic activity in senescent WI-38 fibroblasts [^liu2018]
- Zhang et al. 2024 (PMID 38104906): further optimization yielded compound 24 with ~50-fold senolytic potency improvement over PL in the same model [^analog2024]
- Dotou et al. 2024 (PMID 38436272): review of amide alkaloids from *Piper* species as senomodulators, situating PL within the broader natural product chemotype [^dotou2024]

These analogs are not commercially available as supplements; they exist only as research compounds. The parent compound (piperlongumine) is available in long pepper extracts, but standardized dosing for senolytic endpoints has not been established in humans.

## Pharmacokinetics

Human PK data for piperlongumine are sparse. Key reported properties from the preclinical literature:

- Reasonable oral bioavailability in mice at pharmacological doses (used in cell-based studies at 2.5–10 µM); exact oral F% in rodents is not well-characterized in the senolytic literature
- Two electrophilic Michael-acceptor sites raise concerns about covalent adduct formation with serum proteins (albumin, transferrin) that could reduce free-drug exposure
- Metabolism: likely hepatic CYP-mediated; no published human PK study
- The cinnamoyl chromophore suggests potential UV absorption and photosensitivity risk — not formally evaluated

#gap/dose-response-unclear — No dose-response characterization in a senolytic context in vivo (rodent or human). No human PK study exists.

## Human evidence and clinical trial status

**No human senolytic trials with piperlongumine are currently registered on ClinicalTrials.gov** (confirmed search: RECRUITING + ACTIVE_NOT_RECRUITING, 2026-06-24; 0 results). This contrasts sharply with [[fisetin]] (17 active trials) and D+Q (multiple Phase 2 trials).

Computational analysis (Meiners et al. 2024, PMID 38491064 [^meiners2024]) identified the piperlongumine + quercetin combination as a transcriptomically similar surrogate to dasatinib + quercetin, based on gene expression signature overlap — a hypothesis-generating finding, not human evidence.

No ex vivo human adipose or tissue senolytic studies (comparable to Yousefzadeh 2018 for fisetin) have been published for piperlongumine. #gap/needs-human-replication

## Context-dependence of senolytic activity

Importantly, piperlongumine does not act as a universal senolytic. Context-dependent behavior has been reported:
- Malaquin et al. 2020 (PMID 32630281 [^malaquin2020]): in prostate cancer, piperlongumine acts as a senomorphic (arrests proliferation, suppresses SASP) rather than senolytic in enzalutamide-induced senescence; DNA-damage-induced senescent cells are sensitive, but targeted-therapy-induced senescent cells are not
- Tchelougou et al. 2024 (PMID 38946802 [^tchelougou2024]): in melanoma, genotoxin-induced senescent cells are piperlongumine-sensitive, but BRAF-MEK-inhibition-induced senescent-like cells are not

This context-dependence suggests the senolytic mechanism requires specific senescence programs (likely those with elevated OXR1 dependence and altered ROS buffering) and is not equivalent to a pan-senolytic like [[navitoclax]].

## Positioning in the senolytic landscape

| Compound | Source | Primary mechanism | In vivo aging data | Human trials |
|---|---|---|---|---|
| [[dasatinib]] + [[quercetin]] | synthetic / natural flavonol | ephrin-receptor / PI3K-AKT SCAP disruption | yes (multiple mouse models) | Phase 2 completed (IPF, frailty) |
| [[fisetin]] | flavonol (strawberry) | PI3K-AKT-mTOR SCAP disruption | yes (lifespan extension in C57BL/6) | 17 active/enrolling |
| [[navitoclax]] | synthetic BH3 mimetic | BCL-xL/BCL-2 inhibition | yes | Phase 2 (cancer; age-adjacent) |
| Piperlongumine | alkaloid (long pepper) | OXR1 degradation / pro-oxidant | absent (disease models only) | 0 |

## DrugAge status

A DrugAge database search was attempted but the endpoint was unreachable (2026-06-24). No published lifespan-extension data in model organisms (worm, fly, mouse) has been identified for piperlongumine in the primary literature search. #gap/needs-canonical-id

## Classification

- **SENS strategy:** [[sens-damage-categories|ApoptoSENS]] — senolytic
- **Hallmarks targeted:** [[cellular-senescence]], [[chronic-inflammation]] (via SASP elimination)
- **Intervention class:** [[interventions/pharmacological/senolytics]]
- **Dietary source:** *Piper longum* (long pepper, *tippali* in Ayurvedic medicine); long-pepper black-pepper extracts are commercially available as supplements but without standardized senolytic dose characterization

## Limitations and gaps

- **No in vivo aging/lifespan study.** The key evidence gap versus [[fisetin]] and D+Q. No published mouse healthspan or lifespan study using piperlongumine in an aged model.
- **Mechanism nuance.** Wang 2016 showed that acute ROS elevation is not the proximal executioner signal (GT3 scavenged ROS but did not rescue SCs). Zhang 2018 showed that sustained OXR1 degradation → antioxidant enzyme collapse → ROS IS required for SC killing (NAC rescued shOXR1-induced SC death). These are complementary: PL acts upstream (OXR1 binding → proteasomal degradation → sustained antioxidant erosion → chronic ROS → apoptosis); acute ROS is not the kill switch. The former apparent discordance is resolved by reading both full papers.
- **No human PK data.** No published pharmacokinetic study in humans. Two Michael-acceptor sites suggest potential protein binding and PK complexity.
- **Context-dependent senolytic activity.** Not a pan-senolytic; senescence induced by different triggers shows variable sensitivity.
- **No clinical-stage analog.** The improved analogs (compound 24, exocyclic-methylene series) exist only as research tools.
- **Navitoclax synergy claim.** Reported in Wang 2016 but not independently replicated with effect sizes at doses achievable in vivo. #gap/needs-replication
- **DrugAge inaccessible.** Lifespan data in model organisms (worm/fly/mouse) could not be confirmed from the DrugAge database at time of seeding. #gap/needs-canonical-id

## Footnotes

[^wang2016]: doi:10.18632/aging.101100 · Wang Y, Chang J, Liu X, Zhang X, Zhang S, Zhang X, Zhou D, Zheng G · *Aging (Albany NY)* 2016;8(11):2915–2926 · in-vitro · model: human WI-38 fibroblasts (radiation-, replication-, and Ras-senescence); no in vivo mouse data reported · PMID 27913811 · primary discovery paper for piperlongumine as senolytic; EC50 NC=20.28 µM, IR-SC=7.97 µM (selectivity ratio 2.54), Rep-SC=6.24 µM (ratio 3.25), Ras-SC=7.09 µM (ratio 2.86); ABT-263 synergy confirmed (CDI 0.02–0.41 for 10 µM PL + 0.08–1.25 µM ABT-263); senolytic mechanism ROS-independent (GT3 abolished ROS elevation but not SC death) · **full PDF verified 2026-06-24**

[^zhang2018]: doi:10.1111/acel.12780 · Zhang X, Zhang S, Liu X, Wang Y, Chang J, Zhang X, Mackintosh SG, Tackett AJ, He Y, Lv D, Laberge R-M, Campisi J, Wang J, Zheng G, Zhou D · *Aging Cell* 2018;17(4):e12780 · in-vitro · model: human WI-38 fibroblasts (IR-SCs, RE-SCs, and NCs); chemical proteomics (ABPP pull-down) · identifies OXR1 as top direct binding target of PL among 172 senolytic-relevant proteins; PL induces OXR1 ubiquitin-proteasome degradation selectively in SCs; OXR1 knockdown reduces GPX2, HO-1, CAT → elevated ROS → selective apoptosis in IR-SCs and RE-SCs, abrogated by NAC; IR-SCs retain more intracellular PL than NCs · PMID 29766639 · **full PDF verified 2026-06-24**

[^liu2018]: doi:10.1016/j.bmc.2018.06.013 · Liu X, Wang Y, Zhang X, Gao R, Zhang S, Shi L, Zhang X, Song W, Hendrickson H, Zhou D, Zheng G · *Bioorg Med Chem* 2018;26(14):3925–3938 · in-vitro · model: human WI-38 senescent fibroblasts · first systematic SAR series of PL analogs evaluated for senolytic activity · PMID 29925484 · volume/issue/pages verified against Crossref 2026-06-24; full PDF not re-read

[^analog2024]: doi:10.1016/j.bmcl.2023.129593 · Zhang X, He Y, Liu X, Zhang S, Shi L, Wang Y, Zhou D, Zheng G · *Bioorg Med Chem Lett* 2024;98:129593 · in-vitro · model: senescent WI-38 fibroblasts · compound 24 shows ~50-fold improved senolytic potency vs piperlongumine parent in same model · PMID 38104906 · volume/article-number verified against Crossref 2026-06-24; full PDF not re-read

[^kapoor2023]: doi:10.1016/j.ejphar.2023.176136 · Kapoor N, Katti DS (first/last) · *Eur J Pharmacol* 2023;961:176136 (verify) · in-vitro / ex-vivo · model: IL-1β-induced goat cartilage explants · PL reduces senescence marker expression, rescues oxidative stress and DNA damage markers; proposes senotherapeutic potential for osteoarthritis · PMID 37944845 · **abstract-only verification 2026-06-24**

[^endo2026]: doi:10.1016/j.bbrc.2026.154179 · Endo K, Sekiya I (first/last) · *Biochem Biophys Res Commun* 2026;754:154179 (verify) · in-vitro + in-vivo · model: senescent meniscus cells / chondrocytes (cell) + OA rat model (in vivo) · PL selectively eliminates senescent meniscus cells and chondrocytes via ROS-related pathways; in vivo: alleviates meniscus and cartilage degeneration + reduces senescence markers; effects blocked by ROS scavengers · PMID 42322814 · **abstract-only verification 2026-06-24**

[^ali2025]: doi:10.1038/s41598-025-01717-5 · Ali MM, Simmons C, Warren A, Gatrell B, Resende-Coelho A, McElroy T, Allen MR, Almeida M · *Sci Rep* 2025;15(1) · in-vivo · model: mouse (chemotherapy-induced bone-loss; doxorubicin + cyclophosphamide + docetaxel) · PL + D+Q senolytic combination did not prevent bone loss; senescence markers resolved spontaneously by 12 months while bone deficits persisted — **negative result** in this combination/context · PMID 40389522 · authors/journal/volume verified against Crossref 2026-06-24; full PDF not re-read

[^malaquin2020]: doi:10.3390/cells9071593 · Malaquin N, Rodier F (first/last) · *Cells* 2020;9(7):1593 · in-vitro · model: prostate cancer cells (DNA-damage- vs enzalutamide-induced senescence) · PL acts as senomorphic (not senolytic) in enzalutamide-induced senescent cells; senolytic only in DNA-damage-induced senescent cells — context-dependent · PMID 32630281 · **abstract-only verification 2026-06-24**

[^tchelougou2024]: doi:10.3389/fcell.2024.1368711 · Tchelougou D, Rodier F (first/last) · *Front Cell Dev Biol* 2024;12:1368711 · in-vitro · model: melanoma cells (genotoxin- vs BRAF/MEK-inhibition-induced senescence) · PL effective in genotoxin-induced senescent melanoma; ineffective in targeted-therapy-induced senescent-like cells — further confirms context-dependence · PMID 38946802 · **abstract-only verification 2026-06-24**

[^meiners2024]: doi:10.1038/s41598-024-55870-4 · Meiners F, Barrantes I (first/last) · *Sci Rep* 2024;14:5283 (verify) · in-silico · model: gene expression similarity analysis across approved senolytics · PL identified as top natural dasatinib-surrogate; PL + quercetin predicted to emulate D+Q combination by transcriptomic overlap; hypothesis-generating only · PMID 38491064 · **abstract-only verification 2026-06-24**

[^dotou2024]: doi:10.1021/acs.jnatprod.3c01195 · Dotou M, L'honoré A, Moumné R, El Amri C · *J Nat Prod* 2024;87(3):617–628 · review · amide alkaloids from Piper species as senomodulators; situates PL within broader alkaloid chemotype landscape · PMID 38436272 · volume/issue/pages verified against Crossref 2026-06-24; full PDF not re-read
