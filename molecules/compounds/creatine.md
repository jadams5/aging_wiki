---
type: compound
aliases: [creatine monohydrate, methylguanidoacetic acid, N-methylguanidinoacetic acid, Cr, CrM]
pubchem-cid: 586
inchikey: CVSVTCORWBXHQV-UHFFFAOYSA-N
chembl-id: CHEMBL283800
drugbank-id: null
cas-number: 57-00-1
mechanisms: [phosphocreatine-atp-buffering, satellite-cell-activation, mitochondrial-bioenergetics, possible-neuroprotection]
targets: ["[[skeletal-muscle]]", "[[mitochondria]]", "[[satellite-cells]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[stem-cell-exhaustion]]", "[[deregulated-nutrient-sensing]]"]
clinical-stage: supplement
human-evidence-level: limited
half-life: "~3 h plasma (creatine); excreted renally as creatinine"
translation-gap: phase-3-rct-needed
next-experiment: "Phase 3 RCT of creatine + RT vs RT alone in older adults (>=70 yr) with hard functional endpoints (falls, ADLs, frailty index); n>=1000, >=2 yr."
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Chilibeck 2017 (10.2147/OAJSM.S123529), Kreider 2017 ISSN position stand (10.1186/s12970-017-0173-z), Prokopidis 2022 (10.1093/nutrit/nuac064), Forbes 2018 BMD meta-analysis (10.3389/fnut.2018.00027), and Forbes 2022 letter (10.1159/000520967) verified against full PDFs. Devries 2014 (10.1249/MSS.0000000000000220) and Avgerinos 2018 (10.1016/j.exger.2018.04.013) are closed-access (not_oa) — claims derived from those sources tagged #gap/no-fulltext-access. Dangott 2000 (doi:10.1055/s-2000-8848) and Forbes 2021 review (doi:10.1080/19390211.2021.1877232) are also closed-access; not verified. Canonical-DB identity fields (PubChem CID 586, ChEMBL CHEMBL283800, InChIKey, CAS) were cross-checked via REST API at extraction but not re-verified in this pass. R34 backfill 2026-05-08: PubMed-recency search added Liu 2025 (10.1186/s11556-025-00392-9, gold OA), Sharifian 2025 (10.1186/s11556-025-00384-9, gold OA), Marshall 2026 (10.1093/nutrit/nuaf135, hybrid OA), Davies 2024 (10.1002/jpen.2607) — abstracts verified via PubMed efetch only; full-PDF verification deferred."
literature-checked-through: 2026-05-08
---

# Creatine

An endogenous guanidino compound and the body's primary short-term ATP-resynthesis buffer, found at highest concentrations in [[skeletal-muscle]] (~95% of the ~120 g body pool). Studied in the context of aging primarily for attenuation of [[sarcopenia]] when combined with resistance training, and more recently for cognitive aging and [[mitochondrial-dysfunction]] support. Available commercially as creatine monohydrate (CrM); the most-researched and cheapest form. Classified as a dietary supplement in the US and EU; not an approved pharmaceutical.

## Identity

- **PubChem CID:** 586
- **InChIKey:** CVSVTCORWBXHQV-UHFFFAOYSA-N
- **CAS:** 57-00-1
- **ChEMBL:** CHEMBL283800
- **IUPAC name:** 2-[carbamimidoyl(methyl)amino]acetic acid
- **Molecular formula:** C₄H₉N₃O₂
- **Molecular weight:** 131.13 g/mol
- **Class:** guanidino compound; non-proteinogenic amino acid derivative
- **Solubility:** moderately water-soluble; ~13 g/L at 25°C; monohydrate form improves dispersibility
- **Biosynthesis:** endogenous; rate-limiting step is AGAT (arginine:glycine amidinotransferase) in the kidney → guanidinoacetate → methylated by GAMT (guanidinoacetate N-methyltransferase) in the liver; final uptake into muscle via SLC6A8 (creatine transporter, CrT)

## Mechanism of action

### Phosphocreatine / ATP buffering (primary mechanism)

