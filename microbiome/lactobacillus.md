---
type: microbe
aliases: [Lactobacillaceae, lactic acid bacteria, LAB, Lactobacillus sensu stricto]
ncbi-taxonomy: 1578
phylum: Firmicutes
family: Lactobacillaceae
gram-stain: positive
oxygen-tolerance: facultative anaerobic to microaerophilic (varies by species)
host: "Homo sapiens (gut, oral, vaginal commensal)"
discovered: 1901 (Beijerinck, formal genus description; Pasteur-era isolation earlier)
genome-size-mb: "1.8–3.3 (species-dependent)"
key-strains: [L. acidophilus NCFM, L. delbrueckii subsp. bulgaricus ATCC 11842, L. helveticus R0052, L. crispatus CTV-05]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Liu 2023, Biagi 2010, Hutchinson 2021 verified against downloaded PDFs end-to-end; Zheng 2020 verified against Crossref abstract only (PDF not downloadable, HTTP 403); Biagi 2016 PDF not downloadable (failed); Bui 2019 DOI corrected (wrong DOI in original seeder — correct DOI 10.3389/fmicb.2019.02449 confirmed via Crossref, underlying PDF not yet re-verified at corrected DOI); Ji 2025, Chaiyasut 2024, Zhou 2024 DOIs resolved via PubMed efetch but PDFs not read end-to-end"
---

> Partially verified by Claude on 2026-05-07. Sources checked: Liu 2023 (PDF), Biagi 2010 (PDF), Hutchinson 2021 (PDF), Zheng 2020 (abstract via Crossref; PDF not downloadable), Bui 2019 DOI corrected. Biagi 2016 PDF not downloadable. PMID-only citations resolved to DOIs. Several corrections applied — see verified-scope in frontmatter and log.md.

# *Lactobacillus* (genus, *sensu stricto*)

*Lactobacillus* is a gram-positive, rod-shaped, non-spore-forming bacterial genus that ferments sugars to lactic acid. In the context of the aging gut, the name "Lactobacillus" requires careful disambiguation: a landmark 2020 taxonomic reclassification by Zheng et al. split the historical genus into 25 genera, radically narrowing what "Lactobacillus" now refers to [^zheng2020]. Most commercially important "probiotic Lactobacillus" strains are now assigned to sister genera (Lacticaseibacillus, Limosilactobacillus, Lactiplantibacillus, etc.). Abundance shifts in the aging gut are **cohort-dependent and contested**: some studies report modest increases in Lactobacillaceae in centenarians, while genus-level causal inference via Mendelian randomization suggests species-specific rather than genus-wide longevity associations [^liu2023]. The genus is the historical probiotic workhorse; RCT evidence in elderly populations shows modest, strain-specific benefits on immune markers and microbiota composition [^hutchinson2021].

---

## Taxonomy and the 2020 reclassification

### Historical genus

Before 2020, "Lactobacillus" was one of the largest bacterial genera: >260 validly published species spanning enormously diverse ecological niches (gut, vagina, oral cavity, dairy ferments, plant surfaces, silage). The genus was held together largely by phenotype (gram-positive, rod, lactic acid fermenter) rather than phylogenetic coherence.

### Zheng 2020 reclassification

Zheng et al. performed whole-genome sequence analysis of >250 *Lactobacillus* species and proposed splitting the genus into **25 distinct genera** [^zheng2020]. Key points:

- The **genus *Lactobacillus* sensu stricto** now contains only the **acidophilus group** and related clades: *L. acidophilus*, *L. delbrueckii* (incl. subsp. *bulgaricus*), *L. helveticus*, *L. crispatus*, *L. gallinarum*, *L. amylolyticus*, *L. amylovorus*, *L. gasseri*, *L. johnsonii*, and close relatives.
- Former "*Lactobacillus*" species in other clades were moved to new genera including:
  - **Lacticaseibacillus** — e.g., *L. rhamnosus* → *Lacticaseibacillus rhamnosus* GG
  - **Limosilactobacillus** — e.g., *L. reuteri* → *Limosilactobacillus reuteri*
  - **Lactiplantibacillus** — e.g., *L. plantarum* → *Lactiplantibacillus plantarum* 299v
  - **Lentilactobacillus** — e.g., *L. buchneri*
  - **Lacticaseibacillus** — e.g., *L. casei* (Shirota / Yakult) → *Lacticaseibacillus casei*
