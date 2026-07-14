---
type: method
aliases: [diffusion tensor imaging analysis along the perivascular space, diffusion tensor image analysis along the perivascular space, DTI analysis along the perivascular space, ALPS index]
abbreviation: DTI-ALPS
category: imaging
year-introduced: 2017
canonical-reference: "doi:10.1007/s11604-017-0617-z"
current-protocols-citation: null
related-methods:
  - "[[methods/diffusion-tensor-imaging]]"
  - "[[methods/intrathecal-contrast-enhanced-mri]]"
  - "[[methods/free-water-imaging]]"
typical-use-cases:
  - "Retrospective, non-invasive comparison of periventricular directional diffusivity between clinical groups"
  - "Candidate proxy for perivascular water mobility or glymphatic-related physiology in neurologic, sleep, and aging studies"
  - "Longitudinal or treatment-response research when acquisition, head orientation, preprocessing, and ROI definitions are held fixed"
key-limitations:
  - "Not a direct measure of fluid flow, solute transport, or whole-brain glymphatic clearance; it is a dimensionless directional-diffusivity ratio from small deep-white-matter ROIs"
  - "Crossing fibers, axonal dispersion and undulation, tract orientation, white-matter injury, and heterogeneous medullary-vessel orientation can change the index independently of perivascular fluid"
  - "Strong dependence on ROI placement, image plane and head position, diffusion-gradient sampling, echo time, preprocessing, registration, and scanner protocol limits cross-study comparability"
  - "The single-tensor model cannot resolve multiple fiber populations within a voxel or separate PVS water from tissue and extracellular-water compartments"
  - "A bilateral mean is often called a global or whole-brain ALPS index, but it averages two local measurements rather than sampling clearance across the brain"
evidence-weight-implication: "Treat DTI-ALPS as a candidate, protocol-dependent marker of periventricular directional water diffusivity. A lower index supports an imaging association, not a finding of impaired glymphatic clearance, unless an orthogonal clearance measure corroborates it; prefer within-protocol comparisons and adjust for age, head geometry, white-matter disease, motion, and scanner effects."
literature-checked-through: 2026-07-11
verified: true
verified-date: 2026-07-11
verified-by: claude
verified-scope: "Load-bearing DTI-ALPS formula, interpretation, reproducibility, crossing-fiber/white-matter-geometry confounds, tracer-comparison numerics, and ME/CFS application checked against full texts of Taoka 2022/2024, Georgiopoulos 2024, Schilling 2025, Mossige 2026, and Thapaliya 2026. Taoka 2017 title/authors/year/n=31 were checked against the publisher record and abstract; its formula and anatomical details were cross-checked in the later full-text Taoka papers because the original full text is subscription-only. General DTI preprocessing/QC recommendations were not independently checked against a separate diffusion-MRI standards source."
---

# Diffusion Tensor Imaging Analysis Along the Perivascular Space (DTI-ALPS)

DTI-ALPS is a non-invasive diffusion-MRI analysis that summarizes **relative right–left directional diffusivity in small periventricular white-matter regions**. It was proposed as an indirect marker of water movement along medullary-vessel perivascular spaces and has been widely used as a candidate proxy for [[glymphatic-system|glymphatic]] physiology.[^taoka2017] Its measured quantity is narrower: the ALPS index is a dimensionless ratio derived from a single-tensor model, not a measurement of bulk flow, tracer transport, waste removal, or whole-brain clearance. The method's own developers now recommend reporting a “higher” or “lower ALPS index” and discussing any glymphatic interpretation separately.[^taoka2024]

---

## Principle

At the level of the lateral ventricular bodies, deep medullary vessels and their accompanying perivascular spaces are assumed to run predominantly in the right–left direction (the image x-axis after standardized reorientation). Nearby projection fibers run mainly inferior–superior, while association fibers run mainly anterior–posterior. DTI-ALPS exploits this approximate orthogonality: x-axis diffusivity is sampled in projection- and association-fiber ROIs, where the dominant fiber direction should not itself be x-aligned.[^taoka2017]

The conventional index is:

$$
\mathrm{ALPS\ index}=
\frac{\operatorname{mean}(D_{xx,\mathrm{proj}},D_{xx,\mathrm{assoc}})}
{\operatorname{mean}(D_{yy,\mathrm{proj}},D_{zz,\mathrm{assoc}})}
=
\frac{D_{xx,\mathrm{proj}}+D_{xx,\mathrm{assoc}}}
{D_{yy,\mathrm{proj}}+D_{zz,\mathrm{assoc}}}
$$

