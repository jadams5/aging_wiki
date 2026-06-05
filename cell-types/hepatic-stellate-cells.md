---
type: cell-type
aliases: [HSCs, Ito cells, hepatic pericytes, perisinusoidal cells, fat-storing cells, lipocytes, vitamin-A-storing cells]
cell-ontology-id: CL:0000632 # "hepatic stellate cell" — verified via OLS/EBI OLS4 search 2026-06-05; synonyms include Ito cell, perisinusoidal cell, fat-storing cell, lipocyte, vitamin-A-storing cell
tissue-of-origin: ["[[liver]]"]
key-markers-mouse: [Desmin+ (Des), GFAP+, LRAT+, Pdgfrb+, Reln+, vitamin-A-autofluorescence+; activated: αSMA+ (Acta2), Col1a1-hi, Vim+]
key-markers-human: [Desmin+ (DES), GFAP+, LRAT+, PDGFRB+, vitamin-A-autofluorescence+; activated: αSMA+ (ACTA2), COL1A1-hi, VIM+; senescent: uPAR+, CD206+]
lineage-output: [] # HSCs are not stem cells; they adopt activated myofibroblast phenotype on stimulation but have no defined lineage output
self-renewal: limited # quiescent HSCs are largely post-mitotic; activated HSCs can proliferate in response to PDGF; senescent HSCs exit the cell cycle
aging-relevant: yes
affected-hallmarks:
 - "[[cellular-senescence]]"
 - "[[chronic-inflammation]]"
 - "[[altered-intercellular-communication]]"
key-aging-phenotypes:
 - "[[liver-fibrosis]]"
 - "[[hepatocellular-carcinoma]]"
typical-niche: "perisinusoidal space (space of Dissé) — between the basolateral surface of hepatocytes and the abluminal face of liver sinusoidal endothelial cells (LSECs); receives paracrine signals from LSECs, Kupffer cells, and hepatocytes; LSEC-derived nitric oxide and prostaglandins maintain quiescence"
niche-signaling: ["[[tgf-beta]]", "[[wnt-beta-catenin]]", "[[nf-kb]]", "[[cgas-sting]]"]
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Krizhanovsky 2008 (full PDF): mouse strain (7–9-wk female), p53-KO fibrosis p-value (0.008), DKO p-value (<0.01), NK ligands (MICA + ULBP2, not MICB), 20-day resolution timeline — all confirmed and corrected. Li 2020 (full PDF): model corrected from 'FBP1 KO' to 'hepatocyte-specific Fbp1 deletion (AAV8-TBG-Cre)'; inflachromene mechanism and senolytic names (dasatinib/quercetin, ABT-263) added. Dewidar 2019 (full PDF): TGF-β SMAD + non-SMAD signaling cascade confirmed. CL:0000632 confirmed via OLS4 live search. Friedman 2008, Radaeva 2006, Yashaswini 2024, Zhang 2021 closed-access / full text not retrieved — claims attributed to these sources could not be verified against full PDF; qualitative descriptions treated as plausible pending full-text access."
literature-checked-through: 2026-06-05
---

# Hepatic Stellate Cells (HSCs / Ito Cells)

The perisinusoidal mesenchymal cells of the liver, occupying the space of Dissé between hepatocytes and the sinusoidal endothelium. In healthy adult liver, hepatic stellate cells (HSCs) are mitotically quiescent, store 50–80% of the body's total vitamin A as retinyl esters in cytoplasmic lipid droplets, and contribute to sinusoidal ECM homeostasis [^friedman2008]. Upon injury or chronic inflammation, HSCs undergo a well-characterized activation cascade — losing their lipid droplets, upregulating αSMA, and transdifferentiating into collagen-producing myofibroblasts that are the primary drivers of liver fibrosis.

Their role in aging is dual and context-dependent: activated HSCs are the dominant source of fibrotic ECM that accumulates with age in the liver; but senescent HSCs — which accumulate in established fibrosis — paradoxically reduce collagen synthesis while amplifying a pro-inflammatory SASP, producing a state of fibrosis consolidation rather than active progression [^krizhanovsky2008]. This context-dependence is central to understanding how HSC biology connects to the [[cellular-senescence]] and [[chronic-inflammation]] hallmarks.

