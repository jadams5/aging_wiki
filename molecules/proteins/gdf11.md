---
type: protein
aliases: [GDF-11, growth differentiation factor 11, BMP-11, bone morphogenetic protein 11]
uniprot: O95390
ncbi-gene: 10220
hgnc: 4216
ensembl: ENSG00000135414
genage-id: 309
mouse-ortholog: Gdf11
key-domains: [TGF-beta-family, signal-peptide, propeptide, mature-domain]
key-ptms: [proteolytic-cleavage-at-R298]
pathways: ["[[tgf-beta]]", "[[smad2-3-signaling]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
known-interactors: ["[[actriia]]", "[[actriib]]", "[[alk4]]", "[[alk5]]", "[[myostatin]]"]
druggability-tier: null
sens-categories: []
caused-by: []
causes: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Loffredo 2013, Egerman 2015, and Smith 2015 primary-source PDFs verified in full. McPherron 1999 is closed-access (not_oa); developmental-biology claims from that paper not independently re-verified. Sinha 2014 and Katsimpardi 2014 remain pending download; claims sourced from those papers are tagged accordingly. Canonical-database identity fields (UniProt O95390, NCBI Gene 10220) not independently re-verified against databases."
---

# GDF11 (Growth/Differentiation Factor 11)

GDF11 is the most-contested protein in heterochronic-parabiosis aging research. A 2013 Cell paper (Loffredo et al., Wagers/Lee labs, Harvard) proposed that GDF11 is a circulating "rejuvenation factor" that declines with age and reverses cardiac hypertrophy when restored. A 2015 Cell Metabolism paper (Egerman et al., Novartis) directly contradicted this: using a GDF11-specific custom immunoassay (validated to not detect myostatin), GDF11 was found to show a trend toward increasing with age in rat and human serum, and to *inhibit* rather than promote muscle regeneration. The central methodological dispute — whether the SOMAmer-based proteomics reagents and antibodies used by Loffredo and Sinha cross-react with the closely related protein [[myostatin]] (GDF-8, **90% sequence identity** at the mature domain per Egerman 2015) — has not been formally adjudicated by a referee study using all assay types in the same animals. The GDF11-as-rejuvenation-factor hypothesis is now largely abandoned in mainstream aging biology, but the heterochronic-parabiosis tissue rejuvenation effects it was invoked to explain are real and remain mechanistically unexplained. #gap/contradictory-evidence

## Identity

- **UniProt:** O95390 (GDF11_HUMAN) — Swiss-Prot reviewed (highest confidence)
- **NCBI Gene:** 10220
- **HGNC symbol:** GDF11
- **HGNC ID:** 4216
- **Ensembl:** ENSG00000135414
- **GenAge ID:** 309 (included due to contested aging-related evidence)
- **Mouse ortholog:** Gdf11 (highly conserved; one-to-one ortholog)
- **Precursor length:** 407 amino acids (human canonical isoform)
- **Mature peptide:** residues ~299–407 (109 aa); cleaved from propeptide by BMP1/tolloid metalloproteases
- **Active form:** homodimer, disulfide-linked; secreted

**Aliases and disambiguation:** GDF-11 = BMP-11 = bone morphogenetic protein 11. Despite the "BMP" alias, GDF11 signals through ActRII receptors (not the BMPR1/BMPR2 system used by classical BMPs), and its biology more closely parallels [[myostatin]] (GDF-8) than canonical BMPs.

## Protein structure and domains

GDF11 is a member of the TGF-beta superfamily, subfamily: BMP/GDF group [^mcpherron1999]. Structural features:

- **Signal peptide** — directs secretory pathway trafficking
- **Propeptide (latency-associated peptide)** — keeps the ligand in a latent form; cleaved by BMP1/tolloid-class proteases in the extracellular space. The propeptide remains non-covalently associated in the "small latent complex" form. The R298Q missense variant (associated with vertebral hypersegmentation, VHO — a congenital disorder) impairs this cleavage, reducing SMAD2/3 signaling capacity.
- **Mature domain (C-terminal, ~109 aa)** — contains the characteristic cystine-knot motif and seven conserved cysteines; forms homodimers via disulfide bridge at the "wrist" interface. **90% amino acid sequence identity with [[myostatin]] (GDF-8)** at the mature domain level [^egerman2015] — the key fact underlying the reagent-specificity dispute.

## Receptor system and signaling

GDF11 activates the canonical TGF-beta / activin pathway [^mcpherron1999]:

1. GDF11 (dimer) binds **ActRIIB** (high affinity) or **ActRIIA** (lower affinity) as the type-II receptor
2. Type-II receptor recruits and trans-phosphorylates type-I receptors **ALK4**, **ALK5**, or **ALK7**
3. Active type-I receptor phosphorylates **SMAD2** and **SMAD3**
4. pSMAD2/3 complex with SMAD4, translocates to nucleus, regulates target gene transcription
5. Negative feedback via SMAD7 (transcriptional target that inhibits the receptor complex)

This is the same receptor-effector system used by [[myostatin]] and activins. The receptor overlap means that GDF11 and myostatin are functionally similar at the signaling level — both signal through SMAD2/3 and both are inhibited by the decoy receptor FSTL3 and by follistatin. This similarity makes interpretations based on downstream readouts alone ambiguous.

**Known physiological roles (pre-aging literature):** Anterior-posterior axial patterning during vertebrate development; regulation of kidney and olfactory epithelium development [^mcpherron1999]. GDF11 null mice die perinatally with posterior transformation of the axial skeleton (extra ribs, extra vertebrae) — consistent with a developmental signaling role, not an aging-specific one.

## The heterochronic-parabiosis story: 2013–2014

In the 2013–2014 period, three high-profile papers from the Wagers and Lee laboratories (Harvard/Joslin) proposed GDF11 as a circulating factor that declines with age and mediates the rejuvenating effects of young blood on old tissues.

### Loffredo 2013 (Cell) — cardiac hypertrophy

Loffredo et al. reported that heterochronic parabiosis (surgically joining young and old mice to share circulation) reversed age-related cardiac hypertrophy in old mice [^loffredo2013]. They identified GDF11 as a candidate factor declining with age in mouse serum using **SOMAscan broad-scale aptamer-based proteomics** (SomaLogic; EDTA plasma from 20 mice analyzed; 1,001 proteins screened), which identified 13 analytes reliably distinguishing young from old mice. GDF11 emerged as a top candidate. The age-decline was confirmed by western blot using an Abcam anti-GDF11 antibody. They then showed that daily intraperitoneal injection of recombinant GDF11 (0.1 mg/kg) for 30 days reduced cardiac hypertrophy in aged C57BL/6 female mice (23 months old): heart weight/tibia length ratio 8.03 ± 0.38 vs 9.07 ± 0.24 mg/mm in saline controls (p < 0.05; n=18 GDF11, n=22 saline in the CD45.2-only experiment; n=16 GDF11, n=13 saline in the primary experiment shown in Fig 7D). Cardiomyocyte cross-sectional area was also significantly reduced. Wagers and Lee proposed GDF11 as the primary mediator of the heterochronic-parabiosis cardiac effect.

**Methodological detail (critical):** The GDF11 SOMAmer used for discovery and the Abcam anti-GDF11 antibody used for western blot confirmation were not validated for GDF11/GDF8 cross-reactivity at the time of publication. Subsequent work (Egerman 2015, Smith 2015) showed both reagents cross-react with myostatin.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (TGF-beta/ActRII pathway) |
| Phenotype conserved in humans? | unknown (cardiac hypertrophy common in aging; GDF11 role unconfirmed) |
| Replicated in humans? | no — contradicted by Egerman 2015 and Smith 2015 |

#gap/contradictory-evidence #gap/needs-human-replication

### Sinha 2014 (Science) — skeletal muscle

Sinha et al. (also Wagers/Lee) extended the GDF11 hypothesis to [[sarcopenia|age-related muscle decline]] [^sinha2014]. They reported that systemic GDF11 administration in aged mice improved muscle mass and function, including satellite cell (stem cell) number and regenerative capacity, reversing an age-related decline attributed to falling GDF11 levels. The paper was published in the same issue of Science as Katsimpardi 2014. **Note: Sinha 2014 PDF not yet downloaded (pending); specific quantitative claims from this paper have not been independently verified against the source.** #gap/no-fulltext-access

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial (satellite cell aging is conserved; GDF11 role contested) |
| Replicated in humans? | contradicted — see Egerman 2015 |

#gap/contradictory-evidence

### Katsimpardi 2014 (Science) — brain vasculature and neurogenesis

Katsimpardi et al. reported that heterochronic parabiosis and GDF11 administration improved cerebrovascular structure (increased cerebral blood flow, vessel diameter) and neurogenesis (increased subventricular zone neuroblast density) in aged mice [^katsimpardi2014]. This was the broadest claim: GDF11 as a systemic rejuvenation factor across multiple tissue types. **Note: Katsimpardi 2014 PDF not yet downloaded (pending); specific quantitative claims from this paper have not been independently verified against the source.** #gap/no-fulltext-access

## The dispute: Egerman 2015 and Smith 2015

### Egerman 2015 (Cell Metabolism) — GDF11 increases with age; inhibits regeneration

Egerman et al. (Novartis Institute for Biomedical Research) published a direct rebuttal using improved assay methodology [^egerman2015]. Key findings:

1. **GDF11 levels show a trend toward increasing with age** — using a newly developed **GDF11-specific custom immunoassay** (MULTI-ARRAY plate coated with mouse anti-human GDF11 clone 743833; validated to not detect myostatin — Figures S2A and S2B), Egerman et al. found that GDF11 protein levels in rat serum were **~1.4-fold higher** in old (24-month) vs young (6-month) Sprague-Dawley rats (p = 0.0534; a trend, not significant at p < 0.05). In elderly humans (>60 years vs 20–30 years), the median GDF11 level was also higher, but this did not reach statistical significance. In young and old mice, GDF11 was **below the detection limit** of this assay and could not be measured. This is the opposite direction from what Loffredo 2013 reported, though the individual species results did not reach p < 0.05.

2. **Prior reagents cross-react with myostatin** — Egerman et al. showed that the GDF11 SOMAmer used by Loffredo/Sinha in their proteomic screen bound both GDF11 (Kd = 6.6 ± 1.1 nM) and myostatin (Kd = 11.8 ± 1.1 nM) in a direct binding test (DELFIA assay). The Abcam anti-GDF11 antibody used by Loffredo/Sinha for western blot confirmation also cross-reacted with myostatin, recognizing both recombinant proteins to a similar degree. The GDF11 "decline with age" detected by Loffredo may actually represent a decline in myostatin (or the GDF11+myostatin sum), not GDF11 alone. Note: Egerman's paper does not describe this as "commercial ELISA" — it was SOMAscan aptamer proteomics (for Loffredo's screen) and a western blot antibody (Abcam) for confirmation.

