---
type: pathway
aliases: [neurotrophin pathway, NGF/BDNF signaling, Trk-p75 signaling, NTRK signaling]
kegg: hsa04722
reactome: R-HSA-166520
wikipathways: null
key-nodes: ["[[bdnf]]", "[[ngf]]", "[[ntrk1]]", "[[ntrk2]]", "[[ntrk3]]", "[[ngfr]]"]
upstream: ["[[neuronal-activity]]", "[[exercise-induced-myokines]]", "[[pi3k-akt-pathway]]"]
downstream: ["[[synaptic-plasticity]]", "[[neurogenesis]]", "[[apoptosis]]", "[[ras-mapk]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[loss-of-proteostasis]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
druggability-tier: 2
caused-by: ["[[neuronal-activity]]", "[[exercise-induced-myokines]]"]
causes: ["[[synaptic-plasticity]]", "[[neurogenesis]]", "[[apoptosis]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Nykjaer 2004 (local PDF) and Latina 2017 (local PDF) verified against primary sources. Two claim corrections made (see log). Huang & Reichardt 2001 and Bibel & Barde 2000 remain unverified (download failed despite green/diamond OA status); Huang & Reichardt 2003 is closed-access (not_oa). KEGG hsa04722 and Reactome R-HSA-166520 confirmed correct. WikiPathways null maintained — WP4149 and WP2380 confirmed incorrect candidates (see body correction). Wrann 2013 and Sleiman 2016 cross-check: framing consistent with bdnf page. Bregman-Yemini 2024 closed-access: gap tag maintained."
---


# Neurotrophin signaling pathway

The **neurotrophin signaling pathway** governs neuronal survival, differentiation, synaptic plasticity, and selective apoptosis across the central and peripheral nervous systems. Four mammalian ligands — [[ngf|NGF (nerve growth factor)]], [[bdnf|BDNF (brain-derived neurotrophic factor)]], NT-3 (neurotrophin-3; gene *NTF3*), and NT-4/5 (neurotrophin-4/5; gene *NTF4*) — signal through two receptor classes: the **Trk family of receptor tyrosine kinases** (TrkA/B/C; genes *NTRK1/2/3*) and the low-affinity pan-neurotrophin receptor **p75NTR** (gene *NGFR*). The key aging relevance: BDNF and NGF decline with age in brain regions critical for memory and cognition, and this decline is mechanistically linked to neurodegeneration, synaptic loss, and impaired adult neurogenesis.

> **Naming note:** This page covers the *pathway* (KEGG hsa04722; Reactome R-HSA-166520). Individual protein pages for the key nodes are implicit stubs unless listed as existing pages. The BDNF protein page is fully seeded at [[bdnf]] and should be consulted for detailed aging-trajectory and exercise-induction data.

## Ligands and receptor specificity

### The four mammalian neurotrophins

All four neurotrophins share a conserved cystine-knot structural motif and are synthesized as larger precursor proteins (pro-forms). Processing to the mature form is a critical regulatory step with opposing biological consequences [^bibelBarde2000].

| Ligand | Gene | Preferred Trk receptor | p75NTR affinity | Primary expression sites |
|---|---|---|---|---|
| NGF | *NGF* | TrkA ([[ntrk1]]) | High (pro-NGF >> mature) | Sympathetic, sensory, basal forebrain cholinergic neurons |
| BDNF | *BDNF* | TrkB ([[ntrk2]]) | High (pro-BDNF >> mature) | Cortex, hippocampus, cerebellum, peripheral nervous system |
| NT-3 | *NTF3* | TrkC ([[ntrk3]]) primary; low-affinity TrkA + TrkB | Moderate | Proprioceptive sensory neurons, cerebellum |
| NT-4/5 | *NTF4* | TrkB ([[ntrk2]]) | Moderate | Broadly expressed; placenta, muscle |

### The pro-form / mature-form dichotomy

Each neurotrophin is initially translated as a pre-pro-neurotrophin. Furin or prohormone convertases cleave the prodomain in the secretory pathway to generate the mature form; alternatively, pro-neurotrophins can be secreted and cleaved extracellularly by metalloproteinases and plasmin. This dichotomy generates opposing signals:

- **Mature neurotrophins** → preferentially bind and activate **Trk receptors** → **pro-survival and pro-plasticity** signaling
- **Pro-neurotrophins** → preferentially bind **p75NTR + sortilin co-receptor** complex → **pro-apoptotic** signaling [^nykjaer2004]

The pro-BDNF / mature-BDNF balance is therefore a functional switch. During aging and neurodegeneration, failure of pro-neurotrophin processing or impaired Trk signaling can tip neurons toward p75NTR-driven apoptosis. See [[bdnf]] for detailed treatment of this dichotomy and its aging relevance.

## Receptor classes and downstream cascades

### Trk receptor tyrosine kinases

TrkA, TrkB, and TrkC are structurally related transmembrane receptor tyrosine kinases. Ligand binding induces receptor dimerization and transphosphorylation of key tyrosine residues in the activation loop and juxtamembrane region, creating docking sites for adaptor proteins [^huangReichardt2003].

Three major downstream cascades emerge from Trk activation:

**1. Ras-MAPK cascade (proliferation, differentiation, survival):**
- Tyr490 on TrkA (equivalent positions on TrkB/C) recruits **SHC adaptor protein** → GRB2/SOS complex → Ras-GTP → [[ras-mapk|Raf-MEK-ERK cascade]]
- ERK1/2 translocates to nucleus → phosphorylates **CREB** (Ser133) → CREB-dependent transcription of survival genes (including *BDNF* itself — a positive feed-forward loop)
- ERK also activates **RSK** → phosphorylates BAD (inhibitory) → suppresses apoptosis

**2. PI3K-Akt cascade (survival, anti-apoptotic):**
- Tyr490 docking (via Shc/Grb2/Gab1) or direct Tyr785 (TrkA) site activates [[pi3k-akt-pathway|PI3K → Akt (PKB)]]
- Akt phosphorylates and inactivates multiple pro-apoptotic nodes: BAD (Ser136), FKHR (FoxO1), GSK-3β; activates mTORC1 via TSC2 phosphorylation and IKK → NF-κB
- This cascade is the principal Trk survival signal; PI3K inhibition abolishes Trk-mediated neuronal survival in classical NGF-withdrawal assays #gap/needs-human-replication

**3. PLCγ cascade (synaptic plasticity, calcium signaling):**
- Tyr785 on TrkA (Tyr816 on TrkB) recruits **PLCγ** → cleaves PIP2 → IP3 + DAG
- IP3 → ER calcium release → activation of calmodulin-dependent kinases (**CaMKII/IV**) → CREB phosphorylation (Ser133) — this is the Trk route to synaptic plasticity independent of the ERK arm
- DAG → PKC activation → contributes to long-term potentiation (LTP)

### p75NTR: the dual-function co-receptor

p75NTR (NGFR) is a member of the tumor necrosis factor receptor superfamily. It lacks intrinsic kinase activity but signals through several adaptor proteins and can act as:

1. **Co-receptor for Trk** — p75NTR + TrkA/B increases binding affinity for mature neurotrophins and improves specificity (e.g., restricts TrkA to NGF, suppresses cross-reactivity with NT-3)
2. **Pro-apoptotic receptor** — in the absence of Trk, p75NTR + sortilin binds pro-neurotrophins and is required for proNGF-induced cell death; the downstream adaptor cascade (variously described as recruiting NADE, NRIF, or TRAF6 → JNK) is established in secondary literature [^nykjaer2004] [^huangReichardt2001] — Nykjaer 2004 demonstrates the sortilin/p75NTR complex requirement but does not itself name a specific JNK→p53→BAX sequence #gap/needs-replication
3. **Context-dependent NF-κB activator** — in some cell types (Schwann cells, immune cells), p75NTR signals through TRAF6 → NF-κB → survival; the outcome depends on cell context and co-receptor expression

The ratio of Trk:p75NTR determines whether a cell survives or dies upon neurotrophin exposure — a central regulatory node in developmental apoptosis and one implicated in age-related neuronal loss.

## Pathway activation states in aging

### BDNF / TrkB axis

BDNF is the most abundant and best-studied neurotrophin in the adult brain. See [[bdnf]] for full aging-trajectory data. Key points for pathway-level understanding:

- Serum BDNF declines with age (cross-sectional data; direction confirmed, magnitude and tissue source contested — see [[bdnf]])
- **TrkB isoform shift with age:** In aging, the ratio of full-length TrkB (TrkB.FL) to the truncated isoform TrkB.T1 shifts toward TrkB.T1, which lacks the intracellular kinase domain and acts as a dominant-negative decoy receptor. This shift may reduce effective Trk-mediated survival signaling even when mature BDNF ligand is present [^bregmanYemini2024]. #gap/needs-replication — the TrkB.T1 shift in human aging brain is based on limited post-mortem data; longitudinal human studies are absent.
- **Exercise induction:** Aerobic exercise upregulates BDNF via two verified routes: (1) PGC-1α → FNDC5 → irisin → BDNF in hippocampus [^wrann2013]; (2) β-hydroxybutyrate (BHB) → HDAC2/3 inhibition at *Bdnf* promoter [^sleiman2016]. Both are rodent-established; see [[bdnf]] for human extrapolation table.

### NGF / TrkA axis and Alzheimer's disease

Basal forebrain cholinergic neurons (BFCNs) depend on NGF-TrkA signaling for survival and maintenance of cholinergic phenotype. In Alzheimer's disease and in aging, impaired NGF/TrkA signaling is among the earliest detectable molecular changes. Latina et al. 2017 demonstrated using rat septo-hippocampal primary cultures that chronic NGF withdrawal causes a rapid and reversible presynaptic dysfunction — loss of synapsin I, SNAP-25, and α-synuclein — preceding neuronal death, which is blocked by re-application of NGF within 6 hours [^latinaNGF2017]. The claim that TrkA protein levels decline in human MCI before cholinergic neuron loss is supported by other work (Counts & Mufson 2005; Mufson et al. 2008, cited within Latina 2017's introduction) but is not a finding of the Latina 2017 paper itself. #gap/needs-replication — the causal direction (TrkA loss → neurodegeneration vs. neurodegeneration → TrkA loss) is not established by current evidence, and Latina 2017's findings are from embryonic rat cultures, not human post-mortem tissue.

### NT-3 / TrkC axis

NT-3 is the primary trophic factor for proprioceptive sensory neurons and cerebellar granule cells. Aging-context data for the NT-3/TrkC axis in humans is sparse. #gap/needs-human-replication — most mechanistic data is from developmental knock-out mouse models.

## Upstream regulators of neurotrophin expression

| Inducer | Ligand upregulated | Mechanism | Notes |
|---|---|---|---|
| Aerobic exercise | BDNF | PGC-1α → FNDC5/irisin [^wrann2013] | Verified in mice + human serum; see [[bdnf]] |
| Exercise + ketosis | BDNF | BHB → HDAC inhibition at *BDNF* promoter [^sleiman2016] | Verified in rodents; human data limited |
| Neuronal activity | BDNF, NT-3 | CaRE (calcium-response element) in *BDNF* gene promoter IV | Activity-dependent isoform-specific regulation |
| TGF-β | BDNF, NGF | Indirect — via Smad3 → promoter binding | Context-dependent; see [[tgf-beta]] |
| Inflammatory cytokines (IL-6, TNF-α) | BDNF ↓ | Transcriptional repression | Relevant to [[chronic-inflammation]] — #gap/no-mechanism for exact transcriptional repressor |

## Therapeutics targeting the pathway

### Druggability tier 2 rationale

Tier 2 (high-quality probe, no aging-indication-validated drug) reflects the current state: TrkA/B/C inhibitors (larotrectinib, entrectinib) are FDA-approved for *NTRK*-fusion cancers (tier-1 druggability by target), but no Trk **agonist** or neurotrophin mimetic has cleared regulatory approval for any neurological or aging indication. The gap is the agonist-versus-inhibitor direction required for aging applications.

| Compound | Target | Stage | Notes |
|---|---|---|---|
| 7,8-dihydroxyflavone (7,8-DHF) | TrkB agonist | Preclinical | Small-molecule TrkB agonist; crosses BBB; proof-of-concept in rodent models of AD and depression; no human RCT published |
| LM22A-4 | p75NTR partial agonist | Preclinical | p75NTR modulator designed to promote survival, suppress apoptotic arm; rodent TBI + Huntington's models |
| Larotrectinib / entrectinib | Pan-Trk inhibitor | FDA-approved (oncology) | Used to treat *NTRK* fusion-positive tumors; not applicable to aging (inhibitor direction) |
| [[semax\|Semax]] | BDNF/TrkB indirect (induction) | Supplement / clinical (Russia) | Claims BDNF/TrkB upregulation; neuropeptide analog; limited placebo-controlled RCT data |
| [[dihexa\|Dihexa]] | Claimed BDNF-like; actual mechanism HGF mimetic (c-Met) | Preclinical only | "More potent than BDNF" marketing claim was confirmed absent from any surviving primary source (R36 review). c-Met/HGF agonist mechanism established; pro-tumorigenic safety concern; no human data |

## Cross-pathway connections

- **[[pi3k-akt-pathway]]** — shared downstream effector of Trk; Akt is the convergence point for both growth factor receptor signaling and Trk survival signaling
- **[[ras-mapk]]** — ERK cascade shared with growth factor receptors; Trk → Ras-Raf-MEK-ERK is the same kinase cascade but with distinct subcellular localization and duration kinetics that specify neurotrophin outcomes versus mitogenic outcomes
- **[[apoptosis]]** — p75NTR → JNK → p53 is a pro-apoptotic arm; Trk → PI3K-Akt → BAD phosphorylation counteracts it; the balance determines cell fate
- **[[neurogenesis]]** — BDNF/TrkB is the primary trophic signal for adult hippocampal neurogenesis (dentate gyrus); TrkB-null mice show severely impaired neurogenesis; aging-related BDNF decline is proposed to partly explain reduced adult neurogenesis in old animals #gap/needs-human-replication
- **[[tgf-beta]]** — indirect upstream regulator; see table above

## Limitations and knowledge gaps

- #gap/needs-human-replication — The majority of mechanistic data (pro-form vs. mature form signaling, Trk cascade kinetics, p75NTR death-vs-survival switch) derives from rodent primary neuron cultures and developmental knock-out models. Human aging-context validation is largely indirect (post-mortem tissue, serum BDNF).
- #gap/needs-replication — TrkB.FL → TrkB.T1 isoform shift in human aging brain [^bregmanYemini2024] is based on limited post-mortem data; the functional consequence for Trk signaling capacity in aging humans is inferred, not directly demonstrated.
- #gap/dose-response-unclear — For exercise-BDNF induction, the dose-response (exercise intensity, duration, frequency) required to produce clinically meaningful BDNF increases in older adults is not established.
- #gap/long-term-unknown — No long-term RCTs targeting this pathway (Trk agonists, BBB-penetrant neurotrophin mimetics) have been conducted in aging populations.
- #gap/needs-canonical-id — WikiPathways ID for the full neurotrophin signaling pathway in Homo sapiens could not be confirmed (service returned 403/Cloudflare on all attempts 2026-05-09). WP4149 is confirmed incorrect (it is "White fat cell differentiation"). WP2380 is confirmed incorrect for this page (it is "Brain-derived neurotrophic factor (BDNF) signaling" — BDNF-specific, not the 4-ligand neurotrophin pathway). A dedicated 4-ligand neurotrophin pathway WP entry may not exist; KEGG hsa04722 and Reactome R-HSA-166520 are the confirmed canonical database entries. Marked null until WikiPathways can be queried without Cloudflare interference.
- #gap/no-mechanism — The transcriptional repressor mechanism by which neuroinflammation (IL-6, TNF-α) suppresses BDNF transcription in aging brain is not fully characterized at the level of specific transcription factor binding.

## Footnotes

[^bibelBarde2000]: doi:10.1101/gad.841400 · review · n/a · model: vertebrate neural cell biology · Genes & Development 2000 · 1,057 citations (archive confirmed) · canonical reference for neurotrophin biology: ligand-receptor specificity, pro-form vs. mature-form processing, Trk cascade overview; locally pending download (OA: diamond)

[^huangReichardt2001]: doi:10.1146/annurev.neuro.24.1.677 · review · n/a · model: vertebrate nervous system · Annual Review of Neuroscience 2001 · 4,324 citations (archive confirmed; citation percentile 100) · canonical reference: neurotrophin roles in neuronal development and function, signaling cascade detail

[^huangReichardt2003]: doi:10.1146/annurev.biochem.72.121801.161629 · review · n/a · model: vertebrate; in-vitro; biochemical · Annual Review of Biochemistry 2003 · 2,497 citations (archive confirmed; citation percentile 100) · canonical reference: Trk receptor structure, phosphorylation sites, adaptor recruitment, downstream cascade specificity; closed-access (not_oa) — #gap/no-fulltext-access

[^nykjaer2004]: doi:10.1038/nature02319 · in-vivo + in-vitro · model: SCG neurons, SM-11 vascular smooth muscle cells, Schwann cells, A875 melanoma cells; SPR cell-free binding assays; p75NTR-knockout mice · Nature 2004 · 935 citations (archive confirmed; local PDF verified 2026-05-09) · established sortilin as essential co-receptor for proNGF-induced neuronal cell death via p75NTR; sortilin Kd ~5 nM for proNGF vs ~87 nM for mature NGF (SPR); both sortilin and p75NTR required for proNGF-mediated apoptosis (TUNEL; p<0.001 n=3); proNGF does not interact stably with TrkA; paper demonstrates the sortilin/p75NTR complex requirement but does not characterize the downstream JNK/p53/BAX molecular cascade — that mechanistic detail comes from secondary literature

[^wrann2013]: doi:10.1016/j.cmet.2013.09.008 · in-vivo · model: C57BL/6 mice; exercise paradigm · Cell Metabolism 2013 · 1,292 citations (archive confirmed; local PDF available) · exercise → PGC-1α → FNDC5/irisin → hippocampal BDNF upregulation; verifier-confirmed per [[bdnf]] page

[^sleiman2016]: doi:10.7554/eLife.15092 · in-vivo + in-vitro · model: C57BL/6 mice; rat hippocampal neurons · eLife 2016 · 721 citations (archive confirmed; local PDF available) · BHB → class I HDAC inhibition → *BDNF* promoter derepression → BDNF upregulation; verifier-confirmed per [[bdnf]] page

[^latinaNGF2017]: doi:10.3389/fncel.2017.00068 · in-vitro · model: embryonic day 17/18 Wistar rat septo-hippocampal primary cultures enriched for cholinergic neurons by 0.2% B27 + NGF (100 ng/ml) protocol (n=9 for WB; n=5–10 for cell counts) · Frontiers in Cellular Neuroscience 2017 · 47 citations (archive confirmed; OA gold; local PDF verified 2026-05-09) · NGF withdrawal causes rapid reversible presynaptic dysfunction (synapsin I, SNAP-25, α-synuclein loss) in cholinergic neurons before cell death; dysfunction reversed by NGF re-application within 6h; TrkA-dependent (blocked by TrkA inhibitor GW441756 15 µM). Does NOT report human MCI/AD TrkA protein levels — that claim belongs to Counts & Mufson 2005 / Mufson et al. 2008.

[^bregmanYemini2024]: doi:10.1016/j.arr.2024.102349 · review · n/a · model: human + rodent · Ageing Research Reviews 2024 · 6 citations (archive confirmed; closed-access — not_oa) · proposes TrkB.FL → TrkB.T1 isoform imbalance as shared mechanism for age-related cognitive and emotional impairment; post-mortem and rodent data; no prospective human cohort data
