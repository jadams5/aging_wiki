---
type: method
aliases: [base editing, adenine base editing, cytosine base editing, ABE, CBE, in vivo base editing, somatic base editing, LNP base editing, in-vivo gene editing]
abbreviation: BE
category: gene-editing
year-introduced: 2016
canonical-reference: "doi:10.1038/nature24644"
current-protocols-citation: null
related-methods:
  - "[[methods/duplex-sequencing]]"
  - "[[methods/mendelian-randomization]]"
typical-use-cases:
  - "Permanently inactivating a disease-driving gene in a target tissue from a single dose (e.g. hepatic *PCSK9* for hypercholesterolemia)"
  - "Installing a precise single-nucleotide change without a double-strand break — correcting or destroying a codon/splice site"
  - "Reproducing a protective loss-of-function human genetic variant somatically in adulthood (phenocopying Mendelian-randomization-validated targets)"
  - "Durable, 'one-and-done' modulation of a secreted-factor target as an alternative to lifelong drug/antibody/siRNA dosing"
key-limitations:
  - "Tissue reach is dominated by the liver — LNP+GalNAc hepatotropism is solved; extrahepatic in-vivo delivery is largely unsolved"
  - "Off-target editing has multiple distinct modes (Cas-dependent DNA, Cas-independent DNA, transcriptome-wide RNA A-to-I, bystander edits within the window) requiring orthogonal surveillance"
  - "Editing efficiency is often inferred from a downstream protein/biomarker proxy rather than measured at the allele level in the target tissue (liver biopsy is impractical in trials)"
  - "Durability across decades of slow target-cell turnover is assumed (DNA-level permanence) but unproven beyond a few years in humans"
  - "Germline-editing exclusion and long-horizon oncogenic-off-target risk require multi-year/decade follow-up that no program has completed"
  - "Permanence cuts both ways: an off-target or bystander edit, like the on-target edit, is irreversible"
evidence-weight-implication: "Treat in-vivo base-editing efficacy claims by (1) how editing was measured — direct allele-level editing in the target tissue is strongest; circulating-protein or biomarker proxy is weaker and conflates editing with downstream physiology; (2) off-target surveillance depth — genome-wide unbiased nomination (e.g. GUIDE-seq/CIRCLE-seq) + deep targeted/whole-genome sequencing, ideally error-corrected (see [[methods/duplex-sequencing]]); (3) durability follow-up length relative to target-cell turnover; (4) species and donor diversity of the nonclinical off-target work. A large circulating-protein drop with shallow off-target data and short follow-up is promising but not safety-defining."
literature-checked-through: 2026-06-08
verified: true
verified-date: 2026-06-08
verified-by: claude
verified-scope: "Vafai 2026 (NEJM, DOI 10.1056/NEJMoa2601283) numerics verified against full 11-page article PDF: ABE v8.8 designation, Cas9 nickase (not Cas12), intron-1 5′ splice-site A·T→G·C strategy, GalNAc/ASGPR uptake supplementing ApoE/LDLR, LNP terminal t½ <20 h, dose range 0.3–1.0 mg/kg across 6 cohorts, peak PCSK9 −88% and LDL-C −62% at 1.0 mg/kg, Pearson r=−0.68 (total RNA vs LDL), durability ≥12 mo (max 18 mo follow-up, 15/35 with ≥1 yr), NHP biodistribution high-liver/low-adrenal-spleen across 26 tissues, no germline transmission of orthologous mouse edit, authors' attribution of improved acute safety to LNP/GalNAc reformulation, TTR nexiguran ziclumeran ~3-year durability as cited within Vafai Discussion — all confirmed. One labeling correction applied: key-parameters table row relabeled from 'Total RNA dose | 0.3–1.0 mg/kg' to 'Weight-based dose | 0.3–1.0 mg/kg total RNA' to distinguish the per-kg dosing variable from the absolute total-RNA (mg) variable used in the r=−0.68 correlation. Founding ABE/CBE chemistry (Gaudelli 2017, Komor 2016): cross-checked against the verified [[crispr-base-editing-pcsk9]] companion footnotes (not re-read from Nature PDFs) — all claims consistent. General technical claims (editing window ~4–8 nt, off-target taxonomy, GUIDE-seq/CIRCLE-seq/Digenome-seq, hepatotropic uptake) accepted as established field knowledge; no fabricated specifics identified."
---

