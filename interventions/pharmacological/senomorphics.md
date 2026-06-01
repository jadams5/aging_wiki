---
type: intervention
aliases: [senomorphic drugs, senomorphic agents, SASP suppressors, senotherapeutics-suppressive]
mode: pharmacological
mechanisms: [sasp-suppression, mtorc1-inhibition, jak-stat-inhibition, nf-kb-inhibition, bet-inhibition, il1-neutralization, ampk-activation]
target-hallmarks: ["[[altered-intercellular-communication]]", "[[cellular-senescence]]", "[[chronic-inflammation]]"]
target-pathways: ["[[mtor]]", "[[jak-stat-pathway]]", "[[nf-kb]]", "[[ampk]]"]
human-evidence-level: limited
clinical-stage: phase-2-trials
safety-profile: investigational
translation-gap: human-evidence-strong
next-experiment: "Targeted SASP-modulator trial (low-dose mTORC1 inhibitor or JAK1-selective) in frail elderly with composite frailty/MACE endpoint; class includes CANTOS-positive but inflammation-only data."
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Herranz 2015 (ncb3225) and Xu 2015 (pnas.1515386112) verified against local PDFs; CANTOS/Ridker 2017 (NEJMoa1707914) verified against local PDF. Laberge 2015 (ncb3195), Tasdemir 2016 (cd-16-0217), Salminen 2012 (cellsig.2011.12.006) not verifiable — download failed (no OA URL); Lagoumtzi 2021 not_oa. Claims derived from these four sources remain unverified and tagged #gap/no-fulltext-access. R34 recency adds (2026-05-08): Yang 2024 (10.7150/ijbs.96489) abstract-verified via PubMed — ruxolitinib senomorphic therapy in septic cardiomyopathy mouse models, low-dose Rux comparable to ABT263 senolytic; Zhao 2025 (10.1002/advs.202410795) abstract-verified — IL-6R/JAK2 axis targets p21+ senescent chondrocytes in OA; Hao 2025 (10.1002/jsp2.70044) abstract-verified — ruxolitinib delays NPC senescence in rat IVD."
---

# Senomorphics

A class of pharmacological agents that **suppress the senescence-associated secretory phenotype (SASP) without killing senescent cells**, as distinguished from [[interventions/pharmacological/senolytics|senolytics]] (which selectively kill senescent cells). The senomorphic concept sits within the broader **senotherapeutic** umbrella [^lagoumtzi2021]. The mechanistic rationale: the SASP is the dominant pro-aging output of senescent cells — chronic SASP secretion drives [[chronic-inflammation]], tissue dysfunction, and paracrine propagation of senescence in neighboring cells. Where senolytics are contraindicated (cell-type sensitivity, systemic toxicity, or contexts where the senescent cells themselves perform needed structural roles), senomorphic suppression of secretion may capture much of the longevity benefit without cell clearance.

This page covers senomorphic agents **as a class**. Drug-specific data live on compound pages in `molecules/compounds/`. See [[interventions/pharmacological/senolytics]] for the complementary clearance-based strategy.

## Definitional context: senomorphic vs senolytic vs senotherapeutic

The terminology overlaps with the senolytics page; reproduced here for standalone readability:

| Term | Meaning |
|---|---|
| **Senolytic** | Selectively kills senescent cells (induces apoptosis or other death) |
| **Senomorphic** | Suppresses SASP secretion without killing senescent cells |
| **Senotherapeutic** | Umbrella term covering both senolytics and senomorphics |
| **Geroprotector** | Broader term: any agent that delays aging hallmarks (includes both classes) |

An important nuance: some agents have both senomorphic and senolytic properties depending on dose and cell type (e.g., [[fisetin]], [[rapamycin]] at high doses, [[quercetin]]). Classification should reflect the primary therapeutic mechanism at the dose proposed.

## Mechanistic rationale: why target SASP rather than the cell?

