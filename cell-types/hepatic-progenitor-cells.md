---
type: cell-type
aliases: [HPCs, hepatic oval cells, oval cells, liver progenitor cells, bipotent liver progenitors, ductular progenitors]
cell-ontology-id: CL:0002196 # "hepatic oval stem cell" — confirmed via OLS4; exact synonyms include "hepatic progenitor cell" and "liver progenitor cell"
tissue-of-origin: ["[[liver]]"]
key-markers-mouse: [EpCAM+, KRT19+, SOX9+, CD133/PROM1+, AFP+ (transient), A6+, OV-6+]
key-markers-human: [EpCAM+, KRT19+, SOX9+, CD133/PROM1+, CD44+, HNF1β+]
lineage-output: [hepatocytes, cholangiocytes]
self-renewal: limited
aging-relevant: yes
affected-hallmarks:
 - "[[stem-cell-exhaustion]]"
 - "[[chronic-inflammation]]"
key-aging-phenotypes:
 - "[[liver-fibrosis]]"
 - "[[hepatocellular-carcinoma]]"
typical-niche: "canals of Hering (periportal zone 1 / biliary-hepatocyte junction); niche signals include Notch (Jagged-1, NICD), Wnt/β-catenin, EGF/HGF (activation), TGF-β (inhibitory), and inflammatory cytokines (IL-6, TNF-α)"
niche-signaling: ["[[notch-pathway]]", "[[wnt-beta-catenin]]", "[[tgf-beta]]"]
single-cell-aging-signature: null # no published Tabula Muris Senis or CellxGene Census entry for HPCs as a defined cluster; see #gap note in body
literature-checked-through: 2026-06-05
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Hunt & Cogger 2019 (full PDF §6.9): niche-dominant aging impairment claim confirmed verbatim; publication type corrected to mini-review; footnote clarified that §6.9 data are Hunt & Cogger's synthesis citing ref [49], not their own primary data. Tarlow 2014 (PMC abstract + Crossref): <1% Sox9+ progenitor-to-hepatocyte contribution confirmed; DDC footnote corrected (DDC = 3,5-diethoxycarbonyl-1,4-dihydrocollidine, not two separate models). Dollé 2015 (full PDF): EpCAM marker biology and hepatocyte-commitment loss confirmed; CD133/PROM1 isolation use supported. Bird 2018 (full PDF abstract/intro): macrophage-TGFβ1 paracrine senescence mechanism confirmed; body-text framing as 'plausible HPC suppression mechanism' is appropriate extrapolation. Matsumoto 2020 (full text not retrieved; abstract-level only — polyploid hepatocyte lineage tracing claim confirmed from abstract; full PDF not read). Theise 1999, Williams/Clouston 2014, Roskams 2010, Czekaj 2010: closed-access / full text not retrieved — #gap/no-fulltext-access tags appropriate; qualitative claims not independently verified. Recency search 2022–2026: no superseding meta-analyses or large RCTs found on HPC aging niche biology."
---

# Hepatic Progenitor Cells (HPCs / Oval Cells)

Hepatic progenitor cells (HPCs) — termed "oval cells" in rodents owing to their ovoid nuclei — are a rare, facultatively activated bipotent cell population residing in the canals of Hering, the most distal extensions of the biliary tree at the hepatocyte–cholangiocyte junction in periportal zone 1. Under normal conditions they are quiescent and contribute negligibly to liver homeostasis; they are mobilized specifically when the dominant regenerative mechanism — compensatory hepatocyte hyperplasia — is compromised or overwhelmed. When activated, HPCs expand into a visible "ductular reaction," a reactive proliferative structure at the portal-parenchymal interface, from which they can commit to either the hepatocyte or cholangiocyte lineage.

Their physiological importance in adult liver regeneration remains an active controversy. In the aging liver, their in-vivo activation after injury is blunted — but in-vitro proliferative capacity is preserved in isolated cells — suggesting the impairment is driven primarily by the aged inflammatory microenvironment rather than intrinsic progenitor deficit [^huntcogger2019]. This niche-vs-intrinsic distinction has direct implications for therapeutic approaches to regenerative decline and for the biology of [[hepatocellular-carcinoma]].

