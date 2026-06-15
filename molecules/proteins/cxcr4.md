---
type: protein
aliases: [CXCR4, CD184, fusin, D2S201E, LCR1, LESTR, NPY3R, NPYR, WHIM-receptor]
uniprot: P61073
ncbi-gene: 7852
hgnc: 2561
ensembl: ENSG00000121966
genage-id: null
pathways: ["[[cxcl12-cxcr4-pathway]]", "[[chemokine-signaling]]", "[[pi3k-akt-pathway]]", "[[mapk-pathway]]", "[[g-protein-coupled-receptor-signaling]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]", "[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
mouse-ortholog: Cxcr4   # MGI:109563; one-to-one ortholog; highly conserved CXCL12 binding and Gαi coupling
druggability-tier: 2    # plerixafor (AMD3100) and mavorixafor (Xolremdi, FDA-approved 2024) are high-quality clinical probes/drugs for CXCR4 antagonism; mavorixafor is approved for WHIM syndrome (a CXCR4-gain-of-function disease) but no drug targets CXCR4 for an aging indication; tier 1 would require aging-validated clinical use — see § Aging-context druggability
gtex-aging-correlation: "#gap/not-populated — GTEx tissue-by-age CXCR4 Spearman ρ not yet extracted; populate per sops/finding-tissue-expression.md"
mr-causal-evidence: not-tested
caused-by: ["[[cxcl12]]"]
causes: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
literature-checked-through: 2026-06-15
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "Sugiyama 2006 and Anginot 2023 verified against primary source PDFs; Hernandez 2003 verified against abstract + PMID cross-check (closed-access); Kollet 2012, Casanova-Acebes 2013, Fricker 2013, Wang 2020 verified against PubMed abstracts and Crossref metadata; canonical-DB identity fields (UniProt P61073, NCBI Gene 7852, HGNC 2561, Ensembl ENSG00000121966) confirmed via REST APIs; pharmacology table updated to include mavorixafor FDA approval (April 2024)"
---

# CXCR4

C-X-C motif chemokine receptor 4 (CXCR4, also called CD184 or fusin) is a seven-transmembrane G-protein-coupled receptor (GPCR) expressed on hematopoietic stem cells (HSCs), immune cells, endothelial cells, neurons, and many other tissues. Its dominant physiological ligand is [[molecules/proteins/cxcl12|CXCL12]] (SDF-1), although extracellular ubiquitin and the HIV-1 envelope glycoprotein gp120 also bind it. CXCR4 is the principal mediator of bone-marrow niche retention and quiescence in HSCs; its pharmacological antagonism with plerixafor (AMD3100) underpins clinical HSC mobilization for stem cell transplantation. In aging, dysregulation of the CXCL12–CXCR4 axis — through niche CXCL12 depletion, altered receptor expression on HSCs, and SASP-mediated paracrine CXCR4 activation — contributes to [[stem-cell-exhaustion]] and [[altered-intercellular-communication]]. Gain-of-function truncating mutations in *CXCR4* cause WHIM syndrome, and CXCR4 serves as an obligate co-receptor for X4-tropic HIV-1.

## Identity

- **UniProt:** P61073 (CXCR4_HUMAN) — Swiss-Prot, manually reviewed; 352 amino acids
- **NCBI Gene ID:** 7852 (symbol: *CXCR4*); chromosome 2q22.1
- **HGNC:** HGNC:2561
- **Ensembl:** ENSG00000121966
- **CD antigen:** CD184
- **Mouse ortholog:** *Cxcr4* (MGI:109563); one-to-one ortholog; CXCL12 binding and Gαi coupling highly conserved across vertebrates
- **GenAge:** no entry (CXCR4 is not in the HAGR curated aging gene set as of 2026-06-15) #gap/not-populated

### Previous symbols and aliases

*CXCR4* was previously described as *LESTR* (leukocyte-expressed seven-transmembrane-domain receptor), *fusin* (from its role as an HIV fusion co-receptor), and *NPY3R*. The CD184 designation is used in clinical flow-cytometry panels. Human CXCR4 maps to chromosome 2q22.1 — notably an intronless coding region.

## Structure and key functional domains

CXCR4 is a class A (rhodopsin-family) GPCR with seven transmembrane helices (TM1–TM7), an extracellular N-terminus, and an intracellular C-terminus bearing GPCR-kinase (GRK) phosphorylation sites:

- **N-terminal extracellular domain (ECL-N):** primary CXCL12 contact surface; sulfated Tyr21 increases CXCL12 affinity
- **Transmembrane pocket:** ligand-binding cavity; site of small-molecule antagonism by plerixafor
- **Intracellular C-terminal tail:** serine/threonine-rich; phosphorylated by GRK2/GRK3 upon agonist stimulation, creating docking sites for β-arrestins and triggering receptor internalization
- **DRY motif (Asp–Arg–Tyr) in TM3:** conserved GPCR activation switch; coupling to Gαi

## Signaling mechanisms

CXCR4 is a biased GPCR that drives parallel G-protein and β-arrestin outputs upon CXCL12 binding [^wang2020]:

### Gαi / calcium / cyclic AMP pathway

Agonist binding activates heterotrimeric G proteins — primarily Gα~i~ — inhibiting adenylyl cyclase and reducing intracellular cyclic adenosine monophosphate (cAMP). The Gβγ dimer simultaneously activates phospholipase C-β (PLCβ), generating inositol trisphosphate (IP3) and diacylglycerol (DAG). IP3 drives transient cytosolic calcium (Ca²⁺) elevation within seconds of receptor stimulation [^wang2020]. This calcium flux is measurable and is the standard pharmacological readout in CXCR4 gain-of-function assays (e.g., WHIM syndrome functional characterization).

### PI3K–AKT axis

Gβγ subunits released by Gα~i~ directly activate class I phosphoinositide 3-kinase (PI3K) → phosphatidylinositol 3,4,5-trisphosphate (PIP3) → AKT phosphorylation. AKT promotes cell survival, metabolic reprogramming, and augmented motility. This axis is relevant to HSC survival signaling in the bone-marrow niche.

### MAPK cascade

CXCL12–CXCR4 activates the Ras–Raf–MEK–ERK1/2 mitogen-activated protein kinase (MAPK) cascade, promoting cell migration, proliferation, and survival gene expression programs. ERK1/2 activation is a key readout in cancer-context CXCR4 signaling but is also operative in HSC mobilization biology.

### β-arrestin pathway and receptor internalization

After GRK2/GRK3-mediated phosphorylation of the C-terminal tail, β-arrestins (ARRB1 and ARRB2) bind CXCR4, sterically blocking G-protein coupling (desensitization) and initiating clathrin-mediated receptor internalization. β-arrestin–CXCR4 complexes can signal independently from endosomes. The WHIM syndrome truncation mutations (see § WHIM syndrome) remove C-terminal GRK phosphorylation sites, impairing receptor desensitization and prolonging Gαi and calcium signaling upon CXCL12 stimulation [^hernandez2003].

### Atypical receptor crosstalk: ACKR3

[[molecules/proteins/ackr3|ACKR3]] (atypical chemokine receptor 3, formerly CXCR7) binds CXCL12 with higher affinity than CXCR4 but lacks functional Gαi coupling; it acts as a ligand scavenger, constitutively internalizing and degrading CXCL12 to shape the gradient available to CXCR4. ACKR3 co-expression therefore modulates CXCR4 signaling amplitude. ACKR3 is prominently expressed on endothelial cells and is a concurrent stub being seeded alongside this page.

## Role in the bone-marrow HSC niche

### CXCL12–CXCR4 as the dominant niche-retention axis

HSCs constitutively express CXCR4 [^sugiyama2006]. CXCL12 secreted by CAR (CXCL12-abundant reticular) cells, LepR+ mesenchymal stromal cells, and sinusoidal endothelial cells in the bone marrow creates a gradient that retains HSCs in their perivascular and endosteal niches and maintains quiescence [^kollet2012]. The axis also mediates homing of transplanted HSCs back to bone marrow after intravenous infusion.

**Genetic evidence (mouse):** Conditional deletion of *Cxcr4* in adult mice (MxCre-CXCR4^flox/null^, plpC-induced, C57BL/6 background; n=6/group for HSC quantification) caused severe reduction in CD34⁻c-Kit⁺Sca-1⁺Lin⁻ HSC numbers (frequency p=0.026, absolute p=0.031) and increased HSC sensitivity to myelotoxic 5-FU injury (survival log-rank p=0.037, n=9/group) [^sugiyama2006]. Loss of CXCR4 also promoted exit from G₀ quiescence in primitive hematopoietic progenitors. The same study identified and named CAR cells as the primary bone-marrow stromal source of CXCL12 — establishing that CXCL12–CXCR4 signaling is essential for maintaining the quiescent HSC pool in defined niche microenvironments.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — CXCR4 on human HSCs is well-documented; SDF-1/CXCL12 gradient governs human HSC niche retention |
| Phenotype conserved in humans? | yes — plerixafor mobilizes human HSCs within hours by blocking this axis |
| Replicated in humans? | indirect — pharmacological (plerixafor) confirmation; no human genetic conditional deletion equivalent |

See [[cell-types/hematopoietic-stem-cells]] for the full HSC aging biology.

### Aging changes in CXCR4 niche function

With age, multiple features of the bone marrow niche impair CXCL12–CXCR4 axis function:

1. **CAR-cell depletion:** Mesenchymal stromal cells progressively convert to adipocytes with age, reducing CXCL12-secreting CAR-cell density and thereby attenuating the CXCL12 gradient available to CXCR4 on HSCs.
2. **HSC CXCR4 expression changes:** Aged HSCs show altered receptor expression and adhesion-molecule profiles; the net effect on CXCR4 surface levels is not fully characterized in aging vs. disease contexts. #gap/needs-replication
3. **Aged neutrophil CXCR4 upregulation:** Aged (senescent-phenotype) neutrophils upregulate CXCR4 (alongside downregulation of CD62L, producing a CD62L^lo^CXCR4^hi^ phenotype) and re-home to bone marrow, where they modulate hematopoietic progenitor egress through a circadian clearance mechanism [^casanova2013]. This neutrophil aging axis intersects CXCR4 biology with [[chronic-inflammation]].

### Clinical mobilization: plerixafor (AMD3100)

**Plerixafor** (AMD3100; trade name Mozobil) is a bicyclam small molecule that competitively antagonizes CXCL12 binding to CXCR4, disrupting HSC retention and mobilizing them from bone marrow into peripheral blood within hours [^fricker2013]. FDA-approved (in combination with granulocyte-colony-stimulating factor, G-CSF) for autologous HSC mobilization before transplantation in non-Hodgkin's lymphoma and multiple myeloma. Plerixafor is also active in WHIM syndrome (see below) [^wang2020].

Plerixafor's mechanism provided the first proof-of-concept in humans that pharmacological CXCR4 blockade is sufficient to disrupt bone-marrow niche retention and mobilize functional HSCs — a finding with direct relevance to understanding how CXCL12–CXCR4 governs niche biology at a causal, not merely correlative, level.

## WHIM syndrome

WHIM syndrome — **W**arts, **H**ypogammaglobulinemia, **I**nfections, **M**yelokathexis — is an autosomal-dominant combined immunodeficiency caused by heterozygous gain-of-function truncating mutations in *CXCR4* [^hernandez2003]. The original genetic characterization by Hernandez et al. 2003 (*Nature Genetics*) identified a 19-residue C-terminal truncation as the index WHIM mutation (subsequent work has characterized additional truncation lengths in other WHIM pedigrees [^balabanian2005]). This truncation eliminates C-terminal GRK phosphorylation docking sites, impairing receptor desensitization. Functional consequence: CXCR4 cannot be desensitized after CXCL12 stimulation. Cells carrying the 19-residue truncation show significantly greater calcium flux relative to control cells in response to SDF-1/CXCL12 [^hernandez2003], and retain hypersensitive responses including prolonged retention in bone marrow.

Clinical presentation reflects excess niche retention:
- **Myelokathexis:** pathological retention of mature neutrophils in bone marrow; peripheral neutropenia despite adequate BM production
- **Hypogammaglobulinemia:** impaired B-cell egress from marrow
- **Recurrent infections:** due to neutropenia + hypogammaglobulinemia
- **Warts / HPV susceptibility:** immune surveillance impairment

WHIM syndrome is also associated with decreased bone mineral density in ~25% of patients (≥1 site at or below T-score −1.0) and an osteoporotic bone phenotype in Cxcr4^1013^ knock-in mice; the mechanism is impaired CXCR4 desensitization in skeletal stromal cells (SSCs), which disrupts their osteogenic commitment in a Cxcr4 allele dose-dependent manner while promoting osteoclastogenesis; plerixafor (AMD3100, 5 mg/kg i.p., 3 weeks) reverses bone loss in vivo in 1013/1013 mice by normalizing CXCR4 signaling in SSCs [^anginot2023].

WHIM syndrome is a genetic proof-of-principle that dysregulated CXCR4 signaling causes multi-organ pathology — underscoring the importance of receptor desensitization in the biological context of aging, where chronic low-grade CXCL12 signaling might have analogous effects. #gap/no-mechanism (whether physiological aging produces partial gain-of-function CXCR4 phenotypes is not established)

## CXCR4 as HIV co-receptor

CXCR4 was identified in the mid-1990s as the obligate entry co-receptor for T-cell-tropic (X4-tropic) HIV-1 strains [^wang2020]. X4-tropic viruses use CXCR4 alongside CD4 for membrane fusion and cell entry via gp120 binding. Clinical relevance:
- R5-tropic strains (using CCR5) predominate early in infection; X4-tropic emergence is associated with advanced disease and CD4 cell depletion
- Patients treated with CCR5 antagonists (maraviroc) can experience outgrowth of pre-existing CXCR4-using variants
- Plerixafor blocks HIV-1 X4 entry and is under investigation as a CCR5/CXCR4 dual-blockade strategy [^wang2020]

This HIV biology has no direct aging implication but historically drove much of the mechanistic CXCR4 literature.

## Pharmacology and aging-context druggability

**Aging-context tier 2 rationale.** Plerixafor (AMD3100) and mavorixafor (Xolremdi, FDA-approved April 2024 for WHIM syndrome) are high-quality clinical-grade CXCR4 antagonists. Plerixafor's approved indication is HSC mobilization for autologous transplantation in NHL and myeloma; mavorixafor's approved indication is WHIM syndrome, a CXCR4 gain-of-function immunodeficiency. Neither drug is approved or in clinical trials for an aging indication. No drug currently engages CXCR4 for HSC quiescence restoration, niche rejuvenation, or any other aging-relevant therapeutic goal. Tier 2 (high-quality probe/disease-validated drug, not aging-validated) is therefore the correct designation; tier 1 would require clinical-stage evidence engaging CXCR4 for an aging phenotype.

| Compound | Mechanism | Clinical status | Aging relevance |
|---|---|---|---|
| Plerixafor (AMD3100) | CXCR4 competitive antagonist (bicyclam) | FDA-approved (NHL, MM mobilization) | Provides proof-of-concept; no aging trial |
| Mavorixafor (Xolremdi) | CXCR4 small-molecule antagonist (oral) | FDA-approved April 2024 (WHIM syndrome; NDA218709) [^mavorixafor2024] | Disease-validated CXCR4 blockade in a CXCR4-gain-of-function immunodeficiency; not an aging indication |
| Motixafortide (BL-8040) | CXCR4 antagonist peptide | Phase 3 (mobilization) | Not aging-specific |
| CXCR4 agonist tools | Research tools | Preclinical | HSC quiescence restoration (conceptual) |

**Mendelian randomization:** `mr-causal-evidence: not-tested` — No published MR study has used *CXCR4* expression quantitative trait loci (eQTLs) as genetic instruments to test causal effects on aging outcomes (HSC function, immune aging, frailty, or lifespan). Instruments are available in GTEx; this is technically feasible. #gap/needs-replication

## Pathway membership

- [[cxcl12-cxcr4-pathway]] (stub) — canonical niche-retention and stem-cell-trafficking axis; CXCR4 is the primary signaling receptor
- [[chemokine-signaling]] (stub) — broader GPCR/chemokine-receptor context
- [[g-protein-coupled-receptor-signaling]] (stub) — class A GPCR superfamily signaling
- [[pi3k-akt-pathway]] — activated downstream of CXCR4 via Gβγ → PI3K
- [[mapk-pathway]] — ERK1/2 branch downstream of CXCR4

## Key interactors

- [[molecules/proteins/cxcl12|CXCL12]] (SDF-1) — primary endogenous ligand; niche-retention signal; also a SASP factor in peripheral tissues
- [[molecules/proteins/ackr3|ACKR3]] (CXCR7) — atypical scavenging receptor that shapes the CXCL12 gradient available to CXCR4; concurrent stub
- Extracellular ubiquitin — alternative endogenous CXCR4 agonist; aging/inflammation context not characterized
- HIV-1 gp120 — viral envelope protein binding drives co-receptor-mediated membrane fusion (X4-tropic HIV entry)

## Limitations and gaps

1. **Aging-specific CXCR4 expression changes on HSCs uncharacterized.** Whether aged human HSCs upregulate or downregulate surface CXCR4 — and how this relates to their reduced per-cell function — is not established in systematic studies. #gap/needs-replication

2. **WHIM phenotype as aging model is speculative.** C-terminal truncation mutations provide strong mechanistic proof-of-principle for receptor desensitization biology, but whether analogous desensitization-independent signaling occurs in physiological aging (e.g., from inflammatory CXCL12 saturation) is unexplored. #gap/no-mechanism

3. **MR causal evidence absent.** No MR study has tested whether genetically elevated or reduced CXCR4 expression causally alters aging outcomes. #gap/needs-replication

4. **Muscle/satellite-cell CXCR4 aging not characterized.** CXCR4 is expressed on satellite cells and is implicated in muscle progenitor recruitment to injury sites; whether CXCR4 expression or responsiveness changes with age in the muscle niche is not published. #gap/needs-replication

5. **GTEx aging correlation not populated.** Tissue-by-age CXCR4 expression trajectories have not been extracted for this page. #gap/not-populated

6. **ACKR3 aging expression unknown.** How ACKR3 expression in endothelial and other SASP-relevant cell types changes with age is not characterized (see [[molecules/proteins/ackr3]]). #gap/needs-replication

## See also

- [[molecules/proteins/cxcl12]] — primary ligand; covers niche-retention signaling, SASP-context CXCL12, and the ligand-side pharmacology
- [[molecules/proteins/ackr3]] — atypical scavenging receptor that shapes CXCL12 gradients (concurrent stub)
- [[cell-types/hematopoietic-stem-cells]] — primary cellular context; CXCR4 is the dominant niche-retention receptor on HSCs
- [[hallmarks/stem-cell-exhaustion]] — hallmark that CXCL12–CXCR4 axis dysregulation contributes to
- [[hallmarks/altered-intercellular-communication]] — paracrine CXCR4 activation by SASP-CXCL12
- [[hallmarks/chronic-inflammation]] — aged neutrophil CXCR4^hi^ re-homing; CXCL12-driven immune-cell recruitment
- [[hallmarks/cellular-senescence]] — senescent cells secrete CXCL12, stimulating CXCR4 on neighboring cells
- [[cxcl12-cxcr4-pathway]] (implicit stub) — canonical signaling pathway page
- [[phenotypes/sarcopenia]] — downstream phenotype with indirect CXCR4 connection via satellite-cell recruitment

---

## Footnotes

[^hernandez2003]: doi:10.1038/ng1149 · PMID 12692554 · Hernandez PA, Gorlin RJ, Lukens JN, … Diaz GA · *Nat Genet* 2003;34(1):70–74 · observational (human genetics, functional characterization) · model: WHIM syndrome patients and cell-line transfectants · first identification of gain-of-function truncating mutations in CXCR4 causing WHIM syndrome; mutant receptors showed greater Ca²⁺ flux and impaired desensitization vs wild-type CXCR4 in response to SDF-1; establishes C-terminal tail as the GRK-phosphorylation/desensitization domain essential for signal termination

[^sugiyama2006]: doi:10.1016/j.immuni.2006.10.016 · PMID 17174120 · Sugiyama T, Kohara H, Noda M, Nagasawa T · *Immunity* 2006;25(6):977–988 · in-vivo (mouse, inducible *Cxcr4* deletion in adult bone marrow) · model: C57BL/6-backcrossed (>7x with C57BL/6-Ly5.2\*Ly5.1), MxCre-CXCR4^flox/null^, plpC-induced; n=6/group (HSC quantification), n=9/group (5-FU survival); log-rank p=0.037 (survival); p=0.026/0.031 (HSC frequency/absolute) · conditional deletion of CXCR4 in adult mice severely reduced CD34⁻c-Kit⁺Sca-1⁺Lin⁻ HSC numbers and caused exit from G₀ quiescence in primitive hematopoietic progenitors, and increased 5-FU myelotoxic-injury sensitivity; CAR cells identified and named as the primary stromal CXCL12 source in perivascular + endosteal niches; established CXCL12–CXCR4 signaling as essential for quiescent HSC pool maintenance; bronze OA (Cell.com PDF)

[^kollet2012]: doi:10.2174/187152812800392760 · PMID 22280241 · Kollet O, Lapidot T · *Inflamm Allergy Drug Targets* 2012;11(3):169–178 · review · model: mouse + human bone marrow literature synthesis · SDF-1/CXCR4 axis as central determinant of HSC fate in bone marrow niches; integration of neural, vascular, and bone-cell signaling with CXCR4-dependent HSC trafficking

[^casanova2013]: doi:10.1016/j.cell.2013.04.040 · PMID 23706740 · Casanova-Acebes M, … Hidalgo A · *Cell* 2013;153(5):1025–1035 · in-vivo (mouse, circadian hematopoiesis) · model: C57BL/6; circadian-ablation experiments · aged (CD62L^lo^CXCR4^hi^) neutrophils re-home to bone marrow in a circadian pattern and remodel the hematopoietic niche through macrophage clearance; CXCR4 upregulation marks the neutrophil aging state and drives BM re-entry

[^fricker2013]: doi:10.1159/000354132 · PMID 24179472 · Fricker SP · *Transfus Med Hemother* 2013;40(4):237–245 · review (clinical pharmacology) · model: human clinical trial literature · physiology and pharmacology of plerixafor (AMD3100); bicyclam CXCR4 antagonist; mobilizes HSCs within hours; FDA-approved with G-CSF for NHL + myeloma autologous transplantation; durable engraftment outcomes

[^wang2020]: doi:10.1016/j.phrs.2020.105010 · PMID 32544428 · Wang J, Chen H · *Pharmacol Res* 2020;159:105010 · review · model: human + mouse clinical and mechanistic literature · comprehensive review of plerixafor (AMD3100) mechanisms and therapeutic applications: CXCR4 signaling (Gαi, Ca²⁺, PI3K, MAPK, β-arrestin), HSC mobilization, X4 HIV-1 entry blockade, tumor-microenvironment immunomodulation, and WHIM syndrome; covers receptor desensitization biology

[^balabanian2005]: doi:10.1182/blood-2004-08-3296 · PMID 15536153 · Balabanian K, Lagane B, Pablos JL, … Bachelerie F · *Blood* 2005;105(7):2449–2457 · observational (human genetics, functional characterization) · model: WHIM syndrome patients from 3 pedigrees · characterized additional C-terminal CXCR4 truncation variants beyond the Hernandez 2003 index mutation; all pedigrees showed impaired CXCR4 desensitization and internalization after CXCL12 stimulation, with marked enhancement of G-protein-dependent responses; establishes that CXCR4 desensitization failure is the common mechanism across different WHIM-associated truncation alleles

[^anginot2023]: doi:10.1038/s41467-023-37791-4 · PMID 37045841 · Anginot A, … Balabanian K · *Nat Commun* 2023;14:2058 · in-vivo + human observational · model: 19 WHIM syndrome patients (BMD measurement) + Cxcr4^1013^ knock-in mice (heterozygous +/1013 and homozygous 1013/1013); n=5–17/group for in-vivo bone analyses · gain-of-function CXCR4 WHIM mutations (Cxcr4^S338X^/1013) cause decreased bone mineral density in 5/19 (25%) patients (≥1 site at or below T-score −1.0) and an osteoporotic bone phenotype in mice in a Cxcr4 allele dose-dependent manner; mechanism: impaired CXCR4 desensitization disrupts cell cycle progression and osteogenic commitment of skeletal stromal cells (SSCs), while increasing pro-osteoclastogenic capacity; AMD3100 (5 mg/kg i.p., 3 weeks) reverses in vivo bone loss in 1013/1013 mice by normalizing SSC osteogenic fate; gold OA (Nature Communications)

[^mavorixafor2024]: FDA NDA218709 · Mavorixafor (Xolremdi) · X4 Pharmaceuticals · FDA-approved 2024-04-26 for WHIM syndrome (Orphan Drug, Priority Review) · first oral small-molecule CXCR4 antagonist approved for a CXCR4-gain-of-function immunodeficiency indication; increases neutrophil counts and reduces infection rates; not an aging indication
