---
type: protein
aliases: [TH, tyrosine hydroxylase, tyrosine 3-monooxygenase]
uniprot: P07101
ncbi-gene: 7054
hgnc: HGNC:11782
ensembl: ENSG00000180176
genage-id: null
mouse-ortholog: Th
pathways: []
hallmarks:
  - "[[mitochondrial-dysfunction]]"
  - "[[loss-of-proteostasis]]"
  - "[[chronic-inflammation]]"
druggability-tier: 3
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Canonical IDs (UniProt P07101, NCBI Gene 7054, HGNC:11782, Ensembl ENSG00000180176) confirmed against live UniProt REST + HGNC REST APIs. Mouse ortholog MGI:98735 confirmed via NCBI Gene 21823 XML cross-ref. Fearnley 1991 and Haycock 2003 closed-access (not_oa) — verified against PMID abstracts via PubMed eFetch; key quantitative claims confirmed; n=36 controls / n=20 PD (Fearnley) and n=56 (Haycock) corrected in footnotes. Kordower 2013 verified against PMC3722357 full text — all n's and timeline claims confirmed. Dunkley 2004 verified against PubMed abstract (closed-access) — Ser8/19/31/40 phosphosite numbering confirmed as TH1-isoform convention per literature; isoform-numbering clarification note added. Druggability-tier: 3 (aging-context) confirmed: Open Targets reports SM:Approved Drug (metyrosine, pheo-only — not aging-validated); mr-causal-evidence: not-tested confirmed (no germline MR instruments described). #gap/needs-canonical-id for MGI resolved: MGI:98735 confirmed."
---


# Tyrosine Hydroxylase (TH)

Tyrosine hydroxylase is the **rate-limiting enzyme of catecholamine biosynthesis**, converting L-tyrosine to L-DOPA (3,4-dihydroxyphenylalanine) in the committed step of the dopamine → norepinephrine → epinephrine cascade. Its central aging story is a two-part narrative: (1) TH-expressing dopaminergic neurons in the substantia nigra pars compacta (SNc) are lost at a steady linear rate in normal aging and at an accelerated, regionally-selective exponential rate in Parkinson's disease; and (2) TH enzymatic activity is regulated by multi-site phosphorylation that modulates catecholamine output acutely. As a pharmacological target, TH inhibition (metyrosine) is clinically useful only in pheochromocytoma — an aging-context pharmacological intervention based on TH does not yet exist. For the downstream catecholamine biology and sympatho-adrenal aging changes, see [[molecules/metabolites/catecholamines]].

---

## Identity

- **UniProt:** P07101 (TY3H_HUMAN) — Swiss-Prot curated; confirmed 2026-06-14
- **NCBI Gene ID:** 7054 (symbol: *TH*; synonym: *TYH*)
- **HGNC:** HGNC:11782
- **Ensembl:** ENSG00000180176
- **Chromosomal location:** 11p15.5 (14 exons)
- **Mouse ortholog:** *Th* (NCBI Gene 21823; MGI:98735; one-to-one ortholog; gene symbol is lowercase *Th* per MGI sentence-case convention)
- **GenAge ID:** null — TH is not listed in the HAGR GenAge human gene database as of 2026-06-14
- **Enzyme classification:** Tetrahydrobiopterin (BH4)-dependent aromatic amino acid hydroxylase; Fe²⁺-dependent monooxygenase; EC 1.14.16.2

### Isoforms

Four human isoforms arise from alternative splicing in the 5'-coding region (isoforms TH1–TH4, differing in the N-terminal regulatory domain). **TH1** (corresponding to UniProt P07101-3; RefSeq NM_000360.4 → NP_000351.2; 497 aa) is the MANE-Select transcript, the predominant brain isoform, and the most studied in the context of phosphorylation-dependent regulation. The canonical sequence displayed by UniProt for P07101 is the longest form — **TH type 4** (P07101-1; 528 aa) — which has an extended N-terminal domain (~31 residues longer than TH1). Non-human mammals (including mouse and rat) express only a single isoform; the rodent isoform is most similar to human TH1 in length and sequence.

---

## Biochemistry

### Catalytic mechanism

TH catalyzes the hydroxylation of L-tyrosine at the para position, producing L-DOPA:

```
L-Tyrosine + O₂ + BH4 → L-DOPA + BH2 (dihydrobiopterin) + H₂O
```

