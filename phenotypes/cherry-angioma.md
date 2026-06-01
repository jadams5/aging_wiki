---
type: phenotype
aliases: [Campbell de Morgan spot, senile hemangioma, senile angioma, ruby spot, De Morgan spot, cherry hemangioma]
icd-10: D18.01
underlying-hallmarks: ["[[genomic-instability]]", "[[altered-intercellular-communication]]"]
affected-tissues: ["[[skin-aging|skin]]"]
typical-onset: "Rare before age 30; increases steeply after 40; present in >75% of individuals over 70 (estimated)"
prevalence-65plus: "~33% in community dermatology cohorts (varies widely by study design and definition)"
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Liau 2019: verified via PubMed abstract (PMID 31189994) + Europe PMC abstract; 82% mutation rate and gene breakdown confirmed. Klebanov 2019: verified via PMC full text (PMC6440195); n=10 confirmed, mutations confirmed, fabricated functional-experiment claim removed. Nakashima 2010: verified via primary PDF; n corrected 8→7 per group. Kumar 2021: verified via PubMed abstract (PMID 33911297) + Europe PMC; n=250, mean age 67.87±7.29, cherry angioma 33.2% all confirmed. Pastor-Tomás 2023: verified via primary PDF; 'most common vascular tumors' confirmed. Bujoreanu 2025: verified via primary PDF (n=60 confirmed); biologic-class direction corrected (IL-23 inhibitors → more angioma, not TNF-α). Askari 2013: verified via PubMed abstract (PMID 23370299); n corrected to 72+268; prolactin direction corrected (lower in cases, not elevated). Zhao 2023: verified via PubMed abstract (PMID 37701250); case confirmed as 68-yr-old male with recurrent strokes; IVLBCL-via-cherry-angioma-biopsy confirmed. StatPearls [^qadeer-statpearls]: full text not accessible (HTTP 403); specific 75%-by-age-70 figure unverifiable; #gap/unsourced tag retained. Liau 2019 and Askari 2013 closed-access: not primary-PDF-verified; validated via PubMed abstract + secondary-source corroboration (Pastor-Tomás 2023 review). literature-checked-through: 2026-05-07 — recency search run; no superseding mutation-rate study found 2023–2026; BMC Geriatrics 2025 (PMID 40188076, n=552) noted as new epidemiology but does not supersede existing claims."
literature-checked-through: 2026-05-07
---


# Cherry Angioma

Cherry angiomas (also called Campbell de Morgan spots, senile hemangiomas, or ruby spots) are the most common benign vascular tumors of human skin. They present as bright-red to violaceous, dome-shaped papules 1–5 mm in diameter, distributed predominantly on the trunk and proximal extremities. Lesion count increases markedly with age and they affect the majority of adults over 70. Although clinically trivial and requiring no treatment, they are mechanistically interesting: somatic activating mutations in the Gq family GTPases (GNAQ, GNA11, GNA14) are present in the majority of lesional endothelial cells, making cherry angiomas a visible, body-surface-accessible example of age-driven somatic mutation accumulation and clonal expansion analogous to clonal hematopoiesis but localized to the dermal vasculature.

## Clinical features

- **Morphology**: 1–5 mm, bright red to purple, dome-shaped papules; blanchable with pressure (confirming vascular origin); soft and compressible.
- **Histology**: clusters of dilated thin-walled capillaries and post-capillary venules in the papillary dermis, lined by a single flattened endothelial layer; often separated by a pale stroma of edematous collagen (the "collarette" border seen on dermoscopy).
- **Distribution**: trunk and proximal extremities predominate; face, scalp, genitals, and distal extremities less commonly affected. The reason for trunk predominance is unexplained. #gap/no-mechanism
- **Number**: ranges from one or a few (young adults with early lesions) to hundreds or thousands in older individuals. High lesion burden correlates with advancing age but individual variation is substantial.
- **Behavior**: stable and benign; no malignant transformation potential. Occasionally bleed if traumatized; otherwise asymptomatic.

## Epidemiology and age-dependence

Cherry angiomas are rare before age 30 and increase sharply in prevalence after age 40, continuing to accumulate through the seventh and eighth decades. Widely cited (but textbook-level, not individually indexed) estimates suggest prevalence of ~5–10% at age 30, rising to >75% by age 70 [^qadeer-statpearls]. #gap/unsourced for the specific age-stratified percentages — these figures derive from clinical survey literature not individually indexed in PubMed; a dedicated epidemiological study with age-stratified population sampling does not appear to exist.