Senescent cells persist in tissues because they are resistant to their own pro-apoptotic SASP environment — they upregulate Senescent-Cell Anti-Apoptotic Pathways (SCAPs). Killing them (senolytics) requires disrupting SCAPs, which are highly cell-type-specific. Suppressing the SASP instead operates upstream of cell survival decisions, is generally less cell-type-restricted, and leverages existing drug classes with established clinical safety profiles.

Key SASP signaling nodes that senomorphics target [^salminen2012]:

- **mTORC1 → 4E-BP1** — translational control of SASP cytokine mRNAs; rapamycin-sensitive
- **NF-κB (via IKKβ)** — transcriptional master regulator of inflammatory gene programs in senescent cells
- **JAK/STAT3** — transduces IL-6 / IL-1β receptor signaling; amplifies and maintains SASP
- **BRD4 / super-enhancers** — chromatin-level enabling of NF-κB SASP programs
- **IL-1α → IL-1R1** — autocrine amplification loop: IL-1α (released by senescent cells) activates NF-κB → more SASP; mTOR promotes IL-1α translation

## Major senomorphic agent classes

### 1. mTORC1 inhibitors

**Mechanism:** mTORC1 phosphorylates 4E-BP1, releasing eIF4E-mediated cap-dependent translation of SASP factor mRNAs. Two parallel arms:

- **Laberge et al. 2015 (*Nat Cell Biol*)** [^laberge2015]: mTORC1 promotes IL-1α translation; IL-1α activates the IL-1R1/NF-κB → SASP loop. Rapamycin disrupts this axis, reducing SASP protein output without inducing senescent cell death.
- **Herranz et al. 2015 (*Nat Cell Biol*)** [^herranz2015]: mTORC1 controls translation of MAPKAPK2 (MK2) via 4EBP1. During senescence, MK2 phosphorylates the mRNA-destabilizing protein ZFP36L1, inactivating it; this stabilizes AU-rich-element-containing SASP mRNAs. Rapamycin reduces MAPKAPK2 protein (~80% de novo synthesis reduction) and thereby allows ZFP36L1 to degrade SASP transcripts. This arm is distinct from the IL-1α translational arm described by Laberge et al.

**Important correction (per [[sasp]] verifier):** An earlier claim attributed the mTOR-SASP link to Freund 2010; the correct primary sources are Laberge 2015 and Herranz 2015. The Freund 2010 paper does not contain this claim. Any page citing "Freund 2010" for the mTOR-SASP connection should be updated to cite Laberge/Herranz 2015.

**Agents:**

| Agent | Notes | Status |
|---|---|---|
| [[rapamycin]] (sirolimus) | Allosteric mTORC1 inhibitor; verified compound page; reduces SASP in vitro and in vivo #gap/needs-human-replication for SASP endpoint specifically | Preclinical (SASP); Phase 2 for aging indications |
| Everolimus | Rapamycin analogue; similar mechanism | Preclinical |
| Torin 1 / Torin 2 | Active-site mTOR inhibitors (hit both mTORC1 and mTORC2); stronger SASP suppression in vitro; no clinical senomorphic data | Preclinical only |

**Evidence grade for mTOR → SASP:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — mTOR/4E-BP1 axis is highly conserved |
| Phenotype conserved in humans? | partial — in-vitro human cell data; no human SASP biomarker RCT yet |
| Replicated in humans? | no (SASP-specific endpoint) #gap/needs-human-replication |

### 2. JAK/STAT inhibitors

**Mechanism:** Senescent cells secrete IL-6, IL-8, and other cytokines that signal through JAK1/2-coupled receptors, activating STAT3, which feeds back to drive further SASP gene expression. JAK inhibitors block this paracrine and autocrine amplification loop.

