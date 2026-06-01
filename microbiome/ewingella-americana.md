---
type: microbe
aliases: [Ewingella, E. americana, CDC Enteric Group 40]
kingdom: bacteria
ncbi-taxonomy: 41202
phylum: Pseudomonadota
family: Yersiniaceae
gram-stain: negative
oxygen-tolerance: facultative
host: "Multi-host (clinical isolates: Homo sapiens; environmental: water, soil, mushrooms; commensal: Dryophytes japonicus gut per Iwata 2025)"
discovered: 1983
genome-size-mb: 4.87
key-strains: [ATCC 33852 (type strain, = DSM 4580 = CCUG 14506 = LMG 7869 = NCTC 12157 = JCM 5911 = CIP 81.94)]
hallmarks: ["[[dysbiosis]]"]
literature-checked-through: 2026-05-21
verified: true
verified-date: 2026-05-21
verified-by: claude
verified-scope: "Iwata 2025 primary-source PDF fully verified (group sizes, dose, CR rates, immunological memory, intratumoral expansion timeframe, virulence-factor categories, immune cell quantification). Ioannou 2024 PDF verified (n=19, median age 55, sex distribution, infection sites, mortality, antibiotic susceptibility). NCBI Taxonomy 41202 and genome GCF_000735345.1 confirmed via live API. LPSN type-strain equivalents verified. Grimont 1983 remains closed-access (#gap/no-fulltext-access) — taxonomic claims cross-checked via LPSN + NCBI Taxonomy as canonical surrogates."
---

# *Ewingella americana*

*Ewingella americana* is a gram-negative, facultatively anaerobic, rod-shaped member of the order Enterobacterales (family Yersiniaceae), first isolated from clinical specimens in 1983 and formerly placed in Enterobacteriaceae before reclassification. Until recently it was a microbiological curiosity — an occasional opportunistic pathogen of immunocompromised patients, most often hospital-acquired, and a pathogen of cultivated mushrooms and some marine animals. It gained aging and oncology relevance in 2025 when Iwata et al. demonstrated that an *E. americana* strain isolated from the gut microbiota of the Japanese tree frog *Dryophytes japonicus* achieves **100% complete response** in a murine syngeneic colorectal carcinoma model after a single intravenous dose — outperforming anti-PD-L1 antibody (20% CR) and liposomal doxorubicin (0% CR), with immunological memory persisting ≥60 days [^iwata2025]. This page anchors the species; the primary-source claims are detailed in [[studies/iwata-2025-ewingella-americana-antitumor]].

## Taxonomy and identification

| Field | Value |
|---|---|
| Species | *Ewingella americana* Grimont et al. 1983 |
| NCBI Taxonomy ID | 41202 |
| Domain | Bacteria |
| Phylum | Pseudomonadota (formerly Proteobacteria) |
| Class | Gammaproteobacteria |
| Order | Enterobacterales |
| Family | Yersiniaceae (current) |
| Gram stain | Negative |
| Morphology | Rod-shaped (rods/coccobacilli); motile via peritrichous flagella |
| Oxygen tolerance | Facultative anaerobe |
| Type strain | ATCC 33852 (= DSM 4580 = CCUG 14506 = LMG 7869 = NCTC 12157 = JCM 5911 = CIP 81.94) |
| Genome size | ~4.87 Mb (GCF_000735345.1, contig-level assembly) |
| GC content | ~54% |
| Protein-coding genes | 4,386 predicted (GCF_000735345.1) |
| Nomenclatural validation | IJSEM Validation List 13, 1984 |
| Biosafety level | Risk Group 2 (Canada, Switzerland, Germany) |

**Family reclassification note.** *E. americana* was originally placed in Enterobacteriaceae [^grimont1983] and this placement persists in some older references. Adeolu et al. 2016 (*Int J Syst Evol Microbiol*) reorganized Enterobacterales using multilocus phylogenomics and established Yersiniaceae as a distinct family; NCBI Taxonomy now places *Ewingella* within Yersiniaceae. LPSN (List of Prokaryotic names with Standing in Nomenclature) also reflects this assignment. Both family names appear in the clinical literature; Yersiniaceae is the current valid placement. #gap/needs-replication — the 2016 reclassification is not universally adopted in clinical microbiology; some contemporary clinical case reports still cite Enterobacteriaceae affiliation.

The genus *Ewingella* is **monotypic** — *E. americana* is its only recognized species. The genus name honors William H. Ewing, an American bacteriologist at the CDC who contributed extensively to Enterobacteriaceae taxonomy [^grimont1983]. The species was formerly designated "CDC Enteric Group 40" before Grimont and colleagues formally named the genus and species [^grimont1983].

