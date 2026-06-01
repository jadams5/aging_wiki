---
type: protein
aliases: [XIAP, BIRC4, X-linked inhibitor of apoptosis, IAP-3, ILP1, MIHA, hILP, API3]
uniprot: P98170
ncbi-gene: 331
hgnc: 592
mouse-ortholog: Xiap
ensembl: ENSG00000101966
druggability-tier: 2
caused-by: []
causes: []
key-domains: [BIR1, BIR2, BIR3, UBA, RING]
key-ptms: [Cys450-S-nitrosylation, Lys322-autoubiquitination, Lys328-autoubiquitination]
pathways: ["[[apoptosis-pathway]]"]
hallmarks: ["[[cellular-senescence]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Liston 1996, Deveraux 1997, Riedl 2001, Shiozaki 2003, and Vince 2007 primary PDFs verified. Marsh 2010 closed-access (not_oa); XLP-2 clinical claims unverified against full text. UniProt P98170 domain boundaries cross-checked via REST API. Canonical-DB IDs (PubChem, HGNC numeric, Ensembl) not independently re-queried beyond UniProt."
---


# XIAP (X-linked Inhibitor of Apoptosis Protein)

XIAP is the most potent endogenous inhibitor of caspases in mammalian cells — the only IAP family member that directly binds and inhibits the active sites of [[caspase-3]], [[caspase-7]], and [[caspase-9]] rather than acting indirectly. It acts as a final checkpoint between caspase activation and committed cell death, and its antagonism by [[smac-diablo]] released from depolarized mitochondria is a key regulatory node of the intrinsic [[apoptosis-pathway]]. In the aging context, XIAP is hypothesized to contribute to the apoptosis-resistance of senescent cells, analogous to BCL-2 family upregulation.

## Identity

- **UniProt:** P98170 (XIAP_HUMAN)
- **NCBI Gene:** 331
- **HGNC symbol:** BIRC4 (official) / common alias XIAP
- **Ensembl:** ENSG00000166855 #gap/needs-canonical-id — Ensembl ID not verified via live query; check against Ensembl GRCh38 release
- **Mouse ortholog:** Xiap (one-to-one; highly conserved BIR domains)
- **Chromosomal location:** X chromosome (Xq24-25) — hence "X-linked"; single-copy in males renders germline loss-of-function immediately symptomatic [^liston1996]
- **Length:** 497 amino acids (canonical isoform)

## Domain organization

XIAP contains three baculovirus IAP repeat (BIR) domains, a ubiquitin-associated (UBA) domain, and a C-terminal RING domain [^duckett1996] [^liston1996]:

| Domain | Residues | Function |
|---|---|---|
| BIR1 | 26–93 | Scaffolding; TAB1 and NF-κB signaling interactions; no direct caspase inhibition |
| N-terminal extension + BIR2 | 124–230 | N-terminal extension (residues 124–162, the "hook" and "line–sinker" region) threads across and sterically occludes the active-site cleft of [[caspase-3]] and [[caspase-7]]; BIR2 domain proper is 163–230 [^riedl2001] |
| BIR3 | 265–330 | Inhibits [[caspase-9]] by binding the small-subunit-associated dimerization interface; SMAC/DIABLO competition site [^shiozaki2003] |
| UBA | ~375–417 | Ubiquitin-binding; contributes to XIAP protein stability; binds poly-Ub chains |
| RING | 450–485 | RING-type zinc finger; E3 ubiquitin ligase activity; autoubiquitination and substrate ubiquitination; Cys-His zinc-coordination (functional region extends to C-terminus, ~497) |

The RING domain is the principal E3 ligase domain and is also the primary target of S-nitrosylation (Cys450) — a PTM that inhibits XIAP ubiquitin ligase activity under nitrosative stress [^unsourced-snitro]. #gap/unsourced — S-nitrosylation claim needs primary citation; UniProt lists Cys450 as the site but the functional evidence source is not confirmed.

## Caspase inhibition mechanisms

### BIR3 + caspase-9

After the apoptosome assembles, [[caspase-9]] is present as a monomer-dimer equilibrium, with the dimer being the catalytically active form. XIAP BIR3 binds the small subunit (p10) of caspase-9 and, critically, sequesters the caspase-9 monomer — preventing dimerization and thereby abolishing catalytic activity [^shiozaki2003]. The BIR3-binding epitope on caspase-9 is the newly exposed N-terminal Ala-Thr-Pro-Phe (ATPF) tetrapeptide generated after autocleavage (the "IAP-binding motif" of caspase-9). This is the same surface that SMAC/DIABLO occupies via its AVPI motif (see Antagonism section below).

### BIR2 N-terminal extension + caspase-3 and caspase-7

Unlike BIR3, the BIR2 domain alone does not inhibit caspase-3. Structural work established that the N-terminal extension preceding BIR2 (residues 124–162) contains a "hook" substructure (residues 138–146) and a "line–sinker" region (residues 148–156) that together thread across and sterically occlude the active-site substrate-binding cleft of [[caspase-3]] and [[caspase-7]] [^riedl2001]. The BIR2 domain itself (163–230) aligns and stabilizes the interaction. This steric-blockade mechanism is distinct from the monomer-sequestration used against caspase-9: the N-terminal hook residues (particularly L141) and the sinker residue D148 are the primary contacts, not an intra-linker Glu residue. Mutation of L141 abolishes inhibitory activity; D148 provides buried hydrogen bonds and a salt bridge critical for locking BIR2 against the caspase-3 active site [^riedl2001]. These two mechanisms (BIR2 N-terminal extension vs BIR3 dimerization sequestration) are structurally separable.

### RING E3 ubiquitin ligase — targeted proteasomal degradation

The RING domain of XIAP (residues 450–485) possesses E3 ubiquitin ligase activity. Deveraux et al. 1997 showed the RING domain alone does not suppress apoptosis, consistent with caspase inhibition being BIR-domain-mediated [^deveraux1997]. The specific substrates of XIAP's RING domain (including proposed targets such as caspase-3, RIPK1, RIPK2, MAP3K2, and SMAC/DIABLO) are established in a broader substrate literature that has not been individually verified against locally-available primary PDFs in this wiki; these attributions are not sourced to Vince 2007, which addresses cIAP1 ubiquitin ligase activity rather than XIAP RING substrates. #gap/unsourced — substrate list needs primary citations (e.g., Suzuki et al. 2001 for SMAC ubiquitination; Yang et al. 2000 for caspase-3). Autoubiquitination at Lys322/Lys328 regulates XIAP protein stability per UniProt annotation; primary citation not yet verified.

## Antagonism by SMAC/DIABLO and Omi/HtrA2

During mitochondrial outer membrane permeabilization (MOMP), two mitochondrial intermembrane-space proteins are released alongside cytochrome c:

- **[[smac-diablo]]** (Second Mitochondria-derived Activator of Caspases / Direct IAP-Binding protein with Low pI): its mature N-terminus exposes the AVPI tetrapeptide IAP-binding motif, which directly competes with caspase-9 for BIR3 binding and with caspase-3/-7 for the BIR2 N-terminal-extension binding surface, thereby de-repressing caspase activity [^riedl2001] [^shiozaki2003]. SMAC/DIABLO functions as a natural XIAP antagonist that licenses caspase activation after MOMP. The structural basis for AVPI engagement with BIR3 is documented in Shiozaki 2003; Riedl 2001 shows the topological equivalence of the Smac pocket on BIR2.
- **Omi/HtrA2**: a serine protease; also exposes an AVPI-like IAP-binding motif after mitochondrial release. Contributes to XIAP antagonism and additionally cleaves XIAP. #gap/unsourced — specific functional evidence for Omi-mediated XIAP cleavage in physiological contexts not confirmed in a locally-available primary source.

The competition between XIAP and SMAC/DIABLO for caspase binding is a key determinant of the "rheostat" between reversible MOMP (sub-lethal caspase activation, caspase-dependent DNA repair, PARPylation) and committed apoptosis.

## Discovery and IAP family context

XIAP (originally cloned as hILP, ILP-1, MIHA, or IAP-3) was identified in 1996 independently by Duckett et al. and Liston et al. as a mammalian homolog of baculoviral IAP proteins [^duckett1996] [^liston1996]. The IAP family in humans comprises eight members (BIRC1/NAIP through BIRC8/BRUCE + survivin/BIRC5), distinguished by BIR domain count and RING domain presence. XIAP is unique among the IAPs in that it is the only family member demonstrated to function as a **direct, catalytic-mechanism** caspase inhibitor; other IAPs (cIAP1/BIRC2, cIAP2/BIRC3) preferentially act as E3 ligases targeting signaling intermediates (RIPK1, TRAF2) rather than caspases directly [^vince2007].

Deveraux et al. 1997 established that XIAP is a direct inhibitor of caspase-3 and caspase-7 (then called "cell death proteases") using purified recombinant proteins and cell-free cytosolic extracts. They showed that cytochrome c added to cytosolic extracts triggers caspase-3 activation and nuclear apoptosis, and that rXIAP blocks this cytochrome-c-induced caspase activation — implicating the apoptosome-to-caspase axis as the pathway that XIAP suppresses. The BIR domains alone (residues 1–336) were sufficient for caspase-3 and caspase-7 inhibition (Ki ~0.7 nM and ~0.2 nM respectively); the RING domain (residues 337–497) had no inhibitory activity [^deveraux1997].

## Aging and senescence context

### Apoptosis-resistance of senescent cells — IAP contribution

Senescent cells accumulate during aging and resist apoptosis via a multi-layer survival program. The canonical model emphasizes upregulation of BCL-2, BCL-xL, and BCL-w (see [[bcl-2-family-signaling]]). XIAP elevation in senescent cells has been proposed as an additional or complementary mechanism — acting downstream of MOMP to further suppress executioner caspase activity even when the BCL-2 checkpoint is partially bypassed [^unsourced-xiap-senescence]. #gap/needs-replication — Specific evidence for XIAP protein-level elevation in human senescent cells is not established in a locally-available primary source verified in this wiki. The claim derives from the general mechanistic logic and from studies in cancer cell lines; see [[cellular-senescence]] for the broader SCAP (senescent cell anti-apoptotic pathway) evidence base.

### Relevance to senolytic design

SMAC mimetics (see Therapeutic angles below) were originally developed as cancer chemosensitizers but have received attention as candidate senolytics, on the hypothesis that senescent cells are primed at the XIAP level (analogous to BCL-2-family priming) and thus preferentially die when XIAP is antagonized. Preclinical evidence is limited and the XIAP-specific component of senolytic activity has not been deconvoluted from concurrent cIAP1/cIAP2 degradation (see Vince 2007 mechanism note). #gap/needs-human-replication

### XIAP in cancer — overexpression and chemoresistance

XIAP is overexpressed in a wide variety of tumor types, where it contributes to resistance to both chemotherapy and targeted-therapy-induced apoptosis. Because many cancer-associated selective pressures parallel those operating in senescent cells (anti-apoptotic priming, mitochondrial stress), XIAP's role in cancer chemoresistance provides a mechanistic template for its hypothesized role in senescent cell survival. #gap/unsourced — systematic tumor-type overexpression data would require a TCGA or meta-analysis citation; not currently verified in this wiki.

## XIAP deficiency syndrome (XLP-2)

Germline loss-of-function mutations in BIRC4 (encoding XIAP) cause **X-linked lymphoproliferative syndrome type 2 (XLP-2)**, also reclassified by Marsh et al. 2010 as X-linked familial hemophagocytic lymphohistiocytosis (HLH) [^marsh2010]. #gap/no-fulltext-access — Marsh 2010 is closed-access (not_oa per a local paper archive); clinical features listed below are not verified against the full text. Clinical features include:

- Extreme susceptibility to Epstein-Barr virus (EBV) infection — triggering severe EBV-HLH
- Recurrent HLH (potentially EBV-negative)
- Splenomegaly; inflammatory bowel disease
- Absent or low NKT cells (a conserved feature with XLP-1/SAP deficiency)

The XLP-2 phenotype reveals that XIAP is not primarily required for bulk apoptosis in most cell types (these patients are viable) but is essential for immune regulation — specifically, restraining NF-κB- and NOD2-pathway-driven inflammation in response to viral infection. Marsh et al. 2010 argued that this immunological phenotype better fits an HLH classification than the traditional XLP (X-linked lymphoproliferative) grouping, given the absence of lymphoma and the centrality of macrophage activation [^marsh2010].

This disease genetics underscores the BIR1-NF-κB scaffolding function of XIAP as distinct from its caspase-inhibitory function — NF-κB signaling is impaired in XIAP-deficient immune cells, driving pro-inflammatory dysregulation rather than increased apoptosis.

| Dimension | Status | Notes |
|---|---|---|
| Caspase-inhibition mechanism conserved in humans? | yes | Human XIAP is the canonical source; BIR-caspase structural data from human protein |
| Senescent cell apoptosis-resistance? | partial | BCL-2 family role verified; XIAP-specific contribution hypothesized but not independently verified |
| Replicated in humans (senolytic context)? | no | SMAC mimetics in clinical trials (cancer); senolytic application preclinical only |

## Therapeutic angles

### SMAC mimetics (IAP antagonists)

Synthetic peptido-mimetics of the SMAC AVPI N-terminal IAP-binding motif were developed to pharmacologically antagonize XIAP (and other IAPs) in cancer. Key classes and candidates (names and stage are from clinical literature; primary citations for individual compounds not yet locally verified in this wiki): #gap/unsourced — specific compound attributions below need primary citations (e.g., Infante et al. 2014 for LCL161; Benetatos et al. 2014 for birinapant; Cai et al. 2011 for AT-406)

| Compound | IAP target | Mechanism | Stage |
|---|---|---|---|
| LCL161 (monovalent) | Pan-IAP | AVPI mimetic; degrades cIAP1 → TNFα autocrine apoptosis | Clinical trials (cancer) |
| Birinapant (bivalent) | cIAP1/2, XIAP BIR3 | Linked AVPI dimers; potent cIAP1/2 degradation | Clinical trials (cancer) |
| AT-406 / Debio1143 (monovalent) | Pan-IAP | AVPI mimetic | Phase 1/2 (cancer) |

Important mechanistic note: Vince et al. 2007 established that the primary mechanism by which SMAC mimetics (using "Compound A") kill susceptible tumor cells is **cIAP1 autoubiquitination and proteasomal degradation** → loss of cIAP1-mediated TRAF2 ubiquitination → RIPK1 stabilization → NF-κB activation → autocrine TNFα-dependent, caspase-8-mediated apoptosis [^vince2007]. XIAP levels were largely unaffected by Compound A; the cIAP1-selective mechanism operated independently of direct XIAP-BIR3 engagement in the cell lines studied. XIAP knockout MEFs remained sensitive to TNFα + compound A, confirming XIAP is not the rate-limiting target in this context. The XIAP-specific component of SMAC mimetic biology therefore requires careful experimental dissection.

Clinical success in solid tumors has been limited, partly due to TNFα-dependent systemic toxicity and resistance mechanisms. #gap/long-term-unknown — senolytic application in aging models is exploratory; no published controlled lifespan data available as of 2026-05-04.

## Pathway membership and interactors

- [[apoptosis-pathway]] — core inhibitory checkpoint between MOMP and executioner caspase activation
- [[nf-kb]] — BIR1 scaffolds TAK1/TAB1 complex; XIAP activates NF-κB in immune signaling contexts (XLP-2 disease mechanism)
- [[cellular-senescence]] — hypothesized SCAP component; context: senescent cells may depend on XIAP to resist sub-lethal caspase pulses

**Key functional interactors:**
- [[caspase-3]] — BIR2 N-terminal extension (hook/sinker, residues 124–162)-mediated active-site occlusion; RING-mediated ubiquitination reported in substrate literature (primary citation not yet locally verified)
- [[caspase-7]] — same mechanism as caspase-3; structurally distinct p17/p12 heterotetramer but same XIAP binding site
- [[caspase-9]] — BIR3-mediated monomer sequestration; prevents dimerization-activation
- [[smac-diablo]] — direct antagonist; AVPI tetrapeptide competes for BIR3 and BIR2-linker binding; released during MOMP
- [[apaf-1]] — upstream; apoptosome assembly leads to caspase-9 activation that XIAP must then suppress
- [[cytochrome-c]] — indirectly; CYCS release → apoptosome → caspase-9 activation → XIAP engagement

## Limitations and gaps

- `#gap/needs-replication` — XIAP protein-level elevation in senescent cells: no primary study with quantitative XIAP Western blot data in verified senescent cell populations is currently on this wiki. The apoptosis-resistance role is mechanistically plausible but not independently verified against a primary source.
- `#gap/needs-human-replication` — All SMAC mimetic senolytic data is preclinical; no clinical trial evidence for XIAP antagonism as a senolytic strategy.
- `#gap/unsourced` — S-nitrosylation functional consequence (Cys450); Omi/HtrA2-mediated XIAP cleavage in physiological aging contexts; XIAP overexpression frequency in specific tumor histologies.
- `#gap/no-mechanism` — The precise relative contributions of XIAP inhibition vs BCL-2/xL/w upregulation to senescent cell apoptosis-resistance are not established. In cancer cell lines the two mechanisms act in parallel; in primary senescent cells this has not been systematically dissected.
- Ensembl gene ID flagged for live-check on next lint pass (`#gap/needs-canonical-id`).

---

## Footnotes

[^duckett1996]: PMID:8654366 · Duckett et al. 1996 · EMBO J · discovery of mammalian IAP family members including XIAP/hILP · in-vitro (transfection-based apoptosis suppression) · model: human cell lines · DOI not available in CrossRef for this 1996 EMBO J issue; confirmed via PubMed efetch

[^liston1996]: doi:10.1038/379349a0 · Liston et al. 1996 · Nature · "Suppression of apoptosis in mammalian cells by NAIP and a related family of IAP genes" · in-vitro · model: CHO, Rat-1, HeLa mammalian cell lines · maps XIAP (xiap) to X chromosome Xq24-25; cloned three new IAP family members (XIAP, HIAP-1, HIAP-2) all with three BIR domains + RING zinc finger · cited_by=1016 · local PDF: 

[^deveraux1997]: doi:10.1038/40901 · Deveraux et al. 1997 · Nature · "X-linked IAP is a direct inhibitor of cell-death proteases" · in-vitro · model: recombinant proteins + cell-free cytosolic extracts (293, Jurkat) + 293T cells · established XIAP BIR domains (residues 1–336) directly inhibit caspase-3 (Ki ~0.7 nM) and caspase-7 (Ki ~0.2 nM); RING domain (residues 337–497) has no caspase inhibitory activity; XIAP blocks cytochrome-c-induced caspase activation in cell-free extracts · cited_by=1942 · local PDF: 

[^riedl2001]: doi:10.1016/s0092-8674(01)00274-4 · Riedl et al. 2001 · Cell · "Structural Basis for the Inhibition of Caspase-3 by XIAP" · in-vitro (X-ray crystallography at 2.7 Å + biochemical inhibition kinetics) · model: recombinant human caspase-3 + XIAP BIR2 (residues 124–240) · established that the N-terminal extension (residues 124–162) containing a hook (138–146, critical L141) and sinker (148–156, critical D148) sterically blocks caspase-3 active site; BIR2 domain (163–240) aligns the complex; covers caspase-3 and caspase-7 NOT caspase-9; also maps the topological equivalence of BIR2 and BIR3 Smac pockets · cited_by=784 · local PDF: 

[^shiozaki2003]: doi:10.1016/s1097-2765(03)00054-6 · Shiozaki et al. 2003 · Molecular Cell · "Mechanism of XIAP-Mediated Inhibition of Caspase-9" · in-vitro (X-ray crystallography at 2.4 Å + analytical ultracentrifugation + biochemical reconstitution) · model: recombinant human caspase-9 (residues 139–416) + XIAP BIR3 (residues 252–350) · established BIR3 heterodimerizes with caspase-9 monomer using the same surface required for caspase-9 homodimerization; monomeric caspase-9 is catalytically inactive (confirmed by AUC showing predominantly monomeric form); caspase-9 IAP-binding motif is ATPF (Ala316–Thr317–Pro318–Phe319); BIR3 traps caspase-9 in monomeric inactive state with active site loops in unproductive conformation · cited_by=723 · local PDF: 

[^vince2007]: doi:10.1016/j.cell.2007.10.037 · Vince et al. 2007 · Cell · "IAP Antagonists Target cIAP1 to Induce TNFα-Dependent Apoptosis" · in-vitro · model: human tumor cell lines (Kym1, SKOV3, OVCAR4) + MEF knockouts (cIAP1−/−, XIAP−/−) · primary finding: SMAC mimetic "Compound A" (unnamed small molecule) rapidly degrades cIAP1 (not XIAP) via proteasome → RIPK1 stabilization → NF-κB activation → autocrine TNFα → caspase-8-dependent apoptosis; cell death blocked by crmA (caspase-8 inhibitor); XIAP knockouts remain compound A-sensitive confirming XIAP is not the primary target; does NOT cover SMAC/DIABLO AVPI mechanism, caspase-3 ubiquitination by XIAP RING, or named clinical SMAC mimetics (LCL161, birinapant, AT-406) · cited_by=1054 · local PDF: 

[^marsh2010]: doi:10.1182/blood-2010-01-256099 · Marsh et al. 2010 · Blood · "XIAP deficiency: a unique primary immunodeficiency best classified as X-linked familial hemophagocytic lymphohistiocytosis and not as X-linked lymphoproliferative disease" · observational/case-series · model: human patients (germline BIRC4 mutations) · cited_by=254 · oa_status: closed; not downloadable (#gap/no-fulltext-access)
