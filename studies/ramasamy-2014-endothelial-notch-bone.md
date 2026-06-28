---
type: study
doi: 10.1038/nature13146
pmid: 24647000
pmc: PMC4943529
title: "Endothelial Notch activity promotes angiogenesis and osteogenesis in bone"
authors: [Ramasamy SK, Kusumbe AP, Wang L, Adams RH]
year: 2014
journal: Nature
study-design: in-vivo
publication-type: research-article
volume: 507
issue: 7492
pages: "376-380"
organism: mus-musculus
n-subjects: null
intervention: []
hallmarks-tested: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [endothelial-notch-drives-type-h-angiogenesis, notch-loss-of-function-reduces-bone-mass, notch-gain-of-function-increases-bone-growth, dll4-essential-bone-ec-ligand, endothelial-noggin-angiocrine-coupling, noggin-rescue-restores-bone-formation, ec-autonomous-not-osteoblast-notch]
local-pdf: null
verified: true
verified-date: 2026-06-28
verified-by: claude
verified-scope: "PMC author manuscript (7 pp: main text + Methods Summary + Methods) read end-to-end. All main-text quantitative and qualitative claims cross-checked. Extended Data figures not present in this PDF — n=6 per group / 4-litter claims and any Extended-Data-only measurements unverified against those figure legends. Citation count (972) and FWCI (20.04) are external bibliometric figures, not paper-derived."
---

# Endothelial Notch activity promotes angiogenesis and osteogenesis in bone

**Ramasamy SK\*, Kusumbe AP\*, Wang L, Adams RH** (\* equal contribution)  
*Nature* 507:376-380, 2014

---

## TL;DR

This paper is the mechanistic companion to [[studies/kusumbe-2014-type-h-vessels|Kusumbe et al. 2014]] (Nature 507:323-328; DOI 10.1038/nature13145). Where the companion paper characterizes type-H (CD31^hi/Emcn^hi) bone vessels and shows they decline with aging, Ramasamy et al. dissect *why* type-H vessels drive osteogenesis: **endothelial Notch signaling drives type-H angiogenesis in bone and is obligately required for coupled osteogenesis.** The coupling mechanism is angiocrine — Notch-active endothelial cells secrete **Noggin**, a BMP antagonist that prevents premature BMP-driven differentiation of Runx2+ osteoprogenitors, maintaining the progenitor pool available for proper bone formation. Conditional deletion of Notch signaling in endothelial cells (via *Rbpj* KO) reduces type-H vessel abundance, collapses the Runx2+ osteoprogenitor pool through premature Osterix+ differentiation, and reduces bone mass; gain-of-function expands both vessels and progenitors; and recombinant Noggin administration fully rescues the bone phenotype of endothelial Notch loss-of-function mutants. The study positions endothelial-secreted Noggin as the molecular bridge between vascular Notch activity and osteoprogenitor maintenance.

---

## Background and experimental system

Bone angiogenesis has tissue-specific features not shared with angiogenesis in other organs. The companion paper (Kusumbe 2014) identified a specialized subtype — type-H vessels (CD31^hi/Emcn^hi endothelium) — concentrated in bone metaphysis and endosteum, where they associate with Osterix+ and Runx2+ osteoprogenitors. Type-H vessels decline dramatically with aging in mouse bone (nearly absent by 57-70 weeks of age vs. abundant at 4 weeks).

Ramasamy et al. asked: what maintains type-H endothelial identity, and how does it couple to osteoprogenitor maintenance? The study uses inducible endothelial-specific Cre (*Cdh5(PAC)-CreERT2*) — which drives tamoxifen-inducible recombination specifically in endothelial cells — to delete or activate Notch signaling components in vivo. Tamoxifen was administered intraperitoneally (500 µg/day) at postnatal days P10-P14, with skeletal analysis at P28.

---

## Type-H vessel morphology

Type-H metaphyseal vessels form morphologically distinct structures:

- **Straight tubules** (5–10 µm diameter) extending from metaphyseal arteries
- **Tubular arches** (15–20 µm diameter) — blind-ended, bulb-shaped protrusions connecting the tubules
- **High proliferation**: EdU+ (S-phase) labeling is concentrated predominantly in columns and, less prominently, in arches, identifying these as the active angiogenic front in bone
- **Angiogenic gene expression**: elevated Neuropilin 1, Plexin D1, Unc5b, and FLT4/VEGFR3 relative to sinusoidal (type-L) endothelium

Notch target gene transcripts and pathway activity were elevated in type-H versus type-L bone endothelium, suggesting endogenous Notch signaling is preferentially active in type-H cells.

---

## Loss-of-function: endothelial Rbpj deletion (*Rbpj* iΔEC)

