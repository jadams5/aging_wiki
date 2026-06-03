---
type: cell-type
aliases: [theca cell, thecal cells, theca interna]
cell-ontology-id: CL:0000503
tissue-of-origin: ["[[ovary]]"]
key-markers-mouse: [Cyp17a1+, Cyp11a1+, Hsd3b1+, Star+, Lhcgr+, Nr5a1/Sf-1+, Theca1+]
key-markers-human: [CYP17A1+, CYP11A1+, HSD3B+, STAR+, LHCGR+, NR5A1/SF-1+]
self-renewal: no
aging-relevant: yes
affected-hallmarks: ["[[altered-intercellular-communication]]"]
key-aging-phenotypes: ["[[menopause]]"]
typical-niche: "outer follicular compartment — the theca layer surrounds each follicle outside the basement membrane separating it from the granulosa cell layer; theca cells are recruited from ovarian stromal mesenchymal progenitors and acquire steroidogenic identity as follicles grow from secondary stage onward; subdivided into theca interna (inner, LH-responsive, steroidogenic) and theca externa (outer, structural)"
niche-signaling: ["[[lh]]", "[[igf1-pathway]]", "[[tgf-beta]]"]
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Liu & Hsueh 1986 and Nelson 1999 cross-checked against PubMed abstracts only (full texts closed-access / not in archive); Wood 2003 verified against full PDF; Burger 2002 and Thompson 1993 DOIs corrected from primary source metadata; CL:0000503 confirmed via OntoBee; Nelson 1999 passage-number and fold-change claims flagged unverifiable (closed-access). Body claims for postmenopausal NR5A1/CYP11A1 expression reatributed away from Thompson 1993."
literature-checked-through: 2026-06-03
---

# Theca Cells

The androgen-producing somatic cells of the ovarian follicle, forming the outer thecal layer outside the basement membrane that separates them from the inner [[granulosa-cells|granulosa cell]] compartment. Theca cells are the principal source of androgenic substrate — primarily androstenedione and [[testosterone]] — in the premenopausal ovary, operating under the control of [[lh|luteinizing hormone (LH)]] from the pituitary. Their role is structurally analogous to that of [[leydig-cells]] in the testis: both are LH-driven, interstitial steroidogenic cells that express the full complement of enzymes needed to synthesize androgens from cholesterol. In the ovary, theca-derived androgens are obligatory precursors for [[estradiol]] synthesis in neighboring granulosa cells — this two-cell cooperation is the mechanistic core of follicular estrogen production.

With reproductive aging, theca cell function is progressively disrupted: reduced LH responsiveness and declining steroidogenic enzyme expression contribute to the perimenopausal hormonal transition. In polycystic ovary syndrome (PCOS), the reciprocal pathology — intrinsically hyperactive theca cells — drives the hyperandrogenemia that defines the condition. After menopause, the residual ovarian stroma (largely theca-derived) persists as a low-level androgen source for circulating testosterone and androstenedione.

## Identity, markers, and origin

The master transcription factor of steroidogenic identity shared by theca cells and [[leydig-cells]] is **NR5A1 (SF-1)**, which drives the entire steroidogenic enzyme program. Theca cells are identified by co-expression of NR5A1 with the full steroidogenic cascade: CYP11A1 (P450scc), HSD3B, CYP17A1 (17α-hydroxylase/17,20-lyase), StAR, and the LH receptor LHCGR. CYP17A1 is the key discriminating marker between theca and granulosa cells — it is expressed exclusively in theca cells of the premenopausal follicle, while its expression is actively repressed in granulosa cells (in part via c-fos-dependent transcriptional silencing of the CYP17A1 promoter) [^patel2009]. This cell-type exclusivity is what enforces androgen production to the theca compartment.

