---
type: pathway
aliases: [specialized pro-resolving lipid mediators, SPM, resolution-of-inflammation pathway, Serhan SPM axis, SPM biosynthesis]
kegg: hsa00590
reactome: R-HSA-9018678
wikipathways: WP5155
key-nodes:
  - "[[alox15]]"
  - "[[alox5]]"
  - "[[alox12]]"
  - "[[ptgs2]]"
  - "[[fpr2]]"
  - "[[gpr32]]"
  - "[[chemr23]]"
  - "[[lgr6]]"
  - "[[arachidonic-acid]]"
upstream:
  - "[[arachidonic-acid-pathway]]"
  - "[[omega-3-metabolism]]"
  - "[[phospholipase-a2]]"
downstream:
  - "[[inflammation-resolution]]"
  - "[[macrophage-efferocytosis]]"
  - "[[neutrophil-clearance]]"
hallmarks:
  - "[[chronic-inflammation]]"
  - "[[altered-intercellular-communication]]"
sens-categories: []
druggability-tier: 2
caused-by:
  - "[[arachidonic-acid-pathway]]"
  - "[[omega-3-metabolism]]"
causes:
  - "[[chronic-inflammation]]"
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Serhan 2018 JCI (10.1172/JCI97943) verified end-to-end against local PDF — biosynthetic routes, receptor pharmacology, four-family framework confirmed; GPR32 ligand list corrected (RvD2 removed, AT-RvD1/RvD5 added); maresin tissue distribution corrected; zhang2023 study design corrected to in-vivo mouse only. Dalli 2017 (10.3389/fimmu.2017.01400) verified against local PDF. Ponce 2022 (10.3389/fnagi.2022.780811) and Mehrotra 2022 (10.1038/s41573-022-00470-y) downloaded and reviewed. Chiang 2017 (10.1016/j.mam.2017.03.005) and Serhan 2014 Nature (10.1038/nature13479) not_oa — receptor pharmacology claims sourced to Chiang 2017 remain partially unverified; Doyle 2018 (10.1016/j.smim.2018.09.002) not_oa — aging-decline claims remain partially unverified. Reactome R-HSA-9018678, R-HSA-9018676, R-HSA-9020265 verified via REST API. WikiPathways WP5155 not re-verifiable via current API endpoints. Canonical-DB identity fields (KEGG hsa00590) not independently re-verified."
---


# Specialized Pro-Resolving Mediator (SPM) pathway

The **specialized pro-resolving mediator (SPM) pathway** is a network of enzymatic biosynthetic routes that convert polyunsaturated fatty acid (PUFA) precursors — principally arachidonic acid (AA), eicosapentaenoic acid (EPA), and docosahexaenoic acid (DHA) — into four structurally distinct families of lipid mediators that **actively terminate** the inflammatory response and restore tissue homeostasis. Unlike classical anti-inflammatory drugs that suppress the *initiation* of inflammation, SPMs operate during the *resolution phase*, promoting neutrophil clearance (efferocytosis), macrophage phenotype switching, and pro-resolving transcriptional programs.

In aging, the chronic, low-grade sterile inflammation called [[chronic-inflammation|inflammaging]] is mechanistically linked to resolution failure — an inability to extinguish the inflammatory response after the inciting stimulus has cleared. SPM levels decline with age in multiple cohort studies, and deficient SPM tone is proposed as a proximal driver of age-related inflammatory pathology including Alzheimer's disease, atherosclerosis, and sarcopenia [^doyle2018] [^ponce2022].

The SPM pathway intersects with this wiki's [[fpr2]] page (R35-Stage2), which describes biased agonism at the ALX/FPR2 receptor — the shared receptor for lipoxin A4 and resolvin D1 and a key mechanistic node for resolution signaling.

---

## Druggability note (aging context)

