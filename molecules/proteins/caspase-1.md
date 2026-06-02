---
type: protein
aliases: [CASP1, ICE, interleukin-1 converting enzyme, interleukin-1β converting enzyme, IL-1 converting enzyme]
uniprot: P29466
ncbi-gene: 834
hgnc: 1499
ensembl: ENSG00000137752
mouse-ortholog: Casp1
key-domains: [CARD, p20-catalytic, p10-catalytic, interdomain-linker]
pathways: ["[[nlrp3-inflammasome]]"]
hallmarks: ["[[chronic-inflammation]]"]
known-interactors: ["[[asc]]", "[[nlrp3]]", "[[gsdmd]]", "[[il-1b]]", "[[il-18]]"]
druggability-tier: 2
caused-by: ["[[nlrp3-inflammasome]]"]
causes: ["[[pyroptosis]]", "[[chronic-inflammation]]"]
genage-id: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Primary-source PDFs verified for Youm 2013 (Cell Metab), Youm 2015 (Nat Med), Camell 2017 (Nature), Hoffman 2001 (Nat Genet), Ridker 2017 CANTOS (NEJM). Cerretti 1992 (Science), Thornberry 1992 (Nature), Shi 2015 (Nature), Kayagaki 2015 (Nature) are not_oa — cleavage-site residues (IL-1β Asp116–Ser117; GSDMD Asp275) independently confirmed via UniProt P01584 and P57764. Ensembl ENSG00000137752 confirmed correct (R26d fix in place; was incorrectly ENSG00000141510/TP53 before R26d). Canonical-DB identity fields (UniProt P29466, NCBI Gene 834, HGNC 1499) not independently re-verified against databases — recommend cross-check on next lint pass."
---

# Caspase-1 (CASP1)

The pyroptosis executioner — a cysteine protease assembled on inflammasome platforms that cleaves pro-IL-1β, pro-IL-18, and gasdermin D (GSDMD) to drive inflammatory cytokine release and lytic cell death. In the context of aging, caspase-1 hyperactivation downstream of the [[nlrp3-inflammasome]] is a core molecular driver of [[chronic-inflammation|inflammaging]].

## Identity

- **UniProt:** P29466 (CASP1_HUMAN) — Swiss-Prot (manually curated)
- **NCBI Gene:** 834
- **HGNC:** 1499; symbol CASP1
- **Ensembl:** ENSG00000137752
- **Mouse ortholog:** Casp1 (one-to-one; mouse caspase-1 is the direct functional equivalent)
- **Length:** 404 amino acids (canonical zymogen); ~45 kDa
- **Originally named:** ICE (interleukin-1 converting enzyme) — named before the caspase nomenclature was established [^cerretti1992] [^thornberry1992]

## Domain structure

| Domain | Residues (approx.) | Role |
|---|---|---|
| CARD | 1–91 | Recruits CASP1 to ASC via CARD–CARD interaction |
| Prodomain linker | 92–119 | Cleaved during activation |
| p20 catalytic subunit | 120–297 | Catalytic domain; contains active-site Cys285 |
| Interdomain linker | 298–316 | Autoproteolytic cleavage site; required for pyroptosis |
| p10 catalytic subunit | 317–404 | Heterodimerizes with p20 to form active enzyme |

The mature active form is a (p20/p10)₂ heterotetramer; two zymogen molecules assemble on the inflammasome scaffold, undergo autoproteolytic processing, and dimerize.

## Activation mechanism

Caspase-1 is constitutively expressed as an inactive ~45 kDa zymogen (procaspase-1). Activation requires oligomerization on an **inflammasome platform**:

1. Danger signals (PAMPs, DAMPs) activate a sensor protein (NLRP3, NLRC4, AIM2, pyrin).
2. The sensor recruits the adaptor protein [[asc]] via PYD–PYD interaction.
3. ASC's CARD domain nucleates procaspase-1 recruitment via CARD–CARD interaction.
4. Proximity-induced autoproteolysis liberates the p20 and p10 subunits, which dimerize into the active (p20/p10)₂ complex [^thornberry1992].

The [[nlrp3-inflammasome]] platform is the most studied in the context of sterile aging-associated inflammation and is gated by signals including ATP, cholesterol crystals, fatty acids, and mitochondrial ROS — all of which accumulate with age.

## Substrates and downstream effectors

