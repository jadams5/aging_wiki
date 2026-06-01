---
type: framework
aliases: [target-immunogenicity-framework, augment-vs-target, immunogenicity-tier, intervention-immunogenicity-matrix]
sources:
  - "[[hallmarks/disabled-adaptive-immunity]]"
  - "[[hallmarks-of-aging]]"
  - "[[sens-damage-categories]]"
covers: [interventions, hallmarks, hypotheses]
---

> Auto-extracted by Claude on 2026-05-07. Framework page — no primary quantitative claims originate here. Cross-links to atomic pages where verified data lives. Review cross-link integrity before use.

# Intervention by Target Immunogenicity

## Opening principle

Surveillance-augmenting interventions — CAR-T cells, checkpoint inhibitors, neoantigen vaccines, NK rejuvenation — only deliver lesion regression where the target is *immunogenically detectable by the host immune system*. This is the single most useful filter for predicting whether a Side-B (augment surveillance) strategy will work on a given aging-driven cellular insult. Where the natural immune signal is absent or too weak to amplify, direct molecular intervention against the driver becomes the only reliable lever. The intervention-class choice for any aging-driven insult is therefore not primarily a question of technical sophistication — it is a question of target immunogenicity.

This framework promotes a section from [[hallmarks/disabled-adaptive-immunity]] to a wiki-wide navigational overlay, because the logic applies across the full intervention catalog, not only to immune aging interventions.

---

## Four-tier immunogenicity framework

The table maps each immunogenicity tier to the relative effectiveness of the two canonical intervention orientations: **Side A** (slow accumulation of the target — senolytic, DDR-enhancing, epigenetic, metabolic) and **Side B** (augment immune clearance of the target).

| Tier | Target class | Side-A (slow accumulation) | Side-B (augment surveillance) | Direct molecular intervention | Page examples |
|---|---|---|---|---|---|
| **1** | Highly immunogenic neoantigens — MMR-deficient tumors, viral antigens, surface markers robustly displayed on senescent cells (uPAR, GPNMB) | Useful; provides complementary prevention | **Highly effective** — the biotech revolution of the last decade works precisely here | Effective but increasingly secondary to Side-B where Side-B works | [[interventions/pharmacological/senolytics]], [[hallmarks/disabled-adaptive-immunity]] |
| **2** | Weakly immunogenic somatic mutations — most cancer drivers, single-residue signaling activations (GNAQ Q209L driving [[phenotypes/cherry-angioma]]), CHIP driver mutations (DNMT3A, TET2, ASXL1) | Useful | Modest at best; engineered immunity (TCR-T, bespoke neoantigen vaccines) can compensate but is expensive and per-target | **Most reliable path** — direct inhibition of the driver or allele-selective approaches | [[phenotypes/cherry-angioma]], [[phenotypes/clonal-hematopoiesis]], [[interventions/pharmacological/allele-selective-oligonucleotides]] |
| **3** | Non-mutational damage — lipofuscin, AGE crosslinks, senescent cells lacking immunogenic surface markers, mitochondrial heteroplasmy | Helpful; prevents further accumulation | Possible only with engineered targeting (antibody-drug conjugates to SASP-specific surface markers, etc.) | **Required** — AGE-breakers, lipofuscin-clearing lysosomal enzymes, allotopic mtDNA expression | [[hallmarks/genomic-instability]], [[processes/autophagy]] |
| **4** | Damage in immune-privileged sites — CNS, eye, gonads | Helpful at the systemic level; cannot reach the site | Largely irrelevant — the immune system cannot access these compartments effectively | **Required** — local delivery: intrathecal ASOs, intravitreal therapies, BBB-crossing carriers | [[hallmarks/genomic-instability]], [[phenotypes/neurodegeneration]], [[phenotypes/alzheimers-disease]] |

**Reading note:** Tier assignment is a spectrum, not a binary. A given target may sit between tiers depending on HLA allele, tumor microenvironment, senescence variant, or tissue context. The framework predicts *direction of intervention class effectiveness*, not absolute effect size. Tier 2 is the most contested boundary: some signaling-mutation neoantigens are immunogenic for specific HLA alleles (e.g., KRAS G12C in KRAS-vaccine trials); the framework provides a starting expectation, not a rule.

