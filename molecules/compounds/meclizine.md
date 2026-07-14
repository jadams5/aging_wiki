---
type: compound
aliases: [meclozine, Antivert, Bonine, Dramamine II, Dramamine Less Drowsy]
pubchem-cid: 4034
chembl-id: CHEMBL1623
drugbank-id: DB00737
cas-number: 569-65-3
molecular-formula: C25H27ClN2
molecular-weight-da: 390.96
administration-route: oral
biologic: false
mechanisms: [h1-antihistamine]
targets: []
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
clinical-stage: fda-approved
human-evidence-level: preclinical-only
translation-gap: preclinical-only
next-experiment: "Dose-ranging study in UM-HET3 mice (12-month start, 400–1600 ppm) to define the effective exposure window and confirm dose-dependency of the Harrison 2024 lifespan signal; include plasma-level measurement and Kennedy-pathway metabolomics (phosphoethanolamine, CDP-ethanolamine) to test whether the PCYT2-driven metabolic shift tracks with survival benefit."
clinical-trials-active: 0
literature-checked-through: 2026-06-30
verified: true
verified-date: 2026-06-30
verified-by: claude
verified-scope: "Harrison 2024 longevity claims cross-checked against verified studies/harrison-2024-itp-astaxanthin-meclizine (not re-read); Gohil 2013 mechanism verified against PMC3853286 full text (corrections: Complex I specificity removed, rate-limiting article corrected); Korstanje 2026 abstract-verified (PMID 41843349 confirmed, specific meclizine dose/start-age in 2026 cohort not in abstract — tagged #gap/no-fulltext-access); Matsushita 2025 DOI corrected (10.1007/s00223-024-01326-8 → 10.1007/s00223-025-01449-8) and n=9 added; Ghazal 2025 confirmed as preprint; canonical-DB identity fields confirmed via live PubChem/ChEMBL lookups by seeder 2026-06-30."
---

# Meclizine

A first-generation piperazine H1 antihistamine, FDA-approved since 1957 for motion sickness and vertigo. It gained attention as a longevity drug-repurposing candidate when the NIA Interventions Testing Program (ITP) found 8% median male lifespan extension (p=0.03) in UM-HET3 mice (Harrison 2024). **A 2026 ITP follow-up found no lifespan benefit at different doses or starting ages** (Korstanje 2026), substantially weakening this signal. The mechanism of any lifespan effect is completely unknown. The best-supported mechanistic lead — inhibition of PCYT2 in the Kennedy phospholipid synthesis pathway, shifting metabolism from oxidative phosphorylation toward glycolysis — has not been connected to the lifespan result.

## Identity

- **PubChem CID:** 4034 (confirmed PubChem live lookup 2026-06-30)
- **CAS:** 569-65-3 (confirmed via PubChem synonyms 2026-06-30)
- **ChEMBL:** CHEMBL1623 (confirmed ChEMBL live lookup 2026-06-30)
- **DrugBank:** DB00737 (confirmed via PubChem synonym cross-reference 2026-06-30)
- **InChIKey:** OCJYIGYOJCODJL-UHFFFAOYSA-N
- **Molecular formula:** C₂₅H₂₇ClN₂
- **Molecular weight:** 390.96 g/mol
- **Class:** piperazine H1 antihistamine (first-generation, anticholinergic)
- **Brand names:** Antivert (Rx, 12.5–50 mg), Bonine / Dramamine Less Drowsy / Dramamine II (OTC, 25 mg)
- **First approved:** 1957 (US)

## Approved pharmacology

Meclizine is a competitive, non-selective first-generation H1 antihistamine with additional anticholinergic (muscarinic) activity. Its approved anti-emetic and anti-vertigo effects arise from:

1. **H1 receptor antagonism** — blocks histamine-H1 signalling in the vestibular system and chemoreceptor trigger zone (CTZ), reducing nausea/vomiting reflex
2. **Muscarinic antagonism** — reduces cholinergic activity in the labyrinth and brainstem, lowering vestibular excitability
3. **CNS penetration** — crosses the blood-brain barrier at therapeutic doses; accounts for sedation as an adverse effect

Approved indications: motion sickness prevention and treatment; vertigo associated with vestibular disorders. OTC dose: 25 mg/day. Rx dose (Antivert): 12.5–50 mg two to three times daily.

**Safety profile (approved use):** well-tolerated for short-term and intermittent use. Primary adverse effects are sedation (30–50%), dry mouth, and blurred vision. Contraindicated in angle-closure glaucoma. **For chronic use in aging populations**, anticholinergic burden is a class concern: first-generation antihistamines contribute to the anticholinergic cognitive burden and fall risk in older adults, limiting their chronic aging-therapy potential at antivertigo doses. #gap/long-term-unknown

## Longevity evidence — NIA ITP

### Harrison 2024 — POSITIVE (males only, heterogeneous across sites)

The NIA ITP three-site lifespan cohort found meclizine extended **median male lifespan by 8%** (pooled log-rank p=0.03) in genetically heterogeneous UM-HET3 mice at ~544 ppm diet (68% of 800 ppm target), starting from 12 months [^harrison2024]. Plasma levels confirmed exposure: males 174±77 ng/mL, females 115±100 ng/mL.

| Site | Male median Δ | Female median Δ |
|---|---|---|
| JAX | +15% | NS |
| University of Michigan | +11% | NS |
| UT Health San Antonio | 0% | NS |
| **Pooled** | **+8% (p=0.03)** | **+3% (NS)** |

Female plasma levels were lower (115 vs 174 ng/mL), potentially explaining the sex-specific result via pharmacokinetic factors — but the underlying mechanism of the sex PK difference is not reported. The 90th percentile lifespan (maximum proxy) showed +6%, but this was not significant (Wang-Allison test p=0.14).

**Site heterogeneity is a red flag.** The UT site contributed 0% effect, in contrast to the concurrent astaxanthin arm (JAX +11%, UM +14%, UT +11%), which showed cross-site consistency. ITP credibility is strongest when effects replicate across all three sites; meclizine's UT-null weakens confidence in the pooled p=0.03.

### Korstanje 2026 — NULL at different dose or starting age

A subsequent ITP cohort explicitly retested meclizine "at different doses or starting at later ages" and found **no lifespan extension in either sex** [^korstanje2026]. The 2026 paper also retested astaxanthin and mitoglitazone (both previously positive in ITP) under different conditions — all were null. The abstract states these compounds "showed no benefit when administered at different doses or starting at later ages."

**Framing the discordance:** the 2024 result (p=0.03, one cohort, UT null) was marginal by ITP standards. The 2026 null does not definitively falsify the 2024 result — if the effect is dose- or initiation-age-sensitive, the 2026 cohort may simply have missed the narrow effective window. Equally, the 2024 result may have been a false positive. The current balance of evidence is genuinely uncertain. #gap/contradictory-evidence

Contrast with [[astaxanthin]], which showed p=0.003 with consistent cross-site effects in Harrison 2024 — a far more robust ITP signal.

## Mechanistic hypotheses (none established for longevity)

### H1 antihistamine hypothesis
Histamine drives acute and chronic inflammation; H1 antagonism could theoretically reduce [[chronic-inflammation]]-driven hallmark acceleration. This remains purely speculative: no published data connects H1 receptor blockade to lifespan extension in any organism. No genetic or pharmacological evidence links histamine signalling to the longevity mechanisms targeted by ITP-validated compounds.

### Kennedy pathway / PCYT2 inhibition — metabolic reprogramming

