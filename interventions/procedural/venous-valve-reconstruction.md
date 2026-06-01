---
type: intervention
aliases: [artificial venous valve, prosthetic venous valve, bioprosthetic venous valve, venous valve repair, valvuloplasty, neovalve, venous valve transplant, VenoValve, enVVe, BlueLeaf, deep venous reconstruction]
mode: procedural
mechanisms: [restore-venous-valve-competence, abolish-deep-venous-reflux, reduce-ambulatory-venous-hypertension]
targets: []
target-hallmarks: ["[[altered-intercellular-communication]]"]
target-pathways: []
human-evidence-level: limited
clinical-stage: trial-in-progress
safety-profile: investigational
translation-gap: translation-blocked-safety
next-experiment: "A randomized, sham/standard-care-controlled trial measuring BOTH a hemodynamic endpoint (duplex reflux time) AND a clinical score (rVCSS) — to resolve the recurring single-arm finding of clinical-score improvement WITHOUT reflux-time correction. The enVVe/TAVVE pivotal (55-patient randomized standard-care arm) is the field's first such design."
clinical-trials-active: 1
literature-checked-through: 2026-05-25
verified: true
verified-date: 2026-05-25
verified-by: claude
verified-scope: "Maleti 2006 (J Vasc Surg, local PDF), Maleti 2023 (J Vasc Surg Venous Lymphat Disord, local PDF), Ochoa Chaar 2026/SAVVE (J Vasc Surg Venous Lymphat Disord, local PDF via PMC12553046) verified against full PDFs. Key corrections applied: (1) SAVVE CEAP corrected from C4b–C6 to C4b/C4c/C5/C6; (2) mean rVCSS −7.9 qualified as responder-cohort mean (all-patient mean −6.7); (3) Maleti 2023 pooled competence corrected from 84% to 87% (internal valvuloplasty subgroup); neovalve subgroup data added; (4) VenoValve device description made precise per paper (porcine non-coronary aortic valve leaflet + aortic wall on stainless-steel frame; Hancock Jaffe attribution removed — paper only credits enVVeno Medical). FDA not-approvable letter and IDE claims remain sourced to enVVeno company pages (#gap/no-fulltext-access maintained; URLs returned HTTP 403 during verification; could not independently confirm from a second source — NCT04943172 ClinicalTrials.gov status confirmed ACTIVE_NOT_RECRUITING consistent with SAVVE completion). Vasudevan 2021 (BlueLeaf, not_oa — abstract only), Zervides 2021, Brountzos 2003, Kuna 2015, Lopera 2020, Raju 1985, Verma 2014 not verified against full PDFs."
---

# Venous valve reconstruction and artificial venous valves

The attempt to **repair or replace an incompetent deep venous valve** to abolish reflux and lower ambulatory venous hypertension. The indication is **deep venous reflux — post-thrombotic syndrome (PTS) and advanced chronic venous insufficiency (CEAP C4b–C6)** — *not* cosmetic or superficial varicose veins, which are managed by ablation/sclerotherapy (see [[chronic-venous-disease]] § Interventions). This page is the engineering counterpart to the venous-valve biology on [[../../tissues/veins]].

## The core engineering problem — why it's so hard

The venous environment is uniquely hostile to a prosthesis: **low flow velocity, low pressure, and high thrombogenicity**. A prosthetic leaflet sits in slow-moving blood with little washout, so any thrombogenic surface seeds clot; historically prosthetic venous valves have **thrombosed, fibrosed into immobility, or migrated**. A systematic review of the 2012–2020 device literature catalogued the recurring failure modes — regurgitation, migration, leakage — and concluded the field remains "away from the ideal valve."[^zervides2021] **As of May 2026 there is still no FDA-approved prosthetic venous valve** (see § Current status).

A second cross-cutting problem: several devices show **clinical-score improvement (rVCSS) without commensurate hemodynamic (reflux-time) correction**, which single-arm open-label trials cannot distinguish from placebo, adjunctive-care, or regression-to-the-mean effects.

## Approaches

### 1. Autologous surgical reconstruction (available, rarely performed)

Operating on the patient's own tissue — no foreign material:

- **Valvuloplasty** (internal or external) — surgically tightening a stretched but present valve; **valve transposition** and **axillary-vein valve transplantation** import a competent valve segment.[^raju1985][^verma2014]
- **Neovalve construction** (Maleti/Lugli technique) — fashioning a new monocusp valve from intraluminal vein-wall flaps. The original PTS series (n=16 patients/18 limbs) healed ulcers in 16/18 limbs (89%) with neovalve competence in 95%, though early thrombosis below the neovalve occurred in ~12%.[^maleti2006]

A 2023 systematic review/meta-analysis (57 studies; only **3 RCTs**, 252 patients; the rest case series, 4004 patients; database inception to Feb 2022) pooled outcomes for **primary** valve incompetence by technique. For internal valvuloplasty (the largest subgroup): ulcer healing **89% (95% CI 81–96%)**, valve competence **87% (95% CI 80–93%)**, valve patency **98% (95% CI 95–100%)**. For the neovalve technique specifically: ulcer healing 85% (95% CI 55–100%), competence 88% (95% CI 78–96%). PTS subgroups did worse across all techniques, consistent with the harder post-thrombotic substrate.[^maleti2023] The entire surgical literature is **case-series-dominated, operator-dependent, and of low contemporary utilization**. #gap/needs-replication