### IL-1β maturation
Procaspase-1 cleaves pro-IL-1β (31 kDa) at Asp116–Ser117 to generate mature IL-1β (17 kDa). Mature IL-1β is then released via GSDMD pores or unconventional secretion. This is the founding function that gave CASP1 its original name "interleukin-1 converting enzyme" [^cerretti1992] [^thornberry1992].

### IL-18 maturation
Pro-IL-18 (24 kDa) is cleaved to mature IL-18 (18 kDa), which drives IFN-γ production and NK/T-cell activation. IL-18 does not require an exogenous signal peptide and is released similarly via pores. See [[il-18]] (R25) for the dedicated page.

### GSDMD cleavage → pyroptosis
Caspase-1 cleaves [[gsdmd]] (gasdermin D, 53 kDa) at Asp275, releasing the N-terminal GSDMD-N fragment (30 kDa) [^shi2015]. GSDMD-N inserts into the plasma membrane to form ~18 nm pores, causing osmotic lysis ([[pyroptosis]]) and simultaneous release of IL-1β, IL-18, ATP, and HMGB1. The C-terminal fragment acts as an autoinhibitory domain that sequesters GSDMD-N in the resting state.

A parallel pathway: caspase-11 (mouse) / caspase-4 and caspase-5 (human) can also cleave GSDMD independently of caspase-1 (non-canonical inflammasome signaling) [^kayagaki2015]. #gap/needs-human-replication — the canonical vs non-canonical partition in aged human tissues is unclear.

## Role in aging

### Inflammasome hyperactivation with age

NLRP3 inflammasome activity and caspase-1 processing increase in aged macrophages, microglia, adipose stromal-vascular fraction, and liver. Key evidence:

- **Youm 2013:** Genetic ablation of NLRP3 (Nlrp3-/-) or the inflammasome adaptor ASC (Asc-/-) in mice prevented age-associated systemic low-grade inflammation and improved glucose homeostasis and physical function across multiple aged cohorts (14–24 months); caspase-1 activity was reduced as a downstream consequence. Casp11-/- mice were not protected, confirming the canonical NLRP3 → caspase-1 axis is the effector arm (n = 4–13/group depending on endpoint) [^youm2013]. #gap/needs-human-replication
- **Camell 2017:** In aged mice (21–24 months), NLRP3 inflammasome activation in adipose tissue macrophages (ATMs) upregulates GDF3, which in turn drives MAO-A (MAOA) expression; MAOA degrades norepinephrine in ATMs, reducing catecholamine bioavailability to adipocytes and suppressing lipolysis. Nlrp3-/- aged mice and pharmacological MAOA inhibition (clorgyline) restored lipolytic capacity [^camell2017]. #gap/needs-human-replication
- Caspase-1-null (*Casp1*⁻/⁻) mice are protected from multiple sterile inflammatory disease models (colitis, gout, metabolic syndrome), though longevity effects have not been robustly demonstrated in a controlled lifespan study. #gap/needs-replication

### β-hydroxybutyrate as an indirect inhibitor

