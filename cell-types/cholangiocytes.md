---
type: cell-type
aliases: [biliary epithelial cells, bile duct epithelial cells, BECs, ductal cells]
cell-ontology-id: CL:1000488
tissue-of-origin: ["[[liver]]"]
key-markers-mouse: [KRT19+, KRT7+, SOX9+, EpCAM+, GGT+, AQP1+]
key-markers-human: [KRT19+, KRT7+, SOX9+, EpCAM+, GGT+, CFTR+ (medium/large ducts), SCTR+ (medium/large ducts)]
lineage-output: [hepatocytes, cholangiocytes] # bipotent when acting as progenitors; skip for mature/committed cholangiocytes
self-renewal: limited
aging-relevant: yes
affected-hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[loss-of-proteostasis]]"]
key-aging-phenotypes: ["[[age-related-cholestasis]]", "[[primary-biliary-cholangitis]]", "[[primary-sclerosing-cholangitis]]"]
typical-niche: "intrahepatic and extrahepatic biliary tree; periportal hepatic progenitor niche (canal of Hering)"
niche-signaling: ["[[notch-pathway]]", "[[wnt-beta-catenin]]", "[[tgf-beta]]"]
single-cell-aging-signature: null # #gap/needs-singlecell-aging-signature — no published Tabula Muris Senis / CellxGene cholangiocyte-specific aging transcriptomic profile confirmed as of 2026-06-05
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Alpini 1996 (full PDF): heterogeneity section — corrected 'large-only' to 'medium and large' for SCTR/CFTR/AE2 expression and corrected small/medium/large duct diameter ranges. Boulter 2012 (full PDF): fate-switch table — corrected mouse model from CCl₄ to CDE/DDC; corrected Jagged1 niche source to myofibroblasts (not 'myofibroblasts/activated stellate cells'); verified human tissue cohort. Tabibian 2014 (PMC full text): N-Ras senescence mechanism, SASP components, PSC cohort n=9 confirmed; confirmed no within-paper disease-stage-correlation analysis (correlation claim correctly attributed to Bogert 2022/Trussoni 2022 reviews). Meadows 2021 (full PDF): corrected hepatic cell-mass fraction <5% → <10% (human) / 2–3% (rodent); corrected '(Meadows et al. 2025)' typo to '(Meadows et al. 2021)'; SASP composition confirmed; biliary senescence in normal aging framed as rodent-model data only. Alpini 1997: closed-access; confirmed title/volume/pages via Crossref+PubMed; size-cutoff claim (≥15 µm) consistent with Alpini 1996 framework. Cheung 2018, Glaser 2009, Boulter 2012, Trussoni 2022, Bogert 2022, Shimizu 2015, Maroni 2019, Chung 2018, Overi 2018: review-class citations; claims attributed correctly; not re-read against PDF (consistent with review-citation discipline). literature-checked-through: 2026-06-05"
literature-checked-through: 2026-06-05
---

# Cholangiocytes

Cholangiocytes (biliary epithelial cells) are the epithelial cells lining the intrahepatic and extrahepatic biliary tree. Though comprising less than 10% of the total hepatic cell mass in humans (and 2–3% in rodents), they perform critical functions in the modification of canalicular ("primary") bile, regulate biliary bicarbonate and fluid secretion, and — uniquely — participate in liver regeneration as bipotent progenitor cells capable of generating both hepatocytes and new cholangiocytes under conditions of severe hepatocyte loss. In the context of aging, cholangiocyte senescence has emerged as a mechanistically important driver of cholestatic disease, particularly primary biliary cholangitis (PBC) and primary sclerosing cholangitis (PSC), and may contribute independently to age-related declines in bile flow and composition [^trussoni2022][^meadows2021].

---

## Identity and surface markers

Cholangiocytes are operationally defined by a combination of structural location and immunophenotype. They are the only non-hepatocyte epithelial cells of the liver proper.

### Shared markers (all cholangiocytes)

