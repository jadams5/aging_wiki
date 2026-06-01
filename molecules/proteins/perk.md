---
type: protein
aliases: [EIF2AK3, PERK kinase, PKR-like ER kinase, HsPEK, PEK]
uniprot: Q9NZJ5
ncbi-gene: 9451
hgnc: 3255
ensembl: ENSG00000172071
genage-id: null
mouse-ortholog: Eif2ak3
key-domains: [lumenal-sensor, transmembrane, kinase-domain, insert-loop]
key-ptms: [Thr982-autophosphorylation, Tyr619-autophosphorylation, Thr802-AKT-phosphorylation]
pathways: ["[[integrated-stress-response]]", "[[unfolded-protein-response]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
caused-by: ["[[unfolded-protein-response]]"]
causes: ["[[integrated-stress-response]]", "[[eif2alpha]]", "[[atf4]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 5 cited DOIs cross-checked via DOI lookup (Harding 1999, Délépine 2000, Axten 2012, Krukowski 2020, Köhler 2014) — titles match cited author/year/topic. The user-supplied alternate DOI 10.1038/79281 confirmed as unrelated ('When the Human Genome Project and State Street collide'); the correct Délépine 2000 DOI is 10.1038/78085 and is used throughout. Délépine 2000 PDF locally available. UniProt Q9NZJ5 / NCBI 9451 / HGNC 3255 not re-checked against canonical databases."
---

# PERK (EIF2AK3)

PERK (PKR-like endoplasmic reticulum kinase; gene *EIF2AK3*) is a 1,116 aa single-pass ER transmembrane kinase and the ISR arm of the [[unfolded-protein-response]]. It senses misfolded protein accumulation in the ER lumen and responds by phosphorylating [[eif2alpha]] at Ser51, globally dampening cap-dependent translation while selectively amplifying stress-adaptive transcription via [[atf4]]. In aged tissues — particularly post-mitotic neurons — chronic ER stress drives sustained PERK activity, feeding forward through ATF4 → CHOP into senescence and apoptosis programs.

## Identity

- **UniProt:** Q9NZJ5 (E2AK3_HUMAN)
- **NCBI Gene:** 9451
- **HGNC:** 3255
- **Ensembl:** ENSG00000172071
- **Gene symbol:** EIF2AK3 (alias: PERK, PEK, HsPEK)
- **Mouse ortholog:** Eif2ak3 (one-to-one; highly conserved)
- **Length:** 1,116 amino acids (canonical isoform)
- **Topology:** Single-pass type I ER membrane protein; N-terminus lumenal, C-terminus cytoplasmic

## Domain structure

| Domain | Residues (approx.) | Function |
|---|---|---|
| Lumenal sensor domain | 30–514 | Detects misfolded proteins; regulated by BiP (GRP78) binding and release |
| Transmembrane helix | 515–535 | ER membrane anchor; enables oligomerization |
| Kinase domain | 536–1116 | Catalytic core; autophosphorylates and phosphorylates eIF2α-Ser51 |
| Insert loop | 647–888 | Substrate-recognition insertion within kinase domain; absent in IRE1α |

**Key PTMs:**
- **Thr982** — activation-loop autophosphorylation; required for full catalytic activity [^harding1999]
- **Tyr619** — autophosphorylation; dephosphorylated by PTP1B (negative feedback)
- **Thr802** — phosphorylated by AKT; inactivating signal coupling insulin/IGF-1 signaling to PERK suppression

## UPR sensor context

PERK is one of three ER-resident stress sensors that together constitute the [[unfolded-protein-response]]:

| Sensor | Branch | Immediate effector | Main outputs |
|---|---|---|---|
| **PERK** | ISR / translational | [[eif2alpha]] Ser51 phosphorylation | Global translation attenuation; ATF4 selective translation |
| IRE1α | Transcriptional / splicing | XBP1 mRNA splicing | ER biogenesis genes |
| ATF6 | Transcriptional | ATF6 proteolytic cleavage | Chaperone induction |

Under basal conditions, the ER chaperone BiP (GRP78) binds the PERK lumenal domain and keeps PERK monomeric and inactive. When misfolded proteins accumulate, BiP is titrated away to client proteins, releasing PERK to oligomerize, trans-autophosphorylate, and become catalytically active [^harding1999].

## Lumenal domain mechanism

The BiP-release model is the dominant but not sole mechanism. Structural studies indicate that the PERK lumenal domain can also directly engage misfolded protein clients, analogously to the yeast IRE1 lumenal domain. The relative contributions of indirect BiP sensing vs direct client engagement to PERK activation in vivo remain incompletely resolved. #gap/no-mechanism

## Signaling axis: PERK → eIF2α → ATF4

1. Active PERK phosphorylates [[eif2alpha]] at Ser51 → GDP-bound eIF2α inhibits the guanine nucleotide exchange factor eIF2B → global reduction of ternary complex assembly → suppression of cap-dependent translation [^harding1999].
2. Paradoxically, phospho-eIF2α selectively promotes translation of mRNAs with upstream ORFs (uORFs), most notably **[[atf4]]** (ATF4). ATF4 is the master transcriptional activator of the [[integrated-stress-response]] (ISR).
3. ATF4 targets include: amino acid biosynthesis genes, antioxidant programs (NRF2 targets), and — under sustained or severe stress — **CHOP** (DDIT3/GADD153), a pro-apoptotic / pro-senescence transcription factor.

The PERK → eIF2α → ATF4 arm is the ISR module within the UPR; the ISR can also be activated by three other eIF2α kinases (HRI, PKR, GCN2) in response to heme deficiency, dsRNA, and amino acid deprivation, respectively. These four kinases converge on the same Ser51 site — hence the "integrated" nomenclature.

## Aging relevance

### Chronic ER stress in aged neurons

Proteostasis capacity declines with age across tissues, but the effect is particularly pronounced in post-mitotic neurons that cannot dilute misfolded proteins by cell division [^krukowski2020]. In aged brains:

- Basal eIF2α phosphorylation is elevated relative to young controls.
- PERK activity is chronically, rather than transiently, elevated.
- Sustained PERK → ATF4 → CHOP signaling tips cells from adaptive toward apoptotic outcomes.
- Reduced cognitive function in aged mice tracks with elevated ISR tone; pharmacological ISR suppression with ISRIB (see Pharmacology) restores spatial and working memory [^krukowski2020].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — age-associated cognitive decline is universal; direct evidence that elevated PERK/eIF2α-P drives human neurodegeneration is correlative |
| Replicated in humans? | no — mouse model only for the ISRIB rescue; human ISR-aging data are observational #gap/needs-human-replication |

### Connection to neurodegenerative disease

Elevated phospho-eIF2α and PERK activation are observed in post-mortem brain tissue from Alzheimer's, Parkinson's, and prion disease patients. Whether PERK activity is causally upstream of neuronal loss or a downstream consequence of proteotoxic stress remains debated. #gap/contradictory-evidence

The ER stress / UPR activation in tauopathy models correlates with granulovacuolar degeneration, a hallmark of neurodegenerative progression [^kohler2014]. #gap/needs-human-replication

## Disease: Wolcott-Rallison syndrome

Loss-of-function mutations in *EIF2AK3* cause **Wolcott-Rallison syndrome (WRS)**, a rare autosomal recessive disorder [^delepine2000]:

- **Core features:** Permanent neonatal or early-infancy insulin-dependent diabetes; multiple epiphyseal dysplasia; growth retardation
- **Variable features:** Intellectual disability, hepatic dysfunction, exocrine pancreatic insufficiency, renal abnormalities
- **Genetic basis:** Two distinct EIF2AK3 mutations identified in the original mapping study — one producing a truncated protein lacking the catalytic domain, one causing a conserved missense in the kinase domain [^delepine2000]
- **Mechanism:** Beta-cell ER stress is uniquely high because of insulin biosynthesis load; PERK is the obligate sensor in this cell type. Without PERK, beta cells cannot mount an adaptive UPR and undergo apoptosis.

WRS establishes that PERK is non-redundant in human pancreatic beta-cell proteostasis. It also provides a natural precedent for the pancreatic toxicity seen with pharmacological PERK inhibition (see Pharmacology).

## Pharmacology

### PERK inhibitors: GSK2606414 and GSK2656157

**GSK2606414** (the first selective PERK inhibitor) was identified in a medicinal chemistry campaign at GlaxoSmithKline [^axten2012]:

- **Mechanism:** ATP-competitive; IC50 ~0.4 nM against PERK in biochemical assay; >600-fold selectivity over related kinases
- **In vivo:** Reduced tumor growth in xenograft models; produced neurological benefit in prion-infected mice (reduced spongiosis, improved motor performance) in proof-of-concept studies
- **On-target toxicity:** Pancreatic acinar cell atrophy and weight loss observed at therapeutically relevant doses — directly mechanistic, recapitulating the WRS phenotype. This has blocked clinical advancement.

**GSK2656157** — a second-generation analog with improved pharmacokinetic profile; similar efficacy and similar pancreatic toxicity profile.

Neither compound has entered clinical trials. The pancreatic liability is considered a mechanism-based class effect, not a compound-specific off-target issue. #gap/long-term-unknown

### ISRIB: downstream ISR reversal as a more tractable approach

**ISRIB** (Integrated Stress Response InhiBitor) acts downstream of PERK by stabilizing the eIF2B decameric complex, maintaining eIF2B GEF activity even when eIF2α is phosphorylated. This makes cells less sensitive to the translational consequences of PERK activation without blocking PERK kinase activity directly.

Advantages of ISRIB over direct PERK inhibition:
- Does not block the kinase domain → upstream adaptive signaling (e.g., ATF6/IRE1 branches) is preserved
- Pancreatic toxicity not observed at cognitive-rescue doses in mouse models [^krukowski2020]
- Reverses age-related cognitive decline in mice with a favorable safety window

ISRIB is an active investigational target but has not yet entered clinical trials for aging indications. #gap/needs-human-replication

See compound page [[isrib]] (implicit stub) for PubChem and dosing data.

## Pathway membership

- [[integrated-stress-response]] — PERK is the UPR-coupled ISR kinase; convergent with GCN2, HRI, PKR at eIF2α-Ser51
- [[unfolded-protein-response]] — one of three ER stress sensors alongside IRE1α and ATF6

## Key interactors

- [[eif2alpha]] (EIF2S1) — direct substrate; Ser51 phosphorylation is the defining catalytic output
- [[atf4]] — translationally upregulated downstream of eIF2α phosphorylation; master ISR transcription factor
- [[chop]] (DDIT3) — ATF4 target; pro-apoptotic under sustained PERK activation
- BiP/GRP78 (HSPA5) — lumenal negative regulator; release licenses PERK oligomerization
- [[p58ipk]] (DNAJC3) — cytoplasmic co-chaperone that inhibits PERK during the late/recovery phase of UPR

## Limitations and gaps

- `#gap/needs-human-replication` — Evidence that chronic PERK activity drives neuronal aging phenotypes in humans is correlative; no interventional human data.
- `#gap/contradictory-evidence` — Whether PERK activity in neurodegeneration is causal or reactive to existing proteotoxic load is unresolved.
- `#gap/no-mechanism` — The relative contributions of indirect BiP-titration vs direct misfolded-protein engagement to lumenal domain activation are not fully resolved in vivo.
- `#gap/long-term-unknown` — Chronic PERK inhibition safety data beyond rodent preclinical models are absent; no clinical trials.
- `#gap/needs-canonical-id` — GenAge ID for EIF2AK3 not confirmed; field left null pending verification against HAGR database.
- ISRIB compound page `[[isrib]]` is an implicit stub; needs seeding.
- `[[eif2alpha]]`, `[[atf4]]`, `[[chop]]`, `[[p58ipk]]` are implicit stubs; need seeding.
- `[[unfolded-protein-response]]` is an implicit stub pathway page.

## Footnotes

[^harding1999]: doi:10.1038/16729 · Harding HP et al. · *Nature* 1999 · in-vitro + in-vivo · model: mammalian cells + yeast · PERK discovery; demonstrated ER kinase phosphorylates eIF2α at Ser51; archive status: not downloaded (not OA)

[^delepine2000]: doi:10.1038/78085 · Délépine M et al. · *Nature Genetics* 2000 · observational (human genetics) · n=2 consanguineous families · EIF2AK3 identified as Wolcott-Rallison syndrome gene; local PDF available in a local paper archive

[^axten2012]: doi:10.1021/jm300713s · Axten JM et al. · *J Med Chem* 2012 · in-vitro + in-vivo · model: biochemical + xenograft · GSK2606414 discovery; IC50 ~0.4 nM; archive status: OA pending download

[^krukowski2020]: doi:10.7554/eLife.62048 · Krukowski K et al. · *eLife* 2020 · in-vivo · n=not extracted · randomized · model: aged C57BL/6 mice · ISRIB reverses age-related cognitive decline; reduced ATF4; improved hippocampal electrophysiology; archive status: OA pending download

[^kohler2014]: doi:10.1016/j.nbd.2014.07.006 · Köhler C et al. · *Neurobiol Dis* 2014 · in-vivo · model: mouse tauopathy + amyloidosis · phospho-PERK co-localizes with early tangle formation; archive status: OA pending download
