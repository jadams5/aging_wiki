---
type: compound
aliases: [Akkermansia muciniphila supplementation, pasteurized AKK, AKK probiotic, AKK postbiotic, WBP-01]
pubchem-cid: null
chembl-id: null
drugbank-id: null
biologic: true
who-inn: null
molecular-formula: null
molecular-weight-da: null
mechanisms: [gut-microbiome-modulation, anti-inflammatory]
targets: ["[[tlr2]]", "[[gut-barrier]]"]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
clinical-stage: supplement
human-evidence-level: limited
translation-gap: phase-2-rct-needed-aged-cohort
next-experiment: "12-week double-blind RCT of pasteurized AKK (10^10 cells/day) in adults aged 65+ with frailty pre-phenotype, measuring gut permeability (lactulose-mannitol ratio), plasma LPS, HOMA-IR, and frailty index as co-primary endpoints; n>=120."
clinical-trials-active: 14
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Depommier 2019 (Nat Med), Kang 2024 (Nutrients), Everard 2013 (PNAS), and Forslund 2015 (Nature) primary-source PDFs verified end-to-end. Plovier 2017 (Nat Med) is not_oa — framing verified via abstract only; #gap/no-fulltext-access retained for Plovier-derived mechanistic claims. Corrections applied: (1) Depommier exclusion count 7→8; (2) body weight p-value 0.09→0.091; (3) fat mass p-value 0.09→0.092; (4) Kang 2024 myostatin result clarified — myostatin not significantly changed, only follistatin increased; (5) Kang 2024 total extensor significant results added; (6) Everard 2013 dose corrected 1.5×10^8→2×10^8; (7) Forslund 2015 AKK-metformin association qualified — trend in MHD cohort only, inconsistent across country subsets."
---


# Akkermansia muciniphila supplementation

**This page covers oral supplementation with *Akkermansia muciniphila*** as a defined-strain biologic therapeutic — the *intervention and product* layer. For the organism's biology, taxonomy, niche, and preclinical mechanism, see [[akkermansia-muciniphila]]. The distinction matters: this page asks "what happens when humans take AKK as a supplement?" not "what is AKK?".

*Akkermansia muciniphila* supplementation is the oral administration of viable (live) or heat-inactivated (pasteurized) *A. muciniphila* cells, typically the MucT type strain (ATCC BAA-835) or close derivatives, at doses of ~10^10 cells/day. It is a **defined-strain biologic** — not a generic probiotic mixture — and is pharmacologically distinct from other probiotic products in that its mechanism is partly host-directed (via the outer-membrane protein Amuc_1100 engaging [[tlr2]] on intestinal epithelial cells) rather than dependent on engraftment or microbiome remodeling. The **pasteurized form is at least as effective as live bacteria** across both preclinical and clinical data, which classifies it functionally as a **postbiotic** (see [[postbiotics]]). Commercial availability as a dietary supplement began ~2020 (Pendulum Therapeutics, USA). Its regulatory status is supplement, not pharmaceutical; no FDA drug approval exists as of 2026-05-07.

## Identity

| Field | Value |
|---|---|
| Organism | *Akkermansia muciniphila* Derrien et al. 2004 |
| Canonical strain | MucT = ATCC BAA-835 = CIP 107961T = DSM 22959T |
| Active fractions | Whole cells (live or pasteurized); Amuc_1100 outer-membrane protein (preclinical only) |
| Typical human dose | 10^10 cells/day (live or pasteurized) — established empirically in Depommier 2019 |
| Route | Oral capsule |
| PubChem CID | null (whole organism; no CID assigned) #gap/needs-canonical-id |
| ChEMBL ID | null (biologics tracked sporadically; no confirmed entry for this strain) #gap/needs-canonical-id |
| DrugBank ID | null |
| WHO-INN | null (no INN assigned) |
| Regulatory status | Dietary supplement (USA, 2020+); no FDA drug approval |
| Commercial product | Pendulum Therapeutics "Akkermansia" capsule (~10^10 cells, pasteurized); "Pendulum Glucose Control" (multi-strain product containing AKK) |

> Note: PubChem does not assign CIDs to whole-organism biologics. ChEMBL indexes some biologics but does not have a confirmed entry for the MucT strain supplement as of 2026-05-07. These fields are left null per CLAUDE.md biologic compound schema; a canonical identifier should be sought if the product receives an IND or regulatory submission.