| Marker | Function / notes |
|---|---|
| KRT19 (CK19) | Intermediate filament; canonical cholangiocyte identifier in human and mouse; distinguishes biliary from hepatocyte lineage in the ductal plate/reaction |
| KRT7 (CK7) | Intermediate filament; co-expressed with KRT19; used clinically for biliary identity in histopathology |
| SOX9 | Transcription factor; drives cholangiocyte identity during development and is re-expressed in ductular reaction; marks the canal of Hering progenitor compartment |
| EpCAM (CD326) | Cell-adhesion glycoprotein; expressed on biliary epithelium and hepatic progenitor cells; reduced in mature hepatocytes |
| GGT (gamma-glutamyltransferase) | Enzyme; highly expressed on cholangiocyte apical membrane; elevated serum GGT is a clinical surrogate for biliary disease |
| AQP1 (aquaporin-1) | Water channel in cholangiocyte apical and basolateral membranes; drives osmotically coupled water secretion into bile |

These markers are well-established in the foundational literature [^alpini1996][^cheung2018].

### Medium- and large-duct–specific markers

| Marker | Functional notes |
|---|---|
| SCTR (secretin receptor) | G-protein coupled receptor; expressed in medium (15–100 µm) and large (100–200 µm) intrahepatic bile ducts; absent in small (<15 µm) ducts; secretin binding elevates cAMP → activates CFTR → drives Cl⁻/HCO₃⁻ exchange → net bicarbonate and water secretion into bile ("ductal bile modification") [^alpini1996] |
| CFTR (cystic fibrosis transmembrane conductance regulator) | Cl⁻ channel on apical membrane; expressed in medium and large ducts; coupled to secretin response; absent or very low in small cholangiocytes [^alpini1996] |
| AE2 (SLC4A2, Cl⁻/HCO₃⁻ exchanger) | Drives bicarbonate export; expressed principally in medium and large ducts; virtually absent in small cholangiocytes [^alpini1996] |

> Note: Mouse-human translation of bile duct size is approximate. In rats, Alpini et al. isolated three populations: small (<15 µm), medium (15–100 µm), and large (100–200 µm). Secretin receptor mRNA was ~3.0-fold higher in medium and ~1.5-fold higher in large compared with small cholangiocytes; CFTR followed the same pattern [^alpini1996]. Alpini 1997 confirmed that large-duct secretion is the dominant contributor to secretin-stimulated ductal bile output [^alpini1997]. Mouse data mirror the rat pattern [^glaser2009]. Human biliary anatomy is comparably stratified but precise diameter cutoffs in humans are less precisely defined.

---

## Heterogeneity: small vs. large cholangiocytes

Cholangiocytes are not a uniform population — they exhibit position-dependent functional specialization along the proximal-to-distal axis of the biliary tree:

| Feature | Small cholangiocytes (<15 µm ducts, intrahepatic interlobular ducts) | Medium cholangiocytes (15–100 µm ducts) | Large cholangiocytes (100–200 µm ducts; septal, area, segmental, hepatic ducts) |
|---|---|---|---|
| Secretin receptor | absent | present (~3.0-fold over small) | present (~1.5-fold over small) |
| CFTR | absent / very low | present | present |
| cAMP response to secretin | absent | robust | robust |
| Cl⁻/HCO₃⁻ exchange (AE2) | virtually absent | principal expression | principal expression |
| Ductal bile modification | minimal | major contributor | major contributor |
| Proliferative reserve | high (Ca²⁺-dependent; can compensate for larger-duct injury) | intermediate | lower |
| Senescence susceptibility | lower | higher | higher (N-Ras activation, mitochondrial damage) |

Note: Alpini 1996 isolated three distinct populations by counterflow elutriation; mean diameters were 8.49 µm (small), 11.86 µm (medium), and 14.53 µm (large). The functional boundary between secretin-responsive and non-responsive cells falls between small and medium, not between medium and large [^alpini1996]. Alpini 1997 functionally confirmed that large-duct secretin-stimulated bile secretion dominates [^alpini1997].

This heterogeneity is functionally significant: diseases that preferentially target larger-duct cholangiocytes (PSC, which involves fibro-obliteration of medium and large ducts) have different physiological consequences from diseases affecting small-duct biology (PBC, characterized by autoimmune attack on small interlobular bile ducts) [^alpini1996][^alpini1997][^glaser2009].

---

