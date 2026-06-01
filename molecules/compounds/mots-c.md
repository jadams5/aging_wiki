---
type: compound
aliases: [Mitochondrial Open Reading Frame of the 12S rRNA-c, MOTSc, mitochondrial-derived peptide, MDP, MOTS c]
pubchem-cid: 146675088   # verified — sequence MRWQEMGYIFYPRKLR (16 aa, 2 Met); calculated avg MW 2174.6 Da matches PubChem exactly
chembl-id: null           # not found in ChEMBL as of 2026-05-09; #gap/needs-canonical-id
drugbank-id: null
biologic: true
who-inn: null             # no WHO INN assigned; investigational peptide only
molecular-formula: C101H152N28O22S2   # from PubChem CID 146675088; consistent with MRWQEMGYIFYPRKLR (2 Met → 2 S)
molecular-weight-da: 2174.6           # average MW; PubChem CID 146675088; verified against calculated MW for 16-aa sequence MRWQEMGYIFYPRKLR
mechanisms: [ampk-activation, exercise-mimetic, mitohormesis-induction]
targets: ["[[ampk]]", "[[folate-cycle]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[deregulated-nutrient-sensing]]"]
clinical-stage: preclinical
human-evidence-level: limited
translation-gap: preclinical-only
next-experiment: "First-in-human Phase 1 pharmacokinetic dose-escalation trial with SC or IV MOTS-c in metabolically healthy adults aged 60+, measuring MOTS-c plasma half-life, insulin sensitivity (hyperinsulinemic-euglycemic clamp), and AMPK activation in muscle biopsy."
clinical-trials-active: 1   # NCT03878706 — observational study measuring MOTS-c as biomarker in T2D; no MOTS-c intervention trials as of 2026-05-09
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Lee 2015, Miller 2022, Reynolds 2021, Zempo 2021 primary-source PDFs verified end-to-end; Woodhead 2021, Yu 2021, Yin 2020, Zheng 2023, Yoon 2022 DOIs confirmed via PubMed/Europe PMC; PubChem CID 146675088 MW confirmed correct (2174.6 Da = 16-aa MRWQEMGYIFYPRKLR); Zempo 2021 centenarian claim corrected (paper finds NO enrichment); Zempo DOI corrected; multiple footnote DOI errors corrected"
---

# MOTS-c

A 16-amino-acid peptide encoded by a short open reading frame within the mitochondrial **12S rRNA** gene — making it unusual among biologically active peptides in being encoded by the mitochondrial genome rather than the nuclear genome [^lee2015]. Discovered in 2015 by the Cohen lab (USC), MOTS-c regulates glucose and lipid metabolism primarily in skeletal muscle, acts as a circulating "mitokine" whose levels respond to exercise and metabolic state, and declines with age. It represents the best-characterized member of the growing **mitochondrial-derived peptide (MDP)** class [^miller2022jci].

---

## Identity and discovery

| Property | Value |
|---|---|
| Full name | Mitochondrial Open Reading Frame of the 12S rRNA-c |
| Length | 16 amino acids |
| Mitochondrial gene | MT-RNR1 (12S rRNA) |
| Encoding | Short ORF within the 12S rRNA gene region of mtDNA |
| Discovery year | 2015 |
| Discovery paper | Lee et al. *Cell Metabolism* 2015 [^lee2015] |
| PubChem CID | 146675088 (verified; sequence MRWQEMGYIFYPRKLR, MW 2174.6 Da) |
| Molecular weight | 2174.6 Da (average; PubChem CID 146675088; consistent with calculated MW for MRWQEMGYIFYPRKLR) |

**What makes MDPs unusual:** Most biologically active peptides are encoded by nuclear genes and synthesised on cytosolic or ER-associated ribosomes. MOTS-c is translated from a small open reading frame embedded within the mitochondrial 12S rRNA transcript — a gene conventionally regarded as a structural non-coding RNA. This places MOTS-c within a small but expanding class of **mitochondrial-derived peptides** (MDPs) that includes humanin (HN, also encoded by 12S rRNA) and the SHLP1–6 family (encoded by 16S rRNA). The existence of peptide-coding ORFs within rRNA genes is mechanistically surprising and suggests mitochondria actively participate in intercellular signalling beyond their classical role as energy producers [^miller2022jci].

