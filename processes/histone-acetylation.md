---
type: process
aliases: [HAT/HDAC dynamics, lysine acetylation chromatin, histone acetyltransferase, histone deacetylase]
key-proteins: ["[[hdac]]", "[[sirt1]]", "[[sirt6]]", "[[sirt3]]"]
pathways: ["[[sirtuin]]"]
hallmarks: ["[[epigenetic-alterations]]"]
selective-variants: []
druggability-tier: 2
caused-by: ["[[deregulated-nutrient-sensing]]"]
causes: ["[[epigenetic-alterations]]", "[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Dang 2009 (local PDF): H4K16ac/Sir2/Sas2 yeast lifespan claims verified — aging direction corrected (H4K16ac increases at subtelomeres in old cells, not decreases) and lifespan genetics corrected (sas2Δ and SIR2-OE both extend lifespan; K16Q shortens). Imai 2000 (local PDF): NAD+-dependent Sir2 mechanism and O-acetyl-ADP-ribose product confirmed correct. Das 2009 (local PDF): CBP/p300 as metazoan H3K56 writer confirmed; corrected cell-cycle framing (H3K56ac present throughout cell cycle, not exclusively DNA-damage context); SIRT2 established as primary eraser. Feser 2010 (local PDF): histone protein decline with age + H3/H4 OE extends lifespan claims verified; corrected footnote from 'restores H3K56ac' to histone-stoichiometry mechanism; lifespan numbers (~30-50% extension) added. Pal & Tyler 2016 (local PDF): review synthesis claims spot-checked and consistent with primary sources; local PDF status updated. Sivanand 2018 TIBS (download failed, green OA not fetchable): acetyl-CoA compartmentalization claims unverifiable from full text — tagged #gap/no-fulltext-access; retain as low-load-bearing review citation. Sen 2019 Mol Cell (download failed, green OA not fetchable): p300/SASP super-enhancer claims unverifiable from full text — tagged #gap/no-fulltext-access; single lab report, retain #gap/needs-replication. Druggability-tier corrected: 1 → 2 (aging-context convention per CLAUDE.md R27, consistent with [[hdac]] verified R31)."
---

# Histone Acetylation

The reversible addition of acetyl groups to lysine residues on histone tails, catalyzed by histone acetyltransferases (HATs) and removed by histone deacetylases (HDACs). Acetylation neutralizes the positive charge of lysine, relaxing histone-DNA contacts and generally promoting transcriptional access. **Globally, histone acetylation declines with age** across yeast, worm, fly, and mammalian tissues, but the relationship is mark- and locus-specific — some sites lose acetylation, others gain it aberrantly. This process is a core mechanistic substrate of the [[epigenetic-alterations]] hallmark.

This page covers the acetyltransferase/deacetylase cycle and its aging-specific changes. For the full histone PTM landscape (methylation, phosphorylation, ubiquitination), see [[histone-modification]]. For NAD+-dependent deacylases specifically, see [[sirtuin]] (pathway page) and [[sirt1]], [[sirt6]] (protein pages). For Zn²+-dependent HDACs, see [[hdac]].

---

## Writers: histone acetyltransferases (HATs)

HATs transfer the acetyl group from **acetyl-CoA** to the ε-amino group of lysine side chains. They are grouped into families by catalytic domain:

| HAT (alias) | Family | Primary substrates | Key function |
|---|---|---|---|
| GCN5 / KAT2A | GNAT | H3K9ac, H3K14ac | SAGA complex; transcription elongation |
| PCAF / KAT2B | GNAT | H3K9ac | Coactivator; p53 acetylation |
| CBP / KAT3A | KAT3 (p300/CBP) | H3K18ac, H3K27ac, H3K56ac | Transcriptional coactivator; enhancer activation; recruited by nuclear receptors |
| p300 / KAT3B | KAT3 (p300/CBP) | H3K18ac, H3K27ac, H3K56ac | Broadly similar to CBP; super-enhancer formation; pro-senescence role [^sen2019] |
| MOZ / KAT6A | MYST | H3K9ac, H3K14ac | Hematopoiesis; stem-cell self-renewal |
| MORF / KAT6B | MYST | H3K9ac | Development; cognitive function |
| MOF / KAT8 | MYST | **H4K16ac** (primary) | Dosage compensation; DDR; the predominant H4K16ac writer |
| Tip60 / KAT5 | MYST | H4K5ac, H4K8ac, H4K16ac | DDR; apoptosis; ATM activation |

The KAT3 enzymes (CBP/p300) are particularly aging-relevant. p300 accumulates at de novo super-enhancers in senescent cells and drives SASP gene expression [^sen2019]. #gap/needs-replication #gap/no-fulltext-access — Sen 2019 PDF unavailable (download failed despite green OA status); claim unverified against primary source.

H3K56ac is written by Rtt109 (yeast-specific) or by CBP/p300 in metazoans (Drosophila Nejire/CBP and human CBP/p300). Das et al. 2009 showed that H3K56ac is present throughout the mammalian cell cycle (not exclusively S phase) and is increased by DNA damage; SIRT1 and SIRT2 are the primary H3K56ac deacetylases in human cells [^das2009].

---

## Erasers: histone deacetylases (HDACs)

Two mechanistically distinct classes remove acetylation:

### Class I/II/IV — Zn²+-dependent HDACs (HDAC1–11)

Eleven mammalian HDACs use a zinc ion in the catalytic cleft. Grouped by structure and localization:

| Class | Members | Primary localization | Key substrates |
|---|---|---|---|
| I | HDAC1, HDAC2, HDAC3, HDAC8 | Nuclear | H3K9ac, H3K27ac; transcriptional repression |
| IIa | HDAC4, HDAC5, HDAC7, HDAC9 | Nuclear ↔ cytoplasm | Muscle, cardiac gene programs |
| IIb | HDAC6, HDAC10 | Cytoplasm | α-tubulin; cytoskeletal dynamics |
| IV | HDAC11 | Nuclear | Immune regulatory functions |

Full mechanism and aging evidence: see [[hdac]].

### Class III — NAD+-dependent sirtuins (SIRT1–7)

Seven mammalian sirtuins require NAD+ as a co-substrate, consuming one molecule per deacylation cycle and producing nicotinamide (NAM) + O-acetyl-ADP-ribose as products [^imai2000]. Sirtuin activity is therefore directly coupled to cellular energy and NAD+ availability — a critical metabolic-epigenetic link.

Imai et al. 2000 established that Sir2 (the yeast founding member) is an NAD+-dependent histone deacetylase, not a simple transcriptional silencer, identifying NAD+ as the mechanistic bridge between metabolic state and chromatin silencing [^imai2000].

Aging-relevant sirtuin/histone substrate pairings:

| Sirtuin | Histone substrate | Aging relevance |
|---|---|---|
| SIRT1 | H4K16ac (primary), H3K9ac | SIRT1 activity declines with age due to NAD+ depletion → H4K16ac accumulates at subtelomeric and other normally-silenced loci (pro-aging direction) |
| SIRT6 | H3K9ac, H3K56ac | Declines with age; KO mice are progeroid; [[sirt6]] overexpression extends mouse lifespan |
| SIRT2 | H4K16ac (cytoplasm/mitosis) | Microtubule regulation; reduced in aged brain |
| SIRT3 | Histone deacylation (minor); predominantly mitochondrial targets | [[sirt3]] — NAD+ depletion with age reduces mitochondrial protein acetylation |

Full mechanism and aging evidence: [[sirtuin]] (pathway) and [[sirt1]], [[sirt6]] (protein pages).

---

## Key marks and their aging trajectories

| Mark | Primary writer | Primary eraser | Aging change | Functional consequence |
|---|---|---|---|---|
| **H4K16ac** | MOF/KAT8 | SIRT1 (nuclear) | Increases at subtelomeric X elements in old yeast cells, concurrent with Sir2 protein decline [^dang2009]; global changes in mammalian aging are less characterized | Age-associated gain at subtelomeres accompanies loss of Sir2 and chromatin derepression; the Sir2/Sas2 balance is the lifespan-regulatory axis in yeast |
| **H3K27ac** | CBP/p300 | HDAC1/2/3 | Locus-specific; often lost at enhancers of tissue-identity genes; gained at inflammatory loci | Underlies age-related enhancer rewiring |
| **H3K9ac** | GCN5, PCAF | SIRT1, SIRT6, HDAC1/2 | Declines globally; SIRT6-regulated sites particularly affected | Active promoter mark; loss contributes to transcriptional silencing of stress-response genes |
| **H3K56ac** | Rtt109 (yeast); CBP/p300 / Nejire (metazoans) [^das2009] | SIRT2 (primary in human cells), SIRT1; Hst3/Hst4 (yeast) [^das2009] | Histone protein levels (and thus H3K56ac) decline with replicative age in yeast; linked to defective DDR and shortened lifespan [^feser2010] | Present throughout cell cycle; increased by DNA damage; required for histone deposition; decline may impair replication-coupled chromatin assembly |
| **H3K18ac** | CBP/p300 | SIRT7 | Variable; context-dependent | Promoter activation; lost at tumor suppressor loci in cancer and aging |

### H4K16ac as the primary aging axis

The most mechanistically grounded aging link involves H4K16ac. Dang et al. 2009 showed that in replicatively aging yeast:

- H4K16ac **increases** at subtelomeric X core and X repeat elements in old cells (mean bud scar ~22.5 generations), while overall histone H3 and H4 levels at those loci decrease — Sir2 protein abundance also declines post-transcriptionally in old cells
- The acetyltransferase **Sas2** (the yeast MOF/KAT8 homolog) normally antagonizes **Sir2** (SIRT1 homolog) to set the boundary of H4K16ac near telomeres; in young cells Sir2 keeps H4K16ac low at the subtelomeric heterochromatin
- **Deleting SAS2** (*sas2Δ*) extends median replicative lifespan (32.4 vs 26.7 generations in WT); **overexpressing SIR2** also extends lifespan (31.4 generations) — both manipulations reduce subtelomeric H4K16ac and stabilize histone levels at telomeres; *sas2Δ SIR2*-OE does not extend further
- H4K16Q mutation (mimicking permanent acetylation) **shortens** lifespan (mean 11.7 vs 17.8); H4K16R (blocking acetylation) shows only marginal shortening — indicating that hyperacetylation at H4K16 is pro-aging, and Sir2-mediated deacetylation is the lifespan-extending direction [^dang2009]
- Old cells show the Sir2 protein is lost, Sas2 spreads outward, and H4K16ac accumulates at telomeric X elements — disrupting transcriptional silencing at those loci [^dang2009]

This established the H4K16ac/Sir2 axis as a direct regulator of cellular lifespan, not merely a correlate: it is the *gain* of H4K16ac at subtelomeric heterochromatin (due to age-associated Sir2 protein loss) that is the aging-correlated change, and interventions that restore Sir2 activity or reduce Sas2 activity extend lifespan. #gap/needs-human-replication — the H4K16ac lifespan axis has been demonstrated in yeast replicative aging; the quantitative relationship in human somatic tissues is less well-characterized.

| Dimension | Status |
|---|---|
| H4K16ac decline with age conserved in humans? | partial — consistent with SIRT1 decline in aged human tissues, but large-scale tissue surveys are sparse #gap/needs-human-replication |
| Pathway (Sir2/Sas2 axis) conserved in humans? | yes — SIRT1/MOF are functional human orthologs; phenotypic data in humans is indirect |
| Lifespan extension via H4K16ac manipulation validated in mammals? | no — yeast only to date; mouse studies in progress #gap/needs-human-replication |

---

## Acetyl-CoA: the metabolic-epigenetic bridge

All HAT activity requires **acetyl-CoA** as the obligate acetyl-group donor. Acetyl-CoA pool size and subcellular distribution therefore directly set the ceiling on bulk histone acetylation:

- **Glycolysis → pyruvate → acetyl-CoA** (via ACLY in the nucleus/cytoplasm) is the primary nuclear acetyl-CoA source
- **TCA cycle** provides mitochondrial acetyl-CoA (not directly accessible to HATs; must be exported as citrate and reconverted by ACLY)
- **Fatty-acid oxidation** elevates acetyl-CoA but also raises NADH, which can reduce NAD+ availability for sirtuins

Caloric restriction (CR) reduces intracellular acetyl-CoA, broadly lowering histone acetylation — particularly at growth-promoting and anabolic gene programs. This is one proposed mechanism for CR's epigenetic reprogramming effect. Simultaneously, CR elevates NAD+, activating sirtuins [^sivanand2018]. #gap/no-fulltext-access — Sivanand 2018 TIBS PDF unavailable (download failed despite green OA status); acetyl-CoA compartmentalization claims unverified against primary review text. The two effects converge on reduced HAT input + increased HDAC activity, explaining why CR broadly silences pro-growth programs. #gap/no-mechanism — the specific loci and marks that change directionally during CR in humans are not fully mapped; blood-based studies are confounded by cell-type composition changes.

The subcellular acetyl-CoA compartmentalization means that metabolic perturbations (fasting, ketosis, hyperglycemia) differentially affect nuclear vs. mitochondrial acetylation pools — an area of active research [^sivanand2018]. #gap/no-fulltext-access

---

## Role in aging: synthesis

Global histone acetylation declines with age across model organisms, but the pattern is not simply one of uniform loss:

1. **Loss at heterochromatin boundaries** (H4K16ac, H3K9ac at subtelomeric and pericentromeric regions) — associated with heterochromatin relaxation, transposable element re-activation, and genomic instability. See [[genomic-instability]] hallmark.

2. **Gain at inflammatory and SASP loci** (p300-dependent H3K27ac and H3K18ac at NF-κB targets) — p300 is recruited to de novo super-enhancers in senescent cells, amplifying SASP gene expression [^sen2019].

3. **Decline at tissue-identity enhancers** (H3K27ac loss at cell-type-specific enhancers) — contributes to age-related loss of cellular identity and drift toward more plastic / de-differentiated states.

4. **Reduced H3K56ac in DNA-damage response** — impairs chromatin reassembly after replication, increasing stochastic epigenetic errors per cell division [^feser2010].

Elevated histone gene expression (increasing bulk histone protein availability) extends yeast replicative lifespan — overexpression of H3/H4 extends median lifespan by ~30% in wild-type yeast and up to ~50% with higher induction, via a pathway distinct from Sir2-ERC suppression and from caloric restriction [^feser2010]. Histone levels decline with age in yeast, and this decline is causal: the Hir repressor (which limits histone gene expression outside S phase) is a limiting factor for lifespan. This argues that histone stoichiometry per se is limiting during aging, independently of specific modification states.

---

## Aging interventions targeting this process

### HDAC inhibitors — increasing bulk acetylation

FDA-approved HDAC inhibitors (vorinostat/SAHA, romidepsin, panobinostat, belinostat) broadly block Zn²+-dependent HDACs, elevating histone acetylation at many loci. These are oncology drugs, not aging drugs, at approved doses.

In aging research contexts:
- **Butyrate** (short-chain fatty acid; produced by gut microbiota; HDAC I/II inhibitor): dietary or supplement form tested in multiple model systems; extends lifespan in *Drosophila* and worms; mechanisms include increased H3K27ac at stress-response genes. Human evidence limited to microbiome-mediated effects. #gap/needs-human-replication
- **Valproate** (HDAC inhibitor / mood stabilizer): extends worm lifespan; no aging-specific human data. #gap/needs-human-replication

For the full class-level treatment: see [[interventions/pharmacological/hdac-inhibitors]] (queued).

### Sirtuin activators — context-specific deacetylation

NAD+ precursors (NR, NMN) restore sirtuin activity by replenishing the NAD+ co-substrate. Net effect on histone acetylation is mark-specific — SIRT1 deacetylates H4K16ac (reversing age-related aberrant gain at some loci), SIRT6 deacetylates H3K9ac and H3K56ac (reinforcing heterochromatin and DDR). See [[interventions/pharmacological/sirtuin-activators]] and [[sirt1]], [[sirt6]] for human trial evidence.

### Caloric restriction / fasting

CR lowers nuclear acetyl-CoA (reducing HAT substrate availability) and raises NAD+ (activating sirtuins). The combined effect broadly suppresses acetylation of pro-growth programs and is a leading mechanistic explanation for CR's conserved lifespan extension across organisms. The precise histone marks affected in human CR are not yet resolved at the tissue level. #gap/needs-human-replication

---

## Limitations and gaps

- **Human tissue atlas of age-related acetylome changes is incomplete.** Most data come from yeast replicative aging or murine models. CUT&RUN / ChIP-seq with aging resolution in human primary tissues is sparse and dominated by blood-derived cells. #gap/needs-human-replication
- **Locus-specificity vs. global trends.** Bulk biochemical measurements (western blot, mass spectrometry) measure average acetylation and mask opposing changes at specific loci. The aging acetylome is highly context-dependent. #gap/no-mechanism
- **HDAC inhibitor therapeutic window for aging.** At oncology doses, HDAC inhibitors broadly de-repress silenced regions (including transposable elements), which may worsen genomic instability in aged cells. A safe geroprotective dose range has not been established in humans. #gap/long-term-unknown #gap/dose-response-unclear
- **Acetyl-CoA compartmentalization with age.** Whether aging alters the nuclear acetyl-CoA pool specifically (vs. total cellular acetyl-CoA) is not well-characterized. The ACLY → nuclear acetyl-CoA route is an understudied target. #gap/no-mechanism
- **H4K16ac quantification in human aging.** The yeast lifespan axis (Dang 2009) has not been replicated with equivalent resolution in human somatic tissues at single-cell scale. Whether H4K16ac is actually globally reduced in aged human postmitotic cells (vs. dividing cells where replication-coupled mechanisms dominate) remains open. #gap/needs-human-replication

---

## Footnotes

[^imai2000]: doi:10.1038/35001622 · Imai S, Armstrong CM, Kaeberlein M, Guarente L · *Nature* 2000 · in-vitro + in-vivo · n/a · model: *S. cerevisiae* + biochemical; demonstrated Sir2 is an NAD+-dependent histone deacetylase consuming one NAD+ per deacetylation cycle; established the metabolic-epigenetic link; cited >3,400 times; local PDF available
[^dang2009]: doi:10.1038/nature08085 · Dang W, Steffen KK, Perry R, Dorsey JA, Johnson FB, Shilatifard A, Kaeberlein M, Kennedy BK, Berger SL · *Nature* 2009 · in-vivo · n/a · model: *S. cerevisiae* replicative aging; H4K16ac declines at subtelomeric chromatin in aged yeast; Sir2/Sas2 balance controls lifespan; cited >640 times; local PDF available
[^das2009]: doi:10.1038/nature07861 · Das C, Lucia MS, Hansen KC, Tyler JK · *Nature* 2009 · in-vitro + in-vivo · n/a · model: *Drosophila* S2 cells + human HeLa/S2 cells; established Drosophila Nejire/CBP and human CBP/p300 as the metazoan H3K56 acetyltransferases; SIRT1/SIRT2 are the primary H3K56ac deacetylases; H3K56ac present throughout cell cycle, increased by DNA damage; corrigendum published Nature 460:1164 (2009) correcting Fig. 4e label (does not affect main conclusions); cited >680 times; local PDF available
[^feser2010]: doi:10.1016/j.molcel.2010.08.015 · Feser J, Truong D, Das C, Carson JJ, Kieft J, Harkness T, Tyler JK · *Molecular Cell* 2010 · in-vivo · n/a · model: *S. cerevisiae*; core histone protein levels decline profoundly during replicative aging; yeast lacking Asf1 (histone chaperone) or H3K56ac (rtt109Δ) are short-lived; overexpression of H3/H4 extends median replicative lifespan ~30–50% via a pathway distinct from Sir2/ERC or caloric restriction; local PDF available
[^sen2019]: doi:10.1016/j.molcel.2019.01.021 · Sen P, Lan Y, Li CY, Sidoli S, Donahue G, Dou Z, Frederick B, Chen Q, Luense LJ, Garcia BA, Dang W, Johnson FB, Adams PD, Schultz DC, Berger SL · *Molecular Cell* 2019 · in-vitro + in-vivo · n/a · model: human IMR90 fibroblasts + mouse; p300 writes H3K27ac at de novo super-enhancers in senescent cells, driving SASP; cited >138 times; download failed (green OA, not_fetchable) — #gap/no-fulltext-access
[^sivanand2018]: doi:10.1016/j.tibs.2017.11.004 · Sivanand S, Viney I, Wellen KE · *Trends in Biochemical Sciences* 2018 · review · n/a · model: mammalian; comprehensive review of acetyl-CoA subcellular compartmentalization and its control of histone acetylation; covers ACLY, ACSS2, mitochondrial export; cited >324 times; download failed (green OA, not_fetchable) — #gap/no-fulltext-access
[^paltyle2016]: doi:10.1126/sciadv.1600584 · Pal S, Tyler JK · *Science Advances* 2016 · review · n/a · model: multiple organisms; comprehensive review of epigenetic changes with aging including histone acetylation, methylation, chromatin remodeling, and retrotransposon reactivation across yeast, worm, fly, and mammals; covers heterochromatin loss model, global histone decline, histone modification changes, and histone variant changes; cited >792 times; local PDF available