---

## Identity and markers

HSCs are non-parenchymal mesenchymal cells comprising approximately 5–8% of the total liver cell population. They are characterized by their anatomical position in the perisinusoidal space and by a combination of markers that reflect their lipid-storage and mesenchymal identity [^friedman2008]:

| Marker | State | Notes |
|---|---|---|
| Desmin (DES) | Quiescent + activated | Intermediate filament; most widely used constitutive HSC marker; expressed in both states |
| GFAP | Quiescent | Glial fibrillary acidic protein; marks quiescent HSCs in most species; downregulated upon activation |
| LRAT (lecithin-retinol acyltransferase) | Quiescent | Enzyme responsible for retinyl ester synthesis; the most specific marker of quiescent HSCs; lost upon activation |
| PDGFRB (PDGF receptor beta) | Quiescent + activated | Present in both states; drives proliferative response to PDGF-BB; upregulated in activated state |
| Reelin (RELN) | Quiescent | Extracellular matrix glycoprotein produced by quiescent HSCs; largely lost on activation |
| Vitamin-A autofluorescence | Quiescent | Lipid-droplet-stored retinyl esters fluoresce at ~490 nm (ex) / ~520 nm (em); lost as lipid droplets dissolve on activation |
| αSMA (ACTA2) | Activated only | The canonical activation marker; negative in quiescent HSCs; strongly upregulated as cells transdifferentiate to myofibroblasts |
| COL1A1 / COL1A2 | Activated only | Type I collagen; the primary fibrotic ECM product; driven by TGF-β1 signaling |
| uPAR | Activated + senescent | Urokinase plasminogen activator receptor; marks activated and, in advanced disease, senescent HSCs [^yashaswini2024] |
| CD206 | Senescent | Mannose receptor C-type 1; identifies senescent HSCs in MASH, distinct from Kupffer cell CD206 [^yashaswini2024] |

No single marker perfectly distinguishes all three states (quiescent / activated / senescent). Multi-marker strategies — LRAT+ for quiescent isolation, αSMA+ for activated, uPAR+/CD206+ for senescent — are standard in research settings [^yashaswini2024].

---

## Anatomy and niche

HSCs reside in the **space of Dissé** (perisinusoidal space), a narrow ~0.2–0.5 µm cleft between:
- The basolateral surface of hepatocytes (which display microvilli into this space for nutrient exchange)
- The abluminal face of [[liver-sinusoidal-endothelial-cells]] (LSECs), whose fenestrated endothelium provides direct plasma-space contact

In this position, quiescent HSCs extend long cytoplasmic processes that encircle multiple hepatocytes and sinusoids, placing them in ideal paracrine sensing and signaling range for both the sinusoidal blood-borne environment and the hepatocyte parenchyma [^bataller2005].

**Quiescence maintenance by the LSEC niche.** Healthy LSECs are fenestrated and maintain HSC quiescence through constitutive release of nitric oxide (NO) and prostaglandins, which suppress HSC activation. Age-related LSEC **pseudocapillarization** — loss of fenestrae and deposition of subendothelial collagen — disrupts this NO-mediated quiescence signal and is believed to lower the activation threshold of HSCs in aged liver (see [[liver]] for LSEC aging section) [^bataller2005]. #gap/needs-replication — direct demonstration that pseudocapillarization mechanistically drives HSC activation threshold lowering in aged human liver is lacking; inference is from rodent models.

| Dimension | Status |
|---|---|
| LSEC-quiescence signaling conserved in humans? | partial — NO/prostaglandin quiescence mechanism established in rodent models and primary human HSC co-culture; pseudocapillarization confirmed in human aging histology, but mechanistic link to HSC activation threshold is not directly shown in aged humans |
| Perisinusoidal anatomy conserved? | yes — space of Dissé with HSC perivascular location confirmed in human liver anatomy |

---

## Activation cascade (quiescent → myofibroblast)

HSC activation is the defining pathological event in liver fibrosis. The cascade proceeds through overlapping phases [^dewidar2019]:

