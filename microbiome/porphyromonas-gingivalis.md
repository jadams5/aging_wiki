---
type: microbe
aliases: [P. gingivalis, Pg, Bacteroides gingivalis]
ncbi-taxonomy: 837
phylum: Bacteroidota
family: Porphyromonadaceae
gram-stain: negative
oxygen-tolerance: anaerobic
host: "Homo sapiens (oral commensal-turned-pathobiont; subgingival crevice)"
discovered: 1980 (Coykendall, as Bacteroides gingivalis; reclassified 1988 by Shah & Collins)
genome-size-mb: 2.35
key-strains: [ATCC 33277 (type strain), W83]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
literature-checked-through: 2026-06-12
verified: true
verified-date: 2026-06-12
verified-by: claude
verified-scope: "Dominy 2019 (doi:10.1126/sciadv.aau3333) verified against PMC6357742 full text — corrections applied (see verified-scope detail). GAIN trial outcome verified against ClinicalTrials.gov NCT03823404. NCBI taxonomy and genome assembly verified against NCBI Datasets API. Hajishengallis 2012, Kozarov 2005, Zenobia 2015, Hajishengallis 2020, Li 2026 OMV review, Zhang 2025 scoping review, and Albornoz 2026 RCT remain #gap/no-fulltext-access (closed-access); claims derived from training knowledge and abstract/citation context."
---

# *Porphyromonas gingivalis*

*Porphyromonas gingivalis* (Pg) is a gram-negative, obligately anaerobic, black-pigmented oral bacterium and the **keystone pathogen** of chronic periodontitis. Despite residing at relatively low abundance in the subgingival crevice, Pg exerts a disproportionate, dysbiotic remodeling of the entire resident oral microbial community — a capacity rooted in its complement-subverting, gingipain-armed virulence system. The organism has commanding relevance to aging biology: gingipain proteases and Pg-derived DNA have been detected in Alzheimer's disease brain tissue, circulating gingipain IgG titers correlate with cognitive decline, and live Pg has been isolated from human atherosclerotic plaques. This page resolves the dangling *P. gingivalis* reference in [[alzheimers-disease]] and anchors coverage of the oral–systemic disease axis in the wiki.

## Identity

| Field | Value |
|---|---|
| Species | *Porphyromonas gingivalis* Shah & Collins 1988 |
| NCBI Taxonomy ID | 837 (verified from NCBI eutils taxonomy fetch) |
| Original classification | *Bacteroides gingivalis* Coykendall et al. 1980 |
| Phylum | Bacteroidota (= Bacteroidetes) |
| Class | Bacteroidia |
| Order | Bacteroidales |
| Family | Porphyromonadaceae |
| Gram stain | Negative |
| Morphology | Short rods, non-motile, non-spore-forming; black-pigmented colonies (heme/protoporphyrin IX accumulation) |
| Oxygen tolerance | Strict anaerobe |
| Type strain | ATCC 33277 (GCF_000010505.1); W83 is a separate well-studied strain (GCF_000007585.1, ~2.34 Mb) |
| Genome size | ~2.35 Mb (ATCC 33277 / GCF_000010505.1: 2,354,886 bp; 1,943 protein-coding genes, 2,097 total) |
| G+C content | ~48% |

The black pigmentation is a phenotypic marker frequently used to provisionally identify Pg in mixed oral culture. It arises from accumulation of hemin and iron-containing porphyrins, which also serve as nutritional requirements — Pg is dependent on exogenous hemin for growth and uses gingipain-mediated erythrocyte lysis to acquire it from gingival crevicular blood.

## Niche: subgingival crevice

Pg colonizes the **subgingival crevice** — the space between the tooth surface and the surrounding [[gingiva]]. This anaerobic microenvironment, bathed in gingival crevicular fluid (a serum transudate rich in proteins, hemin, and iron), is uniquely suited to Pg's strict anaerobiosis and nutritional preferences.

- **Nutritional niche:** proteolytic amino-acid catabolism (asaccharolytic; cannot ferment sugars). Gingipains cleave host proteins to generate peptides and free amino acids as carbon and energy sources.
- **Hemin dependence:** exogenous hemin required for growth. Pg acquires it via gingipain-mediated hemolysis and heme extraction from red blood cells.
- **Biofilm architecture:** Pg arrives late in subgingival biofilm succession (late colonizer) and adheres to earlier colonizers — particularly *Fusobacterium nucleatum* — via co-aggregation. Once established, Pg reprograms the community toward pathogenicity even though it may represent <1% of the community biomass [^hajishengallis2012].

