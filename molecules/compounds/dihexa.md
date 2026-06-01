---
type: compound
aliases: [N-hexanoic-Tyr-Ile-(6) aminohexanoic amide, PNB-0408, HGF mimetic hexapeptide]
pubchem-cid: 129010512
chembl-id: null
drugbank-id: null
biologic: true
who-inn: null
molecular-formula: C27H44N4O5
molecular-weight-da: 504.7
mechanisms: [growth-factor-receptor-agonism, hgf-mimetic, c-met-agonism]
targets: ["[[c-met]]", "[[hgf]]"]
hallmarks: []
clinical-stage: preclinical
human-evidence-level: none
translation-gap: preclinical-only
next-experiment: "Phase 1 safety/tolerability trial with tumorigenicity biomarker panel (serum AFP, CEA, c-Met phospho-status in PBMCs) and dose-escalation in healthy older adults; minimum 6-month follow-up before any efficacy endpoints are added."
clinical-trials-active: 0
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "McCoy 2013 (10.1124/jpet.112.199497) verified end-to-end against full PDF (PMC3533412). Benoist 2014 retraction confirmed via DOI lookup (title prefixed RETRACTED). Wright/Harding 2015 review (10.1016/j.pneurobio.2014.11.004) is closed-access (not_oa); review-level claims from that paper are not independently verified — tagged accordingly. PubChem CID 129010512 identity fields confirmed via REST API."
---


# Dihexa

A synthetic hexapeptide peptidomimetic derived from angiotensin IV by the Wright/Harding laboratory (Washington State University). Dihexa was designed to improve the metabolic stability and blood-brain-barrier penetrance of the parent angiotensin IV analog norleucine1-angiotensin IV (Nle1-AngIV), which had procognitive properties but was pharmacokinetically unsuitable as a drug candidate. The compound has been reported to promote hippocampal synaptogenesis and reverse cognitive deficits in scopolamine-treated and aged rats. **No human studies have been conducted.** The compound has a very thin safety database relative to the potency claims made in its promotional framing, and — critically — the primary mechanistic paper describing its c-Met/HGF mechanism of action has been retracted.

## Identity

- **PubChem CID:** 129010512
- **InChIKey:** XEUVNVNAVKZSPT-JTJYXVOQSA-N
- **IUPAC name:** (2S,3S)-N-(6-amino-6-oxohexyl)-2-[[(2S)-2-(hexanoylamino)-3-(4-hydroxyphenyl)propanoyl]amino]-3-methylpentanamide
- **Molecular formula:** C27H44N4O5
- **Molecular weight:** 504.7 Da
- **ChEMBL ID:** Not indexed in ChEMBL as of 2026-05-09 #gap/needs-canonical-id
- **DrugBank ID:** Not indexed
- **Class:** synthetic peptidomimetic hexapeptide; angiotensin IV derivative
- **Sequence logic:** Hexanoyl-cap (N-terminus) — Tyrosine — Isoleucine — 6-aminohexanoic amide (C-terminus). The hexanoyl N-cap and C-terminal aminohexanoic amide replace the charged termini of the parent peptide to improve lipophilicity and BBB penetrance.
- **Structural note:** Dihexa is described as a peptidomimetic rather than a strict peptide — the N- and C-terminal modifications and the aminohexanoic amide (non-proteinogenic) linker substantially alter its pharmacokinetic profile relative to a standard dipeptide. The user-provided alias "N-hexanoic acid–Tyr–Ile–(6) aminohexanoic amide" is accurate. The alias "PNB-0408" appears in some sources but the naming provenance is unclear.

## Mechanism of action

**Proposed mechanism (partially supported, primary mechanistic source retracted):**

The Wright/Harding group proposed that dihexa binds directly to hepatocyte growth factor (HGF) and augments HGF-induced dimerization of the c-Met receptor (MET receptor tyrosine kinase), thereby potentiating c-Met phosphorylation and downstream signalling (PI3K-AKT and MAPK pathways). The net downstream effect claimed is induction of dendritic spine formation (spinogenesis) and functional synapse formation (synaptogenesis) in hippocampal neurons. This mechanism framing appeared in the 2014 Benoist et al. paper [^benoist2014-retracted], which has since been retracted.

