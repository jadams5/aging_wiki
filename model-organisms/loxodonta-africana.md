---
type: model-organism
species-name: Loxodonta africana
common-name: African bush elephant
aliases: [African elephant, savanna elephant]
ncbi-taxonomy: 9785
typical-lifespan: "65 years (captive maximum documented); 60-70 years (wild)"
lifespan-ratio-to-human: "~1x (comparable lifespan to humans; very long for body mass)"
genome-similarity-to-human: "#gap/needs-canonical-id — genome similarity figure not confirmed from primary source; genome sequenced (mLoxAfr1.hap2, ~3,540 Mb, VGP 2023)"
genome-size-mb: 3540
adult-cell-count: "~10^14 (estimated; ~100x human cell count based on body mass scaling)"
itp-validated: no
key-strengths: [peto-paradox-resolution, tp53-retrogene-array, lif6-apoptosis-hypersensitivity, large-body-cancer-resistance, comparable-lifespan-to-humans, tooth-senescence-model]
key-divergences: [body-mass-metabolic-scaling, gestational-period, social-cognition, molar-tooth-biology, lack-of-transgenic-toolkit]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Abegglen 2015 (JAMA), Sulak 2016 (eLife), Vazquez 2018 (Cell Reports), Nunney 2022 (Evol Appl), and Vollrath 2023 (TREE) verified against full PDFs. AnAge identity fields (max lifespan 65 yr, body mass 4,800 kg, gestation 670 days) cross-confirmed via Abegglen 2015 Results for 65 yr and 4,800 kg; gestation 670 days not independently re-verified against AnAge (URL non-resolving). Padariya 2022 and Moore 2025 not re-read against PDF — claims are flagged as in-silico/commentary and do not bear quantitative load; recommend PDF verification on next pass."
literature-checked-through: 2026-05-07
---

# *Loxodonta africana* — African bush elephant

The African bush elephant is the **canonical model organism for Peto's paradox** — the observation that cancer incidence does not scale with body size or cell count across species as simple probabilistic models would predict [^caulin2011]. With an estimated ~10^14 cells (roughly 100× more than humans), an adult body mass of ~4,800 kg, and a lifespan comparable to humans (~65 years captive maximum), elephants should face catastrophically elevated cancer risk by any per-cell probability model. Instead, cancer accounts for an estimated ~4.8% of elephant deaths in captive populations vs. 11–25% in humans [^abegglen2015]. This discordance is now attributed in part to a **species-specific expansion of TP53 retrogenes** and **reactivation of a pro-apoptotic LIF pseudogene (LIF6)**, making elephant cells more aggressive triggers of apoptosis upon DNA damage than human cells. The elephant case is important for aging biology not only as a cancer-resistance curiosity but as the **canonical example of cell-autonomous tumor suppression** — a defense mechanism that operates independently of immune surveillance, with potential implications for understanding weakly-immunogenic somatic mutations in humans.

## Identity and resources

| Field | Value |
|---|---|
| Species | *Loxodonta africana* (African bush/savanna elephant) |
| NCBI Taxonomy ID | 9785 |
| AnAge max lifespan | 65 years (captive); wild 60–70 years |
| Body mass (adult) | ~4,800 kg |
| Birth weight | ~105 kg |
| Genome assembly | mLoxAfr1.hap2 (Vertebrate Genomes Project, 2023; ~3,540 Mb, chromosome-level) |
| Key labs | Schiffman (Utah), Lynch (Chicago), Gorbunova / Seluanov (Rochester; comparative) |
| AnAge database | Loxodonta africana entry (Build 15, 2023) |

[^caulin2011]: doi:10.1016/j.tree.2011.01.002 · Caulin AF, Maley CC · review · Trends Ecol Evol 2011; framework-establishing paper for Peto's paradox as evolutionary puzzle; 382 citations; not_oa

## Lifespan and demographics

Elephants reach sexual maturity at approximately 10–11 years [AnAge] and females remain fertile for ~55–60 years, with calving intervals of ~4.7 years. Gestation is among the longest of any land mammal at ~670 days. The AnAge captive maximum is 65 years; wild population life-history studies suggest median lifespans of 40–50 years, with maximum recorded ages in the 60–70 year range.

A distinctive aging feature is **dental senescence via tooth succession**: elephants cycle through six sets of molars over a lifetime; when the sixth set is worn away (typically in the 60s), the animal can no longer efficiently feed, making tooth attrition a major proximate cause of natural death in wild elephants. This constitutes a form of organ-level senescence with no close human parallel.