Xu et al. 2015 (*PNAS*) [^xu2015] demonstrated that:
- Senescent human preadipocytes and HUVECs accumulate in adipose tissue with aging and develop a JAK/STAT-driven SASP; phosphorylated JAK1 and JAK2 are elevated in aged adipose tissue
- A pan-JAK inhibitor (JAK inhibitor 1, 0.6 µM, 72 h) suppressed key SASP mRNAs (IL-6, IL-8, MCP-1) by up to 60% in irradiation-induced senescent preadipocytes; ruxolitinib (INCB18424, JAK1/2-selective) and momelotinib (CYT387, JAK1/2-selective) showed similar SASP suppression — tofacitinib was not tested in this study
- In 24-month-old C57BL/6 male mice (n=8–9/group), 10 weeks of oral ruxolitinib (60 mg/kg/day) reduced circulating inflammatory cytokines and improved physical function: rearing activity, ambulation, hanging endurance, grip strength, and RotaRod coordination all improved significantly vs vehicle-treated aged controls
- #gap/needs-human-replication — the frailty-improvement signal is promising but requires human RCT validation

**Evidence grade for JAK → SASP:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — JAK/STAT3 is highly conserved; ruxolitinib is FDA-approved in humans |
| Phenotype conserved in humans? | unknown — aged-mouse physical function vs human frailty may differ |
| Replicated in humans? | in-progress — aging-specific trials underway #gap/needs-replication |

**Agents:**

| Agent | Target | FDA status | Senomorphic evidence |
|---|---|---|---|
| **Ruxolitinib** (Jakafi) | JAK1 / JAK2 | Approved: myelofibrosis, polycythemia vera | Xu 2015 preclinical; aging trials in progress |
| **Tofacitinib** (Xeljanz) | JAK1 / JAK3 | Approved: RA, PsA, UC | Xu 2015 preclinical; no dedicated aging SASP trial |
| Baricitinib | JAK1 / JAK2 | Approved: RA, COVID-19 | Preclinical senomorphic activity [^lagoumtzi2021]; no dedicated trial |
| Itacitinib | JAK1 selective | Investigational | Preclinical only |

The JAK inhibitor class is particularly attractive for senomorphic repurposing: established clinical safety profile (years of post-market data in RA), oral bioavailability, and well-understood immunosuppressive liability (infection risk at anti-inflammatory doses must be monitored).

**Recent preclinical extensions (2024–2025):** the senomorphic ruxolitinib literature has expanded into multiple disease-specific aging contexts:

- **Septic cardiomyopathy** (Yang et al. 2024, *Int J Biol Sci*) [^yang2024] — ruxolitinib attenuated SASP in vitro (LPS-induced neonatal rat cardiomyocytes) and in two mouse SCM models (LPS-induced and CLP-induced), reduced senescence markers, restored mitochondrial function and reduced ROS, and improved cardiac function via JAK2/STAT3 inhibition. **Low-dose ruxolitinib showed efficacy comparable to ABT263 (navitoclax) senolytic** in mitigating SCM — a direct head-to-head senomorphic-vs-senolytic preclinical comparison favoring repurposable JAK inhibitors at lower doses.
- **Osteoarthritis** (Zhao et al. 2025, *Adv Sci*) [^zhao2025] — IL-6R/JAK2 inhibition selectively targets p21-positive senescent chondrocytes in OA cartilage; intra-articular IL-6R protein or gp130 (Y757F) activation accelerates OA progression, while IL-6R/JAK2 knockout alleviates it.
- **Intervertebral disc degeneration** (Hao et al. 2025, *JOR Spine*) [^hao2025] — ruxolitinib delayed nucleus pulposus cell senescence in rat IVDs, reduced p16/p21/p53 and SASP cytokines (IL-1β, IL-6, TNF-α, MMP-3, MMP-13), and rescued aggrecan/Col II expression; siRNA-JAK2 knockdown produced equivalent rescue.

