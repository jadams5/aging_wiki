---
type: protein
aliases: [SIRT3, SIR2L3, hSIRT3, "NAD-dependent protein deacetylase sirtuin-3, mitochondrial"]
uniprot: Q9NTG7
ncbi-gene: 23410
hgnc: 14931
ensembl: ENSG00000142082
mouse-ortholog: Sirt3
druggability-tier: null
caused-by: ["[[nad-depletion]]", "[[deregulated-nutrient-sensing]]"]
causes: ["[[mitochondrial-dysfunction]]", "[[oxidative-stress]]"]
key-domains: [sirtuin-type-deacetylase]
key-ptms: [MPP-cleavage-N-terminus, Lys122-succinylation]
pathways: ["[[sirtuin]]", "[[nad-metabolism]]", "[[mitochondrial-metabolism]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[sod2]]", "[[idh2]]", "[[opa1]]", "[[foxo3]]", "[[nampt]]"]
genage-id: null
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for all 5 cited DOIs (Onyango 2002 pnas.222538099, Someya 2010 cell.2010.10.002, Hirschey 2010 nature08778, Sundaresan 2009 JCI39162, Qiu 2010 cmet.2010.11.015). Canonical-DB IDs (UniProt Q9NTG7, NCBI Gene 23410, HGNC 14931, Ensembl ENSG00000142082) previously confirmed via UniProt. Wikilinks spot-checked. Quantitative substrate claims and SOD2 deacetylation effect sizes NOT cross-checked against primary PDFs — synthesis-style content lint only."
---

# SIRT3 (Sirtuin 3)

The dominant mitochondrial sirtuin and the major deacetylase of the mitochondrial matrix. SIRT3 is an NAD+-dependent class III deacetylase that maintains the acetylation state of dozens of mitochondrial metabolic enzymes — a function that deteriorates with age as SIRT3 protein levels fall and global mitochondrial protein hyperacetylation accumulates. It is the primary mechanistic link between caloric restriction (CR) and mitochondrial protection in mammals [^someya2010].

**Naming note:** This page covers the SIRT3 protein specifically. The family-level page at [[sirtuin]] covers all SIRT1–7 paralogs, NAD+ dependency, the pharmacology of NAD+ precursors, and evolutionary conservation. Refer there for family context.

## Identity

- **UniProt:** Q9NTG7 (SIRT3_HUMAN)
- **NCBI Gene:** 23410
- **HGNC symbol:** SIRT3
- **Ensembl:** ENSG00000142082
- **Mouse ortholog:** Sirt3 (highly conserved; Sirt3-/- mice are the primary experimental model)
- **Length:** 399 amino acids (full-length precursor); active form ~28 kDa after mitochondrial processing

## Mitochondrial import and processing

SIRT3 is encoded in the nuclear genome and synthesized as a ~44 kDa cytoplasmic precursor. Upon import into the mitochondrial matrix, the mitochondrial processing peptidase (MPP) cleaves the N-terminal targeting sequence, generating a ~28 kDa active form [^onyango2002]. This processing is required for full enzymatic activity — the unprocessed long form retains partial activity, but the processed short form is the dominant species detected in mitochondria. The MPP cleavage step thus constitutes a regulatory checkpoint: only protein reaching the mitochondrial matrix achieves full deacetylase competence.

## Catalytic mechanism

SIRT3 uses NAD+ as an obligate cofactor, consuming one NAD+ per deacetylation to generate nicotinamide (NAM) and O-acetyl-ADP-ribose alongside the deacetylated product [^onyango2002]. This strict NAD+ dependency makes SIRT3 activity a direct sensor of the mitochondrial NAD+/NADH ratio. During nutrient excess (NADH accumulation, NAD+ depletion), SIRT3 activity falls; during energy deficit or CR (NAD+ levels elevated via [[nampt]] and [[nad-metabolism|salvage pathway]]), SIRT3 activity rises.

SIRT3 also acts as a protein-lysine deacylase capable of removing benzoyl and lactoyl modifications (UniProt Q9NTG7), though deacetylation remains its best-characterized activity in aging contexts.

## Substrate landscape

SIRT3 is the major mitochondrial deacetylase and has the broadest substrate spectrum of the three mitochondrial sirtuins (SIRT3–5). Key aging-relevant substrates:

| Substrate | Site(s) | Effect of SIRT3 deacetylation | Pathway/Process |
|---|---|---|---|
| [[sod2|SOD2 (MnSOD)]] | K68, K122 | Activates antioxidant activity | ROS detoxification |
| IDH2 | K413 | Increases NADPH production, supports glutathione reductase | Redox homeostasis |
| LCAD | K42 | Activates fatty-acid oxidation | FAO, energy metabolism |
| ACSS1 (AceCS2) | K661 | Activates acetate incorporation into acetyl-CoA | Central carbon metabolism |
| GDH (GLUD1) | multiple | Activates glutamate catabolism | Amino-acid metabolism |
| OPA1 | — | Promotes mitochondrial fusion | Mitochondrial dynamics |
| NDUFA9 | — | Supports Complex I activity | Electron transport chain |
| FOXO3 | — | Promotes nuclear translocation; antioxidant gene expression | Stress response |