**MDP class context (as of 2026-05-09):** At least eight MDPs have been characterised with bioactivity data. MOTS-c is the most-studied for metabolic and aging phenotypes. All known MDPs are small (<25 aa) and circulate in plasma. Levels of humanin, MOTS-c, and SHLP2 are reduced in obese and diabetic states [^merry2020].

---

## Mechanism of action

### Primary mechanism: folate-methionine cycle disruption → AICAR → AMPK

MOTS-c's metabolic effects arise from inhibition of the **folate-methionine cycle** in skeletal muscle cells [^lee2015]. The chain:

1. MOTS-c enters cells (mechanism of uptake not fully resolved #gap/no-mechanism) and disrupts the folate-methionine metabolic cycle.
2. This disruption reduces methylene-tetrahydrofolate availability for purine biosynthesis.
3. Consequently, AICAR (5-aminoimidazole-4-carboxamide ribonucleotide) accumulates — a natural intermediate in the de novo purine synthesis pathway that also serves as a direct AMPK activator.
4. Elevated AICAR → **AMPK activation** → downstream metabolic reprogramming [^gao2023].

This is a non-canonical route to AMPK activation distinct from the direct AMP/ADP-sensing mechanism that is engaged by exercise-induced energy depletion. The folate-cycle input is the key distinguishing feature of MOTS-c's mechanism vs. other AMPK activators (metformin, which operates via complex-I inhibition; AICAR administered directly). Supporting papers: Lee 2015 (discovery), Gao 2023 (mechanism review), Yin 2020 (LPS model) [^yin2020].

**Verification note:** The folate-AICAR mechanism was demonstrated primarily in cell culture experiments in Lee 2015. In vivo confirmation of the folate-cycle step (as opposed to alternative AMPK-activating mechanisms) is less direct. #gap/needs-replication

### Nuclear translocation and gene regulation

Under metabolic stress, MOTS-c translocates from the cytoplasm to the **nucleus**, where it regulates transcription of metabolic and proteostatic genes [^reynolds2021]. This places MOTS-c in a rare category of peptides that function both as circulating hormones and as intracellular transcription modulators. Specific nuclear target genes include those involved in glucose transport (GLUT4), inflammatory signalling (STAT3, IL-10), and stress response [^gao2023]. The nuclear translocation mechanism is not fully characterised. #gap/no-mechanism

### Downstream metabolic effects

| Effect | Evidence level | Notes |
|---|---|---|
| Insulin sensitisation (skeletal muscle) | Rodent in vivo | Lee 2015 — prevented age-dependent and HFD-induced insulin resistance [^lee2015] |
| Glucose uptake in muscle | In vitro + rodent | AMPK → GLUT4 translocation |
| Inhibition of de novo lipogenesis | Rodent HFD model | Lee 2015 [^lee2015] |
| Reduced obesity on HFD | Rodent | Lee 2015 [^lee2015] |
| Anti-inflammatory signalling | In vivo (LPS model) | Yin 2020 [^yin2020] |
| Mitochondrial quality improvement | In vitro (aged MSCs) | Yu 2021 [^yu2021] |
| Physical capacity enhancement (aged mice) | Rodent late-life intervention | Reynolds 2021 [^reynolds2021] |

---

## Exercise induction in humans and animals

MOTS-c is classified as an **exercise-inducible mitokine**. Key evidence:

- **Reynolds et al. 2021 (Nat Commun):** Exercise induces endogenous MOTS-c expression in skeletal muscle (11.9-fold) and in circulation in humans [^reynolds2021] (n=10 healthy young male volunteers, 24.5 ± 3.7 years). The paper demonstrated that MOTS-c translocates to the nucleus in response to metabolic stress and regulates metabolic + proteostasis genes — establishing MOTS-c as a mediator of exercise-adaptive gene expression. In aged C57BL/6N mice (23.5 months), late-life intermittent MOTS-c treatment (15 mg/kg/day IP, 3×/week, initiated at ~24 months) improved grip strength, gait, walking capacity, and blood glucose maintenance; lifespan trended toward increase (median 912 vs 970 days) but did not reach significance (P=0.05 until 31.8 months). #gap/needs-replication (single cohort; lifespan result marginal).
- **Woodhead et al. 2021 (BBA Gen Subj):** Acute high-intensity exercise increases humanin and MOTS-c concentrations in both muscle and plasma; MOTS-c treatment produces adaptations similar to physical activity [^woodhead2021].
- **Yoon 2022 (Diabetes Metab J):** MOTS-c expression increases in skeletal muscle and circulation during exercise; systemic administration increases exercise performance by boosting skeletal muscle stress responses [^yoon2022].

The exercise-inducible profile positions MOTS-c as part of the "exerkine" / "mitokine" class — endogenous factors released during exercise that transduce metabolic benefits to distant tissues. Whether MOTS-c is causally responsible for any component of exercise's aging benefits (vs. being a correlated marker) is not established. #gap/no-mechanism

**Plasma levels decline with age:** Multiple groups have reported reduced circulating MOTS-c in older vs. younger individuals and in metabolic disease states [^zheng2023]. A study in healthy aging men (D'Souza et al. 2020) found *skeletal muscle* MOTS-c increased 1.5-fold in older versus young men — paradoxically inversely correlated with circulating levels — and was associated with slow-type muscle fibre composition, suggesting compartment-specific regulation [PMID 32182209; not yet in wiki studies/].

---

## Aging relevance

### Mitochondrial-dysfunction hallmark link

MOTS-c is encoded in the mitochondrial genome and its expression reflects mitochondrial transcriptional activity. Aging-associated mtDNA mutations and declining mitochondrial biogenesis impair the mitochondrial transcriptional programme, plausibly reducing MOTS-c output. Exogenous MOTS-c treatment in aged human mesenchymal stem cells in vitro restored mitochondrial morphology, reduced ROS production, reduced lipid accumulation, and reversed several aged-cell phenotypes toward youthful states [^yu2021]. This is consistent with MOTS-c as both a reporter of mitochondrial function and a mediator of mitochondrial quality.

### Deregulated-nutrient-sensing hallmark link

MOTS-c activates AMPK — the canonical energy sensor that is dysregulated with aging (reduced AMPKα1/2 protein expression, reduced activation in response to energy stress). AMPK activates [[autophagy]], suppresses mTOR-driven protein synthesis, and promotes mitochondrial biogenesis. Via AMPK, MOTS-c sits at the intersection of nutrient-sensing deregulation and mitochondrial dysfunction. The folate-AICAR-AMPK mechanism is mechanistically orthogonal to canonical AMPK activators like metformin, potentially allowing additive effects if combined. #gap/needs-replication

### Longevity genetics: the m.1382A>C polymorphism

A natural mtDNA variant (m.1382A>C, rs111033358), specific to East Asian populations (haplogroup D4b2), encodes a K14Q substitution in MOTS-c that reduces its insulin-sensitising efficacy both in vitro and in vivo [^zempo2021]. Meta-analysis across three Japanese cohorts (J-MICC, MEC, TMM; total n=27,527) showed males with the C allele had significantly higher T2D prevalence (pooled OR 1.34, 95% CI 1.14–1.54; p<0.01); this association was absent in females. The C allele effect was driven by sedentary males: in the J-MICC cohort, C-allele men in the lowest physical-activity tertile had a 65% greater T2D prevalence than A-allele counterparts (A-allele 11.2% vs C-allele 18.5%; p=0.014), whereas higher activity negated the difference — a kinesio-genomic interaction. **Contrary to a prior small-sample report (n=96 centenarians suggesting enrichment), Zempo 2021 found no association with longevity** in an expanded centenarian cohort (n=736): C-allele frequencies were 7.7% in centenarians vs 7.5% in controls, leading the authors to conclude the m.1382A>C variant "is unlikely to be involved with exceptional longevity." #gap/contradictory-evidence (earlier n=96 claim superseded). Cautionary note: mtDNA population genetics are subject to selection confounds and linkage disequilibrium with other mtDNA variants.

---

## Preclinical evidence summary

| Model | Intervention | Outcome | Source |
|---|---|---|---|
| CD-1 (outbred) mice, HFD | MOTS-c IP 0.5 mg/kg/day × 8 weeks | Prevented diet-induced obesity and insulin resistance | Lee 2015 [^lee2015] |
| C57BL/6J mice, aged (12 months) | MOTS-c IP 5 mg/kg/day × 7 days | Reversed age-dependent insulin resistance in soleus muscle | Lee 2015 [^lee2015] |
| C57BL/6N mice, 12 and 22 months | MOTS-c IP 15 mg/kg/day × 2 weeks | Improved treadmill performance in middle-aged and old mice | Reynolds 2021 [^reynolds2021] |
| C57BL/6N mice, ~24 months (late-life) | MOTS-c IP 15 mg/kg/day, 3×/week, late-life initiated | Improved grip, gait, walking; lifespan trend (ns); healthspan improved | Reynolds 2021 [^reynolds2021] |
| Aged hPD-MSCs (in vitro) | MOTS-c 0.5 μM | Activated AMPK, inhibited mTORC1, improved mitochondrial morphology, reduced ROS | Yu 2021 [^yu2021] |
| BALB/c mice, LPS-induced lung injury | MOTS-c IP | Reduced inflammatory cytokines; improved lung pathology | Yin 2020 [^yin2020] |
| D-galactose accelerated aging mouse model | Exogenous MOTS-c | Prevented abnormal lipid accumulation, improved mitochondrial dynamics | Li 2019 [PMID 30967270] |

#gap/needs-human-replication — all intervention evidence is rodent or in vitro as of 2026-05-09. No interventional human trial of MOTS-c administration has been published.

---

## Human evidence

**Observational / biomarker data (indirect):**
- Plasma MOTS-c declines with aging and metabolic disease in multiple cohort samples [^zheng2023].
- The m.1382A>C mtDNA variant that reduces MOTS-c activity is associated with elevated T2D risk in sedentary Japanese men [^zempo2021]; an earlier small-sample report (n=96) suggested centenarian enrichment but a larger cohort (n=736) found no association with longevity [^zempo2021].
- MOTS-c is induced by acute exercise in healthy humans [^reynolds2021], and the magnitude of induction correlates with muscle metabolic adaptations.

**Interventional human data:** None. One active trial (NCT03878706) measures MOTS-c as a plasma biomarker in T2D patients receiving GLP-1 agonists or SGLT2 inhibitors — it is not a MOTS-c intervention trial.

**Extrapolation quality:**

| Dimension | Status |
|---|---|
| AMPK pathway conserved in humans? | Yes |
| Metabolic phenotype conserved? | Partial — T2D reversal shown in rodents; human metabolic effects not yet tested interventionally |
| Replicated in humans (interventional)? | No — biomarker data only |

---

## Delivery challenges and clinical development barriers

MOTS-c's slow clinical translation reflects common peptide-therapeutic development problems:

1. **Peptide stability:** Short peptides are rapidly degraded by circulating serine and metalloproteinases. MOTS-c has no disulfide bridge or cyclisation to protect it. Half-life in plasma is presumed short (no formal human PK study published as of 2026-05-09). #gap/long-term-unknown
2. **Route of administration:** Oral bioavailability of unmodified peptides is negligible. Subcutaneous or IV injection is required — a practical barrier for chronic anti-aging use. Peptide modification strategies (PEGylation, cyclisation, protease-resistant analogues, liposomal encapsulation) are under exploration but no candidate has advanced to clinical testing.
3. **Endogenous production vs. exogenous dosing:** The dose-response relationship between exogenous MOTS-c administration and plasma levels is not characterised in humans. Rodent studies used 0.5 mg/kg IP — a route not usable in humans. #gap/dose-response-unclear
4. **Regulatory category:** MOTS-c occupies an ambiguous space — it is endogenously produced (not a foreign molecule) but is currently investigational with no IND-enabling package in the public domain as of 2026-05-09.
5. **Senescence-paradox concern:** Mendelsohn & Larrick 2018 proposed that MOTS-c may promote cellular senescence in some contexts (possibly via metabolic stress signalling) and suggested co-administration with senolytics to offset this risk [PMID 30058454]. This has not been systematically tested and the primary evidence is interpretive/speculative — flag as a concern pending further study. #gap/contradictory-evidence

---

## Limitations and knowledge gaps

- PubChem CID 146675088 verified — sequence MRWQEMGYIFYPRKLR (16 aa), MW 2174.6 Da confirmed correct. No remaining canonical-ID gap.
- #gap/needs-human-replication — No interventional human trial of MOTS-c has been published or registered as of 2026-05-09.
- #gap/dose-response-unclear — Effective dose, route, and frequency in humans entirely unknown.
- #gap/no-mechanism — Nuclear translocation mechanism not characterised; precise receptor or uptake mechanism not identified.
- #gap/long-term-unknown — No long-term safety data in any organism for chronic MOTS-c administration.
- #gap/needs-replication — Folate-cycle disruption as the primary AMPK-activating mechanism was demonstrated primarily in cell culture; in vivo confirmation needs independent replication.

---

## Cross-references and related pages

- [[ampk]] — primary pathway target; MOTS-c canonical mechanism converges here
- [[mitochondrial-dysfunction]] — hallmark; MOTS-c is an MDP whose expression reflects mtDNA/mitochondrial transcriptional capacity
- [[deregulated-nutrient-sensing]] — hallmark; MOTS-c → AMPK → nutrient-sensing normalisation
- [[insulin-igf1]] — pathway; MOTS-c improves insulin sensitivity via AMPK; intersects IIS
- [[disabled-macroautophagy]] — downstream; AMPK activation de-represses autophagy (ULK1)
- [[processes/autophagy]] — downstream process (stub needed if not seeded)
- [[interventions/lifestyle/exercise]] — MOTS-c as an exerkine/mitokine released during exercise; relevant exercise-induction context
- [[elamipretide]] — sister compound in the mitochondria-targeted peptide class (different mechanism: cardiolipin stabilizer, not AMPK activator)
- [[metformin]] — functional analogue at the AMPK level; mechanistic comparison relevant

**Implicit stubs created by this page:**
- `[[folate-cycle]]` — no page exists; should be created as a process or pathway page
- `[[interventions/pharmacological/exercise-mimetics]]` — referenced from exercise.md as a planned stub

---

## Footnotes

[^lee2015]: doi:10.1016/j.cmet.2015.02.009 · Lee C, Zeng J, Drew BG, Sallam T, Martin-Montalvo A, Wan J, Kim SJ, Mehta H, Hevener AL, de Cabo R, Cohen P · *Cell Metabolism* 2015;21(3):443–454 · in-vivo (mouse) + in-vitro · model: C57BL/6 mice on HFD and aged mice; cultured skeletal muscle cells · Identified 16-aa MOTS-c from mt-12S rRNA ORF; demonstrated MOTS-c prevents HFD-induced obesity and age-dependent insulin resistance via folate-cycle disruption → AICAR → AMPK activation · local PDF confirmed in a local paper archive (692 citations; impact percentile 100)

[^reynolds2021]: doi:10.1038/s41467-020-20790-0 · Reynolds JC, Lai RW, Woodhead JST, Joly JH, Mitchell CJ, Cameron-Smith D, Lu R, Cohen P, Graham NA, Benayoun BA, Merry TL, Lee C · *Nature Communications* 2021;12(1):470 · in-vivo (mouse) + human observational (exercise) · n=10 (human exercise cohort; healthy young males 24.5 ± 3.7 yr); n=10–19 (aged C57BL/6N mouse groups) · Exercise increases muscle MOTS-c 11.9-fold in humans; MOTS-c translocates to nucleus under metabolic stress; late-life MOTS-c 15 mg/kg/day IP 3×/week in C57BL/6N mice (~24 mo) improved grip strength, gait, walking capacity, blood glucose; lifespan trended upward (P=0.05 until 31.8 mo, ns overall) · local PDF confirmed in a local paper archive

[^miller2022jci]: doi:10.1172/JCI158449 · Miller B, Kim SJ, Kumagai H, Mehta HH, Xiang W, Liu J, Bar-Shai A, Basisty N, Schilling B, Cohen P · *Journal of Clinical Investigation* 2022;132(8):e158449 · review · n/a · Comprehensive review of 8 MDPs as metabolic signal transducers; aging-decline and disease associations · local PDF confirmed in a local paper archive (91 citations; fwci 22.4)

[^gao2023]: doi:10.3390/metabo13010125 · Gao Y, Li X, Zheng X, Ding Z, Zheng X, Liao Y · *Metabolites* 2023;13(1):125 · review · n/a · MOTS-c mechanisms via folate-methionine cycle → AICAR-AMPK; downstream gene targets GLUT4, STAT3, IL-10; metabolic disorder prevention · download pending (gold OA; 21 citations; fwci 8.6)

[^merry2020]: doi:10.1152/ajpendo.00249.2020 · Merry TL, Chan A, Woodhead JST, Reynolds JC, Kumagai H, Kim SJ, Lee C · *American Journal of Physiology–Endocrinology and Metabolism* 2020;319(4):E541–E548 · review · n/a · Eight MDPs identified; circulating levels of humanin, MOTS-c, SHLP2 reduced in obesity/diabetes; treatment of rodents with MDPs enhances insulin sensitivity · download pending (green OA via PMC; 134 citations; fwci 15.5)

[^woodhead2021]: doi:10.1016/j.bbagen.2021.130011 · Woodhead JST, Merry TL · *Biochimica et Biophysica Acta – General Subjects* 2021 · review · Mitochondrial-derived peptides and exercise; MOTS-c and humanin increase with acute exercise · PMID 34520826

[^yoon2022]: doi:10.4093/dmj.2022.0092 · Yoon TK · *Diabetes & Metabolism Journal* 2022 · review · n/a · Exercise, mitohormesis, and MOTS-c; MOTS-c expression increases during exercise in skeletal muscle and circulation; systemic MOTS-c administration boosts muscle stress response and exercise performance · PMID 35656563

[^yu2021]: doi:10.1016/j.mito.2021.02.010 · Yu W, Kim Y, Cho M, Seok J, Kim G, Lee C, Ko J, Kim Y, Lee J · *Mitochondrion* 2021 · in-vitro · model: aged human placenta-derived mesenchymal stem cells · MOTS-c 0.5 μM activated AMPK, inhibited mTORC1, restored mitochondrial morphology and function, reduced ROS, reduced lipid accumulation in aged hPD-MSCs · PMID 33639272

[^yin2020]: doi:10.1016/j.intimp.2019.106174 · Yin X, Jing Y, Chen Y, et al. · *International Immunopharmacology* 2020;78:106174 · in-vivo · model: BALB/c mice, LPS-induced acute lung injury · MOTS-c targets methionine-folate cycle → AICAR → AMPK activation; MOTS-c treatment promoted p-AMPKα, SIRT1, suppressed inflammatory signalling; improved lung pathology · PMID 31931370

[^zheng2023]: doi:10.3389/fendo.2023.1120533 · Zheng Y, Wei Z, Wang T · *Frontiers in Endocrinology* 2023 · review · n/a · MOTS-c: a promising mitochondrial-derived peptide for therapeutic exploitation; plasma MOTS-c declines with aging; exercise-mimetic and metabolic protection roles; decline in diabetes and CVD · PMID 36761202

[^zempo2021]: doi:10.18632/aging.202529 · Zempo H, Kim SJ, Fuku N, Nishida Y, Higaki Y, Wan J, Yen K, Miller B, Vicinanza R, Miyamoto-Mikami E, Kumagai H, Naito H, Xiao J, Mehta HH, Lee C, Hara M, Patel YM, Setiawan VW, Moore TM, Hevener AL, Sutoh Y, Shimizu A, Kojima K, Kinoshita K, Arai Y, Hirose N, Maeda S, Tanaka K, Cohen P · *Aging* 2021;13(4 — Vol 13, No 2):1692–1703 · observational (3 cohorts) + functional · n=27,527 (J-MICC n=11,852, MEC n=3,387, TMM n=12,288) · m.1382A>C mtDNA variant encodes K14Q MOTS-c with diminished insulin-sensitising efficacy in vitro and in vivo (CD-1 mice, HFD); C-allele males have elevated T2D prevalence (pooled OR 1.34, 95% CI 1.14–1.54) driven by sedentary condition; kinesio-genomic interaction confirmed; NO centenarian enrichment found (n=736 centenarians: C allele 7.7% vs 7.5% controls) · PMID 33468709
