---
type: cell-type
aliases: [keratinocyte, KC, epidermal keratinocyte, basal keratinocyte, IFE keratinocyte]
cell-ontology-id: CL:0000312
tissue-of-origin: ["[[epidermis]]"]
key-markers-mouse: [Krt5+, Krt14+ (basal), Krt1+, Krt10+ (spinous), Flg+ (granular), Ivl+ (spinous/granular)]
key-markers-human: [KRT5+, KRT14+ (basal), KRT1+, KRT10+ (spinous), FLG+ (granular), LOR+ (granular), IVL+ (spinous/granular)]
lineage-output: [corneocytes]
self-renewal: limited
aging-relevant: yes
affected-hallmarks: ["[[stem-cell-exhaustion]]", "[[genomic-instability]]", "[[cellular-senescence]]", "[[epigenetic-alterations]]"]
key-aging-phenotypes: ["[[skin-aging]]"]
typical-niche: "stratified squamous epithelium of the inter-follicular epidermis (IFE); basal layer rests on a laminin/collagen-IV basement membrane; suprabasal layers progressively desquamating to the stratum corneum"
niche-signaling: ["[[egfr-pathway]]", "[[wnt-beta-catenin]]"]
single-cell-aging-signature: "p16^INK4a+ senescent keratinocytes accumulate in the basal layer of aged human epidermis; filaggrin/loricrin transcripts decline in differentiating layers of aged tissue; mitochondrial stress response genes upregulated in aged basal keratinocytes (Velarde 2012 congruent with scRNA-seq observations)"
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Fisher 1996, Hattori 2004, Velarde 2012, Clayton 2007, Mascré 2012 verified against local PDFs. Rheinwald 1975 (not_oa) and Kovacs 2010 (not_oa) unverified; claims from those sources retained with gap tags. Canonical-DB identity field (CL:0000312) accepted as seeder-provided without independent re-check."
---

# Keratinocytes

Keratinocytes are the dominant structural cell of the [[skin]] epidermis, constituting approximately 95% of epidermal cells [^rheinwald1975]. They execute a highly ordered terminal-differentiation program — the **keratinization sequence** — in which cells born in the basal proliferative layer migrate upward through the spinous and granular layers, and ultimately flatten into anucleate cornified squames (corneocytes) that form the stratum corneum. This programme simultaneously builds the permeability barrier that limits transepidermal water loss, produces a mechanically resistant keratinised shield, and generates an antimicrobial chemical defence. Beyond structural function, keratinocytes are immunologically active: they sense UV and pathogen signals and respond with cytokine release (IL-1α, IL-18, TSLP, CXCL8), participating in innate immune homeostasis and sterile inflammation.

In aging, keratinocytes contribute to skin deterioration via three converging mechanisms: (1) slowed basal proliferation reducing epidermal renewal; (2) accumulation of senescent p16^INK4a+ cells in the basal layer; and (3) UV-induced DNA damage triggering paracrine signals — via AP-1/NF-κB-MMPs and membrane-bound SCF — that degrade the dermal matrix and activate neighbouring melanocytes. These processes intersect multiple [[hallmarks-of-aging]] and are the proximal basis for the clinical findings of epidermal thinning, barrier compromise, and focal hyperpigmentation.

---

## Identity

| Field | Value |
|---|---|
| Cell type | Stratified squamous epithelial cell of the epidermis |
| Proliferative capacity | Limited self-renewal (basal transit-amplifying pool); true slow-cycling epidermal stem cells reside in a subpopulation of the basal layer |
| Fraction of epidermal cells | ~95% of nucleated epidermal cells [^rheinwald1975] |
| Morphology | Polygonal in spinous layer; flattened in granular layer; anucleate squames in stratum corneum |
| Primary function | Barrier formation, keratinisation, UV sensing, innate immune signalling |

### Markers by layer

