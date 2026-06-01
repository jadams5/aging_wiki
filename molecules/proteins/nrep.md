---
type: protein
aliases: [P311, PTZ17, C5orf13, neuronal protein 3.1, protein p311]
uniprot: Q16612
ncbi-gene: 9315
hgnc: 16834
ensembl: ENSG00000134986
genage-id: null   # not found in GenAge database as of 2026-05-29 #gap/needs-genage-check
mouse-ortholog: Nrep   # MGI:99444; one-to-one ortholog confirmed via HGNC cross-reference
pathways: ["[[tgf-beta]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 4   # Open Targets 2026-05-29: all SM/AB/PR tractability buckets false; no approved drug, no high-quality ligand, no druggable-family classification; small (68 aa) cytoplasmic IDP with no known small-molecule binder. See Druggability section.
gtex-aging-correlation: null   # #gap/needs-gtex-age-stratified; NREP is expressed in brain (neuronal), lung, and fibroblasts at low-to-moderate bulk RNA-seq TPM; age-stratified Spearman ρ not yet queried
mr-causal-evidence: not-tested   # no Mendelian randomization study identified for NREP vs any aging or mortality outcome; germline instruments not yet characterized
caused-by: []
causes: ["[[tgf-beta]]"]   # NREP drives TGF-β1/2/3 translation via eIF3b; upstream activators of NREP transcription not well characterised in humans
literature-checked-through: 2026-05-29   # PubMed search (NREP OR P311 OR C5orf13) AND (aging/wound healing/fibrosis), 2023-2026; 9 hits triaged; no superseding meta-analysis or RCT found; new fibrosis contexts (corneal: PMID 42153780; renal: PMID 39951942) consistent with existing framing
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Canonical-DB identity fields (UniProt Q16612, NCBI Gene 9315, HGNC 16834, Ensembl ENSG00000134986, MGI Nrep/99444) verified via live REST APIs. Primary-source PDFs read end-to-end: Yue 2014 JBC (doi:10.1074/jbc.M114.609495) — eIF3b Kd 1.26 μM, 5′UTR binding, IDP confirmed; Badri 2013 JCI (doi:10.1172/JCI69884) — hypotension in P311-KO confirmed, n=8/group telemetry; Pan 2002 JCI (doi:10.1172/JCI15614) — TGF-β1-independent non-fibrogenic αSMA myofibroblast phenotype confirmed. Fujitani 2004 (not_oa), Yao 2016 (not_oa), Chen 2022 (not_oa) — these remain background claims tagged #gap/no-fulltext-access. Wang 2017 Frontiers Physiol PDF available but not read (gold OA; claims on the page accurately reflect the abstract-level content; recommend full read on next pass). Tyshkovskiy 2026 aging claims cross-checked against verified study page [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] — parabiosis and DOWN-set framing confirmed; embryonic ground-zero and CR Nrep-specific contributions softened to gap-tagged qualifiers per study-page scope. Retracted paper Liu 2022 (PMID 35154140) confirmed absent from page; retraction in Front Immunol 2026 confirmed via PubMed."
---


# NREP (neuronal regeneration related protein)

NREP (also P311, C5orf13) is a **tiny (68 amino acid), intrinsically disordered, cytoplasmic protein** that functions as a translational enhancer: it binds the 5′ UTRs of TGF-β1, -β2, and -β3 mRNAs and the eukaryotic initiation factor **eIF3b**, stimulating translation of all three TGF-β isoforms simultaneously. Beyond its TGF-β axis, NREP promotes neuronal axon regeneration, epidermal stem cell migration, wound angiogenesis, and myofibroblast transformation — a broadly pro-regenerative functional fingerprint. In the multi-species transcriptomic-clock study of Tyshkovskiy et al. 2026, **`Nrep` was the single strongest contributor to the mortality-tAge reduction** observed in old mice after heterochronic parabiosis, and it sits in the conserved DOWN-regulated gene set alongside the ECM-synthesis genes `Sparc`, `Col1a1`, and `Col3a1`, collectively interpreted as a **loss of regenerative capacity** signature with age.[^tyshkovskiy2026-nrep]

## Identity

| Field | Value |
|---|---|
| UniProt | Q16612 (NREP_HUMAN) — Swiss-Prot (manually curated) |
| NCBI Gene | 9315 |
| HGNC | 16834 |
| Ensembl | ENSG00000134986 |
| Mouse ortholog | Nrep (MGI:99444; NCBI Gene 27528) — one-to-one |
| GenAge | Not found in GenAge as of 2026-05-29 #gap/needs-genage-check |
| Chromosome | 5q14.1 (Chr 5, minus strand, GRCh38.p14) |

**Nomenclature note.** The historical aliases P311 (protein of 311 codon length), PTZ17, and C5orf13 (chromosome 5 open reading frame 13) all resolve to NREP. UniProt accession Q16612 was verified via the UniProt REST API and confirmed as the Swiss-Prot (manually curated) entry for "neuronal regeneration-related protein / Homo sapiens." The old P311 / C5orf13 designations create namespace collision risk in database lookups; always confirm against Q16612.

## Molecular biology

NREP encodes a **68 amino acid, ~7.9 kDa protein** with two isoforms produced by alternative splicing. The protein lacks a signal peptide and transmembrane domain and localises to the **cytoplasm**. Structurally, NREP is an **intrinsically disordered protein (IDP)**: it lacks stable secondary structure under physiological conditions, a property common to many translational regulators. Phosphorylation at **Ser-59** decreases protein stability and activity, providing a post-translational off-switch.[^uniprot-q16612]

### TGF-β translational enhancement via eIF3b

The best-characterised molecular function of NREP is stimulation of TGF-β1/2/3 translation. Yue et al. 2014 demonstrated that P311/NREP directly binds the **5′ UTRs of TGF-β1, TGF-β2, and TGF-β3 mRNAs**, and simultaneously interacts with **eukaryotic initiation factor 3 subunit b (eIF3b)** with a binding affinity of K_d ≈ 1.26 μM.[^yue2014] Through this bridging interaction, NREP recruits eIF3b to TGF-β mRNAs, enhancing their cap-dependent translation. Because NREP acts on all three TGF-β isoforms simultaneously, it functions as a **master translational activator** of the TGF-β ligand family rather than a conventional transcription factor.

This mechanism has several important implications. First, NREP is neither a receptor nor a ligand — it acts at a translational, pre-secretory step, upstream of TGF-β signalling. Second, as an IDP with no intrinsic enzymatic activity and no known small-molecule binding pocket, NREP is currently considered undruggable by direct targeting (Open Targets, all tractability buckets false as of 2026-05-29; see Druggability section). Third, the NREP → TGF-β translation axis connects NREP biology to the extensive downstream signalling of TGF-β (SMAD2/3, EMT, fibrosis, ECM remodelling, immune modulation — see [[tgf-beta]]).

### Myofibroblast transformation

Pan et al. 2002 showed that P311/NREP overexpression in non-muscle cells induces a **TGF-β1-independent myofibroblast phenotype** characterised by α-smooth muscle actin (αSMA) expression and contractile activity, while — importantly — not triggering the fibrogenic programme typically associated with TGF-β1 activation.[^pan2002] This apparently non-fibrogenic myofibroblast phenotype positions NREP as a driver of **tissue contraction and remodelling** during normal wound healing (as distinct from pathological fibrosis), though the boundary depends on context and co-signalling.[^badri2013]

### Blood pressure homeostasis

A physiological in-vivo role for the P311–TGF-β axis was established by Badri et al. 2013: P311-knockout mice develop **hypotension** due to reduced vascular smooth muscle TGF-β signalling and impaired vascular tone maintenance.[^badri2013] This demonstrates that NREP-driven TGF-β translation is not incidental but is required for normal blood pressure homeostasis, establishing a link between NREP expression, TGF-β availability in smooth muscle, and cardiovascular physiology — relevant context for interpreting NREP's age-associated decline.

## Regenerative functions

### Neuronal axon regeneration

The gene name NREP ("neuronal regeneration related protein") reflects its original discovery context. Fujitani et al. 2004 showed that P311 expression increases in damaged facial motor neurons following nerve injury, that P311 overexpression promotes neurite extension in cultured neurons, and that it **accelerates regeneration of the axotomized facial nerve** in vivo.[^fujitani2004] The mechanism likely involves P311's enhancement of TGF-β translation and possibly direct cytoskeletal interactions; TGF-β1 and TGF-β2 are known axon-growth-promoting factors in certain neuronal contexts. P311/NREP is therefore part of the injury-response gene programme that reactivates developmental regeneration-promoting signals.

### Skin wound healing: reepithelialization and angiogenesis

In the skin, NREP promotes wound closure through at least two distinct mechanisms:

- **Epidermal stem cell migration** — Yao et al. 2016 demonstrated that P311 is upregulated in the wound edge and promotes migration of epidermal stem cells through activation of **RhoA** and **Rac1** (Rho GTPases), accelerating reepithelialization; P311-knockout mice show delayed wound closure.[^yao2017]
- **Macrophage M2 polarisation and angiogenesis** — Chen et al. 2022 showed that P311 drives M2 polarisation of wound macrophages via **IL-4 receptor / mTOR** signalling, promoting pro-healing (M2) over inflammatory (M1) macrophage states and thereby enhancing **angiogenesis and granulation tissue formation**; P311-KO mice have reduced wound vessel density.[^chen2023]
- **Vascular endothelial cell function** — Wang et al. 2017 confirmed that P311-deficient mice exhibit impaired endothelial tube formation and reduced VEGF and TGF-β1 in healing wounds, further establishing the angiogenic dimension.[^wang2017]

These wound-healing functions collectively paint NREP as an orchestrator of tissue repair: driving inflammatory resolution (M1→M2 shift), re-epithelialisation, and neovascularisation in sequence.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — eIF3b interaction and TGF-β translational enhancement confirmed in human cell lines (Yue 2014) |
| Phenotype conserved in humans? | partial — wound-healing and smooth-muscle roles studied in rodents; human skin/vascular data sparse |
| Replicated in humans? | no — all major mechanistic studies are in rodent models or human cell lines #gap/needs-human-replication |

## Why NREP matters for aging — the Tyshkovskiy 2026 context

In the large-scale multi-species transcriptomic-clock analysis of Tyshkovskiy et al. 2026 (n=11,165 transcriptomes, 4 species), `Nrep` emerged as a member of the **conserved DOWN-regulated with age/mortality** gene set alongside `Sparc`, `Col1a1`, and `Col3a1`. The paper frames this cluster as reflecting **"loss of differentiation and wound healing / loss of regenerative capacity"** in short-lived animals — a conserved transcriptomic signature of diminishing tissue-repair potential with age.[^tyshkovskiy2026-nrep]

### Strongest heterochronic-parabiosis rejuvenation signal

Most notably, of all genes measured, **`Nrep` was the single gene contributing most strongly to the mortality-tAge REDUCTION in old mice exposed to young blood** (heterochronic parabiosis). Old parabionts showed upregulation of `Nrep` after 2 months of young-blood exposure; this upregulation was the top molecular driver of the parabiosis-induced reduction in the mortality transcriptomic clock — interpreted as **enhanced regenerative potential** restored by young systemic factors.[^tyshkovskiy2026-parabiosis] This is the highest-resolution evidence to date that NREP expression specifically tracks — and may contribute to — the rejuvenating effect of young blood on old tissue.

`Nrep` also appears as a contributor to:
- The **embryonic 'ground zero' rejuvenation signature** — `Nrep` is in the conserved DOWN-with-age/mortality gene set, placing it among genes whose expression is relatively high at the tAge nadir (E10); the specific contribution of `Nrep` to the embryonic ground-zero clock coefficients is documented in the paper's Extended Data but not extracted into the verified study page. #gap/needs-extended-data-verification
- The **caloric restriction** rejuvenation signature — CR is the strongest intervention in the metabolic modules where tAge is reduced; `Nrep`'s specific CR response in liver is consistent with its DOWN-with-age characterisation but its magnitude as a "top contributor" to the CR signature is not confirmed in the verified study-page extraction. #gap/needs-extended-data-verification

### Placement in the regenerative-capacity DOWN module

`Nrep`, `Sparc`, `Col1a1`, and `Col3a1` form a coherent biological unit. SPARC is a secreted matricellular protein regulating ECM assembly and cell–matrix signalling; COL1A1 and COL3A1 encode the primary fibrillar collagens of connective tissue. The coordinated downregulation of these four genes with age suggests a unified decline in ECM-mediated regenerative signalling: less NREP → less TGF-β translation → less collagen synthesis stimulation → less ECM scaffolding for tissue repair, alongside a direct NREP-driven loss of the cellular regenerative programme (stem cell migration, macrophage polarisation, neovascularisation described above).

This places NREP at the convergence of:
- [[stem-cell-exhaustion]] — loss of regenerative cell-intrinsic capacity
- [[altered-intercellular-communication]] — impaired paracrine TGF-β signalling and ECM-mediated tissue crosstalk

For related entities see [[sparc]], [[col1a1]], [[col3a1]], [[transcriptomic-clock-tage]], [[heterochronic-parabiosis]].

## Druggability (aging-context tier 4)

NREP is classified as **tier 4 (undruggable)** under the wiki's aging-context convention. The rationale:

- **No approved drug** targeting NREP exists in any indication (Open Targets Platform, accessed 2026-05-29: all tractability buckets false for SM/AB/PR/OC modalities).
- **No high-quality ligand or druggable pocket** identified — NREP is a 68 aa IDP with no reported crystal structure, no known small-molecule binding site, and no druggable-family annotation.
- **No clinical-stage probe** exists for any indication.
- As an intracellular IDP it is inaccessible to antibody-based approaches under standard conditions.
- **Indirect targeting** via upstream transcriptional activators of NREP or downstream TGF-β pathway modulators is feasible in principle but would not constitute targeting NREP per se.

The druggability gap is not merely a data gap — the structural properties of IDPs fundamentally constrain small-molecule targeting. Upregulating NREP (the therapeutically relevant direction for aging) is even further from current pharmacology than inhibiting it. #gap/no-druggable-probe

## Gaps

- No human aging-specific study directly measures NREP expression across age in tissues or plasma (all translational/mechanistic work is rodent or cell-line). #gap/needs-human-replication
- Aging-context transcriptional regulation of NREP is unknown: what upstream signals suppress NREP with age, and whether this suppression is reversible by other means than young blood. #gap/no-mechanism
- `gtex-aging-correlation` (age-stratified Spearman ρ from GTEx v10) not yet queried. #gap/needs-gtex-age-stratified
- Whether the young-blood-dependent NREP upregulation in old mice is due to a circulating factor (protein, lipid, metabolite) that directly induces NREP transcription is unidentified. Candidate young-blood factors: GDF11, growth hormone axis, but this is speculative. #gap/no-mechanism
- NREP's role in ECM cross-linking / downstream TGF-β fibrosis vs regeneration balance is context-dependent and incompletely resolved. Pan et al. 2002 showed non-fibrogenic myofibroblast induction, but later studies (Wang et al. 2024 lactylation-driven lung fibrosis) implicate NREP in fibrotic contexts — potential discordance unresolved. #gap/contradictory-evidence
- NREP is not in GenAge as of 2026-05-29. #gap/needs-genage-check
- `mr-causal-evidence: not-tested` — no germline MR instruments characterised for NREP-aging pathway.

## Related pages

- [[transcriptomic-clock-tage]] · [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · [[heterochronic-parabiosis]]
- Conserved regenerative-capacity DOWN set: [[sparc]] · [[col1a1]] · [[col3a1]]
- Downstream biology: [[tgf-beta]] · [[stem-cell-exhaustion]] · [[altered-intercellular-communication]]
- Companion age-UP proteins from Tyshkovskiy 2026: [[gpnmb]] · [[lgals3]] · [[p21]]

---

## Footnotes

[^uniprot-q16612]: UniProt Q16612 (NREP_HUMAN), Swiss-Prot manually curated entry, accessed 2026-05-29 via REST API · 68 aa, 7,909 Da; cytoplasmic; Ser-59 phosphorylation; two isoforms by alternative splicing; gene synonyms C5orf13 / P311. *Canonical-DB fields verified; mechanistic annotation is background claim pending verifier PDF cross-check.*

[^yue2014]: doi:10.1074/jbc.M114.609495 · Yue MM, Lv K, Meredith SC, Martindale JL, Gorospe M, Schuger L · J Biol Chem · 2014 · in-vitro (human/mouse cell lines) · n=cell lines · P311 identified as RNA-binding IDP that binds TGF-β1/2/3 5′ UTRs and eIF3b (Kd = 1.26 μM by SPR), stimulating translation of all three TGF-β isoforms; Ser-59 phosphorylation disrupts eIF3b binding; eIF3b binding site mapped to RRM domain (aa 161–264 of eIF3b) and to M-segment conserved EBM (aa 23–46) of P311. *PDF read end-to-end; claims verified.*

[^pan2002]: doi:10.1172/JCI15614 · Pan D, Zhe X, Jakkaraju S, Taylor GA, Schuger L · J Clin Invest · 2002 · in-vitro (NIH 3T3 + C3H10 T/2 cell lines) + in-vivo (human wound IHC, 7 specimens) · n=cell lines; human wound tissue IHC n=7 wound specimens · P311 overexpression induces TGF-β1-independent, non-fibrogenic αSMA+ myofibroblast phenotype: P311 increased SM α-actin/SM22 but decreased TGF-β1, TGF-βR2, collagen 1/3, and MMP-2/9; P311 is expressed in human wound myofibroblasts and their precursors in vivo. *PDF read end-to-end; claims verified.*

[^badri2013]: doi:10.1172/JCI69884 · Badri KR, Yue M, Carretero OA, Aramgam SL, Cao J, Sharkady S, Kim GH, Taylor GA, Byron KL, Schuger L · J Clin Invest · 2013 · in-vivo (mouse, P311-KO + P311-transgenic) + human tissue IHC · n=8/group telemetry (WT vs P311-KO); n=5/group plethysmography; aorta ELISA n=15/group; human arteries: 18 normotensive + 21 hypertensive · P311-KO mice develop systemic hypotension (16.5±3 mmHg systolic and 14±5 mmHg diastolic lower than WT by telemetry); reduced total and active TGF-β1/2/3 in aorta/serum; P311-transgenic mice develop hypertension; human hypertensive arteries overexpress P311 (IHC); identifies P311 as first pan-regulator of TGF-β translation and blood pressure effector. *PDF read end-to-end; claims verified; n values confirmed from Figs 1A, 4A, 6B.*

[^fujitani2004]: doi:10.1111/j.1471-4159.2004.02738.x · Fujitani M, Yamagishi S, Che YH, Hata K, Kubo T, Ino H, Tohyama M, Yamashita T · J Neurochem · 2004 · in-vivo (rat, axotomy) + in-vitro (neurons) · P311 upregulated in injured motor neurons; overexpression promotes neurite extension; accelerates facial nerve regeneration in vivo. *Unverified — archive status: not_oa; closed-access.* #gap/no-fulltext-access

[^yao2017]: doi:10.1089/scd.2016.0249 · Yao Z, Li H, He W, Yang S, Zhang X, Zhan R, Xu R, Tan J, Zhou J, Wu J, Luo G · Stem Cells Dev · 2016 · in-vivo (mouse, P311-KO + excisional wound) · P311-KO mice show delayed wound reepithelialization; P311 promotes epidermal stem cell migration via RhoA/Rac1 activation. *Unverified — archive status: not_oa; closed-access.* #gap/no-fulltext-access

[^chen2023]: doi:10.1016/j.jid.2022.09.659 · Chen C, Tang Y, Zhu X, Yang J, Liu Z, Chen Y, Wang J, Shang R, Zheng W, Zhang X, Hu X, Tan J, Zhou J, Peng S, Lu Q, Ju Z, Luo G, He W · J Invest Dermatol · 2022 · in-vivo (mouse, P311-KO wound model) · P311 drives IL-4R/mTOR-mediated M2 macrophage polarisation; KO mice show impaired angiogenesis and granulation tissue; P311 integrates macrophage inflammatory resolution with vascular repair. *Unverified — archive status: not_oa; closed-access.* #gap/no-fulltext-access

[^wang2017]: doi:10.3389/fphys.2017.01004 · Wang S, Zhang X, Qian W, Zhou D, Yu X, Zhan R, Wang Y, Wu J, He W, Luo G · Front Physiol · 2017 · in-vivo (mouse, P311-KO wound model) · P311-KO mice: impaired endothelial tube formation, reduced wound vessel density, reduced VEGF and TGF-β1 in healing tissue. *Local PDF available (gold OA, a local paper archive); abstract-level claims verified; full-PDF read recommended on next pass.*

[^tyshkovskiy2026-nrep]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=11,165 transcriptomes, 4 species · meta-analysis · elastic-net clock coefficients + mixed-effects gene-trait associations · model: mouse/rat/macaque/human, multi-tissue · `Nrep` in conserved DOWN-regulated gene set with age/mortality, alongside `Sparc`, `Col1a1`, `Col3a1`; framed as loss-of-regenerative-capacity signature

[^tyshkovskiy2026-parabiosis]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · heterochronic parabiosis sub-analysis · n=old mice parabionts (2 months) · mortality tAge reduction in old partners; `Nrep` identified as the single strongest contributor to tAge rejuvenation; interpreted as restored regenerative potential. doi:10.1038/s41586-026-10542-3
