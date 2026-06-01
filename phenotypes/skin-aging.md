---
type: phenotype
aliases: [dermatoheliosis, photoaging, intrinsic skin aging, skin senescence, cutaneous aging]
icd-10: L57
icd-11: null
affected-tissues: ["[[skin]]", "[[dermis]]", "[[epidermis]]", "[[melanocytes]]"]
underlying-hallmarks: ["[[cellular-senescence]]", "[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]", "[[loss-of-proteostasis]]", "[[genomic-instability]]"]
typical-onset: "30s+ (clinically visible changes); biological/histological onset earlier — dermal fibroblast senescence measurable by ~25–30"
prevalence-65plus: "Universal by 65+ in sun-exposed skin; severity varies by cumulative UV dose, skin phototype, and genetics"
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Fisher 1996, Demaria 2014, Hattori 2004, Velarde 2012, Krutmann 2017 verified against primary source PDFs. Purohit 2016 (corrected DOI 10.1016/j.jdermsci.2016.04.004) and Kovacs 2010 (10.1111/j.1365-2133.2010.09946.x) unverifiable — not_oa; tagged accordingly. Fisher 2009 and Sumita 2018 not independently verified (not in scope for this pass). Canonical-database identity fields not applicable to this phenotype page. ADDENDUM 2026-05-27: Sun 2025 (HYAL2 skin RNAi proof-of-concept, PMID 40365494/PMC12069053) added — new '### Hyaluronan turnover and the HYAL2 axis' subsection + therapeutic-landscape pointer; PDF cross-checked 2026-05-27 — accurate; HA-direction contradictory-evidence framing confirmed as fairly stated (Sun 2025 mouse UVB = HA decreases; human solar-elastosis literature = HA accumulates; species/compartment/measurement confound noted). Acute UVB dose corrected in footnote to '300 mJ/cm² total over 5 days' (not per-day). No corrections to body text required."
---

# Skin Aging

The progressive, multi-mechanism deterioration of skin structure and function with age. Clinically expressed as inelasticity, wrinkles (rhytides), epidermal/dermal atrophy (skin thinness), and focal hyperpigmentation (solar lentigines). Skin aging is universally present in aged humans but varies dramatically between individuals depending on the ratio of intrinsic (chronological) to extrinsic (UV-driven) aging. The two processes have distinct histopathology and partially distinct mechanisms, though they share downstream effectors (MMP-mediated matrix degradation, fibroblast senescence).

**ICD note:** ICD-10 splits by aetiology. Photoaging/chronic UV damage is coded under L57 (actinic keratosis L57.0, cutis rhomboidalis nuchae L57.2, farmer's/sailor's skin L57.4, poikiloderma of Civatte L57.5, etc.) — this is the `icd-10` field value used here, as it is the most commonly cited code in aging research. Intrinsic atrophic changes fall under L90.x; no single umbrella code covers both processes. This page covers the umbrella phenotype; L57 was chosen as the best single-code fit.

---

## Sub-phenotypes at a glance

| Sub-phenotype | Primary aetiology | Histological signature | Gross appearance |
|---|---|---|---|
| **Inelasticity** | Elastin degradation + collagen I fragmentation | Fragmented, tortuous elastic fibres (intrinsic); solar elastosis — basophilic amorphous deposits (photoaged) | Loss of snap-back on pinching; sagging, jowling |
| **Wrinkles (rhytides)** | MMP-driven collagen fragmentation → reduced mechanical support | Thinned dermis; disrupted collagen bundle architecture | Fine lines (superficial, papillary dermis) and deep furrows (reticular dermis) |
| **Skin thinness** | Reduced epidermal turnover + dermal fibroblast atrophy | Flattened rete ridges; reduced epidermal layers; sparse dermal fibroblasts | Fragile, translucent skin; easy bruising (senile purpura); delayed wound healing |
| **Solar lentigines** | Focal melanocyte proliferation + SCF paracrine signalling from UV-activated epidermal keratinocytes (membrane-bound SCF, 3.9-fold mRNA increase) [^hattori2004]; ET-1/ET_B cascade acts synergistically | Elongated rete ridges at lentigo borders; increased melanocyte number in lesion basal layer; not melanocyte hypertrophy | Flat, sharply demarcated brown macules on sun-exposed skin; "liver spots" / "age spots" |

---

## Intrinsic vs photoaging — distinguishing features

