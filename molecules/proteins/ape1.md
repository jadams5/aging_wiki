---
type: protein
aliases: [APEX1, APE-1, REF-1, HAP1, APX, APEX]
uniprot: P27695
ncbi-gene: 328
hgnc: 587
ensembl: ENSG00000100823
genage-id: 195
mouse-ortholog: Apex1
key-domains: [N-terminal-redox, AP-endonuclease, nuclear-localization-signal, nuclear-export-signal, mitochondrial-targeting-sequence]
key-ptms: [Lys6-acetylation, Lys7-acetylation, Cys93-S-nitrosylation, Cys310-S-nitrosylation, Cys99-S-glutathionylation]
pathways: ["[[base-excision-repair]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[polb]]", "[[parp1]]", "[[p53]]", "[[nf-kb]]", "[[xrcc1]]"]
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Li&Wilson 2018, Stetler 2010, Maynard 2015, Kim 2011 verified against primary source PDFs; Robson 1991 (download failed, no PMC URL resolved) and Tell 2009 (download failed despite green OA status) unverified — body claims from these remain tagged; Xanthoudakis 1992 and Demple 1994 closed-access (not_oa) — body claims from these tagged #gap/no-fulltext-access; UniProt P27695 identity fields verified via REST API; GenAge HAGRID 195 confirmed via website search; Open Targets tractability confirmed via GraphQL API"
---

# APE1 (APEX1 / REF-1)

APE1 is the major mammalian apurinic/apyrimidinic (AP) endonuclease — responsible for ~95% of cellular AP-site incision activity — and the second enzyme to act in [[base-excision-repair]] after a DNA glycosylase has excised a damaged base [^demple1994]. It carries a unique dual identity: its C-terminal domain executes DNA repair, while its N-terminal domain (the "REF-1" activity) reduces oxidized cysteines in transcription factors — including [[p53]], NF-κB, AP-1, and HIF-1α — enabling their sequence-specific DNA binding [^xanthoudakis1992]. Across both activities, APE1 links the DNA-damage landscape directly to transcriptional responses to oxidative stress, making it a node at the intersection of [[genomic-instability]] and the inflammation-aging axis.

## Identity

- **UniProt:** P27695 (APEX1_HUMAN)
- **NCBI Gene:** 328
- **HGNC symbol:** APEX1
- **Ensembl:** ENSG00000100823
- **GenAge:** HAGRID 195
- **Mouse ortholog:** Apex1 (one-to-one ortholog; constitutive KO is embryonic lethal in both species)
- **Length:** 318 amino acids (canonical isoform)

## Domain architecture

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal / redox domain | 2–127 | REF-1 redox activity; RNA binding; nucleolar localization |
| Nuclear localization signal (NLS) | 8–13 | Nuclear import |
| Nuclear export signal (NES) | 64–80 | Cytoplasmic shuttling; context-dependent |
| Redox-active cysteine | **C65** | Essential for REF-1 activity; reduces oxidized TF cysteines |
| C-terminal / nuclease domain | 128–318 | AP-endonuclease active site |
| Mitochondrial targeting sequence (MTS) | 289–318 | Mitochondrial isoform (sAPE1 / mt-APE1) |

Active-site residues for AP endonuclease per UniProt P27695 (accessed 2026-05-07): Y171 (active site), D210 (active site — proton donor/acceptor), H309 (active site — proton acceptor). Binding-site residues: C68, D96, D210, N212, D308, H309. Note: N212 and D308 are binding-site residues in UniProt, not designated active-site; D283 is not listed as an active or binding site in the current UniProt annotation. #gap/unsourced — the D283 assignment requires re-checking against the primary crystallography literature (Beernink et al. 2001).

## Function

### 1. BER endonuclease (canonical repair function)

