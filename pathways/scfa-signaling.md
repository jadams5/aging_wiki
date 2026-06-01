---
type: pathway
aliases: [short-chain fatty acid signaling, butyrate signaling, GPR41/GPR43 axis, FFAR signaling, SCFA signaling]
kegg: null
reactome: R-HSA-444209
wikipathways: null
key-nodes: ["[[gpr41]]", "[[gpr43]]", "[[gpr109a]]", "[[hdac]]", "[[foxp3]]"]
upstream: ["[[gut-microbiome]]", "[[dietary-fiber]]"]
downstream: ["[[regulatory-t-cells]]", "[[gut-barrier]]", "[[chronic-inflammation]]", "[[ampk]]"]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
sens-categories: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "All 7 primary-source PDFs verified against claims (Claesson 2012, Kimura 2011, Singh 2014, Smith 2013, Arpaia 2013, Gao 2009, Donohoe 2011). Maslowski 2009 and Furusawa 2013 are not_oa and could not be verified against full PDF — claims attributed to them are flagged. Reactome R-HSA-444209 identity not independently re-verified against Reactome database."
---

# SCFA signaling pathway

**Short-chain fatty acids (SCFAs)** — principally acetate (C2), propionate (C3), and butyrate (C4) — are the major metabolic products of anaerobic bacterial fermentation of indigestible dietary fiber in the cecum and colon. They act through two parallel mechanisms: (1) extracellular GPCRs ([[gpr43]], [[gpr41]], [[gpr109a]]) that transduce luminal metabolite levels into immune, enteroendocrine, and autonomic signals; and (2) intracellular [[hdac]] inhibition (primarily by butyrate) that directly reshapes chromatin in colonocytes and mucosal immune cells. In the context of aging, SCFA signaling is a core mechanistic link between [[gut-microbiome]] composition decline, loss of colonic [[regulatory-t-cells]], and the progression of [[chronic-inflammation]] (inflammaging). The pathway has no dedicated KEGG entry; Reactome curates it under "Free fatty acid receptors" (R-HSA-444209).

> **Naming note:** SCFA signaling is a pathway, not a single protein, so this page takes the bare name `[[scfa-signaling]]`. The individual receptor proteins ([[gpr41]], [[gpr43]], [[gpr109a]]) will, when seeded, live in `molecules/proteins/`.

## Identity and production

### The three major SCFAs

| SCFA | Carbon chain | Major colonic source | Approximate colonic fraction |
|---|---|---|---|
| Acetate | C2 | Bifidobacterium, Akkermansia muciniphila, most Firmicutes | ~60% |
| Propionate | C3 | Bacteroidetes (succinate pathway), some Firmicutes | ~20% |
| Butyrate | C4 | Faecalibacterium prausnitzii, Roseburia spp., Eubacterium rectale (Clostridiales) | ~20% |

Total luminal SCFA concentration in healthy humans is commonly cited as approximately 80–150 mM in the proximal colon, falling distally as absorption occurs; Smith et al. 2013 cite the colonic lumen concentration range as 50–100 mM. The 60:20:20 acetate:propionate:butyrate molar ratio is a commonly cited approximation; actual ratios vary substantially with diet and microbiome composition. #gap/unsourced — the specific ratio and the precise concentration range require a dedicated primary source citation (the canonical reference is Cummings JH et al. *Gut* 1987; 28:1221–1227, cited by Smith 2013 as ref 9, but not yet on this page); the "80–150 mM" figure may be a conflation of different measurement sites and methods.

