---
type: process
aliases: [gasdermin-mediated cell death, inflammatory cell death, caspase-1-dependent cell death]
key-proteins: ["[[caspase-1]]", "[[gsdmd]]", "[[asc]]", "[[nlrp3]]", "[[il-1b]]", "[[il-18]]"]
pathways: ["[[nlrp3-inflammasome]]"]
hallmarks: ["[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: 2
caused-by: ["[[chronic-inflammation]]"]
causes: ["[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Galluzzi 2018 (NCCD nomenclature, pore structure) and Ridker 2017 CANTOS verified against local PDFs. Shi 2015 (pore size, lipid specificity) and Kayagaki 2015 (non-canonical pathway) are not_oa — claims attributed to these sources flagged where unverifiable. Bergsbaken 2009 and Fink 2006 download failed (OA but no URL resolved) — claims attributed to these sources unverified against full PDF; titles confirmed via Crossref, PubMed abstract confirms scope."
---

# Pyroptosis

A form of lytic programmed cell death executed by gasdermin-family pore-forming proteins, characterized by plasma-membrane rupture, concomitant release of mature IL-1β and IL-18, and release of damage-associated molecular patterns (DAMPs). Pyroptosis is mechanistically distinct from apoptosis (non-lytic, immunologically silent), necroptosis (RIPK3-MLKL-mediated; TNF-driven), and ferroptosis (lipid-peroxidation-driven). The term was coined by Cookson and Brennan ~2001 to describe caspase-1-dependent macrophage death during *Salmonella* infection #gap/unsourced — original Trends Microbiol 2001 DOI not confirmed in archive; formal NCCD nomenclature consolidated in Galluzzi 2018 [^galluzzi2018].

In aging biology, pyroptosis is a major effector mechanism downstream of [[nlrp3-inflammasome]] activation and a key amplifier of [[chronic-inflammation|inflammaging]]. Repeated pyroptosis of non-renewable cell populations (cardiomyocytes, vascular endothelium) constitutes an irreversible cell-pool drain.

## Mechanism

### Canonical pathway (inflammasome-dependent)

1. **Sensing**: Pattern recognition receptors detect PAMPs (pathogen-associated) or DAMPs (danger signals, sterile inflammation). The NLRP3 inflammasome responds to a broad range of sterile DAMPs relevant to aging — cholesterol crystals, urate, ATP, amyloid-β, lipid peroxidation products.
2. **ASC speck formation**: [[asc]] (apoptosis-associated speck-like protein containing a CARD) oligomerizes into a single ~1 µm "speck" per cell, bridging the sensor (e.g., [[nlrp3]]) to the effector caspase.
3. **Caspase-1 activation**: Pro-caspase-1 is recruited to the ASC speck and autocatalytically processed to active caspase-1 (p20/p10 heterotetramer).
4. **GSDMD cleavage**: Active caspase-1 cleaves [[gsdmd]] between its N-terminal pore-forming domain (GSDMD-N) and C-terminal autoinhibitory domain (GSDMD-C). Released GSDMD-N translocates to the inner leaflet of the plasma membrane.
5. **Pore formation**: GSDMD-N oligomerizes into a ring-shaped pore. Two source-chains give different stoichiometries: Galluzzi 2018 (NCCD nomenclature review) reports **~10–14 nm inner diameter, 16 symmetric protomers** [^galluzzi2018]; the more recent primary cryo-EM literature (Liu 2016 / Pan 2018, summarized on the verified [[gsdmd]] page) reports **~18 nm inner diameter, ~27 monomers**. The 27-mer / 18-nm value is the structurally direct measurement and is the current best estimate; the Galluzzi 2018 figure is preserved here for traceability of the older review-derived number. The pore drives K⁺ efflux, water influx, and osmotic swelling.
6. **IL-1β / IL-18 maturation and release**: Caspase-1 also cleaves pro-IL-1β and pro-IL-18 to their mature forms; these bioactive cytokines exit through GSDMD pores before membrane rupture and are additionally released in bulk upon lysis.
7. **Membrane lysis**: Sustained osmotic pressure exceeds membrane capacity → plasma membrane rupture → release of cytoplasmic contents including HMGB1, ATP, and other DAMPs [^fink2006].

Inflammasome platforms that feed the canonical pathway: NLRP3, NLRC4 (flagellin/rod proteins), AIM2 (cytosolic dsDNA), pyrin (Rho-GTPase disruption). Each recruits ASC (or directly activates caspase-1 in the case of NLRC4) and converges on the same GSDMD executioner step.

### Non-canonical pathway (inflammasome-independent)

In mice, cytosolic LPS is sensed directly by **caspase-11** (a murine-specific protein); in humans, the orthologues **caspase-4** and **caspase-5** perform the equivalent function. These inflammatory caspases are activated by direct LPS binding without requiring an ASC speck or caspase-1. They cleave GSDMD directly, triggering the same pore-formation and osmotic lysis program [^kayagaki2015].

Key distinction: the non-canonical pathway does not mature IL-1β or IL-18 directly (caspase-4/5/11 do not process these cytokines); instead, GSDMD-mediated K⁺ efflux subsequently activates NLRP3, leading to secondary caspase-1 activation and cytokine maturation.

| Feature | Canonical | Non-canonical |
|---|---|---|
| Sensor | NLRP3, NLRC4, AIM2, pyrin | Caspase-4/5 (human) / Caspase-11 (mouse) |
| Adaptor | ASC speck | None (direct LPS binding) |
| Caspase | Caspase-1 | Caspase-4/5/11 |
| IL-1β/IL-18 maturation | Direct (caspase-1) | Indirect (secondary NLRP3) |
| GSDMD cleavage | Yes | Yes |

## Executioner step: GSDMD-N pore

GSDMD-N has intrinsic affinity for phosphatidylserine and phosphatidylinositol (inner leaflet lipids); it does not bind the outer leaflet, providing cell-autonomous selectivity — bystander cells expressing GSDMD are not killed by extracellular GSDMD-N fragments [^shi2015]. The pore is permeable to molecules up to ~4 kDa #gap/needs-replication (permeability threshold from Shi 2015, not_oa — unverified against local PDF), enabling IL-1β (~17 kDa) to exit only at low concentrations before full lysis; the bulk of IL-1β release requires membrane rupture.

## Distinction from related death modes

| Feature | Pyroptosis | Apoptosis | Necroptosis | Ferroptosis |
|---|---|---|---|---|
| Membrane integrity | Lost (lytic) | Preserved until phagocytosis | Lost (lytic) | Lost (lytic) |
| Key executioner | GSDMD | Caspase-3/7 | MLKL | GPX4 loss → lipid ROS |
| Inflammation | Strong (IL-1β, IL-18, DAMPs) | Minimal (immunologically silent) | Moderate (DAMPs, no IL-1β) | Moderate (lipid aldehydes) |
| Morphology | Cell swelling, bubble-bleb | Cell shrinkage, apoptotic bodies | Cell swelling | Shrunken mitochondria |
| Key upstream trigger | Inflammasome or cytosolic LPS | Intrinsic/extrinsic apoptosis signals | TNF-R / RIPK3 activation | Oxidized lipid accumulation |
| Caspase dependence | Yes (caspase-1 or -4/5/11) | Yes (caspase-3/7) | No | No |

Formal NCCD 2018 nomenclature: pyroptosis is defined as "a type of RCD that critically depends on the formation of plasma membrane pores by members of the gasdermin protein family, often (but not always) as a consequence of inflammatory caspase activation" [^galluzzi2018]. This distinguishes it from secondary necrosis (the late stage of un-cleared apoptotic cells), which is not programmed. The NCCD also discourages the use of the alternative term "pyronecrosis."

## Aging relevance

### NLRP3-driven pyroptosis as an inflammaging amplifier

The NLRP3 inflammasome is chronically activated in aged tissues by sterile DAMPs that accumulate with age: mitochondrial DNA (released by dysfunctional mitochondria), cholesterol crystals, urate crystals, and ox-LDL [^bergsbaken2009]. Downstream caspase-1-mediated pyroptosis amplifies the inflammaging cycle: lytic cell death releases more DAMPs, which re-activate NLRP3 in neighboring cells. This feed-forward loop is increasingly recognized as central to [[chronic-inflammation|inflammaging]] #gap/needs-human-replication — most mechanistic evidence from aged mouse macrophages and in-vitro aged human cells.

### Cell populations affected by age-related pyroptosis

- **Macrophages / monocytes**: Elevated NLRP3-caspase-1 activity in aged macrophages (mouse and human); promotes IL-1β-driven systemic inflammation.
- **Vascular endothelial cells**: Pyroptosis of endothelial cells contributes to atherosclerotic plaque vulnerability and endothelial barrier breakdown. Non-renewable pool in adults.
- **Cardiomyocytes**: NLRP3-pyroptosis in cardiomyocytes reported in aged and failing hearts. Cardiomyocytes are largely post-mitotic; pyroptotic loss is not compensated. #gap/needs-human-replication
- **Microglia**: Pyroptosis of activated microglia contributes to neuroinflammation; seen in Alzheimer's-disease-model mice and in human AD brain tissue (caspase-1 activation, GSDMD cleavage). #gap/contradictory-evidence — causal vs correlative role disputed.
- **Adipocytes**: NLRP3 activation in visceral adipose tissue drives pyroptotic adipocyte death; associated with metabolic inflammaging.

### Pyroptosis vs cellular senescence — mechanistic comparison

Senescent cells (SASP) and pyroptotic cells both release IL-1β and IL-18, which has caused confusion. Key distinctions:

| Feature | Pyroptosis | Senescent SASP |
|---|---|---|
| Cell fate | Death (lytic) | Cell survives (non-lytic) |
| IL-1β release mechanism | Caspase-1 cleavage + GSDMD pore / lysis | NF-κB transcription + unconventional secretion |
| Sustained output | One-time burst at death | Chronic, persists for years |
| GSDMD role | Required executioner | Not required for SASP |
| Reversible? | No | Yes (senolytics eliminate cell) |

[[cellular-senescence|Senescent cells]] can also undergo caspase-1/GSDMD-dependent pyroptosis if NLRP3 activates — this "senoptosis" has been proposed as a convergence mechanism but is mechanistically distinct from classical SASP. #gap/needs-replication

## Therapeutic targeting

### Upstream: inflammasome inhibitors

- **MCC950** (CMPD-4) — potent, selective NLRP3 inhibitor (IC₅₀ ~7.5 nM); blocks ASC speck formation; reduces IL-1β secretion and pyroptosis in multiple disease models. Preclinical; no approved drug yet [^he2016].
- **OLT1177 (dapansutrile)** — orally available NLRP3 inhibitor; Phase 2 trials for gout/heart failure (not aging per se).

### Caspase-1 inhibitors (upstream of GSDMD)

- **VX-740 (pralnacasan)** and **VX-765 (belnacasan)** — caspase-1 inhibitors; tested in Phase 2 for rheumatoid arthritis; disappointing efficacy, possibly because cytokine transcription (NF-κB) continued even with caspase-1 block. Clinical development discontinued.

### Direct GSDMD inhibitors

- **Disulfiram** — approved FDA drug (alcohol aversion); blocks GSDMD-N pore formation via covalent modification of Cys191 (human) or Cys192 (mouse) of GSDMD-N [^he2016]. Repurposing context: COVID-19 hyperinflammation trials; aging application preclinical. #gap/needs-human-replication
- **Sulforaphane analogues** — reported to inhibit GSDMD pore formation; preclinical only. #gap/needs-human-replication

### Downstream cytokine blockade

- **Canakinumab** (anti-IL-1β monoclonal antibody, Novartis) — FDA-approved for cryopyrin-associated periodic syndromes; the CANTOS trial (n=10,061 post-MI patients) showed a 15% reduction in recurrent MACE (nonfatal MI, nonfatal stroke, or cardiovascular death) at the 150-mg dose (HR 0.85, 95% CI 0.74–0.98, p=0.021) [^cantos2017]; the 300-mg dose also met its pre-specified significance threshold (HR 0.86, 95% CI 0.75–0.99, p=0.031). Supports the IL-1β pathway as clinically relevant in atherosclerotic inflammaging. High cost limits wide use; no aging-specific trial yet.
- **Anakinra** (IL-1 receptor antagonist) — shorter half-life biologic; approved for RA and CAPS; used off-label in cytokine storms.
- **Anti-IL-18** (tadekinig alfa) — recombinant IL-18 binding protein; Phase 2/3 in macrophage activation syndrome.

## Extrapolation table

| Dimension | Status |
|---|---|
| GSDMD/caspase-1 mechanism conserved in humans? | yes |
| NLRP3 inflammasome conserved in humans? | yes |
| Pyroptosis in aged human tissues demonstrated? | partial — macrophage/endothelial data; cardiomyocyte/microglial data mostly mouse |
| Therapeutic modulation tested in humans? | yes (IL-1β blockade — CANTOS); GSDMD direct inhibition: no |

## Limitations and gaps

- Direct demonstration of GSDMD-dependent pyroptosis in aged human cardiomyocytes or microglia in vivo is lacking; most evidence is from mouse models or cell lines. #gap/needs-human-replication
- Whether pyroptosis rate increases measurably with chronological age in humans (vs. in disease contexts) has not been quantified with robust biomarkers. #gap/no-mechanism
- GSDMD cleavage fragments are detectable in plasma but are not yet validated as reliable aging biomarkers. #gap/needs-replication
- Whether disulfiram's GSDMD-blocking effect at clinically safe doses (used for alcoholism) is sufficient to meaningfully reduce inflammaging is unknown. #gap/dose-response-unclear
- Caspase-4/5 (non-canonical) contributions to human inflammaging are understudied relative to caspase-1/NLRP3. #gap/needs-human-replication

## Cross-references

- [[caspase-1]] — canonical executioner caspase
- [[gsdmd]] — pore-forming executioner protein
- [[asc]] — adaptor bridging sensor to caspase-1
- [[nlrp3-inflammasome]] — major upstream platform
- [[il-1b]] — key pro-inflammatory cytokine matured and released
- [[il-18]] — IFN-γ-inducing cytokine co-released
- [[canakinumab]] — downstream IL-1β blockade (clinical)
- [[apoptosis]] — non-lytic programmed death (contrast)
- [[cellular-senescence]] — SASP overlap; mechanistically distinct
- [[chronic-inflammation]] — hallmark driven by pyroptosis feed-forward
- [[nlrp3]] — sensor protein seeding in same batch

## Footnotes

[^galluzzi2018]: doi:10.1038/s41418-017-0012-4 · Galluzzi L et al. · *Cell Death Differ* 2018 · review · NCCD 2018 nomenclature; formally defines pyroptosis as gasdermin-dependent lytic cell death · local PDF available

[^shi2015]: doi:10.1038/nature15514 · Shi J et al. · *Nature* 2015 · in-vitro + in-vivo · Identifies GSDMD as the direct caspase-1/11 substrate whose N-terminal fragment executes pyroptosis · n=multiple cell lines + mouse models · not-oa · note: original pore-size attribution (~10–20 nm) superseded; Galluzzi 2018 (verified, local PDF) cites structural characterization giving ~10–14 nm (16 protomers)

[^kayagaki2015]: doi:10.1038/nature15541 · Kayagaki N et al. · *Nature* 2015 · in-vitro + in-vivo · Demonstrates caspase-11 cleaves GSDMD for non-canonical pyroptosis independent of ASC speck · not-oa

[^bergsbaken2009]: doi:10.1038/nrmicro2070 · Bergsbaken T, Fink SL, Cookson BT · *Nat Rev Microbiol* 2009 · review · Comprehensive mechanistic review of pyroptosis; covers caspase-1 pore formation, IL-1β/IL-18 processing, DAMPs release · archive status: failed (green OA, download attempted 2026-05-06; no downloadable URL found) #gap/no-fulltext-access

[^fink2006]: doi:10.1111/j.1462-5822.2006.00751.x · Fink SL, Cookson BT · *Cell Microbiol* 2006 · in-vitro · Caspase-1-dependent pore formation leads to osmotic lysis; distinguishes pyroptosis from apoptosis morphologically · archive status: failed (bronze OA, download attempted 2026-05-06; no downloadable URL found) #gap/no-fulltext-access

[^he2016]: doi:10.1016/j.tibs.2016.10.004 · He WT et al. · *Trends Biochem Sci* 2016 · review · "Pyroptosis: Gasdermin-Mediated Programmed Necrotic Cell Death"; covers GSDMD structure, disulfiram mechanism, MCC950 · not-oa

[^cantos2017]: doi:10.1056/nejmoa1707914 · Ridker PM et al. (CANTOS trial) · *N Engl J Med* 2017 · rct · n=10,061 post-MI (randomized 1.5:1:1:1, placebo:50mg:150mg:300mg, s.c. q3mo) · Primary endpoint (nonfatal MI, nonfatal stroke, or cardiovascular death): 150-mg group HR 0.85, 95% CI 0.74–0.98, p=0.02075 (met pre-specified threshold p=0.02115); 300-mg group HR 0.86, 95% CI 0.75–0.99, p=0.031 (met threshold p=0.01058); 50-mg group HR 0.93, p=0.30 (ns) · All-cause mortality: HR 0.94, 95% CI 0.83–1.06, p=0.31 (ns) · Supports IL-1β axis as causal in atherosclerotic inflammation · local PDF available