After a [[base-excision-repair|BER]] glycosylase (e.g., [[ogg1]] for 8-oxoG; UNG for uracil) excises a damaged base, the resulting abasic (AP) site is a cytotoxic and mutagenic lesion. APE1 cleaves the phosphodiester backbone 5' to the AP site, generating a 3'-OH and a 5'-deoxyribose-phosphate (5'-dRP) [^robson1991][^demple1994]. #gap/no-fulltext-access — Robson 1991 PDF download failed despite green OA status (no PMC URL resolved); Demple 1994 is closed-access (not_oa). Mechanism claims from these citations are widely accepted background. This creates the substrate for downstream BER:

- **Short-patch BER (dominant):** [[polb]] inserts one nucleotide; its intrinsic 5'-dRP lyase activity removes the dRP flap; [[xrcc1]]/[[lig3-alpha]] seals the nick.
- **Long-patch BER:** [[polb]] + [[pold]]/[[pole]] extend the repair tract 2–8 nt; [[fen1]] removes the displaced flap; [[lig1]] seals.

APE1 also has 3'→5' exonuclease activity, removing 3'-blocking oxidized termini that would otherwise stall repair synthesis.

### 2. REF-1 redox function (transcriptional regulation)

The N-terminal domain of APE1 — independently named REF-1 (Redox Factor-1) — maintains critical cysteine residues in the DNA-binding domains of transcription factors in their reduced (active) state [^xanthoudakis1992][^tell2009]. #gap/no-fulltext-access — Xanthoudakis 1992 is closed-access (not_oa); specific cysteine residue assignments in Fos/Jun are from the primary paper and cannot be independently verified here. Confirmed REF-1 targets:

- **AP-1 (Fos/Jun)** — Cys154 in Fos; Cys272 in Jun; foundational finding [^xanthoudakis1992] #gap/no-fulltext-access
- **NF-κB** — Cys62 in p50 subunit; links APE1 to the pro-inflammatory transcriptional program
- **p53** — Cys277; [[p53]] must be reduced by APE1 for sequence-specific DNA binding
- **HIF-1α** — Cys800; APE1 redox function supports hypoxic gene expression

C65 in APE1 is the redox-active residue; mutation to Ala (C65A) ablates REF-1 activity without impairing endonuclease function, allowing clean dissection of the two activities.

The two activities are largely separable: APE1's endonuclease can be selectively inhibited by methoxyamine (which blocks AP sites before APE1 cleavage) or APX3330, while the redox domain can be targeted by APX3330/E3330, which is currently in Phase 2 clinical trials for oncology (not aging-validated) [^tell2009].

### 3. RNA quality control and mitochondrial roles

APE1 also processes abasic sites in RNA and is imported into mitochondria as a truncated isoform (sAPE1 / mt-APE1) that protects mtDNA — the primary target of oxidative damage by proximity to the respiratory chain. #gap/unsourced — the quantitative contribution of mitochondrial vs nuclear APE1 to aging outcomes is not well established.

## Role in aging

### APE1 deficiency drives premature aging and senescence

Constitutive APE1 KO is embryonic lethal in mice [^tell2009], but conditional depletion in adult tissues reveals pronounced aging phenotypes. Li & Wilson 2018 used a tamoxifen-inducible conditional KO model (Apex1^flox/flox^Cre-ER+, abbreviated Apex1^-/-^) in two schedules [^li2018]:

- **Early KO (post-natal day 7/12; n=4/group):** 84% of Apex1^-/- mice died before weaning (Day 28). The surviving 16% showed dramatically reduced body and organ size (heart, kidney, digestive tract, brain, spleen) versus wild-type littermates at Day 28, with elevated SA-β-galactosidase staining in colon (~70% Apex1 deletion) and skin (~100% deletion) epithelial cells.
- **Post-weaning KO (week 6 tamoxifen; n=6/group):** By 8–10 months, Apex1^-/- mice showed notable hair loss and impaired skin wound healing compared to Apex1^+/+ controls; phenotypic differences were subtle until at least 8 months.