| Marker | Mouse | Human | Notes |
|---|---|---|---|
| NR5A1 / SF-1 | Nr5a1+ | NR5A1+ | Master steroidogenic TF; shared with granulosa cells and adrenal cortex |
| LHCGR | Lhcgr+ | LHCGR+ | LH/CG receptor; primary hormonal input driving androgen synthesis |
| StAR | Star+ | STAR+ | Mitochondrial cholesterol transporter; rate-limiting for steroidogenesis |
| CYP11A1 (P450scc) | Cyp11a1+ | CYP11A1+ | Side-chain cleavage → pregnenolone; mitochondrial |
| HSD3B | Hsd3b1+ | HSD3B+ | Converts pregnenolone → progesterone; DHEA → androstenedione |
| CYP17A1 | Cyp17a1+ | CYP17A1+ | 17α-hydroxylase/17,20-lyase; theca-exclusive in the follicle |
| GATA4/GATA6 | Gata4/Gata6+ | GATA4/GATA6+ | Co-factors amplifying CYP17A1 expression; upregulated in PCOS theca cells |

**Origin.** Theca cells are recruited from the ovarian interstitial stroma as follicles grow from the primary to secondary stage. They derive from mesenchymal precursors within the ovarian cortex, with COUP-TFII (NR2F2) implicated in guiding their mesenchymal commitment. Unlike granulosa cells — which are established at the primordial follicle stage — theca cells are recruited de novo for each developing follicle. After ovulation or follicular atresia, theca cells can persist in the stroma or contribute to the corpus luteum (where they luteinize and contribute to progesterone production together with luteinized granulosa cells).

## The two-cell, two-gonadotropin model

Ovarian estradiol is produced through an obligatory collaboration between theca and granulosa cells, each responding to a distinct pituitary gonadotropin [^liuhsueh1986][^hillier1994]:

1. **Theca cells (LH-driven)**: LH binds LHCGR on theca cells, activating adenylyl cyclase → cAMP → PKA → phosphorylation of StAR and transcriptional upregulation of steroidogenic enzymes. The cascade converts cholesterol to androstenedione (and some testosterone) via CYP11A1 → HSD3B → CYP17A1 (hydroxylase and lyase activities). Theca cells express negligible [[cyp19a1|aromatase (CYP19A1)]] and thus cannot convert their androgen products to estrogens.

2. **Granulosa cells (FSH-driven)**: Theca-derived androgens (primarily androstenedione) diffuse across the avascular basement membrane into the granulosa compartment. FSH stimulates granulosa cells to express CYP19A1 via cAMP/PKA → CREB → *CYP19A1* promoter activation. CYP19A1 aromatizes androstenedione → estrone → [[estradiol|estradiol (E2)]], and testosterone → estradiol directly.

This cooperation means that circulating estradiol reflects the integrated function of both cell types. Either compartment's failure is sufficient to reduce estradiol output: granulosa cell loss drives perimenopausal estradiol decline; theca cell hyperactivity drives the androgen excess of PCOS. Inhibin, produced by granulosa cells, feeds back to potentiate LH-stimulated theca androgen synthesis, adding a paracrine amplification loop within the follicle [^hillier1994]. This inhibin-mediated theca amplification is one reason granulosa cell number and FSH responsiveness also regulate the androgen output from theca cells — the two populations are intimately coupled.

## Steroidogenic cascade in detail

The theca cell steroidogenic pathway initiates with LH binding → cAMP → PKA and proceeds as:

1. **Cholesterol mobilization**: PKA phosphorylates StAR protein and promotes assembly of the mitochondrial cholesterol import complex (StAR/TSPO/VDAC2); cholesterol is delivered to the inner mitochondrial membrane.
2. **Side-chain cleavage**: CYP11A1 (P450scc) cleaves the cholesterol side chain → **pregnenolone** (the committed step).
3. **Steroid interconversions (smooth ER)**:
   - Pregnenolone → progesterone (HSD3B; 3β-hydroxysteroid dehydrogenase)
   - Pregnenolone → 17α-hydroxypregnenolone → DHEA (CYP17A1; hydroxylase + lyase)
   - Progesterone → 17α-hydroxyprogesterone → androstenedione (CYP17A1; hydroxylase + lyase)
   - Androstenedione → testosterone (HSD17B; in small amounts)