where:

- $D_{xx,\mathrm{proj}}$ is x-axis diffusivity in the projection-fiber ROI;
- $D_{xx,\mathrm{assoc}}$ is x-axis diffusivity in the association-fiber ROI;
- $D_{yy,\mathrm{proj}}$ is y-axis diffusivity in the projection-fiber ROI; and
- $D_{zz,\mathrm{assoc}}$ is z-axis diffusivity in the association-fiber ROI.

The denominator is an internal reference composed of directions intended to be orthogonal both to the presumed PVS axis and to the dominant tract in each ROI. A higher ratio therefore means that x-axis Brownian water motion is larger relative to those reference components. It does **not** identify which compartment generated the signal or whether water or solutes were cleared from brain tissue.[^taoka2024]

Left and right indices may be reported separately. Their arithmetic mean is often labeled “bilateral,” “global,” or “whole-brain” ALPS. Only “bilateral mean” is anatomically literal: the measurement remains confined to local deep-white-matter ROIs beside the lateral ventricles.

---

## Workflow

### 1. Diffusion MRI acquisition

Acquire diffusion-weighted images with non-diffusion-weighted ($b=0$) volumes and enough gradient directions for tensor fitting. Conventional studies commonly fit the tensor from a $b\approx1000\ \mathrm{s/mm^2}$ shell; higher shells may be acquired for other models but should not be mixed into an ordinary single-shell tensor without a prespecified method. Record field strength, coil, voxel size, b-values, gradient directions, phase encoding, echo time, slice prescription, head position, and acquisition time.

The CHAMONIX test–retest study found high repeatability under a fixed protocol (ICC 0.828 in seven healthy volunteers) but showed that imaging plane/head position, the number of diffusion-encoding gradient axes, and echo time alter the index. Scanner changes and averaging did not materially alter values in that small experiment, but this does not establish universal scanner interchangeability.[^taoka2022]

### 2. Preprocessing

Apply, in a documented order:

1. denoising and optional Gibbs-ringing correction;
2. susceptibility-distortion correction when reverse-phase-encoded data are available;
3. eddy-current and subject-motion correction with gradient-table rotation;
4. brain masking and bias-field correction;
5. exclusion or censoring of severely motion-corrupted volumes; and
6. tensor fitting to generate fractional-anisotropy (FA) and x-, y-, and z-axis diffusivity maps ($D_{xx}$, $D_{yy}$, $D_{zz}$).

Axis labels are meaningful only after image orientation is standardized. An unnoticed axis swap, oblique slice prescription, or inconsistent reorientation changes which tensor components enter the formula and can invalidate the index.

### 3. ROI definition

Use a color-coded FA map at the lateral-ventricular body level to locate projection-fiber and association-fiber regions in each hemisphere. Implementations use manually placed small circles/spheres or atlas-defined ROIs registered into subject space. ROI diameter, shape, coordinates, space (native vs template), hemisphere, operator, and blinding must be reported; no universal ROI geometry has been adopted.[^taoka2024]

Placement should:

- favor voxels in which projection or association fibers have the expected dominant orientation;
- avoid x-oriented subcortical/commissural fibers, which can inflate the numerator;
- avoid infarcts, tumors, severe white-matter hyperintensities, ventriculomegaly-distorted anatomy, and partial volume with ventricle/CSF unless these are explicitly part of the question; and
- use the same rule across all groups and time points.

### 4. Extract components and calculate

Extract the mean $D_{xx}$, $D_{yy}$, and $D_{zz}$ values from each projection and association ROI. Calculate the four-component ratio separately for each hemisphere. Preserve the component diffusivities alongside the ratio: a lower index can arise from a lower numerator, a higher denominator, or both, and those patterns need not have the same biological interpretation.

If a bilateral mean is used, calculate it only after the left and right indices are obtained. Do not substitute pooled component averages unless the analysis plan defines and validates that alternative. Report hemisphere-specific results when lateralization is hypothesized, but correct for multiple comparisons.

---

## Output format

