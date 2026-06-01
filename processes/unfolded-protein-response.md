---
type: process
aliases: [UPR, ER stress response, ER-UPR, unfolded protein response]
key-proteins:
  - "[[perk]]"
  - "[[eif2alpha]]"
  - "[[atf4]]"
  - "[[atf6]]"
  - IRE1α (ERN1 — no wiki page yet)
  - XBP1 (no wiki page yet)
  - GRP78/BiP (HSPA5 — no wiki page yet)
  - CHOP/DDIT3 (no wiki page yet)
pathways:
  - "[[integrated-stress-response]]"
hallmarks:
  - "[[loss-of-proteostasis]]"
selective-variants: []
druggability-tier: 2
caused-by:
  - "[[loss-of-proteostasis]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[genomic-instability]]"
causes:
  - "[[autophagy]]"
  - "[[apoptosis]]"
  - "[[integrated-stress-response]]"
  - "[[cellular-senescence]]"
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Hetz 2012 (nrm3270) three-arm architecture, GRP78 sensor model, PERK/IRE1α/ATF6 mechanism descriptions, adaptive-vs-terminal framework, and cell-type heterogeneity claims verified against full PDF. Krukowski 2020 (eLife 62048) ISRIB claims verified via OA web fetch. Taylor/Dillin 2013 (Cell, paywalled, not in archive) XBP-1s ~15% lifespan claim and cell-nonautonomous mechanism NOT independently verified — retained as drafted; tag per seeder note. Brown 2012, Han/Kaufman 2013 (not_oa), Estebanez 2018, Mercado 2018 — archive pending or not_oa; those claims not verified against primary source."
---

> Partially verified 2026-05-07. Hetz 2012 mechanism claims and Krukowski 2020 ISRIB claims verified against source. **Unverified claims (pending PDF access):** Taylor/Dillin 2013 XBP-1s lifespan numbers (`#gap/no-fulltext-access` — Cell paywalled); Brown 2012 GRP78 aging data (archive pending); Han/Kaufman 2013 ATF4-CHOP oxidative death mechanism (`not_oa`); Estebanez 2018 aging UPR review (archive pending); Mercado 2018 GSK2606414 data (archive pending). Do not rely on those specific claims without primary-source cross-check.

# Unfolded Protein Response (UPR)

The **unfolded protein response** is a conserved eukaryotic adaptive signaling network triggered when misfolded or unfolded proteins accumulate in the endoplasmic reticulum (ER) lumen beyond the capacity of ER-resident chaperones to manage. Three ER-transmembrane sensors — PERK (EIF2AK3), IRE1α (ERN1), and ATF6 — detect proteostatic overload and coordinate a transcriptional/translational program that attempts to restore ER homeostasis by (1) attenuating global protein synthesis, (2) expanding ER chaperone capacity, and (3) accelerating misfolded-protein clearance via ERAD (ER-associated degradation) and autophagy [^hetz2020]. If stress is irresolvable, the UPR pivots to apoptosis, primarily via CHOP/DDIT3 induction [^hetz2018].

The UPR declines functionally with age — the magnitude of the adaptive response is blunted in old tissues — and this attenuation is now understood as a mechanistic contributor to the [[loss-of-proteostasis]] hallmark of aging [^brown2012]. Neuronal expression of constitutively active XBP1 extends *C. elegans* lifespan through inter-tissue cell-nonautonomous signaling, establishing the UPR as causally linked to longevity programs and not merely reactive [^taylor2013].

The closely-related **[[integrated-stress-response]]** (ISR) overlaps with the PERK arm: ISR subsumes PERK plus three additional eIF2α kinases (GCN2, HRI, PKR) that respond to non-ER stressors. This page covers the canonical ER-UPR; ISR-specific regulation of [[eif2alpha]]/[[atf4]] is detailed in [[integrated-stress-response]].

---

## Three-arm signaling architecture

All three sensors are held inactive in unstressed cells by association with the ER chaperone **GRP78/BiP** (HSPA5). When misfolded proteins accumulate, they outcompete the sensors for GRP78 binding, releasing and activating each sensor independently [^hetz2012].

### PERK arm (PERK → eIF2α-P → ATF4 → CHOP)

1. Released PERK oligomerizes and trans-autophosphorylates, activating its kinase domain.
2. Active PERK phosphorylates [[eif2alpha]] at Ser51, suppressing the guanine nucleotide exchange factor eIF2B and globally attenuating cap-dependent mRNA translation.
3. Paradoxically, select mRNAs with upstream open reading frames (uORFs) — including the transcription factor [[atf4]] — are *preferentially* translated under eIF2α-P conditions.
4. ATF4 drives expression of genes supporting amino acid biosynthesis, redox balance, and autophagy. Under prolonged stress, ATF4 co-activates CHOP/DDIT3, which represses anti-apoptotic BCL-2 family members and promotes apoptosis [^han2013]. #gap/needs-replication (quantitative threshold between adaptive and apoptotic ATF4 output is not yet fully characterized)

