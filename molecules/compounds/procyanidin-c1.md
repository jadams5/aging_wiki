---
type: compound
aliases: [PCC1, procyanidin C-1, proanthocyanidin trimer, grape seed trimer]
pubchem-cid: 169853
chembl-id: CHEMBL290632
drugbank-id: null
cas-number: 37064-30-5
molecular-formula: C45H38O18
molecular-weight-da: 866.8
administration-route: oral
biologic: false
mechanisms: [senolytic, senomorphic, antioxidant, ros-induction]
targets: []
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
clinical-stage: preclinical
human-evidence-level: preclinical-only
translation-gap: phase-3-rct-needed
next-experiment: "Randomized placebo-controlled Phase 2 dose-escalation trial of oral PCC1 (or a standardized GSE preparation verified for PCC1 content) with circulating p16/p21 + SASP-panel primary endpoint and one hard functional outcome (e.g., 6MWD or grip strength), n≥80, in frail older adults — analogous to the TROFFi design for fisetin."
clinical-trials-active: 1
literature-checked-through: 2026-06-24
verified: true
verified-date: 2026-06-24
verified-by: claude
verified-scope: "Xu 2021 primary source verified against full PDF (doi:10.1038/s42255-021-00491-8). Secondary citations verified against PubMed metadata (DOIs resolved, titles/journals/years confirmed). ChEMBL activity data confirmed (no BCL-2/BCL-xL binding entries). PubChem identity fields confirmed. CAS resolved from PubChem synonyms. NCT06641869 status confirmed via ClinicalTrials.gov API."
---

# Procyanidin C1 (PCC1)

A **B-type procyanidin trimer** (three epicatechin units linked 4β→8) found in grape seed extract (GSE), cocoa, cinnamon, cacao, apple peel, pine bark, and other polyphenol-rich plant sources. Identified in 2021 as a natural **senotherapeutic** — uniquely exhibiting dual dose-dependent activity: **senomorphic** (SASP suppression) at low doses and **senolytic** (selective killing of senescent cells) at high doses [^xu2021]. PCC1 is the only natural compound currently demonstrated to both clear senescent cells and extend lifespan in naturally-aged mice in a single study. It occupies a distinct mechanistic niche from the flavonol senolytics [[fisetin]] and [[quercetin]] and from the BH3-mimetic class ([[navitoclax]]). No human senolytic trial for PCC1 as a purified compound exists as of 2026-06-24.

## Identity

- **PubChem CID:** 169853 (confirmed)
- **ChEMBL ID:** CHEMBL290632 (confirmed; max phase null — no clinical indication)
- **InChIKey:** MOJZMWJRUKIQGL-XILRTYJMSA-N (confirmed via PubChem)
- **CAS:** 37064-30-5 (resolved from PubChem synonyms)
- **Molecular formula:** C₄₅H₃₈O₁₈ (confirmed via PubChem)
- **Molecular weight:** 866.8 Da (confirmed via PubChem)
- **Class:** B-type proanthocyanidin (flavan-3-ol trimer); epicatechin × 3, B-type 4β→8 linkages
- **Source:** Grape seed extract (main commercial/research source); also cocoa, cinnamon, apple peel, hawthorn, pine bark [^xu2021]

## Mechanism of action

### Dose-dependent dual mode

Xu et al. 2021 (*Nature Metabolism*) [^xu2021] screened a natural product medicinal library (phytochemical PDMA library, 46 plant-derived medicinal products) and identified PCC1 as the primary active senotherapeutic agent in GSE. The defining mechanistic feature is **concentration-dependent switching**, established in the human prostate stromal cell line PSC27 (a bleomycin-senescence model) [^xu2021]:

| Dose regime | Concentration range (in vitro) | Phenotype | Primary mechanism |
|---|---|---|---|
| Low (senomorphic) | ~0.1875 µg/ml GSE equivalent; PCC1 sub-senolytic | Suppresses SASP without killing senescent cells | NF-κB and SASP signature suppression; downregulation of IL-6, CXCL8, MMP3, SPINK1, WNT16B, GM-CSF (CSF2), IL-1A, AREG |
| High (senolytic) | PCC1 ≥50 µM (onset); ~200 µM threshold for maximal effect; cytotoxicity to non-senescent cells only at ≥600 µM | Selectively kills senescent cells | Elevated intracellular ROS; mitochondrial membrane potential (Δψm) collapse; cytochrome c release; caspase 3/7 activation; upregulation of NOXA (PMAIP1) and PUMA (BBC3) |