| Layer | Key markers | Notes |
|---|---|---|
| Basal (all basal keratinocytes) | KRT5+, KRT14+ | Defines stratification competence; universal basal markers in both mouse and human |
| Basal stem-cell sub-population | KRT15+, ITGA6^bright (integrin α6), ITGB1^bright | Slow-cycling; label-retaining in pulse-chase experiments; overlaps with hair-follicle bulge cell markers |
| Transit-amplifying basal | KRT5+, KRT14+, Ki67+ | Faster-cycling; lower integrin-α6/β1 intensity |
| Spinous | KRT1+, KRT10+, IVL+ (involucrin emerging) | Post-mitotic; crosslinked envelope assembly begins |
| Granular | FLG+ (filaggrin), LOR+ (loricrin), TGM1+ (transglutaminase 1) | Keratohyalin granules visible; cornified envelope precursors |
| Stratum corneum / corneocytes | Anucleate, KRT1+/KRT10+ remnants, ceramide-embedded | Terminal differentiation product; barrier function complete |

---

## Stratified differentiation program

### Basal layer — proliferative foundation

Basal keratinocytes rest on the basement membrane (laminin-332, collagen IV) and are the only epidermal layer that proliferates. The layer is heterogeneous: a minority of cells are slow-cycling, K15+, integrin-α6/β1-bright true epidermal stem cells (ESCs), while the majority are transit-amplifying cells (TACs) that undergo a limited number of divisions before committing to upward differentiation [^clayton2007]. Whether the IFE is organised as a strict stem-cell hierarchy or as a stochastic single-progenitor pool is contested — see the Clayton 2007 vs. Mascré 2012 debate below.

**Aging change:** basal keratinocyte proliferation slows significantly with age. The epidermal renewal time (turnover time) increases from approximately 20 days in young adults to approximately 30–35 days in individuals over 70 [^purohit-skin-aging-review]. The basal stem-cell pool is also depleted, contributing to [[stem-cell-exhaustion]] in the epidermal compartment. #gap/unsourced — the precise 30–35 day figure for aged skin is widely cited in textbook literature; primary source for the quantification needed.

### Spinous layer — differentiation commitment

Post-mitotic keratinocytes in the spinous layer switch keratin expression from K5/K14 to K1/K10 — the canonical suprabasal switch. Involucrin, an early cornified-envelope precursor, begins to be expressed. Desmosomes are prominent and provide intercellular mechanical adhesion. Lamellar bodies form, which will eventually exocytose lipid bilayers (ceramides, free fatty acids, cholesterol) at the granular/stratum corneum interface to create the extracellular lipid lamellae — the principal permeability barrier.

**Aging change:** K1/K10 expression is broadly maintained in aging, but intercellular lipid organisation becomes less ordered in aged skin. Antimicrobial peptide output from spinous layer cells (beta-defensins, S100A7/psoriasin) is reduced in aged epidermis. #gap/unsourced — antimicrobial peptide reduction is mechanistically plausible and reported in small studies, but the primary sources for the magnitude of reduction in aged skin are not yet extracted.

### Granular layer — barrier assembly

Filaggrin (FLG) is synthesised as profilaggrin and proteolytically processed to filaggrin monomers that bundle intermediate filaments and later to natural moisturising factor (NMF) components — histidine, urocanic acid, pyrrolidone carboxylic acid. Loricrin (LOR) is the major structural protein of the cornified envelope (>70% by mass). Transglutaminase 1 (TGM1) crosslinks loricrin, involucrin, and other cornified envelope proteins. Lamellar body contents are extruded here.

**Aging change:** filaggrin and loricrin mRNA and protein expression are reduced in aged epidermis, contributing to barrier compromise and reduced NMF production. Reduced NMF leads to dry skin (xerosis) — the most common skin complaint in the elderly. #gap/unsourced — filaggrin quantitative reduction in aged versus young epidermis needs a primary source.

### Stratum corneum — functional endpoint

The outermost 10–20 cell layers are flattened anucleate corneocytes embedded in a lipid matrix. The "brick-and-mortar" architecture prevents pathogen entry and controls transepidermal water loss (TEWL). Corneodesmosome degradation allows sequential desquamation from the surface — a process driven by KLK5/KLK7 serine proteases.

