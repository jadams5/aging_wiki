---
type: microbe
aliases: [Bifidobacteria, bifidobacteria, Bif]
ncbi-taxonomy: 1678
phylum: Actinobacteria
family: Bifidobacteriaceae
gram-stain: positive
oxygen-tolerance: anaerobic
host: "Homo sapiens (gut commensal; dominant in breastfed infants, persistent adult commensal)"
discovered: 1899 (Tissier)
genome-size-mb: "2.0–3.0 (species-dependent)"
key-strains: ["B. longum subsp. longum", "B. longum subsp. infantis (HMO-specialist)", "B. adolescentis", "B. breve", "B. bifidum", "B. animalis subsp. lactis (dominant commercial probiotic strain)"]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Primary-source claims verified against PDFs for: Claesson 2012 (10.1038/nature11319), Mariat 2009 (10.1186/1471-2180-9-123), Odamaki 2016 (10.1186/s12866-016-0708-5, main article pp.1–6), Kim 2021 (10.1093/gerona/glaa090), Asaoka 2022 (10.3233/jad-220148), Falony 2006 (10.1128/aem.01296-06), Hopkins 2001 (10.1136/gut.48.2.198). Unverifiable: Biagi 2016 (10.1016/j.cub.2016.04.016) — DOI lookup failed, abstract only; Hopkins 2002 (10.1099/0022-1317-51-5-448) — not_oa, no local PDF; Longhi 2024 (10.1163/18762891-bja00013) — not_oa, no local PDF. Canonical taxonomic identity fields not independently re-verified against NCBI Taxonomy."
---

# *Bifidobacterium* (genus)

**Taxonomic level: genus.** All claims on this page are genus-level unless explicitly attributed to a species or strain. Species and strain distinctions matter substantially for mechanism and probiotic efficacy — see "Strain specificity" below.

*Bifidobacterium* is a gram-positive, strictly anaerobic, non-motile, non-spore-forming bacterial genus comprising ~80 described species. It is the defining member of the family Bifidobacteriaceae (phylum Actinobacteria) and one of the most commercially and clinically prominent probiotic genera. In the aging context, the genus is notable for a **robust, consensus decline in abundance across the human lifespan** — from ~80% of fecal microbiota in breastfed infants to a residual and highly variable presence in elderly adults. This decline is one of the most consistently replicated findings in microbiome-aging research and is mechanistically linked to reduced SCFA cross-feeding, diminished colonization resistance against pathogens, and shifts toward a pro-inflammatory gut environment. See [[dysbiosis]] for the broader hallmark context.

## Identity

| Field | Value |
|---|---|
| Genus | *Bifidobacterium* Orla-Jensen 1924 |
| NCBI Taxonomy ID | 1678 |
| Phylum | Actinobacteria |
| Class | Actinomycetia |
| Order | Bifidobacteriales |
| Family | Bifidobacteriaceae |
| Gram stain | Positive |
| Morphology | Irregular rods, often bifurcated (Y-shaped); non-motile; non-spore-forming |
| Oxygen tolerance | Strict anaerobe (variable sensitivity across species) |
| Described species | ~80 (as of 2024) |
| First described | Tissier 1899 — isolated from breastfed infant feces; named for the bifurcated morphology |
| Genome size | 2.0–3.0 Mb (species-dependent; *B. longum* ~2.3 Mb; *B. bifidum* ~2.2 Mb) |
| G+C content | 55–67% (among highest of any gut-resident bacterial genus) |

Key human-relevant species:

| Species | Primary ecological niche / note |
|---|---|
| *B. longum* subsp. *longum* | Most abundant adult human gut bifidobacterium; folate synthesis; dominant in centenarian studies [^longhi2024] |
| *B. longum* subsp. *infantis* | HMO (human milk oligosaccharide) specialist; numerically dominant in breastfed infant gut; declines sharply post-weaning |
| *B. adolescentis* | Common in adult gut; inulin/FOS fermenter; tends to decline in elderly |
| *B. breve* | Prominent in infant gut; tested in elderly cognitive function RCTs [^asaoka2022] |
| *B. bifidum* | Mucosal-surface association; mucin glycoprotein metabolism |
| *B. animalis* subsp. *lactis* | Most commercially important probiotic strain; robust survival in food matrices; *B. animalis* is NOT a dominant native human commensal |

