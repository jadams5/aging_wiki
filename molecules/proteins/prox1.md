---
type: protein
aliases: [PROX-1, Prospero homeobox 1, prospero-like protein PROX1, homeobox prospero-like protein]
uniprot: Q92786
ncbi-gene: 5629
hgnc: 9459
ensembl: ENSG00000117707
mouse-ortholog: Prox1
key-domains: [Prospero-homeodomain, Prospero-domain]
pathways: []
hallmarks: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
known-interactors: ["[[coup-tfii]]", "[[sox18]]"]
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-06-28
verified: true
verified-date: 2026-06-28
verified-by: claude
verified-scope: "Canonical DB identifiers confirmed live (UniProt Q92786/P48437, NCBI Gene 5629, HGNC 9459, Ensembl ENSG00000117707). Biswas 2023 (Cell 186:382-397) aging-specific sections verified against full PDF. Wigle & Oliver 1999 (Cell 98:769-778) verified against full PDF. Jin 2025 (Nature 643:755-767) verified against published abstract (PDF >100 MB, tool limit). Wigle 2002 (EMBO J 21:1505), Johnson 2008 (Genes Dev 22:3282), Srinivasan 2010 (Genes Dev 24:696) DOIs confirmed via Crossref but no local full-text PDF — body-text claims attributed to those papers not PDF-verified."
---

# PROX1 (Prospero homeobox protein 1)

The master transcription factor of lymphatic endothelial cell (LEC) identity. PROX1 is required to specify lymphatic fate from venous endothelium during development and is subsequently required continuously to maintain adult LEC identity — making it both the developmental switch and the stable marker that defines lymphatic vessels throughout life. Aging-relevant primarily through lymphatic dysfunction: PROX1+ bone lymphatic vessels decline in function with age, contributing to impaired hematopoietic regeneration and bone repair; PROX1+ nasal and cervical lymphatics decrease in density with aging, reducing cerebrospinal fluid (CSF) clearance.

## Identity

- **UniProt:** Q92786 (PROX1_HUMAN) · confirmed via mygene.info/v3 + Crossref
- **NCBI Gene:** 5629
- **HGNC symbol:** PROX1 · HGNC ID 9459
- **Ensembl:** ENSG00000117707
- **Chromosomal location:** 1q32.2–q32.3 (GRCh38.p14; NC\_000001.11, ~213.98–214.04 Mb)
- **Length:** 737 amino acids · ~83 kDa
- **Mouse ortholog:** Prox1 (UniProt P48437; Ensembl ENSMUSG00000010175; NCBI Gene 19130) · one-to-one ortholog, highly conserved across vertebrates
- **GenAge entry:** none confirmed #gap/needs-canonical-id

## Key functional domains

- **Prospero-type homeodomain** (residues 577–635) — DNA-binding helix-turn-helix fold
- **Prospero domain** (residues 636–735) — unique to Prospero-family homeobox proteins; forms a combined structural unit with the homeodomain that together mediates sequence-specific DNA contact and transcriptional co-regulator binding

The Prospero domain is conserved from Drosophila *prospero* (the founding family member, which specifies neuronal fate in flies) through vertebrate PROX1/2. In vertebrates, PROX1 is the key lineage specification factor for lymphatic endothelium rather than neurons.

## Function: master regulator of lymphatic endothelial fate

### Developmental specification from venous endothelium

The lymphatic vascular system arises from the cardinal veins during embryogenesis. In mice, at approximately embryonic day 9.5 (E9.5), a subpopulation of venous endothelial cells begins expressing PROX1 and SOX18, initiating their transdifferentiation into lymphatic endothelial progenitors. Genetic deletion of *Prox1* in mice leads to complete absence of the lymphatic vasculature: budding and sprouting of endothelial cells from the cardinal vein is arrested at ~E11.5, and the mutant cells retain blood-endothelial markers (ICAM-2, VEGFR2) while failing to acquire lymphatic markers (VEGFR3/FLT4, LYVE-1, podoplanin) [^wigleoliver1999][^wigle2002].

The key conclusion from these foundational experiments is that **blood vascular identity is the default fate** of endothelial cells budding from veins; PROX1 expression is the instructive signal that redirects them toward lymphatic identity [^wigle2002].

Upstream, the nuclear hormone receptor COUP-TFII/NR2F2 directly binds the *Prox1* regulatory region and is required to activate *Prox1* transcription in embryonic venous endothelium during the initiation of LEC specification [^srinivasan2010]. COUP-TFII and PROX1 can form heterodimers that collectively activate lymphatic-specific target genes. SOX18 acts partly in parallel, though its role is partially redundant with related family members.