The same study demonstrated that APE1 knockdown (shRNA) in early-passage primary human fibroblasts (three independent cell backgrounds) triggered canonical senescence markers: SA-β-galactosidase activity and p16^INK4a^/p21^WAF1^ upregulation via both p16/pRB and p21/p53 pathways. APE1 deficiency also drives a telomere-associated DNA damage response (accumulation of γ-H2AX foci co-localizing with telomeric DNA). #gap/needs-replication — the *in vivo* premature aging phenotype is from a single study.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | BER mechanism fully conserved; C65-mediated REF-1 activity conserved |
| Phenotype conserved in humans? | partial | Reduced APE1 activity documented in human AD patients; causal role unproven |
| Replicated in humans? | no | No human conditional-deficiency equivalent; population-level MR not tested |

### APE1 expression in age-related neurodegeneration

PBMCs from 53 AD patients and 30 healthy age-matched controls were characterized across multiple bioenergetic and DNA repair parameters [^maynard2015]. For the APE1 incision activity assay specifically, n=18 per group was available (not the full 53/30, due to sample availability). APE1 incision activity was significantly lower in the AD group in the unadjusted model (P=0.035) and after adjustment for gender (P=0.003) and for both gender and age (P=0.006); adjustment for age alone trended (P=0.058, ns). The cohort also showed reduced basal mitochondrial oxygen consumption (basal OCR) and proton leak in AD, and elevated dATP. The authors propose reduced APE1 capacity as a potential AD biomarker, though causality is unresolved. #gap/needs-replication — single-cohort, APE1 assay n=18/group; whether reduced APE1 activity is cause or consequence of neurodegeneration is unknown.

### APE1 and neuronal survival

In a rat model of transient global cerebral ischemia (GCI), PACAP (0.2 nmol, intracerebroventricular) induced neuroprotection of hippocampal CA1 neurons. This protection was abrogated when APE1 was knocked down by lentiviral shRNA and restored by human APE1 overexpression (n=8–9/group for neuronal survival quantification) [^stetler2010]. PACAP activates APE1 transcription via cAMP-response-element-binding protein (CREB) and activating transcription factor 2 (ATF2), requiring PKA and p38/MAPK signaling. The DNA repair function of APE1 — not the redox/REF-1 function — was required for neuroprotection: a repair-incompetent but redox-active APE1 mutant (D210A) could not rescue PACAP-mediated protection. While the ischemia model is not strictly an aging model, the finding establishes APE1 as a survival factor in post-mitotic neurons — cells that are also the most oxidative-stress-exposed in the aging brain.

### APE1 redox activity and the inflammation-aging axis

APE1's REF-1 function activates [[p53]] and NF-κB by reducing their DNA-binding cysteines — creating a paradox in the aging context. On one hand, APE1 is required for p53-mediated DNA damage responses (pro-survival); on the other, chronic APE1-driven NF-κB activation contributes to the pro-inflammatory transcriptional program associated with [[chronic-inflammation|inflammaging]] and the [[sasp|SASP]]. This dual role — pro-repair via p53 activation vs pro-inflammatory via NF-κB activation — suggests context- and cell-type-specific net effects. #gap/no-mechanism — the balance between these opposing redox-regulation effects in aged tissues has not been systematically quantified.

### Oxidative modification of APE1 impairs its own repair activity

S-glutathionylation of C99 in APE1 under oxidative stress significantly impairs its AP endonuclease activity by reducing DNA binding [^kim2011]. This creates a negative feedback: as oxidative stress rises with age, APE1 itself is increasingly inhibited — further reducing BER capacity in the tissues that most need it. #gap/needs-human-replication — demonstrated in cell-free and cell-culture systems; not quantified in aged tissue.

## Pathway membership

- [[base-excision-repair]] — central BER executioner; coordinates glycosylase and polymerase activities
- [[dna-damage-response]] — AP site incision; AP-site accumulation activates ATM/ATR via secondary structures

## Key interactors