## Physiology and metabolism

### The bifid shunt (fructose-6-phosphate phosphoketolase pathway)

*Bifidobacterium* does not use the standard Embden-Meyerhof-Parnas glycolytic pathway. Instead it uses a distinctive **heterofermentative pathway** — the "bifid shunt" — characterized by the key enzyme **fructose-6-phosphate phosphoketolase (F6PPK)**. The presence of F6PPK is genus-defining and phylogenetically diagnostic.

Fermentation products: **acetate and lactate** in a roughly 3:2 molar ratio. Neither butyrate nor ethanol is a primary end-product, distinguishing *Bifidobacterium* from other dominant gut fermenters (Firmicutes).

The high G+C content (55–67%) of bifidobacterial genomes is an independent marker of the genus and reflects its Actinobacterial ancestry.

### Carbohydrate specialization

*Bifidobacterium* encodes an unusually rich arsenal of carbohydrate-active enzymes (CAZymes) for dietary fiber and host glycan degradation:

- **Human milk oligosaccharides (HMOs)** — *B. longum* subsp. *infantis* is the singular specialist in HMO metabolism among gut bacteria; it encodes a dedicated HMO import cassette (the *lnp* locus) and consumes 2'-FL, LNT, LNFP-I completely. This tight coevolution explains the dominance of *B. infantis* in breastfed infant guts.
- **Inulin and fructooligosaccharides (FOS)** — adult-commensal bifidobacteria (especially *B. longum* subsp. *longum*, *B. adolescentis*) are primary FOS fermenters in the adult colon. This is the basis for prebiotic interventions using inulin or FOS to enrich bifidobacterial populations (see [[prebiotics]]).
- **Galactooligosaccharides (GOS)** — efficiently fermented by multiple species; GOS + *Bifidobacterium* pairing is a primary synbiotic combination.
- **Mucin glycoproteins** — *B. bifidum* encodes extracellular mucinases and lacto-N-biosidases, enabling mucosal colonization analogous to (but distinct from) *Akkermansia muciniphila* (see [[akkermansia-muciniphila]]).

### SCFA production and cross-feeding

Although *Bifidobacterium* itself produces acetate (and lactate) rather than butyrate, it plays a critical indirect role in butyrate production via **metabolic cross-feeding**: bifidobacterial acetate is the carbon substrate for acetate-dependent butyrate producers. Falony 2006 demonstrated this specifically in co-culture of *B. longum* BB536 with *Anaerostipes caccae* DSM 14662 and *Roseburia intestinalis* DSM 14610 growing on oligofructose [^falony2006]. The cross-feeding axis means that *Bifidobacterium* depletion (as seen in aging) reduces the acetate pool available to butyrate producers — contributing to the reduced fecal butyrate concentrations observed in elderly cohorts. See [[scfa-signaling]].

| Metabolite | Direct producer? | Role in aging context |
|---|---|---|
| Acetate | Yes (primary) | Cross-fed to butyrate producers; anti-inflammatory; gut-brain axis signaling via GPR43/FFAR2 |
| Lactate | Yes (primary) | Cross-fed to lactate utilizers (*Veillonella*, *Anaerostipes*) |
| Butyrate | No (indirect, via cross-feeding) | Key HDAC inhibitor; colonocyte fuel; anti-inflammatory via GPR109A |
| Folate | Yes (*B. longum*, some *B. bifidum*) | B-vitamin synthesis; methylation cycle; nutritional contribution decreases with age-related Bifidobacterium loss |

## Abundance dynamics across the lifespan

The age-related trajectory of *Bifidobacterium* is among the most robustly replicated patterns in microbiome research:

| Life stage | Relative abundance | Notes |
|---|---|---|
| Breastfed newborn | ~60–80% of fecal microbiota | *B. infantis* dominant; HMO-dependent |
| Formula-fed infant | ~20–40% | Lower and less diverse than breastfed |
| Post-weaning (toddler) | Rapid decline | HMO substrate lost; diet transition |
| Young adult (20–40 yr) | ~2–8% | Sustained primarily by dietary fiber |
| Middle-aged adult (40–60 yr) | ~1–5% | Gradual further decline |
| Elderly (>65 yr) | <1–3%; higher individual variability | Marked decline vs young adults [^claesson2012] [^odamaki2016] |
| Semi-supercentenarian (105–109 yr) | Enriched relative to elderly 70–99 yr | Counterintuitive; possible healthy-aging signal [^biagi2016] |

### Primary evidence for age-related decline

**Claesson 2012 ELDERMET cohort** (n=178 elderly community-dwelling and nursing-home Irish adults vs young adult comparators): sequenced 16S rRNA from all subjects; demonstrated that elderly community-dwelling adults had lower *Bifidobacterium* relative abundance than young adults, with further depletion in nursing-home residents. Microbiome diversity correlated strongly with diet quality; long-term residents of care facilities had the least diverse and most proinflammatory-marker-associated gut microbiota [^claesson2012].

**Odamaki 2016** (BMC Microbiology; n=367 Japanese subjects spanning newborn to centenarian, cross-sectional): 16S amplicon sequencing stratified by decade of life. *Bifidobacterium* relative abundance was highest in infants, declined steeply through childhood and early adulthood, and continued declining into the 60s, 70s, and 80s — confirming the lifelong trajectory. Centenarians showed modestly higher *Bifidobacterium* than 70–80 year olds in this cohort, consistent with the longevity-enrichment signal [^odamaki2016]. #gap/needs-replication — single-country, cross-sectional design; diet/lifestyle confounds uncontrolled.

**Hopkins 2001 / 2002** (Gut and J Med Microbiol; UK elderly cohorts): among the earliest polyphasic (culture + 16S rRNA + cellular fatty acid profiling) studies documenting reduced bifidobacterial diversity and abundance in elderly individuals vs young adults [^hopkins2001] [^hopkins2002]. Hopkins 2001 used very small group sizes — n=10 children, n=7 adults, n=5 elderly (n=4 analyzed in culture experiments), n=4 CDAD patients — and is better classified as a proof-of-concept characterization study than a large cohort study. The bifidobacterial decline in the elderly group was directionally clear but individual variation was high (two of four elderly subjects had undetectable bifidobacteria). #gap/no-fulltext-access — Hopkins 2002 is closed-access; claims from this source unverified against full PDF.

**Mariat 2009** (BMC Microbiology; n=62 subjects across three age groups — infants n=21, adults n=21, elderly n=20; age range 70–90 yr for elderly): used qPCR to quantify dominant bacterial groups. Bifidobacterium was the numerically dominant group in infants, then declined sharply; in adults and elderly the Bifidobacterium levels (normalized Δlog10) were equivalent (−2.3 ±0.3 in both adult and elderly groups), though absolute numbers were greatly reduced from infancy. The key reported finding was the Firmicutes/Bacteroidetes ratio: infants 0.4, adults 10.9, elderly 0.6 — demonstrating major microbiota restructuring with age. No centenarians were included in this study [^mariat2009].

### Extreme longevity — enrichment signal

**Biagi 2016** (Current Biology; n=24 semi-supercentenarians 105–109 yr, vs elderly 65–75 yr and young adults 22–48 yr, Italian cohort): semi-supercentenarians — despite (or perhaps because of) extreme age — showed **enriched** *Bifidobacterium* relative to the 65–75 yr elderly group. The authors proposed that maintenance of certain beneficial commensals, including *Bifidobacterium*, may be a signature of exceptional healthy aging [^biagi2016]. The dominant *Bifidobacterium* species in centenarians in this and the Longhi 2024 analysis was *B. longum* subsp. *longum* [^longhi2024]. **Verification note:** the Biagi 2016 PDF could not be retrieved from the archive (download failed; no accessible OA URL resolved) — the group compositions and enrichment direction are cross-checked against the paper's abstract and footnote metadata only. Numeric abundance values and specific p-values from the body Results section could not be verified. #gap/no-fulltext-access (Biagi 2016 body unverified).

