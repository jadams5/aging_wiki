---
type: protein
aliases: [MAP3K7, transforming growth factor-beta-activated kinase 1, mitogen-activated protein kinase kinase kinase 7, TGF-beta-activated kinase 1]
uniprot: O43318
ncbi-gene: 6885
hgnc: 6859
ensembl: ENSG00000135341
genage-id: null   # TAK1 not currently listed in GenAge human aging gene database; #gap/needs-canonical-id
pathways:
  - "[[il-1-signaling]]"
  - "[[nf-kb]]"
  - "[[ras-mapk]]"
  - "[[tgf-beta-signaling]]"
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: [Q15653, O43150, Q9Y4C0]   # TAB1 (Q15653), TAB2 (O43150), TAB3 (Q9Y4C0); see body
is-noncoding-rna: false
druggability-tier: 2   # High-quality covalent (5Z-7-oxozeaenol) and reversible (Takinib) probes; no FDA-approved TAK1-specific drug. Aging-context rationale: no aging-validated clinical compound exists; tier 2 appropriate. See Pharmacology section.
gtex-aging-correlation: null   # not yet retrieved; #gap/needs-population-data — requires GTEx v2 API lookup per sops/finding-tissue-expression.md
mr-causal-evidence: not-tested   # No published MR study using MAP3K7 germline variants to test causal effect on inflammatory aging outcomes; no strong GWAS instruments described in literature.
caused-by:
  - "[[traf6]]"          # K63-polyubiquitin chain recruitment via TAB2/TAB3 zinc-finger domains
  - "[[tab1]]"           # constitutive allosteric activator binding
  - "[[tgf-beta-signaling]]"   # TGF-β/BMP receptor-activated TAK1 arm
causes:
  - "[[nf-kb]]"              # via IKKβ Ser177/Ser181 phosphorylation
  - "[[ras-mapk]]"           # via MKK4/7 → JNK and MKK3/6 → p38
  - "[[il-1-signaling]]"     # downstream effector output of the IL-1 transduction cascade
  - "[[chronic-inflammation]]"  # via NF-κB + AP-1 driven pro-inflammatory gene transcription
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Wang 2001 (10.1038/35085597) read end-to-end from local PDF — K63-ubiquitin/TAB2 mechanism verified; TAB3 double-KO claim removed (TAB3 not described in this paper). UniProt O43318 REST-verified: 606 aa, kinase domain 36–291, active site Lys156, Thr187/Ser192/Thr184 autophosphorylation confirmed. Ninomiya-Tsuji 2003 DOI (10.1074/jbc.M207453200) confirmed via Crossref. Acosta 2013 DOI corrected (10.1038/ncb2784 confirmed; covers paracrine senescence via inflammasome, not IL-1α autocrine loop — SASP autocrine claim reattributed to Orjalo 2009 PNAS). Cardiac cKO citation corrected from Liu 2013 to Li et al. 2014 Circulation (10.1161/CIRCULATIONAHA.114.011195). Druggability tier 2 confirmed via Open Targets API (no approved drug; high-quality ligand = true). Deferred (no PDF access): Sato 2005 (not_oa), Wade 2016 (pending), Yuan 2023 (no archive entry), Wang 2025 (no archive entry), Totzke 2017 (pending)."
---


# TAK1 (MAP3K7)

**TAK1** (TGF-beta-activated kinase 1; gene *MAP3K7*) is a serine/threonine kinase of the MAP3K (MAPK kinase kinase) family that functions as a critical convergence node integrating inflammatory and stress signals — from IL-1R/TLR, TNF-R, TGF-β, and BMP receptors — into two parallel downstream outputs: **NF-κB activation** (via IKK/NEMO) and **MAPK activation** (via JNK/p38 through MKK4/7 and MKK3/6). In the aging context, TAK1 is the MAP3K that bridges [[traf6]]-assembled K63-polyubiquitin scaffolds to the NF-κB transcriptional programme driving [[chronic-inflammation|inflammaging]] and [[sasp|SASP]] maintenance.

