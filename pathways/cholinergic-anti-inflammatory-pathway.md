---
type: pathway
aliases: [inflammatory reflex, vagal anti-inflammatory pathway, cholinergic anti-inflammatory pathway, CAP, cholinergic anti-inflammatory reflex]
kegg: hsa04725
kegg-secondary: []
reactome: null   # No single top-level Reactome entry for the CAP; hsa04725 (Cholinergic synapse) is the best single KEGG match. The CAP is a composite neuro-immune circuit spanning neurotransmission and innate immune regulation — not a conventional intracellular signaling cascade with a single Reactome ID. #gap/needs-canonical-id
wikipathways: null   # #gap/needs-canonical-id — no WikiPathways entry confirmed for the CAP as a distinct pathway. The circuit is referenced within broader cholinergic and immune pathway sets but lacks a dedicated curated WP entry.
key-nodes: ["[[molecules/proteins/chrna7]]", "[[pathways/nf-kb]]", "[[molecules/proteins/hmgb1]]"]
upstream: ["efferent vagus nerve (dorsal motor nucleus)", "splenic nerve relay", "ChAT-expressing CD4+ T cells (spleen)", "acetylcholine"]
downstream: ["[[pathways/nf-kb]]", "TNF-α suppression", "IL-1β suppression", "IL-6 suppression", "JAK2–STAT3 anti-inflammatory arm"]
hallmarks: ["[[hallmarks/chronic-inflammation]]"]
sens-categories: []
druggability-tier: 2
caused-by: ["efferent vagal tone", "systemic immune activation (afferent arm)", "inflammatory DAMPs (afferent sensing)"]
causes: ["[[pathways/nf-kb]] suppression", "reduced SASP cytokine output", "pro-resolving milieu in spleen and peripheral tissues"]
literature-checked-through: 2026-06-13
verified: true
verified-date: 2026-06-13
verified-by: claude
verified-scope: "Borovikova 2000, Wang 2003, Koopman 2016, Kressel 2020 verified against local full-text PDFs; Rosas-Ballina 2011 and Peña 2010 verified against PMC OA full text (PMC4548937 and PMC3086065 respectively); Baker 2023 verified against Crossref abstract + published results — abstract sufficient to confirm RCT design, n, and primary endpoint outcome; closed-access full text not read"
---

# Cholinergic anti-inflammatory pathway

The **cholinergic anti-inflammatory pathway** (CAP; also "inflammatory reflex") is a hardwired neural feedback circuit through which the brain monitors and down-regulates peripheral immune responses in real time. The efferent arm runs from the brainstem dorsal motor nucleus (DMN) → vagus nerve → celiac ganglion / superior mesenteric ganglia → **splenic nerve** → spleen, where norepinephrine from post-ganglionic sympathetic fibers drives ChAT-expressing CD4⁺ T cells to release **acetylcholine** → binds α7 nicotinic acetylcholine receptors (**α7nAChR**, gene *CHRNA7*) on splenic macrophages → suppresses **NF-κB** nuclear translocation → blunts TNF-α, IL-1β, and IL-6 secretion [^borovikova2000][^wang2003][^rosas2011].

The afferent arm (sensory vagal fibers detecting inflammatory mediators at the periphery) completes the reflex, conceptually analogous to the baroreceptor reflex in cardiovascular physiology [^tracey2002]. Kevin Tracey's lab at the Feinstein Institutes coined the term "inflammatory reflex" and established the molecular and cellular anatomy of the pathway through a series of Nature/Science papers from 2000–2011.

> **Naming note:** This page uses "cholinergic anti-inflammatory pathway" as its canonical title per the primary literature (Tracey 2002). "Inflammatory reflex" is the broader circuit concept (includes both afferent sensing and efferent suppression arms). Both terms are in `aliases:`. This is a **composite neuro-immune circuit**, not a conventional intracellular signaling cascade — KEGG `hsa04725` (Cholinergic synapse) is the best available single canonical ID, but the CAP spans neurotransmission, the sympatho-adrenergic relay, and innate immune suppression in ways not captured by a single KEGG map.

---

## Circuit anatomy

### Step 1 — Afferent sensing: periphery → brainstem