The reaction requires:
- **Tetrahydrobiopterin (BH4)** as the obligate electron donor (recycled by dihydropteridine reductase and sepiapterin reductase)
- **Ferrous iron (Fe²⁺)** coordinated at the active site; chelatable by iron-sequestering conditions
- **Molecular oxygen** as the co-substrate

TH is a homotetramer. Each subunit has three functional domains: a short N-terminal regulatory domain (containing the phosphorylation sites that govern activity), a central catalytic domain, and a C-terminal coiled-coil tetramerization domain.

### Product inhibition and allosteric feedback

End-product catecholamines — dopamine, norepinephrine, and epinephrine — act as potent competitive inhibitors of TH, binding the iron at the active site and competing with BH4. This **product inhibition** is the primary mechanism by which downstream catecholamine pools set the rate of their own biosynthesis. It places TH at the apex of a self-limiting feedback loop: as catecholamine stores fill, TH activity falls; as catecholamines are released and depleted, inhibition is relieved and TH re-activates.

### Regulation by phosphorylation

TH activity is acutely increased by multi-site serine phosphorylation, which relieves product inhibition by reducing catecholamine binding affinity. The four principal sites are [^dunkley2004]:

| Site | Primary kinase(s) | Effect | Notes |
|------|------------------|--------|-------|
| Ser8 | CK1, CK2 | modest activation | regulated mainly in vitro |
| Ser19 | CaMKII | facilitates Ser40 phosphorylation (hierarchical); shifts TH to nuclear distribution when phosphorylated | does not directly activate TH; increases affinity for 14-3-3 proteins |
| Ser31 | CDK5, ERK1/2 (MAP kinase) | moderate activation; cytosolic distribution | links TH to ERK/MAPK signaling; relevant in neurotrophin stimulation |
| Ser40 | PKA (principal), PKC, MAPKAPK2 | strongest activation in vitro, in situ, and in vivo; relieves catecholamine-mediated product inhibition | the canonical "cAMP → PKA → TH Ser40-P → DA synthesis ↑" axis; cytosolic distribution |

> **Isoform-numbering note.** The site numbering above (Ser8/19/31/40) is the **TH1-isoform convention** used throughout the phosphorylation literature including Dunkley 2004 and confirmed by direct sequence inspection of P07101-3 (TH type 1 / MANE-Select, 497 aa): Ser-19, Ser-31, and Ser-40 are present at exactly those positions. However, the UniProt *displayed* canonical sequence for P07101 is the longer **TH type 4** (P07101-1, 528 aa), which has an N-terminal extension of ~31 residues relative to TH1. UniProt's PTM annotations are indexed to this canonical 528 aa sequence, so the phosphoserine sites appear at **Ser-19, Ser-62, and Ser-71** in UniProt's feature table (corresponding to TH1 Ser-19, Ser-31, and Ser-40 respectively). Ser-8 (CK1/CK2 site) is established from rat TH biochemistry and is not present at position 8 in any human TH isoform; this site has primarily in-vitro significance. When reading UniProt PTM data for TH, note that positions 62 and 71 correspond to the functionally critical Ser-31 and Ser-40 in the standard literature numbering. This page uses TH1/literature numbering throughout to match Dunkley 2004 and the primary mechanistic literature.

The hierarchical pSer19 → pSer40 relationship: Ser19 phosphorylation (by CaMKII) promotes 14-3-3 protein binding, which in turn facilitates subsequent Ser40 phosphorylation by PKA and enhances TH activation. For detail on the upstream cAMP/PKA cascade, see [[pathways/camp-signaling]].

---

## Aging relevance

### TH⁺ neuron loss in the substantia nigra with normal aging

The most quantitatively well-characterized aging phenotype of TH-expressing neurons is the **linear decline in pigmented (neuromelanin-positive, TH-immunoreactive) neurons in the substantia nigra pars compacta** during normal human aging.

Fearnley & Lees (1991) systematically examined post-mortem human SNc across age and disease, establishing that [^fearnley1991]:
- Normal aging produces a **linear loss of approximately 4.7% of pigmented neurons per decade** with regional variation (dorsal tier 6.9%/decade; lateral ventral tier 2.1%/decade)
- This predicts a cumulative loss from young adulthood to extreme old age (~80+ years) of roughly 30–40% of the original SNc TH⁺ neuron complement
- The regional pattern of normal aging loss (dorsal tier > lateral ventral tier) is the **inverse** of the PD pattern (lateral ventral tier is most severely depleted in PD)
- This divergence in regional topography led the authors to conclude that age-related attrition is not the primary driver of PD neurodegeneration — PD represents a distinct, age-promoted but mechanistically separate pathological process

