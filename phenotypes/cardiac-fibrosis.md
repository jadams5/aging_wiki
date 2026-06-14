---
type: phenotype
aliases: [myocardial fibrosis, cardiac scarring, interstitial cardiac fibrosis, replacement fibrosis]
icd-10: I51.4
icd-11: BB42.0
affected-tissues: ["[[cardiomyocytes]]", "[[myocardium]]", "[[cardiac-extracellular-matrix]]", "[[cardiac-fibroblasts]]"]
underlying-hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[altered-intercellular-communication]]", "[[mitochondrial-dysfunction]]"]
typical-onset: "40+ (subclinical replacement fibrosis begins with earliest myocyte loss); 60+ (clinically significant interstitial fibrosis)"
prevalence-65plus: "near-universal — all elderly hearts show some degree of interstitial fibrosis on autopsy; clinically significant diastolic impairment in ~40–60% of adults aged 65+"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Anderson 2019 (10.15252/embj.2018100492) and Lewis-McDougall 2019 (10.1111/acel.12931) verified against local PDFs. Frangogiannis 2020 (10.1093/cvr/cvaa324) verified against local PDF (downloaded during this pass). Travers 2016 (10.1161/CIRCRESAHA.115.306565) could not be verified — download failed (green OA URL unresolvable by archive; not_oa classification unclear); Travers-derived claims (interstitial fibrosis mechanism framing, macrophage polarization, mitophagy passage) remain unverified against primary source."
---

# Cardiac Fibrosis

Pathological accumulation of extracellular matrix (ECM) proteins — predominantly type I and type III collagen — in the myocardial interstitium, replacing functional myocardium with stiff, non-contractile scar tissue. Cardiac fibrosis is the shared structural substrate of [[heart-failure|heart failure with preserved ejection fraction (HFpEF)]], atrial fibrillation, and ventricular arrhythmias, and is a near-universal feature of the aged heart [^travers2016] [^frangogiannis2020]. It represents the tissue-level output of multiple converging [[hallmarks-of-aging]]: [[cellular-senescence]], [[chronic-inflammation]], and [[altered-intercellular-communication]], with secondary contributions from [[mitochondrial-dysfunction]].

## Two forms of cardiac fibrosis

### Reactive (interstitial) fibrosis

Diffuse increase in collagen content surrounding cardiomyocytes without primary cell loss. The dominant form in aging, hypertension, diabetes, and HFpEF. Cardiomyocyte architecture is initially preserved, but progressive ECM accumulation stiffens the ventricle wall, impairs diastolic relaxation, and disrupts electrical coupling between cells [^travers2016]. Mechanically, it manifests as increased left ventricular stiffness and reduced compliance, eventually causing diastolic dysfunction even at normal systolic EF.

### Replacement (reparative) fibrosis

Focal scar replacing dead cardiomyocytes following acute injury — post-myocardial infarction (MI), toxin-induced cardiomyocyte loss, or severe inflammation. The scar is structurally necessary (avoids ventricular rupture) but mechanically inert. Replacement fibrosis after large MI contributes to adverse remodeling, systolic dysfunction, and ventricular arrhythmias [^frangogiannis2020]. In aging, low-level ongoing cardiomyocyte loss drives a smoldering replacement process that compounds interstitial fibrosis.

## Pathophysiology

### 1. Cardiac fibroblast → myofibroblast activation

Cardiac fibroblasts are the primary ECM-producing effector cells. In the healthy adult heart they maintain the collagen scaffold; upon activation, they differentiate into myofibroblasts — contractile, high-secretion cells expressing α-smooth muscle actin (α-SMA) — which massively upregulate collagen I and III synthesis [^travers2016]. Key activating signals:

- **TGFβ** — the master pro-fibrotic cytokine. Signals through TGFβ receptor I/II → SMAD2/3 phosphorylation → nuclear translocation → transcriptional activation of collagen genes, fibronectin, α-SMA, and CTGF. Elevated in aged, hypertensive, and post-MI hearts.
- **Angiotensin II** — potent pro-fibrotic via AT1R → ERK, NF-κB, and SMAD2/3 cross-talk; also stimulates TGFβ secretion.
- **Aldosterone** — synergizes with AngII at the fibroblast level; mineralocorticoid receptor activation drives ECM gene expression.
- **ET-1 (endothelin-1)** — paracrine pro-fibrotic; one of the three components of the senescent cardiomyocyte non-canonical SASP (see below).

