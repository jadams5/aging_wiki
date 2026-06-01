---
type: pathway
aliases: [Hedgehog signaling, Hh pathway, SHH pathway, hedgehog]
kegg: hsa04340
reactome: R-HSA-5358351
wikipathways: null
key-nodes:
  - "[[shh]]"
  - "[[ihh]]"
  - "[[dhh]]"
  - "[[ptch1]]"
  - "[[ptch2]]"
  - "[[smo]]"
  - "[[sufu]]"
  - "[[gli1]]"
  - "[[gli2]]"
  - "[[gli3]]"
upstream:
  - "[[wnt-beta-catenin]]"
  - "[[primary-cilium]]"
downstream:
  - "[[cyclin-d1]]"
  - "[[bcl2]]"
  - "[[stem-cell-exhaustion]]"
hallmarks:
  - "[[stem-cell-exhaustion]]"
  - "[[disabled-macroautophagy]]"
sens-categories: []
druggability-tier: 1
caused-by: []
causes:
  - "[[stem-cell-exhaustion]]"
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 9 cited DOIs cross-checked via DOI lookup (Briscoe 2013, Nüsslein-Volhard 1980, Ingham 2001, Sekulic 2012, Teglund 2010, Jaks 2008, Zhu 2025, Li 2014, Marigo PTCH cloning DOI documented as wrong) — titles match cited author/year/topic. The Marigo 1996 PTCH cloning DOI (10.1126/science.273.5275.622) is correctly flagged as resolving to a prion paper; left as documented gap. Briscoe 2013 and Zhu 2025 have local PDFs."
---

# Hedgehog signaling pathway

The **Hedgehog (Hh) signaling pathway** is a conserved developmental pathway that governs cell proliferation, tissue patterning, and stem cell maintenance from embryogenesis through adulthood. In mammals it operates through three secreted ligands — Sonic Hedgehog ([[shh|SHH]]), Indian Hedgehog ([[ihh|IHH]]), and Desert Hedgehog ([[dhh|DHH]]) — that relay signals via the twelve-pass transmembrane receptor Patched ([[ptch1|PTCH1]]/[[ptch2|PTCH2]]) to the GPCR-class transducer Smoothened ([[smo|SMO]]), ultimately activating GLI-family transcription factors. The primary cilium is the obligate signaling organelle in vertebrates. In aging, Hh activity declines in multiple stem cell compartments — intestinal crypts, airway basal cells, and skin appendages — contributing to impaired tissue renewal and stem cell exhaustion.

> **Naming note:** This page covers the Hedgehog *pathway*. Individual protein pages (e.g., `molecules/proteins/shh.md`, `molecules/proteins/ptch1.md`) are implicit stubs; the canonical `[[hedgehog-pathway]]` wikilink resolves here.

## Identity and canonical database entries

