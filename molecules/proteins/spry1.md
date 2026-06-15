---
type: protein
aliases: [SPRY1, Spry-1, sprouty homolog 1, sprouty RTK signaling antagonist 1, hSPRY1]
uniprot: O43609
ncbi-gene: 10252
hgnc: 11269
ensembl: ENSG00000164056
genage-id: null
mouse-ortholog: Spry1
pathways: ["[[ras-mapk]]", "[[fgf-signaling]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]", "[[altered-intercellular-communication]]"]
sens-categories: []
caused-by: ["[[fgf-signaling]]", "[[altered-intercellular-communication]]"]
causes: ["[[stem-cell-exhaustion]]"]
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
literature-checked-through: 2026-06-15
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "All four primary sources read end-to-end (Shea 2010 PMC OA, Chakkalakal 2012 PDF, Bigot 2015 gold OA, Anerillas 2024 gold OA). Canonical IDs independently confirmed via UniProt REST, NCBI eutils, HGNC REST. Secondary citations (Macia 2014, Park 2022, miR-21 kidney paper, Syroid 2026, Chambers 2025) not re-read against PDFs — treated as supporting context with low load-bearing weight."
---

# SPRY1 (Sprouty RTK Signaling Antagonist 1)

SPRY1 — Sprouty receptor tyrosine kinase (RTK) signaling antagonist 1, commonly abbreviated Sprouty1 or Spry1 in mouse — is an intracellular negative-feedback regulator of RTK/RAS–ERK–MAPK (mitogen-activated protein kinase) signaling. Its most aging-critical role is as a **quiescence guardian in skeletal muscle satellite cells (muscle stem cells)**. SPRY1 is selectively enriched in quiescent satellite cells, is required for their return to quiescence after activation, and its suppression — whether by loss of expression or by age-associated DNA methylation — drives failure of stem cell self-renewal and progressive depletion of the satellite cell reserve pool in elderly muscle [^shea2010] [^chakkalakal2012] [^bigot2015]. In aged muscle, chronic elevation of FGF2 (fibroblast growth factor 2) in the myofiber niche suppresses Spry1 in cycling satellite cells; only the quiescence-retaining subpopulation maintains high Spry1, and loss of this brake accelerates stem pool depletion [^chakkalakal2012].

## Identity

- **UniProt:** O43609 (SPY1_HUMAN) — reviewed Swiss-Prot entry; accessed 2026-06-15
- **NCBI Gene:** 10252
- **HGNC ID:** HGNC:11269
- **HGNC symbol:** SPRY1
- **Ensembl:** ENSG00000164056
- **Mouse ortholog:** Spry1 (NCBI Gene 24063, *Mus musculus*; function highly conserved)
- **Protein length:** 319 amino acids; molecular weight 35,122 Da
- **Chromosomal location (human):** 4q28.1

## Key functional domains

- **N-terminal intrinsically disordered region** — contains regulatory sites including a conserved tyrosine (Tyr-53 in Sprouty1) required for senescence-inducing activity [^anerillas2024]; also contains a cysteine-rich cluster important for membrane interactions
- **SPR domain** (residues 183–295) — the conserved Sprouty domain; responsible for protein–protein interactions and membrane ruffle localization upon RTK stimulation; mediates RAS–MAPK inhibitory interactions

## Function and molecular mechanism

SPRY1 is a member of the Sprouty protein family (SPRY1–4 in mammals), originally identified in *Drosophila* as an inhibitor of FGF signaling during tracheal branching morphogenesis. In mammals it operates as a broadly-expressed RTK signal attenuator with context-dependent target specificity.

**Canonical RTK/RAS–ERK inhibition.** Upon growth factor stimulation (principally FGF, but also EGF and VEGF/vascular endothelial growth factor), SPRY1 is recruited from the cytoplasm to membrane ruffles and inhibits phosphorylation of ERK1/2 (extracellular signal-regulated kinase) by interfering with RAS activation upstream or at the level of RAF [^shea2010]. This creates a negative-feedback loop that attenuates the amplitude and duration of the MAPK proliferative signal.

**Subcellular localization.** Under basal (unstimulated) conditions SPRY1 is cytoplasmic. Following RTK stimulation it translocates to plasma membrane ruffles. At the membrane it functions as a peripheral membrane protein and its activity is modulated by post-translational modifications including tyrosine phosphorylation.

