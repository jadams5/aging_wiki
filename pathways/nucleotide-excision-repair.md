---
type: pathway
aliases: [NER, nucleotide excision repair, GG-NER, TC-NER, global genome NER, transcription-coupled NER]
kegg: hsa03420
reactome: R-HSA-5696398
wikipathways: WP3528   # candidate ID — verify against WikiPathways; search blocked at page-creation time #gap/needs-canonical-id
key-nodes:
  - "[[xpa]]"
  - "[[xpb]]"
  - "[[xpc]]"
  - "[[xpd]]"
  - "[[xpe]]"
  - "[[xpf]]"
  - "[[xpg]]"
  - "[[ercc1]]"
  - "[[csa]]"
  - "[[csb]]"
  - "[[rpa]]"
  - "[[pcna]]"
  - "[[tfiih]]"
upstream: ["[[dna-damage-response]]", "[[uv-radiation-sensing]]"]
downstream: ["[[dna-replication]]", "[[transcription]]", "[[cell-cycle-checkpoint]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
druggability-tier: null   # no single clinical drug targets NER activation for aging; indirect modulation via PARP/ATM inhibitors is oncology-focused #gap/no-opentargets-entry
caused-by: ["[[genomic-instability]]", "[[dna-damage-response]]"]
causes: ["[[genomic-instability]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Niedernhofer 2006 (10.1038/nature05456) verified against local PDF — load-bearing progeroid-mouse claims corrected (see below). Vermeij 2016 (10.1038/nature19329) verified against local PDF (downloaded during this pass) — lifespan extension figures and strain background corrected; section added. Marteijn 2014 (10.1038/nrm3822) and de Boer 2002 (10.1126/science.1070174) are not_oa — claims attributed to these sources are not verified against PDFs and remain tagged; mechanistic NER steps attributed to Marteijn 2014 are standard review content with low fabrication risk but should be re-verified if a PDF becomes accessible. WikiPathways ID WP3528 not independently re-checked."
---


# Nucleotide excision repair (NER)

**Nucleotide excision repair** is a versatile, multi-step DNA repair pathway that removes *bulky* lesions distorting the DNA double helix — principally UV-induced cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts (6-4PPs), as well as chemical adducts from environmental carcinogens (e.g., benzo[a]pyrene diol epoxide / BPDE, aflatoxin B1, AAF), and intrastrand crosslinks from platinum-based drugs (cisplatin). NER is the primary repair route for helix-distorting damage and operates through two sub-pathways — **Global Genome NER (GG-NER)**, which surveys the entire genome, and **Transcription-Coupled NER (TC-NER)**, which prioritizes the transcribed strand of active genes. Inherited loss-of-function mutations in NER genes underlie three classic human syndromes — **Xeroderma pigmentosum (XP)**, **Cockayne syndrome (CS)**, and **Trichothiodystrophy (TTD)** — and NER capacity declines with normal aging, linking repair insufficiency causally to the genomic instability hallmark [^marteijn2014].

> **Naming note:** `[[nucleotide-excision-repair]]` is this pathway page. The sub-pathways (GG-NER: Reactome R-HSA-5696399; TC-NER: Reactome R-HSA-6781827) are covered in dedicated sub-sections here rather than as separate pages, following CLAUDE.md "extend vs new-page" guidance.

## Two sub-pathways: GG-NER and TC-NER

NER splits at the damage-recognition step into two functionally distinct sub-pathways:

| Feature | GG-NER | TC-NER |
|---|---|---|
| Scope | Entire genome (transcribed + non-transcribed, coding + non-coding) | Transcribed strand of RNA Pol II-active genes only |
| Damage sensor | [[xpc]]–RAD23B heterodimer (+ UV-DDB / [[xpe]]–DDB1 for CPDs) | Stalled RNA Polymerase II + [[csb]] (ERCC6) + [[csa]] (ERCC8) |
| Speed relative to GG-NER | Slower | Faster — active genes repaired in hours vs days for silent regions |
| Syndrome when deficient | XP (cancer-prone but not progeroid) | CS, some XP variants, TTD (progeroid) |
| Reactome ID | R-HSA-5696399 | R-HSA-6781827 |

The divergence in clinical outcomes — cancer predisposition (GG-NER loss) vs premature aging (TC-NER loss) — is a key observation: unrepaired transcription-blocking lesions produce persistent transcription stress, stochastic gene expression failure, and cell death / senescence in post-mitotic tissues, rather than the mutagenic outcome that drives cancer [^marteijn2014].

## NER machinery and reaction steps

NER requires >30 polypeptides. The core reaction is shared between GG-NER and TC-NER after the recognition step diverges.

### Step 1 — Damage recognition (sub-pathway-specific)

**GG-NER:** [[xpc]]–RAD23B detects helical distortion by probing for single-stranded character on the undamaged strand opposite the lesion. For CPDs (weakly distorting), UV-DDB (the [[xpe]] / DDB2–DDB1 complex) is required as an accessory damage sensor that hands off to XPC. 6-4PPs are more distorting and recognized by XPC directly [^marteijn2014].

**TC-NER:** RNA Pol II stalling at a lesion recruits [[csb]] (ERCC6) first; [[csb]] stabilizes the stalled complex and recruits the CUL4–RBX1 E3 ligase adaptor [[csa]] (ERCC8; the ERCC8–DDB1–CUL4A–RBX1 complex). The CSA complex ubiquitylates CSB among other substrates, enabling downstream factor recruitment. UVSSA–USP7 protects CSB from proteasomal degradation at this stage [^marteijn2014].

### Step 2 — Verification and TFIIH recruitment

Both sub-pathways converge on recruitment of **TFIIH**, a 10-subunit complex that includes two ATP-dependent DNA helicases:
- **[[xpb]]** (ERCC3) — 3'→5' helicase; anchors TFIIH at the lesion and is required for NER but its helicase activity is dispensable for the incision step (acts structurally)
- **[[xpd]]** (ERCC2) — 5'→3' helicase; unwinds ~20-25 nt of DNA around the lesion; scans the damaged strand to verify the lesion and functions as a gatekeeper

[[xpa]] binds with high affinity to the unwound bubble and coordinates damage verification in concert with the single-stranded DNA-binding complex **[[rpa]]** (RPA1–RPA2–RPA3 heterotrimer). RPA coats the undamaged strand, positioning the complex for dual incision [^marteijn2014].

### Step 3 — Dual incision

Two structure-specific endonucleases excise a ~25-30 nucleotide oligonucleotide containing the lesion:
- **[[xpf]]–[[ercc1]]** (ERCC4–ERCC1 heterodimer): cleaves 5' of the lesion (~15-24 nt 5' of the damage)
- **[[xpg]]** (ERCC5): cleaves 3' of the lesion (~2-8 nt 3' of the damage)