### 2. ECM deposition and crosslinking

Activated myofibroblasts secrete structural ECM proteins:

- **Collagen type I** (stiff, tension-bearing) and **type III** (compliant, elastic network) — the dominant fibrosis components. The ratio shifts toward type I with aging and disease, increasing stiffness.
- **Fibronectin** — provisional matrix scaffold; upregulated early after injury.
- **Lysyl oxidase (LOX)** — crosslinks collagen and elastin via aldehyde-mediated covalent bonds, making deposited ECM more rigid and resistant to degradation; LOX activity increases with age and is further upregulated by TGFβ [^frangogiannis2020].
- **Advanced glycation end-products (AGEs)** — non-enzymatic glycation of collagen accumulates with chronological aging and hyperglycemia, forming crosslinks that stiffen the ECM independently of active LOX activity. AGE crosslinks are not reversible by standard anti-fibrotic agents, making aged-ECM stiffness partly treatment-resistant. #gap/no-mechanism for AGE-crosslink-specific reversal strategies.

### 3. Failed resolution

In normal wound healing, myofibroblasts undergo apoptosis after ECM repair. In fibrosis, myofibroblasts persist, sustaining ECM secretion. Mechanisms of failed resolution include:

- Persistent pro-fibrotic signaling (chronic TGFβ, AngII)
- Impaired clearance of apoptosis-resistant myofibroblasts
- Paracrine anti-apoptotic signals from senescent cells (see below)

## Aging-specific drivers

### Senescent cardiomyocyte non-canonical SASP

A mechanistically critical insight from Anderson et al. 2019: aged cardiomyocytes (post-mitotic cells) accumulate telomere-dysfunction-induced DNA damage foci (TIF+ cells) without undergoing cell cycle arrest (they are already post-mitotic). These **senescent cardiomyocytes** secrete a non-canonical SASP distinct from the classical inflammatory SASP of dividing cells [^anderson2019].

The senescent cardiomyocyte secretome comprises predominantly:
- **TGFβ2** — directly activates cardiac fibroblasts via SMAD2/3 signaling
- **GDF15** (growth differentiation factor 15) — stress marker; broader paracrine effects
- **EDN3 (endothelin-3)** — vasoactive and pro-fibrotic

Notably, this secretome **lacks** classical pro-inflammatory SASP components (IL-6, IL-1β, Cxcl1, Cxcl2) that characterize senescent dividing cells — pro-inflammatory genes including Il-1α, Il-1β, Il-6, Cxcl1 and Cxcl2 were not differentially expressed in aged vs young purified CMs [^anderson2019]. Anderson 2019 demonstrated this paracrine axis drives cardiac fibrosis in aged hearts, and that navitoclax (50 mg/kg oral in aged C57BL/6 mice) cleared senescent cardiomyocytes and reduced cardiac fibrosis [^anderson2019]. #gap/needs-human-replication — mouse in vivo only; no human cardiac senolysis trial data.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — senescent cardiomyocytes confirmed in aged human hearts; SASP profile not directly characterized ex vivo |
| Phenotype conserved in humans? | yes — interstitial fibrosis is a universal finding in aged human hearts |
| Replicated in humans? | no — senolytic reduction of cardiac fibrosis not yet tested in humans |

### Chronic low-grade inflammation

Systemic [[chronic-inflammation|inflammaging]] contributes fibrogenic cytokines to the cardiac microenvironment:

- **TNFα** and **IL-6** from circulating senescent cells and activated macrophages promote fibroblast activation and impair resolution.
- Cardiac-resident macrophage populations shift toward inflammatory (M1-like) phenotypes with age, sustaining pro-fibrotic paracrine loops [^travers2016].
- [[sasp|SASP]]-derived factors from senescent non-cardiac cells reach the heart via circulation.

### Renin-angiotensin-aldosterone system (RAAS) activation