---

## Identity and markers

HPCs share a marker profile that overlaps substantially with cholangiocytes and a subset of hepatocytes, reflecting their position at the biliary-hepatocyte interface. No single marker uniquely identifies them; multi-marker staining or FACS gating is standard.

| Marker | Mouse | Human | Notes |
|---|---|---|---|
| EpCAM (EPCAM) | + | + | Canonical epithelial progenitor marker; lost upon hepatocyte commitment [^dolle2015] |
| KRT19 (CK19) | + | + | Biliary-lineage cytokeratin; shared with cholangiocytes |
| SOX9 | + | + | Biliary transcription factor; marks ductal progenitors; Sox9-CreERT used in lineage tracing [^tarlow2014] |
| CD133 (PROM1) | + | + | Frequently used for isolation from human liver [^dolle2015] |
| AFP (alpha-fetoprotein) | + (transient) | + (transient) | Expressed transiently upon activation; hepatocyte fate marker |
| A6 antigen | + (mouse) | nd | Mouse-specific HPC marker; widely used in rodent injury models |
| OV-6 | + (mouse) | partial | Mouse progenitor marker; OV-6+ subset expanded in human liver disease |
| CD44 | + | + | Hyaluronan receptor; enriched in human HPC populations |
| HNF1β | + | + | Transcription factor for biliary/progenitor identity |
| KRT7 (CK7) | +/- | + | Less specific than KRT19 but used in human histopathology |

**Cholangiocyte overlap.** Cholangiocytes (see [[cholangiocytes]]) share EpCAM, KRT19, SOX9, and HNF1β with HPCs — the populations exist on a continuum, and mature cholangiocytes can de-differentiate toward a progenitor state under injury. The distinction between "activated HPC" and "reactive cholangiocyte" is context-dependent and technically difficult to resolve in vivo. This overlap is a fundamental interpretive challenge for in-vivo studies [^huchdolle2016].

---

## Niche and anatomy

HPCs reside at the **canals of Hering** — the terminal junctions of the biliary tree where intrahepatic bile ducts (lined by cholangiocytes) connect to canaliculi within the hepatocyte plate [^theise1999]. The canals of Hering are therefore located at the periportal zone 1 of the hepatic acinus, adjacent to portal tracts. This anatomical position places HPCs:

1. In proximity to portal blood supply (rich in gut-derived signals, nutrients, and pathogens)
2. At the biliary tree terminus (direct Notch/Jagged signaling from adjacent cholangiocytes)
3. Within the space of Mall (periportal connective tissue containing hepatic stellate cell precursors and portal fibroblasts)

The niche maintains quiescence via constitutive Notch signaling (Jagged-1 from adjacent cholangiocytes activates HES-1, suppressing proliferation), low-level TGF-β, and contact inhibition. Activation signals include HGF (from stellate cells), EGF, Wnt/β-catenin pathway ligands, and — critically — inflammatory cytokines (IL-6 and TNF-α) released by Kupffer cells and recruited macrophages during injury. The dependence on inflammatory signals for HPC activation is a two-edged sword: inflammation drives regeneration but also exposes HPCs to SASP-associated factors that can inhibit productive differentiation in an aged inflammatory milieu.

---

## Activation and lineage progression

HPCs activate selectively under two conditions that compromise the primary regenerative mechanism (hepatocyte replication):
1. **Massive or chronic hepatocyte loss** — where remaining hepatocyte numbers are insufficient for compensatory hyperplasia
2. **Hepatocyte replication block** — caused by experimental toxins (DDC diet, CDE diet, retrorsine), chronic alcoholic injury, or severe steatohepatitis in which hepatocytes are senescent or otherwise mitotically inhibited

Activation sequence (based primarily on rodent oval cell models):

