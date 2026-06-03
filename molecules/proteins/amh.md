---
type: protein
aliases: [anti-Mullerian hormone, anti-Müllerian hormone, Mullerian-inhibiting substance, MIS, Mullerian-inhibiting factor, MIF, AMH]
uniprot: P03971
ncbi-gene: 268
hgnc: 464
ensembl: ENSG00000104899
genage-id: null
mouse-ortholog: Amh
pathways: ["[[tgf-beta]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[menopause]]"]
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "UniProt P03971 domain boundaries verified against live API; Nelson 2023 (PDF) and Moolhuijsen 2020 (PDF) verified in full; Dewailly 2014 verified against Crossref metadata + structured abstract (full PDF unavailable, download failed); Durlinger 1999 verified against PubMed abstract (closed-access, no full-text). DOI error on Durlinger 1999 corrected. AMH peak age, OCP suppression range, and BRCA1 caveat updated to match sources. Canonical-database identity fields (PubChem, ChEMBL, HGNC, Ensembl) not independently re-verified against live databases beyond UniProt."
---

# AMH (anti-Müllerian hormone)

Anti-Müllerian hormone (AMH) is a TGF-β superfamily glycoprotein with a dual biological identity: a classical developmental signal in males (inducing regression of the Müllerian ducts during fetal sexual differentiation) and, more broadly relevant to aging biology, a quantitative endocrine readout of the **ovarian primordial follicle reserve** in females. Because AMH is secreted exclusively by the granulosa cells of preantral and small antral follicles — the growing fraction of the reserve — its serum level tracks the size of the underlying resting pool and declines monotonically across the female reproductive lifespan, reaching undetectable levels roughly five years before the final menstrual period. AMH is consequently the premier endocrine biomarker of reproductive aging and ovarian reserve.

## Identity

- **UniProt:** P03971 (AMH_HUMAN)
- **NCBI Gene:** 268
- **HGNC ID:** 464 (symbol: AMH)
- **Ensembl:** ENSG00000104899
- **Mouse ortholog:** Amh (UniProt P27106; one-to-one ortholog)
- **Length:** 560 amino acids (canonical isoform)
- **Chromosome:** 19p13.3 (human)

## Protein structure and biochemistry

AMH is a disulfide-linked homodimeric glycoprotein processed from a 560-amino-acid precursor [^uniprot-p03971]:

| Region | Residues | Description |
|---|---|---|
| Signal peptide | 1–24 | Cleaved co-translationally; directs secretion |
| Prodomain | 25–451 | N-terminal large subdomain; remains non-covalently associated with the active dimer after cleavage |
| Active chain | 452–560 | C-terminal TGF-β-like domain; contains the characteristic cystine-knot fold |

The mature secreted form is a non-covalent heterotetrameric complex of the AMH homodimer (active chains) non-covalently held by two prodomain monomers. The prodomain amplifies biological activity by modulating receptor presentation [^uniprot-p03971]. The active C-terminal domain harbors the receptor-binding determinants (residues 291–317 and 426–427) that engage **AMHR2** (anti-Müllerian hormone receptor type II).

### Signaling mechanism

AMH signals through the same heteromeric receptor complex architecture common to all TGF-β superfamily members, but uses a distinct receptor pair [^dewailly2014]:

1. AMH binds its type-II receptor **AMHR2** (a serine/threonine kinase), which is expressed specifically on Müllerian duct mesenchyme (in development) and granulosa cells (in adult females).
2. AMHR2 recruits and phosphorylates type-I receptors (**BMPR1A/ALK3** or **BMPR1B/ALK6**) within the receptor complex.
3. Activated type-I receptors phosphorylate receptor-SMADs: predominantly **[[smad2-smad3|SMAD1, SMAD5, SMAD8]]** (the BMP-type R-SMADs rather than the TGF-β/activin-type SMAD2/3 — a key distinction within the superfamily).
4. R-SMADs complex with the co-SMAD **SMAD4** and translocate to the nucleus to regulate target gene transcription.

The pathway is distinct from classical TGF-β/[[tgf-beta]] signaling at the SMAD level: AMH is one of the few TGF-β family members that preferentially signals through SMAD1/5/8 while binding through AMHR2 rather than TGFBR2.

