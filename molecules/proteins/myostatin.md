---
type: protein
aliases: [MSTN, GDF8, growth and differentiation factor 8, GDF-8]
uniprot: O14793
ncbi-gene: 2660
hgnc: 4223
ensembl: ENSG00000138379
genage-id: null
mouse-ortholog: Mstn
is-noncoding-rna: false
complex-subunits: []
key-domains: [signal-peptide, LAP-propeptide, TGF-beta-C-terminal-active-dimer, cystine-knot]
key-ptms: [furin-cleavage-site, tolloid-metalloproteinase-activation]
pathways: ["[[tgf-beta]]", "[[smad2-smad3]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[loss-of-proteostasis]]"]
druggability-tier: 1
caused-by: []
causes: ["[[sarcopenia]]"]
gtex-aging-correlation: null
mr-causal-evidence: partial
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "McPherron 1997 (Nature), Schuelke 2004 (NEJM), Lee & McPherron 2001 (PNAS), and Rooks 2017 (J Cachexia Sarcopenia Muscle) verified against local PDFs end-to-end. LeBrasseur 2009 (J Gerontol) verified against OA landing-page abstract (full PDF download failed — bronze OA, 0 candidate URLs after filtering). White & LeBrasseur 2014 (Gerontology) not_oa — abstract only via Crossref; quantitative claims unverifiable from full text. Canonical-database identity fields (UniProt, NCBI Gene, HGNC, Ensembl) not independently re-verified against databases."
---

# Myostatin (MSTN / GDF8)

Myostatin is a secreted TGF-β superfamily ligand that acts as the dominant negative regulator of skeletal muscle mass. Loss-of-function mutations in any species studied — cattle, sheep, dogs, humans — produce dramatic muscle hypertrophy with little phenotype elsewhere, making it the most compelling single-gene lever over muscle mass known. In aging, myostatin expression rises while its natural antagonists (follistatin, FSTL3) fall, contributing mechanistically to [[sarcopenia]].

## Identity

- **UniProt:** O14793 (MSTN_HUMAN) — Swiss-Prot manually reviewed entry
- **NCBI Gene:** 2660
- **HGNC:** 7546; symbol MSTN
- **Ensembl:** ENSG00000138379
- **Mouse ortholog:** Mstn (one-to-one ortholog; sequence and function essentially identical)
- **Precursor length:** 375 amino acids; ~42.75 kDa full-length precursor
- **Mature active dimer:** C-terminal fragment, residues 267–375 after furin-site cleavage

## Processing and secretion

Myostatin is synthesized as an inactive pre-pro-peptide that undergoes sequential proteolytic processing before achieving biological activity [^mcpherron1997]:

1. **Signal peptide removal** (residues 1–23) — directed into the secretory pathway.
2. **Furin cleavage** at a RXXR site — separates the N-terminal latency-associated peptide (LAP, residues 24–266) from the C-terminal active dimer domain.
3. **Non-covalent LAP association** — after cleavage, LAP remains bound to the active dimer, holding it in a circulating **large latent complex** (LLC) that is biologically inert. Follistatin can bind and further sequester the LLC.
4. **Tolloid metalloproteinase cleavage** of LAP — releases the active C-terminal dimer, which then signals through its receptors. This is the rate-limiting activation step in vivo.

The existence of multiple latency layers means circulating total myostatin substantially overestimates active myostatin levels; this is a key translational measurement challenge. #gap/dose-response-unclear

## Signaling mechanism

Active myostatin dimer signals canonically through:

1. **ACVR2B** (activin receptor IIB) — high-affinity binding; the primary functional receptor in skeletal muscle
2. **ALK4 / ALK5** (type I co-receptors) — recruited and transphosphorylated by ACVR2B
3. **SMAD2/SMAD3 phosphorylation** → nuclear translocation with SMAD4 → transcription of pro-atrophy genes (by analogy with TGF-β; downstream transcription program established in subsequent literature, not directly demonstrated in Lee & McPherron 2001 [^lee-mcpherron2001]):
   - **Atrogin-1 (FBXO32, MAFbx)** and **MuRF1 (TRIM63)** — muscle-specific E3 ubiquitin ligases driving proteasomal degradation of myofibrillar proteins
   - **FoxO transcription factors** — activated downstream; also upregulate atrogin-1/MuRF1
   - **Inhibition of Akt/mTOR** — myostatin signaling antagonizes IGF-1-stimulated Akt phosphorylation, suppressing protein synthesis and [[satellite-cells|satellite cell]] activation