1. **Quiescence**: HPCs reside silently in the canals of Hering; EpCAM+, SOX9+, low proliferative index
2. **Activation** (hours–days post-injury): Portal macrophages/Kupffer cells secrete IL-6, TNF-α, HGF; Wnt pathway is engaged; HPCs begin to proliferate
3. **Ductular reaction**: Expansion of EpCAM+/KRT19+ tubular structures extending from portal tracts into the parenchyma; detectable by histology within ~48–72 h in acute injury models; more gradual in chronic disease
4. **Lineage commitment**:
 - Hepatocyte fate: AFP expression, HNF4α induction, loss of biliary markers, integration into hepatocyte plate
 - Cholangiocyte fate: sustained KRT19/KRT7, CFTR, ASBT expression; integration into bile duct epithelium
5. **Resolution**: As hepatocyte regeneration restores mass, HPC proliferation ceases and ductular reaction regresses

---

## Physiological contribution to regeneration — the active debate

The degree to which HPCs actually contribute new hepatocytes during liver regeneration **in vivo** is one of the most contested questions in hepatic biology. Two broad positions exist:

**Position 1 — Significant HPC-to-hepatocyte conversion occurs.**
Original evidence came from rodent DDC/CDE diet models where BrdU-labeled oval cells could be detected in the parenchyma as morphologically hepatocyte-like cells. Early lineage-tracing studies supported this. The clinical correlate is that the ductular reaction is expanded in human cirrhosis and chronic liver disease, correlating with fibrosis stage [^williamsclouston2014] — suggesting the expansion is a regenerative response proportional to need.

**Position 2 — HPC contribution to hepatocytes in vivo is minimal; mature hepatocytes are the primary regenerative source.**
More rigorous genetic lineage tracing in mice (Sox9-CreERT and Lgr5-based systems) showed that in common injury models, Sox9+ ductal cells **rarely** give rise to mature hepatocytes; instead, hepatocytes self-renew via compensatory hyperplasia even in severely injured livers [^tarlow2014]. The apparent hepatocytic cells in earlier studies may have represented transdifferentiated cholangiocytes or hepatocytes that had acquired biliary markers secondarily. A separate consideration: in the most stringent models, hepatocyte polyploidy (not progenitor-driven) accounts for parenchymal mass restoration [^matsumoto2020].

**Current synthesis.**
Most investigators now accept a conditional model: HPCs contribute materially to regeneration when — and primarily when — hepatocyte replication is specifically blocked or the mature hepatocyte pool is catastrophically depleted. Under standard partial hepatectomy (which leaves ~30% of the liver intact and allows hepatocyte proliferation), HPC contribution is minimal and hepatocyte self-renewal dominates. Under conditions that prevent hepatocyte replication (retrorsine model; extreme steatohepatitis), HPC-derived hepatocytes account for a larger fraction of parenchymal restoration. In human cirrhosis, the persistent ductular reaction may reflect a chronic attempt at HPC-driven regeneration in a liver where hepatocyte replication is chronically impaired by fibrosis and senescence [^roskams2010].

| Dimension | Status |
|---|---|
| HPC-to-hepatocyte conversion conserved in humans? | partial — human histopathological evidence consistent; functional lineage tracing not feasible in humans |
| Ductular reaction as regenerative marker conserved? | yes — widely replicated in human disease |
| Definitive in-vivo HPC contribution to hepatocytes shown? | contested — mouse lineage tracing suggests minimal in standard injury; may be higher under hepatocyte replication block |

---

## Aging biology

### Blunted in-vivo activation in aged mice

Hunt and Cogger's 2019 review of liver aging summarizes evidence that HPC in-vivo activation following injury is blunted with old age in mice [^huntcogger2019]. This is consistent with more general observations of reduced regenerative capacity in aged liver (see [[liver]] § Declining regenerative capacity). The ductular reaction is less exuberant in aged animals after equivalent hepatotoxic challenge, suggesting fewer HPCs are recruited to the injury site or their proliferative response is attenuated.