**ISR overlap:** The PERK arm is simultaneously the principal ER-sensing arm of the [[integrated-stress-response]]. eIF2α Ser51 phosphorylation is the ISR's single convergence point; see [[integrated-stress-response]] for non-ER kinase contexts.

### IRE1α arm (IRE1α → XBP1s → ERAD gene induction)

1. Released IRE1α (ERN1) dimerizes and trans-autophosphorylates, activating both its kinase and endoribonuclease (RNase) domains.
2. Active IRE1α unconventionally splices a 26-nucleotide intron from *XBP1* mRNA, producing the stable and potent transcriptional activator XBP1s (spliced XBP1).
3. XBP1s drives expression of ERAD components (HRD1, EDEM, SEL1L), ER chaperones (GRP78, GRP94, PDI family), and lipid biosynthetic genes — expanding secretory capacity [^hetz2012].
4. Under prolonged stress, IRE1α RNase activity broadens to non-XBP1 targets (RIDD — regulated IRE1α-dependent decay), degrading ER-targeted mRNAs to reduce the folding burden and, in excess, promoting apoptosis.

**IRE1α is the most evolutionarily conserved UPR sensor** — the single-sensor IRE1 of *S. cerevisiae* is the ancestor of all three mammalian arms [^hetz2020].

### ATF6 arm (ATF6 → Golgi processing → ATF6f → chaperone transcription)

1. Released ATF6 (two paralogs: ATF6α and ATF6β) traffics from the ER to the Golgi.
2. In the Golgi, site-1 and site-2 proteases (S1P/S2P) cleave ATF6, releasing the cytoplasmic ATF6f (fragment) transcription factor.
3. ATF6f translocates to the nucleus and drives expression of ER chaperones, ERAD components, and XBP1 itself (amplifying the IRE1α arm) [^hetz2012].
4. ATF6α and ATF6β are partially redundant; ATF6α is the primary activating isoform. The functional distinction between ATF6α and ATF6β is not fully characterized [^hetz2012]. #gap/needs-replication

### Integration: adaptive vs. terminal UPR

The three arms do not act independently. Under mild, transient ER stress, all three arms activate an **adaptive** program that restores proteostasis. Under severe or persistent stress, the balance shifts to **terminal** outputs:

| Stress intensity | Dominant outcome | Key signal |
|---|---|---|
| Mild / transient | Adaptive — ER expansion, translation attenuation | XBP1s + ATF6f chaperone induction; transient ATF4 |
| Moderate / prolonged | Mixed — partial adaptation; CHOP upregulation begins | ATF4–CHOP axis; IRE1α RIDD onset |
| Severe / chronic | Apoptosis | CHOP-mediated BCL-2/MCL-1 suppression; JNK via IRE1α TRAF2 |

The molecular mechanism integrating stress magnitude into fate decisions — including how IRE1α switches from XBP1 splicing to RIDD and TRAF2-JNK signaling — remains an area of active investigation [^hetz2018]. #gap/no-mechanism (quantitative thresholds for fate switching not yet defined in human cells)

---

## Connection to autophagy

ER stress activates [[autophagy]] through multiple routes:
- PERK → ATF4 drives transcription of several ATG genes (including *BECN1*, *ATG5*, *ATG7*) [^autophagy-regulation].
- IRE1α-JNK signaling phosphorylates BCL-2, disrupting its inhibitory interaction with Beclin-1.
- CHOP upregulates BNIP3 and other mitophagy receptors.

This positions the UPR as an upstream activator of autophagy. In the [[autophagy]] page, ER stress (UPR) is listed as an upstream activator via PERK + ATF4. Bidirectional crosstalk: autophagy flux failure (e.g., lysosomal dysfunction with age) in turn worsens ER stress by reducing the capacity to clear misfolded proteins via ER-phagy and aggrephagy. #gap/contradictory-evidence (whether autophagy induction is primarily adaptive vs. contributing to cell death under chronic UPR is context-dependent)

---

## Aging connection

### Attenuated UPR capacity in old tissue

Multiple lines of evidence converge on a **functional decline in UPR responsiveness** with age:

- GRP78/BiP protein levels decline in aged brain, liver, and other tissues; inducibility in response to acute ER stress is blunted relative to young animals [^brown2012].
- Basal ER stress markers (PERK-P, eIF2α-P, XBP1s) are chronically, modestly elevated in old tissues — indicating unresolved, persistent stress — but the acute adaptive response is impaired [^estebanez2018].
- Age-related decline in chaperone expression has been documented in *C. elegans* and mice; in worms, this collapse occurs at a defined inflection point shortly after reproductive maturity [^hetz2020].

The net result is a paradoxical state: **basal stress is elevated, yet adaptive capacity is reduced**, leaving aged cells chronically stressed without adequate resolution. This maps directly onto the [[loss-of-proteostasis]] hallmark. #gap/needs-human-replication (most mechanistic data from model organisms; human tissue data is largely correlative)

### XBP1 — cell-nonautonomous longevity regulation

Neuronal-specific overexpression of *xbp-1s* (the spliced isoform) in *C. elegans* extends lifespan by ~15% through a cell-non-autonomous mechanism: neurons release a secreted signal that activates UPR and stress-resistance programs in distal tissues, including the intestine and muscle [^taylor2013]. This establishes the UPR not merely as a cell-autonomous damage response but as a systemic longevity-regulating circuit.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — all three sensors and effectors are conserved |
| Longevity phenotype conserved in humans? | unknown — no human XBP1-gain-of-function data |
| Replicated in humans? | no — worm gain-of-function only |

#gap/needs-human-replication

### ER stress drives aging phenotypes

Chronic, unresolved ER stress contributes mechanistically to several age-related conditions:
- **Neurodegeneration**: misfolded α-synuclein ([[alpha-synuclein]]), tau ([[tau]]), and amyloid-β activate UPR in neurons; persistent CHOP induction promotes neuronal apoptosis [^hetz2018].
- **Type 2 diabetes**: ER stress in pancreatic β-cells is induced by lipotoxicity and glucotoxicity; PERK signaling is essential for β-cell survival but becomes maladaptive under obesity-related chronic load [^hetz2018].
- **Inflammaging**: IRE1α-TRAF2 complex activates NF-κB, contributing to the low-grade chronic inflammation characteristic of aging (see [[chronic-inflammation]], [[nf-kb]]).
- **Cellular senescence**: sustained ER stress can induce [[cellular-senescence]] via CHOP and p21 upregulation, connecting UPR to the [[cellular-senescence]] hallmark.

---

## Druggability — UPR modulators

| Compound | Target | Mechanism | Status |
|---|---|---|---|
| **ISRIB** | eIF2B (ISR, downstream of PERK) | Stabilizes eIF2B pentamer → overrides eIF2α-P translational block; resets ISR output without blocking upstream eIF2α phosphorylation | Preclinical; reversed age-related spatial and working memory deficits in aged C57BL/6J mice (2.5 mg/kg i.p. × 3 days); reduced hippocampal ATF4 protein levels and improved CA1 spine density [^krukowski2020]; no human trials as of 2026 |
| **Salubrinal** | GADD34-PP1c / CReP-PP1c phosphatase complexes | Inhibits eIF2α-P dephosphorylation → sustains eIF2α-P → prolongs translational attenuation; neuroprotective in ischemia models | Research tool; not in clinical development |
| **GSK2606414** | PERK kinase domain | ATP-competitive PERK inhibitor; reduces eIF2α phosphorylation | Preclinical; protected dopaminergic neurons in a Parkinson's mouse model but caused pancreatic toxicity in rodents [^mercado2018]; not yet in human trials |
| **Sephin1** | Stress-induced PP1 regulatory subunit (GADD34-analogous) | Selective holophosphatase inhibitor; structurally distinct from salubrinal; reported to be better tolerated | Preclinical only; mechanism debated #gap/contradictory-evidence |
| **XBP1s-activating compounds** | IRE1α RNase | Enhance XBP1 splicing to boost adaptive arm without triggering maladaptive IRE1α outputs | Discovery stage; no clinical candidates as of 2026 |

**Druggability-tier rationale:** Tier 2. High-quality chemical probes (ISRIB, GSK2606414) target the PERK/ISR arm with clear in-vivo evidence in aging models. No clinical drug exists for an aging indication engaging the UPR — ISRIB has not entered human trials. Closest analog is Alzheimer's disease trials (PERK inhibitors), which remain early-phase. Tier 1 would require a regulatory-approved drug for an aging-related UPR indication.

---

## Limitations and open questions