`druggability-tier: 2` — High-quality pharmacological probes exist (stable SPM analogs including RX-10045, a lipoxin A4 analog, reached Phase 3 for dry eye); no SPM-class drug is FDA-approved for any aging indication. Multiple analogs are in active clinical development for inflammatory diseases. The tier reflects the aging context rather than maximum druggability across all indications.

---

## Four SPM families

The four classes differ by PUFA precursor, key biosynthetic enzymes, and receptor targets:

| Family | Precursor | Key enzymes | Key members | Primary receptors | Key function |
|---|---|---|---|---|---|
| **Lipoxins** | Arachidonic acid (AA, n-6) | 15-LOX (ALOX15) → 5-LOX (ALOX5); or aspirin-acetylated COX-2 (→ 15-epi-LXA4) | LXA4, LXB4, 15-epi-LXA4 (aspirin-triggered) | ALX/FPR2 ([[fpr2]]) | Halt neutrophil recruitment; first SPM family described (Serhan 1984) |
| **E-series resolvins** | EPA (n-3) | COX-2 (aspirin-acetylated) → 5-LOX; or cytochrome P450 | RvE1, RvE2, RvE3 | ChemR23 ([[chemr23]]), BLT1 | Reduce neutrophil tissue entry; anti-nociceptive |
| **D-series resolvins** | DHA (n-3) | 15-LOX (ALOX15) → 5-LOX (ALOX5) | RvD1, RvD2, RvD3, RvD4, RvD5, RvD6; aspirin-triggered AT-RvD series | GPR32 ([[gpr32]]), ALX/FPR2 ([[fpr2]]) | Promote macrophage efferocytosis; regulate NLRP3 inflammasome |
| **Protectins** | DHA (n-3) | 15-LOX (ALOX15) | PD1/NPD1 (neuroprotectin D1), PDX | Not fully characterized; some FPR2 interaction | Neuroprotective; epithelial barrier repair |
| **Maresins** | DHA (n-3) | 12-LOX (ALOX12) | MaR1, MaR2 | LGR6 (MaR1); GPR18 (RvD2) | Tissue repair; regeneration program activation |

> **Note on protectin receptors:** PD1/NPD1 receptor identity is incompletely resolved; candidate receptors have been described but not yet confirmed as specific, high-affinity cognate pairs. #gap/no-mechanism

---

## Biosynthetic routes

### Lipoxins (from AA)

Arachidonic acid released from membrane phospholipids by phospholipase A2 is oxygenated in two sequential lipoxygenase reactions:

1. **Transcellular synthesis (classic route):** Leukocyte 5-LOX produces 5-HPETE → leukotriene A4 (LTA4); LTA4 is transferred to epithelial or platelet 12-LOX or 15-LOX to yield lipoxin A4 (LXA4) or B4 (LXB4).
2. **Single-cell 15-LOX route:** 15-LOX converts AA to 15-HpETE → 15-HETE; 5-LOX then generates LXA4.
3. **Aspirin-triggered route (15-epi-LXA4):** Aspirin-acetylated COX-2 produces 15R-HETE from AA; 5-LOX converts this to 15-epi-LXA4 (aspirin-triggered lipoxin, ATL). 15-epi-LXA4 has equivalent FPR2 potency to LXA4 — a key mechanistic explanation for aspirin's anti-inflammatory benefit beyond COX inhibition [^romano2006].

### E-series resolvins (from EPA)

EPA is oxygenated by aspirin-acetylated COX-2 to generate 18R-HEPE; 5-LOX then produces resolvin E1 (RvE1) and RvE2. Cytochrome P450-dependent routes generate additional E-series metabolites. RvE1 signals through ChemR23 (also called CMKLR1) on macrophages and dendritic cells [^chiang2017].

### D-series resolvins and protectins (from DHA)

DHA undergoes sequential 15-LOX (ALOX15) → 5-LOX (ALOX5) oxygenation to generate the D-series resolvins (RvD1–RvD6) and protectins. Aspirin-acetylated COX-2 generates the 17R-hydroxyl precursor, producing aspirin-triggered D-series (AT-RvD1 etc.). RvD1 signals through both GPR32 and ALX/FPR2; RvD2 signals through GPR18 [^serhan2018jci].

