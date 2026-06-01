---
type: protein
aliases: [LIPA, lysosomal acid lipase, LAL, cholesterol ester hydrolase, CESD, LAL-D]
uniprot: P38571
ncbi-gene: 3988
hgnc: 6617
ensembl: ENSG00000107798
mouse-ortholog: Lipa
druggability-tier: 2
caused-by: []
causes: []
key-domains: [signal-peptide, lipase-catalytic, lid-domain]
key-ptms: [N-glycosylation, signal-peptide-cleavage]
pathways: ["[[lipophagy]]", "[[autophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[deregulated-nutrient-sensing]]"]
known-interactors: []
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "UniProt P38571 identity fields verified against REST API (sequence length, signal peptide, propeptide, MW, glycosylation sites, mature chain). Burton 2015 trial framing verified against PubMed abstract (n=66, primary endpoint, ALT normalization result, p=0.03); full PDF not available (archive status: pending, bronze OA). Anderson 1991 cDNA paper and Morris 2017/Evans 2019 ATVB papers: archive status pending — claims retained as extracted, not independently verified against full text. Singh 2009 lipophagy claims trusted as verified on lipophagy.md."
---

# LIPA (Lysosomal Acid Lipase)

The lysosomal gatekeeper for lipid droplet catabolism — LIPA is the sole acid hydrolase responsible for digesting cholesterol esters and triglycerides delivered to the lysosome, connecting both endocytic LDL processing and autophagosomal lipid droplet delivery ([[lipophagy]]) to usable free cholesterol and fatty acids. Complete loss causes Wolman disease (fatal infancy); partial loss causes Cholesterol Ester Storage Disease (CESD). In aging, declining LIPA activity and lysosomal pH dysregulation are proposed to impair hepatic lipid clearance and contribute to NAFLD-associated lipotoxicity.

## Identity

- **UniProt:** P38571 (LIPA_HUMAN)
- **NCBI Gene:** 3988
- **HGNC symbol:** LIPA
- **Gene locus:** chromosome 10q23.31
- **Mouse ortholog:** Lipa (high sequence conservation; single gene, no paralogs)
- **Length (precursor):** 399 amino acids; ~45.4 kDa calculated MW (UniProt P38571)
- **Mature form:** signal peptide (aa 1–27) cleaved co-translationally; propeptide (aa 28–76) removed during lysosomal maturation; mature lysosomal chain aa 77–399 (~36.6 kDa calculated); N-linked glycosylation at 6 sites (N36, N72, N101, N161, N273, N321) increases apparent MW on SDS-PAGE; glycosylation not essential for catalytic activity (UniProt P38571)

## Key functional domains

- **Signal peptide (aa 1–27):** directs co-translational ER insertion; cleaved before lysosomal trafficking (UniProt P38571, PMID 8112342)
- **Propeptide (aa 28–76):** removed during lysosomal maturation; mature enzyme chain begins at aa 77 (UniProt P38571, PMID 8112342 and 15269241)
- **Lipase catalytic core:** Ser-Asp-His catalytic triad; serine acts as nucleophile; mechanism parallels other lipase family members (gastric lipase, lingual lipase — noted in Anderson 1991 cDNA cloning)
- **Lid domain:** covers active site; structural gating of substrate access (common to lipase family)
- **Glycosylation sites:** N-linked glycans contribute to stability and lysosomal targeting via mannose-6-phosphate receptor pathway

LIPA is classified in the acid lipase family alongside gastric and lingual lipases; Anderson 1991 noted the sequence similarities [^anderson1991].

## Function

LIPA is a **lysosomal acid hydrolase** active at pH ~4.5 (lysosomal lumen). It hydrolyzes both:

1. **Cholesterol esters** → free cholesterol + fatty acid
2. **Triglycerides** → glycerol + fatty acids (3 acyl chains)

Two substrate delivery routes converge on LIPA:

### Route 1: Endocytosis (LDL pathway)
LDL particles are taken up via LDL receptor-mediated endocytosis → early endosome → late endosome/lysosome. LIPA hydrolyzes the cholesterol esters in LDL core particles, releasing free cholesterol that is then exported from the lysosome via NPC1/NPC2 to supply cellular membranes and suppress SREBP-mediated cholesterol synthesis.

### Route 2: Lipophagy (autophagosomal delivery)
Cytoplasmic lipid droplets (LDs) can be selectively engulfed by autophagosomes and delivered to autolysosomes — a process termed [[lipophagy]] [^singh2009]. Within the autolysosome, LIPA hydrolyzes the LD core lipids (triglycerides, cholesterol esters), releasing free fatty acids (FFAs) that are exported for mitochondrial β-oxidation. Singh et al. 2009 established this axis in hepatocytes: starvation induces lipophagy, LIPA activity in autolysosomes drives FFA release, and blocking autophagy causes LD accumulation [^singh2009].

