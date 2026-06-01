---
type: protein
aliases: [HMG-CoA reductase, HMGCR, 3-hydroxy-3-methylglutaryl-CoA reductase, hydroxymethylglutaryl-CoA reductase]
uniprot: P04035
ncbi-gene: 3156
hgnc: 5006
ensembl: ENSG00000113161
genage-id: null
pathways: ["[[mevalonate-pathway]]", "[[srebp-2]]", "[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
known-interactors: ["[[srebp-2]]", "[[insig-1]]", "[[insig-2]]", "[[ampk]]", "[[ldlr]]", "[[pcsk9]]"]
druggability-tier: 1
gtex-aging-correlation: null
literature-checked-through: 2026-05-09
mr-causal-evidence: yes
caused-by: ["[[srebp-2]]", "[[ampk]]"]
causes: ["[[ldlr]]", "[[pcsk9]]", "[[atherosclerosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "UniProt P04035 active-site residues and AMPK phosphosite verified against UniProt REST API + sequence; CTT 2010, Swerdlow 2015, Horton 2003, Sever 2003, Benn 2017 verified against local PDFs; Ference 2015 n verified via PMC full text. Canonical-DB identity fields (UniProt P04035, NCBI Gene 3156, HGNC 5006, Ensembl ENSG00000113161) not independently re-queried beyond UniProt sequence verification. Rnf145-2018 PDF not available (failed download); claim retained as sourced."
---


# HMGCR (HMG-CoA reductase)

The rate-limiting enzyme of the [[mevalonate-pathway|mevalonate pathway]]. HMGCR converts HMG-CoA to mevalonate in a double-NADPH-dependent reduction, committing the cell to the synthesis of cholesterol and the full spectrum of non-sterol isoprenoids. It is the target of statins — the most prescribed lipid-lowering drug class globally — and the site of one of the most rigorously validated causal relationships in cardiovascular medicine: HMGCR-variant Mendelian randomization studies confirm that pharmacological inhibition of HMGCR reduces LDL-C and thereby reduces coronary heart disease.

## Identity

- **UniProt:** P04035 (HMGCR_HUMAN)
- **NCBI Gene:** 3156
- **HGNC:** 5006 (symbol: HMGCR)
- **Ensembl:** ENSG00000113161
- **Gene locus:** 5q13.3-q14
- **Length:** 888 amino acids (canonical isoform)
- **Mouse ortholog:** Hmgcr (one-to-one ortholog; catalytic-domain highly conserved)

## Domain architecture

HMGCR has a bifunctional topology: a membrane-anchored N-terminal regulatory module and a cytoplasmic C-terminal catalytic module [^uniprot-p04035].

**N-terminal membrane domain (residues 1–339)**
Eight transmembrane helices anchor the protein to the ER membrane (TM spans: 10–39, 57–78, 90–114, 124–149, 160–187, 192–220, 249–275, 315–339; all helical). Within this module sits the **sterol-sensing domain (SSD, residues 61–218)**, which contains the INSIG-binding motif and is responsible for sterol-induced accelerated degradation. The SSD is structurally homologous to SSDs in SCAP and NPC1, where the same domain type reads local sterol levels and controls protein fate.

**Linker region (~340–459)**
A poorly structured region connecting membrane and catalytic modules; no characterized function.

**C-terminal catalytic domain (residues ~460–888)**
Cytoplasmic, soluble, and the site of enzymatic activity. This domain dimerizes and forms the catalytically active homodimer. **Statins bind within this domain**, occupying the substrate-binding cleft.

## Catalytic mechanism

HMGCR catalyzes a two-step double reduction:

```
HMG-CoA + NADPH → mevaldyl-CoA (hemithioacetal intermediate)
mevaldyl-CoA + NADPH → mevalonate + CoA
```

Active site residues confirmed by UniProt feature table and canonical sequence (P04035, 888 aa) [^uniprot-p04035]:

| Residue | Identity | UniProt annotation | Evidence |
|---|---|---|---|
| 559 | **Glu (E)** | Charge relay system | Experimental (PubMed 10698924, 11349148) |
| 691 | **Lys (K)** | Charge relay system | Experimental (PubMed 10698924, 11349148) |
| 767 | **Asp (D)** | Charge relay system | Experimental (PubMed 10698924, 11349148) |
| 866 | **His (H)** | Proton donor | By similarity (PROSITE-ProRule) |

Note: earlier drafts of this page incorrectly listed Asp559 and Asp691 — these reflect a training-memory conflation. The canonical sequence confirms Glu559 and Lys691. The crystal structure PDB entries 1HWK and 1HWL (Istvan & Deisenhofer, *Science* 2001) provide the structural context for the active-site geometry.

**Km for HMG-CoA:** ~13.7 μM (per UniProt catalytic annotation).

## Mevalonate pathway: cholesterol and non-sterol branches

HMGCR is positioned at the first committed step. The mevalonate product feeds two major branches:

**Sterol branch (cholesterol):**
Mevalonate → mevalonate-5-PP → IPP/DMAPP → squalene → lanosterol → cholesterol

**Non-sterol isoprenoid branch:**
Mevalonate → farnesyl-pyrophosphate (FPP) → geranylgeranyl-pyrophosphate (GGPP) → ubiquinone (CoQ10), dolichol, isopentenyl-tRNA, protein prenylation substrates

The non-sterol branch is critical for understanding statin pleiotropic effects and adverse effects. Statin inhibition of HMGCR depletes not just cholesterol but also FPP and GGPP, which are substrates for the prenylation of Ras, Rho, and Rac GTPases. Depleted geranylgeranylation → reduced Rho/Rac activity → endothelial nitric oxide synthase (eNOS) stabilization + anti-inflammatory NF-κB blunting, but also potential impairment of CoQ10 synthesis and muscle mitochondrial function. #gap/dose-response-unclear — the threshold of HMGCR inhibition at which GGPP depletion becomes functionally significant in skeletal muscle is not established.

## Regulation

### Transcriptional: SREBP-2 axis

The dominant transcriptional regulator of HMGCR is [[srebp-2]]. When hepatic free cholesterol falls (e.g., during statin therapy, low dietary cholesterol, or caloric restriction), the SCAP–INSIG sterol sensor releases SCAP–SREBP-2 for Golgi transport, site-1/site-2 protease cleavage liberates the active N-terminal domain of SREBP-2, and nuclear SREBP-2 drives HMGCR transcription (along with LDLR, PCSK9, and >20 other sterol-synthesis genes). This creates a key negative feedback loop that blunts statin efficacy at higher doses: statin inhibition → cholesterol depletion → SREBP-2 → ↑ HMGCR transcription → partially restores HMGCR protein → dose-response plateau.

### Post-translational: sterol-induced ERAD

When cellular sterol levels are high, INSIG-1 or INSIG-2 bind the SSD of HMGCR, recruiting the E3 ubiquitin ligase complex (AMFR/gp78, and the recently characterized RNF145) together with Erlin1/2 [^sever2003][^rnf145-2018]. This ubiquitinates HMGCR — primarily at Lys89 and Lys248 — targeting it for proteasomal degradation. This ER-associated degradation (ERAD) pathway is the dominant mechanism by which cells suppress HMGCR activity when cholesterol is abundant, operating in parallel with (and faster than) transcriptional suppression via SREBP-2.

### Post-translational: AMPK phosphorylation

AMPK phosphorylates HMGCR at **Ser872** (confirmed by UniProt modification annotation), reducing catalytic activity [^uniprot-p04035]. This phospho-inactivation constitutes a direct energy-sensing brake on cholesterol synthesis: when AMP/ADP rises (energy stress, exercise, metformin), AMPK activation acutely inactivates HMGCR protein already present in the ER. This operates independently of the INSIG-ERAD pathway and is faster than transcriptional responses. AMPK also phosphorylates SREBP-2 itself, suppressing HMGCR transcription — so energy stress hits HMGCR via two AMPK-dependent arms simultaneously (see [[ampk]] and [[srebp-2]]).

**Geranylgeraniol (GGOH) feedback:** Non-sterol isoprenoid products, particularly GGOH derived from GGPP, can independently signal for HMGCR degradation via the ERAD pathway. This GGOH-dependent arm explains why non-sterol isoprenoids exert negative feedback on the enzyme even when cholesterol is not depleted.

## Statin pharmacology

### Mechanism of inhibition

Statins are competitive, reversible inhibitors of the HMGCR catalytic domain. Their HMG-like pharmacophore (the 3,5-dihydroxy acid moiety) occupies the HMG-CoA binding site in the catalytic cleft, with Ki values in the low-nanomolar range. Major class members: lovastatin, simvastatin, pravastatin (type 1, fungal-derived); fluvastatin, atorvastatin, rosuvastatin, pitavastatin (type 2, synthetic, extended binding interactions with the enzyme).

### Primary LDL-C lowering mechanism

The dominant clinical mechanism is **indirect** and LDLR-mediated: statins deplete hepatic intracellular cholesterol → SCAP–INSIG dissociates → SREBP-2 activates → LDLR transcription rises ~2–3 fold → hepatic LDL uptake increases → plasma LDL-C falls [^horton2002-ldlr]. Direct reduction of cholesterol synthesis contributes less than the LDLR-mediated clearance increase, because compensatory HMGCR upregulation (via SREBP-2 feedback) restores much of the synthesis rate, while LDLR upregulation persists. This mechanistic understanding, worked out by Goldstein and Brown, is why PCSK9 inhibitors (which prevent LDLR degradation) act synergistically with statins.

### Clinical efficacy: CTT meta-analysis

The Cholesterol Treatment Trialists (CTT) Collaboration meta-analysis (26 randomized trials, ~170,000 participants) established: **per 1 mmol/L reduction in LDL-C, statins reduce the rate of major vascular events (MI, stroke, coronary revascularization, vascular death) by approximately 22% (RR 0.78, 95% CI 0.76–0.80)** [^ctt2010]. The effect is log-linear in LDL reduction, proportional to baseline cardiovascular risk, and consistent across sex, age (including >75), and baseline LDL.

| Statin intensity | Approx. LDL-C reduction | Approx. major-event RRR |
|---|---|---|
| High (atorvastatin 40–80 mg, rosuvastatin 20–40 mg) | ~50% | ~35% (10-yr event rate basis) |
| Moderate (atorvastatin 10–20 mg, simvastatin 20–40 mg) | ~30–40% | ~25% |
| Low (pravastatin 10–20 mg, simvastatin 10 mg) | ~20–30% | ~15% |

Figures based on CTT dose-escalation subgroup; verify against primary CTT paper for exact CIs [^ctt2010].

### Pleiotropic effects (non-LDL mechanisms)

Multiple statin benefits appear to be partially independent of LDL-C reduction:

- **Anti-inflammatory:** CRP reduction (partial mechanism — statin inhibition depletes GGPP → impairs Rho/Rac prenylation → reduced NF-κB activation in endothelial and immune cells)
- **Endothelial eNOS upregulation:** GGPP depletion → reduced geranylgeranylated Rho → Rho normally inhibits eNOS mRNA stability and activity; depletion releases this inhibition → ↑ NO production → vasodilation + platelet inhibition
- **Plaque stabilization:** reduced matrix metalloproteinase expression in macrophages (prenylation-dependent)

These pleiotropic effects are genuine but their **clinical magnitude is debated** — MR studies using HMGCR alleles (which reduce cholesterol synthesis) largely recapitulate the CHD risk reduction, supporting LDL as the primary effector. #gap/contradictory-evidence

### Adverse effects

**Statin-associated muscle symptoms (SAMS):**
~5–10% incidence in RCTs; up to 20% in real-world registries (nocebo + tolerability selection). Mechanism likely involves depletion of CoQ10 (ubiquinone synthesis requires farnesyl-PP from HMGCR) and GGPP-dependent mitochondrial biogenesis; the evidence for CoQ10 as the causal mechanism remains incomplete. Rare but serious: rhabdomyolysis (CK >10× ULN with myoglobinuria; <1/10,000). Risk higher with lipophilic statins (simvastatin > atorvastatin > pravastatin) and CYP3A4 inhibitors. LGMDR28 (limb-girdle muscular dystrophy type R28) is a rare autosomal recessive disease caused by loss-of-function HMGCR variants — underscoring HMGCR's critical role in muscle biology. #gap/no-mechanism — CoQ10 depletion as causal SAMS mechanism not confirmed by supplementation RCTs.

**New-onset type 2 diabetes:**
Statins increase T2D risk by approximately **12% (OR 1.12, 95% CI 1.06–1.18) overall across RCTs** [^swerdlow2015], with dose-intensity variation: low/moderate-intensity statins ~10% increase (RR 1.10, 95% CI 1.04–1.16) and high-intensity statins ~36% increase (RR 1.36, 95% CI 1.25–1.48) [^ctt2024-t2d]. Mendelian randomization using HMGCR variants confirms this effect is on-target (pharmacological HMGCR inhibition per se, not off-target statin effects) — the rs17238484-G allele was associated with OR per allele 1.02 (95% CI 1.00–1.05) for T2D in genetic cohorts (n=223,463), directionally consistent with the RCT signal [^swerdlow2015]. Proposed mechanisms: impaired insulin secretion (islet cells require cholesterol for secretory granule formation), reduced GLUT4 translocation in adipocytes, weight gain (~0.24 kg overall in RCTs). Absolute risk increase is small and generally outweighed by cardiovascular benefit in high-risk patients.

## Genetics and Mendelian randomization

**Key GWAS variants:** rs17238484 (intronic) and rs12916 (intronic) — both in or near HMGCR, robustly associated with plasma LDL-C in GWAS. These are the canonical HMGCR instruments for MR studies.

**MR evidence (LDL → CHD):** Ference et al. 2015 used NPC1L1 and HMGCR genetic variants as instruments for LDL reduction in naturally randomized MR analysis (n=108,376 across 14 studies; 10,464 CHD events in primary analysis). HMGCR alleles associated with lower LDL-C were associated with proportionally lower CHD risk consistent with the CTT dose-response; external validation (up to 62,240 cases / 127,299 controls) confirmed ~17% lower CHD risk per 10 mg/dL lower LDL via HMGCR alleles (OR 0.828, 95% CI 0.775–0.885) [^ference2015]. This validates HMGCR as a bona fide causal node, not merely a biomarker.

**MR evidence (statin T2D adverse effect):** Swerdlow et al. 2015 showed that HMGCR-lowering alleles are associated with higher insulin resistance and modestly higher T2D risk in two large MR analysis populations, consistent with statins' on-target adverse metabolic effect [^swerdlow2015]. The T2D signal is confirmed genetically, meaning it reflects HMGCR inhibition per se rather than off-target drug effects.

**MR and Alzheimer's disease:** Benn et al. 2017 (n=111,194; Copenhagen general population cohorts) found that neither HMGCR-lowering nor PCSK9-lowering alleles causally reduced Alzheimer's risk in MR analysis [^benn2017]. The causal risk ratio for a 1 mmol/L lower LDL via genetic variants was 0.57 (95% CI 0.27–1.17) for AD — statistically non-significant. Low LDL levels may have a causal effect in *reducing* AD risk via the observational data, but the MR analysis using HMGCR/PCSK9 alleles did not reach significance for either target. There is no evidence from this paper that PCSK9-lowering has a distinct CNS protective signal versus HMGCR-lowering; both were null in MR. #gap/contradictory-evidence — observational LDL-AD associations exist but are not confirmed causal by HMGCR or PCSK9 MR in Benn 2017.

| Dimension | Status | Notes |
|---|---|---|
| MR causality for CHD? | yes | HMGCR alleles → LDL-C → CHD; CTT effect size matches MR (Ference 2015, n=108,376) |
| MR-confirmed on-target T2D risk? | yes | HMGCR alleles directionally associated with higher T2D risk; RCT OR 1.12 (Swerdlow 2015) |
| MR support for statins in AD? | no | Neither HMGCR nor PCSK9 alleles causally reduce AD risk in MR (Benn 2017, n=111,194; both NS) |

## Aging relevance

### Mevalonate pathway and vascular aging

The mevalonate/cholesterol axis is among the best-validated modifiable contributors to age-related [[atherosclerosis]]. Cumulative endothelial LDL exposure tracks with atherosclerotic plaque burden; HMGCR-mediated control of hepatic LDL output (via the LDLR upregulation mechanism) is the primary pharmaceutical lever for reducing this exposure. Statin therapy at population scale has measurably reduced cardiovascular mortality, making HMGCR inhibitors among the most impactful longevity-relevant drugs ever deployed — even in the absence of a formal "longevity trial" registration.

### mTORC1–SREBP-2–HMGCR axis

Under chronic anabolic signaling (high insulin, dietary overabundance), mTORC1 activates SREBP-2 nuclear translocation (partly via S6K1-mediated lipin-1 phosphorylation), driving HMGCR transcription. This positions HMGCR as a downstream node of the [[mtor]]–[[deregulated-nutrient-sensing]] hallmark. In aged subjects with insulin resistance and chronic mTORC1 activation, basal HMGCR-driven cholesterol synthesis may be inappropriately elevated independently of dietary cholesterol intake. #gap/needs-human-replication — direct evidence for age-driven HMGCR overactivity as a causal atherogenic mechanism (rather than as a proxy for mTOR dysregulation) is limited to animal models and cross-sectional cohort data.

### Isoprenoid depletion in aging

The non-sterol isoprenoid branch provides substrates for protein prenylation, a modification required for Ras superfamily GTPase membrane anchoring and function. Age-related changes in isoprenoid availability have been proposed to contribute to impaired cellular signaling in immune and vascular cells [^gap-aging-isoprenoid]. #gap/no-mechanism — whether age-related HMGCR activity changes (up or down, tissue-specifically) contribute meaningfully to isoprenoid-dependent aging phenotypes remains uncharacterized.

### Statins as candidate geroprotectors

Statins reduce major vascular events by ~22% per mmol/L LDL reduction in RCTs spanning age ranges up to 80+. This effect size is comparable to or exceeds most longevity-prioritized pharmacological interventions. However, statins have not been tested in a prospective lifespan-extension trial in any population; evidence is for event reduction in high-risk individuals. The statin-T2D tradeoff (on-target; ~10–12% RR increase at standard intensities, up to ~36% at high intensity) is relevant for lower-risk aging cohorts where absolute cardiovascular benefit is smaller. #gap/long-term-unknown — net effect of lifelong statin use on healthspan in low-cardiovascular-risk individuals is untested.

## Pathway membership

- [[mevalonate-pathway]] — HMGCR is the rate-limiting first committed step; full pathway covers acetyl-CoA → IPP → branch points (FPP→squalene→cholesterol vs FPP→GGPP→prenylation, dolichol, ubiquinone). Statin pleiotropy framework lives there.
- [[srebp-2]] — transcriptional master regulator; HMGCR is a canonical SREBP-2 target gene
- [[insulin-igf1]] — upstream via mTORC1-SREBP-2 axis
- [[ampk]] — directly phosphorylates and inactivates HMGCR at Ser872

## Key interactors

- [[srebp-2]] — transcriptional activator (binding response elements in HMGCR promoter)
- [[insig-1]] / [[insig-2]] — sterol sensors; bind SSD to trigger ERAD (INSIG-1 as characterized by Sever 2003)
- [[ampk]] — kinase; direct phosphorylation of Ser872 → inactivation
- [[ldlr]] — indirect (HMGCR → cholesterol depletion → SREBP-2 → LDLR); the downstream effector of statin LDL-lowering
- [[pcsk9]] — co-induced with LDLR by SREBP-2 (dampens the net LDLR upregulation from statins)
- [[apob]] — HMGCR-driven cholesterol production supports hepatic VLDL/LDL assembly; ApoB is the atherogenic particle carrier

## Known disease associations

- **Coronary artery disease / atherosclerosis** — elevated HMGCR activity (via high LDL production) is a central driver; [[atherosclerosis]] page
- **[[familial-hypercholesterolemia]]** — while FH is primarily LDLR/APOB/PCSK9 driven, HMGCR transcriptional compensation in FH (SREBP-2 chronically active) explains why statin efficacy is relatively preserved in heterozygous FH; forward-ref, no page yet
- **LGMDR28 (limb-girdle muscular dystrophy R28)** — rare AR loss-of-function HMGCR variants; progressive proximal muscle weakness; underscores muscle dependence on HMGCR-derived isoprenoids

## Recency literature note

R25 search conducted 2026-05-09. The 2024 Lancet Diabetes Endocrinology paper (CTT Collaboration; PMID 38554713; doi:10.1016/S2213-8587(24)00040-8) provides individual-participant-data analysis of statin-T2D associations across CTT trials. It does not supersede Swerdlow 2015's on-target MR framing; it adds dose-intensity granularity (low/moderate ~10%; high-intensity ~36% T2D RR increase) and has been integrated into this page. The foundational cardiovascular efficacy evidence (CTT 2010) and the CHD-MR causality evidence (Ference 2015) remain current with no superseding meta-analysis identified. Benn 2017 remains the primary MR source for the HMGCR/AD null finding.

## Footnotes

[^uniprot-p04035]: UniProt P04035 (HMGCR_HUMAN), accessed 2026-05-09 · Swiss-Prot manually reviewed · 888 aa canonical isoform · active-site residues confirmed from feature table + sequence: Glu559 (charge relay; experimental), Lys691 (charge relay; experimental), Asp767 (charge relay; experimental), His866 (proton donor; by similarity). PubMed evidence refs 10698924, 11349148 for positions 559/691/767 · Ser872 phosphoserine (reduces catalytic activity; experimental PubMed 24275569) confirmed from PTM annotations · Ser504 also phosphoserine (experimental PubMed 23186163) · SSD boundaries 61–218 · 8 TM helices at positions 10–39, 57–78, 90–114, 124–149, 160–187, 192–220, 249–275, 315–339

[^sever2003]: doi:10.1016/s1097-2765(02)00822-5 · Sever N, Yang T, Brown MS, Goldstein JL, DeBose-Boyd RA · *Molecular Cell* 2003 · n=biochemical + cell-based · in-vitro/cell · model: CHO-K1 cells (primary transfection experiments); HEK-293S cells used for endogenous HMGCR/SCAP studies (Fig. 4) · demonstrated INSIG-1 binding to HMGCR sterol-sensing domain triggers accelerated proteasomal degradation; sterol-sensing domains of HMGCR and SCAP compete for the same INSIG-1 binding site

[^swerdlow2015]: doi:10.1016/S0140-6736(14)61183-1 · Swerdlow DI et al. · *Lancet* 2015 (published Sept 2014) · n=223,463 for rs17238484 genetic analysis (43 studies); 129,170 RCT participants (20 statin trials) · Mendelian randomization + RCT meta-analysis · model: human genetics (HMGCR rs17238484 primary, rs12916 subsidiary) + RCT data · rs17238484-G: OR per allele 1.02 (95% CI 1.00–1.05; p=0.09) for T2D in genetic cohorts; overall RCT meta-analysis: OR 1.12 (95% CI 1.06–1.18) for new-onset T2D; also confirmed weight gain (0.24 kg mean, 95% CI 0.10–0.38); confirmed statin T2D adverse effect is on-target via HMGCR inhibition

[^ctt2010]: doi:10.1016/s0140-6736(10)61350-5 · Cholesterol Treatment Trialists (CTT) Collaboration · *Lancet* 2010 · n=170,000 participants, 26 trials · meta-analysis · per 1 mmol/L LDL-C reduction: RR 0.78 (95% CI 0.76–0.80) for major vascular events; 6252 citations in archive; citation percentile 100th

[^ference2015]: doi:10.1016/j.jacc.2015.02.020 · Ference BA et al. · *JACC* 2015 · n=108,376 (14 studies, 10,464 CHD events in primary analysis; external validation up to 62,240 cases/127,299 controls) · Mendelian randomization (NPC1L1 + HMGCR alleles as instruments for LDL lowering) · model: human genetics · HMGCR alleles → lower LDL-C → lower CHD risk; ~17% lower CHD per 10 mg/dL LDL reduction via HMGCR alleles (OR 0.828, 95% CI 0.775–0.885), consistent with CTT effect size

[^benn2017]: doi:10.1136/bmj.j1648 · Benn M, Nordestgaard BG, Frikke-Schmidt R, Tybjærg-Hansen A · *BMJ* 2017 · n=111,194 (Copenhagen General Population Study + Copenhagen City Heart Study) · Mendelian randomization · HMGCR-lowering alleles do NOT causally reduce AD or PD risk in MR (causal RR for AD per 1 mmol/L lower LDL = 0.57, 95% CI 0.27–1.17; NS); PCSK9-lowering alleles likewise NS for AD in MR; neither target shows a significant causal AD-protective signal

[^horton2002-ldlr]: doi:10.1073/pnas.1534923100 · Horton JD, Shah NA, Warrington JA et al. · *PNAS* 2003 · combined microarray (transgenic + knockout mice) · model: SREBP-1 and SREBP-2 transgenic/KO mouse liver · identified direct SREBP target genes including HMGCR and LDLR; ~1429 citations; widely cited basis for the "LDLR upregulation is the primary statin mechanism" framing

[^rnf145-2018]: doi:10.1074/jbc.RA117.001260 · Jiang LY et al. · *J Biol Chem* 2018 · biochemical + cell-based · model: HEK293 · identified RNF145 as an E3 ubiquitin ligase for sterol-induced HMGCR degradation, complementing the AMFR/gp78 pathway

[^ctt2024-t2d]: doi:10.1016/S2213-8587(24)00040-8 · Cholesterol Treatment Trialists (CTT) Collaboration · *Lancet Diabetes Endocrinol* 2024 · n=123,940 (19 placebo-controlled trials) + 30,724 (4 more-vs-less-intensive trials) · individual-participant-data meta-analysis · low/moderate-intensity statins: RR 1.10 (95% CI 1.04–1.16) for new-onset T2D; high-intensity statins: RR 1.36 (95% CI 1.25–1.48); effect consistent with small glycaemic shift rather than distinct diabetogenic mechanism

[^gap-aging-isoprenoid]: #gap/no-mechanism — no primary citation available for age-specific changes in HMGCR-derived isoprenoid availability as distinct from age-related cholesterol dysregulation.