**Identification.** Routine clinical microbiology identifies *E. americana* by biochemical profiling (API 20E or equivalent) and, increasingly, by MALDI-TOF mass spectrometry or 16S rRNA gene sequencing. Misidentification as other Enterobacterales members is reported; mNGS has been used to confirm cases where conventional culture yielded ambiguous results [^ioannou2024].

## Discovery and clinical relevance

Grimont et al. 1983 described the genus and species from clinical specimens collected primarily from hospital environments — blood, wounds, and respiratory secretions — in the United States [^grimont1983]. The original isolates were obtained from humans, fitting the historical perception of *E. americana* as a rarely-pathogenic commensal/contaminant of healthcare settings. Formal nomenclatural validation occurred in 1984 via IJSEM Validation List 13.

### Documented human infections

Ioannou et al. 2024 (*Antibiotics*) conducted the most comprehensive review of human *E. americana* infections, analyzing 19 cases across 16 studies [^ioannou2024]. Key patterns:

- **Median patient age:** 55 years; infections not restricted to elderly but consistently associated with immunocompromise
- **Infection sites:** Bloodstream infections (bacteremia/sepsis) most common; also respiratory tract, peritoneal cavity (peritoneal dialysis-associated peritonitis), urinary tract, conjunctiva, and musculoskeletal (vertebral lesion confirmed by mNGS in an ankylosing spondylitis patient [^pmid39033154])
- **Predisposing conditions:** Malignancy, chemotherapy, dialysis, neonatal prematurity, structural cardiac anomalies, chronic inflammatory disease
- **Contamination source:** Hospital water systems, sinks, blood product contamination (platelet transfusions, red blood cell transfusions). A 2025 case report documented sepsis developing during red blood cell transfusion in a chemotherapy patient [^pmid40636648]
- **Antibiotic susceptibility:** Generally susceptible to fluoroquinolones, aminoglycosides, third-generation cephalosporins, and trimethoprim-sulfamethoxazole. One isolate from carbapenem-resistant swine screening showed extended-spectrum resistance [^pmid35740183]. Overall mortality low — single fatal case (bacteremia) in the Ioannou 2024 series
- **Mortality:** Low; outcome generally favorable with appropriate antimicrobial therapy [^ioannou2024]

### Non-human reservoir contexts

Beyond human clinical isolation, *E. americana* has a notably broad environmental and host range:

- **Cultivated mushrooms:** A clinically distinct context — *E. americana* causes brown blotch and discoloration lesions on button mushrooms (*Agaricus bisporus*) and other edible species. Strains isolated from Iranian button mushroom farms in 2023 showed variable aggressiveness [^pmid36131391]. The bacterium produces volatile organic compounds including 2,4-di-tert-butylphenol that are toxic to fungal hosts [^pmid41003513]
- **Marine animals:** Isolated from a sub-adult loggerhead sea turtle (*Caretta caretta*) with osteolytic lesions and bacteremia; successfully treated with enrofloxacin [^pmid38731321]
- **Plant-associated:** An Antarctic isolate (L47) produces L-arabinose isomerase and β-galactosidases [^pmid41596769]; insect gut isolates have been shown to promote tomato plant growth [^pmid36362334]
- **Amphibian gut (Iwata 2025 context):** Isolated from the gut microbiota of *Dryophytes japonicus* (Japanese tree frog) — the specific context that yielded the antitumor strain [^iwata2025]

This ecological breadth suggests *E. americana* is a generalist opportunist with metabolic versatility, rather than a host-specialist pathogen.

## Genomic and virulence features

The reference genome GCF_000735345.1 (ATCC 33852 type strain) is a contig-level assembly of ~4.87 Mb with ~54% GC content and 4,386 predicted protein-coding genes [^ncbi-assembly]. This is notably larger than *Akkermansia muciniphila* (2.66 Mb) and reflects a broader metabolic repertoire consistent with an environmental generalist.

Iwata et al. 2025 analyzed the virulence-factor profile of *E. americana* using the reference genome against the Virulence Factor Database (VFDB), categorizing predicted virulence factors across multiple functional classes [^iwata2025]:

- **Nutritional/Metabolic factors** — iron acquisition (siderophores), nutrient uptake systems
- **Effector delivery system** — type III secretion system (T3SS) components; enables translocation of effector proteins into host cells
- **Immune modulation** — capsule and surface polysaccharide components that interfere with complement and phagocytosis
- **Motility** — flagellar apparatus (peritrichous flagella; confirmed motile)
- **Adherence** — fimbriae and outer-membrane adhesins
- **Regulation** — gene-regulatory factors (virulence-gene expression control)
- **Biofilm** — biofilm formation machinery (relevant to hospital-environment persistence)
- **Stress survival** — oxidative-stress response; relevant for TME (tumor microenvironment) survival
- **Invasion** — putative invasin-class proteins enabling epithelial invasion
- **Exotoxin** — hemolysin(s) and secreted cytolysins proposed as direct cytolytic effectors against tumor cells [^iwata2025]