### Maintenance of adult lymphatic identity (continuous requirement)

PROX1 is not merely a developmental switch that is required transiently and then becomes dispensable. Conditional downregulation of *Prox1* at embryonic, postnatal, or adult stages is sufficient to reprogram LECs into blood endothelial cells (BECs) as a cell-autonomous process [^johnson2008]. Following PROX1 loss, LECs upregulate blood-endothelial markers and downregulate lymphatic markers, indicating that the LEC–BEC identity boundary is reversible and maintained only by continuous PROX1 activity. Johnson et al. 2008 termed PROX1 a "binary switch that suppresses BEC identity and promotes and maintains LEC identity" — meaning that LECs represent an unusually plastic cell type dependent on ongoing expression of this single transcription factor [^johnson2008].

### PROX1 as the canonical marker of lymphatic endothelium

In practical terms, PROX1 nuclear expression is the most reliable single-protein marker for identifying lymphatic endothelial cells in immunohistochemistry and flow cytometry across tissues and species. This is because:
1. PROX1 is expressed in virtually all LECs across the body (both capillary lymphatics and collecting vessels).
2. PROX1 protein is nuclear, providing unambiguous cell-level identification distinct from extracellular markers.
3. Expression is maintained constitutively in adult LECs; it is not acutely regulated by inflammatory or hemodynamic stimuli in the way that some other LEC markers (e.g., LYVE-1) are.
4. PROX1 is co-expressed with [[lyve1]], VEGFR3/FLT4, and podoplanin, and the combination of PROX1+/LYVE1+ serves as the identity signature used in the Biswas 2023 bone lymphatic studies [^biswas2023].

Blood endothelial cells do not normally express PROX1, making PROX1+ nuclear staining a near-definitive lymphatic endothelial identifier in most tissues. Notable exceptions include subsets of hepatocytes (where PROX1 has a separate role in liver development) and some progenitor cell populations.

## Aging relevance

### PROX1+ lymphatic vessels in bone and aging-impaired regeneration

The Biswas et al. 2023 Cell paper overturned long-standing anatomical consensus by demonstrating that bone contains functional LYVE1+/PROX1+/VEGFR3+ lymphatic vessels, identifiable by 3D light-sheet imaging of immunolabeled whole murine bones and confirmed by immunostaining of human bone biopsies [^biswas2023]. These bone LECs play an active role in post-injury regeneration: following genotoxic stress (irradiation, 5-fluorouracil), bone LECs proliferate in an IL-6-dependent, VEGFR3-dependent lymphangiogenesis program (peak vessel density at ~day 15 post-irradiation), upregulate CXCL12 secretion, and thereby expand MYH11+/CXCR4+ perivascular progenitor cells that differentiate into osteoblasts and support hematopoietic stem cell (HSC) regeneration.

In aged mice, purified bone LECs display a **senescent transcriptional profile**: qPCR shows upregulation of p16 (Cdkn2a) and p21 (Cdkn1a), and downregulation of Ki67 (proliferation marker) and VEGFR3 (a downstream PROX1-regulated marker of lymphatic identity) [^biswas2023]. Note: Biswas 2023 Figure 6L legend explicitly lists *p16* and *p21*; the paper body text uses "p27" at one point — a likely typographic error in the source. The figure legend is taken as authoritative. Functionally, aged mice fail to expand bone lymphatic vessels after injury and show no MYH11+ progenitor expansion — linking aged LEC senescence to impaired bone formation and hematopoietic regeneration. Transplantation of young LECs (not aged LECs) into aged mice substantially restored MYH11+ expansion, bone mass (by micro-CT), and HSC reconstituting activity, establishing that the deficit is intrinsic to the aged LECs rather than the niche [^biswas2023]. #gap/needs-replication (LEC transplantation n=5; replication in larger cohorts and with other genotoxic injuries is needed)

| Dimension | Status | Notes |
|---|---|---|
| Lymphatic vessels in human bone? | yes | Human bone biopsies show LYVE1+ vessels by immunostaining; n unspecified in primary text |
| PROX1+ bone LEC senescence in humans? | not tested | Mouse qPCR data only; human-aging biopsy senescence profiling absent |
| PROX1-target-axis conserved in humans? | partial | VEGFR3/CXCL12/CXCR4 axis is conserved; IL-6-dependent bone lymphangiogenesis not demonstrated in humans |

#gap/needs-human-replication (injury-response lymphangiogenesis and aged LEC senescence are mouse-only functional evidence)

### PROX1+ lymphatics in the nasal mucosa and CSF drainage