## Gingipains: central virulence architecture

Gingipains are **Arg/Lys-specific cysteine proteases** that are the primary virulence determinants of *P. gingivalis*. They are large multidomain enzymes secreted to the outer membrane surface and shed in outer membrane vesicles (OMVs), dramatically extending their zone of action beyond the bacterial cell.

| Enzyme | Gene | Specificity | Key substrates |
|---|---|---|---|
| RgpA | *rgpA* | Arg-X (Arg-gingipain A) | Host immune receptors, fibrinogen, complement C5, cytokine precursors, defensins |
| RgpB | *rgpB* | Arg-X (Arg-gingipain B) | Complement C3/C5, immune receptor ectodomains, PAR-1/PAR-2 |
| Kgp | *kgp* | Lys-X (Lys-gingipain) | Fibrinogen, fibronectin, collagen, CXCL8, hemoglobin (heme acquisition) |

Together, RgpA, RgpB, and Kgp constitute a broad-spectrum proteolytic system that degrades or inactivates host innate immune components including complement proteins C3 and C5a, cytokines, antimicrobial peptides (defensins, LL-37), and toll-like receptor (TLR) co-receptors [^zenobia2015]. Gingipain-null mutants (triple *rgpA/rgpB/kgp* deletion) are markedly attenuated in virulence in animal models, establishing gingipains as the central pathogenic apparatus. #gap/needs-human-replication — gingipain knockout attenuation data is primarily from mouse models; human studies rely on correlative antibody titer and molecular-detection evidence.

### Outer membrane vesicles (OMVs)

Pg sheds gingipain-loaded outer membrane vesicles (OMVs) of 50–250 nm diameter. These OMVs carry intact gingipains, LPS, and fimbriae, enabling distant bystander tissue destruction and systemic dissemination of Pg antigenic material without requiring the bacteria to translocate physically [^li2026omv]. OMVs have been detected in gingival crevicular fluid, plasma, and — critically — in brain tissue from Alzheimer's disease patients [^dominy2019].

## Keystone-pathogen / inflammophilic-dysbiosis model

The **keystone-pathogen hypothesis** (Hajishengallis, Darveau & Curtis 2012) holds that Pg functions as an ecological keystone: despite its low abundance, it **disproportionately remodels the subgingival microbial community** from a health-compatible configuration to a dysbiotic, periodontitis-driving one [^hajishengallis2012]. The central mechanism is **complement and TLR subversion** enabling Pg to survive in the subgingival crevice while simultaneously creating a nutrient-rich (inflammatory exudate) environment that fuels the broader microbiome's expansion.

Key steps in the model:

1. **Complement C5a receptor (C5aR) exploitation.** Pg cleaves host complement C5 via its gingipains to generate C5a locally. C5a engages C5aR on macrophages/neutrophils, activating Gαi-dependent cAMP signaling that **inhibits TLR-mediated IL-12 production** without eliminating phagocytic recruitment. The net effect is an inflammatory infiltrate that destroys periodontal tissue (providing Pg with nutrients) but fails to kill Pg. This C5aR–TLR crosstalk is a form of "inside-out" immune subversion. #gap/needs-replication — the molecular crosstalk mechanism is characterized primarily in mouse macrophage and neutrophil models [^hajishengallis2020].

2. **TLR2 engagement — pro-survival signaling.** Pg's atypical LPS (lipid A structure) and fimbriae selectively engage TLR2 (not TLR4) on monocytes and macrophages, activating PI3K/Akt-dependent pro-survival pathways in host leukocytes. This paradoxically protects *intracellular* Pg from oxidative killing, as the bacteria can invade and reside within monocytes/macrophages while suppressing phagolysosomal killing [^zenobia2015].

3. **Microbiome remodeling.** By creating a nutrient-rich inflammatory exudate and suppressing effective antimicrobial innate immunity, Pg selects for an expanded dysbiotic community (including *Treponema denticola*, *Tannerella forsythia*, and others in the "red complex") that amplifies periodontal destruction far beyond what Pg alone could achieve.

