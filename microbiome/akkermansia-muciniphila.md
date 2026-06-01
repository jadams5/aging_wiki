---
type: microbe
aliases: [A. muciniphila, Akkermansia, AKK]
ncbi-taxonomy: 239935
phylum: Verrucomicrobia
family: Akkermansiaceae
gram-stain: negative
oxygen-tolerance: anaerobic (mucin-utilizing)
host: Homo sapiens (gut commensal)
discovered: 2004 (Derrien)
genome-size-mb: 2.664
key-strains: [MucT (ATCC BAA-835, type strain), Muc^T pasteurized]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Depommier 2019 (Nat Med) and van Passel 2011 (PLoS ONE) primary-source PDFs verified end-to-end. Non-OA sources (Derrien 2004, Plovier 2017, Png 2010) tagged #gap/no-fulltext-access; pending-OA sources (Biagi 2010, Rampelli 2020) not yet downloaded — quantitative claims from those sources remain unverified. Centenarian abundance contradiction (Biagi 2010 vs Rampelli 2020) characterised from abstracts/training knowledge only — directions flagged #gap/contradictory-evidence pending full-PDF verification. R33 batch-2 propagation (2026-05-07): Forslund 2015 AKK-metformin claim qualified — trend present 'to some extent' in Danish (MHD) cohort only, inconsistent across CHN and SWE country subsets per akkermansia-supplementation verifier."
---


# *Akkermansia muciniphila*

> Schema note: this page introduces `type: microbe` as a new entity type for microbial taxa. CLAUDE.md should be updated to formalize the frontmatter shape if microbiome pages expand beyond this initial seed.

*Akkermansia muciniphila* (AKK) is a gram-negative, strictly anaerobic bacterium that resides in the intestinal mucus layer and degrades host gut mucin as its primary carbon and nitrogen source. It is the **sole recognized species in the genus *Akkermansia*** and is among the best-characterized human gut commensals. Comprising ~1–4% of healthy adult fecal microbiota, AKK abundance declines with obesity, type 2 diabetes, IBD, and aging. Its outer-membrane protein Amuc_1100 engages TLR2 on intestinal epithelial cells to reinforce tight junctions — a mechanism that links AKK depletion to gut barrier dysfunction and downstream systemic [[chronic-inflammation]]. The first human proof-of-concept RCT (Depommier 2019; n=40 enrolled / n=32 completed) demonstrated that **pasteurized** AKK (10^10 cells/day × 3 months) significantly improved insulin sensitivity (+28.62±7.02%, P=0.002), reduced insulinemia (−34.08±7.12%, P=0.006), and reduced total plasma cholesterol (−8.68±2.38%, P=0.02) vs placebo in overweight/obese insulin-resistant adults; body weight was modestly but non-significantly reduced (−2.27±0.92 kg, P=0.09) [^depommier2019]. AKK is the most prominently cited specific organism in the [[dysbiosis]] hallmark; this page is the wiki's **first microbe entry** and the seed crystal for microbiome coverage.

## Identity

| Field | Value |
|---|---|
| Species | *Akkermansia muciniphila* Derrien et al. 2004 |
| NCBI Taxonomy ID | 239935 |
| Phylum | Verrucomicrobia |
| Class | Verrucomicrobiae |
| Order | Verrucomicrobiales |
| Family | Akkermansiaceae |
| Gram stain | Negative |
| Morphology | Oval to spherical, non-motile, non-spore-forming |
| Oxygen tolerance | Strict anaerobe |
| Type strain | MucT (= ATCC BAA-835 = CIP 107961T = DSM 22959T) |
| Genome size | 2.664 Mb (2,664,102 bp; single circular chromosome) [^vanpassel2011] |
| G+C content | 55.8% [^vanpassel2011] |
| Protein-coding genes | 2,176 predicted ORFs (coding capacity 88.8%; 1,408 assigned to COG categories, 768 hypothetical) [^vanpassel2011] |
| Named for | Antoon Akkermans (Dutch microbiologist) [^derrien2004] #gap/no-fulltext-access |

The organism was isolated from human feces and formally described in 2004 [^derrien2004]. The genus *Akkermansia* is the sole member of the family Akkermansiaceae.

## Niche and mucin metabolism

