---
type: cell-type
aliases: [Sertoli cell, sustentacular cells, nurse cells of the testis]
cell-ontology-id: CL:0000216
tissue-of-origin: ["[[testis]]"]
key-markers-mouse: [Fshr+, Sox9+, Wt1+, Amh+ (pre-pubertal), Dhh+, Gdnf+, Scf/Kitlg+, Vim+]
key-markers-human: [FSHR+, SOX9+, WT1+, AMH+ (pre-pubertal; low adult), DHH+, GDNF+, SCF/KITLG+, VIM+]
self-renewal: no
aging-relevant: yes
affected-hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]", "[[cellular-senescence]]"]
key-aging-phenotypes: ["[[andropause]]"]
typical-niche: "seminiferous tubule — columnar epithelial cells anchored to the basement membrane, spanning from the basal lamina to the tubular lumen; each Sertoli cell contacts multiple germ cells simultaneously across the different stages of spermatogenesis"
niche-signaling: ["[[fsh]]"]
single-cell-aging-signature: null
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Petersen 2015 verified against PMC abstract (full XML body restricted by Wiley; key numbers confirmed: n=26, ages 16-80, Sertoli 407e6 mean, Leydig 99e6 mean, CV, range all confirmed); Paul & Robaire 2013 verified against full PDF (gold OA PMC3877286) — major correction: molecular data are from pachytene spermatocytes not Sertoli cells; Levy 1999 verified against PubMed abstract (Wiley closed-access); Aksglaede 2010 verified against PubMed abstract (OUP closed-access); Meachem 2001 verified against PubMed abstract — correction: adult inhibin B production site is controversial per authors; Sakai 2018 verified against PubMed abstract — correction: paper is expression-dynamics study, not conditional-deletion study; conditional deletion phenotype cited from prior literature; Xiao 2024 verified against PubMed abstract — correction: SB431542 is a TGF-β receptor inhibitor; Al-Attar 1997 verified against PubMed abstract (open PMC)."
literature-checked-through: 2026-06-03
---

# Sertoli Cells

The somatic "nurse" cells of the [[testis|seminiferous tubule]], Sertoli cells are the structural and metabolic foundation of male germ cell development. Each Sertoli cell contacts and supports a cohort of developing germ cells — from spermatogonia at the basement membrane through spermatocytes in the adluminal compartment to mature spermatids at the tubular lumen — providing nutrients, paracrine signals, and physical scaffolding throughout the approximately 70-day journey from spermatogonial stem cell to released spermatozoon. Critically, adjacent Sertoli cells form the **blood-testis barrier (BTB)** via specialized tight junctions, creating an immunologically privileged adluminal compartment that shields post-meiotic germ cells (which express antigens not present during thymic education) from autoimmune attack. In early fetal life Sertoli cells secrete [[amh|anti-Müllerian hormone (AMH)]], which drives regression of the Müllerian ducts in male embryos; after puberty, AMH output falls sharply as intratesticular testosterone rises. Sertoli cells are the principal source of **inhibin B**, which feeds back to the pituitary to suppress [[fsh|FSH]]. With aging, Sertoli cell number declines significantly, BTB integrity is compromised, and paracrine niche support for the [[spermatogonial-stem-cells|spermatogonial stem cell (SSC)]] pool diminishes — contributing to age-related spermatogenic decline.

## Identity and markers

Sertoli cells are identified by their distinctive columnar morphology, irregular nucleus with prominent nucleolus, and nuclear position midway up the seminiferous tubule wall. The master transcription factor of Sertoli cell identity is **SOX9**, a member of the SRY-related HMG-box family. SOX9 is activated downstream of SRY during sex determination and is required for Sertoli cell specification and maintenance of the male gonadal program. **WT1** (Wilms tumor 1) is a co-expressed transcription factor required for Sertoli cell survival and tubule organization.