## Developmental function: Müllerian duct regression in males

AMH's first-described and canonical function is the regression of the Müllerian (paramesonephric) ducts during male fetal sexual differentiation — the developmental event that prevents formation of the uterus, fallopian tubes, and upper vagina in males. Fetal and prepubertal **Sertoli cells** of the testis are the primary AMH-producing cells in males. AMH is secreted from the 7th–8th week of gestation onward, peaking in the first postnatal year, then declining at puberty (suppressed by rising intratesticular testosterone).

**Persistent Müllerian Duct Syndrome (PMDS):** Loss-of-function mutations in either *AMH* or *AMHR2* cause PMDS, a condition in which otherwise phenotypically normal (46,XY) males retain Müllerian-derived structures (uterus, fallopian tubes), presenting clinically with cryptorchidism and/or infertility [^uniprot-p03971]. PMDS is the clearest genetic proof that AMH→AMHR2 signaling is both necessary and sufficient for Müllerian duct regression.

## Female/ovarian function: gatekeeper of the follicle reserve

In females, AMH transitions from absent (fetal/neonatal period) to measurable (puberty) as folliculogenesis begins, and is produced exclusively by the **granulosa cells** of preantral (primary and secondary) follicles and **small antral follicles** (up to ~8 mm) [^dewailly2014]. Large antral follicles selected for the dominant follicle cycle stop expressing AMH. This means AMH levels reflect specifically the size of the cohort of actively growing small follicles, which is in turn proportional to the underlying resting primordial follicle pool — the reserve. Two specific ovarian actions have been described:

### 1. Inhibition of primordial follicle recruitment (the gatekeeper role)

AMH suppresses the activation of primordial follicles into the growing pool, acting as a brake on the rate of follicle recruitment [^dewailly2014]. *Amh*-null mice show accelerated depletion of the primordial follicle pool, earlier exhaustion of the reserve, and premature reproductive senescence — establishing a causal role for AMH as a negative regulator of initial recruitment [^durlinger1999]. #gap/needs-human-replication

The functional consequence of this gatekeeper role for aging is significant: a woman's rate of follicle pool depletion is partly regulated by its own secretory output. Lower AMH (reflecting fewer growing follicles) means less inhibitory signal on the resting pool, potentially accelerating recruitment and hastening exhaustion — a self-amplifying dynamic in late reproductive life.

### 2. Reduction of FSH sensitivity in growing follicles

AMH reduces the sensitivity of preantral and small antral follicles to [[fsh]], specifically by suppressing *Fshr* (FSH receptor) expression on granulosa cells [^dewailly2014]. This limits FSH-driven growth and selection of the dominant follicle cohort, in effect throttling the rate of folliculogenesis relative to the gonadotropin environment. The mechanism explains why ovarian stimulation response (the number of oocytes retrieved per IVF cycle) correlates so strongly with AMH: women with more preantral/small-antral follicles are less FSH-sensitive per follicle but recruit more follicles in total when supraphysiological FSH is applied.

## AMH as an ovarian reserve biomarker

This is AMH's dominant clinical and aging-research role. AMH has largely superseded older markers (cycle-day-3 FSH, inhibin B, antral follicle count by ultrasound) as the preferred single endocrine index of ovarian reserve for several reasons [^dewailly2014][^moolhuijsen2020]:

| Property | AMH | Day-3 FSH | Inhibin B | AFC (ultrasound) |
|---|---|---|---|---|
| Cycle-phase variability | low (stable across cycle) | high (fluctuates) | high | moderate |
| Age-related decline pattern | monotonic, ~10-15 pg/mL/year in fertile women | non-linear, rises only late | early decline | moderately correlates |
| Sensitivity to early reserve loss | high | low (late signal) | moderate | high but operator-dependent |
| Undetectable at menopause | yes (~5 yr before FMP) | no (FSH rises, doesn't disappear) | yes (earlier) | not applicable |
| Day of cycle required | any | cycle day 3 | cycle day 3 | cycle day 2-5 |
| Assay standardization | problematic (multiple platforms) | standardized | standardized | N/A |

### Age trajectory of serum AMH

AMH peaks at approximately age 25 (typical values ~3–5 ng/mL in high-reserve young women) and declines with age during fertile life, becoming undetectable (<0.1 ng/mL) in most women 4–6 years before the final menstrual period [^nelson2023][^moolhuijsen2020]. The decline rate is broadly consistent across populations but shows substantial inter-individual variation — some women decline much faster, reaching low levels a decade earlier than expected for their chronological age.

### AMH for predicting age at menopause

The Nelson et al. 2023 systematic review (41 studies, 28,858 women) confirmed that lower AMH in reproductive-age women predicts earlier [[menopause]] onset at the population level [^nelson2023]. The key findings and limitations from this synthesis:

- **Population-level signal is robust:** very low AMH in a 35-year-old woman is associated with menopause earlier than average, and very high AMH is associated with later menopause.
- **Individual-level prediction is imprecise:** the prediction intervals around any single-measurement estimate are wide enough to limit utility for counseling individual women on precise timing. This is the major current limitation.
- **Serial measurements improve prediction:** Ramezani Tehrani et al. 2020 (Tehran Lipid-Glucose Study) showed that incorporating the *rate of AMH decline* across multiple measurements improved the AUC for menopause age prediction from ~0.70 to ~0.78 — meaningful but not clinically transformative [^tehrani2020].
- **The Laven 2024 review** (Fertility and Sterility) reached a compatible conclusion: age at measurement remains the strongest single predictor of menopause timing; AMH adds incremental value but does not displace chronological age [^laven2024].

#gap/needs-replication — The precision of AMH-based menopause age prediction in diverse (non-Iranian, non-European) populations is incompletely characterized.

### Clinical uses

1. **Ovarian response prediction before IVF** — the primary validated indication. Low AMH (<0.5–1.0 ng/mL, depending on assay) predicts poor ovarian response to gonadotropin stimulation; very high AMH (>3.5 ng/mL) predicts hyperstimulation risk [^dewailly2014]. A 2024 systematic review confirmed AMH slightly outperforms other markers for predicting poor and high ovarian responses [^salemi2024].
2. **Premature ovarian insufficiency (POI) risk stratification** — very low AMH in women under 40 raises suspicion for impending POI [^nelson2023].
3. **Fertility preservation counseling** — in cancer patients before gonadotoxic treatment; monitoring recovery afterward [^anderson2020].
4. **PCOS assessment** — AMH is markedly elevated in polycystic ovary syndrome (reflecting the large antral follicle cohort); used diagnostically though not yet formally in all guidelines.

### Biomarker limitations

- **Assay non-standardization** — multiple commercial immunoassay platforms (Beckman Coulter, Roche Elecsys, AnshLabs, formerly Diagnostic Systems Laboratories and Immunotech) give discordant absolute values. Conversion between platforms is imperfect; reference ranges are platform-specific. This is the field's primary methodological weakness [^moolhuijsen2020].
- **Oral contraceptive suppression** — hormonal contraceptives suppress AMH; the magnitude varies from ~14% to ~55% depending on contraceptive type (combined oral, progesterone-only pill, intrauterine device), duration of use, timing of measurement within cycle, and assay platform [^moolhuijsen2020]. Levels normalize after discontinuation. Measurement during hormonal contraceptive use underestimates true reserve.
- **Does not predict natural per-cycle fertility** — AMH cannot tell an individual woman what her chance of spontaneous conception is per cycle; it reflects quantity, not the quality of the remaining oocytes (though a correlation may exist at the population level).
- **BMI and smoking effects** — obesity is associated with modestly lower AMH independent of reserve; smoking accelerates AMH decline slightly.
- **Not a proxy for oocyte quality** — ovarian reserve (quantity) and oocyte quality (aneuploidy rate, mitochondrial integrity) decline in parallel with age but through distinct mechanisms; low AMH does not quantify aneuploidy risk.
- **BRCA1/2 mutation context: AMH may not reflect reserve** — in a 2024 mouse study using oocyte-specific Brca1 conditional knockout (Brca1-cKO), serum AMH was not significantly different from wild-type despite confirmed reduction in primordial follicle number; human BRCA1/2 carriers showed analogous dissociation between AMH and histological reserve [^brca1-amh2024]. Clinicians and researchers should use caution in interpreting AMH as a reliable ovarian reserve marker in BRCA1/2 mutation carriers specifically. #gap/needs-replication

## The AMH-aging angle: reproductive aging vs somatic aging

The ovary is arguably the fastest-aging human organ, reaching functional exhaustion at ~51 years — 15–30 years before other organ systems show major functional collapse [^ovary-page]. AMH decline is the most sensitive quantitative signal of this accelerated trajectory. This raises a hypothesis of active interest in aging biology:

**Does reproductive aging (measured by AMH) predict or cause somatic aging outcomes?**

- Some observational studies find associations between earlier menopause (and by extension, earlier AMH exhaustion) and higher all-cause mortality, cardiovascular risk, and bone loss — but the direction of causation is uncertain. Earlier menopause may be a marker of an organism-wide accelerated aging program, or the estrogen deficit following earlier menopause may itself drive somatic aging, or both. #gap/no-mechanism
- AMH has been proposed as an "ovarian clock" whose trajectory, relative to chronological age, might reveal individual variation in the pace of biological aging in females — analogous to the concept behind DNA-methylation clocks.
- It is not established whether AMH itself (as a circulating signal) exerts direct systemic effects on somatic aging independent of its role in reflecting follicle pool size. AMHR2 expression in non-reproductive tissues has been reported (including in some cancers), but physiological relevance in aging is unknown. #gap/no-mechanism #gap/needs-replication

## Role in hallmarks of aging

| Hallmark | Mechanism |
|---|---|
| [[stem-cell-exhaustion]] | AMH functionally reflects the depletion of the primordial follicle pool — the paradigmatic example of a non-renewing progenitor reserve. Its decline trajectory indexes the rate of that exhaustion. |
| [[altered-intercellular-communication]] | AMH is a paracrine/endocrine signal (granulosa → hypothalamus-pituitary axis; granulosa → adjacent preantral follicles) that modulates FSH sensitivity and the GnRH/FSH/LH feedback axis. Its exhaustion disrupts hypothalamic-pituitary-ovarian communication, contributing to the perimenopausal hormonal cascade. |

## Key interactors and pathway context

- **AMHR2** (AMH receptor type II) — the primary obligate receptor; serine/threonine kinase; expressed on Müllerian duct mesenchyme and ovarian granulosa cells. Mutations cause PMDS in males.
- **BMPR1A / BMPR1B** (ALK3 / ALK6) — type-I receptor co-participants in the signaling complex; phosphorylate SMAD1/5/8 downstream.
- **[[smad2-smad3|SMAD1/5/8]]** — the primary downstream signal transducers; distinct from the TGF-β canonical SMAD2/3 axis.
- **[[tgf-beta]]** pathway — AMH is classified under the TGF-β superfamily but signals through BMP-type SMADs; the TGF-β pathway page is the closest existing wiki entry, though AMH/AMHR2 constitutes a distinct sub-arm.

## Pharmacology and druggability

AMH is not itself a pharmacological target in active drug development for aging. Druggability tier is null (#gap/needs-canonical-id — Open Targets does not list AMH as an aging-indication target). Relevant pharmacological contexts:

- **Recombinant AMH (rAMH):** A phase 1/2 research tool being explored as a potential agent to suppress unwanted follicle activation in controlled ovarian stimulation or fertility preservation contexts. Not an aging intervention.
- **AMHR2-targeting cancer immunotherapy:** AMHR2 is overexpressed in some epithelial ovarian cancers; anti-AMHR2 antibodies and CAR-T constructs are in early clinical investigation for ovarian cancer — distinct from aging relevance.
- **Indirect modulation:** AMH levels are not meaningfully modified by approved drugs; oral contraceptives transiently suppress them. No intervention reliably raises AMH in women with diminished reserve.

## Extrapolation table

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | AMHR2→BMPR1A/B→SMAD1/5/8 conserved; developmental function confirmed in human PMDS genetics |
| Phenotype conserved across mammals? | yes | Amh-null mice show accelerated follicle depletion; parallels human low-AMH states |
| Human aging data available? | yes | Large-scale longitudinal cohort data on AMH decline and menopause prediction in humans |

## Limitations and gaps

- `#gap/needs-replication` — Amh-null mouse gatekeeper phenotype (accelerated primordial follicle depletion) has not been directly replicated in a human genetic model; PMDS patients do not show this phenotype prominently (possibly confounded by male sex)
- `#gap/no-mechanism` — The precise intrafollicular molecular cascade by which AMH suppresses primordial follicle activation is incompletely understood; downstream SMAD1/5/8 targets in the follicle context need characterization
- `#gap/no-mechanism` — Whether circulating AMH (or its decline) exerts systemic effects on somatic aging (cardiovascular, skeletal, neurological) independent of estrogen withdrawal is unestablished
- `#gap/contradictory-evidence` — AMH assay platforms give discordant absolute values; cross-platform comparisons require conversion equations of uncertain accuracy; international standardization is still incomplete as of 2026
- `#gap/needs-human-replication` — The rate of AMH decline as a predictor of age at menopause (Ramezani Tehrani 2020) was derived in an Iranian cohort; external validation in diverse populations is needed
- `#gap/unsourced` — AMHR2 expression in non-reproductive somatic tissues: reported in the literature but sources need explicit citation before inclusion as a fact on this page
- #gap/needs-canonical-id — No Open Targets druggability tier available for AMH in an aging indication; tier left null pending assessment

## Cross-references

- [[ovary]] — the source tissue; follicle biology, reserve depletion, perimenopausal cascade
- [[granulosa-cells]] — the primary AMH-secreting cell type in adult females
- [[oocytes]] — the germ cell within each follicle; oocyte quality decline independent of reserve quantity
- [[menopause]] — the clinical endpoint that AMH most reliably predicts; STRAW+10 staging
- [[estradiol]] — co-produced by granulosa cells; the primary estrogen of reproductive life; levels maintained until late in follicle depletion
- [[fsh]] (stub) — pituitary gonadotropin whose sensitivity is reduced by AMH in small antral follicles; rises as AMH falls
- [[tgf-beta]] — the superfamily pathway; AMH signals through BMP-type SMADs, not TGF-β/SMAD2/3
- [[smad2-smad3]] — context: AMH uses SMAD1/5/8, the BMP-arm SMADs, not SMAD2/3
- [[bmp-2]] — related BMP-family member sharing BMPR1A/B receptor components
- [[stem-cell-exhaustion]] — hallmark; primordial follicle pool depletion is the canonical example in reproductive biology
- [[altered-intercellular-communication]] — hallmark; AMH decline disrupts hypothalamic-pituitary-ovarian feedback
- [[premature-ovarian-insufficiency]] (stub) — clinical entity where AMH-indexed reserve loss occurs before age 40

## Footnotes

[^uniprot-p03971]: UniProt P03971 (AMH_HUMAN) · manually reviewed (Swiss-Prot) · accessed 2026-06-03 · source for protein structure, domain positions, signal peptide, secreted form, PMDS disease association, receptor-binding residues

[^dewailly2014]: doi:10.1093/humupd/dmt062 · PMID 24430863 · Dewailly D, Andersen CY, Balen A et al. · "The physiology and clinical utility of anti-Müllerian hormone in women" · *Human Reproduction Update* 20(3):370–385 · 2014 · review · local PDF: unavailable (OA bronze; download failed — institutional repository redirect timed out) · verified against Crossref metadata + structured abstract · key content: comprehensive synthesis of AMH ovarian physiology, gatekeeper function, FSH-sensitivity modulation (SMAD1/5/8 BMP-arm signaling confirmed), AMH peaks in early 20s, clinical utility in IVF, assay standardization issues

[^durlinger1999]: doi:10.1210/endo.140.12.7204 · PMID 10579345 · Durlinger AL, Kramer P, Karels B et al. · "Control of primordial follicle recruitment by anti-Müllerian hormone in the mouse ovary" · *Endocrinology* 140(12) · 1999 · in-vivo (Amh-null mouse) · key finding: Amh-null mice at 4 and 13 months have fewer primordial follicles and more preantral/small antral follicles than wild-type; near-complete primordial follicle depletion in 13-month-old knockouts; establishes AMH as a negative regulator (brake) on initial follicle recruitment · closed-access (abstract verified; full PDF unavailable) #gap/needs-human-replication

[^moolhuijsen2020]: doi:10.1210/clinem/dgaa513 · PMID: available · Moolhuijsen LME, Visser JA · "Anti-Müllerian Hormone and Ovarian Reserve: Update on Assessing Ovarian Function" · *J Clin Endocrinol Metab* 105(11):3361–3373 · 2020 · mini-review · PDF verified 2026-06-03 · key content: AMH plateaus at ~age 25; OCP suppression 14–55% depending on type/duration/assay; AMH assay comparison table (Gen II, Access, Elecsys, picoAMH, Ultra-sensitive Ansh); cross-platform variability −24% to +45% at 1 ng/mL; comprehensive update on influencing factors (BMI, ethnicity, Vitamin D, autoimmune disease)

[^nelson2023]: doi:10.1093/humupd/dmac045 · Nelson SM, Davis SR, Kalantaridou S et al. · "Anti-Müllerian hormone for the diagnosis and prediction of menopause: a systematic review" · *Human Reproduction Update* 29(3):327–346 · 2023 · systematic review · n=28,858 women across 41 studies (3 diagnosis, 27 prediction, 11 POI) · PDF verified 2026-06-03 · key findings: AMH correlates with earlier menopause at population level across all study designs; 95% CI for age-at-menopause estimates too wide for individual counseling (e.g., CI of 44–59 years for 1 ng/dL AMH at age 26); very low/undetectable AMH in young women clinically valuable for early POI identification; use of AMH to diagnose (rather than predict) menopause not formally evaluated against ESHRE 12-month amenorrhoea criterion

[^tehrani2020]: doi:10.1210/clinem/dgaa083 · Ramezani Tehrani F, Azizi F et al. · "Improving Prediction of Age at Menopause Using Multiple Anti-Müllerian Hormone Measurements: the Tehran Lipid-Glucose Study" · *J Clin Endocrinol Metab* 105(8):e3043–e3052 · 2020 · longitudinal cohort · n not specified in abstract; multi-measurement modelling · key finding: incorporating AMH decline rate improved menopause-age AUC from ~0.70 to ~0.78; women with fastest AMH decline had predicted menopause ~10 years earlier than slowest-declining quartile · local PDF: not OA

[^laven2024]: doi:10.1016/j.fertnstert.2024.02.029 · Laven JSE, Louwers YV · "Can we predict menopause and premature ovarian insufficiency?" · *Fertility and Sterility* · 2024 · review · 21 citations (citation percentile 100) · local PDF: download failed (bronze OA) · key finding: chronological age remains the strongest individual predictor of menopause timing; AMH adds marginal but real incremental value; individual prediction intervals remain wide

[^salemi2024]: doi:10.1186/s13643-024-02684-0 · Salemi F, Amer S et al. · "The best ovarian reserve marker to predict ovarian response following controlled ovarian hyperstimulation" · *Systematic Reviews* 13:302 · 2024 · systematic-review + meta-analysis · key finding: AMH slightly outperforms antral follicle count and other markers for predicting poor and high ovarian responses to stimulation; substantial between-study heterogeneity noted

[^anderson2020]: doi:10.3389/fendo.2020.574854 · Anderson RA, Su HI · "The Clinical Value and Interpretation of Anti-Müllerian Hormone in Women With Cancer" · *Frontiers in Endocrinology* 11:574854 · 2020 · review · key content: AMH for fertility preservation counseling before gonadotoxic chemotherapy; monitoring ovarian function recovery post-treatment

[^brca1-amh2024]: doi:10.1016/j.ebiom.2024.105262 · PMID 39084071 · Winship AL et al. · "Conditional loss of Brca1 in oocytes causes reduced litter size, ovarian reserve depletion and impaired oocyte in vitro maturation with advanced reproductive age in mice" · *EBioMedicine* 106:105262 · 2024 · in-vivo + human observational · key finding: serum AMH was not significantly different in Brca1-cKO vs wild-type mice despite confirmed primordial follicle reduction; human BRCA1/2 carriers showed analogous AMH–reserve dissociation; authors conclude caution is warranted in using AMH as a reliable reserve marker in this context