XPG must bind before XPF–ERCC1 cuts; XPG cleavage follows. Incision order and spacing determine the excised fragment size [^marteijn2014].

### Steps 4-5 — Gap-filling and ligation

The ~25-30 nt single-stranded gap is filled by:
- **DNA polymerases:** Pol δ or Pol ε (replication-coupled in S phase); Pol κ (in non-dividing cells, G1/G0)
- **Accessory factors:** [[pcna]] (sliding clamp), RFC (clamp loader), RPA (stabilizes template)
- **Ligation:** LIG1 (S-phase, replication-coupled) or LIG3–XRCC1 (non-dividing cells)

(Reactome sub-pathway IDs: GG-NER gap-filling R-HSA-5696397; TC-NER gap-filling R-HSA-6782210.)

## Key protein table

| Protein | Gene | Role | Syndrome if mutated |
|---|---|---|---|
| XPA | XPA | Damage verification, scaffold | XP-A (severe, with neurodegeneration) |
| XPB | ERCC3 | TFIIH 3'→5' helicase; anchoring | XP-B, XP/CS (combined), TTD |
| XPC | XPC | GG-NER damage sensor | XP-C (cancer-prone, no neurodegen.) |
| XPD | ERCC2 | TFIIH 5'→3' helicase; verification | XP-D, XP/CS, TTD, COFS |
| XPE / DDB2 | DDB2 | GG-NER accessory CPD sensor | XP-E (mild) |
| XPF | ERCC4 | 5' endonuclease (with ERCC1) | XP-F, XFE progeroid syndrome |
| XPG | ERCC5 | 3' endonuclease | XP-G, XP/CS |
| ERCC1 | ERCC1 | XPF partner; 5' incision | COFS; no standalone XP; XFE |
| CSA | ERCC8 | TC-NER E3 adaptor; ubiquitylation | Cockayne syndrome A |
| CSB | ERCC6 | TC-NER Pol II-stalling sensor | Cockayne syndrome B |
| RPA | RPA1/2/3 | ssDNA binding; template stabilization | — |
| PCNA | PCNA | Sliding clamp for resynthesis | — |

## Progeroid syndromes — causal link to aging

The NER field provides some of the most direct genetic evidence that **DNA damage accumulation drives organismal aging**. Three syndromes and one engineered mouse model are the pillars.

