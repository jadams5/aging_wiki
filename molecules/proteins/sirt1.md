---
type: protein
aliases: [SIRT1, SIR2L1, hSIRT1, "NAD-dependent protein deacetylase sirtuin-1"]
uniprot: Q96EB6
ncbi-gene: 23411
hgnc: 14929
genage-id: 13
mouse-ortholog: Sirt1
ensembl: ENSG00000096717
druggability-tier: 1
caused-by: []
causes: []
key-domains: [sirtuin-type-deacetylase, N-terminal-regulatory, C-terminal-regulatory]
key-ptms: [His363-catalytic, Ser659-phosphorylation, Ser661-phosphorylation, Lys238-autodeacetylation, S-nitrosylation-inhibitory]
pathways: ["[[sirtuin]]", "[[ampk]]", "[[insulin-igf1]]", "[[autophagy]]", "[[dna-damage-response]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[epigenetic-alterations]]", "[[mitochondrial-dysfunction]]", "[[genomic-instability]]", "[[cellular-senescence]]"]
known-interactors: ["[[pgc-1alpha]]", "[[foxo3]]", "[[nf-kb]]", "[[p53]]", "[[nampt]]", "[[ampk]]", "[[dbc1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "All seven primary sources verified against PDFs: Rodgers 2005, Pacholec 2010, Hubbard 2013 (locally available); Yeung 2004, Luo 2001, Satoh 2013, Kaeberlein 1999 (downloaded bronze/diamond OA during this session). Brunet 2004 (closed-access, not_oa) unverifiable — FOXO3 claims flagged #gap/no-fulltext-access. Canonical-DB identity fields (UniProt Q96EB6, NCBI Gene 23411, HGNC 14929, GenAge ID 13) not independently re-verified against databases — recommend cross-check on next lint pass."
---


# SIRT1 (Sirtuin 1)

The founding mammalian sirtuin and the most-studied longevity-associated deacetylase. SIRT1 is an NAD+-dependent class III histone deacetylase and the direct ortholog of yeast Sir2 — the enzyme that links cellular energetics to chromatin silencing and lifespan in budding yeast [^kaeberlein1999]. In mammals, SIRT1 acts as a broad-spectrum sensor of cellular NAD+ status, integrating metabolic signals into chromatin, transcription-factor, and stress-response outputs relevant to aging. It is most active in the nucleus but shuttles to the cytoplasm under specific conditions.

**Naming note:** This page covers the SIRT1 *protein*. The family-level pathway page — covering all SIRT1–7 paralogs, NAD+ dependency, pharmacology (resveratrol/STACs), and species conservation — is at [[sirtuin]]. Refer there for the family-level context; this page is intentionally SIRT1-specific.

## Identity

| Field | Value |
|---|---|
| UniProt | Q96EB6 (SIR1_HUMAN) |
| NCBI Gene | 23411 |
| HGNC symbol | SIRT1 |
| Ensembl | ENSG00000096717 |
| GenAge ID | 13 |
| Mouse ortholog | Sirt1 (Mus musculus) |
| Protein length | 747 amino acids |
| Molecular weight | ~82 kDa (predicted); ~110 kDa apparent on SDS-PAGE |

## Domain architecture

- **N-terminal regulatory region (residues 1–235)** — largely disordered; site of multiple phosphorylation and regulatory interactions; contains a structured sub-region (residues ~190–244) that is required for allosteric activation by sirtuin-activating compounds (STACs) — Glu230 within this sub-region is essential: E230K substitution attenuates SIRT1 activation by all 117 chemically diverse STACs tested, independent of substrate [^hubbard2013]. Truncations to residues 195 and 225 also disrupted STAC activation; truncation to residue 183 did not.
- **Catalytic sirtuin-type deacetylase domain (residues 236–496)** — contains the NAD+-binding Rossmann fold; catalytic histidine at His-363; zinc-binding motif; active site accommodates NAD+ and the acyl-lysine substrate
- **C-terminal regulatory region (residues 497–747)** — contributes substrate binding; site of additional PTMs; required for full deacetylase activity

## Catalytic mechanism

SIRT1 is a class III NAD+-dependent deacylase. Each catalytic cycle consumes one NAD+ molecule:

**Acetyl-lysine + NAD+ → Deacetylated-lysine + O-acetyl-ADP-ribose + Nicotinamide**

This stoichiometric NAD+ consumption means SIRT1 activity is directly proportional to cellular NAD+ availability — a key reason that the age-related decline in NAD+ (driven by CD38 upregulation, PARP hyperactivation, and NAMPT reduction; see [[sirtuin]]) functionally suppresses SIRT1. Nicotinamide, released in each cycle, is itself a feedback inhibitor at elevated concentrations.

Beyond deacetylation, UniProt Q96EB6 records SIRT1 activity as a depropionylase, decrotonylase, and delactylase — though aging-relevant evidence for these activities is sparse. #gap/unsourced — primary citations for SIRT1 delactylation/decrotonylation in aging contexts are needed.

## Key substrate interactions

SIRT1 has >50 documented substrates. The aging-relevant set:

### PGC-1α (Lys778 deacetylation) — mitochondrial biogenesis

SIRT1 deacetylates PGC-1α at multiple lysine residues (13 acetylation sites mapped by mass spectrometry in Rodgers 2005), activating it as a transcriptional co-activator driving gluconeogenic and fatty acid oxidation gene programs during fasting. This represents a direct mechanistic link from NAD+ availability to [[mitochondrial-biogenesis]] capacity [^rodgers2005]. Rodgers 2005 showed that SIRT1 forms a nutrient-regulated complex with PGC-1α in liver; SIRT1 inhibition (by nicotinamide) strongly induced PGC-1α lysine acetylation and blocked PGC-1α-mediated gluconeogenesis; the model system was primary Fao hepatocytes and 4-week-old C57BL/6 mice fasted 24h. The Lys778 designation for a key deacetylation site comes from Hubbard 2013 (PGC-1α-K778 peptide), not Rodgers 2005 itself. [[ampk]] phosphorylates PGC-1α at complementary sites (Thr177/Ser538 in mouse = T178/S539 in human UniProt Q9UBK2 per Jager 2007 — see [[pgc-1alpha]] verified R13 for citation); the two modifications cooperate, forming an AMPK→NAD+→SIRT1→PGC-1α feedforward loop that amplifies the metabolic response to energy stress.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial (human CR upregulates SIRT1/PGC-1α axis; direct deacetylation at Lys778 in humans assumed but not directly quantified in vivo) |
| Replicated in humans? | in-progress |

#gap/needs-human-replication — Direct measurement of SIRT1-mediated PGC-1α deacetylation in aged vs young human tissue remains limited.

### FOXO3 (multiple sites) — stress resistance and autophagy

SIRT1 deacetylates FOXO3 in response to oxidative stress, shifting its transcriptional output toward cell-cycle arrest and resistance genes (SOD2, catalase, GADD45) while suppressing FOXO3-driven apoptosis [^brunet2004]. Net effect: SIRT1 tilts the cellular response to stress from death toward survival and repair — a mechanistic basis for the "stress resistance" dimension of sirtuin biology.

FOXO3 deacetylation also upregulates autophagy-related transcription (BNIP3, LC3, ATG genes), connecting SIRT1 to [[autophagy]] induction independently of mTOR suppression.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (SIRT1/FOXO3 interaction documented in human cell lines) |
| Phenotype conserved in humans? | partial |
| Replicated in humans? | no (mechanistic human in-vivo evidence lacking) |

### NF-κB p65 (RelA, Lys310 deacetylation) — anti-inflammatory

SIRT1 physically interacts with the RelA/p65 subunit of NF-κB and deacetylates it at Lys310, reducing the transcriptional activity of NF-κB target genes (pro-inflammatory cytokines, anti-apoptotic cIAP-2) [^yeung2004]. This positions SIRT1 as a mechanistic brake on the [[sasp|SASP]] (senescence-associated secretory phenotype) and the broader [[deregulated-nutrient-sensing|inflammaging]] phenotype: as NAD+ falls with age, SIRT1 activity declines, NF-κB p65 acetylation at K310 increases, and inflammatory transcription is de-repressed. See [[nf-kb]] for the full NF-κB aging context.

#gap/needs-human-replication — The SIRT1–NF-κB axis has been demonstrated mainly in cell lines and mouse models; tissue-level evidence in aged humans is lacking.

### p53 (Lys382 deacetylation) — apoptosis and senescence suppression

SIRT1 (originally identified in this context as Sir2α) physically binds p53 and deacetylates it at Lys382, reducing p53 transcriptional activity and attenuating p53-dependent apoptosis following DNA damage and oxidative stress [^luo2001]. This interaction has a well-characterized two-edged character in aging:

- **Cancer risk angle:** SIRT1-mediated p53 suppression is tumor-permissive in some contexts; loss-of-function p53 alleles are oncogenic.
- **Aging angle:** Excessive p53-driven apoptosis and senescence deplete stem cell pools and drive tissue dysfunction (see [[p53]] for the antagonistic-pleiotropy model). SIRT1-mediated p53 deacetylation may buffer against pathological senescence induction in aged tissues.

The mechanistic balance between these two effects is unresolved at the tissue level in vivo. #gap/contradictory-evidence — Whether SIRT1-mediated p53 suppression in aged tissue is net beneficial (reducing senescent cell accumulation) or harmful (reducing tumor surveillance) cannot be determined from existing data.

### Histones (H3K9ac primary; H4K16ac secondary) — chromatin compaction

In mammalian contexts SIRT1 is **primarily** an H3K9ac deacetylase (Pal & Tyler 2016 review); H4K16ac deacetylation is secondary in mammals and is the **primary** activity of yeast Sir2 (the founding sirtuin). The H4K16ac/Sir2/Sas2 axis is the foundational yeast-aging system documented by Dang 2009 — see [[processes/histone-acetylation]] for that lifespan-regulatory axis. In mammalian aging, the SIRT1–H3K9ac axis is the dominant chromatin-compaction effect; mammalian SIRT2 covers H4K16ac during M phase. The progressive loss of SIRT1 activity with age — secondary to NAD+ decline — contributes to the heterochromatin erosion and transposable-element de-repression that are characteristic of the [[epigenetic-alterations]] hallmark.

## Regulation of SIRT1

**Transcriptional/translational:**
- [[caloric-restriction]] / fasting — upregulates SIRT1 expression in liver, adipose, and brain in rodents; increases NAD+/NADH ratio; dual transcriptional and post-translational activation
- [[ampk]] — indirect activation via NAD+ elevation; may also directly phosphorylate SIRT1 in some contexts

**Post-translational (activating):**
- DYRK1A/1B phosphorylation — enhances deacetylase activity
- RPS19BP1/AROS — positive protein interaction
- USP22 deubiquitination — stabilizes SIRT1 protein

**Post-translational (inhibiting):**
- CCAR2/DBC1 — endogenous negative regulator; physically blocks SIRT1 catalytic activity; DBC1 binding is displaced by NAD+ at elevated concentrations (a second mechanism linking NAD+ to SIRT1 activity beyond stoichiometry)
- STK4/MST1 phosphorylation — inhibitory; triggered by oxidative stress (may serve as a stress-severity clamp)
- S-nitrosylation — inhibits deacetylase activity; relevant in contexts of elevated nitric oxide
- mTORC1 — negative regulator (via phosphorylation of unknown target in the pathway); connects nutrient-sensing crosstalk with sirtuin activity
- TNF-induced cathepsin B cleavage — generates a 75 kDa catalytically-inactive fragment; potential mechanism of SIRT1 inactivation in inflammatory contexts

## Role in aging

### Brain-specific SIRT1 and lifespan extension

A striking SIRT1-specific finding not attributable to peripheral metabolism: overexpression of SIRT1 specifically in the brain — with expression restricted to the dorsomedial hypothalamus (DMH) and lateral hypothalamus (LH) due to the transgene's expression profile — extended lifespan in transgenic mice (BRASTO, line 10) and delayed multiple aging phenotypes [^satoh2013]. Females: ~16% extension in median lifespan (control 799 days vs BRASTO 930 days; log-rank χ²=12.2, df=1, p<0.001). Males: ~9% extension in median lifespan (control 849 days vs BRASTO 926 days; log-rank χ²=5.9, df=1, p=0.015). Combined sex results: ~11% median extension (control 835 days vs BRASTO 926 days; log-rank χ²=14.8, df=1, p<0.001). The mechanism involves SIRT1-mediated deacetylation of Nkx2-1 (Nk2 homeobox 1) at K161 and K182 in its homeodomain, which in turn activates transcription of the orexin type 2 receptor (Ox2r) in DMH and LH neurons. Brain-specific SIRT1 overexpression enhanced physical activity (wheel running during dark time, significant at 20 months of age but not at 4 months), elevated rectal body temperature during dark time (aged BRASTO mice showed higher body temperature vs controls, not reduced), and increased oxygen consumption during dark time — a phenotype consistent with enhanced neural activity and sympathetic nervous system tone, not resembling the reduced-temperature phenotype of caloric restriction.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (hypothalamic SIRT1 expression documented; Nkx2-1/Ox2r axis not characterized in human aging context) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

#gap/needs-human-replication — Hypothalamic SIRT1–Nkx2-1–Ox2r axis lifespan finding is a single study in transgenic mice; no equivalent human data exists. #gap/needs-replication — independent replication in a second mouse line or by a different group is needed.

### The caloric-restriction mediator hypothesis — contested

A persistent framing in the sirtuin literature holds that SIRT1 is the primary mediator of caloric-restriction-induced longevity in mammals — i.e., that CR works *through* SIRT1. The evidence for and against:

**For:** CR increases SIRT1 expression and activity in multiple tissues; SIRT1 activates many of the same downstream programs (PGC-1α, FOXO3, autophagy) as CR; mouse Sirt1 global heterozygous knockout partially blunts CR-induced metabolic effects in some studies. #gap/unsourced — a primary citation is needed for the Sirt1-HZ CR epistasis claim before this is treated as established.

**Against:** Global SIRT1 knockout mice can still undergo CR (they are sickly but not unresponsive to caloric reduction); the epistasis test — whether SIRT1 loss abolishes CR-mediated lifespan extension — has not been cleanly performed in mice at sufficient statistical power with appropriate genetic backgrounds. The yeast precedent (Sir2 required for CR) may not generalize, as yeast CR bypasses the canonical NAD+ salvage pathway.

The current consensus: SIRT1 is a *contributor* to CR biology in mammals but is unlikely to be the sole or primary mediator. #gap/contradictory-evidence

### SIRT1 transgenic mouse lifespan — net assessment

Unlike yeast Sir2 overexpression (which robustly extends replicative lifespan [^kaeberlein1999]) and unlike the brain-restricted Sirt1 OE result [^satoh2013], global SIRT1 overexpression in mice has not produced consistent lifespan extension in well-controlled studies. Early claims of health- or lifespan benefits from the Sinclair lab (using SIRT1-overexpressing mice on high-fat diet) have not been replicated in genetically heterogeneous stocks. No SIRT1 manipulation has been tested by the NIA Interventions Testing Program. #gap/needs-replication #gap/contradictory-evidence

## Pharmacology

See [[sirtuin]] for the full STAC (sirtuin-activating compound) pharmacology and the Pacholec 2010 / Hubbard 2013 controversy [^pacholec2010] [^hubbard2013]. In brief:

- **Resveratrol** — proposed direct SIRT1 activator; shown by Pacholec 2010 to be a fluorophore-artifact in biochemical assays; likely has indirect sirtuin-relevant effects via AMPK and PDE inhibition. **Human meta-analytic confirmation of non-engagement:** Mansouri 2025 GRADE-assessed dose-response meta-analysis (11 RCTs) reported no significant effect of resveratrol supplementation on Sirt1 gene expression (SMD=0.05; P=0.73), protein expression (SMD=0.3; P=0.18), or serum Sirt1 levels (MD=−0.04; P=0.7) in pooled human RCT data [^mansouri2025]. The biochemical fluorophore-artifact mechanism (Pacholec 2010) and the clinical non-engagement (Mansouri 2025) are now concordant. See [[interventions/pharmacological/sirtuin-activators]] for the full class-level treatment.
- **SRT1720 / SRT2183 / SRT1460 (Sirtris/GSK)** — same controversy; no clinical advancement.
- **NAD+ precursors (NMN, NR)** — indirect SIRT1 activation by raising NAD+ substrate pool; most clinically relevant strategy; see [[nmn]] and [[nr]] for human trial evidence.

**SIRT1 inhibitors:**
- **EX-527 (selisistat)** — potent, selective SIRT1 inhibitor; used as a research tool; also being explored in Huntington's disease (CNS context where SIRT1 suppression of certain transcriptional programs is hypothesized to be pathological). Not an aging-relevant intervention.
- **Nicotinamide** — endogenous product-inhibitor; at supraphysiological concentrations can suppress SIRT1; pharmacological nicotinamide supplementation may paradoxically reduce SIRT1 activity.

## Pathway membership and cross-talk

| Pathway | Relationship |
|---|---|
| [[sirtuin]] | Family pathway — SIRT1 is the canonical SIRT1-7 member; see that page for family-level context |
| [[ampk]] | Mutual activation feedforward: AMPK raises NAD+ → SIRT1 active; SIRT1 deacetylates LKB1 (AMPK activating kinase) |
| [[mtor]] | SIRT1 deacetylates and activates TSC2, inhibiting mTORC1; mTORC1 negatively regulates SIRT1 (bidirectional antagonism) |
| [[insulin-igf1]] | SIRT1 deacetylates IRS-2 (activating) and p85α PI3K subunit (inhibiting AKT); net effect context-dependent |
| [[autophagy]] | SIRT1 deacetylates ATG5, ATG7, LC3 (required for autophagosome formation); activates FOXO3 → autophagy gene transcription |
| [[dna-damage-response]] | SIRT1 deacetylates Ku70 (suppresses PUMA-mediated apoptosis); deacetylates XPA, WRN, APEX1 (promotes DNA repair) |
| [[caloric-restriction]] | CR is the primary upstream activator of SIRT1 in vivo; SIRT1 is a partial mediator of CR's metabolic and longevity effects |

## Key interactors (selected)

- [[pgc-1alpha]] — primary substrate for metabolic/mitochondrial outputs
- [[foxo3]] — stress-resistance and autophagy outputs
- [[nf-kb]] (RelA/p65) — anti-inflammatory output
- [[p53]] — apoptosis/senescence suppression; cancer-aging tension
- [[nampt]] — rate-limiting NAD+ biosynthesis enzyme; NAMPT decline reduces SIRT1 substrate
- [[dbc1]] / CCAR2 — endogenous inhibitor; DBC1-SIRT1 binding is NAD+-sensitive (DBC1 released at high NAD+)
- [[ampk]] — mutual activation; metabolic integration

## Limitations and gaps

- `#gap/contradictory-evidence` — Whether SIRT1 is a required mediator of caloric-restriction longevity in mammals; evidence is mixed and the clean epistasis experiment has not been done at scale.
- `#gap/contradictory-evidence` — SIRT1-mediated p53 deacetylation: net aging benefit (senescence suppression) vs net cancer risk (tumor surveillance reduction) cannot be resolved from available data.
- `#gap/needs-human-replication` — Brain-specific SIRT1 (hypothalamic) lifespan extension; SIRT1-FOXO3 stress-resistance axis; SIRT1-NF-κB anti-inflammatory axis — all demonstrated in cell or rodent systems only.
- `#gap/needs-replication` — Satoh 2013 brain-specific Sirt1 OE lifespan result (single study, single lab).
- `#gap/long-term-unknown` — Long-term effects of SIRT1 activation strategies (NAD+ precursors, STACs) in humans on aging endpoints.
- `#gap/unsourced` — SIRT1 delactylation and decrotonylation activity in aging contexts; SIRT1-HZ CR epistasis claim in mice — primary citations needed.
- `#gap/no-fulltext-access` — Brunet 2004 (doi:10.1126/science.1094637; closed-access, not_oa) — SIRT1/FOXO3 deacetylation claims and daf-16 C. elegans epistasis derived from abstract/secondary descriptions only; cannot verify specific sites or quantitative details without full text.
- ✓ Resolved 2026-05-05 (R13 propagation): AMPK cooperative phosphorylation sites on PGC-1α (Thr177/Ser538 mouse = T178/S539 human) — primary citation Jager 2007 now lives on the verified [[pgc-1alpha]] page; cross-link from sirt1.md replaces the standalone gap.

## Footnotes

[^kaeberlein1999]: doi:10.1101/gad.13.19.2570 · [[studies/kaeberlein-1999-sir2-yeast-lifespan]] · in-vivo · model: S. cerevisiae (W303R haploid mother cells; n=48–50 per strain) · SIR2 OE (second copy integrated at URA3 locus) extends mean replicative lifespan ~30% (W303R 23.0 vs W303R SIR2/URA3 28.8 generations, n=50/48); sir2Δ reduces mean lifespan ~50% (11.6 generations, n=50); SIR2 identified as a limiting longevity factor; mechanism: suppression of rDNA homologous recombination and ERC formation at Fob1p-blocked replication fork · local: PDF verified

[^rodgers2005]: doi:10.1038/nature03354 · [[studies/rodgers-2005-sirt1-pgc1alpha-gluconeogenesis]] · in-vitro + in-vivo · model: Fao rat hepatocytes (primary experiments); 4-week-old C57BL/6 mice fasted 24h and refed 24h · SIRT1 protein increases ~1.7-fold in fasted liver (post-translational, not mRNA); SIRT1 forms endogenous complex with PGC-1α and HNF4α in liver; deacetylates PGC-1α at 13 lysine sites (mapped by MS; no single site named as "Lys778" in this paper); nicotinamide (5 mM) induces PGC-1α acetylation; SIRT1 OE with NAD+ reduces PGC-1α acetylation ~60%; SIRT1 required for PGC-1α-mediated induction of gluconeogenic genes (PEPCK, G6Pase) but not mitochondrial genes; liver NAD+ increases 33% in fasted mice · local: PDF verified

[^brunet2004]: doi:10.1126/science.1094637 · [[studies/brunet-2004-sirt1-foxo3-stress]] · in-vitro · model: human 293T cells; primary neurons · SIRT1 deacetylates FOXO3; shifts FOXO3 output from apoptosis toward cell-cycle arrest and oxidative-stress resistance; daf-16 epistasis in C. elegans noted · 3185 citations · local: not_oa (closed-access) #gap/no-fulltext-access

[^yeung2004]: doi:10.1038/sj.emboj.7600244 · [[studies/yeung-2004-sirt1-nfkb-rela]] · in-vitro · model: NSCLC cell lines (H358, H460, H1299) as primary model; HEK293T for co-transfection/acetylation assays; MEFs for selected experiments; TNFα stimulation · SIRT1 deacetylates RelA/p65 at Lys310 (directly demonstrated by in vitro deacetylase assay with recombinant SIRT1 and NAD+); reduces NF-κB transcriptional output (cIAP-2 gene); resveratrol potentiates this effect; SIRT1 OE sensitizes cells to TNFα-induced apoptosis · local: PDF verified

[^luo2001]: doi:10.1016/s0092-8674(01)00524-4 · [[studies/luo-2001-sirt1-p53-deacetylation]] · in-vitro + cell-based · model: H1299 (p53-null; co-transfection), HCT116, MEFs (p53+/+); stress: etoposide and H2O2 · Mouse Sir2α (closest ortholog to hSIRT1, 89% core-domain identity) and human SIRT1 both deacetylate p53 at Lys382 in an NAD+- and deacetylase-activity-dependent manner; Sir2α suppresses p53-dependent apoptosis (16.4% vs 32.3% SubG1 with p53 alone in H1299 co-transfection); nicotinamide (5 mM) completely blocks this deacetylation in vitro and in vivo · local: PDF verified

[^satoh2013]: doi:10.1016/j.cmet.2013.07.013 · [[studies/satoh-2013-sirt1-brain-lifespan]] · in-vivo · model: BRASTO transgenic mice (line 10; Sirt1 OE in DMH/LH; whole-genome sequenced to exclude confounds); male and female cohorts · females: ~16% median lifespan extension (799→930 days, p<0.001 log-rank); males: ~9% (849→926 days, p=0.015); combined: ~11% (835→926 days, p<0.001); mechanism via Sirt1 deacetylation of Nkx2-1 (K161, K182) → Ox2r upregulation in DMH/LH; aged BRASTO mice showed enhanced physical activity, elevated (not reduced) body temperature, and higher O2 consumption during dark time · local: PDF verified

[^pacholec2010]: doi:10.1074/jbc.M109.088682 · [[studies/pacholec-2010-sirt1-activators]] · in-vitro · model: biochemical (native vs TAMRA-fluorophore-labeled substrates; full-length Ac-p53) · resveratrol, SRT1720, SRT2183, SRT1460 activate SIRT1 only with fluorophore-tagged substrates; no activation with native peptide substrates; compounds are broadly promiscuous · local: PDF confirmed at DOI lookup

[^hubbard2013]: doi:10.1126/science.1231097 · [[studies/hubbard-2013-sirt1-allosteric]] · in-vitro + cell-based · model: biochemical (AMC-tagged and native peptide assays; OAcADPR MS assay); SIRT1-KO myoblasts reconstituted with WT mouse Sirt1 or E222K mutant (murine equivalent of human E230K) · STACs (including resveratrol, STAC-1/SRT1460, STAC-2) activate SIRT1 via allosteric N-terminal domain mechanism requiring: (a) hydrophobic residues at +1 and/or +6 positions flanking the acetyl-Lys in substrate (PGC-1α K778 and FOXO3a K290 both qualify); (b) Glu230 in human SIRT1 N-terminal structured domain (residues ~190–244); E230K substitution abolishes activation by 117 diverse STACs; STAC effects on mitochondrial mass and ATP blocked in E222K myoblasts · local: PDF verified

[^mansouri2025]: Mansouri F, Feliziani G, Bordoni L, Gabbianelli R · doi:10.1016/j.jand.2025.03.011 · *J Acad Nutr Diet* 2025 Sep;125(9):1299-1314.e1 · PMID 40158656 · systematic-review (GRADE-assessed) + dose-response meta-analysis · 11 RCTs pooled (4 on Sirt1 gene expression; 5 on protein expression; 3 on serum Sirt1 levels); resveratrol vs placebo in adults · primary outcome: SIRT1 modulation · no significant effect on Sirt1 gene expression (SMD=0.05; 95% CI −0.24 to 0.34; P=0.73), protein expression (SMD=0.3; 95% CI −0.15 to 0.77; P=0.18), or serum levels (MD=−0.04; 95% CI −0.235 to 0.16; P=0.7); subgroup analysis showed transient gene-expression elevation in studies <12 wk evaluating blood tissue; dose-response analysis suggests dosage-regimen-dependent effects · abstract-verified via PubMed efetch; full PDF not locally archived