These extensions converge on JAK1/2 inhibition as a **broadly applicable senomorphic mechanism across cell types**, consistent with the JAK/STAT axis being a central paracrine SASP amplifier rather than a cell-type-specific pathway. None of these studies tested human aging endpoints — clinical translation remains stalled at the model-organism stage. #gap/needs-human-replication

### 3. NF-κB / IKK inhibitors

**Mechanism:** NF-κB is the transcriptional master regulator of the SASP gene program. IKKβ phosphorylates IκB, releasing active NF-κB to the nucleus. Inhibiting IKKβ or NF-κB directly suppresses SASP transcription [^salminen2012]. #gap/unsourced for cell-type selectivity of IKK inhibition in senescent vs non-senescent cells — a key translational concern.

**Agents and status:**

| Agent | Mechanism | Status | Limitation |
|---|---|---|---|
| **Aspirin / salicylates** | IKKβ inhibition (weak); NF-κB modulation | OTC; observational longevity associations | Low potency; liver toxicity at high doses |
| **Curcumin** | Broad polyphenol; NF-κB inhibition among multiple targets | Supplement; preclinical aging data | Poor bioavailability; mechanism pleiotropic |
| **Sulfasalazine** | IKK inhibition; also COX-1/2 | FDA-approved (RA, IBD) | Clinical IKKβ-selective inhibitors caused hepatotoxicity in cancer trials; class concern |
| Direct IKKβ inhibitors (PS-1145, BMS-345541) | Selective IKKβ | Preclinical only for aging | Liver toxicity halted oncology development; senomorphic translation stalled |

**Caution:** Systemic NF-κB inhibition suppresses innate and adaptive immune responses beyond SASP. Therapeutic window between SASP suppression and immunosuppression is unclear. #gap/dose-response-unclear

### 4. BET bromodomain inhibitors (BRD4-targeting)

**Mechanism:** BRD4 localizes to super-enhancers that co-operate with NF-κB to drive SASP gene transcription. Tasdemir et al. 2016 (*Cancer Discovery*) [^tasdemir2016] showed that BRD4 accumulates at newly-formed super-enhancers adjacent to SASP genes upon oncogene-induced senescence (OIS), and that BET bromodomain inhibition (JQ1) disrupts this and reduces SASP gene expression — without inducing cell death, consistent with a senomorphic mechanism. However, the paper also demonstrates that BRD4-driven SASP is required for immune-cell-mediated elimination of pre-cancerous senescent hepatocytes (tumor-suppressive immune surveillance). This dual function means BET inhibition in senescent cells has a cost: blunting the SASP also impairs the tumor-suppressive arm. The senomorphic framing is therefore complicated in cancer-adjacent contexts. Full-text PDF not verified — quantitative details unconfirmed. #gap/no-fulltext-access

**Evidence grade:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — BRD4/super-enhancer architecture is conserved |
| Phenotype conserved in humans? | unknown — no human SASP endpoint data |
| Replicated in humans? | no — aging-application trials not initiated #gap/needs-human-replication |

**Agents:**

| Agent | Status | Notes |
|---|---|---|
| JQ1 | Preclinical tool compound | Not clinically developed; proof-of-concept for BRD4-SASP mechanism |
| OTX-015 (birabresib) | Oncology Phase 1/2 | Being tested in hematologic malignancies; no aging trial |
| Molibresib (GSK525762) | Oncology Phase 1/2 | Similar; no aging trial |

BET inhibitors are primarily being developed as anti-tumor agents (BRD4 drives oncogene expression at super-enhancers). Senomorphic aging applications are preclinical only; dose-limiting toxicities in oncology trials (thrombocytopenia, GI toxicity) will need to be characterized at lower, senomorphic-range doses. #gap/long-term-unknown

### 5. Anti-IL-1β biologics (CANTOS class)

**Mechanism:** IL-1β is a key SASP cytokine — it is processed by the NLRP3 inflammasome and secreted by senescent cells, driving systemic and local inflammation. Neutralizing IL-1β blocks a central SASP effector output and disrupts the IL-1α/IL-1β → NF-κB → SASP amplification loop.

