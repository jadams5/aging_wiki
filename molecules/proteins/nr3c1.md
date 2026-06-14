---
type: protein
aliases: [GR, glucocorticoid receptor, NR3C1, GCR, GR-alpha, nuclear receptor subfamily 3 group C member 1]
uniprot: P04150
ncbi-gene: 2908
hgnc: 7978
ensembl: ENSG00000113580
genage-id: 75
mouse-ortholog: Nr3c1
pathways: ["[[pathways/hpa-axis]]", "[[pathways/nf-kb]]", "[[insulin-igf1]]"]
hallmarks: ["[[hallmarks/chronic-inflammation]]", "[[hallmarks/cellular-senescence]]", "[[hallmarks/deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: "#gap/not-queried — GTEx v2 NR3C1 age-correlation not pulled; query per sops/finding-tissue-expression.md on next lint pass"
mr-causal-evidence: partial
caused-by: ["[[pathways/hpa-axis]]"]
causes: ["[[pathways/nf-kb]] suppression (transrepression arm)", "[[phenotypes/sarcopenia]] (muscle-catabolic GRE arm)", "[[phenotypes/osteoporosis]] (osteoblast apoptosis arm)", "SGK1 upregulation (direct GRE target)", "[[phenotypes/immunosenescence]] (lymphocyte GR resistance in aging)"]
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Canonical IDs (UniProt P04150, NCBI Gene 2908, HGNC 7978, Ensembl ENSG00000113580, GenAge 75, mouse Nr3c1 Gene 14815, 777 aa) confirmed against live databases. van Rossum 2004 survival and CRP numbers confirmed against PubMed abstract (PMID 15276593). Bodine 2014 PDF read in full — atrogin-1 substrate list corrected (myosin heavy chain removed; it is a MuRF1 substrate, not atrogin-1). Waddell 2008 abstract confirmed synergistic mechanism but specific fold-magnitude is in figures not accessible via PMC (publisher-blocked full text); ~5-fold claim replaced with abstract-faithful language and gap-tagged. Oakley 2013 and van Rossum 2004 are closed-access; GRβ dominant-negative mechanism confirmed consistent with Rhen 2005 and Bauer 2005 reviews. Druggability-tier 2 and mr-causal-evidence partial justifications confirmed correct."
---

# NR3C1 (glucocorticoid receptor, GR)

The **glucocorticoid receptor** (gene *NR3C1*; protein GR or GCR) is a ligand-activated transcription factor and the principal intracellular effector of the glucocorticoid arm of the [[pathways/hpa-axis|HPA axis]]. Cytoplasmic GR binds cortisol (and synthetic glucocorticoids — dexamethasone, prednisone, budesonide) with moderate affinity (~5–30 nM), dissociates from its HSP90 chaperone complex, dimerizes, and translocates to the nucleus, where it operates through two mechanistically distinct modes: (1) **transactivation** — direct binding to glucocorticoid response elements (GREs) to drive target-gene transcription; and (2) **transrepression** — tethering to NF-κB or AP-1 transcription factors to suppress inflammatory gene expression without direct DNA contact. The transactivation arm governs the metabolic and catabolic effects of glucocorticoids (gluconeogenesis, muscle proteolysis, bone loss); the transrepression arm is the dominant driver of the anti-inflammatory pharmacology of clinical glucocorticoids. In aging biology, GR sits at the intersection of four key axes: (a) HPA hyperactivation driving catabolic tissue damage, (b) GR-driven suppression of NF-κB as a modulator of inflammaging tone, (c) iatrogenic glucocorticoid toxicity producing an accelerated-aging-like Cushingoid phenotype, and (d) progressive **glucocorticoid resistance** in aged immune cells that paradoxically amplifies inflammatory gene expression by reducing the anti-inflammatory transrepression signal.

## Identity

- **UniProt:** P04150 (GCR_HUMAN) — Swiss-Prot manually curated; last updated 2026-06-10 (entry version 294)
- **NCBI Gene ID:** 2908
- **HGNC:** 7978 (symbol *NR3C1*, Nuclear Receptor Subfamily 3 Group C Member 1)
- **Ensembl:** ENSG00000113580
- **Chromosomal location:** 5q31.3 (GRCh38.p14; complement strand; coordinates ~143.28–143.44 Mb)
- **Protein length:** 777 amino acids (canonical alpha isoform; GRα)
- **Mouse ortholog:** Nr3c1 (NCBI Gene 14815; high conservation across the ligand-binding domain)
- **GenAge (human):** entry 75

## Key functional domains

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal modulating domain (NTD) | 1–420 | Contains activation function 1 (AF-1); ligand-independent transcriptional activation; site of most isoform divergence |
| DNA-binding domain (DBD) | 418–493 | Two C4-type zinc fingers; sequence-specific recognition of glucocorticoid response elements (5'-TGTTCT-N(3)-AGAACA-3'); required for dimerization on DNA |
| Hinge region | 487–523 | Nuclear localization signal; conformational flexibility between DBD and LBD |
| Ligand-binding domain (LBD) | 524–758 | Binds cortisol/glucocorticoids; contains activation function 2 (AF-2); chaperone-interaction interface (HSP90) |

**Key PTMs (UniProt P04150):**
- Phosphorylation: Ser-203, Ser-211, Ser-226, Ser-267, Ser-404 — regulate ligand sensitivity, nuclear retention, and transactivation vs transrepression balance
- Acetylation: Lys-480, Lys-492, Lys-494, Lys-495 — modulate NF-κB interaction; acetylation promotes transrepression capacity
- SUMOylation: Lys-277, Lys-293, Lys-703 — associated with transcriptional repression

## Isoform biology: GRα vs GRβ

The *NR3C1* gene produces multiple protein isoforms via alternative splicing and alternative translation initiation. Two principal isoforms are aging-relevant [^oakley2013]:

| Isoform | mRNA exon structure | LBD status | Ligand binding? | Function |
|---|---|---|---|---|
| **GRα** (canonical) | 9α exon | Complete | Yes (Kd ~5–30 nM for cortisol) | Transcriptional activator and transrepressor; the principal signaling GR |
| **GRβ** | 9β exon (alternative) | Truncated (C-terminal 15 aa differ) | No | Dominant-negative inhibitor of GRα; elevated GRβ → glucocorticoid resistance in target cells |

GRβ expression is induced by inflammatory cytokines (TNF-α, IL-1β, IL-8), creating a positive-feedback loop in inflammation: inflammation drives GRβ up → reduces GRα-mediated anti-inflammatory transrepression → less braking on NF-κB → more inflammation. In aged immune cells, elevated GRβ / reduced GRα ratio contributes to the glucocorticoid resistance phenotype described below [^oakley2013].

## Activation cycle: chaperone release → nuclear translocation → GRE binding

In the absence of ligand, GR is held in a cytoplasmic hetero-complex with **HSP90** (two copies), **HSP70**, p23, and **FKBP51** (encoded by *FKBP5*, itself a GR transcriptional target — a negative-feedback circuit). Cortisol binding displaces the chaperones, exposes the nuclear localization signal, and GR dimerizes and translocates to the nucleus within minutes. Nuclear events branch into two arms [^rhen2005]:

**Transactivation (GRE-mediated):**
GR dimer binds palindromic GRE sequences (5'-TGTTCT-N₃-AGAACA-3') and recruits co-activators (SRC-1, p300/CBP, BRG1) to drive transcription. Key metabolic and catabolic GRE targets include:
- **PEPCK** (PCK1) and **G6PC** — gluconeogenic enzymes → hepatic glucose output
- **GILZ** (TSC22D3) — anti-inflammatory mediator, broadly suppresses myeloid activation
- **SGK1** — serum/glucocorticoid-regulated kinase 1 (direct GRE target; drives Na+ reabsorption, NEDD4-2 phosphorylation, FoxO export); see [[molecules/proteins/sgk1]]
- **FKBP51** — re-establishes chaperone repression; auto-limits GR activity
- **MuRF1** (TRIM63) and **atrogin-1** (MAFbx/FBXO32) — muscle-specific E3 ubiquitin ligases (activated synergistically with FOXO1; see § Aging relevance, muscle)

**Transrepression (protein–protein tethering):**
As a monomer, GR physically tethers to p65 (RelA) or c-Jun (AP-1) without DNA contact, blocking their access to κB or AP-1 elements and recruiting histone deacetylase complexes [^debosscher2003]. This **non-genomic** mechanism suppresses IL-1β, TNF-α, IL-6, IL-8, COX-2, and iNOS — accounting for most of the clinical anti-inflammatory utility of exogenous glucocorticoids. See [[pathways/nf-kb]] for the NF-κB side of this interaction. The transrepression arm is mechanistically separable from GRE-driven effects — a discovery that motivates the **selective GR modulator (SEGRM)** drug development strategy (see § Pharmacology).

## Aging relevance

### 1. Muscle catabolism and sarcopenia

GR directly drives glucocorticoid-induced skeletal muscle proteolysis via two converging mechanisms [^waddell2008] [^bodine2014]:

- **GR + FOXO1 synergy at the MuRF1 promoter.** Waddell et al. demonstrated that GR and FOXO1 bind synergistically to the *TRIM63* (MuRF1) promoter — a GRE and a forkhead-response element are co-required for full dexamethasone-induced MuRF1 upregulation in myotubes and in vivo. Either element alone is insufficient; the co-binding drives a "dramatic synergistic increase" in *MuRF1* reporter gene activity compared to either factor alone (specific fold-magnitude in figures; full text not accessible for numeric confirmation) [^waddell2008]. #gap/no-fulltext-access — quantitative fold-magnitude should be confirmed against the primary figure if full-text access is obtained.
- **Atrogin-1 (MAFbx) induction.** GR also induces *FBXO32* (atrogin-1), the second major muscle-specific E3 ligase; the two most widely acknowledged atrogin-1 substrates are MyoD and eIF3-f (eukaryotic translation initiation factor 3 subunit f), targeting myogenesis suppression and translational control respectively [^bodine2014]. Myosin heavy chain is a substrate of MuRF1, not atrogin-1, under glucocorticoid-induced atrophy conditions [^bodine2014].

Whether the modest increase in circulating cortisol in non-Cushingoid healthy aging contributes meaningfully to community-dwelling sarcopenia — as opposed to iatrogenic glucocorticoid use — is not established (see [[phenotypes/sarcopenia]]). #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | GRE-driven MuRF1/atrogin-1 induction confirmed in human myotubes (Waddell 2008) |
| Phenotype conserved in humans? | yes | Glucocorticoid-induced myopathy is a well-characterized clinical syndrome (iatrogenic) |
| Replicated in community-dwelling aging? | partial | Epidemiological: GC use is an established sarcopenia risk factor; endogenous-cortisol contribution in healthy aging unclear |

### 2. Glucocorticoid-induced osteoporosis (GIOP)

GR mediates bone loss via three parallel mechanisms: (1) **osteoblast apoptosis** and reduced bone formation via suppression of Wnt/Runx2 signaling; (2) increased RANKL/OPG ratio, promoting osteoclastogenesis; (3) impaired calcium absorption (GR antagonizes intestinal and renal vitamin D signaling). GIOP is the most common secondary osteoporosis; estimated 30–50% fracture incidence in long-term exogenous glucocorticoid users. See [[phenotypes/osteoporosis]] for quantitative bone-density and fracture-risk data. Whether endogenous cortisol in healthy aging contributes to age-related bone loss independent of iatrogenic use is plausible but not definitively established. #gap/needs-human-replication

### 3. Glucocorticoid resistance in aged immune cells

A critical paradox for aging biology: while GR is classically viewed as anti-inflammatory (via transrepression of NF-κB), chronic glucocorticoid exposure or prolonged GR stimulation in aged organisms leads to **reduced GR sensitivity** in lymphocytes and myeloid cells [^bauer2005]. Mechanisms include:

- **GRβ upregulation** by inflammatory cytokines (TNF-α, IL-1β) — dominant-negative inhibition of GRα
- **GR downregulation at the protein level** — chronic cortisol occupancy drives receptor ubiquitination and proteasomal degradation
- **Altered co-regulator expression** — aged immune cells show reduced p300/CBP and altered HDAC profiles that impair GR transrepression complex assembly

**Consequence for inflammaging:** Aged immune cells that are simultaneously exposed to elevated glucocorticoids (HPA hyperactivation) AND are glucocorticoid-resistant show paradoxically unchecked NF-κB activity — the anti-inflammatory brake is weakened precisely when the cortisol signal is strongest. This creates a permissive environment for [[hallmarks/chronic-inflammation|inflammaging]] [^bauer2005]. See [[pathways/nf-kb]] and [[hallmarks/chronic-inflammation]].

This mechanism is also relevant to [[phenotypes/immunosenescence]]: the cortisol/DHEA ratio rises with aging (DHEA declines more steeply than cortisol), amplifying nominal glucocorticoid receptor occupancy while tissue sensitivity is simultaneously declining — a double dissociation that makes the net GR effect in aged immune tissues difficult to predict from circulating hormone levels alone.

### 4. Cushingoid phenotype as an accelerated-aging model

Chronic endogenous hypercortisolism (Cushing syndrome — pituitary ACTH-secreting adenoma, adrenal adenoma, or ectopic ACTH production) produces a phenotype that resembles accelerated aging across multiple organ systems: visceral adiposity, sarcopenia, osteoporosis, glucose intolerance, hypertension, immunosuppression, and hippocampal volume loss. This natural experiment provides the strongest human causal evidence that sustained GR overstimulation drives aging-like end-organ damage, even though the cortisol levels in Cushing syndrome (often 3–10-fold above normal) far exceed the modest elevations seen in healthy aging. Partial reversibility after hypercortisolism correction supports a causal role, though some structural damage (trabecular bone loss, hippocampal atrophy) may be incompletely reversible. See [[pathways/hpa-axis]] § Cushing syndrome for further discussion.

## NR3C1 polymorphisms and aging-related outcomes

Three common *NR3C1* coding-region variants alter GR sensitivity and have been studied in aging contexts — none has been formally tested by Mendelian randomization for longevity outcomes:

| Variant | rs number | Effect | Aging evidence |
|---|---|---|---|
| **ER22/23EK** | rs6189 + rs6190 | Reduced GR transactivation; lower GR sensitivity | van Rossum et al. (n=402 elderly men; 4-year follow-up): 0/21 carriers died vs 73/381 non-carriers; CRP ~50% lower in carriers [^vanrossum2004]. Survival association is provocative but requires replication in larger cohorts. |
| **N363S** | rs56149945 | Increased GR sensitivity | Associated with increased adiposity, visceral fat, and insulin resistance in some populations; small sample sizes; no definitive longevity data |
| **BclI** | rs41423247 | Increased GR sensitivity | Associated with increased metabolic syndrome risk and higher cortisol response; aging/longevity data inconsistent |

**`mr-causal-evidence: partial` justification:** GWAS hits exist for NR3C1 variants (ER22/23EK, BclI, N363S) in cortisol sensitivity, metabolic risk, and survival phenotypes, but no published Mendelian randomization study has used these as instruments to test causal effects on longevity or biological aging. The van Rossum 2004 association [^vanrossum2004] is observational with n=402 and requires replication; instruments exist but formal MR is pending. `partial` per CLAUDE.md enum definition ("GWAS hits exist but no MR study published").

## Pathway membership and cross-references

- [[pathways/hpa-axis]] — GR is the primary cortisol effector; negative-feedback to hypothalamic PVN and pituitary corticotrophs closes the HPA loop
- [[pathways/nf-kb]] — GR monomer tethers to p65 (RelA) → competitive displacement of NF-κB from κB sites → anti-inflammatory transrepression; GRβ isoform antagonizes this arm in chronic inflammation
- [[molecules/proteins/sgk1]] — direct GRE transcriptional target in kidney, brain, immune cells; mediates Na+ transport (ENaC), FoxO export, and stress response
- [[molecules/proteins/hsp90]] — constitutive chaperone partner; HSP90 maintains cytoplasmic GR in ligand-responsive, steroid-ready conformation
- [[molecules/proteins/foxo1]] — synergistically co-binds MuRF1 promoter with GR in skeletal muscle atrophy [^waddell2008]
- [[phenotypes/sarcopenia]] — GR-driven MuRF1/atrogin-1 upregulation is a primary molecular effector of glucocorticoid myopathy
- [[phenotypes/osteoporosis]] — GIOP is the most common secondary osteoporosis; GR-driven osteoblast apoptosis + RANKL/OPG imbalance
- [[phenotypes/immunosenescence]] — GR resistance in aged lymphocytes; rising cortisol/DHEA ratio
- [[hallmarks/chronic-inflammation]] — GR resistance → permissive inflammaging; GR transrepression normally brakes NF-κB
- [[hallmarks/cellular-senescence]] — GR can modulate SASP through NF-κB transrepression; senescent cells upregulate GRβ

## Pharmacology

### Agonists (exogenous glucocorticoids): the iatrogenic aging phenotype

Synthetic glucocorticoids — **dexamethasone**, **prednisone/prednisolone**, **methylprednisolone**, **budesonide** — are full GR agonists with ~5–30-fold higher potency than cortisol. They are FDA-approved for inflammatory, autoimmune, and oncology indications and represent among the most widely prescribed drugs globally. Chronic use at pharmacological doses produces a **Cushingoid / accelerated-aging-like phenotype**: central adiposity, sarcopenia, osteoporosis, metabolic syndrome, immunosuppression, skin thinning, and hippocampal volume loss. These drugs are categorically not aging interventions; their chronic-use phenotype in fact served as early evidence that sustained GR hyperactivation is gerotoxic. #gap/dose-response-unclear — the threshold dose and duration above which GR agonism transitions from short-term adaptive to tissue-damaging in aging individuals is not established.

### Antagonist: mifepristone

**Mifepristone** (RU-486) is a competitive GR + progesterone receptor (PR) antagonist. FDA-approved for Cushing syndrome under the trade name Korlym (300–1200 mg/day). It does not suppress cortisol directly but blocks GR, reducing tissue-level glucocorticoid effects. Off-target PR antagonism produces gynecologic side effects. Not evaluated for aging or frailty indications. No current active ClinicalTrials.gov studies for aging-related indications (confirmed 2026-06-14).

### Selective GR modulators (SEGRMs / SEGRAs)

The mechanistic separability of transrepression (anti-inflammatory) from transactivation (metabolic/catabolic) motivated "dissociated glucocorticoid" drug programs. The goal is to retain anti-inflammatory transrepression while minimizing the GRE-mediated catabolic effects (muscle wasting, bone loss, glucose dysregulation) that limit chronic glucocorticoid use [^debosscher2003].

**Relacorilant** (CORT125134) is the most clinically advanced selective GR antagonist with preferential peripheral GR antagonism and minimal antiprogesterone activity. Phase 2 open-label in Cushing syndrome: 63.6% BP response, 50% glycemic response [^pivonello2021]. No aging-specific trial registered as of 2026-06-14. #gap/long-term-unknown

**Aging-context druggability tier 2 justification:** High-quality clinical-stage probes exist (mifepristone is FDA-approved for Cushing; relacorilant is in Phase 2 for Cushing). GR is among the best-characterized nuclear receptors in medicine. However, no GR-targeted agent has an **aging-validated indication** (e.g., frailty reversal, geroprotection). The tradeoff between GR modulation and immune/metabolic consequences makes an aging-specific intervention difficult to define. Tier 1 would require an approved or Phase-3-positive drug with an aging-specific endpoint; this does not exist as of 2026.

## Extrapolation status

| Dimension | Status | Notes |
|---|---|---|
| Mechanism conserved in humans? | yes | GR structure, GRE consensus, and transrepression-of-NF-κB mechanism are highly conserved across mammals |
| Aging-relevant phenotypes in humans? | yes (iatrogenic) | Glucocorticoid myopathy, GIOP, Cushingoid phenotype are human clinical observations |
| Endogenous-cortisol-driven aging confirmed? | partial | HPA hyperactivation in aging associated with frailty and mortality epidemiologically; causality uncertain (see [[pathways/hpa-axis]] § Cortisol directionality) |
| GR resistance in aged immune cells in humans? | yes (mechanistic) | Bauer 2005 and others document reduced lymphocyte GR sensitivity with aging; functional consequence for net GR activity uncertain |

## Limitations and gaps

- `#gap/needs-human-replication` — Contribution of modestly elevated endogenous cortisol to sarcopenia, bone loss, and immunosenescence in community-dwelling (non-Cushingoid) healthy older adults is not definitively established; most evidence comes from pharmacological/iatrogenic doses.
- `#gap/needs-replication` — The ER22/23EK longevity association (van Rossum 2004; n=402) is provocative but based on a small cohort; large-scale replication across independent GWAS cohorts is needed.
- `#gap/not-queried` — GTEx v2 NR3C1 expression-with-age profile (Spearman ρ across tissues) has not been pulled; populate per `sops/finding-tissue-expression.md`.
- `#gap/not-queried` — Mendelian randomization: NR3C1 variants exist as potential instruments (ER22/23EK, BclI, N363S) but no formal MR study on longevity or biological aging endpoints has been published. `mr-causal-evidence: partial`.
- `#gap/dose-response-unclear` — Dose-response relationship between endogenous cortisol levels in healthy aging and tissue GR occupancy / functional outcomes is poorly characterized; circulating cortisol does not directly reflect tissue-level GR activation given 11β-HSD1/2 pre-receptor gating (see [[pathways/hpa-axis]] § Pre-receptor metabolism).
- `#gap/needs-canonical-id` — Protein pages for sibling HPA-axis nodes [[molecules/proteins/nr3c2]], [[molecules/proteins/hsd11b1-hsd11b2]], [[molecules/proteins/crh]] do not yet exist (implicit stubs flagged in [[pathways/hpa-axis]]).
- `#gap/no-mechanism` — The precise mechanism by which GRβ levels rise specifically in aged immune cells (transcriptional vs post-transcriptional) and whether this is reversible by GR agonist withdrawal or anti-senescence interventions is not established.

## Footnotes

[^rhen2005]: doi:10.1056/nejmra050541 · Rhen T, Cidlowski JA · *N Engl J Med* 2005;353:1711–1723 · review (2,551 citations) · mechanistic overview of GR anti-inflammatory action — transrepression vs transactivation; GR genomic and non-genomic mechanisms; comparison of natural vs synthetic glucocorticoids; clinical pharmacology of the anti-inflammatory GR program · model: human cell biology + clinical review

[^oakley2013]: doi:10.1016/j.jaci.2013.09.007 · Oakley RH, Cidlowski JA · *J Allergy Clin Immunol* 2013;132:1033–1044 · review (942 citations) · comprehensive GR biology: isoform diversity (GRα vs GRβ vs GRγ etc.), alternative translation initiation, PTM regulation; clinical context of receptor isoforms in glucocorticoid resistance; GRβ as a dominant-negative inhibitor · model: human cell biology review

[^debosscher2003]: doi:10.1210/er.2002-0006 · De Bosscher K, Vanden Berghe W, Haegeman G · *Endocr Rev* 2003;24:488–522 · review (709 citations) · molecular mechanism of GR transrepression of NF-κB and AP-1; tethering model (GR monomer → p65/c-Jun protein–protein interaction); HDAC recruitment; GRE-independent anti-inflammatory action; basis for SEGRM/SEGRA drug programs · model: human and mouse cell systems

[^waddell2008]: doi:10.1152/ajpendo.00646.2007 · Waddell DS, Baehr LM, van den Brandt J, Johnsen SA, Reichardt HM, Furlow JD, Bodine SC · *Am J Physiol Endocrinol Metab* 2008;295:E785–797 · in-vitro + in-vivo (mouse) (282 citations) · GR and FOXO1 synergistically activate the MuRF1 (*TRIM63*) gene in skeletal muscle; GRE and forkhead-response element co-required; chromatin immunoprecipitation confirms co-binding; dexamethasone-induced muscle wasting model · model: C2C12 myotubes + dexamethasone-treated mice

[^bodine2014]: doi:10.1152/ajpendo.00204.2014 · Bodine SC, Baehr LM · *Am J Physiol Endocrinol Metab* 2014;307:E469–E484 · review (950 citations) · comprehensive review of MuRF1/MAFbx (atrogin-1) biology in muscle atrophy; GR as key upstream transcriptional activator; atrogin-1 (MAFbx) primary substrates = MyoD and eIF3-f; myosin heavy chain is a MuRF1 substrate, not atrogin-1; pharmacological inhibition strategies · model: review of in-vitro + in-vivo atrophy literature

[^vanrossum2004]: doi:10.1016/j.amjmed.2004.01.027 · van Rossum EF, Feelders RA, van den Beld AW et al. · *Am J Med* 2004;117:158–162 · observational (prospective cohort) · n=402 elderly men; 4-year follow-up · ER22/23EK carriers (n=21): 0 deaths at 4 years; non-carriers (n=381): 73 deaths; CRP ~50% lower in ER22/23EK carriers; association of reduced GR sensitivity (ER22/23EK reduces transactivation) with improved survival and lower inflammation in elderly men · model: community-dwelling elderly Dutch males (Rotterdam Study subsample) · **requires replication** #gap/needs-replication

[^bauer2005]: doi:10.1080/10253890500100240 · Bauer ME · *Stress* 2005;8:69–83 · review · n=N/A · glucocorticoids and immunosenescence; cortisol/DHEA ratio rises with aging; peripheral lymphocyte GR sensitivity decreases; reduced GRα: GRβ ratio in aged immune cells; thymic involution accelerated by chronic glucocorticoid exposure; GR resistance may be permissive for inflammaging

[^pivonello2021]: doi:10.3389/fendo.2021.662865 · Pivonello R et al. · *Front Endocrinol* 2021 · Phase 2 open-label · n=34 · Cushing syndrome; relacorilant 250–400 mg/day; 63.6% BP response, 50% glycemic response; no antiprogesterone side effects or hypokalemia; selective GR antagonism with preserved PR selectivity vs mifepristone

[^kamwa2021]: doi:10.23736/S2724-6507.20.03198-3 · Kamwa V, Welch C, Hassan-Smith ZK · *Minerva Endocrinology* 2021 · review · n=N/A · endocrinology of sarcopenia and frailty; glucocorticoids as catabolic hormones promoting muscle loss via GR-driven proteolysis; distinguishes iatrogenic from endogenous GC contribution; large RCTs needed for causal attribution