SOD2 K68/K122 deacetylation is the best-characterized aging-relevant event: acetylated SOD2 has reduced enzymatic activity; SIRT3-mediated deacetylation restores full superoxide-scavenging capacity [^qiu2010]. LCAD deacetylation was the first substrate identified in a lifespan-relevant metabolic context, linking SIRT3 to hepatic fatty-acid oxidation and to the metabolic phenotype of Sirt3-/- mice under dietary fat challenge [^hirschey2010].

## Aging biology

### Age-related SIRT3 decline and mitochondrial hyperacetylation

SIRT3 protein levels decline with age in multiple tissues in mice [^someya2010]. This reduction leads to progressive hyperacetylation of mitochondrial proteins — a molecular signature of mitochondrial dysfunction observed in aged tissue. The hyperacetylation is widespread: proteomics studies detect acetylation at hundreds of mitochondrial lysine residues that are held deacetylated in young animals. #gap/needs-human-replication — the age-related SIRT3 decline and hyperacetylation phenotype is robustly established in mouse; direct human evidence at the protein/activity level is limited.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — SIRT3 is structurally conserved; mitochondrial protein acetylation is documented in human tissues |
| Phenotype conserved in humans? | partial — mitochondrial protein hyperacetylation with age is documented but not as directly linked to SIRT3 levels as in mouse |
| Replicated in humans? | no — no human genetic or interventional trial directly links SIRT3 protein levels to aging rate |

### Sirt3-/- mouse phenotype

Sirt3 knockout mice are viable and have no gross developmental defects, but accumulate age-related pathology [^hirschey2010] [^sundaresan2009]:

- Global mitochondrial protein hyperacetylation (the cardinal molecular phenotype)
- Increased mitochondrial ROS and oxidative damage
- Hepatic steatosis under high-fat diet or with aging; impaired fatty-acid oxidation (LCAD pathway)
- Cardiac hypertrophy under pressure overload, preventable by supplementing antioxidants — implicating excess ROS as the proximate cause [^sundaresan2009]
- Accelerated age-related hearing loss (cochlear hair-cell damage) — partially replicated by genetic suppression of SIRT3

Sirt3-/- mice are **not progeroid** — baseline lifespan under normal chow is not dramatically shortened. The phenotype surfaces under metabolic challenge (HFD) or aging-associated stresses, consistent with SIRT3 being a stress-responsive rather than constitutive longevity gene. #gap/needs-replication — the full-lifespan Sirt3-/- aging phenotype under standard conditions has been assessed in limited cohort sizes.

### CR connection: SIRT3 mediates caloric-restriction protection

Caloric restriction robustly upregulates SIRT3 in multiple tissues [^someya2010] [^qiu2010]. Two lines of evidence establish causality:

1. **SOD2/ROS axis:** CR-induced SIRT3 upregulation deacetylates and activates SOD2, reducing mitochondrial ROS and protecting against oxidative damage. Sirt3-/- mice fail to show CR-mediated ROS reduction at normal levels, and their SOD2 remains hyperacetylated [^qiu2010].
2. **Hearing loss protection:** CR delays age-related hearing loss (presbycusis) in rodents. This protection requires SIRT3: Sirt3-/- mice lose the CR-induced cochlear protection and show accelerated spiral ganglion neuron degeneration at an earlier age [^someya2010]. This is one of the most direct demonstrations that a single SIRT3-dependent mechanism mediates a CR longevity benefit in an intact aging phenotype.

The implication — that CR's mitochondria-protective effects are substantially SIRT3-dependent — makes SIRT3 a high-priority target for CR-mimetic strategies. #gap/needs-human-replication — the SIRT3-CR-protection axis has not been directly tested in human aging trials.

## Pharmacology and therapeutic angles

No direct SIRT3 activators are in clinical use. Indirect routes to enhance SIRT3 activity:

### NAD+ precursors
- **[[nmn]] (NMN) and [[nr]] (NR):** Boosting intracellular NAD+ elevates SIRT3 activity by providing more cofactor substrate. Both have been shown to raise tissue NAD+ levels in mice and in preliminary human trials. Whether this translates to measurable mitochondrial deacetylation (i.e., SOD2 activation, etc.) in aged human tissue is not established. #gap/dose-response-unclear #gap/needs-human-replication
- Rationale is indirect: [[nampt]] is the rate-limiting enzyme in the NAD+ salvage pathway; NAMPT levels also decline with age, creating a double bottleneck (low SIRT3 + low NAD+).

### Caloric restriction and exercise
- Both CR and aerobic exercise raise SIRT3 in mouse skeletal muscle and liver. Neither is sufficient to fully reverse age-related SIRT3 decline in older animals, but both partially restore activity. #gap/dose-response-unclear