The pre-retraction mechanistic chain was:

```
Dihexa + HGF → augmented HGF dimerization → c-Met phosphorylation
→ PI3K/AKT + MAPK activation → dendritic spinogenesis → synaptogenesis
→ spatial memory consolidation (Morris water maze)
```

**What the non-retracted literature does establish [^mccoy2013] [^benoist2011]:**
- N- and C-terminal modifications to the Nle1-AngIV tripeptide core (Nle-Tyr-Ile) yield compounds with procognitive activity in the scopolamine-impairment model and in aged rats
- Dihexa (N-hexanoyl-Tyr-Ile-(6) aminohexanoic amide) is orally active and blood-brain-barrier permeable in rats (BBB penetrance confirmed by brain/blood radiotracer ratio; oral efficacy confirmed at 2.0 mg/kg/day)
- Dihexa reverses scopolamine-induced spatial learning deficits in the Morris water maze via i.c.v. (0.1–1 nmol), i.p. (0.05–0.50 mg/kg), and oral (1.25–2.0 mg/kg) routes in Sprague-Dawley rats (n=8–10/group)
- Dihexa increases hippocampal dendritic spine density ~3-fold over vehicle in vitro (10⁻¹² M, dissociated neonatal rat neurons, n=200 dendritic segments, P<0.001) and induces functional synapses (1.6-fold mEPSC frequency increase, n=29 cells, P<0.001)
- Dihexa improves spatial learning in 24-month-old aged Sprague-Dawley rats at 2 mg/kg/day oral (n=6, Mann-Whitney U, P<0.03)

**What is NOT established by non-retracted literature (full-text PDF review of McCoy 2013 confirmed):**
- The precise c-Met / HGF binding mechanism — McCoy 2013 explicitly describes this as based on "unpublished data" (C.C. Benoist, Kawas LH, and Harding JW, unpublished) and cites four recent articles (Yamamoto et al. 2010; Kawas et al. 2011, 2012; Wright et al. 2012) as the source of the HGF/c-Met hypothesis; this mechanism was never established in a surviving, peer-reviewed primary source — the Benoist 2014 paper that attempted to establish it was retracted #gap/needs-replication
- Any specific potency ratio relative to BDNF — **confirmed absent from McCoy 2013 full text**; the paper does not compare dihexa to BDNF anywhere #gap/unsourced
- Any comparison to donepezil — **confirmed absent from McCoy 2013 full text**; the discussion section mentions a planned future comparison to approved anti-dementia therapeutics as a next step, indicating no such comparison had been conducted as of publication #gap/unsourced
- Efficacy in a genetic or amyloid-pathology rodent model of Alzheimer's disease — the surviving studies use scopolamine-impairment (pharmacological, i.c.v. muscarinic blockade) and aged (non-transgenic) rat models, not Tg2576, APP/PS1, or 3xTg-AD models

**Retraction note (doi:10.1124/jpet.114.218735):**
> ⚠️ [RETRACTED SOURCE] Benoist CC, Kawas LH, Zhu M, et al. "The procognitive and synaptogenic effects of angiotensin IV-derived peptides are dependent on activation of the hepatocyte growth factor/c-Met system." J Pharmacol Exp Ther. 2014;351(2):390-402. Retracted November 1, 2014. Expression of Concern added September 22, 2021. Erratum April 1, 2025. The retraction reason is not publicly disclosed in the article metadata; the Expression of Concern suggests ongoing integrity concerns. **Do NOT cite this paper as primary evidence for the c-Met/HGF mechanism.**

The Wright/Harding 2015 review [^wright2015review] summarizes the group's hypothesis that the HGF/c-Met system is a therapeutic target for Alzheimer's disease and discusses dihexa as a first-in-class compound. Being a narrative review, it carries only review-level evidentiary weight; its mechanistic claims ultimately depend on the retracted 2014 data.

#gap/no-mechanism — Following the retraction of the primary mechanism paper, the molecular target responsible for dihexa's behavioral effects in rodents is not independently established by a surviving, peer-reviewed primary source.

## BBB penetrance and pharmacokinetics

McCoy et al. 2013 [^mccoy2013] published formal pharmacokinetic data for dihexa in Sprague-Dawley rats (Table 3 of the paper, N=3–4):