- [[polb]] — hands off the 3'-OH from APE1 cleavage for gap-filling synthesis; physical interaction required
- [[parp1]] — recruited in parallel to AP sites; competes for the same substrate; PARP1 activation can deplete NAD⁺ if BER is overwhelmed
- [[xrcc1]] — scaffold in short-patch BER; coordinates APE1, POLB, and LIG3α
- [[p53]] — transcriptional target (APE1 contains a p53-response element); also a REF-1 redox target — feedback loop between the two proteins
- PCNA — scaffolds long-patch BER; interacts with APE1 via PIP box

## Pharmacology and druggability

**Druggability tier: 3** (aging-context; inhibitors exist in oncology clinical trials but are not aging-validated).

- **APX3330 / E3330** — selective APE1 redox inhibitor (blocks REF-1 activity, spares endonuclease). Phase 2 trials for cancer (e.g., pancreatic; NCT03375086). No aging-indication trial registered.
- **Methoxyamine (TRC102)** — reacts covalently with AP sites before APE1 cleavage, blocking repair; cancer sensitizer (Phase 1/2). Opposite of a geroprotective strategy.
- **APE1 activators** — no clinical candidate; overexpression strategies (gene therapy) protect neurons in rodent ischemia models [^stetler2010]. The aging-context rationale would be to restore declining APE1 activity, not inhibit it.

#gap/dose-response-unclear — no dose-response data exists for APE1 activation strategies in aging models; all aging-relevant data is KO/KD (loss-of-function).

## Limitations and gaps

- `#gap/needs-human-replication` — APE1 deficiency → accelerated aging phenotype established only in tamoxifen-inducible conditional KO mouse models and primary human fibroblast shRNA studies [^li2018]; no human constitutional-deficiency equivalent exists.
- `#gap/needs-replication` — reduced APE1 activity in AD PBMCs is from one cohort [^maynard2015]; independent replication needed.
- `#gap/no-mechanism` — net effect of APE1 REF-1 activity in aged tissues (pro-survival via p53 vs pro-inflammatory via NF-κB) not quantified in vivo.
- `#gap/needs-canonical-id` — mouse-ortholog Apex1 genage-model ID not verified; GenAge-models DB entry needs cross-check.
- `#gap/long-term-unknown` — no longitudinal human data on APE1 activity trajectory across lifespan in non-diseased individuals.
- `#gap/no-fulltext-access` — Xanthoudakis 1992 (EMBO J; closed-access) and Demple 1994 (Annu Rev Biochem; closed-access): Fos/Jun cysteine assignments and the ~95% AP-site activity share claim cannot be independently verified against primary text. These are widely-accepted background claims. Tell 2009 (Antioxid Redox Signal): PDF download failed despite green OA status — embryonic-lethal KO claim and subcellular localization dynamics from this review remain unverified against the full text. Robson 1991 (NAR): PDF download failed despite green OA status — APEX1 cloning/endonuclease activity claims from this foundational paper cannot be verified against primary text.
- `mr-causal-evidence: not-tested` — no published MR study uses APE1 germline variants as instruments for aging-relevant outcomes. Instruments exist in GWAS (APEX1 locus has tagged variants) but leverage has not been published as of 2026-05.

## Footnotes

[^robson1991]: doi:10.1093/nar/19.20.5519 · Robson CN, Hickson ID · *Nucleic Acids Research* 1991 · in-vitro + bacterial complementation · model: E. coli xth mutants; human cDNA expression · foundational cloning of APEX1 (HAP1); demonstrated endonuclease activity corrects AP-site repair defects · ⚠️ PDF download failed (OA status: green but no PMC URL resolved by archive); claims not independently verified against full text #gap/no-fulltext-access

[^xanthoudakis1992]: doi:10.1002/j.1460-2075.1992.tb05411.x · Xanthoudakis S et al. · *EMBO Journal* 1992 · in-vitro · 922 citations · foundational REF-1 discovery: APE1 N-terminal domain reduces Fos (C154) and Jun (C272) cysteines to enable AP-1 DNA binding; C65 identified as redox-active residue