Key natural antagonists that bind and neutralize myostatin:
- **[[follistatin]]** (FST) — high-affinity sequestration; overexpression produces hypertrophy equivalent to myostatin knockout [^lee-mcpherron2001]
- **FSTL3** — related follistatin-like protein; partially redundant
- **WFIKKN2 / GASP-1** — extracellular binding protein

## Role in aging

### Expression changes with age

Myostatin protein levels and signaling activity increase in aged skeletal muscle relative to young adults, while follistatin levels decline — net result is a shift toward pro-atrophy signaling [^white-lebrasseur2014]. This age-associated imbalance is proposed as a key contributor to the ~1% per year loss of muscle mass seen in humans after age 50. #gap/needs-replication — quantitative estimates of fold-change vary across studies and cohorts; a large longitudinal cohort with serial biopsies would resolve this.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ACVR2B/SMAD2/3/atrogin-1 axis identical; natural human LOF mutations recapitulate mouse hypertrophy |
| Phenotype conserved in humans? | yes | Schuelke 2004 NEJM case; cattle/sheep/dog LOF all produce muscle hypertrophy |
| Replicated in humans? | in-progress | Multiple Phase 2 trials of anti-myostatin antibodies; no Phase 3 success in any indication yet |

### Myostatin inhibition enhances exercise response in aged muscle

In 24-month-old mice, pharmacological myostatin blockade (via anti-myostatin antibody PF-354) combined with exercise doubled treadmill endurance and improved insulin sensitivity versus exercise alone. Each intervention alone produced ~30% reductions in muscle fatigue [^lebrasseur2009]. This suggests myostatin may set an upper ceiling on exercise-induced muscle adaptation that rises with age. #gap/needs-human-replication

### Satellite cell regulation

Myostatin is a potent inhibitor of [[satellite-cells|satellite cell]] (muscle stem cell) activation and self-renewal. Elevated myostatin in aged muscle is hypothesized to suppress the regenerative capacity of satellite cells, linking this pathway to the [[stem-cell-exhaustion]] hallmark. Myostatin-null mice show expanded satellite cell pools. #gap/needs-human-replication

## Human genetics: natural loss-of-function

A child bearing a homozygous loss-of-function splice-site mutation in MSTN (g.IVS1+5 g→a transition in both alleles, causing missplicing and nonsense-mediated mRNA decay) was observed at birth to have extraordinary muscle development; by age 4.5 years, the child could hold two 3-kg dumbbells with arms extended horizontally [^schuelke2004]. No adverse phenotypes were reported at the time of publication. The mother carried one null allele and was described as notably strong, consistent with dosage sensitivity. This is the strongest single-gene evidence that myostatin is the dominant brake on human muscle mass. #gap/needs-replication — only one documented human case of complete LOF; long-term adult phenotype unknown.

## Therapeutic targeting

### Anti-myostatin antibodies

Several monoclonal antibodies targeting the myostatin active dimer or its receptor have reached clinical development:

- **Bimagrumab (BYM338, Novartis)** — anti-ACVR2B blocking antibody (blocks both myostatin and activins). Proof-of-concept in casting-induced disuse atrophy (n=24 healthy young men; bimagrumab 30 mg/kg i.v. single dose vs. placebo): accelerated recovery of thigh muscle volume (+5.1% above pre-cast levels at 12 weeks vs. +0.1% for placebo), but knee extension strength recovered equally in both arms — no functional benefit from bimagrumab [^bimab2017]. The sarcopenia Phase 2 (6-minute walk primary endpoint) is a distinct later trial not yet archive-verified; the claim that sarcopenia Phase 2 showed lean mass increase without functional benefit is #gap/unsourced — cite-specific DOI before relying on it. Phase 2b in type 2 diabetes/obesity showed body composition improvements, prompting a pivot from sarcopenia. Status in sarcopenia: stalled.
- **Trevogrumab (Regeneron)** — anti-myostatin antibody; in combination with garetosmab (anti-activin A) for various indications including muscle wasting. #gap/unsourced — Phase 3 outcome data not yet confirmed via archive-verified DOI; cite with caution.
- **Domagrozumab (PF-06252616, Pfizer)** — anti-myostatin antibody tested in DMD. Discontinued: Phase 2 in ambulatory DMD boys did not meet efficacy endpoints (muscle function composites). The failure was attributed to the multi-factorial pathology of DMD; myostatin antagonism alone is insufficient when the primary defect (dystrophin loss) is untreated. #gap/unsourced — primary trial publication DOI not confirmed in archive; verify before citing numerics.
- **Apitegromab (Scholar Rock)** — anti-pro/latent myostatin antibody (targets the inactive complex before tolloid activation). Phase 3 in spinal muscular atrophy; active recruiting (NCT07047144 as of 2026-05).