Dominant SCFA-producing bacteria:
- **Butyrate:** *Faecalibacterium prausnitzii*, *Roseburia intestinalis*, *Eubacterium rectale* — all strict anaerobes in Clostridiales (family Lachnospiraceae / Ruminococcaceae). Roseburia (Lachnospiraceae) and Coprococcus were more abundant in community-dwelling than long-term care elderly subjects in the Claesson 2012 cohort; metagenome analysis showed higher butyrate-producing gene counts (BCoAt and ACS enzymes) in community subjects. Faecalibacterium prausnitzii is widely reported as reduced in elderly/frail cohorts in the broader literature but is cited in supplementary context in Claesson 2012; the main text explicitly names Coprococcus and Roseburia [^claesson2012].
- **Propionate:** Primarily Bacteroidetes via the succinate/propanediol pathway; [[akkermansia-muciniphila]] also produces propionate + acetate [^claesson2012].
- **Acetate:** Most broadly produced; *Bifidobacterium* and *Akkermansia muciniphila* are key contributors.

## Receptor signaling — GPR41, GPR43, GPR109A

SCFAs signal extracellularly through three GPCRs, each with distinct ligand preferences and tissue distributions.

### GPR43 (FFAR2) — acetate + propionate receptor

GPR43 is a Gi/Gq-coupled GPCR with highest affinity for acetate and propionate. It is expressed on immune cells (neutrophils, monocytes, tissue macrophages, mast cells, colonic Treg precursors), enteroendocrine L-cells (GLP-1 secretion), and adipocytes.

Maslowski et al. 2009 showed that *Gpr43*-knockout mice fed a conventional diet develop exacerbated joint inflammation and colitis, while germ-free mice (no SCFAs) phenocopy the knockout [^maslowski2009]. Conversely, SCFA supplementation in conventional mice attenuated inflammatory responses in a GPR43-dependent manner, establishing GPR43 as a required transducer of microbially-derived anti-inflammatory signals.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (ortholog FFAR2; widely expressed) |
| Phenotype conserved in humans? | partial (GPR43 variants associated with IBD; no knockout human data) |
| Replicated in humans? | no (mouse KO model; human genetic associations only) |

### GPR41 (FFAR3) — propionate + butyrate receptor

GPR41 is Gi/Gβγ-coupled and expressed most abundantly in sympathetic ganglia in both mice and humans, with lesser expression in enteroendocrine cells. Kimura et al. 2011 demonstrated that propionate activates sympathetic nervous system (SNS) outflow via GPR41 at the level of the superior cervical ganglion, driving increased heart rate. *Gpr41*-knockout mice have significantly reduced resting heart rate (682 ± 10 vs. 610 ± 16 beats/min in wild-type; n=12 each), reduced body temperature, lower UCP-1 expression in brown adipose tissue, and reduced oxygen consumption — establishing GPR41 as a key regulator of body energy homeostasis via direct SNS activation [^kimura2011]. The GPR41-SNS axis involves Gβγ-PLCβ-MAPK signaling (not Gα(i/o) or cAMP inhibition). Separately, the ketone body beta-hydroxybutyrate produced during starvation/diabetes antagonizes GPR41, suppressing SNS activity. White adipose tissue expression of Gpr41 was not detected in the Kimura 2011 qRT-PCR analysis; prior reports of adipose Gpr41 were not replicated in this study.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (ortholog FFAR3) |
| Phenotype conserved in humans? | unknown (no human KO; human variants not well-studied) |
| Replicated in humans? | no #gap/needs-human-replication |

### GPR109A (HCAR2) — butyrate + niacin + beta-hydroxybutyrate receptor

GPR109A (also known as the niacin receptor HCA2) binds butyrate at high micromolar to low millimolar concentrations, as well as the ketone body beta-hydroxybutyrate and pharmacological niacin. It is expressed on colonic epithelium, immune cells (particularly dendritic cells and macrophages), and hepatocytes.

