---
type: framework
aliases: [causal graph parameters, aging simulator parameters, hallmark dynamical-model parameters]
sources: ["[[frameworks/causal-graph-data]]", "[[frameworks/hallmark-causality-graph]]"]
covers: [model-parameters, simulator-data]
---

# Causal Graph — Model Parameters (Simulator Layer)

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

State: each node *i* carries a burden `B_i(age) ∈ [0,1]` over `age ∈ [20,100]`, `dt = 1 yr`.

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

v0.3 uses **sex-specific cause-specific competing hazards** calibrated to **CDC WONDER 2022** age×sex×cause rates — no Gompertz, **no sex scalar**. Each named cause's absolute hazard = `Rmax_{c,sex} · B_node(c),sex`. `Rmax` is per-sex; the residual and external channels are per-sex tables; `β_frail` and the coupling gains remain the only illustrative pieces.

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
    "version": "v0.3",
    "ageRange": [
      20,
      100
    ],
    "dt": 1,
    "couple": 1.0,
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
      "lifestyleMult": 1.0,
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
      "beta": 0.6,
      "note": "Frailty as global multiplier on the intrinsic bracket (not a cause line). exp(beta*(B-T)); =1 at baseline. Kojima 2018 frailty-index HR 1.83."
    },
    "causes": {
      "cardiovascular": {
        "node": "atherosclerosis",
        "RmaxPerYear": {
          "male": 0.054702,
          "female": 0.045587
        },
        "cdc": "heart(I00-09,I11,I13,I20-51)+stroke(I60-69), CDC WONDER 2022 by sex"
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
          "male": 0.022789,
          "female": 0.030981
        },
        "cdc": "dementia G30/F01/F03/G31"
      },
      "infection": {
        "node": "immunosenescence",
        "RmaxPerYear": {
          "male": 0.004823,
          "female": 0.003393
        },
        "cdc": "influenza/pneumonia J09-18 + sepsis A40-41"
      }
    },
    "residual": {
      "byAgePerYear": {
        "male": [
          [
            20,
            0.000156
          ],
          [
            30,
            0.000464
          ],
          [
            40,
            0.000964
          ],
          [
            50,
            0.002001
          ],
          [
            60,
            0.004521
          ],
          [
            70,
            0.009048
          ],
          [
            80,
            0.0208
          ],
          [
            90,
            0.055532
          ]
        ],
        "female": [
          [
            20,
            0.000103
          ],
          [
            30,
            0.000304
          ],
          [
            40,
            0.000633
          ],
          [
            50,
            0.001304
          ],
          [
            60,
            0.00299
          ],
          [
            70,
            0.006263
          ],
          [
            80,
            0.015065
          ],
          [
            90,
            0.04114
          ]
        ]
      },
      "note": "all-cause − modeled causes − extrinsic, per SEX (CDC WONDER 2022). Long tail: COPD, diabetes, kidney, liver, falls, etc. Keeps baseline total = empirical sex-specific all-cause mortality."
    },
    "note": "v0.3: sexMult REMOVED. Each cause carries per-sex curves + per-sex Rmax; residual & extrinsic per-sex. Female cardiovascular-onset delay (~10yr midlife) and 3x male external excess now EMERGE from CDC WONDER data, not a scalar."
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
          "t0": 0.0,
          "slope": 0.0115
        },
        "female": {
          "t0": 0.0,
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
            0.000512
          ],
          [
            30,
            0.002285
          ],
          [
            40,
            0.007916
          ],
          [
            50,
            0.023345
          ],
          [
            60,
            0.059632
          ],
          [
            70,
            0.121294
          ],
          [
            80,
            0.286352
          ],
          [
            90,
            1.0
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.000373
            ],
            [
              30,
              0.001448
            ],
            [
              40,
              0.004914
            ],
            [
              50,
              0.01303
            ],
            [
              60,
              0.033255
            ],
            [
              70,
              0.077676
            ],
            [
              80,
              0.231733
            ],
            [
              90,
              1.0
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
            0.001705
          ],
          [
            30,
            0.003641
          ],
          [
            40,
            0.010092
          ],
          [
            50,
            0.036406
          ],
          [
            60,
            0.1247
          ],
          [
            70,
            0.285023
          ],
          [
            80,
            0.543917
          ],
          [
            90,
            1.0
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.002081
            ],
            [
              30,
              0.006484
            ],
            [
              40,
              0.023533
            ],
            [
              50,
              0.068919
            ],
            [
              60,
              0.183943
            ],
            [
              70,
              0.360202
            ],
            [
              80,
              0.656688
            ],
            [
              90,
              1.0
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
      "provenance": "anchored",
      "role": "mortality-cause",
      "mortalityCause": "neurodegeneration",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.0
          ],
          [
            30,
            1.8e-05
          ],
          [
            40,
            4.4e-05
          ],
          [
            50,
            0.000395
          ],
          [
            60,
            0.004081
          ],
          [
            70,
            0.028259
          ],
          [
            80,
            0.187196
          ],
          [
            90,
            1.0
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.0
            ],
            [
              30,
              0.0
            ],
            [
              40,
              3.2e-05
            ],
            [
              50,
              0.000291
            ],
            [
              60,
              0.003034
            ],
            [
              70,
              0.022594
            ],
            [
              80,
              0.166392
            ],
            [
              90,
              1.0
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
      "provenance": "anchored",
      "role": "mortality-cause",
      "mortalityCause": "infection",
      "curve": {
        "form": "table",
        "byAge": [
          [
            20,
            0.001244
          ],
          [
            30,
            0.004561
          ],
          [
            40,
            0.010574
          ],
          [
            50,
            0.024881
          ],
          [
            60,
            0.06158
          ],
          [
            70,
            0.13954
          ],
          [
            80,
            0.337757
          ],
          [
            90,
            1.0
          ]
        ],
        "female": {
          "byAge": [
            [
              20,
              0.001768
            ],
            [
              30,
              0.0056
            ],
            [
              40,
              0.012084
            ],
            [
              50,
              0.028883
            ],
            [
              60,
              0.06985
            ],
            [
              70,
              0.153551
            ],
            [
              80,
              0.358385
            ],
            [
              90,
              1.0
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
        "range": [0, 40]
      },
      {
        "id": "smokingStatus",
        "label": "Smoking status (categorical)",
        "unit": "never|former|current",
        "populationMean": "population",
        "range": ["never", "former", "current"],
        "note": "Categorical smoking status for the direct smoking->cancer/COPD cause edges (Stage 2). Sentinel populationMean 'population' (and undefined) maps to the US smoker mix (61% never / 25% former / 14% current), normalized so the mix averages to a multiplier of 1 — the CDC cause baselines already embed this mix."
      },
      {
        "id": "calorieBalance",
        "label": "Caloric balance (intake − expenditure)",
        "unit": "kcal/day",
        "populationMean": 0,
        "range": [-1000, 1000]
      },
      {
        "id": "physicalActivity",
        "label": "Physical activity",
        "unit": "min/week MVPA",
        "populationMean": 150,
        "range": [0, 600]
      },
      {
        "id": "dietSatFat",
        "label": "Saturated fat",
        "unit": "% energy",
        "populationMean": 11,
        "range": [3, 25]
      },
      {
        "id": "dietFiber",
        "label": "Soluble fiber",
        "unit": "g/day",
        "populationMean": 3,
        "range": [0, 30]
      },
      {
        "id": "dietSodium",
        "label": "Dietary sodium",
        "unit": "mmol/day",
        "populationMean": 150,
        "range": [40, 300]
      },
      {
        "id": "alcohol",
        "label": "Alcohol",
        "unit": "drinks/day",
        "populationMean": 1,
        "range": [0, 10]
      },
      {
        "id": "sleep",
        "label": "Sleep",
        "unit": "hours/night",
        "populationMean": 7,
        "range": [3, 11]
      },
      {
        "id": "airPollution",
        "label": "Air pollution",
        "unit": "µg/m³ PM2.5",
        "populationMean": 8,
        "range": [2, 60]
      }
    ],
    "mediators": [
      {
        "id": "LDL",
        "label": "LDL cholesterol",
        "unit": "mg/dL",
        "sd": 35,
        "baseline": {
          "male": [[25, 115], [35, 115], [45, 115], [55, 115], [65, 108], [75, 100], [85, 100]],
          "female": [[25, 115], [35, 115], [45, 116], [55, 120], [65, 116], [75, 115], [85, 115]]
        },
        "provenance": "JAMA Cardiol lipid-trends; PMC9615374; db515. Only crude <65 vs >=65 published (M<65 114.8/M>=65 100.0(treated-low); F<65 114.8/F>=65 114.6). INTERPOLATED to per-year: male flat ~115 to 55 then decline to ~100 (treated-low >=65); female menopausal rise 45-55 to ~120 peak then ~115, overtaking male >=65."
      },
      {
        "id": "systolicBP",
        "label": "Systolic blood pressure",
        "unit": "mmHg",
        "sd": 16,
        "baseline": {
          "male": [[25, 119], [35, 119], [45, 124], [55, 124], [65, 133], [75, 154], [85, 154]],
          "female": [[25, 110], [35, 110], [45, 122], [55, 122], [65, 139], [75, 159], [85, 159]]
        },
        "provenance": "NHSR-35 2001-08 untreated-HTN/total strata. 3 published bands -> INTERPOLATED piecewise-linear. Female SBP crossover at 60s (F139 > M133) encoded."
      },
      {
        "id": "BMI",
        "label": "Body mass index",
        "unit": "kg/m^2",
        "sd": 6,
        "baseline": {
          "male": [[25, 27.6], [35, 30.3], [45, 30.1], [55, 29.8], [65, 29.9], [75, 29.2], [85, 27.6]],
          "female": [[25, 28.3], [35, 29.9], [45, 30.7], [55, 30.3], [65, 30.3], [75, 29.8], [85, 28.0]]
        },
        "provenance": "Fryar 2015-18 (~untreated biology; right-skewed). Direct per-band table, band-center ages."
      },
      {
        "id": "HbA1c",
        "label": "Glycated hemoglobin",
        "unit": "%",
        "sd": 0.6,
        "baseline": {
          "male": [[25, 5.3], [35, 5.3], [45, 5.6], [55, 5.6], [65, 5.9], [75, 5.9], [85, 5.9]],
          "female": [[25, 5.3], [35, 5.3], [45, 5.5], [55, 5.5], [65, 5.8], [75, 5.8], [85, 5.8]]
        },
        "provenance": "Selvin 2005-10 (sexes ~equal; rising secular trend). Direct per-band table, band-center ages."
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
        "coeff": -5.8,
        "form": "sodiumConvex",
        "provenance": "He 2013: -5.8 mmHg per -100 mmol/day; CONVEX, effect-modified (HTN -5.4 / normo -1.0; steeper older/Black). SOLID. Form scales by baseline-SBP (older/higher = steeper)."
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
        "coeff": 1.0,
        "form": "weightDynamic",
        "provenance": "Hall 2013: static 7700 kcal/kg OVERSTATES ~40-50% long-term; use dynamic decay. SOLID. Form: asymptotic body-weight change from a sustained energy-balance offset, converted to BMI via heightRefM."
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
    "causeEdges": [
      {
        "from": "LDL", "to": "cardiovascular", "form": "mediatorLogLinear", "med": "LDL",
        "beta": 0.00643,
        "provenance": "CTT 2010: RR 0.78 per -1 mmol/L LDL = exp(-0.2485/38.67 mg/dL) => beta=0.00643 per mg/dL. Acts on (LDL value - per-sex/age baseline); =1 at baseline. SOLID."
      },
      {
        "from": "systolicBP", "to": "cardiovascular", "form": "mediatorLogLinear", "med": "systolicBP",
        "beta": 0.0347, "betaAgeMod": { "refAge": 50, "halfPer": 20 },
        "provenance": "Lewington 2002: ~2x CVD per +20 mmHg (>=115) => beta=ln(2)/20=0.0347 per mmHg at age 50; relative slope HALVES per ~2 decades (betaAgeMod refAge 50, halfPer 20). Acts on (SBP value - baseline). SOLID."
      },
      {
        "from": "HbA1c", "to": "cardiovascular", "form": "mediatorThresholdRamp", "med": "HbA1c",
        "slope": 1.052, "threshold": 5.7, "cap": 3.0,
        "provenance": "ERFC 2011: diabetes->vascular death HR 2.32 reached at HbA1c 6.5 => exp(1.052*(6.5-5.7))=2.32; ramp from 5.7, capped 3.0. Ratio-to-baseline so =1 at the per-age baseline HbA1c. SOLID."
      },
      {
        "from": "HbA1c", "to": "cancer", "form": "mediatorThresholdRamp", "med": "HbA1c",
        "slope": 0.27893, "threshold": 5.7, "cap": 1.25,
        "provenance": "ERFC 2011: diabetes->cancer death HR 1.25 at HbA1c>=6.5 => slope=ln(1.25)/0.8=0.27893; ramp from 5.7, cap 1.25. Ratio-to-baseline. SOLID."
      },
      {
        "from": "HbA1c", "to": "neurodegeneration", "form": "mediatorThresholdRamp", "med": "HbA1c",
        "slope": 0.68515, "threshold": 5.7, "cap": 1.73,
        "provenance": "Gudala 2013: diabetes->dementia RR 1.73 at HbA1c>=6.5 => slope=ln(1.73)/0.8=0.68515; ramp from 5.7, cap 1.73. Ratio-to-baseline. SOLID."
      },
      {
        "from": "smokingStatus", "to": "cancer", "form": "smokingCategorical", "input": "smokingStatus",
        "rr": { "never": 1.0, "former": 1.3, "current": 2.2 },
        "provenance": "Relative cancer-death RR never 1.0 / former 1.3 / current 2.2 (PAF 28.8%). NORMALIZED by US smoker-mix mean (0.61*1.0+0.25*1.3+0.14*2.2=1.243) so the population mix averages to mult 1 (the CDC cancer baseline already embeds the mix). Normalized: never~0.804 / former~1.046 / current~1.770. SOLID-direction; relative magnitudes approximate."
      },
      {
        "from": "smokingStatus", "to": "residual", "form": "smokingCategorical", "input": "smokingStatus",
        "rr": { "never": 1.0, "former": 2.0, "current": 6.0 },
        "provenance": "COPD slice of residual; stronger smoking gradient never 1.0 / former 2.0 / current 6.0. NORMALIZED by mix mean (0.61+0.50+0.84=1.95): never~0.513 / former~1.026 / current~3.077. Applied to the whole residual bucket as an approximation (COPD is the dominant smoking-attributable residual cause). APPROXIMATE."
      },
      {
        "from": "alcohol", "to": "cancer", "form": "directLogLinear", "input": "alcohol",
        "beta": 0.05,
        "provenance": "Bagnardi 2015 (breast/CRC/liver-driven): small all-cancer slope ~exp(0.05*(drinks/day - popMean)). APPROXIMATE (per-drink all-cancer slope not line-verified)."
      },
      {
        "from": "alcohol", "to": "residual", "form": "directHinge", "input": "alcohol",
        "slope": 0.15, "knee": 2,
        "provenance": "Liver slice of residual; supralinear in heavy drinkers ~exp(0.15*max(0, drinks/day - 2)); negligible at/below ~2 drinks/day. APPROXIMATE."
      },
      {
        "from": "airPollution", "to": "cardiovascular", "form": "directLogLinear", "input": "airPollution",
        "beta": 0.00583,
        "provenance": "Pope 2002: RR 1.06 per +10 ug/m3 PM2.5 => beta=ln(1.06)/10=0.00583 per ug/m3 (deviation from popMean ~8). SOLID*-direction (per-10 not PDF-line-verified)."
      },
      {
        "from": "airPollution", "to": "residual", "form": "directLogLinear", "input": "airPollution",
        "beta": 0.005,
        "provenance": "Respiratory slice of residual; similar small PM2.5 slope ~exp(0.005*(PM25 - popMean)). APPROXIMATE."
      }
    ],
    "causeEdgesNote": "Stage 2 (2026-06-08): CLEAN non-double-counting mediator->cause and direct exogenous->cause multipliers. cause_hazard_c = [v0.3 hazard] * Prod_edges mult_edge; mult=1 at population-average inputs so v0.3 (LE 75.31 M / 80.37 F, 31 tests) reproduces exactly. mediatorThresholdRamp uses a RATIO-to-baseline so mult=1 at the per-age baseline HbA1c (which exceeds the 5.7 threshold at 60+). DEFERRED to Stage 3 (route-once double-count decisions needed; NOT implemented here): smoking->CVD; alcohol->all-cause(MR) bundle; activity->all-cause bundle; BMI/adiposity->cause."
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