| Marker | Mouse | Human | Notes |
|---|---|---|---|
| SOX9 | Sox9+ | SOX9+ | Master TF of Sertoli identity; continuously required in adult |
| WT1 | Wt1+ | WT1+ | Required for Sertoli cell survival and tubular integrity |
| FSHR | Fshr+ | FSHR+ | FSH receptor; Sertoli cells are the sole gonadal FSH target in adult males |
| AMH | Amh+ (strong pre-pubertal; low residual adult) | AMH+ (pre-pubertal; near-undetectable adult) | Repressed by intratesticular testosterone at puberty |
| VIM (Vimentin) | Vim+ | VIM+ | Intermediate filament forming the cytoskeletal scaffold around germ cells |
| GDNF | Gdnf+ | GDNF+ | Glial cell line-derived neurotrophic factor; essential SSC self-renewal ligand |
| SCF / KITLG | Scf+/Kitlg+ | SCF+/KITLG+ | Kit ligand; survival and proliferation signal for spermatogonia |
| DHH | Dhh+ | DHH+ | Desert hedgehog; Sertoli-derived signal for Leydig cell and peritubular myoid cell differentiation |

## Anatomy and the blood-testis barrier

Sertoli cells are polarized epithelial cells anchored at the basement membrane of each seminiferous tubule. Their cytoplasm forms an elaborate three-dimensional lattice that engulfs developing germ cells at every stage: spermatogonia rest on the basal surface adjacent to the basement membrane; primary and secondary spermatocytes occupy the adluminal compartment above the tight junctions; spermatids elongate toward the lumen where they will eventually be released as spermatozoa.

The **blood-testis barrier** is formed by an array of tight junctions, ectoplasmic specializations (actin-rich adhesion complexes unique to the testis), gap junctions, and desmosomes between adjacent Sertoli cells in the basal region of the tubule [^mruk2004]. This barrier:

1. Creates an immunologically privileged adluminal compartment, shielding post-meiotic germ cells from adaptive immune surveillance (meiotic and post-meiotic germ cells express neoantigens absent from the thymic repertoire).
2. Establishes a distinct biochemical microenvironment in the adluminal compartment — with a uniquely high K⁺/Na⁺ ratio, enriched in specific amino acids and androgens — that is permissive for meiosis and spermiogenesis.
3. Regulates transport of hormones and nutrients from blood to the germ cell milieu.

Key BTB proteins include claudin-11, occludin, ZO-1 (tight junction); connexin-43 (gap junction); N-cadherin (adherens junction); and the testis-specific ectoplasmic specialization proteins. Dynamic remodeling of the BTB is required to permit preleptotene spermatocytes to transit from the basal to the adluminal compartment — a regulated process dependent on Rho GTPase signaling and endocytic recycling of occludin and other junction components [^mruk2004].

## Endocrine and paracrine functions

### AMH secretion and Müllerian regression

In the embryonic testis, Sertoli cells are the exclusive source of **AMH** (anti-Müllerian hormone, also known as Müllerian-inhibiting substance). AMH is a TGF-beta superfamily member that signals via type II receptor AMHR2. In the male fetus, AMH from the nascent Sertoli cells drives regression of the Müllerian (paramesonephric) ducts, preventing development of the uterus, fallopian tubes, and upper vagina. AMH synthesis is high in fetal and pre-pubertal Sertoli cells and is regulated by FSH (stimulatory) and intratesticular testosterone (inhibitory) [^alattar1997]. As intratesticular testosterone rises at puberty, AMH expression is profoundly suppressed — adult Sertoli cells express AMH at low or near-undetectable levels compared to pre-pubertal cells [^aksglaede2010]. In adult men, serum AMH reflects the small residual Sertoli cell AMH output and is a minor contributor to circulating AMH compared to the childhood window.

| AMH life phase | Source | Level | Functional role |
|---|---|---|---|
| Fetal (~8–14 wk) | Sertoli cells | Very high | Müllerian duct regression |
| Infancy / childhood | Sertoli cells | High (peak ~3 mo) | Testicular presence biomarker; no duct to regress |
| Puberty onset | Sertoli cells | Rapidly declining | Testosterone-mediated repression |
| Adult | Sertoli cells (residual) | Low | Minor circulating contribution; full function unclear |

### Inhibin B and FSH feedback

