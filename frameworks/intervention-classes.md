---
type: framework
aliases: [intervention classes, MoA taxonomy, intervention modalities, mechanism class taxonomy]
sources: []
covers: [intervention-taxonomy]
---

# Intervention classes — mechanism taxonomy

This page is a **navigational overlay** defining canonical mechanism classes used in `mechanisms:` frontmatter across all `type: compound` and `type: intervention` pages. It is a Mode-A synthesis MOC: no original claims, only aggregation from atomic pages.

**How to use this page:**
- When seeding a new compound or intervention page, pick the nearest class(es) from this list for the `mechanisms:` field.
- If no class fits, add the new class here *before* shipping the compound page (do not invent one-off values silently).
- The Dataview blocks below auto-aggregate constituent pages from the `molecules/compounds/` and `interventions/` folders.

---

## Class inventory

The following classes are canonical as of R16 (2026-05-05). Classes are derived directly from `mechanisms:` values on existing atomic pages — no classes are invented here.

> Note on field naming: `type: compound` pages use the `hallmarks:` frontmatter key for hallmark linkage; `type: intervention` pages use `target-hallmarks:`. The matrix page (`interventions-by-hallmark.md`) queries both fields. Dataview blocks here query from both folders.

---

### senolytic

**Definition:** Selectively induces apoptosis in senescent cells by targeting their survival dependencies (SCAPs — Senescent Cell Anti-Apoptotic Pathways), including BCL-2 family members, PI3K/AKT, and ephrin receptors. Does not kill non-senescent cells at therapeutic doses.

**Hallmarks primarily targeted:** [[cellular-senescence]], [[chronic-inflammation]] (via SASP elimination)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "senolytic")
```

---

### BH3-mimetic / BCL-2-family-inhibitor

**Definition:** Inhibits one or more BCL-2 family anti-apoptotic proteins (BCL-2, BCL-xL, BCL-W, MCL-1) by occupying the BH3-binding groove, restoring the apoptotic capacity of cells that depend on BCL-2 family members for survival. Overlaps with senolytic; used as a separate class to capture selectivity and safety distinctions.

**Aliases in use:** `BH3-mimetic`, `BCL-2-family-inhibitor`, `BCL-xL-selective-inhibitor`, `bcl-2-family-inhibition`, `bcl-xl-inhibitor`

**Note on class consolidation:** Multiple spelling variants exist across atomic pages (BH3-mimetic, BCL-2-family-inhibitor, BCL-xL-selective-inhibitor, bcl-2-family-inhibition, bcl-xl-inhibitor). These are functionally the same class with different selectivity profiles. A cleanup pass should normalise these to: `BH3-mimetic` (pan-BCL-2 family) and `BCL-xL-selective-inhibitor` (selective agents). See #gap/class-normalisation-needed.

**Hallmarks primarily targeted:** [[cellular-senescence]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "BH3-mimetic")
  OR contains(mechanisms, "BCL-2-family-inhibitor")
  OR contains(mechanisms, "BCL-xL-selective-inhibitor")
  OR contains(mechanisms, "bcl-2-family-inhibition")
  OR contains(mechanisms, "bcl-xl-inhibitor")
```

---

### mTOR inhibitor

**Definition:** Inhibits mTORC1 (and at high/chronic doses mTORC2) kinase activity, reducing downstream protein synthesis, suppressing SASP expression, and de-repressing autophagy via ULK1. Sub-classes: rapalogs (allosteric FKBP12-dependent inhibitors) and TORKinibs (ATP-competitive dual mTORC1/2 inhibitors).

**Aliases in use:** `mTORC1-inhibitor`, `mTORC2-inhibitor-chronic`, `mtor-inhibitor`, `mtor-inhibition`, `mtorc1-inhibition`, `pi3k-akt-mtor-inhibitor`, `pi3k-inhibitor` (partial overlap)

**Note on class normalisation:** `mTORC1-inhibitor` (rapamycin), `mtor-inhibitor` (EGCG, metformin), and `mtor-inhibition` (caloric-restriction) are used interchangeably. Canonical form should be `mTORC1-inhibitor` for rapalogs and `mtor-inhibition` for indirect suppressors. Cleanup pass recommended. See #gap/class-normalisation-needed.

**Hallmarks primarily targeted:** [[deregulated-nutrient-sensing]], [[disabled-macroautophagy]], [[cellular-senescence]], [[chronic-inflammation]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "mTORC1-inhibitor")
  OR contains(mechanisms, "mtor-inhibitor")
  OR contains(mechanisms, "mtor-inhibition")
  OR contains(mechanisms, "mtorc1-inhibition")
  OR contains(mechanisms, "pi3k-akt-mtor-inhibitor")
```

---

### AMPK activator

**Definition:** Activates AMP-activated protein kinase (AMPK), the cell's central energy-sensing kinase, either directly (AMPK allosteric activators) or indirectly (via complex I inhibition → AMP/ATP ratio rise → AMPK activation). Downstream effects include mTOR suppression, autophagy induction, and mitochondrial biogenesis.

**Aliases in use:** `ampk-activation`, `ampk-activator`, `ampk-modulator`

**Hallmarks primarily targeted:** [[deregulated-nutrient-sensing]], [[disabled-macroautophagy]], [[mitochondrial-dysfunction]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "ampk-activation")
  OR contains(mechanisms, "ampk-activator")
  OR contains(mechanisms, "ampk-modulator")
```

---

### NAD precursor

**Definition:** Provides biosynthetic precursors (NMN, NR, niacin) that are metabolised via the NAD+ salvage pathway to replenish intracellular NAD+ pools. Supports sirtuin deacetylase activity, PARP1-mediated DNA repair, and mitochondrial bioenergetics. Does not directly activate AMPK or inhibit mTOR.

**Aliases in use:** `nad-precursor`, `nad-salvage-pathway`

**Hallmarks primarily targeted:** [[deregulated-nutrient-sensing]], [[mitochondrial-dysfunction]], [[epigenetic-alterations]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "nad-precursor")
  OR contains(mechanisms, "nad-salvage-pathway")
```

---

### sirtuin activator

**Definition:** Activates one or more sirtuin deacetylases (SIRT1–7), either directly (SIRT1 allosteric activators) or indirectly by raising NAD+ substrate availability. SIRT1 deacetylates histones, p53, NF-κB, and PGC-1α. SIRT3 maintains mitochondrial function. SIRT6 deacetylates histones at telomeres.

**Aliases in use:** `sirtuin-activator`, `sirtuin-modulator`, `sirtuin-activation`, `sirt1-activator`

**Hallmarks primarily targeted:** [[epigenetic-alterations]], [[deregulated-nutrient-sensing]], [[mitochondrial-dysfunction]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "sirtuin-activator")
  OR contains(mechanisms, "sirtuin-modulator")
  OR contains(mechanisms, "sirtuin-activation")
  OR contains(mechanisms, "sirt1-activator")
```

---

### autophagy inducer

**Definition:** Induces macroautophagic flux (autophagosome formation + lysosomal fusion), or specifically induces mitophagy (selective mitochondrial autophagy), clearing damaged proteins, organelles, and aggregates. May act via mTOR inhibition, EP300 acetyltransferase inhibition, or PINK1/Parkin pathway activation.

**Aliases in use:** `autophagy-inducer`, `autophagy-induction`, `mitophagy-induction`, `caloric-restriction-mimetic`, `ep300-inhibitor`

**Hallmarks primarily targeted:** [[disabled-macroautophagy]], [[loss-of-proteostasis]], [[mitochondrial-dysfunction]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "autophagy-inducer")
  OR contains(mechanisms, "autophagy-induction")
  OR contains(mechanisms, "mitophagy-induction")
  OR contains(mechanisms, "caloric-restriction-mimetic")
  OR contains(mechanisms, "ep300-inhibitor")
```

---

### anti-inflammatory

**Definition:** Suppresses pro-inflammatory signalling — including NF-κB, NLRP3/IL-1β, JAK-STAT, and general cytokine pathways — without necessarily inducing senescent-cell death. Distinct from senolytic (kills senescent cells) and senomorphic (specifically targets SASP). Used here for compounds with a general anti-inflammatory profile.

**Aliases in use:** `anti-inflammatory`, `nf-kb-inhibition`, `jak-stat-inhibition`, `jak2-stat3-inhibition`, `sasp-suppression`, `il1-neutralization`

**Sub-class: `jak2-stat3-inhibition`** — specific suppression of the JAK2/STAT3 signalling axis in vascular smooth muscle cells (VSMCs) or macrophages, blocking phenotypic switching from contractile to synthetic VSMC state (Zheng 2025 doi:10.1016/j.ejphar.2025.178234). More target-specific than `jak-stat-inhibition` (which covers the broader JAK family). Use `jak2-stat3-inhibition` on compound pages with JAK2/STAT3-specific evidence, in addition to the broader `anti-inflammatory` value. **Added 2026-05-18** (first compound page: [[molecules/compounds/berberine]]).

**Note:** The intervention page [[interventions/pharmacological/senomorphics]] subsumes the `sasp-suppression` / `jak-stat-inhibition` / `nf-kb-inhibition` subclass. Compound-level pages in `molecules/compounds/` that have SASP-specific evidence should use `senomorphic` in addition to any of the above.

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[cellular-senescence]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "anti-inflammatory")
  OR contains(mechanisms, "nf-kb-inhibition")
  OR contains(mechanisms, "jak-stat-inhibition")
  OR contains(mechanisms, "jak2-stat3-inhibition")
  OR contains(mechanisms, "sasp-suppression")
  OR contains(mechanisms, "il1-neutralization")
```

---

### IL-1β neutralizer

**Definition:** Monoclonal antibody or small-molecule agent that neutralises interleukin-1β, blocking the IL-1R / NLRP3 inflammasome axis. The canonical clinical agent is canakinumab (CANTOS-class). Functionally a subclass of `anti-inflammatory` / `senomorphic`, distinguished here because of the strong Phase 3 CANTOS RCT anchor.

**Aliases in use:** `anti-IL-1beta neutralizing monoclonal antibody`, `il1-neutralization`

**Hallmarks primarily targeted:** [[chronic-inflammation]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "anti-IL-1beta neutralizing monoclonal antibody")
  OR contains(mechanisms, "il1-neutralization")
```

---

### IL-6R antagonist

**Definition:** Monoclonal antibody that binds the interleukin-6 receptor (IL-6R / CD126) — either soluble or membrane-bound — and competitively prevents IL-6 from engaging its receptor. Distinct from anti-IL-6 antibodies (e.g., siltuximab) that neutralize the cytokine itself rather than the receptor. The canonical clinical agent is tocilizumab (Actemra). Blocks both **classical IL-6 signaling** (membrane IL-6R expressed on hepatocytes, leukocytes) and **trans-signaling** (soluble IL-6R shed into circulation; engages gp130 on virtually all nucleated cells). This breadth of blockade distinguishes anti-IL-6R from anti-IL-6: trans-signaling blockade alone requires selective anti-sIL-6R approaches (e.g., sgp130Fc), whereas anti-IL-6R antibodies block both. Aging relevance: IL-6 is the principal acute-phase and SASP cytokine elevated in inflammaging; IL-6R blockade is the most potent pharmacological tool for dissecting the IL-6 axis.

**Aliases in use:** `il-6-receptor-antagonism`, `IL-6R-antagonist`, `cytokine-blockade`

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[altered-intercellular-communication]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "il-6-receptor-antagonism")
  OR contains(mechanisms, "IL-6R-antagonist")
  OR contains(mechanisms, "cytokine-blockade")
```

---

### antioxidant

**Definition:** Scavenges reactive oxygen/nitrogen species (ROS/RNS) or upregulates endogenous antioxidant defences (e.g., via NRF2 activation). Distinct from mitochondria-targeted antioxidants (MitoQ, SkQ1). Translation-gap caveat: broad antioxidants have repeatedly failed or shown harm in human cardiovascular and cancer prevention trials; NRF2-pathway activation is more nuanced. See [[hypotheses/free-radical-theory]] for the contested status of this mechanistic frame.

**Aliases in use:** `antioxidant`, `antioxidant-via-chloramine-quenching`, `nrf2-activator`

**Hallmarks primarily targeted:** [[mitochondrial-dysfunction]], [[chronic-inflammation]]

**Translation caveat:** `translation-blocked-effect-size` is the expected `translation-gap` value for most antioxidants. Verify per-compound pages for exceptions.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "antioxidant")
  OR contains(mechanisms, "antioxidant-via-chloramine-quenching")
  OR contains(mechanisms, "nrf2-activator")
```

---

### lipid-peroxidation-inhibitor

**Added:** R42 (2026-05-19) — first compound page: [[molecules/compounds/alpha-tocopherol]]

**Definition:** Interrupts lipid peroxidation chain reactions in cell membranes and lipid compartments by donating a hydrogen atom to lipid peroxyl radicals (R-OO•), forming a stable lipid hydroperoxide (R-OOH) and a relatively unreactive tocopheroxyl radical. The tocopheroxyl radical is regenerated by water-soluble reductants (ascorbate, glutathione). Mechanistically distinct from general ROS scavenging: the inhibitory activity is specific to the lipid phase (membranes, LDL particles, sebum lipid lamellae) and operates via chain-termination rather than direct radical quenching. α-Tocopherol is the canonical class member; γ-tocopherol also has chain-breaking activity but targets different peroxyl substrates (nitrogen-centred radicals). Ubiquinol (reduced CoQ10) is a secondary membrane lipid-phase antioxidant in the same compartment.

**Sub-class note:** `lipid-peroxidation-inhibitor` overlaps with `antioxidant` but is more specific — all lipid-peroxidation-inhibitors are antioxidants but not vice versa. Use `lipid-peroxidation-inhibitor` when the evidence is specifically for chain-breaking activity in the lipid phase, and include `antioxidant` as a co-listed mechanism. Do not use `lipid-peroxidation-inhibitor` alone on a compound page; always pair with `antioxidant`.

**Aliases in use:** `lipid-peroxidation-inhibitor`

**Hallmarks primarily targeted:** [[mitochondrial-dysfunction]], [[chronic-inflammation]]

**Translation caveat:** Like the broader antioxidant class, systemic α-tocopherol supplementation has not demonstrated clinical benefit for cardiovascular or aging endpoints in large RCTs (HOPE-TOO, ATBC). Topical application in the lipid-phase stratum-corneum context shows more mechanistically coherent efficacy. Gap is therefore context-specific, not absolute.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "lipid-peroxidation-inhibitor")
```

---

### mitochondrial bioenergetics support

**Definition:** Supports mitochondrial energy production and biogenesis through mechanisms other than mTOR or AMPK (i.e., direct phosphocreatine buffering, mitochondrial biogenesis signalling, or mitochondrial tRNA modification). Captures creatine, taurine, and similar metabolic-support compounds.

**Aliases in use:** `phosphocreatine-atp-buffering`, `mitochondrial-bioenergetics`, `mitochondrial-biogenesis`, `mitochondrial-support`, `mitochondrial-tRNA-modifier`

**Hallmarks primarily targeted:** [[mitochondrial-dysfunction]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "phosphocreatine-atp-buffering")
  OR contains(mechanisms, "mitochondrial-bioenergetics")
  OR contains(mechanisms, "mitochondrial-biogenesis")
  OR contains(mechanisms, "mitochondrial-support")
  OR contains(mechanisms, "mitochondrial-tRNA-modifier")
```

---

### tyrosine kinase inhibitor

**Definition:** ATP-competitive kinase inhibitors targeting tyrosine kinase domains (BCR-ABL, SRC family, ephrin receptors). Primary aging-relevant application: dasatinib as a senolytic (ephrin/EPH receptor targeting in preadipocytes). Non-aging oncology applications are not catalogued here.

**Aliases in use:** `tyrosine-kinase-inhibitor`, `bcr-abl-inhibitor`, `src-family-kinase-inhibitor`, `ephrin-receptor-inhibitor`, `ephrin-receptor-inhibition`, `scap-disruption`

**Note:** When dasatinib's senolytic activity is the primary claim, prefer `senolytic` as the primary class. `tyrosine-kinase-inhibitor` is retained as a secondary class for mechanism precision.

**Hallmarks primarily targeted:** [[cellular-senescence]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "tyrosine-kinase-inhibitor")
  OR contains(mechanisms, "bcr-abl-inhibitor")
  OR contains(mechanisms, "src-family-kinase-inhibitor")
  OR contains(mechanisms, "ephrin-receptor-inhibitor")
  OR contains(mechanisms, "ephrin-receptor-inhibition")
  OR contains(mechanisms, "scap-disruption")
```

---

### gut microbiome modulator

**Definition:** Modifies gut microbiome composition, diversity, or metabolic output (SCFAs, LPS burden, secondary bile acids). Includes direct microbial supplementation (probiotics, FMT), metabolite bypass (postbiotics, urolithin A), prebiotics, and drugs with documented microbiome-modulating activity (metformin).

**Aliases in use:** `gut-microbiome-modulation`, `tmao-suppression-microbial`

**Sub-class: `tmao-suppression-microbial`** — compounds that reduce trimethylamine N-oxide (TMAO) production by inhibiting microbial choline-TMA-lyase enzymes (CutC/D) in the gut lumen, thereby reducing substrate availability for hepatic FMO3 and lowering plasma TMAO. Low systemic bioavailability is the enabling property: the compound acts as a luminal agent. The founding compound is [[berberine]] (Ma 2022 doi:10.1038/s41392-022-01027-6). TMAO is a recognized atherogenic metabolite (Wang 2011, Tang 2013). Distinct from dietary choline restriction (which reduces substrate) and from direct FMO3 inhibition (which would have off-target effects). **Added 2026-05-18** (first compound page: [[molecules/compounds/berberine]]).

**Hallmarks primarily targeted:** [[dysbiosis]], [[chronic-inflammation]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "gut-microbiome-modulation")
  OR contains(mechanisms, "tmao-suppression-microbial")
```

---

### caloric restriction / lifestyle

**Definition:** Dietary energy restriction or fasting protocols that modulate IIS/mTOR/AMPK/sirtuin axes without pharmacology. Captures the lifestyle intervention category. Sub-class of autophagy inducer + AMPK activator + mTOR inhibitor by downstream mechanism.

**Aliases in use:** `autophagy-induction`, `mtor-inhibition`, `ampk-activation`, `sirtuin-activation`, `igf1-reduction`, `insulin-sensitization` (on the caloric-restriction intervention page)

**Note:** This class applies only to `type: intervention` pages in `interventions/lifestyle/`. Compound pages that mimic CR effects use `caloric-restriction-mimetic` under the autophagy-inducer class.

**Hallmarks primarily targeted:** [[deregulated-nutrient-sensing]], [[disabled-macroautophagy]], [[mitochondrial-dysfunction]], [[chronic-inflammation]]

**Constituent pages (auto):**

```dataview
LIST FROM "interventions/lifestyle"
WHERE contains(mechanisms, "mtor-inhibition")
  OR contains(mechanisms, "ampk-activation")
  OR contains(mechanisms, "autophagy-induction")
```

---

### satellite cell activator

**Definition:** Promotes activation and proliferation of satellite cells (muscle stem cells), supporting skeletal muscle regeneration and repair in aged muscle. Mechanistically distinct from systemic stem cell therapies. Currently limited to creatine.

**Aliases in use:** `satellite-cell-activation`

**Hallmarks primarily targeted:** [[stem-cell-exhaustion]], [[mitochondrial-dysfunction]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds"
WHERE contains(mechanisms, "satellite-cell-activation")
```

---

### cardiolipin stabilizer

**Definition:** Aromatic-cationic peptides (Szeto–Schiller class) that bind cardiolipin in the inner mitochondrial membrane and stabilize cristae architecture, preserving electron-transport-chain super-complex assembly and reducing reactive-oxygen-species leak. First and currently only clinical-stage member: [[elamipretide]] (SS-31, MTP-131). Promoted from the roadmap to the inventory in R26 with elamipretide as the canonical first compound.

**Aliases in use:** `cardiolipin-stabilizer`, `cardiolipin-binding-peptide`, `mitochondrial-membrane-stabilizer`

**Hallmarks primarily targeted:** [[mitochondrial-dysfunction]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds"
WHERE contains(mechanisms, "cardiolipin-stabilizer")
```

---

### IL-1 receptor antagonist

**Definition:** Recombinant form of the endogenous IL-1 receptor antagonist (IL-1Ra) that competitively binds IL-1R1/IL-1R2 without triggering receptor signalling, blocking both IL-1α and IL-1β from engaging their shared receptor. Mechanistically distinct from IL-1β neutralizers (antibodies such as canakinumab) in that it operates at the receptor level and suppresses signalling from both IL-1 isoforms. The canonical clinical agent is [[anakinra]] (recombinant human IL-1Ra, Kineret). First approved class member introduced R27.

**Aliases in use:** `il-1-receptor-antagonism`

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[cellular-senescence]] (via SASP suppression — IL-1α is a SASP cytokine and paracrine SASP amplifier)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "il-1-receptor-antagonism")
```

---

### TBK1/IKKε inhibitor

**Added:** R35 (2026-05-13) — first compound page: [[molecules/compounds/amlexanox]]

**Definition:** ATP-competitive inhibitors of the non-canonical IκB kinase-related kinases TBK1 (TANK-binding kinase 1) and/or IKKε (IκB kinase epsilon). These kinases sit at the intersection of innate immune signaling (cGAS–STING–IRF3 type I IFN axis) and metabolic inflammation (obesity-induced adipose IKKε → insulin resistance). Inhibition suppresses chronic low-grade NF-κB-driven inflammation and SASP amplification relevant to inflammaging. The founding clinical compound is amlexanox (dual TBK1/IKKε, IC50 ~1–2 μM each; FDA-approved for aphthous ulcers; Phase 2 T2D; preclinical efficacy in MASH and atherosclerosis). Current members have moderate selectivity — not selective IKKε-only agents exist in clinical use.

**Canonical value in use:** `tbk1-ikke-inhibitor`

**Note on class scope:** This class covers compounds whose primary documented mechanism of action relevant to aging is dual TBK1/IKKε inhibition. Compounds that incidentally inhibit TBK1 as a secondary target (e.g., BX795, which is primarily a PDK1 inhibitor) are NOT included; those belong to their primary class. Pure TBK1 inhibitors used for neurodegeneration (ALS/FTD context) are out-of-scope for this aging-mechanism class — use the `anti-inflammatory` class instead for those contexts.

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[deregulated-nutrient-sensing]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "tbk1-ikke-inhibitor")
```

---

### topical retinoid / RAR agonist

**Added:** R41 (2026-05-19) — founding intervention class page: [[interventions/pharmacological/retinoids]]

**Definition:** Topically applied compounds that activate retinoic acid receptors (RAR-α, RAR-β, RAR-γ) and/or retinoid X receptors (RXR), leading to AP-1 transrepression (blocking Jun/Fos-mediated MMP-1/3/9 transcription) and stimulation of collagen-I synthesis via RAR-β/γ-driven gene programs in dermal fibroblasts and keratinocytes. Includes natural retinoids (all-trans retinoic acid / tretinoin, retinol, retinaldehyde) and synthetic third-generation retinoids (adapalene, tazarotene). Non-retinoid functional analogs (bakuchiol) are included in the class page as comparators but use the separate `functional-retinoid-analog` alias value on their compound pages, because their receptor biology is incompletely characterised.

**Canonical values in use:** `RAR-agonist`, `AP-1-transrepression`, `MMP-1-suppression`, `collagen-synthesis-stimulation`, `functional-retinoid-analog`

**Note:** The three mechanism values `RAR-agonist`, `AP-1-transrepression`, `MMP-1-suppression` describe distinct steps in the same pathway and are used together on retinoid compound/intervention pages. Use all three to ensure cross-query coverage.

**Hallmarks primarily targeted:** [[loss-of-proteostasis]], [[genomic-instability]], [[chronic-inflammation]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "RAR-agonist")
  OR contains(mechanisms, "AP-1-transrepression")
  OR contains(mechanisms, "MMP-1-suppression")
  OR contains(mechanisms, "functional-retinoid-analog")
```

---

### senomorphic

**Added:** 2026-06-24 — first compound page: [[molecules/compounds/procyanidin-c1]]

**Definition:** Suppresses the senescence-associated secretory phenotype (SASP) in senescent cells without inducing their death. Reduces the paracrine pro-inflammatory burden of the senescent microenvironment — cytokines (IL-6, IL-8), chemokines, matrix metalloproteinases — without clearing the underlying senescent cell population. Mechanistically distinct from **senolytic** (which kills senescent cells) and from general **anti-inflammatory** agents (which do not specifically target SASP at its source). Canonical examples include rapamycin (mTORC1-mediated SASP suppression), JAK inhibitors, and procyanidin C1 at sub-senolytic concentrations (suppresses SASP output without apoptosis). Note: some compounds exhibit dose-dependent switching — senomorphic at low dose, senolytic at high dose (procyanidin C1; dasatinib at sub-senolytic concentrations in some cell types).

**Aliases in use:** `senomorphic`, `sasp-suppression`

**Note:** The `anti-inflammatory` class carries `sasp-suppression` as a sub-alias. Use `senomorphic` on compound pages where the evidence is specifically for SASP suppression in senescent cells (rather than general anti-inflammatory activity). Use both `senomorphic` and `senolytic` on compound pages with dual-mode dose-dependent activity.

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[cellular-senescence]], [[altered-intercellular-communication]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "senomorphic")
  OR contains(mechanisms, "sasp-suppression")
```

---

### ros-induction (pro-oxidant senolytic)

**Added:** 2026-06-24 — first compound page: [[molecules/compounds/procyanidin-c1]]

**Definition:** Selectively elevates intracellular reactive oxygen species (ROS) in senescent cells, exploiting their already-elevated oxidative stress burden and reduced antioxidant reserve to trigger mitochondrial dysfunction and apoptosis. Mechanistically opposite to the **antioxidant** class: these compounds act as pro-oxidants preferentially in senescent cells while leaving non-senescent cells relatively unaffected (due to the differential antioxidant capacity). Often accompanied by mitochondrial membrane depolarization. Distinct from the **BH3-mimetic** class (which targets BCL-2 family proteins directly) and the **tyrosine kinase inhibitor** senolytic class. The canonical member is procyanidin C1 (PCC1) at high dose per Xu et al. 2021 (*Nature Metabolism*). This class also encompasses other pro-oxidant natural products studied as senolytics.

**Canonical value in use:** `ros-induction`

**Note on naming:** "Pro-oxidant" is the functional descriptor; `ros-induction` is the concise mechanism value. Do NOT use `ros-induction` on antioxidant compounds — the two classes are mechanistically opposed. On compound pages, pair `ros-induction` with `senolytic` to ensure the compound appears in both the senolytic Dataview block and the pro-oxidant senolytic block.

**Hallmarks primarily targeted:** [[cellular-senescence]], [[mitochondrial-dysfunction]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "ros-induction")
```

