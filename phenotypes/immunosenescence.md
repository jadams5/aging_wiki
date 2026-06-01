---
type: phenotype
aliases: [immune aging, age-related immune decline, immunological aging]
icd-10: null
icd-11: null
affected-tissues: ["[[thymus]]", "[[bone-marrow]]", "[[lymph-nodes]]", "[[peripheral-blood]]"]
underlying-hallmarks: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]", "[[chronic-inflammation]]", "[[telomere-attrition]]"]
typical-onset: "Biological onset by puberty (thymic involution); clinically relevant decline by ~60–70"
prevalence-65plus: "Universal — not a discrete diagnosis but a continuous biological process"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Goronzy & Weyand 2019 (OA) verified via PMC full text; Mannick 2014 verified via published abstract (PD-L1→PD-1 corrected; n=218 and exact dose data unverifiable from abstract alone — full text behind paywall); Fluzone HD 24.2% verified against DiazGranados 2014 NEJM (PMID 25119609); Shingrix ZOE-70 efficacy verified against Cunningham 2016 NEJM; Nikolich-Žugich 2018 (not_oa) and Franceschi & Campisi 2014 (not_oa) unverifiable — claims attributed to these sources tagged"
---

# Immunosenescence

The age-associated decline in immune function across both adaptive (T and B lymphocyte) and innate (NK cell, neutrophil, macrophage) compartments. **Not a clinical diagnosis — no standardized diagnostic criteria or ICD code exists.** Immunosenescence is a research construct describing a multi-compartment process of immune remodeling that accompanies aging. Its consequences are real and clinically significant: increased susceptibility to infection, reduced vaccine efficacy, impaired cancer immune surveillance, and paradoxical contributions to autoimmunity — but the phenomenon resists reduction to any single biomarker or cutpoint.

Closely related to, but distinct from, **[[chronic-inflammation|inflammaging]]** — the chronic low-grade sterile inflammation that also accumulates with age. The two processes co-occur and reinforce one another, but should be kept conceptually separate: immunosenescence is primarily about *functional decline*, whereas inflammaging is primarily about *inflammatory tone*[^franceschi2014].

## Clinical and research definitions — no consensus criteria

Unlike sarcopenia (ICD-10 M62.84) or frailty (various scoring instruments), immunosenescence lacks a universally accepted operational definition or diagnostic algorithm. It is assessed indirectly via immune phenotyping, functional assays, and clinical endpoints.

The closest validated marker set is the **Immune Risk Profile (IRP)**, derived from the Swedish OCTO and NONA longitudinal studies of very old adults (85–100 years old)[^nikolich2018]. The IRP was originally defined by Wikby et al. 1998 (PMID 9720651, OCTO cohort) as a cluster of immune parameters predicting mortality over 2-year follow-up. The IRP comprises:

- **Inverted CD4:CD8 ratio** — < 1.0 (normal > 1.5 in adults)
- **CMV seropositivity** — CMV drives massive clonal CD8+ T cell expansion
- **Low B cell count** in peripheral blood
- **Poor proliferative response** to mitogens (originally defined by Wikby and colleagues)

IRP-positive individuals in the OCTO/NONA cohorts had substantially elevated 2-year mortality independent of other health status measures. This remains the most cited prognostic immune-aging signature, but has not been widely replicated with formal cutpoints in independent cohorts. #gap/needs-replication Note: the primary IRP papers (Wikby et al. 1998 and subsequent OCTO/NONA publications) are the canonical source; [^nikolich2018] is a secondary review that synthesises this work. The cutpoints and exact mortality risk data should be verified against the Wikby primary papers.

## Pathophysiology by compartment

Immunosenescence is not a single failure mode — it reflects parallel, interacting deterioration across every major immune compartment.

### Thymic involution — the upstream driver

The thymus produces naive T cells from bone-marrow-derived progenitors. Involution begins at puberty and is near-complete by age 60 in most individuals, with the parenchyma replaced by adipose tissue[^nikolich2018]. By age 70, thymic output of naive T cells is estimated to have fallen ~95% from young-adult levels. #gap/needs-human-replication (estimates vary widely; direct measurement is technically difficult) #gap/no-fulltext-access (cited source Nikolich-Žugich 2018 is not_oa; Goronzy & Weyand 2019, which is OA, states thymic *contribution to T cell generation* declines from ~16% to <1% over adult lifetime — a different framing; the 95% figure remains unverified against primary source)

Consequences:
- The naive T cell pool shrinks and becomes dependent on homeostatic proliferation of existing cells rather than fresh thymic output
- Naive T cell repertoire diversity contracts — reducing the breadth of antigens the adaptive immune system can recognise for the first time
- New vaccines and novel pathogens are harder to mount primary responses against