- **Serum stability (in vitro):** half-life 335.5±9.5 min (vs Nle1-AngIV: 1.42±0.26 min) — a ~235-fold improvement in serum stability
- **i.v. half-life (t½):** 18,256±7,787 min (≈12.68 days) — exceptionally long circulating half-life attributed to low intrinsic clearance and extensive tissue binding
- **Volume of distribution (Vd):** 54.4±14.8 L/kg — very high, indicating extensive distribution outside the central blood compartment and/or tissue binding
- **Clearance (CL):** 0.0026±0.0007 L/min/kg
- **Plasma concentration at time zero (C₀):** 87.3±31.9 µg/ml (i.v.)
- **Intrinsic microsomal clearance (CLint):** 2.72 µl/min/mg (very low; assessed using pooled male rat liver microsomes)
- **Predicted LogP:** 2.25; predicted intestinal permeability (Peff): 1.78; predicted fraction unbound to plasma proteins: 22.59%

**BBB penetrance:** Confirmed in vivo by carotid cannula infusion with [³H]dihexa plus [¹⁴C]inulin (vascular space marker). All brain regions examined showed [³H/¹⁴C] ratios above blood levels (P<0.001 vs blood; no brain region differed from any other, P>0.05; n=4), establishing that dihexa is concentrated in brain tissue relative to blood.

**Oral bioavailability fraction:** Not formally calculated. Effective oral doses (1.25–2.0 mg/kg/day) produced behavioral rescue in the scopolamine and aged rat models, demonstrating adequate oral bioavailability for CNS effects in rats. Measured human oral bioavailability remains unknown. #gap/dose-response-unclear

The physicochemical properties — MW 504.7 Da with N-hexanoyl cap (increasing lipophilicity) and C-terminal amide (reducing charge) — are consistent with improved gut permeability relative to native angiotensin IV. The model predicts an octanol/water partition coefficient of 177.8.

## Preclinical efficacy

### Scopolamine-impairment model

McCoy et al. 2013 [^mccoy2013] tested dihexa via three delivery routes in Sprague-Dawley rats pre-treated with scopolamine (70 nmol i.c.v. in 2 µl aCSF), n=8–10 per group. All three routes produced a dose-dependent reversal of scopolamine-induced spatial learning deficits in the Morris water maze (8-day acquisition, day-9 probe trial):

- **i.c.v.:** 0.1 nmol and 1 nmol in 2 µl aCSF; the 1-nmol group was not significantly different from vehicle controls (P>0.05) and both differed from the scopolamine group (P<0.001).
- **i.p.:** 0.05, 0.25, and 0.50 mg/kg; the 0.50 mg/kg group was not different from vehicle control (P>0.05).
- **Oral (gavage):** 1.25 and 2.0 mg/kg; the 2.0 mg/kg dose completely reversed scopolamine-dependent learning deficits (P<0.001 vs scopolamine); 1.25 mg/kg partially reversed on days 3–8 (P<0.05).

Statistical test: two-way ANOVA with repeated measures; post-hoc Newman-Keuls (scopolamine/compound groups) or one-way ANOVA; significance level P<0.05.

### Aged rat model

McCoy et al. 2013 [^mccoy2013] administered oral dihexa (2 mg/kg/day by gavage, suspension in isotonic NaCl) to 24-month-old mixed-sex Sprague-Dawley rats (3 male and 3 female per group; n=6) on a daily basis for 8 days of water maze testing (5 trials/day). The learning curve of treated rats was significantly different from that of untreated aged rats (Mann-Whitney U test, P<0.03). Note: animals were not pre-screened for cognitive deficits; the authors state this substantially underestimates the effect of dihexa. Control rats: 3-month-old Sprague-Dawley rats were used as the comparator for normal performance (not the same study as scopolamine experiments).

### Synaptogenesis assay

McCoy et al. 2013 [^mccoy2013] assessed spinogenesis and synaptogenesis in three systems:

**Dissociated hippocampal neurons (neonatal rat, in vitro):** Neurons (2×10⁵ cells/cm²) from P1 Sprague-Dawley rats were treated with 10⁻¹² M dihexa from DIV7 for 5 days (fixed DIV12). Dihexa produced a near 3-fold increase in dendritic spine number: mean 41 spines per 50-µm dendrite length vs 15 spines for vehicle (n=200 dendritic segments from ≥10 neurons; P<0.001 by one-way ANOVA + Tukey post-hoc). Nle1-AngIV (10⁻¹² M) produced 32 spines per 50 µm. Spine-head width: dihexa 0.80 µm, Nle1-AngIV 0.87 µm, vehicle 0.67 µm. Acute (30-minute) 10⁻¹² M dihexa treatment on DIV12 also significantly increased spines (n=60 dendritic segments, P<0.001).

**Organotypic hippocampal slice cultures (neonatal rat, P4):** 10⁻¹² M dihexa or Nle1-AngIV for 2 days produced 11 spines vs 7 spines per 50-µm dendrite in vehicle controls (n=13–20 dendritic segments; P<0.01).

**Synaptic marker co-localization (functional synapses):** Newly formed spines were immunostained for VGLUT1 (glutamatergic presynaptic), synapsin (universal presynaptic), and PSD-95 (postsynaptic density). Percent correlation of new spines with all three markers was not significantly different from control-treated neurons (P>0.05; n=25 dendritic segments), indicating the new spines contained existing synaptic machinery and were functional.

**mEPSC recordings:** Mean mEPSC frequency in dihexa-treated neurons was 4.82±0.34 Hz (n=29 cells) vs 3.06±0.23 Hz in vehicle controls (n=33 cells); P<0.001 vs control; this represents a 1.6-fold increase. Nle1-AngIV produced 5.27±0.43 Hz (1.7-fold increase, n=25; P<0.001). No differences in amplitude, rise, or decay times were observed.

### The "far more potent than BDNF" claim — status: NOT IN ANY SURVIVING PRIMARY SOURCE

A frequently repeated framing in secondary sources and community discussions is that dihexa is "seven million times more potent than BDNF" at driving synapse formation. **This specific potency ratio does not appear anywhere in McCoy 2013 (confirmed by full-text PDF review).** The McCoy 2013 paper does not compare dihexa to BDNF at all — it uses Nle1-AngIV as the comparator. The claim is not in the Benoist 2011 paper (which concerns the parental structural series, not dihexa specifically). The Wright/Harding 2015 review is closed-access and could not be verified directly, but being a narrative review of the group's own work, any such ratio would trace back to a primary study — and no primary study in the Wright/Harding series contains this comparison based on full-text review of the surviving indexed papers. The claim most likely originates from the retracted Benoist 2014 paper or from conference presentations / promotional materials, neither of which constitutes citable primary evidence. **This claim must not be stated as fact and cannot be sourced to any surviving, non-retracted primary publication.** #gap/unsourced

| Dimension | Status |
|---|---|
| Assay system identified? | No — claim not found in any non-retracted primary source |
| Potency ratio confirmed in non-retracted source? | No — confirmed absent from McCoy 2013 full text |
| Replicated by independent group? | No |
| Relevant to in vivo human CNS concentrations? | Unknown |

### The "outperformed donepezil" claim — status: NOT IN ANY SURVIVING PRIMARY SOURCE

User framing states that dihexa "outperformed donepezil" in rat AD models. **This comparison does not appear anywhere in McCoy 2013 (confirmed by full-text PDF review).** No donepezil arm or donepezil comparison was included in any behavioral experiment in McCoy 2013. The paper's stated future direction ("a direct comparison of dihexa to several approved anti-dementia therapeutics using rodent dementia models") indicates this comparison was planned but not yet conducted as of the paper's writing. The donepezil comparison therefore either (a) appears only in the retracted Benoist 2014 paper's full text, (b) is in conference materials, or (c) has been fabricated in secondary/promotional sources. **The donepezil comparison has no surviving, non-retracted primary source and must not be stated as fact.** #gap/unsourced

## Safety — tumorigenicity is the central concern