Sertoli cells are the dominant source of **inhibin B** in men — a heterodimer of inhibin alpha and inhibin betaB subunits. Note that in the adult testis the precise cellular source of inhibin B remains partially controversial; in the prepubertal testis Sertoli cells are the clear predominant source, but in the adult the contribution of germ cells to circulating inhibin B is not fully resolved [^meachem2001]. Functionally, inhibin B feeds back to the pituitary to suppress FSH secretion, providing the afferent arm of the testicular-pituitary feedback loop. Unlike testosterone (which regulates LH), inhibin B specifically regulates FSH: FSH stimulates Sertoli cells → Sertoli cells (and possibly germ cells) produce inhibin B → inhibin B suppresses FSH at the pituitary. Because inhibin B output tracks Sertoli cell mass and spermatogenic status, serum inhibin B is among the most sensitive biomarkers of Sertoli cell functional reserve, and a decline in inhibin B with a compensatory FSH rise is an early endocrine indicator of compromised Sertoli cell support for spermatogenesis [^meachem2001].

### GDNF and the SSC niche

The most critical Sertoli-derived signal for spermatogonial stem cell self-renewal is **GDNF** (glial cell line-derived neurotrophic factor). GDNF is secreted by Sertoli cells and signals through the receptor complex RET/GFRα1 expressed on undifferentiated spermatogonia including SSCs [^sakai2018]. GDNF is indispensable for SSC maintenance in mice — its genetic loss causes progressive SSC depletion — while FGF2, which is expressed primarily by germ cells rather than Sertoli cells, also supports SSC self-renewal in vitro but likely plays a distinct regulatory role in vivo [^sakai2018]. SCF/KITLG (also Sertoli-derived) is required for the survival and proliferation of differentiating spermatogonia. Together, GDNF and SCF represent the principal Sertoli-derived paracrine signaling axis by which Sertoli cell function regulates the SSC pool and germ cell output.

## Terminal differentiation after puberty

A key biological constraint on Sertoli cell aging is that Sertoli cells **terminally differentiate at puberty** and do not normally proliferate in adult life. The final number of Sertoli cells achieved at puberty — set by the proliferative expansion of immature Sertoli cells driven by FSH, thyroid hormone, and local growth factors during neonatal and juvenile life — determines testicular volume and the upper limit of sperm production capacity across the adult lifespan. Each Sertoli cell can support only a fixed number of germ cells simultaneously; therefore, adult daily sperm production scales directly with Sertoli cell number. Once puberty is complete and testosterone-driven differentiation locks the cells in a mature state, the capacity to replace lost Sertoli cells is essentially absent. This explains why Sertoli cell loss with aging is irreversible and cumulatively reduces spermatogenic capacity.

## Aging phenotypes

### Age-related Sertoli cell number decline

Human stereological data show a **significant decline in Sertoli cell number** with age, in contrast to Leydig cells, whose numbers are stable across age groups by the same stereological assessment [^petersen2015]. In the Petersen et al. study of 26 post-mortem testes from men aged 16–80 years, mean unilateral Sertoli cell count was 407 × 10⁶ (range 86–665 × 10⁶; CV=0.33), with a significant negative correlation with age; mean unilateral Leydig cell count was 99 × 10⁶ with no significant age-related change. The progressive loss of Sertoli cells directly reduces the supportive capacity of the seminiferous epithelium.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (Sertoli cell specialization and BTB architecture are evolutionarily conserved in mammals) |
| Phenotype conserved in humans? | yes (age-related Sertoli cell loss documented by stereology in human post-mortem testes) |
| Replicated in humans? | partial (single stereological dataset; rodent mechanistic studies are more detailed) |

### Blood-testis barrier breakdown

