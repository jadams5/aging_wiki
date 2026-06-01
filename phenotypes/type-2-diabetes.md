---
type: phenotype
aliases: [T2DM, T2D, type 2 diabetes mellitus, non-insulin-dependent diabetes mellitus, NIDDM, adult-onset diabetes]
icd-10: E11
icd-11: 5A11
affected-tissues: ["[[skeletal-muscle]]", "[[liver]]", "[[adipose-tissue]]", "[[pancreas]]"]
underlying-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]", "[[cellular-senescence]]", "[[altered-intercellular-communication]]"]
typical-onset: "40+ (clinical); biological onset earlier — impaired fasting glucose / impaired glucose tolerance (prediabetes) typically 5–10 years before clinical T2D diagnosis"
prevalence-65plus: "~25% age 65+; ~33% age 75+ (US/EU); rising globally"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "ADA 2024 (dc24-S002, local PDF verified in full — diagnostic criteria, prediabetes thresholds, GWAS loci count, lifestyle risk-reduction figure all confirmed); Um 2004 (nature02866, local PDF verified in full — S6K1-/- mouse phenotype, corrigendum-corrected IRS-1 serine sites Ser307/Ser632/Ser635 mouse and Ser312/Ser636/Ser639 human confirmed; food-intake claim corrected from 'more food' to 'similar absolute food intake P=0.8 / higher per-body-weight'); Withers 1998 (not_oa) — Irs2-/- beta-cell mass ~50% reduction and ~10 week lethality cross-verified against verified irs2.md claims; Saxena 2007 (not_oa) — TCF7L2 OR ~1.37 per allele is well-established published value, not independently verified from full text; Aguayo-Mazzucato 2019 (bronze OA, download pending at time of verification) — beta-cell senescence claims unverified against full PDF; Zinman 2015 EMPA-REG and Marso 2016 SUSTAIN-6 (both NEJM, downloads pending) — MACE/CV-death/HHF HRs and CIs not independently verified from PDF, bibliographic metadata confirmed via Crossref; Wilding 2021 STEP-1 (not_oa) — n=1961, weight loss −14.9% are well-established published values, bibliographic metadata confirmed via Crossref but full-text not verified"
---

# Type 2 Diabetes Mellitus (T2DM)

A chronic metabolic disorder characterized by persistent hyperglycemia arising from the combination of **peripheral tissue insulin resistance** and **progressive beta-cell dysfunction** leading to relative insulin deficiency. The prototypical disease of deregulated insulin/IGF-1 signaling (IIS) in humans — the pathological mirror of the conserved longevity program activated by reduced IIS in model organisms. T2DM accelerates aging along multiple hallmark axes and constitutes one of the clearest translational bridges connecting the molecular biology of nutrient sensing to human aging and age-related disease.

## Diagnostic criteria (ADA 2024)

Any one of the following [^ada2024]:

| Test | Diagnostic threshold |
|---|---|
| Fasting plasma glucose (FPG) | ≥ 126 mg/dL (7.0 mmol/L) after ≥ 8 h fast |
| 2-hour OGTT glucose | ≥ 200 mg/dL (11.1 mmol/L) after 75 g glucose load |
| HbA1c | ≥ 6.5% (48 mmol/mol) |
| Random glucose + symptoms | ≥ 200 mg/dL with classic hyperglycemia symptoms |

**Prediabetes** (impaired fasting glucose: FPG 100–125 mg/dL; impaired glucose tolerance: 2h OGTT 140–199 mg/dL; HbA1c 5.7–6.4%) represents the intermediate state, typically present 5–10 years before clinical T2D. Progression to T2D is not inevitable: structured lifestyle intervention reduces risk ~58% in high-risk individuals [^ada2024].

## Pathophysiology

### 1. Insulin resistance in peripheral tissues

In skeletal muscle (the dominant site of postprandial glucose disposal), liver, and adipose tissue, insulin fails to elicit its normal downstream signaling cascade. The canonical pathway — [[insulin]] → [[insr|insulin receptor (INSR)]] → [[irs-1|IRS-1]]/[[irs2|IRS-2]] → [[pi3k-akt-pathway|PI3K → AKT]] — becomes blunted:

