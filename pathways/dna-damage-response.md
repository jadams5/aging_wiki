---
type: pathway
aliases: [DDR, DNA damage response pathway, DNA damage signaling, genotoxic stress response]
kegg: hsa03450
reactome: R-HSA-73894
wikipathways: WP707
key-nodes: ["[[mre11]]", "[[rad50]]", "[[nbn]]", "[[rpa]]", "[[parp1]]", "[[atm]]", "[[atr]]", "[[dna-pk]]", "[[h2ax]]", "[[mdc1]]", "[[53bp1]]", "[[brca1]]", "[[chk1]]", "[[chk2]]", "[[cgas]]", "[[fanci]]", "[[trim41]]", "[[vcp]]"]
upstream: ["[[genomic-instability]]", "[[replication-stress]]", "[[oxidative-stress]]", "[[telomere-shortening]]"]
downstream: ["[[p53-pathway]]", "[[cell-cycle-arrest]]", "[[cellular-senescence]]", "[[apoptosis-pathway]]", "[[dna-repair]]"]
hallmarks: ["[[genomic-instability]]", "[[cellular-senescence]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "ncb1909 (Rodier 2009) and ncb2170 (Di Micco 2011) verified against local PDFs; Jackson & Bartek 2009 and Ciccia & Elledge 2010 verified against downloaded PMC/OA PDFs; Rogakou 1998 JBC verified against downloaded PDF; Hoeijmakers 2009 NEJM not verifiable (download failed — green OA but PDF fetch failed; claims attributed to it are consistent with Jackson & Bartek 2009 which cover the same ground); Shiloh & Ziv 2013, Zou & Elledge 2003, San Filippo 2008, Lieber 2010 not_oa — claims attributed to them are mechanistically consistent with verified sources; 2026-05-12 supplement: Chen 2025 Science (doi:10.1126/science.adp5056) nuclear-cGAS HR-regulation section added from abstract only — #gap/no-fulltext-access; Liu 2018 Nature cited from secondary framing in Chen 2025 abstract"
---


# DNA damage response (DDR) pathway

The **DNA damage response** is the cellular surveillance system that detects DNA lesions, signals their presence, and orchestrates one of four outcomes: faithful repair, checkpoint-arrested repair, permanent senescence, or apoptosis. It is the **convergence point for the [[genomic-instability]] hallmark** of aging — progressive accumulation of unrepaired lesions is both a driver and a consequence of aging tissue dysfunction.

The DDR is not a single linear pathway but a web of parallel sensing-transduction-effector modules that respond to distinct lesion types [^jackson2009]. Its central logic is three-tiered: **sensors** detect lesions; **transducer kinases** amplify the signal; **effectors** execute the cellular response. For the downstream transcriptional programs that p53 executes, see [[p53-pathway]].

Canonical pathway IDs: KEGG `hsa03450` (NHEJ) · `hsa03440` (HR) · `hsa03430` (MMR) · `hsa04115` (p53 signaling) · Reactome `R-HSA-73894` (DNA Repair) · `R-HSA-5693606` (DNA Double-Strand Break Repair) · `R-HSA-69473` (G2/M DNA damage checkpoint) · WikiPathways `WP707` (DNA damage response).

---

## Lesion types and the sensors that detect them

| Lesion type | Major cause(s) | Primary sensor(s) | Transducer |
|---|---|---|---|
| Double-strand break (DSB) | Ionising radiation, replication-fork collapse, reactive oxygen species, V(D)J / class-switch recombination | MRN complex (MRE11–RAD50–NBN) | [[atm]] |
| Single-stranded DNA (ssDNA) / replication fork stalling | UV, replication stress, nucleotide depletion, hydroxyurea | RPA (coats exposed ssDNA) → ATRIP | ATR |
| Single-strand break (SSB) / base damage | Reactive oxygen species, alkylating agents, spontaneous depurination | PARP1, AP endonuclease (APE1) | PARP / ATR |
| Bulky adducts (helix-distorting) | UV-B, polycyclic aromatic hydrocarbons | XPC–RAD23B (global NER) / RNA Pol II stalling (TC-NER) | ATR |
| Mismatched bases | Replication errors | MutSα (MSH2–MSH6), MutLα (MLH1–PMS2) | ATR (after resection) |

### MRN complex: the DSB sensor

The **MRN complex** (MRE11–RAD50–NBN/NBS1) is the first responder to double-strand breaks [^jackson2009]. It is recruited within seconds of DSB formation, before any amplification signal exists:

- **MRE11** — nuclease that generates the initial 3′-ssDNA overhang by resecting DSB ends (endo- and exonuclease activity). Mutations cause Nijmegen breakage syndrome-like disorder (ATLD).
- **RAD50** — coiled-coil ATPase with a hook domain; tethers broken DNA ends; may bridge sister chromatids.
- **NBN (NBS1)** — regulatory/scaffolding subunit; recruits [[atm]] to DSBs via direct interaction; mutations cause Nijmegen breakage syndrome (NBS).

MRN activates [[atm]] allosterically: MRN-bound [[atm]] dimers autophosphorylate at Ser1981 and monomerise → activated monomers phosphorylate DDR substrates [^shiloh2013].

### RPA → ATRIP → ATR: the ssDNA sensor

Single-stranded DNA coated by **RPA** (Replication Protein A, the heterotrimeric ssDNA-binding protein) recruits **ATRIP** (ATR-Interacting Protein) [^zouellledge2003]. ATRIP forms a stable complex with **ATR** and targets it to RPA-ssDNA:

```
ssDNA (exposed at stalled fork or resected DSB) → RPA binding → ATRIP–ATR recruitment
→ ATR activation (also requires TopBP1 / ETAA1 co-activators) → CHK1 phosphorylation
```

This places ATR downstream of both primary replication stress AND secondary DSB processing (because DSB resection generates ssDNA, feeding both the ATM and ATR pathways in S phase).

### PARP1: SSB sensor and first responder

**PARP1** (Poly-ADP-ribose polymerase 1) binds SSBs with high affinity within milliseconds of formation and synthesises PAR chains (poly-ADP-ribose) on itself and surrounding chromatin, providing a scaffold for repair factors [^ciccia2010]. In SSB repair:

- PARP1 activation → XRCC1 recruitment → DNA ligase III → ligation (short-patch BER)
- PARP1 is also activated by DSBs and replication gaps; its inhibition (PARP inhibitors, PARPi) in BRCA1/2-deficient cells kills cells via synthetic lethality (conversion of SSBs into DSBs at the replication fork)

---

## Transducer kinases

All three major DDR kinases belong to the **PIKK** (phosphatidylinositol 3-kinase–like kinase) family and phosphorylate S/TQ motifs. They share substrates but have distinct sensory inputs.

### ATM — the DSB kinase

[[atm]] (Ataxia-Telangiectasia Mutated) is the primary transducer for **double-strand breaks** [^shiloh2013]. It phosphorylates hundreds of substrates, including:

- **H2AX** at Ser139 (γH2AX) — spreading 1–2 Mb from the DSB; marks the repair domain
- **CHK2** at Thr68 — amplifying checkpoint signal; CHK2 phosphorylates [[p53]] (Ser20) and CDC25A/C
- **[[p53]]** at Ser15 — direct stabilisation (also phosphorylated by ATR and DNA-PK)
- **BRCA1**, **MDC1**, **53BP1** — mediator recruitment and signal amplification
- **RAD51**, **PALB2** — HR initiation in S/G2

Loss-of-function mutations in *ATM* cause **ataxia-telangiectasia** (A-T): cerebellar degeneration, radiosensitivity, immunodeficiency, ~100-fold increased cancer risk — confirming ATM as a non-redundant DSB transducer in humans. See the [[atm]] protein page for detailed kinase domain structure and substrate list.

### ATR — the replication stress kinase

**ATR** (ATM- and Rad3-related) is activated by RPA-ssDNA and is essential for S-phase viability (ATR knockout is embryonic lethal, unlike *Atm*−/− mice which are viable) [^ciccia2010]. Key substrates:

- **CHK1** at Ser317/345 — the primary ATR effector checkpoint kinase; phosphorylates CDC25A (degradation) and CDC25C (cytoplasmic sequestration) → CDK1/2 inhibition → S and G2/M checkpoint
- **RPA32** at Ser33 — modulates RPA binding dynamics
- **H2AX** — contributes to γH2AX at stalled forks
- **RAD51**, **FANCD2** — HR and Fanconi anemia pathway activation

ATR → CHK1 → CDC25 forms the canonical **intra-S and G2/M checkpoint** axis that prevents mitotic entry with under-replicated or damaged DNA.

### DNA-PK — the NHEJ kinase

**DNA-PK** (DNA-dependent protein kinase; catalytic subunit **DNA-PKcs**, encoded by *PRKDC*) is activated by the **Ku70–Ku80** heterodimer that binds directly to DNA ends at DSBs. DNA-PK drives **NHEJ** (non-homologous end-joining) and also contributes to DDR signaling [^ciccia2010]:

- Phosphorylates **H2AX** (Ser139) — contributes to γH2AX along with ATM and ATR
- Autophosphorylates at multiple sites — regulates end-processing by Artemis and DNA ligase IV–XRCC4–XLF
- Phosphorylates [[p53]] at Ser15 — minor role compared to ATM

Ku heterodimer binding to DNA ends is the first committed step toward NHEJ. Loss of *PRKDC* causes severe combined immunodeficiency (SCID) in mice (due to failure of V(D)J recombination, which requires NHEJ).

---

## Mediators and signal amplifiers

Mediators propagate and amplify the primary kinase signal into megabase-scale chromatin domains, enabling multiple repair-factor concentrations at the DSB.

### γH2AX: the DSB chromatin mark

ATM (and ATR/DNA-PK) phosphorylates histone **H2AX** at Ser139, producing **γH2AX** — which spreads outward from the break over 1–2 Mb of chromatin within minutes [^rogakou1998]. γH2AX foci are:
- A **quantitative readout** of DSB number — used experimentally as a biomarker (immunofluorescence)
- A **scaffold** for MDC1, which binds γH2AX via its BRCT domain and recruits the MRN complex in a secondary wave, amplifying ATM activation

γH2AX foci accumulate progressively with organismal age in multiple tissues, including brain, liver, and lymphocytes — making γH2AX a proposed biomarker of age-related genomic instability [^hoeijmakers2009].

### MDC1 (Mediator of DNA damage checkpoint 1)

MDC1 binds γH2AX (BRCT domain) and then recruits ubiquitin ligases **RNF8** and **RNF168** → H2A-K13/K15 ubiquitination → creates a two-tier chromatin mark recognized by **53BP1** and **BRCA1** in an antagonistic fashion that determines repair pathway choice.

### 53BP1 and BRCA1: the repair pathway switch

The competition between **53BP1** (p53-binding protein 1) and **BRCA1** at ubiquitinated chromatin is the dominant mechanism of **repair pathway choice** between NHEJ and HR:

| Factor | Effect | Outcome |
|---|---|---|
| **53BP1** (with RIF1, PTIP) | Blocks DNA-end resection | Promotes NHEJ; active in G1 |
| **BRCA1** (with CtIP, MRN) | Promotes long-range DSB resection (5′→3′) | Promotes HR; active in S/G2 |

Cell-cycle phase determines the balance: 53BP1-mediated NHEJ dominates in G1 (no sister chromatid); BRCA1-mediated HR dominates in S/G2 (sister chromatid available) [^ciccia2010].

### Nuclear cGAS: an intra-nuclear brake on HR

[[cgas]] (cyclic GMP-AMP synthase) was canonically known as a cytosolic DNA sensor that drives the cGAS-STING innate-immune and SASP axis (see §"Chronic DDR signaling drives senescence" below). Chen et al. 2025 (*Science*) establish a parallel intra-nuclear role: nuclear cGAS binds chromatin at DNA damage sites and suppresses [[homologous-recombination]] by limiting the [[fanci]]–[[rad50]] interaction required for HR initiation [^chen2025]. This places cGAS as a **DDR pathway-choice regulator** — a transient brake favouring NHEJ over HR at the moment of damage.

In normal mammals the brake is self-limiting: [[trim41]] (an E3 ubiquitin ligase) rapidly ubiquitinates chromatin-bound cGAS, targeting it for extraction by the [[vcp|VCP/p97]] segregase, so HR can proceed once the transient block is relieved [^chen2025]. Naked mole rat (NMR) cGAS harbours a four-amino-acid divergence that renders it resistant to TRIM41-mediated eviction; prolonged chromatin retention in NMR cells correlates with enhanced HR efficiency — a finding consistent with the NMR's unusually robust genomic-stability phenotype [^chen2025]. Liu et al. 2018 (*Nature*) identified the initial nuclear chromatin-binding activity of cGAS [^liu2018]; Chen 2025 resolves the functional consequence for repair pathway choice and the species-specific regulatory mechanism.

This integrates with the page's existing Rodier two-arm SASP framing: cytosolic cGAS-STING was already the canonical DDR → IFN/SASP arm; the Chen 2025 finding establishes a mechanistically distinct, intra-nuclear DDR-regulatory arm operating upstream of the cytoplasmic immune signal.

#gap/no-fulltext-access — Chen 2025 cited from abstract only; quantitative details (fold-changes, cell line, HR assay) require full-text access for verification. See [[studies/chen-2025-nmr-cgas-hr-repair]].

---

## Checkpoint effector kinases

### CHK2 (CHEK2): the ATM effector

CHK2 is phosphorylated by ATM at Thr68 → CHK2 dimerises and autophosphorylates → active CHK2 dissociates and phosphorylates:
- **[[p53]]** at Ser20 → blocks MDM2 binding → p53 stabilisation (→ see [[p53-pathway]] for downstream programs)
- **CDC25A** → proteasomal degradation → CDK2 inhibition → G1/S checkpoint
- **CDC25C** → 14-3-3 binding → cytoplasmic sequestration → CDK1 inhibition → G2/M checkpoint

CHK2 loss-of-function variants (*CHEK2* 1100delC) are moderate-penetrance cancer risk alleles in humans (~2–3× breast cancer risk), confirming functional importance in tumour suppression.

### CHK1 (CHEK1): the ATR effector

CHK1 is the primary ATR substrate (Ser317/345) and the dominant checkpoint kinase in S-phase and G2:
- **CDC25A degradation** → intra-S checkpoint (slows origin firing)
- **CDC25C sequestration** → G2/M checkpoint (prevents CDK1 activation)
- **RAD51 activation** (via RPA phosphorylation) — promotes fork restart
- **WEE1 activation** — CDK1 Tyr15 phosphorylation → additional CDK1 inhibition

CHK1 inhibitors (prexasertib, LY2603618) are in oncology trials, exploiting replication stress in cancer cells.

---

## Repair pathway choice

The DDR signals but does not itself repair DNA — it selects among specialized repair pathways depending on lesion type and cell-cycle phase.

### Double-strand break repair

#### HR — homologous recombination (high-fidelity, S/G2)

HR uses the sister chromatid as a template for error-free DSB repair [^sanfilippo2008]. Requires:
1. **DSB resection**: MRE11 + CtIP initial clipping → Exo1 / DNA2-BLM long-range resection → ssDNA 3′ overhang
2. **RPA → RAD51 exchange**: BRCA2 (mediated by PALB2) displaces RPA and loads RAD51 onto ssDNA → RAD51 nucleoprotein filament
3. **Strand invasion**: RAD51 filament invades intact sister chromatid at homologous sequence → D-loop
4. **DNA synthesis and resolution**: templated synthesis across the break; Holliday junction resolution (dissolution via BLM-TOPO3α-RMI1/2, or resolution via MUS81-EME1)

BRCA1 and BRCA2 mutations abolish HR → cells rely on error-prone NHEJ → accumulation of mutations → cancer predisposition. This is why BRCA1/2 mutation carriers have ~70% lifetime breast cancer risk.

| Extrapolation | Status |
|---|---|
| Pathway conserved in humans? | yes — core RAD51 mechanism identical in mammals |
| Phenotype conserved in humans? | yes — BRCA1/2 cancer syndromes confirm in vivo necessity |

#### NHEJ — non-homologous end-joining (error-prone, all phases)

NHEJ is the dominant DSB repair pathway in mammalian somatic cells [^lieber2010]:
1. **Ku70–Ku80** binds directly to DNA ends → recruits DNA-PK
2. **DNA-PK** autophosphorylation → end-processing by Artemis (hairpin opening, end trimming)
3. **XRCC4–DNA ligase IV–XLF** complex → ligation

NHEJ does not require a template; it directly joins DSB ends, often with small insertions/deletions (indels) at the junction. It is the dominant pathway in G1 and quiescent cells. End-processing by Artemis can cause deletions; fill-in synthesis causes insertions — both mutagenic outcomes accumulate with age.

#### MMEJ / TMEJ — microhomology-mediated end joining (backup, mutagenic)

When classical NHEJ fails or Ku is absent, cells use **MMEJ** (also called TMEJ, theta-mediated EJ, requiring **Polθ**). MMEJ uses microhomologies (2–25 bp) flanking the DSB, causing predictable deletions. It is strongly mutagenic and its activity increases when NHEJ or HR components are lost — relevant to aging cells that accumulate HR/NHEJ defects. #gap/needs-replication — MMEJ contribution to age-related mutation accumulation not quantified in humans.

### Non-DSB repair pathways

| Pathway | Lesion type | Key proteins | Cell-cycle dependence |
|---|---|---|---|
| **BER** (base excision repair) | Oxidised, alkylated bases; SSBs; abasic sites | OGG1, NEIL1/2, APE1, Pol β, XRCC1, PARP1 | All phases |
| **NER** (nucleotide excision repair) | Bulky adducts, CPDs, 6-4 PPs (UV) | XPC, XPA, TFIIH, XPG, XPF-ERCC1, RPA | All phases |
| **MMR** (mismatch repair) | Replication errors, base mismatches | MSH2/6 (MutSα), MLH1/PMS2 (MutLα), EXO1 | S/G2 |
| **ICL repair** (Fanconi anemia) | Interstrand crosslinks (chemotherapy, aldehydes) | FANCD2–FANCI, FANCC, BRCA2, SLX4 | S phase |

BER declines with age in multiple mammalian tissues, contributing to the accumulation of oxidative lesions (8-oxo-dG). NER deficiency causes xeroderma pigmentosum (XP); global NER deficiency combined with TC-NER deficiency causes Cockayne syndrome (premature aging phenotype). #gap/needs-human-replication — whether BER decline with age is a driver (not just a correlate) of tissue aging requires genetic evidence.

---

## DDR outcomes

The DDR produces one of four cellular outputs depending on damage severity, lesion persistence, and cellular context:

```
DNA damage
    ↓
[Sensor: MRN / RPA / PARP1]
    ↓
[Transducer: ATM / ATR / DNA-PK]
    ↓
[Mediators: γH2AX / MDC1 / 53BP1 / BRCA1]
    ↓                              ↓
[CHK1/CHK2] → p53 stabilisation   [Repair: HR / NHEJ / BER / NER / MMR]
    ↓
[Outcome choice]
    ├── Transient arrest → successful repair → cell-cycle re-entry
    ├── Sustained arrest → [[p53-pathway]] → [[cellular-senescence|senescence]] (chronic DDR)
    └── Severe/persistent damage → [[p53-pathway]] → [[apoptosis-pathway|apoptosis]]
```

The specific downstream programs (p21/CDKN1A induction, senescence SASP, pro-apoptotic BCL-2 family transcription) are driven by [[p53-pathway]] and are described there. This page focuses on the upstream sensing, transduction, and repair machinery.

---

## Role in aging

The DDR is directly implicated in aging through three interconnected mechanisms:

### 1. Progressive accumulation of unrepaired lesions

Repair capacity declines with age in multiple systems [^hoeijmakers2009]:
- **BER** activity falls in aged brain, liver, and lymphocytes (8-oxo-dG accumulates)
- **NER** becomes less efficient; UV-induced CPD removal slows in skin
- **HR** efficiency declines as RAD51 and BRCA1 expression fall in aged tissues #gap/needs-replication
- **DSBs** accumulate in aged tissues (γH2AX foci per cell increase with age)

The net result is a rising load of persistent lesions, particularly at difficult loci (heterochromatin, telomeres).

### 2. Chronic DDR signaling drives senescence (the Rodier model)

Persistent, unresolved DDR signaling — marked by persistent DNA damage foci (PDDF: γH2AX foci that fail to resolve) — drives two separable outputs that together define the senescent state [^rodier2009]:

1. **Growth arrest arm**: sustained ATM → CHK2 → p21 signaling locks cells into permanent cell-cycle arrest (this arm also involves p53 and pRb).
2. **SASP arm**: ATM, NBS1, and CHK2 are required to initiate and maintain SASP (IL-6, IL-8, and other inflammatory cytokines); **p53 and pRb are not required** for SASP — the cytokine response can occur in cells that lack functional p53.

These two arms are mechanistically separable: p16INK4a-overexpressing cells undergo arrest without DNA damage and do not develop a SASP, whereas cells with PDDF develop both arrest and SASP. This is distinct from the transient arrest that follows a cleanly repaired break:

- Persistent telomeric DDR foci (called TAFs — telomere-associated DDR foci) are a major source of this chronic signaling in aged cells, arising because telomere repeats cannot be repaired by conventional HR [^rodier2009]
- Persistent DNA damage foci (PDDF) correlate with SASP induction; cells with low-dose radiation (0.5 Gy, which generates transient DDR that resolves within ~10 h) do not develop SASP, whereas high-dose (10 Gy) generates PDDF and robust SASP — demonstrating that ongoing DDR signaling, not the initial damage event, is the trigger [^rodier2009]
- ATM depletion (80–90% knockdown) prevented the X-ray–induced IL-6 increase and abolished pre-existing SASP in already-senescent cells; NBS1 or CHK2 depletion similarly abolished the cytokine response — placing ATM → NBS1 → CHK2 as the required signalling axis [^rodier2009]
- The SASP is proposed to amplify damage signals to neighbouring cells; paracrine cytokine effects on invasion and cancer cell behaviour are demonstrated, but a direct feed-forward ROS loop amplifying DDR in neighbours is not established in Rodier 2009 #gap/needs-replication

### 3. Progeroid syndromes: DDR defects accelerate aging

Every major progeroid syndrome is caused by a defect in a DDR component:

| Syndrome | Mutated gene | DDR pathway affected | Aging features |
|---|---|---|---|
| Ataxia-telangiectasia | *ATM* | DSB transduction | Cerebellar degeneration, immunodeficiency, cancer |
| Werner syndrome | *WRN* (RecQ helicase) | HR, replication fork restart | Premature aging of skin, hair, vasculature; cancer |
| Bloom syndrome | *BLM* (RecQ helicase) | HR (junction resolution) | Growth retardation, immunodeficiency, cancer |
| Cockayne syndrome | *CSB*, *CSA* | TC-NER | Neurodegeneration, cachectic dwarfism, UV sensitivity |
| Xeroderma pigmentosum | *XPA–XPG* | Global NER | UV-driven skin aging and cancer; neurodegeneration (XPA) |
| Nijmegen breakage syndrome | *NBN (NBS1)* | DSB sensing (MRN) | Microcephaly, immunodeficiency, cancer |
| Fanconi anemia | *FANC* genes | ICL repair | Bone marrow failure, cancer |

The fact that DDR deficiency phenocopies aging — at the tissue, cellular, and molecular levels — is among the strongest evidence that genomic instability is not merely a correlate but a **causal driver** of aging [^hoeijmakers2009].

---

## Cross-links to aging pathways

| Partner | Relationship |
|---|---|
| [[p53-pathway]] | The canonical DDR → p53 stabilization axis. DDR provides the upstream signal; p53 executes the downstream programs (arrest, senescence, apoptosis). The two pages are intentionally separate — see naming note above. |
| [[mdm2]] | ATM and DNA-PK phosphorylate MDM2 at Ser395 (ATM) → inhibiting MDM2's ability to export p53; this is a parallel mechanism to p53 Ser15 phosphorylation in achieving p53 stabilization. |
| [[atm]] | The primary DSB transducer kinase; described here at pathway level; molecular details on [[atm]] protein page (to be drafted). |
| [[cellular-senescence]] | DDR is the proximal trigger for both OIS and telomere-driven senescence; persistent DDR foci are the senescence-inducing signal in aged cells. |
| [[genomic-instability]] | DDR is the cellular surveillance system for this hallmark; its decline with age is mechanistically upstream of genomic instability accumulation. |
| [[mtor]] | mTOR activity promotes cell growth and protein synthesis, increasing ROS and replication stress; mTOR inhibition (rapamycin) reduces DDR activation in some contexts. Indirect relationship; see [[mtor]] for details. |

---

## Pharmacology (DDR-targeting agents in aging context)

| Agent class | Examples | DDR target | Aging relevance |
|---|---|---|---|
| PARP inhibitors (PARPi) | Olaparib, niraparib, rucaparib | PARP1 | Clinical (oncology, synthetic lethality in BRCA-mutant tumours); no aging application yet |
| ATM inhibitors | AZD0156, AZD1390 | ATM kinase | Oncology radiosensitisation; could worsen aging if used chronically |
| ATR inhibitors | Ceralasertib (AZD6738), elimusertib | ATR kinase | Oncology; chronic use would impair replication-stress response |
| CHK1 inhibitors | Prexasertib (LY2606368) | CHK1 | Oncology; ablates S-phase checkpoint |
| NAD+ precursors | NMN, NR | Indirect: replenish PARP1 substrate | Hypothesised to restore PARP activity and DDR fidelity in aged tissues #gap/needs-human-replication |
| Senolytics | Dasatinib + quercetin, navitoclax | Downstream: clear DDR-senescent cells | Active human trials; address *outcome* of DDR, not the DDR machinery |

The NAD+/PARP connection is particularly relevant: PARP1 consumes NAD+ during SSB repair; excessive PARP activity depletes NAD+ (a metabolic cofactor for sirtuins and mitochondria); NAD+ repletion via NMN/NR may restore PARP's protective role without the PARP-depletion cost. Mechanistic evidence is strong in model organisms; human DDR restoration data lacking. #gap/needs-human-replication

---

## Limitations and gaps

- #gap/needs-human-replication — Whether decline in BER and NER with age is causal for tissue aging or merely a correlate; genetic DDR-rescue experiments in humans are not feasible.
- #gap/needs-replication — Quantitative contribution of MMEJ/Polθ to age-related mutagenesis in human tissues is not established.
- #gap/no-mechanism — The quantitative rules governing repair pathway choice (HR vs NHEJ ratio as a function of cell cycle, damage dose, chromatin context) are partially known but not fully predictive.
- #gap/contradictory-evidence — Whether chronic low-level ATM/ATR activation (as in aged tissues) is beneficial (triggering repair/clearance) or harmful (driving senescence and inflammation) is context-dependent and not resolved at the tissue level.
- #gap/needs-human-replication — NAD+/PARP axis as a therapeutic target for restoring DDR fidelity in aging humans: only indirect evidence from model organisms.
- DDR pathway pages for individual repair sub-pathways (BER, NER, HR, NHEJ) do not yet exist as atomic pages; this page covers them briefly. #stub candidates for future seeding.

---

## Footnotes

[^jackson2009]: doi:10.1038/nature08467 · Jackson SP & Bartek J · review · Nature 2009 · n=N/A · model: human/mammalian · 5862 citations · comprehensive DDR overview covering sensors, transducers, effectors, and disease
[^ciccia2010]: doi:10.1016/j.molcel.2010.09.019 · Ciccia A & Elledge SJ · review · Molecular Cell 2010 · n=N/A · model: human/mammalian · 4224 citations · detailed mechanistic coverage of DDR modules and repair pathways
[^rodier2009]: doi:10.1038/ncb1909 · Rodier F et al. · in-vitro / in-vivo · Nature Cell Biology 2009 · model: human fibroblasts + mouse · 2096 citations · demonstrates persistent DDR foci trigger SASP independently of cell-cycle arrest; foundational for DDR → senescence mechanism (downloaded PDF available)
[^hoeijmakers2009]: doi:10.1056/nejmra0804615 · Hoeijmakers JHJ · review · New England Journal of Medicine 2009 · n=N/A · model: human (progeroid syndromes) · 2146 citations · covers DDR in aging, cancer, and progeroid syndromes — #gap/no-fulltext-access (green OA but PDF download failed; claims attributed here are corroborated by Jackson & Bartek 2009 which covers overlapping material)
[^shiloh2013]: doi:10.1038/nrm3546 · Shiloh Y & Ziv Y · review · Nature Reviews Molecular Cell Biology 2013 · n=N/A · 1582 citations · comprehensive ATM kinase review including substrate network and A-T phenotype
[^rogakou1998]: doi:10.1074/jbc.273.10.5858 · Rogakou EP et al. · in-vitro · Journal of Biological Chemistry 1998 · n=N/A · 5316 citations · discovery of γH2AX (H2AX Ser139 phosphorylation) as a DSB mark
[^zouellledge2003]: doi:10.1126/science.1083430 · Zou L & Elledge SJ · in-vitro · Science 2003 · n=N/A · 2628 citations · demonstrates RPA-ssDNA recruits ATRIP–ATR; defines the ATR activation mechanism
[^sanfilippo2008]: doi:10.1146/annurev.biochem.77.061306.125255 · San Filippo J et al. · review · Annual Review of Biochemistry 2008 · n=N/A · 1646 citations · comprehensive mechanistic review of eukaryotic HR
[^lieber2010]: doi:10.1146/annurev.biochem.052308.093131 · Lieber MR · review · Annual Review of Biochemistry 2010 · n=N/A · 2781 citations · comprehensive mechanistic review of NHEJ in mammals
[^ncb2170]: doi:10.1038/ncb2170 · Di Micco R et al. · primary research · Nature Cell Biology 2011 · model: human fibroblasts (BJ cells), xenograft (HCT116) · demonstrates that SAHF (senescence-associated heterochromatin foci) form preferentially in oncogene-induced senescence (OIS), are ATR-dependent, and that heterochromatin restrains DDR signalling; SAHF are absent in replicative senescence or non-oncogenic genotoxic stress in this cell system (downloaded PDF available) — NOTE: this footnote is not yet cited in the page body; relevant to the OIS/DDR-heterochromatin interplay section if expanded
[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · *Science* 2025 · doi:10.1126/science.adp5056 · PMID 41066557 · **#gap/no-fulltext-access** · nuclear cGAS suppresses HR via FANCI–RAD50 interaction; TRIM41-mediated ubiquitination + VCP/p97 extraction relieves the brake in WT mammals; NMR cGAS resists eviction → enhanced HR
[^liu2018]: [[studies/liu-2018-nuclear-cgas-hr-suppression]] · n=NR · in-vitro+in-vivo · doi:10.1038/s41586-018-0629-6 · PMID:30356214 · Liu H et al. · *Nature* 2018 · model: human cell lines + mouse xenograft · "Nuclear cGAS suppresses DNA repair and promotes tumorigenesis" · DOI verified via Crossref; identified nuclear cGAS chromatin-binding activity AND HR-suppressive function; establishes intra-nuclear localisation as distinct from cytosolic immune-sensing role — closed-access; #gap/no-fulltext-access for independent quantitative verification
