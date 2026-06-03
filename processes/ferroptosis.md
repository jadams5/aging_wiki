---
type: process
aliases: [iron-dependent cell death, lipid-peroxidation cell death]
key-proteins:
  - "[[gpx4]]"
  - "[[slc7a11]]"
  - "[[acsl4]]"
  - "[[fsp1]]"
  - "[[lpcat3]]"
  - "[[tfr1]]"
  - "[[nrf2]]"
pathways:
  - "[[iron-metabolism]]"
  - "[[glutathione-synthesis]]"
  - "[[nrf2-pathway]]"
hallmarks:
  - "[[mitochondrial-dysfunction]]"
  - "[[chronic-inflammation]]"
  - "[[genomic-instability]]"
selective-variants: []
druggability-tier: 2
caused-by:
  - "[[iron]]"
  - "[[oxidative-stress]]"
  - "[[mitochondrial-dysfunction]]"
causes:
  - "[[chronic-inflammation]]"
  - "[[cellular-senescence]]"
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Dixon 2012, Yang 2014, Bersuker 2019 read end-to-end against primary PDFs. Doll 2019 read via PubMed full abstract (PDF not downloadable); Bersuker 2019 page number corrected; PUFA-PE/ACSL4/LPCAT3 attribution corrected to Kagan 2017 and Doll 2017 (Nat Chem Biol). Aging-specific secondary citations (Sperlich 2026, Zhang 2026, Gao 2024, Go 2021, Shu 2022, Liu 2026) not independently verified against PDFs — flagged in scope."
---

# Ferroptosis

A genetically and biochemically distinct form of regulated cell death driven by the **iron-catalyzed, lethal accumulation of lipid hydroperoxides** in cellular membranes. The term and mechanistic framework were coined by Dixon et al. in 2012 [^dixon2012]. Ferroptosis is morphologically and mechanistically separate from [[apoptosis]] (caspase-dependent, immunologically silent), [[processes/pyroptosis|pyroptosis]] (gasdermin-pore-mediated, IL-1β-releasing), and necroptosis (RIPK3-MLKL-driven). It requires labile intracellular iron, a supply of polyunsaturated fatty acid (PUFA)-containing phospholipids as the oxidizable substrate, and failure of lipid-ROS–scavenging defense systems.

In the context of aging, ferroptosis is implicated in: neurodegeneration (Parkinson's and Alzheimer's disease, where brain iron accumulates with age); ischemia-reperfusion injury in the aging heart; general tissue degeneration driven by elevated iron stores; and complex interplay with [[cellular-senescence]]. The iron/ferroptosis axis is a candidate partial contributor to the [[hypotheses/female-longevity-advantage|female longevity advantage]] hypothesis, given that premenopausal menstrual iron loss keeps female iron stores lower than male throughout reproductive years.

## Mechanism

### Iron — the enabling catalyst

Labile (redox-active, non-protein-bound) ferrous iron (Fe²⁺) drives ferroptosis via the **Fenton reaction**:

```
Fe²⁺ + H₂O₂ → Fe³⁺ + OH• + OH⁻  (Fenton reaction)
```

Hydroxyl radicals (OH•) and related reactive oxygen species (ROS) abstract hydrogen atoms from PUFA side chains of phospholipids — most critically arachidonic acid (C20:4) and adrenic acid (C22:4) — generating lipid peroxyl radicals that propagate a chain reaction across the membrane. Intracellular iron is trafficked by transferrin receptor ([[tfr1]]) and stored as ferritin; when ferritin is degraded (ferritinophagy via NCOA4), labile iron increases and ferroptotic susceptibility rises.

### The oxidizable substrate — PUFA-phospholipids

Not all membrane lipids are equally susceptible. Ferroptosis preferentially oxidizes **phosphatidylethanolamine (PE) species containing arachidonic acid or adrenic acid** [^kagan2017]. Two enzymes load PUFAs into membrane phospholipids and are therefore required for ferroptosis:

| Enzyme | Function | Ferroptosis role |
|---|---|---|
| **[[acsl4]]** (acyl-CoA synthetase long-chain family member 4) | Activates free arachidonic acid to arachidonoyl-CoA | Knockout cells resist ferroptosis; ACSL4 is a vulnerability biomarker [^doll2017nchembio] |
| **[[lpcat3]]** (lysophosphatidylcholine acyltransferase 3) | Incorporates arachidonoyl-CoA into PE at the *sn-2* position | Together with ACSL4, determines substrate availability |