#gap/needs-strain-genome — Iwata et al. 2025 analyzed GCF_000735345.1 (the ATCC 33852 type strain), not the actual *Dryophytes japonicus*-derived antitumor isolate. Whether the antitumor isolate's virulence-factor profile matches the reference genome exactly is unknown; strain-level genomic differences may contribute to (or detract from) antitumor efficacy. The paper discusses this limitation.

## Aging and oncology context (Iwata 2025)

The Iwata 2025 *Gut Microbes* study is the primary reason *E. americana* appears in this wiki [^iwata2025]. Full mechanistic and experimental detail is in [[studies/iwata-2025-ewingella-americana-antitumor]]; summary here for cross-referencing:

### Key experimental findings

**Model:** 4-week-old female BALB/c mice bearing subcutaneous Colon-26 syngeneic colorectal carcinoma; single intravenous injection of 200 µL at 5×10⁹ CFU/mL (= 1×10⁹ CFU per mouse)

**Efficacy (n=5 per group, comparative experiment):**
- Complete response (CR) rate at day 30: **100%** (5/5; E. americana, single IV dose) vs **20%** (1/5; anti-PD-L1 antibody, 4 doses every other day at 2.5 mg/kg) vs **0%** (0/5; liposomal doxorubicin, 4 doses every other day at 2.5 mg/kg)
- CR status confirmed histologically at day 30; tumor-free status maintained ≥60 days post-treatment with no recurrence in complete responders [^iwata2025]

**Immunological memory:** Animals that achieved CR rejected rechallenge with Colon-26 cells at day 60 (0/10 tumors developed in cured animals vs 10/10 in naïve controls), demonstrating durable adaptive immune memory — consistent with a vaccine-like antitumor effect [^iwata2025] #gap/needs-replication

**Safety:** No significant weight loss, overt organ toxicity, or mortality attributable to bacterial treatment in the primary tumor model. The antibiotic-susceptibility profile means treatment could be terminated with standard antibiotics if toxicity emerged — a key regulatory de-risking feature compared to genetically-modified strains [^iwata2025]

### Proposed dual mechanism

Iwata 2025 proposes *E. americana*'s antitumor activity operates through two converging axes [^iwata2025]:

1. **Direct cytolysis** — hemolysin(s) and secreted cytolysins (exotoxins) directly kill tumor cells; caspase-3-mediated apoptosis and TUNEL-positive cell death confirmed in Colon-26 3D tumor spheroids in vitro and in tumor sections in vivo (IHC). Intratumoral bacterial load increased ~3000-fold between 3 h and 24 h post-injection (colony assay), confirming selective tumor colonization driven by the hypoxic tumor microenvironment — the same tropism described for *Bifidobacterium*, *Salmonella*, and *Clostridium* strains in bacterial cancer therapy.

2. **PAMP-driven immune activation** — bacterial PAMPs stimulate innate immune sensors in the TME, triggering recruitment of B cells (CD19+; +3% vs PBS), T cells (CD3+; +5%), and neutrophils (CXCR4+; +30%; the dominant responding population); IFN-γ and TNF-α expression elevated in tumor tissue at 6 h post-injection (qPCR). This immune arm likely underlies the immunological memory and rechallenge rejection [^iwata2025]

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — caspase-3 apoptosis and PAMP/TLR axes are conserved; tumor-hypoxia tropism likely conserved; direct human tumor cytolysis not demonstrated |
| Phenotype conserved in humans? | unknown — no human tumor data; Colon-26 is a murine syngeneic model |
| Replicated in humans? | no — single preclinical paper; no human clinical trial registered as of 2026-05-21 |

### Comparison to other bacterial cancer therapies

*E. americana*'s natural (non-engineered) origin distinguishes it from the dominant paradigm in bacterial cancer therapy [^iwata2025]:

| Agent | Status | Genetic modification | Key limitation |
|---|---|---|---|
| *Salmonella* VNP20009 | Phase 1 clinical trials; limited efficacy in humans | Attenuated (msbB deletion) | Attenuation reduced cytolytic potency; engineering risk |
| *Listeria*-based (ADXS-HPV, axalimogene filolisbac) | Phase 2/3 (cervical cancer) | Attenuated Lm + antigen expression | Requires complex genetic engineering; regulatory complexity |
| *E. coli* Nissle 1917 variants | Preclinical | Variable; quorum-sensing kill switches proposed | No natural antitumor activity; requires engineered effectors |
| *E. americana* (Iwata 2025) | Preclinical (murine only) | None | Single model; single dose schedule; no human data |