| Dimension | Status |
|---|---|
| TH⁺ neuron loss with normal human aging? | yes — stereological post-mortem data; landmark Fearnley & Lees 1991 |
| Same regional pattern as PD? | no — opposite regional selectivity; argues against "PD = accelerated aging" |
| Pathway conserved across species? | yes — TH+ SNc neuron loss documented in aged rodents and primates |
| Replicated in humans? | yes — replicated across multiple post-mortem cohorts |

Di Lorenzo Alho et al. (2016) further demonstrated using three-dimensional stereological methods across 15 cognitively normal subjects that substantia nigra volume negatively correlates with age (rho = −0.53, p = 0.04), with notable inter-individual variability in neuronal number [^dilorenzo2016].

### TH⁺ neuron loss in Parkinson's disease: exponential and regionally selective

In Parkinson's disease, TH-immunopositive neuron loss in the SNc is far more severe, faster, and regionally concentrated than in normal aging [^fearnley1991]:
- Approximately 45% of lateral ventral tier neurons are lost within the first symptomatic decade
- By 4 years post-diagnosis, striatal dopaminergic fiber loss (assessed by TH immunohistochemistry) is **virtually complete** [^kordower2013]
- Melanized neuron loss in the SNc soma lags behind terminal fiber loss, with 50–90% of TH+ neurons absent from the earliest post-mortem timepoints [^kordower2013]
- The clinical threshold for motor symptom onset is typically crossed at ~70–80% SNc neuron loss (widely cited clinical rule; primary epidemiological source verification needed) #gap/unsourced

**Kordower et al. (2013)** — the largest neuropathological study of PD disease-duration effects (28 PD patients across 1–27 years post-diagnosis, n=17 with stereological material; 9 controls) — established the temporal dissociation between striatal fiber loss (very early, nearly complete within 4 years) and SNc soma loss (later, progressive) [^kordower2013]. TH immunohistochemistry was the primary histological marker throughout.

This pattern has implications for the therapeutic window: dopaminergic rescue strategies for PD may need to be deployed well before motor symptoms emerge, when the nigral soma pool is still partially intact but terminal innervation is already substantially lost.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TH enzyme is fully conserved; human genetic studies in PD are definitive |
| Phenotype (TH+ neuron loss) conserved in humans? | yes — PD neuropathology defined by human post-mortem studies |
| Replicated in humans? | yes — replicated across multiple independent post-mortem cohorts |

For full PD mechanistic context (PINK1/Parkin pathway, Lewy body biology, α-synuclein), see [[phenotypes/parkinsons-disease]].

### Striatal TH protein vs dopamine: divergent aging trajectories

An important nuance from neurochemical profiling: in normal human aging, **striatal TH protein levels decline much less than striatal dopamine concentration**. Haycock et al. (2003) measured multiple presynaptic dopaminergic markers across a postmortem human lifespan series and found a "marked disparity" — striatal dopamine itself exhibits a pronounced age-related decline, but TH protein (and other biosynthetic machinery) is relatively preserved [^haycock2003]. This suggests that age-related dopamine depletion reflects reduced dopamine synthesis efficiency, vesicular storage, or increased degradation — not simply loss of TH-expressing cell bodies. The relative preservation of TH protein in residual neurons is consistent with Gai et al. (1994), who noted TH immunoreactivity is maintained in surviving PD neurons despite loss of other structural markers [^gai1994].

**Implication for interpretation:** A fall in striatal dopamine with age (and with PD progression) is not linearly equivalent to a fall in TH-expressing neuron count. Neuroimaging studies using dopamine transporter (DAT) SPECT or dopamine PET likely underestimate TH-neuron survival relative to functional dopaminergic output. #gap/needs-replication — the mechanistic basis for this dissociation between TH protein and dopamine levels in the aging striatum requires further elucidation.

### Sympathetic TH⁺ neurons and aging

TH is expressed not only in CNS dopaminergic neurons but in all catecholaminergic cells: locus coeruleus (norepinephrine), peripheral sympathetic postganglionic neurons (norepinephrine), and adrenal medullary chromaffin cells (epinephrine/norepinephrine). Age-related increases in sympathetic nervous system activity — measured by isotope-dilution norepinephrine spillover kinetics — are well documented in humans; whether this reflects a change in TH activity per sympathetic neuron vs. a change in sympathetic neuron firing rate is not established. For the sympatho-adrenal aging physiology, see [[molecules/metabolites/catecholamines]].

---

## Pharmacology

