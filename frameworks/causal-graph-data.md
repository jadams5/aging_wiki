---
type: framework
aliases: [causal graph edges, hallmark edges, hallmark causal edge list]
sources: ["[[frameworks/hallmark-causality-graph]]"]
covers: [edge-list]
---

# Hallmark Causal Graph — Edge Data

> ⚠️ Auto-extracted by Claude on 2026-05-05. Each edge's `wiki-page-evidence` field points to a verified (or verified-partial) atomic page where the supporting claim lives. Follow those links for n, p-values, and methodology. Evidence-strength ratings: `strong` = multiple independent lines or >1 replicated interventional study; `moderate` = single well-powered study or consistent mechanism without interventional proof; `weak` = mechanistic inference with limited direct evidence; `disputed` = contradictory or heavily contested evidence.

## Edge list

| upstream-hallmark | downstream-hallmark | evidence-strength | key-citation | wiki-page-evidence |
|---|---|---|---|---|
| [[genomic-instability]] | [[cellular-senescence]] | strong | Tyner 2002 (p53 m-allele); Rodier 2009 (DDR → SASP two-arm model) | [[hallmarks/genomic-instability]] verified · [[hallmarks/cellular-senescence]] verified |
| [[genomic-instability]] | [[chronic-inflammation]] | strong | Rodier 2009 (ATM-dependent SASP); Jaiswal 2014 (CHIP TET2-macrophage IL-1β/IL-6) | [[hallmarks/genomic-instability]] verified · [[hallmarks/chronic-inflammation]] verified |
| [[genomic-instability]] | [[clonal-hematopoiesis]] | strong | Jaiswal 2014 (n=17,182; HR 11.1 hematologic cancer; HR 2.0 CHD); Genovese 2014 (n=12,380) | [[hallmarks/genomic-instability]] verified · [[hematopoietic-stem-cells]] verified |
| [[telomere-attrition]] | [[cellular-senescence]] | strong | Bodnar 1998 / Hayflick; Celli & de Lange 2005 (TRF2 → DDR in MEFs); Bernardes de Jesus 2012 (AAV-TERT reverses) | [[hallmarks/telomere-attrition]] verified |
| [[telomere-attrition]] | [[stem-cell-exhaustion]] | strong | p21 KO in late-generation Terc−/− mice rescues stem cell function; HSC serial-transplantation telomere requirement | [[hallmarks/telomere-attrition]] verified · [[hallmarks/stem-cell-exhaustion]] verified |
| [[telomere-attrition]] | [[genomic-instability]] | moderate | Dysfunctional telomeres processed as DSBs; end-to-end fusions → breakage-fusion-bridge cycles amplify genomic instability | [[hallmarks/telomere-attrition]] verified · [[hallmarks/genomic-instability]] verified |
| [[epigenetic-alterations]] | [[cellular-senescence]] | moderate | Yang 2023 ICE: site-specific DSBs redistribute chromatin regulators → epigenetic clock acceleration → aging-like phenotypes; OSK reversal | [[hallmarks/epigenetic-alterations]] verified · [[hypotheses/information-theory-of-aging]] verified |
| [[epigenetic-alterations]] | [[stem-cell-exhaustion]] | moderate | HSC myeloid bias: methylation drift at lymphoid loci (Beerman 2010) correlates with and may causally underlie myeloid skewing with age | [[hallmarks/stem-cell-exhaustion]] verified · [[hematopoietic-stem-cells]] verified |
| [[cellular-senescence]] | [[chronic-inflammation]] | strong | SASP → IL-6, IL-8, IL-1β; Hickson 2019 D+Q senolysis → circulating SASP reduction; CANTOS (anti-IL-1β MACE HR 0.85) provides reverse-evidence | [[hallmarks/cellular-senescence]] verified · [[hallmarks/chronic-inflammation]] verified · [[sasp]] verified |
| [[cellular-senescence]] | [[stem-cell-exhaustion]] | moderate | Senescent niche stromal cells (SASP) disrupt HSC and satellite cell niches; Sousa-Victor 2014 geriatric satellite cells → p16+ irreversible senescence | [[hallmarks/cellular-senescence]] verified · [[hallmarks/stem-cell-exhaustion]] verified · [[satellite-cells]] verified |
| [[cellular-senescence]] | [[altered-intercellular-communication]] | moderate | SASP is the primary paracrine signal disruption in aged tissue; SASP factors (IL-6, MMPs, TGF-β) disrupt niche homeostatic signals at multiple tissue sites | [[hallmarks/cellular-senescence]] verified · [[sasp]] verified · [[hallmarks/altered-intercellular-communication]] verified |
| [[deregulated-nutrient-sensing]] | [[disabled-macroautophagy]] | strong | mTORC1 → ULK1 Ser757 inhibition → autophagy suppression; genetic epistasis: autophagy KO abolishes CR/rapamycin longevity benefit in worms, flies | [[hallmarks/deregulated-nutrient-sensing]] verified · [[hallmarks/disabled-macroautophagy]] verified · [[mtor]] verified · [[ampk]] verified |
| [[deregulated-nutrient-sensing]] | [[cellular-senescence]] | moderate | mTOR drives SASP translation in senescent cells (via 4E-BP1 / MK2 axis); mTOR inhibition reduces SASP output (verified senomorphic mechanism) | [[hallmarks/deregulated-nutrient-sensing]] verified · [[hallmarks/cellular-senescence]] verified · [[mtor]] verified |
| [[deregulated-nutrient-sensing]] | [[mitochondrial-dysfunction]] | moderate | mTOR suppresses mitophagy (ULK1 inhibition); AMPK activates mitophagy and biogenesis (PGC-1α); chronic mTOR over-activation → mitophagy impairment → organelle accumulation | [[hallmarks/deregulated-nutrient-sensing]] verified · [[hallmarks/mitochondrial-dysfunction]] verified |
| [[deregulated-nutrient-sensing]] | [[stem-cell-exhaustion]] | moderate | mTOR hyperactivation forces HSC exit from quiescence; rapamycin in aged mice improves HSC function; IIS regulates HSC quiescence via FOXO | [[hallmarks/deregulated-nutrient-sensing]] verified · [[hallmarks/stem-cell-exhaustion]] verified |
| [[disabled-macroautophagy]] | [[loss-of-proteostasis]] | strong | Atg5 KO (Hara 2006) + Atg7 KO (Komatsu 2006) → ubiquitin/p62+ inclusions + neurodegeneration; autophagy epistasis for proteostasis maintenance in post-mitotic cells | [[hallmarks/disabled-macroautophagy]] verified · [[hallmarks/loss-of-proteostasis]] verified · [[atg7]] verified · [[atg5]] verified |
| [[disabled-macroautophagy]] | [[mitochondrial-dysfunction]] | strong | Impaired mitophagy allows damaged, ROS-generating mitochondria to accumulate; PINK1/Parkin pathway requires functional autophagy machinery downstream | [[hallmarks/disabled-macroautophagy]] verified · [[hallmarks/mitochondrial-dysfunction]] verified · [[mitophagy]] verified |
| [[disabled-macroautophagy]] | [[chronic-inflammation]] | moderate | Autophagy limits SASP secretion and clears DAMP-generating debris; impaired autophagy → p62 accumulation → NF-κB activation | [[hallmarks/disabled-macroautophagy]] verified · [[nf-kb]] verified |
| [[mitochondrial-dysfunction]] | [[cellular-senescence]] | disputed | Wiley et al.: mitochondrial dysfunction (without DNA damage) induces MiDAS variant of senescence via ROS → mTORC1 → NAD+/NADH imbalance; counter-evidence: senescence → secondary mito dysfunction (Anderson 2019 cardiomyocytes) | [[hallmarks/mitochondrial-dysfunction]] verified · [[hallmarks/cellular-senescence]] verified · [[sasp]] verified |
| [[mitochondrial-dysfunction]] | [[chronic-inflammation]] | moderate | Mitochondrial DAMPs (mtDNA, cardiolipin, TFAM) → cGAS-STING, TLR9, NLRP3 inflammasome → NF-κB; failed mitophagy → NLRP3 priming | [[hallmarks/mitochondrial-dysfunction]] verified · [[hallmarks/chronic-inflammation]] verified · [[nf-kb]] verified |
| [[mitochondrial-dysfunction]] | [[loss-of-proteostasis]] | moderate | Reduced mitophagy flux allows damaged organelle accumulation; elevated mtROS damages proteins → aggregate load increases | [[hallmarks/mitochondrial-dysfunction]] verified · [[hallmarks/loss-of-proteostasis]] verified |
| [[loss-of-proteostasis]] | [[neurodegeneration]] | strong | Hara 2006 + Komatsu 2006 ATG KO → neurodegeneration; aggregates in AD (Aβ/tau), PD (α-syn), ALS (TDP-43) are all proteostasis-failure outputs | [[hallmarks/loss-of-proteostasis]] verified · [[neurodegeneration]] verified-partial · [[alzheimers-disease]] verified-partial |
| [[chronic-inflammation]] | [[stem-cell-exhaustion]] | moderate | Inflammaging cytokines (TNF-α, IL-6) → myeloid HSC bias (Beerman 2010); SASP impairs satellite cell activation (TGF-β from SASP) | [[hallmarks/chronic-inflammation]] verified · [[hallmarks/stem-cell-exhaustion]] verified · [[hematopoietic-stem-cells]] verified |
| [[chronic-inflammation]] | [[atherosclerosis]] | strong | CANTOS: canakinumab anti-IL-1β MACE HR 0.85 (95% CI 0.74–0.98, p=0.021; Ridker 2017, n=10,061); plaque senescent-cell clearance ~60% in mouse (Childs 2016) | [[hallmarks/chronic-inflammation]] verified · [[atherosclerosis]] verified-partial |
| [[chronic-inflammation]] | [[clonal-hematopoiesis]] (cardiovascular outcome) | moderate | CHIP TET2-mutant macrophages → excess IL-1β/IL-6 → cardiovascular risk (Jaiswal 2014 HR 2.0 CHD); bidirectional: CHIP drives chronic inflammation | [[hallmarks/chronic-inflammation]] verified · [[hematopoietic-stem-cells]] verified |
| [[dysbiosis]] | [[chronic-inflammation]] | moderate | LPS translocation → TLR4 → NF-κB → cytokines; Claesson 2012 ELDERMET: long-stay subjects (highest frailty/dysbiosis) had highest IL-6/CRP; diet is the dominant upstream driver per Claesson 2012 | [[hallmarks/dysbiosis]] verified · [[hallmarks/chronic-inflammation]] verified |
| [[dysbiosis]] | [[altered-intercellular-communication]] | moderate | Microbiome-derived metabolites (SCFAs, urolithins, TMAO, bile acids) are systemic signaling molecules; dysbiosis disrupts this communication network | [[hallmarks/dysbiosis]] verified · [[hallmarks/altered-intercellular-communication]] verified |
| [[altered-intercellular-communication]] | [[stem-cell-exhaustion]] | weak | Heterochronic parabiosis (Conboy 2005): young systemic factors rescue aged satellite cell function; the causal factor(s) are contested (GDF11 controversy) | [[hallmarks/altered-intercellular-communication]] verified · [[hallmarks/stem-cell-exhaustion]] verified · [[satellite-cells]] verified |
| [[stem-cell-exhaustion]] | [[sarcopenia]] | strong | Satellite cell functional decline (Sousa-Victor 2014 p16+ geriatric arrest; Conboy 2005 niche rescue) is a primary contributor to sarcopenia; multi-factorial but established | [[hallmarks/stem-cell-exhaustion]] verified · [[sarcopenia]] verified |
| [[stem-cell-exhaustion]] | [[immunosenescence]] | strong | HSC myeloid bias → reduced naive lymphocyte output → immunosenescence; consistent across species | [[hallmarks/stem-cell-exhaustion]] verified · [[hematopoietic-stem-cells]] verified · [[immunosenescence]] verified-partial |
| [[stem-cell-exhaustion]] | [[chronic-inflammation]] (feedback) | moderate | CHIP-bearing TET2-mutant macrophages overproduce IL-1β/IL-6 → amplifies systemic inflammaging; closes a feed-forward loop | [[hallmarks/stem-cell-exhaustion]] verified · [[hallmarks/chronic-inflammation]] verified · [[hematopoietic-stem-cells]] verified |
| [[epigenetic-alterations]] | [[deregulated-nutrient-sensing]] | weak | SIRT1 (histone deacetylase) decline with NAD+ loss links epigenetic maintenance to nutrient-sensing pathway activity; indirect mechanistic link via NAD+ availability | [[hallmarks/epigenetic-alterations]] verified · [[sirtuin]] verified · [[hallmarks/deregulated-nutrient-sensing]] verified |

