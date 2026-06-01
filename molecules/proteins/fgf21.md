---
type: protein
aliases: [fibroblast growth factor 21, FGF-21]
uniprot: Q9NSA1
ncbi-gene: 26291
hgnc: 3678
ensembl: ENSG00000105550
mouse-ortholog: Fgf21
key-domains: [signal-peptide, beta-trefoil-fold, C-terminal-disordered-tail]
pathways: ["[[fgf-signaling]]", "[[integrated-stress-response]]", "[[ppar-alpha-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[altered-intercellular-communication]]"]
known-interactors: ["[[klotho]]", "[[fgfr1c]]", "[[atf4]]", "[[ppar-alpha]]"]
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[ppar-alpha-pathway]]", "[[integrated-stress-response]]", "[[gcn2]]"]
causes: ["[[ampk]]", "[[autophagy]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Kharitonenkov 2005, Inagaki 2007, Zhang 2012, and Laeger 2014 verified end-to-end against local PDFs. Salminen 2017-arr, 2017-cellsig, 2016-jmm verified against Crossref metadata only (not_oa, no full-text access). Jeong 2024 verified against abstract via Crossref (PDF download failed; body claims are abstract-level accurate). Canonical identity fields (UniProt Q9NSA1, NCBI Gene 26291, HGNC 3678, Ensembl ENSG00000105550) not independently re-verified against source databases — recommend confirming on next lint pass."
---

# FGF21

FGF21 (fibroblast growth factor 21) is an atypical, endocrine member of the FGF family secreted primarily by the liver. Unlike classical FGFs, it lacks a high-affinity heparin-binding domain and acts as a circulating hormone rather than a local paracrine signal. FGF21 is induced by diverse nutritional and metabolic stresses — fasting, protein restriction, mitochondrial dysfunction, cold — and drives coordinated metabolic adaptations including enhanced adipose glucose uptake, thermogenesis, improved insulin sensitivity, and lipid mobilization. Transgenic overexpression in mice extends median lifespan ~36%, placing FGF21 among the most potent single-gene longevity interventions identified in mammals [^zhang2012].

## Identity

- **UniProt:** Q9NSA1 (FGF21_HUMAN) — Swiss-Prot reviewed entry
- **NCBI Gene:** 26291
- **HGNC:** 3678
- **Ensembl:** ENSG00000105550
- **Mouse ortholog:** Fgf21 (high sequence conservation)
- **Length:** 209 amino acids (canonical isoform, including 28-aa signal peptide; mature secreted form: residues 29–209)
- **Molecular weight:** ~22.3 kDa (calculated); glycosylation adds ~1–2 kDa in vivo

## Domain structure

FGF21 shares the beta-trefoil fold of canonical FGFs but has two key divergences that confer its endocrine character [^kharitonenkov2005]:

- **Reduced heparin-binding affinity** — due to substitutions in the heparin-binding loop; prevents sequestration in extracellular matrix, enabling systemic distribution. Kharitonenkov 2005 confirmed that none of the FGF21-induced in vitro responses were heparin-regulated.
- **Disordered C-terminal tail** (residues ~143–209) — intrinsically disordered and structurally flexible. Subsequent structural work established this region as critical for binding the obligate co-receptor **beta-Klotho** ([[klotho]]); this was not determined in Kharitonenkov 2005 (the co-receptor mechanism remained unresolved at that time). #gap/needs-canonical-id
- **Signal peptide** (residues 1–28) — cleaved cotranslationally; mature protein is secreted via the classical ER-Golgi pathway.

## Receptor complex and signaling

FGF21 cannot activate FGFRs alone at physiological concentrations [^kharitonenkov2005]. Kharitonenkov 2005 showed that FGF21 induces tyrosine phosphorylation of FGFR1 and FGFR2 in differentiated 3T3-L1 adipocytes in a heparin-independent manner, but the underlying co-receptor mechanism was not resolved in that paper. Subsequent work established that productive FGF21 signaling requires a ternary complex with:

- **Obligate co-receptor:** Beta-Klotho ([[klotho]]) — a single-pass transmembrane protein expressed in metabolically active tissues (liver, adipose, pancreas, brain)
- **Signaling receptor:** FGFR1c (primary in adipose and hypothalamus), FGFR2c, or FGFR3c

The FGF21 / beta-Klotho / FGFR complex activates canonical **MAPK (ERK1/2)** downstream signaling [^kharitonenkov2005]. PI3K-AKT activation is reported in subsequent pharmacological studies but was not established in Kharitonenkov 2005. #gap/needs-canonical-id

**Tissue distribution of beta-Klotho** directly determines FGF21 responsiveness — tissues lacking beta-Klotho expression (e.g., skeletal muscle) are effectively FGF21-insensitive despite expressing FGFRs. Kharitonenkov 2005 confirmed that FGF21 did not stimulate glucose uptake in muscle L6-GLUT4myc myoblasts/myotubes, consistent with tissue-specific co-receptor requirement.

## Expression: primary sources

FGF21 is expressed in multiple tissues but hepatic secretion dominates circulating levels:

| Tissue | Context | Regulatory input |
|---|---|---|
| Liver (primary) | Fasting, PPARα activation, ketogenic diet | PPARα → FGF21 promoter |
| Adipose (WAT/BAT) | Cold, PPARγ activation | PPARγ, β3-adrenergic |
| Skeletal muscle | Exercise, mitochondrial stress | ATF4, ISR |
| Pancreas | Acute amino acid depletion | GCN2-eIF2α-ATF4 |
| Brain | Ketogenic diet, neurological stress | ATF4 |

## Induction stimuli

### 1. Fasting and PPARα

The canonical induction pathway: prolonged fasting → hepatic fatty acid oxidation → PPARα activation → FGF21 transcription [^inagaki2007]. FGF21 mRNA levels were increased ~28-fold after a 12-hour fast in wild-type mice; PPARα-null mice showed only ~5-fold induction under the same conditions, demonstrating that PPARα is required for the full fasting-induced upregulation of FGF21 but that PPARα-independent pathways also contribute. PPARα directly binds to two PPRE elements in the FGF21 promoter (ChIP confirmed, −1119 to −1044 region). FGF21 then acts in an endocrine loop to sustain the fasting metabolic state (ketogenesis, lipolysis in WAT, and torpor).

### 2. Dietary protein / amino acid restriction

FGF21 is the primary endocrine signal mediating the systemic effects of dietary protein restriction [^laeger2014]. The pathway runs through the **GCN2 → eIF2α → ATF4/ATF5** arm of the [[integrated-stress-response]]:

> Low dietary amino acids → GCN2 kinase activation ([[gcn2]]) → eIF2α phosphorylation → ATF4/ATF5 bind amino acid response elements (AAREs) in the FGF21 promoter → FGF21 induction

Laeger 2014 specifically demonstrated this using dietary protein restriction (low-protein / LP diet, ~5% casein in mice), not methionine restriction alone. FGF21 was induced in both mice and rats on LP diet and in humans after 28 days on a low-protein diet. Both GCN2 and PPARα are required: Gcn2-KO and Ppara-KO mice each showed markedly blunted LP-induced FGF21. PPARα does not appear to be transcriptionally activated during protein restriction per se, but plays a permissive/constitutive role. FGF21 induction by [[methionine-restriction]] is consistent with this axis (methionine depletion activates GCN2) but Laeger 2014 does not specifically test methionine restriction. #gap/needs-replication for methionine-specific link.

### 3. Mitochondrial dysfunction ("mitokine" role)

Mitochondrial stress (UPRmt, respiratory chain inhibition) induces FGF21 via ATF4 in multiple tissues [^salminen2017-cellsig]. This positions FGF21 as a bona fide **mitokine** — a mitochondria-to-systemic-circulation signal coordinating whole-organism responses to organelle stress.

### 4. Other induction contexts

- **Ketogenic diet** — hepatic PPARα activation (overlapping with fasting pathway)
- **Cold exposure** — adipose PPARγ and sympathetic activation → brown adipose FGF21 → thermogenesis amplification
- **Excess simple carbohydrates** — liver ChREBP-mediated induction (counterintuitive; reflects metabolic stress)

## Physiological effects

| Effect | Tissue | Magnitude / notes |
|---|---|---|
| Glucose uptake ↑ | Adipose (via GLUT1) | Insulin-independent; distinct from GLUT4 mechanism |
| Thermogenesis ↑ | BAT | Enhances UCP1, promotes browning of WAT |
| Insulin sensitivity ↑ | Liver, adipose | Improves glucose homeostasis in obesity models |
| Triglycerides ↓ | Plasma | Robust across species; mediated by VLDL reduction |
| Body weight ↓ | Systemic | Observed in pharmacological doses; partly food intake |
| Growth suppression | Systemic | FGF21 suppresses the GH/IGF-1 axis — a key aging-relevant trade-off (#gap/needs-mechanistic-detail) |

FGF21 notably **suppresses the GH/IGF-1 axis** — transgenic mice with chronic FGF21 overexpression are dwarfed — linking it to the somatotropic signaling reduction seen in many longevity models.

## Aging relevance

### Lifespan extension by FGF21 overexpression

Transgenic mice with hepatic FGF21 overexpression (FGF21-Tg; apoE promoter; C57Bl/6J background) live longer than wild-type controls in a sex-stratified manner [^zhang2012]. Median lifespans: males 27.9→36.2 mo (~30% extension); females 28.8→40.1 mo (~39% extension); combined-sex 28.1→38.2 mo (~36% extension); Tg n=77 vs WT n=67; HR=0.22, 95% CI 0.15–0.34, p=2.7×10⁻¹²; log-rank test. The lifespan extension was accompanied by improved insulin sensitivity (hyperinsulinemic-euglycemic clamp confirmed), reduced circulating IGF-1, and suppression of GH/IGF-1 signaling in liver — specifically attenuated hepatic JAK2/STAT5 signaling downstream of the GH receptor. Zhang 2012 explicitly ruled out AMPK activation, mTOR inhibition, and NAD+ increases as mediating mechanisms in this model (phospho-AMPK, phospho-S6, phospho-4E-BP1, and NAD+ were unchanged in Tg vs WT tissues). The proposed mechanism is JAK2/STAT5 attenuation in the GH/IGF-1 axis (NOT mTOR/AMPK/sirtuin pathways). Bone loss was observed in Tg mice (reduced trabecular bone volume, p=0.013). The beta-Klotho co-receptor requirement for this lifespan effect was not tested in Zhang 2012. #gap/needs-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | FGF21/beta-Klotho/FGFR1c axis conserved; PPARα induction conserved |
| Phenotype conserved in humans? | partial | Metabolic effects in human pharmacology trials; lifespan extension not testable |
| Replicated in humans? | no | No equivalent transgenic model possible; indirect via FGF21 analog trials |

### FGF21 levels in human aging — a paradox

Circulating FGF21 is **elevated rather than depressed** in older adults and in metabolic disease states (obesity, T2D, NAFLD). This is interpreted as **FGF21 resistance** — a state where target tissues become refractory to FGF21 signaling despite high ligand levels, analogous to insulin resistance [^salminen2017-arr]. The likely mechanism: age-related decline in beta-Klotho expression in key target tissues reduces signaling competence. #gap/needs-human-replication — the resistance hypothesis is mechanistically plausible but not rigorously demonstrated in humans via interventional evidence.

### FGF21 as mediator of protein restriction (and potentially CR and methionine restriction)

FGF21 is required for the normal behavioral and metabolic responses to dietary protein restriction in rodents [^laeger2014]. Fgf21-KO mice on a low-protein (LP) diet failed to show the normal increases in food intake, increased energy expenditure (~15% increase in WT on LP), and body weight/composition changes seen in wild-type mice. This positions FGF21 as a necessary downstream effector of protein restriction — not merely a correlate.

Note on methionine restriction and caloric restriction: Laeger 2014 demonstrates that protein restriction (not energy restriction alone) is the key driver of FGF21 induction. FGF21 induction during fasting and ketogenic diets is also attributable to the low-protein content of those conditions rather than energy restriction per se. The role of FGF21 as a required mediator of [[methionine-restriction]] longevity specifically is mechanistically plausible (methionine depletion activates GCN2) but not directly demonstrated in Laeger 2014. #gap/needs-replication for methionine-restriction and caloric-restriction-specific claims.

### AMPK activation

FGF21 is reported to activate [[ampk]] in multiple tissues at pharmacological doses, providing a potential mechanistic bridge between nutrient-sensing hormone signaling and the canonical pro-longevity AMPK pathway [^salminen2016-jmm]. However, Zhang 2012 found that phospho-AMPK levels were NOT increased in liver, muscle, or adipose of FGF21-Tg mice compared to WT, and mTOR targets (phospho-S6, phospho-4E-BP1) and NAD+ were similarly unchanged. This suggests that AMPK/mTOR/sirtuin pathways do not mediate the lifespan extension seen in FGF21 transgenic mice, and that any AMPK activation by FGF21 may be dose- or context-dependent [^zhang2012]. #gap/needs-mechanistic-detail

## Therapeutic angles

### FGF21 analogs — MASH / metabolic disease

Native FGF21 has poor pharmacokinetics (short half-life, proteolytic instability at the C-terminus). Second-generation long-acting analogs engineered for clinical use include:

| Compound | Class | Status (MASH) |
|---|---|---|
| Efruxifermin (AMG-876) | Fc fusion | Phase 3 (MASH) |
| Pegozafermin (BIO89-100) | PEGylated FGF21 analog | Phase 2b/3 (MASH) |
| Pegbelfermin (BMS-986036) | PEGylated analog | Phase 2 completed |

A 2024 meta-analysis of 8 RCTs (n=963) found FGF21 analog treatment significantly improved fibrosis outcomes vs placebo: ≥1 fibrosis stage improvement with no MASH worsening (RR=1.83, 95% CI 1.27–2.62) and ≥2-point NAS score improvement (RR=2.85, 95% CI 2.06–3.95), with acceptable safety profile [^jeong2024].

### Aging-specific indication potential

No FGF21 analog has been tested in aging or longevity-focused clinical trials as of 2026-05-06. The metabolic-syndrome indication pipeline (MASH, T2D, obesity) is the active translational pathway; aging-specific repurposing would likely require demonstration that FGF21 resistance can be overcome (e.g., by co-targeting beta-Klotho decline) or that supraphysiological FGF21 can bypass resistance. #gap/no-human-aging-trial

## Pathway membership

- [[fgf-signaling]] — FGF21 is an atypical endocrine member; acts via FGFR1c–4c with beta-Klotho co-receptor (R25+ implicit stub)
- [[integrated-stress-response]] — downstream of GCN2-eIF2α-ATF4; major induction arm
- [[ppar-alpha-pathway]] — downstream of hepatic PPARα; fasting/ketogenic induction arm
- [[deregulated-nutrient-sensing]] — FGF21 links amino acid sensing to systemic metabolic state
- [[altered-intercellular-communication]] — FGF21 is a prototypical inter-organ signal (liver→adipose, liver→brain)

## Key interactors

- [[klotho]] (beta-Klotho / KLB) — obligate co-receptor; tissue expression determines FGF21 responsiveness; age-related KLB decline hypothesized to drive FGF21 resistance
- [[fgf23]] — sibling FGF19-subfamily endocrine FGF; uses alpha-Klotho ([[klotho]]) as co-receptor (vs FGF21's beta-Klotho); shares the structural feature of low heparan-sulfate affinity that permits endocrine circulation; FGF15/19, FGF21, and FGF23 together comprise the three Klotho-coreceptor-requiring endocrine FGFs. Aging-axis-wise the two are complementary: FGF21 = mitokine/metabolic-stress signal; FGF23 = phosphate/bone-kidney/CV-aging signal.
- [[fgfr1c]] — primary signaling receptor in adipose and hypothalamus
- [[atf4]] — transcription factor driving FGF21 induction under ISR and mitochondrial stress
- [[ppar-alpha]] — transcription factor driving FGF21 induction during fasting and ketogenesis
- [[gcn2]] — upstream sensor in amino acid restriction → FGF21 axis
- [[ampk]] — downstream effector activated by FGF21 signaling

## Cross-references

- [[methionine-restriction]] — FGF21 is a candidate required effector of MR-induced metabolic benefits via the GCN2-eIF2α-ATF4/ATF5 axis; direct demonstration in methionine-restriction-specific experiments not yet established (Laeger 2014 demonstrates this for general protein restriction) #gap/needs-replication
- [[caloric-restriction]] — Laeger 2014 evidence suggests FGF21 induction during CR may be primarily driven by reduced dietary protein rather than energy restriction per se; FGF21's role in mediating CR longevity benefits is indirect #gap/needs-replication
- [[ketogenic-diet]] — strong FGF21 inducer via hepatic PPARα
- [[integrated-stress-response]] — GCN2-eIF2α-ATF4-FGF21 arm (R20)
- [[atf4]] — R20 verified; direct transcriptional activator of FGF21 promoter
- [[gcn2]] — R20 verified; upstream sensor in amino acid restriction
- [[klotho]] — verified-partial; co-receptor page
- [[deregulated-nutrient-sensing]] — hallmark page
- [[altered-intercellular-communication]] — hallmark page

## Limitations and gaps

- **FGF21 resistance mechanism in humans** — the beta-Klotho-decline hypothesis is supported by mouse data and correlative human data but lacks rigorous interventional proof. #gap/needs-human-replication
- **Lifespan extension translatability** — the 36% lifespan extension in FGF21 transgenic mice involves chronic supraphysiological FGF21 from birth; acute pharmacological dosing in clinical trials does not approximate this. #gap/needs-human-replication
- **AMPK/mTOR pathway involvement unclear** — Pharmacological FGF21 studies report AMPK activation (Salminen 2016 review), but Zhang 2012 showed AMPK, mTOR targets, and NAD+ are unchanged in FGF21 transgenic mice; the lifespan extension mechanism operates independently of these canonical longevity pathways. #gap/needs-mechanistic-detail
- **Bone safety signal** — FGF21 overexpression causes bone loss in mice (reduced trabecular bone volume, p=0.013 in Zhang 2012); mechanism involves increased marrow adipogenesis and decreased osteoblast differentiation. Relevant for any aging indication given baseline osteopenia risk. #gap/long-term-unknown
- **GH/IGF-1 suppression trade-off** — chronic FGF21 elevation suppresses somatotropic axis; relevance to sarcopenia risk in older adults not characterized. #gap/needs-mechanistic-detail
- **FGF21 signaling in brain aging** — beta-Klotho is expressed in CNS; FGF21 crosses BBB; cognitive effects in aging models are preliminary. #gap/needs-human-replication
- **Canonical ID verification** — UniProt Q9NSA1, HGNC 3678, Ensembl ENSG00000105550 pulled from database lookup on 2026-05-06; recommend confirming HGNC ID against genenames.org on next lint pass. #gap/needs-canonical-id

## Footnotes

[^kharitonenkov2005]: doi:10.1172/JCI23606 · Kharitonenkov A et al. · *J Clin Invest* 2005 · in-vitro (3T3-L1, human primary adipocytes) + in-vivo (ob/ob, db/db mice; ZDF rats; groups ≥5/group) · pharmacological characterization of FGF21 as novel metabolic regulator; insulin-independent GLUT1-mediated glucose uptake in adipocytes (EC₅₀ ~0.5 nM); heparin-independent FGFR1/FGFR2 phosphorylation; MAPK (ERK1/2) activation; non-mitogenic; glucose and triglyceride lowering in diabetic rodents; no hypoglycemia up to 8 mg/kg/d; note: beta-Klotho co-receptor mechanism not identified in this paper; ~2053 citations

[^inagaki2007]: doi:10.1016/j.cmet.2007.05.003 · Inagaki T et al. · *Cell Metabolism* 2007 · in-vivo (mouse; 129S4/Sv background PPARα-null + C57Bl/6 WT; n=4–5/group) · established FGF21 as PPARα-regulated fasting hormone; ~28-fold fasting induction in WT vs ~5-fold in PPARα-null mice; PPARα binds FGF21 promoter directly (ChIP); FGF21 promotes ketogenesis, lipolysis, and torpor; ~1474 citations

[^zhang2012]: doi:10.7554/eLife.00065 · Zhang Y et al. · *eLife* 2012 · in-vivo (mouse; C57Bl/6J; FGF21-Tg n=77, WT n=67) · randomized · log-rank p=2.7×10⁻¹² · HR=0.22 [0.15–0.34] · model: C57Bl/6J FGF21 transgenic · median lifespan sex-stratified: males 27.9→36.2 mo (~30%); females 28.8→40.1 mo (~39%); combined 28.1→38.2 mo (~36%); improved insulin sensitivity (euglycemic clamp); GH/IGF-1 axis suppression via reduced hepatic JAK2/STAT5; AMPK/mTOR/NAD+/sirtuin pathways not involved; bone loss in Tg mice; ~408 citations

[^laeger2014]: doi:10.1172/jci74915 · Laeger T et al. · *J Clin Invest* 2014 · in-vivo (mouse + rat; C57Bl/6; Fgf21-KO, Gcn2-KO, Ppara-KO; n=5–10/group) + human RCT subset (n=8–9) · FGF21 established as required endocrine signal of dietary protein (not energy) restriction; GCN2-eIF2α-ATF4/ATF5 + PPARα induction axis; Fgf21-KO mice on LP diet lack normal food intake, EE, and body weight responses; circulating FGF21 increased ~171% in humans on LP diet (P=0.008); ~572 citations

[^salminen2017-arr]: doi:10.1016/j.arr.2017.05.004 · Salminen A et al. · *Ageing Research Reviews* 2017 · review · FGF21 regulation of longevity; FGF21 resistance in aging; interaction with energy metabolism and stress responses; ~119 citations

[^salminen2017-cellsig]: doi:10.1016/j.cellsig.2017.08.009 · Salminen A et al. · *Cellular Signalling* 2017 · review · ISR stimulation of FGF21 expression; mitokine role; systemic enhancer of longevity framing; ~99 citations

[^salminen2016-jmm]: doi:10.1007/s00109-016-1477-1 · Salminen A et al. · *J Mol Med* 2016 · review · FGF21 activation of AMPK signaling; metabolic regulation and aging; ~108 citations

[^jeong2024]: doi:10.1002/cpt.3278 · Jeong C et al. · *Clin Pharmacol Ther* 2024 · meta-analysis · n=963 (8 RCTs) · FGF21 analogs (efruxifermin, pegbelfermin, pegozafermin) for MASH; ≥1 fibrosis stage improvement with no MASH worsening RR=1.83 (95% CI 1.27–2.62); ≥2-point NAS improvement RR=2.85 (95% CI 2.06–3.95); acceptable safety profile; note: PDF unavailable (download failed); verified against abstract via Crossref; ~21 citations