---

## Tier 2 in depth: why CHIP and clonal mosaicism are so therapeutically intractable

CHIP — clonal hematopoiesis driven by *DNMT3A*, *TET2*, *ASXL1*, *JAK2* V617F, and related loss-of-function or gain-of-function mutations in HSCs — is a canonical Tier 2 problem. Several features conspire to make immune clearance of CHIP clones nearly impossible even with a fully rejuvenated immune system:

1. **Minimal neoantigen load.** Loss-of-function mutations in DNMT3A and TET2 (the most common CHIP drivers) do not generate strong neoantigens: the mutant protein either is not translated, is degraded before MHC-I presentation, or differs from wild-type by a single amino acid at a site that does not fit the HLA-peptide binding groove efficiently. DNMT3A R882H is the best-studied example; even in AML contexts where mutant burden is high, DNMT3A-R882H-specific CD8+ T cell responses are rarely detected without peptide priming.

2. **Self-identity of CHIP cells.** CHIP-derived cells are hematopoietic cells, expressing the same self-tolerizing surface markers (HLA class I at normal levels, inhibitory ligands) as their wild-type counterparts. The immune system is trained to tolerate self-HLA; CHIP cells are not "foreign" in the antigenic sense.

3. **CHIP clones are themselves immune cells.** Targeting them requires the immune system to attack its own cellular constituents — the immune cells are both the effector and the target. This is analogous to asking T cells to kill other T cells based on a single amino acid change in an intracellular protein. Without a tumor-antigen equivalent on the cell surface, this is mechanistically intractable for native immunity.

**Implication:** Direct molecular intervention is the primary tractable path for CHIP. This means either allele-selective inhibition of the mutant clone's growth advantage (TET2-mutant IL-1β excess addressed by anti-IL-1β; JAK2 V617F addressed by ruxolitinib in MPN), or HSC replacement via conditioning + transplant to replace the clonal population. No amount of thymic regeneration, checkpoint inhibition, or NK rejuvenation solves the surveillance problem if the target is not displayed. See [[phenotypes/clonal-hematopoiesis]] for the full evidence base.

---

## Tier 1 in depth: where augmentation works best

The most compelling Tier 1 examples in aging biology are:

- **uPAR-expressing senescent cells** — uPAR (urokinase plasminogen activator receptor, gene PLAUR) is robustly upregulated on senescent cells across multiple tissue types including hepatic stellate cells, stromal fibroblasts, and lung epithelium. uPAR CAR-T cells (Amor et al. 2020 [^amor2020ref]) eliminated senescent cells in vitro and reversed liver fibrosis in mouse models; uPAR is a Tier 1 target because it is (a) displayed on the cell surface, (b) not present at high levels on quiescent counterpart cells, and (c) recognizable by an engineered receptor with acceptable specificity. See [[hallmarks/disabled-adaptive-immunity]] for the full verified citation and caveats about physiological lifespan extension claims.

- **GPNMB-expressing senescent cells** — Glycoprotein non-metastatic melanoma protein B (GPNMB) is a second senescent cell surface antigen with two 2024–2025 preclinical vaccine papers demonstrating CD8+ T cell clearance of senescent adipocytes and cardiomyocytes in mouse models. See [[hallmarks/disabled-adaptive-immunity]] for citations and caveats.

- **MMR-deficient tumor neoantigens** — microsatellite-unstable (MSI-H) cancers accumulate hundreds to thousands of frameshift neoantigens. Anti-PD-1/PD-L1 checkpoint inhibitors are effective here because the immune system already recognizes these targets; the intervention simply removes an inhibitory brake. Age increases cancer incidence; the aging-immunogenicity intersection is particularly relevant here.

**Safety concern common to all Tier 1 approaches:** uPAR and GPNMB are not exclusively expressed on senescent cells. Wound-healing fibroblasts, some macrophages, and tissue-repair cells express both antigens. The therapeutic window has not been characterized in aged primates or humans. Until this is established, Tier 1 senescent-cell targeting carries an unresolved on-target off-senescent-cell risk. See [[hallmarks/disabled-adaptive-immunity]] #gap/long-term-unknown.

---

## What comparative biology tells us about the tiers