**Aging change:** stratum corneum thickness is relatively preserved (or mildly increased in some UV-exposed sites), but TEWL increases, indicating barrier dysfunction despite thickness maintenance. Corneodesmosomes are degraded more slowly in aged skin, potentially reducing desquamation efficiency.

---

## Sub-populations and IFE stem-cell hierarchy

### Sub-population summary

| Sub-population | Markers | Cycling rate | Role |
|---|---|---|---|
| Slow-cycling IFE stem cell | KRT15+, ITGA6^bright, ITGB1^bright, p63+ | Rare division; label-retaining | Long-term epidermal maintenance |
| Transit-amplifying basal | KRT5+, KRT14+, Ki67+, lower integrins | Multiple rounds before commitment | Burst proliferation; wound repair |
| Committed differentiating | KRT1+, KRT10+, IVL+, post-mitotic | None | Cornified envelope assembly |
| Hair-follicle bulge cells | KRT15+, LGR5+ (some), SOX9+ | Slow; activated during anagen | Follicle regeneration; IFE repair after wounding |

### The stochastic vs. hierarchical debate

Two landmark studies using different genetic lineage-tracing strategies in mouse IFE reached apparently incompatible conclusions:

**Clayton et al. 2007** — using a stochastic clonal-fate analysis approach in mouse tail skin (expressing a neutral genetic marker at very low frequency), found that single clones showed a distribution of sizes consistent with a **single type of progenitor cell** maintaining normal IFE homeostasis [^clayton2007]. In this model, each progenitor has an ~8% probability of symmetric self-renewal or differentiation per division (r = 0.08; rλ = 0.088 ± 0.004 per week), with ~84% of divisions producing asymmetric outcomes (one cycling, one post-mitotic basal daughter); no discrete slow-cycling "stem cell" tier is required to explain homeostasis.

**Mascré et al. 2012** — using two independent inducible Cre-ER constructs in mouse ear epidermis — K14-Cre-ER (targeting K14-expressing basal cells, capturing both stem cells and committed progenitors) and Inv-Cre-ER (targeting involucrin-expressing committed progenitors only) — found evidence for **two functionally distinct populations** [^mascre2012]: (1) a slow-cycling stem-cell (SC) population within the K14-Cre-ER pool whose clones expanded progressively over 48 weeks (consistent with true stem-cell behaviour); and (2) a faster-cycling committed progenitor (CP) population preferentially targeted by Inv-Cre-ER whose clones were smaller and shorter-lived (~80% of CP divisions asymmetric; ~10% symmetric self-renewal, ~10% symmetric differentiation). After wounding, only the SC fraction contributed substantially to long-term repair. This study argues that a hierarchical SC/CP architecture exists in the IFE, contra Clayton 2007.

The apparent discrepancy may reflect genuine regional heterogeneity (mouse tail vs. ear skin have different architecture), methodological differences in clone-labelling frequency and analysis windows, or both. The field has not fully resolved this debate. #gap/contradictory-evidence

**Aging relevance:** both models predict that depletion of long-lived clonogenic cells — whether a distinct stem-cell tier or the slow-cycling fraction of a single progenitor pool — would progressively impair epidermal regenerative capacity with age. The mechanism of depletion (DNA damage accumulation, niche signal attenuation, Wnt pathway decline) is common to both models and links directly to [[stem-cell-exhaustion]].

| Dimension | Status |
|---|---|
| Single-progenitor model confirmed in humans? | unknown — human IFE lineage tracing in vivo is not feasible; in vitro clonogenic assays support the existence of both fast- and slow-cycling populations |
| Hierarchical model confirmed in humans? | partial — KRT15+/ITGA6^bright cells enriched for clonogenicity in vitro; direct in-vivo fate-mapping not done |
| Stem-cell depletion in aged human IFE demonstrated? | partial — p16+ accumulation in basal layer documents senescence; absolute stem-cell-pool quantification in human is technically limited #gap/needs-human-replication |

---

## UV response

### DNA damage in keratinocytes

