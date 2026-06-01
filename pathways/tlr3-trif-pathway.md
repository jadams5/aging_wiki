---
type: pathway
aliases: [TLR3 signaling, dsRNA-sensing pathway, TLR3-TICAM1 pathway, Toll-like receptor 3 cascade]
kegg: hsa04620
reactome: R-HSA-168164
wikipathways: null
key-nodes: ["[[tlr3]]", "[[ticam1]]", "[[tbk1]]", "[[ikbke]]", "[[irf3]]", "[[nf-kb]]"]
upstream: ["endosomal dsRNA (viral)", "endogenous dsRNA (cellular damage)", "poly(I:C)"]
downstream: ["[[type-i-interferon-signaling]]", "[[chronic-inflammation]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
druggability-tier: 3
caused-by: ["viral infection", "cellular damage (mitochondrial RNA, retrotransposon RNA)", "[[cellular-senescence]]"]
causes: ["[[chronic-inflammation]]", "[[type-i-interferon-signaling]]", "NF-κB-driven cytokine production"]
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Alexopoulou 2001 (doi:10.1038/35099560) verified against local PDF — corrected dsRNA length attribution from alexopoulou2001 to choe2005 (Alexopoulou does not quantify minimum bp; length figure is from Choe 2005 crystal structure). Srivastava 2025 (doi:10.3390/pathogens14070624) verified against downloaded PDF — corrected cell type from 'corneal epithelial cells' to 'airway/lung epithelial cells (AECs)', cytokine from 'IFN-β' to 'IFN-α', added DC/macrophage findings, corrected n to 5/group, corrected age to 68 wk. Wang 2026 (doi:10.3389/fimmu.2025.1650375) verified against downloaded PDF — footnote expanded to correctly describe bioinformatics + human tissue + cell line + ACLT rat design; body claims verified accurate. irf3-sites footnote corrected: Fitzgerald 2003 doi confirmed as 10.1038/ni921 (PMID 12692549); Meylan 2004 corrected to doi:10.1038/ni1061 (PMID 15064760, RIP1/NF-κB paper, not IRF3 phosphosites); Ser386/Ser396 primary attribution still gap/unsourced. Yamamoto 2003, Oshiumi 2003, Choe 2005, Jin 2026, Town 2006 — not_oa, cannot verify against full PDF. Reactome R-HSA-168164 (TLR3 Cascade) confirmed valid. KEGG hsa04620 (broad TLR signaling) accepted as declared."
literature-checked-through: 2026-05-13
---

# TLR3/TRIF endosomal dsRNA-sensing pathway

**TLR3 is the sole endosomal Toll-like receptor that signals exclusively through the TRIF/TICAM1 adaptor** — making the TLR3/TRIF axis a distinct innate immune branch from all other TLRs, which use MyD88 (or MyD88 + TRIF in the case of TLR4). TLR3 detects double-stranded RNA (dsRNA) within endolysosomes, a configuration that restricts its sensors to extracellular or phagocytosed RNA rather than cytosolic RNA. The downstream cascade runs: TLR3 → TRIF/TICAM1 → TBK1/IKKε → IRF3 phosphorylation → dimerization → nuclear translocation → IFN-β and IFN-stimulated gene (ISG) induction. Parallel NF-κB arm produces pro-inflammatory cytokines (TNF-α, IL-6, IL-12).

In aging, the relevance of TLR3/TRIF is **secondary to cGAS-STING (cytosolic DNA)** and **RIG-I/MAVS (cytosolic RNA)** but non-negligible: endogenous dsRNA structures — from retrotransposon inverted repeats, mitochondria, or damaged cells — can reach endosomes and trigger TLR3, contributing to sterile inflammaging. Age-related TLR3 downregulation in some tissues may paradoxically impair viral defense while chronic low-level TLR3 activation in others drives tissue damage.

> **Naming note:** This page covers the TLR3/TRIF pathway. The TLR3 receptor protein, when seeded as an atomic page, will live at `molecules/proteins/tlr3.md`. The TRIF/TICAM1 adaptor at `molecules/proteins/ticam1.md`. TBK1 and IRF3 protein pages already exist at `molecules/proteins/tbk1.md` and `molecules/proteins/irf3.md`. The cytosolic RNA-sensing parallel is covered at `[[mavs]]`; the cytosolic DNA-sensing parallel at `[[cgas-sting]]`.

## TLR3 structure and endosomal localization

TLR3 is a type-I transmembrane glycoprotein composed of:
- An N-terminal ectodomain with 23 leucine-rich repeat (LRR) motifs that form a horseshoe-shaped solenoid — the dsRNA-binding surface [^choe2005]
- A single transmembrane helix anchoring TLR3 in endosomal membranes
- A C-terminal cytoplasmic TIR (Toll-IL-1 receptor) domain — the adaptor-docking platform

TLR3 localization is critical to its biology. Unlike TLR4 (plasma membrane) or TLR7/8/9 (also endosomal, but ssRNA/CpG-sensing), TLR3 resides in early and late endosomes. It requires acidic pH (endosomal) for dsRNA binding and signaling. This restricts activation to RNA that has been **internalized**, either via endocytosis of extracellular vesicles, phagocytosis of dead cells, or macro-autophagy of damaged cytoplasmic contents.

Two TLR3 ectodomains dimerize symmetrically on a 40–48 bp stretch of dsRNA; recognition is length-dependent (minimum ~40 bp) but sequence-non-specific [^choe2005].

## TRIF/TICAM1: the exclusive adaptor

TRIF (TIR-domain-containing adaptor inducing IFN-β; gene name **TICAM1**) is the defining molecular feature of the TLR3 signaling pathway [^yamamoto2003][^oshiumi2003]:

- TLR3 is the **only TLR that uses TRIF exclusively** — all other TRIF-using TLRs (specifically TLR4) use TRIF only as a secondary adaptor alongside MyD88.
- TLR4 uses both MyD88 and TRIF; all other TLRs use MyD88 only.
- TRIF-knockout mice are completely unresponsive to poly(I:C) (synthetic dsRNA agonist) and show severely impaired IFN-β induction in response to LPS (TLR4-TRIF arm) [^yamamoto2003].

TRIF contains an N-terminal TRAF3-binding motif (activates TBK1 arm → IRF3/IFN-β) and a C-terminal RIP homotypic interaction motif (RHIM) that recruits RIP1/RIP3 for NF-κB activation and, under some conditions, programmed necrosis (necroptosis).

## Downstream signaling: two parallel arms

### Arm 1 — TBK1/IKKε → IRF3 → type-I IFN

1. TRIF recruits **TRAF3** via its N-terminal TRAF-binding motif
2. TRAF3 assembles a signaling complex containing **TBK1** (TANK-binding kinase 1) and **IKKε** (IκB kinase ε; gene *IKBKE*)
3. TBK1/IKKε phosphorylate **IRF3** at C-terminal serine cluster (Ser386, Ser396) [^irf3-sites]
4. Phospho-IRF3 homodimerizes and translocates to the nucleus
5. IRF3 binds IFN-β promoter PRDI/III elements → **IFN-β** transcription
6. Secreted IFN-β signals in autocrine/paracrine fashion via the IFNAR receptor → **JAK-STAT** (STAT1/STAT2) → ISG induction (hundreds of interferon-stimulated genes)

| Kinase | Substrates | Primary output |
|--------|-----------|----------------|
| TBK1 | IRF3 (Ser386/396), IRF7, STING | IFN-β + IFN-α induction |
| IKKε | IRF3, STAT1 | IFN-β, antiviral ISGs |

Both TBK1 and IKKε are shared with the [[cgas-sting]] pathway downstream of STING activation — a convergence point that makes TBK1 a cross-pathway hub.

### Arm 2 — RIP1/TRAF6 → NF-κB → pro-inflammatory cytokines

TRIF's C-terminal RHIM domain recruits **RIP1**, which then activates **TRAF6** → TAK1 → IKK complex (IKKα/β/γ) → IκBα degradation → **NF-κB** p65/p50 nuclear translocation → TNF-α, IL-6, IL-12p40, IP-10/CXCL10 production.

This arm is **structurally homologous to the MyD88-dependent NF-κB arm** used by all other TLRs — explaining why TLR3 stimulation can produce many of the same pro-inflammatory cytokines as TLR4, but with a distinct kinetics profile (IFN-β is delayed compared to MyD88-derived NF-κB activation).

### Contrast with cytosolic RNA sensing (RIG-I/MAVS)

| Feature | TLR3/TRIF | RIG-I–MDA5/MAVS |
|---------|-----------|-----------------|
| Sensor location | Endosomal membrane | Cytosol |
| Ligand | dsRNA (≥40 bp), endocytosed | Cytosolic dsRNA / 5'-ppp RNA |
| Adaptor | TRIF/TICAM1 | MAVS (mitochondrial) |
| Kinase output | TBK1, IKKε | TBK1, IKKε |
| Cell-type bias | Many cell types | All nucleated cells |
| pDC IFN-α | Not primary route | RIG-I/MAVS contributes |

Both pathways converge on TBK1/IKKε → IRF3, explaining redundancy in antiviral IFN responses. In plasmacytoid dendritic cells (pDCs), TLR7/TLR9 (MyD88 → IRF7 → IFN-α) are dominant; TLR3 plays a lesser role in pDCs.

## Endogenous activators: relevance to aging

TLR3 was defined as an antiviral pattern recognition receptor, but sterile activation by **endogenous dsRNA** is increasingly recognized [^chattopadhyay2014]:

| Endogenous dsRNA source | Context | Relevance to aging |
|------------------------|---------|-------------------|
| Mitochondrial dsRNA (mt-dsRNA) | Released from stressed/damaged mitochondria | Accumulates with age-related mitochondrial dysfunction |
| Inverted-repeat retrotransposon RNA | SINE/Alu-derived; forms hairpin dsRNA | Retrotransposon de-repression is a hallmark feature of [[epigenetic-alterations]] |
| Endogenous retroviruses (HERV) | Activated by epigenetic de-repression in aged cells | HERV RNA activates TLR3 in senescent cells |
| Poly(I:C) mimicry by damaged-cell debris | Phagocytosis of dead cells carrying RNA | Sterile inflammation driver in aging tissues |

This positions TLR3 as a **sterile inflammaging sensor** secondary to TLR4 (LPS/HMGB1/saturated fatty acids) and cGAS-STING, but contributing particularly in tissues with high phagocytic activity (macrophages, microglia) and in contexts of elevated retrotransposon/HERV expression.

## Aging context

### TLR3 in brain aging and microglia

Microglia express TLR3 and can respond to dsRNA released from dying neurons or viral infection [^town2006]. In aged brain, microglial activation is a major driver of neuroinflammation; TLR3-TRIF is one of several innate pathways that can sustain this state. Microglial TLR3 expression and poly(I:C) sensitivity change with age, though the directional data are inconsistent (some reports of upregulation, others of decline). #gap/contradictory-evidence — directional age-effect on microglial TLR3 is not resolved.

### TLR3 decline in aged tissues and impaired antiviral defense

A 2025 study in aged mice showed significantly decreased TLR3 expression in airway/lung epithelial cells (CD45-EpCAM+ AECs) alongside impaired IFN-α production and increased herpes simplex virus (HSV-1) severity following intranasal infection [^srivastava2025]. TLR3 expression was also decreased in lung-resident DCs and macrophages from 68-week-old mice at baseline. This is consistent with a broader age-related pattern of **innate sensor downregulation** contributing to immune vulnerability while paradoxically reducing sterile inflammatory drive in some tissues. The tissue specificity of age-related TLR3 changes matters and is not fully characterized. #gap/needs-human-replication

### TLR3 in mesenchymal stem cell aging

Replicative senescence of human mesenchymal stem cells (MSCs) disrupts TLR3-mediated priming. Poly(I:C) stimulation of aged MSCs partially reverses senescence phenotypes and restores immunosuppressive capacity in graft-versus-host disease models [^jin2026]. This suggests TLR3/TRIF signaling participates in MSC homeostatic function beyond antiviral defense, and that its age-related dysfunction contributes to [[stem-cell-exhaustion]]. The mechanism was not established. #gap/no-mechanism #gap/needs-replication

### TLR3 in osteoarthritis (age-associated joint disease)

TLR3 is upregulated in OA-affected synovial tissue and cartilage; knockdown reduced inflammation, apoptosis, and aberrant mineralization [^wang2026]. OA is an age-associated condition, implicating TLR3-TRIF-NF-κB signaling in joint degeneration via sterile dsRNA release from damaged chondrocytes. #gap/no-mechanism — the specific endogenous dsRNA species driving TLR3 in OA has not been identified.

## Regulatory mechanisms

Several E3 ubiquitin ligases and adaptor proteins modulate TLR3/TRIF signaling amplitude:

- **TRIM38** — targets TRIF for polyubiquitination and proteasomal degradation → negative regulation; prevents excessive IFN-β [^trim38]
- **ADAM15** — metalloprotease; negatively regulates TRIF-mediated TLR3 and TLR4 signaling
- **TRIM56** — positively regulates TLR3-TRIF innate immunity via phosphorylation-dependent and coiled-coil mechanisms [^trim56-2024]

These regulatory proteins are potential pharmacological targets but lack aging-specific evidence.

## Pharmacology and druggability

**Druggability-tier: 3** — predicted druggable by virtue of the TLR3 ectodomain's ligand-binding cleft, but no clinical drug targeting TLR3 exists for aging or immune-aging indications.

| Agent class | Examples | Status | Aging relevance |
|------------|---------|--------|----------------|
| TLR3 agonists | Poly(I:C), poly-ICLC (Hiltonol) | Clinical trials (oncology, vaccine adjuvant) | Used to stimulate innate immunity; not aging-targeted |
| TLR3 antagonists | No approved drugs | Preclinical probes only | Hypothetical: blocking sterile TLR3 activation in aged tissues |
| Downstream TBK1 inhibitors | BX795, compound II | Preclinical | TBK1 shared with cGAS-STING; cGAS-STING dominates aging-context |

The aging-context pharmacology of TLR3/TRIF is undeveloped. TBK1 inhibitors (which would affect both TLR3/TRIF and cGAS-STING output) are being investigated in the context of [[cgas-sting|cGAS-STING-driven inflammaging]] with potential cross-pathway benefit. #gap/needs-human-replication

## Limitations and knowledge gaps

- **Aging-tissue directional data inconsistent**: TLR3 expression with age is upregulated in some tissues (OA joint, some immune contexts) and downregulated in others (lung epithelium and lung DCs/macrophages, aged pDCs). A tissue-resolved atlas of TLR3 expression and signaling competence with age is lacking. #gap/needs-replication
- **Endogenous dsRNA species not catalogued**: Which specific mitochondrial RNA structures, retrotransposon species, or HERV sequences activate endosomal TLR3 in aged human cells vs. cytosolic RIG-I/MDA5 is not systematically established. #gap/no-mechanism
- **Causal vs. correlational aging role**: No MR study or genetic model specifically attributing age-related pathology to TLR3/TRIF vs. overlapping pathways (TLR4/NF-κB, cGAS-STING, RIG-I/MAVS) exists. #gap/needs-replication
- **Human clinical evidence essentially absent**: All aging-context studies are mouse or in-vitro; no human genetic or interventional study has directly tested TLR3/TRIF in aging. #gap/needs-human-replication
- **No TLR3/TRIF-specific geroprotector**: Unlike TLR4 (accessible to LPS antagonists) or cGAS-STING (active drug discovery), no compound targeting TLR3 specifically in aging is in development. #gap/dose-response-unclear

## Cross-references

- [[cgas-sting]] — parallel cytosolic DNA-sensing pathway; shared TBK1/IRF3 effectors; dominant for aging
- [[mavs]] — mitochondrial adaptor for cytosolic RIG-I/MDA5 RNA sensing; parallel to TLR3/TRIF
- [[lps-tlr4-nfkb]] — MyD88-dependent endosomal/surface TLR; shares NF-κB arm but not TRIF arm
- [[type-i-interferon-signaling]] — downstream effector pathway shared by TLR3, cGAS-STING, RIG-I/MAVS
- [[nf-kb]] — transcription factor activated by TLR3/TRIF NF-κB arm
- [[tbk1]] — shared kinase hub; TLR3-TRIF and cGAS-STING both converge here
- [[irf3]] — transcription factor; primary output of TBK1 phosphorylation
- [[chronic-inflammation]] — hallmark driven by TLR3/TRIF contribution to sterile inflammaging
- [[cellular-senescence]] — SASP-amplifying loop; senescent-cell HERV/retrotransposon RNA can activate TLR3
- [[jak-stat-pathway]] — IFN-β downstream signaling cascade activated by TLR3/TRIF output
- [[nlrp3-inflammasome]] — parallel sterile inflammation pathway; cross-talk with TLR3-NF-κB priming

## Footnotes

[^alexopoulou2001]: doi:10.1038/35099560 · Alexopoulou L, Holt AC, Medzhitov R, Flavell RA · *Nature* 2001 · n=TLR3-KO and WT mice (in-vivo and BMDC) · original research · model: C57BL/6 TLR3-/- mice; primary macrophages · TLR3 identified as dsRNA receptor; NF-κB + IFN activation established; 4,903+ citations · local PDF available (a local paper archive)

[^yamamoto2003]: doi:10.1126/science.1087262 · Yamamoto M et al. (Akira lab) · *Science* 2003 · n=TRIF-KO and WT mice · original research · model: TRIF-/- mice; primary macrophages · TRIF/TICAM1 identified as MyD88-independent adaptor for IFN-β induction; TRIF-KO mice unresponsive to poly(I:C) and LPS-IFN arm · 2,544+ citations · not_oa (no local PDF)

[^oshiumi2003]: doi:10.1038/ni886 · Oshiumi H, Matsumoto M, Funami K, Akazawa T, Seya T · *Nature Immunology* 2003 · n=in-vitro/co-IP · original research · model: HEK293 cells, primary macrophages · TICAM-1 (TRIF) cloned and characterized as TLR3 adaptor; IFN-β induction confirmed · 939+ citations · not_oa (no local PDF)

[^choe2005]: doi:10.1126/science.1115253 · Choe J, Kelker MS, Wilson IA · *Science* 2005 · structural · model: human TLR3 ectodomain crystal structure · LRR solenoid horseshoe fold; dsRNA binding requires two ectodomains flanking RNA; pH-sensitive recognition · 477+ citations · not_oa (no local PDF)

[^chattopadhyay2014]: doi:10.1089/jir.2014.0034 · Chattopadhyay S, Sen GC · *Journal of Interferon & Cytokine Research* 2014 · review · dsRNA-activation of TLR3 and RLR (RIG-I/MDA5) signaling; gene-induction-dependent and independent effects; endogenous RNA sources discussed · 132 citations

[^town2006]: doi:10.4049/jimmunol.176.6.3804 · Town T, Jeng D, Alexopoulou L, Tan J, Flavell RA · *Journal of Immunology* 2006 · n=microglia from TLR3-/- and WT mice · original research · model: murine microglia · microglia express functional TLR3; poly(I:C)-induced IFN-β confirmed TLR3-dependent · 162 citations · not_oa (no local PDF)

[^srivastava2025]: doi:10.3390/pathogens14070624 · Srivastava R et al. · *Pathogens* 2025 · n=5/group (young 6 wk, adult 36 wk, aged 68 wk female C57BL/6 mice) · in-vivo · model: C57BL/6 mice, intranasal HSV-1 (KOS strain) · decreased TLR3 surface expression on lung airway epithelial cells (AECs, CD45-EpCAM+) and lung DCs/macrophages in aged mice at baseline; impaired IFN-α production after infection; increased viral loads and lung disease severity in 68-wk mice · gold OA · #gap/needs-replication (mouse only; respiratory tract context)

[^jin2026]: doi:10.1016/j.trim.2026.102346 · Jin L et al. · *Transplant Immunology* 2026 · n=in-vitro MSC cultures · original research · model: human replicatively senescent MSCs · poly(I:C) TLR3 priming partially reversed senescence phenotypes; restored immunosuppressive T cell suppression · 0 citations (very recent) · not_oa · #gap/needs-replication #gap/no-mechanism

[^wang2026]: doi:10.3389/fimmu.2025.1650375 · Wang J et al. · *Frontiers in Immunology* 2026 · bioinformatics (GEO datasets GSE51588 n=50 OA+control, GSE117999 n=24) + human OA cartilage/synovial tissue (IHC) + in-vitro (human chondrocyte cell lines HC-a, C28/I2; mouse ATDC5) + in-vivo ACLT-induced rat OA (Sprague-Dawley, n=7–8/group) · TLR3 identified as upregulated in OA via machine learning (LASSO, SVM-RFE, random forest); knockdown reduced IL-1β, TNF-α, apoptosis (TUNEL), and aberrant chondrocyte mineralization (alizarin red); ACLT-rat TLR3 inhibition (CU-CPT 4a 10 µM) reduced pro-inflammatory cytokines and restored IL-10 and GLUL · gold OA · 0 citations (very recent) · #gap/no-mechanism (specific endogenous dsRNA ligand not identified)

[^trim38]: doi:10.1371/journal.pone.0046825 · Zhao C et al. · *PLOS ONE* 2012 · in-vitro · model: HEK293T cells · TRIM38 ubiquitinates TRIF → proteasomal degradation; negative regulator of TLR3/TLR4 IFN-β induction · 68 citations

[^trim56-2024]: doi:10.1016/j.jbc.2024.107249 · *Journal of Biological Chemistry* 2024 · in-vitro · model: cell lines + in-vitro kinase assays · TRIM56 coiled-coil domain and phosphorylation required for positive regulation of TLR3-TRIF innate immunity · 33 citations · local PDF available (a local paper archive)

[^irf3-sites]: IRF3 C-terminal serine cluster phosphorylation established across multiple papers. Fitzgerald KA et al. 2003 (doi:10.1038/ni921, PMID 12692549) · *Nature Immunology* · identified IKKε and TBK1 as IRF3 kinases in the innate signaling pathway. Meylan E et al. 2004 (doi:10.1038/ni1061, PMID 15064760) · *Nature Immunology* · established RIP1 as TLR3→NF-κB mediator (not IRF3 phosphosites specifically). The specific Ser386 and Ser396 residue assignments originate from biochemical mapping studies (Servant MJ et al. 2003 and related work); exact phosphosite DOIs not confirmed in this verification pass. #gap/unsourced — Ser386/Ser396 residue-number attribution requires verification against the primary structural/biochemical papers characterizing these specific sites.