---

## Discrepancies and cleanup flags

The following `mechanisms:` values on existing compound/intervention pages do not fit cleanly into the classes above. Recommend either (a) updating the compound's mechanism value to use the canonical class name, or (b) adding a new class. These are flagged — not silently reconciled — per R16 discipline.

| Compound | Mechanism value | Issue | Recommended action |
|---|---|---|---|
| [[canakinumab]] | `anti-IL-1beta neutralizing monoclonal antibody`, `IgG1-kappa` | `IgG1-kappa` is an isotype descriptor, not a mechanism class | Remove `IgG1-kappa` from `mechanisms:`; keep biologic class in body prose |
| [[taurine]] | `osmotic-regulator`, `bile-acid-conjugation`, `calcium-signaling-modulator`, `GABA-A-modulator` | These are physiological roles, not aging-mechanism classes; taurine's anti-aging mechanism is disputed | Condense to `mitochondrial-tRNA-modifier`, `antioxidant-via-chloramine-quenching`, `anti-inflammatory`; flag rest as disputed in body |
| [[egcg]] | `pi3k-inhibitor`, `pi3k-akt-mtor-inhibitor` | Overlaps with mTOR inhibitor class but names differ | Normalise to `mTOR inhibitor` class with `pi3k-akt-mtor-inhibitor` as body prose detail |
| [[nmn]] | `mitochondrial-support` | Too vague; should specify the NAD+-sirtuin-mitochondrial chain | Use `nad-precursor` + `mitochondrial-biogenesis` |
| [[navitoclax]] | `BCL-2-family-inhibitor` | Capitalisation inconsistency vs `bcl-2-family-inhibition` | Normalise to `BH3-mimetic` + `senolytic` per cleanup pass |
| [[metformin]] | `complex-I-inhibition`, `gdf15-induction` | These are mechanism steps, not classes; complex-I inhibition is the proximal step upstream of AMPK activation | Keep in body prose; use `AMPK activator` + `mTOR inhibitor` as class values |
| [[dasatinib]] | `tyrosine-kinase-inhibitor`, `bcr-abl-inhibitor`, `src-family-kinase-inhibitor`, `ephrin-receptor-inhibitor` | Four distinct class tags — too granular for cross-query | Use `senolytic` + `tyrosine-kinase-inhibitor`; move oncology-specific subclasses to body prose |
| [[fisetin]] | `pi3k-akt-mtor-inhibitor`, `topoisomerase-inhibitor`, `sirtuin-modulator` | `topoisomerase-inhibitor` is not a canonical aging mechanism class | Move `topoisomerase-inhibitor` to body prose (mechanistic note); use `senolytic` + `antioxidant` + `sirtuin-activator` as classes |
| [[senolytics]] (intervention) | `scap-disruption` | Not in compound pages; fine for the category-level intervention page | Retain; document here that `scap-disruption` is valid at intervention category level |

#gap/class-normalisation-needed — a cleanup pass on `mechanisms:` field values across compound pages is warranted after R16. Priority: high (matrix Dataview blocks will return incomplete results until normalised).

---

### telomerase-activation / tert-induction

**Added:** R28 (2026-05-07) — first intervention page: [[interventions/pharmacological/telomerase-activators]]

**Definition:** Pharmacological or biological upregulation of telomerase activity in somatic cells, either by inducing TERT transcription (`tert-induction`) or by direct biochemical stimulation of the assembled holoenzyme (`telomerase-activation`). Includes small-molecule TERT-promoter activators (cycloastragenol/TA-65), androgen/sex-hormone-mediated TERT upregulation (danazol, oxymetholone), indirect activators operating via sirtuin or PI3K-AKT pathways, and telomerase mRNA/peptide delivery. Does NOT include AAV-TERT gene therapy (covered as a separate `type: intervention` page — [[interventions/gene-therapy/aav-tert]]); that page uses `telomere-extension` and `telomerase-reactivation` as mechanism class values (retained as aav-tert-specific) since it is a gene therapy modality.

**Canonical values in use:** `telomerase-activation`, `tert-induction`

**Hallmarks primarily targeted:** [[telomere-attrition]], [[cellular-senescence]], [[stem-cell-exhaustion]]

**Translation-gap note:** For general aging indication, phase-3-rct-needed. For telomeropathy indications (dyskeratosis congenita, aplastic anemia), androgens have Phase 1/2 human evidence (Townsley 2016). Cancer risk is the dominant translation barrier for the general aging use case.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "telomerase-activation")
  OR contains(mechanisms, "tert-induction")
```

---

### hdac-inhibition / histone-acetylation-augmentation

**Added:** R31 (2026-05-07) — first intervention page: [[interventions/pharmacological/hdac-inhibitors]]

**Definition:** Pharmacological inhibition of Zn2+-dependent histone deacetylases (Class I, IIa, IIb, IV; HDAC1–11), resulting in increased acetylation of histone tails and non-histone substrates. The primary aging-relevant consequence is augmentation of histone acetylation at stress-response, autophagy, and metabolic gene promoters that are hypo-acetylated in aged tissues. Sub-classes by selectivity: pan-HDAC inhibitors (hydroxamic acids: vorinostat, panobinostat, belinostat), Class I-selective (benzamides: entinostat, chidamide), cyclic peptides (romidepsin, Class I), HDAC6-selective (tubastatin A, ricolinostat — relevant to tubulin acetylation and axonal transport). Does NOT include Class III (sirtuin) deacetylase modulators, which are covered under the `sirtuin activator` class.

**Canonical values in use:** `hdac-inhibition`, `histone-acetylation-augmentation`

**Note on selectivity sub-variants:** when a page's aging mechanism is specifically HDAC6 → tubulin acetylation → axonal transport → autophagy, both `hdac-inhibition` and `autophagy-inducer` should be listed to ensure Dataview matrix coverage across relevant hallmarks.

**Hallmarks primarily targeted:** [[epigenetic-alterations]], [[loss-of-proteostasis]] (via HDAC6 → tubulin acetylation → axonal transport and aggresome pathways)

**Translation-gap note:** All FDA-approved HDAC inhibitors are oncology-indicated. No HDAC inhibitor has an aging or healthspan indication. Pan-HDAC inhibitor toxicity (cytopenias, GI) at oncology doses is a major safety barrier for chronic aging use. HDAC6-selective inhibitors have the most tractable aging-safety profile.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "hdac-inhibition")
  OR contains(mechanisms, "histone-acetylation-augmentation")
```

---

### parp-inhibition

**Added:** R32b (2026-05-07) — first intervention page: [[interventions/pharmacological/parp-inhibitors]]

**Definition:** Competitive NAD+-mimetic inhibitors of PARP1 (and, to varying degrees, PARP2) that suppress its catalytic poly(ADP-ribosyl)ation activity and/or trap the PARP1–DNA complex at single-strand break sites, preventing repair-complex release. Two mechanistic sub-effects are distinguished:
- **Catalytic inhibition** (`parp-inhibition`): blocks PAR synthesis → impaired SSBR / BER. Active in all cells.
- **PARP-trapping** (`parp-trapping`): the PARP inhibitor stabilises the PARP1–DNA complex at the SSB, creating a physical block to DNA replication in S phase → DSBs → synthetic lethality in HR-deficient (BRCA1/2-mutant) cells. Talazoparib > olaparib > niraparib > rucaparib > veliparib in trapping potency.

For the aging-context use case (not synthetic lethality), the relevant mechanism is catalytic inhibition of constitutively active PARP1 in cells subject to high age-related DNA damage burden — potentially reducing NAD+ depletion and restoring sirtuin substrate availability. This is speculative relative to the oncology indication.

**Canonical values in use:** `parp-inhibition`, `parp-trapping`

**Note:** `parp-trapping` may be listed as a secondary mechanism on compound pages within the class; list `parp-inhibition` as the primary class value for Dataview coverage. Individual compound pages (olaparib, talazoparib, etc.) should live under `molecules/compounds/` when seeded; this intervention page is the class navigator.

**Hallmarks primarily targeted:** [[genomic-instability]]

**Secondary aging-hypothetical hallmark:** [[deregulated-nutrient-sensing]] (via NAD+–PARP1–sirtuin axis; speculative)

**Translation-gap note:** All FDA-approved members are oncology-indicated (BRCA1/2-mutant cancers). Myelosuppression (anemia, thrombocytopenia, increased risk of myelodysplastic syndrome) at chronic oncology doses is the dominant safety barrier for aging use. No aging-indication RCT has completed. PARP inhibitors demonstrably increase clonal hematopoiesis prevalence, which is itself an aging-associated risk state.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "parp-inhibition")
  OR contains(mechanisms, "parp-trapping")
```

---

### dna-pk-inhibition / nhej-blockade

**Added:** R33 (2026-05-07) — first intervention page: [[interventions/pharmacological/dna-pkcs-inhibitors]]

**Definition:** ATP-competitive inhibitors of the DNA-dependent protein kinase catalytic subunit (DNA-PKcs / PRKDC), a PIKK-family kinase that forms the DNA-PK holoenzyme together with the [[ku70-ku80]] heterodimer and serves as the master regulator of non-homologous end joining (NHEJ) DSB repair. Two mechanism values are distinguished:
- **`dna-pk-inhibition`** (primary): blocks DNA-PKcs kinase activity → impairs autophosphorylation and downstream substrate phosphorylation (XRCC4, LIG4, Artemis) → NHEJ-incompetent cells. Active in all cells.
- **`nhej-blockade`** (downstream consequence): the net suppression of NHEJ double-strand break repair as a direct result of DNA-PKcs inhibition. List both on class-member pages to ensure Dataview coverage under either query.

For the aging-context hypothesis, the relevant mechanistic claim is that selective DNA-PKcs inhibition at sub-toxic doses might redirect DSB repair toward higher-fidelity HR (BRCA2-dependent), reducing age-related mutational burden. This is speculative — see [[interventions/pharmacological/dna-pkcs-inhibitors]] for full critique.

**Primary clinical application (oncology):** DNA-PKcs inhibition sensitises cells to ionising radiation and chemotherapy (radiosensitizer strategy). This is the established mechanism for the class; aging applications are hypothetical.

**Canonical values in use:** `dna-pk-inhibition`, `nhej-blockade`

**Note:** `radiosensitization` appears in this class's frontmatter as a third mechanism value documenting the primary clinical rationale (IR enhancement). It is NOT intended as a standalone aging mechanism class — it describes the oncology-context pharmacodynamic consequence. List it alongside `dna-pk-inhibition` on compound pages within this class when the compound has demonstrated radiosensitization activity.

**Hallmarks primarily targeted:** [[genomic-instability]]

**Secondary aging-hypothetical hallmark:** [[stem-cell-exhaustion]] (DNA-PKcs activity in HSC quiescence; see [[dna-pkcs]] protein page)

**Translation-gap note:** No DNA-PKcs inhibitor has an aging or healthspan indication. Long-term DNA-PKcs loss-of-function causes severe combined immunodeficiency (SCID phenotype in mice and humans); chronic full blockade would be immunosuppressive. The aging hypothesis requires sub-complete inhibition at a dose that biases DSB repair pathway choice without ablating NHEJ capacity. No such dose has been identified in healthy aging animals. Safety profile is investigational for aging, unsafe with complete long-term inhibition.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "dna-pk-inhibition")
  OR contains(mechanisms, "nhej-blockade")
```

---

### adenosine-A2A-receptor-agonism

**Added:** 2026-06-09 — first compound page: [[molecules/compounds/pdrn]] (PDRN/polynucleotide as selective ADORA2A agonist)

**Definition:** Selective agonism of the adenosine A2A receptor (ADORA2A / A2AR), a Gs-coupled GPCR whose activation raises intracellular cAMP, suppresses NF-κB-driven inflammation, and promotes pro-angiogenic gene expression (VEGF-A upregulation). In the context of wound healing and tissue repair, A2A receptor agonism reduces pro-inflammatory cytokines (TNF-α, IL-12), promotes neovascularization, and supports tissue remodelling. PDRN (polydeoxyribonucleotide) acts as an A2A agonist after partial degradation to nucleosides, and as a nucleotide substrate supply source (salvage pathway). The A2A receptor agonism hypothesis for PDRN is supported by reversal of PDRN effects by the selective A2A antagonist DMPX in rodent ischemia/thermal-injury models (Bitto 2008, Galeano 2008). The downstream dermal-rejuvenation relay was characterized in 2025: A2AR → ↑cAMP → PKA → CREB → PCK1 upregulation in macrophages → M2 polarization → paracrine TGF-β/SMAD and STAT3 signalling to fibroblasts → type I/III collagen synthesis [Byun 2025, doi:10.3390/ijms26178720]. (The upstream CD73/ecto-5′-nucleotidase step that would liberate free adenosine from PN is plausible but not established for PN specifically — flagged `#gap/no-mechanism` on the atomic pages, not asserted here.)

**Note on scope:** This class is specific to compounds whose primary pharmacodynamic mechanism involves the adenosine purinergic receptor subtype A2A. It is distinct from `anti-inflammatory` (NF-κB-centric) and from `immunomodulation` (immune cell phenotype), though all three often co-occur downstream. Use this class when A2A receptor engagement is the primary upstream pharmacological event. When A2A agonism is one of multiple proposed mechanisms (as with PDRN), list this class alongside `anti-inflammatory` and `extracellular-matrix-remodeling`.

**Canonical values in use:** `adenosine-A2A-receptor-agonism`

**Merge note (2026-06-09):** a parallel seeder briefly created a broader duplicate entry (`adenosine-receptor-agonism` / `a2ar-agonism`) for the same biology; that entry was merged here and those value strings deprecated. Use `adenosine-A2A-receptor-agonism` only. The Dataview below also catches the deprecated strings so any legacy frontmatter still resolves.

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[altered-intercellular-communication]], [[loss-of-proteostasis]] (dermal collagen, indirect via fibroblast relay)

**Constituent compound pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "adenosine-A2A-receptor-agonism")
  OR contains(mechanisms, "adenosine-receptor-agonism")
  OR contains(mechanisms, "a2ar-agonism")
```

---

### extracellular-matrix-remodeling

**Added:** 2026-05-12 — first compound pages: [[molecules/compounds/ghk-cu]] (collagen synthesis), [[molecules/compounds/hyaluronic-acid]] (HA-ECM homeostasis)

**Definition:** Modulation of extracellular matrix composition, architecture, or turnover — including promotion of collagen, elastin, or glycosaminoglycan (HA, heparan sulfate, chondroitin sulfate) synthesis; inhibition of matrix metalloproteinases (MMPs); or direct supplementation of ECM structural components. Distinct from the `anti-inflammatory` class: ECM remodeling affects physical tissue architecture rather than solely immune signaling, though the two frequently co-occur. Aging relevance: the ECM undergoes characteristic degradation (collagen crosslinking, MMP upregulation, HA molecular weight fragmentation, glycation-derived AGEs) that impairs tissue mechanics, hydration, stem cell niche integrity, and paracrine signaling.

**Canonical values in use:** `extracellular-matrix-remodeling`, `collagen-synthesis-stimulation`, `copper-chaperone`

**Hallmarks primarily targeted:** [[altered-intercellular-communication]], [[stem-cell-exhaustion]]

**Note on scope:** HA supplementation is a direct ECM component strategy (MW-dependent biological effects); GHK-Cu acts via TGF-β signaling to induce collagen synthesis. Both use `extracellular-matrix-remodeling` as their primary aging-mechanism class. MMP inhibition (for anti-metastasis) is oncology-context, not catalogued here.

**Note on copper-chaperone sub-mechanism (merged from former duplicate entry):** GHK-Cu delivers Cu²⁺ to copper-dependent enzymes (lysyl oxidase, superoxide dismutase Cu/Zn-SOD) in the extracellular space and at cell surfaces. `copper-chaperone` is a secondary mechanism value used alongside `extracellular-matrix-remodeling` on compound pages where this delivery role is the primary bioactivity claim (as opposed to structural ECM building-block supply).

**Constituent compound pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "extracellular-matrix-remodeling")
  OR contains(mechanisms, "collagen-synthesis-stimulation")
```

---

### immunomodulation

**Added:** 2026-05-12 — existing pages using value: [[molecules/compounds/hyaluronic-acid]] (HA → macrophage M2 polarization), [[interventions/stem-cell-therapy/mesenchymal-stem-cell-therapy]] (MSC paracrine immunomodulation), [[molecules/compounds/ll-37]] (FPR2-mediated resolution of inflammation)

**Definition:** Broad-spectrum modulation of immune cell behavior — including macrophage polarization toward M2-like anti-inflammatory phenotype, regulatory T cell induction, NK cell modulation, or innate immune tolerance induction — without necessarily inhibiting a single cytokine or pathway. Distinct from `anti-inflammatory` (which is single-pathway NF-κB/NLRP3/JAK-STAT suppression) and from `IL-1β neutralizer` / `IL-6R antagonist` (single-cytokine blockade). The canonical aging-relevant mechanism is restoring immune balance that skews toward pro-inflammatory (M1/Th1) with aging. HMW-HA's CD44-mediated M2 polarization is the archetype in this class.

**Canonical values in use:** `immunomodulation`, `immunomodulation-via-fpr2`

**Note on class boundaries:** use `immunomodulation` when the mechanism operates at the level of immune cell fate/phenotype (not just cytokine suppression). When a compound both suppresses NF-κB AND polarizes macrophages, list both `anti-inflammatory` and `immunomodulation`.

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[disabled-adaptive-immunity]], [[altered-intercellular-communication]]

**Constituent compound pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "immunomodulation")
  OR contains(mechanisms, "immunomodulation-via-fpr2")
```

---

### allele-selective-degradation / RNA-targeted-knockdown

**Added:** 2026-05-07 (allele-selective-oligonucleotides intervention page) — first class entry for the oligonucleotide modality.

**Definition:** Sequence-specific degradation or functional silencing of a target RNA via Watson-Crick base pairing between a synthetic oligonucleotide and its cognate mRNA or pre-mRNA. Two principal mechanistic sub-classes, each distinct in molecule type and enzymatic effector:

- **`allele-selective-degradation`** (primary class value, allele-targeting programs): the oligonucleotide hybridises to a single-nucleotide variant (SNV) position in the target RNA, exploiting single-mismatch thermodynamic discrimination to degrade or silence the mutant allele while sparing the wild-type. Requires that the SNV create sufficient hybridisation energy differential (typically ≥1.5 kcal/mol ΔΔG) to enable selective RNase H or RISC-mediated cleavage of the mutant transcript. Aging-relevance: direct molecular targeting of clonally expanded somatic mutations (CHIP drivers, mosaic SNVs in cherry angiomas, etc.).
- **`rnase-h-recruitment`** (ASO mechanism): single-stranded antisense oligonucleotide (typically a gapmer — 2'-MOE-flanked PS-backbone DNA central gap) recruits RNase H1 to the RNA:DNA heteroduplex, cleaving the RNA strand. Most FDA-approved ASOs (inotersen, tofersen, nusinersen) use this mechanism, though nusinersen is a steric blocker (no RNase H recruitment — see `splice-modulation` below).
- **`rna-interference`** (siRNA mechanism): double-stranded RNA (typically 19–21 nt duplex with 2-nt 3'-overhangs, guide strand GalNAc- or LNP-loaded) is loaded into RISC (AGO2), where the guide strand directs endonucleolytic cleavage of the target mRNA. FDA-approved siRNA drugs: patisiran, vutrisiran, givosiran, lumasiran, inclisiran.
- **`splice-modulation`** (steric ASO mechanism): single-stranded phosphorodiamidate morpholino oligomer (PMO) or 2'-OMe/LNA ASO sterically blocks splice-enhancer or splice-silencer sequences, redirecting spliceosomal inclusion/exclusion of exons without RNase H cleavage. Aging-relevance: potentially applicable to age-related splicing dysregulation. FDA-approved: nusinersen (SMN2 exon 7 inclusion), eteplirsen, casimersen, viltolarsen, golodirsen (DMD exon skipping).

**Note on class granularity:** The four sub-mechanisms above are distinct; the `allele-selective-degradation` primary value is intended for programs that exploit SNV-level discrimination. Use `rnase-h-recruitment`, `rna-interference`, and `splice-modulation` as secondary mechanism values for oligonucleotide programs that are RNA-targeted but NOT allele-selective (e.g., most current FDA-approved drugs target wild-type RNA of a disease-causing gene, not a specific mutant allele). This distinction matters for aging-context applicability.

**Canonical values in use:** `allele-selective-degradation`, `rnase-h-recruitment`, `rna-interference`, `splice-modulation`

**Hallmarks primarily targeted (aging-context):** [[genomic-instability]] (via somatic-mutation-selective clearance of clonally expanded mutant-allele-bearing cells); [[cellular-senescence]] (indirectly, by reducing mutant-allele-driven pro-senescence signalling in CHIP)

**Note:** Current FDA-approved oligonucleotide drugs are indicated for monogenic inherited diseases (TTR amyloidosis, SMA, ALS, porphyria, hyperoxaluria, hypercholesterolemia) and are NOT allele-selective in the strict sense — they target wild-type RNA of disease-causing genes. The allele-selective sub-class (exploiting SNV discrimination) is active in HD and polyglutamine disease research programs but has no FDA-approved representative as of 2026-05-07. The aging-specific application (CHIP drivers, cherry angioma GNAQ Q209L) has no clinical program.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "allele-selective-degradation")
  OR contains(mechanisms, "rnase-h-recruitment")
  OR contains(mechanisms, "rna-interference")
  OR contains(mechanisms, "splice-modulation")
```

---

### ppara-agonism / cr-mimetic

**Added:** 2026-05-14 — first intervention page: [[interventions/pharmacological/ppara-agonists]]

**Definition:** Pharmacological activation of PPARα (NR1C1 / peroxisome proliferator-activated receptor alpha) via direct ligand binding to the receptor's ligand-binding domain, stabilizing the active AF-2 helix conformation and driving transcription of PPRE-containing genes. The primary downstream biology recapitulates the caloric restriction / fasting transcriptional program — upregulating fatty acid β-oxidation (CPT1A, ACOX1, ACADM), ketogenesis (HMGCS2), and HDL-raising apolipoproteins (APOA1); suppressing TG-raising APOC3; inducing FGF21 and adiponectin; and transrepressing NF-κB. The fibrate drug class (fenofibrate, gemfibrozil, bezafibrate, ciprofibrate) and the selective PPARα modulator pemafibrate (SPPARMα) are the clinical representatives. In geroscience, PPARα agonism is proposed as a caloric-restriction mimetic based on transcriptomic overlap (Corton 2004, JBC) and invertebrate lifespan extension in a PPARα-ortholog-dependent manner (Brandstädt 2013, Aging Albany).

**Related class:** `cr-mimetic` is used as a secondary mechanism value on this class's pages and on caloric restriction lifestyle pages. Do NOT use `cr-mimetic` as a standalone class for fibrate compound pages — list both `ppara-agonism` (the proximal mechanism) and `cr-mimetic` (the downstream framing) together.

**Canonical values in use:** `ppara-agonism`, `cr-mimetic`, `fatty-acid-oxidation`, `adiponectin-induction`, `lipid-modulation`

**Note on class boundaries:** `cr-mimetic` is shared with compounds acting via other mechanisms (metformin → AMPK → mTOR → CR-like; rapamycin → mTOR → CR-like). Use `ppara-agonism` as the primary discriminating value for compounds in this class. Compounds acting via PPARγ or PPARδ are NOT included here — use the `anti-inflammatory` or `insulin-sensitizer` classes respectively.

**Hallmarks primarily targeted:** [[deregulated-nutrient-sensing]], [[altered-intercellular-communication]] (adiponectin induction)

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "ppara-agonism")
  OR contains(mechanisms, "cr-mimetic")
```

---

### gla-protein-carboxylation / anti-calcification

**Added:** 2026-05-08 — first compound page: [[molecules/compounds/vitamin-k2]]

**Definition:** Compounds that serve as essential cofactors (or cofactor precursors) for γ-glutamyl carboxylase (GGCX)-dependent carboxylation of vitamin-K-dependent Gla proteins, most importantly [[matrix-gla-protein]] (MGP) in the arterial wall and [[osteocalcin]] in bone. Carboxylated MGP inhibits hydroxyapatite crystal nucleation in the vascular media, preventing progressive arterial calcification. The primary aging-relevant pharmacodynamic readout is normalization of dephosphorylated-uncarboxylated MGP (dp-ucMGP), the circulating biomarker of vascular K2 insufficiency. Distinct from direct calcium-channel blockade or statin-mediated calcification prevention — operates entirely through the carboxylation enzyme cycle.

**Canonical values in use:** `matrix-gla-protein-carboxylation`, `vitamin-k-cycle`, `anti-calcification`

**Note on value usage:** Use `matrix-gla-protein-carboxylation` as the primary mechanism value (maps to the most specific action). `vitamin-k-cycle` is acceptable as a secondary value to capture the cofactor role (VKORC1/GGCX cycle). `anti-calcification` is a downstream-consequence value; list only when the compound page discusses calcification endpoint data directly. All three are included in the Dataview block below.

**Hallmarks primarily targeted:** [[chronic-inflammation]] (via Gas6/TAM receptor signalling — carboxylated Gas6 is required for macrophage efferocytosis; impaired efferocytosis drives unresolved inflammation); no direct mapping to a standard hallmark for vascular calcification per se, which is a downstream phenotype rather than a López-Otín hallmark.

**Translation-gap note:** The dp-ucMGP biomarker is reliably normalized by K2 supplementation, but downstream endpoint benefit (CAC reduction, MACE, arterial stiffness) is not yet demonstrated in large well-powered RCTs in primary-prevention populations (AVADEC null, Knapen 2015 positive for PWV but not replicated). Translation gap = `phase-3-rct-needed` for calcification/MACE endpoints.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "matrix-gla-protein-carboxylation")
  OR contains(mechanisms, "vitamin-k-cycle")
  OR contains(mechanisms, "anti-calcification")
```

---

### actin-regulatory-peptide

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/tb-500]]

**Definition:** Short peptides (typically 5–10 amino acids) derived from thymosin beta-4 or structurally related WH2-domain actin-binding proteins that modulate G-actin/F-actin equilibrium by sequestering globular actin monomers. The canonical mechanism is sequestration of unpolymerized actin (G-actin) via a LKKTE core motif, which shifts the cytoskeletal balance toward reduced F-actin and altered cell migration dynamics, promotes angiogenesis (via endothelial cell migration), and supports wound healing. Distinct from direct actin-polymerizing agents and from cytoskeletal drugs (e.g., phalloidin, latrunculins) — the biological context here is endogenous peptide fragments operating at physiological concentrations. The class is paracrine-active: secreted thymosin beta-4 and its fragments modulate neighbouring cell behaviour, placing the mechanism at the [[altered-intercellular-communication]] hallmark boundary.

