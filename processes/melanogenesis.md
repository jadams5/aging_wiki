---
type: process
aliases: [melanin synthesis, melanin biosynthesis, pigmentation pathway, eumelanogenesis, pheomelanogenesis]
key-proteins:
  - "[[tyr]]"
  - "[[tyrp1]]"
  - "[[dct]]"
  - "[[mc1r]]"
  - "[[mitf]]"
pathways:
  - "[[melanocortin-system]]"
  - "[[camp-signaling]]"
hallmarks: []
selective-variants: []
druggability-tier: 2
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Nishimura 2005 claims verified against Crossref abstract (full PDF closed-access not_oa); Kovacs 2010 growth-factor list verified against PubMed abstract (bFGF corrected to KGF); Slominski 2004, Costin 2007, Wan 2011, Zhang 2023 partially verifiable (abstracts only; full PDFs closed-access or download-failed). Enzymatic cascade detail, melanosome stage morphology, MITF phosphorylation sites, and pheomelanin chemistry claims could not be confirmed against full-text PDFs — see #gap/no-fulltext-access tags in body."
---

# Melanogenesis

The enzymatic synthesis of melanin pigments within melanosomes of melanocytes, and the subsequent transfer of melanosomes to surrounding keratinocytes. Two chemically distinct pigment types are produced: **eumelanin** (brown/black) and **pheomelanin** (yellow/red). The balance between them is determined largely by MC1R signaling status and cysteine availability. Melanogenesis declines with age in hair follicles — causing canities (gray hair) — while focal melanocyte hyperactivity accumulates in UV-exposed skin, producing lentigo senilis (age spots). Both phenomena are relevant to aging research, though the underlying mechanisms are opposite: stem-cell exhaustion drives the former; photoaging-driven overactivation drives the latter [^slominski2004][^costin2007].

## Melanin types and chemistry

| Type | Color | Precursors | Key enzymes |
|---|---|---|---|
| **Eumelanin** | Brown/black | Tyrosine → DOPA → DOPAquinone → DHI / DHICA | TYR (rate-limiting), TYRP1 (DHICA oxidase), DCT/TYRP2 (DOPAchrome tautomerase) |
| **Pheomelanin** | Yellow/red | DOPAquinone + cysteine → 5-S-cysteinyl-DOPA → benzothiazine intermediates | TYR (rate-limiting); downstream non-enzymatic + GSH-driven steps |

The ratio of eumelanin to pheomelanin is set primarily by MC1R activity: high MC1R signaling (dark skin / hair) biases toward eumelanin; low / loss-of-function MC1R variants (red hair, fair skin phenotype) allow pheomelanin accumulation because cysteine intercepts DOPAquinone before DHI/DHICA branch [^slominski2004].

## Biosynthetic pathway — step by step

### Eumelanin branch

```
L-Tyrosine
    ↓ [TYR — hydroxylation]
L-DOPA
    ↓ [TYR — oxidation]
DOPAquinone
    ↓ [non-enzymatic cyclization]
Leucodopachrome / Dopachrome
    ↓ [DCT/TYRP2 — tautomerization → DHICA | non-enzymatic → DHI]
DHICA ──→ [TYRP1] ──→ DHICA-melanin (eumelanin polymer, brown)
DHI   ──→ [TYR/oxidation] ──→ DHI-melanin (eumelanin polymer, black)
```

- **TYR** (tyrosinase) catalyzes two distinct reactions: hydroxylation of tyrosine to DOPA, and oxidation of DOPA to DOPAquinone. It is the rate-limiting enzyme and primary druggability target [^slominski2004]. #gap/no-fulltext-access (enzymatic detail not verifiable from closed-access Slominski 2004 abstract)
- **DCT** (DOPAchrome tautomerase, also called TYRP2) channels dopachrome toward DHICA. In its absence, the non-enzymatic pathway favors DHI, yielding a darker but less stable polymer [^costin2007]. #gap/no-fulltext-access
- **TYRP1** (DHICA oxidase) completes DHICA to eumelanin. TYRP1 also stabilizes TYR protein; TYRP1-null mice have reduced TYR activity [^costin2007]. #gap/no-fulltext-access

### Pheomelanin branch

```
DOPAquinone + L-cysteine (or GSH)
    ↓ [non-enzymatic conjugation]
5-S-Cysteinyl-DOPA  (major) / 2-S-Cysteinyl-DOPA  (minor)
    ↓ [oxidative cyclization]
Benzothiazine / Benzothiazole intermediates
    ↓
Pheomelanin polymer (yellow/red)
```