Inside muscle and neurons, creatine is phosphorylated by creatine kinase (CK; CKMT1/2 mitochondrial isoforms; CKM cytosolic muscle isoform) to form phosphocreatine (PCr). PCr donates its phosphate group to ADP to regenerate ATP during bouts of high-intensity effort. This is the phosphocreatine shuttle:

```
PCr + ADP  ←→  Cr + ATP     (creatine kinase)
```

The resting muscle PCr:Cr ratio is ~3:2 (saturated muscle creatine ~160 mmol/kg dry weight). Supplementation increases total creatine pool by ~20–40% in creatine-naive individuals and shifts the ratio toward more available PCr [^kreider2017]. In aging muscle, mitochondrial CK activity declines and cytosolic CK isoform expression shifts — creatine supplementation may partially compensate for this bioenergetic deficit. #gap/no-mechanism (mechanism linking supplementation to resistance-training hypertrophy gains in older adults specifically is incompletely characterized)

### Satellite cell activation

Creatine supplementation in rodents under conditions of compensatory hypertrophy (synergist ablation model) increased BrdU-labeled myofiber nuclei — a readout of satellite-cell proliferation — compared with hypertrophy alone [^dangott2000]. This suggests creatine may enhance muscle regenerative capacity by supporting [[satellite-cells|satellite-cell]] proliferation under mechanical load. Whether this mechanism contributes to the lean-mass gains seen in human RCTs is not established. #gap/no-mechanism #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — CK/PCr shuttle is universal in vertebrate muscle |
| Phenotype conserved in humans? | partial — satellite cell activation shown in rodent model only |
| Replicated in humans? | no — no direct human satellite-cell-biopsy evidence for creatine's effect |

### Mitochondrial bioenergetics

Mitochondrial CK isoforms (CKMT1, CKMT2) are structurally coupled to the adenine nucleotide translocase (ANT) and the outer mitochondrial membrane; the PCr shuttle transfers high-energy phosphate from the mitochondrial matrix to cytosolic sites of ATP utilization. This compartment-to-compartment transfer is thought to be particularly relevant in cardiomyocytes and slow-twitch oxidative muscle fibers — both critical to age-related functional decline. The ISSN position stand notes creatine may support mitochondrial biogenesis markers in some contexts, but direct mechanistic evidence in aged humans is limited [^kreider2017]. #gap/no-mechanism

### Possible neuroprotection

Creatine and PCr are present in the brain (~5–10 mmol/kg, well below muscle concentrations). The brain PCr pool is harder to increase via oral supplementation — most brain-imaging studies find modest (~5–15%) increases in brain creatine content after supplementation [^kreider2017]. Proposed neuroprotective mechanisms include: buffering neuronal ATP during energy stress (glutamate excitotoxicity models), reducing oxidative stress markers, and supporting mitochondrial membrane potential in neurons. Animal models of Parkinson's and Huntington's disease show attenuation of motor deficits with creatine pre-treatment; relevance to human neurodegeneration is not established [^kreider2017]. #gap/needs-human-replication

## Effects on aging hallmarks

| Hallmark | Proposed effect | Quality of evidence |
|---|---|---|
| [[mitochondrial-dysfunction]] | PCr shuttle supports OXPHOS coupling in aging muscle; CKMT expression declines with age | Mechanistic + indirect; no human RCT specifically on mitochondrial endpoints |
| [[stem-cell-exhaustion]] | Creatine may support [[satellite-cells]] proliferation under load | Rodent only [^dangott2000]; not confirmed in aged human biopsies #gap/needs-human-replication |
| [[deregulated-nutrient-sensing]] | High-intensity exercise enabled by creatine → ↑[[ampk]] activation transiently during/after exercise | Indirect; not a direct target of creatine |
| [[chronic-inflammation]] | Some RCT subsets report ↓ inflammatory markers post-exercise with creatine vs placebo | Low evidence; not a primary mechanism |
| [[loss-of-proteostasis]] | Possible indirect — creatine improves exercise performance → greater mechanical stimulus → ↑mTOR-mediated protein synthesis | Indirect; mechanistically reasonable but not tested as primary outcome |