**Note on aging relevance:** No DrugAge entry exists for TB-500 or the LKKTETQ fragment as of 2026-05-09. The aging-relevance is indirect — tissue repair capacity declines with age; actin-regulatory peptides are being evaluated as regenerative interventions for musculoskeletal aging and wound healing deficits. No lifespan extension data exists in any model organism for this class. The `hallmarks:` field is left empty on compound pages in this class if no direct hallmark link has been established; an association with [[altered-intercellular-communication]] is plausible for extracellular/paracrine mechanisms but should not be assumed without evidence.

**Canonical values in use:** `actin-regulatory-peptide`, `actin-sequestration`, `angiogenesis-modulation`

**Hallmarks primarily targeted:** None directly established for aging (see note above); potential association with [[altered-intercellular-communication]] (paracrine signalling) and [[stem-cell-exhaustion]] (tissue repair capacity) — flag as speculative.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "actin-regulatory-peptide")
  OR contains(mechanisms, "actin-sequestration")
  OR contains(mechanisms, "angiogenesis-modulation")
```

---

### pro-inflammatory / NLRP3-activating

**Added:** 2026-05-09 — first compound page: [[molecules/compounds/palmitic-acid]]

**Definition:** Compounds (typically dietary exposures rather than therapeutic agents) that activate the NLRP3 inflammasome and/or NF-κB transcriptional pathway, driving IL-1β and IL-18 maturation, GSDMD-mediated pyroptosis, and systemic inflammaging. Distinct from the `anti-inflammatory` class (which suppresses these pathways). This class is used for harmful dietary exposures catalogued in the wiki to support the "source matters" framing in dietary-aging interpretation — it does NOT imply a therapeutic intent.

**Canonical values in use:** `pro-inflammatory`, `nlrp3-activating`

**Note on class usage:** This class applies only to harmful dietary exposures listed as `type: compound` in `molecules/compounds/` where the primary mechanistic harm is inflammasome/NF-κB activation. Do NOT apply to therapeutic compounds, even those with pro-inflammatory off-target effects. For anti-senolytic or senomorphic compounds that modulate inflammasome output, use the existing `anti-inflammatory` class.

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[altered-intercellular-communication]] (via paracrine SASP amplification through IL-1β)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "pro-inflammatory")
  OR contains(mechanisms, "nlrp3-activating")
```

---

### ldl-lowering

**Added:** 2026-05-09 — first intervention page: [[interventions/pharmacological/statins]]

**Definition:** Pharmacological agents that reduce circulating LDL-C and/or ApoB-containing particle concentrations through upregulation of hepatic LDL receptor (LDLR) expression — the dominant mechanism by which statins, ezetimibe, and PCSK9 inhibitors operate. The canonical upstream axis is: drug → ↓ hepatic free cholesterol → SCAP/INSIG dissociation → ↑ [[srebp-2]] cleavage → ↑ LDLR transcription → ↑ plasma LDL/ApoB clearance. The class is defined by LDL/ApoB-lowering as the primary pharmacodynamic readout, not by HMG-CoA reductase occupancy specifically (which is the `hmgcr-inhibition` sub-class). Statins qualify for both classes. Distinct from `ldl-raising` (harmful dietary exposures that suppress LDLR via the same axis in the opposite direction).

**Sub-class: `hmgcr-inhibition`** — competitive inhibition of HMG-CoA reductase, the rate-limiting enzyme of the mevalonate pathway. Produces the LDLR upregulation as a downstream consequence (see above). Also depletes geranylgeranyl-PP and farnesyl-PP → reduced protein prenylation (Rho/Rac small GTPases) → pleiotropic anti-inflammatory effects. Statins use both `ldl-lowering` and `hmgcr-inhibition` as mechanism values to allow Dataview queries on either the pharmacodynamic output (LDL lowering) or the molecular mechanism (HMG-CoA reductase).

**Sub-class: `acly-inhibition`** — inhibition of ATP-citrate lyase (ACLY / ACLY gene), which converts mitochondria-exported citrate to cytosolic acetyl-CoA + oxaloacetate. ACLY sits upstream of HMG-CoA reductase in the cholesterol biosynthesis pathway; its inhibition produces the same downstream SREBP-2 → LDLR upregulation axis as statins, but at a different enzymatic step. The canonical clinical agent is [[bempedoic-acid]]. Key pharmacological distinction: bempedoic acid requires liver-specific bioactivation by ACSVL1 (SLC27A2), which is absent in skeletal muscle — this explains the absence of statin-associated muscle symptoms (SAMS). Also competes for renal organic anion transporters → mild uricosuria effects. Use both `acly-inhibition` and `ldl-lowering` on bempedoic-acid-class pages to capture both mechanism and pharmacodynamic readout.

**Sub-class: `npc1l1-inhibition`** — selective inhibition of NPC1L1 (Niemann-Pick C1-like 1), the brush-border cholesterol transporter expressed on jejunal enterocytes and (at lower levels) hepatocyte canalicular membrane. NPC1L1 mediates sterol uptake from the gut lumen; ezetimibe binds NPC1L1 and blocks its sterol-induced endocytic internalization, thereby reducing intestinal cholesterol absorption by ~50%. This entry point is upstream of and mechanistically distinct from hepatic cholesterol biosynthesis (the target of statins). The downstream LDLR upregulation axis is shared: ↓ intestinal absorption → ↓ hepatic free cholesterol → SCAP/INSIG dissociation → ↑ SREBP-2 → ↑ LDLR → ↑ LDL clearance. The canonical clinical agent is [[ezetimibe]]. Because the LDL-lowering effect does not carry the statin pleiotropic anti-inflammatory/prenylation-depletion effects, ezetimibe provides a cleaner tool to test whether LDL-C lowering per se (vs. statin pleiotropy) drives CV-outcome benefit — which IMPROVE-IT 2015 confirmed. Use both `npc1l1-inhibition` and `ldl-lowering` on ezetimibe-class pages.

**Added 2026-05-09** (first compound page: [[molecules/compounds/ezetimibe]]).

**Sub-class: `ldlr-mrna-stabilization`** — post-transcriptional mechanism distinct from SREBP-2-mediated transcriptional upregulation of LDLR. The founding compound is [[berberine]], which binds the 3′-UTR of *LDLR* mRNA via an ERK-dependent mechanism, increasing transcript half-life without altering LDLR gene transcription (Kong 2004, Nat Med doi:10.1038/nm1135). Additive with statins (which operate transcriptionally). List both `ldlr-mrna-stabilization` and `ldl-lowering` on berberine-class pages. **Added 2026-05-18** (first compound page: [[molecules/compounds/berberine]]).

**Sub-class: `pcsk9-reduction`** — reduction of PCSK9 secretion or expression, preserving surface LDLR from PCSK9-mediated lysosomal degradation. Distinguished from anti-PCSK9 monoclonal antibodies (which neutralize circulating PCSK9 protein) by mechanism: berberine reduces hepatic PCSK9 *secretion*, whereas evolocumab/alirocumab neutralize the secreted protein. Both routes increase net surface LDLR. List `pcsk9-reduction` as a secondary value on compound pages with documented PCSK9-secretion reduction. **Added 2026-05-18** (first compound page: [[molecules/compounds/berberine]]).

**Canonical values in use:** `ldl-lowering`, `hmgcr-inhibition`, `ldlr-upregulation`, `ldlr-mrna-stabilization`, `acly-inhibition`, `npc1l1-inhibition`, `pcsk9-reduction`

**Hallmarks primarily targeted:** [[chronic-inflammation]] (atherosclerosis reduction, CRP lowering), [[altered-intercellular-communication]] (plaque-derived inflammatory signals)

**Constituent compounds/interventions (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "ldl-lowering")
  OR contains(mechanisms, "hmgcr-inhibition")
  OR contains(mechanisms, "ldlr-upregulation")
  OR contains(mechanisms, "ldlr-mrna-stabilization")
  OR contains(mechanisms, "pcsk9-reduction")
```

---

### nitric-oxide-signaling

**Added:** 2026-05-20 — first compound page: [[molecules/compounds/flavan-3-ols]]

**Definition:** Compounds that enhance endothelial nitric oxide (NO) bioavailability by activating endothelial nitric oxide synthase (eNOS) via phosphorylation at activating residues (Ser633, Ser1177) and dephosphorylation at inhibitory residues (Thr495), or by upregulating eNOS protein expression. The net effect is increased NO production, vasodilation, and improved endothelial function — measurable as flow-mediated dilation (FMD). In the aging context, endothelial NO production declines progressively with age due to eNOS uncoupling, tetrahydrobiopterin (BH4) depletion, and oxidative quenching of NO by superoxide; restoring eNOS activity addresses the proximal driver of age-related endothelial dysfunction upstream of cardiovascular disease. The canonical class member is (-)-epicatechin (CID 72276), which activates eNOS via PI3K/CaM-dependent pathways. Distinct from `antioxidant` (which quenches ROS reactive with NO) and from direct NO donors (nitrates, PDE5 inhibitors); `nitric-oxide-signaling` is reserved for compounds whose primary documented mechanism is direct eNOS activation, not ROS scavenging or cGMP-pathway pharmacology.

**Note on class boundaries:** Some compounds activate eNOS as a secondary mechanism alongside other primary mechanisms — list `nitric-oxide-signaling` alongside the primary class for completeness. For compounds where NO/FMD is the primary aging-context endpoint (as in flavan-3-ol class pages), `nitric-oxide-signaling` is the lead class value.

**Canonical values in use:** `nitric-oxide-signaling`, `enos-activation`

**Hallmarks primarily targeted:** [[chronic-inflammation]] (endothelial dysfunction is upstream of vascular inflammaging; NO suppresses NF-κB signalling in endothelial cells)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "nitric-oxide-signaling")
  OR contains(mechanisms, "enos-activation")
```

---

### ldl-raising

**Added:** 2026-05-09 — first compound page: [[molecules/compounds/palmitic-acid]]

**Definition:** Dietary exposures that elevate plasma LDL cholesterol and ApoB, primarily by suppressing hepatic LDL receptor (LDLR) expression via the SCAP-INSIG-SREBP-2 sensing pathway. Elevated LDL/ApoB causally drives atherosclerosis. This class is used for harmful dietary constituents (specific saturated fatty acids) to enable "what raises ApoB/LDL" Dataview queries from the dietary-exposure angle. Distinct from statin-class compounds (which lower LDL via the same LDLR/SREBP-2 axis but in the opposite direction — classify statins as `ldl-lowering` or by their HMG-CoA reductase mechanism). Source specificity is critical: lauric (C12), myristic (C14), and palmitic (C16) acids raise LDL; stearic (C18) does not — list only the fatty acids with documented LDL-raising activity in this class.

**Canonical values in use:** `ldl-raising`

**Hallmarks primarily targeted:** [[chronic-inflammation]] (atherosclerosis as downstream of sustained LDL burden), [[altered-intercellular-communication]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "ldl-raising")
```

---

### lipotoxic

**Added:** 2026-05-09 — first compound page: [[molecules/compounds/palmitic-acid]]

**Definition:** Dietary fatty acid exposures that cause direct cellular toxicity via multiple converging mechanisms: (i) ER stress induction through the PERK/ATF4/CHOP arm of the unfolded protein response, (ii) ceramide synthesis via serine palmitoyltransferase (SPT) driving mitochondrial dysfunction and ROS overload, (iii) mTORC1 hyperactivation via lysosomal amino-acid/lipid sensing, suppressing autophagy and impairing proteostasis. The aggregate cellular outcome is lipoapoptosis (in hepatocytes) or senescence (in endothelial and other cell types). This class is specific to saturated fatty acids — unsaturated fatty acids (oleic, linoleic, EPA, DHA) generally do not cause lipotoxicity at physiological concentrations and may rescue saturated-FA-induced toxicity. Distinct from `pro-inflammatory` (NLRP3/NF-κB) and `ldl-raising` (SCAP-INSIG-SREBP-2) — the three mechanisms co-occur in palmitic acid exposure but are distinct enough to warrant separate class assignments for fine-grained querying.

**Canonical values in use:** `lipotoxic`

**Hallmarks primarily targeted:** [[loss-of-proteostasis]], [[disabled-macroautophagy]], [[mitochondrial-dysfunction]], [[deregulated-nutrient-sensing]]

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "lipotoxic")
```


---

### DNMT-inhibitor

**Added:** R42 (2026-05-19) — first compound page: [[molecules/compounds/dihydromyricetin]]

**Definition:** Compounds that inhibit DNA methyltransferase (DNMT) enzymatic activity — primarily DNMT1 (maintenance methylation), DNMT3A, or DNMT3B (de novo methylation) — resulting in partial or global DNA hypomethylation. In an aging context, the mechanism of interest is partial reversal of age-associated hypermethylation at bivalent chromatin regions (H3K4me3 + H3K27me3 co-marked CpGs) that accumulate with aging in post-mitotic and slowly-replicating tissues. This is mechanistically distinct from cytotoxic DNMT inhibitors (azacitidine, decitabine) used in myelodysplastic syndrome — those incorporate into DNA and cause irreversible DNMT trapping at oncology doses. The aging-relevant sub-class is non-nucleoside natural-product DNMT inhibitors (dihydromyricetin, EGCG) that reduce DNMT catalytic activity at micromolar concentrations without DNA incorporation. The downstream claim — that partial DNMT inhibition reverses epigenetic drift and shifts methylation-clock readouts — is supported by in-vitro and early cosmetic-grade clinical evidence (Falckenhayn 2024; Qi 2026) but has not been demonstrated in a randomised controlled design with an independent biomarker endpoint.

**Canonical values in use:** `DNMT-inhibitor`, `dnmt1-inhibition`, `dna-hypomethylation`

**Note on class boundaries:** Cytotoxic DNMT-incorporation agents (azacitidine, decitabine) are NOT included — their mechanism and safety profile (myelosuppression at MDS doses) are fundamentally different. `HDAC-inhibition` is a separate class; some compounds (EGCG) inhibit both DNMTs and HDACs — list both class values on those pages. The `sirtuin activator` class operates on histone deacetylation and indirect H3K9 methylation dynamics, distinct from direct DNMT inhibition; compounds with both mechanisms should list both.

**Hallmarks primarily targeted:** [[epigenetic-alterations]]

**Translation-gap note:** In-vitro DNMT inhibition does not guarantee that topical or systemic doses achieve sufficient intracellular concentration in target tissues (epidermis, liver, muscle) to inhibit DNMTs in vivo. This middle link in the causal chain is the dominant uncertainty for all current DNMT-inhibitor compound pages.

**Constituent compound pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "DNMT-inhibitor")
  OR contains(mechanisms, "dnmt1-inhibition")
  OR contains(mechanisms, "dna-hypomethylation")
```

---

### senescence-inducing

**Added:** 2026-05-09 — first compound page: [[molecules/compounds/palmitic-acid]]

**Definition:** Dietary exposures or environmental stressors that directly induce the p16+/p21+ cellular senescence program in vascular endothelial cells, neurons, and other replicatively active cell types, via sustained ROS accumulation, activation of p38 MAPK and JNK stress kinase cascades, and downstream p53/p21 or p16/Rb checkpoint engagement. Distinct from senolytics (which kill existing senescent cells) and senomorphics (which suppress SASP without killing). This class captures upstream drivers of senescence accumulation. Used exclusively for harmful dietary exposures and endogenous stressors — not for therapeutic agents.

**Canonical values in use:** `senescence-inducing`

**Note:** Only list a compound in this class when there is direct experimental evidence of senescence induction (SA-β-gal, p16, p21, SASP secretion) by that compound at physiologically relevant concentrations. Do not infer from indirect oxidative stress evidence alone.

**Hallmarks primarily targeted:** [[cellular-senescence]], [[chronic-inflammation]] (via SASP from induced senescent cells)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "senescence-inducing")
```

---

### prolyl-hydroxylase-cofactor

**Added:** R42 (2026-05-19) — first compound page: [[molecules/compounds/ascorbic-acid]]

**Definition:** Compounds that serve as obligate cofactors (reducing agents) for Fe²⁺/α-ketoglutarate-dependent dioxygenase enzymes, specifically the collagen prolyl-4-hydroxylases (P4H / P4HA1, P4HA2, P4HA3) and lysyl hydroxylases (PLOD1, PLOD2, PLOD3). These enzymes require ascorbate to keep the catalytic Fe²⁺ ion in its reduced state after each catalytic cycle; without ascorbate, Fe²⁺ is oxidised to Fe³⁺ and the enzyme loses activity. The downstream consequence of cofactor insufficiency is underhydroxylated (unstable) procollagen chains that fail to form the triple helix, are misfolded, and are degraded in the ER — producing the collagen-deficient phenotype of scurvy. In skin aging, sub-clinical ascorbate insufficiency in dermal fibroblasts may reduce net collagen synthesis. Distinct from `extracellular-matrix-remodeling` (which covers upstream signalling routes to collagen synthesis, e.g., GHK-Cu via TGF-β) and from `collagen-synthesis-stimulation` (the downstream output class): `prolyl-hydroxylase-cofactor` identifies the specific cofactor biochemistry. Compounds in this class are also cofactors for lysyl hydroxylase (crosslink formation), asparagine hydroxylase (HIF-1α regulation), and TET dioxygenases (DNA demethylation). The founding and currently only class member is [[ascorbic-acid]].

**Canonical values in use:** `prolyl-hydroxylase-cofactor`

**Note on co-listings:** Always list `antioxidant` alongside `prolyl-hydroxylase-cofactor` on compound pages in this class, since both mechanisms apply. Also list `collagen-synthesis-stimulation` when direct collagen output evidence exists (e.g., Nusgens 2001 mRNA data). The three values are mechanistically linked but enable independent Dataview queries.

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (via collagen underhydroxylation → abnormal ECM architecture → impaired proteostatic ECM–cell signalling), [[genomic-instability]] (TET cofactor role — DNA demethylation / 5hmC generation; speculative for aging-context)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "prolyl-hydroxylase-cofactor")
```

---

### melanin-inhibition

**Added:** R42 (2026-05-19) — first compound page: [[molecules/compounds/ascorbic-acid]]

**Definition:** Compounds that reduce melanin synthesis or melanin-intermediate accumulation in melanocytes, resulting in depigmentation or skin tone evenness. Two distinct sub-mechanisms are in use:

- **`tyrosinase-inhibition`** — direct reduction of tyrosinase enzyme activity (tyrosinase is the rate-limiting enzyme in the melanogenesis pathway converting tyrosine → L-DOPA → dopaquinone → eumelanin/pheomelanin). Kojic acid + hydroquinone + arbutin are canonical tyrosinase inhibitors. **Note (R42 correction)**: niacinamide was previously listed here, but its canonical mechanism is PAR-2-mediated **melanin-transfer inhibition** (see `melanin-transfer-inhibition` class entry), NOT direct tyrosinase enzymatic inhibition. Niacinamide does show some in-vitro tyrosinase activity at supra-clinical concentrations but this is secondary and not its canonical cosmeceutical mechanism.
- **`melanin-precursor-reduction`** — reduction of oxidised melanin intermediates (dopaquinone, dopachrome) by the compound's reducing activity, interrupting polymerisation to eumelanin. Ascorbic acid is the canonical member: it reduces dopaquinone back to L-DOPA, short-circuiting the pathway. This mechanism depends on intracellular reducing potential rather than enzyme binding.

The downstream pharmacodynamic readout is skin hyperpigmentation reduction (solar lentigines, melasma, post-inflammatory hyperpigmentation) and maintenance of even skin tone with aging (age spots are a phenotype of [[skin-aging]]). This class is distinct from bleaching agents with cytotoxic mechanism (hydroquinone — not catalogued here as a therapeutic aging agent).

**Canonical values in use:** `melanin-inhibition`, `tyrosinase-inhibition`, `melanin-precursor-reduction`

**Hallmarks primarily targeted:** No direct mapping to López-Otín hallmarks (melanin accumulation is a skin-specific phenotype of [[skin-aging]] rather than a cellular damage hallmark). Use `hallmarks: []` on compound pages when this is the primary mechanism; document phenotype link to [[skin-aging]] in body.

**Note on class scope:** This class is primarily relevant to topical compounds with dermatological depigmenting applications. Systemic melanin inhibition as an aging mechanism is not established — do not use `melanin-inhibition` on systemic compound pages without direct evidence.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "melanin-inhibition")
  OR contains(mechanisms, "tyrosinase-inhibition")
  OR contains(mechanisms, "melanin-precursor-reduction")
```

---

### tet-enzyme-cofactor / dna-demethylation

**Added:** R42 (2026-05-19) — first compound page: [[molecules/compounds/ascorbic-acid]]

**Definition:** Compounds that serve as obligate cofactors for TET (ten-eleven translocation) family dioxygenases (TET1, TET2, TET3), which catalyse the oxidation of 5-methylcytosine (5mC) → 5-hydroxymethylcytosine (5hmC) → 5-formylcytosine (5fC) → 5-carboxylcytosine (5caC), initiating the DNA demethylation cascade via base-excision repair (BER/TDG). TET enzymes, like the collagen prolyl hydroxylases, are Fe²⁺/α-KG-dependent dioxygenases that require ascorbate to maintain Fe²⁺ catalytic activity. Ascorbate depletion in dividing cells reduces 5hmC abundance and shifts the methylome toward hypermethylation, mimicking aspects of age-associated epigenetic drift. The founding and currently only class member is [[ascorbic-acid]], which is the cofactor rather than an exogenous pharmaceutical modulator.

**Canonical values in use:** `tet-enzyme-cofactor`

**Note on biological context:** The evidence that physiological or supplemental ascorbate levels influence TET activity *in vivo in adult somatic tissues* relevant to aging (beyond the developmental window characterised by Kawahori 2020) is emerging but not yet firmly established for aging-specific endpoints. Tag claims relying on this mechanism with `#gap/needs-replication` until large-scale adult-somatic evidence is available. The TET–ascorbate axis is well-established in haematopoiesis (TET2 somatic loss-of-function in CHIP) — CHIP cells losing TET2 activity shift to a hypermethylated state, and this is conceptually analogous to ascorbate depletion.

**Hallmarks primarily targeted:** [[epigenetic-alterations]], [[genomic-instability]] (TET2 is a somatic tumor suppressor in [[clonal-hematopoiesis]])

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "tet-enzyme-cofactor")
```

---

### hpa-axis-modulation / sleep-promoting-neuropeptide

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/dsip]]

**Definition:** Endogenous neuropeptides or synthetic analogues that modulate the hypothalamic-pituitary-adrenal (HPA) axis and promote physiological sleep architecture, specifically by attenuating stress-hormone (ACTH, corticosterone) tone and facilitating the transition into NREM delta-wave sleep. The mechanism is distinct from GABAergic sedative-hypnotics (benzodiazepines, Z-drugs) — compounds in this class promote sleep by modulating neuroendocrine signalling rather than by directly enhancing inhibitory post-synaptic currents at GABA-A receptors. DSIP is the founding and currently sole compound in this class. The downstream neuromodulatory effects (circadian phase regulation, catecholamine attenuation) likely involve multiple receptor-level targets but no single confirmed receptor has been identified; the "modulates GABA/serotonin/dopamine/noradrenaline" framing in the older literature is correlational, not mechanistically resolved.

**Note on aging relevance:** Sleep quality declines markedly with age (reduced slow-wave sleep amplitude and duration, increased fragmentation). Chronic sleep disruption is associated with acceleration of multiple hallmarks of aging via stress-hormone and inflammatory pathways. A sleep-promoting neuropeptide operating without sedation carries theoretical advantages over sedative-hypnotics in older adults where fall risk and cognitive impairment are concerns. However, no lifespan extension data exists in any model organism for DSIP, no DrugAge entry is present, and the human trial data (1980s–1990s small studies) are insufficient to establish efficacy at population scale. The hallmark linkage via [[altered-intercellular-communication]] is speculative.

**Canonical values in use:** `hpa-axis-modulation`, `sleep-promoting-neuropeptide`

**Hallmarks primarily targeted:** Potentially [[altered-intercellular-communication]] (neuroendocrine signalling in the sleep-wake circuit, which becomes dysregulated with age) — speculative, not directly established.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "hpa-axis-modulation")
  OR contains(mechanisms, "sleep-promoting-neuropeptide")
```

---

### exercise-mimetic / mitohormesis-inducer

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/mots-c]]

**Definition:** Endogenous or exogenous agents that recapitulate some of the metabolic and mitochondrial adaptations of acute exercise without requiring physical activity. The canonical mechanism in this class involves activating AMPK through metabolic-stress-sensing pathways distinct from the direct AMP/ATP ratio shift (which is the primary AMPK activation route during aerobic exercise). Mitohormesis-inducing agents produce a mild, transient mitochondrial stress signal that triggers adaptive responses including mitochondrial biogenesis, antioxidant upregulation, and nuclear gene regulation via AMPK, FOXO, NRF2, and PGC-1α. Distinct from the `AMPK activator` class in that the primary framing is endogenous exercise-inducible signalling — these are agents that are naturally released during exercise and whose pharmacological administration mimics specific exercise-adaptive effects. Sub-class of AMPK activator by downstream mechanism but distinguished by the exercise-hormetic framing and the endogenous-peptide biology.

The founding compound ([[molecules/compounds/mots-c|MOTS-c]]) acts by disrupting the folate-methionine cycle → AICAR accumulation → AMPK activation, a non-canonical AMPK activation route that bypasses direct energy-charge sensing. Other putative members: AICAR (direct AMPK activator via AICAR kinase bypass), GW501516 (PPARδ agonist — exercise mimetic via a distinct transcriptional mechanism; *not yet seeded*).

**Note on overlap with `AMPK activator`:** MOTS-c activates AMPK and should appear in the AMPK activator Dataview block. The `exercise-mimetic` class is additive — list both `ampk-activation` and `exercise-mimetic` on compound pages in this class. The `exercise-mimetic` value specifically triggers the `exercise-mimetic` Dataview block and documents the endogenous-exercise-inducible framing.

**Canonical values in use:** `exercise-mimetic`, `mitohormesis-induction`

**Note on `mitohormesis-induction`:** used as a secondary value for agents where the primary mechanism is a transient mitochondrial stress signal (reactive oxygen species or other mitochondrial stress marker) that activates adaptive antioxidant and metabolic programmes. Not synonymous with exercise-mimetic per se — some mitohormesis inducers are not exercise-mimetics (e.g., low-dose hydrogen peroxide, respiratory chain uncouplers); some exercise-mimetics are not primarily mitohormetic (e.g., GW501516 operates via PPARδ transcription, not mitochondrial stress). List whichever value applies; list both when both apply.

**Hallmarks primarily targeted:** [[mitochondrial-dysfunction]], [[deregulated-nutrient-sensing]]