The ketone body β-hydroxybutyrate (BHB), elevated during caloric restriction, fasting, or ketogenic diet, inhibits NLRP3 inflammasome assembly upstream of caspase-1 — not by directly inhibiting the protease, and not by blocking NLRP3 ATPase activity (that is MCC950's mechanism). Instead, BHB prevents K⁺ efflux from macrophages and inhibits ASC oligomerization and speck formation, blocking NLRP3-specific activation independently of AMPK, ROS, autophagy, TCA cycle, GPR109a, or HDAC inhibition [^youm2015]. BHB does not inhibit AIM2, NLRC4, or non-canonical caspase-11 inflammasomes. This is one proposed mechanism linking ketogenic diets to reduced inflammaging. #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | CASP1 pathway structure identical in human; ASC, NLRP3, GSDMD all conserved |
| Phenotype conserved in humans? | partial | Elevated IL-1β/IL-18 in human aging confirmed; direct caspase-1 activity in aged human tissue less studied |
| Replicated in humans? | no | Genetic ablation studies are mouse-only; pharmacological evidence in humans is indirect (CANTOS, see below) |

## Disease associations

- **CAPS (cryopyrin-associated periodic syndrome)** — gain-of-function mutations in *NLRP3* (upstream of CASP1) cause constitutive NLRP3 inflammasome assembly → unregulated caspase-1 activation → recurrent fevers, urticaria, sensorineural hearing loss [^hoffman2001]. Validates caspase-1 as a central effector in gain-of-function inflammasome disease.
- **Type 2 diabetes / metabolic syndrome** — NLRP3/caspase-1-mediated IL-1β promotes pancreatic β-cell dysfunction and insulin resistance; supported by Anakinra (IL-1R antagonist) trials in T2D.
- **Neuroinflammation** — caspase-1 activated in microglia in Alzheimer's, Parkinson's disease models; whether this is causal or consequential in humans is unresolved. #gap/no-mechanism

## Therapeutic targeting

### Upstream NLRP3 inhibitors (indirect caspase-1 inhibition)
- **MCC950 (CMPD-4)** — potent, selective small-molecule NLRP3 inhibitor; blocks ATPase activity; not yet in clinical trials for aging indications as of 2026.
- **Anakinra / canakinumab** — IL-1β neutralization downstream of caspase-1; [[canakinumab]] (CANTOS trial) reduced cardiovascular events by ~15% in post-MI patients with elevated hsCRP, providing indirect human-level validation of caspase-1–IL-1β axis in chronic sterile inflammation [^ridker2017-cantos]. #gap/needs-human-replication for direct aging benefit.

### Direct caspase-1 inhibitors
- **VX-740 (pralnacasan)** — first-in-class oral caspase-1 inhibitor; Phase 2 trials in rheumatoid arthritis showed modest disease-activity reduction; development discontinued due to hepatotoxicity signal in long-term rodent studies. No aging-indication trial.
- **VX-765 (belnacasan)** — improved safety window over VX-740; Phase 2 completed in epilepsy (2013); no robust efficacy signal in that indication. No current aging-indication trial. #gap/long-term-unknown

### Indirect via BHB
Dietary or exogenous β-hydroxybutyrate suppresses NLRP3 upstream of caspase-1; see [[ketogenic-diet]] for the dietary intervention. The [[beta-hydroxybutyrate]] compound page is pending. #gap/needs-stub

**Druggability — tier-2 (re-rated 2026-05-08).** Direct caspase-1 inhibitors (VX-740 pralnacasan, VX-765 belnacasan) reached Phase 2 for rheumatoid arthritis and epilepsy respectively but were discontinued (hepatotoxicity / no efficacy signal); no direct caspase-1 inhibitor is FDA-approved or active in clinical development for any indication. The earlier tier-1 assignment leaned on indirect support from upstream/downstream pharmacology — canakinumab (FDA-approved IL-1β mAb; CANTOS Phase 3 RCT validated the NLRP3 → caspase-1 → IL-1β axis) and broader inflammasome-pharmacology programs (MCC950, OLT1177) — but the strict Open Targets criterion is for caspase-1 itself, and there is no direct-acting drug. Tier-2 ("high-quality probe") accurately reflects the current state: discontinued clinical-stage chemistries plus active probe-grade research compounds. Aging relevance via the NLRP3-inflammasome / IL-1β axis is unchanged.

## Cross-references

- [[nlrp3-inflammasome]] — upstream activating platform (R10c draft)
- [[asc]] — adaptor bridging sensor to caspase-1 (R24d sibling page)
- [[gsdmd]] — primary pyroptosis effector substrate (R24d sibling page)
- [[pyroptosis]] — lytic cell death process downstream (R24d sibling process page)
- [[il-1b]] — proteolytic product and key aging cytokine
- [[il-18]] — proteolytic product; IFN-γ inducer (R25)
- [[chronic-inflammation]] — hallmark driven by caspase-1 activity
- [[canakinumab]] — downstream IL-1β therapeutic with human trial data
- [[nlrc4]] — alternative inflammasome platform activating CASP1 #gap/needs-stub
- [[aim2]] — DNA-sensing inflammasome platform activating CASP1 #gap/needs-stub

## Limitations and open gaps

- `#gap/needs-human-replication` — most caspase-1 / NLRP3 aging data is from mouse models; direct tissue measurement of caspase-1 activity in aged humans is limited.
- `#gap/no-mechanism` — the relative contribution of canonical (caspase-1-dependent) vs non-canonical (caspase-4/5-dependent) GSDMD cleavage in human inflammaging is unquantified.
- `#gap/long-term-unknown` — no direct-caspase-1-inhibitor clinical trial in an aging or inflammaging population has been completed; belnacasan data is from epilepsy.
- `#gap/needs-canonical-id` — GenAge entry for CASP1: no GenAge ID confirmed at time of drafting; field set null. Recommend cross-check at next lint pass.
- `#gap/needs-replication` — the lifespan extension associated with caspase-1 ablation in mice (implied by Youm 2013 functional data) has not been tested in a dedicated controlled longevity study.

## Footnotes

[^cerretti1992]: doi:10.1126/science.1373520 · Cerretti DP et al. · *Science* 1992 · in-vitro (cloning/biochemistry) · original cloning of ICE/CASP1 cDNA and identification as pro-IL-1β processing protease #gap/no-fulltext-access (not_oa; cleavage-site residue confirmed via UniProt P01584 annotation)

[^thornberry1992]: doi:10.1038/356768a0 · Thornberry NA et al. · *Nature* 1992 · n=purified enzyme · in-vitro (biochemical) · characterized ICE as a heterodimeric cysteine protease (p20/p10) required for IL-1β processing in monocytes #gap/no-fulltext-access (not_oa; p20/p10 subunit structure confirmed via UniProt P29466 annotation)

[^youm2013]: doi:10.1016/j.cmet.2013.09.010 · Youm YH et al. · *Cell Metab* 2013 · in-vivo (aged mice, 14–24-month cohorts; n=4–13/group) · randomized · Nlrp3-/- and Asc-/- mice (not Casp1-/-) protected against age-associated low-grade inflammation, glucose intolerance, thymic involution, cognitive decline, and bone loss; Casp11-/- mice unprotected; caspase-1 activity downstream of NLRP3 is the inferred effector arm · model: C57BL/6 and congenic knockout mice; PDF verified

[^youm2015]: doi:10.1038/nm.3804 · Youm YH et al. · *Nat Med* 2015 · in-vitro + in-vivo (mouse BMDMs + NLRP3 gain-of-function knockin disease models) · BHB (not acetoacetate or butyrate) selectively inhibits NLRP3 inflammasome by preventing K⁺ efflux and blocking ASC oligomerization/speck formation; NLRC4, AIM2, caspase-11 inflammasomes unaffected; mechanism independent of AMPK, ROS, autophagy, GPR109a, Sirt2, UCP2; PDF verified

[^camell2017]: doi:10.1038/nature24022 · Camell CD et al. · *Nature* 2017 · in-vivo (aged C57Bl6/J mice, 4-month vs 21–24-month) + in-vitro BMDMs · NLRP3 inflammasome in aged adipose tissue macrophages (ATMs) upregulates GDF3, which drives MAOA expression; MAOA degrades norepinephrine → blunts catecholamine-induced lipolysis; Nlrp3-/- 2-year-old mice protected from fasting lipolysis defect; MAOA inhibition (clorgyline) restores lipolysis in aged mice; model: C57Bl6/J; PDF verified

[^shi2015]: doi:10.1038/nature15514 · Shi J et al. · *Nature* 2015 · in-vitro / in-vivo · identified GSDMD as direct substrate of inflammatory caspases including caspase-1; defined GSDMD-N pore-forming fragment (cleavage at Asp275, confirmed UniProt P57764) #gap/no-fulltext-access (not_oa; cleavage site Asp275 independently confirmed via UniProt P57764)

[^kayagaki2015]: doi:10.1038/nature15541 · Kayagaki N et al. · *Nature* 2015 · in-vitro / in-vivo · parallel identification of GSDMD as caspase-11 substrate; non-canonical inflammasome pathway #gap/no-fulltext-access (not_oa)

[^hoffman2001]: doi:10.1038/ng756 · Hoffman HM et al. · *Nat Genet* 2001 · observational/genetic · four missense mutations in CIAS1 (now NLRP3) exon 3 identified in three FCAS families and one MWS family; mutations in the NACHT domain cause constitutive NLRP3 assembly and unregulated caspase-1 activation → recurrent fevers, urticaria, conjunctivitis, sensorineural hearing loss; validates upstream NLRP3 → caspase-1 axis in human gain-of-function disease · PDF verified

[^ridker2017-cantos]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. (CANTOS trial) · *NEJM* 2017 · n=10,061 · rct · canakinumab 150 mg q3mo (HR 0.85, 95% CI 0.74–0.98, P=0.021) reduced primary CV endpoint (nonfatal MI, nonfatal stroke, CV death) in post-MI patients with hsCRP ≥2 mg/L at median 3.7-year follow-up; 37% median hsCRP reduction; LDL unchanged; higher fatal infection rate with canakinumab; indirect human validation of IL-1β/caspase-1 axis in chronic sterile inflammation · PDF verified #gap/needs-replication for aging-specific outcome
