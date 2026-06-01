---
type: protein
aliases: [FUN14 domain containing 1, FUN14 domain-containing protein 1, FUNDC1]
uniprot: Q8IVP5
ncbi-gene: 139341
hgnc: 28746
genage-id: null
mouse-ortholog: Fundc1
ensembl: ENSG00000069509
druggability-tier: 4  # no SM tractability features (Open Targets, FUNDC1)
caused-by: []
causes: []
key-domains: [FUN14, LIR-motif, transmembrane-x3]
key-ptms: [Tyr18-phosphorylation, Ser13-phosphorylation, Ser17-phosphorylation]
pathways: ["[[mitophagy]]", "[[autophagy]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
complex-subunits: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Wu 2014 EMBO Rep (10.1002/embr.201438501), Kuang 2016 (10.1080/15548627.2016.1238552), Wu 2014 Autophagy (10.4161/auto.29568), Wu 2016 EMBO J (10.15252/embj.201593102), Lampert 2019 (10.1080/15548627.2019.1580095) verified against primary-source PDFs. Liu 2012 (10.1038/ncb2422) and Chen 2014 Mol Cell (10.1016/j.molcel.2014.02.034) are closed-access (not_oa) — claims attributed to these two papers not independently verified; see #gap/no-fulltext-access tags. Wu 2016 Autophagy (10.1080/15548627.2016.1193656) download is corrupted (wrong document served); claims covered only by that source also unverified — see BUG-4 in a local paper archive/FEATURE_REQUESTS.md. Wu 2017 Circulation (10.1161/CIRCULATIONAHA.117.030235) download failed (no candidate URLs); claims attributed to that source unverified. UniProt Q8IVP5 identity fields (length, TM count, topology) verified against UniProt REST API."
---


# FUNDC1

FUNDC1 (FUN14 domain containing 1) is a 155-amino-acid integral protein of the mitochondrial outer membrane (OMM) that acts as the principal receptor for hypoxia-induced [[mitophagy]] in mammalian cells. Unlike the [[pink1]]-[[parkin]] pathway, which responds primarily to electrochemical depolarization, FUNDC1 mediates a phosphorylation-regulated, LC3-binding axis that is specifically induced by oxygen deprivation. Under normoxia, phosphorylation at Tyr18 by Src and at Ser13 by CK2 masks the LC3-interacting region (LIR) motif (core sequence Y18-E19-V20-L21) and keeps mitophagy suppressed; Tyr18 phosphorylation is the dominant inhibitory switch, raising the LC3 Kd approximately 4-fold [^kuang2016]. Under hypoxia, these inhibitory phosphorylations are lifted and the kinase [[ulk1]] phosphorylates Ser17, activating LC3 binding and autophagosome recruitment [^wu2014embo]. FUNDC1 also functions as a MAM (mitochondria-associated ER membrane) scaffold regulating mitochondrial fission via DRP1 recruitment [^wu2016emboj], and its loss in cardiomyocytes causes progressive cardiac dysfunction — establishing it as a contributor to [[mitochondrial-dysfunction]] in the aging heart.

## Identity

- **UniProt:** Q8IVP5 (FUNDC1_HUMAN)
- **NCBI Gene:** 139341
- **HGNC:** 28746
- **Mouse ortholog:** Fundc1 (one-to-one)
- **Length:** 155 amino acids (human canonical isoform)
- **Topology:** N-terminal cytosolic tail — three transmembrane segments (TM1–TM3) — short C-terminal intermembrane space (IMS) tail; overall a type III OMM integral protein

## Domain organization

| Region | Residues (approx.) | Function |
|---|---|---|
| N-terminal cytosolic tail | 1–~50 | Contains LIR motif (Tyr18-Glu19-Val20-Leu21); key phosphoregulation site |
| TM1 | ~46–66 | First membrane-spanning helix |
| Loop 1 (IMS) | ~67–78 | Short IMS-facing loop |
| TM2 | ~79–99 | Second membrane-spanning helix |
| Loop 2 (cytosolic) | ~100–116 | Cytosolic loop between TM2 and TM3 |
| TM3 | ~117–137 | Third membrane-spanning helix |
| C-terminal (IMS) | ~138–155 | Short IMS tail; FUN14 domain completion |

The **LIR (LC3-interacting region) motif** at Tyr18-Glu19-Val20-Leu21 (Y18EVL21) is the canonical docking interface for MAP1LC3 (LC3-I/II) and GABARAP family proteins. The four-residue core Y18EVL21 adopts a noncanonical conformation in which Val20 (third LIR residue) inserts into hydrophobic pocket 1 (HP1) of LC3 alongside Tyr18, distinguishing FUNDC1's binding mode from most other LIR-containing proteins [^kuang2016]. This motif is the molecular hub for all phosphoregulatory control described below [^liu2012] [^kuang2016].

## Phosphoregulation of the LIR motif

FUNDC1 mitophagy activity is governed by three phosphorylation events on the N-terminal cytosolic tail — two inhibitory and one activating:

### Inhibitory: Tyr18 phosphorylation by Src

Under normoxia, Src kinase phosphorylates Tyr18 within the core LIR motif [^liu2012]. #gap/no-fulltext-access — Liu 2012 (Nat Cell Biol) is closed-access; Tyr18/Src claims verified functionally via Wu 2014 EMBO Rep (which cites Liu 2012 and replicates the Src/Tyr18/mitophagy relationship). Phospho-Tyr18 introduces electrostatic repulsion between the phosphate group and the carboxyl side chain of LC3 Asp19 (in HP1), drastically weakening LC3 binding. ITC measurements with LC3B showed an unphosphorylated FUNDC1 LIR peptide Kd of 0.40 µM, rising to 1.72 µM upon Tyr18 phosphorylation (approximately 4-fold weaker binding) [^kuang2016]. Hypoxia inactivates Src (mechanism uncertain but includes reduced oxygen-dependent Src activation and possibly PGAM5-mediated counter-signaling), allowing Tyr18 dephosphorylation and LIR exposure. #gap/no-mechanism — precise mechanism by which hypoxia inactivates Src at the OMM is not established.

### Inhibitory: Ser13 phosphorylation by CK2 / dephosphorylation by PGAM5

Under normoxia, casein kinase 2 (CK2) phosphorylates FUNDC1 at Ser13, also inhibiting LC3 binding [^chen2014molcell]. #gap/no-fulltext-access — Chen 2014 Mol Cell is closed-access; CK2/Ser13/PGAM5 claims are consistent with the Wu 2014 Autophagy paper (open access, verified) which independently reports the BCL2L1–PGAM5–FUNDC1 Ser13 axis. PGAM5, a mitochondrially localized serine-threonine phosphatase, dephosphorylates Ser13 upon hypoxic stress, relieving this inhibition [^chen2014molcell]. Structurally, Ser13 is located in a hydrophobic area between LC3 residues Lys49 and Lys51; Kuang 2016 ITC data show Ser13 phosphorylation has only a minor effect on LC3 binding affinity (Kd 0.40 µM → 0.60 µM, versus Tyr18 phosphorylation's 0.40 → 1.72 µM), suggesting Ser13 phosphorylation may exert its inhibitory effect through indirect mechanisms (e.g., altered interaction with mitochondrial fission factors OPA1/DRP1) rather than by directly blocking LC3 docking [^kuang2016]. The BCL2L1 (Bcl-xL) / PGAM5 axis provides an additional layer of control: Bcl-xL physically interacts with and inhibits PGAM5 under normoxia; during hypoxia or mitochondrial stress, the Bcl-xL / PGAM5 interaction is disrupted, freeing PGAM5 to dephosphorylate FUNDC1 [^wu2014auto].

| Condition | Ser13 state | Tyr18 state | LIR accessibility | Mitophagy |
|---|---|---|---|---|
| Normoxia | Phospho (CK2) | Phospho (Src) | Blocked | Off |
| Hypoxia (early) | Dephos (PGAM5) | Dephos (Src↓) | Partially open | Low |
| Hypoxia + ULK1 activation | Dephos | Dephos | Fully open (Ser17-P) | On |

### Activating: Ser17 phosphorylation by ULK1

[[ulk1]] translocates to mitochondria and phosphorylates FUNDC1 at Ser17 under hypoxia or mitochondrial uncoupling (FCCP) — but notably NOT under nutrient starvation, which induces ULK1 puncta formation but does not cause Ser17 phosphorylation [^wu2014embo]. Phospho-Ser17 enhances FUNDC1 binding to LC3 — FUNDC1(S17D) binds endogenous LC3 more strongly than wild-type FUNDC1, while FUNDC1(S17A) cannot bind LC3 and cannot rescue mitophagy in ULK1-null MEFs [^wu2014embo]. The Kuang 2016 structural study focused on the inhibitory phosphorylations (Tyr18 and Ser13) and did not measure the Kd change from Ser17 phosphorylation directly; the Ser17 affinity enhancement is established functionally but lacks a reported ITC-measured Kd [^kuang2016]. This places FUNDC1 downstream of the canonical [[autophagy]] induction cascade (AMPK → ULK1 activation when mTORC1 is suppressed) in addition to the hypoxia-specific Src/PGAM5 axis.

## Hypoxia-induced mitophagy mechanism

Under hypoxia:

1. HIF-1α-independent and -dependent signals reduce mitochondrial membrane potential and increase ROS.
2. Src kinase activity falls; CK2-mediated Ser13 phosphorylation is reversed by PGAM5 (freed from Bcl-xL).
3. Tyr18 and Ser13 of FUNDC1 are dephosphorylated — the LIR motif is now available.
4. [[ulk1]], activated via AMPK or by mTORC1 suppression under energy stress, phosphorylates FUNDC1 Ser17.
5. LC3-II (on nascent autophagosomal membranes) docks the FUNDC1 LIR.
6. Autophagosome engulfs the FUNDC1-labeled mitochondria → fusion with lysosome → mitochondrial degradation.

This receptor-mediated mechanism is mechanistically distinct from the [[pink1]]-[[parkin]] ubiquitin-dependent pathway: FUNDC1 does not require membrane depolarization, does not depend on Parkin, and engages LC3 directly via a short linear motif rather than via ubiquitin-binding receptors [^liu2012]. #gap/needs-replication — Whether FUNDC1 and PINK1/Parkin pathways act redundantly or in complementary contexts in vivo has not been fully resolved in intact aged tissue.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human FUNDC1 has identical LIR motif; Src/CK2/PGAM5/ULK1 all conserved |
| Phenotype conserved in humans? | partial — cardiac FUNDC1 pathway suppressed in human heart failure patients (Wu 2017 Circulation); hypoxia-induced mitophagy via FUNDC1 shown in human cell lines |
| Replicated in humans? | no — no in vivo human aging study has directly measured FUNDC1-mediated mitophagy flux |

## MAM localization and mitochondrial fission

FUNDC1 is enriched at mitochondria-associated ER membranes (MAMs), where it plays a second, LC3-independent role [^wu2016emboj]. Under normoxic baseline conditions, FUNDC1 is held in a complex with calnexin (an ER-resident protein) at MAM contacts. During hypoxia:

- FUNDC1 dissociates from calnexin at the MAM.
- FUNDC1 recruits [[drp1]] (DNM1L) to OMM–MAM contact sites via a direct protein–protein interaction requiring the FUNDC1 cytosolic loop (AA 96–138) [^wu2016emboj].
- DRP1-mediated fission fragments mitochondria into smaller units more efficiently engulfed by autophagosomes [^wu2016emboj] [^wu2016auto].

This coupling of fission and mitophagy at the MAM ensures that mitochondrial fragmentation and selective degradation are coordinated spatially and temporally. FUNDC1 can thus be considered a dual-function organizer: a mitophagy receptor via its LIR and a fission organizer via DRP1 recruitment [^wu2016emboj]. #gap/needs-replication — MAM-localized FUNDC1 fission-organizing function established primarily in HeLa and MEF cells; in vivo aged-tissue or primary cardiomyocyte confirmation limited. Note: Wu 2016 Autophagy (doi:10.1080/15548627.2016.1193656) download is corrupted in a local paper archive (wrong file served; see BUG-4); DRP1 co-immunoprecipitation and calnexin displacement data for that paper cannot be independently confirmed at this time — the Wu 2016 EMBO J paper covers the same biology and was verified. #gap/no-fulltext-access

## Cardiac function and aging context

FUNDC1 is highly expressed in cardiomyocytes. Cardiomyocyte-specific FUNDC1 knockout (KO) mice develop:

- Progressive cardiac dysfunction (reduced ejection fraction, dilated cardiac chambers).
- Elongated, dysfunctional mitochondria (consistent with impaired DRP1-mediated fission at MAMs).
- Impaired Ca²⁺ transfer from ER to mitochondria via the IP₃R2–FUNDC1 interaction at MAMs.
- Exacerbated cardiac injury following ischemia-reperfusion [^wu2017circ].

Mechanistically, Wu et al. 2017 identified a FUNDC1 / IP₃R2 / CREB / Fis1 signaling axis at MAMs that is required for normal mitochondrial dynamics in cardiomyocytes in vivo. Critically, **this axis is suppressed in human heart failure patients** — the study found reduced FUNDC1 protein levels and disrupted MAM contacts in explanted failing human hearts [^wu2017circ]. #gap/needs-replication — The human heart failure observation is from a relatively small patient cohort; causal direction (FUNDC1 loss causes failure vs. failure secondarily reduces FUNDC1) is not established. Note: Wu 2017 Circulation PDF download failed (no candidate URLs resolved from PMC record PMC5716911); quantitative claims from this paper (patient cohort size, specific protein levels, ejection fraction data) cannot be independently verified. #gap/no-fulltext-access

FUNDC1 and [[bnip3l]] (NIX) are both required for mitochondrial network remodeling during cardiac progenitor cell (CPC) differentiation; combined siRNA knockdown of both receptors (but not either alone) impairs mitophagy, causes donut-shaped dysfunctional mitochondria, and reduces oxidative capacity in differentiating CPCs. Critically, CPCs harboring mtDNA mutations (from POLG mutator mice) fail to upregulate FUNDC1 and NIX upon differentiation, disrupting this receptor-mediated mitophagy program [^lampert2019]. The mitophagy in this context is PINK1-PRKN-independent — PRKN was undetectable in CPCs.

Age-related decline in FUNDC1-mediated mitophagy in the heart has been proposed as a contributor to the accumulation of dysfunctional mitochondria that characterizes [[mitochondrial-dysfunction]] in the aging myocardium, though direct longitudinal data in aged humans is lacking. #gap/needs-human-replication

## Comparison with BNIP3 and NIX (BNIP3L)

FUNDC1 occupies an overlapping but distinct functional niche compared to the other major OMM mitophagy receptors:

| Feature | FUNDC1 | [[bnip3]] | NIX (BNIP3L) |
|---|---|---|---|
| Primary inducer | Hypoxia (also FCCP/depolarization) | Hypoxia / ischemia | Hypoxia / developmentally programmed |
| BH3-like domain | Absent | Present (weak BH3) | Present |
| Pro-apoptotic/membrane-permeabilizing activity | No | Yes (channel-forming) | Weak |
| LIR motif | Yes (Tyr18-Glu19-Val20-Leu21; noncanonical conformation) | Yes | Yes |
| Phosphoregulation of LIR | Tri-phospho switch (Src/CK2/ULK1) | Less characterized | Less characterized |
| MAM function | Yes (DRP1 recruitment, Ca²⁺ via IP₃R2) | Minimal | Some |
| Dominant aging tissue | Heart, liver | Heart, skeletal muscle | Erythroid (reticulocyte maturation); heart |

FUNDC1 lacks a BH3-like motif and has no demonstrated membrane-permeabilizing or pro-apoptotic activity, distinguishing it from [[bnip3]] whose channel-forming function contributes to necrotic cell death in cardiac ischemia.

## Pathway membership

- [[mitophagy]] — primary function; hypoxia-induced receptor-mediated arm
- [[autophagy]] — as a downstream effector (autophagosome recruitment via LC3)
- [[pink1-parkin-pathway]] — mechanistically distinct but acts in parallel for mitochondrial quality control

## Key interactors

- [[lc3]] (MAP1LC3A, MAP1LC3B) and GABARAP — direct LIR-mediated interaction; core autophagosome recruitment
- [[ulk1]] — phosphorylates activating Ser17; places FUNDC1 downstream of nutrient/energy sensing
- [[pgam5]] — dephosphorylates inhibitory Ser13; the key phosphatase switching FUNDC1 on under hypoxia
- [[drp1]] (DNM1L) — recruited to MAMs by FUNDC1 for mitochondrial fission during mitophagy
- IP₃R2 (ITPR2) — ER calcium channel that co-localizes with FUNDC1 at MAMs; important for cardiomyocyte Ca²⁺ homeostasis
- GPX4 — reported interaction; implicated in hepatic ferroptosis regulation via FUNDC1 (role under active investigation) #gap/no-mechanism

## Limitations and knowledge gaps

- #gap/needs-human-replication — In vivo FUNDC1-mediated mitophagy flux in human aging tissues (heart, liver, skeletal muscle) has not been quantitatively measured in aged cohorts.
- #gap/needs-replication — The FUNDC1 decline in human heart failure (Wu 2017) is based on a small patient sample; requires independent replication in a powered cohort.
- #gap/no-mechanism — How hypoxia inactivates Src kinase at the OMM surface is not mechanistically established.
- #gap/no-mechanism — FUNDC1–GPX4 interaction and ferroptosis regulation; whether this is direct or indirect is unclear.
- #gap/needs-replication — MAM-DRP1 fission organizing function of FUNDC1 is established primarily in immortalized cell lines; primary cardiomyocyte and in vivo aged-tissue validation is limited.
- #gap/needs-replication — Redundancy between FUNDC1 and BNIP3/NIX pathways under physiological hypoxia in vivo; quantitative contribution of each arm undefined.
- #gap/needs-canonical-id — GenAge ID for FUNDC1 not confirmed; FUNDC1 does not appear to have a current GenAge entry. Tagged for lint pass verification.
- #gap/long-term-unknown — No pharmacological activator of FUNDC1 mitophagy has entered clinical trials; therapeutic potential in aging-related cardiac dysfunction is unexplored in humans.

## Footnotes

[^liu2012]: [[studies/liu-2012-fundc1-mitophagy-receptor]] · in-vitro + in-vivo (HeLa, mouse) · discovery of FUNDC1 as hypoxia-induced mitophagy receptor; LIR Tyr18/Leu21 identified; Src phospho-Tyr18 suppresses LC3 binding under normoxia · doi:10.1038/ncb2422 · not_oa · unverified against full PDF

[^chen2014molcell]: [[studies/chen-2014-pgam5-ck2-fundc1]] · in-vitro (HeLa, MEFs) · regulatory signaling loop: PGAM5 dephosphorylates Ser13 under hypoxia/FCCP; CK2 rephosphorylates Ser13 to suppress mitophagy; BCL2L1 inhibits PGAM5 · doi:10.1016/j.molcel.2014.02.034 · not_oa · unverified against full PDF

[^wu2014embo]: [[studies/wu-2014-ulk1-fundc1-ser17]] · in-vitro (MEFs, HeLa, HEK293) · ULK1 upregulated and translocates to fragmented mitochondria under hypoxia/FCCP; directly phosphorylates FUNDC1 Ser17; FUNDC1(S17D) rescues mitophagy in ULK1-null MEFs; FUNDC1(S17A) cannot bind LC3; SRC and ULK1 have mutually inhibitory effects at mitochondria · doi:10.1002/embr.201438501 · verified 2026-05-04

[^wu2014auto]: [[studies/wu-2014-bcl2l1-pgam5-mitophagy]] · in-vitro (HeLa, MCF7, HepG2, U2OS) · BCL2L1 (not BCL2) suppresses FUNDC1-mediated and hypoxia-induced mitophagy via its BH3 domain; BCL2L1 interacts with PGAM5 and inhibits its phosphatase activity; BCL2L1 knockdown enhances FUNDC1 Ser13 dephosphorylation; pathway BECN1-independent · doi:10.4161/auto.29568 · verified 2026-05-04

[^kuang2016]: [[studies/kuang-2016-fundc1-lir-phosphorylation-structure]] · structural (NMR + ITC, LC3B in complex with FUNDC1 LIR peptide residues 10–26) · FUNDC1 LIR adopts noncanonical conformation: Val20 inserts into HP1 alongside Tyr18; ITC Kd (unphosphorylated) = 0.40 µM; phospho-Tyr18 Kd = 1.72 µM (~4-fold weaker); phospho-Ser13 Kd = 0.60 µM (minor effect); Ser17 phospho affinity change not measured by ITC; Tyr18 phosphorylation is the dominant molecular switch · doi:10.1080/15548627.2016.1238552 · verified 2026-05-04

[^wu2016emboj]: [[studies/wu-2016-fundc1-mam-drp1]] · in-vitro + in-vivo (HeLa, MEFs, mouse) · FUNDC1 accumulates at MAMs under hypoxia; calnexin interaction via cytosolic loop (AA 96–138); dissociates from calnexin during hypoxia; directly recruits DRP1 to MAMs; calnexin KD reduces MAM-associated FUNDC1 and DRP1; DRP1 co-immunoprecipitated with FUNDC1 by GST pulldown · doi:10.15252/embj.201593102 · verified 2026-05-04

[^wu2016auto]: [[studies/wu-2016-fundc1-mam-fission-mitophagy]] · doi:10.1080/15548627.2016.1193656 · download corrupted (wrong document served by archive; see BUG-4 in a local paper archive/FEATURE_REQUESTS.md) · unverified against full PDF #gap/no-fulltext-access

[^wu2017circ]: [[studies/wu-2017-fundc1-ip3r2-cardiac]] · in-vivo (cardiomyocyte-specific KO mouse) + human heart failure tissue · FUNDC1 binds IP₃R2 at MAM; KO causes cardiac dysfunction; FUNDC1/IP₃R2/CREB/Fis1 axis suppressed in failing human hearts · doi:10.1161/CIRCULATIONAHA.117.030235 · download failed (no candidate URLs from PMC5716911) · unverified against full PDF #gap/no-fulltext-access

[^lampert2019]: [[studies/lampert-2019-bnip3l-fundc1-cardiac-progenitors]] · in-vitro (mouse cardiac progenitor cells; also human CPCs, EPCs, MSCs) · BNIP3L/NIX and FUNDC1 jointly required for mitochondrial network remodeling during CPC differentiation; mitophagy via receptor pathway (not PINK1-PRKN); Fundc1 and Bnip3l co-knockdown causes donut-shaped mitochondria and impaired oxidative metabolism; mtDNA mutations disrupt differentiation-activated mitophagy program · doi:10.1080/15548627.2019.1580095 · verified 2026-05-04