### Initiation
Triggered by parenchymal injury signals: hepatocyte death products (DAMPs, HMGB1), lipid peroxides (4-HNE, MDA from steatotic hepatocytes), endotoxin (LPS from portal circulation), and ROS released from activated Kupffer cells. These converge on HSC pattern-recognition receptors (TLR4, TLR9) and oxidative stress pathways.

### Perpetuation — TGF-β1 axis
TGF-β1 is the master pro-fibrogenic cytokine driving HSC perpetuation [^dewidar2019]:

- **Source:** Kupffer cells, activated HSCs themselves (autocrine), hepatocytes under injury
- **Receptor signaling:** TGF-β1 → TGFβRII/TGFβRI → phosphorylation of SMAD2/SMAD3 → nuclear translocation → transcription of COL1A1, COL1A2, COL3A1, ACTA2, TIMP1 (inhibits collagenase, preventing ECM degradation), PAI-1
- **Net effect:** Sustained collagen I/III deposition + suppressed ECM degradation = progressive scar accumulation

TGF-β1 signaling in HSCs integrates with SMAD-independent (non-canonical) pathways — ERK, JNK, p38 MAPK, and PI3K/AKT — which modulate the fibrogenic response and provide potential therapeutic targets [^dewidar2019].

### Perpetuation — PDGF axis
PDGF-BB (and PDGF-C, PDGF-D in activated HSCs) signals through PDGFRB to drive:
- HSC **proliferation** — the primary mitogenic signal for activated HSCs
- **Chemotaxis** — directional migration toward injury zones
- **Survival** — anti-apoptotic signaling via PI3K/AKT

PDGF and TGF-β1 cooperate in a feed-forward loop: TGF-β1 upregulates PDGFRB expression on HSCs, amplifying their proliferative response to paracrine PDGF-BB from Kupffer cells and endothelium [^bataller2005].

**Activation-state summary:**

| Feature | Quiescent HSC | Activated myofibroblast |
|---|---|---|
| Morphology | Stellate, lipid droplets prominent | Elongated, lipid droplets absent, stress fibers |
| Proliferation | Near-zero | Rapid (PDGF-driven) |
| Collagen I/III output | Minimal | High |
| LRAT | + | - |
| GFAP | + | - |
| αSMA (ACTA2) | - | + |
| Vitamin-A droplets | + | - |
| TGF-β sensitivity | Low | High (autocrine loop) |

---

## Fibrosis resolution — NK cell clearance and apoptosis

In acute liver injury, activated HSCs are removed by two mechanisms that permit fibrosis resolution [^radaeva2006]:

1. **NK cell killing:** Activated HSCs upregulate NKG2D ligands (MICA, ULBP2) and the adhesion molecule CD58, making them susceptible to NK-cell-mediated cytotoxicity via the NKG2D receptor and TRAIL pathways [^krizhanovsky2008]. This immune clearance is impaired in chronic injury contexts where HSCs can downregulate NKG2D ligands.

2. **Spontaneous apoptosis:** Activated HSCs undergo apoptosis as injury resolves, mediated by Fas/FasL signaling, TRAIL, and reduced pro-survival PDGF signaling.

Importantly, quiescent HSCs are resistant to both NK killing and TRAIL-induced apoptosis; only the activated state confers susceptibility. This creates a window for NK-mediated clearance that is pathologically exploited in the senescence escape scenario (see below). #gap/needs-human-replication — NK-mediated HSC clearance evidence is primarily from rodent models and in-vitro human HSC co-culture experiments [^radaeva2006].

| Dimension | Status |
|---|---|
| NK cell killing pathway conserved in humans? | partial — NKG2D/TRAIL mechanism confirmed in human HSC co-culture; in-vivo NK cell HSC clearance not directly demonstrated in human liver |
| Fibrosis resolution by apoptosis? | yes — human biopsy studies confirm activated-HSC apoptosis accompanies fibrosis resolution after HCV cure |

---

## HSC senescence — the dual-context fibrosis paradox

### Krizhanovsky 2008 — senescence limits fibrosis

