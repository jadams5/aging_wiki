---
type: protein
aliases: [LGALS3, galectin-3, Gal-3, Mac-2 antigen, "35 kDa lectin", CBP35, MAC2, "carbohydrate-binding protein 35"]
uniprot: P17931
ncbi-gene: 3958
hgnc: 6563
ensembl: ENSG00000131981
genage-id: null
mouse-ortholog: Lgals3
pathways: ["[[type-i-interferon-signaling]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: "no direct GTEx age-stratified correlation retrieved via API (eQTL query returned empty); Tyshkovskiy 2026 pan-tissue meta-analysis across rodents and primates shows LGALS3/Lgals3 consistently age-up across multiple tissues and species (see Why galectin-3 matters for aging section)"
mr-causal-evidence: partial
caused-by: []
causes: []
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Tyshkovskiy 2026 aging/mortality claims: pre-verified (PDF-read by prior pass). UniProt P17931 identity and domain architecture: verified via REST API. Henderson 2008 (renal fibrosis), Chalasani 2020 (belapectin phase 2b), Zetterberg 2022 (GB0139/GB1211), Wang 2022 (MR null HF), Gou 2023 (MR null PAD), Pan 2024 (MR PD): verified against local PDFs. Henry/Lumbers 2022 (Circulation MR HF): verified against local PDF. de Boer 2010 (review paper): PDF verified — reclassified from 'review/prospective cohort' to review. de Boer 2011 n=592 (HFrEF+HFpEF): unverifiable — closed-access, no PDF; n=592 and HFrEF+HFpEF breakdown flagged unverified. Shen 2024, Rahimian 2021, Xiao 2020, Puigdellivol 2020, Tremblay 2021, Srivatsan 2015: closed-access or OA fetch failed — flagged #gap/no-fulltext-access. Canonical-DB identity fields (UniProt, NCBI, HGNC, Ensembl): pre-verified via REST in prior pass."
---


# LGALS3 (galectin-3)

Galectin-3 is a **β-galactoside-binding lectin** (the only chimera-type galectin) secreted by macrophages, microglia and many other cells. It is a long-established **fibrosis and heart-failure biomarker** and a driver of macrophage activation, fibrogenesis and neuroinflammation. In aging biology it is one of the **most consistent conserved up-regulated markers of mammalian ageing, mortality, chronic disease and cellular damage**, alongside [[p21|CDKN1A]] and [[gpnmb|GPNMB]].

## Identity

| Field | Value |
|---|---|
| UniProt | P17931 (LEG3_HUMAN) |
| NCBI Gene | 3958 |
| HGNC symbol | LGALS3 |
| Ensembl | ENSG00000131981 |
| Mouse ortholog | Lgals3 (one-to-one) |
| GenAge ID | null — not listed in GenAge HAGR human aging gene database #gap/needs-canonical-id |

## Why galectin-3 matters for aging

In Tyshkovskiy et al. 2026, **`Lgals3` was a top conserved gene positively associated with ageing, expected mortality and (negatively) maximum lifespan across rodents and primates** [^tyshkovskiy2026], recurring throughout the study's damage, disease and rejuvenation analyses:

- **Universal mortality marker** — one of three headline genes (with `Cdkn1a` and `Gpnmb`) consistently up-regulated across ageing, chronic disease and in-vitro damage models.[^tyshkovskiy2026]
- **Chronic disease** — significantly up in ≥5 of 9 rodent disease models; a strong contributor to disease-associated mortality-tAge.[^tyshkovskiy-disease]
- **Damage/senescence in vitro** — among consistently up-regulated genes across replicative-senescence and stress models contributing to elevated tAge.[^tyshkovskiy2026]
- **Embryonic "ground zero"** — `Lgals3` (with `S100a8/9` and `Cdkn1a`) is **down-regulated up to embryonic day ~E10 then re-activated**, tracking the U-shaped tAge rejuvenation trajectory during embryogenesis ([[information-theory-of-aging]]).[^tyshkovskiy2026]
- **UK Biobank plasma validation** — circulating **LGALS3 protein (n=51,647) was positively associated with all-cause mortality** and broad multimorbidity (cardiac arrest, heart failure, liver cirrhosis, diabetes, kidney failure, depression, atherosclerosis, sleep disorders) after age/sex adjustment.[^tyshkovskiy-ukb]

See [[transcriptomic-clock-tage]] for how `Lgals3` enters the mortality clock.

## Molecular biology

### Domain architecture — chimera-type structure

Galectin-3 is the **only member of the chimera-type galectin sub-family** in mammals. UniProt P17931 documents a bipartite architecture [^uniprot-p17931]:

- **N-terminal collagen-like domain (residues ~1–117):** eight tandem repeats of a 9-amino acid Gly/Pro-rich motif (Y-P-G-X₃-P-G-A). This region mediates **self-association and oligomerization** — multivalent lattice formation on cell surfaces and in the extracellular matrix. The collagen-like repeats are also the principal site of MMP-dependent cleavage that can inactivate galectin-3 or release it from surface lattices.
- **C-terminal carbohydrate recognition domain (CRD, residues 118–248):** canonical galectin fold binding β-galactoside-containing glycans (Galβ1-3GlcNAc and Galβ1-4GlcNAc preferred); also accommodates poly-N-acetyllactosamine structures found on many cell-surface glycoproteins. The CRD contains a nuclear export signal (residues 226–241), accounting for nucleocytoplasmic shuttling.

### Post-translational modifications

UniProt records the following confirmed PTMs for P17931 [^uniprot-p17931]:

- N-terminal acetylation (Ala-2)
- Phosphorylation at Ser-6, Ser-12 (cytoplasmic; regulate nuclear import), and Ser-188 (within CRD; reduces sugar-binding affinity)
- Interchain disulfide (Cys-173) — contributes to extracellular oligomer stability

### Subcellular localization and secretion

Galectin-3 occupies **three compartments**:

1. **Cytoplasm** — most abundant pool; performs pre-mRNA splicing (splicing factor function per UniProt); interacts with TRIM16 to coordinate membrane-damage sensing and autophagy induction [^uniprot-p17931].
2. **Nucleus** — shuttles in via importin-dependent mechanism; regulates transcription; exported via its CRD NES.
3. **Extracellular** — secreted via a **non-classical pathway** requiring TMED10-mediated translocation through the ERGIC (ER-Golgi Intermediate Compartment), bypassing the classical ER/Golgi secretory route. Once extracellular it cross-links glycan-bearing receptors, forming characteristic lattices.

The same protein thus functions as an intracellular splicing factor, an autophagy-damage sensor, and an extracellular lectin — context determines which role predominates.

## Function and disease roles

### Tissue fibrosis (cardiac, renal, hepatic)

Galectin-3 is a **central fibrogenic mediator** secreted by activated macrophages. Macrophage-derived galectin-3 is required for fibroblast activation in renal obstruction models; genetic deletion of galectin-3 in Lgals3-KO mice significantly reduces renal collagen deposition and α-SMA expression after UUO [^henderson2008]. In renal fibrosis, the Twist1/galectin-3 axis programs macrophages toward a pro-fibrotic M2 polarization state: Twist1 transcriptionally activates galectin-3, which in turn drives M2 polarization (Arg-1, MR/CD206, IL-10, TGF-β expression) and renal fibrogenesis; conditional myeloid Twist1 knockout in UUO mice markedly reduces fibrosis [^wu2022]. In cardiac tissue, galectin-3 drives atrial fibrosis via bidirectional crosstalk with TGF-β1/Smad2 signaling: galectin-3 amplifies TGF-β1 expression and TGF-β1 reciprocally induces galectin-3, creating a feed-forward fibrotic loop [^xiao2020] — though this claim is from a closed-access paper (#gap/no-fulltext-access).

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Elevated galectin-3 in human cardiac, renal and hepatic fibrosis is well documented |
| Phenotype conserved in humans? | yes | FDA-cleared biomarker reflects cardiac fibrosis burden in HF patients |
| Replicated in humans? | yes | de Boer 2010 (review of cohorts; n=599, n=232 synthesized), de Boer 2011 (n=592, HFrEF+HFpEF; #gap/no-fulltext-access) + UK Biobank (Tyshkovskiy 2026) |

### Heart failure biomarker — FDA-cleared prognostic assay

Galectin-3 plasma levels rise with progressive cardiac fibrosis and remodeling, making it a stable, hemodynamics-independent measure of fibrotic burden. de Boer et al. 2010 — a review synthesizing multiple cohorts (including van Kimmenade et al., n=599 acutely dyspnoeic patients, AUC 0.72 for galectin-3 to diagnose acute HF; and Lok et al., n=232 chronic HF, HR 1.95 for mortality at 3.4-year median follow-up) — was the foundational review supporting FDA clearance of the **BGM Galectin-3 assay** [^deboer2010]. Subsequent independent validation in 592 hospitalized HF patients (de Boer et al. 2011) confirmed predictive value across both reduced and preserved ejection fraction phenotypes [^deboer2011]. The FDA cleared the BGM Galectin-3 assay as a **prognostic aid for chronic and acute HF** — the first galectin-3 test to achieve regulatory clearance.

Meta-analytic work suggests galectin-3 adds prognostic information to natriuretic peptides (NT-proBNP/BNP) in subgroups but performs modestly when these peptides are already known, reflecting its role as a fibrosis-specific (rather than wall-stress-specific) marker [^srivatsan2015]. #gap/needs-replication — the incremental predictive value of galectin-3 over NT-proBNP alone remains contested across cohorts. A 2024 meta-analysis (Cheng W et al., *ESC Heart Fail*, doi:10.1002/ehf2.14813; 24 cohort studies) confirmed that each 1 ng/mL increase in galectin-3 after HF hospitalization associates with ~4% higher all-cause mortality hazard and ~3% higher combined mortality/rehospitalization hazard, strengthening but not superseding the foundational de Boer biomarker framing.

### Neuroinflammation and microglial activation

In the CNS, galectin-3 is produced by and acts on microglia. Shen et al. 2024 demonstrated that galectin-3 expression increases after subarachnoid hemorrhage and drives microglial M1 polarization through **TLR4/NF-κB and JAK2/STAT3 signaling**; inhibition with TD139 reduced neuroinflammatory injury and improved neurological outcomes [^shen2024]. Rahimian et al. 2021 reviewed the broader neuroinflammation literature and characterized galectin-3 as a "bittersweet ligand" with context-dependent effects — functioning as both a danger-associated molecular pattern (DAMP) and an immune modulator, with complex roles across Alzheimer's and Parkinson's disease [^rahimian2021]. Puigdellívol et al. 2020 (review) synthesized evidence that microglia-derived galectin-3 binds desialylated neuronal surfaces, opsonizing neurons for phagocytosis via Mer tyrosine kinase, and activates microglia through TLR4 and TREM2 — constituting a feed-forward neuroinflammatory loop [^puigdellivol2020].

### Cancer biology (historical context)

Galectin-3 was first characterized as "Mac-2" on macrophage surfaces and as CBP35 (carbohydrate-binding protein 35) in fibroblasts. In oncology it promotes tumour-cell survival (anti-apoptotic via cytoplasmic BCL-2 interaction), angiogenesis, and metastatic adhesion. Decreased expression in colon carcinoma progression is documented in UniProt [^uniprot-p17931], illustrating tissue-specific gain/loss-of-function divergence.

## Mendelian randomization evidence

The causal status of circulating galectin-3 is **contested across phenotypes** — `mr-causal-evidence: partial`.

**Positive causal associations:**

- **Henry et al. 2022** (*Circulation*; PMID 35300523) — integrated proteomics + two-sample cis-MR in 3,019 participants (732 incident HF events) identified galectin-3 among **eight proteins with robust positive causal association with heart failure risk** (higher Gal-3 → higher HF risk), robust to multiverse sensitivity analysis across up to 120 parameter combinations; MR instruments from SCALLOP (n=30,931) and HERMES (47,309 HF cases) [^henry2022]. This is the highest-impact MR result for galectin-3 (cited_by_count 149, FWCI 17.4).
- **Pan et al. 2024** (*Brain and Behavior*; PMID 39444071) — two-sample MR (8 SNP instruments, n=30,931 European pQTL GWAS; PD GWAS: 33,674 cases / 449,056 controls) found increased serum galectin-3 associated with higher PD risk: IVW OR 1.112 (95% CI 1.025–1.206, p=0.010); consistent in weighted median (p=0.006), weighted mode (p=0.030), and MR-PRESSO (p=0.012). Simple mode was non-significant (OR 0.910, p=0.453). Reverse-MR found no effect of PD on galectin-3. No heterogeneity or pleiotropy detected [^pan2024].

**Null results:**

- **Wang et al. 2022** (*Frontiers in Cardiovascular Medicine*; PMID 35479285) — MR found no significant causal effect of galectin-3 on HF in IVW analysis (conflicting with Henry 2022; smaller instrument set) [^wang2022].
- **Gou et al. 2023** (*Frontiers in Cardiovascular Medicine*; PMID 38239874) — no causal relationship between galectin-3 and peripheral artery disease [^gou2023].
- **Tremblay et al. 2021** (*JCEM*; PMID 33693708) — no causal association with NAFLD or >800 disease traits in pan-phenome MR [^tremblay2021].

**Interpretation:** The HF causal signal from Henry 2022 is the strongest result by study power and impact, but conflicting with Wang 2022 for the same phenotype. The discordance likely reflects instrumental variable choice and HF sub-phenotype heterogeneity. The Parkinson's signal (Pan 2024) is biologically plausible via the neuroinflammation mechanism. Overall: evidence for causal involvement in specific fibrosis-driven phenotypes (HF, PD) is **partial** rather than confirmed.

## Druggability (aging-context tier 2)

Galectin-3 has an active clinical-stage inhibitor pipeline, but **no inhibitor is FDA-approved or aging-validated** as of 2026-05-29.

**Lead clinical-stage inhibitors:**

| Compound | Route | Indication | Stage | Notes |
|---|---|---|---|---|
| **GB0139 / TD139** | Inhaled | Idiopathic pulmonary fibrosis (IPF) | Phase IIb | Thiodigalactoside analog; highest-affinity preclinical galectin-3 binder [^zetterberg2022] |
| **GB1211** | Oral | Liver cirrhosis; solid tumors (melanoma, HNSCC with pembrolizumab) | Phase IIa/II | First orally available galectin-3 inhibitor class; antifibrotic activity in mouse models [^zetterberg2022]; Zetterberg 2022 cites Phase II hepatic impairment trial NCT05009680; wiki previously cited NCT05913388 (oncology) — #gap/needs-verification for current active trial IDs |
| **Belapectin (GR-MD-02)** | IV | NASH with cirrhosis and portal hypertension | Phase 2b completed; Phase 3 unclear | Phase 2b primary endpoint (HVPG reduction) **not met** in overall population; subgroup of patients without esophageal varices showed potential signal [^chalasani2020] |

**Aging-context tier-2 rationale:** Multiple inhibitors have reached clinical evaluation, establishing galectin-3 as a confirmed pharmacological target (criterion for tier 2). However, no galectin-3 inhibitor is FDA-approved, and none has been evaluated in an aging-rejuvenation or lifespan-extension indication. Belapectin's Phase 2b null result illustrates the translation challenge. Until a validated aging-context trial (targeting e.g. inflammaging, cardiac fibrosis, or biological-age reduction) succeeds, tier 2 (high-quality clinical probe; aging-validation pending) is appropriate.

**Active clinical trials (2026-05-29):** 0 trials with galectin-3 inhibitors as therapeutic agent currently recruiting for aging or fibrosis indications. GB1211 + pembrolizumab oncology trial (NCT05913388) is active. Multiple observational trials use galectin-3 as a biomarker endpoint.

## Gaps

- `genage-id:` null — LGALS3 is not listed in GenAge HAGR; its consistent aging-up expression and mortality association (Tyshkovskiy 2026) suggest future curation. #gap/needs-canonical-id
- Causality vs. damage-marker status for all-cause mortality is unresolved; UK Biobank associations are observational and MR evidence is mixed by phenotype. #gap/no-mechanism
- GTEx age-stratified expression correlation (`gtex-aging-correlation:`) not retrievable via API as of this pass; Tyshkovskiy 2026 pan-tissue age-up signal is the best current proxy. #gap/needs-verification
- The incremental value of plasma galectin-3 over NT-proBNP for HF prognosis remains unsettled across meta-analyses. #gap/contradictory-evidence
- No human RCT data on whether galectin-3 inhibition extends healthspan, reduces tAge, or reverses biological aging; Phase 3 belapectin trial status unclear post-Phase 2b null. #gap/needs-human-replication
- GB1211 active trial NCT IDs require re-verification against ClinicalTrials.gov — Zetterberg 2022 cites NCT05009680 (hepatic impairment, Phase II); wiki previously listed NCT05913388 (oncology arm); current recruiting status of both trials unknown as of 2026-05-29. #gap/needs-verification
- Xiao 2020 (cardiac TGF-β1/Smad2 bidirectional loop), Shen 2024 (neuroinflammation TLR4/NF-κB JAK2/STAT3), Rahimian 2021 (AD/PD neuroinflammation review), Srivatsan 2015 (NT-proBNP incremental value meta-analysis), Tremblay 2021 (pan-phenome MR): all closed-access — body claims cited to these papers are unverified against source. #gap/no-fulltext-access

## Related pages

- [[gpnmb]] · [[p21]] · [[transcriptomic-clock-tage]] · [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · [[chronic-inflammation]] · [[cellular-senescence]] · [[information-theory-of-aging]] · [[type-i-interferon-signaling]]

---

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=11,165 transcriptomes, 4 species · meta-analysis · elastic-net clock coefficients + mixed-effects gene-trait associations · model: mouse/rat/macaque/human, multi-tissue
[^tyshkovskiy-disease]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · 9 rodent disease datasets · ANOVA, P_adj<0.05 · model: mouse/rat disease models
[^tyshkovskiy-ukb]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · UK Biobank Olink plasma proteomics, n=51,647 · Cox proportional-hazards, adjusted age+sex, P_adj<0.05 · model: human
[^uniprot-p17931]: UniProt P17931 (LEG3_HUMAN), accessed 2026-05-29 · Swiss-Prot reviewed entry · 250 aa total (mature form 249 aa after Met-1 removal); N-terminal repeat domain residues 1–117 (8 × 9 aa repeats of Y-P-G-X(3)-P-G-A, residues 36–109); CRD residues 118–248; NES residues 226–241; phosphorylation confirmed at Ser-6, Ser-12, Ser-188; interchain disulfide Cys-173; TMED10-mediated ERGIC secretion; TRIM16 interaction for autophagy of damaged endomembranes · not a primary study; canonical DB entry
[^henderson2008]: doi:10.2353/ajpath.2008.070726 · Henderson NC, Mackinnon AC, Farnworth SL et al. · *American Journal of Pathology* 2008 · in-vivo/in-vitro · n=6 mice per group; Lgals3 KO vs WT, UUO (unilateral ureteric obstruction) model; CD11b-DTR macrophage-depletion experiments; adoptive transfer of WT vs Lgals3-/- BMDMs · galectin-3 KO significantly reduced collagen deposition (p<0.05) and α-SMA expression (p<0.05 mRNA, p<0.01 mRNA); macrophage-secreted galectin-3 required for renal fibroblast activation in co-culture; Lgals3 disruption does not affect macrophage recruitment or TGF-β/Smad2/3 signaling · cited_by 546 · model: mouse (FVB/N Lgals3 KO + WT littermates)
[^xiao2020]: doi:10.1159/000506072 · Xiao M et al. · *Cardiology* 2020 · in-vitro/in-vivo · TGF-β1/Smad pathway activation · model: human atrial fibrillation biopsy + cardiac fibroblasts — **#gap/no-fulltext-access: OA fetch failed; TGF-β1/Smad bidirectional loop claims unverified against source**
[^wu2022]: doi:10.1007/s00018-022-04137-0 · Wu Q, Sun S, Wei L et al. · *Cellular and Molecular Life Sciences* 2022 · in-vivo/in-vitro + human biopsy · human: IgA nephropathy biopsies Lee grades II–V (n=6 per group); mouse: Lyz2-Cre+Twist1fl/fl conditional myeloid KO + UUO model; n=3 mice per group · Twist1 transcriptionally activates galectin-3; galectin-3 mediates Twist1-induced M2 polarization (Arg-1, MR/CD206, IL-10, TGF-β up); myeloid Twist1 ablation reduces renal fibrosis, tubular injury, and M2 infiltration; galectin-3 re-expression rescues Twist1-KO fibrotic phenotype · renal fibrosis only; NOT cardiac · model: mouse (FVB background Lyz2-Cre+Twist1fl/fl) + human IgAN biopsies
[^deboer2010]: doi:10.1007/s11897-010-0004-x · de Boer RA, Yu L, van Veldhuisen DJ · *Current Heart Failure Reports* 2010 · review · reviews experimental and clinical evidence for galectin-3 in cardiac remodeling and HF; synthesizes van Kimmenade et al. (n=599 dyspnoeic patients, AUC 0.72), Lok et al. (n=232 chronic HF, HR 1.95) and animal model data; concludes galectin-3 is a useful HF prognostic biomarker incremental to NT-proBNP in specific subgroups; foundational review supporting FDA clearance of BGM Galectin-3 assay · cited_by 248
[^deboer2011]: doi:10.3109/07853890.2010.538080 · de Boer RA, Lok DJA, Jaarsma T, van der Meer P, Voors AA, Hillege HL, van Veldhuisen DJ · *Annals of Medicine* 2011 · observational · n=592 hospitalized HF patients (HFrEF + HFpEF) — **#gap/no-fulltext-access: closed-access PDF; n=592 and HFrEF+HFpEF breakdown unverified against source** · cited_by 581
[^srivatsan2015]: doi:10.1177/2047487314552797 · Srivatsan V et al. · *European Journal of Preventive Cardiology* 2015 · systematic review · galectin-3 inferior as standalone predictor when NT-proBNP known; additive in combination — **#gap/no-fulltext-access: OA fetch failed; claims unverified against source**
[^shen2024]: doi:10.1016/j.expneurol.2024.114777 · Shen et al. · *Experimental Neurology* 2024 · in-vivo · TLR4/NF-κB + JAK2/STAT3 pathway activation; TD139 inhibition improves neurological outcomes · model: rat subarachnoid hemorrhage · cited_by 11 · FWCI 5.3 — **#gap/no-fulltext-access: closed-access PDF; TLR4/NF-κB + JAK2/STAT3 pathway claims and TD139 neurological outcome claim unverified against source**
[^rahimian2021]: doi:10.1002/med.21784 · Rahimian R et al. · *Medicinal Research Reviews* 2021 · review · microglia-derived galectin-3, context-dependent neuroinflammation in AD/PD · cited_by 39 — **#gap/no-fulltext-access: OA fetch failed; claims unverified against source**
[^puigdellivol2020]: doi:10.3389/fncel.2020.00162 · Puigdellívol M et al. · *Frontiers in Cellular Neuroscience* 2020 · review/mechanistic · sialylation, galectin-3, TLR4/TREM2 phagocytosis axis in neurodegeneration
[^henry2022]: doi:10.1161/CIRCULATIONAHA.121.056663 · Henry A, Gordillo-Marañón M, Finan C, et al. (Lumbers RT, corresponding) · *Circulation* 2022 · proteomics + two-sample cis-MR · observational: n=3,019 participants, 732 incident HF events (4 cohorts: HOMAGE, PIVUS, ULSAM); MR instruments: SCALLOP GWAS n=30,931 (protein pQTL), HERMES GWAS 47,309 HF cases (outcome) · galectin-3 among 8 proteins with robust causal HF association (positive direction: higher Gal-3 → higher HF risk; multiverse sensitivity analysis concordant across up to 120 parameter combinations) · cited_by 149; FWCI 17.4; local PDF available
[^pan2024]: doi:10.1002/brb3.70103 · Pan R, Li W et al. · *Brain and Behavior* 2024 · two-sample MR (8 SNP instruments; Gal-3 pQTL GWAS: n=30,931 European [Folkersen 2020]; PD GWAS: 33,674 cases / 449,056 controls [IPDGC Nalls 2019]) · IVW OR 1.112 (95% CI 1.025–1.206, p=0.010); weighted median p=0.006; weighted mode p=0.030; MR-PRESSO p=0.012; simple mode OR 0.910 p=0.453 (non-significant); no heterogeneity (Q p=0.780) or pleiotropy (MR-Egger intercept p=0.454); reverse-MR negative · cited_by 2
[^wang2022]: doi:10.3389/fcvm.2022.868749 · Wang X et al. · *Frontiers in Cardiovascular Medicine* 2022 · two-sample MR (4 SNP instruments from SCALLOP GWAS n=30,931; HF GWAS from UK Biobank n=361,194: 1,405 cases + 359,789 controls) · IVW OR 1.0002 (95% CI 0.9994–1.0010, p=0.60); all sensitivity analyses concordantly null · cited_by 5 (conflicts with Henry 2022; different HF GWAS — UK Biobank ICD-coded vs HERMES multi-cohort)
[^gou2023]: doi:10.3389/fcvm.2023.1279396 · Gou Y et al. · *Frontiers in Cardiovascular Medicine* 2024 (published 4 Jan 2024) · two-sample MR (6 SNP instruments; Gal-3 GWAS n=21,758 European; PAD GWAS n=212,453 East Asian) · IVW OR 0.9869 (95% CI 0.8792–1.1078, p=0.8232); all sensitivity analyses concordantly null; MR-Egger intercept p=0.659 (no pleiotropy)
[^tremblay2021]: doi:10.1210/clinem/dgab144 · Tremblay M et al. · *JCEM* 2021 · pan-phenome MR (n=800+ traits) · no causal association between galectin-3 and NAFLD or most other traits tested · cited_by 7 — **#gap/no-fulltext-access: OA fetch failed; full pan-phenome scope unverified against source**
[^zetterberg2022]: doi:10.1021/acs.jmedchem.2c00660 · Zetterberg FR, MacKinnon A, Brimert T et al. · *Journal of Medicinal Chemistry* 2022 · medicinal chemistry · GB0139 (=TD139, thiodigalactoside) in Phase IIb IPF (NCT03832946, inhaled); GB1211 (oral, 1,3-substituted α-D-monogalactopyranoside class) completed Phase I healthy volunteers and commenced Phase II hepatic impairment (NCT05009680) as of publication date; antifibrotic activity in CCL4-liver-fibrosis and bleomycin-lung-fibrosis mouse models · cited_by 85; FWCI 9.9
[^chalasani2020]: doi:10.1053/j.gastro.2019.11.296 · Chalasani N et al. · *Gastroenterology* 2020 · phase 2b RCT · n=162 randomized (belapectin 2 mg/kg n=54; 8 mg/kg n=54; placebo n=54); biweekly IV infusions for 52 weeks; 36 US centers (NCT02462967) · primary endpoint: ΔHVPG at EOT not met in either dose group vs placebo (p=1.0 for 2 mg/kg; p=1.0 for 8 mg/kg); subgroup without esophageal varices at baseline (n=81): 2 mg/kg reduced HVPG (p=0.02) and new varices (p=0.03) · cited_by 324; FWCI 17.2