- **Primary output:** dimensionless left and right ALPS indices.
- **Optional summary:** arithmetic mean of left and right indices, labeled “bilateral mean” rather than implying brain-wide coverage.
- **Required supporting outputs:** $D_{xx,\mathrm{proj}}$, $D_{xx,\mathrm{assoc}}$, $D_{yy,\mathrm{proj}}$, and $D_{zz,\mathrm{assoc}}$ for each hemisphere.
- **QC outputs:** ROI masks over color FA maps, motion/eddy metrics, tensor-fit residuals, ROI voxel counts, and inter-/intrarater reliability when manual placement is used.
- **Analysis metadata:** scanner and sequence, b-shell used for tensor fitting, gradient-direction count, echo time, image orientation, preprocessing software/version, registration method, and ROI rule.

There is no assay-independent clinical cutoff. Raw values should not be compared across protocols as though they share a calibrated physical scale.

---

## Key parameters and sources of dependence

| Parameter | Why it matters | Minimum reporting / control |
|---|---|---|
| Image plane and head orientation | Changes the alignment between scanner axes, medullary vessels, and fiber tracts | Standardize prescription/reorientation; model residual orientation divergence |
| Gradient directions and b-value | Affect tensor stability and compartment sensitivity | Report shell and direction count; fit like with like |
| Echo time and spatial resolution | Change tissue weighting, SNR, and partial volume | Match across groups/sites; include in harmonization |
| ROI definition | Small shifts sample different fibers and lesions | Save masks; blind raters; quantify overlap and ICC |
| Native vs template space | Registration can move or deform small ROIs | State transform chain; inspect every transformed ROI |
| Crossing fibers | Single-tensor diagonal components incorporate multiple axonal populations | Inspect fiber geometry; treat as a structural confound |
| White-matter disease and ventricular geometry | Alter diffusivity and tract orientation independently of clearance | Quantify WMH/atrophy/ventricular volume; adjust or stratify |
| Motion | Biases tensor components and may differ systematically by disease severity | Report framewise/volume metrics; apply matched QC thresholds |
| Time and physiologic state | Hydration, sleep/wake state, vascular pulsation, and time of day may affect water mobility | Standardize when feasible; record recent sleep and scan time |

Multisite analyses require protocol harmonization and explicit site/scanner adjustment. Statistical harmonization cannot recover biological specificity that was absent at acquisition.

---

## Validation and QC

### Technical repeatability

Fixed-sequence test–retest results support using DTI-ALPS for carefully controlled within-protocol comparisons, not interchangeability across arbitrary acquisitions. The small CHAMONIX experiment also found greater reproducibility with bilateral than unilateral ROI placement and demonstrated parameter sensitivity that should be treated as part of the measurement, not nuisance detail.[^taoka2022]

Manual-ROI studies should report intrarater and interrater ICCs and spatial overlap, not ICC alone: similar final ratios can arise from non-overlapping tissue samples. Automated or atlas-based ROIs reduce operator variability but add registration and template-dependence; visual QC remains necessary.

### Anatomical specificity

Georgiopoulos et al. used analytical modeling and in-vivo region-of-interest analyses to show that crossing-fiber configurations can inflate the ALPS index, providing an axonal route to the same directional asymmetry attributed to PVS water.[^georgiopoulos2024] Schilling et al. extended this analysis with high-resolution multishell Human Connectome Project data, simulations, and vascular imaging: radial asymmetry was widespread, persisted at high b-values, varied with crossing fibers, dispersion, and undulation, and medullary-vessel orientation was heterogeneous in ALPS-associated regions.[^schilling2025] These findings undermine compartment specificity; they do not make the ratio numerically meaningless.

### Comparison with an orthogonal clearance measure

Mossige et al. directly compared DTI-ALPS with intrathecal gadobutrol-enhanced MRI in 56 people undergoing work-up for CSF disorders. The ALPS index was lower in idiopathic normal-pressure hydrocephalus than in reference participants (1.26 vs 1.68, $P<0.001$), but agreement with contrast-derived glymphatic measures was limited: tracer enrichment in ALPS ROIs averaged only 10%, the only across-group association was with 24-hour deep-white-matter enrichment, and no association was detected with 48-hour tracer dynamics in any region ($|\beta|\leq8$, $P\geq0.55$).[^mossige2026] This is important negative validation evidence. It argues against treating ALPS as a validated surrogate endpoint for whole-brain glymphatic clearance. #gap/contradictory-evidence

---