Loss of either ACSL4 or LPCAT3 substantially reduces ferroptotic susceptibility; overexpression of ACSL4 sensitizes cells. This makes ACSL4 expression a proxy for tissue ferroptotic vulnerability.

### The primary defense — GPX4 / glutathione / system xc-

The central anti-ferroptotic mechanism is a three-component axis:

1. **[[slc7a11]]** (also called system xc-, or xCT) — a cystine/glutamate antiporter on the plasma membrane. Imports cystine (oxidized cysteine dimer) in exchange for intracellular glutamate. Cystine is reduced intracellularly to cysteine, the rate-limiting substrate for glutathione (GSH) synthesis.
2. **Glutathione (GSH)** — tripeptide (γ-Glu-Cys-Gly); the reducing cosubstrate for GPX4.
3. **[[gpx4]]** (glutathione peroxidase 4) — the *only* enzyme known to directly reduce phospholipid hydroperoxides within the membrane bilayer [^yang2014]. Uses GSH as a reducing equivalent; converts toxic phospholipid hydroperoxides (PE-OOH) to inert phospholipid alcohols (PE-OH). GPX4 inactivation is both necessary and sufficient to trigger ferroptosis when combined with iron availability. GPX4 is a selenoprotein — its active-site selenocysteine (Sec) is essential for catalysis; selenium (Se) deficiency reduces GPX4 activity.

**Mechanistic consequence of defense failure:** When cystine import is blocked (e.g., by erastin, the prototypical ferroptosis inducer that inhibits SLC7A11) or GPX4 is directly inhibited (e.g., by RSL3), the glutathione pool depletes, GPX4 cannot scavenge accumulating PE-OOH, and lipid peroxide–propagated chain reactions overwhelm the membrane — culminating in membrane rupture and lytic cell death.

### The parallel defense — FSP1 / CoQ10 (GPX4-independent)

A second, independent anti-ferroptotic defense was identified simultaneously by two groups in 2019 [^bersuker2019][^doll2019]:

- **[[fsp1]]** (ferroptosis-suppressor protein 1; also called AIFM2) — an NAD(P)H-dependent oxidoreductase that reduces coenzyme Q10 ([[coq10]]; ubiquinol) to its reduced form (CoQH₂) at the plasma membrane (myristoylation-dependent membrane targeting; specific leaflet not delineated in the primary sources).
- **CoQH₂ (ubiquinol)** — acts as a radical-trapping antioxidant (RTA) within the lipid bilayer, directly quenching lipid peroxyl radicals before they propagate.

FSP1 operates **entirely independently of GPX4 and GSH** — cells with high FSP1 expression resist ferroptosis even when GPX4 is inhibited. Conversely, FSP1 knockdown sensitizes GPX4-deficient cells to ferroptosis that would otherwise survive. This identifies FSP1/CoQ10 as the primary back-up system when the GSH axis is compromised.

A third, tissue-restricted defense involves **DHODH** (dihydroorotate dehydrogenase) in the inner mitochondrial membrane, which uses a similar CoQ-reducing mechanism for mitochondrial membrane-specific protection — relevant because mitochondria are enriched in PUFA-containing cardiolipin.

### Cell-death execution

Unlike apoptosis, ferroptosis does not activate caspases and does not produce apoptotic bodies. Morphological hallmarks include:

- **Mitochondrial changes first**: shrunken mitochondria with condensed, electron-dense cristae and ruptured outer membrane
- **Intact nucleus** (no chromatin condensation or fragmentation)
- **Plasma membrane rupture** — not by a pore-forming protein but by generalized membrane failure from oxidative damage
- **Release of DAMPs** — oxidized lipid aldehydes, HMGB1, ferritin fragments; moderate inflammatory signal (less than pyroptosis; more than apoptosis)

## Summary comparison with related cell-death modes

