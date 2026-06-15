---
type: pathway
aliases: [FGF pathway, FGFR signaling, fibroblast growth factor signaling, FGF-FGFR axis]
kegg: hsa04010
kegg-secondary: []
reactome: R-HSA-190236
wikipathways: null   # no single dedicated WikiPathways entry confirmed; hsa04010 (MAPK) is best KEGG proxy — see body note
key-nodes:
  - "[[fgf2]]"
  - "[[fgfr1]]"
  - "[[spry1]]"
  - "[[klotho]]"
  - "[[fgf21]]"
  - "[[fgf23]]"
  - "[[frs2]]"
  - "[[grb2]]"
  - "[[ras-mapk]]"
upstream:
  - "[[integrated-stress-response]]"
  - "[[ppar-alpha]]"
  - "[[atf4]]"
  - "[[phex]]"
  - "[[extracellular-matrix]]"   # HSPG co-receptor for paracrine FGF arm
downstream:
  - "[[ras-mapk]]"
  - "[[pi3k-akt-pathway]]"
  - "[[plcg-signaling]]"
  - "[[autophagy]]"
  - "[[stem-cell-exhaustion]]"   # via FGF2/FGFR1 satellite cell axis
  - "[[renal-phosphate-handling]]"   # via FGF23/klotho axis
hallmarks:
  - "[[stem-cell-exhaustion]]"
  - "[[altered-intercellular-communication]]"
  - "[[deregulated-nutrient-sensing]]"
  - "[[chronic-inflammation]]"
sens-categories: []
druggability-tier: 2   # FGFR inhibitors are oncology-only; FGF21 analogs (efruxifermin) in phase 3 for MASH — closest aging-adjacent application; no compound validated for canonical aging indication; see Pharmacology section
caused-by:
  - "[[integrated-stress-response]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[chronic-inflammation]]"   # SASP-derived FGF2 elevates paracrine FGF signaling in aged tissue
  - "[[cellular-senescence]]"   # senescent cells secrete FGF2 as SASP
causes:
  - "[[stem-cell-exhaustion]]"   # FGF2 niche overdrive depletes satellite cell pool
  - "[[altered-intercellular-communication]]"
  - "[[chronic-inflammation]]"
literature-checked-through: 2026-06-15
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "Chakkalakal 2012 (PMC3605795, green OA) read end-to-end — adult mouse age corrected from ~2 mo to ~4–8 mo; SU5402 vs SpryOX endpoint distinction confirmed correct. Bigot 2015 (gold OA) read end-to-end — biopsy site corrected from vastus lateralis to quadricep muscle; donor n (7 young / 14 elderly), reserve-pool percentages (~20% vs 3–5%), and 5-Aza rescue (~2.7-fold) confirmed. Zhang 2012 (eLife, gold OA) read end-to-end — all lifespan numerics (median 28.1→38.2 mo combined, male 27.9→36.2, female 28.8→40.1; HR 0.22 [0.15–0.34], p=2.7×10⁻¹²; n=77 Tg / 67 WT) confirmed against Figure 3D. Kuro-o 1997 DOI confirmed via Crossref (Nature 1997;390:45–51). Ornitz 2015 DOI (10.1002/wdev.176) confirmed correct on this page (WIREs Dev Biol). Closed-access sources (Ornitz 2015 review, Kuro-o 1997 full text, Yamada 2017, Yeh 2025, Chang 2024) remain abstract/review-derived — gap-flagged as already documented. Supersession check run: no superseding meta-analyses or large RCTs found for the FGF21 lifespan claim or FGF2/satellite cell axis. FGF23/klotho search returned 2 results; neither supersedes the page's framing."
---


# FGF signaling pathway

The **fibroblast growth factor (FGF) signaling pathway** is a receptor tyrosine kinase (RTK) cascade driven by a family of 22 structurally related FGF ligands acting through four high-affinity cell-surface receptors (FGFR1–4) to control cell proliferation, differentiation, migration, and survival [^ornitz2015]. In aging biology the pathway has two functionally distinct arms: a **paracrine arm** in which locally secreted FGFs (principally [[fgf2]]) regulate tissue stem cell behavior — critically, the FGF2–[[fgfr1]]–[[spry1]] axis disrupts skeletal muscle satellite cell quiescence and depletes the stem cell pool in aged muscle; and an **endocrine arm** in which circulating hormonal FGFs (FGF21, FGF23) require the co-receptor [[klotho]] to signal across tissues, regulating metabolism, phosphate homeostasis, vitamin D activity, and longevity.

> **KEGG note.** There is no dedicated top-level KEGG pathway entry for FGF signaling (as of 2026-06-15). FGF ligands and receptors appear as upstream activators within `hsa04010` (MAPK signaling pathway), which is used here as the best available proxy. Reactome `R-HSA-190236` ("Signaling by FGFR"; confirmed live 2026-06-15) is the authoritative canonical reference with four FGFR-specific sub-branches (R-HSA-5654736 through R-HSA-5654743).

