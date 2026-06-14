# Vitamin D3 + K2 (MK-7) interventions — design / research note (DESIGN-ONLY)

**Status:** PROPOSED plan for review (no coefficients committed, no JSON edited). Companion in spirit to
`model/senolytic-intervention-design.md` / `model/dq-calibration-design.md` — same discipline: design the
**intervention semantics + the node/edge map + the honest evidence framing** before any calibration.
**Author:** claude · 2026-06-14. **Reviewed by Codex (gpt-5.5, high effort) 2026-06-14 — corrections folded in
as Revision 1 below; affected inline claims are marked `[R1]`.**

Goal (user request): add **vitamin D3** and **vitamin K2 (MK-7)** as supported interventions in `viz/`,
including their **combined effect**; identify which nodes/edges they act on, reusing existing nodes where
possible, and fit it into the current model.

---

## 0. TL;DR / recommendation

1. **These are not statins.** The honest, evidence-graded conclusion (from the verified wiki + the big
   RCTs) is that **D3 and K2-MK7 have weak-to-null hard-endpoint (mortality/CVD-event) evidence**. The
   model should reproduce that: a small, mechanism-routed ΔLE concentrated in the **K2 → vascular
   calcification → arterial stiffness → SBP → cardiovascular** arm (and even that is biomarker/surrogate-
   anchored, unreplicated on hard outcomes), with **D3 monotherapy ≈ null** on hard endpoints (matching
   VITAL / D-Health / VIDA). Building them as strong life-extenders would violate evidence discipline and
   the SOP's "never free-fit; pin every dose-response to a literature anchor." Treat the whole thing like
   the **D+Q exploratory scenario**: explicit target-engagement/surrogate anchoring, loud `#gap` flags,
   conservative defaults.

2. **The K2 arm has a clean mechanistic hook the model is missing today:** `arterial-stiffness` =
   0.5·elastin-fatigue + 0.3·ecm-crosslink + 0.8·cellular-senescence — **there is no calcification term**,
   even though `processes/vascular-calcification.md` and `phenotypes/arterial-stiffening.md` are verified
   wiki pages and medial (Mönckeberg) calcification is a *distinct* structural stiffness driver. So the
   first real piece of work is an **Op-C state node `vascular-calcification`** feeding arterial-stiffness;
   K2 then acts by **slowing its accrual rate** (the wiki is explicit: K2 inhibits *new* deposition, does
   **not** reverse existing calcification).

3. **D3's targets already exist as nodes** (`chronic-inflammation`, `immunosenescence`, `falls-mortality`)
   but the evidence to wire them is weak/contested (falls is *possibly harmful* at high bolus dose). Most
   of the D3 arm should ship as **stubs**, not live edges.

4. **An engine extension is required.** Neither intervention maps onto the existing intervention machinery:
   `treatments` modify **mediators only** (LDL/SBP/BMI/HbA1c/restingHR via `pctReduction`/`absShift`), and
   `operators` resolve their `target` through `NODE_IDX` (the top-level `nodes[]` burden array). A
   `vascular-calcification` **bLayer state node** is reachable by **neither**. We need a way for a
   continuous supplement to **attenuate a named state-node rate term** (a new treatment `form`, proposed
   `rateSuppress`). This is the main architectural decision for Codex (§5).

5. **Prerequisite content work (wiki-first, blocking):** there is **no `vitamin-d` page in the wiki at
   all** — no cholecalciferol/calcitriol supplement page, and the VITAL/D-Health mortality nulls are not
   captured. The SOP forbids citing biology the wiki doesn't carry, so a `wiki-seeder` pass for vitamin D
   (+ a D3+K2 combination synthesis) is **Phase 0**, before any model edit.

---

## Revision 1 — Codex review (2026-06-14), corrections adopted

Codex (gpt-5.5, high) reviewed against the engine + params; baseline `test.mjs` 187/187 green. Both
load-bearing claims it challenged were re-verified by me against the code. Adopted changes:

1. **[R1] No weight renormalization — and it would be HARMFUL.** *(supersedes the §2b/§5 renormalization
   claim.)* Both consumers of `arterial-stiffness` read it in **deviation form** (value − baseline): the
   direct `arterial-stiffness → cardiovascular` edge (`mediatorLogLinear`, β 0.6, params.json:2703) and
   `stiffnessToSBP` (non-glycemic stiffness deviation, =0 at baseline). So adding a 4th term and
   **recomputing the baseline stiffness trajectory** keeps the baseline deviation at 0 ⇒ baseline LE
   unchanged **without touching 0.5/0.3/0.8**. Renormalizing those weights would instead **change existing
   senolytic / glycemic / resting-HR intervention ΔLE** (they scale the senescence/crosslink/elastin
   contributions). ⇒ Keep weights, recompute baseline, calibrate only `w_calc`, and **regression-test every
   existing intervention ΔLE** for invariance.
2. **[R1] The map omitted the direct stiffness→CVD path.** The K2 arm benefits via **both**
   `arterial-stiffness → cardiovascular` (direct, BP-independent; Mitchell 2010) **and** stiffness → SBP →
   CVD. §2a updated.
3. **[R1] Avoid the senescence→calcification→stiffness double-count.** Driving `vascular-calcification` from
   `cellular-senescence`/`chronic-inflammation` while the **existing** direct `0.8·cellular-senescence`
   stiffness term remains creates two senescence→stiffness paths. **v0 fix:** make `vascular-calcification`
   an **intrinsic, MGP-sensitive accrual term** (the K2-suppressible lane), *not* senescence/inflammation-
   driven — sidesteps mediation-decomposition entirely. Add senescence/phosphate drivers only later, with
   decomposition. (supersedes the §2b rate law and the §5 "no decomposition needed" line.)
3b. **Rate law must be additive named linear/product terms.** The term evaluator only supports
   `op:"linear"|"product"`; a `(1−carboxylation)` gating multiplier / arbitrary `f()` is **not expressible**.
   Use a named MGP-sensitive accrual term that the treatment suppresses directly.
4. **Engine extension = a generic state-rate modifier, NOT inside `applyTreatment`.** Refined option (a):
   a small registry `{stateId, termId, dose, startAge, endAge}` that scales a **named** state-node rate term.
   Keeps it out of the mediator path and gives it a treatment **window** (see #6).
5. **Carboxylation mediator: OMIT in v0.** Use **dp-ucMGP as an external pharmacodynamic anchor** (it is an
   *inverse* biomarker, not a calibrated carboxylation fraction), not an on-model node. ⇒ the mechanistic
   synergy node is deferred.
6. **Treatment timing.** Existing treatment checkboxes apply **lifelong across the whole span**, not "from
   current age." A state-rate supplement needs explicit `startAge`/`endAge`, **or** the UI must label it a
   lifelong counterfactual. Add window support.
7. **Combined effect = independent application by default.** Apply D3 and K2 **independently** (both
   checkboxes → sum of the two arms). Any ceiling-lifting **super-additive synergy is an explicit,
   off-by-default sensitivity scenario**, bounded against the **AVADEC null** — not a default live multiplier.
   (This still delivers the requested "combined effect," just honestly.)
8. **D3 default = NO live mortality edge.** A near-zero **sensitivity scenario** is more honest than a weak
   positive edge tuned toward null. (supersedes the §3 "weak placeholder" framing for the inflammation arm.)
9. **Falls stays unwired**; a future *high-dose bolus HARM* scenario must not be conflated with daily
   replacement.
10. **Intervention-action stubs can't be `MODEL.edges` stubs** (treatments aren't graph endpoints the
   validator recognizes). Only the **`vascular-calcification` node stub** and the **calcification →
   arterial-stiffness** edge stub are normal stubs; the K2/D3 *action* stubs live inert in
   `bLayer.treatments` (dose 0). (supersedes the Phase-1 stub list.)