**CANTOS trial (canakinumab, Ridker et al. 2017 *NEJM*)** [^ridker2017] — the most important large-scale anti-SASP/anti-inflammatory clinical outcome trial to date:
- Phase 3 RCT, n=10,061, patients with prior MI and hsCRP ≥2 mg/L
- Canakinumab (anti-IL-1β monoclonal, 150 mg SC every 3 months) vs placebo
- Primary endpoint (MACE): HR 0.85, 95% CI 0.74–0.98, p=0.021 (150 mg dose); this met the prespecified multiplicity-adjusted threshold (p<0.02115). The 300 mg dose gave HR 0.86 (95% CI 0.75–0.99, p=0.031) but did NOT meet its prespecified threshold (p<0.01058).
- Exploratory finding: fatal cancer incidence significantly reduced with canakinumab (all doses combined: fatal cancer incidence rate 0.45 vs 0.64/100 person-years, p<0.001 for trend); lung-cancer-specific outcomes were reported in a companion Lancet Oncology paper (Ridker et al. 2017 Lancet Oncol) — the lung cancer HR ~0.67 figure is NOT from this NEJM paper and should be cited to that companion publication #gap/needs-replication
- **Critical limitation:** increased fatal infection and sepsis (pooled canakinumab 0.31 vs placebo 0.18 events/100 person-years; p=0.02); the paper does not report an HR of 1.31 for fatal infection — that figure appears in ancillary analyses and should not be cited to this paper. Net clinical benefit required careful accounting.
- Canakinumab is not proven to act specifically through senescent-cell SASP suppression; the trial was designed around atherosclerotic inflammation, not aging biology per se. The SASP interpretation is post-hoc and mechanistic.

**Evidence grade for IL-1β blockade → aging outcomes:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IL-1β/NLRP3 is a human pathway; canakinumab is a human antibody |
| Phenotype conserved in humans? | partial — cardiovascular events reduced; longevity/frailty endpoints not tested |
| Replicated in humans? | yes (cardiovascular); no (aging-specific / SASP mechanism) #gap/contradictory-evidence |

**Agents:**

| Agent | Target | Status | Notes |
|---|---|---|---|
| **Canakinumab** (Ilaris) | IL-1β | FDA-approved (CAPS, SJIA, gout); CANTOS outcome data | Best clinical evidence in aging-adjacent outcomes; infection risk |
| Anakinra | IL-1R antagonist (blocks both IL-1α and IL-1β) | FDA-approved (RA, CAPS, NOMID) | Shorter half-life; daily injection; less tested in aging context |
| Rilonacept | IL-1α + IL-1β trap | FDA-approved (CAPS) | Preclinical senomorphic rationale; no large aging trial |

### 6. Metformin (partial senomorphic)

[[metformin]] activates AMPK, which inhibits mTORC1 (via TSC1/2) and also has direct NF-κB suppressive activity. The net effect is mild reduction of some SASP components. However:
- Metformin's SASP suppression is partial and indirect — it is more accurately classified as a **geroprotector with senomorphic properties** than a dedicated senomorphic
- The TAME trial (Targeting Aging with Metformin) is the first large RCT powered to detect aging-endpoint benefits of a geroprotective agent; it does not test SASP as a primary endpoint
- See [[metformin]] compound page for mechanism and trial status #gap/unsourced for SASP-specific metformin human endpoint data

## Comparison: senomorphics vs senolytics

