---
type: protein
aliases: [GH, somatotropin, somatotrophin, GH1, growth hormone 1, pituitary growth hormone]
uniprot: P01241
ncbi-gene: 2688
hgnc: 4261
mouse-ortholog: Gh1
ensembl: ENSG00000259384
druggability-tier: 3  # SM:Med-Quality Pocket + Structure with Ligand (Open Targets, GH1) — peptide hormone, drug-as-itself
caused-by: []
causes: []
key-domains: [four-helix-bundle, receptor-binding-site-1, receptor-binding-site-2]
key-ptms: [Ser132-phosphorylation, Ser176-phosphorylation, Gln163-deamidation, Asn178-deamidation, signal-peptide-cleavage]
pathways: ["[[insulin-igf1]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[igf-1]]", "[[ghr]]", "[[jak2]]", "[[stat5b]]", "[[ghrh]]", "[[somatostatin]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Niall 1971 and DeNoto 1981 verified against local PDFs (downloaded 2026-05-04); Guevara-Aguirre 2011 verified against PMC3357623 full text (web); UniProt P01241 disulfide/PTM claims verified via UniProt REST API; Coschigano 2003 is not_oa (no local PDF) — lifespan percentage range kept as approximate, footnote updated; Brown-Borg 1996 download failed (bronze OA, no PMC mirror) — lifespan claim retained as widely-cited ~50% figure, flagged #gap/needs-replication; Niall 1971 citation corrected: that paper characterises somatotropin/prolactin family sequence homology, NOT the four-helix bundle (which is from later crystallography); four-helix bundle claim now correctly tagged as uncited per primary source"
---

# Growth Hormone (GH / GH1)

The master regulator of the somatotropic axis — a 191-amino-acid pituitary peptide secreted in pulsatile bursts by anterior pituitary somatotrophs that drives postnatal growth, anabolism, and body composition via hepatic [[igf-1|IGF-1]] induction. In the biology of aging, GH occupies a central position as the **upstream driver of the most consistently pro-aging pathway identified in multicellular organisms**: reduction of the GH → IGF-1 → IIS → AKT → FOXO axis extends lifespan in organisms from worms to mice, and loss-of-function mutations in the GH receptor protect humans from cancer and type 2 diabetes (Laron syndrome).

## Identity

- **UniProt:** P01241 (SOMA_HUMAN) — Swiss-Prot reviewed
- **NCBI Gene:** 2688
- **HGNC symbol:** GH1
- **Mouse ortholog:** Gh1
- **Precursor length:** 217 amino acids (includes 26-aa signal peptide)
- **Mature form:** 191 amino acids (22 kDa) after signal peptide cleavage
- **Gene locus:** 17q23.3; part of a 5-gene cluster (GH1, CSHL1, GH2, CSH1, CSH2) on chromosome 17

## Molecular structure

GH is a member of the **somatotropin/prolactin family** of cytokine-like hormones, sharing deep sequence homology with human placental lactogen (~80% identical residues) and prolactin — a relationship established by comparative sequence analysis [^niall1971]. Its 3D architecture is a compact **four-helix bundle** (helices I–IV) [#gap/unsourced — four-helix bundle description is from 3D crystal structures, e.g., de Vos et al. 1992 *Science* 255:306; primary crystallography source not yet on this page] with two cross-bracing disulfide bonds:

| Bond | Residues (mature form numbering) | Function |
|---|---|---|
| Disulfide 1 | Cys53–Cys165 | Stabilises helix I–loop topology |
| Disulfide 2 | Cys182–Cys189 | Maintains C-terminal mini-loop |

(UniProt P01241 positions these as Cys79–Cys191 and Cys208–Cys215 in precursor numbering — shift by 26 for mature peptide.) The cDNA sequence and evidence for alternative splicing of the pre-mRNA were characterised by DeNoto et al. 1981 [^denoto1981].

### Isoforms

The predominant circulating form is the **22-kDa monomer** produced from the major transcript. Alternative splicing generates a **20-kDa isoform** (lacking residues 32–46; ~10% of pituitary GH); its biological potency is similar but with reduced diabetogenic activity. Higher-molecular-weight oligomeric forms (dimer, polymer) circulate at low levels and have reduced specific activity.

### Post-translational modifications

- **Phosphorylation** at Ser132 and Ser176 (UniProt; functional significance not fully characterised)
- **Deamidation** at Gln163 and Asn178 (storage artefact; reduces receptor affinity; also seen in recombinant preparations)
- Signal peptide cleavage at Ala26|Phe27 (co-translational, in ER lumen)

## The hypothalamic-pituitary-somatotropic axis

GH secretion is regulated by a dual hypothalamic control system operating on the anterior pituitary:

```
Hypothalamus
  ↓ GHRH (growth-hormone-releasing hormone)     → stimulates somatotrophs → GH pulse
  ↑ SST (somatostatin / SRIF)                   → inhibits somatotrophs → suppresses GH
Anterior pituitary (somatotroph cells, ~40-50% of anterior pituitary)
  ↓ GH (pulsatile bursts, 6-12 per day; largest pulse 60-90 min after sleep onset)
Liver (primary) + extrahepatic tissues
  ↓ IGF-1 synthesis and secretion
Long-loop negative feedback:
  IGF-1 ← inhibits → GHRH neurons + somatotrophs (short loop also: GH inhibits own GHRH)
```

The **pulsatile secretion pattern** is biologically critical: continuous GH infusion desensitises the GHR and has different transcriptional outputs than pulsatile delivery. Males exhibit higher-amplitude, more discrete GH pulses; females have more frequent, overlapping pulses. This sex difference in GH pulse pattern partly underlies sex differences in body composition and liver gene expression [^gap/unsourced — sex-specific GH pulse pattern reviewed but primary quantitative reference needed].

### Age-related changes in GH secretion

GH secretion peaks at puberty (coinciding with peak IGF-1 levels of 400–700 ng/mL) and declines progressively after age 30. By age 60–70, mean 24-hour GH secretion is approximately 30–50% of the young-adult rate, driven by increased somatostatin tone and decreased GHRH amplitude. This decline parallels the fall in circulating [[igf-1|IGF-1]] and has been called **"somatopause."** Whether somatopause is a cause or consequence of aging physiology — and whether correcting it is beneficial — is the central clinical controversy (see Pharmacology below).

## GH receptor signalling: GHR → JAK2 → STAT5

Growth hormone acts through the **growth hormone receptor (GHR)**, a single-pass transmembrane receptor of the cytokine receptor superfamily (class I):

1. **Ligand-induced dimerisation:** One GH molecule binds sequentially to two GHR monomers at distinct surface patches (site 1 and site 2 — identified by mutagenesis and crystallography). The 1:2 GH:GHR stoichiometry creates a symmetric transmembrane dimer.
2. **JAK2 trans-phosphorylation:** Each GHR subunit constitutively associates with **JAK2** kinase at its membrane-proximal Box 1 motif. Dimerisation brings the two JAK2 molecules into proximity; each phosphorylates the other (trans-activation at Tyr1007/Tyr1008 in the JAK2 activation loop).
3. **STAT5 recruitment and phosphorylation:** Activated JAK2 phosphorylates tyrosines on the GHR intracellular tail (e.g., Tyr487, Tyr534, Tyr596, Tyr628), creating docking sites for **STAT5b** (the dominant GH-responsive STAT isoform). JAK2 then phosphorylates STAT5b at Tyr694.
4. **Nuclear translocation:** Phospho-STAT5b dimerises, translocates to the nucleus, and binds GAS (gamma-activated sequence) elements in the promoters of target genes including *IGF1*, *IGFBP3*, *ALS*, and liver-specific metabolic genes.
5. **IGF-1 production:** ~75% of circulating IGF-1 is produced by hepatocytes under GHR–JAK2–STAT5b control [^gap/unsourced — 75% hepatic fraction is textbook consensus; primary liver-specific KO data is in Liu 1998 + Sjögren 1999; exact fraction needs literature citation].

**GHR also activates** (via JAK2 scaffolding): PI3K–AKT (direct insulin-like metabolic effects), RAS–MAPK (proliferative), SOCS (suppressors of cytokine signalling — feedback off-switch), and PRLR-shared pathways.

### Laron syndrome: GHR loss-of-function

Autosomal recessive loss-of-function mutations in *GHR* cause **Laron syndrome** (OMIM 262500): GH insensitivity, near-zero circulating IGF-1, severe proportional dwarfism, and paradoxically **elevated serum GH** (negative feedback fails because IGF-1 is absent). The Ecuadorian Laron cohort studied by Guevara-Aguirre et al. 2011 provides critical human evidence — covered in depth on [[igf-1]]; key GH-specific points here: (1) GHR mutations cause GH excess rather than deficiency despite the IGF-1–deficient phenotype; (2) serum GH is elevated precisely because the long-loop IGF-1 → hypothalamus/pituitary feedback is broken. This is mechanistically important: it shows GH itself is not the pro-aging signal — IGF-1 (downstream of GHR) is [^guevara2011].

## Role in aging: the somatotropic axis

### GHR-/- mice: the longest-lived laboratory mouse on record

Coschigano et al. 2003 established that complete deletion of the GH receptor in mice (**GHR-/- Laron mice**) produces the most extreme longevity phenotype documented in a laboratory mouse model [^coschigano2003]:

- **Significantly extended lifespan** in GHR-/- mice compared to WT littermates; the paper is closed-access (not_oa) and exact median values cannot be confirmed from the full text here — commonly cited as ~40–55% depending on sex and colony (see table below) #gap/needs-replication (exact numbers need primary-source verification)
- Drastically reduced serum IGF-1 (near undetectable)
- Dramatically reduced fasting insulin
- Protected from spontaneous neoplasms
- Small body size (as expected from absent GH-driven growth)
- This lifespan extension **exceeds** that reported for caloric restriction alone and rivals rapamycin at the highest doses tested in ITP mice

| Manipulation | Approx. median lifespan extension | Reference |
|---|---|---|
| GHR-/- (Laron mice) | ~40–55% | Coschigano 2003 [^coschigano2003] |
| Ames dwarf (Prop1df) | ~50% | Brown-Borg 1996 [^brownborg1996] |
| Snell dwarf (Pit1dw) | ~40% | Flurkey et al. 2001 |
| Caloric restriction (C57BL/6) | ~20–30% | Various ITP/NIA data |
| Rapamycin (ITP; started at 20 mo) | ~10–25% | Harrison 2009 / ITP replications |

Note: Ames (Prop1df) and Snell (Pit1dw) dwarf mice lack GH, TSH, and prolactin (pleiotropic pituitary deficiency); they are impure GH experiments. GHR-/- mice are the cleanest somatotropic-axis single-gene model because only GH signalling is abolished.

**Extrapolation table:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — GHR/JAK2/STAT5/IGF-1 axis is orthologous across mammals |
| Phenotype conserved in humans? | partial — Laron syndrome protects from cancer and T2D; overall lifespan not significantly extended (confounded by accidents/alcohol) |
| Replicated in humans? | no (lifespan) / limited (disease protection, single cohort) |

#gap/needs-human-replication — Direct lifespan extension from GH reduction not demonstrated in humans.

### Ames dwarf mice: first longevity proof

The first demonstration that GH deficiency extends mammalian lifespan came from Brown-Borg et al. 1996, reporting that **Ames dwarf mice** (Prop1df — recessive mutation in *Prop1* transcription factor → fail to develop anterior pituitary cell types secreting GH, TSH, and prolactin) lived substantially longer than WT littermates [^brownborg1996]. The widely-cited figure is **~50% extension**, though the exact value cannot be confirmed from the primary source here (paper is closed-access; full text not retrieved) #gap/needs-replication. This landmark result, published as a brief Nature letter (~1,060 citations), launched the field of somatotropic axis longevity biology.

### GH excess shortens lifespan: acromegaly and bovine GH transgenic mice

The pro-aging direction of GH action is confirmed in both directions:

- **Acromegaly** (GH-secreting pituitary adenoma in humans): chronic GH excess → elevated IGF-1 → reduced lifespan (mean age at diagnosis ~40s, reduced life expectancy vs population), increased incidence of colorectal cancer, cardiovascular disease, hypertension, and insulin resistance. #gap/needs-replication (survival data from registry studies; confounded by late diagnosis and treatment era)
- **Bovine GH transgenic mice**: overexpression of bGH in mice → giant phenotype (2–3× normal body weight) → markedly **shortened** lifespan to ~12–15 months (vs ~24–30 months WT); early insulin resistance, increased cancer, cardiomegaly [^gap/unsourced — multiple bGH transgenic studies; primary reference needed for exact lifespan numbers; Bartke lab refs recommended].

These bidirectional results in mice — and acromegaly data in humans — make the GH axis one of very few aging pathways with human evidence on both sides (reduction = protection; excess = acceleration).

### Mechanism: why does reduced GH/IGF-1 extend lifespan?

Multiple downstream mechanisms proposed (not mutually exclusive):

1. **Reduced mTORC1 activity** — IGF-1 → PI3K → AKT → TSC1/TSC2–RHEB–mTORC1; lower IGF-1 reduces mTOR, increasing autophagy and reducing anabolic drive (see [[mtor]])
2. **FOXO transcription factor disinhibition** — AKT phosphorylates and cytoplasm-sequesters FOXOs; reduced AKT → nuclear FOXO3/FOXO1 → upregulates stress resistance, antioxidants, DNA repair (see [[foxo3]])
3. **Reduced proliferative signalling** — less GH-driven MAPK/proliferation → reduced replicative senescence burden
4. **Improved stress resistance** — GHR-/- and Ames dwarf fibroblasts are more resistant to paraquat, UV, and hydrogen peroxide in vitro; mechanism likely involves FOXO target genes #gap/needs-replication

## Pharmacology

### Recombinant human GH (somatropin, rhGH)

**FDA-approved indications** for **somatropin** (multiple brands: Norditropin, Genotropin, Humatrope, Saizen, Serostim, etc.):
- Paediatric GH deficiency (confirmed pituitary/hypothalamic disease)
- Short stature disorders: Turner syndrome, Prader-Willi, small for gestational age (no catch-up), idiopathic short stature (ISS; >2.25 SD below mean)
- Adult GH deficiency (confirmed by stimulation testing)
- AIDS wasting / cachexia (Serostim)
- Short bowel syndrome (Zorbtive)

**Mechanism:** Replaces endogenous GH → GHR activation → JAK2/STAT5 → IGF-1 production → growth and anabolic effects.

**Anti-aging use — not supported:**

Several trials have tested rhGH in elderly individuals to reverse somatopause. The landmark Rudman et al. 1990 NEJM study reported increases in lean mass and decreases in fat mass over 6 months in 21 men aged 61–81 [^gap/needs-replication; dose: 0.03 mg/kg three times weekly]. However, subsequent meta-analyses and longer trials found: (1) the body composition effects reverse on cessation; (2) side effects are substantial at anti-aging doses (fluid retention, carpal tunnel, arthralgias, gynecomastia, glucose intolerance, potential increased cancer risk); (3) no evidence of mortality benefit or improved functional outcomes. The FDA has not approved rhGH for anti-aging and the American Association of Clinical Endocrinologists has explicitly cautioned against this use.

#gap/long-term-unknown — Long-term safety of supraphysiological GH supplementation in aging humans not established; cancer risk signal warrants monitoring.

### GHRH analogues: sermorelin, tesamorelin

- **Sermorelin** — synthetic 29-aa fragment of GHRH; stimulates endogenous GH secretion; used for paediatric GHD and off-label for adult somatopause; less potent than rhGH but physiological pulsatile pattern preserved
- **Tesamorelin** — stabilised GHRH analogue; FDA-approved (Egrifta) for HIV-associated lipodystrophy (visceral fat excess); reduces visceral fat via GH → IGF-1 → lipolysis; studied in HIV-uninfected adults for cognitive outcomes (ongoing NCT trials)

### GH secretagogues (GHSs): ghrelin mimetics

- **Ghrelin** — endogenous 28-aa acylated peptide from gastric X/A cells; binds GHSR-1a in hypothalamus and pituitary → GH release; also stimulates appetite (orexigenic). Age-related ghrelin decline partially contributes to somatopause.
- **MK-677 (ibutamoren)** — orally bioavailable non-peptide GHSR-1a agonist; sustained elevation of GH and IGF-1 over 24 h; Phase 2 trials in elderly for frailty/sarcopenia showed lean mass gain without significant strength improvement; used off-label and as research tool; #gap/long-term-unknown

### Pegvisomant: GHR antagonist for acromegaly

**Pegvisomant** (Somavert) is a PEGylated GH analogue with mutations at the site-2 interface that allow site-1 binding but prevent productive GHR dimerisation → GHR **blockade** → reduced IGF-1. FDA-approved for acromegaly refractory to somatostatin analogues. From a longevity-biology perspective, pegvisomant is pharmacologically equivalent to the GHR-/- genetic model — the only approved drug that phenocopies the Laron mouse at the receptor level. It is not studied for longevity indications. #gap/needs-human-replication

### Somatostatin analogues: octreotide, lanreotide, pasireotide

Used for acromegaly (suppress GH secretion from adenomas); not directly relevant to normal-aging GH reduction because they suppress endogenous GH axis from the hypothalamic side rather than directly blocking growth-promoting downstream effects.

## Cross-references

- [[igf-1]] — primary downstream effector; GH → GHR → JAK2 → STAT5 → IGF-1 transcription; centenarian paradox, Laron syndrome, and Holzenberger 2003 IGF1R+/- data covered there
- [[insulin-igf1]] — the full IIS pathway hub; cross-organism lifespan data; FOXO biology; comparative pharmacology
- [[igf1r]] — IGF-1 receptor; receives hepatic IGF-1 signal; Suh 2008 centenarian variants
- [[jak-stat-pathway]] — JAK2-STAT5 signalling downstream of GHR
- [[mtor]] — convergent downstream target of GH→IGF-1→AKT axis; mTORC1 inhibition is the shared mechanism between GH reduction and rapamycin longevity
- [[foxo3]] — key longevity transcription factor disinhibited by reduced IIS; nuclear FOXO3 drive stress resistance and autophagy
- [[foxo1]] — hepatic FOXO1 regulates gluconeogenesis downstream of AKT; GH/IGF-1 axis intersects insulin signalling at this node
- [[deregulated-nutrient-sensing]] — the Hallmark that GH/IGF-1 biology most directly instantiates
- [[homo-sapiens]] — Laron syndrome human evidence; acromegaly human evidence
- [[cellular-senescence]] — GH/IGF-1 drives proliferation; excess IGF-1 may accelerate replicative senescence
- [[ames-dwarf-mouse]] — Prop1df model organism (GH/PRL/TSH deficient; ~50% lifespan extension); implicit stub
- [[ghr]] — GH receptor protein; implicit stub; GHR-/- Laron mouse and pegvisomant mechanism belongs there

## Limitations and gaps

- #gap/needs-human-replication — No controlled human trial has demonstrated that pharmacological GH reduction extends lifespan. Laron syndrome data (Guevara-Aguirre 2011) is observational, single-cohort, confounded by accidents/alcohol, and does not show lifespan extension per se.
- #gap/needs-replication — Bidirectional lifespan effect of bGH overexpression (shortened) vs GHR-/- (extended) is well-established in mice, but the magnitude of extension in GHR-/- varies by genetic background and sex; tabulated lifespan values need primary-source verification per study.
- #gap/dose-response-unclear — Optimal degree of somatotropic axis suppression for human healthspan benefit is unknown; too little GH → frailty/sarcopenia; too much → cancer/T2D risk.
- #gap/long-term-unknown — Long-term safety of supraphysiological GH supplementation (anti-aging dosing in elderly) is not established; cancer risk signal in epidemiological literature warrants monitoring.
- #gap/no-mechanism — Exact mechanism by which reduced GH/IGF-1 extends lifespan across such different organisms (worms through mice) is not fully resolved; FOXO, mTOR, and stress resistance pathways are all implicated but relative contributions unclear.
- #gap/unsourced — Sex-specific GH pulse pattern primary reference needed (Male > Female pulse amplitude); textbook consensus cited here without primary paper.
- #gap/unsourced — 75% hepatic fraction of circulating IGF-1 derived from GH signalling (vs extrahepatic paracrine) needs primary citation (Liu 1998 / Sjögren 1999 liver-specific Igf1 KO likely).
- #gap/unsourced — Bovine GH transgenic mouse lifespan shortening exact values; Bartke lab primary references needed.
- #gap/needs-canonical-id — GenAge gene entry for GH1 not confirmed; may be absent from GenAge-human (gene name: GH1, not a "longevity gene" in the conventional sense since the organism doesn't live longer — the GHR-/- phenotype is on the receptor, not GH itself).
- #gap/unsourced — Four-helix bundle structural description (helices I–IV) is from X-ray crystallography literature (de Vos et al. 1992 *Science* 255:306; Cunningham et al.); no primary crystallography source is currently cited on this page. Niall 1971 does not establish this structure.
- #gap/no-fulltext-access — Brown-Borg 1996 (10.1038/384033a0): exact lifespan data (mean lifespan in days, statistical test, sex breakdown) unverifiable; DOI lookup failed and paper is behind Nature paywall with no PMC mirror. The commonly-cited ~50% extension figure should be confirmed when access becomes available.

## Footnotes

[^niall1971]: doi:10.1073/pnas.68.4.866 · in-vitro (protein chemistry / comparative sequencing) · Niall HD, Hogan ML, Sauer R, Rosenblum IY, Greenwood FC · PNAS 1971 · "Sequences of pituitary and placental lactogenic and growth hormones: evolution from a primordial peptide by gene reduplication" · **What this paper shows:** comparative amino acid sequence analysis of human placental lactogen (HPL), human growth hormone (HGH), and ovine prolactin — finding ~80% sequence identity between HPL and HGH (revised sequence); proposes the somatotropin/prolactin family evolved by gene reduplication from a common ancestral peptide; also reports identical chain length of ~190 aa for GH and HPL and identically placed half-cystine residues. **Does NOT characterise the four-helix bundle 3D structure** (that is from later crystallography, e.g., de Vos et al. 1992) · archive status: downloaded (green OA PMC389061)
[^denoto1981]: doi:10.1093/nar/9.15.3719 · molecular biology (genomic DNA sequencing / S1 mapping) · DeNoto FM, Moore DD, Goodman HM · Nucleic Acids Res 1981 · "Human growth hormone DNA sequence and mRNA structure: possible alternative splicing" · **What this paper shows:** complete genomic DNA sequence of the hGH gene (2.6 kb EcoRI fragment); gene has four introns (IVS A = 256 bp, B = 209 bp, C = 93 bp, D = 253 bp); S1 nuclease mapping confirms 5' end of mature mRNA; identifies alternative 3' splice site in IVS B generating the 20-kDa isoform (15 aa deletion, ~10% of pituitary GH); signal peptide start confirmed; full amino acid sequence of 191 aa mature form derived from genomic sequence (Fig. 2) · archive status: downloaded (Europe PMC PMC327387)
[^coschigano2003]: doi:10.1210/en.2003-0374 · in-vivo · genetic model (GHR-/- knockout) · model: Mus musculus (C57BL/6 background) · Coschigano KT et al. · Endocrinology 2003 · 509 citations · "Deletion, But Not Antagonism, of the Mouse Growth Hormone Receptor Results in Severely Decreased Body Weights, Insulin, and IGF-I Levels and Increased Life Span" · archive status: not_oa (no local PDF)
[^brownborg1996]: doi:10.1038/384033a0 · in-vivo · observational (spontaneous mutant lifespan) · model: Mus musculus (Ames dwarf, Prop1df) · Brown-Borg HM, Borg KE, Meliska CJ, Bartke A · Nature 1996 · 1,060 citations · first demonstration of ~50% lifespan extension in GH-deficient Ames dwarf mice (exact lifespan values unverified — full text not accessible) · archive status: failed (bronze OA; no PMC mirror; Nature paywall) #gap/no-fulltext-access
[^guevara2011]: doi:10.1126/scitranslmed.3001845 · observational (cross-sectional cohort with longitudinal mortality follow-up) · n=99 GHRD subjects monitored since 1988 (90 living, 9 deceased during monitoring; 53 additional pre-1988 deaths via questionnaire = 62 total deaths) + 1,606 unaffected relatives as controls · model: [[homo-sapiens]] (Ecuadorian founder cohort, GHR loss-of-function mutations) · **Cancer:** 0 cancer deaths in GHRD; 1 non-lethal cancer diagnosed (ovarian); cancer = 20% of deaths in relatives and 17% of all diseases in relatives; P=0.003, exact hypergeometric distribution (StatXact 7) · **T2D:** 0/90 in GHRD (95% CI 0–4%) vs ~5% in Ecuador/relatives; P=0.02 (exact binomial test) · **IGF-1:** ≤20 ng/mL in all GHRD vs 29–310 ng/mL (mean 144) in relatives (P<0.0001) · **Lifespan:** not significantly extended; 70% of GHRD deaths (of 30 deaths over age 10) were non-age-related (accidents, alcohol, convulsive disorders) · verified against PMC3357623 full text · Sci Transl Med 2011 · archive status: download failed (green OA PMC3357623; URL filter blocked) · see also [[igf-1]] where this study is covered in depth