3. **GDF11 inhibits muscle regeneration** — consistent with myostatin biology (a well-established negative regulator of muscle growth), supraphysiological GDF11 in the Egerman experiments inhibited satellite cell differentiation and reduced muscle fiber cross-sectional area. This is the **opposite** functional direction from Sinha 2014.

4. **Myostatin (GDF-8) declines with age in mice** — Egerman proposed that what Loffredo/Sinha measured as "GDF11" was largely or entirely myostatin, and that it is myostatin (not GDF11) that declines. Since myostatin is a negative regulator, its decline with age may reduce muscle-regeneration inhibition — which would be consistent with (but does not prove) some of the parabiosis phenotypes.

**Egerman's conclusion:** GDF11 is not a rejuvenation factor; it functions more like its close paralog myostatin (anti-myogenic, pro-atrophic at high levels).

#gap/contradictory-evidence

### Smith 2015 (Circulation Research) — cardiac replication failure

Smith et al. (Temple University School of Medicine, Philadelphia; with Boehringer Ingelheim co-authors) independently tested whether recombinant GDF11 treatment reverses age-related cardiac hypertrophy, directly replicating the Loffredo 2013 design [^smith2015]. They treated 24-month-old C57BL/6 male mice with rGDF11 (0.1 mg/kg daily i.p.) or vehicle for **28 days** (n=21 GDF11, n=22 vehicle). They found no significant effect of GDF11 on heart weight, body weight, heart weight/body weight ratio, heart weight/tibia length ratio, cardiomyocyte cross-sectional area, cardiac fibrosis, ejection fraction, fractional shortening, septal or posterior wall thickness, or intra-LV pressures. Importantly, they also found that the heart weight/body weight ratio of 24-month-old mice was **not significantly different from 8- or 12-week-old mice**, questioning whether age-related pathological cardiac hypertrophy even exists as a phenotype in disease-free C57BL/6 mice. For GDF11 measurement, Smith used an **R&D Systems antibody-based immunoassay** validated to detect GDF11 but not myostatin (not mass spectrometry — this was antibody-based). Endogenous GDF11 was below the quantification limit (0.1 ng/mL) in both young and old mice, so Smith could not determine whether GDF11 declines with age. Smith also found that rGDF11 **induced** rather than blocked phenylephrine-induced hypertrophy in neonatal rat ventricular myocytes, in direct contradiction to Loffredo 2013.

