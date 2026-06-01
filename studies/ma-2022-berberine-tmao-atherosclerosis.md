---
type: study
doi: 10.1038/s41392-022-01027-6
pmid: 35794102
pmc: null
title: "Berberine treats atherosclerosis via a vitamine-like effect down-regulating Choline-TMA-TMAO production pathway in gut microbiota"
authors: [Ma S-R, Tong Q, Lin Y, Pan L-B, Fu J, Peng R, Zhang X-F, Zhao Z-X, Li Y, Yu J-B, Cong L, Han P, Zhang Z-W, Yu H, Wang Y, Jiang J-D]
year: 2022
journal: Signal Transduction and Targeted Therapy
study-design: in-vivo
organism: mesocricetus-auratus
n-subjects: 37   # hamsters in the primary in-vivo atherosclerosis arm; human arm n=21 BBR + n=12 statin reference
intervention: ["[[berberine]]"]
hallmarks-tested: ["[[chronic-inflammation]]", "[[dysbiosis]]"]
human-evidence: true   # open-label clinical arm n=21 AS patients; ChiCTR-OPN-17012942
peer-reviewed: true
preregistered: true   # China Clinical Trial Registry ChiCTR-OPN-17012942
key-findings: [tmao-reduction-feces-plasma, plaque-score-reduction, imt-reduction-ns, cutc-inhibition, bacterial-fmo-inhibition, hepatic-fmo3-unchanged, akkermansia-enrichment, vitamin-like-mechanism, low-oral-bioavailability-gut-mediated]
local-pdf: null
verified: true
verified-date: 2026-05-18
verified-by: claude
verified-scope: "Primary-source PDF read end-to-end; all quantitative claims (n's, p-values, % reductions, human arm design, IMT result) verified against PDF text and figures. Figure 1b (TMA/TMAO feces/plasma reductions), Figure 5b (IMT_max), Figure 6 (human arm plaque scores and TMAO), and Table 1 (per-patient plaque scores) cross-checked."
---

# Berberine treats atherosclerosis via a vitamine-like effect down-regulating Choline-TMA-TMAO production pathway in gut microbiota

## TL;DR

Berberine (BBR) is poorly absorbed orally (~1% bioavailability) but is reductively converted to dihydroberberine (dhBBR) by gut-bacterial nitroreductase (NR). dhBBR potently inhibits two bacterial enzymes in the choline→TMA→TMAO axis: choline-TMA lyase (**CutC**) and flavin-containing monooxygenase (**FMO**). This reduces plasma TMAO in HFD-fed hamsters by ~58–64%, shrinks aortic IMT_max by 22–29%, and in a small open-label human arm (n=21) reduces carotid plaque score by 3.2% over 4 months. The authors frame BBR's low bioavailability not as a pharmacokinetic limitation but as the mechanism: it acts as a "vitamin-like" cofactor that never leaves the gut, modulating microbial enzyme activity the way a B-vitamin modulates mitochondrial enzymes. 154 citations as of May 2026 (FWCI 30.6, citation_percentile 100th).

## Design

This paper reports four interlocking experimental layers: in-vivo HFD-hamster atherosclerosis, in-vitro bacterial culture / enzyme systems, fecal-transplant confirmation, and an open-label human clinical arm.

### Layer 1 — In-vivo HFD hamster atherosclerosis model

**Species:** Golden hamster (*Mesocricetus auratus*), male, 8 weeks, 100–120 g; supplied by Vital River Laboratory Animal Technology Co. (Beijing).

**Model induction:** 29 atherosclerotic hamsters fed HFD ad libitum for **10 months** to establish AS model. 8 hamsters remained on regular fodder as normal controls (Group N).

**Six groups:**

| Group | n | Treatment (3 months) |
|---|---|---|
| N — Normal control | 8 | Regular fodder, no HFD |
| H — HFD AS model | 7 | HFD, no drug |
| BL — Low-dose BBR | 7 | HFD + oral BBR 100 mg/kg/d |
| BH — High-dose BBR | 5 (→4)* | HFD + oral BBR 200 mg/kg/d |
| A — Antibiotics | 5 | HFD + terramycin 300 mg/kg/d + erythromycin 300 mg/kg/d + cefadroxil 100 mg/kg/d |
| AB — Antibiotics + BBR | 5 | HFD + same antibiotics + BBR 200 mg/kg/d |

*One BH animal died during the study for unrelated reasons; n=4 used for statistics in that group.

**Primary endpoints measured at sacrifice (3 months):** Aortic-arch Oil Red O staining, IMT_max by ultrasonic imaging, 16S rDNA gene copies in feces, TMA/TMAO in feces and plasma by LC-MS/MS, blood glucose and lipid panel (FBG, TG, TC, LDL-C).