## Pharmacokinetics

### Loading and maintenance dosing

**Standard loading protocol:** 20 g/day divided into 4 × 5 g doses for 5–7 days saturates muscle creatine stores (~160 mmol/kg dry weight; ~20 mmol/kg above baseline). This is the fastest route to saturation [^kreider2017].

**Maintenance dose:** 3–5 g/day maintains saturated stores after loading (or after ~4 weeks of unsupplemented accumulation from lower chronic doses).

**Low-dose chronic protocol:** 3 g/day for ~28 days reaches the same saturation endpoint without the loading phase; preferred by some older-adult RCTs to avoid GI discomfort from bolus dosing [^kreider2017].

**Bioavailability:** oral bioavailability is high (~100% for CrM); peak plasma creatine ~2 h post-ingestion; plasma half-life ~3 h. Insulin promotes muscle uptake (explaining why co-ingestion with carbohydrate or carbohydrate+protein increases uptake rate).

### Renal excretion and creatinine biomarker artifact

Creatine is non-enzymatically and irreversibly cyclized to creatinine in plasma and excreted by the kidney. Creatinine is routinely used as a renal filtration biomarker (eGFR). **During creatine loading, serum creatinine transiently rises** because of the increased creatinine load from elevated muscle creatine turnover — not from reduced GFR. This can be misinterpreted as acute kidney injury on routine labs [^kreider2017]. Clinicians ordering kidney panels during loading phases should note this artifact.

### Older adults: altered distribution

Muscle creatine content declines with age (~10–15% lower in older vs. younger adults, though estimates vary); skeletal muscle mass also declines. Combined, this means the total body creatine pool is smaller in older adults, and the absolute benefit of loading may be proportionally maintained or enhanced on a per-lean-mass basis. Uptake kinetics are not substantially different but dietary creatine intake tends to be lower in older adults (lower meat consumption) [^forbes2021review].

## Dose-response evidence (resistance training + creatine in older adults)

| Study | Design | N | Population | Dose / Duration | Outcomes |
|---|---|---|---|---|---|
| Chilibeck et al. 2017 [^chilibeck2017] | Meta-analysis, 22 RCTs | 721 | Mean age 57–70 yr | Various; 7–52 weeks + RT | Lean mass +1.37 kg (95% CI 0.97–1.76, p<0.00001); chest press SMD=0.35 (p=0.0002); leg press SMD=0.24 (p=0.01) |
| Devries & Phillips 2014 [^devries2014] | Meta-analysis, n RCTs | 357 | Mean age ~63–64 yr | Mean 12.6 ± 4.9 weeks + RT | Fat-free mass ↑ (p<0.0001); chest press p=0.004; leg press p=0.02; total body mass p=0.004 — #gap/no-fulltext-access (closed-access; unverified) |
| Prokopidis et al. 2022 [^prokopidis2022] | Meta-analysis, 8 RCTs | 225 (122 creatine, 118 placebo) | Healthy individuals (incl. 66–76 yr subgroup) | 2.2–20 g/day; 5 days – 24 weeks | Memory SMD=0.29 (95% CI 0.04–0.53, I²=66%, p=0.02) overall; older adult subgroup (66–76 yr) SMD=0.88 (95% CI 0.22–1.55, I²=83%, p=0.009) |
| Avgerinos et al. 2018 [^avgerinos2018] | Systematic review, 6 RCTs | 281 | Healthy adults | Various | Short-term memory and reasoning may improve; effect in young individuals small/null; vegetarians > meat-eaters — #gap/no-fulltext-access (closed-access; unverified) |
| Davies et al. 2024 [^davies2024] | Meta-analysis, 33 RCTs | 1,076 | Older adults + adults with chronic disease | Various | Sit-to-stand SMD=0.51 (95% CI 0.01–1.00, I²=62%, p=0.04); upper-body strength SMD=0.25 (p=0.01); handgrip SMD=0.23 (p=0.04); lean tissue mass MD=+1.08 kg |
| Sharifian et al. 2025 [^sharifian2025] | Meta-analysis, 20 RCTs | 1,093 (69% female) | Older adults | Various + exercise | 1RM MD=+2.12 kg (Z=3.26, p=0.001); body fat % MD=−0.55% (p=0.026); total-body BMD ns (MD=+0.009 g/cm², p=0.557) |
| Liu et al. 2025 [^liu2025] | Meta-analysis, 8 RCTs | 482 | Aged adults, RT 8–104 wk | Various + RT | Lower-limb strength SMD=0.29 (p=0.05); lean tissue mass SMD=0.27 (p=0.03); upper-body strength ns overall but SMD=0.45 (p=0.005) for ≤32-wk subgroup; lean mass SMD=0.57 (p=0.004) for ≤32-wk subgroup |
| Marshall et al. 2026 [^marshall2026] | Systematic review, 6 studies (cognition without RT) | 1,542 (55.7% female) | Healthy ≥55 yr | Various | 5/6 studies (83%) reported positive creatine–cognition association (memory, attention); 2 RCTs + 4 cross-sectional; only 1 study rated "good" methodological quality; the cognition-without-RT question remains under-tested |