**Context-dependent roles.** SPRY1 is not a simple universal brake: its effect on a given pathway can depend on which RTK is engaged and which downstream adaptor proteins are active. In some cellular contexts SPRY1 preferentially inhibits FGF-ERK signaling while having minimal effect on EGF-ERK. In others, notably involving the CBL ubiquitin ligase, SPRY1 can prevent receptor down-regulation, potentially amplifying EGF signaling even while inhibiting ERK. These context-dependencies mean that SPRY1 function must be interpreted within the specific growth-factor milieu of each tissue.

## Role in aging: the satellite-cell quiescence axis

This is SPRY1's most mechanistically characterized and aging-relevant role. See also [[molecules/proteins/fgf2]] for the complementary FGF2 niche side of this biology.

### Shea 2010 — quiescence guardian during regeneration

Shea et al. (2010, *Cell Stem Cell*) established that Spry1 is expressed in quiescent Pax7+ satellite cells in uninjured muscle, is downregulated in proliferating myogenic cells after injury, and is re-induced as Pax7+ cells re-enter quiescence following the regenerative response [^shea2010]:

- Spry1 expression tracks the **quiescence state**, not the stem cell identity per se — it rises when cells exit the cell cycle and falls when they re-enter
- Genetic loss of Spry1 from satellite cells (conditional knockout) impaired the ability of satellite cells to **return to quiescence after injury**, resulting in failure of self-renewal and progressive loss of the reserve pool over repeated regenerative cycles
- The study established the conceptual frame: Spry1 is a molecular brake on FGF-ERK signaling that is specifically required for the quiescence re-entry step, not for initial activation or differentiation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — SPRY1/SPRY gene family conserved; FGF–ERK signaling is conserved |
| Phenotype conserved in humans? | partial — satellite cell pool decline with age is documented in humans (see below) |
| Replicated in humans? | yes (Bigot 2015 established human relevance) |

### Chakkalakal 2012 — aged niche FGF2 suppresses Spry1

Chakkalakal et al. (2012, *Nature*) — the landmark paper on this axis — placed Spry1 in the context of the aging muscle niche [^chakkalakal2012]. Key findings:

- **The aged niche problem.** Aged mouse myofibers (at ~24 months under non-injured homeostatic conditions) express Fgf2 at levels that chronically drive satellite cells to exit quiescence — an "abortive activation" that depletes the pool without productive regeneration.
- **Spry1 as the FGF2 counterweight.** Among the aged satellite cell population, Spry1 is selectively enriched in **quiescence-retaining label-retaining cells (LRCs)** — the slow-cycling fraction that best maintains stem cell identity. Non-LRC satellite cells, which show higher FGF2-driven ERK activity, express lower Spry1. This differential expression is a consequence, not a cause: FGF2 signaling suppresses Spry1, so cells most exposed to niche FGF2 lose Spry1 first.
- **SPRY1 is LOST in aging, not upregulated.** Aged non-LRC satellite cells show suppressed Spry1 vs. quiescent LRCs. The LRCs are the cells that *resist* age-associated suppression. This framing is critical: SPRY1 is a quiescence mediator that is progressively lost in the bulk aged satellite cell population exposed to chronic FGF2.
- **Loss-of-Spry1 experiment.** Conditional deletion of Spry1 from satellite cells (Pax7-CreER^TM^ × Spry1^fl/fl^) in aged mice worsened quiescence loss and reduced Pax7+ satellite cell numbers by approximately 50% compared with aged controls.
- **Therapeutic rescue.** Either pharmacological FGFR1 inhibition (SU5402) or Spry1 overexpression (SpryOX) in aged satellite cells **prevented stem cell pool depletion**, demonstrating that restoring the FGF2-inhibitory tone is sufficient to rescue the aging phenotype in mice.

### Bigot 2015 — human translation via epigenetic mechanism

Bigot et al. (2015, *Cell Reports*) provided the human mechanistic evidence [^bigot2015]:

- **Age-associated DNA methylation** accumulates at the SPRY1 gene locus in elderly human muscle stem cells, silencing its expression
- Suppression of SPRY1 by this methylation impairs the capacity of human muscle stem cells to re-enter quiescence after activation (failure of re-quiescence), reducing reserve pool replenishment
- The study also clarified a human–mouse mechanistic distinction: aging in **human** muscle stem cells does not primarily involve cellular senescence (p16Ink4a upregulation), in contrast to murine geriatric satellite cells; the dominant human mechanism is SPRY1 epigenetic suppression impairing re-quiescence

This represents a direct human translation of the murine SPRY1-quiescence axis, with an epigenetic layer as the mediator.

### Summary of the FGF2–SPRY1–quiescence axis in aged muscle

The axis operates as follows:

1. Aged myofibers express elevated FGF2 in the niche
2. FGF2 activates FGFR1 on satellite cells → RAS–ERK signaling → suppresses SPRY1 expression
3. Satellite cells with suppressed SPRY1 cannot return to quiescence after activation → abortive cycling → stem pool depletion
4. In very aged muscle (mice) or elderly humans, additional epigenetic methylation further silences SPRY1 independently of current FGF2 levels
5. The residual quiescence-retaining LRC subpopulation maintains Spry1 via slower FGF2 exposure; these are the cells that sustain the depleted pool in very old muscle

## Context-dependent roles beyond satellite cells

### Cellular senescence mediator

Anerillas et al. (2024, *Cell Death & Disease*) demonstrated that Sprouty proteins including SPRY1 are **general mediators of cellular senescence** — an apparently paradoxical role given SPRY1's quiescence-promoting function in satellite cells [^anerillas2024]:

- Multiple senescence triggers elevate SPRY1 expression in non-muscle cell types (fibroblasts, etc.)
- SPRY1 overexpression can trigger premature senescence via a conserved N-terminal tyrosine residue (Tyr-53), acting **upstream of p38** MAPK rather than via ERK inhibition
- Heterozygous knockin mice lacking this tyrosine show delayed senescence during cutaneous wound healing and delayed chemotherapy-induced senescence

This reveals that SPRY1 can switch roles depending on cellular context: in satellite cells, SPRY1 promotes return to quiescence (a protective, proliferation-limiting role); in other cell types, SPRY1 can actively induce senescence entry. Both functions share the theme of inhibiting mitogenic signaling but engage different downstream pathways (ERK inhibition in RTK contexts vs. p38 activation in stress/senescence contexts). #gap/no-mechanism — the molecular switch determining which mode dominates in a given cell type is not established.

### Tumor suppression

SPRY1 loss-of-expression has been documented in multiple cancer contexts, consistent with a tumor-suppressor role. Spry1 knockout mice show accelerated thyroid tumor formation in a PTEN-deficient background; SPRY1 restrains proliferation and induces senescence via NFκB pathway activation [^macia2014]. In glioblastoma, however, SPRY1 is expressed in tumor stem cells and supports stemness and self-renewal — the tissue context again inverts the effect [^park2022]. #gap/contradictory-evidence

### miR-21 axis in kidney aging

In aged kidney, elevated miR-21 suppresses SPRY1 expression; this correlates with altered matrix protein metabolism in the aging kidney [^pmid23020145]. This is an additional tissue context where age-associated SPRY1 suppression may contribute to dysfunction, but mechanistic depth is limited. #gap/no-mechanism #gap/needs-replication

### Quiescent satellite cell transcriptomic marker

A 2026 scoping review of transcriptomic markers for quiescent satellite cells (Syroid et al., *American Journal of Physiology — Cell Physiology*) identified Spry1 alongside Cd34 and Calcr as the most commonly used transcriptomic identifiers of the quiescent satellite cell cluster in murine single-cell RNA-sequencing (scRNA-seq) datasets [^syroid2026]. This validates SPRY1's status as a canonical quiescence gene rather than a purely functional regulator, and has practical implications for cell-type annotation in aging single-cell atlases.

## Pathway membership

- **[[ras-mapk]]** — primary target of SPRY1 inhibitory action; SPRY1 attenuates ERK1/2 phosphorylation downstream of RTKs
- **[[fgf-signaling]]** — FGF2/FGFR1 signaling is the dominant upstream inducer of SPRY1 activity in muscle; SPRY1 is a key feedback node in this pathway in satellite cells
- **[[pi3k-akt-pathway]]** — SPRY1 has been reported to modulate PI3K/AKT in some contexts (notably via PTEN; see miR-21/glioma literature), but this is secondary to its MAPK role in muscle