| Dimension | Senolytics | Senomorphics |
|---|---|---|
| **Mechanism** | Kill senescent cells (SCAP disruption) | Suppress SASP secretion; cells persist |
| **Cell-type restriction** | High — SCAPs are cell-type-specific; no single agent covers all populations | Lower — SASP signaling nodes (mTOR, NF-κB, JAK) are more broadly expressed |
| **Dosing schedule** | Intermittent ("hit-and-run") — senescent cells repopulate over weeks | Typically continuous — SASP resumes when drug is removed |
| **Clinical precedent** | Phase 1-2 trials; mostly investigational compounds | Includes FDA-approved drugs (canakinumab, ruxolitinib, tofacitinib) |
| **Largest human trial** | UNITY-OA-101 (Phase 2; failed) | CANTOS (Phase 3, n=10,061; positive cardiovascular endpoint) |
| **Safety profile** | Narrow therapeutic windows; long-term unknown | Repurposing-favorable; primary-indication safety well-characterized; infection risk shared across immunomodulatory agents |
| **Effect on tissue function** | Removes cells — may impair tissue structure in some contexts | Cells retained — tissue architecture preserved |
| **Reversal of senescent phenotype** | Permanent clearance | Suppression while dosed; reversible |

Combination approaches (senolytic + senomorphic) are theoretically synergistic — clear the cells that can be cleared, suppress SASP from those that cannot. No head-to-head combination trial exists yet. #gap/needs-replication

## Clinical evidence status (as of 2026)

| Trial / Study | Agent | Population | Design | Key result |
|---|---|---|---|---|
| CANTOS [^ridker2017] | Canakinumab 150 mg SC q3mo | Prior MI + hsCRP ≥2 mg/L (n=10,061) | Phase 3 RCT | MACE HR 0.85 (95% CI 0.74–0.98, p=0.021); fatal cancer reduced (incidence rate 0.45 vs 0.64/100py, p<0.001 trend); fatal infection/sepsis increased (0.31 vs 0.18/100py, p=0.02) |
| Xu 2015 [^xu2015] | Ruxolitinib 60 mg/kg/day oral | 24-mo-old C57BL/6 male mice (n=8–9/group), 10 weeks | in-vivo | Physical function improved (rearing, ambulation, hanging endurance, grip strength, RotaRod); circulating SASP factors reduced — not yet replicated in humans |
| TAME (ongoing) | Metformin 1500 mg/day | Adults 65–79 without major disease (n~3000) | Phase 3 RCT | Aging composite endpoint; enrolling; primary readout ~2028 |

#gap/needs-human-replication — Senomorphic SASP suppression endpoints (e.g., circulating SASP cytokines, p16+ cell counts, functional aging composites) have not been primary endpoints in any completed human trial. CANTOS is the closest approximation but was not designed as a SASP-suppression trial.

## SENS / hallmark mapping

- **Hallmark targets:** [[cellular-senescence]] (via SASP suppression), [[chronic-inflammation]] (downstream of SASP)
- **SENS category:** closest to [[sens-damage-categories|ApoptoSENS]] (death-resistant cells) — but senomorphics do not remove the cells; they are better framed as a **damage-output containment** strategy, complementary to ApoptoSENS clearance
- **Upstream hallmark linkage:** effective senomorphic suppression secondarily reduces paracrine senescence spread (senescent cells induce senescence in neighbors via SASP) — relevant to [[genomic-instability]] and [[epigenetic-alterations]] propagation

## Limitations and open questions