### Metyrosine (α-methyltyrosine, α-methyl-L-tyrosine): the only clinical TH inhibitor

**Metyrosine** (trade name: Demser) is a competitive inhibitor of TH, acting as a false substrate that occupies the active site without being hydroxylated. It blocks the conversion of tyrosine to L-DOPA, thereby suppressing catecholamine biosynthesis.

**Clinical indication:** Pheochromocytoma and paraganglioma — pre-operative and peri-operative suppression of catecholamine excess to prevent hypertensive crises during tumor manipulation [^gruber2021]. Adjunct to alpha- and beta-adrenergic blockade, particularly for:
- Anticipated difficult resections (pericardiac or great-vessel-involved paragangliomas)
- Cases where conventional blockade is inadequate or poorly tolerated
- Short-course pre-operative cytoreduction of catecholamine output

**Adverse effects:** Sedation (common; CNS-penetrant), extrapyramidal side effects (dose-limiting at high doses; TH inhibition in CNS reduces striatal dopamine), crystalluria, diarrhea, anxiety.

**Aging-context relevance:** Essentially none — metyrosine is used only for catecholamine-excess endocrine tumors in short perioperative courses. Chronic TH inhibition would be poorly tolerated due to CNS dopaminergic deficiency mimicking iatrogenic Parkinsonism. There is no aging-rejuvenation indication for TH inhibitors.

**Druggability-tier reasoning (tier 3 — predicted druggable):** TH has a druggable active site (metyrosine binds it; BH4-mimetics also interact), but no clinical drug exists for an aging indication, and the biological rationale for TH modulation as an anti-aging intervention is weak. In the PD context, the intervention strategy bypasses TH entirely via L-DOPA supplementation rather than enzyme augmentation. Tier 1 would require a clinical drug validated for an aging endpoint; tier 2 would require a high-quality probe tested in aging models. TH meets neither bar in the aging context.

### L-DOPA as a TH-bypass strategy in Parkinson's disease

Because TH is rate-limiting, the canonical pharmacological strategy for PD dopamine replacement is not to augment TH activity but to **bypass it entirely** — administering exogenous **L-DOPA** (the immediate product of TH) combined with a peripheral DOPA decarboxylase inhibitor (carbidopa or benserazide) to prevent peripheral conversion to dopamine before CNS penetration.

L-DOPA crosses the blood-brain barrier via the large neutral amino acid transporter (LAT1/SLC7A5), where it is converted to dopamine by aromatic L-amino acid decarboxylase (AADC/DDC) in residual dopaminergic terminals and in serotonergic neurons (ectopic dopamine synthesis). This bypass strategy remains the gold standard for symptomatic PD management — but it is a substitution for TH-mediated synthesis, not a rescue of TH-expressing neurons.

For TH-targeting gene therapy approaches in PD (AAV-TH delivery to augment residual striatal AADC capacity), see [[interventions/gene-therapy]] (stub).

---

## Pathway membership

TH is the founding enzyme of the catecholamine biosynthesis pathway. The pathway lacks a dedicated wiki page; it is documented in biosynthesis section of [[molecules/metabolites/catecholamines]]:

```
L-Tyrosine → [TH, rate-limiting] → L-DOPA → [DDC] → Dopamine
→ [DBH] → Norepinephrine → [PNMT, adrenal only] → Epinephrine
```

Upstream signaling inputs that activate TH via Ser40 phosphorylation include [[pathways/camp-signaling]] (PKA arm) and CaMKII (calcium signaling arm, Ser19/31).

---

## Key interactors

- **BH4 (tetrahydrobiopterin)** — obligate cofactor; BH4 deficiency causes DOPA-responsive dystonia (Segawa syndrome) involving TH, not TH mutation itself. Disorders of BH4 synthesis (GCH1/PTPS/SR deficiency) phenocopy TH deficiency due to cofactor lack
- **14-3-3 proteins** — bind phospho-Ser19 TH; stabilize phosphorylated state and facilitate Ser40 phosphorylation; regulate subcellular distribution
- **GCH1 (GTP cyclohydrolase I)** — rate-limiting enzyme of BH4 synthesis; GCH1 loss-of-function → Segawa syndrome. GCH1 and TH are coordinately regulated; GCH1 induction accompanies TH activation in sympathetic neurons
- **DDC (DOPA decarboxylase / AADC)** — accepts TH product (L-DOPA); second enzyme in the catecholamine pathway; co-expressed with TH in dopaminergic neurons

---

## Hallmark connections