**Secondary associations:** [[disabled-macroautophagy]] (via AMPK-mediated autophagy induction), [[stem-cell-exhaustion]] (MOTS-c supports muscle stem cell homeostasis in aged animals per Reynolds 2021)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "exercise-mimetic")
  OR contains(mechanisms, "mitohormesis-induction")
```

---

### tissue-repair-peptide

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/bpc-157]]

**Definition:** Synthetic or endogenous peptides whose primary mechanism of action in tissue repair operates through the nitric oxide (NO) system, VEGFR2-mediated angiogenesis signalling, and/or growth hormone receptor (GHR) upregulation — distinct from actin-sequestration-based repair mechanisms (see `actin-regulatory-peptide` class). The canonical mechanism cluster for BPC-157 is: (1) eNOS activation via Akt phosphorylation → NO production → vasodilation and angiogenesis; (2) VEGFR2 transactivation → FAK/ERK1/2 → endothelial-cell migration and vessel sprouting; (3) GHR upregulation in injured tissue → local IGF-1 signalling → cell proliferation and matrix deposition. These mechanisms converge to accelerate healing across multiple tissue types (tendon, ligament, bone, GI mucosa, skeletal muscle) in preclinical models.

**Distinction from `actin-regulatory-peptide`:** Actin-regulatory peptides (TB-500, thymosin-beta-4-derived) operate via G-actin sequestration through the LKKTE/WH2 motif. Tissue-repair peptides (BPC-157) operate via NO/VEGFR2/GHR signalling. Both classes promote angiogenesis but via distinct upstream mechanisms. Do NOT use `actin-sequestration` for BPC-157-class compounds.

**Note on aging relevance:** No DrugAge lifespan-extension data exists for BPC-157 or this class as of 2026-05-09. Aging relevance is indirect — tissue repair capacity declines with age, and this class is under evaluation in musculoskeletal and GI indications where age-related deficits are prominent. The regulatory context (FDA 503A PCAC review; WADA S0 prohibition) positions this class as investigational.

**Canonical values in use:** `tissue-repair-peptide`, `no-pathway-activation`, `vegfr2-angiogenesis`, `growth-factor-receptor-modulation`

**Note on value usage:** Use `tissue-repair-peptide` as the primary class value. `no-pathway-activation` and `vegfr2-angiogenesis` are acceptable secondary values when the compound page documents specific pathway data. `growth-factor-receptor-modulation` is acceptable when GHR upregulation is explicitly documented for the specific compound.

**Hallmarks primarily targeted:** None directly established for aging hallmarks as of 2026-05-09. Speculative associations: [[stem-cell-exhaustion]] (tissue-repair-capacity deficits in aged tissues) and [[altered-intercellular-communication]] (paracrine NO/angiogenesis signalling). Flag as speculative on individual compound pages.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "tissue-repair-peptide")
  OR contains(mechanisms, "no-pathway-activation")
  OR contains(mechanisms, "vegfr2-angiogenesis")
  OR contains(mechanisms, "growth-factor-receptor-modulation")
```

---

### growth-factor-receptor-agonism / HGF-mimetic

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/dihexa]]

**Definition:** Synthetic peptides or small molecules that mimic an endogenous growth factor ligand and activate its cognate receptor tyrosine kinase (RTK), triggering downstream pro-survival, pro-mitogenic, and pro-synaptogenic signalling. The canonical mechanism for the founding compound ([[molecules/compounds/dihexa|dihexa]]) is mimicry of hepatocyte growth factor (HGF) at the c-Met / MET receptor: dihexa binds directly to HGF and potentiates its dimerization-inducing activity, leading to c-Met phosphorylation and downstream PI3K-AKT and MAPK signalling. Distinct from endogenous-growth-factor-delivery strategies (e.g., HGF gene therapy); the compound itself acts as a pharmacomimetic ligand, not a prodrug or release stimulator.

**Critical safety note on class definition:** MET/c-Met is an oncogenic receptor — somatic activating mutations and amplifications drive hepatocellular carcinoma, lung adenocarcinoma, gastric cancer, and multiple other tumour types. Chronic agonism of c-Met by growth-factor-receptor-agonism agents carries a plausible tumorigenicity risk that is specific to this class and distinct from the safety profiles of most other aging-intervention classes. This class-level risk must be disclosed on all member compound pages and in the `limitations and safety` section of any intervention framework page covering this class.

**Note on aging relevance:** HGF/c-Met signalling supports neurogenesis, neuromuscular junction maintenance, and hepatic regeneration — processes that decline with age. However, no lifespan extension data exists in any model organism for this class. No DrugAge entry exists for dihexa as of 2026-05-09. The aging-relevance framing is regeneration-capacity restoration (indirect hallmark linkage). Hallmark assignment requires evidence beyond the one-mechanism claim: preliminary assignment to [[altered-intercellular-communication]] (growth factor signalling is a paracrine intercellular communication system) is plausible but speculative without aged-specific evidence.

**Canonical values in use:** `growth-factor-receptor-agonism`, `hgf-mimetic`, `c-met-agonism`

**Hallmarks primarily targeted:** Speculative — potentially [[altered-intercellular-communication]] (paracrine growth factor axis), [[stem-cell-exhaustion]] (HGF supports progenitor cell maintenance). Flag as speculative on compound pages pending aged-specific evidence.

**Translation-gap caveat:** The primary mechanism paper for the class (Benoist et al. 2014, doi:10.1124/jpet.114.218735) was retracted November 2014. The mechanistic claim (dihexa binds HGF → c-Met activation → synaptogenesis) is partially supported by preceding non-retracted work (McCoy et al. 2013 — JPET 344(1):141-154) but the retraction substantially weakens the mechanistic evidentiary chain. No independent replication of the c-Met mechanism by a separate group has been published as of 2026-05-09.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "growth-factor-receptor-agonism")
  OR contains(mechanisms, "hgf-mimetic")
  OR contains(mechanisms, "c-met-agonism")
```

---

### growth-hormone-secretagogue / ghrelin-receptor-agonist

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/mk-677]]

**Definition:** Small molecules or peptides that stimulate pulsatile growth hormone (GH) release from the anterior pituitary by acting as agonists at the growth hormone secretagogue receptor 1a (GHSR1a / ghrelin receptor). The mechanism is distinct from exogenous recombinant GH administration: GHS-R1a agonists preserve the hypothalamic-pituitary feedback arc and produce physiological GH pulsatility rather than a supraphysiological flat plasma elevation. Downstream effects include elevated circulating IGF-1 (predominantly liver-derived), increased fat-free mass, and modulation of sleep architecture (enhanced REM and slow-wave sleep) via central GHSR1a expression in hypothalamus and brainstem.

**Mechanistic sub-classes:**
- **Non-peptide synthetic (oral):** MK-677 (ibutamoren) — spiroindoline scaffold; the canonical class-founder and only orally active member with published Phase 2 human trial data.
- **Peptide-based (injectable):** GHRP-2, GHRP-6, hexarelin, ipamorelin — synthetic hexapeptides and analogues; lower oral bioavailability; not catalogued here; see individual compound pages when seeded.

**Distinction from GHRH analogues:** GHRH analogues (CJC-1295, tesamorelin) act at the GHRH receptor (GHRHR), not GHSR1a, and stimulate GH through a distinct cAMP/PKA pathway. These are a separate class. Both classes ultimately elevate GH/IGF-1, but receptor targets, pharmacodynamics, and combinability differ.

**Aging-relevance paradox (critical):** GH and IGF-1 decline with age (somatopause). Short-term supplementation in older adults increases lean mass, strength, and sleep quality in small RCTs. However, the longevity literature strongly favours IGF-1 *reduction*: GH-deficient Ames/Snell dwarf mice live substantially longer than wild-type; heterozygous *Igf1r* knockout mice live ~16% longer; *C. elegans daf-2* (IIS receptor) reduction-of-function mutants have major lifespan extension. The GHS class stimulates IGF-1 in direct opposition to the canonical longevity-signalling direction. This paradox is unresolved and must be explicitly documented on all compound pages in this class (see [[deregulated-nutrient-sensing]] and [[molecules/compounds/mk-677]] for the framing).

**Canonical values in use:** `growth-hormone-secretagogue`, `ghrelin-receptor-agonist`, `gh-igf1-axis-stimulation`

**Note on value usage:** Use `growth-hormone-secretagogue` as the primary class value. `ghrelin-receptor-agonist` is acceptable as a secondary value documenting receptor-level precision. `gh-igf1-axis-stimulation` captures downstream consequence and enables Dataview queries about IGF-1 modulation as a shared node with the IIS pathway.

**Hallmarks primarily targeted:** [[deregulated-nutrient-sensing]] (GH-IGF-1 axis is a core IIS/nutrient-sensing node; effect direction is IGF-1-raising, conflicting with longevity preference for IGF-1 reduction — document direction on individual pages)

**Secondary associations:** [[stem-cell-exhaustion]] (lean mass / satellite cell context in aged muscle), [[altered-intercellular-communication]] (GH as a systemic endocrine-paracrine signal)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "growth-hormone-secretagogue")
  OR contains(mechanisms, "ghrelin-receptor-agonist")
  OR contains(mechanisms, "gh-igf1-axis-stimulation")
```

---

### nuclear-receptor-agonism / VDR-agonism

**Added:** 2026-06-14 — first compound page: [[molecules/compounds/vitamin-d]]

**Definition:** Ligand-dependent activation of nuclear receptors in the NR1 superfamily by small lipophilic molecules that diffuse into cells and bind the receptor's ligand-binding domain (LBD), stabilising the active AF-2 helix conformation. Upon ligand binding, the receptor dimerizes (as a homodimer or RXR heterodimer), translocates to (or acts at) chromatin, and drives transcription of genes containing cognate response elements in their promoters. The founding sub-class in this wiki is:

- **`VDR-agonism`** — activation of the vitamin D receptor (VDR / NR1I1) by calcitriol (1,25(OH)₂D₃) or its precursors/analogues. VDR operates as an RXR heterodimer that binds vitamin D response elements (VDREs — typically DR3 hexamer repeats). Canonical VDR target genes include CAMP (cathelicidin LL-37), osteocalcin/BGLAP, RANKL (TNFSF11), CYP24A1 (the 24-hydroxylase that inactivates calcitriol — a negative feedback target), CYP27B1 (the activating 1α-hydroxylase), CDKN1A (p21), and TRPV5/6 (intestinal calcium channels). Aging relevance: circulating 25(OH)D and calcitriol decline with age due to reduced skin synthesis, declining renal CYP27B1 activity, and fat-sequestration of fat-soluble D3; VDR expression also declines with age in some tissues (intestine, parathyroid), blunting genomic VDR signalling.

**Note on class scope:** `VDR-agonism` is distinct from `ppara-agonism` (PPARα, NR1C1) and from sex-hormone receptor agonism (NR3 subfamily — estradiol, testosterone pages use sex-hormone-specific classes). Each NR subtype has distinct response-element half-site spacing and dimerization partners that confer unique gene-target specificities. Do NOT use `VDR-agonism` generically for other NR1 subfamily members (PXR, CAR, etc.). When a compound's primary aging-context mechanism is VDR agonism (as for cholecalciferol), use `VDR-agonism` as the primary class value. When VDR agonism is secondary or downstream of the primary mechanism, list `VDR-agonism` alongside the primary class.

**Note on hierarchy:** `ppara-agonism` predates this class entry and was established as a standalone class (R2026-05-14) before the broader NR taxonomy was formalised. PPARα pages continue to use `ppara-agonism` as their canonical value; they are NOT retroactively assigned to `nuclear-receptor-agonism`. Future NR1 subfamily members (PXR, FXR, LXR) will use `nuclear-receptor-agonism` as a secondary cross-query value alongside their specific class values (to be added when compound pages are seeded). The Dataview block below queries the VDR-agonism-specific class.

**Canonical values in use:** `VDR-agonism`, `nuclear-receptor-agonism`

**Note on co-listings:** List `calcium-homeostasis` as an additional mechanism tag on cholecalciferol and calcitriol pages where calcium absorption / PTH-suppression is documented endpoint data. List `immunomodulation` alongside `VDR-agonism` when VDR-driven cathelicidin or Treg-induction evidence is the primary clinical claim. The three values enable independent Dataview queries across distinct biological framing (endocrine, immune, mineral).

**Hallmarks primarily targeted:** [[chronic-inflammation]] (VDR-driven cathelicidin induction, Treg promotion, Th17 suppression; immune modulation in aging context), [[disabled-adaptive-immunity]] (impaired VDR-dependent innate/adaptive coordination in aging)

**Translation-gap note:** Despite mechanistically compelling VDR biology, large RCTs of vitamin D3 supplementation in replete populations are null on primary CVD, cancer-incidence, and fracture endpoints (VITAL, D-Health, ViDA). VDR-mediated biology is well-established; the translation gap is one of bioavailability and the deficiency-correction vs supplementation-in-replete distinction, not mechanism validity. `translation-gap: phase-3-rct-needed` does not apply; the trials have been done. Use `human-evidence-level: limited-negative` per the null-trial pattern.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "VDR-agonism")
  OR contains(mechanisms, "nuclear-receptor-agonism")
```

---

### antimicrobial-peptide / membrane-permeabilization

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/ll-37]]

**Definition:** Endogenous or synthetic cationic amphipathic peptides (CAPs) that kill bacteria, fungi, and enveloped viruses by disrupting their membranes through electrostatic attraction to anionic lipids (phosphatidylglycerol, cardiolipin, LPS) followed by membrane intercalation, bilayer thinning, and lysis. Two principal lytic mechanisms are distinguished for LL-37 specifically: (1) **toroidal-pore model** (Henzler-Wildman 2003 — curvature strain induction, positive curvature, supports pore formation) and (2) **carpet/detergent model** (Porcelli 2008 — surface-parallel helix, disrupts bilayer integrity without discrete pores). Both models are consistent with the electrostatic-selective killing of bacteria over mammalian cells (mammalian membranes are zwitterionic; bacterial membranes are anionic). Distinct from bacteriostatic antibiotics (protein/RNA synthesis inhibitors) and cell-wall-synthesis inhibitors (beta-lactams) — membrane disruption is a biophysical rather than enzymatic mechanism. Secondary mechanisms in this class include LPS neutralization (sequestering the lipid-A acyl chains) and immunomodulation via the formyl-peptide receptor 2 (FPR2/FPRL1) for peptides that have dual antimicrobial/immunomodulatory roles.

**Note on aging relevance:** Antimicrobial peptide (AMP) production declines with age in multiple epithelial compartments (skin, airway, gut). Cathelicidin LL-37 expression in skin is regulated by vitamin D and TGF-β; age-related TGF-β elevation and declining vitamin D synthesis reduce LL-37 output. AMP decline contributes to increased infection susceptibility and altered microbiome composition in aging tissues — connecting indirectly to the [[disabled-adaptive-immunity]] and [[dysbiosis]] hallmarks. Therapeutic restoration of LL-37 levels or topical application to chronic wounds represents the primary clinical-development rationale.

**Note on host-cell toxicity:** At concentrations above the bactericidal minimum inhibitory concentration (~1–5 µM for LL-37), cationic AMPs begin to disrupt mammalian cell membranes (lower selectivity index). This dose-dependent host-cell toxicity is a class-level limitation and must be documented on all member compound pages.

**Canonical values in use:** `membrane-permeabilization`, `lps-neutralization`, `immunomodulation-via-fpr2`

**Note on value usage:** Use `membrane-permeabilization` as the primary class value for all AMP pages. `lps-neutralization` is a secondary value applicable to peptides with confirmed LPS-binding activity. `immunomodulation-via-fpr2` is specific to cathelicidin-class peptides that activate FPR2; use only when the receptor has been experimentally confirmed for the specific compound.

**Hallmarks primarily targeted:** [[disabled-adaptive-immunity]] (innate immune effector declining with age); potential secondary association with [[dysbiosis]] (AMP decline alters mucosal microbiome balance). Hallmark linkage is indirect for aging-therapeutic use — the primary mechanism targets pathogens, not a hallmark cell-biological process.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "membrane-permeabilization")
  OR contains(mechanisms, "lps-neutralization")
  OR contains(mechanisms, "immunomodulation-via-fpr2")
```

---

### melanocortin-receptor-agonist

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/melanotan-ii]]

**Definition:** Synthetic peptides that bind and activate one or more of the five melanocortin receptor subtypes (MC1R–MC5R), which are class-A GPCRs coupled to Gs. The founding and canonical compound in this wiki is Melanotan II (MT-II), a synthetic cyclic heptapeptide analogue of alpha-melanocyte-stimulating hormone (α-MSH). Key receptor-subtype pharmacology:
- **MC1R** (skin melanocytes): stimulates adenylyl cyclase → cAMP → PKA → MITF → eumelanin synthesis (photoprotective pigmentation, UV-independent).
- **MC3R / MC4R** (hypothalamus, CNS): modulates energy homeostasis, appetite suppression (MC4R anorexigenic circuit), and sexual arousal (MC4R — the basis for the MT-II erection side effect and the structurally related compound bremelanotide/PT-141).
- **MC2R** (adrenal cortex, ACTH-specific): NOT activated by MT-II (MC2R requires the HFRW core of full ACTH).
- **MC5R** (exocrine glands): role in MT-II pharmacology unclear; some peripheral activity.

MT-II is non-selective across MC subtypes (KC50 ~ sub-nM range for MC1R, MC3R, MC4R), making it pharmacologically distinct from selective MC4R agonists (bremelanotide, setmelanotide). The cyclic structure (cyclized between Asp³ and Lys¹⁰ via amide bond) confers conformational rigidity that improves receptor affinity and metabolic stability versus the linear α-MSH parent.

**Distinction from related classes:**
- **Growth-hormone-secretagogue / ghrelin-receptor-agonist:** GHSR1a (ghrelin receptor) is an unrelated GPCR. No mechanistic overlap with melanocortin receptors.
- **Appetite-suppression (shared downstream effect):** MC4R activation converges on reduced food intake. Overlap with metformin-class energy-sensing compounds at the downstream appetite level; the receptor-level mechanism is distinct.
- **Immunomodulatory peptides:** α-MSH has endogenous anti-inflammatory roles via MC1R on melanocytes and macrophages; this is a secondary effect, not the primary pharmacological mechanism for MT-II cosmetic/tanning use.

**Note on aging relevance:** No DrugAge lifespan-extension entry exists for Melanotan II or any melanocortin receptor agonist as of 2026-05-09. The primary use case (cosmetic tanning) is not an aging intervention. MC4R agonism and appetite suppression are mechanistically adjacent to energy-sensing pathways relevant to aging (IIS/mTOR axis) but no direct lifespan or healthspan evidence exists. The `hallmarks: []` field is left empty on the compound page (R36 wave-1 convention) — assign only when direct hallmark evidence is documented.

**Safety class note:** The melanocortin-receptor-agonist class carries a specific melanoma risk signal (case reports of melanoma during/after MT-II use; contributory mechanism unclear — direct MC1R-agonist proliferative signalling vs. UV-seeking behaviour co-variate). This risk must be disclosed on all member compound pages.

**Canonical values in use:** `melanocortin-receptor-agonism`, `melanogenesis-induction`, `appetite-suppression`

**Note on value usage:** `melanocortin-receptor-agonism` is the primary mechanism class value. `melanogenesis-induction` is the direct pharmacodynamic consequence at MC1R in skin melanocytes. `appetite-suppression` is an MC4R-mediated secondary effect observed at clinical doses. List all three on compound pages where the evidence exists.

**Hallmarks primarily targeted:** None directly established for aging as of 2026-05-09. Potential speculative association with [[deregulated-nutrient-sensing]] via MC4R-appetite axis — do not list unless hallmark-level evidence is documented.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "melanocortin-receptor-agonism")
  OR contains(mechanisms, "melanogenesis-induction")
```

---

### neurotrophin-induction / neuroprotective-peptide

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/semax]]

**Definition:** Synthetic peptides or small molecules that upregulate endogenous neurotrophin expression — specifically brain-derived neurotrophic factor (BDNF) and/or nerve growth factor (NGF) — in the hippocampus, cortex, or retina, thereby supporting neuronal survival, synaptic plasticity, and cognitive function. The class is distinguished from direct receptor agonists (e.g., TrkB agonists) in that the mechanism operates through transcriptional upregulation of the neurotrophin gene itself, not direct ligand–receptor engagement. The canonical compound is Semax (ACTH(4-7)PGP), a synthetic heptapeptide derived from the ACTH fragment residues 4–7 (Met-Glu-His-Phe), extended C-terminally with Pro-Gly-Pro. The upstream mechanism by which Semax induces BDNF/trkB expression is not fully characterised; proposed mediators include melanocortin-system-independent receptor interactions, dopaminergic/serotonergic pathway activation, and direct neuromodulatory effects on gene-regulatory networks in the hippocampus.

**Distinction from `melanocortin-receptor-agonist` class:** Although Semax is derived from ACTH residues (ACTH is itself a melanocortin-family peptide), the ACTH(4-7) fragment lacks the key residues required for MC1R/MC3R/MC4R activation (which requires the HFRW or YFKM core motifs of alpha-MSH/full ACTH). Semax does not induce melanogenesis and is not a functional MC-receptor agonist. Use `melanocortin-receptor-agonism` only for compounds with confirmed MC-receptor pharmacology (e.g., Melanotan II, bremelanotide). Use `neurotrophin-induction` for compounds whose primary aging-relevant action is BDNF/NGF upregulation regardless of structural lineage.

**Distinction from `neuroprotection` as a standalone value:** "Neuroprotection" is an outcome descriptor (reduced neuronal death), not a mechanistic class. The primary mechanistic value `neurotrophin-induction` is preferred because it points to a testable molecular target (BDNF/TrkB pathway). `neuroprotective-peptide` is acceptable as a secondary value to capture the broader class framing when the exact upstream mechanism is unresolved.

**Note on aging relevance:** BDNF expression declines in the hippocampus and prefrontal cortex with age, correlating with cognitive decline and increased Alzheimer's risk. Pharmacological restoration of BDNF signalling is a mechanistically plausible strategy for cognitive aging. However, no compound in this class has completed a Phase 3 RCT in a healthy aging or mild cognitive impairment population with cognitive primary endpoints. Russian-language clinical data (stroke recovery, optic neuropathy) provide limited human evidence; Western-context replication is absent. The aging-specific `hallmarks:` assignment is left empty per R36 wave-1 convention absent direct hallmark evidence.

**Canonical values in use:** `neurotrophin-induction`, `neuroprotective-peptide`, `bdnf-trkb-upregulation`

**Note on value usage:** Use `neurotrophin-induction` as the primary class value. `neuroprotective-peptide` is acceptable as a secondary value for the broader class framing. `bdnf-trkb-upregulation` may be used as a tertiary value on compound pages where both BDNF protein and trkB receptor phosphorylation data are documented in the same study.

**Hallmarks primarily targeted:** None directly established for aging hallmarks as of 2026-05-09. Speculative association with [[altered-intercellular-communication]] (neurotrophic signalling decline is an intercellular communication deficit in aging brain) — flag as speculative, not documented.

**Translation-gap note:** Translation from rodent ischemia models to human healthy-aging efficacy is the primary gap. Russian prescription-drug status (Alzheimer's-adjacent stroke/cognitive indications) provides some human evidence but lacks placebo-controlled RCT design with pre-specified cognitive endpoints in aging populations.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "neurotrophin-induction")
  OR contains(mechanisms, "neuroprotective-peptide")
  OR contains(mechanisms, "bdnf-trkb-upregulation")
```

---

### microtubule-polymerization-inhibitor

**Definition:** Pharmacological inhibition of tubulin polymerization by binding to the colchicine-binding site on β-tubulin dimers, preventing GTP-dependent assembly of αβ-tubulin heterodimers into microtubule protofilaments. The aging-relevant consequences are two-fold: (1) **neutrophil chemotaxis blockade** — intact microtubule networks are required for directional cell migration, degranulation, and diapedesis; colchicine-site ligands prevent neutrophil infiltration of inflamed tissues at therapeutic concentrations; (2) **NLRP3 inflammasome assembly inhibition** — ASC speck formation and perinuclear coalescence require microtubule-dependent transport; disrupting this transport prevents caspase-1 activation and downstream IL-1β / IL-18 maturation. The mechanism is distinct from vinca alkaloid-binding-site tubulin inhibitors (vincristine, vinblastine) which are used as anti-mitotics in oncology and carry a different toxicity profile. Colchicine is the only FDA-approved agent in this class with established cardiovascular-aging-context evidence (COLCOT 2019, LoDoCo2 2020).

**Aliases in use:** `tubulin-polymerization-inhibition`, `microtubule-disruption`, `nlrp3-inflammasome-inhibition`, `neutrophil-recruitment-inhibition`, `microtubule-polymerization-inhibitor`

**Note on NLRP3 specificity:** the class inhibits NLRP3 inflammasome assembly *indirectly* via microtubule disruption — not by direct NLRP3-binding (the MCC950/dapansutrile mechanism). Both upstream (microtubule) and downstream (direct NLRP3-binding) inhibitors share the functional endpoint of reduced IL-1β production. Colchicine may be listed alongside direct NLRP3 inhibitors in review articles — distinguish the mechanism when citing.

**Hallmarks primarily targeted:** [[chronic-inflammation]]

**First seeded:** R35-Stage2 (2026-05-09) — colchicine as inaugural compound.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "tubulin-polymerization-inhibition")
  OR contains(mechanisms, "microtubule-polymerization-inhibitor")
  OR contains(mechanisms, "microtubule-disruption")
  OR contains(mechanisms, "nlrp3-inflammasome-inhibition")
  OR contains(mechanisms, "neutrophil-recruitment-inhibition")