Inflammatory mediators (IL-1β, HMGB1, prostaglandins) act on vagal afferent sensory neurons in peripheral organs. These C- and A-δ fibers signal to the nucleus tractus solitarius (NTS) in the brainstem, which relays to the hypothalamus and dorsal motor nucleus (DMN) of the vagus [^tracey2002]. The afferent arm is the "sensing" limb of the reflex — it is what informs the brain that peripheral inflammation is occurring. **The anti-inflammatory efferent output only engages when the brain detects a peripheral inflammatory signal.**

### Step 2 — Efferent motor output: brainstem → spleen

Cholinergic neurons in the **DMN** project via the [[tissues/vagus-nerve|vagus nerve]] to the celiac-superior mesenteric ganglia. Kressel et al. 2020 (doi:10.1073/pnas.2008213117) established with optogenetic precision that DMN-derived fibers synapse onto post-ganglionic neurons that increase **splenic nerve activity** — thereby identifying the brainstem locus [^kressel2020]. The vagus nerve itself does **not** directly innervate the spleen; the relay is through the celiac ganglion. The splenic nerve then carries noradrenergic signals to the spleen.

### Step 3 — The splenic relay: norepinephrine → ChAT⁺ T cells → acetylcholine

In the spleen, norepinephrine released by splenic nerve endings activates **β2-adrenergic receptors** on a rare population of **CD4⁺ memory T cells that co-express choline acetyltransferase (ChAT)**. These ChAT⁺ T cells synthesize and release **[[molecules/metabolites/acetylcholine|acetylcholine (ACh)]]** locally within the spleen [^rosas2011].

This cellular relay was identified by Rosas-Ballina et al. 2011 using *Chat-EGFP* transgenic mice. Key mechanistic features from that paper:

- ChAT⁺ T cells comprise **4.4 ± 0.7% of splenic CD4⁺ cells** overall; enriched to **10.5 ± 2.1%** within the memory (CD44hi CD62Llo) CD4⁺ subset in mice
- Adoptive transfer of ChAT⁺ T cells from wild-type mice into **nude mice** (T-cell-deficient) restored vagus-mediated TNF suppression; transfer of non-ChAT T cells did not; ChAT siRNA knockdown also abolished the effect, establishing these cells as the obligate ACh source
- The cells display a memory phenotype (CD44hi, CD62Llo), consistent with long-lived immunological memory

**One-way signal flow:** The T cells produce ACh only when stimulated by norepinephrine from the splenic nerve; the vagus nerve does not directly activate T cells. ChAT expression in T cells was subsequently shown to also regulate blood pressure via nitric-oxide-mediated vasorelaxation in endothelial cells [Olofsson 2016, doi:10.1038/nbt.3663 — not cited as primary here but confirms ChAT⁺ T cells as a pleiotropic neuro-immune interface].

### Step 4 — The effector: α7nAChR on macrophages → NF-κB suppression

Acetylcholine released by ChAT⁺ T cells binds **α7 nicotinic acetylcholine receptors (α7nAChR; encoded by *CHRNA7*)** on resident splenic macrophages and peripheral tissue macrophages. The α7nAChR is an ionotropic, Ca²⁺-permeable homo-pentameric ligand-gated ion channel.

Wang et al. 2003 established that α7nAChR is the **essential receptor** for the CAP's anti-inflammatory output [^wang2003]:
- Vagal stimulation in wild-type mice suppressed TNF-α; **this suppression was completely abolished in *Chrna7*⁻/⁻ mice** (α7-knockout), despite intact vagal anatomy and splenic innervation
- ACh and selective α7 agonists (e.g., GTS-21) recapitulated the TNF-suppression effect in peritoneal macrophages in a α7-dependent, atropine-insensitive manner
- The suppression was specific to pro-inflammatory cytokines; IL-10 (anti-inflammatory) was unaffected

Importantly, Olofsson et al. 2012 (doi:10.2119/molmed.2011.00405) clarified the cellular specificity: α7nAChR expression is required in **bone marrow-derived non-T cells** (i.e., macrophages), not in T cells themselves, for the full reflex to operate. ChAT⁺ T cells provide the ACh but do not themselves need to express α7nAChR to execute anti-inflammatory signaling.

### Intracellular mechanism: α7nAChR → NF-κB inhibition

The intracellular path downstream of α7nAChR engagement involves two mechanistically distinct but convergent suppressors of inflammatory cytokine production:

**NF-κB suppression (primary arm):** α7nAChR activation prevents [[pathways/nf-kb|NF-κB]] nuclear translocation, reducing transcription of *TNF*, *IL1B*, *IL6*, and other κB-driven cytokine genes. The precise biochemical intermediary has not been fully resolved — leading candidates include JAK2-mediated STAT3 activation that competes with RelA/p65 at transcriptional co-activator binding sites, and direct PKC/phospholipase C signaling downstream of the Ca²⁺ influx through the α7 channel.

**JAK2–STAT3 arm:** Peña et al. 2010 demonstrated that **unphosphorylated STAT3 (uSTAT3)** is required for the cholinergic anti-inflammatory effect [^pena2010]. α7nAChR stimulation prevents STAT3 tyrosine phosphorylation through a JAK2-dependent mechanism — notably, both α7nAChR activation and pharmacological JAK2 inhibition (AG490) produce the same result of blunted STAT3 phosphorylation and reduced TNF/IL-6. The unphosphorylated form of STAT3 acts as a transcriptional repressor at NF-κB target gene promoters. Importantly, a STAT3F dominant-negative mutant (which cannot be tyrosine-phosphorylated) partially reduced TNF but did not prevent α7nAChR signaling, while siRNA-mediated depletion of STAT3 protein expression entirely abrogated the cholinergic anti-inflammatory effect — indicating STAT3 protein expression (not phosphorylation state) is required. In vivo, the STAT3 phosphorylation inhibitor stattic improved survival in endotoxemia and CLP sepsis models [^pena2010]. This is distinct from the classical pSTAT3 pro-inflammatory signaling seen in cytokine-receptor cascades.

| Signal arm | Immediate effector | Mechanism of NF-κB suppression |
|---|---|---|
| α7nAChR → JAK2-dependent pathway | Prevented STAT3 tyrosine phosphorylation | uSTAT3 accumulation → repression at κB-site promoters [^pena2010] |
| PKC activation | unknown intermediate | Prevents IκBα phosphorylation or p65 nuclear entry |
| cAMP elevation (nicotinic → cAMP in some macrophage contexts) | PKA | Indirect NF-κB attenuation |

The net output is selective suppression of pro-inflammatory cytokines (TNF-α, IL-1β, IL-6, IL-18) while leaving anti-inflammatory IL-10 largely intact — a feature repeatedly observed from the earliest Borovikova 2000 studies [^borovikova2000].

---

## HMGB1 as a downstream controlled mediator

[[molecules/proteins/hmgb1|HMGB1]] (High Mobility Group Box 1) is a late-phase mediator of the SASP and a canonical DAMP whose release from activated macrophages drives chronic inflammation. The CAP restrains HMGB1 secretion: vagal stimulation substantially reduces HMGB1 release in endotoxemia models, and α7nAChR agonists block the acetylation-dependent nuclear-to-extracellular HMGB1 secretion pathway in macrophages. HMGB1 suppression is therefore one mechanism through which the CAP reduces late-phase inflammation and bystander senescence propagation (see [[molecules/proteins/hmgb1]] for the ReHMGB1 → RAGE → senescence propagation cascade).

---

## Aging relevance: vagal tone decline and permissive inflammaging

### HRV and vagal tone decline with age

Heart rate variability (HRV) is the most practical non-invasive proxy for cardiac vagal tone. HRV declines with age across multiple metrics (RMSSD, pNN50, high-frequency power) — a well-replicated finding reflecting reduced parasympathetic modulation of the sinoatrial node [^olivieri2024].

The mechanistic link from HRV decline to increased systemic inflammation is plausible but not fully established in humans: reduced efferent vagal output → weakened CAP → permissive environment for macrophage-driven cytokine production → elevated TNF-α/IL-6/IL-1β at baseline. Olivieri et al. 2024 review this framing explicitly, proposing ANS imbalance (sympathetic overdrive + parasympathetic withdrawal) as a detectable hallmark of [[hallmarks/chronic-inflammation|inflammaging]] [^olivieri2024].

**Caution on causal claims:** The HRV → inflammaging link is an association, not an established causal chain. Cross-sectional studies consistently show lower HRV with higher CRP/IL-6 in aged populations, and the biological mechanism is mechanistically coherent. However, whether **restoring HRV (vagal tone)** reverses inflammaging in humans, or whether inflammaging itself drives HRV decline, has not been established by interventional RCT evidence in healthy aging populations. These are confounded in cross-sectional data. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Efferent CAP circuit conserved in humans? | yes — α7nAChR, CHRNA7 gene, splenic macrophage expression all confirmed |
| Phenotypic CAP suppression of cytokines in humans? | yes — VNS reduces TNF in RA patients [^koopman2016] |
| HRV decline with age → reduced CAP → inflammaging causation? | partial — association established; causal direction unresolved |
| Healthy aging human trial of vagal augmentation? | no — largest RA auricular VNS RCT was null [^baker2023] |

