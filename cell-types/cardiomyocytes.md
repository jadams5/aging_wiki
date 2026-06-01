---
type: cell-type
aliases: [cardiac myocytes, heart muscle cells, CMs]
tissue-of-origin: ["[[heart]]"]
key-markers-mouse: [α-MHC+, Troponin-I+, Connexin-43+, Nkx2-5+]
key-markers-human: [cTnT+, cTnI+, MYH7+, MYH6+, Connexin-43+, Nkx2-5+]
lineage-output: []
self-renewal: limited
aging-relevant: yes
affected-hallmarks: ["[[mitochondrial-dysfunction]]", "[[cellular-senescence]]", "[[loss-of-proteostasis]]", "[[genomic-instability]]"]
key-aging-phenotypes: ["[[heart-failure]]", "[[cardiac-fibrosis]]"]
typical-niche: "myocardium; tightly coupled to adjacent cardiomyocytes via intercalated discs; embedded in extensively vascularized stroma with fibroblasts, endothelial cells, and smooth muscle cells"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Bergmann 2009 (10.1126/science.1164680): PDF not downloadable (archive status: failed, OA URL returns no candidate PDFs); turnover rate claims (~1%/yr at 25, ~0.45%/yr at 75, <50% replaced over lifespan) verified against Crossref abstract which states these figures exactly; n=24 from wiki footnote unconfirmed against full PDF. Bergmann 2015 (10.1016/j.cell.2015.05.026): full PDF read — ploidy claim corrected (was '25–33% mononucleated', corrected to '73.6% mononucleated'), footnote updated with n and quantitative turnover data. Anderson 2019 (10.15252/embj.2018100492): full PDF read — SASP description corrected to non-canonical (Tgfb2, Gdf15, Edn3; no canonical inflammatory cytokines in purified CM fraction). Lewis-McDougall 2019 (10.1111/acel.12931): full PDF read — study is primarily about cardiac progenitor cells (CPCs), not whole-heart cardiomyocyte senescent burden; corrected attribution of 'co-injection' claim and 'aged mouse hearts more senescent cells than young' claim to CPC-specific findings; navitoclax in vivo data is from Anderson 2019, not Lewis-McDougall. Wang 2013 (10.1101/gad.215855.113): full PDF read — claims confirmed correct and consistent with pre-verified [[mcl-1]] page. Canonical-database identity fields (UniProt, NCBI Gene, ChEMBL, etc.) not applicable to this cell-type page."
---

# Cardiomyocytes

**Cardiomyocytes** are the striated, force-generating muscle cells of the myocardium. They are **predominantly post-mitotic** in the adult mammalian heart: virtually all proliferative capacity is lost within weeks of birth, and adult cardiomyocyte turnover in humans is extremely low (~1%/year at age 25, declining to ~0.45%/year at age 75) [^bergmann2009]. This makes cardiomyocyte aging qualitatively different from most other cell-type aging programs — there is no meaningful regenerative reservoir to draw on, so cellular maintenance (mitochondrial quality control, proteostasis, autophagy) must substitute for cell replacement. When cardiomyocytes are lost — through infarction, senescence, or apoptosis — the gap is filled by fibrosis rather than new contractile cells [^lewis2019]. The cumulative result of aging-associated cardiomyocyte dysfunction is a leading driver of age-related heart failure, the dominant cause of death globally.

---

## Identity

| Field | Value |
|---|---|
| Cell type | Post-mitotic contractile muscle cell of the myocardium |
| Ploidy | Predominantly mononucleated in adult humans (~73.6% mononucleated, ~25.5% binucleated, ~1.0% trinucleated); polyploidization occurs mainly in the second decade of life [^bergmann2015] |
| Size | ~100–150 µm long × ~10–25 µm wide (adult human) |
| Fraction of heart volume | ~85% of heart volume but ~33% of cell number (large cell volume per cell) |
| Mitochondrial fraction | ~30% of cell volume; among the highest mitochondrial densities of any mammalian cell type |
| Species note | Mouse cardiomyocytes are predominantly mononucleated; the binucleation/polyploidy pattern in humans is distinct and has implications for proliferative reactivation strategies |