This is **not** in contradiction with the overall age-decline narrative: the hypothesis is that *Bifidobacterium* decline is a marker of typical (often unhealthy) aging, whereas exceptional longevity is associated with *preservation* of beneficial microbial communities. However:

- Cross-sectional design + survivor selection bias (centenarians are a highly selected population)
- Small n in the extreme-age group
- Italy-specific diet and lifestyle; no proof of generalizability

#gap/needs-replication — longitudinal tracking of *Bifidobacterium* across the full lifespan in the same individuals has not been published. #gap/contradictory-evidence — whether centenarian Bifidobacterium enrichment reflects cause or consequence of healthy aging cannot be resolved from cross-sectional data.

## Mechanisms of age-related decline

Several converging factors reduce *Bifidobacterium* colonization in the aging gut:

1. **Reduced prebiotic substrate intake** — elderly individuals consume less dietary fiber (inulin, FOS, GOS) due to reduced appetite, dentition problems, and dietary restriction; this reduces the substrate pool supporting bifidobacterial growth.
2. **Atrophic gastritis and gastric hypochlorhydria** — common in elderly (affects ~30–40% of those >60 yr); altered gastric acid secretion changes intestinal pH and nutrient availability, favoring different bacterial guilds.
3. **Antibiotic exposure** — accumulated lifetime antibiotic courses disproportionately deplete *Bifidobacterium* (strict anaerobe; sensitive to broad-spectrum agents); recovery after courses is incomplete in elderly.
4. **Reduced mucosal IgA secretion** — age-related decline in secretory IgA (sIgA) alters the luminal microenvironment that selects for commensal colonization.
5. **Colonic transit slowing** — reduced motility in aging changes substrate availability and fermentation milieu.
6. **Loss of HMO exposure** — the weaning transition in infancy is the primary driver of the initial decline; post-weaning fiber type and quantity then governs the adult setpoint.

## Aging-relevance mechanisms

### 1. SCFA cross-feeding and butyrate supply

See "SCFA production and cross-feeding" above. Butyrate is the primary colonocyte fuel, an HDAC inhibitor affecting epigenetic regulation, and a ligand for GPR109A on immune cells that suppresses NF-κB signaling. *Bifidobacterium* depletion reduces acetate cross-feeding to butyrate producers, compounding the loss of butyrate that occurs independently through Firmicutes decline. The net effect on aging is a reduction in colonocyte metabolic fitness and an increase in local and systemic inflammation. See [[scfa-signaling]] and [[chronic-inflammation]].

### 2. Colonization resistance against pathogens

*Bifidobacterium* colonizes the intestinal mucosa and competes with Enterobacteriaceae (including *E. coli*, *Klebsiella*, *Proteobacteria* more broadly) for adhesion sites and carbohydrate substrates. Elderly subjects typically show a **bloom of Proteobacteria** paralleling *Bifidobacterium* decline [^claesson2012] — this "inflammaging" microbial signature may be partly attributable to competitive release following commensal loss. #gap/no-mechanism — the precise molecular competition mechanisms between *Bifidobacterium* and opportunistic Enterobacteriaceae in the aging gut have not been fully characterized.

### 3. Immune modulation

Specific *Bifidobacterium* species interact with intestinal epithelial cells and mucosal immune cells:

- **TLR2 engagement** — *Bifidobacterium* cell-wall lipoteichoic acid (LTA) engages TLR2, promoting regulatory rather than inflammatory downstream signaling (in contrast to LPS/TLR4 — the Proteobacterial-endotoxin axis).
- **Regulatory T cell induction** — some *Bifidobacterium* strains have been shown to promote Foxp3+ Treg differentiation in murine models. #gap/needs-human-replication — this is largely strain-specific and demonstrated in mouse germ-free models; human data are limited.
- **IgA co-stimulation** — commensal bacteria including *Bifidobacterium* stimulate mucosal IgA secretion, contributing to the protective mucus-layer immune barrier.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — TLR2/LTA signaling conserved; Treg-induction strain-specific and not confirmed in humans at scale |
| Phenotype conserved in humans? | partial — colonization resistance and SCFA effects plausible; direct mechanistic proof limited |
| Replicated in humans? | in-progress — probiotic RCTs show downstream health outcomes but mechanism confirmation lags |