**Pattern across all indications:** Anti-myostatin approaches consistently increase lean mass (confirmed across multiple trials) but have so far **failed to translate to functional endpoints** (strength, walk tests, quality of life) in neuromuscular disease. The disconnect between lean mass and function is a central unresolved problem in this field.

### Follistatin gene therapy

Overexpression of follistatin via AAV vectors achieves durable myostatin suppression by ligand sequestration without the pharmacokinetics of repeated antibody dosing. See [[aav-follistatin]] for detailed trial data and mechanism. The AAV-follistatin page depends on this page for the mechanistic framing of myostatin as the target.

### Lessons from failed Phase 3s

The clinical failures in DMD and stalled programs in sarcopenia suggest:
1. Myostatin is a genuine lever on muscle mass but not on the quality or function of that muscle (fiber type, neural innervation, energy metabolism).
2. In diseased muscle, upstream defects (dystrophin absence, denervation) dominate over myostatin tone.
3. Combination approaches targeting both myostatin and anabolic signals (IGF-1, testosterone, exercise) may be required for functional benefit. #gap/no-mechanism

**Aging-context tier-1 rationale.** Multiple anti-myostatin / ACVR2B antibodies (bimagrumab, trevogrumab, domagrozumab, apitegromab) reached Phase 2/3 for non-aging indications including DMD, SMA, disuse atrophy, type 2 diabetes/obesity, and primary sarcopenia (Phase 2 stalled) — none is FDA-approved. The aging-context tier-1 designation reflects myostatin's dominant single-gene control over skeletal muscle mass (across cattle, sheep, dogs, the Schuelke 2004 NEJM human LOF case) and its mechanistic relevance to [[sarcopenia]] / [[stem-cell-exhaustion]], plus the depth of clinical-stage data even as functional endpoints have repeatedly missed. Strict Open Targets `Approved Drug = true` for an aging indication does not apply.

## Pathway connections

- **[[tgf-beta]]** — myostatin is a TGF-β subfamily member; shares SMAD2/3 signaling with TGF-β1/2/3 but restricted to ACVR2B rather than TβRII
- **[[smad2-smad3]]** — direct downstream effectors; phosphorylated SMAD2/3 drive atrophy gene programs
- **[[mtor]]** — antagonized by myostatin/SMAD2/3 signaling; myostatin inhibition restores mTORC1-driven protein synthesis
- **[[insulin-igf1]]** — opposing pathway; IGF-1/Akt signaling suppresses atrophy and is itself suppressed by myostatin

## Cross-references

- [[aav-follistatin]] — gene therapy vector expressing myostatin antagonist; R23b page
- [[satellite-cells]] — stem cells of skeletal muscle; suppressed by myostatin
- [[sarcopenia]] — clinical phenotype of age-related muscle loss; myostatin as upstream driver
- [[tgf-beta]] — parent signaling pathway
- [[smad2-smad3]] — R20 protein page; canonical myostatin signal transducers
- [[follistatin]] — natural antagonist; therapeutic target for gene therapy
- [[gdf11]] — related TGF-β family member; distinct aging biology; do not conflate

## Limitations and open gaps

- #gap/needs-human-replication — Myostatin rise with age is established in rodents; human longitudinal biopsy data are sparse and heterogeneous.
- #gap/needs-replication — Only one confirmed homozygous human LOF case; long-term outcomes in adults unknown.
- #gap/dose-response-unclear — Active vs. total myostatin assays give discordant results; the relevant in vivo biomarker is unresolved.
- #gap/no-mechanism — Lean mass increases consistently in clinical trials, but functional improvements do not follow; mechanism of the lean-mass / function disconnect is unknown.
- #gap/unsourced — Trevogrumab and domagrozumab Phase 3 outcome DOIs not confirmed via DOI lookup; these claims need DOI verification before relying on specifics.