# In Vivo Base Editing (ABE / CBE; LNP-mRNA somatic editing)

**Base editing** installs a precise single-nucleotide change in genomic DNA *without* creating a double-strand break (DSB), using a deaminase enzyme tethered to a catalytically-impaired CRISPR nuclease (a "nickase") that finds the target via a guide RNA. **In vivo base editing** delivers this machinery transiently — as mRNA-encoded editor + guide RNA in a lipid nanoparticle (LNP) — directly into a patient so that the permanent edit is written in the patient's own cells, most tractably the liver. It is the platform behind [[crispr-base-editing-pcsk9]] (VERVE-102), the subject of the first published Phase 1 in-vivo base-editing trial [^vafai2026].

This page exists because the *method's ramifications* are at least as important as any single target: a transient dose that writes a permanent, DNA-level edit is a categorically different therapeutic shape from a drug taken for life — with distinctive durability advantages and distinctive, irreversible failure modes.

---

## Principle

Classical CRISPR-Cas9 cuts both DNA strands; the cell repairs the DSB by error-prone non-homologous end-joining, producing indels (gene knockout) but also a risk of large deletions, translocations, chromothripsis, and p53 activation. **Base editors avoid the DSB entirely** [^komor2016] [^gaudelli2017]:

- **Adenine base editor (ABE):** an engineered adenosine deaminase (evolved from *E. coli* TadA) fused to a Cas9 **nickase**. It deaminates adenine (A→inosine, read as G), and the nick on the opposite strand biases repair to install the complementary change — net **A·T → G·C** [^gaudelli2017]. VERVE-102 uses **ABE version 8.8** [^vafai2026].
- **Cytosine base editor (CBE):** a cytidine deaminase + uracil-glycosylase inhibitor + Cas9 nickase; net **C·G → T·A** [^komor2016]. CBEs generally have higher transcriptome-wide RNA off-target and Cas-independent DNA off-target rates than ABEs.

The deaminase acts on a small "editing window" (~4–8 nt) within the protospacer; any same-type base in that window can also be converted (**bystander editing**). Two on-target editing *strategies* are used: directly installing a premature stop codon, or — as in VERVE-102 — **disrupting a splice site** so the transcript mis-splices and read-through reaches a stop codon, abolishing protein expression [^vafai2026].

**Prime editing** (a reverse-transcriptase + nickase + extended guide) is a related DSB-free method that can write arbitrary small edits/indels, not just transition substitutions; it is earlier in in-vivo development and not covered in depth here.

### Why "no DSB" is the load-bearing safety argument
Avoiding the DSB removes the dominant source of large-scale genomic rearrangement risk. This matters most for an *aging/preventive* indication delivered to older patients (more pre-existing chromosomal fragility) and for any future germline-adjacent or high-cell-number application. It is the central reason base editing, rather than nuclease knockout, is the lead modality for in-vivo somatic editing of metabolic targets.

---

## Workflow (LNP-mRNA in-vivo editing, after VERVE-102)