Long-lived, cancer-resistant species solve aging-damage problems predominantly via **cell-autonomous defenses**, not via enhanced immune surveillance. This is consistent with the Tier 2–4 prediction that most chronic aging-driven damage is not immunogenically distinguishable enough for surveillance augmentation to provide the primary solution.

- **[[model-organisms/heterocephalus-glaber]] (naked mole rat)** — exceptional longevity (~30 years, 10x longer than body-mass-predicted) and near-absence of cancer is driven by cell-autonomous mechanisms: high-molecular-weight hyaluronic acid (HMW-HA) mediated contact inhibition suppresses incipient tumor growth before immune system involvement is required. Early-contact inhibition (ECI) — mediated by HMW-HA / p16 / p27 signaling — prevents clonal expansion at a cell-autonomous level. This is a Tier 2–3 strategy: the cells handle the problem before the target is even immunogenic. See [[model-organisms/heterocephalus-glaber]] for the full evidence base on HMW-HA / cancer resistance.

- **Elephant** — elephants have 20 functional copies of the *TP53* tumor suppressor gene (vs 2 in humans), providing extra copies of a cell-autonomous apoptotic executor rather than relying on enhanced immune surveillance. Elephant NK cells and T cells are not meaningfully more potent than in other mammals. The investment is in earlier cell-autonomous apoptosis of potentially malignant cells, not in immune recognition. *Page not yet seeded: [[model-organisms/loxodonta-africana]]* #gap/stub.

- **Bowhead whale** — the longest-lived mammal (~200+ years) has genome-scale evidence of positive selection on DNA-repair genes (CIITA, ERCC, CGAS-STING pathway) — again cell-autonomous damage prevention, not enhanced immune surveillance. *Page not yet seeded: [[model-organisms/balaena-mysticetus]]* #gap/stub.

**Framework prediction confirmed by evolution:** if immune surveillance augmentation were an efficient solution to Tier 2–3 aging damage, evolution should have preferentially invested in immune enhancement in long-lived species. The consistent pattern is the opposite — cell-autonomous prevention is the investment. This is what the framework predicts: where targets are weakly immunogenic (Tier 2) or non-mutational (Tier 3), evolution cannot optimize surveillance and instead invests in cell-autonomous barriers.

---

## What this framework does NOT predict

Limitations that must be held in mind when applying this tier assignment:

1. **Effect size, not direction.** The framework predicts which class of intervention is viable; it does not predict magnitude. A Tier 1 approach may be highly viable but produce small effect sizes in aged individuals because the immune system is too exhausted to respond even to a good target. Combining with immune rejuvenation (Tier 1 + Class 1 thymic regeneration) is the obvious combination strategy.

2. **The Tier 2/3 boundary is fuzzy.** Some somatic mutations DO generate immunogenic neoantigens for specific HLA alleles. KRAS G12C has now entered clinical neoantigen vaccine trials for non-small-cell lung cancer — it sits at the Tier 1/2 boundary for certain HLA-A alleles. GNAQ Q209L (cherry angioma) has not been evaluated as a neoantigen; it may have allele-specific presentations we do not yet know about. Tier assignment should be revisited as HLA-peptide prediction tools improve.