## Limitations and failure modes

1. **Construct validity.** DTI-ALPS measures a directional-diffusivity ratio. Calling a low value “glymphatic dysfunction” silently substitutes the proposed biological construct for the measured variable.

2. **Single-tensor ambiguity.** A tensor describes one effective diffusion ellipsoid per voxel. It cannot separate PVS water from intra-axonal, extra-axonal, interstitial, or CSF partial-volume components, and it cannot resolve multiple crossing fiber populations.

3. **Geometry confounding.** The method assumes approximate orthogonality among image axes, dominant white-matter tracts, and medullary vessels. Crossing fibers, fiber curvature/undulation, head angle, ventricular enlargement, atrophy, and disease-related tract displacement violate that assumption.[^georgiopoulos2024][^schilling2025]

4. **Local sampling.** Two small periventricular regions per hemisphere cannot establish clearance in cortex, basal ganglia, meninges, or the entire brain. Averaging hemispheres improves precision but not coverage.

5. **Static observation of dynamic physiology.** A short diffusion scan samples water mobility at one time under one physiologic state; glymphatic transport is temporally dynamic and involves influx, exchange, and efflux at different spatial scales.

6. **Ratio opacity.** Disease-related changes in either numerator or denominator alter the ratio. Reporting only the index hides whether the result arose from putative PVS-aligned diffusivity or from the reference components.

7. **Protocol and processing dependence.** Sequence, gradient sampling, echo time, orientation, tensor solver, registration, and ROI placement can shift the index. Cross-study meta-analysis without these moderators risks combining non-equivalent measures.[^taoka2022]

8. **Circular clinical validation.** Correlation with sleep or cognition does not independently validate glymphatic specificity, because both outcomes also correlate with age, vascular disease, white-matter integrity, medication, mood, activity, and motion.

---

## Evidence-weight implications for this wiki

When a cited study uses DTI-ALPS:

1. State the direct result as **higher/lower ALPS index** or **altered periventricular directional diffusivity**. Reserve “impaired glymphatic clearance” for a qualified hypothesis or for concordant multimodal evidence.
2. Check whether acquisition, preprocessing, ROI placement, and tensor-fit shell were identical across groups; scanner/site differences require adjustment.
3. Inspect the four component diffusivities. A ratio-only result has lower mechanistic interpretability.
4. Check age, sex, motion, sleep state, vascular risk, white-matter hyperintensity burden, atrophy, ventricular volume, and disease-related anatomic distortion as potential confounders.
5. Treat cross-sectional group differences and symptom correlations as associative. They do not establish whether sleep disruption caused the ALPS difference, the ALPS difference caused symptoms, or both reflect a third process.
6. Require replication and an orthogonal measure—dynamic contrast MRI where ethically appropriate, CSF-flow imaging, free-water/multicompartment diffusion, visible-PVS burden, or fluid biomarkers—before promoting a disease-specific result to a clearance mechanism.

### Application to the 2026 ME/CFS study

Thapaliya et al. analyzed 31 people with ME/CFS and 27 controls using 3-T DTI, manually placed 3-mm-diameter bilateral ROIs, and the $b=1000\ \mathrm{s/mm^2}$ shell. The bilateral mean was lower in ME/CFS (1.44 ± 0.086 vs 1.51 ± 0.11; raw $P=0.014$, $P_{FDR}=0.028$), driven by a right-sided group difference; within ME/CFS, the bilateral mean correlated with self-reported sleep-disturbance and impaired-concentration severity.[^thapaliya2026] The defensible method-level interpretation is **a preliminary, cross-sectional difference in a protocol-dependent ALPS index**. It does not demonstrate reduced waste clearance, explain neuroinflammation, establish causal direction with sleep or cognition, or validate right-hemisphere glymphatic dysfunction. Independent replication with objective sleep/cognitive measures, component-level diffusivities, white-matter/ventricular geometry covariates, and an orthogonal fluid-dynamics assay is needed. #gap/needs-replication

---

## Related methods