| Feature | Ferroptosis | Apoptosis | Pyroptosis | Necroptosis |
|---|---|---|---|---|
| Membrane integrity | Lost (lytic) | Preserved → phagocytosis | Lost (pore-mediated) | Lost (lytic) |
| Key executioner | GPX4 loss → lipid ROS | Caspase-3/7 | GSDMD | MLKL |
| Iron requirement | Yes | No | No | No |
| Caspase dependence | No | Yes | Yes (caspase-1/-4/-5) | No |
| Inflammation output | Moderate (lipid aldehydes) | Minimal | Strong (IL-1β, IL-18) | Moderate (DAMPs) |
| Morphology | Shrunken mitochondria; intact nucleus | Apoptotic bodies | Cell swelling; membrane blebbing | Cell swelling |
| Key chemical triggers | Erastin (SLC7A11 inh.), RSL3 (GPX4 inh.) | Staurosporine, TRAIL | ATP, urate, flagellin | TNF + caspase-8 block |
| Key inhibitors | Ferrostatin-1, liproxstatin-1, deferoxamine | Z-VAD-FMK | MCC950 (NLRP3), disulfiram (GSDMD) | Necrostatin-1 (RIPK1) |

## Research tools: inducers and inhibitors

### Inducers (used experimentally to model ferroptosis)

| Tool | Target | Mechanism |
|---|---|---|
| Erastin | SLC7A11 / system xc- | Blocks cystine import → GSH depletion → GPX4 failure |
| RSL3 | GPX4 directly | Irreversible covalent GPX4 inhibitor |
| ML210 / ML162 | GPX4 | Covalent inhibitors; chemical probes |
| BSO | Glutamate-cysteine ligase (GCL) | Depletes GSH biosynthesis upstream |
| Sorafenib (kinase inhibitor + SLC7A11 inhibitor) | Multiple, including SLC7A11 | Partial ferroptotic mechanism in cancer cells |

### Inhibitors (experimental anti-ferroptosis probes)

| Tool | Mechanism | Aging relevance |
|---|---|---|
| **Ferrostatin-1** (Fer-1) | Radical-trapping antioxidant; quenches lipid peroxyl radicals in the membrane | Protects neurons and cardiomyocytes in rodent ischemia/reperfusion models #gap/needs-human-replication |
| **Liproxstatin-1** (Lip-1) | Radical-trapping antioxidant; more stable than Fer-1 in vivo | Protective in GPX4 conditional-KO mouse models; blocks hepatocyte ferroptosis |
| **Deferoxamine (DFO)** | Iron chelator — depletes labile iron pool | Reduces ferroptotic susceptibility; FDA-approved for iron overload (thalassemia); no aging-specific trial |
| **Vitamin E (α-tocopherol)** | Lipophilic radical-trapping antioxidant; physiological ferroptosis suppressor | Dietary vitamin E deficiency increases ferroptotic vulnerability in vivo; CoQ10 acts similarly |

## Aging relevance

### 1. Iron accumulation with age

Total body iron increases progressively with age in both sexes — but particularly in men, and in women post-menopause (menstruation-based iron loss ends) [^female-longevity-note]. Serum ferritin (a rough proxy for iron stores) correlates with cardiovascular and cancer risk in population studies. Elevated iron means a larger labile iron pool and greater Fenton-reaction capacity in tissues — a direct amplifier of ferroptotic susceptibility. #gap/needs-human-replication (causal evidence that age-related iron accumulation raises tissue ferroptosis rate in the absence of disease is not established in humans)

### 2. Neurodegeneration — Parkinson's and Alzheimer's disease

Brain iron accumulation is a consistent feature of both Parkinson's disease (PD) and Alzheimer's disease (AD), detectable by MRI (QSM, R2* mapping) in substantia nigra, striatum, and cortex. In PD, loss of dopaminergic neurons in the substantia nigra pars compacta correlates with iron deposition and markers of lipid peroxidation [^sperlich2026]. Alpha-synuclein (α-Syn) aggregates — the defining pathological feature of PD — interact directly with iron and can promote iron-dependent lipid peroxidation; conversely, iron-driven oxidative stress promotes α-Syn aggregation, creating a feed-forward loop. Ferrostatin-1 and deferoxamine reduce dopaminergic neuron loss in several PD mouse models #gap/needs-human-replication. In AD, 4-HNE (4-hydroxynonenal; a toxic lipid aldehyde produced during lipid peroxidation) is elevated in affected brain regions, consistent with lipid peroxidation driving neuronal vulnerability beyond the canonical amyloid/tau pathology. Direct demonstration that ferroptosis (rather than oxidative stress broadly) kills neurons in human AD/PD brain is an active gap. #gap/needs-human-replication

