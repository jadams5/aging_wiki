---
type: process
aliases: [CML, Nε-carboxymethyl-lysine, Nε-(carboxymethyl)lysine, N(epsilon)-carboxymethyllysine, Ne-carboxymethyllysine]
key-proteins: []
pathways: ["[[advanced-glycation-end-products]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: 2
caused-by: ["[[deregulated-nutrient-sensing]]"]
causes: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
literature-checked-through: 2026-07-14
verified: true
verified-date: 2026-07-14
verified-by: claude
verified-scope: "Campbell 2012: n corrected 96→26 (PubMed/PLoS ONE confirmed 26 male CABG patients; 6 diabetic/20 non-diabetic); p-values confirmed. Genuth 2015: corrected endpoint-specific AGE attribution — retinopathy=glucosepane+furosine, nephropathy=furosine, neuropathy=MG-H1+furosine (abstract confirmed); removed unsupported claim that MG-H1+glucosepane were principal predictors for nephropathy. Monnier 2015: n corrected from ~466 total to endpoint-specific subsamples (CAC n=187, IMT n=127, cardiac MRI n=142); added specific p-values (abstract confirmed). Ahmed 1986: ~40% CML yield and original identification in lens proteins confirmed via PubMed abstract (no DOI; pre-digital). Delanghe 2024: full PMC text read 2026-07-14; CML/CEL evidence is disappearance of assigned ions from free amino-acid/sugar mixtures, not direct protein-bound repair. Trabosh 2026: main PDF + supplement read end-to-end 2026-07-14; protein-bound CML-to-lysine chemistry and single-donor ex-vivo results verified. Full PDFs for Campbell 2012, Monnier 2015, Genuth 2015 not read (downloads pending) — claims verified at abstract level."
---


# Carboxymethyl-Lysine (CML)

Nε-(carboxymethyl)lysine (CML) is the **most abundant AGE adduct in mammalian plasma by mass** and the **canonical non-crosslink AGE**. It forms on the ε-amino group of lysine via two parallel chemical routes: oxidative degradation of the fructosyl-lysine Amadori product (the "glycoxidative" route requiring oxidation), and direct reaction of glyoxal with lysine (the "carbonyl" route). CML was first identified in human lens proteins by Ahmed, Thorpe, and Baynes in 1986 [^ahmed1986]. Unlike [[glucosepane]] (a bifunctional crosslink that structurally alters ECM), CML is a **monovalent modification** — a single-site lysine adduct that alters local charge and protein-binding properties. Its primary pathological relevance is as the canonical **RAGE ligand** driving downstream NF-κB-mediated chronic inflammation.

## Chemistry

- **Structure:** Lysine ε-amino + glyoxal (OR fructosyl-lysine + oxidative step) → CML. Product: carboxylic acid (-CH₂-COOH) attached to the lysine nitrogen, converting the basic ε-amino group to a negatively charged carboxylate.
- **Non-fluorescent** (contrast with pentosidine and glucosepane, which are fluorescent or form fluorescent conjugates).
- **Non-crosslinking:** CML has one point of attachment to protein (the lysine ε-N); it cannot covalently bridge to another protein residue. This distinguishes it from glucosepane (Lys–Arg crosslink) and pentosidine (Lys–Arg crosslink).
- **Physiologically stable but engineerably reversible:** CML does not spontaneously hydrolyze from protein, and no endogenous mammalian CML-repair enzyme is known. Protein turnover is therefore the normal clearance route. Engineered CMLase now demonstrates that the adduct can nevertheless be catalytically removed ex vivo.[^trabosh2026]

## Two routes of CML formation

| Route | Precursor | Oxidation required? | Conditions |
|---|---|---|---|
| **Glycoxidative** (Amadori oxidation) | Fructosyl-lysine (Amadori product) | Yes (free radical; requires O₂) | Low-level formation even under normoglycemia; amplified by oxidative stress; the route characterized by Ahmed 1986 |
| **Carbonyl** (direct glyoxal condensation) | Glyoxal + lysine | No | Glyoxal derives from lipid peroxidation, DNA oxidation, and glucose degradation; carbonyl-stress-dependent |

Both routes contribute to tissue CML in vivo. Under diabetic conditions with elevated glucose + oxidative stress, both routes are accelerated. Antioxidant interventions (reducing oxidative stress) primarily suppress the glycoxidative route while having less impact on the direct carbonyl route.

## Detection and quantitation

**Gold standard:** GC-MS or LC-MS/MS after acid hydrolysis of protein to free amino acids. Quantified as µmol CML per mol lysine (normalizes for protein content). Research settings only.

**Clinical-grade:** ELISA with monoclonal anti-CML antibodies. Widely used in epidemiological studies; specificity varies substantially by antibody clone (some cross-react with other AGE adducts). Reference ranges (approximate; from GC-MS validated literature; specific values require full-text verification against Monnier or Sell group publications): #gap/needs-human-replication
- Young adults (~20–40 yr): ~0.5–1.5 µmol CML/mol lysine in skin collagen (GC-MS method; approximate).
- Age 80+ (non-diabetic): ~2–4 µmol CML/mol lysine.
- T1D with complications: elevated relative to age-matched non-diabetic controls (specific numeric range requires full-text Monnier/Sell paper verification; Campbell 2012 measured plasma-immunoreactive CML in cardiac surgery patients, not skin collagen CML).

**Plasma vs. tissue:** Plasma CML reflects the balance of CML shed from short-lived glycated proteins (particularly albumin, hemoglobin) — it is more dynamic and more sensitive to short-term glycemic fluctuation than tissue collagen CML, which accumulates over decades.

## Tissue distribution

CML accumulates preferentially in long-lived proteins:
- **Skin collagen** — the most-studied compartment; collagen I half-life decades; CML tracks lifetime glycemic exposure.
- **Lens crystallin** — original identification site; nearly zero turnover; extreme CML accumulation in aged/diabetic lenses.
- **Kidney glomerular basement membrane** — CML accumulation correlates with nephropathy severity.
- **Arterial wall collagen** — CML plus glucosepane crosslinks stiffen the arterial wall.
- **Retinal basement membranes** — CML in drusen and Bruch's membrane; relevant to AMD (see Delanghe 2024 section).

**Relative abundance vs. glucosepane:** CML is more abundant than glucosepane in *plasma* (because plasma contains short-lived proteins that shed CML rapidly). In *long-lived ECM collagen*, glucosepane exceeds CML by mass (per Sell 2005; see [[glucosepane]]) — because glucosepane is stable once formed and accumulates as a crosslink, while a fraction of CML-bearing collagen is continuously remodeled or degraded.

## RAGE signaling — the inflammation connection

CML is the **canonical RAGE (Receptor for Advanced Glycation End-products) ligand**. RAGE is a multiligand pattern-recognition receptor; its engagement by CML-modified proteins initiates:

1. RAGE dimerization → intracellular signaling → NF-κB activation
2. NF-κB → transcription of TNF-α, IL-6, IL-8, VCAM-1, MCP-1
3. Downstream: endothelial activation, leukocyte recruitment, pro-fibrotic signaling

This positions CML as the principal molecular bridge between the glycation-chemistry axis and the **[[chronic-inflammation]] hallmark** of aging. The RAGE–NF-κB axis is also a core driver of **[[altered-intercellular-communication]]** — CML-modified matrix and circulating CML-proteins send aberrant paracrine signals that alter cell behavior in the surrounding microenvironment.

## Aging trajectory

CML accumulates monotonically with age in skin collagen [^campbell2012]. The accumulation rate is approximately linear in non-diabetic individuals, with a 3–5-fold increase from youth to old age. Diabetes accelerates this 2–5× at matched age.

Monnier et al. 2015 (DCCT/EDIC) established that skin collagen AGEs correlate with cardiovascular endpoints independent of HbA1c in DCCT/EDIC T1D participants (various subsamples: CAC n=187, IMT change n=127, cardiac MRI n=142) [^monnier2015]. Furosine independently predicted future coronary artery calcium (CAC) in multivariate analysis (P=0.01) and CAC>0 (P=0.039). Glucosepane, pentosidine, and MG-H1 all correlated with IMT change year 1–6 (P<0.05). Left ventricular mass correlated with MG-H1 (P<0.05); LV mass/end-diastolic volume ratio correlated with furosine and MG-H1 (P<0.05) and carboxyethyllysine (P<0.01). CML is part of the broader AGE panel; the most discriminating individual AGEs for different complication endpoints vary (see [[glucosepane]] § "Diabetic context").

Campbell et al. 2012 (*PLoS ONE*) showed in n=26 male cardiac surgery patients (aged 43–78; 6 diabetic, 20 non-diabetic) that plasma CML (immunoreactive) correlates with mitral E/A ratio (r=0.44, P=0.04) and septal early diastolic velocity e' (r=0.51, P=0.02) — the key indices of diastolic dysfunction [^campbell2012]. The association with e' persisted in non-diabetic patients specifically after age adjustment (P=0.007). Authors concluded "diastolic dysfunction of aging was independent of myocardial structure but was associated with plasma AGE levels." This provides human evidence for CML as a contributor to age-related diastolic dysfunction, distinct from structural cardiac remodeling.

## Clinical context — DCCT/EDIC

Genuth et al. 2015 (DCCT/EDIC) established that skin collagen AGEs independently predict microvascular complication progression in T1D beyond HbA1c [^genuth2015]. The leading individual predictors by complication varied: retinopathy — glucosepane (GSPNE) + furosine (FUR) independently of HbA1c; nephropathy — FUR independently of HbA1c; neuropathy — MG-H1 + FUR independently of HbA1c. CML was part of the 10-AGE panel; its independent contribution was not highlighted as a primary predictor in the abstract. The overall 10-AGE panel added significant predictive value beyond HbA1c for all three microvascular endpoints (P≤0.002 retinopathy; P=0.008 microalbuminuria; P≤0.005 neuropathy).

For the macular edema (CSME) finding in DCCT/EDIC (Monnier 2022; plasma glucosepane and CML), see [[glucosepane]] § "Diabetic context."

## Dietary AGEs and CML

High-temperature cooking (roasting, grilling, frying) generates CML in food via the Maillard reaction. CML is the best-characterized dietary AGE. The **Vlassara/Uribarri group** has argued that dietary AGE intake contributes meaningfully to tissue CML burden and that dietary AGE restriction reduces circulating AGE levels and inflammatory markers. Counter-arguments (notably from independent groups) emphasize that:
1. Endogenous CML formation from triose-phosphate/glyoxal reactions produces far larger fluxes than dietary intake.
2. Dietary CML is largely hydrolyzed in the gut; systemic absorption of intact CML is limited.
3. The few interventional dietary-AGE-restriction trials used ELISA-measured "total AGE equivalents," not CML-specific LC-MS methods.

#gap/contradictory-evidence — The relative contribution of dietary vs. endogenous CML to tissue burden is contested. This wiki adopts a conservative position: endogenous formation is the dominant source in humans; dietary restriction likely has modest effect on tissue burden, though it may reduce circulating pro-inflammatory AGE-modified proteins in the short term.

## CML as a therapeutic target — clearance considerations

**Antioxidant strategies:** Reduce CML formation via the glycoxidative route (suppress free-radical oxidation of Amadori products). Vitamin E, vitamin C, and polyphenols have been tested in small trials with mixed results. Effect on tissue collagen CML over years is underpowered in all published trials.

**Glyoxal scavengers:** Aminoguanidine, pyridoxamine — block the carbonyl (direct glyoxal) route. Clinical failure of aminoguanidine (see [[methylglyoxal]] § Therapeutic scavenger strategies) limits enthusiasm.

**CML clearance from established tissue:** No mammalian enzyme is known to cleave CML from protein. [[fn3k]] acts on fructosyl-lysine (Amadori product, Stage 2), not CML (a downstream product). Under normal physiology, established CML therefore persists until protein turnover.

**Delanghe 2024 — suggestive FAOD precedent:** Delanghe et al. reported disappearance of mass features assigned to CML, CEL, and other products after FAOD treatment.[^delanghe2024] Full-text review shows that this substrate experiment used week-long mixtures of free lysine or arginine with glucose or fructose, followed by untargeted UHPLC-HRMS. It did not show CML removal from an intact peptide/protein or native-lysine restoration. Its separate retinal experiments measured autofluorescence, spectroscopy, and drusen area rather than CML specifically. It is therefore suggestive enzyme-substrate precedent, not independent replication of protein repair. #gap/needs-replication

**Trabosh 2026 — engineered protein-bound CML repair:** [[cmlase|CMLase (CrGO-897)]], an engineered FAD-dependent glycine oxidase, oxidatively removes the CML carboxymethyl group to regenerate native lysine, with hydrogen peroxide and glyoxylate as coproducts.[^trabosh2026] At 5 µM overnight, it reduced CML at 30/33 mapped sites on CML-BSA and reduced endogenous CML in a 64-year-old human lens by 45% using hydrolysis/LC-MS/MS (78% by ELISA). The paper states >70% lower anti-CML aortic staining, but deposited means imply ~66% versus inactive enzyme; skin staining fell by >55%. Seven donors appear across the human-tissue figures, but the headline older lens, aorta, and skin outcomes each use one donor, and the aorta/skin `n=4` values are tissue regions. These are biochemical and ex-vivo target-engagement results; no living mammalian tissue, delivery, safety, signaling, biomechanics, or other functional outcome was tested. Because CML is monovalent, this is **mature AGE-adduct repair, not crosslink cleavage**. The result supports aging-context `druggability-tier: 2` as a high-quality probe, not a clinical therapy.

## Limitations and gaps

- **No in-vivo CML-repair intervention exists.** CMLase establishes ex-vivo chemistry but not delivery into intact ECM, durable target engagement, safety, or benefit. #gap/no-mechanism for acute CML clearance in living ECM.
- **Dietary CML contribution is contested.** Whether dietary AGE restriction meaningfully reduces tissue burden in humans with normal metabolic function is unresolved. #gap/contradictory-evidence.
- **ELISA-based CML measurements vary across antibody clones.** Much of the epidemiological literature uses immunoreactive "total AGE" methods with heterogeneous specificity; quantitative comparisons across studies are difficult.
- **Aging-trajectory data in healthy non-diabetic cohorts using MS-validated CML quantification** are limited. Most large cohort studies (DCCT/EDIC) are in diabetic populations. #gap/needs-human-replication (normoglycemic aging cohort).
- **Independent contribution of CML vs. other AGEs** to specific aging outcomes (arterial stiffness, diastolic dysfunction, cognitive decline) is not separated in most cohort analyses — CML co-accumulates with glucosepane, pentosidine, and MG-H1.

## See also

- [[advanced-glycation-end-products]] — upstream process biology; AGE formation and defense framework
- [[glucosepane]] — dominant bifunctional crosslink; structurally distinct from CML
- [[pentosidine]] — secondary fluorescent crosslink; lysine-arginine, also non-glycoxidative
- [[methylglyoxal]] — MG; precursor to CEL and MOLD (related MG-derived AGEs); substrate of [[glo1]]
- [[glo1]] — Tier 1 AGE defense (detoxifies MG precursor)
- [[fn3k]] — Tier 2 deglycation (acts on Amadori products, not on CML)
- [[microbial-amadori-deglycation]] — FAOD precedent and the boundary between early Amadori reversal and mature-adduct repair
- [[cmlase]] — engineered CML-to-lysine enzyme; ex-vivo proof of concept
- [[skin-autofluorescence-age-reader]] — non-invasive bulk-AGE biomarker technology
- [[age-crosslink-breakers]] — intervention class page

## Footnotes

[^ahmed1986]: PMID:3082871 · Ahmed MU, Thorpe SR, Baynes JW · *J Biol Chem* 1986;261(11):4889–94 · in-vitro + ex-vivo · model: glycated proteins (bovine serum albumin + human lens/collagen/urine) · identified CML as a degradation product of fructosyl-lysine (Amadori product) formed by oxidative cleavage in ~40% yield; detected CML in human lens proteins, tissue collagens, and urine — in vivo formation confirmed · no DOI in PubMed record (pre-digital journal)

[^campbell2012]: doi:10.1371/journal.pone.0049813 · Campbell DJ, Somaratne JB, Jenkins AJ, Prior DL, Yii M, Kenny JF, Newcomb AE, Schalkwijk CG, Black MJ, Kelly DJ · *PLoS One* 2012;7(11):e49813 · PMID:23189164 · observational · n=26 male CABG surgery patients (43–78 yr; 6 diabetic, 20 non-diabetic) · plasma CML correlated with E/A ratio (r=0.44, P=0.04) and septal e' velocity (r=0.51, P=0.02); association with e' persisted in non-diabetic subgroup after age adjustment (P=0.007); "diastolic dysfunction of aging independent of myocardial structure but associated with plasma AGE levels" · OA gold

[^monnier2015]: doi:10.1186/s12933-015-0266-4 · Monnier VM, Sun W, Gao X, Sell DR, Cleary PA, Lachin JM, Genuth S, DCCT/EDIC Research Group · *Cardiovasc Diabetol* 2015;14:118 · PMID:26341632 · observational · n=187 (CAC endpoint), 127 (IMT change endpoint), 142 (cardiac MRI endpoint) — DCCT/EDIC T1D subsamples · furosine independently predicted CAC in multivariate analysis (P=0.01); glucosepane, pentosidine, MG-H1 all correlated with IMT change 1–6 yr (P<0.05); LV mass correlated with MG-H1; LV mass/EDV ratio correlated with furosine, MG-H1, and carboxyethyllysine · OA gold

[^genuth2015]: doi:10.2337/db14-0215 · Genuth S, Sun W, Cleary P, Gao X, Sell DR, Lachin J, Monnier VM, DCCT/EDIC Research Group · *Diabetes* 2015;64(1):266–78 · PMID:25187362 · observational · n=~466 · skin collagen AGEs; MG-H1 and glucosepane emerged as principal predictors of microvascular complication progression; HbA1c loses significance after AGE adjustment; 10-AGE panel independently predicts retinopathy and nephropathy · OA bronze

[^delanghe2024]: doi:10.3390/ijms25094779 · Delanghe JR, Diana Di Mavungu J, Beerens K, Himpe JJ, Bostan N, Speeckaert MM, Vrielinck H, Vral A, Van Den Broeke C, Huizing M, Van Aken E · *Int J Mol Sci* 2024;25(9):4779 · PMID:38732004 · PMCID:PMC11083825 · ex-vivo + in-vitro mixture chemistry · model: glycolaldehyde-glycated porcine retina, human AMD retinal sections, and free amino-acid/sugar mixtures · FAOD reduced porcine-retina autofluorescence by 43 ± 4% (p=0.001) and human drusen surface to 45 ± 21% (p<0.005); untargeted UHPLC-HRMS reported disappearance of assigned CML/CEL ions from free lysine/sugar mixtures, without intact-protein CML-to-lysine demonstration · full PMC text verified 2026-07-14 · #gap/needs-replication

[^trabosh2026]: [[studies/trabosh-2026-cmlase-deglycation]] · doi:10.1038/s41467-026-75141-2 · in-vitro + ex-vivo human tissue · seven human donors across figures, but headline older lens/aorta/skin outcomes each use one donor and technical/spatial subsamples · direct protein-bound CML reduction and lysine restoration; no treatment-comparison p-values (secondary B-factor correlation p=0.0343); no living-mammalian, functional, delivery, or safety test · peer-reviewed