### Intrinsic capacity preserved in vitro — niche as primary driver

Critically, normal proliferative and differentiation capacity appears to be **preserved in isolated HPCs cultured in vitro** from aged livers, pointing to the aged niche as the primary driver of functional impairment rather than intrinsic progenitor cell deficits [^huntcogger2019]. This mirrors the heterochronic parabiosis logic established for satellite cells (see [[satellite-cells]]) — the cell is competent; the environment is suppressive.

The aged hepatic niche features elevated pro-inflammatory signals (IL-6, TNF-α, TGF-β from Kupffer cells and senescent hepatocytes/stellate cells), increased fibrotic extracellular matrix (which alters matrix signaling and stiffness), reduced HGF production by aged stellate cells, and altered Wnt ligand availability. Any of these changes could impair the quiescence-to-activation transition or commitment to hepatocyte fate. #gap/no-mechanism — the specific signal(s) in the aged niche most responsible for suppressing HPC activation have not been resolved.

| Dimension | Status |
|---|---|
| Blunted HPC activation in aged liver conserved in humans? | unknown — no comparable human aging study; indirect evidence from worse regeneration in older donors/transplant recipients |
| Intrinsic vs niche: dominant mechanism? | niche-dominant per in-vitro preservation; intrinsic deficits not excluded for very old animals |
| Replicated in humans? | no — rodent data only; #gap/needs-human-replication |

### In-vitro proliferation and differentiation decline with extreme age

One study using rat oval cells isolated from livers at fetal, young (4 months), and old (20 months) ages found that both proliferation and differentiation potential of oval cells decreased with age under experimental hepatocarcinogenesis conditions, with altered CYP450 expression patterns [^czekaj2010]. This suggests that in very old animals (20 months ~ human 60–65 years), some intrinsic reduction in differentiation capacity may exist beyond niche effects, though the culture conditions used included carcinogen treatment (complicating interpretation). The discordance with the Hunt/Cogger niche-dominant model may reflect species, age range, or model differences. #gap/contradictory-evidence — the in-vitro data do not fully reconcile: preservation of proliferative capacity (Hunt/Cogger) vs. decreased differentiation potential (Czekaj/Folia) may reflect different ages tested, different endpoints, or different culture systems.

### Relationship to the aged inflammatory niche

The aged hepatic microenvironment (inflammaging driven by Kupffer cells and SASP from senescent hepatocytes and stellate cells — see [[liver]] § Cellular senescence) is likely to impair HPC activation through:

1. **TGF-β excess** — macrophage- and stellate cell-derived TGF-β is a potent inhibitor of HPC proliferation even as it promotes ductular reaction morphogenesis in some contexts [^bird2018]; in the aged liver, chronically elevated TGF-β may shift the balance toward inhibition of effective regeneration
2. **Redox environment** — oxidative stress from senescent cells reduces HPC clonogenicity
3. **ECM stiffness** — fibrosis-associated stiffening alters integrin/mechanosensing signals in the niche; whether this activates or inhibits HPCs is not fully characterized #gap/no-mechanism
4. **IL-6 paradox** — IL-6 is classically HPC-activating acutely but chronically elevated IL-6 (as in inflammaging) may desensitize downstream STAT3 signaling or drive SASP-associated programs in HPCs themselves

---

## Relationship to hepatocellular carcinoma (HCC)

HPCs are candidates for cells of origin in a subset of HCCs, particularly those with combined hepatocellular-cholangiocarcinoma (cHCC-CCA) features or those expressing markers of both lineages [^roskams2010]. Proposed mechanisms:

1. **Direct neoplastic transformation**: HPCs, being in a proliferative and partially undifferentiated state during activation, may accumulate oncogenic mutations more readily than post-mitotic hepatocytes. SOX9+ biliary progenitors have been implicated as a cell of origin in mouse HCC models.
2. **De-differentiation route**: Mature hepatocytes or cholangiocytes can acquire HPC-like markers (EpCAM+, KRT19+) during malignant transformation; it is debated whether these are "true" progenitor-origin tumors or de-differentiated mature hepatocytes.
3. **Age–HCC connection**: HCC incidence rises steeply with age. The aged inflammatory niche that blunts HPC activation may simultaneously elevate oncogenic signaling (mTORC1, Wnt) in any residual proliferating progenitors; see [[hepatocellular-carcinoma]]. #gap/unsourced — direct evidence that aged HPCs have higher transformation risk than young HPCs in vivo is lacking; the connection is inferential.

The ductular reaction — expanded in chronic liver disease — correlates with HCC risk in cirrhosis [^williamsclouston2014], though the direction of causality (expanded progenitors → higher HCC risk, vs. both driven by the same carcinogenic microenvironment) is not definitively resolved.

---

## Relationship to hallmarks of aging

| Hallmark | Role in HPC aging |
|---|---|
| [[stem-cell-exhaustion]] | Primary manifestation — blunted HPC activation in aged liver means the progenitor-mediated backup regeneration pathway is compromised; whether this reflects true pool exhaustion or functional suppression is the key question |
| [[chronic-inflammation]] | Inflammaging-driven Kupffer cell cytokines (IL-6, TNF-α) acutely activate HPCs but chronically elevated levels may suppress productive regeneration; TGF-β excess from SASP inhibits HPC proliferation |
| [[cellular-senescence]] | Senescent hepatocytes and stellate cells in the aged niche secrete SASP factors that alter HPC niche signaling; HPCs themselves may become senescent under sustained injury or extreme age |

Note: the `affected-hallmarks:` frontmatter lists `[[stem-cell-exhaustion]]` and `[[chronic-inflammation]]` conservatively, given the niche-dominant model. The apparent phenotype matches `stem-cell-exhaustion` but may be classified mechanistically as `chronic-inflammation`-driven suppression.

---

## Organoid models

Lgr5+ liver organoids (Huch 2013, Clevers lab) demonstrated the existence of a Lgr5+ ductal cell population near bile ducts capable of extensive in-vitro expansion and bipotential differentiation — initially interpreted as the physiological HPC. However, Lgr5 marks only a subset of HPCs/ductal cells in normal liver; in injury conditions, LGR5 expression expands. The relationship between Lgr5+ organoid-forming cells and the classical EpCAM+/SOX9+ HPC population is not fully resolved [^huchdolle2016]. Organoids derived from human liver biopsies via EpCAM+ selection can be expanded and differentiated to hepatocyte-like or cholangiocyte-like cells, providing an in-vitro tool for studying HPC biology — including aging effects — though organoid culture conditions introduce confounds (see [[methods/organoid-culture]] — implicit stub).

---

## Limitations and gaps

- `#gap/needs-human-replication` — blunted HPC activation in aged liver is demonstrated in rodents; comparable human data from aged vs. young liver transplant donors or injury cohorts are absent at this resolution
- `#gap/contradictory-evidence` — the in-vitro-preserved-capacity (Hunt/Cogger niche model) vs. intrinsic-decline-with-age (Czekaj 2010) findings are not fully reconciled; different ages, species, culture systems, and endpoints may explain the discordance; resolving this in human-derived HPCs would be high value
- `#gap/no-mechanism` — specific niche signal(s) most responsible for suppressing HPC activation in aged liver not identified; candidate(s) include TGF-β excess, ECM stiffening, Wnt alteration, or IL-6 desensitization
- `#gap/needs-canonical-id` — while CL:0002196 ("hepatic oval stem cell") covers HPCs definitively, no distinct CL term exists for the "activated HPC" vs "resting periportal ductal progenitor" distinction; the biology is increasingly understood as a continuum with cholangiocytes rather than a discrete population
- `#gap/contradictory-evidence` — contribution of HPCs to hepatocytes in vivo remains debated; Sox9-based lineage tracing (Tarlow 2014) suggests minimal contribution in standard injury, while histological studies of human cirrhosis suggest a larger role; the discordance may be model-specific (obligate HPC models vs. partial hepatectomy) or reflect human-rodent differences
- `#stub` — [[hepatocellular-carcinoma]], [[cholangiocytes]], [[liver-fibrosis]] are cross-linked but not yet seeded as full pages

