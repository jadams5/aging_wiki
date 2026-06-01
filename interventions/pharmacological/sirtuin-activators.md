---
type: intervention
aliases: [STACs, sirtuin activating compounds, resveratrol class, polyphenolic sirtuin activators]
mode: pharmacological
mechanisms: [sirtuin-activation, sirt1-allosteric-activation, substrate-dependent-activation]
targets: []
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]"]
target-pathways: ["[[sirtuin]]"]
human-evidence-level: limited-negative
clinical-stage: abandoned
safety-profile: well-established
translation-gap: human-evidence-strong-negative
next-experiment: "Biomarker-rich Phase 2 with explicit substrate-coupling positive controls (native hydrophobic-motif substrates per Hubbard 2013); or pivot class focus entirely to NAD+ precursors, which raise sirtuin substrate rather than attempt contested allosteric modulation."
clinical-trials-active: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "All five primary-source PDFs verified against claims (Howitz 2003, Wood 2004, Baur 2006, Pearson 2008, Pacholec 2010, Hubbard 2013). human-evidence-level updated to limited-negative per R26a schema. Quantitative n-per-group, C. elegans lifespan extension %, and off-target compound-specific counts corrected against source PDFs. Pearson 2008 transcriptional-overlap claim corrected. Canonical-DB identity fields (PubChem/ChEMBL for individual compounds) not independently re-verified — those live on individual compound pages not yet seeded. R34 recency adds (2026-05-08): Karim 2025 (10.1080/09637486.2025.2563670) abstract-verified via PubMed — first STAC RCT showing aging-relevant phenotype improvement (frailty + plasma SIRT1) in older adults with knee OA. Class-level human-evidence-level retained as 'limited-negative' (single-trial single-population aging-secondary-endpoint result does not overturn multiple null Phase 2s for hard endpoints), but the existence of a positive frailty signal weakens the strict 'class-failed' framing and is documented in body."
---

# Sirtuin activators (STACs)

Sirtuin-activating compounds (STACs) are small molecules proposed to directly lower the Michaelis constant (Km) for substrate of SIRT1 — and by extension, related sirtuins — allowing greater deacylase activity at ambient NAD+ concentrations. The class originated with a 2003 *Nature* screen by Howitz, Sinclair and colleagues identifying resveratrol as the prototypical STAC [^howitz2003], and was subsequently industrialized by Sirtris Pharmaceuticals (acquired by GlaxoSmithKline for ~$720M in 2008) into synthetic analogs. As of 2026, the Sirtris/GSK program has been entirely wound down, the clinical trial results for the flagship synthetic STAC SRT2104 showed no breakthrough efficacy, and the direct-activation mechanism remains mechanistically contested.

**This is a category page.** Individual compound pages (when seeded): [[resveratrol]], [[pterostilbene]], [[srt1720]], [[srt2104]]. Mechanistic pathway anchor: [[sirtuin]].

## Class definition and origin

STACs were defined operationally by their ability to lower the Km of SIRT1 for its acetyl-lysine substrate in biochemical assays, resulting in higher deacetylase activity at subsaturating substrate concentrations. The founding screen [^howitz2003] used a fluorogenic Fluor de Lys (FdL) peptide assay and identified resveratrol — a naturally occurring stilbene polyphenol found in red wine and grapes — as the most potent activator among ~20,000 tested compounds. That same paper showed resveratrol extended replicative lifespan in *S. cerevisiae* in a Sir2-dependent manner, lending credibility to the mechanistic connection.

Subsequent Sirtris chemistry developed fully synthetic STACs — most importantly SRT1720 and SRT2104 — with orders-of-magnitude greater biochemical potency in the FdL assay (EC50 < 100 nM vs ~20 µM for resveratrol). These were advanced into animal models and human trials respectively.

## Compound overview