BTB integrity declines with aging. In aged Brown Norway rats, seminiferous tubules show severe structural deterioration: tubules become "fully regressed...virtually devoid of germ cells," and lanthanum nitrate tracer permeates the basal and adluminal compartments, confirming BTB breakdown. Sertoli cell nuclei are irregular; organelles are altered; and cell junctions degenerate from continuous tight connections to focal contact points [^levy1999]. At the molecular level, the functional decline of the BTB is preceded by a quantitative reduction in cell adhesion proteins and GTPases within the seminiferous epithelium. In pachytene spermatocytes isolated from aged (18-month) versus young (4-month) Brown Norway rats, mRNA and protein levels of junction components including claudin-11 (Cldn11), occludin (Ocln), JAM2 (Jam2), N-cadherin (Ncad), and α-catenin (Ctnna2) were significantly decreased, as were the GTPases CDC42 and RAC1 [^paulrobaire2013]. A parallel FITC-inulin tracer study showed that functional BTB competence was already partially compromised at 18 months (tracer diffusion doubled relative to 4-month controls), and fully lost by 24 months (tracer reached the tubule lumen). Note that these molecular data were obtained from germ cell fractions (pachytene spermatocytes); the authors were unable to isolate Sertoli cells from aged testes due to increased cell fragility with advancing age, so whether equivalent protein losses occur in the Sertoli cells themselves is not directly established by this study.

The molecular mechanism of age-related BTB disruption has been partially elucidated. Senescent Sertoli cells accumulate elevated **miR-143-3p**, which targets the ubiquitin-conjugating enzyme UBE2E3, thereby restricting Sertoli cell proliferation (consistent with their post-pubertal terminally differentiated status but also impairing maintenance functions), triggering a cellular senescence program, and disrupting BTB integrity. Inhibition of miR-143-3p in aged mouse testes (via the TGF-β receptor inhibitor SB431542, which negatively regulates miR-143-3p) partially restored BTB function, rescued testicular atrophy, and reversed germ cell depletion [^xiao2024]. This positions Sertoli cell senescence as mechanistically upstream of BTB failure.

**Consequence of BTB breakdown.** Loss of the immunological barrier in the adluminal compartment exposes post-meiotic germ cells (which express meiosis-specific and spermatid-specific proteins not present in the thymic repertoire) to circulating lymphocytes and antibodies. This can trigger autoimmune orchitis and anti-sperm antibody production, creating an inflammatory testicular environment that further suppresses remaining germ cells. Elevated testicular inflammation also provides a pro-aging paracrine signal to neighboring [[leydig-cells]], compounding the steroidogenic decline of andropause.

### Reduced SSC niche support

As Sertoli cell number declines and their transcriptional program shifts with aging, the paracrine signals maintaining the SSC pool — primarily GDNF and SCF — are expected to decrease proportionally. Reduced GDNF bioavailability in the aging niche would bias the SSC fate decision toward differentiation (or apoptosis) over self-renewal, progressively depleting the stem cell reserve. This links Sertoli cell aging directly to the [[stem-cell-exhaustion]] hallmark acting on the SSC compartment [^sakai2018]. The magnitude of age-related GDNF reduction in human Sertoli cells has not been directly measured in vivo due to tissue-accessibility constraints. #gap/needs-human-replication

### Inhibin B decline and FSH rise

The loss of Sertoli cell mass with age is accompanied by a proportional decline in inhibin B production, which removes the inhibin B-mediated suppression of pituitary FSH. Serum inhibin B falls progressively in aging men, and serum FSH rises in a reciprocal pattern — analogous to the early perimenopausal FSH rise in women driven by the declining granulosa cell pool (see [[granulosa-cells]]). Elevated FSH in aging men reflects impaired Sertoli cell function rather than Leydig cell dysfunction; FSH and LH elevations in the same individual imply both Sertoli and Leydig cell insufficiency (combined primary hypogonadism and spermatogenic failure) [^meachem2001]. Inhibin B is a more sensitive marker of early Sertoli cell reserve loss than FSH, because FSH rises only after inhibin B has fallen substantially.

## Relationship to hallmarks of aging

| Hallmark | Role in Sertoli cell aging |
|---|---|
| [[altered-intercellular-communication]] | Declining inhibin B → FSH dysregulation (HPG axis disruption); reduced GDNF/SCF paracrine signals to SSC; BTB breakdown exposes adluminal germ cells to immune surveillance; Sertoli-derived DHH signals to [[leydig-cells]] may also diminish, reducing androgen production |
| [[stem-cell-exhaustion]] | Reduced GDNF output biases SSC fate toward differentiation/apoptosis over self-renewal; declining Sertoli cell number shrinks the SSC niche carrying capacity, progressively depleting the spermatogonial reserve |
| [[cellular-senescence]] | Aging Sertoli cells accumulate senescence markers (miR-143-3p elevation, UBE2E3 suppression); senescent Sertoli cells disrupt BTB integrity; whether a SASP-like secretory phenotype from Sertoli cells amplifies testicular inflammation is not yet defined |