TAK1 is the fourth adaptor-to-effector hand-off in the canonical [[il-1-signaling]] cascade: IL-1R1/IL-1RAcP → [[myd88]] → [[irak4]] → [[traf6]] → **TAK1** → IKK/MAPK. This page covers the protein biology; pathway-level context lives on [[il-1-signaling]] (verified R27).

---

## Identity

| Field | Value |
|---|---|
| UniProt | O43318 (MAP3K7_HUMAN) |
| NCBI Gene | 6885 |
| HGNC | 6859 |
| Ensembl | ENSG00000135341 |
| Length | 606 aa (canonical isoform) |
| Organism | Homo sapiens |
| Mouse ortholog | *Map3k7* (one-to-one; high conservation) |

---

## Domain architecture

TAK1 has three functional regions [^uniprot_o43318]:

| Region | Residues (approx.) | Function |
|---|---|---|
| **Protein kinase domain** | 36–291 | Catalytic core; ATP-binding pocket; site of covalent (5Z-7-oxozeaenol) and competitive (Takinib) inhibitors |
| **Linker / regulatory** | 292–400 | Disordered; mediates protein-protein interactions |
| **C-terminal domain** | 400–606 | TAB1/TAB2/TAB3 binding; coiled-coil elements; required for complex formation and membrane recruitment |

**Key post-translational modifications:**
- **Thr187** — activation loop autophosphorylation; required for catalytic activity; dephosphorylated by PP2A and PPP6C [^uniprot_o43318]
- **Ser192** and **Thr184** — additional regulatory phosphorylation sites
- K63-linked polyubiquitin attachment (non-degradative) — promotes TAK1 complex activation upon TRAF6 engagement [^wang2001]

---

## TAB co-regulatory complex

TAK1 does not act alone in cells. It constitutively associates with three TAB (TAK1-binding) proteins that govern its activation:

| Subunit | Gene | UniProt | Role |
|---|---|---|---|
| **TAB1** | *TAB1* | Q15653 | Constitutive allosteric activator; binds C-terminal TAK1 domain; promotes basal Thr187 autophosphorylation |
| **TAB2** | *TAB2* | O43150 | K63-polyubiquitin reader (NZF zinc-finger domain); links TRAF6-assembled ubiquitin chains to TAK1 complex |
| **TAB3** | *TAB3* | Q9Y4C0 | Functionally redundant with TAB2; NZF domain K63-ubiquitin sensor; alternative K63-ubiquitin docking subunit |

TAB2 and TAB3 are mutually exclusive alternatives in the complex for K63-ubiquitin sensing; TAB1 is a constitutive member. Wang 2001 [^wang2001] demonstrated that immunodepletion of TAB2 from HEK-293 cell extracts abolished TRAF6-dependent IKK activation, and that recombinant TAK1-TAB1-TAB2 complex is the minimal unit sufficient for IKK activation. TAB3 and its functional redundancy with TAB2 for K63-ubiquitin sensing were characterized in subsequent studies; the TAB2/TAB3 double-knockout phenotype (abolishing TAK1 activation downstream of IL-1R and TLR) was established by Ishitani et al. 2003 and related work. #gap/needs-replication — the double-KO data are from non-human cell systems.

---

## Activation mechanism (IL-1/TLR arm)

In the IL-1R/TLR signalling context, TAK1 activation proceeds through a ubiquitin-scaffolding mechanism [^wang2001] [^sato2005]:

1. [[traf6]] (E3 ubiquitin ligase) assembles **K63-linked polyubiquitin chains** on itself and IRAK1 upon receptor complex activation.
2. The **NZF zinc-finger domain** of TAB2 or TAB3 recognizes and binds K63-polyubiquitin chains — recruiting the TAK1·TAB1·TAB2/3 complex to the receptor signalosome at the membrane periphery.
3. Proximity to the ubiquitin scaffold triggers **trans-autophosphorylation of Thr187** in the activation loop.
4. Activated TAK1 then phosphorylates downstream substrates: IKKβ (Ser177/Ser181) in the **NF-κB arm** and MKK4/7 and MKK3/6 in the **MAPK arm** (below).