### 4. Folate and riboflavin synthesis

Several *Bifidobacterium* species (notably *B. longum*, *B. bifidum*, *B. adolescentis*) synthesize folate (vitamin B9) and riboflavin (vitamin B2) de novo. Folate is required for one-carbon metabolism, methylation cycle function, and DNA synthesis/repair. Age-related *Bifidobacterium* depletion may modestly reduce microbial folate contribution. The quantitative impact in typical elderly diets (where folate fortification is common) is unclear. #gap/needs-replication.

## Probiotic and therapeutic context

### Representative RCTs in elderly populations

*Bifidobacterium* is the most-tested probiotic genus in human elderly trials, with dozens of registered and completed trials. Evidence is heterogeneous — effect sizes are generally modest and outcomes vary by species, strain, dose, and outcome measured.

**Kim 2021** (Journals of Gerontology Series A; n=63 randomized, n=53 analyzed; community-dwelling adults ≥65 yr; 12-week RCT): *B. bifidum* BGN4 + *B. longum* BORI improved cognitive function (particularly mental flexibility and memory) and mood, and increased serum BDNF relative to placebo. The treated group showed significantly reduced relative abundances of *Eubacterium*, *Allisonella*, Clostridiales, and Prevotellaceae — as well as enrichment of the administered strains [^kim2021]. Limitation: single-center; modest analyzed n (53); cognitive measures were secondary endpoints.

