---
type: metabolite
aliases: [ACh, acetylcholine cation, 2-acetyloxyethyl(trimethyl)azanium]
pubchem-cid: 187
hmdb-id: HMDB0000895
chebi-id: CHEBI:15355
chembl-id: CHEMBL667
inchikey: OIPILFWXSMYKGL-UHFFFAOYSA-N
molecular-formula: C7H16NO2+
molecular-weight-da: 146.21
endogenous: true
hallmarks: ["[[hallmarks/chronic-inflammation]]", "[[hallmarks/loss-of-proteostasis]]", "[[hallmarks/cellular-senescence]]"]
sens-categories: []
mechanisms: [neurotransmitter, parasympathetic-signaling, nf-kb-suppression-via-alpha7-nachr, neuromuscular-transmission]
related-proteins: ["[[molecules/proteins/chrna7]]", "choline-acetyltransferase (ChAT)", "acetylcholinesterase (AChE)", "butyrylcholinesterase (BuChE)", "vesicular-acetylcholine-transporter (VAChT)"]
synthesis-organ: ["[[brain]]", "[[spinal-cord]]", "[[neuromuscular-junction]]", "non-neuronal-immune-cells"]
degradation-enzymes: ["acetylcholinesterase (AChE)", "butyrylcholinesterase (BuChE)"]
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Canonical identifiers (PubChem CID 187, HMDB0000895, CHEBI:15355, ChEMBL667, InChIKey OIPILFWXSMYKGL-UHFFFAOYSA-N, formula C7H16NO2+, MW 146.21 Da) confirmed against live PubChem REST API + ChEMBL API. Gao 2024 (doi:10.17219/acem/176051) verified against full PDF — SMD values, adverse-event ORs, and study counts corrected. Bao 2020 (doi:10.3389/fnagi.2020.597811) verified against full PDF — 30-study count, fiber-type compensatory ACh upregulation, MRF4/LRP4 mechanisms confirmed. Soendenbroe 2021 (doi:10.1152/ajpcell.00174.2021) verified against abstract via Crossref (closed-access; two-pathway framing and physical-activity conclusion confirmed). Perry 1977 (doi:10.1016/0022-510x(77)90073-9) and Bartus 1982 (doi:10.1126/science.7046051) are closed-access — title/authors/journal/year confirmed via Crossref; specific quantitative ChAT-reduction and plaque-correlation claims not independently re-read from PDF."
---

# Acetylcholine (ACh)

**Acetylcholine (ACh)** is a quaternary ammonium neurotransmitter and the principal endogenous ligand of the cholinergic system. It mediates parasympathetic neurotransmission, neuromuscular junction (NMJ) transmission in skeletal muscle, central nervous system (CNS) cognition and memory circuits, and — through the non-neuronal cholinergic system — the **[[pathways/cholinergic-anti-inflammatory-pathway|cholinergic anti-inflammatory pathway (CAP)]]** that brakes systemic inflammation. The relevance of ACh to aging is multi-domain: basal forebrain cholinergic neurons degenerate in Alzheimer's disease, the NMJ deteriorates with age, driving sarcopenia, and the CAP weakens with declining vagal tone, contributing to [[hallmarks/chronic-inflammation|inflammaging]]. The cholinergic system is thus a convergence point for three major aging phenotypes, making acetylcholine one of the most clinically targeted molecules in geriatric medicine.

## Identity

| Field | Value | Source |
|---|---|---|
| PubChem CID | 187 | PubChem REST API, 2026-06-14 |
| HMDB ID | HMDB0000895 | PubChem xrefs → HMDB, 2026-06-14 |
| ChEBI ID | CHEBI:15355 | PubChem xrefs → ChEBI, 2026-06-14 |
| ChEMBL ID | CHEMBL667 | ChEMBL SMILES match, 2026-06-14 |
| InChIKey | OIPILFWXSMYKGL-UHFFFAOYSA-N | PubChem REST API, 2026-06-14 |
| Molecular formula | C7H16NO2⁺ | PubChem CID 187 (cationic form at physiological pH) |
| Molecular weight | 146.21 Da | PubChem CID 187 |
| IUPAC name | 2-acetyloxyethyl(trimethyl)azanium | PubChem CID 187 |
| Canonical SMILES | CC(=O)OCC[N+](C)(C)C | PubChem CID 187 |