A clinical study of 250 dermatology patients aged ≥60 years (mean age 67.9 ± 7.3) in India found cherry angioma in 33.2% of cases, ranking it among the most common age-related skin signs alongside xerosis (45.2%) and seborrheic keratosis (42.6%) [^kumar-2021]. These are clinic-based prevalence estimates and likely undercount true community prevalence.

The Pastor-Tomás et al. 2023 review confirms that "cherry angiomas are the most common vascular tumors of the skin" and describes a growing clinical literature linking them to toxic exposures, medications (notably anti-VEGF therapy and immunosuppressants), systemic diseases, and immunosuppressed states — suggesting the lesions are not purely age-driven but can be triggered by angiogenic signals or inflammatory stimuli [^pastor-tomas-2023].

## Mechanism — somatic GNAQ/GNA11/GNA14 activating mutations

The dominant mechanistic story is somatic mosaic neoplasia driven by activating mutations in Gαq family GTPases. This is the direct mechanistic parallel to uveal melanoma (GNAQ/GNA11) and port-wine stains / Sturge-Weber syndrome (GNAQ R183Q in endothelium), and to the clonal somatic mutation model underlying clonal hematopoiesis — but in the dermal microvasculature.

### Mutation identity and frequency

Liau et al. 2019 performed histopathological and molecular analysis of 85 cherry hemangioma specimens (68 classic + 17 variants) and found recurrent GNA family mutations in 82% of cases [^liau-2019]:

- **GNA14** mutations: most common (35/85 = ~41% of all cases; ~47% of classic cases alone); the Q205L hotspot is the most frequent. GNA14 was identified as the most commonly mutated gene across vascular neoplasms studied.
- **GNAQ** mutations: 17/85 = ~20% of all cases (Q209L, Q209H most common)
- **GNA11** mutations: 7/85 = ~8% of all cases (Q209L hotspot)
- **GNA14 + GNAQ co-occurring** mutations: rare
- One case harbored KRAS G12V without GNA mutation

Klebanov et al. 2019 used targeted next-generation sequencing on 10 cherry angioma samples and found GNAQ or GNA11 hot-spot mutations in 5/10 (50%), with substitutions at Q209H, Q209R, and R183G positions [^klebanov-2019]. The lower frequency (50% vs 82%) likely reflects the smaller sample and different sequencing platform sensitivity.

### Downstream signaling

GNAQ/GNA11/GNA14 are alpha subunits of Gq-class heterotrimeric G proteins that couple GPCRs to phospholipase C-beta. The Q209L (or equivalent) hotspot substitution abolishes GTPase activity, locking the subunit in a constitutively active GTP-bound state. Downstream consequences include:

- **Persistent PLCβ activation** → IP3/DAG production → PKC activation → sustained MAPK/ERK signaling
- **YAP/TAZ nuclear translocation** via Rho GTPase and Hippo pathway suppression (a shared effector with uveal melanoma and Sturge-Weber)
- **Increased endothelial cell proliferation** without progression to frank malignancy in this tissue context (unlike uveal melanoma)

The same Q209L mutation in GNAQ is the driver of ~90% of uveal melanomas; why it produces a benign vascular proliferation in dermal endothelium vs. a metastatic melanoma in uveal melanocytes likely reflects cell-type-specific co-factors (additional oncogenic hits, epigenetic context, immune surveillance) — this is an open question. #gap/no-mechanism

### Somatic mosaic model

The lesional endothelial cells carrying the GNAQ/GNA11/GNA14 mutation represent a clonal expansion of a single mutated progenitor. The genomic instability framework applies directly: a single somatic error in a dermal endothelial progenitor, accumulated stochastically over decades, suffices to generate a visible clonal structure on the body surface. The visible lesion count thus tracks, imperfectly, the accumulated mutational burden in dermal endothelium. Whether the rate of mutation acquisition accelerates with age (as for somatic mutations in general) or whether clonal expansion is primarily facilitated by the aged dermal milieu (permissive environment) is not yet resolved. #gap/no-mechanism

| Dimension | Status |
|---|---|
| Mutation mechanism conserved in humans? | yes (human primary data) |
| Phenotype conserved in model organisms? | not tested |
| Causal relationship confirmed? | partial — constitutively active Gq mutations are present in majority of lesional cells; direct LoF functional rescue not yet demonstrated for cherry angioma specifically #gap/needs-replication |

## Mechanism — aged dermis as permissive substrate

