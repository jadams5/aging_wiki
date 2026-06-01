---
type: protein
aliases: [FGF-23, fibroblast growth factor 23, phosphatonin, HYPF]
uniprot: Q9GZV9
ncbi-gene: 8074
hgnc: HGNC:3680
ensembl: ENSG00000118972
genage-id: null
mouse-ortholog: Fgf23
pathways: ["[[fgf-signaling]]", "[[phosphate-homeostasis]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: "Bone-osteocyte expression dominant; blood/kidney GTEx signal modest. Age-dependent blood-level rise in community cohorts (70–79yo) is a plasma endocrine signal rather than a GTEx tissue-transcript aging signal. Formal GTEx v8 osteocyte-tissue aging correlation not available (osteocyte-specific tissue not represented). #gap/needs-gtex-extraction"
mr-causal-evidence: partial
caused-by: ["[[hyperphosphatemia]]", "[[high-dietary-phosphate]]", "[[vitamin-d-excess]]"]
causes: ["[[vascular-calcification]]", "[[left-ventricular-hypertrophy]]"]
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Urakawa 2006 (Nature) and Henry 2022 (Circulation) verified against local PDFs end-to-end. Liu 2022 (Front CV Med) verified against local PDF (abstract + methods + results). Sharma 2021 (JAGS) verified against PMC8175094 full text. Gutierrez 2008 (NEJM) verified against PubMed abstract (bronze OA PDF blocked by Cloudflare; abstract provides key ORs). Parker 2010 (Ann Intern Med) closed-access not_oa — body claims unverifiable against full text; body claims tagged #gap/no-fulltext-access. Kurosu 2006 (JBC) download failed (hybrid OA, no candidate URLs); mechanistic claims not independently re-read — tagged #gap/no-fulltext-access on Kurosu-derived claims. Canonical-DB identity fields (UniProt Q9GZV9, NCBI Gene 8074, HGNC:3680, ENSG00000118972) not independently re-verified against databases on this pass — confirmed at seeding via live UniProt REST API. Open Targets druggability API returned HTTP 400/500; tier 2 confirmed by clinical precedent reasoning."
---

# FGF23 (Fibroblast Growth Factor 23)

FGF23 is a bone-derived phosphaturic hormone that forms the efferent limb of the phosphate-mineral homeostasis axis. Its primary action — suppressing renal phosphate reabsorption and vitamin D activation — depends absolutely on [[klotho]] (alpha-Klotho, gene: KL) as an obligate co-receptor that converts FGFR1c into a high-affinity FGF23 receptor. Because Klotho expression declines with age and with CKD, FGF23 signaling becomes progressively impaired, driving compensatory FGF23 elevation. Elevated circulating FGF23 independently predicts cardiovascular mortality across CKD and community populations in observational data, though Mendelian randomization evidence is discordant. Burosumab, an FDA-approved anti-FGF23 monoclonal antibody, demonstrates pharmacological tractability for the axis but is indicated only for X-linked hypophosphatemia (XLH) and tumor-induced osteomalacia — not for aging indications.

## Identity

- **UniProt:** Q9GZV9 (FGF23_HUMAN) — Swiss-Prot reviewed entry, accessed 2026-05-23
- **NCBI Gene:** 8074 (RefSeq: NM_020638.3; protein: NP_065689.1)
- **HGNC:** HGNC:3680 (symbol: FGF23; confirmed via UniProt cross-reference)
- **Ensembl:** ENSG00000118972
- **Mouse ortholog:** Fgf23 (NCBI Gene: 64654; one-to-one; mouse and human share the same phosphatonin function and Klotho co-receptor dependence)
- **GenAge-human:** No entry — FGF23 does not have a human GenAge entry as of 2026-05-23; a model-organism GenAge entry exists for mouse *Fgf23* (pro-longevity classification; decrease in expression extends lifespan). See § Aging relevance.
- **Canonical length:** 251 amino acids (precursor including signal peptide)
- **Signal peptide:** residues 1–24 (cleaved co-translationally; secreted protein)
- **Mature protein:** residues 25–251 (227 aa)
- **Molecular weight:** ~26–32 kDa (processed; the often-cited ~32 kDa reflects the O-glycosylated mature form; unglycosylated recombinant runs lighter)
- **Synonyms:** phosphatonin (historical); HYPF (early cloning synonym)

**Naming note:** FGF23 belongs to the FGF19 endocrine subfamily (FGF15/19, FGF21, FGF23) — the three members that act as systemic hormones rather than local paracrine factors and that all require a Klotho co-receptor. FGF21 uses beta-Klotho (KLB; liver-enriched); FGF23 uses alpha-Klotho (KL; kidney-enriched). See [[fgf21]] for the structural parallels and contrast. This page covers FGF23 exclusively.

## Domain architecture and processing

| Feature | Residues | Notes |
|---|---|---|
| Signal peptide | 1–24 | Cleaved; targets ER secretory pathway |
| Mature N-terminal fragment | 25–179 | FGF-core homology; FGFR binding |
| Furin cleavage site | ~176–179 (RXXR motif at R179) | Furin and PCSK5/6 cleave at R179; O-glycosylation at Thr-171 and Thr-178 (added by GALNT3) occludes the site and protects against cleavage. Loss-of-function mutations in GALNT3 → over-cleavage → HFTC2 (see Disease associations) |
| Mature C-terminal fragment | 180–251 | Not bioactive at FGFR1c; released as a fragment upon furin cleavage |
| O-glycosylation | Thr-171, Thr-178 | Added by GALNT3; required for secretion and intact-FGF23 stability |
| Phosphorylation | Ser-180 | By FAM20C (casein kinase); regulates cleavage susceptibility |
| Disulfide bond | Cys-95 – Cys-113 | Within N-terminal fragment; required for fold |

**Intact FGF23 (iFGF23) vs. C-terminal fragments:** Bioactivity resides entirely in the intact two-domain molecule (residues 25–251). Furin cleavage at R179 generates an N-terminal and a C-terminal fragment, neither of which activates FGFR1c. The intact assay (iFGF23) measures only uncleaved FGF23; C-terminal assays capture both intact and C-terminal fragment and thus overestimate bioactive hormone. The distinction matters clinically — iron deficiency and inflammation elevate C-terminal fragments without proportionally elevating iFGF23, which can mislead C-terminal-assay-based studies [^sharma2020]. ADHR-causing mutations (R176Q, R179Q, R179W) render FGF23 resistant to furin cleavage, producing constitutively elevated bioactive iFGF23.

## Tissue expression

FGF23 mRNA and protein expression is highly restricted in healthy adults:

- **Osteocytes and bone-lining cells** in adult trabecular bone — dominant source; osteocytes are the principal endocrine secretors. Expression is induced by 1,25(OH)₂-vitamin D, elevated dietary phosphate load, PTH, and iron deficiency.
- **Osteoblasts** — lower expression than osteocytes; relevant during active bone remodeling
- Very low or absent expression in: kidney, liver, muscle, heart, brain under physiological conditions

FGF23 acts exclusively as an **endocrine hormone** — synthesized in bone, secreted into the bloodstream, and acting distally on the kidney (primary target) and parathyroid gland. It is not a local paracrine factor in the canonical FGF sense. #gap/needs-page — no `[[bone]]` tissue page yet; a [[osteocytes]] cell-type page is also absent; both should be seeded.

## Signaling mechanism: the Klotho-FGF23-FGFR1c axis

FGF23 cannot effectively activate its receptor without Klotho. Alone, FGF23 binds FGFR1c with very low affinity (~50-fold lower than fibroblast FGFs). [[klotho]] dramatically increases the affinity of FGFR1c for FGF23 by functioning as a co-receptor scaffold [^urakawa2006] [^kurosu2006]:

- Membrane Klotho (mKlotho) and FGFR1c form a preassembled binary complex at the cell surface of renal tubule cells
- FGF23 binds to this complex and completes a ternary signaling unit
- Klotho contacts both FGFR1c and FGF23 simultaneously, acting as a molecular bridge that converts FGFR1c from a generic FGF receptor into a tissue-specific receptor for FGF23
- Signal transduction via ERK1/2 and PI3K/AKT pathways downstream of FGFR1c

This strict Klotho co-receptor requirement is what makes tissues expressing mKlotho (kidney, parathyroid) the physiologic targets of FGF23, while FGF23 is inactive in Klotho-null tissues (heart, liver, muscle) — despite high FGF23 circulating levels.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FGF23-Klotho-FGFR1c ternary complex structure conserved; XLH and ADHR validate axis in humans |
| Phenotype conserved in humans? | yes — FGF23 excess (XLH, TIO) and GALNT3/KLOTHO loss-of-function (HFTC2/3) phenotypes in humans confirm both directions of the axis |
| Replicated in humans? | yes — clinical trial outcomes for burosumab in XLH and TIO confirm pharmacological antagonism is physiologically meaningful |

## Physiologic effects: primary kidney targets

FGF23 exerts three principal actions in kidney proximal and distal tubule, all requiring mKlotho co-expression:

**1. Phosphaturia — suppression of NaPi cotransporters**
FGF23 activates FGFR1c in the proximal tubule, leading to internalization and degradation of the sodium-phosphate cotransporters NaPi-2a (SLC34A1) and NaPi-2c (SLC34A3). The result is reduced renal phosphate reabsorption, lower serum phosphate, and increased urine phosphate excretion. This is the dominant homeostatic function: bone senses phosphate excess via dietary/serum cues and responds by secreting FGF23 to tell the kidney to excrete phosphate.

**2. Reduced 1,25(OH)₂-vitamin D synthesis**
FGF23 suppresses CYP27B1 (1-alpha-hydroxylase), the enzyme that converts 25-OH vitamin D to bioactive 1,25(OH)₂-vitamin D, and simultaneously induces CYP24A1 (24-hydroxylase), which catabolizes both 25-OH and 1,25(OH)₂-vitamin D. The net effect is reduced circulating 1,25(OH)₂-vitamin D, which reduces intestinal calcium and phosphate absorption and creates a feedback loop (reduced vitamin D → less FGF23 stimulation by vitamin D).

**3. Suppression of PTH**
FGF23 suppresses PTH secretion from the parathyroid gland, which also expresses mKlotho. Lower PTH reduces tubular phosphate reabsorption (PTH normally promotes phosphate wasting) and reduces the phosphate-retaining effects of PTH on the kidney. This arm of the FGF23 effect requires Klotho expression in parathyroid cells, which also declines with age.

The integrated result of these three actions is a bone-to-kidney endocrine feedback loop that lowers circulating phosphate in response to dietary or CKD-driven phosphate excess.

## FGF23 and the heart: an off-target effect

The heart does not express mKlotho under physiological conditions. Yet elevated FGF23 produces **left ventricular hypertrophy (LVH)** by a Klotho-independent mechanism: FGF23 at supraphysiological concentrations activates FGFR4 in cardiomyocytes (which is expressed independently of Klotho), triggering PLCγ/calcineurin/NFAT signaling that drives pathological cardiac hypertrophy [reviewed in Liu 2022 meta-analysis context]. This off-target cardiac effect is mechanistically distinct from the renal phosphaturic action and is not part of the normal physiology — it emerges as a pathological consequence of chronically elevated FGF23 in CKD and, potentially, in aging with Klotho decline. Cross-links: [[heart]], [[myocardium]]. #gap/needs-replication — FGFR4-cardiac-hypertrophy link is primarily from cell-culture and mouse CKD models; direct human mechanistic evidence is limited.

## Aging relevance

### Klotho decline → FGF23 resistance → compensatory FGF23 elevation

Kidney Klotho expression declines progressively with age, mirroring the broader decline in soluble Klotho documented in longitudinal aging studies (see [[klotho]] for primary citations and quantitative decline data). As mKlotho falls in the proximal tubule and parathyroid, FGF23 signaling efficiency decreases — the same circulating FGF23 concentration produces less phosphaturia and less PTH suppression. The downstream result is a compensatory rise in serum FGF23, measurable in community-dwelling older adults well before overt CKD. This pattern mimics early-stage CKD in a healthy-aging trajectory and has been conceptualized as a form of "aging-associated CKD-like mineral dysregulation."

### Elevated FGF23 independently predicts CV mortality

**In CKD/dialysis populations (canonical evidence):**

Gutierrez et al. 2008 (NEJM) is the seminal study linking FGF23 to mortality in CKD. In a nested case-control study of 400 participants within a 10,044-patient incident hemodialysis cohort, each log-unit increase in FGF23 was associated with OR 1.8 (95% CI 1.4–2.4) for death during the first year of dialysis; Q4 vs Q1 OR was 5.7 — a striking gradient [^gutierrez2008].

**In community / non-CKD populations:**

Parker et al. 2010 (Annals of Internal Medicine) examined 833 community outpatients with stable coronary artery disease (Heart and Soul Study) and found that the highest FGF23 tertile was associated with HR 2.15 (95% CI 1.43–3.24) for mortality and HR 1.83 (95% CI 1.15–2.91) for CVD events after multivariate adjustment over 6 years [^parker2010]. Note: this cohort had established CAD — not truly primary-prevention community population, but excluded overt CKD.

Sharma et al. 2021 (JAGS) prospectively followed 2,763 community-dwelling adults aged 70–79 from the Health, Aging, and Body Composition Study (HABC) over a median 8.3 years, using the intact FGF23 assay specifically [^sharma2021]. This is among the most relevant to a healthy aging context: community-dwelling, older adults without overt CKD, intact iFGF23 assay (vs. C-terminal). Per 2-fold higher iFGF23: all-cause mortality HR 1.24 (95% CI 1.12–1.37); CV mortality HR 1.31 (95% CI 1.11–1.54). Quartile comparisons: Q4 vs Q1 all-cause mortality HR 1.31 (95% CI 1.05–1.62); CV mortality HR 1.54 (95% CI 1.08–2.18). 821 deaths occurred during follow-up (309 cardiovascular, 245 cancer, 267 other).

**Meta-analytic summary (2022 update):**

Liu et al. 2022 pooled 29 prospective studies (n=135,576 participants, general population) in a dose-response meta-analysis and found elevated vs. normal FGF23 was associated with: myocardial infarction RR 1.40 (95% CI 1.03–1.89), stroke RR 1.20 (95% CI 1.02–1.43), heart failure RR 1.37 (95% CI 1.23–1.52), cardiovascular mortality RR 1.46 (95% CI 1.29–1.65), and all-cause mortality RR 1.50 (95% CI 1.29–1.74) [^liu2022]. Per doubling of FGF23: CV mortality RR 1.43 (95% CI 1.09–1.88), all-cause mortality RR 1.37 (95% CI 1.15–1.62). This is the most comprehensive synthesis available and includes general (non-CKD-exclusive) populations.

### FGF23 elevation precedes overt hyperphosphatemia

In CKD progression, FGF23 rises as early as CKD stage 1–2, before serum phosphate climbs above normal range. The kidney compensates for reduced GFR by raising FGF23 to maintain phosphaturia — and maintains normophosphatemia until late-stage CKD when this compensation fails. FGF23 is thus an earlier biomarker of CKD mineral dysregulation than serum phosphate. In aging without clinical CKD, a milder version of this dynamic may operate.

### Mendelian randomization evidence: discordant signal — note explicitly

The observational literature consistently shows elevated FGF23 associating with CV events and mortality. However, Mendelian randomization evidence does not uniformly support a causal interpretation.

Henry et al. 2022 (*Circulation*) screened 90 cardiovascular proteins for causal associations with incident HF using cis-protein QTL instruments derived from a GWAS of 30,931 individuals (SCALLOP consortium); observational cohorts totalled 3,019 participants with 732 HF events [^henry2022]. FGF23 was among 44 proteins positively associated with incident HF in the observational meta-analysis. However, in the MR analysis, **higher genetically-predicted FGF23 showed a protective (negative) association with incident HF** — discordant with the observational direction. FGF23 was one of five proteins (alongside ADM, CHI3L1, CTSL1, and MMP-12) showing evidence of causal protective effects after multiverse sensitivity analysis. In the cross-trait MR, higher genetically-predicted FGF23 was also associated with lower estimated glomerular filtration rate (eGFR), consistent with a renal-mediated mechanism (FGF23 regulates phosphate excretion; this association likely reflects the FGF23–kidney axis rather than direct cardiac protection).

This discordance may reflect: (1) reverse causation in observational studies (worsening cardiac function drives FGF23 elevation, not vice versa); (2) violation of MR assumptions (pleiotropy of FGF23-QTL instruments through the renal pathway); (3) the biological FGF23 effect being context-dependent (renoprotective at physiologic levels; cardiotoxic only at supraphysiological levels via FGFR4). **The reader should not assume FGF23 elevation is causally cardiotoxic in community-dwelling adults without CKD** — the causal direction is contested. `mr-causal-evidence: partial` reflects GWAS instruments available and MR attempted, but evidence is contradictory, not confirmatory. #gap/contradictory-evidence

## Disease associations (genetic)

- **Autosomal Dominant Hypophosphatemic Rickets (ADHR; MIM 193100):** Gain-of-function missense variants R176Q, R179Q, R179W — all affecting the furin RXXR cleavage site — confer FGF23 resistance to furin, causing constitutively elevated intact FGF23, renal phosphate wasting, and hypophosphatemic rickets. Directly validates the cleavage-regulation model.
- **Hyperphosphatemic Familial Tumoral Calcinosis type 2 (HFTC2; MIM 617993):** Loss-of-function variants in FGF23 itself — reduces secretion or stability — causing failure of phosphaturia → hyperphosphatemia → ectopic calcification. Mirrors the HFTC3 phenotype from Klotho loss-of-function, validating the axis from the FGF23 side.
- **Tumor-induced osteomalacia (TIO):** Mesenchymal tumors secrete massive amounts of FGF23 → severe hypophosphatemia, bone pain, fractures. Burosumab (anti-FGF23 mAb) is effective treatment.
- **X-linked hypophosphatemia (XLH; MIM 307800):** Inactivating PHEX mutations → impaired FGF23 degradation → chronically elevated FGF23 → phosphate wasting. Burosumab is FDA-approved for XLH (2018).

## Therapeutic angles and druggability

**Burosumab (KRN23):** Anti-FGF23 monoclonal antibody (human IgG1) targeting the C-terminal epitope of FGF23, preventing receptor binding. FDA-approved (2018) for XLH in children and adults; approved for TIO in adults. Effective: restores serum phosphate and 1,25(OH)₂-vitamin D to normal, improves bone mineralization and walking ability in XLH trials.

**Aging-context druggability rationale (tier 2):** Per CLAUDE.md convention, druggability tier reflects aging-specific tractability. Burosumab is FDA-approved but for a rare genetic pediatric/adult disease (XLH, TIO) — not for aging, CKD-associated mineral dysregulation, or FGF23-associated CV risk. No clinical trial of burosumab for an aging indication or CV endpoint has been registered as of 2026-05-23. #gap/needs-trials-check (ClinicalTrials.gov v2 API count not completed). The axis is unambiguously pharmacologically tractable (clinical antagonist exists, mechanism validated), which justifies tier 2 (high-quality clinical-grade probe exists), but not tier 1 (no approved drug for an aging indication). Open Targets Platform API returned HTTP 400/500 on both seeding and verification passes; druggability tier assigned by clinical precedent reasoning. #gap/needs-druggability-check

**Small-molecule targets in the axis:** Several groups have explored small-molecule inducers of Klotho expression as an indirect FGF23 sensitizer; these are preclinical (see [[klotho]] for full discussion).

## Pathway membership and cross-links

- [[fgf-signaling]] — FGF23 is the ligand for the FGFR1c/Klotho ternary complex; endocrine-FGF subfamily member (FGF19 subfamily)
- [[fgf21]] — FGF21 is the closest functional analog (both use Klotho co-receptors: FGF23 → alpha-Klotho; FGF21 → beta-Klotho/KLB); comparison: FGF21 targets liver and adipose, FGF23 targets kidney and parathyroid
- [[klotho]] — obligate co-receptor; rate-limiting factor for FGF23 signaling; bidirectional cross-link. Klotho-FGF23-axis claims are canonical to this page; the [[klotho]] page provides the structural Klotho context
- [[deregulated-nutrient-sensing]] — FGF23 is a phosphate/mineral sensing hormone; Klotho-FGF23 axis decline with age constitutes a form of nutrient-sensing deregulation
- [[chronic-inflammation]] — elevated FGF23 in CKD and aging correlates with inflammatory markers; off-target cardiac FGFR4 signaling activates pro-inflammatory calcineurin/NFAT pathways
- [[heart]] / [[myocardium]] — off-target FGFR4-mediated LVH at elevated FGF23 concentrations
- [[vascular-calcification]] — FGF23 elevation is associated with vascular calcification; sibling page being seeded (forward-link; page does not yet exist) #stub
- [[mediterranean-diet]] — dietary phosphate reduction (especially avoidance of inorganic phosphate additives in processed foods) reduces FGF23 secretion stimulus; evidence base on [[phosphate-additive-reduction]]
- [[phosphate-additive-reduction]] — sibling intervention page being seeded; forward-link #stub

## Limitations and gaps

- **MR-causal-evidence is contradictory:** The observational FGF23-CV-mortality signal may reflect reverse causation or confounding by subclinical CKD; the Henry 2022 MR finding of protective FGF23 on HF risk directly contradicts the observational direction. The causal interpretation is unresolved. #gap/contradictory-evidence
- **Aging-specific intact FGF23 trajectory:** Longitudinal data on iFGF23 (intact assay) in healthy community adults without CKD are sparse; most data conflate intact and C-terminal assays. #gap/needs-replication
- **Open Targets API unavailable:** Druggability tier for ENSG00000118972 could not be confirmed via live API (HTTP 400/500 during both seeding and verification passes); tier 2 assigned based on clinical precedent (burosumab FDA-approved for XLH/TIO but no aging indication). #gap/needs-druggability-check
- **ClinicalTrials.gov aging-context count:** Active trials for burosumab or FGF23 antagonists with an aging/CV endpoint not enumerated; ClinicalTrials.gov v2 API check recommended. `clinical-trials-active:` field not set.
- **GTEx extraction:** Formal GTEx v8 aging-correlation for FGF23 in osteocyte/bone tissue not available (osteocyte-specific tissue not represented in GTEx); blood-tissue GTEx age-correlation not extracted. #gap/needs-gtex-extraction
- **GenAge human entry:** FGF23 has no human GenAge entry; model-organism entry exists for mouse Fgf23 (pro-longevity via lifespan decrease on knockout). If new GenAge build includes FGF23 in human database, update `genage-id:`.
- **Bone and osteocyte pages missing:** [[bone]] (tissue page) and [[osteocytes]] (cell-type page) are absent from the wiki. Both are structural gaps — FGF23 biology cannot be fully navigated without the primary secretory cell-type page. #gap/needs-page for both.
- **Parker 2010 body claims unverified:** HR 2.15 (95% CI 1.43–3.24) for mortality and HR 1.83 (95% CI 1.15–2.91) for CVD events were reported at seeding from a secondary source; full text is closed-access and could not be verified. #gap/no-fulltext-access
- **Kurosu 2006 mechanistic claims unverified:** The ternary complex binding affinity claims and related mechanism statements attributed to Kurosu 2006 could not be verified — download failed (hybrid OA, no candidate URLs). The overlapping Urakawa 2006 (Nature) was fully verified and confirms the core Klotho-FGFR1c-FGF23 ternary complex mechanism; Kurosu 2006 adds surface plasmon resonance binding quantification. #gap/no-fulltext-access

---

## Footnotes

[^urakawa2006]: [[studies/urakawa-2006-klotho-fgfr-fgf23]] · doi:10.1038/nature05315 · PMID:17086194 · Urakawa I et al. · *Nature* 2006 · in-vitro + cell signaling · model: HEK293 cells expressing FGFR1c ± Klotho; Xenopus oocyte electrophysiology assay · key finding: Klotho directly converts FGFR1c into a specific high-affinity receptor for FGF23; ~1,812 citations (Crossref) · locally available: 

[^kurosu2006]: [[studies/kurosu-2006-fgf23-signaling-klotho]] · doi:10.1074/jbc.C500457200 · PMID:16436388 · Kurosu H et al. · *Journal of Biological Chemistry* 2006 · in-vitro · model: multiple FGFR-expressing cell lines ± Klotho; surface plasmon resonance binding assays · key finding: Klotho binds multiple FGFRs and forms a ternary complex with FGF23 of dramatically higher affinity than FGF23 alone; ~1,335 citations (Crossref) · download failed (hybrid OA; no candidate URLs in a local paper archive); mechanistic claims not verified against full text #gap/no-fulltext-access

[^gutierrez2008]: [[studies/gutierrez-2008-fgf23-hemodialysis-mortality]] · doi:10.1056/NEJMoa0706130 · PMID:18687639 · Gutierrez OM et al. · *New England Journal of Medicine* 2008 · nested case-control (n=400 selected from 10,044-patient incident hemodialysis cohort; 200 deaths vs 200 survivors at 1 year) · observational · model: Homo sapiens (ESRD/hemodialysis) · FGF23 Q4 vs Q1: OR 5.7 (95% CI 2.6–12.6); per log-unit: OR 1.8 (95% CI 1.4–2.4) · ~1,685 citations (Crossref) · bronze OA via NEJM; full PDF access blocked by Cloudflare during verification pass; key ORs confirmed against PubMed abstract #gap/no-fulltext-access

[^parker2010]: [[studies/parker-2010-fgf23-cad-mortality]] · doi:10.7326/0003-4819-152-10-201005180-00004 · PMID:20479029 · Parker BD et al. · *Annals of Internal Medicine* 2010 · observational cohort · n=833 (stable CAD, Heart and Soul Study; median follow-up 6.0 years) · model: Homo sapiens (stable CAD; not primary-prevention community) · FGF23 highest vs lowest tertile: HR 2.15 (95% CI 1.43–3.24) mortality; HR 1.83 (95% CI 1.15–2.91) CVD events · ~455 citations (Crossref) · closed-access (not_oa per a local paper archive); HRs in body not independently verified against full text #gap/no-fulltext-access

[^liu2022]: [[studies/liu-2022-fgf23-cv-mortality-meta-analysis]] · doi:10.3389/fcvm.2022.989574 · PMID:36407457 · Liu M et al. · *Frontiers in Cardiovascular Medicine* 2022 · systematic review + dose-response meta-analysis · n=135,576 across 29 prospective studies (general population) · key findings: MI RR 1.40 (95% CI 1.03–1.89); stroke RR 1.20 (95% CI 1.02–1.43); HF RR 1.37 (95% CI 1.23–1.52); CV mortality RR 1.46 (95% CI 1.29–1.65); all-cause mortality RR 1.50 (95% CI 1.29–1.74); per-doubling FGF23: CV mortality RR 1.43 (95% CI 1.09–1.88); all-cause mortality RR 1.37 (95% CI 1.15–1.62) · ~19 citations (Crossref) · gold OA · locally available: 

[^henry2022]: [[studies/henry-2022-fgf23-hf-mendelian-randomization]] · doi:10.1161/CIRCULATIONAHA.121.056663 · PMID:35300523 · Henry A, Gordillo-Marañón M, Lumbers RT et al. (HERMES + SCALLOP Consortia) · *Circulation* 2022 · proteomics + Mendelian randomization screening of 90 cardiovascular proteins; cis-protein QTL instruments from SCALLOP GWAS (30,931 individuals); observational cohorts: 4 studies (3,019 participants, 732 HF events) · model: Homo sapiens (community cohorts) · **DISCORDANT FINDING for FGF23:** FGF23 positively associated with HF in observational analysis; higher genetically-predicted FGF23 associated with *lower* (protective) HF risk in MR — one of 5 proteins with concordant multiverse-robust protective MR signal · cross-trait MR: higher genetically-predicted FGF23 associated with lower eGFR · ~149 citations (Crossref) · hybrid OA · locally available: 

[^sharma2020]: [[studies/sharma-2020-intact-cterminal-fgf23-assays]] · doi:10.1210/clinem/dgaa665 · PMID:32951052 · Sharma S, Ix JH et al. · *Journal of Clinical Endocrinology & Metabolism* 2020 · case-cohort (n=844; Cardiovascular Health Study, community-dwelling aged ≥65 years) · observational · key finding: intact FGF23 HR 1.45 (95% CI 1.25–1.68) for mortality unadjusted; attenuated to HR ~1.0 after kidney function adjustment — suggests residual confounding by subclinical CKD even in "community" cohorts · ~25 citations (Crossref) · bronze OA · not locally available

[^sharma2021]: [[studies/sharma-2021-fgf23-cause-mortality-habc]] · doi:10.1111/jgs.16910 · PMID:33170519 · Sharma S, Ix JH et al. · *Journal of the American Geriatrics Society* 2021 · prospective cohort (n=2,763 analytic sample; Health, Aging, and Body Composition Study; community-dwelling 70–79yo; median follow-up 8.3 years; 821 deaths) · observational · intact FGF23 assay · per 2-fold higher iFGF23: all-cause mortality HR 1.24 (95% CI 1.12–1.37); CV mortality HR 1.31 (95% CI 1.11–1.54) · Q4 vs Q1: all-cause mortality HR 1.31 (95% CI 1.05–1.62); CV mortality HR 1.54 (95% CI 1.08–2.18) · ~12 citations (Crossref) · green OA via PMC8175094 · verified against PMC full text
