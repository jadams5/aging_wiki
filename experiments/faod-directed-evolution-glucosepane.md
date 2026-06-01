---
type: experiment
status: proposed
status-changed: 2026-05-20
proposed-date: 2026-05-20
question: "Can fungal amadoriase (FAOD / FAOX) — a Class B fructosyl-amino-acid oxidase with documented broad substrate scope on early-glycation Amadori products and at least CML/CEL/imidazolone — be engineered via directed evolution to cleave glucosepane, the dominant mature ECM crosslink for which no enzyme exists in any kingdom of life?"
hypothesis: "Active-site mutagenesis of FAOD by error-prone PCR + DNA shuffling, screened against a synthetic glucosepane fluorogenic substrate, can expand substrate scope to glucosepane with detectable initial activity (kcat/Km >1 M⁻¹ s⁻¹) within 4–6 rounds of evolution. Tier-3 defense (mature-crosslink cleavage) is biochemically reachable from the FAD-dependent oxidative chemistry that Class B amadoriases already employ on Amadori products."
resolves-edges: []
resolves-nodes:
  - "[[processes/glucosepane]]"
  - "[[processes/microbial-amadori-deglycation]]"
adds-nodes:
  - "ECM-crosslinks (GlycoSENS) as first-class matrix node — populates the missing Tier-3 defense slot"
scale: small-lab
duration-estimate: "12–18 months"
cost-estimate: "$80–150k (glucosepane substrate synthesis collaboration, yeast surface display reagents, sequencing for hit characterization, FACS time)"
resources-required: [yeast-surface-display-or-phage-display, error-prone-pcr, dna-shuffling, facs-with-cell-sorter, synthetic-chemistry-collaboration-for-substrate, basic-enzyme-kinetics, mass-spec-for-substrate-validation]
preregistered: false
preregistration-doi: null
published-as: null
related-experiments:
  - "[[experiments/age-breaker-lcms-replication]]"
  - "[[experiments/glucosepane-monoclonal-antibody]]"
related-pages:
  - "[[frameworks/causal-graph-data]]"
  - "[[processes/glucosepane]]"
  - "[[processes/microbial-amadori-deglycation]]"
  - "[[processes/advanced-glycation-end-products]]"
last-updated: 2026-05-20
---

# Directed evolution of FAOD toward glucosepane substrate scope

## Background

Per [[processes/advanced-glycation-end-products]], the AGE-defense hierarchy in biology has three tiers:

- **Tier 1 — prevention.** GLO1/GLO2 detoxify methylglyoxal upstream. Well-characterized; age-related GLO1 decline contributes to AGE rise.
- **Tier 2 — Amadori reversal.** FN3K (mammalian) and Class B fungal/bacterial amadoriases (FAOD/FAOX) cleave early glycation products. Reach is limited (FN3K is intracellular; FAOD does not natively cleave glucosepane or pentosidine).
- **Tier 3 — mature-crosslink cleavage.** **Empty.** No mammalian, fungal, bacterial, or archaeal enzyme is known to cleave glucosepane or pentosidine. Evolution has never produced one because the timescale of crosslink accumulation (decades) exceeds the selection-pressure window in any natural organism.

Delanghe 2024 (abstract-only, [[processes/microbial-amadori-deglycation]]) reports that FAOD has broader substrate scope than originally characterized, including CML, CEL, and imidazolone — but **explicitly not glucosepane or pentosidine**. This makes FAOD the most promising starting scaffold for directed evolution: the FAD-dependent oxidative chemistry it employs on Amadori adducts shares electron-transfer architecture with what would be required to oxidatively cleave the imidazo[4,5-b]pyridine ring at the heart of glucosepane (Gautieri 2014). The active-site geometry is the constraint; the underlying chemistry is feasible.

**Why this matters:** Per [[frameworks/causal-graph-data]] § Missing-node blockers, ECM-crosslinks is the most-overlooked damage class in geroscience clinical translation. Even a low-activity glucosepane-cleaving enzyme would be field-changing: it would establish the chemistry is reachable, validate the substrate as enzymatically tractable, and unlock the engineered-hydrolase strategy (deliver via AAV-lysosomal-targeted construct, topical for skin, or systemic for arterial ECM). This is the LysoSENS / GlycoSENS engineered-enzyme paradigm applied to the dominant human crosslink.

## Methods

**Phase 0 — Substrate synthesis (collaboration-gated):**

Synthesize a glucosepane fluorogenic substrate (or glucosepane-FRET reporter) suitable for high-throughput screening. Options:

- **Option A — small-molecule glucosepane analog.** Synthesize the imidazo[4,5-b]pyridine ring system attached to a fluorophore that becomes activated on ring cleavage. Requires collaboration with synthetic chemistry lab; published glucosepane-synthesis routes exist (Biemel 2002, Cheng 2004) but not at fluorogenic scale.
- **Option B — peptide-tethered glucosepane.** Mimics the natural Lys–Arg-crosslink context on a short peptide flanked by FRET donor/acceptor. Higher fidelity to natural substrate; more synthetically intensive.

Decision: start with Option A for throughput; validate hits on Option B; final validation on actual glucosepane-crosslinked collagen.

**Phase 1 — Library construction:**