### Layer 2 — Acute TMA/TMAO kinetics (separate hamster cohort)

A second set of HFD-fed hamsters was used to track fecal and plasma TMA/TMAO over 24 h after a single oral dose of BBR 100 mg/kg (n=6 per time point). This is the source of the fecal 98%/69% TMAO reductions reported in the abstract and Figure 1b.

### Layer 3 — In-vitro microbial / enzyme mechanistic studies

- Rat intestinal microbiota cultures (from HFD-fed SD rats) incubated with BBR/dhBBR at 0.03–0.3 mM; TMA measured by LC-MS/MS
- 15 intestinal bacterial strains tested for TMA/TMAO response to BBR/dhBBR
- *E. coli* transformed with pET28a-*cutD* plasmid to heterologously express CutC/CutD system
- *E. coli* transformed with pET28a-*fmo* to express bacterial FMO
- Liver homogenate as source of hepatic FMO3 for direct inhibition assays
- CDOCKER virtual docking (Discovery Studio) for dhBBR interactions with CutC and bacterial FMO

### Layer 4 — Fecal microbiota transplant (FMT) confirmation

Feces from HFD-fed and HFD+BBR-treated hamsters isolated; transplanted into recipient HFD-fed hamsters. TMA/TMAO in plasma and feces compared between FT-HFD and FT-HFD+BBR groups, confirming that the TMAO-reducing effect is transferable via gut microbiota.

### Layer 5 — Open-label human clinical arm

**Registry:** China Clinical Trial Registry ChiCTR-OPN-17012942; conducted at the Outpatient Section of the First Hospital of Jilin University, Changchun; enrolled early 2017.

**Design:** Non-randomized, open-label, two-group observational study. NOT a randomized controlled trial.

**Group 1 (reference):** 16 individuals with TC, TG, LDL-C, and FBG in the normal range (age 55.6 ± 8.8; 10 males, 2 females). No intervention — served as TMAO reference only (Supplementary Table S7).

**Group 2 (BBR arm):** 21 patients with atherosclerosis and hyperlipidemia (age 63.7 ± 5.2; 12 males, 9 females) not undergoing any hypolipidemic treatment before enrollment. Received oral BBR 0.5 g bid (1 gram per day) for 4 months. Serum and fecal samples collected before and after treatment.

**Group 3 (statin reference):** 12 additional AS patients treated with rosuvastatin plus aspirin, or clopidogrel sulfate or ticagrelor for 4 months (n=12) — enrolled in parallel as a positive drug reference. Not randomized against Group 2.

**Clinical endpoints (Group 2, BBR arm):** Doppler ultrasound quantification of carotid plaques at 12 positions (bilateral common carotid artery, carotid bifurcation, internal carotid, external carotid, vertebral artery intervertebral space, subclavian artery); plaque score = sum of plaque thicknesses (mm); IMT_max; carotid plaque length; baPWV; fasting blood glucose and lipid panel; TMA/TMAO in plasma and feces by LC-MS/MS; 16S rRNA gut microbiota composition.

## Key results

### In-vivo TMA/TMAO reduction (hamster)

**Single-dose kinetics (oral BBR 100 mg/kg, Figure 1b):**

| Measure | 6 h | 12 h | 24 h |
|---|---|---|---|
| TMA in feces | −28% (**p<0.01) | −32% (***p<0.001) | −54% (***p<0.001) |
| TMAO in feces | −98% (***p<0.001) | −89% (***p<0.001) | −69% (***p<0.001) |
| TMA in plasma | −57% (***p<0.001) | −53% (***p<0.001) | −37% (*p<0.05) |
| TMAO in plasma | −64% (***p<0.001) | −58% (***p<0.001) | −61% (***p<0.001) |

All data expressed as mean ± SD, n=6, two-tailed Student's t test vs saline control.

**FMT confirmation:** After fecal transplant of BBR-treated microbiota into HFD-fed recipients, TMA and TMAO in plasma and feces were significantly reduced vs FT-HFD controls (Supplementary Fig. S2b–e). This confirms the effect is microbiota-mediated and transferable.

### Atherosclerotic plaque (hamster, 3-month treatment)

**IMT_max (Figure 5b):** The maximum intima-media thickness of the aortic arch after 3-month treatment:

| Group | IMT_max change vs Group H |
|---|---|
| Group BL (BBR 100 mg/kg) | −22% (*p<0.05) |
| Group BH (BBR 200 mg/kg) | −29% (**p<0.01) |
| Group A (antibiotics) | not significant |
| Group AB (antibiotics + BBR) | not significant |