## FGF subfamily classification

| Subfamily | Members | Mode | Co-factor | Aging relevance |
|---|---|---|---|---|
| **Endocrine** | FGF19 (mouse: Fgf15), FGF21, FGF23 | Systemic (blood) | α-Klotho (FGF23); β-Klotho (FGF19, FGF21) | High — metabolic regulation, CKD/cardiovascular, longevity signaling, thymic aging |
| **Paracrine** | FGF1–10, FGF16–18, FGF20, FGF22 (incl. [[fgf2]], FGF7) | Local (tissue) | Heparan sulfate proteoglycans (HSPGs) | High — FGF2 niche overdrive depletes satellite cells in aged muscle; wound healing; SASP component |
| **Intracrine** | FGF11–14 | Intracellular (non-secreted) | None | Low — sodium channel modulation; not primary aging targets |

---

## Receptors: FGFR1–4

FGFRs are receptor tyrosine kinases with a tripartite extracellular immunoglobulin-like domain structure (Ig-I, Ig-II, Ig-III), a single transmembrane helix, and a split intracellular tyrosine kinase domain. Ligand binding induces receptor dimerization and transautophosphorylation of the activation loop (primary sites: Tyr-653/Tyr-654 in FGFR1) → full kinase activity.

**Critical splice variants:** FGFR1–3 each exist as IIIb and IIIc isoforms, generated by alternative splicing of the Ig-III domain exon. IIIb isoforms are expressed in epithelial cells; IIIc isoforms in mesenchymal/myogenic cells (including satellite cells, where **FGFR1-IIIc** is the dominant isoform, conferring preferential FGF2 responsiveness). FGFR4 has no IIIb/IIIc variants.

**Co-receptors for endocrine FGFs:**
- **α-Klotho** ([[klotho]]): obligate co-receptor for **FGF23** at FGFR1c. Without α-Klotho, FGF23 cannot bind or activate its receptor at physiological concentrations. The klotho knockout mouse phenocopies accelerated aging (hyperphosphatemia, ectopic calcification, muscle wasting, arteriosclerosis, osteoporosis, premature death) [^kuro-o1997]. Soluble α-Klotho also acts as a direct signaling molecule independent of FGF23.
- **β-Klotho** (gene: *KLB*): obligate co-receptor for **FGF19** and **FGF21** at FGFR1c/FGFR4. β-Klotho expression is restricted to liver, adipose, and brain — accounting for the tissue-specific effects of FGF21 signaling. #gap/needs-canonical-id — β-Klotho protein page not yet seeded in this wiki.

---

## Core cascade: paracrine arm

### Ligand binding and activation

Paracrine FGFs are retained in the extracellular matrix (ECM) by high-affinity binding to **heparan sulfate proteoglycans (HSPGs)** — cell-surface glycoproteins bearing long glycosaminoglycan chains that present FGF ligands to receptors. The obligate role of HSPGs as co-receptors distinguishes FGF signaling from most other RTK pathways:

1. FGF ligand (e.g., [[fgf2]]) binds HSPGs (syndecan-4, glypican-1 in muscle) in the ECM
2. HSPG-presented FGF assembles a ternary 2:2:2 complex with two FGFR subunits at the cell surface, dramatically increasing binding affinity
3. FGFR dimerization → transautophosphorylation of intracellular kinase-domain tyrosines
4. Phosphorylated FGFR recruits the docking adaptor **FRS2α** (FGF receptor substrate 2 alpha), constitutively membrane-associated, which nucleates downstream signaling

### Three downstream branches from FRS2α

```
FGF + FGFR (+ HSPG or Klotho) → FGFR dimerization → trans-autophosphorylation
              ↓
        FRS2α phosphorylation
              ↓
    ┌──────────────────┬────────────────┐
    ↓                  ↓                ↓
GRB2/SOS → RAS     GRB2/GAB1 →      PLCγ activation
    ↓               PI3K               ↓
RAS-MAPK             ↓           DAG + IP3
(ERK1/2)         PI3K-AKT        PKC + Ca²⁺
```

**Branch 1 — RAS–MAPK (ERK1/2)** [[ras-mapk]]: FRS2α → GRB2 (growth factor receptor-bound protein 2) → SOS (Son of Sevenless, a guanine nucleotide exchange factor) → RAS–GTP → RAF → MEK1/2 → ERK1/2. In satellite cells this branch drives quiescence exit and proliferation.

**Branch 2 — PI3K–AKT** [[pi3k-akt-pathway]]: FRS2α → GRB2 → GAB1 → PI3K → PIP3 → PDK1 → AKT. Drives cell survival (BAD phosphorylation, FOXO suppression), glucose uptake, anabolic signaling.