| Hallmark | Mechanistic link | Evidence level |
|---|---|---|
| [[mitochondrial-dysfunction]] | TH-expressing dopaminergic SNc neurons show age-related cytochrome c oxidase (Complex IV) defects; neurons with COX deficiency decline more steeply with age in normal aging [^itoh1996]; mitochondrial dysfunction is a core vulnerability of high-energy-demand catecholaminergic neurons | moderate — post-mortem human data; mechanistically coherent |
| [[loss-of-proteostasis]] | Aggregated α-synuclein in Lewy bodies disrupts dopamine biosynthesis; TH activity is inhibited by α-synuclein aggregates in cellular models #gap/needs-replication | limited — mostly in vitro; primary source not cited here |
| [[chronic-inflammation]] | SNc neuroinflammation (microglia activation) accompanies TH+ neuron loss in PD models; in aged brain, chronic neuroinflammation is associated with progressive TH+ neuron vulnerability | moderate — mouse + human post-mortem data |

---

## Limitations and gaps

- #gap/needs-human-replication — The mechanism by which normal aging (linear 4.7%/decade TH+ SNc neuron loss) differs from Parkinson's disease pathology at a cell-biological level is not fully characterized. The divergent regional topography (Fearnley & Lees) suggests a different injury mechanism, but the molecular basis of this regional specificity is unknown.
- #gap/no-mechanism — Why striatal dopamine concentration declines more steeply with age than striatal TH protein (Haycock 2003) is not fully explained. Candidates include reduced BH4 bioavailability, reduced vesicular monoamine transporter (VMAT2) expression, or increased MAO-B-mediated catabolism in aging striatum.
- #gap/unsourced — The ~70–80% SNc neuron loss threshold for PD motor symptom onset is widely cited but the primary epidemiological verification source is not established on this page.
- #gap/needs-replication — The inhibition of TH enzymatic activity by aggregated α-synuclein in dopaminergic neurons is reported in cellular models but has not been directly demonstrated in human post-mortem tissue.
- #gap/long-term-unknown — Whether strategies to augment TH expression or activity in residual SNc neurons (e.g., via neurotrophic factor delivery or gene therapy) slow PD progression has not been tested in adequately powered human trials.
- **MGI accession resolved:** Mouse ortholog *Th* confirmed as MGI:98735 via NCBI Gene 21823 XML cross-reference (2026-06-14). The alternative accession MGI:98938 (flagged by seeder) is a separate MGI entry and does not correspond to *Th*.

---

## See also

- [[molecules/metabolites/catecholamines]] — class page for catecholamines; biosynthesis pathway; sympatho-adrenal aging changes; TH Ser40 phosphorylation cited therein
- [[phenotypes/parkinsons-disease]] — canonical clinical and molecular context for SNc dopaminergic neuron loss; PINK1/Parkin genetics; Lewy body neuropathology
- [[cell-types/neurons]] — parent page for dopaminergic and other neuronal cell types; SNc neurons under regional vulnerability section
- [[pathways/camp-signaling]] — upstream PKA/CREB axis activating TH via Ser40 phosphorylation
- [[hallmarks/mitochondrial-dysfunction]] — primary hallmark for SNc neuronal vulnerability
- [[hallmarks/loss-of-proteostasis]] — α-synuclein aggregation; proteostasis interface
- [[hallmarks/chronic-inflammation]] — SNc neuroinflammation and TH+ neuron vulnerability

---

## Footnotes

[^dunkley2004]: doi:10.1111/j.1471-4159.2004.02797.x · PMID:15569247 · Dunkley PR, Bobrovskaya L, Graham ME, von Nagy-Felsobuki EI, Dickson PW · "Tyrosine hydroxylase phosphorylation: regulation and consequences" · *J Neurochem* 91(5):1025–1043 · 2004 · review · in-vitro + in-situ + in-vivo · canonical reference for TH phosphorylation at Ser8, Ser19, Ser31, and Ser40; Ser40 phosphorylation increases TH activity in vitro, in situ and in vivo; PKA is the primary kinase for Ser40; hierarchical pSer19 → pSer40 documented; product inhibition by catecholamines relieved by Ser40 phosphorylation

