---
type: protein
aliases: [LPA gene, apolipoprotein(a), apo(a), APOA, lipoprotein(a), Lp(a)]
uniprot: P08519
ncbi-gene: 4018
hgnc: 6667
ensembl: ENSG00000198670
genage-id: null
pathways: ["[[lipoprotein-metabolism]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: yes
caused-by: ["[[lpa-kiv2-cnv]]"]
causes: ["[[atherosclerosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Burgess 2018, Schmidt 2016, Lampsas 2023, Bjornson 2024 verified against local PDFs; Kamstrup 2009 verified against PubMed abstract (not_oa); Wu 2026 drug percentages verified against PubMed abstract (PMID 41937094); canonical-database identity fields (UniProt P08519, NCBI Gene 4018, HGNC 6667, Ensembl ENSG00000198670) confirmed as seeded from live API lookup — not re-checked independently"
literature-checked-through: 2026-05-09
---


# Lp(a) — Lipoprotein(a) / apo(a)

**Lipoprotein(a)** [Lp(a)] is a genetically determined, highly atherogenic and prothrombotic lipoprotein particle that is **causally associated with ASCVD** independent of LDL cholesterol, via Mendelian randomization [^kamstrup2009][^burgess2018]. On a per-particle basis, Lp(a) is ~6.6-fold more atherogenic than LDL (95% CI: 5.1–8.8) [^bjornson2024]. Plasma Lp(a) concentration is largely heritable (~70–90%), diet- and exercise-resistant, and statin-resistant — distinguishing it sharply from other atherogenic lipoproteins. The *LPA* gene encodes **apo(a)** (apolipoprotein(a)), the particle's unique structural component; the assembled circulating particle = apo(a) covalently linked to an LDL-like particle (one ApoB-100 + cholesterol-ester core) via a single disulfide bond. Three Phase 3 cardiovascular-outcomes trials are ongoing for RNA-targeted Lp(a)-lowering agents.

**Clinical relevance:** Lp(a) is increasingly used as a statin-initiation modifier — a result >50 mg/dL is often treated as an indication to initiate a statin regardless of LDL-C or ApoB level.

## Identity

- **UniProt:** P08519 (APOA_HUMAN) — Swiss-Prot reviewed; confirmed via UniProt REST API 2026-05-09
- **Gene:** *LPA* (chromosome 6q26–q27)
- **NCBI Gene:** 4018
- **HGNC:** 6667 (symbol: LPA)
- **Ensembl:** ENSG00000198670
- **Protein length:** 2,040 amino acids (apo(a) precursor including 19-aa signal peptide)
- **Mouse ortholog:** none — mice lack a functional *Lpa* gene with full kringle-repeat architecture. **Lp(a) biology cannot be studied in standard mouse models.** This is a major translational bottleneck. #gap/needs-human-replication applies narrowly to mechanism studies; epidemiologic and genetic causality are well-established in humans via MR.

**Naming convention on this page:** *LPA* = gene; **apo(a)** = protein (apolipoprotein(a), the gene product); **Lp(a)** = assembled circulating particle = apo(a) + ApoB-100 + lipid core.

## Gene and protein structure

### LPA evolved from plasminogen gene duplication

*LPA* arose by tandem duplication and divergence of the plasminogen gene (*PLG*) on chromosome 6 [^schmidt2016]. Apo(a) is structurally homologous to **plasminogen** but has lost fibrinolytic activity — its serine-protease domain is catalytically inactive (the active-site serine is mutated). This evolutionary history is the molecular basis for apo(a)'s competition with plasminogen for fibrin and lysine-binding sites on fibrin clots — directly explaining Lp(a)'s prothrombotic mechanism.

### Kringle domain architecture

Apo(a) is composed almost entirely of **kringle domains** — triple-disulfide-bridge globular folds originally described in plasminogen:

| Domain | Copies | Notes |
|---|---|---|
| Kringle IV type 1 (KIV-1) | 1 | Unique; distinguishes apo(a) from plasminogen |
| Kringle IV type 2 (KIV-2) | **1 to >40 copies (CNV)** | Copy-number variable; main genetic determinant of Lp(a) size and plasma level |
| Kringle IV types 3–10 (KIV-3 to KIV-10) | 1 each | Fixed; KIV-10 contains the **strong-lysine-binding site** that preferentially binds OxPL |
| Kringle V (KV) | 1 | Structural |
| Protease domain | 1 | Serine-protease fold; catalytically inactive (Ser → Arg active-site mutation) |

**KIV-2 copy-number variation (CNV)** is the primary genetic determinant of plasma Lp(a) levels. More KIV-2 repeats → larger apo(a) → slower hepatic secretion → lower plasma Lp(a). Fewer KIV-2 repeats → smaller, more efficiently secreted apo(a) → higher plasma Lp(a) [^schmidt2016]. This inverse relationship is why Lp(a) genetic epidemiology uses SNPs in/around KIV-2 (rs10455872, rs3798220) as instruments for MR analyses.

### Disulfide linkage to ApoB-100

The assembled Lp(a) particle forms via a single disulfide bond between a cysteine residue in apo(a)'s KIV-9 domain and **Cys4326 of ApoB-100** on an LDL-like particle. The LDL core (cholesterol ester, triglyceride) and the full ApoB-100 molecule are retained. Each Lp(a) particle therefore contains exactly one apo(a) and one ApoB-100 — meaning Lp(a) particles are captured by the standard ApoB assay, but the ApoB-100 on Lp(a) particles is not distinguished from LDL-ApoB-100. This is why Lp(a) must be measured separately: the ApoB assay counts Lp(a) particles equally with LDL particles, but since Lp(a) is ~6.6× more atherogenic per particle, the ApoB number **underestimates** total atherogenic risk for individuals with elevated Lp(a) — the higher-risk Lp(a)-ApoB particles are blended indistinguishably into the same ApoB total as lower-risk LDL-ApoB particles [^sniderman2019].

## Epidemiology and clinical thresholds

Plasma Lp(a) has a highly right-skewed distribution in populations. Approximately **20% of Caucasian-ancestry individuals** have Lp(a) >50 mg/dL [^kamstrup2021review]. The threshold for clinical significance is less than perfectly defined across guidelines, but the following tiered framework is used across major societies (ESC, AHA/ACC):

| Level | mg/dL | nmol/L (approx) | Clinical significance |
|---|---|---|---|
| Low | <30 | <75 | No elevated risk |
| Borderline | 30–50 | 75–125 | Modest incremental risk; consider in context |
| High | 50–125 | 125–312 | Elevated risk; guideline-indicated statin escalation trigger |
| Very high | >125 | >312 | Major independent ASCVD risk factor; consider aggressive LDL lowering + lipoprotein apheresis candidacy |

**Units note:** mg/dL and nmol/L are NOT interconvertible by a fixed factor because apo(a) isoform size varies. Smaller isoforms have higher particle count (nmol/L) per unit mass (mg/dL). Modern guidelines increasingly prefer nmol/L as it measures particle number. The rough approximation nmol/L ≈ 2.5 × mg/dL is isoform-size-dependent and should not be treated as exact. #gap/dose-response-unclear regarding whether nmol/L thresholds should be used instead of mg/dL in clinical practice; guideline convergence is ongoing.

**Decision threshold:** An Lp(a) >50 mg/dL is commonly treated as a trigger to initiate a statin regardless of LDL-C or ApoB level. This threshold aligns with ESC 2019 guidelines, which designate ≥50 mg/dL (≥125 nmol/L) as "high" Lp(a).

## Heritability and genetic architecture

Plasma Lp(a) concentration is **~70–90% heritable**, making it the most genetically determined major cardiovascular risk biomarker [^schmidt2016]. This heritability is explained primarily by:

1. **KIV-2 CNV** — explains ~30–70% of population Lp(a) variance; dominantly inversely correlated with Lp(a) concentration
2. **LPA promoter variants** (e.g., rs10455872, rs3798220) — SNPs used as MR instruments; strong associations with Lp(a) concentration
3. **Other LPA variants** — rare coding variants modifying apo(a) secretion efficiency

This high heritability has important clinical implications: diet, exercise, weight loss, and most lipid-lowering drugs have minimal impact on plasma Lp(a) concentration. Lp(a) is physiologically "set" by genetics from birth.

## Mendelian randomization: causal evidence for ASCVD

Lp(a) has strong MR-validated causal evidence for multiple ASCVD endpoints:

**Myocardial infarction:** Kamstrup et al. (JAMA, 2009) performed the first prospective MR study of Lp(a) and MI across three Danish cohorts (CCHS, CGPS, CIHDS; total n≈40,486). Using the *LPA* KIV-2 repeat-size polymorphism as the genetic instrument, genetically elevated Lp(a) was causally associated with MI risk: HR 1.22 (95% CI: 1.09–1.37) per doubling of Lp(a) concentration by instrumental variable analysis [^kamstrup2009]. This established causality — not merely association — for Lp(a) and MI.

**Coronary disease and therapeutic implications:** Burgess, Ference et al. (JAMA Cardiology, 2018) performed MR analysis using LPA SNPs in the CHD Exome+ Consortium (n=48,333 individual participant data from 5 studies, including 20,793 with CHD) with external validation in CARDIoGRAMplusC4D summarized data (62,240 CHD cases + 127,299 controls). Key quantitative finding: a 101.5 mg/dL reduction in Lp(a) (95% CI: 71.0–137.0) would be required to achieve a clinically meaningful benefit equivalent to a 38.67 mg/dL LDL-C reduction — helping define the magnitude of Lp(a) reduction needed from emerging therapies to achieve cardiovascular outcomes benefit [^burgess2018].

**Per-particle atherogenicity:** Björnson et al. (JACC, 2024) used ApoB-based genetic analysis in 502,413 UK Biobank participants to quantify the *per-particle* atherogenicity of Lp(a) vs LDL. MR-derived OR for CHD per 50 nmol/L higher Lp(a)-apoB was 1.28 (95% CI: 1.24–1.33) vs 1.04 (95% CI: 1.03–1.05) for LDL-apoB. From these data, Lp(a) atherogenicity is estimated at approximately **6.6-fold greater** (95% CI: 5.1–8.8) than LDL on a per-particle basis [^bjornson2024]. This finding reinforces why even modest Lp(a) concentrations can be clinically significant in individuals with otherwise-optimal LDL.

**Additive benefit with LDL-C lowering:** Wang et al. (Int J Epidemiology, 2025) factorial MR showed that combined Lp(a) lowering and LDL-C lowering provides additive cardiovascular risk reduction with no evidence for departure from additivity — supporting concurrent aggressive lipid lowering in high-Lp(a) individuals [^wang2025].

**Atherosclerotic stenosis vs venous thrombosis:** Kamstrup, Tybjærg-Hansen, Nordestgaard (ATVB, 2012) used MR to show Lp(a) is causally associated with atherosclerotic stenosis (HR 1.12–1.21) but **not** with venous thrombosis (HR ~1.02–1.04) — the prothrombotic mechanism of Lp(a) acts in the arterial context (via fibrinolysis inhibition) rather than the venous clotting cascade [^kamstrup2012].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes — Lp(a) biology is essentially human-specific | Standard mice lack functional *Lpa*; no murine model |
| Phenotype conserved in humans? | yes | All causal evidence is from human genetic + epidemiological studies |
| Replicated in humans? | yes | Multiple large-cohort MR studies, consistent findings |

## Mechanisms of atherogenicity and prothrombosis

Lp(a) pathogenicity operates through at least three reinforcing mechanisms:

### 1. LDL-like cholesterol delivery

As an ApoB-100-containing particle, Lp(a) behaves like a modified LDL in the vascular wall — binding to arterial wall proteoglycans (decorin, biglycan via apo(a)'s lysine-binding sites), crossing the endothelium, becoming trapped in the subintimal space, and contributing to foam-cell formation and plaque progression. Because Lp(a) is ~6× more atherogenic per particle than LDL, its contribution to atherogenic particle burden is disproportionate to its mass [^bjornson2024][^lampsas2023].

### 2. Oxidized phospholipid (OxPL) carrier

Lp(a) is the **preferential lipoprotein carrier for oxidized phospholipids (OxPL)** in human plasma. The apo(a) KIV-10 domain contains a strong-lysine-binding site that preferentially binds OxPL moieties generated by lipid oxidation. OxPL carried by Lp(a) trigger vascular inflammation: activating endothelial cells (MCP-1 secretion, monocyte chemotaxis), promoting monocyte adhesion, stimulating macrophage-derived IL-8 production (promotes neutrophil infiltration), and driving foam-cell formation. Plasma OxPL-apoB (a surrogate for Lp(a)-carried OxPL) strongly predicts cardiovascular events independent of Lp(a) mass [^lampsas2023]. #gap/no-mechanism — the exact molecular cascade from KIV-10/OxPL binding to downstream inflammatory activation is incompletely resolved.

### 3. Prothrombotic: competitive inhibition of plasminogen

Due to its structural homology to **plasminogen** (evolutionary gene duplication of *PLG*), apo(a) competes with plasminogen for fibrin-binding sites and lysine residues on fibrin clots. By displacing plasminogen from fibrin, apo(a) impairs tissue plasminogen activator (t-PA)-mediated fibrinolysis — the clot-dissolving mechanism. This impaired fibrinolysis is hypothesized to increase the risk of arterial thrombosis superimposed on atherosclerotic plaques, and may be particularly relevant for **calcific aortic valve stenosis** pathogenesis [^lampsas2023][^kamstrup2021review]. **Mechanistic caveat:** MR evidence (Kamstrup 2012) argues against Lp(a) causing *venous* thrombosis, suggesting the prothrombotic effect is arterial context-dependent [^kamstrup2012]. #gap/contradictory-evidence between the molecular inhibition-of-fibrinolysis mechanism and the MR finding that Lp(a) doesn't cause VTE.

## Comparison to LDL — why Lp(a) must be measured separately

| Feature | LDL | Lp(a) |
|---|---|---|
| ApoB content | One ApoB-100 per particle | One ApoB-100 per particle (included in ApoB assay) |
| Unique structural protein | None | Apo(a) |
| Heritability | ~50–60% | ~70–90% |
| Diet/exercise modifiability | Moderate (20–30% LDL-C reduction possible) | Minimal (<5%) |
| Statin response | ~30–50% LDL-C reduction | Minimal or slight increase (see below) |
| Per-particle atherogenicity | Reference (1×) | ~6.6× greater [^bjornson2024] |
| MR-validated ASCVD causality | yes | yes |
| Captured by standard ApoB test | yes | yes (included in ApoB total, not separated) |

**Key point:** A person with optimal ApoB (e.g., 60 mg/dL) but Lp(a) of 100 mg/dL is at meaningfully higher ASCVD risk than their ApoB number implies. Lp(a)-ApoB-100 particles are counted in the total ApoB but cannot be distinguished without a separate Lp(a) assay. For individuals with elevated Lp(a), total ApoB *underestimates* the problem because the Lp(a) particles (more atherogenic per particle) are blended with regular LDL particles. This is why Lp(a) measurement is additive to ApoB testing, not redundant with it.

## Therapeutic landscape

### What does NOT work

- **Diet and exercise:** Minimal to no effect on plasma Lp(a). Lifestyle modification alone cannot meaningfully lower Lp(a) [^kamstrup2021review].
- **Statins:** Statins minimally affect Lp(a) and some studies report a **modest increase** (5–15%) in Lp(a) with high-intensity statin therapy. Statins remain indicated in high-Lp(a) patients to lower non-Lp(a) atherogenic particles (LDL-C, VLDL), but they do not address Lp(a) directly.
- **Ezetimibe:** Minimal effect on Lp(a).

### Partial effect: PCSK9 inhibitors (~25% reduction)

Evolocumab and alirocumab (PCSK9 inhibitors, FDA-approved) reduce Lp(a) by approximately **25–30%** on top of statin therapy — a secondary effect beyond their primary mechanism of upregulating LDLR-mediated LDL clearance. This Lp(a) reduction is clinically meaningful for patients in the borderline range but insufficient for patients with very high Lp(a). See [[pcsk9]] for mechanistic detail [^greco2025].

### Historical: Niacin (~25% reduction, discredited for outcomes)

Niacin reduces Lp(a) by ~25–30%. However, the AIM-HIGH (2011) and HPS2-THRIVE (2013) cardiovascular outcomes trials showed **no benefit of niacin** on top of statin therapy for major MACE — despite niacin lowering Lp(a), LDL-C, and triglycerides. Niacin is no longer recommended for cardiovascular prevention by FDA. The failure may reflect insufficient magnitude of Lp(a) reduction or off-target harms obscuring benefit. #gap/contradictory-evidence — the biochemical response (Lp(a) reduction) and the outcomes-trial results diverge; outcome-neutral finding for niacin does not rule out larger Lp(a) reductions being beneficial (see pelacarsen/olpasiran below).

### Lipoprotein apheresis

Mechanical extracorporeal removal of LDL and Lp(a) from plasma. Acutely reduces Lp(a) by 60–75%. **FDA-approved** for patients with LDL-C >300 mg/dL (or >200 mg/dL on maximum tolerated drug therapy) and established ASCVD, or Lp(a) >60 mg/dL with progressive CAD. Logistically demanding (biweekly infusions); used in refractory high-Lp(a) cases. No large RCT demonstrating outcomes benefit in Lp(a)-specific indication. #gap/needs-human-replication for Lp(a)-specific outcomes benefit.

### Emerging RNA-targeted therapies (Phase 3 outcomes trials ongoing)

Three RNA-targeting agents have produced dramatic Lp(a) reductions and are now in Phase 3 outcomes trials. The network meta-analysis by Wu et al. (Pharmacological Research, 2026) of 25 RCTs (n=7,715) synthesized the efficacy data [^wu2026]:

| Agent | Class | Frequency | Lp(a) reduction | Trial | Status |
|---|---|---|---|---|---|
| **Pelacarsen (TQJ230)** | Antisense oligonucleotide (ASO) targeting LPA mRNA | Monthly SC injection | ~54% (Wu 2026 meta-analysis) | **Lp(a)HORIZON** (ASCVD secondary prevention; n~8,300; 4–5 yr readout) | Phase 3, ongoing |
| **Olpasiran** | siRNA targeting LPA mRNA | Quarterly SC injection | ~92% (Wu 2026) | **OCEAN(a)-Outcomes** | Phase 3, ongoing |
| **Zerlasiran** | siRNA | Quarterly SC injection | ~81% (Wu 2026) | Phase 3 | Ongoing |
| **Lepodisiran** (Lilly) | siRNA | Quarterly SC injection | Phase 2 data positive | Phase 3 launching | Planned |
| **Muvalaplin** (Lilly) | Oral small molecule disrupting apo(a)–ApoB-100 disulfide-link formation | Daily oral | ~65–77% (Wu 2026) | Phase 2 completed; Phase 3 pending | Phase 2 done |

**Druggability tier = 2 rationale (aging context):** No FDA-approved Lp(a)-specific drug exists as of 2026-05-09. Multiple Phase 3 cardiovascular-outcomes trials are actively recruiting or ongoing. The magnitude of Lp(a) reduction (>80–92% with siRNA) may be sufficient to demonstrate the outcomes benefit that niacin's ~25% reduction failed to achieve. Tier would upgrade to 1 upon Phase 3 trial success.

**Critical question:** The Burgess/Ference 2018 MR analysis suggested that ~100 mg/dL Lp(a) reduction is needed to achieve benefit equivalent to ~39 mg/dL LDL-C reduction. Pelacarsen (~54%) may not achieve sufficient reduction in many patients; siRNA agents with ~80–92% reduction are better positioned. Whether any specific level of Lp(a) reduction translates to cardiovascular benefit in outcomes trials is the central open question [^burgess2018].

**Muvalaplin** is mechanistically distinct: it is an oral small molecule that disrupts the protein-protein interaction between apo(a) and ApoB-100 during particle assembly in the liver — preventing Lp(a) particle formation rather than suppressing LPA mRNA. Phase 2 results showed ~65–77% Lp(a) reduction; oral dosing is a practical advantage if outcomes trials succeed [^greco2025].

## Aging relevance

Lp(a) is atherogenic from birth: because plasma Lp(a) is genetically set and does not change substantially with age, individuals with elevated Lp(a) accumulate decades of excess atherogenic particle exposure. The **cumulative exposure model** for ASCVD (see [[apob]] for the parallel LDL argument) applies with particular force to Lp(a): by age 50–60, an individual with Lp(a) >100 mg/dL will have sustained 4–6 decades of 6.6× per-particle atherogenicity vs LDL. This is the basis for guidelines recommending early Lp(a) testing (once in a lifetime screening), especially given emerging Phase 3 trials that may provide actionable pharmacotherapy.

There is no direct evidence linking Lp(a) to hallmarks of aging beyond [[atherosclerosis]]-mediated [[chronic-inflammation]] and endothelial signaling disruption ([[altered-intercellular-communication]]). Lp(a)'s SASP-parallel effect — OxPL-driven macrophage activation, IL-8 release — represents a chronically active inflammatory signal originating from a genetically invariant particle burden. #gap/unsourced — no study directly linking Lp(a) to canonical hallmark biology (telomere attrition, senescent cell burden, etc.) is available from current evidence.

## Pathway context

Lp(a) exists within [[lipoprotein-metabolism]] as the "rogue" sub-pathway — a particle assembled in the liver, secreted into plasma, not cleared efficiently by [[ldlr]] (because apo(a) sterically hinders the ApoB-100 receptor-binding domain), and not remodeled by peripheral lipolysis like standard VLDL→IDL→LDL. Lp(a) is effectively a permanently elevated atherogenic particle burden for individuals with elevated plasma concentrations.

**Key relationships:**
- [[apob]] — ApoB-100 provides the LDL-like lipid core of Lp(a); ApoB assay includes Lp(a)-ApoB
- [[ldlr]] — Lp(a) is poorly cleared by LDLR (apo(a) interferes with ApoB site B → LDLR interaction); PCSK9 inhibition modestly lowers Lp(a) by freeing up LDLR
- [[pcsk9]] — PCSK9 inhibitors reduce Lp(a) ~25%; mechanism involves improved Lp(a) clearance via non-LDLR receptors
- [[atherosclerosis]] — Lp(a) is a direct causal driver via cholesterol delivery, OxPL-inflammation, and impaired fibrinolysis
- [[familial-hypercholesterolemia]] — FH patients often have co-elevated LDL and Lp(a); synergistically very high ASCVD risk

## Limitations and gaps

- **No mouse model.** Standard mice lack functional *Lpa*; all mechanistic data come from human genetic epidemiology, in vitro studies, and transgenic models that incompletely recapitulate human Lp(a) biology. #gap/needs-human-replication for mechanistic claims.
- **nmol/L vs mg/dL conversion.** No fixed conversion factor; isoform size matters. Clinical labs differ in which unit they report. If a panel reports in nmol/L, recalibrate decision thresholds accordingly (>125 nmol/L = high; >312 nmol/L = very high).
- **Phase 3 outcomes trials still pending.** None of pelacarsen (Lp(a)HORIZON) or olpasiran (OCEAN(a)-Outcomes) has reported outcomes data as of 2026-05-09. The therapeutic landscape could change substantially with trial readouts.
- **OxPL mechanistic cascade.** The exact downstream signaling from KIV-10/OxPL binding to vascular inflammation is incompletely characterized. #gap/no-mechanism
- **GTEx aging expression data.** `gtex-aging-correlation: null` — LPA hepatic expression trajectory with age not yet pulled.
- **KIV-2 CNV page absent.** `[[lpa-kiv2-cnv]]` referenced in `caused-by:` is a forward reference (stub not yet created). The CNV is the dominant genetic driver of Lp(a) levels; a dedicated page would support Dataview queries on copy-number variants.
- **Niacin outcomes-trial discordance.** The divergence between niacin's biochemical Lp(a) reduction and lack of CV outcomes benefit is not fully explained. Pending Lp(a)-specific outcomes trials (pelacarsen, olpasiran) will provide the definitive test of whether the MR-predicted benefit is achievable pharmacologically. #gap/contradictory-evidence

## Footnotes

[^kamstrup2009]: doi:10.1001/jama.2009.801 · Kamstrup PR, Tybjaerg-Hansen A, Steffensen R, Nordestgaard BG · *JAMA* 2009 · mendelian-randomization · three Danish cohorts: CCHS n=8,637 (prospective, 16-yr follow-up, 599 MI events) + CGPS n=29,388 + CIHDS n=2,461; total n≈40,486 · instrument: KIV-2 repeat-size polymorphism (explains 21–27% Lp(a) variance) · model: human · HR 1.22 (95% CI 1.09–1.37) per doubling of Lp(a) by instrumental variable analysis; established causality for Lp(a) → MI · 1,269 citations; closed-access (not_oa); verified against PubMed abstract (PMID 19509380)

[^burgess2018]: doi:10.1001/jamacardio.2018.1470 · Burgess S, Ference BA et al. · *JAMA Cardiology* 2018 · mendelian-randomization · primary analysis: n=48,333 individual participant data from 5 CHD Exome+ Consortium studies (20,793 CHD cases); external validation: CARDIoGRAMplusC4D summarized data (62,240 CHD + 127,299 controls); LPA genetic score: 43 conditionally selected variants · model: human · 101.5 mg/dL Lp(a) reduction (95% CI 71.0–137.0) needed to equal benefit of 38.67 mg/dL LDL-C reduction; CHD risk proportional to absolute (not proportional) Lp(a) change · 627 citations; locally available at 

[^bjornson2024]: doi:10.1016/j.jacc.2023.10.039 · Björnson E, Adiels M, Taskinen M-R et al. · *Journal of the American College of Cardiology* 2024 · mendelian-randomization · n=502,413 UK Biobank (54.4% female); Lp(a) cluster: 107 SNPs; LDL cluster: 143 SNPs · model: human · MR OR for CHD per 50 nmol/L higher Lp(a)-apoB: 1.28 (95% CI 1.24–1.33) vs LDL-apoB: 1.04 (95% CI 1.03–1.05); point estimate of Lp(a) atherogenicity 6.6-fold greater than LDL per particle (95% CI 5.1–8.8) · 167 citations; locally available at 

[^kamstrup2021review]: doi:10.1093/clinchem/hvaa247 · Kamstrup PR · *Clinical Chemistry* 2021 · review · n=N/A · model: human · 2–3-fold Lp(a)-associated MI risk; population epidemiology, MR, and clinical threshold synthesis · 230 citations; download pending (bronze OA)

[^schmidt2016]: doi:10.1194/jlr.r067314 · Schmidt K, Noureen A, Kronenberg F, Utermann G · *Journal of Lipid Research* 2016 · review · n=N/A · model: human · LPA gene structure, KIV-2 CNV, heritability (~70–90%), plasminogen gene-duplication origin; canonical structural reference · 643 citations; locally available at 

[^kamstrup2012]: doi:10.1161/atvbaha.112.248765 · Kamstrup PR, Tybjaerg-Hansen A, Nordestgaard BG · *Arteriosclerosis, Thrombosis, and Vascular Biology* 2012 · mendelian-randomization · Copenhagen cohorts · model: human · Lp(a) causally associated with atherosclerotic stenosis (HR 1.12–1.21) but not venous thrombosis (HR ~1.02–1.04) · 184 citations; closed-access (not_oa)

[^lampsas2023]: doi:10.3390/molecules28030969 · Lampsas S, Xenou M, Oikonomou E et al. · *Molecules* 2023 · review · n=N/A · model: human · OxPL-binding mechanism, fibrinolysis inhibition, ECM-binding atherogenicity, endothelial dysfunction · 125 citations; locally available at 

[^greco2025]: doi:10.1161/circulationaha.124.069210 · Greco A, Capodanno D et al. · *Circulation* 2025 · review · n=N/A · model: human · therapeutic landscape for Lp(a)-lowering drugs: ASO, siRNA, oral small molecule, gene editing overview; PCSK9i ~25% reduction confirmed · 43 citations; closed-access (not_oa); not PDF-verified

[^wu2026]: doi:10.1016/j.phrs.2026.108178 · Wu AX, Wang XJ, Zhao C, Hu JQ et al. · *Pharmacological Research* 2026 (May, Vol. 227) · meta-analysis (network) · n=7,715 (25 RCTs) · model: human · olpasiran −92.1% (95% CI −100.1 to −84.0%), zerlasiran −80.6% (95% CI −87.7 to −73.5%), muvalaplin −76.8% (95% CI −90.3 to −63.2%), pelacarsen −54.2% (95% CI −72.2 to −36.2%) Lp(a) reduction; siRNA therapies showed greatest reductions · DOI confirmed in archive but download not yet available (too new); PMID 41937094

[^sniderman2019]: doi:10.1001/jamacardio.2019.3780 · Sniderman AD, Thanassoulis G et al. · *JAMA Cardiology* 2019 · review · Lp(a)-ApoB inclusion in total ApoB assay; see [[apob]] page for full verification notes
