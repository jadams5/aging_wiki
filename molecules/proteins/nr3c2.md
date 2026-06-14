---
type: protein
aliases: [MR, mineralocorticoid receptor, NR3C2, aldosterone receptor, MCR, MLR]
uniprot: P08235
ncbi-gene: 4306
hgnc: HGNC:7979
ensembl: ENSG00000151623
genage-id: null
mouse-ortholog: Nr3c2
pathways: ["[[pathways/hpa-axis]]"]
hallmarks: ["[[hallmarks/chronic-inflammation]]", "[[hallmarks/altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 1
mr-causal-evidence: partial
caused-by: []
causes: ["[[phenotypes/hypertension]]", "[[phenotypes/cardiac-fibrosis]]", "[[phenotypes/chronic-kidney-disease]]", "[[phenotypes/heart-failure]]"]
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Canonical IDs (UniProt P08235, NCBI Gene 4306, HGNC:7979, Ensembl ENSG00000151623, mouse ortholog Nr3c2) verified against live UniProt REST API and NCBI Gene. RALES confirmed against PubMed abstract (PMID 10471456). EPHESUS confirmed against PubMed abstract (PMID 12668699) — corrected HR→RR and dual-primary-endpoint framing. EMPHASIS-HF confirmed against PubMed abstract (PMID 21073363). FIDELIO-DKD confirmed against PubMed abstract (PMID 33264825). FIGARO-DKD confirmed against PubMed abstract (PMID 34449181) — corrected randomized n from 7,352→7,437. FINEARTS-HF verified against full text (Solomon 2024 NEJM). Jhund 2024 IPD meta-analysis verified against full text — all HRs and OR confirmed. 11β-HSD2 gating mechanism: not independently re-verified against Farman 2001 or Funder 2007 primary source PDFs (closed-access; mechanism is well-established physiology). GenAge null status not independently re-checked against live HAGR database."
---

# NR3C2 (Mineralocorticoid Receptor)

The mineralocorticoid receptor (MR; gene *NR3C2*) is a nuclear hormone receptor and ligand-activated transcription factor that is the **highest-intervention-leverage** cardiorenal aging target covered in this batch of protein pages. Mineralocorticoid receptor antagonists (MRAs) — spanning steroidal (spironolactone, eplerenone) and nonsteroidal (finerenone, esaxerenone) generations — have FDA-approved or guideline-endorsed uses across the full cardiorenal aging phenotype cluster: heart failure with reduced ejection fraction (HFrEF), heart failure with preserved or mildly reduced ejection fraction (HFpEF/HFmrEF), resistant hypertension, and chronic kidney disease in type 2 diabetes. The 2024 Jhund et al. individual-patient meta-analysis (n=13,846; Lancet 2024) provides the highest-level synthesis that MRAs reduce cardiovascular death or HF hospitalization across HF subtypes, with the strongest benefit in HFrEF [^jhund2024].

MR binds both **aldosterone** and **cortisol** with high affinity (Kd ~0.5–1 nM for cortisol, comparable to aldosterone), but epithelial selectivity for aldosterone in the kidney and colon is conferred by co-expression of **11β-HSD2** — which locally inactivates cortisol to cortisone before it can occupy MR [^farman2001]. In non-epithelial tissues (heart, vasculature, brain, macrophages) where 11β-HSD2 is absent, cortisol is likely the dominant endogenous MR ligand, placing MR at the crossroads of the glucocorticoid and mineralocorticoid systems [^funder2007].

## Identity

- **UniProt:** P08235 (MCR_HUMAN)
- **NCBI Gene:** 4306
- **HGNC:** HGNC:7979
- **HGNC symbol:** NR3C2
- **Ensembl:** ENSG00000151623
- **Mouse ortholog:** Nr3c2 (NCBI Gene ID 110784; one-to-one ortholog)
- **GenAge ID:** null — NR3C2 does not have a confirmed GenAge/HAGR entry for aging-relevant genetic associations; aging relevance is pharmacological rather than GWAS-based. #gap/needs-canonical-id (GenAge re-check recommended on next lint pass)
- **Chromosomal location:** 4q31.23
- **Protein length:** 984 amino acids (canonical isoform)
- **Family:** Nuclear receptor superfamily, subfamily 3 (steroid receptors), group C (glucocorticoid/mineralocorticoid receptor sub-family). Sister paralogs: NR3C1 (GR), NR3C3 (PR), NR3C4 (AR).

## Domain organization and key PTMs

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal modulating domain (NTD) | 1–602 | Ligand-independent transactivation (AF-1 region); post-translational modification hub; contributes to context-specific gene regulation |
| DNA-binding domain (DBD) | 603–668 | Two C4-type zinc fingers; recognizes hormone response elements (HREs); dimerization interface |
| Hinge region | 669–725 | Nuclear localization signal; links DBD to LBD |
| Ligand-binding domain (LBD) | 726–984 | Binds aldosterone and cortisol with high affinity; AF-2 helix-12 repositions on ligand binding to recruit coactivators |

**Key phosphorylation sites (UniProt P08235):** Ser250, Ser259, Ser283, Ser287, Ser299 — in the NTD, collectively modulating transcriptional activity and protein stability. Sumoylation and acetylation have also been reported in the literature, though specific sites are less well characterized than for GR/NR3C1.

## Ligand binding and selectivity: the 11β-HSD2 gating mechanism

A critical point for understanding MR's role in aging pathology: MR does **not** preferentially bind aldosterone over cortisol in biochemical terms. Cortisol and aldosterone bind with similar high affinity in vitro. The physiological selectivity for aldosterone in **epithelial tissues** (kidney cortical collecting duct, colon, sweat glands) is conferred by co-expressed **11β-HSD2** (encoded by *HSD11B2*; UniProt P80365; see [[molecules/proteins/hsd11b1-hsd11b2]]) [^farman2001]:

- **11β-HSD2** rapidly oxidizes cortisol → inactive cortisone (using NAD+ as cofactor), preventing cortisol from occupying MR in the renal tubule.
- The net result: in mineralocorticoid-sensitive epithelial cells, only aldosterone (which is not a 11β-HSD2 substrate) activates MR.
- In tissues **lacking 11β-HSD2** — heart, vascular smooth muscle, endothelium, brain, immune cells — cortisol is the dominant MR ligand at physiological concentrations, given its ~1000-fold higher circulating concentration relative to aldosterone [^funder2007].

This 11β-HSD2 gating mechanism explains why excess cortisol (as in Cushing syndrome) or deficiency of 11β-HSD2 (as in apparent mineralocorticoid excess, AME) produces severe sodium retention and hypertension — the MR sees unimpeded cortisol in the kidney. It also means that **in aging**, as basal cortisol levels modestly rise and/or 11β-HSD2 activity declines, non-aldosterone MR activation in non-epithelial tissues may contribute to vascular and cardiac pathology even without primary aldosteronism [^funder2007].

## Signaling: epithelial vs non-epithelial MR

### Epithelial MR — sodium/potassium handling

In the cortical collecting duct (CCD) principal cells:
1. Aldosterone or cortisol (unimpeded when 11β-HSD2 is absent or overwhelmed) → binds MR in cytoplasm → receptor-chaperone complex dissociates → MR translocates to nucleus → binds hormone response element → transcriptional activation of:
   - **SGK1** (serum/glucocorticoid-regulated kinase 1; see [[molecules/proteins/sgk1]]) — the primary rapid effector; SGK1 phosphorylates and inhibits NEDD4-2, preventing ENaC ubiquitination and degradation → ENaC accumulates at apical membrane → increased Na+ reabsorption → secondary K+ and H+ secretion.
   - **ENaC subunits** (SCNN1A/B/G) — direct transcriptional upregulation.
   - **Na+/K+-ATPase** — increased basolateral pump activity sustains the electrochemical gradient.
2. Net effect: Na+ retention, K+ excretion, and blood pressure elevation.

### Non-epithelial MR — cardiac, vascular, immune

In **cardiomyocytes and cardiac fibroblasts**, MR activation by cortisol (dominant ligand in the heart) or aldosterone drives:
- Upregulation of collagen synthesis genes → interstitial **cardiac fibrosis** (see [[phenotypes/cardiac-fibrosis]]) [^frangogiannis2020]
- Activation of reactive oxygen species (ROS) generation → myocardial oxidative stress
- Modulation of ion channels (KCND3 and others) affecting cardiac electrophysiology

In **macrophages**, MR is expressed and promotes a pro-inflammatory phenotype. Fraccarollo et al. 2024 demonstrated in murine cardiac macrophages that MR activation accelerates a transcriptional "inflammaging" signature, linking MR to the macrophage contribution to cardiac aging [^fraccarollo2024].

In **vascular endothelium and smooth muscle**, MR activation:
- Impairs endothelial NO production → reduced vasodilation
- Promotes oxidative stress and NADPH oxidase activation → endothelial dysfunction
- Enhances angiotensin II receptor expression (AT1R) → amplified vasoconstriction

## Aging relevance

### Aldosterone excess, cortisol, and cardiorenal aging

In aging and in cardiorenal disease, the renin-angiotensin-aldosterone system (RAAS) frequently exhibits **aldosterone excess relative to suppressed renin** ("aldosterone escape" or primary aldosteronism in its subclinical forms). The clinical triad — hypertension, cardiac fibrosis, renal sodium retention — represents convergent MR overactivation in multiple tissue compartments.

Simultaneously, modest age-related increases in cortisol (and/or declines in 11β-HSD2 activity) amplify non-epithelial MR overactivation in the heart and vasculature independently of aldosterone.

The **cardiac fibrosis** pathway is mechanistically central:
- Aldosterone directly activates MR in cardiac fibroblasts → myofibroblast differentiation → excess collagen I/III deposition → interstitial fibrosis → diastolic dysfunction → **HFpEF** (see [[phenotypes/cardiac-fibrosis]] and [[phenotypes/heart-failure]]) [^frangogiannis2020]
- This pathway is the mechanistic basis for MRA anti-fibrotic efficacy

**Hypertension and vascular aging:** MR-mediated sodium retention and vascular dysfunction contribute to isolated systolic hypertension — the dominant hypertension phenotype in aging (see [[phenotypes/hypertension]]). MR antagonism reduces resistant hypertension significantly even in RAAS-treated patients [^funder2007].

**Renal aging/CKD:** Aldosterone-driven SGK1 overactivation in aged kidneys promotes ENaC-mediated Na+ retention and glomerulosclerosis. Elevated aldosterone is a risk factor for CKD progression and albuminuria independent of blood pressure [^bakris2020].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — MR/aldosterone/cortisol axis is fully conserved; drug trials are directly in humans |
| Phenotype conserved in humans? | Yes — HFrEF, HFpEF, hypertension, CKD all confirmed in major RCTs as MRA-responsive |
| Replicated in humans? | Yes — multiple Phase 3 RCTs across HF subtypes, CKD, and hypertension |

## Mendelian randomization evidence

`mr-causal-evidence: partial`

Direct Mendelian randomization studies using NR3C2 genetic instruments to establish causal effects of MR on aging phenotypes are sparse in the published literature (no major MR-polymorphism → cardiorenal outcome MR study confirmed via PubMed search). However, MR's causal role in human cardiorenal disease is effectively established by **treatment trials as experiments**: multiple large Phase 3 RCTs with pre-specified primary endpoints provide the strongest available causal evidence that MR blockade protects cardiorenal outcomes in humans [^pitt1999][^pitt2003][^zannad2011][^bakris2020][^pitt2021][^solomon2024]. The `partial` designation reflects absence of formal GWAS/MR studies; causal direction of MR → cardiorenal disease is not in serious scientific doubt given the RCT evidence base.

#gap/needs-replication (formal Mendelian randomization using NR3C2 polymorphisms as instruments for cardiorenal outcomes — would complement the RCT evidence base with an observational causal design)

## Pharmacology: MR antagonists across three generations

### First generation: spironolactone (steroidal; non-selective)

Spironolactone is a competitive MR antagonist with substantial off-target activity at the androgen receptor (AR) and progesterone receptor (PR), producing dose-limiting anti-androgenic effects (gynecomastia in men, menstrual irregularity in women) that limit use in younger patients.

**RALES (Pitt et al. 1999)** — the landmark trial: n=1,663 patients with severe HFrEF (EF <35%, NYHA class III–IV); spironolactone 25 mg/day vs placebo; median follow-up 24 months. Spironolactone reduced all-cause mortality RR=0.70 (95% CI 0.60–0.82; P<0.001) — a 30% mortality reduction [^pitt1999]. The trial was stopped early for overwhelming benefit. This established MRA as a pillar of HFrEF GDMT.

**Current use:** Standard-of-care in HFrEF (typically 25–50 mg/day); widely used for resistant hypertension (often 25–100 mg/day off-label); primary hyperaldosteronism (higher doses). Off-target effects limit use in some patients.

### Second generation: eplerenone (steroidal; selective)

Eplerenone is a selective MR antagonist with minimal AR/PR activity, improving the sex-hormone side-effect profile. It is less potent than spironolactone at MR (higher doses required).

**EPHESUS (Pitt et al. 2003)** — eplerenone in post-MI LV dysfunction: n=6,632 (3,319 eplerenone; 3,313 placebo); eplerenone 25–50 mg/day vs placebo; mean follow-up 16 months. The trial had two pre-specified primary endpoints: (1) all-cause mortality RR=0.85 (95% CI 0.75–0.96; P=0.008) and (2) cardiovascular death or hospitalization for CV events RR=0.87 (95% CI 0.79–0.95; P=0.002). Cardiovascular mortality RR=0.83 (95% CI 0.72–0.94; P=0.005) [^pitt2003]. Established MRA in acute MI with LV dysfunction.

**EMPHASIS-HF (Zannad et al. 2011)** — eplerenone in mild HFrEF (NYHA class II): n=2,737; eplerenone 25–50 mg/day; median follow-up 21 months. Primary composite (cardiovascular death or HF hospitalization): HR=0.63 (95% CI 0.54–0.74; P<0.001) — a 37% relative risk reduction [^zannad2011]. Confirmed MRA benefit even in mild HF, extending RALES findings.

**Current use:** Preferred over spironolactone in post-MI HFrEF (EPHESUS indication); used when spironolactone side-effects are dose-limiting.

### Third generation: finerenone (nonsteroidal; highly selective)

Finerenone is a next-generation nonsteroidal selective MR antagonist with ~500-fold selectivity for MR over other steroid receptors, no active metabolites accumulating in cardiac tissue (unlike steroidal MRAs which accumulate in heart, potentially causing off-target effects), and a shorter half-life favoring renal-sparing. Its chemical scaffold produces a distinctly different receptor-binding mode (no agonist activity) and tissue-distribution profile vs steroidal MRAs.

**FIDELIO-DKD (Bakris et al. 2020, NEJM)** — finerenone in CKD + type 2 diabetes (primary kidney endpoint): n=5,734; CKD stages 2–4 with severe albuminuria; finerenone 10–20 mg/day vs placebo; median follow-up 2.6 years. Primary composite (sustained ≥40% eGFR decline, kidney failure, or renal death): HR=0.82 (95% CI 0.73–0.93; P=0.001) [^bakris2020]. Finerenone became the first MRA with a specific indication for CKD in type 2 diabetes (FDA approved 2021).

**FIGARO-DKD (Pitt et al. 2021, NEJM)** — finerenone in CKD + type 2 diabetes (primary cardiovascular endpoint): n=7,437 randomized (3,686 finerenone; 3,666 placebo in the analysis); broader eGFR range including CKD stages 1–4 with varying albuminuria thresholds; finerenone 10–20 mg/day vs placebo; median follow-up 3.4 years. Primary composite (cardiovascular death, nonfatal MI, nonfatal stroke, or HF hospitalization): HR=0.87 (95% CI 0.76–0.98; P=0.03), driven largely by reduced HF hospitalization (HR=0.71; 95% CI 0.56–0.90) [^pitt2021].

**FINEARTS-HF (Solomon et al. 2024, NEJM)** — finerenone in HFmrEF/HFpEF (LVEF ≥40%): n=6,001 (3,003 finerenone, 2,998 placebo); finerenone 20–40 mg/day; median follow-up 32 months. Primary composite (total worsening HF events or cardiovascular death): rate ratio=0.84 (95% CI 0.74–0.95; P=0.007) [^solomon2024]. This was the first large RCT to demonstrate meaningful benefit of an MRA in HFpEF/HFmrEF — a landmark result given the prior failure of spironolactone in TOPCAT (partially explained by geographic heterogeneity in adjudication).

**Esaxerenone** (nonsteroidal; approved in Japan by PMDA for hypertension) is a separate nonsteroidal MRA with a similar selectivity profile to finerenone; no major cardiorenal outcome data yet. See #gap/long-term-unknown.

### Summary: Jhund 2024 Lancet IPD meta-analysis

Jhund et al. 2024 pooled individual patient data from four major MRA trials (RALES, EMPHASIS-HF, TOPCAT, FINEARTS-HF; n=13,846 total) [^jhund2024]:

- All MRA types: cardiovascular death or HF hospitalization HR=0.77 (95% CI 0.72–0.83)
- HFrEF (LVEF ≤35%; RALES + EMPHASIS-HF): HR=0.66 (95% CI 0.59–0.73) — substantial reduction
- HFmrEF/HFpEF (EF ≥40%; TOPCAT + FINEARTS-HF): HR=0.87 (95% CI 0.79–0.95) — meaningful HF hospitalization reduction; CV mortality not significantly reduced in this subgroup
- Hyperkalemia doubled with MRAs vs placebo (OR 2.27), though serious hyperkalemia (K+ >6.0 mEq/L) occurred in 2.9% vs 1.4% — the primary safety consideration

**Druggability-tier 1 justification:** Multiple FDA-approved MRA drugs exist with clear aging-context approvals: spironolactone and eplerenone are guideline-recommended in HFrEF (aging-relevant mortality-reducing indications); finerenone is FDA-approved for CKD in type 2 diabetes (2021, first indication of this type for an MRA); FINEARTS-HF supports emerging use in HFpEF (the dominant HF phenotype in elderly). This is a clear tier-1 case — drugs exist, are approved, and are deployed for aging-relevant cardiorenal disease endpoints.

## Druggability tier and aging-context note

**Tier: 1** (clinical drugs exist for aging-relevant cardiorenal indications)

This is one of the most robustly tier-1 proteins in the aging-wiki. The tier-1 designation is conservative per the schema convention (aging-context, not maximum druggability across all indications):

- Spironolactone and eplerenone are standard-of-care for HFrEF — a predominantly age-associated disease driving major mortality in adults 65+.
- Finerenone is FDA-approved (2021) for CKD in type 2 diabetes — an aging-predominant indication.
- FINEARTS-HF provides Phase 3 evidence supporting HFpEF/HFmrEF — the dominant HF phenotype of the elderly.
- Resistant hypertension, a major aging phenotype, is guideline-endorsed for spironolactone add-on therapy.

No other nuclear receptor in the aging context has this density of large positive RCTs in multiple aging phenotype domains.

## Connections to other aging hallmarks

### Chronic inflammation

In cardiac macrophages, MR promotes age-associated inflammatory gene expression ("inflammaging"). Fraccarollo et al. 2024 (Basic Res Cardiol) demonstrated that myeloid-specific MR activation drives macrophage polarization toward a pro-inflammatory, NLRP3-inflammasome-activating phenotype in aged mouse hearts — mechanistically linking MR to the [[hallmarks/chronic-inflammation]] hallmark [^fraccarollo2024].

### Altered intercellular communication

Aldosterone is a long-range endocrine signal whose dysregulated secretion in aging (aldosterone escape, primary aldosteronism spectrum) drives pathological paracrine and endocrine communication across tissue compartments — impaired vasodilation (endothelium → VSMC), fibroblast activation (cardiomyocyte SASP × aldosterone → cardiac fibroblasts), and renal tubular Na+ dyshomeostasis. This places MR at the intersection of [[hallmarks/altered-intercellular-communication]].

## Sodium restriction and lifestyle context

Dietary sodium restriction reduces the magnitude of aldosterone-driven MR activation in the kidney by lowering the Na+ gradient against which ENaC must work; however, in the context of disease (HF, CKD), sodium restriction acts synergistically with MRA therapy rather than substituting for it. See [[interventions/dietary/sodium-restriction]] for quantitative sodium reduction data. Sodium restriction alone does not substantially address the cardiac fibrotic or macrophage-inflammatory actions of MR in non-epithelial tissues.

## Pathway membership

- [[pathways/hpa-axis]] — MR is a critical node in the corticosteroid signaling network; receives cortisol (dominant non-epithelial ligand) from the adrenal axis
- [[molecules/proteins/nr3c1]] — GR (glucocorticoid receptor), the primary cortisol receptor at stress concentrations; MR and GR can form heterodimers and act on overlapping response elements (concurrent-seed sibling)
- [[molecules/proteins/hsd11b1-hsd11b2]] — 11β-HSD2 is the critical pre-receptor gating enzyme that confers aldosterone specificity in epithelial MR targets (concurrent-seed sibling)
- [[molecules/proteins/sgk1]] — the primary rapidly-induced downstream effector of MR in the kidney; mediates ENaC/NEDD4-2 phosphorylation and Na+ retention
- [[phenotypes/hypertension]] — major downstream phenotype; MRA reduces resistant hypertension
- [[phenotypes/cardiac-fibrosis]] — aldosterone/cortisol → fibroblast MR → collagen synthesis; MRA reduces cardiac fibrosis
- [[phenotypes/heart-failure]] — MRA mortality benefit proven across HFrEF (RALES, EMPHASIS-HF, EPHESUS) and HFpEF/HFmrEF (FINEARTS-HF)
- [[phenotypes/chronic-kidney-disease]] — finerenone approved for CKD in T2D; MR drives tubular Na+ retention and glomerulosclerosis amplification

## Limitations and gaps

- `#gap/needs-replication` — Formal Mendelian randomization studies using NR3C2 polymorphisms as genetic instruments for cardiorenal outcomes are absent from the published literature; the causal direction is established by RCTs but not by population genetics.
- `#gap/needs-human-replication` — The cardiac macrophage inflammaging mechanism (Fraccarollo 2024) is a murine study; human macrophage MR-driven inflammaging phenotypes have not been independently characterized in aged human cardiac biopsies.
- `#gap/long-term-unknown` — Esaxerenone's cardiorenal outcome evidence base is limited to hypertension trials; no Phase 3 outcome trial in HF or CKD completed as of 2026.
- `#gap/no-mechanism` — The precise mechanism by which finerenone's nonsteroidal scaffold reduces cardiac fibrosis vs steroidal MRAs in non-epithelial tissues is not fully characterized; proposed to relate to different tissue accumulation, no active cardiac metabolite, and binding kinetics, but not proven by head-to-head mechanistic studies.
- `#gap/contradictory-evidence` — TOPCAT trial (spironolactone in HFpEF): primary endpoint negative overall (HR=0.89; P=0.14), but post-hoc analyses suggested a real effect in patients enrolled in the Americas with confirmed elevated natriuretic peptides and documented hospitalization events; geographic heterogeneity complicates interpretation. FINEARTS-HF addressed this in a better-designed trial with positive results, but the discordance between TOPCAT and FINEARTS-HF is not fully mechanistically resolved.
- `#gap/needs-canonical-id` — GenAge ID for NR3C2 not confirmed; no entry identified in the HAGR GenAge database (aging relevance is pharmacological rather than GWAS/longevity-gene based).
- `#gap/dose-response-unclear` — Optimal finerenone dosing in HFpEF (20 vs 40 mg) and in CKD strata beyond FIDELIO/FIGARO enrollment criteria is not fully established.

## Cross-references

- [[pathways/hpa-axis]] — MR is embedded within the full corticosteroid signaling axis
- [[molecules/proteins/nr3c1]] — GR (NR3C1); paralog and heterodimerization partner; cortisol-receptor at stress concentrations
- [[molecules/proteins/hsd11b1-hsd11b2]] — 11β-HSD2 gates MR selectivity in epithelial tissues; 11β-HSD1 amplifies cortisol in adipose/liver
- [[molecules/proteins/crh]] — upstream of cortisol production; indirect MR ligand supply
- [[molecules/proteins/sgk1]] — direct MR transcriptional target; ENaC-mediated Na+ retention effector
- [[phenotypes/hypertension]] — major downstream phenotype; aldosterone-MR axis drives salt-sensitive hypertension
- [[phenotypes/cardiac-fibrosis]] — aldosterone/MR → fibroblast activation → collagen; MRA anti-fibrotic mechanism
- [[phenotypes/heart-failure]] — MRA mortality benefit across HF spectrum (RALES → FINEARTS-HF)
- [[phenotypes/chronic-kidney-disease]] — finerenone CKD indication; aldosterone-SGK1-ENaC axis in tubular injury
- [[interventions/dietary/sodium-restriction]] — synergistic with MRA; reduces aldosterone demand; does not substitute for cardiac/renal MRA action
- [[hallmarks/chronic-inflammation]] — cardiac macrophage MR inflammaging link
- [[hallmarks/altered-intercellular-communication]] — aldosterone as dysregulated endocrine signal in aging

## Footnotes

[^farman2001]: doi:10.1152/ajprenal.2001.280.2.F181 · Farman N, Rafestin-Oblin ME · *Am J Physiol Renal Physiol* 2001;280(2):F181–192 · review · mechanism of mineralocorticoid selectivity in epithelial vs non-epithelial tissues; 11β-HSD2 as the pre-receptor cortisol inactivation enzyme in kidney and colon; MR binds cortisol and aldosterone with similar high affinity; in tissues lacking 11β-HSD2, cortisol is the dominant physiological MR ligand at its ~1000-fold higher circulating concentration · model: human and rodent data synthesis

[^funder2007]: doi:10.1007/s11906-007-0020-8 · Funder JW · *Curr Hypertens Rep* 2007;9(3):222–226 · review · why MR is nonselective; cortisol and aldosterone bind with similar Kd; 11β-HSD2 gating in epithelial tissues; implications for non-epithelial MR activation by cortisol in aging and stress; cortisol-driven cardiac MR activity · model: human physiology review

[^pitt1999]: doi:10.1056/NEJM199909023411001 · Pitt B et al. (Randomized Aldactone Evaluation Study Investigators) · *N Engl J Med* 1999;341(10):709–717 · RCT · n=1,663 (822 spironolactone; 841 placebo); severe HFrEF EF <35%, NYHA III–IV; spironolactone 25 mg/day; median follow-up 24 months; all-cause mortality RR=0.70 (95% CI 0.60–0.82; P<0.001); 30% mortality reduction; trial stopped early; 46% placebo deaths vs 35% spironolactone deaths · model: human HFrEF RCT

[^pitt2003]: doi:10.1056/NEJMoa030207 · Pitt B, Remme W, Zannad F et al. (EPHESUS) · *N Engl J Med* 2003;348(14):1309–1321 · RCT · n=6,632 (3,319 eplerenone; 3,313 placebo); post-acute MI LV dysfunction (EF ≤40%) and HF or diabetes; eplerenone 25–50 mg/day vs placebo; two pre-specified primary endpoints: (1) all-cause mortality RR=0.85 (95% CI 0.75–0.96; P=0.008) and (2) CV death or CV hospitalization RR=0.87 (95% CI 0.79–0.95; P=0.002); CV mortality RR=0.83 (95% CI 0.72–0.94; P=0.005); note: EPHESUS reported relative risks, not hazard ratios; selective MR antagonist with minimal anti-androgen effects; established MRA in post-MI LV dysfunction · model: human RCT (post-MI HFrEF)

[^zannad2011]: doi:10.1056/NEJMoa1009492 · Zannad F, McMurray JJV, Krum H et al. (EMPHASIS-HF) · *N Engl J Med* 2011;364(1):11–21 · RCT · n=2,737; mild HFrEF (NYHA II, EF ≤35%); eplerenone 25–50 mg/day vs placebo; median follow-up 21 months; primary composite CV death or HF hospitalization HR=0.63 (95% CI 0.54–0.74; P<0.001); 37% relative risk reduction; all-cause mortality HR=0.76; confirmed MRA benefit in mild symptomatic HFrEF; trial stopped early · model: human RCT (mild HFrEF)

[^bakris2020]: doi:10.1056/NEJMoa2025845 · Bakris GL, Agarwal R, Anker SD et al. (FIDELIO-DKD) · *N Engl J Med* 2020;383(23):2219–2229 · RCT · n=5,734 (2,833 finerenone; 2,841 placebo); CKD stages 2–4 eGFR 25 to <60 mL/min/1.73m² (or <75 with high albuminuria) + T2D; finerenone 10–20 mg/day; median follow-up 2.6 years; primary composite (sustained ≥40% eGFR decline, kidney failure, or renal death) HR=0.82 (95% CI 0.73–0.93; P=0.001); first MRA with dedicated CKD indication; FDA approved 2021 for CKD in T2D · model: human RCT (CKD+T2D)

[^pitt2021]: doi:10.1056/NEJMoa2110956 · Pitt B, Filippatos G, Agarwal R et al. (FIGARO-DKD) · *N Engl J Med* 2021;385(24):2252–2263 · RCT · n=7,437 randomized (3,686 finerenone; 3,666 placebo in analysis); CKD stages 1–4 + T2D; eGFR 25–90 ml/min/1.73m² with albuminuria 30–5000 mg/g; finerenone 10–20 mg/day vs placebo; median follow-up 3.4 years; primary composite (CV death, nonfatal MI, nonfatal stroke, HF hospitalization) HR=0.87 (95% CI 0.76–0.98; P=0.03); driven by HF hospitalization reduction HR=0.71 (95% CI 0.56–0.90); complementary cardiovascular endpoint to FIDELIO kidney endpoint · model: human RCT (CKD+T2D)

[^solomon2024]: doi:10.1056/NEJMoa2407107 · Solomon SD, McMurray JJV, Claggett B et al. (FINEARTS-HF) · *N Engl J Med* 2024;391(16):1475–1485 · RCT · n=6,001 (3,003 finerenone; 2,998 placebo); HFmrEF/HFpEF (LVEF ≥40%); finerenone 20–40 mg/day vs placebo; median follow-up 32 months; primary composite (total worsening HF events + CV death) rate ratio=0.84 (95% CI 0.74–0.95; P=0.007); first large positive MRA trial in HFpEF; nonsteroidal scaffold; complements the TOPCAT null result · model: human Phase 3 RCT (HFmrEF/HFpEF)

[^jhund2024]: doi:10.1016/S0140-6736(24)01733-1 · Jhund PS, Talebi A, Henderson AD et al. · *Lancet* 2024;404(10458):1119–1131 · individual patient-level meta-analysis · n=13,846 across four trials (RALES, EMPHASIS-HF, TOPCAT, FINEARTS-HF); MRAs vs placebo; composite CV death or HF hospitalization HR=0.77 (95% CI 0.72–0.83); HFrEF HR=0.66; HFmrEF/HFpEF HR=0.87; hyperkalemia OR=2.27 (2.9% vs 1.4% serious); differential efficacy by EF subtype (p-interaction=0.0012); highest-level evidence synthesis for MRA class across HF spectrum

[^fraccarollo2024]: doi:10.1007/s00395-024-01032-6 · Fraccarollo D et al. · *Basic Res Cardiol* 2024 · PMID 38329499 · in-vivo (murine) · mineralocorticoid receptor promotes cardiac macrophage inflammaging; myeloid-specific MR activation drives NLRP3-inflammasome-activating pro-inflammatory phenotype in aged mouse hearts; links MR to the macrophage contribution to cardiac aging and the chronic-inflammation hallmark · model: mus-musculus (murine cardiac macrophages)

[^frangogiannis2020]: doi:10.1093/cvr/cvaa324 · Frangogiannis NG · *Cardiovasc Res* 2021;117(6):1450–1488 · review · mechanistic review of cardiac fibrosis; aldosterone acts directly on cardiac fibroblast MR to upregulate collagen synthesis; RAAS-MR axis as pro-fibrotic driver; MRA anti-fibrotic mechanism · model: human + animal data synthesis