### 2. Bioprosthetic venous valves — the VenoValve (and its FDA rejection)

The **VenoValve** (enVVeno Medical) is a surgically-implanted **monocusp bioprosthesis** — a porcine non-coronary aortic valve leaflet stitched to a stainless-steel frame with a section of porcine aortic wall, sewn into the femoral vein. It was the field's lead program. The US pivotal **SAVVE** trial (NCT04943172; single-arm, n=75, CEAP C4b/C4c/C5/C6) reported at 1 year: device implanted in 73/75 (97.3%); **84.6% of implanted patients achieved a clinically meaningful rVCSS improvement (mean −7.9 points among responders; mean −6.7 points all-patient)**; ulcer healing 91.6% for ulcers <12 months duration (77.8% improvement/healing for ulcers >12 months) — **but only 34.3% achieved ≥30% improvement in duplex reflux time at 6 months, and the perioperative major-adverse-event rate was 30.7% (28 events in 23 patients; predominantly bleeding)**.[^ochoa2026]

**Critically: the VenoValve is NOT approved.** enVVeno submitted a PMA (Breakthrough Device) in Nov 2024; the FDA issued a **not-approvable letter in Aug 2025**, and the **appeal was denied in Nov 2025** — the agency held that the device did not meet the standard of reasonable assurance of safety and effectiveness (the weak reflux-time correction + high MAE rate against a single-arm design are the likely drivers).[^envveno_naa] A **transcatheter** version (**enVVe**/TAVVE) received an **FDA IDE in April 2026** for a pivotal study that will — for the first time in this field — include a **randomized standard-care arm**; enrollment had not begun and no NCT was registered as of this writing.[^envveno_ide]

### 3. Percutaneous in-situ valve creation — BlueLeaf (suspended)

The **BlueLeaf** system (InterVene Inc.) formed a **monocusp valve from the patient's own vein wall** percutaneously, leaving no implant. Early feasibility (n=14, CEAP 4–6): valve formed in 93%, rVCSS improved 15.0→9.4 at 360 days, 5/5 ulcers healed, no DVT — **but reflux time did not decrease** (popliteal RT 3.0→3.6 s).[^vasudevan2021] All InterVene trials are now **TERMINATED/WITHDRAWN** ("project suspended by Sponsor"); the program is dormant.

### 4. Tissue-engineered / decellularized valves (preclinical only)

No first-in-human exists. Approaches: **small intestinal submucosa (SIS)** bicuspid valves (sheep IVC, 6/8 competent at 5 weeks);[^brountzos2003] **decellularized + recellularized** human femoral vein-valve allgrafts (in-vitro competency proof-of-concept);[^kuna2015] and the methodologically important finding that **decellularization chemistry determines whether the valve still works** — antigen-removal preserved function whereas SDS caused valvular insufficiency.[^lopera2020] Bioprinted venous valves do not appear in the primary literature. #gap/no-mechanism

## Current status (May 2026)

| Approach | Lead example | Status |
|---|---|---|
| Bioprosthetic, surgical | VenoValve (enVVeno) | **Rejected** — FDA not-approvable Aug 2025, appeal denied Nov 2025 |
| Bioprosthetic, transcatheter | enVVe / TAVVE | **Investigational** — FDA IDE Apr 2026; randomized arm planned; not yet enrolling |
| Percutaneous in-situ | BlueLeaf (InterVene) | **Suspended** — all trials terminated/withdrawn |
| Autologous surgical | neovalve, valvuloplasty, transplant | **Available, rarely performed** — case-series evidence (3 RCTs total) |
| Tissue-engineered / decellularized | SIS, decellularized allograft | **Preclinical only** |

**Bottom line:** there is currently **no approved artificial venous valve**. Autologous surgical reconstruction is the only clinically usable option and rests almost entirely on uncontrolled case series. The transcatheter enVVe pivotal — with the field's first randomized control arm — is the study most likely to resolve whether bioprosthetic valves deliver real hemodynamic benefit. #gap/contradictory-evidence (clinical-score vs reflux-time discordance)

## Relevance to early/superficial disease

For **superficial** truncal reflux and cosmetic varicose veins (CEAP C1–C2), valve reconstruction is **not relevant** — those are treated, if symptomatic, by endovenous ablation of the refluxing trunk (the body simply reroutes flow through competent deep veins). Artificial-valve technology targets the much smaller population with **deep-system** reflux/PTS who have failed conservative therapy. See [[chronic-venous-disease]] for the full CEAP-graded treatment ladder.

## Footnotes

