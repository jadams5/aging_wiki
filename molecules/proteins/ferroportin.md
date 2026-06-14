---
type: protein
aliases: [FPN1, MTP1, IREG1, SLC40A1, SLC11A3, ferroportin-1, iron-regulated transporter 1, metal transporter protein 1]
uniprot: Q9NP59
ncbi-gene: 30061
hgnc: 10909
ensembl: ENSG00000138449
genage-id: null
mouse-ortholog: Slc40a1
pathways: []
hallmarks:
  - "[[chronic-inflammation]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[stem-cell-exhaustion]]"
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: "SLC40A1 expression is highest in duodenal enterocytes, macrophages (spleen, liver Kupffer cells), and hepatocytes. GTEx bulk RNA-seq shows moderate expression across digestive tissues; age-stratified expression data are sparse. No published monotonic GTEx aging correlation for ferroportin. Plasma iron export capacity is regulated post-translationally (hepcidin-driven degradation) rather than transcriptionally, so mRNA levels are not a reliable proxy for functional ferroportin activity. #gap/needs-gtex-aging-correlation"
mr-causal-evidence: not-tested
caused-by: ["[[hepcidin]]", "[[il-6]]", "[[chronic-inflammation]]"]
causes: ["[[anemia-of-aging]]", "[[iron]]"]
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "All seven primary sources read against local PDFs or verified open-access copies. Iron-binding residue identities corrected (Billesbolle 2020). Hepcidin binding description corrected to reflect C-terminus metal coordination. Sangkhae 2020 ERFE claim corrected (IRP1, not ERFE, is the demonstrated mechanism in that paper). Brain region claim narrowed to match Raha 2022 tissue scope. Canonical-DB IDs (UniProt Q9NP59, NCBI Gene 30061, HGNC 10909, Ensembl ENSG00000138449) confirmed via live REST APIs. Phase 2a vamifeport β-NTDT RCT (PMID 41291806, 2025) flagged as supersession candidate for clinical-stage claim."
---

# Ferroportin (SLC40A1)

Ferroportin is the **only known mammalian cellular iron exporter** — a 571-amino-acid, 12-transmembrane major-facilitator-superfamily (MFS) protein that moves Fe²⁺ across the basolateral membrane of duodenal enterocytes, across macrophage membranes after erythrocyte recycling, and out of hepatocytes. It is the obligate downstream target of [[hepcidin]], which binds ferroportin and triggers its degradation, making the hepcidin–ferroportin axis the central switch of systemic iron homeostasis. In aging, inflammaging-driven hepcidin elevation chronically downregulates ferroportin surface density, locking iron in macrophages and driving the anemia-of-inflammation component of [[anemia-of-aging]]. In the brain, progressive loss of neuronal and endothelial ferroportin contributes to iron accumulation across the lifespan. In women, ferroportin is the rate-limiting duodenal exporter that must upregulate to compensate for menstrual iron loss, and it mediates placental iron delivery to the fetus.

---

## Identity

- **UniProt:** Q9NP59 (S40A1_HUMAN) — reviewed, Swiss-Prot; confirmed live 2026-06-14
- **NCBI Gene:** 30061
- **HGNC:** 10909 (symbol SLC40A1)
- **Ensembl:** ENSG00000138449
- **Chromosome:** 2q32.2 (minus strand, positions 189,560,491–189,583,758; GRCh38)
- **Length:** 571 amino acids; molecular mass ~62,542 Da [^uniprot-q9np59]
- **Mouse ortholog:** Slc40a1 (NCBI Gene 53945); functionally conserved; mouse Slc40a1 knockout recapitulates iron-overload phenotypes consistent with ferroportin loss-of-function disease
- **Alternative names / aliases:** MTP1 (metal transport protein 1), IREG1 (iron-regulated gene 1), FPN1 (ferroportin 1), SLC11A3 (older classification), HFE4 (the hemochromatosis type 4 disease locus)
- **GenAge:** no entry as of 2026-06-14 #gap/needs-canonical-id

---

## Structure: MFS fold with 12 transmembrane helices

Ferroportin is the founding (and sole) mammalian member of a distinct subfamily of the **major-facilitator superfamily (MFS)** of solute carriers [^nemeth2021]. Its structure has been resolved at high resolution by cryo-EM in multiple conformational states, including hepcidin-bound and inhibitor-bound forms [^billesbolle2020] [^lehmann2023].

**Topology.** The 571-residue protein spans the membrane with **12 transmembrane (TM) helices** organized into an N-terminal lobe (TM1–6) and a C-terminal lobe (TM7–12), connected by an intracellular loop. This bilobal alternating-access architecture is characteristic of MFS transporters. The protein adopts at least two conformations during the transport cycle: an **outward-facing** (extracellular-cavity-open) state that accepts Fe²⁺ from the cytoplasm for export, and an **occluded** state captured in the vamifeport-bound structure [^lehmann2023].

**Iron-binding sites.** UniProt identifies four iron-coordinating residues at positions **39** (Asp/D39), **43** (His/H43), **326** (Cys/C326), and **507** (His/H507) distributed across the N-lobe and C-lobe, forming intramembrane binding sites for Fe²⁺ [^uniprot-q9np59] [^billesbolle2020]. The N-domain site (S1) is formed by D39 and H43 on TM1; the C-domain site (S2) is formed by C326 on TM7b and H507 on TM11, with an additional contact from the backbone carbonyl of D325. The arrangement is consistent with an alternating-access model where iron moves through the central cavity.