## Known interactors

- **[[fgf2]]** — FGF2 from aged myofibers is the primary upstream suppressor of Spry1 in satellite cells; SPRY1 is the intracellular feedback antagonist of FGF2/FGFR1 signaling [^chakkalakal2012]
- **FGFR1** (see [[molecules/proteins/fgfr1]]) — RTK whose downstream MAPK signaling SPRY1 inhibits; pharmacological FGFR1 inhibition phenocopies Spry1 overexpression in aged satellite cells
- **RAF1 / GRB2** — adaptor proteins through which SPRY1 interferes with RAS activation; the mechanism involves competition with SOS (Son of Sevenless) for GRB2 binding
- **CBL** — in EGF contexts, SPRY1 can prevent CBL-mediated EGFR ubiquitination and degradation; bidirectional interaction with RTK down-regulation machinery

## Druggability

**`druggability-tier: null`** — SPRY1 is an intracellular adaptor/scaffold protein with no catalytic activity (no kinase, ligase, or hydrolase activity), making it a poor direct pharmacological target. There is no validated small-molecule SPRY1 activator or inhibitor with clinical-stage development for any indication, let alone an aging one. #gap/no-opentargets-entry

The therapeutic implications of the SPRY1 axis are more likely to be realized **indirectly**:
- **Upstream FGFR1 inhibition** — reduces the FGF2 signal that suppresses SPRY1 in aged satellite cells; preclinical proof-of-concept (SU5402) in Chakkalakal 2012; no clinical translation for sarcopenia
- **SPRY1 gene therapy** — overexpression in aged satellite cells; demonstrated rescue in mouse; no human clinical translation
- **DNMT (DNA methyltransferase) inhibition / demethylation** — could reverse the age-associated SPRY1 methylation shown by Bigot 2015; demethylating agents exist (5-azacytidine, decitabine) but systemic DNMT inhibition carries cancer risk and would not be selective for satellite cells #gap/long-term-unknown
- **Senolytics** — remove SASP-secreting senescent cells from the aged muscle niche, reducing paracrine FGF2 sources; indirect effect on SPRY1 expression; preclinical evidence suggests restoration of satellite cell function (see [[cellular-senescence]] and [[molecules/compounds/fisetin]]); Chambers et al. 2025 (*Aging Cell*) identified SPRY1 regulation as part of the methylome-transcriptome response during aged muscle regeneration with senolytic treatment [^chambers2025]

## Hallmark connections

| Hallmark | SPRY1 mechanism |
|---|---|
| [[stem-cell-exhaustion]] | Primary — SPRY1 loss/suppression in satellite cells is a direct driver of stem pool depletion in aged muscle [^shea2010] [^chakkalakal2012] [^bigot2015] |
| [[cellular-senescence]] | Context-dependent — SPRY1 can promote senescence entry via p38 in non-muscle cells [^anerillas2024]; SPRY1 suppression (loss) in satellite cells protects against premature senescence by maintaining quiescence; a senescent satellite cell niche elevates FGF2, indirectly suppressing SPRY1 |
| [[altered-intercellular-communication]] | The FGF2–SPRY1 axis is a paracrine communication failure in aged muscle: aged myofibers and senescent interstitial cells secrete elevated FGF2, which dysregulates SPRY1 expression in satellite cells downstream [^chakkalakal2012] |

## Extrapolation table (murine → human)

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | SPRY1/FGF–ERK axis conserved; SPRY1 expressed in human satellite cells |
| Phenotype conserved in humans? | yes | Bigot 2015 directly showed SPRY1 methylation suppression in elderly human muscle stem cells impairs re-quiescence |
| Replicated in humans? | partial | Epigenetic mechanism confirmed in humans (Bigot 2015); loss-of-function rescue experiments not replicated in human tissue |

## Limitations and gaps

