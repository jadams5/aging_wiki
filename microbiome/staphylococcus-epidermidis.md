---
type: microbe
aliases: [S. epidermidis, SE, coagulase-negative Staphylococcus epidermidis]
ncbi-taxonomy: 1282
phylum: Firmicutes (reclassified Bacillota, 2021 ICNP proposal; "Firmicutes" remains in widespread use)
family: Staphylococcaceae
gram-stain: positive
oxygen-tolerance: facultative anaerobic
host: "Homo sapiens (skin + mucosal surface commensal)"
discovered: 1884 (Welch)
genome-size-mb: ~2.5 (typical commensal strain; range 2.4–2.8 Mb across sequenced strains)
key-strains: [ATCC 12228 (commensal reference; ica-negative), RP62A (biofilm-forming pathogenic reference; ica-positive)]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All cited primary sources verified via PDF or PubMed efetch abstract: Zheng 2022 (local PDF, full read pp.1-10), Keshari 2019 (local PDF pp.1-6), Nguyen 2017 (local PDF pp.1-5), Cogen 2010 (local PDF pp.1-6), Negari 2021 (local PDF pp.1-5), Hu 2023 (local PDF pp.1-5), Swaney 2025 (local PDF pp.1-5). Naik 2015 verified via PubMed efetch (not_oa). Lai 2010 verified via PubMed efetch (not_oa; PMC2922455). Howard 2022 verified via PubMed efetch (not_oa). NCBI Taxonomy ID 1282 confirmed via eutils. Corrections applied: see verified-scope. Howard 2022 first author corrected; Negari 2021 cell model corrected; Hu 2023 n=48 added; Swaney 2025 n=59 added; Zheng 2022 enzyme-name precision added."
---

# *Staphylococcus epidermidis*