**Chemical note:** ACh is a quaternary ammonium ester of acetic acid and choline. The nitrogen atom bears a permanent positive charge (quaternary ammonium, [N⁺]) regardless of pH — this distinguishes ACh from most amines and prevents passage across lipid bilayers by passive diffusion. Synthesis, storage, vesicular release, and reuptake of the choline precursor are therefore all required for cholinergic signaling. The molecular formula reflects the cation (C7H16NO2⁺); the acetylcholine salt (e.g., chloride) has MW ~181.66 Da.

## Biochemistry: synthesis and degradation

### Synthesis

ACh is synthesized in nerve terminals (and in non-neuronal cholinergic cells) by **choline acetyltransferase (ChAT)**, which catalyzes the transfer of an acetyl group from acetyl-CoA to choline:

> Acetyl-CoA + choline → Acetylcholine + CoA (ChAT-catalyzed)

Key features of the synthesis pathway:

- **Choline source:** Choline is not synthesized de novo at sufficient rates in neurons — ~50% is recycled by the high-affinity choline transporter (CHT1; SLC5A7) from the synaptic cleft after AChE hydrolysis; the remainder comes from systemic circulation (dietary phosphatidylcholine) [^chen2022].
- **Acetyl-CoA:** Derived from mitochondrial metabolism (pyruvate decarboxylation) and transported to the cytoplasm via citrate.
- **ChAT** is the rate-limiting synthetic enzyme. Its activity declines with age in the basal forebrain — particularly in the nucleus basalis of Meynert and medial septum — and is a reliable post-mortem marker of cholinergic neuron loss in Alzheimer's disease [^perry1977].
- Synthesized ACh is loaded into presynaptic vesicles by the **vesicular acetylcholine transporter (VAChT; SLC18A3)** — driven by the vesicular H⁺ gradient.

### Degradation — why ACh signaling is spatially and temporally tight

Unlike monoamine neurotransmitters (dopamine, serotonin) that are cleared partly by reuptake of the intact transmitter, ACh is **irreversibly hydrolyzed** in the synaptic cleft within milliseconds:

> ACh + H₂O → choline + acetate (AChE-catalyzed)

Two esterases participate:

| Enzyme | Gene | Substrates | Location | Aging context |
|---|---|---|---|---|
| **Acetylcholinesterase (AChE)** | *ACHE* | ACh preferentially; very high catalytic efficiency (~10,000 hydrolysis events/sec) | Synaptic cleft (collagen-tailed form); erythrocyte membranes; neuromuscular junction | The therapeutic target of AChE inhibitors (donepezil, galantamine, rivastigmine) in Alzheimer's disease |
| **Butyrylcholinesterase (BuChE)** | *BCHE* | Broader substrate range (butyrylcholine, succinylcholine, some drugs); lower ACh affinity | Plasma, liver, glia, serum | BuChE activity rises as AChE activity falls in late-stage AD brain; a secondary pharmacological target |

The fast hydrolysis by AChE is why cholinergic synapses have millisecond-scale signaling precision — and why AChE inhibition (blocking the breakdown) is the primary pharmacological strategy to amplify insufficient ACh in Alzheimer's disease.

## Receptors: nicotinic and muscarinic

ACh acts on two structurally and functionally distinct receptor families:

### Nicotinic acetylcholine receptors (nAChRs) — ionotropic

Nicotinic receptors are pentameric **ligand-gated ion channels** (LGIC) of the Cys-loop superfamily. ACh binding opens a cation-selective pore, producing rapid (millisecond) membrane depolarization. Key subtypes in aging biology:

| Receptor | Composition | Location | Aging role |
|---|---|---|---|
| **Muscle-type NMJ receptor** | (α1)₂β1δγ (embryonic) or (α1)₂β1δε (adult) | Skeletal muscle endplate | Degrades at the NMJ in aging/sarcopenia; subunit substitution (γ→ε) completes during neonatal development; re-expression of γ seen in denervation-like states |
| **α4β2 nAChR** | (α4)₂(β2)₃ | Cortex, thalamus, habenula; the major CNS nAChR | Mediates nicotine addiction; involved in attention; not directly implicated in the cholinergic anti-inflammatory pathway |
| **α7nAChR** | (α7)₅ homopentamer | Hippocampus, cortex; macrophages, microglia, T cells | **Key immune receptor of the CAP**; see [[molecules/proteins/chrna7]]; binds Aβ₁₋₄₂; declines in basal forebrain in AD |

For full α7nAChR biology — including the CHRFAM7A dominant-negative, JAK2/STAT3 anti-inflammatory signaling arm, and pharmacological probes — see the dedicated page [[molecules/proteins/chrna7]].

### Muscarinic acetylcholine receptors (mAChRs) — metabotropic

Muscarinic receptors are **G-protein-coupled receptors (GPCRs)**, with five subtypes (M1–M5) mediating slow, sustained responses to ACh (seconds to minutes):

| Subtype | G-protein coupling | Primary locations | Key aging-relevant function |
|---|---|---|---|
| **M1** | Gq/11 → IP₃/DAG → PKC | Cortex, hippocampus, striatum | Cognition, memory; the preferred target for AD-directed muscarinic therapy (xanomeline-trospium, recently FDA-approved for schizophrenia psychosis, is M1/M4 preferring) |
| **M2** | Gi/o → ↓cAMP | Heart (negative chronotropy/dromotropy), presynaptic autoreceptors on cholinergic neurons | Autoreceptor — provides negative feedback on ACh release; cardiac parasympathetic slowing |
| **M3** | Gq/11 | Smooth muscle, glands, endothelium | Glandular secretion (saliva, gastric acid); bronchoconstriction; anticholinergics (e.g., tiotropium) block this in COPD |
| **M4** | Gi/o | Striatum, CNS | Co-target with M1 in current psychiatric drug development |
| **M5** | Gq/11 | CNS (hypothalamus, midbrain) | Least characterized; role in dopaminergic neuron regulation |

**Cardiac note:** M2 receptor activation by vagal ACh release onto the sinoatrial node reduces heart rate. The age-related decline in resting heart rate variability (HRV) is a proxy for reduced vagal (parasympathetic) tone and, by extension, reduced systemic cholinergic signaling — linking ACh biology to the CAP (see below).

## Physiological roles

### 1. Parasympathetic neurotransmission

All **preganglionic** autonomic neurons (both sympathetic and parasympathetic) are cholinergic — they release ACh onto nicotinic receptors on postganglionic neurons at the autonomic ganglia. **Postganglionic parasympathetic** neurons are also cholinergic: they release ACh onto muscarinic receptors on target organs, producing the classic parasympathetic effects:

- **Heart:** M2 → ↓rate, ↓conduction (sinoatrial and atrioventricular node slowing)
- **Lungs:** M3 → bronchoconstriction, mucus secretion
- **Gastrointestinal:** M3/M1 → ↑motility, ↑glandular secretion, sphincter relaxation
- **Bladder:** M3 → detrusor contraction → micturition
- **Eye:** M3 → pupillary constriction (miosis), ciliary contraction (accommodation)
- **Glands:** M3 → salivation, lacrimation, sweat

The autonomic nervous system's parasympathetic branch is often summarized as "rest and digest" — and its age-related decline (reduced vagal tone) has cascading consequences for cardiac autonomic regulation, gastrointestinal motility, and immune modulation (see CAP section).