11. **Evidence nuance:** "K2 signals cluster in CKD" is too strong — the biggest CAC meta-analysis signal is
   **94% driven by one community trial (Shea 2009)**; frame as "subgroup-dependent / single-trial-driven,"
   not CKD-only.

Net effect on §§2–6: the **K2 → vascular-calcification → arterial-stiffness → {direct CVD, SBP→CVD}** spine
stands; the calcification driver becomes intrinsic+MGP-sensitive (no double-count); the engine work is a
windowed state-rate modifier; D3 and the synergy are off-by-default sensitivity scenarios.

---

## 1. What the evidence actually supports (the constraint that shapes the design)

Distilled from a verified-wiki read (vitamin-k2, vitamin-k, matrix-gla-protein, vascular-calcification,
arterial-stiffening, vitamin-k-cycle, ggcx, vkorc1, osteoblasts, bone) + the well-known D3 RCTs.

### K2-MK7 evidence ladder (grade DROPS sharply downstream)
| Sub-link | Grade | Anchor |
|---|---|---|
| MK-7 ↓ dp-ucMGP (biomarker / target engagement) | **robust, replicated** | Li 2023 meta, 7 RCTs n=578, MD −243 pmol/L, p=0.0001; 180 µg/d → 25–50% ↓ |
| carboxylated MGP inhibits calcification (mechanism) | **genetic/animal proven, human correlational** | Mgp−/− mice fatal arterial calcification <2 mo (Luo 1997); Keutel syndrome |
| MK-7 ↓ arterial stiffness (cfPWV) | **ONE positive RCT, unreplicated; surrogate** | Knapen 2015 RCT n=244 postmenopausal, 180 µg/d × 3 yr, cfPWV↓ (de Vries 2025 post-hoc partial) |
| MK-7 ↓ structural calcification (CAC/AVC) | **largely NULL / contradictory** | AVADEC 2022 n=365, 720 µg/d+D3 × 2 yr, AVC progression null p=0.64; Li-2023 CAC signal 94% driven by one trial |
| MK-7 ↓ hard CV outcomes (MI/CVD death) | **NO DATA — explicit #gap** | none in any population |
| K2 ↔ CHD mortality | **observational only, flagged confounded** | Rotterdam (Geleijnse 2004) n=4807, RR 0.43 (0.24–0.77); wiki notes "large vs RCT → confounding" |
| MK-7 → bone (BMD) | **mixed/inconsistent, surrogate** | Knapen 2013 positive lumbar/femoral; RenaKvit 2023 *accelerated* radius loss |

**Key modeling constraints from the wiki:** (a) positive signals **cluster in CKD/dialysis + diabetic
subgroups** (extreme baseline K deficiency) — generalizability to non-CKD aging is explicitly uncertain;
(b) **no reversal** of existing calcification — K2 only slows new deposition (so the operator is
production-suppression, never a senolytic-style pulse-down); (c) K2 is **contraindicated with warfarin**
(VKOR antagonism), no interaction with DOACs/aspirin — worth a UI note if anticoagulants ever enter the sim.

### D3 evidence ladder
- **No dedicated wiki page exists.** Calcitriol's endocrine biology (intestinal Ca/PO₄ absorption,
  osteoblast stimulation, RANKL induction) is scattered in `bone.md`/`osteoblasts.md`/`parathyroid.md`,
  but there is **no supplement-RCT evidence grade in the wiki** and **no D3+K2 synergy section**.
- **Hard endpoints (external, to be seeded): largely NULL.** VITAL (Manson 2019, n=25 871) and D-Health
  (Neale 2022, n=21 315): no reduction in all-cause mortality, total CVD, or total cancer incidence.
  Possible weak signals: cancer *mortality* (slight), autoimmune incidence (VITAL ancillary), fractures
  only with calcium co-supplementation. **Falls: contested — high-dose bolus D3 *increased* falls/fractures
  in several RCTs** (so a D3→falls *benefit* edge is not defensible; if anything the sign is uncertain).
- **Inflammaging:** modest, inconsistent CRP/IL-6 reductions; not a hard-endpoint lever.