The mechanistically best-supported pharmacological finding for meclizine is from Gohil et al. (Mootha lab, Broad Institute): meclizine inhibits **PCYT2 (phosphoethanolamine cytidylyltransferase 2)**, a rate-limiting enzyme in the CDP-ethanolamine arm of the Kennedy phospholipid synthesis pathway [^gohil2013]. This causes phosphoethanolamine accumulation, which Gohil et al. demonstrated is itself a **direct inhibitor of mitochondrial respiration** (verified in isolated mitochondria; the paper explicitly found the effect is not specific to Complex I or Complex II or any particular fuel substrate). Net cellular effect: shift from oxidative phosphorylation (OxPhos) toward glycolysis.

This metabolic shift is neuroprotective in hypoxia/ischemia contexts:
- In dorsal root ganglion neurons, meclizine augmented glycolysis and protected against hypoxia-induced mitochondrial compromise; the glycolytic augmentation was required for the protective effect [^zhuo2016]
- (S)-meclizine (active enantiomer) shows preemptive prophylactic effects in mouse stroke (MCAO) models, consistent with metabolic preconditioning [^lee2024]

**Complication from Ghazal 2025 (preprint):** In SLC25A3 knockout mice (a genetic model of primary mitochondrial cardiomyopathy), meclizine rescued cardiac hypertrophy and systolic function — but through **MICOS (mitochondrial contact site complex) upregulation and NAD+/NADH homeostasis, NOT via glycolysis upregulation**. Glycolytic enzyme expression was suppressed, not elevated, in meclizine-treated hearts [^ghazal2025]. This challenges the universality of the Gohil glycolytic-shift model and suggests context-specific mechanism(s).

### NF-κB p65 downregulation — shared anti-aging signature (candidate longevity link)

The most longevity-relevant mechanistic lead comes from Elmansi et al. 2024 (Miller lab — the same group that runs the ITP): **downregulation of the NF-κB subunit p65 in mouse liver is a phenotype shared across most validated anti-aging interventions** (caloric restriction, rapamycin, acarbose, 17α-estradiol, and others) [^elmansi2024]. Per the paper's recency-search abstract, meclizine is reported among the interventions sharing this hepatic p65-suppression signature — which, unlike the Kennedy-pathway metabolic mechanism, would tie meclizine to a *convergent* longevity-drug node ([[nf-kb]] / [[chronic-inflammation]]). This is the only candidate mechanism connecting meclizine to a shared longevity pathway rather than to isolated pharmacology. **Caveats:** abstract-level (full text not independently confirmed for the meclizine-specific result); correlational (a shared signature, not demonstrated causality for meclizine's lifespan effect); and the meclizine lifespan signal it would explain is itself now contested by Korstanje 2026. #gap/needs-replication

**None of these mechanisms has been causally linked to the ITP lifespan result.** The ITP papers did not perform metabolomics, pathway-activity assays, or knockout studies to identify the longevity mechanism. Secondary sources that describe meclizine as "an mTORC1 inhibitor" have no experimental support in the primary papers — this framing should not be cited. #gap/no-mechanism

## Pharmacokinetics (clinical context)

| Parameter | Value |
|---|---|
| Oral absorption | Moderate; absorbed from GI tract |
| Half-life | ~6 hours (clinical antivertigo dosing) |
| Protein binding | Not well characterized |
| Metabolism | Hepatic |
| CNS penetration | Yes (first-generation) |
| ITP plasma level (male, 544 ppm) | 174 ± 77 ng/mL [^harrison2024] |

At standard OTC doses (25 mg), human plasma levels are in the 10–100 ng/mL range. The ITP male plasma exposure (~174 ng/mL) overlaps with the upper end of this range, suggesting that clinically feasible exposures may approximate the ITP effective level — if the longevity effect is real. However, this calculation is highly uncertain given the unresolved dose-response and sex-PK discrepancy.

## Extrapolation to humans

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — Kennedy pathway (PCYT2) is conserved; whether it mediates the lifespan effect is unknown |
| Phenotype conserved in humans? | unknown — no aging-specific phenotypic data in humans |
| Replicated in humans? | no — no aging trials |