At 50 µM PCC1, proliferating control cells remain largely unaffected. At 200 µM, the survival rate of senescent cells approaches minimum (threshold for maximal senolysis). Control cell toxicity appears only at ≥600 µM. Caspase 3/7 activity reaches a plateau at approximately 24 hours [^xu2021].

### Senolytic mechanism: ROS-driven mitochondrial apoptosis

Unlike [[fisetin]] (PI3K/AKT pathway) or [[quercetin]] (EFNB1/BCL-xL pathway), PCC1 at senolytic doses preferentially increases intracellular ROS and disrupts mitochondrial membrane potential (Δψm) **specifically in senescent cells** [^xu2021]. The mechanism is caspase-dependent: PCC1 senolytic activity is blocked by the pan-caspase inhibitor QVD-OPh, confirming apoptosis as the primary mode of senescent cell death. The key mediators are transcriptional upregulation of **NOXA (PMAIP1)** and **PUMA (BBC3)** — two BH3-only pro-apoptotic factors — in senescent cells treated with PCC1 [^xu2021]. BCL-2 protein levels are actually *decreased* in senescent cells, and BCL-xL is not upregulated; PCC1 does not act by directly inhibiting BCL-2 or BCL-xL. **ChEMBL (CHEMBL290632) carries no binding or activity data for PCC1 against BCL-2 (CHEMBL5145) or BCL-xL (CHEMBL4005) — confirmed by API query 2026-06-24.** Senescent cells' selective vulnerability is attributed to their depolarized plasma membranes and elevated concentrations of H⁺ [^xu2021].

Additional target identified by Li et al. 2026 [^li2026]: heat shock protein 90 (HSP90) identified via target identification in a vascular senescence model — suppresses arachidonic acid metabolism and downstream pro-inflammatory mediators. Whether HSP90 binding is a primary senolytic target or a secondary effect remains to be determined. #gap/no-mechanism

### Senomorphic mechanism: SASP suppression at low dose

At sub-senolytic concentrations, PCC1 suppresses [[sasp|SASP]] factor output without triggering senescent-cell apoptosis. Xu 2021 showed that low-dose GSE/PCC1 suppresses NF-κB signalling and the SASP gene-expression signature, with GSE at 0.1875 µg/ml achieving maximal SASP suppression in vitro [^xu2021]. The specific SASP factors downregulated include: IL-6, CXCL8 (IL-8), MMP3, SPINK1, WNT16B, GM-CSF (CSF2), IL-1A, AREG [^xu2021]. The molecular route is not fully characterized. Mechanistic studies in the hematopoietic system (Liu 2025, *NPJ Aging*) show PCC1 counteracts aging-related changes in hematopoietic and immune cells using single-cell RNA sequencing, including geroprotective effects on senescence and inflammatory signatures [^liu2025scRNA].

## Effects on aging hallmarks

| Hallmark | Effect | Evidence level |
|---|---|---|
| [[cellular-senescence]] | Dose-dependent clearance or SASP suppression; confirmed in irradiated, implanted-senescent, and naturally-aged mice | Mouse in-vivo [^xu2021] |
| [[chronic-inflammation]] | SASP factor reduction (IL-6, IL-8, MMPs, GROα); vascular inflammation reduction via TLR2/NF-κB suppression | Mouse in-vivo [^xu2021] [^li2026] |
| [[altered-intercellular-communication]] | Depletion of senescent cells in tumor microenvironment; reduced paracrine senescence signaling | Mouse in-vivo [^xu2021] |
| [[stem-cell-exhaustion]] | Improved hematopoietic stem cell proportions; increased B cell representation in aged mice | Mouse in-vivo scRNA-seq [^liu2025scRNA] |

## Dose-response evidence