*Staphylococcus epidermidis* (SE) is a gram-positive, facultatively anaerobic coccus and the **most abundant bacterial commensal on the surface (non-follicular) skin of healthy humans**, typically present at 10⁴–10⁶ CFU/cm² across most body-surface sites [^nguyen2017]. It is emphatically **not** *Staphylococcus aureus* — SE is the "good skin Staph" of healthy microbiota, with a predominantly mutualistic relationship to the host; *S. aureus* is the canonical skin pathogen. SE contributes to pathogen exclusion, skin barrier homeostasis, and calibration of skin immune responses. Its relevance to aging biology is dual: (1) commensal SE maintains skin barrier function and immune homeostasis via mechanisms that become impaired in aged skin, and (2) pathogenic (biofilm-forming, ica-positive) SE strains cause nosocomial infections — catheter-associated sepsis, prosthetic-joint infection — at disproportionately high rates in elderly and immunocompromised surgical patients. Sister pages for context: [[skin-microbiome-aging-shifts]] and [[cutibacterium-acnes]] (#stub).

## Identity

| Field | Value |
|---|---|
| Species | *Staphylococcus epidermidis* (Winslow & Winslow 1908) Evans 1916 |
| NCBI Taxonomy ID | 1282 |
| Phylum | Firmicutes / Bacillota (2021 reclassification; Firmicutes still in common use) |
| Class | Bacilli |
| Order | Bacillales |
| Family | Staphylococcaceae |
| Gram stain | Positive |
| Morphology | Spherical coccus (~0.8–1.3 µm diameter); forms clusters in culture |
| Oxygen tolerance | Facultative anaerobe |
| Motility | Non-motile; non-spore-forming |
| Reference strain (commensal) | ATCC 12228 (ica-negative; non-biofilm-forming; used as commensal reference) |
| Reference strain (pathogenic) | RP62A (ica-positive; biofilm-forming; used for virulence studies) |
| Typical genome size | ~2.5 Mb (range 2.4–2.8 Mb across sequenced strains) |

The species was first described by William Welch in 1884 and formally renamed to *S. epidermidis* by Evans (1916). The genus *Staphylococcus* belongs to Staphylococcaceae; SE is a **coagulase-negative Staphylococcus (CoNS)**, which distinguishes it from the coagulase-positive pathogen *S. aureus* [^nguyen2017].

## Taxonomy note — Firmicutes vs Bacillota

The phylum Firmicutes was formally renamed Bacillota under the 2021 ICNP proposals for standardized nomenclature. As of 2026, "Firmicutes" remains in widespread use in the clinical and aging-biology literature; Bacillota is the NCBI-preferred term. This page uses both; no biological content changes.

## Strain diversity and the ica operon

Commensal *S. epidermidis* strains differ fundamentally from nosocomial/pathogenic strains. The critical discriminant is the **ica operon** (intercellular adhesion locus), which encodes enzymes for polysaccharide intercellular adhesin (PIA) synthesis:

- **Commensal strains** (e.g., ATCC 12228): ica-negative or ica-suppressed; cannot form thick biofilms; do not colonize implanted foreign materials.
- **Nosocomial pathogenic strains** (e.g., RP62A): ica-positive; form robust PIA-dependent biofilms on catheters, prosthetic joints, and cerebrospinal shunts; resist phagocytosis and antibiotic penetration within the biofilm matrix [^nguyen2017].

Within a single individual, ~30 distinct SE strains coexist on the skin simultaneously — high intrahost strain diversity is a normal feature of commensal SE ecology. Nosocomial infections typically arise from a small number of ica-positive strains selected during hospital exposure, not from the patient's own commensal strains [^nguyen2017]. #gap/needs-replication — the "~30 strains per person" estimate derives from early culture-based studies; metagenomic confirmation of this number is pending.

## Ecology and niche

SE inhabits essentially all skin surface areas, with density highest in **moist and intertriginous areas** (axilla, groin, antecubital fossa, retroauricular fold) and lower in drier sebaceous and dry sites. Its surface niche distinguishes it from *Cutibacterium acnes*, which occupies sebaceous follicles (deep follicular, lipid-rich environment). SE:

- Tolerates skin surface pH 4.5–6.5 and the low water activity of the stratum corneum.
- Uses **dead corneocytes, sebaceous lipids, and skin-surface secretions** as carbon sources; ferments glycerol (abundant in sebum) to short-chain fatty acids including butyric acid.
- Has no obligate mucin-dependency (unlike *Akkermansia muciniphila* in the gut), relying instead on the steady desquamation of stratum corneum as a substrate reservoir.

Relative abundance across skin sites is well-characterized by Human Microbiome Project 16S rRNA data: SE comprises a major fraction of the Firmicutes fraction on most non-follicular sites [^howard2022].

## Beneficial functions

### Pathogen exclusion

SE antagonizes skin pathogens including *S. aureus* and *Streptococcus* spp. via two distinct antimicrobial mechanisms:

**Phenol-soluble modulins (PSMs):** SE secretes two PSM peptides, **PSMγ (phenol-soluble modulin-γ)** and **PSMδ (phenol-soluble modulin-δ)**, that exhibit **selective** antimicrobial activity — minimum bactericidal concentration (MBC) of 4–16 µM against *S. aureus* and Group A *Streptococcus* (GAS), versus MBC >64 µM against commensal SE strains. PSMs synergize with the host antimicrobial peptide LL-37, and together they reduce GAS survival on mouse skin explants without affecting SE [^cogen2010]. The selectivity reflects structural differences between pathogenic and commensal staphylococcal membranes.

**Lantibiotics — epidermin and gallidermin:** SE (and closely related CoNS) produce lantibiotic bacteriocins including epidermin and gallidermin that are active against *S. aureus* including MRSA strains; gallidermin MIC against MRSA is ~1.56 µg/mL, with minimal cytotoxicity on human fibroblasts [^nguyen2017]. These compounds act on cell-wall biosynthesis (lipid II target) and have no direct counterpart resistance mechanism in *S. aureus*, making them promising candidate topical agents.

**Nasal colonization competition:** *S. epidermidis* present in the human nasal cavity directly antagonizes *S. aureus* nasal colonization through bacteriocin and PSM secretion — clinically relevant given that nasal *S. aureus* colonization is the primary reservoir for invasive *S. aureus* infection in surgical patients. #gap/needs-replication — mechanistic data are from in vitro and mouse models; human nasal colonization competition studies are limited.

### Antimicrobial peptide induction in keratinocytes

SE produces a small (<10 kDa) bioactive molecule (SECM — *S. epidermidis* conditioned medium component) that engages **TLR2** on keratinocytes, inducing expression of **human beta-defensin 2 (hBD2)** and **hBD3** [^lai2010]. This effect:

- Is TLR2-dependent — blocked by TLR2-neutralizing antibody; absent in Tlr2-deficient mice.
- Protects skin against Group A *Streptococcus* and *S. aureus* in murine challenge models.
- Represents a commensal-mediated enhancement of innate barrier immunity — SE "trains" the keratinocyte to mount a more robust antimicrobial response without triggering inflammation.

See [[ll-37]] (#stub) for the LL-37 biology; see [[keratinocytes]] for the keratinocyte cell type.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TLR2 / hBD2/3 axis is human |
| Phenotype conserved in humans? | partial — AMP induction confirmed in human keratinocyte cultures; in-vivo challenge protection demonstrated in mice only |
| Replicated in humans? | no — no human RCT for this endpoint |

### Immune homeostasis — T cell calibration

Naik et al. 2015 demonstrated that SE colonization induces a distinct population of **IL-17A+ CD8+ T cells** in the skin epidermis [^naik2015]. These cells:

- Are generated through coordinated action of skin-resident dendritic cell subsets.
- Enhance innate barrier immunity and limit pathogen invasion.
- Are specific to commensal SE — not a generic inflammatory response (no systemic inflammation observed).
- Represent a proposed evolutionary mechanism by which the skin immune system uses commensal signals to calibrate barrier immunity and provide heterologous protection.

The commensal-T-cell interaction may be disrupted in aged skin due to [[immunosenescence]] — age-related contraction of the naïve T-cell pool and DC dysfunction could impair the Naik-2015-style commensal-training mechanism. #gap/needs-replication — this extrapolation to aging has not been directly tested in a controlled study.

### Ceramide production and skin barrier homeostasis

Zheng et al. 2022 (Cell Host & Microbe) identified a novel symbiotic mechanism: SE secretes a **neutral sphingomyelinase** enzyme — designated Sph, encoded by the *sph* gene — that cleaves host skin sphingomyelin (SM) into ceramide and phosphocholine (PC). Ceramides are the major lipid constituent of the stratum corneum lamellar lipid sheets, essential for barrier function and hydration [^zheng2022]. Key findings:

- SE Sph significantly increased stratum corneum ceramide levels and reduced transepidermal water loss in a mouse compromised-skin model.
- The symbiosis is bidirectional: the bacterium acquires PC as a soluble carbon/nitrogen nutrient source; the host gains ceramides for barrier maintenance.
- The protective effect on skin barrier was entirely dependent on the *sph* gene (abolished in isogenic Δ*sph* deletion mutants; rescued by genetic complementation and by exogenous PC).
- The *sph* gene is present in 47/48 (98%) of tested SE skin isolates and is expressed in vivo on human skin at higher levels than in mouse colonization experiments.
- Provides a microbiome-mediated mechanism for skin moisturization and barrier maintenance that is distinct from, and complementary to, the TLR2/defensin axis.

In aging, sebum production declines and skin ceramide content decreases with age (independent lines of evidence) — the loss of SE-mediated ceramide generation could contribute to age-related skin barrier deterioration and increased transepidermal water loss. #gap/needs-replication — direct evidence that SE ceramide generation declines in aged skin has not been published.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — sphingomyelin and ceramide biology is conserved; SE Sph expressed on human skin at high levels; ceramide-generating mechanism confirmed in mouse in vivo and human keratinocyte cultures |
| Phenotype conserved in humans? | partial — *sph* expression confirmed in human skin microbiome in vivo (14/20 armpits, 10/20 face); in-vivo barrier protection demonstrated in mouse only |
| Replicated in humans? | no |

### Butyric acid production and anti-inflammatory signaling

SE ferments skin-surface glycerol to generate **butyric acid** (measured at ~6 mM in fermented glycerol medium in vitro [^keshari2019]), which suppresses UV-induced pro-inflammatory **IL-6** production in skin via the short-chain fatty acid receptor **FFAR2** (also known as GPR43). This represents a second SCFA-based anti-inflammatory mechanism beyond the ceramide axis. In aged skin, sebum-derived glycerol availability declines with sebaceous gland atrophy — this could reduce the SE butyric acid pool and contribute to increased UV-driven skin inflammation with aging. #gap/needs-replication — the glycerol/butyrate/aging connection is proposed but not directly studied.

## Aging context

### Shift in relative abundance with age

Skin microbiome composition changes substantially with aging. The dominant pattern relevant to SE is:

- **Cutibacterium acnes declines** with age as sebum production falls, opening niche space in sebaceous follicles.
- **SE relative abundance increases** as a compensatory surface colonizer — documented in cheek skin of n=48 healthy Chinese males aged 0–25: *S. epidermidis* PM221 increased from 0.95% (0–3 yr) → 2.06% (7–10 yr) → 16.98% (13–18 yr) → 20.40% (20–25 yr); *C. acnes* showed a similar developmental increase [^hu2023]. This is developmental rather than post-peak-aging data (ages 20–25 only); adult-aging trajectory beyond 25 is not addressed by this study.
- In the broader aging context (adults through elderly), Howard et al. 2022 (JID, n=158 Caucasian females aged 20–74) found that only *Lactobacillus* and *Cutibacterium* showed significant pan-site decreases with age; other changes were site-specific [^howard2022]. SE-specific trends in this cohort were not the primary focus.
- Swaney et al. 2025 (Frontiers in Aging, UK cohort, n=59) found *C. acnes* and *S. hominis* as primary age-differentiating taxa on the arm; SE was not differentially abundant as a primary finding. The study documents loss of microbiome network robustness with aging — fewer inter-taxa associations in old versus young adults on both face and arm [^swaney2025].

**Overall picture:** SE does not decline uniformly with age in the same way C. acnes does; it may expand to fill sebaceous-niche vacancies. However, **strain diversity** may narrow and the **functional capacity** of the SE community (bacteriocin diversity, ceramide-generating capacity) may be reduced in aged skin even if raw abundance is maintained. #gap/needs-replication — strain-level diversity aging studies specifically for SE are lacking; this claim is inferential from general microbiome-diversity-with-aging data.

### Impaired immune homeostasis in aged skin

The Naik 2015 mechanism — SE colonization → IL-17A+ CD8+ T cells → enhanced barrier immunity — depends on functional skin-resident dendritic cells and a competent naïve T-cell pool. Both are impaired in aging:

- [[langerhans-cells]] and dermal DCs show functional decline with age (see [[langerhans-cells]] page).
- Naïve CD8+ T cell pool contracts with age ([[immunosenescence]]).
- Result: the same SE colonization signal may be less effective at calibrating barrier immunity in elderly skin, leaving aged skin more vulnerable to pathogenic invasion despite adequate SE colonization density. #gap/needs-replication — direct measurement of the SE commensal T-cell response in aged vs young human skin has not been published as of this writing.

### Nosocomial infection risk in elderly

SE commensal strains are benign; **ica-positive nosocomial SE strains** cause serious infections in immunocompromised and post-surgical patients. Elderly patients are disproportionately represented in this risk group due to:

- Higher rates of prosthetic joint replacement (hip, knee) — SE is the leading cause of prosthetic joint infection.
- Higher rates of central venous catheter placement — SE is among the most common causes of catheter-associated bloodstream infection.
- **Immunosenescence** — impaired neutrophil phagocytic function and reduced innate immune clearance of biofilm-embedded SE in the elderly.
- Skin barrier breakdown with aging facilitates SE translocation from skin surface to catheter entry sites.

This represents an **adverse interaction between commensal SE ecology and aging-impaired host defense** — the organism is benign in healthy adult skin but becomes clinically dangerous in the aged surgical patient [^nguyen2017].

## Therapeutic context

### Topical probiotic / live biotherapeutic potential

Restoration of commensal SE colonization (or enhancement of specific SE metabolic functions) is an active investigational area:

- **Collagen induction:** SE metabolite butyric acid (produced via fermentation of cetearyl isononanoate) activates FFAR2 → p-ERK1/2 → collagen type I synthesis in **mouse 3T3 fibroblast cells** and mouse skin topical model — a potential anti-aging skin intervention [^negari2021]. This is mouse in vitro and in vivo data only; not yet demonstrated in human dermal fibroblasts. #gap/needs-human-replication
- **SE probiotic cosmetics:** Topical SE application (AoBiome, marketed as "Mother Dirt" ammonia-oxidizing bacteria — though this product uses *Nitrosomonas eutropha* rather than SE specifically) represents the broader strategy of commensal microbiome restoration for skin health. Direct SE topical products are investigational.
- **Nasal SE colonization to suppress S. aureus:** Natural nasal SE strains producing inhibitory compounds could potentially be administered nasally to reduce *S. aureus* nasal carriage — relevant to surgical infection prophylaxis in the elderly. #gap/needs-replication — no phase 2 trial exists for this approach as of 2026.

### Distinction from S. aureus decolonization

Standard pre-surgical *S. aureus* decolonization protocols (mupirocin nasal ointment; chlorhexidine body washes) **non-selectively reduce SE** as well, potentially harming the commensal microbiome and removing bacteriocin-producing strains. This is a recognized tension in infection prevention — decolonization protocols optimize for immediate surgical-field sterility without considering long-term microbiome consequences. The selective alternatives (SE probiotic restoration post-decolonization) are not yet in clinical practice.

## Limitations and gaps

- #gap/needs-replication — Ceramide-generating mechanism (Zheng 2022) demonstrated in mice; no human biopsy confirmation that SE sphingomyelinase contributes meaningfully to ceramide pool in vivo.
- #gap/needs-replication — T-cell calibration mechanism (Naik 2015) demonstrated in mice; analogous SE-specific T cell response in aged human skin not yet quantified.
- #gap/needs-replication — Strain-level SE diversity changes with aging (loss of bacteriocin-producing strains) are hypothesized but not directly measured in elderly cohorts.
- #gap/needs-human-replication — Butyric acid / collagen induction (Negari 2021) is in vitro; no RCT in human skin.
- #gap/long-term-unknown — No longitudinal human study tracking SE strain composition and functional capacity from young adulthood through advanced age.
- #gap/dose-response-unclear — If SE probiotic restoration is therapeutic, optimal delivery, dose, and strain selection are entirely undefined for human use.
- **Wiki coverage gap** — `[[skin-microbiome-aging-shifts]]` and `[[cutibacterium-acnes]]` are R44 sister pages referenced here but not yet seeded. `[[ll-37]]` is referenced but no protein page exists. `[[malassezia]]` is referenced but not yet seeded. `[[tlr2]]` referenced but no protein page.

## See also

- [[skin-aging]] — age-related changes to skin biology; SE contributes to skin barrier homeostasis
- [[dysbiosis]] — hallmark of aging capturing age-related microbiome shifts; SE functional decline fits within this frame
- [[chronic-inflammation]] — downstream of impaired SE-mediated immune homeostasis and pathogen exclusion
- [[immunosenescence]] — impairs the Naik 2015 SE-T-cell calibration mechanism in aged skin
- [[keratinocytes]] — SE stimulates defensin expression (TLR2 axis) in keratinocytes
- [[langerhans-cells]] — skin-resident DC subset mediating commensal-T cell response
- [[skin-microbiome-aging-shifts]] — R44 sister page (stub); contextualizes SE within the broader skin-microbiome aging landscape
- [[cutibacterium-acnes]] — R44 sister page (stub); the follicular counterpart to SE's surface niche
- [[malassezia]] — skin fungal commensal (stub); interacts with SE ecology
- [[ll-37]] — stub; host AMP that synergizes with SE-derived PSMs for pathogen exclusion
- [[akkermansia-muciniphila]] — gut-commensal analog; illustrates the probiotic-microbe-aging paradigm

## Footnotes

[^nguyen2017]: [[studies/nguyen-2017-se-colonization-infections]] · doi:10.3389/fcimb.2017.00090 · review · model: human + in-vitro + mouse · Nguyen TH, Park MD, Otto M · Front Cell Infect Microbiol 2017;7:90 · PDF locally available. Comprehensive review of SE commensal and pathogenic biology, covering ica operon, PSMs, biofilm infections, immune response.

[^cogen2010]: [[studies/cogen-2010-se-psm-selective-antimicrobial]] · doi:10.1038/jid.2009.243 · in-vitro + in-vivo · model: cell-free membrane-disruption assays + mouse skin explants + mouse in vivo GAS/SE challenge · Cogen AL, Yamasaki K, Sanchez KM et al. (Gallo RL) · J Invest Dermatol 2010;130:192–200 (published online Aug 2009) · PDF locally available. SE PSMγ and PSMδ exhibit selective antimicrobial activity: MBC >64 µM against SE; 4–16 µM against S. aureus/GAS; synergize with LL-37 to inhibit GAS/S. aureus at sub-MBC concentrations; PSMs reduced GAS survival but not SE on mouse skin explants.

[^lai2010]: [[studies/lai-2010-se-tlr2-antimicrobial-defense]] · doi:10.1038/jid.2010.123 · in-vitro + in-vivo · model: undifferentiated human keratinocytes + Tlr2-deficient mouse in-vivo GAS challenge · Lai Y, Cogen AL, Radek KA, Park HJ, Macleod DT, Leichtle A, Ryan AF, Di Nardo A, Gallo RL · J Invest Dermatol 2010;130(9):2211–21 (PMID 20463690; PMC2922455) · PDF failed download (not_oa); verified via PubMed abstract. SE sterile nontoxic small molecule (<10 kDa) from conditioned medium (SECM) engages TLR2 on keratinocytes to induce hBD2 and hBD3; TLR2-neutralizing antibody blocks effect; Tlr2-deficient mice lack induction of mBD4; SECM admin decreases susceptibility to GAS infection in vivo.

[^naik2015]: [[studies/naik-2015-se-commensal-skin-immunity]] · doi:10.1038/nature14052 · in-vivo · model: mouse (germ-free colonization with defined commensals; ~5 ml of 10⁷–10⁹ CFU/ml applied across entire mouse skin surface, 4 applications) · Naik S, Bouladoux N, Linehan JL et al. (Belkaid Y) · Nature 2015;520(7545):104–8 (PMID 25539086) · PDF not_oa; verified via PubMed efetch abstract. SE colonization induces IL-17A+ CD8+ T cells that home to the epidermis via skin-resident DC coordination; enhances innate barrier immunity and limits pathogen invasion without systemic inflammation.

[^zheng2022]: [[studies/zheng-2022-se-ceramides-skin-barrier]] · doi:10.1016/j.chom.2022.01.004 · in-vivo + in-vitro · model: mouse skin (compromised-barrier topical colonization model; hairless mice) + human keratinocyte cultures + human skin microbiome expression data · Zheng Y, Hunt RL, Villaruz AE, Fisher EL, Liu R, Li Q, Cheung GYC, Li M, Otto M · Cell Host Microbe 2022 Mar 9;30(3):301-313.e9 · PDF locally available. SE-specific neutral sphingomyelinase Sph (gene *sph*; present in 47/48 (98%) of SE skin isolates) cleaves sphingomyelin to ceramide + phosphocholine; significantly increases total stratum corneum ceramide levels and reduces TEWL in mice; effect abolished in isogenic Δ*sph* mutants; *sph* expressed in human skin microbiome in vivo.

[^keshari2019]: [[studies/keshari-2019-se-butyrate-il6-uv]] · doi:10.3390/ijms20184477 · in-vitro + in-vivo · model: human keratinocyte line (CCD 1106 KERTr) + ICR mouse dorsal skin (12 doses UVB 195 mJ/cm² over 4 weeks; 5 mice/group; 3 experiments) · Keshari S, Balasubramaniam A, Myagmardoloonjin B, Herr DR, Negari IP, Huang C-M · Int J Mol Sci 2019;20(18):4477 · PDF locally available. SE (ATCC 12228) glycerol (2%) fermentation generates ~6 mM butyric acid; topical butyric acid (4 mM) + SE+glycerol combination suppresses UVB-induced IL-6 and epidermal hyperplasia; FFAR2 siRNA knockdown and GLPG0974 antagonist block the anti-inflammatory effect; FFAR2/GPR43 is the mediating receptor.

[^negari2021]: [[studies/negari-2021-se-collagen-ffar2-erk]] · doi:10.3390/ijms22031414 · in-vitro + in-vivo · model: mouse 3T3 fibroblast cells + mouse dorsal skin topical application · Negari IP, Keshari S, Huang C-M · Int J Mol Sci 2021 · OA. SE fermentation of cetearyl isononanoate (CIN) produces butyric acid (BA); BA via FFaR2/p-ERK1/2 signaling induces collagen type I synthesis in mouse 3T3 fibroblasts and increases p-ERK/collagen expression in mouse skin.

[^howard2022]: [[studies/howard-2022-skin-microbiome-aging-jid]] · doi:10.1016/j.jid.2021.11.029 · observational · n=158 Caucasian females across 6 age groups (20–24, 30–34, 40–44, 50–54, 60–64, 70–74 yr) · model: human skin (forearm, buttock, face; 16S rRNA + host skin factor measurements) · Howard B, Bascom CC, Hu P et al. (Isfort RJ) · J Invest Dermatol 2022 · PDF not_oa; verified via PubMed abstract (PMID 34890626). Skin bacterial diversity increases with age; only Lactobacillus and Cutibacterium show pan-site significant decline; SE changes are site-specific and not the primary finding.

[^hu2023]: [[studies/hu-2023-skin-microbiome-male-maturation]] · doi:10.1111/srt.13432 · observational · n=48 healthy Chinese males (0–3 yr: 14; 7–10 yr: 7; 13–18 yr: 7; 20–25 yr: 20) · model: human cheek skin, males aged 0–25 yr, 16S V1-V2 rRNA pyrosequencing · Hu X, Tang M, Dong K, Zhou J, Wang D, Song L · Skin Res Technol 2023 · OA. Staphylococcus (genus) increases with age (3.9% → 4.2% → 20.3% → 22.3%); S. epidermidis PM221 increases (0.95% → 2.06% → 16.98% → 20.40%); C. acnes increases; Streptococcus and Rothia decline.

[^swaney2025]: [[studies/swaney-2025-skin-microbiome-aging-uk]] · doi:10.3389/fragi.2025.1644012 · observational · n=59 (30 young: mean 26.7±4.45 yr; 29 old: mean 72.3±4.04 yr; ~equal sex split) · model: UK cohort (Birmingham); cheek + antecubital fossa (arm); 16S V1-V3 rRNA sequencing · Swaney MH, Newman DJ, Mao J, Hilton AC, Worthington T, Li M · Front Aging 2025 · OA. Increased alpha diversity on face in old age group; C. acnes and C. kroppenstedtii decrease with age; S. hominis trends toward increase; network robustness declines with age; SE not differentially abundant as a primary finding.