### Maresins (from DHA)

Maresins are produced from DHA via 12-LOX (ALOX12) in macrophages. MaR1 signals through LGR6; MaR2 biosynthesis and receptors are less characterized. Maresins are identified in resolving exudates, mouse infectious exudates, human macrophages, spleens, and plasma [^dalli2017]. The specific claim that maresins are enriched in bone marrow macrophages derives from Abdoulnour 2014 (doi:10.1073/pnas.1414005111; not locally verified). #gap/needs-replication

---

## Receptor pharmacology and FPR2 biased agonism

The SPM pathway converges on a small set of GPCRs that mediate distinct resolution programs:

| Receptor | Canonical SPM ligands | Competing ligands | Resolution output |
|---|---|---|---|
| ALX/FPR2 ([[fpr2]]) | LXA4, 15-epi-LXA4, RvD1, annexin A1 | SAA, LL-37 ([[ll-37]]), fMLF | Neutrophil apoptosis; macrophage efferocytosis; NF-κB suppression |
| GPR32 ([[gpr32]]) | RvD1, AT-RvD1, RvD3, RvD5 | — | Macrophage phagocytosis; bacterial clearance |
| ChemR23 ([[chemr23]]) | RvE1, RvE2 | Chemerin (competing) | Dendritic cell resolution responses; macrophage phenotype switch |
| LGR6 ([[lgr6]]) | MaR1 | — | Tissue regeneration; wound repair |
| GPR18 | RvD2 | — | Macrophage bone marrow egress; hepatic resolution |

**Biased agonism at FPR2:** The ALX/FPR2 receptor is the most extensively characterized SPM receptor and exhibits archetypal biased agonism — see [[fpr2]] for detailed mechanistic treatment. Briefly: lipoxin A4 and resolvin D1 stabilize a Gαi-coupled conformation that drives anti-inflammatory signaling (MAPK deactivation, PI3K-δ → Akt → NF-κB suppression); while LL-37 ([[ll-37]]) and serum amyloid A stabilize β-arrestin-biased conformations that drive pro-inflammatory outcomes. The relative abundance of pro-resolving vs. pro-inflammatory FPR2 ligands determines receptor bias tone, and this balance is disrupted in aging [^doyle2018].

> **Wang 2014 cross-reference:** Hippocampal LXA4 protein is reduced in Alzheimer's disease brains (correlation with MMSE r=0.475, p<0.0005); however, FPR2/ALX receptor protein level in AD was NOT significantly different by Western blot (z=−0.053, p=0.958) per Wang 2014. ChemR23, not FPR2, was elevated in AD hippocampus in that study. See [[fpr2]] for the verified claim and appropriate qualification.

---

## Role in aging and inflammaging

### Resolution-failure hypothesis

Inflammaging — the chronic, low-grade sterile inflammation that accumulates across the lifespan — may result in part from progressive inability to terminate acute inflammatory responses rather than from increased inflammatory initiation alone. This resolution-failure framing reframes inflammaging as a deficit in active pro-resolving mediator production rather than simply excess pro-inflammatory mediator production [^doyle2018].

Supporting observations:

- Multiple cohort studies report reduced circulating SPM levels in older compared to younger adults; the magnitude of decline is incompletely quantified and varies by mediator class and tissue. #gap/needs-replication — specific age-stratified measurements need verification in large prospective cohorts.
- RvE1 levels are reduced and ChemR23 signaling is protective in an Angiotensin II–induced hypertensive mouse model [^zhang2023]. Whether circulating RvE1 is decreased in human hypertensive patients has not been confirmed in this source. #gap/needs-human-replication
- LXA4 is reduced in hippocampal tissue from AD patients; the decline correlates with cognitive score (see [[fpr2]]).
- DHA precursor availability — required for D-series resolvin and protectin biosynthesis — declines with age in some populations; dietary omega-3 supplementation can partially restore precursor flux.

