---
type: protein
aliases: [RALDH3, retinaldehyde dehydrogenase 3, ALDH6, RALDH-3]
uniprot: P47895
ncbi-gene: 220
hgnc: 409
ensembl: ENSG00000184254
mouse-ortholog: Aldh1a3
genage-id: null
pathways: ["[[wnt-beta-catenin]]", "[[bmp-signaling]]", "[[hedgehog-pathway]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[epigenetic-alterations]]"]
sens-categories: []
key-domains: [aldehyde-dehydrogenase-superfamily, NAD-binding, substrate-binding, catalytic-cysteine]
key-ptms: [N-terminal-acetylation]
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[epigenetic-alterations]]"]
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "UniProt identity fields verified against REST API (P47895 confirmed); Kesim 2023 (doi:10.1038/s41431-023-01342-8) PDF read — n corrected in footnote, publication-type noted; Thomas 2016 (doi:10.1016/j.molonc.2016.08.004) PDF read — in-vivo model detail confirmed; Feng 2018 (doi:10.1038/bjc.2017.363) PDF read — CXCR4-dependence claim confirmed; Codony 2019 DOI corrected and isoform-specificity claim qualified; Marcato 2011 Cell Cycle paper is a commentary — functional-data attribution corrected to add primary research paper (doi:10.1002/stem.563); Duester 2009 and Kumar 2017 PDFs not available (download failed); supersession search run 2026-05-19 (no superseding meta-analyses identified for cancer-stem-cell ALDH1A3 claims)"
---


# ALDH1A3 (RALDH3)

Retinaldehyde dehydrogenase 3 — an NAD+-dependent oxidoreductase that converts retinaldehyde (retinal) to all-trans retinoic acid (atRA) in a spatially restricted set of embryonic and adult tissues. Its primary biological roles are (1) supplying atRA for anterior eye and nasal morphogenesis, (2) sustaining atRA-dependent corneal homeostasis in the adult, and (3) marking a chemoresistant, self-renewing subset of cancer stem-like cells (CSCs) across multiple solid tumor types. Direct aging literature is sparse; its aging relevance is indirect — via the ALDH+ CSC phenotype as a contested stem-cell aging marker and via atRA's epigenetic and tissue-maintenance functions.

## Identity

- **UniProt:** P47895 (AL1A3_HUMAN)
- **NCBI Gene:** 220
- **HGNC symbol:** ALDH1A3 (alias ALDH6; older synonym RALDH-3)
- **Ensembl:** ENSG00000184254
- **Mouse ortholog:** Aldh1a3 (near-identical expression pattern and substrate specificity)
- **EC number:** 1.2.1.36 (retinal:NAD+ oxidoreductase)
- **Quaternary structure:** Homotetramer (cytoplasmic)
- **Length:** 512 amino acids (canonical isoform)

## Biochemistry and enzymatic mechanism

ALDH1A3 catalyzes the irreversible, NAD+-dependent oxidation of all-trans-retinal to all-trans-retinoic acid:

> all-trans-retinal + NAD+ → all-trans-retinoate + NADH

The active-site nucleophile is **Cys-314**; **Glu-280** serves as the general base (proton acceptor). The enzyme is strongly selective for retinaldehyde substrates; it is essentially inactive on acetaldehyde or other short-chain aliphatic aldehydes that are substrates for ALDH2. Kinetic parameters from UniProt annotation: KM = 9.3 µM (all-trans retinal), 4.8 µM (NAD+). #gap/needs-replication — these values derive from recombinant-protein assays; cellular context (substrate channeling, co-factor competition) may shift them.

**Distinction from paralogs.** The three human RALDH paralogs occupy non-redundant spatial domains:

| Paralog | Primary tissue context | Characteristic aging/disease role |
|---|---|---|
| ALDH1A1 | Liver, cornea, HSCs, dopaminergic neurons | Alcohol metabolism; HSC quiescence marker; dopaminergic neuroprotection |
| ALDH1A2 | Embryonic heart, somites, lung bud, kidney | Heart and limb development; embryo-lethal KO in mouse |
| **ALDH1A3** | Nasal epithelium, retina, ventral retinal pigmented epithelium | Eye/nose morphogenesis; CSC marker in breast/lung/colon |