### T cell compartment — accumulation of senescent effectors

With age, the T cell compartment shifts from a diverse, naive-cell-rich pool toward an oligoclonally expanded, terminally differentiated memory pool[^goronzy2019]:

- **Loss of naive T cells** (CD45RA+CCR7+): reduced thymic output + space increasingly occupied by memory cells
- **Expansion of TEMRA cells** (terminally differentiated effector memory cells that have re-expressed CD45RA): CD95+, KLRG1+, CD57+, often CD28−; resist apoptosis, limited proliferative capacity, contribute to inflammaging via constitutive cytokine secretion
- **CD4:CD8 ratio inversion**: in the very old (>85), inversion correlates with increased mortality (IRP component)
- **CMV-driven CD8+ clonal expansion**: in CMV-seropositive individuals (~50–70% of adults), CMV-specific CD8+ T cells may constitute 10–50% of the entire CD8+ pool, crowding out other specificities — sometimes called "memory inflation" or "clonal exhaustion" of the repertoire[^nikolich2018] #gap/no-fulltext-access (Nikolich-Žugich 2018 is not_oa; this specific 10–50% range could not be verified against the primary source; Goronzy & Weyand 2019 discusses CMV memory inflation qualitatively but does not cite this percentage range)
- **Telomere attrition**: repeated antigen-driven proliferation erodes T cell telomeres → [[telomere-attrition]]; CD8+ TEMRA cells have notably short telomeres and exhibit replicative senescence markers

Functional consequences: reduced IL-2 production, impaired activation-induced proliferation, reduced cytokine polyfunctionality, impaired help for B cells.

### B cell compartment — reduced output and impaired response quality

- Reduced B cell output from bone marrow with age (HSC myeloid bias affects lymphoid output — see [[stem-cell-exhaustion]])
- Naïve B cell pool contracts; repertoire diversity falls
- Impaired class-switch recombination (CSR) and somatic hypermutation (SHM) — the processes that drive antibody affinity maturation and isotype selection
- Reduced germinal centre reactions: smaller GC responses mean lower-avidity, lower-quantity antibody output to new antigens
- **Clinical implication**: vaccine responses to novel antigens (influenza strains, COVID-19, herpes zoster) are substantially blunted in elderly. Seroprotection rates for standard influenza vaccine drop from ~70–90% in young adults to ~40–60% in adults over 65 #gap/needs-replication (rates vary substantially by vaccine platform, year, and population) #gap/no-fulltext-access (Nikolich-Žugich 2018 source is not_oa; figures are consistent with the literature but unverified against primary source)

### NK cells — the "NK paradox"

Natural killer cells show a paradoxical pattern with age:
- **NK cell numbers increase** in peripheral blood with age
- **Per-cell cytotoxicity decreases** — each NK cell is functionally less effective
- Shift toward mature CD56dim subsets; CD56bright (more cytokine-producing, less cytotoxic) subset relatively reduced
- Reduced **natural cytotoxicity receptors** (NKp30, NKp46) — the most consistent activating-receptor change on aged NK cells [^almeida2011nk]. **NKG2D on NK cells is comparatively preserved / inconsistent** across studies; the robust NKG2D decline is on aged *T* cells (a frequent cell-type conflation). Increased inhibitory-receptor expression. See [[processes/senescence-immune-surveillance]] for the reconciled receptor evidence and CMV confounding
- Net effect: cancer immune surveillance is impaired despite numerically "normal" or elevated NK counts — the numbers mask functional exhaustion (direct per-cell cytotoxicity measurements with aging are inconsistently reported and partly CMV-confounded [^campos2014im])

### Innate immunity

Less studied than adaptive changes; generally shows reduced functional output:
- **Neutrophils**: reduced chemotaxis toward infection sites; reduced NET (neutrophil extracellular trap) formation; impaired phagocytic killing per cell
- **Macrophages**: reduced TLR signalling responsiveness (especially TLR1/2 and TLR7/8); altered M1/M2 polarisation balance; paradoxically, increased basal inflammatory tone (contributing to inflammaging)
- **Dendritic cells**: reduced type I interferon production; impaired antigen presentation capacity; reduced migration to lymph nodes
- **Complement system**: generally maintained but with altered regulation; mannan-binding lectin levels change with age #gap/unsourced

## Inflammaging vs immunosenescence — a critical distinction