**Asaoka 2022** (Journal of Alzheimer's Disease; n=130 randomized, n=115 analyzed in the full analysis set — probiotic n=55, placebo n=60; adults 65–88 yr with suspected MCI; 24-week RCT, PDF locally available): MCI was determined by DSM-5 clinical criteria plus MMSE score 22–26 and CDR=0.5. *B. breve* MCC1274 supplementation (2×10^10 CFU/day) improved orientation subscale scores on the ADAS-Jcog cognitive assessment. In the subgroup with baseline VSRAD atrophy Z-score ≥1.0 (n=89), the probiotic group showed significantly suppressed brain atrophy progression on MRI volumetrics compared to placebo [^asaoka2022]. Limitation: the brain-atrophy result was a subgroup effect; mechanism not established.

The general picture from meta-analyses of Bifidobacterium probiotic RCTs in elderly is:
- Modest and inconsistent effects on immune markers (e.g., NK cell activity, vaccination response)
- Some benefit in reducing upper respiratory infection incidence (modest effect sizes; heterogeneous strains)
- Emerging signal for gut-brain axis effects (cognitive flexibility, mood); mechanistic basis (IPA, BDNF) plausible but requires larger confirmatory trials

**All-cause mortality / longevity**: no RCT has tested Bifidobacterium supplementation against lifespan or all-cause mortality as a primary endpoint in humans. #gap/long-term-unknown.

### Prebiotic enrichment

Dietary supplementation with inulin, FOS, or GOS selectively enriches *Bifidobacterium* within 2–4 weeks in elderly subjects. This is one of the most reproducible diet-microbiome interventions. See [[prebiotics]] for intervention-class context. #gap/dose-response-unclear — the prebiotic dose, fiber type, and duration required to sustain clinically meaningful *Bifidobacterium* enrichment in elderly are not precisely defined.

### Synbiotics

Combining a Bifidobacterium probiotic with a prebiotic substrate (e.g., *B. longum* + inulin; *B. animalis* subsp. *lactis* + GOS) — a "synbiotic" formulation — typically produces larger and more durable increases in fecal Bifidobacterium counts than either component alone. The clinical relevance of this augmentation for aging-relevant outcomes has not been confirmed in adequately powered trials.

### FMT (fecal microbiota transplant)

Young-donor FMT has been shown to transfer Bifidobacterium-enriched microbiota to aged recipients in preclinical models (including the Xu 2022 aged mouse ovarian function study using young-donor FMT, PMID 35654347). Whether FMT-driven Bifidobacterium restoration translates to aging-relevant clinical outcomes in humans has not been tested. See [[fmt]].

## Strain specificity — an important caveat

A recurring confound in the *Bifidobacterium* aging literature is the frequent conflation of genus-level, species-level, and strain-level observations:

- **Genus-level abundance trends** (the aging-decline signal) are reported with 16S rRNA sequencing at the genus level — robust across cohorts.
- **Species-level distinctions** matter for mechanism: *B. infantis* is HMO-specialist; *B. adolescentis* is inulin specialist; *B. bifidum* is mucosa-adherent; *B. animalis* subsp. *lactis* is the dominant commercial probiotic strain but is NOT a dominant native human commensal in adults.
- **Strain-level distinctions** matter for probiotic efficacy: the MCC1274 strain of *B. breve* used in Asaoka 2022 has specific adhesion and metabolic properties that may not generalize to other *B. breve* strains. Commercial preparations may not contain the clinically-tested strain.

This multi-level complexity means that genus-level prebiotic enrichment data should not be conflated with strain-specific probiotic RCT data, and vice versa. #gap/needs-replication — many genus-level prebiotic enrichment findings have not been validated at the species and strain resolution.

## Gaps

- #gap/long-term-unknown — No human RCT has tested Bifidobacterium supplementation for all-cause mortality, functional longevity, or lifespan extension. All clinical endpoints are surrogate (cognitive function, immune markers, inflammatory biomarkers).
- #gap/needs-human-replication — Treg induction and most immune-modulation findings are from germ-free mouse models; human mechanistic data are lacking.
- #gap/needs-replication — Centenarian Bifidobacterium enrichment signal (Biagi 2016, Odamaki 2016) is cross-sectional; a causal role in healthy aging vs survivor selection bias is unresolved. Longitudinal data needed.
- #gap/contradictory-evidence — Typical aging shows *Bifidobacterium* decline, while extreme longevity (centenarians) shows relative enrichment — these are not mutually exclusive but the mechanistic interpretation remains contested.
- #gap/dose-response-unclear — Optimal probiotic dose, strain, duration, and frequency for aging-relevant outcomes in elderly have not been established; commercial formulations vary widely.
- #gap/no-mechanism — Molecular competition mechanisms between *Bifidobacterium* and blooming Proteobacteria in the aging gut are not fully characterized at the protein/gene level.
- #gap/unsourced — Riboflavin/folate synthesis contribution to aging host nutrition needs primary-source quantification; #gap/needs-replication.
- **Wiki coverage stubs needed:** [[gut-microbiome-aging-shifts]], [[scfa-signaling]], [[lactobacillus]], [[prebiotics]], [[postbiotics]], [[fmt]], [[bifidobacterium-supplementation]].

## See also

- [[dysbiosis]] — the aging hallmark to which *Bifidobacterium* decline is most directly linked
- [[chronic-inflammation]] — downstream consequence of SCFA loss and colonization resistance failure
- [[akkermansia-muciniphila]] — co-declining beneficial commensal; mucus-layer specialist
- [[gut-microbiome-aging-shifts]] — overview entity page for the full aging microbiome trajectory
- [[scfa-signaling]] — acetate, butyrate, and downstream effects on aging biology
- [[lactobacillus]] — co-dominant probiotic genus; parallel aging-decline trajectory
- [[interventions/dietary/probiotics]] — intervention class page covering *Bifidobacterium*-strain RCT evidence (B. infantis 35624 / Align, B. animalis lactis HN019, B. breve MCC1274) for GI-symptom and aging endpoints; low-gas-strain section relevant to fiber-adaptation contexts
- [[prebiotics]] — dietary interventions (inulin, FOS, GOS) that selectively enrich *Bifidobacterium*
- [[postbiotics]] — pasteurized or lysed probiotic preparations; alternative to live bacteria
- [[fmt]] — fecal microbiota transplant as a *Bifidobacterium*-restoration strategy in aging

## Footnotes

[^claesson2012]: [[studies/claesson-2012-eldermet]] · doi:10.1038/nature11319 · observational (cross-sectional cohort) · n=178 elderly adults (community-dwelling + nursing-home) · model: Irish elderly cohort vs young adult comparators · Claesson MJ et al. · Nature 2012 · PDF locally available  · cited ~3179 times

[^odamaki2016]: [[studies/odamaki-2016-bifidobacterium-age-cohort]] · doi:10.1186/s12866-016-0708-5 · observational (cross-sectional) · n=367 · model: Japanese subjects newborn to centenarian, stratified by decade; 16S amplicon sequencing · Odamaki T et al. · BMC Microbiology 2016 · OA gold; PDF locally verified (main article pp.1–6) · cited ~1456 times

[^mariat2009]: [[studies/mariat-2009-firmicutes-bacteroidetes-age]] · doi:10.1186/1471-2180-9-123 · observational (cross-sectional) · n=62 subjects three age groups (infants n=21, adults n=21, elderly n=20; age 70–90 yr) · model: French infants, adults, and elderly; qPCR-based quantification of dominant bacterial groups · Mariat D et al. · BMC Microbiology 2009 · OA gold; PDF locally verified · cited ~1703 times

[^biagi2016]: [[studies/biagi-2016-extreme-longevity-microbiota]] · doi:10.1016/j.cub.2016.04.016 · observational (cross-sectional) · n=24 semi-supercentenarians (105–109 yr), n=25 elderly (65–75 yr), n=20 young adults · model: Italian cohort · Biagi E, Franceschi C, Rampelli S et al. · Current Biology 2016 · OA green; PDF pending download · cited ~951 times

[^hopkins2001]: [[studies/hopkins-2001-age-disease-intestinal-bacteria]] · doi:10.1136/gut.48.2.198 · observational · n=10 children, n=7 adults, n=5 elderly (n=4 analyzed), n=4 CDAD patients · model: UK subjects; polyphasic culture + 16S + cellular fatty acid profiling · Hopkins MJ et al. · Gut 2001 · PDF locally verified · cited ~573 times

[^hopkins2002]: [[studies/hopkins-2002-predominant-bacteria-age]] · doi:10.1099/0022-1317-51-5-448 · observational · model: UK elderly cohort; culture-based enumeration · Hopkins MJ et al. · J Med Microbiol 2002 · #gap/no-fulltext-access (not_oa; claims from this source unverified against full PDF)

[^falony2006]: [[studies/falony-2006-bifidobacterium-cross-feeding]] · doi:10.1128/aem.01296-06 · in-vitro · model: *B. longum* BB536 co-culture with *Anaerostipes caccae* DSM 14662 and *Roseburia intestinalis* DSM 14610 on oligofructose · Falony G et al. · Applied and Environmental Microbiology 2006 · OA green; PDF locally verified · cited ~346 times

[^asaoka2022]: [[studies/asaoka-2022-bbreve-cognitive-mci]] · doi:10.3233/jad-220148 · rct · n=130 (65–88 yr; suspected MCI) · 24 weeks; *B. breve* MCC1274 2×10^10 CFU/day vs placebo · Asaoka D et al. · Journal of Alzheimer's Disease 2022 · PDF locally available  · cited ~129 times

[^kim2021]: [[studies/kim-2021-bifidobacterium-cognition-elderly-rct]] · doi:10.1093/gerona/glaa090 · rct · n=63 randomized (≥65 yr community-dwelling); n=53 analyzed · 12 weeks; *B. bifidum* BGN4 + *B. longum* BORI vs placebo · Kim CS et al. · Journals of Gerontology Series A 2021 · OA hybrid; PDF locally verified · cited ~483 times

[^longhi2024]: [[studies/longhi-2024-bifidobacterium-longum-centenarians]] · doi:10.1163/18762891-bja00013 · observational + in-vitro · model: centenarian gut microbiota characterization; *B. longum* subsp. *longum* strain immune modulation assays · Longhi G et al. · Beneficial Microbes 2024 · #gap/no-fulltext-access (not_oa; claims from this source unverified against full PDF)
