---
type: intervention
aliases: [senolytic drugs, senolytic agents, SCAP-targeting drugs, senotherapeutics]
mode: pharmacological
mechanisms: [scap-disruption, bcl-2-family-inhibition, pi3k-akt-inhibition, ephrin-receptor-inhibition]
target-hallmarks: ["[[altered-intercellular-communication]]", "[[cellular-senescence]]", "[[chronic-inflammation]]", "[[stem-cell-exhaustion]]"]
target-pathways: ["[[apoptosis-pathway]]", "[[pi3k-akt-pathway]]"]
human-evidence-level: limited
clinical-stage: phase-2-trials
safety-profile: investigational
translation-gap: phase-3-rct-needed
next-experiment: "Hard-endpoint Phase 3 of D+Q or fisetin in IPF or osteoarthritis with senescent-cell biomarker panel; n>=500; UNITY-OA-101 failure shows indication+SCAP matching critical."
clinical-trials-active: 14
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Zhu 2015, Zhu 2016 (navitoclax), Justice 2019, Hickson 2019, Baker 2016 PDFs verified against primary sources. Chang 2016 (nm.4010) unverifiable — DOI lookup failed (green OA, 0 candidate URLs); claims limited to title-confirmable HSC rejuvenation framing. Baker 2011 unverifiable — DOI lookup failed; claims carried from p21 verification round. Amor 2020 Nature DOI confirmed (10.1038/s41586-020-2403-9); PDF not read. NCT numbers verified against ClinicalTrials.gov API. R34 recency refresh 2026-05-08: added Klier 2025 (UBX1325 NEJM Evidence Phase 2 RCT — first positive BCL-xL-axis senolytic human trial), Zhang 2026 NPJ Aging (next-generation senotherapy review), trial roster updated against ClinicalTrials.gov 2026-05-08; PDFs of new sources not independently end-to-end verified — abstracts only. 2026-06-12: Farr 2024 (doi:10.1038/s41591-024-03096-2) PDF read end-to-end — corrected dosing schedule (D 2 days / Q 3 days per cycle, not 3 days / 6 cycles), confirmed open-label design (not double-blind), confirmed 5 cycles over 20 wk, confirmed SASP-factor measurement (36 factors, no significant change), confirmed T-cell p16 measured at baseline only. 2026-06-13: Hickson 2019 cells-vs-mRNA reconciliation — confirmed this page's Hickson 2019 claims use correct 'p16 −35%' / 'p21 −17%' / 'SA-βgal+' notation without mRNA mislabeling; no corrections needed on this page. The IHC-cell-count nature of those values (% p16INK4A+ cells per 100 adipocytes; % p21CIP1+ cells per 100 adipocytes; % SA-βgal+ cells per nucleus) confirmed against Hickson 2019 PDF (Fig. 1a/b/c and methods IHC protocol)."
---

# Senolytics

A class of pharmacological agents that **selectively kill senescent cells** by disrupting the **Senescent-Cell Anti-Apoptotic Pathways (SCAPs)** that protect senescent cells from their own pro-apoptotic SASP environment. The concept and naming were established by Zhu, Tchkonia, Kirkland and colleagues at Mayo Clinic in 2015 [^zhu2015]. Senolytics have moved from preclinical proof-of-concept to multiple Phase 2 human trials over a single decade — the most clinically-advanced anti-aging intervention class as of 2026.

This page covers the **drug class as a whole**. Specific compounds live in `molecules/compounds/`:

- [[fisetin]] (verified) — flavonol; cell-type-specific clearance; Phase 2 trials ongoing
- [[quercetin]] (verified) — flavonol; D+Q "Q"; HUVEC-active via BCL-xL / EFNB1 (not PI3Kδ, which is preadipocyte-selective per Zhu 2015)
- [[dasatinib]] (verified) — TKI; D+Q "D"; preadipocyte-active via ephrin/EPH receptors
- [[navitoclax]] (planned) — Bcl-2/Bcl-xL inhibitor; thrombocytopenia-limited
- [[a1331852]] (planned) — selective Bcl-xL inhibitor

## Definitional clarifications

The literature uses several overlapping terms; the distinctions matter:

| Term | Meaning |
|---|---|
| **Senolytic** | Selectively kills senescent cells (induces apoptosis or other death) |
| **Senomorphic** | Suppresses SASP without killing senescent cells (e.g., rapamycin, JAK inhibitors, metformin, NF-κB inhibitors) |
| **Senotherapeutic** | Umbrella term covering both senolytics and senomorphics |
| **Hit-and-run** | Intermittent dosing strategy: senescent cells take days–weeks to repopulate after clearance, so continuous exposure isn't required. Sublethal exposure carries a theoretical [[processes/senescence-escape]] risk; the endogenous alternative is [[processes/senescence-immune-surveillance]] |

## The SCAP framework

Zhu et al. 2015 (*Aging Cell*) [^zhu2015] is the foundational paper that established the SCAP concept and identified the first senolytic combination (dasatinib + quercetin). The key insight: senescent cells that resist their own pro-apoptotic SASP environment do so by upregulating specific anti-apoptotic networks, and **these networks are distinct across cell types**.

**Cell-type-specific SCAPs identified** (Zhu 2015 Fig 1D for preadipocytes; refined by Zhu 2016 + Yosef 2016 + Zhu 2017 across HUVECs and IMR90):

| Cell type | SCAP nodes | Effective senolytics |
|---|---|---|
| Senescent HUVECs | **BCL-xL**, **EFNB1** | quercetin (Q); navitoclax; A1331852; fisetin (per Zhu 2017 — HUVECs only in that assay) |
| Senescent IMR90 fibroblasts | **Multi-target Bcl-2 family** — no single member sufficient (see note below) | navitoclax (hits BCL-2/BCL-xL/BCL-w); A1331852 (per Zhu 2017) |
| Senescent human preadipocytes | Ephrins (EFNB1/3); EPH receptors; PI3KCD; serpins (PAI-1/PAI-2); p21 | dasatinib (D); D+Q combination |

**Note on IMR90 SCAP** (corrected from earlier "BCL-2 + BCL-w dominant" framing per [[bcl-2]] and [[bcl-xl]] verifier rounds):
- Zhu 2016 Fig 4A-B: BCL-xL siRNA alone or BCL-2 + BCL-xL together were *insufficient* for IMR90 senolysis; **the full triple BCL-2 + BCL-xL + BCL-w combination was required**.
- Yosef 2016: **BCL-W + BCL-xL dual knockdown** produced ~53% IMR90 viability reduction; each alone had only minor effect.
- Practical implication: IMR90 senescent cells require multi-target Bcl-2 family inhibition. Navitoclax (BCL-2/BCL-xL/BCL-w pan-inhibitor) is well-suited; single-target agents (e.g., venetoclax, BCL-2 only) are not.

**Critical implication:** no single senolytic clears all senescent cell types. D+Q was designed as a polypharmacological combination specifically to cover complementary cell-type populations. The clinical translation challenge is largely a **cell-type-matching problem** rather than a potency problem.

## Major senolytic drug families

### BH3-mimetics (Bcl-2 family inhibitors)

The mechanistically cleanest senolytic class — directly inhibit anti-apoptotic Bcl-2/Bcl-xL/Bcl-w proteins, releasing the BAX/BAK-mediated mitochondrial apoptosis cascade in cells that are already primed for apoptosis (as senescent cells are, due to chronic SASP-driven stress). See [[apoptosis-pathway]] § BH3-mimetics for mechanism.

| Agent | Target | Status | Key limitation |
|---|---|---|---|
| **Navitoclax** (ABT-263) | BCL-2 / BCL-xL / BCL-w | Oncology Phase 2; senolytic preclinical | **Thrombocytopenia** — BCL-xL is required for platelet survival; on-mechanism dose-limiting toxicity |
| **A1331852** | BCL-xL selective | Preclinical senolytic | Same platelet liability as navitoclax |
| ABT-737 | BCL-2 / BCL-xL / BCL-w (tool compound) | Preclinical only | Poor oral bioavailability |
| **UBX0101** (Unity Biotechnology) | MDM2 → p53/p21 axis (claimed) | **Phase 2 failed** for osteoarthritis (UNITY-OA-101, 2020) | Mechanism debated; may not act primarily as a clean senolytic |
| **UBX1325 / foselutoclax** (Unity Biotechnology) | **BCL-xL-selective** small molecule | **Phase 2 positive trend (BEHOLD, NCT04857996)** in diabetic macular edema [^klier2025]; intravitreal route | Local-delivery design sidesteps systemic thrombocytopenia. First BCL-xL-axis senolytic to show positive Phase 2 RCT signal in humans; class proof-of-concept for local-delivery BH3-mimetics. |