- **Skeletal muscle:** Impaired AKT phosphorylation → reduced AS160/TBC1D4 phosphorylation → failure to translocate GLUT4 vesicles to the plasma membrane → diminished insulin-stimulated glucose uptake
- **Liver:** Failure of AKT to phosphorylate and nuclear-exclude FOXO1 → inappropriately sustained hepatic glucose output (gluconeogenesis + glycogenolysis) → fasting hyperglycemia
- **Adipose tissue:** Impaired suppression of hormone-sensitive lipase → elevated free fatty acid release → ectopic lipid deposition in liver and muscle → lipotoxicity-driven insulin resistance amplification

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — canonical IIS signaling is identical |
| Phenotype conserved in humans? | yes — T2D is a human disease definition |
| Replicated in humans? | yes — established clinical entity |

### 2. S6K1 → IRS-1 negative feedback hyperactivation (the molecular insulin-resistance amplifier)

Under chronic nutrient excess, the [[mtor|mTORC1]]–[[s6k1|S6K1]] axis becomes constitutively activated and feeds back to phosphorylate IRS-1 on inhibitory serine residues, targeting it for proteasomal degradation — establishing a vicious cycle where insulin resistance begets further insulin resistance [^um2004].

Specifically, S6K1 phosphorylates IRS-1 at Ser-307 (mouse) / Ser-312 (human) and Ser-632/635 (mouse) / Ser-636/639 (human) — sites that inhibit the PTB domain interaction with the activated receptor and promote IRS-1 ubiquitination and degradation. The result: each wave of insulin signaling that reaches S6K1 activates a feedback mechanism that blunts the next wave.

Evidence: S6K1-knockout mice (*S6k1*-/-) are protected against diet-induced obesity and retain enhanced insulin sensitivity at age 6 months compared to wild-type controls, despite similar absolute food intake (per-animal food intake P=0.8; food normalized to body weight was ~44% higher, reflecting the reduced body mass of KO mice) — the opposite of what would be expected if S6K1 were merely a downstream effector rather than a negative regulator [^um2004]. This finding establishes S6K1 as mechanistically central to both nutrient-sensing–driven insulin resistance and age-related metabolic deterioration. See [[s6k1]] for full mechanistic detail.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — S6K1, IRS-1, serine phosphorylation sites conserved |
| Phenotype conserved in humans? | yes — S6K1 activation is elevated in human insulin-resistant states |
| Replicated in humans? | in-progress — indirect human evidence from rapamycin studies; Ser-636/639 phosphorylation elevated in obese/T2D humans #gap/needs-replication |

### 3. Beta-cell compensation and failure

Initially, pancreatic beta-cells compensate for peripheral insulin resistance by secreting more insulin (hyperinsulinemia). Over years to decades this compensation fails:

- **Beta-cell exhaustion:** Chronic hyperstimulation increases ER stress, ROS production, and mitochondrial dysfunction
- **Beta-cell apoptosis:** Glucotoxicity and lipotoxicity drive programmed cell death; beta-cell mass declines
- **Beta-cell dedifferentiation:** Loss of mature beta-cell transcription factors (Pdx1, MafA) with reversion toward a progenitor-like state

**IRS-2 is the critical intracellular scaffold for beta-cell function and survival.** Whole-body *Irs2*-/- mice develop a frank T2D phenotype with approximately 50% reduction in beta-cell mass accompanied by hepatic insulin resistance — mice become overtly diabetic and die around 10 weeks of age [^withers1998]. This is the mechanistic foundation for viewing IRS-2 signaling as non-redundant with IRS-1 in beta-cell maintenance. See [[irs2]] for full characterization.

### 4. Hyperglycemia, glucotoxicity, and vascular complications

Sustained hyperglycemia drives multi-organ damage through several mechanisms:

- **Non-enzymatic glycation:** Glucose reacts with proteins and lipids to form advanced glycation end-products (AGEs), crosslinking collagen, stiffening vessels, and activating RAGE (receptor for AGEs) → NF-κB inflammatory signaling. See [[nf-kb]].
- **Oxidative stress / reactive oxygen species:** Mitochondrial ETC overload under glucose excess → superoxide → peroxynitrite
- **Polyol pathway:** Glucose → sorbitol (via aldose reductase) → fructose → depletes NADPH + glutathione
- **Lipotoxicity:** Elevated FFAs impair insulin signaling (ceramide, diacylglycerol) and drive beta-cell apoptosis

**Micro- and macrovascular complications** (long-term):
- **Retinopathy** — leading cause of adult-onset blindness
- **Nephropathy / diabetic kidney disease** — leading cause of end-stage renal disease
- **Neuropathy** — distal symmetric polyneuropathy most common
- **Accelerated atherosclerosis** — 2–4× cardiovascular mortality; mechanism includes dyslipidemia, hypertension, endothelial dysfunction, and inflammation