**Key observation:** Both muscle meta-analyses (Chilibeck 2017, Devries 2014) tested creatine *combined with resistance training* — not creatine alone. The 2024–2025 meta-analyses (Davies 2024, Sharifian 2025, Liu 2025) extend the lean-mass / strength conclusion to a broader sample base (~2,650 participants pooled across the three) with directionally consistent effect sizes. Liu 2025's duration-stratified subgroup analysis raises the possibility that effects are larger in interventions ≤32 weeks — a pattern consistent with rapid muscle-pool saturation and a plateau thereafter; Liu 2025 did not report longer-than-32-wk subgroup as null, only smaller. The cognition-without-RT question (Marshall 2026) remains hypothesis-generating. #gap/dose-response-unclear

## Human evidence

### Sarcopenia and lean mass (primary aging indication)

Creatine combined with resistance training produces significant lean tissue mass and strength gains in older adults across two independent meta-analyses with overlapping but distinct study pools [^chilibeck2017] [^devries2014]. The Chilibeck 2017 meta-analysis (22 RCTs, n=721, mean age 57–70 yr, 7–52 weeks) is currently the largest and most comprehensive synthesis.

Effect sizes are modest but clinically meaningful: +1.37 kg lean mass and SMD 0.24–0.35 for lower/upper-body strength. Whether these translate to functional outcomes (gait speed, chair-stand time, falls) requires longer trials. Most included RCTs are 7–16 weeks; longer-term data (>1 year) are sparse. #gap/long-term-unknown

### Cognitive aging

Two systematic reviews suggest creatine supplementation may improve memory in older adults [^avgerinos2018] [^prokopidis2022]. The Prokopidis 2022 meta-analysis (n=225, 8 RCTs) found an older-adult-specific effect (SMD=0.88, 95% CI 0.22–1.55, I²=83%, p=0.009 for 66–76 yr, vs SMD=0.03, p=0.72 in young adults 11–31 yr), raising the hypothesis that older brains with lower baseline PCr reserves benefit more. Brain creatine pool is harder to load than muscle and responds more slowly — most cognitive-benefit studies use higher doses (5–20 g/day) or longer protocols.

**Subgroup effects by dietary background:** both reviews note larger effects in vegetarians and vegans (who have lower baseline muscle and brain creatine), and in sleep-deprived individuals — consistent with the deficit-replacement framing. #gap/contradictory-evidence — cognitive effects are inconsistent across studies and cognitive domains; most positive signals are in short-term memory and reasoning, with less evidence for executive function, attention, or processing speed.

### Bone density

