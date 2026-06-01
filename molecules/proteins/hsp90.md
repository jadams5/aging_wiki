---
type: protein
aliases: [HSP90AA1, HSPC1, HSPCA, HSP86, "heat shock protein 90-alpha", "heat shock 90 kDa protein 1 alpha", "90 kDa heat shock protein"]
uniprot: P07900
ncbi-gene: 3320
hgnc: 5253
ensembl: ENSG00000080824
genage-id: null   # no GenAge-human entry for HSP90AA1 as of 2026-05-07; #gap/needs-canonical-id — check GenAge at next lint pass
pathways: ["[[heat-shock-response]]", "[[unfolded-protein-response]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
complex-subunits: []   # HSP90 functions in an asymmetric homodimer; co-chaperones (HOP/STIP1, p23/PTGES3, AHA1/AHSA1, CDC37) are not subunits of a stable heteromer — documented in body
is-noncoding-rna: false
druggability-tier: 2   # Open Targets Platform (2026-05-07, ENSG00000080824): SM tractability = Advanced Clinical (TRUE), Approved Drug (FALSE) — no FDA-approved HSP90 inhibitor exists; multiple Phase 2/3 oncology compounds (tanespimycin, ganetespib) qualify as tier-2 (advanced clinical probe, no approved drug). Aging-context tier also 2 — no aging-validated drug. See body for rationale.
gtex-aging-correlation: null   # #gap/needs-tissue-expression — GTEx age-correlation data not retrieved for this seed; consult sops/finding-tissue-expression.md at next update pass
mr-causal-evidence: not-tested   # no published MR study found for HSP90AA1 as aging endpoint; no instrument described in aging GWAS literature
caused-by: ["[[hsf1]]"]   # HSF1 transactivates HSP90AA1 under stress; constitutive expression also driven by baseline transcription
causes: ["[[akt]]", "[[hif1a]]", "[[p53]]", "[[cdk4]]", "[[hsf1]]"]   # representative client proteins + HSF1 negative feedback
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Whitesell 1994, Taipale 2012, Walther 2015, Biebl & Buchner 2019 verified against local PDFs. Rutherford & Lindquist 1998 and Hipp 2019 are not_oa — qualitative claims from those two sources retained but flagged. Canonical-DB IDs (UniProt P07900, NCBI Gene 3320, HGNC 5253, Ensembl ENSG00000080824) verified via live API calls 2026-05-07. Open Targets druggability re-queried and corrected to tier-2."
---

> Verified 2026-05-07 against primary source PDFs (Whitesell 1994, Taipale 2012, Walther 2015, Schopf/Biebl & Buchner 2019) and canonical DBs (UniProt REST, NCBI Gene, HGNC REST, Open Targets Platform). Rutherford & Lindquist 1998 and Hipp 2019 not_oa — qualitative claims from these sources retained with gap tags. See log.md for corrections made.

# HSP90 (HSP90AA1 — inducible cytosolic isoform)

> **Paralog disambiguation:** This page covers **HSP90AA1** (P07900), the stress-inducible cytosolic alpha isoform. For the constitutive cytosolic beta isoform (HSP90AB1, P08238), the ER-resident paralog (GRP94/HSP90B1, P14625), and the mitochondrial paralog (TRAP1, Q12931), see the paralog table below. Those three paralogs do not yet have dedicated wiki pages — implicit stubs flagged in summary.

HSP90 (heat shock protein 90) is one of the most abundant cytosolic proteins in eukaryotic cells, constituting 1–2% of total cellular protein under basal conditions and rising further under stress [^schopf2019]. It operates as an obligate homodimer and is the central hub of a large chaperone network: whereas HSP70 handles the bulk of newly synthesized polypeptides and thermally denatured proteins, HSP90 specializes in the late-stage maturation and conformational activation of a specific, highly selective client proteome — principally protein kinases, transcription factors, and steroid hormone receptors in their near-native but not fully active states [^taipale2012]. In aging, HSP90 becomes a critical node in the proteostasis collapse hypothesis: as HSF1-driven transcription weakens with age and the burden of misfolded or aggregation-prone proteins grows, the chaperone buffering capacity of the HSP90/HSP70 network is progressively overwhelmed [^hipp2019].

## HSP90 paralogs in humans

| Paralog | UniProt | Gene | Compartment | Expression pattern | Wiki page |
|---|---|---|---|---|---|
| HSP90AA1 (HSP90α, HSP86) | P07900 | HSP90AA1 | Cytosol/nucleus | Stress-inducible + constitutive; HSF1-driven surge under stress | this page |
| HSP90AB1 (HSP90β, HSC84) | P08238 | HSP90AB1 | Cytosol/nucleus | Constitutive; minimally stress-inducible; more abundant than HSP90AA1 at baseline | no page yet — #stub |
| GRP94 (HSP90B1, endoplasmin) | P14625 | HSP90B1 | ER lumen | ER-resident; UPR-induced; clients include integrins and TLRs | no page yet — #stub |
| TRAP1 (HSP90L) | Q12931 | TRAP1 | Mitochondrial matrix | Mitochondrial; involved in metabolic regulation and UPRmt | no page yet — #stub |

The two cytosolic isoforms (alpha and beta) share ~85% sequence identity and overlapping client portfolios but differ in regulation: HSP90AA1 is strongly stress-inducible via HSF1, while HSP90AB1 maintains a large constitutive pool. Most pharmacological HSP90 inhibitors cannot discriminate between the two cytosolic isoforms. This page treats HSP90AA1 as the primary canonical entity given its direct regulation by [[hsf1]] and greater stress-responsiveness, which are most relevant to the aging biology context.

## Domain architecture and chaperone cycle

HSP90 is a 732-residue protein (~90 kDa) organized into three domains that drive an ATP-dependent conformational cycle [^schopf2019]:

| Domain | Approximate residues | Function |
|---|---|---|
| N-terminal domain (NTD) | 1–236 | ATP/ADP binding (Bergerat fold); site of competitive inhibition by geldanamycin/17-AAG/ganetespib |
| Middle domain (MD) | 271–616 | Client protein binding surface; co-chaperone interaction; catalytic contribution to ATP hydrolysis |
| C-terminal domain (CTD) | 628–732 | Homodimerization; MEEVD motif (residues 727–732) docking site for TPR-domain co-chaperones (HOP/STIP1, CHIP/STUB1, PPP5C) |

The HSP90 chaperone cycle proceeds through well-defined conformational states [^schopf2019]:

1. **Open/apo state:** The HSP90 homodimer adopts an open V-shaped conformation with low ATPase activity; clients can bind in this state.
2. **ATP binding:** ATP binding to the NTD initiates transient NTD dimerization ("closed" state), trapping the client in a partially structured conformation.
3. **Co-chaperone modulation:** AHA1 (AHSA1) binds the MD and stimulates ATPase activity; p23 (PTGES3) binds the closed NTD dimer and stabilizes it, slowing ATP hydrolysis and prolonging client dwell time; CDC37 (kinase-specific co-chaperone) stabilizes kinase clients during loading.
4. **ATP hydrolysis:** Hydrolysis of ATP to ADP + Pi drives the power stroke that releases the client in its mature conformation.
5. **Client release:** ADP exchange (facilitated by NEFs or spontaneous dissociation) resets the cycle.

**HOP (STIP1) serves as the physical adaptor** between the HSP70 and HSP90 chaperone systems: HOP binds simultaneously to the EEVD motifs of HSP70 and HSP90 via its TPR domains, enabling hand-off of partially folded clients from HSP70 to HSP90 for late-stage maturation [^schopf2019].

**Key PTMs (HSP90AA1, UniProt P07900):**

- Phosphorylation: Ser-231, Ser-252, Ser-263, Thr-5, Thr-7 (contextual; stress-regulated)
- Acetylation: Lys-58, Lys-84, Lys-443, Lys-458, Lys-489, Lys-585 — multiple sites; acetylation state modulates co-chaperone binding and client affinity
- S-nitrosylation: Cys-598 — nitric oxide modification; inhibits ATPase activity in some contexts

## Client proteome

HSP90 is distinctive among chaperones for the selectivity and identity of its clients. Unlike HSP70 — which recognizes exposed hydrophobic stretches in any unfolded protein — HSP90 binds "metastable" clients: proteins that are nearly folded but require HSP90-assisted conformational activation to reach their active states [^taipale2012].

Taipale et al. 2012 quantified the HSP90 client interaction network using the LUMIER/BACON in-cell luminescence assay (not mass spectrometry/crosslinking), systematically testing 420 kinase clones (355 unique proteins, 69% of human kinome), 1,303 TF clones (843 unique, 79% of human TFs), and 498 E3 ligase clones (426 unique). The study identified "almost 400 client proteins" total, including 193 kinases (61% of the kinase clones tested, representing >half the human kinome) [^taipale2012]:

| Client class | Interaction rate (Taipale 2012) | Examples | Functional consequence of HSP90 inhibition |
|---|---|---|---|
| Protein kinases | 61% of tested kinase clones (193/420 clones; 193 of 355 unique kinases) | Akt ([[akt]]), Raf, CDK4, HER2/ERBB2, MET, EGFR | Kinase destabilization and proteasomal degradation |
| Transcription factors | ~7% of tested TFs (58/843 unique TFs) — much lower than previously assumed | HSF1 ([[hsf1]]), HIF-1α, p53 ([[p53]]), AR, GR | Loss of TF activation capacity |
| Steroid hormone receptors | Subset of TF group; historically best-studied HSP90 clients | GR (NR3C1), ER-α, PR, AR | Receptor destabilization; hormone unresponsiveness |
| E3 ubiquitin ligases | 31% of tested E3 ligases (117/372 unique) | MDM2, CHIP/STUB1 | Impaired ubiquitin pathway function |
| Kinase-regulatory proteins | (not quantified in this study) | CDC37, TSC1/TSC2 | Signaling cascade disruption |

This broad kinome coverage makes HSP90 a central "hub" in signal transduction: inhibiting HSP90 simultaneously degrades dozens of oncoproteins, which is both its therapeutic appeal in cancer and the mechanistic basis for its many adverse effects [^whitesell1994].

**The metastable client concept and aging:** Aging-associated changes in protein stability (accumulated somatic mutations, oxidative damage, post-translational noise) push many client proteins toward the unstable side of the metastability spectrum, increasing dependence on HSP90 buffering [^hipp2019]. This creates a "chaperone addiction" phenotype in aged cells analogous to non-oncogene addiction in cancer cells.

## Aging biology

### Proteostasis buffering capacity and collapse

HSP90 is a core component of what Hipp, Kasturi & Hartl (2019) call the "proteostasis network" — the integrated system of chaperones, disaggregases, the ubiquitin-proteasome system (UPS), and autophagy that collectively maintain proteome integrity [^hipp2019]. In this framework, HSP90 and HSP70 together constitute the primary chaperone buffering capacity for the cytosolic proteome.

Two lines of evidence link HSP90/chaperone network capacity to aging:

1. **Age-associated insolubilization:** Walther et al. 2015 performed SILAC quantitative proteomics across the lifespan of *C. elegans* N2 (WT), profiling >5,000 proteins across days 1–22. Of 1,083 proteins quantified in ≥3 of 4 experiments, 975 accumulated significantly in the insoluble fraction by day 12. Aggregation initiates mainly after day 6 of adulthood (post-reproductive), not at reproductive maturity per se [^walther2015]. The major driver of aggregate load is protein abundance exceeding critical solubility thresholds ("supersaturation"), not intrinsic aggregation propensity or a specific chaperone substrate signature — abundant proteins dominate aggregate mass. Small HSPs are markedly enriched in aggregates and the paper argues this represents a protective sequestration strategy to slow proteostasis decline, not simple chaperone network collapse. **Not yet replicated at equivalent proteome-wide resolution in humans** #gap/needs-human-replication.

2. **HSF1 decline:** HSF1 transcriptional output — the primary driver of stress-inducible HSP90AA1 and HSP70 expression — declines with age (see [[hsp70]] for the quantitative data from Heydari 1993 and Locke 1996). The consequence for HSP90 specifically is reduced induction capacity for the inducible alpha isoform; the constitutive HSP90AB1 isoform is less affected, but constitutive levels alone are insufficient to handle the increased misfolded-protein burden of aged cells.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | HSP90 chaperone cycle and HSF1 regulation highly conserved |
| Phenotype conserved in humans? | partial | Protein aggregation in aging demonstrated in *C. elegans*; human proteome-wide aging insolubility not yet shown at equivalent resolution |
| Replicated in humans? | no | #gap/needs-human-replication |

### HSP90 as an evolutionary capacitor

Rutherford & Lindquist (1998) demonstrated a foundational principle: HSP90, by buffering the effects of genetic variants that would otherwise alter protein folding, acts as an evolutionary "capacitor" — masking genetic variation under normal conditions and releasing it when chaperone capacity is compromised (by stress, pharmacological inhibition, or aging) [^rutherford1998]. When HSP90 function is reduced, cryptic genetic variation is exposed, producing novel phenotypes.

This capacitor function has direct relevance to aging: as HSP90 buffering capacity declines with age (through HSF1 attenuation and increased client load), previously tolerated "cryptic" protein variants may become destabilizing, contributing to age-associated loss of cellular robustness. The hypothesis predicts that aged organisms exhibit broader phenotypic variance than young organisms with identical genotypes — a prediction with some empirical support in model organisms but not yet tested rigorously in humans. #gap/needs-human-replication #gap/no-mechanism (quantitative contribution of capacitor release vs. other aging mechanisms is not established)

## Pharmacology — HSP90 inhibitors

### Mechanism of pharmacological inhibition

All first- and second-generation HSP90 inhibitors target the ATP-binding pocket of the NTD, competing with ATP binding and locking HSP90 in its open, client-releasing conformation. This prevents chaperone cycle completion, causing client proteins to be routed to proteasomal degradation via CHIP/STUB1-mediated ubiquitination. **Note on attribution:** Whitesell et al. 1994 [^whitesell1994] established that geldanamycin binds HSP90 and disrupts HSP90–client complexes via affinity precipitation; the paper did not characterize the binding site at the NTD ATP pocket. The structural basis of NTD binding was established by Stebbins et al. 1997 (Nat. Struct. Biol. 4:803–808), which is not yet in this wiki. #gap/needs-citation

### Inhibitor classes

| Compound | Class | Development stage | Notes |
|---|---|---|---|
| Geldanamycin | Benzoquinone ansamycin | Preclinical (toxic) | First HSP90 inhibitor identified; Whitesell et al. 1994 [^whitesell1994]; hepatotoxicity limits clinical use |
| 17-AAG (tanespimycin) | Geldanamycin analog | Phase 2 (multiple oncology indications; not approved) | ~10-fold less hepatotoxic than geldanamycin; first HSP90 inhibitor in clinical trials; tumor responses observed in hematologic malignancies |
| 17-DMAG (alvespimycin) | Geldanamycin analog | Phase 1/2 | Water-soluble; similar mechanism; discontinued due to modest efficacy |
| Ganetespib (STA-9090) | Resorcinol | Phase 3 (lung cancer; failed primary endpoint) | Non-ansamycin scaffold; favorable PK; Phase 3 GALAXY-2 trial in NSCLC negative |
| AUY922 (luminespib) | Isoxazole-resorcinol | Phase 2 | Potent, well-tolerated in early trials; multiple Phase 2 programs; not approved |
| Onalespib (AT13387) | Resorcinol | Phase 2 | Long-duration HSP90 inhibition; prostate cancer combination trials |

**Druggability note:** HSP90AA1 druggability-tier has been corrected to **tier-2** (Open Targets Platform 2026-05-07, ENSG00000080824: SM tractability = Advanced Clinical TRUE, Approved Drug FALSE). No FDA-approved HSP90 inhibitor exists — ganetespib reached Phase 3 (GALAXY-2, NSCLC) but failed the primary endpoint; tanespimycin reached Phase 2 with responses in hematologic malignancies but was not approved. The seeder's tier-1 assignment was incorrect. For aging-context druggability, tier-2 also applies: high-quality preclinical probes exist but no aging-indication clinical compound.

### Aging-relevant pharmacological hypotheses

The aging-relevant pharmacology hypothesis is the *inverse* of the oncology strategy: rather than inhibiting HSP90 to kill cancer cells by destabilizing oncoproteins, aging biology suggests that **boosting or preserving HSP90/HSP70 chaperone capacity** in aged cells could ameliorate proteostasis collapse. Strategies include:

- **HSF1 activators** — pharmacologically elevating HSF1 activity to drive HSP90AA1 and HSP70 induction (see [[hsp70]] for arimoclomol/HSF1A context)
- **Reducing the misfolded protein burden** — autophagy inducers (rapamycin via [[mtor]] inhibition; see [[autophagy]]) to clear aggregates and relieve the HSP90 client queue
- **Selective co-chaperone modulation** — AHA1/AHSA1 inhibitors that slow the HSP90 cycle, prolonging dwell time on clients and improving yield; explored in polyglutamine diseases preclinically

None of these strategies has aging-specific human evidence. #gap/needs-human-replication #gap/long-term-unknown

## Key interactors and co-chaperones

| Interactor | Type | Functional context |
|---|---|---|
| [[hsf1]] | TF client + upstream regulator | HSP90 sequesters HSF1 monomers at baseline, preventing HSR activation; also a client for HSF1 conformational activation; forms a negative-feedback loop with [[hsp70]] |
| [[hsp70]] | Chaperone partner | HSP70 hands off partially-folded clients to HSP90 via HOP/STIP1; the two chaperones operate in series for kinase and TF maturation |
| HOP (STIP1) | TPR-domain adaptor co-chaperone | Physical bridge between HSP70 EEVD and HSP90 MEEVD motifs; mediates client hand-off |
| p23 (PTGES3) | Co-chaperone | Stabilizes the NTD-dimerized "closed" HSP90 complex; slows ATPase, prolonging client association |
| AHA1 (AHSA1) | Co-chaperone | Stimulates HSP90 ATPase activity; accelerates the chaperone cycle |
| CDC37 | Kinase-specific co-chaperone | Recruits and stabilizes kinase clients on HSP90; required for kinome client loading |
| [[chip]] (STUB1) | E3 ubiquitin ligase | Binds HSP90 MEEVD via TPR domain; routes unfolded/non-foldable clients to ubiquitin-proteasome degradation |
| [[akt]] | Client kinase | Requires HSP90 for stability and membrane localization; inhibited by HSP90 inhibitors |
| [[p53]] | Client TF | Mutant p53 is an HSP90 client; wt p53 maturation also involves HSP90 |
| [[hif1a]] | Client TF | HIF-1α stability and activity depend on HSP90; links HSP90 to hypoxia and metabolic stress responses |
| TSC1-TSC2 | Client complex | The TSC1/TSC2 heterocomplex (see [[tsc1-tsc2]]) is an HSP90 client; connects HSP90 to mTOR pathway regulation |

## Limitations and open questions

- **Paralog-specific aging functions.** The relative contributions of HSP90AA1 (inducible) versus HSP90AB1 (constitutive) to aging-related proteostasis changes are not resolved. Most studies use pan-HSP90 antibodies or inhibitors that cannot distinguish the isoforms. #gap/needs-replication
- **Aging-specific human evidence is absent.** All chaperone capacity decline data in the context of HSP90 specifically comes from model organisms (*C. elegans*, yeast, rodents) or in-vitro cell culture. No proteome-wide profiling of HSP90 client stability in aged human tissue has been published. #gap/needs-human-replication
- **Capacitor release in human aging.** The evolutionary capacitor concept (Rutherford & Lindquist) predicts increased phenotypic variance in aged individuals. This has not been tested at the molecular level in human aging cohorts. #gap/no-mechanism
- **Druggability for aging is unexplored.** All clinical-stage HSP90 inhibitors were developed for oncology. An aging indication — which would require preserving or enhancing HSP90 function rather than inhibiting it — has no clinical-stage compound. The pharmacological strategy (activation vs. inhibition) for an aging intervention is not established. #gap/long-term-unknown
- **Compartment-specific roles.** GRP94 (ER) and TRAP1 (mitochondria) mediate distinct aging-relevant functions (ER stress, UPRmt) that are not covered here and lack wiki pages. #stub — seed GRP94 and TRAP1 pages as R27 proteostasis arm candidates.
- **Interaction with mTOR/proteostasis axis.** mTOR inhibition extends lifespan partly via autophagy induction; the degree to which this relieves HSP90 client queue pressure is mechanistically important but not quantified. #gap/no-mechanism

## Footnotes

[^whitesell1994]: doi:10.1073/pnas.91.18.8324 · Whitesell L, Mimnaugh EG, De Costa B, Myers CE, Neckers LM (1994) "Inhibition of heat shock protein HSP90-pp60v-src heteroprotein complex formation by benzoquinone ansamycins: essential role for stress proteins in oncogenic transformation" · PNAS 91(18):8324–8328 · in-vitro · model: NIH 3T3/v-src and 3T3/tsvsrc transformed fibroblasts; PC-3M prostate carcinoma; Jurkat T cells; CHP-100 Ewing sarcoma; rabbit reticulocyte lysate; affinity precipitation with immobilized geldanamycin derivative · first demonstration that geldanamycin binds HSP90 and disrupts src-HSP90 heteroprotein complexes; does NOT characterize the NTD ATP-binding site (that attribution requires Stebbins 1997) · 1,439 citations (100th percentile) · OA: green (PMC) · archive: downloaded

[^rutherford1998]: doi:10.1038/24550 · Rutherford SL & Lindquist S (1998) "Hsp90 as a capacitor for morphological evolution" · Nature 396(6709):336–342 · in-vivo + genetic · model: Drosophila melanogaster (pharmacological HSP90 inhibition + *Hsp83* partial loss-of-function) · HSP90 reduction reveals cryptic genetic variation producing diverse morphological phenotypes; defines HSP90 as an evolutionary capacitor buffering genetic variation under normal conditions · 2,297 citations (100th percentile) · not OA · archive: not_oa · **Unverified against full text** — #gap/no-fulltext-access; qualitative capacitor claims on this page are drawn from secondary literature characterizations of this paper

[^taipale2012]: doi:10.1016/j.cell.2012.06.047 · Taipale M, Krykbaeva I, Koeva M, Kayatekin C, Westover KD, Karras GI & Lindquist S (2012) "Quantitative Analysis of Hsp90-Client Interactions Reveals Principles of Substrate Recognition" · Cell 150(5):987–1001 · in-vitro (original research — LUMIER/BACON in-cell luminescence interaction assay) · model: 293T stable cell line expressing Renilla luciferase-tagged HSP90β; 420 kinase clones (355 unique, 69% of human kinome), 1,303 TF clones (843 unique, 79% of human TFs), 498 E3 ligase clones (426 unique) tested · 193 kinases (61% of tested, representing >half the human kinome) interacted with HSP90; only ~7% of TFs (58/843) interacted — much lower than previously assumed; 31% of E3 ligases (117/372) interacted; interaction spans "almost 400 client proteins" total (stated in discussion); defined metastability/thermodynamic instability as key substrate recognition principle · 873 citations (100th percentile) · OA: bronze · archive: downloaded

[^schopf2019]: doi:10.1101/cshperspect.a034017 · Biebl MM & Buchner J (2019) "Structure, Function, and Regulation of the Hsp90 Machinery" · Cold Spring Harb Perspect Biol 11(8):a034017 · review · comprehensive description of HSP90 domain architecture (NTD/MD/CTD), ATPase-driven chaperone cycle, co-chaperone functions (Sti1/HOP, p23, Aha1, Cdc37), organelle-specific paralogs (GRP94, TRAP1), and pharmacological inhibition · 289 citations · OA: bronze · archive: downloaded · **Note:** seeder incorrectly listed authors as "Schopf FH, Biebl MM & Buchner J"; the actual authors are Biebl MM & Buchner J only (two authors)

[^walther2015]: doi:10.1016/j.cell.2015.03.032 · Walther DM, Kasturi P, Zheng M, Pinkert S, Vecchi G, Ciryam P, Morimoto RI, Dobson CM, Vendruscolo M, Mann M & Hartl FU (2015) "Widespread Proteome Remodeling and Aggregation in Aging C. elegans" · Cell 161(4):919–932 · in-vivo · model: *C. elegans* N2 (Bristol strain, WT); age-fractionated cohorts days 1–22; SILAC quantitative proteomics · >5,000 proteins profiled; 975 of 1,083 proteins (quantified in ≥3 of 4 experiments) accumulated significantly in the insoluble fraction at day 12 relative to day 1; aggregation initiates mainly after day 6 of adulthood (post-reproductive); abundant proteins make the largest contribution to aggregate load by mass (not chaperone substrates per se); small HSPs strongly enriched in aggregates — interpreted as a protective sequestration response, not solely a consequence of chaperone network saturation · 582 citations (100th percentile) · OA: bronze · archive: downloaded

[^hipp2019]: doi:10.1038/s41580-019-0101-y · Hipp MS, Kasturi P & Hartl FU (2019) "The proteostasis network and its decline in ageing" · Nat Rev Mol Cell Biol 20(7):421–435 · review · comprehensive synthesis of the chaperone network (HSP70, HSP90, TRiC/CCT, small HSPs), UPS, and autophagy as integrated proteostasis system; aging-related decline of each component; therapeutic strategies · 1,522 citations (100th percentile) · not OA · archive: not_oa · **Unverified against full text** — #gap/no-fulltext-access; proteostasis network framework claims on this page are drawn from abstract and secondary characterizations of this review
