---
type: protein
aliases: [HAMP, hepcidin antimicrobial peptide, HEPC, LEAP1, liver-expressed antimicrobial peptide 1, hepcidin-25]
uniprot: P81172
ncbi-gene: 57817
hgnc: 15598
ensembl: ENSG00000105697
genage-id: null
mouse-ortholog: "Hamp (NCBI Gene 84506)"
pathways: ["[[bmp-signaling]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: "HAMP is predominantly expressed in liver; GTEx bulk RNA-seq does not show a monotonic aging correlation in available tissue cohorts (liver tissue n is small in GTEx). Plasma hepcidin measured by mass spectrometry in cross-sectional aging cohorts shows higher levels in older adults, attributed to inflammaging-driven IL-6 rather than intrinsic HAMP transcription change. #gap/needs-gtex-aging-correlation"
mr-causal-evidence: not-tested
caused-by: ["[[il-6]]", "[[bmp-signaling]]", "[[chronic-inflammation]]"]
causes: ["[[anemia-of-aging]]", "[[ferroportin]]"]
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Nemeth 2004 (JCI), Koenig 2014 (Nutrients), Billesbolle 2020 (Nature) PDFs read in full. Park 2001 (JBC) PDF unavailable but abstract confirmed via PubMed (PMID 11113131). Nicolas 2001 (PNAS) abstract confirmed via PubMed (PMID 11447267) — PMC OA copy exists (PMCID 37512). Dugan 2026 (J Nutr) abstract confirmed via PubMed (PMID 41825741). Chew 2025 and Modi 2025 papers confirmed via PubMed. Arezes 2020 (Blood Adv) DOI is wrong — flagged. Canonical-DB identity fields (UniProt P81172, NCBI Gene 57817, HGNC 15598, Ensembl ENSG00000105697) confirmed against live UniProt REST API. Multiple quantitative and qualitative corrections applied — see verified-scope notes in page body and corrections summary."
---


# Hepcidin (HAMP)

Hepcidin is the master regulator of systemic iron homeostasis — a 25-amino-acid, β-sheet hairpin peptide hormone synthesized predominantly in the liver that controls iron absorption from the gut, iron recycling from macrophages, and iron mobilization from hepatic stores. It does so by binding [[ferroportin]] (SLC40A1), the only known mammalian iron exporter, and triggering its internalization and degradation. In aging, hepcidin sits at the intersection of two major biology streams: **inflammaging** chronically elevates hepcidin via IL-6 → STAT3 signaling, progressively sequestering iron in macrophages and driving the anemia of inflammation component of [[anemia-of-aging]]; and in women, hepcidin is physiologically suppressed throughout the reproductive years by iron deficiency and erythropoietic demand, creating a distinct sex-specific iron biology with consequences across the entire lifespan.

---

## Identity

- **UniProt:** P81172 (HEPC_HUMAN) — reviewed, Swiss-Prot; confirmed live 2026-06-14
- **NCBI Gene:** 57817
- **HGNC:** 15598 (symbol HAMP)
- **Ensembl:** ENSG00000105697
- **Alternative gene names:** HEPC, LEAP1
- **Mouse ortholog:** Hamp (NCBI Gene 84506); functionally conserved; mice with absent hepcidin expression (discovered in USF2-knockout mice by Nicolas et al.) develop progressive multivisceral iron overload phenocopying juvenile hemochromatosis [^nicolas2001]
- **GenAge:** no entry — hepcidin is not in the HAGR GenAge human database as of 2026-06-14 #gap/needs-canonical-id

**Protein structure.** The HAMP gene encodes an 84-amino-acid prepro-hepcidin precursor:
- Signal peptide: residues 1–24 (directs to secretory pathway)
- Propeptide: residues 25–59 (cleaved by furin-type proprotein convertases)
- Mature hepcidin-25: residues 60–84 (2,789.8 Da; the principal bioactive form)
- Hepcidin-20: residues 65–84 (shorter variant detected in urine; weaker activity)

The 25-amino-acid mature peptide folds into a **β-sheet hairpin** stabilized by **four disulfide bonds** (C60–C76, C63–C66, C64–C72, C67–C75 in mature peptide numbering), giving it unusual structural rigidity and protease resistance. The disulfide array is essential for receptor binding; reduction inactivates the peptide [^nemeth2021]. Hepcidin was independently identified as a urinary antimicrobial peptide active against *E. coli* and *Candida albicans* [^park2001]; antimicrobial activity is now considered secondary relative to the iron-regulatory function.

---

## Mechanism of action: the hepcidin-ferroportin axis

Hepcidin controls systemic iron flux by binding and degrading [[ferroportin]] (FPN1/SLC40A1), the only known cellular iron exporter in mammals [^nemeth2021].

The molecular mechanism — resolved at atomic resolution by cryo-EM in 2020 [^billesbolle2020] — is two-step:

1. **Occlusion:** Hepcidin inserts its N-terminal region into the ferroportin extracellular cavity (the substrate-binding/transport pathway), blocking the iron export channel directly.
2. **Endocytosis and degradation:** Hepcidin binding triggers ferroportin ubiquitination, internalization, and lysosomal degradation of the hepcidin-ferroportin complex. Billesbolle 2020 further shows that hepcidin binding affinity for ferroportin is ~80-fold higher when iron is bound to ferroportin, suggesting hepcidin preferentially targets iron-loaded ferroportin molecules for degradation. The specific E3 ubiquitin ligase(s) involved remain to be fully characterized. #gap/no-mechanism (ubiquitination machinery identity)

Ferroportin is expressed at high density on three critical iron-export cell surfaces:
- **Duodenal enterocytes** (basolateral membrane) — exports absorbed dietary iron into portal blood
- **Reticuloendothelial macrophages** (splenic red pulp, hepatic Kupffer cells) — exports iron recycled from senescent erythrocytes (20–25 mg/day)
- **Hepatocytes** — exports iron released from stored ferritin

When hepcidin rises, all three export sites are shut down simultaneously: dietary iron absorption decreases, iron remains sequestered in macrophages, and hepatic mobilization is blocked. The result is rapid hypoferremia — plasma iron falls within hours of hepcidin injection in experimental models [^nemeth2021].

| Cell type | Ferroportin location | Effect of hepcidin rise |
|---|---|---|
| Duodenal enterocyte | Basolateral | Blocks dietary iron entry to portal blood |
| Splenic macrophage | Membrane | Iron recycled from erythrocytes trapped intracellularly |
| Hepatic Kupffer cell | Membrane | Liver iron recycling blocked |
| Hepatocyte | Membrane | Hepatic stored iron mobilization blocked |

---

## Upstream regulation of hepcidin synthesis

Hepcidin is regulated by at least four converging signal streams, all integrating on the HAMP gene promoter:

### 1. Iron-sensing: the BMP6/HJV/SMAD axis

**The canonical iron-sensing pathway.** When body iron rises, BMP6 (secreted from hepatic sinusoidal endothelial cells, proportional to local iron) binds to a co-receptor complex of BMPR1/BMPR2 and hemojuvelin (HJV/RGMc), activating SMAD1/5/8 → SMAD4 → transcription of HAMP [^ganz2011]. HJV is the critical specificity determinant: it amplifies BMP6 signaling ~10–100-fold; HJV mutations cause the most severe form of juvenile hemochromatosis (Hemochromatosis type 2A). TMPRSS6 (matriptase-2) is a membrane serine protease that cleaves HJV, dampening BMP6-SMAD signaling and hepcidin — loss-of-function TMPRSS6 mutations cause iron-refractory iron deficiency anemia (IRIDA).

See [[bmp-signaling]] for the pathway context.

### 2. Inflammatory sensing: IL-6/JAK1/STAT3

**The inflammaging pathway.** Interleukin-6 ([[il-6]]) — the canonical SASP cytokine and primary mediator of the acute-phase response — signals through the IL-6R → STAT3 axis to induce HAMP transcription [^nemeth2004]. This is not a secondary effect on the BMP pathway; Nemeth 2004 demonstrates that IL-6 is the necessary and sufficient cytokine for hepcidin induction during inflammation, with IL-6–neutralizing antibodies completely ablating LPS- and macrophage-conditioned-medium–induced hepcidin mRNA in human hepatocytes. IL-6 → hepcidin induction is the key mechanistic link between [[chronic-inflammation]] and iron sequestration in [[anemia-of-aging]]. The specific promoter element and co-activator interactions (STAT3 vs SMAD4 additivity) are characterized in subsequent literature and reviewed in [^ganz2011].

In the Nemeth 2004 human experiment (n=6 healthy volunteers), IL-6 infusion at 30 μg/h for 3 hours produced a **7.5-fold** rise in urinary hepcidin measured 2 hours after the end of the infusion, accompanied by a 34% fall in serum iron and 33% fall in transferrin saturation (both p<0.001) [^nemeth2004]. Hepcidin returned toward baseline by 24 hours. In aging, low-grade sustained IL-6 elevation produces a chronic low-level hepcidin rise that progressively restricts iron availability to erythroid precursors.

### 3. Erythropoietic demand: erythroferrone (ERFE)

When erythropoietic demand increases (blood loss, hemolysis, exogenous EPO, hypoxia), erythroid precursors in the bone marrow release **erythroferrone (ERFE/FAM132B)**, a peptide that suppresses hepatic hepcidin by sequestering BMP ligands (BMP6 in particular) through a heparin/heparan-sulfate-dependent composite mechanism [^arezes2018][^arezes2020b]. This prevents hepcidin from blocking iron supply to the expanding erythron. ERFE-mediated hepcidin suppression is the key mechanism by which erythropoiesis demands its share of iron. In aging, the ERFE response may be blunted in the context of EPO hyporesponsiveness. The mechanistic composite heparin-binding detail is from Mast 2026 [^arezes2020b].

### 4. Hypoxia and iron deficiency

Low systemic oxygen (hypoxia, altitude) and iron deficiency independently suppress hepcidin via multiple routes: hypoxia-inducible factor 2α (HIF2α) directly reduces HAMP transcription; iron deficiency reduces BMP6 ligand availability. Both mechanisms ensure that iron supply increases when oxygen delivery is compromised. The interaction with erythropoiesis is tightly coupled.

---

## Hepcidin in aging: the inflammaging connection

The central aging story for hepcidin is the **IL-6 → hepcidin → iron sequestration** axis:

**Inflammaging drives IL-6 elevation.** Chronic low-grade inflammation ([[chronic-inflammation]]) — driven by senescent cell SASP, gut microbiome shifts, and adipose tissue expansion — produces sustained low-level IL-6 in older adults. Plasma IL-6 rises approximately 2-fold per decade of age in epidemiological cohorts [^franceschi2000; #gap/unsourced — primary cohort data for IL-6 rise per decade requires independent citation].

**Elevated hepcidin sequesters iron.** Chronically elevated hepcidin locks iron in macrophages and blocks duodenal absorption. The liver may have adequate or even elevated iron stores (reflected in elevated serum ferritin as an acute-phase reactant), while iron delivery to the bone marrow is restricted.

**The result is functional iron deficiency.** Iron is present in the body but is not accessible for erythropoiesis. Serum iron is low, TIBC is low, ferritin is high, hepcidin is high — the classic fingerprint of **anemia of chronic disease/inflammation (ACI)**. In older adults, this functional iron deficiency accounts for approximately one-third of all anemia cases and contributes to the "unexplained" fraction as well [^guralnik2004].

This axis forms part of the mechanistic chain:
```
Cellular senescence → SASP → IL-6 ↑ → hepcidin ↑ → ferroportin degraded
→ iron sequestered in macrophages → functional iron deficiency
→ erythropoiesis restricted → anemia of aging
```

See [[anemia-of-aging]] for the full clinical picture and etiologic breakdown.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IL-6/STAT3/HAMP axis is human; IL-6 injection in humans confirmed rapid hepcidin induction [^nemeth2004] |
| Phenotype conserved in humans? | yes — anemia of inflammation is a well-characterized human clinical entity |
| Replicated in humans? | yes — observational; ERFE-hepcidin axis in bone marrow is partially characterized in humans; MR data limited |

---

## Women's health: hepcidin suppression across the reproductive lifespan

Hepcidin occupies a uniquely important position in women's iron biology because it is **physiologically suppressed throughout the reproductive years**, allowing compensatory iron absorption to partially offset chronic menstrual iron loss.

### Menstrual iron loss and hepcidin set-point

Premenopausal women lose iron with every menstrual cycle. This chronic deficit drives lower serum ferritin (typically 15–60 ng/mL in premenopausal women vs 30–200 ng/mL in age-matched men) and lower plasma hepcidin levels. The iron-deficiency suppression of hepcidin (via reduced BMP6 and possibly direct iron-sensing pathways) upregulates duodenal ferroportin → increases dietary iron absorption — a compensatory adaptation. Women with **heavy menstrual bleeding (HMB, >80 mL/cycle)** have proportionally greater iron losses, lower ferritin, and further-suppressed hepcidin, making them especially vulnerable to iron deficiency [^koenig2014].

**The inflammatory override.** In women with both HMB and a concurrent inflammatory condition (endometriosis, inflammatory bowel disease, obesity), the IL-6 → STAT3 axis can **override** the iron-deficiency suppression of hepcidin. Hepcidin remains elevated despite low iron stores because inflammation is the dominant input. This produces **refractory iron deficiency** — dietary iron and even oral iron supplementation are ineffective because hepcidin is blocking absorption via ferroportin degradation. Intravenous iron, which bypasses the gut absorption step and loads hepatocytes and macrophages directly, is more effective in this setting. #gap/needs-replication (specific data on hepcidin levels in HMB + inflammation phenotype are limited; extrapolated from ACI mechanism data [^nemeth2004])

### Pregnancy

Hepcidin undergoes a progressive fall during pregnancy [^koenig2014]:
- **First trimester:** Hepcidin concentrations are near-normal. In one longitudinal study (n=42), median serum hepcidin was 16 ng/mL (range 4–97) in the first trimester [^koenig2014].
- **Second trimester onward:** Hepcidin falls progressively. In the same cohort, median hepcidin was 11 ng/mL (range 6–36) in the second trimester and 9.5 ng/mL (range 1–43) in the third trimester (p<0.001 vs first trimester) [^koenig2014].
- **Third trimester:** Hepcidin reaches its lowest levels in pregnancy; the lowest hepcidin values are observed in the third trimester across longitudinal studies and those assessing the third trimester specifically [^koenig2014]. The precise drivers of hepcidin suppression during pregnancy (erythropoietic expansion, fetal iron demand, or pregnancy-specific suppressor signals) remain incompletely characterized as of 2014.

The fall in hepcidin allows greater iron bioavailability for fetal transfer. Women with undetectable serum hepcidin transferred a significantly greater quantity of maternally-ingested iron to their fetus compared to women with detectable hepcidin [^koenig2014]. #gap/no-mechanism (the molecular signal(s) suppressing hepcidin during pregnancy are not fully established; ERFE is a candidate but the pregnancy-specific suppressor has not been definitively identified as of this review)

Iron supplementation in pregnancy helps maintain iron availability for expanding erythropoiesis and fetal transfer, and helps prevent the hepcidin rise associated with infection and inflammation complicating pregnancy. A 2026 RCT examined hepcidin and erythroferrone levels in iron-deficient pregnant women receiving iron supplementation (PMID 41892002; closed OA; full text not reviewed). #gap/needs-replication

### Postmenopausal transition

After the final menstrual period, the chronic iron-deficiency suppression of hepcidin is removed. Two simultaneous processes occur:
1. Iron stores rise (no more menstrual losses) → BMP6 rises → hepcidin rises toward male-equivalent levels over ~5–10 years.
2. Inflammaging-associated IL-6 rise begins contributing independently to hepcidin elevation.

The result is that postmenopausal women have higher hepcidin than their premenopausal selves and eventually approach hepcidin levels comparable to age-matched men. The clinical relevance is bidirectional: women who were chronically iron-depleted may improve iron status; women who accumulated sub-clinical inflammatory load may experience the hepcidin-driven iron sequestration that contributes to anemia of aging. See [[ferritin]] § Postmenopausal ferritin rise for the accompanying ferritin dynamics.

---

## Druggability and therapeutic landscape

**Aging-context druggability tier: 2.** The hepcidin-ferroportin axis has multiple defined druggable nodes and Phase 2/3 clinical compounds exist — but none is in a validated aging indication. The tier reflects clinical-stage probes against the pathway, not aging-specific approval.

### Hepcidin agonists / mimetics (for iron-overload states)

The primary clinical indication for hepcidin agonism is **iron overload** — hereditary hemochromatosis, polycythemia vera (where elevated erythropoiesis suppresses hepcidin and causes iron loading), and transfusion-dependent disorders with iron overload.

**Rusfertide (PTG-300)** is the most advanced hepcidin mimetic in clinical development. It is a synthetic peptide that reproduces the ferroportin-binding activity of hepcidin-25. Phase 3 VERIFY trial (NCT05210790, n=293, polycythemia vera, active but not recruiting as of 2026-06-14) and the extension study THRIVE (NCT06033586) are ongoing. Phase 2 open-label data in PV (n=20) showed rusfertide rapidly reduced hematocrit below 45% in 85% of patients by Week 8, with no patients requiring phlebotomy during treatment [^chew2025]. Rusfertide pharmacokinetics (subcutaneous, once weekly 60 mg for 5 weeks) characterized in an 18-subject Phase 1 RCT [^modi2025pk]. No aging indication; no anemia-of-aging trial is registered. Cardiac safety (QTc prolongation) assessed in a thorough QT crossover study — no significant effect [^modi2025cardiac].

**Minihepcidins** are short N-terminal hepcidin analogs (7–9 aa) engineered for oral bioavailability and enhanced ferroportin-binding stability; several candidates are in preclinical development, none yet Phase 2. #gap/long-term-unknown

### Hepcidin antagonists / pathway inhibitors (for anemia of inflammation / CKD)

The primary aging-relevant therapeutic direction is **antagonizing hepcidin** to liberate sequestered iron and restore erythropoiesis in ACI and anemia of aging.

Approaches in clinical or late-preclinical development include:
- **Anti-hepcidin antibodies:** Monoclonal antibodies targeting hepcidin directly (e.g., lexaptepid pegol / PEG-HPA0G1 — an RNA-based anti-hepcidin spiegelmer from NOXXON Pharma; multiple anti-hepcidin mAb programs from Amgen and others). Preclinical data showed full anti-hepcidin antibody treatment mobilizes iron and improves anemia in mouse models; however, no Phase 3 anti-hepcidin mAb has reported positive results in ACI. #gap/needs-human-replication
- **TMPRSS6 overexpression / restoration:** Hepatic TMPRSS6 (matriptase-2) cleaves HJV and suppresses hepcidin. AAV-mediated TMPRSS6 delivery is a gene-therapy approach in preclinical development for conditions with elevated hepcidin. Not in aging trials.
- **ALK2 inhibitors:** ALK2 (ACVR1) is a BMP type-I receptor that mediates hepcidin induction in inflammation (separate from the canonical BMP6/BMPR1 pathway). Preclinical ALK2 inhibitors (e.g., INCB000928) lower hepcidin and liberate spleen iron for erythropoiesis in murine ACI models; clinical trials ongoing for myeloid conditions and anemia of inflammation.
- **Vamifeport:** An oral ferroportin stabilizer (prevents hepcidin-induced ferroportin degradation by competing with the ubiquitination trigger), in clinical stage. Phase 2b in CKD anemia; 2026 murine lupus nephritis data published (PMID 41833896). Not yet in aging-specific anemia trials.

**HIF-PH inhibitors (roxadustat, daprodustat, vadadustat):** While not targeting hepcidin directly, HIF prolyl-hydroxylase inhibitors mimic hypoxia, suppress hepcidin, and stimulate erythropoiesis. FDA-approved for CKD anemia (roxadustat in some jurisdictions, daprodustat FDA-approved 2023). Their effect on hepcidin in aging anemia outside CKD is not established. A 2026 meta-analysis confirmed roxadustat efficacy in peritoneal dialysis CKD anemia (PMID 42185813). Hepcidin suppression is part but not all of the HIF-PH mechanism.

**Aging indication gap.** No compound is in an aging-specific hepcidin-modulation trial as of 2026-06-14. The closest proxy are the **anemia-of-elderly** studies — the PACTTE RCT (PMID 37114660) used IV iron in unexplained anemia of the elderly (crossover, n=not large) to assess erythropoiesis biomarkers, demonstrating that iron was limiting in at least a subset; the testosterone-mediated erythropoiesis RCT (PMID 32785689, Artz et al. 2020, *JCEM*) showed iron flux markers changed with testosterone in older men with unexplained or iron-deficiency anemia. Neither directly tested hepcidin antagonism as a mechanistic endpoint.

---

## Caloric restriction interaction (R25 find — RCT)

A 2026 RCT (PMID 41825741, Dugan et al., *J Nutr*, the CALERIE Phase 2 caloric restriction trial, n=218 randomized participants, mean age 38.1 ± 7.2 y, 70% female) examined hepcidin over 2 years of 25% caloric restriction vs ad libitum control. The result: **no significant group × time interaction for hepcidin** (p>0.05) — 25% CR did not significantly alter plasma hepcidin compared to control, and there were no significant differences in any iron status indicator. Anemia prevalence remained >5% in both groups across all timepoints. The authors conclude that prolonged CR in the absence of malnutrition does not adversely affect iron status or hepcidin in healthy adults. This does not support the hypothesis that CR reduces inflammaging-driven hepcidin elevation, at least in a relatively young (mean age 38), non-elderly cohort. Whether CR would modulate hepcidin in older adults with established inflammaging-driven hepcidin elevation is unknown. #gap/needs-replication (no older-adult CR-hepcidin trial exists; the CALERIE cohort was not primarily an aging population).

---

## Interaction with other hallmarks

| Hallmark | Mechanistic link | Evidence |
|---|---|---|
| [[chronic-inflammation]] | IL-6 from SASP and adipose/systemic inflammation is the primary driver of hepcidin elevation in aging; hepcidin is the effector that converts inflammation into iron sequestration | Strong: IL-6/STAT3/HAMP axis established in humans [^nemeth2004]; anemia of inflammation well-characterized clinically [^guralnik2004] |
| [[stem-cell-exhaustion]] | Hepcidin-driven iron restriction limits erythroid progenitor output from aged HSC niches, compounding HSC-intrinsic dysfunction | Moderate: mechanistic link established; human quantitative data limited |
| [[cellular-senescence]] | Senescent cells are a primary source of IL-6 (SASP) → upstream of hepcidin elevation | Moderate (mechanistic); the causal contribution of SASP-IL-6 specifically (vs other IL-6 sources) to hepcidin elevation in aging is not quantified |
| [[genomic-instability]] | CHIP-associated somatic mutations in HSCs (DNMT3A, TET2) can alter erythroid output and EPO sensitivity, compounding hepcidin-driven iron restriction | Limited (association); causal chain through hepcidin not established |

---

## Cross-pathway summary

**Hepcidin as a network node.** Hepcidin is not a hallmark driver itself, but it sits at the intersection of multiple aging hallmark streams and is an unusually tractable downstream *effector* — it is directly measurable in plasma, its targets are well-characterized, and pharmacological modulators exist. This makes it a potential biomarker of inflammaging-driven iron dysregulation and a rational therapeutic target for the anemia-of-inflammation component of anemia of aging, even before aging-specific trials are completed.

The strongest therapeutic rationale is: **if inflammaging drives hepcidin up, and hepcidin causes functional iron deficiency in older adults, then reducing the inflammatory load (e.g., senolytic treatment, anti-IL-6R) should reduce hepcidin and improve anemia without iron supplementation**. This is plausible but untested in humans in the anemia-of-aging context. #gap/needs-human-replication

---

## Limitations and gaps

- `#gap/needs-canonical-id` — No GenAge HAGR entry for HAMP as of 2026-06-14; hepcidin is a candidate given its central role in aging iron biology.
- `#gap/needs-human-replication` — The causal contribution of inflammaging-driven hepcidin elevation specifically (vs other ACI mechanisms) to anemia of aging has not been quantified with a mechanistic RCT targeting hepcidin.
- `#gap/needs-human-replication` — Anti-hepcidin strategies (anti-hepcidin antibodies, ALK2 inhibitors, vamifeport) for anemia of aging/inflammation have not reached Phase 3 positive results as of 2026-06-14.
- `#gap/needs-replication` — Hepcidin suppression in HMB + concurrent inflammation as the mechanism of refractory iron deficiency in premenopausal women is mechanistically established but not directly quantified in large clinical cohorts.
- `#gap/dose-response-unclear` — The hepcidin threshold that meaningfully restricts iron availability to erythroid precursors in aging humans is not defined; mass-spectrometry hepcidin assays are not yet standardized.
- `#gap/long-term-unknown` — No powered aging-outcome trial of hepcidin modulation exists; rusfertide trials focus on polycythemia vera, not anemia of aging.
- `#gap/unsourced` — IL-6 rise per decade of age quantification — commonly stated claim; requires primary cohort citation beyond Franceschi 2000 (full text not re-verified here).
- ✅ Resolved (2026-06-14) — [[ferroportin]] now exists as a full atomic page (SLC40A1 structure-function, cryo-EM, ferroportin-disease genetics, vamifeport).

---

## Footnotes

[^park2001]: doi:10.1074/jbc.m008922200 · PMID 11113131 · Park CH, Valore EV, Waring AJ, Ganz T · "Hepcidin, a urinary antimicrobial peptide synthesized in the liver" · *J Biol Chem* 276(11):7806–7810 · 2001 · research article (biochemical / peptide characterization) · n=N/A · identified hepcidin as a cysteine-rich peptide from human urine; two predominant forms Hepc25 and Hepc20 with 8 cysteines connected by intramolecular disulfide bonds (= 4 disulfide bonds); 84-aa prepropeptide; liver as primary mRNA source; antimicrobial activity vs *E. coli*, *S. aureus*, *S. epidermidis*, group B Streptococcus, *C. albicans*, *A. fumigatus*, *A. niger* · abstract confirmed via PubMed 2026-06-14; full PDF not obtained (JBC publisher full text blocked)

[^nemeth2004]: doi:10.1172/jci200420945 · Nemeth E, Rivera S, Gabayan V, Keller C, Taudorf S, Pedersen BK, Ganz T · "IL-6 mediates hypoferremia of inflammation by inducing the synthesis of the iron regulatory hormone hepcidin" · *J Clin Invest* 113(9):1271–1276 · 2004 · in-vivo (human volunteers n=6 + mouse models) · IL-6 infusion (30 μg/h × 3 h) in 6 healthy volunteers produced a 7.5-fold rise in urinary hepcidin at 2 h post-infusion, with serum iron falling 34% and transferrin saturation falling 33% (both p<0.001); IL-6-knockout mice failed to induce hepcidin or develop hypoferremia after turpentine abscess; IL-6-neutralizing antibodies completely ablated LPS- and macrophage-conditioned-medium–driven hepcidin mRNA induction in human hepatocytes; established IL-6/STAT3/HAMP as the primary inflammatory induction pathway · bronze OA (full PDF verified 2026-06-14)

[^nicolas2001]: doi:10.1073/pnas.151179498 · PMID: 11447267 · PMC: 37512 · Nicolas G, Bennoun M, Devaux I, Beaumont C, Grandchamp B, Kahn A, Vaulont S · "Lack of hepcidin gene expression and severe tissue iron overload in upstream stimulatory factor 2 (USF2) knockout mice" · *PNAS* 98(15):8780–8785 · 2001 · in-vivo (mouse knockout model: Mus musculus) · key finding: USF2-knockout mice fortuitously lacked hepcidin gene expression (hepcidin was discovered as a co-absent gene in this model) and developed progressive multivisceral iron overload with non-transferrin-bound iron accumulating in pancreas and heart; splenic iron was paradoxically lower; first demonstration that hepcidin loss-of-function recapitulates the iron-overload phenotype of hereditary hemochromatosis · NOTE: this is a USF2-KO mouse where hepcidin expression was absent, not a targeted Hamp-KO; the same iron-overload conclusion holds · abstract confirmed via PubMed 2026-06-14; PMC OA copy available (PMCID 37512)

[^ganz2011]: doi:10.1146/annurev-med-050109-142444 · Ganz T, Nemeth E · "Hepcidin and disorders of iron metabolism" · *Annu Rev Med* 62:347–360 · 2011 · review · ~386 citations · covers BMP6/HJV/SMAD pathway as iron-sensing upstream regulators of HAMP; HJV co-receptor function; TMPRSS6 as negative regulator; disease states of hepcidin dysregulation

[^nemeth2021]: doi:10.3390/ijms22126493 · Nemeth E, Ganz T · "Hepcidin-ferroportin interaction controls systemic iron homeostasis" · *Int J Mol Sci* 22(12):6493 · 2021 · review · ~469 citations · gold OA · comprehensive review of hepcidin peptide structure, ferroportin binding mechanism (occlusion + endocytosis), two-step degradation model, and iron homeostasis physiology; confirmed structural details (four disulfide bonds, N-terminal insertion model) · previously cited in [[molecules/metabolites/iron]]

[^billesbolle2020]: doi:10.1038/s41586-020-2668-z · Billesbolle CB, Azumaya CM, Kretsch RC, Powers AS, Gonen S, Schneider S, Arvedson T, Dror RO, Cheng Y, Manglik A · "Structure of hepcidin-bound ferroportin reveals iron homeostatic mechanisms" · *Nature* 586(7831):807–811 · 2020 · structural (cryo-EM + molecular dynamics) · model: human ferroportin SLC40A1 reconstituted in lipid nanodisc · cryo-EM structures of apo FPN (3.2 Å) and Co²⁺-hepcidin-bound FPN (2.5 Å); hepcidin binds in outward-open FPN conformation, acting as a molecular cork to occlude the iron efflux pathway; hepcidin affinity ~80-fold higher in the presence of iron (K_D 210 nM → 2.5 nM); iron-loaded ferroportin is preferentially targeted for degradation; structural basis for hepcidin-resistant ferroportin mutations identified · green OA via PMC (PMCID 7906036); full PDF verified 2026-06-14

[^arezes2018]: doi:10.1182/blood-2018-06-857995 · PMID 30097509 · Arezes J, Foy N, McHugh K, et al. · "Erythroferrone inhibits the induction of hepcidin by BMP6" · *Blood* 132(14):1473–1477 · 2018 · research article (in-vitro + mouse) · ERFE demonstrated to directly sequester BMP6 ligand to suppress hepcidin · DOI/citation corrected 2026-06-14: seeder had cited *Blood Adv* 4(12):2637–2646 with DOI 10.1182/bloodadvances.2020001711, which resolves to an unrelated Giri & Galipeau MSC paper; the canonical ERFE-BMP6 paper is this 2018 *Blood* letter (confirmed via PubMed)

[^arezes2020b]: doi:10.1016/j.jbc.2026.113250 · PMID 42285516 · Mast EM, Hok L, Leach EAE, Thompson TB · "Erythroferrone antagonism of BMPs is governed by a composite heparin-binding motif" · *J Biol Chem* 2026 · research article (structural + mechanistic) · model: in vitro / biochemical · establishes that ERFE heparin-binding motif (HBM) is essential for BMP inhibition; heparin/heparan sulfate (HS) simultaneously engages ERFE and BMP6 to form a high-order ternary inhibitory complex; ERFE preferentially engages BMP6:HS over other BMP ligands; reframes ERFE as a matrix-assisted antagonist · abstract confirmed via PubMed 2026-06-14; NOTE: the first author is Mast EM, not Zhu J — the seeder had the wrong lead author; corrected here

[^koenig2014]: doi:10.3390/nu6083062 · Koenig MD, Tussing-Humphreys L, Day J, Cadwell B, Nemeth E · "Hepcidin and iron homeostasis during pregnancy" · *Nutrients* 6(8):3062–3083 · 2014 · systematic review (16 primary studies: 10 human, 6 animal) · gold OA · synthesizes evidence that maternal hepcidin falls throughout pregnancy (lowest in third trimester, p<0.001 in the Finkenstedt longitudinal study n=42); quantitative trimester data: 1st trimester 16 ng/mL, 2nd trimester 11 ng/mL, 3rd trimester 9.5 ng/mL (Finkenstedt 2012); women with undetectable hepcidin transferred more maternally-ingested iron to fetus; inflammatory conditions (obesity, preeclampsia) elevate hepcidin during pregnancy; pregnancy-specific suppressor of hepcidin not identified (predates ERFE characterization); iron supplementation interactions reviewed · full PDF verified 2026-06-14

[^guralnik2004]: doi:10.1182/blood-2004-05-1812 · Guralnik JM et al. · observational · n=4,199 (NHANES III, community-dwelling ≥65) · *Blood* 2004;104(8):2263–2268 · prevalence 10.6% at age ≥65; etiology breakdown: ~34% nutritional, ~33% ACI/renal, ~33% unexplained · previously cited in [[anemia-of-aging]]

[^chew2025]: doi:10.1016/j.leukres.2025.108132 · PMID 41175501 · Chew LP, Ginzburg YZ, Kirubamoorthy K, Lee SE, Lee JH, Modi NB, et al. · "Rusfertide rapidly decreases hematocrit in patients with suboptimally controlled polycythemia vera" · *Leuk Res* 159:108132 · 2025 · clinical (open-label Phase 2, prospective) · n=20 PV patients with baseline hematocrit >48% · rusfertide 40 mg subcutaneous twice weekly until Hct<45%, then weekly; 85% achieved Hct<45% by Week 8; median time to first Hct<45% was 4.9 weeks; no phlebotomies required during treatment; 17/20 patients (85%) had treatment-emergent adverse events, mostly Grade 1/2; abstract confirmed via PubMed 2026-06-14

[^modi2025pk]: doi:10.1002/cpdd.1514 · PMID: 39888264 · Modi NB, Dinh P, Ajari I · "Multiple-Dose Pharmacokinetics, Pharmacodynamics, Safety, and Tolerability of Subcutaneous Rusfertide, a Hepcidin Mimetic, in Healthy Subjects" · *Clin Pharmacol Drug Dev* 14(4):311–323 · 2025 · RCT Phase 1 · n=18 enrolled (15 completed) healthy subjects · rusfertide 60 mg subcutaneous once weekly × 5 weeks; accumulation ratio (Dose 5/Dose 1) AUC ~1.5×, Cmax ~1.2×; no differences between injection sites (abdomen, thigh, arm); mechanism-based decreases in serum iron, transferrin saturation, Hgb, and hematocrit confirmed; no serious adverse events; injection-site reactions most common adverse event · abstract confirmed via PubMed 2026-06-14

[^modi2025cardiac]: PMID: 41033871 · Modi NB, Dinh P, Xue H, Darpo B · "Evaluation of rusfertide, a hepcidin mimetic, on cardiac repolarization" · *Clin Ther* 2025 · RCT (thorough QT study) · rusfertide did not prolong QTc in healthy participants; cardiac safety confirmed

[^franceschi2000]: doi:10.1196/annals.1280.001 · Franceschi C, Bonafe M, Valensin S, et al. · "Inflamm-aging: An evolutionary perspective on immunosenescence" · *Ann N Y Acad Sci* 908:244–254 · 2000 · review · ~11,000 citations · foundational paper introducing "inflammaging" concept; IL-6 as the central driver of chronic low-level inflammation in aging; hepcidin connection is a downstream consequence not explicitly covered in this paper · #gap/no-fulltext-access (verify IL-6/aging quantification from a more recent primary cohort study)