### Proposed mechanism for age-related CAP weakening

Age-related changes that may reduce CAP efficacy:

1. **Reduced vagal tone (↓HRV)** — the afferent-efferent reflex gain is diminished if efferent vagal output baseline is lower
2. **Immunosenescence of ChAT⁺ T cells** — whether the ChAT⁺ T-cell population is maintained in aged spleens has not been directly quantified in humans; indirect evidence from mouse studies suggests ChAT⁺ T-cell proportions may decline with age #gap/needs-replication
3. **α7nAChR expression changes on macrophages** — CHRNA7 expression on aged macrophages is not well characterized; some evidence suggests NF-κB becomes constitutively active in aged macrophages irrespective of α7 input #gap/needs-replication
4. **Sympathetic overdrive** — age-associated increases in catecholamines paradoxically may alter the norepinephrine-β2AR-ChAT⁺ T-cell relay efficiency #gap/no-mechanism

These are biologically plausible but speculative at the human level. The most robust aging connection remains the HRV→inflammaging epidemiological association.

---

## Therapeutic modulation

### 1. Vagus nerve stimulation (VNS)

**Invasive implantable VNS** — cervical vagal electrode devices (e.g., SetPoint Medical) deliver electrical impulses directly to the vagus nerve. The Koopman 2016 PNAS open-label proof-of-concept study (n=17 RA efficacy population; 18 enrolled, 1 excluded for Whipple disease) showed 84-day sustained reduction in ex-vivo whole-blood TNF production with stimulation (TNF 2,900 ± 566 pg/mL at baseline vs 1,776 ± 342 pg/mL at day 42, p<0.05); serum IL-6 was also reduced in EULAR responders. TNF production rebounded when the device was turned off (day 42–56) and fell again when reactivated (day 56–84). DAS28-CRP improved significantly (6.05 ± 0.18 → 4.16 ± 0.39 at day 42, p<0.001). A preliminary epilepsy patient cohort (n=7) also showed reduced IL-1β and IL-6 following intraoperative VNS [^koopman2016].

**The RESET-RA sham-controlled RCT** (Peterson 2024, doi:10.1186/s42234-023-00138-x) reported safety data for a newer implantable device (n=60 Stage 1) but focused on surgical safety rather than efficacy endpoints.

**Transcutaneous auricular VNS (taVNS)** — non-invasive stimulation of the auricular branch of the vagus nerve (cymba conchae of the ear). Multiple small RCTs show anti-inflammatory effects in IBD and other conditions; promising mechanistic signal.

**Critical negative result:** Baker et al. 2023 conducted the largest sham-controlled RCT of auricular VNS in active RA (n=113; double-blind, 12-week primary endpoint) [^baker2023]. The result was **null**: ACR20 response 25.0% (active) vs 26.9% (sham), p not significant. Disease activity measures did not differ meaningfully between groups. This is the highest-quality evidence to date for taVNS in inflammatory arthritis and it failed to demonstrate benefit.

The discordance between the Koopman 2016 open-label proof-of-concept (positive, n=17) and the Baker 2023 sham-controlled RCT (null, n=113) is the central unresolved tension in the field. Possible explanations include: (a) open-label Hawthorne effects + regression to the mean in the 2016 study; (b) inadequate auricular stimulation depth/current to engage the anti-inflammatory reflex; (c) implantable cervical VNS (Koopman) may be mechanistically distinct from auricular VNS (Baker). Implantable cervical VNS has not yet been tested in a full sham-controlled RCT for RA. #gap/contradictory-evidence

### 2. α7nAChR agonists

**GTS-21 (DMXB-A)** — a partial agonist selective for α7nAChR; the best-studied pharmacological activator of the CAP. Kox et al. 2011 (doi:10.1097/SHK.0b013e3182168d56) conducted a double-blind, placebo-controlled pilot study (n=14 healthy males, 150 mg GTS-21 t.i.d.) and found dose-dependent correlations between GTS-21 plasma levels and reduced TNF-α/IL-6/IL-1RA after endotoxin challenge, but the highest safe dose did not produce statistically significant group-level differences [^kox2011]. The field has not advanced GTS-21 to a pivotal Phase 3 anti-inflammatory RCT.

