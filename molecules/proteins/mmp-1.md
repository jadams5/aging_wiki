---
type: protein
aliases: [MMP1, interstitial collagenase, collagenase-1, CLG, fibroblast collagenase, tissue collagenase]
uniprot: P03956
ncbi-gene: 4312
hgnc: 7155
ensembl: ENSG00000196611
genage-id: null
mouse-ortholog: Mmp1a (Q9EPL5) / Mmp1b (Q9EPL6)
pathways: ["[[nf-kb]]", "[[ras-mapk]]", "[[tgf-beta]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
druggability-tier: 3
caused-by: ["[[nf-kb]]", "[[cellular-senescence]]", "[[chronic-inflammation]]"]
causes: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
gtex-aging-correlation: null
mr-causal-evidence: not-tested
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Fisher 1996 and Fisher 2009 claims cross-checked against verified study pages (both study pages verified same date against full PDFs). UniProt P03956 domain annotations re-confirmed via UniProt REST API. Open Targets druggability API confirmed (SM Approved Drug: True = tier-1 max-druggability; aging-context remains tier 3 per CLAUDE.md aging-context convention). Mouse ortholog UniProt accessions corrected (Q9JHH5→Q9EPL5 Mmp1a; Q8K157→Q9EPL6 Mmp1b). Coppé 2008 SASP citation qualified — MMP-1 appears in supplemental array dataset (Table S2 XLS) but is not explicitly named in main text or primary figures; SASP claim retained with this qualification. MMP-3/MMP-9 secondary-processor paragraphs trimmed to cross-links."
---

# MMP-1 (Interstitial Collagenase / Collagenase-1)

MMP-1 is the textbook collagenase: a secreted Zn²⁺-dependent matrix metalloproteinase that cleaves native triple-helical collagens I, II, and III at a single Gly-Ile/Leu bond located three-quarters from the N-terminus. It is the **central effector of collagen degradation in skin aging**, operating in two mechanistically distinct contexts: (1) acute UV-driven photoaging via AP-1/NF-κB transcriptional induction, and (2) intrinsic chronological aging via a self-amplifying mechano-oxidative feedback loop in aged dermis. MMP-1 also functions as a SASP component in senescent fibroblasts across multiple tissues, making it a mechanistic hub linking [[cellular-senescence]], [[loss-of-proteostasis]], and [[chronic-inflammation]].

## Identity

| Field | Value |
|---|---|
| UniProt | P03956 (MMP1_HUMAN) |
| NCBI Gene | 4312 |
| HGNC | 7155 |
| Ensembl | ENSG00000196611 |
| Chromosome | 11q22.2 |
| Protein length | 469 amino acids (canonical isoform) |
| Molecular weight | 54,007 Da (precursor); secreted as proMMP-1; active forms ~52 kDa (latent) and ~45 kDa (active processed form) |
| Mouse ortholog | Mmp1a (UniProt Q9EPL5) / Mmp1b (UniProt Q9EPL6) — mouse has two paralogs where human has one |

## Protein structure and activation

MMP-1 is a multidomain protein with the canonical MMP architecture [^uniprot-p03956]:

- **Signal peptide** (residues 1–19) — directs ER translocation; cleaved post-translationally
- **Propeptide / prodomain** (residues 20–99) — contains the **cysteine-switch motif** (PRCGVPD); the unpaired cysteine coordinates the catalytic Zn²⁺ ion, maintaining latency ("cysteine-switch" mechanism of zymogen regulation)
- **Catalytic domain** (residues 100–269) — contains the **HEXXHXXGXXH zinc-binding motif** (where His residues directly coordinate catalytic Zn²⁺) and two structural Zn²⁺ ions plus up to four Ca²⁺ ions per subunit required for structural stability; autolytic processing yields a 22 kDa fragment (residues 100–269) and a 27 kDa fragment (residues 270–469)
- **Hinge region (linker)** — implicit within the full-length chain; the autolytic cleavage site at residue 269/270 demarcates the catalytic and hemopexin halves
- **Hemopexin-like C-terminal domain** (residues 270–469) — four-bladed beta-propeller (four hemopexin repeats: 275–324, 325–371, 374–422, 423–466); mediates substrate specificity (collagen recognition and unwinding), TIMP-1 binding, cell-surface docking, and MMP-1 homodimerisation

### Activation cascade

MMP-1 is secreted as a **proMMP-1 zymogen**. Extracellular activation requires removal of the propeptide, exposing the active site. The canonical activator in the skin aging context is **MMP-3 (stromelysin-1)**, which processes proMMP-1 → active MMP-1; plasmin provides an alternative activation route. Once activated, MMP-1 cleaves fibrillar collagens at the Gly775-Ile776 bond in the α1(I) chain (and equivalent sites in collagen II/III), producing characteristic 3/4 + 1/4 fragments (TCA and TCB) that are then susceptible to further denaturation and degradation by gelatinases such as MMP-2 and MMP-9.

**MMP-3 and MMP-9 — secondary processors:**

[[mmp-3]] (stromelysin-1) serves as the canonical proMMP-1 activator; it is UV-co-induced with MMP-1 in human skin [^fisher1996] but was not independently quantified in the Fisher 2009 aged-dermis cohort [^fisher2009]. [[mmp-9]] (92K gelatinase) is UV-co-induced alongside MMP-1 [^fisher1996] and is discussed as a downstream processor of MMP-1 collagen-cleavage fragments in the intrinsic-aging context [^fisher2009], but is also not independently quantified there. Canonical biology for both enzymes is on their dedicated pages.

## Role in aging

### 1. Photoaging — UV → AP-1/NF-κB → MMP-1 cascade

Fisher et al. 1996 established the molecular mechanism of photoaging in adult human skin in vivo [^fisher1996]:

- A single dose of UVB at 2 MED induced MMP-1 (interstitial collagenase) mRNA, protein, and enzymatic activity in adult buttock skin within 24–48 h, peaking at ~16–24 h. Induction was dose-dependent starting at the lowest dose tested (0.01 MED — equivalent to ~2–3 min summer sun exposure, with no perceptible reddening).
- MMP-3 and MMP-9 were co-induced; MMP-2 (72K gelatinase) was explicitly **not** induced by UVB.
- Transcription factors AP-1 (c-Jun/c-Fos heterodimer) and NF-κB were activated within 15–30 min post-UVB at sub-erythemogenic doses, preceding and driving MMP transcription.
- **All-trans retinoic acid (tretinoin) pretreatment** (0.1%, 48 h before UVB) reduced UVB-induced AP-1 DNA binding by **70%** (text-stated, p.338) and reduced MMP-1 mRNA, protein, and enzymatic activity by **50–80%** (text-stated, p.338–339). The mechanism is **AP-1 transrepression via protein–protein interaction between retinoic acid receptors and Jun/Fos** — not a sunscreen effect (tretinoin did not reduce UV-induced skin reddening; not CBP/p300 competition; not TIMP-1 induction).

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | N/A — this IS direct human in-vivo evidence |
| Phenotype conserved in humans? | N/A — measured in human skin biopsies |
| Replicated in humans? | Yes — Fisher 1996 is primary human in-vivo data; mechanistic replication at the AP-1 level has been extensively confirmed [^fisher1996] |

### 2. Intrinsic skin aging — self-amplifying collagen-fragmentation loop

Fisher et al. 2009 demonstrated in sun-protected human buttock skin (n=4 young 21–30 yr, n=4 aged >80 yr) [^fisher2009]:

- **MMP-1 mRNA is ~8-fold higher** in aged vs young dermis (n=4, P<0.02)
- **MMP-1 protein is ~2-fold higher** in aged vs young dermis (n=6, P<0.01)
- **Protein oxidation (carbonyl content) is ~2-fold higher** in aged dermis (n=7, P<0.05) — establishing elevated oxidative stress as a concomitant intrinsic aging feature

The mechanistic basis is a **self-amplifying degradation loop** operating independently of UV:

```
Intact collagen → MMP-1 activity (basal) → collagen I fragmentation
                                                   ↓
                                   Reduced fibroblast cytoskeletal tension
                                                   ↓
                                      ↑ Mitochondrial ROS (~3-fold in vitro)
                                                   ↓
                               ↑ c-Jun/AP-1 + ↑ α2β1 integrin
                                     ↙                ↘
                         ↑ MMP-1 mRNA/protein      ↓ Procollagen I synthesis
                                     ↓
                            More collagen fragmentation → loop continues
```

The mechano-oxidative signaling axis driving MMP-1 elevation is **c-Jun/AP-1 + α2β1 integrin** (NOT YAP/TAZ — Fisher 2009 predates YAP/TAZ mechanotransduction in fibroblasts; YAP/TAZ absence on this page is paper-confirmed) [^fisher2009]. The key evidence:
- DFs in 3D fragmented-collagen lattice cultures show ~3-fold elevated intracellular ROS vs intact-collagen (n=3, P<0.05)
- c-Jun protein elevated 2-fold; phospho-c-Jun DNA-binding elevated 3.5-fold in fragmented collagen cultures
- Dominant-negative c-Jun overexpression reduces MMP-1 transcription; α2β1 integrin blocking antibody similarly reduces MMP-1 mRNA
- Antioxidant MitoQ₁₀ (1 nmol/L, 72 h) reduces MMP-1 mRNA ~30% and protein ~40% in fragmented-collagen cultures (n=5, P<0.05) — proof-of-principle that the oxidative arm of the loop is pharmacologically tractable in vitro

The mRNA/protein discordance (8-fold mRNA vs 2-fold protein) is not explicitly discussed in Fisher 2009 and likely reflects rapid secretion of MMP-1 protein into the ECM reducing intracellular accumulation. #gap/no-mechanism — exact post-transcriptional regulation of MMP-1 in aged dermis not resolved.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | N/A — in-vivo arm uses human buttock skin directly |
| Phenotype conserved in humans? | N/A — in-vivo human biopsy data |
| Replicated in humans? | Partial — in-vivo data n=4 per group; replicated conceptually across multiple Fisher-lab publications; independent lab replication of the full mechano-oxidative loop not yet demonstrated #gap/needs-replication |

### 3. SASP component in cellular senescence

MMP-1 appears in the SASP antibody-array dataset of Coppé et al. 2008 (supplemental Table S2 — the complete 120-protein array catalog) [^coppe2008]. It is not explicitly named among the headline SASP factors discussed in the main text or primary figures (which highlight IL-6, IL-8, GRO-α, GM-CSF, ICAM-1, MCP-1/2/3/4, IGFBP-2/4 as the core secreted components). Senescent dermal fibroblasts are known to secrete MMP-1 via constitutive NF-κB activation, creating an ECM-degrading microenvironment — this is well-supported in the Fisher-lab photoaging and intrinsic-aging literature above — but the canonical SASP landmark citation for MMP-1 specifically requires the supplemental dataset. See [[sasp]] for the full SASP composition and regulatory framework.

## Druggability assessment

**Aging-context tier: 3** (predicted druggable — well-defined Zn²⁺-binding active site; substrate-binding hemopexin domain; but no validated clinical-stage inhibitor for any aging indication).

Open Targets Platform (ENSG00000196611, queried 2026-05-19) reports **SM Approved Drug: True** — reflecting that broad-spectrum MMP inhibitors (likely sub-antimicrobial-dose doxycycline/Periostat, approved for [[periodontitis]] — where MMP-1/MMP-8 collagenolysis drives the connective-tissue attachment loss underlying [[gingival-recession]]) exist as approved drugs targeting the MMP family. Under the CLAUDE.md aging-context convention, tier reflects whether a clinical drug exists for an aging indication that engages this protein; no such drug exists for MMP-1 in aging. Max-druggability tier = 1; aging-context tier = 3. Additional SM tractability signals: Structure with Ligand: True; High-Quality Ligand: True; Druggable Family: True.

**Historical clinical trial failures:** First-generation broad-spectrum MMP inhibitors — **marimastat**, **batimastat**, and **prinomastat** — were tested in oncology trials (late 1990s–2000s) and uniformly failed. Primary reasons: lack of selectivity across the 23-member MMP family (off-target musculoskeletal toxicity, "musculoskeletal syndrome"); incomplete understanding of pro- and anti-tumorigenic MMP roles in cancer. No MMP-1-selective clinical-stage compound exists as of 2026-05-19. #gap/long-term-unknown — whether selective MMP-1 inhibition (vs. broad MMP inhibition) would avoid the musculoskeletal toxicity that doomed prior compounds is unresolved.

**Upstream pharmacological handles (validated in humans):**
- **Tretinoin / all-trans retinoic acid** — topical retinoid; AP-1 transrepression by RAR/RXR → 50–80% reduction in MMP-1 mRNA, protein, and activity at clinical concentrations [^fisher1996]. This is tier 1 from the perspective of AP-1 modulation upstream of MMP-1. Tretinoin page: [[tretinoin]] (forward-ref; page not yet seeded — see implicit stubs below).
- **Senolytics** (e.g., [[dasatinib]] + quercetin) — reduce senescent cell burden → reduce SASP-derived MMP-1 output indirectly.
- **NF-κB inhibitors / senomorphics** — reduce transcriptional MMP-1 induction; see [[nf-kb]] and [[sasp]] pages for mechanistic detail.

## Cross-tissue relevance

MMP-1 is not limited to skin biology. Two aging-adjacent phenotypes are particularly relevant:

**Cardiac fibrosis** — MMP-1 participates in myocardial ECM remodeling. In the context of cardiac aging and pressure-overload-induced fibrosis, altered MMP/TIMP balance (including MMP-1) contributes to pathological collagen turnover. See [[cardiac-fibrosis]]. #gap/needs-human-replication — the quantitative MMP-1-specific contribution to age-related (as opposed to disease-driven) cardiac ECM remodeling requires a dedicated citation.

**Osteoarthritis** — MMP-1 is one of several collagenases overexpressed in osteoarthritic cartilage and synovial tissue, contributing to type II collagen degradation (MMP-1 cleaves collagen II as well as I/III). See [[osteoarthritis]]. #gap/needs-human-replication — primary citations needed for MMP-1-specific osteoarthritis evidence; MMP-13 may be the dominant cartilage collagenase in OA.

## Pathway membership

- **[[nf-kb]]** — transcriptional driver of MMP-1 expression in both UV (acute) and SASP (chronic) contexts
- **[[ras-mapk]]** — AP-1 (c-Jun phosphorylation by JNK, c-Fos induction by ERK) is the downstream AP-1-level converging mechanism; MAPK activation by UV and by fragmented-ECM ROS both feed into AP-1
- **[[tgf-beta]]** — the TGF-β/Smad3 axis is a major *negative* regulator of MMP-1 — TGF-β suppresses MMP-1 transcription and stimulates TIMP-1; aging-related decline in TGF-β/Smad3 signaling in dermal fibroblasts contributes to the disinhibition of MMP-1 in aged skin (separate body of Fisher-lab work; citation needed)

## Key interactors

- **TIMP-1** (tissue inhibitor of metalloproteinases-1) — primary endogenous inhibitor of MMP-1; binds the active site stoichiometrically (1:1 non-covalent); forward-ref: [[timp-1]] (page not yet seeded)
- **COL1A1 / COL1A2** — primary substrates; collagen I triple helix cleaved at Gly775-Ile776 (α1 chain); forward-refs: [[col1a1]], [[col3a1]] (pages not yet seeded)
- **MMP-3 (stromelysin-1)** — proMMP-1 activator (see Protein structure section above)
- **Integrins α2β1** — upregulated by ROS in aged/fragmented-collagen microenvironment; feedback signal that elevates MMP-1 transcription via AP-1 [^fisher2009]

## Limitations and gaps

| Gap | Tag | Notes |
|---|---|---|
| Fisher 2009 in-vivo arm n=4 per group — all quantitative fold-changes need larger-n replication | #gap/needs-replication | P<0.02 for mRNA is nominal at n=4; effect-size confidence is wide |
| MitoQ rescue data is in-vitro only | #gap/needs-human-replication | No in-vivo MitoQ skin-aging study in humans documented |
| Open Targets confirms SM Approved Drug: True (likely doxycycline/Periostat for periodontitis); aging-context tier 3 retained per CLAUDE.md convention | (resolved 2026-05-19) | Max-druggability = tier 1; aging-context = tier 3 |
| No MR evidence for MMP-1 causal contribution to aging outcomes | #gap/unsourced | GWAS hits exist for skin and OA phenotypes; MR study may exist but was not confirmed during seeding |
| MMP-1 contribution to cardiac and OA aging needs dedicated citation | #gap/needs-human-replication | Cross-tissue relevance described qualitatively; primary quantitative source needed |
| Selective MMP-1 inhibitor (distinct from broad MMP inhibitors) not yet clinically validated | #gap/long-term-unknown | Selectivity vs. toxicity trade-off unresolved |
| TGF-β/Smad3 disinhibition mechanism in aged DFs | #gap/unsourced | Asserted as a Fisher-lab parallel body of work; specific citation not confirmed during seeding |

## Footnotes

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · n=6–17 (varies by experiment; see study page) · in-vivo · P<0.05–0.01 · model: adult human buttock skin, UV challenge; full PDF verified 2026-05-19

[^fisher2009]: [[studies/fisher-2009-collagen-fragmentation-mmp]] · n=4 (in-vivo mRNA), n=5–7 (in-vivo protein/carbonyl), n=3–5 (in-vitro) · in-vivo + in-vitro · P<0.02–0.01 · model: aged (>80 yr) vs young (21–30 yr) human buttock skin biopsies + 3D collagen lattice cultures; full PDF verified 2026-05-19

[^coppe2008]: doi:10.1371/journal.pbio.0060301 · Coppé JP, Patil CK, Rodier F, Sun Y, Muñoz DP, Goldstein J, Nelson PS, Desprez PY, Campisi J · *PLoS Biol* 2008;6(12):e301 · observational + in-vitro · n=multiple cell lines/primary cultures (5 fibroblast strains + prostate epithelial cells) · model: human fibroblasts and epithelial cells; foundational SASP characterization. **MMP-1 qualification:** MMP-1 appears in the supplemental array dataset (Table S2 — 120-protein catalog) but is NOT explicitly named in the main text or primary figures; the headline SASP components in main figures are IL-6, IL-8, GRO-α, GM-CSF, MCP-1/2/3/4, IGFBP-2/4, and ICAM-1. Full PDF read 2026-05-19 — local PDF at a local paper archive (DOI 10.1371/journal.pbio.0060301; download_status: completed)

[^uniprot-p03956]: UniProt P03956 (MMP1_HUMAN), Swiss-Prot reviewed entry, accessed 2026-05-19 · canonical protein sequence, domain annotation, glycosylation (Asn-120), phosphorylation sites (Ser-57, Thr-274, Tyr-360), autolytic cleavage products (22 kDa and 27 kDa forms), disease association (generalized dystrophic epidermolysis bullosa)
