---
type: protein
aliases: [POLG1, POLGA, MDP1, DNA polymerase gamma, mtDNA polymerase]
uniprot: P54098
ncbi-gene: 5428
hgnc: 9179
ensembl: ENSG00000140521
mouse-ortholog: Polg
genage-id: 72
druggability-tier: null
caused-by: []
causes: ["[[mtdna-heteroplasmy]]", "[[mitochondrial-dysfunction]]"]
key-domains: [polymerase-A, polymerase-B, polymerase-C, exo-I, exo-II, exo-III, accessory-interacting-determinant]
key-ptms: []
pathways: ["[[mtdna-replication]]", "[[base-excision-repair]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[genomic-instability]]"]
complex-subunits: [Q9UHN1]
known-interactors: ["[[polg2]]", "[[tfam]]", "[[twnk]]", "[[ssbp1]]"]
sens-categories: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for all 3 cited DOIs (Trifunovic 2004 nature02517, Kujoth 2005 science.1112125, Van Goethem 2001 90034); the user-flagged DOI correction (Van Goethem 2001 → 90034) is correctly carried through. Wikilinks spot-checked. Quantitative claims (n's, mutation rates, lifespan medians) NOT cross-checked against primary PDFs — synthesis-style content lint only."
---

# POLG (DNA polymerase gamma)

The sole mitochondrial DNA replicative polymerase in animals. POLG is the catalytic subunit of a heterotrimer responsible for copying and repairing the mitochondrial genome. Because errors in mtDNA replication accumulate over a lifetime and are non-correctable by nuclear repair machinery, POLG fidelity is a central mechanistic node linking [[mitochondrial-dysfunction]] to [[genomic-instability]] in aging. The **POLG D257A "mutator mouse"** — engineered to lack proofreading — is the foundational experimental model demonstrating that accumulated mtDNA mutations are sufficient to drive a multi-system premature aging phenotype.

## Identity

- **UniProt:** P54098 (DPOG1_HUMAN)
- **NCBI Gene:** 5428
- **HGNC symbol:** POLG
- **Ensembl:** ENSG00000140521
- **Mouse ortholog:** Polg (one-to-one; D257A mutator corresponds to D257A in mouse)
- **GenAge ID:** 72 (GenAge-human curated entry)
- **Length:** 1,239 amino acids (canonical human isoform)
- **Synonyms:** POLG1, POLGA, MDP1

## Subunit architecture

POLG functions as a heterotrimer: one catalytic subunit (POLG, this page) plus a homodimer of the **accessory subunit POLG2** (UniProt Q9UHN1). The accessory dimer tethers the holoenzyme to the mitochondrial nucleoid via interactions with [[tfam]] and stimulates processivity and DNA binding affinity of the catalytic subunit. Neither subunit is active alone at physiologically relevant rates.

| Subunit | Gene | UniProt | Role |
|---|---|---|---|
| Catalytic | POLG | P54098 | Polymerase + 3'→5' proofreading exonuclease |
| Accessory (x2) | POLG2 | Q9UHN1 | Processivity factor; DNA binding |

Additional nucleoid-associated interactors: [[twnk]] (helicase), [[ssbp1]] (single-strand binding protein), LIG3 (ligation). Together these form the minimal mtDNA replisome.

## Biochemistry and mtDNA replication

POLG is the **only polymerase responsible for replicating mtDNA** in mammalian cells — there is no mtDNA-specific backup replicase. Each human cell contains 100–10,000 copies of mtDNA; all are copied by this enzyme.

Key activities:
- **5'→3' polymerase** (EC 2.7.7.7) — extends the nascent DNA strand using dNTPs
- **3'→5' proofreading exonuclease** — removes misincorporated nucleotides immediately after insertion (encoded by the Exo I/II/III motifs in the N-terminal domain)
- **5'-dRP lyase** — participates in base-excision repair of oxidative lesions in mtDNA

The proofreading activity confers a total error rate of approximately 10^-6 to 10^-7 per base pair per replication — considerably higher than nuclear DNA polymerases (delta/epsilon reach ~10^-8 with mismatch repair), but sufficient for a genome without introns that must replicate continually in oxidizing conditions. Importantly, mtDNA has **no mismatch repair system**, so errors escaping proofreading are permanent #gap/unsourced — the 10^-6 figure is widely cited in reviews; primary biochemical measurement citation needed.

## The POLG mutator mouse — foundational mtDNA aging model

### Trifunovic 2004: proofreading-deficient mice age prematurely

Trifunovic et al. introduced the **D257A knock-in** — a point mutation in the exonuclease active site (Asp→Ala at position 257) that abolishes proofreading without affecting polymerase activity [^trifunovic2004]. Homozygous knock-in mice (*Polg^{D257A/D257A}*) accumulate mtDNA point mutations and deletions at 3–5× higher rates than wild-type littermates and develop a **multi-system premature aging syndrome** detectable by 9 months of age:

- Kyphosis (spinal curvature)
- Alopecia and graying
- Sarcopenia (severe muscle wasting by ~12 months)
- Anemia
- Reduced subcutaneous fat
- Cardiomyopathy
- Osteoporosis
- Infertility (in both sexes)
- Median lifespan: ~14 months (vs ~26 months WT) — approximately halved

Heterozygous (*Polg^{D257A/+}*) mice appeared normal in lifespan and gross phenotype, consistent with a threshold effect where the remaining proofreading capacity of one wild-type allele is sufficient.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Mammalian mtDNA replication mechanism conserved; same enzyme |
| Phenotype conserved in humans? | partial | Human POLG disease (see below) overlaps but is not identical to mouse mutator phenotype; human aging shows mtDNA deletion accumulation in post-mitotic tissues |
| Replicated in humans? | no | Cannot genetically engineer human mutator; correlative evidence from POLG variant carriers and tissue aging data only |

#gap/needs-human-replication — direct causal evidence that POLG-driven mtDNA mutation accumulation is a rate-limiting driver of human aging is not established. The mouse model is highly influential but the pace of mtDNA mutagenesis in WT mice is orders of magnitude higher than in WT humans.

### Kujoth 2005: apoptosis is the proximate tissue-loss mechanism

In an independent parallel study using the same D257A knock-in line, Kujoth et al. reported that the premature aging tissues of mutator mice showed **elevated apoptosis** rather than increased oxidative stress markers [^kujoth2005]. This distinguished the mechanism of tissue decline from the then-dominant reactive-oxygen-species (ROS) model: mtDNA mutations appeared to drive tissue loss via apoptotic cell death rather than oxidative damage per se. The observation implies that even sub-lethal mtDNA mutation burdens can trigger cell-intrinsic apoptosis programs in post-mitotic tissues, depleting stem and differentiated cell pools over time.

#gap/contradictory-evidence — Subsequent work has debated whether mtDNA mutation rates in WT aged mice are high enough to cause comparable cell death, or whether the mutator mouse is a pathological rather than physiological model of aging. See [[mitochondrial-dysfunction]] for the broader ROS vs. mtDNA-mutation debate.

## Disease: POLG mutation spectrum

Over 150 pathogenic POLG variants are known in humans, making it one of the most common nuclear gene causes of mitochondrial disease. Disease manifestations cluster into overlapping syndromes depending on mutation type (dominant vs recessive) and affected functional domain:

| Syndrome | Inheritance | Key Features |
|---|---|---|
| Progressive external ophthalmoplegia (PEO) | AD or AR | Ptosis, ophthalmoparesis, proximal myopathy; mtDNA deletions in muscle |
| Alpers-Huttenlocher syndrome | AR | Childhood-onset hepatocerebral degeneration; mtDNA depletion |
| Sensory ataxic neuropathy, dysarthria, ophthalmoparesis (SANDO) | AR | Sensory neuropathy, ataxia, ophthalmoplegia |
| MNGIE-like | AR | Mitochondrial neurogastrointestinal encephalomyopathy phenocopy |
| Leigh syndrome | AR (severe) | Subacute necrotizing encephalopathy; infancy onset |

Van Goethem et al. first linked dominant POLG mutations to PEO with mtDNA deletions in 2001 [^vangoethem2001]. The dominant mutations cluster around the polymerase active site; recessive mutations more often affect the exonuclease domain or interdomain linker.

Pathomechanism: loss of POLG fidelity or processivity → stalling/error-prone replication → mtDNA deletions or depletion → respiratory chain deficiency → tissue failure, with highest impact in high-energy-demand post-mitotic tissues (muscle, neurons).

## Pharmacology

### POLG as an off-target of antiviral nucleoside analogs

POLG is the primary toxicity mechanism for several nucleoside analog antivirals used in HIV and hepatitis B treatment:
- **Zalcitabine (ddC), stavudine (d4T), didanosine (ddI)** — older NRTIs with high POLG affinity; associated with iatrogenic mitochondrial myopathy and neuropathy from mtDNA depletion #gap/unsourced — general toxicity mechanism is established; specific affinity data citation needed
- **Telbivudine, tenofovir** — hepatitis B antivirals; telbivudine implicated in mtDNA depletion in hepatocytes at therapeutic doses

These represent POLG inhibition as an **adverse effect**, not therapeutic intention. No approved drug intentionally targets POLG.

### POLG as an aging therapeutic target: current assessment

POLG is not currently an actionable drug target for aging. Reasoning:
- POLG-driven mtDNA mutation accumulation in WT aging is slow and probably rate-limited by metabolic demand, not enzyme error rate
- Increasing POLG fidelity pharmacologically has no validated small-molecule approach
- The druggable node for mtDNA stress is more likely **downstream** (clearing damaged mitochondria via [[mitophagy]]; preventing apoptotic depletion via senolytic/anti-apoptotic approaches)

No ClinicalTrials.gov entries targeting POLG for aging or longevity as of 2026-05-05. #gap/unsourced — confirm with ClinicalTrials.gov search.

## Cross-references

- [[mitochondrial-dysfunction]] — verified hallmark page (this protein's relevance is central)
- [[mtdna-heteroplasmy]] — downstream consequence of POLG error accumulation
- [[tfam]] — mitochondrial transcription factor A; co-localizes in nucleoid with POLG; R21 page
- [[polg2]] — accessory subunit; stub page needed
- [[twnk]] — Twinkle helicase; replication fork partner
- [[mus-musculus]] — D257A mutator mouse model; verified model-organism page
- [[mitophagy]] — mtDNA quality control by organelle autophagy
- [[sarcopenia]] — major phenotypic output of mutator mouse; verified phenotype page

## Limitations and gaps

- #gap/needs-human-replication — The causal sufficiency of POLG-driven mtDNA mutations for aging (as demonstrated in the mutator mouse) has no direct human parallel. The mutator accumulates mutations ~2 orders of magnitude faster than observed in aged human tissues.
- #gap/needs-replication — Kujoth 2005 apoptosis mechanism is foundational but derived from one lab's analysis; independent confirmation of the apoptosis-vs-ROS distinction would strengthen the claim.
- #gap/no-mechanism — Why aging tissues show tissue-specific mtDNA deletion patterns (e.g., brain substantia nigra) rather than uniform accumulation is not mechanistically resolved. POLG is implicated but strand-break-based deletion models are also proposed.
- #gap/needs-canonical-id — druggability-tier is null; no Open Targets Platform entry confirmed for POLG as an aging target. Recommend Open Targets lookup on next lint pass.
- #gap/unsourced — POLG error rate (~10^-6) and NRTI POLG affinity comparative data: widely cited in reviews but primary biochemical measurement citations not confirmed here.

## Footnotes

[^trifunovic2004]: [[studies/trifunovic-2004-polg-mutator-mouse]] · n not specified in DOI lookup (typical mouse study: ~10–30/group) · in-vivo · model: Polg D257A knock-in mouse (C57BL/6 background) · doi:10.1038/nature02517 · local PDF: 

[^kujoth2005]: [[studies/kujoth-2005-polg-apoptosis-aging]] · in-vivo · model: same Polg D257A knock-in line as Trifunovic 2004 · doi:10.1126/science.1112125 · not downloaded (closed access); verify against publisher PDF

[^vangoethem2001]: [[studies/vangoethem-2001-polg-peo]] · observational (human genetics) · n=4 families (original report) · model: human PEO kindreds · doi:10.1038/90034 · local PDF: 