**Genetic model:** *Cdh5(PAC)-CreERT2* × *Rbpj^lox/lox^* — RBPJ is the nuclear transcriptional effector required for all canonical Notch signal transduction; its deletion effectively silences the entire canonical Notch pathway in endothelial cells.

**Main experiments:** n=6 mice from 4 independent litters per group.

### Vascular phenotype

- Decreased CD31^hi/Emcn^hi (type-H) vessel abundance
- Reduced distal metaphyseal arches per unit metaphysis length
- Disorganized filopodia extension at the angiogenic front
- Reduced VEGFR1, VEGFR2, VEGFR3 immunostaining
- Elevated soluble VEGFR1 (sFlt1) mRNA — a VEGF decoy that inhibits angiogenesis

### Bone and osteoprogenitor phenotype

- **Shortened femurs** — grossly reduced long bone growth
- **Reduced BV/TV** (bone volume/total volume), trabecular number, and trabecular thickness by micro-CT
- **Reduced bone formation rates** by calcein double labeling (7-day pulse interval) — confirming reduced active bone deposition, not just structural remnant
- **Enlarged, irregular growth plates** with loss of Sox9 expression in the maturation/hypertrophy zones — indicating chondrocyte maturation defects
- **Increased Osterix+ cells** — more cells at the later committed osteoblast stage
- **Reduced Runx2+ early osteoprogenitors** — depletion of the upstream progenitor pool
- Reduced *Bglap* (osteocalcin) and *Ibsp* (bone sialoprotein) mRNA — reduced mature osteoblast gene expression
- Primary mesenchymal cells from mutant bone **mineralized prematurely** in culture (10-14 days vs. 21-28 days for controls) — confirming a cell-intrinsic acceleration of osteoblastic differentiation

### Molecular: Noggin downregulation

Sorted bone endothelial cells from *Rbpj* iΔEC mutants showed **significantly reduced *Nog* mRNA** compared to controls. Nog encodes Noggin, a secreted BMP antagonist. This finding positioned endothelial-secreted Noggin as a candidate angiocrine factor coupling Notch activity to osteoprogenitor state.

---

## Gain-of-function: endothelial Fbxw7 deletion (*Fbxw7* iΔEC)

**Genetic model:** *Cdh5(PAC)-CreERT2* × *Fbxw7^lox/lox^* — FBXW7 is an E3 ubiquitin ligase subunit that promotes proteasomal degradation of the Notch intracellular domain (NICD); its deletion stabilizes NICD and produces Notch gain-of-function (sustained transcriptional activation).

**Main experiments:** n=6 mice from 4 independent litters per group.

### Vascular and bone phenotype

- **Increased CD31^hi/Emcn^hi vessel abundance** and expanded metaphyseal arches
- **Enhanced total and proliferating endothelial cell numbers**
- Formation of numerous small arterioles within the metaphysis
- **Enhanced femur extension and bone growth**
- **More abundant Runx2+ early osteoprogenitors**
- Reduced Osterix+ cell abundance (expanded progenitor pool, delayed premature commitment)
- Reduced growth plate and maturation/hypertrophy zone dimensions

### Molecular: Noggin upregulation

Sorted bone endothelial cells from *Fbxw7* iΔEC gain-of-function animals showed a **40-fold upregulation of *Nog* mRNA** [^ramasamy2014]. VEGFR transcripts (all three receptors: Vegfr1, Vegfr2, Vegfr3) were increased; soluble sFlt1 was decreased; *Vegfa* (VEGF-A in growth plate chondrocytes) was elevated. The Nog upregulation was the most dramatic molecular change and the strongest candidate for the osteoprogenitor effect.

---

## DLL4 is the essential Notch ligand in bone endothelium

To identify which Notch ligand drives endothelial type-H identity, the paper generated three further conditional knockouts using *Cdh5(PAC)-CreERT2*:

| Conditional KO | Ligand deleted | Bone endothelial phenotype |
|---|---|---|
| *Dll4* iΔEC | DLL4 | Reproduced the *Rbpj* iΔEC phenotype — reduced type-H vessels, bone formation |
| *Dll1* iΔEC | DLL1 | No significant vascular or bone phenotype |
| *Jag1* iΔEC | Jagged-1 | No significant vascular or bone phenotype |

**Conclusion:** DLL4 is the endogenous activating Notch ligand responsible for maintaining type-H endothelial identity and Notch-driven angiocrine osteogenesis in bone. This specificity contrasts with other vascular contexts (e.g., retinal angiogenesis) where the same ligand has been studied.

**EC-autonomy control:** An osteoblast-specific *Rbpj* deletion line (*Tg(Col1a1-creERT2)6.1.ICS* × *Rbpj^lox/lox^*; denoted *Rbpj* iOB) showed **normal vasculature and normal osteoprogenitor numbers**, confirming that the Notch-to-osteogenesis coupling requires Notch signaling specifically in endothelial cells — not in osteoblasts — and is therefore an endothelial-autonomous and angiocrine phenomenon.

