---
type: protein
aliases: [bFGF, basic FGF, basic fibroblast growth factor, HBGF-2, heparin-binding growth factor 2, FGFB]
uniprot: P09038
ncbi-gene: 2247
hgnc: 3676
ensembl: ENSG00000138685
genage-id: null
mouse-ortholog: Fgf2
druggability-tier: null   # no aging-validated clinical drug targeting FGF2 itself; FGFR inhibitors (erdafitinib, pemigatinib) are oncology-only; see #gap/no-opentargets-entry
mr-causal-evidence: not-tested
pathways: ["[[fgf-signaling]]", "[[ras-mapk]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
sens-categories: []
caused-by: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
causes: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
gtex-aging-correlation: null   # not yet queried; #gap/needs-tissue-expression-data
literature-checked-through: 2026-06-15
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "Chakkalakal 2012 (Nature) and Coppé 2010 (Annu Rev Pathol) verified against primary source PDFs. SPRY1 framing corrected (see body). Kim 2016 issue/page corrected from Crossref. Canonical IDs (UniProt P09038, NCBI Gene 2247, HGNC 3676, Ensembl ENSG00000138685) confirmed against live databases. La Venuta 2015 and Ghadiali 2017 DOIs confirmed via Crossref; full-text not re-read (abstract-derived claims retained with gap tags)."
---

# FGF2 (Fibroblast Growth Factor 2 / Basic FGF / bFGF)

FGF2 — fibroblast growth factor 2, historically called basic fibroblast growth factor (bFGF) — is a pleiotropic paracrine growth factor and canonical activator of satellite cells (muscle stem cells). Its most aging-relevant role is as an **age-elevated niche signal that chronically disrupts satellite cell quiescence**, driving stem cell pool depletion in aged skeletal muscle and contributing to [[stem-cell-exhaustion]]-driven [[sarcopenia]] [^chakkalakal2012]. Beyond muscle, FGF2 participates in angiogenesis, tissue repair, wound healing, fibrosis, and is a component of the senescence-associated secretory phenotype (SASP) — making it a pleiotropic actor across multiple aging hallmarks.

## Identity

- **UniProt:** P09038 (FGF2_HUMAN) — reviewed Swiss-Prot entry; accessed 2026-06-15
- **NCBI Gene:** 2247
- **HGNC symbol:** FGF2 (alias: FGFB)
- **Ensembl:** ENSG00000138685
- **Mouse ortholog:** Fgf2 (one-to-one ortholog; gene function is highly conserved between mouse and human)
- **Protein length:** 288 amino acids (canonical isoform); molecular weight 30,770 Da
- **Family:** FGF family, paracrine subfamily (FGF1–10); beta-trefoil fold

## Isoforms

FGF2 is unusual among growth factors in generating **multiple protein isoforms from a single mRNA** via alternative translation initiation [^lavenuta2015]. Two functional classes operate in distinct cellular compartments with distinct roles:

| Isoform class | Molecular weight | Initiation codon | Localization | Primary role |
|---|---|---|---|---|
| **Low-molecular-weight (LMW)** | 18 kDa | AUG (canonical) | Secreted to extracellular matrix; cytoplasmic | Paracrine growth factor; FGFR binding; heparin/HSPG-dependent |
| **High-molecular-weight (HMW)** | 22, 22.5, 24, 34 kDa | Non-AUG (CUG) upstream | Predominantly nuclear | Intracrine/nuclear signaling; DNA damage response; proliferation-independent functions |

The 18 kDa LMW isoform is the classical secreted form that acts on FGF receptors. The HMW nuclear isoforms accumulate in stressed or senescent cells and have been implicated in nuclear FGF signaling distinct from FGFR activation [^lavenuta2015].

**Unconventional secretion.** The 18 kDa LMW FGF2 lacks a classical signal peptide and is exported by an ER/Golgi-independent, phosphoinositide-regulated mechanism involving heparan sulfate proteoglycans (HSPGs) at the cell surface. Phosphorylation at Tyr-215 regulates this unconventional secretion route [^lavenuta2015].

## Signaling mechanism

FGF2 signals primarily through four receptor tyrosine kinase receptors (FGFR1–4) on target cells. A key feature is obligate dependence on **heparan sulfate proteoglycans (HSPGs)** as co-receptors:

1. FGF2 binds to HSPGs (particularly syndecan-4 and perlecan) in the extracellular matrix
2. HSPG-bound FGF2 is presented to and stabilizes the FGF2:FGFR complex at the cell surface
3. FGFR dimerization → transautophosphorylation of intracellular kinase domains
4. Recruitment of docking proteins (FRS2α/β) → downstream branching:
   - **RAS–MAPK (ERK1/2) cascade** — proliferation, differentiation
   - **PI3K–AKT pathway** — survival, cell growth
   - **PLCγ (phospholipase Cγ) pathway** — calcium mobilization, PKC activation

The HSPG co-receptor dependence means that changes in heparan sulfate composition of the muscle niche with aging directly modulate FGF2 signaling availability. In aged muscle, altered HSPG structure changes the balance between FGF2 retention vs. availability and modulates how FGF2 signals to satellite cells [^ghadiali2017].

SPROUTY1 (SPRY1) — a cytoplasmic inhibitor of RAS/MAPK signaling — is a critical negative regulator of FGF2 in satellite cells: SPRY1 expression in quiescent satellite cells counteracts FGF2-driven quiescence exit and thus maintains the stem cell pool in the face of chronic niche FGF2 elevation. In the aged muscle, quiescence-retaining (label-retaining cell / LRC) satellite cells retain high Spry1 expression, while cycling non-LRC satellite cells show reduced Spry1 and are more sensitive to FGF2-driven quiescence loss [^chakkalakal2012].

## Role in aging: the satellite cell / muscle-niche axis

This is FGF2's most mechanistically worked-out aging-specific role and the primary motivation for this page.

### The Chakkalakal 2012 discovery

Chakkalakal et al. published in *Nature* in 2012 the landmark finding that **elevated FGF2 in the aged muscle niche is a primary driver of satellite cell quiescence loss and stem pool depletion** [^chakkalakal2012]:

- In aged mouse muscle under homeostatic (non-injured) conditions, myofibers express FGF2 at levels that drive satellite cells to exit quiescence and undergo abortive activation — cells that activate but fail to self-renew and are lost from the pool.
- **SPRY1 as a protective quiescence guardian:** Among the quiescent satellite cell subpopulation in aged muscle, Spry1 expression is selectively enriched in the slow-dividing, quiescence-retaining (label-retaining cell / LRC) fraction. Spry1 is *decreased* by Fgf2 signaling; quiescent LRC cells express high Spry1 precisely because they are not yet driven to cycle by the FGF2 niche signal. This is not a global "upregulation" in aged satellite cells — rather, Spry1 is a marker and mediator of quiescence that is differentially preserved in the cells that best resist the aged niche.
- **Loss-of-Spry1 experiment:** Genetic removal of Spry1 from satellite cells (Pax7-CreER^TM^ × Spry1^fl/fl^) in aged mice increased FGF signaling, accelerated quiescence exit, and produced more severe satellite cell depletion (~50% reduction vs aged controls after long-term deletion). This confirmed that Spry1 is functionally required to maintain quiescence against the aged FGF2 niche signal.
- **Therapeutic rescue:** Reducing niche-derived FGF activity — either by **inhibiting FGFR1 signaling** pharmacologically or by **overexpressing Spry1** in satellite cells — **prevented satellite cell depletion** in aged muscle.
- **Study design:** In vivo mouse model (young ~2 months vs. aged ~24 months); genetic manipulation of FGF pathway components in satellite cells.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FGF2/FGFR1/SPRY1 axis is conserved; FGF2 is expressed in human satellite cell niche |
| Phenotype conserved in humans? | partial — satellite cell pool decline with age is documented in humans; whether FGF2 niche elevation is the causal driver has not been directly tested |
| Replicated in humans? | no — genetic/mechanistic evidence is murine; human correlative data only |

#gap/needs-human-replication — Direct evidence that aged-niche FGF2 elevation depletes the human satellite cell pool is not established. The Li 2024 epigenome-wide association study biomarker data (blood FGF2_30 hypomethylation correlates with sarcopenia severity) is consistent with this model but is associational, not mechanistic.

### Heparan sulfate as aging mediator of the FGF2/satellite-cell axis

In muscle, the composition of heparan sulfate chains on HSPGs changes with aging and differentiation state. Ghadiali et al. 2017 showed that **dynamic changes in HSPG heparan sulfate sulfation patterns** during muscle aging alter both myoblast fate decisions and FGF2 signaling availability — the extracellular matrix changes of aging thus feed into the FGF2 niche signal [^ghadiali2017]. This positions heparan sulfate remodeling as a mechanistic link between aged extracellular matrix and aberrant FGF2 paracrine signaling to satellite cells.

### Exercise as a modifier

Resistance exercise in aged mice reduced FGF2 expression in skeletal muscle [^kim2016], suggesting that exercise may partially normalize the aged FGF2 niche environment. This finding is in a small animal study and has not been directly replicated in human muscle biopsies with concurrent satellite cell pool measurements. #gap/needs-human-replication

## FGF2 as a SASP component

FGF2 is a well-documented component of the **senescence-associated secretory phenotype (SASP)** — the pro-inflammatory secretome released by senescent cells [^coppe2010]. Senescent fibroblasts and other mesenchymal cells secrete FGF2 alongside canonical SASP cytokines (interleukin-6 / IL-6, interleukin-8 / IL-8, matrix metalloproteinases / MMPs). In the context of muscle aging:

- Accumulation of senescent cells in the muscle interstitium with age (see [[cellular-senescence]]) contributes to local FGF2 elevation via SASP secretion — independent of myofiber expression.
- SASP-derived FGF2, combined with myofiber-expressed FGF2, compounds the niche signal experienced by satellite cells.
- This creates a potential **positive feedback loop**: FGF2-driven satellite cell depletion → reduced regenerative capacity → accumulation of dysfunctional cells → more senescent SASP producers → more FGF2.

The SASP component also connects FGF2 to the [[altered-intercellular-communication]] hallmark via paracrine spread of senescence signals.

## Other aging-relevant roles

### Angiogenesis

FGF2 is one of the canonical pro-angiogenic growth factors, acting via FGFR1 on endothelial cells to promote proliferation, migration, and tube formation. In aging, the angiogenic response to ischemia is blunted, partly through reduced growth factor responsiveness — though the role of FGF2 specifically in aging-associated vascular rarefaction is complex and not fully resolved. #gap/no-mechanism — causal contribution of FGF2 to age-related capillary rarefaction in human muscle has not been established.

### Wound healing and fibrosis

FGF2 is released at wound sites and participates in granulation tissue formation, re-epithelialization, and angiogenesis during tissue repair. With aging, wound healing is impaired; changes in FGF2 levels and receptor responsiveness contribute. However, chronically elevated FGF2 (as in fibrotic contexts) can paradoxically drive fibrosis over repair — particularly when combined with elevated TGF-β signaling that predominates in aged tissue. In muscle, this is consistent with the fibroadipogenic progenitor (FAP) fate-shift toward collagen-secreting fibrogenic cells observed in aged muscle (see [[tissues/skeletal-muscle]]).

### FGF2 and inflammation

FGF2 can activate NF-κB signaling through FGFR-independent pathways and may contribute to the chronic low-grade inflammatory state of aged tissue ([[chronic-inflammation]]). FGF2 also synergizes with other SASP cytokines to maintain autocrine inflammatory loops in senescent cells.

## Hallmark connections

| Hallmark | FGF2 mechanism |
|---|---|
| [[stem-cell-exhaustion]] | Primary role — chronic FGF2 from aged muscle niche drives satellite cell quiescence loss and pool depletion [^chakkalakal2012]; SPRY1 expression in quiescent satellite cells is the key counterregulatory defense; loss of Spry1 worsens depletion |
| [[altered-intercellular-communication]] | FGF2 as paracrine niche signal from myofibers → satellite cells; SASP-secreted FGF2 from senescent interstitial cells creates aberrant intercellular crosstalk |
| [[chronic-inflammation]] | SASP FGF2 component; NF-κB crosstalk; fibrotic/inflammatory niche remodeling |
| [[cellular-senescence]] | FGF2 is a SASP secretory product of senescent cells; HMW nuclear FGF2 isoforms may participate in senescence responses |

## Pathway membership

- **[[fgf-signaling]]** — canonical FGF ligand of the paracrine subfamily (FGF1–10); acts via FGFR1 primarily in muscle/stem cell contexts; distinct from endocrine FGF21/FGF23 axis; see [[fgf-signaling]] for pathway-level aging pharmacology
- **[[ras-mapk]]** — primary downstream effector cascade (ERK1/2); drives proliferation and differentiation
- **[[pi3k-akt-pathway]]** — secondary downstream effector; survival and growth signaling

## Pharmacology and druggability

**`druggability-tier: null`** — No clinically validated drug targets FGF2 for an aging indication. #gap/no-opentargets-entry

Clinical-stage **FGFR inhibitors** exist (erdafitinib, pemigatinib, infigratinib — FDA-approved for oncology, targeting FGFR fusions/mutations in bladder cancer, cholangiocarcinoma). These pan-FGFR or selective inhibitors would broadly suppress FGF2/FGFR1 signaling but carry significant on-target toxicity (hyperphosphatemia via FGF23/FGFR4 axis, bone effects) that makes chronic use in aging untenable without substantial selectivity advances.

**Potential strategies based on Chakkalakal 2012:**

- **FGFR1-selective inhibition in aged muscle** — preclinical proof-of-concept only; no aging-directed clinical trial
- **SPRY1 gene therapy / small-molecule SPRY1 induction** — conceptually attractive but no validated approach
- **HSPG modification** — altering heparan sulfate composition to reduce FGF2 sequestration / presentation; highly speculative

No aging-specific clinical trial is registered targeting the FGF2/satellite-cell axis as of 2026-06-15. #gap/needs-human-replication

## Limitations and gaps

1. **Human mechanistic evidence gap.** The satellite-cell niche FGF2 depletion mechanism is established in mice (Chakkalakal 2012). Human muscle biopsies confirm satellite cell decline with age and FGF2 expression in muscle, but a controlled mechanistic experiment (FGFR inhibition restoring human satellite cell quiescence) has not been performed. #gap/needs-human-replication
2. **No MR causal evidence.** Mendelian randomization using genetic instruments for circulating FGF2 levels has not been applied to muscle outcomes or aging phenotypes as of the literature search date. `mr-causal-evidence: not-tested`. #gap/needs-replication
3. **SPRY1 expression in human aging.** Whether the LRC/non-LRC Spry1 differential seen in aged mouse satellite cells (high Spry1 in quiescent LRCs, low in cycling non-LRCs) is conserved in human satellite cells is not established at single-cell resolution. #gap/needs-human-replication
4. **GTEx aging correlation not queried.** Tissue-specific expression changes of FGF2 with aging across GTEx tissues would inform which tissues bear the highest FGF2-driven aging burden. `gtex-aging-correlation: null`. #gap/needs-tissue-expression-data
5. **FGF2 isoform-specific roles in aging.** Whether HMW vs. LMW FGF2 isoforms contribute differentially to aging phenotypes is not well characterized. #gap/no-mechanism
6. **Contradictory FGF2 biology in muscle.** FGF2 knockout studies in aged mice have produced complex phenotypes — some data suggest baseline FGF2 is required for satellite cell maintenance, indicating that the relationship between FGF2 level and satellite cell health is non-monotonic (as also noted on [[biomarkers/dnam-muscle-function-markers]]). The satellite-cell-depletion mechanism may apply primarily at supra-physiological FGF2 levels in the aged niche rather than across the full range. #gap/contradictory-evidence

## Cross-references

- **[[fgf-signaling]]** — the broader FGF ligand family and FGFR pathway; endocrine FGFs (FGF21, FGF23) are covered there; FGF2 is the paracrine muscle-niche member
- **[[cell-types/satellite-cells]]** — primary cell type regulated by FGF2 in aged muscle; niche signaling detail including FGF2/Notch/Wnt balance
- **[[tissues/skeletal-muscle]]** — tissue context; sarcopenia mechanisms; FAP fate-shift
- **[[sarcopenia]]** — downstream phenotype driven by satellite cell exhaustion via FGF2 niche disruption
- **[[hallmarks/stem-cell-exhaustion]]** — hallmark that FGF2-driven satellite cell depletion exemplifies
- **[[hallmarks/altered-intercellular-communication]]** — hallmark for FGF2 paracrine and SASP roles
- **[[hallmarks/chronic-inflammation]]** — FGF2 as SASP component; NF-κB crosstalk
- **[[hallmarks/cellular-senescence]]** — senescent cells secrete FGF2 as SASP; HMW isoform in stressed/senescent cells
- **[[ras-mapk]]** — primary FGF2 downstream effector cascade
- **[[pi3k-akt-pathway]]** — secondary downstream effector
- **[[biomarkers/dnam-muscle-function-markers]]** — FGF2_30 blood methylation locus; correlates with sarcopenia severity; mechanistic discussion of FGF2 niche biology
- **[[molecules/proteins/spry1]]** — SPROUTY1, the FGF2-induced FGF signaling inhibitor that protects aged satellite cells from niche FGF2 excess (implicit stub)
- **[[molecules/proteins/fgfr1]]** — the primary FGF receptor mediating FGF2 effects in muscle/stem cells (implicit stub)
- **[[molecules/proteins/fgf21]]** — related endocrine FGF; metabolic regulator; distinct from FGF2 but related pathway (see [[fgf-signaling]])

---

## Footnotes

[^chakkalakal2012]: doi:10.1038/nature11438 · PMID 23023126 · PMC3605795 · Chakkalakal JV, Jones KM, Basson MA, Brack AS · *Nature* 2012;490(7420):355–360 · n=4–6 animals/group (immunohistochemistry); n=5 animals/group (single-fibre RT-qPCR); n=1,000 cells/condition (in vitro); in-vivo genetic manipulation of Spry1 and Fgfr1 in satellite cells via Pax7-CreER^TM^ · model: C57BL/6 mice; young ~2 mo vs aged ~24 mo · aged muscle fibre (not interstitial cells) is the principal source of Fgf2 under homeostatic conditions; Fgf2 niche signal drives satellite cell quiescence exit; Spry1 is selectively expressed in quiescent LRC satellite cells and suppressed by FGF2 signalling — its retention in LRCs maintains quiescence; Spry1 deletion from aged satellite cells worsened quiescence loss and reduced Pax7+ cells by ~50% vs aged controls; FGFR1 inhibition (SU5402) or Spry1 overexpression (SpryOX) prevented satellite cell depletion; verified against primary source PDF · 794 citations (OpenAlex) · green OA via PMC3605795

[^ghadiali2017]: doi:10.1016/j.matbio.2016.07.007 · PMID 27496348 · Ghadiali RS, Guimond SE, Turnbull JE, Pisconti A · *Matrix Biol* 2017;59:54–68 · observational + in-vitro · model: mouse muscle cells; aging HSPG composition · dynamic changes in heparan sulfate sulfation patterns during muscle differentiation and aging alter myoblast fate and FGF2 signaling availability; aged HSPG composition shifts FGF2 presentation to satellite cells · closed-access; #gap/no-fulltext-access — abstract-derived

[^lavenuta2015]: doi:10.1074/jbc.R115.689257 · PMID 26416892 · La Venuta G, Zeitler M, Steringer JP, Müller HM, Nickel W · *J Biol Chem* 2015;290(45):27015–27020 · mini-review · model: mammalian cell biology · describes FGF2 isoforms (18 kDa LMW secreted via ER/Golgi-independent route; 22–34 kDa HMW nuclear); unconventional secretion mechanism requiring PI(4,5)P2 and Tyr-215 phosphorylation; no signal peptide · closed-access; #gap/no-fulltext-access — abstract-derived and review content

[^coppe2010]: doi:10.1146/annurev-pathol-121808-102144 · PMID 20078217 · Coppé JP, Desprez PY, Krtolica A, Campisi J · *Annu Rev Pathol* 2010;5:99–118 · review · canonical SASP review; FGF2 (listed as "bFGF") confirmed in Table 1 as a secreted growth factor upregulated in senescent human fibroblasts; verified against primary source PDF · green OA via doi

[^kim2016]: doi:10.1016/j.imr.2016.05.001 · PMID 28462123 · Kim JS, Yoon DH, Kim HJ, Choi MJ, Song W · *Integr Med Res* 2016;5(3):230–235 · in-vivo · model: aged mice (resistance exercise intervention) · resistance exercise reduced FGF2 expression in skeletal muscle of aged mice; n and effect sizes not confirmed against full text · #gap/no-fulltext-access — small animal study; human replication not performed; #gap/needs-human-replication