[^demple1994]: doi:10.1146/annurev.bi.63.070194.004411 · Demple B, Harrison L · *Annual Review of Biochemistry* 1994 · review · 1458 citations · comprehensive overview of BER mechanism; APE1 as the dominant mammalian AP endonuclease (~95% of total activity); short-patch vs long-patch pathway distinction

[^tell2009]: doi:10.1089/ars.2008.2194 · Tell G, Quadrifoglio F, Tiribelli C, Kelley MR · *Antioxidants & Redox Signaling* 2009 · review · definitive dual-function review: BER endonuclease + REF-1 redox regulation of AP-1, NF-κB, p53, HIF-1α; embryonic lethal KO; subcellular localization dynamics · ⚠️ PDF download failed (OA status: green but no URL resolved by archive); claims from this review not independently verified against full text #gap/no-fulltext-access

[^stetler2010]: doi:10.1073/pnas.1000030107 · Stetler RA, Gao Y, Zukin RS, Vosler PS, Zhang L et al.; Chen J · *PNAS* 2010 · in-vivo (rat, PACAP 0.2 nmol ICV + lentiviral APE1 shRNA/overexpression) + in-vitro (hippocampal/cortical neurons, OGD) · model: transient global cerebral ischemia (12 min, four-vessel occlusion), Sprague-Dawley rats; hippocampal CA1 · n=8–9/group (neuronal survival); n=5–6/group (AP sites, APE1 activity) · PACAP → APE1 via CREB/ATF2; APE1-KD abrogates neuroprotection; D210A repair-dead mutant fails to rescue; DNA repair (not redox) function required · PMID: 20133634 · PDF verified 2026-05-07

[^li2018]: doi:10.1093/nar/gky326 · Li M, Yang X, Lu X, et al.; Wilson DM III · *Nucleic Acids Research* 2018 · in-vivo (tamoxifen-inducible conditional KO; Apex1^flox/flox^Cre-ER+) + in-vitro · model: two mouse KO schedules (postnatal day 7/12: n=4/group; post-weaning week 6: n=6/group) + primary human fibroblasts (3 backgrounds) · early KO: 84% lethality before Day 28; survivors showed organ-size reduction + elevated SA-β-gal in skin/colon; week-6 KO: hair loss + impaired wound healing by 8–10 months; fibroblast APE1-KD: SA-β-gal+, p16↑, p21↑, telomere-DDR activation · PDF verified 2026-05-07

[^maynard2015]: doi:10.18632/aging.100810 · Maynard S, Hejl AM, Dinh TS, et al.; Bohr VA · *Aging (Albany NY)* 2015 · observational · n=53 AD patients + 30 controls enrolled; APE1 incision assay performed on n=18/group (sample availability) · reduced APE1 incision activity in AD PBMCs: P=0.035 unadjusted, P=0.003 gender-adjusted, P=0.006 gender+age adjusted · co-occurs with reduced basal OCR, proton leak, elevated dATP · proposed as AD biomarker · PDF verified 2026-05-07

[^kim2011]: doi:10.1016/j.jmb.2011.10.023 · Kim YJ, Kim D, Illuzzi JL, Delaplane S, Su D, Bernier M, Gross ML, Georgiadis MM, Wilson DM III · *Journal of Molecular Biology* 2011 · in-vitro (purified recombinant APE1) + cell-culture (HeLa, H₂O₂) · S-glutathionylation of C99 reduces AP endonuclease activity >90% (diamide/GSH); mechanism: 4.4-fold increase in Km (impaired DNA binding); modification reversible by DTT; C99 identified by site-directed mutagenesis + ESI-QTOF mass spectrometry; also occurs in HeLa cells under H₂O₂ (100 µM) · PDF verified 2026-05-07
