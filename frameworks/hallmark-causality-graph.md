---
type: framework
aliases: [hallmark causality, hallmark hierarchy, aging causal graph]
sources: ["[[studies/lopez-otin-2013-hallmarks-of-aging]]", "[[studies/lopez-otin-2023-hallmarks-expanding-universe]]"]
covers: [hallmarks, causal-graph, intervention-sequencing]
---

# Hallmark Causality Graph

> ⚠️ Auto-extracted by Claude on 2026-05-05. This synthesis MOC aggregates via wikilinks to verified atomic pages. Edge directionality reflects interpretation of intervention-epistasis, genetic-epistasis, and temporal-precedence evidence. Quantitative claims live on the linked atomic pages — follow links before relying on any number.

## The question

López-Otín et al. 2013 and 2023 treat the 12 hallmarks as co-equal categories of damage and response. For intervention selection, this co-equality is misleading: some hallmarks are upstream drivers (intervening there cascades benefits widely), others are downstream system-level integrators (intervening there blunts symptoms but leaves drivers untouched). This page proposes a wiki-internal opinionated ordering grounded in verified intervention evidence on the atomic hallmark pages.

The ordering is not the same as the López-Otín primary/antagonistic/integrative distinction. That taxonomy is descriptive — it distinguishes damage-accumulation from cellular-response from organism-level integration. This causal graph is mechanistic — it asks which hallmarks drive others, as evidenced by intervention-epistasis, genetic-epistasis, and temporal-precedence data.

---

## Three lines of evidence for ordering

### 1. Intervention epistasis

Does targeting hallmark X also reverse Y phenotype? When a single intervention aimed at one hallmark produces multi-hallmark reversal, the intervened-on hallmark is likely upstream.

**Senolytics (D+Q, navitoclax, fisetin)** target [[cellular-senescence]] by clearing senescent cells. Their downstream effects include: reduced circulating SASP markers ([[chronic-inflammation]] reversal — Hickson 2019); improved satellite cell niche function ([[stem-cell-exhaustion]] rescue — Sousa-Victor 2014 context); reduced plaque burden in LDLR-/- mice ([[chronic-inflammation]] + [[altered-intercellular-communication]] reversal — Childs 2016). These multi-hallmark phenotype reversals place cellular-senescence upstream of the integrative hallmarks. Evidence on [[hallmarks/cellular-senescence]] (verified).

**Rapamycin** (mTOR inhibition) targets [[deregulated-nutrient-sensing]]. Its downstream effects include: autophagy induction ([[disabled-macroautophagy]] relief — genetic epistasis in worms/flies); SASP suppression at the translational level ([[chronic-inflammation]] partial relief); HSC quiescence restoration ([[stem-cell-exhaustion]] partial rescue). These multi-hallmark effects place deregulated-nutrient-sensing upstream of autophagy and inflammation. Evidence on [[hallmarks/deregulated-nutrient-sensing]] (verified).

**AAV-TERT gene therapy (Bernardes de Jesus 2012, verified on [[hallmarks/telomere-attrition]])** extended mouse lifespan 24% and reversed multiple phenotypes — placing telomere-attrition in the proximal-driver tier. Evidence on [[hallmarks/telomere-attrition]] (verified).

**CANTOS (canakinumab, n=10,061; Ridker 2017, verified on [[hallmarks/chronic-inflammation]])** targets [[chronic-inflammation]] directly (anti-IL-1β) and reduced MACE HR 0.85 but did not restore upstream drivers (senescent cell burden, mTOR activity). This exemplifies the integrative-hallmark intervention pattern: meaningful clinical benefit without upstream reversal.

### 2. Genetic epistasis

Does X-KO suppress Y? When loss of upstream gene X abolishes downstream phenotype Y, X is upstream.

**In *C. elegans***: *daf-16* LoF completely suppresses the lifespan extension of *daf-2* LoF — the IIS pathway's longevity output requires functional FOXO (DAF-16). This places IIS upstream of FOXO-mediated stress resistance, establishing the canonical order: [[deregulated-nutrient-sensing]] → FOXO programs. Evidence on [[hallmarks/deregulated-nutrient-sensing]] (verified).

