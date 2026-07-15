---
type: protein
aliases: [GHS-R1a, ghrelin receptor, growth hormone secretagogue receptor, GHSR1a, GHS-R, growth hormone secretagogue receptor type 1]
uniprot: Q92847
ncbi-gene: 2693
hgnc: 4267
ensembl: ENSG00000121853
genage-id: null
mouse-ortholog: Ghsr
pathways: ["[[insulin-igf1]]", "[[mtor]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: "Highest expression in pituitary (~24 TPM) and hypothalamus (~18 TPM); low peripheral expression. GTEx v10 does not provide age-stratified summary statistics for GHSR at this resolution — aging-correlation direction unknown from GTEx alone. Consistent with central neuroendocrine role; peripheral somatopause is likely secondary to GH axis decline rather than GHSR expression change. #gap/needs-gtex-aging-correlation"
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Howard 1996 (cloning, isoforms, topology, coupling), Barzilai 2012 (GH/IGF-1 paradox framing), Picca 2022 (anorexia of aging), and Sun 2020 (abstract-only, muscle) verified against PDFs/abstracts. Canonical IDs confirmed against UniProt Q92847. Ramirez 2019 (functional selectivity, constitutive activity dose) and Pradhan 2013 (ghrelin review) are closed-access / failed download — claims relying on those sources carry #gap/no-fulltext-access. LEAP2 Ge 2018 citation added. Constitutive activity primary source corrected to Holst 2003."
---

# GHSR (Growth Hormone Secretagogue Receptor)

The ghrelin receptor (GHSR, GHS-R1a) is a class A GPCR expressed predominantly in the hypothalamus and pituitary that serves as the primary receptor for the hunger hormone ghrelin. It mediates pulsatile growth hormone (GH) release and appetite stimulation, and is the pharmacological target of [[mk-677|MK-677 (ibutamoren)]]. GHSR sits at the intersection of the GH-IGF-1 axis, appetite regulation, and nutrient-sensing — all of which decline with age — making it a key receptor in the biology of [[sarcopenia]], anorexia of aging, and the contested longevity-paradox of GH stimulation.

---

## Identity

- **UniProt:** Q92847 (GHSR_HUMAN; Swiss-Prot manually curated entry)
- **NCBI Gene ID:** 2693
- **HGNC symbol:** GHSR
- **HGNC ID:** 4267
- **Ensembl:** ENSG00000121853
- **Mouse ortholog:** Ghsr (one-to-one ortholog)
- **Length:** 366 amino acids (isoform 1a, canonical signaling-active form)
- **Class:** Class A (rhodopsin-like) GPCR; seven transmembrane helices
- **Chromosome:** 3q26.31 (human)
- **GenAge entry:** Not listed in GenAge Human or GenAge Models as of 2026-05 — GHSR aging-relevance is pathway-level rather than direct lifespan-genetic. `genage-id: null`.

---

## Splice variants and isoforms

Two well-characterized isoforms arise from alternative splicing of the third intron:

| Isoform | Length | Signaling | Notes |
|---|---|---|---|
| **GHSR-1a** (full-length) | 366 aa / 7 TM helices | Active — couples to Gαq/11 and Gαs | Canonical receptor; expressed in hypothalamus and pituitary |
| **GHSR-1b** (truncated) | 289 aa / 5 TM helices (predicted) | Inactive — does not bind ghrelin or signal independently | Functions as a decoy receptor; can heterodimerize with GHSR-1a and other GPCRs (dopamine D1R, serotonin 5-HT2C) to modulate signaling; may act as a dominant-negative in some tissues |

The GHSR-1b isoform is broadly expressed across many tissues where GHSR-1a is absent [^howard1996]. The functional significance of GHSR-1a / GHSR-1b heterodimers in the context of aging is poorly characterized. #gap/no-mechanism

---

## Structure and key features

- **Seven transmembrane helices** with an extracellular N-terminus (Asn-13 and Asn-27 glycosylated) and intracellular C-terminus
- **Disulfide bond** between Cys-116 and Cys-198 (extracellular loop — required for receptor folding and ligand access)
- **Octanoate (n-octanoyl) binding pocket** — the acylation at Ser-3 of ghrelin engages the hydrophobic core of the binding pocket; deacylated ghrelin (desacyl ghrelin / UAG) does not bind GHSR-1a with significant affinity
- **Constitutive activity** — GHSR-1a has high constitutive (ligand-independent) activity at Gαq/11, which is rare among GPCRs. This baseline activity is physiologically relevant: it maintains tonic appetite and GH tone even in the fasted state, and is a druggable handle for inverse agonists [^holst2003]. The quantitative extent of this constitutive activity relative to maximum agonist response is documented in Holst 2003; functional selectivity across ligand classes is described in Ramirez 2019 (closed-access, #gap/no-fulltext-access) [^ramirez2019].

---

## Endogenous ligands

### Ghrelin (primary agonist)
Ghrelin is a 28-amino acid peptide produced predominantly by X/A-like neuroendocrine cells of the gastric oxyntic mucosa. The n-octanoylation at Ser-3 (added post-translationally by ghrelin O-acyltransferase, GOAT) is required for GHSR-1a binding and GH-releasing activity [^kojima1999]. Acylated ghrelin (AG) circulates alongside the more abundant desacyl ghrelin (UAG / desacyl), which does not bind GHSR-1a but has biological activity through incompletely characterized receptors.

**Ghrelin and aging:** circulating total ghrelin changes with age are inconsistent across studies — some report decreased fasting ghrelin in older adults, others unchanged or increased levels. The acyl-to-desacyl ratio may shift with age, affecting functional GHSR-1a engagement. #gap/contradictory-evidence

### LEAP2 (endogenous antagonist/inverse agonist)
Liver-Expressed Antimicrobial Peptide 2 (LEAP2) was identified as an endogenous antagonist of GHSR-1a [^ge2018]. LEAP2 rises with positive energy balance (fed state, obesity) and suppresses ghrelin-induced GH secretion and appetite. Two recruiting clinical trials (NCT06013592, NCT07171723) are studying LEAP2/ghrelin balance in obesity and during semaglutide treatment (2026). The LEAP2 axis is emerging as a second endogenous regulator of GHSR tone, but its age-specific dynamics have not been characterized. #gap/needs-human-replication

---

## Signaling

GHSR-1a couples primarily through **Gαq/11**, with secondary **Gαs** coupling:

1. **Gαq/11 → PLC-β → IP3/DAG → PKC + intracellular Ca2+** — rapid signaling; drives GH vesicle exocytosis from somatotrophs; drives appetite signaling in hypothalamic NPY/AgRP neurons
2. **Gαs → adenylyl cyclase → cAMP → PKA** — amplifies the GH-secretory response; relevant in pituitary somatotrophs
3. **β-arrestin recruitment** — GHSR-1a displays signaling bias: some ligands (inverse agonists, partial agonists) shift the balance toward or away from β-arrestin internalization vs G-protein-mediated signaling. This functional selectivity is being exploited to design ligands that dissociate appetite effects from GH effects [^ramirez2019].

**Constitutive activity** drives high basal Gαq/11 signaling independently of ligand [^holst2003]. The constitutive activity is sensitive to inverse agonists (which reduce signaling below baseline) and is responsible for maintaining tonic GH pulsatility in the fasted state. The specific quantitative level relative to maximum agonist response is not independently confirmed here (Ramirez 2019 closed-access; #gap/no-fulltext-access).

---

## Tissue expression

**From GTEx v10 (ENSG00000121853.4):**

| Tissue | Expression (TPM, approx.) | Relevance |
|---|---|---|
| Pituitary | ~24 (highest) | Somatotroph GH release; primary endocrine site |
| Hypothalamus | ~18 | Arcuate NPY/AgRP neurons; appetite regulation |
| Nucleus accumbens | ~1.9 | Reward-motivated feeding; mesolimbic dopamine integration |
| Testis | ~1.2 | Reproductive axis cross-talk |
| Whole blood | ~0.9 | Immune cell expression; significance unclear |
| Other peripheral tissues | <0.5 | Includes stomach (local paracrine role), pancreas, heart |

UniProt also documents expression in the stomach (paracrine ghrelin/GHSR axis), cardiac tissue (cardioprotective GHSR signaling in animal models), and pancreas (glucose homeostasis).

---

## Role in aging

### Somatopause and GHSR signaling decline

From approximately age 30, pulsatile GH release declines by ~14% per decade (somatopause). By age 70, mean 24-hour GH secretion is ~5–10% of young-adult levels. Contributing mechanisms include:

- Increased somatostatinergic tone (inhibiting GH release)
- Reduced GHRH secretion from the hypothalamus
- Possible reduced GHSR-1a responsiveness at the pituitary level (direct receptor downregulation is debated; the predominant mechanism appears to be upstream hypothalamic)
- Increased adiposity (which further blunts GH pulsatility via free fatty acid-mediated inhibition)

The net consequence is secondary: decreased IGF-1, contributing to sarcopenia, adiposity, reduced bone density, and sleep-architecture deterioration. This positions GHSR-1a as a proximal drug target for pharmacological restoration of GH pulsatility — the rationale for [[mk-677]].

### GHSR and anorexia of aging

GHSR-1a signaling in hypothalamic arcuate NPY/AgRP neurons drives the orexigenic (appetite-stimulating) response to ghrelin. Age-related decline in appetite (anorexia of aging) — distinct from somatopause — is multifactorial and involves gastrointestinal hormonal changes. Picca et al. 2022 reviewed metabolic and hormonal biomarker candidates for anorexia of aging, including ghrelin, CCK, leptin, and inflammatory mediators [^picca2022]. Importantly, that review notes that plasma concentrations of total ghrelin and acyl-ghrelin do not show consistent variation with aging per se; ghrelin-pathway dysregulation may occur via altered secretion timing, receptor responsiveness, or acyl/desacyl ratio rather than bulk circulating levels. #gap/contradictory-evidence

### GHSR and sarcopenia

Ghrelin/GHSR signaling intersects with skeletal muscle maintenance via two mechanisms:

1. **Indirect (GH-IGF-1-dependent):** GHSR-1a agonism drives GH, which drives hepatic IGF-1 production, which activates [[pi3k-akt-pathway]] → [[mtor]] → muscle protein synthesis. This is the primary mechanism exploited by MK-677 in sarcopenia trials.
2. **Direct (GH-IGF-1-independent):** Evidence from Sun 2020 and Pradhan 2013 suggests ghrelin (including desacyl ghrelin, which does not bind GHSR-1a) promotes C2C12 myoblast differentiation and fusion and attenuates muscle atrophy [^sun2020][^pradhan2013]. The direct myogenic effect may not be fully captured by GHSR-1a agonism alone — UAG has activity not mediated through this receptor.

### The GH-IGF-1 longevity paradox

GHSR-1a occupies a critical position in one of the central paradoxes of aging biology: interventions that reduce GH-IGF-1 signaling extend lifespan in model organisms, while short-term GH-axis stimulation partially reverses age-associated functional decline in humans. See [[mk-677]] § Aging-relevance paradox for the full framing. Key points:

- Ames and Snell dwarf mice (GH-deficient) live substantially longer than WT controls [^barzilai2012]
- Heterozygous *Igf1r* knockout mice have extended lifespan [^barzilai2012]
- Human centenarian cohorts show enrichment of low-IGF-1 pathway variants
- Against this: somatopause in humans produces sarcopenia, frailty, and functional decline — the short-term trade-off is visible even if the long-term effect on human lifespan is unknown

**The current resolution is unresolved.** Chronic GHSR-1a agonism (e.g., MK-677) likely improves specific healthspan metrics while the net effect on human lifespan is unknown and theoretically adverse per the model-organism data. See [[deregulated-nutrient-sensing]] for pathway-level context.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | GHSR cloned from human pituitary; human vs swine type Ia ~93% identical, ~98% similar at amino acid level [^howard1996]; rat ortholog not quantified in Howard 1996 |
| Somatopause phenotype conserved? | yes | GH/IGF-1 decline with age is well-documented across mammalian species |
| Longevity paradox replicated in humans? | partial | Longevity associations exist but no controlled human lifespan data |

#gap/needs-human-replication — the causal contribution of GHSR-1a signaling changes to human aging (vs. the correlative somatopause decline) is not established.

---

## Pharmacology

### Agonists (GH secretagogues)

| Compound | Route | Class | Aging indication |
|---|---|---|---|
| [[mk-677]] (ibutamoren) | Oral | Non-peptide spiroindoline | Phase 2 (sarcopenia, frailty, fracture recovery) |
| GHRP-6 | Injection | Hexapeptide | Preclinical; research tool |
| GHRP-2 | Injection | Hexapeptide | Preclinical; research tool |
| Hexarelin | Injection | Hexapeptide; cardioprotective in animal models | Preclinical |
| Ipamorelin | Injection | Pentapeptide; high GH selectivity | Preclinical / compounded |

MK-677 is the only orally active, non-peptide full agonist with multi-year Phase 2 human data in older adults.

### Inverse agonists / antagonists

GHSR-1a constitutive activity is targetable by inverse agonists (reduce signaling below basal). These are being developed for obesity (suppress appetite + GH-driven weight gain) [^abegg2017]. Not currently in aging-longevity indication.

**Druggability-tier 2 rationale:** MK-677 is a full agonist with well-characterized Phase 2 human data in aging-relevant populations (elderly, sarcopenia, hip-fracture recovery). However, no aging-indication FDA approval exists, Merck discontinued the program, and MK-677 is now in compounded-drug limbo under FDA 503A. Multiple agonists and inverse agonists in development confirm high chemical tractability. Tier 1 would require an FDA-approved drug for an aging indication — not met. Tier 2 reflects high-quality preclinical + advanced-clinical tooling without approved aging use. Consistent with the aging-context convention in CLAUDE.md.

---

## Genetic associations

- **GHSR mutations and isolated partial GH deficiency (GHDP):** Missense variants in GHSR that reduce constitutive receptor activity (without abolishing ghrelin responsiveness) cause short stature / growth delay. Documented in UniProt Q92847 disease annotations.
- **GWAS and longevity:** No strong direct GHSR GWAS hits for longevity in LongevityMap as of 2026 literature. IGF-1 pathway GWAS hits exist but are not GHSR-specific.
- **MR evidence:** No published Mendelian randomization study specifically uses GHSR variants as instruments for aging outcomes. `mr-causal-evidence: not-tested`. #gap/needs-human-replication

---

## Key interactors

- **[[growth-hormone]]** — downstream effector; GHSR-1a drives pulsatile GH release from anterior pituitary somatotrophs
- **[[igf-1]]** — secondary downstream; GH drives hepatic IGF-1 production
- **[[igf1r]]** — anabolic signaling receptor downstream of IGF-1
- **Ghrelin** — primary endogenous agonist (no dedicated wiki page yet — implicit stub)
- **LEAP2** — endogenous inverse agonist/antagonist (no dedicated wiki page yet — implicit stub)
- **NPY / AgRP neurons** — GHSR-1a expression on arcuate nucleus neurons drives appetite; NPY/AgRP are downstream effectors (no dedicated wiki pages — implicit stubs)
- **Somatostatin** — tonically inhibits GH release; opposes the GHSR-1a signal at the pituitary level (no dedicated wiki page — implicit stub)
- **GOAT (ghrelin O-acyltransferase)** — enzyme that octanoylates ghrelin, enabling GHSR-1a binding (no dedicated wiki page — implicit stub)

---

## Cross-references

- **Parent compound page:** [[mk-677]] — full human-trial evidence, pharmacokinetics, safety profile, and the aging-paradox framing
- **Downstream pathway:** [[insulin-igf1]] — GH-IGF-1 signaling axis; GHSR-1a agonism feeds into this pathway
- **Downstream pathway:** [[mtor]] — IGF-1 activates PI3K-AKT-mTOR; mTOR drives protein synthesis (anabolic arm) but also suppresses autophagy (longevity-antagonistic arm)
- **Key hallmark:** [[deregulated-nutrient-sensing]] — the GH-IGF-1 axis is a canonical nutrient/anabolic-sensing pathway; GHSR sits at its apex
- **Key phenotype:** [[sarcopenia]] — primary clinical aging phenotype motivating GHSR-1a agonist development
- **Related protein:** [[growth-hormone]] — GHSR-1a's primary secretagogue target

---

## Limitations and gaps

- `#gap/needs-gtex-aging-correlation` — GTEx v10 does not provide per-age-group GHSR expression summary statistics at the tissue level in the standard API endpoint; an age-stratified analysis would require sample-level metadata. The aging-correlation direction (up/down with age in hypothalamus or pituitary) is unknown from GTEx alone.
- `#gap/needs-human-replication` — MR-based causal evidence linking GHSR signaling changes to human aging outcomes has not been published.
- `#gap/contradictory-evidence` — circulating ghrelin levels with aging show inconsistent direction across studies; the acyl/desacyl ratio with aging is not well characterized.
- `#gap/no-mechanism` — GHSR-1b / GHSR-1a heterodimer function in aging context is not characterized.
- `#gap/long-term-unknown` — whether chronic GHSR-1a agonism (e.g., >2 years in older adults) has net beneficial or adverse effects on lifespan is unknown. The model-organism longevity literature argues against it; the human healthspan literature argues for short-term use in specific populations.
- `genage-id: null` — GHSR is not listed in GenAge Human or GenAge Models; no direct lifespan-manipulation study using GHSR-specific genetic perturbation in a model organism has been published that meets GenAge inclusion criteria.

---

## Footnotes

[^howard1996]: doi:10.1126/science.273.5277.974 · Howard AD et al. · *Science* 1996 · n=N/A (molecular cloning) · in-vitro / molecular biology · cloned GHS-R from swine then human pituitary cDNA libraries; type Ia (366 aa, 7 TM) and type Ib (289 aa, 5 predicted TM); Gα11 coupling required (other Gα subunits inactive); in situ hybridization detected mRNA in pituitary and arcuate/infundibular hypothalamus; human vs swine type Ia ~93% identical, ~98% similar at amino acid level · **locally available** 

[^holst2003]: doi:10.1210/me.2003-0069 · Holst B et al. · *Mol Endocrinol* 2003 · in-vitro (COS-7 / HEK293) · demonstrated high constitutive (ligand-independent) Gαq/11 signaling of GHSR; identified [D-Arg1,D-Phe5,D-Trp7,9,Leu11]-substance P as a full inverse agonist (EC50 ~5.2 nM) capable of reducing constitutive signaling to untransfected-cell baseline; concluded GHSR is highly constitutively active with physiological relevance for GH secretion and appetite control

[^kojima1999]: doi:10.1038/45230 · Kojima M et al. · *Nature* 1999 · n=N/A (peptide purification) · in-vivo/in-vitro · purified and identified ghrelin from rat stomach as the endogenous GHS-R ligand; octanoylation at Ser-3 required for activity; 8399 citations · **not locally available** (not_oa in archive)

[^ramirez2019]: doi:10.1096/fj.201800655R · Ramirez VT et al. · *FASEB Journal* 2019 · in-vitro · characterized functional selectivity of GHSR-1a ligands (antagonists and inverse agonists); demonstrated G-protein vs β-arrestin signaling bias across compound classes · **not locally available** (not_oa in archive; #gap/no-fulltext-access — constitutive activity quantification and β-arrestin bias claims from this source cannot be independently confirmed)

[^abegg2017]: doi:10.1111/dom.13020 · Abegg K et al. · *Diabetes Obes Metab* 2017 · in-vivo (rodent) · two GHSR-1a inverse agonists reduced food intake and body weight while improving glucose tolerance and hepatic steatosis; exploited constitutive receptor activity

[^pradhan2013]: doi:10.1097/MCO.0b013e328365b9be · Pradhan G, Samson SL, Sun Y · *Curr Opin Clin Nutr Metab Care* 2013 · review · summarized ghrelin signaling roles in glucose homeostasis, cardioprotection, muscle atrophy, and bone; ghrelin prevents muscle atrophy by inducing differentiation and fusion · **not locally available** (green OA but download failed — 0 candidate URLs; #gap/no-fulltext-access — direct myogenic mechanism claims from this source unconfirmed)

[^sun2020]: [[studies/sun-2020-ghrelin-muscle-aging]] · PMID 34368393 · PMC8341557 · Sun Y · *J Aging Science* 2020;8(Suppl 3):005 · review · both AG and UAG promote differentiation and fusion of C2C12 myoblasts; both attenuate fasting- or denervation-induced muscle atrophy in aging mice; UAG lacks GHSR-1a binding (no octanoylation) and avoids GH elevation + adiposity side effects; ghrelin gene deficiency increases vulnerability to fasting-induced muscle loss in aging mice · abstract-only confirmed (no local PDF; open-access via PMC)

[^barzilai2012]: doi:10.2337/db11-1300 · Barzilai N et al. · *Diabetes* 2012 · review (Perspectives in Diabetes) · framed paradox of GH/IGF-1 axis in aging: IIS attenuation extends lifespan in model organisms (yeast, nematodes, flies, mice); Ames and Snell dwarf mice plus GH receptor KO mice (citing Brown 2001/Coschigano 2003 as primary sources, refs 31/32 in paper); heterozygous Igf1r KO also extends lifespan; paper does NOT itself provide primary lifespan extension percentages for dwarf mice — these come from cited primary studies · **locally available** 

[^picca2022]: doi:10.2147/CIA.S325008 · Picca A et al. · *Clin Interv Aging* 2022 · review · reviewed metabolic and hormonal biomarkers for anorexia of aging including CCK, ghrelin, leptin, and inflammatory mediators; notes plasma total ghrelin and acyl-ghrelin concentrations do not show consistent variation with aging per se; ghrelin agonists (anamorelin) proposed as therapeutic strategy warranting further investigation · **locally available** 

[^ge2018]: doi:10.1016/j.cmet.2017.10.016 · Ge X et al. · *Cell Metabolism* 2018 · in-vitro/in-vivo · identified LEAP2 (liver-expressed antimicrobial peptide 2) as an endogenous antagonist of GHSR-1a; LEAP2 suppresses ghrelin-induced GH secretion and food intake; rises with positive energy balance · primary source for LEAP2 as endogenous GHSR antagonist