## Edge summary statistics

- Total directed edges: 34
- Strong: 11
- Moderate: 17
- Weak: 3
- Disputed: 1 (mitochondrial-dysfunction ↔ cellular-senescence, both directions)

## Nodes with most outbound edges (most causally upstream)

| Hallmark | Outbound edges | Role |
|---|---|---|
| [[genomic-instability]] | 3 | Proximal damage accumulator; drives DDR-senescence and CHIP-inflammation |
| [[deregulated-nutrient-sensing]] | 4 | Central metabolic regulator; drives autophagy, senescence, mito, stem cells |
| [[cellular-senescence]] | 3 | Key intermediate; drives inflammation, niche disruption, signal noise |
| [[disabled-macroautophagy]] | 3 | Autophagy decline drives proteostasis, mitochondria, inflammation |
| [[mitochondrial-dysfunction]] | 3 | Cross-tier node; drives inflammation, proteostasis, senescence (disputed direction) |

## Nodes with most inbound edges (most causally downstream / integrative)

| Hallmark | Inbound edges | Role |
|---|---|---|
| [[chronic-inflammation]] | 7 | Downstream integrator of nearly every upstream hallmark |
| [[cellular-senescence]] | 4 | Key intermediate: receives from proximal damage, sends to integrative outcomes |
| [[stem-cell-exhaustion]] | 5 | Terminal integrator across multiple organ systems |
| [[loss-of-proteostasis]] | 3 | Receives from autophagy, mitochondria; outputs to neurodegeneration |
| [[mitochondrial-dysfunction]] | 3 | Cross-tier: receives from nutrient sensing, autophagy |