**Branch 3 — PLCγ (phospholipase C gamma)**: FGFR directly phosphorylates PLCγ → cleaves PIP2 → IP3 (endoplasmic reticulum Ca²⁺ release) + DAG (PKC activation). Relevant for FGF2-driven angiogenesis and for FGF23-driven cardiac hypertrophy (FGFR4/PLCγ in cardiomyocytes, Klotho-independent) [^ornitz2015].

### Negative feedback regulators

| Inhibitor | Level | Mechanism | Aging role |
|---|---|---|---|
| **SPRY1/SPRY2** ([[spry1]]) | RAS–MAPK | Bind GRB2; prevent SOS-mediated RAS activation; induced by ERK1/2 | SPRY1 is the quiescence guardian in satellite cells; suppressed by chronic niche FGF2 in aging [^chakkalakal2012] |
| **SEF** (similar expression to fgf genes) | RAS–MAPK | Transmembrane inhibitor; tethers activated ERK to the FGFR complex | Less characterized in aging |
| **DUSP6 / MKP3** (dual-specificity phosphatase 6) | ERK1/2 | Cytoplasmic phosphatase; dephosphorylates ERK | Feedback dampening of ERK amplitude |

---

## Endocrine arm: FGF21 — starvation hormone and longevity signal

[[fgf21]] is a liver-derived (primarily) endocrine factor induced by fasting, ketogenic diet, mitochondrial stress, and exercise. It signals to adipose tissue (lipolysis), brain (appetite suppression, thermogenesis via hypothalamic βKlotho/FGFR1), and heart.

### Lifespan extension in mice

FGF21 transgenic mice (C57Bl/6J, FGF21 expressed from hepatocyte-selective apoE promoter) live substantially longer than wild-type littermates: **combined-sex median lifespan 28.1 → 38.2 months (~36%)**, with **males +~30%** (27.9 → 36.2 months) and **females +~39%** (28.8 → 40.1 months); hazard ratio 0.22 [95% CI 0.15–0.34], p=2.7×10⁻¹² [^zhang2012]. The mechanism operates primarily through **blunting of the hepatic GH (growth hormone) / IGF-1 axis** — FGF21 inhibits JAK2/STAT5 signaling in hepatocytes → reduced IGF-1 output → muted systemic IGF-1 → improved proteostasis and stress resistance. Notably, AMPK, mTOR, and sirtuin pathway markers were not elevated in FGF21-Tg tissues, ruling out those canonical longevity effectors as the primary mechanism.

**FGF21 activates AMPK.** At the cellular level, FGF21 also activates [[ampk]] in adipose and liver, linking it to the AMPK/mTOR longevity axis and contributing to fatty acid oxidation and reduced hepatic lipid accumulation [^salminen2017b].

**Induced by dietary restriction.** Caloric restriction, protein restriction, and methionine restriction all elevate hepatic FGF21 — positioning it as a potential hormonal mediator of dietary restriction longevity benefits in addition to canonical mTOR/AMPK mechanisms [^salminen2017a].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Longevity phenotype conserved in humans? | unknown — no human population data on FGF21 overexpression |
| Replicated in humans? | no — lifespan extension is mouse data only; metabolic effects have human phase 2 analog data |

### FGF21 as a mitochondrial stress signal (mitokine)

FGF21 is induced by the [[integrated-stress-response]] (ISR): mitochondrial stress causes cytosolic accumulation of mitochondrial RNAs, activating the eIF2α kinase PKR → eIF2α phosphorylation → selective translation of ATF4 → *FGF21* gene induction. CoQ deficiency specifically in brown adipose tissue (BAT) activates the PKR–eIF2α–ATF4–FGF21 axis; BAT-secreted FGF21 then drives whole-body mitohormesis independently of UCP1 [^chang2024]. In aging, **chronically elevated FGF21** may indicate sustained mitochondrial stress rather than adaptive longevity signaling — the acute vs. chronic distinction matters clinically and is underexplored. #gap/no-mechanism

### Thymic aging (2025 data)

Two independent 2025 *Nature Aging* papers established paracrine FGF21 roles in thymic maintenance:

- **Youm 2025** (Dixit lab, Yale): TEC-specific FGF21 overexpression (FoxN1Cre-iFGF21Tg) protected cortical and medullary thymic architecture in 24-month-old mice and increased naive CD8 T cells; adipocyte-specific FGF21 overexpression independently protected against age-related thymic involution; conditional ablation of βKlotho in Foxn1⁺ TECs (FoxN1Cre:Klb^fl/fl^) accelerated thymic aging. Hepatocyte-derived endocrine FGF21 at 5× elevation did not affect thymus, establishing the **paracrine (not endocrine) source** as essential for TEC maintenance. n=6–13/group [^youm2025].
- **Wedemeyer 2025**: paracrine FGF21 modulates mTOR signaling in thymic epithelial cells (TECs) across the lifespan [^wedemeyer2025]. #gap/no-fulltext-access — specific outcomes cannot be confirmed against primary PDF.

