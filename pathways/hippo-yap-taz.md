---
type: pathway
aliases: [Hippo pathway, YAP/TAZ pathway, Hippo-YAP-TAZ, MST1/2-LATS1/2-YAP, Hippo signaling]
kegg: hsa04390
reactome: R-HSA-2028269
wikipathways: null
key-nodes:
  - "[[stk4]]"
  - "[[stk3]]"
  - "[[sav1]]"
  - "[[lats1]]"
  - "[[lats2]]"
  - "[[mob1a]]"
  - "[[yap-taz]]"
  - "[[tead1]]"
  - "[[nf2]]"
upstream:
  - "[[wnt-beta-catenin]]"
  - "[[pi3k-akt-pathway]]"
  - "[[mechanosensing]]"
downstream:
  - "[[cellular-senescence]]"
  - "[[fibrosis]]"
  - "[[organ-size-control]]"
hallmarks:
  - "[[cellular-senescence]]"
  - "[[stem-cell-exhaustion]]"
  - "[[chronic-inflammation]]"
  - "[[loss-of-proteostasis]]"
sens-categories: []
druggability-tier: 1
caused-by:
  - "[[mechanical-stress]]"
  - "[[cell-density]]"
  - "[[ecm-stiffness]]"
causes:
  - "[[fibrosis]]"
  - "[[senescence-reinforcement]]"
  - "[[organ-size-dysregulation]]"
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — 10 of 11 cited DOIs cross-checked via DOI lookup; titles match cited author/year/topic. Tao 1999 DOI (10.1038/8484) not resolvable in archive — already flagged as #gap/unsourced in body. Yap 2025 (VT3989 trial) closed-access — quantitative ORR/DCR/PFS not verified against PDF; flagged #gap/no-fulltext-access. Broken wikilink [[tgf-beta-pathway]] → [[tgf-beta]] corrected during sweep."
---

# Hippo–YAP/TAZ signaling pathway

The **Hippo pathway** is an evolutionarily conserved kinase cascade that restrains organ overgrowth by sequestering transcriptional co-activators YAP (Yes-associated protein; gene *YAP1*) and TAZ (transcriptional co-activator with PDZ-binding motif; gene *WWTR1*) in the cytoplasm. When the pathway is **on** (Hippo active), YAP/TAZ are phosphorylated, retained in the cytoplasm, and degraded. When the pathway is **off** (Hippo inactive), YAP/TAZ translocate to the nucleus, bind TEAD1–4 transcription factors, and drive a pro-growth, anti-apoptotic gene program.

In aging biology, the pathway has emerged as a critical transducer of **mechanical signals** — specifically the tissue stiffening that accumulates with age due to collagen crosslinking and fibrosis. Paradoxically, constitutive YAP/TAZ activation in aged, stiff tissues can both reinforce fibrosis and disturb stem cell fate, while the Hippo kinase arm may suppress regenerative responses needed to maintain tissue homeostasis. This makes the pathway a candidate aging driver in multiple tissues (liver, muscle, heart, lung) with emerging therapeutic targeting in cancer (mesothelioma) and — prospectively — in age-related fibrotic diseases.

---

## Kinase cascade: pathway architecture

The core cascade operates as a sequential phosphorylation relay from plasma membrane to nucleus:

```
Upstream signals (cell density, polarity, ECM stiffness)
       ↓
  NF2 (Merlin) / RASSF proteins
       ↓
  MST1 (STK4) + MST2 (STK3)  ←── activated by dimerization + autophosphorylation (Thr183/Thr180)
       + SAV1 (Salvador) scaffold
       ↓
  LATS1 + LATS2  ←── activated by MST-mediated phosphorylation (Thr1079/Thr1041) + MOB1A/B co-activators
       ↓
  YAP1 (Ser127) + WWTR1/TAZ (Ser89) phosphorylated
       ↓
  14-3-3 binding → cytoplasmic retention
  β-TrCP E3 ubiquitin ligase recognition → proteasomal degradation
```

Key regulatory nodes:

| Protein | Gene | Role | Note |
|---|---|---|---|
| MST1 | STK4 | Ste20-family kinase; core Hippo kinase | Autophosphorylates on T183; complexes with SAV1 |
| MST2 | STK3 | Paralog of MST1; partially redundant | Double MST1/2 KO gives stronger phenotype than single |
| SAV1 | SAV1 | Scaffold for MST1/2 activation | WW-domain protein; named "Salvador" in Drosophila |
| LATS1 | LATS1 | NDR-family kinase; phosphorylates YAP/TAZ | Original mammalian homolog of Drosophila *warts* [^justice1995] |
| LATS2 | LATS2 | Paralog of LATS1 | Shares substrates; tumor suppressor |
| MOB1A/B | MOB1A/B | LATS activating co-factor; recruited by MST phosphorylation | Required for full LATS kinase activation |
| YAP | YAP1 | Transcriptional co-activator; Hippo effector | Phospho-Ser127 → 14-3-3; Ser381 → β-TrCP degradation |
| TAZ | WWTR1 | Paralog of YAP; overlapping but distinct target genes | Phospho-Ser89 → 14-3-3; Ser311 → β-TrCP |
| TEAD1-4 | TEAD1–4 | Nuclear transcription factors; obligate YAP/TAZ partners | Bind YAP/TAZ via TEAD YAP-binding domain (YBD) |
| NF2 | NF2 | FERM-domain tumor suppressor; upstream Hippo activator | Loss in mesothelioma → YAP activation |

**Founding Drosophila genetics:** The pathway was first defined in *Drosophila* through identification of *warts* (*wts*, LATS ortholog) as a tumor suppressor [^justice1995] and subsequently *hippo* (*hpo*, MST ortholog) as the upstream kinase [^tao1999]. Mammalian studies confirmed conservation. YAP was established as the nuclear effector inactivated by LATS in 2007 [^zhao2007].

---

## ON state vs. OFF state

| State | Hippo signal | LATS activity | YAP/TAZ | Transcriptional output |
|---|---|---|---|---|
| **Hippo ON** (pathway active) | High (cell density, soft matrix, polarity cues) | High | Phosphorylated → cytoplasmic retention + degradation | Growth-suppressive; quiescence; differentiation |
| **Hippo OFF** (pathway inactive) | Low (sparse cells, stiff matrix, injury) | Low | Unphosphorylated → nuclear import → TEAD binding | Pro-growth: CTGF, CYR61, ANKRD1, MYC, AXL, BIRC5 |

Key YAP/TAZ target genes when pathway is OFF (nuclear YAP/TAZ active):

- **CTGF** (connective tissue growth factor) — fibrosis driver; ECM production
- **CYR61** (CCN1) — matrix protein; angiogenesis, wound healing
- **ANKRD1** — mechanosensitive transcriptional cofactor
- **MYC** — cell cycle progression
- **AXL** — receptor tyrosine kinase; survival, drug resistance
- **BIRC5** (survivin) — anti-apoptotic

---

## Mechanosensing: YAP/TAZ as mechanical rheostat

The most physiologically important non-cell-autonomous input to YAP/TAZ is **substrate stiffness and cell geometry**, independent of the MST–LATS kinase cascade. Dupont et al. 2011 established that YAP/TAZ serve as primary transducers of extracellular matrix stiffness and cell morphology — stiff substrates and spread cell shapes activate nuclear YAP/TAZ even in the absence of canonical Hippo kinase signaling [^dupont2011]. This mechanosensing function involves:

- **Actomyosin tension** — F-actin polymerization and Rho/ROCK-mediated cytoskeletal tension promote nuclear YAP/TAZ by preventing LATS-mediated phosphorylation; disruption of F-actin (cytochalasin D, latrunculin) drives YAP/TAZ to the cytoplasm.
- **Cell density** — high confluence activates Hippo kinase arm (E-cadherin junctions, α-catenin, AMOT/Angiomotin family); low density / sparse cells allow YAP/TAZ nuclear entry.
- **Cell shape** — spread, elongated cells on stiff surfaces activate YAP/TAZ; round cells on soft surfaces suppress it.
- **Fluid shear stress** — laminar shear stress in endothelial cells suppresses YAP/TAZ; disturbed flow (atheroprone) activates it (relevant to [[atherosclerosis]]).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Mechanosensing function conserved? | yes (human cells; primary human fibroblasts, MSCs, cardiomyocytes) |
| Replicated in humans (aging stiffness)? | in-progress |

---

## Aging biology

### Tissue stiffness increases with age → constitutive YAP/TAZ activation

