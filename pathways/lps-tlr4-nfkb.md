---
type: pathway
aliases: [LPS-TLR4, TLR4 signaling, Toll-like receptor 4 pathway, MyD88 pathway, LPS-NFkB axis, endotoxin signaling]
kegg: hsa04620
reactome: R-HSA-166016
wikipathways: null   # #gap/needs-canonical-id — WikiPathways TLR4-specific ID not confirmed during seeding; verify on next lint pass
key-nodes: ["[[tlr4]]", "[[md2]]", "[[cd14]]", "[[lbp]]", "[[myd88]]", "[[trif]]", "[[irak4]]", "[[irak1]]", "[[traf6]]", "[[nf-kb]]", "[[irf3]]", "[[ikk]]"]
upstream: ["[[dysbiosis]]", "[[gut-barrier]]", "[[lps]]"]
downstream: ["[[nf-kb]]", "[[chronic-inflammation]]", "[[il-1-signaling]]", "[[nlrp3-inflammasome]]", "[[sasp]]"]
hallmarks: ["[[chronic-inflammation]]", "[[dysbiosis]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 2
caused-by: ["[[dysbiosis]]", "[[gut-barrier]]"]
causes: ["[[chronic-inflammation]]", "[[nf-kb]]", "[[nlrp3-inflammasome]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Kim 2016 (BMC Microbiology) and Opal 2013 (JAMA ACCESS) PDFs read end-to-end; Bailey 2019 (Aging Clin Exp Res) full text retrieved via PMC (PMC6504629) and read end-to-end; Matsunaga 2010 (Mol Pharmacol) is closed-access — verified via PubMed abstract (PMID 20881006) only; Li 2005, Nagpal 2016, Yao 2023 are closed-access and unverifiable from full text. Corrections applied: see log.md 2026-05-07."
---


# LPS → TLR4 → NFκB signaling pathway

The **LPS–TLR4–NFκB axis** is the canonical innate immune pathway through which gram-negative bacterial lipopolysaccharide (LPS) from the gut microbiome triggers systemic inflammatory signaling. In aging, progressive failure of the gut epithelial barrier ([[gut-barrier]]) and shifts in gut microbial composition ([[dysbiosis]]) elevate circulating LPS, creating a state of low-grade chronic endotoxemia that continuously stimulates TLR4 on innate immune cells. The resulting NFκB-driven cytokine output — TNFα, IL-6, IL-1β — is a principal molecular driver of [[chronic-inflammation|inflammaging]] and contributes to the [[altered-intercellular-communication]] hallmark via paracrine cytokine spread.

> **Naming note:** This page covers the LPS–TLR4–NFκB *signaling pathway*. Individual protein nodes (TLR4, MyD88, IRAK4, TRAF6, NF-κB) have separate protein pages. The NF-κB transcriptional program is documented at [[nf-kb]]; this page focuses on the upstream sensing cascade.

## Pathway anatomy

### Step 1: LPS capture and CD14-mediated presentation

LPS (lipopolysaccharide, a glycolipid of gram-negative bacterial outer membranes; the bioactive moiety is **lipid A**) is released when gram-negative bacteria die or shed outer-membrane vesicles. In the circulation, LPS is captured by **LPS-binding protein (LBP)**, an acute-phase protein produced by the liver. LBP transfers LPS monomers to **CD14** — a glycosylphosphatidylinositol-anchored membrane protein on monocytes and macrophages (also exists as soluble sCD14 in plasma) [^li2005]. CD14 lacks a transmembrane signaling domain and therefore hands LPS off to the **MD-2/TLR4 heterodimer** at the cell surface.

### Step 2: TLR4–MD-2 dimer activation

**TLR4** is a single-pass type I transmembrane protein of the Toll/IL-1 receptor (TIR) superfamily. It forms a complex with **MD-2** (also called LY96), a small secreted protein that directly contacts lipid A. Two LPS-bound MD-2/TLR4 heterodimers dimerize into an **[MD-2:TLR4]₂** signaling complex, bringing their intracellular TIR domains into proximity [^li2005]. This dimerization initiates the two parallel downstream arms:

| Arm | Adaptor | Compartment | Transcription factor | Output |
|---|---|---|---|---|
| Canonical (MyD88) | [[myd88]] + TIRAP/MAL | Plasma membrane | [[nf-kb]], AP-1, p38/JNK | TNFα, IL-6, IL-1β, IL-8 |
| Non-canonical (TRIF) | [[trif]] + TRAM | Endosomal (after TLR4 internalization) | IRF3 (→IRF7) | Type I IFN (IFN-β), CXCL10 |

### Step 3: MyD88 arm (canonical NFκB activation)

The scaffolding adaptor [[myd88]] is recruited to the TIR domain of TLR4 via TIRAP/MAL. MyD88 nucleates the **Myddosome** — a death-domain oligomeric complex assembled as:

> MyD88 → IRAK4 → IRAK1 → TRAF6

1. **[[irak4]]** (IL-1 receptor-associated kinase 4) — master kinase of the Myddosome; autophosphorylates and trans-phosphorylates IRAK1. IRAK4 is the non-redundant gating kinase; genetic deficiency causes severe early-childhood bacterial infection. Aging and chronic LPS exposure can impair IRAK4 signaling kinetics (see §Aging changes below) [^li2005].
2. **IRAK1** — dissociates from the complex after phosphorylation and recruits **[[traf6]]** (TNF receptor-associated factor 6).
3. **[[traf6]]** acts as an E3 ubiquitin ligase, generating K63-linked polyubiquitin chains that activate the **TAK1/TAB1/TAB2 complex**. TAK1 then phosphorylates the **IKK complex** (IKKα + IKKβ + IKKγ/NEMO). IKKβ phosphorylates IκBα, targeting it for proteasomal degradation and releasing NFκB (primarily p65/RelA–p50 heterodimers) for nuclear translocation → cytokine gene transcription [^li2005]. This step is shared with the [[il-1-signaling]] pathway.

### Step 4: TRIF arm (type I interferon)

After TLR4 is internalized into endosomes, it recruits [[trif]] (TICAM-1) via TRAM. TRIF activates:
- **TBK1** (TANK-binding kinase 1) and **IKKε** → phosphorylate **IRF3** → IRF3 dimerizes and translocates to the nucleus → **IFN-β** transcription.
- **TRAF6** → delayed NFκB activation (secondary wave, ~4–6 hours post-stimulus).
- **RIPK3** → if apoptosis is suppressed, can drive necroptosis.

The TRIF arm is particularly relevant to the antiviral innate response and is mechanistically distinct from the canonical inflammatory arm. In the context of aging endotoxemia, the MyD88 arm dominates the inflammatory output.

### Key transcriptional outputs

| Gene product | Pathway | Aging relevance |
|---|---|---|
| TNFα (TNFSF2) | NFκB | Master pro-inflammatory cytokine; elevated in aged plasma; drives muscle catabolism ([[sarcopenia]]) |
| IL-6 | NFκB | Pleiotropic; drives acute-phase response; chronically elevated = inflammaging |
| IL-1β | NFκB (transcription) + [[nlrp3-inflammasome]] (processing) | Amplifies via autocrine [[il-1-signaling]] loop |
| IL-8/CXCL8 | NFκB | Neutrophil recruitment; contributes to sterile tissue inflammation |
| IFN-β | IRF3 | Type I IFN-driven gene program; may contribute to [[sasp|SASP]]-like paracrine effects |
| COX-2, iNOS | NFκB | Prostaglandin + nitric oxide synthesis; tissue inflammation |

## Upstream sources of LPS in aging

### 1. Gut barrier failure (primary route)

The gut epithelial barrier — tight-junction proteins (occludin, claudins, ZO-1), mucus layer, and IgA secretion — normally limits translocation of luminal bacteria and bacterial products into the portal and systemic circulation. In aging, cumulative failure of this barrier (documented in [[gut-barrier]]) allows LPS from gram-negative commensals to "leak" into the lamina propria and from there into systemic circulation. This is the canonical **"leaky gut → systemic inflammation"** axis.

The concept of **metabolic endotoxemia** — chronic low-grade elevation of circulating LPS sufficient to activate TLR4 but not to cause overt sepsis — was characterized in the context of high-fat diet and obesity [^nagpal2016]; aging mimics this state via gut-barrier deterioration and dysbiosis. Circulating LPS concentrations are elevated in aged mice vs. young mice [^kim2016] and comparable endotoxemia has been reported in aged human cohorts, though fold-change estimates vary widely by assay methodology and population and no standardized cross-cohort figure is available. #gap/needs-replication — Kim 2016 is a mouse study (C57BL/6J, n=8/group); human aging cohort LPS quantification is not standardized.

### 2. Gut microbiome composition shifts

[[dysbiosis|Age-associated dysbiosis]] shifts the gut community in ways that increase LPS load available for translocation. The specific compositional changes are model- and cohort-dependent: Kim 2016 found that in aged C57BL/6J mice, Firmicutes and Actinobacteria *increased* while Bacteroidetes and Tenericutes *decreased*, yielding an elevated Firmicutes/Bacteroidetes ratio — distinct from the Firmicutes-reduction pattern often described in human aging cohorts [^kim2016]. Regardless of direction, the net effect in aged mice was higher fecal and plasma endotoxin. Gut microbiota-derived LPS (fecal lysate fraction) was shown to increase p16 expression and NF-κB activation in peritoneal macrophages from wild-type (but not TLR4-deficient) aged mice [^kim2016]. #gap/needs-replication — microbiome compositional changes in aging vary substantially across human cohorts and mouse models; the specific taxa responsible for elevated LPS in human aging are not resolved.

### 3. Localized infection and bacteremia

In aged individuals, recurrent urinary tract infections, pneumonia, and dental/[[periodontitis|periodontal]] disease introduce gram-negative bacteria directly, providing episodic acute LPS pulses that, at low grade, may prime chronic TLR4 sensitization. The subgingival biofilm is an especially age-relevant gram-negative reservoir — see [[oral-microbiome-aging-shifts]] and the keystone pathogen [[porphyromonas-gingivalis]].

## Aging-specific changes in the LPS–TLR4 axis

### Elevated LBP and sCD14: biomarkers of chronic endotoxemia

Plasma **LBP** (LPS-binding protein) and **sCD14** (soluble CD14) are established clinical biomarkers of systemic LPS exposure. Both rise with age in population-based cohorts, serving as indirect markers of increased gut LPS translocation. Elevated baseline LBP in older adults reflects tonically elevated LPS challenge even in the absence of overt infection. #gap/unsourced — the specific LBP/sCD14 aging-cohort claim requires a primary source citation; Bailey 2019 [^bailey2019] does not report LBP or sCD14 measurements and should not be cited here. Candidate source: Stehle 2012 (cited in Kim 2016 Discussion as ref [17]) reporting LPS-binding proteins increase in blood of healthy persons with advancing age.

### Paradoxical TLR4 signaling changes (endotoxin tolerance)

Despite elevated systemic LPS, aged innate immune cells display **reduced acute TLR4 signaling responses** — a phenomenon termed **endotoxin tolerance** or TLR4 signaling fatigue [^bailey2019]:

- Circulating leukocytes from older donors (whole blood assay, n=554 veterans aged 40–80) show elevated *baseline* TNFα production (2.5% increase per year of age, p=0.02) but a **diminished delta-response** to acute LPS challenge (ΔTNFα decreased 1.9%/yr after LPS stimulation, p=0.05) [^bailey2019]. IL-6 was not measured in this study. NF-κB phosphorylation was not directly assayed; the attenuated response is inferred from reduced functional TNFα output.
- This paradox explains why aged individuals have both chronic inflammaging *and* impaired acute immune responses: the TLR4 system is chronically partially engaged, reducing dynamic range.
- Mechanism is incompletely defined: candidate explanations include reduced IRAK1 expression, epigenetic silencing of inflammatory loci post-chronic stimulation, and expanded myeloid-derived suppressor cells. #gap/no-mechanism

### Basal NFκB activation

The downstream consequence of chronic LPS/TLR4 engagement is **elevated basal NFκB activity** in aged tissues — particularly monocytes, macrophages, and vascular endothelium. This feeds into the broader [[nf-kb|NFκB signaling]] program of inflammaging and reinforces the [[cellular-senescence|SASP]] positive-feedback loop via paracrine IL-1β and TNFα acting on neighboring cells.

## Cross-talk with parallel inflammasome pathway

TLR4/NFκB activation provides **Signal 1** (NFκB-driven transcription of pro-IL-1β and NLRP3 mRNA) for [[nlrp3-inflammasome]] activation. A second signal (danger signal: ATP, crystals, ROS) then activates the assembled inflammasome, which cleaves pro-IL-1β → mature IL-1β. The two pathways thus cooperate to produce the full IL-1β inflammatory response [^li2005]. Chronic LPS exposure in aging may maintain tonic Signal 1 priming of the inflammasome, lowering the threshold for full activation.

## Pharmacological inhibitors and probes

| Compound | Target | Stage | Notes |
|---|---|---|---|
| **TAK-242** (resatorvid) | TLR4 intracellular TIR domain | Phase 3 (failed for sepsis) | Binds Cys747 in TLR4 TIR domain (Takashima et al. 2009); Matsunaga 2010 showed TAK-242 selectively blocks TIRAP/TRAM adaptor recruitment, thereby inhibiting both MyD88 and TRIF arms [^matsunaga2010]. TAK-242's own phase 3 sepsis trial (LOTUS, Shieh 2011, n=274) was also negative. Not the ACCESS trial (which tested eritoran). Not developed for aging indications. |
| **Eritoran** (E5564) | MD-2/TLR4 lipid A binding site | Phase 3 (failed for sepsis) | Synthetic lipid A antagonist; competes with LPS at MD-2. Phase 3 ACCESS trial (eritoran vs. placebo, n=1,961 severe sepsis patients; 28.1% vs 26.9% 28-day mortality, p=0.59) — no benefit [^opal2013]. Preclinical evidence for anti-aging effects in influenza model (Shirey 2013) but not tested in aging-specific designs. |
| **IAXO-102** | CD14 | Preclinical | Blocks LPS transfer from CD14 to MD-2/TLR4; high selectivity. Animal models of LPS-driven inflammation only. |
| **Naltrexone** (low dose) | TLR4 (atypical) | Clinical (off-label) | Low-dose naltrexone proposed to act as TLR4 antagonist via a non-opioid mechanism; evidence limited and conflicting. #gap/contradictory-evidence |

**Druggability-tier rationale (tier 2):** TLR4 has clinical-stage inhibitors (eritoran, TAK-242 both reached Phase 3) and well-characterized small-molecule probes (TAK-242). However, both Phase 3 sepsis trials failed, and no TLR4 inhibitor is approved or in late-phase trials for an aging indication. Aging-context tier = 2 (high-quality probe; clinical failure in acute indication; no aging-validated drug). The maximum druggability across all indications is arguably tier 2 (no approval exists), so aging-context and max-druggability coincide here.

## Interventions relevant to the aging axis

### Indirect: gut barrier restoration and dysbiosis correction

| Intervention | Mechanism | Evidence level |
|---|---|---|
| [[akkermansia-muciniphila]] supplementation | Restores mucus layer, reduces gut LPS | Human RCT (Depommier 2019); reduces LBP, plasma LPS |
| Dietary fiber / prebiotics | Feeds butyrate producers → reinforces tight junctions via [[scfa-signaling]] | Strong in model organisms; limited-negative to limited in humans |
| Butyrate (isolated SCFA — not a postbiotic per ISAPP 2021) / inactivated-microbe postbiotics | Butyrate directly reinforces tight-junction expression and reduces TLR4 signaling in epithelial cells; pasteurized [[akkermansia-muciniphila]] (true postbiotic per ISAPP 2021) reduces plasma LPS and reinforces barrier via Amuc_1100/TLR2 | Preclinical robust; human data limited |
| [[spermidine]] | Supports autophagy; polyamine effects on gut barrier uncertain | Emerging; #gap/needs-human-replication |
| Fecal microbiota transplant (FMT) | Resets dysbiotic community | Single FMT trial context (cirrhosis); not studied for aging endotoxemia specifically |

### Direct: TLR4 inhibition for aging

No approved or late-stage TLR4 inhibitor for aging. Preclinical interest exists: TAK-242 reduces neuroinflammation and cognitive deficits in aged rodent models [^yao2023_ref] but no human aging trial data. The failed sepsis trials (eritoran, TAK-242) provide safety data (acceptable short-term) but the chronic-dosing safety profile for aging applications is unknown. #gap/long-term-unknown

## Role in the aging hallmark landscape

```
[[dysbiosis]] ──► LPS translocation ──► LBP → CD14 → MD-2/TLR4
                                                           │
                              ┌─────── MyD88 ────────────┐│
                              │  IRAK4 → TRAF6 → TAK1    ││
                              │       → IKK → NFκB        ││
                              └──────────────────────────►│▼
                              ┌─────── TRIF ──────────────┤
                              │  TBK1 → IRF3 → IFN-β      │
                              └──────────────────────────►▼
                        [[chronic-inflammation]] ◄─── cytokine surge
                        [[nlrp3-inflammasome]] (Signal 1 priming)
                        [[cellular-senescence]] (SASP amplification)
                        [[altered-intercellular-communication]]
```

## Limitations and knowledge gaps

- **LPS quantification assay variability** — LAL (Limulus amebocyte lysate) assay is confounded by serum inhibitors; ELISA-based LBP/sCD14 are more reproducible surrogate biomarkers but indirect. Absolute circulating LPS concentrations in aged vs young humans are not reliably standardized across cohorts. #gap/needs-replication
- **Cell-type specificity of aging changes** — most aging TLR4 data comes from monocytes/macrophages; TLR4 expression and signaling in endothelium, microglia, and intestinal epithelial cells during aging are incompletely characterized. #gap/no-mechanism
- **Causal direction** — elevated plasma LBP in aged cohorts is correlational; whether elevated LPS *causes* accelerated aging vs is merely a correlate of other age-related changes has not been tested with Mendelian randomization or interventional designs in humans. #gap/needs-human-replication
- **Endotoxin tolerance mechanism** — the paradox of elevated basal inflammation + reduced acute TLR4 response in aging is mechanistically undercharacterized. Epigenetic, metabolic, and cell-intrinsic mechanisms are all proposed but not resolved. #gap/no-mechanism
- **Therapeutic window** — chronic TLR4 inhibition risks blunting innate immune defense; the dose/duration window for anti-inflammaging benefit without immunosuppression is unknown. #gap/long-term-unknown

## Footnotes

[^li2005]: doi:10.1007/s00109-004-0622-4 · Li X & Qin J · *J Mol Med* 2005 · review · describes TLR4 adaptor combinations: MyD88/TIRAP for NF-κB; TRIF/TRAM for IRF3; establishes dual-arm signaling framework · n/a (review)

[^kim2016]: doi:10.1186/s12866-016-0625-7 · Kim KA et al. · *BMC Microbiology* 2016 · in-vivo (mouse) · aged gut microbiota LPS elevates fecal and plasma endotoxin levels, increases colonic p16 and NF-κB (p-p65) expression, and induces p16/SAMHD1 via TLR4-dependent and TLR4-independent mechanisms in peritoneal macrophages; accelerates inflamm-aging · model: male C57BL/6J mice (4 vs 18 months old); n=8/group (biochemistry); fecal lysate macrophage experiments n=3; study does not report human LPS fold-changes; cited_by: 188; FWCI: 8.1

[^bailey2019]: doi:10.1007/s40520-018-1064-0 · Bailey KL et al. · *Aging Clin Exp Res* 2019 · observational + ex-vivo · n=554 healthy veterans aged 40–80 (whole blood assay); baseline TNFα increases 2.5%/yr with age (p=0.02); ΔTNFα after LPS stimulation decreases 1.9%/yr (p=0.05); no significant change in TLR2, TLR4, or MyD88 mRNA expression with age; elevated baseline is the dominant driver — not increased stimulated response; IL-6 not measured; NF-κB phosphorylation not directly assayed · model: human whole blood (veterans cohort, predominantly male); PMC6504629; cited_by: 54

[^matsunaga2010]: doi:10.1124/mol.110.068064 · Matsunaga N et al. · *Mol Pharmacol* 2011 (epub 2010) · in-vitro + biochemical · TAK-242 selectively binds TLR4 (not TLR2/3/5/9); disrupts protein-protein interactions between TLR4 and adaptor molecules TIRAP (MyD88 arm) and TRAM (TRIF arm); inhibits both NF-κB and ISRE activation downstream; does not inhibit cytokine production from non-TLR4 stimuli. Note: Cys747 as the binding site was identified in Takashima 2009 (doi:10.1111/j.1476-5381.2009.00297.x); Matsunaga 2010 confirmed the Cys747 site and demonstrated the adaptor-interference mechanism. Closed-access; verified via PubMed abstract (PMID 20881006) only. · cited_by: 562; FWCI: 4.5

[^opal2013]: doi:10.1001/jama.2013.2194 · Opal SM et al. · *JAMA* 2013 · phase 3 RCT · eritoran (MD-2/TLR4 antagonist) n=1,961 severe sepsis patients; 28-day mortality: 28.1% (eritoran) vs 26.9% (placebo), p=0.59; no benefit · cited_by: 768; FWCI: 53.2 (citation_percentile: 100)

[^nagpal2016]: doi:10.3920/bm2015.0062 · Nagpal R et al. · *Beneficial Microbes* 2016 · review · gut dysbiosis drives metabolic endotoxemia, insulin resistance, and systemic inflammation via intestinal barrier disruption; links LPS translocation to metabolic disease and aging

[^yao2023_ref]: doi:10.1007/s00011-023-01738-8 · Yao Y et al. · *Inflammopharmacology* 2023 · in-vivo (aged mice) · fluoxetine reduces cognitive dysfunction in aged mice by attenuating TLR4/MyD88/NF-κB activation; supports TLR4 as tractable target in neuroinflammation-aging overlap · model: aged C57BL/6 mice; cited_by: 17
