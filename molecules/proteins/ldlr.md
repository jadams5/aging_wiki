---
type: protein
aliases: [LDL receptor, LDLR, low-density lipoprotein receptor, FH receptor]
uniprot: P01130
ncbi-gene: 3949
hgnc: 6547
ensembl: ENSG00000130164
genage-id: null
mouse-ortholog: Ldlr
pathways: ["[[srebp-pathway]]", "[[cholesterol-homeostasis]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
known-interactors: ["[[pcsk9]]", "[[apob]]", "[[srebp-2]]", "[[hmgcr]]"]
druggability-tier: 1
gtex-aging-correlation: "tissue-heterogeneous: liver ρ=−0.03 (n=262, essentially flat); whole blood ρ=+0.03 (n=803, flat); subQ adipose ρ=+0.11 (n=714); **visceral adipose ρ=−0.22 (n=587, strongest signal — median TPM drops 109 at 20-29 → 34 at 50-59, ~70% decline)**; skeletal muscle ρ=+0.19 (n=818, opposite direction). GTEx v10 bulk RNA-seq query 2026-05-21 via attributeSubset=ageBracket. Hepatic mRNA shows no robust age trend in bulk RNA-seq — but per [[studies/yang-2023-primate-liver-aging-snrna-srebp2|Yang 2024 snRNA-seq]], aged hepatocytes have hyperactivated SREBP-2 signaling driving up LDLR + PCSK9 transcript per-cell; bulk is the wrong instrument for the per-hepatocyte signal."
mr-causal-evidence: yes
caused-by: ["[[srebp-2]]", "[[pcsk9]]"]
causes: ["[[atherosclerosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Domain boundary residues corrected against UniProt P01130 feature table (all seven were wrong); PCSK9 mechanism attribution corrected (Poirier 2009 demonstrates intracellular Golgi→lysosome route, not extracellular co-endocytosis, as the dominant endogenous pathway); HeFH prevalence updated to 1:313 per Abifadel 2023; FOURIER NEJM n/HR/CI/p verified against PDF; Brown 1979 confirmed — no '~150 recycling cycles' figure present, gap tag appropriate; Etxebarria 2015, Defesche 2017, Reeskamp 2021, Rashid 2005, Mensink 2003 not_oa or failed — tagged accordingly"
literature-checked-through: 2026-05-09
---

# LDLR (LDL receptor)

The LDL receptor is the rate-limiting node of plasma LDL clearance. A single 860-aa transmembrane glycoprotein on hepatocyte (and other cell) surfaces, it captures circulating ApoB-100-containing LDL and ApoE-containing remnants, shuttles them into the cell via clathrin-mediated endocytosis, releases the lipid cargo in the acidifying endosome, and recycles to the surface for repeated rounds of uptake. Statins, PCSK9 inhibitors, and dietary fat composition all converge on LDLR abundance as their principal effector of LDL-C lowering. Loss-of-function LDLR mutations cause familial hypercholesterolemia (FH), the most common Mendelian cardiovascular disease.

## Identity

- **UniProt:** P01130 (LDLR_HUMAN) — manually reviewed (Swiss-Prot), accessed 2026-05-09
- **NCBI Gene:** 3949
- **HGNC:** 6547 (LDLR)
- **Ensembl:** ENSG00000130164
- **Chromosome:** 19p13.2
- **Mouse ortholog:** Ldlr (one-to-one)
- **Length:** 860 amino acids (includes 21-aa signal peptide; mature receptor 839 aa)
- **GenAge:** not listed in HAGR human aging gene database #gap/needs-canonical-id

## Domain architecture

The extracellular portion of LDLR is modular; five functionally distinct regions are required for the full receptor lifecycle [^brown1979-pnas]:

| Domain | Residues | Function |
|---|---|---|
| Signal peptide | 1–21 | Cleaved co-translationally; not present in mature receptor |
| Ligand-binding domain (LBD) | 25–313 | Seven cysteine-rich class A repeats (repeats 1–7, each ~40 aa); bind ApoB-100 and ApoE via electrostatic contacts; require Ca²⁺ |
| EGF-like 1 (EGF-A) | 314–353 | PCSK9 binding site at neutral pH; also required for pH-dependent ApoB-100 release |
| EGF-like 2 (EGF-B) | 354–393 | Calcium-binding; contributes to EGF precursor homology fold |
| β-propeller / YWTD domain | 397–658 | Six LDL-receptor class B repeats forming a β-propeller; at endosomal pH (~5.5) undergoes conformational shift that closes the ligand-binding cleft, releasing ApoB-100; critical for receptor recycling |
| EGF-like 3 (EGF-C) | 663–712 | Completes EGF precursor homology domain |
| O-linked glycosylation region | 721–768 | Clustered O-linked oligosaccharides; structural spacer; mutations here usually traffic-neutral |
| Single transmembrane helix | 789–810 | Anchors receptor in plasma membrane |
| Cytoplasmic tail | 811–860 | ~50 aa; contains the **NPVY internalization motif** (NPXY consensus at positions 823–828) that recruits clathrin adaptor proteins (AP-2, ARH) for coated-pit clustering |

Residue numbering per UniProt P01130 feature table (accessed 2026-05-09); includes 21-aa signal peptide in the numbering (mature receptor begins at residue 22).

The β-propeller is mechanistically central: at physiological pH (7.4) the receptor is open and binds ligand; at endosomal pH (5.0–5.5) the β-propeller closes onto the LBD, evicting ApoB-100 and enabling receptor recycling [^goldstein1979-nature].

## Receptor cycling — the core biology

The receptor undergoes repeated rounds of endocytosis and recycling under normal conditions [^brown1979-pnas] [^goldstein1979-nature]:

1. **Surface binding** — at plasma membrane pH (7.4), the LBD cysteine-rich repeats electrostatically capture ApoB-100 (on LDL) or ApoE (on IDL, chylomicron remnants, VLDL remnants). The receptor clusters in clathrin-coated pits via the NPVY cytoplasmic tail.

2. **Clathrin-mediated endocytosis** — the coated pit invaginates (driven by clathrin, AP-2, dynamin) → coated vesicle → early endosome. Transit from surface to early endosome: ~10 minutes.

3. **Endosomal cargo release** — endosome acidifies to pH ~5.5 via V-ATPase. The β-propeller undergoes a conformational switch that occludes the LBD → ApoB-100 dissociates → LDL particle is trafficked onward to late endosome and lysosome for degradation. Free cholesterol and fatty acids are exported to cytoplasm via NPC1/NPC2 and lysosomal acid lipase.

4. **LDLR recycling** — the now-unloaded receptor, still in the endosome, is sorted back to the plasma membrane by Rab11/Rab4-positive recycling tubules. Each receptor completes this cycle repeatedly; the classical estimate from HepG2 studies is **~150 recycling events per receptor lifetime** before lysosomal degradation, though this figure is difficult to pin to a primary source and should be treated as approximate. #gap/needs-replication

5. **PCSK9-induced diversion** — Poirier 2009 demonstrated that endogenous PCSK9 degrades LDLR primarily via an **intracellular route** (trans-Golgi network → late endosomes/lysosomes), not the extracellular co-endocytosis route described in supra-physiological overexpression studies [^poirier2009]. Blocking clathrin light chains (CLC) to disrupt Golgi→lysosome trafficking in HepG2 cells increased endogenous LDLR ~2.9-fold, whereas blocking cell-surface endocytosis with Dynasore had no significant effect on total LDLR levels. At exogenous pharmacological doses (100 nM), purified PCSK9 can reduce LDLR via the extracellular pathway (binding EGF-A at neutral pH → co-endocytosis → pH-dependent tightening of the PCSK9–EGF-A interaction in the endosome → routing of LDLR to lysosome rather than recycling), but this extracellular route is not the dominant mechanism for endogenously secreted PCSK9. Net effect in either pathway: PCSK9 reduces total cell-surface LDLR abundance and circulating LDL clearance.

## Transcriptional regulation

LDLR expression is controlled by the **SREBP-2 (sterol regulatory element-binding protein 2) / SCAP / INSIG axis** — the cell's internal cholesterol sensor [^mensink2003]:

- **Low intracellular cholesterol:** cholesterol-sensing SCAP escorts SREBP-2 from ER to Golgi → site-1/site-2 proteases cleave the active N-terminal domain → nuclear SREBP-2 transcriptionally activates LDLR (and HMGCR, PCSK9, and other sterol-response genes).
- **High intracellular cholesterol:** excess cholesterol binds SCAP → INSIG retains the SCAP/SREBP-2 complex in the ER → no SREBP-2 release → LDLR transcription suppressed.
- **Statins** (HMG-CoA reductase inhibitors) deplete intracellular cholesterol by blocking [[hmgcr]] → SCAP/INSIG dissociates → SREBP-2 activates → **LDLR expression rises** → more LDL cleared from plasma. This is the primary LDL-lowering mechanism of statins, not the direct cholesterol-synthesis reduction. The [[hmgcr]] block is upstream; the LDLR upregulation is the downstream effector.
- **Dietary palmitate (C16:0)** saturates the INSIG-regulatory pool differently from unsaturated fats, suppressing LDLR transcription more than PUFA; this is the proposed molecular explanation for the Mensink 2003 meta-analysis finding that saturated fat raises LDL-C more than carbohydrate or PUFA at equivalent caloric substitution [^mensink2003]. Note: Mensink 2003 is a clinical meta-analysis and does not directly state this SREBP-2/INSIG mechanism — the mechanistic attribution needs a primary molecular source. #gap/needs-replication See [[srebp-2]] and [[palmitic-acid]] for extended mechanistic detail.
- **PCSK9 is also a direct SREBP-2 target** — meaning statins increase PCSK9 transcription in parallel with LDLR. This self-limiting feedback is why statins alone cannot reduce LDL-C below a threshold; PCSK9 inhibition on top of statin removes that feedback ceiling.

## Familial hypercholesterolemia (FH)

FH is the clinical consequence of LDLR loss-of-function. Over 2,000 LDLR pathogenic variants are catalogued [^defesche2017] [^abifadel2023].

### Genetics

| Genotype | Prevalence | LDL-C | Untreated ASCVD risk |
|---|---|---|---|
| Heterozygous FH (HeFH) | ~1:313 (range 1:250–1:500 across populations; older estimates 1:500) [^abifadel2023] | 190–400 mg/dL | Premature ASCVD by 40s–50s |
| Homozygous FH (HoFH) | ~1:160,000–300,000 [^abifadel2023] | 500–1000 mg/dL | CV death often before age 30 without treatment |

### LDLR mutation classification (Goldstein/Brown 5-class schema)

| Class | Defect | Example consequence |
|---|---|---|
| Class 1 — null | No protein produced | Premature stop codons; frameshift; large deletions |
| Class 2 — transport-defective | Protein made but retained in ER; does not reach Golgi/surface | Missense mutations in LBD (C688Y, etc.) |
| Class 3 — binding-defective | Protein reaches surface but does not bind LDL | Mutations in cysteine-rich repeats disrupting ligand contact |
| Class 4 — internalization-defective | Binds LDL at surface but NPVY motif disrupted; cannot cluster in coated pit | Mutations in cytoplasmic tail |
| Class 5 — recycling-defective | Receptor internalizes and releases cargo but cannot recycle to surface | Mutations in EGF precursor homology domain (β-propeller) |

The class distinction is clinically relevant: Class 2/3 HeFH patients retain some statin-upregulatable LDLR; Class 1/null HoFH patients do not, making them unresponsive to statin-mediated LDLR upregulation [^etxebarria2015].

### Brown & Goldstein Nobel work

The receptor-mediated endocytosis paradigm, including identification of the coated pit as the cellular machinery for LDLR-mediated LDL uptake, was established by Brown and Goldstein in a series of papers culminating in their 1985 Nobel Prize in Physiology or Medicine [^brown1979-pnas] [^goldstein1979-nature].

## Therapeutic relevance

### Statins (↑ LDLR via SREBP-2)

The [[hmgcr]] inhibitors (atorvastatin, rosuvastatin, etc.) increase LDLR surface expression by depleting hepatic cholesterol and activating SREBP-2. The magnitude of LDL-C reduction is proportional to the LDLR upregulation achieved, which is why high-intensity statins reduce LDL-C ~50% and low-intensity statins ~30%. #gap/unsourced — the ~50%/~30% figures are clinically well-established (ACC/AHA guidelines) but lacked a primary source in the original page; cite a statin meta-analysis here, not Rashid 2005 (which is a mouse PCSK9-KO study).

### PCSK9 inhibitors (↑ LDLR surface availability)

- **Evolocumab** (monoclonal antibody, biweekly or monthly SC) and **alirocumab** (biweekly SC) — bind circulating PCSK9, preventing LDLR degradation; increase surface LDLR ~2–3-fold above statin-only levels.
- In the FOURIER trial (n=27,564), evolocumab on background statin therapy reduced median LDL-C from 92 → 30 mg/dL and reduced the composite CV endpoint (HR 0.85, 95% CI 0.79–0.92, p<0.001) vs placebo [^sabatine2017-fourier].
- **Inclisiran** (siRNA targeting hepatic PCSK9 mRNA, twice-yearly injection) — same downstream target (LDLR rescue), different upstream mechanism (mRNA knockdown vs antibody neutralization).

### Evinacumab (ANGPTL3 inhibitor — LDLR-independent)

For HoFH patients with **null/null LDLR genotype**, neither statins nor PCSK9 inhibitors can work (no functional LDLR to upregulate). Evinacumab (anti-ANGPTL3 monoclonal antibody) reduces LDL-C via an LDLR-independent mechanism (ANGPTL3 inhibition activates lipoprotein lipase and endothelial lipase pathways). In LDLR-null HoFH patients, evinacumab with background lipid-lowering therapy achieved profound plaque regression (total plaque volume −76–85% at 6 months in two adolescent null/null patients) [^reeskamp2021]. Also FDA-approved for HoFH as Evkeeza.

### Lomitapide (MTP inhibitor — bypasses LDLR)

Inhibits microsomal triglyceride transfer protein (MTP) in the liver, reducing ApoB-100 assembly into VLDL and LDL — useful as add-on for HoFH patients regardless of LDLR functionality. Severe hepatotoxicity limits long-term use.

## Aging relevance

LDLR is the rate-limiting determinant of plasma LDL clearance. The molecular basis of the age-associated rise in plasma LDL/ApoB is more textured than "hepatic LDLR declines with age":

1. **Hepatic LDLR mRNA is largely flat with age in bulk RNA-seq** — GTEx v10 query (this wiki, 2026-05-21) shows hepatic LDLR ρ = −0.03 across n=262 donors aged 20–79 (essentially no monotonic trend). The prior wiki claim of "modest age-associated decline in hepatic LDLR mRNA" was rodent-anchored and is not robustly replicated in human bulk-tissue data. *However*, bulk RNA-seq is the wrong instrument: aged liver has reduced hepatocyte fraction (immune infiltration, stellate-cell activation, fibrosis), and per-hepatocyte changes can be diluted out.

2. **Per-hepatocyte SREBP-2 is hyperactivated with age (Yang 2024 snRNA-seq)** — single-nucleus atlas of cynomolgus liver aging shows hyperactivated [[srebp-2|SREBP-2]] signaling as a defining feature of aged hepatocytes [^yang2024]. Forced SREBP2 activation in human primary hepatocytes recapitulates aging phenotypes (impaired detoxification, cellular senescence). Since SREBP-2 transcribes *both* LDLR and PCSK9 (the SREBP-2 → PCSK9 SRE feedback paradox; Dubuc 2004, Jeong 2008), the net effect on LDLR protein depends on which arm dominates.

3. **PCSK9-feedback dominance is the load-bearing mechanism for age-related LDLR surface decline** — plasma PCSK9 protein has been reported to rise with age (Cui 2010 / Lakoski 2009 anchor — pre-2015, not directly replicated in healthy age-stratified cohorts post-2019). Whether the PCSK9 protein rise reflects increased SREBP-2-driven transcript (consistent with Yang 2024), increased secretion, reduced plasma clearance, or some combination is not fully resolved. The downstream consequence is consistent: surface LDLR density on hepatocytes is reduced via accelerated lysosomal degradation, plasma LDL clearance falls, and cumulative LDL exposure rises. **PCSK9 inhibition is the most mechanism-specific clinical intervention** against this aging-driven brake — see [[pcsk9]].

4. **Extra-hepatic LDLR may decline more than hepatic** — the largest GTEx aging signal across surveyed tissues is **visceral adipose LDLR**, which drops ~70% from median TPM 109 at age 20-29 to 34 at age 50-59 (ρ = −0.22, n=587). Adipose LDLR mediates lipid delivery for steroidogenesis and energy storage; whether the VAT-LDLR decline reflects real per-adipocyte change or cell-composition shift (aged VAT becoming more inflammatory/stromal) is undetermined without single-cell follow-up. This is a previously-uncharacterized aging signature worth `#gap/needs-replication` tracking — it does not directly drive plasma LDL because adipose is not the dominant clearance compartment, but it may matter for tissue-resident cholesterol biology.

5. **Cumulative LDL exposure (LDL-years)** — the ASCVD risk relationship with LDL-C is cumulative and non-linear; decades of even modestly elevated LDL (e.g., HeFH carriers at 250 mg/dL) lead to accelerated plaque burden regardless of absolute age. This frames LDLR function as a key modulator of the pace of [[atherosclerosis]] — the primary CV phenotype linking lipoprotein biology to aging. The Ference 2024 LDL-years framework on [[apob]] explains why lifelong genetic LDL-lowering (PCSK9-LoF carriers) confers ~3× more CV protection per unit LDL than late-life statin therapy.

6. **LDLR intersects [[chronic-inflammation]] via oxLDL** — LDL that escapes hepatic clearance and enters the subendothelial space undergoes oxidative modification (oxLDL), which is taken up by macrophages via scavenger receptors (not LDLR), forming foam cells. This triggers the inflammatory cascade underpinning [[atherosclerosis]]. LDLR efficiency thus sets the substrate flux for this aging-relevant inflammatory process. The 7-ketocholesterol fraction of plaque cholesterol is specifically efflux-resistant ([[processes/7-ketocholesterol]]) — a separate damage-accumulation lesion downstream of the receptor-decline axis.

7. **Statin responsiveness declines with LDLR loss** — in FH patients, the degree of LDLR functional residual capacity predicts statin response; Class 1/null patients get minimal LDL-C reduction from statins alone. Age-dependent LDLR *protein* decline (via the PCSK9-feedback-dominance mechanism above), if quantitatively significant, would similarly reduce statin efficacy in older adults — but combined statin + PCSK9i would bypass this. #gap/needs-human-replication for the direct quantification.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | LDLR/SREBP-2/PCSK9 axis is fully human-relevant; mouse Ldlr-KO used as FH model |
| Phenotype conserved in humans? | yes | FH is a human Mendelian disease directly from LDLR loss-of-function |
| Replicated in humans? | yes | FOURIER (evolocumab), ODYSSEY OUTCOMES (alirocumab) RCTs directly test LDLR rescue strategy |

## Pathway membership

- [[srebp-pathway]] — LDLR is the primary transcriptional output of the SREBP-2 cholesterol-sensing axis
- [[insulin-igf1]] — insulin promotes LDLR expression in some contexts via Akt/mTORC1; connection to [[deregulated-nutrient-sensing]] #gap/no-mechanism (precise insulin → LDLR mechanistic wiring in human liver not fully resolved)
- Receptor-mediated endocytosis (see [[autophagy]] for the downstream lysosomal degradation pathway)

## Key interactors

- **[[pcsk9]]** — principal post-translational regulator of LDLR abundance; binds EGF-A at neutral pH; diverts LDLR to lysosome at endosomal pH [^poirier2009]
- **[[apob]]** — ApoB-100 is the ligand on LDL (and VLDL) recognized by LDLR's LBD; ApoB mutations (e.g., Arg3500Gln) cause FH2 via reduced LDLR binding rather than LDLR loss-of-function
- **[[srebp-2]]** — master transcriptional activator of LDLR gene; the statin → LDLR upregulation axis runs through SREBP-2
- **[[hmgcr]]** — upstream of SREBP-2; statin inhibition of HMGCR is the trigger for LDLR upregulation

## Wikilinks to related pages

- [[atherosclerosis]] — the downstream phenotypic consequence of LDLR deficiency
- [[familial-hypercholesterolemia]] — clinical syndrome from LDLR loss-of-function; full diagnostic criteria, treatment landscape, cumulative-LDL-exposure framework
- [[palmitic-acid]] — dietary saturated fat suppressing LDLR via INSIG → SREBP-2 mechanism
- [[lipoprotein-metabolism]] — integrated pathway view (chylomicron, VLDL→IDL→LDL cascade, RCT, Lp(a))
- [[chronic-inflammation]] — foam cell formation, SASP from plaque-associated senescent macrophages
- [[altered-intercellular-communication]] — dyslipidemia as a systemic humoral-signaling perturbation relevant to vascular aging

## Limitations and gaps

- ✅ **GTEx aging-extraction completed 2026-05-21** — direct API query (`attributeSubset=ageBracket`) yielded per-age-bracket arrays across liver + 4 metabolically-relevant tissues. Hepatic LDLR ρ = −0.03 (n=262, flat); largest signal is VAT ρ = −0.22 (~70% median TPM decline 20s→50s). Frontmatter field populated. Prior `#gap/needs-gtex-extraction` resolved.
- `#gap/needs-replication` — Yang 2024 snRNA-seq evidence for per-hepatocyte SREBP-2 hyperactivation in aged liver is primate-cohort + human-in-vitro; not yet replicated in aged human liver biopsies/autopsy. Direct quantification of hepatocyte LDLR protein by age in human samples is not yet published.
- `#gap/needs-human-replication` — Whether age-related LDLR surface decline (via PCSK9-feedback dominance) reduces statin monotherapy efficacy in elderly patients is not established in RCT evidence; the additive statin+PCSK9i benefit suggests the mechanism is at least partially LDLR-protein-mediated.
- `#gap/needs-replication` — Visceral adipose LDLR collapse (GTEx v10, ρ=−0.22) is bulk-RNA-seq-only; cell-resolved follow-up needed to distinguish real per-adipocyte change from cell-composition shift (aged VAT inflammation).
- `#gap/needs-replication` — The "~150 recycling cycles per receptor" figure cited in textbooks was not found in Brown & Goldstein 1979 (PNAS), which mentions recycling qualitatively (Fig. 7 labels it "? recycling" — with a question mark, indicating it was hypothetical in 1979). No clean primary-source DOI for this specific figure has been locatable; treat as approximate and do not cite to Brown 1979.
- `#gap/needs-canonical-id` — LDLR not found in GenAge HAGR database (searched by HGNC symbol); either not included or requires HAGRID direct lookup. GenAge-id field left null.
- `#gap/no-fulltext-access` — Etxebarria 2015 (LDLR variant functional classification / statin response), Defesche 2017 (Nat Rev Dis Primers FH review), Reeskamp 2021 (evinacumab plaque regression), Rashid 2005 (Pcsk9-KO mouse data), and Mensink 2003 (dietary fat meta-analysis) are closed-access or suffered repeated PDF fetch failures. Quantitative claims sourced from these papers are unverified against full text.
- `#gap/unsourced` — Statin intensity LDL-C reduction percentages (~50% high-intensity, ~30% low-intensity) cited to Rashid 2005 (wrong paper — mouse PCSK9-KO). Needs citation to a clinical statin meta-analysis (e.g., Cholesterol Treatment Trialists 2010 Lancet).
- `#gap/needs-replication` — The mechanistic claim that dietary palmitate suppresses LDLR specifically via INSIG-SCAP-SREBP-2 signaling is attributed to Mensink 2003 (a clinical dietary meta-analysis); the molecular mechanism needs a primary cell/biochemistry source.
- All key wikilinks resolve as of 2026-05-09: [[familial-hypercholesterolemia]], [[palmitic-acid]], [[srebp-2]], [[hmgcr]], [[lipoprotein-metabolism]] all seeded and verified.

## Footnotes

[^brown1979-pnas]: doi:10.1073/pnas.76.7.3330 · Brown MS, Goldstein JL · *PNAS* 1979 · n/a · review/mechanistic · model: human fibroblasts, HepG2; established two-domain (binding + internalization) model of LDL receptor; coated-pit clustering mechanism; local archive: pending

[^goldstein1979-nature]: doi:10.1038/279679a0 · Goldstein JL, Anderson RGW, Brown MS · *Nature* 1979 · n/a · mechanistic · model: human fibroblasts; defined coated pits as the universal machinery for receptor-mediated endocytosis; Nobel-prize work; local archive: not_oa

[^poirier2009]: doi:10.1074/jbc.M109.037085 · Poirier S et al. · *J Biol Chem* 2009 · in-vitro + in-vivo · model: HepG2 cells + primary mouse hepatocytes (Pcsk9−/−); demonstrated that **endogenous** PCSK9 degrades LDLR primarily via intracellular (trans-Golgi → late endosome/lysosome) route — CLC knockdown increased LDLR ~2.9-fold; Dynasore (blocks surface endocytosis) had no significant effect; exogenous 100 nM PCSK9 can additionally engage extracellular route, but is not representative of endogenous concentrations (~4 nM secreted from naïve HepG2 cells); local archive: completed

[^defesche2017]: doi:10.1038/nrdp.2017.93 · Defesche JC, Gidding SS et al. · *Nat Rev Dis Primers* 2017 · review · systematic; >2000 LDLR variants catalogued; clinical genetics, phenotypic spectrum, treatment guidelines for FH; local archive: not_oa #gap/no-fulltext-access

[^abifadel2023]: doi:10.1111/joim.13577 · Abifadel M, Boileau C · *J Internal Med* 2023 · review · comprehensive genetics + therapeutics update for FH (LDLR, APOB, PCSK9, APOE); includes PCSK9 inhibitor clinical context; local archive: completed

[^sabatine2017-fourier]: doi:10.1056/NEJMoa1615664 · Sabatine MS et al. (FOURIER trial) · *NEJM* 2017 · rct · n=27,564; evolocumab vs placebo on background statin; LDL-C 92→30 mg/dL; composite CV endpoint HR 0.85 (95% CI 0.79–0.92; p<0.001); established that aggressive LDLR rescue via PCSK9 inhibition reduces CV events; local archive: completed

[^etxebarria2015]: doi:10.1002/humu.22721 · Etxebarria A et al. · *Hum Mutat* 2015 · in-vitro functional study · classification of LDLR variants across 5 mutation classes; showed Class 2/3 HeFH patients have greater statin LDL-C response than Class 5; local archive: not_oa #gap/no-fulltext-access — specific statin-response finding unverified against full text

[^reeskamp2021]: doi:10.1016/j.atherosclerosis.2021.04.014 · Reeskamp LF et al. · *Atherosclerosis* 2021 · observational · n=2 (null/null HoFH adolescents); evinacumab + combination therapy → total plaque volume −76–85% at 6 months; proof-of-concept that ANGPTL3 inhibition rescues LDL clearance independent of LDLR; local archive: failed download #gap/no-fulltext-access — plaque regression figures unverified against full text; paper is listed as hybrid OA but PDF fetch failed repeatedly

[^mensink2003]: doi:10.1093/ajcn/77.5.1146 · Mensink RP et al. · *Am J Clin Nutr* 2003 · meta-analysis · 60 controlled metabolic-ward trials; saturated fat (esp. palmitate) raises LDL-C and total:HDL ratio relative to PUFA and carbohydrate; local archive: failed download #gap/no-fulltext-access — mechanistic claim about SREBP-2/INSIG regulation attributed to this paper is likely inference not directly stated in a meta-analysis of clinical trials; recommend verifying or finding a mechanistic primary source

[^pcsk9ko2005]: doi:10.1073/pnas.0501652102 · Rashid S et al. · *PNAS* 2005 · in-vivo · model: Pcsk9-null mice; hepatic LDLR protein increased; plasma cholesterol 46 vs 96 mg/dL (WT); hypersensitivity to statins; established that PCSK9 is the dominant post-translational regulator of hepatic LDLR protein abundance; local archive: failed download (green OA but fetch failed) #gap/no-fulltext-access — specific plasma cholesterol figures unverified against full text

[^yang2024]: [[studies/yang-2023-primate-liver-aging-snrna-srebp2]] · doi:10.1093/procel/pwad039 · PMID 37378670 · PMC10833472 · Yang S, Liu C,... Liu GH (Aging Biomarker Consortium) · *Protein & Cell* 2024;15(2):98-120 · in-vivo (cynomolgus monkey snRNA-seq atlas) + in-vitro (human primary hepatocyte forced SREBP2 activation) · **hyperactivated SREBP signaling is a hallmark of the aged primate liver across all three hepatocyte zonations; forced SREBP2 is sufficient to recapitulate aging phenotypes** · Gold OA · ⚠️ abstract-verified 2026-05-21; full PDF read pending — study page is `verified: false`