A 2026 Cell Stem Cell study demonstrated that ferroptotic susceptibility of hippocampal neural precursor cells (NPCs) increases with aging and correlates with impaired adult neurogenesis and memory decline in mice — providing a mechanistic link between iron-dependent cell death and the cognitive aging trajectory [^zhang2026].

### 3. Cardiac aging and ischemia-reperfusion injury

Myocardial ischemia-reperfusion injury (IRI) — the paradoxical cell death that occurs when blood flow is restored to ischemic heart tissue — involves a massive burst of ROS including iron-catalyzed lipid peroxidation. GPX4 activity decreases in aged cardiomyocytes. Ferroptosis has been identified as a major contributor to IRI-associated cardiomyocyte death in rodent models; ferrostatin-1 is protective in these models. A 2024 aging study (Gao et al.) demonstrated that GDF15 restrains myocardial IRI partly through a GPX4-dependent mechanism [^gao2024]. Because cardiomyocytes are largely post-mitotic and not easily replaced, ferroptotic loss has permanent consequences on cardiac reserve. #gap/needs-human-replication

### 4. Interplay with cellular senescence

Ferroptosis and [[cellular-senescence]] are mechanistically linked in several directions:

- **Senescent cells accumulate iron** — lysosomal dysfunction in senescent cells (lipofuscin accumulation; impaired ferritin turnover) raises the labile iron pool, increasing ferroptotic susceptibility under oxidative challenge.
- **SASP promotes iron dysregulation** — senescent cells secrete factors including lipocalin-2 and ferritin, altering iron distribution in the tissue microenvironment.
- **Ferroptosis can clear senescent cells** — the senolytic drug JQ1 was found to remove senescent cells via ferroptosis (Go et al. 2021 [^go2021]) — suggesting ferroptosis-induction as a potential senolytic strategy.
- **Statin-induced GGPP depletion** — statins reduce geranylgeranyl pyrophosphate (GGPP), which promotes ferroptosis-related senescence in adipose tissue (Shu et al. 2022 [^shu2022]) — an important caveat for senotherapy via statin-based geroscience approaches.
- **Iron overload → ferroptosis → SASP** — iron-overloaded corneal stroma shows ferroptosis-mediated senescence with elevated SASP markers in a 2026 study [^liu2026], providing a direct in-vivo chain from iron excess to ferroptosis to inflammatory SASP.

The directionality of the ferroptosis-senescence interaction is context-dependent: ferroptosis can be downstream of, parallel to, or an escape route from senescence depending on the iron level, ROS tone, and cell type.

### 5. The iron hypothesis for the female longevity advantage

See [[hypotheses/female-longevity-advantage]] for the full argument. Briefly: premenopausal women lose iron via menstruation, maintaining lower serum ferritin and body iron stores than age-matched men. Lower iron → lower labile iron pool → lower ferroptotic and Fenton-reaction rate → lower oxidative lipid damage. Post-menopausal iron equalization correlates temporally with convergence of female and male cardiovascular risk. This is a **plausible partial mechanism** but causal evidence is limited: the Zarulli et al. team explicitly noted that iron is unlikely to be the primary driver of the sex longevity gap under extreme-mortality conditions; no MR study has established iron stores as a causal determinant of the sex mortality gap in humans. #gap/no-mechanism #gap/needs-human-replication

## Hallmark assignment note

Ferroptosis does not map cleanly to a single hallmark. It is assigned here to [[hallmarks/mitochondrial-dysfunction]] because the iron-driven lipid peroxidation that defines ferroptosis is amplified by dysfunctional mitochondria (which are both sites of ROS production and of DHODH-mediated ferroptosis defense), and because mitochondrial morphology (shrunken, dense cristae) is the earliest structural sign of ferroptosis. Secondary assignments to [[hallmarks/chronic-inflammation]] (lipid aldehyde DAMPs release; SASP interplay) and [[hallmarks/genomic-instability]] (iron-driven Fenton ROS damage to DNA) are noted. A case can be made for [[hallmarks/loss-of-proteostasis]] (ferritin autophagy / ferritinophagy drives labile iron accumulation), but this connection is indirect.

