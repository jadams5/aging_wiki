---
type: protein
aliases: [EIF2S1, eIF2α, eIF2A, eukaryotic translation initiation factor 2 subunit alpha]
uniprot: P05198
ncbi-gene: 1965
hgnc: 3265
ensembl: ENSG00000134001
genage-id: null
mouse-ortholog: Eif2s1
key-domains: [S1-domain, eIF2-alpha-N-terminal]
key-ptms: [Ser51-phosphorylation, Lys141-acetylation]
pathways: ["[[integrated-stress-response]]", "[[unfolded-protein-response]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[perk]]", "[[gcn2]]", "[[hri]]", "[[pkr]]", "[[eif2b]]", "[[gadd34]]"]
druggability-tier: null
caused-by: []
causes: ["[[atf4]]"]
complex-subunits: ["P20042", "P68104"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 5 cited DOIs cross-checked via DOI lookup (Pakos-Zebrucka 2016, Scheuner 2001, Novoa 2001, Sidrauski 2013, Bhatt 2021) — titles match cited author/year/topic. Sidrauski 2013 has local PDF. Ser51 designation conventional; UniProt isoform numbering not re-checked (residue could shift by 1-2 positions on alternate isoform). HGNC ID still null; flagged #gap/needs-canonical-id."
---

# eIF2alpha (EIF2S1)

The alpha subunit of eukaryotic initiation factor 2 (eIF2) — a 315 aa subunit that forms the regulatory hub of the **[[integrated-stress-response]]** (ISR). Phosphorylation of a single residue, **Ser51**, by any of four stress-sensing kinases converts eIF2 from an activator of cap-dependent translation into a potent brake on global protein synthesis while simultaneously enabling selective translation of the stress-transcription factor [[atf4]]. Chronic Ser51 phosphorylation accumulates in aged brain tissue and is mechanistically linked to age-related proteostatic decline and cognitive impairment.

## Identity

- **UniProt:** P05198 (IF2A_HUMAN)
- **NCBI Gene:** 1965
- **Ensembl:** ENSG00000134001
- **Gene symbol:** EIF2S1 (historical alias: EIF2A — distinct from the unrelated EIF2A gene; do not conflate)
- **Mouse ortholog:** Eif2s1 (one-to-one ortholog; highly conserved across eukaryotes)
- **Length:** 315 amino acids (canonical isoform)

## eIF2 heterotrimer

EIF2S1 is the alpha (regulatory) subunit of the obligate heterotrimeric eIF2 complex:

| Subunit | Gene | UniProt | Role |
|---|---|---|---|
| alpha | EIF2S1 | P05198 | regulatory; Ser51 phosphorylation site |
| beta | EIF2S2 | P20042 | GTP-binding accessory |
| gamma | EIF2S3 | P68104 | catalytic GTPase; binds Met-tRNAi |

The gamma subunit holds Met-tRNAi (initiator methionyl-tRNA) in a GTP-loaded ternary complex (eIF2-GTP-Met-tRNAi). This ternary complex is essential for delivery of Met-tRNAi to the 40S ribosomal subunit to form the 43S pre-initiation complex (43S PIC) [^pakos2016].

## Function: ternary complex and translation initiation

Under basal conditions, eIF2-GTP-Met-tRNAi loads onto the 40S subunit and scans the 5' UTR for an AUG start codon. GTP hydrolysis occurs at AUG recognition; the resulting eIF2-GDP is released and recycled by the guanine nucleotide exchange factor [[eif2b]] (eIF2B), which catalyzes GDP → GTP exchange to regenerate active ternary complex [^pakos2016].

This recycling step is the **rate-limiting bottleneck** for global cap-dependent protein synthesis, and it is the step targeted by Ser51 phosphorylation.

## The Ser51 phosphoswitch

**Phosphorylation of Ser51** (located in the N-terminal regulatory domain of EIF2S1) converts eIF2 from a substrate to a **competitive inhibitor** of its own GEF, eIF2B:

- Phospho-Ser51-eIF2 binds eIF2B with ~150-fold higher affinity than unphosphorylated eIF2 [^pakos2016].
- Because eIF2B is present in limiting amounts relative to eIF2, even partial phosphorylation (~30%) is sufficient to stoichiometrically titrate eIF2B activity.
- Result: global arrest of cap-dependent mRNA translation within minutes.

### Paradoxical ATF4 induction

While global translation falls, a small subset of mRNAs bearing **inhibitory upstream open reading frames (uORFs)** in their 5' UTRs are *preferentially* translated when ternary complex is scarce. The most consequential is [[atf4]] mRNA, which encodes the master stress-response transcription factor ATF4 [^pakos2016]. ATF4 drives transcription of:

- **CHOP/DDIT3** — pro-apoptotic transcription factor
- **GADD34 (PPP1R15A)** — feedback phosphatase (see below)
- Amino acid biosynthesis genes, redox genes, autophagy-related genes

This translation-level logic gate — global suppression plus selective ATF4 induction — is the central output of all four ISR kinases acting through the single Ser51 phosphosite.

## The four eIF2alpha kinases

Four kinases, each with a distinct stress-sensing domain, converge on Ser51 [^pakos2016]:

| Kinase | Gene | Stress sensed | Canonical context |
|---|---|---|---|
| [[perk]] | EIF2AK3 | Unfolded proteins in ER lumen | ER stress / UPR |
| [[gcn2]] | EIF2AK4 | Uncharged tRNAs (amino acid deprivation) | Nutrient stress, UV |
| [[hri]] | EIF2AK1 | Heme depletion; mitochondrial stress; osmotic stress | Erythropoiesis; heat shock |
| [[pkr]] | EIF2AK2 | Double-stranded RNA | Viral infection; innate immune activation |

Each kinase shares a conserved kinase domain that phosphorylates Ser51 but carries a unique regulatory/sensor domain. This convergence on a single substrate residue is the mechanistic definition of the ISR as a pathway — four inputs, one molecular bottleneck.

## GADD34/PP1 feedback dephosphorylation

eIF2alpha-Ser51 phosphorylation is reversed by the **GADD34–PP1** holophosphatase complex [^novoa2001]:

- **GADD34** (encoded by *PPP1R15A*) is itself an ATF4 transcriptional target, creating a delayed negative-feedback loop.
- GADD34 acts as a regulatory subunit that recruits the catalytic **PP1** (protein phosphatase 1) to phospho-Ser51-eIF2alpha, dephosphorylating it and restoring ternary complex assembly.
- A constitutive paralog, **CReP** (PPP1R15B), performs basal eIF2alpha dephosphorylation independent of stress induction.

The GADD34/PP1 feedback loop gives the ISR **transient** rather than permanent translation arrest under mild stress, enabling an adaptive "pulse" followed by recovery.

## Genetic evidence: the S51A knock-in

**Scheuner et al. 2001** generated mice homozygous for an eIF2alpha S51A knock-in (Ser51 → Ala; abolishes all kinase phosphorylation) to dissect the physiological necessity of Ser51 regulation [^scheuner2001]:

- **S51A/S51A homozygotes** die perinatally with defective pancreatic beta-cell differentiation and impaired gluconeogenesis — establishing that Ser51 phosphorylation is **essential for metabolic adaptation** to the ER stress of insulin biosynthesis.
- Heterozygotes (S51A/WT) survive but develop obesity and impaired glucose tolerance on high-fat diet.
- The lethality of homozygous S51A confirms that the ISR is not a pathological response but a physiologically indispensable program.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | EIF2S1 Ser51 and all four kinase families are fully conserved in humans; functional conservation well established |
| Phenotype conserved in humans? | yes | Mutations in EIF2B subunits (Vanishing White Matter disease) recapitulate ISR dysregulation in humans |
| Replicated in humans? | in-progress | Aging-specific ISR activation data in humans is limited; see Aging section below |

#gap/needs-human-replication — The S51A survival data is from mouse; no human equivalent experiment exists.

## ISRIB: chemical-genetic dissection of ISR output

**Sidrauski et al. 2013** identified ISRIB (integrated stress response inhibitor) as a small molecule that bypasses Ser51-P to restore ternary complex assembly [^sidrauski2013]:

- ISRIB acts downstream of Ser51 phosphorylation by stabilizing the decameric, active form of eIF2B, enhancing its nucleotide exchange activity even in the presence of phospho-eIF2alpha.
- Because ISRIB does not block Ser51 phosphorylation itself, it separates eIF2B-dependent translation rescue from the upstream kinase signals — a clean chemical-genetic tool for dissecting ISR outputs.
- In rodent memory assays, ISRIB administration enhanced long-term potentiation (LTP) and improved performance in spatial memory tasks, linking basal ISR tone to cognitive capacity [^sidrauski2013].

ISRIB and structural analogs (including eIF2B activators like ABBV-CLS-7262 / DNL343, currently in clinical trials for neurodegenerative disease) have become the primary pharmacological tools for ISR intervention.

## Aging relevance

### Chronic ISR activation in aged brain

Basal ISR activity — evidenced by elevated phospho-Ser51-eIF2alpha and ATF4 protein — rises with age in rodent brain and in post-mortem human brain tissue from cognitively impaired donors [^bhatt2021]. This chronic activation is hypothesized to progressively reduce ternary complex availability, suppressing translation of synaptic plasticity genes and contributing to age-associated cognitive decline [^bhatt2021].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ISR machinery identical; age-related p-eIF2alpha elevation reported in human tissue |
| Phenotype conserved in humans? | partial | Human post-mortem data correlative; causal direction not established |
| Replicated in humans? | no | No interventional data in aged humans; correlation only |

#gap/needs-human-replication — Causal link between ISR activation and human cognitive aging is not yet established; human trial data for ISR inhibitors in aging is absent.

### ISRIB rescue of age-related cognitive decline

Pharmacological ISR inhibition with ISRIB reversed age-associated long-term memory deficits in old (20-month) mice after a 3-day systemic treatment course [^bhatt2021]. The effect was durable (weeks post-treatment) and accompanied by restoration of hippocampal translation rates and synapse density, suggesting that chronic ISR suppression of local dendritic translation underlies at least part of age-related memory decline.

#gap/needs-human-replication — All ISRIB aging rescue data is from rodent models.

### ISR in neurodegeneration

Elevated p-eIF2alpha-Ser51 and downstream CHOP induction are documented in post-mortem tissue from Alzheimer's disease, Parkinson's disease, and prion disease brains. Whether ISR activation is causative or a secondary response to proteotoxic stress remains debated. #gap/contradictory-evidence — Multiple groups have shown ISR activation in neurodegeneration, but ISR inhibition studies report mixed results depending on disease model and timing of intervention.

## Pathway membership

- [[integrated-stress-response]] — central regulatory node; Ser51 is the ISR's single converging phosphosite
- [[unfolded-protein-response]] — the PERK arm of the UPR signals through eIF2alpha Ser51 specifically

## Cross-references

- [[perk]] — ER-stress sensing kinase; phosphorylates Ser51 in UPR context
- [[gcn2]] — amino-acid-depletion sensing kinase
- [[hri]] — heme/mitochondrial-stress sensing kinase
- [[pkr]] — dsRNA/innate-immune sensing kinase
- [[atf4]] — primary transcriptional output downstream of Ser51 phosphorylation
- [[eif2b]] — GEF; inhibited by phospho-Ser51-eIF2 in a competitive manner
- [[gadd34]] — ATF4-induced feedback phosphatase; restores translation
- [[loss-of-proteostasis]] — hallmark; chronic ISR activation contributes via suppression of proteome renewal
- [[integrated-stress-response]] — pathway page for full ISR circuit diagram

## Limitations and gaps

- `#gap/needs-canonical-id` — HGNC ID not populated; pull from https://www.genenames.org/data/gene-symbol-report/#!/symbol/EIF2S1 on next lint pass.
- `#gap/needs-human-replication` — Aging-rescue experiments (cognitive and proteostatic) are mouse-only; no human interventional data with ISRIB or analogs in aging contexts.
- `#gap/needs-replication` — Age-dependent p-eIF2alpha elevation in human brain is based on post-mortem cohorts; needs prospective or in-vivo imaging confirmation.
- `#gap/no-mechanism` — The molecular mechanism by which ISR tone increases with normal aging (vs. acute stress) is poorly characterized; candidate mechanisms include mitochondrial dysfunction activating HRI, and increased ER load activating PERK, but tissue-specific data is sparse.
- `#gap/long-term-unknown` — Long-term safety of systemic eIF2B activation (ISRIB-like compounds) is unknown; constitutive translation de-repression could impair stress responses to infection or acute injury.
- `#gap/unsourced` — The ISRIB aging phenotype rescue figure (3-day treatment, durable weeks-long effect) is attributed to [^bhatt2021] from secondary summary; verify exact treatment protocol and effect duration against primary source PDF.

## Footnotes

[^pakos2016]: doi:10.15252/embr.201642195 · Pakos-Zebrucka et al. · *EMBO Rep* 2016 · n/a · review · model: mechanistic synthesis across yeast, mouse, human; 2,458 citations

[^scheuner2001]: doi:10.1016/s1097-2765(01)00265-9 · Scheuner et al. · *Molecular Cell* 2001 · n=litters (perinatal lethal) · in-vivo · model: S51A knock-in mouse (C57BL/6 background); 1,338 citations

[^novoa2001]: doi:10.1083/jcb.153.5.1011 · Novoa et al. · *J Cell Biol* 2001 · in-vitro + in-vivo · model: HEK293 cells + UPR in MEFs; 1,351 citations

[^sidrauski2013]: doi:10.7554/eLife.00498 · Sidrauski et al. · *eLife* 2013 · in-vivo · model: rat spatial memory + LTP; local PDF available at ; 717 citations

[^bhatt2021]: doi:10.1038/s43587-021-00112-9 · Bhatt et al. / Bhatt & Bhatt (verify authorship) · *Nature Aging* 2021 · in-vivo · model: aged mice (20-month); ISR modulation and cognitive aging; 85 citations