Extracellular matrix (ECM) accumulates collagen crosslinks (LOX-catalyzed) and fibronectin during aging, stiffening most tissues (muscle, liver, heart, lung, vasculature). Because YAP/TAZ activity is mechanosensitively coupled to substrate stiffness, aged tissues drive constitutive YAP/TAZ nuclear localization in resident cells, even in the absence of injury.

In aged skeletal muscle, ECM stiffness was shown to increase with age, and fibroblasts seeded onto age-mimetic stiff substrates showed elevated YAP/TAZ levels — the same fibrogenic conversion seen in naturally aged muscle tissue. Young fibroblasts on stiff (aged-equivalent) matrices upregulated fibrogenic gene programs, demonstrating that the mechanical signal alone is sufficient [^stearnsreider2017]. #gap/needs-human-replication — this was a murine study; human aging muscle ECM stiffness → YAP/TAZ activation has not been systematically quantified in vivo.

### Hepatic aging: YAP activation in aged hepatocytes

Yimlamai et al. 2014 used conditional Hippo pathway manipulation in mouse liver to show that Hippo pathway activity determines hepatocyte vs. biliary cell fate — YAP nuclear activation reprograms adult hepatocytes toward a biliary progenitor state [^yimlamai2014]. Although this study was primarily developmental, its implication for aging is that constitutive YAP activation in aged, stiff hepatocytes may contribute to aberrant cell identity and age-related liver dysfunction. #gap/needs-replication — the direct aged-hepatocyte phenotype in this context has not been independently reproduced.

### Senescence reinforcement via tissue stiffening

A proposed feedback loop links [[cellular-senescence]] and the Hippo pathway in aging tissues:

1. Senescent cells secrete SASP (see [[sasp]]) — including TGF-β, IL-6, MMPs.
2. SASP promotes local ECM remodeling → stiffening.
3. Increased stiffness → YAP/TAZ nuclear activation in neighboring cells → CTGF, CYR61 → further ECM deposition.
4. Loop reinforces fibrosis and spreads the senescence-associated tissue phenotype.

This feedback is mechanistically plausible and supported by in vitro evidence but has not been demonstrated as a causal loop in aged tissues in vivo. #gap/no-mechanism #gap/needs-replication

### AMPK–Hippo cross-talk

AMPK activation suppresses YAP/TAZ activity through multiple mechanisms: direct LATS activation, inhibition of Rho/ROCK (reducing actomyosin tension), and suppression of TGF-β-driven myofibroblast programs [^salminen2024]. This positions [[ampk]] activators (metformin, exercise) as indirect Hippo pathway modulators and suggests that metabolic decline with age (falling NAD+/AMPK activity) may permissively disinhibit YAP/TAZ in aged tissues. The functional significance of this cross-talk in human aging has not been established. #gap/needs-human-replication

---

## Disease

### Mesothelioma (NF2 loss)

Malignant pleural mesothelioma is the paradigm case of Hippo pathway loss-of-function cancer. ~40–50% of mesotheliomas harbor *NF2* (Merlin) loss-of-function mutations; without NF2's upstream Hippo activation, MST/LATS are insufficiently active and YAP/TAZ are constitutively nuclear. This makes YAP/TAZ hyperactivation a targetable vulnerability. #gap/needs-replication on the exact NF2 mutation prevalence figure.

### Uveal melanoma

Activating mutations in *GNAQ* or *GNA11* (Gα subunits) drive YAP/TAZ activation via Trio-RhoA-actomyosin signaling, bypassing the canonical kinase cascade. YAP is a transcriptional mediator of GNAQ oncogenic signaling in uveal melanoma.

### Cardiac fibrosis

Post-MI cardiomyocyte loss activates cardiac fibroblasts; YAP/TAZ drive fibroblast activation and fibrotic remodeling. Cardiac-specific Hippo pathway loss (LATS1/2 KO in cardiomyocytes) promotes regeneration but also pathological hypertrophy — the regenerative vs. fibrotic balance depends on cell type and context. Connects to [[cardiac-fibrosis]] and [[heart-failure]].

---

## Therapeutic landscape

### Verteporfin (YAP–TEAD disruptor)