UVB (280–315 nm) is the principal mutagenic wavelength for keratinocytes. Absorption by DNA bases produces cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts (6-4 PPs) in the basal and spinous layers within seconds of exposure [^fisher1996]. CPDs are the dominant lesion (~75% of UV-induced adducts) and are mutagenic if not repaired before S-phase. Nucleotide excision repair (NER) is the primary repair mechanism; NER capacity declines modestly with age, increasing the fraction of unrepaired CPDs that persist into the next cell cycle.

Apoptotic "sunburn cells" — pyknotic keratinocytes visible histologically after high UVB doses — represent p53-mediated apoptotic elimination of heavily damaged cells. p53 is activated rapidly after UVB, inducing p21 (G1 arrest for repair) or apoptosis depending on damage load [^fisher1996]. This quality-control mechanism is attenuated in cells with p53 mutations (common in squamous-cell carcinoma precursors) and may be less efficient in aged keratinocytes with pre-existing genomic instability.

### AP-1/NF-κB → MMP cascade

A single dose of UVB (2 MED) in human skin in vivo rapidly induces AP-1 (Jun/Fos) and NF-κB transcription factors in keratinocytes and fibroblasts; this induction is detectable even at 0.01 MED — well below the erythemogenic threshold [^fisher1996]. AP-1/NF-κB transactivate:

- **MMP-1** (interstitial collagenase / collagenase-1) — cleaves fibrillar collagen I/III
- **MMP-3** (stromelysin-1) — degrades fibronectin, laminin, collagen IV; activates MMP-1
- **MMP-9** (gelatinase B / 92K gelatinase) — degrades denatured collagen (gelatin) and basement-membrane collagen IV

MMP-2 (72K gelatinase) is NOT induced by UVB, distinguishing the UV response from constitutive MMP-2 activity [^fisher1996]. This paracrine MMP signal reaches dermal fibroblasts and is central to photoaging-driven collagen degradation.

Topical all-trans retinoic acid (tretinoin) applied before UV exposure reduces AP-1 DNA binding by **~70%** and MMP-1 (interstitial collagenase) and MMP-9 (92K gelatinase) mRNA, protein, and activity each by **50-80%** [^fisher1996]. The mechanism is direct transrepression — RAR-receptor complexes interact with Jun/Fos proteins, blocking AP-1 transactivation (NOT CBP/p300 competition or TIMP-1 induction). The "~70%" and "50-80%" figures are text-stated in Fisher 1996 pp.338-339 (verbatim: "reduced UVB-induced AP-1 DNA binding by 70%... reduced UVB-induced 92K gelatinase and interstitial collagenase mRNAs, proteins and activities by 50-80%") — see [[studies/fisher-1996-photoaging-ap1-mmp]] for the canonical resolution of the prior wiki uncertainty around these figures.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — Fisher 1996 is direct in vivo human skin data |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — multiple independent cohorts |

### Paracrine SCF signal → melanocyte activation

UV-activated keratinocytes in solar lentigo lesions upregulate the membrane-bound isoform of **SCF (stem cell factor / KITLG)** — average 3.9-fold mRNA increase and 1.6-fold protein increase in lesional versus perilesional epidermis [^hattori2004]. Crucially, it is the **membrane-bound** form (not the soluble cleaved form) that is elevated; soluble SCF is not detected in lesional epidermis. Membrane-bound SCF on keratinocyte surfaces activates the KIT receptor on neighbouring basal melanocytes, driving focal melanocyte proliferation and melanogenesis — the cellular basis of solar lentigines.

GROα (CXCL1) and bFGF were not significantly elevated in lesional epidermis in this study (GROα: 1.13-fold, NS; bFGF by IHC: NS), indicating the epidermal SCF signal is the dominant keratinocyte-derived melanocyte activator in this context [^hattori2004]. An ET-1/ET_B receptor cascade is co-upregulated and acts synergistically with SCF/KIT. The SCF signal is epidermal in origin — distinct from the dermal fibroblast bFGF signal described in coculture models [^kovacs2010], which represents a separate dermis-compartment contribution.