```

---

### dietary-fat-composition

**Added:** 2026-05-09 — first intervention page: [[interventions/dietary/mediterranean-diet]]

**Definition:** Dietary interventions whose primary mechanistic driver is the qualitative composition of dietary fat intake — specifically the ratio of unsaturated (MUFA + PUFA) to saturated fatty acids (SFA) — rather than total caloric restriction or macronutrient elimination. Two distinct sub-mechanisms are captured:

- **`mufa-enrichment`**: substitution of palmitic acid (C16:0, primary dietary SFA) with oleic acid (C18:1 MUFA, the dominant fatty acid in extra-virgin olive oil), which (a) preserves LDL receptor upregulation via SCAP-INSIG-SREBP-2 (unlike SFA, oleic acid does not suppress LDLR), (b) avoids palmitate-induced ER stress, ceramide synthesis, and NLRP3 inflammasome activation, and (c) is incorporated into cell membranes as a non-toxic, non-pro-inflammatory phospholipid.
- **`pufa-omega3-enrichment`**: supplementation with long-chain n-3 PUFA (EPA, DHA from fatty fish; ALA from walnuts that partially converts to EPA) that (a) activate PPAR-α → fatty acid oxidation, (b) displace arachidonic acid from membrane phospholipids, reducing AA-derived eicosanoid substrate availability, (c) serve as precursors for anti-inflammatory/pro-resolving lipid mediators (resolvins, protectins, maresins via [[spm-pathway]]), and (d) support LDL clearance via PPAR-α / SREBP-2 co-regulation in liver.

**Note on `polyphenol-anti-inflammatory`:** The olive oil polyphenol sub-mechanism (oleocanthal COX inhibition; hydroxytyrosol / oleuropein NF-κB suppression) maps to the existing `anti-inflammatory` class (`nf-kb-inhibition` alias). Companion mechanism value for Mediterranean diet: list `anti-inflammatory` alongside `dietary-fat-composition`.

**Note on `fiber-fermentation`:** The fiber-driven SCFA production sub-mechanism maps to the existing `gut-microbiome-modulation` class. List both `gut-microbiome-modulation` and `dietary-fat-composition` for whole-dietary-pattern interventions.

**Canonical values in use:** `mufa-enrichment`, `pufa-omega3-enrichment`, `dietary-fat-composition`

**Note on value usage:** `dietary-fat-composition` is the umbrella class value for Dataview block coverage. `mufa-enrichment` and `pufa-omega3-enrichment` are acceptable secondary values for mechanistic precision on intervention pages. Individual fatty acid compound pages (e.g., [[molecules/compounds/palmitic-acid]]) use `lipotoxic` + `ldl-raising` for the harmful saturated-fat angle; `dietary-fat-composition` is reserved for intervention pages that explicitly substitute SFA with MUFA/PUFA.

**Hallmarks primarily targeted:** [[chronic-inflammation]] (reduced palmitate → reduced NLRP3; PUFA → resolvin/protectin production), [[deregulated-nutrient-sensing]] (oleic acid → preserved LDLR, improved insulin sensitivity), [[altered-intercellular-communication]] (reduced atherogenic ApoB-LDL particle load)

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "dietary-fat-composition")
  OR contains(mechanisms, "mufa-enrichment")
  OR contains(mechanisms, "pufa-omega3-enrichment")
```

---

### anti-amyloid-immunotherapy

**Added:** R36 (2026-05-09) — first compound page: [[molecules/compounds/donanemab]]

**Definition:** Monoclonal antibodies that target aggregated or soluble amyloid-beta (Aβ) species in the brain, promoting clearance via Fc-receptor-mediated microglial phagocytosis. The class is distinguished from general `anti-inflammatory` strategies in that the primary therapeutic goal is physical removal of extracellular amyloid plaque deposits (AmyloSENS), not downstream inflammatory suppression. Mechanistic sub-classes by target epitope:

- **N-terminal-pyroglutamate-targeting (`pyroglutamate-ab-targeting`):** Binds N-terminal pyroglutamate-modified Aβ enriched in deposited plaques; does not bind monomeric or oligomeric unmodified Aβ. Canonical agent: donanemab (LY3002813). High selectivity for deposited plaque.
- **Protofibril/aggregated-Aβ-targeting:** Binds aggregated/oligomeric Aβ forms with higher affinity than monomers; engages vascular as well as parenchymal amyloid. Canonical agent: lecanemab.
- **Pan-Aβ (N-terminal 3–7 epitope):** Binds both deposited and soluble Aβ. Higher ARIA risk. Canonical agent: aducanumab (withdrawn 2024).

**Distinction from related classes:**
- **`anti-inflammatory` / `senomorphic`:** ARIA is an inflammatory side-effect of plaque clearance, not the mechanism. Anti-amyloid immunotherapy is not an anti-inflammatory strategy.
- **`tau-targeting`:** Anti-tau antibodies target a distinct protein aggregate (intracellular NFT vs extracellular plaque). Do not use this class for tau-targeting agents.
- **Amyloid-production inhibitors (γ-secretase, BACE inhibitors):** Reduce Aβ synthesis rather than clear existing deposits. A distinct upstream class.

**Safety class note:** All agents carry an ARIA risk profile. ARIA-E (edema/effusion) and ARIA-H (microhemorrhage/hemosiderosis) are class effects related to amyloid mobilization from vessel walls. APOE ε4 homozygotes carry substantially higher ARIA risk; donanemab's FDA-approved indication excludes APOE ε4/ε4 homozygotes. Mandatory MRI surveillance required for all approved agents.

**Canonical values in use:** `anti-amyloid-immunotherapy`, `amyloid-plaque-clearance`, `pyroglutamate-ab-targeting`

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (extracellular amyloid accumulation — AmyloSENS)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "anti-amyloid-immunotherapy")
  OR contains(mechanisms, "amyloid-plaque-clearance")
  OR contains(mechanisms, "pyroglutamate-ab-targeting")
```

---

### ttr-tetramer-stabilization

**Added:** R37 (2026-05-09) — first compound page: [[molecules/compounds/acoramidis]]

**Definition:** Small molecules that bind at the two thyroxine-binding sites at the dimer-dimer interface of the transthyretin (TTR) homotetramer, kinetically stabilizing the native quaternary structure against the rate-limiting dissociation step that initiates amyloid fibril formation. TTR amyloidogenesis requires tetramer dissociation to monomers, partial unfolding, and misassembly; tetramer stabilizers raise the activation energy barrier for dissociation, preventing the amyloidogenic cascade. Distinct from the `rna-interference` / `rnase-h-recruitment` class (patisiran, vutrisiran, inotersen — which reduce TTR synthesis rather than stabilize the existing protein). The primary aging-relevance is **AmyloSENS** — preventing extracellular protein aggregate accumulation as a contributor to age-related tissue dysfunction; ATTR-CM is the canonical aging-convergent endpoint in this class.

**Degree-of-stabilization sub-class distinction:** Tafamidis (first-in-class, FDA 2019) achieves ~70% TTR stabilization at clinical dose via selective binding to one of the two T4 sites. Acoramidis (FDA 2024) achieves near-complete (≥90%) stabilization by occupying both T4 sites with higher affinity. The distinction has implications for residual amyloid deposition rates and long-term benefit durability, though no head-to-head trial has been completed as of 2026-05-09.

**Canonical values in use:** `ttr-tetramer-stabilization`, `anti-amyloid-stabilizer`

**Note on `anti-amyloid-stabilizer`:** This is a broader secondary value applicable to any compound that stabilizes an amyloidogenic precursor protein (whether TTR, Aβ, α-synuclein, etc.) rather than clearing existing aggregates. It enables cross-class querying across amyloid-convergent strategies. Use `ttr-tetramer-stabilization` as the primary value for the TTR-specific class; `anti-amyloid-stabilizer` as an additional secondary value.

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (prevention of amyloid aggregate accumulation in myocardium, nerve, and connective tissue)

**Translation note:** Both approved agents in this class (tafamidis 2019, acoramidis 2024) have FDA traditional approval for ATTR-CM, establishing `druggability-tier: 1` for TTR as a target in the aging-disease context. This is the most clinically advanced AmyloSENS strategy as of 2026.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "ttr-tetramer-stabilization")
  OR contains(mechanisms, "anti-amyloid-stabilizer")
```

---

### ttr-mrna-knockdown

**Added:** R38 (2026-05-09) — first compound page: [[molecules/compounds/patisiran]]

**Definition:** Sequence-specific suppression of hepatocyte *TTR* mRNA translation via an oligonucleotide mechanism (siRNA via RNAi; or ASO via RNase H recruitment). Reduces circulating TTR protein by ~80–87%, thereby depleting the amyloidogenic substrate. Distinct from `ttr-tetramer-stabilization` (which preserves TTR level but prevents tetramer dissociation): knockdown approaches eliminate the source protein, stabilizer approaches preserve but structurally protect it. Both converge on AmyloSENS — reducing accumulation of misfolded TTR aggregates.

**Sub-class distinction:**
- **siRNA (RNAi):** double-stranded guide+passenger siRNA duplex loaded into RISC/AGO2; endonucleolytic TTR mRNA cleavage. Canonical agents: patisiran (LNP-delivered), vutrisiran (GalNAc-delivered).
- **ASO (RNase H):** single-stranded antisense gapmer recruits RNase H1 to TTR mRNA:DNA heteroduplex. Canonical agent: inotersen (2018 FDA approval for hATTR-PN; now largely superseded by eplontersen, a GalNAc-ASO successor).

**Canonical values in use:** `ttr-mrna-knockdown` (primary); `rna-interference` and `rnase-h-recruitment` as secondary mechanism values (from the parent `allele-selective-degradation / RNA-targeted-knockdown` class) to enable cross-class RNAi querying.

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (AmyloSENS)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "ttr-mrna-knockdown")
```

---

### lnp-delivery

**Added:** R38 (2026-05-09) — first compound page: [[molecules/compounds/patisiran]]

**Definition:** Lipid nanoparticle (LNP) formulation as the delivery mechanism for a nucleic acid therapeutic payload (siRNA, mRNA, or ASO). The ionizable-lipid LNP encapsulates the nucleic acid cargo, protects it from nuclease degradation during circulation, and enables endosomal escape following receptor-mediated uptake (primarily hepatocytic via ApoE-mediated LDL receptor engagement for hepatic-targeted LNPs). The delivery vehicle itself is not the pharmacologically active agent — the payload (siRNA, mRNA) is — but LNP formulation is a critical enabling technology that determines biodistribution, cell-type targeting, immunogenicity, and repeat-dose tolerability.

**Scope note:** `lnp-delivery` is a **delivery-platform class**, not a mechanism class in the pharmacodynamic sense. It is listed here because it is a canonical value appearing in patisiran's `mechanisms:` frontmatter, and multiple future compound pages will carry it (any LNP-nucleic-acid therapeutic). Use it alongside the pharmacodynamic mechanism value (e.g., `rna-interference`, `mrna-replacement`). Do not use `lnp-delivery` alone as the sole mechanism value — always pair it with the active-payload mechanism.

**Historical note:** The DLin-MC3-DMA LNP formulation used in patisiran (Onpattro) was the first hepatic-delivery LNP to achieve FDA approval (2018). It established the commercial and regulatory viability of ionizable-lipid LNP platforms and directly informed the lipid components of Moderna mRNA-1273 (COVID vaccine) and BNT162b2 (Pfizer-BioNTech) — which use the same ionizable-lipid design principle with modified lipid identities.

**Canonical values in use:** `lnp-delivery`

**Hallmarks primarily targeted:** N/A — delivery platform; hallmark is determined by payload.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "lnp-delivery")
```

---

### glp-1 secretion stimulator

**Added:** 2026-05-18 — first compound page: [[molecules/compounds/berberine]]

**Definition:** Compounds that stimulate release of glucagon-like peptide-1 (GLP-1) from intestinal L-cells (primarily in the ileum and colon) without being GLP-1 receptor agonists themselves. GLP-1 is an incretin hormone that enhances glucose-stimulated insulin secretion, suppresses glucagon, slows gastric emptying, and activates hypothalamic satiety circuits. Distinct from the `GLP-1 receptor agonist` class (semaglutide, liraglutide — which directly bind and activate GLP-1R with pharmacokinetic stability), this class operates upstream: the compound stimulates endogenous L-cell GLP-1 secretion, and the effect duration is limited to the biological half-life of endogenous GLP-1 (~2 min plasma; extended to ~30 min with DPP-4 inhibition). The quantitative contribution of berberine-stimulated GLP-1 to its overall glycemic effects is not well-defined and is considered a secondary mechanism; however, the incretin axis provides a mechanistic link between berberine's gut-luminal activity and its systemic glycemic effects.

**Distinction from `GLP-1 receptor agonist` class:** GLP-1R agonists (semaglutide, tirzepatide, liraglutide) are exogenous ligands that activate GLP-1R directly and have pharmacokinetics allowing once-weekly dosing. Secretion stimulators like berberine rely on endogenous GLP-1 whose plasma half-life is 2 minutes without DPP-4 protection; the effect magnitude is therefore much weaker and not appropriate for comparison with GLP-1RA class agents.

**Canonical values in use:** `glp1-secretion-stimulation`

**Hallmarks primarily targeted:** [[deregulated-nutrient-sensing]] (incretin-mediated insulin secretion; glucose homeostasis); secondary association with [[chronic-inflammation]] (GLP-1R has anti-inflammatory signalling in macrophages and endothelium — downstream, indirect).

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "glp1-secretion-stimulation")
```

---

### innate-immune-modulation

**Added:** R37 (2026-05-12) — first intervention page: [[interventions/pharmacological/cgas-modulators]] (cGAS-STING inhibitors / cGAS chromatin-retention enhancers)

**Definition:** Pharmacological modulation of pattern-recognition receptor (PRR) signaling in the innate immune arm, specifically targeting nucleic-acid sensing cascades. In the aging context, the canonical target is the **cGAS–STING pathway**: cytosolic DNA sensor cGAS (cyclic GMP–AMP synthase) detects cytoplasmic double-stranded DNA (dsDNA) — arising from micronuclei, mitochondrial DNA leakage, or retrotransposon activation — and catalyzes synthesis of the second messenger 2'3'-cGAMP, which activates the STING (Stimulator of Interferon Genes) adaptor, triggering IRF3-driven type-I interferon (IFN-I) and NF-κB-driven cytokine production. Chronic low-level cGAS–STING activation accumulates with cellular senescence and is a molecular driver of inflammaging.

Distinct from:
- `anti-inflammatory`: that class acts downstream on NF-κB/NLRP3/JAK-STAT without modulating the upstream nucleic-acid sensor.
- `immunomodulation`: that class acts on immune-cell fate/polarization, not pattern-recognition receptor chemistry.
- `immunomodulation-via-fpr2`: resolution-pathway specific.

**Direction note:** this class can encompass both **inhibitory** (catalytic inhibitors blocking cGAMP synthesis → reduced IFN-I/SASP) and **activatory** (chromatin-retention enhancers stabilizing nuclear/chromatin-bound cGAS → enhanced HR repair) modalities. The direction of effect is documented in the body of each member page, not encoded in the class name.

**Canonical values in use:** `innate-immune-modulation`

**Hallmarks primarily targeted:** [[chronic-inflammation]] (via inflammaging reduction), [[genomic-instability]] (via HR-repair potentiation), [[cellular-senescence]] (indirect via SASP reduction)

**Constituent compound/intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "innate-immune-modulation")
```

---

### hr-repair-modulation

**Added:** R37 (2026-05-12) — first intervention page: [[interventions/pharmacological/cgas-modulators]]

**Definition:** Pharmacological or genetic enhancement of the **homologous recombination (HR) DNA repair pathway**, which templates repair of double-strand breaks (DSBs) using a sister chromatid, allowing high-fidelity resolution. In dividing cells, HR is the preferred DSB-repair pathway in late-S and G2 phases. In aging contexts, HR efficiency declines, shifting repair toward the error-prone non-homologous end joining (NHEJ) pathway, resulting in accumulating chromosomal aberrations. The Chen 2025 finding (NMR cGAS/FANCI-RAD50 axis) represents the first known mechanism by which nuclear/chromatin-bound cGAS directly potentiates HR through interaction with FANCI and RAD50 — a function evolutionarily enhanced in the long-lived naked mole-rat (*Heterocephalus glaber*) via 4-amino-acid changes that increase chromatin residence time.

Distinct from:
- `dna-pk-inhibition / nhej-blockade`: that class inhibits the competing NHEJ pathway (different DSB repair branch); `hr-repair-modulation` targets HR directly.
- `parp-inhibition`: PARP operates primarily in single-strand break repair and base-excision repair, not HR.

**Canonical values in use:** `hr-repair-modulation`

**Hallmarks primarily targeted:** [[genomic-instability]], [[telomere-attrition]] (DSBs at telomere ends are an HR substrate)

**Constituent compound/intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "hr-repair-modulation")
```

---

### ubiquitin-ligase-modulation

**Added:** R37 (2026-05-12) — first intervention page: [[interventions/pharmacological/cgas-modulators]] (TRIM41 inhibition as a strategy to stabilize chromatin-bound cGAS)

**Definition:** Pharmacological modulation of **E3 ubiquitin ligase activity**, either inhibiting a specific ligase to prevent substrate degradation, or enhancing ligase activity to promote substrate clearance. In the aging context, the initial instance is **TRIM41 (RING finger protein 41) inhibition** — TRIM41 mediates ubiquitination of chromatin-bound cGAS, targeting it for proteasomal degradation. Inhibiting TRIM41 increases chromatin residence time of cGAS, potentially enhancing the HR-support function described in Chen 2025. The broader class includes PROTAC-based E3 ligase-recruiting strategies (already represented in the `BH3-mimetic / BCL-2-family-inhibitor` class for DT2216/PZ15227), but this class specifically covers **direct ligase inhibition** (as opposed to ligase-recruiting PROTACs).

Distinct from:
- `BH3-mimetic / BCL-2-family-inhibitor` class PROTACs (DT2216, PZ15227): those *recruit* E3 ligases to degrade a target; `ubiquitin-ligase-modulation` inhibits the ligase to *protect* a target from degradation.
- `senolytic`: senolytics clear entire senescent cells; ubiquitin-ligase modulation acts at the protein level without killing cells.

**Canonical values in use:** `ubiquitin-ligase-modulation`

**Hallmarks primarily targeted:** [[genomic-instability]] (via TRIM41-cGAS-HR axis), [[cellular-senescence]] (speculative)

**Constituent compound/intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "ubiquitin-ligase-modulation")
```

---

### epidermal-barrier-repair

**Added:** R42 (2026-05-19) — first compound page: [[molecules/compounds/niacinamide]]

**Definition:** Compounds that stimulate synthesis of stratum corneum structural lipids — ceramides, cholesterol, and free fatty acids — and/or epidermal structural proteins (filaggrin, loricrin, involucrin) in keratinocytes, thereby reducing transepidermal water loss (TEWL) and restoring the permeability barrier. The canonical mechanistic anchor is nicotinamide's (niacinamide's) ability to upregulate ceramide synthesis in cultured human keratinocytes (Tanno 2000, doi:10.1111/j.1365-2133.2000.03705.x). Distinct from `topical retinoid / RAR agonist` (which acts via nuclear receptor transcription rather than direct lipid-synthetic upregulation), and from general `antioxidant` or `anti-inflammatory` classes (which act on ROS/cytokine pathways rather than barrier-lipid biosynthesis).

**Aging relevance:** The skin permeability barrier deteriorates with age: ceramide content in the stratum corneum declines in elderly individuals, correlating with increased TEWL, impaired wound healing, and compromised defence against pathogens and allergens. Barrier restoration addresses a functional deficit that accumulates in aged skin independently of the extrinsic photoaging process. The hallmark linkage to [[loss-of-proteostasis]] is via the proteolytic processing of structural proteins (filaggrin breakdown to natural moisturising factor NMF; failure of this cascade drives ichthyosis-adjacent phenotypes that partially overlap with aged-skin phenotypes).

**Canonical values in use:** `epidermal-barrier-repair`

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (barrier-lipid homeostasis in stratum corneum), [[chronic-inflammation]] (secondary — barrier breach increases skin inflammatory burden)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "epidermal-barrier-repair")
```

---

### AHA-corneocyte-desquamation

**Added:** R44 (2026-05-19) — founding compound page: [[molecules/compounds/lactic-acid]]

**Definition:** Alpha-hydroxy acids (AHAs) that reduce ionic cohesion between corneocytes in the lower stratum corneum by chelating calcium ions and disrupting the calcium-dependent desmoglein/desmocollin desmosomal adhesion complexes. The result is accelerated shedding of surface corneocytes, reduced stratum corneum thickness, and improved surface texture. At higher concentrations (≥20% clinical peel), progressive disruption of intercellular lipid lamellae triggers a keratinocyte wound-response (epidermal thickening, fibroblast activation, procollagen upregulation). The class covers all topically applied AHA compounds used for this mechanism — glycolic acid (2-carbon), lactic acid (3-carbon), mandelic acid, pyruvic acid, and citric acid. **Lactic acid is distinguished within the class by two additional mechanisms:** (1) hygroscopic humectancy — the lactate anion is a natural moisturizing factor (NMF) component and binds water in the stratum corneum; (2) pH buffering capacity supports stratum corneum acidification, which activates serine protease activity and endogenous desquamation enzymes.

**Canonical values in use:** `AHA-corneocyte-desquamation`, `NMF-humectancy` (lactic acid compound-specific secondary mechanism)

**Distinction from other skin mechanism classes:**
- `topical retinoid / RAR agonist`: retinoids act via nuclear transcription (AP-1 transrepression + collagen synthesis induction); AHAs act extracellularly on desmosomal adhesion — orthogonal mechanisms, commonly combined
- `epidermal-barrier-repair`: that class covers ceramide/structural-lipid synthesis upregulation; AHA-desquamation reduces corneal layer thickness but does NOT directly upregulate barrier lipids (it may indirectly improve barrier by removing lipid-depleted surface corneocytes)
- `extracellular-matrix-remodeling`: the wound-response collagen-stimulation observed at high AHA concentrations is a downstream consequence, not the primary pharmacodynamic target

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (stratum corneum proteostasis — defective desquamation accumulates dysfunctional corneocyte layers in aged and photodamaged skin; accelerated controlled shedding restores normal turnover kinetics)

**Note on hallmark linkage:** Skin-aging phenotypes (roughness, uneven texture, hyperpigmentation, increased TEWL, impaired wound healing) are downstream of proteostatic and ECM failures in the epidermis. The primary hallmark linkage for topical AHAs is [[loss-of-proteostasis]] via disordered corneocyte turnover; secondary linkage to [[chronic-inflammation]] applies only at concentrations that trigger a wound/inflammatory response (deep peels).

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "AHA-corneocyte-desquamation")
```

---

### melanin-transfer-inhibition

**Added:** R42 (2026-05-19) — first compound page: [[molecules/compounds/niacinamide]]

**Definition:** Compounds that reduce the transfer of melanin-containing melanosomes from melanocytes to keratinocytes in the epidermis, reducing visible hyperpigmentation without directly inhibiting melanin biosynthesis. The canonical mechanism for niacinamide is antagonism of the protease-activated receptor-2 (PAR-2) on keratinocytes: PAR-2 activation by serine proteases promotes phagocytosis of melanosomes delivered by melanocyte dendrites; niacinamide-mediated PAR-2 antagonism suppresses this melanosome-uptake step, reducing keratinocyte pigment load. Established by Hakozaki 2002 (doi:10.1046/j.1365-2133.2002.04834.x) in vitro and validated clinically.

**Distinction from tyrosinase inhibitors:** Tyrosinase inhibitors (kojic acid, arbutin, tranexamic acid) act in melanocytes upstream of melanosome transfer by blocking melanin synthesis. Melanin-transfer inhibitors act at the transfer step, downstream of melanin production. The two mechanisms are complementary. Note: tranexamic acid achieves depigmentation primarily via plasmin-arachidonic acid-PGE2 suppression in melanocytes rather than PAR-2 antagonism.

**Note on PAR-2 mechanism specificity:** The PAR-2 antagonism hypothesis has not been confirmed by competitive binding assays or primary human keratinocyte genetic knockdown as of 2025. An alternative hypothesis (disruption of actin-based melanosome transport) has been proposed. Hakozaki 2002 remains the canonical reference. Flag as `#gap/needs-replication` on compound pages pending independent mechanistic confirmation.

**Canonical values in use:** `melanin-transfer-inhibition`

**Hallmarks primarily targeted:** None directly established as a systemic aging hallmark. Organ-specific relevance: hyperpigmentation (solar lentigines) is a canonical photoaging phenotype. Indirect secondary linkage to [[chronic-inflammation]] (UV-induced melanogenesis is inflammation-driven).

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "melanin-transfer-inhibition")
```

---

### keratolytic / BHA-exfoliation

**Added:** R44 (2026-05-19) — founding compound page: [[molecules/compounds/salicylic-acid]]

**Definition:** Beta-hydroxy acids (BHAs) and other keratolytic agents that reduce corneocyte cohesion and promote controlled desquamation via a lipid-solubility-enabled mechanism distinct from AHA calcium chelation. The canonical class member is salicylic acid (2-hydroxybenzoic acid): its aromatic ring confers a logP of ~2.3, allowing it to partition into the lipid-rich sebaceous follicle environment and stratum corneum lipid lamellae — compartments inaccessible to water-soluble AHAs. Within the follicle, salicylic acid (1) disrupts intercorneocyte adhesion through corneodesmosomes (reducing microcomedone cohesion), (2) reduces sebaceous lipogenesis via AMPK/SREBP1 pathway suppression in sebocytes [Lu 2019, doi:10.1111/exd.13934], and (3) exerts weak COX-1 inhibition that reduces local prostaglandin production and contributes to anti-inflammatory activity at low concentrations. At higher concentrations (≥20% medical-grade peel), the wounding effect extends to epidermis and upper papillary dermis, triggering a collagen-remodeling response and keratinocyte wound healing.

**Key class distinction from `AHA-corneocyte-desquamation`:**

| Property | AHAs (glycolic, lactic) | BHA (salicylic acid) |
|---|---|---|
| Water solubility | High (hydrophilic) | Moderate (logP ~2.3, lipophilic) |
| Follicle penetration | Minimal | High — partitions into sebum |
| Primary target | Stratum corneum surface | Sebaceous follicle + SC |
| Anti-inflammatory? | No | Yes (weak COX-1 inhibition) |
| PIH risk | Higher in darker skin tones | Lower than AHAs |
| Humectant co-effect | Lactic acid only | No |

**Canonical values in use:** `corneocyte-desquamation`, `sebaceous-follicle-penetration`, `anti-inflammatory`

**Note on `anti-inflammatory` dual-listing:** When salicylic acid appears in the Dataview block for the `anti-inflammatory` class, this reflects the weak COX-1 inhibition at cosmeceutical concentrations — mechanistically distinct from the systemic COX inhibition of oral aspirin. Compound pages should clarify this concentration-dependent distinction in body prose.

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (disordered corneocyte turnover in aged/photodamaged skin — same as `AHA-corneocyte-desquamation`), [[chronic-inflammation]] (anti-inflammatory activity at low concentrations)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "corneocyte-desquamation")
  OR contains(mechanisms, "sebaceous-follicle-penetration")
```

---

### estrogen-receptor-agonist

**Added:** R44 (2026-05-19) — first intervention page: [[interventions/pharmacological/topical-estrogens]]

**Definition:** Compounds that bind and activate estrogen receptors (ER-α encoded by *ESR1*; ER-β encoded by *ESR2*), which are ligand-activated transcription factors of the nuclear receptor superfamily. In skin, ER-α and ER-β are expressed in keratinocytes, dermal fibroblasts, sebaceous glands, and hair follicles. Ligand binding causes receptor dimerization, binding to estrogen response elements (EREs) in gene promoters, and recruitment of coactivator complexes — driving transcription of target genes including *COL1A1*, *COL3A1*, hyaluronan synthases, and VEGF. Secondary signalling occurs via non-genomic membrane-associated ER activation of PI3K/Akt and MAPK pathways. The three natural estrogens differ in ER binding affinity: 17β-estradiol (highest, ~10x estriol), estriol (low affinity, short receptor occupancy), estrone (intermediate). Selective estrogen receptor modulators (SERMs) are tissue-selective partial agonists/antagonists (e.g., tamoxifen = ER antagonist in breast; ER agonist in bone).