## Footnotes

[^mcpherron1997]: doi:10.1038/387083a0 · McPherron AC et al. · *Nature* 1997 · n=variable per genotype (n=9–53 per sex/age group) · in-vivo (mouse, mstn−/− knockout) · model: 129 SV/J × C57BL/6 background (NOT pure C57BL/6); individual muscles of homozygous mutants weigh 2–3× those of WT littermates; muscle mass increase results from both hyperplasia and hypertrophy; original characterization of myostatin (GDF-8) as TGF-β member and muscle-mass suppressor. Human GDF-8 precursor is 375 aa (human UniProt); mouse precursor is 376 aa. Local PDF: available 

[^lee-mcpherron2001]: doi:10.1073/pnas.151270098 · Lee SJ & McPherron AC · *PNAS* 2001 · n=variable per transgenic line (≥5–50/group) · in-vivo (mouse, SJL/C57BL/6 F1 hybrid) · model: transgenic mice overexpressing dominant-negative ActRIIB, myostatin propeptide, or follistatin under muscle-specific promoter; establishes ACVR2B (ActRIIB) as the primary receptor and follistatin/propeptide as inhibitors; follistatin transgenic F3 founder showed 194–327% muscle mass increase above controls — greater than myostatin knockout alone — implying follistatin suppresses additional TGF-β ligands beyond myostatin; downstream SMAD2/3 signaling inferred by analogy, not directly demonstrated in this paper. Local PDF: available 

[^schuelke2004]: doi:10.1056/NEJMoa040933 · Schuelke M et al. · *N Engl J Med* 2004 · n=1 (case report) · observational · model: human male child, homozygous splice-site mutation (g.IVS1+5 g→a in both MSTN alleles), causing missplicing via cryptic splice site and nonsense-mediated mRNA decay — functional loss-of-function; exceptional muscle hypertrophy visible at birth; at age 4.5 yr held two 3-kg dumbbells with arms extended horizontally; mother heterozygous, notably strong; cardiac monitoring normal to time of publication; no adverse phenotype at 4.5 yr. Local PDF: available 

[^white-lebrasseur2014]: doi:10.1159/000356740 · White TA & LeBrasseur NK · *Gerontology* 2014 · review · model: human/rodent; mini-review on myostatin's role in sarcopenia; discusses age-related increases in myostatin and decline in follistatin. Local PDF: not available (status: not_oa — closed-access; abstract only via Crossref). #gap/no-fulltext-access — quantitative fold-change estimates for age-related myostatin/follistatin changes cannot be verified from this source; rely on primary studies for specific numbers.

[^lebrasseur2009]: doi:10.1093/gerona/glp068 · LeBrasseur NK et al. · *J Gerontol A Biol Sci Med Sci* 2009 · n=aged 24-month mice (multiple groups, exact n per group not confirmed — full PDF download failed) · in-vivo (mouse) · model: aged mice; myostatin inhibition with PF-354 antibody + exercise vs. exercise alone or PF-354 alone; combined exercise + PF-354 more than doubled treadmill running time and distance to exhaustion vs. exercise alone; all treatment groups showed >30% reductions in muscle fatigue; exercise and combined groups showed improved insulin sensitivity. Local PDF: download failed (bronze OA, 0 candidate URLs after filtering); claims verified against OA publisher landing-page abstract only — full-text verification pending.

[^bimab2017]: doi:10.1002/jcsm.12205 · Rooks DS et al. · *J Cachexia Sarcopenia Muscle* 2017 · n=24 (bimagrumab n=15, placebo n=9) · randomized double-blind · model: healthy young men (mean age 24.1 yr), casting-induced disuse atrophy (2 wk); bimagrumab 30 mg/kg i.v. single dose after cast removal; primary endpoint: thigh muscle volume (MRI); bimagrumab increased TMV (+5.1% above pre-cast at 12 wk vs. −0.1% placebo, p<0.01); knee extension strength recovered equally in both arms (no functional benefit). Local PDF: available 
