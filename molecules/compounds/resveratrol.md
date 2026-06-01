---
type: compound
aliases: [trans-resveratrol, 3,4',5-trihydroxy-trans-stilbene, RSV]
pubchem-cid: 445154
inchikey: LUKBXSAWLPMMSZ-OWOJBTEDSA-N
chembl-id: CHEMBL165
drugbank-id: DB02709
cas-number: 501-36-0
molecular-formula: C14H12O3
molecular-weight-da: 228.24
biologic: false
mechanisms: [antioxidant, sirtuin-activator, anti-inflammatory]
targets: ["[[sirt1]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
clinical-stage: supplement
human-evidence-level: limited-negative
translation-gap: translation-blocked-effect-size
next-experiment: "Biomarker-stratified RCT in older adults (n≥150) using a high-bioavailability formulation (nanoparticle or cyclodextrin-complexed trans-resveratrol) with pre-specified aging-clock (DunedinPACE or GrimAge) primary endpoint and plasma pharmacokinetics confirmation at baseline and week 4, to test whether the null systemic-RCT record is a bioavailability artifact."
clinical-trials-active: 6
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Howitz 2003 (nature01960), Pacholec 2010 (jbc.m109.088682), Wood 2004 (nature02789), and Hubbard 2013 (science.1231097) primary-source PDFs read end-to-end and cross-checked. Canonical-database identity fields (PubChem CID 445154, InChIKey, CAS, ChEMBL, DrugBank) confirmed against PubChem API. Secondary-source citations (Yadegar 2024, Gonçalinho 2023, Beijers 2020, Gorabi 2021, Abu-Zaid 2025, Leis 2022) remain abstract-level only — not re-verified against full PDFs. Hubbard 2013 author list corrected and substrate-identity claim corrected (PGC-1α / FOXO3a sequences, not 1-aminoanthracene). mechanisms field reverted from non-canonical sirtuin-activator-disputed to canonical sirtuin-activator per CLAUDE.md R24 schema."
---

# Resveratrol

A naturally occurring stilbene polyphenol found primarily in grape skins, red wine, and Japanese knotweed (*Polygonum cuspidatum*). Resveratrol was the central figure in the late-1990s–2000s longevity research wave led by David Sinclair's lab, proposed as a SIRT1 activator and caloric-restriction mimetic. Subsequent mechanistic replication work identified the original SIRT1-activation finding as a fluorescence-assay artifact. Multiple human RCTs at systemic doses (75–5000 mg/day) for cardiovascular, metabolic, and cognitive endpoints have returned null or marginal results that do not support the original CR-mimic framing. Resveratrol is currently classified within the **sirtuin-activating compound (STAC)** class, which carries `human-evidence-level: limited-negative` across the board (see [[interventions/pharmacological/sirtuin-activators]]). Topical use for skin photoaging has modest supporting small-RCT evidence. The compound is widely sold OTC as a supplement; its longevity marketing rests on a mechanistic story that has not been experimentally validated in humans.

## Identity

| Field | Value |
|---|---|
| PubChem CID | 445154 |
| InChIKey | LUKBXSAWLPMMSZ-OWOJBTEDSA-N |
| CAS | 501-36-0 |
| ChEMBL | CHEMBL165 |
| DrugBank | DB02709 |
| Molecular formula | C₁₄H₁₂O₃ |
| Molecular weight | 228.24 Da |
| Class | stilbene polyphenol |
| Canonical SMILES | C1=CC(=CC=C1/C=C/C2=CC(=CC(=C2)O)O)O |
| XLogP | 3.1 |
| Natural sources | grape skins, red wine, *Polygonum cuspidatum*, peanuts, blueberries |

## Structure and chemistry

Resveratrol is a stilbene — a non-flavonoid polyphenol based on a 1,2-diphenylethylene scaffold with hydroxyl substituents at positions 3, 4′, and 5. The biologically active isomer is **trans-resveratrol** (E configuration); *cis*-resveratrol (Z) has substantially lower potency at most biological targets. Trans-to-cis isomerization occurs rapidly on UV exposure, which is why commercial topical formulations use encapsulation strategies (liposomes, cyclodextrin inclusion complexes, nanoparticles) and opaque packaging.

**Physicochemical limitations for in vivo use:**
- Sparingly water-soluble (~30 mg/L in water); soluble in ethanol and DMSO
- Rapid phase II metabolism (glucuronidation + sulfation) in gut wall and liver; oral bioavailability of free trans-resveratrol is ~1% in humans despite rapid absorption
- Short plasma half-life (~1–3 h for free resveratrol; metabolite half-life longer)
- Most circulating resveratrol is in conjugate form; the biological activity of glucuronide/sulfate conjugates is substantially lower than the free aglycone

These PK properties are central to the human-trial null result interpretation — see § Clinical evidence (systemic). #gap/dose-response-unclear

## Resveratrol-sirtuin controversy (the foundational claim and its refutation)

This section documents a canonical case of scientific correction. The original framing generated significant funding and commercial interest; the correction substantially but not entirely deflated the field.

### The Howitz 2003 founding claim

Howitz, Sinclair and colleagues screened ~20,000 small molecules for SIRT1 activation using a fluorogenic Fluor de Lys (FdL) peptide assay [^howitz2003]. Resveratrol was identified as the most potent activator. In the same paper, resveratrol extended replicative lifespan in *S. cerevisiae* by ~70% in a Sir2-dependent manner. The 2003 paper attracted enormous attention and >3,700 citations (archive score 100th percentile), and motivated the founding of Sirtris Pharmaceuticals (acquired by GlaxoSmithKline for ~$720M in 2008 based substantially on this work).

Wood, Sinclair et al. extended the model-organism evidence to *Drosophila* and *C. elegans* in 2004, showing resveratrol and other STACs extended median lifespan in a Sir2-dependent manner [^wood2004].

### The Pacholec 2010 refutation

Pacholec and colleagues (GSK) systematically tested resveratrol and the Sirtris synthetic STAC compounds (SRT1720, SRT2183, SRT1460) using orthogonal assay formats without the FdL fluorophore [^pacholec2010]. **Core finding:** the SIRT1-activation effect is entirely dependent on the fluorophore covalently attached to the FdL substrate peptide. When tested with:
- Mass-spectrometry-based deacetylation assays
- Native peptide substrates without fluorophore
- Dequenching peptide substrates (non-fluorogenic)

...resveratrol showed **no SIRT1 activation at concentrations up to 100 μM**. The apparent activation in the FdL assay is an artifact of resveratrol's fluorescence interacting with the assay fluorophore.

The Pacholec paper has 888 archive-confirmed citations (100th percentile impact), confirmed locally at `10.1074/jbc.m109.088682`. The mechanistic claim that resveratrol directly activates SIRT1 in vivo at clinically achievable concentrations has not been independently validated with non-fluorogenic assays and is considered refuted by most of the biochemistry community.

**Competing view not fully resolved:** Hubbard, Gomes, Dai, Sinclair et al. (2013 *Science* [^hubbard2013]) proposed that SIRT1 activation by STACs is substrate-dependent — specifically, substrates containing a hydrophobic motif at the +1 position relative to the acetylated lysine (present in native PGC-1α Lys778 and FOXO3a Lys290 sequences) do support allosteric STAC-mediated SIRT1 activation. A single residue in the SIRT1 N-terminal activation domain, Glu230, was identified as critical for activation by all tested STACs. This study provided partial mechanistic rehabilitation — the fluorophore in FdL/TAMRA assays mimics these natural hydrophobic motifs — but the translational question remains unresolved: whether this substrate-selective activation occurs at pharmacologically achievable free-resveratrol concentrations in vivo, given the rapid conjugation and low bioavailability, has not been established in an aging-relevant human trial. #gap/contradictory-evidence

### Post-controversy field consensus

The [[interventions/pharmacological/sirtuin-activators]] class page carries:
- `human-evidence-level: limited-negative` — multiple Phase 2 RCTs for hard endpoints returned null or negative results
- `clinical-stage: abandoned` — the Sirtris/GSK program was fully wound down
- `translation-gap: human-evidence-strong-negative`

**Resveratrol continues to show pleiotropic biology** (antioxidant, anti-inflammatory, AMP kinase signaling via AMPK) at supraphysiological doses. These activities may account for modest phenotypic effects in some trials; they do not validate the original CR-mimic framing. The most scientifically durable narrative for resveratrol is as a polyphenolic antioxidant with AMPK-activating properties at high doses, not as a sirtuin activator.

## Mechanism of action (revised post-Pacholec)

| Mechanism | Status | Evidence tier |
|---|---|---|
| Antioxidant / ROS scavenger | **Robust** | In vitro, in vivo; phenolic OH donates H• to free radicals |
| Anti-inflammatory (NF-κB) | **Moderate** | In vitro + animal; dose-dependent; human trials mixed |
| AMPK activation | **Indirect, dose-dependent** | Via mitochondrial complex I inhibition at supraphysiological doses; human equivalent unclear |
| SIRT1 direct activation | **DISPUTED** (fluorophore artifact per Pacholec 2010) | Not confirmed with non-fluorogenic substrates at physiological concentrations |
| Aryl hydrocarbon receptor (AhR) modulation | Reported | Context-dependent agonist/antagonist; relevance to aging unclear |

#gap/no-mechanism — No single molecular target cleanly accounts for resveratrol's in vivo phenotypes. Polypharmacology is the dominant explanatory frame, consistent with the broad-based and dose-variable clinical trial results.

## Clinical evidence — systemic (aging and aging-related endpoints)

**Bottom line:** Systemic resveratrol supplementation has been tested in multiple RCTs across cardiovascular, metabolic, cognitive, and frailty endpoints. The trial record is **largely null** for hard endpoints relevant to aging. A 2024 systematic review of resveratrol in older adults (n=12 trials included) found no consistent benefit across cardiovascular, cognitive, or body-composition outcomes [^yadegar2024]. **The target-engagement question — does resveratrol modulate its proposed primary target, SIRT1, in human RCTs? — was formally addressed by the Mansouri 2025 GRADE-assessed dose-response meta-analysis (11 RCTs pooled across Sirt1 gene expression, protein expression, and serum levels): no significant effect on any of the three Sirt1 readouts in the overall pooled estimates [^mansouri2025].** This is the highest-tier evidence-synthesis answer to the foundational mechanism question and is concordant with Pacholec 2010's biochemical refutation. #gap/needs-replication

| Trial / study | n | Dose | Duration | Primary endpoint | Result |
|---|---|---|---|---|---|
| Mansouri 2025 [^mansouri2025] — SIRT1-modulation meta-analysis | 11 RCTs pooled | Variable | Variable | Sirt1 gene expression / protein expression / serum levels | **No significant effect on any of the three readouts** (SMD=0.05 gene, P=0.73; SMD=0.3 protein, P=0.18; MD=−0.04 serum, P=0.7); dose-response analysis suggests dosage-dependent effects; subgroup analysis showed transient gene-expression elevation in studies <12 wk evaluating blood tissue |
| Cardiovascular risk (healthy older adults; Gonçalinho 2023 [^goncalinho2023]) | ~80 | 500 mg/day | 12 weeks | SIRT1 expression, vascular function | Null on functional endpoints; modest SIRT1 mRNA increase not accompanied by functional improvement |
| Metabolic health in COPD (Beijers 2020 [^beijers2020]) | 30 | 500 mg/day | 16 weeks | Fat mass, exercise capacity | No significant effect |
| CRP meta-analysis (Gorabi 2021 [^gorabi2021]) | 11 RCTs pooled | Variable | Variable | C-reactive protein | Modest CRP reduction (−0.37 mg/L, 95% CI unclear); of uncertain clinical significance |
| Obesity/anthropometrics umbrella review (Abu-Zaid 2025 [^abuzaid2025]) | Multiple meta-analyses | Variable | Variable | BMI, waist circumference | Small, inconsistent effects; high heterogeneity; no consistent weight loss |

The absence of trials specifically powered for mortality, functional aging (DunedinPACE, GrimAge, physical performance index), or multi-morbidity endpoints means the null record is informative but not definitive for the hardest aging questions. #gap/long-term-unknown

### Pharmacokinetic barrier interpretation

A central confound in interpreting systemic RCT nulls: oral free-resveratrol bioavailability in humans is ~1% with rapid phase II conjugation. Plasma Cmax of free resveratrol after 500 mg oral dose is roughly 200–300 nM — orders of magnitude below the micromolar concentrations used in most in vitro mechanistic studies. This bioavailability gap is a plausible mechanistic explanation for null in vivo results independent of whether the target is real. High-bioavailability formulations (encapsulated, liposomal, or micronized trans-resveratrol) exist but have not been tested in adequately powered aging-endpoint RCTs. #gap/dose-response-unclear

## Clinical evidence — topical (skin aging and photoaging)

**Evidence grade: modest, consistent direction; small trials only.**

Topical resveratrol avoids the oral bioavailability problem entirely — stratum corneum and epidermis are achievable targets with cosmetically applied concentrations (0.1–1.0%). The antioxidant and anti-inflammatory mechanisms are most relevant here: phenolic quenching of UV-induced ROS, downregulation of MMP-1 (collagenase), and reduction of UV-induced NF-κB signaling.

- **Formulation challenge:** trans-resveratrol is highly unstable in topical vehicles — rapid cis-isomerization and oxidative degradation necessitate encapsulation (liposomes, cyclodextrin, nanostructured lipid carriers) or antioxidant co-formulation with [[alpha-tocopherol]] and [[ascorbic-acid]]. Poorly formulated products may deliver mostly inactive trans→cis-converted material.
- **Combination rationale:** resveratrol is frequently co-formulated with [[retinoids]] (tretinoin, retinol) and [[niacinamide]] in cosmeceutical products, as the mechanisms are complementary — retinoids drive collagen synthesis, resveratrol provides ROS protection and MMP suppression, niacinamide inhibits melanin transfer.
- **Evidence base:** The topical human trial record is limited to small, short-duration studies. A 2022 review (Leis et al. [^leis2022]) summarized the mechanism and formulation landscape; single-arm or split-face RCTs have found improvements in photoaging scores and skin hydration at 0.1–1% resveratrol over 4–12 weeks, but no large (n>100) placebo-controlled multicenter trial in a [[skin-aging]] photoaging indication has been reported as of 2026. #gap/needs-replication

## Aging-context summary

| Dimension | Assessment |
|---|---|
| CR-mimic / longevity supplement claim | **Not supported** — STAC class is `limited-negative`; Pacholec 2010 shows the founding mechanism is a fluorophore artifact |
| Antioxidant / anti-inflammatory effects | Mechanistically sound; effect size modest; no hard aging endpoint benefit demonstrated in humans |
| Skin photoaging (topical) | Mechanistically coherent; modest small-trial evidence; formulation quality matters |
| Safety | Well-tolerated up to ~1 g/day oral; high doses (≥2.5 g) may cause GI distress; topical well-tolerated |

The compound should **not** be marketed or consumed primarily for longevity / CR-mimic rationale — the mechanistic and clinical case for this has not held up over 20+ years of research. As a topical antioxidant stabilizer in skincare formulations co-used with [[retinoids]], the evidence base is more defensible within its more modest claims.

## Pharmacokinetics summary

| Parameter | Value | Notes |
|---|---|---|
| Oral bioavailability (free) | ~1% | Rapid glucuronidation + sulfation in gut wall and liver |
| Tmax | 0.5–1 h | Free resveratrol; conjugate Tmax later |
| Cmax (500 mg oral) | ~200–300 nM free | Well below micromolar in vitro active concentrations |
| t½ (free) | ~1–3 h | Metabolite half-lives extend to ~9 h |
| Primary metabolites | trans-resveratrol-3-O-glucuronide, trans-resveratrol-3-sulfate | Primary circulating forms; lower biological potency |
| Protein binding | ~93% (albumin) | |
| Elimination | Renal (conjugates) + fecal | |

#gap/dose-response-unclear — The concentration-response relationship between achievable plasma free-resveratrol levels (~nM range) and cellular mechanistic effects studied at μM range in vitro remains unresolved. The bioavailability gap is an underappreciated translation blocker.

## Safety and tolerability

- **Oral doses ≤1 g/day:** generally well-tolerated in RCTs up to 12–52 weeks; occasional mild GI effects (nausea, diarrhea) at higher doses
- **Oral doses ≥2.5 g/day:** increased GI adverse events; some studies report oxaluria (calcium oxalate precursor elevation) at very high doses
- **Drug interactions:** CYP2C9, CYP3A4, and P-glycoprotein modulation reported in vitro; clinical significance at supplement doses unclear; caution advised with warfarin and narrow-therapeutic-index CYP2C9 substrates
- **Topical:** contact sensitization is rare; generally well-tolerated
- #gap/long-term-unknown — No trial >52 weeks in humans; long-term chronic safety unknown

## Cross-links to related entities

**Mechanistic context:**
- [[sirt1]] — the disputed primary target; protein page documents the SIRT1-activation controversy
- [[interventions/pharmacological/sirtuin-activators]] — the STAC class page; carries `limited-negative` + `abandoned` class-level verdict
- [[caloric-restriction]] — the lifestyle intervention resveratrol was proposed to mimic; the CR mechanism is real; the mimicry claim is not validated

**NAD+ / sirtuin successor thread** (the mechanistic lineage that followed resveratrol's fall):
- [[nmn]] and [[nr]] — NAD+ precursors that raise SIRT1 substrate (NAD+) rather than attempt contested allosteric activation; the current post-STAC intervention focus
- [[interventions/pharmacological/nad-precursors]] — class page

**Topical co-formulation context:**
- [[skin-aging]] — phenotype anchor
- [[retinoids]] — frequent co-formulation partner (tretinoin, retinol, adapalene)
- [[alpha-tocopherol]] — lipid-phase antioxidant; co-formulation stabilizer (see R42)
- [[ascorbic-acid]] — water-phase antioxidant co-formulated for regeneration of tocopheroxyl radical (see R42)
- [[niacinamide]] — complementary anti-pigmentation and barrier repair compound

**Hallmarks targeted:**
- [[chronic-inflammation]] — via NF-κB inhibition and antioxidant activity
- [[deregulated-nutrient-sensing]] — via proposed (disputed) SIRT1 activation and indirect AMPK signaling

## Limitations and knowledge gaps

1. **Mechanism gap**: the founding SIRT1-activation mechanism is a fluorophore artifact per Pacholec 2010; substrate-selective activation (Hubbard 2013) not validated at pharmacologically achievable in vivo concentrations. #gap/contradictory-evidence
2. **Bioavailability gap**: free-resveratrol plasma levels at supplement doses (~nM) are ~100–1,000-fold below concentrations showing mechanistic effects in vitro (~μM). No adequately powered RCT has used a high-bioavailability formulation with aging-clock primary endpoint. #gap/dose-response-unclear
3. **Human hard-endpoint gap**: no mortality, DunedinPACE, GrimAge, or functional-aging primary endpoint trial has been published. All positive signals (CRP, body weight, SIRT1 mRNA) are biomarker-only and inconsistent. #gap/needs-human-replication
4. **Topical evidence gap**: topical photoaging benefit has no large (n>100) multicenter placebo-controlled RCT. #gap/needs-replication
5. **Conflict-of-interest concern**: much of the foundational resveratrol research (Howitz 2003, Wood 2004, subsequent Sinclair lab work) originated from or was amplified by parties with significant financial interests (Sirtris Pharmaceuticals; patent interests). Readers should weight independently replicated findings more heavily.
6. **Isomer stability**: commercial products vary widely in trans:cis ratio and storage stability; product quality is not standardized or regulated.

## Footnotes

[^howitz2003]: doi:10.1038/nature01960 · Howitz KT, Bitterman KJ, Cohen HY, Lamming DW, Lavu S, Wood JG, Zipkin RE, Chung P, Kisielewski A, Zhang LL, Scherer B, Sinclair DA · *Nature* 2003;425(6954):191-196 · in-vitro + in-vivo (yeast) · model: *S. cerevisiae* replicative lifespan + fluorogenic Fluor de Lys (FdL) SIRT1 biochemical assay · resveratrol (10 μM) extended average yeast replicative lifespan by 70% (WT: 22.9 generations → resveratrol: 36.8 generations; Sir2-dependent: sir2Δ mutant showed no lifespan extension on resveratrol); identified resveratrol as most potent SIRT1 activator in ~20,000-compound screen; note competing financial interests declared · **local PDF confirmed** (DOI lookup 10.1038_nature01960.pdf)

[^wood2004]: doi:10.1038/nature02789 · Wood JG, Rogina B, Lavu S, Howitz K, Helfand SL, Tatar M, Sinclair D · *Nature* 2004;430(7000):686-689 · in-vivo · model: *Drosophila melanogaster* + *C. elegans* · resveratrol (100 μM) extended *C. elegans* lifespan up to 14% (avg ~10% across trials); extended *D. melanogaster* lifespan up to 29% (avg 20% female, 16% male); extensions Sir2-dependent (no extension in Sir2 null flies); no lifespan extension when nutrients restricted; no reduction in fecundity; note competing financial interests declared · **local PDF confirmed** (DOI lookup 10.1038_nature02789.pdf)

[^pacholec2010]: doi:10.1074/jbc.m109.088682 · Pacholec M, Bleasdale JE, Chrunyk B, Cunningham D, Flynn D, Garofalo RS, Griffith D, Griffor M, Loulakis P, Pabst B, Qiu X, Stockman B, Thanabal V, Varghese A, Ward J, Withka J, Ahn K · *J Biol Chem* 2010;285(11):8340-8351 · in-vitro (biochemical assay) · SRT1720, SRT2183, SRT1460, and resveratrol tested with HPLC-based deacetylation quantification, ELISA, Western blot, and MS using native peptide and full-length Ac-p53 and Ac-AceCS1 substrates without fluorophores; resveratrol showed no activation of SIRT1 (activity remained within ~15% of DMSO control) with native substrates; NMR and SPR confirmed compounds interact directly with TAMRA-containing fluorophore-peptide, not with SIRT1 itself; the apparent activation in fluorescence assays is an artifact of compound interaction with the covalently attached fluorophore group · n=multiple biochemical replicates · **local PDF confirmed** (DOI lookup 10.1074_jbc.m109.088682.pdf)

[^yadegar2024]: doi:10.1002/ptr.8171 · Yadegar S, Mohammadi F, Yadegar A, et al. · *Phytother Res* 2024;38(5):2448-2461 · systematic-review · n=12 RCTs included · older adults · found no consistent benefit of resveratrol supplementation across cardiovascular, cognitive, or body-composition outcomes · **download status: pending; abstract-level verification only**

[^goncalinho2023]: doi:10.3390/nu15132949 · Gonçalinho GHF et al. · *Nutrients* 2023;15(13):2949 · rct · n~80 · healthy women and men · 500 mg/day resveratrol vs placebo × 12 weeks; null on SIRT1-vascular-function endpoints · **abstract-level verification only**

[^beijers2020]: doi:10.1016/j.clnu.2020.01.002 · Beijers RJ et al. · *Clin Nutr* 2020 · rct · n=30 · COPD patients · 500 mg/day resveratrol × 16 weeks; no significant effect on fat mass or exercise capacity · **download status: pending; abstract-level verification only**

[^gorabi2021]: doi:10.1002/ptr.7262 · Gorabi AM et al. · *Phytother Res* 2021 · meta-analysis · 11 RCTs pooled · resveratrol vs placebo for CRP; pooled CRP reduction −0.37 mg/L; modest, heterogeneous · **download status: not_oa; abstract-level verification only**

[^abuzaid2025]: doi:10.1007/s40519-025-01800-w · Abu-Zaid A, Alharran AM et al. · *Eat Weight Disord* 2025 · umbrella-review of interventional meta-analyses · resveratrol and obesity indices; small inconsistent effects across pooled meta-analyses; high heterogeneity · **download status: pending; abstract-level verification only**

[^leis2022]: doi:10.5114/ada.2022.117547 · Leis K et al. · *Postepy Dermatol Alergol* 2022 · review · resveratrol topical skin aging: mechanism and formulation landscape; summarizes photoprotective + anti-MMP-1 evidence; no large RCT available · **abstract-level verification only**

[^mansouri2025]: Mansouri F, Feliziani G, Bordoni L, Gabbianelli R · doi:10.1016/j.jand.2025.03.011 · *J Acad Nutr Diet* 2025 Sep;125(9):1299-1314.e1 · PMID 40158656 · systematic-review (GRADE-assessed) + dose-response meta-analysis · 11 RCTs pooled (4 on Sirt1 gene expression; 5 on protein expression; 3 on serum Sirt1 levels) · resveratrol vs placebo in adults; search dates March 14–April 15, 2024 · primary outcome: SIRT1 modulation across the three readouts · **no significant effect on Sirt1 gene expression (SMD=0.05; 95% CI −0.24 to 0.34; P=0.73), protein expression (SMD=0.3; 95% CI −0.15 to 0.77; P=0.18), or serum levels (MD=−0.04; 95% CI −0.235 to 0.16; P=0.7)**; subgroup analysis showed transient gene-expression elevation in studies <12 wk evaluating blood tissue; dose-response analysis suggests effects may depend on dosage regimen; risk-of-bias assessed via RoB 2; publication bias via Begg's test and year-of-publication meta-regression · **abstract-verified via PubMed efetch; full PDF not locally archived**

[^hubbard2013]: doi:10.1126/science.1231097 · Hubbard BP, Gomes AP, Dai H, Li J, Case AW, Considine T, Riera TV, Lee JE, Yen ES, Lamming DW, Pentelute BL, Schuman ER, Stevens LA, Ling AJY, Armour SM, Michan S, Zhao H, Jiang Y, Sweitzer SM, Blum CA, Disch JS, Ng PY, Howitz KT, Rolo AP, Hamuro Y, Moss J, Perni RB, Ellis JL, Vlasuk GP, Sinclair DA · *Science* 2013;339(6124):1216-1219 · in-vitro + cell-based · substrates with hydrophobic motifs at +1 position relative to acetylated Lys (PGC-1α Lys778, FOXO3a Lys290) support allosteric STAC-mediated SIRT1 activation; SIRT1 residue Glu230 in structured N-terminal domain identified as critical for activation by all tested STACs (117 tested); the fluorophore in FdL/TAMRA assays mimics native hydrophobic substrate motifs; SIRT1-E230K (activation-defective mutant) blocked metabolic effects of STACs in primary myoblasts, supporting direct SIRT1 involvement for at least a subset of physiological effects; note Sirtris (GSK subsidiary) co-authorship and patent interests declared · **local PDF confirmed** (DOI lookup 10.1126_science.1231097.pdf)
