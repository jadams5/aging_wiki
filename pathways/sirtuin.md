---
type: pathway
aliases: [sirtuin signaling, sirtuin pathway, SIR2 family, class III HDACs, SIRT1-7]
kegg: null
reactome: R-HSA-427359
wikipathways: WP2811
key-nodes: ["[[sirt1]]", "[[sirt3]]", "[[sirt6]]", "[[sirt7]]", "[[pgc-1alpha]]", "[[foxo3]]", "[[nf-kb]]", "[[p53]]", "[[nampt]]", "[[nad-metabolism]]"]
upstream: ["[[caloric-restriction]]", "[[ampk]]", "[[nad-metabolism]]", "[[nmn]]", "[[nr]]"]
downstream: ["[[autophagy]]", "[[mitochondrial-biogenesis]]", "[[dna-damage-response]]", "[[cellular-senescence]]", "[[inflammation]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]", "[[genomic-instability]]", "[[epigenetic-alterations]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Tissenbaum 2001 (PDF verified), Imai & Guarente 2016 (PDF verified), Pacholec 2010 (PDF verified), Hubbard 2013 (PDF verified). Closed-access sources (Imai 2000, Verdin 2015, Garten 2015, Kanfi 2012, Pencina 2023) not verifiable from full text — claims derived from those sources retain #gap/no-fulltext-access annotation where load-bearing. 2026-05-04: SIRT3-mTOR-FAO cross-talk section added from Li et al. 2023 (bioRxiv preprint; PMC9882180); preprint-sourced claims flagged accordingly."
---

> Verified 2026-05-04 against primary source PDFs for Tissenbaum 2001, Imai & Guarente 2016, Pacholec 2010, and Hubbard 2013. Five cited sources remain closed-access (Imai 2000, Verdin 2015, Garten 2015, Kanfi 2012, Pencina 2023); claims from those sources are tagged #gap/no-fulltext-access where load-bearing. Canonical DB IDs: Reactome R-HSA-427359 (SIRT1 sub-pathway only; no unified sirtuin pathway ID exists in KEGG or Reactome — see gaps section). WikiPathways WP2811 unverified (site blocked at time of writing).

> Note on naming convention: this page (`pathways/sirtuin.md`) is the canonical `[[sirtuin]]` wikilink target — it covers the *family/pathway*. Individual SIRT proteins, when seeded, will live at `molecules/proteins/sirt1.md`, `molecules/proteins/sirt3.md`, etc. to avoid wikilink ambiguity.

# Sirtuin signaling pathway

**Sirtuins** are a family of NAD+-dependent deacylases and ADP-ribosyltransferases whose activity is directly gated by cellular NAD+ availability. Because NAD+ declines with age — through CD38-mediated consumption, PARP hyperactivation, and reduced NAMPT-driven biosynthesis — sirtuin activity falls in parallel, contributing to a broad loss of stress-response, metabolic, and genomic maintenance capacity. Seven mammalian paralogs (SIRT1–7) distribute across distinct subcellular compartments and regulate non-overlapping substrate sets. The pathway sits at the intersection of [[deregulated-nutrient-sensing]], [[mitochondrial-dysfunction]], [[epigenetic-alterations]], and [[genomic-instability]] hallmarks.

The founding member, yeast Sir2 (Silent Information Regulator 2), was identified by the Guarente lab as an NAD+-dependent histone deacetylase linking chromatin silencing to metabolic state [^imai2000]. Mammalian orthologs were subsequently shown to extend lifespan in *C. elegans* (sir-2.1 overexpression +50% lifespan) [^tissenbaum2001], though the extrapolation to mammals is substantially more contested (see [Limitations](#limitations-and-caveats)).

## Family overview

| Paralog | Primary localization | Enzymatic activity | Key substrates (aging-relevant) |
|---|---|---|---|
| **SIRT1** | Nucleus / cytoplasm (shuttles) | Deacetylase | **H3K9ac (primary in mammals)**; H4K16ac (secondary in mammals; primary in yeast Sir2 — Pal & Tyler 2016); PGC-1α, FOXO3, NF-κB p65, p53, c-Myc |
| **SIRT2** | Cytoplasm (nuclear in M phase) | Deacetylase | α-tubulin K40, **H4K16ac (M phase only)**, CDH1+CDC20 (APC/C activators — Kim 2011), PR-Set7 K90 (Serrano 2013), FOXO1/3 |
| **SIRT3** | Mitochondrial matrix | Deacetylase | SOD2, IDH2, FOXO3 (mito pool), acetyl-CoA synthetase |
| **SIRT4** | Mitochondrial matrix | ADP-ribosyltransferase; lipoamidase | GDH, DLAT, lipoic acid modification |
| **SIRT5** | Mitochondrial matrix / cytoplasm | Desuccinylase; demalonylase; deglutarylase | CPS1, SDHA |
| **SIRT6** | Nucleus | Deacetylase; ADP-ribosyltransferase | H3K9ac, H3K56ac, TNF, NF-κB p65 targets |
| **SIRT7** | Nucleolus / nucleus | **Desuccinylase primary; deacetylase secondary** | **H3K122-succinyl (primary; Li 2016)**; H3K18ac (Barber 2012); RNA pol I components |

## NAD+ dependency and the age-related NAD+ decline

All seven sirtuins require NAD+ as a co-substrate (not just a cofactor) — each deacetylation reaction consumes one NAD+ molecule, producing nicotinamide (a feedback inhibitor at high concentrations) and O-acetyl-ADP-ribose. Sirtuin activity is therefore stoichiometrically coupled to NAD+ availability [^imai2016].

Three parallel mechanisms drive the age-associated NAD+ decline [^verdin2015]. #gap/no-fulltext-access — Verdin 2015 is closed-access; mechanistic framing unverified against full text.

1. **CD38 upregulation** — CD38 is an NAD+ glycohydrolase; its expression increases with aging and inflammation, consuming NAD+ without productive coupling to sirtuin activity. #gap/needs-replication — the relative magnitude of CD38 vs PARP contribution to age-related NAD+ decline remains debated.
2. **PARP hyperactivation** — Accumulating DNA damage with age drives PARP1/2 consumption of NAD+ for poly-ADP-ribosylation; PARP and sirtuins compete for the same NAD+ pool.
3. **Reduced NAMPT salvage** — NAMPT (nicotinamide phosphoribosyltransferase) is the rate-limiting enzyme in the NAD+ salvage pathway (nicotinamide → NMN → NAD+). NAMPT expression and activity decline with age in multiple tissues [^garten2015].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| NAD+ decline conserved in humans? | yes (multiple human tissue studies) |
| Replicated in humans? | in-progress (NAD+ precursor trials ongoing) |

## Upstream regulators

Sirtuin activity is regulated primarily at the level of NAD+ supply:

- **[[caloric-restriction]] / fasting** — reduce anabolic flux, shift NAD+/NADH ratio toward NAD+, upregulate NAMPT; net effect: sirtuin activation. CR-mediated lifespan extension in yeast requires SIR2 [^imai2000]. The full dependence in mammals is contested — see [Limitations](#limitations-and-caveats).
- **[[ampk]]** — AMPK activation increases NAD+ availability by stimulating mitochondrial oxidation (raising NAD+/NADH); also directly induces NAMPT expression in some tissues. The AMPK–sirtuin axis creates a feedforward loop: AMPK activates SIRT1 via NAD+; SIRT1 deacetylates and activates LKB1 (AMPK's upstream kinase) and PGC-1α (downstream of both).
- **Exercise** — acutely raises NAD+/NADH ratio in muscle and stimulates NAMPT; activates SIRT1 and SIRT3 in skeletal muscle. #gap/unsourced — human primary citation needed for skeletal muscle exercise-sirtuin link before promoting this as established.

## Key downstream signaling axes

### SIRT1 — transcription factor control

SIRT1 is the broadest-acting sirtuin and the most-studied in aging contexts. Its primary aging-relevant substrate targets:

- **PGC-1α** — SIRT1 deacetylates and co-activates PGC-1α, the master regulator of mitochondrial biogenesis and oxidative metabolism. Connects sirtuin signaling to [[mitochondrial-biogenesis]]. AMPK phosphorylates PGC-1α at complementary sites; the two modifications cooperate.
- **FOXO3** — deacetylation shifts FOXO3 toward transcriptional activation of stress-response genes (SOD2, catalase, DNA repair genes, autophagy genes). Connects to [[cellular-senescence]] suppression and resistance to oxidative stress.
- **NF-κB p65** — SIRT1 deacetylates p65 at K310, reducing transcriptional output of pro-inflammatory target genes. Mechanistically links sirtuin decline to [[chronic-inflammation]] / [[altered-intercellular-communication|inflammaging]].
- **p53** — SIRT1 deacetylates p53 at K382, attenuating apoptotic and senescence programs. Two-edged: in cancer contexts, SIRT1-mediated p53 deacetylation is tumor-permissive; in aging, it may suppress excessive senescence induction.
- **Histones (H3K9ac, H4K16ac)** — deacetylation promotes heterochromatin formation; reduced SIRT1 with age contributes to the heterochromatin erosion observed as part of [[epigenetic-alterations]].

### SIRT3 — mitochondrial proteome maintenance

SIRT3 is the primary mitochondrial deacetylase and the dominant regulator of the mitochondrial acetyl-proteome:

- **SOD2 (MnSOD)** — SIRT3 deacetylates SOD2 at K68 and K122, activating its superoxide scavenging activity. Reduced SIRT3 with age → SOD2 hyperacetylation → reduced ROS buffering → mitochondrial oxidative stress.
- **IDH2** — deacetylation activates IDH2 in the TCA cycle, maintaining NADPH for mitochondrial glutathione reduction. Connects SIRT3 to mitochondrial redox homeostasis.
- **FOXO3 (mitochondrial pool)** — SIRT3 deacetylates FOXO3 within mitochondria, promoting its import and transcriptional activation of mitochondrial-targeted antioxidant genes.

SIRT3 knockout mice show accelerated aging phenotypes including hearing loss, cardiac hypertrophy, and increased cancer incidence. #gap/needs-human-replication — these phenotypes established in mice; human SIRT3 loss-of-function equivalents not characterized.

### SIRT6 — genome maintenance and IGF-1 suppression

SIRT6 is a nuclear sirtuin with two aging-relevant functions:

1. **Genome integrity** — deacetylates H3K9ac and H3K56ac at double-strand breaks, facilitating DNA repair; also ADP-ribosylates PARP1 to stimulate repair at telomeres. SIRT6 knockout mice die at ~4 weeks with degenerative aging-like syndrome. SIRT6 overexpression in male mice extended median lifespan ~15% (females showed no significant effect) [^kanfi2012]. #gap/needs-replication — single study; female sex effect asymmetry unexplained. #gap/no-fulltext-access — Kanfi 2012 is closed-access; lifespan figure and sex-specificity not verifiable against full text.
2. **IGF-1 signaling suppression** — SIRT6 controls expression of IGF-1 pathway genes at the chromatin level; transgenic SIRT6-overexpressing male mice showed reduced circulating IGF-1 [^kanfi2012]. Connects to [[insulin-igf1]] longevity axis. #gap/no-fulltext-access — Kanfi 2012 closed-access; IGF-1 mechanism claim not verifiable against full text.

## Pharmacology: activators and precursors

### NAD+ precursors (primary strategy)

Rather than directly activating sirtuins, the predominant clinical approach is to restore the NAD+ substrate pool:

| Compound | Entry point in salvage/biosynthesis | Human trial evidence |
|---|---|---|
| **[[nmn]]** (nicotinamide mononucleotide) | Enters salvage at NMN step (post-NAMPT) | Raises blood NAD+ dose-dependently in adults 55-80; n=32, 14 days, well-tolerated [^pencina2023] #gap/no-fulltext-access — Pencina 2023 closed-access; n, dosing, and endpoints not verifiable against full text |
| **[[nr]]** (nicotinamide riboside) | Enters salvage at NR step (NAMPT-independent) | Multiple phase-1/2 trials; raises NAD+ in blood; clinical aging endpoints pending |

#gap/long-term-unknown — No trial has demonstrated a meaningful aging endpoint (functional, healthspan, or lifespan) in humans with NAD+ precursors. The mechanistic rationale is strong; efficacy in humans remains unproven. #gap/dose-response-unclear

### Resveratrol: direct SIRT1 activation — contested

Resveratrol (a polyphenol from red wine) was proposed as a direct SIRT1 activator and shown to extend lifespan in yeast, worms, flies, and short-lived obese mice. However, the direct-activation claim was challenged by Pacholec et al. (2010), who showed that resveratrol activated SIRT1 in biochemical assays *only* when a fluorophore-labeled peptide substrate was used — not with native peptide substrates — and attributed the signal to a dye-artifact [^pacholec2010]. #gap/contradictory-evidence

The Sinclair group responded with Hubbard et al. (2013), demonstrating that hydrophobic motifs in SIRT1 substrates (including some native peptides) can serve as allosteric activation points, with E230 identified as the critical SIRT1 residue [^hubbard2013]. The consensus as of 2024: resveratrol likely has indirect effects on SIRT1 activity (via AMPK activation, PDE inhibition, and other off-target mechanisms) rather than direct allosteric activation across all substrates. Whether the net effect on sirtuin signaling is meaningful at achievable concentrations in humans is unresolved.

| Dimension | Status |
|---|---|
| Resveratrol extends yeast / worm lifespan? | yes (Sir2-dependent in yeast) |
| Mechanism in mammals direct SIRT1 activation? | contested |
| Net sirtuin-relevant effect in humans? | unknown |

Dedicated synthetic SIRT1-activating compounds (SRT1720, SRT2183, SRT1460, from Sirtris/GSK) were also challenged by the same Pacholec study as non-direct activators using native substrates [^pacholec2010].

## Cross-pathway interactions

| Partner pathway | Relationship | Direction |
|---|---|---|
| [[ampk]] | AMPK raises NAD+/NADH → SIRT1/3 activation; SIRT1 activates LKB1 → AMPK; feedforward loop | mutual activation |
| [[mtor]] | SIRT1 deacetylates and activates TSC2 → mTORC1 inhibition; SIRT1 also inhibits mTORC1 via REDD1 upregulation. **SIRT3** additionally shares a metabolic intersection with mTORC1 at **fatty acid oxidation (FAO)**: mTORC1 targets LPIN1 (a phosphatidate phosphatase regulating lipid flux) while SIRT3 deacetylates mitochondrial FAO enzymes; genome-wide CRISPRa screening identified SIRT3 as a genetic intersection of both mTOR/insulin and NAD+ pathways via this shared lipid-metabolic axis [^li2023preprint] #gap/needs-replication | sirtuin inhibits mTOR (SIRT1); SIRT3 converges at FAO (preprint) |
| [[insulin-igf1]] | SIRT1 deacetylates IRS-2 (activating); deacetylates p85α PI3K subunit (inhibiting PI3K-AKT); SIRT6 suppresses IGF-1 gene expression | bidirectional, context-dependent |
| [[autophagy]] | SIRT1 deacetylates and activates ATG5, ATG7, LC3 — required for autophagosome formation; SIRT1 also activates FOXO3 which transcribes autophagy genes | sirtuin induces autophagy |
| [[dna-damage-response]] | SIRT6 deacetylates H3K9ac/H3K56ac at DSBs; SIRT1 deacetylates Ku70 to suppress apoptosis; SIRT3 reduces mitochondrial ROS-driven DNA damage | sirtuin supports DDR |

## Conservation and model organism evidence

| Organism | Sirtuin ortholog | Lifespan effect | Caveat |
|---|---|---|---|
| *S. cerevisiae* | Sir2 | Sir2 overexpression ~30% RLS extension; CR requires Sir2 | Controversy: Kaeberlein 2004 reported Sir2 not required for CR in some backgrounds [^gap-sir2-cr] |
| *C. elegans* | sir-2.1 | +50% with chromosomal duplication [^tissenbaum2001] | Later re-analysis (Viswanathan 2005) suggested extra-chromosomal transgene effects |
| *D. melanogaster* | dSir2 | Modest extensions reported; less consistent than mTOR/IIS results | #gap/contradictory-evidence |
| *Mus musculus* | SIRT6 | Transgenic SIRT6-OE males +~15% median lifespan [^kanfi2012] #gap/no-fulltext-access | Single study; female asymmetry; no NIA ITP equivalent; Kanfi 2012 closed-access |
| *Homo sapiens* | SIRT1–7 | NAD+ decline documented; no longevity-endpoint RCT exists | Surrogate endpoints (NAD+ levels, metabolic markers) only |

## Limitations and caveats

- **The mammalian sirtuin-aging story is substantially weaker than the yeast story.** Yeast Sir2 was identified in a clear genetic system; mammalian sirtuins are pleiotropic with context-dependent effects. No sirtuin has been shown to extend mouse lifespan by the NIA ITP standard (multi-site, genetically heterogeneous stock, pre-registered). SIRT6 is the closest (Kanfi 2012), but this was a single-lab result in males only [^kanfi2012]. #gap/no-fulltext-access — Kanfi 2012 closed-access.
- **No unified KEGG/Reactome pathway ID** exists for the sirtuin family. Sirtuin biology is distributed across dozens of sub-pathways in curated databases. The KEGG entry `hsa04932` (NAFLD) includes some sirtuin nodes. Reactome entry R-HSA-427359 covers SIRT1-rRNA suppression specifically. #gap/needs-canonical-id
- **NAD+ supplementation is unproven for aging endpoints in humans.** Human trials demonstrate NAD+ raising in blood; whether tissue NAD+ increases translate to sirtuin activation and downstream aging-relevant effects is not established. #gap/needs-human-replication
- **Resveratrol direct-activation mechanism is contested.** See [Pharmacology](#pharmacology-activators-and-precursors) above. #gap/contradictory-evidence
- **Sir2 and CR epistasis is organism-specific and contested.** The requirement for Sir2 in CR-mediated longevity varies by organism and CR implementation. Do not generalize the yeast result to mammals. #gap/contradictory-evidence

## Gaps and open questions

- `#gap/needs-canonical-id` — No unified KEGG or top-level Reactome pathway ID for the sirtuin family
- `#gap/contradictory-evidence` — Resveratrol direct SIRT1 activation mechanism (Pacholec 2010 vs Hubbard 2013; both PDFs verified)
- `#gap/contradictory-evidence` — Sir2 requirement for CR longevity (yeast strain-dependent)
- `#gap/needs-human-replication` — SIRT3 knockout aging phenotypes (hearing loss, cardiac hypertrophy)
- `#gap/needs-human-replication` — NAD+ precursor efficacy for aging endpoints
- `#gap/dose-response-unclear` — Optimal NAD+ precursor dosing for sirtuin activation in humans
- `#gap/long-term-unknown` — Long-term safety and efficacy of NMN/NR supplementation
- `#gap/unsourced` — Exercise → skeletal muscle sirtuin activation in humans (primary citation needed)
- `#gap/no-fulltext-access` — Imai 2000 (not_oa), Verdin 2015 (not_oa), Garten 2015 (not_oa), Kanfi 2012 (not_oa), Pencina 2023 (not_oa): claims from these sources cannot be verified against full text
- Dedicated study page needed: Tissenbaum & Guarente 2001 (sir-2.1 C. elegans) — PDF verified; ready for extraction
- Dedicated study page needed: Kanfi et al. 2012 (SIRT6 male mouse lifespan) — closed-access; flag for extraction if OA copy becomes available

## Footnotes

[^imai2000]: doi:10.1101/sqb.2000.65.297 · [[studies/imai-2000-sir2-nad-histone-deacetylase]] · review + original mechanistic data · in-vitro / S. cerevisiae · model: yeast · establishes Sir2 as NAD+-dependent deacetylase; links chromatin silencing to metabolic state · local: not_oa

[^tissenbaum2001]: doi:10.1038/35065638 · [[studies/tissenbaum-2001-sir2-celegans]] · in-vivo · n=80–451/strain across 4 trials · model: C. elegans · sir-2.1 chromosomal duplication (mDp4) extends mean lifespan up to ~50%; extrachromosomal transgene lines geEx1–3 showed mean lifespans 20.9–27.4 days vs 17.6 days control (p<0.05); daf-16 deletion suppresses extension; acts upstream of daf-16 in insulin-like signalling pathway · local: verified PDF

[^imai2016]: doi:10.1038/npjamd.2016.17 · [[studies/imai-2016-nad-sirtuin-aging]] · review · model: cross-species · NAD+ decline with age reduces sirtuin activity in nucleus and mitochondria; NAMPT-mediated NAD+ biosynthesis and CD38/PARP competition discussed; hypothalamus-adipose tissue eNAMPT axis highlighted as systemic regulator; NAD+ intermediates (NMN, NR) discussed as therapeutic strategy · local: verified PDF

[^verdin2015]: doi:10.1126/science.aac4854 · [[studies/verdin-2015-nad-aging]] · review · model: cross-species · NAD+ as redox coenzyme and sirtuin/PARP substrate; three mechanisms of age-related NAD+ decline; precursor supplementation rationale · local: not_oa

[^garten2015]: doi:10.1038/nrendo.2015.117 · [[studies/garten-2015-nampt]] · review · model: cross-species · NAMPT as rate-limiting NAD+ salvage enzyme; age-associated decline; role in metabolic disorders · local: not_oa

[^pacholec2010]: doi:10.1074/jbc.M109.088682 · [[studies/pacholec-2010-sirt1-activators]] · in-vitro · model: biochemical (Pfizer group; native vs TAMRA-fluorophore-labeled peptide substrates; full-length Ac-p53 and Ac-AceCS1) · SRT1720, SRT2183, SRT1460, and resveratrol activate SIRT1 with TAMRA-p53 peptide but show no activation with native p53 peptide (Ac-Lys382-p53) or full-length native substrates; NMR and SPR confirm SRT1460/SRT1720 bind TAMRA-containing peptides not native peptides; SRT1720 shows no glucose-lowering or mitochondrial benefit in ob/ob mice at 30 mg/kg; all four compounds are highly promiscuous (>50% inhibition of 14–38 unrelated targets at 10 µM) · local: verified PDF

[^hubbard2013]: doi:10.1126/science.1231097 · [[studies/hubbard-2013-sirt1-allosteric]] · in-vitro + cell-based · model: biochemical (PNC1-OPT and OAcADPR mass spectrometry assays); primary SIRT1 KO myoblasts reconstituted with wild-type or E222K murine SIRT1 · hydrophobic motifs in native SIRT1 substrates PGC-1α (K778) and FOXO3a (K290) enable STAC-mediated allosteric activation; Glu230 (human SIRT1; murine E222K) is the critical N-terminal domain residue — E230K substitution abolishes activation by 117 diverse STACs; metabolic effects of STACs (mitochondrial mass, ATP) blocked in SIRT1-E222K myoblasts; partially rebuts Pacholec by showing activation extends to select native sequences with hydrophobic motifs · local: verified PDF

[^kanfi2012]: doi:10.1038/nature10815 · [[studies/kanfi-2012-sirt6-male-mouse]] · in-vivo · model: transgenic mice (SIRT6-OE, male) · ~15% median lifespan extension in males; reduced IGF-1 signaling; no effect in females · local: not_oa

[^pencina2023]: doi:10.1093/gerona/glac049 · [[studies/pencina-2023-nmn-nad]] · rct · n=32 adults aged 55–80 · 14-day treatment · dose-related blood NAD+ increase; safe and well-tolerated; no aging endpoint · local: not_oa #gap/no-fulltext-access — cannot verify n, dose schedule, or endpoints against full text

[^gap-sir2-cr]: #gap/contradictory-evidence — Kaeberlein et al. 2004 (Nature) reported CR-mediated lifespan extension does not require Sir2 in some yeast backgrounds; contradicts earlier CR-Sir2 dependence claims. Citation needed: doi to be confirmed before adding as primary footnote.

[^li2023preprint]: [[studies/li-2023-dual-mtor-nad-gerotherapy]] · doi:10.1101/2023.01.16.523975 · PMC9882180 · in-vivo + in-vitro + in-silico · **preprint — not peer-reviewed** · n=6–13/group (NASH models); ALS SOD1-G93A mice (n not stated in text) · model: K562 cells (CRISPRa screen); C57BL/6J mice; human iPSC-derived motor neurons; SOD1-G93A transgenic mice · SIRT3 identified as top CRISPRa hit for BIOIO-1001; LPIN1 directionally consistent but sub-threshold; SIRT3-dependence in ex vivo hepatocytes confirmed · claims from preprint should be treated as preliminary #gap/needs-replication