#gap/needs-human-replication — both thymus studies are mouse models; whether FGF21 analogs can reverse human thymic aging is untested.

### FGF21 analogs in clinical development

FGF21's short half-life (~1.5 h) and proteolytic instability have motivated engineered analogs. A comparative pharmacometric analysis of FGF21 analogs for MASH found efficacy in hepatic fat reduction and histological fibrosis across multiple agents [^jeong2024]:

- **Efruxifermin** (Akero Therapeutics) — phase 3 (HARMONY trial for MASH)
- **Pegbelfermin** (Bristol-Myers Squibb) — phase 2 for NASH
- **LY3502970** (Eli Lilly) — bispecific GLP1R/FGF21R agonist; phase 2 in obesity/T2D

None are in aging-indication trials. The closest aging rationale is metabolic / steatohepatitis (overlaps [[deregulated-nutrient-sensing]]), not explicit geroprotection. #gap/needs-human-replication

---

## Endocrine arm: FGF23 and the α-Klotho aging cascade

[[fgf23]] is secreted by osteocytes in bone in response to dietary phosphate load and 1,25-dihydroxyvitamin D (calcitriol). Its canonical role is phosphate homeostasis: FGF23 acts on kidney via α-Klotho/FGFR1 to suppress phosphate reabsorption (NaPi-IIa/NaPi-IIc cotransporters) and inhibit vitamin D synthesis (CYP27B1 inhibition; CYP24A1 induction). The axis becomes pathological with aging and in chronic kidney disease (CKD):

- **Declining kidney function** → reduced α-Klotho expression → FGF23 rises compensatorily → the feedback loop is impaired
- **Persistently elevated FGF23** at CKD stages 3–4 (potentially 100-fold above normal) drives left ventricular hypertrophy via FGFR4/PLCγ in cardiomyocytes (Klotho-independent), vascular calcification, and endothelial dysfunction
- **Klotho declines with age** even in normal kidney function — circulating soluble α-Klotho declines ~10% per decade from mid-life in otherwise healthy humans

Elevated FGF23 and reduced Klotho are early biomarkers in CKD and correlate with cardiovascular mortality in the general aging population [^yamada2017]. The [[klotho]] page covers the broader Klotho longevity biology. The FGF23/Klotho imbalance in aging constitutes a **phosphate–vitamin D aging cascade** with renal and cardiovascular consequences.

**Klotho overexpression extends lifespan** in mice; klotho deficiency accelerates the full aging syndrome [^kuro-o1997] [^kuro-o2021]. This positions the FGF23/klotho axis alongside the IIS and mTOR pathways as a canonical longevity control point.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FGF23/FGFR1/klotho axis is conserved |
| FGF23 elevation in aging? | yes — seen in healthy aging; amplified in CKD |
| Replicated in humans? | yes — multiple large observational cohorts; MR evidence partial |

---

## Paracrine arm: FGF2–FGFR1–SPRY1 satellite cell axis

This is the most mechanistically worked-out aging-specific role for paracrine FGF signaling and the primary reason [[fgf2]], [[fgfr1]], and [[spry1]] are assigned to [[stem-cell-exhaustion]]. See also [[cell-types/satellite-cells]], [[tissues/skeletal-muscle]], [[phenotypes/sarcopenia]].

### The Chakkalakal 2012 mechanism

Chakkalakal et al. (*Nature* 2012) established that **elevated FGF2 in the aged muscle niche is a primary driver of satellite cell quiescence loss and stem pool depletion** [^chakkalakal2012]:

1. In aged mouse myofibers (~22–24 months), FGF2 expression is chronically elevated under homeostatic (non-injured) conditions
2. This paracrine FGF2 activates FGFR1 → ERK1/2 on adjacent satellite cells → quiescence exit without productive self-renewal ("abortive activation") → progressive stem pool depletion
3. **SPRY1 is the endogenous defense:** quiescence-retaining satellite cells (label-retaining cells / LRCs) selectively maintain high SPRY1, which blunts ERK1/2 response to niche FGF2; non-LRC satellite cells have lower SPRY1 and are more vulnerable to FGF2-driven cycling
4. Genetic deletion of SPRY1 from aged satellite cells worsened pool depletion (~50% reduction vs aged controls); FGFR1 inhibition (SU5402, 6 weeks) prevented quiescence loss; SPRY1 overexpression (SpryOX, 5 months) prevented pool depletion

**Human epigenetic translation.** Bigot et al. (*Cell Reports* 2015) showed that age-associated DNA methylation suppresses SPRY1 in elderly human muscle stem cells, impairing re-quiescence capacity and reducing the reserve pool (from ~20% in young donors to ~3–5% in elderly). Demethylation with 5-Aza-2'-deoxycytidine rescued reserve cell formation ~2.7-fold [^bigot2015]. Cells were derived from quadricep muscle biopsies (n=7 young / 14 elderly donors). This provides direct human mechanistic evidence for the SPRY1 epigenetic axis.