**Autophagy-epistasis**: ATG5/ATG7/beclin-1 knockouts abolish the lifespan benefits of caloric restriction, mTOR inhibition, and IIS reduction in worms and flies. Autophagy is a required downstream effector. Places [[disabled-macroautophagy]] downstream of [[deregulated-nutrient-sensing]] as a mandatory intermediate. Evidence on [[hallmarks/disabled-macroautophagy]] (verified).

**DDR → senescence**: Persistent DNA damage foci (via Rodier 2009, verified on [[hallmarks/genomic-instability]]) are the canonical trigger for senescent cell induction. ATG5/ATG7 KO mice develop neurodegeneration — placing autophagy mechanistically between nutrient sensing and proteostasis failure. Evidence on [[hallmarks/loss-of-proteostasis]] (verified).

**CHIP-inflammation loop**: TET2-mutant macrophages (from CHIP-bearing HSCs) overproduce IL-1β and IL-6, placing genomic instability (via somatic mutation in HSCs) upstream of the chronic-inflammation phenotype. Evidence on [[hallmarks/genomic-instability]] (verified) and [[hallmarks/chronic-inflammation]] (verified).

### 3. Temporal precedence

When markers of hallmark X rise before markers of hallmark Y across the lifespan, that supports X→Y direction. This evidence is weaker than interventional epistasis but provides prior-probability guidance.

Somatic mutation accumulation (genomic instability proxy) and epigenetic clock drift (epigenetic alterations proxy) begin in early adulthood. Telomere shortening is measurable from birth but accelerates in proliferating tissues during growth. These precede the clinically apparent inflammation (elevated hsCRP/IL-6), stem cell exhaustion, and dysbiosis signatures that intensify after 60–70 years — consistent with proximal damage hallmarks preceding integrative integrative hallmarks in time.

---

## Proposed hierarchy

Three tiers grounded in `mechanistic-tier:` field assignment from the R14 pass plus the causal-edge evidence above.

### Tier 1 — Proximal damage classes

These hallmarks reflect primary molecular damage that accumulates over time. They are causally upstream because their accumulation directly triggers Tier 2 responses. Current **intervention tractability is LOW** for most, making them compelling biological targets but poor near-term clinical targets.

| Hallmark | Mechanistic tier | Tractability | Key causal output |
|---|---|---|---|
| [[genomic-instability]] | proximal | low | DDR → cellular-senescence; CHIP → chronic-inflammation |
| [[telomere-attrition]] | proximal | low | DDR activation → replicative-senescence; stem-cell-exhaustion |
| [[epigenetic-alterations]] | proximal | moderate | Methylation drift → cellular-senescence (partial); stem-cell myeloid bias |
| [[mitochondrial-dysfunction]] | intermediate (disputed) | moderate | See Tier 1.5 discussion |

**Tier 1.5 — Mitochondrial-dysfunction placement (disputed):** Mitochondrial dysfunction is assigned `mechanistic-tier: intermediate` in the wiki's R14 schema but carries features of both tiers. Its causal inputs (mtDNA mutations from ROS, impaired mitophagy from mTOR suppression) place it partially downstream of Tier 2. Its causal outputs (DAMP-driven NLRP3 activation → chronic-inflammation; ROS-driven DDR → senescence) place it upstream of Tier 3. See the "Open ordering questions" section below for full treatment.

### Tier 2 — Intermediate response/damage

These hallmarks arise in response to Tier 1 damage OR as intrinsic age-related deregulation, and their dysregulation cascades downstream. **Intervention tractability is HIGHEST in this tier** — senolytics, rapamycin/CR, autophagy inducers, and anti-SASP agents all act here. This is the wiki's current "sweet spot" for clinical translation.

| Hallmark | Mechanistic tier | Tractability | Best-evidenced intervention |
|---|---|---|---|
| [[cellular-senescence]] | intermediate | high | Senolytics (D+Q, navitoclax, fisetin) — human target-engagement confirmed (Hickson 2019) |
| [[deregulated-nutrient-sensing]] | intermediate | high | Rapamycin (NIA ITP-validated mouse lifespan); CR (human biomarker evidence) |
| [[disabled-macroautophagy]] | intermediate | high | Rapamycin, spermidine, caloric restriction (all with lifespan epistasis in invertebrates) |
| [[loss-of-proteostasis]] | intermediate | moderate | mTOR inhibition (autophagy induction); no human aging-endpoint trial |
| [[mitochondrial-dysfunction]] | intermediate | moderate | Exercise (biogenesis); urolithin-A (mitophagy, Phase 2 RCT ATLAS) |