This ubiquitin-dependent kinase activation mechanism is well established [^wang2001] and represents a paradigm for non-degradative K63-ubiquitin signalling. Critically, the kinase activity depends on ubiquitin scaffolding: TAK1 is inactive as a monomer and requires TAB1 for basal autophosphorylation competence and TAB2/TAB3 for stimulus-coupled membrane recruitment.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TAK1, TAB1/2/3 all human-described; NF-κB/MAPK outputs human-validated |
| Phenotype conserved in humans? | yes — IL-1-driven NF-κB/inflammaging conserved (CANTOS, n=10,061) [^ridker2017_xref] |
| Replicated in humans? | partial — NF-κB arm validated; TAK1-specific human genetics via FMD2 gain-of-function mutations [^wade2016] |

---

## NF-κB arm

TAK1 phosphorylates **IKKβ at Ser177 and Ser181**, activating the trimeric IKK complex (IKKα/IKKβ/NEMO). Active IKK then phosphorylates IκBα at Ser32/Ser36, targeting it for proteasomal degradation. This releases NF-κB dimers (predominantly p65/p50) to translocate to the nucleus and drive transcription of pro-inflammatory cytokines (IL-1β, IL-6, IL-8, TNF-α), chemokines, adhesion molecules, and SASP components [^wang2001] [^sato2005].

TAK1's role in IL-1-driven NF-κB activation was definitively established by Sato et al. (2005): TAK1-deficient mouse embryonic fibroblasts (TAK1-/- MEFs) completely failed to activate NF-κB or MAPKs in response to IL-1β and TNF-α, demonstrating that TAK1 is **non-redundant** in this cascade [^sato2005]. #gap/needs-replication — this was demonstrated in MEFs; cell-type-specific dependencies in human immune or senescent cells require separate validation.

---

## MAPK arm

In parallel with the NF-κB arm, TAK1 activates two MAPK kinase (MKK) branches [^wang2001]:

- **MKK4 and MKK7** → JNK (c-Jun N-terminal kinase) → AP-1 transcriptional activation; mRNA stabilization of inflammatory genes (via ARE elements)
- **MKK3 and MKK6** → p38 MAPK → inflammatory gene transcription, cytokine mRNA stabilization, MAPKAP-K2 (MK2) activation → additional post-transcriptional inflammatory output

The dual NF-κB + MAPK output makes TAK1 a **signal amplifier** rather than a binary switch: inflammatory transcriptional responses (NF-κB) are reinforced by post-transcriptional stabilization of cytokine mRNAs (MAPK/MK2 arm), creating a co-amplified inflammatory gene expression program.

---

## TGF-β/BMP arm

Beyond IL-1/TLR signalling, TAK1 is also activated downstream of **TGF-β and BMP receptors** — the pathway for which it was originally named [^uniprot_o43318]. In this context, receptor-activated Smads recruit TAB1 and the TAK1 complex independently of TRAF6-K63 ubiquitin chains. The TGF-β/TAK1/MKK4/JNK axis contributes to myofibroblast activation, fibrosis, and apoptosis in various tissue contexts. This arm may be relevant to age-associated fibrosis but is less well studied in the aging context than the IL-1/TLR arm. #gap/no-mechanism

---

## Aging connection

### Inflammaging via chronic TAK1 activation

Chronic low-level activation of the IL-1 → TRAF6 → TAK1 → NF-κB axis is a central driver of **[[chronic-inflammation|inflammaging]]** — the persistent, low-grade sterile inflammation characteristic of aged tissue. TAK1 is the MAP3K that transduces K63-polyubiquitin signals from TRAF6 into the NF-κB transcriptional programme, placing it mechanistically upstream of the major inflammaging effectors (IL-1β, IL-6, TNF-α).