## Mechanism of action

AKK supplementation acts through three partially independent axes:

### 1. Amuc_1100 / TLR2 axis (primary host-directed mechanism)

The outer-membrane protein **Amuc_1100** is the best-characterized active component. It engages **TLR2** (Toll-like receptor 2) on intestinal epithelial cells, triggering downstream signaling that reinforces tight junction protein expression (ZO-1, claudin-3). This strengthens the gut barrier, reducing paracellular permeability and the translocation of gut-derived lipopolysaccharide (LPS) into systemic circulation [^plovier2017].

Key mechanistic evidence:
- Amuc_1100 is heat-stable at 70°C but inactivated at 95°C, explaining why **pasteurized AKK (70°C, 30 min) retains activity while autoclaved bacteria do not** [^plovier2017].
- TLR2 (not TLR4) engagement is critical — TLR4 recognizes LPS and drives pro-inflammatory NF-κB signaling; TLR2 via Amuc_1100 drives barrier reinforcement without equivalent inflammatory activation.
- This is exclusively a mouse-model characterization. Human enterocyte TLR2/Amuc_1100 interaction is inferred by conservation; it has not been directly measured in human intestinal tissue. #gap/needs-human-replication

### 2. LPS translocation reduction (barrier-mediated systemic effect)

Gut barrier reinforcement → reduced paracellular LPS leak → lower systemic endotoxemia (metabolic endotoxemia) → reduced downstream TLR4-driven NF-κB activation in liver and adipose tissue → improved insulin sensitivity and reduced systemic inflammation. This is the mechanistic chain linking AKK to systemic metabolic outcomes [^everard2013]. Confirmed in Depommier 2019 by significant reduction in plasma LPS in the pasteurized-AKK group vs placebo [^depommier2019].

### 3. SCFA cross-feeding (indirect metabolic effect)

AKK degrades host mucin to propionate and acetate, which can be utilized by neighboring commensal bacteria (cross-feeding). These SCFAs enter the host [[scfa-signaling]] network, with effects on hepatic gluconeogenesis, GPR41/GPR43 satiety signaling, and epigenetic regulation (HDAC inhibition). The quantitative contribution of AKK-derived SCFAs to systemic SCFA pools is likely small relative to dietary fiber fermenters; this mechanism is secondary [^everard2013]. #gap/no-mechanism — the in vivo contribution of AKK-specific SCFA production to clinical outcomes has not been isolated.

## Human clinical evidence

### Depommier 2019 — proof-of-concept RCT (the anchor study)

The foundational human trial [^depommier2019]:

**Design:** Randomized, double-blind, placebo-controlled, 3-arm proof-of-concept study. Screening: 160 subjects. Eligible (signed informed consent): 45; 5 declined to participate → Enrolled: **n=40** (placebo n=13, pasteurized n=13, live n=14 allocated). Completers analyzed: **n=32** (placebo n=11, pasteurized AKK n=12, live AKK n=9). Eight subjects were excluded: 7 withdrew before completion (1 placebo antibiotic use; 1 pasteurized personal reasons; 5 alive [3 personal reasons, 2 antibiotic use]) plus 1 additional placebo subject excluded from analysis for protocol violation. Duration: 3 months. Dose: 10^10 cells/day (live or pasteurized capsule). Population: overweight/obese adults with metabolic syndrome by NCEP ATP III (BMI >25 kg/m², HOMA insulin sensitivity <75%, HbA1c ≤7.5%), aged 18–70 yr. Single center (Brussels, Belgium).

**Key results (pasteurized AKK vs placebo):**

| Outcome | Effect | P value |
|---|---|---|
| Insulin sensitivity index (HOMA) | +28.62 ± 7.02% | P=0.002 |
| Insulinemia | −34.08 ± 7.12% | P=0.006 |
| Total plasma cholesterol | −8.68 ± 2.38% | P=0.02 |
| Plasma LPS (endotoxemia) | Significantly reduced vs baseline and vs placebo | P not stated in text (see Fig. 3d) |
| Hepatic gamma-GT | ~−24% | P=0.009 |
| Body weight | −2.27 ± 0.92 kg | P=0.091 (ns) |
| Fat mass | −1.37 ± 0.82 kg | P=0.092 (ns) |
| Gut microbiome composition | Not significantly changed (PERMANOVA R²=0.075, P=0.18) | ns |