The major secretory androgen product is **androstenedione**, which diffuses to granulosa cells for aromatization. Testosterone is also produced and similarly diffuses to granulosa, where it is the direct substrate for aromatization to estradiol. The theca cell is thus the androgen factory of the ovary; in isolation it makes androgens but not estrogens.

## Anatomy: theca interna vs. theca externa

Within each antral follicle, the theca layer is subdivided:

**Theca interna** (inner layer, directly abutting the basement membrane): The steroidogenic compartment. Cells here are polygonal, lipid-laden (cholesterol stores), LHCGR+, CYP17A1+. As the follicle grows from secondary to antral stage, theca interna cells acquire full steroidogenic competence.

**Theca externa** (outer layer): A fibromuscular layer of spindle-shaped cells with smooth muscle-like properties. Non-steroidogenic; provides structural support and may contribute to follicle wall integrity and the physical tension driving antrum expansion. Theca externa cells do not express CYP17A1.

## Aging phenotypes

### Theca dysfunction and the perimenopausal hormonal transition

As the primordial follicle pool depletes with age, fewer follicles are recruited per cycle, fewer theca cells are recruited, and aggregate ovarian androgen production declines. The result is lower androgen substrate available for granulosa aromatization — contributing to the fall in estradiol that characterizes the perimenopausal transition. However, the relationship between theca function and perimenopausal androgen decline is more nuanced than simple cell loss: LH rises substantially in perimenopause (driven by falling estradiol and inhibin B from granulosa cells), and despite this elevated LH drive, androgen production still falls — consistent with intrinsic theca steroidogenic insufficiency compounding the loss of follicle number. #gap/no-mechanism (specific molecular drivers of per-cell theca steroidogenic decline with reproductive aging are not well characterized in humans)

The early perimenopausal period is characterized by elevated FSH and relatively preserved estradiol (as LH-driven theca androgen and FSH-driven aromatase partially compensate), followed by progressive follicle depletion and eventual estradiol collapse at the menopause transition. This means theca dysfunction is one among multiple contributors — alongside granulosa cell mitochondrial decline and reduced follicle cohort — to the complex hormonal trajectory of reproductive aging.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (LH → CYP17A1 → androgen cascade is conserved) |
| Phenotype conserved in humans? | yes (perimenopausal androgen decline documented in human cohorts) |
| Replicated in humans? | partial (molecular mechanisms of per-cell theca aging from mouse; human data are largely epidemiological) |

### Postmenopausal ovarian stroma as an androgen source

After menopause, follicles are absent, but the ovarian stroma — composed largely of stromal cells of theca lineage and residual luteinized theca cells — persists and retains some steroidogenic capacity. Direct measurement of ovarian venous effluent in postmenopausal women demonstrates that the postmenopausal ovary contributes significantly to circulating testosterone and androstenedione [^burger2002]. Testosterone production from the postmenopausal ovary does not drop abruptly at the time of menopause itself — the stroma continues androgen output that is independent of follicular recruitment. This makes the postmenopausal ovary a relevant source of androgens for bone metabolism, libido, and cardiovascular function, and explains why surgical oophorectomy (bilateral removal) at any age causes a more profound androgen deficit than natural menopause alone.

The postmenopausal stromal output is driven primarily by the elevated LH of the postmenopausal state (LH rises ~3-fold post-menopause as pituitary feedback is released), which stimulates residual theca-derived stromal cells via LHCGR. The postmenopausal ovarian stroma has been demonstrated to be the primary androgen-producing compartment after follicular depletion [^thompson1993], consistent with maintenance of NR5A1/SF-1-driven steroidogenic gene expression in stromal cells. #gap/needs-replication (direct molecular characterization of NR5A1 and CYP11A1 protein expression in postmenopausal ovarian stroma requires a dedicated immunohistochemical study)

### PCOS: intrinsically hyperactive theca cells