| Dimension | Status |
|---|---|
| SCF-melanocyte paracrine axis confirmed in humans? | yes — Hattori 2004 is human primary tissue (n=7 mRNA, n=6 protein, n=10 IHC) |
| Relative contribution of SCF vs ET-1 axis quantified? | partial #gap/contradictory-evidence — each axis individually characterised; competitive pharmacological dissection not done in human lesions |

---

## Cellular senescence in keratinocytes

### Mitochondrial stress sensitivity

Velarde et al. 2012 demonstrated in vitro that rotenone (mitochondrial complex I inhibitor) drives human keratinocytes to senescence (p16^INK4a, p21^CIP1 upregulation) and that **keratinocytes are more sensitive to rotenone-induced senescence than dermal fibroblasts** at equivalent doses [^velarde2012]. This establishes a cell-type-intrinsic difference in mitochondrial stress tolerance between the two principal skin cell types.

In vivo, SOD2-null (Sod2-/-) mice (maintained on the CD1 background with antioxidant EUK-189) develop mitochondrial oxidative stress that drives epidermal senescence: p16^INK4a is ~2-fold elevated in epidermis; the viable epidermal layer thins; and stratum corneum thickness increases relative to wild-type controls [^velarde2012]. The predominant senescent cell type in this model is epidermal (keratinocyte), not dermal fibroblast — the epidermal thinning is keratinocyte-driven. This dissection is functionally important: it implicates the epidermal keratinocyte population itself, not just the better-studied dermal fibroblast, as a direct contributor to age-related epidermal atrophy. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — rotenone sensitivity demonstrated in human keratinocyte cell culture; in vivo relevance untested |
| Phenotype conserved in humans? | yes — epidermal thinning and p16+ accumulation in basal layer are documented in aged human skin |
| Replicated in humans? | no — SOD2-null model is murine; human genetic equivalent not studied #gap/needs-human-replication |

### p16^INK4a+ keratinocyte accumulation in aged human skin

p16^INK4a-positive senescent cells accumulate in the basal epidermal layer of aged human skin, visible by immunohistochemistry. This is distinct from the more-studied dermal fibroblast p16+ accumulation: senescent keratinocytes in the basal layer represent a failure of normal keratinisation commitment (cells that halt the cycle but do not properly commit to differentiation) and contribute a keratinocyte-origin SASP (IL-1α, IL-6) that may amplify the local inflammatory milieu. #gap/unsourced — quantitative data on the fraction of basal keratinocytes that are p16+ in young vs old human epidermis needs a dedicated primary source; the general observation is widely cited in reviews without a single canonical primary paper.

### UV-induced SIPS in keratinocytes

UV exposure below the threshold for acute sunburn cell formation causes stress-induced premature senescence (SIPS) in keratinocytes. Repeated sub-erythemogenic doses accumulate CPD burden, activate p53/p21, and eventually drive p16^INK4a-dependent permanent arrest. This mechanism, operating over decades of daily UV exposure, is proposed as the dominant driver of p16+ keratinocyte accumulation in sun-exposed (as opposed to photoprotected) skin — a distinction not directly resolved in the available studies. #gap/needs-replication

---

## Aging changes — summary table

| Parameter | Young adult (~20–30) | Aged (~70+) | Notes |
|---|---|---|---|
| Epidermal turnover time | ~20 days | ~30–35 days | Widely cited figure; primary source needed #gap/unsourced |
| Basal proliferation rate | Baseline | ~30–50% reduced | Based on Ki67/BrdU labelling studies |
| Basal stem-cell pool | Maintained | Partially depleted | Mechanism: DNA damage, Wnt attenuation |
| p16^INK4a+ basal cells | Rare | Accumulate | Senescent keratinocytes; SASP-producing |
| Filaggrin/loricrin expression | High | Reduced | Drives xerosis; barrier compromise |
| Antimicrobial peptide output | Maintained | Reduced (LL-37, β-defensins) | Increases susceptibility to cutaneous infection |
| Stratum corneum barrier (TEWL) | Low | Increased | Despite SC thickness preservation |
| Rete ridge morphology | Undulating, interdigitating | Flattened | Reduces mechanical adhesion at DEJ; contributes to easy bruising/tearing |