| Field | Value |
|---|---|
| KEGG (human) | hsa04340 |
| Reactome | R-HSA-5358351 ("Signaling by Hedgehog"; 5-star curated) |
| WikiPathways | not recorded (#gap/needs-canonical-id) |
| Druggability tier | 1 — clinical SMO inhibitors exist (vismodegib, sonidegib) |

## Canonical pathway mechanics

### Ligand biogenesis and release

All three Hh ligands undergo autocatalytic cleavage and dual lipid modification — N-terminal palmitoylation and C-terminal cholesterol addition — producing a lipid-tethered active form [^briscoe2013]. Release from producing cells requires the multi-pass membrane protein Dispatched (DISP1); the co-secreted chaperone Scube2 facilitates solubilization and long-range spread. PTCH1 is itself a Hh transcriptional target, forming a feedback loop that limits signal range [^briscoe2013].

### Pathway OFF state (no ligand)

In the absence of Hh ligand, PTCH1 localizes to the primary cilium and catalytically suppresses SMO by restricting its access to the ciliary membrane — likely through regulation of oxysterol/cholesterol availability rather than direct contact [^briscoe2013]. Downstream:

1. GLI2 and GLI3 are phosphorylated sequentially by PKA, CK1, and GSK3β.
2. Phosphorylated GLI proteins are recognized by the SCF(β-TrCP) E3 ubiquitin ligase complex.
3. GLI3 (and to a lesser degree GLI2) is partially proteolyzed to a C-terminally truncated **repressor form (GLI3R)** that translocates to the nucleus and represses target genes.
4. SUFU retains full-length GLI in the cytoplasm, preventing spurious activation.

GLI1 is exclusively an activator (no repressor processing); its expression is Hh-dependent and it amplifies pathway output. GLI2 is the primary transactivator on initial Hh stimulation; GLI1 sustains and amplifies the response [^briscoe2013].

### Pathway ON state (ligand present)

1. SHH/IHH/DHH binds PTCH1 (with co-receptors CDON, BOC, GAS1 enhancing affinity).
2. Ligand–PTCH1 complex is internalized and degraded; PTCH1 exits the cilium.
3. SMO accumulates at the ciliary membrane and undergoes activating conformational change.
4. The SUFU–GLI complex is transported to the ciliary tip (via kinesin KIF7).
5. Full-length GLI2 and GLI3 are released from SUFU; GLI3R formation is suppressed.
6. Full-length GLI2 (and then GLI1) translocate to the nucleus and activate target genes.

**Primary target genes** (direct GLI binding at promoters): PTCH1, PTCH2, GLI1, HHIP, CCND1 (Cyclin D1), CCND2, BCL2 [^briscoe2013]. The autocrine feedback (GLI1 and PTCH1 as targets) is a defining feature of Hh-responsive tissue.

### Cilium dependency

Vertebrate Hh signaling is absolutely dependent on the primary cilium as a signaling compartment — SMO activation, SUFU–GLI dissociation, and GLI processing all occur at the ciliary tip [^briscoe2013]. This cilia-dependency is not conserved in insects (*Drosophila* Hh signaling is cilia-independent), creating a potential model-organism confound for genetic studies.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (vertebrate cilium-dependent form) |
| Phenotype (stem cell maintenance) conserved in humans? | yes / partial |
| Replicated in humans (aging loss-of-Hh)? | in-progress |

## Aging: stem cell compartment decline

### Intestinal crypts

In the intestinal epithelium, Hh signals are produced by villus enterocytes and act on subepithelial myofibroblasts (mesenchyme) to modulate the niche for [[lgr5]]-positive intestinal stem cells. Stromal Hh signaling regulates the Paneth cell / transit-amplifying cell ratio in the crypt [^ingham2001]. In *Drosophila* midgut models, impaired Ci (the fly GLI ortholog) degradation via the Debra E3 ligase causes excessive intestinal stem cell proliferation phenocopying aging-associated midgut dysplasia [^li2014]. #gap/needs-human-replication — the specific contribution of Hh decline to human intestinal aging has not been established in human trials or organoid aging models.

### Airway basal cells

SHH is expressed by club cells and ciliated airway epithelium; PTCH1 and SMO are expressed in airway basal stem cells. Hh signaling supports basal cell proliferation and proper mucociliary differentiation in the proximal airway. Clinical evidence suggests that cigarette smoke exposure and aging reduce airway SHH expression, contributing to impaired airway epithelial repair #gap/unsourced — supporting primary citations are needed for quantitative Hh-decline-with-age claims in human airway.

### Skin / hair follicle

GLI2 and GLI1 are required for hair follicle morphogenesis and cycling. Lgr5+ hair follicle stem cells display autocrine Hh signaling as a maintenance mechanism; impaired Hh activity correlates with follicular quiescence and thinning in aging skin [^jaks2008]. #gap/needs-replication — the Jaks 2008 paper identifies Lgr5+ follicle stem cells; the specific Hh-decline-in-aging-follicles claim requires a dedicated aging-focused citation.

### Meibomian glands (ocular)

A 2025 study identified Hedgehog and EGF signaling as key regulators of meibomian gland stem cell proliferation in the eyelid, showing that age-related decline in these pathways — combined with increased stromal collagen — contributes to meibomian gland dysfunction (MGD), the leading cause of dry eye disease [^zhu2025]. This is one of the best-characterized examples of a gland-type stem cell compartment with direct evidence of age-dependent Hh signal decline in a mammalian tissue. #gap/needs-human-replication — the main mechanistic data are from mouse lineage tracing; human aging glands show the MGD phenotype but causal Hh-loss intervention evidence is absent.

## Disease associations

### Gorlin syndrome (basal cell nevus syndrome)

Germline loss-of-function mutations in *PTCH1* cause **Gorlin syndrome** (OMIM #109400): multiple basal cell carcinomas (BCCs) in childhood/young adulthood, medulloblastoma (desmoplastic subtype), calcified falx cerebri, jaw keratocysts, and skeletal anomalies. PTCH1 is a classical two-hit tumor suppressor — loss of the second allele in skin or cerebellum drives Hh hyperactivation [^teglund2010]. Estimated frequency: 1 in 30,000–40,000.

### Sporadic basal cell carcinoma

~70–80% of sporadic BCCs carry either somatic PTCH1 inactivating mutations or activating SMO mutations, making the Hh pathway the dominant oncogenic driver in the most common human cancer [^sekulic2012]. UV-signature mutations predominate (C→T transitions at dipyrimidine sites). SMO gain-of-function mutations (e.g., SMO W535L) are found in ~10% of BCCs; they render SMO constitutively active and, critically, vismodegib-resistant.

### Medulloblastoma (SHH subgroup)

The SHH-subgroup (~25% of medulloblastomas) is driven by Hh pathway activation via PTCH1 LoF, SMO GoF, or SUFU LoF. SUFU germline mutations occur in infantile desmoplastic cases. Vismodegib and sonidegib have activity but resistance via SMO mutation or downstream GLI amplification limits durability [^teglund2010].

## Therapeutic landscape

### Approved SMO inhibitors

| Drug | Brand | Approval | Indication | Mechanism |
|---|---|---|---|---|
| Vismodegib | Erivedge | FDA 2012 | Advanced/metastatic BCC | SMO competitive inhibitor (binds cysteine-rich domain) |
| Sonidegib | Odomzo | FDA 2015 | Locally advanced BCC | SMO inhibitor (same binding pocket) |

Vismodegib's approval in a randomized Phase II trial (ERIVANCE BCC) showed 30% objective response rate in metastatic BCC and 43% in locally advanced BCC [^sekulic2012]. Key toxicities: muscle spasms (~72%), alopecia (~64%), dysgeusia (~55%), weight loss — largely on-target effects from Hh inhibition in normal tissues. These toxicities are relevant to any aging application.

### Preclinical GLI antagonists

GANT58 and GANT61 are small-molecule GLI inhibitors that act downstream of SMO, maintaining efficacy against SMO-mutant resistance [^teglund2010]. Currently preclinical; no IND filings identified as of the knowledge cutoff.

### Pathway-activation strategies (aging context)

For tissue regeneration in aging, the therapeutic goal is the **opposite** of oncology: *restoring* Hh activity in declined stem cell niches. Recombinant SHH protein and small-molecule SMO agonists (e.g., SAG — Smoothened Agonist) activate the pathway in ex vivo models and are in early research use #gap/unsourced — no clinical trials for aging-associated Hh restoration identified on ClinicalTrials.gov as of 2026-05.

## Cross-pathway interactions

- **[[wnt-beta-catenin]]** — Hh and Wnt co-regulate intestinal crypt homeostasis. Hh target gene SFRP1 is a Wnt antagonist, creating mutual pathway crosstalk [^katoh2006]. Reciprocal inhibition in specific compartments (Hh high → Wnt suppressed in villus; Wnt high → Hh suppressed in crypt stem cells).
- **[[notch-pathway]]** — In intestinal epithelium, Notch and Hh collaborate to maintain the transit-amplifying compartment and specify secretory cell fate. #gap/unsourced — specific epistasis studies needed.
- **[[pi3k-akt-pathway]]** — PI3K–AKT can phosphorylate and stabilize GLI proteins independently of canonical SMO activity (non-canonical Hh signaling). This provides a SMO-inhibitor resistance bypass. #gap/needs-replication in human tissues.
- **Primary cilium biology** — Ciliogenesis regulators (BBS proteins, IFT complexes) are upstream controllers of Hh competence; ciliary dysfunction (ciliopathies) mimics Hh pathway loss. Age-related primary cilium shortening in some cell types #gap/unsourced.

## Limitations and gaps

| Gap | Tag |
|---|---|
| Age-dependent Hh decline in human intestinal crypts: no quantitative primary-source citation | #gap/unsourced |
| Age-dependent Hh decline in human airway epithelium: no quantitative primary-source citation | #gap/unsourced |
| SAG / recombinant SHH aging trials: none identified | #gap/needs-human-replication |
| Non-canonical Hh (PI3K bypass) in human aging tissues | #gap/needs-replication |
| WikiPathways ID for Hedgehog | #gap/needs-canonical-id |
| Marigo 1996 PTCH cloning DOI (10.1126/science.273.5275.622) was flagged in the task brief but resolves to a prion yeast paper in both Crossref and a local paper archive — correct DOI needed before citing the PTCH cloning paper | #gap/needs-canonical-id |
| Hair follicle Hh decline quantitative claim: needs dedicated aging study citation | #gap/needs-replication |
| Long-term safety of SMO agonist use in human aging (Hh restoration) | #gap/long-term-unknown |

## Related entities

- [[wnt-beta-catenin]] — crosstalk in intestinal crypt homeostasis
- [[notch-pathway]] — co-regulation of transit-amplifying compartment
- [[stem-cell-exhaustion]] — downstream consequence of Hh decline in aging
- [[primary-cilium]] — obligate signaling organelle (stub)
- [[gli1]] — transcriptional effector / target gene (stub)
- [[gli2]] — primary activator GLI (stub)
- [[gli3]] — bifunctional activator/repressor (stub)
- [[ptch1]] — Hh receptor; Gorlin syndrome tumor suppressor (stub)
- [[smo]] — pathway transducer; drug target (stub)
- [[sufu]] — negative regulator; retained in cytoplasm (stub)
- [[shh]] — ligand; most-studied Hh family member (stub)
- [[vismodegib]] — approved SMO inhibitor (stub)
- [[sonidegib]] — approved SMO inhibitor (stub)

## Footnotes

[^briscoe2013]: doi:10.1038/nrm3598 · Briscoe J & Thérond PP · *Nat Rev Mol Cell Biol* 2013 · review · n=N/A · model: vertebrate/human · canonical mechanistic reference for Hh pathway; locally downloaded PDF in a local paper archive

[^nusslein1980]: doi:10.1038/287795a0 · Nüsslein-Volhard C & Wieschaus E · *Nature* 1980 · in-vivo (Drosophila) · foundational segmentation genetics screen identifying *hedgehog* locus; ~4347 citations · closed access, not downloaded

[^ingham2001]: doi:10.1101/gad.938601 · Ingham PW & McMahon AP · *Genes Dev* 2001 · review · n=N/A · model: Drosophila + vertebrate · OA (diamond); ~2984 citations

[^sekulic2012]: doi:10.1056/NEJMoa1113713 · Sekulic A et al. · *N Engl J Med* 2012 · randomized (Phase II ERIVANCE BCC) · n=104 · model: humans · OA via PMC; ~1408 citations; primary approval study for vismodegib in advanced BCC

[^teglund2010]: doi:10.1016/j.bbcan.2010.01.003 · Teglund S & Toftgård R · *Biochim Biophys Acta Rev Cancer* 2010 · review · n=N/A · model: human tumors + mouse models · closed access; ~432 citations; covers Gorlin syndrome, SMO mutations, GLI inhibitors

[^jaks2008]: doi:10.1038/ng.239 · Jaks V et al. · *Nat Genet* 2008 · in-vivo · n=N/A · model: mouse hair follicle · Lgr5+ follicle stem cells; Hh autocrine signaling; ~N/A citations per archive

[^zhu2025]: doi:10.1038/s41467-025-56907-6 · Zhu X et al. · *Nat Commun* 2025 · in-vivo + histology · n=N/A · model: mouse + human eyelid tissue · Hh/EGF decline + collagen accumulation in aging meibomian gland; locally downloaded PDF in a local paper archive

[^li2014]: doi:10.1016/j.stemcr.2013.12.011 · Li Z et al. · *Stem Cell Reports* 2014 · in-vivo (Drosophila) · n=N/A · model: Drosophila midgut · Debra-Ci axis in intestinal stem cell aging phenocopy

[^katoh2006]: PMID:16328026 · Katoh Y & Katoh M · *Int J Mol Med* 2006 · review · model: human gastrointestinal cancer cell lines · SFRP1 as Hh target gene suppressing Wnt