Navitoclax in **aged-mouse** studies improved hematopoietic stem cell function (Chang et al. 2016 *Nat Med* [^chang2016] — the primary finding per the paper's title; lung/liver/bone marrow senescent-cell clearance data attributed to this paper cannot be confirmed from the PDF, which is unavailable in the archive #gap/no-fulltext-access — note: this is the correct attribution for the aged-mouse navitoclax data; it is NOT in Zhu 2016, which is in vitro only).

### Tyrosine kinase inhibitors

| Agent | Senolytic mechanism | Status |
|---|---|---|
| [[dasatinib]] | Disrupts ephrin/EPH SCAP arm in preadipocytes; complementary to BH3-mimetics | Phase 2 in D+Q regimen |

### Flavonoid / natural-product senolytics

| Agent | Mechanism | Status |
|---|---|---|
| [[fisetin]] | PI3K/AKT/mTOR pathway disruption (proposed); cell-type-specific clearance; mechanism incompletely characterized | Phase 2 trials ongoing (NCT03675724, NCT03325322) |
| [[quercetin]] | BCL-xL / EFNB1 in HUVECs (PI3Kδ is preadipocyte-selective per Zhu 2015, not HUVEC); D+Q "Q" component | Phase 1/2 in D+Q regimen |
| Procyanidin C1 (grape seed) | Less-studied; preclinical evidence in mice (Xu 2021 *Nat Metab*) | Preclinical |

### Other / investigational

- **Cardiac glycosides** (digoxin, ouabain) — preclinical senolytic evidence (Triantafyllou 2019); narrow therapeutic index complicates translation
- **HSP90 inhibitors** (17-AAG, 17-DMAG) — preclinical only
- **FOXO4-DRI peptide** — disrupts FOXO4–p53 interaction in senescent cells; Baar 2017 preclinical evidence
- **Galactose-conjugated prodrugs** (lysosomal-targeting) — exploit elevated SA-β-galactosidase in senescent cells; preclinical / first-in-human trials beginning

## Clinical evidence status (as of 2026)

| Trial | Agent(s) | Population | NCT | Status / key results |
|---|---|---|---|---|
| Justice 2019 [^justice2019] | D + Q | Idiopathic pulmonary fibrosis (n=14) | NCT02874989 | Phase 1 pilot — primary endpoints feasibility (achieved); secondary 6MWT +21.5 m (p=0.012), gait speed +0.12 m/s (p=0.024), chair-stands −2.2 s (p=0.013); pulmonary function unchanged |
| Hickson 2019 [^hickson2019] | D + Q | Diabetic kidney disease (n=9) | NCT02848131 | Phase 1 — adipose biopsy: p16 −35% (p=0.001), p21 −17% (p=0.009), SA-βgal+ −62% (p=0.005); macrophages −28% (p=0.0001); circulating SASP factors (IL-1α, IL-6, MMPs-9/-12) reduced |
| Mayo Frailty Fisetin | Fisetin | Older women with frailty | NCT03675724 | Phase 2 — ongoing as of 2026 |
| DKD Fisetin | Fisetin | Patients with diabetic kidney disease | NCT03325322 | Phase 2 — **suspended** (per ClinicalTrials.gov 2026-05-04; reason not posted) |
| **UNITY-OA-101** | UBX0101 | Knee osteoarthritis | NCT04129944 | **Phase 2 failed** — no improvement vs placebo; UBX0101 program subsequently abandoned. The first major senolytic clinical setback. |
| **BEHOLD** [^klier2025] | UBX1325 (foselutoclax) | Diabetic macular edema (suboptimal anti-VEGF response) | NCT04857996 | **Phase 2 RCT — first positive BCL-xL-axis senolytic human trial.** Single 10 µg intravitreal injection vs sham; n=65 (UBX1325 n=32, sham n=33); 48-wk follow-up. BCVA difference UBX1325 − sham at week 48 = +5.6 ETDRS letters (95% CI −1.5 to 12.7); no systemic safety signals (no platelet effects via local intravitreal route); 5 vs 4 Grade ≥3 TEAEs (UBX1325 vs sham; CI overlaps zero). UNITY pivoted to UBX1325/foselutoclax (a BCL-xL-selective small molecule) after UBX0101 failure; intravitreal local delivery sidesteps the systemic thrombocytopenia liability that has blocked navitoclax. |
| TROFFi [^ji2026] | Fisetin | Postmenopausal breast cancer survivors with 6MWD <400 m | NCT05595499 | Phase 2 RCT — protocol published 2026; 88 women; fisetin 20 mg/kg/day d1–3 of 14-day cycles × 4 cycles vs placebo; primary endpoint Δ6MWD baseline-to-end. Multicenter, double-blind, placebo-controlled. **First placebo-controlled fisetin senolytic RCT** with hard physical-function endpoint. Recruiting as of 2026-05. |
| **Farr 2024** [^farr2024-bone] | D + Q | Postmenopausal women (osteoporosis risk; n=60) | NCT04313634 | **First placebo-controlled D+Q RCT to report results; primary endpoint NEGATIVE.** 20-week open-label RCT: D 100 mg × 2 days + Q 1,000 mg × 3 days, every 28 days × 5 cycles vs placebo; primary endpoint CTx (bone resorption): **p=0.611 (NS)**. P1NP (formation) significantly elevated at 2 wk (+16%, p=0.020) and 4 wk (+16%, p=0.024), returned to NS at 20 wk (−9%, p=0.149). 36 circulating SASP factors measured at baseline and 2 wk — no significant D+Q vs control difference. **Exploratory high-senescent-burden tertile** (highest T-cell p16 mRNA [variant 5], n≈10/arm): P1NP +34% (p=0.035) and CTx −11% (p=0.049) at **2 weeks** post-dosing; radius BMD +2.7% (p=0.004) at **20 weeks**. **Materially qualifies the senolytic-for-bone framing**: benefit appears NOT universal but stratifiable by senescent-cell burden. The biomarker-stratified follow-up is in progress (Farr 2025 *Aging Cell*). See [[bone]] for the bone-specific verification context. |

#gap/needs-human-replication — All non-UBX1325 positive senolytic results in humans are from small open-label or pilot trials. No large randomized blinded outcome trials have completed. The UNITY-OA-101 failure is a cautionary signal that not all SCAP-targeting strategies translate; the **UBX1325/BEHOLD result (Klier 2025)** is the first BCL-xL-axis senolytic Phase 2 RCT to show a positive efficacy trend with a clean safety profile, vindicating the BCL-xL mechanism in a localized-delivery context.

**Active senolytic trials count (ClinicalTrials.gov, 2026-05-08):** 14 RECRUITING + ACTIVE_NOT_RECRUITING + ENROLLING_BY_INVITATION (excludes oncology-only navitoclax/venetoclax monotherapy trials). Fisetin dominates the senolytic-aging trial roster (17 active/enrolling fisetin trials, several spanning aging-relevant indications: PAD, mild Alzheimer's [NCT07279714], healthy aging [NCT07195318], breast-cancer-survivor frailty [NCT06113016, NCT05595499], multimorbidity [NCT06431932], cancer-survivor fatigue [NCT06819254]).

## Cell-type specificity and clinical translation challenges

The cell-type-specific SCAP framework has direct clinical-design implications:

- **D+Q clears preadipocytes, mesenchymal stem cells, and some stromal populations** — well-suited for fibrotic diseases (where mesenchymal senescent cells drive pathology) and metabolic syndromes (preadipocyte senescence drives adipose dysfunction).
- **Navitoclax / A1331852 are most effective on HUVECs and other Bcl-xL-dependent senescent cells** — well-suited for vascular and hematologic contexts, but the **dose-limiting thrombocytopenia restricts use** to cancer indications where the risk/benefit profile permits.
- **Fisetin shows broader cell-type activity than pure Bcl-2-family targeting would predict** — its mechanism remains incompletely characterized, which is both its appeal (broader spectrum) and its limitation (harder to design rational combinations).

**Trial design implication:** the indication should be chosen for the senescent-cell type most relevant to the disease, not just for the most easily-recruited patient population. This is a partial explanation for the UNITY-OA-101 failure (osteoarthritis senescent cells may not have been the right SCAP profile for UBX0101's mechanism).

### Senolytic resistance and heterogeneity within cell populations

Beyond the between-cell-type SCAP differences above, evidence is emerging that even within a single senescent cell population, a molecularly defined subset is **resistant to BH3-mimetic senolysis**. A 2025 Weizmann Institute (Krizhanovsky lab) preprint identifies cell-surface ATP6V1B2 (**csV1B2**; [[atp6v1b2]]) as a marker of such a subset [^freizus2025senolytic]: in response to DNA damage, a subset of senescent cells upregulates the v-ATPase subunit ATP6V1B2 on the cell surface, and csV1B2 expression correlates with **resistance to ABT-737-induced apoptosis** in culture (ABT-737 being the in-vitro analog of navitoclax/ABT-263, a canonical BCL-2/BCL-xL/BCL-w senolytic). This subset carries a transcriptional signature associated with DNA repair and apoptosis resistance, and is present in aging and fibrotic lungs in vivo. The csV1B2 surface marker is therefore a candidate **biomarker for BH3-mimetic treatment failure** and a mechanistic explanation for residual senescent-cell persistence after navitoclax-class drug exposure. #gap/preprint-not-peer-reviewed #gap/needs-replication — preprint only; ABT-737 to navitoclax/foselutoclax extrapolation requires full-text dose-response data.

## SENS / hallmark mapping

- **SENS strategy:** [[sens-damage-categories|ApoptoSENS]] (death-resistant cells) — senolytics are the canonical ApoptoSENS intervention
- **Hallmark targets:** [[cellular-senescence]] (direct clearance), [[chronic-inflammation]] (indirect via SASP reduction)

## Related approaches

- **Genetic senescent-cell clearance** — INK-ATTAC and p16-3MR transgenic mouse models (Baker 2011 [^baker2011]; Baker 2016 [^baker2016]) — preclinical proof-of-principle that motivated senolytic drug development. Baker 2016 demonstrated **27% (mixed background) / 24% (C57BL/6) lifespan extension** from p16+ cell clearance in naturally-aged mice (per [[p21]] verification round; tissue-selective effect).
- **Senomorphics** (suppress SASP without killing): [[rapamycin]], JAK inhibitors (ruxolitinib), [[metformin]] (partial), NF-κB inhibitors, BET inhibitors — see [[sasp]] for mechanism details
- **CAR-T senolytic approaches** (preclinical) — uPAR-targeted CAR-T cells that clear senescent cells (Amor 2020 *Nature*) — an early-stage cellular-immunotherapy translation of the senolytic concept

## Limitations and open questions

- **Cell-type specificity is the dominant unsolved problem.** No single agent or combination clears all senescent cells; tissue-level efficacy depends on which senescent populations dominate.
- **Long-term safety in humans is unknown** for all senolytics — acute trials (single or short courses) have favorable safety; chronic intermittent exposure data is accumulating but limited. #gap/long-term-unknown
- **Optimal dosing schedule** remains debated — "hit-and-run" intermittent (D+Q 3-day courses, weekly cycles per Justice 2019) vs continuous low-dose. Mechanistic basis for hit-and-run is solid but timing optimization is empirical. #gap/dose-response-unclear
- **Trial enrollment biomarkers** — no validated way to identify patients with high senescent-cell burden a priori. Trials enroll on disease state. #gap/needs-replication for biomarker validation
- **Senolytic vs senomorphic comparative efficacy** — head-to-head clinical comparisons are scarce.
- **Off-target toxicity at therapeutic doses** — D+Q dosing is short and intermittent partly to minimize TKI cardiotoxicity (D) and bioavailability concerns (Q).
- **Cardiac-glycoside senolytic activity** — promising preclinical signal but interpretation complicated by their narrow therapeutic index and existing clinical use in heart failure.
- **UBX0101 failure interpretation** — was the failure due to wrong cell-type targeting? Wrong indication? Wrong mechanism (UBX0101 may not act as a senolytic at all)? The post-mortem is incomplete and matters for the next generation of senolytic trials.

## Recent class-level developments (2024–2026)

The 2024–2026 senolytic literature has shifted from generic "BH3-mimetic monotherapy" toward:

1. **Local-delivery BCL-xL inhibition** — UBX1325/foselutoclax's intravitreal route (Klier 2025 [^klier2025]) demonstrates that the systemic-thrombocytopenia barrier can be bypassed for tissue-localized senescent-cell pathology (retina, CNS, joint). This is the first BCL-xL-axis senolytic to clear Phase 2 with a positive efficacy trend.
2. **Tissue-specific PROTAC degraders** (DT2216, PZ15227-class; recent reviews [^zhang2026]) — recruit organ-restricted E3 ligases (VHL, CRBN) to degrade BCL-xL selectively in nucleated senescent cells while sparing platelets. Reviewed as one of three "next-generation" senotherapy strategies in Zhang 2026.
3. **Immune-based senolysis** — uPAR-targeted CAR-T (Amor 2020), NK cell senotherapy approaches (Front Immunol 2025), and immune-checkpoint-modulated SnC clearance.
4. **Microbiome-senolysis crosstalk** — SCFAs (butyrate) modulate drug-transporter expression and SASP; emerging gut-liver axis modifiers of senolytic efficacy [^zhang2026].
5. **Indication-specific cell-type matching** — community-wide rethinking of trial design (Nature Aging 2025 perspective "Towards a personalized approach in senolytic trials") in light of UBX0101-OA failure vs UBX1325-DME positive signal.

#gap/long-term-unknown — long-term effects of repeated intravitreal BCL-xL inhibition (UBX1325) not yet characterized; BEHOLD followed for 48 wk.

## Cross-references

- [[fisetin]] — verified senolytic compound page
- [[quercetin]] — verified senolytic compound page
- [[dasatinib]] — verified senolytic compound page
- [[cellular-senescence]] — hallmark page (target)
- [[sasp]] — senescence secretome (downstream of senolytic clearance; verified)
- [[apoptosis-pathway]] — verified mechanism page
- [[caloric-restriction]] — adjacent intervention with senomorphic effects
- [[sens-damage-categories]] — ApoptoSENS section is the SENS-framing of this drug class

## Footnotes

[^zhu2015]: doi:10.1111/acel.12344 · in-vitro + in-vivo (mouse) · transcriptomic SCAP identification + first senolytic combination · model: human cells (HUVECs, IMR90, preadipocytes) + Ercc1-/Δ progeroid mice · *Aging Cell* — the foundational senolytic paper
[^justice2019]: doi:10.1016/j.ebiom.2018.12.052 · open-label Phase 1 pilot · n=14 IPF · D 100 mg + Q 1250 mg/day, 3 consec days/week × 3 weeks (9 dosing days) · primary endpoints feasibility; secondary 6MWT +21.5 m (p=0.012), gait speed +0.12 m/s (p=0.024), chair-stands −2.2 s (p=0.013) · model: humans
[^hickson2019]: doi:10.1016/j.ebiom.2019.08.069 · open-label Phase 1 · n=9 DKD · 3-day oral course: D 100 mg/day + Q 1000 mg twice daily · adipose biopsy: p16 −35% (p=0.001), p21 −17% (p=0.009), SA-βgal+ −62% (p=0.005); macrophages −28% (p=0.0001); circulating SASP factors reduced (IL-1α, IL-2, IL-6, IL-9, MMP-2, -9, -12 all decreased) · model: humans
[^chang2016]: doi:10.1038/nm.4010 · in-vivo (mouse) · navitoclax (ABT-263) in naturally-aged mice · *Nature Medicine* · confirmed title: "Clearance of senescent cells by ABT263 rejuvenates aged hematopoietic stem cells in mice" — HSC rejuvenation is the primary finding; lung/liver/bone marrow senescent-cell clearance claims #gap/no-fulltext-access (DOI lookup failed after retry)

[^farr2024-bone]: doi:10.1038/s41591-024-03096-2 · Farr JN et al. · *Nature Medicine* 2024;30(9):2605-2612 · randomized open-label placebo-controlled · n=60 postmenopausal women age 60–90 y · 20-week intermittent D+Q: D 100 mg/day × 2 consecutive days + Q 1,000 mg/day (250 mg ×4) × 3 consecutive days, every 28 days × 5 cycles vs placebo · primary endpoint CTx % change at 20 wk: D+Q −4.1% (IQR −13.2, 2.6) vs control −7.7% (IQR −20.1, 14.3); p=0.611 (NS) · secondary P1NP +16% vs control at 2 wk (p=0.020) and 4 wk (p=0.024); −9% at 20 wk (p=0.149, NS) · 36 SASP factors measured at baseline and 2 wk; no significant D+Q vs control difference in SASP in any group · T-cell p16 mRNA measured at baseline only (not post-treatment) · exploratory high-T-cell-p16 tertile (T3; n≈10/arm): P1NP +34% (p=0.035) and CTx −11% (p=0.049) at **2 weeks** post-dosing; radius BMD +2.7% (p=0.004) at **20 weeks** · NCT04313634 · the first placebo-controlled D+Q clinical bone trial; established the need for senescent-burden stratification in trial design (added 2026-05-23 via [[bone]] verifier pass; timing-split corrected 2026-05-23 via [[osteoporosis]] verifier pass; schedule/design/SASP corrected 2026-06-12 via Farr 2024 PDF read)
[^baker2011]: doi:10.1038/nature10600 · in-vivo (mouse) · INK-ATTAC transgenic; p16+ cell genetic clearance · model: BubR1 progeroid mice · proof-of-principle for senescent-cell clearance benefit. Note: green OA but DOI lookup has failed; full PDF unverified — `#gap/no-fulltext-access`
[^baker2016]: doi:10.1038/nature16932 · in-vivo (mouse) · INK-ATTAC; **naturally-aged mice** · 27% (mixed bg) / 24% (C57BL/6) median lifespan extension from p16+ cell clearance (range 17–35% by sex); tissue-selective · per [[p21]] verification round — values directly read from PDF
[^klier2025]: doi:10.1056/EVIDoa2400009 · Klier S et al. (UNITY Biotechnology) · *NEJM Evidence* 2025 May;4(5):EVIDoa2400009 · Phase 2 randomized sham-controlled · n=65 (UBX1325 32, sham 33) DME patients with prior suboptimal anti-VEGF response · single 10 µg intravitreal injection vs sham; 48-week follow-up · BCVA Δ at week 48: UBX1325 − sham +5.6 ETDRS letters (95% CI −1.5 to +12.7) · 5 vs 4 Grade ≥3 TEAEs UBX1325 vs sham; no apparent between-group differences in vital signs, ECG, or routine chemistries · NCT04857996 · UBX1325/foselutoclax is a BCL-xL-selective small-molecule senolytic; local intravitreal delivery sidesteps systemic platelet toxicity. **Verifier note:** abstract-level extraction; full-text not yet end-to-end verified.
[^zhang2026]: doi:10.1038/s41514-026-00355-z · Zhang W, Song S et al. · *NPJ Aging* 2026 Mar 10 · review · model: literature synthesis · catalogues three next-generation senotherapy strategies — (1) immune-based senolysis (CAR-T uPAR, GD3-blocking, ferroptosis sensitization); (2) tissue-precision PROTACs (VHL, CRBN E3-ligase recruiters degrading BCL-xL in nucleated cells but sparing platelets); (3) microbiome-epigenetic interplay (SCFAs/butyrate modulating drug transporters + SASP) · review-level claims; not a primary-source experiment.
[^ji2026]: doi:10.1177/17588359261424668 · Ji J, Crespi CM, Yee L, Zekster YA, Al-Saleem A, Petersen L, Lee C, Son N, Smith C, Evans T, Tchkonia T, Kirkland JL, Kuchel GA, Cohen HJ, Sedrak MS · *Ther Adv Med Oncol* 2026 Mar 11;18:17588359261424668 · TROFFi study **rationale and trial design** publication (not yet results) · Phase 2 multicenter randomized double-blind placebo-controlled trial · planned n=88 postmenopausal early-stage breast cancer survivors with 6MWD <400 m, completed neo/adjuvant chemotherapy within 12 mo · 1:1 randomization to fisetin 20 mg/kg/day d1–3 of 14-day cycle × 4 cycles vs placebo · primary endpoint Δ6MWD baseline-to-end-of-treatment · NCT05595499 · status: recruiting as of 2026-05.
[^freizus2025senolytic]: [[studies/freizus-2025-atp6v1b2-persistent-senescence]] · Freizus N, Majewska JM, Ovadya Y et al. (Krizhanovsky lab, Weizmann Institute) · preprint (bioRxiv) · doi:10.1101/2025.11.30.691415 · 2025-12-01 · in-vitro (human + mouse senescent cells) + in-vivo (aging + fibrotic lungs) · abstract-only; not peer-reviewed · csV1B2 (cell-surface ATP6V1B2) marks apoptosis-resistant senescent subset; ABT-737 resistance correlated with csV1B2; altered lysosomal activity and intracellular pH #gap/preprint-not-peer-reviewed