---

## Noggin rescue: establishing the angiocrine coupling mechanism

To directly test whether endothelial-secreted Noggin mediates the Notch-to-osteogenesis link, the authors administered recombinant Noggin protein to *Rbpj* iΔEC mutants during the critical growth window.

**Rescue protocol:** Recombinant Noggin (rNoggin), 500 µg/kg/day, administered daily from P15 to P27; n=6 from 4 independent litters.

**Outcomes restored by rNoggin in *Rbpj* iΔEC mutants:**

- Metaphysis organization (restored metaphyseal architecture)
- Bone formation rates (calcein double labeling, normalized to controls)
- Normalized osteoprogenitor numbers (Runx2+ and Osterix+ balance restored)
- Growth plate size and Sox9 expression in maturation/hypertrophy zones
- Chondrocyte VEGF-A expression
- Vascular organization of type-H vessels

**In vitro Noggin effect:** Recombinant Noggin (500 ng/ml) added to primary mesenchymal cell cultures **inhibited osteoblastic differentiation** in vitro (Fig. 4c). The paper does not specify the cell source (mutant vs. control bone) for this experiment, and does not report a specific timeline restoration for Noggin-treated cells. The 10–14 day vs. 21–28 day mineralization timeline described in the LOF section refers to the separate in vitro comparison of *Rbpj* iΔEC mutant bone cells vs. wild-type controls — an experiment not involving exogenous Noggin treatment. The in vitro inhibition of differentiation by Noggin is mechanistically consistent with the angiocrine model (endothelial Noggin suppresses premature BMP-driven commitment), but the paper reports it as inhibition of differentiation rather than specifying a timeline restoration.

### The Noggin paradox

Noggin is canonically a BMP antagonist — it was originally characterized as an inhibitor of BMP-2, BMP-4, BMP-7, and BMP-14 signaling (via direct high-affinity binding to BMPs, preventing receptor engagement). BMP signaling promotes osteoblast commitment and differentiation. The intuition that "less BMP signaling = less bone" makes Noggin an apparently counter-productive molecule for bone formation.

The resolution: in the context of type-H endothelial–osteoprogenitor coupling, unchecked BMP signaling drives osteoprogenitors to **commit and differentiate too quickly** — rushing past the Runx2+ progenitor stage to terminal Osterix+ differentiation. This prematurely depletes the progenitor pool without producing a full complement of properly spatiotemporally instructed mature osteoblasts. Endothelial Notch-derived Noggin **brakes this premature commitment**, maintaining a sufficient pool of Runx2+ progenitors for subsequent proper osteogenesis.

| Condition | EC Notch | EC Noggin | BMP in progenitors | Runx2+ pool | Bone formation |
|---|---|---|---|---|---|
| Wild-type | Active (DLL4-driven) | High | Modulated | Maintained | Normal |
| *Rbpj* iΔEC | Absent | Low | Unchecked | Prematurely depleted | Reduced |
| *Fbxw7* iΔEC | Constitutive | 40× elevated | Suppressed | Expanded | Enhanced |
| *Rbpj* iΔEC + rNoggin | Absent | Exogenous | Modulated | Restored | Restored |

---

## Relationship to aging

This paper does not study aged animals; all experiments were performed on postnatal day 28 (P28) mice. The aging dimension of type-H vessels — their dramatic decline from ~4 weeks to ~57-70 weeks of age — is the finding of the companion paper [^kusumbe2014]. Together, the two papers establish a mechanistic model for the bone-vascular aging axis:

1. **Kusumbe 2014** showed type-H vessels decline with age, and that pharmacological restoration via deferoxamine mesylate (DFM, a PHD inhibitor stabilising HIF-1α) can restore them
2. **Ramasamy 2014** (this paper) showed that endothelial Notch-DLL4 signaling is required to maintain type-H identity, and that the coupling to osteoprogenitors is mediated by endothelial Noggin secretion

**Implication for bone aging:** If endothelial Notch activity declines with age (as part of the general reduction in type-H vessel properties), then:
- Less EC-derived Noggin
- Unchecked BMP-driven premature osteoprogenitor differentiation
- Depleted Runx2+ pool and reduced bone formation rates — the histomorphometric signature of aged bone

This places the endothelial Notch–DLL4–Noggin axis as a prospective contributor to age-related osteoprogenitor decline. #gap/needs-human-replication — whether endothelial Notch activity and Noggin secretion decline specifically in aged human bone type-H endothelium has not been established.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — Notch/DLL4 signaling in vascular endothelium is highly conserved; type-H bone vessel equivalent in humans is not fully characterised |
| Phenotype conserved in humans? | partial — endosteal vascular decline with aging is observed in human bone histology; Noggin-osteoprogenitor coupling not tested in humans |
| Replicated in humans? | no — all experiments are in mouse (P28 postnatal); companion aging data (Kusumbe 2014) is also mouse |

