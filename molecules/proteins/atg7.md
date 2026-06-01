---
type: protein
aliases: [ATG7, autophagy related 7, APG7, GSA7]
uniprot: O95352
ncbi-gene: 10533
hgnc: 16935
mouse-ortholog: Atg7
ensembl: ENSG00000197548
druggability-tier: 2
caused-by: []
causes: []
key-domains: [N-terminal-domain, adenylation-domain, catalytic-cysteine, homodimerization]
key-ptms: [Cys572-thioester, Lys45-ubiquitination]
pathways: ["[[autophagy]]", "[[mitophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
known-interactors: ["[[atg10]]", "[[atg3]]", "[[atg12]]", "[[lc3]]", "[[beclin-1]]", "[[ulk1]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hara 2006, Komatsu 2006, Pyo 2013, Tanida 1999, Komatsu 2005, Masiero 2009 verified against local PDFs; Noda 2011 closed-access (not_oa); Mizushima 2011 review verified against downloaded PDF (abstract + key claims); UniProt O95352 identity fields (protein length 703 aa, Cys572, SCAR31 variants) not independently re-queried against UniProt on this pass — recommend re-check on next lint"
---


# ATG7 — autophagy E1-like activating enzyme

The master E1-like enzyme of the autophagy conjugation machinery. ATG7 activates substrates for **both** ubiquitin-like conjugation cascades required for autophagosome biogenesis: (1) the ATG12–ATG5 system (with ATG10 as E2); and (2) the ATG8/LC3–phosphatidylethanolamine (PE) lipidation system (with ATG3 as E2). Genetic ablation of ATG7 simultaneously blocks both systems, making it the cleanest single-gene tool for eliminating canonical macroautophagy. Constitutive neuron-specific Atg7 knockout in mice causes lethal neurodegeneration, with all nestin-Cre conditional mutants dying within 28 weeks of birth, establishing that basal autophagy flux — not just induced autophagy — is essential for post-mitotic cell survival [^komatsu2006].

## Identity

| Field | Value |
|---|---|
| UniProt | O95352 (ATG7_HUMAN) |
| NCBI Gene | 10533 |
| HGNC | 16935 |
| Gene symbol | ATG7 |
| Mouse ortholog | Atg7 (one-to-one; functionally equivalent) |
| Protein length | 703 amino acids (UniProt O95352) |
| Yeast functional ortholog | Apg7p / Cvt2p (*S. cerevisiae*) |

**Naming note:** No `pathways/atg7.md` exists; this page (`molecules/proteins/atg7.md`) is the canonical `[[atg7]]` resolution. The autophagy pathway page is [[autophagy]].

## Domain structure

ATG7 is structurally related to the MoeB/ThiF family of E1-like activating enzymes, consistent with its role activating ubiquitin-like proteins.

- **N-terminal domain (NTD, ~1–300):** Contains the homodimerization interface and the critical FAP motif (residues 15–17). Homodimerization of the NTD is required for both conjugation reactions — the NTD of one ATG7 monomer interacts with the C-terminal domain of ATG3 (E2 for LC3 system) in a trans arrangement. Loss of the FAP motif abolishes both ATG12–ATG5 and ATG8–PE conjugate formation [^noda2011].
- **C-terminal adenylation/catalytic domain (~300–703):** Contains the ThiF/MoeB homology region responsible for ATP-dependent adenylation of the substrate's C-terminal glycine. Hosts the active-site **Cys572**, which forms the covalent thioester intermediate. Cys572→Ala mutation completely abolishes LC3-I lipidation and ATG12 activation [^uniprot-o95352].

## Reaction mechanism

ATG7 operates via an ATP-driven, two-step E1 mechanism analogous to ubiquitin activation by UBA1:

1. **Adenylation:** ATG7 binds ATP and the substrate (ATG12 or an ATG8 paralog: LC3A/B/C, GABARAP, GABARAPL1/2). The substrate's C-terminal glycine is adenylated (substrate~AMP), releasing pyrophosphate.
2. **Thioester formation:** The adenylate reacts with **Cys572** of ATG7, forming a high-energy substrate~ATG7 thioester intermediate and releasing AMP.
3. **Trans-thiolation (E2 transfer):**
   - For the ATG12 system: ATG12~ATG7 thioester → transfer to **ATG10** (E2) → final isopeptide bond to Lys130 of ATG5, forming the stable ATG12–ATG5 conjugate (which then associates with ATG16L1 to make the ~800 kDa E3-like complex).
   - For the ATG8/LC3 system: LC3~ATG7 thioester → transfer to **ATG3** (E2) → final amide bond to phosphatidylethanolamine on the growing phagophore membrane, generating LC3-II.

Both reactions are **obligatorily dependent on ATG7**: no alternative E1 enzyme for these substrates has been identified in mammals.

## Discovery

Yeast Apg7p (later renamed Atg7p) was identified in 1999 by Tanida et al. as an essential autophagy gene with E1-like activating enzyme activity toward Apg12p (ATG12) [^tanida1999]. The human ATG7 ortholog was subsequently characterized. The first mammalian genetic null was reported by Komatsu et al. in 2005 using liver- and whole-body Atg7-conditional knockout mice [^komatsu2005].

## Knockout phenotypes

### Whole-body Atg7 knockout (constitutive)

Mice bearing germline deletion of Atg7 die within the first day of birth (neonatal lethal), mirroring the phenotype of mice lacking ATG5 or ATG3 [^komatsu2005]. Neonatal lethality is attributed to the failure of amino-acid mobilization from protein degradation during the nutrient-scarce perinatal starvation period, when autophagy is transiently massively upregulated to supply substrates for gluconeogenesis and energy production.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (SCAR31 disease variants; see below) |
| Replicated in humans? | partial — SCAR31 loss-of-function mutations |

### Neuron-specific Atg7 knockout (Nestin-Cre)

Two independent 2006 Nature papers published simultaneously established the canonical link between basal autophagy and neuronal homeostasis. **Both used nestin-Cre** to drive neural-cell-specific deletion, but targeted different ATG genes:

- **Komatsu et al. 2006** (Nestin-Cre × Atg7^flox/flox): mice were viable at birth but their survival diminished markedly by four weeks of age; **all Atg7^flox/flox; nestin-Cre mice were dead within 28 weeks of birth** (n=26 mutant, n=41 control; Kaplan-Meier, P<0.01). Mice showed behavioural defects including abnormal limb-clasping reflexes and reduced coordinated movement beginning at P14–P21. Histology revealed massive neuronal loss in cerebral and cerebellar cortices. **Ubiquitin-positive inclusion bodies** accumulated in neurons of the cerebral cortex, cerebellum (Purkinje cells), hippocampus, hypothalamus, amygdala, and pontine nuclei; inclusions increased in size and number with ageing. Proteasome function was unaffected, confirming that inclusion formation was a direct consequence of autophagy blockade [^komatsu2006].

- **Hara et al. 2006** (Nestin-Cre × Atg5^flox/flox): parallel paper in the same Nature issue using the same Cre driver but targeting **Atg5**, not Atg7. Mice developed progressive motor deficits appearing ~3 weeks postnatally; some died after three weeks of age. Brains showed accumulation of ubiquitin-positive inclusion bodies and loss of Purkinje cells and pyramidal neurons. This paper is cited here as the ATG5-based parallel evidence; the Atg7-specific neuronal data is from Komatsu 2006 [^hara2006].

Together these two papers are the primary evidence that **constitutive basal autophagy is non-negotiable for post-mitotic neuron survival** and that p62/ubiquitin inclusions are a direct consequence of autophagy blockade, not a cause of neurodegeneration.

#gap/needs-human-replication — Human equivalents of these conditional knockout phenotypes are partly modelled by SCAR31 hypomorphic mutations (see Disease section), but complete neuronal ATG7 deficiency has not been studied in humans.

### Skeletal-muscle-specific Atg7 knockout

Masiero et al. 2009 generated muscle-specific Atg7-null mice (MLC1f-Cre × Atg7^flox/flox, using a myosin light chain 1 fast promoter-driven Cre) and reported **profound muscle atrophy with age-dependent force deficits**: cross-sectional area of myofibers was reduced by ~40% in both females and males (n=5/group), with a reduction in absolute and specific force. Accumulation of dysfunctional mitochondria, sarcoplasmic reticulum distension, and aberrant concentric membranous structures were documented by electron microscopy. Autophagy blockade worsened denervation- and fasting-induced atrophy, demonstrating that autophagy is required for muscle quality control under both basal and stressed conditions. This establishes ATG7-dependent autophagy as a protector against [[sarcopenia]]-like changes in mice. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ATG7 expression declines with age in human skeletal muscle |
| Phenotype conserved in humans? | partial — ATG7 decline correlates with muscle fiber atrophy in aging humans (#gap/needs-replication for causal link) |
| Replicated in humans? | no — interventional KO data are mouse-only |

## Disease associations

**Spinocerebellar Ataxia Autosomal Recessive 31 (SCAR31):** Missense variants in ATG7 (P234T, G511D, R576H, V588M, H624Y) cause a rare recessive neurodevelopmental/neurodegenerative syndrome characterized by developmental delay, hypotonia, cerebellar ataxia, tremor, and dysarthria [^uniprot-o95352]. All characterized variants reduce LC3-I lipidation to LC3-II, confirming that autophagic flux impairment is the pathogenic mechanism. SCAR31 is the only Mendelian disease directly attributable to ATG7 dysfunction in humans, providing partial human genetic validation of the mouse neuronal KO phenotype.

## Aging context

### ATG7 expression declines with age

ATG7 protein levels decrease in aged tissues in rodents and appear to decline in aged human skeletal muscle and liver, consistent with the broader pattern of autophagy decline as a feature of aging [^mizushima2011]. This decline has been proposed to contribute to the accumulation of damaged organelles and aggregated proteins characteristic of the [[loss-of-proteostasis]] hallmark. #gap/needs-replication — decline magnitude and tissue specificity in humans requires larger studies.

### Autophagy induction extends lifespan: the ATG5 analogy

Pyo et al. 2013 demonstrated that **systemic overexpression of ATG5** in mice activates autophagy and extends median lifespan by ~17.2% with improved metabolic parameters and lean physiology [^pyo2013]. ATG5 overexpression works by amplifying the ATG12–ATG5–ATG16L1 E3-like complex — the same downstream conjugate whose formation depends on ATG7 as the obligate E1 enzyme. By direct biochemical logic, ATG7 activity is a limiting step upstream of this lifespan-extending node.

Whether ATG7 overexpression per se would phenocopy or augment the ATG5 lifespan extension is untested in mammals. #gap/needs-replication #gap/needs-human-replication

### Pro-longevity interventions modulate ATG7

Multiple canonical longevity interventions — caloric restriction, [[ulk1]]-activating [[ampk]] agonists (e.g., AICAR, metformin), and mTORC1 inhibition by rapamycin — converge on increasing autophagic flux, which requires intact ATG7 activity. ATG7 conditional knockout in the relevant tissues largely abolishes the autophagy component of these interventions' benefits in mouse models. This positions ATG7 not as a druggable target per se (its loss is harmful) but as a **biomarker of autophagic capacity** and a mechanistic checkpoint for interventions aiming to induce autophagy.

## Pathway membership and cross-references

- [[autophagy]] — ATG7 is an essential enzymatic node in the autophagosome formation machinery; see that page for the full initiation → elongation → closure → fusion cascade.
- [[mitophagy]] — ATG7-dependent LC3-II generation is required for LC3-mediated mitophagy receptor recognition (BNIP3L/NIX, [[bnip3]], [[fundc1]]); also required for the PINK1–Parkin pathway terminus since ubiquitin-decorated cargo must be captured by LC3-II membranes.
- [[disabled-macroautophagy]] — hallmark page; ATG7 loss is the most direct route to complete macroautophagy blockade in experimental models.
- [[loss-of-proteostasis]] — ubiquitin + p62 inclusions accumulate when ATG7 is absent.
- [[ulk1]] — kinase upstream of the phagophore initiation complex; ULK1 is activated by [[ampk]] and inhibited by mTORC1; ATG7 operates downstream of ULK1-initiated phagophore nucleation.
- [[beclin-1]] — PI3KC3/VPS34 complex required for phagophore nucleation; ATG7's conjugation activity is required for subsequent phagophore elongation.
- [[sarcopenia]] — muscle-specific Atg7 KO in mice produces an age-accelerated atrophy phenotype.

## Limitations and knowledge gaps

- `#gap/needs-human-replication` — All tissue-specific KO phenotypes (neurodegeneration, muscle atrophy, cardiac aging) are mouse models. Human SCAR31 is partial validation but uses hypomorphic alleles, not nulls.
- `#gap/needs-replication` — Age-associated ATG7 protein decline in human tissues is documented in small studies; magnitude and causal contribution to aging phenotypes need larger cohort data.
- `#gap/dose-response-unclear` — Whether partial increases in ATG7 activity (versus full deletion) can be achieved pharmacologically and whether such partial gains would extend lifespan in mammals is entirely untested.
- `#gap/no-mechanism` — The regulatory mechanism controlling ATG7 protein levels in aging tissues is unknown; candidate regulators include TRIM32 (Lys45 ubiquitination of ATG7) [^uniprot-o95352] and transcriptional downregulation, but a unifying model is absent.
- ATG7's cardiac aging role (cardiomyocyte-specific KO → accelerated cardiac dysfunction) is commonly cited in reviews but the primary citation is not confirmed in this page's footnotes; verification recommended before adding a cardiac section.

## Footnotes

[^tanida1999]: [[studies/tanida-1999-apg7p-cvt2p-autophagy]] · n=N/A · in-vitro + in-vivo (yeast biochemistry) · identified Apg7p/Cvt2p as E1-like activating enzyme for Apg12p; active-site Cys507 in yeast · model: *S. cerevisiae* Apg7p/Cvt2p · doi:10.1091/mbc.10.5.1367 · cited_by: 398 · locally: 

[^komatsu2005]: [[studies/komatsu-2005-atg7-ko-neonatal-lethal]] · n=19 (Atg7^-/- neonates, caesarean delivery survival study) · in-vivo (mouse, Atg7 conditional germline KO via Zp3-Cre, plus liver-conditional via Mx1-Cre) · Atg7^-/- mice died within 1 day of birth; liver-specific KO caused hepatomegaly and ubiquitin-positive aggregates · model: Atg7-deficient Mus musculus · doi:10.1083/jcb.200412022 · cited_by: 2301 · locally: 

[^hara2006]: [[studies/hara-2006-neuronal-atg5-ko-neurodegeneration]] · n=N/A · in-vivo (mouse, Nestin-Cre × Atg5^flox/flox) · **NOTE: this paper uses Atg5, not Atg7** — cited as the parallel ATG5-based evidence published simultaneously in the same Nature issue · doi:10.1038/nature04724 · cited_by: 3796 · locally: 

[^komatsu2006]: [[studies/komatsu-2006-neuronal-atg7-ko-p62]] · n=26 mutant / 41 control · in-vivo (mouse, Nestin-Cre × Atg7^flox/flox) · all mutants dead within 28 weeks; ubiquitin-positive inclusions in neurons, P<0.01 · model: neuron-specific Atg7-null mice · doi:10.1038/nature04723 · cited_by: 3439 · locally: 

[^masiero2009]: [[studies/masiero-2009-muscle-atg7-ko-atrophy]] · n=5/group · in-vivo (mouse, MLC1f-Cre × Atg7^flox/flox; myosin light chain 1 fast promoter Cre) · ~40% reduction in myofiber CSA; force deficits in both sexes; p<0.001 · model: muscle-specific Atg7-null mice · doi:10.1016/j.cmet.2009.10.008 · cited_by: 1242 · locally: 

[^pyo2013]: [[studies/pyo-2013-atg5-overexpression-lifespan]] · n=70 WT / 65 Atg5 Tg (combined sexes, line 25); replicated in 3 additional lines · in-vivo (mouse, pCAGGS-Atg5 ubiquitous OE) · median lifespan extended 17.2% (119 vs ~102 days median; χ²=17.32, P<0.001, log-rank) · model: CAG-Atg5 transgenic Mus musculus · doi:10.1038/ncomms3300 · cited_by: 689 · locally: 

[^mizushima2011]: [[studies/mizushima-2011-autophagy-review]] · review · in-vitro + in-vivo · model: multi-organism · doi:10.1016/j.cell.2011.10.026 · cited_by: 6154 · locally: 

[^noda2011]: doi:10.1038/nsmb.2067 · in-vitro (structural/biochemical) · characterization of ATG7 NTD FAP motif essentiality · model: human/yeast ATG7 recombinant protein · #gap/needs-replication · #gap/no-fulltext-access (status: not_oa per a local paper archive; claims from this source unverified against full PDF)

[^uniprot-o95352]: UniProt O95352 (ATG7_HUMAN), accessed 2026-05-04 — curated Swiss-Prot entry; Cys572 active site, SCAR31 disease variants, TRIM32/Lys45 ubiquitination regulation