Singh et al. 2014 showed GPR109A activation by butyrate or niacin imparts anti-inflammatory properties to colonic DCs and macrophages, enabling them to induce FoxP3+ Treg and IL-10-producing T cell differentiation; Niacr1−/− (*Gpr109a*-knockout) mice had ~40% fewer colonic Foxp3+ Tregs among CD4+ cells, increased susceptibility to DSS colitis, and accelerated AOM/DSS-induced colon carcinogenesis. GPR109A is also required for butyrate- and niacin-mediated IL-18 induction in colonic epithelial cells [^singh2014].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (GPR109A/HCAR2 widely expressed in colon and immune cells) |
| Phenotype conserved in humans? | partial (niacin anti-inflammatory effects in humans; SCFA arm untested) |
| Replicated in humans? | no #gap/needs-human-replication |

## Receptor-independent mechanisms

### Butyrate as HDAC class I inhibitor

At physiological colonic concentrations (1–5 mM in luminal content; estimated 0.1–1 mM intracellularly in colonocytes), butyrate inhibits class I and class IIa histone deacetylases ([[hdac]]). This produces genome-wide histone hyperacetylation in colonocytes, driving a transcriptional program that promotes epithelial differentiation, suppresses proliferation, and enhances apoptosis of pre-neoplastic cells. In mucosal immune cells, HDAC inhibition directly increases accessibility of the *Foxp3* promoter, contributing to Treg differentiation independently of GPR signaling [^arpaia2013].

The HDAC-inhibitory effect requires intracellular butyrate; propionate is a weaker HDAC inhibitor; acetate has minimal HDAC inhibitory activity at physiological concentrations.

### Butyrate as colonocyte energy substrate

Colonocytes use bacterially produced butyrate as their primary energy source via mitochondrial beta-oxidation, rather than systemic glucose [^donohoe2011]. Donohoe et al. 2011 showed that germ-free colonocytes (no luminal butyrate) have a 70% decrease in the NADH/NAD+ ratio in mitochondria, reduced oxidative phosphorylation (approximately 70% drop compared to conventionally raised controls), lower cellular ATP, and increased autophagy compared to colonocytes from conventionally housed mice. Butyrate supplementation to germ-free colonocytes ex vivo rescued mitochondrial respiration from ~30% to ~70% of CONV-R levels, and the rescue was blocked by the fatty-acid oxidation inhibitor etomoxir — confirming the mechanism is beta-oxidation rather than HDAC inhibition [^donohoe2011]. This makes colonocyte energy homeostasis fundamentally dependent on microbial fermentation — a key mechanism by which microbiome composition affects epithelial barrier integrity. Note: the commonly cited "60–70% of colonocyte energy from butyrate" figure derives from older human ex-vivo work (Roediger 1980) rather than from Donohoe 2011 directly; Donohoe 2011 establishes the primacy of butyrate as energy source mechanistically in the mouse germ-free model. #gap/unsourced — the specific percentage for human colonocytes requires a dedicated primary-source citation (e.g., Roediger 1980 *Gut*).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (colonocyte beta-oxidation of butyrate is well-established in human ex-vivo preparations) |
| Phenotype conserved in humans? | yes (colonoscopy studies confirm butyrate uptake) |
| Replicated in humans? | yes (general principle; germ-free colonocyte data is mouse-only) |

### Butyrate and AMPK activation

Butyrate activates [[ampk]] in colonocytes and, at supraphysiological doses, in skeletal muscle and liver. Gao et al. 2009 showed that oral butyrate (5% in diet) improved insulin sensitivity and increased energy expenditure in diet-induced obese mice; the mechanism involved AMPK activation and downstream mitochondrial biogenesis via PGC-1alpha [^gao2009]. This cross-links SCFA signaling to the [[mtor]] / [[ampk]] energy-sensing axis and to [[caloric-restriction]]-like metabolic effects.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (AMPK is conserved) |
| Phenotype conserved in humans? | unknown (dietary butyrate dose in humans rarely reaches mouse-equivalent levels) |
| Replicated in humans? | no #gap/needs-human-replication #gap/dose-response-unclear |

## Treg induction — the 2013 trifecta

Three concurrent papers published in December 2013 independently demonstrated that colonic SCFAs (especially butyrate) drive peripheral FoxP3+ Treg differentiation, establishing a mechanistic link between microbiome fermentation capacity and mucosal immune tolerance:

1. **Smith et al. 2013 (Science)** — SCFAs promote colonic Treg homeostasis in a *Ffar2*/GPR43-dependent manner; propionate (which has the highest affinity for Ffar2) was the primary driver demonstrated; SCFA-treated germ-free mice had restored colonic Treg frequency and number (provided in drinking water at 150 mM, not by gavage); propionate treatment reduced HDAC6 and HDAC9 expression in an Ffar2-dependent manner, suggesting GPR43 and HDAC inhibition act in concert [^smith2013].

2. **Furusawa et al. 2013 (Nature)** — Butyrate produced by *Clostridium* species induced colonic Treg differentiation via HDAC3 inhibition at the *Foxp3* promoter/enhancer; effect was cell-intrinsic and independent of GPR43 in this experimental system [^furusawa2013].

3. **Arpaia et al. 2013 (Nature)** — Butyrate (and to a lesser degree propionate, but not acetate) promoted extrathymic/peripheral Treg generation from naive CD4+ T cells via HDAC inhibition and marked H3K27-Ac increase at the *Foxp3* CNS1 intronic enhancer element; the effect was CNS1-dependent (CNS1-deficient mice were unresponsive), GPR-independent (pertussis toxin did not block; Gpr109a-/- DCs responded normally to butyrate), and operated both directly on T cells and via butyrate-conditioned DCs. Propionate also promoted peripheral (splenic) Treg accumulation in a CNS1-dependent manner but — unlike butyrate — did not promote colonic Treg accumulation via the local route; acetate had no effect on peripheral Tregs [^arpaia2013].

The mechanistic split between the three papers — GPR43/Ffar2-dependent (Smith) vs. HDAC-intrinsic (Furusawa, Arpaia) — has not been fully reconciled. Importantly, Smith 2013 does not show GPR43 to be exclusive: it demonstrates that propionate reduces HDAC6/9 expression in an Ffar2-dependent manner, so GPR43 and HDAC inhibition may be sequential rather than alternative. Arpaia 2013 directly tested Gpr109a-/- DCs and found GPR independence (pertussis toxin pretreatment also did not block the effect), placing the mechanism in T cell-intrinsic HDAC inhibition and butyrate-mediated conditioning of DCs. Furusawa 2013 (not_oa; claims unverified against PDF) is reported to show HDAC3 specifically. Current reading is that both pathways operate in vivo: GPR43 amplifies colonic Treg homeostasis (especially propionate-driven), while HDAC inhibition drives extrathymic/peripheral de novo Treg differentiation (especially butyrate-driven). #gap/contradictory-evidence — the exact relative contributions of GPR vs. HDAC routes in aging-associated SCFA decline have not been directly measured.

## Aging relevance

### Butyrate-producer depletion with age

Claesson et al. 2012 (Nature; n=178 elderly Irish adults, non-antibiotic-treated, mean age 78 ± 8 years, range 64–102, plus 13 younger controls aged 28–46) found that microbiome composition in the elderly correlates strongly with diet, residence (community-dwelling vs. long-term care), and health outcomes [^claesson2012]. Subjects were stratified as: community-dwelling (n=83), day-hospital outpatient (n=20), short-term rehabilitation (n=15), and long-term residential care (n=60). Individuals in long-term care had higher proportions of Bacteroidetes and reduced Firmicutes diversity — specifically Lachnospiraceae genera including *Coprococcus* and *Roseburia* (dominant butyrate producers) were more abundant in community-dwelling subjects. Metagenome shotgun sequencing (125.9 Gb from 27/29 subjects) confirmed significantly higher butyrate-producing enzyme gene counts (BCoAt, ACS) in community and rehabilitation subjects vs. long-term care. Long-term care subjects had worse frailty scores (lower Barthel, FIM, higher CRP and IL-6) than community-dwelling counterparts. Note: the paper names Coprococcus and Roseburia explicitly in the main text; Faecalibacterium prausnitzii is associated with butyrate production broadly but is cited in supplementary context in this paper. This is the strongest published demonstration linking SCFA-producer decline to aging phenotypes in humans (local PDF verified).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (human cohort study) |
| Replicated in humans? | yes (multiple cohort studies; see [[dysbiosis]]) |