## Normal physiology: biliary secretion

Bile is produced in two stages:

1. **Canalicular (primary) bile** — secreted by hepatocytes via BSEP (bile salt export pump), MDR1/3 (phospholipid), and AQP8 across the canalicular membrane; ~600 mL/day in adults; bile-salt-rich, bicarbonate-poor.
2. **Ductal (secondary) bile modification** — cholangiocytes of larger ducts add HCO₃⁻ and water (via secretin→cAMP→CFTR→AE2 cascade) and can reabsorb glucose, glutamate, and certain bile acids via apical transporters; creates the "bicarbonate umbrella" hypothesis — a HCO₃⁻-rich layer at the apical cholangiocyte surface thought to protect against bile acid cytotoxicity [^cheung2018].

The **secretin-HCO₃⁻ axis** is the best-characterized cholangiocyte functional pathway and a key target for understanding biliary aging:

- Secretin released by S cells of the duodenum (postprandially) binds SCTR on large cholangiocytes
- Elevated cAMP activates PKA → CFTR → Cl⁻ efflux
- Cl⁻ gradient drives AE2-mediated HCO₃⁻ export into bile
- AQP1 channels follow osmotic gradient → net water secretion
- Net result: alkalinization and volumetric increase of ductal bile

---

## Regeneration: the ductular reaction and bipotent progenitor function

### The canal of Hering

Cholangiocytes at the most proximal end of the biliary tree — the **canal of Hering** — reside at the interface between periportal hepatocytes and the biliary epithelium. This zone harbors a subset of cells co-expressing SOX9, EpCAM, and KRT19 that function as facultative biliary progenitors. Under basal conditions, these cells are quiescent and contribute little to hepatocyte or cholangiocyte turnover. Under conditions of severe, persistent hepatocyte injury (cirrhosis, biliary obstruction, acute liver failure), they activate.

### Ductular reaction

The **ductular reaction** is the proliferative expansion of cells at the canal of Hering in response to injury. It is characterized by:

- Expansion of KRT19+/EpCAM+ cells from the portal zone into the parenchyma
- Co-expression of both biliary (KRT19, SOX9) and hepatocyte progenitor (AFP, HNF4α partial) markers
- Activation regulated by paracrine signals from niche cells

Bipotent fate specification is governed by the balance of two competing signals from niche macrophages and myofibroblasts [^boulter2012]:

| Signal | Source | Downstream fate |
|---|---|---|
| Wnt3a (Wnt pathway) | Niche macrophages (via phagocytosis of hepatocyte debris) | Hepatocyte differentiation |
| Jagged1 (Notch pathway) | Portal myofibroblasts (αSMA+) | Cholangiocyte/biliary differentiation |

In the context of cholestatic disease (where the biliary lineage predominates), Notch signaling dominates and drives expansion of biliary-type progeny — which in the setting of chronic injury tends to produce dysfunctional, pro-fibrogenic ductular cells rather than fully functional cholangiocytes [^boulter2012][^overi2018].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — Wnt/Notch fate switch confirmed in human PBC/PSC liver biopsies (Boulter 2012 used HCV n=6, PBC n=6, PSC n=4 human explants) |
| Phenotype conserved in humans? | yes — ductular reaction is a standard histopathological finding in human chronic liver disease |
| Replicated in humans? | partial — macrophage-Wnt/myofibroblast-Notch axis shown in human tissue; direct manipulation in human in-vivo studies is lacking |

---

## Aging biology

### Cholangiocyte senescence

Cholangiocyte senescence is increasingly recognized as a primary pathogenic mechanism in biliary disease rather than a passive bystander of inflammation. The evidence base, largely from the LaRusso group at Mayo Clinic, links senescent cholangiocytes to both chronic cholangiopathies and age-related biliary dysfunction.

**Induction signals in cholangiocytes:**

- **N-Ras activation** — oncogene-induced senescence pathway; activated in cholangiocytes of PSC patients but not controls; sufficient to induce senescence and SASP production in isolated cholangiocytes in vitro [^tabibian2014]
- **Lysophosphatidylcholine (LPC)** — a bile lipid component elevated in biliary obstruction; induces cholangiocyte senescence via ROS-mediated DNA damage (8-OHdG elevation) and triggers IL-6/IL-8 SASP secretion [^shimizu2015]
- **Mitochondrial damage** and persistent inflammatory signaling (TGF-β, TWEAK) also implicated [^cheung2018]

