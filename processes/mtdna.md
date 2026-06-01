---
type: process
aliases: [mitochondrial DNA, mitochondrial genome, mtGenome, human mtDNA]
key-proteins: ["[[polg]]", "[[tfam]]", "[[twinkle-helicase]]", "[[ssbp1]]", "[[polg2]]"]
pathways: ["[[oxphos]]", "[[cgas-sting]]", "[[mitochondrial-biogenesis]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[genomic-instability]]"]
selective-variants: ["[[mtdna-heteroplasmy]]"]
druggability-tier: null
caused-by: ["[[mitochondrial-dysfunction]]", "[[genomic-instability]]"]
causes: ["[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Larsson 1998, Lee 2015, and West 2015 verified against local PDFs; Trifunovic 2004 cross-checked for consistency with oxphos.md (consistent). Closed-access papers (Anderson 1981, Tajima 2002, Wallace 2010) not verified against full text — tagged #gap/no-fulltext-access. Canonical-DB identity fields not applicable (genome-level entity, no UniProt/PubChem CID)."
---

# Mitochondrial DNA (mtDNA)

The human mitochondrial genome is a 16,569 bp circular double-stranded DNA molecule present in hundreds to thousands of copies per cell (cell-type-dependent) and encoding the minimum gene set required for oxidative phosphorylation. First completely sequenced in 1981 [^anderson1981], it is maternally inherited, lacks introns, and operates under unique genetic rules distinct from the nuclear genome. Its biology intersects two Hallmarks of Aging: mtDNA mutations contribute directly to the [[mitochondrial-dysfunction]] hallmark, and somatic mtDNA mutation accumulation represents a sub-category of the [[genomic-instability]] hallmark. Detailed treatment of somatic mutation accumulation and clonal expansion is on the [[mtdna-heteroplasmy]] page; this page covers the genome structure, replication, copy-number regulation, and mitochondrial-derived peptides (MDPs).

## Genome structure and gene content

The human mtDNA encodes 37 genes with no introns [^anderson1981]:

| Category | Count | Gene products |
|---|---|---|
| **Protein-coding** | 13 | 7 NADH dehydrogenase (ND) subunits of Complex I; 1 cytochrome b subunit of Complex III; 3 cytochrome c oxidase (COX) subunits of Complex IV; 2 ATP synthase (ATP6, ATP8) subunits of Complex V |
| **Ribosomal RNAs** | 2 | 12S rRNA (mt-RNR1); 16S rRNA (mt-RNR2) |
| **Transfer RNAs** | 22 | Full set for mitochondrial translation |

The 13 protein-coding genes encode a subset of subunits for [[oxphos]] Complexes I, III, IV, and V. Complex II (succinate dehydrogenase) is entirely nuclear-encoded. All 37 mtDNA-encoded products are essential for OXPHOS; loss of any Complex I–V subunit encoded by mtDNA causes respiratory chain dysfunction.

### D-loop and replication control region

The **displacement loop (D-loop)** is a ~1.1 kb noncoding regulatory region at the apex of the circular genome containing:
- The **heavy-strand origin of replication (OH)** — where mtDNA synthesis initiates
- Promoters for both heavy-strand transcription (HSP1 and HSP2) and light-strand transcription (LSP)
- Conserved sequence blocks (CSB I–III) important for replication priming
- The mitochondrial transcription factor A ([[tfam]]) binding sites that regulate both transcription and packaging

The D-loop is one of the most variable regions of mtDNA across human populations, making it the primary locus used in forensic and population-genetic applications.

### Genetic code divergences from the nuclear standard

Mitochondrial translation uses a modified genetic code: UGA encodes tryptophan (not a stop codon); AUA encodes methionine (not isoleucine); AGA and AGG are stop codons (not arginine). The 22 tRNAs are sufficient for all 64 codons via "superwobble" base-pairing rules.

## Copy number and cell-type variation

Each mitochondrion carries 2–10 mtDNA copies (often referred to as nucleoids). Because cell mitochondrial content varies widely:

| Cell / tissue type | Approximate mtDNA copies per cell |
|---|---|
| Oocyte | ~200,000–600,000 |
| Skeletal muscle fiber | ~4,000–10,000 |
| Hepatocyte | ~2,000–5,000 |
| Cardiomyocyte | ~3,000–8,000 |
| Erythrocyte | ~0 (degraded during maturation) |
| Platelet | ~3–6 |

Copy number is cell-type-specific, tightly regulated, and scales broadly with the energetic demands of the tissue. #gap/unsourced — precise per-cell-type ranges vary by assay; representative values above compiled from multiple sources; single authoritative reference for this table not identified.

### Copy number declines with age

mtDNA copy number decreases with age in multiple human tissues including blood, skeletal muscle, and brain. The mechanism involves a combination of reduced [[tfam]]-mediated packaging and transcription efficiency, impaired [[mitochondrial-biogenesis]] (reduced PGC-1α signaling), and increased mitophagy clearance of damaged mitochondria (see [[mitophagy]]). Low blood mtDNA copy number has been associated with all-cause mortality in observational cohorts. #gap/needs-replication — causal directionality unresolved; copy-number decline may be a consequence rather than a driver of aging.

## Replication machinery

mtDNA replicates independently of the cell cycle via a dedicated minimal replisome:

| Component | Gene | Role |
|---|---|---|
| **POLG** (DNA polymerase gamma catalytic subunit) | [[polg]] | 5'→3' polymerase + 3'→5' proofreading exonuclease; sole mtDNA replicase |
| **POLG2** (accessory subunit) | [[polg2]] | Processivity factor; forms heterotrimer with POLG; required for high-speed synthesis |
| **Twinkle helicase** | [[twinkle-helicase]] | 5'→3' helicase; unwinds dsDNA ahead of the replication fork; homolog of T7 gp4 |
| **mtSSB (SSBP1)** | [[ssbp1]] | Mitochondrial single-stranded DNA binding protein; stabilizes the displaced strand |
| **TFAM** | [[tfam]] | Packages and compacts mtDNA into nucleoids; required for copy-number maintenance [^larsson1998] |

The predominant replication mode in humans is debated between the "strand-displacement" (asynchronous) model and a more conventional strand-coupled model. Under strand-displacement, the heavy strand (H-strand) is synthesized first while the light strand (L-strand) remains single-stranded and looped out; L-strand synthesis initiates later from a second origin (OL) located in the tRNA cluster. Alternative coupled leading-lagging strand replication has also been described.

**TFAM knockout** — homozygous germline Tfam knockout causes embryonic lethality between E8.5–E10.5 with near-complete mtDNA depletion and abolished oxidative phosphorylation. Heterozygous (+/−) animals survive with reduced mtDNA copy number (~34 ± 7% reduction across all tissues by phosphorimager quantitation) and show respiratory-chain enzyme deficiency specifically in the heart (Complexes I, III, IV, V reduced; Complex II and citrate synthase normal), establishing the heart as more sensitive than kidney or muscle to Tfam gene-dosage effects. This establishes [[tfam]] as essential for mtDNA maintenance in vivo [^larsson1998]. The cardiac-conditional Tfam KO (cre/loxP in cardiomyocytes) producing dilated cardiomyopathy is from Wang et al. 1999 (a separate experiment using the Tfam^loxP allele described in Larsson 1998 but not conducted in that paper).

### Repair capacity — a critical vulnerability

mtDNA DNA repair is markedly limited compared to nuclear DNA:
- **Base excision repair (BER)** is intact and functional — short-patch BER operates in mitochondria
- **Nucleotide excision repair (NER)** is essentially absent — bulky adducts are not removed
- **Homologous recombination (HR)** is essentially absent (or highly limited) — double-strand breaks are predominantly resolved by degradation, not repair
- **Non-homologous end joining (NHEJ)** is absent from the mitochondrial compartment
- **No protective histones** — mtDNA nucleoids are packaged by TFAM but not histones; chromatin-level protection against lesions is absent

The combination of ROS proximity (generated by the ETC), absence of NER/HR/NHEJ, and high transcriptional activity makes mtDNA ~10–20× more susceptible to oxidative damage than nuclear DNA on a per-nucleotide basis. #gap/unsourced — the exact fold-difference in mutation rate is assay-dependent; varies across tissue and age; single representative citation not yet identified.

## Mitochondrial-derived peptides (MDPs)

The mtDNA open reading frames contain short ORFs within ribosomal RNA sequences that are translated under stress conditions to produce small bioactive peptides. Two are well-characterized:

### MOTS-c (Mitochondrial ORF of the 12S rRNA type-c)

MOTS-c is a 16-amino-acid peptide encoded within a 51-bp short open reading frame (sORF) in the mitochondrial 12S rRNA gene (MT-RNR1; GenBank accession KP715230). Lee et al. (2015) showed that MOTS-c inhibits the **folate-methionine cycle**, depleting intracellular 5-methyltetrahydrofolate (5Me-THF) and thereby blocking de novo purine biosynthesis. This blockade causes AICAR (5-aminoimidazole-4-carboxamide ribonucleotide) to accumulate >20-fold in MOTS-c–overexpressing cells, and AICAR (as its monophosphate ZMP) is a potent allosteric activator of **AMPK**. The mechanism is therefore: **folate cycle inhibition → purine synthesis block → AICAR/ZMP accumulation → AMPK activation** [^lee2015]. MOTS-c is detectable in human and rodent plasma and declines in skeletal muscle and serum of aged (32-month) versus young (4-month) mice. Systemic intraperitoneal administration to mice (5 mg/kg/day for 7 days) reduces high-fat-diet-induced obesity and insulin resistance, with skeletal muscle as the primary target organ.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MOTS-c sequence is conserved; circulating MOTS-c detected in human plasma |
| Phenotype conserved in humans? | partial — human plasma MOTS-c declines with age; causal role unproven |
| Replicated in humans? | no — only mouse in-vivo data from Lee 2015; human RCT not completed |

#gap/needs-human-replication — all in-vivo efficacy data is from mice; human trial ongoing but not reported.

### Humanin

Humanin is a 21-amino-acid peptide encoded within the 16S rRNA gene (MT-RNR2). Originally identified as a factor that protects neurons against Alzheimer's disease-related cell death in vitro [^tajima2002], humanin has subsequently been shown to have anti-apoptotic, cytoprotective, and metabolic-regulatory effects. Humanin levels decline with age in human plasma. Its receptor signaling engages the **JAK-STAT3** and **PI3K-AKT** pathways. The therapeutic relevance of humanin for aging is under active investigation. #gap/needs-replication — in-vitro neuroprotection is robust; in-vivo aging relevance is limited.

### Other MDPs

Additional short ORFs within mtDNA have been described (SHLP1–6, also from the 16S rRNA region) but are less characterized. The broader concept of the "mitochondrial peptidome" as a retrograde signaling system remains an active research area. #gap/no-mechanism

## Role in aging — overview

The aging-specific biology of mtDNA operates through three partially independent mechanisms:

### 1. Somatic mutation accumulation and clonal expansion

See [[mtdna-heteroplasmy]] for the detailed treatment. In brief: point mutations and deletions accumulate in post-mitotic cells over decades via stochastic replication errors and clonal expansion, eventually crossing a threshold (~60–90% mutant copies) at which OXPHOS fails in individual cells. The POLG "mutator mouse" (Trifunovic et al. 2004) provided the key experimental model — see [[processes/oxphos]] and [[mtdna-heteroplasmy]] for citations and causal-inference caveats [^trifunovic2004_xref].

### 2. mtDNA copy-number decline

Independent of mutation accumulation, aging tissues show reduced mtDNA copy number correlating with reduced OXPHOS capacity. Copy-number reduction compounds mutation-driven dysfunction: fewer wild-type copies means less buffering capacity against individual mutant molecules. The molecular mechanism involves reduced TFAM and PGC-1α activity with age (see [[mitochondrial-biogenesis]]). Wallace (2010) provides a synthesis of how copy-number and mutation effects combine to produce the observed respiratory deficiency spectrum in aged tissues [^wallace2010].

### 3. mtDNA release and cGAS-STING activation

Cytoplasmic mtDNA — released from damaged mitochondria during stress, aging, or apoptotic priming — activates the [[cgas-sting]] innate DNA-sensing pathway. West et al. (2015) demonstrated that mtDNA stress (induced by TFAM heterozygous knockout, Tfam+/−, which causes aberrant mtDNA packaging, nucleoid enlargement, and cytoplasmic escape of D-loop–region mtDNA fragments) is sufficient to activate cGAS and drive type-I interferon responses via the **cGAS → STING → TBK1 → IRF3** signaling axis [^west2015]. Knockdown of cGAS or IRF3 largely abrogated interferon-stimulated gene (ISG) expression; ISG mRNAs were reduced 70–90% in the absence of STING, identifying cGAS-STING-TBK1-IRF3 as the predominant driver rather than NF-κB. In aging tissues, this mechanism connects mitochondrial damage to [[chronic-inflammation|inflammaging]] without requiring overt cell death. The primary framing of the West 2015 paper is antiviral priming — the same pathway likely contributes to age-related sterile inflammation, though this was a discussion-level inference in the paper rather than a direct experimental finding. #gap/needs-human-replication — the quantitative contribution of cytoplasmic mtDNA to cGAS-STING activation in normally aging (vs. acutely stressed) tissues is not established.

## Disease connections

The same mutation types that accumulate slowly in normal aging cause severe disease when inherited at high heteroplasmy via the maternal germline:

| Disease | Affected gene(s) | Primary OXPHOS defect |
|---|---|---|
| MELAS | MT-TL1 (tRNA-Leu), ND5 | Complex I (ND5 mutations) or global (tRNA) |
| MERRF | MT-TK (tRNA-Lys) | Global — tRNA deficiency disrupts all 13 protein-coding products |
| LHON | ND1, ND4, ND6 | Complex I — retinal ganglion cell-specific vulnerability |
| Leigh syndrome | MT-ATP6 (Complex V) or nuclear-encoded subunits | Complex V or CI/CII/CIV |
| Pearson syndrome | Large deletion (often 4,977 bp common deletion) | Global — multiple complex subunits affected |
| Kearns–Sayre syndrome | Large deletion (various) | Global — onset <20 yrs |

These diseases illustrate the threshold effect: pathogenic mutations cause disease when heteroplasmy rises above 60–90% in affected tissues, which is why germline mtDNA diseases manifest in childhood or early adulthood while normal aging (with lower heteroplasmy) produces effects in post-reproductive decades.

## Evolutionary biology note

mtDNA is strictly maternally inherited in most metazoans (though rare paternal leakage is documented). The maternal bottleneck during oogenesis — where mtDNA copy number drops to ~200 before amplification — limits effective transmission of heteroplasmy and acts as a purifying selection filter against highly deleterious mutations. The lack of recombination means that mtDNA evolves under Muller's ratchet dynamics, accumulating mildly deleterious mutations over evolutionary time, which has implications for population genetics of aging-associated mtDNA variants. This also underlies why [[mtdna-heteroplasmy]] is an irreversible somatic process in post-mitotic tissues.

## Limitations and gaps

- **Copy-number reference ranges:** published ranges vary considerably by assay (qPCR, NGS, ddPCR), age of subject, and tissue; a single unified reference table for human tissues does not yet exist. #gap/unsourced
- **MDPs beyond MOTS-c and humanin:** SHLP1–6 and other putative ORFs within mtDNA are reported but poorly characterized; their aging relevance and receptor targets are largely unknown. #gap/no-mechanism
- **Causal directionality of copy-number decline:** observational associations between low mtDNA copy number and mortality are well-documented, but whether copy-number decline is a cause or consequence of tissue dysfunction is not established in humans. #gap/no-mechanism
- **mtDNA release quantification in vivo:** the quantitative contribution of cytoplasmic mtDNA to cGAS-STING activation in normally aging (vs. diseased or severely damaged) tissues is not well-defined. #gap/needs-human-replication
- **Interactions between mutation accumulation and copy-number decline:** whether cells compensatorily upregulate copy number to buffer mutant load, or whether copy-number decline and mutation accumulation are independent trajectories, is unresolved. #gap/contradictory-evidence

## Cross-references

- [[mtdna-heteroplasmy]] — somatic mutation accumulation, clonal expansion, threshold effects, therapeutic approaches
- [[oxphos]] — the OXPHOS system encoded by mtDNA; ETC architecture
- [[polg]] — mtDNA replicase; the POLG mutator mouse model
- [[tfam]] — nucleoid compaction and copy-number regulator; TFAM-KO cardiac phenotype
- [[mitochondrial-biogenesis]] — PGC-1α-driven mtDNA copy-number upregulation
- [[mitophagy]] — selective clearance of dysfunctional mitochondria (and their mtDNA)
- [[cgas-sting]] — innate immune sensing activated by cytoplasmic mtDNA
- [[mitochondrial-dysfunction]] — hallmark page integrating OXPHOS decline, mtDNA mutations, and ROS
- [[genomic-instability]] — hallmark page; mtDNA mutations are a genomic-instability sub-category

## Footnotes

[^anderson1981]: doi:10.1038/290457a0 · Anderson S et al. · *Nature* 1981 · in-vitro (sequence analysis) · complete sequence and organization of the human mitochondrial genome; established 16,569 bp, 37 genes, D-loop structure · model: human placental mtDNA · 9,565 citations (archive confirmed; closed-access) · #gap/no-fulltext-access — genome structure claims (16,569 bp; 37 genes; 13/22/2 breakdown; D-loop) are textbook-canonical and independently corroborated by NCBI RefSeq NC_012920, but not verified against the full PDF

[^larsson1998]: doi:10.1038/ng0398-231 · Larsson NG et al. · *Nature Genetics* 1998 · in-vivo (KO) · TFAM homozygous knockout causes embryonic lethality (E8.5–E10.5) with near-complete mtDNA depletion and abolished OXPHOS; heterozygous (+/−) shows ~34 ± 7% reduced mtDNA copy number and respiratory-chain deficiency specifically in heart (CI, III, IV, V reduced; CII and citrate synthase normal); establishes TFAM as essential for mtDNA maintenance and copy-number regulation in vivo; Tfam^loxP allele created for subsequent conditional KO studies · model: Mus musculus (germline and heterozygous KO) · local PDF available (archive confirmed)

[^lee2015]: doi:10.1016/j.cmet.2015.02.009 · Lee C et al. · *Cell Metabolism* 2015 · in-vivo + in-vitro · MOTS-c (16-aa peptide, sORF in mitochondrial 12S rRNA / MT-RNR1, GenBank KP715230) reduces obesity and insulin resistance; mechanism: inhibits folate-methionine cycle → blocks de novo purine synthesis → AICAR accumulates >20-fold → AMPK activated; plasma/muscle MOTS-c levels decline in aged (32-mo) vs young (4-mo) mice; skeletal muscle primary target organ · model: Mus musculus (C57BL/6 and outbred CD-1) + human/rat plasma samples + HEK293 and L6 cell lines · 692 citations (archive confirmed; OA bronze)

[^tajima2002]: doi:10.1016/s0304-3940(02)00199-4 · Tajima H et al. · *Neuroscience Letters* 2002 · in-vitro · evidence for in vivo production of humanin peptide from 16S rRNA locus; neuroprotective against Alzheimer's disease-related insults · model: human cell lines + in vivo detection · archive confirmed; closed-access (not_oa) · #gap/no-fulltext-access

[^wallace2010]: doi:10.1002/em.20586 · Wallace DC · *Environmental and Molecular Mutagenesis* 2010 · review · synthesis of mtDNA mutation types, copy-number changes, and OXPHOS deficiency spectrum in aging and disease · 613 citations (archive confirmed; closed-access/not_oa) · #gap/no-fulltext-access

[^west2015]: doi:10.1038/nature14156 · West AP et al. · *Nature* 2015 · in-vivo + in-vitro · TFAM heterozygous KO (Tfam+/−) → aberrant mtDNA nucleoid packaging → cytoplasmic D-loop mtDNA fragments (3–4 fold increase) → cGAS → STING → TBK1 → IRF3 → interferon-stimulated gene (ISG) expression and type-I interferon; ISG reduction 70–90% in STING-deficient cells; IRF3 is effector (not NF-κB); primary framing is antiviral priming; aging-inflammation link is discussion-level inference · model: Mus musculus MEFs (C57BL/6 background) + bone marrow-derived macrophages · 1,759 citations (archive confirmed; OA green)

[^trifunovic2004_xref]: doi:10.1038/nature02517 · Trifunovic A et al. · *Nature* 2004 · in-vivo · POLG proofreading-deficient mutator mice develop progeroid phenotype with elevated mtDNA mutagenesis; see [[mtdna-heteroplasmy]] and [[oxphos]] for full treatment · model: Mus musculus (POLG knock-in) · local PDF available (archive confirmed)