Pheomelanin is considered a weaker UV absorber than eumelanin and generates reactive oxygen species under UV exposure — potentially a pro-mutagenic factor in melanoma initiation #gap/needs-replication.

## Cellular compartment — the melanosome

Melanogenesis occurs exclusively within **melanosomes**, lysosome-related organelles (LROs) that progress through four maturation stages (Stage I–IV):

| Stage | Morphology | Key event |
|---|---|---|
| I | Round, electron-lucent | Fibrillar matrix forming; premelanosome protein (PMEL/gp100) initiates fibril template |
| II | Elliptical; fibrillar matrix | TYR, TYRP1, DCT load onto fibrils; melanin deposition begins |
| III | Partially melanized | Active melanin synthesis; increasingly electron-dense |
| IV | Fully melanized; opaque | Mature melanosome; melanin synthesis complete |

Stage IV melanosomes are transported along microtubules (kinesin/dynein) to dendrite tips and transferred to keratinocytes via exocytosis, phagocytosis, or membrane fusion ("melanosome transfer"). In keratinocytes they form a supranuclear cap that absorbs UV radiation, protecting nuclear DNA [^costin2007]. #gap/no-fulltext-access (melanosome stage morphology and transfer mechanism detail not verifiable from closed-access Costin 2007 abstract)

## Regulation — the MITF axis

The master transcriptional regulator of melanogenesis is **MITF** (microphthalmia-associated transcription factor), a basic helix-loop-helix leucine zipper (bHLH-LZ) protein:

```
UV / α-MSH stimulus
    ↓
MC1R (Gs-coupled)
    ↓
Adenylyl cyclase → cAMP ↑
    ↓
PKA → CREB phosphorylation (Ser133)
    ↓
CRE-mediated transcription of MITF
    ↓
MITF binds M-box / E-box elements in promoters of:
    TYR, TYRP1, DCT, PMEL, RAB27A, MYO5A,...
```

MITF protein activity is additionally regulated post-translationally:
- **ERK phosphorylation** (Ser73): activates transcription transiently but marks MITF for ubiquitin-proteasomal degradation. #gap/no-fulltext-access
- **p38 / MSK1** phosphorylation (Ser307, Ser69): context-dependent activation. #gap/no-fulltext-access
- **RSK1** phosphorylation (Ser409): cytoplasmic retention. #gap/no-fulltext-access

The specific phosphorylation sites above (Ser73, Ser307, Ser69, Ser409) are not verifiable from the Wan 2011 abstract; they derive from the broader MITF phosphorylation literature and may be attributed to sources not captured in Wan 2011 [^wan2011]. #gap/no-fulltext-access

The net effect is that sustained α-MSH/MC1R → cAMP signaling produces durable MITF protein levels and prolonged melanogenesis, while acute growth-factor (SCF/KIT → ERK) stimulation produces a sharp but short-lived activation burst [^wan2011].

## Upstream signals — beyond MC1R

| Signal | Receptor / TF | Effect |
|---|---|---|
| α-MSH (POMC-derived) | MC1R → cAMP | Eumelanin bias; MITF transcription ↑ |
| ACTH | MC1R (lower affinity) | Same as α-MSH |
| SCF (stem cell factor) | KIT receptor → ERK/PI3K | Melanocyte survival + acute MITF burst |
| Wnt / β-catenin | TCF/LEF | MITF transcription ↑ (M-box independent); important in melanocyte development |
| ET-1 (endothelin-1) | EDNRB | Melanocyte proliferation + pigmentation |
| UV radiation | Multiple (p53 → POMC → α-MSH in keratinocytes) | Indirect: keratinocyte-derived α-MSH → MC1R on melanocytes |
| Niacinamide | Uncertain (PAR-2 suppression) | Melanosome transfer ↓ (not synthesis); reduces hyperpigmentation |

## Aging context

### Gray hair (canities) — melanocyte stem cell exhaustion

The primary aging mechanism in hair follicles is **exhaustion of the melanocyte stem cell (McSC) pool** in the bulge niche of the hair follicle [^nishimura2005]:

- McSCs normally self-renew during telogen (resting phase) and produce committed melanocyte progenitors that migrate to the hair bulb matrix and produce melanin for the new anagen (growth) hair.
- With age, McSCs undergo progressive depletion via: (1) ectopic differentiation (pigmentation within the niche) — stem cells differentiate in situ without generating transient amplifying progeny; (2) apoptosis driven by BCL2 insufficiency during the transition into dormancy (BCL2 deficiency selectively destroys McSCs but not differentiated melanocytes within the niche). Notch-mediated self-renewal failure and DNA-damage-driven apoptosis are cited in secondary literature but are not the primary mechanisms demonstrated by Nishimura 2005 [^nishimura2005]. #gap/needs-replication
- Once the McSC pool is exhausted in a given follicle, that follicle permanently produces amelanotic (white/gray) hairs [^nishimura2005].
- Human graying typically begins in the mid-30s (scalp) and accelerates through the 50s; rate is heritable and influenced by BCL2 (anti-apoptotic protection of McSCs), MC1R variants, and oxidative stress.

Evidence quality for gray hair:

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (McSC pool demonstrated in human follicles) |
| Phenotype conserved in humans? | yes (canities is universal with age) |
| Replicated in humans? | in-progress (McSC biology less experimentally tractable than in mouse) |

### Age spots (lentigo senilis / solar lentigo) — focal melanocyte hyperactivity

Age spots represent the *opposite* dysregulation: focal melanocyte hyperactivity rather than depletion. Key mechanisms include:

- **Photoaged fibroblasts** in chronically UV-exposed dermis secrete growth factors (SCF, HGF, and KGF — keratinocyte growth factor) that directly and indirectly (via KGF → keratinocyte-derived SCF) stimulate overlying melanocytes, driving TYR upregulation and melanosome biogenesis [^kovacs2010]. Note: the wiki previously listed bFGF — **bFGF was not identified in Kovacs 2010**; the paper examined SCF, HGF, and KGF specifically. Whether "photoaged" fibroblasts in this context are senescent is not stated in the Kovacs 2010 abstract. #gap/no-fulltext-access
- UV-induced mutations accumulate in lesional melanocytes (BRAF, KRAS, PIK3CA); lentigos are clonal or pauci-clonal expansions.
- Impaired autophagy/proteasomal clearance of melanosomes in aged keratinocytes may retain pigment longer. #gap/no-mechanism

Evidence quality for age spots:

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes (fibroblast SCF/HGF mechanistic work in human biopsies) |

### Photoaging signaling loop

UV → keratinocyte p53 → POMC transcription → α-MSH secretion → paracrine MC1R activation on melanocytes → cAMP → MITF → TYR/TYRP1/DCT upregulation. This adaptive response both increases pigment (protection) and engages DNA repair pathways (6-4PP / CPD repair). MC1R loss-of-function variants (red-hair phenotype) disrupt this loop and correlate with higher UV-induced melanoma risk #gap/needs-replication.

## Druggability (tier 2)

**Tier 2 rationale:** No FDA-approved drug targets melanogenesis for an aging indication. **Afamelanotide** (a synthetic α-MSH analogue) stimulates MC1R → cAMP → MITF axis to increase eumelanogenesis; it is FDA-approved for erythropoietic protoporphyria (EPP) and used off-label for photoprotection in fair-skinned individuals — not for aging per se. Topical depigmenting agents (hydroquinone, kojic acid, arbutin, niacinamide) are widely used for age spots but act peripherally (TYR inhibition or melanosome-transfer reduction); none have validated aging-pathway mechanisms. A high-quality MC1R/MITF probe exists (afamelanotide = NDP-alpha-MSH); the aging-application gap remains.

Related compound and intervention pages: [[melanotan-ii]], [[setmelanotide]], [[mc1r]], [[alpha-msh]].

## Cross-references

- [[melanocortin-system]] — upstream MC1R/α-MSH signaling
- [[mc1r]] — G-protein-coupled receptor; key eumelanin/pheomelanin switch
- [[alpha-msh]] — paracrine activator derived from keratinocytes under UV
- [[tyr]] — tyrosinase; rate-limiting enzyme (implicit stub)
- [[tyrp1]] — DHICA oxidase; TYR stabilizer (implicit stub)
- [[dct]] — DOPAchrome tautomerase / TYRP2 (implicit stub)
- [[mitf]] — master melanogenic transcription factor (implicit stub)
- [[stem-cell-exhaustion]] — McSC pool exhaustion underlies follicular canities
- [[cellular-senescence]] — photoaged/potentially-senescent dermal fibroblasts implicated in age-spot melanocyte hyperactivity; fibroblast senescence connection is plausible but not confirmed as the exclusive mechanism in Kovacs 2010 #gap/no-fulltext-access
- [[melanotan-ii]] — synthetic α-MSH analogue; cross-reactivity → hyperpigmentation
- [[setmelanotide]] — MC4R-preferring agonist; hyperpigmentation side-effect via MC1R