### Key markers

| Marker | Species | Notes |
|---|---|---|
| cTnT (cardiac Troponin T) | Human | Gold-standard cardiomyocyte marker; serum cTnT is a clinical biomarker of myocardial damage |
| cTnI (cardiac Troponin I) | Human | Highly cardiac-specific; distinguishes cardiac from skeletal muscle |
| MYH7 (β-MHC) | Human | Predominant myosin heavy chain isoform in adult human ventricle |
| MYH6 (α-MHC) | Mouse (dominant in mouse ventricle) | Expressed at low level in adult human ventricle; major isoform in human atria |
| α-MHC (Myh6) | Mouse | Standard mouse cardiomyocyte marker |
| Connexin-43 (Cx43) | Human + mouse | Gap junction protein at intercalated discs; mediates electrical coupling |
| Nkx2-5 | Human + mouse | Cardiac transcription factor; nuclear marker |
| Sarcomeric α-actinin | Both | Z-disc protein; used with antibody staining to visualize sarcomere structure |

---

## Tissue context and niche

Cardiomyocytes are embedded in the **myocardium** of all four cardiac chambers, with regional specialization: ventricular cardiomyocytes are larger and generate the primary ejection force; atrial cardiomyocytes are smaller and coordinate the filling stroke. Cardiomyocytes are electrically coupled end-to-end via **intercalated discs** containing gap junctions (Connexin-43) and adherens junctions, creating a functional syncytium that propagates action potentials.

The cardiomyocyte niche includes a dense capillary network (approximately one capillary per cardiomyocyte), cardiac fibroblasts (~15–20% of heart cells by number), endothelial cells, smooth muscle cells, and macrophages. The fibroblast–cardiomyocyte paracrine axis is particularly relevant to aging: senescent cardiomyocytes secrete a non-canonical pro-fibrotic SASP (Tgfb2, Gdf15, Edn3 in mice) that activates fibroblasts and promotes cardiomyocyte hypertrophy [^anderson2019]; senescent cardiac progenitor cells also secrete a paracrine SASP that impairs residual progenitor function [^lewis2019].

---

## Function

### Contractile function

Cardiomyocytes generate contractile force through the **actin–myosin sliding filament mechanism** within sarcomeres. Each heartbeat requires:
1. Calcium influx via L-type voltage-gated Ca²⁺ channels (triggered by action potential)
2. Calcium-induced calcium release from the sarcoplasmic reticulum (ryanodine receptor 2, RyR2)
3. Calcium binding to Troponin C → conformational change in the troponin complex → myosin cross-bridge cycling
4. Active re-uptake of cytoplasmic Ca²⁺ by SERCA2a (sarcoplasmic/endoplasmic reticulum Ca²⁺ ATPase 2a) to allow relaxation

This cycle repeats ~60–100 times per minute at rest (human), demanding enormous continuous ATP production.

### Energetic demands

At rest, the human heart consumes ~6 kg of ATP per day — far exceeding the total ATP content of the organ, which must be regenerated continuously. Approximately 90% of ATP is generated via **oxidative phosphorylation** in mitochondria; the remainder comes from glycolysis. This near-total dependence on mitochondrial OXPHOS explains why [[mitochondrial-dysfunction]] is particularly catastrophic in cardiomyocytes: there is no glycolytic fallback sufficient to sustain contractile function.

### Electrical conduction

Cardiomyocytes in the sinoatrial node (SAN) are modified to act as pacemakers, generating spontaneous action potentials. Electrical propagation through gap junctions coordinates systolic contraction across the myocardium.

---

## Post-mitotic status and turnover