### TAK1 in SASP maintenance

Senescent cells sustain their own [[sasp|SASP]] through an **IL-1α autocrine loop**: cell-surface IL-1α on senescent cells signals through IL-1R → NF-κB → SASP cytokine transcription, including IL-6 and IL-8, in a feed-forward manner [^orjalo2009]. Because TAK1 is the MAP3K required for IL-1R-driven NF-κB activation (established by Sato 2005 [^sato2005] in MEFs), it is mechanistically positioned as the kinase that would sustain this autocrine loop in senescent cells. **However, direct genetic evidence that TAK1 specifically (vs IKK directly) maintains tonic NF-κB in human senescent cells has not been published.** This is an inference from pathway architecture. #gap/unsourced — the claim requires a dedicated experiment (TAK1 KO in senescent human fibroblasts with SASP quantification) to be directly sourced.

Separately, Acosta et al. 2013 [^acosta2013] described a **paracrine** senescence program orchestrated by the inflammasome (including IL-1β secretion), which is mechanistically related but distinct from the autocrine IL-1α loop. The senescent retinal pigment epithelium (RPE) model provides supporting evidence for TAK1's role in senescence-driven inflammation: TAK1/p38 MAPK is activated by senescent RPE cells and pharmacological TAK1 inhibition with 5Z-7-oxozeaenol or Takinib suppresses pathological angiogenesis in a senescence-driven choroidal neovascularization model [^wang2025]. #gap/needs-replication — these are rat/cell models; human validation absent.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TAK1/NF-κB axis conserved; SASP mechanism conserved across human fibroblasts and epithelial cells |
| Phenotype conserved in humans? | partial — SASP-maintenance loop mechanistically described in human cells; TAK1-specific dependency not genetically confirmed in human senescent cells |
| Replicated in humans? | no — TAK1 role in SASP maintenance demonstrated in cell models; no human aging intervention study |

### Cardiac aging

TAK1 has been studied in the cardiac aging context through genetic models. Conditional cardiomyocyte-specific *Map3k7* deletion (cKO) in mice produces spontaneous apoptosis and necroptosis in cardiomyocytes, leading to adverse remodeling and heart failure, establishing that baseline TAK1 activity is required for normal cardiomyocyte survival — a finding that complicates the therapeutic picture [^li2014]. Conversely, TAB1-driven TAK1 activation drives pathological cardiac hypertrophy: RNF207-mediated K63-ubiquitination of TAB1 activates TAK1 → p38/JNK in pressure overload-induced hypertrophy, and RNF207 knockdown blunts cardiac remodeling in transverse aortic constriction (TAC) mouse models [^yuan2023]. #gap/needs-human-replication — these are mouse models; translation to human cardiac aging is not established.

---

## Pharmacology

TAK1 has been pursued as a therapeutic target for inflammatory and autoimmune disease for over 20 years, resulting in two well-characterized chemical probes but no FDA-approved agent.

### 5Z-7-oxozeaenol (covalent inhibitor)

A resorcylic acid lactone natural product derived from the fungus *Oomycete*. Binds covalently to Cys174 in the TAK1 ATP-binding pocket (irreversible, electrophilic Michael acceptor). Inhibits TAK1 with IC50 in the low nanomolar range [^ninomiya2003]. Mechanism: 5Z-7-oxozeaenol blocked IL-1-induced TAK1 autophosphorylation, JNK/p38 activation, IκB kinase activation, and NF-κB nuclear translocation, and suppressed COX-2 production in treated cells [^ninomiya2003]. Widely used as a research tool. **Not suitable for clinical development** due to irreversibility, poor selectivity across the kinome (multiple off-targets with reactive cysteines), and lack of pharmacokinetic properties.

### Takinib (reversible ATP-competitive inhibitor)