4. **Inflammophilic niche.** Pg thrives in low-grade inflammation — inflammation provides the hemin, iron, and peptide nutrients it requires. This creates a self-reinforcing dysbiotic cycle: Pg → more inflammation → more Pg growth → more community dysbiosis → more inflammation.

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | partial — C5aR/TLR crosstalk demonstrated in mouse models; human in vitro data exist for macrophage invasion; clinical correlates indirect |
| Phenotype conserved in humans? | yes — periodontitis in humans is strongly associated with Pg detection; loss of attachment, bone resorption reproduced clinically |
| Replicated in humans? | yes (epidemiological); partial (mechanistic) |

## Systemic aging relevance

### 1. Alzheimer's disease — gingipain brain detection

The most consequential aging-relevant finding for Pg comes from **Dominy et al. 2019** (Science Advances): gingipain immunoreactivity, Pg DNA, and Pg LPS were detected in postmortem brain tissue from Alzheimer's disease (AD) patients (n=53 AD brains; n=54 controls) [^dominy2019]. Specific findings:

- **RgpB gingipain** immunoreactivity detected in 96% of AD samples (51/53) examined, versus 39% of controls (18/46 evaluable); p<0.0001 (Mann-Whitney)
- **Kgp gingipain** load also significantly higher in AD vs controls; p<0.0001; levels correlated with tau and ubiquitin pathology (Spearman r=0.674, p<0.0001)
- **Pg DNA** (quantitative PCR) detected in CSF of 7/10 clinically diagnosed AD patients; also detected in a subset of postmortem AD brains
- **Amyloid-β₁₋₄₂ production** increased in BALB/c mice after oral Pg inoculation compared to mock-infected or COR119-treated controls — consistent with the amyloid hypothesis but not confirmatory of causation
- **Gingipain inhibition**: in an established Pg brain-infection mouse model (n=10/arm; BALB/c), COR271 (Kgp inhibitor) reduced Pg brain copy number by ~90%; COR271 + COR286 (Rgp inhibitor) combination showed significant neuroprotection (p<0.05; Fluoro-Jade C staining). All mouse experiments used BALB/c mice — no transgenic tau model was employed in this study.

**Causation caveat.** The Dominy 2019 study is **cross-sectional and observational** at the human level: it demonstrates *association* (Pg/gingipain in AD brains) and plausible mechanism (mouse model), but does NOT establish causation in humans. The key confounds are substantial:

- Reverse causation: neurodegeneration → periodontal neglect → more Pg infection, rather than Pg → AD
- AD brains have widespread alterations in blood-brain barrier permeability that could increase invasion by oral pathogens secondary to the disease process
- Multiple candidate pathogens have been found in AD brains (HSV-1, *Chlamydia pneumoniae*, CMV); none has achieved causal proof

#gap/contradictory-evidence — Subsequent studies have produced mixed results. A 2025 scoping review (Zhang et al., PMID 41170438) analyzed 52 studies and concluded that "PD increases the risk of AD and accelerates cognitive decline," but noted that further clinical research is needed [^zhang2025]. A 2026 quantitative analysis (PMID 42115784) attempted to model infectious burden in AD more broadly. The AD–Pg association remains scientifically plausible but contested; the causation claim has not been established by a prospective interventional study.

### 2. COR388 (atuzaginstat) GAIN trial — Phase 2/3, completed

The Dominy 2019 findings motivated development of **COR388 (atuzaginstat)**, a small-molecule irreversible gingipain inhibitor. The **GAIN trial** (NCT03823404) was a randomized, double-blind, placebo-controlled Phase 2/3 trial in mild-to-moderate AD [^sabbagh2022]:

- **Design:** 643 enrolled; three arms: COR388 80 mg BID (n=214), COR388 40 mg BID (n=212), placebo (n=217); 48-week treatment
- **Primary endpoints:** ADAS-Cog 11 and ADCS-ADL cognitive/functional scales
- **Status:** Completed (enrollment closed January 2022; results posted February 2023 on ClinicalTrials.gov NCT03823404); ~40% of participants discontinued before completion
- **Outcome:** The trial ran to completion; both primary endpoints showed a marginal statistical difference favouring the 80 mg arm (p<0.0455 by mixed-effects repeated-measures model), but **all groups — including placebo — showed cognitive and functional decline**, and effect sizes were clinically negligible. The trial did not demonstrate meaningful clinical benefit. Cortexyme dissolved following these results and COR388 development was discontinued.