[^zervides2021]: doi:10.1177/0268355520962451 · Zervides C et al. · *Phlebology* 2021;36(2):89–101 · systematic review (35 papers) · PMID 33021138 · prosthetic venous valves 2012–2020; failure modes = regurgitation, migration, leakage; field "away from the ideal valve"
[^raju1985]: Raju S · *Int Angiol* 1985;4(4):419–424 · review/technique · PMID 3834004 · foundational description of axillary-vein valve transfer + valvuloplasty (no DOI in record)
[^verma2014]: doi:10.1016/j.jvsv.2014.04.013 · Verma H, Tripathi RK · *J Vasc Surg Venous Lymphat Disord* 2014;2(4):457–464 · technique/series · PMID 26993543 · reduction internal valvuloplasty for primary deep-vein valvular incompetence
[^maleti2006]: doi:10.1016/j.jvs.2005.12.053 · Maleti O et al. · *J Vasc Surg* 2006;43(4):794–799 · case series · n=16 patients/18 limbs (PTS) · PMID 16616239 · neovalve from intraluminal flaps; ulcer healed 16/18 (89%), competence 95%, early sub-neovalve thrombosis ~12%
[^maleti2023]: doi:10.1016/j.jvsv.2023.07.003 · Maleti O et al. · *J Vasc Surg Venous Lymphat Disord* 2023;11(6):1265–75 · systematic review + meta-analysis · 57 studies quantitative synthesis (3 RCTs/252 pts + 54 case series/4004 pts); database inception to Feb 2022 · PMID 37453548 · primary incompetence pooled for internal valvuloplasty: ulcer healing 89% (95% CI 81–96%), ulcer recurrence 7% (95% CI 1–17%), valve patency 98% (95% CI 95–100%), valve competence 87% (95% CI 80–93%); neovalve (5 studies): ulcer healing 85% (95% CI 55–100%), competence 88% (95% CI 78–96%); PTS subgroup (secondary incompetence) showed significantly worse outcomes across all techniques
[^ochoa2026]: doi:10.1016/j.jvsv.2025.102314 · Ochoa Chaar CI et al. · *J Vasc Surg Venous Lymphat Disord* 2026;14:102314 · prospective single-arm multicenter pivotal (SAVVE, NCT04943172) · n=75 enrolled (23 sites, Oct 2021–Sep 2023); median age 65 yr; 81.3% male; 58.7% C6; 74.7% post-thrombotic · PMID 40946857 · PMC12553046 · implanted 73/75 (97.3%); median baseline rVCSS 16; at 12 months: 84.6% of implanted patients achieved ≥3-pt rVCSS improvement (mean −7.9 pts among responders; −6.7 pts all-patient); ulcer healing/improvement 84% overall (91.6% for ulcers <12 mo); reflux-time ≥30% improved only 34.3% at 6 months; perioperative MAE 30.7% (28 events/23 patients; predominantly bleeding + DVT; no perioperative PE or mortality)
[^envveno_naa]: enVVeno Medical company release · https://envveno.com/envveno-receives-not-approvable-letter-from-the-fda-for-the-venovalve/ · web-retrieved 2026-05-25 · VenoValve PMA not-approvable letter Aug 2025; supervisory appeal denied Nov 2025; NOT approved · #gap/no-fulltext-access (company/FDA source, not peer-reviewed)
[^envveno_ide]: enVVeno Medical company release · https://envveno.com/envveno-medical-receives-first-ever-fda-ide-approval-for-a-u-s-pivotal-study-of-a-non-surgical-replacement-venous-valve/ · web-retrieved 2026-05-25 · enVVe (transcatheter) FDA IDE approved Apr 29 2026; pivotal (10 + 220 pts, 55 randomized to standard care); no NCT registered yet · #gap/no-fulltext-access
[^vasudevan2021]: doi:10.1016/j.jvsv.2020.12.073 · Vasudevan T et al. · *J Vasc Surg Venous Lymphat Disord* 2021;9(2):520–527 · early feasibility (BlueLeaf) · n=14 (CEAP 4–6) · PMID 33359385 · monocusp formed in 93%; rVCSS 15.0→9.4 at 360 d (P=.0002); 5/5 ulcers healed; reflux time unchanged (3.0→3.6 s); program subsequently suspended (NCT04225806 terminated)
[^brountzos2003]: doi:10.1097/01.rvi.0000058410.01661.62 · Brountzos E et al. · *J Vasc Interv Radiol* 2003;14(3):349–356 · preclinical (sheep IVC) · PMID 12631640 · suspended SIS bicuspid valves; 5-week patency, 6/8 competent, host remodeling
[^kuna2015]: doi:10.1016/j.jvsv.2014.12.002 · Kuna VK et al. · *J Vasc Surg Venous Lymphat Disord* 2015;3(2):209–217 · preclinical (human cadaveric, in-vitro) · PMID 26992620 · 15 decellularized + recellularized femoral vein-valve segments; retained ECM + competency to 100 mm Hg reflux
[^lopera2020]: doi:10.1016/j.actbio.2020.03.003 · Lopera Higuita M, Griffiths LG · *Acta Biomater* 2020;107:115–128 · preclinical (bovine saphenous vein) · PMID 32151701 · antigen-removal decellularization preserved valve function; SDS caused valvular insufficiency — decellularization chemistry is determinative