1. **Cargo design** — an mRNA encoding the base-editor protein + a chemically-stabilized guide RNA targeting the locus. Guide and editing-strategy choice (stop-codon vs splice-site) set the on-target window and bystander profile.
2. **Formulation** — co-encapsulate mRNA + gRNA in an ionizable **lipid nanoparticle** (ionizable amino lipid, helper phospholipid, cholesterol, PEG-lipid). VERVE-102 adds a **GalNAc** ligand to the LNP surface.
3. **Single IV infusion** — the LNP enters the bloodstream; PEG sheds; the particle binds ApoE and is taken up by hepatocytes via the **LDL receptor**, *and* (with GalNAc) via the **asialoglycoprotein receptor (ASGPR)** — two convergent hepatotropic uptake routes [^vafai2026].
4. **Endosomal escape & translation** — endosomal acidification destabilizes the LNP; mRNA + gRNA reach the cytosol; ribosomes translate the editor, which assembles with the guide.
5. **Edit** — the editor–guide complex enters the nucleus, finds the target, forms an R-loop, the deaminase converts the target base, the nickase nicks the opposite strand, and DNA repair fixes the change. The mRNA and editor are then degraded (transient exposure; LNP terminal half-life **<20 h** in the VERVE-102 trial) — but the genomic edit is **permanent**.
6. **Read-out** — because target-tissue biopsy is impractical clinically, the pharmacodynamic read-out is a **downstream proxy**: circulating PCSK9 protein and LDL cholesterol. Allele-level editing efficiency is measured directly only in nonclinical models (primary hepatocytes, NHP liver).

---

## Output format

- **On-target editing efficiency** — % of target alleles edited in the tissue (nonclinical); reported as protein/biomarker change in humans.
- **Bystander-edit profile** — frequency of unintended same-type conversions within the editing window.
- **Off-target catalog** — DNA off-targets (Cas-dependent, nominated by guide-similarity / GUIDE-seq / CIRCLE-seq; and Cas-independent, from deaminase overexpression) plus transcriptome-wide RNA A-to-I off-targets.
- **Durability curve** — biomarker change vs time from the single dose (months → years).
- **Biodistribution** — tissue-by-tissue editing (e.g. VERVE-102 NHP work: high in liver, low in adrenal glands and spleen across 26 tissues) and **germline assessment** (sperm/egg, offspring) [^vafai2026].

---

## Key parameters

| Parameter | Typical value (VERVE-102 context) | Effect |
|---|---|---|
| Editor | ABE v8.8 (engineered TadA deaminase + Cas9 nickase) | Determines edit type (A·T→G·C), window, off-target spectrum |
| Editing window | ~4–8 nt within protospacer | Sets bystander-edit risk |
| Delivery | GalNAc-LNP, single IV | Hepatotropic via ApoE/LDLR + ASGPR; sets tissue reach |
| Weight-based dose | 0.3–1.0 mg/kg total RNA | Dose-dependent editing; absolute total RNA administered (mg/kg × body weight) correlated with LDL reduction (Pearson r=−0.68) [^vafai2026] |
| Editor exposure | LNP terminal t½ <20 h | Transient editor, permanent edit |
| On-target PD effect | up to −88% PCSK9, −62% LDL-C at 1.0 mg/kg | Downstream proxy for hepatic editing extent |
| Durability (human) | stable ≥12 mo (max 18 mo follow-up) | Persistence through hepatocyte turnover |

---

## Validation and QC