### Neurodegenerative disease connection

SPM deficiency is documented in neurodegenerative conditions with strong aging risk factors. PD1/NPD1 is produced in the brain from DHA and is neuroprotective in models of Alzheimer's and Parkinson's disease. Deficient SPM tone in the CNS is proposed to permit neuroinflammatory amplification that would otherwise be resolved [^ponce2022]. #gap/needs-human-replication — most mechanistic data is from rodent models.

### Efferocytosis and senescent-cell clearance

SPMs, particularly maresins and D-series resolvins, drive macrophage efferocytosis — the phagocytic clearance of apoptotic cells. Impaired efferocytosis in aging permits accumulation of secondary necrotic debris and downstream DAMP-driven sterile inflammation. The mechanistic link between SPM deficiency and [[macrophage-efferocytosis|impaired efferocytosis]] in aged tissue is an area of active investigation [^mehrotra2022]. #gap/needs-replication

### Interaction with senescence and SASP

SASP-derived prostaglandin E2 (PGE2) competes with SPMs for COX-2-derived lipid precursors and biases macrophage arachidonate flux toward pro-inflammatory eicosanoids. This represents a mechanism by which the [[cellular-senescence|senescent cell burden]] of aging suppresses SPM biosynthesis — creating a feedforward loop between senescent burden and resolution failure. #gap/no-mechanism — direct mechanistic evidence for SASP-driven SPM suppression in aged tissues is limited.

### Cross-pathway interaction with the 15-PGDH gerozyme axis

The Blau/Bhutani lab's [[15-pgdh]] gerozyme story (Palla 2021 muscle, Bakooshli 2023 NMJ, Singla 2025 cartilage) operates on the *opposite* arm of the same prostaglandin-flux network: pharmacological inhibition of 15-PGDH (with [[sw033291]] or Epirium Bio derivatives) **raises** tissue PGE2 by blocking its catabolism — and is regenerative for aged muscle, NMJ, and articular cartilage. This creates a structural tension worth noting: the SPM-pathway frame views PGE2 as a pro-inflammatory eicosanoid that *competes against* resolution, while the gerozyme frame views age-elevated 15-PGDH activity as *depleting* a homeostatic PGE2 pool whose physiologic restoration is regenerative. The reconciliation is likely (a) tissue-context dependent (synovial macrophages vs satellite cells respond to PGE2 differently), (b) dose-dependent (physiologic vs SASP-supraphysiologic), and (c) receptor-subtype dependent (EP4 anabolic signaling in muscle vs broader prostanoid pathway in resolution). This unresolved cross-pathway dynamic is a key open question for any clinical program aiming to raise tissue PGE2. #gap/contradictory-evidence

---

## Therapeutic landscape

### SPM analogs

Native SPMs have short half-lives (minutes to hours) due to rapid metabolic inactivation. Stable chemical analogs are in clinical development:

| Compound | Class | Clinical stage | Indication |
|---|---|---|---|
| RX-10045 | Lipoxin A4 analog | Phase 3 (dry eye) | Dry eye disease; not yet tested in aging |
| ARI-3037MO | Resolvin E1 analog | Phase 2 | Periodontal disease ([[periodontitis]]) |
| Benzo-LXA4 analogs | Lipoxin A4 analogs | Preclinical | Various inflammatory models |

No SPM analog has entered clinical trials for an aging indication as of 2026-05-09. #gap/needs-human-replication

### Dietary precursor supplementation

Omega-3 fatty acid supplementation (EPA + DHA) provides biosynthetic precursors for E-series and D-series resolvins and for protectins and maresins. This is a mechanistic rationale for why omega-3 supplementation has pro-resolving effects that extend beyond simple competitive inhibition of AA-derived eicosanoids. The link between [[omega-3-metabolism]] and SPM biosynthesis is well-established biochemically but dose-response relationships for SPM production in aging humans are poorly characterized. #gap/dose-response-unclear

### Aspirin as indirect SPM inducer

