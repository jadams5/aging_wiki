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

State: each node *i* carries a burden `B_i(age) ∈ [0,1]` over `age ∈ [20,130]`, `dt = 1 yr`. (Range extended 100→130 so survival reaches ~0 past 110 and lifespan can extend past 100 under interventions. **v0.4 (2026-06-09):** past the CDC open-ended 85+ band, disease-cause hazards keep rising because the cause-node burdens are now **reserve-depletion** fractions that asymptote toward 1 and feed an **odds link** `Rmax·B/(1−B)` — so the old-age escalation is burden-driven and intervention-responsive, replacing the former age-keyed `mortality.oldAgeTail` Gompertz factor. The residual channel keeps its escalation in its own age table.)

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
      130
    ],
    "dt": 1,
    "couple": 1,
    "note": "Illustrative parameter layer for aging-simulator v0.3. Structure from causal-graph-data.md (verified). Coupling = bounded fixed point. Mortality = CDC-WONDER-2022 SEX-SPECIFIC competing hazards (no sex scalar). NOT verified facts; sensitivity-exploration only."
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
      "note": "Non-biological parallel channel: (unintentional injury − falls)+suicide+homicide, per-year by age & SEX; CDC WONDER 2022. Does NOT cascade. lifestyleMult scales it (sedentary~0.3, average 1.0, high-risk~10). Male ~3x female in young adults. Elderly falls excluded (frailty, not lifestyle).",
      "byAge": {
        "male": [
          [
            20,
            0.000903
          ],
          [
            30,
            0.001574
          ],
          [
            40,
            0.001654
          ],
          [
            50,
            0.001466
          ],
          [
            60,
            0.001422
          ],
          [
            70,
            0.001012
          ],
          [
            80,
            0.001108
          ],
          [
            90,
            0.00185
          ]
        ],
        "female": [
          [
            20,
            0.000291
          ],
          [
            30,
            0.00051
          ],
          [
            40,
            0.000574
          ],
          [
            50,
            0.00053
          ],
          [
            60,
            0.000489
          ],
          [
            70,
            0.000338
          ],
          [
            80,
            0.000406
          ],
          [
            90,
            0.000791
          ]
        ]
      }
    },
    "frailty": {
      "node": "sarcopenia",
      "betaByCause": {
        "cardiovascular": 0.9708,
        "cancer": 0.678,
        "neurodegeneration": 0.8755,
        "infection": 1.5913,
        "residual": 0.8755,
        "diabetes": 0.8755,
        "copd": 0.8755,
        "ckd": 0.8755,
        "liver": 0.8755
      },
      "note": "B2 (2026-06-08): CAUSE-SPECIFIC frailty multiplier. Peng 2022 frail-vs-robust cause-specific HRs: respiratory 4.91->infection, CV 2.64->cardiovascular, cancer 1.97->cancer; general ~2.4->neurodegeneration/residual. beta_cause = ln(HR) for a FULL-span (robust->frail) sarcopenia deviation (B-T). =1 at baseline. Replaces the global beta 0.6, which was mis-anchored to a wrong Kojima 1.83 (real frail-vs-robust ~2.4, Peng 2022)."
    },
    "causes": {
      "cardiovascular": {
        "node": "atherosclerosis",
        "RmaxPerYear": {
          "male": 0.059033,
          "female": 0.050486
        },
        "cdc": "heart(I00-09,I11,I13,I20-51)+stroke(I60-69) [2022] + hypertensive-net-new(I10,I12,I15) + pulmonary-heart(I26-28) + arteries(I70-74,I77-78) + veins(I80-89) + mesenteric-infarction(K55) + other-circ(I95,I99); net-new from CDC WONDER D76 2019 per sex x ten-year age; SWAP-TO-2022 pending",
        "provenance": "calibrated. Op A 2026-06-11: folded circulatory remainder into cardiovascular band; validated 2026-06-11 by graph-node-validator (independent CDC WONDER D76 2019 re-pull; all rates confirmed; Rmax arithmetic exact; burden table verified at all 10 anchor ages; residual reduction verified; excluded codes I75/I76/I96-I98 confirmed invalid in D76 v2). Net-new codes: I10/I12/I15 (hypertensive, excl I11/I13 already in band), I26-28 (pulmonary heart/embolism), I70-74/I77-78 (arteries incl aortic aneurysm I71), I80-89 (veins/lymphatic), K55 (mesenteric infarction — vascular mechanism, digestive ICD chapter), I95/I99 (other circ). Method: new_CV_hazard = old_CV_hazard + net_new_hazard (2019 D76 rates); new_Rmax = new_CV_hazard at age 90; burden = inverse-odds-link; residual -= net_new_hazard (exact subtraction; TOTAL HAZARD INVARIANT at every anchor age). Female LE drift 80.862→80.84 confirmed as legitimate PCHIP interpolation artifact (athero burden table has 75/85 intermediate anchors; residual table has decade-only anchors; between-anchor PCHIP shapes diverge, net +0.022 yr survival-weighted leak at ages 71–89; anchor-point hazard invariant to 1e-9; not an arithmetic error). Downgraded from seeder-claimed 'anchored' to 'calibrated' because SWAP-TO-2022 is an open #gap (consistent with all other D76 2019 causes in the model). Year note: existing-band Rmax/burden on 2022 data; net-new on 2019 data; residual base on 2022; SWAP-TO-2022 pending. #gap: I75/I76/I96-I98 excluded (confirmed invalid in D76 v2 by validator re-pull)."
      },
      "cancer": {
        "node": "cancer",
        "RmaxPerYear": {
          "male": 0.0217,
          "female": 0.012493
        },
        "cdc": "malignant neoplasms C00-C97"
      },
      "neurodegeneration": {
        "node": "neurodegeneration",
        "RmaxPerYear": {
          "male": 0.026251,
          "female": 0.03259
        },
        "cdc": "dementia G30/F01/F03/G31 [2022] + Parkinson/movement G20,G21,G23,G24,G25 + systemic-atrophies G10,G11,G12,G14 (ALS/Huntington/SMA; G13 invalid in D76); net-new from CDC WONDER D76 2019 per sex x ten-year age; SWAP-TO-2022 pending",
        "provenance": "calibrated. Op A batched 2026-06-11: folded Parkinson/movement (G20,G21,G23,G24,G25) and systemic atrophies (G10,G11,G12,G14) into neurodegeneration band. G13 confirmed invalid in D76. Net-new rates: D76 2019 per sex x ten-year age (B_1=D76.V5, O_aar=aar_none, F_D76.V2=individual codes). Hazard-space recompute: old_band_h + nn_h → new_Rmax = new_band_h(90); burden = inverse-odds-link; residual -= nn_h (exact; total hazard invariant at every anchor). Male net-new rates/100k: {20:0.1, 30:0.2, 40:0.8, 50:2.9, 60:9.0, 70:36.4, 80:157.7, 90:346.2}. Female: {20:0.0, 30:0.2, 40:0.5, 50:1.8, 60:5.8, 70:20.4, 80:73.3, 90:160.9}. #gap: G13 excluded (invalid in D76); SWAP-TO-2022 pending."
      },
      "infection": {
        "node": "immunosenescence",
        "RmaxPerYear": {
          "male": 0.005182,
          "female": 0.003785
        },
        "cdc": "influenza/pneumonia J09-18 + sepsis A40-41 [2022] + HIV B20,B21,B22,B23,B24 + intestinal-infectious A00,A01,A02,A03,A04,A05,A06,A07,A08,A09 (incl. C.diff); net-new from CDC WONDER D76 2019 per sex x ten-year age; SWAP-TO-2022 pending",
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
      }
    },
    "residual": {
      "byAgePerYear": {
        "male": [
          [
            20,
            0.000135003625
          ],
          [
            21,
            0.000156665725
          ],
          [
            22,
            0.000177697011
          ],
          [
            23,
            0.000198364195
          ],
          [
            24,
            0.000218933012
          ],
          [
            25,
            0.000239668209
          ],
          [
            26,
            0.000260833455
          ],
          [
            27,
            0.000282691137
          ],
          [
            28,
            0.000305502032
          ],
          [
            29,
            0.000329524804
          ],
          [
            30,
            0.000355015298
          ],
          [
            31,
            0.000381279966
          ],
          [
            32,
            0.000407658175
          ],
          [
            33,
            0.000434451894
          ],
          [
            34,
            0.000461962688
          ],
          [
            35,
            0.000490492101
          ],
          [
            36,
            0.000520341994
          ],
          [
            37,
            0.000551814856
          ],
          [
            38,
            0.000585214106
          ],
          [
            39,
            0.000620844384
          ],
          [
            40,
            0.00065901186
          ],
          [
            41,
            0.000696948723
          ],
          [
            42,
            0.000732791499
          ],
          [
            43,
            0.000768203049
          ],
          [
            44,
            0.000804845408
          ],
          [
            45,
            0.000844381128
          ],
          [
            46,
            0.000888475277
          ],
          [
            47,
            0.000938798174
          ],
          [
            48,
            0.000997028885
          ],
          [
            49,
            0.00106485938
          ],
          [
            50,
            0.00114399902
          ],
          [
            51,
            0.00123225368
          ],
          [
            52,
            0.00132665459
          ],
          [
            53,
            0.00142778479
          ],
          [
            54,
            0.00153627654
          ],
          [
            55,
            0.00165284562
          ],
          [
            56,
            0.00177832869
          ],
          [
            57,
            0.00191371219
          ],
          [
            58,
            0.00206013312
          ],
          [
            59,
            0.00221882698
          ],
          [
            60,
            0.00239100574
          ],
          [
            61,
            0.0025699703
          ],
          [
            62,
            0.00275090652
          ],
          [
            63,
            0.00293764023
          ],
          [
            64,
            0.00313389116
          ],
          [
            65,
            0.00334325705
          ],
          [
            66,
            0.00356915562
          ],
          [
            67,
            0.00381472262
          ],
          [
            68,
            0.00408266208
          ],
          [
            69,
            0.00437504217
          ],
          [
            70,
            0.00469302578
          ],
          [
            71,
            0.00488809842
          ],
          [
            72,
            0.00489553855
          ],
          [
            73,
            0.00484445964
          ],
          [
            74,
            0.00487085263
          ],
          [
            75,
            0.00512140426
          ],
          [
            76,
            0.00571047036
          ],
          [
            77,
            0.00662527925
          ],
          [
            78,
            0.00782714253
          ],
          [
            79,
            0.00927070512
          ],
          [
            80,
            0.0108999946
          ],
          [
            81,
            0.0126251142
          ],
          [
            82,
            0.0144284136
          ],
          [
            83,
            0.0163427034
          ],
          [
            84,
            0.0183871718
          ],
          [
            85,
            0.0205596321
          ],
          [
            86,
            0.022795485
          ],
          [
            87,
            0.0250839266
          ],
          [
            88,
            0.0275040461
          ],
          [
            89,
            0.0301729493
          ],
          [
            90,
            0.0332610003
          ],
          [
            91,
            0.0365470102
          ],
          [
            92,
            0.0397612944
          ],
          [
            93,
            0.043048197
          ],
          [
            94,
            0.0465500095
          ],
          [
            95,
            0.050406411
          ],
          [
            96,
            0.0547537949
          ],
          [
            97,
            0.0597244148
          ],
          [
            98,
            0.0654452372
          ],
          [
            99,
            0.0720362983
          ],
          [
            100,
            0.079608213
          ],
          [
            101,
            0.0875342874
          ],
          [
            102,
            0.0953276273
          ],
          [
            103,
            0.103297987
          ],
          [
            104,
            0.111753316
          ],
          [
            105,
            0.120999782
          ],
          [
            106,
            0.131341933
          ],
          [
            107,
            0.14308306
          ],
          [
            108,
            0.15652587
          ],
          [
            109,
            0.171973613
          ],
          [
            110,
            0.189731838
          ],
          [
            111,
            0.208369033
          ],
          [
            112,
            0.226751388
          ],
          [
            113,
            0.2456301
          ],
          [
            114,
            0.2657488
          ],
          [
            115,
            0.287840045
          ],
          [
            116,
            0.312620395
          ],
          [
            117,
            0.34078343
          ],
          [
            118,
            0.372989736
          ],
          [
            119,
            0.409852184
          ],
          [
            120,
            0.451913573
          ],
          [
            121,
            0.500836198
          ],
          [
            122,
            0.557099365
          ],
          [
            123,
            0.619353997
          ],
          [
            124,
            0.686162987
          ],
          [
            125,
            0.755961694
          ],
          [
            126,
            0.827006822
          ],
          [
            127,
            0.897299572
          ],
          [
            128,
            0.964451424
          ],
          [
            129,
            1.02542175
          ],
          [
            130,
            1.07595467
          ]
        ],
        "female": [
          [
            20,
            0.0000805967149
          ],
          [
            21,
            0.0000946011064
          ],
          [
            22,
            0.000108320687
          ],
          [
            23,
            0.000121880621
          ],
          [
            24,
            0.000135412093
          ],
          [
            25,
            0.00014905157
          ],
          [
            26,
            0.000162940104
          ],
          [
            27,
            0.000177222705
          ],
          [
            28,
            0.000192047725
          ],
          [
            29,
            0.000207566281
          ],
          [
            30,
            0.000223931673
          ],
          [
            31,
            0.000240660744
          ],
          [
            32,
            0.000257336864
          ],
          [
            33,
            0.000274214055
          ],
          [
            34,
            0.000291545811
          ],
          [
            35,
            0.000309585018
          ],
          [
            36,
            0.000329378246
          ],
          [
            37,
            0.000351823073
          ],
          [
            38,
            0.000376851158
          ],
          [
            39,
            0.000404342339
          ],
          [
            40,
            0.000431986322
          ],
          [
            41,
            0.000457926341
          ],
          [
            42,
            0.000482492296
          ],
          [
            43,
            0.000506843655
          ],
          [
            44,
            0.000532139961
          ],
          [
            45,
            0.000559541814
          ],
          [
            46,
            0.000590212077
          ],
          [
            47,
            0.000625317317
          ],
          [
            48,
            0.000666029404
          ],
          [
            49,
            0.000713527143
          ],
          [
            50,
            0.000768997641
          ],
          [
            51,
            0.000830479884
          ],
          [
            52,
            0.000895702329
          ],
          [
            53,
            0.000965404322
          ],
          [
            54,
            0.0010403461
          ],
          [
            55,
            0.00112131516
          ],
          [
            56,
            0.00120913004
          ],
          [
            57,
            0.00130463938
          ],
          [
            58,
            0.00140871368
          ],
          [
            59,
            0.0015222273
          ],
          [
            60,
            0.00164602992
          ],
          [
            61,
            0.00177707222
          ],
          [
            62,
            0.00191258994
          ],
          [
            63,
            0.00205376867
          ],
          [
            64,
            0.00220172729
          ],
          [
            65,
            0.00235749965
          ],
          [
            66,
            0.00252199085
          ],
          [
            67,
            0.00269590709
          ],
          [
            68,
            0.00287965705
          ],
          [
            69,
            0.00307322179
          ],
          [
            70,
            0.00327598766
          ],
          [
            71,
            0.00333364699
          ],
          [
            72,
            0.00318406967
          ],
          [
            73,
            0.00296690305
          ],
          [
            74,
            0.00282805706
          ],
          [
            75,
            0.00292396869
          ],
          [
            76,
            0.00337150561
          ],
          [
            77,
            0.0041371693
          ],
          [
            78,
            0.00515802018
          ],
          [
            79,
            0.00636597525
          ],
          [
            80,
            0.00768302833
          ],
          [
            81,
            0.00905017236
          ],
          [
            82,
            0.0104868177
          ],
          [
            83,
            0.0120095702
          ],
          [
            84,
            0.0136172607
          ],
          [
            85,
            0.015281358
          ],
          [
            86,
            0.0168931588
          ],
          [
            87,
            0.0184141728
          ],
          [
            88,
            0.0199239339
          ],
          [
            89,
            0.0215581717
          ],
          [
            90,
            0.0235349996
          ],
          [
            91,
            0.0257275995
          ],
          [
            92,
            0.0278896912
          ],
          [
            93,
            0.0301325187
          ],
          [
            94,
            0.0325633925
          ],
          [
            95,
            0.0352845718
          ],
          [
            96,
            0.0383919985
          ],
          [
            97,
            0.041973739
          ],
          [
            98,
            0.0461078571
          ],
          [
            99,
            0.0508592298
          ],
          [
            100,
            0.056274432
          ],
          [
            101,
            0.0618975684
          ],
          [
            102,
            0.0674048287
          ],
          [
            103,
            0.0730214179
          ],
          [
            104,
            0.0789710186
          ],
          [
            105,
            0.0854758209
          ],
          [
            106,
            0.092756668
          ],
          [
            107,
            0.101033383
          ],
          [
            108,
            0.110525363
          ],
          [
            109,
            0.121452571
          ],
          [
            110,
            0.134037072
          ],
          [
            111,
            0.147230271
          ],
          [
            112,
            0.160201481
          ],
          [
            113,
            0.173499029
          ],
          [
            114,
            0.187664838
          ],
          [
            115,
            0.203231441
          ],
          [
            116,
            0.220717773
          ],
          [
            117,
            0.240623229
          ],
          [
            118,
            0.263419137
          ],
          [
            119,
            0.289536215
          ],
          [
            120,
            0.319345532
          ],
          [
            121,
            0.35409952
          ],
          [
            122,
            0.394209364
          ],
          [
            123,
            0.438684629
          ],
          [
            124,
            0.486460653
          ],
          [
            125,
            0.536365329
          ],
          [
            126,
            0.587076149
          ],
          [
            127,
            0.637055634
          ],
          [
            128,
            0.684438638
          ],
          [
            129,
            0.726812211
          ],
          [
            130,
            0.760743655
          ]
        ]
      },
      "note": "DENSE per-integer-age remainder (all-cause − modeled causes − extrinsic), per SEX. Stored at every integration age 20..130 so re-bucketing folds are numerically EXACT (interp is identity at integer ages); eliminates the between-anchor PCHIP drift. Recomputed 2026-06-11 after the circulatory + neuro/liver/infection folds."
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
      "curve": {
        "form": "linear",
        "params": {
          "t0": 0.05,
          "slope": 0.01
        }
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
      "curve": {
        "form": "exponential",
        "params": {
          "A": 0.025,
          "r": 0.04
        }
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
      "curve": {
        "form": "sigmoid",
        "params": {
          "L": 0.9,
          "k": 0.1,
          "mid": 60
        }
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
            0.000559
          ],
          [
            30,
            0.00245
          ],
          [
            40,
            0.008299
          ],
          [
            50,
            0.023586
          ],
          [
            60,
            0.057432
          ],
          [
            70,
            0.110064
          ],
          [
            75,
            0.144659
          ],
          [
            80,
            0.224862
          ],
          [
            85,
            0.380143
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
              0.000475
            ],
            [
              30,
              0.001642
            ],
            [
              40,
              0.00532
            ],
            [
              50,
              0.013502
            ],
            [
              60,
              0.033113
            ],
            [
              70,
              0.074144
            ],
            [
              75,
              0.105657
            ],
            [
              80,
              0.191098
            ],
            [
              85,
              0.368051
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
            0.001702
          ],
          [
            30,
            0.003628
          ],
          [
            40,
            0.009991
          ],
          [
            50,
            0.035127
          ],
          [
            60,
            0.110874
          ],
          [
            70,
            0.221804
          ],
          [
            75,
            0.28366
          ],
          [
            80,
            0.352297
          ],
          [
            85,
            0.4317
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
              0.002077
            ],
            [
              30,
              0.006442
            ],
            [
              40,
              0.022992
            ],
            [
              50,
              0.064475
            ],
            [
              60,
              0.155365
            ],
            [
              70,
              0.264815
            ],
            [
              75,
              0.332445
            ],
            [
              80,
              0.396386
            ],
            [
              85,
              0.45218
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
            0
          ],
          [
            30,
            0.000092
          ],
          [
            40,
            0.000343
          ],
          [
            50,
            0.001446
          ],
          [
            60,
            0.006923
          ],
          [
            70,
            0.036978
          ],
          [
            75,
            0.111538
          ],
          [
            80,
            0.182059
          ],
          [
            85,
            0.342675
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
              0
            ],
            [
              30,
              0.000061
            ],
            [
              40,
              0.000184
            ],
            [
              50,
              0.000828
            ],
            [
              60,
              0.004642
            ],
            [
              70,
              0.02699
            ],
            [
              75,
              0.090672
            ],
            [
              80,
              0.153022
            ],
            [
              85,
              0.327062
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
            0.001541
          ],
          [
            30,
            0.007469
          ],
          [
            40,
            0.014266
          ],
          [
            50,
            0.031764
          ],
          [
            60,
            0.066979
          ],
          [
            70,
            0.127463
          ],
          [
            75,
            0.19186
          ],
          [
            80,
            0.255674
          ],
          [
            85,
            0.379114
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
              0.001582
            ],
            [
              30,
              0.006562
            ],
            [
              40,
              0.014067
            ],
            [
              50,
              0.03073
            ],
            [
              60,
              0.067045
            ],
            [
              70,
              0.133074
            ],
            [
              75,
              0.198546
            ],
            [
              80,
              0.263046
            ],
            [
              85,
              0.384057
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
      "id": "sarcopenia",
      "label": "Sarcopenia / frailty",
      "layer": "phenotype",
      "tractability": "moderate",
      "provenance": "anchored-direction",
      "role": "frailty-multiplier",
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
      "strength": "strong"
    },
    {
      "from": "genomic-instability",
      "to": "chronic-inflammation",
      "strength": "strong"
    },
    {
      "from": "genomic-instability",
      "to": "clonal-hematopoiesis",
      "strength": "strong"
    },
    {
      "from": "telomere-attrition",
      "to": "cellular-senescence",
      "strength": "strong"
    },
    {
      "from": "telomere-attrition",
      "to": "stem-cell-exhaustion",
      "strength": "strong"
    },
    {
      "from": "telomere-attrition",
      "to": "genomic-instability",
      "strength": "moderate"
    },
    {
      "from": "epigenetic-alterations",
      "to": "cellular-senescence",
      "strength": "moderate"
    },
    {
      "from": "epigenetic-alterations",
      "to": "stem-cell-exhaustion",
      "strength": "moderate"
    },
    {
      "from": "epigenetic-alterations",
      "to": "deregulated-nutrient-sensing",
      "strength": "weak"
    },
    {
      "from": "cellular-senescence",
      "to": "chronic-inflammation",
      "strength": "strong"
    },
    {
      "from": "cellular-senescence",
      "to": "stem-cell-exhaustion",
      "strength": "moderate"
    },
    {
      "from": "cellular-senescence",
      "to": "altered-intercellular-communication",
      "strength": "moderate"
    },
    {
      "from": "deregulated-nutrient-sensing",
      "to": "disabled-macroautophagy",
      "strength": "strong"
    },
    {
      "from": "deregulated-nutrient-sensing",
      "to": "cellular-senescence",
      "strength": "moderate"
    },
    {
      "from": "deregulated-nutrient-sensing",
      "to": "mitochondrial-dysfunction",
      "strength": "moderate"
    },
    {
      "from": "deregulated-nutrient-sensing",
      "to": "stem-cell-exhaustion",
      "strength": "moderate"
    },
    {
      "from": "disabled-macroautophagy",
      "to": "loss-of-proteostasis",
      "strength": "strong"
    },
    {
      "from": "disabled-macroautophagy",
      "to": "mitochondrial-dysfunction",
      "strength": "strong"
    },
    {
      "from": "disabled-macroautophagy",
      "to": "chronic-inflammation",
      "strength": "moderate"
    },
    {
      "from": "mitochondrial-dysfunction",
      "to": "cellular-senescence",
      "strength": "disputed"
    },
    {
      "from": "mitochondrial-dysfunction",
      "to": "chronic-inflammation",
      "strength": "moderate"
    },
    {
      "from": "mitochondrial-dysfunction",
      "to": "loss-of-proteostasis",
      "strength": "moderate"
    },
    {
      "from": "loss-of-proteostasis",
      "to": "neurodegeneration",
      "strength": "strong"
    },
    {
      "from": "chronic-inflammation",
      "to": "stem-cell-exhaustion",
      "strength": "moderate"
    },
    {
      "from": "chronic-inflammation",
      "to": "atherosclerosis",
      "strength": "strong"
    },
    {
      "from": "chronic-inflammation",
      "to": "clonal-hematopoiesis",
      "strength": "moderate"
    },
    {
      "from": "chronic-inflammation",
      "to": "sarcopenia",
      "strength": "moderate"
    },
    {
      "from": "dysbiosis",
      "to": "chronic-inflammation",
      "strength": "moderate"
    },
    {
      "from": "dysbiosis",
      "to": "altered-intercellular-communication",
      "strength": "moderate"
    },
    {
      "from": "altered-intercellular-communication",
      "to": "stem-cell-exhaustion",
      "strength": "weak"
    },
    {
      "from": "stem-cell-exhaustion",
      "to": "sarcopenia",
      "strength": "strong"
    },
    {
      "from": "stem-cell-exhaustion",
      "to": "immunosenescence",
      "strength": "strong"
    },
    {
      "from": "stem-cell-exhaustion",
      "to": "chronic-inflammation",
      "strength": "moderate"
    },
    {
      "from": "clonal-hematopoiesis",
      "to": "atherosclerosis",
      "strength": "moderate"
    },
    {
      "from": "genomic-instability",
      "to": "cancer",
      "strength": "strong"
    },
    {
      "from": "epigenetic-alterations",
      "to": "cancer",
      "strength": "moderate"
    },
    {
      "from": "chronic-inflammation",
      "to": "cancer",
      "strength": "moderate"
    },
    {
      "from": "immunosenescence",
      "to": "cancer",
      "strength": "moderate"
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
      }
    ],
    "mediatorEdges": [
      {
        "from": "dietSatFat",
        "to": "LDL",
        "coeff": 1.7,
        "form": "linear",
        "provenance": "Mensink 2016/2003: +1.3-2.1 mg/dL per 1% energy (replacement-dependent: PUFA -2.1, carb -1.3); 1.7 = mid. SOLID."
      },
      {
        "from": "dietFiber",
        "to": "LDL",
        "coeff": -2.2,
        "form": "fiberSaturating",
        "provenance": "Brown 1999: -2.2 mg/dL per g/day soluble fiber; SATURATING >10 g/day. SOLID."
      },
      {
        "from": "physicalActivity",
        "to": "HbA1c",
        "coeff": -0.67,
        "form": "exerciseHbA1c",
        "provenance": "Umpierre 2011: -0.67% (T2D) for structured exercise vs sedentary. SOLID. Form scales the -0.67% by activity deviation across the sedentary->active span (~150 min/wk)."
      },
      {
        "from": "dietSodium",
        "to": "systolicBP",
        "coeff": 5.8,
        "form": "sodiumConvex",
        "provenance": "He 2013: +5.8 mmHg SBP per +100 mmol/day (slope POSITIVE; the '-5.8 per -100' reduction framing). CONVEX, effect-modified (steeper older/higher-SBP). SOLID. [sign-fixed 2026-06-08]"
      },
      {
        "from": "alcohol",
        "to": "systolicBP",
        "coeff": 5.5,
        "form": "alcoholThreshold",
        "provenance": "Roerecke 2017: up to -5.5 mmHg from heavy 50% cut; THRESHOLD ~2 drinks then steep. SOLID. Form: ~no effect <=2 drinks, steep rise above."
      },
      {
        "from": "calorieBalance",
        "to": "BMI",
        "coeff": 1,
        "form": "weightDynamic",
        "provenance": "Hall 2013: static 7700 kcal/kg OVERSTATES ~40-50% long-term; use dynamic decay. SOLID. Form: asymptotic body-weight change from a sustained energy-balance offset, converted to BMI via heightRefM."
      },
      {
        "from": "BMI",
        "to": "systolicBP",
        "coeff": 0.72,
        "form": "mediatorLinear",
        "provenance": "Stage 3b (2026-06-08). Bann 2021 (UK cohorts MR/longitudinal): ~+0.72 mmHg SBP per +1 kg/m2 BMI. mediator->mediator edge: SBP gains 0.72*(BMI_person(age) - BMI_baseline_sex(age)); flows through the existing SBP->cardiovascular edge (the DOMINANT mediated BMI->CVD path). BMI is itself driven by calorieBalance, so calorieBalance->BMI->SBP->CVD chains. At default calorieBalance + zero BMI offset, BMI==baseline => Delta 0 => SBP unchanged. SOLID-direction. NOTE: BMI must be computed BEFORE systolicBP (engine topo-sorts mediator->mediator edges)."
      },
      {
        "from": "physicalActivity",
        "to": "systolicBP",
        "coeff": -3.8,
        "form": "exerciseScaled",
        "provenance": "Cornelissen 2013 aerobic-training meta: ~-3.8 mmHg SBP (sedentary->trained); scaled by activity deviation (exerciseScale). =0 at popMean activity. NOTE: partial mortality overlap with the fitness->all-cause channel (the BP-mediated slice of exercise's benefit); acknowledged minor double-count, fit-harness to reconcile."
      },
      {
        "from": "BMI",
        "to": "HbA1c",
        "coeff": 0.025,
        "form": "mediatorLinear",
        "provenance": "~+0.025% HbA1c per +1 kg/m2 BMI (continuous slope WEAK/#gap, cross-sectional; the SOLID glycemic-BMI signal is incident-T2D RR). Enables calorieBalance->BMI->HbA1c (adiposity->insulin-resistance). =0 at baseline BMI. Small overlap with the BMI->CVD residual glucose-mediation (~15% per Lu 2014); fit-harness reconciles."
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
        "label": "Metformin / GLP-1",
        "to": "HbA1c",
        "form": "absShift",
        "amount": -0.8,
        "provenance": "Metformin/GLP-1 lowers HbA1c ~-0.8% (GLP-1 larger); modeled as additive downshift. amount %."
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
      }
    ],
    "stateAugmentsNote": "STATE→MEDIATOR AUGMENTS (2026-06-10; β-cell→HbA1c vertical). Each {fromState, mediator, coeff} injects coeff·stateValue INTO a mediator mid-march (per-age, AFTER the mediator phase + offsets, BEFORE state rates advance), so a state node's accumulated value can re-shape a mediator trajectory that the SAME march's downstream integrals then read. coeff is a number or a {male,female} map. This is the substrate that lets an emergent damage variable un-pin a formerly age-tabled mediator: β-cell-decline → HbA1c replaces the HbA1c age-table with a flat 5.3 baseline + the emergent rise. Anchoring stays exact in Increment 2 because the augment is input-independent (constant base rate), so computeOffsets' post-augment prediction cancels; Increment 3 (glucotox feedback makes the augment input-dependent) revisits anchor semantics.",
    "stateAugments": [
      {
        "fromState": "beta-cell-decline",
        "mediator": "HbA1c",
        "coeff": {
          "male": 0.6,
          "female": 0.5
        }
      }
    ],
    "causeEdges": [
      {
        "from": "LDL",
        "to": "cardiovascular",
        "form": "mediatorLogLinear",
        "med": "LDL",
        "beta": 0.00643,
        "provenance": "CTT 2010: RR 0.78 per -1 mmol/L LDL = exp(-0.2485/38.67 mg/dL) => beta=0.00643 per mg/dL. Acts on (LDL value - per-sex/age baseline); =1 at baseline. SOLID."
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
        "provenance": "Lewington 2002: ~2x CVD per +20 mmHg (>=115) => beta=ln(2)/20=0.0347 per mmHg at age 50; relative slope HALVES per ~2 decades (betaAgeMod refAge 50, halfPer 20). Acts on (SBP value - baseline). BENEFIT FLOOR 115 mmHg (2026-06-10): the log-linear association is established only DOWN TO 115 mmHg (Lewington's lower bound); below it the value is clamped so there is NO further CVD benefit (plateau), rather than extrapolating an unbounded benefit toward physiologically impossible SBP. Below ~115 the epidemiology flattens and an observational J-curve appears that is largely reverse-causation (frailty/illness lowers BP); a true harm uptick is NOT modeled here (conservative plateau). SOLID (>=115); floor is the evidence-boundary choice."
      },
      {
        "from": "HbA1c",
        "to": "cardiovascular",
        "form": "mediatorThresholdRamp",
        "med": "HbA1c",
        "slope": 0.866,
        "threshold": 5.7,
        "cap": 2.6,
        "provenance": "ERFC 2011: diabetes->vascular death HR 2.32 at HbA1c 6.5. **B3 mediation decomposition (2026-06-10):** the glycemic CV risk is partly STRUCTURAL (glycemia->ecm-crosslink->arterial-stiffness->CVD), now carried explicitly by the arterial-stiffness->cardiovascular edge. The stiffness-mediated slice is SUBTRACTED here so the total isn't double-counted: slope reduced 1.052->0.866 so the DIRECT (non-structural: endothelial/microvascular/thrombotic) glycemic HR at 6.5 is ~2.0 (exp(0.866*0.8)=2.0), the ~14% remainder routed through stiffness. Cap 3->2.6. ILLUSTRATIVE split magnitude (#gap: the exact structural fraction of glycemic CVD is uncharacterized); SOLID-direction. Ratio-to-baseline so =1 at the per-age baseline HbA1c."
      },
      {
        "from": "arterial-stiffness",
        "to": "cardiovascular",
        "form": "mediatorLogLinear",
        "med": "arterial-stiffness",
        "beta": 0.6,
        "provenance": "B3 (2026-06-10): the CONSOLIDATED arterial-stiffness -> CVD path. Mitchell 2010 (Framingham): cfPWV HR 1.48 per 1 SD, INDEPENDENT of SBP/lipids/smoking/diabetes. 1 SD cfPWV ~0.55 of the normalized stiffness range => beta = ln(1.48)/0.55 ~0.71; set to 0.6 (conservative, to bound the partial overlap of the SBP-driven elastin slice with the Lewington SBP->CVD edge — #gap, reconcile in the A4 SBP-residual-split). Deviation form exp(beta*(stiffness - baseline)) = 1 at the pop stiffness trajectory, so the CDC-calibrated CV baseline is preserved EXACTLY; only stiffness DEVIATIONS move CV hazard. Makes interventions map to reality: a senolytic (less senescence -> less stiffness) and glycemic/BP/crosslink-breaker interventions all bend CV mortality through stiffness, non-double-counted — senescence's stiffness path is a DISTINCT mechanism from its existing inflammation->plaque coupling (senescence->chronic-inflammation->atherosclerosis), the glycemia slice is decomposed out of HbA1c->CVD, and HR has no prior CVD edge. ILLUSTRATIVE beta; SOLID-direction (Mitchell 2010, Clayton 2023)."
      },
      {
        "from": "HbA1c",
        "to": "cancer",
        "form": "mediatorThresholdRamp",
        "med": "HbA1c",
        "slope": 0.27893,
        "threshold": 5.7,
        "cap": 1.25,
        "provenance": "ERFC 2011: diabetes->cancer death HR 1.25 at HbA1c>=6.5 => slope=ln(1.25)/0.8=0.27893; ramp from 5.7, cap 1.25. Ratio-to-baseline. SOLID."
      },
      {
        "from": "HbA1c",
        "to": "neurodegeneration",
        "form": "mediatorThresholdRamp",
        "med": "HbA1c",
        "slope": 0.68515,
        "threshold": 5.7,
        "cap": 1.73,
        "provenance": "Gudala 2013: diabetes->dementia RR 1.73 at HbA1c>=6.5 => slope=ln(1.73)/0.8=0.68515; ramp from 5.7, cap 1.73. Ratio-to-baseline. SOLID."
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
        "provenance": "Relative cancer-death RR never 1.0 / former 1.3 / current 2.2 (PAF 28.8%). NORMALIZED by US smoker-mix mean (0.61*1.0+0.25*1.3+0.14*2.2=1.243) so the population mix averages to mult 1 (the CDC cancer baseline already embeds the mix). Normalized: never~0.804 / former~1.046 / current~1.770. SOLID-direction; relative magnitudes approximate."
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
        "provenance": "Smoking->COPD. Current-smoker COPD-death RR ~12 (Thun 2013 CPS-II, conservative end of 12-26); former ~7. smokingCategorical, normalized to US smoker mix (mult=1 at baseline). v0.4.1."
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
        "provenance": "Stage 3a (2026-06-08; deferred from Stage 2). Relative cardiovascular-death RR never 1.0 / former 1.3 / current 1.9 (net current-smoker CVD RR ~1.8-2.0). NORMALIZED by US smoker-mix mean (0.61*1.0+0.25*1.3+0.14*1.9=1.201) so the population mix averages to mult 1 (the CDC cardiovascular baseline already embeds the mix). Normalized: never~0.833 / former~1.082 / current~1.582. Same scheme as smoking->cancer. SOLID-direction; relative magnitudes approximate."
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
        "provenance": "Sleep duration → all-cause mortality is U-SHAPED (Cappuccio 2010 meta: short sleep <6h HR ~1.12, long sleep >8-9h HR ~1.30 vs the 7-8h REFERENCE). **BANDED + ASYMMETRIC (2026-06-10, user-caught):** the prior symmetric point-nadir at 7 wrongly penalized 8h as much as 6h — but 7-8h is a flat-optimal REFERENCE BAND (8h is not worse than 7h). mult = exp(β·dist) where dist = how far OUTSIDE [7,8] (0 inside ⇒ 7h AND 8h both penalty-free) and β is ASYMMETRIC: short arm (<7h) βlow 0.06, long arm (>8h) βhigh 0.13 (long-sleep mortality rises ~2× steeper per hour — Cappuccio long HR 1.30 vs short 1.12). Resulting: 5h ⇒ exp(0.06·2)=1.13, 6h ⇒ 1.06, 7-8h ⇒ 1.00, 9h ⇒ exp(0.13·1)=1.14, 10h ⇒ exp(0.13·2)=1.30. popMean 7 lies in the band ⇒ mult 1 at default ⇒ baseline preserved EXACTLY. Whole-intrinsic-bracket all-cause multiplier (like physicalActivity→allcause); sleep is a standalone input with no prior edge, so NO double-count. The steeper long arm is partly REVERSE-CAUSATION (illness → long sleep, not long sleep → death) — flagged #gap/contributory-reverse-causation; the model encodes the association as-observed. Wired + exposed 2026-06-10 (was a phantom input); banded/asymmetric same day. SOLID-direction; magnitude illustrative."
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
        "provenance": "Stage 3a (2026-06-08; deferred from Stage 2). Stage 3c (2026-06-10) PLATEAU refinement at the high-volume end (see below). Activity's mortality benefit flows through cardiorespiratory fitness (VO2max), weight- AND glucose-independent (Barry 2014: obese-fit ~ normal-fit). mult_allcause = exp(-0.139 * dMETs(activity)), RR 0.87 per MET (Kodama 2009) => beta = ln(0.87) = -0.139. Applied to the WHOLE intrinsic bracket (all causes + residual), at the frailty-multiplier site (target 'allcause'). dMETs = MET-deviation of the activity level from population-average activity (physicalActivity popMean 150 min/wk -> dMETs 0 -> mult 1, baseline preserved). metMap is an ILLUSTRATIVE piecewise-linear map on physicalActivity (min/wk MVPA) -> METs-relative-to-popMean: sedentary(0)=-1.5, below-avg(75)=-0.5, popMean(150)=0, moderate(300)=+1.0, high(450)=+1.6, athlete(600)=+1.9; range -1.5..+1.9 spans sedentary<->athlete (a sedentary->trained shift is ~+1.1 MET in the data). PLATEAU (Stage 3c): the map now DECELERATES above 300 min/wk (slope 0.0067 METs/min over 150-300, 0.0040 over 300-450, 0.0020 over 450-600) rather than the prior near-linear climb to +2.5 at 600. Rationale: the dose-response to ALL-CAUSE MORTALITY flattens beyond ~3-5x guideline volume (Arem 2015, pooled 6 US cohorts n>650k: benefit flattens beyond 3-5x guidelines, NO increased risk at >10x => the J-curve/reverse-J concern for extreme exercise is NOT supported for mortality) while cardiorespiratory FITNESS itself has no demonstrated upper benefit limit (Mandsager 2018, n=122k: elite fitness beats high fitness). The deceleration encodes the DIMINISHING-RETURNS of activity-VOLUME->fitness (each added weekly minute buys less VO2max at the top), keeping the curve MONOTONIC (no upturn). Deliberately NOT a U-shape: the genuine extreme-endurance harms (atrial fibrillation ~2-5x, elevated but stable coronary-artery-calcium) are MORBIDITY endpoints not captured by this all-cause-mortality channel; the small Schnohr 2015 strenuous-jogger subgroup mortality signal (n~40, wide CI) did not replicate in the large cohorts. Consistent with interventions/lifestyle/exercise.md (Arem 2015 section). DOUBLE-COUNT NOTE: activity also drives HbA1c (Stage 1), but HbA1c->CVD only fires above the 5.7 prediabetes threshold, where active people rarely sit, so the overlap is negligible for non-diabetics; the fitness channel is the primary activity->mortality path. Activity is NOT additionally routed activity->cardiovascular separately. ILLUSTRATIVE mapping; SOLID-direction (Kodama 2009 / Barry 2014); plateau-shape SOLID (Arem 2015 / Mandsager 2018)."
      },
      {
        "from": "alcohol",
        "to": "cancer",
        "form": "directLogLinear",
        "input": "alcohol",
        "beta": 0.05,
        "provenance": "Bagnardi 2015 (breast/CRC/liver-driven): small all-cancer slope ~exp(0.05*(drinks/day - popMean)). APPROXIMATE (per-drink all-cancer slope not line-verified)."
      },
      {
        "from": "alcohol",
        "to": "liver",
        "form": "directHinge",
        "input": "alcohol",
        "slope": 0.15,
        "knee": 2,
        "provenance": "Alcohol->liver (now a named cause node; was the liver slice of residual). directHinge slope0.15 knee2 (supralinear in heavy drinkers). v0.4.1 retarget 2026-06-09."
      },
      {
        "from": "airPollution",
        "to": "cardiovascular",
        "form": "directLogLinear",
        "input": "airPollution",
        "beta": 0.00583,
        "provenance": "Pope 2002: RR 1.06 per +10 ug/m3 PM2.5 => beta=ln(1.06)/10=0.00583 per ug/m3 (deviation from popMean ~8). SOLID*-direction (per-10 not PDF-line-verified)."
      },
      {
        "from": "airPollution",
        "to": "copd",
        "form": "directLogLinear",
        "input": "airPollution",
        "beta": 0.005,
        "provenance": "PM2.5->COPD/respiratory (now a named cause node; was the respiratory slice of residual). beta 0.005 per ug/m3. v0.4.1 retarget 2026-06-09."
      },
      {
        "from": "BMI",
        "to": "cardiovascular",
        "form": "bmiThresholdRatio",
        "med": "BMI",
        "beta": 0.022819,
        "threshold": 25,
        "provenance": "Stage 3b (2026-06-08). DIRECT (UNMEDIATED) BMI->CVD residual, upper-arm only (BMI>25): exp(beta*max(0,BMI-25)), NORMALIZED to per-age baseline BMI so =1 at baseline. The ~unmediated portion of BMI->CHD that REMAINS after the BMI->SBP->CVD mediated path (edge 1). beta chosen so the COMBINED effect (this residual x the SBP-path mult at +5 BMI / mid age 50) ~= Lu 2014 total BMI->CHD HR 1.27 per +5 kg/m2. At +5 BMI: SBP-path = exp(0.0347 * 0.72*5) = 1.1331 (SBP->CVD beta at age 50); residual = exp(0.022819*5) = 1.1209; combined = 1.270. RESULTING LOG-HR SPLIT: SBP-path 52.3% / residual 47.7% (the mechanical SBP->CVD slope at age 50 carries more than the Lu single-mediator BP 31% because Lewington's per-mmHg slope is steep at mid-age; the residual beta absorbs the remainder to hit the 1.27 total). Lu 2014 mediation decomposition (BP ~31% single-mediator); BMI->CHD 1.27 per +5. SOLID-direction; split is model-mechanical."
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
        "provenance": "Stage 3b (2026-06-08). BMI J-curve whole-intrinsic-bracket multiplier (target 'allcause', at the frailty-multiplier site), NORMALIZED to per-age baseline BMI so =1 at baseline. UPPER arm (BMI>25): small NON-CV obesity mortality, betaUpper = ln(1.09)/5 = 0.017236 per unit >25 (BMI->all-cause 1.39 per +5 vs the CV portion 1.27 => ~1.09 residual non-CV slice). LOWER arm (BMI<20): underweight/frailty, betaLower = ln(1.51)/3.5 = 0.117746 per unit <20 (Global BMI Mortality Collaboration 2016: HR 1.51 at BMI 15-18.5, ~3.5 below the nadir edge 20; mostly non-metabolic frailty). Nadir band [20,25] => factor 1. mult = Jbracket(BMI_person)/Jbracket(BMI_baseline); since baseline BMI (~28-30) sits on the UPPER arm, a lean person (BMI 22, nadir) gets mult<1 and an underweight person (BMI 17) gets the frailty penalty. The CV slice of BMI->mortality is carried separately (edges 1+2) so this J-curve is the NON-CV + frailty residual only (no CV double-count). OMITTED: BMI->LDL (null per MR) and a continuous BMI->glucose edge (folded into this residual / not separately wired). Global BMI 2016; Lu 2014. SOLID-direction."
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
        "provenance": "Smoking->diabetes mortality RR ~1.6 current / 1.2 former (Pan 2015 meta; smoking raises diabetes incidence+mortality). smokingCategorical normalized. v0.4.1."
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
        "provenance": "Smoking->CKD mortality RR ~1.5 current (smoking accelerates nephropathy/CKD progression). smokingCategorical normalized. v0.4.1."
      },
      {
        "from": "HbA1c",
        "to": "diabetes",
        "form": "mediatorThresholdRamp",
        "med": "HbA1c",
        "threshold": 6.5,
        "slope": 0.55,
        "cap": 30,
        "provenance": "HbA1c -> DIRECT diabetes mortality (E10-E14: acute metabolic crises [DKA, hyperosmolar hyperglycemic state] + severe diabetic complications coded to diabetes itself, NOT the diabetic CVD that codes to cardiovascular). Added 2026-06-10 to give the β-cell glucotoxicity spiral a SEVERITY-SCALING terminal endpoint — without it the only HbA1c->mortality edges (cardiovascular/cancer/neurodegeneration) all SATURATE at their caps by HbA1c ~6.8 (they carry the ERFC/Gudala *average-diabetic* macrovascular RR, which genuinely plateaus), so the model treated HbA1c 7 and 14 as identical for death (user-caught, 2026-06-10). This edge is DELIBERATELY STEEP + HIGH-CAP because the diabetes-coded endpoint is dominated by ACUTE crises whose baseline is ~0 at HbA1c 6.5 and explodes at sustained high glycemia: slope 0.55 = RR ~1.73 per +1% HbA1c, cap 30 (saturates at HbA1c ~12.7). This is a DIFFERENT shape from the capped macrovascular edges and is correct — acute hyperglycemic death scales with severity where chronic macrovascular RR plateaus. ratio-to-baseline (threshold 6.5 > population HbA1c max 6.4 @130) so mult EXACTLY 1 in the population => baseline LE preserved EXACTLY. Resulting ladder (M, anchored): HbA1c 7 -4.3 yr / 10 -7.3 / 14 -11.1. ILLUSTRATIVE slope+cap magnitudes (#gap: the exact direct-diabetes-mortality dose-response by HbA1c band is uncharacterized for HbA1c>12); SOLID-direction (acute hyperglycemic + complication mortality rises steeply with sustained hyperglycemia)."
      },
      {
        "from": "HbA1c",
        "to": "ckd",
        "form": "mediatorThresholdRamp",
        "med": "HbA1c",
        "threshold": 6.5,
        "slope": 0.35,
        "cap": 10,
        "provenance": "HbA1c -> CKD mortality (diabetic nephropathy -> renal death, N00-N07/N17-N19/N25-N27). Added 2026-06-10 alongside HbA1c->diabetes as the second severity-scaling glycemic endpoint. Diabetic nephropathy is strongly glycemia-dependent (DCCT/UKPDS: tight control markedly cuts nephropathy progression), so renal death rises with sustained hyperglycemia: slope 0.35 = RR ~1.42 per +1% HbA1c, cap 10 (saturates at HbA1c ~13.1) — gentler than the diabetes edge (nephropathy is a chronic complication, not an acute crisis). ratio-to-baseline (threshold 6.5 > population HbA1c max) => mult EXACTLY 1 in population => baseline LE preserved EXACTLY. Complements the existing smoking->ckd edge (different driver). ILLUSTRATIVE magnitudes (#gap); SOLID-direction (glycemic control governs diabetic nephropathy progression)."
      }
    ],
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

- **Treatment as intervention:** the mediator baselines below use *untreated* strata where available; statins/antihypertensives/metformin are interventions that push a mediator *down*.
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