A selective, reversible, ATP-competitive small-molecule TAK1 inhibitor developed to address the selectivity problems of 5Z-7-oxozeaenol [^totzke2017]. Totzke et al. (2017) demonstrated that Takinib shows a narrow selectivity profile against a panel of 340 kinases and broadens the therapeutic window of TNF-α inhibition in cancer and autoimmune disease models. Has been tested in combination with TNF pathway blockade. #gap/long-term-unknown — no clinical agent has yet advanced to Phase 1 for any indication. Selectivity across the kinome at pharmacologically relevant concentrations remains an open question for in vivo use.

### No aging-specific clinical agent

Despite two decades of probe development, no TAK1 inhibitor has entered clinical trials for aging, inflammatory disease, or SASP-related indications as of 2026. The primary barrier is the dual role of TAK1: it is required for normal immune signalling (TAK1-/- mice are embryonic lethal) and for cardiomyocyte survival, meaning that non-selective systemic inhibition risks immunosuppression and cardiac toxicity. Tissue-specific or senescence-context-specific approaches would be needed to unlock therapeutic utility in aging. Druggability tier 2 (R27 aging-context convention): high-quality probes exist; no aging-validated clinical drug.

---

## Disease genetics

**Frontometaphyseal dysplasia type 2 (FMD2)** — gain-of-function missense mutations in *MAP3K7* cause this X-linked skeletal dysplasia characterized by supraorbital hyperostosis, joint contractures, and mixed hearing loss [^wade2016]. The causative mutations cluster in the kinase domain or near regulatory sites, constitutively increasing TAK1 kinase activity and downstream NF-κB/MAPK output. This genetic evidence confirms that chronic TAK1 hyperactivation is pathological in humans — directly relevant to the inflammaging hypothesis, where TAK1 is chronically but less severely activated. No aging-specific gain-of-function *MAP3K7* GWAS signal has been reported. #gap/needs-population-data

---

## Key interactors

- [[traf6]] — E3 ubiquitin ligase; primary upstream activator in IL-1/TLR arm; assembles K63-ubiquitin scaffold recognized by TAB2/TAB3
- [[tab1]] — constitutive allosteric activator (complex-subunit; not seeded yet)
- [[myd88]] — upstream adaptor linking TIR-domain receptors to IRAK4 → TRAF6 → TAK1 cascade
- [[irak4]] — proximal kinase activating TRAF6 before TAK1 in the IL-1R/TLR cascade
- [[nf-kb]] — primary downstream transcriptional target (via IKKβ phosphorylation)
- [[ras-mapk]] — MAPK arm output (JNK via MKK4/7; p38 via MKK3/6)
- [[il-1-signaling]] — the integrating pathway page for full cascade context (verified R27)

---

## Notes on causal-graph entries

The `caused-by:` frontmatter entries reflect three distinct TAK1 activation mechanisms:
- **[[traf6]]** — primary upstream activator in the IL-1/TLR arm; TRAF6 assembles K63-polyubiquitin chains recognized by TAB2/TAB3 NZF zinc-finger domains, recruiting the TAK1 complex to the receptor signalosome [^wang2001]
- **[[tab1]]** — constitutive allosteric activator; TAB1 binds the TAK1 C-terminal domain and promotes basal Thr187 autophosphorylation independently of stimulus [^uniprot_o43318]
- **[[tgf-beta-signaling]]** — the pathway for which TAK1 was originally named; receptor-activated Smads recruit the TAK1 complex independently of TRAF6/K63-ubiquitin [^uniprot_o43318]

---

## Cross-references

- [[il-1-signaling]] — verified pathway page (R27); cascade diagram and biological context
- [[traf6]] — immediate upstream activator (R28 sibling page)
- [[myd88]] — upstream adaptor (R28 sibling page)
- [[irak4]] — upstream kinase (R28 sibling page)
- [[nf-kb]] — downstream transcriptional effector
- [[ras-mapk]] — downstream MAPK arm
- [[chronic-inflammation]] — hallmark driven by TAK1-dependent NF-κB output
- [[sasp]] — functional output; TAK1 maintains SASP via NF-κB in senescent cells
- [[cellular-senescence]] — context in which TAK1 autocrine loop sustains SASP