### Resveratrol
- Activates SIRT3 indirectly via AMPK → NAD+ elevation; does not directly bind SIRT3 active site. Evidence for SIRT3-specific effects of resveratrol is weak compared to SIRT1 evidence. #gap/no-mechanism

### Direct SIRT3 activators
- Small-molecule direct SIRT3 activators have been described in vitro but none have demonstrated in vivo efficacy or advanced to clinical development. druggability-tier is null pending Open Targets assessment. #gap/needs-canonical-id

## Relationship to other hallmarks and entities

- [[mitochondrial-dysfunction]] — SIRT3 loss directly impairs ETC Complex I activity (via NDUFA9 hyperacetylation), FAO, and antioxidant capacity; hyperacetylation is a molecular marker of mitochondrial dysfunction in aged tissue
- [[deregulated-nutrient-sensing]] — SIRT3 is regulated by NAD+ status, placing it downstream of nutrient-sensing; CR and fasting activate SIRT3; nutrient overload suppresses it
- [[sirt1]] — the cytoplasmic/nuclear counterpart; shares NAD+ dependence; SIRT1 and SIRT3 are co-regulated by [[nampt]] and often respond similarly to energetic stress, but act on distinct substrate pools (nuclear chromatin/transcription factors vs. mitochondrial metabolic enzymes)
- [[caloric-restriction]] — SIRT3 is one of the most direct molecular effectors of CR-induced mitochondrial protection
- [[opa1]] — SIRT3 deacetylates OPA1 to promote mitochondrial fusion; loss of SIRT3 may contribute to mitochondrial fragmentation in aging

## Limitations and gaps

- #gap/needs-human-replication — Most aging-relevant data comes from Sirt3-/- and aged-mouse studies. No human genetic loss-of-function equivalent allows direct testing of the hyperacetylation aging hypothesis.
- #gap/no-opentargets-entry — Druggability tier not confirmed; SIRT3 does not have a well-characterized direct small-molecule activator at clinical-grade quality.
- #gap/needs-replication — The hearing-loss protection by SIRT3/CR axis has been demonstrated primarily in one landmark study (Someya 2010); independent replication in different model systems or species is limited.
- #gap/dose-response-unclear — NMN/NR dose sufficient to meaningfully activate mitochondrial SIRT3 (vs. SIRT1) in aged human tissue is not defined.
- Schwer 2006 JCB (DOI 10.1083/jcb.200603016, cited in user brief for ACSS1/AceCS2 substrate) was not found in the a local paper archive; replaced in footnotes by Schwer 2006 PNAS (10.1073/pnas.0603968103), which is the confirmed ACSS2 paper. The JCB DOI should be re-checked on the next lint pass.

## Footnotes

[^onyango2002]: [[studies/onyango-2002-sirt3-mitochondrial-deacetylase]] · doi:10.1073/pnas.222538099 · in-vitro + in-vivo characterization · design: biochemical/cell-based · model: HEK293/COS cells; human tissue; n not reported as single cohort · cloning and mitochondrial localization of human SIRT3; demonstration of NAD+-dependent deacetylase activity; identification of MPP-mediated processing to ~28 kDa active form

[^someya2010]: [[studies/someya-2010-sirt3-cr-hearing]] · doi:10.1016/j.cell.2010.10.002 · in-vivo (mouse) · design: genetic-knockout + dietary · model: Sirt3-/- C57BL/6J mice ± CR · demonstrates CR-mediated protection from age-related hearing loss requires SIRT3; SOD2 K68 deacetylation and ROS reduction as mechanism; >1100 citations (citation_percentile 100)

[^hirschey2010]: [[studies/hirschey-2010-sirt3-lcad-fao]] · doi:10.1038/nature08778 · in-vivo (mouse) + biochemical · design: genetic-knockout + substrate identification · model: Sirt3-/- mice ± HFD · LCAD K42 identified as direct SIRT3 substrate; Sirt3-/- mice show impaired fatty-acid oxidation and hepatic steatosis; local PDF confirmed at DOI lookup · >1600 citations (citation_percentile 100)

[^sundaresan2009]: [[studies/sundaresan-2009-sirt3-cardiac-hypertrophy]] · doi:10.1172/JCI39162 · in-vivo (mouse) · design: genetic-knockout + pressure-overload model · model: Sirt3-/- mice · cardiac hypertrophy phenotype rescued by antioxidants; FOXO3a-dependent antioxidant defense downstream of SIRT3; >980 citations (citation_percentile 100)

[^qiu2010]: [[studies/qiu-2010-sirt3-sod2-cr]] · doi:10.1016/j.cmet.2010.11.015 · in-vivo (mouse) + biochemical · design: genetic-knockout + CR · model: Sirt3-/- C57BL/6 mice ± CR · SIRT3 deacetylates SOD2 K68 and K122 to activate antioxidant capacity; CR-induced ROS reduction abrogated in Sirt3-/- mice; >1280 citations (citation_percentile 100)
