---
type: protein
aliases: [ER-beta, ERβ, estrogen receptor 2, NR3A2, ESTRB]
uniprot: Q92731
ncbi-gene: 2100
hgnc: 3468
ensembl: ENSG00000140009
mouse-ortholog: Esr2
genage-id: null   # ESR2 not listed in GenAge human aging gene set as of 2026-06-03
pathways: ["[[estrogen-signaling-pathway]]", "[[nuclear-receptor-signaling]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
sens-categories: []
known-interactors: ["[[esr1]]", "[[estradiol]]", "[[sp1]]"]
druggability-tier: 2
gtex-aging-correlation: null   # not yet populated; #gap/needs-tissue-expression-data
mr-causal-evidence: not-tested
caused-by: ["[[estradiol]]", "[[menopause]]"]
causes: ["[[granulosa-cells]]"]
literature-checked-through: null
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Drummond & Fuller 2010 and Edvardsson 2011 verified against full PDFs. Emmen 2005 and Muka 2016 verified against PMID abstracts only (both closed-access, not in PMC OA). Canonical-DB IDs (UniProt Q92731, NCBI Gene 2100, HGNC:3468, Ensembl ENSG00000140009) confirmed against live UniProt flat file and NCBI efetch. Supersession check run 2026-06-03; no ERβ-specific meta-analyses or large RCTs superseding the cited sources identified."
---

# ESR2 (estrogen receptor beta, ERβ)

The second estrogen receptor, encoded by *ESR2* on chromosome 14q23. ERβ is a member of the nuclear receptor superfamily (subfamily NR3A) and shares ~95% sequence identity with [[esr1]] (ERα) in the DNA-binding domain, but only ~55% identity in the ligand-binding domain — a difference that enables receptor-subtype-selective pharmacology. In contrast to ERα's dominant proliferative roles in uterus and breast, ERβ is expressed most highly in [[granulosa-cells]], prostate, colon, lung, central nervous system, vascular endothelium, and immune cells, where it often exerts **anti-proliferative and pro-differentiation** effects. Decline of ERβ expression and estrogenic signalling with age — accelerated dramatically at [[menopause]] — is a contributor to age-related tissue dysfunction across multiple organ systems.

## Identity

- **UniProt:** Q92731 (ESR2_HUMAN)
- **NCBI Gene:** 2100
- **HGNC:** 3468 (symbol: ESR2)
- **Ensembl:** ENSG00000140009
- **Chromosomal location:** 14q23.2–q23.3; minus strand; ~254 kb span (GRCh38)
- **Isoforms:** Multiple splice variants; canonical isoform is 530 amino acids (ESR2-1)
- **Mouse ortholog:** Esr2 (MGI:104740; ENSMUSG00000021055; one-to-one ortholog, high sequence conservation)
- **GenAge:** not listed in human aging gene set #gap/needs-canonical-id

## Key functional domains

- **N-terminal domain (A/B):** Low sequence conservation with ERα; contributes to ligand-independent (AF-1) transactivation
- **DNA-binding domain (DBD; C domain; residues 149–214):** Two zinc-finger motifs (NR C4-type); binds estrogen response elements (EREs) with near-identical affinity to ERα; ~95% identity with ERα DBD [^drummond2010]
- **Hinge region (D domain):** Nuclear localization sequences; coregulator interaction surface
- **Ligand-binding domain (LBD; E domain; residues 264–498):** ~55% identity with ERα LBD [^drummond2010]; the structural divergence here enables subtype-selective agonists/antagonists; Helix-12 repositioning drives AF-2 coactivator recruitment upon ligand binding [^koehler2005]
- **C-terminal domain (F domain):** Modulates AF-2 activity; differs between ERα and ERβ, contributing to distinct coregulator interactions

## Function

ERβ is a ligand-activated transcription factor. [[estradiol]] binding induces receptor dimerization and nuclear translocation, followed by direct ERE binding or indirect tethering to AP-1 / Sp1 sites. Three broad transactivation modes:

1. **Classical ERE-mediated:** Homodimer (ERβ/ERβ) or heterodimer (ERβ/ERα) binds palindromic EREs and recruits coactivator complexes (SRC-1, CBP/p300, TRAP/DRIP) → target gene transcription
2. **Tethered / non-ERE:** ERβ is recruited to AP-1 (Fos/Jun) or Sp1 sites without direct DNA contact → typically anti-proliferative gene expression programs
3. **Rapid, non-genomic:** Membrane-associated pool (minority fraction) activates PI3K/Akt and MAPK within minutes; physiologically important in endothelium (nitric oxide induction) — eNOS-dependent NO production via ERβ is documented across multiple vascular studies [^muka2016]

### ERα:ERβ ratio and the anti-proliferative axis

Where both receptors are co-expressed, the ERα:ERβ ratio shapes the net transcriptional output:

- **ERβ homodimers** predominantly activate anti-proliferative, pro-apoptotic, and anti-inflammatory gene programs
- **ERα/ERβ heterodimers** blunt ERα-driven proliferative transcription — ERβ acts as a dominant moderator of ERα signalling [^koehler2005]
- In colon and prostate, ERα:ERβ ratios shift toward ERα dominance during carcinogenesis or aging, removing a brake on tissue proliferation (see Tissue-specific roles below)

Heterodimerization occurs with roughly equal affinity to ERα/ERα homodimerization; all three dimer species exist in cells expressing both receptors. #gap/needs-replication — quantitative dimer-abundance estimates in primary human tissues are sparse.

## Role in aging

### Reproductive aging and folliculogenesis

ERβ is **essential for normal follicle maturation** in the ovary. Esr2-null (βERKO) mice are subfertile due to partial arrest of folliculogenesis: follicles initiate growth normally but stall at the early-to-large-antral transition, and ovulation rates are markedly reduced [^drummond2010].

Mechanistically, ERβ in [[granulosa-cells]] regulates granulosa-cell proliferation, FSH receptor expression, and aromatase (CYP19A1) activity [^emmen2005]. Importantly, luteinization itself occurs normally in βERKO follicles (normal progesterone secretion after hCG stimulus), indicating ERβ is required for antral maturation and ovulation but not for the luteinizing transition per se [^emmen2005]:

- **In vitro follicle culture:** βERKO follicles showed significant failure to progress from early antral to large antral stage, decreased estradiol production, and reduced ovulation [^emmen2005]
- ERβ therefore mediates part of estrogen's autocrine/paracrine amplification loop within the growing follicle

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — granulosa-cell ERβ expression declines with reproductive aging; human subfertility models not as clean as mouse KO |
| Replicated in humans? | no — no human genetic ERβ-loss model; observational data only |

**[[menopause]] context:** Follicle depletion during the menopausal transition reduces circulating [[estradiol]], which in turn diminishes ERβ-mediated signalling across all high-expressing tissues simultaneously — a systemic signalling collapse that likely contributes to the multi-system phenotypes of aging in women.

### Colon / gastrointestinal

ERβ expression is high in normal colonic epithelium and is **progressively lost** in the adenoma → carcinoma sequence. Lines of evidence for a protective role:

- ERβ activation in colorectal cancer cell lines induces **anti-inflammatory and anti-tumorigenic gene networks**, including upregulation of apoptotic effectors and downregulation of NF-κB targets and matrix-remodelling enzymes [^edvardsson2011]
- Epidemiological: hormone therapy (principally estrogen-containing) reduces colorectal cancer risk specifically in ERβ-positive tumors but not ERβ-negative tumors, consistent with receptor-mediated protection [^rudolph2013]
- The Williams/Gustafsson group has proposed ERβ-selective agonists as a chemoprevention strategy for colorectal cancer [^williams2016]

The ERα:ERβ ratio shifts toward ERα dominance in adenomas and carcinomas; whether this is causal or secondary to epithelial dedifferentiation is unresolved. #gap/contradictory-evidence — mechanistic RCT data in humans are absent; most evidence is epidemiological or in-vitro.

### Prostate

ERβ expression is present in normal prostate epithelium and stroma. In aging rat prostate, focal loss of ERβ correlates with the emergence of prostatic intraepithelial neoplasia (PIN) and atrophic lesions, despite stable systemic estradiol concentrations — implicating receptor-level silencing (possibly epigenetic) rather than ligand deficit [^morais-santos2015]. Similar loss of ERβ immunoreactivity has been reported in human high-grade PIN and prostate cancer specimens [^hetzl2012].

The mechanism is hypothesized to mirror the colon: ERβ → anti-proliferative gene program → restraint of androgen-driven or ERα-driven epithelial proliferation. As this tonic brake is lost with age, the proliferative/inflammatory milieu expands.

#gap/needs-human-replication — Causal direction (receptor loss drives carcinogenesis vs. carcinogenesis silences receptor) is not established in humans.

### CNS and neuroprotection

ERβ is broadly expressed in hippocampus, cortex, cerebellum, and hypothalamus. Proposed neuroprotective functions include:

- Regulation of mitochondrial biogenesis and glucose oxidation — relevant because menopause-associated estrogen decline compromises brain bioenergetics, potentially increasing vulnerability to late-onset Alzheimer's disease [^rettberg2014]
- Anti-apoptotic effects via Bcl-2 family regulation; ERβ-mediated gene programs overlap with neurosteroid protective cascades
- Mood and affect regulation: ERβ loss correlates with increased anxiety-like behaviour in rodent models (not yet mechanistically resolved in humans)

The relative contribution of ERα vs ERβ to human brain aging is actively debated. In postmenopausal women, *ESR2* SNPs have been associated with Alzheimer's disease risk in some cohort studies (PMID 24326520), though effect sizes are modest and replication is inconsistent. #gap/contradictory-evidence

### Vascular

A 2016 systematic review of 88 studies (71 animal, 15 human experimental, 2 population-based) found that ERβ signalling has **vasodilator and antiangiogenic properties**, and a possible protective effect against left ventricular hypertrophy and ischaemia/reperfusion injury [^muka2016]. Specific mechanisms documented in the included studies: regulation of nitric oxide production, altered membrane ionic permeability in vascular smooth muscle cells, inhibition of vascular smooth muscle cell migration and proliferation, and regulation of adrenergic control of the arteries. Five studies in the review noted that vascular effects may be vessel-specific and may differ by age and menopause status [^muka2016].

#gap/contradictory-evidence — Translational human evidence for ERβ-specific cardiovascular effects remains limited; most human HRT trials do not separate receptor-subtype contributions; the review did not establish net cardioprotection in humans.

## Pharmacology and selective agonists

ERβ-selective research tools exist but **no ERβ-selective drug is FDA-approved or has completed Phase 3 for any indication**:

- **Diarylpropionitrile (DPN):** Most widely used rodent research tool; ~70-fold selectivity for ERβ over ERα in transactivation assays; orally bioavailable in mice; used to attribute ERβ-specific effects in many in vivo studies. Not clinically developed.
- **ERB-041:** Wyeth compound; potent ERβ selectivity; demonstrated anti-inflammatory efficacy in rat adjuvant arthritis and inflammatory bowel disease models; a Phase 2 trial for endometriosis was initiated but results were inconclusive; development discontinued [^harris2006]
- **WAY-202196 / WAY-200070:** Wyeth ERβ-selective series; preclinical anti-inflammatory activity
- **Liquiritigenin / phytoestrogens (genistein at low doses):** Partial ERβ preference at low nanomolar concentrations; confounded by ERα activity at higher doses and GPER activity; not suitable as clean ERβ probes in vivo

**Druggability-tier-2 rationale:** High-quality selective probes exist (DPN, ERB-041), and ERβ is structurally well-characterised for structure-based drug design. However, no aging-validated ERβ agonist has reached clinical approval, and the ERB-041 endometriosis program did not advance. Clinical-stage pharmacology exists in women's health contexts but not for aging indications. Strict aging-context tier-1 (approved drug for aging indication) does not apply.

Note that ERβ lacks the proliferative/mammotropic and uterotrophic liabilities of ERα agonism — uterine weight was not increased by selective ERβ agonists in preclinical models — which in principle gives a wider therapeutic window for systemic use.

## Pathway membership

- [[estrogen-signaling-pathway]] — canonical ligand-activation → ERE-mediated transcription
- [[nuclear-receptor-signaling]] — shares coregulator machinery with other NRs

## Key interactors

- [[esr1]] (ERα) — heterodimerization partner; co-expression produces mixed dimer populations; ERβ modulates net ERα transcriptional output
- [[estradiol]] — primary endogenous ligand (also estriol, estrone, phytoestrogens at lower affinity)
- [[gper]] (GPR30) — the membrane-bound estrogen receptor that mediates rapid non-genomic estrogenic responses; distinct from ERβ but co-expressed in many of the same tissues (CNS, endothelium, colon); functional cross-talk exists

## Limitations and gaps

- `#gap/needs-tissue-expression-data` — GTEx aging-correlation data not yet populated for ERβ; tissue-by-age expression summary needed (`sops/finding-tissue-expression.md`)
- `#gap/needs-human-replication` — Most mechanistic data come from Esr2-KO mouse models or in-vitro cell lines; human genetic studies are limited to SNP associations with modest effect sizes
- `#gap/contradictory-evidence` — Vascular and neuroprotective roles are plausible from animal data but contested in human evidence; HRT trials confound ERα and ERβ contributions
- `#gap/no-mechanism` — ERβ expression loss in aging prostate and colon is documented, but whether this is causal for carcinogenesis or secondary to epigenetic remodelling is unresolved
- `#gap/long-term-unknown` — No long-term safety/efficacy data for ERβ-selective agonists in aging humans; ERB-041 Phase 2 data in endometriosis were not published in detail
- Interaction with [[gper]] in aging-specific contexts not yet systematically reviewed on this wiki; [[gper]] stub page needed

## Footnotes

[^koehler2005]: doi:10.1210/er.2004-0027 · Koehler KF et al. · *Endocrine Reviews* 2005 · n=N/A · review · model: in vitro + mouse · high-impact review (354 citations) of ERβ discovery, structural biology, and pharmacological selectivity; source for LBD identity estimates and dimer biology

[^drummond2010]: doi:10.1677/JOE-09-0379 · Drummond AE & Fuller PJ · *J Endocrinol* 2010;205:15–23 · n=N/A · review · model: Esr2-KO mice + in-vitro granulosa · 112 citations; review of ERβ signalling in the ovary; source for DBD ~95% / LBD ~55% identity estimates and βERKO subfertility phenotype (fewer pups/litters, fewer oocytes on superovulation, granulosa-cell ERβ essential for follicular antral maturation and ovulation)

[^emmen2005]: doi:10.1210/en.2004-1108 · Emmen JMA et al. (Korach lab) · *Endocrinology* 2005;146:2817–26 · n=N/A follicles per genotype reported · in-vitro (follicle culture) · model: αERKO and βERKO vs WT mice · 169 citations; definitive in-vitro follicle culture study demonstrating βERKO follicles fail to progress from early antral to large antral stage, decreased Cyp19 (aromatase) and Lhcgr/Ptgs2 expression after hCG, reduced estradiol production, and reduced ovulation; luteinization (progesterone secretion, cdkn1b) occurs normally in βERKO. Paper is closed-access; claims verified against PMID 15731357 abstract only — #gap/no-fulltext-access for complete methods/figure details

[^edvardsson2011]: doi:10.1210/me.2010-0452 · Edvardsson K et al. (Williams/Gustafsson lab) · *Mol Endocrinol* 2011;25:969–979 · n=3 ERα-negative CRC cell lines (SW480, HT29, HCT-116) · in-vitro (lentiviral ERβ reexpression + microarray) · 109 citations; genome-wide transcriptomic + functional characterisation of ERβ-induced anti-inflammatory (IL-6 network downregulation) and anti-tumorigenic (MYC/MYB downregulation, PROX1 coregulator suppression) gene networks in ERβ-reexpressing colon cancer cells; cell-differentiation and apoptosis gene programs overrepresented across all three lines; protective effect on cell viability after cisplatin-induced DNA damage in SW480

[^rudolph2013]: doi:10.1158/0008-5472.CAN-12-4051 · Rudolph A et al. · *Cancer Res* 2013 · n=large epidemiological cohort · observational · model: human · hormone therapy protective effect on colorectal cancer risk varies by tumor ERβ expression status

[^williams2016]: doi:10.1016/j.canlet.2015.12.009 · Williams C et al. · *Cancer Lett* 2016 · n=N/A · review · 171 citations; systematic review of preclinical and epidemiological evidence for ERβ as colorectal cancer chemoprevention target

[^morais-santos2015]: doi:10.1371/journal.pone.0131901 · Morais-Santos M et al. · *PLoS One* 2015 · n=aging rats (3, 12, 18, 24 months) · in-vivo · model: Wistar rat prostate · focal ESR2 loss in aging prostate correlates with PIN and atrophic lesions without change in systemic estradiol

[^hetzl2012]: doi:10.1002/jemt.22049 · Hetzl AC et al. · *Microsc Res Tech* 2012 · n=human prostate specimens · observational · model: human prostate (BPH, PIN, cancer) · weak ERβ immunoreactivity in high-grade PIN and carcinoma vs normal tissue

[^muka2016]: doi:10.1016/j.maturitas.2016.01.009 · Muka T et al. · *Maturitas* 2016;86:28–43 · n=88 studies (71 animal, 15 human experimental, 2 population-based) · systematic review · model: animal + human cardiovascular · ERβ signalling associated with vasodilator and antiangiogenic properties; possible cardioprotection (LVH, ischaemia/reperfusion) via genomic and non-genomic pathways; vessel-specific and age/menopause-dependent effects noted in 5 studies; translational evidence limited

[^rettberg2014]: doi:10.1016/j.yfrne.2013.08.001 · Rettberg JR et al. · *Front Neuroendocrinol* 2014 · n=N/A · review · 497 citations; mechanistic review of estrogen as bioenergetic regulator in brain; menopause-related decline and Alzheimer's risk framing

[^harris2006]: doi:10.1007/2789_2006_021 · Harris HA · *Ernst Schering Found Symp Proc* 2006 · n=N/A · review · preclinical characterisation of ERβ-selective agonists ERB-041, WAY-202196, WAY-200070 and their anti-inflammatory applications