Forbes 2018 brief meta-analysis concluded that creatine + resistance training does **not** produce greater bone mineral density gains compared with resistance training alone in older adults [^forbes2018bmd]. A 2022 letter by Forbes et al. (published online Nov 2021, Ann Nutr Metab 2022;78:183–186) surveyed 10 RCTs and concluded that a higher relative dose of creatine (≥0.1 g/kg/day, approximately 7–9 g/day) combined with RT appears necessary to see bone-health effects, whereas a flat dose of 5 g/day was insufficient in all 4 studies that used it [^forbes2022bmd]. The bone evidence base is small and currently does not support creatine as a bone-protective intervention. #gap/needs-replication

### ISSN position summary

The 2017 International Society of Sports Nutrition position stand (Kreider et al.) concludes that short- and long-term creatine monohydrate supplementation (up to 30 g/day for 5 years) is **safe and well-tolerated** in healthy individuals ranging from infants to the elderly, and that it is the most effective ergogenic nutritional supplement currently available for increasing high-intensity exercise capacity and lean body mass. It has potential therapeutic applications in neurological and metabolic conditions [^kreider2017].

## Safety profile

### Renal markers

The most common concern is renal harm. The ISSN position stand states: no compelling evidence of renal damage in healthy individuals supplementing at standard doses long-term [^kreider2017]. Key distinction:

- **Serum creatinine elevation during loading** = expected pharmacokinetic artifact (increased creatine → creatinine conversion), not GFR reduction.
- In individuals with **pre-existing renal disease**, caution is warranted; creatine supplementation should be avoided or monitored closely.
- Short-term high-dose loading (20 g/day × 5 days) in healthy adults has not been shown to alter true GFR (cystatin C-based GFR is unaffected) [^kreider2017].

### Gastrointestinal effects

Bolus loading doses (5 g at once) may cause GI discomfort (nausea, cramping) in some individuals. Splitting into smaller doses (e.g., 4 × 5 g/day with meals) or using a lower-dose chronic protocol (3 g/day × 28 days) reduces incidence.

### Water retention and body mass

Creatine loading increases intracellular water retention in muscle (~1–2 kg body mass during loading phase). This is not fat gain and resolves with cessation. In older adults with comorbidities (heart failure, hypertension), the transient fluid shift should be noted.

### Hair loss concern

A single RCT in rugby players (van der Merwe 2009, n=20) reported increased scalp DHT:testosterone ratio after creatine loading — raising concern about androgenic alopecia in susceptible individuals. This finding has **not been replicated** and the mechanism (creatine → DHT conversion) is not established biochemically. #gap/needs-replication #gap/no-mechanism The ISSN 2017 position does not categorize this as a confirmed adverse effect [^kreider2017].

### Interactions

Creatine is not metabolized by CYP enzymes and has no established pharmacokinetic drug interactions. Caffeine co-ingestion has been reported in some studies to blunt creatine's ergogenic effect (mechanism unclear); the ISSN notes this evidence is mixed [^kreider2017].

## Limitations and gaps

- #gap/dose-response-unclear — Both muscle meta-analyses tested creatine with resistance training; effects of creatine supplementation alone (without RT) in sarcopenic older adults are not well characterized. Optimal dose, loading protocol, and timing for older adults specifically have not been established in prospective RCTs.
- #gap/long-term-unknown — Most RCTs are 7–16 weeks. Safety and efficacy data beyond 1 year in older adults are sparse; the longest safety dataset (~5 years) is from athlete populations, not older sedentary adults with age-related comorbidities.
- #gap/contradictory-evidence — Cognitive effects are inconsistent across domains (memory may improve; processing speed, attention, executive function less clear). Subgroup effects in vegetarians and sleep-deprived individuals suggest context-dependency that is not yet mechanistically understood.
- #gap/needs-replication — Hair/DHT concern (van der Merwe 2009) not independently replicated; not an established risk.
- #gap/needs-replication — Bone density findings are null in the existing meta-analysis; the Forbes 2022 finding that ≥0.1 g/kg/day (~7–9 g/day) is required to augment bone-health indices — versus the insufficient 5 g/day flat dose — has not been tested in a directly designed dose-response RCT.
- #gap/no-fulltext-access — Devries & Phillips 2014 (doi:10.1249/MSS.0000000000000220) and Avgerinos et al. 2018 (doi:10.1016/j.exger.2018.04.013) are closed-access; their quantitative claims on this page are sourced from abstracts only and have not been verified against full methods/results.
- #gap/needs-human-replication — Satellite cell activation by creatine is demonstrated in rodent compensatory hypertrophy model only; no human muscle biopsy RCT has directly confirmed this pathway in older adults.
- #gap/no-mechanism — The precise mechanism(s) by which creatine augments lean mass and strength gains from RT in older adults beyond ATP buffering (e.g., satellite cell involvement, mTOR signaling, myosin heavy-chain isoform shifts) are not established in human trials.
- No randomized trials with hard functional aging endpoints (mortality, hospitalization-free survival, validated frailty indices, activities of daily living) have been conducted; all endpoints to date are surrogate markers (lean mass, strength, cognitive battery scores).

