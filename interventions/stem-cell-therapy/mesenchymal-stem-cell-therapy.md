---
type: intervention
aliases: [MSC therapy, mesenchymal stromal cell therapy, MSC infusion, Lomecel-B, allogeneic MSC therapy, hMSC therapy]
mode: stem-cell-therapy
mechanisms: [paracrine-signaling, immunomodulation, anti-inflammatory]
targets: []
target-hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]"]
target-pathways: []
human-evidence-level: limited
clinical-stage: phase-2
safety-profile: investigational
translation-gap: phase-3-rct-needed
next-experiment: "Phase 3 RCT of allogeneic UC-MSC or BM-MSC in elderly frailty cohort with composite endpoint (DunedinPACE + 6MWT + grip strength) and pre-registered subgroup analysis by inflammation status (CRP/IL-6 baseline tertiles)."
clinical-trials-active: 2
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Golpanian 2017, Tompkins 2017, Caplan 2017, and Galipeau 2018 verified against primary source PDFs. Dominici 2006 (not_oa), Caplan 1991 (not_oa), and Scott 2018 (not_oa) could not be verified against full text; ISCT criteria, original MSC nomenclature, and darvadstrocel ADMIRE-CD remission figures remain unverified against those sources. FDA approval year for remestemcel-L (Ryoncil, December 2024) confirmed via web. R34 recency pass (2026-05-08): added Schiess 2025 Mov Disord (allo-hMSC PD Phase 2 RCT; abstract-verified only) and Kim 2026 Tissue Eng Regen Med review (abstract-verified only). Both additions reflect new MSC clinical data in age-related neurodegenerative indications adjacent to aging frailty; do not change frailty-specific evidence base."
---

# Mesenchymal stem/stromal cell (MSC) therapy

