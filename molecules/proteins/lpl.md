---
type: protein
aliases: [lipoprotein lipase, LIPL_HUMAN, LIPD, LPL]
uniprot: P06858
ncbi-gene: 4023
hgnc: 6677
ensembl: ENSG00000175445
genage-id: null
pathways: ["[[lipoprotein-metabolism]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: yes
caused-by: ["[[deregulated-nutrient-sensing]]", "[[insulin-igf1]]"]
causes: ["[[atherosclerosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "UniProt identity fields verified via REST API (P06858); STRENGTH primary trial citation corrected to doi:10.1001/jama.2020.22258; BRIDGE-TIMI 73a TG reduction figures corrected per PMID 38587249; PALISADE dosing interval corrected (Q3M not Q6M) and TG reduction figures corrected per PMID 39225259; APOC3 LOF footnote corrected — DOI, study-design label, and n corrected per primary paper (NEJMoa1307095, n=110,970); Ser447X CAD-risk claim rewritten — Xie 2017 does not support a per-allele CHD risk reduction; volanesorsen thrombocytopenia rate corrected per APPROACH trial (PMID 31390500); closed-access sources (REDUCE-IT, BRIDGE-TIMI 73a, PALISADE) verified via PubMed abstracts only — methods/discussion not read; Young 2011 GPIHBP1 mechanism verified against PDF; catalytic triad residues (Ser159, Asp183, His268) confirmed via UniProt feature table but not added to page body (not originally seeded)"
literature-checked-through: 2026-05-09
---

# LPL (Lipoprotein Lipase)

Lipoprotein lipase is the rate-limiting enzyme of plasma triglyceride hydrolysis — the gatekeeping step between liver-derived and gut-derived lipoproteins and peripheral tissue energy delivery. Synthesized in adipocytes, myocytes, and cardiomyocytes, LPL is transported to the luminal surface of capillary endothelium by [[gpihbp1]], where it cleaves triglyceride cores from chylomicrons and VLDL into free fatty acids for tissue uptake. LPL loss-of-function causes **familial chylomicronemia syndrome (FCS)**, the classical Mendelian severe hypertriglyceridemia. Genetic and Mendelian-randomization evidence confirms LPL gain-of-function is cardioprotective. A wave of novel APOC3-targeting and ANGPTL3-targeting drugs acts primarily by removing inhibition of endogenous LPL, repositioning this enzyme as a key therapeutic node in cardiovascular aging [^bhatt2019][^bergmark2024].

## Identity

- **UniProt:** P06858 (LIPL_HUMAN) — Swiss-Prot reviewed, accessed 2026-05-09
- **NCBI Gene:** 4023
- **HGNC:** 6677 (symbol: LPL; synonym: LIPD)
- **Ensembl:** ENSG00000175445
- **Chromosomal location:** 8p21.3
- **Length:** 475 aa precursor; signal peptide residues 1–27 → **448 aa mature protein**
- **Catalytic class:** Serine hydrolase; EC 3.1.1.34 (triglyceride lipase; primary) + EC 3.1.1.32 (phospholipase A1; secondary)
- **Mouse ortholog:** Lpl (one-to-one; high conservation; LPL KO mouse is a key mechanistic model)
- **GenAge entry:** not listed in GenAge-human as of 2026-05-09 #gap/needs-canonical-id (LPL is not curated in GenAge-human despite its well-established role in age-related CV risk; the human GenAge database focuses primarily on transcription factors and signaling proteins, and this lipase may warrant a future curation request)

## Function

LPL operates at the luminal surface of capillary endothelium in muscle, adipose, heart, and other tissues. The canonical mechanism [^young2011]:

1. **Synthesis** — LPL is produced in parenchymal cells (adipocytes, myocytes, cardiomyocytes, macrophages) — notably NOT in the endothelial cells where it functions.
2. **Transport to the capillary lumen** — Secreted LPL is captured by **GPIHBP1** (GPI-anchored HDL-binding protein 1, produced by endothelial cells), which transports LPL across the endothelium to anchor it on the luminal surface. GPIHBP1 mutations cause an FCS-like syndrome by preventing LPL from reaching its site of action.
3. **Lipolysis** — Circulating chylomicrons and VLDL (whose triglyceride-rich cores were assembled with [[apob]]-48 and [[apob]]-100 respectively) dock on luminal LPL, which hydrolyzes ester bonds in the TG core → **3 free fatty acids + 2-monoacylglycerol**. Free fatty acids enter underlying cells: adipocytes re-esterify for storage; myocytes and cardiomyocytes oxidize for fuel.
4. **Particle remodeling** — TG-depleted chylomicron remnants and VLDL remnants (IDL) are released back into circulation, enriched in cholesterol esters and ApoE. These remnants are taken up by liver LRP1 and [[ldlr]], or accumulate as atherogenic substrates if clearance is impaired.

### Activators and inhibitors

LPL activity is tightly regulated by apolipoproteins and the ANGPTL family:

| Regulator | Type | Mechanism | CV consequence of LOF |
|---|---|---|---|
| **ApoC-II** | Activator (required cofactor) | Direct allosteric activation via conformational shift [^goldberg1990] | ApoC-II LOF → severe hypertriglyceridemia (rare) |
| **ApoA-V** | Activator (modest) | Bridges lipoproteins to HSPG/LPL on endothelium | ApoA-V rare variants → hypertriglyceridemia |
| **ApoC-III** | Inhibitor | Dose-dependent inhibition; also displaces ApoC-II; independently inhibits remnant clearance by [[ldlr]]/LRP1 | APOC3 LOF → low TG, reduced CV risk (MR signal) [^jorgensen2014] |
| **ANGPTL3** | Inhibitor | Inhibits LPL activity (distinct from ANGPTL4 mechanism) [^shan2009] | ANGPTL3 LOF → combined hypotriglyceridemia + hypolipidemia |
| **ANGPTL4** | Inhibitor | Inactivates LPL by inducing dissociation of the active dimer into inactive monomers [^shan2009] | ANGPTL4 E40K → lower TG, CHD risk |
| **ANGPTL8** | Context-dependent | Forms complexes with ANGPTL3/ANGPTL4; redistributes LPL activity between fasting and fed states | Under investigation |

## Mendelian-randomization and genetic evidence

The causal chain from LPL activity → triglycerides → ASCVD is among the best-established in lipid genetics [^mr-causal-evidence: yes]:

- **LPL Ser447Stop (S447X)** — the most common functional LPL variant (~20% minor allele frequency in Europeans per population-level estimates). Truncates the terminal 2 amino acids. Modest **gain of function** in enzymatic activity. Xie 2017 meta-analysis (14 case-control studies, n=1,519 cases / 824 controls) found **no significant CAD risk reduction per allele** (OR 1.04, 95% CI 0.60–1.80, p=0.90); only the rare homozygous XX genotype was significantly associated with increased CAD risk (OR 2.37, 95% CI 1.33–4.24, p=0.004) — an unexpected direction interpreted cautiously given high heterogeneity (I²=53%) and publication bias in that subgroup [^xie2017]. The widely-cited per-allele cardioprotective effect (~10% lower CHD risk) derives from larger GWAS consortia data rather than Xie 2017 specifically. #gap/contradictory-evidence
- **LPL loss-of-function (compound heterozygous / homozygous)** → FCS phenotype (see below).
- **APOC3 loss-of-function** — Heterozygous carriers of rare APOC3 LOF variants (nonsense, splice-site, missense; ~1 in 150 persons of European ancestry) have ~39% lower TG and ~40% lower CHD risk (OR 0.60; 95% CI 0.47–0.75) across 110,970 participants in 15 studies [^jorgensen2014]. Consistent with LPL disinhibition being the proximate mechanism.
- **ANGPTL3 LOF** — associated with lower TG + lower LDL + reduced CAD, providing genetic validation of the LPL-axis as druggable for CV risk.

| Dimension | Status | Notes |
|---|---|---|
| LPL pathway conserved in humans? | yes | Enzyme, GPIHBP1-anchoring, ANGPTL regulation all conserved |
| CV phenotype conserved? | yes | MR instruments validate TG → ASCVD causality in humans |
| Replicated in humans? | yes | Multiple LOF/GOF variant studies + Phase 3 trials of LPL-axis drugs |

## Role in aging

LPL is not a classic longevity gene (not in GenAge-human), but it is central to the **cardiovascular aging risk axis**:

- **Postprandial hypertriglyceridemia** — LPL activity, and the efficiency of chylomicron and VLDL TG hydrolysis, declines modestly with age in some tissues. Older individuals show **prolonged postprandial hypertriglyceridemia** — elevated circulating remnant particles after meals [^lipoprotein-metabolism]. Remnant cholesterol (chylomicron and VLDL remnants) enters arterial intima and contributes to foam-cell formation in the same manner as LDL; this pathway is now recognized as an independent atherogenic mechanism complementary to the ApoB/[[ldlr]] axis. #gap/needs-replication (robust age-stratified human data on LPL activity decline remain limited)
- **Adipose tissue metabolic shift** — In obese and metabolically dysregulated older individuals, adipose LPL activity is reduced and hepatic lipase activity increased — tilting TG partitioning toward smaller, denser LDL particles and raising atherogenic risk beyond what fasting TG levels indicate.
- **ApoC-III as an inflammation-responsive LPL inhibitor** — ApoC-III levels rise with insulin resistance and metabolic syndrome, which are both age-associated. This creates a feed-forward loop: aging → insulin resistance → elevated ApoC-III → reduced LPL activity → higher TG + remnants → more ASCVD.
- **Indirect link to senescence** — Foam cells (macrophages laden with lipid from TG-rich remnants) undergo [[cellular-senescence]] within plaques, contributing SASP cytokines. This makes LPL-mediated TG flux an upstream driver of vascular inflammaging, linking to the [[altered-intercellular-communication]] and [[chronic-inflammation]] hallmarks.

## Familial chylomicronemia syndrome (FCS)

LPL homozygous or compound-heterozygous loss-of-function causes FCS — the canonical severe Mendelian hypertriglyceridemia:

- **Fasting TG:** often >1000–2000 mg/dL (normal < 150 mg/dL); plasma visibly lipemic
- **Complications:** recurrent acute pancreatitis (can be life-threatening), eruptive xanthomas, lipemia retinalis
- **Prevalence:** ~1:1,000,000 (true LPL LOF); the broader "multifactorial chylomicronemia" phenotype is ~100-fold more common
- **Standard TG-lowering drugs are ineffective in true FCS** — fibrates, fish oil, and niacin all require some residual LPL activity to work. Treatment pillars are: severe fat restriction (<10–15% kcal from fat; including medium-chain TG supplementation), plus novel RNA-targeting therapies that reduce ApoC-III (see below)
- **Alipogene tiparvovec** (Glybera) — AAV-LPL gene therapy, EU-approved 2012, then withdrawn due to limited market uptake; first gene therapy approved in the West. A successor AAV5-LPL gene therapy (NCT05860569) is now in Phase 2/3 in China for LPL-deficient patients with recurrent pancreatitis.

## Pharmacological landscape

LPL activity can be enhanced by four pharmacological strategies targeting the inhibitory regulators:

### 1. Fibrates — PPARα-mediated LPL upregulation

Fibrates (gemfibrozil, fenofibrate, bezafibrate) are **PPARα agonists** that transcriptionally upregulate LPL expression in muscle and adipose, increasing TG hydrolysis. They also downregulate ApoC-III. Net effect: ~30–50% TG reduction. CV outcome benefit is modest and primarily seen in subgroups with high TG / low HDL (ACCORD-Lipid, Helsinki Heart Study subgroup). FDA-approved; well-established safety profile.

### 2. Omega-3 fatty acids — LPL activation + VLDL suppression

High-dose omega-3 FAs (EPA, DHA) work via multiple mechanisms: activating PPARα → LPL upregulation; reducing hepatic VLDL secretion; activating LPL directly. The **EPA-vs-DHA controversy** is unresolved:

- **REDUCE-IT** (n=8,179; icosapent ethyl [EPA-only] 4 g/d vs mineral-oil placebo; statin-background; TG inclusion range 135–499 mg/dL; median baseline TG ~216 mg/dL per full paper — not confirmable from abstract alone): **25% relative reduction in MACE** (CV death, MI, stroke, revascularization, unstable angina); HR 0.75 (95% CI 0.68–0.83); p<0.001 [^bhatt2019]. However, the mineral-oil placebo control is contested — some argue the control raised LDL-C in the placebo arm, inflating apparent benefit [^strength-controversy]. #gap/contradictory-evidence
- **STRENGTH** (n=13,078; omega-3 carboxylic acid [EPA+DHA] 4 g/d vs corn oil placebo; similar statin-background; median baseline TG ~240 mg/dL): **no MACE benefit** (HR 0.99 [95% CI 0.90–1.09]); p=0.84; trial terminated early for futility [^strength2021]. Corn oil placebo considered "active" by some due to minor LDL-raising. The EPA vs mixed-ω3 mechanistic discordance remains unresolved. #gap/contradictory-evidence

Neither REDUCE-IT nor STRENGTH definitively isolates LPL activation as the mechanism of any CV benefit; anti-platelet, anti-inflammatory, and VLDL-suppression mechanisms co-occur. Icosapent ethyl is FDA-approved for CV risk reduction in TG-elevated high-risk patients on statins.

### 3. APOC3-targeting: disinhibiting LPL via ApoC-III knockdown

ApoC-III is the dominant endogenous LPL inhibitor. Three approved/late-stage agents target APOC3 mRNA:

**Volanesorsen (Waylivra)** — 2nd-gen antisense oligonucleotide (ASO). EMA conditionally approved for FCS 2019 (not FDA-approved). In APPROACH trial (n=66 FCS patients; volanesorsen vs placebo): reduced TG ~77% from baseline vs ~18% increase in placebo (p<0.001); mean TG decrease ~1,712 mg/dL in the volanesorsen group. **Key safety concern: thrombocytopenia** — 15/33 patients (45%) had platelet counts between 50,000–100,000/μL; 2/33 (6%) had severe thrombocytopenia (~25,000/μL); after enhanced platelet monitoring was instituted, no patient had counts below 50,000/μL. The FDA declined approval citing the thrombocytopenia risk. Requires close CBC monitoring. #gap/long-term-unknown

**Olezarsen (NEJM 2024)** — next-generation ASO to APOC3, designed with GalNAc-conjugation for hepatocyte targeting; improved TI vs volanesorsen. In BRIDGE-TIMI 73a (n=154; high CV-risk patients with TG 200–499 mg/dL on statin therapy): **50 mg monthly reduced TG by 49.3 percentage points** vs placebo; **80 mg monthly reduced TG by 53.1 percentage points** vs placebo; p<0.001 for both. Clinically meaningful thrombocytopenia not observed, in contrast to volanesorsen [^bergmark2024]. Phase 3 CV outcomes trial ongoing. Not yet FDA-approved.

**Plozasiran (ARO-APOC3)** — hepatocyte-targeted siRNA to APOC3 (Arrowhead/Amgen). In PALISADE trial (n=75; FCS patients with persistent chylomicronemia): **plozasiran 25 mg Q3M reduced TG by ~80%** vs placebo (−17%); **50 mg Q3M reduced TG by ~78%**; p<0.001 for both; acute pancreatitis significantly lower (OR 0.17; 95% CI 0.03–0.94; p=0.03) [^watts2025]. Phase 3 ongoing for severe hypertriglyceridemia. Thrombocytopenia not observed with siRNA modality.

### 4. ANGPTL3-targeting: dual LPL and PCSK9-independent LDL lowering

**Evinacumab (Evkeeza)** — anti-ANGPTL3 monoclonal antibody, FDA-approved for homozygous familial hypercholesterolemia (per [[ldlr]] page). Mechanistically works by releasing LPL from ANGPTL3 inhibition (→ TG lowering) and by a separate LDL-lowering mechanism independent of [[ldlr]] (relevant in HoFH where LDLR function is absent). Provides strong proof-of-concept that pharmacological ANGPTL3 blockade is safe and efficacious. Multiple ANGPTL3 ASO/siRNA approaches (vupanorsen, zodasiran) in development for non-FH hypertriglyceridemia.

## Pathway membership

- [[lipoprotein-metabolism]] — LPL is the central effector of TG hydrolysis in both the exogenous (chylomicron) and endogenous (VLDL) sub-pathways
- [[atherosclerosis]] — downstream consequence of impaired LPL-mediated remnant clearance
- [[insulin-igf1]] — insulin resistance reduces LPL activity in muscle and elevates ApoC-III; LPL activity is partially insulin-sensitive in adipose (stimulatory at physiologic insulin)

## Key interactors and related proteins

- [[gpihbp1]] — essential anchor; transports LPL to luminal endothelial surface; mutations → FCS-like syndrome
- [[apob]] — structural protein of TG-rich lipoprotein substrates (ApoB-48 on chylomicrons; ApoB-100 on VLDL)
- [[apoe]] — on remnant particles; ligand for hepatic clearance after LPL-mediated TG stripping
- [[ldlr]] — clears VLDL remnants (IDL) after LPL action; central partner in the overall lipoprotein cascade
- [[apoc3]] — primary endogenous inhibitor; drug target for LPL disinhibition
- [[angptl3]] — endogenous inhibitor; drug target for combined TG + LDL lowering
- [[gpihbp1]] — LPL-docking anchor on endothelium

## Limitations and gaps

- `#gap/needs-canonical-id` — LPL absent from GenAge-human as of 2026-05-09; lipase enzymes are underrepresented in aging databases relative to TFs and kinases.
- `#gap/needs-replication` — Age-related decline in LPL activity in specific tissues (muscle vs adipose) is understudied in well-powered human cohorts; most evidence is from small studies or indirect inference.
- `#gap/contradictory-evidence` — REDUCE-IT vs STRENGTH EPA/DHA outcome discordance is unresolved: mechanistic differences (EPA-only vs mixed, mineral-oil placebo issue) remain actively debated.
- `#gap/long-term-unknown` — APOC3-targeting therapy outcomes beyond 1–2 years, and long-term platelet safety of volanesorsen, are not established.
- `#gap/dose-response-unclear` — The optimal LPL-pathway targeting strategy for non-FCS patients with moderate hypertriglyceridemia (TG 200–500 mg/dL) who are already on maximal statins has not been settled by a CV outcomes trial (olezarsen Phase 3 data pending).
- `#gap/no-mechanism` — The molecular basis for the modest anti-atherogenic effect of LPL Ser447Stop (gain-of-function truncation of 2 C-terminal aa) remains incompletely understood at the structural level.

## Footnotes

[^bhatt2019]: doi:10.1056/NEJMoa1812792 · PMID: 30415628 · n=8,179 · rct (REDUCE-IT; icosapent ethyl 4 g/d vs mineral-oil placebo; statin-background; TG inclusion 135–499 mg/dL) · HR 0.75 (95% CI 0.68–0.83) · p<0.001 for MACE reduction (17.2% vs 22.0% event rate) · model: human (high CV-risk; 70.7% secondary prevention) · archive: not_oa (closed access; verified via PubMed abstract PMID 30415628)

[^strength2021]: doi:10.1001/jama.2020.22258 · n=13,078 · rct (STRENGTH primary publication; Nicholls SJ et al.; EPA+DHA omega-3 CA 4 g/d vs corn oil; statin-background; median baseline TG ~240 mg/dL) · HR 0.99 (95% CI 0.90–1.09) · p=0.84 (null result for MACE; trial terminated early for futility) · model: human (high CV-risk) · Note: a secondary analysis of achieved EPA/DHA levels in STRENGTH (doi:10.1001/jamacardio.2021.1157; Nissen et al.; archive: green OA via PMC8126992) also showed neutral HR 0.98 at top EPA tertile; discordance with REDUCE-IT may reflect EPA vs DHA pharmacology, mineral-oil-vs-corn-oil placebo effects, or both #gap/contradictory-evidence

[^strength-controversy]: The REDUCE-IT vs STRENGTH debate: mineral oil placebo in REDUCE-IT may have raised LDL-C ~11 mg/dL in placebo arm, inflating apparent benefit of icosapent ethyl. Counter-argument: even adjusting for LDL change, a significant residual benefit persists. No consensus as of 2026-05-09. #gap/contradictory-evidence

[^bergmark2024]: doi:10.1056/NEJMoa2402309 · n=154 · rct (BRIDGE-TIMI 73a; olezarsen 50 mg or 80 mg monthly vs placebo; high CV-risk patients with TG 200–499 mg/dL on statin therapy) · TG reduction: 49.3 percentage points (50 mg) and 53.1 percentage points (80 mg) vs placebo; p<0.001 · clinically meaningful thrombocytopenia not observed · model: human · archive: not_oa (closed access; verified via PubMed abstract PMID 38587249)

[^watts2025]: doi:10.1056/NEJMoa2409368 · n=75 · rct (PALISADE; plozasiran 25 mg or 50 mg Q3M [every 3 months] vs placebo; persistent chylomicronemia patients) · TG reduction ~80% (25 mg) and ~78% (50 mg) vs placebo (−17%); p<0.001 · acute pancreatitis significantly lower (OR 0.17; 95% CI 0.03–0.94; p=0.03) · model: human (persistent chylomicronemia) · archive: not_oa (closed access; verified via PubMed abstract PMID 39225259)

[^jorgensen2014]: doi:10.1056/NEJMoa1307095 · exome-sequencing + LOF-variant association study (TG and HDL Working Group of the Exome Sequencing Project, NHLBI) · n=110,970 for CHD analysis (34,002 CHD cases + 76,968 controls across 15 studies) · APOC3 LOF carriers (rare missense/splice/nonsense variants; ~1 in 150 persons): ~39% lower TG combined (42% European ancestry), ~40% lower CHD risk (OR 0.60; 95% CI 0.47–0.75; P<0.001) · study design: LOF variant discovery in 3,734 exomes + replication in 41,671 → CHD association in 110,970 (NOT a Mendelian randomization study) · model: human · archive: completed

[^young2011]: doi:10.1194/jlr.r018689 · review (J Lipid Research; thematic review series) · confirms GPIHBP1 expressed exclusively in capillary endothelial cells; LPL synthesized in parenchymal cells (adipocytes/myocytes/cardiomyocytes); GPIHBP1 transports LPL from interstitial space across endothelium to capillary lumen; single Ly6-domain missense mutations in GPIHBP1 can abolish LPL binding → FCS-like phenotype · archive: completed (hybrid OA)

[^shan2009]: doi:10.1074/jbc.m808477200 · in-vitro · mechanistic · Journal of Biological Chemistry · characterizes distinct inhibitory mechanisms of ANGPTL3 (inhibits LPL catalytic activity) vs ANGPTL4 (induces LPL dimer dissociation → inactive monomers) · 135 citations · archive: pending (hybrid OA)

[^goldberg1990]: doi:10.1016/s0021-9258(19)39557-2 · in-vitro · 239 citations · demonstrates ApoC-II direct allosteric activation of LPL; modulation by ApoA-IV · Journal of Biological Chemistry

[^xie2017]: doi:10.3390/ijerph14010084 · meta-analysis (14 case-control studies; n=1,519 CAD cases, 824 controls for Ser447X analysis) · LPL Ser447X polymorphism and coronary artery disease risk · key finding: X allele carrier model showed no significant CAD association (OR 1.04, 95% CI 0.60–1.80, p=0.90, I²=87%); XX homozygote genotype associated with increased CAD risk (OR 2.37, 95% CI 1.33–4.24, p=0.004, I²=53%; publication bias noted) · gold OA · archive: completed