## Cross-references

- [[sarcopenia]] — primary aging phenotype targeted; lean mass and strength effects most robustly documented
- [[skeletal-muscle]] — primary tissue of action; ~95% of body creatine resides here
- [[satellite-cells]] — proposed cellular mechanism for hypertrophy augmentation (rodent evidence)
- [[mitochondrial-dysfunction]] — PCr shuttle coupled to mitochondrial CK; potential bioenergetic support
- [[ampk]] — downstream of exercise enabled by creatine supplementation; not a direct creatine target
- [[mtor]] — downstream of resistance-exercise hypertrophy signaling; creatine may augment this indirectly
- [[deregulated-nutrient-sensing]] — metabolic context; creatine affects cellular energy charge ratios
- [[stem-cell-exhaustion]] — satellite cell pool decline with age; creatine may partially support regenerative capacity
- [[caloric-restriction]] — contrast: CR primarily modulates mTOR/AMPK/sirtuin; creatine primarily modulates PCr/CK axis; mechanistically distinct

## Footnotes

[^kreider2017]: [[studies/kreider-2017-creatine-issn-position]] · n=review/position-stand · review · model: humans (all ages); covers 30+ years of creatine literature · gold OA · doi:10.1186/s12970-017-0173-z

[^chilibeck2017]: [[studies/chilibeck-2017-creatine-lean-mass-meta-analysis]] · n=721 (22 RCTs) · meta-analysis · lean mass MD=+1.37 kg (95%CI 0.97–1.76, p<0.00001); chest press SMD=0.35 (95%CI 0.16–0.53, p=0.0002); leg press SMD=0.24 (95%CI 0.05–0.43, p=0.01) · model: humans mean age 57–70 yr, resistance training 7–52 wks · gold OA · doi:10.2147/OAJSM.S123529

[^devries2014]: [[studies/devries-2014-creatine-older-adults-meta-analysis]] · n=357 · meta-analysis · p<0.0001 (fat-free mass) · model: humans mean age ~63–64 yr, mean 12.6 wks RT · closed-access (not_oa) · doi:10.1249/MSS.0000000000000220 · #gap/no-fulltext-access

[^avgerinos2018]: [[studies/avgerinos-2018-creatine-cognitive-function-review]] · n=281 (6 RCTs) · systematic-review · model: healthy humans; vegetarian subgroup shows larger effect · closed-access (not_oa) · doi:10.1016/j.exger.2018.04.013 · #gap/no-fulltext-access

[^prokopidis2022]: [[studies/prokopidis-2022-creatine-memory-meta-analysis]] · n=225 (122 creatine, 118 placebo; 8 RCTs) · meta-analysis · SMD=0.29 (95%CI 0.04–0.53, I²=66%, p=0.02) overall; older adults (66–76 yr) SMD=0.88 (95%CI 0.22–1.55, I²=83%, p=0.009) · model: healthy individuals including 66–76 yr subgroup · hybrid OA · doi:10.1093/nutrit/nuac064

