---
type: protein
aliases: [α-MSH, alpha-MSH, alpha-melanocyte-stimulating hormone, alpha-melanotropin, melanocyte-stimulating hormone alpha, ACTH(1-13)NH2, Ac-SYSMEHFRWGKPV-NH2]
uniprot: P01189
ncbi-gene: 5443
hgnc: 9201
ensembl: ENSG00000115138
genage-id: null
is-noncoding-rna: false
pathways: ["[[melanocortin-system]]", "[[pomc-processing]]", "[[nf-kb]]", "[[mtor]]"]
hallmarks: []
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: "POMC expression is pituitary-enriched and hypothalamus-enriched; tissue-level aging correlation from GTEx v2 not computed for α-MSH (a post-translational peptide, not a transcript); expression of the POMC gene itself declines in aged hypothalamic arcuate nucleus in mice (see body). #gap/needs-tissue-expression-data"
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Dalmasso 2008, Catania 2010, Rinne 2013, Sasaki 2014 verified against primary source PDFs. Brzoska 2008 unverifiable — bronze OA URL blocked by Cloudflare; Brzoska-derived claims tagged #gap/no-fulltext-access. UniProt P01189 chain annotations (positions, PTMs) and canonical IDs (NCBI Gene 5443, HGNC 9201, Ensembl ENSG00000115138) verified via UniProt REST API. Brzoska 2010 book chapter confirmed not_oa — receptor-independence claims for KPV corroborated by Dalmasso 2008 primary data."
---


# α-MSH (alpha-melanocyte-stimulating hormone)

α-MSH is a 13-amino-acid peptide derived by post-translational cleavage of [[pomc|proopiomelanocortin]] (POMC). It signals through melanocortin receptors (MC1R–MC5R) to coordinate melanogenesis, appetite suppression, thermoregulation, and broad anti-inflammatory responses. In the aging context, α-MSH is most relevant as (1) the parent peptide for [[../compounds/kpv|KPV]] — its anti-inflammatory C-terminal tripeptide — and (2) the endogenous template for the synthetic analog [[../compounds/melanotan-ii|Melanotan II]]. POMC neuron tone in the hypothalamic arcuate nucleus declines with age, reducing α-MSH signalling to the melanocortin-4 receptor and contributing to age-associated energy dysregulation.

## Identity

- **UniProt (parent precursor):** P01189 (POMC_HUMAN); α-MSH itself is not assigned a separate UniProt accession — it is a processed peptide chain annotated within POMC
- **NCBI Gene (POMC):** 5443
- **HGNC:** 9201 (symbol: POMC)
- **Ensembl:** ENSG00000115138
- **Sequence:** Ac-Ser-Tyr-Ser-Met-Glu-His-Phe-Arg-Trp-Gly-Lys-Pro-Val-NH₂ (Ac-SYSMEHFRWGKPV-NH₂)
- **Residue positions within POMC:** 138–150 (13 residues; positions as annotated in UniProt P01189)
- **Molecular weight:** ~1,665 Da (free acid); amidated at C-terminus, acetylated at N-terminus in the biologically active form
- **Mouse ortholog:** Pomc (NCBI Gene 18976); ~92% sequence identity in the α-MSH region

## POMC processing and α-MSH generation

α-MSH is one of several biologically active peptides encoded by a single POMC precursor (267 aa in human). Tissue-specific expression of prohormone convertases (PC1/3 and PC2) determines which peptides are liberated [^brzoska2008]:

| Tissue | Convertases expressed | Primary α-MSH-relevant products |
|---|---|---|
| Anterior pituitary | PC1/3 | ACTH (dominant; α-MSH precursor) |
| Intermediate pituitary / brain | PC1/3 + PC2 | α-MSH, β-MSH, γ-MSH, CLIP |
| Hypothalamic arcuate nucleus | PC1/3 + PC2 | α-MSH (released onto MC4R/MC3R) |
| Skin keratinocytes / melanocytes | PC1/3 | α-MSH (autocrine; UV-induced) |
| Immune cells | PC1/3 | α-MSH (immunomodulation) |

**Key co-products from the same POMC precursor:**
- ACTH (residues 138–176): stimulates adrenal cortisol secretion via MC2R
- β-endorphin (residues 237–267): endogenous opioid
- β-MSH (residues 217–234): melanocortin receptor agonist (rodent/primate)
- γ-MSH (residues 77–87): MC3R preferring; natriuresis, energy balance

The final processing steps converting ACTH(1–13) to α-MSH involve cleavage by PC2 followed by N-terminal acetylation (by N-acetyltransferase) and C-terminal amidation (by PAM, peptidylglycine α-amidating monooxygenase). Both modifications are required for full biological potency [^brzoska2008].

## Melanocortin receptor subtypes and signalling