The Tier 2 clustering explains the R14 cross-tabulation finding: intermediate-tier hallmarks dominate the "high tractability" cell. Each has at least one pharmacological or lifestyle intervention with documented effect.

### Tier 3 — Integrative outcomes

These hallmarks are downstream convergence points — they aggregate damage from Tier 1 and Tier 2 and express it as organism-level phenotype. **Interventions here blunt symptoms but do not restore upstream damage.** The CANTOS result (canakinumab on chronic-inflammation) is the standout clinical proof: MACE reduction of 15% without touching senescent cell burden, mTOR activity, or telomere length. Meaningful, but not curative.

| Hallmark | Mechanistic tier | Tractability | Clinical proof-of-concept |
|---|---|---|---|
| [[chronic-inflammation]] | integrative | high | CANTOS: MACE HR 0.85 (Ridker 2017, n=10,061) — verified on [[hallmarks/chronic-inflammation]] |
| [[altered-intercellular-communication]] | integrative | moderate | Heterochronic parabiosis (Conboy 2005; mouse-only); no human RCT |
| [[stem-cell-exhaustion]] | integrative | low | Rapamycin (HSC quiescence); senolytics (niche clearance); preclinical only |
| [[dysbiosis]] | integrative | moderate | FMT killifish +37% lifespan (Smith 2017); human metabolic syndrome: Akkermansia (Depommier 2019 n=32) |

---

## Directed edges: causal graph summary

The full edge table with evidence strength is in [[frameworks/causal-graph-data]]. Synthesis here:

**Strongest causal chains (all with verified atomic-page evidence):**

1. [[genomic-instability]] → [[cellular-senescence]] (DDR-senescence induction; Tyner 2002, Rodier 2009 — verified on [[hallmarks/genomic-instability]])
2. [[telomere-attrition]] → [[cellular-senescence]] (TAFs → replicative senescence; Bernardes de Jesus 2012 reversal — verified on [[hallmarks/telomere-attrition]])
3. [[deregulated-nutrient-sensing]] → [[disabled-macroautophagy]] (mTORC1 → ULK1 inhibition; epistasis in 4 organisms — verified on [[hallmarks/disabled-macroautophagy]])
4. [[disabled-macroautophagy]] → [[loss-of-proteostasis]] (Atg5/Atg7 KO → neurodegeneration; Hara 2006, Komatsu 2006 — verified on [[hallmarks/loss-of-proteostasis]])
5. [[cellular-senescence]] → [[chronic-inflammation]] (SASP → inflammaging; CANTOS reverse; Hickson 2019 — verified on [[hallmarks/chronic-inflammation]])
6. [[cellular-senescence]] → [[stem-cell-exhaustion]] (senescent niche cells; Conboy 2005; Sousa-Victor 2014 — verified on [[hallmarks/stem-cell-exhaustion]])

**Weakest/most disputed edges:**

1. [[mitochondrial-dysfunction]] ↔ [[cellular-senescence]] (direction contested; Wiley HUVEC argues mito → senescence; others argue senescence → MiDAS; see Open ordering questions)
2. [[altered-intercellular-communication]] → [[stem-cell-exhaustion]] (GDF11 controversy unresolved; parabiosis supports weak direction but the causal factor is contested)
3. [[dysbiosis]] → [[chronic-inflammation]] (mechanistically coherent via LPS→TLR4→NF-κB, but the quantitative contribution of gut-derived LPS to systemic inflammaging in humans is not established from primary sources on the atomic pages)

---

## Disagreements between frameworks

### vs. López-Otín 2013/2023

The López-Otín primary/antagonistic/integrative distinction is descriptive of damage-origin vs. response-type rather than causal hierarchy. Key divergences:

- **Cellular senescence is "antagonistic" in López-Otín (a response to damage)** — this wiki places it at intermediate tier because of its OWN downstream cascade (SASP → inflammaging → fibrosis → stem cell niche disruption). The antagonistic/integrative distinction understates how much senescence *drives* downstream pathology versus merely reflecting upstream damage.

- **Mitochondrial dysfunction is "antagonistic" in López-Otín** — this wiki also places it at intermediate tier but notes its dual role as both a downstream effect (of genomic instability, nutrient sensing deregulation) and an upstream driver (of chronic inflammation, proteostasis failure). See Open ordering questions.