[^dangott2000]: [[studies/dangott-2000-creatine-satellite-cells]] · n=not stated (rodent) · in-vivo · model: rat synergist-ablation compensatory hypertrophy model · 160 citations · closed-access · doi:10.1055/s-2000-8848 · not_oa

[^forbes2021review]: [[studies/forbes-2021-creatine-muscle-bone-brain-review]] · n=review · review · model: humans (aging); narrative review · 35 citations · closed-access · doi:10.1080/19390211.2021.1877232 · not_oa

[^forbes2018bmd]: [[studies/forbes-2018-creatine-bone-density-meta-analysis]] · n=193 (5 RCTs) · meta-analysis · model: older humans >50 yr or postmenopausal, RT + creatine, ≥12 wk · gold OA · doi:10.3389/fnut.2018.00027

[^forbes2022bmd]: [[studies/forbes-2022-creatine-bone-health-letter]] · n=letter synthesizing 10 RCTs · review · model: older adults, RT + creatine · Ann Nutr Metab 2022;78:183–186 (published online Nov 2021) · gold OA · doi:10.1159/000520967

[^davies2024]: Davies TW, Watson N, Pilkington JJ, McClelland TJ, Azzopardi G, Pearse RM, Prowle J, Puthucheary Z. *JPEN J Parenter Enteral Nutr* 2024;48(4):389–405 · n=1,076 (33 RCTs); meta-analysis of older adults + adults with chronic disease · sit-to-stand SMD=0.51 (95%CI 0.01–1.00, I²=62%, p=0.04); upper-body strength SMD=0.25 (p=0.01); handgrip SMD=0.23 (p=0.04); lean tissue mass MD=+1.08 kg · doi:10.1002/jpen.2607 · PMID 38417175 · abstract verified via PubMed efetch 2026-05-08; full PDF not fetched (R34 backfill batch 4 — recency-only verification)

[^sharifian2025]: Sharifian G, Aseminia P, Heidary D, Esformes JI. *Eur Rev Aging Phys Act* 2025;22:17 · n=1,093 (20 RCTs; 69% female); PRISMA-compliant; meta-analysis of creatine + exercise in older adults · 1RM MD=+2.12 kg (Z=3.26, p=0.001); fat% MD=−0.55% (Z=−2.23, p=0.026); total-body BMD ns (MD=+0.009 g/cm², Z=0.587, p=0.557) · gold OA · doi:10.1186/s11556-025-00384-9 · PMID 41062952 · abstract verified via PubMed efetch 2026-05-08

[^liu2025]: Liu S, Huang N, Wu W, OuYang X, Luo Y, Zhong Y, Wang M, Xiao L. *Eur Rev Aging Phys Act* 2025;22:26 · n=482 (8 RCTs); PROSPERO CRD420251018405; aged adults RT 2–3 sessions/wk × 8–104 wk · pooled lower-limb strength SMD=0.29 (p=0.05); lean tissue mass SMD=0.27 (p=0.03); upper-body strength ns overall but SMD=0.45 (p=0.005) for ≤32-wk subgroup; lean mass SMD=0.57 (p=0.004) for ≤32-wk subgroup · gold OA · doi:10.1186/s11556-025-00392-9 · PMID 41388441 · abstract verified via PubMed efetch 2026-05-08

[^marshall2026]: Marshall S, Kitzan A, Wright J, Bocicariu L, Nagamatsu LS. *Nutr Rev* 2026;84(2):333–344 · n=1,542 (6 studies; 55.7% female; ≥55 yr; healthy community-dwelling); systematic review (no meta-analysis); PROSPERO CRD42025643617 · creatine alone (without RT) and cognition; 5/6 studies (83%) positive memory/attention; 2 RCT, 4 cross-sectional; only 1 "good", 2 "fair", 3 "poor" methodological quality · two letters of concern published by *Nutr Rev* (nuaf239, nuaf240) and an author response (nuaf261) — debate is ongoing #gap/contradictory-evidence · hybrid OA · doi:10.1093/nutrit/nuaf135 · PMID 40971619 · abstract verified via PubMed efetch 2026-05-08