**Other α7 agonists under investigation:** Choline (endogenous; at supraphysiological concentrations), PHA-543613, EVP-6124, ABT-107. Several have been evaluated for cognitive/neuropsychiatric indications (α7nAChR is also implicated in attention/memory circuits). None is aging-validated.

**Acetylcholinesterase inhibitors (e.g., galantamine)** — by preventing ACh degradation, AChEIs could amplify the endogenous CAP signal. Galantamine is approved for Alzheimer's disease. Animal studies (Hanes et al. 2015, doi:10.2119/molmed.2015.00142) showed reduced immune activation in NOD mice; observational epidemiology suggests AChEI users have lower inflammatory biomarkers. A definitive human anti-aging/anti-inflammatory RCT of AChEIs via the CAP mechanism has not been completed. #gap/needs-human-replication

### Summary table

| Modality | Evidence level | Aging-specific trial? | Notes |
|---|---|---|---|
| Implantable cervical VNS | Proof-of-concept (n=17 RA, open-label) | No | Koopman 2016 PNAS [^koopman2016] — positive; no sham-controlled RCT yet |
| Auricular VNS (taVNS) | Phase 2 RCT — null | No | Baker 2023, n=113 [^baker2023]; primary endpoint failed #gap/contradictory-evidence |
| GTS-21 (α7 agonist, oral) | Small pilot — no group effect | No | Kox 2011, n=14 [^kox2011]; dose-correlation signal only |
| Galantamine (AChEI, oral) | Animal + observational | No | Anti-inflammatory human RCT missing #gap/needs-human-replication |

**Aging/longevity use is entirely untested in the above.** The RA and IBD data provide mechanism plausibility and early safety validation. Extrapolation to healthy aging or inflammaging as a primary endpoint requires dedicated trials that do not yet exist.

---

## Druggability context (aging-tier justification)

`druggability-tier: 2` — There are high-quality pharmacological probes for α7nAChR (GTS-21, selective partial agonists) and validated VNS devices with proof-of-concept in human inflammatory disease. However:
- No agent or device is FDA-approved for an aging indication
- The auricular VNS RCT was null, reducing confidence in the most accessible modality
- α7 agonists have not advanced to Phase 3 for any anti-inflammatory indication
- GTS-21 and similar compounds have cognitive/neuropsychiatric indication tracks but these are not aging-context

Tier 2 reflects: a high-quality probe exists (GTS-21 ± implantable VNS with human mechanistic data), but aging-validated use is absent. The tier would rise to 1 if an aging/healthspan indication RCT showed efficacy with a regulated modality. #gap/dose-response-unclear

---

## Connection to other aging pathways and processes

- **[[pathways/nf-kb]]** — the CAP's primary target; α7nAChR engagement suppresses IκBα phosphorylation and p65/p50 nuclear entry, specifically restraining the NF-κB → SASP arm. The CAP is thus an endogenous negative-feedback regulator of the chronic NF-κB activation that characterizes [[hallmarks/chronic-inflammation|inflammaging]].
- **[[hallmarks/chronic-inflammation]]** — weakened CAP with age is a plausible permissive mechanism for inflammaging; the efferent vagal arc is part of the endogenous anti-inflammatory homeostasis. However, other drivers (senescent-cell SASP, gut dysbiosis, mtDNA DAMPs) contribute independently and are not modulated by the CAP.
- **[[molecules/proteins/hmgb1]]** — the CAP restrains late-phase HMGB1 release from macrophages; HMGB1 is both a SASP component and a bystander senescence propagator. The CAP → HMGB1 suppression link is one mechanistic route by which the pathway exerts anti-aging relevance.
- **[[pathways/lps-tlr4-nfkb]]** — the LPS-TLR4 inflammatory arm is one of the inputs that the CAP efferent arm can dampen; ACh/α7nAChR activation in macrophages reduces LPS-stimulated cytokine production.
- **[[pathways/cgas-sting]]** — indirect; the CAP dampens downstream inflammatory output (TNF/IL-6) regardless of the upstream DAMP source (LPS, cytosolic DNA, etc.), meaning it is a convergent suppressor operating at the NF-κB transcriptional output level, not at the STING or TBK1 signaling level.

---

## Limitations and gaps

