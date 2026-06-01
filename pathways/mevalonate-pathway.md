---
type: pathway
aliases: [mevalonate biosynthesis pathway, isoprenoid biosynthesis, MVA pathway, HMG-CoA pathway]
kegg: hsa00900
reactome: R-HSA-191273
wikipathways:
key-nodes: ["[[hmgcr]]", "[[srebp-2]]", "[[acly]]", "[[fdps]]", "[[fdft1]]", "[[idi1]]", "[[hmgcs1]]", "[[mvk]]", "[[ggps1]]"]
upstream: ["[[acly]]"]
downstream: ["[[ldlr]]", "[[apob]]", "[[atherosclerosis]]", "[[lipoprotein-metabolism]]", "[[coq10]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: 1
caused-by: ["[[srebp-2]]", "[[mtor]]", "[[ampk]]"]
causes: ["[[chronic-inflammation]]", "[[atherosclerosis]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Sever 2003 (INSIG-HMGCR ERAD) verified against local PDF — corrected E3-ligase attribution, half-life numbers, cell-line names; Peterson 2011 (mTORC1→lipin-1→SREBP) verified against local PDF and cross-checked against verified srebp-2.md — footnote corrected to reflect no direct lipin-1–SREBP physical interaction; Pinkosky 2016 (bempedoic acid) verified against local PDF — corrected AMPK mechanism (direct independent activation, not secondary), clarified LDL-C lowering is AMPK-independent; Ference 2019 (ACLY MR) verified against local PDF — added OR 0.823 (95% CI 0.78–0.87); Dohlmann 2018 (LIFESTAT) verified via PubMed abstract (PDF download failed, bronze OA) — MAJOR CORRECTION: study is cross-sectional observational not RCT, n=84 not 50, no CoQ10 supplementation arm; separate Dohlmann 2022 Antioxidants RCT (n=37, 400mg CoQ10 × 8wk) added as [^dohlmann2022]; Sattar 2010 (statin T2D meta-analysis) closed-access, not independently re-verified — OR 1.09 and n=91,140 retained as stated; KEGG hsa00900 and Reactome R-HSA-191273 confirmed via REST APIs; enzyme nomenclature consistent with HGNC/UniProt canonical names."
literature-checked-through: 2026-05-09
---

# Mevalonate pathway

The **mevalonate pathway** (MVA pathway) is a 9-step cytosolic biosynthetic route that converts three molecules of acetyl-CoA into isopentenyl pyrophosphate (IPP), the universal isoprene unit, and then branches to produce **both** the sterol branch (cholesterol, bile acids, steroid hormones, vitamin D) and the **non-sterol isoprenoid branch** (farnesyl-PP, geranylgeranyl-PP, dolichol, ubiquinone/CoQ10, isopentenyl-tRNA). The pathway is rate-limited at the [[hmgcr|HMG-CoA reductase]] step — the target of statins. Because non-sterol isoprenoids mediate protein prenylation (Rho/Rac/Ras GTPases), mitochondrial electron transport ([[coq10|CoQ10]]), and N-glycosylation (dolichol), statin-mediated mevalonate flux reduction produces pleiotropic effects well beyond cholesterol lowering — including anti-inflammatory and adverse effects — all traceable to this single pathway.

> **Naming note:** This page is the canonical integrating view for the mevalonate/isoprenoid pathway. The rate-limiting enzyme ([[hmgcr]]) and the master transcriptional regulator ([[srebp-2]]) each have dedicated protein pages; this page aggregates the pathway-level view and the pharmacological intersection.

---

## Step-by-step enzyme map

The pathway proceeds through nine well-characterized cytosolic steps, with two major branch-points at farnesyl-PP (FPP) and geranylgeranyl-PP (GGPP).

| Step | Enzyme (gene) | Reaction | Product |
|---|---|---|---|
| 1 | Acetyl-CoA acetyltransferase (ACAT2, cytosolic) | 2 × acetyl-CoA → acetoacetyl-CoA | acetoacetyl-CoA |
| 2 | HMG-CoA synthase ([[hmgcs1]]) | acetoacetyl-CoA + acetyl-CoA → HMG-CoA | HMG-CoA |
| 3 | **HMG-CoA reductase ([[hmgcr]])** | HMG-CoA + 2 NADPH → mevalonate | **mevalonate** ← rate-limiting; statin target |
| 4 | Mevalonate kinase ([[mvk]]) | mevalonate + ATP → 5-phospho-mevalonate | 5-P-mevalonate |
| 5 | Phosphomevalonate kinase ([[pmvk]]) | 5-P-mevalonate + ATP → 5-PP-mevalonate | 5-PP-mevalonate |
| 6 | Mevalonate-5-PP decarboxylase ([[mvd]]) | 5-PP-mevalonate + ATP → IPP + CO₂ | **isopentenyl-PP (IPP)** — universal isoprene unit |
| 7 | Isopentenyl-PP isomerase ([[idi1]]/IDI2) | IPP ⇌ DMAPP | dimethylallyl-PP (DMAPP) |
| 8 | Farnesyl-PP synthase ([[fdps]]) | IPP + DMAPP → GPP; GPP + IPP → FPP | **farnesyl-PP (FPP)** — first major branch-point |
| 9a | Squalene synthase ([[fdft1]]) | 2 × FPP → squalene | squalene → cholesterol (sterol branch) |
| 9b | Geranylgeranyl-PP synthase ([[ggps1]]) | FPP + IPP → GGPP | **geranylgeranyl-PP (GGPP)** — second major branch-point |

Note: Steps 7–8 are encoded by two IDI paralogs (IDI1, IDI2) and a single bifunctional FDPS. Enzyme residue numbers are not enumerated here — consult UniProt or the Sever/Goldstein literature for active-site details.

---

## Branch points and downstream products

### Sterol branch (from FPP via squalene synthase, FDFT1)

FPP → squalene (FDFT1) → squalene epoxide (SQLE) → lanosterol (LSS) → cholesterol via either the Bloch or Kandutsch–Russell pathway (~19 additional steps involving CYP51A1, DHCR24, DHCR7, and multiple desaturases/reductases). See Reactome R-HSA-191273 sub-pathways for full step detail.

Cholesterol is the precursor to:
- Bile acids (CYP7A1)
- Steroid hormones (CYP11A1 → pregnenolone cascade)
- Vitamin D₃ (cholesterol → 7-dehydrocholesterol → vitamin D₃ via UV)

### Non-sterol isoprenoid branch (from FPP and GGPP)

| Product | Route | Function |
|---|---|---|
| **Geranylgeranyl-PP (GGPP)** | FPP + IPP via [[ggps1]] | Protein prenylation substrate for Rho/Rac/Cdc42 GTPases and γ-subunits of heterotrimeric G-proteins |
| **Dolichol** | FPP → cis-polyprenyl-PP elongation | N-glycosylation carrier in the ER; required for glycoprotein biosynthesis |
| **Ubiquinone (CoQ10)** | FPP → polyprenyl-PP tail → conjugated to 4-HB ring | Mitochondrial electron transport (complex I→III electron shuttle); antioxidant |
| **Heme A** | FPP → farnesol → heme A | Cytochrome c oxidase (complex IV) prosthetic group |
| **Isopentenyl-tRNA** | IPP → tRNA isopentenylation (TRIT1) | Modifies anticodon loop of mitochondrial tRNAs; affects translation of selenoproteins |

**Prenylated proteins.** Rho-family GTPases (RhoA, Rac1, Cdc42) are geranylgeranylated at their C-terminal CAAX motif. Ras is farnesylated. Both require isoprenyl modification for membrane tethering and GTPase cycle activity. Depleting the GGPP or FPP pool (by statin-induced mevalonate flux reduction) disrupts prenylation and alters Rho/Rac activity — the mechanistic foundation of statin pleiotropy.

---

## Regulation

### Transcriptional: [[srebp-2]]

When cellular free cholesterol falls, the SCAP/[[srebp-2]] complex translocates from ER to Golgi, enabling S1P/S2P-mediated cleavage of SREBP-2 to its active nuclear form. Active SREBP-2 drives transcription of virtually every enzyme in the mevalonate pathway: HMGCS1, [[hmgcr]], [[mvk]], [[pmvk]], [[mvd]], [[fdps]], [[fdft1]], IDI1, SQLE, DHCR24, DHCR7 — as well as LDLR (for cholesterol import). This creates a coordinated feedforward loop: low cholesterol → more pathway enzymes AND more LDLR.

### Post-translational: sterol-accelerated HMGCR ERAD

When sterol levels rise, sterol-sensing domain occupancy of [[hmgcr]] enables binding to INSIG-1/2 (insulin-induced gene proteins) at the ER membrane, leading to ubiquitination and proteasomal degradation of HMGCR [^sever2003]. The Sever 2003 study established the INSIG-1–HMGCR sterol-sensing-domain interaction as the essential step; E3 ligase identity (subsequently characterized as Hrd1/gp78 and RNF145) was not established in that paper. This is the fastest regulatory arm: with INSIG-1 present, HMGCR protein half-life falls to ~1 h in sterol-replete conditions (vs ~4–6 h without sterols) [^sever2003]. Statins exploit this paradoxically — by blocking mevalonate synthesis (and hence sterol accumulation), they partially prevent sterol-induced HMGCR ERAD, but the dominant effect is the LDLR upregulation arm via SREBP-2 relief.

### Energy-state: [[ampk]] phosphorylation of HMGCR

[[ampk|AMPK]] phosphorylates HMGCR at Ser872 (human numbering), inactivating the enzyme [^hardie1997]. This is a conserved energy-sensing brake: low ATP → AMP accumulates → AMPK activates → HMGCR inactivated → mevalonate flux reduced. Physiologically relevant during caloric restriction, exercise, and metformin treatment. Note: the phosphorylation site number may differ between species — cite primary source for exact coordinates. #gap/dose-response-unclear — the fraction of cellular HMGCR activity attributable to AMPK-mediated phosphorylation vs sterol-regulated ERAD under physiological conditions is not well quantified.

### mTORC1 → SREBP-2 axis

[[mtor|mTORC1]] activates SREBP-1/2 indirectly: phosphorylation of lipin-1 by mTORC1 excludes lipin-1 from the nucleus, preventing it from acting as a co-repressor of SREBP target genes [^peterson2011]. Active mTORC1 (chronic anabolic state, over-nutrition) therefore drives mevalonate pathway gene expression and cholesterol synthesis. This connects mevalonate hyperactivity mechanistically to [[deregulated-nutrient-sensing]] as a hallmark.

---

## Pharmacological targets

| Drug class | Target (enzyme/step) | Mechanism | Notes |
|---|---|---|---|
| **[[interventions/pharmacological/statins\|Statins]]** | [[hmgcr]] (step 3) | Competitive inhibition (HMG-CoA analog); depletes mevalonate → all downstream branches reduced | Primary effect: LDLR upregulation via SREBP-2; pleiotropic effects via reduced isoprenoid pool |
| **Bempedoic acid** | [[acly]] (upstream of pathway) | Prodrug (ETC-1002) activated by ACSVL1 in liver to ETC-1002-CoA; ETC-1002-CoA inhibits ACLY (competitive re CoA, Ki=2 μM) → ↓ cytosolic acetyl-CoA → ↓ HMG-CoA substrate; ETC-1002-CoA also directly activates AMPK β1 (independent of ACLY inhibition) [^pinkosky2016] | Liver-specific activation (ACSVL1 absent in skeletal muscle → no myotoxicity); LDL-C lowering shown to be AMPK-independent in DKO mice, driven by ACLY inhibition → SREBP-2 → LDLR |
| **[[bisphosphonates]]** (alendronate, zoledronate) | [[fdps]] (step 8) | Pyrophosphate mimetics that bind FDPS active site → ↓ FPP → ↓ protein prenylation in osteoclasts → osteoclast apoptosis | Approved for osteoporosis; anti-inflammatory aging signal discussed below |
| **Squalene synthase inhibitors** (lapaquistat) | [[fdft1]] (step 9a) | Block sterol branch only → theoretically spare non-sterol isoprenoids | Failed Phase 3 (hepatotoxicity); no approved agent |

**Bempedoic acid: Mendelian randomization validation.** A Mendelian randomization study using loss-of-function variants in *ACLY* found that lower ACLY activity reduces LDL-C and cardiovascular risk with an effect size consistent with statins at equivalent LDL-C lowering, providing causal genetic evidence for the ACLY → mevalonate → LDL-C axis [^ference2019].

---

## Statin pleiotropy: the isoprenoid framework

Statins reduce total mevalonate flux. The LDL-lowering effect (sterol branch) is well-validated and clinically dominant. The non-sterol effects arise from isoprenoid pool depletion:

### 1. Anti-inflammatory pleiotropy (GGPP depletion → Rho/NF-κB)

Reduced GGPP → impaired Rho/Rac prenylation → diminished Rho-GTPase membrane recruitment → reduced downstream NF-κB activation and inflammatory cytokine production. This provides the mechanistic basis for statin CRP-lowering independent of LDL-C reduction, documented across multiple trials [^oesterle2017]. The anti-inflammatory effect is analogous in magnitude and pathway to canakinumab (CANTOS trial IL-1β blockade), though the mechanistic route differs. #gap/needs-replication — whether the isoprenoid-depletion anti-inflammatory benefit is causally distinct from the LDL-lowering anti-inflammatory benefit (reduced oxLDL, macrophage foam cell formation) in clinical outcomes remains unresolved.

### 2. CoQ10 depletion and statin-associated muscle symptoms (SAMS)

Biochemical rationale: reduced mevalonate → reduced FPP → reduced CoQ10 synthesis → ↓ mitochondrial electron transport → muscle energy deficit → SAMS. However, the clinical evidence does not support this mechanism clearly. The LIFESTAT cross-sectional study (n=64 simvastatin patients [25 myalgic, 39 non-symptomatic] + 20 cholesterol-untreated controls) found that statin patients had reduced skeletal muscle mitochondrial complex II-linked respiration but **intramuscular CoQ10 concentration was comparable among groups** [^dohlmann2018]. A separate CoQ10 supplementation RCT in simvastatin-treated patients (n=37, 400 mg/day × 8 weeks, double-blind placebo-controlled) confirmed that CoQ10 supplementation did not raise muscle CoQ10 levels or improve mitochondrial function [^dohlmann2022]. Two meta-analyses of CoQ10 supplementation in statin-associated myopathy found no significant reduction in myalgia [^kennedy2020] [^wei2022]. #gap/contradictory-evidence — plasma CoQ10 is depleted by statins, but muscle CoQ10 is not; the causal chain to SAMS via CoQ10 is not supported by observational or RCT evidence.

### 3. Statin-associated new-onset diabetes (T2D risk)

Meta-analysis of 13 statin RCTs (n=91,140) found an OR of 1.09 (95% CI 1.02–1.17) for incident T2D [^sattar2010]. Proposed mechanisms include: (a) reduced β-cell isoprenoid prenylation impairing glucose-stimulated insulin secretion via disrupted Rac1/Cdc42 cycling at the plasma membrane; (b) reduced tRNA isopentenylation (via IPP depletion → TRIT1 substrate depletion) potentially affecting selenoprotein translation in pancreatic β-cells. The selenoprotein hypothesis is biologically plausible but not yet confirmed in human β-cell models. #gap/no-mechanism — the dominant mechanism for statin-induced β-cell dysfunction is not established.

### 4. Dolichol and N-glycosylation (clinically silent under therapeutic dosing)

Mild dolichol depletion could theoretically impair N-glycosylation of surface receptors, but no clinical syndrome attributable to statin-induced glycosylation defects has been documented at therapeutic doses.

---

## Aging relevance

### 1. Mevalonate hyperactivation in chronic anabolic states

The mTORC1 → SREBP-2 → mevalonate axis links overnutrition/insulin resistance to accelerated cholesterol biosynthesis and isoprenoid production. Persistent mTORC1 activity (obesity, insulin resistance) drives chronic HMGCR expression, elevating intracellular sterol flux and generating the excess prenylated GTPase signaling that sustains macrophage inflammation and vascular endothelial dysfunction. This connects to [[deregulated-nutrient-sensing]].

### 2. Bisphosphonate longevity signal

Observational evidence from a population-based study of anti-osteoporosis medications in 79,636 patients found significantly lower post-fracture all-cause mortality in zoledronic acid and alendronate/risedronate users compared to raloxifene [^wu2022], consistent with the hypothesis that FDPS inhibition modulates macrophage/osteoclast inflammaging via reduced Rho prenylation. These agents directly target step 8 of the mevalonate pathway. The anti-cancer benefits of bisphosphonates (now established in breast cancer) may also run through reduced Ras/Rho isoprenylation in tumor cells. **However, the mortality reduction in the observational data is likely confounded by healthy-user effects** (patients adherent to bisphosphonate therapy have better overall care). #gap/needs-human-replication — a randomized trial of bisphosphonates for longevity (independent of bone endpoints) has not been conducted.

### 3. CoQ10 and mitochondrial aging

[[coq10|CoQ10]] biosynthesis depends on unimpeded mevalonate flux through the FPP branch. Age-associated decline in CoQ10 biosynthesis has been described, though whether it is driven by mevalonate pathway downregulation vs. downstream CoQ10 synthesis enzyme changes is unclear. See [[coq10]] for the aging-specific evidence. #gap/needs-replication

### 4. Inflammaging via Rho-prenylation dysregulation

Aged macrophages accumulate dysfunctional Rho-GTPase cycling (elevated RhoA, reduced Rac1 activity), contributing to inflammaging. Whether this partly reflects age-related changes in isoprenoid availability is an open question. #gap/no-mechanism

---

## Evidence extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — all nine core enzymes are orthologous and functionally conserved |
| Pharmacological effects replicated in humans? | yes — statin LDL-C lowering and CVD risk reduction are among the most replicated pharmacological effects in human RCT history |
| Non-sterol isoprenoid effects replicated in humans? | partial — anti-inflammatory (CRP) effects validated; SAMS-CoQ10 link not confirmed; β-cell mechanism not established |

---

## Limitations and gaps

- #gap/needs-replication — the specific contribution of reduced isoprenoid prenylation (vs. LDL-C reduction) to statin cardiovascular benefit has not been isolated in a human RCT
- #gap/no-mechanism — mechanistic basis of statin-associated T2D at the cellular level (isoprenoid vs. glucose metabolism vs. glycogen synthesis) not established
- #gap/needs-human-replication — bisphosphonate longevity signal is observational only; confounding not excluded
- #gap/dose-response-unclear — the minimum mevalonate flux reduction needed to produce anti-inflammatory isoprenoid effects is not quantified; current statin doses were selected for LDL-C lowering, not isoprenoid targeting
- #gap/long-term-unknown — consequences of partial chronic dolichol depletion at therapeutic statin doses for aging glycoproteome not studied

Forward-ref stubs needed: [[acly]], [[fdps]], [[fdft1]], [[idi1]], [[mvk]], [[pmvk]], [[mvd]], [[hmgcs1]], [[ggps1]], [[bisphosphonates]], [[selenoproteins]]

---

## Footnotes

[^sever2003]: doi:10.1016/s1097-2765(02)00822-5 · Sever N et al. · *Molecular Cell* 2003 · in-vitro (CHO-K1 cells + HEK-293S stably transfected cells) · model: mammalian cell lines · established mechanism: INSIG-1 binds HMGCR sterol-sensing domain → accelerated proteasomal degradation; HMGCR half-life ~1 h with INSIG-1 + sterols vs ~4–6 h without sterols; E3 ligase identity not established in this paper (Hrd1/gp78 and RNF145 were characterized later); SCAP sterol-sensing domain competes with HMGCR for INSIG-1 binding; protein locally available via a local paper archive

[^hardie1997]: doi:10.1042/bst0251229 · Hardie DG et al. · *Biochem Soc Trans* 1997 · review · established AMPK phosphorylation of HMGCR as a conserved energy-sensing regulatory arm; n/a (review)

[^peterson2011]: doi:10.1016/j.cell.2011.06.034 · Peterson TR et al. · *Cell* 2011 · in-vitro + in-vivo (NIH 3T3, MEFs, HEK293T, mouse liver [Li-Rap^KO]) · model: mammalian cells + mice · mTORC1 phosphorylates lipin-1 at multiple sites (key: S106, S472) → promotes cytoplasmic retention of lipin-1; nuclear lipin-1 (dephosphorylated) reduces nuclear SREBP protein abundance and SREBP target gene expression via nuclear lamina remodeling (no direct lipin-1–SREBP physical interaction detected); liver-specific raptor-KO mice resistant to high-fat-diet hypercholesterolemia in lipin-1-dependent manner; protein locally available via a local paper archive

[^pinkosky2016]: doi:10.1038/ncomms13457 · Pinkosky SL et al. · *Nature Communications* 2016 · in-vivo (rodent) + in-vitro · model: APOE/AMPK β1 DKO mice, C57BL/6 mice, human hepatocytes, human skeletal muscle myotubes · bempedoic acid (ETC-1002) prodrug activated by ACSVL1 in liver to ETC-1002-CoA; ETC-1002-CoA competitively inhibits ACLY (Ki=2 μM vs CoA) and directly activates AMPK β1 (independent mechanism); ACLY inhibition is primary LDL-C-lowering mechanism (DKO mice lacking AMPK β1 still showed LDL-C reduction); ACSVL1 absent in skeletal muscle → no ETC-1002-CoA formation → no cholesterol synthesis suppression → mechanistic basis for lower myotoxicity; 441 citations; gold OA

[^ference2019]: doi:10.1056/NEJMoa1806747 · Ference BA et al. · *NEJM* 2019 · mendelian-randomization · n=654,783 (pooled GWAS/cohort studies; 105,429 with major CVD events) · genetic score of 9 independently inherited ACLY variants; per 10 mg/dL lower LDL-C via ACLY score: OR 0.823 (95% CI 0.78–0.87, P=4.0×10⁻¹⁴) for major CVD events — similar to HMGCR score OR 0.836 (95% CI 0.81–0.87); confirms ACLY inhibition lowers CVD risk by same mechanism as statins, proportional to LDL-C lowering; no increased cancer risk with either score

[^oesterle2017]: doi:10.1161/CIRCRESAHA.116.308537 · Oesterle A, Laufs U, Liao JK · *Circulation Research* 2017 · review · 1,155 citations · comprehensive review of statin pleiotropy mechanisms including GGPP-Rho-NF-κB anti-inflammatory axis; closed-access (not_oa per a local paper archive)

[^dohlmann2018]: doi:10.1210/jc.2018-01185 · Dohlmann TL et al. (LIFESTAT study) · *J Clin Endocrinol Metab* 2019 · cross-sectional observational · n=84 (64 simvastatin patients: 25 myalgic + 39 non-symptomatic; plus 20 untreated-hypercholesterolemia controls) · NOT an RCT; no CoQ10 supplementation arm; primary finding: intramuscular CoQ10 comparable among all groups; complex II-linked mitochondrial respiration reduced in statin groups vs controls; argues against intramuscular CoQ10 depletion as primary SAMS mechanism; 37 citations

[^dohlmann2022]: doi:10.3390/antiox11091698 · Dohlmann TL et al. · *Antioxidants* 2022 · rct · n=37 simvastatin patients (randomized, double-blind, placebo-controlled) · 400 mg/day CoQ10 × 8 weeks; primary finding: CoQ10 supplementation did not increase muscle CoQ10 levels, did not improve mitochondrial function, and did not reduce myalgia; confirms the muscle CoQ10 hypothesis is not supported by supplementation intervention; PMID 36139772

[^kennedy2020]: doi:10.1016/j.atherosclerosis.2020.03.006 · Kennedy C, Köller Y, Surkova E · *Atherosclerosis* 2020 · meta-analysis · systematic review + meta-analysis of RCTs; CoQ10 supplementation did not significantly reduce statin-associated myalgia or improve statin adherence; 50 citations

[^wei2022]: doi:10.1007/s11845-021-02651-x · Wei H et al. · *Ir J Med Sci* 2022 · meta-analysis · meta-analysis of RCTs of CoQ10 in statin-induced myopathy; no significant benefit on muscle symptoms; 23 citations; closed-access

[^sattar2010]: doi:10.1016/S0140-6736(09)61965-6 · Sattar N et al. · *Lancet* 2010 · meta-analysis · n=91,140 (13 statin RCTs) · OR 1.09 (95% CI 1.02–1.17) for incident diabetes vs placebo; collaborative meta-analysis; 2,407 citations; closed-access

[^wu2022]: doi:10.1210/clinem/dgac636 · Wu et al. · *J Clin Endocrinol Metab* 2022 · observational (population-based) · n=79,636 · significantly lower post-fracture all-cause mortality with zoledronic acid and alendronate/risedronate vs raloxifene; confounding (healthy-user effect) cannot be excluded; 17 citations