### Complexity and dose-dependence

Yeh et al. (2025) showed that **loss of FGFR1** from satellite cells (conditional Fgfr1/Fgfr4 deletion) caused premature terminal differentiation and impaired self-renewal [^yeh2025], and Chang et al. (2026 preprint) showed that **activating FGFR1** in aged satellite cells restored integrin-β1/ECM responsiveness [^chang2026]. These findings reveal that tonic FGFR1 signaling is also required — the therapeutic need is **normalization** of FGF2/FGFR1 signaling, not crude inhibition. See [[molecules/proteins/fgfr1]] for full mechanistic reconciliation.

**SASP amplification.** Senescent interstitial cells accumulate with age in muscle and secrete FGF2 as a SASP (senescence-associated secretory phenotype) component [^coppe2010], compounding myofiber-derived FGF2 niche elevation and creating a potential positive-feedback loop (FGF2-driven depletion → reduced regenerative capacity → senescent cell accumulation → more SASP-FGF2).

---

## Connection to aging hallmarks

| Hallmark | FGF signaling mechanism |
|---|---|
| [[stem-cell-exhaustion]] | FGF2/FGFR1 niche overdrive depletes satellite cell pool; SPRY1 epigenetic suppression in human elderly muscle; FGF7 in epithelial compartments |
| [[altered-intercellular-communication]] | FGF21 and FGF23 are paradigmatic endocrine aging signals; FGF2 is a paracrine niche signal and SASP component; aged myofiber→satellite cell FGF2 axis is a prototypical aberrant intercellular signal |
| [[deregulated-nutrient-sensing]] | FGF21 represses GH/IGF-1 axis; FGF21/AMPK crosstalk; FGF21 induced by dietary restriction; FGF23/phosphate axis overlaps mineral nutrient sensing |
| [[chronic-inflammation]] | FGF23 excess contributes to systemic inflammation; SASP-derived FGF2 from senescent cells |

---

## Pharmacology and druggability

**`druggability-tier: 2`** (aging-context; per the CLAUDE.md shared convention).

**Rationale:** Three FDA-approved FGFR small-molecule inhibitors exist, and multiple FGF21 analogs are in phase 2–3 trials (MASH). Open Targets Platform (2026-05-07) shows FGF21 and FGFR1 both at max-druggability tier 1 (approved drugs in oncology or metabolic indications). However, per the aging-context convention, no drug is validated for a canonical aging indication — FGFR inhibitors carry on-target toxicity (hyperphosphatemia via FGF23/FGFR1 axis, retinal toxicity) incompatible with chronic aging use; FGF21 analogs are in MASH trials, not aging trials. Aging-context tier 2 is correct.

| Agent | Target | Stage | Aging-context notes |
|---|---|---|---|
| Erdafitinib | Pan-FGFR 1–4 | FDA-approved (bladder cancer) | Oncology only; hyperphosphatemia toxicity blocks chronic aging use |
| Pemigatinib | FGFR 1/2/3 | FDA-approved (cholangiocarcinoma) | Oncology only; same on-target toxicity |
| Futibatinib | FGFR 1–4 (covalent) | FDA-approved (cholangiocarcinoma) | Same |
| Efruxifermin | FGFR1/β-Klotho (FGF21 analog) | Phase 3 MASH (HARMONY trial) | Closest aging-adjacent application; longevity endpoints untested |
| Pegbelfermin | FGFR1/β-Klotho (FGF21 analog) | Phase 2 NASH | Similar profile; metabolic/hepatic primary |
| SU5402 | FGFR1 (ATP-competitive; research tool) | Preclinical only | Proof-of-concept in Chakkalakal 2012 aged satellite cell model; not suitable for clinical use |
| Recombinant α-Klotho / AAV-Klotho | α-Klotho / FGF23 receptor co-factor | Preclinical | Aims to restore FGF23/Klotho balance in aging and CKD |

**Translation gap.** The satellite cell / muscle-aging application requires normalization (not crude inhibition) of FGFR1 signaling — no selective "signaling normalizer" with the required profile exists. The FGF23/klotho arm has no approved therapeutic that directly manipulates klotho levels for aging. FGF21-based therapies are nearest to aging-adjacent development, contingent on MASH approval and further longevity endpoint testing.

---

## Paracrine FGFs in tissue repair

- **FGF2 / bFGF** ([[fgf2]]): potent mitogen for endothelial cells and fibroblasts; drives angiogenesis in wound healing; also a SASP component (see [[fgf2]] for detail). Paracrine range only — requires HSPG for receptor engagement.
- **FGF7 / KGF (keratinocyte growth factor)**: acts through FGFR2-IIIb exclusively on epithelial cells; drives mucosal repair (gut epithelium, skin, lung). A recombinant form (palifermin) is FDA-approved for chemotherapy-induced oral mucositis — the only approved FGF-family agent. Role in aging epithelial stem cell maintenance is less well-characterized than FGF2/satellite cell axis. #gap/needs-replication