| Feature | Immunosenescence | Inflammaging |
|---|---|---|
| Definition | Functional decline across immune compartments | Chronic, low-grade, sterile systemic inflammation |
| Key markers | CD4:CD8 ratio, naive T cell %, vaccine response | IL-6, CRP, TNF-α, IL-1β |
| Directionality | Immune responses *too weak* to novel antigens | Inflammatory tone *too high* at baseline |
| Relationship | Contributes to inflammaging (SASP-like TEMRA secretion); also damaged by it | Accelerates T cell senescence; sustains itself via NF-κB |

The two phenomena overlap and reinforce one another: senescent T cells and macrophages secrete pro-inflammatory cytokines (contributing to inflammaging), while the chronic inflammatory milieu of inflammaging accelerates immune cell senescence and dysfunction[^franceschi2014]. Understanding which is the upstream driver in any given individual remains an open question. #gap/contradictory-evidence

## Drivers and accelerants

| Driver | Mechanism |
|---|---|
| **Age** | All compartment changes are age-correlated; the strongest single factor |
| **CMV seropositivity** | Chronic latent CMV drives massive CD8+ TEMRA expansion ("inflationary" memory); accelerates all T cell aging features |
| **Cellular senescence in immune cells** | KLRG1+ CD57+ T cells are senescent; contribute SASP-like cytokines; resist clearance → [[cellular-senescence]] |
| **Hematopoietic stem cell exhaustion** | HSC myeloid bias reduces lymphoid progenitor output → fewer naive T and B cells → [[stem-cell-exhaustion]] |
| **Telomere attrition** | Proliferation-driven telomere erosion in T cells drives replicative senescence → [[telomere-attrition]] |
| **Chronic antigen stimulation** | CMV, CMV-associated antigens, latent viruses, and chronic infections maintain chronic activation |
| **Inflammaging feedback** | IL-6 and other inflammatory cytokines accelerate T cell differentiation toward effector/senescent states → [[chronic-inflammation]] |
| **Thymic involution** | Irreversible architecture loss; no new naive T cells to replace terminally differentiated pool |
| **Malnutrition / micronutrient deficiency** | Zinc, selenium, vitamin D deficiency impairs innate and adaptive immune function |
| **Chronic stress / cortisol** | HPA axis activation suppresses naive T cell maintenance; accelerates senescence phenotype |
| **Sedentary lifestyle** | Physical exercise has demonstrated anti-immunosenescence effects in observational data |

## Hallmark mapping

Immunosenescence is a **convergent integrative phenotype** driven by multiple [[hallmarks-of-aging]]:

- [[stem-cell-exhaustion]] — HSC myeloid bias reduces lymphoid output; bone marrow niche aging impairs B cell development
- [[cellular-senescence]] — senescent T cells (TEMRA, KLRG1+CD57+) accumulate and drive local and systemic SASP
- [[chronic-inflammation]] — inflammaging and immunosenescence are mutually reinforcing; IL-6 and TNF-α accelerate T cell terminal differentiation
- [[telomere-attrition]] — replicative T cell senescence is telomere-erosion dependent; CD8+ T cells in very old individuals have critically short telomeres

## Clinical consequences

### Vaccine response decline
The most practically important consequence. Elderly individuals generate weaker antibody responses to virtually all vaccines tested[^nikolich2018]:
- Standard-dose influenza vaccine: seroprotection ~40–60% in 65+ vs ~70–90% in younger adults #gap/no-fulltext-access (Nikolich-Žugich 2018 not_oa; figure consistent with literature but unverified against primary source)
- COVID-19 mRNA vaccines: antibody titres and T cell responses lower in older adults; wane faster
- Shingles: Zostavax age-specific efficacy varies — ~38% in 70+ and ~70% in 60–69 are commonly cited figures from SPS subgroup analyses, but full-text subgroup confirmation not available here; Shingrix (subunit) achieved 89.8% efficacy in 70+ (ZOE-70 trial) #gap/needs-replication (Zostavax 70+ subgroup figure)

### Increased infection mortality
- Influenza, pneumococcal disease, herpes zoster, RSV — each disproportionately fatal in the elderly
- COVID-19 age-mortality gradient is largely attributable to immunosenescence + inflammaging compound effects
- Urinary tract infections, pneumonia — more frequent and more severe

### Cancer immune surveillance failure
- NK cell cytotoxicity decline and reduced CD8+ T cell naive diversity reduce surveillance of nascent tumours
- T cell exhaustion in tumour microenvironments is exacerbated in elderly
- Immune checkpoint immunotherapy response rates may differ by age (evidence mixed) #gap/contradictory-evidence