Histological Oil Red O staining (Figure 5a) confirmed significantly reduced lipid-rich plaque in Groups BL and BH vs Group H. Antibiotics-treated groups showed reduced bacterial colonization (−54% 16S rDNA copies, Figure 5c) but did NOT significantly suppress IMT_max — indicating the anti-plaque effect of BBR requires viable gut microbiota-derived dhBBR metabolism, not merely bacterial reduction per se.

**TMA/TMAO at 2 months (Figures 5d, 5e):**

- TMA in feces: −46% (BL), −68% (BH) (***p<0.001)
- TMAO in feces: −46% (BL), −69% (BH) (***p<0.001)
- TMA in plasma: −57% (BL), −67% (BH) (**p<0.01, ***p<0.001)
- TMAO in plasma: −47% (BL), −52% (BH) (**p<0.01, ***p<0.001)

**Blood lipids (Figure 5f):** FBG, TG, TC, and LDL-C were significantly lowered by oral BBR for 2 months (p<0.05 to p<0.001 vs Group H), confirming the systemic metabolic effect of BBR observed in prior clinical work.

### Mechanism: CutC inhibition by dhBBR

BBR is reduced to dihydroberberine (dhBBR) by bacterial **nitroreductase (NR)** in the gut. dhBBR inhibits **CutC** (choline-TMA lyase), the key enzyme cleaving choline into TMA. Key evidence:

- dhBBR (0.03 mM) inhibited TMA production in rat intestinal microbiota by −33% to −50% vs BBR −24% to −37% (Figure 1c), confirming dhBBR is more potent
- DMB (3,3-dimethyl-1-butanol), a known non-lethal competitive inhibitor of CutC, at 0.1 mM produced effects comparable to low-dose dhBBR (0.06 mM, Figure 1c)
- CutC-expressing *E. coli* (pET28a-*cutD*) showed 50% reduction in TMA in the reaction system after dhBBR treatment (Figure 1f), demonstrating direct CutC inhibition
- CDOCKER docking energy for dhBBR with CutC: −22.10 kJ/mol; for BBR: −38.12 kJ/mol and −18.43 kJ/mol (two binding poses), indicating strong interaction between dhBBR and CutC active site (Figure 2)
- The carnitine coenzyme A transferase (CCAT) pathway to TMA was unaffected (Figure 1d shows choline addition elevates TMA but carnitine does not; dhBBR inhibits CutC, not CCAT)

### Mechanism: Bacterial FMO inhibition by dhBBR

Several gut bacteria express flavin-containing monooxygenase (FMO)-like enzymes that oxidize TMA to TMAO in the intestine (distinct from hepatic FMO3):

- Four of 15 bacterial strains (*P. mirabilis*, *Pseudomonas aeruginosa*, *Peptostreptococcus anaerobius*, *Enterobacter aerogenes*) were positive for TMAO production (Figure 4b)
- dhBBR (0.06 mM) inhibited TMAO generation from the FMO-expressing *E. coli* reaction system by 67% (**p<0.05, Figure 4e)
- dhBBR showed better CDOCKER docking with bacterial FMO (binding free energy −41.8 kJ/mol) vs BBR (−9.45 kJ/mol), indicating high affinity (Figure 3)

**Critical distinction:** Hepatic FMO3 (the canonical TMAO-producing enzyme in liver, reference Wang 2011 and Tang 2013) was NOT significantly changed by BBR or antibiotics in liver homogenate assays (Figure 5, Supplementary Fig. S8c). The primary mechanism of BBR's TMAO-lowering effect is gut-bacterial enzyme inhibition, not hepatic FMO3 modulation.

### Pharmacokinetics: the "vitamin-like" framing

Oral bioavailability of BBR is ~1% (authors cite refs 34–35, including Ma JY et al. *J Pharm. Sci.* 2013 and Liu YT et al. *Drug Metab. Dispos.* 2010). In the gut lumen, bacterial NR reduces BBR to dhBBR, which is the active inhibitor. dhBBR itself is almost undetectable in blood and organs.

IP injection of BBR (20 mg/kg) produced higher systemic blood BBR levels but did NOT reduce TMA or TMAO in feces at 24 h (Supplementary Fig. S1d–e) — confirming the TMAO-lowering effect requires gut-luminal presence, not systemic exposure. This is the mechanistic basis of the "vitamin-like" analogy: like a B-vitamin that functions as a cofactor in enzyme reactions, BBR functions as a substrate for bacterial NR to produce dhBBR, which then cofactor-inhibits CutC and FMO in the gut microbiota.

### Gut microbial composition changes (hamster)