**Sub-class note:** For topical skin-aging applications, estriol's *low* ER binding affinity is a feature, not a bug — it minimises systemic absorption risk relative to 17β-estradiol while retaining local efficacy at concentrations achievable with topical delivery. This is the basis for estriol cream being the preferred topical agent in EU for skin aging contexts.

**Distinct from:**
- `topical retinoid / RAR agonist`: retinoids activate a different nuclear receptor family (RAR/RXR) via entirely separate transcription programs; retinoids and topical estrogens have orthogonal mechanisms and complementary downstream effects on [[col1a1]]/[[col3a1]] synthesis.
- `collagen-synthesis-stimulation`: that mechanism value describes the downstream output; `estrogen-receptor-agonist` identifies the upstream receptor biology. Both should be listed together on topical estrogen pages.

**Canonical values in use:** `estrogen-receptor-agonist`, `collagen-synthesis-stimulation`, `MMP-1-suppression` (anti-MMP mechanism documented for estrogen, distinct from AP-1-transrepression used in retinoid class)

**Note on hallmark linkage:** Topical estrogens target the [[loss-of-proteostasis]] hallmark via restoration of dermal ECM collagen/HA homeostasis. They do NOT currently have a plausible systemic hallmark target; the indication is skin-tissue-specific.

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (dermal collagen/ECM homeostasis), [[altered-intercellular-communication]] (paracrine ER signalling in the dermis)

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "estrogen-receptor-agonist")
```

---

### androgen-receptor-agonist

**Added:** 2026-06-03 — first compound page: [[molecules/compounds/testosterone]]

**Definition:** Compounds that bind and activate androgen receptors (AR / *NR3C4*), ligand-activated transcription factors of the nuclear receptor superfamily expressed in muscle, bone, bone marrow, liver, skin, prostate, brain, and cardiovascular tissue. AR ligand binding causes receptor dissociation from HSP90 chaperones, homodimerization, nuclear translocation, binding to androgen response elements (AREs), and recruitment of coactivator complexes — driving transcription of target genes including those controlling protein synthesis (muscle), IGF-1 production (liver), erythropoiesis (EPO/kidney axis), and reproductive function. In skeletal muscle, AR activation upregulates mTORC1 and satellite-cell proliferation, driving anabolic hypertrophy. In bone, testosterone has a bifurcated mechanism: direct AR agonism on osteoblasts supports periosteal bone formation, while aromatase-mediated conversion to 17β-estradiol (acting via ER-α encoded by *ESR1*) is the dominant driver of trabecular bone homeostasis and epiphyseal closure. This dual mechanism (AR direct + ER-α via aromatization) is a defining feature of testosterone that distinguishes it from synthetic androgens that resist aromatization (e.g., oxandrolone, DHT). 5α-reduction to dihydrotestosterone (DHT) by SRD5A1/SRD5A2 produces a more potent non-aromatizable AR agonist relevant in prostate, skin, and scalp.

**Key distinction — testosterone vs synthetic androgens:**
This class is specifically for **natural or bioidentical androgen receptor agonists** (testosterone and its ester prodrugs: testosterone enanthate, testosterone cypionate, testosterone undecanoate, testosterone propionate). Synthetic non-aromatizable androgens (oxandrolone, stanozolol, nandrolone) and selective androgen receptor modulators (SARMs — enobosarm/ostarine, ligandrol, RAD-140) are pharmacologically distinct sub-classes with different tissue selectivity, aromatization profiles, and safety signals. Use `synthetic-androgen` or `sarm-receptor-agonism` on their pages to enable disambiguation. **DHT-based compounds** (finasteride-targeted: 5α-reduced non-aromatizable) should note this in body prose.

**Canonical values in use:** `androgen-receptor-agonist`, `ar-agonism`

**Hallmarks primarily targeted:** [[altered-intercellular-communication]] (testosterone is a systemic endocrine hormone whose age-related decline constitutes a quantitative shift in intercellular communication), [[stem-cell-exhaustion]] (satellite cell and erythroid progenitor support), [[deregulated-nutrient-sensing]] (muscle AR × mTORC1 anabolic signaling axis)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "androgen-receptor-agonist")
  OR contains(mechanisms, "ar-agonism")
```

---

### progesterone-receptor-agonist

**Added:** 2026-06-03 — first compound page: [[molecules/compounds/progesterone]]

**Definition:** Compounds that bind and activate progesterone receptors (PR-A and PR-B isoforms of *PGR*, and membrane progesterone receptors of the *PAQR* family), which are ligand-activated transcription factors of the nuclear receptor superfamily. PR-A and PR-B share a common ligand-binding domain but differ at the N-terminal A/B domain; PR-A acts primarily as a transcriptional repressor of ER-mediated gene programs, while PR-B drives classical progestational effects (endometrial secretory transformation, myometrial quiescence). Ligand binding causes receptor dimerization, binding to progesterone response elements (PREs) in gene promoters, and recruitment of coactivator/corepressor complexes. Endogenous progesterone also generates the neurosteroid allopregnanolone (3α,5α-tetrahydroprogesterone) via local neuronal 5α-reductase and 3α-hydroxysteroid dehydrogenase activity — allopregnanolone is a potent positive allosteric modulator of GABA-A receptors and operates independently of nuclear PR.

**Critical class distinction — progesterone vs synthetic progestins:**
This class is specifically for **bioidentical progesterone** (identical to the endogenous C-21 steroid *pregn-4-ene-3,20-dione*). Synthetic progestins (medroxyprogesterone acetate / MPA, norethisterone acetate / NETA, levonorgestrel, drospirenone, desogestrel, dienogest) are classified under `synthetic-progestin` — a **distinct sub-class** with different pharmacological profiles:
- MPA activates glucocorticoid and androgen receptors in addition to PR; it does not generate allopregnanolone; it shows adverse cardiovascular and breast-cancer signals in WHI that are not observed with bioidentical progesterone.
- Levonorgestrel and NETA are 19-norsteroids with significant androgenic receptor activity.
The two sub-classes must not be conflated in Dataview queries or evidence claims. Pages for synthetic progestins should use `synthetic-progestin` to enable disambiguation.

**Canonical values in use:** `progesterone-receptor-agonist`, `pr-a-pr-b-agonist`, `allopregnanolone-precursor`, `synthetic-progestin` (progestin sub-class, distinct)

**Note on membrane progesterone receptors (mPR/PAQR):** Progesterone also binds membrane progesterone receptors (mPRα, mPRβ, mPRγ — products of the *PAQR* gene family) and the progesterone receptor membrane component 1 (PGRMC1), activating non-genomic signalling cascades. These non-genomic receptors contribute to rapid progesterone effects on sperm motility, neuroprotection, and cell survival signaling. Their contribution to aging-relevant biology is incompletely characterised. List `progesterone-receptor-agonist` as the umbrella value; note membrane-receptor biology in body prose.

**Hallmarks primarily targeted:** [[altered-intercellular-communication]] (progesterone is a central endocrine-paracrine signal in the female reproductive axis; its perimenopausal decline is an intercellular communication shift with broad tissue consequences); [[cellular-senescence]] (endometrial protection — opposing estrogen-driven proliferative senescence risk); brain aging via [[altered-intercellular-communication]] (allopregnanolone GABA-A modulation)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "progesterone-receptor-agonist")
  OR contains(mechanisms, "pr-a-pr-b-agonist")
  OR contains(mechanisms, "allopregnanolone-precursor")
  OR contains(mechanisms, "synthetic-progestin")
```

---

### systemic-milieu-restoration

**Added:** 2026-05-29 — first intervention page: [[interventions/blood-product/heterochronic-parabiosis]]

**Definition:** Interventions that modulate the **composition of the circulating blood environment** to reduce age-associated inhibitory factors (e.g., CCL11, B2M, TGF-β1) and/or increase age-depleted pro-regenerative factors, thereby restoring tissue stem cell function and systemic homeostatic signalling. Mechanistic sub-classes:

- **`young-factor-introduction`** — infusion of young-blood plasma or plasma fractions supplying factors absent or depleted in aged circulation (GDF11-debated; TIMP2; plasminogen).
- **`aged-factor-removal`** — dilution or physical removal of inhibitory circulating factors accumulated with age (CCL11, B2M, TGF-β1 as key candidates).
- **`dilution-effect`** — neutral saline-albumin exchange or standard plasmapheresis (TPE) that reduces inhibitory-factor burden without introducing young-specific components; the Mehdipour / Conboy NBE evidence base.

The class is blood-product–mode only. Pharmacological mimics (e.g., anti-CCL11 antibodies) would belong to `anti-inflammatory` + this class. Heterochronic parabiosis in animal models is the discovery paradigm; the translational equivalents are therapeutic plasma exchange (TPE), neutral blood exchange (NBE), and young-plasma infusion — all covered on [[interventions/blood-product/plasma-exchange]].

**Canonical values in use:** `systemic-milieu-restoration`, `young-factor-introduction`, `aged-factor-removal`, `dilution-effect`

**Note on overlap with plasma-exchange page:** The [[interventions/blood-product/plasma-exchange]] page predates this class entry and uses `aged-factor-removal`, `young-factor-introduction`, `dilution-effect`, `albumin-binding-capacity-restoration`. These four values are retroactively affiliated to this class. A cleanup pass should also add `systemic-milieu-restoration` as a co-listed value to that page's `mechanisms:` field. `albumin-binding-capacity-restoration` is a plasma-exchange–specific sub-mechanism not applicable to HPB; it remains valid on that page.

**Hallmarks primarily targeted:** [[altered-intercellular-communication]], [[stem-cell-exhaustion]], [[chronic-inflammation]]

**Translation-gap note:** Heterochronic parabiosis itself has no human translation (surgical conjoining is not a clinical intervention). The translational derivatives (TPE/NBE/young-plasma) are `phase-2` at best (AMBAR trial, AD indication); no healthy-aging-primary-endpoint RCT has been completed. Human evidence is limited. See [[interventions/blood-product/plasma-exchange]] for the clinical evidence table.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "interventions"
WHERE contains(mechanisms, "systemic-milieu-restoration")
  OR contains(mechanisms, "young-factor-introduction")
  OR contains(mechanisms, "aged-factor-removal")
  OR contains(mechanisms, "dilution-effect")
```

---

### aromatase-inhibition

**Added:** 2026-06-03 — first intervention page: [[interventions/pharmacological/aromatase-inhibitors]]

**Definition:** Pharmacological agents that suppress systemic estrogen biosynthesis by blocking [[cyp19a1]] (aromatase / CYP19A1), the cytochrome P450 enzyme that catalyses the irreversible aromatization of androgens (androstenedione → estrone; testosterone → 17β-estradiol) in peripheral tissues (adipose, breast, liver, bone, brain). Two mechanistic sub-classes:

- **Non-steroidal / reversible (`non-steroidal-aromatase-inhibitor`):** competitive inhibitors that bind the active site via a triazole or imidazole nitrogen coordinating the heme Fe²⁺ of CYP19A1 without covalent bond formation; inhibition is reversible on drug removal. Canonical agents: anastrozole and letrozole (third-generation). These achieve >99% estrogen suppression in postmenopausal women.
- **Steroidal / irreversible (`steroidal-aromatase-inhibitor`):** substrate-analogue inhibitors (type I; exemestane) that act as pseudo-substrates, binding CYP19A1 irreversibly via covalent adduct formation at the active site. Effect persists until new enzyme is synthesized. Exemestane (6-methyleneandrosta-1,4-diene-3,17-dione) also has weak androgenic activity at the AR due to its steroidal scaffold.

Mechanism of downstream suppression: androgen-to-estrogen conversion is the sole estrogen-production route in postmenopausal women (ovarian estrogen synthesis has ceased); AIs therefore drive 17β-estradiol to near-undetectable levels in postmenopausal plasma. In premenopausal women, AIs trigger a reflex rise in FSH via loss of estrogen-mediated negative feedback on the pituitary → compensatory ovarian hyperactivation; ovarian suppression (GnRH agonist or oophorectomy) is therefore required for clinical efficacy in premenopausal settings.

**Key biological context for aging:** Because estrogen is bone-protective (suppresses RANKL-driven osteoclast activity via ESR1 on osteoblasts and osteoclasts), near-total estrogen deprivation produces accelerated trabecular bone loss, reduced BMD, and excess fracture risk — modeling the extreme of estrogen deficiency as an experimental paradigm. AI-exposed patients are therefore an important human model for studying estrogen's role in bone aging (see [[osteoporosis]], [[cyp19a1]], [[estradiol]]).

**Distinct from:**
- `estrogen-receptor-agonist` — acts at ER directly; AIs reduce the ligand, not the receptor.
- `selective-estrogen-receptor-modulators` (SERMs) — tissue-selective ER partial agonists/antagonists (tamoxifen, raloxifene); SERMs block ER in breast while acting as ER agonists in bone → bone-protective (mechanistically opposite to AIs on the bone axis).

**Canonical values in use:** `aromatase-inhibition`, `non-steroidal-aromatase-inhibitor`, `steroidal-aromatase-inhibitor`, `estrogen-suppression`

**Hallmarks primarily targeted:** [[altered-intercellular-communication]] (estrogen is a systemic endocrine/paracrine signal; AI-mediated suppression represents a profound quantitative shift in intercellular communication with multi-tissue consequences)

**Secondary hallmarks (negative consequences of mechanism):** [[loss-of-proteostasis]] (bone ECM degradation under estrogen deprivation); [[chronic-inflammation]] (joint inflammation / arthralgia is a common on-mechanism adverse effect)

**Translation-gap note:** AIs are FDA-approved for cancer indications; the aging-wiki relevance is as a mechanistic estrogen-deprivation model and for cancer survivors where AI-accelerated bone aging is managed with anti-resorptive co-therapy.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "aromatase-inhibition")
  OR contains(mechanisms, "non-steroidal-aromatase-inhibitor")
  OR contains(mechanisms, "steroidal-aromatase-inhibitor")
  OR contains(mechanisms, "estrogen-suppression")
```

---

## Classes on the roadmap (not yet in compound pages)

The following classes were proposed in the R16 brief but have no current atomic-page representation. They are documented here as placeholders for future seeding. Each should get a compound/intervention page before this class entry is populated.

| Proposed class | Canonical example | Hallmarks targeted | Status |
|---|---|---|---|
| partial-reprogrammer | OSK/OSKM vectors, Yamanaka factors | [[epigenetic-alterations]] | No compound page yet; hypothesis treatment at [[hypotheses/information-theory-of-aging]] |
| plasma exchange / heterochronic factor | Alkahest GRF6019, young plasma, plasma dilution | [[altered-intercellular-communication]] | **Promoted to class inventory 2026-05-29** — see `systemic-milieu-restoration` class above and [[interventions/blood-product/heterochronic-parabiosis]] |
| gene therapy | AAV-TERT, LMNA correction | [[telomere-attrition]], [[epigenetic-alterations]] | [[interventions/gene-therapy/aav-tert]] seeded (verified R18); uses `telomere-extension` + `telomerase-reactivation` as mechanism values (gene-therapy modality, distinct from pharmacological `telomerase-activation`) |
| BCL-xL-selective PROTAC | DT2216, PZ15227 | [[cellular-senescence]] | Preclinical; mentioned in [[a1331852]] and [[navitoclax]] next-experiment field |
| HDAC inhibitor / butyrate | Sodium butyrate, SCFA-derived | [[epigenetic-alterations]], [[dysbiosis]] | **Promoted to class inventory R31** — see [[interventions/pharmacological/hdac-inhibitors]] and `hdac-inhibition` class above |
| TBK1/IKKε inhibitor | Amlexanox (dual), BX795 (dual TBK1/PDK1), GSK8612 (TBK1-selective) | [[chronic-inflammation]], [[deregulated-nutrient-sensing]] | **Promoted to class inventory R35** — see [[molecules/compounds/amlexanox]]; `tbk1-ikke-inhibitor` class value; suppresses metabolic inflammation and SASP-amplifying NF-κB via non-canonical IKK kinase inhibition |

---

## Maintenance protocol

1. **Any new `type: compound` or `type: intervention` page must** use a `mechanisms:` value from this class inventory (or add a new class here first).
2. **The Dataview blocks above are the canonical authority** for which compounds belong to which class. If a compound is not appearing in its expected class block, the fix is on the compound page's `mechanisms:` field.
3. **Run the lint-pass class-coverage check** (see `sops/lint-pass.md` § "Intervention matrix coverage") after every seeding batch.
4. **Version this list** — when adding a new class, note the round (R16, R17, etc.) and the first compound seeded.

---

## Schema clarification — druggability tier vs Open Targets mapping (R28-2026-05-07)

The wiki applies an **aging-context tier-1 convention** for `druggability-tier:` that diverges from strict Open Targets Platform taxonomy when a clinical-stage drug exists for a non-aging indication that engages the target. Open Targets reserves tier 1 for "Approved Drug = true"; targets with "Advanced Clinical = true / Approved Drug = false" map to tier 2 strictly. The wiki retains tier 1 for such targets when (a) the agent has reached Phase 2/3 in any indication and (b) the target is mechanistically engaged in an aging-relevant pathway.

**Precedent (R28):** [[irak4]] retains tier 1 with documented rationale even though Open Targets strict taxonomy would assign tier 2 (no approved IRAK4 drug; multiple Phase 2 clinical-stage agents — zimlovisertib in development, emavusertib in trials; KT-474/SAR444656 Phase 2 program TERMINATED 2024 by Sanofi/Kymera, but the IRAK4-degrader/inhibitor class remains active).

This convention should be picked up in the next CLAUDE.md cleanup as a formal addendum to the `druggability-tier:` field definition for `type: protein` and `type: pathway` pages. Until then, individual page-level `druggability-tier:` choices that differ from strict Open Targets mapping must document the rationale in the body. See `sops/finding-druggability.md` for the full Open Targets lookup procedure.

---

### UV-filter / photoprotection

**Added:** R42 (2026-05-19) — first intervention page: [[interventions/lifestyle/uv-protection]]

**Definition:** Physical or chemical agents — and associated behavioral routines — that attenuate ultraviolet radiation (UVB 290–320 nm; UVA-II 320–340 nm; UVA-I 340–400 nm) and visible-light/IRA reaching the skin, thereby preventing UV-induced DNA damage (cyclobutane pyrimidine dimers, 6–4 photoproducts), AP-1/NF-κB pathway activation, matrix metalloproteinase induction (MMP-1, MMP-3, MMP-9), and oxidative-stress-driven dermal proteostasis disruption. Two principal mechanism sub-classes:

- **`UV-filter-absorption-scattering`** — the mechanism of sunscreen agents: mineral filters (zinc oxide, titanium dioxide) scatter and absorb UV via semiconductor-gap electronic transitions; chemical/organic filters (avobenzone, tinosorb, ecamsule) absorb UV photons and dissipate energy as heat. The SPF rating quantifies UVB attenuation; PPD/PA ratings quantify UVA attenuation.
- **`photoaging-prevention`** — the downstream functional consequence used as the aging-context mechanism value. Applied to intervention pages whose primary aging-relevant claim is prevention of photoaging (UV-driven dermal ECM degradation, pigmentation accumulation, skin barrier disruption). Distinct from UV-carcinogenesis prevention (a separate clinical endpoint).

This class is primarily relevant to `type: intervention` pages in `interventions/lifestyle/` covering sunscreen + behavioral photoprotection. Compound-level pages for specific UV filters (zinc oxide, avobenzone, tinosorb) are out-of-scope for the intervention class page; the class page covers the portfolio-level prevention strategy.

**Canonical values in use:** `UV-filter-absorption-scattering`, `photoaging-prevention`. (The shorter `UV-filter-absorption` is an accepted equivalent value: the individual UV-filter compound pages — triasorb, mexoryl-400, bemotrizinol, drometrizole-trisiloxane, iscotrizinol — use it, optionally with a filter-specific descriptor such as `ultra-long-UVA-I-coverage`, `UVA-broadband-coverage`, `avobenzone-photostabilization`, or `UVA-II-short-UVA-I-coverage`. The Dataview below catches both forms.)

**Note on overlap with other classes:** When a formulation also contains antioxidant actives (vitamin C, vitamin E, ferulic acid), those components engage the `antioxidant` class. When a formulation contains a retinoid, the `RAR-agonist` / `AP-1-transrepression` classes apply to the retinoid component. UV protection and retinoid/antioxidant adjuncts are often co-deployed; list all applicable class values on combined-product pages.

**Hallmarks primarily targeted:** [[genomic-instability]] (UV-induced CPD/6-4PP DNA damage → mutagenesis; AP-1 → MMP-1/MMP-9 → ECM disruption), [[loss-of-proteostasis]] (UV → MMP-driven collagen/elastin fragmentation), [[chronic-inflammation]] (UV → AP-1/NF-κB → cytokine induction; tanning-response inflammation; UVA-induced ROS)

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "UV-filter-absorption-scattering")
  OR contains(mechanisms, "UV-filter-absorption")
  OR contains(mechanisms, "photoaging-prevention")
```

---

### corneocyte-desquamation / AHA-exfoliation

**Added:** R44 (2026-05-19) — first compound page: [[molecules/compounds/glycolic-acid]]

**Definition:** Compounds that accelerate the physiological desquamation of corneocytes from the stratum corneum surface by weakening or dissolving the extracellular corneodesmosome structures that anchor adjacent corneocytes. Alpha-hydroxy acids (AHAs) — including glycolic acid (2-carbon), lactic acid (3-carbon), mandelic acid, citric acid — are the canonical pharmacological class. The proximal mechanism is pH-dependent: at low pH (below ~4), the undissociated free-acid form (RCOOH) penetrates the lipid-rich intercorneocyte lamellae; once intracellular the acid dissociates, lowering local pH and disrupting calcium-dependent serine protease activity (kallikrein-5/KLK5, kallikrein-7/KLK7 — the enzymes that process desmoglein-1 and corneodesmosin for natural shedding). Critically, the mechanically active species is the **undissociated free acid** (RCOOH), not the carboxylate anion (RCOO⁻); pH is therefore the primary determinant of efficacy — a product with 10% glycolic acid buffered to pH 7 delivers negligible undissociated acid compared with the same concentration at pH 3.5.

Two mechanistic sub-classes by depth of action (concentration + pH dependent):

- **`corneocyte-desquamation`** (cosmetic-grade, primary class value): low-concentration (5–15%), pH 3.5–5 formulations limited to the stratum corneum. Enhanced surface-cell shedding; no wounding. Used in OTC serums, toners, and leave-on exfoliants.
- **`AHA-exfoliation`** (medical-grade / controlled-wounding secondary value): medium-to-high concentration (20–70%) AHA peels at pH < 3.5, applied for 2–5 minutes in-office. At 20–35%: epidermal penetration into stratum granulosum/spinosum → keratinocyte turnover stimulation and mild wounding response → collagen remodelling signal. At 35–70%: papillary dermis penetration → controlled wound healing response → neocollagenesis (mechanistically overlapping with [[chemical-peels]] and [[dermatologic-resurfacing]] but via a chemical rather than physical wounding mechanism).

**Distinction from related classes:**
- **`topical retinoid / RAR agonist`** — retinoids act via nuclear RAR receptor transcription programs; they do NOT primarily operate via corneodesmosome dissolution or pH. Phenotypic overlap (accelerated keratinocyte turnover) with mechanistic orthogonality.
- **`epidermal-barrier-repair`** — ceramide/filaggrin synthesis upregulation. AHAs at cosmetic concentrations have secondary humectant/barrier effects but these are distinct from the desquamation mechanism.
- **`UV-filter-absorption-scattering` / `photoaging-prevention`** — UV prevention is upstream. AHA exfoliation is a post-UV-damage resurfacing strategy. Complementary and often co-formulated.

**pH-dependence note:** EU Cosmetics Regulation and FDA guidance require sun-sensitivity warnings for leave-on AHA products at >10% concentration with pH < 3.5. Increased UVB photosensitivity persists for ~1 week post-peel. Document this on all AHA compound pages.

**Fitzpatrick safety note (class-level):** Post-inflammatory hyperpigmentation (PIH) risk is substantially higher in Fitzpatrick IV–VI skin types with higher-concentration or longer-contact AHA peels. Must be disclosed on all class-member compound pages.

**Canonical values in use:** `corneocyte-desquamation`, `AHA-exfoliation`

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (at peel-grade concentrations: wounding-response stimulates dermal collagen neosynthesis documented in dermis-depth biopsies, partially restoring ECM proteostatic architecture degraded by photoaging); [[chronic-inflammation]] (secondary: post-peel keratinocyte regeneration produces cytokine rebalancing, though acute-phase peeling produces a transient pro-inflammatory wounding signal before the anti-aging benefit).

**Note on hallmark mapping:** At OTC cosmetic concentrations, the primary effect is stratum-corneum-level exfoliation — not a direct hallmark intervention. `hallmarks: []` is acceptable for OTC-only AHA compound pages. The `[[loss-of-proteostasis]]` link applies specifically at peel-grade concentrations with dermis-depth biopsy evidence (first documented by Yamamoto 2006 doi:10.1111/j.1346-8138.2006.00003.x and Newman 1996 doi:10.1111/j.1524-4725.1996.tb00347.x).

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "corneocyte-desquamation")
  OR contains(mechanisms, "AHA-exfoliation")