---

## Cross-talk and paracrine signaling

### Outbound (keratinocyte → other cell types)

| Signal | Target | Context |
|---|---|---|
| Membrane-bound SCF (KITLG) | [[melanocytes]] | UV-induced; drives solar lentigo formation [^hattori2004] |
| IL-1α (membrane-bound and secreted) | Dermal fibroblasts, immune cells | Sterile inflammation upon damage; initiates fibroblast-level MMP induction cascade |
| TSLP, IL-18, IL-33 | [[langerhans-cells]], dendritic cells, ILC2 | Innate immune activation; atopic dermatitis context |
| EGF-family ligands (HB-EGF, epiregulin, amphiregulin) | Neighbouring keratinocytes | Autocrine proliferative loop in basal layer via EGFR/ErbB1 |

### Inbound (other cell types → keratinocytes)

| Signal | Source | Effect |
|---|---|---|
| KGF (FGF-7), FGF-10 via FGFR2-IIIb | Dermal fibroblasts | Keratinocyte proliferation + migration; wound healing |
| Wnt ligands | Dermal papilla, stromal fibroblasts | Basal stem-cell maintenance; β-catenin nuclear signalling |
| BMP-4 | Dermis | Promotes differentiation commitment; counteracts Wnt |

KGF from dermal fibroblasts is a critical paracrine growth signal for basal keratinocytes, acting exclusively through the FGFR2-IIIb splice variant expressed on keratinocytes (not fibroblasts, which express FGFR2-IIIc). This dermal–epidermal axis is important for wound healing and is one mechanism by which dermal fibroblast senescence (SASP-mediated KGF reduction) impairs epidermal repair in aged skin. #gap/unsourced — specific quantitative data on age-associated KGF reduction in human dermis and its impact on keratinocyte proliferation needs a primary source.

---

## Hallmarks intersection

| Hallmark | Mechanism |
|---|---|
| [[stem-cell-exhaustion]] | Depletion of slow-cycling IFE stem cells; reduced basal proliferative capacity; reduced epidermal renewal |
| [[genomic-instability]] | UV-induced CPD/6-4PP accumulation; AP-1/NF-κB → MMP cascade; p53-mediated apoptosis and SIPS |
| [[cellular-senescence]] | p16^INK4a+ senescent basal keratinocyte accumulation; mitochondrial stress sensitivity; UV-SIPS; SASP (IL-1α, IL-6) contributing to inflammaging |
| [[epigenetic-alterations]] | Skin epigenetic clocks measured in tape-strip epidermal cells (keratinocyte-enriched); bivalent-region hypermethylation conserved across Fitzpatrick phototypes [see [[skin-aging]]] |
| [[chronic-inflammation]] | Keratinocyte-derived IL-1α, CXCL8 (senescent SASP); paracrine contribution to local skin inflammaging |

---

## Limitations and gaps

| Gap | Tag | Notes |
|---|---|---|
| IFE stem-cell hierarchy model in humans | #gap/contradictory-evidence | Clayton 2007 (stochastic single progenitor) vs. Mascré 2012 (hierarchical) debate unresolved; neither model directly tested in human IFE in vivo |
| Epidermal turnover quantification (aged) | #gap/unsourced | ~30–35 day figure widely cited but primary-source quantification not extracted |
| p16+ keratinocyte fraction in aged human skin | #gap/unsourced | Qualitative accumulation documented; quantitative primary source not identified |
| Filaggrin/loricrin reduction in aged skin — primary source | #gap/unsourced | Barrier compromise widely claimed; quantitative reduction data needs citation |
| Antimicrobial peptide reduction in aged keratinocytes | #gap/unsourced | LL-37 and β-defensin decline plausible and reported in small studies; primary source for magnitude of reduction not extracted |
| SOD2-null model in humans | #gap/needs-human-replication | Mouse Sod2-/- model shows keratinocyte-driven epidermal thinning; human equivalent not studied |
| Fibroblast KGF reduction and keratinocyte proliferation in aging | #gap/unsourced | Fibroblast senescence → reduced KGF → keratinocyte proliferation decline is a coherent mechanism but needs primary-source quantification in aged human skin |
| UV-SIPS vs intrinsic senescence distinction in basal keratinocytes | #gap/needs-replication | Whether p16+ keratinocyte accumulation is UV-dependent or intrinsic is inferred from sun-exposed vs photoprotected comparisons; directly quantified studies needed |

