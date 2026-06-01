---
type: compound
aliases: [Onpattro, ALN-TTR02]
pubchem-cid: null
chembl-id: null
drugbank-id: DB13874
biologic: true
who-inn: patisiran
molecular-formula: null
molecular-weight-da: ~14300
mechanisms: [rna-interference, lnp-delivery, ttr-mrna-knockdown]
targets: ["[[transthyretin]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Patisiran + tafamidis combination RCT in ATTR-CM with mortality primary endpoint — tests whether knockdown + stabilization is additive over monotherapy."
clinical-trials-active: 3
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "APOLLO (Adams 2018) verified against full PDF; APOLLO-B (Maurer 2023) verified against full PDF; 5-yr OLE (Adams 2025) verified against full PDF; HELIOS-B (Fontana 2025) verified against PubMed abstract (PMID 39213194) — local PDF is a misfetched DI-fusion help file, not the paper; Aimo 2025 NMA verified against full PDF; coramitug PMID 41212997 verified against PubMed abstract; canonical-DB identity fields (PubChem, ChEMBL, DrugBank) not independently verified — flag for next lint pass"
---


# Patisiran (Onpattro)

Patisiran is an **LNP-encapsulated double-stranded siRNA** targeting hepatocyte [[transthyretin]] (TTR) mRNA. FDA-approved August 2018 for hereditary ATTR amyloidosis with polyneuropathy — the **first-ever FDA-approved RNAi therapeutic**. It achieves ~80% reduction in circulating TTR by directing RISC-mediated cleavage of TTR mRNA in hepatocytes. In the SENS framework, it addresses the **AmyloSENS** problem — extracellular accumulation of misfolded TTR fibrils — by eliminating the source protein rather than stabilizing it. A second-generation GalNAc-siRNA successor, [[vutrisiran]] (Amvuttra), has largely superseded patisiran for new patients due to subcutaneous self-administration; however, patisiran's Phase 3 clinical evidence base remains the deepest in the TTR-knockdown class. #gap/needs-canonical-id (PubChem and ChEMBL do not routinely assign CIDs/IDs to siRNA duplexes; confirm DrugBank DB13874 vs DB13834 on verification pass).

## Identity

- **WHO INN:** patisiran
- **Brand name:** Onpattro (Alnylam Pharmaceuticals)
- **Research code:** ALN-TTR02
- **DrugBank:** DB13874 (to be confirmed on verification pass) #gap/needs-canonical-id
- **PubChem CID:** null — siRNA duplexes are not routinely registered in PubChem #gap/needs-canonical-id
- **ChEMBL ID:** null — confirm biologic/oligonucleotide entry at ChEMBL #gap/needs-canonical-id
- **Molecule class:** double-stranded siRNA, 21 nt guide + 21 nt passenger strand, encapsulated in lipid nanoparticle (LNP)
- **siRNA molecular weight:** ~14,300 Da (duplex alone); full LNP particle: ~100 nm diameter nanoparticle, ~80 nm hydrodynamic radius
- **Administration:** IV infusion, 0.3 mg/kg every 3 weeks; approximately 80-minute infusion with premedication (dexamethasone, H1/H2 antihistamines, acetaminophen)

## Mechanism of action

### RNAi pharmacology

Patisiran exploits the endogenous RNA interference (RNAi) pathway. The guide strand of the siRNA duplex is loaded into RISC (RNA-Induced Silencing Complex, centered on AGO2 Argonaute endonuclease). Once loaded, the guide strand directs AGO2 to cleave TTR mRNA at a complementary sequence in the 3' UTR, initiating mRNA degradation. Because RISC is catalytic — it cleaves and releases the mRNA, then re-engages — a single loaded RISC complex can silence multiple mRNA copies [^adams2018].

### LNP-mediated hepatic delivery

The siRNA is encapsulated in an ionizable lipid nanoparticle formulated with DLin-MC3-DMA (MC3) as the ionizable lipid component — a critically enabling innovation that achieved clinical-grade hepatic transfection efficiency. The LNP is administered IV; it circulates, adsorbs ApoE from plasma, which directs receptor-mediated uptake via LDL receptor family members on hepatocytes (the predominant TTR-producing cells). Endosomal escape releases the siRNA into the cytosol where RISC loading occurs. LNP-encapsulation is essential — naked siRNA is cleared within minutes by nucleases and renal filtration [^adams2018].

The DLin-MC3-DMA LNP formulation of patisiran became the **platform basis** for subsequent RNAi drugs (givosiran, lumasiran, inclisiran for lipid-lowering, vutrisiran initially) and, at a formulation level, the ionizable-lipid strategy informed BNT162b2/mRNA-1273 COVID mRNA vaccines. Patisiran established proof-of-concept that hepatic LNP delivery could achieve durable, therapeutically meaningful gene silencing in humans.

### Target: transthyretin

[[Transthyretin]] (TTR; gene: *TTR*; UniProt: P02766) is a hepatocyte-synthesized homotetrameric transport protein carrying thyroxine (~20% of total) and retinol (as RBP4-retinol complex, ~95% of total). In hereditary ATTR amyloidosis (hATTR), TTR carries one of >130 pathogenic missense variants (most common in the US: V30M for neuropathy, V122I for cardiomyopathy). In wild-type ATTR-CM (wtATTR-CM, the more common senescent form), normal-sequence TTR dissociates and misfolds with age, depositing amyloid in heart, carpal tunnel ligaments, and lumbar spinal stenosis. Knocking down hepatic TTR production reduces availability of the aggregation-prone TTR monomer in both contexts [^adams2018].

## Approval status

| Agency | Date | Indication |
|--------|------|------------|
| FDA | August 10, 2018 | Hereditary ATTR amyloidosis with polyneuropathy in adults |
| EMA | September 5, 2018 | Hereditary ATTR amyloidosis with symptomatic polyneuropathy in adults |
| Health Canada | 2018 | hATTR amyloidosis with polyneuropathy |
| ANVISA (Brazil) | 2019 | hATTR-PN |

FDA approval was based on the APOLLO Phase 3 trial. The CM indication extension was sought based on APOLLO-B results but has not been granted as of 2026 (APOLLO-B's primary endpoint result was less compelling than ATTR-stabilizer class in CM; see below). [[Vutrisiran]] received FDA approval for ATTR-CM in March 2024 based on HELIOS-B.

## Clinical evidence — APOLLO Phase 3 (hATTR-PN)

The **APOLLO trial** (NCT01960348) was a pivotal double-blind, placebo-controlled Phase 3 RCT in 225 patients with hATTR amyloidosis with polyneuropathy [^adams2018].

- **Primary endpoint:** change from baseline in modified Neuropathy Impairment Score +7 (mNIS+7) at 18 months
- **Results:** patisiran −6.0 points vs placebo +28.0 points (difference −34.0 points; 95% CI −39.9 to −28.1; p<0.001)
- **TTR knockdown:** median 81% reduction in serum TTR from baseline (range −38 to 95%) vs ~0% for placebo (p<0.001)
- **Quality of life (Norfolk QoL-DN):** patisiran −6.7 vs placebo +14.4 (difference −21.1; 95% CI −27.2 to −15.0; p<0.001)
- **Gait speed (10-meter):** improved vs declined in placebo
- **Safety:** infusion-related reactions in 19% of patisiran (vs 9% placebo); peripheral edema 30% vs 22%; pre-medication protocol substantially reduced infusion reactions in later patients; no liver toxicity signal
- **n:** 148 patisiran / 77 placebo; 44 sites across 19 countries; median baseline mNIS+7: 80.9 points (indicating established disability)

**5-year open-label extension (APOLLO OLE):** 211 of 212 eligible patients (from APOLLO and a phase 2 OLE study) were enrolled; 138 (65.4%) completed the global OLE. In the 5-year analysis (Adams et al., JAMA Neurology 2025), patients originally randomized to patisiran showed sustained clinical stability: polyneuropathy disability (PND) scores stable or improved in 89/138 completers (65.0%); patients who crossed over from placebo to patisiran (APOLLO OLE cohort) showed improvement after initiating treatment, but remained worse than the continuous patisiran group on most measures, indicating benefit of earlier initiation. 41 patients (19.4%) died during the global OLE [^adams2025].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — this IS a human trial |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — APOLLO Phase 3 + 5-yr OLE |

## Clinical evidence — APOLLO-B Phase 3 (ATTR-CM)

The **APOLLO-B trial** (NCT03997383) evaluated patisiran in patients with ATTR amyloidosis with cardiomyopathy (both wtATTR-CM and hATTR-CM) [^maurer2023].

- **n:** 360 (1:1 patisiran:placebo; 181 patisiran, 179 placebo); mixed population: ~80% wtATTR-CM, ~20% hATTR-CM
- **Primary endpoint:** change in 6-minute walk test distance (6MWT) at 12 months
- **Results:** Hodges-Lehmann estimate of median difference +14.69 m (95% CI 0.69 to 28.69; P=0.02); median change −8.15 m for patisiran vs −21.35 m for placebo — statistically significant but clinically modest
- **Secondary endpoints (hierarchical):** NT-proBNP change, KCCQ-OS, heart failure events — generally favored patisiran but effect sizes were smaller than seen with tafamidis (ATTRibute) or acoramidis in stabilizer trials
- **TTR knockdown:** ~87% at 12 months
- **At 18 months (extension):** composite cardiac outcomes favored patisiran but the pre-specified analysis did not reach significance [^worsening2025]
- **Mortality at 18 months:** not a primary endpoint; trend favoring patisiran did not reach significance

**Interpretation:** APOLLO-B met its primary endpoint (6MWT at 12 months) but the mortality and hard cardiac outcomes were not convincingly demonstrated. A **network meta-analysis (Aimo et al. 2025)** placed patisiran and vutrisiran behind acoramidis and tafamidis on composite cardiac outcomes in ATTR-CM, though the populations and endpoints across trials are not directly comparable [^aimo2025]. The stronger performance of [[vutrisiran]] in HELIOS-B (see below) subsequently made vutrisiran the preferred TTR-siRNA option for CM. #gap/contradictory-evidence

## Vutrisiran successor — HELIOS-A and HELIOS-B

### HELIOS-A (hATTR-PN)

[[Vutrisiran]] (ALN-TTRsc02; Amvuttra) is a GalNAc-conjugated siRNA targeting the same TTR mRNA sequence but delivered subcutaneously. The GalNAc ligand binds ASGPR on hepatocytes, replacing the need for LNP encapsulation [^adams_heliosA2022].

- **HELIOS-A** (NCT03759379): Phase 3, n=164, 18-month, hATTR-PN; vutrisiran 25 mg SC q3m
- **Primary endpoint (mNIS+7):** vutrisiran −2.2 vs OLE patisiran external comparator
- **TTR knockdown:** ~83% vs patisiran ~80% in APOLLO
- **FDA approved:** June 2022 for hATTR-PN
- **Key advantage over patisiran:** subcutaneous self-injection quarterly (vs IV infusion q3w); no premedication; lower infusion-reaction burden

### HELIOS-B (ATTR-CM)

**HELIOS-B** (NCT04153149): Phase 3, n=655 (1:1 ratio; 326 vutrisiran, 329 placebo), patients with ATTR-CM; vutrisiran 25 mg SC q3m vs placebo; up to 42-month follow-up (primary endpoint through 36 months) [^heliosB2025].

- **Primary endpoint (all-cause mortality + recurrent cardiovascular events composite):** HR 0.72 (95% CI 0.56–0.93; p=0.01) — first **mortality benefit** demonstrated for a TTR-siRNA in ATTR-CM
- **All-cause mortality alone (through 42 months):** HR 0.65 (95% CI 0.46–0.90; p=0.01) — ~35% relative reduction
- **6MWT (least-squares mean difference):** +26.5 m (95% CI 13.4–39.6; p<0.001) favoring vutrisiran
- **NT-proBNP:** meaningful reduction vs placebo
- **FDA approved for ATTR-CM:** March 2024 (Amvuttra label expanded)
- **Clinical significance:** HELIOS-B is the first Phase 3 RCT to demonstrate all-cause mortality benefit for a TTR-targeting siRNA, providing a stronger CM evidence base than APOLLO-B achieved with patisiran

The mortality benefit of vutrisiran in ATTR-CM (HELIOS-B) vs the more modest signal from patisiran in APOLLO-B likely reflects the longer follow-up (up to 42 vs 12 months) and larger n (655 vs 360) in HELIOS-B, not necessarily a pharmacological superiority of vutrisiran over patisiran, though the two have not been directly compared. #gap/contradictory-evidence

## Comparison to TTR stabilizers

Two mechanistic strategies address TTR amyloidosis:
1. **Knockdown** (patisiran, vutrisiran): eliminate hepatic TTR production at the mRNA level; reduces the substrate for aggregation; works for both hereditary and wild-type ATTR; ~80–87% TTR reduction achievable.
2. **Stabilization** (tafamidis, acoramidis, diflunisal): small molecules that bind the T4-binding sites in the TTR tetramer interface, preventing tetramer dissociation to monomers (the rate-limiting step for amyloid nucleation); do not reduce total TTR levels; stabilize the tetramer against misfolding.

| Feature | Patisiran / Vutrisiran | Tafamidis / Acoramidis |
|---|---|---|
| Mechanism | TTR mRNA knockdown ~80–87% | TTR tetramer stabilization |
| Administration | IV (patisiran) / SC (vutrisiran) | Oral daily |
| Indication | hATTR-PN (both); ATTR-CM (vutrisiran) | ATTR-CM (both); hATTR-PN (acoramidis only) |
| TTR level change | Reduces total serum TTR ~80–87% | Minimal change to TTR level |
| Mortality evidence | HELIOS-B (vutrisiran; 36% RRR) | ATTR-ACT (tafamidis; ~30% RRR); ATTRibute-CM (acoramidis) |
| Vitamin A effect | Requires supplementation | None |
| Cost (annual US) | ~$450,000 (patisiran) | ~$225,000 (tafamidis; generic in EU) |

**Network meta-analysis context:** Aimo et al. (European Heart Journal Open, 2025) performed a network meta-analysis of TTR-targeting therapies in ATTR-CM across ATTR-ACT, ATTRibute-CM, APOLLO-B, and HELIOS-B. For the primary composite endpoint (all-cause mortality or cardiovascular hospitalization): tafamidis (HR 0.69; 95% CrI 0.53–0.88) and vutrisiran monotherapy (HR 0.74; 95% CrI 0.58–0.91) showed significant benefit vs placebo; acoramidis showed a non-significant trend (HR 0.76; 95% CrI 0.56–1.03); patisiran was not significant (HR 0.77; 95% CrI 0.53–1.07). Treatment ranking (SUCRA): tafamidis 82% > vutrisiran mono 70% > patisiran lowest. For 6MWT, tafamidis and acoramidis had the highest SUCRA values. The trials are not directly comparable (different endpoints, populations, follow-up durations, era effects) [^aimo2025]. #gap/contradictory-evidence

**Combination therapy** (stabilizer + siRNA) is biologically plausible — knockdown reduces available TTR, while stabilization prevents residual TTR from misfolding. Two Phase 2 investigator-initiated studies are ongoing (as of 2026); no Phase 3 combination trial is registered. #gap/long-term-unknown

## Vitamin A (retinol) interaction

TTR is the predominant serum carrier of retinol-binding protein 4 (RBP4)–retinol complex. Severe TTR knockdown (~80%) reduces circulating RBP4 and serum retinol. In APOLLO, patisiran-treated patients showed ~70% reduction in serum retinol from baseline vs minimal change in placebo. Subclinical vitamin A deficiency is a predictable pharmacological consequence.

**Standard management:** Alnylam recommends daily vitamin A supplementation (2,500 IU oral) for all patients receiving patisiran, initiated with treatment and continued throughout therapy. Serum retinol monitoring is recommended periodically. Visual function should be monitored in the context of long-term treatment, as severe vitamin A deficiency can cause night blindness and retinopathy [^adams2018]. #gap/long-term-unknown (long-term ophthalmic consequences of sustained ~70% retinol reduction are not characterized beyond 5-year OLE data).

## Aging context — AmyloSENS

In the SENS taxonomy, patisiran and TTR-knockdown therapy broadly address the **[[sens-damage-categories|AmyloSENS]]** problem: the accumulation of misfolded, extracellular amyloid deposits that cannot be cleared by normal proteostatic mechanisms. ATTR amyloid deposits in the heart, peripheral nerves, carpal tunnel ligaments, and spinal canal. wtATTR-CM prevalence rises sharply after age 60 (estimated ~13% of heart failure with preserved ejection fraction in patients >60 years old carries wtATTR-CM burden on autopsy series, though clinically recognized ATTR-CM is far less prevalent).

Patisiran's clinical program established several firsts with aging-biology relevance:
1. **First FDA-approved RNAi therapeutic** — demonstrated that siRNA can be safely and durably delivered to human liver at therapeutic scale
2. **LNP platform precedent** — DLin-MC3-DMA LNP was the formulation basis for subsequent hepatic RNAi drugs and conceptually adjacent to mRNA-LNP vaccines
3. **TTR biology as aging pathology** — ATTR-CM is increasingly recognized as an underdiagnosed age-related disease, not primarily a rare genetic disease; epidemiological estimates suggest prevalent burden in elderly HFpEF patients

The distinction from stabilizer therapy is mechanistically important for AmyloSENS: knockdown eliminates production of the aggregation-prone substrate (source suppression), whereas stabilizers prevent aggregation of existing substrate. Neither strategy directly clears deposited amyloid — for aggregate removal, anti-TTR amyloid antibodies (e.g., coramitug, in Phase 2) are being investigated [^coramitug2026]. A full AmyloSENS solution for TTR would ultimately combine: source suppression (siRNA/ASO), fibril stabilization or prevention, and aggregate clearance.

## Related compounds and wikilinks

- [[transthyretin]] — target protein; TTR biology stub
- [[vutrisiran]] — second-generation subcutaneous GalNAc-siRNA successor
- [[tafamidis]] — oral TTR stabilizer; ATTR-CM standard of care
- [[acoramidis]] — next-generation oral TTR stabilizer (ATTRibute-CM; broader polyneuropathy indication)
- [[interventions/pharmacological/senolytics]] — different AmyloSENS-adjacent strategy targeting senescent cells
- [[loss-of-proteostasis]] — hallmark page
- [[sens-damage-categories]] — AmyloSENS category
- [[lecanemab]] — anti-Aβ amyloid antibody; parallel amyloid-clearance approach
- [[donanemab]] — anti-Aβ amyloid antibody

## Limitations and gaps

- **IV infusion required for patisiran** — every 3 weeks, 60-minute infusion with premedication, in an infusion center; significant logistical burden vs oral stabilizers or quarterly SC vutrisiran. Most new patients are started on vutrisiran rather than patisiran for practical reasons.
- **APOLLO-B CM endpoint was modest** — patisiran met the 6MWT primary endpoint at 12 months but did not demonstrate convincing mortality benefit in ATTR-CM; vutrisiran's HELIOS-B is the stronger cardiomyopathy dataset for the siRNA class.
- **Vitamin A supplementation required indefinitely** — long-term ophthalmic monitoring needed; 5-year OLE data did not identify visual complications but follow-up remains limited. #gap/long-term-unknown
- **Cost:** ~$450,000/year in the US (patisiran). Despite FDA approval, payer coverage varies; access in lower-income countries is severely limited.
- **Does not clear existing amyloid deposits** — source suppression stops disease progression but reverse deposition may only occur slowly (cardiac amyloid persists; improvement in cardiac function over time on stabilizers/knockdown likely reflects resolution of edema and improved myocardial physiology rather than fibril removal).
- **No head-to-head RCT vs tafamidis or acoramidis** in ATTR-CM — cross-trial comparisons carry substantial population, endpoint, and era heterogeneity.
- **Combination therapy (knockdown + stabilization) rationale exists** but Phase 3 evidence is absent. #gap/long-term-unknown

## Footnotes

[^adams2018]: doi:10.1056/NEJMoa1716153 · Adams D, Gonzalez-Duarte A, O'Riordan WD, et al. (50+ co-authors) · *N Engl J Med* 2018;379(1):11–21 · rct · n=225 (148 patisiran, 77 placebo) · p<0.001 (mNIS+7 difference −34.0 points, 95% CI −39.9 to −28.1) · model: hATTR amyloidosis with polyneuropathy, adults, 44 sites across 19 countries Phase 3 (APOLLO; NCT01960348) · 2,745 citations (archive: downloaded)

[^maurer2023]: doi:10.1056/NEJMoa2300757 · Maurer MS, Kale P, Fontana M, et al. · *N Engl J Med* 2023;389(17):1553–1565 · rct · n=360 (181 patisiran : 179 placebo, 1:1) · p=0.02 (6MWT primary; H-L median difference +14.69 m, 95% CI 0.69–28.69) · model: ATTR-CM (~80% wtATTR-CM, ~20% hATTR-CM) adults, Phase 3 APOLLO-B (NCT03997383) · 256 citations (archive: downloaded)

[^adams2025]: doi:10.1001/jamaneurol.2024.4631 · Adams D, Wixner J, Polydefkis M, Berk JL, Conceição IM, Dispenzieri A, et al. · *JAMA Neurol* 2025;82(3):228–236 · open-label extension (no placebo comparator) · n=211 enrolled (49 APOLLO placebo, 137 APOLLO patisiran, 25 phase 2 OLE patisiran); 138 completed · model: hATTR-PN adults, up to 5-year follow-up from APOLLO/phase 2 OLE parent studies · 17 citations (archive: downloaded)

[^heliosB2025]: doi:10.1056/NEJMoa2409134 · Fontana M, Berk JL, Gillmore JD, Witteles RM, Grogan M, et al. · *N Engl J Med* 2025;392(1):33–44 · rct · n=655 (326 vutrisiran : 329 placebo, 1:1) · HR 0.72 (95% CI 0.56–0.93), p=0.01 (all-cause mortality + recurrent CV events composite); all-cause mortality HR 0.65 (95% CI 0.46–0.90), p=0.01 (through 42 months); 6MWT LS mean difference +26.5 m (95% CI 13.4–39.6; p<0.001) · model: ATTR-CM, up to 42-month follow-up (HELIOS-B; NCT04153149) · 301 citations (archive: local PDF is DI-fusion help file — not the full paper; verified against PubMed abstract PMID 39213194)

[^adams_heliosA2022]: doi:10.1080/13506129.2022.2091985 · Adams D, Tournev IL, Taylor MS, Coelho T, Planté-Bordeneuve V, Berk JL, et al. · *Amyloid* 2023;30(1):1–9 · rct · n=164 (1:1 vutrisiran:OLE patisiran reference) · model: hATTR-PN adults, 18-month HELIOS-A (NCT03759379) · 329 citations (archive: pending)

[^worsening2025]: doi:10.1016/j.jacc.2024.11.015 · Fontana M, Maurer MS, Gillmore JD, Bender S, Aldinc E, Eraly S, Jay PY, Solomon SD · *J Am Coll Cardiol* 2025;85(7):753–761 · rct sub-analysis · n=360 · model: APOLLO-B outpatient worsening heart failure events analysis at 18-month extension · 0 citations (archive: pending)

[^aimo2025]: doi:10.1093/ehjopen/oeaf147 · Aimo A, Castiglione V, Emdin M, Lorenzoni V, Vergaro G · *Eur Heart J Open* 2025;5(6):oeaf147 · meta-analysis · network meta-analysis of ATTR-CM trials (ATTRibute-CM, ATTR-ACT, APOLLO-B, HELIOS-B) · 0 citations (archive: pending; gold OA)

[^coramitug2026]: PMID 41212997 · *Circulation* 2026 · Phase II RCT of coramitug (anti-TTR amyloid antibody) in ATTR-CM · model: ATTR-CM adults; aggregate-clearance approach distinct from TTR knockdown/stabilization
