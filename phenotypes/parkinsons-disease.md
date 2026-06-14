---
type: phenotype
aliases: [PD, Parkinson disease, idiopathic Parkinson disease, sporadic Parkinson disease, paralysis agitans]
icd-10: G20
icd-11: 8A00
affected-tissues:
  - "[[brain]] — substantia nigra pars compacta dopaminergic neurons"
  - "[[brain]] — locus coeruleus"
  - "[[brain]] — dorsal motor nucleus of vagus"
  - "[[brain]] — olfactory bulb"
underlying-hallmarks:
  - "[[mitochondrial-dysfunction]]"
  - "[[loss-of-proteostasis]]"
  - "[[disabled-macroautophagy]]"
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
typical-onset: "60+ (sporadic/idiopathic); 30–60 (early-onset familial forms)"
prevalence-65plus: "~1–2% age 65+; ~4% age 80+"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Sidransky 2009 (GBA/PD) and Zimprich 2004 (LRRK2) verified against primary-source PDFs. Postuma 2015 parkinsonism definition verified against published abstract (PDF download failed — bronze OA). Spillantini 1997 PDF download failed (bronze OA, failed twice). Polymeropoulos 1997, Kitada 1998, Valente 2004, Bonifati 2003 are not_oa or permanently failed — claims attributed to these sources are unverified against primary PDFs and carry #gap/no-fulltext-access. Prevalence figures (~1–2% / ~4%) and ~70–80% SNc threshold remain unsourced in the primary literature accessed here."
---