- **The ChAT⁺ T-cell relay has not been directly demonstrated in humans.** Mouse genetic models are the primary evidence. The cellular anatomy of the human splenic neuro-immune reflex arc has not been reconstructed with the same resolution as in mice. #gap/needs-human-replication
- **Causality between HRV decline and increased inflammaging is unestablished** — cross-sectional associations are consistent; interventional proof in healthy aging humans is absent. #gap/needs-human-replication
- **α7nAChR expression on aged human macrophages is not characterized.** Whether the effector receptor is maintained, downregulated, or desensitized in aged macrophages is unknown. #gap/needs-replication
- **The auricular VNS RCT was null** (Baker 2023, n=113) — the most rigorous evidence to date does not support taVNS for inflammatory arthritis. The discordance with the open-label VNS studies is not resolved. #gap/contradictory-evidence
- **No healthy aging or longevity indication RCT has been conducted** for any CAP-targeting modality. All clinical evidence comes from disease populations (RA, IBD, sepsis). #gap/needs-human-replication
- **KEGG/WikiPathways IDs are absent** for the CAP as a composite neuro-immune circuit — it does not map cleanly onto a single curated pathway database entry. KEGG `hsa04725` (Cholinergic synapse) is the best available match but captures the neurotransmission side, not the macrophage-NF-κB effector arm. #gap/needs-canonical-id

---

## Footnotes

[^borovikova2000]: doi:10.1038/35013070 · in-vivo + in-vitro · Borovikova LV, Ivanova S, Zhang M et al. (Tracey KJ) · *Nature* 2000 · 405(6785):458-462 · rat endotoxemia model + peritoneal macrophage cultures · VNS attenuated serum TNF in endotoxemic rats; ACh suppressed TNF, IL-1β, IL-6, IL-18 but not IL-10 in macrophage cultures; ACh effect blocked by nicotinic (not muscarinic) antagonists — establishing the cholinergic circuit

[^tracey2002]: doi:10.1038/nature01321 · review · Tracey KJ · *Nature* 2002 · 420(6917):853-859 · synthesizes the "inflammatory reflex" concept: afferent sensing arm + efferent cholinergic anti-inflammatory arm; establishes the baroreceptor-reflex analogy for understanding neural immune regulation; foundational framing for the field

[^wang2003]: doi:10.1038/nature01339 · in-vivo · Wang H, Yu M, Ochani M et al. (Tracey KJ) · *Nature* 2003 · 421(6921):384-388 · C57BL/6 background *Chrna7*⁻/⁻ mice and WT controls (8–12 weeks, male and female); VNS (left cervical vagus, 1 V, 2 ms, 1 Hz, 20 min) completely abolished TNF suppression in α7-knockout; ACh and α7-selective agonists recapitulate effect in macrophages; α7 agonism atropine-insensitive · n=10 (sham α7+/+); n=11 (VNS α7+/+, sham α7−/−, VNS α7−/−) · foundational paper establishing α7nAChR as essential effector

[^rosas2011]: doi:10.1126/science.1209985 · in-vivo (mouse, transgenic) · Rosas-Ballina M, Olofsson PS, Ochani M et al. (Tracey KJ) · *Science* 2011 · 334(6052):98-101 · ChAT(BAC)-EGFP reporter mice + nude mouse (T-cell-deficient) adoptive transfer + ChAT siRNA knockdown · ChAT⁺ CD4⁺ memory (CD44hi CD62Llo) T cells in spleen are the obligate ACh source for vagus-mediated TNF suppression; adoptive transfer of ChAT⁺ T cells into nude mice restored the reflex; non-ChAT T cells and ChAT siRNA knockdown did not restore/abolished it · ChAT⁺ cells are 4.4 ± 0.7% of splenic CD4⁺ cells (10.5 ± 2.1% of memory CD4⁺ subset) · #gap/needs-human-replication (human ChAT⁺ T-cell relay not directly demonstrated)

[^pena2010]: doi:10.1002/eji.201040540 · in-vitro + in-vivo · Peña G, Cai B, Liu J, van der Zanden EP, Deitch EA, de Jonge WJ, Ulloa L · *European Journal of Immunology* 2010 · 40(9):2580-2589 · in vitro (macrophage cell lines + primary macrophages) + in vivo (LPS endotoxemia and CLP sepsis mouse models); n=4–10 per group · α7nAChR activation prevents STAT3 tyrosine phosphorylation through a JAK2-dependent mechanism; JAK2 inhibition (AG490) produces the same outcome; unphosphorylated STAT3 (uSTAT3) protein expression is required for cholinergic anti-inflammatory signaling (STAT3 protein siRNA depletion abolished the effect; STAT3F dominant-negative did not); stattic (STAT3 phosphorylation inhibitor) improved survival in endotoxemia and CLP models in vivo · mechanistic, not replicated at human level

