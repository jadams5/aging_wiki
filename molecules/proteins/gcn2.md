---
type: protein
aliases: [EIF2AK4, GCN2 kinase, eIF2-alpha kinase 4, general control non-derepressible 2]
uniprot: Q9P2K8
ncbi-gene: 440275
ensembl: ENSG00000128829
hgnc: 19687
genage-id: null
pathways: ["[[integrated-stress-response]]", "[[mtor]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: null
caused-by: ["[[uncharged-trna-accumulation]]"]
causes: ["[[eif2alpha]]", "[[atf4]]", "[[integrated-stress-response]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — 6 of 7 cited DOIs cross-checked via DOI lookup (Wek 1995, Eyries 2014, Pakos-Zebrucka 2016, Gallinetti 2013, Srivastava 2022, Blagojevic 2022) — titles match cited author/year/topic. Götz 2026 (10.1073/pnas.2518812123) not yet ingested in archive — already documented in body footnote (DOI confirmed via PubMed). Canonical-DB IDs (UniProt Q9P2K8, NCBI 440275, Ensembl ENSG00000128829) not re-checked against canonical databases; HGNC accession still null per #gap/needs-canonical-id."
---

# GCN2 (EIF2AK4)

GCN2 is the sole mammalian kinase dedicated to sensing **amino acid sufficiency**: it detects uncharged (aminoacyl-free) tRNAs that accumulate during amino acid deprivation and phosphorylates [[eif2alpha]] at Ser51, triggering a translational and transcriptional stress program. As one of four [[integrated-stress-response]] (ISR) kinases, GCN2 sits at the junction of [[deregulated-nutrient-sensing]] and [[loss-of-proteostasis]]. In aging biology, GCN2 mediates longevity phenotypes downstream of caloric and amino acid restriction in model organisms; its loss-of-function mutations cause a rare but severe human vascular disease, pulmonary veno-occlusive disease (PVOD).

## Identity

- **UniProt:** Q9P2K8 (E2AK4_HUMAN)
- **Gene symbol:** EIF2AK4 (official HGNC); "GCN2" is the widely-used alias derived from the yeast ortholog *Gcn2*
- **NCBI Gene:** 440275
- **Ensembl:** ENSG00000128829
- **Length:** 1,649 amino acids (canonical isoform)
- **Molecular weight:** ~185 kDa
- **Mouse ortholog:** Eif2ak4 / Gcn2 (high sequence conservation across eukaryotes; one-to-one ortholog)
- **Yeast ortholog:** Saccharomyces cerevisiae Gcn2 (the founding member; mechanism conserved)

## Domain architecture

GCN2 is a modular kinase with four functionally critical regions [^wek1995]:

| Domain | Approximate residues | Function |
|---|---|---|
| N-terminal RWD domain | 1–~200 | Interacts with GCN1/GCN20 co-activators; required for ribosome association |
| Pseudokinase / kinase domain | ~300–900 | Bilobed kinase fold; catalytic residues; autophosphorylation at Thr882 activates the enzyme |
| HisRS-like domain | ~970–1430 | Structural homolog of histidyl-tRNA synthetase; binds uncharged tRNAs; the amino acid sensor |
| C-terminal dimerization / ribosome-binding domain | ~1430–1649 | Required for homodimerization and ribosomal P-stalk association |

The **HisRS-like domain** is the defining feature: it lacks aminoacyl-tRNA synthetase catalytic activity but retains the tRNA-binding fold, allowing GCN2 to sample the pool of uncharged tRNAs during translation without being a synthetase itself [^wek1995].

## Amino acid sensing mechanism

Under amino acid sufficiency, GCN2 is held inactive by an intramolecular autoinhibitory interaction between its kinase and HisRS-like domains.

During amino acid deprivation:

1. Uncharged tRNAs accumulate as aminoacyl-tRNA synthetases run out of substrate.
2. The HisRS-like domain of ribosome-associated GCN2 binds uncharged tRNAs at the ribosomal A-site.
3. This induces a conformational change that relieves autoinhibition and promotes GCN2 dimerization and Thr882 autophosphorylation.
4. Activated GCN2 phosphorylates **eIF2alpha at Ser51** [^wek1995].
5. eIF2alpha-Ser51~P~ inhibits the guanine-nucleotide exchange factor eIF2B, reducing global cap-dependent translation initiation.
6. Paradoxically, a subset of mRNAs bearing upstream open reading frames (uORFs) — most notably **ATF4** — are *preferentially translated* under these conditions.
7. ATF4 transcriptionally activates amino acid biosynthesis and import genes (ASNS, SLC7A11/xCT, asparagine synthetase branch), restoring amino acid balance [^pakos-zebrucka2016].

This pathway constitutes the amino acid arm of the four-kinase **integrated stress response** (ISR), which converges on eIF2alpha-Ser51 phosphorylation regardless of stressor (GCN2: amino acids; PERK: ER stress; HRI: heme deficiency; PKR: dsRNA/viral infection) [^pakos-zebrucka2016].

## Reciprocal relationship with mTORC1

GCN2 and [[mtor]] (mTORC1) function as **reciprocal amino acid sensors** operating in opposite modes:

- **mTORC1 senses amino acid sufficiency** via the Ragulator-Rag GTPase complex and cytoplasmic sensing of leucine (Sestrin2) and arginine (CASTOR1). When amino acids are abundant, mTORC1 is active and drives anabolic programs (protein synthesis, ribosome biogenesis, suppression of autophagy).
- **GCN2 senses amino acid deficiency** via uncharged tRNA accumulation. When amino acids fall, GCN2 is active and suppresses global translation while activating adaptive stress programs.

These two pathways are not merely parallel: GCN2-ATF4 signaling induces **Sestrin2**, which in turn inhibits mTORC1, creating a direct inhibitory link from GCN2 to mTOR [^blagojevic2022]. Conversely, active mTORC1 promotes ribosome loading and translation, which draws down the pool of uncharged tRNAs and may dampen GCN2 activation. The net result is a bistable switch: nutrient sufficiency = mTORC1 on / GCN2 off; nutrient deficiency = mTORC1 off / GCN2 on.

| State | mTORC1 | GCN2 | Net program |
|---|---|---|---|
| Amino acid replete | Active | Inactive | Anabolism, growth |
| Amino acid deprived | Suppressed | Active | Translation arrest, ATF4-driven adaptation |

This reciprocity is pharmacologically relevant: GCN2 inhibition in amino-acid-deprived cancer cells can paradoxically restore mTORC1 activity by reducing Sestrin2. #gap/no-mechanism for the exact feedback stoichiometry in primary human tissues.

## Role in aging biology

### Caloric restriction and dietary amino acid restriction

Caloric restriction (CR) and protein/essential amino acid restriction extend lifespan in diverse organisms including yeast, *C. elegans*, Drosophila, and mice. GCN2 has been proposed as a required transducer of longevity signals downstream of amino acid restriction [^gallinetti2013]:

- In **yeast**, Gcn2 is required for the full lifespan extension under glucose/nitrogen limitation; gcn2 deletion blunts CR longevity.
- In **worms** (*C. elegans*), GCN-2 and the ISR pathway contribute to longevity under dietary restriction conditions, though the DAF-16/FOXO axis is also required.
- In **Drosophila**, GCN2 mediates amino acid sensing and feeding behavior; GCN2 mutant flies show altered longevity responses to amino acid restriction, with some restriction paradigms partially GCN2-dependent [^srivastava2022].

Importantly, the picture in flies is not simply "GCN2 activation = longevity." A 2026 study found that **chronic suppression** (not activation) of the GCN2-ATF4 pathway extends lifespan in flies, while chronic activation is detrimental — suggesting a context- and dose-dependent relationship and possible species divergence [^gotz2026]. #gap/contradictory-evidence between organisms and experimental contexts.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (GCN2-eIF2alpha-ATF4 axis fully conserved) |
| Longevity phenotype conserved in humans? | unknown (no direct human genetic evidence) |
| Replicated in humans? | no #gap/needs-human-replication |

### Methionine restriction

Methionine restriction (MR) extends lifespan and healthspan in rodents and is one of the best-characterized dietary longevity interventions in mammals. GCN2's role in MR longevity is contested:

- GCN2 is activated by methionine deprivation (uncharged methionyl-tRNAs accumulate), and the GCN2-eIF2alpha-ATF4 axis is one proposed transducer of MR benefits.
- However, studies in Drosophila suggest methionine operates through a **GCN2-independent mechanism**, unlike leucine or other essential amino acids [^srivastava2022]. The fly data implies methionine sensing may bypass GCN2 via a distinct pathway (possibly through S-adenosylmethionine or one-carbon metabolism sensing).
- In mice, MR activates ATF4 target genes consistent with GCN2 pathway activation, but genetic proof that GCN2 is required for the full MR lifespan extension in mice has not been cleanly established. #gap/needs-replication

### Intersection with FGF21

FGF21 — a hepatokine induced by protein/amino acid restriction — is another proposed mediator of MR longevity. Studies in bone suggest **FGF21, not GCN2**, drives certain MR phenotypes (e.g., cortical bone remodeling), indicating GCN2 and FGF21 operate as parallel, not serial, effectors of amino acid restriction. #gap/no-mechanism for how GCN2 and FGF21 signals are integrated.

## Disease: Pulmonary Veno-Occlusive Disease (PVOD)

PVOD is a rare, severe form of pulmonary arterial hypertension characterized by obliteration of pulmonary venules and capillaries, leading to progressive right heart failure. It is histologically distinct from more common PAH subtypes.

Biallelic loss-of-function mutations in **EIF2AK4** (GCN2) are the predominant genetic cause of heritable PVOD [^eyries2014]:

- EIF2AK4 mutations found in ~25% of familial PVOD cases; autosomal recessive inheritance.
- Mutations include frameshift, nonsense, and splice-site variants that truncate or destabilize the protein.
- Penetrance is high for biallelic carriers; heterozygous carriers may have subclinical vascular changes.
- Genetically, EIF2AK4-PVOD is distinct from BMPR2-associated PAH, reflecting a different molecular etiology.
- The mechanism linking GCN2 loss to pulmonary vascular occlusion remains incompletely understood, but likely involves aberrant endothelial cell survival/proliferation under metabolic stress. #gap/no-mechanism

Clinical features of EIF2AK4-PVOD:
- Insidious dyspnea on exertion progressing to resting dyspnea
- Poor prognosis; median survival ~1–2 years from diagnosis without lung transplantation
- Unlike BMPR2-PAH, does not respond well to standard PAH vasodilators; lung transplantation is the only definitive treatment
- Diagnosis increasingly confirmed by genetic testing; historically required surgical lung biopsy

| Dimension | Status |
|---|---|
| EIF2AK4 as PVOD cause conserved in humans? | yes (primary human genetic evidence) |
| Mechanism of vascular occlusion? | unknown #gap/no-mechanism |
| Therapeutic options beyond transplant? | preclinical only |

## Pharmacology

### GCN2 inhibitors (preclinical, cancer)

Cancer cells in hypovascular, nutrient-poor tumor microenvironments activate GCN2 as a survival mechanism under amino acid stress. Inhibiting GCN2 in this context is proposed to selectively kill amino-acid-stressed cancer cells.

Several GCN2 inhibitor scaffolds have entered preclinical development:

- **GZD824-derivative compounds** — originally developed as Bcr-Abl inhibitors; later identified to inhibit GCN2 at the ATP-binding site. Activity against GCN2 in cancer cell amino acid stress models has been shown in vitro, but clinical development for GCN2 inhibition specifically has not been reported.
- **IACS-13533** — an MD Anderson-developed GCN2 inhibitor with demonstrated in vivo activity in tumor models; preclinical only as of 2026. #gap/unsourced — specific in vivo efficacy data for IACS-13533 not confirmed against a primary source in this page; verify before citing quantitatively.

No GCN2 inhibitor has entered clinical trials for any indication as of 2026. #gap/long-term-unknown for toxicity profile given GCN2's essential role in systemic amino acid homeostasis, T cell survival, and potentially ISR-mediated cytoprotection.

### GCN2 as an aging target?

Unlike mTOR (where inhibition is pro-longevity) the GCN2 story is pharmacologically ambiguous:

- **Activation** might mimic benefits of amino acid restriction — beneficial in some contexts (yeast, worms, some mouse CR paradigms) but potentially detrimental with chronic activation (fly data above).
- **Inhibition** is under development for cancer; chronic inhibition could theoretically impair the organism's adaptive response to amino acid stress.

No clinical-stage GCN2 modulator is currently directed at aging. #gap/dose-response-unclear for any putative aging-related dose.

## Pathway membership

- [[integrated-stress-response]] — GCN2 is the amino acid-sensing arm; converges on eIF2alpha-Ser51 alongside PERK, HRI, and PKR
- [[mtor]] — reciprocal amino acid sensor; GCN2 on / mTOR off under amino acid deficiency; linked via Sestrin2
- [[atf4]] — primary downstream transcription factor; activated by eIF2alpha-Ser51-P via uORF-mediated translation
- [[eif2alpha]] — direct substrate; Ser51 phosphorylation is the obligate step

## Key interactors

- [[eif2alpha]] — direct substrate (Ser51 phosphorylation)
- [[atf4]] — downstream transcription factor; translation preferentially enhanced under eIF2alpha-P conditions
- GCN1 / GCN20 — co-activator complex; presents uncharged tRNAs to the HisRS-like domain; required for full GCN2 activation #gap/unsourced (no study page; cite Hinnebusch 2005 review on first verification pass)
- [[mtor]] — reciprocal sensor; cross-inhibition via Sestrin2

## Limitations and gaps

- `#gap/needs-human-replication` — Longevity phenotypes (CR, methionine restriction) established in yeast, worms, flies; no equivalent human genetic or clinical evidence.
- `#gap/contradictory-evidence` — Chronic GCN2-ATF4 activation is prolongevity in some organisms (yeast, worms) but detrimental in flies (Götz 2026); mouse and human implications unresolved.
- `#gap/no-mechanism` — How EIF2AK4 loss causes pulmonary vascular obliteration is unknown; GCN2's role in endothelial homeostasis is understudied.
- `#gap/no-mechanism` — Mechanism integrating GCN2 and FGF21 signals downstream of methionine restriction not established.
- `#gap/needs-canonical-id` — HGNC accession not populated; verify Q9P2K8 against UniProt and add HGNC number.
- `#gap/unsourced` — IACS-13533 in vivo efficacy claim; GCN1/GCN20 interaction claim. Both need primary-source study pages.
- `#gap/dose-response-unclear` — No established dose-response data for GCN2 modulation in any aging-relevant mammalian context.

## Footnotes

[^wek1995]: doi:10.1128/mcb.15.8.4497 · Wek RC et al., 1995 · n=not applicable (biochemical/genetic) · in-vitro + in-vivo · model: S. cerevisiae and mammalian cell-free systems · demonstrated HisRS-like domain of GCN2 binds uncharged tRNA and is required for activation under amino acid starvation · 487 citations

[^eyries2014]: doi:10.1038/ng.2844 · Eyries M et al., 2014 · n=20 familial PVOD index cases · observational (human genetics) · model: human PVOD families · identified biallelic EIF2AK4 loss-of-function mutations as the genetic cause of heritable PVOD; ~25% familial cases · 445 citations · archive: not_oa #gap/no-fulltext-access

[^pakos-zebrucka2016]: doi:10.15252/embr.201642195 · Pakos-Zebrucka K et al., 2016 · review · model: mammalian ISR (multiple cell types) · comprehensive review of all four eIF2alpha kinases (GCN2, PERK, HRI, PKR) and ATF4 downstream program · 2458 citations

[^gallinetti2013]: doi:10.1042/BJ20121098 · Gallinetti J, Harputlugil E, Mitchell JR, 2013 · review · model: yeast, C. elegans, Drosophila, mammalian · reviews evidence that GCN2 and TOR are reciprocal amino acid sensors mediating DR-longevity across organisms; discusses specificity of essential vs non-essential amino acid inputs · 227 citations · archive: not_oa #gap/no-fulltext-access

[^srivastava2022]: doi:10.3389/fragi.2022.944466 · Srivastava S et al., 2022 · in-vivo (Drosophila melanogaster, genetic) · model: GCN2 mutant flies on varied amino acid diets · GCN2 required for feeding and longevity responses to most essential amino acid restrictions; methionine operates via GCN2-independent mechanism · 21 citations

[^gotz2026]: doi:10.1073/pnas.2518812123 · Götz et al., 2026 · in-vivo (Drosophila, genetic + transcriptomic) · model: dATF4 overexpression / suppression lines · chronic ATF4 suppression (not activation) extends fly lifespan; chronic activation detrimental · archive: not found in archive as of 2026-05-05; DOI confirmed via PubMed PMID 42048457

[^blagojevic2022]: doi:10.3390/cells11233863 · Blagojevic et al., 2022 · in-vitro · model: human cancer cell lines (amino acid auxotrophs vs prototrophs) · GCN2-ATF4 axis induces Sestrin2, which inhibits mTORC1; cell-type-specific depending on amino acid auxotrophy