---

## Limitations and gaps

- **Postnatal developmental window only.** All experiments analyze postnatal day 28 mice. Whether the Notch-DLL4-Noggin-osteoprogenitor axis is equally important in adult homeostasis and aging remains untested in this paper. #gap/needs-replication
- **No aging experiments in this paper.** The relevance to aging is inferred by combining this mechanistic result with the companion paper's aging phenotype data, not directly demonstrated here. #gap/needs-human-replication
- **Noggin mechanism is indirect.** The in vitro Noggin rescue confirms a cell-intrinsic premature differentiation effect, but does not fully resolve whether the in vivo rescue is osteoprogenitor-cell-intrinsic or involves secondary vascular or chondrocyte effects. The rescue of vascular organization (type-H vessels restored by rNoggin) complicates causal interpretation — vascular and osteogenic effects may be linked bidirectionally.
- **Notch ligand source.** The paper shows DLL4 is the essential ligand but does not fully characterize which cell presents DLL4 to bone endothelial Notch receptors (endothelial-to-endothelial lateral inhibition vs. perivascular or stromal DLL4 presentation). #gap/no-mechanism
- **BMP specificity of rescue.** Which BMP isoform(s) drive premature osteoprogenitor differentiation in the *Rbpj* iΔEC bone is not identified; Noggin antagonizes BMP-2, BMP-4, BMP-7, and BMP-14 with varying affinity. #gap/dose-response-unclear
- **No human equivalent study.** Type-H vessel biology in human bone is an active area of research without well-established mechanistic characterisation equivalent to the mouse data. #gap/needs-human-replication

---

## Significance

972 citations (FWCI 20.04; 100th citation percentile per archive record). Together with Kusumbe 2014 (companion), this paper launched the "type-H bone vessel" paradigm — one of the most influential frameworks for understanding bone-vascular coupling in development and aging. Key contributions:

1. **Endothelial Notch as an osteogenic organizer**: The field had expected Notch to be primarily inhibitory in vasculature (as in retinal angiogenesis, where Notch limits tip-cell formation). This paper showed that in bone, Notch instead promotes the specialized angiogenic program required for osteogenesis — a tissue-specific inversion of the canonical role.
2. **Angiocrine coupling via Noggin**: Identifies a specific angiocrine factor (endothelial-secreted Noggin) as the molecular bridge between vascular state and osteoprogenitor pool maintenance. This extends the angiocrine concept (vascular niche instructing tissue stem cells) to the bone microenvironment.
3. **DLL4 specificity in bone**: Establishes DLL4 — not Jagged-1 or DLL1 — as the bone-relevant Notch ligand, narrowing therapeutic target space.
4. **Aging framework**: Combined with Kusumbe 2014, establishes type-H vessel loss as a mechanistic driver of age-related osteoprogenitor decline, and endothelial Notch as a prospective target for bone-aging interventions.

---

## Cross-references

- [[bone]] — tissue context; type-H vessels and the bone-vascular axis
- [[osteoblasts]] — osteoprogenitor pool maintained by endothelial Notch-Noggin; companion Kusumbe 2014 page cited there
- [[endothelial-cells]] — type-H endothelial identity; Notch-DLL4 signaling
- [[bone-marrow]] — perivascular niche for osteoprogenitors
- [[notch-pathway]] — DLL4/RBPJ/NICD canonical pathway; DLL4 in vascular contexts
- [[stem-cell-exhaustion]] — osteoprogenitor pool maintenance as aging-relevant mechanism

---

## Footnotes

[^ramasamy2014]: [[studies/ramasamy-2014-endothelial-notch-bone]] · doi:10.1038/nature13146 · Ramasamy SK, Kusumbe AP, Wang L, Adams RH · *Nature* 2014;507(7492):376-380 · in-vivo · n=6 per group from 4 independent litters (main experiments); multiple additional cohorts for ligand-specificity and rescue arms · model: postnatal (P28) C57BL/6 mouse; endothelial-specific Cre (*Cdh5(PAC)-CreERT2*); tamoxifen P10-P14 · green OA (PMC4943529); 972 citations; FWCI 20.04

[^kusumbe2014]: doi:10.1038/nature13145 · Kusumbe AP, Ramasamy SK, Adams RH · *Nature* 2014;507(7492):323-328 · in-vivo (mouse) · companion paper characterizing type-H (CD31^hi/Emcn^hi) bone vessels, their age-dependent decline, and pharmacological restoration by deferoxamine mesylate (DFM); cited in [[osteoblasts]] § Angiogenesis-osteogenesis coupling · PMC4943525 · PMID: 24646994