## Human evidence for aging

**None.** No aging-focused clinical trials are active (ClinicalTrials.gov, 2026-06-30; 0 active trials). Meclizine is FDA-approved for vestibular indications only; its longevity use is ITP-mouse preclinical.

A Phase 2 clinical trial tested oral meclizine for growth promotion in children with achondroplasia (via FGFR3 pathway modulation — a distinct mechanism from the longevity work) and confirmed human tolerability at pharmacological doses [^matsushita2025]. This provides some dose-safety context but does not validate the longevity hypothesis.

## Limitations and gaps

- **Net longevity evidence is contested.** Harrison 2024 (p=0.03, one cohort, UT null) vs Korstanje 2026 (null at different dose/age). Neither result is definitive. The balance of evidence does not yet support meclizine as a validated lifespan intervention. #gap/contradictory-evidence
- **Mechanism is unknown.** H1 antagonism is not a known longevity pathway. Kennedy pathway / PCYT2 inhibition is the best mechanistic candidate but is neither validated as the lifespan mechanism nor definitively consistent across model contexts (Gohil 2013 glycolysis upshift vs Ghazal 2025 glycolysis suppression in cardiac model). #gap/no-mechanism
- **Site heterogeneity** in Harrison 2024 (UT 0%) was a pre-existing flag for the result's fragility.
- **Sex-specificity is unexplained.** PK difference (lower female plasma) is the leading hypothesis but not mechanistically established.
- **Anticholinergic toxicity concern** for chronic aging use: first-generation antihistamines increase anticholinergic burden in older adults (falls, cognitive impairment, urinary retention). The ITP used continuous dietary administration in mice — human chronic oral use raises different safety considerations. Second-generation non-CNS-penetrant H1 antihistamines have not been tested.
- **No human aging trial** and none planned as of 2026-06-30.
- #gap/dose-response-unclear — the effective dose window in mice is unknown; the 2026 null at a different dose suggests the window may be narrow.

## Cross-references

- [[studies/harrison-2024-itp-astaxanthin-meclizine]] — primary source; verified: true; contains the lifespan data cited on this page
- [[studies/korstanje-2026-itp-null-cohort]] — non-replication cohort (Korstanje 2026); study page seeded 2026-06-30, verified: false (full-text/dose-detail pass pending)
- [[astaxanthin]] — co-positive compound in Harrison 2024 ITP cohort; more robust cross-site signal; also null in Korstanje 2026
- [[fisetin]] — co-tested compound in Harrison 2024 that failed lifespan extension and p16 biomarker endpoints
- [[chronic-inflammation]] — hallmark associated with H1-antagonism mechanism (speculative for longevity)
- [[deregulated-nutrient-sensing]] — hallmark associated with PCYT2/Kennedy-pathway metabolic reprogramming (speculative for longevity)

## Footnotes

[^harrison2024]: [[studies/harrison-2024-itp-astaxanthin-meclizine]] · n=~100-200 per compound per sex (3 sites pooled) · in-vivo · log-rank p=0.03 (male median +8%); females +3% NS · model: UM-HET3 genetically heterogeneous mice, 3 sites (JAX/UM/UT), starting at 12 months, ~544 ppm chow (target 800 ppm) · verified: true

[^korstanje2026]: [[studies/korstanje-2026-itp-null-cohort]] · doi:10.1007/s11357-026-02201-2 · PMID 41843349 · Korstanje R, Strong R, Salmon AB, Bogue MA, Harrison DE, Miller RA et al. · GeroScience 2026 (published online 2026-03-17) · in-vivo · model: UM-HET3 mice (3 sites) · meclizine retested "at different doses or starting at later ages" → no lifespan extension either sex; specific meclizine dose and start age in the 2026 cohort not stated in abstract #gap/no-fulltext-access; astaxanthin and mitoglitazone (also previously ITP-positive) similarly null at different conditions in same cohort · **abstract-only verified; no open-access full text (paywalled; no PMC ID)** #gap/contradictory-evidence