- The *Lactobacillaceae* family was simultaneously expanded to absorb *Leuconostocaceae* (Leuconostoc, Weissella, Oenococcus).

This wiki uses **"Lactobacillus *sensu stricto*"** to mean the restricted post-2020 genus (NCBI Taxonomy 1578). When citing older literature or commercial probiotics that use the historical name, context is required. See the "Probiotic strains" section below for current nomenclature.

### Identity table

| Field | Value |
|---|---|
| Genus | *Lactobacillus* Beijerinck 1901 (*emended* Zheng et al. 2020) |
| NCBI Taxonomy ID | 1578 |
| Phylum | Firmicutes |
| Class | Bacilli |
| Order | Lactobacillales |
| Family | Lactobacillaceae |
| Gram stain | Positive |
| Morphology | Rod-shaped, non-motile, non-spore-forming |
| Oxygen tolerance | Facultative anaerobic to microaerophilic (species-dependent) |
| Fermentation type | Homofermentative (*L. delbrueckii*, *L. acidophilus*) or heterofermentative (*L. helveticus* partial) |
| Primary metabolic product | L- or D-lactic acid (species-dependent stereochemistry) |
| Genome size range | ~1.8–3.3 Mb |

---

## Biology and ecology

### Fermentation

*Lactobacillus* spp. are **lactic acid fermenters**. Homofermentative species (most of the *sensu stricto* genus) convert glucose almost exclusively to lactic acid via glycolysis. Heterofermentative species additionally produce CO₂, ethanol, and acetate via the phosphoketolase pathway. The net result is environmental acidification, which creates a low-pH niche that excludes many enteric pathogens (colonization resistance / competitive exclusion).

### Niches in the human body

*Lactobacillus sensu stricto* species are most abundant in:
- **Vaginal microbiome** — *L. crispatus*, *L. gasseri*, *L. jensenii* are dominant in healthy, Lactobacillus-dominated vaginal communities (Ravel et al. 2011 framework). Vaginal *Lactobacillus* dominance is strongly protective against BV, STIs, and preterm birth — an aging-relevant niche primarily for premenopausal context; estrogen decline at menopause reduces vaginal *Lactobacillus* colonization.
- **Upper GI / small intestine** — *L. acidophilus*, *L. helveticus* colonize jejunal/ileal mucosa.
- **Colonic gut** — *Lactobacillus sensu stricto* typically represents **<1% of fecal microbiota** in healthy adults; dominant gut colonizers are anaerobes (Firmicutes Clostridiales, Bacteroidetes). The gut fraction is minor compared to the vaginal or oral niches.
- **Dairy ferments** — *L. delbrueckii* subsp. *bulgaricus* (yogurt), *L. helveticus* (Swiss-type cheese) are technological organisms with limited gut persistence.

### Lactate cross-feeding loop

