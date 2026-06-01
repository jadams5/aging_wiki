---
type: protein
aliases: [AGE-1, C. elegans PI3K p110 catalytic subunit, age-1 phosphatidylinositol 3-kinase, aging alteration protein 1, DAF-23]
uniprot: Q94125
ncbi-gene: 174762
hgnc: null
wormbase-id: WBGene00000090
genage-id: 174762
organism: Caenorhabditis elegans
key-domains: [PI3K-ABD, PI3K-RBD, C2-PI3K, PIK-helical, PI3K-PI4K-catalytic]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: null  # #gap/no-opentargets-entry — C. elegans gene, Open Targets is human-only
caused-by: []
causes: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Friedman & Johnson 1988 (local PDF) and Hertweck 2004 (local PDF) claims fully verified; Morris 1996 (not_oa) claims unverifiable — tagged #gap/no-fulltext-access; UniProt Q94125 and NCBI Gene 174762 confirmed via cross-reference in Q94125 record per seeder note"
---

# AGE-1 (age-1)

AGE-1 is the *Caenorhabditis elegans* Class IA phosphatidylinositol 3-kinase (PI3K) catalytic subunit — the worm ortholog of mammalian p110α/p110β. It occupies a pivotal position in the [[insulin-igf1]] signaling (IIS) axis as the enzyme that converts phosphatidylinositol 4,5-bisphosphate (PIP2) to phosphatidylinositol 3,4,5-trisphosphate (PIP3) downstream of the [[daf-2]] receptor. Loss-of-function alleles extend *C. elegans* lifespan substantially. Historically, *age-1* holds the distinction of being the **first individual gene demonstrated to extend lifespan when mutated** in any animal — a finding that predated the cloning of [[daf-2]] by five years and established that single-gene mutations can substantially lengthen animal lifespan [^friedman1988].

## Identity

| Field | Value |
|---|---|
| UniProt | Q94125 (AGE1_CAEEL) |
| WormBase | WBGene00000090 |
| NCBI Gene | 174762 |
| ORF name | B0334.8 |
| HGNC | null (non-human gene; no HGNC entry) |
| GenAge model organisms | 174762 (longevity influence: anti-longevity; lifespan effect: increase on LoF) |
| Length | 1,182 amino acids (UniProt canonical; note: brief stated 1,209 aa — not confirmed; use 1,182 from Q94125) |
| Organism | *Caenorhabditis elegans* (taxon 6239) |

**Note on canonical ID corrections:** The task brief cited UniProt Q17758 and NCBI Gene 174213 — neither resolves to age-1. Q17758 resolves to pept-2 (a peptide transporter), and NCBI Gene 174213 resolves to a discontinued srd-52 record. The correct accession is **Q94125** (confirmed via UniProt search for gene:age-1 + organism_id:6239) and NCBI Gene **174762** (confirmed via WormBase cross-reference in Q94125 JSON). These corrections are flagged for propagation to any upstream records that may carry the erroneous identifiers.

## Domain organization

AGE-1 shares the canonical Class I PI3K domain architecture with mammalian p110α (PIK3CA) and p110β (PIK3CB):

| Domain | Residues (approximate) | Function |
|---|---|---|
| PI3K-ABD (adapter-binding domain) | 74–174 | Binds regulatory subunit (homologous to p85 SH2-mediated interaction in mammals) |
| PI3K-RBD (Ras-binding domain) | 266–358 | Potential Ras/Rho-family small GTPase interaction |
| C2 PI3K-type | 425–577 | Membrane targeting; Ca2+-independent |
| PIK helical | 601–788 | Scaffold; mediates inter-domain contacts |
| PI3K/PI4K catalytic | 853–1168 | ATP binding; phosphotransfer; PIP2 → PIP3 |

Subcellular locations: cytoplasm, plasma membrane, non-motile cilium, phosphatidylinositol 3-kinase complex.

The mammalian orthologs of AGE-1 are **p110α** (PIK3CA) and **p110β** (PIK3CB) — both Class IA catalytic subunits. AGE-1 is the sole Class IA PI3K catalytic subunit in *C. elegans*, whereas mammals have three Class I catalytic subunits (p110α, p110β, p110δ) plus a Class IB (p110γ). See [[pi3k]] for the full mammalian PI3K family.

## Historical significance: the first lifespan gene