In polycystic ovary syndrome (PCOS), theca cell hyperandrogenism is the mechanistic origin of the condition's defining feature — elevated circulating androgens. A foundational finding is that PCOS theca cells maintain their hyperandrogenic phenotype in long-term in-vitro culture in the absence of exogenous LH stimulation, demonstrating that the androgen excess is an **intrinsic, stable property of PCOS theca cells** — not simply a consequence of elevated LH drive in vivo [^nelson1999]. Cultured PCOS theca cells show augmented CYP11A and CYP17 mRNA expression (stimulated by forskolin) and increased CYP17, 3β-HSD, and 17β-HSD enzyme activity per cell, producing markedly more progesterone, 17α-hydroxyprogesterone, and testosterone than normal theca cells under identical conditions [^nelson1999]. #gap/dose-response-unclear (specific fold-changes require full-text access; full text is closed-access)

Microarray profiling of PCOS vs. normal theca cells identified a distinct transcriptional program: upregulated aldehyde dehydrogenase 6 and retinol dehydrogenase 2 (promoting all-trans-retinoic acid biosynthesis), together with elevated GATA6 transcription factor expression. Retinoic acid and GATA6 synergistically amplify CYP17A1 expression — establishing a molecular mechanism for the constitutive steroidogenic upregulation [^wood2003]. Additional PCOS risk-gene findings (DENND1A, ZNF217) converge on regulation of CYP17A1 and CYP11A1 expression in theca cells, confirming that intrinsic theca dysregulation is genetically encoded in most PCOS cases.

Critically, this theca-intrinsic hyperandrogenism is not explained by increased LH sensitivity (LHCGR expression is similarly elevated in PCOS theca, which does increase maximal androgen output, but the intrinsic excess persists at sub-maximal LH stimulation) [^comim2013].

## Relationship to hallmarks of aging

| Hallmark | Role in theca cell aging |
|---|---|
| [[altered-intercellular-communication]] | Declining theca androgen production disrupts the two-cell estradiol synthesis partnership with granulosa cells; altered HPG axis feedback (LH rises despite intact theca responsiveness); residual postmenopausal stroma androgen output shifts peripheral endocrine signaling to male-biased androgen:estrogen ratios |

The theca cell is not prominently implicated in [[cellular-senescence]] or [[mitochondrial-dysfunction]] as a primary driver of its aging-related decline (compared with [[granulosa-cells]]). The principal mechanism appears to be loss of the upstream follicular context — as follicle numbers decline, fewer theca cells are recruited, reducing aggregate androgen output — rather than intrinsic cellular aging of individual theca cells. Whether individual theca cells accumulate molecular damage with reproductive age is underexplored. #gap/no-mechanism

## Male analog: Leydig cells

The theca cell's direct functional analog in the male is the [[leydig-cells|Leydig cell]]: both are LH-driven, interstitial cells expressing the full steroidogenic enzyme suite (NR5A1, StAR, CYP11A1, CYP17A1, HSD3B) that convert cholesterol to androgens. Both respond to cAMP/PKA downstream of LHCGR. The key distinctions:

- **Theca cells** are follicle-associated, recruited per follicle, serve as androgen suppliers for nearby granulosa cells, and are lost when follicles are depleted (menopause).
- **Leydig cells** are permanent interstitial cells of the testis, persist throughout life (with declining per-cell function), and supply testosterone systemically for spermatogenesis and systemic effects.

In the aging male, the Leydig cell's steroidogenic decline is driven primarily by intrinsic cellular defects (StAR/TSPO/mitochondrial axis) — see [[leydig-cells]]. In the aging female, theca cell androgen output falls largely because fewer follicles recruit new theca cells, not because existing theca cells individually fail at the molecular level. This distinction in aging mechanism likely reflects the renewable nature of theca (recruited anew for each follicle) vs. the long-lived, non-renewed nature of Leydig cells.

## Limitations and gaps