## Comparison to granulosa cells (female analog)

Sertoli cells and [[granulosa-cells]] are developmentally homologous somatic support cells of the male and female gonad respectively, sharing common lineage from the bipotential genital ridge. The functional parallels are striking:

| Feature | Sertoli cells (testis) | Granulosa cells (ovary) |
|---|---|---|
| Master TF | SOX9 | FOXL2 |
| Gonadotropin receptor | FSHR | FSHR |
| AMH production | Fetal/pre-pubertal (regresses Müllerian ducts) | Preantral/small antral (ovarian reserve biomarker) |
| Inhibin B source | Yes (FSH feedback in males) | Yes (FSH feedback in females) |
| Germ cell support | Nurse + scaffold for spermatogonia → spermatozoa | Nurse + paracrine for oocyte maturation |
| Self-renewal | No (post-pubertal terminal differentiation) | No (die via atresia or luteinization) |
| Aging phenotype | Cell number loss, BTB breakdown, SSC niche failure | Mitochondrial dysfunction, senescence, oocyte coupling failure |

The key divergence: granulosa cells are **lost continuously** as follicles atresia (replacing the primordial follicle reserve), while Sertoli cells persist for the adult lifespan but accumulate functional deficits and are irreplaceable after puberty.

## Limitations and gaps

- **Mechanistic detail in aging humans**: Most molecular and ultrastructural evidence (BTB breakdown, miR-143-3p senescence pathway) derives from rat models (Brown Norway) or mouse interventional studies. Direct characterization of Sertoli cell function in aging human testes is limited by tissue accessibility. #gap/needs-human-replication
- **GDNF decline in aging human testes**: Whether GDNF secretion by Sertoli cells measurably declines with age in men has not been directly quantified in situ. #gap/needs-replication
- **Senescent Sertoli SASP**: Whether senescent Sertoli cells produce a cytokine/chemokine secretory phenotype (analogous to the SASP in senescent somatic cells elsewhere) that amplifies local testicular inflammation has not been characterized. #gap/no-mechanism
- **Stereological replication**: The Petersen et al. 2015 stereological dataset (n=26) is the highest-quality human Sertoli cell count dataset; independent replication in larger and ethnically diverse cohorts is needed. #gap/needs-replication
- **Therapeutic leverage**: No approved or clinical-stage intervention specifically targets Sertoli cell function preservation in aging men. SSC transplantation and Sertoli cell co-transplant approaches are in early preclinical development. #gap/long-term-unknown

## See also

- [[testis]] — the tissue context
- [[spermatogonial-stem-cells]] — the SSC pool; primary niche client of Sertoli cells via GDNF/SCF signaling (implicit stub)
- [[leydig-cells]] — the steroidogenic interstitial cell; cooperates with Sertoli cells in androgen-dependent spermatogenesis
- [[granulosa-cells]] — the developmentally homologous female somatic support cell
- [[amh]] — anti-Müllerian hormone; produced by Sertoli cells in early life; drives Müllerian duct regression
- [[fsh]] — pituitary gonadotropin; the sole gonadal FSH target in adult males is the Sertoli cell
- [[altered-intercellular-communication]] — hallmark manifest in disrupted HPG axis and niche signaling
- [[stem-cell-exhaustion]] — hallmark engaged by SSC niche failure downstream of Sertoli cell loss
- [[cellular-senescence]] — hallmark active in senescent Sertoli cells; drives BTB disruption
- [[andropause]] — the clinical endpoint of combined Leydig and Sertoli cell aging

---

## Footnotes