Live AKK improved HOMA insulin resistance (P<0.05) but showed less pronounced effects on the insulin sensitivity index than pasteurized AKK.

**Safety:** No serious adverse events in either AKK group. Pasteurized AKK was well tolerated. No bacteremia or serious GI adverse events.

**Interpretation:** Proof-of-concept. Small n, single center, not powered for definitive efficacy; anthropometric endpoints (weight, fat mass) were underpowered. The gut microbiome composition was not altered, supporting the conclusion that effects are postbiotic (host-directed via Amuc_1100) rather than due to microbiome community restructuring. **This study population was metabolically diseased adults, not elderly or frail — aging-specific efficacy remains undemonstrated.** #gap/needs-replication #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TLR2/tight-junction/metabolic axis confirmed operating in human gut |
| Phenotype conserved in humans? | yes (metabolic parameters) — insulin sensitivity, cholesterol, LPS responsive |
| Replicated in humans? | partial — Kang 2024 in 60+ yr adults (see below); no independent Depommier replication |

### Kang 2024 — RCT in older adults (aging-specific evidence)

The most aging-relevant human trial published to date [^kang2024]:

**Design:** Randomized, double-blind, placebo-controlled, 12-week trial. n=100 adults aged 60+. Intervention: pasteurized *A. muciniphila* HB05 (HB05P) at 1.0 × 10^10 cells/day vs placebo capsule.

**Key results (per-protocol set: HB05P n=47, placebo n=45):**
- Significant improvement in peak torque of the left leg extensor muscles in the HB05P group vs placebo (P=0.0103); total (both legs) extensor peak torque also significantly improved (P=0.049).
- Significant improvement in peak torque per body weight (TQ/BW) of the left leg extensors (P=0.0052) and total extensors (P=0.0346) in HB05P vs placebo.
- Elevated serum follistatin levels in HB05P group vs placebo (P=0.0063). **Myostatin levels were not significantly different between groups (P=0.3145)** — the paper does not report a follistatin/myostatin ratio; only follistatin increased.
- Grip strength: no significant between-group differences.
- No significant safety concerns (4 adverse events total across 100 subjects; none attributed to study product).

**Interpretation:** This is the first RCT with AKK in adults aged 60+. The muscle-strength endpoint is aging-relevant (sarcopenia prevention). However, this uses a different strain (HB05, not MucT/ATCC BAA-835), and muscle strength was a pre-specified endpoint for this trial (not a secondary afterthought); the metabolic endpoints from Depommier 2019 were not measured or replicated in this cohort. Myostatin levels did not change significantly, so the proposed follistatin/myostatin balance as mechanism remains unresolved — only follistatin was elevated. The HB05 strain identity and potency relative to MucT require scrutiny. #gap/needs-replication — single trial; no independent replication; different strain from Depommier 2019. Note: 3 of 47 HB05P participants and 3 of 45 placebo participants were excluded from the per-protocol efficacy set for protocol deviations; the full safety set (n=100) showed no safety signals.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — muscle follistatin/myostatin signaling in humans |
| Phenotype conserved in humans? | in-progress — single aging-cohort trial |
| Replicated in humans? | no — first aging-cohort RCT; replication needed |

### Active clinical trial landscape (as of 2026-05-07)

ClinicalTrials.gov v2 API search for "Akkermansia muciniphila" with status RECRUITING or ACTIVE_NOT_RECRUITING returned **14 active trials** (as of 2026-05-07 re-check at verification):

| NCT | Title / Condition | Status |
|---|---|---|
| NCT06728098 | Safety and tolerability of heat-inactivated AKK in healthy volunteers | RECRUITING |
| NCT06974266 | AKM Lab-01 efficacy and safety in hypercholesterolemia | RECRUITING |
| NCT06989177 | Probiotic intervention on body weight (obesity, metabolic homeostasis) | RECRUITING |
| NCT05865730 | Oncobax-AK with immunotherapy in renal cell carcinoma / NSCLC | RECRUITING |
| NCT06873165 | Microbial therapeutics for metabolic-associated fatty liver disease (MASLD) | RECRUITING |
| NCT06548828 | Non-nutritive sweetener reduction in pregnancy/lactation (gestational diabetes) | RECRUITING |
| NCT06989203 | Protein supplementation on body weight | RECRUITING |
| NCT06865521 | Akkermansia probiotics plus anti-PD-1 in MSS/pMMR colorectal cancer | ACTIVE_NOT_RECRUITING |
| NCT07566884 | Safety and tolerance of novel three-strain probiotic in healthy adults | ACTIVE_NOT_RECRUITING |
| NCT07488975 | Microbial therapy for MASLD: mechanism to clinical validation | RECRUITING |
| NCT06242509 | Intestinal AKK in prostate cancer | RECRUITING |
| NCT07044310 | 5-strain probiotic formulation in HR+ breast cancer | RECRUITING |
| NCT07440147 | AKK and berberine supplementation on insulin resistance | RECRUITING |
| NCT07400367 | Probiotic supplementation with lifestyle modification | RECRUITING |