**Summary of the methodological dispute:**

| Assay type | Study | GDF11 age-trend | Specificity concern |
|---|---|---|---|
| SOMAscan aptamer proteomics (discovery) + Abcam anti-GDF11 Ab (confirmation) | Loffredo 2013, Sinha 2014 | Declines with age | High: SOMAmer binds both GDF11 (Kd 6.6 nM) and GDF8 (Kd 11.8 nM); Abcam Ab cross-reacts with myostatin |
| Custom GDF11-specific immunoassay (anti-human GDF11 clone 743833; validated not to detect myostatin) | Egerman 2015 | Trend toward increase in rat serum (p=0.0534); trend in humans (ns); below detection in mice | Moderate: validated in-house by Novartis; not independently certified; mice below detection limit |
| Antibody-based immunoassay (R&D Systems anti-GDF11; validated not to detect myostatin) | Smith 2015 | Below quantification limit in both young and old mice; cannot determine age-trend | Moderate: antibody-validated in-house; endogenous GDF11 below detection — age-trend cannot be assessed |

The Smith 2015 antibody-based assay (R&D Systems; GDF11-specific) found endogenous GDF11 below quantification limits in both young and old mice, making age-trend assessment impossible — but this itself argues against the Loffredo claim of a robust, quantifiable age-dependent decline. Both replication studies (Egerman and Smith) used GDF11-specific reagents validated not to cross-react with myostatin, unlike the original Loffredo/Sinha reagents. Neither study used mass spectrometry.

