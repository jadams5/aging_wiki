---
type: study
doi: 10.1038/s41598-022-05323-7
pmid:
pmc:
title: "Liraglutide, a glucagon-like peptide 1 receptor agonist, exerts analgesic, anti-inflammatory and anti-degradative actions in osteoarthritis"
authors: [Meurot C, Martin C, Sudre L, Breton J, Bougault C, Rattenbach R, Bismuth K, Jacques C, Berenbaum F]
year: 2022
journal: Scientific Reports
study-design: in-vivo
organism: mus-musculus
n-subjects: 169
intervention: ["[[liraglutide]]"]
hallmarks-tested: ["[[chronic-inflammation]]"]
human-evidence: partial
peer-reviewed: true
preregistered: false
key-findings: [glp1r-expressed-in-cartilage-and-synovium, ia-liraglutide-analgesic, anti-synovitis, m1-to-m2-macrophage-polarization, anti-catabolic-on-chondrocytes, glp1r-dependent-via-exendin-9-39]
local-pdf: null
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Full PDF read end-to-end on 2026-05-08. All quantitative claims (mouse n's, IC50/EC50 values, p-values, dose ranges, body-weight neutrality, exendin-9-39 reversal, mRNA fold-changes) cross-checked against figures and main text. Author list, COI disclosures, and reference 44 (Gudbergsen 2021 negative systemic-liraglutide OA RCT) confirmed against PDF. PubChem/ChEMBL identity of liraglutide not re-verified (out of scope for this study page)."
---

# Liraglutide exerts analgesic, anti-inflammatory and anti-degradative actions in osteoarthritis (Meurot et al. 2022)

## TL;DR

Combined in vivo (MIA mouse OA model) + in vitro (IL-1β-stimulated primary chondrocytes; LPS-stimulated RAW 264.7 macrophages) study showing that **intra-articular (IA) liraglutide is analgesic, anti-inflammatory, and anti-catabolic in OA**, with all effects reversed by the GLP-1R competitive antagonist exendin-9-39 — establishing GLP-1R as the on-target receptor in joint cells. The first paper to demonstrate GLP-1R protein expression in human OA articular cartilage and synovial membrane. **The intra-articular delivery framing is critical** — the authors cite the negative Gudbergsen 2021 systemic-liraglutide OA RCT [^gudbergsen2021] as evidence that systemic delivery cannot achieve sufficient joint concentrations, motivating the IA pivot. Significant commercial COI: senior authors are CEOs of 4P-Pharma + 4Moving Biotech and hold patents on GLP-1 analogs for OA.

## Design

### In vivo (MIA mouse OA)

**Sodium monoiodoacetate (MIA) model** — the standard chemical-induction OA mouse model. MIA inhibits chondrocyte glycolysis, causing chondrocyte death and subsequent OA-like joint degradation with reproducible pain behaviour.

- **Animals:** 12-week-old male wild-type C57Bl/6 mice (Janvier Labs)
- **Induction:** single IA injection of 0.75 mg / 5 µL MIA in 0.9% saline (pH 7.4) into right knee on day 1
- **Short-term cohort (n=120 total):**
  - Saline/vehicle (n=19), MIA/vehicle (n=18), MIA/liraglutide groups at 1, 5, 10, 20 µg (n=17 each), MIA/dexamethasone 20 µg (n=15)
  - Single IA treatment on day 3
  - Pain assessment (von Frey filaments) on days 2 (randomization), 7, and 10
  - Sacrifice day 11; histology
- **Long-term cohort (n=49 total):**
  - Saline/vehicle (n=9), MIA/vehicle (n=10), MIA/liraglutide 20 µg (n=10), MIA/dexamethasone 20 µg (n=10)
  - Three IA injections: days 8, 15, and 22 (once-weekly × 3)
  - Pain assessment days 7, 14, 21, 28; sacrifice day 29
- **Pain readout:** paw withdrawal threshold via Semmes-Weinstein von Frey filaments (forces 0.008–1.0 g)
- **Histology:** Krenn synovitis score on H&E sections (blinded assessment by two examiners)

### In vitro

- **Murine primary chondrocytes** isolated from articular cartilage of 6-day-old C57Bl/6 pups; chondrocyte phenotype confirmed by Sox9/Col2a1/Acan expression and Alcian blue/Safranin O staining. Used at passage 0.
- **RAW 264.7 murine macrophage cell line** (ATCC TIB-71); used before passage 20.
- **Stimuli:** IL-1β 2 ng/mL (chondrocytes) or LPS 100 ng/mL (RAW 264.7); 24 h
- **Liraglutide doses:** 10-point dose response, 6.6 nM to 3.4 µM (24 h co-treatment); long-term anti-catabolic experiments at 50 nM × 72 h
- **Antagonist (mechanism):** exendin-9-39 at 25, 50, 100 nM; co-treatment with 50 nM liraglutide
- **Readouts:**
  - Cytokines/mediators by ELISA: NO (Griess), PGE₂, IL-6, MMP-3, MMP-13
  - mRNA by RT-qPCR: iNos, Cox2, Tnf-α (chondrocytes); Il-6, Cox2, Tnf-α, Mcp-1, Cd38, Erg-2 (macrophages); Mmp-3, Mmp-13, Adamts4, Adamts5 (chondrocyte catabolism)
  - GAG release into supernatant (cartilage matrix degradation surrogate)

### Human samples (limited scope — IHC only)

- **6 human OA patients** undergoing arthroplasty at Saint-Antoine Hospital, Paris (3 women, 3 men; ages 68–83 women, 71–83 men; Mankin score 1.5–14/14). 10 mm² cartilage + subchondral bone plugs and synovial membrane samples; used solely for GLP-1R immunohistochemistry, not for any functional/intervention assays.

## Key results

### 1. GLP-1R is expressed in articular cartilage and synovial membrane (human + mouse)

IHC of human OA knee sections from 6 patients: chondrocytes express GLP-1R protein in superficial and intermediate cartilage layers (Fig 1a). Synovial membrane shows positive GLP-1R in intima and blood vessel walls (Fig 1b). Non-OA mouse knee sections similarly show GLP-1R+ chondrocytes (tibial + femoral articular), meniscus, and bone marrow (Fig 1c–d). RT-qPCR on RNA from primary human chondrocytes (cartilage explants from 18 OA patients) confirms GLP-1R mRNA expression (data not shown — author claim).

**Significance:** first protein-level demonstration of GLP-1R expression in OA-affected joint tissues in humans. Establishes the molecular target for joint-directed GLP-1 RA therapy.

### 2. Single IA liraglutide injection is analgesic in short-term MIA mouse OA

Day 3 IA injection of liraglutide produced dose-dependent rescue of MIA-induced mechanical allodynia by day 7 and day 10 (Fig 2a):

| Dose | p value vs MIA/vehicle (day 7) |
|---|---|
| 1 µg | 0.0196 (day 10) |
| 5 µg | <0.0001 |
| 10 µg | 0.0011 |
| 20 µg | <0.0001 (day 7); <0.0001 (day 10); **superior to dexamethasone 20 µg, p<0.0001** |

**Calculated EC50 = 11 µg** (Fig 2b). 20 µg liraglutide outperformed the 20 µg dexamethasone positive control on day 10.

### 3. Repeated IA liraglutide is analgesic over 28 days, no body weight effect

Long-term cohort (weekly 20 µg IA × 3 injections, days 8/15/22):
- Significant improvement vs MIA/vehicle: liraglutide day 14 p=0.0098, day 28 p=0.0038; dexamethasone day 14 p=0.0568 (NS), day 28 p=0.0002
- After second and third injections (days 21, 28), liraglutide and dexamethasone effects were comparable
- **No significant body weight differences** between treatment groups in either short-term or long-term studies (Suppl. Fig 1) — pain and synovitis effects dissociate from systemic metabolic actions of GLP-1R agonism

### 4. Liraglutide reduces synovitis (anti-inflammatory in vivo)

H&E + Krenn synovitis scoring at day 11 (Fig 3a–b):
- Saline/vehicle vs MIA/vehicle: p<0.0001 (model induced synovitis)
- MIA/liraglutide 20 µg vs MIA/vehicle: p=0.0099 (significant reduction)
- MIA/dexamethasone 20 µg vs MIA/vehicle: p=0.1288 (NOT significant — liraglutide outperformed dex on this endpoint)

**Synovitis-pain coupling (Fig 3c):** linear regression of synovitis score vs day-10 von Frey paw withdrawal threshold yielded **R² = 0.91, p<0.0001** — a remarkably tight observational coupling between joint inflammation and pain across animals.

### 5. Anti-inflammatory in vitro — chondrocytes (IL-1β-stimulated)

10-dose liraglutide × IL-1β-stimulated primary chondrocytes (Fig 4a):

| Mediator | IC50 (nM) | 95% CI |
|---|---|---|
| NO (Griess) | 45 | 41–50 |
| PGE₂ (ELISA) | 48 | 43–53 |
| IL-6 (ELISA) | 38 | 34–44 |

mRNA (Fig 4b; doses 13.3, 53.1, 1700 nM): iNos, Cox2, and Tnf-α dose-dependently reduced (p=0.0286 vs IL-1β alone). LDH non-cytotoxic confirmed.

### 6. Anti-inflammatory in vitro — macrophages (LPS-stimulated RAW 264.7)

10-dose liraglutide × LPS-stimulated RAW 264.7 (Fig 5a):

| Mediator | IC50 (nM) | 95% CI |
|---|---|---|
| NO | 38 | 34–44 |
| PGE₂ | 54 | 49–59 |
| IL-6 | 41 | 37–45 |

mRNA: Il-6, Cox2, Tnf-α dose-dependently reduced (p=0.0286).

### 7. Liraglutide drives M1→M2 macrophage repolarization

Fig 5c: in LPS-stimulated RAW 264.7 cells co-treated with liraglutide:
- **M1-associated genes ↓:** Mcp-1, Cd38
- **M2-associated gene ↑:** Erg-2

Establishes liraglutide's effect on macrophage phenotype is not just cytokine suppression but a polarization shift toward the anti-inflammatory M2 state — the same state correlated with reduced cartilage damage in mouse synovial macrophage-depletion experiments cited in the Discussion.

### 8. GLP-1R is the on-target receptor (exendin-9-39 reversal)

Fig 6: 100 nM exendin-9-39 (GLP-1R competitive antagonist) **completely reversed** the anti-inflammatory effect of 50 nM liraglutide in both chondrocytes and macrophages (NO, PGE₂, IL-6 all restored to LPS/IL-1β-only levels). Dose-dependent reversal at 25, 50, 100 nM exendin-9-39. p=0.0022 (chondrocytes), p=0.026 / p=0.0022 (macrophages).

**This is the cleanest mechanism statement in the paper** — it confirms the effect is mediated by GLP-1R, not an off-target action of liraglutide.

### 9. Anti-catabolic on chondrocytes

Fig 7a: 10-dose liraglutide × IL-1β-stimulated primary chondrocytes → cartilage degradation enzymes:

| Enzyme/marker | IC50 (nM) | 95% CI |
|---|---|---|
| MMP-3 (secreted) | 56 | 52–62 |
| MMP-13 (secreted) | 58 | 53–64 |
| GAG release (rGAG) | 45 | 31–67 |

mRNA reductions in Mmp-3, Mmp-13, Adamts4, Adamts5 (p=0.0286).

Long-term anti-degradative experiment (Fig 7c): 50 nM liraglutide × 72 h × 2 ng/mL IL-1β rescued IL-1β-induced GAG release from chondrocyte ECM (p=0.0227).

## Negative human counterpoint cited in this paper

The Discussion explicitly addresses **Gudbergsen et al. 2021** (*Am J Clin Nutr* 113:314–323; doi:10.1093/ajcn/nqaa328) [^gudbergsen2021], which reported that daily systemic liraglutide injections in OA-with-obesity patients (after diet-induced weight loss) **did NOT ameliorate OA-related pain**. The Meurot authors interpret this as a failure of *delivery* — "probably because of poor access and hence poor local concentrations of liraglutide in the knee joint" — and pivot the therapeutic framing to intra-articular delivery. This is the central translational caveat of the paper: a positive IA mouse + in-vitro story exists in tension with a negative systemic-delivery human RCT. Resolution requires either an IA human trial or a systemic agent that achieves higher joint concentrations (the position taken by Qin et al. 2026 for semaglutide [^qin2026], which reports positive systemic-delivery effects in mice).

## Mechanism summary as stated by authors

> Targeting inflammation and cartilage breakdown in two main cellular actors of the diseased joint, and alleviating pain in vivo, confers to liraglutide the properties of a potential disease modifier, which could constitute a new treatment for OA.

The proposed pathway: liraglutide → joint chondrocyte/synovial macrophage GLP-1R → reduced NF-κB / PI3K-Akt-driven inflammatory transcription → ↓ NO, PGE₂, IL-6, MMPs, ADAMTS → reduced synovitis (in vivo) → reduced pain (DRG nociceptor desensitization). The authors note that prior work (Chen et al. 2018 ref 35, Que et al. 2019 ref 37) implicates ER-stress reduction and PKA/CREB-mediated effects but emphasize that **the analgesic mechanism of liraglutide had not been previously reported** — this paper is the first to establish IA liraglutide analgesia in MIA OA.

## Strengths

- Integrated in-vivo + in-vitro design with cell-type dissection (chondrocyte vs macrophage)
- Genetic-pharmacology mechanism confirmation via exendin-9-39 reversal
- Dose-response IC50/EC50 quantification
- Cross-species GLP-1R expression confirmation (human OA + mouse)
- Synovitis-pain correlation (R²=0.91) is an elegant single-figure summary of the inflammation-pain coupling
- Open access (CC-BY 4.0), full local PDF available

## Limitations

- **Significant commercial COI** — senior authors are CEOs of 4P-Pharma and 4Moving Biotech; hold patents on GLP-1 analogs for OA treatment (PCT/FR2013/051998, PCT/IB2018/059100). Independent replication is essential.
- **MIA model limitations** — chemical chondrocyte-toxicity model, not slowly progressive degenerative OA; the authors note the need for follow-up in DMM (destabilization of medial meniscus) for structural endpoints. No DMM data in this paper.
- **In vitro and short-duration in vivo only** — mechanism work is 24 h in cells; in vivo is up to 28 days. No long-term cartilage structural data.
- **Human data is IHC only** — no functional or interventional human work in this paper. n=6 patients for cartilage IHC, n=18 for chondrocyte explant RT-qPCR; both small.
- **Anti-degradative claim relies on small-n in vitro work** ("small number of experiments performed"; authors flag this as a limitation; require DMM in vivo to validate).
- **No body weight effect in mice** is technically a strength for the local-action argument but means the paper doesn't address whether systemic GLP-1 RA + weight loss adds incremental benefit.
- Macrophage M1/M2 framing is acknowledged by authors as a simplification of in-vivo polarization plasticity.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | GLP-1R protein expression confirmed in human OA cartilage + synovium (this paper) |
| Phenotype conserved in humans? | partial | Pain/synovitis pathophysiology conserved; cartilage degradation enzymes (MMP-3/13, ADAMTS4/5) conserved |
| Replicated in humans? | **no — counter-evidence exists** | Systemic liraglutide failed in Gudbergsen 2021 [^gudbergsen2021]; no IA-liraglutide RCT exists. The closest contemporary human signal is the Qin 2026 ChiCTR2200066291 pilot for semaglutide (different agent, systemic dose) [^qin2026] |

## Cross-references

- [[liraglutide]] — compound page (stub as of 2026-05-08; should be expanded with this paper's findings as the "joint / OA" section anchor)
- [[glp1-agonists]] — class page; should add a "Joint and cartilage" section consolidating this study + Qin 2026
- [[osteoarthritis]] — phenotype page (newly seeded 2026-05-08)
- [[chronic-inflammation]] — local synovitis + macrophage M1/M2 axis is the hallmark intersection
- [[glp1r]] — receptor (implicit stub); first protein-level expression confirmation in OA joint tissues here
- Companion / counterpoint study: [[studies/qin-2026-semaglutide-oa]] (semaglutide; weight-loss-independent; systemic delivery)
- Negative human RCT for systemic liraglutide: [^gudbergsen2021]

## Footnotes

[^gudbergsen2021]: doi:10.1093/ajcn/nqaa328 · rct · n=156 · Gudbergsen H et al. · *Am J Clin Nutr* 2021;113:314–323 · "Liraglutide after diet-induced weight loss for pain and weight control in knee osteoarthritis" · cited as reference 44 in [^meurot2022-this-paper] · daily systemic liraglutide did NOT ameliorate OA pain after diet-induced weight loss · primary source not yet retrieved; n and effect-size figures are derived from Meurot 2022 narrative — verify against original PDF before relying on quantitative claims

[^qin2026]: [[studies/qin-2026-semaglutide-oa]] · companion semaglutide-OA paper; systemic-delivery, weight-loss-independent · doi:10.1016/j.cmet.2026.01.008

[^meurot2022-this-paper]: this study; doi:10.1038/s41598-022-05323-7 · Meurot et al. *Sci Rep* 2022;12:1567