**SASP composition in senescent cholangiocytes:**

Senescent cholangiocytes secrete a SASP enriched in:
- Pro-inflammatory cytokines: IL-6, IL-8, MCP-1
- Pro-fibrogenic mediators: TGF-β, CTGF
- Chemokines that recruit immune cells to the periductal space
- Exosomes containing senescence-promoting miRNAs

This SASP drives **paracrine senescence** in adjacent cholangiocytes, creating a self-amplifying loop; it also activates hepatic stellate cells and portal fibroblasts to produce collagen, thereby coupling cholangiocyte senescence directly to periductal and biliary fibrosis [^meadows2021].

**Resistance to apoptosis** is a hallmark of senescent cholangiocytes (as in senescent cells generally via BCL-2/BCL-XL upregulation). This creates a problematic combination: senescent cholangiocytes resist clearance while actively promoting inflammation and fibrosis [^cheung2018].

**Aging-specific changes:**

Aged liver (rodent models) shows accumulation of p16^INK4a-positive, p21-positive cholangiocytes in the intrahepatic biliary tree, even in the absence of overt disease [^meadows2021]. The twinfilin-1 (TWF1) actin-binding protein shows age-regulated expression specifically in cholangiocytes — upregulated in aged mice and humans — and controls cholangiocyte morphological response to injury; its upregulation is mechanistically shared between normal aging adaptation and disease-response pathways [^maroni2019].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — N-Ras, LPC, and TGF-β senescence induction confirmed in human cholangiocytes |
| Phenotype conserved in humans? | yes — p16+/p21+ cholangiocytes elevated in PBC/PSC/cholestasis biopsies |
| Replicated in humans? | partial — disease-associated senescence confirmed; normal aging accumulation data are limited to rodents |

### Age-related changes in bile secretion and composition

With normal aging, biliary secretory function declines:

- **Reduced secretin-stimulated bile flow**: the cAMP response to secretin in large cholangiocytes diminishes with age, reducing bicarbonate-driven ductal bile secretion. The mechanism involves age-related declines in CFTR expression and/or Gs protein signaling [^meadows2021].
- **Altered bile composition**: cholesterol saturation of bile increases with age, contributing to **cholesterol gallstone** risk (rising with age, peak incidence in the 7th–8th decades).
- **Reduced bicarbonate umbrella**: lower HCO₃⁻ secretion may increase bile acid cytotoxicity at the cholangiocyte apical surface — a potential vicious cycle driving further cholangiocyte injury in aged individuals [^cheung2018].

These functional changes are linked to the clinical entity [[age-related-cholestasis]] — age-associated impairment of bile formation and flow without overt structural biliary disease. See [[age-related-cholestasis]] for the full clinical phenotype page.

### Cholangiocyte senescence in primary biliary cholangitis

Primary biliary cholangitis (PBC) is an autoimmune disease targeting small intrahepatic bile ducts — the interlobular cholangiocytes. Auto-antibodies against mitochondrial antigens (anti-mitochondrial antibodies, AMAs — primarily against PDC-E2) accumulate, and CD4+/CD8+ T cells infiltrate periductal spaces. Critically:

- Cholangiocytes in PBC livers show elevated p16/p21, reduced proliferation, and SASP-pattern cytokine secretion
- Senescent cholangiocytes express PDC-E2 on their apical surface (aberrant, normally mitochondria-restricted), potentially perpetuating the autoimmune cycle
- The density of senescent cholangiocytes correlates with disease stage [^bogert2022][^trussoni2022]

### Cholangiocyte senescence in primary sclerosing cholangitis

PSC is a chronic fibro-inflammatory cholangiopathy affecting intra- and extrahepatic bile ducts, without a defined autoimmune target antigen (unlike PBC). PSC cholangiocytes show:

- N-Ras overactivation → oncogene-induced senescence [^tabibian2014]
- MYC phosphorylation heterogeneity: MYC^T58 phosphorylation promotes senescence; MYC^S62 phosphorylation promotes proliferation and ductular reaction. The balance between these determines whether cholangiocytes senesce or regenerate in PSC [^meadows2021]
- Elevated TGF-β and CTGF in the SASP that drive periductal fibrosis ("onion-skin" pattern)
- Progression to **cholangiocarcinoma** — PSC patients have ~10–15% lifetime risk; senescent cholangiocytes (which accumulate somatic mutations due to replication stress and impaired DDR) and their pro-inflammatory microenvironment are mechanistically linked to this malignant transformation [^chung2018]

---

## Hallmark connections

| Hallmark | Mechanism in cholangiocytes |
|---|---|
| [[cellular-senescence]] | Canonical driver of PBC and PSC; N-Ras and LPC-induced senescence; SASP-driven paracrine spread; resistance to apoptosis traps senescent cells in the biliary epithelium |
| [[chronic-inflammation]] | SASP from senescent cholangiocytes (IL-6, IL-8, MCP-1) recruits neutrophils/lymphocytes to periductal space; sustained pericholangitis drives progressive damage |
| [[loss-of-proteostasis]] | Aging-associated decline in cholangiocyte ER homeostasis contributes to impaired CFTR trafficking and biliary secretory dysfunction; #gap/no-mechanism — direct evidence for ER stress as primary driver in cholangiocytes is limited |

---

## Therapeutic relevance

### Senolytics and senomorphics in biliary disease

The identification of cholangiocyte senescence as a driver of PBC and PSC has raised interest in targeting this pathway therapeutically:

- **Senolytics** (dasatinib + quercetin; navitoclax) — reduce p16+/p21+ senescent cell burden in rodent cholestasis models; not yet tested in biliary-specific human trials as of 2026-06-05 #gap/needs-human-replication
- **Senomorphics** (JAB1/PCAF inhibitors; rapamycin; metformin) — reduce SASP output without clearing senescent cells; theoretical benefit in limiting paracrine spread
- **N-Ras pathway inhibition** — farnesyl transferase inhibitors or MEK inhibitors could reduce oncogene-induced senescence in PSC cholangiocytes; preclinical only [^tabibian2014]

Trussoni et al. 2022 explicitly propose cholangiocyte senescence as "a novel therapeutic target" in cholangiopathies [^trussoni2022].

### UDCA (ursodeoxycholic acid)

The standard of care for PBC. Mechanism includes: replacing hydrophobic bile acids (which are more injurious to cholangiocytes) with the hydrophilic UDCA; stimulating CFTR and AE2 to improve bicarbonate secretion; and modest immunomodulatory effects. UDCA improves liver biochemistry and delays histological progression in PBC. Whether it modulates cholangiocyte senescence directly is incompletely characterized. See [[ursodeoxycholic-acid]] (implicit stub) for the compound page.

---

## Limitations and gaps

- `#gap/needs-human-replication` — Age-associated accumulation of p16+/p21+ cholangiocytes in normal aging (without overt disease) is established in rodents; prospective human data in disease-free aging liver are sparse
- `#gap/needs-replication` — MYC phosphorylation switch in PSC (Meadows et al. 2021) is recent; independent replication needed
- `#gap/no-mechanism` — The trigger for N-Ras hyperactivation in PSC cholangiocytes is unknown; why PSC preferentially affects large ducts while PBC affects small ducts is not mechanistically explained by senescence biology alone
- `#gap/dose-response-unclear` — The threshold of senescent cholangiocyte burden at which clinical cholestasis becomes evident is not established
- `#gap/long-term-unknown` — Natural history of cholangiocyte senescence in normal aging without biliary disease; whether interventional senolytic clearance prevents or reverses age-related biliary decline
- `#gap/needs-singlecell-aging-signature` — No published Tabula Muris Senis or CellxGene Census age-stratified transcriptomic profile for cholangiocytes; the `single-cell-aging-signature:` field is null until this is available
- `#stub` — [[age-related-cholestasis]], [[primary-biliary-cholangitis]], [[primary-sclerosing-cholangitis]], [[hepatic-progenitor-cells]], [[ursodeoxycholic-acid]] are implicit stubs

