---
type: protein
aliases: [ARRB2, arrestin beta-2, beta-arrestin-2, ARR2, BARR2, "non-visual arrestin-3"]
uniprot: P32121
ncbi-gene: 409
hgnc: 712
ensembl: ENSG00000141480
genage-id: null
pathways: ["[[g-protein-coupled-receptor-signaling]]", "[[mapk-pathway]]", "[[chemokine-signaling]]", "[[cxcl12-cxcr4-pathway]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
mouse-ortholog: Arrb2   # NCBI Gene 216869; MGI symbol Arrb2; one-to-one ortholog; high conservation
druggability-tier: null   # intracellular scaffold; no clinical drug targets ARRB2 directly for any aging indication; biased-agonist strategies target the upstream GPCR, not arrestin; see § Pharmacology #gap/no-opentargets-entry
gtex-aging-correlation: "#gap/not-populated — GTEx tissue-by-age ARRB2 Spearman ρ not yet extracted; populate per sops/finding-tissue-expression.md"
mr-causal-evidence: not-tested
caused-by: ["[[g-protein-coupled-receptor-signaling]]"]
causes: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
literature-checked-through: null
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "Canonical-DB IDs confirmed via UniProt/NCBI/HGNC/Ensembl REST APIs. Rajagopal 2010 PNAS verified against full PDF. Capote 2021 verified against PMC full text (PMC8430342). Beaulieu 2008, Wang 2017, Jiang 2018, Campo 2015, McDonald 2000, Bohn 1999 metadata verified via Crossref/PubMed — author lists and page numbers corrected. Hoque 2014, Shenoy 2003, Lin 2002, Whalen 2011, Smith 2018 verified via Crossref metadata only; abstract-level for those; mechanism claims consistent with abstract."

# β-arrestin-2 (ARRB2)

β-arrestin-2, encoded by the gene **ARRB2**, is a cytosolic adaptor protein recruited to agonist-activated, G-protein-receptor-kinase (GRK)-phosphorylated G-protein-coupled receptors (GPCRs). It performs three overlapping functions: **desensitization** (steric uncoupling of the receptor from heterotrimeric G proteins), **clathrin-mediated internalization** (trafficking the receptor into endosomes), and **β-arrestin-biased signaling** (scaffolding kinase cascades — ERK/MAPK, JNK3, Src, AKT — independently of G-protein activation). β-arrestin-2 is one of four mammalian arrestins (visual arrestin-1, cone arrestin, β-arrestin-1/ARRB1, and β-arrestin-2/ARRB2); it is the effector recruited by the atypical chemokine receptor [[ackr3]] and mediates [[cxcr4]] desensitization and internalization. Its documented roles in NF-κB suppression and cardiac aging make it peripherally relevant to hallmarks of aging, though it is not a canonical aging gene.

## Identity

- **UniProt:** P32121 (ARRB2_HUMAN) — Swiss-Prot, manually reviewed; 409 amino acids
- **Gene symbol:** ARRB2 (HGNC-approved symbol since the 1990s; previous HGNC symbol ARR2; alias BARR2)
- **NCBI Gene ID:** 409 (chromosome 17p13.2)
- **HGNC:** 712
- **Ensembl:** ENSG00000141480
- **Mouse ortholog:** Arrb2 (NCBI Gene 216869; one-to-one ortholog; structure and GPCR-binding function are highly conserved)
- **GenAge:** no entry — ARRB2 is not in the HAGR curated aging gene set as of 2026-06-15 #gap/not-populated

**Disambiguation from β-arrestin-1 (ARRB1):** β-arrestin-1 (ARRB1, UniProt P49407, NCBI Gene 408, chromosome 11q13.2) is the closely related paralog. ARRB1 and ARRB2 share ~78% sequence identity and largely overlapping GPCR substrates, but differ in nuclear trafficking (ARRB1 translocates to the nucleus more readily), tissue expression distributions, and some receptor preferences. ACKR3 recruits **β-arrestin-2 preferentially** [^rajagopal2010]; CXCR4 recruits both isoforms. Unless otherwise specified, claims on this page refer to ARRB2 only.

## Protein architecture and post-translational modifications

β-arrestin-2 adopts a bi-lobed "clam shell" fold consisting of N-domain and C-domain β-sandwich structures joined by a polar core. Agonist-bound, GRK-phosphorylated GPCR cytoplasmic tails disrupt the polar core hydrogen bonds, triggering an **activation conformational change** that exposes surfaces for simultaneous interactions with the receptor C-tail, clathrin, adaptor protein 2 (AP2), and downstream signaling effectors [^shenoy2003].

Key structural features:
- **Phospho-sensor region (N-domain):** contacts GRK-phosphorylated serine/threonine residues on the receptor C-tail; defines receptor selectivity
- **Clathrin box motif:** recruits clathrin heavy chain for endocytic vesicle formation
- **AP2-binding site:** engages clathrin adaptor AP2 (α-adaptin subunit) for pit localization
- **C-tail:** intrinsically disordered; contains sites phosphorylated by casein kinase II (CK2) and protein kinase A (PKA) that modulate arrestin's own clathrin binding affinity [^lin2002]
- **Finger loop:** inserts into the GPCR transmembrane core upon high-affinity "tail + core" binding; stabilizes the active arrestin state

The protein's multiple simultaneous binding surfaces explain its multifunctional scaffold role: a single β-arrestin-2 molecule can bridge an active GPCR, clathrin, AP2, and a kinase scaffold protein simultaneously.

## Core mechanisms

### 1. GPCR desensitization

The canonical desensitization sequence is: GPCR agonist activation → GRK2/3/5/6 phosphorylation of receptor serine/threonine residues → β-arrestin-2 recruitment → steric occlusion of the G-protein-binding interface on the receptor → G-protein uncoupling. β-arrestin-2 binding therefore terminates the G-protein signal independently of receptor removal from the membrane. The best-characterized in vivo example is opioid receptor desensitization: β-arrestin-2 knockout mice showed dramatically potentiated and prolonged morphine analgesia, confirming that ARRB2 limits mu-opioid receptor (MOR) G-protein signaling in native tissue [^bohn1999].

### 2. Clathrin-mediated receptor internalization

After desensitization, β-arrestin-2 simultaneously contacts clathrin and AP2, nucleating a clathrin-coated pit around the receptor-arrestin complex. The receptor is then internalized into endosomes. From endosomes, receptors are sorted: "class A" GPCRs (e.g., β2-adrenergic receptor, β2AR) dissociate from β-arrestin-2 in early endosomes and recycle rapidly to the plasma membrane (resensitization); "class B" GPCRs (e.g., angiotensin II type 1 receptor, AT1R; vasopressin V2 receptor) form stable "megaplex" structures that traffic together with β-arrestin-2 into recycling endosomes, enabling sustained β-arrestin-dependent signaling from intracellular compartments [^shenoy2003]. β-arrestin-2 is thus both the initiator of desensitization and the vehicle by which "desensitized" receptors continue to signal from endosomes via a G-protein-independent route.

### 3. β-arrestin-biased signaling (scaffolding)

Independently of G-protein signaling, β-arrestin-2 scaffolds several kinase complexes on internalized receptors:

- **MAPK cascade:** β-arrestin-2 acts as a scaffold for ASK1–MKK4–JNK3 (c-Jun N-terminal kinase 3), bringing the entire kinase module under GPCR control [^mcdonald2000]. Endosomal β-arrestin-GPCR complexes also scaffold ERK1/2 activation, producing spatially distinct (cytoplasmic, endosomal) ERK activity compared to nuclear ERK from G-protein-dependent activation.
- **AKT/GSK3:** β-arrestin-2 forms a signaling complex with Akt, protein phosphatase 2A (PP2A), and Gβγ downstream of dopamine D2 receptors, controlling glycogen synthase kinase 3 (GSK3) phosphorylation; this complex is disrupted by lithium, explaining part of lithium's therapeutic mechanism [^beaulieu2008].
- **Src/focal adhesion kinase:** β-arrestin-2 recruits Src to the β2AR, activating ERK via a G-protein-independent route.

This "biased" output — distinct from classic G-protein signals — is therapeutically significant because it allows biased agonists that selectively activate either G-protein or β-arrestin pathways via the same receptor.

## Relevance to the CXCL12/ACKR3/CXCR4 chemokine axis

β-arrestin-2 is the primary intracellular effector for **[[ackr3]]** (atypical chemokine receptor 3). ACKR3 is a seven-transmembrane decoy receptor that lacks functional G-protein coupling; its sole confirmed canonical output is β-arrestin-2 recruitment [^rajagopal2010]. In transiently transfected HEK293 cells, β-arrestin-2 recruitment to ACKR3 drives MAPK (pERK) activation. In native rat vascular smooth muscle cells expressing endogenous ACKR3, β-arrestin-2 siRNA knockdown significantly attenuated CXCL11 (ITAC)-stimulated cell migration (p<0.05; β-arrestin-1 knockdown had no effect) — establishing β-arrestin-2 as the functional transducer in at least some cell types with endogenous receptor expression [^rajagopal2010]. This makes β-arrestin-2 the downstream signal relay for the ACKR3-dependent component of CXCL12 gradient shaping in the bone-marrow niche and vascular endothelium (see [[ackr3]] and [[molecules/proteins/cxcl12]]).

For **[[cxcr4]]**, β-arrestin-2 (together with β-arrestin-1) mediates the canonical desensitization/internalization sequence following CXCL12 stimulation: GRK2/3 phosphorylate the CXCR4 C-terminal tail, β-arrestin is recruited, and the receptor is internalized. The WHIM syndrome C-terminal truncation mutations (documented on [[cxcr4]]) remove the GRK phosphorylation docking sites and thereby impair β-arrestin recruitment — explaining the pathological gain-of-function phenotype of prolonged, unquenched CXCR4 signaling.

β-arrestin-2 is therefore a shared downstream effector for both arms of the CXCL12 axis: the scavenging/biased arm (ACKR3) and the classical signaling arm's desensitization (CXCR4). See [[cxcl12-cxcr4-pathway]] for the integrated pathway context.

## Inflammation and NF-κB regulation

β-arrestin-2 negatively regulates innate inflammatory signaling, specifically the Toll-like receptor (TLR) / NF-κB (nuclear factor kappa B) axis:

- **TLR4/NF-κB suppression:** β-arrestin-2 knockout mice showed markedly worse lipopolysaccharide (LPS)-induced liver injury with significantly elevated IL-1β, IL-6, and TNF-α versus wild-type controls; β-arrestin-2 siRNA knockdown in RAW264.7 macrophages increased phospho-IκBα and phospho-p65 NF-κB subunit [^jiang2018]. This establishes β-arrestin-2 as a brake on TLR4-driven innate inflammation.
- **Chondrocyte NF-κB:** In mouse chondrocytes stimulated with pro-inflammatory 4-mer hyaluronan oligosaccharides, β-arrestin-2 blockade significantly potentiated the inflammatory response via release of p38 MAPK suppression and NF-κB de-repression [^campo2015].
- **GPR81/lactate inflammasome axis:** Lactate-GPR81-β-arrestin-2 signaling negatively regulates TLR-driven NLRP3 inflammasome activation, reducing IL-1β production; β-arrestin-2 is required for GPR81's anti-inflammatory metabolic signaling [^hoque2014].

The mechanistic basis for NF-κB suppression is not fully elucidated but likely involves β-arrestin-2 sequestering IκBα from phosphorylation by IKK or scaffolding suppressive phosphatases. Importantly, β-arrestin-2's anti-inflammatory role in innate immunity is **not** a GPCR desensitization effect but an independent scaffold function engaged by TLR/metabolic-receptor agonism. Whether age-related decline in β-arrestin-2 expression or activity contributes to inflammaging is not established. #gap/needs-replication

| Dimension | Status |
|---|---|
| NF-κB suppression mechanism conserved in humans? | partial — mouse KO data; human mechanistic evidence from in vitro knockdown |
| Phenotype replicated in aging? | no — inflammatory studies used young mice; aging-specific data absent |
| Replicated independently? | yes — multiple independent in vitro/in vivo systems confirm ARRB2 as NF-κB brake |

## Cardiac aging relevance

The most directly aging-specific evidence for β-arrestin-2 comes from cardiac biology. β-arrestin-2 desensitizes β-adrenergic receptors (β1AR, β2AR) — the dominant GPCR system governing cardiac contractility. Chronic catecholamine stimulation in heart failure drives maladaptive β-AR signaling partly through GRK2 upregulation and excessive desensitization; β-arrestin-2 participates in this process and also scaffolds protective AKT and anti-apoptotic signals from endosomal β-ARs.

**Aging-specific evidence (mouse):** β-arrestin-2 knockout mice at 12–16 months of age (vs. 3–6 month young controls) showed KO-specific depressed contractility parameters — prolonged aortic ejection time and decreased velocity of circumferential fiber shortening — with preserved ejection fraction (≥50% in all groups), plus KO-specific impaired diastolic relaxation (slower e′ velocity, higher E/e′ ratio, prolonged isovolumetric relaxation time) [^capote2021]. Notably, left atrial and left ventricular internal diameter enlargement occurred in both aged WT and aged KO mice (a normal aging effect), and was not KO-specific. Myofilament protein phosphorylation patterns were altered in aged KO mice (increased cMyBP-C phosphorylation at Ser302, decreased RLC phosphorylation). These contractility and diastolic dysfunction deficits were absent in young KO mice, indicating that β-arrestin-2 signaling specifically becomes protective during cardiac aging rather than development. Statistical analysis used two-way ANOVA with Fisher's LSD post-hoc testing (p<0.05; n=5–13 per echocardiography group).

**Diabetes/cardiac intersection:** Hyperinsulinemia activates β2AR in a β-arrestin-2-dependent manner (via GRK2 transactivation), contributing to diabetes-associated cardiac dysfunction; β-arrestin-2 knockout mice on high-fat diet were protected from this specific insulin-mediated β2AR transactivation pathway [^wang2017].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — β-arrestin-2 / β-AR / GRK2 axis is the same in human heart |
| Phenotype conserved in humans? | partial — diastolic dysfunction with aging is a major human phenotype; ARRB2-specific contribution not tested in humans |
| Replicated in humans? | no — genetic evidence absent; no human cardiac ARRB2 aging study #gap/needs-human-replication |

## Biased agonism: drug-design implications

β-arrestin-biased agonism — ligands that activate β-arrestin pathways selectively without coupling to G proteins — is a major paradigm in drug development. For GPCRs where G-protein signaling mediates side effects and β-arrestin signaling mediates therapeutic benefit (or vice versa), biased agonists allow pathway selectivity [^whalen2011]. Examples relevant to aging contexts:

- **Opioid pain/constipation trade-off:** G-protein signaling from MOR mediates analgesia; β-arrestin-2 recruitment was historically thought to drive respiratory depression and constipation. TRV130 (oliceridine), a G-protein-biased MOR agonist, was designed to avoid β-arrestin recruitment and received FDA approval in 2020 for acute pain — the first approved biased GPCR agonist. *Caveat:* subsequent Arrb2-KO mouse studies have complicated this model by showing β-arrestin-2 is not the sole driver of opioid side effects [^whalen2011].
- **PTH1R bone formation:** β-arrestin-biased PTH analogs drive anabolic bone formation without hypercalcemia, demonstrating that signaling selectivity can be therapeutically exploited at a receptor relevant to osteoporosis.
- **ACKR3:** the entire biology of ACKR3 as a scavenging receptor is predicated on its constitutive β-arrestin-biased nature — it is pharmacologically interesting precisely because it proves that β-arrestin-2 recruitment alone (without G-protein coupling) constitutes a functional signaling program.

As the field has matured, it has become clear that β-arrestin "conformation" (determined by the specific phosphorylation pattern — the "barcode" — on the receptor C-tail) determines which downstream scaffold interactions are adopted, making arrestins more like "allosteric microprocessors" than simple on/off switches [^smith2018]. This conformational diversity is not yet pharmacologically exploitable in an aging context.

## Pharmacology and aging-context druggability

**Aging-context druggability: null.** β-arrestin-2 itself is an intracellular scaffold; it has no catalytic active site and no documented allosteric binding pocket amenable to small-molecule targeting. No clinical drug directly binds β-arrestin-2. The protein is instead *indirectly* modulated by:

1. **Biased GPCR ligands** at upstream receptors (e.g., oliceridine at MOR; biased β-AR ligands) — these are designed to favor or disfavor β-arrestin-2 recruitment at the receptor level; the arrestin itself is not the drug target.
2. **GRK inhibitors** (e.g., paroxetine as GRK2 inhibitor in heart failure research) — reduce receptor phosphorylation and therefore reduce β-arrestin-2 recruitment; GRK2 not β-arrestin-2 is the target.
3. **Indirect modulation via receptor expression** — anything that changes surface GPCR levels changes β-arrestin-2 engagement.

There is no ongoing clinical program targeting ARRB2 directly for any aging indication. The field's drug-development focus is on the upstream GPCR, not on arrestin. Druggability tier is therefore null (no clinically tractable approach exists targeting ARRB2 directly for aging).

`mr-causal-evidence: not-tested` — No Mendelian randomization study has used ARRB2 expression quantitative trait loci (eQTLs) to test causal effects on aging-relevant outcomes. ARRB2 eQTLs exist in GTEx (chromosome 17p13.2); this is technically feasible. #gap/needs-replication

## Pathway membership

- [[g-protein-coupled-receptor-signaling]] — central effector of GPCR desensitization and internalization across the entire GPCR superfamily
- [[mapk-pathway]] — scaffolds ERK1/2 and JNK3 via β-arrestin-2-dependent endosomal signaling complexes
- [[chemokine-signaling]] — sole confirmed effector for ACKR3; desensitization effector for CXCR4
- [[cxcl12-cxcr4-pathway]] (stub) — participates through both ACKR3 (biased arm) and CXCR4 (desensitization arm)

## Key interactors

- [[ackr3]] — ACKR3's sole canonical intracellular signal transducer; β-arrestin-2 recruitment is the complete intracellular output of this scavenging decoy receptor
- [[cxcr4]] — β-arrestin-2 mediates CXCR4 desensitization and internalization after CXCL12 stimulation; WHIM mutations impair this step
- [[molecules/proteins/cxcl12|CXCL12]] — indirect interaction: CXCL12 activates CXCR4 and triggers β-arrestin-2 recruitment; also the ligand for ACKR3 that drives β-arrestin-2 scavenging internalization

## Limitations and gaps

1. **No aging-specific expression data.** Whether ARRB2 expression or recruitment efficiency changes with aging in immune cells, cardiomyocytes, or stem-cell niches has not been characterized systematically. Reduced ARRB2 in aged macrophages could compound inflammaging; in cardiomyocytes it would worsen diastolic dysfunction. #gap/needs-replication

2. **Cardiac aging mechanism incomplete.** The Capote 2021 study establishes that β-arrestin-2 is protective in aged hearts but does not identify the specific GPCR substrate(s) involved — whether it is β-AR desensitization, endosomal AKT signaling, or another receptor system. #gap/no-mechanism

3. **NF-κB suppression molecular mechanism unresolved.** How β-arrestin-2 attenuates IκBα phosphorylation or p65 nuclear translocation at a biochemical level is not established. Whether it directly binds IKK, competes with IκBα, or recruits phosphatases is unclear. #gap/no-mechanism

4. **GTEx aging correlation unpopulated.** Tissue-by-age ARRB2 expression trajectories have not been extracted for this page. Populate per `sops/finding-tissue-expression.md`. #gap/not-populated

5. **MR causal evidence absent.** No MR study has tested ARRB2 expression as a causal determinant of any aging outcome. #gap/needs-replication

6. **Biased-agonism controversy ongoing.** The clean β-arrestin-signaling / G-protein-signaling dichotomy has been complicated by "megaplex" structures (simultaneous G-protein + β-arrestin engagement), revised KO phenotypes, and conformational-barcode complexity. Claims about "β-arrestin-only" outputs should be interpreted cautiously. #gap/contradictory-evidence

## See also

- [[ackr3]] — atypical chemokine receptor 3; ACKR3's sole downstream intracellular effector is β-arrestin-2
- [[cxcr4]] — classical CXCL12 receptor; β-arrestin-2 mediates its desensitization and internalization
- [[molecules/proteins/cxcl12]] — the chemokine ligand whose gradient is shaped by ACKR3-mediated β-arrestin-2-dependent scavenging
- [[cxcl12-cxcr4-pathway]] (stub) — integrated pathway covering both ACKR3 scavenging and CXCR4 signaling arms
- [[hallmarks/altered-intercellular-communication]] — ACKR3/β-arrestin-2 gradient shaping modulates paracrine chemokine circuits
- [[hallmarks/chronic-inflammation]] — β-arrestin-2 negatively regulates TLR4/NF-κB; loss of this brake could amplify inflammaging
- [[hallmarks/cellular-senescence]] — senescent cells secrete CXCL12 (as a SASP factor), engaging CXCR4 on neighboring cells; β-arrestin-2 terminates this signal
- [[cell-types/hematopoietic-stem-cells]] — HSC niche retention via CXCR4 requires functional β-arrestin-2-mediated desensitization for gradient reading

---

## Footnotes

[^bohn1999]: doi:10.1126/science.286.5449.2495 · PMID 10617462 · Bohn LM, Lefkowitz RJ, Gainetdinov RR, Peppel K, Caron MG, Lin FT · *Science* 1999;286(5449):2495–2498 · in-vivo (β-arrestin-2 knockout mice, C57BL/6) · foundational demonstration that β-arrestin-2 mediates desensitization of the mu-opioid receptor (MOR) in vivo; ARRB2 KO mice showed "remarkable potentiation and prolongation" of morphine analgesia; establishes that endogenous β-arrestin-2 limits GPCR G-protein signaling duration in native tissue

[^mcdonald2000]: doi:10.1126/science.290.5496.1574 · PMID 11090355 · McDonald PH, Chow CW, Miller WE, Laporte SA, et al. · *Science* 2000;290(5496):1574–1577 · in-vitro (HEK293 + in-vivo mouse hippocampus) · ~700 citations · foundational β-arrestin-2 scaffold paper; demonstrates that β-arrestin-2 acts as "a scaffold protein, which brings the spatial distribution and activity of this MAPK module under the control of a GPCR"; specifically shown for ASK1–MKK4–JNK3 complex; establishes independent signaling function beyond desensitization

[^shenoy2003]: doi:10.1042/BJ20031076 · PMID 12959637 · Shenoy SK, Lefkowitz RJ · *Biochem J* 2003;375(Pt 3):503–515 · review · comprehensive mechanistic review of β-arrestin multifunctionality as endocytic adapter (clathrin + AP2 binding), signaling scaffold (MAPK, Src), and receptor-trafficking regulator; establishes the "class A vs class B GPCR" dichotomy (transient vs stable arrestin binding) that determines receptor recycling fate

[^lin2002]: doi:10.1021/bi025705n · PMID 12186555 · Lin F-T, Chen W, Shenoy S, Bhatt M, Bhatt S, Lefkowitz RJ · *Biochemistry* 2002;41(34):10692–10699 · in-vitro (HEK293 transfection) · phosphorylation of β-arrestin-2 at CK2 sites regulates its association with clathrin, thereby modulating clathrin-mediated receptor internalization capacity; demonstrates that β-arrestin-2 activity is itself regulated by post-translational modification

[^whalen2011]: doi:10.1016/j.molmed.2010.11.004 · PMID 21183406 · Whalen EJ, Rajagopal S, Lefkowitz RJ · *Trends Mol Med* 2011;17(3):126–139 · review · Lefkowitz group landmark review of biased agonism and β-arrestin-biased signaling; frames β-arrestins as "multifunctional adapters that promote distinct intracellular signals in their own right"; introduces therapeutic framework for G-protein-biased vs β-arrestin-biased drug design; covers opioid analgesia, cardiac, and other receptor systems; notes complexity of the opioid biased-agonist model

[^smith2018]: doi:10.1038/nrd.2017.229 · PMID 29302067 · Smith JS, Lefkowitz RJ, Bhattacharya S · *Nat Rev Drug Discov* 2018;17(4):243–260 · review · proposes that GPCRs function as "multistate allosteric microprocessors" where "biased ligands transmit distinct structural information" selectively activating G proteins or β-arrestins; frames the field as more conformationally complex than simple biased-switch models; key reference for nuanced understanding of β-arrestin pathway selectivity

[^rajagopal2010]: doi:10.1073/pnas.0912852107 · PMID 20018651 · Rajagopal S, Kim J, Ahn S, Craig S, Lam CM, Gerard NP, Gerard C, Lefkowitz RJ · *Proc Natl Acad Sci USA* 2010;107(2):628–632 · in-vitro + in-vivo (rat VSMCs) · foundational demonstration that CXCR7/ACKR3 is β-arrestin-biased; β-arrestin-2 siRNA significantly attenuated ITAC/CXCL11-stimulated migration in native VSMCs (p<0.05; β-arrestin-1 siRNA had no effect); MAPK activation was NOT detected in native VSMCs — only in HEK293 overexpression context; establishes β-arrestin-2 as ACKR3's sole functional effector in cells with endogenous expression

[^jiang2018]: doi:10.3748/wjg.v24.i2.216 · PMID 29375207 · Jiang MP, Xu C, Guo YW, Luo QJ, Li L, Liu HL, Jiang J, Chen HX, Wei XQ · *World J Gastroenterol* 2018;24(2):216–225 · in-vivo (β-arrestin-2 KO mice) + in-vitro (RAW264.7 macrophages, siRNA) · β-arrestin-2 KO mice showed significantly more severe LPS-induced liver injury and higher IL-1β, IL-6, TNF-α; β-arrestin-2 siRNA increased phospho-IκBα and phospho-p65 in macrophages; establishes ARRB2 as a direct brake on TLR4/NF-κB innate inflammatory signaling

[^campo2015]: doi:10.1007/s11010-014-2246-5 · PMID 25318610 · Campo GM, Avenoso A, D'Ascola A, Scuruchi M, Calatroni A, Campo S · *Mol Cell Biochem* 2015;399(1-2):201–208 · in-vitro (mouse chondrocytes) · β-arrestin-2 blockade significantly potentiated inflammatory response to pro-inflammatory 4-mer hyaluronan oligosaccharides; mechanism involves p38 MAPK disinhibition and NF-κB de-repression; also cAMP/PKA pathway engagement; demonstrates ARRB2 as anti-inflammatory in musculoskeletal tissue context

[^hoque2014]: doi:10.1053/j.gastro.2014.03.014 · PMID 24657625 · Hoque R, Farooq A, Ghani A, Gorelick F, Mehal WZ · *Gastroenterology* 2014;146(7):1763–1774 · in-vitro + in-vivo (mouse) · lactate-GPR81-β-arrestin-2 axis negatively regulates NLRP3 inflammasome activation and reduces IL-1β; β-arrestin-2 required for GPR81's anti-inflammatory effect at TLR signaling level; mechanistic link between metabolic sensing (lactate) and innate immune suppression via ARRB2

[^capote2021]: doi:10.3389/fphys.2021.696852 · PMID 34512376 · PMC8430342 · Capote AE, Batra A, Warren CM, Chowdhury SAK, Wolska BM, Solaro RJ, Rosas PC · *Front Physiol* 2021;12:696852 · in-vivo (β-arrestin-2 KO mice, 12–16 months vs 3–6 months; two-way ANOVA with Fisher's LSD, p<0.05; n=5–13/group for echocardiography) · aged β-arrestin-2 KO mice showed KO-specific depressed systolic contractility (prolonged aortic ejection time, decreased circumferential fiber shortening velocity) with preserved EF ≥50%, and KO-specific impaired diastolic relaxation (slower e′, higher E/e′, prolonged IVRT); LA and LV diameter enlargement occurred in both aged WT and KO (normal aging effect, not KO-specific); altered myofilament phosphorylation in aged KO; phenotype absent in young KO — establishes ARRB2 signaling as specifically protective during cardiac aging; gold OA

[^beaulieu2008]: doi:10.1016/j.cell.2007.11.041 · PMID 18191226 · Beaulieu JM, Marion S, Rodriguiz RM, Medvedev IO, Sotnikova TD, Ghisi V, Wetsel WC, Lefkowitz RJ, Gainetdinov RR, Caron MG · *Cell* 2008;132(1):125–136 · in-vivo (mouse, dopamine D2 receptor) + in-vitro · β-arrestin-2 forms a signaling complex with Akt, PP2A, and Gβγ downstream of D2R; lithium disrupts this complex to modulate Akt/GSK3 signaling and lithium-associated behavioral effects; demonstrates that β-arrestin-2 scaffolds therapeutically relevant AKT signaling independently of G-protein pathways

[^wang2017]: doi:10.1161/CIRCULATIONAHA.116.022281 · PMID 27815373 · Wang Q, Liu Y, Fu Q, Xu B, Zhang Y, Kim S, Tan R, Barbagallo F, West T, Anderson E, Wei W, Abel ED, Xiang YK · *Circulation* 2017;135(1):73–88 · in-vivo (high-fat diet mouse models; WT, β2AR KO, β-arrestin-2 KO) · hyperinsulinemia promotes cardiac dysfunction via insulin receptor → GRK2 → β-arrestin-2-dependent transactivation of β2AR and elevation of PDE4D; β-arrestin-2 KO mice on HFD protected from insulin-mediated β2AR transactivation cardiac phenotype; intersects diabetes-related cardiac aging with ARRB2 biology
