---
type: protein
aliases: [apolipoprotein B-100, apolipoprotein B-48, ApoB-100, ApoB-48, APOB, FCHL2, FLDB, LDLCQ4]
uniprot: P04114
ncbi-gene: 338
hgnc: 603
ensembl: ENSG00000084674
genage-id: null
pathways: ["[[lipoprotein-metabolism]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: yes
caused-by: ["[[srebp-2]]", "[[hmgcr]]"]
causes: ["[[atherosclerosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Richardson 2020 PDF-verified (instrument counts, sample sizes, OR statistics). Sniderman 2019 cross-checked via PMC7369156 (stoichiometry, isoform biology; no structural residue detail in this review). Ference 2024 unverifiable — closed access, ~3× claim tagged #gap/no-fulltext-access. Mensink 2003 unverifiable — bronze OA, download failed, 0.036 mmol/L coefficient tagged #gap/no-fulltext-access. Canonical-DB identity fields (UniProt P04114, NCBI Gene 338, HGNC 603, Ensembl ENSG00000084674) re-verified via UniProt REST API and Crossref; isoform lengths corrected (precursor 4,563 aa vs mature ApoB-100 4,536 aa)."
literature-checked-through: 2026-05-09
---

# ApoB (APOB)

Apolipoprotein B is the obligatory structural protein of every atherogenic lipoprotein particle — VLDL, IDL, LDL, and Lp(a). Because each particle carries exactly one ApoB molecule, circulating ApoB concentration is the best available proxy for atherogenic particle number, making it the most mechanistically direct blood biomarker of atherosclerotic cardiovascular disease (ASCVD) risk. Mendelian randomization establishes ApoB/LDL as causal for ASCVD with high confidence. Multiple FDA-approved drug classes lower circulating ApoB, giving this protein a tier-1 druggability designation [^sniderman2019][^richardson2020].

## Identity

- **UniProt:** P04114 (APOB_HUMAN) — Swiss-Prot reviewed entry, accessed 2026-05-09
- **NCBI Gene:** 338
- **HGNC:** 603 (symbol: APOB)
- **Ensembl:** ENSG00000084674
- **Chromosomal location:** 2p24.1
- **Canonical isoform length:** 4,563 amino acids (ApoB-100 precursor including 27-aa signal peptide; UniProt P04114 chain ApoB-100 = residues 28–4563, i.e., **4,536 aa** mature protein)
- **Mouse ortholog:** Apob (high conservation; same lipid-transport role; mice are naturally low-ApoB due to robust MTP expression differences — see extrapolation section below)

## Two isoforms from one gene: ApoB-100 and ApoB-48

The *APOB* gene produces two functionally distinct protein isoforms via tissue-specific **RNA editing**:

| Feature | ApoB-100 | ApoB-48 |
|---|---|---|
| Length | 4,563 aa precursor; **4,536 aa mature** (UniProt chain residues 28–4563) | **2,152 aa mature** (UniProt chain residues 28–2179) |
| Produced by | Hepatocytes (liver) | Enterocytes (small intestine) |
| Mechanism | Unedited mRNA | C6666U RNA editing by APOBEC1 (cytidine deaminase) converts Gln2153 codon (CAA) to a stop codon (UAA) |
| Lipoprotein carriers | VLDL → IDL → LDL; also Lp(a) | Chylomicrons only |
| LDLR-binding | Yes — retains the LDLR-binding domain (~residues 3,345–3,381) | No — truncated before the receptor-binding region |
| Clearance | LDLR-mediated (liver) and hepatic ApoE-mediated | Primarily ApoE-mediated via LRP1; no LDLR binding |

In humans, hepatic APOBEC1 activity is very low; ApoB-48 is produced almost exclusively in the intestine. This is a key divergence from rodents, where hepatic RNA editing is significant, making mouse lipoprotein metabolism a partially confounded model for human cardiovascular disease [^sniderman2019]. #gap/needs-human-replication for any mechanistic claim derived from murine ApoB metabolism.

## Structure of ApoB-100

ApoB-100 has a pentapartite domain architecture often described by the shorthand βα₁β₁α₂β₂:

| Domain | Approximate residues | Structure type | Function |
|---|---|---|---|
| βN | 1–1,000 | Lipovitellin-like (β-barrel + α) | MTP-binding site; initiates lipid loading in ER |
| α₁ | 1,001–2,000 | Amphipathic α-helices | Lipid-associating; structural |
| β₁ | 2,001–2,800 | β-sheet rich | Structural; possibly heparan sulfate proteoglycan binding |
| α₂ | 2,801–3,100 | Amphipathic α-helices | Structural |
| β₂ | 3,100–4,563 | β-sheet rich | Contains **LDLR-binding region** (residues ~3,345–3,381; classically called "site B") |

The classical LDLR-binding site B encompasses a cluster of positively charged residues (Arg-3,359 and surrounding arginines and lysines) that interact electrostatically with the negatively charged EGF-A domain of LDLR. This region is absent from ApoB-48. The site B assignment is historically attributed to structural work using tryptic peptides; precise atomic-resolution co-crystal structure of full-length ApoB-100 bound to LDLR has not been published as of 2026 [^sniderman2019]. #gap/unsourced — exact residue boundaries of site B vary in the literature (some sources cite 3,345–3,381, others 3,359–3,369); verification against a primary structural source is needed.

## "One ApoB per particle" — why particle count matters

Each lipoprotein particle (VLDL, IDL, LDL, Lp(a)) contains **exactly one molecule of ApoB-100**. This 1:1 stoichiometry is structurally obligatory: ApoB-100 wraps around the lipoprotein phospholipid shell and is not displaced or supplemented by additional ApoB copies [^sniderman2019].

**Clinical implication:** LDL-cholesterol (LDL-C) measures cholesterol mass, not particle number. Two individuals with identical LDL-C may have dramatically different atherogenic particle burdens — one with large, cholesterol-rich LDL (fewer particles) and one with small, cholesterol-depleted LDL (more particles). The small-LDL individual has higher ApoB-particle count and correspondingly higher atherosclerotic risk. ApoB captures particle count directly and is thus superior to LDL-C as an atherogenic-burden marker [^sniderman2019][^richardson2020].

**Mendelian randomization evidence:** Multivariable MR analyses that simultaneously instrument ApoB and LDL-C consistently attribute the causal cardiovascular effect to ApoB, not to LDL-C independently. Richardson et al. (PLoS Medicine, 2020) performed a de novo GWAS of lipoprotein traits in UK Biobank participants (n ranging 393,193–441,016 across traits; ApoB measured in 439,214) identifying 255 SNPs associated with ApoB; multivariable MR using 531 combined SNPs across traits showed that only ApoB retained a robust effect on CHD risk (OR 1.92; 95% CI: 1.31–2.81; P = 7.47×10⁻⁴), while LDL-C reversed direction (OR 0.85; 95% CI: 0.57–1.27; P = 0.44) and triglycerides weakened substantially (OR 1.12; 95% CI: 1.02–1.23; P = 0.01) [^richardson2020]. Zuber et al. (Int J Epidemiology, 2020) used high-throughput multivariable MR and similarly prioritized ApoB as the key causal lipid risk factor for coronary artery disease [^zuber2021]. The hierarchy of causal specificity from these analyses is: **ApoB > non-HDL-C > LDL-C** as markers of atherogenic burden.

## Lipoprotein assembly and secretion

ApoB-100 is synthesized in the rough ER of hepatocytes. Its assembly with lipid is co-translational and absolutely dependent on **microsomal triglyceride transfer protein (MTP)**, which loads triglyceride and phospholipid onto the nascent peptide chain as it threads through the translocon [^sniderman2019]. Without MTP activity, ApoB-100 is retrotranslocated and degraded via the ubiquitin-proteasome system — a quality-control mechanism that gates VLDL secretion.

**Assembly sequence:**
1. ApoB-100 translation begins; N-terminal lipovitellin-like βN domain recruits MTP.
2. MTP loads a small primordial lipid droplet onto the nascent chain (1st lipidation step).
3. Translation continues; partially lipidated ApoB transits the ER lumen.
4. Bulk triglyceride loading occurs post-translationally in a 2nd lipidation step (pre-VLDL → VLDL₁/VLDL₂).
5. VLDL is secreted into plasma via the Golgi apparatus.

ApoB-48 assembly in enterocytes follows a parallel MTP-dependent pathway to produce chylomicrons during intestinal fat absorption.

## Clearance via LDLR

After secretion, VLDL is lipolyzed by lipoprotein lipase (LPL) in peripheral tissues (muscle, adipose), progressively losing triglyceride to yield IDL and then LDL. Throughout this cascade, the single ApoB-100 molecule remains on the particle surface. LDL (the end-product) is cleared from plasma primarily by hepatic LDLR:

1. ApoB-100 site B binds the EGF-A repeat of LDLR on the hepatocyte surface.
2. The LDL:LDLR complex is internalized by clathrin-coated vesicles.
3. Endosomal acidification (pH ~5.5) triggers LDLR conformational change → LDL released into lysosome for degradation; LDLR recycled to surface.
4. PCSK9 disrupts step 3 — see [[pcsk9]] for mechanism.

LDLR expression is regulated transcriptionally by [[srebp-2]], which is activated when cellular cholesterol is depleted. Statins inhibit [[hmgcr]] (rate-limiting step in cholesterol synthesis), deplete cellular cholesterol, activate SREBP-2, upregulate LDLR, and thereby increase ApoB-LDL clearance — the mechanistic basis for statin efficacy.

## Dietary regulation of plasma ApoB

Saturated fatty acids (SFAs), especially **palmitic acid (C16:0)** and myristic acid (C14:0), raise plasma ApoB-containing lipoproteins by multiple mechanisms:

1. **SREBP-2 suppression:** SFAs promote cholesterol esterification and sequestration, reducing the SREBP-2 activation signal, downregulating hepatic LDLR, and impairing LDL clearance.
2. **Enhanced VLDL-ApoB secretion:** SFAs increase hepatic triglyceride synthesis, driving greater VLDL-ApoB secretion from hepatocytes.
3. **LPL competition:** Saturated fats in the diet may impair LPL-mediated VLDL lipolysis.

Mensink et al. (AJCN, 2003) conducted a meta-analysis of 60 controlled dietary trials. The primary outcome was the ratio of total cholesterol to HDL-C; the paper also analyzed LDL-C, HDL-C, and apolipoproteins. The abstract and publicly available text confirm the primary focus is on total:HDL ratio effects, with the key finding that replacing saturated fatty acids with cis unsaturated fatty acids reduces the total:HDL ratio, while replacing SFAs with carbohydrates does not. A commonly cited figure of ~0.036 mmol/L rise in LDL-C per 1% energy from SFA (replacing carbohydrate) is attributed to this paper's regression tables, but this specific coefficient could not be PDF-verified (the paper is not OA via PMC and the download failed). The paper title includes "apolipoproteins" suggesting ApoB data are reported in the full tables, but ApoB-specific effect sizes are not stated in the abstract. #gap/no-fulltext-access — Mensink 2003 AJCN download failed (bronze OA, Cloudflare-blocked); the 0.036 mmol/L SFA→LDL-C coefficient is plausible but unverified from the PDF. [^mensink2003] #gap/needs-replication — a dedicated meta-analysis of dietary fat effects specifically on ApoB-particle count (not LDL-C) is not available from training knowledge; ApoB-specific dietary trial data is sparser than LDL-C data.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ApoB/LDLR/MTP axis is directly human-validated |
| Phenotype conserved in humans? | yes — dietary-fat → LDL-C effects are replicated across human metabolic-ward studies |
| Replicated in humans? | yes — 60 controlled trials meta-analyzed |

## Aging relevance: cumulative ApoB exposure and ASCVD

Atherosclerosis is fundamentally a disease of cumulative lifetime ApoB-particle exposure [^ference2024]. ApoB-containing particles that cross the endothelium, become trapped in the subintimal space, and undergo oxidative modification drive foam cell formation, plaque growth, and ultimately plaque rupture. The key insight from Mendelian randomization is that ApoB particles accumulated over decades — not just current LDL-C — determine eventual ASCVD risk.

**Cumulative exposure model:** MR analyses using genetic instruments for LDLR and PCSK9 LOF (which lower ApoB from birth) show substantially larger cardiovascular protection per unit LDL-C reduction than statin trials starting in middle age. The foundational quantification is the [[studies/ference-2012-ldl-mr-lifetime|Ference 2012 MR meta-analysis]] (n=312,321; 9 polymorphisms / 6 genes): each 1 mmol/L lower *lifelong* LDL-C confers a **54.5% (95% CI 48.8–59.5%) CHD risk reduction — ~3× the per-unit benefit of a statin started later in life** (p=8.43×10⁻¹⁹) [^ference2012]. The inferred explanation is that decades of lower ApoB exposure prevent early atherosclerotic nidus formation — changes difficult to reverse once established; Ference's 2024 *Nature Reviews Cardiology* review restates this cumulative-exposure ("LDL-years") framework [^ference2024]. The implication for personal aging strategy is that ApoB reduction initiated earlier conveys disproportionate geroprotective benefit relative to standard cardiovascular prevention benchmarks.

**ApoB as aging-clock-adjacent biomarker:** While ApoB is not a molecular aging clock per se, it encodes cumulative atherogenic stress that tracks chronological age in populations with typical western dietary patterns. At 60+, plasma ApoB above ~90 mg/dL corresponds to LDL-particle burden associated with clinically prevalent coronary atherosclerosis [^sniderman2019]. The user's target of ApoB <70 mg/dL aligns with the threshold corresponding to median population-level cardiovascular risk minimization in MR analyses, extrapolated from lifetime-exposure models.

## Genetic landscape

### Familial hypercholesterolemia type 2 (FH2 / FHCL2)

GOF mutations in the LDLR-binding region of ApoB-100 (most commonly **Arg3527Gln**, historically called "FH-Bethesda" or "ApoB-3527") impair LDL clearance, causing autosomal dominant hypercholesterolemia with LDL-C typically 200–300 mg/dL and premature coronary artery disease [^sniderman2019]. This is the second most common FH genotype after LDLR mutations, occurring in ~1:500 to 1:700 individuals of European ancestry. See [[familial-hypercholesterolemia]] for the full clinical syndrome, diagnostic criteria, and treatment landscape.

### Familial hypobetalipoproteinemia (FHBL)

LOF truncating mutations (premature stop codons) in *APOB* reduce ApoB secretion, causing low plasma LDL-C and apparent cardiovascular protection in carriers — a human genetic experiment paralleling PCSK9 LOF. FHBL1 is one of several low-LDL genetic syndromes validating ApoB reduction as safe and protective. Severe homozygous truncations cause fat malabsorption (abetalipoproteinemia-like), underscoring that ApoB is essential for fat-soluble vitamin absorption in the gut (ApoB-48 / chylomicrons).

### GWAS

Multiple GWAS loci near *APOB* (and at PCSK9, LDLR, SORT1, HMGCR, NPC1L1) collectively explain a substantial fraction of plasma LDL-C and ApoB variance. These variants are the basis for multivariable MR instruments that prioritize ApoB as the causal cardiovascular signal [^richardson2020][^zuber2021].

## Therapeutic targeting

All approved therapies that lower cardiovascular risk via lipid pathways operate by reducing circulating ApoB-particle number, though via different upstream mechanisms. Druggability tier = 1: multiple FDA-approved drugs with large outcomes RCTs.

| Drug class | Mechanism | ApoB-particle effect | Reference |
|---|---|---|---|
| **Statins** (e.g., atorvastatin, rosuvastatin) | HMGCR inhibition → ↓ cholesterol synthesis → ↑ SREBP-2 → ↑ LDLR → ↑ LDL clearance | ~30–50% ↓ ApoB | CTT 2010 |
| **PCSK9 inhibitors** (evolocumab, alirocumab) | Block PCSK9-LDLR interaction → ↑ LDLR recycling → ↑ ApoB-LDL clearance | ~50–60% ↓ ApoB on top of statin | See [[pcsk9]] |
| **Inclisiran** (siRNA) | PCSK9 mRNA silencing in hepatocytes → ↓ PCSK9 → ↑ LDLR | ~50% ↓ ApoB (durable, 2×/yr dosing) | See [[pcsk9]] |
| **Ezetimibe** | NPC1L1 inhibition → ↓ intestinal cholesterol absorption → ↑ LDLR | ~15–20% ↓ ApoB | #gap/unsourced — ezetimibe-specific ApoB effect cited from training; DOI needed |
| **Bempedoic acid** | ATP-citrate lyase (ACLY) inhibition in hepatocytes → ↓ cholesterol synthesis → ↑ LDLR (liver-specific, lacks skeletal muscle activation) | ~15–20% ↓ LDL-C (ApoB data sparser) | #gap/unsourced — DOI needed |
| **Lomitapide** | Direct MTP inhibition in hepatocytes → ↓ VLDL/ApoB-100 secretion | ~50% ↓ ApoB (severe reduction; used in homozygous FH) | #gap/unsourced — DOI needed; hepatotoxicity risk limits use |
| **Olpasiran / pelacarsen** (Lp(a)-targeting) | Silence LPA gene (olpasiran siRNA) or antisense (pelacarsen) → ↓ Lp(a) ApoB particles | Selectively reduce Lp(a)-ApoB | Wu 2026 Pharmacol Res [^wu2026] |

**Mipomersen** (antisense oligonucleotide targeting ApoB-100 mRNA) was FDA-approved in 2013 for homozygous FH but withdrawn from the market in 2019 due to liver toxicity (hepatic fat accumulation, injection-site reactions), illustrating the on-target hepatotoxicity risk when hepatic ApoB secretion is severely suppressed.

**Druggability tier = 1 rationale (aging context):** Multiple FDA-approved drugs (statins, PCSK9i, inclisiran) with large phase-3 cardiovascular outcomes trials — FOURIER (evolocumab, n=27,564), ODYSSEY OUTCOMES (alirocumab, n=18,924), ORION-10/11 (inclisiran) — directly modulate ApoB-particle clearance and reduce hard MACE endpoints [^ctt2010].

## Pathway context

ApoB-100 does not belong to a classical intracellular signaling pathway; it functions at the **lipoprotein metabolism** level. Key pathway relationships:

- **Upstream synthesis regulators:** [[srebp-2]] (LDLR and PCSK9 transcriptional co-regulation), [[hmgcr]] (cholesterol synthesis rate-setter), [[mtp]] (MTP; ApoB lipidation gatekeeper)
- **Key interactors:** [[ldlr]] (clearance receptor), [[pcsk9]] (LDLR degrader), [[lpa]] (Lp(a) — second ApoB-containing particle, containing ApoB-100 covalently linked to apo(a) via disulfide bond)
- **Downstream pathways:** [[atherosclerosis]] — ApoB-particle retention in the arterial wall initiates the atherogenic cascade; [[chronic-inflammation]] — oxidized ApoB particles drive macrophage foam cell SASP-like inflammation

For the integrated pathway view (chylomicron assembly, VLDL secretion, VLDL→IDL→LDL cascade, reverse cholesterol transport, Lp(a), free fatty acid flux), see [[lipoprotein-metabolism]]. ApoB is the anchoring apolipoprotein for the exogenous and endogenous sub-pathways of that page.

## Extrapolation: mouse vs human

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | MTP/ApoB/LDLR axis conserved; key mechanistic steps identical |
| Phenotype conserved in humans? | yes | ApoB-particle accumulation drives atherosclerosis in both |
| Key divergence | partial | Mice naturally have robust hepatic APOBEC1 → higher ApoB-48 fraction from liver; naturally high HDL and low ApoB-100 levels; do not spontaneously develop atherosclerosis unless on high-fat/high-cholesterol diets or ApoE/LDLR knockout backgrounds. Mouse dietary-lipid findings transfer mechanistically but not quantitatively to humans |

## Limitations and gaps

- **`gtex-aging-correlation: null`** — GTEx aging-trajectory data for hepatic APOB expression not yet pulled. #gap/unsourced
- **MTP protein page** — [[mtp]] (microsomal triglyceride transfer protein, gene MTTP) seeded 2026-05-09. Anchor for the chylomicron + VLDL assembly mechanism in [[lipoprotein-metabolism]]; lomitapide target for HoFH treatment.
- **Lp(a) ApoB particle specifics** — Lp(a) is an ApoB-100-containing particle with kringle-5 domain-dependent Lp(a) atherogenic and thrombotic biology distinct from LDL. Full Lp(a) mechanism warrants a dedicated page `[[lpa]]`.
- **ApoB-particle count biomarker page** — `[[apob-particle-count]]` is a forward reference for the clinical biomarker interpretation page. Direct ApoB concentration measurement (mg/dL, ~0.67 × particle count in nmol/L) would be the natural companion.
- **Dietary ApoB meta-analysis** — a dedicated RCT-level meta-analysis of dietary fat effects specifically on ApoB (not LDL-C) is not robustly available; Mensink 2003 covers LDL-C and total:HDL as proxies. #gap/needs-replication
- **Ezetimibe, bempedoic acid, lomitapide ApoB data** — specific ApoB-reducing effect sizes for these drugs noted as `#gap/unsourced` above; DOIs needed.

## Footnotes

[^sniderman2019]: doi:10.1001/jamacardio.2019.3780 · Sniderman AD et al. · *JAMA Cardiology* 2019 · review · n=N/A · model: human · 530 citations; canonical narrative review arguing ApoB is superior to LDL-C for atherogenic-particle quantification; "one ApoB per particle" stoichiometry confirmed via PMC7369156 full-text ("a single molecule of apoB48 or apoB100 encircles the lipoprotein particle"); isoform biology present but NO specific residue numbers for LDLR site B cited in this review; clinical implications · cross-checked against PMC7369156 2026-05-09; DOI lookup failed (0 candidate URLs after filtering)

[^richardson2020]: doi:10.1371/journal.pmed.1003062 · Richardson TG et al. · *PLoS Medicine* 2020 · mendelian-randomization · n=393,193–441,016 UK Biobank (ApoB measured in 439,214; CHD outcome from CARDIoGRAMplusC4D: 60,801 cases / 123,504 controls) · model: human · de novo GWAS identified 255 SNPs for ApoB; multivariable MR with 531 combined SNPs: ApoB OR 1.92 (95% CI 1.31–2.81; P=7.47×10⁻⁴), LDL-C reversed to OR 0.85 (95% CI 0.57–1.27; P=0.44), TG weakened to OR 1.12 (95% CI 1.02–1.23; P=0.01); apoB is the predominant causal CHD signal · PDF-verified 2026-05-09

[^zuber2021]: doi:10.1093/ije/dyaa216 · Zuber V, Burgess S et al. · *International Journal of Epidemiology* 2020 · mendelian-randomization · n=>300,000 (UK Biobank) · model: human · high-throughput multivariable MR; ApoB prioritized as key lipid risk factor for CAD · not yet PDF-verified (download pending)

[^mensink2003]: doi:10.1093/ajcn/77.5.1146 · Mensink RP et al. · *American Journal of Clinical Nutrition* 2003 · meta-analysis · n=60 controlled dietary trials · model: human · primary outcome: total:HDL cholesterol ratio; replacing SFAs with cis-unsaturated fatty acids reduces total:HDL ratio; replacing SFAs with carbohydrates does not change the ratio; paper title includes apolipoproteins suggesting ApoB data in tables; specific SFA→LDL-C coefficient of 0.036 mmol/L per 1% energy could not be PDF-verified (download failed — bronze OA, Cloudflare-blocked); **#gap/no-fulltext-access** — ApoB-specific effect sizes unverifiable without full text · 2,767 citations

[^ference2012]: [[studies/ference-2012-ldl-mr-lifetime]] · doi:10.1016/j.jacc.2012.09.017 · Ference BA, Yoo W, Alesh I, et al. · *JACC* 2012;60(25):2631–2639 · PMID 23083789 · n=312,321 · Mendelian randomization meta-analysis (9 polymorphisms / 6 genes) · model: human genetics · 54.5% (95% CI 48.8–59.5%) CHD reduction per 1 mmol/L lower lifelong LDL-C, ~3× the statin per-unit effect, p=8.43×10⁻¹⁹, I²=0.0% · closed-access, abstract-confirmed (primary source for the ~3× figure).

[^ference2024]: doi:10.1038/s41569-024-01039-5 · Ference BA · *Nature Reviews Cardiology* 2024 · review · n=N/A · model: human · restates the cumulative-LDL-exposure ("LDL-years") framework quantified in [^ference2012]; 97 citations · closed-access (not_oa) — context/framing cite only; the load-bearing ~3× number comes from the primary [^ference2012].

[^ctt2010]: doi:10.1016/s0140-6736(10)61350-5 · Cholesterol Treatment Trialists' (CTT) Collaboration · *The Lancet* 2010 · meta-analysis · n=170,000 participants in 26 randomised trials · model: human · intensive vs standard statin therapy; ~1 mmol/L LDL-C reduction → ~22% proportional ↓ major vascular events; 6,252 citations · not yet PDF-verified (download pending)

[^wu2026]: doi:10.1016/j.phrs.2026.108178 · Wu AX et al. · *Pharmacological Research* 2026 · meta-analysis (network) · n=multiple RCTs · model: human · comparative efficacy and safety of novel Lp(a)-lowering therapies for ASCVD prevention · not yet PDF-verified (recent; download not yet available)