No trials specifically targeting aging, frailty, or longevity endpoints identified. All trials target metabolic/oncology/GI indications. This confirms the **translation gap**: the aging-specific trial has not been launched. #gap/long-term-unknown

## Aging relevance

AKK abundance **declines with aging** as part of the broader pattern of beneficial commensal loss that characterizes [[dysbiosis]]. The supplementation rationale is "restorative" — replenishing an organism that should be present but is depleted by age. Three specific aging-biology connections:

1. **Gut barrier → systemic inflammaging.** AKK depletion → increased gut permeability → LPS translocation → TLR4-driven NF-κB activation → [[chronic-inflammation]] (inflammaging). Inflammaging is the dominant systemic aging phenotype linking most integrative hallmarks.

2. **Metabolic health.** AKK depletion correlates with insulin resistance. Metabolic syndrome is an accelerant of biological aging across multiple hallmarks ([[deregulated-nutrient-sensing]], [[genomic-instability]], [[mitochondrial-dysfunction]]). Restoring AKK may slow this progression.

3. **Muscle health.** Kang 2024 RCT in adults 60+ suggests pasteurized AKK (strain HB05P) may support muscle strength, associated with elevated follistatin levels (P=0.0063); myostatin was not significantly changed (P=0.3145). The follistatin-mediated mechanism is proposed but mechanistically unexplored in this context. Relevant to [[sarcopenia]]. #gap/no-mechanism

**No aging-specific indication trial exists.** Honest framing: the translational evidence base is a proof-of-concept metabolic-disease RCT (Depommier 2019) and one muscle-focused older-adult RCT (Kang 2024). The aging-rejuvenation framing, while biologically motivated, is not yet supported by trial data in aged cohorts targeting lifespan or healthspan endpoints.

## Preclinical aging context

No lifespan extension study using AKK supplementation in model organisms has been published as of 2026-05-07. #gap/long-term-unknown — all preclinical work has used metabolic-disease endpoints (HFD reversal, insulin sensitivity, gut permeability) in young adult mice, not aging-oriented endpoints in aged animals. This is a major evidence gap for the aging-intervention framing.

For preclinical mechanism detail, see [[akkermansia-muciniphila]] § Mechanism — preclinical.

## Forms and formulations

| Form | Characteristics | Clinical use |
|---|---|---|
| **Live AKK** (~10^10 CFU/day) | Requires anaerobic manufacture; shorter shelf-life; viable engraftment possible; strictly anaerobic organism (survives GI transit in capsule) | Depommier 2019 (less effective than pasteurized) |
| **Pasteurized AKK** (heat-killed 70°C 30 min, ~10^10 cells/day) | Standard shelf-stable; Amuc_1100 intact; no live-cell concerns; OTC supplement-compatible manufacturing | Depommier 2019 (primary effective arm); Kang 2024 (HB05P); Pendulum Therapeutics commercial product |
| **Amuc_1100 protein (purified)** | The isolated outer-membrane protein; tested in mouse models only; comparable efficacy to pasteurized whole bacteria in Plovier 2017 | Preclinical only; no human data |

The equivalence of pasteurized to live form, and the identification of Amuc_1100 as a key active component, means AKK supplementation can be classified as a **postbiotic** — a preparation of inanimate microorganisms or their components that confers a health benefit [^plovier2017]. See [[postbiotics]] for broader context.

## Safety profile