## Bidirectional edges (mutual reinforcement loops)

These edges are positive feedback loops — once both hallmarks are active, they amplify each other:

| Edge | Loop mechanism |
|---|---|
| [[cellular-senescence]] ↔ [[chronic-inflammation]] | SASP drives inflammation; inflammaging promotes paracrine senescence |
| [[dysbiosis]] ↔ [[chronic-inflammation]] | LPS drives inflammation; inflammaging disrupts gut barrier |
| [[stem-cell-exhaustion]] ↔ [[chronic-inflammation]] | CHIP-macrophages secrete IL-1β; inflammaging impairs HSC function |
| [[mitochondrial-dysfunction]] ↔ [[cellular-senescence]] | MiDAS senescence (disputed); senescent cells accumulate dysfunctional mitochondria |

---

## Edge-blocker tracker

> R45 schema addition (2026-05-20). The edge table above captures *causal evidence*. This section captures the *intervention-tractability and experimental-resolution* layer — what would it take to either unlock a clinical intervention at the upstream node, or tighten/refute a disputed edge? Each row links to a `type: experiment` page in `experiments/` where the proposed resolving study lives.

Three columns are tracked per edge: `upstream-tractability`, `resolving-experiment`, `experiment-scale`. Each is defined below; the populated table is in the next subsection.