**c-Met / MET as an oncogenic receptor:** MET encodes the receptor tyrosine kinase for HGF. Somatic gain-of-function mutations, amplification, and overexpression of MET are established oncogenic drivers in hepatocellular carcinoma, lung adenocarcinoma, gastric cancer, papillary renal carcinoma, and others. Multiple MET inhibitors (cabozantinib, capmatinib, tepotinib, savolitinib) are FDA-approved oncology drugs — demonstrating that MET activation drives tumour growth. Chronic agonism of c-Met by a compound that potentiates its signalling therefore carries a plausible, biologically grounded tumorigenicity risk. This is not a hypothetical concern — it follows directly from the oncogenic biology of the target.

**Published safety data for dihexa:** As of 2026-05-09, no peer-reviewed long-term safety study, no dedicated carcinogenicity study, and no genotoxicity study for dihexa has been published in PubMed-indexed literature. #gap/long-term-unknown

**Acute tolerability:** The existing rat studies (scopolamine model, aged model) did not report acute toxicity, but these are short-duration behavioral pharmacology experiments — inadequate to assess carcinogenicity.

**Why no human trials:** No registered clinical trials for dihexa appear in ClinicalTrials.gov (zero results as of 2026-05-09 query). Possible reasons include:
- The retraction of the primary mechanism paper, which would deter IND application
- Absence of formal IND-enabling toxicology package (GLP carcinogenicity, genotoxicity)
- Limited commercial development interest post-retraction
- The patent landscape for the Wright/Harding-derived compound may be unresolved

**What a responsible development path would require:**
1. Two-year rodent carcinogenicity studies (rat + mouse) with histopathological evaluation of all tissues — mandatory FDA requirement before any Phase 1 trial
2. Ames test + chromosomal aberration / micronucleus test (ICH S2(R1))
3. A pharmacokinetic package with brain/plasma ratio in rodents, ADME profiling
4. A reproductive toxicology assessment (ICH S5)
5. Independent mechanistic replication of c-Met agonism by a second group, ideally using the non-retracted dataset as foundation

## Evidence table — hallmark linkage

No direct hallmark evidence available from current published literature. The speculative hallmark linkage would be:

| Hallmark | Putative connection | Evidence quality |
|---|---|---|
| [[altered-intercellular-communication]] | HGF/c-Met is a paracrine growth factor signalling system that declines with brain aging | Indirect; mechanism unconfirmed post-retraction |
| [[stem-cell-exhaustion]] | HGF supports neural progenitor cell function | Speculative; not demonstrated for dihexa specifically |

Hallmarks field is intentionally left empty (`hallmarks: []`) because no direct aging-hallmark link has been established with sufficient evidence. This is appropriate for a preclinical compound with a retracted mechanism paper.

## Context in the 12-peptide R36 cluster

Among the 12 peptides seeded in R36, dihexa has the thinnest safety-to-potency ratio. The most dramatic efficacy claims (7 million-fold BDNF potency, donepezil outperformance) that appear in promotional framing and secondary sources have **no surviving primary source** — both are confirmed absent from McCoy 2013 (the only fully intact non-retracted primary study), and likely originate from the retracted Benoist 2014 paper. What the primary literature actually supports is: dose-dependent reversal of scopolamine-induced MWM deficits via multiple routes in Sprague-Dawley rats, modest improvement in aged rat MWM performance (n=6), and in vitro spinogenesis/synaptogenesis at 10⁻¹² M in neonatal rat neurons. These are credible preclinical findings from a single group without independent replication, paired with a completely unknown safety profile and a retracted mechanism paper. Other R36 peptides with clearer mechanism-of-action paper trails and intact literature should be weighted more favorably until dihexa's mechanistic claims are independently confirmed.

## Classification

- **SENS strategy:** Not applicable to current SENS categories (neurogenesis stimulation is not a canonical SENS repair strategy)
- **Hallmark target:** None established (see above)
- **Intervention class:** [[frameworks/intervention-classes|growth-factor-receptor-agonism]] — new class added R36, dihexa as founding compound

## Limitations and gaps