The landmark demonstration that senescence is not merely a byproduct of HSC activation but a functional limiter of fibrosis came from Krizhanovsky et al. 2008 [^krizhanovsky2008]: in CCl₄-induced liver fibrosis in 7–9-week-old female mice (6-week treatment), activated stellate cells enter a senescent state (p21+/p16+/SA-β-gal+, Ki67-negative, reduced collagen synthesis). Critically, mice with impaired HSC senescence (p53 knockout, p = 0.008; or p53/INK4a/ARF double knockout, p < 0.01) showed **more severe fibrosis**, not less — establishing that senescent HSCs have a fibrosis-limiting role. Simultaneously, senescent HSCs were efficiently cleared by NK cells and immune surveillance (via NKG2D ligands MICA/ULBP2 and TRAIL pathways), allowing fibrosis resolution within 20 days of CCl₄ withdrawal in wild-type mice.

The paradox: senescent HSCs reduce fibrosis progression per cell (less collagen output) but amplify a pro-inflammatory SASP (IL-6, IL-8, PAI-1, TGF-β), which can sustain activation of neighboring non-senescent HSCs. The net outcome is context-dependent:

| Context | Dominant effect of HSC senescence |
|---|---|
| Acute/resolving fibrosis | Anti-fibrotic: reduced collagen output + NK clearance permits resolution |
| Established/chronic fibrosis + immune senescence | Pro-inflammatory: SASP sustains paracrine HSC activation; senescent cells persist when NK surveillance is impaired |
| Advanced cirrhosis | SASP contributes to HCC-promoting microenvironment (IL-6, TNF-α, EGF) |

### Yashaswini 2024 — senescent HSC phenotypes in MASH

Using single-nucleus RNA sequencing and flow cytometry in human MASH liver, Yashaswini et al. confirmed that senescent HSCs arise from activated HSCs (not directly from quiescent cells) and identified **uPAR** and **CD206** as surface markers distinguishing senescent HSCs from activated (non-senescent) HSCs and from Kupffer cells [^yashaswini2024]. Key findings:

- In early MASH, uPAR expression is confined to activated and senescent HSCs
- In advanced MASH/cirrhosis, uPAR also appears on myeloid cells including myeloid-derived suppressor cells
- Senescent HSCs express reduced COL1A1 and proliferative markers relative to activated HSCs
- CD206+ senescent HSCs are a potential therapeutic target for senolytic clearance

This confirms the anti-proliferative, reduced-collagen output profile of senescent HSCs in human disease, consistent with the Krizhanovsky mouse data [^krizhanovsky2008], and provides the first surface-marker toolkit for targeting them therapeutically. #gap/needs-replication — single-centre study in MASH; uPAR/CD206 co-marker validation in alcoholic or viral fibrosis not yet reported.

### FBP1 loss and the HMGB1-senescence axis (2020)

Li et al. 2020 demonstrated that hepatocyte metabolic dysfunction (hepatocyte-specific FBP1 deletion causing gluconeogenic failure and ER stress) triggers stellate cell senescence via HMGB1 secretion, establishing a **hepatocyte-to-HSC paracrine senescence axis** [^li2020fbp1]. Blocking HMGB1 release with inflachromene suppressed HSC activation and SASP development. Depletion of senescent stellate cells with senolytics (dasatinib/quercetin or ABT-263/navitoclax) inhibited tumor progression in mouse DEN and diet-induced HCC models, linking HSC senescence directly to HCC risk. This supports a model where the SASP from senescent HSCs creates a tumor-permissive microenvironment, particularly when immune surveillance of senescent cells is impaired (as in aged liver with immunosenescence).

| Dimension | Status |
|---|---|
| HMGB1-mediated paracrine HSC senescence in humans? | not tested — study is mouse + human cell lines; in-vivo human validation absent |
| Senolytic clearance of HSCs reducing HCC? | preclinical only; no human trial #gap/needs-human-replication |

---

## Aging-associated changes

### Baseline activation threshold lowering

With age, the hepatic microenvironment shifts toward a pro-activation baseline for HSCs through several converging mechanisms, even in the absence of overt liver disease:

1. **LSEC pseudocapillarization** reduces NO-mediated quiescence signals, lowering the activation threshold (see [[liver]] and [[liver-sinusoidal-endothelial-cells]]) [^bataller2005]
2. **Kupffer cell inflammaging** (elevated IL-6, TNF-α, NF-κB; see [[liver]] § Kupffer cells) provides paracrine TGF-β and ROS to HSCs
3. **Accumulated oxidative damage** from decades of normal metabolic load shifts HSC redox state toward pro-activation
4. **Mitochondrial dysfunction** in aged HSCs — impaired mitophagy and elevated mtROS — amplifies their TGF-β sensitivity #gap/unsourced — direct aging-specific mitochondrial data in HSCs are sparse; inference from general aging biology