---

## Limitations and gaps

1. **Human longevity translation for FGF21.** The Zhang 2012 transgenic mouse lifespan extension is one of the cleanest single-factor longevity results in aging biology, but there is no human population evidence that elevated FGF21 extends lifespan. Paradoxically, high circulating FGF21 in humans correlates with metabolic disease and mitochondrial myopathy — an indicator of stress, not health. The mouse-to-human direction of the FGF21 longevity effect is unresolved. #gap/needs-human-replication
2. **No human mechanistic data for the satellite cell axis.** Chakkalakal 2012 and subsequent studies are murine; human aging muscle biopsy studies have not directly measured FGFR1 activation states or tested FGFR1 modulation in satellite cells. #gap/needs-human-replication
3. **FGF23 causality vs correlation.** Elevated FGF23 predicts cardiovascular mortality in CKD; Mendelian randomization evidence for a causal role of FGF23 in general-population cardiovascular aging is limited. #gap/needs-replication
4. **FGFR1 signaling paradox unresolved in vivo.** Inhibition (Chakkalakal 2012) and activation (Chang 2026 preprint) both show beneficial effects in aged satellite cells under different conditions; the dose-dependence has not been tested in a single head-to-head in-vivo study. #gap/contradictory-evidence
5. **No dedicated KEGG pathway ID.** The absence of a standalone FGF-signaling entry in KEGG (only hsa04010 MAPK pathway covers FGF inputs) limits cross-species pathway comparison. `kegg: hsa04010` is a proxy. #gap/needs-canonical-id
6. **FGF19 in aging.** FGF19 regulates bile acid homeostasis and hepatic glucose metabolism but has minimal aging-longevity literature. #gap/unsourced
7. **HSPG sulfation changes with aging.** Heparan sulfate proteoglycan composition changes in muscle and other tissues with age, modulating FGF ligand presentation — but tissue-specific HSPG sulfation changes in human aging are incompletely mapped. #gap/no-mechanism

---

## Cross-references

- **[[molecules/proteins/fgf2]]** — paracrine FGF ligand; aged-muscle niche elevation; satellite cell depletion mechanism; SASP component; isoform biology
- **[[molecules/proteins/fgfr1]]** — primary receptor mediating FGF2 effects in muscle; Chakkalakal 2012; Yeh 2025/Chang 2026 discordance
- **[[molecules/proteins/spry1]]** — SPROUTY1; key negative-feedback node; quiescence guardian in satellite cells; Bigot 2015 epigenetic aging suppression
- **[[klotho]]** — α-Klotho co-receptor for FGF23; canonical longevity gene; decline with aging
- **[[fgf21]]** — endocrine FGF; longevity-associated; MASH drug target (implicit stub)
- **[[fgf23]]** — endocrine FGF; phosphate regulator; rises in CKD/aging (implicit stub)
- **[[ras-mapk]]** — primary downstream effector cascade (ERK1/2) of paracrine FGF signaling
- **[[pi3k-akt-pathway]]** — secondary downstream effector
- **[[plcg-signaling]]** — third downstream branch (PLCγ–PKC–Ca²⁺)
- **[[integrated-stress-response]]** — upstream inducer of FGF21 via ATF4/PKR/eIF2α
- **[[cell-types/satellite-cells]]** — primary cell type disrupted by aged-niche FGF2; quiescence biology
- **[[tissues/skeletal-muscle]]** — tissue context for paracrine arm; sarcopenia mechanisms
- **[[phenotypes/sarcopenia]]** — downstream phenotype of satellite cell exhaustion via FGF2 axis
- **[[hallmarks/stem-cell-exhaustion]]** — hallmark exemplified by FGF2-driven satellite cell depletion
- **[[hallmarks/altered-intercellular-communication]]** — paracrine FGF2 from aged myofibers/senescent cells; endocrine FGF21/FGF23 dysregulation
- **[[hallmarks/deregulated-nutrient-sensing]]** — FGF21 metabolic arm; FGF23/klotho phosphate arm
- **[[hallmarks/chronic-inflammation]]** — SASP-FGF2; FGF23 cardiovascular inflammatory signaling
- **[[ampk]]** — activated by FGF21 signaling; shared metabolic-longevity node
- **[[mtor]]** — FGF21 longevity mechanism partly via GH/IGF-1 suppression converging with IIS/mTOR axis
- **[[caloric-restriction]]** — induces hepatic FGF21; potential hormonal mediator of dietary restriction longevity benefits
- **[[insulin-igf1]]** — FGF21 longevity mechanism operates partly by suppressing hepatic IGF-1 output
- **[[cellular-senescence]]** — senescent cells secrete FGF2 as SASP; SASP elevates FGF2 in aged tissue niche
- **[[aav-klotho]]** — gene therapy intervention targeting the FGF23/Klotho axis