## Extrapolation table

| Dimension | Status |
|---|---|
| Core mechanism (GPX4, system xc-, iron) conserved in humans? | yes — GPX4, SLC7A11, ACSL4 all human-expressed |
| FSP1/CoQ10 parallel defense conserved in humans? | yes — FSP1/AIFM2 is a ubiquitous human protein |
| Ferroptosis in human aged tissue demonstrated in vivo? | partial — lipid peroxidation markers elevated; GPX4 reductions seen; direct ferroptotic cell death in aged human tissue not unambiguously demonstrated |
| Inhibitors (ferrostatin, liproxstatin) tested in humans? | no — preclinical only; deferoxamine is FDA-approved for iron overload but not aging-indication |

## Limitations and gaps

- **No validated human ferroptosis biomarker** — 4-HNE, malondialdehyde (MDA), and plasma GPX4 activity are used as surrogates but are non-specific (measure lipid peroxidation broadly, not ferroptosis specifically). A ferroptosis-specific circulating biomarker does not yet exist. #gap/no-mechanism
- **Causal evidence in humans is lacking** — the iron accumulation → ferroptosis → tissue aging chain is well-supported in rodents; direct evidence in aging humans requires in-vivo imaging combined with tissue sampling and is not yet available. #gap/needs-human-replication
- **Therapeutic window unknown** — ferroptosis is a physiological tumor-suppressor mechanism (cancer cells with high iron/low GPX4 are selectively vulnerable); systemic ferroptosis inhibition may protect normal tissue but also shield malignant cells. The dose-response and tissue-specific balance is unresolved. #gap/dose-response-unclear
- **Senescence-ferroptosis directionality** — whether elevating ferroptosis rate clears senescent cells (beneficial) or whether excess ferroptosis depletes irreplaceable post-mitotic cell pools (detrimental) depends on context not yet parameterized in aged human tissues. #gap/contradictory-evidence
- **FSP1 in aging** — FSP1 expression changes with age have not been characterized across human tissues systematically; whether FSP1 contributes to the age-related decline in ferroptosis resistance is unknown. #gap/needs-replication

## Cross-references

- [[processes/apoptosis]] — mechanistically distinct non-lytic cell death; key comparison point
- [[processes/pyroptosis]] — gasdermin-dependent inflammatory cell death; contrast
- [[hallmarks/mitochondrial-dysfunction]] — primary hallmark; mitochondria both amplify iron-ROS and provide DHODH defense
- [[hallmarks/cellular-senescence]] — bidirectional interplay with ferroptosis
- [[hallmarks/chronic-inflammation]] — lipid aldehyde DAMPs contribute to inflammaging
- [[molecules/compounds/coq10]] — CoQ10/ubiquinol is the FSP1-reduced radical-trapping antioxidant
- [[hypotheses/female-longevity-advantage]] — iron/ferroptosis is candidate mechanism 4
- [[oxidative-stress]] — broader ROS context; ferroptosis is a downstream consequence of sustained lipid oxidative stress #stub
- [[iron]] — labile iron is the enabling catalyst for Fenton chemistry in ferroptosis #stub

## Footnotes

[^dixon2012]: doi:10.1016/j.cell.2012.03.042 · Dixon SJ, Lemberg KM, Lamprecht MR, et al. · *Cell* 149(5):1060–1072 · 2012 · in-vitro + genetic screen · n=cell lines · coined "ferroptosis"; demonstrated iron-dependent, non-apoptotic cell death; identified system xc- as a key vulnerability; >16,000 citations (founding paper)

[^yang2014]: doi:10.1016/j.cell.2013.12.010 · Yang WS, SriRamaratnam R, Welsch ME, et al. · *Cell* 156(1–2):317–331 · 2014 · in-vitro + in-vivo · n=cell lines + mouse models · demonstrated GPX4 as the central regulator of ferroptotic cancer cell death via chemoproteomics (RSL3 binds GPX4 directly); GPX4 KD sensitizes and OE rescues from ferroptosis; DLBCLs and RCCs are particularly susceptible cell lineages; RSL3 established as direct covalent GPX4 inhibitor (note: PUFA-PE substrate specificity and ACSL4 role originate from Kagan 2017 and Doll 2017 Nat Chem Biol, not this paper)