| Study | Organism | Subjects | Dose | Route | Key finding |
|---|---|---|---|---|---|
| Xu 2021 [^xu2021] | PSC27 human stromal cells (in vitro) | Biological replicates n=3 | PCC1 ≥50 µM senolytic onset; ≥200 µM threshold; cytotoxicity to control cells only ≥600 µM | Cell culture medium | Senolytic: dose-dependent selective senescent cell killing; proliferating cells unaffected up to 400 µM |
| Xu 2021 [^xu2021] | WBI C57BL/6J male mice (in vivo, irradiated) | WBI-vehicle n=10; WBI-PCC1 n=10 per group; naïve n=10 | 20 mg/kg i.p., once weekly, for ~4 months (30–90 d post-WBI) | i.p. injection | Reduced SA-β-Gal+ cells in cardiac/pulmonary tissue; restored physical function; median disease-free interval: vehicle 136 d vs PCC1 220 d; HR 11.41 (95% CI 3.30–39.49), p<0.0001 |
| Xu 2021 [^xu2021] | NOD-SCID mice (tumor-bearing, chemotherapy model) | n=10 per arm | MIT 0.2 mg/kg i.p. alone vs + PCC1 20 mg/kg i.p. biweekly | i.p. injection | MIT+PCC1 reduced tumour volume 74.9% vs placebo (vs 44.0% for MIT alone); median bulky-disease-free survival: vehicle 70.5 d, MIT 92.5 d, PCC1 77 d, MIT+PCC1 137 d |
| Xu 2021 [^xu2021] | Naturally-aged C57BL/6J mice (both sexes) — **lifespan cohort** | n=91 PCC1 (48 M, 43 F); n=80 vehicle (42 M, 38 F); starting age 24–27 months | 20 mg/kg oral, biweekly until natural death | Oral gavage | Median post-treatment survival: vehicle 123 d, PCC1 202 d (+64.2%); whole-life median survival: vehicle 843 d, PCC1 922 d (+9.4%); mortality hazard 65.0% lower (HR 0.35, 95% CI 0.2387–0.5132, p<0.0001) |
| Xu 2021 [^xu2021] | 20-month-old C57BL/6J male mice (4-month treatment) | n=5 per group for physical function; n=3 independent biological replicates for SASP | 20 mg/kg i.p. biweekly for 4 months (20–24 months of age) | i.p. injection | Improved maximal walking speed, hanging endurance, grip strength, treadmill endurance, daily activity; reduced SA-β-Gal+ cells in kidney; reduced lung SASP expression |
| Liu 2024 [^liu2024retina] | Naturally-aged mice | Not specified in abstract; in-vivo + scRNA-seq | Long-term treatment | Oral (presumed) | Ameliorated retinal structural and functional decline; scRNA-seq characterized senescence burden reduction in defined retinal cell populations |
| Shao 2024 [^shao2024] | Bleomycin-induced pulmonary fibrosis mouse | Not specified in abstract | Not specified in abstract | Not specified | Reduced lung fibrosis by promoting apoptosis of senescent myofibroblasts via PUMA/BAX pathway upregulation |
| NCT06641869 [^nct06641869] | Healthy women aged 45–65 | n=74 | 2.5 mg or 5 mg/day | Oral | Skin rejuvenation endpoints (TEWL, wrinkle reduction, texture) — completed August 2024; **no results posted** to ClinicalTrials.gov as of 2026-06-24 |

#gap/needs-replication — All in-vivo efficacy data from the landmark paper (Xu 2021) derives from a single research group. Independent replication in a second laboratory has not been published as of 2026-06-24. #gap/needs-human-replication — No human senolytic efficacy data for purified PCC1.

## Human evidence

**Status:** No completed placebo-controlled human trial has reported a senolytic or geroprotective endpoint for purified PCC1.

**Registered trials:**
- **NCT06641869** — "A 12-week, Randomized, Open-label Study of PCC1 in Healthy Volunteers for Skin Rejuvenation" · 74 healthy women aged 45–65 · 2.5 mg vs 5 mg vs placebo oral daily · primary endpoints: trans-epidermal water loss, wrinkle reduction, skin texture · sponsored by Express Rx, Inc; started October 2022, **completed August 2024; no results posted to ClinicalTrials.gov as of 2026-06-24** [^nct06641869]. This was a skin-focused cosmetic endpoint trial — not a senolytic-aging primary endpoint. The doses tested (2.5–5 mg/day) are orders of magnitude below the mouse-equivalent senolytic dose; results will primarily inform tolerability and skin biomarker effects rather than systemic senolysis.

**Grape seed extract (GSE) — important caveat:** GSE is widely available as a supplement and has been studied in cardiovascular and antioxidant contexts in humans, but GSE trials have not standardized PCC1 content or dose. GSE contains a mixture of procyanidins (B1, B2, C1, and others); a GSE trial is not a PCC1 senolytic trial. PCC1-specific senolytic human evidence is effectively absent. #gap/needs-human-replication

## Pharmacokinetics and bioavailability