---

## See also

- [[liver]] — parent tissue page; aging overview and verified niche-dominant model for HPC impairment
- [[cholangiocytes]] — immediately adjacent cell type in the canals of Hering; shared markers; implicit stub
- [[hepatocytes]] — primary regenerative cell type; compensatory hyperplasia dominates over HPC-derived regeneration in standard injury; implicit stub
- [[hepatic-stellate-cells]] — key niche cells secreting HGF, TGF-β; senescence alters HPC signaling; implicit stub
- [[kupffer-cells]] — macrophage source of IL-6 / TNF-α activating HPCs and driving inflammaging in the niche; implicit stub
- [[hepatocellular-carcinoma]] — age-related HCC; HPCs as candidate cells of origin; implicit stub
- [[stem-cell-exhaustion]] — hallmark of aging; HPC functional decline is a hepatic manifestation
- [[chronic-inflammation]] — hallmark of aging; niche-level mechanism suppressing HPC activation in aged liver
- [[liver-fibrosis]] — ductular reaction expansion correlates with fibrosis stage; HPC-niche interaction
- [[notch-pathway]] — governs HPC quiescence in the canals of Hering; implicit stub
- [[wnt-beta-catenin]] — activates HPCs; altered in aged liver; pericentral hepatocyte zonation
- [[tgf-beta]] — inhibitory signal in excess; elevated in aged inflammatory niche; implicit stub
- [[satellite-cells]] — structural parallel: niche-dominant aging impairment with in-vitro preserved capacity

---

## Footnotes

[^huntcogger2019]: doi:10.1016/j.csbj.2019.07.021 · Hunt NJ, Kang SWS, Lockwood GP, Le Couteur DG, Cogger VC · "Hallmarks of Aging in the Liver" · Comput Struct Biotechnol J 17:1151–1161 · 2019 · mini-review · **Key HPC claim (§6.9)**: old age in mice is associated with reduced activation and proliferation of in situ liver progenitor cells following injury, but normal proliferative capacity of in vitro isolated progenitor cells is preserved; impaired stem cell responses in the aged liver are concluded to be secondary to inflammation rather than intrinsic deficits (Hunt & Cogger cite ref [49] in their paper for this specific finding — it is their synthesis of existing work, not their own primary data)

[^theise1999]: doi:10.1002/hep.510300614 · Theise ND, Saxena R, Portmann BC, Thung SN, Yee H, Chiriboga L, Kumar A, Crawford JM · "The canals of Hering and hepatic stem cells in humans" · Hepatology 30(6):1425–1433 · 1999 · observational (3D immunostaining + electron microscopy)· **Key finding**: 3D reconstruction shows that canals of Hering harbor EpCAM+ / biliary-CK+ cells with progenitor morphology; provides anatomical basis for the periportal niche · #gap/no-fulltext-access (closed-access)

[^dolle2015]: doi:10.1152/ajpgi.00069.2014 · Dollé L, Theise ND, Schmelzer E, Boulter L, Gires O, van Grunsven LA · "EpCAM and the biology of hepatic stem/progenitor cells" · Am J Physiol Gastrointest Liver Physiol 308(4):G233–G250 · 2015 · review· **Key content**: comprehensive review of EpCAM biology in hepatic progenitors; markers, isolation protocols, differentiation capacity; cautionary discussion of marker non-exclusivity with mature cholangiocytes

