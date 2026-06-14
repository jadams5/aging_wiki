---
type: protein
aliases: [ferritin holoprotein, ferritin nanocage, FTH1/FTL complex, serum ferritin, ferritin heavy chain, ferritin light chain, apoferritin]
uniprot: P02794
ncbi-gene: 2495
hgnc: 3976
ensembl: ENSG00000167996
complex-subunits: [P02794, P02792]
genage-id: null
mouse-ortholog: "Fth1 (FTH1); Ftl1 (FTL)"
pathways: []
hallmarks:
  - "[[hallmarks/chronic-inflammation]]"
  - "[[hallmarks/loss-of-proteostasis]]"
  - "[[hallmarks/mitochondrial-dysfunction]]"
  - "[[hallmarks/cellular-senescence]]"
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: partial
caused-by: []
causes: []
is-noncoding-rna: false
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "All eight primary sources verified against full-text PDFs. Krayenbuehl 2011 fatigue scale corrected (BFI not Piper); Chen 2024 article number corrected; Barton 2024 prevalence figures confirmed to source precision; Moksnes 2022 n, loci, MR direction confirmed; Li 2023 model systems confirmed; DePalma 2021 correctly characterised as review of FeAST data (not primary RCT). UniProt P02794/P02792 mass and length re-confirmed live 2026-06-14. Canonical DB identity fields (NCBI Gene, HGNC, Ensembl) not independently re-queried — seeder confirmed them 2026-06-14; recommend cross-check on next lint pass."
---

# Ferritin — Iron-Storage Nanocage and Clinical Biomarker

Ferritin is the cell's principal iron-storage protein: a 24-subunit hollow protein nanocage that sequesters up to ~4,500 ferric iron atoms in a safe, soluble, biologically retrievable mineral form. It is equally important as a **clinical serum biomarker** — although the circulating form differs markedly from the intracellular storage form. The two roles create a single entity with two analytical identities that must be distinguished to interpret any ferritin measurement correctly.

This page covers the 24-subunit holoprotein and serum ferritin biomarker as a unified entity. Neuronal-FTL1 cognitive aging (hippocampal age-rise → impaired ATP synthesis → synaptic loss) is the canonical focus of [[ftl1]]; the FTH1 ferroxidase-subunit biology is covered on the planned [[fth1]] page. Cross-references to both are maintained here.

---

## Subunit identity

| Subunit | UniProt | Gene | NCBI Gene | HGNC | Mass | Function |
|---|---|---|---|---|---|---|
| H-subunit (heavy chain) | P02794 (FTH1_HUMAN) | FTH1 | 2495 | 3976 | 21,226 Da / 183 aa | Ferroxidase: oxidizes Fe²⁺ → Fe³⁺ for deposition |
| L-subunit (light chain) | P02792 (FRIL_HUMAN) | FTL | 2512 | 3999 | 20,020 Da / 175 aa | Nucleation/stabilization of iron-mineral core |

Both accessions confirmed live against UniProt REST API 2026-06-14 (Swiss-Prot reviewed entries). **Primary `uniprot:` field uses P02794 (FTH1)** per CLAUDE.md protein-complex convention; both subunit accessions are listed in `complex-subunits:`.