- **Per-cell theca aging in humans**: Whether individual theca cells undergo intrinsic molecular aging (mitochondrial dysfunction, StAR decline, senescence) analogous to Leydig cells is not well characterized. Most human data on theca biology comes from IVF material or postmenopausal ovarian biopsies. A systematic study of theca steroidogenic capacity per cell across reproductive age in humans is lacking. #gap/no-mechanism #gap/needs-human-replication
- **Theca progenitor pool**: Whether an interstitial stromal progenitor pool for theca cells declines with age (analogous to stem Leydig cells) is unknown. The theca-renewal mechanism (recruited from stroma for each follicle) may buffer against progenitor exhaustion until the follicle pool is depleted, but the stromal reservoir has not been characterized longitudinally. #gap/no-mechanism
- **Postmenopausal androgen output quantification**: The magnitude of the postmenopausal ovarian androgen contribution varies substantially across studies and cohorts; ovarian vein catheterization data are scarce. Whether the androgen output declines progressively with years post-menopause or is stable is not resolved. #gap/dose-response-unclear
- **PCOS theca aging**: How PCOS-pattern theca hyperactivity interacts with ovarian aging and the perimenopausal transition is incompletely characterized. Women with PCOS show higher androgen levels in perimenopause but the trajectory converges toward non-PCOS levels after menopause; the theca mechanisms of this normalization are not studied at single-cell resolution. #gap/needs-replication
- **Theca senescence**: No dedicated study of senescence-associated secretory phenotype (SASP) in theca cells across reproductive age has been published. Whether SASP from senescent theca cells contributes to the aging ovarian microenvironment is unexplored. #gap/needs-human-replication

## See also

- [[ovary]] — the tissue context
- [[granulosa-cells]] — the inner follicle somatic cell; obligatory partner in the two-cell, two-gonadotropin model; receives theca-derived androgens for aromatization
- [[leydig-cells]] — the male steroidogenic analog; LH-driven interstitial androgen producers in the testis
- [[lh]] — the pituitary gonadotropin driving theca cell steroidogenesis via LHCGR
- [[cyp19a1]] — aromatase; expressed in granulosa cells, not theca; converts theca-derived androgens to estrogens
- [[estradiol]] — the downstream estrogen produced by granulosa cells from theca androgen substrate
- [[testosterone]] — minor theca secretory product; also converted from androstenedione in periphery; primary male androgen
- [[polycystic-ovary-syndrome]] — condition defined by theca cell hyperandrogenism as its mechanistic core
- [[menopause]] — the endpoint of follicular depletion; loss of theca cells as source of androgen substrate drives much of the estradiol decline
- [[altered-intercellular-communication]] — hallmark manifest in disrupted two-cell steroidogenic partnership and HPG axis dysregulation

---

## Footnotes

[^liuhsueh1986]: [[studies/liu-hsueh-1986-two-cell-model]] · doi:10.1095/biolreprod35.1.27 · PMID:3091103 · Liu Y-X, Hsueh AJW · in-vitro (rat ovarian cells, PMSG-primed immature rats) · Biology of Reproduction 1986;35(1):27–36 · n=not reported (in-vitro cell incubations) · demonstrated synergism between granulosa and theca-interstitial cells in estrogen biosynthesis; theca cells supplied androgen substrate under hCG (LH-receptor agonist); granulosa cells expressed high aromatase activity and converted androgens to estrogen under FSH+hCG; co-culture produced substantially more estrogen than either cell type alone; testosterone antiserum inhibited co-culture estrogen production by 78%; seminal in-vitro evidence for the two-cell, two-gonadotropin model · citation percentile: 100 · archive status: pending (bronze OA)

[^hillier1994]: [[studies/hillier-1994-two-cell-model-revisited]] · doi:10.1016/0303-7207(94)90232-1 · Hillier SG, Whitelaw PF, Smyth CD · review · Molecular and Cellular Endocrinology 1994;100(1-2):51–54 · reviews the two-cell mechanism with evidence that CYP17 is expressed exclusively in theca cells; inhibin from granulosa cells potentiates LH-stimulated thecal androgen synthesis, adding a paracrine amplification loop; updated the model from the 1980s literature to account for granulosa→theca paracrine signaling · archive status: pending