A 2025 Nature study by Jin et al. used Prox1-GFP reporter mice to map CSF outflow pathways from meningeal initial lymphatics through periorbital, olfactory, nasopharyngeal, and hard-palate lymphatics to superficial cervical lymphatics and submandibular lymph nodes [^jin2025]. Key aging findings: **aged mice have fewer lymphatics in the nasal mucosa and hard palate** (as detected by Prox1-GFP) and exhibit **reduced CSF outflow to cervical lymph nodes** compared to young mice. Aged superficial cervical lymphatics also showed increased *Nos3* mRNA (eNOS) but reduced eNOS protein and impaired nitric oxide signaling — an additional mechanism of functional impairment beyond lymphatic rarefaction. Non-invasive mechanical stimulation of cervical lymphatics in aged mice doubled CSF drainage and corrected the age-related impairment [^jin2025]. This connects PROX1+ lymphatic rarefaction with the age-related decline in lymphatic CSF clearance — a pathway increasingly implicated in the accumulation of neurotoxic proteins in the aging brain.

#gap/needs-replication (single study; the mechanistic link between PROX1+ LEC loss and CSF outflow reduction needs independent verification)

### General lymphatic aging

Independent of the specific studies above, aging is associated with progressive impairment of lymphatic transport function, reduced lymphatic vessel density in multiple tissues, and decreased responsiveness of LECs to lymphangiogenic growth factors (principally VEGF-C/VEGFR3 signaling). The continuous PROX1 expression requirement in adult LECs [^johnson2008] means that any reduction in PROX1 protein level — from cellular senescence-associated chromatin remodeling or epigenetic drift — would be expected to compromise LEC identity and function. Whether PROX1 levels fall during physiological aging in LECs is not yet documented in a systematic manner. #gap/unsourced — no published dataset reporting PROX1 protein levels in LECs across aging cohorts was identified.

## Pathway membership

- **VEGF-C/VEGFR3 lymphangiogenesis** — PROX1 induces VEGFR3/FLT4 expression on LECs, making VEGF-C signaling the operative growth factor axis; in bone injury, this is the receptor mediating LEC proliferation [^biswas2023]
- **COUP-TFII (NR2F2) regulatory axis** — upstream nuclear receptor that activates PROX1 during LEC specification; COUP-TFII/PROX1 heterodimers drive the lymphatic transcriptional program [^srinivasan2010]
- **IL-6/STAT3 signaling** — upstream of bone LEC proliferation after genotoxic injury; IL-6 is required for PROX1+ LEC expansion [^biswas2023]
- **CXCL12/CXCR4 axis** — downstream of PROX1-expressing LECs in bone; LEC-secreted CXCL12 drives perivascular progenitor expansion and regeneration [^biswas2023]

## Key interactors

- **COUP-TFII/NR2F2** — directly activates *Prox1* transcription in venous endothelium; heterodimerizes with PROX1 to drive the lymphatic gene program [^srinivasan2010]
- **SOX18** — co-expressed with PROX1 during early LEC specification; upstream activator partially redundant with COUP-TFII
- [[lyve1]] — downstream transcriptional target of PROX1 in LECs; co-expressed marker used to identify bone lymphatic vessels [^biswas2023]
- **VEGFR3/FLT4** — key PROX1-regulated target in LECs; its downregulation in aged bone LECs reflects LEC identity loss parallel to PROX1 itself [^biswas2023] (stub — [[vegfr3]] page not yet seeded)
- [[vegfr2]] — expressed on blood endothelium; normally repressed by PROX1 in LECs; its de-repression upon PROX1 loss marks BEC reprogramming [^johnson2008]

## Druggability

PROX1 is a transcription factor with a homeodomain DNA-binding architecture. Homeodomain transcription factors are generally considered **undruggable by conventional small molecules** due to the absence of a well-defined hydrophobic binding pocket. No clinical-stage small molecule targeting PROX1 directly for any indication (aging or otherwise) has been identified. Open Targets Platform was not queryable via API during page seeding; druggability-tier set to null. #gap/no-opentargets-entry

Indirect PROX1-pathway modulation is feasible: VEGF-C delivery or VEGFR3 agonism would activate downstream PROX1-regulated programs without targeting PROX1 itself. Recombinant VEGF-C (adenoviral or protein) and anti-VEGFR3-blocking antibodies are used as experimental tools; no aging-indication compound is in clinical development as of this page seeding.

## Limitations and knowledge gaps