## Current state (as of 2026)

The GDF11-as-rejuvenation-factor hypothesis is largely abandoned in mainstream aging biology. The weight of post-2015 evidence — from the Egerman GDF11-specific immunoassay (trend toward increase in rats and humans) and the Smith 2015 antibody-based assay (GDF11 below detection in both young and old mice, no age-dependent decline detectable) — favors the conclusion that GDF11 does not decline with age in the manner originally claimed by Loffredo and Sinha, and likely does not mediate the heterochronic-parabiosis rejuvenation effects. Neither replication study used mass spectrometry.

**What remains unresolved:**

1. The heterochronic-parabiosis effects on aged cardiac, muscle, and neural tissue ARE real and have been independently replicated — but the molecular mediators remain unidentified. GDF11 appears to have been a false lead generated by assay cross-reactivity. #gap/no-mechanism

2. Whether myostatin (GDF-8), which does appear to decline with age in some studies, plays any role in mediating the parabiosis effects remains an open question. The [[myostatin]] page should be consulted when this is resolved.

3. Other circulating factors — including TGF-beta1, CCL11 (eotaxin), and VCAM-1 — have been proposed as age-associated pro-aging systemic factors from parabiosis experiments by Amy Wagers' lab and Saul Villeda's lab, and are now the subject of more active investigation than GDF11.

4. Some cardiac-specific preclinical literature continues to explore GDF11 in the context of heart failure models, not as an aging factor per se, but as a TGF-beta-family regulator of cardiac remodeling. Clinical translation is dormant as of 2026.

**Disease annotation (UniProt):** Heterozygous loss-of-function variants in GDF11 cause Vertebral Hypersegmentation and Orofacial anomalies (VHO), an autosomal dominant developmental disorder (supernumerary ribs, extra vertebrae, cleft palate). This is a developmental phenotype unrelated to the aging controversy.

## Why this case matters: reagent specificity as a recurring problem

The GDF11 dispute is a major cautionary case for the heterochronic-parabiosis literature more broadly. Commercial immunoassay reagents for cytokines and growth factors frequently cross-react with closely related family members — a problem that is particularly acute in the TGF-beta superfamily due to high sequence conservation in the mature domains. Several lessons apply to the wiki more generally:

- **Assay specificity must be reported and validated** for any claim about circulating factor levels, particularly in the TGF-beta superfamily.
- **Mass spectrometry or sequencing-based methods** should be required for claims that depend on distinguishing closely related paralogs.
- **Effect-size magnitude** for any heterochronic parabiosis factor should be treated with caution until the assay cross-reactivity question is closed.
- **The parabiosis effects themselves** (tissue rejuvenation) are robust observations; the factor-attribution part is fragile until the above methodology is in place.

This should be read in conjunction with the [[heterochronic-parabiosis]] literature more broadly (see [[altered-intercellular-communication]]).

## Pathway membership

- [[tgf-beta]] — GDF11 is a TGF-beta superfamily ligand (stub: pathway page does not yet exist)
- [[smad2-3-signaling]] — downstream effector axis (stub: does not yet exist; covered partially under [[mtor]] and [[tgf-beta]])
- [[insulin-igf1]] — peripheral overlap via SMAD2/3 crosstalk with IRS-1 signaling (indirect)