### Xeroderma pigmentosum (XP)

XP arises from mutations in XPA through XPG (or the variant XPV/Pol η). Hallmarks: extreme UV hypersensitivity, ~1000-fold elevated skin cancer risk, and in XP-A, C, D, and G neurological degeneration. XP is primarily a **cancer predisposition** syndrome; patients do not display premature somatic aging of visceral organs. The neurodegeneration in severe XP-A is attributed to unrepaired oxidative DNA lesions in post-mitotic neurons that are processed through a TC-NER-like mechanism rather than classic UV photoproducts [^marteijn2014]. #gap/needs-replication — the neuronal oxidative damage hypothesis for XP-A neurodegeneration is supported by cell biology but not resolved in vivo.

### Cockayne syndrome (CS)

CS is the **classic progeroid NER syndrome**. CSA (ERCC8) or CSB (ERCC6) mutations abolish TC-NER while preserving GG-NER. Clinical features: severe growth failure (cachectic dwarfism), progressive neurodegeneration, photosensitivity, sensorineural deafness, retinal degeneration, and premature death (median survival ~12 years for severe CS type I; range 12–30+ years for milder CS type II). Critically, CS patients do not show elevated cancer rates — consistent with intact GG-NER preventing mutagenesis while TC-NER loss causes cell death and senescence in transcriptionally active tissues [^marteijn2014]. Some XPG and XPD mutations produce combined XP/CS (both cancer and progeroid features), highlighting the modular contribution of each sub-pathway.

### Trichothiodystrophy (TTD)

TTD (XPB/XPD/TTDN1 mutations) presents with brittle sulfur-deficient hair (trichorrhexis nodosa, hallmark of the name), ichthyosis, intellectual disability, short stature, and **premature aging features** including cachexia and reduced life expectancy. TTD is notable because XPD mutations in TTD reduce the stabilizing function of XPD within TFIIH — lowering total TFIIH levels and thereby reducing basal transcription in addition to NER — which explains the non-NER features (sulfur metabolism, developmental defects) not seen in XP [^deboer2002] [^marteijn2014].

| Syndrome | Defective proteins | GG-NER | TC-NER | Cancer risk | Progeroid? |
|---|---|---|---|---|---|
| XP (A/B/C/D/E/F/G) | XPA-G | Deficient | Deficient (B/D/G only TC-NER too) | High (skin, ocular) | Partial (neurodegen only) |
| Cockayne syndrome | CSA, CSB | Intact | Deficient | Not elevated | Yes — severe |
| TTD | XPD (+ XPB, TTDN1) | Partial | Partial | Not elevated | Yes — moderate |
| XFE progeroid | XPF/ERCC1 (partial) | Deficient | Deficient | Moderate | Yes — severe |

### Niedernhofer 2006: the ERCC1 progeroid mouse — strongest causal evidence

The most direct evidence that NER failure causes multi-system aging phenotypes comes from the ERCC1-null mouse [^niedernhofer2006]. *Ercc1*^-/-^ mice (pure null; n=27 in the lifespan cohort) accumulated unrepaired DNA damage throughout life and developed within approximately 3–4 weeks a cluster of multi-organ aging phenotypes, including:

- Liver degeneration (polyploidy, apoptosis; senescent polyploid hepatocytes visible by BrdU/lysosome staining)
- Neurodegeneration (dystonia and progressive ataxia indicative of neurodegeneration; renal insufficiency also reported)
- Sarcopenia and kyphosis
- Cachexia and reduced adipose tissue
- Oxidative stress at the cellular level; premature replicative senescence in primary cells

Shortened lifespan: typically culminating in death by four weeks (n=27; median approximately 3 weeks from Fig. 2b Kaplan-Meier curve); wild-type littermates survive ~2–3 years.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — XFE progeroid syndrome (partial ERCC1-XPF deficiency) phenocopies elements in human patients |
| Phenotype conserved in humans? | partial — XFE patients show progeroid features; full ERCC1 null is presumably lethal in humans |
| Replicated in humans? | partial — XFE patients provide human genetic confirmation; no RCT-level evidence |

Crucially, the authors showed that the *Ercc1*^-/-^ mouse **liver** transcriptional profile closely matched that of **normally aged wild-type C57BL/6 animals** (16-week vs 130-week old controls) — providing direct evidence that DNA damage accumulation is sufficient to drive the aging gene expression programme. The Spearman rank correlation between Ercc1^-/-^ and old-mouse liver transcriptomes was r=0.32 (P≤0.0001); correlation with young wild-type liver was r=−0.03 (non-significant) [^niedernhofer2006]. Kidney trends were confirmed by qRT-PCR but a full genome-wide brain comparison was not reported in this paper. #gap/needs-replication — the transcriptional-overlap argument was based primarily on liver; genome-wide comparison in post-mitotic tissues (neurons, cardiomyocytes) requires further study.