[^fearnley1991]: doi:10.1093/brain/114.5.2283 · PMID:1933245 · Fearnley JM, Lees AJ · "Ageing and Parkinson's disease: substantia nigra regional selectivity" · *Brain* 114(Pt 5):2283–2301 · 1991 · observational · n=36 control cases + n=20 PD cases (plus 7 incidental Lewy body, 15 striatonigral degeneration, 14 Steele-Richardson-Olszewski); post-mortem human cohort · normal aging: linear loss ~4.7% pigmented neurons per decade (dorsal tier 6.9%; medial ventral tier 5.4%; lateral ventral tier 2.1%); PD: exponential pattern with 45% loss in first symptomatic decade concentrated in lateral ventral tier (average 91% loss; medial ventral 71%; dorsal 56%) — opposite regional topography to normal aging; at symptom onset: 68% lateral ventral tier cell loss, 48% caudal nigra as whole; presymptomatic phase ~5 yr; concludes age-related attrition is not the primary PD pathogenesis driver

[^kordower2013]: doi:10.1093/brain/awt192 · PMID:23884810 · Kordower JH, Olanow CW, Dodiya HB, Chu Y, Beach TG, Adler CH, Halliday GM, Bartus RT · "Disease duration and the integrity of the nigrostriatal system in Parkinson's disease" · *Brain* 136(Pt 8):2419–2431 · 2013 · observational neuropathological · n=28 PD patients (1–27 years post-diagnosis) + 9 controls; n=17 with suitable stereological material · TH immunohistochemistry + stereological counts; 50–90% loss of TH+ neurons from earliest PD timepoints; striatal dopaminergic fiber loss virtually complete by ~4 years post-diagnosis; soma loss lags terminal loss; 1,153 citations (Crossref 2026-06)

[^haycock2003]: doi:10.1046/j.1471-4159.2003.02017.x · PMID:14535941 · Haycock JW, Becker L, Ang L, Furukawa Y, Hornykiewicz O, Kish SJ · "Marked disparity between age-related changes in dopamine and other presynaptic dopaminergic markers in human striatum" · *J Neurochem* 87(3):574–585 · 2003 · observational · n=56 neurologically normal subjects (1 day to 103 years); post-mortem human striatum · TH protein relatively preserved during adult aging while striatal dopamine undergoes 2- to 3-fold postnatal increase through adolescence then age-related decline; modest but significant 13% DAT decline in caudate only; disparity implies age-related DA decline reflects non-TH mechanisms (storage, catabolism); 159 citations (Crossref 2026-06)

[^dilorenzo2016]: doi:10.1007/s00429-015-1108-6 · PMID:26386691 · Di Lorenzo Alho AT, Grinberg LT et al. · "Three-dimensional and stereological characterization of the human substantia nigra during aging" · *Brain Struct Funct* 221(7):3393–3403 · 2016 · observational · n=15 cognitively normal subjects; 3D stereological methods · SN volume negatively correlated with age (Spearman rho = −0.53, p = 0.04); notable inter-individual variability in neuronal number

[^gai1994]: doi:10.1136/jnnp.57.9.1039 · PMID:7916375 · Gai WP, Vickers JC, Blumbergs PC, Blessing WW · "Loss of non-phosphorylated neurofilament immunoreactivity, with preservation of tyrosine hydroxylase, in surviving substantia nigra neurons in Parkinson's disease" · *J Neurol Neurosurg Psychiatry* 57(9):1039–1046 · 1994 · IHC observational · n=5 PD patients + 6 controls; post-mortem human SN · TH immunoreactivity maintained in surviving PD SNc neurons despite loss of neurofilament labeling; suggests residual neurons retain biosynthetic capacity even as structural cytoskeleton is compromised

[^gruber2021]: doi:10.1210/clinem/dgab130 · PMID:33693908 · Gruber LM, Jasim S, Ducharme-Smith A, Weingarten T, Young WF, Bancos I · "The Role for Metyrosine in the Treatment of Patients With Pheochromocytoma and Paraganglioma" · *J Clin Endocrinol Metab* 106(7):e2393–e2401 · 2021 · systematic review · metyrosine as supplemental perioperative TH inhibitor; well tolerated for short course; sedation common; extrapyramidal effects rare but dose-limiting; recommended for difficult pheochromocytoma/paraganglioma resections as adjunct to adrenergic blockade

[^itoh1996]: doi:10.1016/s0197-4580(96)00168-6 · PMID:9363794 · Itoh K, Müller-Höcker J et al. · "Cytochrome c oxidase defects of the human substantia nigra in normal aging" · *Neurobiol Aging* 17(6):843–848 · 1996 · observational · n=36 normal aging human brains · numerical density of melanin-positive neurons with COX defects significantly increased with age; neurons lacking defects decreased; implicates mitochondrial Complex IV dysfunction as a feature of age-related SNc neuronal deterioration