### 2. Neuromuscular junction transmission

At the skeletal muscle NMJ, motor neurons release ACh from presynaptic terminals onto **nicotinic muscle-type receptors (nAChR)** at the motor endplate, producing the endplate potential and triggering muscle contraction. This is the most pharmacologically familiar cholinergic synapse: it is the site of action of:

- **Depolarizing neuromuscular blockers** (succinylcholine) — bind and persistently depolarize
- **Non-depolarizing blockers** (vecuronium, rocuronium) — competitive antagonists
- **Organophosphate toxins** (nerve agents, pesticides) — irreversible AChE inhibition → ACh accumulation → sustained depolarization
- **Botulinum toxin (BoNT)** — cleaves SNARE proteins required for ACh vesicle exocytosis

The integrity of NMJ cholinergic transmission degrades with aging — this is one mechanism of sarcopenia (see below).

### 3. CNS cognition and memory — the basal forebrain cholinergic system (BFCS)

The **basal forebrain cholinergic system** provides the dominant source of ACh to the cortex and hippocampus, supporting attention, encoding, and retrieval of declarative memories. Major neuronal populations:

- **Nucleus basalis of Meynert (NBM)** → projects to neocortex
- **Medial septal nucleus** → projects to hippocampus (via fornix)
- **Diagonal band of Broca** → projects to olfactory bulb, cortex, hippocampus

ChAT activity in these neurons (and consequently cortical ACh release) declines in normal aging, and is dramatically reduced in Alzheimer's disease — the foundation of the **cholinergic hypothesis of Alzheimer's disease** (see below).

### 4. Non-neuronal cholinergic system: immune modulation

ACh is produced by non-neuronal cells — including epithelial cells, endothelial cells, lymphocytes, and macrophages — independently of cholinergic neurons. In the context of the **[[pathways/cholinergic-anti-inflammatory-pathway|cholinergic anti-inflammatory pathway (CAP)]]**, memory CD4⁺ T cells that express ChAT (ChAT⁺ T cells) represent a key non-neuronal ACh source: stimulated by vagal norepinephrine, they release ACh that signals through α7nAChR on macrophages to suppress NF-κB-driven cytokine production [^rosasBallina2011]. This neuro-immune circuit is the molecular basis for the concept that the vagus nerve is a "brake" on systemic inflammation. See [[pathways/cholinergic-anti-inflammatory-pathway]] for circuit anatomy, and [[molecules/proteins/chrna7]] for the terminal receptor biology.

## Aging relevance

### A. Basal forebrain cholinergic degeneration and Alzheimer's disease

The **cholinergic hypothesis of Alzheimer's disease** — first formally proposed by Bartus et al. in 1982 and grounded in the postmortem measurements of Perry et al. in 1977 — posits that the selective degeneration of basal forebrain cholinergic neurons (BFCNs), and the resulting cortical and hippocampal ACh deficiency, is a primary driver of the cognitive deficits characteristic of AD [^bartus1982] [^perry1977].

**Supporting evidence:**