AKK occupies the **inner intestinal mucus layer**, the gel-like stratum of glycoprotein mucins (primarily MUC2) secreted by goblet cells. It is the dominant mucolytic commensal in the human gut. Key metabolic features:

- **Primary carbon and nitrogen source:** host-secreted mucin glycoproteins — AKK encodes a broad arsenal of mucinases, sialidases, and glycoside hydrolases to degrade the mucin O-glycan chains [^vanpassel2011].
- **Fermentation products:** propionate and acetate (short-chain fatty acids; SCFAs). Propionate enters host portal circulation and has effects on hepatic gluconeogenesis, satiety signaling (via GPR41/GPR43), and systemic lipid metabolism. See [[scfa-signaling]] (stub).
- **Mucus layer homeostasis:** colonization by AKK is thought to stimulate goblet cells to increase mucin production, maintaining mucus layer thickness — a positive feedback that supports both the bacterium and host barrier integrity [^everard2013]. This claim is based on mouse studies; #gap/needs-human-replication.

AKK does not require dietary fiber (unlike butyrate-producing commensals such as *Faecalibacterium prausnitzii*). Its niche dependency on host mucin secretion means that dietary composition affects AKK abundance indirectly via goblet cell physiology and mucin secretion rates.

## Abundance dynamics

### Healthy adults

AKK comprises approximately 1–4% of the fecal microbiota in healthy lean adults, making it one of the most abundant single-species commensals. Abundance is highly variable between individuals and declines within individuals under the metabolic and pathological conditions listed below [^derrien2004]. #gap/needs-replication — the "1–4%" figure is widely cited but derives from early 16S rRNA studies with varying detection methodologies; shotgun metagenomic quantification studies generally confirm the range.

### Conditions associated with AKK depletion