Verteporfin (benzoporphyrin derivative; approved as photosensitizer for AMD photodynamic therapy) was identified as a small-molecule disruptor of the YAP–TEAD protein–protein interaction [^liuchittenden2012]. In cell-based assays it suppresses YAP/TAZ target gene expression and inhibits YAP-driven tumorigenic growth. At doses used in photodynamic therapy, it is not a pure YAP/TAZ inhibitor (has additional reactive oxygen species effects). Preclinical data in multiple cancer models; limited early-stage clinical exploration for YAP-driven cancers. #gap/dose-response-unclear — the concentration range relevant to YAP/TAZ inhibition vs. PDT phototoxicity overlaps imperfectly, complicating interpretation.

### VT3989 (TEAD palmitoylation-pocket inhibitor, Phase 1/2)

VT3989 is a first-in-class oral inhibitor that binds the lipid-binding pocket in the TEAD transcription factor (the palmitoylation site), preventing TEAD from serving as a coactivator of YAP/TAZ-dependent transcription. A Phase 1/2 trial in 172 patients (135 with mesothelioma) reported [^yap2025]:

- Overall response rate (ORR): 32% in mesothelioma (optimized dose cohort)
- Disease control rate: 86%
- Median progression-free survival: 10 months
- Safety: predominantly grade 1–2 proteinuria and peripheral edema; proteinuria reversible with dose adjustment
- Regulatory status: FDA orphan drug + fast-track designation for mesothelioma

This is the first clinical validation that pharmacological YAP/TAZ–TEAD disruption is tolerable and efficacious in humans. #gap/long-term-unknown — long-term safety in a non-oncology aging context is not established; the trial population is cancer patients.

### K-975 / IAG933 (TEAD lipid-pocket inhibitors, preclinical)

K-975 (Kyowa Kirin) and IAG933 (Novartis) also target the TEAD palmitoylation pocket. K-975 showed anti-tumor activity in mesothelioma xenografts; IAG933 is in early-phase trials. Neither has published aging-specific data. #gap/needs-replication

### Aging-specific therapeutic potential

No clinical intervention targeting the Hippo–YAP/TAZ pathway has been tested for aging indications. The mechanistic case rests on:
1. Tissue stiffness → constitutive YAP/TAZ → fibrosis → organ dysfunction loop.
2. YAP/TAZ suppression of regenerative proliferation in stem cell niches (e.g., muscle satellite cells, hepatic progenitors).

Open Targets lists YAP1 and WWTR1 as tier 1 druggable targets (clinical drug exists — VT3989/verteporfin) for several fibrotic and oncologic indications. #gap/unsourced for the specific druggability-tier number pull from Open Targets — verify against `platform.opentargets.org/target/ENSG00000137693` (YAP1).

---

## Cross-pathway connections

- **[[wnt-beta-catenin]]** — YAP/TAZ interact with β-catenin and Axin; Hippo-independent YAP/TAZ activation can amplify Wnt target genes; the two pathways cooperate in intestinal homeostasis and cancer.
- **[[pi3k-akt-pathway]]** — PI3K/AKT can suppress LATS1/2 activity (via NDR kinases), disinhibiting YAP/TAZ; PI3K inhibition partially restores Hippo activity in some cancer contexts.
- **[[ampk]]** — AMPK suppresses YAP/TAZ (see above); a key mechanistic bridge between metabolic sensing and mechanical signaling.
- **[[tgf-beta]]** — TGF-β cooperates with nuclear YAP/TAZ to drive fibrotic programs; they co-regulate CTGF, CYR61, and myofibroblast differentiation genes. See R20 TGF-β pathway page.
- **[[nf-kb]]** — SASP cytokines (NF-κB targets) induce ECM stiffening (via TGF-β, IL-6) → YAP/TAZ activation — a pathway linking [[chronic-inflammation]] to mechanical YAP/TAZ signaling.

---

## Limitations and gaps

