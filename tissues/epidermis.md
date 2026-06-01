---
type: tissue
aliases: [epidermal layer, stratum epidermidis, keratinocyte layer]
parent-system: integumentary-system
key-cell-types: ["[[keratinocytes]]", "[[melanocytes]]", "[[langerhans-cells]]"]
key-aging-phenotypes: ["[[skin-aging]]"]
related-hallmarks: ["[[stem-cell-exhaustion]]", "[[genomic-instability]]", "[[epigenetic-alterations]]", "[[cellular-senescence]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Fisher 1996 (doi:10.1038/379335a0), Velarde 2012 (doi:10.18632/aging.100423), and Hattori 2004 (doi:10.1111/j.0022-202x.2004.22503.x) verified against primary source PDFs — all quantitative claims confirmed. Grove 1983, Kligman 1993, Ortonne 1990, and Wulf 2004 unverifiable (not_oa; no local PDFs); claims from these sources retained with existing #gap/no-fulltext-access tags. One correction applied: transit time claim in terminal differentiation section tightened from '30–35 days' to '>30 days' to match what the Grove 1983 footnote actually documents ('>10 days longer'). Bormann 2016 and Qi 2026 clock claims cross-checked as consistent with verified skin-aging.md. Wikilinks all resolve."
literature-checked-through: null
---

# Epidermis

The outermost cellular layer of the skin. The epidermis is a **stratified squamous keratinizing epithelium** — a multi-layered self-renewing epithelium that is continuously generated from a stem cell + transit-amplifying compartment in the basal layer and shed as anucleate corneocytes from the surface. It is **avascular**; nutrients and oxygen reach it by diffusion from capillary loops in the underlying papillary dermis. In most body sites the epidermis is 50–150 μm thick, but varies: ~40–50 μm on the eyelid, ~600 μm on the palm, and >1 mm on the sole.

The epidermis is the principal UV-absorbing compartment of the skin: essentially all UVB (290–320 nm) is absorbed within the epidermal layers, making it the site of origin for UV-induced DNA damage, the AP-1/NF-κB/MMP signalling cascade, and the CPD/6-4 photoproduct burden underlying photoaging [^fisher1996]. It is also the tissue compartment interrogated by tape-strip-based DNA methylation clocks, and the source of the keratinizing barrier function that maintains whole-organism homeostasis.

See [[skin-aging]] for the full integrative phenotype; [[dermis]] for the underlying connective tissue compartment.

---

## Stratification: layers at a glance

| Layer | Alternate name | Distinguishing features | Aging-relevant notes |
|---|---|---|---|
| **Stratum basale** | Basal layer | Single layer of columnar/cuboidal keratinocytes on the basement membrane; cycling epidermal stem cells + transit-amplifying cells; melanocytes (~1 per 10 basal keratinocytes) and Merkel cells also reside here | Primary site of stem-cell loss, melanocyte density decline, and CPD formation by UV; basal layer cycling slows ~30–50% by 70+ [^grove1983] |
| **Stratum spinosum** | Spinous layer | 5–10 layers of polygonal "prickle cells" connected by desmosomes; Langerhans cells (dendritic antigen-presenting cells) reside here suprabasally; K1/K10 keratin pair begins expression | Langerhans cell density declines with age, reducing antigen surveillance; spinous layer thins as basal output falls |
| **Stratum granulosum** | Granular layer | 1–5 layers of flattened keratinocytes with keratohyalin granules (filaggrin/loricrin precursors) and lamellar bodies (lipid lamellae precursors); transition to terminal differentiation; tight junctions appear | Lamellar body secretion drives ceramide/lipid barrier assembly; ceramide composition shifts in aging, reducing barrier quality |
| **Stratum lucidum** | Clear layer | Present only in thick (acral) skin — palms and soles; densely packed, anucleate, homogeneous eosinophilic layer | Not present at most body sites; not a major aging substrate |
| **Stratum corneum** | Horny layer | Anucleate, flattened corneocytes embedded in an extracellular lipid matrix (ceramides, free fatty acids, cholesterol); "brick-and-mortar" barrier; 15–20 cell layers thick | Transit time through SC increases from ~20 days in young adults to >30 days in older adults [^grove1983]; TEWL increases; barrier impairment drives [[chronic-inflammation]] via cytokine signalling |

---

## Resident cell types

### [[keratinocytes]] (planned)

Keratinocytes constitute approximately **95% of all epidermal cells**. They are the structural and synthetic workhorse of the epidermis: expressing structural keratins, synthesising cornified envelope proteins, secreting lamellar-body lipids, and producing cytokines (including SCF, ET-1, thymic stromal lymphopoietin, and IL-1) that regulate the behaviour of melanocytes, Langerhans cells, and dermal fibroblasts. The terminal differentiation program (see below) is a keratinocyte-intrinsic process — loss of adhesion to the basement membrane is the trigger for irreversible commitment to cornification.

### [[melanocytes]] (planned)

Melanocytes are dendritic, pigment-producing cells derived from neural crest. They reside in the **basal layer** of the epidermis at a ratio of approximately **1 melanocyte per 10 basal keratinocytes** (varying by body site and phototype). Melanocytes transfer melanin-containing melanosomes to surrounding keratinocytes via dendrite-tip phagocytosis, providing photoprotection by capping keratinocyte nuclei. Melanocyte density declines with age at a rate of approximately **10–20% per decade** after age 25–30, measured by the DOPA reaction for enzymatically active cells [^ortonne1990]. Against this background loss, focal melanocyte proliferation at sites of chronic UV exposure generates solar lentigines — see [[skin-aging]] § Solar lentigines.

### [[langerhans-cells]] (planned)

Langerhans cells (LCs) are bone-marrow-derived dendritic antigen-presenting cells that reside in the **suprabasal spinous layer** at a density of approximately 3–5% of nucleated epidermal cells in young adult skin. They express CD1a, langerin (CD207), and MHC class II. Their function is immune surveillance — they capture antigens and traffic to regional lymph nodes to activate T cells. LC density declines with age and, particularly, with cumulative UV exposure: in sun-exposed skin in older individuals, LC numbers are substantially reduced and remaining cells show fewer dendrites and reduced antigen-trapping capacity [^wulf2004]. The specific quantitative magnitude (~50% in sun-exposed skin in the 70s age group) is widely cited in dermatology literature but a robust primary source with counted density data is not yet confirmed for this wiki. #gap/unsourced — quantitative LC density decline in aged human sun-exposed skin needs primary citation.

### Merkel cells

Merkel cells are slow-adapting type I mechanoreceptors residing in the basal layer of glabrous (hairless) skin, particularly palms, soles, and fingertip pads. They constitute <1% of epidermal nucleated cells and are not individually tracked in most aging studies. No dedicated page yet; mentioned here for completeness.

---

## Terminal differentiation program

Basal keratinocytes (expressing **K5/K14** keratins) detach from the basement membrane and enter a unidirectional terminal differentiation program. The program is irreversible once initiated and proceeds through morphologically distinct stages over approximately **20 days in young adults**, extending to **>30 days in older adults** [^grove1983].

Key molecular transitions:

1. **Basal → spinous:** keratin switch from K5/K14 → **K1/K10**; upregulation of **involucrin** (early cornified envelope scaffold); acquisition of desmosomes (desmogleins, desmocollins).
2. **Spinous → granular:** synthesis of **filaggrin** (encoded by *FLG*) — a histidine-rich protein that aggregates keratin filaments into tight bundles; synthesis of **loricrin** (major cornified envelope component, ~70% by mass); lamellar bodies discharge their lipid contents into the intercellular space.
3. **Granular → corneocyte (cornification):** nucleus and organelles are destroyed by specific nucleases and proteases; transglutaminase 1/3 cross-links the cornified envelope; profilaggrin is proteolytically processed into free filaggrin monomers and then into pyrrolidone carboxylic acid and urocanic acid — the principal natural moisturizing factor (NMF) components of the corneocyte.

In aging, the overall transit time slows (reduced basal proliferation), filaggrin expression and NMF content decline (impaired barrier hydration), and the lipid lamellae become less structured (ceramide composition shifts, particularly loss of ceramide 1 linoleate species), collectively raising transepidermal water loss (TEWL).

---

## Aging changes

| Feature | Change with age | Key notes |
|---|---|---|
| **Epidermal thickness** | Thinning; flattening of rete ridges | Rete ridge undulation is lost, reducing epidermal-dermal contact area; mechanical fragility, easy tearing (senile purpura); reduced nutrient/oxygen exchange surface [^kligman1993] |
| **Basal keratinocyte turnover rate** | ~30–50% slowdown by age 70 vs. 20s; transit time ~20 d → >30 d | Primary source: Grove & Kligman 1983 [^grove1983]; consistent with textbook estimates; #gap/needs-replication — no large independent longitudinal cohort has replicated this in modern studies |
| **Epidermal stem cell pool** | Decline in number and regenerative output | Manifestation of [[stem-cell-exhaustion]] in the skin compartment; contributes to reduced wound healing and epidermal thinning |
| **Melanocyte density** | Declines ~10–20%/decade after age 25–30 | Even loss in intrinsic aging; focal proliferative expansion at UV-damaged sites → solar lentigines [^ortonne1990]; see [[skin-aging]] § Solar lentigines |
| **Langerhans cell density** | Declines with age; accelerated in sun-exposed skin | Reduced antigen surveillance → impaired contact hypersensitivity and altered immunity [^wulf2004]; quantitative estimate (~50%) #gap/unsourced |
| **Barrier function (TEWL)** | Increases; ceramide content and composition shifts | Dry, tight, pruritic skin; impaired barrier → low-grade cytokine activation; NMF content falls with filaggrin processing decline |
| **UV-SIPS senescent keratinocytes** | Accumulate in epidermis with age and UV exposure | p16^INK4a-positive senescent keratinocytes contribute to epidermal thinning in Sod2-/- mouse model [^velarde2012]; human keratinocytes are more sensitive to mitochondrial complex I inhibition-induced senescence than dermal fibroblasts [^velarde2012] |

---

## UV biology

The epidermis is the primary UV-absorbing compartment of the skin. **UVB (290–320 nm) is essentially entirely absorbed within the epidermis** — it does not reach the dermis at biologically significant intensities. **UVA (320–400 nm) penetrates more deeply and reaches the papillary and upper reticular dermis**, contributing to both epidermal and dermal damage, though with a different DNA-lesion spectrum.

Within the epidermis, UVB generates **cyclobutane pyrimidine dimers (CPDs)** and **6-4 photoproducts (6-4 PPs)** in the DNA of keratinocytes and melanocytes. These lesions are the molecular substrate for:

1. **p53 activation** — the "guardian of the sunburn cell"; activates NER-mediated repair and, in cells with sufficient damage, triggers apoptosis (the "sunburn cell" is a UVB-apoptotic keratinocyte)
2. **AP-1 (Jun/Fos) and NF-κB activation** — within hours of a single UVB dose (as low as 0.01 MED in human buttock skin in vivo), AP-1 and NF-κB binding activity increases sharply, driving transcriptional upregulation of **MMP-1, MMP-3, and MMP-9** (but not MMP-2); this is the central molecular link between UV and collagen degradation [^fisher1996]
3. **SASP-like secretion** — UV-damaged and UV-senescent keratinocytes secrete pro-inflammatory cytokines (IL-1α, IL-6, IL-8) and paracrine signals (SCF, ET-1) that activate melanocytes and dermal fibroblasts

All-trans retinoic acid (tretinoin) applied topically before UV exposure reduces AP-1 DNA-binding by ~70% and MMP-1/MMP-9 mRNA, protein, and enzymatic activity by 50–80% via AP-1 transrepression (RARα/γ–Jun/Fos direct protein interaction) [^fisher1996]. This is the primary mechanism of tretinoin photoprotection.

For the full genomic-instability → collagen fragmentation cascade, see [[skin-aging]] § Genomic instability.

---

## Skin-aging clock locale

Methylation clocks trained on or validated against epidermal tissue now outperform the pan-tissue Horvath clock on tape-strip samples from the epidermis:

| Clock | Year | Trained on | Notes |
|---|---|---|---|
| [[biomarkers/horvath-clock-2013]] (pan-tissue) | 2013 | 51 tissues including skin | Calibrated against skin; baseline comparator |
| Bormann epidermis clock | 2016 | 108 white females, 450k array, epidermis | First tissue-specific epidermal clock [^bormann2016_ref] |
| Qi 23k clock | 2026 | Bormann 2016 cohort + 23,845 27k/450k-shared probes; 173 CpGs | No Fitzpatrick bias; validated cross-ethnically [^qi2026_ref] |
| TapeLift clock | 2026 | Tape-strip samples | No non-white bias per Qi 2026 validation |

The epidermis-specific aging signature is enriched in **bivalent chromatin regions** (H3K4me3 + H3K27me3) — typically poised developmental enhancers — which become hypermethylated with age, silencing genes essential for keratinocyte vitality. This pattern is conserved across Fitzpatrick phototypes I–VI.

Forward references: dedicated biomarker pages for the Bormann 2016 clock and Qi 2026 clock are planned (R39+). For the current extracted detail including the DHM serum product-use study, see [[skin-aging]] § Epigenetic alterations.

---

## Hallmark connections

- **[[stem-cell-exhaustion]]** — basal-layer epidermal stem cell pool declines in number and regenerative output, underlying epidermal thinning, impaired wound healing, and reduced follicular cycling
- **[[genomic-instability]]** — epidermis is the primary UV target organ; CPD + 6-4PP formation in keratinocytes and melanocytes; AP-1/NF-κB/MMP cascade; p53 activation; accumulation of somatic UV mutation burden over decades (clonal mosaicism in aged epidermis)
- **[[epigenetic-alterations]]** — bivalent-region hypermethylation in aged epidermis; tissue-specific methylation clocks track epidermal aging independently of systemic clocks; see [[skin-aging]] § Epigenetic alterations
- **[[cellular-senescence]]** — UV-driven stress-induced premature senescence (SIPS) in keratinocytes [^velarde2012]; p16^INK4a-positive epidermal cells accumulate; senescent keratinocytes thin the epidermis and produce SASP cytokines; also: transient keratinocyte senescence during wound healing is beneficial (PDGF-AA secretion via SASP) [per [[skin-aging]] § Demaria 2014]
- **[[chronic-inflammation]]** — barrier impairment → TSLP/IL-1α/IL-33 cytokine release from stressed keratinocytes; SASP of senescent keratinocytes; UV-induced NF-κB in epidermis drives local cytokine milieu

---

## Limitations and gaps

- `#gap/unsourced` — Langerhans cell density decline quantitative estimate (~50% in aged sun-exposed skin) widely cited in textbooks but primary counted-density source not yet confirmed for this wiki; needs histomorphometric primary citation
- `#gap/needs-replication` — Grove & Kligman 1983 epidermal transit-time data (PMID 6827031) are the foundational primary source for the ~20 d → >30 d figure; no large modern independent cohort has replicated this with contemporary techniques; single-study claim
- `#gap/unsourced` — ceramide subclass composition changes in aged SC (ceramide 1 linoleate loss) needs primary citation; widely cited in barrier-biology reviews
- `#gap/needs-human-replication` — UV-SIPS senescent keratinocyte accumulation in aged human epidermis in vivo — primary evidence is from SOD2-null mouse model [^velarde2012]; human IHC for p16+ epidermal keratinocytes is qualitatively documented but quantitative density data in aged human skin needed
- `#stub` — keratinocytes, melanocytes, and langerhans-cells pages are planned (R38 parallel seeds); cross-links will deepen when those pages are seeded

---

## Cross-references

- [[skin-aging]] (verified-partial) — integrative phenotype hub; collagen/MMP cascade, solar lentigines, epigenetic clocks, senolytic therapeutics
- [[dermis]] (planned R38) — underlying connective tissue; fibroblast senescence, collagen/elastin matrix, MMP-driven degradation
- [[skin]] (planned R38) — parent tissue page
- [[keratinocytes]] (planned R38) — dominant epidermal cell type; terminal differentiation program; K5/K14 → K1/K10 transition; UV response
- [[melanocytes]] (planned R38) — pigment-producing basal cells; melanocyte-keratinocyte paracrine axis; solar lentigo mechanism
- [[langerhans-cells]] (planned R38) — suprabasal immune sentinels; CD1a+/langerin+; aging density decline
- [[stem-cell-exhaustion]] — hallmark MOC; basal-layer epidermal stem cell decline
- [[genomic-instability]] — hallmark MOC; UV mutation burden in epidermis
- [[epigenetic-alterations]] — hallmark MOC; bivalent-region methylation drift; skin clocks
- [[cellular-senescence]] — hallmark MOC; UV-SIPS in keratinocytes; SASP
- [[chronic-inflammation]] — hallmark MOC; barrier-driven cytokine signalling
- [[biomarkers/horvath-clock-2013]] (verified) — pan-tissue clock; calibrated on skin among 51 tissues
- [[hair-greying]] (planned) — closely related stem-cell-exhaustion phenotype in the follicle bulge

---

## Footnotes

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · doi:10.1038/379335a0 · Fisher GJ et al. · in-vivo · Nature 1996;379:335-339 · n=6–17 per timepoint (mRNA); n=9–10 (protein/activity) · p<0.05 (MMP induction, two-tailed paired t-test) · model: adult Caucasian human buttock skin, 2 MED UVB in vivo · UVB activates AP-1 (Jun/Fos) and NF-κB at doses as low as 0.01 MED; upregulates MMP-1, MMP-3, MMP-9 (not MMP-2); tretinoin reduces AP-1 binding ~70% and MMP-1/MMP-9 activity 50–80% via transrepression · local PDF available (archive confirmed)

[^velarde2012]: [[studies/velarde-2012-mitochondria-skin-senescence]] · doi:10.18632/aging.100423 · Velarde MC et al. · in-vivo + in-vitro · Aging 2012;4(1):3-12 · n=6–13 (WT); n=8–9 (Sod2-/-) · model: Sod2-/- mouse skin (CD1 background, EUK-189 maintained) + cultured human keratinocytes/fibroblasts (rotenone treatment) · mitochondrial oxidative damage drives p16^INK4a-mediated senescence (~2-fold elevated), epidermal thinning, SC thickening; human keratinocytes more sensitive to complex I inhibition-induced senescence than fibroblasts · local PDF available (archive confirmed) · #gap/needs-human-replication

[^grove1983]: doi:10.1093/geronj/38.2.137 · Grove GL, Kligman AM · observational · J Gerontol 1983;38(2):137-142 · model: human volunteers, fluorescent dye stratum corneum transit-time assay · epidermal renewal ~20 days in young adults; lengthened by >10 days in older adults; decline accelerates after age 50 · archive: not_oa, no local PDF · #gap/no-fulltext-access · #gap/needs-replication (no large modern independent replication)

[^kligman1993]: doi:10.1016/0190-9622(93)70147-l · Kligman AM, Dogadkina D, Lavker RM · in-vivo · J Am Acad Dermatol 1993;28(5 Pt 1):735-741 · model: elderly subjects, non-sun-exposed protected skin · rete ridges flattened in aged skin; tretinoin treatment restored undulating dermal-epidermal junction with prominent rete ridges and increased viable epidermal thickness · archive: not_oa, no local PDF · #gap/no-fulltext-access

[^ortonne1990]: doi:10.1111/j.1365-2133.1990.tb16121.x · Ortonne JP · review · Br J Dermatol 1990;122 Suppl 35:1-12 · DOPA-reaction active melanocyte counts in human skin at multiple ages · enzymatically active melanocytes decline ~10–20%/decade after age 25–30; sun-exposed skin has ~2× more pigment cells than protected skin · archive: not_oa, no local PDF · #gap/no-fulltext-access

[^wulf2004]: doi:10.1016/j.micron.2003.11.005 · Wulf HC, Sandby-Møller J, Kobayasi T, Gniadecki R · review · Micron 2004;35(3):185-191 · Langerhans cell numbers decrease with age; remaining cells have fewer dendrites and reduced antigen-trapping capacity; qualitative review — quantitative density data for this wiki #gap/unsourced · archive: not_oa, no local PDF · #gap/no-fulltext-access

[^bormann2016_ref]: Bormann F et al. · 2016 · first epidermal-specific DNA methylation clock; 450k array; n=108 white females ages 18–78 · cited from Qi 2026 [^qi2026_ref]; primary DOI not yet retrieved for this page · #gap/needs-pdf-verification — pending Qi 2026 reference-list cross-check

[^qi2026_ref]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · doi:10.1007/s13555-026-01764-4 · Qi M et al. · Dermatol Ther 2026 · pilot methylome n=17 (multi-ethnic, ages 24–69, tape-strip) + product-use n=60 (open-label, no vehicle control, 8-wk DHM serum + SPF 50+) · new 23k epidermis clock (CV MAE 5.66 yr; cross-Fitzpatrick-validated); bivalent-region hypermethylation conserved cross-ethnicity · Beiersdorf-funded · verified=false (auto-extracted)