Age-related increases in RAAS activity drive angiotensin II and aldosterone levels upward, both potent independent pro-fibrotic stimuli. Aldosterone acts directly on cardiac fibroblast [[molecules/proteins/nr3c2|mineralocorticoid receptors]] to upregulate collagen synthesis [^frangogiannis2020]. This provides the mechanistic basis for mineralocorticoid receptor antagonist (MRA) anti-fibrotic efficacy in heart failure.

### AGE crosslinking

Non-enzymatic glycation of long-lived structural proteins (collagen, elastin) accumulates over decades. In aged hearts, AGE crosslinks reduce myocardial compliance independently of net collagen content — even hearts with modest fibrillar collagen deposition may show marked diastolic stiffness if AGE crosslinking is advanced. #gap/dose-response-unclear for AGE-crosslink-specific therapies (ALT-711/alagebrium discontinued; no approved AGE-breaker). #gap/no-mechanism for reversing established AGE crosslinks in vivo.

### Impaired mitophagy and mitochondrial dysfunction

[[mitochondrial-dysfunction]] is a secondary contributor in aged cardiomyocytes — ROS from dysfunctional mitochondria activate NF-κB-mediated inflammatory signaling and can trigger local paracrine pro-fibrotic signals. Impaired [[mitophagy]] allows dysfunctional mitochondria to persist as ROS sources [^travers2016]. Mitochondrial dysfunction is not a primary driver of fibrosis initiation but amplifies the senescence and inflammation axes.

## Functional consequences

| Consequence | Mechanism | Clinical Syndrome |
|---|---|---|
| Myocardial stiffening | ECM accumulation + AGE crosslinks | Diastolic dysfunction → [[heart-failure|HFpEF]] |
| Electrical uncoupling | Collagen disrupts gap junction continuity | Atrial fibrillation; ventricular arrhythmias |
| Impaired contractile force | Reduced cardiomyocyte density + energetic mismatch | Systolic dysfunction (late-stage or after large MI replacement fibrosis) |
| Diastolic dysfunction | Elevated LV filling pressure from stiff ventricle | HFpEF — the dominant heart failure phenotype in aging |

HFpEF is the most clinically significant sequela of aging-associated cardiac fibrosis. The EF is preserved (≥50%) because systolic function is maintained; the pathology is impaired diastolic relaxation driven by increased myocardial stiffness from ECM accumulation [^frangogiannis2020].

## Biomarkers

### Imaging

- **Cardiac MRI T1 mapping (native T1)** — non-invasive measure of interstitial fibrosis; T1 prolonged in fibrotic myocardium. Increasingly standard in research but not yet routine clinical practice.
- **Extracellular volume fraction (ECV)** by cardiac MRI — uses contrast enhancement to quantify the interstitial compartment; ECV >30% indicates significant fibrosis. Most validated non-invasive fibrosis quantification method. #gap/long-term-unknown for ECV as a therapeutic endpoint in clinical trials.
- **Late gadolinium enhancement (LGE)** — detects replacement fibrosis (focal scar) but poorly sensitive to diffuse interstitial fibrosis.

### Serum

- **PICP** (procollagen type I carboxy-terminal propeptide) and **PIIICP** — reflect collagen I and III synthesis rates; elevated in fibrotic states.
- **CITP** (carboxy-terminal telopeptide of collagen I) — reflects collagen degradation; ratio PICP/CITP can distinguish net deposition from remodeling. #gap/needs-replication — clinical utility of serum collagen markers in cardiac fibrosis not yet firmly established.

## Pharmacological approaches

### Proven anti-fibrotic (RAAS blockade)

- **ACE inhibitors (ACEi)** and **ARBs** — reduce AngII signaling; demonstrated anti-fibrotic effects in hypertensive and HFrEF trials. Standard of care in HF with reduced EF; evidence in HFpEF weaker.
- **Mineralocorticoid receptor antagonists (MRAs)** (spironolactone, eplerenone) — block aldosterone at the fibroblast; RALES and EPHESUS trials demonstrated mortality benefit in HFrEF with fibrosis reduction; TOPCAT had mixed results in HFpEF. #gap/contradictory-evidence for MRA benefit in HFpEF specifically.