The naturally-occurring antitumor activity of *E. americana*, combined with antibiotic susceptibility providing a "kill switch," is proposed to lower the regulatory barrier compared to genetically-modified bacterial therapies [^iwata2025]. See [[interventions/pharmacological/bacterial-cancer-therapy]] for the broader intervention class context.

### Relevance to cancer hallmarks and aging

Cancer incidence rises exponentially with age, making effective cancer therapy directly relevant to the aging wiki's scope (see [[phenotypes/cancer]]). The [[gut-microbiome-aging-shifts]] page documents how the aging gut microbiome loses beneficial commensals and gains potentially pro-inflammatory species — the discovery of a gut-derived bacterium with potent antitumor activity adds a new dimension to the microbiome-aging-cancer axis. Whether gut *E. americana* abundance changes with age, or whether age-related gut microbiome shifts affect the efficacy of *E. americana* as a therapeutic, are completely unexplored. #gap/unsourced

## Recency literature search (R25)

**Query:** "Ewingella americana," PubMed, 2020–2026-05-21.
**Results:** 22 records. Triage:

- **Iwata et al. 2025** (PMID 41376334; *Gut Microbes*) — antitumor; must-include; integrated above
- **Ioannou et al. 2024** (PMID 38927225; *Antibiotics*) — narrative review of 19 human infections; most comprehensive clinical reference; integrated above
- **Rivero et al. 2026** (PMID 41596769; *IJMS*) — Antarctic isolate; lactose-transforming enzymes; not aging-relevant
- **Wei et al. 2025** (PMID 41003513; *Toxins*) — volatile organic compounds; mushroom pathogenicity; not aging-relevant
- **Jafarova Ayik et al. 2025** (PMID 40636648; *Cureus*) — sepsis case report; low-tier (Cureus; single case); noted in clinical section with appropriate weighting
- **Manan et al. 2024** (PMID 39741595; *Front Microbiol*) — mushroom microbiome survey; not aging-relevant
- **Salehi et al. 2023** (PMID 36131391; *Phytopathology*) — mushroom pathogen; not aging-relevant
- **Fahrimal et al. 2024** (PMID 39033154; *BMC Musculoskelet Disord*) — mNGS case report in ankylosing spondylitis; integrated as clinical breadth example
- **Ioannou 2022** (PMID 35223116) — peritoneal dialysis peritonitis case; cited as fourth documented human case at that time
- Remaining hits: carbapenem-resistance screening (PMID 35740183), plant growth promotion (PMID 36362334), sea turtle osteomyelitis (PMID 38731321), other case reports and environmental isolates

**No meta-analyses or RCTs exist** — field is too early-stage. No Iwata 2025 findings are contradicted by other sources in the recency window. The clinical infection literature (19 cases as of Ioannou 2024 review) is entirely case-report/case-series level — Cureus case reports noted but included only as illustrative rather than weight-bearing. The antitumor finding is, as of 2026-05-21, a single-paper result.

## Limitations and gaps

- #gap/needs-replication — Iwata 2025 is a single-lab, single-tumor-model result. Independent replication across additional syngeneic models (MC38, CT26, B16F10) and orthotopic models required before mechanistic conclusions can be firmed
- #gap/needs-human-replication — No human tumor data. ClinicalTrials.gov search (2026-05-21) finds no registered trials of *E. americana* as a cancer therapeutic
- #gap/needs-strain-genome — Antitumor efficacy was demonstrated with a *D. japonicus*-derived isolate, but virulence-factor analysis used the ATCC 33852 type strain genome. Strain-level genomic comparison is lacking
- #gap/dose-response-unclear — Single dose schedule (1×10⁹ CFU IV per mouse, once; concentration 5×10⁹ CFU/mL in 200 µL) tested; dose–response, optimal dosing interval, and route alternatives (intraperitoneal, intratumoral, oral) unexplored
- #gap/long-term-unknown — No long-term safety data in any animal model; Risk Group 2 classification warrants rigorous pharmacokinetics and biodistribution studies in immunocompetent and immunocompromised hosts before human translation
- #gap/no-mechanism — The specific molecular target(s) responsible for tumor-selective colonization and the identity of the cytolytic hemolysin(s) have not been biochemically characterized
- #gap/unsourced — Whether *E. americana* is a normal (if rare) component of the human gut microbiome and whether its abundance changes with aging is unknown; no human gut microbiome abundance data cited here
- The oral delivery format required for a scalable therapeutic requires development; Iwata 2025 discusses but does not solve the challenge of protecting bacteria through gastric acid to enable oral dosing