**Importantly:** [[chaperone-mediated-autophagy]] (CMA) can degrade perilipins (PLINs) from the LD surface, which is a prerequisite for lipophagy access to the LD core lipids; LIPA then acts downstream once the LD reaches the autolysosome.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — LIPA is the sole LAL enzyme; lipophagy→LIPA axis demonstrated in rodent and human hepatocyte-derived cells |
| Phenotype conserved in humans? | yes — complete LIPA loss in humans causes Wolman disease; partial loss causes CESD with liver disease |
| Replicated in humans? | partial — disease phenotypes are human data; lipophagy flux specifically in aged human hepatocytes is not well-characterized |

## Discovery and cDNA cloning

- **Wolman disease** — first described in 1961 (Wolman et al.); acid esterase/lipase deficiency recognized as the biochemical basis by Patrick and Lake (~1969) in a case series [^patricklake1969note].
- **LIPA cDNA cloning** — Anderson et al. 1991 reported cloning and expression of cDNA encoding human lysosomal acid lipase/cholesteryl ester hydrolase; noted sequence homology to gastric and lingual lipases [^anderson1991].

## Diseases of LIPA deficiency

Both conditions are **autosomal recessive** (biallelic pathogenic variants in LIPA). The clinical spectrum is continuous, driven by residual enzyme activity.

| Feature | Wolman Disease (complete loss) | CESD (partial loss) |
|---|---|---|
| Onset | Neonatal / infantile (weeks) | Childhood to adult |
| LAL residual activity | ~0% | ~1–10% (variable) |
| Hepatic findings | Rapidly fatal hepatic failure | Hepatomegaly, steatohepatitis, progressive fibrosis → cirrhosis |
| Adrenal calcification | Characteristic bilateral calcification | Absent |
| Other | Failure to thrive, diarrhea, hepatosplenomegaly | Dyslipidemia (elevated LDL-C, low HDL-C) |
| Prognosis without treatment | Fatal within first year | Progressive; premature atherosclerosis and liver failure |

The infantile-onset form was historically called "Wolman disease" and childhood/adult-onset "CESD"; current nomenclature groups both as **LAL deficiency (LAL-D)** with a spectrum [^balwani2015review].

## Therapeutic intervention: sebelipase alfa (Kanuma)

**Sebelipase alfa** is recombinant human lysosomal acid lipase (rhLAL) produced in transgenic eggs (Alexion Pharmaceuticals). It is delivered IV and taken up by mannose-6-phosphate receptor-mediated uptake into lysosomes.

- **FDA approval:** December 2015 (both Wolman disease/infantile-onset and CESD/later-onset)
- **Mechanism:** enzyme replacement therapy (ERT) — restores lysosomal LAL activity
- **Phase 3 evidence:** Burton et al. 2015 (NEJM) — multicenter, placebo-controlled RCT in patients with LAL-D (later-onset); primary endpoint normalization of ALT levels; secondary endpoints included LDL-C, HDL-C, hepatic fat fraction [^burton2015]
- **Limitations:** lifelong IV infusion required; high cost; does not address CNS (not significant for LAL-D); ERT does not prevent progression to established cirrhosis

#gap/dose-response-unclear — optimal dosing and frequency in adults with CESD and various degrees of hepatic fibrosis not fully characterized in long-term follow-up.

## Aging relevance

### Lipophagy and hepatic lipid homeostasis

The Singh 2009 lipophagy paper [^singh2009] establishes the autophagy → LIPA axis as critical for hepatic lipid catabolism during nutrient deprivation. This is directly relevant to aging because:

1. **Autophagy flux declines with age** — a feature of [[disabled-macroautophagy]]; reduced lipophagy delivery to lysosomes means less lipid reaches LIPA
2. **Lysosomal pH dysregulation in aging** — the acidic pH optimum of LIPA (~4.5) depends on maintained lysosomal acidification; aged cells show impaired v-ATPase function and lysosomal alkalinization, which could directly compromise LIPA activity even when enzyme protein is present #gap/needs-human-replication
3. **NAFLD connection** — lipophagy failure → LD accumulation → hepatic steatosis is one proposed mechanism for age-associated NAFLD/MASLD progression; LIPA sits at the bottleneck

#gap/needs-human-replication — Age-associated decline in hepatic LIPA expression or activity in humans is not well-characterized in primary literature as of this writing.

### Atherosclerosis and common variants

Beyond rare complete/partial deficiency, **common LIPA coding variants** are associated with coronary artery disease (CAD) risk in population genetics:

- **rs1051338** — the best-characterized CAD-associated LIPA coding variant; Morris et al. 2017 showed this variant reduces LIPA enzyme levels and activity within lysosomes in functional assays [^morris2017].
- Evans et al. 2019 further characterized multiple CAD-associated LIPA variants for their effects on enzyme levels and activity [^evans2019].

