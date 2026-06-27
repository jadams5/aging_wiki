---
type: study
doi: 10.1007/s11357-022-00542-2
pmid: 35325353
pmc: PMC9616988
title: "Senolytic treatment rescues blunted muscle hypertrophy in old mice"
authors: [Dungan CM, Figueiredo VC, Wen Y, VonLehmden GL, Zdunek CJ, Thomas NT, Mobley CB, Murach KA, Brightwell CR, Long DE, Fry CS, Kern PA, McCarthy JJ, Peterson CA]
year: 2022
journal: GeroScience
volume: 44
issue: 4
pages: 1925-1940
study-design: in-vivo
organism: multi   # aged mouse MOV + human biopsy IHC (two complementary datasets)
n-subjects: 18   # human arm: 18 subjects (10 men + 8 women, age 20–39 yr); mouse MOV time-course n=6–8/group; senolytic arm n=7–9/group; RNA-seq n=5/group
intervention: ["[[dasatinib]]", "[[quercetin]]"]
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: partial   # human biopsies provide SA-β-gal + p21 IHC evidence of exercise-induced senescence; mouse arm provides the senolytic intervention data
peer-reviewed: true
preregistered: false
key-findings: [exercise-induced-senescent-cells-in-muscle, age-amplified-senescent-cell-burden, blunted-hypertrophy-in-old-mice, dq-senolytic-rescues-hypertrophy, igf1-ddit4-mmp14-gene-changes]
local-pdf: null
literature-checked-through: 2026-06-26
verified: true
verified-date: 2026-06-26
verified-by: claude
verified-scope: "Full PDF (PMC9616988) read end-to-end. Corrected: human n=18 (10M+8F, age 20–39), mouse strain to C57BL/6J, mouse n per group (6–8/time-course, 7–9/senolytic arm, 5/RNA-seq), human biopsy timing confirmed ~14d post-exercise, Ddit4 direction → downregulated, Mmp14 direction → upregulated, fiber-type specificity clarified (type 2a enlarged in both ages under MOV; type 2x+2b rescue is D+Q-specific; no type 1 data reported). Added: mouse body weights (old 33.0±2.6g vs adult 29.8±1.8g), ~2000 DEGs, no hallmark SASP gene change detected, fiber-type distribution unchanged."
---

# Senolytic treatment rescues blunted muscle hypertrophy in old mice

## TL;DR

Dungan et al. (2022) show that a hypertrophic stimulus — resistance exercise in humans (n=18, 20–39 yr) or synergist-ablation mechanical overload (MOV) in male C57BL/6J mice — induces senescent cells in [[skeletal-muscle]], and that this senescent-cell burden is substantially amplified in old (23–24 month) compared to adult (5–6 month) mice. In old mice, the elevated senescent-cell load correlates with blunted whole-muscle growth and specifically with failure to enlarge type 2x+2b (glycolytic fast-twitch) fibers, while type 2a fiber hypertrophy is preserved in both age groups. A two-dose "hit-and-run" course of dasatinib + quercetin (D+Q, days 7 and 10 of 14-day MOV) cleared senescent cells and restored hypertrophic capacity — specifically rescuing type 2x+2b fiber CSA — in old mice, accompanied by downregulation of the mTORC1 inhibitor *Ddit4*/REDD1, upregulation of *Igf1*, and upregulation of ECM-remodeling genes (*Mmp14*, *Adamts1*). Notably, no hallmark SASP inflammatory gene changes were detected by RNA-seq. The study provides the first direct causal link between exercise-induced muscle senescence and impaired hypertrophy in aging, and positions senolytics as a potential adjunct strategy to improve anabolic responsiveness in old muscle.

## Background

Older adults mount a blunted anabolic response to resistance exercise — sometimes called "anabolic resistance" — resulting in less muscle hypertrophy per unit of training stimulus compared to younger counterparts. This contributes to progressive [[sarcopenia]] and loss of functional capacity. Cellular [[cellular-senescence|senescence]] had been documented in aged resting muscle, but whether exercise itself induces senescent cells, and whether those cells causally suppress hypertrophy, was untested. The prior senolytic literature had established that clearance of senescent cells from aged tissues improves multiple healthspan outcomes [^baker2011][^xu2018], but muscle hypertrophy had not been examined as an endpoint.

## Design

### Human arm — exercise-induced senescence in human muscle