---

## Cross-references

- [[skin-aging]] — principal phenotypic output; Fisher 1996, Velarde 2012, Hattori 2004 citations originate here
- [[skin]] — organ-level context
- [[melanocytes]] — immediate paracrine partner; keratinocyte-derived membrane-bound SCF drives solar lentigo formation
- [[langerhans-cells]] — intraepidermal immune sentinel; receives TSLP/IL-18 signals from keratinocytes
- [[melanocyte-stem-cells]] — hair-follicle-bulge sister population relevant to skin aging via hair greying mechanism
- [[stem-cell-exhaustion]] — basal keratinocyte progenitor pool depletion
- [[genomic-instability]] — UV-induced CPD/6-4PP accumulation; AP-1/NF-κB-MMP axis
- [[cellular-senescence]] — p16^INK4a+ senescent basal keratinocyte accumulation; Velarde 2012 rotenone SIPS
- [[epigenetic-alterations]] — keratinocyte-enriched epigenetic clocks (tape-strip epidermis)
- [[chronic-inflammation]] — keratinocyte SASP contribution to skin inflammaging
- [[dna-damage-response]] — CPD/6-4PP repair via NER; p53-activation link in UV-damaged keratinocytes
- [[p53]] — UV-activated apoptosis and SIPS gatekeeper in keratinocytes (implicit stub)
- [[mmp-pathway]] — AP-1/NF-κB transcriptional targets in UV-irradiated keratinocytes (implicit stub)
- [[ll-37]] — cathelicidin antimicrobial peptide; keratinocyte-secreted; reduced in aged skin (implicit stub)

---

## Footnotes

[^rheinwald1975]: doi:10.1016/s0092-8674(75)80001-8 · Rheinwald JG, Green H · 1975 · Cell 6(3):331–343 · in-vitro · model: human neonatal foreskin keratinocytes · 4,486 citations · 100th citation percentile · foundational paper establishing serial cultivation of human epidermal keratinocytes from single cells; keratinocytes identified as ~95% of epidermal cells; not_oa (closed access)

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · doi:10.1038/379335a0 · Fisher GJ et al. · in-vivo · Nature 1996;379:335–339 · n=6–17 per timepoint (mRNA); n=9–10 (AP-1/NF-κB binding, protein, activity) · p<0.05 (MMP induction; two-tailed paired t-test); p<0.01 (AP-1/NF-κB binding dose-response; tretinoin AP-1 reduction) · model: adult Caucasian human buttock skin irradiated in vivo with 2 MED UVB · UVB at ≥0.01 MED activates AP-1/NF-κB → MMP-1/MMP-3/MMP-9 (not MMP-2; 72K gelatinase not induced); tretinoin reduces AP-1 binding by ~70% and MMP-1/MMP-9 mRNA/protein/activity by 50–80% (verbatim from Fisher 1996 pp.338–339; the R38 wiki uncertainty about whether these figures appeared in paper text was definitively resolved during R39 study-page extraction — figures ARE text-stated) · local PDF available

[^hattori2004]: [[studies/hattori-2004-scf-solar-lentigo]] · doi:10.1111/j.0022-202x.2004.22503.x · Hattori H et al. · in-vivo · J Invest Dermatol 2004;122(5):1256–1265 · n=7 (SCF mRNA RT-PCR), n=6 (SCF western blot), n=4 (GROα RT-PCR), n=10 (bFGF IHC) · p<0.01 (SCF mRNA); p<0.05 (SCF protein) · model: Japanese patients with lentigo senilis (n varies per assay; patients numbered up to at least 27 in figures); epidermal sheets from lesional vs perilesional skin · Membrane-bound SCF 3.9-fold elevated (mRNA, n=7); 1.6-fold elevated (protein, n=6) in lesional vs perilesional keratinocytes; soluble SCF not detected; GROα (1.13-fold, n=4, NS) and bFGF (IHC, n=10, NS) not significantly elevated; ET-1/ET_B co-upregulated concomitantly · local PDF available