| Feature | Intrinsic (chronological) | Photoaging (extrinsic, UV-driven) |
|---|---|---|
| Primary driver | Time + endogenous ROS, telomere attrition | Cumulative UVA/UVB; additional exposome contributions from visible light, infrared radiation, air pollution (PM, NO₂, ozone), tobacco smoke, nutrition, stress, sleep deprivation, and temperature [^krutmann2017] |
| Affected sites | Photoprotected skin (buttocks, inner arm) | Face, dorsal hands, forearms, décolletage |
| Epidermal change | Mild thinning; flattening of rete ridges | Irregular thickening + thinning; keratinocyte atypia in severe disease |
| Dermal elastin | Progressive loss, fibres become sparse and fine | Solar elastosis — massive accumulation of abnormal amorphous elastin in papillary/upper reticular dermis |
| Collagen status | Gradual reduction in collagen I:III ratio (~30% loss by 80s); collagen I declines relative to III | Accelerated fragmentation; MMP-1 (collagenase-1) strongly upregulated by UV-AP-1 axis [^fisher1996] |
| Sebaceous glands | Preserved or mildly reduced | Often enlarged (Favre-Racouchot comedones in severe cases) |
| Pigmentation | Even loss of melanocytes; slight pallor | Focal melanocyte proliferation → solar lentigines; background uneven pigmentation |
| Fibroblast phenotype | Replicative senescence; reduced collagen synthesis | Both replicative and stress-induced premature senescence (SIPS); SASP-driven local inflammation |
| Typical onset of clinical changes | ~40–50 in unexposed skin | ~30+ depending on skin phototype and cumulative exposure |

---

## Histology in detail

### Epidermal changes (common to both types, accelerated by UV)

- **Flattening of rete ridges:** the epidermal-dermal junction loses its undulating interdigitation with age. Rete ridge flattening reduces the contact area between epidermis and dermis, reducing mechanical adhesion and nutrient exchange. This contributes to easy tearing and blister formation. #gap/needs-human-replication for the causal link between rete ridge loss and clinical fragility
- **Reduced epidermal turnover:** basal keratinocyte proliferation slows (~30–50% reduction in turnover rate by age 70 vs 20s). Epidermal renewal time increases from ~20 days (young adult) to ~30–35 days in older adults. #gap/unsourced — turnover rate figures are widely cited in textbooks; primary source needed
- **Epidermal stem cell depletion:** the basal-layer population of epidermal stem cells declines, a manifestation of [[stem-cell-exhaustion]] in the skin compartment.

### Dermal changes