> ⚠️ Partially verified 2026-05-04. Sidransky 2009 and Zimprich 2004 verified against primary-source PDFs; Postuma 2015 parkinsonism definition verified against published abstract. Spillantini 1997 PDF download failed twice (bronze OA). Polymeropoulos 1997, Kitada 1998, Valente 2004, and Bonifati 2003 are closed-access — claims from these four sources remain unverified (#gap/no-fulltext-access). See verified-scope in frontmatter.

# Parkinson's Disease

The second most prevalent neurodegenerative disease globally. A progressive movement disorder defined clinically by parkinsonism — bradykinesia plus rest tremor and/or rigidity — alongside non-motor features that often precede motor onset by years [^postuma2015]. Postural instability is a common later feature but is not part of the MDS 2015 core parkinsonism definition. Age is the dominant risk factor; incidence increases steeply after 60. The prototypical disease of [[mitophagy]] failure and [[chaperone-mediated-autophagy]] dysfunction: autosomal recessive early-onset forms are caused directly by mutations in mitochondrial quality-control proteins [[pink1]] and [[parkin]].

## Neuropathology

### Core lesion: Lewy bodies and dopaminergic neuron loss

Two concurrent processes define PD neuropathology:

1. **Lewy bodies and Lewy neurites** — intraneuronal inclusions containing aggregated, hyperphosphorylated, and ubiquitinated **α-synuclein** (encoded by *SNCA*). α-Synuclein in Lewy bodies was first demonstrated by immunostaining post-mortem human PD and DLB tissue [^spillantini1997]. The aggregation of α-synuclein is central to loss of proteostasis in PD; it is also a canonical substrate of [[chaperone-mediated-autophagy]] (see CMA section below).

2. **Progressive loss of dopaminergic neurons** in the substantia nigra pars compacta (SNc) with retrograde degeneration of nigrostriatal projections. Striatal dopamine depletion causes the motor symptom cascade. Motor symptoms typically manifest only after ~70–80% of SNc dopaminergic neurons are already lost — a clinically silent presymptomatic window of years to decades. #gap/unsourced — the ~70–80% threshold is widely cited in the field; primary epidemiological source verification needed.

### Braak staging

PD pathology spreads in a largely stereotyped caudal-to-rostral pattern. Braak et al. proposed a six-stage scheme (Braak 2003, not yet cited on this page) in which Lewy pathology initiates in the olfactory bulb and dorsal motor nucleus of the [[tissues/vagus-nerve|vagus nerve]] (stage 1–2), ascends to the SNc (stages 3–4), and eventually reaches neocortex (stages 5–6). This staging supports a prion-like propagation hypothesis for α-synuclein (and motivates the "gut-first" route, with α-synuclein ascending via vagal afferents from the enteric nervous system) but remains mechanistically debated — autopsy series find ~17% of cases deviate from the strict caudo-rostral sequence. #gap/contradictory-evidence

### Non-motor features (prodromal and established)

| Feature | Approximate lead time before motor onset |
|---|---|
| Anosmia / hyposmia | 5–10 years |
| REM sleep behavior disorder (RBD) | Up to 10+ years |
| Constipation / dysautonomia | 5–10 years |
| Depression / anxiety | Variable |
| Cognitive decline (PD dementia, PDD) | 10–15 years post motor onset |

RBD is among the strongest prodromal biomarkers; ~80% of RBD patients convert to a synucleinopathy (PD, DLB, or MSA) within ~12 years #gap/needs-replication.

## Genetics

PD was long considered exclusively sporadic but Mendelian forms now account for ~5–10% of total cases and reveal core pathogenic pathways. Three convergent genetic lines implicate [[mitophagy]] and mitochondrial quality control.

### Autosomal dominant forms

| Locus | Gene | Key variant(s) | Notes |
|---|---|---|---|
| PARK1/PARK4 | *SNCA* (α-synuclein) | A53T, A30P, E46K missense; duplications/triplications | A53T was the first PD gene mutation identified [^polymeropoulos1997]; gene dose correlates with severity — triplication causes earlier onset than duplication |
| PARK8 | *LRRK2* (leucine-rich repeat kinase 2) | G2019S most common overall; ~5–15% familial PD, ~1–3% sporadic #gap/needs-replication | Zimprich 2004 [^zimprich2004] identified 6 disease-segregating mutations (Y1699C, R1441C, I1122V, I2020T, 3342A>G, one splice site) in 34 families with AD-PD; G2019S was independently identified by Paisán-Ruíz 2004 (PMID 15541308, not yet cited on this page) #gap/unsourced — G2019S kinase-activating function established by subsequent functional studies (West et al. 2005), not the original discovery papers; penetrance is incomplete and age-dependent |

### Autosomal recessive early-onset forms (most aging-relevant)

Three AR-PD genes encode proteins directly involved in mitochondrial quality control, and their convergence constitutes the strongest genetic argument that impaired mitophagy is a cause — not merely a correlate — of nigral degeneration:

| Locus | Gene | Protein | Key finding |
|---|---|---|---|
| PARK2 | *PRKN* | [[parkin]] (RBR E3 ubiquitin ligase) | Kitada 1998 [^kitada1998] — most common AR-PD gene; loss-of-function mutations (large deletions and point mutations); parkin ubiquitinates depolarized OMM substrates downstream of PINK1 · #gap/no-fulltext-access (Kitada 1998 not_oa) |
| PARK6 | *PINK1* | [[pink1]] (mitochondrial kinase) | Valente 2004 [^valente2004] — PINK1 accumulates on depolarized mitochondria; phosphorylates ubiquitin Ser65 + Parkin; recruits Parkin for mitophagy · #gap/no-fulltext-access (Valente 2004 download failed) |
| PARK7 | *DJ-1* | DJ-1 (oxidative stress sensor/chaperone) | Bonifati 2003 [^bonifati2003] — DJ-1 quenches mitochondrial ROS; DJ-1-/- neurons are hypersensitive to oxidative challenge |

The triple convergence of PINK1, Parkin, and DJ-1 on mitochondrial homeostasis establishes the [[pink1-parkin-pathway]] as a core PD mechanism. See those protein pages for mechanistic detail.

### Risk variants (non-Mendelian)

**GBA (glucocerebrosidase):** Heterozygous loss-of-function mutations in *GBA* are the most common genetic risk factor for sporadic PD, conferring OR 5.43 (Mantel–Haenszel combined across 16 centers; OR remained 5.43 or higher in all sensitivity analyses excluding Japan/Norway) vs non-carriers in a multicenter analysis (n=5691 PD cases + 4898 controls) [^sidransky2009]. *GBA* encodes lysosomal glucocerebrosidase; partial enzyme deficiency impairs lysosomal function and is proposed to create a positive feedback loop — reduced GCase activity → glycolipid substrate accumulation → lysosomal dysfunction → impaired α-synuclein clearance → more α-synuclein aggregation → further GCase inhibition. GBA risk variants are thus a proteostasis-pathway risk factor. #gap/no-mechanism (GCase → Lewy body feedback loop mechanistic link not fully established in vivo).

## Hallmarks of aging — mechanistic links

PD pathogenesis overlaps with multiple hallmarks, with the strongest evidence at the mitophagy/proteostasis interface:

### Mitochondrial dysfunction

- PINK1 and Parkin mutations abolish the primary pathway for selective mitochondrial autophagy ([[mitophagy]]). Damaged, depolarized mitochondria accumulate in SNc neurons — which are among the most metabolically demanding post-mitotic cells in the brain (large axonal arbors; autonomous pacemaking; high calcium flux). See [[pink1-parkin-pathway]] for the PINK1 Ser65-ubiquitin phosphorylation → Parkin recruitment mechanism.
- mtDNA deletions accumulate in aged SNc neurons at higher rates than other brain regions, consistent with high mitochondrial turnover requirements. #gap/needs-replication

### Loss of proteostasis

- α-Synuclein is a canonical substrate of [[chaperone-mediated-autophagy]] (CMA) via a KFERQ-like motif recognized by Hsc70/LAMP-2A. LAMP-2A levels decline with age in multiple tissues. In postmortem PD substantia nigra, LAMP-2A and Hsc70 levels are reportedly reduced vs age-matched controls, and α-synuclein itself can block CMA by binding LAMP-2A without being translocated (receptor occupancy without translocation). This creates a proteostatic bottleneck that is reinforced as aggregates accumulate. See [[chaperone-mediated-autophagy]] for the LAMP-2A translocation mechanism.
- Mutant α-synuclein A53T/A30P/E46K proteins show altered CMA substrate binding, potentially increasing their half-lives and aggregation propensity. #gap/needs-replication

### Disabled macroautophagy

- [[autophagy]] flux is impaired in PD neurons. LRRK2 phosphorylates multiple Rab GTPases that regulate vesicle trafficking including autophagic flux; G2019S hyperactivation of LRRK2 kinase has been proposed to disrupt autophagic vesicle clearance. #gap/no-mechanism (specific Rab phosphorylation → autophagy block causal chain not fully established in human SNc).
- Beclin-1 / PI3KC3 complex activity has been reported reduced in PD postmortem brains vs controls. #gap/needs-replication

### Neuroinflammation / chronic inflammation

- Activated [[microglia]] are a consistent finding in PD postmortem brains and in PET imaging studies using microglial activation tracers. Dopaminergic neurons in the SNc may be particularly vulnerable to microglial neuroinflammation due to their proximity and the sensitivity of the nigrostriate projection.
- LRRK2 is expressed at high levels in microglia and regulates innate immune signaling; G2019S may enhance microglial inflammatory activation. #gap/no-mechanism
- Complement activation and NLRP3 inflammasome activity have been reported elevated in PD brain tissue. #gap/needs-replication

### Cellular senescence

- Senescent dopaminergic and microglial cells accumulate in aged substantia nigra in mouse models. Senolytic treatment (navitoclax or dasatinib + quercetin) reduced α-synuclein pathology and behavioral deficits in some PD mouse models. #gap/needs-human-replication — all current evidence is preclinical.

## Clinical diagnostic criteria

The MDS (Movement Disorder Society) clinical diagnostic criteria for PD (Postuma 2015) [^postuma2015] define:

- **Parkinsonism** (required): bradykinesia + rest tremor and/or rigidity [per Postuma 2015 abstract; postural instability is not part of the core MDS parkinsonism definition]
- **Clinically established PD**: parkinsonism + ≥2 supportive criteria + no red flags + no absolute exclusion criteria #gap/no-fulltext-access — specific counts not independently verified against full paper text; consistent with abstract structure
- **Clinically probable PD**: parkinsonism + ≥1 supportive criteria + ≤1 red flag #gap/no-fulltext-access — specific counts not independently verified against full paper text

Key supportive criteria include: clear and dramatic benefit to dopaminergic therapy, levodopa-induced dyskinesia, rest tremor of a limb, positive olfactory loss or cardiac sympathetic denervation on MIBG scintigraphy.

Key red flags (atypical features) include: rapid progression, prominent early falls, anterocollis, absent response to high-dose levodopa, cerebellar features — suggesting PSP, MSA, CBS, or DLB instead.

## Pharmacological management

PD treatment is symptomatic — no disease-modifying therapy has demonstrated slowing of neurodegeneration in a well-powered RCT as of 2026. #gap/long-term-unknown

### Dopamine replacement (motor symptoms)

| Agent | Class | Notes |
|---|---|---|
| Levodopa + carbidopa | Dopamine precursor + DDC inhibitor (bypasses rate-limiting [[molecules/proteins/tyrosine-hydroxylase\|tyrosine hydroxylase]]) | Gold standard; most effective motor therapy; motor fluctuations ("wearing off") and dyskinesias emerge after years of use |
| Pramipexole, ropinirole, rotigotine | Dopamine agonists | Used early or as adjuncts; impulse control disorders are a class-specific risk |
| Selegiline, rasagiline, safinamide | [[molecules/proteins/monoamine-oxidase\|MAO-B]] inhibitors | Modest motor benefit; well-tolerated as monotherapy or adjunct |
| Entacapone, opicapone | [[molecules/proteins/comt\|COMT]] inhibitors | Extend levodopa half-life; adjunct for wearing off |

### Device-based therapy

- **Deep brain stimulation (DBS)** of the subthalamic nucleus (STN) or globus pallidus interna (GPi) — highly effective for motor fluctuations in advanced PD; does not slow progression.
- **Levodopa-carbidopa intestinal gel (LCIG)** — continuous infusion; reduces motor fluctuations.

### Investigational / disease-modifying

| Target | Approach | Status |
|---|---|---|
| α-Synuclein | Passive immunotherapy (prasinezumab, cinpanemab) | Phase 2 — early signals in fast progressors; overall trial results mixed |
| GBA | Small-molecule GCase activators (ambroxol, venglustat) | Phase 2 — ambroxol ongoing (CSF GCase increase confirmed); clinical benefit uncertain |
| LRRK2 kinase | LRRK2 inhibitors (DNL201/DNL151 → BIIB122) | Phase 2/3 — biomarker signal confirmed (Rab10 phosphorylation); symptomatic trial enrolling |
| Mitophagy | Urolithin A, NAD+ precursors | Preclinical signal; no PD-specific trials to date #gap/needs-human-replication |
| Senescent cells | Senolytics | Preclinical only #gap/needs-human-replication |

### Gene therapy

AADC (aromatic L-amino acid decarboxylase) gene therapy delivered via AAV to the putamen has demonstrated restoration of AADC activity and sustained motor benefit in Phase 2 trials. Approved in some jurisdictions for late-stage PD. #gap/long-term-unknown

## Evidence quality — model-to-human translation

Most mechanistic data derives from rodent models (6-OHDA, MPTP, or genetic: SNCA-A53T transgenic, Pink1-/-, Parkin-/-). These models have well-characterized limitations:

| Dimension | Status |
|---|---|
| PINK1/Parkin pathway conserved in humans? | Yes — human genetic studies are definitive |
| α-Synuclein aggregation conserved in humans? | Yes — Lewy bodies confirmed in humans since Spillantini 1997 |
| Rodent dopaminergic neurodegeneration phenotype? | Partial — Pink1-/- and Parkin-/- mice show subtle mitochondrial phenotypes but minimal spontaneous neurodegeneration vs humans; 6-OHDA/MPTP recapitulate acute but not chronic progressive loss |
| CMA decline conserved in humans? | Partial — postmortem data suggestive; prospective causal chain not established in vivo in humans |
| Senolytic benefit replicated in humans? | No — #gap/needs-human-replication |

## Limitations and gaps

- **Disease-modification gap**: No proven disease-modifying therapy after decades of trials. The failure mode is partly the preclinical model problem (Pink1/Parkin KO mice do not spontaneously lose SNc neurons) — most trials advanced on model data that did not translate.  #gap/needs-human-replication
- **Biomarker gap**: Diagnosis is still clinical, typically >years into neurodegeneration. α-Synuclein seed amplification assay (αSyn-SAA) is now emerging as a prodromal biomarker but is not yet a standard endpoint for disease-modification trials. #gap/long-term-unknown
- **Heterogeneity**: Idiopathic PD is almost certainly a syndrome rather than a single disease. GBA-PD, LRRK2-PD, and idiopathic PD have partially distinct trajectories and may require different therapeutic strategies. Pooling them in trials dilutes effect sizes.
- **CMA–α-synuclein feedback**: The mechanistic detail of how α-synuclein blocks CMA and whether restoring LAMP-2A is sufficient to halt progression is not established in humans. #gap/no-mechanism
- **Mitophagy flux in human SNc**: Direct measurement of mitophagy flux in living human neurons is technically inaccessible; mechanistic inference relies on postmortem protein levels + genetic models. #gap/no-mechanism

## Cross-references

- [[pink1]] — PARK6 gene; PINK1 kinase; phosphorylates Ser65-Ub and Parkin UBL; verified-partial on this wiki
- [[parkin]] — PARK2 gene; RBR E3 ubiquitin ligase; AR-JP founding gene; verified-partial on this wiki
- [[pink1-parkin-pathway]] — full mechanistic pathway; disease mutations mapped; verified-partial on this wiki
- [[mitophagy]] — selective autophagy of depolarized mitochondria; verified-partial on this wiki
- [[chaperone-mediated-autophagy]] — CMA; α-synuclein is canonical substrate; LAMP-2A; verified-partial on this wiki
- [[autophagy]] — macroautophagy; impaired in PD; verified-partial on this wiki
- [[microglia]] — neuroinflammation; TREM2; verified-partial on this wiki
- [[alpha-synuclein]] — SNCA; Lewy body core component; stub (not yet seeded)
- [[lrrk2]] — PARK8 kinase; G2019S; stub (not yet seeded)
- [[gba]] — lysosomal glucocerebrosidase; stub (not yet seeded)
- [[substantia-nigra]] — affected tissue; stub (not yet seeded)
- [[neurodegeneration]] — parent category phenotype; stub (not yet seeded)

## Footnotes

[^postuma2015]: [[studies/postuma-2015-mds-pd-criteria]] · doi:10.1002/mds.26424 · Postuma RB et al. · review/consensus criteria · Movement Disorders 2015;30(12):1591–1601 · MDS clinical diagnostic criteria for PD; parkinsonism defined as bradykinesia plus rest tremor or rigidity (postural instability is NOT part of core parkinsonism definition); three diagnostic feature categories: absolute exclusion criteria, red flags (must be counterbalanced by supportive criteria), and supportive criteria; two certainty tiers: "clinically established PD" (maximising specificity) and "probable PD" (balancing sensitivity and specificity); specific criterion counts (≥2 supportive for established; ≤1 red flag for probable) not verifiable from abstract alone — PDF not obtained (bronze OA, download failed 2026-05-04) · model: human clinical cohort definition · archive: bronze OA, download failed 2026-05-04 · #gap/no-fulltext-access (criterion counts unverified)

[^polymeropoulos1997]: [[studies/polymeropoulos-1997-snca-a53t]] · doi:10.1126/science.276.5321.2045 · Polymeropoulos MH et al. · genetic linkage + sequencing · Science 1997;276(5321):2045–2047 · A53T missense mutation in SNCA in Italian and Greek PD kindreds; first identification of a PD causative gene · model: human familial PD · archive: not_oa, no local PDF · #gap/no-fulltext-access

[^spillantini1997]: [[studies/spillantini-1997-alpha-synuclein-lewy-bodies]] · doi:10.1038/42166 · Spillantini MG et al. · immunohistochemistry · Nature 1997;388(6645):839–840 · α-synuclein is the major component of Lewy bodies in PD and DLB by specific immunostaining; first demonstration of α-synuclein in Lewy pathology · model: human postmortem brain · archive: bronze OA, download failed twice 2026-05-04 · #gap/no-fulltext-access

[^kitada1998]: [[studies/kitada-1998-parkin-ar-jp]] · doi:10.1038/33416 · Kitada T et al. · positional cloning · Nature 1998;392(6676):605–608 · Deletion/point mutations in PRKN (parkin) in autosomal recessive juvenile parkinsonism (AR-JP, PARK2); founding paper for parkin as a PD E3 ubiquitin ligase gene · n=5 AR-JP families · model: human genetics · archive: not_oa, no local PDF · #gap/no-fulltext-access

[^valente2004]: [[studies/valente-2004-pink1-park6]] · doi:10.1126/science.1096284 · Valente EM et al. · positional cloning · Science 2004;304(5674):1158–1160 · Mutations in PINK1 (PTEN-induced kinase 1) cause hereditary early-onset PD (PARK6); mitochondrial targeting sequence established · n=3 kindreds · model: human genetics · archive: download failed twice (green OA via figshare, HTTP 202 returned; Science paywalled) · #gap/no-fulltext-access

[^bonifati2003]: [[studies/bonifati-2003-dj1-park7]] · doi:10.1126/science.1077209 · Bonifati V et al. · positional cloning · Science 2003;299(5604):256–259 · Missense (L166P) and deletion mutations in DJ-1/PARK7 in two early-onset PD kindreds; DJ-1 is an oxidative stress sensor/chaperone · model: human genetics · archive: not_oa, no local PDF · #gap/no-fulltext-access

[^sidransky2009]: [[studies/sidransky-2009-gba-pd]] · doi:10.1056/NEJMoa0901281 · Sidransky E et al. · multicenter case-control · NEJM 2009;361(17):1651–1661 · GBA mutations in 5691 PD patients (780 Ashkenazi Jewish) + 4898 controls (387 Ashkenazi Jewish) across 16 centers; Mantel–Haenszel combined OR for any GBA mutation = 5.43 (remained 5.43 or higher in all sensitivity analyses); among Ashkenazi Jewish: 15% patients vs 3% controls carried L444P or N370S; among non-Ashkenazi Jewish: 3% patients vs <1% controls; full sequencing of 1883 non-Ashkenazi Jewish patients found 7% with mutations; establishes GBA as most common genetic risk factor for PD identified to date · model: human genetics · archive: PDF verified 2026-05-04

[^zimprich2004]: [[studies/zimprich-2004-lrrk2-pd]] · doi:10.1016/j.neuron.2004.11.005 · Zimprich A et al. · positional cloning + sequencing · Neuron 2004;44(4):601–607 · 6 disease-segregating LRRK2 mutations (Y1699C, R1441C, I1122V, I2020T, 3342A>G, one splice site) identified in 34 families with autosomal dominant late-onset PD (46 families were sequenced for mapping; mutations found in 34); LRRK2 is a member of the ROCO protein family encoding a multi-domain protein with kinase (MAPKKK class), LRR, ROC/Ras-GTPase, COR, and WD40 domains; pleomorphic neuropathology including Lewy body PD, diffuse Lewy body disease, nigral degeneration without distinctive histopathology, and PSP-like pathology; NOTE: G2019S was NOT identified in this paper — it was identified independently by Paisán-Ruíz 2004 (PMID 15541308) · model: human genetics · archive: PDF verified 2026-05-04