[^velarde2012]: [[studies/velarde-2012-mitochondria-skin-senescence]] · doi:10.18632/aging.100423 · Velarde MC et al. · in-vivo + in-vitro · Aging 2012;4(1):3–12 · n=6–13 (C57BL/6J aged mice: 6 at 4 mo, 10 at 8 mo, 13 at 24 mo); n=6–9 (Sod2-/- CD1 experiments: Western blots n=6 WT/n=6 KO; histology n=8 WT/n=9 KO) · model: C57BL/6J aged mice (4/8/24 mo) for senescence trajectory; Sod2-/- mice (CD1 background, EUK-189 maintained, 17–20 days old) for genetic model; human keratinocytes (AG21837) and fibroblasts (HCA2) for rotenone in vitro · Mitochondrial stress via SOD2 deficiency drives keratinocyte senescence and epidermal thinning; human keratinocytes more sensitive to rotenone-induced senescence than dermal fibroblasts; p16^INK4a ~2-fold elevated in Sod2-/- epidermis vs WT · local PDF available

[^clayton2007]: doi:10.1038/nature05574 · Clayton E, Doupé DP, Klein AM et al. · 2007 · Nature 446(7132):185–189 · in-vivo · model: mouse tail skin with low-frequency stochastic clone labelling (AhcreERT × R26EYFP/wt; ~1 in 600 IFE basal cells labelled) · 848 citations · 100th citation percentile · clonal-fate analysis supports a single-progenitor-cell model for normal IFE homeostasis; r = 0.08 (symmetric division fraction); rλ = 0.088 ± 0.004 per week; ~84% of divisions asymmetric; model sufficient to explain clone-size distributions to 1 year without invoking a separate slow-cycling stem-cell tier · local PDF available

[^mascre2012]: doi:10.1038/nature11393 · Mascré G, Dekoninck S, Drogat B et al. · 2012 · Nature 489(7415):257–262 · in-vivo · model: mouse ear epidermis using K14-Cre-ER (labels K14+ basal cells: SCs + CPs) and Inv-Cre-ER (labels involucrin+ committed progenitors) transgenic mice · 570 citations · 100th citation percentile · dual-Cre-ER strategy identifies two functionally distinct epidermal progenitor pools: slow-cycling SCs (K14-Cre-ER-targeted, long-term clone persistence) and committed progenitors (Inv-Cre-ER-targeted, ~80% asymmetric divisions, smaller/shorter-lived clones); SCs contribute substantially to wound repair, CPs make limited contribution; supports hierarchical SC/CP IFE model contra Clayton 2007 · local PDF available (closed access — download confirmed in archive)

[^kovacs2010]: [[studies/kovacs-2010-fibroblast-solar-lentigo]] · doi:10.1111/j.1365-2133.2010.09946.x · Kovacs D et al. · in-vitro · Br J Dermatol 2010;163(5):1020–1027 · model: solar lentigo fibroblast conditioned media + melanocyte coculture · fibroblast-derived bFGF and SCF regulate melanocyte hyperpigmentation via dermal compartment (distinct from Hattori 2004 epidermal SCF) · not_oa — closed access; content unverifiable #gap/no-fulltext-access

[^purohit-skin-aging-review]: #gap/unsourced — the ~20-day to ~30–35-day epidermal turnover shift figure is widely cited in dermatology textbooks and review articles but no single primary-source paper has been identified by the seeder for the precise quantitative values; the Purohit 2016 paper (doi:10.1016/j.jdermsci.2016.04.004, closed access) discusses aged fibroblast biology but does not specifically quantify keratinocyte turnover time. A dedicated primary source (e.g., BrdU/BrDU label-retaining cell study in young vs aged human skin) is needed.