- Perry et al. 1977 demonstrated that choline acetyltransferase (ChAT) activity was markedly and specifically reduced in hippocampus and cerebral cortex of dementia patients with Alzheimer-type changes post-mortem, correlating with the extent of senile plaque pathology [^perry1977].
- Scopolamine (muscarinic antagonist) administered to healthy young adults produces a reversible amnestic syndrome mimicking the memory profile of early AD — establishing that cholinergic blockade alone is sufficient to reproduce the cognitive phenotype [^bartus1982].
- Nucleus basalis of Meynert neurons show selective early degeneration in AD, preceding widespread amyloid plaque deposition in some anatomical frameworks.
- α7nAChR on hippocampal neurons binds Aβ₁₋₄₂ at high affinity — a potential link between amyloid pathology and cholinergic dysfunction [^chen2022]. Whether this interaction initiates or exacerbates neuron loss remains debated (#gap/contradictory-evidence).

**The current view (post-amyloid-era framing):** The cholinergic hypothesis is mechanistically valid — BFCS degeneration is real and substantially contributes to cognitive symptoms — but is now understood as a **downstream consequence** of amyloid and tau pathology rather than the initiating event. The amyloid cascade (Hardy & Higgins 1992; Hardy & Selkoe 2002) is the dominant upstream framework (see [[phenotypes/alzheimers-disease]]). This reframing explains why pharmacological augmentation of ACh (AChE inhibitors) provides symptomatic benefit but does not arrest disease progression — the cholinergic deficit is not the root cause.

**AChE inhibitors (the primary AD pharmacotherapy):**

Three AChE inhibitors are approved for symptomatic AD treatment:

| Drug | Selectivity | Half-life | Indication |
|---|---|---|---|
| **Donepezil** | AChE >> BuChE | ~70 h | Mild–severe AD |
| **Galantamine** | AChE (+ allosteric potentiator of nAChR) | ~7 h | Mild–moderate AD |
| **Rivastigmine** | AChE + BuChE (dual) | ~1.5 h (plasma); ~10 h (brain) | Mild–moderate AD; Parkinson's dementia (transdermal) |

A 2024 systematic review and meta-analysis (16 RCTs for efficacy; 15 for safety) confirmed modest but consistent symptomatic benefits of AChE inhibitors vs placebo on cognitive outcomes (pooled SMD: donepezil −0.33 [−0.52, −0.13]; galantamine −0.48 [−0.58, −0.38]; rivastigmine −0.65 [−1.06, −0.23]), with galantamine — but not donepezil — showing a statistically significant association with adverse events (galantamine OR 2.34 [1.35, 4.08]; donepezil OR 1.22 [0.98, 1.52], non-significant) [^gao2024]. Rivastigmine had insufficient safety studies for meta-analysis. GI tolerability (nausea, vomiting, diarrhea) is the class-level dose-limiting concern documented in the broader AChEI literature, not quantified specifically by Gao 2024. Notably, AChE inhibitors do not slow the underlying neurodegenerative process — disease-modifying therapy targeting amyloid (lecanemab, donanemab) is the current frontier. #gap/contradictory-evidence (AChE inhibitors are palliative, not curative; their failure to halt neurodegeneration is consistent with the amyloid hypothesis and limits interpretation of "cholinergic deficit as primary driver")

**Extrapolation table:**

| Dimension | Status |
|---|---|
| BFCS degeneration observed in humans? | yes — post-mortem and neuroimaging data |
| ChAT activity decline confirmed? | yes — Perry 1977 and extensive replications |
| ACh augmentation improves symptoms? | yes — AChE inhibitors (modest RCT evidence) |
| ACh augmentation modifies disease course? | no — AChE inhibitors are symptomatic only |

### B. Neuromuscular junction aging and sarcopenia

The **neuromuscular junction (NMJ)** undergoes progressive structural and functional deterioration with aging, contributing to the loss of muscle fiber innervation that underlies [[phenotypes/sarcopenia|sarcopenia]]. ACh transmission at the NMJ fails through two overlapping mechanisms:

1. **Presynaptic:** Reduced ACh release per nerve impulse, decreased quantal content; age-related decline in VAChT expression and vesicle recycling efficiency.
2. **Postsynaptic:** Fragmentation and decreased area of the acetylcholine receptor (AChR) cluster at the motor endplate; reduction in AChR density; loss of junctional folds that normally amplify postsynaptic currents.

A 2020 systematic review (30 pre-clinical and clinical studies) found that aging causes endplate fragmentation and denervation-like AChR changes across muscle fiber types — with type I and IIb fibers increasing ACh release as a partial compensatory response, but overall NMJ integrity declining [^bao2020]. The molecular mechanisms include decreased expression of MRF4 (a myogenic regulatory factor that normally drives AChR subunit gene expression at the endplate), and degradation of LRP4 (a synaptic organizing protein essential for AChR clustering via the agrin-MuSK pathway).

Soendenbroe et al. 2021 reviewed evidence that muscle fiber denervation — via both individual NMJ breakdown and whole-motor-unit death — is a major contributor to age-related physical function decline in humans, and that physical activity is the most effective intervention for preserving neuromuscular connectivity [^soendenbroe2021].

The 15-PGDH / prostaglandin pathway intersects NMJ biology: see [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] for evidence that inhibiting the gerozyme 15-PGDH (which rises in aging muscle) can restore NMJ morphology and synaptic connectivity in aged mice, with acetylcholine transmission as the functional output.

**Extrapolation table:**

| Dimension | Status |
|---|---|
| NMJ degeneration with aging conserved? | yes — confirmed in humans and rodents |
| AChR fragmentation in human aged muscle? | yes (Bao 2020 systematic review — biopsy/histology data) |
| Replicated in intervention trials? | partial — exercise is validated; NMJ-specific pharmacological data sparse |

### C. Cholinergic anti-inflammatory tone and inflammaging

The **[[pathways/cholinergic-anti-inflammatory-pathway|CAP]]** represents a direct mechanistic link between declining cholinergic output (specifically, declining vagal efferent ACh release and non-neuronal ChAT⁺ T-cell ACh) and [[hallmarks/chronic-inflammation|inflammaging]]. The circuit is summarized in the CAP pathway page; in brief:

- Vagal efferent neurons release ACh (and norepinephrine via the sympatho-splenic relay) in the spleen
- ChAT⁺ CD4⁺ memory T cells receive norepinephrine signal and release ACh locally
- ACh binds **[[molecules/proteins/chrna7|α7nAChR]]** on splenic macrophages → NF-κB suppression → reduced TNF-α, IL-1β, IL-6 secretion

With aging:
- **HRV declines**, reflecting reduced vagal efferent tone and lower ACh output to the spleen [^olivieri2024]
- Whether ChAT⁺ T-cell populations are maintained with age has not been directly quantified in humans #gap/needs-replication
- Constitutive NF-κB activation in aged macrophages may partially override α7nAChR-mediated suppression #gap/no-mechanism

**Causal direction is unresolved** — cross-sectional studies show lower HRV correlates with higher inflammatory markers in older adults, consistent with weakened CAP, but RCT evidence that restoring vagal tone reverses inflammaging is absent. See [[pathways/cholinergic-anti-inflammatory-pathway]] § aging relevance for the full evidence base and the Baker 2023 (n=113) null auricular VNS trial.

**Framing note:** The link between ACh decline and aging is mechanistic/associational across all three domains above — not established causation. Basal forebrain ACh loss is a downstream consequence of AD pathology. NMJ ACh decline is one of several NMJ components that fail in aging muscle. CAP weakening is an association (HRV-inflammatory marker correlation), not an RCT-proven causal chain.

## Interventions: augmenting or protecting cholinergic signaling

| Intervention | Mechanism | Evidence level | Aging indication |
|---|---|---|---|
| **Donepezil, galantamine, rivastigmine** (AChE inhibitors) | Block ACh hydrolysis → ↑synaptic ACh | Strong RCT evidence (multiple meta-analyses) | Symptomatic AD treatment; no disease modification |
| **Choline supplementation** | Precursor to ACh synthesis | Limited (preclinical + epidemiological); no aging-indication RCT | Proposed neuroprotection; no aging trial |
| **Exercise** | Increases vagal tone (HRV); protects NMJ; reduces neuroinflammation | Strong for NMJ + sarcopenia (multiple RCTs); moderate for vagal tone | Sarcopenia, cardiovascular aging, inflammation |
| **Vagus nerve stimulation (VNS)** | Amplifies efferent ACh-mediated CAP signaling | Proof-of-concept (Koopman 2016, n=17 RA); null auricular VNS RCT (Baker 2023, n=113) | Inflammatory disease; no aging/longevity trial |
| **GTS-21, PNU282987** (α7 agonists) | Directly activate α7nAChR without requiring ACh | Preclinical only | No aging-indication trial; clinical hold history (encenicline) |
| **Physostigmine, neostigmine** (older AChEIs) | AChE inhibition (non-selective, short-acting) | Historical; superseded by donepezil/galantamine/rivastigmine | Diagnostic / anesthetic reversal; not aging-specific |

#gap/long-term-unknown — no aging intervention trial has tested ACh augmentation for longevity or healthspan endpoints rather than symptomatic disease endpoints.

## ACh and the SENS framework

ACh does not map to a primary SENS damage category. The relevant SENS frames are:

- **JunkInside / aggresomes (ApoptoSENS):** accumulation of dysfunctional cholinergic neurons that resist apoptosis, potentially cleared by senolytic approaches
- **AmyloSENS:** amyloid aggregates in AD co-localize with and may trigger cholinergic degeneration, but BFCS loss is downstream of AmyloSENS pathology, not the target

ACh is best understood as a **second-order aging signal** in the SENS frame: its decline reflects upstream damage rather than representing a primary damage category itself.

## Limitations and knowledge gaps

- #gap/needs-human-replication — The non-neuronal ChAT⁺ T-cell relay within the CAP has been demonstrated genetically in mice; the human splenic neuro-immune circuit anatomy has not been reconstructed with equivalent resolution.
- #gap/needs-replication — Whether ChAT⁺ T-cell proportions and function decline with normal human aging has not been directly quantified.
- #gap/contradictory-evidence — ACh augmentation (AChE inhibitors) provides symptomatic benefit in AD but does not modify disease course, consistent with the cholinergic deficit being downstream of amyloid/tau pathology rather than causal.
- #gap/no-mechanism — The molecular mechanism by which α7nAChR on macrophages (which lack measurable ionic currents) couples to NF-κB suppression remains incompletely characterized.
- #gap/dose-response-unclear — The optimal ACh-augmenting strategy for sarcopenia prevention (via NMJ preservation) is not established; exercise is the most validated but mechanistically diffuse.
- #gap/long-term-unknown — No powered human trial has tested cholinergic augmentation for longevity, healthspan, or multi-domain aging endpoints (as opposed to disease-specific endpoints in established AD or RA).
- #gap/stub — [[tissues/vagus-nerve]] does not yet exist as a full atomic page; vagal anatomy referenced in the CAP and here is documented on [[pathways/cholinergic-anti-inflammatory-pathway]].

## Cross-references

[[molecules/proteins/chrna7]] · [[pathways/cholinergic-anti-inflammatory-pathway]] · [[hallmarks/chronic-inflammation]] · [[phenotypes/alzheimers-disease]] · [[phenotypes/sarcopenia]] · [[pathways/nf-kb]] · [[processes/autophagy]] · [[tissues/vagus-nerve]] · [[molecules/metabolites/catecholamines]] · [[pathways/hpa-axis]] · [[studies/bakooshli-2023-15pgdh-nmj-regeneration]]

---

## Footnotes

[^bartus1982]: doi:10.1126/science.7046051 · Bartus RT, Dean RL, Beer B, Lippa AS · "The cholinergic hypothesis of geriatric memory dysfunction" · *Science* 217(4558):408–414 · 1982 · review · ~4,663 citations · seminal paper proposing that cholinergic dysfunction causes the memory deficits of aging and Alzheimer's disease; the scopolamine model and ChAT activity data are foundational; now understood as identifying a downstream consequence (BFCS degeneration) rather than the upstream initiator (amyloid/tau)

[^perry1977]: doi:10.1016/0022-510x(77)90073-9 · Perry EK, Gibson PH, Blessed G, Perry RH, Tomlinson BE · "Neurotransmitter enzyme abnormalities in senile dementia. Choline acetyltransferase and glutamic acid decarboxylase activities in necropsy brain tissue" · *Journal of the Neurological Sciences* 34(2):247–265 · 1977 · observational · model: human post-mortem brain · confirmed that ChAT activity is markedly reduced in hippocampus and cortex of AD brains and correlates with plaque density; foundational empirical support for the cholinergic hypothesis

[^gao2024]: doi:10.17219/acem/176051 · Gao Y, Liu Y, Li Y · "Safety and efficacy of acetylcholinesterase inhibitors for Alzheimer's disease: A systematic review and meta-analysis" · *Advances in Clinical and Experimental Medicine* 33(11):1179–1187 · 2024 · meta-analysis · 16 RCTs (efficacy), 15 RCTs (safety); pooled SMD for cognitive outcomes: donepezil −0.33 [−0.52, −0.13], galantamine −0.48 [−0.58, −0.38], rivastigmine −0.65 [−1.06, −0.23]; adverse-event OR: galantamine 2.34 [1.35, 4.08] (significant), donepezil 1.22 [0.98, 1.52] (non-significant); insufficient rivastigmine safety data for meta-analysis; no disease modification; gold open access

[^chen2022]: doi:10.3390/molecules27061816 · Chen ZR, Huang JB, Yang SL, Hong FF · "Role of Cholinergic Signaling in Alzheimer's Disease" · *Molecules* 27(6):1816 · 2022 · review · ~737 citations · comprehensive review of cholinergic mechanisms in cognitive decline, including ChAT/AChE biology, basal forebrain degeneration, muscarinic/nicotinic receptor subtypes, Aβ–α7nAChR interaction, and therapeutic implications; model: human/in vitro/mouse cross-species synthesis

[^bao2020]: doi:10.3389/fnagi.2020.597811 · Bao Z, Cui C, Chow SK, Qin L, Wong RMY, Cheung WH · "AChRs Degeneration at NMJ in Aging-Associated Sarcopenia — A Systematic Review" · *Frontiers in Aging Neuroscience* 12:597811 · 2020 · systematic-review · 30 pre-clinical and clinical studies · confirmed endplate fragmentation, denervation-like AChR changes, and reduced MRF4 expression in aging skeletal muscle; type I and IIb fiber AChR compensatory upregulation noted; concludes AChR-related genes are therapeutic targets for sarcopenia · 43 citations; gold OA

[^soendenbroe2021]: doi:10.1152/ajpcell.00174.2021 · Soendenbroe C, Andersen JL, Mackey AL · "Muscle-nerve communication and the molecular assessment of human skeletal muscle denervation with aging" · *American Journal of Physiology–Cell Physiology* 321(2):C317–C329 · 2021 · review · 61 citations · human and rodent studies on aging denervation mechanisms; two pathways reviewed (individual NMJ breakdown vs motor unit death); physical activity identified as the most important factor for NMJ preservation; molecular biomarkers of denervation reviewed

[^rosasBallina2011]: doi:10.1126/science.1209985 · Rosas-Ballina M, Olofsson PS, Ochani M et al. (Tracey KJ) · *Science* 334(6052):98–101 · 2011 · in-vivo (transgenic mouse) · ChAT-eGFP reporter mice + nude mouse adoptive transfer; ChAT⁺ CD4⁺ memory T cells are the obligate ACh source for vagal anti-inflammatory signaling; ChAT siRNA knockdown abolished vagus-mediated TNF suppression · ~1,100 citations

[^olivieri2024]: doi:10.1016/j.arr.2024.102521 · Olivieri F, Biscetti L, Pimpini L, Pelliccioni G, Sabbatinelli J, Giunta S · *Ageing Research Reviews* 101:102521 · 2024 · review · ~53 citations · proposes ANS imbalance (sympathetic overdrive + parasympathetic withdrawal) as detectable hallmark of inflammaging; HRV as biomarker linking autonomic aging to systemic inflammatory state; causal direction between HRV decline and inflammaging acknowledged as unresolved