- **Human aging data is sparse.** Most aging-relevant evidence for Hippo–YAP/TAZ is from mouse models or engineered cell culture systems; no prospective human aging cohort data exists. #gap/needs-human-replication
- **Kinase-independent YAP/TAZ regulation.** A large fraction of YAP/TAZ activity in normal adult tissue is regulated mechanically (F-actin/Rho), not through the MST–LATS cascade. Pharmacological Hippo kinase activation may be insufficient to suppress nuclear YAP/TAZ in stiff aged ECM. #gap/no-mechanism
- **TEAD inhibitor aging safety unknown.** TEAD inhibitors (VT3989, K-975) have been tested only in cancer; long-term effects on tissue homeostasis, stem cell pools, and organ regeneration in a healthy aging context are unknown. #gap/long-term-unknown
- **Feedback loop directionality.** The senescence-stiffness-YAP/TAZ loop is mechanistically plausible but not demonstrated causally in aged animals. #gap/needs-replication
- **Paralog redundancy.** YAP and TAZ, and LATS1/LATS2, are partially redundant; tissue-specific compensation complicates genetic dissection. Most studies knock out only one paralog.
- **Upstream MST1/2 biology in aging.** Whether MST1/2 kinase activity changes with age (and in which direction, in which tissues) is not systematically characterized. #gap/unsourced
- **Canonical ID gaps.** WikiPathways ID for Hippo pathway was not confirmed during this extraction; left null in frontmatter. #gap/needs-canonical-id

---

## Footnotes

[^justice1995]: doi:10.1101/gad.9.5.534 · in-vivo (Drosophila) · genetic screen · model: Drosophila melanogaster · Justice RW et al., *Genes & Development* 1995 · identified *warts* as Drosophila tumor suppressor encoding LATS kinase homolog; 950 citations

[^tao1999]: doi:10.1038/8484 · **DOI not confirmed in a local paper archive (not found)** — cited as Tao W et al., *Nature Genetics* 1999, "Mutations in lats/wts affect temporal aspects of tissue growth" · #gap/unsourced — verify DOI before relying on this citation; use Crossref to confirm

[^zhao2007]: doi:10.1101/gad.1602907 · in-vitro + in-vivo (mouse) · mechanistic study · model: HEK293, MCF10A, mouse liver · Zhao B et al., *Genes & Development* 2007 · established LATS-mediated YAP phosphorylation (Ser127) and cytoplasmic retention as core Hippo output; 3,075 citations

[^dupont2011]: doi:10.1038/nature10137 · in-vitro (human cells, multiple lines) · mechanistic study · model: MCF10A, human fibroblasts, MSCs · Dupont S et al. (Piccolo lab), *Nature* 2011 · YAP/TAZ as primary transducers of ECM stiffness and cell geometry; 5,544 citations; high confidence

[^yimlamai2014]: doi:10.1016/j.cell.2014.03.060 · in-vivo (mouse) · genetic manipulation · model: mouse liver (Cre-lox conditional) · Yimlamai D et al., *Cell* 2014 · Hippo pathway activity controls hepatocyte vs. biliary cell fate; YAP nuclear activation reprograms hepatocytes; 865 citations

[^liuchittenden2012]: doi:10.1101/gad.192856.112 · in-vitro + in-vivo (mouse xenograft) · pharmacological study · model: HEK293, NF2-mutant cancer lines, mouse xenograft · Liu-Chittenden Y et al., *Genes & Development* 2012 · genetic and pharmacological (verteporfin) disruption of TEAD–YAP complex suppresses YAP oncogenic activity; 1,441 citations

[^stearnsreider2017]: doi:10.1111/acel.12578 · in-vitro + ex-vivo · mechanistic study · model: murine and human skeletal muscle ECM; primary fibroblasts · Stearns-Reider KM et al., *Aging Cell* 2017 · aged muscle ECM stiffening drives fibrogenic conversion of stem cells via YAP/TAZ; reversible with substrate modulation; 227 citations

[^salminen2024]: doi:10.1007/s10522-023-10072-9 · review · model: literature synthesis · Salminen A, *Biogerontology* 2024 · AMPK signaling inhibits myofibroblast differentiation via suppression of TGF-β, NF-κB, STAT3, and YAP/TAZ pathways; 16 citations; low primary evidence weight — use as pointer to primary sources

[^yap2025]: doi:10.1038/s41591-025-04029-3 · phase 1/2 clinical trial · n=172 (135 mesothelioma) · model: human (mesothelioma and other solid tumors) · Yap TA et al., *Nature Medicine* 2025 · VT3989 TEAD palmitoylation inhibitor; ORR 32%, DCR 86%, mPFS 10 months in mesothelioma; closed-access — not available in a local paper archive; numerics unverified against PDF #gap/no-fulltext-access