### Emerging evidence

- **SGLT2 inhibitors** (dapagliflozin, empagliflozin) — beyond glycemic lowering, emerging evidence suggests direct anti-fibrotic effects in the myocardium: reduced collagen deposition and improved diastolic function in preclinical models; EMPEROR-Preserved and DELIVER trials showed HFpEF outcome benefit but mechanism not fully resolved. #gap/no-mechanism for direct SGLT2i anti-fibrotic action vs. hemodynamic/metabolic secondary effects. #gap/needs-replication for direct myocardial fibrosis reduction in humans.
- **Pirfenidone** — TGFβ pathway inhibitor approved for idiopathic pulmonary fibrosis; cardiac trials underway (PIROUETTE trial in HFpEF with myocardial fibrosis). #gap/long-term-unknown — cardiac pirfenidone trials not yet reporting.
- **Senolytic strategies** — navitoclax (BCL-2/BCL-xL inhibitor) cleared senescent cardiomyocytes and reduced fibrosis in aged mice [^anderson2019]. Clinical senolysis targeting cardiac fibrosis has not been tested. Dasatinib + quercetin (D+Q) have human pilot data in other tissues but not cardiac fibrosis specifically. #gap/needs-human-replication.

### Investigational targets

- **LOX inhibitors** — β-aminopropionitrile (BAPN) blocks LOX enzymatically; preclinical anti-fibrotic; human trials limited by off-target toxicity. #gap/dose-response-unclear.
- **Anti-TGFβ antibodies / SMAD inhibitors** — multiple pipeline compounds; challenge is separating TGFβ's pro-fibrotic from homeostatic roles (TGFβ loss-of-function is also harmful).

## Aging cell biology

Cardiac fibrosis integrates at least four [[hallmarks-of-aging]]:

- **[[cellular-senescence]]** — senescent cardiomyocytes accumulate with age (TIF+, p21+, p16+); their non-canonical SASP is the primary paracrine driver of fibroblast activation in the aged heart [^anderson2019]; senescent cardiac progenitor cells may also drive fibrosis [^lewis-mcdougall2019].
- **[[chronic-inflammation]]** — systemic inflammaging delivers pro-fibrotic cytokines; cardiac macrophage polarization toward inflammatory phenotype sustains local signaling.
- **[[altered-intercellular-communication]]** — the senescent cardiomyocyte TGFβ2/GDF15/EDN3 secretome represents a pathological paracrine communication shift that drives fibroblast fate in the absence of acute injury.
- **[[mitochondrial-dysfunction]]** — ROS from dysfunctional mitochondria amplify NF-κB and NLRP3 inflammatory circuits that feed into TGFβ signaling.

Senescent cardiac progenitor cells (CPCs) also contribute: aged-senescent CPCs impair heart regeneration and secrete pro-fibrotic factors [^lewis-mcdougall2019]. This represents an additional senescence-fibrosis link beyond cardiomyocyte senescence.

## Limitations and gaps

- **Reversibility in aging** — established interstitial fibrosis with AGE crosslinks is likely irreversible; the reversible fraction (active myofibroblast-driven collagen deposition) is the therapeutic target, but the ratio is not routinely measurable clinically. #gap/no-mechanism
- **HFpEF trials** — cardiac fibrosis is the presumed substrate but has not been formally measured as a primary trial endpoint in most HFpEF trials; surrogate endpoints (ECV) are emerging. #gap/long-term-unknown
- **Senolytic translation** — Anderson 2019 navitoclax data is mouse only: male C57BL/6 mice, treatment started at ~100 weeks (~23 months), 50 mg/kg/day oral gavage for 2 cycles (7 days on, 1 week off), analyzed at ~24 months. This dose would cause significant thrombocytopenia toxicity in humans. Human-safe senolytic regimens have not been tested for cardiac fibrosis endpoints. #gap/needs-human-replication
- **AGE-crosslink targeting** — no approved or late-stage clinical compound exists for AGE-crosslink reversal in cardiac fibrosis. #gap/dose-response-unclear
- **Non-canonical SASP human validation** — the TGFβ2/GDF15/EDN3 secretome was characterized in mouse models; its exact composition and relative importance in aged human hearts are not fully characterized. #gap/needs-replication