- #gap/needs-human-replication — All direct PROX1-aging evidence (bone LEC senescence, reduced nasal lymphatics, LEC transplantation rescue) derives from murine studies. Human aging biopsies profiling PROX1+ LEC density and PROX1 protein levels across tissues and ages are absent from the literature.
- #gap/needs-replication — The Biswas 2023 bone LEC transplantation rescue experiment was n=5 per group; independent replication with defined LEC senescence scoring is needed.
- #gap/unsourced — No systematic data exist on whether PROX1 protein levels fall in aging LECs in vivo across tissues; the link between LEC senescence (p16+, Ki67−) and PROX1 downregulation in aging bone is inferred from the VEGFR3 downregulation finding, not directly from PROX1 immunostaining of aged LECs.
- #gap/no-mechanism — The mechanism by which senescence in aged bone LECs reduces PROX1-regulated gene expression (e.g., epigenetic vs transcriptional vs post-translational suppression of PROX1 activity) is not established.
- `literature-checked-through: 2026-06-28` — date-filtered PubMed searches for "PROX1 lymphatic aging," "PROX1 lymphatic endothelial identity," and aging/lymphatic-dysfunction terms were run; 7 high-priority recent hits evaluated; no contradictions to training-era view identified.

## Cross-references

- [[lyve1]] — co-expressed LEC marker; sibling protein page
- [[endothelial-cells]] — parent cell type
- [[bone]] — tissue context for Biswas 2023 finding
- [[bone-marrow]] — compartment where bone lymphatics reside and support HSC regeneration
- [[hematopoietic-stem-cells]] — downstream beneficiaries of PROX1+ bone LEC niche signaling
- [[cellular-senescence]] — aged bone LECs show p16+/p21+ senescent profile (Biswas 2023 Figure 6L)
- [[stem-cell-exhaustion]] — aged senescent bone LECs fail to support HSC regeneration after injury
- [[studies/biswas-2023-bone-lymphatics]] — primary source for bone lymphatic findings

## Footnotes

[^wigleoliver1999]: doi:10.1016/s0092-8674(00)81511-1 · Wigle JT, Oliver G · *Cell* 1999 · n=Prox1 null embryos vs WT · in-vivo (mouse, null mutant) · model: Prox1−/− C57BL/6 × 129 embryos; lymphatic budding arrested ~E11.5, blood-endothelial fate retained

[^wigle2002]: doi:10.1093/emboj/21.7.1505 · Wigle JT, Harvey N, Detmar M, Lagutina I, Grosveld G, Gunn MD, Jackson DG, Oliver G · *EMBO J* 2002 · in-vivo (mouse, null mutant) + in-vitro (endothelial progenitors) · model: Prox1−/− embryos; establishes "blood vascular identity is the default fate" and Prox1 as the instructive lymphatic signal

[^johnson2008]: doi:10.1101/gad.1727208 · Johnson NC, Dillard ME, Baluk P, McDonald DM, Harvey NL, Frase SL, Oliver G · *Genes & Development* 2008 · in-vivo (mouse, conditional knockout) · model: conditional Prox1 downregulation in embryonic/postnatal/adult mice; LEC-to-BEC reprogramming confirmed; demonstrates continuous Prox1 requirement for adult LEC identity maintenance

[^srinivasan2010]: doi:10.1101/gad.1859310 · Srinivasan RS, Geng X, Yang Y, Wang Y, Mukatira S, Studer M, Porto MPR, Lagutin O, Oliver G · *Genes & Development* 2010 · in-vivo (mouse) + in-vitro · model: Coup-TFII conditional knockout and regulatory region analysis; demonstrates direct COUP-TFII binding to Prox1 regulatory region required for LEC specification initiation

[^biswas2023]: [[studies/biswas-2023-bone-lymphatics]] · n=5–7/group (imaging/flow cytometry); n=5 (LEC transplantation MYH11+ imaging); n=6 (bone mass + HSC reconstitution in LEC transplantation) · in-vivo (mouse; human bone biopsies for anatomy) · doi:10.1016/j.cell.2022.12.031 · demonstrates LYVE1+/PROX1+/VEGFR3+ bone lymphatic vessels (~19 μm diameter); injury-induced LEC expansion peaks day 15; aged mouse bone LECs: p16↑, p21↑ (Figure 6L; body text says p27 — source internal inconsistency), Ki67↓, VEGFR3↓; aged mice fail to expand bone lymphatics post-injury; young-LEC transplant restores bone mass + HSC reconstituting activity in aged mice

[^jin2025]: doi:10.1038/s41586-025-09052-5 · Jin H, Yoon J-H, Hong SP, et al. · *Nature* 2025 · in-vivo (Prox1-GFP reporter mice, aged vs young) · aged mice have fewer PROX1+ lymphatics in nasal mucosa and hard palate; CSF outflow reduced; mechanical cervical-lymphatic stimulation doubles CSF drainage and corrects age-related impairment · #gap/needs-replication (single study)