Oral BBR adjusted gut microbiota abundance toward normal-control levels. Among the top 50 genera that changed most (Supplementary Fig. S8d–e), 13 showed a significant decrease after oral BBR:

- Decreased: *Eubacterium_coprostanoligenes*, *Treponema_2*, *Ruminococcaceae_UCG-002*, *Prevotellaceae_UDG-001*, *Flavobacterium*, *Candidatus_Saccharimonas*, *Empedobacter*, *Corynebacterium_1*, *Jeotgalicoccus*, *Myroides*, *Kurthia*, *Acinetobacter*, *Ruminococcus_2*
- **Increased** (probiotics): ***[[akkermansia-muciniphila|Akkermansia]]*** and ***Allobaculum*** — both known producers of short-chain fatty acids (SCFAs), marked in red in Supplementary Fig. S8e

The increase in [[akkermansia-muciniphila|Akkermansia]] after BBR treatment is consistent with prior reports of BBR-mediated Akkermansia enrichment in mouse models [^zhu2018]. The decrease in TMA-producing taxa (*Eubacterium*, *Ruminococcus* genera) would reduce substrate flux through the choline-TMA axis independent of enzyme inhibition.

### Human arm results (n=21 AS patients, 4 months oral BBR 1 g/day)

**Plaque score (Figure 6b, Table 1):**

- BBR group: mean plaque score decreased from 6.57 → 6.36 mm, a **−3.2% reduction** (*p<0.05, one-tailed paired t-test, n=21)
- 12/21 patients (57%) had plaque score reduced; 3 showed no change; 6 showed increased plaque score
- Statin reference group (n=12): mean plaque score increased from 8.98 → 9.14 mm (+1.9%)

**Carotid IMT (Figure 6c):**

- BBR group: mean IMT decreased 3.2%, from 2.81 → 2.72 mm (P=0.067 — **not statistically significant**)
- Statin reference: IMT slightly increased (+2.0%)

The abstract states "the average decrease of plaque score by 3.2% after oral BBR (0.5 g, bid) for 4 months (*P < 0.05, n = 21)" — this refers specifically to the plaque score (sum of thicknesses), not carotid IMT. The IMT trend (−3.2%) was directionally consistent but did not reach significance at p<0.05. The user-facing YouTube transcript that frames this as "carotid IMT before/after" conflates these two measurements; the significant primary endpoint was plaque score, not IMT.

**Carotid plaque length (Figure 6d):**

- BBR group: −2.2% (ns)
- Statin reference: −2.2% (ns)

**baPWV:** Minor decline (−1.2% to −2.0%), not significant.

**TMA/TMAO (Figure 6e, n=21 BBR / n=20 for feces):**

| Measure | Change after 4 months BBR | p |
|---|---|---|
| TMA in plasma | −37% | ***p<0.001 |
| TMAO in plasma | −35% | *p<0.05 |
| TMA in feces | −38% | *p<0.05 |
| TMAO in feces | −29% | *p<0.05 |

**Gut microbiota (human, 16S rRNA):** 11 of the top 50 genera that changed most showed decrease in abundance; these included *Eubacterium_hallii_group*, *Anaerostipes*, *Faecalibacterium*, *Dialister*, *Eubacterium_coprostanoligenes_group*, *Coprococcus_3*, *Butyricicoccus*, and *Clostridium_sensu_stricto_1* — taxa with potential to generate TMA. Notably, *Eubacterium_coprostanoligenes_group* was decreased 63% (**p<0.01), *Eubacterium_hallii_group* by 69% (*p<0.05), *Dialister* by 75% (**p<0.01), *Clostridium_sensu_stricto_1* by 75% (**p<0.01), *Faecalibacterium* by 48% (*p<0.05), *Butyricicoccus* by 50% (**p<0.01).

**Blood lipids (human, 4 months):** TC (mmol/L): 5.70 ± 1.04 → 5.24 ± 0.83 (**p<0.01); TG (mmol/L): 3.65 ± 4.55 → 2.73 ± 4.00 (*p<0.05); LDL-C (mmol/L): 3.11 ± 0.85 → 2.99 ± 0.75 (*p<0.05); FBG (mmol/L): 6.79 ± 2.29 → 6.39 ± 2.39 (*p<0.05).

**Safety:** All participants in the BBR group showed good tolerance and safety throughout the 4-month course. No adverse events reported in the paper.

## Proposed mechanism — integrated pathway diagram

The full pathway, as elucidated by this paper (Figure 7):