## See also

- [[studies/iwata-2025-ewingella-americana-antitumor]] — primary source; full experimental detail
- [[interventions/pharmacological/bacterial-cancer-therapy]] — intervention class context; engineered and natural bacterial therapies
- [[dysbiosis]] — hallmark of aging linking gut microbiome disruption to disease susceptibility
- [[phenotypes/cancer]] — cancer as an aging phenotype; incidence-age relationship
- [[gut-microbiome-aging-shifts]] — age-related compositional changes in gut microbiome
- [[akkermansia-muciniphila]] — best-characterized gut microbe in the aging context; contrast: AKK addresses metabolic hallmarks; *E. americana* addresses oncology
- [[hallmarks/chronic-inflammation]] — inflammaging; tumor immune evasion links to this hallmark

## Footnotes

[^iwata2025]: [[studies/iwata-2025-ewingella-americana-antitumor]] · doi:10.1080/19490976.2025.2599562 · PMID 41376334 · in-vivo + in-vitro · n=5/group (comparative efficacy experiment, Fig. 3); n=3/group (initial antitumor screening, Fig. 2) · 4-week-old female BALB/c mice, Colon-26 syngeneic model · Iwata S, Yamasita N, Asukabe K, Sakari M, Miyako E · *Gut Microbes* 2025;17(1):2599562 · PDF locally available · OA: gold (CC BY-NC 4.0)

[^grimont1983]: doi:10.1016/0769-2609(83)90102-3 · Grimont PAD et al. · *Annales de l'Institut Pasteur / Microbiologie* 1983 · original description of genus *Ewingella* and species *E. americana* from clinical specimens; nomenclatural validation: IJSEM Validation List 13, 1984 · cited_by_count: 72 · #gap/no-fulltext-access (closed-access; claims about original isolation context derived from LPSN + NCBI Taxonomy + secondary literature)

[^ioannou2024]: doi:10.3390/antibiotics13060559 · PMID 38927225 · Ioannou P, Baliou S, Kofteridis D · *Antibiotics* 2024;13(6):559 · narrative review · n=19 documented human infection cases across 16 studies · University of Crete · OA: gold (download pending in a local paper archive)

[^ncbi-assembly]: NCBI RefSeq GCF_000735345.1 · *Ewingella americana* ATCC 33852 · contig-level assembly · total sequence ~4.87 Mb · GC 54% · 4,386 protein-coding genes · 55 pseudogenes · queried 2026-05-21 via NCBI Datasets v2 API

[^pmid39033154]: PMID 39033154 · doi to be confirmed · Fahrimal et al. · *BMC Musculoskeletal Disorders* 2024 · case report · n=1 · mNGS detection of *E. americana* in Andersson lesion vertebral biopsy in ankylosing spondylitis patient · #gap/needs-replication (single case)

[^pmid40636648]: PMID 40636648 · doi to be confirmed · Jafarova Ayik et al. · *Cureus* 2025 · case report · n=1 · *E. americana* sepsis during RBC transfusion in chemotherapy patient; treated successfully with ceftriaxone · low-tier (Cureus); weight accordingly

[^pmid36131391]: PMID 36131391 · Salehi et al. · *Phytopathology* 2023 · observational (mycology) · 40 *E. americana* isolates from Iranian button mushroom farms; variable aggressiveness

[^pmid41003513]: PMID 41003513 · Wei et al. · *Toxins (Basel)* 2025 · in-vitro + in-vivo (mushroom) · 16 volatile compounds identified; 2,4-di-tert-butylphenol most potent

[^pmid38731321]: PMID 38731321 · *Animals (Basel)* 2024 · case report (veterinary) · *E. americana* bacteremia in loggerhead sea turtle; responsive to enrofloxacin

[^pmid35740183]: PMID 35740183 · *Antibiotics* 2022 · survey · *E. americana* in carbapenem-resistant swine isolates; potential zoonotic significance

[^pmid36362334]: PMID 36362334 · *IJMS* 2022 · in-vivo (plant model) · insect gut-derived *E. americana* with plant growth-promoting properties; 41% increase in tomato fruit yield

[^pmid41596769]: PMID 41596769 · Rivero et al. · *IJMS* 2026 · in-vitro · Antarctic isolate; lactose-to-tagatose conversion enzymes (~18% tagatose yield)