| Method | Relationship | What it adds |
|---|---|---|
| [[methods/diffusion-tensor-imaging]] | Parent acquisition/model | FA, mean/axial/radial diffusivity and tensor-fit diagnostics; shares crossing-fiber limitations |
| [[methods/intrathecal-contrast-enhanced-mri]] | Orthogonal, invasive tracer method | Time-resolved CSF tracer enrichment and clearance; closer to transport but off-label/invasive and semiquantitative |
| [[methods/free-water-imaging]] | Complementary diffusion model | Attempts to separate a free-water compartment from tissue signal; still model- and geometry-dependent |
| Multishell/high-angular-resolution diffusion MRI | Higher-order alternative | Better characterizes crossing fibers and multiple compartments than a single tensor |
| MRI-visible PVS segmentation | Structural complement | PVS burden and distribution; anatomy rather than dynamic clearance |

---

## Pages citing this method

- [[studies/thapaliya-2026-me-cfs-dti-alps]] — preliminary ME/CFS case-control study; lower bilateral ALPS index and symptom correlations.
- [[glymphatic-system]] — canonical process page; distinguishes direct tracer evidence and dynamic fluid coupling from candidate imaging proxies.
- [[tissues/brain]] — aging and sleep context with modality-specific qualification.

---

## Limitations and gaps

- `#gap/needs-replication` — disease-specific ALPS findings commonly come from single-center cross-sectional cohorts; standardized multicenter test–retest and longitudinal studies remain necessary.
- `#gap/contradictory-evidence` — some earlier comparisons reported associations with intrathecal contrast measures, whereas the larger 2026 direct comparison found limited correspondence and no 48-hour association.[^mossige2026]
- `#gap/no-mechanism` — the relative contributions of PVS water, extracellular water, axonal geometry, and white-matter pathology to a given ALPS change cannot be decomposed by the conventional formula.
- No consensus reference standard, clinical cutoff, standardized ROI size, or universally accepted acquisition/processing pipeline exists.
- Dedicated method pages do not yet exist for diffusion tensor imaging, intrathecal contrast-enhanced MRI, free-water imaging, or MRI-visible PVS segmentation.

---

## Footnotes

[^taoka2017]: doi:10.1007/s11604-017-0617-z · Taoka T, Masutani Y, Kawai H, et al. · *Jpn J Radiol* 2017;35:172–178 · n=31 humans · observational methods/application study · introduced DTI-ALPS and its directional-diffusivity ratio at the lateral-ventricular body level
[^taoka2022]: doi:10.1007/s11604-021-01187-5 · Taoka T, Ito R, Nakamichi R, et al. · *Jpn J Radiol* 2022;40:147–158 · n=7 healthy volunteers · repeated-measures technical study · fixed-protocol ICC 0.828; index changed with imaging plane/head position, gradient-axis count, and echo time
[^taoka2024]: doi:10.2463/mrms.rev.2023-0175 · Taoka T, Ito R, Nakamichi R, et al. · *Magn Reson Med Sci* 2024;23:268–290 · methodological review · recommends interpreting ALPS as radial Brownian water-motion predominance and not directly labeling a lower index as glymphatic dysfunction
[^georgiopoulos2024]: doi:10.1093/braincomms/fcae421 · Georgiopoulos C, Werlin A, Lasic S, et al. · *Brain Commun* 2024;6:fcae421 · n=118 humans (60 Parkinson disease, 17 progressive supranuclear palsy, 41 controls) · cross-sectional diffusion-MRI methods study with analytical modeling · demonstrated crossing-fiber bias in the ALPS index
[^schilling2025]: doi:10.1002/hbm.70282 · Schilling KG, Newton A, Tax CMW, et al. · *Hum Brain Mapp* 2025;46:e70282 · HCP diffusion MRI (n=105 young adults; n=50 aging cohort) + simulation + high-resolution vascular imaging (n=4) · showed widespread radial asymmetry and confounding by crossing fibers, axonal dispersion/undulation, and heterogeneous vessel orientation
[^mossige2026]: doi:10.1148/radiol.252070 · Mossige I, Valnes LM, Storås TH, et al. · *Radiology* 2026;318:e252070 · n=56 · prospective-observational secondary analysis · direct DTI-ALPS vs intrathecal gadobutrol-enhanced MRI comparison; limited correspondence and no 48-hour association
[^thapaliya2026]: [[studies/thapaliya-2026-me-cfs-dti-alps]] · doi:10.3389/fnins.2026.1875420 · n=58 analyzed (31 ME/CFS, 27 controls) · cross-sectional case-control · model: humans · lower bilateral ALPS index in ME/CFS and correlations with self-reported sleep/concentration severity; single-center preliminary evidence