α-MSH binds all five melanocortin receptors (MC1R–MC5R), which are Gαs-coupled GPCRs signalling primarily through cAMP/PKA. Receptor selectivity profile:

| Receptor | α-MSH affinity | Primary tissue | Key functions |
|---|---|---|---|
| MC1R | High (Ki ~1 nM) | Skin melanocytes, immune cells | Melanogenesis; anti-inflammatory |
| MC2R | Does NOT bind | Adrenal cortex | ACTH-specific cortisol secretion |
| MC3R | Moderate | Hypothalamus, gut, immune | Energy balance; anti-inflammatory; natriuresis |
| MC4R | High (Ki ~1–5 nM) | Hypothalamus, brainstem | Appetite suppression; energy expenditure; thermoregulation |
| MC5R | Low–moderate | Exocrine glands, immune cells | Sebaceous secretion; immune modulation |

Downstream: cAMP → PKA → CREB phosphorylation; also MAPK pathway modulation (receptor- and context-dependent) [^catania2010].

## Functions

### Melanogenesis and pigmentation (MC1R)

α-MSH is the principal physiological stimulus for melanin synthesis in skin. Binding MC1R in melanocytes activates cAMP → PKA → MITF → tyrosinase transcription → eumelanin production. This UV-protective response is exploited therapeutically by the synthetic analogs afamelanotide (Scenesse) and Melanotan II.

### Appetite suppression and energy balance (MC4R)

POMC neurons in the hypothalamic arcuate nucleus (ARC) project to the paraventricular nucleus (PVN) and release α-MSH onto MC4R, reducing food intake and increasing energy expenditure. Agouti-related protein (AgRP) is an endogenous MC4R inverse agonist that competes with α-MSH; the AgRP/POMC balance is a central regulator of energy homeostasis. MC4R loss-of-function mutations cause severe monogenic obesity, representing the most common single-gene form of human obesity.

### Anti-inflammatory effects (MC1R, MC3R, MC4R)

α-MSH suppresses inflammatory signalling through multiple mechanisms [^brzoska2008] [^catania2010]:
- **NF-κB pathway:** inhibits IκB kinase activation → reduced IκB degradation → NF-κB nuclear translocation blocked → reduced TNF-α, IL-1β, IL-6 production; additionally, α-MSH promotes IRAK-M (the inhibitory decoy for IRAK-1) in macrophages stimulated via TLR4, blocking signal transduction at an early step
- **MAP kinase:** attenuates JNK and p38 MAPK phosphorylation in macrophages and epithelial cells; ERK1/2 phosphorylation also attenuated (confirmed in intestinal epithelial cells)
- **cAMP/PKA:** raises intracellular cAMP, activating PKA and potentially CREB-driven anti-inflammatory gene programmes
- **JAK/STAT:** JAK/STAT activation has been reported upon MC5R stimulation; SOCS3 induction by α-MSH (via STAT3) constitutes a negative-feedback anti-inflammatory mechanism
- **Fever suppression:** acts in the brain's preoptic area (MC4R) to antagonise pyrogen-induced fever; reduces IL-1β and prostaglandin E₂ centrally

These properties are preserved in C-terminal fragments — notably the tripeptide [[../compounds/kpv|KPV]] (Lys-Pro-Val, residues 11–13 of α-MSH) — that act independently of melanocortin receptor binding [^brzoska2010].

### Thermoregulation

MC4R activation in the hypothalamus increases sympathetic outflow to brown adipose tissue, promoting thermogenesis. This is distinct from the MC4R appetite-suppression pathway but uses the same receptor.

### Vascular function

α-MSH promotes endothelial nitric oxide production through MC1R on endothelial cells, improving vasodilatation and protecting against endothelial dysfunction in rodent models. Mechanistically, α-MSH increases eNOS mRNA expression and eNOS phosphorylation at Ser1177 via MC1R in human endothelial cells (HUVECs); Mn-SOD expression is also upregulated, reducing ROS. In vivo in 10-month-old C57BL/6N mice, acute NDP-α-MSH (0.3 mg/kg i.p.) improved endothelium-dependent vasodilatation in the aorta; chronic MT-II (0.3 mg/kg/day, 3 weeks) in diet-induced obese mice improved aortic and mesenteric artery function [^rinne2013]. The aging relevance of this pathway is unexplored in humans. #gap/needs-human-replication

## KPV: the receptor-independent anti-inflammatory fragment

The C-terminal tripeptide **Lys-Pro-Val (KPV)** corresponds to α-MSH residues 11–13 and retains "almost all of the anti-inflammatory capacity of the full hormone" in cell and rodent models [^brzoska2010]. Critically, KPV's anti-inflammatory activity is **melanocortin-receptor-independent** — it does not measurably bind MC1R–MC5R at physiological concentrations; it enters intestinal epithelial cells via the PepT1 di/tripeptide transporter (SLC15A1) and directly inhibits NF-κB and MAP kinase from within the cell [^dalmasso2008]. See [[../compounds/kpv]] for full pharmacology.