ALDEFLUOR assays (used to isolate ALDH+ CSC populations) detect pan-ALDH activity; ALDH1A3 is typically the dominant ALDEFLUOR-reactive isoform in breast and lung CSC fractions, not ALDH1A1 [^marcato2011].

## Tissue expression and developmental role

ALDH1A3 expression during embryogenesis is tightly restricted to the ventral retina, nasal region, and ventral limb bud — the three domains requiring graded atRA for patterning [^duester2009]. Loss of ALDH1A3-derived atRA in these regions cannot be compensated by ALDH1A1 or ALDH1A2 because those paralogs are absent from the same spatial domains at the relevant developmental windows.

In the adult, expression is more broadly low-level but remains detectable in:
- **Corneal epithelium** — atRA sustains homeostatic renewal; Aldh1a3-null mice develop corneal abnormalities [^kumar2017]
- **Nasal mucosa / olfactory epithelium**
- **Salivary gland, stomach, kidney** (from UniProt tissue-specificity annotation)

Developmental consequence of ALDH1A3 loss is disproportionate to this restricted expression pattern — see Loss-of-function section.

## Loss-of-function phenotype — ocular development

Biallelic loss-of-function mutations in ALDH1A3 cause **microphthalmia, isolated, type 8 (MCOP8)** (OMIM #615523), inherited in autosomal-recessive fashion. The severity spectrum ranges from unilateral microphthalmia (small eye) to bilateral clinical anophthalmia (absence of grossly visible ocular tissue), making ALDH1A3 one of the most penetrant monogenic causes of structural ocular malformation [^kesim2023].

Key clinical points:

- Pathogenic variants include missense, nonsense, frameshift, and splice-site alleles; no strong genotype-phenotype correlation between mutation class and severity
- Bilateral anophthalmia is associated with poorer visual prognosis; unilateral cases may retain partial vision in the unaffected eye
- Non-ocular features are rare but reported (cleft palate, choanal atresia in some families — the nasal-epithelium expression domain is relevant)
- Heterozygous carriers are generally unaffected — recessive inheritance pattern

**Mouse model.** Aldh1a3-null mice recapitulate the human phenotype with loss of ventral retinal atRA signaling, failure of ventral optic cup morphogenesis, and anophthalmia/microphthalmia. The Aldh1a3 KO is the canonical model for this developmental axis [^duester2009].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human ALDH1A3 LOF → same ocular phenotype as mouse Aldh1a3 KO |
| Phenotype conserved in humans? | yes | MCOP8 confirmed by multiple independent variant reports |
| Replicated in humans? | yes | Multiple independent case series and family studies |

## ALDH1A3 as a cancer stem cell marker

### ALDEFLUOR assay and isoform specificity

The ALDEFLUOR assay is the dominant method for prospective CSC isolation from primary tumors and cell lines. It detects the conversion of BODIPY-aminoacetaldehyde to a fluorescent product by cytosolic ALDH enzymes. A pair of 2011 Marcato et al. papers established that in breast cancer the ALDEFLUOR signal is driven predominantly by **ALDH1A3**, not ALDH1A1 as commonly assumed [^marcato2011]. A commentary in *Cell Cycle* articulated the isoform-specificity principle; the accompanying primary research article in *Stem Cells* (doi:10.1002/stem.563) demonstrated that selective knockdown of ALDH1A3 (but not ALDH1A1) reduced ALDEFLUOR-positive fractions, sphere-forming capacity, and tumor-initiating potential in xenograft models. These studies shifted the field's interpretation of ALDEFLUOR results in breast cancer — ALDH1A3 is the functional isoform.

Functional significance of the ALDH1A3-high fraction:
- **Sphere-forming capacity** (anchorage-independent self-renewal proxy) enriched in ALDH1A3+ cells
- **Chemoresistance** — ALDH1A3-high breast cancer cells show relative resistance to doxorubicin/cyclophosphamide regimens; the atRA produced may support survival signaling and epigenetic reprogramming
- **Invasion/metastasis** — ALDH1A3-high fractions show elevated invasion in Matrigel assays; in colon cancer lines, ALDH1A3 effects on invasion depend on CXCR4 co-expression status [^feng2018]

### Citral as a candidate ALDH1A3 inhibitor

Thomas et al. (2016) showed that citral (a natural terpenoid found in citrus peel) inhibited ALDH1A3 enzymatic activity, reduced the ALDH1A3+ CSC fraction in breast cancer lines, and suppressed tumor growth in an orthotopic mouse model [^thomas2016]. Citral is not clinically developed for this indication; this is a proof-of-concept for the pharmacological tractability of ALDH1A3 in the CSC context. #gap/needs-human-replication

### Other tumor types

- **Non-small cell lung cancer** — High ALDH activity marks the CSC-like subpopulation in EGFR-mutant NSCLC that survives EGFR inhibition; elevated ALDH1 expression (pan-isoform; ALDH1A3 not distinguished in this study) correlates with inferior outcomes to TKI therapy [^codony2019] #gap/needs-replication — isoform specificity in NSCLC not established
- **Colon cancer** — ALDH1A3 knockdown reduced proliferation and invasion in vitro; CXCR4 modulates the effect [^feng2018]
- **Other** — elevated ALDH1A3 expression reported in ovarian, glioblastoma, and pancreatic cancer stem-cell populations; the ALDH1A3/RALDH3-cancer literature is still expanding #gap/needs-replication

## Aging context

### ALDH+ phenotype as a contested aging marker

The ALDH+ phenotype has been proposed as a proxy for tissue stem cell activity across multiple contexts. In hematopoiesis and muscle, ALDH-high fractions are enriched for progenitor activity. Whether ALDH1A3-specific (vs pan-ALDH) expression changes with aging in non-cancerous tissues is not well characterized. #gap/needs-human-replication

### Retinoic acid signaling in aging

atRA is a ligand for nuclear retinoic acid receptors (RARα, RARβ, RARγ), which regulate hundreds of target genes involved in differentiation, proliferation arrest, and epigenetic remodeling. Age-related decline in atRA signaling has been proposed in multiple tissues (skin, brain, immune), but the contribution of ALDH1A3-specific atRA production to these age-related changes has not been directly measured. ALDH1A3's restricted tissue expression (eye, nasal, specific cancer types) suggests its direct aging contribution is likely minor compared to the ubiquitous ALDH1A1 isoform. #gap/no-mechanism

**Bottom line on aging relevance:** ALDH1A3 is primarily relevant to aging wiki coverage as (1) a mechanistic node in atRA signaling affecting epigenetic regulation, and (2) a CSC marker whose ALDH+ phenotype connects to [[stem-cell-exhaustion]] biology. The direct aging-gerontology literature is thin.

## Pathway membership

ALDH1A3-derived atRA feeds into broader developmental and homeostatic signaling networks:

- **[[wnt-beta-catenin]]** — atRA can suppress Wnt-driven proliferation in epithelial progenitors (context-dependent)
- **[[bmp-signaling]]** — atRA and BMP signals cooperate in eye field specification and dorsoventral patterning
- **[[hedgehog-pathway]]** — retinoic acid and Sonic Hedgehog have opposing gradients in limb patterning; cross-talk is established
- **[[epigenetic-alterations]]** — RARα/β/γ nuclear receptors recruit HATs and HDACs, directly linking atRA production to chromatin-level gene regulation

No dedicated retinoic-acid-signaling pathway page exists yet in this wiki. See `[[tretinoin]]` (atRA compound page) for pharmacological context. #gap/stub — `[[retinoic-acid-signaling]]` pathway page needed.

## Key interactors and upstream context

- **Retinol → retinaldehyde:** Oxidation catalyzed by retinol dehydrogenases (RDH10, SDR16C5), upstream of ALDH1A3
- **atRA → catabolism:** Produced atRA is oxidized by CYP26A1/B1/C1 enzymes; CYP26s are themselves induced by atRA (negative feedback loop that limits local concentrations)
- **RARα/β/γ:** Nuclear receptors activated by ALDH1A3-derived atRA; primary effectors of downstream transcriptional response
- **[[retinaldehyde]]** and **[[retinol]]** — see respective compound pages for the upstream supply chain

## Pharmacology and druggability

**Open Targets tier 3 (predicted druggable; no clinical drug).** ALDH1A3 is a tractable enzyme target (active-site cavity accepts NAD+ and retinaldehyde; Cys-314 is nucleophilic and potentially alkylatable), but no clinical-stage ALDH1A3-selective inhibitor exists. Research-stage inhibitors:

- **Citral** — natural ALDH1A3 inhibitor; in vivo proof-of-concept in breast tumor xenografts [^thomas2016]; not clinical-stage
- **DEAB (4-diethylaminobenzaldehyde)** — pan-ALDH inhibitor used as the negative-control channel in ALDEFLUOR assays; not isoform-selective

The aging-context druggability tier is assessed as **3** (predicted druggable based on catalytic-pocket tractability; no aging-indication-validated probe or clinical drug). For cancer-stem-cell oncology use the tier would be the same — no approved agent.

#gap/no-mechanism — no validated ALDH1A3-selective inhibitor suitable for in vivo aging studies.

## Limitations and knowledge gaps

- `#gap/needs-human-replication` — All cancer-stem-cell functional data are from cell lines and mouse xenografts; no prospective clinical trial has tested ALDH1A3 inhibition as a therapeutic strategy
- `#gap/needs-replication` — Citral anti-tumor efficacy shown in one mouse xenograft model; independent replication needed
- `#gap/no-mechanism` — Direct contribution of ALDH1A3 to age-related tissue decline (vs developmental/cancer roles) is unmeasured
- `#gap/needs-canonical-id` — GenAge entry for ALDH1A3 not identified; database not currently indexed for this gene (likely because it lacks direct lifespan-extension evidence in model organisms)
- `#gap/stub` — `[[retinoic-acid-signaling]]` pathway page does not yet exist; wikilink is implicit stub

## Footnotes

[^marcato2011]: doi:10.4161/cc.10.9.15486 · Marcato P et al. · *Cell Cycle* 2011 · commentary · establishes that ALDH isoform specificity (particularly ALDH1A3) underlies ALDEFLUOR signal in breast cancer; citation count 502. Primary research data (isoform-specific knockdown → loss of ALDEFLUOR+ fraction, sphere-forming capacity, and in vivo tumor-initiating potential) are from the companion research article: doi:10.1002/stem.563 · Marcato P et al. · *Stem Cells* 2011 · PMID 21280157

[^duester2009]: doi:10.1016/j.cbi.2008.09.004 · Duester G · *Chem Biol Interact* 2009 · review · spatial RALDH expression domains and requirement for atRA in eye/nasal/limb morphogenesis; citation count 77

[^kesim2023]: doi:10.1038/s41431-023-01342-8 · Kesim Y et al. · *Eur J Hum Genet* 2023 · brief communication · n=9 affected individuals from 7 unrelated families · genetic/clinical cohort · delineates phenotypic spectrum of ALDH1A3-related anophthalmia/microphthalmia (MCOP8); reports biallelic ALDH1A3 variants responsible for ~11% of recessively inherited severe developmental eye anomaly cases; citation count 7

[^thomas2016]: doi:10.1016/j.molonc.2016.08.004 · Thomas ML et al. · *Mol Oncol* 2016 · in-vitro (MDA-MB-231, MDA-MB-468, SKBR3 breast cancer lines) + in-vivo orthotopic PDX (NOD/SCID female mice; n=6 per group) · screened 12 ALDH inhibitors; citral (nanoparticle-encapsulated) identified as most effective ALDH1A3-selective inhibitor, reducing ALDEFLUOR+ fraction at 1 µM; citral-NP significantly reduced tumor volume and weight in ALDH1A3-OE MDA-MB-231 xenografts but not vector-control tumors; citation count 86

[^feng2018]: doi:10.1038/bjc.2017.363 · Feng H et al. · *Br J Cancer* 2018 · in-vitro (colon cancer lines) · ALDH1A3 promotes proliferation and invasion in a CXCR4-dependent manner; citation count 56

[^kumar2017]: doi:10.1016/j.exer.2016.11.009 · Kumar S et al. · *Exp Eye Res* 2017 · in-vivo (Aldh1a3-null mouse) · retinoic acid required for corneal maintenance and regeneration; citation count 40

[^codony2019]: doi:10.1016/j.cllc.2019.02.005 · Codony-Servat J et al. · *Clin Lung Cancer* 2019 · PMID 30885551 · n=64 EGFR-mutant patients + in-vitro · clinical cohort + in-vitro · pan-ALDH1 (not ALDH1A3-specific) activity marks the TKI-surviving subpopulation in EGFR-mutant NSCLC; elevated ALDH1 correlates with inferior TKI outcomes; ALDH1A3 isoform specificity not tested