Based on published human trials:
- **Well tolerated** in the Depommier 2019 RCT (n=32 completers, 3 months).
- **No serious adverse events** in either live or pasteurized arms.
- **Pasteurized form eliminates theoretical live-bacteremia risk** in immunocompromised individuals. The NCT06728098 safety trial in healthy volunteers is directly addressing tolerability.
- **No long-term safety data.** All trials are ≤12 weeks. Chronic (12+ months) safety in elderly or immunocompromised populations is unknown. #gap/long-term-unknown

Theoretical concern: live *A. muciniphila* bacteremia in severely immunocompromised patients. Pasteurized form mitigates this concern. Manufacturers and clinicians should exercise caution in severely immunosuppressed individuals. This concern has not been observed in clinical trials to date.

## Drug and lifestyle interactions

Several agents that enrich endogenous AKK abundance may reduce the need for supplementation or have additive effects:

- **[[metformin]]:** Associated with partial enrichment of AKK in the Danish (MHD) cohort of T2D patients vs metformin-untreated T2D; however the trend was inconsistent across country subsets (CHN and SWE cohorts did not show a similar response) and the causal direction is unresolved [^forslund2015]. The paper states the AKK signal was present "to some extent" and was not the primary finding. #gap/needs-replication
- **[[caloric-restriction]]:** Associated with AKK enrichment in multiple organisms; may share mechanisms with AKK supplementation for metabolic outcomes.
- **[[berberine]]:** Isoquinoline alkaloid that enriches AKK in HFD-fed hamsters and human atherosclerosis patients (n=21 open-label arm, BBR 1 g/day × 4 months; Ma 2022, doi:10.1038/s41392-022-01027-6). The AKK enrichment is downstream of gut-luminal CutC/FMO suppression (via bacterial NR-mediated conversion to dihydroberberine), not a direct berberine→AKK interaction. Berberine + AKK supplementation combinations are now being studied directly (NCT07440147, recruiting; see table above).
- **Other polyphenols:** EGCG, cranberry, grape/resveratrol — associated with AKK enrichment in preclinical or limited human data; mechanistically unsettled. #gap/unsourced

See [[akkermansia-muciniphila]] § Drug-microbe interactions for detail.

## Translation gap assessment

| Dimension | Current state |
|---|---|
| Preclinical evidence | Strong metabolic-disease reversal in HFD mouse models (Everard 2013: live AKK 2×10^8 cfu/day × 4 wk in C57BL/6J mice; Plovier 2017: pasteurized AKK and Amuc_1100 — not_oa); no aging/lifespan data |
| Human metabolic evidence | Proof-of-concept RCT in metabolic-disease adults (Depommier 2019, n=32 completers; not powered) |
| Human aging evidence | Single RCT in adults 60+ (Kang 2024, n=100; muscle endpoint only) |
| Aging-specific RCT | None as of 2026-05-07 |
| Frailty/longevity endpoint | No trial |
| Required next step | Phase 2 RCT in aged cohort (65+), frailty pre-phenotype, measuring gut permeability, LPS, HOMA-IR, frailty index; n>=120, 12–24 weeks |

`translation-gap: phase-2-rct-needed-aged-cohort`

## R16 intervention matrix checklist

- **Hallmarks linked:** [[dysbiosis]] (primary), [[chronic-inflammation]] (secondary). Both pages exist in `hallmarks/`.
- **Mechanism class:** `gut-microbiome-modulation` (canonical per `frameworks/intervention-classes.md` § gut microbiome modulator) and `anti-inflammatory` (secondary, via LPS-TLR4-NF-κB suppression). Both classes are in the class inventory. No new class needed.
- **Matrix row verification:** The `hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]` frontmatter will correctly populate the per-hallmark Dataview blocks in `frameworks/interventions-by-hallmark.md` for those two hallmarks. Filenames `dysbiosis.md` and `chronic-inflammation.md` confirmed to exist in `hallmarks/`.

## Gaps and limitations