- **No validated SASP biomarker panel for human trials.** Circulating cytokines (IL-6, IL-8, MMP-3, GDF-15) are used as proxies but lack specificity for senescent-cell-derived SASP vs other inflammatory sources. #gap/needs-replication
- **Immunosuppressive liability.** JAK inhibitors, anti-IL-1β, and NF-κB inhibitors all suppress immune responses beyond SASP. Long-term infection risk at senomorphic-range doses is incompletely characterized. #gap/long-term-unknown
- **Dosing schedule unknown.** Unlike senolytics (which have mechanistic rationale for intermittent dosing), senomorphics likely require continuous exposure. Optimal dose/frequency for aging vs primary indications is unknown. #gap/dose-response-unclear
- **Cell-type-agnostic SASP suppression may carry costs.** Some SASP components contribute to tissue repair (PDGF, VEGF, TGF-β in wound healing); broad SASP suppression could impair these responses. #gap/no-mechanism for net-effect in aged tissue
- **mTOR senomorphic effect vs broader mTOR geroprotection.** Rapamycin extends lifespan in mice through multiple mechanisms beyond SASP suppression ([[mtor]] page); attributing its aging benefits specifically to SASP reduction is difficult without pathway-selective experiments.
- **BET inhibitor aging data is preclinical only.** The BRD4-SASP mechanism is compelling but clinical doses in oncology may differ from those needed for senomorphic activity.
- **Senomorphics vs senolytics comparative efficacy.** No head-to-head human trial. Preclinical data suggest senolytics may reduce systemic SASP more potently than senomorphics in some contexts (by eliminating the secreting cells entirely) — the relative ranking in humans is unknown. #gap/contradictory-evidence

## Cross-references

- [[interventions/pharmacological/senolytics]] — complementary clearance-based strategy (sibling page; verified-partial)
- [[sasp]] — the secretory output that senomorphics target (verified-partial)
- [[cellular-senescence]] — upstream hallmark (stub)
- [[chronic-inflammation]] — downstream phenotype driven by SASP (stub)
- [[rapamycin]] — verified-partial compound page; key mTORC1 senomorphic
- [[metformin]] — verified-partial compound page; partial senomorphic
- [[mtor]] — pathway page; translational control of SASP
- [[nf-kb]] — drafted; transcriptional master regulator of SASP programs
- [[jak-stat-pathway]] — implicit stub; needs seeding
- [[ampk]] — pathway page; metformin upstream target
- [[nlrp3-inflammasome]] — implicit stub; processes IL-1β for SASP secretion

## Footnotes

[^laberge2015]: doi:10.1038/ncb3195 · in-vitro + in-vivo (mouse) · mTORC1 promotes IL-1α translation → NF-κB → SASP loop; rapamycin disrupts · *Nat Cell Biol* 2015 · 17(8):1049–1061 · archive: download failed (no OA PDF URL found in PMC lookup); cannot verify numerics #gap/no-fulltext-access — PDF not recoverable via archive
[^herranz2015]: doi:10.1038/ncb3225 · in-vitro + in-vivo (mouse liver) · mTORC1 → 4EBP1 → MAPKAPK2 translation → MAPKAPK2 phosphorylates/inactivates ZFP36L1 → SASP mRNA stabilization; rapamycin reduces MAPKAPK2 ~80%, allowing ZFP36L1 to degrade SASP transcripts · *Nat Cell Biol* 2015 · 17(9):1205–1217 · model: IMR90 ER:RAS (OIS), BJ and HFFF2 fibroblasts, plus 22-mo mouse liver · archive: PDF locally available at 
[^xu2015]: doi:10.1073/pnas.1515386112 · in-vitro (human senescent preadipocytes + HUVECs) + in-vivo (24-mo C57BL/6 male mice, n=8–9/group, 10 wk ruxolitinib 60 mg/kg/day oral) · pan-JAK inhibitor + ruxolitinib (JAK1/2) suppress SASP up to 60%; ruxolitinib reduces circulating cytokines and improves physical function in aged mice (rearing, ambulation, grip, RotaRod) · *PNAS* 2015 · E6301–E6310 · Xu M, Tchkonia T, Ding H, Ogrodnik M, et al., Kirkland JL · archive: PDF locally available at 
[^ridker2017]: doi:10.1056/NEJMoa1707914 · rct · n=10,061 · canakinumab 50/150/300 mg SC q3mo vs placebo · prior MI + hsCRP ≥2 mg/L · median follow-up 3.7 yr · MACE HR 0.85 (95% CI 0.74–0.98, p=0.021) at 150 mg (met prespecified threshold p<0.02115); 300 mg HR 0.86 (p=0.031, did not meet p<0.01058 threshold); fatal cancer reduced (all doses combined, incidence rate 0.45 vs 0.64/100 person-yr, p<0.001 for trend); fatal infection/sepsis increased in pooled canakinumab vs placebo (0.31 vs 0.18/100 person-yr, p=0.02) · *N Engl J Med* 2017;377:1119–1131 · Ridker PM et al. · archive: **locally available** at 
[^tasdemir2016]: doi:10.1158/2159-8290.cd-16-0217 · in-vitro · BRD4 accumulates at super-enhancers adjacent to SASP genes upon OIS; BET inhibition (JQ1) disrupts this and reduces SASP gene expression; paper also shows BRD4/SASP is required for immune-mediated elimination of senescent cells (tumor-suppressive role) — dual function complicates pure senomorphic framing · *Cancer Discovery* 2016 · Tasdemir N et al. · archive: download failed (no OA PDF URL in PMC lookup) #gap/no-fulltext-access — quantitative SASP reduction figures not verifiable from PDF
[^salminen2012]: doi:10.1016/j.cellsig.2011.12.006 · review · NF-κB as master transcriptional driver of SASP; IKKβ-mediated mechanism; DNA damage and NEMO activation · *Cell Signal* 2012 · Salminen A, Kauppinen A, Kaarniranta K · archive: download failed (no OA PDF URL in PMC lookup; hybrid OA) #gap/no-fulltext-access — review claims not verifiable from PDF
[^lagoumtzi2021]: doi:10.1016/j.freeradbiomed.2021.05.003 · review · survey of natural and synthetic senolytics and senomorphics · *Free Radical Biol Med* 2021 · Lagoumtzi SM, Chondrogianni N · archive: closed-access (not_oa per a local paper archive); PDF unavailable #gap/no-fulltext-access