### Fibrosis progression rates accelerate with age

Age is an independent risk factor for fibrosis progression in all major chronic liver diseases (HBV, HCV, alcohol, MASLD) — a reflection of both elevated baseline HSC activation state and impaired fibrosis resolution [^bataller2005]:

- Older patients show faster fibrosis progression per year of HCV infection
- Post-HCV-cure fibrosis reversal is slower and less complete in older patients
- MASLD → MASH → cirrhosis transition occurs at higher rates in older cohorts

The mechanistic contribution of HSC senescence accumulation to this age-related progression rate difference is biologically plausible but not directly quantified in humans. #gap/needs-replication

### SASP and systemic inflammaging contribution

Senescent HSCs in aged liver secrete IL-6, IL-8, MMP-3, MMP-9, TGF-β, and PAI-1. This hepatic SASP:
- Amplifies systemic inflammaging via portal circulation
- Creates a fibrosis-sustaining paracrine loop in nearby non-senescent HSCs
- Contributes to the tumor-permissive microenvironment relevant to age-related HCC risk

See [[liver]] § Cellular senescence in hepatocytes and stellate cells for the broader hepatic senescence context.

---

## Relationship to hallmarks of aging

| Hallmark | Mechanism in HSCs |
|---|---|
| [[cellular-senescence]] | Activated HSCs enter senescence (p21+/p16+); senescent HSCs limit collagen output but secrete SASP; uPAR+/CD206+ senescent cells are therapeutic targets; accumulation impairs NK-mediated clearance in aged liver |
| [[chronic-inflammation]] | HSC SASP (IL-6, IL-8, TNF-α, TGF-β) amplifies hepatic and systemic inflammaging; Kupffer-cell-derived TNF-α and IL-1β feed back to lower HSC activation threshold |
| [[altered-intercellular-communication]] | HMGB1 paracrine senescence from stressed hepatocytes triggers HSC senescence; LSEC pseudocapillarization removes quiescence-maintaining NO signal; SASP from senescent HSCs drives HCC microenvironment |

---

## Therapeutic implications

### Senolytics targeting senescent HSCs

The identification of uPAR and CD206 as senescent-HSC-specific surface markers [^yashaswini2024] opens the possibility of targeted senolytic clearance of pro-inflammatory senescent HSCs in established fibrosis — potentially resolving the paradox of anti-fibrotic (reduced collagen) vs pro-inflammatory (SASP) effects by removing the SASP source entirely. Preclinical only; no HSC-targeted senolytic trial has been conducted.

### Restoring NK-mediated clearance

Compounds that restore NK cell activity (e.g., by blocking senescent-cell NKG2D-ligand shedding) may re-engage the endogenous fibrosis-resolution mechanism [^radaeva2006]. The impairment of NK-mediated stellate cell clearance in chronic injury and aging represents an actionable gap. #gap/long-term-unknown

### TGF-β and PDGF pathway inhibition

Multiple clinical-stage TGF-β pathway inhibitors (anti-TGFβ antibodies, TGFβRI kinase inhibitors) have been tested in liver fibrosis. Results have been mixed due to TGF-β's pleiotropic roles (immune suppression, regeneration, fibrosis). The narrow therapeutic window between anti-fibrotic and immunosuppressive/pro-tumor effects remains a challenge. PDGFRB inhibitors (e.g., imatinib) reduce HSC activation in rodent models; clinical use is limited by systemic toxicity at doses needed for liver concentrations.

No pharmacological intervention specifically targeting the **senescent HSC subpopulation** has completed human trials as of 2026-06-05. #gap/needs-human-replication

---

## Limitations and gaps