Somatic mutation alone may be insufficient to drive visible lesion formation; the aged dermal microenvironment appears to provide a permissive substrate for clonal expansion:

### miR-424 / MEK1 / cyclin E1 axis

Nakashima et al. 2010 found that miR-424 expression is specifically downregulated in senile hemangioma tissue compared to normal skin (PLoS One, n=7 lesions + 7 controls) [^nakashima-2010]. miR-424 normally suppresses MEK1 and cyclin E1 at the protein level (without changing their mRNA). Loss of miR-424 leads to:

- Elevated MEK1 protein → sustained ERK phosphorylation → endothelial proliferation
- Elevated cyclin E1 → cell cycle progression
- Functional consequence confirmed by transfecting miR-424 inhibitors into normal dermal microvascular endothelial cells, which increases proliferation

This mechanism is distinct from the GNA hotspot mutations but may be additive or synergistic — both drive ERK/MAPK activation. Whether miR-424 loss is a cause or consequence of the GNA mutant clone is unknown. #gap/no-mechanism

The 2017 infantile hemangioma literature confirms miR-424 targeting of FGFR1 (bFGF receptor) as a separate mechanism in that distinct entity; the bFGF axis has also been described in aged skin, but direct evidence linking bFGF/FGFR1 to cherry angioma formation specifically is lacking. #gap/needs-replication

### VEGF and the angiogenic milieu

Aged dermis shows elevated VEGF, VEGFR expression, and pro-angiogenic cytokine tone. The 2025 paper by Bujoreanu et al. (n=60 psoriasis patients on biologic therapy, retrospective 2019–2024) found that IL-23 inhibitors were associated with higher angioma counts (mean 6.94 ± 7.00) compared to TNF-α inhibitors (5.06 ± 4.39) and biologic-naïve patients (5.89 ± 5.53), though the between-class difference was not statistically significant (Kruskal–Wallis H=0.451, p=0.798) [^bujoreanu-2025] #gap/needs-replication. Postmenopausal women showed higher angioma burden, implicating hormonal modulation of angiogenic signaling.

Sulfur mustard-exposed individuals develop cherry angiomas at elevated rates (Sardasht-Iran cohort: n=72 with angioma vs n=268 without); CCL2 (MCP-1) was significantly elevated in angioma cases (median 203.5 vs 187.1 pg/ml, p=0.035), while prolactin was paradoxically **lower** in cases (mean 10.13 vs 13.13, p=0.0096) [^askari-2013]. The CCL2 finding points to chemokine-mediated endothelial recruitment; the prolactin finding is unexplained and requires replication #gap/needs-replication. This is most relevant as a mechanistic probe rather than a model of normal aging.

### Senescent fibroblast SASP as a permissive signal (speculative)

Senescent dermal fibroblasts accumulate in aged skin and secrete the SASP — including VEGF-A, bFGF, HGF, IL-6, and MMP proteases — that collectively remodel the extracellular matrix and increase pro-angiogenic tone. Whether SASP signaling contributes to cherry angioma clonal expansion is mechanistically plausible but has not been directly tested. The link between [[cellular-senescence]] and cherry angioma formation is inferential, based on:

1. Temporal co-occurrence of senescent cell accumulation in skin and cherry angioma emergence
2. SASP components overlapping with known cherry angioma permissive signals (VEGF, MMP-driven ECM remodeling)

**There is no direct primary-source evidence linking SASP specifically to cherry angioma formation.** This remains a reasonable hypothesis. #gap/no-mechanism

## Hallmark alignment

Cherry angiomas illustrate the [[genomic-instability]] hallmark in a clinically visible, surface-accessible form:

- **Primary driver**: somatic activating GNA mutations in dermal endothelial progenitor cells, acquired stochastically over decades. The lesion is the visible product of an expanded mutant clone — direct embodiment of the somatic mutation accumulation model.
- **Permissive context**: the aged dermal milieu ([[altered-intercellular-communication]]) provides permissive angiogenic signals (VEGF, bFGF, SASP factors) that may lower the threshold for mutant-clone expansion into a visible lesion. The GNA mutation alone may be insufficient without this permissive context.
- **[[cellular-senescence]]** link is speculative and is not included in frontmatter `underlying-hallmarks` pending direct evidence. The theoretical link via SASP is discussed above.

## Cherry angiomas as a "Side A" illustration of aging clonal mosaicism

Aging interventions can be partitioned into two complementary axes:

- **Side A — slow accumulation of damage events.** Reduce the rate at which somatic mutations, epigenetic drift, telomere shortening, and other primary lesions accrue. Most current pharma-stage longevity interventions sit here (NAD+ precursors, mTOR/CR mimetics, sirtuin activators, antioxidants).
- **Side B — surveillance and clearance of cells that have already accumulated damage.** Aberrant cells are normally flagged cell-autonomously (via [[cellular-senescence]] or apoptosis) and cleared non-cell-autonomously by immune surveillance — NK cells, CD8 T cells, macrophages. With age, both flagging and clearance erode (see [[immunosenescence]] and the proposed [[disabled-adaptive-immunity]] hallmark candidate).

Cherry angiomas are an unusually clean **Side A illustration**: each lesion is the surface-visible product of a single completed clonal expansion event traceable to a discrete somatic mutation in a Gαq-family GTPase. Across the body of a 70-year-old, the lesion count is a (loose, non-quantitative) external readout of accumulated dermal-endothelial mutational burden — analogous to [[clonal-hematopoiesis]] in hematopoietic cells but without requiring a blood draw or sequencing. This makes them a useful pedagogical case for the [[genomic-instability]] hallmark.

They are a **weak Side B probe**, however. The aged immune system tolerates these lesions indefinitely, but probably not because surveillance has failed — three considerations argue against using cherry angiomas as evidence for surveillance decline:

1. **Mutation class is poorly immunogenic.** GNAQ Q209L is a single-residue gain-of-function in signaling, not a frame-shift or stop-codon-readthrough. The neoantigen burden of a Gαq-Q209L cell is minimal compared to e.g. mismatch-repair-deficient tumors.
2. **The lesion is clinically benign.** No invasion, no metastatic phenotype — the system that should have flagged "transformed cell" sees no transformation signature.
3. **Threshold effect.** Even immunogenic lesions clear less efficiently in aged tissue, but cherry angiomas don't pass that immunogenicity threshold to begin with.

The sharper Side B test case is **age-related cancer incidence**: the same somatic-clonal-expansion biology, but with mutations that *do* generate immunogenic neoantigens. Aged immune surveillance failure to clear pre-malignant clones is the operative mechanism behind much age-related cancer incidence — and is the conceptual home for the proposed [[disabled-adaptive-immunity]] hallmark candidate (immune surveillance failure as a complement to genomic-instability damage accrual).

### Implications for intervention against existing lesions

Because hallmark interventions are predominantly Side-A tools, they are poorly suited to regress already-present cherry angiomas. The mutant endothelial clones are stably proliferating, not senescent — [[senolytics]] are mechanistically off-target. [[mtor-inhibitors|mTOR inhibitors]] have demonstrated anti-vascular-anomaly effects in *other* lesion classes (lymphatic malformations, kaposiform hemangioendothelioma) and could plausibly modulate the GNAQ → ERK / mTOR axis, but no clinical data exist for cherry angioma and the systemic toxicity does not justify cosmetic-indication trials. The most direct mechanistic match is **MEK/ERK inhibition** (downstream of GNAQ), which sits outside the canonical longevity-intervention catalog and remains untested for this indication. #gap/no-mechanism