---

## Limitations and gaps

- **GTEx aging correlation:** `gtex-aging-correlation` not retrieved — requires GTEx v2 API lookup (`sops/finding-tissue-expression.md`). #gap/needs-population-data
- **MR evidence:** No published Mendelian randomization study using MAP3K7 germline instruments for aging-related outcomes. #gap/needs-population-data
- **GenAge entry:** TAK1 not currently in GenAge human aging gene database; entry should be verified on next lint pass. #gap/needs-canonical-id
- **SASP maintenance role:** The IL-1α autocrine loop that TAK1 is positioned to sustain has its primary source in Orjalo 2009 (PNAS; IL-1α as upstream regulator of SASP IL-6/IL-8). Acosta 2013 (Nat Cell Biol, 10.1038/ncb2784) covers paracrine senescence via the inflammasome — a related but distinct mechanism. Direct genetic evidence that TAK1 specifically (vs IKK directly) maintains NF-κB in human senescent cells has not been published. #gap/unsourced — claim requires dedicated experiment.
- **Cardiac aging genetics:** The cardiac TAK1 cKO phenotype (spontaneous apoptosis/necroptosis → heart failure) is sourced to Li et al. 2014 Circulation (10.1161/CIRCULATIONAHA.114.011195). The seeder's reference to "Liu 2013 Cell Death Dis" was incorrect; the correct paper is Li 2014 with Qinghang Liu as corresponding author.
- **TAK1 vs IKK selectivity for aging:** Whether targeting TAK1 upstream vs IKK directly provides better aging-context selectivity is unresolved. Different selectivity profiles across cell types and stimulus contexts remain incompletely mapped. #gap/no-mechanism
- **TGF-β arm in aging fibrosis:** TAK1's role in age-associated fibrosis via the TGF-β/BMP arm is not well characterized; mechanism not established. #gap/no-mechanism
- **WikiPathways ID for TGF-β signaling:** `[[tgf-beta-signaling]]` wikilink is an implicit stub — no `pathways/tgf-beta-signaling.md` page exists yet.

---

## Footnotes

[^uniprot_o43318]: UniProt O43318 (MAP3K7_HUMAN), accessed 2026-05-07 · Swiss-Prot manually curated · 606 aa · kinase domain 36–291 · Thr187 activation loop phosphorylation · TAB1/2/3 binding C-terminal domain

[^wang2001]: doi:10.1038/35085597 · Wang C et al. · Nature 2001 · in-vitro (reconstitution, HEK-293 cell extracts, co-immunoprecipitation, kinase assay) · demonstrated TAK1 is activated as a ubiquitin-dependent kinase by K63-polyubiquitin chains assembled by TRAF6+Ubc13-Uev1A; TAB2 (NZF zinc-finger domain) acts as the ubiquitin receptor subunit; TAK1-TAB1-TAB2 (TRIKA2) is the minimal IKK-activating complex; K63 lysine is necessary and sufficient for ubiquitin-mediated TAK1 activation; TAK1 phosphorylates IKKβ at Ser177/Ser181 and MKK6 at Ser207/Thr211 · NB: TAB3 not described in this paper — double-KO phenotype is from subsequent work · local PDF:  (local PDF)

[^sato2005]: doi:10.1038/ni1255 · Sato S et al. (Akira lab) · Nature Immunology 2005 · in-vivo + in-vitro (TAK1 conditional KO mice, TAK1-/- MEFs) · TAK1-deficient cells completely failed to activate NF-κB or MAPKs in response to IL-1β and TNF; TAK1 is non-redundant in innate and adaptive immune signalling · 963 citations · not locally available (not_oa)