## Aging hallmark connections

T2DM is mechanistically central to multiple [[hallmarks-of-aging]]:

### Deregulated nutrient sensing (paradigmatic)

T2DM is the human disease manifestation of chronically hyperactivated IIS/mTOR signaling — the mirror image of the longevity program activated by caloric restriction or reduced IIS in model organisms. Where centenarians show reduced circulating IGF-1 and IGF-1 receptor sensitivity (associated with longevity, see [[insulin-igf1]]), T2DM subjects show chronic hyperinsulinemia with receptor desensitization. The tension: elevated circulating insulin is both cause and consequence of T2DM, with the net signaling outcome being constitutive mTORC1/S6K1 activation with paradoxically impaired AKT→FOXO signaling. See [[deregulated-nutrient-sensing]].

### Chronic inflammation ("inflammaging" intersection)

Adipose tissue in T2DM accumulates M1-polarized macrophages (adipose tissue macrophages, ATMs) that secrete TNF-α, IL-6, and IL-1β — directly impairing IRS-1/IRS-2 tyrosine phosphorylation via serine kinase (JNK, IKKβ) activation on IRS proteins. Circulating CRP, IL-6, and TNF-α are elevated in T2DM and independently predict progression from prediabetes to T2DM. JNK-mediated IRS serine phosphorylation links the [[chronic-inflammation|inflammaging]] program directly to insulin resistance at the molecular level. See [[nf-kb]] for the canonical inflammatory signaling node.

### Mitochondrial dysfunction

Skeletal muscle in T2DM and insulin resistance shows reduced mitochondrial content, impaired oxidative phosphorylation capacity (lower OXPHOS enzyme activity, reduced mtDNA copy number, lower VO₂max), and elevated intramyocellular lipid — all hallmarks of [[mitochondrial-dysfunction]]. Whether mitochondrial defects are primary drivers or secondary consequences of insulin resistance remains debated. #gap/contradictory-evidence

### Cellular senescence (beta-cell and adipose senescence)

**Beta-cell senescence** accelerates with age and is mechanistically linked to T2DM onset: in aged mice, beta-cells accumulate p16^Ink4a, p21, and senescence-associated beta-galactosidase; clearance of these senescent beta-cells (using the INK-ATTAC suicide gene model to eliminate p16^Ink4a+ cells) delays T2DM onset and improves insulin secretion. Conversely, transplanting senescent beta-cells into young mice impairs their glucose tolerance [^aguayo2019]. This establishes beta-cell senescence as causally — not merely correlatively — contributing to T2DM. #gap/needs-human-replication #gap/no-fulltext-access (Aguayo-Mazzucato 2019 full PDF download pending at time of verification; quantitative details — exact p16+ cell %, glucose tolerance effect size — unconfirmed from source)

**Adipose tissue senescence:** Senescent preadipocytes and adipocytes secrete a proinflammatory SASP that impairs adipogenesis, promotes macrophage infiltration, and exacerbates insulin resistance. See [[fisetin]] and [[dasatinib]] for senolytic compounds with adipose-senescence-targeting activity.

See [[cellular-senescence]] for general senescence biology.

### Altered intercellular communication

T2DM perturbs systemic endocrine communication: elevated FFAs act as lipotoxic signals across tissues; adipokine dysregulation (reduced adiponectin, elevated leptin, elevated resistin) contributes to insulin resistance; gut-derived GLP-1 secretion is reduced or less effective. AGE-RAGE signaling constitutes a pathological intercellular communication axis amplifying vascular damage. See [[altered-intercellular-communication]].

## Genetic architecture

T2DM has high heritability (~50%) with a complex polygenic architecture plus rare monogenic forms.

**Common variants (GWAS):** Over 500 loci identified as of 2024 [^ada2024]. Strongest common-variant signals:

| Gene/Locus | Effect per risk allele | Mechanism |
|---|---|---|
| TCF7L2 | ~1.4× (OR ~1.37 per allele) | Impairs Wnt signaling in beta-cells; reduces incretin-stimulated insulin secretion [^saxena2007] |
| PPARG (Pro12Ala) | ~1.25× protective allele | TZD nuclear receptor; adipogenesis and insulin sensitivity |
| KCNJ11 (Kir6.2) | ~1.14× | ATP-sensitive K+ channel in beta-cells; sulfonylurea target |
| SLC30A8 (ZnT8) | beta-cell zinc transporter | Required for insulin crystallization and secretion |