### Hypothesis: SCFA decline contributes to inflammaging

The leading mechanistic hypothesis connecting SCFA decline to aging is:

> Reduced butyrate-producer abundance → lower luminal butyrate → (a) less Treg induction in the colon → reduced mucosal tolerance → systemic low-grade inflammation; and (b) reduced colonocyte HDAC inhibition → compromised epithelial barrier function → increased bacterial translocation → chronic immune activation.

This hypothesis is supported by the cross-sectional associations in Claesson 2012 and analogous cohort studies, by the mechanistic Treg induction papers (Smith/Furusawa/Arpaia 2013), and by the GPR43/GPR109A mouse knockout data. However, a direct human intervention demonstrating that SCFA restoration reduces inflammaging biomarkers is not yet published. #gap/needs-human-replication #gap/no-mechanism — the specific magnitude of SCFA's contribution to inflammaging relative to other drivers (CMV, adipose inflammation, senescent cell SASP) is unknown.

### Akkermansia muciniphila and propionate

[[akkermansia-muciniphila]]'s metabolic benefits are partly attributed to propionate and acetate production alongside mucin-derived oligosaccharide fermentation. This is a verified partial finding on the akkermansia-muciniphila page (R12). Propionate activates GPR41 and GPR43 and may contribute to the GLP-1 secretion and appetite regulation effects attributed to AKK.

## Therapeutic and dietary angles

### High-fiber diet

Increasing dietary fiber intake is the most validated method to elevate colonic SCFA production. Large RCTs of high-fiber diets report modest but consistent effects on SCFA producer abundance and inflammatory markers. Specific prebiotic fibers (inulin, fructo-oligosaccharides, galacto-oligosaccharides) selectively feed Bifidobacterium and to a lesser extent Firmicutes SCFA producers. #gap/dose-response-unclear — optimal fiber type, dose, and duration for meaningful inflammaging reduction in elderly subjects has not been established in RCTs.

### Tributyrin and butyrate supplements

Tributyrin (glycerol tributyrate) is a butyrate prodrug used clinically in some metabolic and short-bowel conditions; it resists upper-GI absorption and releases butyrate in the colon via lipase activity. Sodium butyrate supplements are available but have poor pharmacokinetics (rapidly absorbed proximally, limited colonic delivery) and carry an odor burden affecting compliance. Neither has an established dosing regimen for aging or inflammaging applications. #gap/long-term-unknown

### Beta-hydroxybutyrate (ketone) supplements