- **ISR vs. UPR boundary**: The PERK arm is simultaneously ER-UPR and ISR; separating ER-specific contributions from general eIF2α stress signaling in aged tissues is methodologically difficult, because both pathways activate the same downstream effectors ([[eif2alpha]], [[atf4]], [[chop]]). Most aging studies do not cleanly dissect the two. #gap/no-mechanism
- **Cell-type heterogeneity**: UPR dynamics differ profoundly between secretory cell types (pancreatic β-cells, plasma cells, hepatocytes — high constitutive ER load) and non-secretory cells; age-related UPR attenuation may be tissue-specific rather than universal. #gap/needs-replication
- **Human tissue data**: Most mechanistic aging data is from *C. elegans* and mouse. Human tissue-specific UPR transcriptomics with age are sparse; GTEx captures expression changes but not UPR sensor activation state. #gap/needs-human-replication
- **Adaptive vs. terminal UPR fate switch**: The molecular switch determining whether UPR output is pro-survival or pro-apoptotic — and how this threshold changes with age — is not fully characterized. The IRE1α kinase-versus-RNase balance and the CHOP transcriptional threshold are plausible candidates but lack quantitative mechanistic models in primary human cells. #gap/no-mechanism
- **Therapeutic window for PERK inhibition**: GSK2606414 pancreatic toxicity suggests on-target toxicity from blocking PERK in secretory cells; whether selective dosing strategies (temporal, tissue-restricted) can decouple efficacy from toxicity is unresolved. #gap/long-term-unknown

---

## Cross-references

- [[integrated-stress-response]] — PERK arm shared with UPR; covers all four eIF2α kinases
- [[loss-of-proteostasis]] — primary hallmark this process feeds
- [[autophagy]] — key downstream effector induced by UPR; bidirectional crosstalk
- [[ubiquitin-proteasome-system]] — the other major misfolded-protein clearance axis; functionally complementary to UPR-ERAD
- [[perk]] — kinase sensor of ER-UPR PERK arm
- [[eif2alpha]] — phosphorylation substrate converging UPR and ISR
- [[atf4]] — master transcription factor downstream of PERK
- [[cellular-senescence]] — CHOP-mediated ER stress can trigger senescence
- [[chronic-inflammation]] — IRE1α-NF-κB axis links UPR to inflammaging
- [[alpha-synuclein]], [[tau]] — aggregate-prone proteins that activate ER-UPR in neurodegeneration

---

## Footnotes

[^hetz2020]: doi:10.1038/s41580-020-0250-z · Hetz C, Zhang K, Kaufman RJ · *Nat Rev Mol Cell Biol* 2020 · review · definitive mechanistic review of UPR three-arm architecture, signaling outputs, and disease contexts · archive: not downloaded (failed)

[^hetz2018]: doi:10.1016/j.molcel.2017.06.017 · Hetz C, Papa FR · *Mol Cell* 2018 · review · UPR adaptive vs. terminal cell-fate decision mechanisms · archive: pending

[^hetz2012]: doi:10.1038/nrm3270 · Hetz C · *Nat Rev Mol Cell Biol* 2012 · review · three-arm UPR architecture, sensor activation by GRP78 release, downstream effectors · archive: local PDF at 

[^taylor2013]: doi:10.1016/j.cell.2013.05.042 · Taylor RC, Dillin A · *Cell* 2013 · in-vivo · n=~200/group · model: *C. elegans* · neuronal XBP-1s overexpression extends lifespan ~15% through cell-nonautonomous inter-tissue UPR signaling · archive: pending

[^brown2012]: doi:10.3389/fphys.2012.00263 · Brown MK, Naidoo N · *Front Physiol* 2012 · review · UPR decline in aging: reduced GRP78 inducibility, blunted adaptive response, connection to neurodegeneration and diabetes · archive: pending

[^han2013]: doi:10.1038/ncb2738 · Han J, Kaufman RJ · *Nat Cell Biol* 2013 · in-vitro · ATF4+CHOP drive paradoxical protein synthesis increase under ER stress → oxidative damage and cell death · archive: not_oa

[^estebanez2018]: doi:10.3389/fphys.2018.01744 · Estébanez B et al. · *Front Physiol* 2018 · review · UPR aging and exercise; declining chaperone levels and blunted stress-response inducibility in aged subjects · archive: pending

[^krukowski2020]: doi:10.7554/eLife.62048 · Krukowski K et al. · *eLife* 2020 · in-vivo · model: aged C57BL/6 mice · ISRIB reversed age-related spatial and working memory deficits; reduced ATF4, improved hippocampal spine density · archive: pending

[^mercado2018]: doi:10.1016/j.nbd.2018.01.004 · Mercado G et al. · *Neurobiol Dis* 2018 · in-vivo · model: Parkinson's mouse model · GSK2606414 protected dopaminergic neurons; secondary pancreatic toxicity observed · archive: pending

[^autophagy-regulation]: see [[autophagy]] regulation table — ER stress (UPR) listed as upstream activator of ULK1 complex via PERK+ATF4; primary source not separately verified on this page