**Collagen remodelling and fragmentation.** Collagen I and III account for ~75% of dry dermal weight (Shin 2019 estimate). With age, total collagen content falls (the widely-cited "~1% per year of adulthood" figure originates with Shuster 1975 and is reiterated by Varani 2006 — it is **not** in Fisher 2009 as previously attributed on this page; #gap/unsourced pending primary-source verification of the per-decade rate against a modern cohort) and the collagen I:III ratio shifts toward III. Fragmentation is driven by MMP-1 (collagenase-1, the central effector per Fisher 2009 — ~8-fold mRNA elevation in aged dermis), with MMP-3 and MMP-9 acting as secondary processors of MMP-1 cleavage products rather than independently demonstrated co-drivers of the feedback loop in Fisher 2009 [^fisher2009]. The fragmented collagen matrix creates a positive-feedback loop: mechanically unsupported fibroblasts lose cytoskeletal tension (via c-Jun/AP-1 + α2β1 integrin axis per Fisher 2009; YAP/TAZ mechano-sequestration is a later-published mechanism not in Fisher 2009 itself), which further reduces collagen synthesis and elevates MMP-1 [^fisher2009].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MMP-collagen axis is human in-vivo data |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — multiple independent cohorts |

**Solar elastosis.** In photoaged skin, UV-damaged elastic fibres accumulate as cross-linked, amorphous basophilic deposits in the papillary and upper reticular dermis (von Kossa, Verhoeff–van Gieson staining). This is distinct from the elastic fibre loss of intrinsic aging: solar elastosis represents aberrant synthesis of elastin and fibrillin-1 by UV-activated fibroblasts, not degradation per se. #gap/no-mechanism — the initiating signal for aberrant elastin secretion vs. degradation in the same UV-exposed fibroblast is not fully resolved.

**Fibroblast senescence accumulation.** p16^INK4a-positive senescent fibroblasts accumulate in the dermis with age. The SASP of these cells includes IL-1α, IL-6, IL-8, and MMPs, amplifying local inflammation ([[chronic-inflammation]]) and matrix breakdown. SOD2-null mouse models (Sod2-/- on CD1 background, maintained with EUK-189 antioxidant mimetic) demonstrate that mitochondrial oxidative damage is sufficient to drive cellular senescence (p16^INK4a elevated ~2-fold) and epidermal thinning in vivo [^velarde2012]. The predominant senescent cell type in this model is epidermal (stratum corneum thickens, viable epidermal layer thins); the phenotype is not primarily one of fibroblast senescence. Rotenone-induced mitochondrial complex I inhibition also drives senescence in cultured human keratinocytes and fibroblasts, with keratinocytes more sensitive than fibroblasts [^velarde2012]. #gap/needs-human-replication — the SOD2 model is murine; quantitative SASP contribution in human dermis is estimated but not directly measured.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — SASP components identical in human and mouse dermal fibroblasts |
| Phenotype conserved in humans? | yes — p16+ dermal fibroblasts documented in human aged/photoaged skin |
| Replicated in humans? | in-progress — human senolytic trials ongoing |

### Hyaluronan turnover and the HYAL2 axis

Hyaluronan (HA) is the dominant glycosaminoglycan of the dermal ground substance (skin holds ~50% of body HA), and its aging biology is **molecular-weight-dependent**: high-MW HA is anti-inflammatory/cytoprotective while low-MW HA fragments are pro-inflammatory (TLR2/4 → NF-κB) — full mechanism on [[hyaluronic-acid]]. [[hyal2]] (hyaluronidase-2) is the GPI-anchored cell-surface enzyme that performs the *initial* cleavage of HMW-HA, and it is significantly upregulated in UVB-irradiated mouse dorsal skin [^sun2025].

**Direction of HA change in photoaging is unresolved.** The solar-elastosis literature describes abnormal HA *accumulation* in photoaged human dermis (see § Dermal changes above), whereas UVB mouse models report a *reduction* in HA with dehydration [^sun2025]. #gap/contradictory-evidence — the discrepancy likely reflects species, dermal compartment (papillary elastotic deposits vs. whole-dermis content), and HA-MW-distribution vs. total-HA-quantity measurement differences. This mirrors the intrinsic-aging picture on [[dermis]], where total HA quantity is not clearly reduced but HA-binding-protein (HABP) signalling declines (Shin 2019).

As a proof-of-concept, knocking down HYAL2 in mouse skin — via engineered human adipose-derived stem cells (ADSCs) secreting HYAL2-targeting siRNA in extracellular vesicles — restored HA and water content, improved elasticity, reduced wrinkle scores, and restored epidermal/dermal thickness in both acute-UVB and chronic-photoaging models [^sun2025]. This is the **first in-vivo demonstration that reducing hyaluronidase activity improves skin-aging endpoints**, but it is mouse-only (n=3), an RNAi cell therapy rather than a pharmacological HYAL inhibitor, and presents no human-skin HYAL2 data. It does not establish that small-molecule hyaluronidase inhibitors (e.g., the broad, non-selective in-vitro inhibition by [[escin]] or flavonoids) slow human skin aging. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway (HYAL2 → HA-MW balance) conserved in humans? | partial — MW-dependent HA biology is human; HYAL2 upregulation shown only in mouse UVB skin |
| Phenotype (HYAL2 inhibition improves skin aging) conserved in humans? | unknown — never measured in human skin |
| Replicated in humans? | no — single mouse study; modality is RNAi cell therapy, not a HYAL inhibitor |

---

## Mechanism by hallmark

### Cellular senescence — fibroblast p16+ accumulation

Dermal fibroblasts are the most-studied senescent population in skin. Both UV-induced DNA damage (SIPS) and replicative exhaustion converge on p21^CIP1 → p16^INK4a-mediated G1 arrest. Once senescent, fibroblasts:
- Sharply reduce collagen I and III synthesis
- Upregulate MMP-1, MMP-3, MMP-9 (SASP-associated)
- Secrete IL-6, IL-8, and CXCL1, maintaining a low-grade pro-inflammatory state

Senescent fibroblasts also play a functional role: transient senescence during wound healing is beneficial (PDGF-AA secretion drives myofibroblast differentiation, promoting wound contraction and granulation tissue formation) [^demaria2014]. Genetic or pharmacological elimination of senescent cells before or during wounding significantly delays wound closure (peak delay at day 6 in p16-3MR mice treated with GCV); topical recombinant PDGF-AA rescues this delay [^demaria2014]. Persistent, age-accumulated senescence becomes pathological when clearance mechanisms (NK cell + macrophage surveillance) decline. This illustrates the antagonistic-pleiotropy principle for cellular senescence — see [[cellular-senescence]].

### Genomic instability — UV → DNA damage → p53 activation

UV radiation induces cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts in epidermal keratinocytes and dermal fibroblasts. Single-dose UVB rapidly activates the transcription factors AP-1 (Jun/Fos family) and NF-κB (Rel family) in human skin in vivo, which transcriptionally upregulate MMP-1 (interstitial collagenase), MMP-3 (stromelysin I), and MMP-9 (92K gelatinase) [^fisher1996]. MMP-2 (72K gelatinase) is not induced by UVB. This AP-1/NF-κB-MMP axis is the central molecular mechanism connecting UV exposure to collagen destruction. Both transcription factors are induced at sub-erythemogenic doses (as low as 0.01 MED), well below doses that cause visible skin reddening [^fisher1996].

All-trans retinoic acid (t-RA/tretinoin), applied prior to UV exposure, substantially reduces MMP induction in vivo: AP-1 DNA binding is reduced ~70%, and MMP-1 and MMP-9 mRNAs, proteins, and enzymatic activities are reduced by 50–80% [^fisher1996]. The mechanism is transrepression — t-RA receptor complexes interact directly with Jun/Fos proteins, inhibiting AP-1 transactivation. TIMP-1 induction and CBP/p300 competition are not described in this paper as the mechanism [^fisher1996].

### Loss of proteostasis — collagen synthesis/degradation imbalance

The collagen synthesis/degradation balance shifts with age due to:
1. Reduced TGF-β/Smad3-driven collagen I transcription in aged fibroblasts [^purohit2016] #gap/needs-replication #gap/no-fulltext-access
2. Elevated basal MMP-1 driven by collagen fragment-mediated oxidative stress [^fisher2009]
3. Decreased cross-linking enzyme (LOX) activity reducing collagen fibril stability #gap/unsourced

### Stem cell exhaustion — epidermal renewal and hair follicle bulge

Epidermal stem cells (residing in the basal layer and hair follicle bulge) decline in number and regenerative capacity. This underlies reduced wound healing efficiency, epidermal thinning, and graying (see [[hair-greying]] — planned page). The mechanism involves DNA damage accumulation, Wnt pathway attenuation, and niche changes.

### Epigenetic alterations — skin-specific epigenetic clocks

The skin has an epigenetic aging signature detectable by DNA methylation clocks. The pan-tissue [[biomarkers/horvath-clock-2013]] (verified) calibrates against skin among its 51 reference tissues, but tissue-specific epidermis clocks now exist and outperform pan-tissue clocks on tape-strip / epidermal-sheet samples:

| Clock | Year | Trained on | MAE (years) | Notes |
|---|---|---|---|---|
| Horvath 2013 (pan-tissue) | 2013 | 7,844 samples / 51 tissues | 3.6 (held-out) | First-generation; calibrated across many tissues including skin [^horvath2013] |
| Bormann epidermis clock | 2016 | 108 white females (450k array), ages 18–78 | first skin clock | Foundational tissue-specific clock; trained on epidermis [^bormann2016] |
| Qi 23k clock | 2026 | Bormann 2016 cohort + 23,845 27k/450k-shared probes; 173 CpGs | **5.66** (CV); **4.88** (multi-ethnic validation) | First skin clock validated cross-Fitzpatrick (I–VI) without ethnic bias [^qi2026] |
| TapeLift clock | 2026 | Tape-strip samples | not extracted | Independent comparator; also no non-white bias in Qi 2026 validation [^rodriguezParedes2026] |

**Bivalent-region hypermethylation is a conserved skin-aging signature.** In a cross-ethnic pilot (n=17, ages 24–69, all Fitzpatrick phototypes), age-correlated hypermethylated CpGs are enriched in bivalent chromatin regions (H3K4me3 + H3K27me3 — typically poised developmental enhancers) and the pattern is conserved across phototypes [^qi2026]. The hypermethylated genes are described as essential for keratinocyte vitality and longevity (specific gene list in the supplementary; not yet extracted to this wiki).

**UV-exposed vs UV-unexposed clock acceleration in matched skin** is widely claimed in narrative reviews but the specific quantitative comparison is not directly addressed in Qi 2026; the original gap framing "UV accelerates the keratinocyte clock above chronological age" remains under-sourced. #gap/needs-replication — needs a paired-anatomic-site study (e.g., dorsal forearm vs buttock in the same individual, multiple ages) explicitly quantifying clock acceleration. The Qi 2026 paper is suggestive (cross-ethnic conservation argues against population-specific artefact) but not direct evidence.

---

## Solar lentigines — mechanism

Solar lentigines (syn. lentigo senilis, liver spots, age spots) are the most common pigmented lesion in skin over age 40, present in >90% of Caucasians over age 60 on sun-exposed areas. They are benign but clinically important as markers of cumulative UV damage and are associated with a modestly increased risk of skin cancer at the same site.

**Mechanism:**
1. Chronic UV exposure causes epidermal keratinocytes (not dermal fibroblasts) to upregulate expression of membrane-bound SCF (stem cell factor / KITLG) in the lesional epidermis — average 3.9-fold mRNA increase (n=7, p<0.01) and 1.6-fold protein increase (membrane-bound form, n=6, p<0.05) in LS lesions vs. perilesional normal skin [^hattori2004]. Soluble SCF is not detected in LS epidermis; only the membrane-bound isoform is elevated.
2. GROα (a post-inflammatory keratinocyte-derived mitogen) shows no significant difference between LS lesional and non-lesional epidermis (1.13-fold, n=4, NS) [^hattori2004]. bFGF immunostaining is likewise not significantly elevated in LS lesional epidermis (n=10, NS) [^hattori2004]. The wiki's earlier claim that bFGF is a co-driver from fibroblasts is not supported by this paper.
3. Membrane-bound SCF on keratinocytes activates the KIT receptor on neighbouring melanocytes, driving focal melanocyte proliferation and melanogenesis — not melanocyte hypertrophy.
4. This occurs alongside a concomitant upregulation of the ET-1/ET_B receptor cascade, which acts synergistically with SCF/KIT to drive melanocyte activation [^hattori2004].
5. Melanocytes proliferate and produce excess melanin → focal hyperpigmentation overlying the lentigo.

Solar lentigines thus represent a paracrine interaction between UV-activated epidermal keratinocytes and neighbouring melanocytes — the SCF signal is epidermal, not dermal. #gap/needs-replication for the SCF-dominant model relative to the ET-1 pathway; relative contribution of each axis in human lesions is not fully resolved.

Note on bFGF: Kovacs 2010 [^kovacs2010] reports fibroblast-derived bFGF as a co-regulator in a fibroblast conditioned media / melanocyte coculture model; this is a distinct experimental system from the in vivo human lesion data in Hattori 2004. The two papers are complementary but describe different compartments (dermis vs. epidermis). See #gap/contradictory-evidence for the relative contribution of epidermal vs. dermal signals to LS pathogenesis.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — SCF/KIT is human primary tissue data |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — multiple independent histological studies |

---

## Hair greying note

Hair greying (canities) is a closely related aging phenotype driven by melanocyte stem cell (McSC) depletion in the hair follicle bulge — distinct from solar lentigines but overlapping in upstream mechanisms (UV, DNA damage, stem cell exhaustion). See [[hair-greying]] (planned page; cross-link pending). The McSC depletion model has strong mouse genetic support and emerging human relevance.

---

## Therapeutic landscape

### Prevention — UV protection

Broad-spectrum sunscreen (UVA+UVB, SPF 30+) is the single best-evidenced intervention against photoaging. Reduces CPD formation, attenuates AP-1-MMP-1 cascade, and slows solar lentigo development. Evidence is primarily observational/epidemiological; RCT evidence for wrinkle prevention is limited by design challenges. #gap/long-term-unknown — lifelong randomised data do not exist.

### Retinoids — topical retinoic acid

Topical tretinoin (all-trans-retinoic acid) is the best-characterised pharmacological anti-aging therapy for skin. Mechanism: AP-1 transrepression (reduces UVB-induced MMP-1, MMP-3, MMP-9 mRNA and activity by 50–80%) [^fisher1996]; direct collagen I and III synthesis stimulation (via RAR-β) is described in downstream literature but not in Fisher 1996. #gap/needs-replication for the collagen-synthesis-stimulation claim via a dedicated primary source. Clinical effects: reduced fine lines, evening of pigmentation (including lentigines), improved tactile texture. Both tretinoin cream (0.025–0.1%) and higher-concentration peels show efficacy in photoaged skin [^sumita2018]. Retinol (weaker, OTC) shows parity with tretinoin on some endpoints with better tolerability.

### Senolytics — clearing p16+ fibroblasts

Dasatinib + quercetin (D+Q) and fisetin are the leading senolytic combinations in preclinical research. Senescent cell clearance in mouse models shows improved wound healing [^demaria2014] and dermal collagen preservation (indirectly, through SASP reduction). Human skin-specific senolytic trials are limited. #gap/needs-human-replication — senolytic-specific skin aging RCTs are not yet published as of 2026.

Relevant cross-links: [[fisetin]], [[quercetin]], [[dasatinib]], [[senolytics]].

### Topical DNMT-inhibitors — cosmetic-grade epigenetic-readout signal (Qi 2026)

A topical serum containing **dihydromyricetin (DHM, ampelopsin)** — characterised in vitro as a DNA methyltransferase inhibitor — applied twice daily for 8 weeks reduced the Qi 23k epidermis-clock DNAm age by ~2.1 yr (paired Wilcoxon p=0.029, n=60 Brazilian volunteers, ages 40–70, all Fitzpatrick phototypes) with concomitant 13.9% wrinkle reduction and 10.4% dermal echogenicity increase [^qi2026]. The serum also contained low/high-MW hyaluronic acid, glycine saponin, and enoxolone, and was co-applied with SPF 50+ sunscreen — i.e., the DHM contribution cannot be isolated from the formulation as a whole. **The product-use study had no vehicle-controlled or placebo arm**, was open-label, and was Beiersdorf-funded. The signal is positive but cosmetic-grade rather than aging-RCT-grade; treat as hypothesis-generating. #gap/needs-replication — vehicle-controlled, blinded, randomized replication is the next required experiment. See [[studies/qi-2026-dhm-epigenetic-skin-aging]] for full extraction.

### Hyaluronidase (HYAL2) inhibition — emerging, preclinical only

Reducing HA degradation (rather than topping up HA) is a distinct strategy: a 2025 mouse study restored skin HA/water content and reduced wrinkles by knocking down [[hyal2]] via engineered ADSC-secreted siRNA [^sun2025] (see § Hyaluronan turnover and the HYAL2 axis). No selective small-molecule HYAL inhibitor validated for skin aging exists as of 2026; the anti-hyaluronidase activity reported for many cosmetic botanicals and for [[escin]] is in-vitro enzyme-assay screening, not clinical skin-aging evidence. #gap/needs-human-replication

### Interventional aesthetics (not pharmacological aging reversal)

- **Laser resurfacing, IPL:** ablative/non-ablative stimulation of collagen neosynthesis; primarily reduces wrinkles and lentigines; mechanism is wounding response, not aging-hallmark targeting. Outside scope of this page.
- **Topical antioxidants (vitamin C, vitamin E, niacinamide):** reduce UV-induced ROS; limited clinical trial evidence for wrinkle reversal; strong evidence for pigmentation reduction (niacinamide inhibits melanin transfer). #gap/dose-response-unclear

---

## Limitations and gaps

- **Intrinsic vs photoaging separation:** in human studies, fully UV-naive aged skin (e.g., buttocks biopsies) is rarely available at the scale needed for robust mechanistic comparison. Much "intrinsic aging" data is extrapolated from in vitro fibroblast senescence models.
- **Fibroblast senescence → clinical phenotype causality:** quantitative estimates of how much of the wrinkle or skin-thinness phenotype is directly attributable to fibroblast SASP vs. other mechanisms (mechanical load, hormonal decline, immune changes) are unknown. #gap/no-mechanism
- **Solar lentigo molecular heterogeneity:** not all solar lentigines are histologically identical; a subset show features overlapping with early seborrhoeic keratosis. Whether these represent a continuum or distinct entities is debated. #gap/contradictory-evidence
- **Senolytic RCTs in skin:** the senolytic field is focused on systemic/organismal endpoints; skin-specific aging endpoints have not been preregistered primary outcomes in any published senolytic RCT. #gap/needs-human-replication
- **Epigenetic clock in skin vs systemic age:** the degree to which skin-localised epigenetic aging (e.g., UV-driven) feeds back into systemic aging biology is unknown. #gap/no-mechanism
- **Hair greying cross-link:** [[hair-greying]] page does not yet exist; McSC biology should be covered there.

---

## Footnotes

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · doi:10.1038/379335a0 · Fisher GJ et al. · in-vivo · Nature 1996;379:335-339 · n=6–17 per timepoint (mRNA); n=9–10 (AP-1/NF-κB binding, protein, activity) · p<0.05 (MMP induction; two-tailed paired t-test) · model: adult Caucasian human buttock skin irradiated in vivo with 2 MED UVB; skin biopsies at multiple timepoints · Demonstrates that sub-erythemogenic UVB (as low as 0.01 MED) activates AP-1 (Jun/Fos) and NF-κB, transcriptionally upregulating MMP-1 (interstitial collagenase), MMP-3 (stromelysin I), and MMP-9 (92K gelatinase); MMP-2 (72K gelatinase) is NOT induced; all-trans retinoic acid pretreatment reduces AP-1 binding by ~70% and MMP-1/MMP-9 mRNA/protein/activity by 50–80% via AP-1 transrepression (Jun/Fos–receptor protein interaction), not CBP/p300 competition or TIMP-1 induction

[^fisher2009]: [[studies/fisher-2009-collagen-fragmentation-mmp]] · doi:10.2353/ajpath.2009.080599 · Fisher GJ et al. · in-vivo + in-vitro · Am J Pathol 2009;174(1):101-114 · model: aged human skin biopsies + cultured human dermal fibroblasts on fragmented vs. intact collagen matrices · Collagen fragment-induced oxidative stress elevates MMP-1 and reduces collagen synthesis in fibroblasts; creates a self-amplifying degradation cycle in aged dermis

[^velarde2012]: [[studies/velarde-2012-mitochondria-skin-senescence]] · doi:10.18632/aging.100423 · Velarde MC et al. · in-vivo + in-vitro · Aging 2012;4(1):3-12 · n=6–13 per age group (WT); n=8–9 (Sod2-/-) · model: Sod2-/- (homozygous null, CD1 background, EUK-189 maintained) mouse skin + cultured human keratinocytes/fibroblasts (rotenone) · Mitochondrial oxidative damage from complete SOD2 deficiency drives cellular senescence (p16^INK4a ~2-fold elevated), epidermal thinning, and increased stratum corneum thickness; not described as causing wrinkled appearance; human keratinocytes more sensitive to rotenone-induced senescence than fibroblasts #gap/needs-human-replication

[^demaria2014]: [[studies/demaria-2014-senescent-cells-wound-healing]] · doi:10.1016/j.devcel.2014.11.012 · Demaria M et al. · in-vivo + in-vitro · Dev Cell 2014;31(6):722-733 · n≥4 per group (wound healing); n=3–5 for molecular assays · model: p16-3MR transgenic mouse (6mm punch biopsy to dorsal flank) + p16/p21 DKO mice + primary mouse skin fibroblasts/endothelial cells · Senescent fibroblasts and endothelial cells transiently appear at wound sites and secrete PDGF-AA (a SASP factor), which drives myofibroblast differentiation and optimal granulation tissue formation; GCV-mediated senescent cell elimination delays wound closure (peak delay day 6); topical recombinant PDGF-AA rescues this delay; senescent cells do NOT drive wound closure via contraction directly

[^krutmann2017]: [[studies/krutmann-2017-skin-aging-exposome]] · doi:10.1016/j.jdermsci.2016.09.015 · Krutmann J et al. · review · J Dermatol Sci 2017;85(3):152-161 · Defines the skin aging exposome as: solar radiation (UV, visible light, infrared), air pollution, tobacco smoking, nutrition, and miscellaneous factors (stress, sleep deprivation, temperature, cosmetics); emphasises exposome factor interactions and cumulative net effect on skin aging; advocates daily broad-spectrum UVA+UVB sunscreen as the best-evidenced protective intervention

[^hattori2004]: [[studies/hattori-2004-scf-solar-lentigo]] · doi:10.1111/j.0022-202x.2004.22503.x · Hattori H et al. · in-vivo · J Invest Dermatol 2004;122(5):1256-1265 · n=7 (SCF mRNA RT-PCR), n=6 (SCF western blot), n=10 (GROα and bFGF IHC) · p<0.01 (SCF mRNA), p<0.05 (SCF protein) · model: 29 Japanese patients with lentigo senilis (LS); epidermal sheets separated from dermis for RNA/protein analysis · SCF mRNA is 3.9-fold elevated and membrane-bound SCF protein 1.6-fold elevated in LS lesional epidermis (keratinocytes) vs. perilesional normal skin; GROα (1.13-fold, NS) and bFGF (NS by IHC) are NOT elevated; the SCF source is epidermal keratinocytes, not dermal fibroblasts; ET-1/ET_B cascade also upregulated concomitantly and acts synergistically with SCF/KIT

[^kovacs2010]: [[studies/kovacs-2010-fibroblast-solar-lentigo]] · doi:10.1111/j.1365-2133.2010.09946.x · Kovacs D et al. · in-vitro · Br J Dermatol 2010;163(5):1020-1027 · model: human dermal fibroblasts (photoaged in vitro) + IHC on human SL tissue sections · HGF, KGF (FGF-7), and SCF are elevated in the upper dermis of SL lesions and upregulated in photoaged fibroblasts; KGF acts on keratinocytes to induce SCF expression, establishing an indirect dermal→epidermal→melanocyte relay · not_oa — closed access; quantitative claims (n, fold-changes, p-values) not recoverable from abstract #gap/no-fulltext-access. Note: dermal fibroblast compartment — complements Hattori 2004 (epidermal keratinocyte SCF, in vivo). Corrected 2026-05-19: prior entry incorrectly named "bFGF and SCF"; PubMed abstract (PMID 20662835) confirms factors are HGF, KGF (FGF-7), and SCF (bFGF/FGF-2 is a distinct FGF family member not present in this paper)

[^purohit2016]: [[studies/purohit-2016-smad3-fibroblasts]] · PMID 27132061 · doi:10.1016/j.jdermsci.2016.04.004 · Purohit T, He T, Qin Z, Li T, Fisher GJ, Yan Y, Voorhees JJ, Quan T · in-vitro · J Dermatol Sci 2016;83(1):80-83 · model: human dermal fibroblasts, young vs. aged · Letter · volume/issue/pages confirmed via PubMed efetch + Crossref (2026-05-19); paper is closed-access (not_oa per a local paper archive) — content cannot be verified against PDF. Smad3 protein levels decline in aged fibroblasts, reducing collagen I transcription; partial rescue by Smad3 overexpression #gap/needs-replication #gap/no-fulltext-access — do not rely on this citation's quantitative claims until PDF access available

[^sumita2018]: [[studies/sumita-2018-tretinoin-photoaging]] · doi:10.1111/jdv.15020 · Sumita JM et al. · rct · J Eur Acad Dermatol Venereol 2018;32(10):1819-1826 · n=24 women enrolled (23 per-protocol; 1 dropout); 48 forearms bilateral within-person design · randomized, evaluator-blinded · Both 0.05% tretinoin cream and 5% tretinoin peel reduce photoaging scores ~20% and actinic keratosis by ~60% vs. baseline (no between-arm difference); cream superior on ultrasonographic markers; peel better for field cancerization · closed-access (not_oa) · corrected 2026-05-19: prior footnote had n=60 and pages 1734-1741, both wrong for this DOI

[^horvath2013]: [[studies/horvath-2013-epigenetic-clock]] · doi:10.1186/gb-2013-14-10-r115 · Horvath S · Genome Biol 2013;14:R115 · n=7,844 non-cancer samples / 82 GEO datasets / 51 tissues · pan-tissue first-generation methylation clock, MAE 3.6 yr held-out · open-access; verified

[^qi2026]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · doi:10.1007/s13555-026-01764-4 · Qi M et al. · Dermatol Ther 2026 · two-part study: pilot methylome n=17 (multi-ethnic, ages 24–69, tape-strip epidermis) + product-use n=60 (Brazilian, ages 40–70, all Fitzpatrick I–VI, 8-wk twice-daily DHM-containing serum + SPF 50+, single-cohort open-label, NO vehicle control) · key findings: bivalent-region hypermethylation conserved cross-ethnicity; new 23k epidermis clock (CV MAE 5.66 yr / multi-ethnic MAE 4.88 yr / no Fitzpatrick bias); DHM serum reduced epidermal DNAm age by ~2.1 yr (paired Wilcoxon p=0.029) with wrinkle −13.9% and echogenicity +10.4% · Beiersdorf-funded; verified=false (auto-extracted from open-access HTML, full PDF not yet read) · CC BY-NC 4.0

[^bormann2016]: Bormann F et al. · 2016 · first DNA methylation clock for human epidermis (450k array, n=108 white females ages 18–78) · cited from Qi 2026; primary source not yet retrieved · #gap/needs-pdf-verification — full DOI/journal pending Qi 2026 reference-list cross-check

[^rodriguezParedes2026]: [[studies/rodriguez-paredes-2026-tapelift-clock]] · doi:10.1038/s41698-026-01302-7 · Rodríguez-Paredes M et al. · npj Precision Oncology · 2026 · observational · n=105 enrolled (89 passed two-stage QC) · elastic-net clock (157 CpGs, RMSE 5.8 yr internal validation) + PC clock (5,021 CpGs, RMSE 4.3 yr) · **Caucasian-only training cohort (Fitzpatrick I–IV)**; "no non-white bias" property derives from Qi 2026 external cross-ethnic validation (n=17), NOT from this paper · Beiersdorf AG/DKFZ collaboration; patent applications filed for TapeLift method · verified=true (PDF read 2026-05-19)

[^sun2025]: doi:10.3389/fmed.2025.1529936 · Sun B, He Y, Zhang L et al. · *Front Med (Lausanne)* 2025;12:1529936 · in-vivo (mouse) + in-vitro · n=3 per group · model: BALB/c nude female 6-wk mice — acute UVB (300 mJ/cm² total over 5 days; 5 MEDs at 100 µW/cm²) + 10-wk chronic photoaging (two-phase: 120 mJ/cm²/wk × 4 wk, then 180 mJ/cm²/wk × 6 wk; 130 MED total); intervention = engineered human ADSCs secreting HYAL2-targeting siRNA via small extracellular vesicles (subcutaneous, 1×10⁶ cells) · HYAL2 upregulated by UVB in mouse dorsal skin; HYAL2 knockdown restored HA + water content, elasticity, epidermal/dermal thickness, reduced wrinkle scores (p<0.05–0.01, one-way ANOVA); paper states HA *decreases* with UV/photoaging; no human-skin HYAL2 data · PMID 40365494 · PMC12069053 (gold OA; PDF verified end-to-end 2026-05-27)