**Monogenic diabetes (MODY):** Mutations in single genes cause high-penetrance early-onset T2DM-like phenotypes. Key forms:
- **MODY3** (HNF1A) — most common; sulfonylurea-sensitive
- **MODY2** (GCK / glucokinase) — mild, non-progressive; often treatment-free
- **MODY1** (HNF4A) — similar to MODY3
- Distinguishing MODY from T2DM has treatment implications (sulfonylurea response in MODY3/1 vs metformin/insulin in T2D)

## Pharmacological management

### Metformin (first-line)

Biguanide; AMPK activator (indirect, via mitochondrial complex I inhibition → elevated AMP:ATP ratio); reduces hepatic glucose output. Well-established safety profile; weight-neutral to modest loss; low hypoglycemia risk as monotherapy. First-line in most guidelines. See [[metformin]] for full mechanistic detail including the TAME (Targeting Aging with MEtformin) non-diabetic aging trial. #gap/long-term-unknown for lifespan effects in non-diabetic humans.

### SGLT2 inhibitors (empagliflozin, dapagliflozin, canagliflozin)

Inhibit sodium-glucose cotransporter 2 in the proximal renal tubule → glycosuria → glucose and calorie loss independent of insulin. Additional benefits: reduced renal tubular glucose reabsorption lowers preload/afterload, improves cardiac energy substrate utilization. **Empagliflozin demonstrated cardiovascular mortality reduction** (3-point MACE HR 0.86 [95% CI 0.74–0.99], CV death HR 0.62 [95% CI 0.49–0.77], HHF HR 0.65) in T2DM patients with established cardiovascular disease — the EMPA-REG OUTCOME trial (Zinman 2015, n=7,020) [^empareg2015]. Extend lifespan in preclinical models. #gap/needs-human-replication for aging-specific (non-CVD) lifespan effects. #gap/no-fulltext-access (EMPA-REG PDF download pending at time of verification; HRs/CIs confirmed from widely-reported published values but not independently read from full PDF)

### GLP-1 receptor agonists (semaglutide, tirzepatide, liraglutide)

Glucagon-like peptide-1 receptor agonists; enhance glucose-dependent insulin secretion, suppress glucagon, slow gastric emptying, reduce appetite via CNS effects. Paradigm-shifting for weight management and cardiovascular outcomes in T2DM. Semaglutide (SUSTAIN-6 trial, Marso 2016, n=3,297): cardiovascular death/nonfatal MI/stroke HR 0.74 [95% CI 0.58–0.95] in T2DM [^sustain6]. #gap/no-fulltext-access (SUSTAIN-6 PDF download pending at time of verification; HR/CI confirmed from widely-reported published values but not independently read from full PDF). High-dose semaglutide (Ozempic/Wegovy) produced −14.9% mean body weight change vs −2.4% placebo (placebo-corrected ~−12.4 pp) in overweight/obese adults without T2DM in the STEP-1 trial (n=1,961, Wilding 2021) [^step1]. #gap/no-fulltext-access (STEP-1 paper is not_oa; weight-loss figures are widely-reported published values) Tirzepatide (dual GLP-1/GIP agonist) shows even greater weight loss. These agents are reshaping T2DM management and represent an emerging axis of obesity-T2DM-aging intervention.

### Additional agents

| Class | Examples | Mechanism | Notes |
|---|---|---|---|
| Sulfonylureas | glipizide, glimepiride | Close ATP-sensitive K+ channels → insulin secretion | Hypoglycemia risk; beta-cell exhaustion concern |
| Thiazolidinediones (TZDs) | pioglitazone | PPARγ agonist → improved insulin sensitivity | Weight gain, fluid retention, bone fractures |
| DPP-4 inhibitors | sitagliptin, saxagliptin | Block GLP-1/GIP degradation → modest incretin enhancement | Weight neutral; generally well tolerated |
| Insulin | multiple formulations | Direct insulin replacement | Required in advanced beta-cell failure |

## Aging-specific context

**T2DM as an accelerated-aging phenotype:** T2DM patients show accelerated biological aging across multiple hallmark dimensions — higher epigenetic aging clock scores (Horvath methylation clock advanced ~3–5 years above chronological age in T2DM cohorts), shorter telomeres, higher senescent cell burden, elevated inflammatory cytokines. The mechanisms are largely the same as those driving normal aging, operating at higher intensity.