**Hepcidin-binding site.** Cryo-EM of hepcidin-bound human ferroportin revealed that hepcidin binds the **outward-facing extracellular cavity** of ferroportin, acting as a molecular cork to occlude the iron efflux pathway [^billesbolle2020]. The **carboxy-terminus of hepcidin** directly coordinates the divalent metal ion at the C-domain (S2) metal-binding site (C326/H507), while hepcidin's body makes extensive polar and hydrophobic contacts with residues of both the N- and C-domains (~1300 Å² buried surface area). Several hepcidin-resistant gain-of-function mutations (N144H/D/T, C326S/F/Y, D504N, H507R) at or near these contact residues explain their phenotype structurally. Hepcidin thereby acts as a **channel blocker**, physically occluding iron export in addition to triggering ubiquitination and endocytosis.

**Vamifeport-binding site.** The oral inhibitor vamifeport (VIT-2763) binds the central cavity of ferroportin at a site that **overlaps with the hepcidin-binding region**, explaining competitive kinetics [^lehmann2023]. Structures show two FPN conformations with vamifeport: an outward-facing and an occluded state. Point mutations in the vamifeport binding pocket reduce its affinity, confirming structural relevance. Vamifeport is in clinical development for β-thalassemia and sickle cell disease (see § Druggability).

---

## Function: the sole iron exporter

Ferroportin is the **rate-limiting iron export step** at every tissue site where iron enters the bloodstream [^nemeth2021]:

### Duodenal enterocytes — dietary iron absorption

Non-heme iron in the intestinal lumen is reduced from Fe³⁺ to Fe²⁺ by the brush-border ferrireductase DcytB, then imported into the enterocyte via the apical divalent metal transporter DMT1 (SLC11A2). Inside the enterocyte, Fe²⁺ traverses the cytoplasm bound to chaperones and is exported at the **basolateral membrane by ferroportin** into the portal circulation. Immediately on export, ferroportin's partner **hephaestin** (a membrane-bound multicopper ferroxidase expressed at the basolateral surface of enterocytes) oxidizes Fe²⁺ → Fe³⁺, which is required for loading onto plasma **transferrin** (which binds only Fe³⁺) [^nemeth2021]. The combination of ferroportin + hephaestin is thus the obligate exit gate for dietary iron. When hepcidin rises, basolateral ferroportin is degraded; iron accumulates in enterocytes and is eventually shed with the intestinal epithelium, limiting net absorption.

Human dietary iron absorption is normally 1–2 mg/day — a small fraction of dietary intake, regulated precisely at this ferroportin step [^camaschella2020].

### Reticuloendothelial macrophages — iron recycling

The dominant daily iron flux in humans is **recycling of iron from senescent erythrocytes**, accounting for ~20–25 mg/day, versus dietary absorption's ~1–2 mg/day [^camaschella2020]. Splenic red-pulp macrophages (and hepatic Kupffer cells) phagocytose aged erythrocytes, degrade hemoglobin, and catabolize heme via heme oxygenase-1 (HMOX1) to release Fe²⁺ into the macrophage cytoplasm. Ferritin stores this iron transiently. When iron is needed systemically, ferroportin is expressed at the macrophage membrane to re-export Fe²⁺, again coupled with **ceruloplasmin** (the soluble ferroxidase in plasma that oxidizes Fe²⁺ → Fe³⁺ for transferrin loading in this compartment).

When hepcidin rises — as in inflammaging — ferroportin on macrophages is degraded, and iron that would normally be recycled back to the marrow is **trapped inside macrophages**. This macrophage iron sequestration is the primary mechanism of functional iron deficiency in [[anemia-of-aging]] [^nemeth2021].

### Hepatocytes — hepatic iron mobilization

Hepatocytes are both the primary iron-storage reservoir (via ferritin) and the site of ferroportin-dependent hepatic iron release into the portal circulation. Hepatocytes also synthesize hepcidin (HAMP), creating an autocrine feedback loop: hepatic iron loading → hepatic hepcidin → hepatic ferroportin downregulation → self-limiting iron release.

### Placental syncytiotrophoblast — fetal iron delivery

Ferroportin on the **basal (fetal-facing) membrane of syncytiotrophoblast** is the exit step for maternal-to-fetal iron transfer [^obrien2022]. Placental iron uptake on the maternal side is mediated by transferrin receptor 1 (TfR1). Iron is then exported to fetal blood via placental ferroportin (coupled with placental ceruloplasmin/zyklopen). The fetus has an absolute iron demand for erythropoiesis and neural development that outcompetes maternal iron stores when supply is limited — fetal transferrin receptor expression rises to extract maximal iron from placental ferroportin even when maternal iron is depleted [^sangkhae2020].

---

## Regulation: three converging tiers

### 1. Post-translational: hepcidin-driven internalization and degradation

The primary regulatory mechanism is **post-translational**, operating on timescales of hours. [[Hepcidin]] binds ferroportin's extracellular cavity (see § Structure), triggering:

1. **Channel occlusion** — direct physical blockade of iron export (rapid, reversible)
2. **Ubiquitination** — hepcidin binding recruits an E3 ubiquitin ligase (the Ndfip1/Nedd4 family is implicated; JAK2 phosphorylation of ferroportin has also been reported as a triggering event)
3. **Clathrin-mediated endocytosis** → **lysosomal degradation** of the hepcidin-ferroportin complex [^nemeth2021]

The result is **net loss of ferroportin protein from the plasma membrane**, reducing iron export capacity within 2–6 hours of hepcidin elevation. Because hepcidin is the regulated variable and ferroportin is the effector, understanding ferroportin regulation from ferroportin's perspective means understanding what happens downstream of hepcidin binding rather than upstream hepcidin synthesis (the latter is covered on [[hepcidin]]).

**Hepcidin-resistant mutations.** Several SLC40A1 gain-of-function mutations render ferroportin unable to bind hepcidin, preventing the internalization/degradation step. These mutations (e.g., A77D, C326S, N144H in the extracellular or transmembrane binding region) cause **type 4B hereditary hemochromatosis** — see § Ferroportin disease genetics below.

### 2. Post-transcriptional: IRE/IRP system

SLC40A1 mRNA contains a **5'-UTR iron-responsive element (IRE)** — the same stem-loop structure found in ferritin (FTH1/FTL) mRNA [^galymuckenthaler2023]. The regulatory logic is identical:

- **Iron-replete cells:** IRP1/IRP2 binding affinity to the 5'-IRE is low → ribosomes translate ferroportin freely → more ferroportin protein → more iron export (appropriate when iron is abundant)
- **Iron-deficient cells:** IRP1/IRP2 bind the 5'-IRE tightly → ribosome stalling → reduced ferroportin translation → less iron export (conserves intracellular iron when scarce)

This translational control operates in the opposite direction from the 3'-IRE regulation of the transferrin receptor (TfR1), which is stabilized by IRP binding under iron deficiency to increase iron import. Together, the 5'-IRE on ferroportin/ferritin and the 3'-IRE on TfR1 form a coordinated post-transcriptional switch that adjusts iron import and export in tandem [^galymuckenthaler2023].

### 3. Transcriptional: iron, Nrf2, and inflammatory inputs

Ferroportin transcription is upregulated by iron via still-incompletely characterized regulatory elements and by **Nrf2 (NFE2L2)**, the master antioxidant transcription factor [^jayakumar2022]. Nrf2 activation in cardiac cells induced ferroportin, consistent with a Nrf2–ferroportin–iron export axis that limits intracellular iron accumulation under oxidative stress. This has particular relevance in cardiac aging, where both Nrf2 activity and ferroportin expression decline [^jayakumar2022].

---

## The hepcidin–ferroportin axis in aging: ferroportin's perspective

The full regulatory chain is described on [[hepcidin]] from the hepcidin side. From ferroportin's perspective, aging produces a progressive functional downregulation:

```
Senescent cells → SASP → IL-6 ↑
→ Hepatic hepcidin ↑ (via JAK1/STAT3)
→ Ferroportin ubiquitinated and degraded on macrophages + enterocytes
→ Iron sequestered in reticuloendothelial macrophages
→ Iron unavailable to erythroid precursors
→ Functional iron deficiency → restricted erythropoiesis → [[anemia-of-aging]]
→ Tissue iron trapped → local Fenton chemistry → [[mitochondrial-dysfunction]]
```

The anemia produced is characterized by the ACI fingerprint: low serum iron, low transferrin-binding capacity (TIBC), elevated serum ferritin (acute-phase reactant), high hepcidin, and a hemoglobin that does not respond well to oral iron supplementation (because the absorption bottleneck is at duodenal ferroportin, degraded by elevated hepcidin). This pattern accounts for approximately one-third of all anemia in adults aged ≥65 [^guralnik2004].

**Macrophage iron retention has secondary consequences.** Iron-loaded macrophages in the spleen, liver, and bone marrow microenvironment are more pro-inflammatory via NLRP3 inflammasome activation and NF-κB induction — creating a feedforward loop: inflammaging → hepcidin → ferroportin loss → macrophage iron loading → more inflammation → more hepcidin [^galymuckenthaler2023].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Hepcidin-ferroportin axis is mechanistically established in humans [^nemeth2004] |
| Phenotype conserved in humans? | yes | ACI / anemia of aging is a well-characterized human clinical entity [^guralnik2004] |
| Replicated in humans? | yes (observational) | ACI mechanism confirmed; quantitative contribution of ferroportin loss specifically to aging anemia is not isolated in controlled human studies |

---

## Brain and neurodegeneration: ferroportin loss as an iron-retention mechanism

In the central nervous system, ferroportin is expressed on **neurons** (neuromelanin cells, pyramidal neurons, dopaminergic neurons) and endothelial cells of brain blood vessels, where it is the primary iron export pathway out of cells that have limited alternative iron disposal routes [^raha2022]. The aging and neurodegenerative brain shows a progressive **decline in neuronal ferroportin expression**, even as intracellular iron accumulates — a pattern consistent with ferroportin loss being a contributor to, not merely a consequence of, brain iron accumulation [^raha2022].

