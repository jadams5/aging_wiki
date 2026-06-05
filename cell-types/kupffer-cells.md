---
type: cell-type
aliases: [Kupffer cells, hepatic macrophages, liver-resident macrophages, KCs]
cell-ontology-id: CL:0000091
tissue-of-origin: ["[[liver]]"]
key-markers-mouse: [CLEC4F+, TIM4+ (TIMD4+), F4/80+ (high), CD68+, CX3CR1-low, Ly6C-]
key-markers-human: [CD68+, CD163+, VSIG4+, CLEC4F+ (lower expression than mouse), CX3CR1-low]
lineage-output: []
self-renewal: "yes (slow, local; can be partially replaced by monocyte-derived macrophages under conditions of KC depletion or chronic injury)"
aging-relevant: yes
affected-hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
key-aging-phenotypes: ["[[masld]]", "[[liver-fibrosis]]"]
typical-niche: "hepatic sinusoids (perisinusoidal space); adherent to liver sinusoidal endothelial cells; highest density in periportal region"
niche-signaling: ["[[tlr4]]", "[[csf1r]]"]
single-cell-aging-signature: null
literature-checked-through: 2026-06-05
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Hunt & Cogger 2019 (full PDF, doi:10.1016/j.csbj.2019.07.021): all KC aging claims confirmed (CD68+ increase, IL-6 elevation, KC-LSEC adhesion increase, no change in TNFα/Mrc1/Arg1/IL-10); primary KC data in that review attributed to Maeso-Díaz 2018 (Aging Cell) which was not independently re-read. Gomez Perdiguero 2015 (abstract/PMC): EMP timing (E8.5/E10.5) confirmed; year 2015 (print date) correct. Bonnardel 2019 (abstract): NOTCH-BMP/LXRα/ID3 niche signaling confirmed. van der Tuin 2018: DOI corrected from 10.1161/JAHA.117.007793 to 10.1161/JAHA.117.008105 (article number e008105); PMID 29525783 and title/authors correct. Brouwer 1995: DOI 10.1042/cs0880211 confirmed via Crossref; paper is closed-access, claims not independently PDF-verified (#gap/no-fulltext-access on that footnote). Bird 2018: footnote corrected — 87% TGFβ1 reduction is from ΔMdm2Hep genetic model (not directly attributed to acetaminophen+CCl₄). Scott 2016 and Stahl 2018: DOIs confirmed via Crossref; PDFs not downloaded; claims are supported by abstracts and cross-check with verified liver.md. Canonical-DB identity fields (CL:0000091) not independently re-verified."
---

# Kupffer Cells

Kupffer cells (KCs) are the resident macrophages of the [[liver]], and constitute the largest population of tissue-resident macrophages in the body. Positioned in the hepatic sinusoids, they are the primary sentinel system for gut-derived pathogens, endotoxins, and particulate matter arriving via the portal blood. With aging, Kupffer cells undergo a moderate shift toward a pro-inflammatory state — characterized by increased CD68-positive cell numbers and elevated IL-6 expression — but this is a nuanced change: multiple activation markers including TNFα, Mrc1, Arg1, and IL-10 show no age-related change [^huntcogger2019]. A simplistic "M1 polarization" framing is not supported by the available data. Aging Kupffer cells additionally adhere more readily to [[liver-sinusoidal-endothelial-cells]] and contribute to the low-grade hepatic inflammaging that drives risk for [[masld]] and [[liver-fibrosis]].

---

## Identity

### Ontogeny

Kupffer cells have an **embryonic yolk-sac origin**, deriving from Tie2+ erythro-myeloid progenitors (EMPs) that arise in the yolk sac at ~embryonic day 8.5 and colonize the fetal liver by ~day 10.5 [^gomezperdiguero2015]. This origin is shared with brain microglia, Langerhans cells, and alveolar macrophages, and distinguishes resident Kupffer cells from circulating monocytes (which derive from definitive hematopoietic stem cells). In adult animals, Kupffer cells are maintained primarily through **slow, local self-renewal** rather than continuous monocyte input.

The picture is complicated by a critical caveat: monocytes **can** engraft the liver macrophage niche and, when given space (by KC depletion or injury), differentiate into long-lived, self-renewing cells that are transcriptionally indistinguishable from embryo-derived KCs [^scott2016]. The identity of monocyte-engrafted cells is enforced by the hepatic niche: hepatocytes induce the transcription factor ID3, while [[hepatic-stellate-cells]] and [[liver-sinusoidal-endothelial-cells]] synergistically induce LXRα via NOTCH-BMP signaling, collectively imprinting KC identity [^bonnardel2019].

**Age-related compositional shift:** With aging and in the setting of chronic liver injury, monocyte-derived macrophages contribute a progressively larger fraction of the intrahepatic macrophage pool, partially displacing embryo-derived, self-renewing KCs. This compositional shift is biologically important: embryo-derived KCs and monocyte-derived macrophages differ in their steady-state transcriptional profiles and functional properties, though the precise functional consequences of the age-related shift in KC composition in healthy aging remain incompletely defined [^stahl2018]. #gap/needs-human-replication — composition shift data are primarily from mouse depletion/repopulation models; human aging data on KC ontogeny fraction are lacking.

| Dimension | Status |
|---|---|
| Yolk-sac origin conserved in humans? | partial — lineage-tracing data are mouse; human KC developmental biology is inferred from analogy |
| Self-renewal from monocytes excluded in healthy aging? | no — monocyte-derived replacement is estimated to increase with age and injury |
| Monocyte-KC identity convergence demonstrated? | yes (mouse) [^scott2016] |

### Canonical surface markers

#### Mouse (most validated)

| Marker | Notes |
|---|---|
| CLEC4F | C-type lectin; most specific marker for embryonic-origin resident KCs in mouse; not expressed by infiltrating monocyte-derived macrophages; validated for distinguishing KC subsets [^vandertuin2018] |
| TIM4 (TIMD4) | Phosphatidylserine receptor; marks long-lived, embryo-derived KCs; low/absent on recently engrafted monocyte-derived macrophages |
| F4/80 (EMR1, ADGRE1) | Pan-macrophage; high expression on liver KCs vs. other tissue macrophages; retained across activation states |
| CD68 | Lysosome-associated glycoprotein; pan-macrophage; standard IHC marker; elevated in aging liver (see Aging section) |
| CX3CR1 | Low on resident KCs; high on circulating monocytes and recently recruited cells; useful to distinguish KC pools by flow cytometry |
| Ly6C | Negative on resident KCs; positive on recently recruited monocytes (Ly6C-high "classical" subset) |

#### Human

CLEC4F expression is lower in human liver than in mouse and its specificity is less established. CD68 and CD163 are the standard IHC markers for human Kupffer cells/alternatively activated macrophages; VSIG4 (CRIg) marks resident KCs with high specificity. #gap/needs-replication — human-specific KC marker validation is less mature than mouse; single-cell atlases are resolving this.

---

## Distribution and niche

Kupffer cells reside in the hepatic sinusoids, where they adhere to the fenestrated endothelium of [[liver-sinusoidal-endothelial-cells]] and extend processes into the sinusoidal lumen to sample passing blood. Their distribution follows a **periportal-to-pericentral gradient**: highest density in periportal (zone 1) sinusoids, where they are first to encounter portal blood carrying gut-derived antigens and endotoxin.

KCs constitute approximately **10–15% of all liver cells** and the vast majority of hepatic macrophages in the unperturbed adult liver (>80% of total liver macrophages). The remaining intrahepatic macrophages are monocyte-derived cells, which increase in number during inflammation and injury.

---

## Core functions

### Portal-blood immune surveillance and LPS clearance

The liver receives ~70–80% of its blood supply from the portal vein, which drains the gut and carries low but continuous levels of gut-derived lipopolysaccharide (LPS), bacterial products, and particulate matter. Kupffer cells are the first macrophage population encountered by portal blood and function as a constitutive clearance filter: they recognize LPS via Toll-like receptor 4 (TLR4)/CD14/MD-2 signaling and efficiently phagocytose bacteria, bacterial fragments, and immune complexes before these reach the systemic circulation [^huntcogger2019].

KCs simultaneously enforce **immunological tolerance** to portal antigens that represent food-derived molecules and commensal bacteria — a function critical to preventing chronic hepatic inflammation from constitutive low-level LPS exposure. This tolerogenic capacity is thought to depend, at least partly, on CD163 expression and IL-10 secretion.

### Iron recycling and erythrophagocytosis

Kupffer cells phagocytose senescent and damaged red blood cells (erythrophagocytosis), recycling iron from heme via heme oxygenase-1 (HO-1; HMOX1) and ferritin-mediated storage. This makes the liver — via Kupffer cells — a central node in systemic iron homeostasis. Aged Kupffer cells retain phagocytic capacity for erythrocytes, though the overall liver iron regulatory network shifts with age and in the context of MASLD. #gap/unsourced — quantitative age-related changes in KC erythrophagocytosis rates in vivo are not well characterized.

### Innate immune response and SASP amplification

Upon activation by pathogen-associated molecular patterns (PAMPs) or danger-associated molecular patterns (DAMPs) from damaged hepatocytes, KCs secrete pro-inflammatory mediators including TNFα, IL-1β, IL-6, IL-12, and reactive oxygen species (ROS). KC-derived TNFα and TGFβ1 activate [[hepatic-stellate-cells]] and drive fibrogenic signaling, linking KC activation to the initiation of hepatic fibrosis [^huntcogger2019]. TGFβ1 from macrophages (including KCs) is also the primary driver of paracrine senescence spread to uninjured hepatocytes following acute liver injury [^bird2018].

---

## Aging features

### What changes — the carefully-scoped evidence

The most important framing constraint for this section comes from Hunt and Cogger 2019 [^huntcogger2019], who reviewed the aging-KC literature based on primary data from aged rat liver and concluded:

- **Increased CD68+ cell numbers** with age
- **Elevated IL-6 expression** in aged liver KCs
- **Increased KC adhesion** to [[liver-sinusoidal-endothelial-cells]] (LSECs)
- **Contribution to low-grade hepatic inflammation** (inflammaging)

**Critically, no age-related change was found in:** TNFα, Mrc1 (mannose receptor / CD206), Arg1 (arginase-1), or IL-10 in aged rat liver [^huntcogger2019].

This means that the available evidence does **not** support the simple "M1 polarization" narrative — the increase in CD68 cell numbers and IL-6 is real, but the pro-inflammatory shift is partial and selective, not a broad skew toward classical M1 activation. The markers typically used to designate "M1" (TNFα, IL-12, reduced IL-10) do not shift as expected with age.

An additional note of caution: Brouwer et al. (1995) compared cytokine responses of KCs isolated from young and old rats stimulated with LPS ex vivo and found that "the effects of ageing on any of these responses of Kupffer cells were minimal" [^brouwer1995]. This suggests that KC responsiveness per se may not be dramatically altered; the age-related inflammatory shift may reflect increased KC numbers and baseline activation state more than a cell-intrinsic functional rewiring. These older mechanistic data have not been revisited with modern single-cell tools.

#gap/needs-replication — the primary data on aged KC phenotype are from rat models and limited-scope studies; a dedicated single-cell RNA-seq study of Kupffer cells across human or primate aging would substantially strengthen the evidence base.

| Dimension | Status |
|---|---|
| KC CD68+ number increase in aged liver? | yes — rat data [^huntcogger2019] |
| KC IL-6 elevation in aged liver? | yes — rat data [^huntcogger2019] |
| KC TNFα elevation in aged liver? | no — not observed in available data [^huntcogger2019] |
| Mrc1, Arg1, IL-10 change with age? | no — not observed in available data [^huntcogger2019] |
| M1 polarization narrative supported? | not supported by current evidence |
| LPS-stimulated KC cytokine responses altered with age? | minimal — ex vivo rat data [^brouwer1995] |
| Human aging KC data available? | limited — review-level only [^stahl2018] |

### Compositional aging: resident vs. monocyte-derived

An underappreciated dimension of KC "aging" is that the composition of the intrahepatic macrophage pool changes with age, with monocyte-derived macrophages comprising a larger fraction. The review by Stahl et al. notes that aging studies in hepatic macrophages are complicated by the mixture of KC subtypes and that "the effects of aging on hepatic macrophage population dynamics, polarization, and function are not well understood" [^stahl2018] — underscoring that the field lacks granular, single-cell-resolved aging data for this compartment.

### LSEC–Kupffer cell adhesion and contributes to inflammaging

Increased KC adhesion to LSECs with age is thought to contribute to the low-grade hepatic inflammatory environment seen in aged liver — though the molecular mechanism driving increased adhesion (changes in ICAM-1/integrin pairs? KC activation state? LSEC remodeling?) is not fully characterized [^huntcogger2019]. #gap/no-mechanism — the trigger for age-related increased KC-LSEC adhesion is not defined.

### Links to MASLD and fibrosis

KC-derived IL-6 and other cytokines amplify hepatocyte insulin resistance and contribute to MASLD-associated inflammation. KC-derived TGFβ1 activates stellate cells, and KC-derived TNFα sustains stellate cell activation during the early fibrogenic response. Senescent hepatocytes — which accumulate with age — secrete SASP factors (including TGFβ, IL-6, and IL-8) that, in turn, can activate KCs, creating a feed-forward loop between hepatocyte senescence and KC-mediated inflammation [^huntcogger2019]. The 13-HODE lipid mediator secreted by senescent hepatocytes and macrophages also directly inhibits catalase activity, contributing to oxidative stress and MASLD progression [^duan2023].

---

## Kupffer cells and cellular senescence

KCs can become senescent under conditions of chronic injury and MASLD, adopting a SASP-like state that amplifies hepatic inflammation. However, dedicated quantification of p16+/SA-β-gal+ KCs in the aged liver — in contrast to injury-induced senescence — is lacking. The contribution of KC senescence (vs. increased KC numbers and IL-6 expression without full senescence markers) to hepatic aging remains an open question. #gap/unsourced — primary-source data specifically quantifying senescent KCs in aged healthy human or rodent liver are absent from the literature surveyed here.

---

## Disease relevance

### MASLD / metabolic dysfunction-associated steatotic liver disease

Kupffer cells are centrally involved in MASLD pathogenesis: KC-derived IL-1β suppresses PPARα (peroxisome proliferator-activated receptor alpha) activity, impairing hepatocyte β-oxidation and promoting lipid accumulation [^stienstra2010]. KCs activated by gut-derived LPS (increased gut permeability in metabolic syndrome / "leaky gut") and fatty-acid-induced TLR4 signaling amplify hepatocyte steatosis via paracrine cytokine loops. With age, increased KC numbers and IL-6 output accelerate MASLD-associated inflammation even in the absence of frank metabolic disease.

### Liver fibrosis

KC-derived TGFβ1 is the primary pro-fibrotic signal to [[hepatic-stellate-cells]]. KC activation is therefore an early upstream event in fibrosis progression; KC depletion models consistently reduce fibrosis in rodents. The monocyte-derived macrophages that partially replace resident KCs in aged/injured liver may have a more pro-fibrotic character than the tolerogenic embryo-derived KCs, though this is debated. #gap/contradictory-evidence — whether resident KCs and monocyte-derived macrophages differ functionally in pro-fibrotic output remains contested.

### Hepatocellular carcinoma

KC-derived SASP factors contribute to the inflammatory microenvironment that promotes HCC emergence. KCs also play a surveillance role in early tumor development, but their immunosuppressive capacity is co-opted by advanced HCC. KC CLEC4F expression is being explored as a target for diagnostic nanobodies and imaging agents [^zheng2017].

---

## Limitations and gaps

- `#gap/needs-human-replication` — virtually all mechanistic KC aging data are from rat or mouse models; human KC aging biology is essentially unstudied at single-cell resolution
- `#gap/needs-replication` — CD68+/IL-6 elevation in aged KCs draws from a review citing limited primary data; a primary mouse or primate aging-KC single-cell study is needed
- `#gap/no-mechanism` — molecular trigger for age-related increased KC-LSEC adhesion is not defined; mechanism of IL-6 selectivity (vs. TNFα, which does not change) is not known
- `#gap/unsourced` — quantitative p16+/SA-β-gal+ KC senescence in aged healthy liver; age-related changes in KC erythrophagocytosis rates in vivo
- `#gap/contradictory-evidence` — whether the age-associated compositional shift from embryo-derived to monocyte-derived KCs is functionally pro-inflammatory remains unresolved; Brouwer 1995 and limited aging data present discordant views
- `#gap/long-term-unknown` — how KC composition and function change across the full human lifespan (not just old vs. young comparisons) is not established; large-scale aging liver macrophage atlases are in progress

---

## Cross-references

- [[liver]] — parent tissue page; KC biology detailed in the cell composition section
- [[liver-sinusoidal-endothelial-cells]] — niche partners; KC adhesion in aging (implicit stub)
- [[hepatic-stellate-cells]] — principal target of KC-derived TGFβ1 and pro-fibrotic signaling (implicit stub)
- [[masld]] — major KC-mediated age-related liver phenotype (implicit stub)
- [[liver-fibrosis]] — downstream KC activation consequence (implicit stub)
- [[chronic-inflammation]] — hallmark MOC; KC inflammaging contributes systemically
- [[cellular-senescence]] — hallmark MOC; KC senescence and SASP amplification
- [[tlr4]] — sensor for LPS; primary KC activation receptor
- [[csf1r]] — survival and differentiation receptor for macrophages including KCs (implicit stub)
- [[microglia]] — fellow yolk-sac-derived tissue-resident macrophage; parallel ontogeny and self-renewal biology

---

## Footnotes

[^huntcogger2019]: doi:10.1016/j.csbj.2019.07.021 · Hunt NJ, Kang SWS, Lockwood GP, Le Couteur DG, Cogger VC · "Hallmarks of Aging in the Liver" · Comput Struct Biotechnol J 17:1151-1161 · 2019 · review · key KC-aging claims: increased CD68+ cells, elevated IL-6, increased KC-LSEC adhesion, no age-related change in TNFα/Mrc1/Arg1/IL-10; model: aged rat liver primary data cited therein

[^gomezperdiguero2015]: doi:10.1038/nature13989 · Gomez Perdiguero E, Klapproth K, Schulz C et al. · "Tissue-resident macrophages originate from yolk-sac-derived erythro-myeloid progenitors" · Nature 518:547-551 · 2015 · in-vivo (mouse fate mapping) · model: Tie2-Cre and Csf1r-Mer-iCre-Mer lineage tracing; EMPs arise at E8.5, colonize fetal liver by E10.5; Kupffer cells, microglia, Langerhans cells, and alveolar macrophages remain predominantly yolk-sac-derived in year-old mice

[^scott2016]: doi:10.1038/ncomms10321 · Scott CL, Zheng F, De Baetselier P, Martens L, Saeys Y, De Prijck S et al. (Guilliams M last) · "Bone marrow-derived monocytes give rise to self-renewing and fully differentiated Kupffer cells" · Nat Commun 7:10321 · 2016 · in-vivo (mouse diphtheria-toxin depletion + BM transfer) · key finding: circulating monocytes engraft liver niche, adopt KC transcriptional profile, and become long-lived self-renewing cells when niche space is available; monocyte-derived KCs are functionally equivalent to embryo-derived KCs under steady-state conditions

[^bonnardel2019]: doi:10.1016/j.immuni.2019.08.017 · Bonnardel J, T'Jonck W, Gaublomme D et al. (Guilliams M last) · "Stellate Cells, Hepatocytes, and Endothelial Cells Imprint the Kupffer Cell Identity on Monocytes Colonizing the Liver Macrophage Niche" · Immunity 51(4):638-654.e9 · 2019 · in-vivo (mouse conditional depletion + scRNA-seq) · key finding: KC depletion triggers TNF/IL-1R-dependent niche activation; hepatocytes induce ID3 and endothelial cells/stellate cells synergistically induce LXRα via NOTCH-BMP signaling on engrafting monocytes; the niche is composed of stellate cells, hepatocytes, and endothelial cells that together imprint KC identity

[^stahl2018]: doi:10.3389/fimmu.2018.02795 · Stahl EC, Haschak MJ, Popovic B, Brown BN · "Macrophages in the Aging Liver and Age-Related Liver Disease" · Front Immunol 9:2795 · 2018 · review · key finding: effects of aging on hepatic macrophage population dynamics, polarization, and function "are not well understood"; general reductions in macrophage autophagy and phagocytosis with aging inferred from other tissues; no primary KC-specific aging quantitative data provided

[^brouwer1995]: doi:10.1042/cs0880211 · Brouwer A, Parker SG, Hendriks HF, Gibbons L, Horan MA · "Production of eicosanoids and cytokines by Kupffer cells from young and old rats stimulated by endotoxin" · Clin Sci (Lond) 88(2):211-218 · 1995 · ex-vivo (isolated rat KCs) · model: young vs. aged rat isolated KCs stimulated with LPS · key finding: effects of ageing on KC cytokine responses (IL-1α/β, IL-6, TNFα) were minimal; age-related differences in hepatic endotoxin sensitivity may not originate from KC responsiveness per se · #gap/no-fulltext-access — closed-access; DOI confirmed valid via Crossref; full PDF not available for quantitative cross-check

[^vandertuin2018]: doi:10.1161/JAHA.117.008105 · van der Tuin SJL, Li Z, Berbée JFP et al. · "Lipopolysaccharide Lowers Cholesteryl Ester Transfer Protein by Activating F4/80+Clec4f+Vsig4+Ly6C- Kupffer Cell Subsets" · J Am Heart Assoc 7(6):e008105 · 2018 · in-vivo (mouse) · establishes the F4/80+CLEC4F+VSIG4+Ly6C- phenotype as defining resident Kupffer cell subsets; validates CLEC4F as a marker distinguishing resident KCs from monocyte-derived macrophages

[^stienstra2010]: doi:10.1002/hep.23648 · Stienstra R, Saudale F, Duval C et al. · "Kupffer cells promote hepatic steatosis via interleukin-1beta-dependent suppression of peroxisome proliferator-activated receptor alpha activity" · Hepatology 51(2):511-522 · 2010 · in-vivo (mouse) · model: KC-depleted and KC-reconstituted mice; LPS-stimulated KC supernatant applied to hepatocytes · key finding: KC-derived IL-1β suppresses PPARα activity → impaired β-oxidation → hepatic lipid accumulation; KC depletion protected against steatosis

[^bird2018]: doi:10.1126/scitranslmed.aan1230 · Bird TG, Müller M, Boulter L et al. · "TGFβ inhibition restores a regenerative response in acute liver injury by suppressing paracrine senescence" · Sci Transl Med 10(454):eaan1230 · 2018 · in-vivo (mouse ΔMdm2Hep genetic model + acetaminophen + CCl₄ injury models + human liver biopsy) · macrophage ablation (liposomal clodronate in ΔMdm2Hep model) reduced hepatic TGFβ1 expression by 87%; TGFβR1 blockade in acetaminophen and CCl₄ models restored regeneration and improved survival; macrophage-derived TGFβ1 is the primary driver of paracrine senescence spread to uninjured hepatocytes

[^duan2023]: doi:10.1038/s41467-023-44026-z · Duan J, Dong W, Wang G et al. · "Senescence-associated 13-HODE production promotes age-related liver steatosis by directly inhibiting catalase activity" · Nat Commun 14:8151 · 2023 · in-vivo + in-vitro · model: aged mouse + primary hepatocytes/macrophages · 13-HODE (secreted by senescent hepatocytes AND macrophages/KCs) inhibits catalase → ↑ROS → stabilizes SREBP1 → lipogenesis → steatosis; catalase overexpression protected against fatty liver

[^zheng2017]: doi:10.1007/s11307-016-0976-3 · Zheng F, Sparkes A, De Baetselier P et al. · "Molecular Imaging with Kupffer Cell-Targeting Nanobodies for Diagnosis and Prognosis in Mouse Models of Liver Pathogenesis" · Mol Imaging Biol 19(1):49-58 · 2017 · in-vivo (mouse) · KC-targeting nanobodies directed at CLEC4F; proof-of-concept for KC-targeted diagnostic imaging; validates CLEC4F as an accessible surface target on resident KCs