In 1988, Friedman and Johnson reported that mutations at the *age-1* locus — isolated in a mutagenesis screen for hermaphrodites with altered lifespan and fertility — extended the mean and maximum lifespan of *C. elegans* [^friedman1988]. The original allele characterized was *age-1(hx546)*, isolated in a *fer-15* background (a temperaturesensitive sterile allele used to prevent progeny overlap confounding lifespan measurements). At 25°C in the *fer-15(b26ts);age-1(hx546)* double mutant (strain MK546, full genotype *age-1(hx546) fer-15(b26ts)* II; *unc-31(z1)* IV), mean lifespan was extended approximately 65% and maximum lifespan approximately 110% compared to wild-type N2 hermaphrodites (25.3 d vs 15.0 d mean; 46.2 d vs 22.0 d maximum) [^friedman1988]. At 20°C, the same strain showed ~40% mean and ~60% maximum lifespan extension relative to wild-type [^friedman1988].

**Why this was paradigm-shifting:** Before 1988, prevailing models held that aging was a passive stochastic process not subject to simple genetic control. The demonstration that a single gene mutation could extend lifespan without apparent cost to normal development (aside from reduced fertility in the *fer-15* background) was conceptually revolutionary. It implied that aging rate is under active genetic regulation — a foundational premise of modern biogerontology.

**The fer-15 background caveat:** The Friedman 1988 strains used *fer-15(b26ts);age-1(hx546)* double mutants (specifically MK546 and TJ401, carrying *unc-31* alleles). *fer-15(b26ts)* is a temperature-sensitive spermatogenesis mutant that renders hermaphrodites self-sterile at 25°C, preventing progeny overlap and confounding of lifespan measurements. Critically, *age-1* is tightly linked to *fer-15* on linkage group II — the association arose in the original mutant isolation, not from deliberate crossing. This raised early concerns about whether the longevity effect was intrinsic to *age-1* or an artifact of the fer-15 background or the *unc-31* co-allele. Subsequent studies showed that *age-1* LoF extends lifespan in single mutant backgrounds (without *fer-15*), confirming the effect is intrinsic to *age-1* [^morris1996]. #gap/needs-replication — fer-15 background verification requires primary source; Morris 1996 is not_oa.

The gene responsible for the *age-1* locus was molecularly cloned eight years later as a PI3K family member by Morris et al. [^morris1996].

## Function in the IIS pathway

AGE-1 acts immediately downstream of the [[daf-2]] insulin/IGF-1 receptor. The canonical signaling sequence:

1. DAF-2 (insulin/IGF-1 receptor) activation → receptor autophosphorylation → recruitment of IST-1 (IRS-1 ortholog) or direct coupling
2. AGE-1 catalytic activity: PIP2 → **PIP3** (phosphatidylinositol 3,4,5-trisphosphate)
3. PIP3 acts as a second messenger at the plasma membrane, recruiting PDK-1 (3-phosphoinositide-dependent kinase)
4. PDK-1 phosphorylates and activates **AKT-1** and **AKT-2** (AKT/PKB orthologs) and — critically — **SGK-1** (serum and glucocorticoid-regulated kinase)
5. Activated AKT-1/2 and SGK-1 phosphorylate **DAF-16** (FOXO transcription factor), creating 14-3-3 docking sites → DAF-16 cytoplasmic sequestration → repression of DAF-16 pro-longevity transcriptional program

The **PIP3 phosphatase** opposing AGE-1 is **DAF-18**, the *C. elegans* ortholog of [[pten]]. Loss of *daf-18* partially suppresses *age-1* LoF lifespan extension.

### SGK-1 is the dominant downstream longevity kinase

A critical refinement: for longevity specifically, SGK-1 is the dominant output of the AGE-1/PDK-1 axis — not AKT-1 or AKT-2. Hertweck et al. showed that *sgk-1* LoF extends lifespan by ~63% (14.7 → 24.0 d, p<0.0001, n=147), while *akt-1* LoF alone is not significant (p=0.1642) and *akt-2* LoF alone is not significant (p=0.3717) [^hertweck2004]. This corrects earlier models that attributed IIS longevity primarily to the AKT-1/2 branch. See [[sgk1]] and [[akt]] for full detail. #gap/needs-human-replication — SGK-1 dominance in worm longevity has not been tested in mammalian aging models.

## Loss-of-function lifespan phenotypes