Adult mammalian cardiomyocytes are **post-mitotic** — they withdraw irreversibly from the cell cycle shortly after birth. In rodents, this occurs within the first week of life; in humans, within approximately the first year.

Bergmann et al. 2009 used **atmospheric ¹⁴C from Cold War nuclear weapons testing** (the "bomb-pulse" method) as a natural biological clock to measure cardiomyocyte age in post-mortem human samples. Because ¹⁴C was incorporated into DNA at the time of cell birth, the ¹⁴C content of cardiomyocyte DNA reflects the atmospheric ¹⁴C level at the time of division, allowing absolute dating [^bergmann2009]:

- Cardiomyocyte renewal rate at age 25: ~1%/year
- Cardiomyocyte renewal rate at age 75: ~0.45%/year
- Fewer than 50% of cardiomyocytes are replaced over a normal human lifespan

The 2015 Cell paper (n=51 subjects for ¹⁴C dating) refined these estimates with larger sample sizes and extended the method to non-myocyte cardiac cells [^bergmann2015]. It confirmed the low turnover rate and its decline with age — reporting <0.3%/year at age 75 in the left ventricle, and ~39% of left ventricle CMs exchanged postnatally over a 75-year lifetime. Bergmann 2015 also confirmed that the total cardiomyocyte number is established perinatally and remains constant throughout the adult lifespan. Endothelial and mesenchymal cells, by contrast, are highly dynamic (>15% and ~4%/year respectively in adulthood).

**Clinical implication of low turnover:** At ~0.45%/year, even a sustained doubling of the renewal rate would replace only ~0.9% of cardiomyocytes annually. After a major myocardial infarction, which can destroy >1 billion cardiomyocytes within hours, endogenous regeneration is effectively irrelevant. Functional recovery is instead dominated by scar formation and hypertrophic remodeling of surviving cells. This is the core biological obstacle to cardiac regenerative medicine.

| Dimension | Status |
|---|---|
| Post-mitotic status conserved in humans? | yes |
| Turnover rate measured directly in humans? | yes (Bergmann 2009 ¹⁴C bomb-pulse dating) |
| Replicated independently? | yes (Bergmann 2015; also corroborated by independent mathematical models) |

---

## Aging features

### Mitochondrial dysfunction

Cardiomyocytes are uniquely vulnerable to age-related [[mitochondrial-dysfunction]] due to their extreme dependence on OXPHOS. Aging cardiomyocytes accumulate:
- Mitochondrial DNA (mtDNA) deletions and point mutations (from decades of reactive oxygen species exposure without significant dilution by cell division)
- Decreased Complex I, III, and IV activity
- Impaired mitophagy (clearance of damaged mitochondria) — worsened by age-related decline in [[autophagy]]
- Increased mitochondrial membrane permeability → cytochrome c leak → increased apoptotic susceptibility

Cardiomyocyte-specific deletion of *Mcl1* in mice recapitulates this mitochondrial collapse phenotype: constitutive deletion causes lethal dilated cardiomyopathy within 10 days of birth, and inducible adult deletion causes fatal cardiomyopathy within ~3 weeks [^wang2013]. This establishes MCL-1 as a cardiomyocyte-critical survival factor — and explains the dose-limiting cardiac toxicity of MCL-1 inhibitors in clinical development (see [[mcl-1]]).

### Cellular senescence

Cardiomyocytes acquire markers of [[cellular-senescence]] during aging through a mechanism distinct from most proliferating cell types. Anderson et al. 2019 showed that cardiomyocyte senescence is driven by **length-independent telomere damage** — persistent DNA damage foci localized to telomere regions arise from oxidative stress, not from cell-division-mediated telomere shortening (which is irrelevant in post-mitotic cells) [^anderson2019]:

- Aged mice accumulate p21+/p16+ senescent cardiomyocytes with signs of persistent DNA damage response (γH2AX foci at telomeres)
- Senescent cardiomyocytes express a **non-canonical** pro-fibrotic, pro-hypertrophic SASP: the three identified secreted effectors from purified aged CMs are **Tgfb2, Gdf15, and Edn3** — canonical inflammatory SASP components (IL-6, IL-1β, Cxcl1) were not differentially expressed in purified CMs vs stromal fractions [^anderson2019]
- Genetic clearance of p16+ senescent cells (INK-ATTAC model) in aged mice reduced myocardial hypertrophy and fibrosis
- Pharmacological clearance with navitoclax (BCL-2/BCL-xL/BCL-w inhibitor) phenocopied the genetic clearance

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (oxidative telomere damage mechanism is plausible in humans; no direct human cardiomyocyte senescence quantification equivalent to Bergmann ¹⁴C work) |
| Phenotype conserved in humans? | partial (senescent cardiomyocytes detected in human hearts by p16/p21 immunostaining; functional SASP not characterized in primary human cardiac tissue) |
| Replicated in humans? | no #gap/needs-human-replication |

Lewis-McDougall et al. 2019 independently demonstrated that **aged-senescent cardiac progenitor cells (CPCs) directly impair heart regeneration**: >50% of CPCs isolated from human hearts of subjects >70 years old were p16INK4A+ and SA-β-gal+ (senescent), compared to ~22% in subjects aged 50–59 [^lewis2019]. In NSG mouse MI models, injection of SA-β-gal-positive senescent CPCs produced significantly worse LV function, greater infarct size, and less new cardiomyocyte formation at 28 days compared to injection of SA-β-gal-negative cycling-competent CPCs. The SASP from senescent CPCs (PAI-1, IL-8, IL-6, IGFBP-3, GM-CSF) rendered otherwise-healthy cycling CPCs senescent in conditioned-medium experiments. In aged INK-ATTAC and wild-type mice, D+Q or AP20187 senolytic treatment increased the number of small Ki67- and EdU-positive cardiomyocytes, suggesting enhanced new cardiomyocyte formation after senescent-cell clearance [^lewis2019]. This paracrine impairment mechanism operates through the SASP. #gap/needs-replication

### Proteostasis decline

Adult cardiomyocytes cannot dilute misfolded proteins by division. Protein aggregation accumulates with age, particularly under conditions of increased proteotoxic stress (e.g., isoproterenol-induced stress, hypertensive load). Key proteostasis mechanisms that decline in aging cardiomyocytes:

- **Autophagy/mitophagy** — [[mtor]] hyperactivation with age suppresses autophagosome formation; cardiomyocyte-specific autophagy deficiency (Atg5 KO) causes cardiac dysfunction that resembles aging [^gap/unsourced — cite primary Atg5 KO study when available]
- **UPS (Ubiquitin-Proteasome System)** — proteasome activity decreases ~30–50% in aged cardiomyocytes #gap/unsourced
- **Chaperone capacity** — Hsp70 and Hsp90 expression declines with age; protein refolding efficiency is reduced

### Hypertrophy and fibrosis

Age-related cardiomyocyte hypertrophy (enlargement without new cell addition) occurs as a compensatory response to increased cardiac load and cardiomyocyte loss. Hypertrophy is pathological in the long run — it increases wall stiffness, impairs diastolic filling, and predisposes to arrhythmia. Fibrosis (from SASP-activated fibroblasts and from scar tissue replacing lost cardiomyocytes) further reduces ventricular compliance. Together, hypertrophy + fibrosis are the tissue-level substrate of **age-related diastolic heart failure (HFpEF)** — the dominant form of heart failure in older adults.

---

## Therapeutic relevance

### Cardiac regeneration

Reactivating cardiomyocyte proliferation is a major goal of cardiac regenerative medicine. Strategies under investigation:

- **Hippo pathway inhibition** — YAP/TAZ activation can drive cardiomyocyte proliferation in rodent models; translation to large mammals remains challenging #gap/needs-human-replication
- **ERBB2 signaling** — transient ERBB2 overexpression induces cardiomyocyte dedifferentiation and re-proliferation in mice; significant hypertrophy side effects #gap/needs-human-replication
- **microRNA modulation** — miR-199a and miR-590 promote cardiomyocyte proliferation in rodents; pig heart injection showed promising results with unexpected mortality; translation status uncertain #gap/contradictory-evidence #gap/needs-replication
- **Cell therapy** — injection of cardiomyocytes derived from embryonic stem cells (ESCs) or iPSCs; engraftment challenges, arrhythmia risk, and immune rejection remain barriers in large animal models

None of these approaches have reached phase 3 trial status for regeneration in aged hearts as of 2026-05-04. #gap/long-term-unknown

### Senolytic targeting

Clearance of senescent cardiomyocytes reduces cardiac hypertrophy and fibrosis in aged mouse models [^anderson2019] [^lewis2019]. Agents under investigation:

- **Navitoclax** (ABT-263; BCL-2/BCL-xL/BCL-w inhibitor) — demonstrated senolytic activity in aged mouse hearts [^anderson2019]; dose-limited by thrombocytopenia (BCL-xL on platelets). Does not address MCL-1-dependent senescent cells.
- **ABT-737** / **venetoclax** (BCL-2 selective) — tested in related cardiac contexts; narrower senolytic profile than navitoclax.
- **MCL-1 inhibitors** (S63845, AMG-176, AZD-5991) — in principle could address the MCL-1/BAK axis in senescent cardiomyocytes; however, cardiomyocyte-specific MCL-1 dependence (Wang 2013) creates a fundamental therapeutic index problem — the drug would kill the very cells being protected [^wang2013]. Tissue-targeted delivery is a proposed mitigation; no published strategy has resolved this.

See [[interventions/pharmacological/senolytics]] for the broader senolytic drug landscape.

### MCL-1 inhibitor cardiotoxicity — critical safety caveat

**Any drug targeting MCL-1 carries inherent cardiomyocyte toxicity risk.** Cardiomyocytes require MCL-1 for constitutive survival — unlike most cell types, where BCL-xL or BCL-2 can compensate. This is mechanistically distinct from navitoclax's thrombocytopenia (BCL-xL on platelets). The cardiotoxicity of AMG-176 (reversible troponin elevation in Phase 1 oncology trials) is consistent with on-target MCL-1 inhibition in cardiomyocytes. Any aging intervention using MCL-1 inhibitors must grapple with this window; see [[mcl-1]] for full discussion.

---

## Pathways intersecting cardiomyocyte aging