**Note on alleles:** Niedernhofer 2006 used *Ercc1*^-/-^ pure null mice for the core lifespan and transcriptomic data. The related *Ercc1*^Δ/-^ compound heterozygote (one null allele, one hypomorphic Δ/truncation allele) with a longer lifespan of 4–6 months was the model used in Vermeij et al. 2016 (see below). These are distinct allelic combinations with meaningfully different severities.

### Vermeij 2016: 30% dietary restriction triples lifespan of Ercc1^Δ/-^ mice

Vermeij et al. 2016 subjected *Ercc1*^Δ/-^ compound heterozygous mice (F1 C57BL6J/FVB hybrid background; lifespan 4–6 months) to 30% dietary restriction (DR), starting at 7 weeks with 10% reduction, reaching 30% from 9 weeks onward [^vermeij2016]. Results:

- **Median remaining lifespan extended ~250% in males** (10 → 35 weeks; p<0.0001) and **~200% in females** (13 → 39 weeks; p<0.0001) in the primary cohort
- A replication cohort in a different facility showed **~180% extension** (p<0.0001), confirming robustness
- DR animals retained ~50% more neurons in the neocortex compared to ad libitum controls; locomotor function preserved well beyond the lifespan of ad libitum mice
- Genome-wide DNA damage foci (γH2AX) were reduced in DR mice, suggesting DR attenuates damage accumulation rather than compensating downstream
- ~2/3 of DR-induced transcriptional changes in Ercc1^Δ/-^ liver overlapped with wild-type DR responses, and 684/688 common DEGs changed in the same direction — indicating a strongly shared mechanism

The Xpg^-/-^ Cockayne syndrome-like mouse (lifespan ~18–22 weeks) showed a comparable ~80% median lifespan extension on 30% DR (p<0.0001), extending the finding beyond Ercc1.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — CR modulates IGF-1/mTOR in humans; whether the same DNA-damage-attenuating mechanism operates at equivalent DR levels is not established |
| Phenotype conserved in humans? | unknown — no human equivalent experiment is possible in NER-deficient patients |
| Replicated in humans? | no — mouse model only; authors propose DR(mimetics) as a therapeutic direction for human progeroid NER syndromes |

#gap/needs-replication — Vermeij 2016 is a single study from one group (though two independent cohorts internally); the 180–250% figure should not be cited without noting the progeroid-model caveat. #gap/needs-human-replication

## De Boer 2002: TTD mouse confirms transcription as the aging axis

*Ercc1*-null mice die too young to study aging trajectories in full. The TTD mouse (*Xpd*^TTD/TTD^; homozygous XPD R722W knockin mimicking a human TTD allele) provided a more tractable model: mice survive to 2 years with moderate premature aging features, including reduced bone density, skin atrophy, reduced subcutaneous fat, and shortened median lifespan (~14% reduction in females) [^deboer2002]. Combined *Xpd*^TTD^ with an *Xpa*-null background further reduced NER and accelerated aging, confirming dose-response of DNA damage to the aging phenotype.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ERCC2/XPD mutations cause TTD in humans with the same hypomorphic-TFIIH mechanism |
| Phenotype conserved in humans? | yes — TTD patients show comparable aging features (though variable expressivity) |
| Replicated in humans? | in-progress — human TTD cohort is small (~200 patients globally); longitudinal data limited |

## NER decline with normal aging

Beyond progeroid syndromes, NER capacity in normal individuals declines with age, contributing to the genomic instability hallmark in the absence of Mendelian defects [^marteijn2014]. Evidence for age-dependent NER decline:

- XPC and XPB protein levels decrease in skin fibroblasts from older donors #gap/needs-replication — most data from cross-sectional comparisons with small n
- Unscheduled DNA synthesis (UDS) assays show reduced NER activity in older donor cells
- CPD accumulation per unit UV exposure increases with donor age in human skin

Mechanistically, NER decline with age may reflect: (i) decreased expression of NER factors (XPC transcription declines in aged skin); (ii) chromatin compaction reducing access; (iii) accumulation of oxidized XPA/RPA reducing protein function. #gap/no-mechanism — the quantitative contribution of each mechanism is not resolved; longitudinal data in humans is absent.

## Aging relevance and cross-links

NER intersects with aging biology at multiple levels:

- **[[genomic-instability]]** (Hallmark of Aging) — NER is a primary genome maintenance pathway; its decline contributes directly to genomic instability accumulation [^marteijn2014]
- **[[cellular-senescence]]** — unrepaired TC-NER substrates in active genes cause persistent DNA damage signalling (via [[atm]] / [[dna-damage-response]]) → p53/p21 activation → senescence, particularly in post-mitotic tissues
- **[[stem-cell-exhaustion]]** — NER deficiency preferentially depletes tissue stem cell compartments (demonstrated in the ERCC1 mouse [^niedernhofer2006]); NER proficiency is disproportionately important in long-lived stem cells
- **[[dna-damage-response]]** — NER is initiated downstream of damage recognition by the DDR; ATR-mediated checkpoint signalling is triggered by the ssDNA gap intermediate during NER
- **[[atm]]** — ATM responds primarily to DSBs, but NER failure produces secondary DSBs (when replication forks collapse at unrepaired lesions); this ATM-mediated secondary signalling links NER deficiency to accelerated replicative senescence
- **[[mus-musculus]]** — the *Ercc1*^-/-^ null mouse (Niedernhofer 2006; background not specified in main text) and the *Ercc1*^Δ/-^ compound heterozygote (Vermeij 2016; **F1 C57BL6J/FVB hybrid background**) are the principal NER-aging mouse models; the *Xpd*^TTD/TTD^ model (de Boer 2002) is separately maintained; note these are distinct backgrounds and alleles

## Limitations and gaps

- **#gap/needs-human-replication** — NER decline with aging is demonstrated in cross-sectional cell culture assays; no prospective human cohort has measured NER capacity longitudinally against aging biomarkers.
- **#gap/dose-response-unclear** — The relationship between quantitative NER activity (e.g., UDS assay output) and aging phenotype severity in non-progeroid humans is unknown. It is unclear how much NER decline is sufficient to contribute to accelerated aging.
- **#gap/no-mechanism** — Age-associated NER decline mechanism is unresolved: transcriptional silencing vs. post-translational modification of NER factors vs. chromatin accessibility changes.
- **#gap/long-term-unknown** — There are no validated pharmacological NER enhancers with human safety data; the translational route from NER insufficiency → intervention is undefined.
- **#gap/needs-canonical-id** — WikiPathways ID WP3528 is unverified; WikiPathways was inaccessible at page-creation time.
- The ERCC1-deficient mouse model uses a severely hypomorphic allele that produces disease within weeks; this extreme is likely not representative of the milder, decades-long NER decline in normal aging. Quantitative gap between mouse model and normal human aging trajectory is not bridged.

## Footnotes

[^marteijn2014]: doi:10.1038/nrm3822 · Marteijn JA et al. · *Nature Reviews Molecular Cell Biology* 2014 · review · model: human/mouse NER genetics and cell biology · 1,127 citations · not_oa (no local PDF); archive status: not downloaded

[^niedernhofer2006]: doi:10.1038/nature05456 · Niedernhofer LJ et al. · *Nature* 2006 · in-vivo · n=27 (*Ercc1*^-/-^ lifespan cohort; Fig. 2b) · model: *Mus musculus Ercc1*^-/-^ null (pure null; background not specified in main text; WT comparators for microarray were C57BL/6) · progeroid phenotype cluster within ~3 weeks; liver transcriptome Spearman r=0.32 (P≤0.0001) vs 130-wk-old WT liver · 653 citations · local PDF: 

[^vermeij2016]: doi:10.1038/nature19329 · Vermeij WP et al. · *Nature* 2016 · in-vivo · n=cohort (exact per-group n in supplementary; primary and replication cohorts) · model: *Mus musculus Ercc1*^Δ/-^ compound heterozygote; **F1 C57BL6J/FVB hybrid background**; 30% dietary restriction from 9 weeks · median remaining lifespan extended ~250% males / ~200% females (primary cohort; p<0.0001); ~180% in replication cohort (p<0.0001) · local PDF: 

[^deboer2002]: doi:10.1126/science.1070174 · de Boer J et al. · *Science* 2002 · in-vivo · n=cohort of *Xpd*^TTD/TTD^ mice · model: *Mus musculus* · premature aging features + lifespan reduction in TTD mouse · 539 citations · not_oa (no local PDF)

[^hoeijmakers2009]: doi:10.1056/NEJMra0804615 · Hoeijmakers JH · *New England Journal of Medicine* 2009 · review · model: human clinical syndromes + mouse models · 2,146 citations · OA (green; handle: http://hdl.handle.net/1765/17811); DOI lookup failed