[^tarlow2014]: doi:10.1002/hep.27084 · Tarlow BD, Finegold MJ, Grompe M · "Clonal tracing of Sox9+ liver progenitors in mouse oval cell injury" · Hepatology 60(1):278–289 · 2014 · in-vivo (genetic lineage tracing) · model: Sox9-CreERT multicolor confetti reporter mouse; DDC (3,5-diethoxycarbonyl-1,4-dihydrocollidine) oval cell injury model · **Key finding**: Sox9+ ductal cells give rise to clonal oval cell proliferation and bipotential organoids but rarely produce hepatocytes in vivo; mature hepatocytes self-renew and are the primary regenerative source even during oval cell activation; Sox9+ progenitor-to-hepatocyte contribution confirmed <1% of parenchymal cells in classic oval cell injury conditions (quantitative FACS + histology)

[^matsumoto2020]: doi:10.1016/j.stem.2019.11.014 · Matsumoto T, Wakefield L, Tarlow BD, Grompe M · "In vivo lineage tracing of polyploid hepatocytes reveals extensive proliferation during liver regeneration" · Cell Stem Cell 26(1):34–47.e3 · 2020 · in-vivo (polyploid lineage tracing)· model: mouse partial hepatectomy and toxic injury · **Key finding**: polyploid hepatocytes (not progenitor-derived cells) are the primary proliferative unit in multiple liver regeneration models; supports the view that HPC contribution to hepatocyte mass is minimal under standard conditions

[^williamsclouston2014]: doi:10.1053/j.gastro.2013.11.034 · Williams MJ, Clouston AD, Forbes SJ · "Links between hepatic fibrosis, ductular reaction, and progenitor cell expansion" · Gastroenterology 146(2):349–356 · 2014 · review· **Key content**: ductular reaction magnitude correlates with fibrosis stage in human chronic liver disease; evidence that progenitor expansion is a response to hepatocyte replication failure driven by fibrosis · #gap/no-fulltext-access (closed-access)

[^roskams2010]: doi:10.1016/j.cld.2010.08.003 · Roskams T, Katoonizadeh A, Komuta M · "Hepatic progenitor cells: an update" · Clin Liver Dis 14(4):705–718 · 2010 · review· **Key content**: comprehensive update on HPC biology; discusses HCC origin from progenitors; evidence for cHCC-CCA tumors having progenitor marker expression; conditional activation model

[^huchdolle2016]: doi:10.1002/hep.28469 · Huch M, Dollé L · "The plastic cellular states of liver cells: are EpCAM and Lgr5 fit for purpose?" · Hepatology 64(2):652–662 · 2016 · review· **Key content**: critical assessment of whether EpCAM and LGR5 faithfully identify a distinct progenitor population vs. a continuum with mature cholangiocytes; argues that liver cell plasticity challenges rigid progenitor classifications

[^czekaj2010]: doi:10.5603/FHC.2010.0026 (PMID: 20529815) · Czekaj P et al. · "Cytochrome P450 mRNA expressions along with in vitro differentiation of hepatocyte precursor cells from fetal, young and old rats" · Folia Histochem Cytobiol 48(2):242–250 · 2010 · in-vitro · model: oval cells from fetal (16-day), young (4-month), and old (20-month) rat livers under experimental hepatocarcinogenesis conditions · **Key finding**: proliferation and differentiation potential of oval cells decreased with age; CYP1A2/2B1/3A1 expression higher in younger cells; CYP2E1 higher in older cells; suggests some intrinsic age-dependent changes in addition to niche effects · Note: culture conditions included carcinogen treatment; interpret with caution

[^bird2018]: doi:10.1126/scitranslmed.aan1230 · Bird TG, Müller M, Boulter L et al. · "TGFβ inhibition restores a regenerative response in acute liver injury by suppressing paracrine senescence" · Sci Transl Med 10(454):eaan1230 · 2018 · in-vivo · model: mouse acetaminophen + CCl₄ injury; human liver biopsy/transplant tissue· **HPC-relevant content**: TGFβ excess suppresses regenerative response; blocking TGFβR1 improved hepatocyte regeneration; elevated TGFβ in aged niche is a plausible HPC suppression mechanism