### Paradoxical autoimmunity
Despite overall immune *decline*, rates of autoimmune phenomena paradoxically increase with age (rheumatoid arthritis, polymyalgia rheumatica, giant cell arteritis tend to occur in older adults). Proposed mechanism: loss of regulatory T cell (Treg) control; chronic inflammatory milieu drives autoreactive clones. #gap/no-mechanism

## Interventions

### Vaccine formulation strategies (approved/in-use)
The most established clinical approach to immunosenescence is circumventing the weakened vaccine response rather than reversing immune decline:

| Vaccine | Strategy | Evidence |
|---|---|---|
| Fluzone High-Dose (influenza) | 4× standard antigen dose; overcomes reduced B cell response | 24.2% relative efficacy advantage vs standard dose in 65+ (95% CI 9.7–36.5; DiazGranados et al. 2014 NEJM, n=31,989, phase IIIb-IV RCT; PMID 25119609) |
| Fluad (influenza + MF59 adjuvant) | Adjuvant amplifies innate immune signal; increases GC response | Superior seroconversion in elderly; approved for 65+ |
| Shingrix (herpes zoster, AS01B adjuvant) | Potent AS01B (MPL + QS-21) adjuvant; subunit vaccine | 89.8% efficacy in 70+ (ZOE-70 trial, n=13,900; 95% CI 84.2–93.7) vs ~51% overall for live-attenuated Zostavax (SPS trial); Zostavax age-specific figure for 70+ unverified — commonly cited as ~38% but full-text SPS subgroup data not confirmed here #gap/needs-replication |

### mTOR inhibition — first geroprotector trial in humans
Mannick et al. 2014 (RAD001 / everolimus, a rapalogue) in healthy elderly volunteers: RAD001 enhanced the influenza vaccine response by ~20% at well-tolerated doses, and reduced the percentage of CD4 and CD8 T lymphocytes expressing PD-1 (programmed death-1 receptor), which is more highly expressed with age and inhibits T cell signalling[^mannick2014]. Note: the paper describes PD-1 (the receptor on T cells), not PD-L1 (the ligand). This was the first prospective RCT to demonstrate that a geroprotector compound can improve immune function in aged humans. The n=218 figure cited in the footnote below is not present in the published abstract; it would require full-text access to confirm. #gap/needs-replication See [[mtor]] for broader context.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — mTORC1 signalling controls T cell differentiation in humans |
| Phenotype conserved in humans? | Yes — trial conducted in humans |
| Replicated in humans? | In-progress — PEARL trial ongoing; single positive trial |

### Senolytics — preclinical and emerging
Clearance of senescent immune cells (particularly TEMRA/KLRG1+CD57+ cells) may partially restore immune function. Evidence is largely preclinical:
- [[fisetin]] and dasatinib + quercetin clear senescent cells in mouse models; immune compartment effects in aging are not yet well characterized in humans #gap/needs-human-replication
- Fisetin human trials ongoing (NCT03430037 and related); immune-specific endpoints not primary in published reports to date

### Thymic regeneration (preclinical)
Multiple approaches investigated to restore thymic output:
- **IL-7** — cytokine supporting naive T cell homeostasis; modest expansion of naive T cell pool in trials; thymic output itself not clearly restored
- **KGF (keratinocyte growth factor / palifermin)** — thymic epithelial cell support; studied post-BMT; limited direct anti-immunosenescence evidence
- **Sex steroid blockade** (e.g., LHRH agonists + aromatase inhibitors) — reduces androgen-mediated thymic suppression; modest transient increases in thymic output in small trials; not practical at population scale
- **FOXN1 gene therapy** — transcription factor essential for thymic epithelium; preclinical-only; early mouse data promising #gap/needs-human-replication

### CMV vaccine / CMV control
Eliminating the primary driver of CD8+ repertoire collapse (CMV latent infection) would logically slow a major immunosenescence mechanism. No approved CMV vaccine exists as of 2026. Multiple vaccine candidates in Phase 2–3 trials. #gap/long-term-unknown

### Lifestyle
- **Aerobic + resistance exercise** — robust observational evidence for attenuated immunosenescence in physically active elderly; some interventional evidence. Mechanisms include reduced inflammation, improved NK cell function, partial TEMRA expansion delay. #gap/needs-replication for causal claims
- **Adequate nutrition** — zinc and selenium replenishment in deficient elderly restores some innate immune parameters; not effective in replete individuals
- **Caloric restriction** — reduces inflammatory markers in humans (CALERIE trial); direct immune-aging effects in humans not well characterized

## Risk factors