- **Epigenetic alterations is "primary" in López-Otín** — this wiki agrees on proximal placement but notes that causal evidence for epigenetic drift *driving* (rather than correlating with) aging remains contested per [[hallmarks/epigenetic-alterations]] (verified) and [[hypotheses/information-theory-of-aging]] (verified). The moderate tractability reflects that OSK partial reprogramming is preclinical.

### vs. SENS damage-first ordering

SENS (de Grey / SENS Research Foundation) treats seven damage categories — apoptosis-resistant cells, intracellular junk, extracellular junk, mitochondrial mutations, nuclear mutations, crosslinks, loss of stem cells — as the proximal damage classes requiring clearance or restoration.

**Where SENS and this wiki agree:** Damage-first ordering is intervention-coherent. Removing the damage (senescent cells via ApoptoSENS, intracellular aggregates via LysoSENS) is conceptually cleaner than suppressing downstream inflammation.

**Where they disagree:** SENS implicitly treats all seven damage categories as equally tractable intervention targets. This wiki's cross-tabulation evidence shows they are not. Telomere shortening (OncoSENS partial overlap) has a clear cancer-risk trade-off that makes restoration therapeutic-paradox territory for long-lived organisms. The wiki's tiered tractability assessment is more honest about near-term vs. aspirational targets.

The SENS framing is captured via `sens-correspondence:` fields on atomic hallmark pages; see [[sens-damage-categories]] for the full SENS MOC.

---

## Open ordering questions

Three genuinely unresolved causal ambiguities — not listed for show, but because the evidence is actually insufficient to determine edge direction:

### 1. Mitochondrial dysfunction ↔ cellular senescence

**Evidence for mito → senescence:** Wiley et al. showed that mitochondrial dysfunction in HUVECs without DNA damage can induce senescence via ROS → mTORC1 → NAD+/NADH imbalance (MiDAS — mitochondrial dysfunction-induced senescence), producing a distinct SASP enriched in IL-1α. Coppé lab work links mitochondrial mass expansion with SASP and senescence-like programs.

**Evidence for senescence → mito dysfunction:** Senescent cardiomyocytes (Anderson 2019, verified on [[hallmarks/cellular-senescence]]) show elevated mitochondrial ROS and a non-canonical SASP including GDF15 (a mitochondrial stress marker); this suggests senescence drives secondary mitochondrial dysfunction.

**Resolution:** Likely bidirectional, with the dominant direction varying by cell type. The wiki places mitochondrial dysfunction at intermediate tier with the explicit caveat that the cellular-senescence ↔ mitochondrial-dysfunction edge is `disputed` in [[frameworks/causal-graph-data]].

### 2. Dysbiosis ↔ chronic-inflammation

The LPS→TLR4→NF-κB mechanistic logic is clear: a dysbiotic microbiome with increased gram-negative bacteria should increase circulating LPS, activating systemic inflammation. The reverse is also mechanistically coherent: systemic inflammaging disrupts intestinal epithelial homeostasis, alters mucosal immunity, and shifts microbiome composition.

**The dietary confounder (Claesson 2012, verified on [[hallmarks/dysbiosis]]):** The ELDERMET cohort's key finding is that diet is the dominant upstream driver of microbiome composition. Diet changed within 1 month of entering long-term residential care, while the microbiome took ~1 year to shift. If frailty and institutionalization drive both the diet change and the inflammation, the dysbiosis → inflammation causal arrow may be confounded. No interventional RCT targeting dysbiosis (alone) in humans has measured systemic inflammatory biomarkers as a primary endpoint. Without this data, the edge direction cannot be cleanly determined.

### 3. Stem-cell-exhaustion's tier — semi-autonomous or fully downstream?

The verified evidence places stem-cell-exhaustion as integrative (downstream of multiple proximal classes): DNA damage limits HSC division; epigenetic drift skews differentiation; senescent niche cells impair satellite cell activation. All of this is downstream of primary damage. However, some preclinical heterochronic parabiosis data (Conboy 2005, verified on [[hallmarks/stem-cell-exhaustion]]) demonstrate that restoring young systemic factors rescues aged satellite cell function in a way that partially bypasses the intrinsic damage — suggesting some stem cell dysfunction may arise from an autonomous decay pathway that is niche-reversible rather than damage-driven.