## Key interactors

- [[myostatin]] (GDF-8) — closest paralog; 90% sequence identity at mature domain (per Egerman 2015); shares ActRIIB/ALK4/5 receptors; the reagent-specificity dispute centers on this relationship
- ActRIIB, ActRIIA — type-II receptors (no dedicated wiki pages yet)
- ALK4, ALK5, ALK7 — type-I receptors (no dedicated wiki pages yet)
- SMAD2, SMAD3 — downstream transcriptional effectors
- Follistatin, FSTL3 — extracellular inhibitors shared with myostatin

## Gaps and open questions

- #gap/contradictory-evidence — The direction of GDF11 age-related change (increase vs. decrease) remains disputed across assay platforms. Both GDF11-specific assays (Egerman 2015 custom immunoassay; Smith 2015 R&D Systems antibody) failed to confirm the Loffredo/Sinha "decline with age" finding, but endogenous GDF11 was below detection in mice in both replication studies, precluding definitive age-trend characterization by either method.
- #gap/needs-human-replication — No adequately powered, assay-validated human study has definitively characterized GDF11 age-trajectories across the lifespan.
- #gap/no-mechanism — The actual mediators of heterochronic-parabiosis rejuvenation effects on cardiac, muscle, and brain tissue remain unidentified.
- #gap/needs-replication — The Smith 2015 finding (endogenous GDF11 below quantification limit in aged C57BL/6 mice; no cardiac rescue by rGDF11) has not been independently replicated in a large cohort. Similarly, the Egerman 2015 rat/human immunoassay trend (p=0.0534) is underpowered and requires replication.
- The druggability tier for GDF11 has not been assessed via Open Targets (ENSG00000135414 query failed); tag: #gap/no-opentargets-entry.

---

## Footnotes

[^mcpherron1999]: doi:10.1038/10320 · McPherron AC, Lawler AM, Lee SJ · *Nature Genetics* 1999 · n=Gdf11-/- mice · in-vivo · foundational characterization of GDF11 developmental function; axial patterning phenotype; not locally downloaded (closed access)

[^loffredo2013]: [[studies/loffredo-2013-gdf11-cardiac-rejuvenation]] · doi:10.1016/j.cell.2013.04.015 · parabiosis groups n=4–12/group; rGDF11 injection study n=16 (GDF11) / n=13 (saline) in primary experiment · in-vivo (heterochronic parabiosis + rGDF11 i.p. 0.1 mg/kg × 30 days) · model: aged C57BL/6 female mice (23 months) · PDF locally available: 

[^sinha2014]: [[studies/sinha-2014-gdf11-muscle]] · doi:10.1126/science.1251152 · in-vivo (aged mouse, rGDF11 injection) · model: aged C57BL/6 mice · download pending

[^katsimpardi2014]: [[studies/katsimpardi-2014-gdf11-brain]] · doi:10.1126/science.1251141 · in-vivo (heterochronic parabiosis + rGDF11) · model: aged C57BL/6 mice · download pending

[^egerman2015]: [[studies/egerman-2015-gdf11-increases-with-age]] · doi:10.1016/j.cmet.2015.05.010 · n=4 young / 4 old mice (western blot); n=4 young / 4 old rats per group (RNA-seq); n=9 older (>60y) / n=10 younger (20–30y) humans (immunoassay); satellite cell assays n=1,645–2,185 cells in triplicate · in-vivo + observational + in-vitro · model: multi-species (mouse, Sprague-Dawley rat, human) · custom GDF11-specific immunoassay (clone 743833; validated not to detect myostatin); prior SOMAmer and Abcam Ab shown to cross-react with myostatin · rat GDF11 increase ~1.4-fold, p=0.0534 (trend, not significant); human trend not significant · directly contradicts Loffredo 2013 on direction of age-effect · PDF locally available: 

[^smith2015]: [[studies/smith-2015-gdf11-no-cardiac-rescue]] · doi:10.1161/CIRCRESAHA.115.307527 · n=21 (rGDF11) / n=22 (vehicle) · in-vivo (rGDF11 0.1 mg/kg i.p. × 28 days) + antibody-based immunoassay (R&D Systems anti-GDF11; GDF11-specific) · model: aged C57BL/6 male mice (24 months) · Temple University / Boehringer Ingelheim · no effect on cardiac structure, function, or myocyte size; endogenous GDF11 below quantification limit in both young and old mice · PDF locally available: 