Low-dose aspirin's aspirin-acetylated COX-2 generates 15-epi-LXA4 (aspirin-triggered lipoxin) and AT-RvD series with equivalent receptor potency to their native counterparts. This is proposed as a secondary mechanism for aspirin's cardiovascular benefit beyond thromboxane suppression, though no aging trial has used SPM induction as a primary endpoint.

---

## Canonical database entries

| Database | ID | Entry |
|---|---|---|
| Reactome | R-HSA-9018678 | Biosynthesis of specialized proresolving mediators (SPMs) |
| Reactome | R-HSA-9018676 | Biosynthesis of D-series resolvins (lipoxygenase route) |
| Reactome | R-HSA-9020265 | Biosynthesis of aspirin-triggered D-series resolvins |
| KEGG | hsa00590 | Arachidonic acid metabolism (includes LXA4, LXB4; partial SPM coverage) |
| WikiPathways | WP5155 | Arachidonic acid (AA) oxylipin metabolism (includes lipoxins and SPMs) |

> **KEGG coverage gap:** KEGG hsa00590 covers lipoxins but does not comprehensively represent EPA/DHA-derived SPMs (resolvins, protectins, maresins). Reactome R-HSA-9018678 is the more complete curated reference for the full four-family SPM pathway. #gap/needs-canonical-id — a dedicated KEGG map covering all four SPM families does not appear to exist; hsa00590 is the closest available entry.

---

## Cross-references

- [[fpr2]] — ALX/FPR2 receptor; biased agonism; lipoxin A4 + RvD1 pro-resolving signaling vs. LL-37 / SAA pro-inflammatory signaling; Wang 2014 AD data with LXA4 and FPR2 claims verified
- [[ll-37]] — LL-37/cathelicidin competes with lipoxin A4 at FPR2; pro-inflammatory FPR2 bias
- [[camp]] — CAMP gene; parent of LL-37; upstream of FPR2 ligand pool
- [[chronic-inflammation]] — Hallmark; SPM deficiency as mechanistic driver of inflammaging
- [[altered-intercellular-communication]] — Hallmark; SPM intercellular signaling across neutrophils, macrophages, epithelium
- [[cellular-senescence]] — SASP/PGE2 competing with SPM biosynthetic flux (proposed mechanism)
- [[15-pgdh]] — the prostaglandin-degrading gerozyme; antithetical arm of prostaglandin-flux regulation (PGDHi raises PGE2; SPMs compete with PGE2 — cross-pathway tension)
- [[sw033291]] — canonical 15-PGDH inhibitor; raises tissue PGE2 to physiologic levels
- [[nlrp3-inflammasome]] — D-series resolvins (RvD2) downregulate NLRP3 activation; cross-pathway regulation
- [[macrophage-efferocytosis]] — (implicit stub) Primary downstream effector of SPM activity
- [[arachidonic-acid-pathway]] — (implicit stub) Upstream; AA substrate pool and competing COX/LOX routing
- [[omega-3-metabolism]] — (implicit stub) Upstream; EPA + DHA precursor supply for E- and D-series SPMs
- [[inflammation-resolution]] — (implicit stub) Downstream process coordinated by SPMs
- [[gpr32]] — (implicit stub) Resolvin D1/D2/D3 receptor
- [[chemr23]] — (implicit stub) Resolvin E1/E2 receptor
- [[lgr6]] — (implicit stub) Maresin 1 receptor
- [[alox15]] — (implicit stub) 15-lipoxygenase; key biosynthetic enzyme for lipoxins and D-series SPMs
- [[alox5]] — (implicit stub) 5-lipoxygenase; second step in lipoxin and D-series resolvin synthesis
- [[alox12]] — (implicit stub) 12-lipoxygenase; key enzyme for maresin biosynthesis

---

## Limitations and gaps