[^koopman2016]: doi:10.1073/pnas.1605635113 · open-label interventional · Koopman FA, Chavan SS, Miljko S et al. (Tracey KJ, Tak PP) · *PNAS* 2016 · 113(29):8284-8289 · n=17 RA patients (efficacy; 18 enrolled; 1 excluded) in two cohorts (cohort I n=7 MTX-failing; cohort II n=10 multi-biologic-failing); implantable cervical VNS device (SetPoint Medical); 84-day open-label; primary endpoint DAS28-CRP at day 42; TNF (ex-vivo LPS-stimulated whole blood) reduced from 2,900 ± 566 to 1,776 ± 342 pg/mL at day 42 (p<0.05); DAS28-CRP 6.05 ± 0.18 → 4.16 ± 0.39 (p<0.001); ACR20/50/70 in cohort I 71.4%/57.1%/28.6%; serum IL-6 decreased in EULAR responders · open-label, no sham control · proof-of-concept; not a full efficacy RCT

[^chavan2017]: doi:10.1016/j.immuni.2017.06.008 · review · Chavan SS, Pavlov VA, Tracey KJ · *Immunity* 2017 · 46(6):927-942 · cited 625× · comprehensive synthesis of CAP mechanism, therapeutic relevance, and bioelectronic medicine concept; covers afferent + efferent arms, α7nAChR effector biology, clinical translation progress, and open mechanistic questions

[^kressel2020]: doi:10.1073/pnas.2008213117 · in-vivo (optogenetics, mouse) · Kressel AM, Tsaava T, Levine YA et al. (Tracey KJ) · *PNAS* 2020 · 117(47):29803-29810 · identified DMN cholinergic neurons as the brainstem locus regulating splenic nerve activity and TNF suppression using optogenetics; first anatomy-level resolution of the brainstem output node

[^kox2011]: doi:10.1097/SHK.0b013e3182168d56 · double-blind placebo-controlled pilot · Kox M, Pompe JC, Gordinou de Gouberville MC et al. · *Shock* 2011 · 36(1):5-11 · n=14 healthy nonsmoking male volunteers (n=7 GTS-21; n=7 placebo); 150 mg GTS-21 orally t.i.d. for 3 days pre-endotoxin and on endotoxin day; 2 ng/kg IV LPS challenge · within GTS-21 group, higher plasma GTS-21 concentrations correlated with lower TNF-α (r=−0.78, p=0.03), IL-6 (r=−0.76, p=0.04), IL-1RA (r=−0.86, p=0.01) but not IL-10; no statistically significant group-level cytokine differences between GTS-21 and placebo groups · small pilot study; GTS-21 not advanced to Phase 3

[^baker2023]: doi:10.1002/art.42637 · randomized double-blind sham-controlled · Baker MC, Kavanagh S, Cohen S et al. · *Arthritis & Rheumatology* 2023 · 75(12):2107-2115 · n=113 enrolled active RA patients (mean age 54 y; 82% female; 101 completed week 12) · auricular VNS vs sham, primary endpoint ACR20 at week 12 · ACR20: 25.0% active vs 26.9% sham (difference −1.9; 95% CI −18.8, 14.9; p=0.823) — null primary endpoint · negative trial; highest-quality evidence for auricular VNS in inflammatory arthritis to date · #gap/no-fulltext-access (abstract and published primary endpoint results verified; full text closed-access and not read)

[^olivieri2024]: doi:10.1016/j.arr.2024.102521 · review · Olivieri F, Biscetti L, Pimpini L, Pelliccioni G, Sabbatinelli J, Giunta S · *Ageing Research Reviews* 2024 · 101:102521 · cited 53× · proposes ANS imbalance (sympathetic overdrive + parasympathetic withdrawal) as detectable hallmark of inflammaging; HRV as biomarker linking autonomic aging to systemic inflammatory state; notes mechanistic coherence of CAP weakening as aging mechanism but acknowledges causal direction unresolved
