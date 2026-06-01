---
type: protein
aliases: [proprotein convertase subtilisin/kexin type 9, NARC-1, NARC1, neural apoptosis-regulated convertase 1, PC9]
uniprot: Q8NBP7
ncbi-gene: 255738
hgnc: 20001
ensembl: ENSG00000169174
genage-id: null
pathways: ["[[lipoprotein-metabolism]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 1
gtex-aging-correlation: "liver-dominant tissue (28.3 TPM, top tissue across GTEx); hepatic mRNA ρ=+0.08 (n=262, not significant; weak positive trend with age); whole blood ρ=−0.17 (n=803, weak negative — opposite direction); subQ adipose ρ=+0.15; VAT ρ=+0.10; SM ρ=+0.15. Direct hepatic transcript signal is weak in bulk RNA-seq, but post-translational regulation dominates plasma PCSK9 protein levels and is not captured by transcript data. Yang 2024 snRNA-seq ([[studies/yang-2023-primate-liver-aging-snrna-srebp2]]) implies per-hepatocyte SREBP-2 hyperactivation → SREBP-2-driven PCSK9 transcription up — bulk is the wrong instrument. GTEx v10 query 2026-05-21 via attributeSubset=ageBracket."
mr-causal-evidence: yes
caused-by: []
causes: ["[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Seidah 2003 and Lagace/Kwon 2008 verified against full PDFs (PMC open access); Cohen 2006, Sabatine 2017, Robinson 2015 verified against full PDFs (camoufox download). Abifadel 2003 PDF path broken in archive (symlink (stale local path) not present); claims verified via Crossref metadata + PubMed abstract; mutation names (S127R, F216L) and family count (2 French FH pedigrees) are consistent with secondary literature but not independently confirmed from full text — recommend re-check on next lint pass once PDF is accessible. Canonical-database identity fields (UniProt Q8NBP7, NCBI Gene 255738, HGNC 20001, Ensembl ENSG00000169174) not independently re-verified against databases this pass."
---

# PCSK9

A secreted serine protease expressed primarily in the liver that acts as a master post-translational regulator of the [[ldlr|LDL receptor (LDLR)]]. PCSK9 promotes lysosomal degradation of hepatic LDLR, thereby reducing clearance of [[apob|ApoB]]-containing lipoproteins (LDL, IDL, VLDL remnants, Lp(a)) from plasma. Its genetic and pharmacological inhibition is one of the cleanest examples of a geroprotective intervention: loss-of-function carriers show dramatically lower LDL and coronary heart disease risk with no apparent compensatory penalty, and two drug classes (monoclonal antibodies, siRNA) that recapitulate this phenotype are FDA-approved. PCSK9 is itself transcriptionally induced by [[srebp-2|SREBP-2]] alongside LDLR — creating a feedback brake that partially blunts statin efficacy.

## Identity

- **UniProt:** Q8NBP7 (PCSK9_HUMAN) — Swiss-Prot reviewed entry, accessed 2026-05-06
- **NCBI Gene:** 255738
- **HGNC:** 20001 (symbol: PCSK9)
- **Ensembl:** ENSG00000169174
- **Length:** 692 amino acids (precursor); autocatalytic cleavage at Gln152↓Ser153 (motif VFAQ↓SIP) yields the mature secreted form (63 kDa intracellular / 65 kDa secreted) with the prodomain (~14 kDa) remaining non-covalently bound [^lagace2008]
- **Mouse ortholog:** Pcsk9 (high sequence conservation; similar LDLR-regulatory role)

## Structure and processing

PCSK9 is synthesized as an inactive zymogen. In the endoplasmic reticulum it undergoes **autocatalytic intramolecular cleavage** between Gln152 and Ser153 (motif VFAQ↓SIP), but the cleaved prodomain remains tightly bound to the catalytic domain and inhibits its protease activity [^seidah2003][^lagace2008]. This means PCSK9 is secreted as a stable prodomain-catalytic domain complex — it does not function as a classical protease in the extracellular space.

**Key domains (UniProt Q8NBP7):**

| Domain | Residues | Function |
|---|---|---|
| Signal peptide | 1–30 | ER targeting |
| Inhibitory prodomain (I9) | 31–152 | Autocatalytic inhibitor; remains bound post-cleavage |
| Catalytic (peptidase S8) | 153–454 | Serine protease fold; His226/Asp186/Ser386 catalytic triad; EGF-A binding surface (residues 367–381) [^lagace2008] |
| P-domain | 455–573 | Contains RRG(D,E) motif; single N-glycosylation site (Asn533) [^seidah2003] |
| C-terminal domain (CHRD) | 574–692 | Three six-stranded β-sheet subdomains with quasi-threefold symmetry; structural homology to resistin; contains His-rich region implicated in pH-dependent LDLR binding [^lagace2008] |

**Key PTMs:** Ser47 phosphorylation; Ser688 phosphorylation; Tyr38 sulfation; Asn533 N-glycosylation (UniProt Q8NBP7).

## Tissue expression

Highest expression in **liver** (hepatocytes), with secondary expression in small intestine, kidney, and brain (Schwann cells, cerebellar neurons) [^seidah2003]. The hepatic pool is the primary determinant of plasma LDLR levels and circulating LDL-cholesterol. Brain expression is thought to regulate neuronal cholesterol homeostasis independently of plasma lipoprotein metabolism, though this is less characterized. #gap/no-mechanism for the neuronal role.

## Function: LDLR degradation mechanism

The canonical pathway by which PCSK9 reduces hepatic LDLR:

1. PCSK9 is secreted from hepatocytes and circulates in plasma.
2. Secreted PCSK9 binds the **EGF-A domain** of cell-surface LDLR via a surface on PCSK9's **catalytic domain** (primarily residues 367–381, including key contacts Arg-194 and Phe-379) — an interaction with pH-dependent kinetics (~3-fold tighter at endosomal pH 6.0 than plasma pH 7.0) [^lagace2008]. Note: it is the catalytic domain surface, NOT the C-terminal domain, that mediates EGF-A binding.
3. The PCSK9–LDLR complex is internalized via clathrin-mediated endocytosis.
4. In the endosome/lysosome, the acidic environment enhances PCSK9 binding, preventing LDLR from adopting the closed conformation needed for receptor recycling.
5. LDLR is routed to lysosomal degradation rather than recycled to the cell surface.
6. Net result: reduced hepatic LDLR density → impaired plasma LDL-cholesterol clearance → elevated circulating LDL.

**Sortilin (SORT1)** facilitates intracellular PCSK9 trafficking from the trans-Golgi network toward the secretory pathway; SORT1 is an independent GWAS hit for LDL-cholesterol. #gap/no-mechanism for the precise SORT1-PCSK9 trafficking route.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human PCSK9 LOF variants and mAb trials confirm mechanism |
| Phenotype conserved in humans? | yes — LDLR levels and LDL-C directly track PCSK9 activity |
| Replicated in humans? | yes — multiple independent LOF cohorts + Phase 3 RCTs |

## Genetic landscape

### Loss-of-function variants — cardiovascular protection

Cohen et al. 2006 (NEJM) examined 3,363 Black Americans and 9,524 White Americans in ARIC; subjects carrying either PCSK9 nonsense allele (Y142X: allele frequency 0.8%; C679X: allele frequency 1.8%; combined carrier frequency ~2.6% in Black Americans) had **28% lower LDL-C and an ~88% reduction in CHD risk** (HR 0.11, 95% CI 0.02–0.81, P=0.03) over 15 years [^cohen2006]. White Americans carrying the R46L missense variant (MAF 3.2%) had 15% lower LDL-C and 47% lower CHD risk (HR 0.50, 95% CI 0.32–0.79, P=0.003). #gap/needs-replication — the 88% CHD risk reduction is striking and has been interpreted cautiously; the LDL-lowering effect is well-replicated but the risk-reduction magnitude may reflect lifetime cumulative exposure.

The clean phenotype of PCSK9 LOF carriers — low LDL with no apparent adverse consequences for the nervous system, fertility, or immune function — was a major argument for prioritizing PCSK9 as a drug target.

### Gain-of-function variants — familial hypercholesterolemia

Abifadel et al. 2003 (Nat Genet) identified PCSK9 as the third familial hypercholesterolemia (FH) gene (alongside LDLR and APOB) by positional cloning of the S127R and F216L GOF mutations in two French FH pedigrees [^abifadel2003]. GOF mutations increase PCSK9 secretion or LDLR-binding affinity, driving severe hypercholesterolemia (LDL-C >300 mg/dL) and premature coronary artery disease. PCSK9 GOF accounts for ~1–3% of FH cases; see [[familial-hypercholesterolemia]] for the full FH genetic architecture (LDLR ~85–90%, APOB ~5–10%, PCSK9 ~1–3%, LDLRAP1 rare AR), the Goldstein-Brown 5-class LDLR mutation schema, and treatment landscape.

### Common variants / GWAS

PCSK9 common variants contribute to population-level LDL-C variance and are genome-wide significant hits in lipid GWAS. These variants are used as genetic instruments in Mendelian randomization analyses establishing causal LDL → atherosclerosis liability.

## Aging relevance

### Cumulative LDL exposure and cardiovascular aging

Atherosclerosis is driven by **cumulative lifetime exposure to LDL-ApoB**, not simply point-in-time LDL levels. Mendelian randomization studies using PCSK9 and LDLR variants as instruments consistently show that genetically lower LDL from birth is more protective per unit LDL reduction than late-life statin therapy [^cohen2006]. This cumulative-exposure model frames PCSK9 inhibition as a geroprotective strategy: reducing LDLR degradation from early adulthood could reduce cardiovascular event rates in later decades disproportionately relative to what statin trials (starting in middle age) predict.

PCSK9 thus represents a rare case where: (a) the causal pathway is Mendelian-randomization-validated, (b) LOF carriers provide a human "genetic knockout" model with long-term safety data, and (c) pharmacological recapitulation of the LOF phenotype is FDA-approved.

### Atherosclerosis as cardiovascular aging phenotype

Atherosclerosis progression accelerates with age and is a primary driver of cardiovascular mortality in the elderly. PCSK9-mediated LDLR degradation links to [[chronic-inflammation]] via oxidized LDL → foam cell formation → plaque macrophage SASP-like inflammatory secretion. See [[atherosclerosis]] for full pathophysiology cascade and [[apob]] for the per-particle atherogenic-burden framing. Dietary modulation operates upstream of PCSK9 via [[srebp-2|SREBP-2]] sensing — see [[palmitic-acid]] for the dietary-saturated-fat → LDLR-suppression mechanism, and [[mediterranean-diet]] for the RCT-validated dietary pattern that displaces palmitic-acid exposure. #gap/needs-human-replication — mechanistic link between PCSK9 activity, plaque inflammation, and organismal aging rate is not yet characterized at molecular resolution.

### Plasma PCSK9 protein vs hepatic transcript: a methodological note

The wiki's claim that "plasma PCSK9 protein rises with age" is anchored to pre-2015 cohorts (Cui 2010 Chinese cohort n≈479; Lakoski 2009 Dallas Heart Study n≈3138) — no 2019+ healthy-cohort age-stratified replication has been published as of 2026-05-21. GTEx v10 hepatic *transcript* data shows only a weak positive trend (ρ=+0.08, n=262, not significant) — and whole-blood transcript is even weakly negative (ρ=−0.17, n=803). This dissociation reflects that PCSK9 plasma protein level integrates: (a) hepatic transcription (SREBP-2-driven; Yang 2024 implies up per-hepatocyte), (b) hepatocyte secretion efficiency, (c) extrahepatic contributions (small intestine ileum/jejunum, kidney, Schwann cells per Seidah 2003), and (d) plasma clearance. Transcript abundance is a poor surrogate for activity; the load-bearing signal is plasma protein. #gap/needs-replication — direct measurement of plasma PCSK9 by age decile in a large (n>5000) modern healthy-cohort proteomic survey (UK Biobank Olink PCSK9 panel, or ARIC proteomic re-analysis) would resolve this against modern lab standardization.

## Therapeutic targeting

### Monoclonal antibodies (FDA-approved 2015)

Both target the catalytic domain surface of PCSK9 (blocking the PCSK9–LDLR EGF-A interaction), leading to reduced LDLR degradation:

- **Evolocumab** (Repatha, Amgen) — fully human mAb. FOURIER trial (n=27,564, median follow-up 26 months) showed 59% LDL-C reduction and **15% relative risk reduction** in major cardiovascular events (HR 0.85, 95% CI 0.79–0.92, P<0.001) vs placebo on top of statin therapy [^sabatine2017].
- **Alirocumab** (Praluent, Regeneron/Sanofi) — human mAb. ODYSSEY LONG TERM trial (n=2,341, 78 weeks) showed 61% LDL-C reduction (−62 percentage points vs placebo, P<0.001). In a post hoc analysis, adjudicated major adverse cardiovascular events occurred in 1.7% of alirocumab patients vs 3.3% of placebo patients (HR 0.52, 95% CI 0.31–0.90, nominal P=0.02) [^robinson2015]. The primary trial endpoint was LDL-C change; the cardiovascular outcome finding is exploratory.

FOURIER established pre-specified cardiovascular outcomes benefit for evolocumab. ODYSSEY LONG TERM's cardiovascular finding was post hoc and exploratory only (primary endpoint was LDL-C change); definitive alirocumab cardiovascular outcomes data came from ODYSSEY OUTCOMES (2018, not cited here). Neither trial found a significant effect on cardiovascular mortality over 2–3 years. Safety profiles were broadly similar to placebo in both trials, with the exception of injection-site reactions. #gap/long-term-unknown — trials were 2–3 years; lifetime safety of near-complete PCSK9 inhibition in humans is not yet characterized.

### siRNA (FDA-approved 2021)

- **Inclisiran** (Leqvio, Novartis) — chemically modified siRNA targeting PCSK9 mRNA, conjugated to GalNAc for hepatocyte targeting. Administered subcutaneously twice yearly. Phase 3 ORION trials showed ~50% LDL-C reduction maintained over 18 months. Cardiovascular outcomes data from ORION-4 (ongoing). #gap/long-term-unknown

### In vivo CRISPR base editing

In-vivo somatic base editing of the PCSK9 locus to install LOF mutations is under development as a one-time intervention — see [[crispr-base-editing-pcsk9]] for the VERVE-101/102 program. This approach aims to replicate the lifetime LOF phenotype pharmacologically.

## Pathway context

PCSK9 does not belong to a single canonical signaling pathway in the kinase/transcription-factor sense. Its biology is best understood at the **lipoprotein metabolism** level:

- Upstream regulators: SREBP-2 transcriptionally co-regulates PCSK9 and LDLR (both are induced by sterol depletion, creating a compensatory loop that partially blunts statin efficacy).
- Key interactors: LDLR, VLDLR, LRP8/APOER2, APOB, ANXA2 (annexin A2 — inhibits PCSK9-LDLR binding at cell surface), SORT1/sortilin (intracellular trafficking).

For the integrated lipoprotein-flux pathway view (chylomicron, VLDL→IDL→LDL cascade, RCT, Lp(a)) see [[lipoprotein-metabolism]]. PCSK9's role: post-translational LDLR regulator on the endogenous-pathway clearance arm.

## Key interactors

- **[[ldlr]]** — primary substrate/binding partner; PCSK9 blocks LDLR recycling
- SORT1/sortilin — intracellular trafficking partner; independently associated with LDL-C via GWAS
- ANXA2 (annexin A2) — endogenous inhibitor of extracellular PCSK9-LDLR interaction
- APOB — PCSK9 may also bind ApoB on LDL particles directly (contested; lower physiological relevance)

## Limitations and gaps

- **Neuronal/brain role** — PCSK9 is expressed in neurons and Schwann cells, proposed to regulate neuronal cholesterol homeostasis and apoptosis; mechanism in aging context is uncharacterized. #gap/no-mechanism
- ✅ **`gtex-aging-correlation:` populated 2026-05-21** — direct GTEx v10 API query (`attributeSubset=ageBracket`). Hepatic mRNA ρ = +0.08 (weak positive, n=262, not significant); pan-tissue heterogeneous. Prior `#gap/unsourced` resolved. Note: hepatic transcript trend is much weaker than the plasma-protein-rise claim suggests; see Aging relevance § Plasma PCSK9 protein vs hepatic transcript for the methodological resolution.
- `#gap/needs-replication` — Plasma PCSK9 protein trajectory by age in healthy adult cohorts has no modern (2019+) large-cohort replication; Cui 2010 / Lakoski 2009 remain the canonical anchors. UK Biobank Olink proteomic re-analysis would resolve cleanly.
- **ORION-4 outcomes** — cardiovascular outcomes from the inclisiran RCT are pending; `clinical-trials-active` not yet populated from ClinicalTrials.gov v2 API. #gap/long-term-unknown
- **Druggability tier = 1** — assigned based on two FDA-approved drug classes; Open Targets Platform entry not independently confirmed via API. Recommend re-check on next lint pass.

## Footnotes

[^seidah2003]: doi:10.1073/pnas.0335507100 · Seidah NG et al. · *PNAS* 2003 · in-vitro + in-vivo · model: neuronal / hepatic cells · original NARC-1/PCSK9 cloning; tissue expression (liver, small intestine ileum/jejunum, kidney, cerebellum, Schwann cells); autocatalytic processing at (Y,I)VV(V,L)(L,M)↓ motif described; 72 kDa zymogen → 63 kDa (cell) / 65 kDa (secreted) + 14 kDa prodomain · PDF-verified 2026-05-06

[^lagace2008]: doi:10.1073/pnas.0712064105 · Kwon HJ, Lagace TA et al. · *PNAS* 2008 · structural + in-vitro · model: crystal structure (PCSK9:EGF-A) + HEK293S / HepG2 cells · cleavage site confirmed as Gln152↓Ser153 (VFAQ:SIP); EGF-A binding resides on catalytic domain surface (residues 367–381, key contacts Arg-194, Phe-379), NOT the C-terminal domain; pH-dependent affinity ~3-fold tighter at pH 6.0 vs pH 7.0 (change in association rate ~100-fold) · PDF-verified 2026-05-06

[^abifadel2003]: doi:10.1038/ng1161 · Abifadel M et al. · *Nat Genet* 2003 · observational (pedigree cloning) · n=2 families · model: human · PCSK9 identified as the FH3 gene (HCHOLA3 locus at 1p32); S127R and F216L GOF mutations described · PDF inaccessible (archive symlink broken); claims verified via Crossref metadata + PubMed abstract; mutation names not independently confirmed from full text — flag for re-verification #gap/no-fulltext-access

[^cohen2006]: doi:10.1056/NEJMoa054013 · Cohen JC et al. · *NEJM* 2006 · observational (cohort) · n=12,887 (3,363 Black + 9,524 White ARIC participants) · model: human · Y142X allele freq 0.8%, C679X allele freq 1.8%, combined carrier freq ~2.6% in Black Americans; 28% lower LDL-C; HR 0.11 (95% CI 0.02–0.81, P=0.03) for CHD over 15 years; White R46L carriers (MAF 3.2%): 15% lower LDL-C, HR 0.50 (P=0.003) · PDF-verified 2026-05-06

[^sabatine2017]: doi:10.1056/NEJMoa1615664 · Sabatine MS et al. (FOURIER trial) · *NEJM* 2017 · rct · n=27,564 · model: human · median follow-up 2.2 years (26 months); evolocumab 59% LDL-C reduction (median 92→30 mg/dL); primary endpoint HR 0.85 (95% CI 0.79–0.92, P<0.001); key secondary (CV death/MI/stroke) HR 0.80 (95% CI 0.73–0.88, P<0.001) · PDF-verified 2026-05-06

[^robinson2015]: doi:10.1056/NEJMoa1501031 · Robinson JG et al. (ODYSSEY LONG TERM) · *NEJM* 2015 · rct · n=2,341 (1,553 alirocumab, 788 placebo) · model: human · primary endpoint: −61.0% LDL-C at week 24 (P<0.001); post hoc MACE analysis: 1.7% alirocumab vs 3.3% placebo (HR 0.52, 95% CI 0.31–0.90, nominal P=0.02); 78 weeks treatment · PDF-verified 2026-05-06