## Cross-references

- [[heart-failure]] — HFpEF is the primary clinical output; HFrEF post-MI involves replacement fibrosis
- [[cardiovascular-aging]] — fibrosis is one of three major structural changes in cardiac aging (alongside cardiomyocyte hypertrophy and cardiomyocyte loss)
- [[cardiomyocytes]] — post-mitotic effectors of the non-canonical SASP; senescence accumulates via telomere damage
- [[sasp]] — classic SASP vs non-canonical cardiomyocyte SASP distinction; critical for mechanistic understanding
- [[cellular-senescence]] — shared hallmark; both cardiomyocytes and CPCs contribute
- [[chronic-inflammation]] — systemic SASP and inflammaging deliver pro-fibrotic signals
- [[tgf-beta-pathway]] — master signaling axis; implicit stub
- [[cardiac-fibroblasts]] — primary effector cell; implicit stub
- [[hfpef]] — clinical syndrome driven by fibrosis; implicit stub (or extend [[heart-failure]])
- [[atrial-fibrillation]] — electrical consequence of fibrosis; implicit stub

## Footnotes

[^travers2016]: [[studies/travers-2016-cardiac-fibrosis-review]] · doi:10.1161/CIRCRESAHA.115.306565 · Travers JG, Kamal FA, Robbins J, Yutzey KE, Bhattacharya B · review · Circulation Research 2016;118(6):1021-1040 · 1,495 citations · comprehensive review of cardiac fibroblast biology, myofibroblast activation, TGFβ/RAAS signaling, and fibrosis subtypes · archive: download failed — green OA URL unresolvable by archive (no PMC mirror found); #gap/no-fulltext-access for Travers-sourced claims

[^frangogiannis2020]: [[studies/frangogiannis-2020-cardiac-fibrosis]] · doi:10.1093/cvr/cvaa324 · Frangogiannis NG · review · Cardiovascular Research 2021;117(6):1450-1488 · 1,015 citations · mechanistic review covering ECM biology, LOX crosslinking, non-canonical signaling, biomarkers, and therapeutic strategies · archive: local PDF available (via Europe PMC; downloaded 2026-05-04)

[^anderson2019]: [[studies/anderson-2019-cardiomyocyte-senescence-fibrosis]] · doi:10.15252/embj.2018100492 · Anderson R et al. · in-vivo + in-vitro · The EMBO Journal 2019;38:e100492 · 489 citations · senolytic experiment: male C57BL/6 mice, navitoclax (ABT263) 50 mg/kg/day oral gavage, 7 days/cycle × 2 cycles with 1-week interval; treatment started at ~100 weeks (~23 months); analysis at ~24 months (n=5–8/group); length-independent telomere damage drives post-mitotic CM senescence; non-canonical SASP = Edn3 + Tgfb2 + Gdf15 (not Il-6/Il-1β/Cxcl1/Cxcl2); Tgfb2 activates cardiac fibroblasts; navitoclax cleared TIF+ CMs and reduced cardiac fibrosis (Sirius Red % area ~4% → ~2.5%); genetic clearance (INK-ATTAC, 27-month mice) also reduced fibrosis · model: mus-musculus · local PDF available

[^lewis-mcdougall2019]: [[studies/lewis-mcdougall-2019-cpc-senescence-fibrosis]] · doi:10.1111/acel.12931 · Lewis-McDougall FC et al. · in-vivo + in-vitro · Aging Cell 2019;18:e12931 · 296 citations · human CPCs from 35 subjects aged 32–86 years; >50% of CPCs senescent (p16INK4A, SA-β-gal, γH2AX, SASP) in aged (>70 y) subjects; senescent CPC SASP is classical inflammatory (MMP-3, PAI-1, IL-6, IL-8, IL-1β, GM-CSF); senescent CPCs impair cycling-competent CPC function paracrinally; in vivo senolytic clearance (D+Q and INK-ATTAC, 27.7 ± 2.7 month mice) activated resident CPCs, increased Ki67+/EdU+ CMs, and reduced LV fibrosis · model: human CPCs + mus-musculus in vivo · local PDF available
