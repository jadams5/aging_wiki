---
type: protein
aliases: [BECN1, ATG6, VPS30, beclin 1, coiled-coil myosin-like BCL2-interacting protein]
uniprot: Q14457
ncbi-gene: 8678
hgnc: 1034
mouse-ortholog: Becn1
ensembl: ENSG00000126581
druggability-tier: 2
caused-by: []
causes: []
key-domains: [BH3, coiled-coil, BARA/ECD, membrane-association]
key-ptms: [Thr119-phosphorylation, Ser90-phosphorylation, Ser93-phosphorylation, Lys402-ubiquitination-K48, Lys437-ubiquitination-K63]
pathways: ["[[autophagy]]", "[[mitophagy]]", "[[apoptosis-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[bcl-2]]", "[[bcl-xl]]", "[[vps34]]", "[[atg14l]]", "[[uvrag]]", "[[dapk1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Pattingre 2005 (Cell), Wei 2008 (Mol Cell), Fernández 2018 (Nature), and Yue 2003 (PNAS) verified against primary PDFs. Liang 1999 (Nature) and Zalckvar 2009 (Autophagy) are not_oa — claims derived from these sources remain unverified (tagged below). UniProt canonical identity fields (Q14457 accession, residue boundaries 108–127, NCBI Gene 8678, HGNC 1034, Ensembl ENSG00000126581) not independently re-checked against databases in this pass."
---


# Beclin-1 (BECN1)

The master scaffold of autophagy initiation — a 450 aa protein that nucleates the Class III PI3-kinase (PI3KC3) complex at the phagophore assembly site, generating the phosphatidylinositol 3-phosphate (PI3P) lipid signal required to recruit downstream autophagy machinery. Its BH3 domain is sequestered by [[bcl-2]] and [[bcl-xl]] during nutrient sufficiency; cellular stress releases Beclin-1 via BCL-2 phosphorylation or competitive displacement, coupling apoptotic signalling to the autophagy on/off switch.

## Identity

- **UniProt:** Q14457 (BECN1_HUMAN)
- **NCBI Gene:** 8678
- **HGNC symbol:** BECN1 (HGNC:1034)
- **Ensembl:** ENSG00000126581
- **Mouse ortholog:** Becn1 (one-to-one ortholog; highly conserved)
- **Yeast ortholog:** Atg6 / Vps30 (functional ortholog; same PI3KC3 scaffold role)
- **Length:** 450 amino acids; ~51.9 kDa
- **Chromosomal locus:** 17q21 (monoallelic deletion frequent in breast and ovarian cancer)

## Domain structure

| Domain | Residues (approx.) | Function |
|---|---|---|
| BH3 domain | 108–127 | BCL-2 / BCL-xL binding; mouse mutation F121A (= human F123A) decreases interaction |
| Coiled-coil domain (CCD) | 142–270 | Homodimerization; ATG14L or UVRAG docking |
| BARA / ECD | 245–450 | β-α-repeated autophagy-specific domain; membrane curvature sensing; Rubicon interaction |
| Membrane-association region | 425–450 | Required for membrane localization |

The BH3 domain (UniProt residues 108–127; exact boundaries not independently re-verified against UniProt in this pass) binds the hydrophobic groove of [[bcl-2]] and [[bcl-xl]], positioning Beclin-1 as a molecular bridge between the apoptotic and autophagic machineries [^pattingre2005]. Note: Pattingre 2005 characterises the Bcl-2-binding domain as amino acids 88–150 and uses F123A (human numbering) as the binding-deficient mutant; Fernández 2018 uses the mouse equivalent F121A.

## PI3KC3 complex composition

Beclin-1 is the non-catalytic scaffold subunit of two functionally distinct PI3KC3 complexes:

| Subunit | Gene | Role | Present in |
|---|---|---|---|
| Beclin-1 | BECN1 | Scaffold; regulatory | Complex I + II |
| VPS34 | PIK3C3 | Class III PI3-kinase (catalytic) | Complex I + II |
| VPS15 | PIK3R4 | Regulatory/adaptor kinase | Complex I + II |
| ATG14L | ATG14 | ER targeting; phagophore initiation | Complex I (autophagy) |
| UVRAG | UVRAG | Late-endosome/lysosome maturation | Complex II (endosomal) |
| Rubicon | RUBCN | Inhibitory; restricts endosomal complex | Complex II (inhibitory branch) |

Complex I (Beclin-1/VPS34/VPS15/ATG14L) localises to the omegasome/ER-associated phagophore assembly site and generates PI3P to recruit WIPI2, DFCP1, and downstream ATG machinery. Complex II (Beclin-1/VPS34/VPS15/UVRAG) acts at late endosomes and lysosomes to facilitate membrane trafficking and autophagosome-lysosome fusion.

## BCL-2 / BCL-xL inhibition mechanism

During nutrient sufficiency, [[bcl-2]] (ER-localised pool) and [[bcl-xl]] hold Beclin-1 in an inactive heterodimer via the BH3-groove interaction, suppressing VPS34 kinase activity and blocking autophagy initiation [^pattingre2005].

Two principal mechanisms release Beclin-1 under stress:

1. **JNK1-mediated BCL-2 phosphorylation (starvation):** JNK1 (not JNK2) phosphorylates BCL-2 at three residues in the nonstructured loop (Thr69, Ser70, Ser87) during amino-acid withdrawal, disrupting the BCL-2–Beclin-1 heterodimer and liberating free Beclin-1 to engage VPS34 [^wei2008]. The relevant target is the ER-localised pool of BCL-2, not the mitochondrial pool. Evidence is from cell lines (HeLa, MCF7.beclin1) and jnk1−/− / jnk2−/− MEFs; no intact-mouse in vivo data in this paper. #gap/needs-human-replication

2. **DAPK-mediated Beclin-1 phosphorylation:** Death-associated protein kinase (DAPK1) phosphorylates Beclin-1 at **Thr119** within the BH3 domain, directly reducing the affinity of Beclin-1 for BCL-2 and BCL-xL and promoting autophagy [^zalckvar2009]. This is a cell-intrinsic kinase mechanism distinct from BCL-2 modification. #gap/no-fulltext-access — Zalckvar 2009 (10.4161/auto.5.5.8625) is closed-access; the Thr119 residue assignment and mechanistic details cannot be verified against the PDF.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | BH3-groove interaction and JNK/DAPK regulation demonstrated in human cell lines |
| Phenotype conserved in humans? | partial | Autophagy induction under starvation is conserved; age-related Beclin-1 decline is mouse data |
| Replicated in humans? | no | Lifespan/healthspan effects from Beclin-1 manipulation not yet in human trials |

## Regulation summary

- **BCL-2 / BCL-xL:** inhibitory sequestration via BH3-groove binding (see above)
- **DAPK1 → Thr119 phospho:** promotes release from BCL-2/BCL-xL [^zalckvar2009]
- **JNK1 → BCL-2 multi-site phospho:** stress-induced release of Beclin-1 [^wei2008]
- **mTORC1:** indirectly represses autophagy; mTORC1 phosphorylates ULK1/ATG13 (see [[ulk1]]) — Beclin-1 complex activity is downstream of ULK1 activation
- **AMPK:** promotes autophagy; activates ULK1 and may directly phosphorylate Beclin-1 at Ser90/Ser93 (UniProt evidence; primary source verification needed) #gap/unsourced
- **Ubiquitination:** Lys402 (K48-linked, proteasomal degradation) and Lys437 (K63-linked, signalling) noted in UniProt; E3 ligases include TRIM5, TRIM16, TRIM17, TRIM21, TRIM50 #gap/unsourced
- **Caspase cleavage:** Caspase-3 and Caspase-8 cleave Beclin-1 near Asp133/Asp149, generating a C-terminal fragment (Beclin-1-C, ~35/37 kDa) that localises to mitochondria and may promote apoptosis — a negative-feedback mechanism from apoptosis into autophagy suppression

## Discovery

Beclin-1 was identified by Liang et al. (1999) via yeast two-hybrid screening for BCL-2 interactors [^liang1999]. The paper demonstrated: (1) Beclin-1 contains a BH3 domain that binds BCL-2; (2) forced Beclin-1 expression induces autophagy in MCF7 breast carcinoma cells; (3) MCF7 cells (which lack endogenous beclin-1 due to 17q21 hemizygous deletion) show reduced autophagy and enhanced tumorigenesis; (4) Beclin-1 suppresses MCF7 xenograft growth in nude mice. This established Beclin-1 simultaneously as an autophagy inducer and candidate tumor suppressor — roles mediated by the same gene through distinct mechanisms. #gap/no-fulltext-access — Liang 1999 (10.1038/45257) is closed-access; claims from this paper cannot be verified against the PDF.

## KO and transgenic phenotypes

- **Becn1−/− (homozygous KO):** Embryonic lethal at E7.5; developmental arrest at gastrulation [^yue2003]. Demonstrates that autophagy is essential for early embryogenesis.
- **Becn1+/− (heterozygous):** Viable; haploinsufficient — increased tumour incidence (lymphomas, lung carcinomas, hepatocellular carcinoma), confirming tumor-suppressor function [^yue2003].
- **Beclin-1 F121A knock-in mice (BCL-2-binding-deficient):** The F121A point mutation in the BH3 domain (mouse residue; human equivalent is F123A) decreases — but does not abolish — BCL-2/BCL-xL binding. Homozygous F121A (Becn1^F121A/F121A) mice are viable and fertile, with constitutively increased basal autophagy across multiple tissues. Both male and female F121A knock-in mice show a statistically significant median lifespan extension vs wild-type littermates on a pure C57BL/6J background (backcrossed >12 generations): combined WT median = 26 months (n=68), KI median = 29 months (n=102), p<0.0001 log-rank (Mantel-Cox); females WT = 27 mo vs KI = 30 mo, p=0.0004; males WT = 25 mo vs KI = 28 mo, p=0.0004 [^fernandez2018]. Maximal lifespan also increased (WT max = 36 mo; KI max = 39 mo). Delayed age-related renal and cardiac pathological changes (fibrosis, nuclear DNA damage) and reduced spontaneous tumorigenesis (non-lymphoid malignancies, chi-square p=0.024) were also observed in 20-month-old KI mice.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | BCL-2/Beclin-1 BH3 interaction conserved; F121A equivalent not tested in humans |
| Phenotype conserved in humans? | unknown | No Beclin-1 F121A human equivalent; no clinical cohort data yet |
| Replicated in humans? | no | Mouse-only lifespan data; #gap/needs-human-replication |

## Role in aging

Beclin-1 protein levels decline with age in the mouse brain and other tissues — a pattern consistent with the broader age-related decline in autophagic flux that contributes to the [[disabled-macroautophagy]] hallmark. #gap/unsourced — the specific Beclin-1 age-decline data is not from Fernández 2018 (which did not report age-related Beclin-1 protein level changes); primary source for this claim needs to be identified. The causal role of reduced autophagic tone in aging is supported by the F121A mouse data: constitutively increased basal autophagy via Beclin-1/BCL-2 decoupling extends lifespan without apparent toxicity [^fernandez2018]. #gap/needs-human-replication

The convergence of Beclin-1 on the autophagy/apoptosis decision point is aging-relevant because:
- Reduced Beclin-1 → less autophagy → impaired proteostasis → [[loss-of-proteostasis]] hallmark
- Chronic BCL-2 sequestration of Beclin-1 in aged tissues → autophagic insufficiency despite normal BECN1 mRNA
- Caspase-mediated Beclin-1 cleavage in apoptotic/stressed cells may inactivate autophagy precisely when proteostatic rescue is most needed

Beclin-1 is listed in GenAge models (gene manipulations in model organisms affecting lifespan). #gap/needs-canonical-id — GenAge entry ID for BECN1 could not be confirmed via API during this seeding pass; manual verification needed.

## Pathway membership

- [[autophagy]] — core scaffold of the PI3KC3 initiation complex
- [[mitophagy]] — PI3P generation also required for mitophagy phagophore formation
- [[apoptosis-pathway]] — BH3 domain engages BCL-2/BCL-xL; caspase cleavage generates pro-apoptotic C-terminal fragment
- [[bcl-2-family-signaling]] — competing BH3-groove occupancy with BH3-only proteins

## Key interactors

- [[bcl-2]] — inhibitory; ER-localised pool sequesters Beclin-1 BH3 domain
- [[bcl-xl]] — inhibitory; analogous to BCL-2, cytoplasmic and mitochondrial pools
- [[vps34]] (PIK3C3) — catalytic partner; Beclin-1 activates VPS34 lipid kinase activity
- [[atg14l]] — Complex I-specific; directs complex to phagophore assembly site
- [[uvrag]] — Complex II-specific; directs complex to late endosomes
- [[dapk1]] — phosphorylates Thr119 → releases from BCL-2/BCL-xL
- [[ulk1]] — upstream activator of the autophagy cascade; ULK1 phosphorylates Beclin-1 and ATG14L

## Limitations and gaps

- **GenAge entry ID unconfirmed** — GenAge search returned no BECN1 entry during this seeding pass; may not be in GenAge-human (evidence is model-organism). Tag: #gap/needs-canonical-id
- **F121A lifespan replication** — the ~12% median lifespan extension (26 → 29 months combined) from Fernández 2018 is a single study in one mouse strain (#gap/needs-replication) with no independent confirmation yet
- **Human Beclin-1 age-decline data** — the claim that Beclin-1 protein declines with age in mouse brain/tissues is not sourced to Fernández 2018; primary source needs identification (#gap/unsourced). Quantitative data in human tissues is sparse #gap/needs-human-replication
- **Liang 1999 claims unverified** — paper is closed-access (not_oa); BH3 domain residue boundaries and xenograft data cannot be confirmed from PDF #gap/no-fulltext-access
- **Zalckvar 2009 claims unverified** — paper is closed-access (not_oa); DAPK1 → Thr119 phosphorylation mechanism cannot be confirmed from PDF #gap/no-fulltext-access
- **AMPK direct phosphorylation sites** — Ser90/Ser93 listed in UniProt but primary experimental source not confirmed in this pass #gap/unsourced
- **Beclin-1 C-fragment pro-apoptotic function** — caspase-cleavage generating the mitochondrion-targeted fragment is noted in UniProt; functional significance in vivo is not well established #gap/no-mechanism
- **VPS34 kinase activation mechanism** — exactly how Beclin-1 allosterically stimulates VPS34 remains partially resolved; recent cryo-EM structures exist but are not cited here #gap/unsourced

## Footnotes

[^liang1999]: doi:10.1038/45257 · in-vitro + in-vivo (MCF7 xenograft, nude mouse) · n not specified for xenograft arms · model: MCF7 human breast carcinoma; original BECN1 cloning + autophagy induction + tumour suppression

[^pattingre2005]: doi:10.1016/j.cell.2005.07.002 · in-vitro (MCF7, NIH3T3) + in-vivo (mouse heart, viral infection) · n not specified per figure · model: multiple cell lines + transgenic mice; BCL-2 overexpression inhibits Beclin-1-dependent autophagy; ER-BCL-2 required for inhibition (mitochondria-targeted BCL-2 does not suppress autophagy)

[^wei2008]: doi:10.1016/j.molcel.2008.06.001 · in-vitro (HeLa, MCF7.beclin1, MEFs including jnk1−/− and jnk2−/− MEFs, WT Bcl-2 MEFs and AAA Bcl-2 MEFs) · n not specified · model: cell lines + jnk1/2-KO MEFs; JNK1 (not JNK2) phosphorylates BCL-2 at Thr69/Ser70/Ser87 in the nonstructured loop → Bcl-2 dissociates from Beclin-1 → starvation-induced autophagy; ER-localised pool of Bcl-2 (not mitochondrial) is the relevant target

[^zalckvar2009]: doi:10.4161/auto.5.5.8625 · in-vitro (HeLa, HEK293T) · n not specified · model: human cell lines; DAPK1 phosphorylates Beclin-1 Thr119 in BH3 domain → reduces BCL-2/BCL-xL affinity → autophagy

[^yue2003]: doi:10.1073/pnas.2436255100 · in-vivo (mouse KO, Becn1−/−) · n not specified · model: C57BL/6 × 129 hybrid; Becn1−/− embryonic lethal E7.5; Becn1+/− viable with increased tumour incidence; haploinsufficient tumour suppressor

[^fernandez2018]: doi:10.1038/s41586-018-0162-7 · in-vivo (mouse knock-in, Becn1^F121A/F121A) · n=68 WT + 102 KI (all); females n=31 WT + 43 KI; males n=37 WT + 59 KI · p<0.0001 log-rank (combined); p=0.0004 females; p=0.0004 males · model: pure C57BL/6J (>12 backcross generations); median lifespan WT=26 mo, KI=29 mo (combined); delayed renal and cardiac aging; reduced non-lymphoid spontaneous tumors