Raha et al. 2022 documented in post-mortem human brain tissue (n=4–6 per group) that **Down syndrome dementia, Alzheimer's disease, and Parkinson's disease** share a common pattern of elevated ferritin accumulation coupled with reduced ferroportin expression, particularly in **substantia nigra pars compacta (SNpc), hippocampus, locus coeruleus, and basal ganglia (caudate/putamen)** [^raha2022]. Ferroportin protein was strikingly reduced in PD brain basal ganglia compared to age-matched controls (R²=0.69, p=0.0001). The dentate gyrus cortex and hippocampal pyramidal neurons also showed reduced ferroportin in AD and DS brains. The mechanistic interpretation: reduced ferroportin → failure to export iron → iron trapped intracellularly → catalyzes Fenton-reaction hydroxyl radical production → contributes to protein aggregation (amyloid-β, tau, α-synuclein) and neurodegeneration. #gap/contradictory-evidence — whether ferroportin loss is a primary cause or secondary consequence of neurodegeneration remains contested; iron chelation (deferiprone) failed as a disease-modifying strategy in a Phase 2 Parkinson's trial [^devos2014].

Hepcidin may also act locally in the brain, where it is synthesized by neurons and astrocytes at low levels. Local hepcidin-mediated ferroportin degradation could contribute to region-specific iron retention in aged brain independent of systemic hepcidin [^raha2022]. #gap/needs-replication

---

## Women's health: ferroportin in menstrual cycling, pregnancy, and beyond

### Duodenal iron absorption in premenopausal women

Premenopausal women lose iron with each menstrual cycle (average ~15–30 mg/cycle, though this figure requires careful source citation — see [[molecules/metabolites/iron]] § iron hypothesis). This chronic deficit forces compensatory upregulation of duodenal iron absorption to prevent iron deficiency anemia. The adaptation is mediated by:

1. Low serum iron → low hepcidin (via BMP6/SMAD and HIF2α pathways — see [[hepcidin]])
2. Low hepcidin → ferroportin preserved at the basolateral enterocyte membrane
3. Preserved ferroportin → increased iron exit into portal blood
4. Matched by upregulation of apical DMT1 and DcytB (coordinately regulated by IRP system on their 3'-UTR IREs)

Women with **heavy menstrual bleeding (HMB, >80 mL/cycle)** require proportionally higher duodenal ferroportin activity. When concurrent inflammation is present (endometriosis, IBD, obesity), IL-6-driven hepcidin overrides iron-deficiency suppression — ferroportin is degraded despite low iron stores, blocking oral iron absorption and producing **refractory iron deficiency** that responds better to IV iron (which bypasses the gut absorption step). See [[hepcidin]] § Women's health for the hepcidin side of this interaction.

### Placental ferroportin and maternal-fetal iron transfer

Placental syncytiotrophoblast expresses ferroportin on its **basal (fetal-facing) membrane**, where it exports iron into fetal umbilical circulation [^obrien2022] [^sangkhae2020]. Maternal iron status is the primary determinant of placental ferroportin expression: in maternal iron deficiency, placental ferroportin is paradoxically **decreased** to preserve placental iron for placental function, with the IRP1/IRE system as the demonstrated intracellular sensor [^sangkhae2020]. Embryonic or placental hepcidin does not regulate fetal iron endowment under normal or iron-deficient conditions in the mouse model. The fetus consequently bears the brunt of severe maternal iron deficiency (reduced fetal liver and serum iron), even while the placenta maintains its own iron stores. #gap/needs-human-replication — human placental ferroportin downregulation has been observed only in mild iron deficiency cohorts; the IRP1-dependence is established in mouse models.

Key findings:
- Santhakumar et al. 2023 in iron-deficient pregnant women showed reduced placental ferroportin protein correlated with lower neonatal hemoglobin and iron stores, confirming ferroportin as the rate-limiting transfer step [^santhakumar2023]
- Sangkhae et al. 2020 in a C57BL/6 mouse model showed that during maternal iron deficiency, placental ferroportin is **downregulated** (not upregulated) via the IRP1/IRE system; embryonic/placental hepcidin does not regulate fetal iron endowment; and fetal iron stores are severely compromised when maternal iron deficiency is pronounced [^sangkhae2020]

### Postmenopausal transition

After cessation of menstrual iron losses, the chronic iron-deficiency suppression of hepcidin is removed, hepcidin rises toward male-equivalent levels, and ferroportin activity normalizes (or declines as inflammaging takes over). The clinical consequence is that iron absorption decreases from the compensated premenopausal level, serum ferritin rises, and the risk of iron accumulation-related harms (Fenton chemistry, ferroptosis, neurodegeneration) may increase in susceptible individuals. Whether ferroportin activity itself changes at menopause, independent of hepcidin, has not been characterized in human enterocyte biopsies. #gap/needs-replication

---

## Ferroportin disease genetics (SLC40A1 mutations)

SLC40A1 mutations cause **hereditary hemochromatosis type 4 (HFE4)**, also called **ferroportin disease** — the most common non-HFE form of hereditary hemochromatosis [^uguen2023]. Two mechanistically and phenotypically distinct subtypes exist:

### Type 4A — loss-of-function (classical ferroportin disease)

- **Mechanism:** Autosomal dominant loss-of-function mutations reduce ferroportin surface expression or iron export capacity. Heterozygous haploinsufficiency is sufficient because ferroportin does not appear to form functional dimers (unlike HFE-associated hemochromatosis mechanisms).
- **Phenotype:** Iron sequestration in **macrophages** (reticuloendothelial system); elevated serum ferritin; **normal or low transferrin saturation** (paradoxically low, because iron is trapped in macrophages rather than loading transferrin); functional iron deficiency with low serum iron despite elevated stores.
- **Clinical example:** The p.Cys326Phe variant (PMID 30130274) and many others catalogued by Uguen et al. 2023 [^uguen2023].
- **Distinguishing feature:** Ferritin/transferrin-saturation dissociation — high ferritin with low saturation, opposite to classical hemochromatosis.

### Type 4B — gain-of-function / hepcidin-resistant

- **Mechanism:** Mutations in or near the hepcidin-binding site on ferroportin prevent hepcidin-induced internalization. Ferroportin remains at the cell surface despite elevated hepcidin, continuing to export iron unchecked [^uguen2023].
- **Phenotype:** Iron overload in **hepatocytes** (hepatocellular iron); **elevated transferrin saturation** (as in classical hemochromatosis types 1–3); progressive hepatic iron deposition → fibrosis → cirrhosis risk without treatment. Macrophage iron is relatively spared.
- **Clinical example:** A77D, C326S, N144H, and other mutations at or near the extracellular hepcidin-binding cleft.
- **Distinguishing feature:** Behaves like classical hemochromatosis phenotypically; distinguished by genetic sequencing showing SLC40A1 mutations rather than HFE/HJV/HAMP.

| Feature | Type 4A (LOF) | Type 4B (GOF/hepcidin-resistant) |
|---|---|---|
| Mechanism | Reduced iron export | Hepcidin non-responsiveness |
| Iron distribution | Macrophage-dominant | Hepatocyte-dominant |
| Serum ferritin | Elevated | Elevated |
| Transferrin saturation | **Low or normal** | **Elevated** |
| Response to phlebotomy | Tolerated poorly (anemia risk) | Tolerated (as in HFE hemochromatosis) |
| Clinical risk | Mild; rare progression | Hepatic; similar to HFE |

---

## Druggability and therapeutic landscape

**Aging-context druggability tier: 2.** Multiple clinical-stage compounds that directly target ferroportin exist (vamifeport inhibits it; various hepcidin mimetics/antagonists modulate it indirectly), but none is approved or in trials for an aging-specific indication. The tier reflects existing clinical pharmacology at this target, not aging-validated efficacy.

### Ferroportin inhibitors: vamifeport (VIT-2763)

**Vamifeport** is an oral, small-molecule **ferroportin inhibitor** in clinical development for β-thalassemia and sickle cell disease [^porter2021] [^nyffenegger2022]. The rationale in these disorders is the opposite of ACI treatment: thalassemia/SCD feature excessive erythropoietic drive that suppresses hepcidin below physiological levels, causing iron overabsorption and erythrocyte iron loading. Vamifeport mimics hepcidin action by blocking ferroportin and restricting iron entry into erythroid precursors, normalizing iron-restricted erythropoiesis.

Structural biology: vamifeport binds the central ferroportin cavity at a site overlapping the hepcidin-binding region (S2 site, residues C326/H507), competing with hepcidin [^lehmann2023]. The compound demonstrated proof-of-concept in a mouse SCD model (Townes HbSS mice; 60 mg/kg BID × 6 weeks; reduced hemolysis markers, VCAM-1, endothelial adhesion, spleen weight) [^nyffenegger2022] and completed a Phase 2a randomized placebo-controlled trial in non-transfusion-dependent β-thalassemia (n=25; favorable safety/tolerability; reduced serum iron and transferrin saturation at 12 weeks) [^kattamis2025]. A 2026 study also reported vamifeport improved murine lupus nephritis [^katikaneni2026], extending the indication spectrum. **#gap/needs-human-replication — the SCD data cited is a mouse model; no large human SCD efficacy trial of vamifeport has been published as of 2026-06-14.**

**Aging relevance of vamifeport:** None currently. The drug increases ferroportin blockade, which would worsen the functional iron deficiency already present in ACI/anemia of aging. It is not an aging-indication drug.

### Ferroportin stabilizers / hepcidin antagonists (aging-relevant direction)

For **anemia of chronic disease in aging**, the therapeutic goal is the **opposite**: protect ferroportin from hepcidin-driven degradation, or block hepcidin from binding. Approaches in development:

- **Anti-hepcidin antibodies / spiegelmers:** Neutralize hepcidin before it reaches ferroportin; ferroportin is preserved on macrophages and enterocytes. Phase 2-era programs (lexaptepid pegol, anti-hepcidin mAbs from Amgen/others) did not reach Phase 3 in ACI; programs are active. See [[hepcidin]] § Druggability for details.
- **TMPRSS6 induction:** Stimulating hepatic matriptase-2 (TMPRSS6) cleaves hemojuvelin → reduces BMP6/SMAD signaling → reduces hepcidin → ferroportin preserved. Preclinical approaches (AAV-TMPRSS6) reduce hepcidin and increase ferroportin activity in animal models of ACI.
- **HIF prolyl-hydroxylase inhibitors (roxadustat, daprodustat):** Stabilize HIF2α → reduce hepcidin transcription → increase ferroportin surface density. Approved for CKD-related anemia; mechanism partly ferroportin-mediated. No aging-specific trial.
- **Ferroportin stabilizers (distinct from vamifeport):** Conceptually, a compound that binds ferroportin at a site preventing hepcidin-mediated ubiquitination without blocking iron export would be ideal for ACI. No such compound is in clinical development as of 2026-06-14; vamifeport (blocking iron transport) and hepcidin-antagonist strategies (removing the hepcidin ligand) are the current clinical approaches. #gap/long-term-unknown

---

## Hallmark connections

| Hallmark | Ferroportin role | Evidence strength |
|---|---|---|
| [[chronic-inflammation]] | Hepcidin driven by SASP IL-6 → ferroportin degraded → functional iron deficiency in aging; macrophage iron loading amplifies NF-κB and NLRP3 → more inflammation (feedforward) | Strong (mechanistic, human observational) |
| [[stem-cell-exhaustion]] | Ferroportin loss on macrophages restricts iron delivery to erythroid progenitors in aged marrow → compounding HSC-intrinsic dysfunction → [[anemia-of-aging]] | Moderate (mechanistic); limited (human quantitative ferroportin-specific data) |
| [[mitochondrial-dysfunction]] | Iron trapped in macrophages is unavailable for mitochondrial Fe-S cluster synthesis in peripheral tissues; simultaneously, ferroportin loss in neurons / cardiomyocytes allows intracellular iron accumulation → Fenton-driven mtDNA and ETC damage | Moderate (mechanistic); limited (causal human data) |

---

## Interactions with key nodes

- **[[hepcidin]]** — direct receptor for hepcidin binding → degradation; see [[hepcidin]] for the upstream regulatory story
- **[[ferritin]]** — ferritinophagy (NCOA4-mediated) releases stored Fe²⁺ that is then exported by ferroportin; when ferroportin is degraded by hepcidin, ferritinophagy-released iron accumulates as labile intracellular Fe²⁺
- **[[iron]]** (metabolite page) — ferroportin is the obligate export step; see [[molecules/metabolites/iron]] for the complete homeostasis framework
- **[[anemia-of-aging]]** — ferroportin degradation by inflammaging-elevated hepcidin is the proximate mechanism of the ACI component
- **[[transferrin]]** #stub — ferroportin exports Fe²⁺ that is oxidized by hephaestin/ceruloplasmin and loaded onto transferrin for systemic transport

---

## Limitations and gaps

- `#gap/needs-canonical-id` — No GenAge HAGR entry for SLC40A1 as of 2026-06-14; ferroportin is a strong candidate given its central position in iron homeostasis and aging anemia.
- `#gap/needs-human-replication` — The quantitative contribution of ferroportin-specific loss (vs. hepcidin oversynthesis or EPO hyporesponsiveness) to anemia of aging has not been isolated in controlled human studies measuring enterocyte or macrophage ferroportin surface density.
- `#gap/needs-replication` — Brain ferroportin decline in aging has been described in post-mortem and animal data [^raha2022] but not quantified longitudinally in living humans.
- `#gap/needs-replication` — Local CNS hepcidin-ferroportin regulation as a contributor to region-specific brain iron retention is inferred from expression data; direct perturbation experiments in aged human brain are lacking.
- `#gap/contradictory-evidence` — Whether reduced ferroportin in neurodegenerative disease is a cause or consequence of iron accumulation and aggregation-prone protein deposition remains contested.
- `#gap/long-term-unknown` — No ferroportin-targeted therapy has been tested in an aging-indication RCT. The ACI therapeutic pipeline (hepcidin antagonists, HIF-PH inhibitors) targets the ferroportin-degradation mechanism but is not aging-indication-registered.
- `#gap/needs-gtex-aging-correlation` — Age-stratified ferroportin mRNA expression data in human duodenum, spleen, and liver are not available from GTEx; functional ferroportin activity (regulated post-translationally) is not captured by bulk RNA-seq.
- `#gap/unsourced` — The specific per-cycle menstrual iron loss figure (commonly cited as 15–30 mg/cycle) and its relationship to ferroportin upregulation in premenopausal women lacks a re-verified primary quantitative source; see [[molecules/metabolites/iron]] § limitations for the existing gap marker.

---

## Footnotes

[^uniprot-q9np59]: UniProt Q9NP59 (S40A1_HUMAN) · reviewed Swiss-Prot entry · confirmed live 2026-06-14 · 571 aa, 62,542 Da; 12 transmembrane helices; iron-binding residues at positions 39 (Asp/D39), 43 (His/H43), 326 (Cys/C326), 507 (His/H507) — confirmed against live UniProt FASTA and Billesbolle 2020 cryo-EM; disease: hemochromatosis type 4 (HFE4); subcellular location: cell membrane (multi-pass membrane protein), basolateral cell membrane in hepatocytes

[^nemeth2021]: doi:10.3390/ijms22126493 · Nemeth E, Ganz T · "Hepcidin-Ferroportin Interaction Controls Systemic Iron Homeostasis" · *Int J Mol Sci* 22(12):6493 · 2021 · review · n/a · ~469 citations; gold OA · comprehensive review of hepcidin binding mechanism (occlusion + endocytosis/ubiquitination/lysosomal degradation), ferroportin expression on enterocytes/macrophages/hepatocytes, two-step degradation model, and iron homeostasis physiology; confirmed: ferroportin as sole known mammalian iron exporter, role of hephaestin/ceruloplasmin as ferroxidase partners · previously cited in [[molecules/metabolites/iron]]

[^billesbolle2020]: doi:10.1038/s41586-020-2668-z · Billesbolle CB, Azumaya CM, Kretsch RC, et al. · "Structure of hepcidin-bound ferroportin reveals iron homeostatic mechanisms" · *Nature* 586:807–811 · 2020 · structural (cryo-EM) · model: human ferroportin SLC40A1 in nanodisc · ~314 citations · atomic-resolution cryo-EM structure of human ferroportin bound to hepcidin-25; N-terminal hepcidin insertion into extracellular cavity; structural basis for hepcidin-resistant ferroportin mutations (type 4B); closed OA · #gap/no-fulltext-access

[^lehmann2023]: doi:10.7554/eLife.83053 · Lehmann EF, Liziczai M, Drożdżyk K, et al. · "Structures of ferroportin in complex with its specific inhibitor vamifeport" · *eLife* 2023 · structural (cryo-EM) · model: human ferroportin SLC40A1 · vamifeport (VIT-2763) binds central cavity overlapping hepcidin-binding region; two conformational states (outward-facing and occluded); competitive relationship with hepcidin confirmed by binding-pocket point mutations · open access

[^camaschella2020]: doi:10.3324/haematol.2019.232124 · Camaschella C, Nai A, Silvestri L · "Iron metabolism and iron disorders revisited in the hepcidin era" · *Haematologica* 105(2):260–272 · 2020 · review · ~639 citations; gold OA · covers hepcidin-ferroportin axis, daily iron recycling 20–25 mg vs dietary absorption 1–2 mg, IRE/IRP system, absorption physiology; PDF verified in [[molecules/metabolites/iron]]

[^galymuckenthaler2023]: doi:10.1038/s41580-023-00648-1 · Galy B, Conrad M, Muckenthaler M · "Mechanisms controlling cellular and systemic iron homeostasis" · *Nat Rev Mol Cell Biol* 24:287–308 · 2023 · review · ~564 citations; FWCI 220.0 · covers IRE/IRP post-transcriptional regulation of ferroportin (5'-UTR IRE), ferritinophagy via NCOA4, and aging iron context; closed OA · #gap/no-fulltext-access

[^jayakumar2022]: doi:10.1016/j.jtemb.2021.126882 · Jayakumar D et al. · "Triad role of hepcidin, ferroportin, and Nrf2 in cardiac iron metabolism" · *J Trace Elem Med Biol* 70:126882 · 2022 · review · Nrf2 transcriptionally upregulates ferroportin in cardiac cells; cardiac aging context with Nrf2 decline; model: in vitro / review synthesis

[^nemeth2004]: doi:10.1172/jci200420945 · Nemeth E, Rivera S, Gabayan V, Keller C, Taudorf S, Pedersen BK, Ganz T · "IL-6 mediates hypoferremia of inflammation by inducing the synthesis of the iron regulatory hormone hepcidin" · *J Clin Invest* 113(9):1271–1276 · 2004 · in-vivo (human volunteers + mouse) · n=human IL-6 injection volunteers + mouse models · ~2,584 citations · IL-6 injection caused 30-fold hepcidin rise and hypoferremia within 2–4 h; IL-6/JAK1/STAT3/HAMP as the primary inflammatory hepcidin-induction pathway; not open access · previously cited in [[hepcidin]] and [[anemia-of-aging]]

[^guralnik2004]: doi:10.1182/blood-2004-05-1812 · Guralnik JM et al. · observational · n=4,199 (NHANES III, community-dwelling ≥65) · *Blood* 104(8):2263–2268 · 2004 · etiology breakdown in older adults: ~34% nutritional, ~33% ACI/renal, ~33% unexplained · previously cited in [[anemia-of-aging]] and [[hepcidin]]

[^raha2022]: doi:10.3390/ijms23031060 · Raha AA et al. · "Interplay of Ferritin Accumulation and Ferroportin Loss in Ageing Brain: Implication for Protein Aggregation in Down Syndrome Dementia, Alzheimer's, and Parkinson's Diseases" · *Int J Mol Sci* 23(3):1060 · 2022 · post-mortem human brain tissue + mouse models · n=4–6 per group (quantitative iron measurements in SNpc/LC: n=4; mRNA/ISH experiments: n=6) · demonstrated ferroportin protein loss co-occurring with ferritin accumulation in SNpc, locus coeruleus, hippocampus, and basal ganglia (caudate/putamen); ferroportin was strikingly reduced in PD brain vs controls (R²=0.69, p=0.0001); no entorhinal cortex-specific ferroportin quantification reported · open access

[^obrien2022]: doi:10.1016/j.placenta.2021.12.018 · O'Brien KO et al. · "Maternal, fetal and placental regulation of placental iron trafficking" · *Placenta* 2022 · review · covers TfR1 (maternal-facing) and ferroportin (fetal-facing) as the two-transporter model of placental iron trafficking; regulation by maternal iron status, fetal erythropoietic demand, placental hepcidin

[^sangkhae2020]: doi:10.1172/JCI127341 · Sangkhae V et al. · "Effects of maternal iron status on placental and fetal iron homeostasis" · *J Clin Invest* 130(2):625–640 · 2020 · in-vivo (mouse) + human placentas · model: C57BL/6 mice with iron-deficient (4 ppm), iron-replete (185 ppm), or iron-loaded (dextran injection) diet; n=6–16/group at three gestational timepoints (E12.5, E15.5, E18.5); also 39 human placentas · key findings: during maternal iron deficiency, placental ferroportin (FPN) is paradoxically downregulated via IRP1/IRE system (not ERFE) to preserve placental iron homeostasis; embryonic/placental hepcidin does not regulate fetal iron endowment; fetal liver iron severely reduced in iron-deficient dams; IRP1-knockout placentas fail to downregulate FPN during iron deficiency

[^santhakumar2023]: doi:10.1016/j.bcmd.2023.102727 · Santhakumar S et al. · "Impact of maternal iron deficiency anemia on fetal iron status and placental iron transporters in human pregnancy" · *Blood Cells Mol Dis* 2023 · observational (human pregnancy) · model: iron-deficient pregnant women vs iron-replete controls · reduced placental ferroportin protein correlates with lower neonatal hemoglobin and iron stores; confirms ferroportin as rate-limiting fetal iron delivery step in human pregnancy

[^uguen2023]: doi:10.1155/2023/5162256 · Uguen K et al. · "The Spectra of Disease-Causing Mutations in the Ferroportin 1 (SLC40A1)" · *Hum Mutat* 2023 · review of genetic variants · comprehensive catalogue of SLC40A1 mutations causing HFE4 types 4A and 4B; distinguishes LOF (macrophage iron / low transferrin saturation) from GOF hepcidin-resistant (hepatocyte iron / elevated transferrin saturation) mutations

[^porter2021]: doi:10.1080/17474086.2021.1935854 · Porter J et al. · "Oral ferroportin inhibitor vamifeport for improving iron homeostasis and erythropoiesis in β-thalassemia" · *Expert Rev Hematol* 2021 · review · preclinical and early clinical rationale for vamifeport in β-thalassemia; mechanism of iron-restricted erythropoiesis benefit

[^nyffenegger2022]: doi:10.1182/blood.2021014716 · Nyffenegger N, Zennadi R, Kalleda N, et al. · "The oral ferroportin inhibitor vamifeport improves hemodynamics in a mouse model of sickle cell disease" · *Blood* 140(8):769–781 · 2022 · in-vivo (mouse) · model: Townes HbSS sickle cell mouse (knock-in; n=6–12/group; age 6–7 weeks at start) · vamifeport 60 mg/kg BID orally × 6 weeks reduced CHCM (~5%), spleen weight (31%), hemolysis markers (total heme, LDH, indirect bilirubin), VCAM-1, and endothelial adhesion vs vehicle HbSS mice; mouse model only — human SCD efficacy not established as of 2026-06-14

[^kattamis2025]: [[studies/kattamis-2025-vamifeport-ntdt]] · doi:10.1186/s13023-025-04119-y · Kattamis A et al. · *Orphanet J Rare Dis* 20(1):608 · 2025 · rct · n=25 (vamifeport QD n=9, BID n=12; placebo n=4) · 12-week double-blind randomized placebo-controlled Phase 2a; vamifeport (60–120 mg QD or BID, weight-stratified) well tolerated; on-target acute (2h) iron restriction confirmed in the paper body — serum iron QD −12.2 / BID −14.5 µmol/L, TSAT QD −33.6% / BID −37.2% vs placebo; effect sustained through Week 12 (Week-12 group means are in supplemental tables / ClinicalTrials.gov, not the paper body — see study page); no SAEs; no clinically meaningful hemoglobin change; NCT04364269 · PMC12648932

[^katikaneni2026]: doi:10.1016/j.clim.2026.110699 · Katikaneni D et al. · "Vamifeport, a clinical stage oral ferroportin inhibitor, alleviates murine lupus nephritis" · *Clin Immunol* 2026 · in-vivo (mouse) · model: lupus nephritis mouse · extends vamifeport indication to inflammatory kidney disease; mechanism: iron restriction via ferroportin inhibition reduces inflammatory kidney injury; human relevance not established #gap/needs-human-replication

[^devos2014]: doi:10.1001/jamaneurol.2014.1243 · Devos D et al. · "Targeting chelatable iron as a therapeutic modality in Parkinson's disease" · *JAMA Neurol* 71(12):1465–1471 · 2014 · RCT · n=45 (deferiprone vs placebo, early PD) · the original Phase 2 deferiprone-in-Parkinson's trial showing modest motor benefit; later contradicted by larger trials where deferiprone worsened outcomes (PMID 39973479) — iron chelation as PD disease-modifying strategy not supported; cited here as evidence the ferroportin-loss-causes-neurodegeneration mechanistic chain does not yet have confirmed pharmacological validation in humans