```
Dietary choline (from phosphatidylcholine)
        ↓ [Gut lumen]
    Choline-TMA lyase (CutC/CutD)   ← dhBBR INHIBITS (CutC active site)
        ↓
       TMA (trimethylamine)
        ↓ [Transported to liver]
   Hepatic FMO3  ← NOT targeted by BBR (liver homogenate confirmed no change)
        ↓
      TMAO (trimethylamine-N-oxide) → atherogenic: foam cell ↑, platelet reactivity ↑,
                                       cholesterol reverse transport ↓, NLRP3 inflammasome ↑

[Parallel gut pathway]
       TMA → Bacterial FMO (gut) → TMAO   ← dhBBR INHIBITS bacterial FMO

[BBR conversion in gut]
  BBR (oral, ~1% bioavailable) → [Bacterial nitroreductase (NR)] → dhBBR (active inhibitor)
  dhBBR: active in gut lumen; almost undetectable in blood/organs
```

This "vitamin-like" mechanism — where the parent compound (BBR) is biotransformed in the gut to an active cofactor (dhBBR) that modulates enzyme activity without entering systemic circulation — is mechanistically analogous to how dietary B-vitamins function as coenzyme precursors.

Cross-links: [[dysbiosis]] (altered gut microbial composition driving atherogenic metabolites), [[chronic-inflammation]] (TMAO-driven NLRP3 inflammasome and foam cell formation), [[akkermansia-muciniphila]] (probiotic enriched by BBR), [[microbiome/gut-microbiome-aging-shifts]] (age-related dysbiosis context), [[berberine]] (compound page), [[atherosclerosis]] (phenotype page).

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Choline-TMA-TMAO axis established in humans (Wang 2011, Tang 2013); CutC/CutD present in human gut flora |
| Phenotype conserved in humans? | partial | HFD hamster model has similar lipoprotein profile and aortic morphology to humans; lesion kinetics differ (weeks vs decades) |
| Replicated in humans? | in-progress | Open-label n=21 arm shows plaque score −3.2% and plasma TMAO −35%; carotid IMT trend (−3.2%) did not reach significance (p=0.067); no randomized human trial as of 2026 |

## Limitations and gaps

- **Human arm is not a randomized controlled trial.** The clinical study is open-label, non-randomized, and small (n=21). The statin group is a parallel reference, not a randomized comparator. Effect sizes and the direction of plaque change should be treated as preliminary signals. #gap/needs-replication #gap/long-term-unknown
- **Carotid IMT reduction did not reach significance** (p=0.067). The abstract's 3.2% improvement refers to the plaque score (sum of thicknesses), not IMT itself. These are distinct measurements. #gap/needs-replication
- **Plaque score endpoint is non-standard.** The sum-of-thicknesses plaque score is a composite measurement across 12 carotid positions; it is less commonly used in cardiovascular trials than CIMT or coronary artery calcium score, limiting comparison to other intervention trials.
- **Hepatic FMO3 pathway:** The paper explicitly shows BBR does NOT inhibit hepatic FMO3. The TMAO-lowering mechanism is gut-microbiota dependent. If gut flora is disrupted (e.g., by concomitant antibiotic use), BBR's anti-TMAO effect should be attenuated — an important drug-interaction implication not discussed in the paper.
- **Concurrent lipid-lowering effects:** BBR also lowered TC, TG, LDL-C, and FBG. Plaque score improvements may be partly attributable to lipid-lowering independent of TMAO-axis modulation. The mechanistic pathway cannot be fully disaggregated from the human clinical data alone.
- **Mouse-to-human gut microbiota differences:** Hamster gut microbiota composition differs from humans. Species that respond to dhBBR (e.g., *P. mirabilis*, *S. boydii*, *B. fragilis*) may have different prevalence in human gut. #gap/needs-human-replication
- **No large RCT for atherosclerosis endpoints:** As of 2026, no Phase 2/3 RCT has used atherosclerosis progression or MACE as the primary endpoint for berberine via the TMAO mechanism. The mechanistic and small-human data support such a trial. #gap/needs-replication
- **Duration:** 4 months in patients and 3 months in hamsters. Atherosclerosis is a decades-long process; long-term safety and durability of effect are unknown. #gap/long-term-unknown

## Cited by (from this wiki)

[Auto-populated by Obsidian backlinks panel]

## Footnotes

[^zhu2018]: doi:10.1016/j.atherosclerosis.2017.12.006 · Zhu L et al. · *Atherosclerosis* 2018;268:117–126 · in-vivo · model: ApoE^-/-^ mus-musculus · Berberine increases Akkermansia in gut and improves high-fat diet-induced atherosclerosis in Apoe^-/-^ mice; cited in Ma 2022 as ref 33; #gap/needs-replication — not independently verified from local PDF in this study page