- **Subjects:** n=18 de-identified healthy volunteers, 10 men and 8 women, age 20–39 years; non-diabetic, lean and obese; no chronic medical conditions; no medications interfering with muscle function (Supplementary Table 1)
- **Stimulus:** A single exhaustive session of whole-body resistance exercise (3 lower-body: squat, leg press, leg extension; 1 upper-body: lat pulldown; 3 sets × 8 reps + 4th set to failure at 70–80% 1RM with 90–120 s rest between sets)
- **Tissue sampling:** Vastus lateralis muscle biopsies at rest (pre-exercise) and approximately 14 days post-exercise
- **Endpoints:** SA-β-gal staining and p21 immunohistochemistry (IHC) as senescence markers; statistical test: paired t-test
- **Interpretation:** Senescent cells (SA-β-gal+ and p21+) are essentially absent in resting human muscle but emerge detectably approximately 14 days after a single resistance-exercise bout (p21 predominantly cytoplasmic in cells outside the muscle fiber, consistent with anti-apoptotic rather than nuclear/cell-cycle-arrest function)

### Mouse arm — aging amplifies overload-induced senescence and blunts hypertrophy

- **Subjects:** Adult (5–6 months) and old (23–24 months) male C57BL/6J mice from the Jackson Laboratory and the NIA, respectively; old mice significantly heavier than adult mice (33.0±2.6 g vs. 29.8±1.8 g, p<0.05)
- **n per group:** N=6–8/group for the MOV time-course arms (adult and old, sham and MOV at days 7 and 14)
- **Model:** Bilateral synergist-ablation mechanical overload (MOV) of the plantaris muscle — 1/4–1/3 of the soleus and gastrocnemius surgically excised under isoflurane anesthesia, forcing plantaris to bear the full workload; sham controls underwent skin incision without muscle removal [^gordon1967synablation]
- **Duration:** 14 days of overload; muscle collected at days 7 and 14
- **Endpoints:** Normalized plantaris muscle weight (mg/g body weight), mean fiber CSA and fiber type–specific CSA (type 2a and type 2x+2b by MyHC IHC; type 2x+2b are unstained/black in the IHC protocol used); SA-β-gal+ and p21+ cell counts at days 7 and 14; statistical test: two-way ANOVA with Holm-Šídák post-hoc

### Senolytic intervention arm

- **Compounds:** Dasatinib 5 mg/kg + quercetin 50 mg/kg (D+Q), oral gavage in 10% PEG 400 vehicle (100–150 µL per dose)
- **Timing:** "Hit-and-run" — two doses on days 7 and 10 of the 14-day MOV period (senescent cells cleared mid-overload without continuous exposure)
- **Subjects:** Old mice only (23–24 months); also sham-operated old mice (D+Q sham and vehicle sham controls)
- **n per group:** N=7–9/group across the four groups (old vehicle sham, old D+Q sham, old vehicle 14-day MOV, old D+Q 14-day MOV)
- **Endpoints:** Normalized plantaris weight, mean fiber CSA and type-specific CSA (2a, 2x+2b), SA-β-gal+ and p21+ cell counts, RNA-seq on n=5/group (vehicle vs. D+Q old MOV mice) targeting ~2,000 differentially expressed genes at FDR<0.05

## Key results

### Resistance exercise induces senescent cells in human and mouse skeletal muscle

In human muscle biopsies (n=18), SA-β-gal+ and p21+ senescent cells are essentially absent at rest but emerge detectably approximately 14 days following a single bout of resistance exercise (both increases significant by paired t-test). In the plantaris, sham (resting) adult and old mice show comparably negligible senescent cell abundance with no significant difference between ages. SA-β-gal+ and p21+ cells increase significantly in response to MOV in both adult and old mice at days 7 and 14. Old mice accumulate significantly more senescent cells than adult mice at day 14 of MOV for both markers (two-way ANOVA, age × time interaction significant).

### Old mice show blunted hypertrophy

Compared to adult (5–6 month) mice undergoing identical 14-day MOV:

- Old (23–24 month) mice exhibit significantly smaller normalized plantaris mass after MOV at both 7 and 14 days vs. adult controls (^significance vs. adult mice at given time point)
- **Both** adult and old mice show significantly larger type 2a fiber CSA after 7 and 14 days of MOV vs. age-matched sham controls — type 2a hypertrophy is **not selectively blunted** in old mice
- Fiber hypertrophy is selectively impaired in **glycolytic type 2x+2b fibers**: only adult mice (not old mice) show significantly larger type 2x+2b CSA at days 7 and 14 of MOV; old mice fail to enlarge type 2x+2b fibers above sham levels
- Type 1 fibers were not separately reported as a distinct outcome in this paper (the IHC protocol identified type 2a in green and type 2x+2b as unstained; type 1 was not independently quantified)
- This selective type 2x+2b blunting mirrors the predominant glycolytic fiber atrophy observed in human [[sarcopenia]]