### Column 1 — upstream-tractability

How feasible is it, with 2026 clinical tooling, to therapeutically modulate the upstream node such that the downstream edge effect is reduced? This is a *per-edge* rating rather than a *per-node* one, because the edge may depend on a specific sub-mechanism that is more or less tractable than the upstream hallmark overall. Aligned with the `intervention-tractability:` field on hallmark pages (R14 schema).

| Tier | Definition | Worked example |
|---|---|---|
| **`none`** | No known intervention modulates the upstream node in any model organism for this edge. The mechanism is described but not actionable. | (Currently no edges in this matrix sit here; included for completeness as the bottom of the scale.) |
| **`low`** | Preclinical candidates only (mouse, in-vitro, cell-culture proof-of-concept). Either no human safety data exists, or human Phase 1 is ongoing without an efficacy readout. The mechanism is real but not deployable. | `[[genomic-instability]] → [[cellular-senescence]]` — DDR-restoration in aged human tissue has no validated tool; AAV-CIRBP and NMR-style HR-enhancement are preclinical. |
| **`moderate`** | At least one clinical-stage candidate exists with human safety data, but efficacy is null, contested, or indication-bounded. Includes drugs FDA-approved for non-aging indications without aging-context efficacy translation (rapamycin off-label after PEARL 2025 + RAPA-EX-01 2026 nulls); biomarker-only readouts without hard endpoints; gene therapies in single-tissue Phase 1; mechanism-validated but trial-pending. | `[[epigenetic-alterations]] → [[cellular-senescence]]` — CR slows DunedinPACE (CALERIE-2); OSK retina-bounded in mouse (Lu 2020); no systemic human tool. |
| **`high`** | At least one validated human intervention exists with documented engagement of THIS specific edge. Hard endpoint or strong biomarker; replication across labs; an aging-context indication is established. | `[[cellular-senescence]] → [[chronic-inflammation]]` — D+Q reduces circulating SASP markers (Hickson 2019, n=9, p<0.05); UBX1325 intravitreal +5.6 ETDRS letters in BEHOLD DME (NEJM Evidence 2025). |

