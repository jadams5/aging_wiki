---
type: pathway
aliases: [HSR, proteotoxic stress response, heat shock pathway, cellular heat shock response]
kegg: null
reactome: R-HSA-3371556
wikipathways: WP4846
key-nodes: ["[[hsf1]]", "[[hsp70]]", "[[hsp90]]", "[[hsp60]]", "[[hsp27]]"]
upstream: []
downstream: ["[[autophagy]]", "[[apoptosis-pathway]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
druggability-tier: 2
caused-by: []
causes: []
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Partial verification only. Beere 2000 (10.1038/35019501) mechanistic claims confirmed via cross-reference to verified hsp70.md (R13 pass); HSP70 binds Apaf-1, prevents procaspase-9 recruitment — correct. Closed-access status of Locke 1996, Heydari 1993, Hsu 2003, Akerfelt 2010 confirmed via DOI lookup (cross-referenced from hsp70.md verified-scope). Morley 2004 (10.1091/mbc.e03-07-0532), Calderwood 2009 (10.1159/000225957), Labbadia 2017 (10.1016/j.celrep.2017.10.038) are pending download in a local paper archive — qualitative claims from these sources are flagged but unverified against full text. Anckar 2011 (10.1146/annurev-biochem-060809-095203) is locally available per a local paper archive but could not be read in this pass (Read tool restricted to wiki directory during this agent invocation) — ALL Anckar 2011-derived mechanistic claims (HSF1 domain architecture, activation cycle, PTMs, residue ranges) remain unverified against the PDF. Internal inconsistency RESOLVED 2026-05-06 R26e propagation: HSF1 oligomerization (HR-A/B) domain corrected to **130–221** here per the verified [[hsf1]] page (Anckar 2011 Fig 1a, PDF-verified during R26b). Basal-localization framing also corrected: HSF1 at rest is predominantly **nuclear** (not cytoplasmic, per Anckar 2011 p.1091); body and table updated accordingly. WikiPathways WP4846 validity not confirmed (WebFetch unavailable) — #gap/needs-canonical-id retained. Reactome R-HSA-3371556 not independently confirmed. Druggability-tier semantic ambiguity noted in Limitations — value unchanged pending main-agent schema decision."
---

> ⚠️ Partially verified 2026-05-06. Beere 2000 mechanistic claims confirmed via cross-reference to verified hsp70.md. The following remain unverified against full PDF: (1) Anckar 2011 — all HSF1 domain architecture and PTM claims (archive PDF locally available but unread this pass; Read tool was restricted to wiki directory); (2) Morley 2004, Calderwood 2009, Labbadia 2017 — pending download in a local paper archive; (3) WikiPathways WP4846 validity unconfirmed (WebFetch unavailable). Locke 1996, Heydari 1993, Hsu 2003, Akerfelt 2010 confirmed closed-access (not_oa), tagged #gap/no-fulltext-access where applicable. See `verified-scope` for full detail.

# Heat-shock response (HSR)

The **heat-shock response** is a universal eukaryotic transcriptional program activated by proteotoxic stress — including heat, oxidative insults, heavy metals, hypoxia, and the accumulation of misfolded proteins. Its master regulator is the transcription factor [[hsf1]], which trimerizes upon stress, accumulates further in the nucleus (the basal HSF1 pool is already predominantly nuclear), binds heat-shock elements (HSEs) in target gene promoters, and drives rapid, coordinated induction of the major molecular chaperones: [[hsp70]] (HSP72/HSPA1A/HSPA1B), [[hsp90]], [[hsp60]], and the small HSPs including [[hsp27]]. The HSR is a central pillar of [[loss-of-proteostasis]] biology: its capacity declines markedly with organismal age, and genetic manipulation of HSF1 and its downstream effectors extends or shortens lifespan in multiple model organisms [^anckar2011] [^akerfelt2010].

> **KEGG note:** No standalone KEGG pathway entry exists for the cytosolic HSF1-mediated HSR. KEGG hsa04141 covers the ER unfolded-protein response ([[unfolded-protein-response]]), a related but mechanistically distinct program. The Reactome entry R-HSA-3371556 "Cellular response to heat stress" is the most complete curated representation of the canonical HSF1 axis. #gap/needs-canonical-id

## Mechanism: HSF1 activation cycle

Under **unstressed conditions**, HSF1 is held as a transcriptionally inactive monomer **predominantly in the nucleus** (Anckar & Sistonen 2011 p.1091 is explicit on this — the older "HSF1 lives in the cytoplasm at rest" model has been superseded), sequestered by a complex of HSP70 and HSP90 [^akerfelt2010] [^anckar2011]. These chaperones act as intracellular stress sensors: when proteotoxic stress generates a surge of misfolded polypeptides, HSP70 and HSP90 are titrated away from HSF1 to service the increased chaperone demand. Freed HSF1 undergoes a three-step activation:

1. **Trimerization** — monomeric HSF1 assembles into a homotrimer stabilized by leucine-zipper coiled-coil interactions in the HR-A/B oligomerization domain (HSF1 residues 130–221 per Anckar 2011 Fig 1a — the verified [[hsf1]] page corrected the brief's "130–230" to 130–221) [^anckar2011].
2. **Nuclear accumulation** — the trimer accumulates further in the nucleus (small basal nuclear pool already present; activation increases nuclear concentration rather than initiating de-novo cytoplasm→nucleus translocation) and binds nGAAn pentameric repeat sequences (HSEs) in target gene promoters with high cooperativity [^anckar2011].
3. **Transactivation** — the C-terminal transactivation domain drives Pol II elongation; full activation requires phosphorylation at Ser326 and sumoylation; attenuating phosphorylation at Ser303 and Ser307 limits duration of the response and contributes to stress adaptation [^anckar2011].

The response is self-limiting: newly synthesized HSP70 and HSP90 feed back to rebind and repress HSF1, restoring resting-state stoichiometry within ~1–2 hours of continuous mild stress (or upon stress resolution).

| Phase | HSF1 state | HSP70/HSP90 occupancy | HSE binding |
|---|---|---|---|
| Basal | Monomer; **predominantly nuclear** (small cytoplasmic pool) | Bound (repressed) | None |
| Stress induction | Trimer; nuclear (further enriched) | Released (titrated by misfolded proteins) | High |
| Attenuation | Monomer; predominantly nuclear | Re-bound (new synthesis) | None |

## Key downstream effectors

The HSR transcriptome is dominated by molecular chaperones, but also includes co-chaperones, ubiquitin ligases, and autophagy regulators [^anckar2011]:

| Gene / protein | Family | Primary function in the HSR |
|---|---|---|
| [[hsp70]] (HSPA1A/HSPA1B) | HSP70 | Primary inducible chaperone; prevents aggregation, promotes refolding; inhibits apoptosome assembly [^beere2000] |
| [[hsp90]] (HSP90AA1/HSP90AB1) | HSP90 | Client-protein stabilization; part of the HSF1-repressing complex at rest |
| [[hsp60]] (HSPD1) | HSP60/GroEL | Mitochondrial chaperonin; assists folding in mitochondrial matrix |
| [[hsp27]] (HSPB1) | Small HSPs | ATP-independent holdase; stabilizes actin cytoskeleton; anti-apoptotic |
| DNAJB1 (HSP40) | HSP40/DNAJ | HSP70 co-chaperone; stimulates ATPase; substrate handoff |
| BAG3 | BAG domain | HSP70 nucleotide-exchange factor; connects chaperones to [[autophagy]] |

HSP70's inhibition of apoptosis is mechanistically established: at the apoptosome assembly step, HSP70 binds Apaf-1 (apoptotic protease-activating factor 1) and prevents procaspase-9 recruitment, suppressing caspase cascade activation downstream of cytochrome c release [^beere2000].

## Connection to downstream pathways

- **[[autophagy]]:** BAG3 (a HSP70 co-chaperone induced by HSF1) shuttles terminally misfolded or aggregated clients to autophagic degradation via the CASA (chaperone-assisted selective autophagy) pathway. Elevated HSP70 also indirectly supports autophagy by reducing ER stress and MTOR-suppressing signals. Conversely, mTORC1 inhibition (see [[mtor]]) promotes autophagy and cooperates with the HSR to maintain proteostasis — though mechanistic interdependence is incompletely mapped. #gap/no-mechanism
- **[[apoptosis-pathway]]:** The HSR suppresses apoptosis via multiple HSP effectors. HSP70 inhibits the apoptosome [^beere2000]; HSP27 blocks cytochrome c-triggered caspase activation upstream. When stress exceeds refolding capacity, the balance tips: prolonged HSF1 activation can paradoxically cooperate with apoptosis in some contexts (cancer biology). The pro-survival vs pro-death toggle is client-load dependent and not fully resolved. #gap/contradictory-evidence
- **[[unfolded-protein-response]]:** The UPR is the ER-compartment analog of the HSR, regulated by ATF6, IRE1, and PERK rather than HSF1. The two arms are coordinately regulated — ER stress signals can augment cytosolic HSF1 activation via the ISR kinase HRI — but they are distinct programs. See [[integrated-stress-response]] for the shared ISR components.

## Role in aging

### Decline of HSR capacity with age

HSR capacity declines progressively with age in rodents and human cells, contributing to the [[loss-of-proteostasis]] hallmark. Key observations:

- **Rodent skeletal muscle and liver:** HSP70 mRNA and protein induction in response to heat stress is reduced ~35% in aged animals compared to young, correlating with decreased HSF1 DNA-binding activity [^locke1996] [^heydari1993]. #gap/no-fulltext-access — Locke 1996 and Heydari 1993 are closed-access (not_oa per a local paper archive); quantitative estimates are from cited abstracts and downstream reviews; verify before quoting exact figures.
- **HSF1 transcriptional attenuation:** Aged cells show reduced HSF1 trimerization efficiency and shorter nuclear residency in response to stress — attributed in part to hyperphosphorylation at the inhibitory Ser303/Ser307 sites and to reduced sumoylation at Lys298 [^anckar2011]. The molecular effectors of age-related HSF1 attenuation are incompletely identified. #gap/no-mechanism
- **Consequence:** Reduced HSR capacity means greater accumulation of misfolded and aggregated proteins under conditions (fever, heat, oxidative insults) that young animals handle readily. This creates the positive-feedback dynamic in which failed proteostasis generates further protein aggregation, further titrating residual chaperone capacity.

### HSF1 as a longevity regulator (*C. elegans*)

The most genetically rigorous evidence linking the HSR to lifespan comes from *C. elegans*:

- Overexpression of *hsf-1* extends *C. elegans* lifespan; *hsf-1* loss-of-function shortens it and abolishes the thermotolerance phenotype of long-lived *daf-2* (insulin/IGF-1 receptor) mutants [^morley2004]. #gap/no-fulltext-access — Morley 2004 pending download in a local paper archive; lifespan extension magnitude not verified against full text.
- Critically, HSF1 and [[daf-16]] (the FOXO transcription factor) act **cooperatively** to extend lifespan in *daf-2* mutants: both transcription factors are required, and they induce partially non-overlapping transcriptional programs — HSF1 drives chaperone induction; DAF-16 drives metabolic and stress-resistance genes [^hsu2003].
- This places the HSR as a required effector of the canonical IIS (insulin/IGF-1 signaling) longevity pathway in *C. elegans*, rather than a parallel or independent mechanism.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — HSF1, HSE binding, HSP induction machinery are highly conserved |
| Phenotype (HSR attenuation with age) conserved in humans? | partial — reduced HSP70 induction in aged human fibroblasts and lymphocytes; quantitative data limited |
| HSF1 required for IIS lifespan extension in humans? | unknown — genetic experiments not feasible; #gap/needs-human-replication |

### Mitochondrial stress → HSR restoration

In *C. elegans*, perturbation of mitochondrial function (via clk-1 mutation or mitochondrial UPR induction) restores HSR competence in aged animals, apparently by activating HSF1 via the mitochondrial unfolded-protein response (UPRmt) pathway [^labbadia2017]. This establishes a mechanistic link between mitochondrial dysfunction (the [[mitochondrial-dysfunction]] hallmark) and HSR decline, suggesting that improving mitochondrial proteostasis could partially rescue the age-related attenuation of the HSR. #gap/needs-human-replication #gap/no-fulltext-access — Labbadia 2017 pending download in a local paper archive; mechanistic detail (specific role of UPRmt in HSF1 reactivation) not verified against full text.

## Interventions targeting the HSR

### Heat exposure / sauna

Repeated thermal stress (sauna use, hot-tub immersion, mild whole-body heat exposure) activates HSF1 and drives HSP70 induction in humans. See [[heat-exposure]] for the evidence base on sauna frequency and cardiovascular/longevity endpoints. The proteostasis-mediated contribution to any observed health benefits is biologically plausible but not mechanistically isolated in current human trials. #gap/no-mechanism

### Exercise-induced HSF1 activation

Aerobic exercise raises intramuscular temperature and generates reactive oxygen species, both of which activate HSF1 in skeletal muscle. Post-exercise HSP70 induction is a well-documented adaptation. The aging-relevant question — whether exercise-induced HSP70 induction declines with age in proportion to basal HSR attenuation — remains underexplored. #gap/needs-replication

### Pharmacological HSF1 activators (preclinical)

Several compound classes activate HSF1 by perturbing the HSP90-HSF1 repressive complex or directly inducing proteotoxic stress:

- **Geranylgeranylacetone (GGA):** Induces HSP70 and is neuroprotective in rodent models; oral form used in Japan for peptic ulcer disease. No aging-indication trials.
- **Celastrol:** Triterpene from *Tripterygium wilfordii*; potent HSF1 activator via inhibiting HSP90 co-chaperone interactions and proteasome function. Preclinical only; systemic toxicity limits translation. #gap/needs-human-replication
- **Arimoclomol:** Hydroxylamine derivative; amplifies HSF1 activation at HSEs without independently inducing chaperones; failed Phase 3 in NPC (Niemann-Pick C1); ongoing preclinical work in neurodegeneration. #gap/long-term-unknown

### HSP90 inhibitors (oncology — note on druggability-tier assignment)

Clinical HSP90 inhibitors (geldanamycin analogs: 17-AAG/tanespimycin, ganetespib, luminespib) target an HSR node with advanced-clinical / late-stage development status — but **no HSP90 inhibitor has FDA approval as of 2026** (R27 verifier-corrected from previously-asserted tier 1). All HSP90-inhibitor development has been in **oncology**, not aging, and the aging-relevant intervention direction — boosting HSR capacity via HSF1 activators — uses the pathway in the *opposite* direction from HSP90 inhibitors (which suppress it by disabling the client release mechanism). **This page carries `druggability-tier: 2` per the R26 CLAUDE.md schema clarification: pathway druggability uses the aging-context tier, and the HSR has no FDA-approved aging-indication drug.** The CLAUDE.md schema explicitly cites this page as the worked example: "[[heat-shock-response]] = tier 2 (HSP90 inhibitors are oncology-only, not aging-validated)." See `[[hsp90]]` (verified) — the protein page itself was R27-corrected from tier 1 to tier 2 on the same rationale.

## Limitations and gaps

- **Druggability-tier resolved 2026-05-07 (R27 propagation):** Per the R26 CLAUDE.md schema clarification, pathway pages use the *aging-context* druggability tier. HSP90 inhibitors are clinical-stage in oncology only and are *anti-HSR* (suppressing the pathway), not aging drugs. The aging-relevant direction — HSF1 activation — is preclinical-only (GGA, celastrol, arimoclomol). Tier reset from 1 → 2. The schema explicitly names this page as the worked example for the convention. See [[hsp90]] (verified) — its protein-page tier was R27-corrected on the same basis.
- **KEGG gap:** No standalone KEGG entry for the cytosolic HSF1/HSR axis. hsa04141 (UPR/ER) is the closest but is mechanistically distinct. #gap/needs-canonical-id
- **WikiPathways WP4846 verification:** Flagged for re-verification — community entries can drift. Source dates and cross-references should be confirmed in the verification pass. WebFetch was unavailable during the 2026-05-06 verification pass; WP4846 URL validity remains unconfirmed (prior verifier found WP4223 was a 404; same check needed here). #gap/needs-canonical-id
- **Quantitative HSR-decline data in humans:** Most human-HSR-attenuation data is from fibroblast and lymphocyte cell cultures, not in vivo. Tissue-specific and age-specific dose-response curves in humans are largely absent. #gap/needs-human-replication
- **Mechanistic basis of age-related HSF1 attenuation:** The specific molecular effectors (kinases, deacetylases, co-factor availability) that attenuate HSF1 trimerization in aged cells are incompletely characterized. #gap/no-mechanism
- **HSR-autophagy interdependence:** The quantitative and directional relationship between HSR induction and autophagy flux (specifically whether BAG3-mediated CASA is rate-limited by HSF1 activity in aged cells) has not been established by intervention experiments. #gap/no-mechanism
- **Pending local downloads (2026-05-06 verification pass):** Morley 2004 (10.1091/mbc.e03-07-0532), Calderwood 2009 (10.1159/000225957), and Labbadia 2017 (10.1016/j.celrep.2017.10.038) were pending download in a local paper archive at time of verification. Run  for each; re-verify longevity claims (Morley 2004), mini-review aging context (Calderwood 2009), and UPRmt-HSR restoration mechanistic detail (Labbadia 2017) once PDFs are available.
- **Anckar 2011 PDF unread this pass:** The DOI lookup resolves but Read tool was restricted to the wiki directory during this agent invocation. All Anckar 2011-derived claims — HSF1 domain residue boundaries, trimerization mechanism, PTM sites (Ser326, Ser303, Ser307), sumoylation at Lys298, and attenuation kinetics — remain unverified against the full text. Priority for the next verification pass.

## Footnotes

[^anckar2011]: doi:10.1146/annurev-biochem-060809-095203 · Anckar J & Sistonen L · *Annu Rev Biochem* 2011 · review · model: human/mammalian · locally available PDF (a local paper archive) · canonical reference for HSF1 domain architecture, activation cycle, PTM regulation, and HSR mechanism

[^akerfelt2010]: doi:10.1038/nrm2938 · Akerfelt M, Morimoto RI, Sistonen L · *Nat Rev Mol Cell Biol* 2010 · review · model: human/mammalian/C. elegans · not_oa (no local PDF) · HSF family biology; HSF1 repression by HSP70/HSP90 complex; aging context

[^hsu2003]: doi:10.1126/science.1083701 · Hsu AL, Murphy CT, Kenyon C · *Science* 2003 · in-vivo · model: *C. elegans* · not_oa (no local PDF) · HSF1 and DAF-16 cooperate to extend lifespan in daf-2 mutants; both required; non-overlapping transcriptional targets

[^morley2004]: doi:10.1091/mbc.e03-07-0532 · Morley JF & Morimoto RI · *Mol Biol Cell* 2004 · in-vivo · model: *C. elegans* · download pending in a local paper archive · hsf-1 overexpression extends lifespan; hsf-1 loss-of-function shortens it; thermotolerance of daf-2 mutants requires hsf-1

[^beere2000]: doi:10.1038/35019501 · Beere HM et al. · *Nat Cell Biol* 2000 · in-vitro · model: Jurkat T cell cytosolic extracts (endogenous Hsp70); 293T and MCF-7 cells (Hsp70 overexpression); THP.1 cell lysates; recombinant reconstitution with purified Apaf-1, procaspase-9, and cytochrome c · locally available PDF (a local paper archive; verified on [[hsp70]] R13) · HSP70 inhibits apoptosome assembly by binding Apaf-1 directly (not procaspase-9); prevents procaspase-9 recruitment; HSP70AAAA mutant (C-terminal EEVD-motif alanine substitution) abolished inhibitory activity

[^heydari1993]: doi:10.1128/mcb.13.5.2909 · Heydari AR et al. · *Mol Cell Biol* 1993 · in-vivo · model: aged rat liver · not_oa (no local PDF) · HSP70 mRNA induction in response to heat stress reduced in aged rats; dietary restriction partially restores induction; transcription-level attenuation #gap/no-fulltext-access

[^locke1996]: doi:10.1379/1466-1268(1996)001<0251:dhsrit>2.3.co;2 · Locke M & Tanguay RM · *Cell Stress Chaperones* 1996 · in-vivo · model: aged rat myocardium · not_oa (no local PDF) · ~47% reduction in HSF1 DNA-binding activity and ~35% reduction in Hsp72 induction in aged vs young rat heart after heat stress · #gap/no-fulltext-access — quantitative estimates from abstract and downstream review citations; verify against full text

[^calderwood2009]: doi:10.1159/000225957 · Calderwood SK, Murshid A, Prince T · *Gerontology* 2009 · review · model: human/mammalian · download pending in a local paper archive · mini-review on molecular chaperones and HSR in longevity and aging; aging-context overview

[^labbadia2017]: doi:10.1016/j.celrep.2017.10.038 · Labbadia J et al. · *Cell Reports* 2017 · in-vivo · model: *C. elegans* · download pending in a local paper archive · mitochondrial stress (via clk-1 mutation and UPRmt induction) restores HSR competence in aged animals; HSF1 reactivated; proteostasis collapse prevented #gap/needs-human-replication