[^yang2024]: Yang B, Li T, Wang Z, Zhu Y, Niu K, Hu S, Lin Z, Zheng X, Jin X, Shen C · doi:10.7150/ijbs.96489 · *Int J Biol Sci* 2024 Aug 12;20(11):4314–4340 · PMID 39247818 · PMC11379065 · in-vitro + in-vivo · model: LPS-induced neonatal rat cardiomyocytes; LPS-induced and CLP-induced mouse septic cardiomyopathy models · ruxolitinib attenuates SASP and senescence markers, restores mitochondrial function, reduces ROS, improves cardiac function via JAK2/STAT3 inhibition; **low-dose ruxolitinib comparable to ABT263 senolytic** in mitigating SCM · OA via PMC; abstract-verified via PubMed; full PDF not yet locally archived

[^zhao2025]: Zhao X, Lin J, Liu F, Zhang Y, Shi B, Ma C, Wang Z, et al. · doi:10.1002/advs.202410795 · *Adv Sci (Weinh)* 2025 Mar;12(11):e2410795 · PMID 39853717 · in-vitro + in-vivo (mouse OA models) · IL-6R/JAK2 axis targets p21-positive senescent chondrocytes in osteoarthritis; intra-articular IL-6R or gp130 (Y757F) accelerates OA; IL-6R or JAK2 KO alleviates OA · OA gold; abstract-verified via PubMed; full PDF not yet locally archived

[^hao2025]: Hao H, Liang W, Zhang S, Cai X, Yakefu A, Gao S, Xun C, Xu T, Cao R, Sheng W · doi:10.1002/jsp2.70044 · *JOR Spine* 2025 Mar 5;8(1):e70044 · PMID 40046265 · in-vitro · model: rat nucleus pulposus cells (NPCs); passage-induced senescence model · ruxolitinib delays NPC senescence; reduces p16/p21/p53 and SASP cytokines (IL-1β, IL-6, TNF-α, MMP-3, MMP-13); rescues aggrecan/Col II; siRNA-JAK2 produces equivalent rescue · OA gold; abstract-verified via PubMed; full PDF not yet locally archived