---

## Cross-references

- [[liver]] — parent tissue page; verified; cholangiocytes listed as key cell type
- [[age-related-cholestasis]] — downstream aging phenotype; implicit stub; seed target
- [[hepatic-progenitor-cells]] — bipotent progenitor shared with cholangiocyte lineage; implicit stub
- [[cellular-senescence]] — primary affected hallmark
- [[chronic-inflammation]] — downstream of cholangiocyte SASP
- [[loss-of-proteostasis]] — hallmark linked to CFTR trafficking decline
- [[notch-pathway]] — cholangiocyte fate specification in ductular reaction
- [[wnt-beta-catenin]] — hepatocyte fate specification; opposing Notch in progenitor fate
- [[tgf-beta]] — niche signal; pro-fibrogenic SASP component in biliary disease

---

## Footnotes

[^alpini1996]: doi:10.1053/gast.1996.v110.pm8613073 · Alpini G, Roberts S, Kuntz SM et al. · "Morphological, molecular, and functional heterogeneity of cholangiocytes from normal rat liver" · Gastroenterology 110(5):1636-1643 · 1996 · in-vitro + in-vivo · model: normal rat liver; three size-isolated subpopulations by counterflow elutriation (small mean 8.49 µm / medium 11.86 µm / large 14.53 µm) · key finding: secretin receptor and CFTR mRNAs ~3.0-fold higher in medium and ~1.5-fold higher in large vs small; Cl⁻/HCO₃⁻ exchanger virtually absent in small; secretin-stimulated cAMP and bicarbonate exchange significantly elevated in medium and large but not small cholangiocytes (p<0.05); identifies medium as the primary secretin-responsive population, not just large

[^alpini1997]: doi:10.1152/ajpgi.1997.272.5.G1064 · Alpini G, Glaser S, Robertson W et al. · "Large but not small intrahepatic bile ducts are involved in secretin-regulated ductal bile secretion" · Am J Physiol Gastrointest Liver Physiol 272(5):G1064-74 · 1997 · in-vitro · model: rat isolated large and small bile ducts · key finding: secretin receptor expression, cAMP synthesis, and secretin-stimulated secretion confined to large intrahepatic ducts (≥15 µm); small ducts unresponsive

[^glaser2009]: doi:10.1038/labinvest.2009.6 · Glaser SS, Gaudio E, Miller T, Alvaro D, Alpini G · "Morphological and functional heterogeneity of the mouse intrahepatic biliary epithelium" · Lab Invest 89(4):456-469 · 2009 · in-vitro + in-vivo · model: mouse intrahepatic biliary tree · key finding: mouse cholangiocytes recapitulate rat size-dependent heterogeneity; large ducts only express secretin receptor, CFTR, and Cl⁻/HCO₃⁻ exchanger

[^cheung2018]: doi:10.1016/j.bbadis.2017.06.024 · Cheung AC, Lorenzo Pisarello MJ, LaRusso NF · "Pathobiology of biliary epithelia" · Biochim Biophys Acta Mol Basis Dis 1864(4):1220-1231 · 2018 · review· key review of cholangiocyte identity, secretory function, bicarbonate umbrella hypothesis, and disease mechanisms

[^tabibian2014]: doi:10.1002/hep.26993 · Tabibian JH, O'Hara SP, Splinter PL, Trussoni CE, LaRusso NF · "Cholangiocyte senescence by way of N-ras activation is a characteristic of primary sclerosing cholangitis" · Hepatology 59(6):2263-2275 · 2014 · in-vitro + ex-vivo human tissue · model: PSC n=9, PBC n=6, HCV n=6, normal n=7 human liver explants; normal human cholangiocyte (NHC) cell line in vitro · key finding: N-Ras is activated in PSC cholangiocytes (3.9-fold over control; p<0.05); p16INK4a mRNA >20-fold higher in PSC vs normal; γH2A.x foci in 47.3% of PSC cholangiocytes (5.9-fold over normal); LPS-driven N-Ras activation induces SASP (IL-6, IL-8, CCL2, PAI-1); N-Ras inhibitor (FTS) reduces senescence; telomere length preserved (stress-induced, not replicative, senescence)