### D+Q senolytic treatment restores hypertrophic capacity in old mice

Old mice receiving D+Q on days 7 and 10 of 14-day MOV showed, compared to vehicle-treated old controls (N=7–9/group):

- Significantly larger normalized plantaris mass after 14 days of MOV (Fig. 5a)
- Significantly larger mean fiber CSA (Fig. 5f)
- Type 2a fiber CSA: enlarged in both vehicle- and D+Q-MOV groups vs. sham — D+Q did **not** selectively rescue type 2a beyond what MOV alone produced (Fig. 5g)
- Type 2x+2b fiber CSA: significantly larger only in D+Q-MOV old mice vs. vehicle-MOV old mice — D+Q **selectively rescues** type 2x+2b fiber hypertrophy in old mice (Fig. 5h)
- Fiber-type distribution (% type 2a, % type 2x+2b): there was a glycolytic-to-oxidative shift with MOV regardless of treatment, but no effect of D+Q on fiber-type proportions (Fig. 5i, j)
- Significantly reduced senescent cell burden (SA-β-gal+, p21+; Fig. 4c, e)
- RNA-seq in vehicle vs. D+Q old MOV mice (n=5/group): ~2,000 differentially expressed genes (FDR<0.05); **no significant changes in hallmark SASP inflammatory genes** were detected
- Key DEGs and their directions in D+Q vs. vehicle:
  - *Igf1* — **upregulated** (pro-hypertrophy; IGF-1/PI3K/Akt/mTORC1 anabolic signaling axis)
  - *Ddit4* (*REDD1*) — **downregulated** (REDD1 inhibits mTORC1 via TSC1/2; its reduction in D+Q mice is consistent with restored mTORC1-mediated hypertrophy)
  - *Mmp14* — **upregulated** (membrane-type MMP14; ECM remodeling during muscle growth; M2 macrophage-secreted)
  - *Adamts1*, *Plau* — upregulated (ECM remodeling; ADAMTS1 promotes muscle stem cell activation; Plau/urokinase-type plasminogen activator required for skeletal muscle hypertrophy)
  - *Cryab* — downregulated (αB-crystallin; apoptosis inhibitor via Bax/caspase-3; involved in senescent cell anti-apoptotic pathways)
  - *Fmod* and *Dcn* — upregulated (myostatin-regulatory ECM genes)
- Most downregulated pathways by RNA-seq: TCA cycle and electron transport chain components
- Most upregulated pathways: ECM remodeling and collagen degradation

The D+Q hit-and-run protocol (two doses separated by 3 days mid-overload) is consistent with the pharmacological principle that senolytics need not be continuously present — senescent cells once killed do not regenerate immediately, so brief high-dose exposure is sufficient [^yousefzadeh2018].

## Proposed mechanism

```
Resistance exercise / mechanical overload
    ↓
DNA damage, stress signaling → p21 / p16 upregulation → senescent cells in muscle
    ↓
In YOUNG/ADULT: senescent cells transient; efficient clearance; limited accumulation
In OLD: impaired immune surveillance → senescent cells persist and accumulate
    ↓
Elevated SASP in aged overloaded muscle
    → suppresses [[satellite-cells|satellite cell]] activation / proliferation?
    → impairs [[igf-1|IGF-1]] / mTORC1 anabolic signaling?
    → glycolytic fiber hypertrophy specifically blunted
    ↓
D+Q mid-overload → selective senescent-cell clearance
    ↓
Restored Igf1 expression, reduced Ddit4-mediated mTORC1 braking, Mmp14 remodeling
    → larger fibers, heavier muscle after 14d overload in old mice
```

The paper found **no significant changes in hallmark SASP inflammatory genes** between D+Q and vehicle groups despite senescent cell clearance, which the authors note may reflect masking by the robust inflammatory response to MOV. The gene expression data suggest the mechanism involves: (1) reduced mTORC1 braking via Ddit4/REDD1 downregulation; (2) enhanced ECM remodeling via Mmp14 and ADAMTS family members (the authors note D+Q may act partly through M2 macrophages, which are the primary source of Mmp14 mRNA in plantaris post-MOV, rather than purely by senescent-cell killing); (3) restored IGF-1/PI3K/Akt anabolic signaling. Whether [[satellite-cells|satellite cell]] biology (activation, self-renewal, differentiation) is the proximate target is not directly demonstrated in this paper. #gap/no-mechanism — the specific upstream SASP factor (or macrophage-mediated mechanism) driving type 2x+2b suppression is not resolved.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Senescence biology, IGF-1/mTORC1 anabolic signaling, and MMP14 ECM remodeling are all conserved in human muscle |
| Phenotype conserved in humans? | partial | Human biopsies confirm exercise-induced senescent cell emergence (SA-β-gal+, p21+); the causal link to impaired hypertrophy and the rescue by senolytics is demonstrated only in mice |
| Replicated in humans? | no | No human RCT of D+Q on muscle hypertrophy response to resistance training is reported in this paper. #gap/needs-human-replication |