| Factor | Evidence level |
|---|---|
| Age | Strongest predictor; continuous dose-response |
| CMV seropositivity | Strong; major modifier of T cell aging trajectory |
| Chronic disease burden | Moderate; chronic inflammation accelerates immune aging |
| Sedentary lifestyle | Moderate (mostly observational) |
| Malnutrition / micronutrient deficiency | Moderate; well-established for specific deficiencies (zinc) |
| Chronic psychological stress | Moderate (mostly observational); HPA-immune axis |
| Sex (male) | Modest; men have slightly higher CMV-driven TEMRA accumulation in some cohorts #gap/contradictory-evidence |

## Limitations and gaps

- **No diagnostic criteria**: The absence of a standardised operational definition makes prevalence estimates and intervention trials difficult to compare across studies. Any "reversal of immunosenescence" claim requires careful specification of what was measured. #gap/needs-replication
- **IRP validation gap**: The Immune Risk Profile has compelling prognostic data in Scandinavian very-old cohorts but limited independent external validation with strict cutpoints.
- **Causation vs correlation**: Most immune phenotyping is cross-sectional; longitudinal data is limited. Which immune changes drive adverse outcomes vs. which are epiphenomena is largely unknown for most compartments.
- **CMV confound**: CMV seropositivity is a major modifier of the immune aging phenotype. Studies that don't stratify by CMV status may be mixing two very different immunological aging trajectories.
- **NK cell paradox mechanism**: Why NK cell numbers increase while per-cell function decreases is not mechanistically resolved. #gap/no-mechanism
- **Mouse models**: Inbred mouse strains used in most immunosenescence experiments are CMV-naive; they miss the major CMV-driven remodeling central to human immunosenescence. Extrapolation from mouse models is particularly limited here.

## Footnotes

[^nikolich2018]: doi:10.1038/s41590-017-0006-x · Nikolich-Žugich J (2018) "The twilight of immunity: emerging concepts in aging of the immune system" · Nature Immunology · review · cited by ~995 (Crossref as of 2026-04-29) · comprehensive cross-compartment immunosenescence review · **not_oa**: quantitative claims attributed to this source (thymic output ~95%, CMV CD8+ 10–50%, influenza seroprotection 40–60% in 65+) could not be verified against the full text #gap/no-fulltext-access

[^goronzy2019]: doi:10.1038/s41577-019-0180-1 · Goronzy JJ, Weyand CM (2019) "Mechanisms underlying T cell ageing" · Nature Reviews Immunology · review · cited by ~456 (OpenAlex) · OA status: green (PMC7584388) but PDF download failed in a local paper archive · **Verified via PMC full text**: thymic contribution to T cell generation declines from ~16% to <1% over adult lifetime; T cell memory to CMV tends to inflate qualitatively — specific 10–50% CMV CD8+ range and influenza seroprotection figures are NOT stated in this paper

[^mannick2014]: doi:10.1126/scitranslmed.3009892 · Mannick JB et al. (2014) "mTOR inhibition improves immune function in the elderly" · Science Translational Medicine · rct · n=unconfirmed from abstract (n=218 is widely cited but not stated in published abstract — full text is closed-access) · randomized · ~20% improvement in influenza vaccine response; reduced PD-1 (not PD-L1) expression on CD4 and CD8 T cells · model: elderly human volunteers (also cited in [[mtor]])

[^franceschi2014]: doi:10.1093/gerona/glu057 · Franceschi C, Campisi J (2014) "Chronic Inflammation (Inflammaging) and Its Potential Contribution to Age-Associated Diseases" · J Gerontology Series A · review · cited by ~3600 · foundational inflammaging concept paper
[^almeida2011nk]: doi:10.1016/j.humimm.2011.01.009 · Almeida-Oliveira A et al. · *Hum Immunol* 2011 Apr;72(4):319-29 · observational (flow cytometry, healthy donors childhood→old age) · NK cells: NKp30 + NKp46 (NCRs) decreased in elderly; **NKG2D decreased on T cells, NOT NK cells** of elderly subjects · PMID 21262312 · abstract directly read 2026-05-31; full PDF not retrieved #gap/needs-fulltext-verification · canonical reconciliation on [[processes/senescence-immune-surveillance]]
[^campos2014im]: doi:10.1016/j.exger.2014.01.008 · Campos C, Pera A, Sanchez-Correa B et al. · *Exp Gerontol* 2014 Jun;54:130-7 · observational (CMV-stratified) · CD57⁺/NKG2C⁺ NK expansion tracks CMV seropositivity rather than chronological age; age and CMV have separable effects on NK subsets · PMID 24440462 · not_oa; abstract-level 2026-05-31 #gap/no-fulltext-access