## Therapeutic analogs

| Agent | Structure | FDA status | Mechanism |
|---|---|---|---|
| Afamelanotide (Scenesse) | Linear α-MSH analog: [Nle4,D-Phe7]-α-MSH | FDA-approved 2019 (EPP) | MC1R agonist; UV-independent melanogenesis |
| [[../compounds/melanotan-ii\|Melanotan II]] | Cyclic: Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂ | Not approved; investigational | Broad MCR agonist; tanning + appetite + erectile |
| [[../compounds/kpv\|KPV]] | Tripeptide: H-Lys-Pro-Val-OH | Preclinical | Receptor-independent NF-κB inhibition |

Afamelanotide is FDA-approved under the orphan-drug pathway for increasing pain-free light exposure in erythropoietic protoporphyria (EPP), with the primary mechanism being UV-independent skin darkening via MC1R that reduces the phototoxic threshold [^wu2021].

**Druggability-tier rationale (tier 1):** A clinical drug (afamelanotide/Scenesse) exists that targets this peptide's primary receptor (MC1R) and is FDA-approved (2019). However, the aging-context tier note is: no aging-indication drug exists against α-MSH or its receptors; tier-1 designation reflects the pharmacological tractability of the melanocortin system rather than an aging-approved indication.

## Aging context: POMC neuron decline

**Hypothalamic POMC neurons decline with age**, reducing α-MSH tone to the melanocortin-4 receptor and contributing to age-associated weight gain, adiposity, and metabolic inflexibility. Evidence from mice:

- Hypothalamic SIRT1 protein expression declines with age in the arcuate nucleus; conditional SIRT1 overexpression specifically in POMC neurons (Rosa26-Sirt1 knock-in × Pomc-Cre; mixed 129/J × C57BL/6J background) prevents age-related weight gain in male mice via increased energy expenditure and sympathetic outflow to adipose tissue, with improved leptin sensitivity; food intake was not reduced (energy expenditure, not intake suppression, was the primary driver); effect was male-specific in the reported data [^sasaki2014]. #gap/needs-human-replication
- POMC neuron numbers and peptide content decrease in aged rodent hypothalami, though the human equivalent is not well-characterised. #gap/needs-human-replication

**Aging-specific evidence for α-MSH itself** (as opposed to POMC neuron biology broadly) is thin. α-MSH circulating levels have not been robustly characterised across aging cohorts with appropriate pre-analytical controls, and no interventional human study has targeted α-MSH or its receptors specifically for an aging indication.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (POMC/MCR system highly conserved) |
| POMC neuron decline phenotype conserved in humans? | partial (rodent data strong; human ARC aging data sparse) |
| Replicated in humans for aging endpoints? | no |

#gap/needs-human-replication — Arcuate POMC neuron decline with aging has not been quantitatively demonstrated in human post-mortem ARC tissue at the same resolution as rodent data.

## Anti-inflammatory context: chronic inflammation and hallmarks

Although [[chronic-inflammation]] is a central aging hallmark (inflammaging), α-MSH's anti-inflammatory effects have not been demonstrated in human aging populations — evidence is confined to acute inflammatory disease models (sepsis, IBD, arthritis in rodents) and cell culture [^catania2010]. Whether restoring α-MSH tone or targeting MCRs pharmacologically reduces chronic low-grade inflammation in older humans remains an open question. #gap/needs-human-replication

## Pathway membership

- [[melanocortin-system]] — canonical POMC → α-MSH → MC1/3/4/5R axis (implicit stub; page not yet created)
- [[pomc-processing]] — endoproteolytic processing by PC1/3 + PC2 (implicit stub)
- [[nf-kb]] — α-MSH suppresses NF-κB activation
- [[insulin-igf1]] — overlapping energy-balance regulation via hypothalamic MC4R

## Key interactors and related entities

- [[pomc]] — parent precursor protein (implicit stub; no separate protein page yet)
- [[../compounds/kpv]] — C-terminal tripeptide fragment; receptor-independent anti-inflammatory
- [[../compounds/melanotan-ii]] — synthetic cyclic analog; broad MCR agonist; not approved
- [[mc1r]] — primary pigmentation receptor (implicit stub)
- [[mc4r]] — appetite/energy receptor (implicit stub)
- [[mc3r]] — anti-inflammatory + energy balance receptor (implicit stub)
- [[agrp]] — endogenous MC4R inverse agonist; counterbalances α-MSH in ARC (implicit stub)

## Limitations and gaps