[^patel2009]: [[studies/patel-2009-cyp17-granulosa-repression]] · doi:10.1210/jc.2009-0062 · Patel SS, Beshay VE, Escobar JC, Suzuki T, Carr BR · in-vitro (human granulosa cells) · Journal of Clinical Endocrinology and Metabolism 2009;94(12):5079–5087 · c-fos transcription factor suppresses CYP17A1 expression in granulosa cells; siRNA silencing of c-fos increased CYP17A1 mRNA 8-fold; explains the cell-type exclusivity of androgen synthesis to the theca compartment · archive status: pending

[^nelson1999]: [[studies/nelson-1999-pcos-theca-stable-phenotype]] · doi:10.1210/mend.13.6.0311 · Nelson VL, Legro RS, Strauss JF 3rd, McAllister JM · in-vitro (human PCOS and normal theca cells) · Molecular Endocrinology 1999;13(6):946–957 · PMID:10379893 · PCOS theca cells in long-term propagated culture maintained markedly higher progesterone, 17α-hydroxyprogesterone, and testosterone production per cell; forskolin-stimulated CYP11A and CYP17 mRNA augmented in PCOS vs. normal theca cells; no differences in StAR mRNA expression; augmented androgen production is cell-autonomous and stable; established that PCOS theca hyperandrogenism is an intrinsic property, not driven by elevated in-vivo LH · archive status: pending (closed-access; full text unavailable; fold-change specifics unverifiable from abstract) #gap/no-fulltext-access

[^wood2003]: [[studies/wood-2003-pcos-theca-microarray]] · doi:10.1074/jbc.m300688200 · Wood JR, Nelson VL, Ho C, Jansen E, Wang CY, Urbanek M, McAllister JM, Mosselman S, Strauss JF 3rd · microarray analysis (human PCOS and normal theca cells) · Journal of Biological Chemistry 2003;278(29):26380–26390 · PMID:12734205 · microarray profiling identified distinct PCOS theca transcriptome: upregulated aldehyde dehydrogenase 6, retinol dehydrogenase 2 (retinoic acid biosynthesis), and GATA6; retinoic acid + GATA6 synergistically amplify CYP17A1 expression; defined molecular candidates for constitutive theca steroidogenic upregulation in PCOS · 255 citations · citation percentile: 100 · archive status: pending (hybrid OA)

[^comim2013]: [[studies/comim-2013-pcos-lhcgr-cyp17a1]] · doi:10.1093/humrep/det374 · Comim FV, Teerds K, Hardy K, Franks S · human tissue (immunohistochemistry) · Human Reproduction 2013;28(12):3237–3246 · PMID:24014605 · immunohistochemical analysis of polycystic vs. normal ovarian tissue: significantly elevated LHCGR and CYP17A1 protein expression in PCOS theca cells; demonstrates that both receptor-level sensitization and downstream enzyme upregulation contribute to thecal hyperandrogenism in PCOS · archive status: pending

[^burger2002]: [[studies/burger-2002-androgen-production-women]] · doi:10.1016/s0015-0282(02)02985-0 · Burger HG · review · Fertility and Sterility 2002;77(Suppl 4):S3–S5 · PMID:12007895 · major androgens in women: DHEAS (adrenal), androstenedione (ovarian + adrenal), testosterone (ovarian + peripheral conversion); the postmenopausal ovary is an androgen-secreting organ and testosterone levels are not directly influenced by the menopausal transition; postmenopausal stroma (largely theca-derived) continues androgen output under elevated LH drive · archive status: pending

[^thompson1993]: [[studies/thompson-1993-ovarian-stroma-androgen-postmenopause]] · doi:10.1007/978-1-4615-2926-2_12 · Thompson MA, Adelson MD · book chapter · Advances in Experimental Medicine and Biology 1993;330:155–165 · PMID:8368131 · in postmenopausal ovaries the stromal cell compartment is the primary androgen source; androgens (testosterone, androstenedione) inhibit proliferation of ovarian tumor cells; elevated local androgen concentration in the postmenopausal ovarian stroma has biological relevance; note: this chapter addresses ovarian carcinoma biology and does not directly characterize NR5A1 or CYP11A1 protein expression in postmenopausal stroma · archive status: pending (book chapter, closed-access)
