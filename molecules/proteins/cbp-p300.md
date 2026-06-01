---
type: protein
aliases: [CBP/p300, CREBBP/EP300, KAT3, KAT3A/KAT3B, p300/CBP, "p300 family"]
uniprot: Q92793
ncbi-gene: 1387
hgnc: 2348
complex-subunits: [Q92793, Q09472]
ensembl: ENSG00000005339
druggability-tier: 1
caused-by: []
causes: []
pathways: ["[[p53-pathway]]", "[[pi3k-akt-pathway]]", "[[sirtuin]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[loss-of-proteostasis]]", "[[deregulated-nutrient-sensing]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Local-PDF claims verified end-to-end: Gu 1997 (p53 K-sites, DNA-binding activation), Petrij 1995 (RSTS1 cohort), Roelfsema 2005 (RSTS2 cohort — consistent with ep300.md), Lee & Finkel 2009 (autophagy mechanism — consistent with ep300.md), Rodgers 2005 (PGC-1α SIRT1/acetylation axis), Heintzman 2009 (H3K27ac/p300 enhancer ChIP). Domain coordinates verified against UniProt Q92793 (CREBBP) and Q09472 (EP300). Non-OA sources (Thompson 2004, Brunet 2004) not verifiable — tagged #gap/no-fulltext-access. Pending sources (Karanam 2006, Lasko 2017, Chen 2002) not yet downloaded — tagged #gap/no-fulltext-access where load-bearing. Canonical-database identity fields (UniProt accession, NCBI gene IDs, HGNC) not independently re-verified beyond API query."
---

# CBP / p300 (CREBBP / EP300 family)

> **Division of labor:** This page is the **family-level overview** for the KAT3 (CREBBP/EP300) paralog pair, covering shared domain architecture, catalytic mechanism, the substrate landscape relevant to aging, and the family-wide pharmacology. **[[ep300]]** is the canonical home for p300-specific findings (autophagy regulation, Pietrocola 2015 spermidine mechanism, Yao 1998 KO phenotype); those claims are cross-referenced here, not restated. No separate atomic page yet exists for CREBBP; CREBBP-specific findings are covered here.

CBP (CREB-binding protein, encoded by *CREBBP*) and p300 (E1A-binding protein, encoded by *EP300*) are the two members of the KAT3 family of lysine acetyltransferases — large (~265 kDa) nuclear scaffold proteins that function simultaneously as catalytic writers of histone and non-histone acetylation marks and as physical bridging co-activators between sequence-specific transcription factors and the RNA Pol II machinery. Together they acetylate hundreds of substrates including [[p53]], [[foxo1]]/[[foxo3]]/[[foxo4]], [[pgc-1alpha]], NF-κB (see [[nf-kb]]), and all four core histones; their H3K27ac mark is the primary epigenomic indicator of active enhancers genome-wide. Multiple aging-relevant pathways — [[p53-pathway]], FOXO/[[sirtuin]] axis, [[autophagy]] suppression — converge on CBP/p300 acetyltransferase activity. The family is pharmacologically tractable via selective HAT-domain inhibitors (A-485, inobrodib/CCS1477) now in clinical-oncology trials.

## Members

| Member | UniProt | NCBI Gene | HGNC | Length | MW | Atomic page |
|---|---|---|---|---|---|---|
| CREBBP (CBP, KAT3A) | Q92793 | 1387 | 2348 | 2,442 aa | ~265 kDa | covered here |
| EP300 (p300, KAT3B) | Q09472 | 2033 | 3373 | 2,414 aa | ~265 kDa | [[ep300]] (verified-partial) |

Both entries are Swiss-Prot (manually reviewed). Overall sequence identity between CREBBP and EP300 is ~63%; identity in the catalytic HAT domain is ~75% [UniProt Q92793, Q09472 — accessed 2026-05-05]. Both are one-to-one orthologs in mouse (*Crebbp*, *Ep300*), with high sequence conservation throughout.

## Domain architecture

CBP and EP300 share the same modular domain organization (N→C); residue numbers given for CREBBP (2,442 aa) followed by approximate EP300 equivalents where they differ meaningfully [UniProt Q92793; see [[ep300]] for EP300-specific residue table]:

| Domain | CREBBP residues (approx.) | Function |
|---|---|---|
| TAZ1 (zinc-finger) | ~347–433 | Binds HIF1A, CITED2, and other transactivators bearing the LPQL/VXXLL motif |
| KIX domain | ~587–666 | Binds phospho-CREB, MYB, and other activation domains; site of Menke-Hennekam missense mutations |
| Bromodomain (BRD) | ~1,085–1,192 | Reads acetyl-lysine on histones; required for chromatin recruitment; clinical BRD-inhibitor target |
| HAT domain (KAT3A) | ~1,323–1,700 | Catalytic acetyltransferase; acetylates histones and non-histone substrates; also performs crotonylation, butyrylation, propionylation, lactylation on histone lysines |
| ZZ zinc-finger | ~1,702–1,750 | Conserved with EP300; function not fully characterized |
| TAZ2 zinc-finger | ~1,765–1,846 | Binds p53 (TAD2), nuclear hormone receptors, and other TF activation domains |
| IBiD / NCBD | ~2,059–2,117 | Binds IRF-3, MYB, NCOA2; disordered region involved in innate immune gene activation |

The bromodomain and HAT domain are the two principal drug targets. The BRD reads the HAT's own acetylation marks as well as histone marks, creating a positive-feedback loop that stabilizes CBP/p300 at active enhancers.

## Catalysis: autoacetylation activates the HAT domain

CBP and EP300 belong to the GNAT superfamily of acetyltransferases but have a structurally distinct HAT domain. A critical regulatory feature is **autoacetylation of an activation loop** within the HAT domain: in EP300, Thompson et al. 2004 showed that the activation loop (residues ~1536–1572) must be autoacetylated for full HAT activity [^thompson2004]. Karanam et al. 2006 extended this by kinetic and mass-spectrometric mapping of autoacetylation sites within the p300 HAT domain, showing that multiple lysines within the activation loop are sequentially autoacetylated in a mechanism-based fashion, and that this autoacetylation is kinetically coupled to substrate acetylation [^karanam2006]. The biological consequence is that p300/CBP HAT activity is sensitive to acetyl-CoA availability (the acetyl donor) — connecting their activity to cellular metabolic state. #gap/needs-replication — whether autoacetylation is the primary regulatory switch in vivo (vs co-activator recruitment, phosphorylation, or allosteric effects) is not fully resolved; most evidence is from purified protein in vitro.

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | yes — Thompson 2004 and Karanam 2006 used human p300 protein |
| Phenotype tested in humans? | not directly; downstream substrate acetylation is the phenotypic readout |

## Substrate landscape — aging-relevant targets

CBP/p300 acetylate hundreds of non-histone proteins. The table below summarizes the most aging-relevant substrates, with the key lysine sites and primary citation.

| Substrate | Key acetylation sites | Effect of acetylation | Deacetylase | Primary source |
|---|---|---|---|---|
| [[p53]] K370/K372/K373/K381/K382 | K382 (principal) | Stabilizes p53; displaces MDM2 from K382-overlapping ubiquitination site; activates sequence-specific DNA binding | [[sirt1]] (K382); HDAC1 | Gu & Roeder 1997 [^gu1997] |
| [[foxo3]] / [[foxo1]] / [[foxo4]] | Multiple (K242/K245/K262 on FOXO3) | Modulates FOXO transcriptional output; p300 is the writer; SIRT1 is the dominant eraser in the deacetylation direction | [[sirt1]] | Brunet 2004 [^brunet2004] |
| [[pgc-1alpha]] | 13 sites: K77/K144/K183/K253/K270/K277/K320/K346/K412/K441/K450/K757/K778 | Inhibits PGC-1α transcriptional co-activator activity on gluconeogenic genes; SIRT1 deacetylation restores activity. Writer identity not established by Rodgers 2005 — p300/CBP as acetyltransferase is inferred from the family's known substrate scope, not demonstrated in this paper. | [[sirt1]] | Rodgers 2005 [^rodgers2005] #gap/needs-replication |
| NF-κB p65 (RelA) | K310 (principal); K221/K218 | K310ac enhances NF-κB transcriptional activity; K218/K221ac promotes nuclear export / dissociation from DNA | SIRT1/HDAC3 | Chen 2002 [^chen2002] |
| Histone H3K18, H3K27 | H3K27ac marks active enhancers | H3K27ac distinguishes active enhancers from poised; marks cis-regulatory elements genome-wide | HDAC1/2 | Heintzman 2009 [^heintzman2009] |
| ATG5, ATG7, ATG8/LC3, ATG12 | Multiple cytoplasmic Lys | Acetylation suppresses autophagy initiation; p300 knockdown induces autophagy | — (spermidine competes for HAT active site) | Lee & Finkel 2009 [^lee2009] |

### p53 acetylation — the canonical substrate

Gu and Roeder 1997 established that p300 directly acetylates the C-terminal regulatory domain of p53 — specifically the C-terminal 30 amino acids (residues 363–393) — in a biochemically purified system and in cells [^gu1997]. Using a synthetic C-terminal peptide (residues 364–389) and amino-terminal peptide sequencing, the paper identified five preferentially acetylated lysines: K370, K372, K373, K381, and K382 (K382 most strongly labeled; K386 was explicitly shown to be unacetylated relative to background). Acetylation of these five lysines markedly stimulates p53 sequence-specific DNA binding in vitro (~20- to 30-fold over unmodified p53). The proposed mechanism is conformational: p53's C-terminal tail interacts with the central DNA-binding core in an auto-inhibitory fashion; acetylation neutralizes the positive charges in the tail, disrupting this tail–core interaction and allowing the DNA-binding domain to adopt an active conformation. The MDM2-competition mechanism (K382ac competing with ubiquitination) is attributed to later work not directly demonstrated in Gu 1997. This is the founding mechanistic link between CBP/p300 HAT activity and the [[p53-pathway]]. See [[p53]] for the canonical p53 aging-antagonistic-pleiotropy discussion.

### FOXO acetylation — the SIRT1 reciprocity axis

Brunet et al. 2004 showed that SIRT1 deacetylates FOXO3a (at K242, K245, K262) in response to oxidative stress, modulating its transcriptional output — specifically increasing expression of stress-resistance genes (GADD45) while decreasing pro-apoptotic targets [^brunet2004]. Because the reciprocal modification (acetylation) is the CBP/p300 "write" step in the FOXO regulatory cycle, this paper establishes CBP/p300 as the upstream writer whose activity is antagonized by SIRT1. The [[sirtuin]] / FOXO axis, heavily studied in [[deregulated-nutrient-sensing]] and longevity contexts, is thus directly upstream and downstream of CBP/p300 activity. See [[foxo3]] for a full FOXO aging discussion.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — study used human cell lines; FOXO3 and CBP/p300 are highly conserved |
| Phenotype conserved in humans? | partial — FOXO3 polymorphisms associate with human longevity; CBP/p300 role in human FOXO biology not directly tested in aging context |
| Replicated in humans? | no (aging endpoint) #gap/needs-human-replication |

### PGC-1α acetylation — metabolic aging axis

Rodgers et al. 2005 demonstrated that SIRT1 deacetylates PGC-1α at 13 specific lysines (K77, K144, K183, K253, K270, K277, K320, K346, K412, K441, K450, K757, K778 — mapped by tandem mass spectrometry in 293T cells) in an NAD⁺-dependent manner, and that SIRT1-mediated deacetylation activates PGC-1α's co-activator function for gluconeogenic gene programs (PEPCK, G6Pase) in fasted mouse liver [^rodgers2005]. The paper shows that acetylation of PGC-1α suppresses its transcriptional activity (nicotinamide-treated cells with hyperacetylated PGC-1α showed 24-fold repression of HNF4α-driven transcription). **Importantly, Rodgers 2005 does not identify the acetyltransferase responsible for PGC-1α acetylation** — the paper's focus is exclusively on SIRT1 as the eraser. The attribution of CBP/p300 as the writer is inferred from their broad substrate scope but is not demonstrated in this paper. #gap/needs-replication — CBP/p300 as the PGC-1α acetyltransferase requires direct experimental attribution. Rodgers 2005 used 4-week-old C57Bl/6 mice (fasted 24 h); generalization to aged animals and to human aging requires independent study.

### NF-κB (RelA) acetylation — inflammation axis

Chen et al. 2002 showed that CBP/p300 acetylate RelA (NF-κB p65) at K310 and K218/K221 — distinct sites with distinct functional consequences: K310ac is required for full NF-κB transcriptional activation; K218/K221ac promotes nuclear export [^chen2002]. Because chronic NF-κB activation is a driver of [[chronic-inflammation]] (inflammaging, see [[epigenetic-alterations]]), CBP/p300 HAT activity is a node linking acetylation to the inflammatory hallmarks of aging. SIRT1 deacetylates K310 to attenuate NF-κB signaling, providing a further SIRT1/CBP-p300 antagonism. #gap/needs-replication — whether this axis is aging-altered in human tissue is not directly established.

### H3K27ac — the active enhancer mark

Heintzman et al. 2009 performed ChIP-chip profiling of histone modifications across cell types and showed that active enhancers (versus gene bodies, promoters, or poised enhancers) are specifically marked by H3K27ac and H3K4me1 — and co-occupy with CBP/p300 [^heintzman2009]. This established H3K27ac as the primary epigenomic indicator of CBP/p300 occupancy at active cis-regulatory elements. The age-associated drift in the enhancer landscape — shifts in H3K27ac patterns at homeostasis-relevant loci — is hypothesized to contribute to the [[epigenetic-alterations]] hallmark, though the causal contribution of CBP/p300 activity changes specifically is not established. #gap/no-mechanism

### Autophagy substrate acetylation — link to [[ep300]]

Lee and Finkel 2009 showed that p300 (EP300) acetylates ATG proteins (ATG5, ATG7, ATG8/LC3, ATG12) in the cytoplasm, suppressing autophagy initiation; p300 knockdown or spermidine-mediated competitive inhibition de-represses autophagic flux [^lee2009]. This is the primary aging-relevant function detailed on [[ep300]] (verified-partial); the mechanism is canonical on that page. The relevant point at the family level: the substrate acetylation here is attributed primarily to EP300 based on siRNA specificity in Pietrocola 2015 (see [[ep300]]), not to CREBBP — a rare documented functional divergence between the two paralogs.

## Aging relevance

### CBP/p300 as a hub integrating stress, nutrient, and damage signals

The convergence of p53, FOXO, PGC-1α, and NF-κB all on CBP/p300 as an upstream writer means that the HAT activity of this family sits at the intersection of the major aging-relevant signaling axes. When CBP/p300 HAT activity is high (nutrient-replete, low-stress state), it tends to:
- Acetylate and thereby modulate FOXO target selectivity
- Acetylate and activate NF-κB
- Acetylate and suppress PGC-1α
- Acetylate and suppress ATG proteins (EP300-specific)

SIRT1 deacetylation reverses most of these — creating a CBP/p300 ↔ SIRT1 push/pull at multiple aging-relevant substrates. Caloric restriction and NAD+ repletion shift the balance toward SIRT1 activity and away from CBP/p300 dominance. Whether age-associated changes in CBP/p300 protein levels, HAT activity, or substrate access are causal contributors to aging (rather than downstream consequences of other changes) is not established. #gap/no-mechanism

### Spermidine and autophagy — EP300-specific (cross-reference to [[ep300]])

The spermidine → EP300 inhibition → autophagy induction mechanism is covered fully on [[ep300]] and cross-referenced here to avoid duplication. The key family-level note: Pietrocola 2015's siRNA screen distinguished EP300 as the relevant paralog for autophagy suppression (CBP/CREBBP knockdown did not phenocopy in that assay), making this the clearest documented functional divergence between the two paralogs. See [[spermidine]] and [[ep300]] for primary citations and quantitative claims.

### CBP/p300 haploinsufficiency and development — the gene-dosage context

Yao et al. 1998 showed that *Ep300* homozygous null mice die embryonically (E9.5–E11.5) and that compound haploinsufficiency of both *Crebbp* and *Ep300* (double heterozygotes) is also embryonic lethal, demonstrating that the combined gene dose of CBP and p300 must exceed a threshold for normal development [^yao1998]. This gene-dosage sensitivity is directly relevant to disease (Rubinstein-Taybi syndrome; see below) and sets the safety boundary for pharmacological HAT inhibition — systemic suppression of both paralogs below the critical threshold is expected to be harmful. See [[ep300]] for full details on the Yao 1998 data (verified on that page).

## Disease: Rubinstein-Taybi syndrome (RSTS)

Rubinstein-Taybi syndrome is an autosomal-dominant developmental disorder caused by heterozygous loss-of-function mutations in either *CREBBP* (→ RSTS type 1) or *EP300* (→ RSTS type 2). Clinical features shared across subtypes: intellectual disability, broad thumbs and toes, characteristic craniofacial dysmorphology, and postnatal growth retardation.

- **RSTS1 (CREBBP):** Established by Petrij et al. 1995, who identified chromosome 16p13.3 deletions and point mutations in *CREBBP* as causative. The paper examined 16 patients by protein truncation test (PTT), finding truncated CBP proteins in 2, and also characterized chromosomal rearrangements/microdeletions in the 16p13.3 region [^petrij1995]. CREBBP mutations account for ~55–60% of genetically confirmed RSTS cases (per Roelfsema 2005 and later series).
- **RSTS2 (EP300):** Roelfsema et al. 2005 screened 92 RSTS patients and found 36 CREBBP and 3 EP300 mutations, establishing EP300 as a second causative locus [^roelfsema2005]. The CREBBP:EP300 mutation ratio of ~12:1 in that cohort is consistent with later larger series reporting ~55–60% CREBBP and ~8–10% EP300. Full details on the EP300 RSTS data are on [[ep300]] (verified against Roelfsema 2005 PDF).

The unequal disease frequencies (RSTS1 >> RSTS2) likely reflect both mutation ascertainment bias and potentially different phenotypic penetrance rather than different functional importance of the two paralogs.

## Pharmacology

### A-485 — selective p300/CBP HAT inhibitor

Lasko et al. 2017 described **A-485** — a potent, selective p300/CBP HAT inhibitor with IC₅₀ ~60 nM against p300 in biochemical assays and ~5 nM in cellular activity assays — as a candidate anti-cancer agent [^lasko2017]. A-485 shows high selectivity over PCAF, GCN5, and other HAT family members. It selectively kills androgen receptor-driven prostate cancer cells and hematological cancer cells by depleting H3K27ac and suppressing AR/MYC target genes. No published aging-specific studies. In autophagy biology, A-485 is a higher-potency successor to C646 for interrogating CBP/p300 HAT functions. #gap/needs-replication — A-485 has not been tested in longevity studies in any organism.

### CCS1477 / Inobrodib — clinical-stage BRD inhibitor

CCS1477 (inobrodib) targets the **bromodomain** (not the HAT domain) of CBP/p300. Currently in Phase 1/2 trials for castration-resistant prostate cancer and hematological malignancies (e.g., NCT04068597). As a BRD inhibitor, it prevents CBP/p300 from reading acetyl-lysine at enhancers, disrupting transcriptional co-activation downstream of BRD occupancy, without directly inhibiting HAT catalysis. Clinical proof-of-concept that CBP/p300 is pharmacologically tractable in humans is accumulating, though aging-specific endpoints are not yet studied. #gap/long-term-unknown

### C646 — EP300-selective HAT inhibitor (tool compound)

C646 (IC₅₀ ~1.6 µM vs EP300 HAT) is a well-validated research tool used in the autophagy-regulation studies described on [[ep300]]. It remains a tool compound only; not in clinical development.

### SIRT1 activators — indirect modulation of CBP/p300 substrates

Compounds activating SIRT1 (e.g., resveratrol, SRT2104, NMN-replete NAD+) effectively oppose CBP/p300-mediated acetylation at shared substrates (p53 K382, FOXO3, PGC-1α). This indirect pharmacology places the SIRT1-activator class (see [[sirt1]]) as functional CBP/p300 substrate antagonists at specific sites. The distinction matters: SIRT1 activation does not reduce global CBP/p300 activity or H3K27ac patterns at enhancers; it opposes specific substrate acetylation events.

## Limitations and gaps

- **CBP vs p300 attribution:** The majority of cell biology uses "p300/CBP" collectively and cannot attribute specific effects to one paralog. Genetic knockouts, isoform-selective inhibitors, or targeted point mutations are required to dissociate their contributions. Most claims on this page apply to both; see [[ep300]] for EP300-specific mechanistic dissection. #gap/contradictory-evidence
- **Aging causality:** Whether CBP/p300 HAT activity causally changes with organismal aging (rising, falling, or redistributing substrate acetylation) is not established in primary aging studies with genetic manipulation of the family. Age-associated observations are largely correlative or inferred from substrates (FOXO acetylation, H3K27ac drift). #gap/no-mechanism
- **CREBBP-specific aging studies:** GenAge-human and GenAge-models do not currently list CREBBP (as of 2026-05-04). No primary study directly manipulates *Crebbp* in a lifespan or healthspan context. All lifespan-relevant data comes from shared substrates or from EP300 specifically. #gap/needs-replication — a dedicated page for CREBBP aging phenotypes will require new primary evidence.
- **Autoacetylation in vivo:** The Thompson 2004 / Karanam 2006 autoacetylation mechanism is established with purified protein; whether fluctuations in intracellular acetyl-CoA levels modulate CBP/p300 HAT activity through this mechanism in a physiologically meaningful way in aged tissue is untested. #gap/no-mechanism
- **H3K27ac drift with age (causal role):** CBP/p300's role in writing H3K27ac positions them as suspects in age-associated enhancer remodeling, but causal evidence that CBP/p300 redistributes its enhancer occupancy as a cause (rather than consequence) of cellular aging is lacking. #gap/no-mechanism
- **Long-term HAT inhibitor safety:** Systemic chronic CBP/p300 HAT inhibition would be expected to have broad effects on tissue homeostasis, immune function, and haematopoiesis given the family's ubiquitous co-activator role. Long-term safety in healthy adults is unknown. #gap/long-term-unknown

## Cross-references

- [[ep300]] — paralog; canonical page for p300-specific findings (autophagy suppression, Pietrocola 2015, Yao 1998 KO data, spermidine mechanism)
- [[p53]] — substrate; CBP/p300 acetylates p53 K382; interactor on p53.md (verified)
- [[p53-pathway]] — pathway with CBP/p300 as a key p53-stabilizing co-activator
- [[foxo3]] — substrate; CBP/p300 acetylates FOXO3; antagonized by [[sirt1]]
- [[foxo1]] — substrate; same FOXO acetylation axis
- [[pgc-1alpha]] — substrate; CBP/p300 acetylation suppresses PGC-1α; SIRT1 deacetylation activates it
- [[sirt1]] — major functional antagonist; deacetylates multiple CBP/p300 substrates (p53, FOXO3, PGC-1α, NF-κB)
- [[nf-kb]] — substrate (RelA K310); CBP/p300 activates NF-κB-driven inflammatory transcription
- [[autophagy]] — suppressed by EP300-mediated ATG protein acetylation (see [[ep300]])
- [[spermidine]] — polyamine that competitively inhibits EP300 HAT activity; de-represses autophagy
- [[deregulated-nutrient-sensing]] — hallmark; FOXO and PGC-1α axes
- [[epigenetic-alterations]] — hallmark; H3K27ac enhancer landscape
- [[loss-of-proteostasis]] — hallmark; linked via autophagy suppression
- [[chronic-inflammation]] — linked via NF-κB RelA acetylation
- [[caloric-restriction]] — CR shifts SIRT1/CBP-p300 balance toward deacetylation at key substrates

## Footnotes

[^gu1997]: doi:10.1016/s0092-8674(00)80521-8 · Gu W & Roeder RG (1997) "Activation of p53 Sequence-Specific DNA Binding by Acetylation of the p53 C-Terminal Domain" · Cell 90(4):595–606 · in-vitro (biochemical + cell culture) · n=N/A (biochemical assays) · model: purified human p300 protein; Saos-2 and H1299 cells · 2,543 citations · local PDF: 

[^petrij1995]: doi:10.1038/376348a0 · Petrij F et al. (1995) "Rubinstein-Taybi syndrome caused by mutations in the transcriptional co-activator CBP" · Nature 376(6538):348–351 · observational (human genetics) · n=16 RSTS patients examined by protein truncation test (PTT); truncated proteins found in 2 patients; additional patients with chromosomal rearrangements/deletions also described; 16p13.3 as CREBBP locus established · 1,215 citations · local PDF: 

[^roelfsema2005]: doi:10.1086/429130 · Roelfsema JH et al. (2005) "Genetic Heterogeneity in Rubinstein-Taybi Syndrome: Mutations in Both the CBP and EP300 Genes Cause Disease" · Am J Hum Genet 76(4):572–580 · observational (human genetics) · n=92 RSTS patients; 36 CREBBP + 3 EP300 mutations found · 467 citations · local PDF:  (verified on [[ep300]])

[^thompson2004]: doi:10.1038/nsmb740 · Thompson PR et al. (2004) "Regulation of the p300 HAT domain via a novel activation loop" · Nat Struct Mol Biol 11(4):308–315 · in-vitro (biochemical, purified protein) · model: recombinant human p300 HAT domain · 417 citations · not OA; no local PDF (archive: not_oa) #gap/no-fulltext-access

[^karanam2006]: doi:10.1074/jbc.M608813200 · Karanam B et al. (2006) "Kinetic and Mass Spectrometric Analysis of p300 Histone Acetyltransferase Domain Autoacetylation" · J Biol Chem 281(52):40292–40301 · in-vitro (biochemical, mass spectrometry) · model: purified recombinant human p300 HAT domain · 91 citations · archive: pending download #gap/no-fulltext-access

[^brunet2004]: doi:10.1126/science.1094637 · Brunet A et al. (2004) "Stress-Dependent Regulation of FOXO Transcription Factors by the SIRT1 Deacetylase" · Science 303(5666):2011–2015 · in-vitro (cell culture + biochemical) · model: human 293T cells; mouse neuronal cells; IP-kinase assay · 3,185 citations · archive: not OA; no local PDF #gap/no-fulltext-access

[^rodgers2005]: doi:10.1038/nature03354 · Rodgers JT et al. (2005) "Nutrient control of glucose homeostasis through a complex of PGC-1α and SIRT1" · Nature 434(7029):113–118 · in-vivo + in-vitro · model: 4-week-old C57Bl/6 mouse liver (fasted 24 h / refed 24 h); Fao rat hepatocytes; 293T cells · primary finding: SIRT1 is the NAD⁺-dependent deacetylase for PGC-1α (13 acetylated lysines mapped by mass spec); acetyltransferase writer for PGC-1α NOT identified in this paper · 3,055 citations · local PDF: 

[^chen2002]: doi:10.1093/emboj/cdf660 · Chen L et al. (2002) "Acetylation of RelA at discrete sites regulates distinct nuclear functions of NF-κB" · EMBO J 21(23):6539–6548 · in-vitro (cell culture, biochemical) · model: HeLa and Jurkat cells; CBP and p300 co-transfections · 801 citations · archive: pending download; OA bronze #gap/no-fulltext-access

[^heintzman2009]: doi:10.1038/nature07829 · Heintzman ND et al. (2009) "Histone modifications at human enhancers reflect global cell-type-specific gene expression" · Nature 459(7243):108–112 · in-vitro (ChIP-chip in human cell lines) · model: 5 human cell lines (HeLa, GM06690, K562, ES, BMP4-induced ES); ChIP-chip for H3K4me1, H3K4me3, H3K27ac + p300 ChIP; H3K27ac + p300 co-occupancy marks active enhancers in cell-type-specific manner; genome-wide prediction of >55,000 enhancers · 2,518 citations · local PDF: 

[^lee2009]: doi:10.1074/jbc.M807135200 · Lee IH & Finkel T (2009) "Regulation of Autophagy by the p300 Acetyltransferase" · J Biol Chem 284(10):6322–6328 · in-vitro (cell culture) · model: HeLa cells · n=3 independent experiments · 261 citations · local PDF:  (verified on [[ep300]])

[^lasko2017]: doi:10.1038/nature24028 · Lasko LM et al. (2017) "Discovery of a selective catalytic p300/CBP inhibitor that targets lineage-specific tumours" · Nature 550(7674):128–132 · in-vitro + in-vivo (cell lines + mouse xenograft) · model: human prostate cancer and AML cell lines; mouse xenograft; IC₅₀ ~60 nM biochemical / ~5 nM cellular · 803 citations · archive: pending download; OA (PMC6050590) #gap/no-fulltext-access — IC₅₀ values not verified against full text; download pending

[^yao1998]: doi:10.1016/s0092-8674(00)81165-4 · Yao TP et al. (1998) "Gene Dosage-Dependent Embryonic Development and Proliferation Defects in Mice Lacking the Transcriptional Integrator p300" · Cell 93(3):361–372 · in-vivo (mouse, germline KO) · model: Ep300+/− and Ep300−/− on 129/Sv and 129×BL6 backgrounds · 1,001 citations · local PDF verified on [[ep300]]