- #gap/long-term-unknown — No human data beyond 12 weeks. No lifespan or healthspan endpoint in any human trial. Chronic safety in elderly unknown.
- #gap/needs-replication — Depommier 2019 proof-of-concept trial (n=32 completers, single center) has not been independently replicated with the same strain (MucT) and same design.
- #gap/needs-human-replication — All mechanistic evidence (Amuc_1100/TLR2 axis, tight-junction reinforcement, immune modulation) is from mouse models. Human mechanistic validation is absent.
- #gap/dose-response-unclear — 10^10 cells/day is an empirically chosen dose; dose-ranging studies in humans have not been conducted. Whether efficacy scales with dose, whether lower doses are active, and whether higher doses provide additional benefit are unknown.
- #gap/needs-canonical-id — PubChem CID and ChEMBL ID are null (whole-organism biologic; standard IDs not applicable). If an IND is filed for a pharmaceutical-grade AKK product, a DrugBank entry should be checked.
- **Strain heterogeneity:** Kang 2024 used strain HB05, not MucT/ATCC BAA-835. Whether different AKK strains are interchangeable for efficacy is untested. Comparative strain studies have not been conducted in humans.
- **No aging-specific RCT:** all trials to date have metabolic-disease or oncology primary endpoints. The aging-rejuvenation rationale is biologically plausible but not directly tested.

## See also

- [[akkermansia-muciniphila]] — organism biology: taxonomy, niche, preclinical mechanism, Depommier trial detail; verified
- [[dysbiosis]] — the hallmark of aging to which AKK is most central
- [[chronic-inflammation]] — downstream consequence of AKK depletion via gut barrier dysfunction
- [[gut-barrier]] — stub; the structural target of AKK's Amuc_1100 effect
- [[tlr2]] — stub; Amuc_1100 receptor on intestinal epithelial cells
- [[scfa-signaling]] — stub; AKK-derived propionate/acetate biology
- [[postbiotics]] — category stub; pasteurized AKK is the prototype postbiotic
- [[fmt]] — stub; parallel microbiome intervention modality
- [[prebiotics]] — stub; dietary approach to enriching AKK endogenously
- [[lps-tlr4-nfkb]] — stub; the parallel inflammatory axis that AKK reduces by lowering LPS translocation
- [[metformin]] — drug that enriches endogenous AKK; mechanistic overlap
- [[caloric-restriction]] — lifestyle intervention with AKK-enriching effect
- [[sarcopenia]] — phenotype that Kang 2024 muscle data is relevant to
- [[urolithin-a]] — parallel gut-microbiome-derived compound with aging-relevant effects

## Footnotes

[^depommier2019]: [[studies/depommier-2019-akk-human-rct]] · doi:10.1038/s41591-019-0495-2 · rct · n=40 enrolled / n=32 completed (placebo n=11, pasteurized n=12, live n=9) · 3-arm: placebo / live AKK / pasteurized AKK (10^10 cells/day × 3 months) · model: overweight/obese insulin-resistant adults with metabolic syndrome, aged 18–70 yr · Depommier C, Everard A, Druart C et al. · Nat Med 2019 · PDF locally available (; 2066 citations, FWCI 103)

[^plovier2017]: [[studies/plovier-2017-amuc1100-pasteurized-akk]] · doi:10.1038/nm.4236 · in-vivo · model: HFD-induced obese mice; pasteurized vs live AKK + isolated Amuc_1100 comparison · Plovier H, Everard A, Druart C et al. · Nat Med 2017 · #gap/no-fulltext-access (not_oa; Amuc_1100 mechanism claims on this page unverified against full PDF; 1988 citations, FWCI 68)

[^everard2013]: [[studies/everard-2013-akkermansia-hfd-mice]] · doi:10.1073/pnas.1219451110 · in-vivo · n=C57BL/6J mice (ob/ob and HFD models, n=10/group); 2×10^8 cfu/0.2 mL AKK/day by oral gavage × 4 weeks · Everard A, Belzer C, Geurts L et al. · PNAS 2013 · PDF locally available

[^kang2024]: [[studies/kang-2024-akk-hb05p-muscle-older-adults]] · doi:10.3390/nu16234037 · rct · n=100 randomized (50/group); PP set n=92 (HB05P n=47, placebo n=45) · 12-week double-blind placebo-controlled · intervention: pasteurized A. muciniphila HB05P 1×10^10 cells/day vs placebo · primary outcome: isokinetic muscle strength (peak torque and TQ/BW, left and total leg extensors) · Kang CH, Jung ES, Jung SJ et al. · Nutrients 2024 · PDF locally available (gold OA)

[^forslund2015]: [[studies/forslund-2015-metformin-microbiome]] · doi:10.1038/nature15766 · observational (cross-sectional cohort) · n=784 gut metagenomes across 3 country cohorts (CHN, SWE, MHD) · model: human T2D patients stratified by metformin treatment status · Forslund K et al. · Nature 2015 · PDF locally available