**Oral bioavailability of procyanidins is poor and poorly characterized.** The molecular weight of PCC1 (866.8 Da) substantially exceeds the Lipinski ~500 Da limit for oral drug absorption, which is expected to limit intestinal permeability. Procyanidin trimers are subject to colonic microbial degradation to smaller phenolic acids, which may carry downstream bioactivity but are pharmacologically distinct from the parent compound.

No dedicated PCC1 PK study in humans or rodents has been published. The human NCT06641869 trial used 2.5–5 mg/day without published PK sampling. Compare to [[fisetin]] (MW 286 Da), which itself achieves only <5% oral bioavailability — PCC1 at 866 Da is likely more constrained. #gap/dose-response-unclear

**Implication for translation:** The dose-response switch identified by Xu 2021 (senomorphic at low concentration, senolytic at high concentration in cell culture) may not be pharmacologically achievable via oral administration at any practical human dose. This is a primary translation barrier distinct from the clinical-trial gap. #gap/dose-response-unclear

## Senolytic roster context

PCC1 occupies the "natural senolytic" category alongside [[fisetin]] and [[quercetin]] (the D+Q combination partner), but differs in its proposed mechanism:

| Compound | Class | Primary SCAP target | Senolytic human trials |
|---|---|---|---|
| [[dasatinib]] | TKI | Ephrin/EPH receptors (preadipocytes) | Yes — D+Q in Phase 2 |
| [[quercetin]] | Flavonol | BCL-xL / EFNB1 (HUVECs) | Yes — D+Q |
| [[fisetin]] | Flavonol | PI3K/AKT pathway | Yes — 17 active trials |
| Procyanidin C1 | Proanthocyanidin trimer | ROS/mitochondria + NOXA/PUMA upregulation (BCL-2/BCL-xL direct binding not confirmed) | No dedicated senolytic trial |

PCC1 is the most structurally complex (MW 866 Da vs fisetin 286 Da) and has the least human-translational data of the named natural senolytics. Its dual-mode activity is a distinctive mechanistic feature not shared by the other natural senolytics.

## Emerging applications (2024–2026)

**Retinal aging (Liu 2024, *PNAS*)** [^liu2024retina]: Long-term PCC1 treatment ameliorated structural and functional decline in naturally-aged mouse retinas, with single-cell RNA sequencing demonstrating senescence burden reduction in defined retinal cell populations. Establishes a potential ophthalmology application.

**Pulmonary fibrosis (Shao 2024, *FASEB J*)** [^shao2024]: PCC1 attenuated bleomycin-induced lung fibrosis by selectively promoting apoptosis in senescent myofibroblasts via PUMA/BAX pathway upregulation. Extends the senolytic application beyond the canonical adipose/immune contexts.

**Renal fibrosis (Gan 2025, *FASEB J*)** [^gan2025renal]: PCC1 alleviates renal fibrosis by promoting apoptosis of senescent renal tubular epithelial cells. Senescent TECs accumulate in chronic kidney disease; PCC1 senolysis reduced fibrosis in a mouse model.

**Hematopoietic + immune system (Liu 2025, *NPJ Aging*)** [^liu2025scRNA]: Single-cell RNA sequencing in aged mice showed PCC1 counteracts aging-related changes in hematopoietic and immune system (HIS) cells, with both senolytic and senomorphic effects. Suggests systemic geroprotection extending beyond the original cancer/frailty context.

**Ocular neovascularization — drug delivery (Zhou 2026, *Advanced Science*)** [^zhou2026]: An ROS-responsive PCC1-loaded hydrogel (PCC1/PHCF-Gel) delivered intraocularly outperformed anti-VEGF in oxygen-induced retinopathy and choroidal neovascularization mouse models, demonstrating senolytic-mediated anti-angiogenic effects. Relevant to AMD-type pathology; senescent CXCR4⁺ endothelial cells and IFITM3⁺ microglia were selectively cleared.

**Vascular / atherosclerosis (Li 2026, *Food Research International*)** [^li2026]: In ApoE⁻/⁻ mice + D-galactose senescence model, PCC1 from hawthorn modulated the metabolic-inflammatory axis, suppressed arachidonic acid metabolism enzymes, inhibited TLR2/NF-κB, enhanced eNOS phosphorylation, and reduced vascular senescence burden. HSP90 identified as a direct binding target.

**Skin-aging / MAPK/AMPK (Zhang 2025, *J Food Science*)** [^zhang2025]: NSPCC1, a PCC1-rich grape-seed extract, counteracted UV- and D-galactose-induced skin aging in mice via MAPK and AMPK pathway modulation. Distinct from systemic senolytic use; relevant to topical/cosmetic applications.