Sex differences in lifespan are not well characterized in the primary aging literature for this species. Captive data is complicated by husbandry variation across facilities and eras.

## Peto's paradox and cancer rates

**Peto's paradox** (formalized by Caulin and Maley 2011 [^caulin2011]) states: across species, cancer incidence does not scale with cell number or lifespan as a simple per-cell mutation probability would predict. A whale or elephant, with ~10^14–10^15 cells and decades of replication, should have vastly elevated cancer risk compared to a mouse (~10^9 cells, 2-year lifespan), yet empirically does not. This implies that large, long-lived organisms have evolved enhanced cancer-suppression mechanisms — roughly proportional to their cell-count advantage — through natural selection.

For elephants specifically, Abegglen et al. 2015 [^abegglen2015] surveyed cancer mortality across 36 zoo populations and found a cancer-cause-of-death rate of **4.81%** in elephants, compared to 11–25% in humans. This is striking given that elephant cells accumulate far more total divisions over a lifetime, and makes elephants one of the best-documented large-mammal examples of Peto's paradox.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — TP53 tumor suppression conserved; retrogene array is elephant-specific |
| Phenotype conserved in humans? | no — elephant cancer mortality (~5%) substantially lower than human (~11–25%) |
| Replicated in humans? | no — no human intervention based on elephant mechanisms exists |

[^abegglen2015]: doi:10.1001/jama.2015.13134 · Abegglen LM et al. / Schiffman JD lab · epidemiological: 36 mammalian species (644 annotated elephant deaths); in-vitro: n=8 African+Asian elephants, n=10 LFS patients, n=11 age-matched human controls · observational + in-vitro · JAMA 2015; cancer mortality 4.81% (95%CI 3.14%–6.49%) in elephants vs 11–25% in humans; early apoptosis (AV+PI−, 2 Gy ionizing radiation): 14.64% [95%CI 10.91%–18.37%] (elephant) vs 7.17% [95%CI 5.91%–8.44%] (human controls) vs 2.71% [95%CI 1.93%–3.48%] (LFS), P<0.001; doxorubicin (5μM): 24.77% [95%CI 23.0%–26.53%] (elephant) vs 8.10% [95%CI 6.55%–9.66%] (human), P<0.001; elephant genome contains 20 TP53 copies (1 canonical + 19 retrogenes)

## TP53 retrogene array — the canonical mechanism

### Retrogene count and structure

The elephant genome encodes **20 copies of TP53** — one canonical copy plus 19 retrogenes — compared to the single functional TP53 copy in humans [^sulak2016]. This was independently identified by two groups: Sulak et al. 2016 (*eLife*) and Abegglen et al. 2015 (*JAMA*), both working from African elephant genome data.

**Retrogene mechanism:** TP53 retrogenes arise from reverse transcription of TP53 mRNA followed by genomic reintegration at random loci — a process mediated by LINE-1 elements and other retrotransposons. Unlike gene duplication, retrogenes typically lack introns (they derive from processed mRNA) and often insert without their original promoter, rendering many non-functional (pseudogenes). In the elephant lineage, this process apparently occurred repeatedly over evolutionary time, generating the ~19-copy expansion.