If the niche-reversible component is large, then stem-cell-exhaustion could be semi-autonomous and not purely integrative. Current evidence does not quantify the intrinsic vs. extrinsic fraction in humans, and the mouse data spans a range of ages where extrinsic factors dominate early (before geriatric p16+ transition at ~28 months per Sousa-Victor 2014).

---

## Implications for intervention sequencing

If the proposed tier ordering is correct, what does it mean for clinical translation?

**Why not target Tier 1 first?** Tier 1 hallmarks (genomic instability, telomere attrition) have the most fundamental causal role, but tractability is low. There is no safe, demonstrated method to restore DDR fidelity in aged human tissues. Telomerase activation carries cancer risk that has not been resolved in long-lived organisms (the Bernardes de Jesus 2012 mouse result is reassuring but underpowered for cancer endpoints). Epigenetic restoration via OSK partial reprogramming has preclinical efficacy but no human safety data.

**Tier 2 is the current clinical opportunity.** Senolytics, rapamycin/CR, and autophagy inducers each act on Tier 2 hallmarks and have demonstrated: (a) lifespan extension in mice under controlled conditions; (b) mechanistic target engagement in humans; and (c) multi-hallmark downstream benefit via the causal graph. This is the rapamycin / D+Q / CR thesis: targeting intermediate-tier hallmarks produces multi-hallmark phenotype benefit because those hallmarks drive the integrative outcomes.

**Cellular senescence is uniquely dual-armed.** Among Tier 2 hallmarks, [[cellular-senescence]] is the only node where pharmacological intervention can act on *both* production rate (via upstream Tier 1 interventions on genomic instability, telomere attrition, mitochondrial dysfunction, epigenetic alterations) *and* residence time (via senolytic clearance — the only intervention class in geroscience that removes already-damaged biology rather than slowing new damage). Senescent-cell burden = production × residence; both arms are addressable through orthogonal mechanisms. This is why senolytics are positioned as **complement** to upstream interventions like rapamycin and CR rather than substitutes — and why the optimal mix shifts with age (upstream prevention dominates at lower starting burden; clearance gains marginal benefit as accumulated burden grows). See [[cellular-senescence]] § *Two arms of intervention*.

**Tier 3 interventions (CANTOS, FMT) have meaningful but bounded clinical impact.** CANTOS demonstrated that targeting downstream chronic-inflammation reduces MACE — a clinically important outcome — but without upstream reversal. This is analogous to blood pressure reduction preventing stroke without reversing the underlying atherosclerosis. Beneficial, necessary, but not curative. Similarly, Akkermansia supplementation (Depommier 2019) improved insulin sensitivity in metabolic syndrome without documented effects on upstream hallmarks.

**Combination sequencing logic:** The tier framework argues for prioritizing Tier 2 interventions as primary treatment with Tier 3 as adjunct — not as a substitute. Senolytics + mTOR inhibition + autophagy induction (potentially achievable with rapamycin/CR combinations) would target three distinct Tier 2 nodes simultaneously, producing broader multi-hallmark coverage. Human combination trials do not yet exist.

---

## Cross-references

- [[frameworks/causal-graph-data]] — companion edge-list table with evidence strength per directed edge
- [[hallmarks-of-aging]] — parent MOC; all 12 hallmarks with full atomic-page links
- [[sens-damage-categories]] — SENS damage-first ordering; alternative intervention frame
- [[hypotheses/hyperfunction-theory]] (verified) — mTOR hyperfunction is the primary mechanistic grounding for Tier 2 nutrient-sensing hallmark placement
- [[hypotheses/information-theory-of-aging]] (verified) — epigenetic proximal hallmark; causal vs. biomarker debate
- [[hypotheses/free-radical-theory-of-aging]] (verified, status: superseded) — historical framing for mitochondrial dysfunction

**Individual hallmark pages (all verified unless noted):**
[[hallmarks/genomic-instability]] · [[hallmarks/telomere-attrition]] · [[hallmarks/epigenetic-alterations]] · [[hallmarks/cellular-senescence]] · [[hallmarks/deregulated-nutrient-sensing]] · [[hallmarks/disabled-macroautophagy]] · [[hallmarks/loss-of-proteostasis]] · [[hallmarks/mitochondrial-dysfunction]] · [[hallmarks/chronic-inflammation]] · [[hallmarks/altered-intercellular-communication]] · [[hallmarks/stem-cell-exhaustion]] · [[hallmarks/dysbiosis]]
