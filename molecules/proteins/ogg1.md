---
type: protein
aliases: [OGG1, 8-oxoguanine DNA glycosylase 1, MMH, MUTM, OGH1, N-glycosylase/DNA lyase]
uniprot: O15527
ncbi-gene: 4968
hgnc: 8125
ensembl: ENSG00000114026
mouse-ortholog: Ogg1
genage-id: null
druggability-tier: 2
caused-by: ["[[reactive-oxygen-species]]", "[[mitochondrial-dysfunction]]"]
causes: ["[[genomic-instability]]", "[[chronic-inflammation]]"]
key-domains: [OGG_N, HhH-GPD]
key-ptms: [Lys249-Schiff-base-intermediate]
pathways: ["[[base-excision-repair]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[mutyh]]", "[[ape1]]", "[[pcna]]", "[[xrcc1]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Klungland 1999, Sakamoto 2007, de Souza-Pinto 2001, Pao 2020, and Wallner 2022 primary-source claims verified against PDFs (Klungland, Sakamoto, Pao, Wallner) or PubMed abstract (de Souza-Pinto, no DOI available); Visnes 2018 and Sheng 2012 not verified (not_oa, no local PDF); canonical-database identity fields (UniProt O15527, NCBI Gene 4968, HGNC 8125, Ensembl) not independently re-checked against databases"
---


# OGG1 (8-oxoguanine DNA glycosylase 1)

The primary mammalian enzyme responsible for removing **8-oxoguanine (8-oxoG)** — the most common oxidative DNA lesion — from both nuclear and mitochondrial DNA. OGG1 is bifunctional: it excises the damaged base (glycosylase activity) and then cleaves the DNA backbone at the resulting abasic site (AP-lyase activity). Loss of OGG1 in mice causes 8-oxoG accumulation without overt progeroid phenotype, but redundancy with [[mutyh]] means the combined loss is dramatically pro-tumorigenic. Unexpectedly, OGG1 also participates in NF-kB-driven inflammatory gene expression, making small-molecule OGG1 inhibitors an anti-inflammatory therapeutic angle.

## Identity

- **UniProt:** O15527 (OGG1_HUMAN) — Swiss-Prot (manually reviewed)
- **Gene:** OGG1 (HGNC 8125); synonyms: MMH, MUTM, OGH1
- **NCBI Gene:** 4968
- **Ensembl:** ENSG00000114026
- **Mouse ortholog:** Ogg1 (one-to-one)
- **Length:** 345 amino acids (primary isoform 1A; eight splicing variants documented — 1A, 1B, 1C, 2A, 2B, 2C, 2D, 2E)
- **GenAge:** not listed in human aging gene set as of 2026-05-05 #gap/needs-canonical-id

## Biochemistry

### Bifunctional mechanism

OGG1 belongs to the helix-hairpin-helix (HhH) superfamily of DNA glycosylases. It recognizes 8-oxoG paired with cytosine via DNA bending and base flipping, excising the damaged base by N-glycosidic bond cleavage to form an abasic (apurinic) site. The enzyme's AP-lyase activity then cuts the DNA backbone 3' to the abasic site via a Schiff-base intermediate at Lys249, leaving a 3'-phospho-alpha,beta-unsaturated aldehyde terminus that is subsequently processed by [[ape1]] (AP endonuclease 1) to complete short-patch base excision repair.

Primary substrates:
- **8-oxoguanine (8-oxoG)** — canonical oxidized guanine; most abundant oxidative base lesion in cells
- **2,6-diamino-4-hydroxy-5-N-methylformamidopyrimidine (FAPY-Gua)** — ring-opened form of 8-oxoG; also efficiently excised

Substrate selectivity: OGG1 excises 8-oxoG only when paired opposite cytosine. 8-oxoG:adenine mispairs (arising from replication past 8-oxoG) are handled by [[mutyh]], which removes the adenine to give OGG1 a second opportunity to excise the lesion in the next round.

### Why 8-oxoG matters

8-oxoG mispairs with adenine during replication, causing G:C → T:A transversion mutations. This is among the most common replication-error signatures in aged somatic tissue and contributes to cancer mutational burden. The [[hypotheses/free-radical-theory-of-aging]] partly rests on the proposition that cumulative 8-oxoG → transversion mutations drive tissue dysfunction over decades.

## Subcellular localization and the mitochondrial isoform

Nuclear OGG1 (isoforms 1A, 1B, 1C) handles genomic DNA repair. **Mitochondrial OGG1** (principally isoform 2A) localizes to the mitochondrial matrix via an alternative N-terminal mitochondrial targeting sequence; the Glu12 variant abolishes mitochondrial import.

Mitochondria are the primary site of reactive oxygen species (ROS) generation, making mtDNA especially vulnerable to 8-oxoG accumulation. de Souza-Pinto et al. 2001 established that OGG1 is the dominant — and essentially only — enzyme repairing 8-oxodG in mammalian mtDNA: Ogg1-null mice accumulated ~20-fold more 8-oxodG in mitochondrial DNA than wild-type controls [^desouza2001]. #gap/needs-replication — this 20-fold estimate is from a single mouse study; the magnitude in human tissue is undetermined.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | OGG1 catalytic mechanism and subcellular targeting conserved; human isoform 2A has been confirmed in mitochondria |
| Phenotype conserved in humans? | partial | 8-oxoG accumulates in aging human tissue; whether the mitochondrial pool is dominant is unknown |
| Replicated in humans? | no | No interventional human data; observational associations only |

## Mouse genetics

### Ogg1 single knockout

Klungland et al. 1999 generated Ogg1-/- mice by injecting 129SV-derived ES cells into C57BL/6J blastocysts, producing chimeras whose F1 heterozygotes were intercrossed to yield F2 homozygous knockouts — a mixed C57BL/6 × 129SV background [^klungland1999]. Key findings:

- Mice were viable, fertile, and not progeroid; oldest mice observed were 18 months with no overt phenotype; histopathological examination of two null mice (sacrificed at 8 and 11 months) revealed no abnormalities.
- 8-oxoG accumulated in liver nuclear DNA at ~1.7-fold over wild-type (measured by HPLC-ECD in 13–15-week-old males; n=5 per genotype), establishing OGG1 as the only mammalian DNA glycosylase that efficiently removes 8-oxoG in cell-free extracts (a second pathway can remove faPy but not 8-oxoG in null tissue extracts).
- Spontaneous mutation rates were elevated 2- to 3-fold in liver (non-proliferating) but not in testis (proliferating), implying a backup repair pathway (likely transcription-coupled NER or MutY-homologue activity) attenuates the consequence of lost OGG1 in dividing cells.
- No significant cancer increase was observed in the single-knockout cohort within the observation window of the 1999 study; 45 live-born F2 mice were genotyped for viability analysis.

Interpretation: redundancy with [[mutyh]] (which excises adenine opposite 8-oxoG after replication mispairs) and possibly other BER enzymes provides substantial backup. Single-gene OGG1 loss is therefore *insufficient* to produce overt aging acceleration. #gap/needs-replication — longer-term Ogg1-/- cohort survival data in aged mice is limited.

### Mutyh + Ogg1 combined deficiency

When both repair pathways are disabled, the consequence is dramatically different. Sakamoto et al. 2007 (Cancer Research) showed Mutyh-/- single-knockout mice develop spontaneous intestinal adenomas and adenocarcinomas (11 tumors in 10 of 121 mice, vs 0 intestinal tumors in 109 wild-type mice; P < 0.001, Fisher's exact test) [^sakumi2007], consistent with elevated G:C → T:A transversions from unremediated 8-oxoG. All mice were aged 18 months on a near-congenic C57BL/6J background. This paper focuses on MUTYH single deficiency; the combined Ogg1+Mutyh double-deficiency (DKO) cancer phenotype is documented by Xie et al. 2004 (*Cancer Research*), which reported that DKO mice predominantly develop lung and ovarian tumors and lymphomas (the Sakamoto 2007 paper cites this study but does not itself examine DKO mice). The overall pattern illustrates that redundancy between the two enzymes normally suppresses mutagenesis from oxidative base damage. #gap/needs-replication — DKO cancer data is from Xie 2004, not independently cited here.

The Sheng 2012 JCI paper provides mechanistic detail for the neuronal context: persistent 8-oxoG triggers MUTYH-mediated excision of the mispaired adenine, which — paradoxically — causes neurodegeneration rather than DNA repair, because MUTYH's attempt to repair generates strand breaks that overwhelm post-mitotic neuronal repair capacity [^sheng2012].

## Aging relevance

### 8-oxoG and OGG1 activity across the lifespan

8-oxoG accumulates in brain and other post-mitotic tissues with age in both mice and humans. Pao et al. 2020 (Nature Communications) demonstrated that aged Hdac1 conditional knockout (cKO) mice — with HDAC1 deleted in neurons and astrocytes — display elevated hippocampal 8-oxoG lesions and age-dependent cognitive decline [^pao2020]. The mechanism established is that HDAC1 physically interacts with and deacetylates OGG1, reversing p300-mediated acetylation and thereby stimulating OGG1's AP-lyase cleavage activity. Loss of HDAC1 therefore impairs OGG1-mediated 8-oxoG clearance. The 5XFAD mouse model of Alzheimer's disease similarly shows reduced hippocampal HDAC1 activity and elevated 8-oxoG, with a transcriptional signature overlapping that of aged Hdac1 cKO mice. Pharmacological HDAC1 activation with exifone (50 mg/kg/day IP, 4 weeks) enhanced OGG1 activity, reduced hippocampal 8-oxoG lesions, and improved contextual fear conditioning and hippocampal LTP in aged wild-type (17-month) and 5XFAD mice. This links OGG1 activity decline directly to a HDAC1-dependent mechanism for age-associated neurodegeneration. #gap/needs-human-replication

### Connection to [[genomic-instability]]

OGG1 is a first-line defense against the most prevalent oxidative DNA lesion, placing it upstream of the [[genomic-instability]] hallmark. Declining repair efficiency — whether from lower OGG1 expression, post-translational inactivation, or chromatin remodeling that limits access — is predicted to accelerate somatic mutation accumulation in aged tissues. This remains poorly quantified in vivo. #gap/needs-replication

### Mitochondrial dimension

In the context of [[mitochondrial-dysfunction]], the mitochondrial isoform (mtOGG1, isoform 2A) is particularly relevant: dysfunctional mitochondria both generate more ROS (increasing 8-oxoG production) and show impaired DNA repair. Whether mtOGG1 activity also declines with age is not well established in primary human tissue. #gap/needs-human-replication

## Pharmacology and druggability

**Druggability tier: 2** (high-quality selective probe compound exists; no clinical drug as of 2026-05-05). Rationale: OGG1 has an accessible active-site cleft amenable to small-molecule inhibition; TH5487 is a well-characterized inhibitor with demonstrated cellular target engagement.

### TH5487 — selective OGG1 inhibitor

Visnes et al. 2018 (*Science*) reported TH5487, a selective active-site inhibitor of OGG1 that prevents OGG1 from binding oxidized guanine lesions [^visnes2018]. Surprisingly, inhibiting OGG1 reduced proinflammatory gene expression: OGG1 normally binds 8-oxoG at promoters of inflammatory genes (e.g., TNF-alpha-induced loci), and the OGG1-DNA complex at these sites facilitates NF-kB binding. TH5487 disrupts this:

- Prevented OGG1-DNA interactions at inflammatory gene promoters
- Decreased NF-kB DNA occupancy
- Suppressed proinflammatory gene expression in TNF-alpha-stimulated cells
- Anti-inflammatory in mouse models (mechanism distinct from canonical immunosuppression)

This study exposed a **non-canonical transcriptional role for OGG1** in gene regulation that is separable from its DNA repair function. The implication for aging is ambiguous: if OGG1 inhibition reduces chronic inflammation ([[chronic-inflammation]] hallmark), it may be beneficial; but suppressing 8-oxoG repair could also promote mutagenesis.

Follow-up medicinal chemistry (Wallner et al. 2022, *ChemMedChem*) produced TH8535 (IC50 200 nM) and related N-piperidinyl-benzimidazolone analogues with improved potency and selectivity versus TH5487; TH8535 is selective against a panel of BER enzymes (APE1, NEIL1, Fpg, UNG2, TDG, SMUG1 all IC50 > 100 µM) and causes loss of viability in cancer cell lines at µM concentrations [^wallner2022].

**No OGG1 activators** with validated efficacy in vivo are in development as of 2026-05-05. Indirect augmentation via HDAC1 activation (see Pao 2020 above) is a candidate approach.

### Clinical stage

No OGG1-targeting compound has entered human trials. Clinical stage: preclinical. #gap/long-term-unknown

## Pathway membership

- **[[base-excision-repair]]** — OGG1 initiates short-patch BER for 8-oxoG in both nucleus and mitochondria; canonical partners: [[ape1]] (AP endonuclease), [[xrcc1]] (scaffold), [[pcna]] (processivity), Pol beta, LIG3
- **[[dna-damage-response]]** — 8-oxoG is recognized as a DNA damage signal; OGG1 activity is modulated by ATM/ATR-adjacent pathways following oxidative stress

## Key interactors

- **[[mutyh]]** — functional partner/redundant backup; MUTYH removes adenine mispaired with 8-oxoG, giving OGG1 a second repair opportunity; their double loss is strongly pro-tumorigenic
- **[[ape1]]** — immediate downstream partner; processes the 3'-aldehyde terminus after OGG1's AP-lyase cut
- **[[pcna]]** — associates with OGG1; role in long-patch BER sub-pathway
- **[[xrcc1]]** — scaffold protein coordinating short-patch BER complex assembly

## Limitations and gaps

| Gap | Tag |
|---|---|
| No GenAge entry found for OGG1 in human aging gene set | #gap/needs-canonical-id |
| 8-oxoG accumulation magnitude in aging human tissue is poorly quantified | #gap/needs-human-replication |
| OGG1 activity with human aging has not been characterized across tissues systematically | #gap/needs-human-replication |
| mtOGG1 activity decline with age has not been directly measured in human mitochondria | #gap/needs-human-replication |
| mtOGG1 citation originally proposed as Lu 2008 (DOI 10.1093/nar/gkn028 — wrong, resolves to a tRNA synthetase paper); replaced with de Souza-Pinto 2001 (PMID 11454679) which is the correct primary source for OGG1 as the dominant mtDNA 8-oxodG glycosylase | #gap/unsourced |
| OGG1/MUTYH DKO cancer phenotype (lung, ovarian tumors, lymphomas) is from Xie et al. 2004 (*Cancer Research* 64:3096) — not directly cited here; only the MUTYH single-KO study (Sakamoto et al. 2007) is cited | #gap/needs-replication |
| No human longevity GWAS hits reported for OGG1 locus; longevity relevance is mechanistically inferred, not genetically validated | #gap/needs-replication |
| TH5487 anti-inflammatory/pro-mutagenesis trade-off in aging context uncharacterized | #gap/no-mechanism |

## Footnotes

[^klungland1999]: doi:10.1073/pnas.96.23.13300 · Klungland A et al. · *PNAS* 1999 · 96(23):13300–5 · in-vivo · model: Ogg1-/- mixed C57BL/6J × 129SV mice · n=45 live-born F2 (genotyping cohort); n=5/genotype (HPLC-ECD liver DNA) · 8-oxoG ~1.7-fold elevated in null vs WT liver; mutation frequency 2- to 3-fold elevated in liver but not testis · (gold OA at PMC)

[^desouza2001]: PMID 11454679 · de Souza-Pinto NC et al. · *Cancer Research* 2001 · Vol. 61(14):5378–81 · in-vivo · model: Ogg1-/- C57BL mice (liver mitochondria) · 20-fold more 8-oxodG in mtDNA of knockouts vs wild-type, confirmed in abstract · no DOI registered (pre-DOI era for this journal); verified via PubMed abstract — 20-fold figure confirmed

[^sakumi2007]: doi:10.1158/0008-5472.can-06-4802 · Sakamoto K et al. · *Cancer Research* 2007 · 67(14):6599–604 · in-vivo · model: Mutyh-/- mice, near-congenic C57BL/6J, aged 18 months · n=121 Mutyh-/- + 109 wild-type · intestinal adenoma/carcinoma in 10/121 null mice vs 0/109 wild-type (P < 0.001); total tumor incidence 59.5% vs 34.9% · note: first author is Sakamoto K.; Sakumi K. is a middle author — this paper studies MUTYH single-KO only, not OGG1/MUTYH DKO · 

[^sheng2012]: doi:10.1172/JCI65053 · Sheng Z et al. · *Journal of Clinical Investigation* 2012 · in-vivo · model: mouse (Mutyh-/- and Ogg1/Mutyh double-KO) · demonstrates MUTYH-mediated neurodegeneration from 8-oxoG; OGG1/MUTYH DKO is neuroprotective · 136 citations (archive confirmed; not OA)

[^visnes2018]: doi:10.1126/science.aar8048 · Visnes T et al. · *Science* 2018 · in-vitro + in-vivo · model: cell lines + mouse · TH5487 selective OGG1 inhibitor; anti-inflammatory via NF-kB pathway · 217 citations (archive confirmed; not OA)

[^pao2020]: doi:10.1038/s41467-020-16361-y · Pao P-C et al. · *Nature Communications* 2020 · 11:2484 · in-vivo · model: Hdac1 conditional cKO (Nestin-Cre; neurons + astrocytes) + 5XFAD AD mouse model; aged C57BL/6J · mechanism: HDAC1 deacetylates OGG1 (reversing p300 acetylation), stimulating OGG1 AP-lyase activity; HDAC1 loss → elevated 8-oxoG at gene promoters + transcriptional repression; exifone (HDAC1 activator, 50 mg/kg/day IP, 4 wks) rescued OGG1 activity, reduced 8-oxoG, and improved contextual fear conditioning and hippocampal LTP in 17-month WT and 5XFAD mice · (gold OA)

[^wallner2022]: doi:10.1002/cmdc.202200310 · Wallner O et al. · *ChemMedChem* 2022 (published online; print vol. 18, 2023) · in-vitro · N-piperidinyl-benzimidazolone series; TH8535 IC50 200 nM, selective vs APE1/NEIL1/Fpg/UNG2/TDG/SMUG1 (all IC50 > 100 µM); TH8535 reduces cancer cell viability at µM concentrations; X-ray co-crystal structure of TH8535 with mouse OGG1 at 2.45 Å obtained · 