A key ecological role: *Lactobacillus*-derived **lactic acid** is cross-fed to secondary fermenters (especially *Anaerostipes rhamnosivorans* and related Lachnospiraceae) that convert lactate to **butyrate** [^bui2019]. This metabolic handoff is one mechanism by which *Lactobacillus* colonization can indirectly boost butyrate production even though *Lactobacillus* itself does not produce butyrate. Butyrate is the primary energy substrate for colonocytes and a key anti-inflammatory metabolite in the gut (see [[scfa-signaling]]). This cross-feeding mechanism parallels the *Bifidobacterium*-acetate → butyrate-producer cross-feeding loop described for [[bifidobacterium]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — in vitro co-culture evidence; human in vivo quantification limited |
| Phenotype conserved in humans? | partial — SCFA shifts observed with probiotic interventions; attribution to lactate cross-feeding specifically unclear |
| Replicated in humans? | no — mechanistic chain not directly validated in controlled human trials #gap/needs-human-replication |

---

## Aging-associated abundance shifts

### Gut abundance: contested directionality

Unlike [[bifidobacterium]], whose age-associated gut decline is highly consistent across cohorts, *Lactobacillus* abundance changes with aging are **cohort-dependent and directionally contested**:

- **Biagi 2010** (PLoS ONE; n=84, Italian multi-age cohort: 21 centenarians, 22 elderly 63–76 yr, 20 young adults 25–40 yr, plus 21 centenarian offspring) found significantly altered gut microbiota composition in centenarians versus younger adults (MCPP P=0.002). The centenarian microbiota was enriched in Bacilli class (driven by *Staphylococcus* and *Clostridium leptum* group) and Proteobacteria (including pathobionts such as *Klebsiella pneumoniae*, *Vibrio*, *Pseudomonas*, *Serratia*), with a dramatic increase in *Eubacterium limosum* et rel. (~15-fold vs elderly and young) and a significant decrease in *Faecalibacterium prausnitzii* (butyrate-producer). **The paper does not report *Lactobacillus* or *Lactobacillus*-related taxa as enriched in centenarians** — the Bacilli-class enrichment is primarily *Staphylococcus* and related organisms. *Bifidobacterium* was significantly lower in centenarians vs young adults (P=0.023). [^biagi2010]. #gap/needs-replication

- **Biagi 2016** (Current Biology; Italian adults through semi-supercentenarians 105–109 yr) — characterized the core microbiota across ages. The study found enrichment of *Akkermansia*, *Bifidobacterium*, and Christensenellaceae in extreme longevity groups but did not identify *Lactobacillus sensu stricto* as a consistent longevity-enriched clade [^biagi2016]. #gap/needs-replication — claim derived from abstract; full-PDF verification pending.

- **Ji 2025** (GeroScience; Chinese long-lived populations including centenarians from Northeastern China, n=142) — found enrichment of *Lactobacillus salivarius* (now reclassified to *Ligilactobacillus salivarius*) in long-lived individuals. Species-specific finding; genus-level generalization unreliable [^ji2025]. #gap/needs-replication — single cohort, observational, single-region.

**Net assessment:** #gap/contradictory-evidence — Directional abundance claims for *Lactobacillus* in aging are unreliable at the genus level. Species-specific effects (e.g., *L. amylovorus* or *Ligilactobacillus salivarius* in centenarians) may be real, but genus-wide enrichment or depletion is not established. Confounders (diet, geography, antibiotic history, comorbidities, 16S vs shotgun methodology, taxonomic resolution) obscure cross-cohort comparisons.

### Mendelian randomization — causal signal

Liu et al. 2023 applied bidirectional two-sample Mendelian randomization (GCTA-GSMR as primary method; IVW, MR-Egger, weighted median, MR-PRESSO as sensitivity analyses) to the gut and oral microbiome and human longevity. Gut microbiome GWAS: N=1539 individuals (4D-SZ cohort, 500 gut microbial features). Longevity GWAS (outcome, discovery): N=4477 (2178 centenarians + 2299 middle-aged controls, CLHLS cohort). Longevity replication dataset: N=6548. Mean F-statistic for gut microbiome instruments: 51.4 (indicating strong instruments). Key finding relevant to *Lactobacillus*: in the forward MR (microbiome → longevity), **genetically predicted *Lactobacillus amylovorus* (probiotic species, *Lactobacillus sensu stricto*) abundance was positively associated with longevity (β=0.09, p=0.014)**. However, the **genus-level *Lactobacillus* was negatively associated with longevity** (Figure 1a; genus listed among features negatively correlated with longevity in Chinese cohort, alongside *Streptococcus*, *Coprococcus*, and *Fusobacterium nucleatum*). Species-level and genus-level effects diverge substantially — genus-level generalization should not be made from the *L. amylovorus* finding. Cross-population replication in European cohorts (MiBioGen, Dutch, Finnish) showed few overlapping causalities; MR results for *Lactobacillus*-related taxa were not consistently replicated across ethnicities. [^liu2023] #gap/needs-replication (single MR study; no European replication of the *L. amylovorus* signal)

---

## Probiotic strains and current nomenclature

Many of the best-characterized "Lactobacillus" probiotic strains used in clinical trials are **no longer in the genus *Lactobacillus* sensu stricto** following the 2020 reclassification. The table below maps historical names (used in most trial literature) to current taxonomy:

| Historical name | Current name | Genus | Key probiotic use |
|---|---|---|---|
| *L. rhamnosus* GG | *Lacticaseibacillus rhamnosus* GG | Lacticaseibacillus | GI tract; children / elderly |
| *L. reuteri* DSM 17938 | *Limosilactobacillus reuteri* DSM 17938 | Limosilactobacillus | Gut; bone density (older adults) |
| *L. plantarum* 299v | *Lactiplantibacillus plantarum* 299v | Lactiplantibacillus | GI; IBS |
| *L. casei* Shirota (Yakult) | *Lacticaseibacillus casei* Shirota | Lacticaseibacillus | Immune; elderly trials |
| *L. acidophilus* NCFM | *L. acidophilus* NCFM | Lactobacillus (retained) | Gut colonization; dairy |
| *L. delbrueckii* subsp. *bulgaricus* | *L. delbrueckii* subsp. *bulgaricus* | Lactobacillus (retained) | Yogurt ferment; limited GI persistence |
| *L. helveticus* R0052 | *L. helveticus* R0052 | Lactobacillus (retained) | Cheese; anxiety/sleep RCTs |
| *L. crispatus* CTV-05 | *L. crispatus* CTV-05 | Lactobacillus (retained) | Vaginal colonization; BV prevention |

For the remainder of this page, "Lactobacillus" includes all organisms from the historical genus for the purpose of summarizing trial evidence, with current nomenclature in parentheses where relevant.

---

## Probiotic interventions in elderly populations

### Systematic review evidence

Hutchinson et al. 2021 systematically reviewed 17 RCTs of probiotic supplementation in healthy older adults (≥60 yr) [^hutchinson2021]. Key findings:

- **Gut microbiota composition** was altered in nearly all trials — most consistent outcome. Supplemented strains showed transient colonization; microbiota returned toward baseline after cessation.
- **Humoral immunity** (serum IgA, NK cell activity, influenza vaccine seroconversion) showed modest improvements in some trials; results were heterogeneous and the review did not pool effect sizes due to methodological variability.
- **Infection incidence/duration** (upper respiratory, gastrointestinal) — mixed findings. Some trials reported reductions in cold duration; others null.
- **Cognitive function, lipid profiles, digestion** — limited evidence, mostly single-trial.
- Strains commonly examined: *L. acidophilus* NCFM, *L. delbrueckii* subsp. *bulgaricus* OLL1073R-1, *Lacticaseibacillus rhamnosus* GG, *Lacticaseibacillus casei* DN-114 001.

The review concluded that probiotic supplementation is **safe in healthy elderly but has limited, strain-specific benefits** across non-GI outcomes.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — immune-modulation via gut-associated lymphoid tissue |
| Phenotype conserved in humans? | partial — microbiota composition effects consistent; immune/infection effects strain-dependent and modest |
| Replicated in humans? | partial — individual outcomes replicated in some strains but not across-the-board |

### Strain-specific aging-trial highlights

**Lacticaseibacillus casei Shirota (Yakult):** Most studied in elderly Japanese cohorts. Multiple small RCTs reported improved NK cell activity, reduced incidence of upper respiratory infections, and constipation relief. Data predominantly from single-group, industry-sponsored trials; effect sizes modest. #gap/needs-replication — independent non-industry replication limited.

**Lacticaseibacillus rhamnosus GG:** Chaiyasut et al. 2024 (n=small; 8-week intervention) in healthy elderly: significant improvement in LDL cholesterol, altered microbiome composition [^chaiyasut2024]. Single small study. #gap/needs-replication

**Limosilactobacillus reuteri DSM 17938:** Skeletal data in postmenopausal women showed improved bone mineral density in a double-blind RCT (Jansson 2019, not independently verified here). Gut-bone axis proposed mechanism. #gap/unsourced — verify primary source before relying on this claim.

**Lactobacillus helveticus R0052 (combined with *Bifidobacterium longum*):** Anxiety/depression outcomes in stressed adults; gut-brain axis mechanism. Aging-specific geriatric data not established.

### FMT with Lactobacillus-enriched donor microbiomes

Zhou et al. 2024 used human fecal transplants containing centenarian-derived *Bifidobacterium bifidum* LTBB21J1 and *Lacticaseibacillus casei* LTL1361 in D-galactose-induced aging mice [^zhou2024]. Mixed probiotic groups showed reduced neuronal damage, increased antioxidant capacity, and decreased inflammation. Preclinical only; D-galactose model is not a canonical aging model. See [[fmt]] for the broader FMT-aging context. #gap/needs-human-replication

---

## Mechanisms relevant to aging biology

### Pathogen exclusion and immunomodulation

Acidification of the gut lumen by *Lactobacillus* lactic acid production and secretion of bacteriocins (antimicrobial peptides) suppresses enteric pathogens and potentially modulates the dysbiotic shifts associated with aging. In aging, reduced gastric acid secretion and slower gut motility create a more permissive environment for facultative pathogens — *Lactobacillus* colonization may partially counteract this. Evidence is indirect and extrapolated from non-aging contexts. #gap/no-mechanism — quantitative contribution to aging-specific pathogen exclusion not established.

### Regulatory T-cell induction

Some *Lactobacillus* strains (notably *L. reuteri*) induce regulatory T-cells (Tregs) in the intestinal mucosa, potentially countering the age-associated shift toward pro-inflammatory Th1/Th17 skewing. This mechanism links to the [[chronic-inflammation]] hallmark. Data are primarily from mouse models; species/strain specificity is high. #gap/needs-human-replication

### SCFA cross-feeding

As noted in the biology section, lactate cross-feeding to butyrate producers is an indirect mechanism by which *Lactobacillus* colonization can support colonocyte health and mucosal barrier integrity. See [[scfa-signaling]] and [[gut-barrier]] for the downstream biology.

### Gut-brain axis

Some *Lactobacillus* strains produce GABA and other neuroactive compounds; gut-brain axis effects are proposed for cognitive aging. Mechanistic evidence is preclinical; human aging-specific RCT data are limited. #gap/no-mechanism — the causal chain from *Lactobacillus* → GABA production → brain function in elderly is not established.

---

## Limitations and gaps

- #gap/contradictory-evidence — Genus-level aging abundance directionality is contested; species- and cohort-dependent. Do not generalize "Lactobacillus increases/decreases with aging" without specifying species, cohort, and methodology.
- #gap/needs-replication — Most aging-specific Lactobacillus RCTs are small (n<50), single-center, and industry-affiliated; independent large-scale replication is lacking.
- #gap/long-term-unknown — No *Lactobacillus*-focused lifespan extension study in mice published as of 2026-05-07; all preclinical work uses surrogate aging models (D-galactose, HFD) rather than natural aging.
- #gap/needs-human-replication — Cross-feeding, Treg induction, and gut-brain axis mechanisms established in rodent models; human mechanistic quantification absent.
- #gap/dose-response-unclear — Optimal dose, duration, and colonization persistence for aging-relevant outcomes have not been established in humans; probiotic doses range from 10⁸ to 10¹¹ CFU/day across trials with no systematic dose-ranging study in elderly.
- **Nomenclature hazard** — Older literature, meta-analyses, and probiotic labeling continue to use the historical genus name. Readers and researchers must map historical "Lactobacillus" species to their current genus to correctly aggregate evidence. This wiki follows post-2020 nomenclature; strain-level specificity overrides genus-level claims [^zheng2020].

---

## See also

- [[dysbiosis]] — hallmark page; *Lactobacillus* is a primary organism referenced in the gut-dysbiosis aging context
- [[bifidobacterium]] — parallel seed; sister lactic acid bacteria with more consistent age-associated decline; Bifidobacterium lactate cross-feeding overlaps mechanistically
- [[gut-microbiome-aging-shifts]] — parallel seed; broader overview of microbiome compositional changes across the lifespan
- [[firmicutes-bacteroidetes-ratio]] — parallel seed; genus-level counts feed into this widely-reported ratio
- [[scfa-signaling]] — downstream metabolic pathway; *Lactobacillus* lactate → butyrate cross-feeding
- [[gut-barrier]] — mucosal barrier integrity; maintained by Lactobacillus colonization resistance
- [[akkermansia-muciniphila]] — verified; wiki's first microbe page; comparison case for mucosal commensals
- [[chronic-inflammation]] — downstream aging hallmark linked to gut dysbiosis
- [[interventions/dietary/probiotics]] — intervention class page covering *Lactobacillus*/*Lactiplantibacillus*/*Lacticaseibacillus*/*Limosilactobacillus* strain-specific RCT evidence (LP299v, LGG, L. acidophilus NCFM, L. casei Shirota) for GI-symptom and aging endpoints; low-gas-strain section maps homofermentative vs heterofermentative gas contribution
- [[prebiotics]] — parallel seed; dietary substrates that selectively stimulate *Lactobacillus* (FOS, GOS, inulin)
- [[postbiotics]] — parallel seed; heat-inactivated bacterial preparations and cell-wall components; some Lactobacillus postbiotics show age-relevant immune activity
- [[fmt]] — parallel seed; fecal microbiota transplant as a complementary intervention strategy

---

## Footnotes

[^zheng2020]: [[studies/zheng-2020-lactobacillus-reclassification]] · doi:10.1099/ijsem.0.004107 · taxonomic / whole-genome phylogenetics · model: 261 *Lactobacillus* species (at March 2020); whole-genome phylogeny + pairwise average amino acid identity + clade-specific signature genes · Zheng J, Wittouck S, Salvetti E, Franz CMAP, Harris HMB et al. · Int J Syst Evol Microbiol 2020 · PDF: not downloadable (HTTP 403 from publisher; archive status: failed; OA URL at microbiologyresearch.org inaccessible); key claims verified against Crossref abstract · abstract confirms: 25 genera total (23 novel + emended *Lactobacillus* + *Paralactobacillus*); *Lacticaseibacillus*, *Lactiplantibacillus*, *Limosilactobacillus*, *Lentilactobacillus* all confirmed as novel genera in abstract genus list · citation percentile: 100% (2933 citations as of 2026-05-07) · #gap/no-fulltext-access (abstract-only verification)

[^biagi2010]: [[studies/biagi-2010-centenarian-microbiota]] · doi:10.1371/journal.pone.0010667 · observational (HITChip 16S rRNA microarray + qPCR) · n=84 total: 21 centenarians (avg 100.5 yr), 22 elderly (avg 72.7 yr), 20 young adults (avg 31 yr), 21 centenarian offspring (avg 67.5 yr) · Emilia Romagna, Italy · Biagi E, Nylund L, Candela M et al. · PLoS ONE 2010 · PDF: verified against downloaded PDF · key centenarian findings: *Eubacterium limosum* ~15-fold increase vs elderly; *F. prausnitzii* significantly decreased; Proteobacteria enrichment (pathobionts); *Bifidobacterium* lower vs young (P=0.023); Bacilli class higher but driven by *Staphylococcus* and *C. leptum* group, NOT *Lactobacillus* per se · #gap/needs-replication

[^biagi2016]: [[studies/biagi-2016-extreme-longevity-microbiota]] · doi:10.1016/j.cub.2016.04.016 · observational (shotgun + 16S) · model: Italian adults through semi-supercentenarians (105–109 yr) · Biagi E, Franceschi C, Rampelli S et al. · Current Biology 2016 · PDF: pending (green OA) — *Lactobacillus* abundance claim on this page unverified against full PDF; abstract confirms Akkermansia/Bifidobacterium enrichment, not *Lactobacillus sensu stricto* · #gap/needs-replication

[^liu2023]: [[studies/liu-2023-mr-microbiome-longevity]] · doi:10.1038/s41598-023-31115-8 · Mendelian randomization (bidirectional two-sample MR; primary method GCTA-GSMR; IVW, MR-Egger, weighted median, MR-PRESSO as sensitivity analyses) · exposure GWAS: N=1539 (gut microbiome, 4D-SZ cohort); outcome GWAS: N=4477 (longevity discovery, CLHLS: 2178 centenarians + 2299 controls); replication longevity N=6548 · mean gut microbiome instrument F-statistic: 51.4 · model: human GWAS summary statistics (Chinese cohort primary; European MiBioGen/Dutch/Finnish for cross-population validation) · Liu X, Zou L, Nie C et al. · Scientific Reports 2023 · PDF: verified against downloaded PDF · *L. amylovorus*: β=0.09, p=0.014 (positively associated with longevity); genus-level *Lactobacillus* negatively associated with longevity in forward MR · #gap/needs-replication (single MR study; *L. amylovorus* signal not replicated in European cohorts)

[^hutchinson2021]: [[studies/hutchinson-2021-probiotics-elderly-review]] · doi:10.3390/microorganisms9061344 · systematic review · n=17 RCTs · individual trial sample sizes ranged from 18 to 1,072 participants (paper does not report a pooled N; no meta-analysis performed due to heterogeneity) · model: healthy older adults ≥60 yr; multiple Lactobacillus/probiotic strains · Hutchinson AN, Bergh C, Kruger K et al. · Microorganisms 2021 · PDF: verified against downloaded PDF

[^bui2019]: [[studies/bui-2019-anaerostipes-lactate-crossfeeding]] · doi:10.3389/fmicb.2019.02449 [CORRECTED — original seeder had wrong DOI: 10.3389/fmicb.2019.02653 resolves to an unrelated mycotoxin paper by Camardo Leggieri et al.; correct DOI confirmed via Crossref] · in-vitro co-culture · model: *Anaerostipes rhamnosivorans* + lactic acid bacteria co-culture · Bui TPN, Schols HA, Jonathan M et al. · Frontiers in Microbiology 2019 · demonstrates lactate cross-feeding to butyrate production in vitro; human in vivo quantification not available · #gap/needs-human-replication · Note: underlying PDF not verified end-to-end against this corrected DOI

[^ji2025]: [[studies/ji-2025-longlived-china-microbiome]] · pmid:39505797 · doi:10.1007/s11357-024-01419-2 · pmc:PMC11978580 · observational · n=142 individuals aged 55–102 yr (Northeastern China long-lived cohorts) · model: oral and gastrointestinal microbiome across age groups · Ji Y, Sun H, Wang Y et al. · GeroScience 2025 · *Ligilactobacillus salivarius* (formerly *L. salivarius*) enriched in long-lived group · #gap/needs-replication (single cohort, single region) · Note: underlying PDF not verified end-to-end

[^chaiyasut2024]: [[studies/chaiyasut-2024-lrhamnosus-elderly]] · pmid:38731665 · doi:10.3390/foods13091293 · pmc:PMC11083618 · rct (small n) · model: healthy elderly adults; 8-week *Lacticaseibacillus rhamnosus* supplementation · Chaiyasut C, Sivamaruthi BS, Thangaleela S et al. · Foods 2024 · significant LDL improvement reported; small sample, short duration · #gap/needs-replication · Note: underlying PDF not verified end-to-end

[^zhou2024]: [[studies/zhou-2024-fmt-centenarian-aging-mice]] · pmid:38647087 · doi:10.1021/acs.jafc.3c09815 · in-vivo · model: D-galactose-induced aging mice; centenarian-derived *Bifidobacterium bifidum* LTBB21J1 + *Lacticaseibacillus casei* LTL1361 FMT · Zhou F, Zhang Q, Zheng X et al. · J Agric Food Chem 2024 · D-galactose aging model only; not a natural aging study · #gap/needs-human-replication · Note: underlying PDF not verified end-to-end