## Limitations and gaps

- The mechanism linking gray hair onset in humans to McSC depletion is well-supported in mice but less directly demonstrated in humans (follicle biopsy studies are limited). #gap/needs-human-replication
- Whether restoring McSC pools (via Wnt agonism, Notch modulation, or antioxidant pre-conditioning) can reverse canities in humans is untested in controlled trials. #gap/needs-replication
- Pheomelanin's contribution to melanoma risk (via ROS generation) is biologically plausible but quantitatively uncertain. #gap/needs-replication
- The exact mechanism by which aged keratinocytes accumulate melanosomes (impaired autophagy vs. reduced exocytosis vs. altered lysosomal processing) is unresolved. #gap/no-mechanism
- Whether lentigo senilis is a premalignant lesion or merely a cosmetic marker of UV exposure remains debated. #gap/contradictory-evidence
- Enzymatic cascade details (TYR/TYRP1/DCT), melanosome stage morphology, and MITF phosphorylation sites were not independently verifiable against full PDFs — all five primary sources are closed-access. #gap/no-fulltext-access
- `literature-checked-through`: 2026-05-09

## Footnotes

[^slominski2004]: doi:10.1152/physrev.00044.2003 · Slominski A, Tobin DJ, Shibahara S, Wortsman J · *Physiol Rev* 2004 · review · comprehensive hormonal regulation of mammalian melanin pigmentation; MC1R as primary positive regulator; agouti protein as primary negative regulator; eumelanin/pheomelanin biochemistry; n=literature review · citation percentile: 100th (FWCI 14.7) · full PDF closed-access #gap/no-fulltext-access

[^costin2007]: doi:10.1096/fj.06-6649rev · Costin GE, Hearing VJ · *FASEB J* 2007 · review · melanocyte biology, melanosome biogenesis, stress-response regulation of skin color · citation percentile: 100th (FWCI 12.9) · full PDF closed-access #gap/no-fulltext-access

[^nishimura2005]: doi:10.1126/science.1099593 · Nishimura EK, Granter SR, Fisher DE · *Science* 2005 · in-vivo · model: melanocyte-tagged transgenic mice + aging human hair follicles · n=multiple genetic models · demonstrates McSC exhaustion via (1) ectopic differentiation/pigmentation within niche during physiologic aging, accelerated by Mitf mutation; (2) BCL2-deficiency-driven selective apoptosis of McSCs (not differentiated melanocytes) during entry into niche dormancy · citation percentile: 100th (FWCI 14.8) · full PDF closed-access #gap/no-fulltext-access

[^wan2011]: doi:10.1007/s11010-011-0823-4 · Wan P, Hu Y, He L · *Mol Cell Biochem* 2011 · review · MITF transcriptional regulation by upstream TFs: SOX10, PAX3, CREB, LEF-1 (positive); ITF2, FOXD3 (negative); STAT3/PIAS3 (modulatory interaction) · n=literature review · 106 citations · full PDF closed-access; PKA/ERK post-translational phosphorylation sites not verifiable from abstract #gap/no-fulltext-access

[^zhang2023]: doi:10.1111/jocd.15652 · Zhang X, Zhu J, Zhang J, Zhao H · *J Cosmet Dermatol* 2023 · review · melanocyte stem cells and hair graying; molecular signals governing McSC self-renewal and niche maintenance · OA (hybrid)

[^kovacs2010]: doi:10.1111/j.1365-2133.2010.09946.x · Kovacs D et al. · *Br J Dermatol* 2010 · in-vitro + human biopsy · fibroblast-derived growth factors SCF, HGF, and KGF (keratinocyte growth factor) — not bFGF — from solar lentigo stroma drive melanocyte hyperactivation directly and via KGF-mediated keratinocyte SCF induction; n=solar lentigo vs. normal skin biopsies · 115 citations · full PDF closed-access #gap/no-fulltext-access