#gap/contradictory-evidence — The GAIN trial result is a major evidence check on the AD-causation hypothesis. The lack of clinically meaningful benefit does not rule out a contributory role for Pg in AD (the trial could have enrolled too late in disease progression, been underpowered for the effect size, or targeted only one of multiple pathological contributors), but it substantially weakens the therapeutic translation case [^sabbagh2022]. Cortexyme dissolved following these results. The association between Pg and AD remains scientifically interesting and warrants further investigation, but the interventional evidence for causation is now negative.

### 3. Atherosclerosis — Pg in atherosclerotic plaques

**Kozarov et al. 2005** (Arteriosclerosis, Thrombosis, and Vascular Biology) first demonstrated that human atherosclerotic endarterectomy plaques contain **viable, invasive *Porphyromonas gingivalis*** — the bacteria were not merely detectable by PCR but could be cultured from plaque tissue, establishing the presence of living organisms [^kozarov2005]. This finding places Pg alongside [[atherosclerosis]] as a plausible contributor to the inflammatory milieu of plaque.

Proposed mechanisms linking Pg/periodontitis to cardiovascular disease:

- **LPS-driven endothelial activation:** Pg-derived LPS (unusual lipid A) engages TLR2 on vascular endothelium, activating NFκB — the same [[lps-tlr4-nfkb]] pathway central to atherosclerosis initiation. Note that Pg LPS preferentially engages TLR2 rather than TLR4, which has different downstream consequences from enteric LPS.
- **Gingipain-mediated fibrinogen cleavage:** gingipains cleave fibrinogen, activate platelet aggregation, and promote a pro-coagulant state that may contribute to thrombotic events.
- **Systemic inflammatory cytokine elevation:** periodontal treatment reduces serum CRP and IL-6 in moderate-to-severe periodontitis patients in some (but not all) RCTs — if confirmed, this supports the idea that oral inflammation contributes to systemic inflammatory burden. #gap/contradictory-evidence — multiple RCTs of periodontal treatment show heterogeneous effects on systemic inflammatory markers; a 2026 systematic review (PMID 41194065) found association between periodontitis and atrial fibrillation but causal direction remains uncertain.
- **Endothelial invasion:** Pg fimbriae mediate adhesion to and invasion of endothelial cells via α5β1-integrin. Intracellular Pg can evade immune killing via TLR2/PI3K-Akt signaling (same mechanism as monocyte invasion). The presence of viable Pg within plaque macrophages and smooth muscle cells creates a persistent local inflammatory niche.

| Dimension | Status |
|---|---|
| Pg present in human atherosclerotic plaques? | yes — viable bacteria cultured (Kozarov 2005) |
| Mechanism linking Pg to plaque progression | partial — LPS-TLR2 + fimbria-integrin characterized in vitro; in-vivo causation in humans not established |
| Periodontal treatment → cardiovascular benefit | contested — RCT results mixed; no definitive clinical trial |

## Periodontitis: the local disease context

Understanding Pg's systemic relevance requires appreciating its role in [[periodontitis]] — a highly prevalent chronic inflammatory disease of the tooth-supporting tissues (periodontal ligament, cementum, alveolar bone). Key epidemiological facts:

- Severe periodontitis affects ~11% of the global adult population (~743 million people), making it the sixth most prevalent disease worldwide
- Prevalence increases dramatically with age: mild-to-moderate periodontitis affects a majority of adults over 65
- Periodontitis is bidirectionally linked to type 2 diabetes, cardiovascular disease, adverse pregnancy outcomes, and rheumatoid arthritis
- Pg is consistently the most abundant and most clinically predictive pathogen in deep subgingival pockets (probing depth >4 mm)

Pg seroprevalence (IgG titers to Pg antigens) is detectable in ~50–60% of middle-aged adults with moderate periodontitis and correlates with disease severity. The [[oral-microbiome-aging-shifts]] page covers the broader age-associated transition in oral microbial ecology of which Pg expansion is a component.

## Aging-specific dynamics

Pg's relationship to aging is multifactorial:

1. **Age-related immune senescence.** Older adults have attenuated neutrophil and macrophage responses that may be less effective at containing Pg. Paradoxically, senescent immune cells may also respond in a dysregulated way that fuels Pg's inflammophilic strategy. #gap/no-mechanism
2. **Medication-related dry mouth (xerostomia).** Polypharmacy in older adults frequently includes drugs that reduce salivary flow. Saliva contains antimicrobial components (IgA, lysozyme, lactoferrin, defensins) that suppress Pg. Xerostomia → reduced antimicrobial protection → Pg expansion. #gap/needs-human-replication
3. **Cumulative bone loss.** Alveolar bone resorption is irreversible; age-cumulative bone loss expands the subgingival crevice niche available to Pg.
4. **Systemic inflammatory loading.** With age, Pg-driven periodontitis adds to the cumulative [[chronic-inflammation]] burden. In a feedforward loop, systemic inflammation may further impair periodontal immune defense.

No dedicated lifespan-extension study using anti-Pg intervention exists in model organisms as of this writing. #gap/long-term-unknown

## Treatment interventions

Standard periodontitis treatment — scaling and root planing (mechanical debridement of subgingival biofilm) with or without systemic antimicrobials — reduces but does not eliminate Pg. A 48-month RCT (PMID 41253131; Albornoz et al. 2026) found that Pg persisted in 70–80% of surgically treated periodontitis patients even after adjunctive azithromycin or metronidazole, with both arms showing similar long-term outcomes [^albornoz2026].

Emerging anti-Pg strategies include:
- **Gingipain inhibitors** (COR388/atuzaginstat — see GAIN trial above; now discontinued for AD)
- **Pg-targeting vaccines** (phase I/II; no approved vaccine as of 2026)
- **Oral probiotics** (e.g., *Lactobacillus reuteri* adjunct — RCT evidence limited; PMID 41662654)
- **Photodynamic therapy** — adjunctive use in subgingival decontamination (multiple small RCTs; no consensus on efficacy over conventional treatment)

## Gaps

- #gap/contradictory-evidence — The AD causation claim is strongly contested; GAIN trial (Phase 2/3; n=643; completed) showed no clinically meaningful benefit from gingipain inhibition — all groups showed cognitive decline, with marginal statistical differences but negligible effect sizes — representing the primary interventional counter-evidence. The cross-sectional nature of Dominy 2019 (brain detection study) cannot establish causation, and reverse causation (neurodegeneration → oral neglect → Pg invasion) is a plausible confounder.
- #gap/needs-human-replication — C5aR/TLR crosstalk immune subversion characterized primarily in mouse macrophage models; direct mechanistic confirmation in human periodontitis tissue needed.
- #gap/needs-replication — The cardiovascular mechanistic link (Pg as direct plaque pathogen vs. indirect via systemic inflammation) has not been resolved by a prospective RCT of periodontitis treatment on hard cardiovascular endpoints.
- #gap/long-term-unknown — No model-organism lifespan study using anti-Pg intervention published; aging-specific Pg mechanistic studies are limited.
- #gap/no-mechanism — Precise molecular pathway by which Pg antigens or OMVs reach the brain (olfactory nerve vs. blood-brain barrier vs. trigeminal nerve vs. secondary to barrier breakdown) is not established.
- #gap/dose-response-unclear — The Pg-specific oral burden threshold above which systemic effects become clinically significant is unknown.
- **Wiki stubs needed:** [[oral-microbiome-aging-shifts]] (exists: `microbiome/gut-microbiome-aging-shifts.md` — but oral-specific version is a stub), [[periodontitis]], [[gingiva]], [[lps-tlr4-nfkb]].

## See also

- [[dysbiosis]] — hallmark of aging to which Pg is centrally relevant
- [[chronic-inflammation]] — systemic inflammatory consequences of Pg-driven periodontitis
- [[alzheimers-disease]] — gingipain brain detection (Dominy 2019); Pg is one of several candidate pathogens
- [[atherosclerosis]] — Pg isolated from human atherosclerotic plaques (Kozarov 2005)
- [[lps-tlr4-nfkb]] — pathway engaged by Pg-derived LPS in vascular endothelium
- [[oral-microbiome-aging-shifts]] — stub; broader oral microbiome aging context
- [[periodontitis]] — stub; the local disease Pg drives
- [[gingiva]] — stub; anatomical niche
- [[akkermansia-muciniphila]] — sister microbe page; contrast of gut commensal vs. oral pathobiont strategies

## Footnotes

[^hajishengallis2012]: [[studies/hajishengallis-2012-keystone-pathogen]] · doi:10.1038/nrmicro2873 · review · Hajishengallis G, Darveau RP, Curtis MA · Nat Rev Microbiol 2012;10(10):717–725 · 1,494 citations (Crossref) · foundational paper establishing the keystone-pathogen hypothesis for Pg in periodontitis #gap/no-fulltext-access (closed access; claims on this page derived from training knowledge and review content; verify against full PDF)