[^bersuker2019]: doi:10.1038/s41586-019-1705-2 · Bersuker K, Hendricks JM, Li Z, et al. · *Nature* 575(7784):688–692 · 2019 · in-vitro + in-vivo · FSP1 (AIFM2) identified as a GPX4-independent ferroptosis suppressor via synthetic-lethal CRISPR/Cas9 screen; myristoylation recruits FSP1 to plasma membrane where it reduces CoQ10 (CoQH₂ acts as radical-trapping antioxidant); concurrent with Doll et al. 2019

[^doll2019]: doi:10.1038/s41586-019-1707-0 · Doll S, Freitas FP, Shah R, et al. · *Nature* 575:693–698 · 2019 · in-vitro + in-vivo · concurrent independent identification of FSP1 as a GPX4-independent ferroptosis suppressor; CoQ-reducing mechanism confirmed

[^sperlich2026]: doi:10.1111/jnc.70438 · Sperlich CL, et al. · *J Neurochem* · 2026 · review · "When Pathways Converge: Iron, Lipid Peroxidation, and α-Synuclein in Ferroptosis-Driven Dopaminergic Neurodegeneration" · integrates iron accumulation, α-Syn aggregation, and ferroptotic mechanisms in Parkinson's disease pathology

[^zhang2026]: doi:10.1016/j.stem.2026.04.017 · Zhang Z, Walker TL, et al. · *Cell Stem Cell* · 2026 · in-vivo · ferroptosis susceptibility of hippocampal neural precursor cells increases with aging in mice; correlates with impaired adult neurogenesis and memory decline; provides mechanistic link between iron-dependent cell death and cognitive aging

[^gao2024]: doi:10.18632/aging.205402 · Gao Q, et al. · *Aging (Albany NY)* · 2024 · in-vivo · "GDF15 restrains myocardial ischemia-reperfusion injury through inhibiting GPX4-mediated ferroptosis" · GPX4 is the primary effector; GPX4 activity declines in aged myocardium; GDF15 is a candidate cardioprotective factor

[^go2021]: doi:10.1007/s13770-021-00346-z · Go S, et al. · *Tissue Eng Regen Med* 18:855–868 · 2021 · in-vitro · "The Senolytic Drug JQ1 Removes Senescent Cells via Ferroptosis" · demonstrated that JQ1 induces ferroptotic death selectively in senescent cells; ferroptosis-induction as a potential senolytic strategy #gap/needs-human-replication

[^shu2022]: doi:10.3390/nu14204365 · Shu X, et al. · *Nutrients* 14(20):4365 · 2022 · in-vitro + in-vivo · "Statin-Induced Geranylgeranyl Pyrophosphate Depletion Promotes Ferroptosis-Related Senescence in Adipose Tissue" · GGPP depletion by statins sensitizes adipocytes to ferroptosis-related senescence — a potential off-target senotherapy concern

[^liu2026]: doi:10.1016/j.redox.2026.104238 · Liu X, et al. · *Redox Biol* · 2026 · in-vivo · "Iron overload triggers pathological remodeling of corneal stroma through ferroptosis and senescence-associated secretory phenotype in keratoconus" · direct in-vivo evidence chain: iron excess → ferroptosis → SASP in stromal tissue

[^kagan2017]: doi:10.1038/nchembio.2238 · Kagan VE, Mao G, Qu F, et al. · *Nat Chem Biol* 13:81–90 · 2017 · in-vitro · demonstrated that oxidized arachidonic- and adrenic-acid-containing phosphatidylethanolamines (PE-AA and PE-AdA) are the specific oxygenated lipid signals that navigate cells to ferroptosis; established PE-AA/AdA as the ferroptotic substrate class

[^doll2017nchembio]: doi:10.1038/nchembio.2239 · Doll S, Proneth B, Tyurina YY, et al. · *Nat Chem Biol* 13:91–98 · 2017 · in-vitro · demonstrated that ACSL4 dictates ferroptosis sensitivity by shaping cellular lipid composition; ACSL4 KO cells resist ferroptosis; overexpression sensitizes; ACSL4 expression is a biomarker of ferroptotic vulnerability (distinct from Doll 2019 *Nature* FSP1 paper)
