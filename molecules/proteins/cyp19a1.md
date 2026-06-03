---
type: protein
aliases: [aromatase, estrogen synthase, CYP19, P450arom, ARO1, CYAR]
uniprot: P11511
ncbi-gene: 1588
hgnc: 2594
ensembl: ENSG00000137869
genage-id: null
mouse-ortholog: Cyp19a1
pathways: ["[[steroidogenesis]]", "[[sex-hormone-signaling]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
sens-categories: []
known-interactors: ["[[esr1]]", "[[esr2]]", "[[cyp17a1]]", "[[hsd17b1]]"]
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: partial
caused-by: ["[[granulosa-cells]]", "[[adipose-tissue]]", "[[fsh-signaling]]"]
causes: ["[[estradiol]]", "[[estrone]]", "[[altered-intercellular-communication]]"]
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Primary-source claims verified: Rochira & Carani 2009 (PMID 19707181, abstract + Crossref metadata — ~25 µg/day E2 dose and phenotypes confirmed); Chen 2015 (doi:10.1016/j.mce.2014.09.016, Crossref + PMID 25301327 abstract confirmed); Pagani 2014 SOFT trial (full PDF read — n=4,690 confirmed; p-value corrected to P<0.001; TEXT+SOFT combined-analysis framing added); Yu 2024 (doi:10.1016/j.ebiom.2024.104997, full PDF read — n=4,951 GWAS + 205,427 UK Biobank replication; rs2414098-T direction confirmed); Simpson 2003 (Crossref metadata confirmed, full text not accessible — title/scope consistent); Perez 2006 (PMID 16986348, abstract only — annual BMD loss rate not stated in abstract; '~2–3%/year' range consistent with ATAC bone substudy Eastell 2006 ~2%/year; Gennari 2011 book chapter not accessible); GenAge CYP19A1 absence confirmed live (no entry). Canonical-DB IDs (UniProt P11511, NCBI Gene 1588, HGNC 2594, Ensembl ENSG00000137869) not independently re-verified against live databases — seeder pulled from live APIs on 2026-06-03; recommend cross-check on next lint pass. Supersession check performed 2026-06-03: no meta-analysis or RCT found that revises the core aromatase-biology claims or the bone loss framing; AI bone-loss literature since 2021 focuses on management (bisphosphonates/denosumab) rather than revising the rate estimate."
literature-checked-through: 2026-06-03
---

# CYP19A1 (Aromatase)

The cytochrome P450 enzyme catalyzing the final, rate-limiting step of estrogen biosynthesis — the conversion of C19 androgens (testosterone, androstenedione) into C18 estrogens (estradiol, estrone). CYP19A1 is the linchpin of estrogen biology across the lifespan. Its aging significance is grounded in a fundamental anatomical shift: premenopausally the [[ovary]] is the dominant aromatase site; postmenopausally ovarian aromatase is lost and **peripheral aromatization in [[adipose-tissue]]**, bone, and brain becomes the primary estrogen source — with profound consequences for cancer risk, skeletal health, and neurological function.

## Identity

- **UniProt:** P11511 (CP19A_HUMAN)
- **NCBI Gene:** 1588
- **HGNC symbol:** CYP19A1
- **HGNC ID:** 2594
- **Ensembl:** ENSG00000137869
- **GenAge:** not listed (no HAGR entry) #gap/needs-canonical-id
- **Mouse ortholog:** Cyp19a1 (one-to-one ortholog; near-identical enzyme function)
- **Length:** 503 amino acids
- **Molecular mass:** 57,883 Da
- **Chromosomal location:** 15q21.2

## Enzymatic function

Aromatase is a membrane-bound cytochrome P450 residing in the **endoplasmic reticulum** and microsomal fraction. It catalyzes three successive monooxygenation reactions on the A-ring of C19 androgens — all requiring molecular oxygen and NADPH via its obligate electron donor cytochrome P450 reductase [^simpson2003]:

1. C19-hydroxylation of testosterone → 19-hydroxytestosterone
2. Further oxidation → 19-oxotestosterone (19-aldotestosterone)
3. Oxidative aromatization → estradiol (from testosterone) or estrone (from androstenedione)

The net reaction converts one androgen molecule into one estrogen molecule with loss of the 19-carbon methyl group. The aromatization step is the committed, irreversible, and rate-limiting reaction in estrogen biosynthesis.

**Substrates and products:**

| Substrate (androgen) | Product (estrogen) | Predominant tissue |
|---|---|---|
| Testosterone | 17β-Estradiol (E2) | Ovary (premenopause); testes, brain |
| Androstenedione | Estrone (E1) | Adipose tissue (postmenopause), bone |
| DHEA | Estrone (indirect, via androstenedione) | Peripheral tissues |

## Tissue-specific expression and promoter architecture

CYP19A1 is expressed in multiple tissues via tissue-specific promoters driving the same open reading frame — a feature unique among cytochrome P450 genes. This promoter switching allows the same enzyme to respond to completely different regulatory signals depending on tissue context [^simpson2003]:

- **Ovarian [[granulosa-cells]]** — promoter II; FSH-driven, cAMP/PKA-dependent. Dominant source of estradiol premenopausally.
- **Adipose tissue** — promoter I.4 (and promoter I.3); constitutively active, upregulated by IL-6, TNFα, prostaglandin E2, and glucocorticoids. Becomes the dominant estrogen source postmenopausally [^purohit2002].
- **[[Bone]]** and [[osteoblasts]] — promoter I.4; produces local estradiol critical for bone remodeling.
- **[[Brain]]** — promoter I.f; expressed in limbic, hypothalamic, and cortical neurons; rapidly regulated by neural activity (acute aromatase regulation within minutes via calcium-dependent phosphorylation).
- **Placenta** — promoter I.1; high expression during pregnancy.
- **Breast adipose stroma** — same cytokine-driven promoters as systemic adipose; clinically relevant for in-situ estrogen synthesis in breast tissue.

## The aging shift in estrogen source

This tissue-specific regulation underlies the most important aging dimension of CYP19A1.

**Premenopausal:** [[granulosa-cells]] in ovarian follicles are the dominant aromatase site. FSH from the pituitary drives follicular aromatase expression, producing the high circulating estradiol (E2) characteristic of reproductive-age women.

**Perimenopausal transition:** Follicular exhaustion reduces ovarian aromatase activity. FSH rises (as the hypothalamic-pituitary axis attempts compensation). Estradiol production becomes erratic, then collapses.

**Postmenopausal:** With ovarian aromatase gone, **adipose tissue becomes the primary estrogen source.** Adipocyte-derived IL-6, TNFα, and macrophage-derived prostaglandins sustain aromatase expression in the stromal-vascular fraction of fat depots, producing estrone as the predominant circulating estrogen [^purohit2002][^simpson2003]. Consequences:

1. **Postmenopausal estrogen levels track adiposity** — obese postmenopausal women have significantly higher circulating estrone/estradiol than lean counterparts; this is a direct enzymatic consequence of greater adipose aromatase substrate mass.
2. **Obesity raises hormone-sensitive cancer risk** — higher adipose aromatase output increases lifetime exposure to estrogens, mechanistically linking adiposity to postmenopausal [[breast cancer]] and [[endometrial cancer]] risk [^honma2015].
3. **Adipose-derived inflammatory cytokines amplify aromatase** — creating a positive feed-forward loop: fat → inflammation → aromatase → estrogen → potentially cancer-promoting.
4. **Aromatase becomes a drug target** — the adipose aromatase machinery is the pharmacological target of [[menopause]] adjuvant therapy and, critically, of aromatase inhibitors in breast cancer treatment.

## Aromatase inhibitors: a pharmacological model of estrogen deprivation

Aromatase inhibitors (AIs) — anastrozole, letrozole (non-steroidal, competitive), exemestane (steroidal, irreversible) — are standard-of-care adjuvant therapy for hormone-receptor-positive breast cancer. They suppress postmenopausal estrogen synthesis by >95%.

**Efficacy:** The combined TEXT+SOFT analysis (phase 3, n=4,690) demonstrated that exemestane plus ovarian suppression significantly improved disease-free survival (5-yr DFS 91.1% vs 87.3%; HR 0.72, 95% CI 0.60–0.85; P<0.001) versus tamoxifen plus ovarian suppression in premenopausal women with hormone-receptor-positive breast cancer [^pagani2014]. AIs produce superior outcomes compared to tamoxifen in postmenopausal breast cancer across multiple large trials.

**Aging-relevant adverse effects of AIs.** Because AIs produce near-total estrogen deprivation, they serve as an inadvertent *natural experiment* in what profound estrogen loss does to aging tissues:

- **Accelerated bone loss and [[osteoporosis]]** — the most clinically significant adverse effect. AIs cause bone mineral density loss at a rate of ~2–3% per year at the lumbar spine [^perez2006][^gennari2011]. Fracture risk increases substantially. This is mechanistically informative: it proves that aromatase-generated estrogen (not just testosterone) is a major bone-protective signal in women.
- **Arthralgia and musculoskeletal pain** — AI-associated arthralgia affects 25–50% of patients, often causing discontinuation. Mechanism uncertain (possibly estrogen withdrawal effects on synovial fluid and cartilage).
- **Cardiovascular effects** — complex; estrogen's cardioprotective roles (lipid profile modulation, endothelial function) are reduced. AI use is under scrutiny for long-term cardiovascular risk.

These AI-induced phenotypes mirror the expected consequences of [[menopause]] but are more severe and rapid, making AI recipients an informative cohort for studying estrogen's systemic maintenance functions in aging.

## Genetic natural experiments: aromatase deficiency and excess

### Aromatase deficiency (CYP19A1 loss-of-function)

Loss-of-function mutations in CYP19A1 produce a striking phenotype that reveals estrogen's role in both male and female physiology [^rochira2009]:

**In affected males:**
- Tall stature with continued long-bone growth past the usual epiphyseal closure age (epiphyses fail to fuse without estrogen signaling — proving estradiol, not testosterone, is the primary driver of male epiphyseal fusion)
- Severe osteoporosis with very low bone mineral density despite normal or elevated testosterone
- Insulin resistance, dyslipidemia, and hepatic steatosis — demonstrating estrogen's role in male metabolic homeostasis
- Elevated testosterone and LH; undetectable estradiol

Estrogen replacement (transdermal E2, ~25 µg/day) corrects epiphyseal closure, improves bone density, lipid profile, and liver steatosis — though insulin resistance may persist [^chen2015]. This confirms that CYP19A1's product (estradiol) rather than any aromatase-independent function mediates these phenotypes.

The aromatase-deficient male phenotype directly parallels the man with a loss-of-function mutation in the estrogen receptor alpha ([[esr1]]) — both present with tall stature, unfused epiphyses, and osteoporosis, demonstrating the complete estrogen signaling axis (aromatase → E2 → ESR1) is required for male skeletal health.

**In affected females:**
- Virilization (ambiguous genitalia), primary amenorrhea, polycystic ovary phenotype
- Absence of pubertal breast development
- Tall stature with unfused epiphyses (same epiphyseal mechanism as males)

### Aromatase excess syndrome (CYP19A1 gain-of-function)

Heterozygous activating rearrangements upstream of CYP19A1 elevate aromatase expression. Affected males develop gynecomastia prepubertally; affected females show isosexual precocity. Confirms that even modest increases in aromatase output alter sex hormone balance.

| Genotype | Key phenotype | Aging lesson |
|---|---|---|
| CYP19A1 loss-of-function | Tall stature, unfused epiphyses, osteoporosis, insulin resistance | Estrogen, not testosterone alone, is required for male bone and metabolic health |
| CYP19A1 gain-of-function | Gynecomastia (males), precocious puberty (females) | Aromatase is a quantitative rheostat; expression level determines estrogen milieu |
| AI treatment (pharmacological inhibition) | Accelerated bone loss, arthralgia, cardiovascular changes | Systemic estrogen deprivation recapitulates accelerated tissue aging |

## Brain aromatase and neuroprotection

CYP19A1 is expressed in neurons and astrocytes throughout the central nervous system, including hypothalamus, limbic system, frontal cortex, and cerebellum. Locally synthesized estradiol (neuroestrogen) acts in an autocrine/paracrine manner independent of circulating levels — making brain aromatase mechanistically distinct from peripheral sources.

Neuroestrogen has documented roles in:
- Rapid modulation of synaptic plasticity and neurotransmitter release (membrane-initiated, non-genomic signaling)
- Neuroprotection following ischemic and traumatic injury — upregulation of aromatase in damaged brain areas has been observed in rodents and birds [^mirzatoni2010], with estradiol synthesis appearing to be a local injury-response
- Regulation of mood, cognition, and sexual behavior [^seredynski2013]

The postmenopausal decline in systemic estrogen is not fully compensated by brain aromatase — local neuroestrogen synthesis is insufficient to maintain the levels available to premenopausal brains. This has been proposed (though not yet proven in prospective trials) as a contributor to the increased risk of Alzheimer's disease and cognitive decline in postmenopausal women. #gap/needs-human-replication — direct causal evidence in humans for brain aromatase as a neuroprotective factor requires validated imaging of local brain aromatase activity (PET tracers exist but are not widely deployed).

## Pathway membership

- [[steroidogenesis]] — CYP19A1 acts downstream of [[cyp17a1]] (androgen synthesis) and upstream of estrogen receptor signaling
- [[sex-hormone-signaling]] — estradiol and estrone produced by CYP19A1 are the primary ligands for [[esr1]] and [[esr2]]
- Interacts with [[hsd17b1]] (17β-hydroxysteroid dehydrogenase 1), which converts estrone → estradiol (reduction), complementing aromatase in determining the E1/E2 ratio

## Pharmacological druggability

**Aging-context tier 1 rationale.** Multiple FDA-approved aromatase inhibitors exist: anastrozole (Arimidex), letrozole (Femara), and exemestane (Aromasin). All three have established oncology indications (breast cancer) and are also used off-label in male hypogonadism and gynecomastia. Aging relevance arises from (a) AIs as a pharmacological model of estrogen deprivation-driven tissue aging, and (b) the pharmacological rescue of aromatase-deficiency or postmenopausal hypo-estrogenism via estrogen replacement therapy acting on the same pathway.

A pharmacological category page for aromatase inhibitors does not yet exist in `interventions/pharmacological/`; cross-link to be added when seeded.

## Evidence-quality extrapolation

| Dimension | Status | Notes |
|---|---|---|
| Enzyme function conserved in humans? | yes | CYP19A1 is the sole aromatase gene in mammals; mouse Cyp19a1 is functionally identical |
| Postmenopausal adipose-source shift conserved? | yes | Well-documented in multiple human cohorts and tissue-specific aromatase assays |
| Genetic evidence from human loss-of-function? | yes | Multiple CYP19A1 LOF cases documented in males and females; clean causal phenotypes |
| AI trial evidence (bone loss, cancer outcomes)? | yes | Large phase 3 RCTs (SOFT, ATAC, BIG 1-98) with thousands of patients |
| Brain aromatase neuroprotection confirmed in humans? | partial | Observational associations; mechanistic proof requires prospective neuroimaging trials |

## Limitations and gaps

- `mr-causal-evidence: partial` — GWAS hits exist near CYP19A1 for circulating estrogen levels (rs2414098-T associated with lower oestrone and reduced endometrial cancer risk in postmenopausal women; n=4,951 GWAS + n=205,427 UK Biobank replication [^yu2024]), but a full Mendelian randomization study using CYP19A1 variants as instruments for aging outcomes specifically has not been published. #gap/needs-replication
- Brain aromatase neuroprotection: mechanistically compelling, but no prospective RCT testing aromatase-activity modulation and cognitive outcomes in postmenopausal women exists. #gap/needs-human-replication
- `genage-id: null` — CYP19A1 has no HAGR/GenAge entry despite clear aging relevance; the database coverage gap reflects its classification as an endocrine enzyme rather than a canonical aging gene. #gap/needs-canonical-id
- Postmenopausal men: aromatase-generated estradiol from peripheral tissue is important for male aging (bone, cognition), but the contribution relative to other estrogen sources is not well quantified in population studies. #gap/dose-response-unclear
- No aromatase inhibitor intervention page exists in `interventions/pharmacological/` — seeding that page would allow Dataview queries connecting CYP19A1 → AIs → bone/cancer outcomes.

## Footnotes

[^simpson2003]: doi:10.1016/s0960-0760(03)00360-1 · Simpson ER et al. · *J Steroid Biochem Mol Biol* 2003 · n/a (review) · ~730 citations · review of extragonadal estrogen sources; established the tissue-specific promoter framework for aromatase and the postmenopausal adipose source shift

[^purohit2002]: doi:10.1016/s0039-128x(02)00046-6 · Purohit A et al. · *Steroids* 2002 · n/a (review/mechanistic) · characterization of cytokine-driven aromatase regulation in postmenopausal adipose — IL-6, TNFα, PGE2 as the key upregulators

[^rochira2009]: doi:10.1038/nrendo.2009.176 · Rochira V & Carani C · *Nat Rev Endocrinol* 2009 · n=multiple cases (review) · observational · 105 citations · comprehensive clinical review of CYP19A1-deficient males; tall stature, unfused epiphyses, osteoporosis, insulin resistance; estradiol replacement corrects most phenotypes

[^chen2015]: doi:10.1016/j.mce.2014.09.016 · Chen Z et al. · *Mol Cell Endocrinol* 2015 · n=1 (case report) · novel compound heterozygous CYP19A1 mutations in Chinese adult male; estrogen replacement improved bone, lipid, liver steatosis; insulin resistance persistent

[^gennari2011]: doi:10.1016/b978-0-12-387025-4.00006-6 · Gennari L, Merlotti D, Nuti R · *Adv Clin Chem* 2011 · n/a (review) · comprehensive review of aromatase activity and bone loss; individual variation in aromatase activity affects fracture risk

[^perez2006]: PMID:16986348 · Perez EA · *Oncology* 2006 · n/a (review) · AI-induced bone mineral density loss ~2–3%/year at lumbar spine; recommends baseline DXA + bisphosphonate for osteoporosis/osteopenia; DOI not available via Crossref

[^pagani2014]: doi:10.1056/NEJMoa1404037 · Pagani O et al. (TEXT+SOFT combined analysis) · *N Engl J Med* 2014 · n=4,690 intention-to-treat (combined TEXT and SOFT trials) · P<0.001 (DFS; HR 0.72, 95% CI 0.60–0.85) · exemestane + ovarian suppression vs tamoxifen + ovarian suppression in premenopausal HR+ breast cancer; 5-yr DFS 91.1% vs 87.3%; OS not significantly different (HR 1.14, p=0.37)

[^honma2015]: doi:10.1111/pin.12326 · Honma N et al. · *Pathol Int* 2015 · n/a (review) · review of postmenopausal peripheral estrogen metabolism via aromatase and its role in breast, colorectal, and lung cancer risk

[^mirzatoni2010]: doi:10.1089/neu.2010.1330 · Mirzatoni A et al. · *J Neurotrauma* 2010 · in-vivo (bird, cerebellar lesion) · model: injury-induced aromatase upregulation in cerebellum; supports neuroprotective role of local steroid synthesis

[^seredynski2013]: doi:10.1523/JNEUROSCI.2557-12.2013 · Seredynski AL et al. · *J Neurosci* 2013 · in-vivo (quail) · rapid modulation of sexual motivation by brain-derived estradiol via membrane-initiated signaling; neuroestrogen kinetics

[^yu2024]: doi:10.1016/j.ebiom.2024.104997 · Yu C et al. · *EBioMedicine* 2024 · n=4,951 (GWAS, SHOW/ASPREE substudy, European-ancestry women ≥70 yr); UK Biobank replication n=205,427 · observational · rs2414098-T (CYP19A1, 15q21.2) associated with lower oestrone concentrations (β=−0.22, 95% CI −0.26 to −0.18, p=8.41×10⁻²⁶) and reduced endometrial cancer risk (aOR 0.87, 95% CI 0.82–0.93, p=6.3×10⁻⁵ in all UK Biobank women; aOR 0.89, 95% CI 0.82–0.96, p=0.003 in women ≥58 yr); genetic evidence for aromatase as a quantitative regulator of circulating postmenopausal estrogen