[^elmansi2024]: doi:10.1007/s11357-024-01466-9 · PMID 39666139 · Elmansi AM, Kassem A, Castilla RM, Miller RA · *GeroScience* 2024;47:3077–3094 · in-vivo (mouse liver transcriptomics/proteomics) · Miller lab (UM; ITP PI) · finds **downregulation of NF-κB p65 is a shared phenotype across most validated anti-aging interventions** (CR, rapamycin, acarbose, 17α-estradiol, etc.); meclizine reported among the interventions sharing the hepatic p65-suppression signature per the abstract · **abstract-level — full text not independently verified for the meclizine-specific result; correlational (shared signature, not demonstrated causality for meclizine's lifespan effect)** #gap/needs-replication #gap/no-fulltext-access

[^gohil2013]: doi:10.1074/jbc.M113.489237 · PMID 24142790 · PMC3853286 · Gohil VM, Zhu L, Baker CD, Cracan V, Yaseen A, Jain M, Clish CB, Brookes PS, Bakovic M, Mootha VK · J Biol Chem 2013;288(49):35387–35395 · in-vitro + cell-based (multiple cell lines) · meclizine inhibits PCYT2 (a rate-limiting enzyme in the CDP-ethanolamine Kennedy pathway) → phosphoethanolamine accumulation → direct inhibition of mitochondrial respiration; inhibition is not specific to Complex I or Complex II; metabolic shift toward glycolysis observed via OCR/ECAR measurements; phosphoethanolamine identified as effector metabolite via gain-of-function experiments · Mootha lab (Broad Institute/Harvard)

[^zhuo2016]: doi:10.1016/j.freeradbiomed.2016.07.022 · Zhuo M, Gorgun MF, Englander EW · Free Radic Biol Med 2016;99:20–31 · in-vitro · model: dorsal root ganglion (DRG) neurons, hypoxia · meclizine rapidly enhances glycolysis; glycolytic augmentation required for neuroprotection against hypoxia-induced mitochondrial compromise; reduces oxidative stress · extends Gohil 2013 mechanism to neuronal context

[^lee2024]: doi:10.1161/STROKEAHA.123.044397 · Lee JH et al. (Ayata C group) · Stroke 2024;55:1370–1380 · in-vivo · model: mouse focal cerebral ischemia (MCAO) · (S)-meclizine pretreatment reduces infarct volume; mechanism proposed as metabolic preconditioning via OxPhos suppression; studies (S)-enantiomer specifically · abstract-only verification

[^ghazal2025]: PMID 40950028 · Ghazal N et al. (Kwong JQ group) · bioRxiv preprint 2025 (not peer-reviewed) · in-vivo · model: SLC25A3 knockout mice (primary mitochondrial cardiomyopathy) · chronic meclizine treatment attenuated cardiac hypertrophy and improved systolic function via MICOS upregulation + NAD+/NADH redox restoration; notably suppressed (not elevated) glycolytic enzyme expression — challenges Gohil 2013 glycolytic-shift hypothesis as universal mechanism · **preprint: not peer-reviewed; results should be weighted accordingly**

[^matsushita2025]: doi:10.1007/s00223-025-01449-8 · Matsushita M et al. (Imagama S group) · Calcif Tissue Int 2025;116(1):143 (PMID 41326861) · Phase 2 clinical trial, open-label single-arm, 4 sites in Japan · n=9 children with ACH aged 5–10 years; oral meclizine 12.5–25 mg/day for 26 weeks co-administered with GH therapy; no serious AEs; demonstrates tolerability of pharmacological meclizine doses in humans; mechanism in achondroplasia (inhibition of key signaling pathway in ACH, i.e. FGFR3 axis) is distinct from longevity work · does not validate longevity hypothesis