[^dominy2019]: [[studies/dominy-2019-pgingivalis-alzheimers-brains]] · doi:10.1126/sciadv.aau3333 · PMC6357742 · observational + in-vivo + in-vitro · n=53 AD brains / n=54 controls (postmortem tissue microarrays); BALB/c mouse oral-inoculation model (n=10/arm); neuronal cell culture · Dominy SS, Lynch C, Ermini F, Benedyk M, Marczyk A et al. · Sci Adv 2019;5(1):eaau3333 · open-access · evidence for gingipain (RgpB 96% of AD samples, p<0.0001) and Pg DNA in AD brains; COR271+COR286 neuroprotection in mouse model (p<0.05) · **Causation not established in humans; cross-sectional design; GAIN trial (Phase 2/3; n=643) subsequently showed no meaningful clinical benefit** #gap/contradictory-evidence

[^sabbagh2022]: [[studies/sabbagh-2022-atuzaginstat-review]] · doi:10.1080/13543784.2022.2117605 · review · Sabbagh MN, Decourt B · Expert Opin Investig Drugs 2022;31(10):987–993 · COR388 (atuzaginstat) investigational gingipain inhibitor review; GAIN trial (NCT03823404) Phase 2/3 n=643; completed Jan 2022, results posted Feb 2023 ClinicalTrials.gov; marginal statistical differences (p<0.0455) with negligible clinical effect size; Cortexyme dissolved and COR388 discontinued #gap/no-fulltext-access (closed access)

[^kozarov2005]: [[studies/kozarov-2005-pgingivalis-atherosclerotic-plaque]] · doi:10.1161/01.atv.0000155018.67835.1a · in-vivo (human tissue) · observational · model: human atherosclerotic endarterectomy plaques vs non-atherosclerotic controls · Kozarov EV, Dorn BR, Shelburne CE, Dunn WA Jr, Progulske-Fox A · Arterioscler Thromb Vasc Biol 2005;25(3) · viable invasive Pg cultured from human atherosclerotic plaques · 384 citations (Crossref) #gap/no-fulltext-access (closed access; claim on viable-Pg-in-plaque derived from abstract/citation context)

[^zenobia2015]: [[studies/zenobia-2015-pgingivalis-virulence-leukocytes]] · doi:10.1080/21505594.2014.999567 · review · Zenobia C, Hajishengallis G · Virulence 2015;6(3) · review of Pg virulence factors in leukocyte subversion and microbial dysbiosis · 119 citations (Crossref) #gap/no-fulltext-access

[^hajishengallis2020]: [[studies/hajishengallis-2020-pgingivalis-immune-subversion]] · doi:10.1007/s40496-020-00249-3 · review · Hajishengallis G, Diaz PI · Curr Oral Health Rep 2020 · 88 citations (Crossref) · Pg immune subversion activities and periodontal dysbiosis mechanisms #gap/no-fulltext-access

[^li2026omv]: [[studies/li-2026-pgingivalis-omv-review]] · doi:10.1016/j.identj.2026.109548 · systematic review · Li Z, Luo C, Wen P, Zou T, Jin Z, Jiang S · Int Dent J 2026 · PMID 41980468 · systematic review of Pg OMVs from pathogenesis to therapeutic implications #gap/no-fulltext-access

[^zhang2025]: [[studies/zhang-2025-periodontitis-alzheimers-scoping-review]] · doi:10.3389/fnagi.2025.1588008 · scoping review · Zhang X, Huang X, Chang M · Front Aging Neurosci 2025 · PMID 41170438 · 52 studies analyzed; PD increases AD risk and accelerates cognitive decline; periodontal interventions may help; further clinical research needed

[^albornoz2026]: [[studies/albornoz-2026-periodontal-surgery-pgingivalis-rct]] · doi:10.1111/jcpe.70060 · rct · n=43 · 48-month follow-up · periodontal surgery + adjunctive azithromycin or metronidazole · Albornoz AC, Montero E, Pickert FN, Sanz M, Herrera D · J Clin Periodontol 2026 · PMID 41253131 · Pg persisted in 70–80% of surgically treated patients at 48 months; no significant difference between antibiotic arms #gap/no-fulltext-access