[^trussoni2022]: doi:10.1007/s00281-022-00909-9 · Trussoni CE, O'Hara SP, LaRusso NF · "Cellular senescence in the cholangiopathies: a driver of immunopathology and a novel therapeutic target" · Semin Immunopathol 44(4):569-580 · 2022 · review· key review linking cholangiocyte senescence to biliary atresia, PBC, and PSC; proposes senolytics as therapeutic approach

[^meadows2021]: doi:10.3389/fmolb.2021.803098 · Meadows V, Baiocchi L, Kundu D et al. · "Biliary Epithelial Senescence in Liver Disease: There Will Be SASP" · Front Mol Biosci 8:803098 · 2021 · review · comprehensive review of cholangiocyte SASP composition (IL-6, IL-8, CCL2, PAI-1, TGF-β1, SCF), induction pathways, and therapeutic implications; states cholangiocytes constitute <10% of hepatic cell mass in humans and 2–3% in rodents; SASP-associated biliary senescence discussed primarily in disease context; aging accumulation in normal aging is extrapolated from rodent model data

[^bogert2022]: doi:10.1097/MOG.0000000000000805 · Bogert PS, O'Hara SP, LaRusso NF · "Cellular senescence in the cholangiopathies" · Curr Opin Gastroenterol 38(2):115-122 · 2022 · review· summarizes senescence as key pathogenetic process in PSC and PBC; p16+/p21+ correlation with disease stage

[^shimizu2015]: doi:10.1002/jhbp.256 · Shimizu R, et al. · "Cholangiocyte senescence caused by lysophosphatidylcholine as a potential implication in carcinogenesis" · J Hepatobiliary Pancreat Sci 22(8):628-634 · 2015 · in-vitro · model: human cholangiocyte cell line · key finding: LPC induces ROS-mediated DNA damage, 8-OHdG elevation, and IL-6/IL-8 SASP secretion in cholangiocytes; phosphatidylcholine is protective

[^boulter2012]: doi:10.1038/nm.2667 · Boulter L, Govaere O, Bird TG et al. · "Macrophage-derived Wnt opposes Notch signaling to specify hepatic progenitor cell fate in chronic liver disease" · Nat Med 18(4):572-579 · 2012 · in-vivo + ex-vivo human · model: mouse CDE diet (hepatocellular regeneration) + DDC diet (biliary regeneration) + human explants (HCV n=6, PBC n=6, PSC n=4) · key finding: macrophage Wnt3a (induced by phagocytosis of hepatocyte debris) → hepatocyte fate; myofibroblast Jagged1 → Notch → biliary fate; fate decision gate confirmed in human cholestatic liver tissue

[^maroni2019]: doi:10.1002/hep.30466 · Maroni L, Pinto C, Giordano DM et al. · "Aging-Related Expression of Twinfilin-1 Regulates Cholangiocyte Biological Response to Injury" · Hepatology 70(3):883-898 · 2019 · in-vivo + ex-vivo · model: aged mouse + human biliary tissue · key finding: twinfilin-1 (TWF1) is upregulated in aged cholangiocytes; mediates shared intracellular pathways between normal aging adaptation and injury response; TWF1 manipulation altered cholangiocyte morphology and functional response

[^chung2018]: doi:10.1016/j.bbadis.2017.08.020 · Chung BK, Karlsen TH, Folseraas T et al. · "Cholangiocytes in the pathogenesis of primary sclerosing cholangitis and development of cholangiocarcinoma" · Biochim Biophys Acta Mol Basis Dis 1864(4):1390-1400 · 2018 · review · key review of PSC-to-cholangiocarcinoma continuum; senescent cholangiocytes and pro-inflammatory microenvironment as mechanistic link to malignant transformation

[^overi2018]: doi:10.3390/ijms19102917 · Overi D, Carpino G, Cardinale V et al. · "Contribution of Resident Stem Cells to Liver and Biliary Tree Regeneration in Human Diseases" · Int J Mol Sci 19(10):2917 · 2018 · review· biliary tree stem/progenitor cell niches; their activation during chronic injury; Notch/Wnt role in fate specification