These findings are consistent with the mechanistic model: partial reduction in LIPA activity → impaired cholesterol ester hydrolysis in macrophage lysosomes → cholesterol accumulation → foam cell formation → accelerated atherosclerosis.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — same LDL → lysosome → LIPA → free cholesterol pathway |
| Phenotype conserved in humans? | yes — LIPA partial LOF → foam cells and atherosclerosis is directly human |
| Replicated in humans? | yes (association), partial (functional characterization in cell models) |

The atherosclerosis angle links LIPA to the [[deregulated-nutrient-sensing]] hallmark via cholesterol metabolism dysfunction, though the connection is tangential — the primary hallmark connection is [[disabled-macroautophagy]] via lipophagy.

### Lysosomal axis in aging

LIPA functions entirely within the lysosomal compartment, placing it at the intersection of multiple aging-relevant failures:

- Declining lysosomal acidification reduces enzyme activity (pH-sensitivity)
- Reduced autophagy flux reduces substrate delivery
- Lipid droplet accumulation in aged hepatocytes, macrophages, and other cell types may reflect in part attenuated LIPA-mediated catabolism

See [[lipophagy]] for the upstream delivery mechanism and [[chaperone-mediated-autophagy]] for the PLIN-degradation prerequisite.

## Pathway membership

- [[lipophagy]] — primary downstream effector; LIPA hydrolyzes LD lipids delivered via autophagosome
- [[autophagy]] — parent process
- [[disabled-macroautophagy]] hallmark — lipophagy decline with age affects LIPA substrate delivery
- [[deregulated-nutrient-sensing]] hallmark — tangential via cholesterol ester → free cholesterol recycling and LDL metabolism

## Limitations and gaps

- #gap/needs-human-replication — Age-dependent decline in hepatic LIPA protein expression or activity has not been quantified in aged human tissue with adequate power
- #gap/needs-human-replication — Whether lysosomal pH rise in aged cells materially reduces LIPA activity in vivo has not been directly demonstrated
- #gap/no-mechanism — Mechanism linking age-related autophagy decline to LIPA substrate deprivation vs. pH-dependent activity reduction is not resolved
- #gap/long-term-unknown — Long-term efficacy and safety of sebelipase alfa ERT in the CESD adult population (progressive liver disease trajectory with treatment) is incompletely characterized
- #gap/needs-canonical-id — GenAge entry for LIPA: none confirmed (LIPA is not listed in the GenAge human genes database as of seeding date; tagging for verification)

## Footnotes

[^anderson1991]: doi:10.1016/s0021-9258(18)54597-x · Anderson RA et al. · in-vitro (cDNA cloning + expression) · model: human LIPA cDNA; similarity to gastric/lingual lipases noted · Journal of Biological Chemistry 1991 · 145 citations (archive: confirmed, download pending)

[^singh2009]: [[studies/singh-2009-lipophagy]] · doi:10.1038/nature07976 · Singh R et al. · in-vitro + in-vivo · n=not applicable (mechanistic) · model: primary mouse hepatocytes + Atg7-KO mice · Nature 2009 · 3,816 citations (archive: local PDF available at ; previously verified on [[lipophagy]])

[^burton2015]: doi:10.1056/NEJMoa1501365 · Burton BK et al. · rct · n=66 (36 sebelipase alfa, 30 placebo) · Phase 3 multicenter double-blind placebo-controlled · primary endpoint: ALT normalization (31% [11/36] vs 7% [2/30], p=0.03); hepatic fat content significantly reduced (p<0.001) · model: LAL deficiency patients (later-onset) · New England Journal of Medicine 2015 · 238 citations (archive: confirmed; PDF pending — bronze OA; framing verified against PubMed abstract PMID 26352813; corrected from brief-supplied DOI 10.1056/NEJMoa1407972 which is not in archive)

[^patricklake1969note]: Patrick AD, Lake BD. ~1969. Original description of LAL deficiency (acid esterase/lipase) in the Journal of Medical Genetics. #gap/unsourced — the DOI 10.1136/jmg.6.4.448 supplied in the task brief resolves in the archive to an unrelated microbiology journal issue (title mismatch confirmed); the correct DOI for Patrick & Lake Wolman series could not be confirmed via PubMed eutils search. This citation is flagged for manual verification before use.

[^morris2017]: doi:10.1161/atvbaha.116.308734 · Morris GE et al. · in-vitro · model: cell-based functional assays; rs1051338 variant · Arteriosclerosis Thrombosis and Vascular Biology 2017 · 38 citations (archive: confirmed, download pending)

[^evans2019]: doi:10.1161/atvbaha.119.313443 · Evans TD et al. · in-vitro · model: cell-based functional characterization of CAD-associated LIPA variants · Arteriosclerosis Thrombosis and Vascular Biology 2019 · 24 citations (archive: confirmed, download pending)

[^balwani2015review]: NBK305870 · Balwani M, Vijay S. GeneReviews: Lysosomal Acid Lipase Deficiency. University of Washington. Last updated 2026. No DOI (book chapter); used for clinical spectrum description only.