| Compound | Class | Source | Key properties |
|---|---|---|---|
| **Resveratrol** (trans-3,5,4'-trihydroxystilbene) | Natural stilbene | Red wine, grapes, Japanese knotweed | Oral bioavailability ~1%; rapid glucuronidation/sulfation; widely consumed supplement; extensively studied |
| **Pterostilbene** | Methylated stilbene | Blueberries | Dimethylated resveratrol analog; longer half-life, higher oral bioavailability than resveratrol; less studied for longevity |
| **SRT1720** | Synthetic STAC | Sirtris | ~1000× more potent than resveratrol in FdL assay; shown inactive on native substrates (Pacholec 2010); preclinical metabolic benefits in mice debated |
| **SRT2104** | Synthetic STAC | Sirtris/GSK | Advanced into human Phase 1/2 trials; modest metabolic signal; no breakthrough efficacy; GSK program abandoned |
| **SRT2379, SRT3025** | Synthetic STACs | Sirtris/GSK | Preclinical only; program discontinued |

Compound-specific PK, dosing, and individual trial data belong on dedicated compound pages when seeded. For NAD+ precursors (NMN, NR) — a mechanistically distinct class that raises the sirtuin substrate rather than modulating the enzyme — see [[nad-precursors]] and [[nmn]], [[nr]].

## Mechanism controversy

This is the central scientific controversy for the class and should be understood before evaluating any efficacy claim.

### Original claim: allosteric SIRT1 activation (Howitz 2003)

Howitz et al. 2003 [^howitz2003] reported that resveratrol and related stilbenes directly activated SIRT1 (and yeast Sir2) in biochemical deacetylase assays, lowering the Km for the acetyl-peptide substrate by 35-fold (resveratrol) and similarly for SRT compounds. This was interpreted as direct allosteric activation at a newly proposed N-terminal activation domain.

### Challenge: fluorogenic-substrate artifact (Beher 2009 + Pacholec 2010)

Beher et al. (2009, Biochemistry) and Pacholec et al. 2010 [^pacholec2010] (Pfizer) independently demonstrated that the STAC-mediated activation is *specific to fluorophore-labeled substrates*: resveratrol, SRT1720, SRT2183, and SRT1460 all activated SIRT1 with a TAMRA-conjugated p53 peptide, but showed **no activation** with native (unlabeled) p53 peptide (Ac-Lys382-p53) or full-length native acetyl-CoA synthetase substrate. NMR and surface plasmon resonance confirmed that SRT1460 and SRT1720 bind to the TAMRA fluorophore-containing peptide, not to the native sequence. In ob/ob mice, SRT1720 at 30 mg/kg showed no glucose-lowering or mitochondrial biogenesis benefit [^pacholec2010].

Furthermore, Pacholec 2010 reported that all four STACs showed substantial off-target activity in a panel of >100 targets at 10 µM: SRT1720 >50%-inhibited 38 targets, SRT2183 14 targets, SRT1460 20 targets, and resveratrol 7 targets — raising the concern that observed in-vivo metabolic effects might reflect off-target pharmacology rather than sirtuin activation.

### Partial rescue: substrate-dependent activation (Hubbard 2013)

Hubbard et al. 2013 [^hubbard2013] (Sinclair group) addressed Pacholec's challenge by demonstrating that STACs can activate SIRT1 with *some* native substrates: specifically, those containing hydrophobic sequences C-terminal to the acetyl-lysine. Using mass-spectrometry-based assays (PNC1-OPT, OAcADPR-MS) without fluorophores, they showed activation with PGC-1α K778 and FOXO3a K290 peptides. The critical SIRT1 residue is **E230** (human; E222 in mouse) — an N-terminal domain glutamate whose mutation abolishes activation by 117 diverse STACs. SIRT1-E222K reconstituted myoblasts failed to show STAC-mediated mitochondrial mass or ATP increases, confirming SIRT1 dependence for at least some metabolic effects [^hubbard2013].

**Consensus interpretation as of 2026:** STAC-mediated SIRT1 activation is real but substrate-gated — it occurs only for substrates with adjacent hydrophobic motifs (a structural feature that some, but not all, endogenous SIRT1 substrates possess). Whether in-vivo STAC effects are predominantly mediated through this substrate-coupled mechanism, through indirect effects (AMPK activation, PDE inhibition, mitochondrial uncoupling), or through off-target pharmacology remains unresolved. #gap/contradictory-evidence

| Dimension | Status |
|---|---|
| Direct SIRT1 allosteric activation with all substrates? | no (Pacholec 2010) |
| Substrate-dependent SIRT1 activation with hydrophobic-motif substrates? | yes (Hubbard 2013) |
| In-vivo sirtuin-dependent aging benefits in mammals confirmed? | partial / contested |

## Aging biology evidence

### Model organism lifespan studies

Resveratrol was shown to extend lifespan in *S. cerevisiae*, *C. elegans*, and *D. melanogaster* in early studies that were the commercial rationale for Sirtris [^howitz2003] [^wood2004]. In mice, the story bifurcated by diet:

- **High-fat diet (HFD) rescue:** Baur et al. 2006 [^baur2006] showed resveratrol at 22.4 mg/kg/day improved survival in one-year-old male C57BL/6NIA mice on a 60%-kcal-fat high-calorie diet (n=55/group at start). HCR hazard ratio vs HC: 0.69 (p=0.020). Median lifespan of HFD+resveratrol mice matched standard-diet controls. Metabolic improvements included reduced hepatic steatosis, improved insulin sensitivity, and improved coordination. The study explicitly did NOT extend maximum lifespan and HCR survival was not significantly different from SD controls (HR 1.03, p=0.88).
- **Standard diet: no lifespan extension:** Pearson et al. 2008 [^pearson2008] showed that resveratrol had no effect on overall survival or maximum lifespan in standard-diet-fed C57BL/6NIA mice started on resveratrol at 12 months (SDR: 400 mg/kg food; ~22 mg/kg/day). Resveratrol altered transcriptional profiles to partially mimic every-other-day (EOD) caloric restriction across four tissues (82% liver, 76% muscle, 96% adipose, 64% heart pathway overlap with EOD), and improved health markers (bone mineral density, cataract, vascular function, motor coordination) without extending longevity.

The summary: **resveratrol ameliorates metabolic pathology in an obese-mouse model but does not extend lifespan in lean mice** — a distinction frequently obscured in popular coverage of the Baur 2006 result. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (SIRT1–7 family) |
| Metabolic phenotype in HFD mice conserved in humans? | partial |
| Replicated in humans? | no (aging endpoints) |

### Non-human primate evidence

#gap/needs-human-replication — A non-human primate resveratrol study with metabolic endpoints was conducted (Mercken et al., ~2013, Aging Cell) but the DOI could not be confirmed against the archive for this page. When the study page is seeded from primary PDF, add the citation here. The reported finding was short-term metabolic improvements (similar to CR biomarkers) without lifespan data. #gap/unsourced — Mercken primate citation requires DOI confirmation before use as footnote.

### Human clinical evidence

The key human evidence is largely negative for aging endpoints, formalized in the Mansouri 2025 GRADE-assessed meta-analysis (resveratrol does not significantly influence human SIRT1 across 11 RCTs), with one recent positive frailty-secondary-endpoint signal (Karim 2025, knee-OA population) that complicates but does not overturn the class-level null framing:

| Program | Agent | Design | Key finding |
|---|---|---|---|
| Mansouri 2025 [^mansouri2025] | Resveratrol | GRADE-assessed SR + dose-response meta-analysis; 11 RCTs pooled (4 on Sirt1 gene expression, 5 on protein expression, 3 on serum Sirt1) | **No significant effect of resveratrol on Sirt1 gene expression (SMD=0.05; 95% CI −0.24 to 0.34; P=0.73), protein expression (SMD=0.3; 95% CI −0.15 to 0.77; P=0.18), or serum levels (MD=−0.04; 95% CI −0.235 to 0.16; P=0.7).** Dose-response analysis suggests effects may depend on dosage regimen; subgroup analysis showed transient Sirt1 gene-expression elevation in <12-wk blood-tissue studies. Highest-tier evidence-synthesis confirmation that resveratrol does not engage its proposed target in humans |
| Sirtris/GSK Phase 2 (multiple) | SRT2104 | Phase 1/2; multiple indications (T2D, atrial fibrillation, psoriasis, COPD, elderly men) | Modest improvements in select metabolic markers in some trials; no breakthrough efficacy in any indication; GSK wound down program ~2013–2014 |
| Karim 2025 [^karim2025] | Resveratrol 500 mg/d × 16 wk | Double-blind RCT, n=123 knee OA patients aged 63–75 (resveratrol n=59 vs placebo n=64) | Resveratrol reduced frailty (Fried's scale) and WOMAC pain scores, improved Oxford knee score and handgrip strength (all p<0.05), and elevated plasma SIRT1; no effect on knee ROM or gait speed. First STAC RCT to show an aging-relevant secondary endpoint (frailty) improvement in older adults. **Note:** published after the Mansouri 2025 search cutoff (March–April 2024) and therefore not included in the pooled estimate |
| Multiple academic supplement trials | Resveratrol | Phase 1/2; metabolic syndrome, elderly | Inconsistent results on metabolic endpoints; no longevity-primary-endpoint trial has completed |
| Consumer supplement use | Resveratrol | Observational; ~100–500 mg/day typical doses | Doses orders of magnitude below in-vitro EC50 at achievable plasma concentrations; mechanistic relevance to SIRT1 activation doubtful at consumer doses — but the Karim 2025 RCT used 500 mg/d, within consumer-supplement range, and reported plasma SIRT1 elevation |

#gap/long-term-unknown — No completed RCT has tested a STAC on a pre-specified aging, longevity, or healthspan **primary** endpoint in humans. Karim 2025 is a 16-week trial in a disease-specific population (knee OA) with frailty as a secondary endpoint; replication in non-OA elderly populations and with longer follow-up is needed before reclassifying the class-level evidence base. Mansouri 2025's GRADE meta-analysis applies specifically to SIRT1-modulation as a pharmacodynamic endpoint, not to clinical aging endpoints — but the absence of detectable target engagement in pooled human data is consistent with and reinforces the class-level `limited-negative` framing. #gap/needs-replication

## Bioavailability limitation (resveratrol)

Resveratrol's oral bioavailability is approximately 1% due to rapid first-pass glucuronidation and sulfation [^gap/no-mechanism — specific PK citation needed]. Peak plasma concentrations after typical supplement doses (100–500 mg) are in the low nanomolar to low micromolar range — below the in-vitro EC50 for SIRT1 activation (~20 µM in FdL assay, and the native-substrate EC50 has not been established for most substrates). This pharmacokinetic gap is a fundamental translational obstacle for the resveratrol-as-STAC hypothesis at supplement doses. #gap/dose-response-unclear

Pterostilbene has substantially better oral bioavailability than resveratrol (estimated ~80%), but its evidence base for sirtuin activation and longevity is far thinner.

## Assessment: STACs as a drug class

STACs represent the most commercially high-profile CR-mimetic strategy that has largely failed translation. Key reasons:

1. **Mechanism was not correctly characterized** at the time of commercialization — the fluorogenic-assay artifact inflated estimates of STAC potency and universality.
2. **Off-target pharmacology** makes it difficult to attribute any in-vivo benefit to sirtuin activation specifically.
3. **Human clinical results were broadly null** for hard endpoints across multiple well-resourced GSK Phase 2 programs. The Mansouri 2025 GRADE-assessed dose-response meta-analysis [^mansouri2025] now provides formal evidence-synthesis confirmation that resveratrol — the prototypical STAC — does not significantly modulate its proposed target (SIRT1 gene expression, protein expression, or serum levels) in pooled human RCT data (11 RCTs).
4. **Alternative NAD+-raising strategy** (NMN/NR precursors — [[nad-precursors]]) operates upstream of the contested allosteric step and has a cleaner mechanistic rationale, though human longevity evidence remains pending.

The Pacholec 2010 finding — that the entire biochemical foundation of the original Sirtris screen was a fluorophore artifact — is foundational for understanding the class and should be considered when weighing any STAC efficacy claim. That both Pacholec (Pfizer, with incentive to challenge a competitor) and Beher (independent) reached the same conclusion, and that Hubbard's partial rescue requires specific substrate contexts, supports treating the original pan-substrate activation claim as falsified.

## Related and sibling classes (R23d)

| Class | Mechanism | Relative evidence strength |
|---|---|---|
| [[nad-precursors]] | Raises NAD+ substrate (NMN, NR) → indirect sirtuin activation | Stronger mechanistic rationale; limited human aging endpoint data |
| [[mtor-inhibitors]] | mTOR inhibition → autophagy, nutrient sensing modulation | Strongest longevity evidence in model organisms (rapamycin ITP-validated) |
| [[ampk-activators]] | AMPK activation (metformin, AICAR) → metabolic reprogramming | Moderate; metformin TAME trial ongoing |
| [[caloric-restriction]] | Endogenous sirtuin activator via NAD+/NADH shift | Strongest mammalian longevity evidence; not pharmacological |

## Limitations and open questions

- **STAC mechanism is still not fully resolved.** Hubbard 2013 provides a partial rescue of the MoA claim, but does not account for why SRT1720 showed no glucose-lowering in ob/ob mice (Pacholec 2010) if SIRT1/PGC-1α substrate coupling drives metabolic effects. #gap/contradictory-evidence
- **No biomarker panel for sirtuin target engagement exists for human trials.** Without a validated pharmacodynamic biomarker, it is impossible to confirm whether any STAC dose actually activates SIRT1 in target tissues in humans. This makes null Phase 2 results difficult to interpret (was dosing wrong? or is the target wrong?).
- **Resveratrol's in-vivo benefits in HFD mice may be AMPK-mediated, not SIRT1-mediated.** AMPK activates SIRT1 indirectly via NAD+ and directly via LKB1; distinguishing STAC→SIRT1 from STAC→AMPK→SIRT1 requires SIRT1-knockout or E230K-equivalent mouse experiments, not all of which have been done.
- **The Sirtris GSK trial results have not all been published.** Several completed Phase 2 trials for SRT2104 have limited public results; data availability constraints bias the literature. #gap/unsourced — confirmation of which SRT2104 trials published full results needed.
- **No NIA ITP test of any STAC has been completed.** The gold-standard multi-site genetically heterogeneous mouse lifespan test has never been applied to resveratrol, SRT1720, or SRT2104, leaving a hole in the preclinical evidence hierarchy.
- `#gap/needs-human-replication` — all model organism lifespan evidence
- `#gap/contradictory-evidence` — STAC direct activation mechanism (Pacholec 2010 vs Hubbard 2013; both PDFs locally available)
- `#gap/dose-response-unclear` — achievable human plasma levels vs in-vitro EC50 for native substrates
- `#gap/long-term-unknown` — no chronic STAC exposure RCT with aging endpoint
- `#gap/unsourced` — Mercken primate resveratrol DOI unconfirmed; SRT2104 trial publication status

## Cross-references

- [[sirtuin]] — verified pathway page; canonical anchor for mechanism, substrate tables, and NAD+ dependency
- [[caloric-restriction]] — endogenous sirtuin activator; the biological comparator for STAC claims
- [[nad-precursors]] — sibling class; substrate-raising strategy rather than allosteric modulation; R23d
- [[ampk]] — cross-pathway; AMPK activates sirtuins indirectly; also implicated in resveratrol's off-target effects
- [[mtor-inhibitors]] — sibling CR-mimetic class; R23d
- [[ampk-activators]] — sibling CR-mimetic class; R23d
- [[deregulated-nutrient-sensing]] — primary targeted hallmark
- [[mitochondrial-dysfunction]] — secondary target via SIRT1/PGC-1α axis
- [[chronic-inflammation]] — tertiary target via SIRT1/NF-κB axis

## Footnotes

[^howitz2003]: doi:10.1038/nature01960 · [[studies/howitz-2003-sirtuin-activators-yeast]] · in-vitro + in-vivo · n=not-reported (yeast genetic screen + biochemical panel) · model: S. cerevisiae (replicative lifespan); SIRT1/Sir2 FdL biochemical assay · resveratrol and 17 polyphenols identified as SIRT1 activators; resveratrol extended yeast RLS ~70%; Sir2-dependent. **Note:** activation assay used fluorogenic substrate — see Pacholec 2010 for artifact concern. · local: PDF available

[^wood2004]: doi:10.1038/nature02789 · [[studies/wood-2004-resveratrol-metazoans]] · in-vivo · n=~75–150 males + females per group (flies); ~multiple plates of worms · model: C. elegans (mean lifespan); D. melanogaster (mean lifespan) · resveratrol extended C. elegans mean lifespan ~10% at 100 µM (averaged across food conditions; up to ~14% on dead E. coli); D. melanogaster up to ~29% with resveratrol (condition-dependent; 20% females, 16% males averaged across Canton-S trials); sir-2.1 required for C. elegans effect · local: PDF available

[^baur2006]: doi:10.1038/nature05354 · [[studies/baur-2006-resveratrol-hfd-mouse]] · in-vivo · n=60 (SD), 55 (HC, HCLR, HCR) at study start; one-year-old male C57BL/6NIA mice · model: C57BL/6 mice on 60% kcal fat high-calorie diet (HC) or standard diet (SD) · resveratrol 22.4 ± 0.4 mg/kg/day; HCR hazard ratio vs HC: 0.69 (p=0.020); improved survival, reduced hepatic steatosis, improved insulin sensitivity, improved motor function; **median lifespan of HFD+resveratrol matched SD controls; maximum lifespan not extended; survival not significantly different from SD (HR 1.03, p=0.88)** · local: PDF available

[^pearson2008]: doi:10.1016/j.cmet.2008.06.011 · [[studies/pearson-2008-resveratrol-normal-diet-mouse]] · in-vivo · n=60 (SD), 55 (SDLR), 54 (SDR) at study start; one-year-old C57BL/6NIA mice · model: C57BL/6 mice on standard diet (SD) ± resveratrol (SDR: 400 mg/kg food; SDLR: 100 mg/kg food); resveratrol started at 12 months · **no effect on overall survival or maximum lifespan in SD mice**; transcriptional profiles shifted toward EOD (every-other-day feeding): 82% pathway overlap in liver, 76% muscle, 96% adipose, 64% heart; functional health improvements (bone, cataract, vascular, motor) observed in SDR mice without lifespan extension · local: PDF available

[^pacholec2010]: doi:10.1074/jbc.M109.088682 · [[studies/pacholec-2010-sirt1-activators]] · in-vitro + in-vivo · model: biochemical (TAMRA-fluorophore vs native Ac-p53/Ac-AceCS1 peptides; full-length Ac-AceCS1; NMR/SPR binding); ob/ob mice 7–8 wk old (SRT1720 30 mg/kg and 100 mg/kg, 18 days) · SRT1720, SRT2183, SRT1460, resveratrol activate SIRT1 with TAMRA-p53 but NOT with native p53 Ac-K382 or full-length native substrates (Ac-p53 or Ac-AceCS1); NMR and SPR confirm compounds bind to TAMRA fluorophore sequence not native peptide; SRT1720 at 30 mg/kg shows no glucose-lowering in ob/ob mice (100 mg/kg dose caused death in 3/8 mice); off-target promiscuity panel (>100 targets at 10 µM): SRT1720 >50% inhibited 38 targets, SRT2183 14, SRT1460 20, resveratrol 7 — all four are highly promiscuous · local: PDF available

[^hubbard2013]: doi:10.1126/science.1231097 · [[studies/hubbard-2013-sirt1-allosteric]] · in-vitro + cell-based · model: PNC1-OPT + OAcADPR mass spectrometry assay (no fluorophore); SIRT1 KO myoblasts reconstituted with WT or E222K murine SIRT1 · activation demonstrated with PGC-1α K778 and FOXO3a K290 native peptides (hydrophobic C-terminal motifs); E230 (human SIRT1) required; E230K ablates activation by 117 STACs; SIRT1-E222K myoblasts fail to show STAC mitochondrial effects; **partial rescue of STAC MoA claim — substrate-dependent, not universal** · local: PDF available

[^karim2025]: Karim A, Khan HA, Ahmad F, Qaisar R · doi:10.1080/09637486.2025.2563670 · *Int J Food Sci Nutr* 2025 Nov;76(7):748–758 · PMID 40990472 · rct · n=123 knee OA patients aged 63–75 (resveratrol 500 mg/d n=59; placebo n=64) · 16-week double-blind RCT · resveratrol reduced frailty (Fried's scale) and WOMAC pain scores, improved Oxford knee score and handgrip strength (all p<0.05), elevated plasma SIRT1; no effect on knee ROM or gait speed · first STAC RCT showing aging-relevant secondary-endpoint (frailty) improvement in older adults; abstract-verified via PubMed; full PDF not locally archived #gap/needs-replication — single-population, secondary endpoint, short follow-up

[^mansouri2025]: Mansouri F, Feliziani G, Bordoni L, Gabbianelli R · doi:10.1016/j.jand.2025.03.011 · *J Acad Nutr Diet* 2025 Sep;125(9):1299-1314.e1 · PMID 40158656 · systematic-review (GRADE-assessed) + dose-response meta-analysis · 11 RCTs pooled (4 on Sirt1 gene expression; 5 on protein expression; 3 on serum Sirt1 levels) · resveratrol vs placebo, adult populations · primary outcome: SIRT1 gene/protein/serum modulation · **no significant effect on Sirt1 gene expression (SMD=0.05; 95% CI −0.24 to 0.34; P=0.73), protein expression (SMD=0.3; 95% CI −0.15 to 0.77; P=0.18), or serum levels (MD=−0.04; 95% CI −0.235 to 0.16; P=0.7)**; subgroup analysis suggested transient Sirt1 gene-expression elevation in studies <12 wk duration and evaluating blood tissue; dose-response analysis suggested effects may depend on dosage regimen; risk-of-bias assessed via RoB 2; publication bias via Begg's test + year-of-pub meta-regression · authoritative GRADE-assessed evidence-synthesis confirming resveratrol does not engage SIRT1 in pooled human RCT data; abstract-verified via PubMed efetch; full PDF not locally archived #gap/needs-replication — subgroup heterogeneity warrants individual-trial assessment of dose/duration thresholds
