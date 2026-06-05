---
type: tissue
aliases: [hepatic tissue, hepatic parenchyma, hepatic organ]
parent-system: digestive-system
key-cell-types:
  - "[[hepatocytes]]"
  - "[[hepatic-stellate-cells]]"
  - "[[kupffer-cells]]"
  - "[[liver-sinusoidal-endothelial-cells]]"
  - "[[cholangiocytes]]"
  - "[[hepatic-progenitor-cells]]"
key-aging-phenotypes:
  - "[[masld]]"
  - "[[liver-fibrosis]]"
  - "[[age-related-cholestasis]]"
  - "[[hepatocellular-carcinoma]]"
related-hallmarks:
  - "[[cellular-senescence]]"
  - "[[loss-of-proteostasis]]"
  - "[[deregulated-nutrient-sensing]]"
  - "[[epigenetic-alterations]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[chronic-inflammation]]"
  - "[[genomic-instability]]"
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Hunt & Cogger 2019 (full PDF): LSEC fenestrae dimensions, pseudocapillarization definition, Kupffer-cell cytokine profile, HPC niche-impairment finding — all confirmed. Bird 2018 (full PDF): macrophage-derived TGFβ1 / 87% reduction / TGFβR1 blockade — confirmed; corrected body text that misattributed the 87% figure to acetaminophen+CCl₄ models (it is from ΔMdm2Hep genetic model). Duan 2023 (full PDF): ALOX15→13-HODE, catalase tetramerization inhibition KD 2.418 µM (~2.4 µM in wiki), cleaved-SREBP1 stabilization, senescent hepatocytes and macrophages as sources — all confirmed. Yin 2024 (full PDF): polyploidy buffering / ~35-40% tetraploid (4n) nuclei in young adult mice / 8n enrichment with aging / non-random allele selection / C57BL/6J mouse-only — confirmed. Mukherjee 2025 (full PDF): Letter, Nat Metab 7:2424-2437, mitochondrial NAD+ via SLC25A51 as rate-limiting for liver regeneration — confirmed. Sjögren 1999: verified via PMC abstract (PMC22065) — serum IGF-1 reduced 75% by liver-specific KO — confirmed. Yang 2024 ([^yang2024] footnote): cross-checked against verified study page studies/yang-2023-primate-liver-aging-snrna-srebp2.md (verified: false but metadata confirmed); Protein Cell 15(2):98-120 — confirmed. Wang 2021 KAT7, Klotz 2009, Zhang 2026 OSK-LNP: abstract-level only (closed-access / #gap/no-fulltext-access); Zhang 2026 J Control Release vol 390 confirmed via Crossref. literature-checked-through: 2026-06-05"
literature-checked-through: 2026-06-05
---

# Liver

The liver is the body's central metabolic clearinghouse — responsible for glucose and lipid homeostasis, xenobiotic detoxification via the CYP450 system, bile acid synthesis, coagulation-factor and vitamin-K-dependent protein synthesis (see [[vitamin-k-cycle]]), acute-phase inflammatory signaling, and the production of roughly 75% of circulating IGF-1 [^sjogren1999]. No other organ integrates as many aging-relevant hallmarks simultaneously, making the liver both a critical sensor of systemic aging and an early effector of multi-organ deterioration.

From a translational standpoint, the liver is also the leading near-term target for nucleic-acid-based aging interventions: systemically administered lipid nanoparticles (LNPs) accumulate preferentially in the liver via the ApoE–ASGR1 pathway, enabling mRNA delivery at doses that are non-toxic in validated platforms. This hepatotropism is a delivery advantage for partial-epigenetic-reprogramming approaches but also means the liver is where most systemic LNP-mRNA therapies exert their off-target effects — concentrating both the therapeutic opportunity and the adverse-effect risk.

---

## Anatomy and zonation

The liver is a ~1.4 kg organ (adult human) organized into functional units called **hepatic lobules**. Blood flows from the portal triad (portal vein + hepatic artery + bile duct) at the periphery toward the central vein, creating an oxygen and nutrient gradient that imposes distinct metabolic identities on hepatocytes according to their position along the **porto-central axis** — a phenomenon called **metabolic zonation**.

| Zone | Location | Metabolic specialization | Aging vulnerability |
|---|---|---|---|
| Zone 1 (periportal) | Adjacent to portal triads; highest O₂/nutrient | Gluconeogenesis, β-oxidation, ureagenesis, first-pass drug metabolism | Mitochondrial gene expression declines most here with age [^nikopoulou2023]; relatively best-preserved metabolic function overall |
| Zone 2 (mid-zonal) | Intermediate | Mixed metabolic functions; bridge between zones 1 and 3 | Intermediate aging changes; least studied |
| Zone 3 (pericentral) | Adjacent to central vein; lowest O₂ | Glycolysis, lipogenesis, dominant CYP450 detoxification (CYP3A4-concentrated); receives nutrient-depleted blood | Greatest vulnerability to lipid accumulation and SREBP hyperactivation [^yang2024]; lipid droplet accumulation on aging [^nikopoulou2023] |

Zonation is maintained by Wnt/β-catenin (zone-3 pericentral identity) and BMP/Ras signaling. With aging, the sharp transcriptional boundaries between zones are disrupted — a finding reported in both mouse and human liver tissue [^sinha2025], though this is recent and awaits independent replication. #gap/needs-replication

---

## Cell composition

The liver contains a stereotyped cell community of six major types. Each has a dedicated wiki page built in the same campaign:

| Cell type | Fraction of total cells | Key aging changes |
|---|---|---|
| [[hepatocytes]] | ~60–65% by number; ~80% by volume | Polyploidy (4n–8n enrichment); senescence accumulation; CMA decline; SREBP-2 hyperactivation; impaired regeneration |
| [[liver-sinusoidal-endothelial-cells]] (LSECs) | ~15–20% | **Pseudocapillarization**: reduction in number AND size of fenestrae (50–250 nm; sieve plates cover ~5% of cell surface) + endothelial thickening + basal-lamina and collagen deposition [^huntcogger2019] |
| [[kupffer-cells]] | ~8–12% | Increased CD68+ cells; elevated IL-6; increased adhesion to LSECs; low-grade hepatic inflammation. No age-related change in TNFα, Mrc1, Arg1, or IL-10 [^huntcogger2019]. Do not frame as "M1 polarization" — this framing is unsupported. #gap/needs-replication |
| [[hepatic-stellate-cells]] | ~5–8% | Partial activation toward myofibroblast state with age; sensitized to SASP-TGF-β from senescent hepatocytes → fibrosis |
| [[cholangiocytes]] | ~3–5% | Age-related biliary dysfunction; senescence contributes to cholestatic phenotypes |
| [[hepatic-progenitor-cells]] | <1% (quiescent at rest) | In-vivo activation after injury is blunted with old age in mice; in-vitro proliferative capacity is preserved → impairment is niche-driven, not intrinsic [^huntcogger2019] |

For mechanistic depth on each cell type, see the linked pages above. This tissue page provides the organ-level synthesis.

---

## Normal physiology relevant to aging

### Glucose and lipid homeostasis — the selective insulin-resistance paradox

The liver is the primary site of **insulin-regulated glucose and lipid metabolism**. In healthy states:
- Postprandial insulin activates PI3K→Akt→FOXO1 (suppressing gluconeogenesis) and PI3K→Akt→SREBP-1c (activating lipogenesis)

In hepatic aging and metabolic disease, this coordination breaks down into **selective insulin resistance**: FOXO1-driven gluconeogenesis becomes resistant to insulin suppression while SREBP-1c-driven lipogenesis persists. The result is simultaneous fasting hyperglycemia and hepatic fat accumulation — the biochemical core of [[masld]] and type-2 diabetes overlap. The upstream driver is mTORC1 hyperactivation, which also independently elevates SREBP-2 activity (via lipin-1 cytoplasmic retention), amplifying cholesterol synthesis [^yang2024].

### CYP450 drug clearance

The CYP450 enzyme system (predominantly CYP3A4, CYP2D6, CYP1A2, CYP2C9 in humans) mediates phase-I xenobiotic metabolism. Hepatic CYP450 capacity declines with age: phase-I clearance drops by up to ~30% by age 70–80, while phase-II conjugation reactions (glucuronidation, sulfation) are relatively preserved [^klotz2009]. Practical consequence: age-related prolonged drug half-lives, increased toxicity at standard doses, and accumulation of reactive intermediates.

### IGF-1 synthesis and the somatotropic axis

The liver is the dominant source of circulating IGF-1 — liver-specific IGF-1 knockout reduces blood IGF-1 by ~75%, though postnatal somatic growth is surprisingly preserved [^sjogren1999]. With aging, hepatic GH signaling declines (reduced hepatic GH receptor expression), resulting in lower hepatic IGF-1 output, contributing to the somatopause phenotype (decreased muscle mass, bone density, and metabolic rate). See [[insulin-igf1]] for the broader axis.

### Coagulation factor and vitamin-K-dependent protein synthesis

The liver synthesizes all coagulation factors (I/fibrinogen, II/prothrombin, V, VII, VIII, IX, X, XI, XII, XIII) and the vitamin-K-dependent proteins (factors II, VII, IX, X; protein C, S, Z). Aging-associated hepatocyte senescence and synthetic dysfunction progressively impair this output. The [[vitamin-k-cycle]] — in which VKORC1 recycles vitamin K epoxide for repeated use — operates in hepatocytes; its efficiency declines with aging-related oxidative modification of VKORC1.

---

## Hallmarks of aging in the liver

### Cellular senescence and the 13-HODE paracrine cascade

Hepatocyte senescence accumulates with chronological age and repeated injury (steatohepatitis, viral hepatitis, toxin exposure). Senescent hepatocytes express p16INK4a, p21CIP1, SA-β-galactosidase, and γH2AX foci, and secrete a hepatocyte SASP including IL-6, IL-8, PAI-1, and TGF-β.

A 2023 *Nature Communications* study identified a lipid-mediated senescence-to-steatosis axis: senescent hepatocytes **and** macrophages secrete 13-hydroxy-9,11-octadecadienoic acid (13-HODE) via upregulated ALOX15 (15-lipoxygenase) [^duan2023]. 13-HODE inhibits **catalase** by blocking its tetramerization (dissociation constant KD ~2.4 µM), increasing hepatocyte ROS. This oxidative shift stabilizes **cleaved SREBP1**, activating the lipogenic gene program → steatosis. Catalase overexpression rescued 13-HODE-induced liver steatosis in this model.

Separately, macrophage-derived TGFβ1 drives **paracrine senescence** in regenerating liver epithelium: macrophage ablation with liposomal clodronate in the partial ΔMdm2Hep genetic mouse model reduced hepatic TGFβ1 expression by 87%; TGFβR1 blockade in acetaminophen and CCl₄ injury models restored regeneration and improved survival beyond the standard treatment window [^bird2018]. Note that the primary driver here is macrophage-derived TGFβ1 — not Kupffer-cell-specific TGFβ1 per se (macrophages include both resident Kupffer cells and infiltrating monocyte-derived macrophages; Bird 2018 did not specifically partition this between populations).

**Upstream: KAT7-driven hepatocyte senescence.** A genome-wide CRISPR screen identified KAT7 (histone acetyltransferase) as a driver of hepatocyte senescence via H3K14 acetylation and p15/CDKN2B induction; AAV-mediated Kat7 knockdown in aged mice extended median lifespan ~17% and reduced liver senescence markers [^wang2021kat7]. Single-lab result; independent replication pending. #gap/needs-replication

### Declining regenerative capacity

The liver's exceptional regenerative capacity — full mass restoration within ~7 days after 70% hepatectomy in young rodents, driven predominantly by hepatocytes re-entering the cell cycle — declines markedly with age. In young (4-week) vs old (40-week) male mice, aged animals show significantly reduced liver weight/body weight recovery at 48–72 h, lower expression of HGF, cMet, cyclin D1, cyclin A2, and PCNA, and elevated LC3 and caspase-3 (increased autophagy and apoptosis relative to proliferation) [^enkhbold2015].

Mitochondrial NAD+ content in hepatocytes, controlled by the inner-membrane transporter **SLC25A51**, is rate-limiting for this regeneration; this pathway declines with age and was identified as a potential target for NAD+ precursor supplementation [^mukherjee2025].

Hepatic progenitor cell (HPC) activation after injury is also blunted in aged mice, but in-vitro proliferative capacity of aged HPCs is preserved, indicating the impairment is **niche-driven rather than intrinsic** [^huntcogger2019].

### Mitochondrial dysfunction

Hepatocytes have among the highest mitochondrial content of any cell type (~1,000–2,000 per cell), supporting gluconeogenesis, β-oxidation, and ureagenesis under constitutively high metabolic load. Age-related mitochondrial changes include reduced OXPHOS complex I and IV activity, impaired mitophagy (accumulation of damaged mitochondria that divert fatty acids into triglyceride storage), and elevated mitochondrial ROS. The SLC25A51/NAD+ axis connects mitochondrial function to regenerative capacity [^mukherjee2025].

| Dimension | Status |
|---|---|
| Mitochondrial dysfunction conserved in humans? | partial — primate data (cynomolgus, baboon) support similar declines; matched-age human hepatocyte bioenergetics directly measured in limited studies |
| Replicated in humans? | no — most mechanistic data are rodent; SLC25A51 regeneration data are mouse-only #gap/needs-human-replication |

### Loss of proteostasis — CMA decline

Hepatocytes are high-volume protein-secretion factories (albumin, coagulation factors, lipoproteins, acute-phase proteins) and carry constitutively high proteostasis demand. **Chaperone-mediated autophagy (CMA)** decline is a key age-related failure mode: LAMP2A expression falls in aged liver, reducing CMA flux; accumulated NCoR1 (a PPARα co-repressor normally cleared by CMA) inactivates PPARα-driven fatty acid oxidation, directly contributing to age-related steatosis [^choi2023]. Impaired lipophagy (selective lipid-droplet autophagy) compounds the steatosis burden. See [[processes/chaperone-mediated-autophagy]] and [[disabled-macroautophagy]].

### Epigenetic alterations and SREBP-2 hyperactivation

The liver has some of the most robust epigenetic aging signals across DNA-methylation clock platforms. Spatially resolved multi-omic profiling in mouse liver confirms that periportal and pericentral hepatocytes follow distinct aging epigenetic trajectories [^nikopoulou2023].

Single-nucleus transcriptomics in aged primate (cynomolgus monkey) liver demonstrates **per-hepatocyte hyperactivation of SREBP-2** — most pronounced in zone-3 pericentral hepatocytes — and shows that forced SREBP2 activation in human primary hepatocytes recapitulates aging phenotypes including impaired detoxification and accelerated senescence [^yang2024]. This primate finding directly confirms the mechanistic prediction from the mTORC1–lipin-1–SREBP-2 axis. Extrapolation to humans: partial (primate data support conservation; human in-vivo aged-liver biopsy confirmation pending).

| Dimension | Status |
|---|---|
| SREBP-2 hyperactivation conserved in humans? | partial — primate in vivo + human primary hepatocyte in vitro; no aged human liver biopsy snRNA-seq replication yet |
| Replicated in humans? | no — single primate cohort; independent human-liver study needed |

### Hepatocyte polyploidy — a compensatory buffer

Unlike most mammalian somatic cells, hepatocytes are normally polyploid. In young adult mice, ~35–40% of hepatocyte nuclei are tetraploid (4n); with aging, the proportion of octaploid (8n) nuclei increases. Importantly, this polyploidization appears **compensatory and buffering** rather than a driver of pathology: tetraploid hepatocytes maintain more robust transcriptional regulatory networks, undergo non-random allelic segregation (preferentially retaining wild-type alleles), and haploinsufficiency of hepatocyte master regulators (HNF4A, CEBPA, CTCF) triggers early tetraploid enrichment that suppresses age-related steatosis [^yin2024].

**Important scope caveat:** all polyploidy-buffering mechanistic data are from C57BL/6J mice. Human hepatocytes are known to be polyploid, but the protective allele-selection mechanism has not been directly tested in human liver aging. #gap/needs-human-replication

---

## Age-associated phenotypes

The liver's aging trajectory converges on four major clinical phenotypes, each with a dedicated page:

- **[[masld]]** (metabolic-associated steatotic liver disease) — hepatic fat accumulation driven by CMA failure, AMPK decline, SASP-driven lipogenesis, and selective insulin resistance; the most prevalent aging-associated liver condition
- **[[liver-fibrosis]]** — progressive collagen deposition driven by SASP-TGF-β activation of hepatic stellate cells into myofibroblasts; cirrhosis is the end-stage
- **[[age-related-cholestasis]]** — biliary dysfunction in the aging liver; cholangiocyte senescence, bile acid composition changes, altered biliary secretion
- **[[hepatocellular-carcinoma]]** — arising on a background of chronic hepatocyte senescence, genomic instability, cirrhosis, and immune surveillance failure; age is the dominant non-infectious risk factor
- **Altered drug metabolism** — reduced CYP450 capacity (~30% decline by age 70–80 [^klotz2009]) contributes to polypharmacy toxicity risk in older adults

---

## Pathway intersections

| Pathway | Role in hepatic aging |
|---|---|
| [[mtor]] | mTORC1 hyperactivation → lipin-1 cytoplasmic retention → SREBP-2 nuclear entry → cholesterol synthesis ↑; suppresses autophagy/CMA; rapamycin normalizes in rodent models |
| [[ampk]] | Declines with age; counter-regulatory — normally phosphorylates/inactivates HMGCR, FASN, SREBP-1c; metformin acts via hepatic AMPK; AMPK decline accelerates lipogenesis |
| [[insulin-igf1]] | GH/IGF-1 axis declines; liver produces ~75% of circulating IGF-1; selective insulin resistance produces FOXO1-driven gluconeogenesis + persistent SREBP-1c lipogenesis |
| [[wnt-beta-catenin]] | Maintains zone-3 pericentral identity (CYP450 concentration, ASGR1 expression); disrupted in aging; regulates AXIN2+ hepatocyte self-renewal |
| [[cgas-sting]] | Activated by cytoplasmic DNA from senescent/damaged hepatocytes; drives type-I interferon and NF-κB SASP amplification; paracrine spread of senescence |
| [[autophagy]] / [[processes/chaperone-mediated-autophagy]] | Both pathways impaired in aged liver; lipophagy failure → steatosis; CMA failure → NCoR1 accumulation → PPARα inactivation → impaired β-oxidation |

---

## Partial epigenetic reprogramming — liver as the lead target

Among all tissues targeted by in-vivo partial reprogramming approaches, the liver is the nearest-term lead target for several reinforcing reasons:

1. **LNP hepatotropism.** Systemically administered LNPs accumulate in the liver via ApoE–ASGR1 interaction — the same platform proven in ~100 million COVID-19 vaccine recipients delivers mRNA to hepatocytes without organ-specific engineering.
2. **Well-validated functional endpoints.** Liver regeneration, fibrosis scoring (Metavir/Ishak), ALT/AST normalization, albumin output, and CYP3A4 activity provide quantitative surrogate endpoints for efficacy.
3. **Disease-relevant regulatory entry.** MASLD and liver fibrosis are mechanistically linked to epigenetic aging, clinically prevalent, and represent tractable first-in-human indications.

**Preclinical evidence:** Zhang et al. (2026) demonstrated that hepatocyte-specific delivery of OSK (OCT4/SOX2/KLF4) mRNA via a three-component ionizable LNP (H4T3_F6) attenuated liver fibrosis in a mouse model; transient reprogramming shifted hepatocytes from a fibrotic to a progenitor-like state and reduced extracellular matrix deposition [^zhang2026osk]. #gap/needs-replication — single lab, single fibrosis model, very recent; no independent replication as of 2026-06-05.

**Company-reported interest:** NewLimit has reportedly identified liver as a lead program based on LNP hepatotropism. This is company-disclosed / non-peer-reviewed; no published preclinical or clinical data. #gap/unsourced — do not present as established evidence.

**Safety caution:** Classic OSKM gain-of-function in the liver caused hepatocyte dysplasia and hepatocellular tumors in the original Yamanaka-factor mouse systems. Transient pulsed OSK (without MYC) shows a more favorable preclinical safety profile, but the therapeutic window — sufficient epigenetic rejuvenation without oncogenic risk — has not been characterized in aged human liver. Given that the liver is the primary site of HCC development, this safety question is especially critical. #gap/long-term-unknown

For the full intervention pipeline and biology of transient reprogramming, see [[processes/partial-reprogramming]] and [[in-vivo-partial-reprogramming-therapy]].

---

## Other interventions touching liver aging

| Intervention | Mechanism in liver | Evidence level |
|---|---|---|
| [[interventions/lifestyle/caloric-restriction]] | Reduces hepatic fat (MASLD reversal); reduces LSEC pseudocapillarization and partially restores fenestrae; reduces Kupffer-cell inflammation | Strong preclinical; moderate human (observational + weight-loss RCTs) |
| [[rapamycin]] / mTOR inhibition | Normalizes mTORC1 hyperactivation; restores autophagy/CMA; reduces SREBP-2 nuclear entry; extends lifespan in mice with liver metabolic benefit | Preclinical well-supported; limited aging-specific human hepatic data |
| Senolytics (dasatinib + quercetin, navitoclax) — [[molecules/compounds/dasatinib]], [[molecules/compounds/quercetin]], [[molecules/compounds/fisetin]] | Clear senescent hepatocytes and stellate cells; reduce SASP-TGF-β; reduce fibrosis in mouse models | Preclinical; no liver-specific human senolytic RCT completed as of 2026-06-05 #gap/needs-human-replication |
| NAD+ precursors ([[molecules/compounds/nmn]], [[molecules/compounds/nr]]) | Restore hepatocyte mitochondrial NAD+ (SLC25A51) → improve β-oxidation and regenerative capacity [^mukherjee2025] | Preclinical mechanistic; human hepatic NAD+ repletion effect on regeneration not yet demonstrated #gap/needs-human-replication |
| CMA activators | Restore LAMP2A → degrade NCoR1 → rescue PPARα fatty acid oxidation [^choi2023] | Preclinical only; no clinical-stage compound |
| Metformin (AMPK activation) | Hepatic AMPK activation restrains gluconeogenesis and lipogenesis; modest MASLD benefit | Moderate human evidence; TAME trial ongoing |

---

## Hallmark connections

| Hallmark | Liver-specific mechanism |
|---|---|
| [[cellular-senescence]] | Hepatocyte + Kupffer-cell senescence; 13-HODE/ALOX15/catalase/SREBP1 lipogenesis cascade [^duan2023]; macrophage-TGFβ1 paracrine senescence spread [^bird2018]; KAT7 driver [^wang2021kat7]; senescent LSECs in pseudocapillarization |
| [[loss-of-proteostasis]] | LAMP2A-CMA decline → NCoR1 accumulation → PPARα inactivation [^choi2023]; lipophagy failure; UPS impairment in aged hepatocytes |
| [[deregulated-nutrient-sensing]] | mTORC1/lipin-1/SREBP-2 axis [^yang2024]; AMPK decline; selective insulin resistance (FOXO1 gluconeogenesis + SREBP-1c lipogenesis); IGF-1 output decline [^sjogren1999] |
| [[epigenetic-alterations]] | Zonation-dependent epigenetic drift [^nikopoulou2023]; SREBP-2 hyperactivation partly epigenetically mediated [^yang2024]; target of OSK reprogramming |
| [[mitochondrial-dysfunction]] | OXPHOS complex I/IV decline; SLC25A51/NAD+ limitation for regeneration [^mukherjee2025]; impaired mitophagy → fat accumulation |
| [[chronic-inflammation]] | Kupffer-cell IL-6 elevation; 13-HODE-driven ROS → SASP amplification; low-grade hepatic inflammaging; NF-κB activation via cGAS-STING |
| [[genomic-instability]] | Hepatocyte somatic mutation accumulation; polyploidy as partial compensatory buffer [^yin2024]; HCC risk accumulation with age |

---

## Limitations and gaps

| Gap | Tag | Notes |
|---|---|---|
| Kupffer-cell M1/M2 polarization framing | #gap/needs-replication | Hunt & Cogger 2019 found no age-related change in TNFα, Mrc1, Arg1, IL-10 in Kupffer cells; M1-polarization framing is unsupported |
| Polyploidy buffering in human liver | #gap/needs-human-replication | All allele-selection / buffering data are C57BL/6J mice; human in-vivo polyploidy-aging studies pending |
| SREBP-2 hyperactivation in human aged liver | #gap/needs-human-replication | Primate + human in-vitro data; no human in-vivo snRNA-seq liver biopsy series yet |
| Zonation disruption in human aging | #gap/needs-replication | Sinha 2025 very recent; independent replication in a second human cohort pending |
| SLC25A51/NAD+ in human liver regeneration | #gap/needs-human-replication | Mukherjee 2025 data are mouse-only; human replication pending |
| OSK reprogramming safety window in aged human liver | #gap/long-term-unknown | Therapeutic window (rejuvenation vs HCC risk) undefined in aged human hepatocytes |
| KAT7 lifespan extension | #gap/needs-replication | Wang 2021 single-lab; independent replication not confirmed as of 2026-06-05 |
| CYP450 quantitative decline figure (~30%) | #gap/needs-replication | Klotz 2009 is a review; primary pharmacokinetic study citations needed |
| Caloric restriction LSEC fenestrae restoration | #gap/needs-human-replication | Primary citation needed; claim well-established in rat models, human direct evidence limited |
| NewLimit liver program | #gap/unsourced | Company-disclosed; not peer-reviewed |

---

## Cross-references

**Cell types (liver community):**
- [[hepatocytes]] — parenchymal cells; polyploidy, senescence, CMA, SREBP-2, partial reprogramming target
- [[liver-sinusoidal-endothelial-cells]] — pseudocapillarization; fenestrae loss; LSEC aging
- [[kupffer-cells]] — hepatic macrophages; IL-6 elevation; TGFβ1 paracrine senescence; no M1 shift
- [[hepatic-stellate-cells]] — fibrosis effectors; activated by SASP-TGF-β
- [[cholangiocytes]] — biliary aging; cholestasis
- [[hepatic-progenitor-cells]] — niche-impaired regeneration; intrinsic capacity preserved

**Hallmarks and processes:**
- [[cellular-senescence]] — hallmark MOC
- [[loss-of-proteostasis]] — hallmark MOC; CMA and autophagy decline
- [[disabled-macroautophagy]] — hallmark MOC; lipophagy failure
- [[deregulated-nutrient-sensing]] — hallmark MOC; mTOR/AMPK/SREBP-2 axis
- [[epigenetic-alterations]] — hallmark MOC; strong hepatic clock signal
- [[mitochondrial-dysfunction]] — hallmark MOC
- [[chronic-inflammation]] — hallmark MOC
- [[genomic-instability]] — hallmark MOC; somatic mutation + polyploidy
- [[processes/partial-reprogramming]] — liver is the lead LNP-targeted tissue
- [[processes/chaperone-mediated-autophagy]] — LAMP2A-CMA decline
- [[processes/sasp]] — hepatocyte SASP composition

**Pathways:**
- [[mtor]] · [[ampk]] · [[insulin-igf1]] · [[wnt-beta-catenin]] · [[cgas-sting]] · [[vitamin-k-cycle]]

**Phenotypes:**
- [[masld]] · [[liver-fibrosis]] · [[age-related-cholestasis]] · [[hepatocellular-carcinoma]]

**Interventions:**
- [[in-vivo-partial-reprogramming-therapy]] · [[rapamycin]] · [[molecules/compounds/nmn]] · [[molecules/compounds/nr]] · [[molecules/compounds/dasatinib]] · [[molecules/compounds/quercetin]] · [[molecules/compounds/fisetin]]

**Parent system:**
- [[digestive-system]] (implicit stub)

---

## Footnotes

[^sjogren1999]: doi:10.1073/pnas.96.12.7088 · Sjögren K, Liu JL, Blad K, Skrtic S, Vidal O, Wallenius V et al. · "Liver-derived insulin-like growth factor I (IGF-I) is the principal source of IGF-I in blood but is not required for postnatal body growth in mice" · Proc Natl Acad Sci USA 96(12):7088-7092 · 1999 · in-vivo · model: liver-specific IGF-1 KO mouse · key finding: liver produces ~75% of circulating IGF-1; growth preserved despite hepatic IGF-1 loss

[^huntcogger2019]: doi:10.1016/j.csbj.2019.07.021 · Hunt NJ, Kang SWS, Lockwood GP, Le Couteur DG, Cogger VC · "Hallmarks of Aging in the Liver" · Comput Struct Biotechnol J 17:1151-1161 · 2019 · review · key findings: LSEC fenestrae 50–250 nm / sieve plates ~5% of cell surface; pseudocapillarization = fenestrae reduction in number AND size + endothelial thickening + basal lamina/collagen deposition; no age-related change in Kupffer-cell TNFα/Mrc1/Arg1/IL-10; HPC niche-driven (not intrinsic) impairment; Kupffer CD68+ and IL-6 elevated with age

[^nikopoulou2023]: doi:10.1038/s43587-023-00513-y · Nikopoulou C, Kleinenkuhnen N, Parekh S et al. · "Spatial and single-cell profiling of the metabolome, transcriptome and epigenome of the aging mouse liver" · Nature Aging 3(11):1430-1445 · 2023 · in-vivo · model: male C57BL/6 mice (young vs old); spatial transcriptomics + scATAC-seq + scRNA-seq + lipidomics · key finding: periportal hepatocytes show mitochondrial gene expression decline; pericentral hepatocytes accumulate lipid droplets; epigenome changes are zonation-dependent

[^yang2024]: doi:10.1093/procel/pwad039 · Yang S, Liu C, Jiang M et al. · "A single-nucleus transcriptomic atlas of primate liver aging uncovers the pro-senescence role of SREBP2 in hepatocytes" · Protein Cell 15(2):98-120 · 2024 · in-vivo (snRNA-seq) + in-vitro · model: Macaca fascicularis (cynomolgus monkey); human primary hepatocytes (forced SREBP2 activation) · key finding: SREBP-2 hyperactivated per-hepatocyte in aged primate liver; zone-3 most pronounced; forced SREBP2 in human hepatocytes recapitulates aging phenotypes

[^sinha2025]: doi:10.1097/hep.0000000000001451 · Sinha S, Ali Q, Zhang T et al. · "Aging disrupts hepatocyte zonation homeostasis in mice and humans" · Hepatology 83(5):1143-1157 · 2025 · in-vivo + human tissue · model: mouse + human liver; spatial transcriptomics · key finding: aging disrupts periportal/pericentral transcriptional boundaries; hepatocytes lose zone-specific identity

[^duan2023]: doi:10.1038/s41467-023-44026-z · Duan J, Dong W, Wang G, Xiu W, Pu G, Xu J, Ye C, Zhang X, Zhu Y, Wang C · "Senescence-associated 13-HODE production promotes age-related liver steatosis by directly inhibiting catalase activity" · Nat Commun 14(1):8151 · 2023 · in-vivo + in-vitro · model: male mice (aged) + primary hepatocytes and macrophages · key finding: senescent hepatocytes and macrophages secrete 13-HODE via ALOX15; 13-HODE inhibits catalase tetramerization (KD ~2.4 µM) → ↑ROS → stabilizes cleaved SREBP1 → lipogenesis → steatosis; CAT overexpression rescues

[^bird2018]: doi:10.1126/scitranslmed.aan1230 · Bird TG, Müller M, Boulter L et al. · "TGFβ inhibition restores a regenerative response in acute liver injury by suppressing paracrine senescence" · Sci Transl Med 10(454):eaan1230 · 2018 · in-vivo · model: mouse ΔMdm2Hep genetic model + acetaminophen + CCl₄ liver injury + human liver biopsy/transplant tissue · key finding: macrophage-derived TGFβ1 drives paracrine senescence; macrophage ablation (liposomal clodronate in ΔMdm2Hep model) reduced hepatic TGFβ1 expression by 87%; TGFβR1 blockade in acetaminophen/CCl₄ models restored regeneration and improved survival

[^klotz2009]: doi:10.1080/03602530902722679 · Klotz U · "Pharmacokinetics and drug metabolism in the elderly" · Drug Metab Rev 41(2):67-76 · 2009 · review · key finding: hepatic phase-I CYP450 clearance declines up to ~30% by age 70–80; phase-II conjugation relatively preserved; renal excretion declines ~50%

[^mukherjee2025]: doi:10.1038/s42255-025-01408-5 · Mukherjee S, Velázquez Aponte RA, Perry CE et al. · "Hepatocyte mitochondrial NAD+ content is limiting for liver regeneration" · Nat Metab 7:2424-2437 · 2025 · in-vivo · model: mouse partial hepatectomy; Slc25a51 haploinsufficiency + hepatocyte-specific AAV-SLC25A51 overexpression · key finding: mitochondrial NAD+ content (set by SLC25A51) is rate-limiting for hepatocyte regeneration; Letter (Nat Metab 7:2424-2437) #gap/needs-human-replication

[^yin2024]: doi:10.1016/j.jhep.2024.03.043 · Yin K, Büttner M, Deligiannis IK et al. · "Polyploidisation pleiotropically buffers ageing in hepatocytes" · J Hepatol 81(2):289-302 · 2024 · in-vivo · model: wild-type C57BL/6J mice (young 3 months, old 24 months) + haploinsufficient strains (Hnf4a+/0, Cebpa+/0, Ctcf+/0) · key finding: ~35–40% of hepatocyte nuclei are 4n in young adult mice; 8n enrichment with aging; polyploidy is compensatory/buffering with non-random wild-type allele selection; mouse-only data #gap/needs-human-replication

[^wang2021kat7]: doi:10.1126/scitranslmed.abd2655 · Wang W, Zheng Y, Sun S et al. · "A genome-wide CRISPR-based screen identifies KAT7 as a driver of cellular senescence" · Sci Transl Med 13(599):eabd2655 · 2021 · in-vivo (aged mouse) + in-vitro · key finding: KAT7 knockdown extended median mouse lifespan ~17%; reduced liver senescence markers; single-lab #gap/needs-replication

[^enkhbold2015]: doi:10.1111/jgh.12930 · Enkhbold C, Morine Y, Utsunomiya T et al. · "Dysfunction of liver regeneration in aged liver after partial hepatectomy" · J Gastroenterol Hepatol 30(7):1217-24 · 2015 · in-vivo · model: young (4-week) vs old (40-week) male mice, 70% hepatectomy · key finding: aged mice show impaired liver-weight recovery at 48–72 h; reduced HGF, cMet, cyclin D1/A2, PCNA; elevated LC3 and caspase-3

[^choi2023]: doi:10.1016/j.molmet.2023.101784 · Choi YJ, Yun SH, Yu J et al. · "Chaperone-mediated autophagy dysregulation during aging impairs hepatic fatty acid oxidation via accumulation of NCoR1" · Mol Metab 76:101784 · 2023 · in-vivo + in-vitro · model: aged mouse liver + primary hepatocytes · key finding: LAMP2A decline → NCoR1 accumulation → PPARα inactivation → impaired fatty acid oxidation; CMA activator AR7 rescues phenotype

[^zhang2026osk]: doi:10.1016/j.jconrel.2025.114569 · Zhang C, Bai Y, Yin Q, Li J, Huang K, Qiu M · "Hepatocyte-specific partial cellular reprogramming via selective OSK mRNA lipid nanoparticle attenuates liver fibrosis" · J Control Release 390:114569 · 2026 · in-vivo · model: mouse liver fibrosis model · key finding: ionizable LNP-delivered OSK mRNA shifts hepatocytes toward progenitor-like state; reduces ECM deposition; single lab #gap/needs-replication