| Pathway | Role in cardiomyocyte aging |
|---|---|
| [[mtor]] | Age-related mTORC1 hyperactivation suppresses autophagy/mitophagy; rapamycin extends mouse lifespan partly via cardiac protection |
| [[ampk]] | AMPK activity declines with age; AMPK activates mitophagy and suppresses mTORC1; AMPK loss exacerbates cardiac aging |
| [[autophagy]] | Mitophagy clears damaged mitochondria; declines with age in cardiomyocytes; Atg5 KO causes aging-like cardiac phenotype |
| [[apoptosis-pathway]] | Low-level apoptosis of cardiomyocytes is irreversible; MCL-1/BAK axis is the dominant anti-apoptotic checkpoint |
| [[cellular-senescence]] | Post-mitotic senescence via oxidative telomere damage (not division-mediated); drives pro-fibrotic SASP |
| [[insulin-igf1]] | IGF-1 signaling declines with age; protective in cardiomyocytes at physiological levels; pathological at high chronic levels (hypertrophy) |
| [[nf-kb]] | NF-κB is activated in senescent and stressed cardiomyocytes; whether it drives inflammatory SASP components in purified CMs is uncertain — Anderson 2019 found classical NF-κB targets (IL-6, IL-1β) not upregulated in purified aged CMs #gap/unsourced |

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| Human senescent cardiomyocyte functional characterization | #gap/needs-human-replication | Anderson 2019 mouse model primarily; Lewis-McDougall 2019 provides human CPC senescence data but functional cardiomyocyte SASP in primary human cardiac tissue is not characterized |
| Senolytic dose-response in aged human heart | #gap/dose-response-unclear | No completed human trial of senolytics specifically targeting cardiac senescent cells |
| Cardiomyocyte proteostasis decline — quantitative data | #gap/unsourced | UPS activity decline and aggregate accumulation estimates need primary-source citations |
| MCL-1 inhibitor therapeutic window for senolytics | #gap/long-term-unknown | The Wang 2013 KO demonstrates obligate MCL-1 requirement; dose-titration window in aged hearts has not been published |
| Cardiac regeneration translation to human scale | #gap/needs-human-replication | All proliferation-reactivation strategies (Hippo, ERBB2, miRNA) lack phase 2+ human trial data in aged hearts |
| Cardiomyocyte-specific autophagy decline with age | #gap/unsourced | Atg5 KO cardiac phenotype cited qualitatively; primary data on autophagy flux decline in aged human cardiomyocytes needs citation |
| SASP composition in human senescent cardiomyocytes | #gap/needs-replication | Pro-fibrotic factors identified in mouse; human cardiac SASP profile not independently mapped |
| Polyploidy / binucleation as a barrier to regeneration | #gap/no-mechanism | Human cardiomyocytes are frequently polyploid; how this affects proliferative reactivation strategies is not mechanistically resolved |

---

## Cross-references

- [[mcl-1]] — MCL-1 is the dominant anti-apoptotic survival factor in cardiomyocytes; KO causes lethal cardiomyopathy; MCL-1 inhibitor cardiotoxicity is mechanistically explained here
- [[mitochondrial-dysfunction]] — cardiomyocytes are among the most mitochondria-dense cells in the body; mitochondrial aging is central to cardiac functional decline
- [[cellular-senescence]] — cardiomyocyte senescence mechanism (oxidative telomere damage, not division-dependent) is a distinct variant from proliferating-cell senescence
- [[autophagy]] — mitophagy is critical for cardiomyocyte mitochondrial quality control; its age-related decline has direct cardiac consequences
- [[mtor]] — mTORC1 hyperactivation with age suppresses autophagy in cardiomyocytes
- [[heart]] — tissue context (implicit stub)
- [[heart-failure]] — downstream aging phenotype (implicit stub)
- [[cardiac-fibrosis]] — downstream consequence of cardiomyocyte senescence and loss (implicit stub)
- [[interventions/pharmacological/senolytics]] — navitoclax and MCL-1 inhibitors as senolytic strategies in aged heart
- [[apoptosis-pathway]] — BAK/BCL-xL/MCL-1 apoptotic machinery in cardiomyocytes

---

## Footnotes