- #gap/needs-canonical-id — α-MSH has no independent UniProt accession; it is a processed chain within POMC (P01189). Frontmatter `uniprot:` field is set to the POMC precursor entry per wiki convention for peptide hormones.
- #gap/needs-human-replication — POMC neuron decline with aging demonstrated in rodents; human arcuate nucleus aging data lacking.
- #gap/needs-human-replication — Anti-inflammatory effects of α-MSH replicated extensively in rodent acute-inflammation models; no human aging RCT exists.
- #gap/needs-tissue-expression-data — GTEx aging correlation for POMC transcript not computed; α-MSH is a post-translational product requiring separate assay (mass spectrometry or RIA).
- #gap/long-term-unknown — No long-term pharmacological data on MC1R or MC4R agonism for aging-relevant outcomes in humans.
- [[melanocortin-system]] and [[pomc-processing]] pathway pages are implicit stubs — these pathways are referenced but no dedicated wiki pages exist yet.
- [[pomc]], [[mc1r]], [[mc3r]], [[mc4r]], [[agrp]] are implicit stubs — protein pages for these entities do not yet exist.

## Footnotes

[^brzoska2008]: doi:10.1210/er.2007-0027 · Brzoska T, Luger TA, Maaser C, Abels C, Böhm M · *Endocrine Reviews* 2008 · review · n=N/A · canonical comprehensive review of α-MSH and related tripeptides: biochemistry, anti-inflammatory mechanisms, in-vivo rodent efficacy, therapeutic perspective · cited_by: 318 · locally: not_oa (bronze OA URL resolves behind Cloudflare; cannot verify; #gap/no-fulltext-access for Brzoska 2008-derived claims)
[^catania2010]: doi:10.1100/tsw.2010.173 · Catania A, Lonati C, Sordi A, Carlin A, Leonardi P, Gatti S · *The Scientific World Journal* 2010 · review · melanocortin system in control of inflammation; covers MC1–MC5 receptor subtypes, NF-κB/MAPK suppression via IκB protection + PKA activation + IRAK-1/IRAK-M pathway, JAK/STAT activation at MC5R, and therapeutic scope across sepsis/IBD/RA/CNS injury · anti-inflammatory signalling primarily via MC1 and MC3 in peripheral cells, MC4 in brain · cited_by: 174 · locally: completed (PDF available)
[^brzoska2010]: doi:10.1007/978-1-4419-6354-3_8 · Brzoska T, Böhm M, Lügering A, Loser K, Luger TA · *Adv Exp Med Biol* 2010 · review · chapter on terminal-signal KPV anti-inflammatory activity beyond the pharmacophore; establishes KPV receptor-independence · cited_by: 34 · locally: not_oa
[^dalmasso2008]: doi:10.1053/j.gastro.2007.10.026 · Dalmasso G, Charrier-Hisamuddin L, Nguyen HTT, Yan Y, Sitaraman S, Merlin D · *Gastroenterology* 2008 · in-vivo (mouse colitis, female C57BL/6, 8 wk) + in-vitro · n=10 mice/group (DSS model); n=10 mice/group (TNBS model) · PepT1-mediated KPV cellular uptake reduces intestinal inflammation via NF-κB and MAPK suppression; KPV Km in Caco2-BBE ≈160 μmol/L · cited_by: 120 · locally: completed (PDF available)
[^rinne2013]: doi:10.1093/cvr/cvs335 · Rinne P, Nordlund W, Heinonen I et al. · *Cardiovascular Research* 2013 · in-vivo (mouse: C57Bl/6N acute; DIO-obese chronic; transgenic MSH-OE) + in-vitro (HUVEC; EA.hy926) · n=8–14 per group (vascular reactivity); n=4–8 (Langendorff coronary) · α-MSH enhances endothelium-dependent vasodilatation via MC1R → eNOS Ser1177 phosphorylation + Mn-SOD upregulation; protects against endothelial dysfunction in aged and obese mice · cited_by: 22 · locally: completed (PDF available)
[^wu2021]: doi:10.36849/jdd.5526 · Wu J, Cotliar R · *Journal of Drugs in Dermatology* 2021 · review · afamelanotide (Scenesse) FDA approval for EPP; mechanism and clinical trial summary · cited_by: 10 · locally: not_oa
[^sasaki2014]: doi:10.1007/s00125-013-3140-5 · Sasaki T, Kikuchi O, Shimpuku M et al. · *Diabetologia* 2014 · in-vivo (mouse; Rosa26-Sirt1 KI × Pomc-Cre; mixed 129/J × C57BL/6J background) · hypothalamic SIRT1 protein declines with age in ARC; conditional SIRT1 overexpression in POMC neurons (Pomc-Cre) prevents age-related weight gain in males via increased energy expenditure + sympathetic outflow to adipose tissue (not via reduced food intake) + improved leptin sensitivity · cited_by: 90 · locally: completed (PDF available)