**Cancer combinatorial context:** Xu 2021 [^xu2021] demonstrated clearance of therapy-induced senescent (TIS) cells from tumor microenvironments and reduced chemotherapy-associated tumor relapse — an application parallel to the dasatinib+quercetin chemotherapy-safety work. Chen 2026 (*Advanced Science*) [^advsci2026] showed FUCA2-high lung adenocarcinoma responds to low-dose capivasertib (AKT inhibitor)-induced senescence combined with PCC1 senolysis with potent preclinical tumor suppression across multiple models, proposing a FUCA2-guided drug repurposing strategy for LUAD.

## Classification

- **SENS strategy:** [[sens-damage-categories|ApoptoSENS]] — dual senolytic/senomorphic
- **Primary hallmark target:** [[cellular-senescence]]
- **Drug class:** [[interventions/pharmacological/senolytics]] (natural proanthocyanidin trimer)
- **Source:** grape seed extract (most-studied commercial source)

## Limitations and gaps

1. **Single-group replication gap.** The entire senolytic evidence base derives from Xu 2021 and follow-on work from overlapping research groups. No independent laboratory has replicated the lifespan extension or senolytic dose-response curve. #gap/needs-replication

2. **No human senolytic trial.** The single completed human trial (NCT06641869) used sub-senolytic cosmetic doses and was not designed or powered to detect senolytic activity. #gap/needs-human-replication

3. **Dose-response threshold unknown in vivo.** Xu 2021's concentration-switch was established in cell culture. Whether oral PCC1 achieves senolytic concentrations in any tissue in vivo — in mice or humans — has not been established by PK studies. At MW 866 Da, oral bioavailability is predicted to be severely limited. #gap/dose-response-unclear

4. **Mechanism specificity contested.** HSP90 (Li 2026), ROS/mitochondria via NOXA/PUMA upregulation (Xu 2021) are proposed targets. BCL-2/BCL-xL direct binding is NOT supported by ChEMBL data (zero activity entries for CHEMBL290632 against BCL-2 or BCL-xL confirmed 2026-06-24). The relative contributions of ROS induction, NOXA/PUMA upregulation, and HSP90 binding at in-vivo-achievable concentrations are not resolved. #gap/no-mechanism

6. **No standardized PCC1 assay for GSE.** Commercial grape seed extracts vary widely in procyanidin profile; PCC1 content is rarely specified. Human use of "GSE as a PCC1 source" requires verified analytical profiling. #gap/dose-response-unclear

7. **Long-term safety unknown.** No chronic safety data in humans; at senolytic doses, transient ROS elevation could theoretically affect non-senescent mitochondria. #gap/long-term-unknown

## Extrapolation table

| Dimension | Status |
|---|---|
| Pathway (senolytic ROS/NOXA/PUMA/mitochondrial) conserved in humans? | partial — ROS vulnerability and NOXA/PUMA-mediated apoptosis pathway conserved in human senescent cells (in vitro; PSC27, HUVECs, MSCs); not demonstrated in human tissue in vivo |
| Phenotype (senescent cell clearance) conserved in humans? | unknown — no in-vivo human data; Xu 2021 is entirely murine |
| Replicated in humans? | no |

## Footnotes

[^xu2021]: doi:10.1038/s42255-021-00491-8 · Xu Q, Fu Q, Li Z, Liu H, Wang Y, Lin X, He R, Zhang X, Ju Z, Campisi J, Kirkland JL, Sun Y · *Nature Metabolism* 2021 Dec;3(12):1706–1726 · PMID 34873338 · PMC8688144 · in-vivo (mouse: aged, irradiated, implanted-senescent, tumor-bearing) + in-vitro · model: naturally-aged C57BL/6J and multiple senescence models · Verified against full PDF 2026-06-24. PCC1 senomorphic (SASP suppression) at sub-50 µM; senolytic onset at 50 µM; maximal senolysis ~200 µM; control-cell toxicity only ≥600 µM. Lifespan extension: naturally-aged C57BL/6J mice (n=91 PCC1, n=80 vehicle, 24–27 months at start, both sexes, 20 mg/kg oral biweekly); median post-treatment survival +64.2% (vehicle 123 d, PCC1 202 d); whole-lifespan median survival +9.4% (vehicle 843 d, PCC1 922 d); HR 0.35 (95% CI 0.2387–0.5132, p<0.0001). Senolytic mechanism: NOXA/PUMA upregulation → ROS elevation → Δψm collapse → cytochrome c release → caspase 3/7 activation. Direct BCL-2/BCL-xL binding not demonstrated.