**Per-edge nuance:** a node may carry `intervention-tractability: high` on its hallmark page but receive a lower per-edge rating in this matrix if the available intervention engages a different sub-mechanism than what this edge depends on. Example: [[cellular-senescence]] is `high` at the node level, but the [[cellular-senescence]] → [[stem-cell-exhaustion]] edge is `high` only contingent on whether senolytic clearance generalizes from D+Q-tractable adipose/lung tissues to satellite-cell or HSC niches — a sub-question not yet clinically resolved. Use the per-edge rating; when it differs from the node-level field, document the rationale briefly in body.

**Distinction from `evidence-strength` (in the edge table above):** `evidence-strength` rates how well-established the causal edge is in nature; `upstream-tractability` rates how well we can intervene on it clinically. The two are orthogonal: an edge can be `strong` evidence + `low` tractability (well-established cascade we can't yet act on), or `disputed` evidence + `moderate` tractability (the mechanism is contested but a drug is in the clinic anyway).

### Column 2 — resolving-experiment

The experiment that would either (a) resolve a disputed/weak edge, (b) unlock an intervention at the upstream node, or (c) close a missing-mechanism gap. Wikilink to the `experiments/` page; `null` if not yet drafted.

### Column 3 — experiment-scale

Feasibility tier. Mirrors the `scale:` field on the experiment page.

**The fundamental boundary is between lab and clinic.** Lab work has no living human participants — it operates on cells, tissues, animal models, or ex-vivo human samples (cadaver-derived tissue, biobank specimens, residual surgical material). Clinical work has living human participants under IRB + (where a drug or device is involved) IND oversight, with informed consent and ICH-GCP discipline. The regulatory floor, timeline, and cost step-change at this boundary.

| Tier               | Subjects                                                                                                                           | Regulatory floor                                                                                                                               | Typical n                                     | Typical duration           | Typical cost                                | Worked example                                                                                                                                                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`small-lab`**    | Cells, tissues, animal models, ex-vivo human samples. No living human subjects.                                                    | IBC (biosafety); IACUC if vertebrate animals; IRB if human-derived samples but no living-subject interaction (tissue bank, residual material). | Cell-line/donor n=3–20; mouse cohort n=10–60. | 6–24 months.               | $30k–$500k.                                 | All four ECM-crosslink experiments in this folder: [[experiments/midas-cell-type-stratification]], [[experiments/age-breaker-lcms-replication]], [[experiments/faod-directed-evolution-glucosepane]], [[experiments/glucosepane-monoclonal-antibody]]. |
| **`small-clinic`** | Living human participants. Phase 1 or single-arm Phase 2. Typically first-in-human or indication-bounded.                          | IRB + IND (drugs) or IDE (devices); ICH-GCP; informed consent; FDA pre-IND meeting.                                                            | n=10–100.                                     | 1–3 yr (trial + analysis). | $1M–$10M (academic); higher commercial.     | AAV-TERT Phase 1 in cardiomyopathy; OSK indication-bounded Phase 1 in optic neuropathy; TRIIM-X-class thymic regeneration Phase 1/2.                                                                                                                   |
| **`large-clinic`** | Randomized controlled trials with hard or surrogate endpoints. Phase 2 / Phase 3. Single institution or small consortium.          | Full IRB + IND + DSMB; ICH-GCP; site-monitoring discipline.                                                                                    | n=100–1000.                                   | 2–5 yr.                    | $10M–$100M.                                 | Biomarker-stratified senolytic Phase 2 (Farr 2024 quercetin follow-on); senescent-cell-PET-tracer-enabled trial design ([[experiments/senescent-cell-pet-tracer]] Phase 2+); PEARL-style rapamycin healthy-adult RCT.                                  |
| **`multi-site`**   | Large-scale Phase 3 / Phase 4 / large prospective epidemiology. Distributed across institutions or countries.                      | Full clinical-trial discipline at each site; international harmonization (ICH); regulatory submission for approval.                            | n=1,000–50,000+.                              | 3–8 yr.                    | $50M–$500M+.                                | CANTOS-scale anti-IL-1β cardiovascular outcomes (n=10,061); Mannick-style mTORC1 immune-aging Phase 3.                                                                                                                                                 |
| **`multi-decade`** | Lifespan trials in humans; generational longitudinal cohorts (NHANES, UK Biobank, Framingham); cross-generational genetic studies. | Long-term cohort discipline; data-governance + privacy frameworks; institutional commitment > PI tenure.                                       | n=10,000+ typical for cohort.                 | 10–50+ yr.                 | $100M–billions over the life of the cohort. | A true human-lifespan RCT for any aging intervention (does not yet exist); longevity-escape-velocity-relevant longitudinal endpoint cohorts.                                                                                                           |

**Why the lab→clinic boundary matters for the matrix:** when a `resolving-experiment` sits at `small-lab` scale, it can be funded by a single PI grant, run in 1–2 years, and produce a binary signal that updates the matrix directly. When the resolving experiment is `small-clinic` or higher, the resolution timeline is 3+ years from funding, the cost grows by orders of magnitude, and the matrix update is gated by trial readouts that lie outside any single research program's control. This is the matrix's leverage-discovery function: rows where the resolving experiment is `small-lab` are operationally unblocked even when the underlying biology is not yet fully understood — they are where a small program can directly tighten the matrix without waiting on industry or large-consortium trials.

**`small-lab` includes preclinical animal in-vivo work** despite the name; the term refers to the absence of living human subjects + the single-PI scale, not literally to bench-only work. A mouse-cohort efficacy study (e.g., AAV-TERT in aged C57BL/6) is `small-lab` until it expands to a primate or human Phase 1, at which point it becomes `small-clinic`. The boundary tracks subjects + regulatory floor, not the literal location of the work.

### Edge-blocker table

| Edge                                                                               | Upstream tractability | Resolving experiment                                                                                | Scale        |
| ---------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------- | ------------ |
| [[genomic-instability]] → [[cellular-senescence]]                                  | low                   | null (open: AAV-CIRBP or NMR-cGAS HR-enhancement Phase 1 — needs separate proposal)                 | small-clinic |
| [[genomic-instability]] → [[chronic-inflammation]]                                 | low                   | null (open: CHIP-clone-targeted JAK inhibition Phase 2 stratified by clone-VAF)                     | large-clinic |
| [[genomic-instability]] → [[clonal-hematopoiesis]]                                 | low                   | null (open: allele-selective ASO against driver SNVs — DNMT3A, TET2 hotspots)                       | small-clinic |
| [[telomere-attrition]] → [[cellular-senescence]]                                   | low                   | null (open: AAV-TERT Phase 1 in cardiac or BMF indication)                                          | small-clinic |
| [[telomere-attrition]] → [[stem-cell-exhaustion]]                                  | low                   | null                                                                                                | small-clinic |
| [[telomere-attrition]] → [[genomic-instability]]                                   | low                   | null                                                                                                | —            |
| [[epigenetic-alterations]] → [[cellular-senescence]]                               | moderate              | null (open: indication-bounded OSK Phase 1 — optic neuropathy, Lu 2020 precedent)                   | small-clinic |
| [[epigenetic-alterations]] → [[stem-cell-exhaustion]]                              | moderate              | null                                                                                                | —            |
| [[cellular-senescence]] → [[chronic-inflammation]]                                 | high                  | null (open: biomarker-stratified senolytic Phase 2 — requires senescent-cell PET tracer, see below) | large-clinic |
| [[cellular-senescence]] → [[stem-cell-exhaustion]]                                 | high                  | null                                                                                                | —            |
| [[cellular-senescence]] → [[altered-intercellular-communication]]                  | high                  | null                                                                                                | —            |
| [[deregulated-nutrient-sensing]] → [[disabled-macroautophagy]]                     | high                  | null (open: 4E-BP1-biased rapalog Phase 1; mTORC2-sparing selective mTORC1 inhibitor)               | small-clinic |
| [[deregulated-nutrient-sensing]] → [[cellular-senescence]]                         | high                  | null                                                                                                | —            |
| [[deregulated-nutrient-sensing]] → [[mitochondrial-dysfunction]]                   | high                  | null                                                                                                | —            |
| [[deregulated-nutrient-sensing]] → [[stem-cell-exhaustion]]                        | high                  | null                                                                                                | —            |
| [[disabled-macroautophagy]] → [[loss-of-proteostasis]]                             | high                  | null (open: TFEB-activator gene therapy Phase 1 in lysosomal storage disease)                       | small-clinic |
| [[disabled-macroautophagy]] → [[mitochondrial-dysfunction]]                        | high                  | null                                                                                                | —            |
| [[disabled-macroautophagy]] → [[chronic-inflammation]]                             | high                  | null                                                                                                | —            |
| [[mitochondrial-dysfunction]] → [[cellular-senescence]] *(disputed)*               | moderate              | [[experiments/midas-cell-type-stratification]]                                                      | small-lab    |
| [[mitochondrial-dysfunction]] → [[chronic-inflammation]]                           | moderate              | null                                                                                                | —            |
| [[mitochondrial-dysfunction]] → [[loss-of-proteostasis]]                           | moderate              | null                                                                                                | —            |
| [[loss-of-proteostasis]] → [[neurodegeneration]]                                   | moderate              | null (open: engineered-hydrolase Phase 1 for A2E in atrophic AMD — LysoSENS proof-of-concept)       | small-clinic |
| [[chronic-inflammation]] → [[stem-cell-exhaustion]]                                | high                  | null                                                                                                | —            |
| [[chronic-inflammation]] → [[atherosclerosis]]                                     | high                  | null (canakinumab CANTOS-precedent; cost-prohibitive; IL-6-axis follow-ons in trial)                | —            |
| [[chronic-inflammation]] → [[clonal-hematopoiesis]]                                | high                  | null                                                                                                | —            |
| [[dysbiosis]] → [[chronic-inflammation]]                                           | moderate              | null (open: synthetic-consortium Phase 1 in IBD → aging-context FMT trial with frailty primary)     | small-clinic |
| [[dysbiosis]] → [[altered-intercellular-communication]]                            | moderate              | null                                                                                                | —            |
| [[altered-intercellular-communication]] → [[stem-cell-exhaustion]] *(weak; GDF11)* | moderate              | null (open: heterochronic plasma dilution Phase 2 — Conboy lab follow-on)                           | small-clinic |
| [[stem-cell-exhaustion]] → [[sarcopenia]]                                          | low                   | null                                                                                                | —            |
| [[stem-cell-exhaustion]] → [[immunosenescence]]                                    | low                   | null (open: TRIIM-X Phase 2 readout pending — recombinant FOXN1 / IL-7-LA Phase 1 follow-on)        | small-clinic |
| [[stem-cell-exhaustion]] → [[chronic-inflammation]]                                | low                   | null                                                                                                | —            |
| [[epigenetic-alterations]] → [[deregulated-nutrient-sensing]] *(weak)*             | moderate              | null                                                                                                | —            |

**Read across:**
- 11 of 34 edges flow from a `low`-tractability upstream node — these are the structural blockers. Almost all of Tier 1 (genomic instability, telomere attrition) is in this bucket.
- 17 edges flow from a `moderate` or `high`-tractability node but have `null` resolving experiments — these are interventions waiting for trial readouts, dose discovery, or biomarker development; they are *operationally blocked* rather than *biologically blocked*.
- Only 1 edge (mito → senescence, disputed) is currently resolved-by a small-lab experiment. This is the lowest-cost / fastest-feedback row.

---

## Missing-node blockers

> R45 schema addition. The López-Otín 12-hallmark frame underweights two damage classes that the SENS frame treats as primary: extracellular matrix crosslinks (GlycoSENS) and intracellular indigestible aggregates (LysoSENS). Both feed into existing hallmark nodes and have characteristic downstream phenotypes, but are not first-class nodes in the matrix above. Surfacing them here lets the leverage ranking capture them. Each missing node is anchored to existing wiki process pages.

### ECM crosslinks (GlycoSENS)

**Canonical pages:** [[processes/glucosepane]] (verified), [[processes/advanced-glycation-end-products]], [[processes/pentosidine]], [[processes/carboxymethyl-lysine]], [[interventions/pharmacological/age-crosslink-breakers]] (verified)

**Why missing from the hallmark frame:** López-Otín's [[altered-intercellular-communication]] hallmark loosely absorbs ECM-stiffening as a "communication" phenotype, but ECM crosslinking is structurally a damage-accumulation class — molecularly distinct, mechanistically irreversible, and not driven by signaling deregulation. Folding it into intercellular communication obscures its primary causal role.

**Inbound edges (drivers):**

| upstream | → downstream | evidence-strength | key-citation |
|---|---|---|---|
| hyperglycemic-state / chronic methylglyoxal flux *(not a hallmark)* | → ECM-crosslinks | strong | Sell 2005: skin glucosepane ~2000 pmol/mg nondiabetic age-90 vs ~5000 pmol/mg DM age-matched |
| [[mitochondrial-dysfunction]] | → ECM-crosslinks | moderate | Mitochondrial ROS → lipid peroxidation → α-dicarbonyl flux (MG, glyoxal) → Schiff bases on long-lived ECM lysine/arginine |
| [[deregulated-nutrient-sensing]] | → ECM-crosslinks | moderate | mTOR/IIS deregulation → impaired mitophagy → mitochondrial ROS (above); also hyperglycemia in insulin-resistant states |

**Outbound edges (downstream effects):**

| edge | downstream | evidence-strength | key-citation |
|---|---|---|---|
| ECM-crosslinks | → [[altered-intercellular-communication]] | strong | ECM stiffness disrupts mechanotransduction (YAP/TAZ pathway) in fibroblasts, satellite cells, HSC niche |
| ECM-crosslinks | → [[chronic-inflammation]] | moderate | RAGE engagement → NF-κB; positive-feedback amplification via RAGE upregulation; [[rage]] |
| ECM-crosslinks | → [[arterial-stiffening]] | strong | PWV correlates with skin autofluorescence; arterial collagen glucosepane drives intrinsic wall stiffness independent of vasomotor tone |
| ECM-crosslinks | → [[stem-cell-exhaustion]] | weak-moderate | Substrate stiffness alters fibroblast/satellite cell/MSC fate decisions (Engler 2006 mechanotransduction precedent); aged-niche stiffness → niche-dysfunction |

**Tractability:** `low`. No clinically-deployable AGE breaker exists. Alagebrium failed Phase 3 BENEFICIAL (Hartog 2011, peak VO₂ p=0.06). Yang 2003 critique (model α-dicarbonyl crosslinks ≠ real-tissue Maillard crosslinks) is unresolved. Revel Pharmaceuticals had a glucosepane-enzyme reproducibility setback (industry-watcher reporting, unverified primary). Tier 3 defense (mature-crosslink cleavage) is genuinely empty across all of biology — no mammalian, fungal, bacterial, or archaeal enzyme cleaves glucosepane or pentosidine.

**Resolving experiments:**
- [[experiments/age-breaker-lcms-replication]] — does any current "AGE breaker" cleave glucosepane in aged human cadaver tissue?
- [[experiments/faod-directed-evolution-glucosepane]] — engineer a Tier-3 defense that doesn't exist in biology
- [[experiments/glucosepane-monoclonal-antibody]] — enable population-level IHC quantification + AGE-breaker screening throughput

### Intracellular indigestible aggregates (LysoSENS)

**Canonical pages:** [[processes/lipofuscin]] (verified-false; closed-access blocker), [[7-ketocholesterol]]

**Why missing from the hallmark frame:** López-Otín's [[loss-of-proteostasis]] hallmark covers protein aggregates (Aβ, tau, α-syn) but indigestible *lipid-protein-crosslink* aggregates (lipofuscin, A2E, oxidized cholesterol byproducts) are mechanistically distinct: they overwhelm lysosomal degradation by being chemically un-cleavable rather than by exceeding capacity. They accumulate predominantly in long-lived post-mitotic cells (cardiomyocytes, neurons, RPE) that cannot be cleared by cell turnover.

**Inbound edges (drivers):**

| upstream | → downstream | evidence-strength |
|---|---|---|
| [[disabled-macroautophagy]] | → LysoSENS-aggregates | strong (failed autophagic clearance permits aggregate growth) |
| [[mitochondrial-dysfunction]] | → LysoSENS-aggregates | moderate (mtROS → lipid peroxidation → lipofuscin precursors) |
| [[chronic-inflammation]] | → LysoSENS-aggregates | moderate (oxLDL → 7-ketocholesterol intracellular accumulation in macrophages, RPE) |

**Outbound edges (downstream effects):**

| edge | downstream | evidence-strength |
|---|---|---|
| LysoSENS-aggregates | → [[loss-of-proteostasis]] | moderate (overwhelmed lysosomes spillover-impair protein degradation) |
| LysoSENS-aggregates | → [[cellular-senescence]] | weak (lipofuscin marks senescent cells; causal direction contested — Chiavacci 2026 Greenland shark shows lipofuscin compatible with preserved cardiac function) |
| LysoSENS-aggregates | → [[mitochondrial-dysfunction]] | moderate (dysfunctional lysosomes → impaired mitophagy → bidirectional with autophagy/mito) |

**Tractability:** `low`. No human-deployable tool for clearing intracellular indigestible aggregates exists. Underdog Pharmaceuticals (A2E in atrophic AMD) is the lead clinical program; preclinical only. Engineered-hydrolase strategy (soil-bacteria-derived cleaving enzymes targeted to lysosomes) is the canonical SENS-LysoSENS approach.

**Resolving experiments:** null (open: engineered-hydrolase Phase 1 in atrophic AMD would be the first clinical proof-of-concept). No small-lab-tractable resolving experiment currently drafted.

---

## See also

- [[frameworks/hallmark-causality-graph]] — prose interpretation, tier assignments, intervention-sequencing implications
- [[hallmarks-of-aging]] — parent MOC with full hallmark summaries