**Important caveat — Nunney 2022 challenges the functional interpretation:** Nunney [^nunney2022] reanalyzed the elephant TP53 retrogene array and found that the ancestral RTG was already truncated from 390 amino acids to 157 aa by a frameshift mutation *before* clade divergence, and that 14 of the 19 extant retrogene copies are further truncated to ≤88 amino acids. He found no compelling evidence of positive or negative selection on the 88-codon region (dn/ds consistent with neutral evolution; PAML branch model did not significantly improve over a single dn/ds value). The exponential accumulation of RTG copies over time is consistent with a neutral duplication-and-drift model at a rate of ~10^−6 per generation. Nunney concludes that the 19 RTGs spread primarily by **segmental duplication and neutral drift** rather than through selection for cancer suppression, and that the functional potential of the RTGs has been largely lost (74% with ≤88 aa). He allows, however, that 1–2 copies may have been fortuitously favored by a beneficial effect on p53 signaling (consistent with Sulak 2016's finding that RTG12 shows small but significant increase in apoptosis induction). If the drift interpretation is correct, the effective copy number of functionally active TP53-modulating sequences is much lower than 20. #gap/contradictory-evidence #gap/needs-replication

[^sulak2016]: doi:10.7554/eLife.11994 · Sulak M, Fong L, Mika K et al. / Lynch VJ lab · in-silico + in-vitro · eLife 2016; 20 TP53 copies identified; several retrogenes transcribed and likely translated; retrogenes regulate TP53 signaling rather than function as independent transcription factors; 337 citations; OA gold

[^nunney2022]: doi:10.1111/eva.13383 · Nunney L · in-silico · Evol Appl 2022; ancestral elephant RTG was already truncated from 390 aa to 157 aa by a frameshift mutation before clade divergence; 14 of 19 extant retrogene copies further truncated to ≤88 aa; no compelling evidence of positive or negative selection on the 88-codon region; duplication rate ~10^−6/generation consistent with neutral drift; proposes accumulation by segmental duplication + drift rather than selection for cancer suppression; challenges functional cancer-suppression interpretation while allowing 1–2 copies may have been favored by fortuitous effect; OA gold

### Expression and functional status

Sulak et al. 2016 [^sulak2016] showed that **several TP53 retrogenes are transcribed and likely translated** in elephant cells, though which specific copies and in which tissues was not fully resolved in the abstract-accessible data. Importantly, the retrogenes do **not appear to directly function as transcription factors** (i.e., they do not independently bind DNA and activate target genes in the same way canonical p53 does), but they do contribute to the enhanced apoptotic response to DNA damage **by regulating the activity of the canonical TP53 signaling pathway**. The precise mechanism of this regulation was described in the paper body but is not fully characterizable from the abstract alone. #gap/needs-replication

Padariya et al. 2022 [^padariya2022] extended this by showing that elephant p53 isoforms display varying MDM2-binding motifs that in some cases would allow them to **escape MDM2-mediated repression** — potentially preserving pro-apoptotic activity at times when canonical p53 might be suppressed. This adds a further mechanistic dimension: not only are there more copies, but some copies may be more resistant to the cell's normal p53-dampening feedback. #gap/needs-replication (in-silico docking study; not yet verified by cellular functional assays)

[^padariya2022]: doi:10.1093/molbev/msac149 · Padariya M et al. · in-silico · Mol Biol Evol 2022; elephant p53 isoforms with altered MDM2-binding motifs; in-silico docking simulations; proposes escape from MDM2 repression

## LIF6 — reactivated zombie pseudogene

Vazquez et al. 2018 [^vazquez2018] identified a second cancer-resistance mechanism independent of (but downstream of) the TP53 retrogene array. **LIF6** is a member of the leukemia inhibitory factor (LIF) gene family — normally a cytokine with pleiotropic functions — that had become a **pseudogene** in the proboscidean ancestor. In elephants, LIF6 was subsequently **refunctionalized** with pro-apoptotic activity.

The specific verified claims from the Vazquez 2018 full text:
1. LIF6 is **transcriptionally upregulated by TP53** in response to DNA damage (8.18-fold induction by doxorubicin; 16.06-fold by nutlin-3a; both blocked by TP53 siRNA knockdown) — placing it downstream of the TP53 response.
2. LIF6 protein **localizes to the mitochondria** (LIF6-eGFP co-localizes with MitoTracker Red) where it **induces Bak/Bax-dependent, caspase-dependent apoptosis** (blocked by broad-spectrum caspase inhibitor Z-VAD-FMK but not by cyclosporin A, which inhibits MPTP opening).
3. The apoptotic mechanism is **independent of LIFR signaling**: LIF6 induces apoptosis in Chinese hamster ovary (CHO) cells that do not express LIFR, confirming it is not acting through the canonical LIF receptor pathway.
4. Phylogenetic analysis of living and extinct proboscidean LIF6 genes indicates that the TP53 response element in LIF6's promoter **evolved coincident with the evolution of large body sizes** in the proboscidean stem lineage (~59 mya).

The authors note that LIF6 refunctionalization may have been **permissive (but not sufficient)** for the evolution of large body sizes — meaning it removed a constraint (high cancer risk per cell) rather than independently driving body-size evolution.

Vollrath 2023 [^vollrath2023] separately proposed that the elephant TP53 multiplication (and by extension, LIF6 regulation) may protect the **germline** rather than somatic tissues, since elephant testicles do not descend, imposing thermal stress on sperm DNA. This alternative hypothesis has not been empirically tested but represents a legitimate challenge to the cancer-centric interpretation. #gap/no-mechanism (causality of TP53 array specifically for cancer suppression vs germline protection unresolved)

[^vazquez2018]: doi:10.1016/j.celrep.2018.07.042 · Vazquez JM, Sulak M, Chigurupati S, Lynch VJ · in-vitro + in-silico · Cell Reports 2018; LIF6 transcriptionally upregulated by TP53 upon DNA damage (8.18-fold by DOX, p=1.54×10^−6; 16.06-fold by nutlin-3a, p=1.00×10^−4; blocked by TP53 siRNA); LIF6-eGFP localizes to mitochondria (co-localizes with MitoTracker); induces Bak/Bax-dependent, caspase-dependent apoptosis (blocked by Z-VAD-FMK, not CsA); mechanism independent of LIFR signaling; LIF6 sufficient to induce apoptosis in CHO cells (which lack LIFR); TP53 response element in LIF6 promoter evolved coincident with large body-size evolution in proboscidean stem lineage (~59 mya); LIF6 refunctionalization permissive but not sufficient for large body size evolution; OA gold

[^vollrath2023]: doi:10.1016/j.tree.2023.05.011 · Vollrath F · review/commentary · Trends Ecol Evol 2023; proposes germline protection as primary function of TP53 retrogene expansion (non-descending testicles → sperm DNA thermal stress); challenges cancer-centric framing; 10 citations

## Apoptosis hypersensitivity phenotype

The functional readout of the TP53 retrogene array + LIF6 system is **cellular hypersensitivity to genotoxic stress**. Abegglen et al. 2015 [^abegglen2015] measured this directly in a comparative peripheral blood lymphocyte (PBL) assay:

| Treatment | Elephant early apoptosis (AV+PI−) | Human control | Li-Fraumeni (LFS) patients |
|---|---|---|---|
| 2 Gy ionizing radiation | 14.64% [95%CI 10.91%–18.37%] | 7.17% [95%CI 5.91%–8.44%] | 2.71% [95%CI 1.93%–3.48%] |
| Doxorubicin (5 μM) | 24.77% [95%CI 23.0%–26.53%] | 8.10% [95%CI 6.55%–9.66%] | — |

(P<0.001 for both comparisons; early apoptosis defined as AV+PI− by flow cytometry; n=8 elephants, n=11 human controls, n=10 LFS patients)

Li-Fraumeni syndrome patients (germline TP53 mutation carriers with only one functional TP53 copy) show the **lowest** apoptotic response — consistent with the interpretation that TP53 copy number determines the apoptotic threshold. Elephants sit at the opposite extreme: more TP53, lower apoptotic threshold, more aggressive DNA-damage-induced cell death.

This cell-autonomous mechanism operates regardless of immune surveillance: even if a damaged cell evades NK cells and CTLs (the immune strategies for controlling incipient tumors), the elephant's elevated apoptotic drive would cause the cell to eliminate itself. This makes the TP53 retrogene system a **Tier 2 cell-autonomous defense** in the comparative cancer-resistance landscape — relevant to understanding cancers that evade immune surveillance through weakly-immunogenic somatic mutations. See [[frameworks/intervention-by-target-immunogenicity]] for this framing.

## Other proposed mechanisms

Beyond the TP53/LIF6 axis, the elephant-cancer-resistance literature is comparatively sparse. Several candidate mechanisms have been proposed but are less well-characterized:

- **DNA repair capacity**: elephants have large genomes and long lifespans, suggesting selection pressure on DNA repair efficiency, but specific ERCC or NER gene expansions analogous to those in some longevity models have not been documented in published primary research as of this writing. #gap/unsourced
- **Telomere biology**: not systematically characterized in elephants; whether elephant telomere dynamics differ from humans in aging-relevant ways is unknown. #gap/unsourced
- **Immune surveillance**: no systematic comparative immunology specific to cancer surveillance has been published. The Abegglen 2015 framing specifically argues that the cell-autonomous apoptotic response is the dominant mechanism, not enhanced immune killing.
- **CDKN2 status**: unlike the bowhead whale case (proposed parallel via CDKN2 locus expansion — see [[balaena-mysticetus]]), no analogous CDKN2 mechanism has been documented in elephants.

## The causality debate — does TP53 retrogene expansion actually suppress cancer?

The elephant TP53 story is widely cited as a solved case of Peto's paradox resolution, but the mechanistic evidence is more contested than popular accounts suggest. The key tension:

**Supporting the causal story:**
- Abegglen 2015 [^abegglen2015]: elephant lymphocytes have ~2× the apoptotic response to DNA damage vs human controls, and ~5× vs LFS patients with one functional TP53 allele — a dose-response consistent with copy-number causality.
- Sulak 2016 [^sulak2016]: several retrogenes are expressed and modulate TP53 pathway activity.
- Vazquez 2018 [^vazquez2018]: LIF6 provides a separate TP53-dependent pro-apoptotic mechanism; evolution of its TP53 response element coincides with body-size evolution.

**Challenging the causal story:**
- Nunney 2022 [^nunney2022]: 14 of 19 retrogene copies are severely truncated (≤88 aa) and show no signature of positive selection; may be neutral debris accumulated by segmental duplication. If true, the effective copy number of functional TP53-modulating sequences is much lower than 20. #gap/contradictory-evidence
- Vollrath 2023 [^vollrath2023]: germline protection (not somatic cancer) may be the primary function. The undescended testicle thermal-stress hypothesis is speculative but plausible as an alternative selective pressure.
- Moore 2025 [^moore2025]: argues that p53's pleiotropic roles in reproduction have been systematically marginalized in the cancer-framing of these findings; the retrogene expansion may serve reproductive functions as much as or more than cancer suppression.

**The bottom line:** The apoptosis hypersensitivity phenotype is robustly documented (Abegglen 2015). The mechanistic link from retrogene expression to that phenotype is plausible (Sulak 2016, Vazquez 2018) but the number of functionally active retrogenes and the magnitude of their individual contributions remain uncertain. Whether the evolutionary driver of retrogene accumulation was cancer suppression (or germline protection, or reproduction) remains an open question as of 2026. #gap/contradictory-evidence

[^moore2025]: doi:10.1530/REP-25-0254 · Moore T · commentary · Reproduction 2025; proposes TP53 retrogene expansion may primarily serve reproductive rather than cancer-suppressive functions; critiques cancer-centric framing of Peto's paradox literature

## Limitations of the elephant comparative model

### Translation gap to humans

The elephant TP53/LIF6 system is conceptually inspirational but practically non-translatable in its current form:

1. **TP53 retrogene transgenesis in human cells** is technically feasible but has not been attempted clinically or even in animal models of cancer. Introducing ~20 TP53 copies into human cells would likely have unknown and potentially harmful pleiotropic effects (including apoptosis hypersensitivity in normal tissues, with organ toxicity risks).

2. **LIF6 as gene therapy** is conceptually possible — the gene is characterized, the TP53 response element is defined, and mitochondrial targeting has been documented. However, this remains strictly preclinical conceptual stage; no in-vivo experiments testing LIF6 delivery in any cancer model have been published.

3. **Elephant cells in culture** do exhibit elevated apoptotic responses (Abegglen 2015 [^abegglen2015]), but the full in-vivo cancer-resistance phenotype likely depends on the physiological context of elephant tissues, growth factor milieu, and immune environment — none of which are recapitulated in cell culture.

4. **No transgenic toolkit**: unlike mouse, there is no CRISPR-editing or transgenic elephant model. Mechanistic hypotheses must be tested by reconstitution in mouse or human cell systems, introducing interspecies confounds.

5. **Alternative mechanisms uncharacterized**: it is likely that multiple cancer-resistance mechanisms act in concert in elephants (TP53 copy number, LIF6, potentially others). The relative contribution of each, and the synergies between them, are not resolved.

### Causal attribution challenge

The epidemiological finding (low elephant cancer mortality) is robust. The cellular mechanism (apoptosis hypersensitivity) is well-documented. The molecular-to-cellular causal chain (retrogenes → apoptosis hypersensitivity) is plausible but contested (Nunney 2022 on copy functionality; Vollrath 2023 on function assignment). Any translational program built on this axis should acknowledge that the causal mechanism has not been rigorously established in an interventional study (e.g., silencing retrogenes in elephant cells and measuring the change in apoptotic threshold). #gap/needs-replication

## Strengths as a comparative aging model

1. **Peto's paradox resolution**: the most-cited and best-documented example of large-body cancer resistance in any mammal, with a plausible molecular mechanism — makes it the canonical entry point for comparative cancer biology.
2. **Cell-autonomous defense paradigm**: the TP53/LIF6 axis provides a model for how species can suppress cancer through cell-intrinsic apoptosis rather than enhanced immune surveillance — directly relevant to the class of human cancers that evade immune detection via weak immunogenicity.
3. **Comparable lifespan to humans**: unlike mouse (2–3 yr) or worm (3 weeks), the elephant's ~65-year lifespan is similar to humans', making it a useful point of comparison for age-dependent cancer incidence rates and reproductive senescence patterns.
4. **Dental senescence model**: progressive molar attrition provides a rare mammalian model of **programmed mechanical organ-level senescence** — distinct from cellular mechanisms but potentially relevant to studying fitness decline with age in long-lived species.
5. **Proboscidean comparative clade**: extinct relatives (mammoths, mastodons) have sequenceable genomes and provide a temporal series for tracing when LIF6 and retrogene expansions occurred relative to body-size evolution (Vazquez 2018 [^vazquez2018]).

## Limitations and gaps

- **TP53 retrogene functionality contested**: Nunney 2022 finds 14 of 19 copies are severely truncated and shows no positive selection signature; the number of functional copies is uncertain. #gap/contradictory-evidence #gap/needs-replication
- **LIF6 mechanism unverified in vivo**: the mitochondrial apoptosis induction is characterized in vitro; no in-vivo cancer-suppression model exists. #gap/needs-replication
- **Germline vs somatic function of TP53 expansion unknown**: Vollrath 2023 and Moore 2025 raise plausible alternative functions; the selective pressure driving retrogene accumulation is contested. #gap/no-mechanism
- **No transgenic toolkit**: elephant CRISPR/transgenic work does not exist; mechanistic claims cannot be tested by genetic intervention in the organism itself. #gap/needs-replication
- **Telomere biology uncharacterized**: no systematic study of age-dependent telomere dynamics in elephants has been published. #gap/unsourced
- **Elephant cellular senescence**: accumulation of senescent cells with age, SASP composition, and senolytic biology in elephants are virtually unstudied. #gap/unsourced
- **Genome-similarity-to-human not confirmed from primary source**: the genome has been sequenced (mLoxAfr1.hap2, ~3,540 Mb, 2023) but ortholog-level similarity to humans has not been characterized in the primary aging-biology literature as of this writing. #gap/needs-canonical-id
- **Population size constraints**: captive elephant populations suitable for aging studies are small; longitudinal physiological data comparable to mouse aging datasets does not exist.

## See also

- [[hallmarks/genomic-instability]] — TP53 is a central node in the DNA damage response; elephant TP53 expansion is the most-cited large-mammal example of genome-stability enhancement
- [[hallmarks/cellular-senescence]] — senescence biology in elephants is essentially unstudied; a major gap relative to the TP53/apoptosis literature
- [[molecules/proteins/p53]] — canonical TP53 protein page; elephant retrogenes are paralogs of this gene
- [[heterocephalus-glaber]] — parallel comparative case: naked mole-rat achieves cancer resistance via HMW-hyaluronan and early contact inhibition (different mechanism, smaller body)
- [[balaena-mysticetus]] — bowhead whale: parallel large-body cancer-resistance case; proposed CDKN2 locus mechanism (stub — page being seeded in parallel)
- [[frameworks/intervention-by-target-immunogenicity]] — framework where elephant TP53/LIF6 fits the Tier 2 cell-autonomous cancer suppression model (being seeded in parallel)
- [[phenotypes/cancer]] — cancer as a phenotype; Peto's paradox context
- [[phenotypes/cherry-angioma]] — the cell-autonomous defense argument applies: cherry angioma lesions harbor weakly-immunogenic somatic mutations; the elephant model illustrates how cell-autonomous apoptotic drives (rather than immune surveillance) can suppress such lesions

---

*Literature recency note: Recency search run 2026-05-07. Search terms: "elephant cancer Peto paradox TP53" (2021–2026) and "Loxodonta TP53 retrogene LIF6" (2022–2026). 7 post-2021 papers identified; key additions: Nunney 2022 (mechanistic challenge — verified against full PDF), Vollrath 2023 (alternative function hypothesis — verified against full PDF), Padariya 2022 (MDM2-escape isoforms, in-silico), Moore 2025 (reproduction critique, commentary). Both Nunney 2022 and Vollrath 2023 substantially challenge the training-era framing and are integrated into the body above with explicit discordance framing. `literature-checked-through: 2026-05-07` set in frontmatter (R28 schema escalation — field now part of type:model-organism schema).*