[^mruk2004]: [[studies/mruk-2004-sertoli-interactions-spermatogenesis]] · doi:10.1210/er.2003-0022 · Mruk DD, Cheng CY · review · Endocrine Reviews 2004;25(5):747–806 · PMID:15466940 · comprehensive review (715+ citations) of Sertoli-Sertoli and Sertoli-germ cell interactions; covers BTB ultrastructure (tight junctions, ectoplasmic specializations, gap junctions, desmosomes), the dynamic BTB-remodeling cycle required for preleptotene spermatocyte transit, and Rho GTPase regulation of junction trafficking; model: seminiferous epithelium (rat + in vitro) · archive status: closed; not_oa; #gap/no-fulltext-access

[^levy1999]: [[studies/levy-1999-aging-seminiferous-btb-brown-norway]] · doi:10.1002/j.1939-4640.1999.tb02529.x · Levy S, Serre V, Hermo L, Robaire B · in-vivo (rat) · Journal of Andrology 1999;20(3):356–365 · PMID:10386815 · light and electron microscopy + lanthanum nitrate tracer study of Brown Norway rat testes across 3–24 months; normal seminiferous tubules at 3 and 12 months largely replaced by 24 months by fully regressed tubules virtually devoid of germ cells with large intercellular spaces; Sertoli cell nuclei more irregularly shaped, endoplasmic reticulum vesiculated/disorganized, lysosomes large with lipidic inclusions; typical Sertoli-Sertoli BTB junctions rarely seen at 24 months, replaced by focal contact points; lanthanum nitrate permeated basal and adluminal compartments confirming BTB breakdown; authors propose either degeneration of immunological origin or lack of Sertoli cell support as upstream cause of stem cell failure · model: Brown Norway rat 3–24 months · archive status: closed-access Wiley paywall; abstract verified via PubMed PMID:10386815; #gap/no-fulltext-access

[^paulrobaire2013]: [[studies/paul-robaire-2013-btb-aging-adhesion-proteins]] · doi:10.1371/journal.pone.0084354 · Paul C, Robaire B · in-vivo (rat) · PLoS ONE 2013;8(12):e84354 · PMID:24391901 · n=4–6 per age group · microarray + qRT-PCR + Western blot on pachytene spermatocytes isolated by STA-PUT velocity sedimentation from Brown Norway rats aged 4 and 18 months; 70 of 522 genes significantly changed by ≥1.5-fold were in cell adhesion; protein levels of VCL, JAM2, N-cad, Ctnna2, and Ocln significantly decreased in aged pachytene spermatocytes; GTPases CDC42, RAC1, and several Rab proteins also decreased; FITC-inulin tracer showed BTB partially compromised at 18 months (tracer diffusion ~doubled), fully compromised by 24 months; authors note Sertoli cells from aged testes could not be isolated for parallel analysis due to increased cell fragility · model: Brown Norway rat 4 mo (young), 18 mo (aged), 21 and 24 mo (tracer study) · archive status: gold OA; downloaded (PMC3877286)

[^xiao2024]: [[studies/xiao-2024-mir143-btb-sertoli-senescence]] · doi:10.3390/cells13040313 · Xiao Z, Liang J, Huang R, Chen D, Mei J, Deng J, Wang Z, Li L, Li Z, Xia H, Yang Y, Huang Y · in-vivo (mouse) + in-vitro · Cells 2024;13(4):313 · PMID:38391926 · PMC:PMC10887369 · senescent Sertoli cells show substantial upregulation of miR-143-3p; miR-143-3p limits Sertoli cell proliferation, promotes cellular senescence, and causes BTB dysfunction by targeting UBE2E3 (ubiquitin-conjugating enzyme E2 E3); the TGF-β receptor inhibitor SB431542 (which negatively regulates miR-143-3p) alleviated BTB dysfunction, rescued testicular atrophy, and reversed germ cell depletion in aged mice · model: aged mouse + in-vitro Sertoli cell senescence model · archive status: gold OA (PMC open access); #gap/needs-human-replication