[^ninomiya2003]: doi:10.1074/jbc.M207453200 · Ninomiya-Tsuji J et al. · J Biol Chem 2003 · in-vitro + in-vivo (cell-based assays, mouse model) · 5Z-7-oxozeaenol identified as covalent TAK1 inhibitor; blocked IL-1-induced TAK1 autophosphorylation, JNK/p38 activation, IκB kinase activation, NF-κB translocation, and COX-2 production · 416 citations · not yet locally downloaded (pending)

[^totzke2017]: doi:10.1016/j.chembiol.2017.07.011 · Totzke J et al. · Cell Chem Biol 2017 · in-vitro + in-vivo (340-kinase selectivity panel; TNF model) · Takinib is a selective, reversible, ATP-competitive TAK1 inhibitor; broadens efficacy of TNF-α inhibition in cancer and autoimmune disease models · 126 citations · not yet locally downloaded (pending); OA bronze

[^wade2016]: doi:10.1016/j.ajhg.2016.05.024 · Wade EM & Robertson SP · Am J Hum Genet 2016 · human genetics (clinical genetics cohort) · MAP3K7 gain-of-function missense mutations cause Frontometaphyseal Dysplasia type 2; mutations cluster in kinase domain and constitutively hyperactivate TAK1 → NF-κB/MAPK · 68 citations · not locally available (bronze OA, pending download)

[^wang2025]: doi:10.1016/j.exer.2025.110232 · Wang Y et al. · Exp Eye Res 2025 · in-vivo (laser-induced CNV rat model) + in-vitro (senescent RPE cells) · TAK1/p38 MAPK activated by senescent RPE cells drives pathological angiogenesis; 5Z-7-oxozeaenol and Takinib inhibited lesion formation and improved retinal function · 5 citations · not locally available

[^yuan2023]: doi:10.1093/cvr/cvad017 · Yuan L et al. · Cardiovascular Research 2023 · in-vivo (mouse TAC model) + in-vitro · RNF207 promotes K63-ubiquitination of TAB1, activating TAK1 → p38/JNK → pathological cardiac hypertrophy; RNF207 knockdown blunts cardiac remodeling · model: C57BL/6 TAC mice · #gap/needs-human-replication

[^ridker2017_xref]: Cross-reference to [[il-1-signaling]] (verified R27) and [[canakinumab]] for CANTOS trial numerics: doi:10.1056/NEJMoa1707914 · Ridker PM et al. · NEJM 2017 · rct · n=10,061 · canakinumab 150 mg HR 0.85 (95% CI 0.74–0.98) for MACE; establishes IL-1 → NF-κB axis as causally relevant in human cardiovascular aging

[^orjalo2009]: doi:10.1073/pnas.0905299106 · Orjalo AV et al. (Campisi lab) · PNAS 2009 · in-vitro (human senescent fibroblasts) · cell surface-bound IL-1α is an upstream regulator of the senescence-associated IL-6/IL-8 cytokine network; blocking IL-1 receptor signalling suppresses SASP IL-6/IL-8 secretion · model: human IMR-90 and BJ fibroblasts · primary source for the IL-1α autocrine loop in SASP maintenance

[^acosta2013]: doi:10.1038/ncb2784 · Acosta JC et al. (Gil lab) · Nature Cell Biology 2013 · in-vivo + in-vitro · inflammasome-orchestrated complex secretory programme controls **paracrine** senescence (spread of senescence to neighbouring cells); IL-1β and IL-18 are key inflammasome outputs · PMID: 23770676 · NB: this paper covers paracrine senescence, not the IL-1α autocrine loop; do not conflate.

[^li2014]: doi:10.1161/CIRCULATIONAHA.114.011195 · Li L, Chen Y, Doan J, Murray J, Molkentin JD, Liu Q · Circulation 2014 · in-vivo (cardiac-specific Map3k7 cKO mouse) · cardiac-specific ablation of Map3k7 induces spontaneous cardiomyocyte apoptosis and necroptosis → adverse remodeling → heart failure; TAK1 is required for myocardial survival · model: C57BL/6 background · #gap/needs-human-replication