```

---

### controlled-wounding-collagen-stimulation

**Added:** R44 (2026-05-19) — first intervention page: [[interventions/pharmacological/chemical-peels]]

**Definition:** Intentional induction of a **controlled, predictable-depth dermal wound** — via chemical agents (acid peels), physical energy (ablative laser resurfacing, microneedling, dermabrasion), or a combination thereof — to trigger the programmed wound-healing cascade: (1) keratinocyte migration from follicular/adnexal reserve → re-epithelialization; (2) dermal fibroblast activation → TGF-β1-driven type I and type III collagen synthesis and deposition (neocollagenesis); (3) remodelling phase → net positive collagen balance in the papillary and upper reticular dermis, with improvement in skin texture, wrinkle depth, and mechanical integrity. The mechanism is fundamentally distinct from transcriptional pathway modulation (retinoids/RAR agonism, AHA corneodesmosome disruption) — it operates via the fibroblast mechanosensing and paracrine growth-factor (TGF-β1, KGF, EGF) response to tissue injury.

**Depth grading:** the magnitude of controlled-wounding benefit scales with wound depth:
- **Superficial (epidermis only):** minimal neocollagenesis; primary benefit is keratinocyte turnover and pigmentation improvement.
- **Medium-depth (papillary dermis penetration):** documented neocollagenesis via dermis-depth biopsies (Bernstein 2001 doi:10.1097/00006534-200103000-00001); clinically meaningful wrinkle improvement.
- **Deep (reticular dermis penetration):** maximum collagen response; highest downtime + complication risk; Baker-Gordon phenol peel and CO2 ablative laser are canonical deep-wounding modalities.

**Shared class with [[dermatologic-resurfacing]]:** This class spans both chemical (peels) and physical (laser, microneedling) wounding modalities. The shared mechanism is controlled wound healing; the delivery modality (acid vs. photon vs. needle) is secondary. Both [[chemical-peels]] (R44) and [[dermatologic-resurfacing]] (R44 sister page) use `controlled-wounding-collagen-stimulation` as a primary mechanism value.

**Canonical values in use:** `controlled-wounding-collagen-stimulation`, `neocollagenesis`, `fractional-photothermolysis`, `microneedling-controlled-injury`

**R44 sub-mechanism additions (2026-05-19; dermatologic-resurfacing page):**
- **`fractional-photothermolysis`** — the specific physical mechanism of fractional laser devices (CO2 10,600 nm, Er:YAG 2940 nm, 1550 nm Fraxel, 1927 nm thulium): laser energy creates arrays of microscopic treatment zones (MTZs) of thermal injury separated by spared epidermal/dermal bridges, which accelerate re-epithelialization. First described by Manstein et al. 2004 (doi:10.1002/lsm.20048). Use as a secondary value alongside `controlled-wounding-collagen-stimulation` on pages for laser-based resurfacing modalities.
- **`microneedling-controlled-injury`** — the mechanism of mechanical microneedling devices: physically-driven needle arrays (0.5–3 mm depth) create microchannels in the epidermis and dermis without thermal damage, triggering wound-healing cascade via mechanical rather than photothermal injury. Encompasses both roller/stamp mechanical devices and radiofrequency-coupled microneedling (Morpheus8, Genius, Vivace — the RF component adds a concurrent thermal dermal heating mechanism; list both `microneedling-controlled-injury` and `fractional-photothermolysis` for RF microneedling devices). Use as a secondary value alongside `controlled-wounding-collagen-stimulation` on pages for mechanical microneedling modalities.

**Note on value usage:** Use `controlled-wounding-collagen-stimulation` as the primary mechanism class value for any intervention whose aging-relevant benefit derives primarily from the wound-healing neocollagenesis response. `neocollagenesis` is acceptable as a secondary value to enable queries specifically about new collagen synthesis. When the evidence for actual dermis-depth biopsy-confirmed neocollagenesis is thin (e.g., superficial-only peels), use only `corneocyte-desquamation` / `AHA-exfoliation` and note the limitation; do NOT claim `controlled-wounding-collagen-stimulation` for superficial-only protocols.

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (neocollagenesis restores the dermal ECM proteostatic architecture degraded by chronological aging and photoaging — specifically: fragmented, crosslinked collagen replaced by nascent collagen-I fibrils); [[chronic-inflammation]] (acute wounding phase produces a transient NF-κB/cytokine pulse followed by the TGF-β1-driven anti-inflammatory remodelling phase; net long-term outcome is reduction in baseline dermal inflammatory activity in photoaged skin)

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "controlled-wounding-collagen-stimulation")
  OR contains(mechanisms, "neocollagenesis")
  OR contains(mechanisms, "fractional-photothermolysis")
  OR contains(mechanisms, "microneedling-controlled-injury")
```

---

### age-crosslink-cleavage

**Added:** R44 (2026-05-19) — first intervention page: [[interventions/pharmacological/age-crosslink-breakers]]

**Definition:** Pharmacological agents designed to cleave covalent advanced glycation end-product (AGE) crosslinks that accumulate irreversibly in long-lived extracellular matrix (ECM) proteins — most importantly type I collagen in arteries, skin, tendon, and cardiac interstitium. The canonical target crosslink is **glucosepane** (a Lys–Arg imidazo[4,5-b]pyridine-derived crosslink that is the dominant AGE crosslink in adult human ECM by molar mass; see [[glucosepane]]). Two mechanistic sub-classes are distinguished:

- **`age-crosslink-cleavage`** (primary): direct chemical or enzymatic cleavage of an established covalent AGE crosslink in vivo. This is the defining class property and the stated mechanism of alagebrium-type agents and Revel Pharmaceuticals enzyme candidates. **Critical mechanistic caveat:** Yang, Litchfield & Baynes 2003 (PMID:12646266) demonstrated that alagebrium-class compounds (PTB, PMT) cleave in-vitro model crosslinks but do NOT cleave AGE crosslinks formed in vivo in real-tissue collagen from diabetic rats. Glucosepane-specific cleavage by Revel Pharmaceuticals enzyme candidates has not been demonstrated in vivo as of 2026. The class value is therefore aspirational for all current members pending demonstration of in-vivo efficacy.
- **`glucosepane-specific-cleavage`** (secondary, narrower): crosslink-cleavage activity targeting specifically glucosepane (the dominant human ECM crosslink). Use this secondary value only for compounds or biologics with evidence of glucosepane-selective activity (synthetic-substrate in vitro at minimum). No compound has demonstrated this in vivo as of 2026-05-19. When a glucosepane-specific breaker is confirmed in vivo, this value will distinguish it from broad-spectrum alagebrium-class agents.

**Distinct from related classes:**
- `extracellular-matrix-remodeling` — covers collagen synthesis promotion (GHK-Cu, HA) or MMP modulation; changes ECM composition without cleaving accumulated AGE crosslinks.
- `anti-amyloid-immunotherapy` / `ttr-tetramer-stabilization` — address amyloid protein aggregation (SENS AmyloSENS); AGE crosslink breaking is SENS GlycoSENS — distinct chemistry and target.
- `antioxidant` — compounds like pyridoxamine reduce formation of reactive carbonyl intermediates (upstream AGE-formation inhibition); they are NOT crosslink breakers and belong in the `antioxidant` class as AGE formation inhibitors.

**SENS category:** **GlycoSENS** — the canonical SENS damage category for accumulated extracellular crosslinks. See [[frameworks/sens-damage-categories]].

**Canonical values in use:** `age-crosslink-cleavage`, `glucosepane-specific-cleavage`

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (ECM proteostasis — accumulated protein crosslinks on structural collagen/elastin represent the GlycoSENS form of extracellular proteostatic failure; functional downstream consequences include arterial stiffening, impaired cardiac diastolic function, skin elasticity loss)

**Secondary hallmark:** [[altered-intercellular-communication]] (ECM stiffening alters integrin-mediated mechanosensing — the mapping used on [[advanced-glycation-end-products]] and [[glucosepane]] process pages)

**Translation-gap note:** All attempts to clinically deploy AGE-crosslink-breaking have failed or are preclinical. Alagebrium (ALT-711) failed Phase 3 BENEFICIAL trial (null on primary endpoint). Revel Pharmaceuticals glucosepane-specific enzyme candidates are preclinical with a reported reproducibility setback. `translation-gap: preclinical-only` for all current members.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "age-crosslink-cleavage")
  OR contains(mechanisms, "glucosepane-specific-cleavage")
```

---

### age-adduct-deglycation

**Added:** 2026-07-14 — first compound page: [[molecules/compounds/cmlase]]

**Definition:** Direct enzymatic removal of an established, chemically stable, **monovalent** advanced glycation end-product (AGE) adduct from a protein residue, regenerating the native amino acid. The canonical first example is CMLase oxidation of [[carboxymethyl-lysine]] (CML) back to lysine. This is damage repair rather than upstream suppression of glycation flux.

**Canonical value in use:** `age-adduct-deglycation`

**Class boundary:** This class is deliberately separate from `age-crosslink-cleavage`. CML modifies one lysine and does not bridge two residues or protein chains; removing CML therefore does not demonstrate cleavage of [[glucosepane]], [[pentosidine]], or another extracellular-matrix crosslink. It is also distinct from `antioxidant` / carbonyl trapping, which prevents new AGE formation without repairing an existing adduct.

**Hallmarks primarily targeted:** [[chronic-inflammation]] and [[altered-intercellular-communication]] through removal of AGE ligands that can engage [[rage|RAGE]]; [[loss-of-proteostasis]] as the broader protein-damage-repair mapping. Functional reversal of those downstream hallmarks must be demonstrated rather than inferred from chemical target engagement alone.

**Translation-gap note:** `preclinical-only`. The founding CMLase paper demonstrated biochemical and ex-vivo human-tissue target engagement, not delivery into a living organ, functional rescue, safety, or in-vivo efficacy.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "age-adduct-deglycation")
```

---

### mps-stimulation / anabolic-protein-support

**Added:** 2026-05-20 — first intervention page: [[interventions/lifestyle/protein-intake]]

**Definition:** Dietary strategies that stimulate skeletal muscle protein synthesis (MPS) by providing sufficient leucine (the rate-limiting branched-chain amino acid for mTORC1/S6K1/4E-BP1 pathway activation) and total essential amino acids (EAAs) to overcome the anabolic threshold and drive net positive muscle protein balance. The mechanism is qualitatively opposite to the `mTOR inhibitor` class: rather than suppressing mTOR to promote autophagy and longevity pathways, this class *leverages* mTOR's anabolic function in the context of age-related anabolic resistance (a decline in MPS sensitivity per unit protein dose in aged muscle). Aging relevance: skeletal muscle mass loss ([[sarcopenia]]) is the key musculoskeletal hallmark of aging; adequate protein intake is the foundational nutritional intervention for counteracting anabolic resistance, preserving lean mass, and supporting satellite cell function.

**Mechanistic note on the mTOR tension:** protein intake activates mTORC1 (pro-anabolic, anti-autophagic), which is the target of longevity-extending interventions such as rapamycin. This creates a genuine tradeoff: higher protein intake is anabolically beneficial for lean-mass preservation but may transiently suppress autophagy and elevate IGF-1. See [[interventions/lifestyle/protein-intake]] for explicit tradeoff framing.

**Canonical values in use:** `mps-stimulation`, `anabolic-protein-support`, `leucine-sensing`

**Note on class boundaries:** `mps-stimulation` is appropriate for dietary-protein-quantity or protein-distribution interventions. It is NOT appropriate for anabolic steroids, GH/IGF-1 axis modulators, or SARMs — those are pharmacological interventions with distinct safety profiles. It is distinct from `satellite-cell-activation` (which applies to creatine's role in supporting satellite cell proliferation) but the two may co-occur on pages where the evidence covers both MPS and satellite cell dynamics.

**Hallmarks primarily targeted:** [[stem-cell-exhaustion]] (satellite cell support), [[loss-of-proteostasis]] (muscle proteostasis — counteracting age-related shift to net muscle protein breakdown)

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "mps-stimulation")
  OR contains(mechanisms, "anabolic-protein-support")
  OR contains(mechanisms, "leucine-sensing")
```

---

### tumor-selective-colonization / pamp-mediated-immune-activation

**Added:** 2026-05-21 — first intervention page: [[interventions/pharmacological/bacterial-cancer-therapy]]

**Definition:** Administration of viable bacterial cells (engineered or naturally-occurring) that selectively colonize the hypoxic, immunosuppressed tumor microenvironment and exert antitumor effects via two complementary axes:

- **`tumor-selective-colonization`** (primary enabling mechanism): facultative anaerobic bacteria preferentially proliferate in the low-O₂, aberrant-vasculature, and necrotic-metabolite-gradient niche of solid tumors. Healthy tissues have intact vasculature and rapid immune clearance, so bacterial burden rapidly falls to zero outside the tumor compartment within ~24 hours of IV administration. This tissue-selective pharmacokinetics is the enabling feature of the modality — it converts a pathogen/commensal into a tumor-targeted therapeutic agent without requiring antibody or nanoparticle conjugation.
- **`pamp-mediated-immune-activation`** (primary effector mechanism): once colonized within the tumor, bacteria release PAMPs (pathogen-associated molecular patterns — LPS, peptidoglycan, flagellin, unmethylated CpG DNA) that engage innate PRRs (TLR4, TLR5, TLR9, NLRs) on tumor-resident and recruited immune cells, driving neutrophil infiltration (NET formation, phagocytosis), NK cell activation, macrophage M1 polarization, and adaptive T-cell recruitment (IFN-γ-producing CD8+ cytotoxic T cells, Th1 CD4+ help, B-cell antibody responses). The net cytokine shift is toward IFN-γ + TNF-α + IL-12, creating a hot-tumor microenvironment from a cold one.
- **`direct-cytotoxicity`** (secondary effector mechanism — present in some strains): secretion of cytolytic proteins (hemolysins, leukotoxins, exotoxins) directly lysing tumor cells. *Ewingella americana* is documented to produce cytolysin-class proteins. Used as a secondary mechanism value on pages where this has been directly demonstrated; do not assume for every bacterial cancer therapy member.

**Scope note:** This class covers bacteria delivered therapeutically to target tumors. It does NOT cover:
- Microbiome modulation to potentiate checkpoint inhibitor response (that is `gut-microbiome-modulation` — different modality)
- Purified bacterial toxins used as chemotherapy payloads (e.g., immunotoxins — those use `targeted-cytotoxin`)
- Phage therapy (viral not bacterial)

**Canonical values in use:** `tumor-selective-colonization`, `pamp-mediated-immune-activation`, `direct-cytotoxicity`

**Note on value usage:** Always list `tumor-selective-colonization` and `pamp-mediated-immune-activation` together — they are mechanistically inseparable. List `direct-cytotoxicity` only when cytolysin/toxin production is directly documented for the specific bacterial strain.

**Hallmarks primarily targeted:** [[dysbiosis]] (weak fit — the most relevant aging hallmark given bacterial biology context; cancer is the phenotype); [[chronic-inflammation]] (the PAMP-driven immune activation recruits and reshapes the inflammatory microenvironment)

**Note on aging-hallmark fit:** The López-Otín hallmarks framework is not the primary organizing lens for bacterial cancer therapy — cancer is a phenotype (see [[phenotypes/cancer]]) that intersects with multiple hallmarks. `[[dysbiosis]]` is listed because the bacteria-host interface is central to the mechanism, and the comparative-biology rationale (gut isolates from non-mammalian vertebrates as a pharmacopoeia) aligns with the dysbiosis/microbiome research cluster. `[[chronic-inflammation]]` is listed for the PAMP-immune-activation arm. Neither is a perfect fit; this reflects the genuine gap between cancer-specific modalities and the aging-hallmark organizational frame.

**Translation-gap note:** All Phase 1/2 human trials use engineered bacterial platforms (attenuated *Salmonella*, attenuated *Listeria*, *E. coli* Nissle); no naturally-occurring unmodified isolate has reached human trials as of 2026-05-21. The naturally-occurring subclass (exemplified by *Ewingella americana*) is preclinical-only.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "tumor-selective-colonization")
  OR contains(mechanisms, "pamp-mediated-immune-activation")
```

---

### 15-pgdh-inhibitor

**Added:** 2026-05-23 — first compound page: [[molecules/compounds/sw033291]]

**Definition:** Small molecules that reversibly inhibit 15-hydroxyprostaglandin dehydrogenase (15-PGDH / HPGD), the enzyme responsible for the first step in prostaglandin catabolism — oxidation of the C-15 hydroxyl of prostaglandin E2 (PGE2) and other prostaglandins to their biologically inert 15-keto forms. 15-PGDH inhibition raises endogenous tissue PGE2 to physiologic (not supraphysiologic) levels, thereby restoring EP2/EP4 receptor-mediated regenerative signalling that declines with age. The class is mechanistically distinct from:
- **COX inhibitors (NSAIDs):** which suppress PGE2 *biosynthesis* at cyclooxygenase (COX-1/2); 15-PGDH inhibitors preserve COX activity and instead block PGE2 *degradation*, resulting in opposite PGE2 directionality.
- **EP2/EP4 agonists:** which bypass the endogenous ligand; 15-PGDH inhibitors raise endogenous PGE2 without delivering a synthetic agonist.
- **Steroid anti-inflammatories:** which broadly suppress eicosanoid synthesis at the phospholipase A2 step.

**The "gerozyme" concept:** 15-PGDH has been designated a *gerozyme* (Blau/Bhutani terminology, 2021–2026) — an enzyme that accumulates with aging, is not merely a side-effect of aging but a mechanistic driver of regenerative decline, and whose inhibition restores youthful regenerative signalling. This gerozyme framing positions 15-PGDH inhibitors as a class targeting the *upstream suppressor* of tissue regeneration rather than supplementing growth factors downstream.

**Canonical mechanism:** Competitive, reversible inhibition of the 15-PGDH catalytic site (an NAD+-dependent short-chain dehydrogenase/reductase; SDR family). The founding compound SW033291 has sub-nanomolar potency — **Ki = 0.1 nM** per Zhang 2015 (cross-referenced in verified [[studies/palla-2021-15pgdh-muscle-rejuvenation]] and [[studies/singla-2025-15pgdh-cartilage-regeneration]]) — with selectivity across the SDR enzyme family. Downstream: tissue PGE2 elevates ~2-fold to physiologic levels → EP2/EP4 signalling → CREB phosphorylation / Wnt/β-catenin activation → stem/progenitor cell activation (muscle satellite cells, bone marrow HSCs, motor neurons at the NMJ via EP4-cAMP-CREB, articular chondrocytes).

**Canonical values in use:** `15-pgdh-inhibitor`

**Note on class scope:** The class currently has one member (SW033291) — a research tool compound used to validate the target in preclinical aging models. The clinical-stage candidate is a separate, undisclosed derivative by Epirium Bio; its compound page should be seeded separately when the structure is disclosed. Do not conflate SW033291 with the Epirium clinical compound.

**Hallmarks primarily targeted:** [[stem-cell-exhaustion]] (primary — 15-PGDH inhibition restores stem/progenitor cell activation across muscle, bone marrow, NMJ, and cartilage), [[altered-intercellular-communication]] (secondary — PGE2 is a paracrine signalling lipid whose age-associated decline impairs tissue-regenerative intercellular communication)

**Translation-gap note:** SW033291 is a preclinical tool compound; the class-level translation gap is `phase-3-rct-needed`. Safety of chronic/repeated 15-PGDH inhibition in humans is uncharacterised — the cancer-aging tension (15-PGDH is a tumor suppressor; PGE2 promotes some tumor types) is the primary safety concern for the class. See [[frameworks/cancer-aging-tradeoffs]].

**Constituent compound pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "15-pgdh-inhibitor")
```

---

### dietary-phosphate-reduction / klotho-fgf23-axis-modulation

**Added:** 2026-05-23 — first intervention page: [[interventions/dietary/phosphate-additive-reduction]]

**Definition:** Dietary avoidance of inorganic phosphate food additives — particularly those present in processed cheese, cola beverages, processed meats, and frozen meals — to reduce the absorbed phosphate burden reaching the bloodstream and specifically to modulate the Klotho/FGF23 hormonal axis. The mechanism operates through a bioavailability differential: inorganic phosphate salts (sodium phosphate, sodium tripolyphosphate, sodium acid pyrophosphate, dipotassium phosphate, phosphoric acid) are absorbed rapidly and more completely because they exist as free anions requiring no enzymatic hydrolysis prior to intestinal uptake; naturally occurring phosphate in whole foods is bound within organic matrices (phytate, phospholipids, phosphoproteins) and is absorbed at lower efficiency after enzymatic hydrolysis. The commonly cited ranges (~80–100% for inorganic vs ~40–60% for organic-matrix-bound phosphate) are review-level synthesis estimates, not pinned by a single controlled comparison study. This bioavailability gap means that equal milligrams of phosphorus on a food label correspond to dramatically different physiologic phosphate exposures depending on the source. Sustained high inorganic phosphate exposure drives chronically elevated FGF23 and suppressed Klotho, which is the proximate hormonal signature associated with vascular calcification and cardiovascular risk.

This class is mechanistically distinct from:
- **Phosphate-binder drugs** (calcium carbonate, sevelamer, lanthanum carbonate) — which bind dietary phosphate in the gut lumen for CKD patients to prevent absorption; the dietary-additive-reduction class acts at the upstream food-choice level rather than via a pharmacological gut-lumen intervention.
- **General "low-phosphorus diet"** (total dietary phosphorus restriction) — which restricts all phosphate-containing foods including those with low-bioavailability organic phosphate; additive-reduction focuses specifically on high-bioavailability inorganic sources, leaving organic-matrix whole foods intact.

**Canonical values in use:** `phosphate-load-reduction`, `fgf23-modulation`, `klotho-axis-preservation`

**Note on mechanism-value interpretation:** These three values describe sequential steps in the causal chain rather than independent pharmacological mechanisms — reducing the phosphate load leads to FGF23 normalisation which leads to Klotho-axis preservation. All three values should be listed on intervention pages in this class to ensure Dataview coverage across queries targeting different link points in the causal chain. Downstream `anti-inflammatory` effects are documented on the intervention page but should NOT be listed as primary mechanism values here because they are mediated via the FGF23/Klotho/vascular-calcification pathway, not via direct NF-κB or cytokine suppression.

**Hallmarks primarily targeted:** [[chronic-inflammation]] (primary, via downstream FGF23 and vascular wall effects), [[deregulated-nutrient-sensing]] (secondary, via FGF23-mediated signalling that interacts with the phosphatonin/nutrient-sensing network)

**Translation-gap note:** No multi-year RCT in non-CKD adults has been completed with cardiovascular hard endpoints. Evidence is cohort-strong (serum phosphate in upper-normal range associates with ~1.5× CV risk) and FGF23 mechanistic arm is supported by controlled dietary studies. The class is `phase-3-rct-needed` for the non-CKD primary-prevention aging indication. CKD populations have substantially stronger trial evidence (phosphate binders reduce mortality; dietary restriction reduces FGF23).

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "phosphate-load-reduction")
  OR contains(mechanisms, "fgf23-modulation")
  OR contains(mechanisms, "klotho-axis-preservation")
```

---

### venotonic / phlebotonic

**Added:** 2026-05-27 — first compound page: [[molecules/compounds/escin]]

**Definition:** Compounds that increase venous tone (venoconstriction) and/or reduce capillary permeability and trans-capillary oedema filtration in the venous tree. The primary pharmacodynamic targets are the venous smooth muscle (increased contractility, reducing vein diameter and raising ambulatory venous return) and the venous capillary wall (reduced pore size/filtration coefficient, limiting oedema). The class term "phlebotonic" is used interchangeably in European pharmacopoeia literature; "venoactive" is the broader regulatory/EMA category term that encompasses both venotonics and anti-oedematous agents. The mechanism cluster distinguishes this class from:

- **`anti-inflammatory`** — although venotonics reduce leukocyte adhesion and SASP-like inflammatory signals, their primary pharmacodynamic endpoint is haemodynamic (venous tone/oedema), not cytokine suppression.
- **`nitric-oxide-signaling`** — venotonics increase vascular *tone* (vasoconstriction/venotone), whereas NO-mediated vasodilation is the opposite direction.
- **`extracellular-matrix-remodeling`** — venotonics reduce ECM enzyme (hyaluronidase) degradation as a secondary mechanism, preserving GAG/proteoglycan barriers, but the primary endpoint is haemodynamic, not structural ECM synthesis.

**Escin / aescin specific sub-mechanism:**
- **`hyaluronidase-inhibition`** — escin inhibits hyaluronidase, protecting hyaluronan-rich venous-wall GAG matrices from enzymatic degradation; listed alongside `venotonic` on the escin compound page.
- **`venous-smooth-muscle-sensitization`** — proposed potentiation of prostaglandin F2α (PGF2α)-mediated and Ca²⁺-dependent contraction of venous smooth muscle, increasing venotone without increasing systemic arterial blood pressure in usual doses.

**Canonical values in use:** `venotonic`, `hyaluronidase-inhibition`, `venous-smooth-muscle-sensitization`

**Note on class scope:** The venotonic class is currently specific to compounds acting *primarily* on the venous compartment with haemodynamic evidence. Systemic anti-inflammatory compounds that incidentally reduce oedema as a downstream effect should not be classified here; use `anti-inflammatory` as their primary class. Rutosides, calcium dobesilate, diosmin/MPFF, and pycnogenol are candidate class members when their compound pages are seeded.

**Hallmarks primarily targeted:** No direct mapping to the 12 López-Otín hallmarks (CVI is a vascular phenotype downstream of aging-associated connective-tissue and vascular remodeling). The closest relevant hallmarks are [[altered-intercellular-communication]] (ECM remodeling, MMP/TIMP balance in venous wall) and [[chronic-inflammation]] (venous leukocyte–endothelial cascade). Assign hallmarks to individual compound pages only when direct hallmark-level evidence exists; escin's hallmarks field is `[]` pending evidence of cellular senescence or direct hallmark engagement.

**Translation-gap note:** Cochrane evidence confirms oedema reduction and symptom relief (Pittler 2012) but the class lacks disease-modification evidence (no RCT demonstrating CEAP-progression prevention). Translation gap is `phase-3-rct-needed` for disease-modifying endpoints. Symptom-level evidence is adequate to support supplement-grade use for CVI.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "venotonic")
  OR contains(mechanisms, "hyaluronidase-inhibition")
  OR contains(mechanisms, "venous-smooth-muscle-sensitization")
```

---

### incretin-receptor-agonist

**Added:** 2026-05-31 — first compound page: [[molecules/compounds/tirzepatide]]

**Definition:** Synthetic peptides that activate one or more incretin hormone receptors — GLP-1R (glucagon-like peptide-1 receptor), GIPR (glucose-dependent insulinotropic polypeptide receptor), and/or GCGR (glucagon receptor) — resulting in coordinated cardiometabolic and weight effects. Three sub-classes by receptor profile:

- **`glp1-receptor-agonist`** (pure GLP-1R agonists): GLP-1R activation → pancreatic glucose-dependent insulin secretion, hypothalamic appetite suppression, gastric-emptying delay, and direct cardioprotective signaling. The canonical class members are semaglutide, liraglutide, exenatide, dulaglutide. Heart rate elevation is modest (~2–4 bpm at therapeutic doses).
- **`dual-incretin-agonist`** (GLP-1R + GIPR co-agonists): Simultaneous GLP-1R + GIPR activation produces additive or synergistic weight reduction beyond pure GLP-1R agonism, likely via complementary central and peripheral mechanisms (GIPR expressed on hypothalamic neurons and adipocytes). The canonical class member is tirzepatide. GIP arm contribution in non-obese/non-diabetic populations remains poorly characterised — see `#gap/no-mechanism` notes on compound pages.
- **`triple-incretin-agonist`** (GLP-1R + GIPR + GCGR co-agonists): Addition of glucagon receptor agonism increases energy expenditure and resting metabolic rate, producing the largest weight losses observed in any pharmacological class to date but also the greatest heart rate elevation (~3–7 bpm dose-dependent). The canonical class member is retatrutide (Phase 3 as of 2026).

