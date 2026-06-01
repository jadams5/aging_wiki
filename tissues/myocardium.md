---
type: tissue
aliases: [cardiac muscle, heart muscle, myocardial tissue]
parent-system: cardiovascular-system
key-cell-types: ["[[cardiomyocytes]]", "[[cardiac-fibroblasts]]", "[[endothelial-cells]]"]
key-aging-phenotypes: ["[[heart-failure]]", "[[cardiac-fibrosis]]", "[[cardiovascular-aging]]"]
related-hallmarks: ["[[cellular-senescence]]", "[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]", "[[stem-cell-exhaustion]]", "[[loss-of-proteostasis]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Synthesis-MOC light verification (cross-page consistency only; no PDF re-reads). All quantitative claims inherited from verified atomic pages: Bergmann 2015 turnover/ploidy numbers consistent with cardiomyocytes.md (verified-partial). Anderson 2019 SASP (Tgfb2/Gdf15/Edn3), navitoclax dose corrected to 50 mg/kg/day (7d/cycle × 2 cycles, 24-mo) and cross-ref summary updated to match. Lewis-McDougall 2019 CPC senescence claims (n=35, >50% p16+ in >70yr, NSG-MI n=4-5/group, aged mice n=5-11/group) consistent with cardiomyocytes.md. Cardiac fibroblast senescent burden and Atg5 cardiac-KO claims accurately tagged #gap/unsourced. CPC claims tagged #gap/needs-replication."
---

# Myocardium

The myocardium is the muscular wall of the heart — the cardiac muscle tissue responsible for generating the contractile force that sustains circulation. It is composed predominantly of **cardiomyocytes** (the force-generating cells), supported by **cardiac fibroblasts**, endothelial cells, vascular smooth muscle cells, and resident macrophages. The left ventricle (LV) myocardium is the dominant site of age-related remodeling: concentric hypertrophy, interstitial fibrosis, and cardiomyocyte senescence together underlie the **diastolic dysfunction** that characterizes aging-related cardiac decline.

The myocardium is distinguished from virtually all other aging tissues by the **near-absence of cardiomyocyte regenerative capacity**: fewer than 50% of cardiomyocytes are replaced over a normal human lifespan, and the renewal rate declines from ~1%/year at age 25 to below 0.3%/year at age 75 [^bergmann2015]. This means that aging damage accumulated in cardiomyocytes cannot be diluted by cell division, making quality-control systems (mitochondrial maintenance, proteostasis, autophagy) the primary defense against cellular failure.

---

## Anatomy at a glance

| Compartment | Key cell types | Aging-relevant notes |
|---|---|---|
| Left ventricular wall | Cardiomyocytes (~85% of volume) | Concentric hypertrophy + wall stiffening; diastolic dysfunction |
| Interstitium | Cardiac fibroblasts, ECM | Interstitial fibrosis accumulates; MMP/TIMP imbalance |
| Vasculature | Endothelial cells, smooth muscle, pericytes | Microvascular rarefaction; impaired NO signaling |
| Resident immune | Macrophages, monocyte-derived cells | Inflammaging; phagocytic clearance of debris |

The **total cardiomyocyte number is established perinatally and remains constant throughout the adult lifespan** — this is a key finding of Bergmann et al. 2015 (n=51 human hearts; R=0.01, p=0.96 for CM number vs age) [^bergmann2015]. Cardiomyocytes that are lost — to apoptosis, necrosis, or senescence — are not replaced by new cardiomyocytes; the gap is filled by fibroblast-mediated scar tissue.

---

## Major cell types

### [[cardiomyocytes]] (verified-partial)

Post-mitotic, force-generating striated muscle cells. In adult humans, predominantly mononucleated (~73.6% mononucleated, ~25.5% binucleated, ~1.0% trinucleated) [^bergmann2015]. Key aging features are documented on [[cardiomyocytes]] (verified-partial) and cross-referenced here:

- **Renewal rate**: ~1%/year at age 25, declining to below 0.3%/year at age 75; ~39% of LV cardiomyocytes exchanged over a 75-year lifetime [^bergmann2015]
- **Non-canonical senescence**: oxidative telomere damage (not division-driven telomere shortening) drives p21+/p16+ cardiomyocyte senescence in aged mice; SASP is pro-fibrotic and pro-hypertrophic — **Tgfb2, Gdf15, Edn3** only (canonical inflammatory cytokines IL-6, IL-1β, Cxcl1 NOT upregulated in purified aged cardiomyocytes) [^anderson2019]
- **Senolytic response**: genetic clearance (INK-ATTAC) and pharmacological clearance (navitoclax 50 mg/kg/day) both reduced cardiomyocyte hypertrophy and cardiac fibrosis in aged mice; neither improved ejection fraction [^anderson2019]
- **MCL-1 dependence**: cardiomyocytes depend on MCL-1 for constitutive survival (Mcl1 cardiac-specific KO lethal within 10 days constitutively or ~3 weeks in adults); MCL-1 inhibitors carry inherent cardiotoxicity risk — see [[mcl-1]] (verified-partial)

### [[cardiac-fibroblasts]] (planned R10d)

Cardiac fibroblasts are the dominant cell type by number (~2× cardiomyocyte number, though much smaller by volume). They produce and remodel the extracellular matrix (collagen I/III, fibronectin, laminin). In aging:

- **SASP activation**: pro-fibrotic mediators from senescent cardiomyocytes (**Tgfb2, Gdf15, Edn3**) activate fibroblasts to myofibroblasts, which upregulate α-SMA and deposit collagen [^anderson2019]
- **Direct senescence**: cardiac fibroblasts themselves accumulate senescent markers with age; fibroblast SASP components include TGF-β and IL-6 in non-cardiomyocyte fractions #gap/unsourced — quantitative fibroblast senescent burden in aged human myocardium needs primary citation

### Cardiac progenitor cells (CPCs)

A small population of resident CPCs (c-Kit+, Sca-1+ in mouse; CD105+/CD90+/CD117+ in human) contributes minimally to cardiomyocyte renewal but may support vascular repair. In aging, CPCs accumulate severe senescent burden: Lewis-McDougall et al. 2019 (n=35 human cardiac surgery patients aged 32–86) found that **>50% of CPCs from subjects >70 years old were p16^INK4A^+/SA-β-gal+** (senescent), compared to ~22% in subjects aged 50–59 [^lewis2019]. Senescent CPCs:

- Secreted a SASP (PAI-1, IL-8, IL-6, IGFBP-3, GM-CSF, CCL-2) that rendered adjacent cycling CPCs senescent in conditioned-medium assays
- Produced worse LV function and greater fibrosis when injected into NSG-mouse myocardial infarction models vs cycling CPCs
- Were partially cleared by D+Q treatment in aged mice, leading to increased small Ki67+ and EdU+ cardiomyocyte-like cells (~0.25% vs vehicle ~0.03–0.07%) [^lewis2019]

#gap/needs-replication — CPC senescence-clearance findings are from a single study; no human senolytic trial targeting cardiac CPCs as of 2026-05-04.

---

## Key aging features

### Concentric LV hypertrophy

Cardiomyocytes hypertrophy (enlarge without dividing) as a compensatory response to increased cardiac load and ongoing cardiomyocyte loss. Concentric hypertrophy increases wall thickness while reducing chamber volume relative to mass. Over time, this increases wall stiffness, impairs diastolic filling, and predisposes to arrhythmia. The molecular driver is cardiomyocyte SASP-mediated fibroblast activation (Tgfb2, Edn3 in mice) [^anderson2019] combined with chronic pressure overload.

### Diastolic dysfunction and HFpEF

The dominant aging-related cardiac syndrome is **heart failure with preserved ejection fraction (HFpEF)** — characterized by:
- Impaired LV relaxation and increased chamber stiffness
- Normal or near-normal systolic ejection fraction
- Exercise intolerance and fluid congestion

HFpEF is directly caused by the combination of interstitial fibrosis (reduced LV compliance) and cardiomyocyte hypertrophy (impaired relaxation kinetics). See [[cardiac-fibrosis]] (verified-partial) and [[heart-failure]] for sourced clinical detail.

### Mitochondrial dysfunction in cardiomyocytes

Cardiomyocytes have among the highest mitochondrial density of any cell type (~30% of cell volume), and their dependence on oxidative phosphorylation (~90% of ATP) means that [[mitochondrial-dysfunction]] is immediately catastrophic. In aging cardiomyocytes:
- mtDNA deletions and point mutations accumulate (decades of ROS exposure without dilution by division)
- Complex I, III, and IV activity decreases
- [[mitophagy]] declines (mTOR hyperactivation suppresses autophagy induction; Atg5 cardiac-conditional KO causes aging-like cardiomyopathy) #gap/unsourced — primary Atg5 cardiac-conditional KO citation needed
- Cytochrome c leak from damaged mitochondria increases apoptotic susceptibility

### Myocardial fibrosis

Interstitial fibrosis — diffuse collagen deposition around cardiomyocytes — is a near-universal feature of the aged heart. Detailed mechanistic, cellular, and therapeutic profile is on [[cardiac-fibrosis]] (verified-partial). This page does not restate those claims; the tissue-level connection is:

SASP-activated fibroblasts (driven by cardiomyocyte and CPC SASP) → myofibroblast differentiation → type I/III collagen deposition → reduced LV compliance → diastolic dysfunction → HFpEF.

### Reduced regenerative capacity

Unlike many other tissues, the myocardium has essentially no meaningful regenerative reserve. CPCs exist but are rare and become predominantly senescent by the 7th decade [^lewis2019]. Cardiomyocyte renewal at 0.3%/year cannot compensate for even modest ongoing loss rates. This biological constraint means that:
- Myocardial infarction → permanent scar (replacement fibrosis replaces dead CMs)
- Chronic low-level CM loss in aging → permanent structural remodeling
- Cell-replacement strategies face fundamental barriers (engraftment, arrhythmia, immune rejection in large mammals)

---

## Disease consequences

### [[heart-failure]] (drafted)

The dominant aging cardiovascular outcome. HFpEF (diastolic dominant, most common in older adults) and HFrEF (reduced EF, often post-MI) both represent endpoints of myocardial aging. See [[heart-failure]] for diagnostic criteria and outcomes. See [[cardiovascular-aging]] (drafted) for the system-level overview.

### [[cardiac-fibrosis]] (verified-partial)

Direct structural consequence of interstitial fibrosis driven by cardiomyocyte and CPC SASP-activated fibroblasts. See [[cardiac-fibrosis]] for detailed sourced mechanistic, cellular, and clinical profile.

### [[cardiovascular-aging]] (drafted)

System-level category page covering vascular stiffening, endothelial dysfunction, LV hypertrophy, diastolic dysfunction, and the SGLT2i/senolytic therapeutic landscape.

### [[atherosclerosis]] (drafted)

Coronary artery disease as the dominant ischemic myocardial injury; coronary atherosclerosis is driven by [[chronic-inflammation]] and endothelial senescence rather than myocardium-intrinsic mechanisms, but the consequence (myocardial infarction → scar) directly shapes myocardial aging.

---

## Aging-relevant verified findings (cross-referenced)

- **Bergmann 2015** — cardiomyocyte turnover <0.3%/year at age 75; total CM number constant from birth; ~39% LV CMs exchanged over 75 years; ploidy ~73.6% mononucleated [^bergmann2015]. Local PDF available. Full detail on [[cardiomyocytes]].
- **Anderson 2019** — non-canonical cardiomyocyte SASP (Tgfb2/Gdf15/Edn3); navitoclax 50 mg/kg/day (7d/cycle × 2 cycles, 24-mo mice) reduced hypertrophy and fibrosis without improving EF; genetic INK-ATTAC clearance at 27 mo similarly reduced hypertrophy/fibrosis [^anderson2019]. Local PDF available. Full detail on [[cardiomyocytes]].
- **Lewis-McDougall 2019** — >50% CPCs from >70-year-old human hearts are senescent (p16+/SA-β-gal+); senescent-CPC injection into MI-NSG mice worsens LV function; D+Q senolytic clearance in aged mice increases cardiomyocyte-like DNA synthesis [^lewis2019]. Local PDF available. Full detail on [[cardiomyocytes]].

---

## Aging-protective interventions

| Intervention | Mechanism | Evidence level |
|---|---|---|
| **Exercise (aerobic)** | Preserves mitochondrial density; reduces resting HR; improves LV compliance; reduces HFpEF risk | Strong (observational + RCT; VO₂max preservation most protective) |
| **SGLT2 inhibitors** | Reduce myocardial fibrosis + inflammation; cardiac energetics (ketone utilization); HFpEF mortality benefit | Strong human RCT evidence — paradigm-shifting for HFpEF |
| **GDMT for HF** (ACEi/ARB/ARNi, β-blockers, MRA) | Reduce afterload and neurohormonal activation; prevent remodeling | Strong human RCT evidence (primarily HFrEF; less for HFpEF) |
| **Senolytics** (navitoclax, D+Q) | Clear senescent cardiomyocytes and CPCs; reduce fibrosis and hypertrophy | Preclinical only; no completed human cardiac-specific senolytic trial #gap/needs-human-replication |
| **mTOR inhibition** (rapamycin) | Restores autophagy/mitophagy; extends mouse lifespan with cardiac benefit | Preclinical well-supported; PEARL 2025 first human trial showed no improvement in aortic stiffness (primary endpoint VAT not significant); see [[rapamycin]] (verified-partial) |

---

## Hallmark connections

| Hallmark | Myocardial mechanism |
|---|---|
| [[cellular-senescence]] | Cardiomyocyte senescence (oxidative telomere damage); CPC senescence (>50% in >70-yr-olds); non-canonical pro-fibrotic SASP (Tgfb2/Gdf15/Edn3) |
| [[mitochondrial-dysfunction]] | Cardiomyocyte high OXPHOS dependence; mtDNA deletion accumulation; impaired mitophagy → dysfunctional mitochondria persist |
| [[chronic-inflammation]] | SASP-driven fibroblast activation; CPC SASP (IL-6, IL-8, PAI-1); macrophage inflammaging |
| [[stem-cell-exhaustion]] | CPC senescence and functional exhaustion; near-zero cardiomyocyte regeneration capacity |
| [[loss-of-proteostasis]] | Protein aggregate accumulation in post-mitotic CMs; UPS and autophagy decline; chaperone capacity reduction |

---

## Limitations and gaps

- `#gap/needs-human-replication` — senolytics for cardiac aging (all data in mice; no completed human trial specifically targeting myocardial senescent cells); cardiomyocyte regeneration strategies (Hippo/ERBB2/miRNA; no phase 3 human trial)
- `#gap/needs-replication` — Lewis-McDougall 2019 CPC senescence clearance + D+Q cardiac benefit (single study; n=5–11 mice/group)
- `#gap/unsourced` — cardiac fibroblast senescent burden in aged human myocardium; Atg5 cardiac-conditional KO aging-like cardiomyopathy (needs primary citation); SGLT2i mechanism in HFpEF (multiple proposed, none definitively established as dominant)
- `#gap/contradictory-evidence` — NF-κB-drives-cardiomyocyte-SASP: canonical NF-κB targets (IL-6, IL-1β) NOT found in purified aged CMs (Anderson 2019); role of NF-κB in CM SASP generation is contested
- `#stub` — this is an anchor tissue stub; cardiac-fibroblasts, endothelial-cells, and CPC-specific sections will deepen as those pages are seeded

---

## Cross-references

- [[cardiomyocytes]] (verified-partial) — primary atomic page for cardiomyocyte aging; all quantitative claims (Bergmann 2015 turnover, Anderson 2019 SASP, Lewis-McDougall 2019 CPC, Wang 2013 MCL-1) are sourced and verified there
- [[cardiac-fibrosis]] (verified-partial) — downstream structural consequence; fibroblast activation and interstitial fibrosis mechanisms
- [[heart-failure]] (drafted) — clinical outcome; HFpEF dominant in aged heart
- [[cardiovascular-aging]] (drafted) — system-level MOC covering vascular + myocardial aging
- [[atherosclerosis]] (drafted) — coronary disease → myocardial injury
- [[mcl-1]] (verified-partial) — obligate CM survival factor; cardiotoxicity of MCL-1 inhibitors
- [[mitochondrial-dysfunction]] (drafted) — hallmark MOC; cardiomyocytes are paradigm case
- [[cellular-senescence]] (verified) — hallmark MOC; CM and CPC senescence documented
- [[chronic-inflammation]] (drafted) — hallmark MOC; SASP-driven fibroblast activation
- [[autophagy]] (verified-partial) — mitophagy essential in CMs; decline with age
- [[mtor]] (verified-partial) — mTOR hyperactivation suppresses CM autophagy; rapamycin cardiac effects
- [[ampk]] (verified, full) — AMPK activity declines with age; AMPK loss worsens cardiac aging
- [[interventions/pharmacological/senolytics]] (verified-partial) — navitoclax/D+Q cardiac evidence
- [[rapamycin]] (verified-partial) — PEARL 2025 first human trial; preclinical cardiac lifespan benefit
- [[cardiac-fibroblasts]] (planned R10d) — fibrosis effector cells; SASP-activated myofibroblast transition
- [[endothelial-cells]] (implicit stub) — vascular component of myocardial niche
- [[heart]] (drafted R25) — organ-level page; cardiovascular synthesis-MOC

---

## Footnotes

[^bergmann2015]: [[studies/bergmann-2015-cardiomyocyte-turnover-human]] · doi:10.1016/j.cell.2015.05.026 · Bergmann O, Zdunek S, Felker A et al. · 2015 · Cell 161(7):1566-1575 · observational · model: post-mortem human heart tissue; n=51 for ¹⁴C dating (age 8–75 yr); n=29 for stereology · CM number constant throughout adult life (R=0.01, p=0.96); turnover peaks in childhood (~6.8%/yr), declines to ~0.8%/yr at age 20 and <0.3%/yr at age 75; 73.6%±7.0% mononucleated / 25.5%±7.4% binucleated / 1.0%±1.2% trinucleated; ~39% LV CMs exchanged over 75-yr lifetime; endothelial cells renew at ~17%/yr · local PDF available (archive confirmed)

[^anderson2019]: [[studies/anderson-2019-cardiomyocyte-senescence-sasp]] · doi:10.15252/embj.2018100492 · Anderson R, Lagnado A, Maggiorani D et al. · 2019 · The EMBO Journal 38(5):e100492 · in-vivo + in-vitro · model: C57BL/6 mice aged 3–30 months; human right atrial appendage biopsies n=35 (aged 32–86 yr); n=4–8 mice/group · telomere-associated DNA damage foci (TAF) increase with age independent of telomere length; non-canonical SASP from purified aged CMs: Tgfb2/Gdf15/Edn3 (canonical factors IL-6/IL-1β/Cxcl1 NOT upregulated in purified CM fraction); navitoclax 50 mg/kg/day (7d/cycle × 2 cycles, 24-mo mice) reduced CM hypertrophy and fibrosis — did not improve ejection fraction; INK-ATTAC genetic clearance (27-mo mice) similarly reduced hypertrophy and fibrosis · local PDF available (archive confirmed)

[^lewis2019]: [[studies/lewis-mcdougall-2019-cpc-senescence-cardiac]] · doi:10.1111/acel.12931 · Lewis-McDougall FC, Ruchaya PJ, Domenjo-Vila E et al. · 2019 · Aging Cell 18(3):e12931 · in-vivo + in-vitro · model: human CPCs from n=35 cardiac surgery patients aged 32–86; NSG mouse MI model n=4–5/group; aged INK-ATTAC and WT mice n=5–11/group · >50% CPCs from subjects >70 yr are p16+/SA-β-gal+/γH2AX+; senescent CPCs worsen LV function and increase fibrosis in MI-NSG mice vs cycling CPCs; SASP includes PAI-1, IL-8, IL-6, IGFBP-3, GM-CSF, CCL-2; D+Q or AP20187 clearance in aged mice increased Ki67+/EdU+ small cardiomyocytes (~0.25% vs vehicle ~0.03–0.07%) · local PDF available (archive confirmed)
