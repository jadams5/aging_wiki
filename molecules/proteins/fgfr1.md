---
type: protein
aliases: [FGFR-1, fibroblast growth factor receptor 1, CD331, FLT2, KAL2, BFGFR, CEK, FGFBR, HBGFR, N-SAM]
uniprot: P11362
ncbi-gene: 2260
hgnc: 3688
ensembl: ENSG00000077782
genage-id: null   # not listed in GenAge HAGR human gene database; #gap/needs-canonical-id if a GenAge entry exists
pathways: ["[[fgf-signaling]]", "[[ras-mapk]]", "[[pi3k-akt-pathway]]", "[[plcg-signaling]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
mouse-ortholog: Fgfr1   # MGI:95522; one-to-one ortholog; gene function conserved in mouse
druggability-tier: 2    # FGFR inhibitors (erdafitinib, pemigatinib, futibatinib) are FDA-approved for oncology only (FGFR2/3 alterations in urothelial cancer and cholangiocarcinoma); no aging-validated clinical drug or high-quality aging-specific probe exists; tier 2 per aging-context convention — see Pharmacology section
gtex-aging-correlation: null   # not yet queried; #gap/needs-tissue-expression-data
mr-causal-evidence: not-tested   # no published Mendelian randomization study using FGFR1 genetic instruments for aging or muscle outcomes
caused-by: ["[[altered-intercellular-communication]]"]   # chronic FGF2 niche elevation (via senescent-SASP and aged myofibers) drives supraphysiological FGFR1 stimulation
causes: ["[[stem-cell-exhaustion]]"]   # excess FGFR1 signaling in the aged niche depletes satellite cell pool
literature-checked-through: 2026-06-15
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "Chakkalakal 2012 (PMC3605795, green OA) read end-to-end — quantitative claims corrected; SU5402 experiment endpoints distinguished from Spry1OX endpoints (see corrections). Yeh 2025 and Chang 2026 confirmed real via PubMed/Crossref; Yeh 2025 closed-access (abstract-derived characterization acceptable — abstract confirms FGFR1/FGFR4 deletion causes premature differentiation via ERK). Ornitz 2015 (review) and Pichler 2025 closed-access; isoform/toxicity claims remain abstract-derived — recommend full-text check on next lint pass. Canonical IDs (UniProt P11362, NCBI Gene 2260, HGNC 3688, Ensembl ENSG00000077782, mouse ortholog Fgfr1 MGI:95522) confirmed against live databases. Protein length 822 aa confirmed via UniProt."
---

# FGFR1 (Fibroblast Growth Factor Receptor 1)

FGFR1 — fibroblast growth factor receptor 1 (UniProt: P11362; also designated CD331) — is a receptor tyrosine kinase (RTK) that transduces signals from fibroblast growth factor (FGF) ligands across the plasma membrane to activate intracellular cascades governing cell proliferation, differentiation, survival, and migration. In aging biology, FGFR1 is most significant as the **principal receptor mediating the FGF2 niche signal that disrupts satellite cell (muscle stem cell) quiescence** in aged skeletal muscle, contributing to [[stem-cell-exhaustion]] and [[sarcopenia]] [^chakkalakal2012]. Understanding FGFR1's dual role — as a necessary basal signaling molecule for satellite cell maintenance and as an over-driven receptor in the aged FGF2-rich niche — is central to the therapeutic framing of this axis. See also [[molecules/proteins/fgf2]] for the ligand-level biology.

## Identity

- **UniProt:** P11362 (FGFR1_HUMAN) — reviewed Swiss-Prot entry; confirmed 2026-06-15
- **NCBI Gene:** 2260
- **HGNC symbol:** FGFR1 (HGNC ID: 3688); aliases include FLT2, KAL2, BFGFR, CEK
- **Ensembl:** ENSG00000077782
- **Mouse ortholog:** Fgfr1 (MGI:95522); one-to-one ortholog with highly conserved domain architecture
- **Protein length:** 822 amino acids (canonical isoform)
- **Chromosome:** 8p11.23
- **Family:** receptor tyrosine kinase (RTK); fibroblast growth factor receptor (FGFR) subfamily; one of four human FGFRs (FGFR1–4)

## Protein structure and key domains

FGFR1 is a single-pass transmembrane RTK with three major functional regions:

| Domain | Location | Function |
|---|---|---|
| **Immunoglobulin-like (Ig) domain I** | Extracellular | Autoinhibitory acidic box; suppresses constitutive receptor activation |
| **Ig domain II (D2)** | Extracellular | Primary FGF ligand binding site; heparan sulfate proteoglycan (HSPG) co-receptor interaction |
| **Ig domain III (D3)** | Extracellular | Secondary FGF/HSPG binding; subject to alternative splicing (IIIb vs IIIc isoforms) that alters ligand specificity |
| **Transmembrane domain** | Membrane | Single-pass; required for dimerization-induced activation |
| **Juxtamembrane domain** | Intracellular | Regulatory; docking scaffold |
| **Kinase domain** | Intracellular | Catalytic RTK activity; autophosphorylation at multiple Tyr residues (Tyr-653, Tyr-654 in the activation loop are primary activity switches) |
| **C-terminal tail** | Intracellular | Regulatory phosphorylation sites |

**Isoform IIIb vs IIIc.** Alternative splicing of exon 8 (encoding the C-terminal half of Ig-III domain) generates two principal isoforms with different ligand-binding preferences: **FGFR1-IIIb** (expressed predominantly in epithelial cells; binds FGF3, FGF7, FGF10) and **FGFR1-IIIc** (expressed in mesenchymal cells including myogenic cells; binds FGF2, FGF4, FGF6, FGF8). In skeletal muscle and satellite cells, the IIIc isoform predominates, conferring preferential FGF2 responsiveness [^ornitz2015].

## Signaling mechanism

Activation of FGFR1 requires a three-component complex:

1. **FGF ligand** (e.g., FGF2) binds in the groove between Ig-D2 and Ig-D3
2. **Heparan sulfate proteoglycan (HSPG) co-receptor** (syndecan-4, glypican-1 in muscle) stabilizes the FGF:FGFR ternary complex and dramatically increases binding affinity
3. **Receptor dimerization** → transautophosphorylation of the kinase activation loop → conformational change → full catalytic activity

Activated FGFR1 phosphorylates the docking scaffold **FRS2α** (fibroblast growth factor receptor substrate 2), which nucleates downstream branching through three major cascades:

- **RAS–MAPK (ERK1/2)** — via GRB2–SOS → RAS–RAF–MEK–ERK; drives satellite cell proliferation and exit from quiescence
- **PI3K–AKT pathway** — via GRB2–GAB1–PI3K; cell survival, glucose uptake
- **PLCγ (phospholipase C gamma)** — directly phosphorylated by FGFR1 at Tyr-783; cleaves PIP2 → IP3 + DAG → calcium mobilization and protein kinase C (PKC) activation

Negative feedback is provided by **SPROUTY1 (SPRY1)** — a cytoplasmic phosphoprotein induced by FGF/MAPK signaling that binds GRB2 and inhibits RAS activation. In satellite cells, SPRY1 is the critical homeostatic brake that limits FGFR1/MAPK signaling during quiescence; its loss accelerates the aged-niche depletion phenotype [^chakkalakal2012]. See [[molecules/proteins/spry1]] for dedicated coverage.

## Role in aging: the satellite cell / muscle-niche axis

### Chakkalakal 2012 — foundational evidence

The landmark study by Chakkalakal et al. (*Nature* 2012; doi:10.1038/nature11438; 753 citations per Crossref 2026-06-15) established that **FGFR1 transduces the aged-niche FGF2 signal that drives satellite cell quiescence loss and pool depletion** [^chakkalakal2012]. Key findings directly relevant to FGFR1:

- In aged mouse muscle (C57BL/6, ~24 months), chronically elevated myofiber-derived FGF2 acts via FGFR1 on satellite cells to force quiescence exit and abortive activation — the cells cycle but fail to self-renew, shrinking the stem pool
- **FGFR1 inhibition with SU5402** (a small-molecule ATP-competitive FGFR1 inhibitor delivered in vivo via implanted anion-exchange resin beads) **prevented quiescence loss** in aged satellite cells — BrdU+ cycling fraction in aged muscle was normalized to adult-control levels — and attenuated the elevated apoptosis observed in aged satellite cells; SU5402 was not tested for long-term satellite cell pool depletion in this experiment
- **Overexpression of SPRY1 (Spry1OX) in satellite cells for 5 months** prevented pool depletion: satellite cell number per fibre was twofold higher in aged Spry1OX mice compared with aged controls, confirming that sustained dampening of the RAS–MAPK arm downstream of FGFR1 preserves the satellite cell pool size
- SPRY1 is selectively preserved in the slow-cycling, label-retaining quiescent satellite cell fraction in aged muscle; these cells resist FGFR1-driven activation, while non-label-retaining cells (lower SPRY1) succumb

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FGFR1/FGF2/SPRY1 axis is conserved; FGFR1-IIIc expressed in human myogenic cells |
| Phenotype conserved in humans? | partial — human satellite cell pool declines with age; direct evidence that FGF2/FGFR1 is the causal driver has not been tested in humans |
| Replicated in humans? | no — mechanistic evidence is murine; human muscle biopsy data on FGFR1 activity in aging are lacking |

#gap/needs-human-replication — Mechanistic proof-of-concept for FGFR1 inhibition restoring satellite cell quiescence is established only in mice. No human satellite cell intervention study has tested this axis.

### Discordance with Yeh 2025 and Chang 2026: tonic FGFR1 signaling is also required

Two recent studies add important complexity and must be read alongside Chakkalakal 2012:

**Yeh et al. 2025** (Cell Communication and Signaling; PMID 41462267) used mouse satellite cell-specific deletion of Fgfr1 and Fgfr4 and found the opposite of what suppressing excess FGF signaling might predict: **loss of FGFR1/FGFR4 caused satellite cells to prematurely exit the cell cycle and undergo terminal differentiation**, impairing self-renewal and muscle regeneration [^yeh2025]. The ERK pathway was the relevant effector. This establishes that FGFR1 provides a **tonic, quiescence-supporting signal** at physiological ligand concentrations — its complete absence drives premature commitment.

**Chang et al. 2026** (bioRxiv preprint; PMID 41756900) found that in aged satellite cells, FGFR1 signaling is dysfunctional at the level of **integrin-β1 co-localization and extracellular matrix (ECM) sensing**: activating FGFR1 (rather than inhibiting it) restored integrin-β1-mediated fibronectin responsiveness, self-renewal capacity, and satellite cell function in aged mice [^chang2026]. #gap/needs-replication — this is a preprint and uses an in-vitro viscoelastic hydrogel system; in-vivo aged-muscle validation pending.

**Reconciling the apparent contradiction.** These studies are not in irreconcilable conflict with Chakkalakal 2012; they reveal that **FGFR1's role in satellite cells is dose-dependent and context-dependent**:

- *Tonic, physiological FGFR1 signaling* is required for satellite cell quiescence maintenance and ECM sensing (Yeh 2025, Chang 2026 — loss-of-function phenotype)
- *Supraphysiological FGFR1 stimulation* by chronically elevated aged-niche FGF2 drives quiescence exit and depletion (Chakkalakal 2012 — gain-of-function / overdrive phenotype)

The therapeutic implication is that crude FGFR1 inhibition may be insufficient or even counterproductive; what is needed is **normalization of FGFR1 signaling** — dampening the excess FGF2-driven overdrive while preserving the tonic signaling required for satellite cell maintenance. #gap/contradictory-evidence — the optimal modulation strategy (inhibition, partial agonism, ligand titration) remains unresolved in vivo.

## Broader biology

### Developmental roles

FGFR1 is essential for early embryonic development: germline knockout in mice is embryonic lethal at gastrulation (~E7.5–E8), reflecting FGFR1's role in mesoderm formation, axial patterning, and limb bud initiation [^ornitz2015]. Hypomorphic and conditional alleles have been used to study later developmental roles. FGFR1 mutations in humans cause **Pfeiffer syndrome** (craniosynostosis; autosomal dominant gain-of-function) and **Kallmann syndrome** (anosmia + hypogonadotropic hypogonadism; autosomal dominant loss-of-function) — illustrating that FGFR1 dose-sensitivity is physiologically critical in multiple contexts.

### Angiogenesis and endothelial function

FGFR1 on endothelial cells mediates pro-angiogenic FGF2 signals: proliferation, migration, and tube formation. Age-related capillary rarefaction in muscle (reduced vessel density contributing to impaired oxygen delivery) may involve blunted FGFR1-mediated angiogenic responsiveness, though the contribution relative to vascular endothelial growth factor (VEGF)/VEGFR2 signaling has not been fully apportioned. #gap/no-mechanism

### Cancer and FGFR1 amplification/fusions

FGFR1 is among the most frequently amplified or translocated receptor kinases in human cancer:

- **8p11.23 amplification**: found in ~10% of lung squamous cell carcinomas, ~10% of breast cancers (luminal subtype), bladder cancer
- **Oncogenic fusions**: FGFR1-containing chromosomal translocations cause the 8p11 stem-cell myeloproliferative syndrome (a rare but aggressive leukemia)

Clinically approved FGFR inhibitors (erdafitinib, pemigatinib, futibatinib) are indicated for cancers bearing **FGFR2 or FGFR3** alterations (urothelial carcinoma and cholangiocarcinoma), not specifically FGFR1 amplification. Systematic review of FGFR inhibitors in urothelial cancer (Pichler et al. 2025; PMID 39955055) confirmed no phase-3 trial specifically targeting FGFR1-amplified tumors has been completed as of 2025 [^pichler2025].

### On-target toxicity: the FGF23/FGFR1 axis

FGF23 — an endocrine FGF produced by osteocytes that suppresses renal phosphate reabsorption — signals via FGFR1/FGFR3 at the kidney (with klotho as obligate co-receptor). Pan-FGFR inhibitors that block FGFR1 therefore cause **hyperphosphatemia** as a class-effect toxicity, by disrupting the FGF23/FGFR1/klotho renal phosphate axis. This on-target toxicity is a primary obstacle to chronic FGFR1 inhibition for aging indications: hyperphosphatemia at sustained levels produces vascular calcification and kidney injury, both antithetical to aging-prevention goals [^pichler2025].

## Hallmark connections

| Hallmark | FGFR1 mechanism |
|---|---|
| [[stem-cell-exhaustion]] | Primary aging role — FGFR1 transduces the aged FGF2 niche overdrive that depletes the satellite cell pool [^chakkalakal2012]; tonic FGFR1 is also required for satellite cell quiescence [^yeh2025] |
| [[altered-intercellular-communication]] | FGFR1 is the membrane-proximate transducer of paracrine FGF niche signals from aged myofibers and SASP-secreting senescent interstitial cells to satellite cells; perturbations in FGFR1-integrin crosstalk alter ECM sensing in aged satellite cells [^chang2026] |

## Pharmacology and druggability

**`druggability-tier: 2`** (aging-context). Rationale: Three FDA-approved small-molecule FGFR inhibitors exist — erdafitinib (pan-FGFR; approved 2019), pemigatinib (FGFR1/2/3-selective; approved 2020), and futibatinib (FGFR1-4 covalent; approved 2023) — validating the target class as clinically tractable. However, none is validated for an aging indication, and the on-target toxicity profile (hyperphosphatemia via FGF23/FGFR1, bone effects, retinal toxicity) is incompatible with chronic use in aging populations without significant selectivity innovation. Per the aging-context druggability convention in CLAUDE.md, tier 2 (high-quality probe / clinical oncology drug but not aging-validated) is the appropriate designation.

**Potential strategies based on current mechanistic evidence:**

- **FGFR1-selective partial inhibition / signaling normalization** — blocking supra-physiological FGF2-driven FGFR1 overdrive in aged muscle while preserving tonic FGFR1 signaling; no agent with this profile has been identified or clinically tested
- **SPRY1 induction** — restoring the endogenous FGFR1 negative feedback brake; no validated small-molecule inducer known; see [[molecules/proteins/spry1]]
- **FGFR1-integrin β1 axis activation** — based on Chang 2026, small molecules that promote FGFR1/integrin co-localization in aged satellite cells could restore ECM sensing without the excess-signaling toxicity concern; early-stage / preclinical concept
- **Reducing aged-niche FGF2 levels upstream** — senolytics removing SASP-secreting cells; blocking FGF2 unconventional secretion; not FGFR1-targeted per se but would reduce FGFR1 stimulus burden (see [[molecules/proteins/fgf2]])

No aging-specific clinical trial targeting FGFR1 in skeletal muscle, satellite cells, or sarcopenia is registered as of the literature search date (2026-06-15). #gap/needs-human-replication

## Limitations and gaps

1. **No human mechanistic data.** All evidence linking FGFR1 to satellite cell aging is from mouse genetic and pharmacological studies. Human muscle biopsy studies have not directly measured FGFR1 activity (e.g., pFRS2α, pERK1/2) in young vs. aged satellite cells, nor has any human intervention study tested FGFR1 modulation in the muscle-aging context. #gap/needs-human-replication
2. **Signaling paradox unresolved in vivo.** The apparent contradiction between Chakkalakal 2012 (excess FGFR1 drives depletion → inhibition protective) and Chang 2026 (FGFR1 activation restores aged satellite cell function) has not been resolved by a single in-vivo study that tests both the inhibition and activation arms head-to-head in aged muscle. The dose-dependence hypothesis (tonic vs supraphysiological) is plausible but not directly tested. #gap/contradictory-evidence
3. **Isoform specificity.** Whether FGFR1-IIIb vs FGFR1-IIIc contribute differentially to aged satellite cell phenotypes has not been assessed. #gap/no-mechanism
4. **MR causal evidence absent.** No Mendelian randomization study has used FGFR1 genetic instruments to test causal effects on muscle mass, strength, or aging-associated endpoints. `mr-causal-evidence: not-tested`. #gap/needs-replication
5. **GTEx aging correlation not queried.** Tissue-specific expression changes of FGFR1 across aging in GTEx would clarify which tissues bear the highest FGFR1-driven aging burden. #gap/needs-tissue-expression-data
6. **On-target toxicity translation.** The hyperphosphatemia toxicity of pan-FGFR inhibitors makes the FGF23/FGFR1/klotho axis a key constraint on any aging-directed FGFR1 pharmacology; the selectivity profile needed for a safe aging-directed FGFR1 modulator has not been defined. #gap/long-term-unknown

## Cross-references

- **[[molecules/proteins/fgf2]]** — the primary aging-relevant ligand; FGF2 aged-niche elevation is the upstream driver of FGFR1 overdrive in muscle; see that page for the Chakkalakal 2012 full mechanistic account and the SASP-FGF2 axis
- **[[molecules/proteins/spry1]]** — SPROUTY1; the principal downstream inhibitor of FGFR1/MAPK signaling in satellite cells; protects quiescent satellite cells from niche FGF2 excess (implicit stub)
- **[[cell-types/satellite-cells]]** — the cell type whose quiescence FGFR1 disrupts in aging; niche signaling detail including FGF2/Notch/Wnt balance
- **[[tissues/skeletal-muscle]]** — tissue context; myofibers as the source of the aged FGF2 niche signal; sarcopenia mechanisms
- **[[phenotypes/sarcopenia]]** — downstream phenotype driven by satellite cell exhaustion via FGFR1 overdrive
- **[[hallmarks/stem-cell-exhaustion]]** — hallmark exemplified by FGFR1-driven satellite cell depletion
- **[[hallmarks/altered-intercellular-communication]]** — FGFR1 as the membrane-proximate sensor of aberrant FGF2 niche communication
- **[[fgf-signaling]]** — the broader FGF ligand/receptor pathway; endocrine FGFs (FGF21, FGF23/klotho) are distinct subfamily; see pathway page for FGF23/FGFR1 renal axis
- **[[ras-mapk]]** — primary downstream effector cascade (ERK1/2) of FGFR1 activation in satellite cells
- **[[pi3k-akt-pathway]]** — secondary downstream effector; survival and growth signaling

---

## Footnotes

[^chakkalakal2012]: doi:10.1038/nature11438 · PMID 23023126 · PMC3605795 · Chakkalakal JV, Jones KM, Basson MA, Brack AS · *Nature* 2012;490(7420):355–360 · n=4–6 animals/group (in vivo); n=5 muscles/group (RT-qPCR); n=300–600 cells/condition (cell assays) · model: C57BL/6 mice; adult ~4–8 mo vs aged ~22–24 mo · aged myofiber FGF2 acts via FGFR1 on satellite cells to drive quiescence exit and eventual pool depletion; FGFR1 inhibition with SU5402 (implanted resin beads, 6-week experiment) prevented quiescence loss and attenuated apoptosis in aged satellite cells; Spry1 overexpression (5-month induction, Spry1OX) prevented pool depletion — twofold more satellite cells per fibre vs aged controls; Spry1 is selectively preserved in quiescent label-retaining satellite cells · green OA via PMC3605795

[^yeh2025]: doi:10.1186/s12964-025-02533-0 · PMID 41462267 · Yeh CJ, Nakka K, Yablonka-Reuveni Z, Lepper C · *Cell Commun Signal* 2025;23(1):535 · in-vivo genetic model; satellite cell-specific Fgfr1/Fgfr4 deletion in mice · FGFR1 and FGFR4 are required for satellite cell quiescence maintenance; deletion caused premature cell-cycle exit and terminal differentiation, impairing self-renewal and muscle regeneration; ERK pathway is the operative effector · shows that tonic FGFR1 signaling supports rather than opposes quiescence, providing necessary context for the Chakkalakal 2012 inhibition finding — loss of all FGFR1 and forced supra-physiological FGFR1 signaling both impair satellite cell function · closed-access; #gap/no-fulltext-access — abstract-derived

[^chang2026]: doi:10.64898/2026.02.18.706475 · PMID 41756900 · Chang TL, Vallery TK, Zlatkov TS, Cutler AA, Kurland JV, Butcher CH, Anseth KS, Olwin BB · *bioRxiv* preprint 2026-02-19 · in-vitro (viscoelastic hydrogel); young and aged mouse satellite cells · FGFR1 signaling is dysfunctional in aged satellite cells at the level of integrin-β1 co-localization and fibronectin ECM sensing; pharmacological FGFR1 activation restored integrin-β1 co-localization, self-renewal, and fibronectin responsiveness · preprint — not peer-reviewed; in-vitro only; in-vivo aged-muscle validation pending; weight accordingly · #gap/needs-replication

[^ornitz2015]: doi:10.1002/wrna.1232 · Ornitz DM, Itoh N · *WIREs Dev Biol* 2015;4(3):215–266 · review · comprehensive review of FGF family and FGFR biology; FGFR1 structure, isoforms, ligand-binding specificity (IIIb vs IIIc), developmental roles, and knockout phenotypes described; FGFR1 germline knockout is embryonic lethal at E7.5–E8 in mice; FGFR1-IIIc expressed in mesenchymal/myogenic cells · closed-access; #gap/no-fulltext-access — review; abstract-derived for isoform specificity content

[^pichler2025]: doi:10.1016/j.acuroe.2025.501719 · PMID 39955055 · Pichler R et al. (EAU-YAU Urothelial Carcinoma Working Group) · *Actas Urol Esp* 2025;49(5):501719 · systematic review (PRISMA) · FGFR inhibitors in urothelial cancer; erdafitinib approved for FGFR2/3-altered metastatic urothelial cancer; documents hyperphosphatemia as class on-target toxicity via FGF23/FGFR1 axis; no phase-3 trial for FGFR1-amplified tumors completed as of 2025 · oncology focus; aging relevance is pharmacological (toxicity profile translation) · closed-access; #gap/no-fulltext-access — abstract-derived