1. **No direct human genetic evidence.** Mendelian randomization using SPRY1 genetic instruments has not been applied to sarcopenia or muscle-aging outcomes. `mr-causal-evidence: not-tested`. #gap/needs-replication
2. **Rescue experiments are murine only.** FGFR1 inhibition and SPRY1 overexpression rescued aged satellite cell pools in mice; equivalent human interventional experiments do not exist. #gap/needs-human-replication
3. **Context-dependency of SPRY1 function is incompletely understood.** The same protein promotes quiescence in satellite cells and senescence in fibroblasts; the molecular switch is unknown. #gap/no-mechanism
4. **GTEx aging correlation not queried.** Tissue-by-age SPRY1 expression across GTEx would inform which tissues show age-associated SPRY1 changes; `gtex-aging-correlation: null`. #gap/needs-tissue-expression-data
5. **No druggable interface.** SPRY1 lacks enzymatic activity; direct pharmacological targeting is not tractable with current small-molecule approaches. Indirect strategies (FGFR1 inhibition, epigenetic demethylation) are conceptually valid but unvalidated in humans for this indication. #gap/long-term-unknown
6. **SPRY1 isoforms and splice variants.** Multiple SPRY1 transcripts exist; isoform-specific contributions to quiescence vs. senescence functions are not well characterized. #gap/needs-replication

## Cross-references

- **[[molecules/proteins/fgf2]]** — the primary upstream FGF niche ligand whose signaling SPRY1 antagonizes in aged satellite cells; see that page for the full aging muscle niche model
- **[[cell-types/satellite-cells]]** — the cell type where SPRY1 plays its aging-central role; quiescence biology and aging phenotypes covered in depth
- **[[tissues/skeletal-muscle]]** — tissue context; sarcopenia mechanisms; niche composition
- **[[hallmarks/stem-cell-exhaustion]]** — the hallmark that SPRY1-dependent satellite cell pool depletion exemplifies
- **[[hallmarks/cellular-senescence]]** — SPRY1's senescence-inducing role in non-muscle cell types
- **[[hallmarks/altered-intercellular-communication]]** — FGF2 paracrine signaling from aged myofibers to satellite cells
- **[[phenotypes/sarcopenia]]** — downstream clinical phenotype of satellite cell exhaustion
- **[[ras-mapk]]** — the pathway SPRY1 negatively regulates
- **[[fgf-signaling]]** — upstream RTK pathway; FGF2/FGFR1 axis
- **[[molecules/proteins/fgfr1]]** — RTK whose MAPK output SPRY1 inhibits in satellite cells (implicit stub)
- **[[processes/cellular-senescence]]** — process through which SPRY1 suppression in satellite cells eventually leads to p16+ senescence in very old animals

---

## Footnotes

[^shea2010]: doi:10.1016/j.stem.2009.12.015 · PMID 20144785 · PMC 2846417 · Shea KL, Xiang W, LaPorta VS, Licht JD, Keller C, Basson MA, Brack AS · *Cell Stem Cell* 2010;6(2):117–129 · n=4–6 animals per group (multiple cohorts) · in-vivo + in-vitro (mouse, tamoxifen-inducible conditional Spry1 knockout in satellite cells) · model: Pax7-CreER^TM^;Spry1^flox/flox^;R26R-lacZ (SC-Null) mice; background strain not specified in paper · Spry1 expressed in quiescent Pax7+ satellite cells; downregulated during proliferation; re-induced upon return to quiescence; loss of Spry1 leads to 40% decline in quiescent Pax7+ satellite cells in SC-Null regenerated muscle and 50% loss in Spry1^lacZ/lacZ^ global-null mice 50 days after injury; Spry1 required for return to quiescence and self-renewal; apoptosis (not failure of differentiation) is the fate of cells unable to return to quiescence

[^chakkalakal2012]: doi:10.1038/nature11438 · PMID 23023126 · PMC 3605795 · Chakkalakal JV, Jones KM, Basson MA, Brack AS · *Nature* 2012;490(7420):355–360 · in-vivo (mouse genetic, conditional Spry1 deletion + overexpression) · model: C57BL/6 mice; young ~2 mo vs aged ~24 mo; Pax7-CreER^TM^ × Spry1^fl/fl^ for deletion; SpryOX for overexpression · aged myofibers express Fgf2 that drives satellite cell quiescence loss; Spry1 selectively preserved in quiescence-retaining LRC satellite cells; loss of Spry1 reduces Pax7+ cells ~50% in aged muscle; FGFR1 inhibition or Spry1 overexpression prevents depletion; green OA via PMC3605795