- **Retracted primary mechanism paper** — the c-Met/HGF mechanism is unconfirmed by surviving literature #gap/needs-replication
- **BDNF potency claim has no surviving primary source** — confirmed absent from McCoy 2013 full text (PDF reviewed); not present in Benoist 2011; likely originates from retracted Benoist 2014 or promotional materials only #gap/unsourced
- **Donepezil comparison has no surviving primary source** — confirmed absent from McCoy 2013 full text (PDF reviewed); McCoy 2013 discussion explicitly flags a dihexa-vs-approved-therapeutics comparison as planned future work, confirming it had not been done #gap/unsourced
- **No human evidence** — preclinical only, rodent models #gap/needs-human-replication
- **No carcinogenicity data** — c-Met agonism has clear oncogenic biology; no safety studies published #gap/long-term-unknown
- **Human pharmacokinetics absent** — rodent PK is published (McCoy 2013: serum t½=335 min, i.v. circulating t½≈12.7 days, Vd=54.4 L/kg, BBB penetrance confirmed); human PK, oral bioavailability fraction, and brain/plasma ratio in primates are unknown #gap/dose-response-unclear
- **ChEMBL not indexed** — bioactivity data from ChEMBL not available; may limit target affinity cross-check #gap/needs-canonical-id
- **Independent replication absent** — all primary research appears to be from the single Wright/Harding group at Washington State University; no independent group has published a replication

## Footnotes

[^mccoy2013]: doi:10.1124/jpet.112.199497 · McCoy AT, Benoist CC, Wright JW, Kawas LH, Bule-Ghogare JM, Zhu M, Appleyard SM, Wayman GA, Harding JW · *J Pharmacol Exp Ther* 2013;344(1):141-154 · PMC3533412 · in-vivo (Sprague-Dawley rat) + in-vitro (dissociated + organotypic hippocampal neurons, neonatal rat) · model: scopolamine-impairment MWM (n=8–10/group) + 24-month-old aged rat MWM (n=6, oral 2 mg/kg/day, P<0.03 Mann-Whitney) + hippocampal spinogenesis/synaptogenesis (10⁻¹² M, n=200 dendrite segments, ~3-fold spine increase P<0.001; mEPSC frequency 1.6-fold increase n=29 P<0.001) · BBB penetrance confirmed by [³H]dihexa brain-accumulation study · PK: serum t½=335 min, i.v. circulating t½≈12.7 days, Vd=54.4 L/kg · **No BDNF comparison; no donepezil comparison** · HGF/c-Met mechanism described as "unpublished data" (not established finding) · not retracted · PDF verified 2026-05-09

[^benoist2011]: doi:10.1124/jpet.111.182220 · Benoist CC, Wright JW, Zhu M, Appleyard SM, Wayman GA, Harding JW · *J Pharmacol Exp Ther* 2011;339(1):35-44 · in-vivo + in-vitro · model: Sprague-Dawley rat, scopolamine MWM + hippocampal spinogenesis assay · identifies the procognitive core structure of Nle1-AngIV and correlates peptide procognitive activity with spine augmentation · does not itself demonstrate dihexa specifically (dihexa was developed in McCoy 2013 as the metabolically stabilized analog) · not retracted

[^wright2015review]: doi:10.1016/j.pneurobio.2014.11.004 · Wright JW, Kawas LH, Harding JW · *Prog Neurobiol* 2015;123:73-87 · review · mechanism-review of HGF/c-Met as an Alzheimer's disease therapeutic target; discusses dihexa as a first-in-class AngIV analog; mechanistic claims ultimately depend on the retracted 2014 Benoist data · **closed-access (not_oa per a local paper archive); full text not verified** #gap/no-fulltext-access · review-level evidence weight only; published before the Benoist 2014 Expression of Concern (2021) and erratum (2025)

[^benoist2014-retracted]: **RETRACTED** — doi:10.1124/jpet.114.218735 · Benoist CC, Kawas LH, Zhu M, Tyson KA, Stillmaker L, Appleyard SM, Wright JW, Wayman GA, Harding JW · *J Pharmacol Exp Ther* 2014;351(2):390-402 · **RETRACTED November 1, 2014. Expression of Concern added September 22, 2021. Erratum April 1, 2025.** Originally claimed: dihexa binds HGF and induces c-Met phosphorylation; HGF antagonist (NK4) blocks dihexa's procognitive effect in vivo; identifies HGF/c-Met as the mechanism of action. **Do NOT cite this paper for any biological claim. The retraction invalidates its mechanistic findings until independently replicated.**
