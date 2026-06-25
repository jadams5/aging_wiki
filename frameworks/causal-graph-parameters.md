---
type: framework
aliases: [causal graph parameters, aging simulator parameters, hallmark dynamical-model parameters]
sources: ["[[frameworks/causal-graph-data]]", "[[frameworks/hallmark-causality-graph]]"]
covers: [model-parameters, simulator-data]
---

# Causal Graph — Model Parameters (Simulator Layer)

> [!tip] Run it live
> The interactive simulator is deployed at **[jadams5.github.io/aging_wiki/simulator](https://jadams5.github.io/aging_wiki/simulator/)** — adjust lifestyle, labs, and interventions and watch life expectancy, the cause-of-death breakdown, and every node's trajectory respond in real time. Each node links back to its wiki page.

> ⚠️ **Modeling-parameter layer — not verified wiki facts.** The causal *structure* used here (which nodes exist, which directed edges connect them, their sign and ordinal evidence-strength) is inherited from [[frameworks/causal-graph-data]], which is verified. The *numeric parameters* on this page — base-curve shapes, per-edge coupling gains, and mortality hazard multipliers — are an **illustrative quantitative layer** that does not exist in the primary literature in this form. Each value is tagged by provenance: `anchored` (a validated age-trajectory or hazard ratio exists in the literature and constrains the value or at least its *shape/direction*) or `ordinal-default` (derived mechanically from the edge's ordinal strength; illustrative only). **This page is a sensitivity-exploration substrate for the [[#aging-simulator-v0|aging simulator]], not a source of citable quantitative claims.** Do not propagate its numbers onto atomic pages.

This page defines the parameters consumed by the interactive aging simulator (`viz/aging-simulator.html`). It is the single source of truth for that tool — the app embeds the canonical JSON block below at build time.

---

## Why a dynamical model (and not a Gantt)

The hallmark causal graph contains **feedback loops** (4 bidirectional reinforcing edges; see [[frameworks/causal-graph-data]] § Bidirectional edges). A timeline/Gantt cannot represent a cycle. A **coupled dynamical model**, integrated forward over age, represents loops natively: each node's burden accumulates along an intrinsic trajectory *plus* pressure propagated from its upstream neighbours, and the integrator resolves the loops. Interventions become **time-windowed perturbations** of either a node's intrinsic rate or an edge's gain, and "risk of death" is obtained by integrating a mortality hazard built from the *downstream phenotype* burdens (where real hazard ratios actually live — not on the hallmarks themselves).

## The two-layer epistemics

| Layer | Source | Status | Example |
|---|---|---|---|
| **Structure** | [[frameworks/causal-graph-data]] | verified | `genomic-instability → cellular-senescence` exists, `strong` |
| **Parameter** | this file | illustrative, tagged | that edge's coupling gain = 0.20 |

The honest claim the simulator makes is therefore **conditional**: *given* these (tunable, mostly illustrative) parameters, here is how interventions reorder the limiting factors and shift life expectancy. It is a sensitivity explorer, not a predictor.

---

## Integrator definition

State: each node *i* carries a burden `B_i(age) ∈ [0,1]` over `age ∈ [20,200]`, `dt = 1 yr`. (Range extended 100→130 so survival reaches ~0 past 110 and lifespan can extend past 100 under interventions. **v0.4 (2026-06-09):** past the CDC open-ended 85+ band, disease-cause hazards keep rising because the cause-node burdens are now **reserve-depletion** fractions that asymptote toward 1 and feed an **odds link** `Rmax·B/(1−B)` — so the old-age escalation is burden-driven and intervention-responsive, replacing the former age-keyed `mortality.oldAgeTail` Gompertz factor. The residual channel keeps its escalation in its own age table. **Range extended 130→200 (2026-06-15)** so that de-pegged/slowed interventions can push survival past 130 without the LE integral truncating at the array bound — baseline-LE is invariant under this bump (survival at 130 is ~1e-24, so the added 131–200 steps contribute ~0). The age-keyed tables are deliberately NOT extended: `interp()` holds the residual flat at its age-130 value (0.53/yr — a soft constant cap on max lifespan, ~+1.3 yr median past 130) and holds each disease cause-node table at its near-saturated age-130 value (so an *un-intervened* cause still walls at 130). The residual flat-hold is the current cap on hypothetical max-lifespan extension; the planned lever to push further is to make the **residual a first-class, freezable cause-of-death node** rather than an un-slowable age-table — folded into the CoD-residual-partition work. Until then, only disease-node suppression (freeze/slow) extends survival, and only into the thin residual-limited tail.)

Each node has an **intrinsic baseline trajectory** `T_i(age)` (the "average human" curve). The actual burden is `B_i = clamp(T_i + Δ_i, 0, 1)`, where `Δ_i` is the node's **deviation from baseline** caused by interventions cascading through the graph. At baseline (no interventions) all `Δ_i = 0`, so `B_i ≡ T_i` exactly — the average-human invariant.

**Coupling — bounded fixed point (v0.2 fix).** An earlier draft injected coupling into the *rate* (`dB/dage += couple·Σ gain·dev`); because that pressure **integrates over age**, even a 1 % upstream freeze accumulated a huge downstream deviation over decades and pinned downstream nodes to the 0/1 clamp — producing a discontinuous step in life expectancy at any non-zero intervention. v0.2 replaces it with a **bounded algebraic fixed point** solved at each age:

```
p_i(age)  = primary deviation accumulated from node i's OWN intervention only
            (a frozen node loses εᵢ·T_i'(age) of its own slope each year; non-intervened nodes have p_i = 0)
Δ         = p + couple · G · Δ        ⇒        Δ = (I − couple·G)⁻¹ · p
B_i(age)  = clamp( T_i(age) + Δ_i(age), 0, 1 )
```

- `G[i][j] = gain[j→i]` (edge gain from `strengthToGain`); solved by fixed-point iteration (converges fast: spectral radius of `couple·G` ≈ 0.10 « 1, so the system is stable and the inverse exists).
- A frozen upstream node now shifts each downstream deviation by only ≈ `gain × (upstream deviation)` — **bounded**, scaling **smoothly** and monotonically with intervention efficacy. Feedback loops are resolved by the matrix inverse rather than by unbounded time-integration.
- `couple` — global coupling scalar (default 1.0; exposed as a sensitivity knob).

**Mortality — sex-specific competing hazards (v0.3).** Replaced the single Gompertz-with-relative-risk term with a **cause-specific competing-hazards** model calibrated to **CDC WONDER 2022 sex-specific** age×cause rates. Every quantity is now per-sex — there is **no sex scalar / fudge factor** (the v0.2 `sexMult` was deleted, per user direction to avoid invented multipliers where data exists):

```
h_sex(age) = E_sex(age)·lifestyle                                                    (extrinsic / behavioural)
           + frailtyMult(age) · [ Σ_c Rmax_{c,sex} · B_{node(c),sex}(age)  +  Residual_sex(age) ]   (intrinsic)
frailtyMult(age) = exp( β_frail · ( B_sarcopenia(age) − T_sarcopenia(age) ) )
S(age) = exp( − Σ_{20..age} h · dt ) ;   life-expectancy = 20 + Σ_{20..100} S · dt
```

- **Causes** `c ∈ {cardiovascular, cancer, neurodegeneration, infection}` each map to a phenotype node whose baseline curve `T_node(c),sex` is the *normalised per-sex* CDC cause-mortality curve; `Rmax_{c,sex}` (per-sex age-90 rate) reconstitutes the absolute hazard, so at baseline `Rmax·T = ` the sex-specific CDC cause rate exactly.
- **Residual_sex(age)** = `all-cause_sex − Σ modeled causes_sex − extrinsic_sex` (CDC WONDER 2022) — the long tail (COPD, diabetes, kidney, liver, falls, …). Guarantees baseline total = empirical **sex-specific** all-cause mortality.
- **Frailty** (`sarcopenia` node) is NOT a cause line — an ICD-absent *amplifier*, modelled as a global multiplier on the intrinsic bracket. `frailtyMult = 1` at baseline. (Sex-specific frailty β is a candidate refinement; currently shared.)
- **Extrinsic** `E_sex(age)·lifestyle` — the parallel, non-cascading accident/violence channel, now per-sex (males ≈ 3× females in young adulthood, which is most of the young-adult male LE deficit).
- **Emergent sex structure (no scalar):** the **female cardiovascular-onset delay** (~10 yr at midlife: female CVD rate @60 ≈ male @50) and the male external-cause excess now fall straight out of the data. Baseline LE ≈ **75.3 M / 80.4 F** (genuine 2022 sex-specific values from age 20; 2022 was a high-mortality year).

Because every cause carries an absolute, CDC-calibrated hazard, the **per-age decomposition is meaningful for the average human with no intervention**: at each age the largest contributor among `{extrinsic, cardiovascular, cancer, neurodegeneration, infection, residual}` is the "limiting factor," reproducing the real accidents→cancer→cardiovascular crossover (per sex). Interventions reduce a cause's *absolute* slice (`ΔLE` in years). *(This is still architecture **A** — baked-in baseline curves; the graph is inert until perturbed. See § Target architecture for the generative-B plan.)*

---

## Curve forms

| form | formula (x = age − 20) | params |
|---|---|---|
| `linear` | `t0 + slope·x` | `t0, slope` |
| `exponential` | `A·(exp(r·x) − 1)` | `A, r` |
| `sigmoid` | `L / (1 + exp(−k·(age − mid)))` | `L, k, mid` |
| `ushaped` | `t0 + amp·((age − mid)/scale)²` | `t0, amp, mid, scale` |
| `table` | piecewise-linear interpolation of `byAge` points (clamped to endpoints) | `byAge: [[age,value],…]` |

All outputs clamped to [0,1]. The four mortality-cause phenotype nodes (atherosclerosis, cancer, neurodegeneration, immunosenescence) use `table` curves whose points are the **normalised CDC age-specific cause-mortality rates** — so the node's burden trajectory *is* the empirical cause curve. The hallmark/driver nodes use the parametric forms. `ushaped` is reserved for biphasic markers (some endocrine trajectories); v0.2 does not yet use it.

---

## Node parameters

Layers follow [[frameworks/hallmark-causality-graph]]: `tier1` proximal damage, `tier2` intermediate response (the tractability "sweet spot"), `tier3` integrative, `phenotype` downstream organ-level outcomes (mortality attaches here). `tractability` is carried through from the edge-blocker tracker so the app can contrast **biological leverage** with **clinical achievability**.

Curve directions/shapes tagged `anchored` have a literature basis for their *shape and direction* (cited inline; magnitudes still illustrative and pending the verification pass — see § Refinement). `ordinal-default` curves are placeholders shaped only to be monotone and plausible.

Sex differences: on the **burden/driver** nodes, only the two with established direction are encoded (female longer telomeres → lower starting burden; female slower epigenetic aging, since males age faster per Horvath 2016). On the **mortality** side, sex is a single flat `sexMult` scalar (CDC cause rates are sex-combined) — see § Mortality parameters. The female cardiovascular-onset delay is therefore NOT represented in v0.2 (it needs sex-specific cause curves — a v1 refinement).

| node | layer | tractability | form | provenance | shape basis |
|---|---|---|---|---|---|
| genomic-instability | tier1 | low | linear | anchored | somatic-mutation burden accumulates ~linearly (~40 base-substitutions/yr in adult stem cells, Blokzijl 2016; ~linear SNV gain in neurons, Lodato 2018) |
| telomere-attrition | tier1 | low | linear | anchored-direction | leukocyte telomere attrition ~linear; females longer/slower (Gardner 2014 meta) |
| epigenetic-alterations | tier1 | moderate | linear | anchored-direction | clock ~linear w/ chronological age by construction; females age epigenetically slower (Horvath 2016) |
| mitochondrial-dysfunction | tier1 | moderate | exponential | ordinal-default | — |
| cellular-senescence | tier2 | high | exponential | anchored-direction | p16^INK4a transcript rises log-linearly/exponentially with age (Liu 2009) |
| deregulated-nutrient-sensing | tier2 | high | sigmoid | ordinal-default | — |
| disabled-macroautophagy | tier2 | high | sigmoid | ordinal-default | — |
| loss-of-proteostasis | tier2 | moderate | exponential | ordinal-default | — |
| chronic-inflammation | tier3 | high | sigmoid | anchored-direction | IL-6/CRP ("inflammaging") rise after ~50–60 (Ferrucci 2018) |
| altered-intercellular-communication | tier3 | moderate | sigmoid | ordinal-default | — |
| stem-cell-exhaustion | tier3 | low | sigmoid | ordinal-default | — |
| dysbiosis | tier3 | moderate | linear | ordinal-default | — |
| atherosclerosis | phenotype (cause: cardiovascular) | moderate | table | anchored | normalised CDC heart+stroke rate, 2022 (2.3/100k @20 → 4880 @90) |
| sarcopenia | phenotype (frailty multiplier) | moderate | sigmoid | anchored-direction | muscle mass declines ~1%/yr after 50 (Cruz-Jentoft 2019 EWGSOP2); acts as global mortality amplifier, not a cause line |
| neurodegeneration | phenotype (cause: dementia) | low | table | anchored | normalised CDC dementia-combined rate (F01/F03/G30/G31), 2022 — Alzheimer line alone undercounts ~2.4× |
| immunosenescence | phenotype (cause: infection) | low | table | anchored | normalised CDC influenza/pneumonia+sepsis rate, 2022 (U-shaped overall; rising arm 20→90 modelled) |
| clonal-hematopoiesis | phenotype (driver) | low | exponential | anchored-direction | CHIP prevalence rises steeply >70 (Jaiswal 2014; Genovese 2014); feeds atherosclerosis, no own mortality line (heme cancer sits inside malignant-neoplasm/cancer) |
| cancer | phenotype (cause: cancer) | moderate | table | anchored | normalised CDC malignant-neoplasm rate, 2022 (∝ age^≈5, Armitage-Doll; 8/100k @25-34 → 1574 @85+); solid + heme |

Full numeric parameters (with female overrides) are in the JSON block.

---

## Edge coupling gains

Gains are assigned mechanically from the ordinal `evidence-strength` in [[frameworks/causal-graph-data]] via `strengthToGain`. This is deliberate: it keeps the *relative* couplings tied to the verified evidence ordering while making the absolute scale a single tunable knob (`couple`).

| strength | gain | rationale |
|---|---|---|
| strong | 0.20 | multiple independent lines / replicated interventional evidence |
| moderate | 0.10 | single well-powered study or consistent mechanism |
| weak | 0.04 | mechanistic inference, limited direct evidence |
| disputed | 0.03 | contradictory / contested direction |

Phenotype edges added beyond the hallmark-to-hallmark set (all traceable to the edge list or its phenotype links): `loss-of-proteostasis → neurodegeneration` (strong), `chronic-inflammation → atherosclerosis` (strong), `stem-cell-exhaustion → sarcopenia` (strong), `stem-cell-exhaustion → immunosenescence` (strong), `genomic-instability → clonal-hematopoiesis` (strong), `chronic-inflammation → clonal-hematopoiesis` (moderate), `clonal-hematopoiesis → atherosclerosis` (moderate), `chronic-inflammation → sarcopenia` (moderate).

---

## Mortality parameters

v0.3 uses **sex-specific cause-specific competing hazards** calibrated to **CDC WONDER 2022** age×sex×cause rates — no Gompertz, **no sex scalar**. `Rmax` is per-sex; the residual and external channels are per-sex tables; `β_frail` and the coupling gains remain the only illustrative pieces.

**v0.4 (2026-06-09) — burden-driven old-age escalation.** Each named cause's absolute hazard is now an **odds link** `Rmax_{c,sex} · B/(1−B)` (was the linear `Rmax · B`), where the cause-node burden table stores a **reserve-depletion** fraction in `[0,1)` that asymptotes toward 1 (`B = 0.5` at age 90; the >90 anchors `E/(1+E)`, `E = exp(0.0866·(age−90))`). This is algebraically identical to the v0.3 `Rmax·B·oldAgeTail` at population-baseline (`B_reserve = h/(1+h)` where `h` was the v0.3 normalized rate; baseline LE reproduced to ±0.01, M 75.82 / F 80.89) — but the >90 escalation now lives in the *intervention-reachable* burden state instead of an age-keyed factor, so interventions that slow burden accumulation bend the old-age mortality curve. `Rmax` is preserved exactly (no renormalization). `mortality.oldAgeTail` is deprecated (`rate: 0`); the residual remainder keeps its escalation baked into its own age table — the one intentionally age-keyed term, as it has no burden node to attach to.

**v0.4.1 (2026-06-09) — residual decomposed into named CDC causes.** The residual is split into four additional named cause nodes — **diabetes** (E10–E14), **COPD** (J40–J47), **CKD** (N00–N07/N17–N19/N25–N27), and **liver/cirrhosis** (K70/K73–K74) — so the model now carries 8 named causes + residual + extrinsic (22 nodes). Rates are CDC WONDER **D76, 2019** (crude rate by sex × ten-year age; the WONDER API is blocked for the 2022 single-race dataset D158, so 2019 is a documented proxy — `SWAP-TO-2022` flagged on each cause). The split is **LE-invariant** (re-buckets mortality out of the residual; baseline M 75.81 / F 80.89 unchanged). Monotonic causes (diabetes/COPD/CKD) use the same reserve transform + Gompertz tail as the original four; **liver is non-monotonic** (peaks midlife, declines at old age) so it uses a peak-anchored Rmax and declining >90 anchors (no Gompertz tail). Residual-proxy behavioural edges were retargeted to the new nodes (smoking→COPD, alcohol→liver, PM2.5→COPD) + smoking→diabetes/CKD added. Caveat: this dropped current-smoker ΔLE to a conservative ~−3.7 yr (the v0.4 ~−8 was inflated by applying COPD's smoking RR to the whole residual); restoring the literature ~10 yr needs a whole-bracket `smoking→allcause` edge — see PROJECT-NOTES §8b.

| param | male | female | provenance |
|---|---|---|---|
| `Rmax` cardiovascular /yr | 0.054702 | 0.045587 | anchored (CDC WONDER heart+stroke @85+, by sex) |
| `Rmax` cancer /yr | 0.021700 | 0.012493 | anchored (CDC malignant neoplasms @85+, by sex) |
| `Rmax` neurodegeneration /yr | 0.022789 | 0.030981 | anchored (CDC dementia-combined @85+; female higher) |
| `Rmax` infection /yr | 0.004823 | 0.003393 | anchored (CDC flu/pneumonia+sepsis @85+, by sex) |
| residual(age) | table (per-sex) | table (per-sex) | anchored (all-cause − modeled − extrinsic, CDC WONDER 2022) |
| extrinsic E(age) | table (per-sex) | table (per-sex) | anchored (CDC WONDER non-falls accidents+suicide+homicide; male ≈ 3× female young-adult) |
| β_frail (sarcopenia multiplier) | 0.6 | 0.6 | anchored-direction (frailty-index → all-cause HR 1.83, Kojima 2018 → ln≈0.60); sex-shared (refinement candidate) |
| lifestyle multiplier | 1.0 | 1.0 | user knob (sedentary ~0.3 ↔ high-risk ~10); scales E only |

Baseline reproduction is exact by construction *and per-sex*: at baseline `B_node = T_node,sex`, `frailtyMult = 1`, so `Σ Rmax·T + Residual + E = ` the sex-specific CDC all-cause mortality → **LE-from-20 ≈ 75.3 M / 80.4 F** (genuine 2022 values; high-mortality year). The female cardiovascular-onset delay and male external excess **emerge from the data**, not a multiplier.

**Cancer node edges** (added with the cancer phenotype): `genomic-instability → cancer` (strong — Armitage-Doll multistage accumulation of somatic mutations is the canonical mechanism), `epigenetic-alterations → cancer` (moderate), `chronic-inflammation → cancer` (moderate — tumour-promoting inflammation), `immunosenescence → cancer` (moderate — loss of immunosurveillance). Cellular senescence is deliberately NOT wired to cancer here: its net effect is antagonistic (tumour-suppressive via growth arrest vs. tumour-promoting via SASP), and the model only carries promoting edges — see [[frameworks/cancer-aging-tradeoffs]].

### Extrinsic / non-biological mortality (the lifestyle channel)

Real cause-of-death data forced this addition: external causes (unintentional injury, suicide, homicide) are **the leading cause of death from birth through age 44** and ~65 % of all deaths at age 25, collapsing to ~3–5 % by 65+ (CDC NVSR, 2022). A pure Gompertz cannot reproduce the young-adult "accident hump." So mortality now has a second, **parallel** channel `E(age)·lifestyle` that is independent of the hallmark graph (your cells' age doesn't change your odds of a motorcycle crash). The pedagogical payoff: the limiting-factor readout correctly flips to *extrinsic* in youth, but the slider also shows you **cannot behaviourally out-run aging** — even `lifestyle = 0` barely moves life expectancy past the 70s, because by then intrinsic mortality dominates. The 2022 hump is overdose/suicide/homicide-driven (historically it was motor-vehicle); falls in the very old are excluded from this channel (they are a frailty consequence, not a lifestyle choice).

---

## Canonical model JSON

> This fenced block is the machine-readable source the simulator embeds. Edit values here, not in the app. (v1 will add a build step that extracts this block to `viz/model.json`.)

```json
{
  "meta": {
    "version": "v0.5",
    "ageRange": [
      20,
      200
    ],
    "dt": 1,
    "couple": 1,
    "note": "Illustrative parameter layer for aging-simulator v0.3. Structure from causal-graph-data.md (verified). Coupling = bounded fixed point. Mortality = CDC-WONDER-2022 SEX-SPECIFIC competing hazards (no sex scalar). NOT verified facts; sensitivity-exploration only.",
    "edgesNote": "UNIFIED 2026-06-11: MODEL.edges is the single source of truth (kind: coupling|mediator|cause|augment|frailty). Engine partitions via edgesByKind(); driver edges derive from stateNodes rate.terms, terminal from node role. Counts: coupling 38 mediator 9 cause 21 augment 1 frailty 10."
  },
  "strengthToGain": {
    "strong": 0.2,
    "moderate": 0.1,
    "weak": 0.04,
    "disputed": 0.03
  },
  "coupling": {
    "method": "fixed-point",
    "iterations": 60,
    "note": "Delta = p + couple*G*Delta solved by iteration (= (I-couple*G)^-1 * p). p = primary deviation from a node's own intervention. Bounded & stable: spectral radius(couple*G) approx 0.10."
  },
  "mortality": {
    "model": "competing-hazards-sexspecific",
    "extrinsic": {
      "lifestyleMult": 1,
      "note": "Non-biological parallel channel: (unintentional injury − falls)+suicide+homicide, per-year by age & SEX; CDC WONDER 2022. Does NOT cascade. lifestyleMult scales it (sedentary~0.3, average 1.0, high-risk~10). Male ~3x female in young adults. Elderly falls excluded (they live in the separate 'falls' terminal cause W00-W19, NOT lifestyle-scaled — a future external-injury merge would fold them back under one umbrella while keeping this non-fall component lifestyle-scaled; see PROJECT-NOTES § frailty).",
      "byAge": {
        "male": [
          [
            20,
            0.0007905876
          ],
          [
            30,
            0.0012253
          ],
          [
            40,
            0.001227487
          ],
          [
            50,
            0.001130926
          ],
          [
            60,
            0.001111798
          ],
          [
            70,
            0.0008256019
          ],
          [
            80,
            0.001033119
          ],
          [
            90,
            0.001780358
          ]
        ],
        "female": [
          [
            20,
            0.0002423223
          ],
          [
            30,
            0.0003924957
          ],
          [
            40,
            0.0004232986
          ],
          [
            50,
            0.0004418697
          ],
          [
            60,
            0.000390855
          ],
          [
            70,
            0.0002879553
          ],
          [
            80,
            0.0004080632
          ],
          [
            90,
            0.0008667438
          ]
        ]
      }
    },
    "frailty": {
      "node": "sarcopenia",
      "DISABLED": true,
      "betaByCause_DISABLED_gap": {
        "cardiovascular": 0.9708,
        "cancer": 0.678,
        "neurodegeneration": 0.8755,
        "infection": 1.5913,
        "diabetes": 0.8755,
        "copd": 0.8755,
        "ckd": 0.8755,
        "liver": 0.8755,
        "falls": 0.8755,
        "residual": 0.8755
      },
      "note": "DISABLED 2026-06-11 (frailty EDGES removed from MODEL.edges). Was a cause-specific frailty multiplier exp(beta_cause·(sarcopenia B−T)) on EVERY intrinsic cause. REMOVED: it was identified with the SARCOPENIA node (an age sigmoid) yet carried Peng-2022 frail-vs-ROBUST cause-specific HRs, so a sarcopenia intervention implausibly bought less liver/CKD/cancer death (the entire 4.137-yr sarcopenia ΔLE was this multiplier — sarcopenia has no other modeled mortality path). Two reasons it could not just be renamed: (1) deviation-form (=1 at baseline) ⇒ it explained NO baseline mortality, only granted intervention benefits — not a real reserve state; (2) Peng frail-vs-robust HRs bundle disability/comorbidity/severity/reverse-causation and cannot be transplanted onto a normalized 0→1 latent without calibration. Betas PARKED above as #gap/needs-independent-modeling — NOT executed (the engine reads frailty edges, which are gone; this key is non-functional). A real physiologic-reserve state (own observable trajectory + baseline calibration + evidence interventions move it) is the future replacement — see model/PROJECT-NOTES.md § frailty. #gap/no-mechanism"
    },
    "causes": {
      "cardiovascular": {
        "node": "atherosclerosis",
        "RmaxPerYear": {
          "male": 0.055434322,
          "female": 0.049566865
        },
        "cdc": "HARMONIZED 2019 (CDC WONDER D76, per sex × ten-year age). cardiovascular: all circulatory I00-I99 (incl I26-I28 once — fixes pilot double-count) + K55 mesenteric",
        "provenance": "calibrated. Op A 2026-06-11: folded circulatory remainder into cardiovascular band; validated 2026-06-11 by graph-node-validator (independent CDC WONDER D76 2019 re-pull; all rates confirmed; Rmax arithmetic exact; burden table verified at all 10 anchor ages; residual reduction verified; excluded codes I75/I76/I96-I98 confirmed invalid in D76 v2). Net-new codes: I10/I12/I15 (hypertensive, excl I11/I13 already in band), I26-28 (pulmonary heart/embolism), I70-74/I77-78 (arteries incl aortic aneurysm I71), I80-89 (veins/lymphatic), K55 (mesenteric infarction — vascular mechanism, digestive ICD chapter), I95/I99 (other circ). Method: new_CV_hazard = old_CV_hazard + net_new_hazard (2019 D76 rates); new_Rmax = new_CV_hazard at age 90; burden = inverse-odds-link; residual -= net_new_hazard (exact subtraction; TOTAL HAZARD INVARIANT at every anchor age). Female LE drift 80.862→80.84 confirmed as legitimate PCHIP interpolation artifact (athero burden table has 75/85 intermediate anchors; residual table has decade-only anchors; between-anchor PCHIP shapes diverge, net +0.022 yr survival-weighted leak at ages 71–89; anchor-point hazard invariant to 1e-9; not an arithmetic error). Downgraded from seeder-claimed 'anchored' to 'calibrated' because SWAP-TO-2022 is an open #gap (consistent with all other D76 2019 causes in the model). Year note: existing-band Rmax/burden on 2022 data; net-new on 2019 data; residual base on 2022; SWAP-TO-2022 pending. #gap: I75/I76/I96-I98 excluded (confirmed invalid in D76 v2 by validator re-pull)."
      },
      "cancer": {
        "node": "cancer",
        "RmaxPerYear": {
          "male": 0.020983064,
          "female": 0.012745745
        },
        "cdc": "HARMONIZED 2019 (CDC WONDER D76, per sex × ten-year age). cancer: malignant neoplasms C00-C97"
      },
      "neurodegeneration": {
        "node": "neurodegeneration",
        "RmaxPerYear": {
          "male": 0.024921228,
          "female": 0.031549709
        },
        "cdc": "HARMONIZED 2019 (CDC WONDER D76, per sex × ten-year age). neurodegeneration: dementia G30/G31/F01/F03 + Parkinson/movement G20-G25 + atrophies/ALS G10-G14",
        "provenance": "calibrated. Op A batched 2026-06-11: folded Parkinson/movement (G20,G21,G23,G24,G25) and systemic atrophies (G10,G11,G12,G14) into neurodegeneration band. G13 confirmed invalid in D76. Net-new rates: D76 2019 per sex x ten-year age (B_1=D76.V5, O_aar=aar_none, F_D76.V2=individual codes). Hazard-space recompute: old_band_h + nn_h → new_Rmax = new_band_h(90); burden = inverse-odds-link; residual -= nn_h (exact; total hazard invariant at every anchor). Male net-new rates/100k: {20:0.1, 30:0.2, 40:0.8, 50:2.9, 60:9.0, 70:36.4, 80:157.7, 90:346.2}. Female: {20:0.0, 30:0.2, 40:0.5, 50:1.8, 60:5.8, 70:20.4, 80:73.3, 90:160.9}. #gap: G13 excluded (invalid in D76); SWAP-TO-2022 pending."
      },
      "infection": {
        "node": "immunosenescence",
        "RmaxPerYear": {
          "male": 0.0054715193,
          "female": 0.004463553
        },
        "cdc": "HARMONIZED 2019 (CDC WONDER D76, per sex × ten-year age). infection: influenza/pneumonia J09-J18 + sepsis A40-A41 + HIV B20-B24 + intestinal A00-A09",
        "provenance": "calibrated. Op A batched 2026-06-11: folded HIV (B20-B24) and intestinal infectious (A00-A09, incl. C.difficile) into infection band. Hazard-space recompute: old_band_h + nn_h → new_Rmax = new_band_h(90); burden = inverse-odds-link; residual -= nn_h. Male net-new rates/100k: {20:0.2, 30:1.7, 40:2.4, 50:5.0, 60:7.5, 70:8.4, 80:15.1, 90:35.9}. Female: {20:0.0, 30:0.6, 40:1.3, 50:2.2, 60:3.5, 70:6.0, 80:13.5, 90:39.2}. Note: female age-20 suppressed (<10 deaths); treated as 0. #gap: SWAP-TO-2022 pending."
      },
      "diabetes": {
        "node": "diabetes",
        "RmaxPerYear": {
          "male": 0.003191,
          "female": 0.002261
        },
        "cdc": "E10-E14, CDC WONDER D76 2019 (API; 2022 D158 API-blocked) — SWAP-TO-2022"
      },
      "copd": {
        "node": "copd",
        "RmaxPerYear": {
          "male": 0.007382,
          "female": 0.006072
        },
        "cdc": "J40-J47, CDC WONDER D76 2019 (API; 2022 D158 API-blocked) — SWAP-TO-2022"
      },
      "ckd": {
        "node": "ckd",
        "RmaxPerYear": {
          "male": 0.003162,
          "female": 0.002142
        },
        "cdc": "N00-N07,N17-N19,N25-N27, CDC WONDER D76 2019 (API; 2022 D158 API-blocked) — SWAP-TO-2022"
      },
      "liver": {
        "node": "liver",
        "RmaxPerYear": {
          "male": 0.000384,
          "female": 0.00023
        },
        "cdc": "K70,K73,K74 [2019] + viral-hepatitis B15,B16,B17,B18,B19; non-monotonic (peaks midlife); net-new from CDC WONDER D76 2019 per sex x ten-year age; SWAP-TO-2022 pending",
        "provenance": "calibrated. Op A batched 2026-06-11: folded viral hepatitis (B15-B19) into liver band. Non-monotonic: liver-hep also peaks at 60-70 then declines. Hazard-space recompute: old_band_h + nn_h → new_Rmax = new_band_h(90); burden = inverse-odds-link. >90 anchors: flat at B=0.5 (new_Rmax = new_band_h(90) = old_flat_h(90) + nn_liver_90, so >90 burden = 0.5). Male net-new rates/100k: {30:0.1, 40:0.6, 50:2.0, 60:5.6, 70:5.8, 80:2.4, 90:2.0}. Female: {30:0.1, 40:0.3, 50:1.1, 60:2.6, 70:2.3, 80:1.9, 90:2.0}. Note: age-20 suppressed for both sexes; treated as 0. #gap: SWAP-TO-2022 pending."
      },
      "falls": {
        "node": "falls-mortality",
        "RmaxPerYear": {
          "male": 0.003112,
          "female": 0.002569
        },
        "cdc": "W00-W19 (falls only; ICD codes W00-W19 individually). CDC WONDER D76 2019 per sex x ten-year age. E40-E46 malnutrition REBUCKETED into residual 2026-06-11 (net rates at 85+: M 81.5/100k, F 102.4/100k; removed from this cause; mass absorbed by dense residual recompute). SWAP-TO-2022 pending. #gap: external-injury merge deferred; R54 senility + J69 aspiration stay in residual.",
        "provenance": "calibrated"
      },
      "residual": {
        "node": "residual-aging",
        "RmaxPerYear": {
          "male": 0.016474509,
          "female": 0.014194384
        },
        "cdc": "residual remainder; 2019-harmonized; see model/cod-residual-partition-2019.md",
        "provenance": "calibrated. Exact refactor of the former mortality.residual channel; Rmax=residTable(90) per sex; B_res=h/(1+h) per integer age 20-130. Invariance-proven: max|delta-hazard|<1e-14 both sexes vs pre-conversion baseline."
      }
    },
    "note": "v0.3: sexMult REMOVED. Each cause carries per-sex curves + per-sex Rmax; residual & extrinsic per-sex. Female cardiovascular-onset delay (~10yr midlife) and 3x male external excess now EMERGE from CDC WONDER data, not a scalar.",
    "oldAgeTail": {
      "rate": 0,
      "fromAge": 90,
      "note": "DEPRECATED v0.4 (2026-06-09): old-age escalation is no longer an age-keyed hazard factor. It now emerges from the cause-node RESERVE-DEPLETION burden tables (B asymptotes toward 1; odds link Rmax*B/(1-B) in engine.mjs converts reserve->hazard) so interventions that slow burden accumulation bend the >90 mortality curve. rate kept 0 for back-compat; nothing in the engine multiplies by it anymore. Residual (unmodeled remainder) carries its own escalation in its age table."
    }
  },
  "nodes": [
    {
      "id": "genomic-instability",
      "label": "Genomic instability",
      "layer": "tier1",
      "tractability": "low",
      "provenance": "anchored",
      "initial": 0.05,
      "rate": {
        "base": 0.01,
        "terms": [],
        "_migrated": "2026-06-12 Phase C3: de-age-pegged from curve{linear,t0:0.05,slope:0.01} to emergent ∫rate·dt. base=former slope; T[0]=initial=former t0; reproduces the linear curve within float tolerance. terms:[] = exogenous-driver channel, populate-ready (smoking/alcohol/airPollution stubs). See model/gi-migration-design.md."
      }
    },
    {
      "id": "telomere-attrition",
      "label": "Telomere attrition",
      "layer": "tier1",
      "tractability": "low",
      "provenance": "anchored",
      "curve": {
        "form": "linear",
        "params": {
          "t0": 0.05,
          "slope": 0.011
        },
        "female": {
          "t0": 0.03,
          "slope": 0.011
        }
      }
    },
    {
      "id": "epigenetic-alterations",
      "label": "Epigenetic alterations",
      "layer": "tier1",
      "tractability": "moderate",
      "provenance": "anchored-direction",
      "curve": {
        "form": "linear",
        "params": {
          "t0": 0,
          "slope": 0.0115
        },
        "female": {
          "t0": 0,
          "slope": 0.0108
        }
      }
    },
    {
      "id": "mitochondrial-dysfunction",
      "label": "Mitochondrial dysfunction",
      "layer": "tier1",
      "tractability": "moderate",
      "provenance": "ordinal-default",
      "curve": {
        "form": "exponential",
        "params": {
          "A": 0.05,
          "r": 0.03
        }
      }
    },
    {
      "id": "cellular-senescence",
      "label": "Cellular senescence",
      "layer": "tier2",
      "tractability": "high",
      "provenance": "anchored",
      "initial": 0,
      "rate": {
        "base": 0,
        "self": {
          "coeff": 0.04081077419238822,
          "offset": 0.025
        },
        "terms": [],
        "_migrated": "2026-06-12 Phase C3b: de-age-pegged from curve{exponential,A:0.025,r:0.04} to emergent ∫rate·dt with a SELF-AMPLIFYING (value-proportional) rate = (e^r−1)·(value + A). Age-free: the exponential rise EMERGES from senescence's own paracrine/bystander feed-forward, not from an age input. coeff = e^0.04−1 is the discrete-time growth factor that reproduces the former exponential curve EXACTLY at the integer age grid (max err ~9e-16) ⇒ baseline + intervention LE numerically unchanged. terms:[] = exogenous-driver channel (smokingStatus/alcohol/airPollution/calorieBalance stubs now populate-ready). Pattern: model/gi-migration-design.md."
      },
      "clearance": {
        "form": "saturating",
        "Vmax": 0.075,
        "Km": 0.30,
        "driver": "immunosenescence",
        "betaImm": 0.010,
        "productionResponse": true,
        "c0": 0,
        "beta": 0,
        "_design": "2026-06-24 Phase SR: saturating-removal integration (model/sr-saturating-removal-integration-design.md §11; Codex-collaborated best-guess). form=saturating ⇒ removal R(S)=Vmax·S/(Km+S) on the senescence DEVIATION + production-response self-amp (rate.self.coeff·x) + immunosenescence→Vmax modifier. Deviation-form: dx/dt = coeff·x − [R(S;VmaxEff)−R(T;Vmax)], both vanish at x=0 ⇒ baseline byte-identical (M 77.458855/F 82.117850). Vmax=0.075/yr, Km=0.30 chosen so the deviation system is removal-dominated (resilient) until T_crit≈0.44 ⇒ age≈93 (R'(T)>P_S=0.0408), then tips into loss-of-resilience — human quasi-steady-state regime (Raz 2026); structure from Karin 2019 (mechanism iv, density-dependent self-inhibition). betaImm=0.010 (immunosenescence lowers ceiling, SECONDARY — Karin found mechanism iii not required). productionResponse=true ACTIVATES self-amp on deviations (was frozen; Path B). Km is NOT Karin's mouse κ/X_c=0.065 (S here is normalized hallmark burden, not the SR death threshold). Senolytic-pulse rebound stays SEPARATE (its own τ, engine op.dev exact map) — NOT healed by R(S) (gross-production refill ≠ net relaxation; §11). Legacy linear c0/beta retained=0 (form=linear path). #gap/needs-clearance-coefficients (now best-guess anchored, pending fit) #gap/immunosenescence-age-table"
      }
    },
    {
      "id": "deregulated-nutrient-sensing",
      "label": "Deregulated nutrient sensing",
      "layer": "tier2",
      "tractability": "high",
      "provenance": "ordinal-default",
      "curve": {
        "form": "sigmoid",
        "params": {
          "L": 0.9,
          "k": 0.09,
          "mid": 55
        }
      }
    },
    {
      "id": "disabled-macroautophagy",
      "label": "Disabled macroautophagy",
      "layer": "tier2",
      "tractability": "high",
      "provenance": "ordinal-default",
      "curve": {
        "form": "sigmoid",
        "params": {
          "L": 0.85,
          "k": 0.08,
          "mid": 58
        }
      }
    },
    {
      "id": "loss-of-proteostasis",
      "label": "Loss of proteostasis",
      "layer": "tier2",
      "tractability": "moderate",
      "provenance": "ordinal-default",
      "curve": {
        "form": "exponential",
        "params": {
          "A": 0.03,
          "r": 0.035
        }
      }
    },
    {
      "id": "chronic-inflammation",
      "label": "Chronic inflammation",
      "layer": "tier3",
      "tractability": "high",
      "provenance": "anchored-direction",
      "initial": 0.016187588965882405,
      "rate": {
        "base": 0,
        "self": {
          "form": "logistic",
          "k": 0.1,
          "cap": 0.9
        },
        "terms": [],
        "_migrated": "2026-06-12 Phase C3c: de-age-pegged from curve{sigmoid,L:0.9,k:0.1,mid:60} to emergent ∫rate·dt with a SATURATING SELF-DYNAMIC. Uses the EXACT age-free logistic one-step map B_next = L·B·E/(L+B·(E−1)), E=exp(k·dt) — the closed-form solution of dB/dt=k·B·(1−B/L), NOT a Euler approximation — which reproduces the former sigmoid EXACTLY at the integer grid (max err ~1e-15) ⇒ baseline + intervention LE numerically unchanged. initial = sigmoid(age 20) = 0.0161876. The saturating inflammaging rise EMERGES age-free from inflammation's own self-dynamic. ⚠ RESIDUAL-DECOMPOSITION: this baseline self-dynamic encodes UNATTRIBUTED ENDOGENOUS FEEDBACK (the senescence/SASP, NF-κB, innate-immune feed-forward that drives inflammaging) as a lumped residual. When exogenous/inter-hallmark drivers are later populated as live edges, their contribution MUST be decomposed OUT of this self-dynamic residual (route-once: do not double-count the self-dynamic + a driver that is in fact part of it). terms:[] = exogenous-driver channel (migration-only — drivers NOT populated). Pattern: model/gi-migration-design.md; reusable saturating self-dynamic for sigmoid nodes."
      }
    },
    {
      "id": "altered-intercellular-communication",
      "label": "Altered intercellular communication",
      "layer": "tier3",
      "tractability": "moderate",
      "provenance": "ordinal-default",
      "curve": {
        "form": "sigmoid",
        "params": {
          "L": 0.85,
          "k": 0.08,
          "mid": 60
        }
      }
    },
    {
      "id": "stem-cell-exhaustion",
      "label": "Stem cell exhaustion",
      "layer": "tier3",
      "tractability": "low",
      "provenance": "ordinal-default",
      "curve": {
        "form": "sigmoid",
        "params": {
          "L": 0.9,
          "k": 0.09,
          "mid": 65
        }
      }
    },
    {
      "id": "dysbiosis",
      "label": "Dysbiosis",
      "layer": "tier3",
      "tractability": "moderate",
      "provenance": "ordinal-default",
      "curve": {
        "form": "linear",
        "params": {
          "t0": 0.05,
          "slope": 0.009
        }
      }
    },
    {
      "id": "atherosclerosis",
      "label": "Atherosclerosis / CVD",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "anchored",
      "role": "mortality-cause",
      "mortalityCause": "cardiovascular",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.0005654171
          ],
          [
            30,
            0.002282214
          ],
          [
            40,
            0.007847901
          ],
          [
            50,
            0.02378938
          ],
          [
            60,
            0.05726072
          ],
          [
            70,
            0.1093072
          ],
          [
            80,
            0.2293106
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.7039
          ],
          [
            110,
            0.8497
          ],
          [
            120,
            0.9307
          ],
          [
            130,
            0.9696
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.0004481884
            ],
            [
              30,
              0.001455071
            ],
            [
              40,
              0.004490939
            ],
            [
              50,
              0.01217051
            ],
            [
              60,
              0.03001279
            ],
            [
              70,
              0.06826279
            ],
            [
              80,
              0.1858231
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.7039
            ],
            [
              110,
              0.8497
            ],
            [
              120,
              0.9307
            ],
            [
              130,
              0.9696
            ]
          ]
        }
      }
    },
    {
      "id": "cancer",
      "label": "Cancer",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "anchored",
      "role": "mortality-cause",
      "mortalityCause": "cancer",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.001803805
          ],
          [
            30,
            0.0035455
          ],
          [
            40,
            0.01025629
          ],
          [
            50,
            0.03873933
          ],
          [
            60,
            0.1231037
          ],
          [
            70,
            0.2347566
          ],
          [
            80,
            0.3700167
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.7039
          ],
          [
            110,
            0.8497
          ],
          [
            120,
            0.9307
          ],
          [
            130,
            0.9696
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.002103835
            ],
            [
              30,
              0.006328405
            ],
            [
              40,
              0.02268683
            ],
            [
              50,
              0.06561183
            ],
            [
              60,
              0.1551608
            ],
            [
              70,
              0.2632569
            ],
            [
              80,
              0.3941426
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.7039
            ],
            [
              110,
              0.8497
            ],
            [
              120,
              0.9307
            ],
            [
              130,
              0.9696
            ]
          ]
        }
      }
    },
    {
      "id": "neurodegeneration",
      "label": "Neurodegeneration",
      "layer": "phenotype",
      "tractability": "low",
      "provenance": "calibrated",
      "role": "mortality-cause",
      "mortalityCause": "neurodegeneration",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            3.127541e-05
          ],
          [
            30,
            0.0001202316
          ],
          [
            40,
            0.0003549738
          ],
          [
            50,
            0.001517456
          ],
          [
            60,
            0.006908755
          ],
          [
            70,
            0.03667068
          ],
          [
            80,
            0.1863775
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.7039
          ],
          [
            110,
            0.8497
          ],
          [
            120,
            0.9307
          ],
          [
            130,
            0.9696
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              2.884526e-05
            ],
            [
              30,
              5.473934e-05
            ],
            [
              40,
              0.0001807223
            ],
            [
              50,
              0.0008535639
            ],
            [
              60,
              0.004327793
            ],
            [
              70,
              0.02484633
            ],
            [
              80,
              0.1483414
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.7039
            ],
            [
              110,
              0.8497
            ],
            [
              120,
              0.9307
            ],
            [
              130,
              0.9696
            ]
          ]
        }
      }
    },
    {
      "id": "immunosenescence",
      "label": "Immunosenescence",
      "layer": "phenotype",
      "tractability": "low",
      "provenance": "calibrated",
      "role": "mortality-cause",
      "mortalityCause": "infection",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.001556201
          ],
          [
            30,
            0.006552499
          ],
          [
            40,
            0.01251668
          ],
          [
            50,
            0.02950065
          ],
          [
            60,
            0.06330283
          ],
          [
            70,
            0.1157664
          ],
          [
            80,
            0.2500347
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.7039
          ],
          [
            110,
            0.8497
          ],
          [
            120,
            0.9307
          ],
          [
            130,
            0.9696
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.001500114
            ],
            [
              30,
              0.005024624
            ],
            [
              40,
              0.0112735
            ],
            [
              50,
              0.02463516
            ],
            [
              60,
              0.054589
            ],
            [
              70,
              0.1082389
            ],
            [
              80,
              0.2320286
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.7039
            ],
            [
              110,
              0.8497
            ],
            [
              120,
              0.9307
            ],
            [
              130,
              0.9696
            ]
          ]
        }
      }
    },
    {
      "id": "diabetes",
      "label": "Diabetes mellitus",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "anchored",
      "role": "mortality-cause",
      "mortalityCause": "diabetes",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.001877
          ],
          [
            30,
            0.007465
          ],
          [
            40,
            0.020565
          ],
          [
            50,
            0.059811
          ],
          [
            60,
            0.129569
          ],
          [
            70,
            0.228295
          ],
          [
            80,
            0.351555
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.703913
          ],
          [
            110,
            0.849668
          ],
          [
            120,
            0.930733
          ],
          [
            130,
            0.969646
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.002207
            ],
            [
              30,
              0.006154
            ],
            [
              40,
              0.017384
            ],
            [
              50,
              0.045992
            ],
            [
              60,
              0.1042
            ],
            [
              70,
              0.195087
            ],
            [
              80,
              0.332053
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.703913
            ],
            [
              110,
              0.849668
            ],
            [
              120,
              0.930733
            ],
            [
              130,
              0.969646
            ]
          ]
        }
      }
    },
    {
      "id": "copd",
      "label": "COPD / chronic lower respiratory",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "anchored",
      "role": "mortality-cause",
      "mortalityCause": "copd",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.000677
          ],
          [
            30,
            0.001083
          ],
          [
            40,
            0.002028
          ],
          [
            50,
            0.010721
          ],
          [
            60,
            0.058538
          ],
          [
            70,
            0.15721
          ],
          [
            80,
            0.318815
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.703913
          ],
          [
            110,
            0.849668
          ],
          [
            120,
            0.930733
          ],
          [
            130,
            0.969646
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.000494
            ],
            [
              30,
              0.001316
            ],
            [
              40,
              0.002792
            ],
            [
              50,
              0.015405
            ],
            [
              60,
              0.065415
            ],
            [
              70,
              0.157135
            ],
            [
              80,
              0.32817
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.703913
            ],
            [
              110,
              0.849668
            ],
            [
              120,
              0.930733
            ],
            [
              130,
              0.969646
            ]
          ]
        }
      }
    },
    {
      "id": "ckd",
      "label": "Chronic kidney disease",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "anchored",
      "role": "mortality-cause",
      "mortalityCause": "ckd",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.000632
          ],
          [
            30,
            0.002209
          ],
          [
            40,
            0.006285
          ],
          [
            50,
            0.020749
          ],
          [
            60,
            0.051305
          ],
          [
            70,
            0.114782
          ],
          [
            80,
            0.256175
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.703913
          ],
          [
            110,
            0.849668
          ],
          [
            120,
            0.930733
          ],
          [
            130,
            0.969646
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.000933
            ],
            [
              30,
              0.002793
            ],
            [
              40,
              0.007874
            ],
            [
              50,
              0.020128
            ],
            [
              60,
              0.047577
            ],
            [
              70,
              0.120329
            ],
            [
              80,
              0.26969
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.703913
            ],
            [
              110,
              0.849668
            ],
            [
              120,
              0.930733
            ],
            [
              130,
              0.969646
            ]
          ]
        }
      }
    },
    {
      "id": "liver",
      "label": "Chronic liver disease / cirrhosis",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "calibrated",
      "role": "mortality-cause",
      "mortalityCause": "liver",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.002598
          ],
          [
            30,
            0.074698
          ],
          [
            40,
            0.222672
          ],
          [
            50,
            0.420814
          ],
          [
            60,
            0.577558
          ],
          [
            70,
            0.57047
          ],
          [
            75,
            0.551966
          ],
          [
            80,
            0.532278
          ],
          [
            85,
            0.516251
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.5
          ],
          [
            110,
            0.5
          ],
          [
            120,
            0.5
          ],
          [
            130,
            0.5
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.004329
            ],
            [
              30,
              0.08
            ],
            [
              40,
              0.215017
            ],
            [
              50,
              0.394737
            ],
            [
              60,
              0.513742
            ],
            [
              70,
              0.518829
            ],
            [
              75,
              0.52932
            ],
            [
              80,
              0.54
            ],
            [
              85,
              0.519961
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.5
            ],
            [
              110,
              0.5
            ],
            [
              120,
              0.5
            ],
            [
              130,
              0.5
            ]
          ]
        }
      }
    },
    {
      "id": "falls-mortality",
      "label": "Falls (external injury)",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "calibrated. Op A split 2026-06-11: E40-E46 malnutrition removed from the falls bucket; falls cause is now W00-W19 only. CDC WONDER D76 2019 W00-W19 (individual codes W00-W19) per sex x ten-year age. RmaxPerYear = 85+ band rate (311.2/100k M, 256.9/100k F). Reserve transform B'=h/(1+h), h=rate/Rmax; >90 shared Gompertz tail anchors. Malnutrition mass (E40-E46, 2019 net rates: M 81.5/100k @85+, F 102.4/100k @85+) rebucketed into dense residual via engine-based recompute (residual_new(k) = preSim.hazard[k] - (postSim.hazard[k] - postSim.decomposition[k].parts.residual) at every integer age 20-130). sarcopenia→falls frailty edge (β 0.6366, Yeung 2019) unchanged. #gap: external-injury merge deferred; SWAP-TO-2022 pending; R54 senility + J69 aspiration stay in residual.",
      "role": "mortality-cause",
      "mortalityCause": "falls",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.002244
          ],
          [
            30,
            0.003841
          ],
          [
            40,
            0.006386
          ],
          [
            50,
            0.014254
          ],
          [
            60,
            0.029925
          ],
          [
            70,
            0.067146
          ],
          [
            80,
            0.20592
          ],
          [
            90,
            0.5
          ],
          [
            100,
            0.7039
          ],
          [
            110,
            0.8497
          ],
          [
            120,
            0.9307
          ],
          [
            130,
            0.9696
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.000778
            ],
            [
              30,
              0.000778
            ],
            [
              40,
              0.00233
            ],
            [
              50,
              0.00542
            ],
            [
              60,
              0.016462
            ],
            [
              70,
              0.046399
            ],
            [
              80,
              0.17581
            ],
            [
              90,
              0.5
            ],
            [
              100,
              0.7039
            ],
            [
              110,
              0.8497
            ],
            [
              120,
              0.9307
            ],
            [
              130,
              0.9696
            ]
          ]
        }
      }
    },
    {
      "id": "residual-aging",
      "label": "Residual aging (unmodeled)",
      "layer": "phenotype",
      "tractability": "low",
      "provenance": "calibrated. v0.4 reserve-depletion refactor of the residual channel (2026-06-15): exact conversion of the per-year residTable into odds-link form Rmax*B/(1-B), with B=h/(1+h) at every integer age 20-130, Rmax=residTable(90). Reconstruction error <1e-15; B@90=0.5; B@130<0.971; baseline LE invariant to <1e-14 max-hazard deviation. Residual is definitionally driverless (the unmodeled remainder). Ships calibrated (not anchored: inherited residual has precision and provenance gaps, SWAP-TO-2022 pending). #gap: no upstream driver edges by construction; SWAP-TO-2022 pending.",
      "role": "mortality-cause",
      "mortalityCause": "residual",
      "citation": "CDC WONDER 2019 D76 residual (all-cause minus modeled causes minus extrinsic)",
      "wiki": "model/cod-residual-partition-2019",
      "definition": "Heterogeneous aggregate of all deaths not individually modeled as their own cause node: ill-defined and unattributable deaths (R95-R99), medical and surgical complications (Y40-Y84), residual symptoms, and the long tail of minor individual causes below the modeling threshold. Excludes the 9 named disease causes (cardiovascular, cancer, neurodegeneration, infection, diabetes, COPD, CKD, liver, falls) and extrinsic/accidents -- each is its own channel. Shrinks as the CoD-residual-partition campaign attributes more buckets to driver nodes; Rmax and B_res are recomputed on each partition step. Freeze caveat: because it bundles many unrelated processes, freezing residual = a coarse halt-all-unmodeled-aging scenario lever -- the least mechanistically interpretable freeze in the model.",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.006442485266866949
          ],
          [
            21,
            0.007014992682130331
          ],
          [
            22,
            0.007378575283405629
          ],
          [
            23,
            0.007622170772984473
          ],
          [
            24,
            0.007834277670384474
          ],
          [
            25,
            0.00810261323229948
          ],
          [
            26,
            0.008514570937013854
          ],
          [
            27,
            0.009156568332975176
          ],
          [
            28,
            0.010113903083687736
          ],
          [
            29,
            0.011469812088461418
          ],
          [
            30,
            0.01330505701769438
          ],
          [
            31,
            0.01512837788154526
          ],
          [
            32,
            0.016469889111809126
          ],
          [
            33,
            0.017437002117210526
          ],
          [
            34,
            0.0181346254729037
          ],
          [
            35,
            0.01866609307802126
          ],
          [
            36,
            0.01913315936593211
          ],
          [
            37,
            0.019636303089764065
          ],
          [
            38,
            0.020274179164514877
          ],
          [
            39,
            0.02114316536144572
          ],
          [
            40,
            0.022336261664439784
          ],
          [
            41,
            0.023623677289206967
          ],
          [
            42,
            0.024782856029981353
          ],
          [
            43,
            0.02591181362651335
          ],
          [
            44,
            0.027105730745390917
          ],
          [
            45,
            0.028456430441953163
          ],
          [
            46,
            0.030052032562256182
          ],
          [
            47,
            0.03197589098624884
          ],
          [
            48,
            0.0343050282583373
          ],
          [
            49,
            0.037108236760252794
          ],
          [
            50,
            0.0404435257537781
          ],
          [
            51,
            0.04393020639187832
          ],
          [
            52,
            0.047211650470613396
          ],
          [
            53,
            0.0503752469746417
          ],
          [
            54,
            0.05351774134049207
          ],
          [
            55,
            0.05675152720630103
          ],
          [
            56,
            0.060209641960291695
          ],
          [
            57,
            0.06404822258170406
          ],
          [
            58,
            0.06844300889605483
          ],
          [
            59,
            0.07357860791857192
          ],
          [
            60,
            0.07962834759900701
          ],
          [
            61,
            0.08470109085769426
          ],
          [
            62,
            0.08751716183513607
          ],
          [
            63,
            0.08907704193959001
          ],
          [
            64,
            0.09032248766639313
          ],
          [
            65,
            0.09215159156217512
          ],
          [
            66,
            0.09541014173464929
          ],
          [
            67,
            0.10086347513443651
          ],
          [
            68,
            0.10915253412426003
          ],
          [
            69,
            0.12074221069128217
          ],
          [
            70,
            0.13587003643511297
          ],
          [
            71,
            0.14555365805474918
          ],
          [
            72,
            0.14437154463171537
          ],
          [
            73,
            0.13702687758166301
          ],
          [
            74,
            0.12798446617481937
          ],
          [
            75,
            0.12186172142726055
          ],
          [
            76,
            0.12336101537561525
          ],
          [
            77,
            0.1366432822347178
          ],
          [
            78,
            0.16434821123593824
          ],
          [
            79,
            0.20677996802373366
          ],
          [
            80,
            0.26167312768617823
          ],
          [
            81,
            0.3231362499340578
          ],
          [
            82,
            0.38216757599809065
          ],
          [
            83,
            0.4334664099359095
          ],
          [
            84,
            0.4748457984961367
          ],
          [
            85,
            0.505756154869287
          ],
          [
            86,
            0.5262660998483691
          ],
          [
            87,
            0.5364398668756309
          ],
          [
            88,
            0.5360180425218976
          ],
          [
            89,
            0.5242742851426966
          ],
          [
            90,
            0.5
          ],
          [
            91,
            0.5235101736429846
          ],
          [
            92,
            0.5443303953407743
          ],
          [
            93,
            0.5637580114356269
          ],
          [
            94,
            0.5827135209635904
          ],
          [
            95,
            0.6018189163960123
          ],
          [
            96,
            0.6214414725099493
          ],
          [
            97,
            0.6417260087203118
          ],
          [
            98,
            0.6626288432737205
          ],
          [
            99,
            0.683958619617487
          ],
          [
            100,
            0.7054231875355481
          ],
          [
            101,
            0.7249203034051674
          ],
          [
            102,
            0.7416079606505895
          ],
          [
            103,
            0.7566259722823658
          ],
          [
            104,
            0.770723309425081
          ],
          [
            105,
            0.7843770771094218
          ],
          [
            106,
            0.7978613721544643
          ],
          [
            107,
            0.8112943691803125
          ],
          [
            108,
            0.8246773789373459
          ],
          [
            109,
            0.8379313075254637
          ],
          [
            110,
            0.8509308935110225
          ],
          [
            111,
            0.8624804352242051
          ],
          [
            112,
            0.8721836257852669
          ],
          [
            113,
            0.8807886117204823
          ],
          [
            114,
            0.888761007687988
          ],
          [
            115,
            0.8963794015961356
          ],
          [
            116,
            0.9037896283716776
          ],
          [
            117,
            0.911041573577021
          ],
          [
            118,
            0.9181187934152626
          ],
          [
            119,
            0.9249643254513572
          ],
          [
            120,
            0.9315025894684648
          ],
          [
            121,
            0.9378333371565241
          ],
          [
            122,
            0.9438443743015064
          ],
          [
            123,
            0.9492924421227307
          ],
          [
            124,
            0.9540824214134708
          ],
          [
            125,
            0.95820536797078
          ],
          [
            126,
            0.9616941847065481
          ],
          [
            127,
            0.9645950226296126
          ],
          [
            128,
            0.9669484927132606
          ],
          [
            129,
            0.9687737611986648
          ],
          [
            130,
            0.9700456704138035
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.0040612489270127295
            ],
            [
              21,
              0.004587581230090012
            ],
            [
              22,
              0.005135880366095045
            ],
            [
              23,
              0.005697854224566528
            ],
            [
              24,
              0.0062671941788463425
            ],
            [
              25,
              0.006839495988527957
            ],
            [
              26,
              0.007412041317226627
            ],
            [
              27,
              0.007983302925077158
            ],
            [
              28,
              0.008552937852535147
            ],
            [
              29,
              0.00912122725469782
            ],
            [
              30,
              0.009688727368626316
            ],
            [
              31,
              0.010202159031399463
            ],
            [
              32,
              0.010627554915167476
            ],
            [
              33,
              0.010995669234171553
            ],
            [
              34,
              0.011338100336925802
            ],
            [
              35,
              0.01168724458630719
            ],
            [
              36,
              0.01231772226616364
            ],
            [
              37,
              0.01347171692839238
            ],
            [
              38,
              0.015110368281444613
            ],
            [
              39,
              0.017182772540051277
            ],
            [
              40,
              0.01891241566133944
            ],
            [
              41,
              0.02008393885500244
            ],
            [
              42,
              0.02106582592146738
            ],
            [
              43,
              0.021947364910565106
            ],
            [
              44,
              0.022815814231806272
            ],
            [
              45,
              0.023755981086660737
            ],
            [
              46,
              0.024850457986371352
            ],
            [
              47,
              0.026178714491885413
            ],
            [
              48,
              0.027816676691422404
            ],
            [
              49,
              0.02983507915918763
            ],
            [
              50,
              0.03229830094340523
            ],
            [
              51,
              0.034807789898150296
            ],
            [
              52,
              0.03702907694603872
            ],
            [
              53,
              0.03911574503747239
            ],
            [
              54,
              0.04122220935090391
            ],
            [
              55,
              0.04350486347839986
            ],
            [
              56,
              0.046123012261228086
            ],
            [
              57,
              0.04923788370392002
            ],
            [
              58,
              0.05301062288652753
            ],
            [
              59,
              0.05759821919165174
            ],
            [
              60,
              0.06314783053374312
            ],
            [
              61,
              0.06757414897257912
            ],
            [
              62,
              0.06948266956718348
            ],
            [
              63,
              0.06998181160597752
            ],
            [
              64,
              0.0701292507648265
            ],
            [
              65,
              0.07094985117207755
            ],
            [
              66,
              0.0734252441380751
            ],
            [
              67,
              0.07845885404777653
            ],
            [
              68,
              0.08682129767971132
            ],
            [
              69,
              0.09908439010126553
            ],
            [
              70,
              0.11555667795525774
            ],
            [
              71,
              0.124231772325177
            ],
            [
              72,
              0.1178157126232843
            ],
            [
              73,
              0.10243509587446219
            ],
            [
              74,
              0.08408987652453709
            ],
            [
              75,
              0.0694546695604528
            ],
            [
              76,
              0.06570925848256964
            ],
            [
              77,
              0.07940276816371115
            ],
            [
              78,
              0.11451488187976779
            ],
            [
              79,
              0.17065223685003145
            ],
            [
              80,
              0.24287662401877724
            ],
            [
              81,
              0.3204246555942705
            ],
            [
              82,
              0.39094637139106114
            ],
            [
              83,
              0.44928224142349354
            ],
            [
              84,
              0.4941419848085617
            ],
            [
              85,
              0.5258555080243628
            ],
            [
              86,
              0.5451076795597515
            ],
            [
              87,
              0.5523045331803417
            ],
            [
              88,
              0.5473656125349737
            ],
            [
              89,
              0.5299074468640718
            ],
            [
              90,
              0.5
            ],
            [
              91,
              0.5219698485435748
            ],
            [
              92,
              0.5417034094742459
            ],
            [
              93,
              0.5605084179991239
            ],
            [
              94,
              0.5792908328784715
            ],
            [
              95,
              0.5986213579351746
            ],
            [
              96,
              0.6187756379137971
            ],
            [
              97,
              0.6397725974403483
            ],
            [
              98,
              0.6614221839515022
            ],
            [
              99,
              0.6833832473404767
            ],
            [
              100,
              0.7052245285599468
            ],
            [
              101,
              0.724837918720553
            ],
            [
              102,
              0.7415198675868728
            ],
            [
              103,
              0.7564733003633569
            ],
            [
              104,
              0.7704879666687822
            ],
            [
              105,
              0.7840680879370713
            ],
            [
              106,
              0.797504849038485
            ],
            [
              107,
              0.8109252516921226
            ],
            [
              108,
              0.8243325550950491
            ],
            [
              109,
              0.8376443033902312
            ],
            [
              110,
              0.8507284792629093
            ],
            [
              111,
              0.8623261769517986
            ],
            [
              112,
              0.8720207248326804
            ],
            [
              113,
              0.8805976035105139
            ],
            [
              114,
              0.8885441971549403
            ],
            [
              115,
              0.8961510215652878
            ],
            [
              116,
              0.9035684994460603
            ],
            [
              117,
              0.9108453474624414
            ],
            [
              118,
              0.9179597852220545
            ],
            [
              119,
              0.9248470803351118
            ],
            [
              120,
              0.931423089841337
            ],
            [
              121,
              0.9378061332386268
            ],
            [
              122,
              0.9438871966930347
            ],
            [
              123,
              0.9494016819860331
            ],
            [
              124,
              0.95424369378288
            ],
            [
              125,
              0.9583998070206536
            ],
            [
              126,
              0.96190127547638
            ],
            [
              127,
              0.9647929665780568
            ],
            [
              128,
              0.9671125268575985
            ],
            [
              129,
              0.9688717887921383
            ],
            [
              130,
              0.9700282187856176
            ]
          ]
        }
      }
    },
    {
      "id": "sarcopenia",
      "label": "Sarcopenia (muscle)",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "anchored-direction. 2026-06-11: DISCONNECTED from the global cause multiplier (was role:frailty-multiplier). 2026-06-12: now an ORDINARY causal driver (role:driver, like clonal-hematopoiesis) — drives the falls cause via a regular node-source cause edge (sarcopenia→falls, form nodeLogLinear), NOT a special frailty multiplier. The age-sigmoid value is itself age-pegged (migration target: ∫rate·dt).",
      "role": "driver",
      "curve": {
        "form": "sigmoid",
        "params": {
          "L": 0.95,
          "k": 0.1,
          "mid": 72
        }
      }
    },
    {
      "id": "clonal-hematopoiesis",
      "label": "Clonal hematopoiesis",
      "layer": "phenotype",
      "tractability": "low",
      "provenance": "anchored-direction",
      "role": "driver",
      "curve": {
        "form": "exponential",
        "params": {
          "A": 0.008,
          "r": 0.05
        }
      }
    }
  ],
  "edges": [
    {
      "from": "genomic-instability",
      "to": "cellular-senescence",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "genomic-instability",
      "to": "chronic-inflammation",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "genomic-instability",
      "to": "clonal-hematopoiesis",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "telomere-attrition",
      "to": "cellular-senescence",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "telomere-attrition",
      "to": "stem-cell-exhaustion",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "telomere-attrition",
      "to": "genomic-instability",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "epigenetic-alterations",
      "to": "cellular-senescence",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "epigenetic-alterations",
      "to": "stem-cell-exhaustion",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "epigenetic-alterations",
      "to": "deregulated-nutrient-sensing",
      "kind": "coupling",
      "strength": "weak"
    },
    {
      "from": "cellular-senescence",
      "to": "chronic-inflammation",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "cellular-senescence",
      "to": "stem-cell-exhaustion",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "cellular-senescence",
      "to": "altered-intercellular-communication",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "deregulated-nutrient-sensing",
      "to": "disabled-macroautophagy",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "deregulated-nutrient-sensing",
      "to": "cellular-senescence",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "deregulated-nutrient-sensing",
      "to": "mitochondrial-dysfunction",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "deregulated-nutrient-sensing",
      "to": "stem-cell-exhaustion",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "disabled-macroautophagy",
      "to": "loss-of-proteostasis",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "disabled-macroautophagy",
      "to": "mitochondrial-dysfunction",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "disabled-macroautophagy",
      "to": "chronic-inflammation",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "mitochondrial-dysfunction",
      "to": "cellular-senescence",
      "kind": "coupling",
      "strength": "disputed"
    },
    {
      "from": "mitochondrial-dysfunction",
      "to": "chronic-inflammation",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "mitochondrial-dysfunction",
      "to": "loss-of-proteostasis",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "loss-of-proteostasis",
      "to": "neurodegeneration",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "chronic-inflammation",
      "to": "stem-cell-exhaustion",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "chronic-inflammation",
      "to": "atherosclerosis",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "chronic-inflammation",
      "to": "clonal-hematopoiesis",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "chronic-inflammation",
      "to": "sarcopenia",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "dysbiosis",
      "to": "chronic-inflammation",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "dysbiosis",
      "to": "altered-intercellular-communication",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "altered-intercellular-communication",
      "to": "stem-cell-exhaustion",
      "kind": "coupling",
      "strength": "weak"
    },
    {
      "from": "stem-cell-exhaustion",
      "to": "sarcopenia",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "stem-cell-exhaustion",
      "to": "immunosenescence",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "stem-cell-exhaustion",
      "to": "chronic-inflammation",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "clonal-hematopoiesis",
      "to": "atherosclerosis",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "genomic-instability",
      "to": "cancer",
      "kind": "coupling",
      "strength": "strong"
    },
    {
      "from": "epigenetic-alterations",
      "to": "cancer",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "chronic-inflammation",
      "to": "cancer",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "immunosenescence",
      "to": "cancer",
      "kind": "coupling",
      "strength": "moderate"
    },
    {
      "from": "dietSatFat",
      "to": "LDL",
      "coeff": 1.7,
      "form": "linear",
      "provenance": "Mensink 2016/2003: +1.3-2.1 mg/dL per 1% energy (replacement-dependent: PUFA -2.1, carb -1.3); 1.7 = mid. SOLID.",
      "kind": "mediator"
    },
    {
      "from": "dietFiber",
      "to": "LDL",
      "coeff": -2.2,
      "form": "fiberSaturating",
      "provenance": "Brown 1999: -2.2 mg/dL per g/day soluble fiber; SATURATING >10 g/day. SOLID.",
      "kind": "mediator"
    },
    {
      "from": "physicalActivity",
      "to": "HbA1c",
      "coeff": -0.67,
      "form": "exerciseHbA1c",
      "provenance": "Umpierre 2011: -0.67% (T2D) for structured exercise vs sedentary. SOLID. Form scales the -0.67% by activity deviation across the sedentary->active span (~150 min/wk).",
      "kind": "mediator"
    },
    {
      "from": "dietSodium",
      "to": "systolicBP",
      "coeff": 5.8,
      "form": "sodiumConvex",
      "provenance": "He 2013: +5.8 mmHg SBP per +100 mmol/day (slope POSITIVE; the '-5.8 per -100' reduction framing). CONVEX, effect-modified (steeper older/higher-SBP). SOLID. [sign-fixed 2026-06-08]",
      "kind": "mediator"
    },
    {
      "from": "alcohol",
      "to": "systolicBP",
      "coeff": 5.5,
      "form": "alcoholThreshold",
      "provenance": "Roerecke 2017: up to -5.5 mmHg from heavy 50% cut; THRESHOLD ~2 drinks then steep. SOLID. Form: ~no effect <=2 drinks, steep rise above.",
      "kind": "mediator"
    },
    {
      "from": "calorieBalance",
      "to": "BMI",
      "coeff": 1,
      "form": "weightDynamic",
      "provenance": "Hall 2013: static 7700 kcal/kg OVERSTATES ~40-50% long-term; use dynamic decay. SOLID. Form: asymptotic body-weight change from a sustained energy-balance offset, converted to BMI via heightRefM.",
      "kind": "mediator"
    },
    {
      "from": "BMI",
      "to": "systolicBP",
      "coeff": 0.72,
      "form": "mediatorLinear",
      "provenance": "Stage 3b (2026-06-08). Bann 2021 (UK cohorts MR/longitudinal): ~+0.72 mmHg SBP per +1 kg/m2 BMI. mediator->mediator edge: SBP gains 0.72*(BMI_person(age) - BMI_baseline_sex(age)); flows through the existing SBP->cardiovascular edge (the DOMINANT mediated BMI->CVD path). BMI is itself driven by calorieBalance, so calorieBalance->BMI->SBP->CVD chains. At default calorieBalance + zero BMI offset, BMI==baseline => Delta 0 => SBP unchanged. SOLID-direction. NOTE: BMI must be computed BEFORE systolicBP (engine topo-sorts mediator->mediator edges).",
      "kind": "mediator"
    },
    {
      "from": "physicalActivity",
      "to": "systolicBP",
      "coeff": -3.8,
      "form": "exerciseScaled",
      "provenance": "Cornelissen 2013 aerobic-training meta: ~-3.8 mmHg SBP (sedentary->trained); scaled by activity deviation (exerciseScale). =0 at popMean activity. NOTE: partial mortality overlap with the fitness->all-cause channel (the BP-mediated slice of exercise's benefit); acknowledged minor double-count, fit-harness to reconcile.",
      "kind": "mediator"
    },
    {
      "from": "BMI",
      "to": "HbA1c",
      "coeff": 0.025,
      "form": "mediatorLinear",
      "provenance": "~+0.025% HbA1c per +1 kg/m2 BMI (continuous slope WEAK/#gap, cross-sectional; the SOLID glycemic-BMI signal is incident-T2D RR). Enables calorieBalance->BMI->HbA1c (adiposity->insulin-resistance). =0 at baseline BMI. Small overlap with the BMI->CVD residual glucose-mediation (~15% per Lu 2014); fit-harness reconciles.",
      "kind": "mediator"
    },
    {
      "from": "LDL",
      "to": "cardiovascular",
      "form": "mediatorLogLinear",
      "med": "LDL",
      "beta": 0.00643,
      "provenance": "CTT 2010: RR 0.78 per -1 mmol/L LDL = exp(-0.2485/38.67 mg/dL) => beta=0.00643 per mg/dL. Acts on (LDL value - per-sex/age baseline); =1 at baseline. SOLID.",
      "kind": "cause"
    },
    {
      "from": "systolicBP",
      "to": "cardiovascular",
      "form": "mediatorLogLinear",
      "med": "systolicBP",
      "beta": 0.0347,
      "betaAgeMod": {
        "refAge": 50,
        "halfPer": 20
      },
      "benefitFloor": 115,
      "provenance": "Lewington 2002: ~2x CVD per +20 mmHg (>=115) => beta=ln(2)/20=0.0347 per mmHg at age 50; relative slope HALVES per ~2 decades (betaAgeMod refAge 50, halfPer 20). Acts on (SBP value - baseline). BENEFIT FLOOR 115 mmHg (2026-06-10): the log-linear association is established only DOWN TO 115 mmHg (Lewington's lower bound); below it the value is clamped so there is NO further CVD benefit (plateau), rather than extrapolating an unbounded benefit toward physiologically impossible SBP. Below ~115 the epidemiology flattens and an observational J-curve appears that is largely reverse-causation (frailty/illness lowers BP); a true harm uptick is NOT modeled here (conservative plateau). SOLID (>=115); floor is the evidence-boundary choice.",
      "kind": "cause"
    },
    {
      "from": "HbA1c",
      "to": "cardiovascular",
      "form": "mediatorThresholdRamp",
      "med": "HbA1c",
      "slope": 0.866,
      "threshold": 5.7,
      "cap": 2.6,
      "provenance": "ERFC 2011: diabetes->vascular death HR 2.32 at HbA1c 6.5. **B3 mediation decomposition (2026-06-10):** the glycemic CV risk is partly STRUCTURAL (glycemia->ecm-crosslink->arterial-stiffness->CVD), now carried explicitly by the arterial-stiffness->cardiovascular edge. The stiffness-mediated slice is SUBTRACTED here so the total isn't double-counted: slope reduced 1.052->0.866 so the DIRECT (non-structural: endothelial/microvascular/thrombotic) glycemic HR at 6.5 is ~2.0 (exp(0.866*0.8)=2.0), the ~14% remainder routed through stiffness. Cap 3->2.6. ILLUSTRATIVE split magnitude (#gap: the exact structural fraction of glycemic CVD is uncharacterized); SOLID-direction. Ratio-to-baseline so =1 at the per-age baseline HbA1c.",
      "kind": "cause"
    },
    {
      "from": "arterial-stiffness",
      "to": "cardiovascular",
      "form": "mediatorLogLinear",
      "med": "arterial-stiffness",
      "beta": 0.6,
      "provenance": "B3 (2026-06-10): the CONSOLIDATED arterial-stiffness -> CVD path. Mitchell 2010 (Framingham): cfPWV HR 1.48 per 1 SD, INDEPENDENT of SBP/lipids/smoking/diabetes. 1 SD cfPWV ~0.55 of the normalized stiffness range => beta = ln(1.48)/0.55 ~0.71; set to 0.6 (conservative, to bound the partial overlap of the SBP-driven elastin slice with the Lewington SBP->CVD edge — #gap, reconcile in the A4 SBP-residual-split). Deviation form exp(beta*(stiffness - baseline)) = 1 at the pop stiffness trajectory, so the CDC-calibrated CV baseline is preserved EXACTLY; only stiffness DEVIATIONS move CV hazard. Makes interventions map to reality: a senolytic (less senescence -> less stiffness) and glycemic/BP/crosslink-breaker interventions all bend CV mortality through stiffness, non-double-counted — senescence's stiffness path is a DISTINCT mechanism from its existing inflammation->plaque coupling (senescence->chronic-inflammation->atherosclerosis), the glycemia slice is decomposed out of HbA1c->CVD, and HR has no prior CVD edge. ILLUSTRATIVE beta; SOLID-direction (Mitchell 2010, Clayton 2023).",
      "kind": "cause"
    },
    {
      "from": "HbA1c",
      "to": "cancer",
      "form": "mediatorThresholdRamp",
      "med": "HbA1c",
      "slope": 0.27893,
      "threshold": 5.7,
      "cap": 1.25,
      "provenance": "ERFC 2011: diabetes->cancer death HR 1.25 at HbA1c>=6.5 => slope=ln(1.25)/0.8=0.27893; ramp from 5.7, cap 1.25. Ratio-to-baseline. SOLID.",
      "kind": "cause"
    },
    {
      "from": "HbA1c",
      "to": "neurodegeneration",
      "form": "mediatorThresholdRamp",
      "med": "HbA1c",
      "slope": 0.68515,
      "threshold": 5.7,
      "cap": 1.73,
      "provenance": "Gudala 2013: diabetes->dementia RR 1.73 at HbA1c>=6.5 => slope=ln(1.73)/0.8=0.68515; ramp from 5.7, cap 1.73. Ratio-to-baseline. SOLID.",
      "kind": "cause"
    },
    {
      "from": "smokingStatus",
      "to": "cancer",
      "form": "smokingCategorical",
      "input": "smokingStatus",
      "rr": {
        "never": 1,
        "former": 1.3,
        "current": 2.2
      },
      "provenance": "Relative cancer-death RR never 1.0 / former 1.3 / current 2.2 (PAF 28.8%). NORMALIZED by US smoker-mix mean (0.61*1.0+0.25*1.3+0.14*2.2=1.243) so the population mix averages to mult 1 (the CDC cancer baseline already embeds the mix). Normalized: never~0.804 / former~1.046 / current~1.770. SOLID-direction; relative magnitudes approximate.",
      "kind": "cause"
    },
    {
      "from": "smokingStatus",
      "to": "copd",
      "form": "smokingCategorical",
      "input": "smokingStatus",
      "rr": {
        "never": 1,
        "former": 7,
        "current": 12
      },
      "provenance": "Smoking->COPD. Current-smoker COPD-death RR ~12 (Thun 2013 CPS-II, conservative end of 12-26); former ~7. smokingCategorical, normalized to US smoker mix (mult=1 at baseline). v0.4.1.",
      "kind": "cause"
    },
    {
      "from": "smokingStatus",
      "to": "cardiovascular",
      "form": "smokingCategorical",
      "input": "smokingStatus",
      "rr": {
        "never": 1,
        "former": 1.3,
        "current": 1.9
      },
      "provenance": "Stage 3a (2026-06-08; deferred from Stage 2). Relative cardiovascular-death RR never 1.0 / former 1.3 / current 1.9 (net current-smoker CVD RR ~1.8-2.0). NORMALIZED by US smoker-mix mean (0.61*1.0+0.25*1.3+0.14*1.9=1.201) so the population mix averages to mult 1 (the CDC cardiovascular baseline already embeds the mix). Normalized: never~0.833 / former~1.082 / current~1.582. Same scheme as smoking->cancer. SOLID-direction; relative magnitudes approximate.",
      "kind": "cause"
    },
    {
      "from": "sleep",
      "to": "allcause",
      "form": "uShape",
      "input": "sleep",
      "nadir": [
        7,
        8
      ],
      "beta": {
        "low": 0.06,
        "high": 0.13
      },
      "power": 1,
      "provenance": "Sleep duration → all-cause mortality is U-SHAPED (Cappuccio 2010 meta: short sleep <6h HR ~1.12, long sleep >8-9h HR ~1.30 vs the 7-8h REFERENCE). **BANDED + ASYMMETRIC (2026-06-10, user-caught):** the prior symmetric point-nadir at 7 wrongly penalized 8h as much as 6h — but 7-8h is a flat-optimal REFERENCE BAND (8h is not worse than 7h). mult = exp(β·dist) where dist = how far OUTSIDE [7,8] (0 inside ⇒ 7h AND 8h both penalty-free) and β is ASYMMETRIC: short arm (<7h) βlow 0.06, long arm (>8h) βhigh 0.13 (long-sleep mortality rises ~2× steeper per hour — Cappuccio long HR 1.30 vs short 1.12). Resulting: 5h ⇒ exp(0.06·2)=1.13, 6h ⇒ 1.06, 7-8h ⇒ 1.00, 9h ⇒ exp(0.13·1)=1.14, 10h ⇒ exp(0.13·2)=1.30. popMean 7 lies in the band ⇒ mult 1 at default ⇒ baseline preserved EXACTLY. Whole-intrinsic-bracket all-cause multiplier (like physicalActivity→allcause); sleep is a standalone input with no prior edge, so NO double-count. The steeper long arm is partly REVERSE-CAUSATION (illness → long sleep, not long sleep → death) — flagged #gap/contributory-reverse-causation; the model encodes the association as-observed. Wired + exposed 2026-06-10 (was a phantom input); banded/asymmetric same day. SOLID-direction; magnitude illustrative.",
      "kind": "cause"
    },
    {
      "from": "physicalActivity",
      "to": "allcause",
      "form": "activityFitness",
      "input": "physicalActivity",
      "betaPerMet": -0.139,
      "metMap": [
        [
          0,
          -1.5
        ],
        [
          75,
          -0.5
        ],
        [
          150,
          0
        ],
        [
          300,
          1
        ],
        [
          450,
          1.6
        ],
        [
          600,
          1.9
        ]
      ],
      "excludeCauses": [
        "falls"
      ],
      "provenance": "Stage 3a (2026-06-08; deferred from Stage 2). Stage 3c (2026-06-10) PLATEAU refinement at the high-volume end (see below). 2026-06-16 FALLS EXCLUSION (excludeCauses:['falls']): cardiorespiratory fitness (VO2max) has NO fall-PREVENTION mechanism — falls are a strength/balance/MUSCLE outcome, not an aerobic-capacity one — so this whole-bracket fitness mult is now divided back OUT of the falls cause. Activity's fall benefit instead flows through the muscle channel (physicalActivity -> muscle-balance -> leanMassIndex -> falls), removing the activity->{fitness,muscle}->falls double-count that the leanMassIndex->falls edge exposed. (=1 at baseline activity, so the exclusion divides by 1 ⇒ baseline-LE invariant.) Infection is NOT excluded: there fitness (pulmonary reserve + immune) and muscle (respiratory-muscle/cough + aspiration + amino-acid reserve) are DISTINCT additive mechanisms, not a double-count. #gap/needs-effect-size: the muscle channel's activity-response (c_pa) should be calibrated against exercise->fall-prevention RCTs (~20-30% fall-risk reduction) — currently it under-carries that benefit, a magnitude #gap separate from this structural fix. Activity's mortality benefit flows through cardiorespiratory fitness (VO2max), weight- AND glucose-independent (Barry 2014: obese-fit ~ normal-fit). mult_allcause = exp(-0.139 * dMETs(activity)), RR 0.87 per MET (Kodama 2009) => beta = ln(0.87) = -0.139. Applied to the intrinsic bracket (all causes + residual EXCEPT falls), at the frailty-multiplier site (target 'allcause'). dMETs = MET-deviation of the activity level from population-average activity (physicalActivity popMean 150 min/wk -> dMETs 0 -> mult 1, baseline preserved). metMap is an ILLUSTRATIVE piecewise-linear map on physicalActivity (min/wk MVPA) -> METs-relative-to-popMean: sedentary(0)=-1.5, below-avg(75)=-0.5, popMean(150)=0, moderate(300)=+1.0, high(450)=+1.6, athlete(600)=+1.9; range -1.5..+1.9 spans sedentary<->athlete (a sedentary->trained shift is ~+1.1 MET in the data). PLATEAU (Stage 3c): the map now DECELERATES above 300 min/wk (slope 0.0067 METs/min over 150-300, 0.0040 over 300-450, 0.0020 over 450-600) rather than the prior near-linear climb to +2.5 at 600. Rationale: the dose-response to ALL-CAUSE MORTALITY flattens beyond ~3-5x guideline volume (Arem 2015, pooled 6 US cohorts n>650k: benefit flattens beyond 3-5x guidelines, NO increased risk at >10x => the J-curve/reverse-J concern for extreme exercise is NOT supported for mortality) while cardiorespiratory FITNESS itself has no demonstrated upper benefit limit (Mandsager 2018, n=122k: elite fitness beats high fitness). The deceleration encodes the DIMINISHING-RETURNS of activity-VOLUME->fitness (each added weekly minute buys less VO2max at the top), keeping the curve MONOTONIC (no upturn). Deliberately NOT a U-shape: the genuine extreme-endurance harms (atrial fibrillation ~2-5x, elevated but stable coronary-artery-calcium) are MORBIDITY endpoints not captured by this all-cause-mortality channel; the small Schnohr 2015 strenuous-jogger subgroup mortality signal (n~40, wide CI) did not replicate in the large cohorts. Consistent with interventions/lifestyle/exercise.md (Arem 2015 section). DOUBLE-COUNT NOTE: activity also drives HbA1c (Stage 1), but HbA1c->CVD only fires above the 5.7 prediabetes threshold, where active people rarely sit, so the overlap is negligible for non-diabetics; the fitness channel is the primary activity->mortality path. Activity is NOT additionally routed activity->cardiovascular separately. ILLUSTRATIVE mapping; SOLID-direction (Kodama 2009 / Barry 2014); plateau-shape SOLID (Arem 2015 / Mandsager 2018).",
      "kind": "cause"
    },
    {
      "from": "alcohol",
      "to": "cancer",
      "form": "directLogLinear",
      "input": "alcohol",
      "beta": 0.05,
      "provenance": "Bagnardi 2015 (breast/CRC/liver-driven): small all-cancer slope ~exp(0.05*(drinks/day - popMean)). APPROXIMATE (per-drink all-cancer slope not line-verified).",
      "kind": "cause"
    },
    {
      "from": "alcohol",
      "to": "liver",
      "form": "directHinge",
      "input": "alcohol",
      "slope": 0.15,
      "knee": 2,
      "provenance": "Alcohol->liver (now a named cause node; was the liver slice of residual). directHinge slope0.15 knee2 (supralinear in heavy drinkers). v0.4.1 retarget 2026-06-09.",
      "kind": "cause"
    },
    {
      "from": "airPollution",
      "to": "cardiovascular",
      "form": "directLogLinear",
      "input": "airPollution",
      "beta": 0.00583,
      "provenance": "Pope 2002: RR 1.06 per +10 ug/m3 PM2.5 => beta=ln(1.06)/10=0.00583 per ug/m3 (deviation from popMean ~8). SOLID*-direction (per-10 not PDF-line-verified).",
      "kind": "cause"
    },
    {
      "from": "airPollution",
      "to": "copd",
      "form": "directLogLinear",
      "input": "airPollution",
      "beta": 0.005,
      "provenance": "PM2.5->COPD/respiratory (now a named cause node; was the respiratory slice of residual). beta 0.005 per ug/m3. v0.4.1 retarget 2026-06-09.",
      "kind": "cause"
    },
    {
      "from": "BMI",
      "to": "cardiovascular",
      "form": "bmiThresholdRatio",
      "med": "BMI",
      "beta": 0.022819,
      "threshold": 25,
      "provenance": "Stage 3b (2026-06-08). DIRECT (UNMEDIATED) BMI->CVD residual, upper-arm only (BMI>25): exp(beta*max(0,BMI-25)), NORMALIZED to per-age baseline BMI so =1 at baseline. The ~unmediated portion of BMI->CHD that REMAINS after the BMI->SBP->CVD mediated path (edge 1). beta chosen so the COMBINED effect (this residual x the SBP-path mult at +5 BMI / mid age 50) ~= Lu 2014 total BMI->CHD HR 1.27 per +5 kg/m2. At +5 BMI: SBP-path = exp(0.0347 * 0.72*5) = 1.1331 (SBP->CVD beta at age 50); residual = exp(0.022819*5) = 1.1209; combined = 1.270. RESULTING LOG-HR SPLIT: SBP-path 52.3% / residual 47.7% (the mechanical SBP->CVD slope at age 50 carries more than the Lu single-mediator BP 31% because Lewington's per-mmHg slope is steep at mid-age; the residual beta absorbs the remainder to hit the 1.27 total). Lu 2014 mediation decomposition (BP ~31% single-mediator); BMI->CHD 1.27 per +5. SOLID-direction; split is model-mechanical.",
      "kind": "cause"
    },
    {
      "from": "BMI",
      "to": "allcause",
      "form": "bmiJcurve",
      "med": "BMI",
      "betaUpper": 0.017236,
      "betaLower": 0.117746,
      "upper": 25,
      "lower": 20,
      "provenance": "Stage 3b (2026-06-08). BMI J-curve whole-intrinsic-bracket multiplier (target 'allcause', at the frailty-multiplier site), NORMALIZED to per-age baseline BMI so =1 at baseline. UPPER arm (BMI>25): small NON-CV obesity mortality, betaUpper = ln(1.09)/5 = 0.017236 per unit >25 (BMI->all-cause 1.39 per +5 vs the CV portion 1.27 => ~1.09 residual non-CV slice). LOWER arm (BMI<20): underweight/frailty, betaLower = ln(1.51)/3.5 = 0.117746 per unit <20 (Global BMI Mortality Collaboration 2016: HR 1.51 at BMI 15-18.5, ~3.5 below the nadir edge 20; mostly non-metabolic frailty). Nadir band [20,25] => factor 1. mult = Jbracket(BMI_person)/Jbracket(BMI_baseline); since baseline BMI (~28-30) sits on the UPPER arm, a lean person (BMI 22, nadir) gets mult<1 and an underweight person (BMI 17) gets the frailty penalty. The CV slice of BMI->mortality is carried separately (edges 1+2) so this J-curve is the NON-CV + frailty residual only (no CV double-count). OMITTED: BMI->LDL (null per MR) and a continuous BMI->glucose edge (folded into this residual / not separately wired). Global BMI 2016; Lu 2014. SOLID-direction.",
      "kind": "cause"
    },
    {
      "from": "smokingStatus",
      "to": "diabetes",
      "form": "smokingCategorical",
      "input": "smokingStatus",
      "rr": {
        "never": 1,
        "former": 1.2,
        "current": 1.6
      },
      "provenance": "Smoking->diabetes mortality RR ~1.6 current / 1.2 former (Pan 2015 meta; smoking raises diabetes incidence+mortality). smokingCategorical normalized. v0.4.1.",
      "kind": "cause"
    },
    {
      "from": "smokingStatus",
      "to": "ckd",
      "form": "smokingCategorical",
      "input": "smokingStatus",
      "rr": {
        "never": 1,
        "former": 1.2,
        "current": 1.5
      },
      "provenance": "Smoking->CKD mortality RR ~1.5 current (smoking accelerates nephropathy/CKD progression). smokingCategorical normalized. v0.4.1.",
      "kind": "cause"
    },
    {
      "from": "HbA1c",
      "to": "diabetes",
      "form": "mediatorThresholdRamp",
      "med": "HbA1c",
      "threshold": 6.5,
      "slope": 0.55,
      "cap": 30,
      "provenance": "HbA1c -> DIRECT diabetes mortality (E10-E14: acute metabolic crises [DKA, hyperosmolar hyperglycemic state] + severe diabetic complications coded to diabetes itself, NOT the diabetic CVD that codes to cardiovascular). Added 2026-06-10 to give the β-cell glucotoxicity spiral a SEVERITY-SCALING terminal endpoint — without it the only HbA1c->mortality edges (cardiovascular/cancer/neurodegeneration) all SATURATE at their caps by HbA1c ~6.8 (they carry the ERFC/Gudala *average-diabetic* macrovascular RR, which genuinely plateaus), so the model treated HbA1c 7 and 14 as identical for death (user-caught, 2026-06-10). This edge is DELIBERATELY STEEP + HIGH-CAP because the diabetes-coded endpoint is dominated by ACUTE crises whose baseline is ~0 at HbA1c 6.5 and explodes at sustained high glycemia: slope 0.55 = RR ~1.73 per +1% HbA1c, cap 30 (saturates at HbA1c ~12.7). This is a DIFFERENT shape from the capped macrovascular edges and is correct — acute hyperglycemic death scales with severity where chronic macrovascular RR plateaus. ratio-to-baseline (threshold 6.5 > population HbA1c max 6.4 @130) so mult EXACTLY 1 in the population => baseline LE preserved EXACTLY. Resulting ladder (M, anchored): HbA1c 7 -4.3 yr / 10 -7.3 / 14 -11.1. ILLUSTRATIVE slope+cap magnitudes (#gap: the exact direct-diabetes-mortality dose-response by HbA1c band is uncharacterized for HbA1c>12); SOLID-direction (acute hyperglycemic + complication mortality rises steeply with sustained hyperglycemia).",
      "kind": "cause"
    },
    {
      "from": "HbA1c",
      "to": "ckd",
      "form": "mediatorThresholdRamp",
      "med": "HbA1c",
      "threshold": 6.5,
      "slope": 0.35,
      "cap": 10,
      "provenance": "HbA1c -> CKD mortality (diabetic nephropathy -> renal death, N00-N07/N17-N19/N25-N27). Added 2026-06-10 alongside HbA1c->diabetes as the second severity-scaling glycemic endpoint. Diabetic nephropathy is strongly glycemia-dependent (DCCT/UKPDS: tight control markedly cuts nephropathy progression), so renal death rises with sustained hyperglycemia: slope 0.35 = RR ~1.42 per +1% HbA1c, cap 10 (saturates at HbA1c ~13.1) — gentler than the diabetes edge (nephropathy is a chronic complication, not an acute crisis). ratio-to-baseline (threshold 6.5 > population HbA1c max) => mult EXACTLY 1 in population => baseline LE preserved EXACTLY. Complements the existing smoking->ckd edge (different driver). ILLUSTRATIVE magnitudes (#gap); SOLID-direction (glycemic control governs diabetic nephropathy progression).",
      "kind": "cause"
    },
    {
      "fromState": "beta-cell-decline",
      "mediator": "HbA1c",
      "coeff": {
        "male": 0.6,
        "female": 0.5
      },
      "kind": "augment"
    },
    {
      "fromState": "muscle-balance",
      "mediator": "leanMassIndex",
      "coeff": {
        "male": 0.62,
        "female": 0.42
      },
      "kind": "augment",
      "provenance": "STATE→MEDIATOR augment (2026-06-16): leanMassIndex += coeff*muscle-balance, so the muscle-balance reserve (signed, in ALMI kg/m^2 units before scaling) shapes the observable ALMI trajectory. coeff is SEX-SPECIFIC because muscle-balance is driven by sex-independent node burdens (chronic-inflammation, stem-cell-exhaustion) but the realized ALMI decline should be ~proportional to baseline ALMI: male 0.62, female 0.42 give ~-10% relative decline by age 85 (male 8.5->~7.6, female 6.4->~5.8 — population MEAN stays above the EWGSOP2 sarcopenia cutoffs 7.0/5.5, so only the left tail (sd 1.1) is sarcopenic, matching ~10-30% prevalence). At baseline inputs both the live and baseline mediator passes integrate the same muscle-balance ⇒ deviation 0 ⇒ baseline-LE invariant. Mirrors beta-cell-decline→HbA1c. PLACEHOLDER coeffs; graph-node-validator to confirm against longitudinal ALMI data."
    },
    {
      "from": "leanMassIndex",
      "to": "falls",
      "kind": "cause",
      "form": "mediatorLogLinear",
      "med": "leanMassIndex",
      "beta": -0.4244,
      "provenance": "calibrated (2026-06-16, graph-node-validator). REPLACES the former sarcopenia→falls node edge (2026-06-16 bodycomp/sarcopenia build) — the muscle→falls mortality path now sources from the OBSERVABLE, DEXA-anchorable leanMassIndex mediator instead of the age-sigmoid sarcopenia node (de-age-pegging). Same multiplicative deviation form (cf. LDL→cardiovascular): exp(beta·(leanMassIndex − baseline)), =1 at baseline ALMI ⇒ baseline falls hazard preserved EXACTLY. beta NEGATIVE: lower ALMI ⇒ higher fall/fracture mortality. Magnitude anchored to Yeung 2019 (doi:10.1002/jcsm.12411; PMID 30993881; J Cachexia Sarcopenia Muscle; meta-analysis n=45,926 across 33 studies; prospective-study sub-analysis OR 1.89, 95% CI 1.33-2.68; DOI corrected from a validator transcription error 10.1093/ageing/afz035 → 10.1002/jcsm.12411, verified against PMID 30993881) — verified: this is fall INCIDENCE OR from a sarcopenia (binary, EWGSOP criteria) vs non-sarcopenia comparison, not a per-kg/m^2 dose-response or a mortality endpoint. Re-expression per kg/m^2: male sarcopenic cutoff 7.0 vs young baseline 8.5 → delta = −1.5 kg/m^2; beta = ln(1.89)/(−1.5) = −0.4244 (arithmetic verified). Fall INCIDENCE OR used as fall-MORTALITY multiplier — conservative because sarcopenia also raises case-fatality (not added). FEMALE NOTE: female sarcopenic gap is 6.4−5.5=0.9 kg/m^2 (smaller than the male gap used to derive beta); the same beta applied to the female channel implies a smaller OR at the 0.9-kg gap (OR ≈ 1.47 vs 1.89 for males) — underestimates female per-unit risk; acceptable approximation for a single shared beta but noted. ARITHMETIC VERIFIED: beta −0.4244 × (−1.5) = ln(1.89) ✓. The old sarcopenia node + its incoming couplings remain for DISPLAY; the atrophy biology is now integrated in muscle-balance (no double-count: sarcopenia node no longer drives any cause). SINGLE driver for 'falls' (one-per-cause). #gap/needs-mortality-endpoint (fall incidence proxy); #gap/needs-per-kg-m2-dose-response (vs binary sarcopenia categorization); #gap: other fall drivers (balance/vision/neuropathy/osteoporosis) still node-add candidates."
    },
    {
      "from": "leanMassIndex",
      "to": "infection",
      "kind": "cause",
      "form": "mediatorLogLinear",
      "med": "leanMassIndex",
      "beta": -0.36,
      "provenance": "placeholder. 2026-06-16: the SECOND mechanistic muscle→mortality edge (added in preference to a lazy leanMassIndex→allcause multiplier — sarcopenia kills through SPECIFIC pathways, decompose them). Low skeletal muscle raises death from infection (cause node immunosenescence; ICD pneumonia/sepsis) by a DIRECT, well-documented mechanism, NOT a generic frailty fudge: (a) RESPIRATORY-muscle weakness → weak cough + impaired airway/secretion clearance → pneumonia + ventilatory failure; (b) SWALLOWING-muscle (sarcopenic dysphagia) → ASPIRATION pneumonia — a leading cause of death in the frail elderly; (c) skeletal muscle is the body's labile amino-acid reserve mobilized for the acute-phase/immune response, so low mass → blunted response + worse sepsis survival. Deviation form exp(beta·(leanMassIndex − baseline)), =1 at baseline ⇒ baseline infection hazard preserved EXACTLY; beta NEGATIVE (lower ALMI ⇒ higher infection mortality). beta −0.36 PLACEHOLDER: a sarcopenic ALMI ~1.5 kg/m^2 below young baseline → infection-mortality HR ~1.7 ⇒ beta = ln(1.7)/(−1.5) = −0.354 ≈ −0.36. VALIDATOR SEARCH (2026-06-16): no community-based cohort study was found reporting sarcopenia→infection/pneumonia cause-specific MORTALITY with a per-kg/m^2 dose-response. Best available evidence is disease-specific: (1) aspiration pneumonia 90-day mortality in n=151 patients, HR 2.19 (1.06-4.52) for lowest ASMI quartile vs other quartiles (PMID 27858956; post-admissionfor aspiration pneumonia, mean age 85.9, single center); (2) biliary sepsis in-hospital mortality OR 3.81 (1.08-13.47), n=745 (PMID 38253616; hospital-based); (3) COVID-19 upper thoracic CT sarcopenia mortality OR 3.47 (1.74-6.91) in meta-analysis of 14 studies (PMID 37344057). The placeholder HR 1.7 is conservative relative to these disease-specific studies (which range HR 2.2-3.8) but community-based infection mortality is genuinely unstudied at the population level. The per-kg/m^2 continuous dose-response (as opposed to binary sarcopenia vs not) is not directly reported in any found study. OVERLAP with the activityFitness→allcause path RESOLVED for falls, RETAINED-as-distinct for infection (2026-06-16): fitness = pulmonary reserve + systemic immune competence; muscle = respiratory-muscle cough/clearance + swallowing/aspiration + amino-acid reserve — distinct additive mechanisms. #gap/activity-fitness-muscle-overlap downgraded to a minor residual (infection only). #gap/needs-effect-size — a sarcopenia→infection-mortality meta-analysis in community-based older adults (not surgical/COVID-specific) with a continuous ALMI dose-response is the missing anchor. DELIBERATELY EXCLUDED: leanMassIndex→cardiovascular (double-count with activityFitness) and leanMassIndex→cancer (reverse causation)."
    },
    {
      "kind": "mediator",
      "from": "physicalActivity",
      "to": "restingHR",
      "coeff": -5.4,
      "form": "exerciseScaled",
      "provenance": "calibrated 2026-06-12 (populated from stub). Aerobic training bradycardia — the dominant modifiable RHR driver. Mechanism: enhanced vagal (parasympathetic) tone + increased stroke volume from cardiac remodeling → lower rate needed to maintain resting cardiac output. COEFFICIENT DERIVATION: Chen/Jabbarzadeh 2024 RCT meta-analysis (Jabbarzadeh Ganjeh B et al., Hypertension Research 2024; doi:10.1038/s41440-023-01467-9; PMID 37872373; 34 randomized trials, n=1,787 hypertensive patients): each 30 min/wk aerobic exercise reduces RHR by −1.08 bpm (95% CI −1.46 to −0.71). The exerciseScaled form evaluates exerciseScale(activity−150)=clamp((activity−150)/150, −1, 1.5); coeff is the full shift at exerciseScale=1 (+150 min/wk above popMean=150). From Chen 2024: −1.08 bpm/30 min/wk × 5 (= 150/30) = −5.4 bpm. At activity=150 (popMean), exerciseScale=0 → shift=0 → BASELINE LE EXACTLY UNCHANGED. Sedentary (0 min/wk): +5.4 bpm higher RHR; active (300 min/wk): −5.4 bpm lower RHR. CONSISTENCY CHECK: Reimers 2018 systematic review + meta-analysis (191 interventional studies; doi:10.3390/jcm7120503; PMID 30513777): endurance training and yoga were the only modalities that significantly reducing RHR in both sexes; typical training-induced reductions 5–15 bpm depending on baseline and volume — our −5.4 bpm at +150 min/wk (half the max range) is within that range. DOUBLE-COUNT CONFIRMATION: this edge mechanistically routes part of physicalActivity's mortality benefit via restingHR → elastin-fatigue → arterial-stiffness → cardiovascular. The parallel physicalActivity→allcause (activityFitness) edge is the VO₂max/fitness channel (Kodama 2009 cardiorespiratory fitness pathway — autonomically and mechanistically DISTINCT from the cardiac-cycle pulsatile-fatigue path modeled here). The stiffness path currently has no other activity input, so there is no overlap at present; this is confirmed by the zero-shift at popMean activity (exerciseScale=0 → Δ=0 → no double-count at the calibration point). OPEN GAPS: #gap: Chen 2024 is in hypertensive patients (attenuated generalizability to general population); Reimers 2018 general-population point estimate not dose-resolved per min/wk; the −5.4 bpm figure should be reconciled against a future dose-response meta-analysis in non-hypertensive adults. #gap: no sex-differentiated coefficient (Nauman 2010 found stronger RHR-IHD association in women; Nordeidet 2024 found sex-specific GWAS architecture; sex-specific training response not characterized here). #gap/needs-mechanism: the blunted training bradycardia in older adults is NOT an age effect to capture with an age term. It is BLOCKING (not countering): intrinsic SA-node aging (pacemaker-cell loss / I_f-HCN4 substrate degradation, per the verified biomarker page) degrades the very substrate training remodels, so trainability is gated by SA-NODE PACEMAKER RESERVE -- an accumulating-damage state -- NOT chronological age. Do NOT add a chronological-age attenuation to this coeff: that would be a Tier-C age-peg (cf. age-hardcoding-audit.md C1 SBP->CVD betaAgeMod). The FLAT coeff is the honest age-NEUTRAL placeholder until SA-node reserve is modeled as a state node; when modeled it is a STATE-GATED coefficient (coeff*f(reserve)), NOT a separate countering driver. Primary anchor: [[biomarkers/resting-heart-rate-biomarker]] (verified 2026-06-11). ILLUSTRATIVE coeff; SOLID-direction (Chen 2024 / Reimers 2018)."
    },
    {
      "kind": "stub",
      "intendedKind": "mediator",
      "from": "BMI",
      "to": "restingHR",
      "evidenceStrength": "moderate",
      "note": "stub: BMI->restingHR. Adiposity raises resting HR (reduced vagal tone + sympathetic activation; verified biomarker page Factors table). Direction SOLID; POPULATE BLOCKED: no verified primary-source Delta-bpm-per-kg/m2 dose-response yet (BMI->HR cross-sectional or MR study, e.g. Emdin 2017). Natural variable: bpm per kg/m2 above popMean BMI. #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "mediator",
      "from": "sleep",
      "to": "restingHR",
      "evidenceStrength": "moderate",
      "note": "stub: sleep->restingHR. Short/disrupted sleep raises resting HR (sympathetic activation, incomplete nocturnal vagal recovery). Direction SOLID; POPULATE BLOCKED: no cited Delta-bpm-per-hour dose-response in the verified page. Natural variable: bpm per hour deviation from the 7-8h nadir (asymmetric, like the sleep->allcause uShape). #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "mediator",
      "from": "alcohol",
      "to": "restingHR",
      "evidenceStrength": "weak",
      "note": "stub: alcohol->restingHR. Alcohol raises resting HR (acute autonomic effect; chronic heavy use via cardiomyopathy / autonomic neuropathy). WEAK/CONFOUNDED: NOT listed as a chronic RHR driver in the verified biomarker page. POPULATE only if a verified CHRONIC (non-acute, non-confounded) dose-response is established. #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "augment",
      "fromState": "sinoatrial-node-reserve",
      "mediator": "restingHR",
      "evidenceStrength": "moderate",
      "note": "stub: sinoatrial-node-reserve -> restingHR. The planned sinoatrial-node (heart's pacemaker) reserve state would (a) shift the intrinsic resting rate as the pacemaker substrate declines, and (b) GATE the physicalActivity->restingHR training coefficient (BLOCKING: trainability shrinks as reserve declines -- see that edge's #gap/needs-mechanism and age-hardcoding-audit.md). Coefficient-gating is not yet a standard edge type; rendered here as a state->mediator placeholder. Populate alongside the sinoatrial-node-reserve node. #gap/needs-mechanism",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "mitochondrial-dysfunction",
      "to": "genomic-instability",
      "evidenceStrength": "moderate",
      "note": "stub: mitochondrial-dysfunction -> genomic-instability. Mitochondrial ROS (superoxide, H2O2) generated by dysfunctional complexes I/III escapes into the nucleus and causes oxidative DNA lesions (8-oxo-dG, strand breaks), directly contributing to the genomic-instability lesion load. Mechanism grounded in the verified genomic-instability atomic page (hallmarks/genomic-instability.md § Hypotheses: 'ROS-driven DNA damage (8-oxo-dG, strand breaks) contributes to the nuclear lesion load that constitutes genomic instability') and the superseded-but-evidence-retaining free-radical-theory-of-aging page. causal-graph-data.md does NOT list this edge in the 34-edge verified set -- it is inferred from the verified atomic page mechanism. Natural variable: β in normalized coupling gain (no physical-unit dose-response verified yet; no Mendelian-randomization study for mito-dysfunction → DNA-damage burden specifically). Mediation note: the existing mitochondrial-dysfunction → cellular-senescence (disputed) path carries some of the same biological signal (mito stress → DDR → senescence); populate pass must decompose -- the direct mito-ROS → nuclear-DNA-lesion mechanism is mechanistically prior to senescence, so a non-zero direct edge is plausible. #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "genomic-instability",
      "to": "stem-cell-exhaustion",
      "evidenceStrength": "moderate",
      "note": "stub: genomic-instability -> stem-cell-exhaustion. Two distinct mechanisms: (1) CHIP -- somatic driver mutations (DNMT3A, TET2, ASXL1) in HSCs shift clonal composition and alter differentiation output (Jaiswal 2014 n=17,182; Genovese 2014 n=12,380; verified in hallmarks/genomic-instability.md and hematopoietic-stem-cells.md); this is a distinct path from the telomere-attrition → stem-cell-exhaustion or cellular-senescence → stem-cell-exhaustion edges. (2) p21-mediated arrest of stem-cell proliferative capacity via persistent DDR signaling (p21 KO in Terc−/− mice rescues stem function -- but that is via telomere-derived DDR; the broader DNA damage → p53/p21 → stem-cell quiescence/arrest mechanism applies to non-telomeric damage too). causal-graph-data.md does NOT list this edge in the 34-edge verified set; mechanism inferred from the verified atomic page (hallmarks/genomic-instability.md § Position in causal hierarchy + frontmatter key-phenotypes). Natural variable: β in normalized coupling gain. Mediation / double-count note: the coupling gain partially overlaps with genomic-instability → clonal-hematopoiesis → (atherosclerosis) path for CHIP, and with the genomic-instability → cellular-senescence → stem-cell-exhaustion chain for the p21 arm. Populate pass must apply mediation-decomposition to avoid double-counting. #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "epigenetic-alterations",
      "to": "genomic-instability",
      "evidenceStrength": "weak",
      "note": "stub: epigenetic-alterations -> genomic-instability. Epigenetic mechanisms regulate DNA repair fidelity: (1) SIRT1/SIRT6 (NAD+-dependent histone deacetylases) are required for DDR complex assembly and HR fidelity; declining NAD+ with age → SIRT1/SIRT6 loss → impaired DDR capacity → higher unrepaired lesion burden. (2) Age-related CpG methylation drift silences DDR/repair gene promoters (BRCA1 methylation in aged tissue, MLH1 methylation in sporadic colorectal cancer). (3) Heterochromatin erosion (H3K9me3 loss) with aging exposes repetitive elements to transcription → R-loops → replication stress → DSBs. WEAK: no verified primary-source dose-response for the epigenetic → repair-fidelity → lesion-rate quantitative link in the wiki; direction is biologically grounded but not verified at the strength of the 34-edge set. The verified epigenetic-alterations page notes the NAD+/SIRT1 link to DDR. causal-graph-data.md does not list this edge. Natural variable: β in normalized coupling gain. Populate blocker: a verified primary source for the epigenetic-regulation → DDR-fidelity quantitative relationship in aged human tissue. #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "smoking",
      "to": "genomic-instability",
      "evidenceStrength": "strong",
      "citation": "Alexandrov LB et al. 2016, Science · doi:10.1126/science.aag0299",
      "wiki": "hallmarks/genomic-instability",
      "note": "stub: smoking->genomic-instability. Tobacco smoke polycyclic aromatic hydrocarbons (benzo[a]pyrene and related PAHs) form bulky DNA adducts on guanine N2/O6 positions; unrepaired adducts produce G→T transversions that define the tobacco mutational signature SBS4. Alexandrov et al. 2016 (Science, doi:10.1126/science.aag0299) quantified somatic mutation burden in 17 cancer types across 5,243 tumours: lung cancer (smoke-exposed) carries ~150 clonal mutations per year of smoking, directly scaling SBS4 burden with pack-years — the clearest human population-level dose-response linking a modifiable exposure to genomic-instability accrual rate. The mutagenic mechanism is mechanistically grounded in the verified genomic-instability atomic page (hallmarks/genomic-instability.md). Natural variable: β in ln(rate of somatic mutation accrual) per pack-year (cig/day × years / 20). DE-AGE-PEGGING: genomic-instability is now an emergent ∫rate·dt node (MIGRATED Phase C3, 2026-06-12; model/gi-migration-design.md) — this driver is POPULATE-READY as a rate-term. INPUT-ID RECONCILIATION: this stub sources from the unwired numeric `smoking` (cig/day) placeholder, whereas the wired canonical input is the categorical `smokingStatus` (used by smokingStatus→cancer/CVD/etc. and the senescence/inflammation/telomere stubs). The integrated rate-term machinery needs a NUMERIC dose, which categorical `smokingStatus` cannot provide directly — so populate must decide: use numeric `smoking`/cig-day (the Alexandrov pack-year dose-response fits this), add a `smokingStatus`→rate mapping, or bridge `smokingStatus`→cig-day. Resolve at populate time. Mediation note: smoking already drives cancer directly (PAF 28.8%, existing live cause edge smokingStatus→cancer) via the bundled carcinogenesis route. When this driver stub is populated, the populate pass must mediation-decompose the cancer cause edge to subtract the genomic-instability-mediated slice — consistent with the route-once discipline (smoke→GI→cancer replaces part of the direct smoke→cancer bundled edge). POPULATE HELD (2026-06-12, after seeding+verifying the normal-tissue source): (1) genomic-instability is MIGRATED to ∫rate·dt ✓ (Phase C3); (2) source now verified — [[studies/yoshida-2020-bronchial-epithelium-mutations]] (normal bronchial epithelium) — BUT it provides NO continuous per-pack-year dose-response (categorical never / ex +2,330 / current +5,300 SNVs/cell only; the per-cig/day null is underpowered, n=3) ⇒ a continuous β would invent the dose-response shape; (3) NEW BLOCKER — the cancer quit benefit (former RR 1.3 < current 2.2) is driven by quiescent-cell REPOPULATION/DILUTION (damaged cells retain their load permanently; Yoshida two-compartment model), which this plateau-only ∫rate·dt accumulator does NOT capture — so it gives former ≈ current and cannot reproduce the never/ex/current anchors. Populating to match the anchors REQUIRES a GI tissue-level term with irreversible per-cell accrual + repopulation (a two-compartment recovery), not yet modeled. Per the route-once/uncertain-mediation discipline, keep UNPOPULATED rather than invent the dose-response + recovery. See model/smoke-gi-reroute-design.md § H. #gap/needs-repopulation-dynamic #gap/dose-response-categorical-only #gap/uncertain-mediation-fraction",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "alcohol",
      "to": "genomic-instability",
      "evidenceStrength": "strong",
      "citation": "Garaycoechea JI, Patel KJ et al. 2018, Nature · doi:10.1038/nature25154",
      "wiki": "hallmarks/genomic-instability",
      "note": "stub: alcohol->genomic-instability. Ethanol is metabolized to acetaldehyde (by ADH enzymes) and further to acetate (by ALDH2). Acetaldehyde is a genotoxin: it crosslinks DNA bases (primarily N2-dG adducts and interstrand crosslinks) and depletes glutathione. Garaycoechea & Patel et al. 2018 (Nature, doi:10.1038/nature25154) provide the canonical mechanistic anchor using ALDH2-/-/FANCD2-/- double-knockout mice: loss of both acetaldehyde clearance (ALDH2) and Fanconi anemia DNA repair (FANCD2) produces severe HSC genotoxicity and acute bone marrow failure, establishing that acetaldehyde-induced DNA damage is a primary driver of hematopoietic stem cell genomic instability in the absence of repair. The mechanism is grounded in the verified hallmarks/genomic-instability.md page (progeroid syndromes section: Fanconi anemia as DDR-defect phenocopy of accelerated aging). Natural variable: β in ln(rate of acetaldehyde-DNA adduct accrual) per g/day ethanol (linked to acetaldehyde area-under-curve, which varies by ALDH2 genotype — a key effect modifier). DE-AGE-PEGGING: genomic-instability is now an emergent ∫rate·dt node (MIGRATED Phase C3, 2026-06-12; model/gi-migration-design.md) — this driver is POPULATE-READY as a rate-term (append to genomic-instability.rate.terms, deviation-form). Mediation note: alcohol already drives liver mortality directly (existing live cause edge alcohol→liver via the alcoholThreshold form). The genomic-instability-mediated path from alcohol carries a DISTINCT downstream effect (cancer risk elevation via DNA damage, particularly esophageal/head-and-neck/colorectal SBS16 signature) and is NOT double-counted with the liver edge. However, when populating, confirm that cancer cause edges are not double-counting the alcohol-genomic-instability-cancer chain against the liver edge. POPULATE BLOCKED: (1) genomic-instability is MIGRATED to ∫rate·dt ✓ (Phase C3, 2026-06-12); (2) a verified primary-source quantitative dose-response for acetaldehyde → DNA-adduct burden per g/day ethanol in human tissue is needed in the wiki — the Garaycoechea/Patel 2018 anchor is mouse DKOKOD mechanistic; a human epidemiological dose-response (e.g. alcohol-associated SBS16 burden per unit drink/day in normal tissue) should be confirmed. #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "airPollution",
      "to": "genomic-instability",
      "evidenceStrength": "moderate",
      "citation": "IARC Monograph vol. 109 (2015); Burnett 2018 GBD IER · doi:10.1073/pnas.1803222115",
      "wiki": "hallmarks/genomic-instability",
      "note": "stub: airPollution->genomic-instability. Ambient particulate matter (PM2.5) is classified IARC Group 1 human carcinogen (IARC Monograph vol. 109, 2015). Two genotoxic mechanisms: (1) PAH adsorbed on fine particles form bulky DNA adducts (structural similarity to tobacco SBS4 mechanism, but lower dose per µg/m³ than direct smoking); (2) oxidative stress from reactive oxygen species generated by transition metals (iron, copper) on PM2.5 surface → 8-oxo-dG, strand breaks. Lung cancer dose-response in the GBD/Burnett 2018 integrated exposure-response (IER) model provides the best-characterized population-level link. Natural variable: β in ln(rate of DNA-damage accrual) per µg/m³ PM2.5 annual mean (WHO guideline threshold 5 µg/m³; US EPA NAAQS 12 µg/m³; global range 5–200 µg/m³ in high-pollution urban settings). DE-AGE-PEGGING: genomic-instability is now an emergent ∫rate·dt node (MIGRATED Phase C3, 2026-06-12; model/gi-migration-design.md) — this driver is POPULATE-READY as a rate-term (append to genomic-instability.rate.terms, deviation-form). Mediation note: airPollution already drives COPD and cardiovascular mortality directly (existing live cause edges airPollution→copd, airPollution→cardiovascular). The genomic-instability-mediated path from airPollution represents the carcinogenic/mutagenic channel (lung cancer, bladder cancer via particle-mediated systemic adducts) and is DISTINCT from the inflammatory/bronchospasm COPD channel and the oxidative-endothelial CVD channel — not a double-count. However, when populating, mediation-decompose the cancer cause edge to avoid double-counting the PM2.5→GI→cancer chain against any direct PM2.5→cancer edge that might be added. POPULATE BLOCKED: (1) genomic-instability is MIGRATED to ∫rate·dt ✓ (Phase C3, 2026-06-12); (2) a verified primary-source quantitative dose-response for PM2.5 → DNA-adduct/oxidative-lesion burden per µg/m³ in human tissue is needed in the wiki — the IARC Group 1 classification confirms carcinogenicity but the dose-response per unit exposure in terms of lesion accrual rate is not yet verified in the wiki. #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "chronic-inflammation",
      "to": "cellular-senescence",
      "evidenceStrength": "moderate",
      "note": "stub: chronic-inflammation→cellular-senescence. Paracrine / bystander senescence feed-forward loop: SASP cytokines (IL-6, IL-1β, TGF-β) secreted by existing senescent cells and by inflammaging tissue propagate senescence to neighboring non-senescent cells via NF-κB activation, ROS induction, and p38-MAPK→p16INK4a signaling. Explicitly listed in causal-graph-data.md bidirectional-edges table ('SASP drives inflammation; inflammaging promotes paracrine senescence'). Verified in hallmarks/cellular-senescence.md § 'Senescence-mediated paracrine spreading'. Key citation: Acosta JC et al. 2008 (Cell, doi:10.1016/j.cell.2008.03.038) — CXCR2-binding chemokines (IL-8/CXCL8, GRO-family) reinforce paracrine/bystander senescence via the CXCR2 receptor (verified on processes/sasp.md §96 + [^acosta2008]); IL-6 paracrine maintenance per Kuilman 2008 (doi:10.1016/j.cell.2008.03.039). Natural variable: β in normalized coupling gain (dimensionless; the hallmark-layer coupling framework). Mediation note: the reverse arm (cellular-senescence→chronic-inflammation, strong, live) is the primary direction; this stub is the FEEDBACK arm. Populate pass must not double-count with the existing strong live edge — the paracrine-spreading gain should be calibrated to the AMPLIFICATION fraction of senescent-cell burden attributable to inflammatory spread, not the total burden. ⚠ DOUBLE-COUNT (reviewer 2026-06-12): the SASP-driven paracrine/bystander senescence this edge describes is ALREADY represented by senescence's value-proportional SELF-AMPLIFICATION (the C3b self-dynamic = 'senescence's own paracrine feed-forward'). Populating this edge would double-count the SASP loop. KEEP STUBBED unless evidence is found for an INDEPENDENT chronic *systemic* inflammation→persistent-senescence channel (inflammation from NON-senescence sources — dysbiosis/LPS, mito DAMPs — beyond the SASP loop). If ever activated, calibrate against the FULL effective loop multiplier (≈0.2·g_reverse + self-amp + clearance c + all G-paths), not this edge alone. See model/senescence-inflammation-loop-design.md §8. #gap/needs-independent-systemic-inflammation-evidence #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "smokingStatus",
      "to": "cellular-senescence",
      "evidenceStrength": "strong",
      "note": "stub: smokingStatus→cellular-senescence. Tobacco smoke induces stress-induced premature senescence (SIPS) via two mechanistically distinct arms: (1) PAH/ROS-driven oxidative DNA damage → ATM/p53/p21 DDR activation → growth arrest (the same DDR arm that links genomic-instability→senescence, here triggered by a direct exogenous oxidant load); (2) acrolein/cigarette-smoke-condensate (CSC) → p38-MAPK pathway → p16INK4a upregulation independent of DNA damage. Both arms are verified in lung fibroblast and airway epithelial cell models (Rashid 2015 Aging Cell, Tsuji 2004 FEBS Letters). Epidemiologically, current smokers carry measurably higher p16 INK4a+ cell burden in lung and alveolar tissue (Nyunoya 2006 AJRCCM). This edge is DISTINCT from the existing smokingStatus→cancer and smokingStatus→copd cause edges — senescence is an upstream driver state, not an endpoint. Natural variable: β in ln(rate of p16+/SASP+ cell accumulation per pack-year equivalent); normalized coupling gain in the hallmark layer. DE-AGE-PEGGING DEPENDENCY: cellular-senescence is now an emergent ∫rate·dt node — MIGRATED Phase C3b 2026-06-12 (was Tier-B exponential age-curve) (A:0.025, r:0.04). Populating this driver term requires FIRST migrating cellular-senescence from its exponential age-curve to a ∫rate·dt state node (Phase C3 of the migration roadmap in age-hardcoding-audit.md) — otherwise the exogenous forcing would overlay a hard-coded age line, double-driving the node. Until that migration, this stub is inert (engine excludes it). Mediation note: when populating, verify no double-count against the smokingStatus→cancer bundled edge (smoke→senescence→cancer pathway contribution must be decomposed out of that bundled edge per route-once discipline). #gap/needs-state-node-migration #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "alcohol",
      "to": "cellular-senescence",
      "evidenceStrength": "moderate",
      "note": "stub: alcohol→cellular-senescence. Ethanol and its primary metabolite acetaldehyde induce SIPS (stress-induced premature senescence) via: (1) acetaldehyde-induced DNA adducts → DDR → p53/p21 arrest (the same genotoxin that drives alcohol→genomic-instability; here the downstream cellular response is senescence rather than mutation accumulation); (2) ethanol-generated ROS → oxidative stress → p38-MAPK→p16INK4a senescence. Particularly relevant in hepatocytes (alcohol-associated liver disease context: MASH senescent hepatocytes drive fibrosis progression), as noted in causal-graph-data.md missing-node blockers section (mitochondrial-RNA-leakage in MASH context). Mechanism grounded in the verified cellular-senescence page (§ SIPS: 'oxidative stress, metabolic stress, mitochondrial dysfunction induce senescence via DNA damage and/or p38-MAPK → p16INK4a pathways'). Natural variable: β in ln(rate of SIPS induction per g/day ethanol exposure). DE-AGE-PEGGING DEPENDENCY: cellular-senescence is now an emergent ∫rate·dt node — MIGRATED Phase C3b 2026-06-12 (was Tier-B exponential age-curve). Populating this driver term requires FIRST migrating cellular-senescence to a ∫rate·dt state node — otherwise the exogenous forcing double-drives a hard-coded age line. Until migration this stub is inert. Mediation note: alcohol→liver (live cause edge) is a distinct endpoint; the senescence-mediated path would primarily capture hepatic and systemic senescent-cell burden elevation, not directly the liver mortality endpoint — distinct from the existing alcohol→liver edge. However, when populating, apply mediation-decomposition: the alcohol→senescence→SASP→inflammation→liver chain must be subtracted from the direct alcohol→liver edge to avoid double-counting. #gap/needs-state-node-migration #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "airPollution",
      "to": "cellular-senescence",
      "evidenceStrength": "moderate",
      "note": "stub: airPollution→cellular-senescence. Ambient PM2.5 induces SIPS via oxidative stress (transition-metal-catalyzed ROS + PAH adducts) → DNA damage → DDR → p53/p21 senescence AND via direct p38-MAPK activation in lung and cardiovascular cells. Deng 2019 (Aging 2019; doi:10.18632/aging.102070): PM2.5 exposure elevates SA-β-gal+ cells, p16, and p21 in alveolar epithelial cells and cardiomyocytes. The senescence-burden elevation is biologically grounded in the verified cellular-senescence page (§ SIPS) and the existing airPollution→genomic-instability stub (which documents the oxidative-DNA-damage mechanism). Natural variable: β in ln(rate of SIPS induction per µg/m³ PM2.5 annual mean). DE-AGE-PEGGING DEPENDENCY: cellular-senescence is now an emergent ∫rate·dt node — MIGRATED Phase C3b 2026-06-12 (was Tier-B exponential age-curve). Populating requires FIRST migrating cellular-senescence to a ∫rate·dt state node. Until migration this stub is inert. Mediation note: airPollution→copd and airPollution→cardiovascular (live cause edges) are distinct endpoints (bronchospasm/inflammation and endothelial oxidative stress). The senescence-mediated path captures the systemic SASP and tissue-level aging acceleration beyond the COPD and CV endpoints — but the populate pass must mediation-decompose to ensure no double-counting against those live edges. #gap/needs-state-node-migration #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "calorieBalance",
      "to": "cellular-senescence",
      "evidenceStrength": "moderate",
      "note": "stub: calorieBalance→cellular-senescence. Positive energy balance / adiposity drives SIPS (stress-induced premature senescence) via: (1) lipotoxic metabolic stress in adipocytes, hepatocytes, and pancreatic β-cells — excess FFAs and ceramide → ER stress → p38-MAPK→p16INK4a senescence (reviewed in Palmer 2019 Diabetes; β-cell senescence: Aguayo-Mazzucato 2019 verified in hallmarks/cellular-senescence.md § type-2-diabetes); (2) hyperglycemia in obese/insulin-resistant states → glycation-derived ROS → DNA damage → SIPS (hallmarks/cellular-senescence.md § SIPS: 'hyperglycemia, lipotoxicity' listed as SIPS triggers). These are mechanistically distinct from the existing deregulated-nutrient-sensing→cellular-senescence coupling (which captures the mTOR-driven SASP translational amplification in already-senescent cells) — the adiposity path drives NEW senescent-cell FORMATION via metabolic stress. Natural variable: β in ln(rate of SIPS induction per unit positive energy balance, expressed as calorieBalance deviation from maintenance in kcal/day or BMI deviation). DE-AGE-PEGGING DEPENDENCY: cellular-senescence is now an emergent ∫rate·dt node — MIGRATED Phase C3b 2026-06-12 (was Tier-B exponential age-curve). Populating requires FIRST migrating cellular-senescence to a ∫rate·dt state node. Mediation note: the existing calorieBalance→BMI→HbA1c chain already routes adiposity to glycemia and to deregulated-nutrient-sensing (which drives senescence). Populate pass must mediation-decompose the calorieBalance direct-driver coefficient so it carries only the ADDITIONAL lipotoxic/metabolic-stress fraction of senescent-cell formation not already routed via the HbA1c or nutrient-sensing paths. #gap/needs-state-node-migration #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "immunosenescence",
      "to": "cellular-senescence",
      "evidenceStrength": "moderate",
      "note": "stub: immunosenescence→cellular-senescence. Senescent-cell burden = production rate × residence time. Both arms degrade with age. The 'residence time' arm: NK-cells and macrophages normally clear senescent cells via SASP-mediated 'find me / eat me' signals (senescence-immune-surveillance process); this clearance capacity declines with immunosenescence. Explicitly stated in hallmarks/cellular-senescence.md § 'Two arms of intervention': 'immune clearance fails (NK-cell and macrophage senescent-cell removal declines with age)'. As immunosenescence advances, the same production rate leads to higher steady-state senescent-cell burden — a clearance-failure driver. This is a real mechanistic edge (immunosenescence → elevated cellular-senescence burden). Anchored in the wiki's verified immunosenescence page and the senescence-immune-surveillance process page. Not in causal-graph-data.md 34-edge set; grounded in verified atomic pages. Natural variable: β in normalized coupling gain (dimensionless hallmark-layer coupling). Mediation note: part of the immunosenescence→senescence clearance-failure effect is mediated by the stem-cell-exhaustion→immunosenescence path (stem cell exhaustion → reduced NK-cell and lymphocyte output). Populate pass should decompose to avoid double-routing through stem-cell-exhaustion→immunosenescence→senescence vs. the already-live stem-cell-exhaustion→??? chain. Note also the potential circularity: senescence→stem-cell-exhaustion→immunosenescence→senescence is a three-node feedback loop that must be handled by the fixed-point solver — the spectral radius constraint must still hold. #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "cellular-senescence",
      "to": "neurodegeneration",
      "evidenceStrength": "moderate",
      "note": "stub: cellular-senescence→neurodegeneration. Two senescence-specific mechanisms beyond the existing cellular-senescence→chronic-inflammation→neurodegeneration path: (1) Senescent microglia (disease-associated microglia, DAM phenotype) secrete a distinct neurotoxic SASP including complement proteins and pro-inflammatory mediators → neuronal damage; Niraula 2019, Spangenberg 2019 establish microglial senescence as a driver of neurodegeneration independent of systemic inflammation. (2) Senescent astrocytes → reactive astrogliosis → complement-mediated synapse elimination and neuronal death. Verified in hallmarks/cellular-senescence.md § Disease phenotype cluster: 'senescent microglia (DAM-like populations), astrocyte SASP → neurotoxic environment'; linked to hallmarks/neurodegeneration and microglia (verified-partial). Not in causal-graph-data.md 34-edge set (hallmark→hallmark only; this is hallmark→pathology), but the mechanism is in the verified wiki. Natural variable: β in normalized coupling gain (dimensionless; pathology-layer coupling). Mediation note: part of the signal is mediated by the existing cellular-senescence→chronic-inflammation→??? path (neuroinflammation IS part of the neurodegeneration mechanism). Populate pass must mediation-decompose: the direct senescent-cell→brain (local microglial/astrocytic senescence) fraction is distinct from the systemic SASP→neuroinflammation fraction, and only the former should count here (the latter is already carried via chronic-inflammation). #gap/needs-effect-size #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "cellular-senescence",
      "to": "diabetes",
      "evidenceStrength": "moderate",
      "note": "stub: cellular-senescence→diabetes. Pancreatic β-cell senescence → impaired insulin secretion → hyperglycemia → T2D and direct diabetes mortality. Explicitly in the verified hallmarks/cellular-senescence.md disease phenotype cluster: 'β-cell senescence (Aguayo-Mazzucato 2019) → impaired insulin secretion; high p21 in T2D pancreas; SASP-driven islet inflammation'. The diabetes cause node (E10-E14: acute metabolic crises + severe diabetic complications) is the terminal endpoint this coupling targets. Mechanism is distinct from the existing HbA1c→diabetes endpoint edge (which captures sustained glycemia → acute crisis risk) — β-cell senescence impairs the secretory capacity that prevents hyperglycemia in the first place (upstream). The Aguayo-Mazzucato 2019 study is flagged in the wiki as #gap/no-fulltext-access, so the primary source needs verification. Natural variable: β in normalized coupling gain (dimensionless; pathology-layer coupling from the hallmark-layer cellular-senescence node). Mediation note: the effect overlaps with the existing cellular-senescence→chronic-inflammation path (SASP-driven islet inflammation drives insulin resistance and β-cell stress), and with the deregulated-nutrient-sensing→cellular-senescence path (mTOR-senescence amplifies β-cell SASP). Populate pass must apply mediation-decomposition: only the fraction of diabetes-cause hazard attributable to the direct β-cell-senescence mechanism (not via systemic SASP-inflammation or glycemia elevation already captured by HbA1c→diabetes) belongs here. #gap/needs-effect-size #gap/needs-verified-source (Aguayo-Mazzucato 2019 PDF not yet verified)",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "cellular-senescence",
      "to": "ckd",
      "evidenceStrength": "moderate",
      "note": "stub: cellular-senescence→ckd. Senescent tubular epithelial cells in the kidney accumulate with age and drive tubulointerstitial fibrosis via SASP (TGF-β, IL-6, CCL2) → myofibroblast activation → progressive nephron loss → CKD. Large literature: Mylonas 2022 (JASN): p21-dependent senescence in aged kidney drives fibrosis; Braun 2020 (Kidney Int): senolytic clearance reduces renal fibrosis; Baker 2016 (Nature): INK-ATTAC clearance improved kidney function in naturally aged mice (one of the Baker 2016 healthspan endpoints). The CKD cause node (N00-N07/N17-N19/N25-N27) is the terminal endpoint. This is distinct from the existing SBP→ckd and HbA1c→ckd edges (which capture hypertensive nephropathy and diabetic nephropathy respectively) — senescent-cell-driven tubulointerstitial fibrosis is a distinct mechanism operating even without hypertension or diabetes. Natural variable: β in normalized coupling gain (hallmark-to-pathology coupling). Mediation note: a fraction of the signal flows via cellular-senescence→chronic-inflammation→ckd (SASP-driven renal inflammation contributes to nephron loss) — populate pass must mediation-decompose the direct fibrosis-driver fraction from the inflammation-mediated fraction. #gap/needs-effect-size #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "deregulated-nutrient-sensing",
      "to": "chronic-inflammation",
      "evidenceStrength": "moderate",
      "note": "stub: deregulated-nutrient-sensing→chronic-inflammation. mTOR hyperactivation amplifies SASP protein output in non-senescent aged cells via 4E-BP1 (cap-dependent translation) and MK2/ZFP36L1 mRNA-stabilization arms — distinct from the cellular-senescence SASP arm (already live). AMPK conversely suppresses NF-κB (phosphorylates IKKβ inhibitory residue); declining AMPK activity with age and insulin resistance promotes NF-κB constitutive activation. Insulin resistance / hyperinsulinemia drives inflammatory macrophage polarization (M1 bias). Documented in hallmarks/chronic-inflammation.md cross-talk table: 'mTOR amplifies SASP protein output; AMPK suppresses NF-κB; insulin resistance promotes inflammatory macrophage polarization' (mtor verified-partial; ampk verified). causal-graph-data.md does not list this edge in the 34-edge set (it lists deregulated-nutrient-sensing→cellular-senescence, moderate, separately). Natural variable: β in normalized coupling gain (dimensionless hallmark-hallmark coupling). Mediation note: part of the effect is already routed via the existing deregulated-nutrient-sensing→cellular-senescence (moderate, live) and cellular-senescence→chronic-inflammation (strong, live) chain; the stub captures the DIRECT mTOR/AMPK→NF-κB arm and the macrophage-polarization arm not mediated by senescence. Populate pass must mediation-decompose so only the non-senescence-mediated fraction is attributed here. #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "dietSatFat",
      "to": "chronic-inflammation",
      "evidenceStrength": "moderate",
      "note": "stub: dietSatFat→chronic-inflammation (β<0 for reduction; β>0 for increase). Saturated fatty acids — especially palmitic acid (C16:0) — activate the NLRP3 inflammasome via: (1) direct Cys898 palmitoylation of NLRP3; (2) ER-stress → TXNIP induction → NLRP3 assembly; (3) intracellular crystallization in macrophages at high concentrations (all mechanisms verified in hallmarks/chronic-inflammation.md § NLRP3 inflammasome section, citing [[palmitic-acid]]). Palmitate also activates TLR4 (in the absence of LPS) → NF-κB → priming signal for NLRP3. Clinical evidence: Mediterranean diet (displacing saturated fat) RCT-validated anti-inflammatory lever (CRP reduction; hallmarks/chronic-inflammation.md). Natural variable: β in ln(HR for hsCRP elevation per % energy from saturated fat above popMean ~11%). SIGN: positive (more satfat → more inflammation). DE-AGE-PEGGING DEPENDENCY: chronic-inflammation is now an emergent ∫rate·dt node — MIGRATED Phase C3c 2026-06-12 (was Tier-B sigmoid age-curve). Populating this driver term requires FIRST migrating chronic-inflammation to a ∫rate·dt state node (Phase C3 of the migration roadmap) — otherwise the exogenous forcing would overlay a hard-coded age line, double-driving the node. DOUBLE-COUNT NOTE: dietSatFat already drives LDL (live mediator edge); the LDL→cardiovascular chain is distinct from the inflammation→atherosclerosis path — not a double-count. Populate pass must confirm no double-routing of the satfat→inflammation→atherosclerosis fraction against the existing chronic-inflammation→atherosclerosis coupling edge (which uses the hallmark-layer coupling; at current parameterization the coupling is a proportion of hallmark burden deviation, not an absolute cytokine level). #gap/needs-state-node-migration #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "dietFiber",
      "to": "chronic-inflammation",
      "evidenceStrength": "moderate",
      "note": "stub: dietFiber→chronic-inflammation (PROTECTIVE — β<0; increasing fiber reduces inflammaging). Soluble dietary fiber is fermented by gut microbiota to short-chain fatty acids (SCFAs: butyrate, propionate, acetate). Butyrate: (1) inhibits HDAC → anti-inflammatory gene expression; (2) activates GPR109A on colonocytes and immune cells → IL-10/TGF-β anti-inflammatory signaling; (3) NLRP3 inflammasome suppression. Propionate: GPR41/43 activation → immune tolerance. SCFAs reduce circulating CRP and IL-6 in meta-analyses of high-fiber dietary interventions (Dahl 2016; Kris-Etherton 2021 Circulation). Mechanism is partly via dysbiosis correction (fiber shifts microbiome toward Akkermansia/Lactobacillus) — so the fiber→inflammation edge OVERLAPS with the dysbiosis→chronic-inflammation live coupling edge. Populate pass must mediation-decompose: the fiber→microbiome→dysbiosis-correction→inflammation fraction is carried by the dysbiosis coupling; the fiber→SCFA→direct-immune-cell-GPR→inflammation fraction is a distinct, direct channel. Natural variable: β in ln(HR for hsCRP per g/day ABOVE popMean ~3 g/day soluble fiber; negative sign = protective). DE-AGE-PEGGING DEPENDENCY: chronic-inflammation is now an emergent ∫rate·dt node — MIGRATED Phase C3c 2026-06-12 (was Tier-B sigmoid age-curve). Migration DONE (Phase C3c, 2026-06-12) — populate-ready as a rate-term; when populated, the driver contribution must be decomposed out of the baseline self-dynamic residual (route-once). #gap/needs-state-node-migration #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "calorieBalance",
      "to": "chronic-inflammation",
      "evidenceStrength": "moderate",
      "note": "stub: calorieBalance→chronic-inflammation (POSITIVE sign — excess caloric balance / visceral adiposity → more inflammation). Mechanism: visceral adipose tissue (VAT) is a metabolically active endocrine organ secreting pro-inflammatory adipokines — TNF-α, IL-6, leptin, resistin, and MCP-1 — directly into portal circulation. VAT also harbors crown-like structures of macrophages around dead adipocytes, sustaining local and systemic NF-κB activation. The inflammatory adipokine output is proportional to VAT volume (Fontana 2007 PNAS: caloric restriction reduces CRP and IL-6 in overweight humans; CALERIE trial: 25% CR → IL-6 −23%, CRP −26%). This is a DIRECT adipokine-mediated path to inflammaging, mechanistically distinct from the existing calorieBalance→BMI→HbA1c→deregulated-nutrient-sensing pathway — adipokines act on the same NF-κB/NLRP3 circuitry independently of glycemia. Natural variable: β in ln(HR for hsCRP per +1 BMI unit above popMean, or per +100 kcal/day sustained positive energy balance). SIGN: positive. DOUBLE-COUNT RISKS (must flag for populate pass): (1) the existing calorieBalance→BMI→HbA1c→deregulated-nutrient-sensing→cellular-senescence→chronic-inflammation chain already routes part of this adiposity signal — decompose the ADDITIONAL direct adipokine fraction not carried through that chain; (2) the calorieBalance→cellular-senescence stub (lipotoxic SIPS) carries another fraction — the adipokine-driven inflammation is upstream of senescence and should not be double-counted there. DE-AGE-PEGGING DEPENDENCY: chronic-inflammation is now an emergent ∫rate·dt node — MIGRATED Phase C3c 2026-06-12 (was Tier-B sigmoid age-curve). Migration DONE (Phase C3c, 2026-06-12) — populate-ready as a rate-term; when populated, the driver contribution must be decomposed out of the baseline self-dynamic residual (route-once). #gap/needs-state-node-migration #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "physicalActivity",
      "to": "chronic-inflammation",
      "evidenceStrength": "moderate",
      "note": "stub: physicalActivity→chronic-inflammation (PROTECTIVE — β<0; increasing activity reduces inflammaging). Mechanism: skeletal muscle during contraction releases IL-6 as a myokine (distinct from adipose/SASP IL-6 — exercise-IL-6 is anti-inflammatory in context, stimulating IL-1Ra and IL-10 production). Regular aerobic exercise also reduces visceral adipose tissue → less adipokine secretion → lower steady-state NF-κB activation. Meta-analyses of exercise interventions consistently show reductions in circulating CRP and IL-6 in older adults: Hayashino 2012 meta (n=4,059 T2D): structured exercise −0.66 mg/L CRP; Nicklas 2008 RCT (older adults): aerobic+resistance −1.2 mg/L CRP. Natural variable: β in ln(HR for hsCRP per 150 min/wk increment of MVPA above popMean; negative sign). DOUBLE-COUNT NOTE: physicalActivity already drives the allcause fitness channel (Kodama 2009; independent mechanism — VO2max / cardioresp fitness) and SBP (exerciseScaled −3.8 mmHg; hemodynamic mechanism). The anti-inflammatory myokine channel is a THIRD, mechanistically distinct path. However, when populating this stub, the populate pass must mediation-decompose: the exercise→inflammation→CVD fraction of the existing physicalActivity→allcause and physicalActivity→SBP→CVD benefits must not be double-counted if exercise-inflammation is explicitly wired. DE-AGE-PEGGING DEPENDENCY: chronic-inflammation is now an emergent ∫rate·dt node — MIGRATED Phase C3c 2026-06-12 (was Tier-B sigmoid age-curve). Migration DONE (Phase C3c, 2026-06-12) — populate-ready as a rate-term; when populated, the driver contribution must be decomposed out of the baseline self-dynamic residual (route-once). #gap/needs-state-node-migration #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "sleep",
      "to": "chronic-inflammation",
      "evidenceStrength": "moderate",
      "note": "stub: sleep→chronic-inflammation (PROTECTIVE when optimal — β<0 at nadir 7-8h; short sleep increases inflammation). Mechanism: sleep deprivation activates the HPA axis and sympathetic nervous system → cortisol elevation → NF-κB transcription → IL-6, TNF-α, CRP elevation. Irwin 2016 meta-analysis (n=72 studies): experimental sleep restriction → IL-6 +40%, TNF-α +27%. Chronic short sleep (<6h) associated with elevated hsCRP in large cohorts. The existing sleep→allcause edge (uShape, Cappuccio 2010) captures the aggregate mortality signal; this stub represents the intermediate mechanism. Natural variable: β in ln(HR for hsCRP per hour of sleep BELOW the 7-8h nadir band; negative direction — more sleep toward nadir reduces inflammation). SIGN NOTE: the direction of effect on this stub: short sleep → more inflammation (β>0 for deficit hours); optimal sleep at 7-8h → no penalty; long sleep is reverse causation (illness→long sleep→inflammation, not long sleep→inflammation). MAJOR DOUBLE-COUNT WARNING: the existing sleep→allcause edge ALREADY captures the aggregate mortality signal of sleep deprivation. Populating this stub as a live driver would route ADDITIONAL mortality through the chronic-inflammation coupling chain (sleep→inflammation→CVD/cancer/neurodegeneration), creating a parallel mortality channel not accounted for in the sleep→allcause calibration. When populating: either (a) reduce the sleep→allcause coefficient by the inflammation-mediated fraction (mediation decomposition), or (b) keep this as a mechanistic annotation only and document the mediation-fraction gap. DE-AGE-PEGGING DEPENDENCY: chronic-inflammation is now an emergent ∫rate·dt node — MIGRATED Phase C3c 2026-06-12 (was Tier-B sigmoid age-curve). Migration DONE (Phase C3c, 2026-06-12) — populate-ready as a rate-term; when populated, the driver contribution must be decomposed out of the baseline self-dynamic residual (route-once). #gap/needs-state-node-migration #gap/needs-effect-size #gap/needs-mediation-decomposition-vs-allcause",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "smokingStatus",
      "to": "chronic-inflammation",
      "evidenceStrength": "strong",
      "note": "stub: smokingStatus→chronic-inflammation. Tobacco smoke activates multiple pro-inflammatory pathways: (1) nicotine and combustion products → NF-κB activation in macrophages and epithelial cells → IL-6, IL-8, TNF-α; (2) acrolein and other reactive aldehydes → NLRP3 inflammasome priming (mechanism parallel to the SIPS-induction pathway); (3) oxidized LDL from smoke-induced oxidative stress → TLR4 → macrophage activation. Epidemiology: current smokers have hsCRP ~2-4 mg/L above never-smokers (Mendall 1996; Bernhard 2014 meta-analysis). Natural variable: β in ln(HR for hsCRP elevation) by smoking category (never/former/current), using the same smokingCategorical normalization framework as existing smokingStatus→cancer/CVD/COPD edges. SIGN: positive (current > former > never). MAJOR DOUBLE-COUNT WARNING: smokingStatus already drives cancer, CVD, COPD, diabetes, and CKD directly as live cause edges. Populating this stub would add a SECOND, indirect mortality path (smoking→inflammation→CVD/cancer/etc.) on top of those calibrated direct edges. When populating: apply mediation decomposition — reduce the direct smokingStatus→[cause] edges by the fraction attributable to the inflammation-mediated route, keeping total smoking hazard equal to the empirical (Jha 2013) total. Do NOT add this without that decomposition. DE-AGE-PEGGING DEPENDENCY: chronic-inflammation is now an emergent ∫rate·dt node — MIGRATED Phase C3c 2026-06-12 (was Tier-B sigmoid age-curve). Migration DONE (Phase C3c, 2026-06-12) — populate-ready as a rate-term; when populated, the driver contribution must be decomposed out of the baseline self-dynamic residual (route-once). #gap/needs-state-node-migration #gap/needs-effect-size #gap/needs-mediation-decomposition-vs-direct-causes",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "alcohol",
      "to": "chronic-inflammation",
      "evidenceStrength": "moderate",
      "note": "stub: alcohol→chronic-inflammation. Two mechanisms: (1) Gut barrier disruption — chronic alcohol reduces tight-junction protein expression (ZO-1, occludin) → increased gut permeability → LPS translocation into portal circulation → TLR4-NF-κB activation → systemic cytokine elevation (Keshavarzian 2009; Bishehsari 2017 Alcohol Clin Exp Res). (2) Acetaldehyde-mediated NF-κB activation in Kupffer cells and hepatocytes (distinct from the DNA-adduct mechanism of the alcohol→genomic-instability stub — NF-κB activation happens at lower doses via mitochondrial stress). Epidemiology: heavy drinkers have elevated CRP and IL-6 (Roerecke 2017). Note: low-moderate alcohol consumption has contested J-curve for CRP (may transiently reduce CRP in some studies — likely confounded by healthy-user bias and beverage type); this stub models the HARMFUL direction of chronic heavy use. Natural variable: β in ln(HR for hsCRP per g/day ethanol above popMean ~14 g/day, above the ~2-drink threshold; signed positive). DOUBLE-COUNT NOTE: alcohol already drives liver mortality (live alcohol→liver cause edge) and cancer (live alcohol→cancer). The inflammation-mediated path carries a DISTINCT endpoint set (CVD, systemic SASP amplification) beyond liver. Populate pass must mediation-decompose: the alcohol→inflammation→liver fraction must be subtracted from the direct alcohol→liver edge (consistent with cellular-senescence stub notes). DE-AGE-PEGGING DEPENDENCY: chronic-inflammation is now an emergent ∫rate·dt node — MIGRATED Phase C3c 2026-06-12 (was Tier-B sigmoid age-curve). Migration DONE (Phase C3c, 2026-06-12) — populate-ready as a rate-term; when populated, the driver contribution must be decomposed out of the baseline self-dynamic residual (route-once). #gap/needs-state-node-migration #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "airPollution",
      "to": "chronic-inflammation",
      "evidenceStrength": "moderate",
      "note": "stub: airPollution→chronic-inflammation. PM2.5 particles (and their adsorbed organic components) activate TLR4 and the NLRP3 inflammasome in alveolar macrophages and dendritic cells; the resulting IL-6, IL-1β, and TNF-α spill into systemic circulation. Epidemiological evidence: each 10 µg/m³ increase in PM2.5 is associated with +0.11 mg/L CRP (Pope 2015 JAMA Intern Med prospective; n=5,752); short-term PM2.5 spikes acutely elevate IL-6 in panel studies (Zheng 2013). This is mechanistically distinct from: (a) the oxidative-DNA-damage channel captured by the airPollution→genomic-instability stub; (b) the bronchospasm/airway-inflammation channel captured by the live airPollution→copd cause edge; (c) the endothelial oxidative-stress channel captured by the live airPollution→cardiovascular cause edge. Natural variable: β in ln(HR for hsCRP per µg/m³ PM2.5 annual mean above popMean ~8; positive sign). DOUBLE-COUNT NOTE: the inflammation-mediated mortality paths (inflammation→CVD, inflammation→cancer) must not be double-counted with the existing direct airPollution→CVD and airPollution→COPD edges. Populate pass must mediation-decompose the PM2.5→inflammation→CVD fraction out of the direct airPollution→cardiovascular edge (currently β=0.00583 per µg/m³ = Pope 2002 total CVD, which bundles the inflammatory + oxidative-endothelial + sympathetic routes; the inflammatory fraction needs isolation). DE-AGE-PEGGING DEPENDENCY: chronic-inflammation is now an emergent ∫rate·dt node — MIGRATED Phase C3c 2026-06-12 (was Tier-B sigmoid age-curve). Migration DONE (Phase C3c, 2026-06-12) — populate-ready as a rate-term; when populated, the driver contribution must be decomposed out of the baseline self-dynamic residual (route-once). #gap/needs-state-node-migration #gap/needs-effect-size #gap/needs-mediation-decomposition-vs-direct-causes",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "chronic-inflammation",
      "to": "neurodegeneration",
      "evidenceStrength": "moderate",
      "note": "stub: chronic-inflammation→neurodegeneration. Systemic inflammaging drives neurodegeneration via: (1) BBB disruption — circulating TNF-α, IL-6, IL-1β promote VCAM-1 expression on endothelium → peripheral monocyte infiltration into CNS → amplification of neuroinflammation; (2) microglial priming — systemic LPS/cytokines 'prime' microglia to over-respond to subsequent stimuli (Cunningham 2012 Brain; Norden 2016 Glia); (3) direct cytokine access to hippocampus and circumventricular organs that lack a tight BBB. Explicitly listed in hallmarks/chronic-inflammation.md disease phenotype section: 'DAM (disease-associated microglia) populations are the primary CNS inflammaging effectors ... Complement-dependent synapse pruning is aberrantly reactivated in aging'. The Tyshkovskiy 2026 transcriptomic-clock work further anchors this: inflammation and interferon modules show the largest tAge acceleration in AD/neurodegeneration models. This hallmark→pathology-node edge is DISTINCT from: (a) the existing loss-of-proteostasis→neurodegeneration coupling (aggregate-driven neurodegeneration); (b) the cellular-senescence→neurodegeneration stub (local microglial/astrocytic senescence, which is CNS-intrinsic — this stub captures the SYSTEMIC inflammaging signal). The neurodegeneration node is already in the sim (node: neurodegeneration, cause: neurodegeneration). Natural variable: β in normalized coupling gain (dimensionless hallmark-to-pathology coupling). Mediation note: part of the systemic inflammaging→neurodegeneration effect is carried by the existing chronic-inflammation→stem-cell-exhaustion→immunosenescence chain (immunosenescence affects CNS immune surveillance). Populate pass must mediation-decompose the direct systemic cytokine fraction from the stem-cell/immune-mediated fraction. #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "chronic-inflammation",
      "to": "diabetes",
      "evidenceStrength": "moderate",
      "note": "stub: chronic-inflammation→diabetes. Systemic inflammation drives insulin resistance via: (1) TNF-α → serine phosphorylation of IRS-1 → impaired insulin signaling cascade (Hotamisligil 1993 Science; the canonical mechanism linking inflammation to T2D); (2) IL-6 (from adipose-tissue macrophage crown-like structures) → JAK-STAT3 → suppressor-of-cytokine-signaling-3 (SOCS3) → IRS-1 degradation; (3) NLRP3-derived IL-1β → direct β-cell toxicity + insulin resistance. Explicitly documented in hallmarks/chronic-inflammation.md § Type 2 diabetes: 'Adipose tissue macrophage infiltration and IL-1β/TNF-α drive insulin resistance via IRS-1 serine phosphorylation'. Epidemiological anchor: Pradhan 2001 JAMA (prospective, n=27,939 women): baseline hsCRP (top vs bottom quartile) → T2D incidence HR 4.2. Natural variable: β in normalized coupling gain (hallmark-to-pathology coupling; dimensionless). The diabetes cause node (E10-E14) is the terminal endpoint. DISTINCT from: (a) HbA1c→diabetes (which captures the acute-crisis glycemia endpoint after β-cell failure — downstream); (b) deregulated-nutrient-sensing→cellular-senescence→diabetes stub (β-cell senescence mechanism). The inflammation path drives insulin resistance in target tissues UPSTREAM of HbA1c elevation. Mediation note: when populating, apply mediation-decomposition — some of the chronic-inflammation→diabetes effect travels via chronic-inflammation→deregulated-nutrient-sensing (mTOR/AMPK axis, bidirectional) and thence to cellular-senescence→diabetes; decompose the DIRECT cytokine-driven IRS-1 serine phosphorylation fraction. #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "chronic-inflammation",
      "to": "ckd",
      "evidenceStrength": "moderate",
      "note": "stub: chronic-inflammation→ckd. Systemic inflammaging drives CKD via: (1) glomerular endothelial inflammation — circulating TNF-α, IL-6 activate glomerular mesangial cells and podocytes → proteinuria → nephron loss; (2) renal interstitial macrophage infiltration → TGF-β secretion → tubulointerstitial fibrosis; (3) CKD is itself a cause of inflammaging (bidirectional loop — uremic toxin retention elevates inflammatory cytokines), but the initial direction is biologically grounded: Fried 2004 (JASN prospective): IL-6 and CRP predict CKD progression rate in community-dwelling elderly. Grounded in hallmarks/chronic-inflammation.md key-phenotypes listing and the frailty-CKD-inflammation triangle. The CKD cause node (N00-N07/N17-N19/N25-N27) is the terminal endpoint. DISTINCT from: (a) SBP→ckd (hypertensive nephropathy — hemodynamic mechanism); (b) HbA1c→ckd (diabetic nephropathy — metabolic mechanism); (c) cellular-senescence→ckd stub (senescent tubular epithelial cell fibrosis — intrinsic cellular mechanism); (d) the reverse bidirectional: CKD→inflammation is not modeled in this edge (only the forward direction is stubbed). Natural variable: β in normalized coupling gain (hallmark-to-pathology coupling). Mediation note: part of the inflammation→ckd effect is mediated by inflammation→hypertension (elevated SBP, which already has its own SBP→ckd edge) — populate pass must decompose the direct glomerular/interstitial inflammation fraction from the BP-mediated fraction. #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "chronic-inflammation",
      "to": "liver",
      "evidenceStrength": "moderate",
      "note": "stub: chronic-inflammation→liver. Systemic and hepatic inflammaging drives non-alcoholic/metabolic-associated steatohepatitis (MASH) → cirrhosis → liver mortality. Mechanism: (1) hepatic Kupffer cell (liver-resident macrophage) activation by circulating LPS, DAMPs, and adipokines → TNF-α/IL-6/IL-1β → hepatocyte NF-κB → steatosis amplification → MASH; (2) systemic IL-6 drives hepatic acute-phase response, perpetuating the chronic inflammatory state; (3) TGF-β (both systemically elevated in inflammaging and locally produced by activated Kupffer cells) → hepatic stellate cell activation → collagen deposition → fibrosis → cirrhosis. The liver cause node (K70/K73-K74) includes the MASLD/MASH cirrhosis endpoint (cryptogenic K74) alongside alcohol-associated K70. This stub captures the inflammatory/metabolic MASH pathway that is DISTINCT from: (a) the existing alcohol→liver edge (alcoholic K70 — acetaldehyde hepatotoxicity); (b) the calorieBalance→BMI→HbA1c chain (which drives metabolic steatosis but not the superimposed inflammatory progression to MASH/cirrhosis). PROJECT-NOTES §8a explicitly flags that the liver node 'needs BOTH an alcohol edge (K70, dominant labeled share) AND metabolic edges (BMI + HbA1c) for the MASLD path' — this stub adds the inflammatory driver as a third, mechanistically distinct arm. Natural variable: β in normalized coupling gain (hallmark-to-pathology coupling; dimensionless). Mediation note: portion of this effect is mediated via chronic-inflammation→deregulated-nutrient-sensing (insulin resistance amplifies hepatic lipogenesis) and calorieBalance→BMI→liver (the steatosis substrate that inflammaging ignites into steatohepatitis). Populate pass must decompose: only the superimposed inflammatory-progression fraction (the MASH 'second hit' over simple steatosis) belongs here. #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "chronic-inflammation",
      "to": "immunosenescence",
      "evidenceStrength": "moderate",
      "note": "stub: chronic-inflammation→immunosenescence. Chronic systemic inflammaging accelerates immune aging via: (1) T-cell exhaustion — persistent cytokine stimulation (IL-6, TNF-α) drives T-cell terminal exhaustion (PD-1+/TIM-3+ phenotype) and conversion of naive T-cells to exhausted effector-memory cells, shrinking the naive pool (Fink 2019 JI); (2) thymic suppression — elevated TNF-α and IL-6 accelerate thymic involution (Sempowski 2000 JI: TNF-α directly drives thymic fibrosis and adipogenesis); (3) inflammaging-driven T-cell senescence (p21-mediated growth arrest of chronically activated T-cells, independent of replicative exhaustion). Explicitly acknowledged in hallmarks/chronic-inflammation.md § Immunosenescence-driven failure of resolution (the page frames the reverse arm — immunosenescence → poor inflammation resolution — but the bidirectional is grounded in the wiki's description of 'Th17 skewing' and SASP-driven immune remodeling). This is DISTINCT from the existing stem-cell-exhaustion→immunosenescence live coupling (which operates via HSC myeloid bias / reduced naive lymphocyte output) — this stub captures the DIRECT cytokine-driven T-cell exhaustion/thymic suppression arm. Note: the existing stem-cell-exhaustion→chronic-inflammation and chronic-inflammation→stem-cell-exhaustion edges already capture part of the CHIP/HSC bidirectional loop; this stub is the ADDITIONAL T-cell-exhaustion/thymic-suppression arm not yet modeled. The immunosenescence node (which drives the infection cause) is already in the sim. Natural variable: β in normalized coupling gain (hallmark-to-hallmark coupling; dimensionless). Mediation note: part of the inflammation→immunosenescence effect is routed via chronic-inflammation→stem-cell-exhaustion→immunosenescence (the existing live edges); the populate pass must decompose to capture only the DIRECT cytokine-driven thymic/T-cell path not already carried by that chain. #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "genomic-instability",
      "to": "mitochondrial-dysfunction",
      "evidenceStrength": "moderate",
      "note": "stub: genomic-instability→mitochondrial-dysfunction. The mitochondrial-dysfunction hallmark page (hallmarks/mitochondrial-dysfunction.md) frontmatter lists [[genomic-instability]] as a caused-by node, and the wiki page carries the mechanistic rationale: somatic mtDNA mutations accumulate as a subset of genomic damage (POLG mutator mouse: Trifunovic 2004 Nature, doi:10.1038/nature02517 — accelerated mtDNA mutations produce accelerated mitochondrial decline); additionally nuclear-encoded ETC subunit gene damage (somatic mutations in nuclear genes controlling OXPHOS assembly) impairs ETC complex assembly. This is a DISTINCT input from the disabled-macroautophagy→mitochondrial-dysfunction coupling (organelle-clearance failure) and the deregulated-nutrient-sensing→mitochondrial-dysfunction coupling (biogenesis failure) — here the upstream input is direct mtDNA and nuclear-ETC-gene mutation load. causal-graph-data.md does NOT list this edge in the 34-edge verified set. Natural variable: β in normalized coupling gain (no physical-unit dose-response linking somatic mtDNA mutation burden to ETC-decline per unit mutation count verified in the wiki yet). Mediation note: the mito→genomic-instability STUB (in MODEL.edges, the reverse direction) captures the ROS→nuclear-DNA-damage path; the present stub is the FORWARD causal direction (DNA damage → mtDNA dysfunction), distinct from the reverse. Populate pass: no double-count with mito→GI stub since directions differ. #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "telomere-attrition",
      "to": "mitochondrial-dysfunction",
      "evidenceStrength": "moderate",
      "note": "stub: telomere-attrition→mitochondrial-dysfunction. The telomere-p53-PGC-1α axis: critically short telomeres activate p53/p21 DDR; p53 transcriptionally represses PGC-1α and PGC-1β (documented in hallmarks/telomere-attrition.md and the wiki's mitochondrial-biogenesis page); PGC-1α is the master transcriptional co-activator of mitochondrial biogenesis (via NRF1→TFAM; mitochondrial-dysfunction.md § Core mechanism 3). Result: telomere attrition suppresses mitochondrial biogenesis → fewer new mitochondria to replace dysfunctional ones → accelerated mitochondrial dysfunction. This is biologically distinct from: (a) the telomere-attrition→cellular-senescence live coupling (which captures the DDR→growth-arrest senescence arm); (b) the deregulated-nutrient-sensing→mitochondrial-dysfunction (mTOR/AMPK arm); the PGC-1α suppression arm is mechanistically prior to and independent of mTORC1. Anchor: Sahin et al. 2011 Nature (doi:10.1038/nature10491) — telomere dysfunction activates p53, which directly represses PGC-1α/β in heart and liver, linking telomere shortening to mitochondrial biogenesis failure and metabolic compromise. Not in causal-graph-data.md 34-edge set. Natural variable: β in normalized coupling gain. Populate blocker: Sahin 2011 not yet a verified wiki study page; no quantitative dose-response (Δ-PGC-1α suppression per Δ-telomere length decrement) verified in the wiki. ⚠ BIDIRECTIONAL FEEDBACK PAIR: the reverse mitochondrial-dysfunction→telomere-attrition stub (ETC-ROS → telomeric GGG oxidation → accelerated shortening) is ALSO present — populating BOTH closes a 2-cycle. The seeder must calibrate the pair JOINTLY with spectral-radius/saturation analysis (an amplifying loop without a saturating term diverges), like the senescence↔inflammation and genomic-instability↔mitochondrial-dysfunction loops; do NOT populate either in isolation. #gap/needs-verified-source #gap/needs-effect-size #gap/loop-stability",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "epigenetic-alterations",
      "to": "mitochondrial-dysfunction",
      "evidenceStrength": "moderate",
      "note": "stub: epigenetic-alterations→mitochondrial-dysfunction. Two mechanisms: (1) NAD+/SIRT1-SIRT3 axis — age-related NAD+ decline (itself driven by epigenetic/metabolic changes) reduces SIRT1 activity → reduced PGC-1α deacetylation/activation → impaired mitochondrial biogenesis; SIRT3 decline → hyperacetylation of ETC complexes and SOD2 → reduced Complex I/III activity and elevated mtROS (hallmarks/mitochondrial-dysfunction.md § Limitations: 'the theoretical loop (NAD+ decline → SIRT1/3 ↓ → PGC-1α ↓ → biogenesis ↓) is mechanistically coherent but human interventional evidence largely null or contested'); (2) epigenetic silencing of mitochondrial biogenesis genes — CpG methylation drift at PGC-1α (PPARGC1A) promoter documented in aged human skeletal muscle and brain. The existing epigenetic-alterations→deregulated-nutrient-sensing coupling (weak, live) partially routes this via the SIRT1/nutrient-sensing branch, so this edge captures additional DIRECT epigenetic→mitophagy/biogenesis failure not covered by that path. causal-graph-data.md does NOT list this edge. Natural variable: β in normalized coupling gain. Mediation note: populate pass must decompose against the existing epigenetic-alterations→deregulated-nutrient-sensing→mitochondrial-dysfunction chain — only the DIRECT epigenetic→mitophagy/biogenesis fraction not routed via nutrient-sensing belongs here. POPULATE BLOCKED: NAD+/SIRT1 human interventional evidence is null (#gap/contradictory-evidence on the wiki's mitochondrial-dysfunction page); a verified primary-source dose-response for DIRECT epigenetic drift→mitophagy impairment is needed. #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "mitochondrial-dysfunction",
      "to": "sarcopenia",
      "evidenceStrength": "strong",
      "note": "stub: mitochondrial-dysfunction→sarcopenia. Skeletal muscle ETC activity and mitochondrial mass both decline with age; reduced mitochondrial respiratory capacity impairs oxidative metabolism, accelerates fatigue, and contributes to anabolic resistance and muscle mass loss — sarcopenia (hallmarks/mitochondrial-dysfunction.md § Disease consequences § Sarcopenia: 'Skeletal muscle ETC activity and mitochondrial mass both decline with age. Reduced mitochondrial respiratory capacity impairs oxidative metabolism, accelerates fatigue, and contributes to the anabolic resistance that drives muscle mass loss'). Also verified in sarcopenia.md (verified). The stem-cell-exhaustion→sarcopenia coupling (strong, live) captures the satellite-cell depletion arm; this stub captures the DISTINCT direct mitochondrial-bioenergetic arm. Supporting evidence: Zane 2017 (J Cachexia Sarcopenia Muscle): mitochondrial function (maximal ADP-stimulated respiration) predicts muscle mass and strength decline in older adults independently of satellite cell status. causal-graph-data.md lists stem-cell-exhaustion→sarcopenia (strong, via satellite cell failure) but does NOT explicitly list mitochondrial-dysfunction→sarcopenia as a hallmark-to-phenotype edge. This is a hallmark→frailty-phenotype edge analogous to chronic-inflammation→sarcopenia (live coupling). Natural variable: β in normalized coupling gain (hallmark-to-frailty-node coupling, dimensionless). Mediation note: part of the mitochondrial-dysfunction→sarcopenia effect is mediated by mito→cellular-senescence→SASP→muscle inflammation (senescence-muscle inflammation arm — route via existing live edges); populate pass must decompose the DIRECT bioenergetic impairment arm. DOUBLE-COUNT DISCIPLINE: mito-GDF15↔senescence/inflammation is a named double-count discipline (PROJECT-NOTES §5) — the GDF15 reporting route is SHARED between mito-dysfunction and senescence/inflammation, so GDF15 cannot be used as the natural-variable anchor; use direct ETC-respiratory-capacity decline per unit mito-dysfunction burden. #gap/needs-effect-size #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "physicalActivity",
      "to": "mitochondrial-dysfunction",
      "evidenceStrength": "strong",
      "note": "stub: physicalActivity→mitochondrial-dysfunction (β<0 PROTECTIVE — higher activity REDUCES mitochondrial dysfunction burden). Exercise is the single best-evidenced modifiable driver of mitochondrial function: acute exercise induces mitophagy (PINK1/Parkin + receptor arms), activates PGC-1α for biogenesis, and increases mitochondrial density in skeletal muscle (hallmarks/mitochondrial-dysfunction.md § Therapeutic angles § Exercise: 'Exercise remains the most reliable intervention to stimulate PGC-1α and mitochondrial biogenesis acutely, with exercise training durably increasing mitochondrial density in skeletal muscle. This is the mechanistic basis for exercise as the most effective known intervention against age-related mitochondrial decline.'). Also documented on mitochondrial-biogenesis.md (verified) and mitophagy.md (verified-partial: Onishi 2021). Human biopsy evidence well-established for acute effects (Lira 2010, Hood 2019 J Physiol). Natural variable: β in normalized coupling gain per unit physicalActivity deviation (β<0: more exercise → lower mitochondrial-dysfunction burden; the exerciseScaled form is already used for physicalActivity→restingHR). SIGN IS NEGATIVE (protective). DE-AGE-PEGGING DEPENDENCY: mitochondrial-dysfunction is currently a Tier-B exponential age-curve node (form: exponential). Populating this driver term requires FIRST migrating mitochondrial-dysfunction to a ∫rate·dt state node (Phase C3 of migration roadmap) — otherwise the exogenous forcing would overlay a hard-coded age line, double-driving the node. Until that migration, this stub is inert. EXOGENOUS-DRIVER REROUTING STRATEGY (per age-hardcoding-audit.md §Deferred): this stub is scaffolding for rerouting physicalActivity's mortality benefit OFF direct cause-of-death PAFs onto the mechanistic path physicalActivity→mito-dysfunction→(sarcopenia, cardiovascular, senescence). Populating requires: (a) migrate mito-dysfunction to ∫rate·dt state node; (b) verify quantitative dose-response (ΔmitochondrialRespiratorCapacity per min/wk aerobic exercise); (c) decompose the mito-dysfunction-mediated fraction out of physicalActivity→allcause bundled edge. #gap/needs-state-node-migration #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "alcohol",
      "to": "mitochondrial-dysfunction",
      "evidenceStrength": "moderate",
      "note": "stub: alcohol→mitochondrial-dysfunction (β>0 HARMFUL — heavy alcohol INCREASES mitochondrial dysfunction). Chronic heavy alcohol directly impairs mitochondrial function via: (1) acetaldehyde (primary ethanol metabolite) — directly inhibits Complex I of the electron transport chain and induces mitochondrial swelling and uncoupling, documented across hepatocytes, cardiomyocytes, and skeletal muscle; (2) ethanol-induced mitochondrial ROS (particularly in hepatocytes — the alcoholic liver disease mechanism) → lipid peroxidation → mtDNA damage → heteroplasmy accumulation; (3) alcohol disrupts mitophagy: chronic ethanol suppresses the PINK1/Parkin pathway in hepatocytes (Ding 2010 Hepatology: alcohol-fed rats show impaired mitophagy and accumulation of dysfunctional mitochondria). The wiki's mitochondrial-dysfunction page references the 'MASH context' as relevant (§ Interaction map). Natural variable: β in normalized coupling gain per unit alcohol input (above the ~2-drink/day threshold; positive sign — more alcohol → more mito dysfunction). DISTINCT from: (a) alcohol→liver (live cause edge — alcoholic hepatotoxicity endpoint); (b) alcohol→genomic-instability stub (acetaldehyde DNA adducts — genotoxic channel); (c) alcohol→chronic-inflammation stub (LPS/NF-κB channel). This stub captures the direct mitochondrial ETC-impairment channel. DE-AGE-PEGGING DEPENDENCY: mitochondrial-dysfunction is a Tier-B exponential age-curve node. Populating requires FIRST migrating mitochondrial-dysfunction to ∫rate·dt state node. EXOGENOUS-DRIVER REROUTING STRATEGY: this stub is scaffolding for the reroute strategy (age-hardcoding-audit.md §Deferred) — when populated, the mito-mediated fraction of alcohol mortality must be decomposed out of existing direct alcohol cause edges. Mediation decomposition: the alcohol→mito→sarcopenia path is a DISTINCT arm from alcohol→liver; no immediate double-count with live edges, but when mito→sarcopenia is also populated, the chain alcohol→mito→sarcopenia→falls must be checked against any direct alcohol→falls component. #gap/needs-state-node-migration #gap/needs-effect-size #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "calorieBalance",
      "to": "mitochondrial-dysfunction",
      "evidenceStrength": "moderate",
      "note": "stub: calorieBalance→mitochondrial-dysfunction (β>0 HARMFUL — chronic positive energy balance / excess FFA impairs mitochondrial function). Lipotoxic mitochondrial stress: chronic excess of non-esterified free fatty acids (NEFA) — particularly saturated species (palmitate, stearate) from adipose overflow in positive calorie balance — impairs ETC via: (1) ceramide accumulation → inhibition of Complex I and III; (2) diacylglycerol (DAG) → PKC activation → serine phosphorylation of IRS-1 → insulin resistance → impaired glucose oxidation → shift to incomplete β-oxidation generating acylcarnitines that accumulate and inhibit OXPHOS; (3) excess mitochondrial FA β-oxidation → uncoupling → elevated mtROS → mtDNA damage. Mechanism grounded in hallmarks/mitochondrial-dysfunction.md § Type 2 diabetes: 'mitochondrial dysfunction in skeletal muscle and liver contributes to insulin resistance — reduced oxidative capacity leads to intramyocellular lipid accumulation and DAG/ceramide-mediated PKC activation'. DISTINCT from: (a) calorieBalance→BMI→HbA1c→β-cell-decline (the metabolic-glycemic chain, live); (b) calorieBalance→cellular-senescence stub (lipotoxic SIPS, a senescence mechanism); (c) calorieBalance→chronic-inflammation stub (adipokine/TNF-α channel). This stub captures the DIRECT lipotoxic mitochondrial impairment channel — intramyocellular lipid-driven ETC dysfunction independent of glycemia. Natural variable: β in normalized coupling gain per unit positive calorieBalance (above maintenance; positive sign). DE-AGE-PEGGING DEPENDENCY: mitochondrial-dysfunction is a Tier-B exponential age-curve node. Populating requires FIRST migrating mitochondrial-dysfunction to ∫rate·dt state node. EXOGENOUS-DRIVER REROUTING STRATEGY: scaffolding for reroute per age-hardcoding-audit.md §Deferred. Mediation decomposition: the calorieBalance→mito→sarcopenia path is partially covered by the calorieBalance→BMI→HbA1c→deregulated-nutrient-sensing chain; populate pass must isolate the ADDITIONAL direct lipotoxic mito-impairment fraction. #gap/needs-state-node-migration #gap/needs-effect-size #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "mitochondrial-dysfunction",
      "to": "telomere-attrition",
      "evidenceStrength": "moderate",
      "note": "stub: mitochondrial-dysfunction→telomere-attrition (β>0 HARMFUL — mito ROS accelerates telomere erosion). Mechanism: superoxide/H2O2 from dysfunctional ETC complexes I/III preferentially oxidises guanine triplets (GGG) in telomeric TTAGGG repeats → 8-oxo-dG lesions block telomerase extension even when TERT is present → accelerated net 3′-overhang loss; ROS also cleave the sugar-phosphate backbone within the repeat, creating single-strand nicks that are harder to repair in the t-loop context than in bulk chromatin. The mechanism is documented in the verified atomic page hallmarks/telomere-attrition.md § 2 'Oxidative damage to guanine triplets': '8-oxo-deoxyguanosine lesions in GGG triplets block telomerase extension even when telomerase is present, and they accelerate 3′-overhang loss. This is the proposed mechanistic link between ROS biology and telomere shortening.' The free-radical theory of aging page (verified, status: superseded as primary driver) anchors this mechanism. Human epidemiology: shorter LTL is consistently associated with markers of oxidative stress and mitochondrial dysfunction in cross-sectional cohort studies. Prefer HUMAN epidemiological anchors (leukocyte telomere length cohorts) over mouse mechanistic studies per the telomere audit discipline (mouse telomere biology diverges sharply — very long telomeres, partial somatic telomerase; standard C57BL/6 mice not a reliable model). Natural variable: β in normalised coupling gain (dimensionless hallmark-layer coupling). ⚠ BIDIRECTIONAL 2-CYCLE WARNING: the reverse edge telomere-attrition→mitochondrial-dysfunction is ALREADY STUBBED (Sahin 2011 telomere-p53-PGC-1α axis). Populating BOTH closes a feedback 2-cycle (telomere erosion → mito dysfunction → more ROS → faster erosion). The seeder MUST calibrate the pair jointly — apply spectral-radius / saturation analysis so the loop gain is <1 (same discipline as senescence↔inflammation and genomic-instability↔mitochondrial-dysfunction pairs). Do NOT populate either stub in isolation. #gap/loop-stability #gap/needs-verified-source #gap/needs-effect-size. Mediation note: part of the mito-ROS→telomere signal is carried by mito→genomic-instability (the nuclear DNA oxidative damage stub) → and genomic-instability is a contested upstream of telomere-attrition; decompose to avoid double-counting the oxidative-damage channel. POPULATE BLOCKED: no verified primary-source human dose-response (ΔLTL per unit mitochondrial dysfunction severity) in the wiki. TRIGGER: dispatch wiki-seeder to add a verified human cohort study linking oxidative stress biomarkers / mitochondrial function to LTL attrition rate → then graph-node-seeder populates WITH joint calibration of the bidirectional pair.",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "chronic-inflammation",
      "to": "telomere-attrition",
      "evidenceStrength": "moderate",
      "note": "stub: chronic-inflammation→telomere-attrition (β>0 HARMFUL — systemic inflammaging accelerates telomere shortening). Two mechanistic arms: (1) INCREASED REPLICATIVE TURNOVER — chronic elevation of TNF-α/IL-6/IL-1β drives proliferative pressure on immune cell progenitors (monocytes, lymphocyte precursors) to replace the increased apoptotic/senescent fraction; each additional division costs ~50–100 bp via the end-replication problem, directly depleting LTL in the most mitotically active leukocyte populations. This is the dominant mechanism explaining why chronic inflammatory diseases (RA, IBD, lupus) consistently show accelerated LTL attrition. (2) OXIDATIVE BURDEN — activated macrophages/neutrophils generating ROS as part of the inflammatory response contribute to the systemic oxidative environment that damages telomeric GGG triplets (same mechanism as mito-ROS arm above, but inflammation-sourced). Human epidemiology: multiple cross-sectional cohort studies show IL-6 and hsCRP inversely correlated with LTL. Mendelian randomisation: Haycock 2016 (Epidemiology) and subsequent bidirectional MR studies confirm causal direction from inflammation → shorter LTL (using CRP/IL-6 GWAS instruments). The verified chronic-inflammation atomic page documents the ROS arm. Natural variable: β in normalised coupling gain. PARTIAL MEDIATION NOTE: this edge partially overlaps with chronic-inflammation→cellular-senescence (live) → telomere-attrition path (the SASP-induced bystander senescence channel drives additional replicative senescence in adjacent cells) — but the DIRECT division-pressure and oxidative arms above are mechanistically prior to and independent of paracrine senescence. Populate pass must decompose against the existing chain. POPULATE BLOCKED: no verified primary-source human dose-response quantifying ΔLTL per unit elevated hsCRP or IL-6 in the wiki (observational studies exist but MR-level dose-response for the hallmark-layer coupling gain is lacking). TRIGGER: dispatch wiki-seeder to verify a Mendelian-randomisation study for inflammation→LTL (e.g. Haycock 2016 Epidemiology doi:10.1097/EDE.0000000000000463) → then graph-node-seeder populates. #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "coupling",
      "from": "telomere-attrition",
      "to": "epigenetic-alterations",
      "evidenceStrength": "moderate",
      "note": "stub: telomere-attrition→epigenetic-alterations (β>0 HARMFUL — telomere erosion drives local and regional epigenetic drift). Mechanism: telomere position effect (TPE) — as telomeric repeats shorten, the heterochromatin boundary maintained by TRF1/TRF2 and HP1α/H3K9me3 retraction retreats inward, eroding the silencing of subtelomeric loci and producing CpG demethylation / histone mark drift at genes within ~10 Mb of chromosome ends. This is bidirectional with the live epigenetic-alterations→cellular-senescence coupling (heterochromatin erosion → derepressed retrotransposons → cGAS-STING → SASP) but the TPE mechanism is an outbound causal effect of telomere shortening on the epigenetic landscape, distinct from the converse. Documented in the verified hallmarks/telomere-attrition.md § Cross-talk: 'Subtelomeric heterochromatin spreads epigenetic silencing inward as telomeres shorten; telomere position effect (TPE) can silence nearby genes with age.' Second mechanism: critically short telomeres trigger p53 → which represses DNMT3A/3B activity (epigenome maintenance enzymes), promoting widespread CpG hypomethylation (a hallmark of aged tissue). DISTINCT from the outbound TA→cellular-senescence (DDR→growth arrest arm) and TA→mitochondrial-dysfunction (p53→PGC-1α arm, existing stub). NOT listed in causal-graph-data.md 34-edge verified set; mechanism inferred from the verified hallmarks/telomere-attrition.md § Cross-talk. Natural variable: β in normalised coupling gain (dimensionless hallmark-to-hallmark coupling). POPULATE BLOCKED: no verified primary-source quantitative dose-response (Δ-epigenetic-clock acceleration per Δ-telomere shortening decrement) in the wiki. Some correlational evidence: DNAm clock age and LTL inversely correlate in cross-sectional data, but these are confounded by shared upstream drivers; a clean MR or interventional dose-response is lacking. TRIGGER: dispatch wiki-seeder to verify a human study quantifying the TPE effect size on subtelomeric methylation as a function of LTL → then graph-node-seeder populates. #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "smokingStatus",
      "to": "telomere-attrition",
      "evidenceStrength": "strong",
      "note": "stub: smokingStatus→telomere-attrition (β>0 HARMFUL — smoking INCREASES telomere-attrition burden). Mechanism: tobacco combustion products (ROS, PAHs, acrolein) generate systemic oxidative stress that preferentially damages telomeric GGG triplets → 8-oxo-dG lesions → accelerated net telomere erosion; acrolein also cross-links telomeric DNA. Additionally, smoking drives chronic airway inflammation → increased leukocyte turnover → replicative LTL shortening. Human epidemiology: STRONG — meta-analyses confirm current smokers have significantly shorter LTL than never-smokers equivalent to ~4–5 additional years of LTL aging (Valdes 2005 Lancet: smoking ~1 cigarette/day associated with 5 bp/year additional LTL shortening; Brouilette 2003 Heart: smokers shorter LTL). The telomere-length-leukocyte biomarker page (verified) documents the association. Mendelian randomisation: Haycock 2016 (Epidemiology; doi:10.1097/EDE.0000000000000463; bidirectional MR using smoking GWAS instruments vs LTL GWAS instruments) supports causal direction from smoking → shorter LTL. Natural variable: β in normalised driver coupling per smokingStatus categorical unit; prefer human cohort/MR data for coefficient (NOT mouse mechanistic data — telomere biology diverges sharply between mouse and human). SIGN IS POSITIVE (smoking → higher telomere-attrition burden). EXOGENOUS-DRIVER REROUTING STRATEGY (per age-hardcoding-audit.md §Deferred): this stub is scaffolding for rerouting smokingStatus mortality off direct PAF cause-edges. Populating is a route-once operation: the telomere-attrition-mediated fraction of smoking's cancer/CVD risk (via TA→cellular-senescence→...) must be SUBTRACTED from the existing smokingStatus→[cause] direct edges when this is activated — decompose, do not stack. TWO POPULATE BLOCKERS: (1) telomere-attrition is a Tier-B linear age-curve node — must be migrated to ∫rate·dt state node (Phase C3) before this driver term can be populated; adding to an age-curve node would double-drive it. (2) Verified primary-source quantitative dose-response (ΔLTL per pack-year or per cigarette/day) as a wiki page (Valdes 2005 / Brouilette 2003 not yet seeded as verified study pages). TRIGGER: (a) dispatch wiki-seeder to seed and verify Valdes 2005 (Lancet, doi:10.1016/S0140-6736(05)66630-5) and/or Haycock 2016 MR → then (b) migrate telomere-attrition to ∫rate·dt state node (Phase C3) → then graph-node-seeder populates with decomposed β and adjusts smokingStatus→[cause] edges. #gap/needs-state-node-migration #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "physicalActivity",
      "to": "telomere-attrition",
      "evidenceStrength": "weak",
      "note": "stub: physicalActivity→telomere-attrition (β<0 PROTECTIVE — higher activity REDUCES telomere-attrition burden). Mechanism: aerobic exercise induces antioxidant defence (SOD, catalase, GPx upregulation) → reduces ROS → less telomeric GGG oxidation; also reduces systemic inflammation → lower leukocyte turnover pressure → slower replicative LTL shortening; and increases telomerase activity in peripheral blood mononuclear cells acutely (Werner 2009 Circulation). Human evidence: WEAK/CONTRADICTORY — the telomere-length-leukocyte biomarker page (verified) explicitly flags '#gap/contradictory-evidence': 'Multiple studies have reported that aerobic exercise training is associated with longer LTL... however, effect sizes are small, studies are often underpowered, and the measurement noise in qPCR-based LTL means many putative intervention effects fall within the technical noise range.' Meta-analyses of observational data suggest modest positive associations, but controlled trials have shown inconsistent results. MR evidence for exercise→LTL is not established. Despite weak evidence, the mechanism is biologically plausible and directional, so the stub is warranted per §0b (stub liberally; missing verified citation is a POPULATE blocker, not a stub gate). SIGN IS NEGATIVE (β<0; higher activity → lower telomere-attrition burden). EXOGENOUS-DRIVER REROUTING STRATEGY (per age-hardcoding-audit.md §Deferred): this stub is scaffolding for eventually rerouting a fraction of physicalActivity's mortality benefit via the telomere-attrition node. The partial-mediation note applies: much of exercise's LTL benefit may be mediated by physicalActivity→chronic-inflammation→telomere-attrition (the anti-inflammatory arm), so decompose at populate time to isolate the DIRECT antioxidant/telomerase arm. TWO POPULATE BLOCKERS: (1) telomere-attrition must be migrated to ∫rate·dt state node (Phase C3). (2) Verified primary-source quantitative dose-response (ΔLTL per min/week MVPA or per unit exercise volume) needed; #gap/contradictory-evidence flags the current wiki status. TRIGGER: (a) wiki-seeder to identify and verify a meta-analysis with a defensible exercise→LTL dose-response (or flag definitively as #gap/contradictory-evidence if population-level MR null) → then (b) migrate telomere-attrition state-node → then graph-node-seeder populates (or marks as evidence-insufficient and removes stub). #gap/needs-state-node-migration #gap/contradictory-evidence #gap/needs-verified-source",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "calorieBalance",
      "to": "telomere-attrition",
      "evidenceStrength": "moderate",
      "note": "stub: calorieBalance→telomere-attrition (β>0 HARMFUL — chronic positive energy balance / adiposity shortens telomeres). Mechanism: (1) ADIPOSE-DERIVED OXIDATIVE STRESS — expanded visceral adipose tissue generates elevated ROS (via NADPH oxidase and mitochondrial uncoupling in adipocytes) → systemic oxidative burden → telomeric GGG oxidation → accelerated LTL erosion; (2) ADIPOSE INFLAMMATION — visceral fat secretes pro-inflammatory adipokines (TNF-α, IL-6, leptin) → chronic low-grade inflammation → increased leukocyte turnover → replicative LTL shortening (this arm overlaps with the chronic-inflammation→telomere-attrition stub — populate pass must decompose; the DIRECT adipose-ROS arm is the non-mediated fraction). Human epidemiology: MODERATE — multiple cross-sectional studies show BMI inversely correlates with LTL (Muezzinler 2014 Obesity Reviews meta-analysis: each 10 kg/m2 BMI increase associated with ~0.017 T/S ratio shorter LTL); MR evidence is mixed (BMI→LTL not consistently replicated in bidirectional MR; largely driven by the correlation rather than Mendelian evidence). SIGN IS POSITIVE (positive calorie balance → higher telomere-attrition burden). EXOGENOUS-DRIVER REROUTING STRATEGY (per age-hardcoding-audit.md §Deferred): scaffolding for rerouting calorieBalance mortality impact mechanistically. The adipose-ROS arm is DISTINCT from calorieBalance→BMI→HbA1c chain (glycemic) and calorieBalance→chronic-inflammation (adipokine arm; partially shared). TWO POPULATE BLOCKERS: (1) telomere-attrition must be migrated to ∫rate·dt state node (Phase C3). (2) Verified primary-source quantitative dose-response (ΔLTL per BMI unit or per kcal/day calorie surplus) as a wiki page (Muezzinler 2014 not yet seeded). TRIGGER: (a) wiki-seeder to seed and verify Muezzinler 2014 (Obesity Reviews doi:10.1111/obr.12154) → then (b) migrate telomere-attrition state-node → then graph-node-seeder populates; apply mediation-decomposition against calorieBalance→chronic-inflammation→telomere-attrition chain. #gap/needs-state-node-migration #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "airPollution",
      "to": "telomere-attrition",
      "evidenceStrength": "moderate",
      "note": "stub: airPollution→telomere-attrition (β>0 HARMFUL — PM2.5 exposure shortens telomeres). Mechanism: PM2.5 carries transition metals (Fe, Cu, Mn) that catalyse Fenton/Haber-Weiss reactions → hydroxyl radical generation → preferential oxidation of telomeric GGG triplets → 8-oxo-dG lesions → accelerated telomere erosion; additionally PM2.5 PAH components cause DNA adducts in telomeric sequences; and PM2.5-driven systemic inflammation → elevated leukocyte turnover → replicative shortening (shared arm with chronic-inflammation stub). Human epidemiology: MODERATE — multiple US/Chinese cohort studies show ambient PM2.5 inversely associated with LTL (e.g. Pieters 2016 JAMA, Environmental Health Perspectives cohorts; US women's health studies). DISTINCT from: (a) airPollution→genomic-instability stub (the bulk nuclear-DNA mutagenesis channel); (b) airPollution→chronic-inflammation stub (the NF-κB systemic inflammatory channel). This stub captures the DIRECT telomere-oxidative channel. SIGN IS POSITIVE (higher PM2.5 → more telomere-attrition burden). EXOGENOUS-DRIVER REROUTING STRATEGY (per age-hardcoding-audit.md §Deferred): scaffolding for rerouting airPollution's mortality contribution mechanistically. Populate pass must decompose against existing airPollution→[cause] direct edges and against the airPollution→chronic-inflammation→telomere-attrition chain (to avoid double-routing the inflammatory arm). TWO POPULATE BLOCKERS: (1) telomere-attrition must be migrated to ∫rate·dt state node (Phase C3). (2) Verified primary-source human dose-response (ΔLTL per µg/m3 PM2.5) as a wiki page (Pieters 2016 or equivalent not yet seeded). TRIGGER: (a) wiki-seeder to seed and verify a human cohort study of PM2.5→LTL dose-response → then (b) migrate telomere-attrition state-node → then graph-node-seeder populates with mediation-decomposition. #gap/needs-state-node-migration #gap/needs-verified-source #gap/needs-effect-size",
      "provenance": "stub"
    },
    {
      "kind": "stub",
      "intendedKind": "driver",
      "from": "alcohol",
      "to": "telomere-attrition",
      "evidenceStrength": "weak",
      "note": "stub: alcohol→telomere-attrition (β>0 HARMFUL — heavy alcohol shortens telomeres). Mechanism: (1) acetaldehyde (primary ethanol metabolite) forms N2-dGuo adducts in telomeric sequences and generates reactive oxygen species → accelerated telomere erosion; (2) chronic alcohol → hepatic ROS elevation + systemic inflammation → leukocyte turnover pressure. Human epidemiology: WEAK — Pavanello 2011 (Int Arch Occup Environ Health, occupational cohort) and Strandberg 2012 (Aging Clinical and Experimental Research) report heavy alcohol associated with shorter LTL, but sample sizes are small and observational. MR for alcohol→LTL not well-established. SIGN IS POSITIVE (heavy alcohol → higher telomere-attrition burden). MEDIATION NOTE: the acetaldehyde-DNA-adduct arm overlaps with the alcohol→genomic-instability stub (which captures acetaldehyde's genotoxic effects broadly); the direct telomere-sequence adduct formation may not add much beyond what the GI path carries. Populate pass must review whether the alcohol→telomere-attrition arm is meaningfully DISTINCT from the alcohol→genomic-instability→[downstream] chain before activating this stub — if largely mediated, this edge should be dropped in favour of the GI path (route-once discipline). EXOGENOUS-DRIVER REROUTING STRATEGY (per age-hardcoding-audit.md §Deferred): scaffolding for rerouting alcohol's mortality contribution mechanistically. TWO POPULATE BLOCKERS: (1) telomere-attrition must be migrated to ∫rate·dt state node (Phase C3). (2) Verified primary-source quantitative dose-response (ΔLTL per g/day ethanol) and mediation-decomposition review against alcohol→genomic-instability path. TRIGGER: (a) wiki-seeder to verify a human MR or well-powered cohort study for alcohol→LTL → then (b) mediation review against alcohol→GI stub → then (c) if distinctly supported, migrate state-node and populate; if fully mediated, retire this stub. #gap/needs-state-node-migration #gap/needs-verified-source #gap/contradictory-evidence",
      "provenance": "stub"
    }
  ],
  "bLayer": {
    "version": "B-stage1",
    "note": "Stage-1 endogenous-mediator tier (2026-06-08). Exogenous behavioral/environmental inputs drive emergent mediator VALUES (LDL, SBP, BMI, HbA1c). NOT YET wired to mortality — mortality math is unchanged v0.3. mediator(age) = baseline_{med,sex}(age) + Σ_x coeff_{x→med}·form(input_x − populationMean_x) + personal_offset. At population-average inputs + zero offset, mediator == baseline (invariant). Numbers transcribed from § B-layer parameters; interpolations flagged in provenance.",
    "exogenousInputs": [
      {
        "id": "smoking",
        "label": "Smoking",
        "unit": "cigarettes/day",
        "populationMean": 2,
        "range": [
          0,
          40
        ],
        "unwired": true,
        "note": "DEFERRED PLACEHOLDER: the categorical `smokingStatus` (never/former/current) is used instead (Stage-2), so this continuous cig/day input has no edges and is not in PANEL_INPUT_IDS — inert. Kept as the slot for a future dose-resolved smoking model."
      },
      {
        "id": "smokingStatus",
        "label": "Smoking status (categorical)",
        "unit": "never|former|current",
        "populationMean": "population",
        "range": [
          "never",
          "former",
          "current"
        ],
        "note": "Categorical smoking status for the direct smoking->cancer/COPD cause edges (Stage 2). Sentinel populationMean 'population' (and undefined) maps to the US smoker mix (61% never / 25% former / 14% current), normalized so the mix averages to a multiplier of 1 — the CDC cause baselines already embed this mix."
      },
      {
        "id": "calorieBalance",
        "label": "Caloric balance (intake − expenditure)",
        "unit": "kcal/day",
        "populationMean": 0,
        "range": [
          -1000,
          1000
        ],
        "info": "Your <b>habitual</b> daily surplus/deficit vs. the intake that maintains your baseline weight. A sustained surplus doesn't add weight forever &mdash; you burn more as you gain and settle at a <b>new stable weight</b> (Hall 2013), so the slider shifts the whole BMI curve to that equilibrium (a level shift) rather than making BMI diverge with age. <b>0 = weight-stable</b> on the population baseline (overweight on average); &lt;0 = leaner equilibrium, &gt;0 = heavier. Assumes the balance is held lifelong (no mid-life onset). To pin an actual BMI, use the BMI field under Labs."
      },
      {
        "id": "physicalActivity",
        "label": "Physical activity",
        "unit": "min/week MVPA",
        "populationMean": 150,
        "range": [
          0,
          600
        ]
      },
      {
        "id": "dietSatFat",
        "label": "Saturated fat",
        "unit": "% energy",
        "populationMean": 11,
        "range": [
          3,
          25
        ]
      },
      {
        "id": "dietFiber",
        "label": "Soluble fiber",
        "unit": "g/day",
        "populationMean": 3,
        "range": [
          0,
          30
        ]
      },
      {
        "id": "dietSodium",
        "label": "Dietary sodium",
        "unit": "mmol/day",
        "populationMean": 150,
        "range": [
          40,
          300
        ]
      },
      {
        "id": "alcohol",
        "label": "Alcohol",
        "unit": "drinks/day",
        "populationMean": 1,
        "range": [
          0,
          10
        ]
      },
      {
        "id": "sleep",
        "label": "Sleep",
        "unit": "hours/night",
        "populationMean": 7,
        "range": [
          3,
          11
        ],
        "note": "WIRED 2026-06-10: sleep→allcause via the `uShape` form (nadir BAND 7-8 h, ASYMMETRIC arms — both short and long sleep raise all-cause mortality, long steeper; Cappuccio 2010). 7 h and 8 h are both penalty-free (the reference band). Exposed as a panel slider. The first U-shaped pathway; the banded/asymmetric `uShape` form is reusable for the planned IGF-1 nutrient-sensing U-shape."
      },
      {
        "id": "airPollution",
        "label": "Air pollution",
        "unit": "µg/m³ PM2.5",
        "populationMean": 8,
        "range": [
          2,
          60
        ]
      }
    ],
    "mediators": [
      {
        "id": "LDL",
        "label": "LDL cholesterol",
        "unit": "mg/dL",
        "sd": 35,
        "baseline": {
          "male": [
            [
              25,
              115
            ],
            [
              35,
              115
            ],
            [
              45,
              115
            ],
            [
              55,
              115
            ],
            [
              65,
              108
            ],
            [
              75,
              100
            ],
            [
              85,
              100
            ]
          ],
          "female": [
            [
              25,
              115
            ],
            [
              35,
              115
            ],
            [
              45,
              116
            ],
            [
              55,
              120
            ],
            [
              65,
              116
            ],
            [
              75,
              115
            ],
            [
              85,
              115
            ]
          ]
        },
        "provenance": "JAMA Cardiol lipid-trends; PMC9615374; db515. Only crude <65 vs >=65 published (M<65 114.8/M>=65 100.0(treated-low); F<65 114.8/F>=65 114.6). INTERPOLATED to per-year: male flat ~115 to 55 then decline to ~100 (treated-low >=65); female menopausal rise 45-55 to ~120 peak then ~115, overtaking male >=65."
      },
      {
        "id": "systolicBP",
        "label": "Systolic blood pressure",
        "unit": "mmHg",
        "sd": 16,
        "baseline": {
          "male": [
            [
              25,
              119
            ],
            [
              35,
              119
            ],
            [
              45,
              124
            ],
            [
              55,
              124
            ],
            [
              65,
              133
            ],
            [
              75,
              154
            ],
            [
              85,
              154
            ]
          ],
          "female": [
            [
              25,
              110
            ],
            [
              35,
              110
            ],
            [
              45,
              122
            ],
            [
              55,
              122
            ],
            [
              65,
              139
            ],
            [
              75,
              159
            ],
            [
              85,
              159
            ]
          ]
        },
        "provenance": "NHSR-35 2001-08 untreated-HTN/total strata. 3 published bands -> INTERPOLATED piecewise-linear. Female SBP crossover at 60s (F139 > M133) encoded."
      },
      {
        "id": "BMI",
        "label": "Body mass index",
        "unit": "kg/m^2",
        "sd": 6,
        "baseline": {
          "male": [
            [
              25,
              27.6
            ],
            [
              35,
              30.3
            ],
            [
              45,
              30.1
            ],
            [
              55,
              29.8
            ],
            [
              65,
              29.9
            ],
            [
              75,
              29.2
            ],
            [
              85,
              27.6
            ]
          ],
          "female": [
            [
              25,
              28.3
            ],
            [
              35,
              29.9
            ],
            [
              45,
              30.7
            ],
            [
              55,
              30.3
            ],
            [
              65,
              30.3
            ],
            [
              75,
              29.8
            ],
            [
              85,
              28
            ]
          ]
        },
        "provenance": "Fryar 2015-18 (~untreated biology; right-skewed). Direct per-band table, band-center ages."
      },
      {
        "id": "HbA1c",
        "label": "Glycated hemoglobin",
        "unit": "%",
        "sd": 0.6,
        "baseline": {
          "male": [
            [
              25,
              5.3
            ],
            [
              85,
              5.3
            ]
          ],
          "female": [
            [
              25,
              5.3
            ],
            [
              85,
              5.3
            ]
          ]
        },
        "provenance": "EMERGENT (2026-06-10, Increment 2 of the β-cell→HbA1c vertical): the HbA1c baseline is now FLAT at the young-healthy value 5.3% (no age-pegging). The empirical age-RISE (Selvin 2005-10: 5.3→5.9 M / 5.8 F across 25→85) EMERGES from the β-cell-decline state node via a stateAugment (HbA1c += coeff·β-cell-decline; coeff 0.6 M / 0.5 F so HbA1c@80 ≈ 5.9/5.8). β-cell-decline integrates an intrinsic attrition rate (Increment 2) + glucotoxicity feedback (Increment 3 — the diabetes spiral), so HbA1c KEEPS RISING past 85 (was clamped flat at 5.9 across 85→130) and an intervention/connection can bend the age-RISE itself, not just add a static deviation. Deviation-form HbA1c→CVD/cancer/dementia edges + crosslink=∫HbA1c are ratio/deviation to the (same-law) baseline ⇒ baseline LE preserved EXACTLY regardless of the emergent shape. The cross-sectional plateau at 5.9 (65→85) is partly survivorship/secular-trend artifact; the emergent monotonic rise tracks the band-centers within ~0.15% and is the more defensible longitudinal trajectory. SD 0.6 (right-skewed)."
      },
      {
        "id": "restingHR",
        "label": "Resting heart rate",
        "unit": "bpm",
        "sd": 10,
        "baseline": {
          "male": [
            [
              25,
              65
            ],
            [
              85,
              65
            ]
          ],
          "female": [
            [
              25,
              68
            ],
            [
              85,
              68
            ]
          ]
        },
        "provenance": "Population resting HR ~65 bpm (male) / ~68 (female); FLAT illustrative baseline (NHANES resting HR ~60-70; age-neutral, no age-pegging). Added 2026-06-10 (A2) as a DRIVER for the elastin-fatigue state node — pulsatile mechanical fatigue of elastin scales with cardiac cycles × pressure amplitude, i.e. HR × pulse-pressure. Anchorable via Labs. DEFERRED follow-ups: a restingHR→mortality edge (resting HR is an independent CV/all-cause risk factor) and a physicalActivity→restingHR fitness edge (training lowers resting HR ⇒ slower elastin fatigue) — neither wired yet, so restingHR currently affects nothing but the (still-unwired) elastin-fatigue node."
      },
      {
        "id": "leanMassIndex",
        "label": "Appendicular lean mass index",
        "unit": "kg/m^2",
        "sd": 1.1,
        "baseline": {
          "male": [
            [
              25,
              8.5
            ],
            [
              85,
              8.5
            ]
          ],
          "female": [
            [
              25,
              6.4
            ],
            [
              85,
              6.4
            ]
          ]
        },
        "provenance": "EMERGENT body-composition observable (DEXA-anchorable). Appendicular lean mass index = appendicular lean mass / height^2 (kg/m^2), the EWGSOP2/FNIH sarcopenia quantity. Baseline is FLAT at the young-healthy value (male 8.5, female 6.4; sd 1.1 shared) — NO age-pegging. Baseline values are directionally consistent with published NHANES-derived young-adult ALMI norms (NHANES DXA 1999-2004 reference cohort males ~8-9, females ~6-7 kg/m^2; EWGSOP2 cutoffs of <7.0 M / <5.5 F are diagnostic thresholds derived for older adults, not young-adult norms). FEMALE SD NOTE (2026-06-16, validator): the shared sd 1.1 implies a 1-sd-below-mean young female has ALMI 5.3 kg/m^2, which is already below the EWGSOP2 cutoff 5.5 — meaning ~16% of young females would statistically be 'sarcopenic' at baseline. This is NOT physiologically correct; it reflects that the EWGSOP2 cutoff was derived from an older-adult population where the distribution shifted left, not a young-healthy reference. The sd and female baseline may need population-specific calibration in a future pass. The age-DECLINE EMERGES from the `muscle-balance` state node via a stateAugment, exactly mirroring the HbA1c/beta-cell-decline pattern. Cruz-Jentoft 2019 EWGSOP2 (doi:10.1093/ageing/afy169) target: 1-2%/yr mass loss after 50; current engine delivers ~0.28-0.36%/yr (see muscle-balance provenance for the calibration gap). EWGSOP2 sarcopenia cutpoints ALMI <7.0 (M)/<5.5 (F) sit ~1.5/0.9 below the young baseline. DEXA-anchorable as an offsettable mediator (Labs/timeline biomarker:leanMassIndex). Drives falls mortality via leanMassIndex->falls (mediatorLogLinear, replacing the old age-sigmoid sarcopenia->falls). Added 2026-06-16 (bodycomp/sarcopenia build; see model/bodycomp-dexa-sarcopenia-design.md)."
      }
    ],
    "treatments": [
      {
        "id": "statin",
        "label": "Statin",
        "to": "LDL",
        "form": "pctReduction",
        "amount": 0.4,
        "floor": 50,
        "provenance": "Statin lowers LDL ~40% (high-intensity ~50%); modeled as multiplicative reduction with an absolute floor. amount in [0,1]; floor mg/dL."
      },
      {
        "id": "antihypertensive",
        "label": "Antihypertensive",
        "to": "systolicBP",
        "form": "absShift",
        "amount": -15,
        "provenance": "Antihypertensive lowers SBP ~-15 mmHg; modeled as additive downshift (per fully-dosed). amount mmHg."
      },
      {
        "id": "metformin",
        "label": "Metformin",
        "to": "HbA1c",
        "form": "absShift",
        "amount": -0.8,
        "provenance": "Metformin lowers HbA1c ~-0.8% (monotherapy); modeled as additive downshift. amount %. SCOPE: this is metformin's modeled-relevant lever (its glycemic effect). Metformin is ~weight-neutral and its hard human aging/CV benefit is weak/contested (UKPDS overweight subgroup; the TAME aging RCT has not read out), so an HbA1c downshift is the defensible single-lever stand-in. GLP-1 RAs were UN-BUNDLED from this entry on 2026-06-16 into the separate 'glp1' weight lever — their dominant aging-relevant effect is weight loss (the BMI cascade), not glycemia; see the glp1 treatment."
      },
      {
        "id": "glp1",
        "label": "GLP-1 RA (semaglutide)",
        "effects": [
          {
            "to": "BMI",
            "form": "absShift",
            "amount": -3.0
          },
          {
            "to": "leanMassIndex",
            "form": "absShift",
            "amount": -0.30
          }
        ],
        "provenance": "GLP-1 receptor agonist (semaglutide 2.4mg). TWO effects (2026-06-16 v1+v1.1 bodycomp build): (1) WEIGHT lever — BMI absShift -3.0 (~-10% body weight at baseline BMI ~30 / ref height 1.7m; SELECT ~9-10% Lincoff 2023 n=17,604, STEP-1 ~14.9% Wilding 2021), flowing through the full BMI cascade (BMI->SBP->CVD, BMI->CVD residual, BMI->allcause J-curve, BMI->HbA1c so glycemia EMERGES from weight ~-0.075% at dBMI -3, BMI->restingHR). Treatments attach to MEDIATORS (calorieBalance is an exogenous input), so applied directly on BMI at the trial-OBSERVED steady-state magnitude. NOTE fixed-absolute-BMI approximates a %-of-bodyweight effect (=-10% at BMI 30; ~-12% at 25, ~-8.6% at 35); tirzepatide ~20-22% would be ~-6.5. (2) SARCOPENIA PARADOX — leanMassIndex absShift -0.30: CALIBRATED (2026-06-16, graph-node-validator). Arithmetic verified: Locatelli 2024 (doi:10.2337/dci23-0100; PMID 38687506; Diabetes Care, review): ~10% of total GLP-1 weight loss is lean mass, ~6 kg absolute out of ~15-24% body weight. For the modeled -3.0 BMI at ref height 1.7m: Δweight = -3.0 × 1.7² = -8.67 kg; 10% lean fraction → Δlean = -0.867 kg; ΔALMI = -0.867/1.7² = -0.300 kg/m². Arithmetic verified exactly. Resistance training (physicalActivity) opposes it via muscle-balance. WEIGHT-INDEPENDENT CV RESIDUAL — REMOVED 2026-06-16 (was causeEffects cardiovascular pctReduction 0.05). The graph-node-validator + Codex (gpt-5.5) review found a STRUCTURAL DOUBLE-COUNT: the BMI cascade (calibrated to OBSERVATIONAL Lu 2014 BMI→CHD) already delivers ~16-20% CV-hazard reduction for the -3.0 BMI lever (engine-measured across ages 50-80), which ≈ the SELECT total MACE RRR (HR 0.80, PMID 37952131) ON ITS OWN — so any added weight-independent term overshoots. SELECT adiposity-mediation (PMID 41138739, Lincoff group 2025) reports only ~33% of the MACE benefit is weight-mediated (~67% weight-INDEPENDENT), implying the observational BMI cascade OVER-credits drug-induced weight loss's CV benefit (consistent with Look AHEAD's null MACE). The correct fix (a 'trialMediationReplacement' that replaces the treatment's OBSERVATIONAL weight-mediated CV slice with the trial-decomposed value, then adds the honest weight-independent arm; net correction = totalHR^dose / m_obs, dose-scaled ⇒ ×1 at baseline) is DEFERRED: implementation revealed the treatment's ΔBMI reaches cardiovascular through ≥4 ENTANGLED paths (direct BMI→CVD residual, BMI→SBP→CVD, the BMI→allcause J-curve bracket, BMI→HbA1c→CVD), so isolating m_obs non-fragilely needs counterfactual-evaluation infrastructure, not a closed form (a 2-path closed form gives ~10% vs the measured ~20% — wrong). INTERIM STATE (option b, Codex-blessed as acceptable): GLP-1's CV benefit is carried by the observational BMI cascade ≈ SELECT total; the model thus implicitly treats GLP-1's CV benefit as ~fully weight-mediated (the SHAPE is wrong — a future equal-weight-loss intervention would look CV-equivalent), pending the trialMediationReplacement build. The general engine capability (multi-target treatment.effects, treatment→cause causeEffects with pctReduction) is built + tested and awaits the mediation-replacement form. #gap/needs-mediation-decomposition (BMI-cascade weight-mediated slice vs weight-independent arm); see model/bodycomp-dexa-sarcopenia-design.md."
      }
    ],
    "operatorPresets": [
      {
        "id": "dq-one-off",
        "label": "D+Q one-off senolytic campaign",
        "kind": "senolytic-pulse",
        "target": "cellular-senescence",
        "ageSource": "currentAge",
        "killFractionScenarios": {
          "conservative": 0.17,
          "central": 0.35,
          "optimistic": 0.62
        },
        "defaultKillScenario": "central",
        "reboundHalfLifeScenariosYears": {
          "short": 0.25,
          "central": 0.5,
          "long": 1.5
        },
        "defaultReboundScenario": "central",
        "provenance": "EXPLORATORY HUMAN TARGET-ENGAGEMENT SCENARIO (2026-06-13; rebound re-anchored 2026-06-24), not a clinical outcome prediction. Kill envelope is anchored to Hickson 2019 Day-14 human biopsy changes after one 3-day D+Q course: adipose p21+ cells -17%, p16+ cells -35%, SA-beta-gal+ cells -62%; skin p16+ -20%, p21+ -31% (n=9, open-label, uncontrolled; marker x tissue spread, not a CI). The annual-grid operator applies one campaign at currentAge. Rebound half-lives 0.25/0.5/1.5 yr (SR integration §11): re-anchored from the prior 1/3/8 yr to a quarter-power allometric scaling of Karin 2019 old-mouse ~25 d senescent-cell turnover (25 d·(70/0.0275)^0.25 ≈ 0.49 yr) — consistent with the months-scale clinical hit-and-run cadence; still NOT a fitted longitudinal human recovery constant. The pulse rebound is kept SEPARATE from the endogenous SR removal (gross-production refill ≠ net relaxation; §11). Existing downstream edges propagate reduced chronic senescence/SASP through inflammation, arterial stiffness, and cause burdens. No DIRECT senescence-to-cancer term is added (and no speculative direct cancer penalty); an INDIRECT cancer benefit nonetheless flows through the live cellular-senescence->chronic-inflammation->cancer coupling, so the scenario does lower modeled cancer burden via the inflammation path. Endogenous saturating-removal clearance is now ACTIVE (form=saturating; see the cellular-senescence node) and acts on the endogenous deviation, separate from this pulse rebound. #gap/needs-rebound-time-constant #gap/needs-controlled-kill-fraction #gap/ihc-not-perfectly-senescence-specific"
      },
      {
        "id": "fisetin-one-off",
        "label": "Fisetin one-off senolytic campaign",
        "kind": "senolytic-pulse",
        "target": "cellular-senescence",
        "ageSource": "currentAge",
        "killFractionScenarios": { "conservative": 0.05, "central": 0.15, "optimistic": 0.30 },
        "defaultKillScenario": "central",
        "reboundHalfLifeScenariosYears": { "short": 0.25, "central": 0.5, "long": 1.5 },
        "defaultReboundScenario": "central",
        "provenance": "BEST-GUESS EXPLORATORY (2026-06-24, SR §11), not a clinical prediction. Kill envelope ~half of D+Q. SCAP target: clears p16+ T-cell / NK / endothelial / MSC senescent cells but SPARES macrophages & dendritic cells (Yousefzadeh 2018) => NOT pan-clearing. Human evidence ex-vivo-only (no hard-endpoint RCT result yet); oral bioavailability <5% => real supplement doses likely at the LOW end. ** COMBINATION CAVEAT: the single LUMPED senescence node cannot represent SCAP cell-type selectivity, the spared macrophage/DC sub-pool, or complementarity vs redundancy when stacked with other senolytics — co-active presets ADD on one pool (optimistic upper bound). Cell-type sub-pool disaggregation is deferred (clearance-state-design.md Q6). ** provenance: placeholder. #gap/needs-human-kill-fraction #gap/clearance-celltype"
      },
      {
        "id": "quercetin-mono-one-off",
        "label": "Quercetin (monotherapy) one-off",
        "kind": "senolytic-pulse",
        "target": "cellular-senescence",
        "ageSource": "currentAge",
        "killFractionScenarios": { "conservative": 0.03, "central": 0.08, "optimistic": 0.15 },
        "defaultKillScenario": "central",
        "reboundHalfLifeScenariosYears": { "short": 0.25, "central": 0.5, "long": 1.5 },
        "defaultReboundScenario": "central",
        "provenance": "BEST-GUESS EXPLORATORY (2026-06-24, SR §11), not a clinical prediction. WEAKEST envelope (~1/4 of D+Q). DISTINCT from dq-one-off: this is quercetin MONOTHERAPY — the human senescent-cell-clearance evidence is ALL D+Q; crediting it to quercetin alone is an explicit wiki error. SCAP target: endothelial / HUVEC only (BCL-xL / EFNB1 in vitro ~50% @10 uM); NO human monotherapy evidence; low bioavailability. ** COMBINATION CAVEAT: same single-lumped-S limitation as fisetin — heavily overlaps the endothelial sub-pool fisetin/navitoclax also hit, so stacking it is largely REDUNDANT biologically, but the lumped model would still ADD it. ** provenance: placeholder. #gap/clearance-celltype"
      },
      {
        "id": "pcc1-one-off",
        "label": "Procyanidin C1 (grape-seed) one-off",
        "kind": "senolytic-pulse",
        "target": "cellular-senescence",
        "ageSource": "currentAge",
        "killFractionScenarios": { "conservative": 0.05, "central": 0.12, "optimistic": 0.25 },
        "defaultKillScenario": "central",
        "reboundHalfLifeScenariosYears": { "short": 0.25, "central": 0.5, "long": 1.5 },
        "defaultReboundScenario": "central",
        "provenance": "BEST-GUESS PLACEHOLDER (2026-06-24), weaker-anchored than fisetin — PRECLINICAL only (Xu 2021 Nat Metab; no human senolytic data). Central ~0.12 (between quercetin-mono and fisetin): has aged-mouse LIFESPAN data (+9.4% whole-life) which quercetin-mono lacks, but senolytic dose is >=50 uM in vitro (>> grape-seed supplement exposure). SCAP target: senescent STROMAL / mesenchymal cells; mechanism NOXA/PUMA -> ROS -> mitochondrial apoptosis is broad (NOT SCAP-network-restricted like the flavonoids), so its coverage may overlap fisetin's MSC pool AND extend beyond it — UNRESOLVED. ** COMBINATION CAVEAT: single-lumped-S can't represent this; stacking ADDS. ** provenance: placeholder. #gap/clearance-celltype #gap/needs-human-data"
      },
      {
        "id": "piperlongumine-one-off",
        "label": "Piperlongumine (long-pepper) one-off",
        "kind": "senolytic-pulse",
        "target": "cellular-senescence",
        "ageSource": "currentAge",
        "killFractionScenarios": { "conservative": 0.03, "central": 0.10, "optimistic": 0.20 },
        "defaultKillScenario": "central",
        "reboundHalfLifeScenariosYears": { "short": 0.25, "central": 0.5, "long": 1.5 },
        "defaultReboundScenario": "central",
        "provenance": "BEST-GUESS PLACEHOLDER (2026-06-24), weakest-anchored — PRECLINICAL only (Wang 2016 Aging; no human data). Central ~0.10: in-vitro selectivity only ~2.5-3.3x (EC50 ~20 uM normal vs ~6-8 uM senescent) and frequently PARTIAL alone (navitoclax-synergistic). SCAP target: tested on IR / replicative / Ras-induced senescent fibroblasts; mechanism = OXR1 -> chronic antioxidant-defense erosion -> ROS-dependent senolysis (broad across senescence inducers). ** COMBINATION CAVEAT: single-lumped-S can't represent overlap; its broad ROS mechanism likely overlaps the others' pools substantially, so additive stacking OVER-credits it. ** provenance: placeholder. #gap/clearance-celltype #gap/needs-human-data"
      }
    ],
    "constants": {
      "heightRefM": 1.7,
      "weightAsymptoteFraction": 0.55,
      "note": "heightRefM: reference height (m) to convert dynamic weight change to BMI (ΔBMI = Δkg / h^2). weightAsymptoteFraction: long-run fraction of the static-3500-rule weight change actually realized (Hall 2013 ~40-50% overstatement -> ~0.55 realized)."
    },
    "stiffnessToSBP": {
      "betaPerUnit": {
        "male": 37.6,
        "female": 52.1
      },
      "from": "arterial-stiffness",
      "to": "systolicBP",
      "excludeDriver": "ecm-crosslink",
      "excludeWeight": 0.3,
      "provenance": "A4 (2026-06-10): the BP-MEDIATED slice of stiffness->CVD. SBP gets += betaPerUnit * (NON-GLYCEMIC stiffness deviation) where non-glycemic = (stiffness - stiffness_pop) - excludeWeight*(crosslink - crosslink_pop). betaPerUnit calibrated as the pop SBP age-rise (119->154 M / 110->159 F) over the pop stiffness rise (0->~1) => ~37.6 mmHg/unit (M) / 52.1 (F). DEVIATION form: =0 at the pop stiffness trajectory, so the SBP baseline + the Lewington SBP->CVD calibration (shared by BMI/Lu + sodium) are PRESERVED EXACTLY; only stiffness deviations move SBP. Crosslink EXCLUDED to avoid re-double-counting glycemia (its CVD is already in the decomposed HbA1c->CVD + the B3 direct stiffness->CVD edge). COMPLEMENTS the B3 direct (BP-independent, Mitchell-adjusted) edge: B3 + A4 = the total stiffness CVD risk, split into the BP-independent and BP-mediated slices (Mitchell 2010 separated them). So a senolytic / low-resting-HR person now ALSO lowers SBP (and CVD via Lewington), on top of the B3 slice. NOT a full de-age-pegging of SBP (the old systolicBP baseline curve REMAINS as the anchor; replacing it with a flat residual needs re-referencing the SBP->CVD deviation form — deferred). The reverse SBP->elastin (pressure-amplitude) coupling stays deferred (it would re-create the B3-direct double-count for SBP-driven stiffness). #gap: glycemic stiffening's SBP-display under-representation (crosslink excluded) is an illustrative simplification. ILLUSTRATIVE beta; SOLID-direction."
    },
    "stateNodesNote": "UNIFORM NODE SCHEMA (A1, 2026-06-10; migration step toward one causal graph — see model/age-hardcoding-audit.md § Implementation roadmap). A state node accumulates over the age grid: value(age) = initial + ∫ rate·dt, where rate = Σ terms. Each term is `linear` (coeff·drivers[0]) or `product` (coeff·∏drivers); a driver is a MEDIATOR id or another STATE-NODE id (topo-ordered, drivers before dependents), read at each age — so accumulation is INPUT-driven, NOT age-driven, and the age-correlation EMERGES from the integral. `class`: damage | physiology | pathology. `units`: physical | normalized. This generalises the former ad-hoc `stocks`. Algebraic (non-integrated) physiology nodes + terminal-hazard (pathology) mappings are added in later A/C steps; A1 covers integrated state nodes (ecm-crosslink; elastin-fatigue next).",
    "stateNodes": [
      {
        "id": "ecm-crosslink",
        "class": "damage",
        "units": "normalized",
        "label": "ECM collagen crosslinks (glucosepane/AGE)",
        "initial": 0,
        "rate": {
          "terms": [
            {
              "op": "linear",
              "drivers": [
                "HbA1c"
              ],
              "coeff": 0.00293
            }
          ]
        },
        "provenance": "RATE-INTEGRATED state node (2026-06-10; migrated to the uniform schema A1) — first node of the age-pegging migration (model/age-hardcoding-audit.md). Glucosepane is the dominant ECM collagen crosslink; formation is mass-action glycation, so dCrosslink/dt = coeff · glycemia, with HbA1c as the mean-glucose proxy (one `linear` term, coeff 0.00293). Integrated over the age grid: crosslink(age) = initial + ∫ coeff · HbA1c dt (driver value INCLUDES inputs/offsets, so elevated glycemia accelerates accumulation). coeff 0.00293 calibrated so the POPULATION trajectory (male baseline HbA1c) reaches ~1.0 (normalized) at age 80 from 0 at age 20; a diabetic (HbA1c ~9) accumulates ~1.7x faster. AGE IS NOT AN INPUT — the age-correlation EMERGES from the integral. NOT YET wired to arterial-stiffness/SBP/mortality (A3/A4: crosslink + elastin-fatigue + senescence -> arterial-stiffness -> SBP residual-split). Illustrative magnitude; SOLID-direction (glucosepane accumulates with age and markedly in diabetes)."
      },
      {
        "id": "elastin-fatigue",
        "class": "damage",
        "units": "normalized",
        "label": "Elastin fiber fatigue fragmentation",
        "initial": 0,
        "rate": {
          "terms": [
            {
              "op": "linear",
              "drivers": [
                "restingHR"
              ],
              "coeff": 0.0002564
            }
          ]
        },
        "provenance": "RATE-INTEGRATED state node (2026-06-10; A2, simplified at B3). Vascular elastin has ~zero turnover in adult humans, so age-related fragmentation is CUMULATIVE PULSATILE MECHANICAL FATIGUE, not chronological age (phenotypes/arterial-stiffening.md; Sun 2014). FULL mechanism: dFatigue/dt ∝ cardiac-cycles × pressure-amplitude = restingHR × pulse-pressure. **B3 decoupling (2026-06-10):** the pulse-pressure (SBP) driver was REMOVED for now — leaving dFatigue/dt = coeff · restingHR (the cyclic-COUNT part) — because the SBP-driven slice made SBP→elastin→stiffness→CVD double-count the Lewington SBP→CVD hub (which is shared by BMI/Lu + sodium edges, so decomposing it cascades). The pressure-amplitude term + the bidirectional SBP↔stiffness coupling are DEFERRED to A4 (the SBP-residual-split), which reconciles them with Lewington/Lu via mediation-decomposition. #gap/deferred-A4. So today elastin varies only via resting HR (a low-HR / fit person fatigues elastin slower — a clean intervention path with no existing HR→CVD edge to double-count). AGE IS NOT AN INPUT — the age-correlation EMERGES. coeff 2.564e-4 calibrated so the POPULATION male trajectory reaches ~1.0 (normalized) at age 80 (HR 65 flat). Wired downstream: -> arterial-stiffness (A3) -> cardiovascular (B3). Illustrative; SOLID-direction (elastin fatigue is the dominant structural stiffening driver)."
      },
      {
        "id": "beta-cell-decline",
        "class": "physiology",
        "units": "normalized",
        "label": "Pancreatic β-cell functional decline",
        "initial": 0,
        "rate": {
          "terms": [
            {
              "op": "product",
              "drivers": [],
              "coeff": 0.016667
            },
            {
              "op": "linear",
              "drivers": [
                {
                  "id": "BMI",
                  "minus": 25,
                  "floor": 0
                }
              ],
              "coeff": 0
            },
            {
              "op": "linear",
              "drivers": [
                {
                  "id": "HbA1c",
                  "minus": 6.5,
                  "floor": 0,
                  "cap": 3
                }
              ],
              "coeff": 0.012
            }
          ]
        },
        "provenance": "RATE-INTEGRATED state node (2026-06-10; β-cell→HbA1c vertical, Increment 2). β-cell secretory reserve declines cumulatively with age; the loss is what un-pins fasting/postprandial glycemia (UKPDS: ~4%/yr functional β-cell loss in T2D; lesser in normoglycemia). Modeled as a normalized [0,1+] decline integrating THREE rate terms: (1) an INTRINSIC attrition constant 0.016667/yr (the `product` term with empty drivers = constant) — the unmechanized age-residual, calibrated so ∫ from age 20 reaches ~1.0 (normalized) at age 80, reproducing the population HbA1c rise 5.3→5.9 via the stateAugment (coeff 0.6 M / 0.5 F); (2) a LIPOTOXICITY term ∝ max(0, BMI−25) — adiposity accelerates β-cell stress (coeff 0, DEFERRED: a secondary accelerator, NOT part of the core spiral loop; activating it would re-shape the population HbA1c curve via population BMI>25 and require re-calibrating the intrinsic rate — deferred to keep Increment 3 clean); (3) a GLUCOTOXICITY feedback ∝ min(3, max(0, HbA1c−6.5)) — chronic hyperglycemia is itself β-cell-toxic, the engine of the DIABETES SPIRAL: **ACTIVATED in Increment 3 (2026-06-10), coeff 0.012**. The loop: β-cell-decline ↑ → HbA1c ↑ (stateAugment) → glucotox ↑ → β-cell-decline ↑, resolved per-age across the forward-Euler march (the spiral substrate of Increment 1). The driver is CAPPED at 3 (HbA1c 9.5) so the feedback growth becomes linear (not exponential) past the cap — BOUNDS the spiral to a clinically-plausible ceiling (a poorly-controlled diabetic anchored ~8 at 50 progresses to ~9.1 @80 / ~10.0 @110, UKPDS-plausible ~0.03%/yr; un-capped it ran to 13–17%). Floors at 6.5% (glucotox) / 25 (lipotox) keep both terms EXACTLY 0 in the normoglycemic/lean population (population HbA1c maxes at 6.4 @130 < 6.5) so the population HbA1c baseline — and thus baseline LE — is preserved EXACTLY (verified: POP LE 75.8147 identical with/without the spiral); they only bite for diabetic/obese DEVIATIONS. AGE IS NOT AN INPUT — the rise EMERGES from the integral. Drives HbA1c (stateAugment), which drives crosslink=∫HbA1c → arterial-stiffness → CVD, plus the direct HbA1c→CVD/cancer/dementia edges; so the spiral worsens the diabetic's OLD-AGE glycemia + stiffness + CVD (LE −0.031 on top of the baseline-elevation hit). **Anchor caveat:** a lab-anchored HbA1c is a LIFELONG offset (model semantics for all mediators), so glucotox accumulates retroactively from age 20 — an anchored 8 reads ~8.3 at the current age (mild over-shoot), and the spiral then projects forward. The held-forward anchor no longer pins exactly once the spiral is active; this is the realistic 'glycemia progresses' behavior, documented rather than iterated-away. Illustrative magnitudes; SOLID-direction (β-cell decline → glycemia → micro/macrovascular complications; glucotoxicity is an established T2D mechanism)."
      },
      {
        "id": "arterial-stiffness",
        "class": "physiology",
        "units": "normalized",
        "label": "Large-artery stiffness (cfPWV proxy)",
        "value": {
          "terms": [
            {
              "op": "linear",
              "drivers": [
                "elastin-fatigue"
              ],
              "coeff": 0.5
            },
            {
              "op": "linear",
              "drivers": [
                "ecm-crosslink"
              ],
              "coeff": 0.3
            },
            {
              "op": "linear",
              "drivers": [
                "cellular-senescence"
              ],
              "coeff": 0.8
            }
          ]
        },
        "provenance": "ALGEBRAIC physiology node (2026-06-10; A3 + B0). value(age) = Σ contributions AT each age, NOT ∫rate·dt: stiffness is the CURRENT consequence of currently-accumulated damage, and its inputs are themselves time-integrals / burdens. cfPWV proxy = 0.50·elastin-fatigue + 0.30·ecm-crosslink + 0.80·cellular-senescence; weights ILLUSTRATIVE and ELASTIN-DOMINANT (elastin fragmentation is the dominant structural driver, AGE crosslinking secondary — phenotypes/arterial-stiffening.md), normalized so the population male trajectory ~1.0 at age 80, with the senescence term carrying ~20% of stiffness@80 (Clayton 2023: senolytics reverse ~20% aortic PWV in mice). **B0 (2026-06-10) cleared the deferred senescence term**: `cellular-senescence` is a NODE-layer burden (B), now readable from the state-node phase because simulate() passes node burdens into mediators() (the node↔state-node seam dismantled for the node→state-node direction). So a senescence-FREEZE intervention now lowers arterial stiffness — the first node→state-node mechanistic edge. NOT YET wired to SBP/mortality (that is Phase B3: stiffness → SBP/CVD, with mediation-decomposition of the redundant direct edges). Illustrative; SOLID-direction."
      },
      {
        "id": "sinoatrial-node-reserve",
        "class": "damage",
        "units": "normalized",
        "label": "Sinoatrial-node reserve",
        "provenance": "stub",
        "note": "STUB (planned, not yet modeled; engine-inert, rendered greyed). The sinoatrial node is the heart's pacemaker; its functional reserve declines cumulatively with age via pacemaker-cell loss + I_f/HCN4 funny-current substrate degradation (per the verified resting-heart-rate biomarker page). Intended as a rate-integrated state node (integral of an SA-node-aging rate over time) that GATES the physicalActivity->restingHR training coefficient (BLOCKING, not countering: training bradycardia is blunted when reserve is low, NOT because age blocks it) and shifts the intrinsic resting rate. Has no rate/value yet by design. See age-hardcoding-audit.md and the sinoatrial-node-reserve->restingHR stub edge."
      },
      {
        "id": "muscle-balance",
        "class": "physiology",
        "units": "physical",
        "label": "Muscle balance (lean-mass reserve)",
        "initial": 0,
        "floor": -2.5,
        "cap": 1.5,
        "rate": {
          "terms": [
            {
              "op": "linear",
              "coeff": -0.0345,
              "drivers": [
                "chronic-inflammation"
              ]
            },
            {
              "op": "linear",
              "coeff": -0.0345,
              "drivers": [
                "stem-cell-exhaustion"
              ]
            },
            {
              "op": "linear",
              "coeff": 0.0000293,
              "drivers": [
                {
                  "input": "physicalActivity"
                }
              ]
            }
          ]
        },
        "provenance": "placeholder. SIGNED, BOUNDED lean-mass reserve in ALMI kg/m^2 deviation units (+ = training surplus, - = atrophy deficit), augmenting leanMassIndex 1:1. The age-DECLINE of ALMI EMERGES here (no age-pegging): catabolic terms read the chronic-inflammation + stem-cell-exhaustion node burdens (the inflammaging + satellite-cell-exhaustion mechanism of atrophy — these were the `coupling -> sarcopenia` edges, now re-homed onto the integrated muscle state; the old sarcopenia node keeps those incoming couplings for DISPLAY only, its mortality edge moved to leanMassIndex->falls). Activity term is a DEVIATION driver (input physicalActivity - popMean 150), so it is 0 at the population mean (baseline-invariant) and bidirectional: training (>150 min/wk) builds/preserves muscle, sedentary (<150) accelerates loss — the integrated dynamic the user requested (slow stock, not an instantaneous algebraic snap). Bounded to [-2.5, +1.5] kg/m^2: the floor caps severe sarcopenia (ALMI 8.5->6.0 M), the +1.5 ceiling caps trained hypertrophy (Codex no-runaway requirement). CALIBRATION GAP (2026-06-16, graph-node-validator): with the current coefficients (catabolic -0.0345 × chronic-inflammation, -0.0345 × stem-cell-exhaustion; augment coeff 0.62 M / 0.42 F), the emergent ALMI loss rate post-50 is ~0.28-0.36%/yr (engine-verified at age 65-70 and 70-80). This is 3-5x BELOW the Cruz-Jentoft 2019 EWGSOP2 target of 1-2%/yr (doi:10.1093/ageing/afy169: 'loss of leg muscle mass (1-2% per year)' after 50, citing Goodpaster 2006 Health ABC). Total decline by age 85 is ~10.4% M / ~9.4% F (engine-verified: 8.5→7.6 / 6.4→5.8), which is the design target but over a 60-year span rather than the 35-year post-50 window Cruz-Jentoft quotes. CONSEQUENCE: the activity→falls channel under-carries the RCT fall-prevention signal — at 300 min/wk (2× guideline) the falls hazard reduction is only ~5.6% (engine-verified) vs the ~20-30% expected from exercise→fall-prevention RCTs. To hit the 1-2%/yr target the catabolic coefficients would need to increase ~4x (to ~0.12-0.14), but that would push ALMI into the −2.5 floor prematurely for high-burden individuals; alternatively the intrinsicAtrophyBase can be added (no mechanism term). RESOLUTION: requires a dedicated calibration pass with a physiological cross-check against Locatelli 2024 resistance-training recovery (~3 kg lean = ~0.6 ALMI units at 1.7m height) as the activity-channel anchor. #gap/needs-calibration (rate under-delivers 1-2%/yr Cruz-Jentoft target). Added 2026-06-16 (model/bodycomp-dexa-sarcopenia-design.md)."
      }
    ],
    "stateAugmentsNote": "STATE→MEDIATOR AUGMENTS (2026-06-10; β-cell→HbA1c vertical). Each {fromState, mediator, coeff} injects coeff·stateValue INTO a mediator mid-march (per-age, AFTER the mediator phase + offsets, BEFORE state rates advance), so a state node's accumulated value can re-shape a mediator trajectory that the SAME march's downstream integrals then read. coeff is a number or a {male,female} map. This is the substrate that lets an emergent damage variable un-pin a formerly age-tabled mediator: β-cell-decline → HbA1c replaces the HbA1c age-table with a flat 5.3 baseline + the emergent rise. Anchoring stays exact in Increment 2 because the augment is input-independent (constant base rate), so computeOffsets' post-augment prediction cancels; Increment 3 (glucotox feedback makes the augment input-dependent) revisits anchor semantics.",
    "causeEdgesNote": "Stage 2 (2026-06-08): CLEAN non-double-counting mediator->cause and direct exogenous->cause multipliers. cause_hazard_c = [v0.3 hazard] * Prod_edges mult_edge; mult=1 at population-average inputs so v0.3 (LE 75.31 M / 80.37 F) reproduces exactly. mediatorThresholdRamp uses a RATIO-to-baseline so mult=1 at the per-age baseline HbA1c (which exceeds the 5.7 threshold at 60+). Stage 3a (2026-06-08) ADDED two clean cause edges, both =1 at default inputs: (1) smoking->cardiovascular (smokingCategorical, normalized, never 0.833/former 1.082/current 1.582) and (2) physicalActivity->allcause (activityFitness, target 'allcause', exp(-0.139*dMETs), applied to the WHOLE intrinsic bracket at the frailty-multiplier site, weight/glucose-independent fitness channel). Stage 3b (2026-06-08) ADDED the BMI/adiposity edges MECHANISTICALLY (Lu 2014 mediation decomposition, no double-counting), all =1 at the per-age baseline BMI so v0.3 still reproduces exactly: (1) BMI->systolicBP mediatorEdge (mediatorLinear, +0.72 mmHg/+1 kg/m2, the DOMINANT mediated path, flowing through SBP->CVD); (2) BMI->cardiovascular causeEdge (bmiThresholdRatio, upper-arm only, beta 0.022819, the UNMEDIATED CV residual; combined with the SBP path => Lu 1.27 per +5 BMI, log-HR split SBP 52.3% / residual 47.7%); (3) BMI->allcause J-curve (bmiJcurve, upper betaUpper ln1.09/5 non-CV obesity + lower betaLower ln1.51/3.5 underweight-frailty, nadir [20,25], whole-bracket). OMITTED in 3b: BMI->LDL (null per MR), continuous BMI->glucose (folded into the residual). DEFERRED: alcohol->all-cause(MR) bundle; B2 latent fixes."
  }
}
```

---

## Evidence citations (anchored values)

Shapes/directions tagged `anchored` or `anchored-direction` above rest on these primary/review sources (gathered during a 2026-06-08 literature pass; magnitudes still illustrative pending a full verification pass):

- **Genomic instability — linear:** Blokzijl F et al., *Nature* 2016, 538:260–264, doi:10.1038/nature19768 (~40 base-substitutions/yr in adult stem cells). Lodato MA et al., *Science* 2018, 359:555–559, doi:10.1126/science.aao4426 (linear neuronal SNV accrual).
- **Telomere attrition — linear, females longer:** Müezzinler A et al., *Ageing Res Rev* 2013, 12:509–519, doi:10.1016/j.arr.2013.01.003 (~24.7 bp/yr). Gardner M et al., *Exp Gerontol* 2014, 51:15–27, doi:10.1016/j.exger.2013.12.004 (female length offset; per-year *rate* sex difference NOT established → female encoded as lower starting burden, same slope).
- **Epigenetic clock — linear ≥20 yr, males faster:** Horvath S, *Genome Biol* 2013, 14:R115, doi:10.1186/gb-2013-14-10-r115. Horvath S et al., *Genome Biol* 2016, 17:171, doi:10.1186/s13059-016-1030-0 (sex direction).
- **Cellular senescence — exponential, no sex diff:** Liu Y et al., *Aging Cell* 2009, 8:439–448, doi:10.1111/j.1474-9726.2009.00489.x (p16^INK4a rises exponentially; sex-independent).
- **Inflammaging — rising (exact form uncertain):** Ferrucci L & Fabbri E, *Nat Rev Cardiol* 2018, 15:505–522, doi:10.1038/s41569-018-0064-2. *Sigmoid shape is a modeling choice; the review does not specify a parametric form (flagged weak).*
- **Sarcopenia — strength declines ~3%/yr after ~50:** Goodpaster BH et al., *J Gerontol A* 2006, 61:1059–1064, doi:10.1093/gerona/61.10.1059 (Health ABC). Cruz-Jentoft AJ et al. (EWGSOP2), *Age Ageing* 2019, 48:16–31, doi:10.1093/ageing/afy169.
- **Neurodegeneration — prevalence ~doubles every 5 yr after 65:** Prince M et al., *Alzheimers Dement* 2013, 9:63–75, doi:10.1016/j.jalz.2012.11.007. *Curve tuned to ~2% @65 → ~30% @85; the "every 5 yr" age-gradient is textbook-standard, slightly distinct from Prince's headline figures (flagged).*
- **Clonal hematopoiesis — steep rise >70:** Jaiswal S et al., *NEJM* 2014, 371:2488–2498, doi:10.1056/NEJMoa1408617 (9.5% @70–79 → 18.4% @90+). Genovese G et al., *NEJM* 2014, 371:2477–2487, doi:10.1056/NEJMoa1409405.
- **Cancer — power-law (∝ age^≈5):** Armitage P & Doll R, "The age distribution of cancer and a multi-stage theory of carcinogenesis," *Br J Cancer* 1954, 8(1):1–12. Age-specific mortality rates: CDC NVSR Vol. 74 No. 4, "Deaths: Final Data for 2022" (2025), Table 8 (8.0/100k @25–34 → 1,573.5 @85+; computed slope k≈5 over age 30→70). SEER Cancer Stat Facts (median age at cancer death ≈ 73).
- **Extrinsic / external-cause mortality + accident hump:** CDC NVSR Vol. 74 No. 4 (2025) Table 8 (age-specific external-cause rates, 2022); CDC NVSR Vol. 73 No. 10, "Deaths: Leading Causes for 2022" (2024) (leading-cause shares by age band). Young-adult hump structure + cause-substitution (motor-vehicle → overdose/suicide/homicide): Remund A, Camarda CG, Riffe T, "A cause-of-death decomposition of young adult excess mortality," *Demography* 2018, 55(3):957–978, doi:10.1007/s13524-018-0680-9.
- **Sex-specific cause mortality rates (v0.3 calibration):** CDC WONDER, Underlying Cause of Death 2018–2024 Single Race (dataset D158), queried by sex × ten-year age group × cause, data year 2022. Per-sex `Rmax`, normalised cause curves, residual, and external channel all derive from this. Confirms female cardiovascular-onset delay (~10 yr midlife: female CVD @60 ≈ male @50) and ~3× male external-cause excess in young adults. Suppressed cells (<10 deaths; dementia at young ages) treated as ≈0.
- **Cause-specific mortality rates (sex-combined cross-check):** CDC/NCHS, *National Vital Statistics Reports* Vol. 74 No. 4, "Deaths: Final Data for 2022" (2025), Table 8 (age-specific rates per 100,000 by cause). Used for cardiovascular (heart I00-09,I11,I13,I20-51 + stroke I60-69), dementia-combined (F01/F03/G30/G31 — the G30 Alzheimer line alone undercounts dementia mortality ~2.4×), influenza/pneumonia (J09-18) + sepsis (A40-41), all-cause totals (for the residual), and the `Rmax` per-cause age-90 anchors. Rate-based rank-1 crossover (heart overtakes cancer) confirmed at the 75–84 band.
- **Gompertz–Makeham (extrinsic = age-independent term):** Gavrilov LA & Gavrilova NS, reliability-theory / compensation-effect literature (Makeham term illustrative range 0–0.01/yr; epoch-dependent, trending toward 0 in modern low-mortality populations). US-2022 empirical background floor ≈ 1.5×10⁻⁴/yr (age-10 all-cause trough, NVSR 74-04 Table 8).
- **Mortality — Gompertz MRDT ≈ 8 yr, male excess:** Gompertz–Makeham law; reviewed in Gavrilov & Gavrilova reliability-theory literature (textbook consensus; not single-paper-anchored).
- **Mortality HRs:** CRP — Emerging Risk Factors Collaboration (Kaptoge S et al.), *Lancet* 2010, 375:132–140, doi:10.1016/S0140-6736(09)61717-7 (vascular-mortality RR 1.55/SD). Frailty index — Kojima G et al., *Age Ageing* 2018, 47:193–200, doi:10.1093/ageing/afx162 (HR 1.83); Mitnitski AB et al., *ScientificWorldJournal* 2001, 1:323–336, doi:10.1100/tsw.2001.58. CHIP — Jaiswal 2014 (all-cause HR 1.4; CHD HR 2.0); Jaiswal S et al., *NEJM* 2017, 377:111–121, doi:10.1056/NEJMoa1701719 (ASCVD HR ~1.9). Female CVD ~7–10 yr delay — Maas AHEM & Appelman YEA, *Neth Heart J* 2010, 18:598–603, doi:10.1007/s12471-010-0841-y.

## Target architecture — v1 (generative competing-hazards + unexplained remainder)

> **Decision (2026-06-08, user-directed).** v0.x is architecture **A**: each mortality-cause node's baseline trajectory is the *baked-in* normalized CDC curve, and the causal graph is **inert at baseline** — its edges only carry intervention *deviations*, with magnitudes set by illustrative ordinal-derived gains. The target is architecture **B-with-remainder**: the cause hazard is *generated* from its upstream drivers via *evidence-calibrated* edges, plus an honest unexplained remainder. This section is the spec for that rebuild.

### Form

```
H_cause(age) = Σ_drivers  contribution_d( state_d, age )        (generated from upstream, calibrated edges)
             + remainder_cause(age)                              (computed leftover, NOT fit)
remainder_cause(age) = CDC_cause(age) − Σ_drivers contribution_d( baseline state_d, age )
```

- **Baseline still reproduces CDC exactly**, because `remainder` is *defined* as the leftover after subtracting the modeled drivers' baseline contributions. The remainder is the honestly-labelled "mortality from this cause that our modeled drivers don't account for" — computed, not a fudge.
- **Edges are calibrated from external evidence** — dose-response hazard ratios, Mendelian-randomization attributable fractions, or population-attributable-fractions (PAF) — **not fit to the CDC curve.** This is what makes B identifiable: fitting gains *to* CDC is underdetermined (many gain sets reproduce one curve); pinning them from independent evidence is not. It also retires the current ordinal-derived illustrative gains for the calibrated edges.

### Biomarker-anchoring layer (the payoff)

This architecture is the prerequisite for inputting **real measured biomarker values** instead of relative % offsets. An *anchorable* node gains three fields:

1. **unit + age-reference distribution** — e.g. CRP in mg/L with mean/SD (or percentile curve) by age, so a measured value → a standardized state (z-score / percentile).
2. **calibrated input→outcome relationship** — the dose-response (HR per SD, or PAF) from that node's state to its downstream cause. This is the `contribution_d` function.
3. **sex split** where it exists (per the v0.3 sex work).

Then "my CRP is 0.8 mg/L at age 50" → z-score against the reference → calibrated edge → a *literature-grounded* change in cardiovascular hazard (not an illustrative one). Nodes with **no clinical assay or no known dose-response** (e.g. genomic-instability) stay relative-offset or illustrative and are flagged `#gap` — an honest "no anchor exists," never a fabricated number.

### Input ontology — exogenous → endogenous mediators (revised 2026-06-08, user-directed)

The first draft wrongly lumped LDL / blood-pressure / adiposity under "exposures." Those are bodily-*produced* states, not environmental inputs. Corrected to a three-tier causal hierarchy:

1. **Exogenous inputs** — behavioral/environmental factors originating *outside* the body's biology, user-set, no assay: smoking, **caloric intake** and **physical activity kept SEPARATE** (low-intake/low-activity ≠ high-intake/high-activity even at equal net balance — "fitness vs fatness": activity's mortality benefit is largely weight-independent), diet composition, alcohol, air pollution, sleep, psychosocial stress, UV. (Naming: "exogenous" ≠ the "extrinsic" accident/violence mortality channel — different axis; that channel stays separate.)
2. **Endogenous mediators** — bodily-produced, *measurable* intermediate states (clinical "risk factors"): adiposity, LDL, blood pressure, glycemia/HbA1c, plus the biomarker-anchored hallmark proxies (IGF-1 ↔ nutrient-sensing, hsCRP ↔ inflammation, GDF15, RDW). **Two-way:** each is **computed** from its upstream exogenous inputs, OR **overridden by a measured lab value** (measurement beats prediction — this is where biomarker-anchoring lives).
3. **Latent aging levers (hallmarks) + terminal causes** — as before.

Mediators chain: caloric-intake → adiposity → {glycemia, LDL, BP, inflammation} → causes. **Physical activity carries direct, adiposity-independent edges** (→ frailty/sarcopenia, → cardiorespiratory fitness/CVD, → insulin sensitivity, → inflammation), which is why it must be its own input, not folded into net balance.

This also resolves the "unmeasurable node" question: a latent node with no clinical assay (e.g. genomic-instability) still carries a **dimensionless latent state** that propagates downstream — "no assay" blocks absolute-value *input*, not the node's existence or perturbability. The **"genomic-instability pill"** is a negative %-perturbation on that latent state; a smoker is the mirror image (sustained positive forcing).

Disciplines:
- **Route-once:** each input's effect travels one path (smoking → cancer as a direct calibrated PAF **OR** via the genomic-instability latent lever, never both for the *hazard*; the latent perturbation may still drive the cascade *visualization* but must not add hazard).
- **Fan-out:** a single mediator feeds multiple causes with cause-specific weights (LDL/BP/diabetes/smoking are shared between cardiovascular AND dementia AND cancer — ~17 of dementia's 45 PAF points overlap CVD).
- **Keep the accident/violence "extrinsic" mortality channel separate** from this biological-risk layer.

### Disciplines / known hazards of B

- **Double-counting.** When multiple drivers claim overlapping attributable fractions for one cause (inflammation *and* clonal-hematopoiesis both → CVD), the per-cause contributions must be normalized so they don't exceed the cause total; allocate the overlap explicitly.
- **Patchy calibration data.** Some edges have clean PAFs (LDL→CVD, smoking→CVD); many do not. Un-calibratable edges stay illustrative and labelled as such — B is applied where the evidence supports it, A-style elsewhere, with the provenance tag making the difference visible.
- **Remainder size is diagnostic.** A large remainder means our modeled drivers explain little of that cause — useful signal, not something to tune away.

### Sequencing to get there

1. **v0.3 — sex-specific rates (DONE 2026-06-08).** Flat `sexMult` deleted; per-sex CDC WONDER cause curves + residual + external in place. These become the per-sex *remainders* under B, so the work composes forward.
2. **Node fan-out audit (expanded rubric).** One agent per node gathering, for B: unit + age-reference distribution, calibrated dose-response/PAF to downstream, sex split, and curve shape/provenance. Flag every node where no anchor/calibration exists (honest `#gap`).
3. **Engine rebuild for B-with-remainder.** Generate cause hazards from calibrated upstream contributions + computed remainder; add the biomarker-input layer; retire `sexMult` and the illustrative gains on calibrated edges.

## Node-audit findings — batch 1 (2026-06-08)

First 6-node fan-out (genomic-instability, telomere-attrition, chronic-inflammation, atherosclerosis, cancer, sarcopenia). Calibration inputs for the B rebuild + structural corrections. Citations in the per-node audit transcripts.

**Calibratable edges (real dose-response / PAF):**
- chronic-inflammation → cardiovascular: hsCRP **RR 1.55/SD** vascular mortality (ERFC 2010); *causal* (CANTOS MACE HR 0.85; IL6R-MR). Biomarkers: hsCRP (mg/L, percentile curves), IL-6 (pg/mL, assay-specific). Trajectory accelerates, inflection ~50–60; female lower pre-menopause.
- LDL → cardiovascular: **RR 0.78 per mmol/L** LDL reduction (CTT 2010), MR-corroborated. (LDL is an exposure/risk-factor → exposures layer, not a current node.)
- cardiovascular explainable ceiling: INTERHEART joint PAR **~90 % M / 94 % F** → honest remainder only ~6–10 %.
- cancer modifiable PAF **~45 %** of deaths (Islami 2018; GBD 2019); smoking 28.8 %; infection 13 % global (de Martel 2020). Intrinsic/unexplained remainder band **~30–55 %** (Tomasetti-Vogelstein 66 % of *mutations* vs Wu/Hannun <30 % of *risk*).
- CHIP → CHD **HR 1.9** + clone-size dose-response (Jaiswal 2017); all-cause HR 1.4.
- frailty → all-cause mortality: frail-vs-robust **HR ~2.4** (Peng 2022); FI per 0.1 HR 1.28 (Kojima 2018); **cause-specific** (respiratory 4.9× / CV 2.6× / cancer 2.0×).

**Stay illustrative / honest #gap:**
- genomic-instability — no clinical assay (CHIP-VAF only handle); relative/%-intervention only (latent state).
- telomere-attrition — antagonistic causality (short→CAD, long→cancer); no monotonic coefficient; assay noise ≫ annual signal.
- inflammation → cancer — MR-null + CANOPY-RCT-negative → weak.
- molecular-driver → cancer PAFs — none exist (drivers are substrates, not removable risk factors).

**Structural corrections for the B rebuild:**
1. **CHIP↔inflammation double-count** — route CHIP→CVD *via* the inflammation edge (TET2→IL-1β), not as a parallel direct driver.
2. **Frailty β** — current 0.6 is mis-anchored (the "Kojima 1.83" figure is wrong; real frail-vs-robust ≈ 2.4 → β≈0.88 for a full-span deviation). Make it **cause-specific** and **sex-specific**, and wire it to avoid double-counting its own upstream (inflammation, stem-cell-exhaustion) — it's partly a mediator (GrimAge mediates 16–33 %).
3. **Cancer** — genomic-instability is the age-shape generator *and* a driver → don't enter it twice; immunosenescence→cancer is virus-enriched (transplant SIR 2.1), not uniform.
4. **CDC "heart disease" ⊋ atherosclerotic death** → scope the cardiovascular cause to ischemic.
5. **Senescence→cancer** — keep excluded (or weak/age-gated/sign-flipping); its pro-tumour SASP already flows via the inflammation edge.

**Wiki-maintenance leads (seed later via normal workflow):** `phenotypes/cancer.md` lacks a PAF layer (seed Islami 2018 / GBD 2019 / de Martel 2020 / Tomasetti-Vogelstein 2017 / Engels 2011); telomere pages missing TMRC 2017 (JAMA Oncol); Blokzijl 2016 not cited directly.

### Batches 2–3 findings (2026-06-08) — remaining 12 nodes

The full 18-node audit resolves the model into **three calibration tiers**:

**Tier C1 — calibrated terminal edges (evidence-backed mortality; the load-bearing layer):**
- inflammation → cardiovascular — hsCRP RR 1.55/SD vascular mortality (ERFC); causal (CANTOS, IL6R-MR).
- frailty → all-cause — frail-vs-robust HR ~2.4; **cause-specific** (respiratory 4.9× / CV 2.6× / cancer 2.0×) — replaces the global β.
- dementia — **Lancet Commission 2024 PAF 45 %** (14 factors, exact per-factor weights); APOE4 stratifier (OR 3.2 het / 14.9 hom); p-tau217 progression HR 7.81; remainder ~55 %.
- cancer — ~45 % modifiable PAF (smoking 28.8 %, infection 13 %); intrinsic remainder ~30–55 %.
- infection (immunosenescence) — age-gradient + vaccine counterfactual (~48 % mortality reduction).
- immunosurveillance → cancer — **virus-weighted** (NHL 7.5× / liver 11.6×; near-null non-viral), NOT a flat SIR 2.1.

**Tier C2 — measurable mediators (anchor a latent state; carry double-count caveats):**
- chronic-inflammation — hsCRP/IL-6 (cleanest driver biomarker).
- deregulated-nutrient-sensing — IGF-1 **U-shaped** (nadir ~120–160 ng/mL → model as |deviation from nadir| or split hyperfunction/frailty arms); HOMA-IR.
- mitochondrial-dysfunction — GDF15 (HR ~1.5/SD but generic ISR cytokine → shared/penalized cross-node reporter only); mtDNA-CN (node-specific but MR-null, reverse-causation).
- stem-cell-exhaustion — **RDW** (all-cause HR 1.23/SD, free on every CBC); CHIP complementary.
- loss-of-proteostasis — p-tau217/NfL, but these *are* the disease → calibrate the →neurodegeneration EDGE, not the node.
- sarcopenia/frailty — grip / gait / frailty-index clinical cut-points.

**Tier C3 — pure latent levers (no clinical assay; %-perturbation only; mortality flows downstream):**
genomic-instability (CHIP-VAF only handle) · telomere-attrition (antagonistic causality → weak) · cellular-senescence (routes via inflammation; senolytic lever) · disabled-macroautophagy (spermidine-intake handle; blood-flux proxy *inverts* sign) · altered-intercellular-communication (catch-all; proteomic-age-gap proxy) · epigenetic-alterations (clocks are a READOUT/validator, MR-null, not a driver) · dysbiosis (diet-confounded → fold into a diet exposure).

**Cross-cutting structural conclusions:**
1. The model is **mostly latent levers + a few calibrated terminal edges** — honest and evidence-consistent.
2. **Composite clocks (epigenetic, proteomic) and GDF15 are READOUTS/validators, not driver edges** — wiring them as drivers double-counts the nodes they aggregate. Use them as a **model-level validation layer** (does the simulated composite reproduce a measured GrimAge / organ-proteomic-age gap?).
3. **The exposures layer is the biggest structural win AND the home for shared risk factors.** LDL, hypertension, diabetes, smoking, obesity, inactivity, alcohol, diet drive cardiovascular AND dementia AND cancer. **Route once, fan out** to multiple causes with cause-specific weights — e.g. ~17 of dementia's 45 PAF points are the SAME exposures already feeding CVD.
4. **Double-count disciplines (named):** CHIP↔inflammation · senescence-SASP↔inflammation · stem-cell→(sarcopenia+immunosenescence+inflammation) · nutrient-sensing↔metabolic-exposures · dysbiosis↔diet · mito-GDF15↔senescence/inflammation · proteostasis-markers↔neurodegeneration-cause · dementia-exposures↔CVD-exposures.
5. **Non-monotonic / conditional edges:** IGF-1 U-shape; senescence↔mito bidirectional; immunosenescence→mortality robust only in the 85+ (age-condition); elderly low-IGF-1/low-HOMA-IR = reverse-causation frailty marker.
6. **Sex:** beyond the per-sex CDC cause curves already in v0.3, node-level sex differences are mostly `#gap` — do not invent sex multipliers (no-fudge principle).

**Realistic scope of "B".** Only ~6 edges are truly calibratable; the rest stay latent/illustrative. So B in practice = (a) the **exposures layer** (route-once, fan-out — the real win); (b) **calibrate the 6 solid terminal edges**; (c) the **structural fixes** (CHIP-via-inflammation, cause-specific frailty β, senescence→via-inflammation, IGF-1 U-shape, virus-weighted immuno→cancer, GDF15 shared reporter); (d) **biomarker-anchoring** on the C2 mediators; (e) a **clock validation layer**. Full generative-everything is not evidence-supported and should not be built.

**Wiki-maintenance leads surfaced by the fan-out:** seed a cancer-PAF layer (Islami 2018 / GBD 2019 / de Martel 2020 / Tomasetti-Vogelstein 2017 / Engels 2011); add TMRC 2017 to telomere pages; add FINRISK microbiome-mortality replication (Salosensaari 2021); add Lancet Commission 2024 to dementia; **create an `rdw-biomarker.md` page** (none exists); cite Blokzijl 2016 directly.

## B-layer parameters — exogenous → mediators → causes (2026-06-08)

Data from three research passes (citations inline). This is the build spec for the exogenous + endogenous-mediator tiers.

### Composition architecture (how the layers compose without double-counting)

All edges act on **deviations from the population mean**, layered on the existing per-sex CDC cause baselines — so at population-average inputs every deviation is 0 and the model still reproduces CDC exactly:

```
mediator(age) = baseline_{med,sex}(age)  +  Σ_x coeff_{x→med}·Δ_x  +  personal_offset
              (Δ_x = exogenous input's deviation from population-average; offset from a measured lab, percentile-held)
cause_hazard(age) = CDC_baseline_{sex}(age) · Π_med exp(β_{med→cause}·Δ_med) · Π_x exp(β_{x→cause}·Δ_x)
              (Δ_med in the edge's natural units; at baseline all Δ=0 → CDC reproduced)
```

- **Treatment as intervention:** the mediator baselines below use *untreated* strata where available; statins (LDL↓) / antihypertensives (SBP↓) / metformin (HbA1c↓) / GLP-1 RAs (BMI↓, which then cascades to SBP/HbA1c/CVD/all-cause) are interventions that push a mediator *down*.
- **Percentile-offset anchoring:** measured lab → percentile vs the untreated reference → held forward; `personal_offset = measured − emergent_prediction` (residual to current inputs).
- **Non-linear edges** use their documented form (below), not naive linear.

### Endogenous mediator baselines (UNTREATED where possible, per-sex; NHANES)

Mean by age band, M / F. Treatment-confounding is the key caveat (measured 60+ understates untreated) — use untreated/not-on-med strata; model meds as interventions.

| Mediator | 20s | 30s | 40s | 50s | 60s | 70s | 80+ | Source |
|---|---|---|---|---|---|---|---|---|
| **LDL** mg/dL | — only crude <65 vs ≥65 published — M<65 114.8 / M≥65 100.0(treated-low); F<65 114.8 / **F≥65 114.6 (overtakes M)**. Female menopausal rise ~45–55 → interpolate | | | | | | | JAMA Cardiol lipid-trends; PMC9615374; db515 |
| **SBP** (untreated-HTN / total) mmHg | M 119 / F 110 | 119/110 | M124/F122 | 124/122 | M133/F139 (F crossover) | ...untreated-HTN M154/F159 | — | NHSR-35 2001–08 |
| **BMI** kg/m² | M27.6/F28.3 | 30.3/29.9 | 30.1/30.7 | 29.8/30.3 | 29.9/30.3 | 29.2/29.8 | 27.6/28.0 | Fryar 2015–18 (≈untreated biology; right-skewed) |
| **HbA1c** % | 5.3/5.3 | 5.3/5.3 | 5.6/5.5 | 5.6/5.5 | 5.9/5.8 | 5.9/5.8 | 5.9/5.8 | Selvin 2005–10 (sexes ≈equal; rising secular trend) |

(SBP/HbA1c only 3 published bands → interpolate; LDL no fine table → interpolate the menopausal-rise/crossover pattern. SDs ≈ LDL 35, SBP 16, BMI right-skew, HbA1c right-skew.)

### Exogenous → mediator coefficients (per-unit; non-linearity noted)

| Input → mediator | Coefficient | Form | Grade | Source |
|---|---|---|---|---|
| Saturated fat → LDL | +1.3–2.1 mg/dL per 1% energy (replacement-dependent: PUFA −2.1, carb −1.3) | ~linear | SOLID | Mensink 2016/2003 |
| Soluble fiber → LDL | −2.2 mg/dL per g/day | **saturating >10 g** | SOLID | Brown 1999 |
| Dietary cholesterol → LDL | +1.9 (linear) to +4.5 mg/dL per 100 mg/day | saturating | MOD | Vincent 2019 |
| Sodium → SBP | −5.8 mmHg per −100 mmol/day | **convex; HTN −5.4 / normo −1.0; steeper older/Black** | SOLID | He 2013 |
| Exercise → HbA1c | −0.67% (T2D) | — | SOLID | Umpierre 2011 |
| Exercise → HDL | +2.5 mg/dL (+1.4 per 10 min/session) | threshold ~120 min/wk | SOLID | Kodama 2007 |
| Exercise → VO₂max | +3.8 mL/kg/min (~+16%) | — | SOLID | Huang 2005 |
| Exercise → adiposity | −1.6 kg (6–12 mo, isolated) | modest | SOLID | Thorogood 2011 |
| Caloric balance → weight | ~7700 kcal/kg static (**overstates ~40–50% long-term**; use dynamic decay) | dynamic | SOLID | Hall 2013 |
| Smoking → HDL | −5.7% (cessation +4–5 mg/dL; larger in women) | — | SOLID | Maeda 2003 |
| Smoking → hsCRP | dose: 1.13→1.87→2.32→2.05 mg/L by cig/day | dose-response | MOD | Bazzano 2003 |
| Alcohol → SBP | up to −5.5 mmHg (heavy, 50% cut) | **threshold ~2 drinks then steep** | SOLID | Roerecke 2017 |
| Alcohol → HDL | +4 mg/dL per 30 g/day | ~linear | SOLID | Rimm 1999 |

### Mediator / exogenous → cause edges (HRs; non-linearity noted)

| Edge | Effect | Form | Grade | Source |
|---|---|---|---|---|
| LDL → CVD | RR 0.78 per −1 mmol/L | log-linear | SOLID | CTT 2010 |
| **SBP → CVD + stroke** | ~2× per +20 mmHg (≥115) | **log-linear; relative slope HALVES per ~2 decades of age** | SOLID | Lewington 2002 |
| Diabetes → vascular death | HR 2.32 | — (HbA1c J/U per-unit → spline) | SOLID | ERFC 2011 |
| Diabetes → cancer death | HR 1.25 | — | SOLID | ERFC 2011 |
| Diabetes → dementia | RR 1.73 (women > men) | — | SOLID | Gudala 2013 |
| **BMI → all-cause** | HR 1.39 per +5 >25 (**M 1.51 / F 1.30**) | **J-curve, nadir 20–25**; never-smoker-corrected | SOLID | Global BMI 2016 |
| Inactivity → all-cause | any activity → HR 0.80; plateau 0.61 | **saturating** (not linear) | SOLID | Arem 2015 / Ekelund 2019 |
| PM2.5 → all-cause/CVD | ~1.06 per +10 µg/m³ | supralinear (GEMM if wide range) | SOLID* | Pope 2002 (*not line-verified → tag weak) |
| Alcohol → all-cause | OR 1.27 per +8 g/day | **MR-linear, no safe level** (NOT the confounded J-curve) | SOLID(causal) | Kassaw 2024 MR |
| Alcohol → breast/CRC/liver cancer | breast linear from 0; heavy CRC 1.44, liver 2.07 | breast no-threshold | SOLID* | Bagnardi 2015 (*per-drink not line-verified) |
| hsCRP → CVD | RR 1.55 per SD | — | SOLID | ERFC 2010 |
| Sleep → all-cause | short 1.12, long 1.30 | **U-shape; long arm = reverse-causation MARKER** | assoc-SOLID/causal-WEAK | Cappuccio 2010 |

### Direct exogenous → cause (route-once; NOT also via a latent node's hazard)
smoking → cancer (PAF 28.8%) + COPD(residual) + CVD; alcohol → liver(residual) + cancer; PM2.5 → respiratory(residual) + CVD + dementia(soft). SBP→dementia and PM2.5→dementia are CI-fragile → soft edges only.

### Provenance / gaps
- `weak`-tag (canonical but not PDF-line-verified): Pope PM2.5 per-10, Bagnardi per-drink — verify before locking.
- Sex-specific dose-response *slopes* mostly `#gap` (use shared) EXCEPT: diabetes worse in women, BMI steeper in men, smoking-cessation-HDL larger in women, sodium-BP steeper older/Black.
- Non-linearities that a monotonic model misspecifies (encode explicitly): log-linear+age-modified BP; J-curve BMI; saturating activity; MR-linear alcohol; convex sodium→BP; saturating fiber→LDL; U-shape sleep (marker); J/U glucose.

## Refinement (v1 work)

- **Sex-specific cause curves.** v0.2 uses a flat `sexMult` scalar because CDC Table 8 cause rates are sex-combined. Pulling sex-stratified cause rates (CDC WONDER) would restore real sex structure — most importantly the female cardiovascular-onset delay (currently absent) — instead of a uniform level shift.
- **Decompose the residual.** The "other causes" bucket is ~40 % of deaths in midlife. Modelling COPD, diabetes, kidney, and liver as their own (lifestyle-linked) causes would shrink it and surface the named-cause crossover more sharply.
- **Coupling calibration.** Gains are mechanical from ordinal strength (`couple = 1`). Upstream tier-1 interventions therefore give modest ΔLE (multi-hop attenuation). If empirical intervention-epistasis suggests stronger cascades, raise `couple` or specific gains.
- **Verification pass.** Promote `ordinal-default` curves and the illustrative `β_frail`/`sexMult` to `anchored`; the cause curves + `Rmax` + residual are already CDC-anchored.
- **Biomarker anchoring.** For nodes with a validated measurable proxy (epigenetic clock / DunedinPACE → epigenetic-alterations; hsCRP/IL-6 → chronic-inflammation; leukocyte telomere length → telomere-attrition; grip strength / frailty index → sarcopenia), allow user reference points to refit `T_i`, promoting that row from illustrative to personalised.
- **Intervention model.** v0.2 implements only node-rate "freeze/slow." Next: edge-gain attenuation and burden-clearance (step-down) so the production-vs-residence distinction on [[cellular-senescence]] (rapamycin slows production; senolytics clear residence) is expressible.

## See also

- [[frameworks/causal-graph-data]] — verified structure layer (nodes, edges, evidence strength)
- [[frameworks/hallmark-causality-graph]] — prose interpretation, tier ordering, tractability
- `viz/aging-simulator.html` — the interactive tool consuming this file