3. **Combination strategies cross tiers.** Many longevity protocols will combine a Tier 1 senolytic (uPAR CAR-T) + a Tier 3 AGE-breaker + a thymic regeneration protocol (boosting the immune system's capacity to do Tier 1 work). Tier purity is an analytical concept, not a design constraint.

4. **CNS is not uniformly immune-privileged (Tier 4).** The brain has a meningeal lymphatic system and CSF-immune surveillance. Microglia are resident immune cells. The "immune-privileged" designation is a relative one for therapeutic delivery purposes; neuroinflammation is a real and often damaging immune response in aged CNS. Tier 4 is primarily about *therapeutic delivery access*, not the total absence of immune activity.

---

## Implications for longevity research priority-setting

The framework predicts which biotech programs are likely to deliver lesion clearance vs. lesion prevention, independently of the sophistication of the platform:

- Programs targeting **highly displayed senescence antigens** (Tier 1) justify investment in immune engineering (CAR-T, neoantigen vaccines, bispecific antibodies). The target biology supports immune clearance.
- Programs targeting **signaling-mutation-driven clonal expansions** (Tier 2) should prioritize direct molecular inhibition or allele-selective approaches; immune engineering platforms built for these targets will face diminishing returns unless the neoantigen case is made first.
- Programs claiming to "harness the immune system" against **non-mutational aging damage** (Tier 3: AGEs, lipofuscin, heteroplasmic mtDNA) require a specific mechanism for immune recognition of the target — absent that, the claim is not biologically grounded.
- **CNS longevity programs** (Tier 4) require investment in local delivery (BBB-penetrant biologics, intrathecal delivery, AAV serotypes with CNS tropism) regardless of how potent the therapeutic molecule is. Platform choice is constrained by biology, not preference.

A complete longevity strategy requires interventions across all four tiers; the right portfolio balance depends on where the largest unmet disease burden sits relative to the immunogenicity landscape.

---

## Cross-references

**Hallmarks:**
- [[hallmarks/disabled-adaptive-immunity]] — primary source of the framework; thymic regeneration, CAR-T senolytics, mTOR immune-function trials
- [[hallmarks/genomic-instability]] — Tier 2 (somatic mutation-driven pathologies) and Tier 4 (nuclear/mitochondrial DNA damage)
- [[hallmarks/cellular-senescence]] — Tier 1 targets (uPAR, GPNMB) and Tier 3 targets (senescent cells without surface markers)
- [[hallmarks/chronic-inflammation]] — downstream consequence of failed surveillance across all tiers

**Phenotypes:**
- [[phenotypes/cherry-angioma]] — canonical Tier 2 example: GNAQ Q209L, weakly immunogenic, direct molecular intervention required
- [[phenotypes/clonal-hematopoiesis]] — canonical Tier 2 example: DNMT3A/TET2, minimal neoantigen, direct intervention required
- [[phenotypes/immunosenescence]] — clinical phenotype of failed immune surveillance (the capacity that determines what tier is actionable)
- [[phenotypes/cancer]] — Tier 1 (MSI-H) and Tier 2 (most solid tumors) mixed landscape
- [[phenotypes/neurodegeneration]] — Tier 4 (CNS delivery constraint)
- [[phenotypes/alzheimers-disease]] — Tier 4 example with active intrathecal/systemic biologic programs

**Model organisms:**
- [[model-organisms/heterocephalus-glaber]] — cell-autonomous cancer resistance (HMW-HA / ECI mechanism); Tier 2/3 cell-autonomous defense as evolution's answer
- [[model-organisms/loxodonta-africana]] — *page not yet seeded* #gap/stub — extra TP53 copies as cell-autonomous apoptosis investment
- [[model-organisms/balaena-mysticetus]] — *page not yet seeded* #gap/stub — DNA-repair positive selection in bowhead whale genome

**Interventions:**
- [[interventions/pharmacological/senolytics]] — Tier 1 (pharmacological) and Tier 1 (immune, uPAR CAR-T / GPNMB vaccine) approaches
- [[interventions/pharmacological/mtor-inhibitors]] — immune rejuvenation enabling Tier 1 work (boosts surveillance capacity)
- [[interventions/pharmacological/allele-selective-oligonucleotides]] — *page not yet seeded* #gap/stub — canonical Tier 2 direct molecular approach

**Related frameworks:**
- [[frameworks/interventions-by-hallmark]] — the intervention evidence matrix by hallmark; this framework adds the immunogenicity axis as a cross-cutting filter
- [[frameworks/intervention-classes]] — canonical mechanism class taxonomy; each class maps to one or more tiers in this framework

---

## Footnotes

[^amor2020ref]: doi:10.1038/s41586-020-2403-9 · Amor C et al. (Lowe lab / Sloan Kettering) (2020) "Senolytic CAR T cells reverse senescence-associated pathologies" · Nature 583(7814):127-132 · in-vivo + in-vitro · uPAR-CAR-T eliminates senescent cells; reverses CCl4-induced liver fibrosis; lung adenocarcinoma survival extension; physiological lifespan extension in aged wild-type mice not reported in main text · primary PDF verified per [[hallmarks/disabled-adaptive-immunity]] 2026-05-07 · cited_by: ~960