- Starting scaffold: FAOD from *Aspergillus fumigatus* (or other Class B Amadoriase with published structure / activity baseline). UniProt accession TBD via literature search at proposal-accept time.
- Library generation:
  - **Round 1 — random mutagenesis.** Error-prone PCR (~2 mutations / kb) across the full ORF. Library size 10⁶–10⁷ variants.
  - **Round 2+ — active-site saturation mutagenesis.** Following Round 1 hits, saturate the top 5–10 active-site residues (identified from FAOD crystal structure + substrate-docking model) via NNK codon randomization.
  - **DNA shuffling between rounds:** combine partial hits across rounds.

**Phase 2 — High-throughput screening:**

- **Display platform: yeast surface display** (preferred; Aga2p fusion). Allows FACS sorting on enzymatic-activity-induced fluorogenic substrate cleavage.
- Library transformed into *S. cerevisiae* EBY100; induced 24 h; incubated with glucosepane-fluorogenic substrate; FACS sort top 0.1% by fluorescence at 4–8 h timepoint.
- Sorted hits re-plated, sequenced, individual variants validated in cleared lysate.
- ~4–6 rounds of iterative evolution with hits from prior round as the new library starting point.

**Phase 3 — Hit characterization:**

- Top hits expressed in *E. coli* (BL21-DE3) or *Pichia pastoris* for higher yield.
- Steady-state kinetics on glucosepane substrate: Km, kcat, kcat/Km.
- **Counter-screen on natural substrates:** activity retained on Amadori adducts? Activity gained on glucosepane should not abolish native chemistry.
- **Validation on collagen-immobilized glucosepane:** incubate hit enzyme with glucosepane-modified collagen substrate (generated in-vitro from glucose + collagen ageing) or aged human tissue homogenate; LC-MS/MS quantify glucosepane reduction (overlaps with [[experiments/age-breaker-lcms-replication]] methodology).

**Phase 4 — Stability / delivery viability (gated on Phase 3 success):**

- Thermal stability at 37 °C, pH 4.5 (lysosomal context) and pH 7.4 (extracellular).
- Tissue-penetration test on intact aged skin biopsy ex vivo.

## Expected outcomes and interpretation

| Result | Interpretation |
|---|---|
| Hit with kcat/Km >1 M⁻¹ s⁻¹ on glucosepane substrate AND retained activity on collagen-immobilized glucosepane | **Chemistry validated.** First enzyme of any origin to cleave glucosepane. Promotes to delivery / pharmacology phase. Field-changing result. |
| Hit on fluorogenic substrate but null on collagen-immobilized glucosepane | Active site can cleave the model substrate but doesn't access the natural crosslink geometry. Phase 2 redesign with peptide-tethered substrate. |
| 6 rounds of evolution without detectable activity | **Negative result with field value.** Either FAD-dependent oxidative chemistry is geometrically incompatible with the imidazo[4,5-b]pyridine ring (suggests scaffold-replacement: try heme-dependent peroxidases, copper-dependent oxidases, or hydrolases as alternative starting scaffolds), or the substrate requires a redox potential outside the FAD window (suggests metal-dependent mechanism). Either result re-scopes the broader Tier-3 program. |
| Hits with off-target activity (random proteolysis, oxidation of unrelated substrates) | Specificity engineering becomes the rate-limiting step; pivot to negative-selection rounds. |

## Why this is high-leverage despite the long timeline

- **The Tier-3 defense slot is empty.** Even a low-activity hit changes the matrix: it formalizes that the chemistry is reachable, which has not been demonstrated.
- **Small-lab tractable.** Yeast surface display + FACS + error-prone PCR is standard directed-evolution infrastructure; well-funded academic lab can do this without infrastructure-building.
- **Negative result is publishable.** "We tried directed evolution from FAOD scaffold across 6 rounds; no hit; here's the structural argument why FAD chemistry doesn't reach this substrate" is itself a contribution that re-scopes the field.
- **Complementary to [[experiments/age-breaker-lcms-replication]]:** if the small-molecule replication finds nothing (likely), this is the alternative-mechanism arm of the program.

## Decision points

- **Substrate synthesis is the critical-path gate.** Without a working fluorogenic substrate, Phase 2 can't proceed. Establishing collaboration with a synthetic-chemistry lab before committing resources is the first step.
- **Display platform choice:** yeast surface display vs phage display. Yeast is preferred for FAD-cofactor proteins (cytoplasmic eukaryotic folding); phage display has higher library diversity but FAD-cofactor proteins often fold poorly on phage surface. Default yeast; switch only if folding fails.
- **Round depth:** at what point do we declare the FAOD scaffold inadequate? Pre-specify a stop rule (e.g., no >2× activity improvement between consecutive rounds for 2 rounds = abandon scaffold).

## Open questions

- Should we start from **multiple amadoriase scaffolds** in parallel (Class A vs Class B, different organism-of-origin)? Increases library size and chance of hit but multiplies resource cost.
- Are there published **structural models of glucosepane–enzyme docking** to inform initial active-site target residues? Not as of 2026 to our knowledge; this is a gap that could be filled by a docking-screen collaboration as Phase 0.
- Is there a published academic glucosepane-fluorogenic substrate (vs needing to synthesize de novo)? Worth a thorough lit-search before committing synthesis resources.
- **IP landscape:** glucosepane-cleavage enzymes may be Revel Pharmaceuticals patent territory. Check Revel's published patents (USPTO + WIPO) before public disclosure of hits.

## Conversation lineage

- **2026-05-20** drafted from the matrix-blocker brainstorming session. Origin: user's intracellular-AGE-breaker framing → survey identified that the Tier-3 defense slot is structurally empty across biology, and directed evolution from FAOD is the only small-lab-tractable path to filling it.