[^petersen2015]: [[studies/petersen-2015-leydig-sertoli-stereology]] · doi:10.1111/joa.12261 · Petersen PM, Seierøe K, Pakkenberg B · observational (post-mortem stereology) · Journal of Anatomy 2015;226(2):175–179 · PMID:25545958 · PMC:PMC4304573 · n=26 post-mortem male subjects aged 16–80 yr · optical fractionator stereology optimized for human testes; mean unilateral Sertoli count 407 × 10⁶ (range 86–665 × 10⁶; CV=0.33); significant decline in Sertoli cell number with age; mean unilateral Leydig count 99 × 10⁶ (range 47–245 × 10⁶; CV=0.48); no significant decline in Leydig cell number · model: human post-mortem testes · archive status: bronze OA; full XML body restricted by Wiley (publisher does not allow PMC XML download); abstract verified via PMC4304573 record — all key numbers confirmed

[^alattar1997]: [[studies/alattar-1997-amh-sertoli-postnatal-regulation]] · doi:10.1172/JCI119653 · Al-Attar L, Noël K, Dutertre M et al. · in-vivo (mouse) + in-vitro · Journal of Clinical Investigation 1997;100(6):1335–1343 · PMID:9294098 · AMH synthesis in postnatal mouse Sertoli cells is repressed by intratesticular testosterone (not serum testosterone); FSH administration elevates AMH in androgen-insensitive models; meiosis entry synergizes with androgens to suppress AMH; establishes the molecular basis of pubertal AMH repression · archive status: pending

[^aksglaede2010]: [[studies/aksglaede-2010-amh-male-lifespan]] · doi:10.1210/jc.2010-1207 · Aksglaede L, Sørensen K, Boas M et al. · observational (cross-sectional + longitudinal subgroups) · Journal of Clinical Endocrinology & Metabolism 2010;95(12):5357–5364 · PMID:20843948 · n=1027 healthy males from cord blood to age 69 yr; longitudinal follow-up subgroups through infantile minipuberty (n=55) and puberty (n=83); AMH above detection limit in all samples; median cord blood AMH 148 pmol/L; highest observed levels at 3 months (p<0.0001 vs cord blood); declined at 12 months; stable through childhood until puberty when AMH declined progressively; adults exhibit 3–4% of infant levels; serum AMH detectable throughout life, with relatively stable adult level · archive status: closed-access OUP; download failed; abstract verified via PubMed PMID:20843948; #gap/no-fulltext-access

[^meachem2001]: [[studies/meachem-2001-inhibin-b-male-reproduction]] · doi:10.1530/eje.0.1450561 · Meachem SJ, Nieschlag E, Simoni M · review · European Journal of Endocrinology 2001;145(5):561–571 · PMID:11720872 · inhibin B produced predominantly by Sertoli cells in prepubertal testis; site of production in adult testis is "still controversial" per authors (germ cell contribution unclear); clear inverse relationship between serum inhibin B and FSH in adult men; inhibin B strongly correlated with testicular volume and sperm counts; inhibin B and FSH together are more sensitive and specific for spermatogenesis than either alone; inhibin B is not a reliable predictor of sperm presence in testicular biopsy samples · archive status: green OA; abstract verified via PubMed PMID:11720872

[^sakai2018]: [[studies/sakai-2018-gdnf-ssc-renewal-mouse]] · doi:10.1262/jrd.2018-015 · Sakai M, Masaki K, Aiba S, Tone M, Takashima S · in-vivo (mouse) · Journal of Reproduction and Development 2018;64(3):267–275 · PMID:29657241 · PMC:PMC6021615 · expression dynamics of Gdnf and Fgf2 in mouse testis under aging, hypophysectomy, retinoic acid, and injury; confirms Sertoli cells express Gdnf and RET/GFRα1 receptor is in undifferentiated spermatogonia/SSCs; Fgf2 is mainly expressed in germ cells (not Sertoli cells) and its receptors are on both cultured spermatogonial cell line and testicular somatic cells; GDNF indispensable for SSC maintenance (citing prior work); FGF2-cultured spermatogonia show more differentiated phenotype than GDNF-cultured cells; distinct expression dynamics suggest distinct regulatory mechanisms · note: the GDNF conditional deletion phenotype (SSC depletion/infertility) is established by prior literature (Meng 2000) cited by Sakai 2018, not demonstrated in this paper itself · model: mouse in vivo · archive status: gold OA (PMC open access)