| Condition | Evidence | Reference |
|---|---|---|
| Obesity / overweight | AKK negatively correlates with body mass index and adiposity markers in human cohort data | [^everard2013] |
| Type 2 diabetes (T2D) | AKK depleted in T2D patients vs metabolically healthy controls | [^png2010] |
| IBD (ulcerative colitis, Crohn's disease) | AKK reduced in IBD mucosa; mucolytic bacteria expanded and may augment mucin degradation by other species | [^png2010] |

The mechanistic hypothesis linking AKK depletion to metabolic disease is that reduced AKK → thinner mucus layer → increased gut permeability → LPS translocation → TLR4 → NF-κB → systemic insulin resistance and inflammation. See [[dysbiosis]] for the broader LPS-translocation axis.

### AKK abundance in aging and extreme longevity

**Aging reduces AKK abundance** — consistent with the broader pattern of beneficial commensal loss with age — but the relationship with extreme longevity (centenarians) is contested:

- **Biagi 2010** (PLoS ONE; Italian centenarians vs young adults and 65–75 yr elderly) found altered microbiota composition in centenarians including changes at the Bacteroidetes/Firmicutes level, with centenarians showing enrichment of pro-inflammatory proteobacterial taxa and shifts away from typical adult configurations. Akkermansia-specific data were not the primary focus; the study is observational and cross-sectional [^biagi2010].

- **Rampelli 2020** (mSystems; Italian centenarians/semi-supercentenarians vs elderly/young adults, shotgun metagenomics) found that centenarians (mean age 105 yr) showed enrichment of taxa involved in xenobiotic degradation and altered microbiome community structure, with some evidence for higher *Akkermansia* in the longest-lived group compared to 70–99 yr elderly [^rampelli2020]. This is in apparent tension with the general "AKK depletes with aging" narrative.

#gap/contradictory-evidence — These results do not necessarily conflict: AKK depletion may be a marker of unhealthy aging and metabolic deterioration, while maintenance or recovery of AKK could be a feature of exceptional (healthy) aging. The cross-sectional design of both studies and the major confounds (diet, geography, co-morbidities, survivor selection bias in centenarian cohorts) prevent strong causal conclusions. A longitudinal study tracking AKK across the full aging trajectory in the same individuals does not yet exist. #gap/needs-replication

AKK depletion correlates with frailty markers in preliminary observational data. #gap/needs-replication — no verified primary source for a formal frailty–AKK association study on this page; this claim reflects training-knowledge synthesis. #gap/unsourced

## Aging relevance

AKK is currently the **most pharmacologically tractable single-species microbiome target** in the aging context. Its relevance to aging biology operates through several channels:

1. **Gut barrier integrity** — AKK depletion → increased gut permeability → LPS translocation → systemic inflammaging. Inflammaging is a contributor to virtually every integrative hallmark. See [[chronic-inflammation]].
2. **Metabolic health** — AKK depletion correlates with insulin resistance and T2D; both are major aging comorbidities strongly associated with [[deregulated-nutrient-sensing]].
3. **Immune modulation** — Amuc_1100/TLR2 signaling has immunomodulatory downstream effects beyond tight-junction reinforcement, affecting intestinal dendritic cell and regulatory T cell populations [^plovier2017]. #gap/needs-replication — these effects have been demonstrated in mouse models only.
4. **SCFA production** — AKK-derived propionate and acetate enter the SCFA signaling network (see [[scfa-signaling]] stub); their effects on epigenetic regulation (HDAC inhibition) and immune cell function are relevant to the aging inflammatory phenotype.

No published lifespan extension study using AKK supplementation in mice exists as of this writing. #gap/long-term-unknown — the preclinical work has focused on metabolic outcomes (obesity, insulin sensitivity, gut barrier) rather than longevity per se.

## Mechanism — preclinical

### Everard 2013: live AKK reverses HFD-induced metabolic disease in mice

Everard et al. 2013 administered live *A. muciniphila* (2×10^8 cfu/day by oral gavage for 4 weeks) to high-fat-diet (HFD)-fed or ob/ob obese C57BL/6J mice (n=10/group). Key findings [^everard2013]:

- Reversed HFD-induced fat mass gain and metabolic endotoxemia
- Improved glucose tolerance and insulin sensitivity (HOMA-IR)
- Increased intestinal tight junction protein expression (ZO-1, claudin-3) → reduced gut permeability
- Restored mucus layer thickness to levels comparable to normal-diet controls
- Mechanism proposed: AKK colonization → mucus layer maintenance → barrier reinforcement → reduced LPS translocation → reduced metabolic endotoxemia → improved insulin sensitivity

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — Amuc_1100/TLR2/tight-junction axis is plausible in humans; direct evidence limited |
| Phenotype conserved in humans? | partial — Depommier 2019 supports metabolic improvement; barrier restoration not directly measured |
| Replicated in humans? | in-progress — see Depommier 2019 below |

### Plovier 2017: pasteurization enhances protective effect via Amuc_1100

Plovier et al. 2017 made the critical observation that **heat-pasteurized (70°C, 30 min) *A. muciniphila* is MORE effective than live bacteria** in reversing HFD-induced metabolic dysfunction in mice [^plovier2017]. The active component was identified as **Amuc_1100**, a specific outer-membrane protein:

- Amuc_1100 engages **TLR2** on intestinal epithelial cells (not TLR4, which recognizes LPS and drives inflammatory signaling)
- TLR2 activation by Amuc_1100 reinforces tight junctions, increases ZO-1 and claudin-3 expression
- Amuc_1100 is stable to 70°C pasteurization but inactivated at 95°C (boiling) — explaining why pasteurized but not autoclaved bacteria retains activity
- Pasteurized bacteria improved fat mass, glucose tolerance, energy metabolism, and cholesterol levels in HFD mice; live bacteria also improved most parameters but to a lesser degree on some outcomes

The pasteurized formulation being more effective than live bacteria has important practical implications: pasteurized AKK is easier to manufacture, has longer shelf-life, and avoids regulatory complications associated with live bacteriotherapy. The Depommier 2019 clinical trial was designed around this finding.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — TLR2 and tight-junction components are conserved; Amuc_1100 specificity confirmed in mouse |
| Phenotype conserved in humans? | in-progress — Depommier 2019 supports; mechanistic measurements not available in human data |
| Replicated in humans? | in-progress |

## Mechanism — clinical

### Depommier 2019 (Nat Med): Phase 1/2 proof-of-concept RCT

The most important human trial to date [^depommier2019]. Design and key results:

**Design:** Randomized, double-blind, placebo-controlled proof-of-concept study. 160 subjects screened; 45 eligible; 5 declined; **40 enrolled**. Seven were excluded before completion (1 placebo, 1 pasteurized, 5 alive — 3 due to personal reasons/attendance, 4 due to antibiotic use; 1 additional placebo excluded for protocol violation), leaving **n=32 completers**: Placebo n=11, Pasteurized n=12, Alive n=9. Three arms: placebo / live AKK (10^10 cells/day) / pasteurized AKK (10^10 cells/day), 3 months [^depommier2019].

**Inclusion criteria:** BMI >25 kg/m²; metabolic syndrome by NCEP ATP III definition (≥3 of: fasting glycemia >100 mg/dL, BP ≥130/85 mmHg or antihypertensive treatment, fasting triglycerides ≥150 mg/dL, HDL cholesterol <40 mg/dL [men] / <50 mg/dL [women], waist circumference >102 cm [men] / >88 cm [women]); insulin sensitivity <75% by HOMA; HbA1c ≤7.5%; aged 18–70 yr; no glucose-lowering drugs, statins, antibiotics in prior 2 months, or probiotic/prebiotic supplements in prior month.

**Primary outcomes (safety + metabolic markers):**
- AKK supplementation was **safe** — no serious adverse events; pasteurized AKK well tolerated.
- **Insulin sensitivity index** (HOMA): +28.62±7.02% in pasteurized AKK vs placebo (P=0.002). Live AKK significantly improved HOMA insulin resistance score (P<0.05) but the insulin sensitivity index effect was less pronounced.
- **Insulinemia**: −34.08±7.12% in pasteurized AKK vs placebo (P=0.006).
- **Body weight**: −2.27±0.92 kg (P=0.09), fat mass −1.37±0.82 kg (P=0.09), hip circumference −2.63±1.14 cm (P=0.091) in pasteurized AKK vs placebo. Reductions were consistent in direction but did not reach conventional significance — study not powered for anthropometric endpoints. #gap/needs-replication
- **Total plasma cholesterol**: −8.68±2.38% in pasteurized AKK vs placebo (P=0.02). LDL was −7.53% and triglycerides −15.71% but neither reached significance.
- **Plasma LPS** (endotoxemia marker) was significantly reduced in the pasteurized AKK group vs both baseline and placebo at 3 months — consistent with the proposed gut-barrier reinforcement mechanism.
- **Gut microbiome community structure** (16S rRNA) was **not significantly changed** by AKK supplementation (permutational MANOVA, R²=0.075, p=0.18 between groups at endpoint) — consistent with the postbiotic mechanism (host-tissue effects via Amuc_1100) rather than broad microbiome restructuring.
- **Hepatic markers**: pasteurized AKK significantly reduced γGT (by ~24% vs placebo, P=0.009) and AST; ALT was not significantly changed.

**Interpretation:** This is a **proof-of-concept** study — small n, single center, not powered for definitive efficacy conclusions. The significance of pasteurized vs live bacteria advantage aligns with Plovier 2017 mouse data. No aging-specific primary endpoint was measured; the study population was overweight/obese insulin-resistant adults, not elderly. #gap/needs-replication — independent replication in a larger cohort required; aging-specific trial has not been conducted as of this writing.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TLR2/tight-junction/metabolic axis operating in human gut |
| Phenotype conserved in humans? | yes (metabolic parameters) — insulin sensitivity, cholesterol, body weight responsive |
| Replicated in humans? | no — single proof-of-concept trial; no independent replication |

## Drug-microbe interactions

### Metformin enriches AKK

Metformin (first-line T2D drug, AMPK activator — see [[metformin]]) is associated with enrichment of *A. muciniphila* in T2D patients. Forslund et al. 2015 (MetaHIT consortium, n=784 subjects across CHN, SWE, and Danish/MHD cohorts) found that gut microbiome signatures previously attributed to T2D diagnosis were substantially driven by metformin treatment status; the AKK-metformin association was observed only "to some extent" in the Danish (MHD) cohort, while the CHN and SWE country subsets showed inconsistent results [^forslund2015]. #gap/needs-replication — cross-cohort inconsistency in the AKK signal limits the strength of the metformin→AKK claim.

The causal direction is unresolved: does metformin enrich AKK, or does metformin select for individuals with a microbiome composition that includes higher AKK? Mechanistically, metformin is proposed to increase mucin secretion → providing more substrate for AKK → AKK proliferation. This drug-microbiome interaction may contribute to metformin's metabolic benefits beyond its primary AMPK-activating mechanism. #gap/needs-replication — the Forslund 2015 finding is observational; causality not established and cross-cohort inconsistent.

### Dietary polyphenols

Multiple plant-derived polyphenols have been associated with AKK enrichment in preclinical and limited human studies:

- **Cranberry polyphenols** — synbiotic interactions with AKK [^anhe2019_unsourced] #gap/unsourced — the Anhe 2019 citation in the task brief is not a confirmed DOI; DOI not independently verified here; verify before relying on this claim.
- **Berberine** — isoquinoline alkaloid with ~0.68% oral bioavailability that acts as a gut-luminal agent; bacterial nitroreductase reduces berberine to dihydroberberine (dhBBR), the active inhibitor of microbial choline-TMA-lyase (CutC) and gut-bacterial FMO. Ma 2022 (doi:10.1038/s41392-022-01027-6) documents AKK enrichment in HFD-fed hamsters and atherosclerosis patients (n=21 open-label arm) treated with berberine 1 g/day × 4 months [^ma2022]. The AKK enrichment is downstream of the broader microbiome remodeling caused by CutC/FMO suppression, not a direct berberine→AKK interaction. See [[berberine]] for full compound page.
- **EGCG** (green tea catechin) — associated with AKK enrichment in rodent models. #gap/needs-human-replication #gap/unsourced
- **Grape polyphenols / resveratrol** — preclinical associations with AKK enrichment. #gap/unsourced

The mechanisms are proposed to involve increased mucin secretion (polyphenol-stimulated goblet cell activity) and/or direct antimicrobial effects that favor AKK by suppressing competing commensals. #gap/no-mechanism — the molecular mechanisms for polyphenol-AKK enrichment are not well-established.

### Caloric restriction

[[caloric-restriction]] shifts the gut microbiome composition, with multiple studies reporting enrichment of beneficial commensals including AKK in CR animals and humans. This represents a convergence point between two well-characterized aging interventions (CR and microbiome modulation) — the microbiome may be a partial mediator of CR's metabolic benefits. The causal contribution of AKK enrichment specifically to CR outcomes has not been isolated. #gap/unsourced — verify against primary CR-microbiome source before relying on this claim.

## Gaps

- #gap/long-term-unknown — No mouse lifespan extension study using AKK supplementation published as of 2026-05-05; all preclinical outcomes focus on metabolic endpoints.
- #gap/needs-human-replication — All mechanistic findings from mouse models (mucus layer restoration, TLR2-tight junction, immune modulation) await controlled human confirmation.
- #gap/needs-replication — Depommier 2019 is a single proof-of-concept trial (n=40 enrolled / n=32 completed, single center); independent replication in a larger cohort and in an aging-specific population has not been published.
- #gap/contradictory-evidence — Centenarian microbiome studies report conflicting AKK abundance patterns (Biagi 2010 vs Rampelli 2020); causality vs survivor selection confound is unresolved.
- #gap/dose-response-unclear — Optimal dose (both live and pasteurized forms), treatment duration, and whether efficacy scales with dose have not been established in humans; 10^10 cells/day was chosen empirically in Depommier 2019.
- #gap/needs-replication — AKK-frailty correlation claim is unsourced on this page (#gap/unsourced above); a verified primary source is needed.
- **Wiki coverage gap** — this is the first microbe page. Related stubs needed: [[gut-microbiome]], [[scfa-signaling]], [[tlr2]], [[gut-barrier]], [[amuc1100]]. The [[caloric-restriction]] page needs a cross-link to this page. [[berberine]] page now exists (2026-05-18) and cross-links bidirectionally.

## See also

- [[dysbiosis]] — the hallmark of aging to which AKK is most central; verified
- [[chronic-inflammation]] — downstream systemic consequence of AKK depletion via gut barrier dysfunction
- [[metformin]] — drug that enriches AKK; potential contribution to its metabolic mechanism
- [[caloric-restriction]] — dietary intervention associated with AKK enrichment
- [[type-2-diabetes]] — metabolic condition associated with AKK depletion
- [[homo-sapiens]] — model organism page for human-specific evidence
- [[scfa-signaling]] — stub; AKK-derived propionate and acetate biology
- [[tlr2]] — stub; Amuc_1100 receptor; mediates AKK's barrier-reinforcing effect
- [[gut-microbiome]] — stub; broader microbiome context
- [[gut-barrier]] — stub; AKK's role in maintaining mucosal barrier integrity
- [[nothobranchius-furzeri]] — verified; killifish FMT lifespan study (cross-species microbiome evidence)
- [[urolithin-a]] — verified-partial; another gut-microbiome-derived metabolite with aging-relevant effects

## Footnotes

[^derrien2004]: [[studies/derrien-2004-akkermansia-discovery]] · doi:10.1099/ijs.0.02873-0 · in-vitro + culture isolation · model: human fecal isolates · Derrien M, Vaughan EE, Plugge CM, de Vos WM · Int J Syst Evol Microbiol 2004 · #gap/no-fulltext-access (not_oa; claims derived from this source unverified against full PDF)

[^vanpassel2011]: [[studies/vanpassel-2011-akkermansia-genome]] · doi:10.1371/journal.pone.0016876 · in-silico / genomic · model: *A. muciniphila* MucT genome sequence · van Passel MWJ et al. · PLoS ONE 2011 · PDF locally available 

[^everard2013]: [[studies/everard-2013-akkermansia-hfd-mice]] · doi:10.1073/pnas.1219451110 · in-vivo · model: C57BL/6J mice (ob/ob and HFD), n=10/group; 2×10^8 cfu/0.2 mL AKK/day by oral gavage × 4 weeks · Everard A et al. · PNAS 2013 · PDF locally available

[^plovier2017]: [[studies/plovier-2017-amuc1100-pasteurized-akk]] · doi:10.1038/nm.4236 · in-vivo · model: HFD-induced obese mice; pasteurized vs live AKK comparison · Plovier H et al. · Nat Med 2017 · #gap/no-fulltext-access (not_oa; quantitative claims on this page from this source unverified against full PDF)

[^depommier2019]: [[studies/depommier-2019-akk-human-rct]] · doi:10.1038/s41591-019-0495-2 · rct · n=40 enrolled / n=32 completed (placebo n=11, pasteurized n=12, alive n=9) · 3-arm: placebo / live AKK / pasteurized AKK (10^10 cells/day × 3 months) · model: overweight/obese insulin-resistant adults with metabolic syndrome (BMI >25 kg/m², HOMA insulin sensitivity <75%) · Depommier C, Everard A, Druart C, Plovier H, Van Hul M et al. · Nat Med 2019 · PDF locally available 

[^png2010]: [[studies/png-2010-akkermansia-ibd]] · doi:10.1038/ajg.2010.281 · observational · model: IBD patient mucosa vs controls · Png CW et al. · Am J Gastroenterol 2010 · #gap/no-fulltext-access (not_oa; claims attributed to this source unverified against full PDF)

[^biagi2010]: [[studies/biagi-2010-centenarian-microbiota]] · doi:10.1371/journal.pone.0010667 · observational · model: Italian centenarians (>100 yr), young adults, 65–75 yr elderly · Biagi E et al. · PLoS ONE 2010 · PDF not yet downloaded (pending; PLoS ONE OA — Akkermansia-direction claim unverified against full PDF)

[^rampelli2020]: [[studies/rampelli-2020-extreme-longevity-metagenomics]] · doi:10.1128/mSystems.00124-20 · observational (shotgun metagenomics) · model: Italian centenarians/semi-supercentenarians vs elderly/young adults · Rampelli S et al. · mSystems 2020 · PDF not yet downloaded (pending; mSystems OA — Akkermansia-direction claim unverified against full PDF)

[^forslund2015]: [[studies/forslund-2015-metformin-microbiome]] · doi:10.1038/nature15766 · observational (cross-sectional cohort) · n=784 · model: human T2D patients stratified by metformin treatment status (MetaHIT consortium) · Forslund K et al. · Nature 2015 · PDF not yet downloaded (pending download — claims on this page unverified against full PDF)

[^ma2022]: [[studies/ma-2022-berberine-tmao-atherosclerosis]] · doi:10.1038/s41392-022-01027-6 · Ma SR, Tong Q, Lin Y et al · *Signal Transduct Target Ther* 2022;7:207 · HFD-fed golden hamsters (n=37 across 6 groups, 3 months) + human n=21 atherosclerosis arm (open-label, BBR 1 g/day × 4 months) · AKK enrichment documented in 16S rRNA sequencing of both hamster and human gut samples · local PDF verified