**Mouse orthologs:** Fth1 (ferritin heavy polypeptide 1; MGI:1921491) and Ftl1 (the Remesal 2025 cognitive-aging paper's primary subject — see [[ftl1]]). The mouse nomenclature adds the suffix "1" to Ftl to distinguish from a pseudogene line.

**Ensembl (FTH1 H-subunit):** ENSG00000167996. FTL: ENSG00000087086.

---

## Molecular biology

### Architecture: the 24-subunit nanocage

The ferritin holoprotein self-assembles from 24 subunits (H and/or L in tissue-dependent ratios) into a hollow sphere with 4-3-2 symmetry — external diameter ~12 nm, internal cavity ~8 nm [^theil2011review]. The three-fold symmetry pores (~3 Å channels at each three-fold axis) are the primary route of iron entry and egress. The H-subunit ferroxidase center lies within the four-fold channel region.

**H/L subunit ratio varies by tissue:** Iron-storage tissues (liver, spleen) express L-rich ferritin (low ferroxidase, high long-term sequestration capacity). Metabolically active tissues (heart, brain, intestinal epithelium) express more H-rich ferritin (rapid iron oxidation and sequestration). Serum ferritin is predominantly **L-rich and largely iron-poor** — distinct in composition from cytosolic storage ferritin.

### Iron entry and storage

1. Cytosolic Fe²⁺ (from the labile iron pool) enters through three-fold pores.
2. The H-subunit ferroxidase center oxidizes Fe²⁺ → Fe³⁺ using molecular oxygen (or H₂O₂ as electron acceptor), with H₂O₂ generation as a byproduct.
3. Fe³⁺ migrates to the L-subunit nucleation sites and mineralizes as a hydrous ferric oxide core (structurally similar to ferrihydrite), packing up to ~4,500 iron atoms per cage.
4. Iron is thus stored in a redox-inert Fe³⁺ form, inaccessible to Fenton-reaction catalysis. This makes ferritin the primary buffer against labile iron toxicity.

### Post-transcriptional regulation: the IRE/IRP system

Both FTH1 and FTL mRNA contain a **5'-UTR iron-responsive element (IRE)** — a stem-loop structure recognized by iron-regulatory proteins IRP1 and IRP2 [^galymuckenthaler2023]:

- **Iron-replete state:** IRP binding affinity to IRE is low; ribosomes translate FTH1 and FTL mRNAs freely → ferritin protein rises to sequester excess iron.
- **Iron-deficient state:** IRP1/2 bind the 5'-IRE tightly → ribosome stalling → ferritin translation blocked → less sequestration → more iron available.

This is a translational on/off switch operating within minutes to hours, making cellular ferritin protein a sensitive but delayed readout of the intracellular iron status — quite different from serum ferritin, which is regulated differently (see § Serum ferritin below).

### Ferritinophagy: controlled iron release via NCOA4

Ferritin is not a passive sink. Iron stored in ferritin is retrieved predominantly through **ferritinophagy** — the selective autophagy of ferritin, mediated by the cargo receptor NCOA4 [^galymuckenthaler2023]:

1. NCOA4 binds the FTH1 subunit's external surface.
2. NCOA4-ferritin complexes are delivered to autophagosomes → lysosomes.
3. Lysosomal acidification and proteolysis dissolve the ferritin cage and reduce Fe³⁺ to Fe²⁺ for export via DMT1/SLC11A2.
4. Released Fe²⁺ can supply: erythropoietic iron demand, mitochondrial iron-sulfur cluster synthesis, and systemic iron export via ferroportin/[[hepcidin]] axis.

**In aging, ferritinophagy is impaired** because autophagic flux declines with age (see [[processes/autophagy]]). The consequence is that ferritin accumulates in aged cells — particularly neurons — while iron remains sequestered in an increasingly non-functional storage pool. The age-rise of neuronal FTL1 protein demonstrated in the Remesal 2025 mouse hippocampus study (see [[ftl1]]) may reflect this accumulation, with functional consequences for mitochondrial ATP synthesis.

Recent mechanistic data link ferritinophagy dysregulation to cellular senescence: Li et al. 2023 showed in retinal pigment epithelial cells and galactose-aged mice that NCOA4-mediated ferritin degradation releases iron that activates cGAS-STING signaling, triggering senescence [^li2023ferroptosis]. Iron chelation rescued this phenotype. This connects ferritinophagy impairment with [[hallmarks/cellular-senescence]] and potentially [[hallmarks/chronic-inflammation]] (cGAS-STING is a major SASP inducer). #gap/needs-human-replication (cellular + mouse models only)

### Mitochondrial ferritin (FTMT)

A separate intronless gene (*FTMT*) encodes **mitochondrial ferritin**, a ~22-kDa protein with ferroxidase activity targeted to the mitochondrial matrix. FTMT expression is highest in testis and brain and is induced under oxidative stress. It is thought to protect mitochondria from iron-catalyzed Fenton damage but can sequester iron and impair Fe-S cluster assembly if overexpressed. FTMT is not covered in depth here — it is mechanistically distinct and quantitatively minor relative to cytosolic FTH1/FTL.

---

## Serum ferritin as a clinical biomarker

### What circulating ferritin actually is

Serum (or plasma) ferritin is biologically and structurally **distinct from cytosolic storage ferritin**:

- Predominantly **L-subunit-rich** (lower H/L ratio than tissue ferritin)
- Predominantly **iron-poor** (little to no mineral core; "apoferritin")
- Secreted by an unconventional secretory pathway not involving the canonical endoplasmic reticulum-Golgi route
- Likely secreted from macrophages, hepatocytes, and possibly damaged or inflamed cells

The mechanism by which ferritin is released into the blood is incompletely understood. Critically, serum ferritin does **not** directly reflect the cell's iron-storage ferritin pool in a 1:1 fashion. The two stimuli that raise serum ferritin are:

1. **High intracellular iron stores** → increased ferritin synthesis and secretion (the useful signal)
2. **Inflammation / tissue injury / liver damage / malignancy** → increased ferritin release from activated macrophages and hepatocytes (the confounding signal)

This duality is the central interpretive challenge. Serum ferritin is a useful but impure mirror of iron stores.

### Serum ferritin as an acute-phase reactant

Ferritin is an **acute-phase protein**: serum ferritin rises in inflammation, infection, liver injury, metabolic syndrome / MAFLD, and malignancy — independent of iron stores [^garcia-casal2021cochrane]. The rise is mediated by inflammatory cytokines (primarily IL-6) acting on ferritin gene transcription in hepatocytes and macrophages (the same pathways that drive hepcidin elevation in the [[hepcidin]]-[[ferroportin]] axis described on [[molecules/metabolites/iron]]).

**Practical consequence:** Ferritin must always be co-interpreted with inflammatory markers, particularly CRP. A ferritin of 150 ng/mL in a healthy 35-year-old woman might indicate genuinely adequate iron stores; the same ferritin in someone with CRP 15 mg/L or MAFLD on ultrasound may coexist with functional iron deficiency while appearing "normal" or even "high." This is the **functional iron deficiency trap** — iron locked in macrophages via hepcidin elevation, stores apparently normal by ferritin, but bioavailable iron inadequate.

**Ferritin/CRP co-interpretation:** The WHO recommends using ferritin and CRP together to adjust for inflammation; a commonly used correction is to apply a correction factor (~0.8–0.9 for sub-clinical inflammation) or to add ~30 ng/mL to the upper-limit diagnostic cutoff in the context of acute-phase response. These correction factors remain population-specific and imprecise. #gap/dose-response-unclear (correction factors not standardized).

### Reference ranges and the lower-threshold debate

The **historical WHO diagnostic cutoff** for iron deficiency was serum ferritin <12 µg/L (or <12 ng/mL — the units are equivalent) for non-pregnant adults and children. This threshold was chosen as a highly specific indicator of depleted stores but has very low sensitivity for iron deficiency without frank anemia [^garcia-casal2021cochrane].

The field has progressively argued for higher functional thresholds:

| Threshold | Source / Basis | Sensitivity at this cutoff | Comment |
|---|---|---|---|
| <12 µg/L | WHO (historical) | ~25–35% | Highly specific, very poor sensitivity; misses most iron-deficient-without-anemia |
| <15 µg/L | WHO (updated), HEIRS | Moderate | Improved; still misses much non-anemic ID |
| <25 µg/L | Mei 2021, Lancet Haematol (NHANES) [^mei2021lancet]; replicated internationally by Addo 2025, Lancet Glob Health (12 countries) [^addo2025lancetgh] | Better | Derived from Hb + sTfR co-depletion point; ~25 µg/L optimally predicts sTfR-confirmed iron deficiency. Addo 2025 pooled Hb-based threshold for women = 24.8 µg/L (CI 24.4–25.2), good between-country consistency |
| <30 µg/L | Cochrane 2021 [^garcia-casal2021cochrane] | 79% (non-healthy adults) | Pooled sensitivity 79% (58–91%), specificity 98% (91–100%) at 30 µg/L; best-performing single threshold across 108 studies |
| <45–50 µg/L | Emerging clinical practice (athletes, menorrhagia clinics, restless legs clinics) | High sensitivity | Argued on basis of functional symptoms resolving only at higher iron repletion; not formally standardized |

**Current status:** Iron deficiency without anemia (IDWA) — ferritin below threshold but hemoglobin above the anemia cutoff — is an **underrecognized entity** with real clinical consequences (see Women's health section). A Cochrane 2021 systematic review concluded ferritin at 30 µg/L is "reasonably sensitive (79%) and very specific (98%)" for iron deficiency in non-healthy adults; in apparently healthy adults, performance varied [^garcia-casal2021cochrane]. Barton et al. 2024 (JAMA Network Open) demonstrated that among 62,685 US and Canadian women, switching from the WHO (<15 ng/mL) to the IDE (<25 ng/mL) definition more than doubles the prevalence of identified iron deficiency (7.43% → 15.33%); in pregnant women aged 25–44, prevalence reached 36.10% using the IDE definition [^barton2024jama]. #gap/contradictory-evidence (threshold remains debated; no consensus-based clinical guideline has adopted ≥25 µg/L globally)

### Hyperferritinemia: the differential

Elevated serum ferritin (variously defined as >200 µg/L women / >300 µg/L men, or >1000 µg/L as "marked hyperferritinemia") has a broad differential:

| Cause | Mechanism | Distinguishing feature |
|---|---|---|
| Iron overload (hereditary hemochromatosis / HFE) | True iron excess → saturation of stores | High transferrin saturation (>45–55%) |
| Metabolic dysfunction-associated steatotic liver disease (MAFLD) | Hepatocyte injury + inflammation | Normal/low transferrin saturation; elevated liver enzymes |
| Inflammatory conditions / infection | Acute-phase release | Elevated CRP; often resolves with treatment |
| Malignancy (lymphoma, leukemia, solid tumors) | Tumor ferritin secretion + inflammation | Clinical context |
| Hemophagocytic lymphohistiocytosis (HLH) | Extreme macrophage activation | Ferritin >10,000 µg/L; multi-organ involvement |
| Transfusion iron loading | Exogenous iron | Transfusion history |
| Alcohol use disorder | Liver injury + increased iron absorption | Alcohol history; GGT; MCV |

The aging-relevant hyperferritinemia is predominantly **MAFLD-associated and inflammaging-driven** — a pattern where ferritin elevation reflects adipose-tissue inflammation, macrophage activation, and hepatic iron deposition, rather than true iron overload in the sense of hereditary hemochromatosis. See [[hallmarks/chronic-inflammation]].

---

## Women's health and iron across the lifespan

### Premenopausal iron deficiency: the world's most common nutritional deficiency

Iron deficiency is the single most common nutritional deficiency worldwide, and it affects premenopausal women disproportionately. The primary driver is **menstrual blood loss**: each cycle on average removes ~15–30 mg of iron #gap/unsourced (commonly cited range — Sullivan 1981 [^sullivan1981] proposed this mechanism; per-cycle figures in that era's literature have not been re-verified against primary data with modern assays). Women with heavy menstrual bleeding (menorrhagia, formally defined as blood loss >80 mL per cycle) may lose 60–100+ mg per cycle, creating iron deficits that accumulate unless replaced.

**Iron deficiency without anemia (IDWA)** is the critical underrecognized entity. It is defined as ferritin below the diagnostic threshold but hemoglobin above the anemia cutoff. IDWA causes a recognizable symptom cluster:

- **Fatigue** — the most common complaint; responds to iron repletion independent of hemoglobin. An RCT (Krayenbuehl 2011, *Blood*, n=90 non-anemic premenopausal women, ferritin ≤50 ng/mL) showed IV iron reduced fatigue by 1.8 points vs 0.4 in placebo on the Brief Fatigue Inventory (BFI, 0–10 scale) in the ferritin ≤15 ng/mL subgroup (P=0.005) [^krayenbuehl2011blood]. Effect was largest in most depleted women.
- **Cognitive impairment** — attention, processing speed, and working memory are impaired in iron-deficient non-anemic women and partially reverse with iron repletion; animal models suggest brain iron delivery is rate-limiting for these functions. #gap/needs-replication (human RCT evidence is limited; cell-line and animal models stronger)
- **Restless legs syndrome (RLS)** — iron deficiency is among the most actionable causes of RLS; serum ferritin <50 µg/L is a clinical trigger for iron repletion in RLS management regardless of hemoglobin.

The clinical implication: **a woman with ferritin of 20 ng/mL is iron-deficient by virtually any modern standard, even if her hemoglobin is 13 g/dL.** Using the old <12 ng/mL threshold misses her. See [[phenotypes/anemia-of-aging]] for the downstream consequence in older women.

**Prevalence (United States and Canada):** Using the IDE ferritin threshold (<25 ng/mL), Barton et al. 2024 found iron deficiency prevalence of 15.33% in the full study population of 62,685 women (aged ≥25, recruited 2001–2003 from US and Canadian primary care sites), rising to 21.23% in women aged 25–54 and 36.10% in pregnant women aged 25–44 [^barton2024jama]. WHO's <15 ng/mL captured only 7.43%. The approximately 2x to 5x gap in identified cases depending on race/ethnicity is clinically consequential.

### The postmenopausal ferritin rise: dual reading

After the final menstrual period, women's serum ferritin rises progressively toward male-equivalent levels over approximately 5–10 years. This is one of the most consistent endocrine-physiological transitions in women's aging, but it has **two competing interpretive framings** that are not mutually exclusive:

**Framing 1 — clinical relief of deficiency.** Many premenopausal women are chronically iron-depleted. After menopause, they for the first time accumulate iron stores adequate to support normal physiology without compensatory efforts. For a woman who spent decades at ferritin 15–25 ng/mL, rising to 80 ng/mL postmenopausally may represent normalization, not accumulation.

**Framing 2 — loss of a protective low-iron state.** The "iron hypothesis" for female longevity advantage (see [[hypotheses/female-longevity-advantage]] and [[molecules/metabolites/iron]] § iron hypothesis) proposes that premenopausal low iron confers cardiovascular and longevity benefit by reducing Fenton-reaction oxidative load. On this view, the postmenopausal ferritin rise toward male levels is one contributor to the post-menopausal acceleration in cardiovascular disease risk. Sullivan 1981 first formally proposed this framing [^sullivan1981].

**Resolution:** The two framings are not mutually exclusive. They apply to **different women on different baselines**:
- A woman who was genuinely iron-replete premenopausally (ferritin 60–80 ng/mL during heavy menstrual cycles, rare but possible) and rises to 200 ng/mL postmenopausally is accumulating iron in a potentially harmful sense.
- A woman who was chronically depleted at ferritin 15 ng/mL and rises to 80 ng/mL postmenopausally is improving her iron status, not accumulating dangerously.

The clinical lesson: postmenopausal ferritin should be monitored and interpreted in context of the individual's premenopausal baseline, not as inherently good or bad. Neither reflexive iron supplementation nor reflexive iron avoidance is warranted. The most important early postmenopausal action is to ensure the iron stores genuinely rise to adequate levels (e.g., ferritin 50–100 ng/mL), while watching for metabolic-syndrome-driven hyperferritinemia (which would be accompanied by elevated CRP, transaminases, dyslipidemia).

See [[phenotypes/menopause]] for the full endocrinological staging context.

---

## Longevity and healthy aging

### Serum ferritin and all-cause mortality: J-shaped association

Multiple large cohort analyses document a **J-shaped or U-shaped association** between serum ferritin and all-cause mortality in general and older-adult populations:

- **Very low ferritin (<12–25 ng/mL):** tracks increased mortality risk, primarily through anemia-related mechanisms (reduced oxygen delivery, frailty, immune impairment). See [[phenotypes/anemia-of-aging]].
- **Mid-range ferritin (20–100 ng/mL):** associated with lowest mortality in population analyses [^depalma2021metallomics].
- **Elevated ferritin (>200–300 ng/mL, especially >500 ng/mL):** associated with excess mortality from a complex mixture of true iron overload (hemochromatosis minority) and inflammaging / MAFLD-driven pseudohyperferritinemia (majority in older adults). The elevated ferritin in this setting is a **marker of systemic inflammation** (see [[hallmarks/chronic-inflammation]]) rather than a direct cause.

DePalma et al. 2021 (*Metallomics*) analyzed published data from the FeAST trial (VA Cooperative Study CSP 410, n=1,277 PAD patients, phlebotomy vs control) and epidemiological studies, proposing optimal ferritin for cardiovascular mortality reduction as 20–100 ng/mL; elevated IL-6 was found to track co-elevation of ferritin and mortality [^depalma2021metallomics]. This is a review/analysis piece, not an original RCT — generalisation to non-PAD populations is limited.

**Important caveat:** Most of the high-ferritin-high-mortality signal is not causal iron overload; it is confounded by inflammaging and metabolic disease. Whether reducing ferritin by phlebotomy in a patient with high ferritin from inflammation/MAFLD reduces mortality is **not established** (the intervention removes a marker, not necessarily the cause). #gap/contradictory-evidence

### Mendelian randomization evidence

MR studies on iron biomarkers and health outcomes reveal a complex picture:

**Moksnes et al. 2022 (*Communications Biology*), n up to 257,953:** Genome-wide meta-analysis across six cohorts (HUNT, MGI, SardiNIA, deCODE, Interval, DBDS) identified 123 loci associated with iron traits. Mendelian randomization showed evidence of a harmful effect of increased serum iron and transferrin saturation in linear analyses on all-cause mortality; non-linear MR found weak evidence of a protective effect of serum iron at the very low end of its distribution [^moksnes2022commsbio]. The serum iron / transferrin saturation signal is stronger than the ferritin-specific MR signal (ferritin point estimate 7% increase per SD, confidence intervals very wide). #gap/contradictory-evidence (ferritin-specific MR confidence intervals wide)

**Barad et al. 2024 (*J Am Heart Assoc*):** Genetically predicted higher iron status associated with increased risk of **cardioembolic ischemic stroke** (transferrin saturation and serum iron showed increased odds ratios); the putative coronary heart disease protection disappeared after adjusting for cardiovascular risk factors [^barad2024jaha]. Diastolic blood pressure mediated ~7–9% of the stroke effect.

**Chen et al. 2024 (*Sci Rep*):** Bidirectional MR found genetically higher ferritin associated with **lower appendicular lean mass** (a sarcopenia marker) [^chen2024scirepferritin]. This is consistent with iron accumulation → mitochondrial dysfunction → muscle atrophy, but the effect size was modest and the mechanistic chain requires further human validation. #gap/needs-replication

**Overall MR picture:** Higher circulating iron/ferritin genetically predicted = net harmful (thrombotic + metabolic + possibly muscle) but the signals are noisy and the causal chain for ferritin specifically (vs transferrin saturation or serum iron) is less cleanly resolved. Low iron = harmful by separate evidence (anemia, fatigue, cognitive). This supports the J-shaped population-level curve without providing a single clean causal MR estimate. `mr-causal-evidence: partial` reflects this.

### Ferritin, inflammaging, and metabolic syndrome

In the context of aging, elevated serum ferritin is strongly associated with the **metabolic syndrome cluster** (central adiposity, insulin resistance, dyslipidemia, non-alcoholic fatty liver disease / MAFLD). The mechanism runs primarily through adipose-tissue inflammation → IL-6 → acute-phase ferritin rise, not through true iron accumulation. Armandi et al. 2024 (*Gut*) showed in a large MAFLD cohort that serum ferritin predicted long-term liver outcomes (fibrosis, liver-related mortality) [^armandi2024gut], underscoring ferritin's role as an hepato-inflammatory biomarker.

In elderly populations, elevated ferritin is part of the broader inflammatory signature ([[hallmarks/chronic-inflammation]]) and tracks with frailty, sarcopenia risk (via the MR data above), and higher all-cause mortality [^depalma2021metallomics]. Whether ferritin-driven iron itself contributes mechanistically (via Fenton chemistry at the tissue level) versus ferritin purely as a marker is unresolved in aged humans. #gap/no-mechanism

### Ferritin and the hallmarks of aging: summary

| Hallmark | Ferritin role | Evidence quality | Notes |
|---|---|---|---|
| [[hallmarks/chronic-inflammation]] | Ferritin as acute-phase reactant; released by macrophages in IL-6-driven inflammation; elevated ferritin → diagnoses inflammaging indirectly | Strong (mechanistic); strong (observational) | Causal direction uncertain in elderly: ferritin rises BECAUSE of inflammation, not CAUSING it |
| [[hallmarks/loss-of-proteostasis]] | Impaired ferritinophagy (↓NCOA4 flux with aging) → ferritin accumulates → iron sequestered in dysfunctional storage; age-rise of neuronal FTL1 (see [[ftl1]]) | Moderate (mechanistic); limited (direct human aging data) | |
| [[hallmarks/mitochondrial-dysfunction]] | Ferritinophagy-released Fe²⁺ can impair ETC when dysregulated; very low or very high labile iron both impair mitochondrial Fe-S cluster homeostasis | Moderate (mechanistic); limited human causal | Fe-S cluster synthesis requires adequate labile iron; excess causes Fenton damage |
| [[hallmarks/cellular-senescence]] | Li 2023: NCOA4-mediated ferritin degradation → iron → cGAS-STING activation → senescence in RPE cells [^li2023ferroptosis] | Limited (in vitro / mouse model) | Emerging link; not yet in human aging tissue |

---

## Ferroptosis connection

Ferritin is a **direct suppressor of [[processes/ferroptosis]]**: by sequestering Fe²⁺ as Fe³⁺, it reduces the labile iron pool available for phospholipid peroxidation. Ferritin degradation by ferritinophagy (NCOA4-mediated) releases Fe²⁺ into the labile pool, lowering the threshold for ferroptotic execution. The interplay is:

- **High ferritin / impaired ferritinophagy** (as in aged cells) → iron sequestered but retrievable iron pool reduced → may protect short-term but impairs mitochondrial iron supply
- **NCOA4 dysregulation** (aging context: declining autophagic flux) → ferritin under-degraded in some cell types (neurons, RPE), over-degraded in others → context-dependent ferroptotic priming

The FTL1-driven neuronal aging phenotype (see [[ftl1]]) operates via ↑Fe³⁺/Fe²⁺ ratio — the opposite direction from classical ferroptotic priming (which requires ↑Fe²⁺). Both involve ferritin biology but by distinct mechanisms.

---

## Druggability and interventions

| Modality | Status | Notes |
|---|---|---|
| Small-molecule NCOA4 modulators | Preclinical | No clinical-grade probe; NCOA4-ferritinophagy axis is an emerging target for cancer and neurodegeneration |
| Iron chelators (deferoxamine, deferasirox, deferiprone) | Clinically approved for iron overload (hemochromatosis, transfusion-dependent anemia); not aging-indication | Reduce ferritin as intended clinical endpoint; deferoxamine is an indirect ferritin modulator by reducing iron load; deferiprone used in neuroferritinopathy (FTL mutations) |
| Oral / IV iron repletion | Standard of care for iron deficiency | Raises serum ferritin; most impactful in women with true low-ferritin IDWA |
| Phlebotomy | Clinically approved for hemochromatosis; phlebotomy-for-longevity studies are lacking | Reduces total body iron and ferritin; FeAST trial (n=1,277 PAD patients) analysis (DePalma 2021) suggests mortality benefit in lowest-age quartile and when MFFL<median, but no overall trial benefit; no powered aging-intervention RCT |
| Dietary iron modulation | Low-heme iron (plant-based diet), reduced red meat | Modestly reduces ferritin; observational data only; primary benefit is IDWA treatment in deficient women, not iron reduction in iron-replete subjects |

**Aging-context druggability tier: 3** — The ferritin nanocage has structural (PDB) and biochemical (IRE/IRP, NCOA4) druggable handles, but no clinical-stage compound targets ferritin biology for an aging indication.

---

## Limitations and gaps

- `#gap/needs-human-replication` — NCOA4-ferritinophagy → cGAS-STING → senescence link (Li 2023) is cellular/mouse only; not demonstrated in human aging tissue.
- `#gap/contradictory-evidence` — MR evidence on iron/ferritin and mortality is mixed: linear analyses suggest harm from high iron; non-linear analyses suggest protection at very low levels; ferritin-specific MR is less powered than serum-iron or transferrin-saturation instruments.
- `#gap/dose-response-unclear` — Optimal serum ferritin range for longevity outcomes is not established; 20–100 ng/mL proposed [^depalma2021metallomics] but derived from one PAD-population phlebotomy trial.
- `#gap/contradictory-evidence` — Iron deficiency threshold for women: WHO <12 ng/mL, Cochrane supports <30 ng/mL, Mei 2021 Lancet Haematol proposes ~25 ng/mL, clinical practice in some settings uses <50 ng/mL. No single globally adopted threshold.
- `#gap/unsourced` — Per-cycle menstrual iron loss (~15–30 mg) — commonly cited range; original Sullivan 1981 quantitative claim not re-verified against primary source with modern assays.
- `#gap/needs-replication` — Chen et al. 2024 sarcopenia MR is based on a single study (n not large; effect sizes moderate); independent replication needed.
- `#gap/long-term-unknown` — No powered RCT of iron repletion (or reduction) on aging outcomes (epigenetic age, cognitive trajectory, mortality) has been completed.
- `#gap/needs-canonical-id` — GenAge HAGR has no entry for FTH1 or FTL as of 2026-06-14; both are candidates for nomination given the Remesal 2025 (FTL1 cognitive aging) and multiple hallmark connections.

---

## Footnotes

[^theil2011review]: doi:10.1042/BJ20102021 · Theil EC · "Ferritin protein nanocages use ion channels, catalytic sites, and nucleation channels to manage iron/oxygen chemistry" · *Biochem J* 438(3):399–408 · 2011 · review · canonical structural/mechanistic review of ferritin nanocage architecture; confirmed architecture (24-subunit, 4-3-2 symmetry, ~4500 Fe atoms, pore dimensions)

[^galymuckenthaler2023]: doi:10.1038/s41580-023-00648-1 · Galy B, Conrad M, Muckenthaler M · "Mechanisms controlling cellular and systemic iron homeostasis" · *Nat Rev Mol Cell Biol* 24:287–308 · 2023 · review · 564 citations; FWCI 220.0 · covers IRE/IRP post-transcriptional regulation, ferritinophagy via NCOA4, mitochondrial iron, and aging context; closed OA; #gap/no-fulltext-access

[^li2023ferroptosis]: doi:10.1038/s41420-023-01712-7 · Li HY et al. · "Iron derived from NCOA4-mediated ferritinophagy causes cellular senescence via the cGAS-STING pathway" · *Cell Death Discovery* 9:419 · 2023 · in-vitro + in-vivo (mouse) · model: TBH-treated + FAC-treated ARPE-19 cells (RPE cell line) + D-galactose-treated C57 mice · confirms iron from NCOA4-mediated ferritinophagy activates cGAS-STING via mtDNA release from damaged mitochondria; deferoxamine (DFO) iron chelation rescues RPE senescence and D-gal retinopathy

[^garcia-casal2021cochrane]: doi:10.1002/14651858.CD011817.pub2 · Garcia-Casal MN, Pasricha SR, Martinez RX et al. · "Serum or plasma ferritin concentration as an index of iron deficiency and overload" · *Cochrane Database Syst Rev* 2021(5) · systematic review; 108 studies included; 54 citations · at 30 µg/L threshold: pooled sensitivity 79% (95% CI 58–91%), specificity 98% (95% CI 91–100%) for iron deficiency in non-healthy adults; supports 30 µg/L as best single threshold across evidence base

[^mei2021lancet]: doi:10.1016/S2352-3026(21)00168-X · Mei Z, Addo OY, Jefferds MED et al. · "Physiologically based serum ferritin thresholds for iron deficiency in children and non-pregnant women: a NHANES serial cross-sectional study" · *Lancet Haematol* 8(8):e572–e582 · 2021 · n=7,498 non-pregnant women (15–49 yr, NHANES 2003–2018) · proposes ferritin ~25 µg/L as the optimally sensitive threshold for non-pregnant women based on co-depletion with soluble transferrin receptor; hemoglobin-based threshold 25.2 µg/L (95% CI 24.2–26.2), sTfR-based 24.0 µg/L (95% CI 23.3–24.6)

[^addo2025lancetgh]: doi:10.1016/S2214-109X(25)00009-9 · Addo OY, Mei Z, Hod EA et al. · "Physiologically based serum ferritin thresholds for iron deficiency among women and children from Africa, Asia, Europe, and central America: a multinational comparative study" · *Lancet Glob Health* 13(5):e831–e842 · 2025 · multinational serial cross-sectional; n=18,251 (13,864 women) across 12 countries, 2007–2019 · pooled Hb-based ferritin threshold for non-pregnant women 24.8 µg/L (95% CI 24.4–25.2), between-country p-heterogeneity = 0.73 · replicates and internationally generalizes the Mei 2021 NHANES-derived ~25 µg/L threshold; supports (does not overturn) current wiki framing · #gap/no-fulltext-access (abstract-verified; full PDF not re-read this pass)

[^barton2024jama]: doi:10.1001/jamanetworkopen.2024.13967 · Barton JC, Wiener HW, Barton JC, Acton RT · "Prevalence of Iron Deficiency Using 3 Definitions Among Women in the US and Canada" · *JAMA Netw Open* 7(6):e2413967 · 2024 · observational cross-sectional (HEIRS Study); n=62,685 women aged ≥25 from US + Canada (recruited 2001–2003; analyzed June–December 2023) · HEIRS definition (TS<10% + SF<15 ng/mL): 3.12%; WHO (<15 ng/mL): 7.43%; IDE (<25 ng/mL): 15.33%; pregnant women aged 25–44 (n=2039): HEIRS 5.44%, WHO 18.05%, IDE 36.10% · confirms large prevalence gap depending on threshold choice

[^krayenbuehl2011blood]: doi:10.1182/blood-2011-04-346304 · Krayenbuehl PA, Battegay E, Breymann C, Furrer J, Schulthess G · "Intravenous iron for the treatment of fatigue in nonanemic, premenopausal women with low serum ferritin concentration" · *Blood* 118(12):3222–3227 · 2011 · rct; n=90 (43 IV iron, 47 placebo) · model: premenopausal women, ferritin ≤50 ng/mL, Hb ≥120 g/L (above anemia cutoff) · fatigue measured by Brief Fatigue Inventory (BFI, 0–10 scale) · whole-cohort 6-week primary endpoint: BFI −1.1 (iron) vs −0.7 (placebo), P=0.07 (ns) · subgroup ferritin ≤15 ng/mL (n=34): BFI median −1.8 vs −0.4 (P=0.005); 82% vs 47% SPI-reported improvement (P=0.03); 12-week subgroup BFI −2.3 vs −0.7 (P=0.03)

[^sullivan1981]: PMID 6112609 · Sullivan JL · "Iron and the sex difference in heart disease risk" · *Lancet* 1(8233):1293–1294 · 1981 · letter/hypothesis · original proposal linking menstrual iron loss to premenopausal cardiovascular protection; pre-DOI era; #gap/no-fulltext-access

[^depalma2021metallomics]: doi:10.1093/mtomcs/mfab030 · DePalma RG, Hayes VW, O'Leary TJ · "Optimal serum ferritin level range: iron status measure and inflammatory biomarker" · *Metallomics* 13(6):mfab030 · 2021 · review/analysis of FeAST trial data (VA CSP 410; n=1,277 PAD patients at 24 Veterans Medical Centers; phlebotomy vs control; primary outcome all-cause mortality) + epidemiological review; proposes optimal ferritin 20–100 ng/mL for cardiovascular mortality; elevated IL-6 and TNF-α track co-elevation of ferritin and mortality; reduced mortality with ferritin <100 ng/mL; NOT a new RCT; PAD population — limited generalizability to general aging population

[^moksnes2022commsbio]: doi:10.1038/s42003-022-03529-z · Moksnes MR et al. · "Genome-wide meta-analysis of iron status biomarkers and the effect of iron on all-cause mortality in HUNT" · *Commun Biol* 5(1):591 · 2022 · genome-wide meta-analysis + Mendelian randomization across six cohorts (HUNT, MGI, SardiNIA, deCODE, Interval, DBDS); n up to 257,953 · 123 loci identified; linear MR shows harmful effect of higher serum iron and TSat on all-cause mortality; non-linear MR weak evidence of protective effect of serum iron at very low end of distribution; ferritin-specific MR "very imprecise" (point estimate 7% increase/SD, CI wide); MR ferritin signal weaker than serum iron MR

[^barad2024jaha]: doi:10.1161/JAHA.124.034991 · Barad A, Clark AG, Pressman EK, O'Brien KO · "Associations Between Genetically Predicted Iron Status and Cardiovascular Disease Risk: A Mendelian Randomization Study" · *J Am Heart Assoc* 13:e034991 · 2024 · Mendelian randomization (2-sample univariate + multivariate MR); iron biomarker IVs from Moksnes 2022 GWAS meta-analysis (n=257,953); CVD outcomes from MEGASTROKE (n=406,111) and CARDIoGRAMplusC4D (n=183,305) · higher genetically predicted iron (TSat OR 1.17, 95% CI 1.03–1.33; serum iron OR 1.21, 95% CI 1.02–1.44) → increased cardioembolic ischemic stroke risk independent of CVD risk factors; DBP mediates 7.1–8.8% of stroke effect; initially apparent protective CHD/large-artery stroke effect disappeared after MVMR conditioning on CVD risk factors (all P>0.05)

[^chen2024scirepferritin]: doi:10.1038/s41598-024-60059-w · Chen H et al. · "Iron status and sarcopenia-related traits: a bi-directional Mendelian randomization study" · *Sci Rep* 14:9179 · 2024 · Mendelian randomization (bidirectional) · higher genetically predicted ferritin associated with lower appendicular lean mass (UVMR β = −0.051, 95% CI −0.072 to −0.031, p=7.3×10⁻⁷; MVMR β = −0.068, 95% CI −0.12 to −0.017); directionality supports ferritin → lower muscle mass, though mechanistic chain requires further validation

[^armandi2024gut]: doi:10.1136/gutjnl-2023-331159 · Armandi A et al. · "Serum ferritin levels can predict long-term outcomes in patients with metabolic dysfunction-associated steatotic liver disease" · *Gut* 73(3):480–488 · 2024 · observational cohort (MAFLD) · model: MAFLD patients; ferritin predicts fibrosis progression and liver-related mortality in this population; not a general-population aging study