---

## Footnotes

[^ornitz2015]: doi:10.1002/wdev.176 · Ornitz DM, Itoh N · *WIREs Dev Biol* 2015;4(3):215–266 · comprehensive review of FGF signaling pathway; 22 FGF ligands, 4 FGFRs, HSPG co-receptor biology, ternary complex, FRS2α-mediated downstream branching (RAS–MAPK, PI3K–AKT, PLCγ), endocrine FGF subfamily (Klotho co-receptors), negative regulators (SPRY1/2, SEF, MKP3); FGFR IIIb/IIIc splice variant biology; 1,829 citations (Crossref 2026-06-15) · closed-access; #gap/no-fulltext-access

[^chakkalakal2012]: doi:10.1038/nature11438 · PMID 23023126 · PMC3605795 · Chakkalakal JV, Jones KM, Basson MA, Brack AS · *Nature* 2012;490(7420):355–360 · in-vivo mouse genetic model · model: C57BL/6 mice; adult ~4–8 mo vs aged ~22–24 mo; Pax7-CreER^TM^ satellite cell–specific conditional alleles · aged myofibers secrete elevated FGF2 under homeostatic conditions; FGF2 drives FGFR1→ERK-mediated quiescence exit and pool depletion; SPRY1 selectively retained in quiescence-retaining LRC satellite cells; Spry1 deletion worsened depletion ~50%; FGFR1 inhibition (SU5402, 6 wk) prevented quiescence loss (not pool depletion — different endpoint); Spry1 overexpression (SpryOX, 5 mo) prevented pool depletion (twofold more satellite cells per fibre vs aged controls) · green OA via PMC3605795

[^kuro-o1997]: doi:10.1038/36285 · PMID 9363890 · Kuro-o M, Matsumura Y, Aizawa H, Kawaguchi H et al. · *Nature* 1997;390:45–51 · in-vivo mouse model · mutation of klotho gene produces accelerated aging syndrome: short lifespan, arteriosclerosis, skin atrophy, osteoporosis, emphysema; establishes klotho as a canonical longevity/aging-suppressor gene · closed-access; #gap/no-fulltext-access — the widely-cited "~61-day median lifespan" figure for klotho-KO mice is consistent with secondary literature but cannot be verified from this closed-access primary PDF; re-anchor on next verification pass

[^kuro-o2021]: doi:10.1016/bs.vh.2020.12.013 · PMID 33706952 · Kuro-O M · *Vitamins and Hormones* 2021 · review chapter · comprehensive overview of FGF23–klotho axis in aging; klotho as aging suppressor; FGF23 rise with aging and CKD; klotho decline with age; cardiovascular FGF23 effects via FGFR4 in cardiomyocytes; hyperphosphatemia as an aging accelerator; klotho overexpression extends lifespan

[^kuro-o2017]: doi:10.1007/s10157-016-1357-6 · PMID 27838783 · Kuro-O M · *Clin Exp Nephrol* 2017;21(Suppl 1):64–69 · review · FGF23/klotho system beyond mineral metabolism; FGF23 cardiovascular effects; klotho as anti-aging hormone; expanding roles in phosphate-independent aging phenotypes

[^zhang2012]: doi:10.7554/eLife.00065 · PMID 23066506 · Zhang Y, Xie Y, Berglund ED et al. · *eLife* 2012 · in-vivo transgenic mouse model (C57Bl/6J; n=77 Tg, n=67 WT) · FGF21-Tg mice live longer: combined median 28.1→38.2 months; males +~30% (27.9→36.2 mo), females +~39% (28.8→40.1 mo); HR=0.22 [0.15–0.34], p=2.7×10⁻¹²; mechanism: JAK2/STAT5 suppression → reduced IGF-1; AMPK/mTOR/sirtuin markers not elevated · gold OA (eLife); PDF previously verified in prior seeder pass

[^salminen2017a]: doi:10.1016/j.arr.2017.05.004 · PMID 28552719 · Salminen A, Kauppinen A, Kaarniranta K · *Ageing Res Rev* 2017;38:29–44 · review · FGF21 as longevity regulator; interaction between energy metabolism and stress responses; dietary restriction/fasting/protein restriction induce FGF21; FGF21 engages PGC-1α, SIRT1, AMPK; anti-inflammatory effects; connections to IIS/mTOR longevity pathways

[^salminen2017b]: doi:10.1007/s00109-016-1477-1 · PMID 27678528 · Salminen A, Kauppinen A, Kaarniranta K · *J Mol Med* 2017;95(2):123–132 · review · FGF21 activates AMPK signaling; metabolic regulation in aging; FGF21 links nutrient sensing to AMPK/SIRT1/mTOR axis