**Canonical values in use:** `glp1-receptor-agonist`, `dual-incretin-agonist`, `triple-incretin-agonist`, `gipr-agonism`, `gcgr-agonism`, `weight-loss`, `central-appetite-suppression`, `gastric-emptying-delay`, `anti-inflammatory`, `glucagon-suppression`

**Note on class scope:** This class is restricted to peptide-based incretin receptor agonists. Small-molecule GLP-1R agonists (orforglipron) are in development but none are FDA-approved as of 2026-05-31. Oral semaglutide (Rybelsus) is a peptide absorbed via SNAC technology — it belongs to the `glp1-receptor-agonist` sub-class. DPP-4 inhibitors (sitagliptin, saxagliptin) are NOT in this class — they raise endogenous GLP-1/GIP by preventing degradation rather than directly activating the receptor; their mechanism values should use `dpp4-inhibition`.

**Aging context:** The incretin-receptor-agonist class has the strongest human cardiovascular-outcome trial evidence of any pharmacological aging-adjacent intervention class as of 2026 (multiple large Phase 3 RCTs with MACE endpoints). The primary aging-mechanism question — whether the cardiometabolic benefits extend to non-diabetic, non-obese older adults and translate to aging-primary endpoints (biological age, frailty, all-cause mortality) — remains unanswered. The largest limitation for aging use is lean-mass loss (~25% of weight lost is lean mass, comparable to ~10 years of sarcopenic aging), which is not mitigated by the drug alone.

**Hallmarks primarily targeted:** [[chronic-inflammation]], [[deregulated-nutrient-sensing]]

**Related class page:** [[interventions/pharmacological/glp1-agonists]] — the class-level navigational page covering all members.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "glp1-receptor-agonist")
  OR contains(mechanisms, "dual-incretin-agonist")
  OR contains(mechanisms, "triple-incretin-agonist")
  OR contains(mechanisms, "gipr-agonism")
```

---

### selective-estrogen-receptor-modulation

**Added:** 2026-06-03 — first intervention page: [[interventions/pharmacological/selective-estrogen-receptor-modulators]]

**Definition:** Ligands for estrogen receptor α (ESR1) and/or estrogen receptor β (ESR2) that function as tissue-selective mixed agonists/antagonists — agonist in some tissues, antagonist in others — depending on local coactivator/corepressor availability, receptor subtype expression, and compound-specific conformational effects on the receptor's AF-2 helix. The class is mechanistically distinct from:

- **`estrogen-receptor-agonist`** (pure agonists: 17β-estradiol, estrone, estriol — covered on [[interventions/pharmacological/topical-estrogens]] and systemic HRT pages)
- **`aromatase-inhibitor`** (letrozole, anastrozole, exemestane — block estradiol synthesis upstream of the receptor)
- **`estrogen-receptor-degrader`** (SERDs: fulvestrant, elacestrant — degrade the receptor; mechanistically distinct from SERMs that stabilize a distinct conformational state)

The class concept is explicitly pharmaceutical: capture estrogen's tissue-beneficial effects (bone anabolism, lipid-lowering, breast protection) while simultaneously antagonizing estrogen's proliferative effects in tissues (breast, endometrium) where ER activation is harmful. This decoupling is only partial — no SERM achieves full benefit-without-harm across all tissues simultaneously.

**Canonical values in use:** `selective-estrogen-receptor-modulation`, `estrogen-receptor-modulation`

**Note on compound-level vs class-level values:** Individual SERM compound pages may additionally carry `esr1-antagonism` or `esr2-modulation` as mechanism values reflecting the dominant activity in a specific tissue context (e.g., tamoxifen's breast antagonist profile). The class value `selective-estrogen-receptor-modulation` should appear on the class-level intervention page and optionally on individual compound pages to ensure Dataview coverage here.

**Hallmarks primarily targeted:** [[altered-intercellular-communication]] (estrogen is a systemic endocrine intercellular signal whose dysregulation at menopause accelerates multiple age-related processes; SERMs modify this signaling in a tissue-dependent manner), [[chronic-inflammation]] (raloxifene's bone-protective mechanism involves suppression of osteoclast-activating cytokines; bone-loss-driven inflammation is relevant to aging), [[stem-cell-exhaustion]] (bone-protective SERMs preserve trabecular bone mass and the bone marrow niche indirectly)

**Aging-relevance framing:** SERMs represent the pharmacological attempt to decouple estrogen's protective effects (bone density, cardiovascular lipids) from its risks (breast cancer, endometrial cancer, venous thromboembolism). This decoupling is tissue-by-tissue and imperfect — every approved SERM carries its own tissue-specific trade-off profile. None is established as a geroprotector or longevity drug; aging relevance is indirect via bone/fracture outcomes and breast cancer prevention in postmenopausal women.

**Translation-gap note:** Strong human evidence for raloxifene (fracture prevention, breast cancer prevention), tamoxifen (breast cancer treatment and prevention), and ospemifene (genitourinary syndrome). No SERM has an explicit aging-longevity or healthspan indication. The class's main aging contribution is fracture prevention (major morbidity/mortality driver in aged women) and cancer chemoprevention.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "selective-estrogen-receptor-modulation")
  OR contains(mechanisms, "estrogen-receptor-modulation")
```

---

### sclerostin-inhibition / wnt-pathway-activation

**Added:** 2026-06-02 — first compound page: [[molecules/compounds/romosozumab]]

**Definition:** Pharmacological neutralization of sclerostin (SOST), the osteocyte-secreted glycoprotein that inhibits Wnt/β-catenin signaling by binding to the LRP5/LRP6 co-receptor first propeller domain. Blocking SOST removes the Wnt inhibitory brake, allowing Wnt ligands to engage LRP5/6–Frizzled receptor complexes, stabilize β-catenin, and drive bone-forming gene programs in osteoblasts. The net pharmacodynamic effect is dual: increased bone formation (osteoanabolic) AND decreased bone resorption (reduced RANKL/OPG ratio downstream of Wnt). This combination is mechanistically unique among approved osteoporosis drugs — bisphosphonates and denosumab are purely anti-resorptive; teriparatide is predominantly anabolic with some resorption coupling; romosozumab achieves both effects simultaneously.

**Sub-class: `wnt-pathway-activation`** — the downstream consequence of sclerostin inhibition; used as a secondary mechanism value to capture the Wnt/β-catenin pathway modulation in Dataview queries. Not synonymous with sclerostin inhibition per se: other Wnt-activating strategies (DKK1 inhibition, GSK-3β inhibition via lithium/small molecules, LRP6 agonism) are pharmacologically distinct entry points into the same pathway. Use `wnt-pathway-activation` alongside `sclerostin-inhibition` for romosozumab-class agents; use only `wnt-pathway-activation` alone for non-SOST-targeting Wnt activators when seeded.

**Canonical values in use:** `sclerostin-inhibition`, `wnt-pathway-activation`, `osteoanabolic`

**Note on class scope:** Currently a single-member class (romosozumab). `osteoanabolic` is a downstream pharmacodynamic descriptor (bone-forming effect); list alongside the mechanistic values. The class scope is extendable to future anti-SOST antibodies if developed. DKK1 inhibitors (blosozumab-adjacent pathway entry) would use `wnt-pathway-activation` but NOT `sclerostin-inhibition`.

**Hallmarks primarily targeted:** [[stem-cell-exhaustion]] (SOST-driven Wnt suppression reduces osteoblast differentiation from mesenchymal progenitors — an osteoblast-lineage stem cell pool depletion mechanism); [[altered-intercellular-communication]] (sclerostin is a secreted osteocyte hormone whose age-related elevation constitutes an intercellular communication shift that suppresses anabolic bone signaling)

**Secondary aging-context note:** The cardiovascular safety signal (ARCH trial) implicates SOST's role in vascular smooth muscle calcification biology; this potential off-target effect on the vascular niche may represent an unintended [[altered-intercellular-communication]] disruption outside the bone compartment.

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "sclerostin-inhibition")
  OR contains(mechanisms, "wnt-pathway-activation")
  OR contains(mechanisms, "osteoanabolic")
```

---

### gamma-carboxylation-cofactor

**Added:** 2026-06-02 — first compound page: [[molecules/compounds/vitamin-k]]

**Definition:** Provides the reduced hydroquinone form of vitamin K (vitamin KH2) as an obligatory cofactor for gamma-glutamyl carboxylase (GGCX), the enzyme that converts specific glutamate residues on vitamin K-dependent proteins (VKDPs) to gamma-carboxyglutamate (Gla). Gla residues gain a second carboxyl group, enabling calcium coordination and protein activation. After cofactor oxidation, vitamin K epoxide is regenerated to the active hydroquinone by vitamin K epoxide reductase (VKOR), completing the vitamin K cycle. Without adequate vitamin K in this cycle, VKDPs — including coagulation factors II/VII/IX/X (hepatic) and extrahepatic anti-calcification factors (MGP, osteocalcin, Gas6) — remain uncarboxylated and functionally inactive. This mechanism class is entirely distinct from electron-transport-chain antioxidants or AMPK/mTOR modulation; it acts as a substrate/cofactor in a specific post-translational modification pathway.

**Key distinction from `antioxidant`:** Vitamin K1 and K2 are not acting as ROS scavengers when classified under this mechanism. The quinone ring chemistry enables gamma-carboxylation cofactor activity; incidental antioxidant properties (hydroquinone radical quenching) are minor and not the aging-relevant mechanism.

**Canonical values in use:** `gamma-carboxylation-cofactor`

**Note on sub-form specificity:** Vitamin K1 (phylloquinone) primarily serves hepatic VKDPs (coagulation). Vitamin K2 (menaquinones, especially MK-7) has superior bioavailability in extrahepatic tissues and preferentially activates MGP in the vascular wall. Both operate via the same GGCX cofactor mechanism; the sub-form distinction is pharmacokinetic, not mechanistic. The compound page [[molecules/compounds/vitamin-k]] covers both as a family page.

**Hallmarks primarily targeted:** [[altered-intercellular-communication]] (via MGP activation → vascular calcification suppression; calcification drives arterial stiffening that degrades the systemic intercellular communication milieu); cross-links to [[vascular-calcification]] process page

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "gamma-carboxylation-cofactor")
```

---

### dermal-biostimulation

**Added:** 2026-06-09 — first intervention page: [[interventions/pharmacological/injectable-skin-boosters]]

**Definition:** Pharmacological stimulation of dermal collagen and extracellular matrix neosynthesis by injectable biodegradable polymers or biological scaffolds, operating through a sustained mechanical + inflammatory-resolution signalling cascade rather than direct receptor pharmacology. The canonical mechanism is: intradermal polymer depot (PLLA, PDLLA, PCL, PDO, CaHA microspheres) → foreign body / inflammatory response → fibroblast recruitment and activation → TGF-β/SMAD signalling → type I/III collagen synthesis and deposition → gradual scaffold degradation leaves collagen-enriched replacement matrix. Distinct from `extracellular-matrix-remodeling` (which covers receptor-level ECM modulation including HA/GHK-Cu) and from `controlled-wounding-collagen-stimulation` (which is needle/energy-mediated acute wound response). The biostimulation mechanism operates over weeks-to-months via a sustained polymer-driven signalling cascade, not via transient wound healing.

**Aging relevance:** Injectable biostimulators directly address the hallmark of loss-of-proteostasis in the dermis — the progressive collagen fragmentation and reduced neocollagenesis of aged skin. Poly-L-lactic acid (Sculptra) was FDA-approved in 2009 for facial lipoatrophy, establishing the first clinical-grade validation of the class. Age-associated dermal atrophy is the primary aging indication. No systemic hallmark target is established.

**Sub-classes:**
- **Polylactic acid / polyester family** — PLLA (Sculptra/Galderma; FDA 2009 lipoatrophy), PDLLA, PCL (Ellanse), PDO threads — all operate via TGF-β/SMAD fibroblast activation after inflammatory scaffold resorption
- **CaHA (calcium hydroxylapatite)** — Radiesse; dual mechanism: immediate volume fill + long-term biostimulation via CaHA microsphere degradation releasing Ca²⁺ → fibroblast collagen induction; distinct from polyesters in mineral-scaffold chemistry

**Canonical values in use:** `dermal-biostimulation`

**Hallmarks primarily targeted:** [[loss-of-proteostasis]] (dermal collagen neosynthesis in aged ECM)

**Secondary association:** [[altered-intercellular-communication]] (TGF-β/SMAD paracrine axis from macrophage/fibroblast cross-talk during biostimulation)

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "dermal-biostimulation")
```

---

### paracrine-cargo-delivery

**Added:** 2026-06-09 — first intervention page: [[interventions/pharmacological/exosome-skin-therapy]]

**Definition:** Delivery of biologically active cargo (miRNA, mRNA, growth factors, signalling proteins, lipids) to recipient cells via extracellular vesicles (exosomes, microvesicles) or cell-conditioned media, producing downstream ECM-remodelling, anti-inflammatory, or anti-senescence effects without the delivered agent being a single defined small molecule. The canonical aging-relevant mechanism is MSC/stem-cell-derived EV cargo (e.g., miR-29b-3p → MMP-2 suppression; miR-125b-5p → TGF-β1/SMAD modulation) acting on aged/photodamaged dermal fibroblasts to restore collagen I/III and elastin and downregulate p53/p21/p16. Distinct from `extracellular-matrix-remodeling` (the downstream ECM output, which this class drives indirectly) and from direct receptor agonism: the defining feature is heterogeneous biological cargo transferred between cells. **Evidence-quality caveat:** preparations marketed as "exosomes" frequently fail MISEV2018/2023 characterization standards, and much "exosome" clinical literature actually tests conditioned media; the class label does not certify rigorous EV identity.

**Canonical values in use:** `paracrine-cargo-delivery`

**Hallmarks primarily targeted:** [[altered-intercellular-communication]] (EV/paracrine signalling is the archetypal intercellular-communication channel), [[cellular-senescence]] (anti-senescence cargo), [[loss-of-proteostasis]] (downstream dermal ECM restoration)

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "paracrine-cargo-delivery")
```

---

### blood-pressure-modulation

**Added:** 2026-06-09 — first intervention page: [[interventions/dietary/sodium-restriction]]

**Definition:** Interventions that modulate blood pressure through dietary electrolyte manipulation — primarily sodium restriction, potassium repletion, and/or magnesium repletion — operating through the extracellular fluid volume, renal tubular reabsorption, and vascular tone axes. The primary proximal mechanism of sodium restriction is reduction of extracellular fluid volume (Na⁺ drives osmotic water retention; reduced Na⁺ → reduced intravascular volume → reduced cardiac output and preload → lower BP). Secondary mechanisms include: reduced renal tubular Na⁺/K⁺ antiporter activity, reduced wall-stress-driven arterial stiffening, and reduced left ventricular hypertrophic remodeling. Potassium counters sodium by increasing renal Na⁺ excretion (through Na⁺/K⁺-ATPase and ROMK channel activation), inducing vasodilation via hyperpolarization of vascular smooth muscle, and reducing arterial stiffness. The RAAS (renin-angiotensin-aldosterone system) is the counter-regulatory axis — activated modestly at low sodium intake; the sustained BP-lowering benefit of moderate restriction indicates that RAAS compensation is incomplete at physiological intakes. Mechanistically distinct from pharmacological antihypertensives (ACE inhibitors, ARBs, diuretics), which block RAAS nodes directly. Distinct from `nitric-oxide-signaling` (which operates via eNOS/endothelial vasodilation) and from `anti-inflammatory` (which is NF-κB/cytokine-centric). Overlaps with DASH dietary pattern and Mediterranean diet via potassium and magnesium co-delivery.

**Canonical values in use:** `dietary-sodium-restriction`, `potassium-repletion`, `blood-pressure-modulation`

**Note on class scope:** This class covers diet-level interventions whose primary aging-relevant pharmacodynamic endpoint is blood-pressure reduction via electrolyte balance. Salt substitute interventions (NaCl/KCl mixtures) deploy two mechanisms simultaneously (sodium reduction + potassium repletion) and should list both `dietary-sodium-restriction` and `potassium-repletion`. Pharmacological agents that modulate the same axis (ACE inhibitors, thiazide diuretics) are already covered in the medical armamentarium and do NOT use this dietary-mechanism class — they would use their own pharmacological mechanism values when seeded.

**Hallmarks primarily targeted:** [[chronic-inflammation]] (via downstream arterial stiffness reduction, reduced vascular oxidative stress, and lower cardiac hypertrophy), [[altered-intercellular-communication]] (vascular smooth muscle → endothelium paracrine signaling is disrupted by sustained hypertension)

**Translation-gap note:** The cardiovascular-aging connection is epidemiologically and RCT-validated (see SSaSS, DASH-Sodium, Kong 2025 umbrella review). The direct hallmarks-of-aging mechanism framing is an extrapolation: hypertension drives the [[arterial-stiffening]] and [[cardiovascular-aging]] phenotypes which in turn accelerate biological aging, but `blood-pressure-modulation` does not map to a single López-Otín hallmark directly. The closest mechanistic anchors are `[[chronic-inflammation]]` (hypertension-driven vascular inflammation) and `[[altered-intercellular-communication]]` (vascular paracrine disruption under sustained pressure load).

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "dietary-sodium-restriction")
  OR contains(mechanisms, "potassium-repletion")
  OR contains(mechanisms, "blood-pressure-modulation")
```

---

### selective-photothermolysis / vascular-ablation

**Added:** 2026-06-27 — first intervention page: [[interventions/procedural/vascular-laser]]

**Definition:** Physical destruction of ectatic or neoplastic dermal blood vessels by delivering **wavelength-selective pulsed light energy** that is preferentially absorbed by the **oxyhemoglobin** chromophore inside the vessel lumen, converting light to heat within the blood column and thermally coagulating the vessel wall while leaving the surrounding dermis thermally spared. The mechanistic framework is Anderson & Parrish's **selective photothermolysis** (Science 1983): choose a wavelength at or near an oxyhemoglobin absorption peak (principal peaks at ~418, 542, and 577 nm; secondary absorption extending to ~600 nm and to 1064 nm in deeper vessels), deliver it in a **pulse duration shorter than the thermal relaxation time (TRT)** of the target vessel (TRT scales with vessel diameter squared — ~1 ms for a 100 µm vessel, ~10 ms for a 300 µm vessel), so that heat is generated within and retained inside the target rather than diffusing outward to non-target tissue. This is fundamentally different from `controlled-wounding-collagen-stimulation` / `fractional-photothermolysis` (which use non-selective photothermal tissue injury for neocollagenesis): vascular photothermolysis *intentionally targets a specific chromophore and vessel structure*, with collagen stimulation as a possible incidental bystander effect, not the primary mechanism.

**Two canonical mechanism values (always use together):**
- **`selective-photothermolysis`** — the physical chromophore-targeting principle (Anderson & Parrish 1983); applies whenever wavelength is matched to an absorption peak of a target chromophore (oxyhemoglobin for vascular; melanin for pigment lesions). List this value for any vascular laser or light modality using wavelength-selective pulse delivery.
- **`vascular-ablation`** — the structural consequence: thermal destruction of the ectatic vessel wall, triggering intravenous thrombosis and fibrotic obliteration, permanently removing the dilated vessel from the dermis. Distinct from `angiogenesis-inhibition` (which suppresses new vessel formation via VEGF/VEGFR signaling) and from `sclerotherapy` (chemical endothelial injury, not photothermolysis).

**Sub-modality distinction: IPL vs. laser.** Intense pulsed light (IPL) uses broadband 500–1200 nm filtered light, not a single coherent wavelength. It achieves selective photothermolysis of oxyhemoglobin (and melanin simultaneously) by filtering to exclude the shortest UV and infrared bands. IPL's primary vascular indication is poikiloderma of Civatte (simultaneous telangiectasia + dyspigmentation treatment) and diffuse facial erythema; its non-coherent broadband output makes it simultaneously a vascular photothermolysis and a pigment-chromophore-selective device. List `selective-photothermolysis` for IPL vascular applications.

**Scope note — what is NOT in this class:**
- `fractional-photothermolysis` (`controlled-wounding-collagen-stimulation` sub-value): ablative/non-ablative fractional lasers (CO2, Er:YAG, 1550 nm, 1927 nm) use bulk water as the chromophore; they create arrays of non-selective thermal injury for wound-healing neocollagenesis — the target is tissue architecture, not oxyhemoglobin.
- `sclerotherapy` — chemical injection of a sclerosant into the vessel lumen; produces endothelial injury via direct chemical contact, not photothermolysis; a distinct intervention modality (see [[phenotypes/chronic-venous-disease]] for evidence; no separate class page yet).
- Photodynamic therapy (PDT) — uses photosensitizer uptake + activation; the chromophore is exogenous rather than endogenous oxyhemoglobin.

**Canonical values in use:** `selective-photothermolysis`, `vascular-ablation`

**Hallmarks primarily targeted:** [[cellular-senescence]] (ectatic facial vessels are a downstream manifestation of senescent-fibroblast SASP — the vascular phenotype of [[cellular-senescence]] in photoaged dermis); [[chronic-inflammation]] (rosacea-associated telangiectasia arises in the context of innate immune dysregulation — [[chronic-inflammation]] — and laser/IPL ablation of the structural vascular lesion does not modulate the upstream senescent-cell or inflammatory burden). **Critical framing note:** the intervention targets the vascular *structural consequence* of these hallmarks, not the underlying hallmark mechanisms themselves. It is symptomatic/structural treatment, not a geroprotective hallmark-modulating intervention. See [[interventions/procedural/vascular-laser]] § Hallmark mapping for explicit framing.

**Constituent intervention pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "selective-photothermolysis")
  OR contains(mechanisms, "vascular-ablation")
```

---

### alpha-adrenergic-agonism / vasoconstrictor

**Added:** 2026-06-27 — first compound page: [[molecules/compounds/oxymetazoline]]

**Definition:** Agonism of alpha-adrenergic receptors (α1-subtype, α2-subtype, or both) on vascular smooth muscle cells, producing receptor-mediated vasoconstriction via Gq-coupled (α1) or Gi-coupled (α2) signal transduction. In the topical cutaneous context, this reduces blood flow through superficial dermal arterioles and venules, transiently lowering skin redness. The mechanism is hemodynamic — not immunological — and reverses as the agonist is cleared. Distinct from: alpha-adrenergic *antagonists* (antihypertensive doxazosin/terazosin); the `selective-photothermolysis` / `vascular-ablation` class (which permanently destroys ectatic vessels); and anti-inflammatory agents (which address the cathelicidin/KLK-5 upstream cascade of rosacea).

**Sub-class: `alpha-1-agonism`** — preferential α1-adrenergic agonism (Gq / IP3 / DAG → intracellular Ca²⁺ release → smooth muscle contraction). The canonical topical cutaneous agent is oxymetazoline 1% cream (Rhofade; FDA-approved 2017 for rosacea erythema). Also: intranasal oxymetazoline 0.05% (nasal decongestant), phenylephrine (ophthalmic, nasal, systemic vasopressor).

**Sub-class: `alpha-2-agonism`** — preferential α2-adrenergic agonism (Gi → ↓adenylyl cyclase → ↓cAMP → smooth muscle contraction; also presynaptic autoreceptor-mediated norepinephrine suppression). Canonical topical cutaneous agent for rosacea: brimonidine 0.33% gel (compound page pending — #gap/stub). Also: apraclonidine and brimonidine for intraocular pressure (glaucoma); clonidine systemically (antihypertensive).

**Canonical values in use:** `vasoconstrictor`, `alpha-adrenergic-agonism`, `alpha-1-agonism`, `alpha-2-agonism`

**Hallmarks mapping note:** Cutaneous vasoconstriction is a symptomatic mechanism targeting the vascular output of inflammatory rosacea without engaging the upstream cathelicidin/KLK-5 cascade or [[cellular-senescence]] SASP. Map to [[chronic-inflammation]] to reflect the rosacea disease context — the compound does not mechanistically suppress inflammation but is used exclusively for the erythema of an inflammatory condition.

**Hallmarks primarily targeted:** [[chronic-inflammation]] (contextual — addresses the erythema symptom of inflammatory rosacea; not mechanistically anti-inflammatory)

**Constituent compound pages (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "vasoconstrictor")
  OR contains(mechanisms, "alpha-adrenergic-agonism")
  OR contains(mechanisms, "alpha-1-agonism")
  OR contains(mechanisms, "alpha-2-agonism")
```

---

### h1-antihistamine

**Added:** 2026-06-30 — first compound page: [[molecules/compounds/meclizine]]

**Definition:** Competitive antagonists of the H1 histamine receptor (HRH1), a Gq-coupled GPCR expressed on smooth muscle, endothelium, and CNS neurons. First-generation (sedating) agents — including meclizine and diphenhydramine — cross the blood-brain barrier and additionally antagonise muscarinic and alpha-adrenergic receptors, accounting for both their vestibular antiemetic effects and sedation. Second-generation agents (cetirizine, loratadine, fexofenadine) have restricted CNS penetration. First-generation members have additional anticholinergic activity that may be relevant to the aging safety profile (increased fall risk, anticholinergic cognitive burden in older adults).

**Aging relevance:** Histamine is a pro-inflammatory mediator released by mast cells and basophils; H1 antagonism reduces histamine-driven acute/chronic inflammatory signalling. Whether this contributes to healthspan via [[chronic-inflammation]] reduction is speculative and untested at the population level. The primary motivation for cataloguing this class is the NIA ITP longevity signal for meclizine (Harrison 2024 — 8% male median lifespan extension in UM-HET3 mice at p=0.03), which does not appear to operate through H1 receptor signalling per se; the longevity mechanism is unknown (#gap/no-mechanism). The class is therefore catalogued here to enable Dataview querying of antihistamine compounds that appear in longevity repurposing programs, not to assert H1 antagonism as a validated longevity mechanism.

**Safety class note:** First-generation H1 antihistamines carry central anticholinergic burden — specifically problematic for chronic use in aging populations (falls, impaired cognition, urinary retention). Second-generation members lack this limitation but have not been tested for longevity outcomes.

**Canonical values in use:** `h1-antihistamine`

**Hallmarks primarily targeted:** [[chronic-inflammation]] (speculative — histamine-driven inflammatory signalling)

**Constituent compounds (auto):**

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE contains(mechanisms, "h1-antihistamine")
```

---

## See also

- [[frameworks/interventions-by-hallmark]] — the matrix view (interventions × hallmarks)
- [[interventions/pharmacological/senolytics]] — senolytic class page
- [[interventions/pharmacological/senomorphics]] — senomorphic class page
- [[interventions/lifestyle/caloric-restriction]] — lifestyle class page
- `sops/lint-pass.md` § "Intervention matrix coverage" — maintenance protocol