- `#gap/needs-replication` — the fibrosis-limiting role of HSC senescence (Krizhanovsky 2008) was established in CCl₄ mouse models; extension to MASH, alcoholic, and viral fibrosis contexts requires model-specific confirmation
- `#gap/needs-replication` — uPAR+/CD206+ senescent-HSC markers (Yashaswini 2024) validated in MASH only; cross-disease and cross-ethnicity validation pending
- `#gap/needs-human-replication` — NK-cell-mediated clearance of senescent HSCs: demonstrated in rodent models and in-vitro human co-culture; no in-vivo human demonstration
- `#gap/needs-human-replication` — direct quantitative contribution of HSC senescence accumulation to age-related fibrosis-progression-rate increase in humans is not established; current data are indirect (age as epidemiological risk factor)
- `#gap/unsourced` — mitochondrial dysfunction data specific to aged HSCs (as distinct from general aged-liver data); no primary HSC-specific aging mitochondria study identified
- `#gap/no-mechanism` — the cell-intrinsic trigger that determines whether an activated HSC proceeds to apoptosis vs senescence vs continued activation is not established; likely involves p53/p21 vs Bcl-2/Bcl-xL balance, but the upstream decision logic is unclear
- `#stub` — [[liver-fibrosis]], [[hepatocellular-carcinoma]], [[liver-sinusoidal-endothelial-cells]], [[kupffer-cells]] are referenced as wikilinks; none currently have full pages and are seeding targets

---

## Cross-references

- [[liver]] — verified tissue page; HSC activation and dual fibrosis role described in the cellular senescence section
- [[liver-fibrosis]] — phenotype page (stub; seeding target)
- [[hepatocellular-carcinoma]] — phenotype page (stub; seeding target); HSC SASP contributes to HCC microenvironment
- [[liver-sinusoidal-endothelial-cells]] — niche neighbors that maintain HSC quiescence via NO/prostaglandins (stub)
- [[kupffer-cells]] — paracrine source of TGF-β1, PDGF-BB, TNF-α driving HSC activation (stub)
- [[hepatocytes]] — upstream source of HMGB1 and DAMPs triggering HSC activation (stub)
- [[cellular-senescence]] — hallmark; p21/p16 senescence in activated HSCs
- [[chronic-inflammation]] — hallmark; HSC SASP amplifies hepatic and systemic inflammaging
- [[altered-intercellular-communication]] — hallmark; paracrine senescence relay from hepatocytes to HSCs
- [[tgf-beta]] — master pro-fibrogenic pathway; SMAD2/SMAD3 axis drives collagen production
- [[nf-kb]] — activated by TLR4 signaling in HSCs; drives inflammatory gene expression
- [[wnt-beta-catenin]] — role in HSC fate and fibrosis contexts
- [[cgas-sting]] — activated by cytoplasmic DNA in injured hepatocytes; drives SASP amplification
- [[processes/senescence-immune-surveillance]] — NK cell clearance of senescent HSCs
- [[sasp]] — the secretory profile of senescent HSCs (IL-6, IL-8, MMP-3, TGF-β, PAI-1)
- [[masld]] — the primary aging-associated liver disease in which HSC activation occurs (stub)

---

## Footnotes

[^friedman2008]: doi:10.1152/physrev.00013.2007 · Friedman SL · "Hepatic Stellate Cells: Protean, Multifunctional, and Enigmatic Cells of the Liver" · Physiol Rev 88(1):125-172 · 2008 · review· comprehensive reference for HSC identity, markers (desmin, GFAP, LRAT, PDGFRB), perisinusoidal anatomy, vitamin-A storage, and activation cascade

[^bataller2005]: doi:10.1172/JCI24282 · Bataller R, Brenner DA · "Liver fibrosis" · J Clin Invest 115(2):209-218 · 2005 · review· covers HSC activation by TGF-β and PDGF, fibrosis epidemiology including age as risk factor, and LSEC niche quiescence signals