- **Direct allele-level editing** in primary human hepatocytes and NHP liver (the strongest editing measure; not obtainable in trial participants).
- **Off-target nomination + confirmation:** unbiased genome-wide nomination (GUIDE-seq, CIRCLE-seq, Digenome-seq) followed by deep targeted or whole-genome sequencing of nominated sites; **error-corrected sequencing** ([[methods/duplex-sequencing]]) is the appropriate sensitivity tier for rare somatic off-target events, since standard NGS cannot reliably call sub-1% editing.
- **RNA off-target:** transcriptome-wide RNA-seq to detect deaminase-driven A-to-I (ABE) editing during the transient expression window.
- **Germline safety:** sequencing of sperm/oocytes and offspring in animal models to confirm absence of heritable edits (VERVE-102's orthologous mouse editor showed no germline transmission) [^vafai2026].
- **Biodistribution:** multi-tissue editing quantification to bound extrahepatic exposure.
- **Target validation upstream of all of this:** [[methods/mendelian-randomization]] — choosing a target whose lifelong loss-of-function is human-genetics-validated as protective (e.g. PCSK9; [[pcsk9]]) is what makes a permanent edit a defensible bet.

---

## Limitations and failure modes

1. **Liver-centric reach.** ApoE/LDLR + GalNAc/ASGPR make the hepatocyte the privileged target; durable, efficient, *safe* in-vivo editing of muscle, brain, heart, or hematopoietic cells remains the field's central unsolved delivery problem. Most viable near-term targets are therefore secreted hepatic factors (PCSK9, ANGPTL3, TTR, LPA, FGB/KLKB1).
2. **Off-target permanence.** Every off-target or bystander edit is as permanent as the intended one. There is no "stop the drug" remediation; safety must be established *before* dosing, against a long latency for any oncogenic consequence. #gap/long-term-unknown
3. **Editing measured by proxy in humans.** Circulating-protein/biomarker change conflates editing extent with downstream physiology and inter-individual pharmacodynamics; it is weaker evidence than allele-level editing of the target tissue.
4. **Durability is assumed, not proven across decades.** DNA-level edits should persist through cell turnover, but the cumulative-exposure rationale that motivates *early* editing requires multi-decade persistence; human data extend only a few years (the longest-followed in-vivo editing program, TTR-targeting nexiguran ziclumeran, reports stable effect through ~3 years) [^vafai2026]. #gap/long-term-unknown
5. **LNP innate-immune activation.** The lipid nanoparticle — not the editor — appears to be the principal driver of acute adverse events (infusion reactions, transient transaminase rise, thrombocytopenia in earlier programs); reformulation + GalNAc reduced this for VERVE-102, but anti-PEG immunity may constrain re-dosing. #gap/long-term-unknown
6. **Donor/population diversity of nonclinical off-target work.** Off-target landscapes are partly genotype-dependent; off-target screening done mainly in one ancestral background under-samples human genomic diversity. #gap/needs-replication

---

## Evidence-weight implications for this wiki

When a study reports an in-vivo (base-)editing result, weight it by:

1. **How editing was measured.** Direct allele-level editing in the target tissue ≫ circulating-protein proxy ≫ a clinical biomarker alone.
2. **Off-target surveillance depth.** Genome-wide unbiased nomination + error-corrected deep sequencing of nominated and genome-wide sites is the gold tier; "no predicted off-targets edited by standard WGS" is a weaker claim (standard NGS misses rare edits — see [[methods/duplex-sequencing]]).
3. **Durability follow-up vs target-cell turnover.** A 6-month read-out under-tests a therapy whose entire selling point is decades of permanence.
4. **Species and donor diversity** of the nonclinical package.
5. **Reversibility framing.** Because the edit is permanent, weight safety evidence more conservatively than for a discontinuable drug achieving the same biomarker change (e.g. a PCSK9 monoclonal antibody).

For the specific aging relevance — gene editing as the durable end of the intervention-durability spectrum, and as a "Tier 3" longevity strategy — see [[interventions-by-modality]] and [[longevity-escape-velocity]].

---

## Related methods

| Method | Relationship | Notes |
|---|---|---|
| [[methods/duplex-sequencing]] | Off-target surveillance | Error-corrected sequencing is the appropriate sensitivity tier to detect rare somatic off-target edits below standard-NGS limits |
| [[methods/mendelian-randomization]] | Target validation | Human-genetics validation that a target's lifelong LOF is safe + protective is the precondition for a permanent edit |
| Nuclease knockout (CRISPR-Cas9 DSB) | Predecessor / alternative | Creates indels via DSB; higher rearrangement risk; base editing's DSB-free chemistry is the safety improvement |
| Prime editing | Sibling DSB-free editor | RT-based; writes arbitrary small edits beyond transition substitutions; earlier in in-vivo development |
| Epigenome editing (dCas9-DNMT/TET) | Reversible analogue | Modifies expression without changing sequence; reversible — the opposite durability tradeoff (see [[dna-methylation]]) |
| mtDNA base editors (DdCBE / mitoBEs) | Organelle-genome variant | TALE- or Cas-free deaminases for mitochondrial DNA; relevant to mtDNA-mutation SENS strategies (see [[sens-damage-categories]]) |

---

## Pages citing this method

- [[crispr-base-editing-pcsk9]] — the VERVE-101/102 program; primary clinical instantiation
- [[studies/vafai-2026-verve-102-pcsk9]] — first published Phase 1 in-vivo base-editing trial
- [[pcsk9]] — target; "In vivo CRISPR base editing" section
- [[apoe]] — preclinical ε4→ε3 ABE correction (neuronal, AAV-delivered) — a non-hepatic editing target
- [[sens-damage-categories]] — mtDNA base editors as a damage-removal strategy
- [[interventions-by-modality]] · [[longevity-escape-velocity]] — durability-spectrum / aging-modality framing

---

## Limitations and gaps

- `#gap/needs-current-protocols-anchor` — no Current Protocols chapter is cited; in-vivo base-editing protocols are program-proprietary. Update if a methods compendium chapter appears.
- `#gap/long-term-unknown` — human durability beyond ~3 years (TTR program) and genome-wide off-target consequences over a latency long enough for oncogenesis are unestablished for any in-vivo base-editing program.
- `#gap/needs-replication` — VERVE-102 is one program; a second in-vivo base-editing PCSK9 Phase 1 trial (reported in *Nat Med* 2026, cited within [^vafai2026]) is an independent replication thread to ingest when resolved to a primary source. DOIs for the secondary in-vivo-editing programs (nexiguran ziclumeran, the *Nat Med* base-editing trial) are not yet captured here — add on a verification pass.
- `#stub` — GUIDE-seq / CIRCLE-seq off-target-nomination assays are referenced but have no dedicated method pages yet.

---

## Footnotes

[^vafai2026]: [[studies/vafai-2026-verve-102-pcsk9]] · doi:10.1056/NEJMoa2601283 · Vafai SB, Täubel J, …, Kathiresan S · *N Engl J Med* 2026 · PMID 42187087 · n=35 · in-vivo (human Phase 1, single-ascending-dose) · single IV VERVE-102 (ABE8.8 mRNA + PCSK9 gRNA, GalNAc-LNP), 0.3–1.0 mg/kg; up to −88% PCSK9 / −62% LDL-C; durable ≥12 mo; LNP t½ <20 h; NHP biodistribution high-liver/low-adrenal-spleen across 26 tissues; no germline transmission of the orthologous mouse edit. Closed-access (NEJM) — verified against article PDF.

[^komor2016]: doi:10.1038/nature17946 · Komor AC, Kim YB, Packer MS, Zuris JA, Liu DR · *Nature* 2016 · 533(7603):420-424 · in-vitro/methods · founding **cytosine base editor (BE3)**; programmable C·G→T·A without DSB in mammalian cells; cross-checked against the verified [[crispr-base-editing-pcsk9]] footnote.

[^gaudelli2017]: doi:10.1038/nature24644 · Gaudelli NM, Komor AC, Rees HA, Packer MS, Badran AH, Bryson DI, Liu DR · *Nature* 2017 · 551(7681):464-471 · in-vitro/methods · founding **adenine base editor (ABE)**; evolved *E. coli* TadA fused to Cas9 nickase; A·T→G·C without DSB; ~50% efficiency, ≥99.9% product purity, ≤0.1% indels in the 7th-gen editor; cross-checked against the verified [[crispr-base-editing-pcsk9]] footnote.

[^musunuru2021]: doi:10.1038/s41586-021-03534-y · Musunuru K, Chadwick AC, Mizoguchi T, et al. · *Nature* 2021 · 593(7859):429-434 · in-vivo (cynomolgus NHP) · single IV LNP-delivered ABE8e + *PCSK9* guide; near-complete hepatic knockdown, ~90% PCSK9 and ~60% LDL-C reduction stable ≥8 mo; no off-targets edited above background by WGS; the preclinical foundation for in-vivo PCSK9 base editing. Closed-access — abstract-verified (PMID 34012082) per [[crispr-base-editing-pcsk9]]. #gap/no-fulltext-access