For already-present visible lesions, physical destruction (PDL, IPL, electrodesiccation) remains the only reliable intervention — see [Treatment](#treatment) below.

## Clinical associations and confounders

Cherry angiomas are not always purely age-driven; secondary triggers include:

| Trigger | Evidence quality |
|---|---|
| Anti-VEGF therapy (bevacizumab, sorafenib) — may paradoxically *increase* lesion count via rebound angiogenesis | case series; low-tier |
| Immunosuppression (post-transplant, biologic therapy) | cohort data; moderate |
| Sulfur mustard exposure | established case series (Iranian veterans) |
| Hormonal influences (postmenopausal, acromegaly) | observational; moderate |
| HHV-8 infection in some lesions | case-control; moderate |
| Eruptive presentation associated with internal malignancy ("sign of Leser-Trélat" analogy — unconfirmed) | anecdotal; very low; not established |

## Treatment

Cherry angiomas require no treatment unless cosmetically bothersome or repeatedly traumatized. Options:

- **Pulsed dye laser (PDL, 595 nm)**: first-line; selective photothermolysis of oxyhemoglobin; minimal scarring.
- **Intense pulsed light (IPL)**: second-line; similar principle.
- **Electrodesiccation or shave removal**: effective; slightly higher scar risk.
- **Cryotherapy**: adequate for small lesions.

No pharmacological intervention targeting the underlying GNA mutation pathway has been evaluated for cherry angioma. The benign nature makes systemic therapy inappropriate; topical ERK/MEK inhibitors are theoretically interesting but untested. #gap/needs-replication

## Diagnostic relevance — cherry angioma as a biopsy site

An increasingly recognized clinical use: intravascular large B-cell lymphoma (IVLBCL), a rare but aggressive lymphoma, preferentially colonizes the small dermal vessels and can be detected by random skin biopsy of cherry angiomas in patients with unexplained fever or stroke. Two recent case series (2023, 2026) document cherry angioma as a diagnostic biopsy target for IVLBCL [^zhao-2023]. The pathophysiology may involve preferential tumor colonization of GNA-mutant vascular niche structures, though this is unproven. #gap/no-mechanism

## Knowledge gaps

- **ICD-10 coding**: D18.01 (hemangioma of skin) is the closest ICD-10-CM code; cherry angioma does not have a dedicated code. ICD-10-CM D18.01 covers "hemangioma of skin and subcutaneous tissue." #gap/needs-canonical-id — verify whether ICD-10-CM D18.01 is the accepted billing code or whether a more specific code exists.
- **Age-stratified prevalence data**: no large population-based study with rigorously age-stratified prevalence appears to exist in the indexed literature. The widely cited "~75% by age 70" figure is textbook-derived and un-cited to a primary source. #gap/unsourced
- **Trunk distribution**: why cherry angiomas preferentially affect the trunk is not explained. UV light exposure (face/arms) does not appear to be the primary driver, distinguishing cherry angiomas from solar lentigines. #gap/no-mechanism
- **Mutation timing vs clonal expansion**: unclear whether GNA mutations are acquired more frequently with age (age-related mutagenesis) or are acquired at similar rates throughout life with clonal expansion occurring preferentially in the aged milieu. #gap/no-mechanism
- **miR-424 mechanism and GNA mutation interaction**: whether miR-424 loss and GNA mutations are mechanistically linked or are two independent routes to lesion formation is unknown. #gap/no-mechanism
- **SASP / cellular senescence contribution**: speculative; no direct primary-source evidence. Would require co-localization studies of p16+/SA-β-gal+ dermal fibroblasts adjacent to cherry angioma lesions with functional rescue experiments.
- **GNA14 specificity**: GNA14 (the most common mutation by Liau 2019) is understudied compared to GNAQ/GNA11; its specific downstream effectors in endothelial cells relative to uveal melanoma-relevant pathways are not characterized. #gap/needs-replication

## Footnotes

[^qadeer-statpearls]: Qadeer HA, Singal A, Patel BC · "Cherry Hemangioma" · StatPearls [Internet] · 2024 update · review · n/a · model: human clinical summary · "their number tends to increase with age" — textbook-level prevalence estimates; no age-stratified primary data cited #gap/unsourced for specific percentages

[^kumar-2021]: doi:10.4103/ijd.IJD_245_20 · Kumar D, Das A, Bandyopadhyay D et al. · Indian J Dermatol 2021 · observational cross-sectional · n=250 elderly patients (≥60 yr; 164M/86F; mean age 67.87 ± 7.29 yr) · cherry angioma prevalence 33.2%; xerosis 45.2%; seborrheic keratosis 42.6% · verified via PubMed abstract (PMID 33911297) + Europe PMC · model: human clinic-based dermatology cohort (India)

[^pastor-tomas-2023]: doi:10.1016/j.ad.2022.10.040 · Pastor-Tomás N, Bañuls J, Nagore E · Actas Dermo-Sifiliogr 2023 · review · n/a · "most common vascular tumors of the skin"; associations with toxic exposures (sulfur mustard, nitrogen mustard, 2-butoxyethanol), medications (ramucirumab, tamsulosin, cyclosporine), nonmalignant diseases (pregnancy, diabetes, acromegaly), immunosuppression (HHV-8, GvHD), and cancer (melanoma, NMSC) reviewed; Table 1 provides case-level evidence quality · verified via primary PDF

[^liau-2019]: doi:10.1038/s41379-019-0284-y · Liau JY, Lee JC, Tsai JH, Chen CC, Chung YC, Wang YH · Modern Pathology 2019 · observational histopathological + molecular study (Sanger sequencing + MassARRAY) · n=85 (68 classic cherry hemangioma + 17 variants) · GNA mutation rate 82% (equal in classic and variant groups); GNA14 most common (32 classic + 3 variants = 35/85 = 41% of all; ~47% of classic alone); GNAQ 12 classic + 5 variants = 17/85 = ~20%; GNA11 4 classic + 3 variants = 7/85 = ~8%; all mutations mutually exclusive; one case KRAS G12V without GNA mutation · verified via PubMed abstract (PMID 31189994) + Europe PMC abstract; closed-access; primary PDF not available #gap/no-fulltext-access · model: human surgical specimens

[^klebanov-2019]: doi:10.1001/jamadermatol.2018.4231 · Klebanov N, Lin WM, Artomov M, Shaughnessy M, Njauw CN, Bloom R et al. · JAMA Dermatol 2019 · molecular study · n=10 cherry angioma FFPE specimens (6F/4M, median age 54) · 5/10 (50%) GNAQ or GNA11 hotspot mutations: GNAQ Q209H (×2), GNAQ Q209R (×1), GNAQ R183G (×1), GNA11 Q209H (×1); 20% NF1 nonsense mutations · sequencing only — no functional/cell culture experiments reported · verified via PMC6440195 full text · model: human surgical specimens

[^nakashima-2010]: doi:10.1371/journal.pone.0014334 · Nakashima T, Jinnin M, Etoh T, Fukushima S, Masuguchi S, Maruo K, Inoue Y, Ishihara T, Ihn H · PLoS One 2010 · in-vitro + ex-vivo · n=7 senile hemangioma + 7 normal controls (also studied: 3 venous malformation, 4 angiosarcoma, 4 venous lake, 3 infantile hemangioma) · miR-424 downregulated in lesions vs normal skin (p<0.05, Mann-Whitney); MEK1 and cyclin E1 protein elevated without mRNA change; miR-424 inhibitor in HDMECs increases MEK1/cyclin E1 protein and promotes proliferation; MEK1 or cyclin E1 siRNA knockdown reduces cell number · verified via primary PDF · model: human tissue + human dermal microvascular endothelial cells (HDMECs)

[^bujoreanu-2025]: doi:10.3390/medicina61040565 · Bujoreanu FC, Radaschin DS, Fulga A, Bujoreanu Bezman L et al. · Medicina (Kaunas) 2025 · retrospective observational · n=60 moderate-to-severe psoriasis patients on biologic therapy (2019–2024, Romania) · IL-23 inhibitors (n=17) associated with higher angioma counts (mean 6.94 ± 7.00) vs TNF-α inhibitors (n=18; 5.06 ± 4.39) and biologic-naïve (n=47; 5.89 ± 5.53); between-class difference not statistically significant (H=0.451, p=0.798) · postmenopausal women (13.44 ± 5.79 vs 5.75 ± 3.40, p=0.011) and psoriatic arthritis patients (9.64 ± 6.60 vs 3.71 ± 3.09, p<0.001) showed higher angioma burden · verified via primary PDF · model: human

[^askari-2013]: doi:10.1016/j.intimp.2012.12.016 · Askari N, Vaez-Mahdavi MR, Moaiedmohseni S, Khamesipour A et al. · Int Immunopharmacol 2013 · observational case-control · n=72 with cherry angioma + n=268 without (Sardasht-Iran cohort, sulfur mustard-exposed) · CCL2 (MCP-1) significantly elevated in angioma cases (median 203.5 vs 187.1 pg/ml, p=0.035); prolactin significantly **lower** in cases (mean 10.13 vs 13.13, p=0.0096); IL-8, RANTES, CX3L1 not significantly different · closed-access; verified via PubMed abstract (PMID 23370299) + Pastor-Tomás 2023 review corroboration #gap/no-fulltext-access · model: human (Iranian chemical warfare veterans)

[^zhao-2023]: doi:10.1177/19418744231183483 · Zhao CW, Fan TH, Denize T et al. · Neurohospitalist 2023 · case report + literature review · n=1 · 68-year-old male with recurrent strokes + spinal cord infarction despite escalating anticoagulation; IVLBCL diagnosed via skin biopsy of cherry angioma; treated with methotrexate + rituximab-based chemotherapy; no clinical improvement; family elected comfort care · by 2024 the broader literature had documented at least 21 cases of IVLBCL diagnosed via cherry angioma biopsy (Mol Clin Oncol 2024 case report, PMID 39347477) · verified via PubMed abstract (PMID 37701250); closed-access; PDF not available #gap/no-fulltext-access · model: human