### D3+K2 combined / calcium-partitioning rationale
- The popular mechanism — "**D3 upregulates MGP & osteocalcin synthesis; K2 carboxylates them; together
  they partition calcium into bone and away from arteries**" — is **almost absent from the wiki**. `bone.md`
  §6 carries the **bone–vascular calcification paradox** (shared MGP insufficiency / RUNX2 mislocalization
  links low BMD with vascular calcification) — the nearest concept — but **D3's role in it is not
  described**, and the "D3 → MGP/osteocalcin transcription" claim is **unsourced in this wiki**.
- The only co-administration evidence: AVADEC (K2+D3, **null** on AVC) and El Borolossy 2022 (pediatric CKD,
  n=60, combined → greatest dp-ucMGP/ucOC drop — small, low generalizability).
- ⇒ The combined effect must be modeled as an **exploratory hypothesis**, not a proven synergy multiplier.

---

## 2. Node / edge map (reuse-first)

### 2a. Existing nodes these interventions touch
| Node | Layer | Touched by | Path to mortality |
|---|---|---|---|
| `arterial-stiffness` (bLayer, algebraic) | physiology | **K2 (primary)** via a new calcification term | → `systolicBP` (stiffnessToSBP β 37.6 M / 52.1 F) → `atherosclerosis` (CVD cause) |
| `systolicBP` (mediator) | — | downstream of stiffness | → atherosclerosis |
| `atherosclerosis` (top-level, CVD cause) | phenotype | terminal of K2 arm | mortality cause |
| `chronic-inflammation` (top-level, tier3) | hallmark | **D3 (weak)** | already coupled downstream (CVD/cancer) |
| `immunosenescence` (top-level, cause) | phenotype | **D3 (very weak → stub only)** | mortality cause |
| `falls-mortality` (top-level, cause; W00–W19) | phenotype | **D3 (CONTESTED — do NOT wire a benefit)** | mortality cause |
| `cellular-senescence` | tier2 | (already a stiffness driver; not a D3/K2 target) | — |

### 2b. New node required
**`vascular-calcification`** — a bLayer **state node** (Op C, `∫rate·dt`), class `damage` (medial
hydroxyapatite deposition). Mirrors `ecm-crosslink` / `elastin-fatigue` exactly.
- **Wiki anchor:** `processes/vascular-calcification.md`, `phenotypes/arterial-stiffening.md`,
  `molecules/proteins/matrix-gla-protein.md` (all verified).
- **Driver (mechanistic, no age-pegging):** medial calcification rate is driven by VSMC osteogenic
  transdifferentiation, which the wiki ties to **phosphate load, senescence, and inflammation**, *gated by
  MGP carboxylation status*. Minimal defensible rate law for v0:
  `dCalc/dt = coeff · f(cellular-senescence, chronic-inflammation) · (1 − carboxylationFraction)`,
  calibrated so the **population** trajectory reaches its normalized anchor (~1.0 at 80) at pop-average
  inputs — age **emerges** from the integral. (Simplest v0: a single intrinsic term + senescence driver,
  with the K2-modulated `carboxylationFraction` as the intervention lever. See §3 for the carboxylation
  question.)
- **Downstream wiring:** add a **4th term** to `arterial-stiffness.value`:
  `+ w_calc · vascular-calcification`. **[R1] DO NOT re-normalize 0.5/0.3/0.8** — both consumers read
  stiffness in deviation form, so recomputing the **baseline trajectory** preserves baseline LE; calibrate
  only `w_calc` and regression-test existing intervention ΔLE (Revision 1 §1, §2). The K2 benefit then flows
  through **both** the direct `arterial-stiffness → cardiovascular` edge (β 0.6, Mitchell 2010) and
  stiffness → SBP → CVD.