**The hyperinsulinemia paradox:** Centenarians and long-lived model organisms show reduced IIS (lower IGF-1, reduced insulin sensitivity, or reduced receptor signaling). Yet T2DM involves insulin resistance (impaired AKT→FOXO) — not simply elevated insulin action. The apparent paradox resolves when the *downstream effectors* are distinguished: what is lost in T2DM is FOXO nuclear activity (metabolic/transcriptional benefit) while mTORC1/S6K1 activity is pathologically elevated (anabolic drive + feedback inhibition of IRS proteins). This is the opposite of longevity-promoting reduced IIS where both arms are downregulated. See [[insulin-igf1]] and [[deregulated-nutrient-sensing]].

**T2DM → Alzheimer's disease bidirectional risk:** Epidemiological evidence links T2DM with ~1.5–2× increased risk of Alzheimer's disease and other dementias. Shared mechanisms include insulin resistance in the brain (brain insulin signaling impairs Aβ clearance, promotes tau hyperphosphorylation), AGE accumulation, and chronic neuroinflammation. Conversely, Alzheimer's pathology impairs hypothalamic insulin signaling. #gap/no-mechanism for the causal directionality; see [[alzheimers-disease]] (stub).

**TAME trial:** The Targeting Aging with MEtformin (TAME) trial is a landmark NIA-funded RCT testing whether metformin (1,500–1,700 mg/day) delays the onset of age-related diseases (T2DM, cardiovascular disease, cancer, dementia, physical disability, or death) in non-diabetic adults aged 65–79 at high risk of age-related disease. This trial explicitly tests whether an anti-T2DM drug can function as a geroprotector — a direct operationalization of the aging-T2DM mechanistic connection. Results expected ~2027. #gap/long-term-unknown

## Limitations and gaps

- **Causality of mitochondrial defects:** It remains debated whether skeletal muscle mitochondrial dysfunction is a primary driver of insulin resistance or secondary to lipid overload and reduced physical activity. #gap/contradictory-evidence
- **Human beta-cell senescence intervention:** Aguayo-Mazzucato 2019 demonstrates causal beta-cell senescence in mouse T2DM; human equivalence has not been directly tested. Quantitative details from Aguayo-Mazzucato 2019 (effect sizes, p values) unverified from full text — PDF download pending at time of verification. #gap/needs-human-replication #gap/no-fulltext-access
- **S6K1 inhibition as T2DM therapy:** Despite compelling mechanistic evidence for the S6K1–IRS-1 feedback loop, no selective S6K1 inhibitor has reached clinical use for T2DM (rapamycin immunosuppression, incomplete selectivity, metabolic side effects). #gap/dose-response-unclear
- **Brain-IIS paradox specificity:** The brain-specific *Irs2*-/- lifespan extension (Taguchi 2007) has not been replicated in humans and the mechanism specific to brain IRS-2 versus peripheral IRS-2 requires further clarification. #gap/needs-human-replication
- **T2DM-aging causality direction:** Cross-sectional epigenetic clock studies show accelerated aging in T2DM, but whether hyperglycemia/hyperinsulinemia causes aging acceleration or aging causes metabolic deterioration first remains causally unresolved. #gap/no-mechanism

## Related pages

- [[insulin-igf1]] — the IIS pathway hub; longevity axis
- [[insr]] — insulin receptor; T2DM upstream
- [[irs-1]] — muscle/adipose IIS scaffold; S6K1 feedback target
- [[irs2]] — liver/beta-cell IIS scaffold; Irs2-/- T2D model
- [[pi3k-akt-pathway]] — core downstream signaling
- [[s6k1]] — mTORC1 effector; IRS-1 inhibitory feedback kinase
- [[mtor]] — nutrient-sensing hub
- [[metformin]] — first-line T2D drug; geroprotector candidate
- [[deregulated-nutrient-sensing]] — hallmark; paradigmatic for T2DM
- [[chronic-inflammation]] — inflammaging ↔ insulin resistance
- [[mitochondrial-dysfunction]] — skeletal muscle; T2DM defect
- [[cellular-senescence]] — beta-cell + adipose senescence
- [[sarcopenia]] — co-occurring phenotype; shared mechanisms (insulin resistance, inflammation)
- [[homo-sapiens]] — model organism context

---

## Footnotes

