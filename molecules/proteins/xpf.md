---
type: protein
aliases: [ERCC4, XPF, DNA repair endonuclease XPF, ERCC11]
uniprot: Q92889
ncbi-gene: 2072
hgnc: 3436
ensembl: ENSG00000175595
mouse-ortholog: Ercc4
genage-id: 261
key-domains: [helicase-like-N-terminal, nuclease-ERCC4, HhH2-dimerization]
key-ptms: [Lys289-acetylation, Lys911-acetylation, Ser521-phosphorylation, Ser764-phosphorylation]
pathways: ["[[nucleotide-excision-repair]]", "[[interstrand-crosslink-repair]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
complex-subunits: [P07992]
known-interactors: ["[[ercc1]]", "[[xpa]]", "[[rpa]]", "[[xpg]]", "[[slx4]]"]
druggability-tier: 3
gtex-aging-correlation: "significant age-related mRNA decline in human PBMCs (Deng 2017, r = −0.844; p<0.001; steeper than partner ERCC1 decline of r = −0.578); tissue-level GTEx data not formally pulled — #gap/needs-canonical-id"
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[genomic-instability]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Sijbers 1996, Niedernhofer 2006, Vermeij 2016, Garinis 2009, Birkisdottir 2021, Park/Tsodikov 2007, Zhang 2019 all verified against primary source PDFs. UniProt Q92889 verified via REST API (length 916 aa, domain boundaries, PTMs). GenAge HAGRID 261 confirmed via web lookup. Active-site residue numbering (Asp-687/Glu-689) not annotated as 'Active site' in UniProt feature table — sourced from Enzlin & Schärer 2002 (EMBO J 21:2045–2053), not Sijbers 1996; footnote corrected. Lys-289 acetylation added from UniProt. Open Targets druggability tier 3 not independently re-verified via API call."
---

# XPF (ERCC4)

XPF (encoded by *ERCC4*) is the **catalytic subunit of the XPF-ERCC1 structure-specific endonuclease**, the enzyme that makes the 5' incision during nucleotide excision repair (NER) and the crosslink-unhooking cut during interstrand crosslink (ICL) repair. Hypomorphic and null mutations in XPF/ERCC4 cause a spectrum of human disorders — from mild xeroderma pigmentosum (XP-F) to the severe **XFE progeroid syndrome** — making this protein one of the clearest genetic demonstrations that accumulating DNA damage drives accelerated aging. The catalytic GDxxS nuclease motif resides in XPF; its non-catalytic partner [[ercc1]] provides scaffolding and DNA-damage recognition.

## Identity

- **UniProt:** Q92889 (ERCC4_HUMAN)
- **NCBI Gene:** 2072
- **HGNC symbol:** ERCC4 (alias XPF, ERCC11)
- **Ensembl:** ENSG00000175595
- **Mouse ortholog:** Ercc4 / Xpf (one-to-one ortholog; all progeroid mouse models use Ercc1 or Ercc4 alleles)
- **GenAge:** entry 261 (listed for humans, mice, and *C. elegans*; evidence quality: disease/progeroid model)
- **Length:** 916 amino acids (canonical isoform per UniProt Q92889; Sijbers 1996 original cDNA clone encoded 905 aa per EMBL U64315 — likely reflects updated reference sequence annotation)
- **Complex partner:** ERCC1 (UniProt P07992) — obligate heterodimer; XPF is unstable without ERCC1 in cells

## Domain architecture

XPF is a mosaic protein retaining structural elements of ancestral ERCC4-family helicases, though the helicase ATPase activity is defunct in the vertebrate protein [^sijbers1996]:

| Domain | Residues (approx.) | Function |
|---|---|---|
| Helicase-like (N-terminal) | 1–457 | Catalytically inactive vestige; contains two leucine-zipper regions (~233–254, ~270–298); contributes to protein folding and likely to substrate interaction |
| Nuclease / ERCC4 domain | 658–813 (region); 683–763 (ERCC4 domain core per UniProt) | Active site carrying the GDxxS metal-binding motif; Mg²⁺ cofactor; executes the 5' phosphodiester cleavage; catalytic residues Asp-687/Glu-689 per Enzlin & Schärer 2002 |
| HhH2 dimerization | ~837–905 | Helix-hairpin-helix fold; interlocks with ERCC1's HhH2 domain to form the heterodimer interface |

**Active-site residues:** The ERCC4 nuclease domain employs a GDxxS catalytic motif coordinating Mg²⁺ for phosphodiester hydrolysis; the catalytic residues were mapped to Asp-687 and Glu-689 by Enzlin and Schärer 2002 (EMBO J 21:2045–2053) using site-directed mutagenesis of the conserved nuclease motif. UniProt Q92889 (verified 2026-05-07) does not annotate explicit "Active site" typed features at these positions in its feature table — the domain annotation lists the ERCC4 domain as residues 683–763, which is consistent. The catalytic mechanism involves a one-metal-ion nucleophilic attack on the phosphate 5' of the scissile bond [^sijbers1996]. **PTMs confirmed by UniProt Q92889:** N6-acetyllysine at Lys-289 (within the N-terminal helicase-like region) and Lys-911 (within or near the HhH2 domain); phosphoserine at Ser-521 and Ser-764. The regulatory significance of these PTMs in vivo is not established. #gap/needs-replication

**Structural specificity:** Like its archaeal ERCC4 homologs, human XPF-ERCC1 is a **structure-specific endonuclease** — it incises at single-strand/double-strand junctions (ssDNA-dsDNA boundaries) rather than recognizing a specific sequence. This allows one nuclease to operate across all NER substrates and ICL intermediates.

## NER mechanism — XPF's role

[[nucleotide-excision-repair]] removes helix-distorting bulky adducts (UV photoproducts, platinum-DNA adducts, bulky chemical adducts). The pathway culminates in a **dual incision** that excises a ~27–29 nt damage-containing oligonucleotide:

1. **5' incision by XPF-ERCC1** — ~20–22 nt 5' of the lesion on the damaged strand; XPF's catalytic ERCC4 domain performs the cut; ERCC1 positions the complex at the bubble via interactions with [[xpa]] and [[rpa]] [^tsodikov2007]
2. **3' incision by XPG** — ~6–8 nt 3' of the lesion; XPG is a separate ERCC2/XPD-family nuclease unrelated to XPF

**Sub-pathway distinction:** In GG-NER (global-genome NER, initiated by XPC-RAD23B damage recognition), XPF-ERCC1 acts before XPG cleavage. In TC-NER (transcription-coupled NER, triggered by stalled RNA Pol II at lesions), the order may differ, though both incisions are required for gap formation. ERCC1 is recruited to the open bubble via [[xpa]] binding the ERCC1 central domain [^tsodikov2007].

After dual incision:
- Gap-filling DNA synthesis by Pol delta or epsilon + [[pcna]] + RFC
- Ligation by LIG1 (replicating cells) or LIG3 (non-replicating)
- The excised 27–29 nt fragment is degraded

## ICL repair — XPF as the unhooking nuclease

Interstrand crosslinks (ICLs) covalently link both strands of DNA, blocking replication forks and transcription. XPF-ERCC1 is the **primary ICL "unhooking" nuclease** in vertebrates [^zhang2019]. The canonical vertebrate ICL repair mechanism:

1. Replication fork collision with the ICL triggers arrest and recruitment of the **Fanconi Anemia (FA) core complex** → FANCD2/FANCI monoubiquitination
2. **XPF-ERCC1** (scaffolded by SLX4/FANCP) makes dual incisions flanking the crosslink on one strand, "unhooking" it and creating a DSB intermediate [^zhang2019]
3. The unhooked ICL-oligonucleotide remnant on the template is bypassed by TLS polymerases (Pol zeta, Rev1)
4. The DSB is repaired by homologous recombination

Loss of XPF causes **Fanconi anemia complementation group Q (FANCQ)** — the FA classification reflects XPF-ERCC1's essential ICL-repair function. Severe XPF mutations (e.g., R689S at the catalytic site) in the FA-Q patient context produce marrow failure, congenital abnormalities, and cancer predisposition distinct from XP-F or XFE.

## Single-strand annealing (SSA)

After DSB-flanking end resection creates long 3' ssDNA tails, RAD52-mediated strand annealing can pair flanking direct repeats. XPF-ERCC1 then removes the resulting **3' nonhomologous flaps** to allow ligation. SSA is a mutagenic pathway (it deletes the intervening sequence); XPF-ERCC1's role here is to enable completion of an error-prone pathway rather than error-free repair. The aging relevance of SSA flap-trimming by XPF-ERCC1 is not established. #gap/no-mechanism

## Role in aging

### XFE progeroid syndrome — the human genetic argument

The **XFE progeroid syndrome** (OMIM #278760 for XP-F; XFE features are driven by severe ERCC4 mutations) is the most phenotypically extreme form of xeroderma pigmentosum group F [^niedernhofer2006]. The Niedernhofer 2006 Nature paper described a patient with compound heterozygous severe XPF mutations exhibiting:
- Profound crosslink sensitivity
- Dramatic multi-organ progeroid symptoms (neurodegeneration, cachexia, growth failure, dysmorphic features)
- Transcriptomic profile of the progeroid mouse liver overlapping significantly with the transcriptome of aged wild-type mice — establishing that **XPF/ERCC1 deficiency recapitulates normal aging** at the gene-expression level [^niedernhofer2006]

The same paper showed that Ercc1-deficient mouse liver transcriptomes (the murine model) closely matched aged wild-type liver expression patterns, providing the molecular-correlation evidence that this progeroid model is mechanistically relevant to normal aging rather than an artifact of UV hypersensitivity.

For the full Ercc1-/- mouse phenotype (lifespan, organ-level progeroid features, quantitative somatotrophic axis suppression), see [[ercc1]] § Role in aging, which holds the primary quantitative claims from Niedernhofer 2006. The progeroid phenotype is caused by loss of the **ERCC1-XPF heterodimer** — both subunits' pages cross-reference the same study data to avoid duplication.

### Somatotrophic axis suppression — genotoxic stress as an aging signal

The most conceptually significant finding from Niedernhofer 2006 was that **genotoxic stress suppresses the GH/IGF-1 axis** — phenocopying the hormonal milieu of caloric restriction and long-lived mutant mice. XPF/ERCC1-deficient mice showed significantly lower circulating IGF-1 and insulin, and reduced blood glucose [^niedernhofer2006]. This was interpreted as an **adaptive survival response**: cells detect unresolved DNA damage and shift from growth to maintenance programs by downregulating anabolic somatotrophic signaling.

Garinis et al. 2009 extended this to a general principle: persistent transcription-blocking DNA lesions (which accumulate when NER is impaired) reduce IGF-1 receptor and GH receptor expression, generating **cellular resistance to growth signals** and oxidative stress across proliferating and differentiated cell types [^garinis2009]. This "growth attenuation" response is proposed to promote longevity at the organism level by redirecting resources from growth to somatic maintenance.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | NER, ICL repair, and IGF-1 signaling are highly conserved |
| Phenotype conserved in humans? | partial | XFE and XP-F provide human genetic support; IGF-1 suppression in normal human aging via DNA damage load not directly demonstrated |
| Replicated in humans? | no | Genetic models only; human XFE too rare for quantitative population analysis |

#gap/needs-human-replication — The specific claim that endogenous DNA damage (repaired by XPF-ERCC1) suppresses the somatotrophic axis in normal human aging has not been directly demonstrated.

### Dietary restriction rescues XPF-ERCC1-deficient mice — Vermeij 2016

Vermeij et al. 2016 demonstrated that dietary restriction (DR) — starting at 10% food reduction from week 7 and reaching 30% from week 9 onward — extended median remaining lifespan by ~250% in male and ~200% in female Ercc1^Δ/− compound heterozygous mice (natural median lifespan 10–13 weeks to 35–39 weeks; p<0.0001) [^vermeij2016]. The result was replicated in a second animal facility at ~180% median extension (p<0.0001). DR also rescued Xpg-/- (Cockayne-syndrome model) mice, suggesting the rescue is pathway-level, not allele-specific. Crucially, DR reduced γH2AX foci (DNA damage accumulation) in Purkinje neurons and retained ~50% more neocortical neurons versus ad libitum controls — consistent with the interpretation that DR attenuates rather than merely compensates for the DNA damage load.

For full quantitative detail on the DR rescue, see [[ercc1]] § Vermeij 2016 — dietary restriction rescues the Ercc1^Δ/− mouse.

A subsequent rapamycin study (Birkisdottir et al. 2021) found that rapamycin **failed** to extend lifespan or reduce transcription stress in DNA repair-deficient progeroid mice, despite lowering mTOR signaling — indicating that **dietary restriction's benefit operates through mechanisms beyond mTOR inhibition alone**, and that XPF-ERCC1 deficiency is not simply equivalent to mTOR pathway insufficiency [^birkisdottir2021].

### Age-related decline in XPF expression

Deng et al. 2017 measured ERCC4/XPF mRNA in PBMCs from 147 donors and found a steep age-dependent decline: r = −0.844; p<0.001 — steeper than the parallel ERCC1 decline (r = −0.578) [^deng2017-proxy]. If XPF expression declines with age in other tissues (not yet established), this would reduce the heterodimer pool and NER capacity, creating a positive feedback loop: less XPF-ERCC1 → more unrepaired bulky lesions → greater genomic instability → more activation of senescence/apoptosis programs.

#gap/needs-human-replication — Tissue-level XPF expression decline with age has not been directly measured; only PBMC data is available [^deng2017-proxy]. #gap/no-mechanism — The driver of age-dependent XPF mRNA decline is unknown.

## Disease spectrum

XPF/ERCC4 mutations cause a **phenotypic spectrum** reflecting residual heterodimer activity [^niedernhofer2006] [^sijbers1996]:

| Syndrome | Residual NER | Key features |
|---|---|---|
| Xeroderma pigmentosum F (XP-F) | ~10–25% | UV hypersensitivity; skin cancers; mild to moderate neurological involvement; no progeroid aging |
| XP-F/Cockayne Syndrome overlap | ~5–10% | XP-F features + Cockayne-like neurodegeneration, cachexia, photosensitivity |
| XFE progeroid syndrome | <5% | Profound progeroid features; ICL hypersensitivity; death in infancy to early childhood |
| Fanconi anemia (FANCQ) | ICL-specific | Bone marrow failure; congenital abnormalities; cancer predisposition; caused by XPF mutations specifically affecting ICL-unhooking function |

The correlation between residual activity and phenotypic severity is consistent with the model that **endogenous DNA damage** (mainly ICLs and transcription-blocking adducts accumulating throughout life) is the pathogenic substrate, not UV-induced lesions per se.

## Pharmacology and druggability

**Druggability tier: 3** (aging-context): XPF-ERCC1 is predicted druggable via the ERCC1-binding HhH2 surface (a protein-protein interaction, or PPI) or via allosteric targeting of the nuclease domain, but no clinical-stage drug exists for any indication.

**Cancer chemosensitization:** XPF-ERCC1 repairs platinum-DNA adducts; high expression predicts resistance to cisplatin and oxaliplatin in multiple tumor types. This has motivated small-molecule **XPF-ERCC1 PPI inhibitor** programs (targeting the ERCC1-XPF interface to prevent heterodimerization and sensitize tumors to platinum chemotherapy). Several nanomolar compounds have been described in academic laboratories, but none have advanced to clinical trials as of 2026-05-07. #gap/needs-canonical-id — specific compound page for XPF-ERCC1 inhibitors not yet seeded.

**Aging-directed therapeutic hypothesis:** Restoring XPF expression or heterodimer stability in aged tissues could slow accumulation of endogenous DNA damage and delay the somatotrophic response. This remains speculative; no pre-clinical aging data supports it. A gene therapy delivering wild-type ERCC4 to aged rodents is conceptually the next experiment. #gap/no-mechanism

## Pathway membership

- [[nucleotide-excision-repair]] — catalytic 5' incision subunit of the XPF-ERCC1 endonuclease; essential for both GG-NER and TC-NER
- [[interstrand-crosslink-repair]] — ICL unhooking nuclease; cooperates with the Fanconi Anemia core complex via SLX4/FANCP
- [[dna-damage-response]] — downstream effector of lesion-sensing; XPF loss activates persistent DDR signaling → [[p53]], [[p21]], [[atm]] outputs

## Key interactors

- [[ercc1]] — obligate non-catalytic partner; XPF is unstable and non-functional without ERCC1; the heterodimer is the functional unit for all XPF repair activities
- [[xpa]] — recruits ERCC1-XPF to the NER bubble via direct ERCC1 interaction; indispensable for 5' positioning [^tsodikov2007]
- [[rpa]] — coats the undamaged strand at the bubble; contributes to lesion discrimination and heterodimer orientation
- [[xpg]] — performs the 3' incision; coordinates with XPF-ERCC1 for dual excision; XPG binding may stimulate XPF incision in TC-NER
- [[slx4]] (FANCP) — scaffold for XPF-ERCC1 in ICL repair; SLX4 mutations cause Fanconi anemia complementation group P; SLX4IP stabilizes the SLX4-XPF-ERCC1 interaction following DNA damage [^zhang2019]

## Limitations and gaps

- `#gap/needs-human-replication` — Progeroid and DR-rescue data are entirely mouse (Ercc1/Xpf alleles); human XFE cases are too rare for quantitative extrapolation.
- `#gap/needs-replication` — The Vermeij 2016 DR rescue (200–250% median lifespan extension in primary cohort; ~180% in second-facility replication within the same study) has not been independently replicated by a separate laboratory.
- `#gap/no-mechanism` — The mechanism driving age-dependent decline of XPF mRNA in human PBMCs is unknown.
- `#gap/needs-human-replication` — Tissue-level XPF-ERCC1 expression and NER capacity decline with age in non-PBMC human tissues are not established.
- `#gap/needs-replication` — Active-site residue significance (Asp-687, Glu-689 mapped by Enzlin & Schärer 2002 mutagenesis; not annotated as active-site residues in UniProt Q92889 feature table as of 2026-05-07) and PTM in-vivo significance (Lys-289 and Lys-911 acetylation, Ser-521 and Ser-764 phosphorylation) have not been validated in aging-context studies.
- `#gap/no-mechanism` — SSA flap-trimming by XPF-ERCC1: aging relevance of this error-prone repair activity in aged tissues is not established.
- GenAge HAGRID 261 confirmed (ERCC4, Homo sapiens) via direct genomics.senescence.info query on 2026-05-07 verification pass. Open Targets druggability tier 3 not confirmed via API call; ENSG00000175595 lookup pending. #gap/needs-canonical-id (Open Targets only)

## Footnotes

[^sijbers1996]: doi:10.1016/s0092-8674(00)80155-5 · Sijbers AM, de Laat WL, Ariza RR et al. (Hoeijmakers JH, Wood RD labs) · *Cell* 1996 · in-vitro (biochemical reconstitution + cDNA cloning) · n=n/a · model: human cell lines complementation + purified ERCC4/XPF protein; cDNA encodes 905 aa (EMBL U64315; note current UniProt Q92889 canonical isoform is 916 aa — minor discrepancy likely reflects updated annotation); XPF purified as obligate ERCC1-XPF heterodimer (~42 kDa ERCC1 + 115 kDa XPF); complex is structure-specific endonuclease cleaving 2–4 nt 5' of ssDNA-dsDNA junction; established XPF as catalytic 5' incision subunit of NER; gene mapped to chromosome 16p13.1–13.2 · PDF locally available

[^niedernhofer2006]: doi:10.1038/nature05456 · Niedernhofer LJ, Garinis GA et al. · *Nature* 2006 · in-vivo + case-report · n=27 (Ercc1-/- lifespan cohort) + 1 human XFE patient · model: Ercc1-/- mice in F1 hybrid background (C57BL/6 cross); severe ERCC4/XPF mutation (R153P) causing XFE progeroid syndrome; Ercc1-/- mouse liver transcriptome overlaps aged WT (Spearman r=0.32, P≤0.0001 vs old mice; r=−0.03 vs young); somatotrophic axis suppression: serum IGF-1 significantly lower P<0.001, blood glucose P<0.001, serum insulin P<0.03 · PDF locally available; KEY aging paper

[^garinis2009]: doi:10.1038/ncb1866 · Garinis GA, Uittenboogaard LM, Stachelscheid H et al. (Hoeijmakers JH, Schumacher B labs) · *Nature Cell Biology* 2009 · in-vitro + in-vivo · model: primary mouse dermal fibroblasts from Csb^m/m/Xpa-/- (severe progeroid), Csb^m/m (mild), Xpa-/- and wild-type mice, plus primary chondrocytes and neurons; UV doses 0.6–4 J/m²; IGF-1R and GHR mRNA suppressed within 6 h of UV in a dose-dependent manner in all cell types including post-mitotic neurons and quiescent fibroblasts; suppression exacerbated and prolonged in progeroid Ercc1-/- cells; attenuation is transcription-coupled (Xpc-/- GG-NER-only cells recover normally); resistance to oxidative stress induced; establishes cell-autonomous attenuation of IGF-1/GHR as primary response to persistent transcription-blocking lesions · PDF locally available

[^vermeij2016]: doi:10.1038/nature19329 · Vermeij WP et al. · *Nature* 2016 · in-vivo (dietary restriction intervention) · model: Ercc1^Δ/− compound heterozygote (F1 C57BL6J/FVB hybrid background); DR protocol: 10% restriction from week 7, reaching 30% from week 9 onward; primary cohort: males median lifespan 10→35 wks (250% extension; p<0.0001), females 13→39 wks (200% extension; p<0.0001); second-facility replication: ~180% median lifespan extension (p<0.0001); γH2AX foci reduced in DR animals; ~50% more neurons retained in neocortex vs ad libitum controls; Xpg-/- mice also rescued by same DR protocol · PDF locally available

[^birkisdottir2021]: doi:10.1111/acel.13302 · Birkisdottir MB, Jaarsma D, Brandt RMC et al. (Hoeijmakers JH, Vermeij WP, Dollé MET labs) · *Aging Cell* 2021 · in-vivo · model: Ercc1^Δ/− female mice (F1 C57BL6J/FVB background); rapamycin at 14 ppm (standard ITP dose) from 4 weeks of age failed to extend median or maximal lifespan (log-rank p=0.71 vs control); dose-response tested at 4.7, 14, and 42 ppm — all failed; genetic mTOR modulation via Rheb^+/− and Tsc1^+/− also ineffective; rapamycin did reduce S6 phosphorylation confirming mTOR target engagement; 30% DR in parallel cohort extended lifespan ~200% (p<0.0001); rapamycin did not reduce transcription stress or P53+ neurons; DR and rapamycin differ mechanistically — DR benefit not primarily mTOR-dependent · PDF locally available

[^tsodikov2007]: doi:10.1038/sj.emboj.7601894 · Tsodikov OV, Ivanov D, Orelli B, Staresincic L, Shoshani I, Oberman R, Schärer OD, Wagner G, Ellenberger T · *EMBO J* 2007 · in-vitro (NMR + X-ray crystallography) · n=n/a · model: XPA peptide (residues 67–80; KIIDTGGGFILEEE) in complex with ERCC1 central domain (residues 92–214); KD ~0.78 µM; XPA inserts Gly72/73/74 into V-shaped groove of ERCC1; XPA peptide inhibits NER in HeLa cell-free extracts; establishes XPA–ERCC1 interaction as essential for ERCC1-XPF recruitment to NER bubble · PDF locally available — NOTE: originally miskeyed as "park2019" and misattributed to "Park CJ, Choi BS" in auto-extraction; corrected to authors Tsodikov OV et al. on 2026-05-07 verification pass.

[^zhang2019]: doi:10.1093/nar/gkz769 · Zhang H, Chen Z, Ye Y et al. (Chen J lab, MD Anderson) · *Nucleic Acids Research* 2019 · in-vitro + cellular · model: SLX4IP depletion (CRISPR KO + shRNA) in HEK293A/T cells sensitizes to MMC and camptothecin; SLX4IP binds SLX4 and XPF-ERCC1 simultaneously; disrupting one interaction disrupts both; SLX4IP stabilizes the SLX4-XPF-ERCC1 ternary complex especially after DNA damage; identifies SLX4IP as a regulatory scaffold maintaining efficient XPF-ERCC1 ICL unhooking · PDF locally available

[^deng2017-proxy]: cite from [[ercc1]] § Deng 2017 — doi:10.1016/j.jflm.2017.05.005 · Deng XD et al. · *J Forensic Leg Med* 2017 · observational · n=147 donors · XPF mRNA r = −0.844 with age (steeper than ERCC1 r = −0.578) — citation inherited from [[ercc1]] page; DOI-title match not independently verified against DOI lookup on this verification pass (PDF not in archive); #gap/needs-replication — verify DOI-title match on next lint pass