[^liu2024retina]: doi:10.1073/pnas.2311028121 · Liu Y, Liu X, Chen X et al. · *Proc Natl Acad Sci USA* 2024 Apr 30;121(18):e2311028121 · PMID 38657052 · in-vivo (naturally-aged mice) + single-cell RNA sequencing · model: aged mouse retina · PCC1 ameliorated retinal structural and functional decline; scRNA-seq characterized senescence burden reduction in defined retinal cell populations · abstract only; full PDF not verified

[^shao2024]: doi:10.1096/fj.202302547RR · Shao M, Qiu Y, Shen M et al. · *FASEB Journal* 2024 · PMID 38953707 · in-vivo (bleomycin mouse model) · PCC1 inhibits bleomycin-induced pulmonary fibrosis by selective clearance of senescent cells; PUMA/BAX pathway upregulation · abstract only; full PDF not verified

[^gan2025renal]: doi:10.1096/fj.202402558R · Gan Y, Wang K, Chen X et al. · *FASEB Journal* 2025 · PMID 39878685 · in-vivo (mouse renal fibrosis model) · PCC1 alleviates renal fibrosis by promoting apoptosis of senescent renal tubular epithelial cells · abstract only; full PDF not verified

[^liu2025scRNA]: doi:10.1038/s41514-025-00222-3 · Liu X, Liu Y, Gao Y et al. · *NPJ Aging* 2025 · PMID 40316527 · in-vivo (aged mice) + single-cell RNA sequencing · PCC1 counteracts aging-related changes in hematopoietic and immune system via senolytic and senomorphic effects; scRNA-seq characterizes geroprotective cellular mechanisms · abstract only; full PDF not verified

[^li2026]: doi:10.1016/j.foodres.2025.118224 · Li M, Si J, Xie P et al. · *Food Research International* 2026 · PMID 41652755 · in-vivo (ApoE⁻/⁻ mice + D-galactose senescence model; PCC1 from hawthorn) · PCC1 modulates metabolic-inflammatory axis, suppresses arachidonic acid metabolism enzymes, inhibits TLR2/NF-κB, enhances eNOS phosphorylation; HSP90 identified as direct binding target · abstract only; full PDF not verified

[^zhang2025]: doi:10.1111/1750-3841.70620 · Zhang Z, Xue Z, Wang Y et al. · *Journal of Food Science* 2025 · PMID 41320742 · in-vivo (UV + D-galactose mouse skin aging) · NSPCC1 (PCC1-rich GSE) counteracts skin aging via MAPK and AMPK pathway modulation · abstract only; full PDF not verified

[^zhou2026]: doi:10.1002/advs.202523495 · Zhou Y, Chen T, Liu P et al. · *Advanced Science* 2026 · PMID 41698122 · in-vivo (oxygen-induced retinopathy + choroidal neovascularization mouse models) · PCC1/PHCF-Gel ROS-responsive hydrogel outperformed anti-VEGF; scRNA-seq showed selective clearance of CXCR4⁺ endothelial cells and IFITM3⁺ microglia · abstract only; full PDF not verified

[^advsci2026]: doi:10.1002/advs.202523667 · Chen L, Guo J, Li F et al. · *Advanced Science* 2026 · PMID 42299774 · in-vivo/in-vitro (lung adenocarcinoma models) · FUCA2-ErbB3-AKT pathway identified as senescence suppressor in LUAD; low-dose capivasertib (AKT inhibitor) induced senescence in FUCA2-high LUAD; combination with PCC1 senolysis achieved potent low-toxicity tumor suppression across multiple preclinical models · abstract only; full PDF not verified

[^nct06641869]: NCT06641869 · Industry-sponsored (Express Rx, Inc) · "A 12-week, Randomized, Open-label Study of PCC1 in Healthy Volunteers for Skin Rejuvenation" · started October 10, 2022; completed August 10, 2024 · n=74 healthy women aged 45–65 · arms: 2.5 mg/day vs 5 mg/day vs placebo oral PCC1 · primary outcomes: TEWL (skin barrier function), wrinkle reduction (3D imaging), skin texture and radiance · **no results posted to ClinicalTrials.gov as of 2026-06-24**; doses are orders of magnitude below mouse-equivalent senolytic range