Nutritional ketosis elevates circulating beta-hydroxybutyrate (BHB), which is a GPR109A ligand. BHB also acts as an endogenous HDAC inhibitor (Shimazu et al. 2013 — not yet cited on this page; #gap/unsourced). Ketogenic diets and BHB supplementation are proposed to partially recapitulate butyrate's effects systemically, though the colonic luminal concentrations achieved differ from direct bacterial production. The specific anti-inflammatory contribution of BHB via GPR109A in aging has not been cleanly separated from other ketogenic effects.

### Metformin cross-link

[[metformin]] is reported to increase relative abundance of SCFA-producing Firmicutes and *Akkermansia muciniphila* in humans. Whether the anti-inflammatory benefits of metformin partially depend on SCFA signaling is hypothesized but not directly tested. See [[metformin]] for citations.

### Caloric restriction cross-link

[[caloric-restriction]] shifts microbiota toward SCFA producers in rodents; whether this is a conserved mechanism in CR-mediated longevity is unknown in humans. #gap/needs-human-replication

## Limitations and gaps

- **No dedicated KEGG pathway entry** exists for SCFA/FFAR signaling; KEGG covers fatty acid metabolism but not the GPR43/GPR41/GPR109A receptor axis as a discrete pathway. Reactome R-HSA-444209 ("Free fatty acid receptors") is the best canonical ID. The previously proposed Reactome ID R-HSA-211897 is incorrect (resolves to Cytochrome P450 by substrate type — do not use).
- **Mouse-dominated mechanistic evidence.** The 2013 Treg trifecta and all three GPCR knockout studies are in mice. Human SCFA-Treg interventional data is lacking. #gap/needs-human-replication
- **Dose uncertainty in humans.** Luminal SCFA concentrations required to activate GPR43/HDAC pathways at the concentrations demonstrated in mice are not reliably achieved by dietary supplementation in most human studies. #gap/dose-response-unclear
- **SCFA molar ratio variation** with diet and microbiome is large; the "60:20:20" approximation may not reflect elderly or dysbiotic colons. The colonic SCFA concentration range cited (80–150 mM) requires primary-source verification. #gap/unsourced
- **Systemic vs. local effects:** Most SCFA is absorbed and metabolized locally; systemic propionate and acetate concentrations are low (micromolar). Systemic SCFA-receptor signaling may be quantitatively minor compared to local colonic effects, but this remains unresolved. #gap/no-mechanism
- **Isolation from other microbiome signals:** SCFA decline with aging co-occurs with secondary bile acid changes, reduced mucin production, increased LPS translocation, and other dysbiosis-linked signals. Isolating SCFA's specific contribution to inflammaging is methodologically difficult.

## Cross-references

Related atomic pages: [[dysbiosis]] · [[akkermansia-muciniphila]] · [[chronic-inflammation]] · [[regulatory-t-cells]] · [[gut-barrier]] · [[ampk]] · [[hdac]] · [[gpr41]] · [[gpr43]] · [[gpr109a]] · [[foxp3]] · [[caloric-restriction]] · [[metformin]] · [[gut-microbiome]] · [[dietary-fiber]]

Related frameworks: [[hallmarks-of-aging]] · [[sens-damage-categories]]

## Footnotes

[^maslowski2009]: doi:10.1038/nature08530 · [[studies/maslowski-2009-gpr43-gut-microbiota]] · in-vivo (mouse) · Gpr43-knockout + germ-free models; SCFA supplementation rescue · model: Gpr43−/− C57BL/6 mice, germ-free mice · exacerbated colitis + arthritis in knockout; GPR43 required for SCFA anti-inflammatory effect · #gap/no-fulltext-access — paper is not_oa in a local paper archive; claims not independently verified against PDF

[^kimura2011]: doi:10.1073/pnas.1016088108 · [[studies/kimura-2011-gpr41-energy]] · in-vivo (mouse) + in-vitro · Gpr41-knockout model; HEK293 expressing GPR41; sympathetic neuron co-culture · model: Gpr41−/− C57BL/6 mice (analyzed at 12–14 wk); n=12/group for heart rate · propionate activates SNS via GPR41 at sympathetic ganglia (Gβγ-PLCβ-MAPK); Gpr41−/− mice have reduced resting heart rate, body temperature, UCP-1, and oxygen consumption; β-hydroxybutyrate antagonizes GPR41; adipose Gpr41 expression not confirmed in this study

[^singh2014]: doi:10.1016/j.immuni.2013.12.007 · [[studies/singh-2014-gpr109a-butyrate-treg]] · in-vivo (mouse) + in-vitro · Gpr109a-knockout + DSS colitis + AOM/DSS tumor model · model: Niacr1−/− (Gpr109a−/−) mice (Swiss Webster background for conventional/GF colitis experiments; C57BL/6 background for Il18−/− and ApcMin/+ crosses); n=4–6 per group · GPR109A activation by butyrate/niacin imparts anti-inflammatory properties to colonic DCs and macrophages, enabling Treg and IL-10-producing T cell differentiation; GPR109A required for butyrate-mediated IL-18 induction in colonic epithelium; Niacr1−/− mice more susceptible to colitis and colorectal carcinogenesis

[^smith2013]: doi:10.1126/science.1241165 · [[studies/smith-2013-scfa-treg-science]] · in-vivo (mouse) + in-vitro · germ-free + SPF mice; SCFAs provided in drinking water (150 mM) · model: germ-free C57BL/6 + SPF C57BL/6; Ffar2−/− and Ffar2+/+ littermates · propionate (primary Ffar2/GPR43 ligand) and SCFA mix restore colonic Tregs in Ffar2-dependent manner; HDAC6/9 downregulation downstream of Ffar2

[^furusawa2013]: doi:10.1038/nature12721 · [[studies/furusawa-2013-butyrate-treg-nature]] · in-vivo (mouse) + in-vitro · Clostridium colonization of germ-free mice; CD4 T cell differentiation assays · model: germ-free C57BL/6; primary mouse CD4+ T cells · butyrate from Clostridiales induces Treg via HDAC3 inhibition at Foxp3 locus; independent of GPR43 in this system · #gap/no-fulltext-access — paper is not_oa in a local paper archive; claims not independently verified against PDF

[^arpaia2013]: doi:10.1038/nature12726 · [[studies/arpaia-2013-scfa-peripheral-treg]] · in-vivo (mouse) + in-vitro · AVNM antibiotic-treated + GF mice; butyrate/propionate/acetate in drinking water; CNS1-deficient (Foxp3ΔCNS1) and Gpr109a-/- mice · model: C57BL/6 male mice (groups of 5 co-housed); primary mouse CD4+ T cells · butyrate (and propionate) promote extrathymic de novo Treg generation via CNS1 Foxp3 enhancer HDAC inhibition and H3K27-Ac increase; GPR-independent (Gpr109a-/- DCs and pertussis toxin both non-blocking); acetate inactive; butyrate promotes colonic Treg generation via local delivery only; propionate promotes peripheral but not colonic Treg accumulation

[^gao2009]: doi:10.2337/db08-1637 · [[studies/gao-2009-butyrate-insulin-diabetes]] · in-vivo (mouse) · diet-induced obese C57BL/6 mice; 5% dietary butyrate · model: obese C57BL/6 mice (high-fat diet) · butyrate improved insulin sensitivity and energy expenditure via AMPK activation and mitochondrial biogenesis (PGC-1alpha); #gap/needs-human-replication — dose (5% dietary) is substantially above achievable human dietary exposure

[^claesson2012]: doi:10.1038/nature11319 · [[studies/claesson-2012-gut-microbiota-elderly]] · observational · n=178 elderly (age 64–102) + 13 younger controls; Irish cohort · model: humans (community-dwelling + long-term care elderly) · microbiome composition correlates with diet, residence, frailty; SCFA-producing Firmicutes depleted in long-term care vs community-dwelling; local PDF available

[^donohoe2011]: doi:10.1016/j.cmet.2011.02.018 · [[studies/donohoe-2011-butyrate-colonocyte-energy]] · in-vivo (mouse) + ex-vivo · germ-free vs. conventionally-raised (CONV-R) colonocytes; butyrate rescue ex vivo; Butyrivibrio fibrisolvens colonization · model: germ-free C57BL/6 vs. CONV-R C57BL/6 (8–14 wk male); n=4–6 per condition · butyrate is the primary colonocyte energy source via beta-oxidation (not HDAC inhibition — etomoxir blocks rescue); GF colonocytes have 70% drop in mitochondrial NADH/NAD+, reduced oxidative phosphorylation, elevated AMPK/p27, and increased autophagy; butyrate ex vivo rescues oxidative phosphorylation from ~30% to ~70% of CONV-R levels; the commonly cited "60–70% of colonocyte energy from butyrate" derives from Roediger 1980, not this paper