### 2c. Optional intermediate node (decision point — §3)
**`mgp-carboxylation` / `dp-ucMGP`** as a normalized mediator in [0,1] (baseline = population carboxylation
fraction). K2 raises it; D3 (if the substrate-upregulation claim is sourced) raises the *ceiling*. It gates
the calcification rate. **Pro:** lets the D3+K2 synergy be expressed mechanistically (D3 = more substrate,
K2 = more activation) and gives a directly-anchorable node (dp-ucMGP is the best-measured K2 endpoint).
**Con:** an extra node; the minimal alternative is to let K2 attenuate the calcification rate directly and
use dp-ucMGP only as the off-model effect-size *anchor*. **Recommendation:** include the carboxylation
mediator — it is the single cleanest way to make "combined effect" non-arbitrary, and dp-ucMGP is the one
node with replicated human dose-response.

### 2d. Out of scope / residual (state honestly)
- **Bone / fracture mortality:** no fracture cause-node exists (`falls-mortality` is W00–W19 falls only;
  fracture deaths sit in the residual). The K2/D3 **bone arm (osteocalcin/BMD) therefore has no mortality
  hook** in the current model and should be **noted as out-of-scope** (or a future Op-B fracture cause),
  not forced.
- **D3 → cancer mortality:** real but weak external signal; no clean model hook (cancer burden is coupled,
  not a direct D3 target). Leave as a documented `#gap`, not an edge.

---

## 3. Intervention semantics

Both are **continuous lifelong supplements** ⇒ they are conceptually `treatments` (like statin / metformin),
**not** windowed `operators` or pulses. (K2 is explicitly *not* a senolytic-style pulse — no reversal.)

| Intervention | Acts on | Form (design) | Effect-size anchor | Default |
|---|---|---|---|---|
| **K2-MK7** | `vascular-calcification` accrual rate (via `mgp-carboxylation`) | continuous `rateSuppress` while taken | dp-ucMGP normalization → Knapen-2015 cfPWV slice; **placeholder**, capped small | conservative |
| **D3** (inflammation) | `chronic-inflammation` accrual | weak `rateSuppress`/`production-suppress` | inconsistent CRP/IL-6; **stub→weak placeholder** | near-zero |
| **D3** (carboxylation ceiling) | `mgp-carboxylation` substrate | raises ceiling only | **unsourced in wiki → STUB** until seeded | off |
| **D3** (falls, immunosenescence) | `falls-mortality`, `immunosenescence` | — | **contested / no benefit → STUB only, do NOT wire** | off |

**Combined effect (D3+K2).** Model as the calcification-rate attenuation being **larger when both are
present** — D3 supplies carboxylatable MGP/osteocalcin substrate (raises the carboxylation ceiling), K2
carboxylates it (raises the achieved fraction toward that ceiling). Concretely, if `carboxylationFraction =
min(ceiling(D3), base + K2·gain)`, then K2-alone is capped by the endogenous substrate ceiling and D3+K2
lifts the cap — a **mechanistically-motivated, super-additive-but-bounded** combined effect. **Flagged
exploratory**, defaults conservative, `#gap/needs-human-replication` (AVADEC combined-arm was null). This is
the "combined effect" deliverable, modeled honestly rather than as a free synergy multiplier.

---

## 4. Why an engine extension is needed (architecture)

Confirmed by reading `viz/aging-simulator.html` (`mediators()` lines 1276–1325) and `model/engine.mjs`
(operator dispatch lines 242–261):

- **`treatments`** (`b.treatments[]`) apply **only to mediators**, in `mediators()`, via `applyTreatment`
  with `form ∈ {pctReduction, absShift}`. They cannot touch a state-node rate.
- **`operators`** (`senolytic-pulse` / `production-suppress` / `senomorphic` / `clearance-restoration`)
  resolve `op.target` / `op.to` / `op.from` through **`NODE_IDX[...]`** — the **top-level `nodes[]`** index.
  They cannot touch a bLayer state node (`ecm-crosslink`, `arterial-stiffness`, or a new
  `vascular-calcification`) either.

So `vascular-calcification` (a bLayer state node, the natural home next to `ecm-crosslink`) is reachable by
**no current intervention path**. Three ways to close that gap:

| Option | Change | Pros / Cons |
|---|---|---|
| **(a) New treatment form `rateSuppress`** *(recommended)* | extend `b.treatments[].form` + the state-node integration loop to let a treatment scale a named state-node rate term (and the `mgp-carboxylation` mediator) | continuous-supplement semantics match `treatments`; one extension serves D3 (inflammation) + K2 (calcification); minimal surface; UI checkbox auto-renders |
| **(b) Extend operator NODE_IDX to also resolve bLayer state ids** | make `production-suppress` target state nodes | reuses the windowed operator, but supplements aren't windowed; conflates the two registries |
| **(c) Promote `vascular-calcification` to a top-level node** | so `production-suppress` reaches it | wrong layer (it's a physiology driver of stiffness, like ecm-crosslink, not a coupled hallmark/cause burden); pollutes the coupling graph |

**Recommendation: (a).** Add a `rateSuppress`-type treatment that attenuates a specified state-node rate
term (and a mediator-ceiling form for the D3 carboxylation lever). The UI already auto-renders any
`b.treatments[]` entry as a checkbox (`TREATMENTS.forEach`, viz line 7005), so **no bespoke UI work** beyond
registering the new mediator in `MED_SCALE`/`MED_COLOR` if `mgp-carboxylation` is added.

---

## 5. Invariance / build / test plan (per `sops/adding-causal-graph-nodes.md`)

Two non-negotiable invariants: **baseline LE = M 77.459 / F 82.118** and **no age-pegging**.

1. **Inert by construction.** New `treatments` with `amount/atten = 0` and an **unwired** calcification node
   ⇒ baseline LE byte-identical. Pin with the existing `stub:` regression tests + a new
   "vitamin-treatments-off ⇒ baseline invariant" test.
2. **Op-C unwired-first.** Build + calibrate `vascular-calcification` **without** feeding arterial-stiffness
   first (LE provably unchanged), then wire the 4th stiffness term as a **separate** step. **[R1]** Preserve
   baseline LE by **recomputing the baseline stiffness trajectory** (so the deviation read by both
   downstream edges stays 0 at baseline) — **NOT** by re-normalizing 0.5/0.3/0.8 (that would move existing
   senolytic/glycemic/HR ΔLE). Regression-test every existing intervention ΔLE; if any moves, the wiring is
   wrong — debug, don't re-baseline.
3. **No age-pegging.** `vascular-calcification` accumulates as `∫rate·dt` from senescence/inflammation/
   carboxylation drivers; its age-correlation must **emerge** (copy the `ecm-crosslink` calibration
   pattern). Age may only *verify*.
4. **Mediation / double-count. [R1]** Two traps: (i) if `vascular-calcification` is driven by
   `cellular-senescence`/`chronic-inflammation`, it creates a **second** senescence→stiffness path on top of
   the existing direct `0.8·cellular-senescence` term — so v0 uses an **intrinsic MGP-sensitive** accrual
   term instead (Revision 1 §3), no decomposition needed; (ii) the D3→inflammation arm must not double-count
   an existing inflammation→CVD path — but D3 is off-by-default anyway (Revision 1 §8).
5. **Directional tests:** K2-on ⇒ lower vascular-calcification ⇒ lower arterial-stiffness ⇒ lower SBP ⇒
   lower atherosclerosis burden ⇒ small +ΔLE (sign + monotonicity, not a calibrated magnitude). D3-alone ⇒
   ≈0 ΔLE on hard endpoints (the honesty test). Combined ⇒ ΔLE > K2-alone but bounded.
6. Build flow unchanged: edit the ```json block in `frameworks/causal-graph-parameters.md` →
   `build-params.mjs` (runs `validate-graph.mjs`) → `test.mjs` (green / deliberately re-baselined) →
   `build-app.mjs` → headless render check → `e2e-playwright.mjs` for the new checkboxes.

---

## 6. Phasing

- **Phase 0 — wiki content (BLOCKING, wiki-first).** `wiki-seeder`: `molecules/compounds/vitamin-d.md`
  (cholecalciferol; calcitriol biology; VITAL/D-Health/VIDA hard-endpoint nulls; falls-contested; cancer-
  mortality weak signal; inflammaging) and a **D3+K2 combination synthesis** (a `hypotheses/` page on
  calcium-partitioning, or a section on `vitamin-k2.md`) that either sources or `#gap`-flags the "D3 →
  MGP/osteocalcin transcription" claim. `wiki-verifier` pass. K2 side already covered.
- **Phase 1 — stubs (visible, inert).** `edge-auditor`-style: add a `provenance:"stub"`
  `vascular-calcification` node + stub edges (`vascular-calcification → arterial-stiffness`,
  `K2 → calcification-rate`, `D3 → chronic-inflammation`, `D3 → mgp-carboxylation`, and the contested
  `D3 → falls` as an *adjudicate-only* note). Engine-inert, greyed on the graph — makes the whole plan
  visible with zero LE impact and no engine change.
- **Phase 2 — build the node + engine extension (Op C, unwired; ε=0).** Calibrate `vascular-calcification`
  unwired; add the `rateSuppress` treatment form + (optional) `mgp-carboxylation` mediator; everything inert
  by default ⇒ baseline invariant.
- **Phase 3 — wire + activate (deliberate re-baseline).** Wire calcification→stiffness with re-normalized
  weights; activate K2 (placeholder, dp-ucMGP/Knapen-anchored), D3 (near-zero), and the combined exploratory
  scenario. `graph-node-seeder` derives the `placeholder` coefficients.
- **Phase 4 — validate.** `graph-node-validator` cross-checks vs CDC/literature, promotes
  stub→placeholder→calibrated (never `anchored` — every arm has an open `#gap`).

---

## 7. Open questions for Codex

1. **Engine extension shape (§4).** Endorse option (a) `rateSuppress` treatment form over (b)/(c)? Or is a
   cleaner abstraction warranted (e.g. a unified "modulator" that can target a mediator *or* a state-node
   rate term)?
2. **Carboxylation mediator (§2c).** Worth adding `mgp-carboxylation`/`dp-ucMGP` as a real node to express
   the D3+K2 synergy mechanistically, or keep it off-model and let K2 attenuate the calcification rate
   directly (dp-ucMGP as anchor only)?
3. **Calcification rate law (§2b).** Is `dCalc/dt = coeff·f(senescence, inflammation)·(1−carboxylation)`
   the right minimal v0, or should phosphate/CKD (not currently a strong model input outside `ckd`) be an
   explicit driver given that the human signal lives in CKD populations?
4. **Stiffness re-normalization (§2b/§5).** Confirm the approach: add the 4th term, re-normalize 0.5/0.3/0.8
   so the pop stiffness@80 anchor (and baseline LE) is preserved, then treat any residual LE move as a bug.
5. **D3 honesty (§1).** Agree that D3 monotherapy should be modeled to ≈null on hard endpoints (faithful to
   VITAL/D-Health), with only the K2 arm carrying a small mechanistic ΔLE — i.e. the model's job here is
   partly to show how *little* these move mortality?
6. **Falls (§2a/§3).** Agree D3→falls stays an *adjudicate-only stub* (contested/possibly harmful), never a
   live benefit edge?
7. **Combined effect (§3).** Endorse the bounded "D3 lifts the carboxylation ceiling, K2 fills it"
   formulation as the honest model of synergy, defaulted conservative + flagged exploratory?

---

## 8. Files this plan would touch (when built — NOT in this design pass)
- `frameworks/causal-graph-parameters.md` (json block: new state node, mediator, treatments, stiffness term)
- `model/engine.mjs` (the `rateSuppress` treatment form)
- `model/test.mjs` (invariance + directional tests; deliberate re-baseline at wiring)
- `viz/aging-simulator.html` (rebuilt via `build-app.mjs`; `MED_SCALE`/`MED_COLOR` if a mediator is added)
- `molecules/compounds/vitamin-d.md` (NEW, Phase 0), D3+K2 synthesis page/section
- `log/2026-06-14.md` (public log)