The human biopsy arm is an important partial bridge — it validates that the senescent-cell induction phenomenon is conserved, even though the causal intervention is murine only.

## Significance for aging interventions

This paper directly motivates a clinical question: **could periodic D+Q or another senolytic regimen improve anabolic responsiveness to resistance training in older adults?** Key implications:

1. **Timing of senolytics matters.** The hit-and-run dosing was administered *mid-overload* (days 7 + 10 of 14), not prophylactically. The temporal relationship between the hypertrophic stimulus, peak senescent-cell burden, and the clearance window is mechanistically important — the paper implies an optimal intervention window around peak senescence accumulation.

2. **Complement to resistance exercise, not a substitute.** Senolytics did not cause hypertrophy in unloaded old mice; the MOV stimulus was required. The intervention enhanced the adaptive response to mechanical loading, not replace it.

3. **Fiber-type selectivity.** If the hypertrophy rescue preferentially affects glycolytic (type 2x/2b) fibers, this is directly relevant to [[sarcopenia]], which disproportionately involves fast-twitch fiber loss and reduced power production.

Cross-reference: [[interventions/pharmacological/senolytics]] § Muscle and satellite cell effects; [[satellite-cells]] § Senescent-cell suppression of myogenesis; [[dasatinib]] and [[quercetin]] for pharmacology and safety data.

## Limitations

- **Mouse synergist ablation is a supraphysiological model.** MOV via synergist ablation produces faster, larger hypertrophy than any human resistance training stimulus. Whether the senescent-cell burden and its functional consequences scale proportionally to normal training is unknown. #gap/needs-human-replication
- **Old mouse at 23–24 months.** This is very late life in C57BL/6J (~equivalent to human 70–80+ years). Whether the blunted hypertrophy / senescent-cell amplification is apparent at younger "middle aged" timepoints (18 months ≈ human ~55) is not addressed. Dose-response of aging is unclear.
- **D+Q systemic effects.** The senolytic treatment is systemic, not muscle-targeted. Off-target effects on other tissues (immune cell compartments, adipose, liver) during the overload period are not characterized. The improved hypertrophy could involve systemic SASP reduction rather than muscle-local senescent-cell clearance alone.
- **Male mice only.** Sex-specific effects on exercise-induced muscle senescence are not examined. Relevant given sex differences in [[sarcopenia]] epidemiology and satellite cell biology.
- **n per group:** Human arm n=18 (10M+8F, 20–39 yr); mouse MOV time-course N=6–8/group; senolytic arm N=7–9/group; RNA-seq N=5/group. All from a single institution (University of Kentucky).
- **Single lab.** Independent replication in another mouse colony or species would strengthen confidence. #gap/needs-replication
- **Gene expression is correlative.** The Igf1 / Ddit4 / Mmp14 changes are measured at day 14 endpoint; causal direction (gene changes → fiber growth vs fiber growth → gene changes) is not established by expression data alone.

## Cited by wiki pages

[Auto-populated by Obsidian backlinks panel]

---

## Footnotes

[^baker2011]: doi:10.1038/nature10600 · Baker DJ et al. · *Nature* 2011 · in-vivo · model: INK-ATTAC progeroid mice; genetic clearance of p16+ senescent cells extends healthspan · foundational senolytic justification paper
[^xu2018]: doi:10.1038/s41591-018-0092-9 · Xu M et al. · *Nat Med* 2018 · in-vivo · model: aged C57BL/6 mice + human explants; D+Q improves physical function in aged mice and in frailty index; establishes D+Q senolytic protocol used in this study
[^yousefzadeh2018]: [[studies/yousefzadeh-2018-fisetin-senolytic]] · n=8–9/group (lifespan) · in-vivo · p<0.05 · model: aged WT mice; demonstrates hit-and-run senolytic principle — brief drug exposure sufficient for durable senescent-cell reduction
[^gordon1967synablation]: #gap/needs-canonical-ref-synergist-ablation — synergist ablation as a MOV model for skeletal muscle hypertrophy is a well-established technique; canonical reference (Gordon et al. 1967 or similar) should be confirmed and cited here