[^ada2024]: [[studies/ada-2024-standards-of-care]] · doi:10.2337/dc24-S002 · American Diabetes Association · review/guidelines · Diabetes Care 2024;47(Suppl 1):S20–S42 · Section 2: Diagnosis and Classification; diagnostic thresholds and prediabetes criteria · local PDF available

[^withers1998]: [[studies/withers-1998-irs2-t2d]] · doi:10.1038/36116 · Withers DJ et al. · in-vivo (mouse KO) · Nature 1998;391:900–904 · n=Irs2-/- homozygotes vs WT littermates · beta-cell mass ~50% reduction; hepatic insulin resistance; frank T2DM phenotype; fatal ~10 wk · model: mus-musculus · not_oa #gap/no-fulltext-access

[^um2004]: [[studies/um-2004-s6k1-insulin-sensitivity]] · doi:10.1038/nature02866 · Um SH et al. · in-vivo (mouse KO) · Nature 2004;431:200–205 · male C57BL/6J S6k1-/- mice protected against age- and diet-induced obesity (body-fat index significantly reduced; body weight 25% lower at 27 wk), maintained enhanced insulin sensitivity vs WT at 6 months; absolute food intake not significantly different (P=0.8); food intake per body weight ~44% higher in KO; S6K1 feeds back to phosphorylate IRS-1 inhibitory serines Ser307+Ser632/635 (mouse) / Ser312+Ser636/639 (human) per corrigendum Nature 431:485 (original figure labels S636/S639 corrected to S632/S635 for mouse) · model: mus-musculus · local PDF verified

[^saxena2007]: [[studies/saxena-2007-t2d-gwas]] · doi:10.1126/science.1142358 · Saxena R et al. · observational (GWAS) · Science 2007;316:1331–1336 · n=~14,000 cases/controls combined · TCF7L2 lead T2D GWAS locus; ~1.37× OR per risk allele · model: homo-sapiens · not_oa #gap/no-fulltext-access

[^aguayo2019]: [[studies/aguayo-mazzucato-2019-beta-cell-senescence]] · doi:10.1016/j.cmet.2019.05.006 · Aguayo-Mazzucato C et al. · in-vivo (mouse, INK-ATTAC model) · Cell Metabolism 2019;30:129–142.e4 · p16^Ink4a+ senescent beta-cells accumulate with age; clearance delays T2DM onset + improves insulin secretion; transplanting senescent beta-cells impairs glucose tolerance in young recipients · model: mus-musculus · archive: download pending (bronze OA) at time of verification — quantitative effect sizes unconfirmed from full text #gap/needs-human-replication #gap/no-fulltext-access

[^empareg2015]: [[studies/zinman-2015-empa-reg-outcome]] · doi:10.1056/NEJMoa1504720 · Zinman B et al. (EMPA-REG OUTCOME Investigators) · rct · NEJM 2015;373:2117–2128 · n=7,020 T2DM patients with established CVD; empagliflozin 10 or 25 mg vs placebo; 3-point MACE HR 0.86 (95% CI 0.74–0.99); CV death HR 0.62 (95% CI 0.49–0.77); HHF HR 0.65 · model: homo-sapiens · archive: download pending at time of verification (bronze OA) — HRs/CIs are widely-reported published values; bibliographic metadata confirmed via Crossref #gap/no-fulltext-access

[^sustain6]: [[studies/marso-2016-sustain6-semaglutide]] · doi:10.1056/NEJMoa1607141 · Marso SP et al. (SUSTAIN-6 Investigators) · rct · NEJM 2016;375:1834–1844 · n=3,297 T2DM with high CV risk; once-weekly semaglutide 0.5 or 1.0 mg vs placebo; MACE HR 0.74 (95% CI 0.58–0.95); nonfatal stroke driven result · model: homo-sapiens · archive: download pending at time of verification (bronze OA) — HR/CI is widely-reported published value; bibliographic metadata confirmed via Crossref #gap/no-fulltext-access

[^step1]: [[studies/wilding-2021-step1-semaglutide]] · doi:10.1056/NEJMoa2032183 · Wilding JPH et al. (STEP 1 Investigators) · rct · NEJM 2021;384:989–1002 · n=1,961 overweight/obese adults without T2DM; once-weekly semaglutide 2.4 mg vs placebo × 68 weeks; mean weight change −14.9% vs −2.4% (placebo-corrected ~−12.4 pp) · model: homo-sapiens · not_oa #gap/no-fulltext-access