[^bigot2015]: doi:10.1016/j.celrep.2015.09.067 · PMID 26526994 · Bigot A, Duddy WJ, Ouandaogo ZG, Negroni E, Mariot V, Ghimbovschi S, Harmon B, Wielgosik A, Loiseau C, Devaney J, Dumonceaux J, Butler-Browne G, Mouly V, Duguez S · *Cell Reports* 2015;13(6):1172–1182 · observational + in-vitro · n=7 young donors (15–24 yr) / 14 elderly donors (72–80 yr); n=3–8 per group for in-vitro assays · model: primary human muscle stem cells from vastus lateralis biopsies · age-associated DNA methylation suppresses SPRY1 in elderly human muscle stem cells; reserve cell pool ~20% in young vs ~3–5% in elderly cultures; demethylation with 5-Aza-2'-deoxycytidine rescues reserve cell formation ~2.7-fold; siRNA knockdown of SPRY1 in young cells phenocopies the elderly defect; aging in human satellite cells does not involve elevated p16Ink4a, SA-β-gal, or shortened telomere length (senescence markers unchanged); gold OA (CC BY-NC-ND 4.0)

[^anerillas2024]: doi:10.1038/s41419-024-06689-4 · PMID 38670941 · Anerillas C, Perramon-Güell A, Altés G, Cuesta S, Vaquero M, Olomí A, Rodríguez-Barrueco R, Llobet-Navàs D, Egea J, Dolcet X, Yeramian A, Encinas M · *Cell Death & Disease* 2024 · in-vitro + in-vivo (heterozygous knockin mouse) · model: fibroblasts; cutaneous wound healing; chemotherapy-induced senescence · Sprouty proteins are general mediators of cellular senescence; overexpression triggers premature senescence via conserved N-terminal Tyr-53; operates upstream of p38 independently of ERK; heterozygous knockin mice lacking Tyr-53 show delayed wound healing senescence and delayed chemotherapy-induced senescence

[^macia2014]: doi:10.1038/cdd.2013.161 · PMID 24270409 · Macià A, Vaquero M, Gou-Fàbregas M, et al. · *Cell Death & Differentiation* 2014 · in-vivo + in-vitro · model: Spry1 knockout mice; thyroid tumor models · SPRY1 acts as a tumor suppressor; Spry1 knockout mice show reduced senescence markers and accelerated tumor formation in PTEN-deficient background; SPRY1 induces senescence via NFκB pathway independently of ERK inhibition

[^park2022]: doi:10.1016/j.ibneur.2022.07.003 · PMID 35910677 · Park S-Y, Jeong HY, Batara DC, et al. · *IBRO Neuroscience Reports* 2022 · observational + in-vitro · model: glioblastoma stem cells · SPRY1 highly expressed in glioma stem cells; knockdown reduces stemness and self-renewal; context-inverted role relative to SPRY1's quiescence/anti-tumor role in satellite cells #gap/contradictory-evidence

[^pmid23020145]: doi:10.1111/acel.12008 · PMID 23020145 · *Aging Cell* 2012 · observational · model: aged mouse kidney · miR-21 elevation with aging correlates with reduced SPRY1 expression; miR-21/SPRY1 axis part of age-related matrix remodeling in kidney #gap/no-mechanism #gap/needs-replication

[^syroid2026]: doi:10.1152/ajpcell.00101.2026 · PMID 42089570 · Syroid AL, Steele AP, Murach KA, Hawke TJ · *Am J Physiol Cell Physiol* 2026 · systematic scoping review · Spry1 identified alongside Cd34 and Calcr as the most commonly used transcriptomic markers for quiescent satellite cell cluster identification in murine scRNA-seq studies; absence of Myod1, Mki67, and Cdk1 used in combination

[^chambers2025]: doi:10.1111/acel.70068 · PMID 40259517 · Chambers TL, Wells J, et al. · *Aging Cell* 2025 · in-vivo (mouse, senolytic treatment) · model: aged mice receiving senolytic intervention during muscle regeneration · methylome-transcriptome integration identified SPRY1 among differentially regulated genes critical for muscle stem cell performance in aged muscle with senolytic treatment; mechanistic role in the observed response not established #gap/needs-replication