[^bigot2015]: doi:10.1016/j.celrep.2015.09.067 · PMID 26526994 · Bigot A, Duddy WJ, Ouandaogo ZG et al. · *Cell Rep* 2015;13(6):1172–1182 · observational + in-vitro · n=7 young (15–24 yr) vs 14 elderly (72–80 yr) donors; primary human muscle stem cells from quadricep muscle biopsies · age-associated DNA methylation suppresses SPRY1 in elderly human muscle stem cells; reserve pool ~3–5% in elderly vs ~20% in young; 5-Aza-2'-deoxycytidine demethylation rescues reserve cell formation ~2.7-fold; SPRY1 siRNA knockdown in young cells phenocopies elderly defect; aging in human satellite cells does not involve senescence markers · gold OA

[^yamada2017]: doi:10.1016/j.bone.2016.11.012 · PMID 27847254 · Yamada S, Giachelli CM · *Bone* 2017 · review · FGF23/Klotho axis in CKD–mineral bone disorder; vascular calcification mechanisms; FGF23 and Klotho as cardiovascular risk biomarkers in CKD and general aging population

[^chang2024]: doi:10.1038/s44318-023-00008-x · Chang CF, Gunawan AL et al. · *EMBO J* 2024 · in-vivo + in-vitro (mouse BAT; murine and human beige adipocytes) · CoQ deficiency in BAT triggers cytosolic mitochondrial RNA accumulation → PKR activation → eIF2α phosphorylation → ISR → ATF4-FGF21 axis; BAT-secreted FGF21 drives whole-body increased metabolic rate (mitohormesis) independently of UCP1; ATF4 KO abolishes FGF21 induction · green OA via PMC10897314; PDF previously verified in prior seeder pass

[^youm2025]: doi:10.1038/s43587-025-00813-5 · PMID 40359345 · Youm YH, Gliniak C et al. (Dixit lab, Yale) · *Nature Aging* 2025 · in-vivo mouse · TEC-specific FGF21 overexpression protected thymic architecture and increased naive CD8 T cells in 24-month-old mice; adipocyte-specific FGF21 independently protected against age-related thymic involution; hepatocyte-derived FGF21 at 5× elevation did not affect thymus; βKlotho ablation in Foxn1⁺ TECs accelerated thymic aging; n=6–13/group · green OA via PMC12003152; PDF previously verified in prior seeder pass

[^wedemeyer2025]: doi:10.1038/s43587-024-00801-1 · Wedemeyer SA et al. · *Nature Aging* 2025 · in-vivo mouse · paracrine FGF21 modulates mTOR signaling in TECs to regulate thymus function; mTEC-derived FGF21 maintains cortical TEC function and T-cell output · closed-access; #gap/no-fulltext-access — specific claims unverified against primary PDF

[^jeong2024]: doi:10.1002/cpt.3278 · PMID 38666606 · Jeong C et al. · *Clin Pharmacol Ther* 2024 · pharmacometric analysis; comparative efficacy/safety of FGF21 analogs (efruxifermin, pegbelfermin, zalfermin) for MASH; hepatic fat reduction and fibrosis endpoints; efruxifermin HARMONY phase 3 context

[^coppe2010]: doi:10.1146/annurev-pathol-121808-102144 · PMID 20078217 · Coppé JP, Desprez PY, Krtolica A, Campisi J · *Annu Rev Pathol* 2010;5:99–118 · review · canonical SASP review; FGF2 (listed as "bFGF") confirmed in Table 1 as a secreted growth factor upregulated in senescent human fibroblasts · green OA via doi

[^yeh2025]: doi:10.1186/s12964-025-02533-0 · PMID 41462267 · Yeh CJ, Nakka K, Yablonka-Reuveni Z, Lepper C · *Cell Commun Signal* 2025;23(1):535 · in-vivo genetic model; satellite cell–specific Fgfr1/Fgfr4 deletion in mice · FGFR1 and FGFR4 are required for satellite cell quiescence maintenance; deletion caused premature differentiation and impaired self-renewal; ERK pathway is operative · provides context for Chakkalakal 2012: tonic FGFR1 signaling supports quiescence whereas overdrive depletes pool · closed-access; #gap/no-fulltext-access — abstract-derived

[^chang2026]: doi:10.64898/2026.02.18.706475 · PMID 41756900 · Chang TL, Vallery TK, Zlatkov TS, Cutler AA et al. · *bioRxiv* preprint 2026-02-19 · in-vitro (viscoelastic hydrogel); young and aged mouse satellite cells · FGFR1 signaling is dysfunctional in aged satellite cells at level of integrin-β1 co-localization and fibronectin ECM sensing; pharmacological FGFR1 activation restored integrin-β1 co-localization, self-renewal, and fibronectin responsiveness · preprint — not peer-reviewed; in-vitro only; weight accordingly · #gap/needs-replication
