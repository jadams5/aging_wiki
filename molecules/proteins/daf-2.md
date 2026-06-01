---
type: protein
aliases: [abnormal DAuer Formation 2, C. elegans insulin/IGF receptor, Ce-INSR, DAF-2 kinase]
uniprot: Q968Y9
ncbi-gene: 175410
hgnc: null
wormbase-id: WBGene00000898
genage-id: null
organism: Caenorhabditis elegans
key-domains: [extracellular-ligand-binding, transmembrane, intracellular-kinase]
key-ptms: []
ensembl: null
druggability-tier: null  # #gap/c-elegans-no-direct-ortholog-druggability — daf-2 spans human INSR (ENSG00000171105, tier 1) + IGF1R (ENSG00000140443, tier 1)
caused-by: []
causes: []
pathways: ["[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[daf-16]]", "[[age-1]]", "[[akt-1]]", "[[akt-2]]", "[[pdk-1]]", "[[sgk-1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Kimura 1997, Gems 1998, and Pierce 2001 primary-source PDFs verified; Kenyon 2010 review PDF previously verified (confirmed present in archive); Kenyon 1993 remains closed-access (not_oa, #gap/no-fulltext-access). UniProt accession corrected from Q967D7 (Drosophila tutl — wrong entry) to Q968Y9 (C. elegans DAF-2, Swiss-Prot reviewed, 1846 aa). Canonical database identity fields confirmed against UniProt REST API."
---


# DAF-2

**The founding longevity gene of modern aging research.** DAF-2 is the sole [[caenorhabditis-elegans|*C. elegans*]] receptor for insulin-like peptides — the single ancestral gene that vertebrates expanded into multiple paralogs, principally [[insr|INSR]] (insulin receptor) and [[igf1r|IGF1R]] (IGF-1 receptor); DAF-2 is equally distant from all three vertebrate insulin receptor superfamily members [^kimura1997]. Loss-of-function mutations in *daf-2* extend adult *C. elegans* lifespan approximately **2-fold** — a finding reported by Kenyon, Chang, Gensch, Rudner, and Tabtiang in 1993 [^kenyon1993] that proved aging is under genetic regulation and launched the modern era of longevity biology. The longevity phenotype is completely suppressed by simultaneous loss of [[daf-16|*daf-16*]], the worm FOXO transcription factor, establishing the IIS → DAF-16 axis as the core transcriptional longevity program [^kenyon1993].

## Historical significance — the 1993 paper

Kenyon et al. 1993 (Nature 366:461) is one of the most consequential papers in biogerontology. Prior to this work, the prevailing view held that aging was not genetically regulated in a meaningful sense — it was a passive accumulation of stochastic damage, not subject to Darwinian tuning via single genes. The *daf-2(e1370)* loss-of-function result — that mutating a single gene could double an animal's lifespan — demonstrated unambiguously that **longevity is genetically programmable**. The paper's further finding that *daf-16* loss of function suppresses the *daf-2* lifespan extension established the first longevity epistasis hierarchy and seeded a decades-long research program into IIS-FOXO signaling across species [^kenyon2010].

Every major thread in modern longevity genetics — *Drosophila dFOXO*, mammalian *Igf1r+/-* mice (see [[igf1r]]), *FOXO3A* association with human longevity (see [[foxo3]]), IGF-1 levels in centenarians — traces conceptually back to the 1993 *daf-2* paper.

## Identity

- **UniProt:** Q968Y9 (DAF-2, C. elegans insulin-like receptor; Swiss-Prot reviewed). Note: accession Q967D7 is a Drosophila protein (Turtle/TUTL) — not DAF-2.
- **NCBI Gene:** 175410; WormBase locus tag CELE_Y55D5A.5 (isoform a: Y55D5A.5a, isoform c: Y55D5A.5c)
- **WormBase:** WBGene00000898
- **HGNC:** null — worm gene; no human HGNC entry
- **GenAge:** not independently listed in GenAge-human; the *daf-2* longevity phenotype is captured via the IIS pathway entry and via *daf-16* (the effector). #gap/needs-canonical-id — verify GenAge-models entry number.
- **Mammalian orthologs:** [[insr|INSR]] (insulin receptor) + [[igf1r|IGF1R]] (IGF-1 receptor) + insulin receptor-related receptor — DAF-2 is the single ancestral receptor that vertebrates expanded and diverged into these paralogs. Kimura 1997 reports DAF-2 is equally distant from all three (35%, 34%, 33% identity respectively), suggesting DAF-2 is the ancestor of the entire subfamily [^kimura1997]. This is a critical structural difference: vertebrates separate insulin and IGF-1 sensing into distinct receptors; *C. elegans* integrates both signals through one receptor [^kimura1997].
- **Protein length:** 1,846 amino acids (canonical isoform; UniProt Q968Y9, Swiss-Prot reviewed, confirmed 2026-05-04). The cDNA open reading frame is 5,538 bases [^kimura1997]. Alternative isoforms exist (WormBase Y55D5A.5c, 1,770 aa, unreviewed).

## Domain organization

DAF-2 is a receptor tyrosine kinase in the insulin/IGF-1 receptor superfamily. Like vertebrate INSR and IGF1R, DAF-2 is believed to form an **α₂β₂ heterotetrameric** receptor complex, though the precise disulfide-bonded architecture has not been solved to atomic resolution in *C. elegans*.

| Subunit / region | Notes |
|---|---|
| Signal peptide | N-terminal; cleaved in mature protein |
| α-subunit (extracellular) | Ligand-binding; cysteine-rich domains; disulfide-linked to β-subunit |
| Furin cleavage site | α–β junction; processed in trans-Golgi analogous to vertebrate INSR |
| β-subunit transmembrane helix | Single-pass; anchors receptor in plasma membrane |
| Juxtamembrane region | Regulatory; contains key regulatory phosphosites in vertebrate orthologs |
| Tyrosine kinase domain | Intracellular; activation-loop Tyr analogous to vertebrate INSR Tyr1158/1162/1163; primary signaling domain |
| C-terminal regulatory region | Substrate-docking; connects to IRS-domain scaffold proteins |

The structural homology to vertebrate insulin/IGF receptors was established by Kimura et al. 1997, who cloned *daf-2* and showed it encodes an insulin receptor family member [^kimura1997]. Key quantitative domain homologies from Kimura 1997: ligand-binding domain ~36% identical to insulin receptor (35% to IGF-I receptor); Cys-rich region 34% identical to insulin receptor (28% to IGF-I receptor); the **275-amino acid tyrosine kinase domain** is 70% similar and 50% identical to the human insulin receptor kinase domain [^kimura1997]. This defined the molecular basis for why *daf-2* LoF phenocopies aspects of reduced insulin/IGF-1 signaling in mammals.

## Insulin-like ligand repertoire (37 INS peptides per Pierce 2001)

Unlike vertebrates — which have a small, clearly defined set of insulin-related hormones — *C. elegans* encodes **37 insulin-like (*ins*) gene products** (ins-1 through ins-37), identified by systematic genome analysis [^pierce2001]. These fall into functional classes with respect to DAF-2:

- **Agonists** — activate DAF-2; promote DAF-16 phosphorylation and cytoplasmic retention; suppress longevity program. Of five *ins* genes tested in Pierce 2001, four without a predicted C peptide did not antagonize DAF-2. **DAF-28** is a well-characterized agonist described in other work; *daf-28* LoF partially extends lifespan (not from Pierce 2001 — attribution note: DAF-28 characterization is from Li et al. 2003 and Murphy et al. 2003).
- **Antagonists** — overexpression enhances dauer arrest in *daf-2* mutant backgrounds, indicating competition with endogenous agonist signaling. **INS-1** (the closest structural homolog to vertebrate insulin; 32% identity over B and A chains) and **INS-18** (the only other *ins* gene tested with a predicted C peptide) are established DAF-2 antagonists; high gene dosage of either enhances dauer arrest in *daf-2(e1365)* and wild-type backgrounds at 26°C [^pierce2001]. The ins-1 deletion mutant (nr2091) alone shows no phenotype, indicating functional redundancy among the 37 *ins* genes [^pierce2001].

The large, redundant *ins* gene family creates a buffering system: single deletion of most *ins* genes produces no phenotype, and the net balance of agonist vs antagonist *ins* signaling in different tissues likely contributes to tissue-specific aging rates and environmental sensing (food availability, temperature, pheromone cues) [^pierce2001]. #gap/needs-replication — the full agonist/antagonist classification of all 37 *ins* peptides is not complete; Pierce 2001 functionally tested only five.

## The IIS pathway downstream of DAF-2

DAF-2 activates the canonical insulin/IGF-1 signaling (IIS) cascade:

```
DAF-2 (activated by agonist ins peptides, e.g. DAF-28)
  → AGE-1 (PI3K catalytic subunit; C. elegans PI3K ortholog)
  → PIP3 production
  → PDK-1 (phosphoinositide-dependent kinase) recruitment
  → AKT-1 / AKT-2 / SGK-1 activation
  → DAF-16 phosphorylation (Thr273/Ser319 and analogous sites)
  → 14-3-3 binding → DAF-16 cytoplasmic retention → INACTIVE
```

When DAF-2 signaling is reduced (by LoF mutation, antagonist ins peptides, or food restriction):

```
Low DAF-2 activity → Low AGE-1 → Low PIP3
  → AKT-1/AKT-2 inactive → DAF-16 unphosphorylated
  → DAF-16 nuclear import
  → Longevity gene activation (sod-3, hsp-12.6, mtl-1, lys-7,...)
  → Stress resistance, extended lifespan
```

The downstream pathway, key interactors (AGE-1, PDK-1, AKT-1, AKT-2, SGK-1), and DAF-16 target gene program are detailed on the [[daf-16]] page.

## daf-2 alleles and the two-class system

Gems et al. 1998 conducted detailed phenotypic analysis of **16 alleles** (15 temperature-sensitive + 1 nonconditional *e979*/*e286*), plus 2 deficiency alleles (mDf11, mDf12), identifying **two overlapping pleiotropic classes** of *daf-2* mutation [^gems1998]. All 15 ts alleles increase adult lifespan; the greatest increases in maximum lifespan were approximately **3-fold** (300% of N2 wild type) [^gems1998]:

| Feature | Class I | Class II |
|---|---|---|
| Representative alleles | *e1368, e1371, sa193* (Class 1A); *m41* (Class 1B); *e1365, e1369, m577* (Class 1C); *m212* (Class 1D) | *m596* (2A); *m120, m579* (2B); *e1370* (2C); *e979, e1391* (2D); *sa223* (2E) |
| Constitutive dauer formation (Daf-c) | Yes | Yes |
| Lifespan extension | Yes (up to ~3× maximum at 15°) | Yes (up to ~3× maximum at 15°; but median lifespan extension often similar to or less than Class I at 22.5°) |
| Unfertilized oocyte production (>6%) at 25.5° | Low (< 6% for most) | Higher (> 6% for Class 2C–2E) |
| Adult motility defects (Unc) | Absent or late-onset | Present (variable by subclass) |
| Gonad morphology defects | Absent or mild | Present (Class 2C–2E) |
| Brood size reduction | Mild (60–100% N2) | More severe (< 60% N2 for Class 2C–2E) |
| Internal hatching > 20% at 22.5° | No | Yes (Class 2C–2E) |
| Late progeny production | No | Yes (Classes 2B–2E) |
| Embryonic/L1 arrest at 25.5° | Low (< 6%) | Higher (11–100% for Classes 2D–2E) |

**Practical implication:** The canonical allele used in most longevity studies — *daf-2(e1370)* — is a **Class 2C** allele. Its pleiotropic phenotypes (Unc motility, gonad abnormalities, brood size reduction < 60% N2, > 20% internal hatching at 22.5°, late progeny production) complicate interpretation of longevity assays. The reduction in median relative to maximum lifespan for *e1370* at 22.5° reflects these additional defects. Cleaner longevity phenotypes with less reproductive and motility confounding are seen in Class 1 alleles [^gems1998].

Both classes are suppressed by *daf-16* LoF, confirming that DAF-16 is the essential longevity effector regardless of allele class [^kenyon1993].

## Lifespan extension and epistasis

**Primary finding:** *daf-2(e1370)* extends *C. elegans* adult lifespan approximately **2-fold** compared to wild-type N2 worms, the largest single-gene longevity extension known at the time of the 1993 paper [^kenyon1993]. #gap/no-fulltext-access — Kenyon 1993 is closed-access; the exact n values, lifespan curves, and statistical tests cited here cannot be verified from a local PDF.

**Epistasis with *daf-16*:** Simultaneous LoF of *daf-16* completely suppresses *daf-2* longevity — *daf-2;daf-16* double mutants live no longer than wild-type worms [^kenyon1993]. This demonstrated that DAF-16 is the **essential downstream effector** of *daf-2*-dependent longevity, not merely one of several parallel effectors.

**Epistasis with *age-1*:** *age-1* (PI3K/AGE-1) LoF also extends lifespan; this extension is likewise *daf-16*-dependent [^kimura1997]. *daf-2* and *age-1* LoF are broadly epistatic (both act through the same pathway), confirming the linear DAF-2 → AGE-1 → DAF-16 axis.

**Epistasis with *hsf-1*:** HSF-1 (heat-shock factor 1) and DAF-16 cooperate downstream of *daf-2* LoF; simultaneous knockdown of both *hsf-1* and *daf-16* further reduces lifespan in *daf-2* mutants beyond either single knockdown alone — suggesting partially independent longevity transcriptional programs converge downstream of *daf-2* (see [[daf-16]] page, Hsu et al. 2003 section).

## Model-organism-to-human extrapolation

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | INSR + IGF1R are the vertebrate paralogs; PI3K → AKT → FOXO axis highly conserved |
| Phenotype conserved in humans? | partial | Igf1r+/- mice extend lifespan ~26% (Holzenberger 2003; see [[igf1r]]); FOXO3A variants associate with human longevity GWAS (see [[foxo3]]); no human equivalent of *daf-2* LoF |
| Replicated in humans? | no | Cannot genetically knock down the insulin/IGF-1 receptor for longevity; observational data only |

The quantitative magnitude of effect does not transfer linearly. *daf-2* LoF produces ~2-fold lifespan extension in a poikilothermic invertebrate with a 3-week lifespan. In mice, analogous perturbations (Igf1r+/- heterozygosity) yield ~26% extension — a meaningful but far smaller relative effect. In centenarian humans, rare IGF1R variants and FOXO3A SNPs are enriched, but effect sizes are small (OR 2–3× for specific genotypes) [^kenyon2010]. This **quantitative attenuation from invertebrate to vertebrate** is a general feature of the IIS-longevity connection and does not negate the conservation of the pathway logic.

#gap/needs-human-replication — No human intervention that specifically targets IIS at the DAF-2/INSR+IGF1R level has been shown to extend human lifespan in an RCT. All causal longevity evidence is from invertebrates and rodents.

## Aging context

DAF-2 represents the [[deregulated-nutrient-sensing]] hallmark in *C. elegans*. The connection between insulin/IGF-1 signaling intensity and lifespan reflects evolutionary logic: during periods of food abundance, high IIS promotes growth, reproduction, and somatic maintenance investment in the reproductive program; during scarcity, low IIS redirects resources to stress resistance, fat storage, and longevity programs (including dauer larva entry) [^kenyon2010]. *daf-2* LoF mimics chronic low-nutrient-sensing signaling, engaging the longevity program constitutively.

The DAF-2/IIS axis is the best-established mechanistic bridge between nutrient sensing and aging:

1. **Direct genetic evidence** — single-gene LoF doubles lifespan [^kenyon1993]
2. **Downstream mechanism identified** — DAF-16 nuclear localization as the key transcriptional switch [^kenyon1993]
3. **Conserved across species** — worm → fly → mouse → human GWAS [^kenyon2010]
4. **Pharmacologically tractable** — mTOR and IIS pathways share several targets (rapamycin, metformin) under clinical investigation (see [[mtor]], [[metformin]])

## Pathway membership

- [[insulin-igf1]] — DAF-2 is the receptor node at the top of the worm IIS cascade; the pathway page describes the full signal flow
- [[deregulated-nutrient-sensing]] — hallmark mechanistic basis; DAF-2 activity level encodes nutrient status
- [[ampk]] — parallel longevity pathway; AAK-2 (AMPK) and DAF-16 operate in parallel downstream of DAF-2 (see [[daf-16]] page, Apfeld 2004 section)

## Nomenclature note

The gene name *daf-2* derives from "**D**abnormal **D****A**uer **F**ormation" — *daf-2* was initially identified as a gene whose LoF causes constitutive dauer larva formation regardless of environmental conditions. The dauer larva is a long-lived, stress-resistant, non-feeding larval diapause state induced by starvation or overcrowding. The realization that the same gene controlling dauer entry also controls adult lifespan was the conceptual breakthrough: the dauer and adult longevity programs share a common IIS-dependent upstream regulator. See [[caenorhabditis-elegans]] for dauer biology.

## Related pages

- [[daf-16]] — primary downstream effector; *daf-16* LoF fully suppresses *daf-2* longevity; single ancestral FOXO
- [[age-1]] — PI3K catalytic subunit; immediately downstream of DAF-2
- [[insr]] — vertebrate insulin receptor; one of two paralogs derived from the DAF-2 ancestor
- [[igf1r]] — vertebrate IGF-1 receptor; second vertebrate paralog; Igf1r+/- mouse lifespan extension (Holzenberger 2003) directly inspired by the *daf-2* paradigm
- [[foxo3]] — primary mammalian DAF-16 ortholog; FOXO3A GWAS human longevity associations
- [[akt]] — AKT1/2 human ortholog of AKT-1/AKT-2; phosphorylates FOXO in mammals
- [[insulin-igf1]] — pathway page for the IIS cascade in aging
- [[caenorhabditis-elegans]] — model organism; dauer biology and worm aging context
- [[foxo1]] — second mammalian FOXO ortholog; hepatic insulin signaling

## Gaps and limitations

- #gap/no-fulltext-access — Kenyon 1993 (10.1038/366461a0) is closed-access; key founding-paper quantitative claims (exact n, survival curve numbers, daf-16 epistasis statistics) cannot be verified from local PDF.
- #gap/needs-canonical-id — GenAge-models entry number for *daf-2* not confirmed; search GenAge at `genomics.senescence.info/genes/models.php`.
- #gap/needs-replication — Full agonist/antagonist classification of all 37 *ins* peptides is incomplete; Pierce 2001 functionally tested only five; functional data from additional *ins* genes comes from other work (Kawano 2000, Li 2003, Murphy 2003, etc.).
- #gap/needs-human-replication — All causal longevity evidence is from invertebrates (and partial mammalian model organisms); no human LoF equivalent of *daf-2* has been studied.
- #gap/no-mechanism — The atomic-resolution structure of the DAF-2 extracellular ligand-binding domain in complex with an *ins* peptide ligand has not been solved; structural basis for agonist vs antagonist discrimination is not established.
- #gap/long-term-unknown — The relative contributions of different tissues (neurons, intestine, hypodermis, muscle) to *daf-2*-mediated lifespan extension are established at the level of tissue-specific rescue experiments but are not quantitatively partitioned across the 37 *ins* peptide inputs.

## Footnotes

[^kenyon1993]: doi:10.1038/366461a0 · Kenyon C, Chang J, Gensch E, Rudner A, Tabtiang R · in-vivo (C. elegans) · *daf-2(e1370)* LoF approximately doubles adult lifespan vs N2 wild-type; *daf-16* LoF completely suppresses longevity extension; founding paper of modern aging genetics · model: C. elegans N2 and mutant strains · not_oa #gap/no-fulltext-access

[^kimura1997]: doi:10.1126/science.277.5328.942 · Kimura KD, Tissenbaum HA, Liu Y, Ruvkun G · Science 277:942 (1997) · in-vivo + molecular cloning (C. elegans) · cloned *daf-2*; confirmed as sole insulin receptor family member in C. elegans genome; DAF-2 35% identical to human INSR, 34% to IGF-IR, 33% to insulin receptor-related receptor; kinase domain 275 aa, 50% identical/70% similar to human INSR kinase; cDNA ORF 5,538 bases; DAF-2 is proposed ancestor of all three vertebrate paralogs · model: C. elegans N2 + mutant alleles · local PDF verified

[^gems1998]: doi:10.1093/genetics/150.1.129 · Gems D, Sutton AJ, Sundermeyer ML, Albert PS, King KV, Edgley ML, Larsen PL, Riddle DL · Genetics 150:129 (1998) · in-vivo (C. elegans) · detailed phenotypic characterization of 16 *daf-2* alleles (15 ts + 1 nonconditional e979); two pleiotropic classes defined — Class 1 (Daf-c, Age, Itt; low embryonic arrest, mild reproductive defects) and Class 2 (all Class 1 traits plus Unc motility, gonad abnormalities, severe brood reduction, internal hatching > 20%, late progeny); greatest lifespan extension ~3-fold maximum at 15°; e1370 is Class 2C · model: C. elegans · local PDF verified (downloaded 2026-05-04)

[^pierce2001]: doi:10.1101/gad.867301 · Pierce SB, Costa M, Wisotzkey R, Devadhar S, Homburger SA, Buchman AR, Ferguson KC, Heller J, Platt DM, Pasquinelli AA, Liu LX, Doberstein SK, Ruvkun G · Genes Dev 15:672 (2001) · in-vivo + molecular (C. elegans) · identified **37** *ins* gene family members (ins-1 through ins-37) by systematic genome search; INS-1 (closest to vertebrate insulin, 32% B+A chain identity) and INS-18 are DAF-2 antagonists — overexpression enhances dauer arrest in daf-2 and wild-type backgrounds; human insulin also antagonizes DAF-2 signaling; only ins genes with predicted C peptide (INS-1, INS-18) antagonize DAF-2; ins-1 deletion (nr2091) has no phenotype alone (functional redundancy); ins-1 wild-type life span unaffected by deletion · model: C. elegans · local PDF verified (downloaded 2026-05-04)

[^kenyon2010]: doi:10.1038/nature08980 · Kenyon CJ · review (Nature) · comprehensive review of IIS-FOXO axis across species; DAF-16 target genes; quantitative attenuation from worm to mouse to human; mammalian extrapolation framework · local PDF available