[^krizhanovsky2008]: doi:10.1016/j.cell.2008.06.049 · Krizhanovsky V, Yon M, Dickins RA, Hearn S, Simon J, Miething C, Yee H, Zender L, Lowe SW · "Senescence of Activated Stellate Cells Limits Liver Fibrosis" · Cell 134(4):657-667 · 2008 · in-vivo · model: CCl₄-induced liver fibrosis in 7–9-week-old female mice (6-week treatment); p53⁻/⁻ and p53⁻/⁻;INK4a/ARF⁻/⁻ (DKO) strains · key finding: senescent HSCs (SA-β-gal+, p21+, p16+, Ki67-) accumulate in fibrotic livers and are derived from activated (αSMA+) HSCs; p53-KO mice developed significantly more fibrosis (p = 0.008); DKO mice developed severely more fibrosis (p < 0.01); NK cells preferentially kill senescent activated HSCs via upregulated NKG2D ligands (MICA, ULBP2) and IL-8; NK depletion impaired fibrosis resolution; fibrosis resolved to near-undetectable by 20 days post-CCl₄ in WT mice but persisted in p53-KO mice

[^dewidar2019]: doi:10.3390/cells8111419 · Dewidar B, Meyer C, Dooley S, Meindl-Beinker AN · "TGF-β in Hepatic Stellate Cell Activation and Liver Fibrogenesis—Updated 2019" · Cells 8(11):1419 · 2019 · review· comprehensive review of TGF-β1 SMAD and non-SMAD signaling in HSC activation; PDGF/TGF-β cooperation; metabolic reprogramming of activated HSCs

[^radaeva2006]: doi:10.1053/j.gastro.2005.10.055 · Radaeva S, Sun R, Jaruga B, Nguyen VT, Tian Z, Gao B · "Natural Killer Cells Ameliorate Liver Fibrosis by Killing Activated Stellate Cells in NKG2D-Dependent and Tumor Necrosis Factor–Related Apoptosis-Inducing Ligand–Dependent Manners" · Gastroenterology 130(2):435-452 · 2006 · in-vivo + in-vitro · model: mouse CCl₄ fibrosis + primary human HSC co-culture · key finding: NK cells kill activated (but not quiescent) HSCs via NKG2D + TRAIL; NKG2D ligands (RAE-1/MICA) upregulated on activated HSCs; NK depletion worsened fibrosis; IFN-γ augmented NK-mediated killing· #gap/no-fulltext-access

[^yashaswini2024]: doi:10.1016/j.jhep.2024.03.014 · Yashaswini CN, Qin T, Bhattacharya D, et al. (Friedman SL corresponding) · "Phenotypes and ontogeny of senescent hepatic stellate cells in metabolic dysfunction-associated steatohepatitis" · J Hepatol 81(2):207-217 · 2024 · observational (single-nucleus RNA-seq + flow cytometry + immunostaining) · model: human MASH liver biopsies · key finding: senescent HSCs arise from activated (not quiescent) HSCs; uPAR and CD206 identify senescent HSCs in early disease; uPAR expression expands to myeloid cells in advanced MASH; CD206+ senescent HSCs are a candidate therapeutic target for senolytic clearance · PMID:38508241 · #gap/no-fulltext-access · single-centre, single-disease (MASH) — cross-disease validation pending

[^li2020fbp1]: doi:10.1038/s41556-020-0511-2 · Li F, Huangyang P, Burrows M, Guo K, Riscal R, Godfrey J, Lee KE, Lin N, Lee P, Blair IA, Keith B, Li B, Simon MC · "FBP1 loss disrupts liver metabolism and promotes tumorigenesis through a hepatic stellate cell senescence secretome" · Nat Cell Biol 22(6):728-739 · 2020 · in-vivo + in-vitro · model: mouse hepatocyte-specific Fbp1 deletion (AAV8-TBG-Cre conditional) in DEN and diet-induced HCC models + human HSC cell lines · key finding: hepatocyte FBP1 loss triggers paracrine HSC activation and senescence via HMGB1 secretion; blocking HMGB1 release with inflachromene suppressed HSC SASP; senolytic clearance (dasatinib/quercetin or ABT-263) of senescent HSCs inhibited tumor progression; links HSC SASP to HCC-promoting microenvironment · PMID:32367049

[^zhangsena2021]: doi:10.1016/j.mad.2021.111572 · Zhang M, Serna-Salas S, Damba T, Borghesan M, Demaria M, Moshage H · "Hepatic stellate cell senescence in liver fibrosis: Characteristics, mechanisms and perspectives" · Mech Ageing Dev 199:111572 · 2021 · review· covers senescent HSC characteristics, detection methods, dual pro- and anti-fibrotic roles, SASP composition, and therapeutic perspectives
