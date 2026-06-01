---
type: protein
aliases: [Phosphatase and Tensin Homolog, MMAC1, TEP1, PTEN/MMAC1]
uniprot: P60484
ncbi-gene: 5728
hgnc: 9588
mouse-ortholog: Pten
ensembl: ENSG00000171862
druggability-tier: 3
caused-by: []
causes: []
genage-id: 63
key-domains: [phosphatase-tensin-type, C2-tensin-type, PDZ-binding-motif]
key-ptms: [Thr366-phosphorylation, Ser380-phosphorylation, Thr382-phosphorylation, Thr383-phosphorylation, Ser385-phosphorylation, Lys289-ubiquitination, Cys124-oxidation]
pathways: ["[[pi3k-akt-pathway]]", "[[insulin-igf1]]", "[[autophagy]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[pi3k]]", "[[akt]]", "[[mtor]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Steck 1997 (local PDF), Stambolic 1998 (local PDF), Maehama & Dixon 1998 (local PDF), Ortega-Molina 2012 (local PDF), Garcia-Cao 2012 (local PDF) verified against primary source PDFs. Li 1997 (not_oa) and Di Cristofano 1998 (not_oa) unverifiable — claims from those sources tagged below. Canonical-database identity fields (UniProt P60484, NCBI Gene 5728, HGNC 9588, PubChem) not independently re-verified against databases."
---


# PTEN (Phosphatase and Tensin Homolog)

The principal negative regulator of the [[pi3k-akt-pathway]]: a dual-specificity phosphatase that dephosphorylates the lipid second messenger PIP3 (PI(3,4,5)P3) back to PIP2 (PI(4,5)P2), directly antagonizing PI3-kinase and suppressing [[akt]] activation. Among the most frequently mutated tumor suppressors in human cancer (~30–50% of tumors show PTEN loss) [^vasan2022]. In aging biology, PTEN occupies a paradoxical position: it is a key brake on the pro-aging insulin/IGF-1 signaling (IIS) axis, and partial PTEN gain-of-function in mice extends lifespan — even as germline PTEN loss in humans causes cancer predisposition (Cowden syndrome).

## Identity

- **UniProt:** P60484 (PTEN_HUMAN)
- **NCBI Gene:** 5728
- **HGNC symbol:** PTEN
- **Ensembl:** ENSG00000171862
- **GenAge (human):** HAGRID 63
- **Mouse ortholog:** Pten (one-to-one; highly conserved)
- **Length:** 403 amino acids (canonical human isoform)
- **Chromosome:** 10q23.31 (a frequently deleted locus in glioblastoma, prostate cancer, and endometrial cancer)
- **Alias history:** Originally named *MMAC1* (Mutated in Multiple Advanced Cancers) and *TEP1* by two concurrent 1997 discovery papers [^li1997][^steck1997].

## Domain organization

| Region | Residues | Function |
|---|---|---|
| PIP2-binding motif | 1–15 | N-terminal basic patch; membrane anchoring and substrate selectivity |
| Phosphatase domain | 14–185 (tensin-type) | Active site; CX5R catalytic motif at **Cys124**; dephosphorylates PIP3 3-position |
| C2 domain | 190–350 (tensin-type) | Ca2+-independent lipid-binding; required for membrane targeting and stability |
| C-terminal tail | 351–403 | Regulatory hub: multiple phosphorylation sites (CK2/GSK3β targets); PEST sequence; PDZ-binding motif (aa 401–403) |

The **CX5R motif** at Cys124 is the catalytic core: Cys124 acts as the nucleophile, forming a thiophosphoryl intermediate that is resolved by His93/Lys125/Lys128. Mutations at Cys124 (e.g., C124S) abolish all phosphatase activity. The **G129E point mutation** (frequently found in Cowden syndrome) is informative: it selectively abolishes lipid phosphatase activity while retaining protein phosphatase activity, demonstrating that the tumor-suppressor function is attributable to the lipid phosphatase arm [^stambolic1998].

## Catalytic function

### Lipid phosphatase (primary tumor-suppressor activity)

PTEN dephosphorylates the D3 position of PI(3,4,5)P3, converting it to PI(4,5)P2 [^maehama1998]. This directly opposes PI3K (which phosphorylates PI(4,5)P2 → PI(3,4,5)P3) and reduces membrane-localized [[akt]] activation. Downstream consequences include:

- Reduced [[akt]] Thr308/Ser473 phosphorylation
- Reduced [[mtor|mTORC1]] activity (via TSC2-Rheb axis, since AKT phosphorylates and inactivates TSC2)
- Reduced phosphorylation of FOXO transcription factors (FOXO3a Thr32/Ser253/Ser315), allowing nuclear FOXO activity
- Reduced survival signaling; increased apoptotic sensitivity

The lipid phosphatase activity is necessary and sufficient to suppress transformation: G129E mutants that retain only protein phosphatase activity are transformation-permissive [^stambolic1998].

### Protein phosphatase (secondary activity)

PTEN also dephosphorylates tyrosine-, serine-, and threonine-phosphorylated proteins. Reported protein substrates include cyclin D1 (regulating G1 progression) and focal adhesion kinase (FAK), though the physiological significance and whether these activities are PI3K-pathway-independent remain debated. #gap/unsourced — specific protein-phosphatase substrates require citation to primary biochemical studies.

## Regulation of PTEN activity and stability

PTEN activity is regulated at multiple levels:

**C-terminal phosphorylation (intramolecular autoinhibition):**
Casein kinase 2 (CK2) and GSK3β phosphorylate the C-terminal tail (Thr366, Ser370, Ser380, Thr382, Thr383, Ser385). This cluster of phosphorylations promotes a "closed" intramolecular conformation that reduces membrane association and PIP3 access, creating an inactive cytosolic pool. Dephosphorylation of the tail opens the molecule and increases activity at the membrane. #gap/needs-replication — the full mechanistic model of open/closed conformations derives primarily from biochemical studies; in-vivo validation is less complete.

**Ubiquitination and proteasomal degradation:**
E3 ubiquitin ligases NEDD4-1 and WWP2 polyubiquitinate PTEN (including Lys289) targeting it for proteasomal degradation. Monoubiquitination of Lys13 and Lys289 promotes nuclear translocation, where PTEN has nuclear-specific functions including DNA repair and chromosome stability. #gap/unsourced — specific NEDD4-1 and nuclear-translocation claims require primary biochemical citations.

**Oxidative inactivation:**
Reactive oxygen species (H2O2) oxidize Cys124, forming an intramolecular disulfide with Cys71 that reversibly inactivates the phosphatase. This redox regulation links oxidative stress to transiently elevated PI3K/AKT signaling. The oxidation is reversible by thioredoxin/peroxiredoxin systems. #gap/unsourced — specific Cys71-Cys124 disulfide model requires primary citation.

## Genetic models — knockout and heterozygous phenotypes

**Pten−/− (homozygous knockout): embryonic lethal.** Pten-null mouse embryos die between E6.5 and E9.5 with severe defects in ectodermal and mesodermal patterning [^dicristofano1998]. Stambolic et al. used a distinct exon 3–5 deletion model and found death by E9.5 with overgrowth of cephalic and caudal regions due to increased proliferation [^stambolic1998]. Heterozygous Pten+/− mice survive but are highly tumor-prone, developing a spectrum of spontaneous tumors (prostate, intestinal, thyroid, endometrial, lymphoma) [^dicristofano1998].

**Stambolic et al. 1998 (Cell)** provided early mechanistic evidence that PTEN negatively regulates PI3K-dependent PKB/AKT survival signaling in cells: mPTEN-null immortalized mouse embryonic fibroblasts showed constitutively elevated PKB/AKT phosphorylation and reduced apoptotic sensitivity, which was rescued by mPTEN re-expression; PI(3,4,5)P3 levels were elevated in the null cells; and a constitutively active PKB/AKT mutant rescued cells from PTEN-induced apoptosis, placing PTEN upstream of PKB/AKT [^stambolic1998].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | PTEN/PI3K axis conserved; Cowden syndrome patients (germline PTEN LOF) have elevated AKT activity |
| Phenotype conserved in humans? | yes | LOF → cancer predisposition in both mouse and human; GOF data only from mice |
| Replicated in humans? | partial | LOF human genetics (Cowden) replicates mouse LOF. GOF longevity not replicable in humans by ethical constraint |

## PTEN and aging: IIS braking and lifespan extension

PTEN is the principal molecular brake on the [[insulin-igf1]] signaling (IIS) axis, which is itself one of the most evolutionarily conserved determinants of lifespan. Reduced IIS (lower PI3K/AKT/mTOR; elevated FOXO) extends lifespan across organisms from *C. elegans* to mice.

### Pten overexpression extends mouse lifespan

**Ortega-Molina et al. 2012 (Cell Metabolism):** Transgenic mice carrying extra Pten gene copies (BAC transgenics, ~2-fold Pten protein; C57BL/6×CBA background) showed **significant lifespan extension independent of cancer reduction**: median survival increased +12% in males (wt n=49, Pten^tg n=32; p<0.005) and +9% in females (wt n=63, Pten^tg n=32; p<0.01), with cancer-free Pten^tg cohorts also showing a +30% increase in median cancer-free survival. These mice also exhibited enhanced energy expenditure, elevated BAT activity (hyperactive FDG uptake by PET), and increased UCP1 expression driven by a PI3K→Foxo1→Ucp1 axis — suggesting that the longevity effect involves both reduced IIS and improved metabolic fitness [^ortegamolina2012]. #gap/needs-human-replication

**Garcia-Cao et al. 2012 (Cell):** A complementary "Super-PTEN" model (systemic Pten elevation via BAC transgenesis, ~1.1–3.5× endogenous Pten depending on line; the primary longevity-relevant line expresses ~3.5×) showed that elevated PTEN induces a **tumor-suppressive metabolic state** characterized by reduced glucose/glutamine uptake, elevated mitochondrial oxidative phosphorylation, and resistance to oncogenic transformation. These mice were smaller (reduced cell number, not cell size) but metabolically healthy. The paper demonstrates that PTEN gain-of-function suppresses the Warburg effect and glutaminolysis via PI3K-dependent (PKM2 downregulation through mTORC1) and PI3K-independent (PFKFB3 and GLS degradation via APC/Cdh1) mechanisms [^garciacao2012]. **This paper did not report a lifespan measurement** — it characterizes the cancer-resistant metabolic phenotype only. #gap/needs-replication — metabolic protection confirmed in both Super-PTEN and Pten^tg models; direct longevity assay for Super-PTEN line not yet performed.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IIS/PI3K pathway and FOXO-longevity axis conserved from worm to human |
| Phenotype conserved in humans? | no | No human germline PTEN GOF model exists; Cowden GOF data not available |
| Replicated in humans? | no | Ethical constraint prevents engineering GOF in humans; GWAS-based evidence lacking |

### The Pten+/− paradox

Pten heterozygous mice are tumor-prone (Stambolic 1998 confirmed Pten+/- mice frequently develop T cell lymphomas with elevated PKB/AKT phosphorylation at the PTEN locus; Di Cristofano 1998 documented the full tumor spectrum) but are often described as longer-lived than wild-type on certain backgrounds due to reduced IIS — illustrating the **antagonistic pleiotropy** framework applied to a tumor suppressor: partial PTEN loss reduces IIS-driven tissue aging while simultaneously raising cancer risk. This trade-off is the inverse of the p53 hyperactivation paradigm (see [[p53]] — where stronger tumor suppression accelerates non-cancer aging). Full quantitative lifespan data for Pten+/− mice on a standardized background are not reliably established in the public literature. #gap/needs-replication #gap/unsourced — specific Pten+/− median lifespan extension claims require primary citation.

## Cancer relevance and PTEN loss spectrum

PTEN is among the most frequently mutated or deleted tumor suppressors in human cancer. Loss of heterozygosity (LOH) at 10q23 and missense mutations throughout the phosphatase and C2 domains occur in:

- **Glioblastoma multiforme (GBM):** ~30–40% PTEN mutation frequency
- **Endometrial carcinoma:** ~30–50%
- **Prostate cancer:** ~15–30% primary tumors; higher in advanced/metastatic disease
- **Breast cancer:** ~5–20%; enriched in TNBC

The frequency of PTEN inactivation across cancer types makes it a key node connecting the aging-cancer trade-off literature to the PI3K pathway [^vasan2022]. #gap/unsourced — specific frequency figures require per-cancer-type primary citations (TCGA data).

## Cowden syndrome and PTEN hamartoma tumor syndrome (PHTS)

Germline heterozygous PTEN mutations cause **Cowden syndrome** (OMIM 158350), an autosomal dominant condition characterized by:

- Macrocephaly
- Mucocutaneous lesions (trichilemmomas, papillomatous papules)
- Hamartomatous polyps (gastrointestinal, thyroid, breast)
- Elevated lifetime cancer risk: breast (~50%), thyroid (~10%), endometrial (~28%), kidney, colorectal

Lhermitte-Duclos disease (cerebellar dysplastic gangliocytoma) and macrocephaly/autism spectrum disorder also fall within the PTEN hamartoma tumor syndrome spectrum, reflecting PTEN's role in neuronal growth control.

## Pathway membership

- [[pi3k-akt-pathway]] — PTEN is the canonical negative regulator; the biochemical axis PI3K ↔ PTEN controls PIP3 levels and AKT membrane recruitment
- [[insulin-igf1]] — IIS signaling converges on PI3K/AKT; PTEN is the principal feedback brake
- [[autophagy]] — reduced AKT/mTORC1 activity (downstream of PTEN activation) promotes autophagy induction via ULK1 disinhibition

## Key interactors

- [[pi3k]] — functional opponent (kinase vs phosphatase) at the same substrate, PIP3
- [[akt]] — primary effector suppressed by PTEN-mediated PIP3 depletion
- [[mtor]] — indirectly suppressed via TSC1/TSC2 disinhibition and Rheb-GDP stabilization
- NEDD4-1 / WWP2 — E3 ligases that ubiquitinate and destabilize PTEN #gap/unsourced
- DVL (Dishevelled) — reported interaction linking PTEN to WNT pathway modulation #gap/unsourced

## Therapeutic relevance

PTEN loss creates dependence on PI3K/AKT/mTOR signaling, and this dependency is the rationale for clinical PI3K inhibitors (alpelisib, copanlisib, idelalisib) and AKT inhibitors (capivasertib, ipatasertib) in PTEN-null tumors. However:

- PTEN-null tumors show complex feedback activation of upstream RTKs, reducing single-agent PI3Ki efficacy
- Combination with MEK inhibitors, CDK4/6 inhibitors, or PARP inhibitors is under investigation
- No drug directly "restores" PTEN function; therapeutic strategies target downstream effectors

In aging biology, there is no direct PTEN-targeted geroprotective intervention in human trials. The longevity effect of Pten GOF in mice is mechanistically downstream of IIS/mTOR suppression, which is also achieved by [[rapamycin]] (via mTORC1 inhibition) and [[metformin]] (via AMPK/IIS modulation). #gap/needs-human-replication

## Limitations and gaps

- **Pten+/− lifespan paradox:** Qualitative claims about extended lifespan in heterozygotes are widely cited but a definitive, well-powered, standardized lifespan study is not established. #gap/needs-replication #gap/unsourced
- **Protein phosphatase substrates:** The in-vivo physiological significance of PTEN's protein (non-lipid) phosphatase activity remains poorly characterized. #gap/no-mechanism
- **Human PTEN GOF longevity:** All lifespan extension data are from mouse GOF models; human evidence is entirely absent due to ethical constraints on germline modification. #gap/needs-human-replication
- **Nuclear PTEN functions:** Monoubiquitination-dependent nuclear PTEN reportedly has lipid-phosphatase-independent roles in DNA repair and chromosome stability; mechanisms remain incompletely characterized. #gap/no-mechanism
- **Tissue-specific effects:** PTEN expression varies widely across tissues, and the aging-relevant effects of partial PTEN modulation may be highly tissue-dependent (BAT vs CNS vs muscle). #gap/unsourced

## Footnotes

[^li1997]: doi:10.1126/science.275.5308.1943 · in-vitro (positional cloning + biochemical) · model: human cancer cell lines / primary tumors · Science 1997 · 4,801 citations · archive: not_oa
[^steck1997]: doi:10.1038/ng0497-356 · in-vitro (positional cloning + mutation screening) · model: 17 glioma cell lines, 37 GBM primary tumors, 3 prostate cell lines, breast and kidney primary tumors; homozygous deletions in 4 glioma lines at 10q23.3; MMAC1 encodes 403 aa protein; LOH frequency 23% gliomas, 33% melanoma, 34% breast, 25% kidney · Nat Genet 1997 · archive: local PDF verified
[^maehama1998]: doi:10.1074/jbc.273.22.13375 · in-vitro (biochemical) · model: E. coli-expressed recombinant PTEN; overexpression in human 293 cells; C124S catalytic-dead mutant; PtdIns(3,4,5)P3 → PtdIns(4,5)P2 dephosphorylation at D3 position; also dephosphorylates Ins(1,3,4,5)P4; Km for Ins(1,3,4,5)P4 = 98.9 µM; C124S abolishes activity · J Biol Chem 1998 · archive: local PDF verified
[^dicristofano1998]: doi:10.1038/1235 · in-vivo (mouse, germline KO) · model: Pten−/− embryonic lethal E6.5–E9.5; Pten+/− tumor-prone · Nat Genet 1998 · 1,508 citations · archive: not_oa
[^stambolic1998]: doi:10.1016/s0092-8674(00)81780-8 · in-vitro + in-vivo · model: mPTEN-null immortalized mouse embryonic fibroblasts + reconstituted cell lines; PKB/AKT survival signaling; mPTEN-null embryos die by E9.5 · Cell 1998 · archive: local PDF verified
[^ortegamolina2012]: doi:10.1016/j.cmet.2012.02.001 · in-vivo (mouse, BAC transgenic) · model: Pten^tg C57BL/6×CBA (75%:25%) mice expressing ~2-fold Pten; wt n=49 males / n=63 females, Pten^tg n=32 males / n=32 females; median lifespan +12% males (p<0.005), +9% females (p<0.01); longevity independent of cancer protection; BAT hyperactive with elevated Ucp1 (Foxo1 target) · Cell Metab 2012 · archive: local PDF verified
[^garciacao2012]: doi:10.1016/j.cell.2012.02.030 · in-vivo (mouse, Super-PTEN BAC transgenic, C57BL/6J×CBAF1) · model: multiple lines with 1.1–3.5× endogenous Pten; no lifespan measurement reported — paper characterizes cancer-resistant metabolic phenotype (reduced Warburg effect, reduced glutaminolysis via PFKFB3/GLS downregulation; increased mitochondrial OXPHOS); reduced body size due to reduced cell number not cell size · Cell 2012 · archive: local PDF verified
[^vasan2022]: [[pi3k-akt-pathway]] footnote (Vasan & Cantley 2022 review) · see [[pi3k-akt-pathway]] page for citation details · ~30–50% cancer LOF frequency figure sourced there
