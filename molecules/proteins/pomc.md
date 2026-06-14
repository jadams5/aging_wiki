---
type: protein
aliases: [proopiomelanocortin, pro-opiomelanocortin, ACTH precursor, ACTH/MSH precursor, ADCP-precursor, POMC_HUMAN]
uniprot: P01189
ncbi-gene: 5443
hgnc: 9201
ensembl: ENSG00000115138
genage-id: null
is-noncoding-rna: false
pathways: ["[[melanocortin-system]]", "[[pomc-processing]]", "[[hpa-axis]]", "[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: "POMC is pituitary-enriched and hypothalamus-enriched; GTEx v2 tissue-level aging correlations not available at the peptide level (POMC products are post-translational derivatives). POMC transcript declines in aged arcuate nucleus in mice. #gap/needs-tissue-expression-data"
mr-causal-evidence: partial
caused-by: []
causes: ["[[alpha-msh]]"]
complex-subunits: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Biebermann 2006 and Sadagurski 2015 verified against primary source PDFs; Krude 1998 verified against PubMed abstract (PMID 9620771, not_oa — full PDF inaccessible); Bicknell 2008 PDF failed to download (bronze OA URL returned 0 candidates after filtering — archive fetch failure); Seidah 1999 not_oa; Coll 2004, Kühnen 2019, Nillni 2016 not_oa; processing-table residue positions cross-checked against UniProt P01189 REST API; NCBI Gene 5443, HGNC 9201, Ensembl ENSG00000115138 cross-checked via Crossref and UniProt"
---

# POMC (proopiomelanocortin)

POMC is a 267-amino-acid prohormone that serves as the single precursor for a family of biologically active peptides — ACTH, α-MSH, β-MSH, γ-MSH, β-endorphin, β-LPH, γ-LPH, CLIP, and Met-enkephalin. Tissue-specific expression of the prohormone convertases PC1/3 and PC2 determines which peptides are liberated from the precursor, producing entirely different product profiles in anterior pituitary corticotrophs, intermediate lobe melanotrophs, hypothalamic arcuate neurons, and peripheral tissues (skin, immune cells). In the aging context, POMC is relevant primarily through the decline of hypothalamic arcuate POMC neurons, which reduces α-MSH tone on MC4R and contributes to age-associated metabolic dysregulation and the anorexia of aging.

## Identity

- **UniProt:** P01189 (POMC_HUMAN)
- **NCBI Gene:** 5443
- **HGNC symbol:** POMC
- **Ensembl:** ENSG00000115138
- **GenAge:** not listed (POMC is a prohormone, not a longevity gene per GenAge curation criteria; #gap/needs-canonical-id confirmation)
- **Length:** 267 amino acids (preprohormone); signal peptide residues 1–26; mature POMC 27–267
- **Molecular weight:** ~29.4 kDa (full preprohormone); mature peptide products range from ~0.6 kDa (Met-enkephalin) to ~4.5 kDa (ACTH)
- **Mouse ortholog:** Pomc (NCBI Gene 18976; ~92% sequence identity in the α-MSH region)
- **Disambiguation note:** The pathway page [[melanocortin-system]] covers the full melanocortin receptor signalling network; this page covers the POMC precursor protein itself. The processed peptide [[alpha-msh]] has its own page (R35-Stage2).

## POMC processing cascade

POMC undergoes sequential proteolytic cleavage at paired basic residue sites. The tissue-specific expression of PC1/3 and PC2 determines the endpoint peptide mix [^bicknell2008] [^seidah1999].

### Peptide products and positions within POMC (UniProt P01189)

| Peptide | POMC residues | Key modifications |
|---|---|---|
| Signal peptide | 1–26 | Cleaved co-translationally |
| NPP (N-terminal peptide) | 27–102 | O-glycosylated (Thr71); N-glycosylated (Asn91) |
| γ-MSH | 77–87 | Phe-amide C-terminus; MC3R-preferring |
| JP (joining peptide) | 105–134 | Linker; C-terminal residue amidated (Gln134-NH₂ per UniProt) |
| ACTH (1–39) | 138–176 | N-Ac-Ser138; stimulates adrenal cortisol via MC2R |
| α-MSH (ACTH 1–13) | 138–150 | N-acetylation + C-terminal Val-amide; MC1R/MC3R/MC4R agonist |
| CLIP (ACTH 18–39) | 156–176 | Corticotropin-like intermediary peptide |
| β-LPH | 179–267 | Lipotropin beta |
| γ-LPH | 179–234 | Lipotropin gamma |
| β-MSH | 217–234 | MC3R/MC4R agonist; important in humans |
| β-endorphin (1–31) | 237–267 | Opioid; mu-opioid receptor agonist |
| γ-endorphin | 237–253 | Truncation product; not annotated as a distinct chain feature in UniProt P01189 #gap/needs-canonical-id |
| Met-enkephalin | 237–241 | YGGFM; classical opioid pentapeptide |

The disulfide bond between Cys28 and Cys50 stabilizes the N-terminal NPP domain.

### Tissue-specific processing

The key regulatory axis is the presence or absence of PC2 [^bicknell2008] [^seidah1999]:

| Tissue compartment | Convertases | Primary products |
|---|---|---|
| Anterior pituitary (corticotrophs) | PC1/3 only | ACTH + β-LPH (dominant) |
| Intermediate pituitary (melanotrophs) | PC1/3 + PC2 | α-MSH + CLIP + β-endorphin |
| Hypothalamic arcuate nucleus | PC1/3 + PC2 | α-MSH (→ MC4R/MC3R) + β-endorphin |
| Skin keratinocytes / melanocytes | PC1/3 | α-MSH (UV-induced; autocrine MC1R) |
| Immune cells (macrophages, lymphocytes) | PC1/3 | α-MSH; ACTH (local immunomodulation) |

**Activation cascade for α-MSH from ACTH:** PC2 cleaves ACTH at the Arg-Arg bridge between positions 150 and 151, yielding ACTH(1–13) (= α-MSH before modification). N-acetyltransferase then acetylates Ser138, and PAM (peptidylglycine α-amidating monooxygenase) amidates the C-terminal Val150, generating the fully active Ac-α-MSH-NH₂. Both modifications are required for full melanocortin receptor potency [^bicknell2008].

**β-endorphin production:** PC1/3 cleaves β-LPH at Lys-Arg to yield γ-LPH; PC2 then cleaves γ-LPH to yield β-endorphin (β-LPH 61–91 = POMC 237–267). In the absence of PC2 (anterior pituitary), γ-LPH accumulates.

## Function

POMC is not itself a signalling molecule; its function is entirely mediated through its processed peptide products. The major functional axes:

1. **HPA axis regulation** — ACTH (from anterior pituitary) drives adrenal glucocorticoid secretion; the HPA axis response to stress and its dysregulation in aging are upstream consequences of pituitary POMC processing.
2. **Energy homeostasis** — arcuate POMC neurons release α-MSH onto hypothalamic MC4R to suppress appetite and increase energy expenditure. AgRP (from adjacent AgRP/NPY neurons) is the endogenous MC4R inverse agonist — the AgRP/POMC neuron balance is the central satiety/hunger switch.
3. **Pigmentation** — α-MSH → MC1R → MITF → eumelanin synthesis in skin melanocytes; UV-induced skin POMC expression is an autocrine pigmentation circuit.
4. **Opioid analgesia and reward** — β-endorphin from pituitary and hypothalamus activates mu-opioid receptors centrally.
5. **Immune modulation** — local α-MSH production in macrophages and lymphocytes exerts anti-inflammatory effects via MC1R, MC3R, and MC5R (see [[alpha-msh]] for details).

## Role in aging

### Hypothalamic POMC neuron decline

The hypothalamic arcuate POMC neuron population undergoes functional decline with age, reducing anorexigenic α-MSH tone on MC4R. This is mechanistically distinct from POMC gene expression changes — aged arcuate neurons show impaired leptin responsiveness, increased endoplasmic reticulum stress, and mitochondrial dysfunction that dampen POMC neuron firing before frank neuron loss occurs [^nillni2016]. Hypothalamic inflammation (Iba1+ microglial activation, elevated NF-κB pathway genes including Ikbkb, elevated TNF-α) accumulates with age and is reduced by early neonatal caloric restriction, which also preserves arcuate POMC and AgRP projection density to the PVN [^sadagurski2015].

Downstream consequences of arcuate POMC neuron decline in aged animals:
- Reduced α-MSH → MC4R satiety signalling → increased food intake per unit energy need
- Impaired thermoregulation via MC4R → sympathetic drive to brown adipose tissue
- Disinhibited AgRP/NPY tone → orexigenic bias shifts

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — hypothalamic POMC neurons are anatomically and functionally conserved |
| Phenotype conserved in humans? | partial — age-related weight redistribution, decreased anorexigenic tone in elderly, and anorexia of aging are documented; direct POMC neuron imaging in living humans is not available |
| Replicated in humans? | no — arcuate POMC neuron counts and function in aging not directly measurable in vivo; extrapolation from mouse and post-mortem data only |

#gap/needs-human-replication

### HPA axis dysregulation with age

Basal cortisol levels rise with age and the cortisol awakening response becomes blunted, reflecting altered pituitary ACTH dynamics. Whether this is driven by changes in POMC expression, altered PC1/3 activity, or upstream [[molecules/proteins/crh|CRH]]/AVP signalling changes is not fully resolved. #gap/no-mechanism

### Melanocortin pathway and metabolic aging

MC4R loss-of-function is the most common single-gene cause of human obesity [^coll2004]. The genetic architecture of MC4R obesity makes it a proof-of-concept for the POMC → α-MSH → MC4R axis in human energy balance. Age-associated reduction of this axis (even without complete MC4R loss) could contribute to metabolic drift in aging. The drug setmelanotide (MC4R agonist) is approved for monogenic POMC-deficiency obesity and is now being explored in broader metabolic contexts [^kuhnen2019].

### POMC deficiency syndrome (OBAIRH)

Loss-of-function mutations in POMC cause a severe Mendelian disorder: early-onset hyperphagia, severe obesity, red hair (from lack of MC1R stimulation), and secondary adrenal insufficiency (from lack of ACTH) [^krude1998]. The two original probands had different genotypes: Patient 1 was a compound heterozygote for two mutations in exon 3 (G7013T and C7133Δ) that interfere with ACTH and α-MSH synthesis; Patient 2 was homozygous for an exon 2 mutation (C3804A) that abolishes POMC translation entirely. This phenotype validates the indispensability of POMC processing to energy homeostasis and adrenal function. β-MSH mutations have also been linked to human early-onset obesity [^biebermann2006].

**mr-causal-evidence rationale:** GWAS instruments for POMC locus variants exist and associate with BMI; formal Mendelian randomization studies of POMC per se are sparse, but the monogenic evidence provides strong causal inference for the POMC–MC4R–energy balance axis in humans. Classified `partial` (instrument available, MR study pending). #gap/needs-replication

## Pharmacology and targeting

POMC itself is not directly drugged; intervention is at the level of its processed products or the melanocortin receptors [^kuhnen2019]:

| Agent | Target / mechanism | Status |
|---|---|---|
| Setmelanotide | MC4R agonist | FDA-approved (POMC-deficiency obesity, LEPR-deficiency obesity) |
| Afamelanotide (Scenesse) | MC1R agonist; α-MSH analog | FDA-approved (erythropoietic protoporphyria) |
| Melanotan II ([[../compounds/melanotan-ii]]) | Pan-MCR agonist; α-MSH analog | Research only; not approved |
| KPV ([[../compounds/kpv]]) | Receptor-independent anti-inflammatory; α-MSH C-terminal tripeptide | Preclinical |
| POMC gene therapy | AAV-POMC delivery to hypothalamus | Preclinical (monogenic obesity models) |

**Druggability-tier 1 rationale:** Multiple clinically approved drugs engage the POMC-derived peptide axis (setmelanotide, afamelanotide). POMC gene therapy is in active preclinical development for monogenic POMC-deficiency obesity. The aging-context tractability is indirect — no approved drug targets POMC for an aging indication — but the melanocortin axis (POMC → α-MSH → MC4R) has tier-1 pharmacology via setmelanotide and the approved MC4R agonist programme.

## Pathway membership

- [[melanocortin-system]] — POMC is the upstream precursor for all melanocortin peptides; the MC1R–MC5R receptor network is detailed on this pathway page (planned)
- [[pomc-processing]] — dedicated pathway page for the PC1/3 and PC2 cleavage cascade (planned)
- [[hpa-axis]] — ACTH (POMC-derived) is the proximal pituitary driver of adrenal glucocorticoid synthesis
- [[insulin-igf1]] — hypothalamic POMC neuron tone intersects with insulin and leptin signalling; arcuate POMC neurons express leptin receptor (LEPR) and insulin receptor; both hormones activate POMC neurons

## Key interactors

- [[mc1r]] — primary receptor for α-MSH in skin and immune cells (R35-Stage2 wave 3)
- [[mc4r]] — primary hypothalamic receptor for appetite suppression (R35-Stage2 wave 3)
- [[agrp]] — endogenous MC3R/MC4R inverse agonist produced by adjacent arcuate neurons; competes with α-MSH #stub
- [[alpha-msh]] — the 13-aa processed peptide product; full page at R35-Stage2
- [[../compounds/kpv]] — α-MSH C-terminal tripeptide with receptor-independent anti-inflammatory activity (R36)
- [[../compounds/melanotan-ii]] — synthetic α-MSH analog (R36)
- [[../compounds/setmelanotide]] — MC4R agonist approved for POMC-deficiency obesity (forward queue)

## Limitations and gaps

- **POMC neuron aging data is largely murine.** Direct measurement of arcuate POMC neuron tone in aging humans is not feasible non-invasively; post-mortem data are sparse. #gap/needs-human-replication
- **GTEx correlation unavailable.** POMC encodes a prohormone; processed peptide levels are not captured by transcript expression. Hypothalamic POMC expression data require specific brain-region dissection not well-represented in GTEx v2. #gap/needs-tissue-expression-data
- **GenAge not listed.** POMC is not in GenAge human-aging gene set; this may reflect the indirect nature of its aging relevance (mediated through neuron decline, not direct lifespan genetics). #gap/needs-canonical-id
- **HPA aging mechanism.** Whether age-related HPA changes reflect altered POMC expression, modified PC1/3 activity, or upstream CRH/AVP signalling is unresolved. #gap/no-mechanism
- **MR evidence is sparse.** GWAS instruments exist for POMC locus but formal MR studies for aging-specific outcomes are lacking. #gap/needs-replication
- **Intermediate and neurointermediate lobe biology in humans.** The human pituitary intermediate lobe regresses after fetal development, making classic rodent intermediate-lobe POMC processing less directly translatable to adult human physiology. This is a systematic confound for any claim extrapolated from rodent intermediate-lobe studies. #gap/contradictory-evidence

## Footnotes

[^bicknell2008]: doi:10.1111/j.1365-2826.2008.01709.x · Bicknell AB · J Neuroendocrinol · 2008 · review · model: in vitro + pituitary biology · tissue-specific POMC processing via PC1/3 and PC2; modifications required for full α-MSH potency · NOTE: bronze OA, but DOI lookup failed (0 candidate URLs after filtering); full PDF not verified #gap/no-fulltext-access

[^seidah1999]: doi:10.1111/j.1749-6632.1999.tb08665.x · Seidah NG et al. · Ann N Y Acad Sci · 1999 · review · model: biochemical/cellular · PC1 alone generates ACTH+β-LPH in anterior pituitary; PC1+PC2 generate α-MSH+β-endorphin in neuroendocrine tissues; 7B2 facilitates PC2 zymogen activation · not_oa — full PDF not verified #gap/no-fulltext-access

[^krude1998]: doi:10.1038/509 · Krude H et al. · Nat Genet · 1998 · observational · n=2 patients · PMID:9620771 · not_oa — verified via PubMed abstract · Patient 1: compound heterozygote, two exon-3 mutations (G7013T + C7133Δ); Patient 2: homozygous exon-2 mutation (C3804A) abolishing translation · both present with early-onset obesity, adrenal insufficiency, red hair · first human POMC LoF description; 1717 citations

[^coll2004]: doi:10.1210/jc.2004-0428 · Coll AP, Farooqi IS, Challis BG, Yeo GS, O'Rahilly S · J Clin Endocrinol Metab · 2004 · review · model: human genetics + mouse · POMC-derived hypothalamic peptides as central energy balance regulators; human and mouse monogenic evidence · not_oa — full PDF not verified #gap/no-fulltext-access

[^biebermann2006]: doi:10.1016/j.cmet.2006.01.007 · Biebermann H et al. · Cell Metab · 2006 · human genetics + in-vitro + in-vivo (rat ICV) · human screening: 722 obese children vs 1270 normal-weight controls; 2 obese carriers, 0 controls of Y5C-b-MSH missense mutation · Y5C mutant peptide has 100-fold reduced MC4R binding affinity and 50-fold reduced cAMP activity; no dominant-negative effect; in-vivo ICV in rats confirmed loss of anorexigenic function · establishes β-MSH as a functional hypothalamic anorexigen in humans

[^kuhnen2019]: doi:10.1016/j.molmed.2018.12.002 · Kühnen P, Krude H, Biebermann H · Trends Mol Med · 2019 · review · setmelanotide as biased MC4R agonist for POMC-deficiency and LEPR-deficiency obesity; 187 citations · not_oa — full PDF not verified #gap/no-fulltext-access

[^nillni2016]: doi:10.1016/j.mce.2016.09.002 · Nillni EA · Mol Cell Endocrinol · 2016 · review · SIRT1 regulates hypothalamic PC1/3 and PC2 expression → POMC processing; aging and caloric restriction context; ER stress in POMC neurons · not_oa — full PDF not verified #gap/no-fulltext-access

[^sadagurski2015]: doi:10.14814/phy2.12379 · Sadagurski M et al. · Physiol Rep · 2015 · in-vivo (mouse; genetically heterogeneous UM-HET3; neonatal litter crowding model) · n=6/group · early neonatal nutrient restriction (crowded litter 12 or 15 pups vs 8-pup controls) permanently increased AgRP and α-MSH fiber density in PVN and enhanced hypothalamic leptin signalling at 12 months; reduced hypothalamic inflammatory markers (IL-6, TNF-α, NF-κB pathway genes, Iba1+ microglia) at 12 and 22 months · NOTE: lifespan extension in the CL model is from Sun et al. 2009 (background reference); this paper characterises the hypothalamic mechanism, not lifespan per se