| Condition | Background | Lifespan extension | Temperature | Notes |
|---|---|---|---|---|
| *age-1(hx546)* | *fer-15(b26ts)* double mutant (MK546: *age-1(hx546) fer-15(b26ts)* II; *unc-31(z1)* IV) | ~65% mean / ~110% max vs wild-type N2 (25.3 d vs 15.0 d; 46.2 d vs 22.0 d) | 25°C | Friedman & Johnson 1988; hermaphrodite data from abstract + Table 1 |
| *age-1(hx546)* | *fer-15* double mutant | ~40% mean / ~60% max | 20°C | Friedman & Johnson 1988 abstract; same double-mutant background as 25°C row. Single-mutant lifespan at 20°C not reported in this paper — see Morris 1996 (#gap/no-fulltext-access) |
| *age-1* strong LoF | Various | Constitutive dauer formation at 25°C | 25°C | Severe alleles bypass the dauer-arrest checkpoint (daf-23 phenotype) |

Note: *age-1* strong LoF alleles were previously called *daf-23* (abnormal dauer formation) — DAF-23 is an alias for AGE-1. The *daf-23* phenotype (constitutive dauer entry at 25°C) and the *age-1* longevity phenotype reflect overlapping allelic series at the same locus.

The DAF-16 dependence of *age-1* lifespan extension is well-established: *daf-16* LoF completely suppresses the longevity of *age-1* mutants, confirming that DAF-16 nuclear activity is required for the lifespan benefit. #gap/needs-replication — this claim requires a primary-source citation (e.g., Kenyon 1993, Ogg et al. 1997, or Paradis & Ruvkun 1998); Friedman & Johnson 1988 predates the identification of DAF-16 and cannot be cited for this. See [[daf-16]] for the FOXO transcriptional program.

## AMPK/AAK-2 interaction

The [[ampk]] ortholog in worms is **AAK-2**. Apfeld et al. showed that AAK-2 acts **in parallel** to the IIS/DAF-16 axis rather than upstream or downstream of it: *daf-16;aak-2* double mutants show a further ~15% additive lifespan shortening beyond each single mutant [^apfeld2004]. This means AMPK-mediated longevity signals flow through a DAF-16-independent branch, and the two pathways converge additively (not epistatically) on lifespan. #gap/needs-replication — verified on [[caenorhabditis-elegans]] page (Apfeld 2004 PDF verified; additive framing confirmed).

Implication for AGE-1: AGE-1/IIS and AAK-2/AMPK are separable longevity axes. Interventions that inhibit AGE-1 and activate AAK-2 may have additive lifespan effects.

## Dauer regulation

Beyond adult longevity, AGE-1 regulates **dauer diapause** — a developmentally arrested, stress-resistant larval stage entered when food is scarce, population is crowded, or temperature is high. In dauer larvae:
- DAF-2/AGE-1 signaling is low
- DAF-16 is nuclear and active
- Metabolic reprogramming to fat storage and stress resistance occurs
- Dauer larvae can survive for months without food (vs. ~3-week adult lifespan)

*age-1* LoF shifts the developmental program toward dauer entry; strong alleles produce constitutive dauer formation. This shared genetic control of dauer and adult longevity was a key early observation linking the IIS pathway to lifespan regulation — both are controlled by DAF-2/AGE-1 → PDK-1 → AKT/SGK → DAF-16 signaling.

## Conservation and human extrapolation

AGE-1 is orthologous to human Class IA PI3K catalytic subunits p110α (PIK3CA) and p110β (PIK3CB):

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | PI3K/AKT/FOXO axis is highly conserved; IIS pathway acts on longevity in flies, mice, and humans (FOXO3A longevity associations, IGF1R variants in centenarians) |
| Phenotype conserved in humans? | partial | IIS reduction extends lifespan in multiple invertebrate + mammalian models; human evidence is genetic association (not intervention); see [[insulin-igf1]] and [[igf1r]] |
| Replicated in humans? | no | No human trial of PI3K inhibition for longevity; PI3K inhibitors (alpelisib, copanlisib) are cancer drugs with significant toxicity profiles |

#gap/needs-human-replication — Direct PI3K reduction for longevity benefit is undemonstrated in humans. Cancer pharmacology of PI3K inhibitors suggests a narrow therapeutic window for any longevity application.

Key divergences from mammals:
- *C. elegans* has a single Class IA PI3K catalytic subunit; mammals have three (p110α/β/δ)
- *C. elegans* IIS integrates signals from ~40 *ins* peptide ligands (see [[daf-2]]); mammalian IIS is driven by discrete insulin and IGF-1 hormones
- Worm lifespan is measured in days/weeks; human lifespan decades — translation of magnitude estimates across this timescale is uncertain

## Pathway membership

- [[insulin-igf1]] — canonical IIS pathway; AGE-1 is the core lipid kinase node
- [[pi3k-akt-pathway]] — mammalian ortholog pathway (p110/AKT/FOXO axis)
- [[daf-2]] — upstream receptor; AGE-1 is activated by DAF-2 signaling
- [[daf-16]] — downstream transcription factor; AGE-1 activity represses DAF-16 nuclear localization

## Key interactors

- [[daf-2]] — upstream receptor; activates AGE-1 via IRS-1 (IST-1) adaptor
- [[daf-18]] — PTEN ortholog; opposes AGE-1 by dephosphorylating PIP3 → PIP2
- [[pdk-1]] — primary downstream kinase activated by PIP3
- [[akt]] — AKT-1/AKT-2; activated by PDK-1 downstream of AGE-1/PIP3
- [[sgk1]] — SGK-1; dominant longevity-relevant kinase downstream of AGE-1/PDK-1 per Hertweck 2004
- [[daf-16]] — FOXO transcription factor; sequestered in cytoplasm when AGE-1 is active

## Aging context and limitations

### Limitations of the worm longevity model

1. **Temperature sensitivity:** *C. elegans* lifespan is highly temperature-dependent. IIS pathway effects vary between 15°C, 20°C, and 25°C. Many early studies were conducted at 25°C where effects are amplified.
2. **Fertility confounds:** Long-lived IIS mutants often have reduced fertility (*daf-2*, *age-1*). Whether the longevity and fertility phenotypes are separable is an open question — some but not all evidence suggests they are.
3. **Germline requirement:** Germline removal (by laser ablation) extends *C. elegans* lifespan through DAF-16 activation, making germline status a potential confounder in some longevity studies.
4. **Worm-specific biology:** *C. elegans* lacks specialized cell types (no heart, no true vascular system, no adaptive immune system) that are central to mammalian aging. The mapping of worm IIS longevity to human aging biology rests on pathway conservation, not physiological equivalence.

### Open questions

- Does partial AGE-1 inhibition (rather than complete LoF) extend lifespan without constitutive dauer? #gap/dose-response-unclear
- Are there tissue-specific requirements for AGE-1 in longevity, as seen for IRS-2 brain-specific LoF in mice (see [[irs2]])? #gap/no-mechanism
- Can the AGE-1 → SGK-1 → DAF-16 axis findings inform mammalian SGK1 inhibitor pharmacology for aging? #gap/needs-human-replication

## Footnotes

[^friedman1988]: [[studies/friedman-1988-age-1-lifespan]] · Friedman DB, Johnson TE · doi:10.1093/genetics/118.1.75 · n=variable per cohort (population lifespan assays; Table 1 cohorts range n=6–49) · in-vivo (C. elegans mutagenesis) · model: fer-15(b26ts);age-1(hx546) C. elegans hermaphrodites (strain MK546, full genotype: age-1(hx546) fer-15(b26ts) II; unc-31(z1) IV) · 65% mean / 110% max lifespan extension at 25°C vs N2; 40% mean / 60% max at 20°C · self-fertility reduced ~75–80% (to 10–20% of wild-type) · first demonstration that a single recessive gene mutation extends animal lifespan · DAF-16 not identified in this paper (predates Kenyon 1993/Ogg 1997) · LOCAL PDF available

[^morris1996]: [[studies/morris-1996-age-1-pi3k-cloning]] · Morris JZ, Tissenbaum HA, Ruvkun G · doi:10.1038/382536a0 · n=molecular/genetic · in-vivo (C. elegans) · model: C. elegans age-1 alleles · molecular cloning of age-1 as PI3K family member; established that PI3K activity controls longevity · NOT_OA — #gap/no-fulltext-access

[^hertweck2004]: [[studies/hertweck-2004-sgk1-longevity]] · Hertweck M, Gobel C, Baumeister R · doi:10.1016/s1534-5807(04)00095-4 · n=147 (sgk-1 LoF) · in-vivo (C. elegans) · p<0.0001 · model: C. elegans sgk-1, akt-1, akt-2 single and combination mutants · establishes SGK-1 (not AKT-1/AKT-2) as dominant longevity kinase downstream of AGE-1/PDK-1; akt-1 LoF p=0.1642 NS, akt-2 LoF p=0.3717 NS · LOCAL PDF available

[^apfeld2004]: [[studies/apfeld-2004-aak2-lifespan]] · Apfeld J, O'Connor G, McDonagh T, DiStefano PS, Curtis R · doi:10.1101/gad.1255404 · in-vivo (C. elegans) · model: aak-2, daf-16, age-1 single and double mutants · AAK-2/AMPK acts PARALLEL to DAF-16, not upstream; ~15% additive lifespan shortening in daf-16;aak-2 double mutants · LOCAL PDF available