- **Human cohort data is sparse.** Most evidence for SPM decline with age comes from cross-sectional data or disease cohorts (AD, hypertension) rather than prospective aging cohorts with quantified circulating SPM levels. #gap/needs-replication
- **Receptor identity for protectins is incomplete.** PD1/NPD1 lacks a confirmed specific cognate receptor, limiting receptor-targeted therapeutic design. #gap/no-mechanism
- **LGR6 as MaR1 receptor needs confirmation.** The LGR6/MaR1 pairing has been proposed but requires additional replication. #gap/needs-replication
- **No SPM-class intervention in aging clinical trials.** The field remains in the stable-analog development stage. #gap/needs-human-replication
- **SPM precursor supplementation dose-response.** Optimal EPA/DHA supplementation to maximize SPM biosynthesis in aged individuals is undefined. #gap/dose-response-unclear
- **SASP–SPM competition mechanism.** The proposed feedforward loop between SASP-derived PGE2 and reduced SPM biosynthesis is mechanistically plausible but not directly demonstrated in aged tissue. #gap/no-mechanism

---

## Footnotes

[^serhan2014]: doi:10.1038/nature13479 · review · n=not applicable · Serhan CN · *Nature* 2014 · comprehensive SPM family overview; defines 4-class framework; biosynthetic routes; receptor pharmacology; local: not_oa (download failed) #gap/no-fulltext-access; title and metadata verified via Crossref
[^serhan2018jci]: doi:10.1172/JCI97943 · review · n=not applicable · Serhan CN, Levy BD · *J Clin Invest* 2018 · resolvin, protectin, maresin families; quantitative resolution indices; immunoresolvent therapeutic framing · local: completed (PDF available)
[^chiang2017]: doi:10.1016/j.mam.2017.03.005 · review · n=not applicable · Chiang N, Serhan CN · *Mol Aspects Med* 2017 · structural elucidation of SPMs and receptor pharmacology (GPR32, ChemR23, LGR6, ALX/FPR2) · local: not_oa (download failed) #gap/no-fulltext-access
[^dalli2017]: doi:10.3389/fimmu.2017.01400 · review · n=not applicable · Dalli J, Serhan CN · *Front Immunol* 2017 · SPM families (resolvins, protectins, maresins) in macrophage biology; microvesicle regulation of efferocytosis and SPM biosynthesis; maresin bioactive metabolome (MaR1, MaR2, MCTRs); tissue regeneration; identified in resolving exudates, mouse infectious exudates, human macrophages, spleens, plasma · local: verified (PDF downloaded)
[^doyle2018]: doi:10.1016/j.smim.2018.09.002 · review · n=not applicable · Doyle R, Godson C · *Semin Immunol* 2018 · SPMs as agents of anti-ageing; age-related SPM decline; AD, atherosclerosis, obesity · local: not_oa (closed access); DOI verified via DOI lookup
[^ponce2022]: doi:10.3389/fnagi.2022.780811 · review · n=not applicable · Ponce J et al. · *Front Aging Neurosci* 2022 · SPMs in Alzheimer's and Parkinson's disease; neuroinflammation resolution · local: verified (PDF downloaded)
[^romano2006]: doi:10.2174/187152806776383152 · review · n=not applicable · Romano M · *Inflamm Allergy Drug Targets* 2006 · lipoxins as promoters of inflammation resolution; aspirin-triggered 15-epi-LXA4 · local: not confirmed in archive
[^zhang2023]: doi:10.1161/HYPERTENSIONAHA.123.21348 · in-vivo (mouse) · n=not specified · Zhang J et al. · *Hypertension* 2023 · RvE1/ChemR23 axis protects against hypertension and vascular remodeling in Angiotensin II–induced hypertensive mice; human patient data not confirmed from this source · local: not_oa (closed access)
[^mehrotra2022]: doi:10.1038/s41573-022-00470-y · review · n=not applicable · Mehrotra P, Ravichandran KS · *Nat Rev Drug Discov* 2022 · drugging efferocytosis; SPM pharmacology; macrophage clearance mechanisms · local: verified (PDF downloaded)