Adoptive intravenous infusion of culture-expanded allogeneic mesenchymal stem/stromal cells — a heterogeneous class of multipotent, immunomodulatory cells originally isolated from bone marrow stroma — as a systemic anti-aging or anti-inflammatory intervention. The most clinically advanced stem-cell-based intervention for aging frailty to date, with multiple completed Phase 1/2 trials and at least two approved indications in non-aging disease (pediatric SR-aGvHD [FDA, December 2024]; Crohn's-related fistular disease [EMA, March 2018]). Mechanism is predominantly paracrine rather than direct engraftment: infused cells home to injury/inflammation sites and secrete a bioactive secretome that modulates the host immune environment and stimulates resident stem cells.

This page covers the intervention entity: clinical development, mechanism, safety, translation gaps, and regulatory landscape. Biology of the MSC cell type lives on [[mesenchymal-stem-cells]] (sibling page, R23a batch).

---

## 1. What are MSCs — ISCT minimal criteria

The International Society for Cell Therapy (ISCT) established minimum criteria for defining multipotent mesenchymal stromal cells in a 2006 consensus position statement [^dominici2006]:

1. **Plastic adherence** under standard culture conditions
2. **Marker expression**: CD105+, CD73+, CD90+ (>95% of cells); CD45−, CD34−, CD14−, CD11b−, CD79α−, CD19−, HLA-DR− (<2% of cells)
3. **Trilineage differentiation potential** in vitro: osteoblasts, adipocytes, chondroblasts

These criteria define the cell-culture product, not the native in-vivo cell. Critically, passage number, donor age, and tissue source can all satisfy the ISCT criteria while producing functionally heterogeneous products — a core translational challenge.

**Terminology note:** The cell type was named "mesenchymal stem cell" by Caplan in 1991 [^caplan1991] based on the observation that bone marrow stroma contains a multipotent progenitor population (originally identified by Friedenstein's colony-forming unit-fibroblast [CFU-F] assays in the 1970s). Caplan himself subsequently proposed renaming these cells **"Medicinal Signaling Cells" (MSCs)** to better reflect their paracrine-dominant therapeutic mechanism [^caplan2017]. The "stem cell" terminology persists in clinical and regulatory contexts despite widespread acknowledgment that engraftment and direct differentiation account for very little of the observed therapeutic effect.

**Three clinically used tissue sources:**

| Source | Abbreviation | Notes |
|---|---|---|
| Bone marrow | BM-MSC | Classical source; Lomecel-B is BM-MSC |
| Adipose tissue | AD-MSC | Higher yield; Alofisel/darvadstrocel is AD-MSC |
| Umbilical cord (Wharton's jelly) | UC-MSC | Neonatal source; higher proliferation rate, lower senescence load than adult-donor sources |

---

## 2. Mechanism — paracrine secretome, not engraftment

**Long-term engraftment after IV infusion is negligible.** Infused MSCs are largely cleared from the circulation within hours; pulmonary first-pass trapping is a recognized phenomenon for IV-delivered cells (see §5 Caveats). Therapeutic effects therefore cannot be explained by structural integration into tissues.

The dominant mechanistic model is paracrine secretome-mediated host modulation [^galipeau2018]:

| Mediator | Class | Primary action |
|---|---|---|
| TSG-6 (TNF-stimulated gene-6) | Anti-inflammatory protein | Suppresses NF-κB in macrophages; reduces pro-inflammatory cytokine cascade |
| IDO (indoleamine 2,3-dioxygenase) | Enzyme | Depletes tryptophan → suppresses T-cell proliferation |
| PGE2 (prostaglandin E2) | Lipid mediator | Promotes M1→M2 macrophage polarization shift; reduces TNF-α, IL-1β |
| TGF-β, IL-10 | Cytokines | Regulatory T-cell (Treg) expansion; tolerance induction |
| HGF, VEGF | Growth factors | Trophic support of resident stem/progenitor compartments |
| Extracellular vesicles / exosomes | Nanoparticles | Packaging of cargo (miRNAs, proteins) that reaches distant tissues; increasingly considered as functional effectors |

**Net aging-relevant effect:** reduction of chronic low-grade inflammation ([[chronic-inflammation]]), partial restoration of impaired intercellular communication networks ([[altered-intercellular-communication]]), and indirect support of depleted stem-cell compartments via secretome trophic signaling ([[stem-cell-exhaustion]]). #gap/no-mechanism — the exact set of secreted factors responsible for clinical benefit in aging frailty is unknown; multi-pathway nature makes single-target attribution difficult.

---

## 3. Aging frailty trial program — Lomecel-B (Longeveron)

The most extensive aging-frailty-specific trial program is the **CRATUS series** from the Miller School of Medicine (University of Miami) and Longeveron Inc., using their allogeneic bone marrow-derived MSC product **Lomecel-B** (formerly LMSCs, ischemia-tolerant MSCs [itMSCs]).

### CRATUS Phase 1 (Golpanian 2017)

Dose-escalation open-label Phase 1 safety study; n=15 frail older adults (mean age 78.4 ± 4.7 years; 2:1 male:female; all White non-Hispanic) receiving 20, 100, or 200 million allogeneic BM-MSCs IV [^golpanian2017].

- No treatment-related serious adverse events at 1 month or during 12-month follow-up; one death at 258 days in the 200M group, adjudicated unrelated to treatment; one patient in the 20M group developed mild-to-moderate donor-specific antibodies (cPRA 26%), no others
- 6-minute walk test (6MWT) improved in all dose groups combined at 3 months (+22.6 m, p=.02) and 6 months (+39.3 m, p=.001); the 100M group showed the largest gain at 6 months (+76.6 m, p=.0005); the 200M group did not show a statistically significant individual increase
- Serum TNF-α decreased significantly at 6 months in the 100M group (p=.0001) and 200M group (p=.0001), but not in the 20M group (p=.09)
- 100M dose identified as optimal across parameters
- #gap/needs-replication — n=15, non-randomized, non-blinded, no placebo control

### CRATUS Phase 2 (Tompkins 2017)

Phase 2 randomized, double-blind, placebo-controlled; n=30 frail older adults (mean age 75.5 ± 7.3; n=10/group: 100M cells, 200M cells, placebo) [^tompkins2017].

- No therapy-related treatment-emergent serious adverse events (TE-SAEs) at 1 month; no cumulative treatment-related SAEs throughout study
- 100M dose group: 6MWT improved from 345.9 to 410.7 m at 6 months (p=.011); SPPB score improved (p=.031); FEV1 improved (p=.025); serum TNF-α decreased (p=.031)
- 200M dose group: no significant improvement in 6MWT (p=.263), SPPB (p=.812), or serum TNF-α (p=.129); only immunological improvements (CD69 early T-cell activation p=.004; CD8 T-cells p=.022)
- B-cell intracellular TNF-α decreased in both 100M (p<.0001) and 200M (p=.002) groups compared to placebo
- Authors note the inter-group difference in 6MWT would require ~30 patients/group to achieve adequate power — the trial was underpowered for between-group efficacy comparisons
- Inverse dose-response (100M > 200M) confirmed; mechanism unknown #gap/dose-response-unclear

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — immunomodulatory mechanism is human-cell-based by design |
| Phenotype conserved in humans? | yes — human frailty cohort; no model-organism extrapolation required |
| Replicated in humans? | in-progress — HERA Phase 2b underway (NCT02982915 completed; results pending full publication) |

### HERA Phase 2b (NCT02982915 — completed, full publication pending)

HERA (Lomecel-B on Vaccine-Specific Antibody-Response in Subjects With Aging Frailty): randomized, double-blind, placebo-controlled; primary endpoint shifts to vaccine (influenza) immune response — a surrogate for immune system competence in frailty. Phase 2b scale. Trial completed per ClinicalTrials.gov; full primary-outcome publication not yet identified in literature search as of 2026-05-06. #gap/needs-replication — awaiting publication.

### CLEARMIND Phase 2a (NCT05233774 — completed)

Lomecel-B in mild Alzheimer's disease; n not yet published. Overlapping with aging biology via neuroinflammation mechanism. Completed per ClinicalTrials.gov.

---

## 4. Other aging-relevant clinical applications

### Pediatric steroid-refractory acute GvHD — Remestemcel-L (Ryoncil)

The FDA approved Remestemcel-L (Mesoblast; brand name Ryoncil) in December 2024 for steroid-refractory acute graft-versus-host disease (SR-aGvHD) in pediatric patients — the first MSC product approved by the FDA for any indication. Mechanism: the same immunomodulatory secretome (IDO, PGE2, TGF-β) that suppresses T-cell alloreactivity in GvHD is biologically identical to the anti-[[chronic-inflammation]] mechanisms proposed for aging frailty. The GvHD approval provides regulatory precedent and safety data for allogeneic MSC IV infusion. Note: Remestemcel-L (Prochymal/Mesoblast) had previously received conditional approval in Canada and New Zealand for pediatric GvHD as early as 2012 [^galipeau2018] before the US approval.

### Crohn's-related fistulae — Darvadstrocel (Alofisel, EU)

Alofisel (darvadstrocel; TiGenix/Takeda), an adipose-derived allogeneic MSC product, received EMA approval in March 2018 for treatment-refractory enterocutaneous fistular disease in Crohn's disease patients (described in Galipeau 2018 [^galipeau2018] as "Crohn's-related enterocutaneous fistular disease"; sometimes referenced as perianal fistulae in clinical literature). The pivotal ADMIRE-CD Phase 3 trial (NCT01541579) used 120M cells intralesionally and showed combined remission rates at 24 weeks significantly superior to placebo; >50% maintained remission at 52 weeks [^scott2018]. #gap/no-fulltext-access — precise ADMIRE-CD remission percentages are from scott2018 (closed-access); the trial success is confirmed by Galipeau 2018. Local injection (not systemic). Demonstrates regulatory approvability of an allogeneic MSC product in EU; supports product-characterization benchmarks used in aging trials.

### Osteoarthritis and cardiovascular disease

Multiple Phase 2 trials in knee osteoarthritis and ischemic cardiomyopathy have used MSC products with mixed results. The signal in cardiovascular disease (particularly the earlier Hare/Longeveron Miami trials from which CRATUS evolved) suggested MSCs improved exercise capacity and inflammatory markers in patients with heart failure from various etiologies. These data informed the frailty hypothesis — frailty was reframed as a condition sharing mechanistic features (inflammaging, depleted progenitors) with heart failure.

### Parkinson's disease — Schiess 2025 Phase 2 RCT

Schiess et al. 2025 reported a Phase 2 randomized placebo-controlled trial of allogeneic bone-marrow-derived hMSCs in mild-to-moderate PD patients [^schiess2025]. n=45 randomized between (1) three allo-hMSC infusions (10×10⁶ cells/kg per dose), (2) one placebo followed by two allo-hMSC infusions, or (3) three placebo infusions, at 18-week intervals; 88-week follow-up. Bayesian primary analysis: the three-infusion arm achieved a higher proportion of subjects with ≥5-point improvement in OFF-medication MDS-UPDRS-III at week 62 vs placebo (mean difference 5.0%, posterior probability 93.7%); absolute MDS-UPDRS-III improvement was 16.9 points in the three-infusion arm vs 14.6 points in the placebo arm. Counterintuitively, the two-infusion arm performed worse than placebo (MD −62.4%, PP ≥99.9%), highlighting product batch-to-batch variability as a limiting factor. AEs were mild and transient. The authors call for functional potency assays as release criteria — directly echoing the Galipeau 2018 critique. While PD is not aging frailty, this is the most rigorous MSC RCT in an age-related neurodegenerative disease published since CRATUS Phase 2; the dose-response anomaly (two-infusion < placebo) reinforces the product-heterogeneity gap. #gap/contradictory-evidence (within-trial dose anomaly) #gap/needs-replication (single-center)

### Mesenchymal stem cell therapy in Alzheimer's disease — review summary

A 2026 systematic review of MSC clinical trials in AD analyzed 17 studies (4 Phase 1, 9 Phase 1/2, 3 Phase 2, 1 pilot) with 5 published outcome reports across 7 trials [^kim2026review]. Cell sources varied (allogeneic UCB 29.4%, autologous AD 23.5%, allogeneic UC 17.6%, allogeneic BM 17.6%); IV infusion was most common (70.6%). All reports affirmed safety. Lomecel-B (Longeveron's BM-MSC product) showed meaningful improvement in AD pathophysiology or cognitive function in 2 reports; NEUROSTEM-AD (UCB-MSCs) and AstroStem (adipose MSCs) failed to demonstrate statistical efficacy. The review concludes that MSC therapy is feasible and safe in AD but efficacy is unproven due to small samples and product variation. This aligns with the broader MSC translational picture: safety is established, efficacy signals are present but underpowered, and product non-standardization is the dominant gap. #gap/needs-replication

---

## 5. Caveats and product heterogeneity

### Pulmonary first-pass trapping

After IV infusion, a substantial fraction of MSCs lodge in pulmonary capillaries within the first hours. This is well documented in animal models and accounts for the brevity of circulating MSC half-life. In clinical practice, the acute pulmonary events reported in some trials (transient hypoxia, fever) may partially reflect this trapping. The therapeutic mechanism must operate either (a) from the lung as a transient depot secreting systemically-active factors, or (b) via very small numbers of cells that eventually reach systemic tissues. #gap/no-mechanism

### Donor and passage variability

MSC products are heterogeneous in ways not captured by ISCT criteria [^galipeau2018]:
- **Donor age and health** alter the secretome profile and immunomodulatory potency
- **Passage number**: late-passage MSCs develop replicative senescence, lose potency, and may secrete SASP-like factors
- **Tissue source** (BM vs AD vs UC) affects cytokine profiles, immune evasion capacity, and differentiation bias
- **Manufacturing scale-up**: freeze-thaw cycles reduce viability; fresh vs thawed products differ in potency

No head-to-head trial has compared sources or passages in aging frailty. #gap/contradictory-evidence — Different trials use different products; cross-study comparisons are unreliable.

### Risk of immune rejection

Despite "immune privilege" claims, allogeneic MSCs do not fully evade the adaptive immune system. HLA mismatch can drive immune sensitization after repeated exposures. CRATUS trials showed no immune rejection at 6 months for single-dose administration; long-term repeated dosing safety data are absent. #gap/long-term-unknown

---

## 6. Extrapolation and evidence quality

MSC frailty trials are conducted directly in humans, so the extrapolation question does not apply in the standard model-organism sense. The relevant gaps are:

| Dimension | Status |
|---|---|
| Mechanism validated in humans? | partial — secretome and immunomodulatory activity confirmed in human cell assays; causal attribution in vivo relies on correlative biomarker data |
| Efficacy replicated? | in-progress — CRATUS Phase 2 positive but underpowered; HERA and CLEARMIND published results pending as of 2026-05-06 |
| Safety established long-term? | no — longest follow-up in any single aging trial is ~6–12 months; no chronic-dosing safety data |

---

## 7. Limitations and gaps

- **No Phase 3 RCT for aging frailty.** All positive frailty signals come from Phase 1/2 studies with n=15–30. Underpowered for meaningful efficacy inference. #gap/needs-replication
- **Biomarker endpoint ambiguity.** TNF-α and 6MWT are used as proxies but neither is a validated surrogate for aging-related mortality or healthspan. Adoption of DunedinPACE, GrimAge, or standardized composite frailty indices would improve interpretability of future trials. #gap/dose-response-unclear
- **Product non-standardization.** ISCT criteria are insufficient to ensure batch-to-batch consistency for a paracrine-mediated therapeutic. No potency assay is widely accepted as a release criterion. #gap/unsourced — regulatory guidance on MSC potency assays has evolved but is not yet standardized
- **Mechanism not resolved.** Which secreted factors drive benefit, and how their circulating concentrations relate to dose, is unknown. This makes rational dose-finding impossible. #gap/no-mechanism
- **Long-term safety.** No data beyond 12 months for any aging indication. Theoretical risks include immune sensitization (repeated allogeneic dosing), pulmonary sequelae (repeated IV administration), and unlikely but non-zero neoplastic risk. #gap/long-term-unknown
- **Exosome/EV alternatives.** If the mechanism is entirely paracrine, cell-free MSC-derived extracellular vesicles (EVs/exosomes) could deliver the therapeutic payload without the risks of live-cell administration. This alternative is in early preclinical development and is not yet a clinical entity. #gap/needs-replication

---

## Related interventions and concepts

- [[hematopoietic-stem-cell-transplantation]] — sibling intervention page (R23a); allogeneic HSC transplant for aging; mechanistically distinct
- [[ipsc-derived-cell-therapy]] — sibling; induced pluripotent stem cell-derived products; more potent cell-identity plasticity but greater safety unknowns
- [[in-vivo-partial-reprogramming-therapy]] — distinct modality targeting epigenetic age-reversal without cell delivery
- [[plasma-exchange]] — blood-product intervention targeting systemic environment; shares [[altered-intercellular-communication]] target hallmark
- [[senolytics]] — pharmacological; targets cellular senescence; overlapping [[chronic-inflammation]] target

---

## Footnotes

[^dominici2006]: doi:10.1080/14653240600855905 · Dominici M et al. · Cytotherapy 2006;8(4):315–317 · review/consensus · ISCT position statement defining minimal criteria for MSCs (plastic adherence, surface markers, trilineage differentiation) · n=— · archive: not_oa (closed access)

[^caplan1991]: doi:10.1002/jor.1100090504 · Caplan AI · J Orthop Res 1991;9(5):641–650 · review · original "mesenchymal stem cell" nomenclature; proposed BM stroma contains multipotent osteogenic progenitors · n=— · archive: not_oa (closed access) · 4959 citations

[^caplan2017]: doi:10.1002/sctm.17-0051 · Caplan AI · Stem Cells Transl Med 2017;6(6):1445–1451 · review/perspective · argues MSCs should be renamed "Medicinal Signaling Cells" to reflect paracrine mechanism; proposes most/all MSCs are derived from pericytes; states infused MSCs "rarely or never differentiate into the tissue at that site" but secrete bioactive immunomodulatory and trophic factors; Caplan acknowledges he coined the "mesenchymal stem cell" term in 1991 and now retracts it · n=— · archive: gold OA, downloaded

[^galipeau2018]: doi:10.1016/j.stem.2018.05.004 · Galipeau J, Sensébé L · Cell Stem Cell 2018;22(6):824–833 · review/perspective · covers clinical trial failures and successes; identifies immune compatibility mismatches (syngeneic animal studies vs allogeneic human trials), fitness of cryobanked thawed cells, and dosing scale differences (50 mg/kg in mice vs 1–2 million cells/kg in humans) as root causes of pre-clinical to clinical translational failure; lung first-pass trapping established as mechanism; product heterogeneity and lack of accepted potency assays identified as major obstacles; notes EU approval of Alofisel (darvadstrocel) in March 2018 for enterocutaneous fistular disease in Crohn's · n=— · archive: bronze OA, downloaded · 1696 citations

[^golpanian2017]: doi:10.1093/gerona/glx056 · Golpanian S, DiFede DL, Khan A et al. · J Gerontol A Biol Sci Med Sci 2017;72(11):1505–1512 · phase-1 dose-escalation · n=15 (aging frailty; mean age 78.4 ± 4.7 years; 5/group: 20M, 100M, 200M BM-MSCs; all White non-Hispanic) · no treatment-related SAEs at 1 mo or 12 mo; one unrelated death at 258 days (200M group); 6MWT improved in all groups combined at 6 mo (+39.3 m, p=.001); 100M group largest gain (+76.6 m, p=.0005); serum TNF-α decreased in 100M (p=.0001) and 200M (p=.0001) groups but not 20M (p=.09) · model: human · archive: bronze OA, downloaded

[^tompkins2017]: doi:10.1093/gerona/glx137 · Tompkins BA, DiFede DL, Khan A et al. · J Gerontol A Biol Sci Med Sci 2017;72(11):1513–1521 · phase-2 rct · n=30 (mean age 75.5 ± 7.3; n=10/group: 100M, 200M BM-MSCs, placebo; randomized 1:1:1 double-blind) · no TE-SAEs at 1 mo; 100M group: 6MWT improved (p=.011), SPPB improved (p=.031), serum TNF-α decreased (p=.031); 200M group: no 6MWT or SPPB improvement, no serum TNF-α reduction; B-cell intracellular TNF-α decreased in both 100M (p<.0001) and 200M (p=.002) vs placebo; study underpowered for between-group efficacy comparisons (requires ~30/group for 6MWT) · model: human · archive: bronze OA, downloaded

[^scott2018]: doi:10.1007/s40259-018-0311-4 · Scott LJ · BioDrugs 2018;32(5):383–394 · review · darvadstrocel (Alofisel, AD-MSC) in EU-approved complex perianal fistula indication; ADMIRE-CD Phase 3 combined remission ~50% vs placebo at 24 wk; >50% remission at 52 wk · archive: not_oa (closed access)

[^schiess2025]: doi:10.1002/mds.70028 · Schiess MC, Suescun J, Martinez-Lemus JD, Green C, Thomas TS, Shahnawaz M, Tharp E, Satani NB, Saltarrelli JG, Adams C, Doursout MF, Thyne V, Abuamouneh R, Rodarte EM, Savitz SI, Ellmore TM · Mov Disord 2025;40(12):2688–2699 · Phase 2 randomized placebo-controlled (NCT04421456 University of Texas/UTHealth Houston) · n=45 mild-to-moderate Parkinson's disease patients; three allo-hMSC infusions (10×10⁶ cells/kg) vs one-then-two-MSC vs three-placebo at 18-wk intervals; 88-wk follow-up · Bayesian primary endpoint at wk 62: three-infusion arm vs placebo posterior probability 93.7% for ≥5-point MDS-UPDRS-III OFF improvement (MD 5.0%); absolute three-infusion-arm improvement 16.9 pts vs placebo 14.6 pts; two-infusion arm performed worse than placebo (MD −62.4%, PP ≥99.9%) suggesting batch-to-batch product variability; AEs mild and transient; authors recommend functional potency assays as release criteria · model: human · archive: not_oa — abstract-verified only (PMID 40891094)

[^kim2026review]: doi:10.1007/s13770-025-00782-1 · Kim AL, Lee WK, Kwon S, Han I, Choi BH · Tissue Eng Regen Med 2026;23(3):343–365 · systematic review of MSC clinical trials in Alzheimer's disease through June 2025 · 17 trials (4 Phase 1, 9 Phase 1/2, 3 Phase 2, 1 pilot); 5 published outcome reports across 7 trials; cell sources: allogeneic UCB 29.4%, autologous AD 23.5%, allogeneic UC 17.6%, allogeneic BM 17.6%; IV 70.6%, ICV via Ommaya 17.6%, stereotactic brain injection 11.8%; safety established; Lomecel-B reports showed meaningful AD-pathophysiology / cognitive improvement; NEUROSTEM-AD and AstroStem failed to demonstrate statistical efficacy; conclusion: feasible/safe but efficacy unproven due to product variation and small samples · archive: not_oa — abstract-verified only (PMID 41533329)