[^bergmann2009]: doi:10.1126/science.1164680 · Bergmann O, Bhardwaj RD, Bernard S et al. · 2009 · Science 324(5923):98–102 · observational · model: post-mortem human heart tissue (¹⁴C bomb-pulse dating); n=24 individuals (unconfirmed — PDF not downloadable; #gap/no-fulltext-access for full methods/results) · 3101 citations · turnover rates (~1%/yr at age 25, ~0.45%/yr at age 75) and <50% lifetime replacement verified against Crossref abstract; establishes adult human heart as post-mitotic with minimal regenerative capacity

[^bergmann2015]: doi:10.1016/j.cell.2015.05.026 · Bergmann O, Zdunek S, Felker A et al. · 2015 · Cell 161(7):1566–1575 · observational · model: post-mortem human heart tissue (¹⁴C bomb-pulse dating + stereology); n=51 subjects aged 8–75 for ¹⁴C dating; n=29 for stereology · cardiomyocyte number constant throughout adult life (R=0.01, p=0.96); turnover peaks in early childhood (~6.8%/yr), declines to ~0.8%/yr at age 20 and to below 0.3%/yr at age 75 in left ventricle; total cardiomyocyte number established perinatally and stable thereafter; 73.6%±7.0% of adult human CMs are mononucleated, 25.5%±7.4% binucleated, 1.0%±1.2% trinucleated; ~39% of left ventricle cardiomyocytes exchanged over a 75-year lifetime; endothelial cells renew at ~17%/yr, mesenchymal cells at ~4%/yr

[^anderson2019]: doi:10.15252/embj.2018100492 · Anderson R, Lagnado A, Maggiorani D et al. · 2019 · The EMBO Journal 38(5):e100492 · in-vivo + in-vitro · model: mixed-sex C57BL/6 mice aged 3, 15, 20, 24, 30 months; human cardiac tissue (right atrial appendage biopsies, n=35 subjects aged 32–86); n=4–8 mice/group depending on assay · telomere-associated DNA damage foci (TAF) increase with age in CMs independent of telomere length and telomerase activity; p21CIP and p16INK4a upregulated in aged purified CMs; SA-β-Gal positive in aged CMs but rare; non-canonical SASP: three secreted effectors identified from purified aged CMs are Tgfb2, Gdf15, and Edn3 (classical inflammatory SASP factors — IL-6, IL-1β, Cxcl1 — not upregulated in purified CM fraction); conditioned medium from aged CMs reduced neonatal fibroblast proliferation and increased α-SMA (myofibroblast marker); genetic clearance (INK-ATTAC + AP20187, 27-month mice treated 2 months) and pharmacological clearance (navitoclax 50 mg/kg/day, 7d/cycle × 2 cycles in 24-month wild-type mice) both reduced CM hypertrophy and cardiac fibrosis; navitoclax did not affect ejection fraction or LV mass index; TAF driven by mitochondrial ROS (rescued by NAC antioxidant)

[^lewis2019]: doi:10.1111/acel.12931 · Lewis-McDougall FC, Ruchaya PJ, Domenjo-Vila E et al. · 2019 · Aging Cell 18(3):e12931 · in-vivo + in-vitro · model: human CPCs isolated from n=35 cardiac surgery patients aged 32–86 years; NSG mouse MI injection model (n=4–5 mice/group); aged INK-ATTAC and wild-type mice treated with AP20187 or D+Q (n=5–11 mice/group); aged 27.7±2.7 months · >50% of CPCs from subjects >70 years old are p16INK4A+/SA-β-gal+/γH2AX+ (senescent); injection of SA-β-gal+ senescent CPCs into MI hearts (NSG mice) caused worse LV function and greater fibrosis at 28 days vs cycling CPCs; senescent-CPC conditioned medium rendered cycling CPCs senescent (SASP: PAI-1, IL-8, IL-6, IGFBP-3, GM-CSF, CCL-2); D+Q or AP20187 clearance of senescent cells in aged mice increased small Ki67+ and EdU+ cardiomyocytes (~0.25%) vs vehicle (~0.03–0.07%), indicating enhanced cardiomyocyte DNA synthetic activity; D+Q reduced LV fibrosis (p<0.05); navitoclax senolytic activity demonstrated in vitro on senescent CPCs but primary in vivo clearance used AP20187 and D+Q

[^wang2013]: doi:10.1101/gad.215855.113 · Wang X, Bathina M, Lynch J et al. · 2013 · Genes & Development 27(12):1351–1364 · in-vivo · model: cardiomyocyte-specific conditional Mcl1 knockout (Ckmm-Cre constitutive; Myh-CreER inducible adult) · 262 citations; locally downloaded · Mcl1 deletion causes lethal dilated cardiomyopathy with mitochondrial respiratory chain dysfunction; constitutive model: all pups died within 10 days; inducible adult model: fatal cardiomyopathy within ~3 weeks of tamoxifen; mechanistic basis for MCL-1 inhibitor cardiotoxicity
