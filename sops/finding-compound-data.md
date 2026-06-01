---
type: sop
aliases: [compound databases, drug data, PubChem, DrugBank, ChEMBL]
---

# SOP: finding small-molecule and drug data

For any compound page (drug, supplement, metabolite, research chemical), pull from these primary sources.

## Identifier resolution (always do first)

Resolve the compound to a canonical identifier before doing anything else.

1. **PubChem CID** (the most universal identifier) — search by name at `https://pubchem.ncbi.nlm.nih.gov/`.
2. **InChIKey** — also unambiguous; useful for cross-database lookup.
3. **CAS number** — older identifier; some sources still use it.
4. **DrugBank ID** (if pharmaceutical) — `https://go.drugbank.com/`.
5. **ChEMBL ID** (for bioactivity data) — `https://www.ebi.ac.uk/chembl/`.

Synonyms are unreliable (e.g., "vitamin E" refers to a family of 8 compounds). Always pin to PubChem CID first.

## Primary databases

### PubChem — `https://pubchem.ncbi.nlm.nih.gov/`

**Best for:** Structure, physicochemical properties, biological assays, cross-references to other databases. Free, comprehensive.

**What to extract:**
- PubChem CID (e.g., `5281614` for fisetin)
- Canonical SMILES, InChIKey
- Molecular formula and weight
- Solubility, logP (relevant to bioavailability)
- BioAssay summary (high-throughput screening data)

### DrugBank — `https://go.drugbank.com/`

**Best for:** Pharmaceutical drugs — mechanism of action, indications, pharmacokinetics (absorption, distribution, metabolism, half-life), drug interactions, FDA approval status.

**What to extract:**
- DrugBank ID
- Mechanism of action (1–2 sentences)
- Targets (linked to UniProt accessions)
- Pharmacokinetics: bioavailability, half-life, route(s) of administration, hepatic vs renal clearance
- Approved indications
- Black-box warnings or major adverse effects

**Note:** DrugBank is open-access for academic use but requires an account for some data fields.

### ChEMBL — `https://www.ebi.ac.uk/chembl/`

**Best for:** Bioactivity data — binding affinities (Ki, Kd, IC50, EC50) against measured targets, with literature references. Critical for distinguishing on-target vs off-target effects.

**What to extract:**
- ChEMBL ID
- Top 10–20 measured targets with potency values
- Distinguish biochemical assays (purified protein) from cell-based assays (more physiologically relevant)
- Reference paper PMIDs for each affinity value → create `studies/` pages for the most-cited

### HMDB — `https://hmdb.ca/` (for endogenous metabolites)

**Best for:** Endogenous human metabolites — biofluid concentrations (blood, urine, CSF), normal vs disease ranges, biological roles.

**What to extract:** HMDB ID; normal blood/serum range; metabolic pathway membership.

## Pharmacology-specific

### ClinicalTrials.gov — `https://clinicaltrials.gov/`

**Best for:** Tracking which compounds are in human trials and at what stage.

**What to extract:** NCT numbers, phase, status (recruiting / active / completed / terminated), primary outcomes, sponsor.

For aging-relevant compounds, this is often the most up-to-date source on human evidence.

### TWOSIDES / OFFSIDES (Tatonetti lab) — adverse effect databases

**Best for:** Real-world adverse-effect frequencies from FDA AERS data, including drug-drug interactions.

## Workflow for a new compound page

1. PubChem CID + InChIKey + SMILES.
2. DrugBank (if pharmaceutical) — mechanism, PK, indications.
3. ChEMBL — actual measured target affinities (don't trust mechanism-of-action prose without affinity numbers).
4. ClinicalTrials.gov — current trial status (use NCT numbers).
5. PubMed/`archive search` — find the 3–5 most-cited papers on the compound's aging-relevant effects → create study pages.
6. Map to Hallmarks of Aging via mechanism.

## Frontmatter example

```yaml
---
type: compound
aliases: [3,7,3',4'-tetrahydroxyflavone, "5,7,3',4'-tetrahydroxyflavone"]
pubchem-cid: 5281614
inchikey: XHEFDIBZLJXQHF-UHFFFAOYSA-N
chembl-id: CHEMBL31096
drugbank-id:
cas-number: 528-48-3
mechanisms: [senolytic, antioxidant, sirtuin-modulator]
measured-targets: ["[[bcl-xl]]", "[[bcl-2]]", "[[pi3k]]"]
hallmarks: ["[[cellular-senescence]]"]
clinical-stage: phase-2-trials
human-evidence-level: limited
half-life: "uncertain (poor oral bioavailability)"
---
```

## Key quality checks for compound pages

- **Bioavailability matters more than potency.** A compound with nM potency in vitro but <5% oral bioavailability may produce zero in vivo effect at supplementable doses. Always check PK.
- **Cross-reference dose-response across studies.** A senolytic effect at 100 mg/kg in mice does not extrapolate to a 100 mg human supplement. Use allometric scaling and check ChEMBL for the actual exposure-response relationship.
- **Distinguish "supplement" from "drug."** Supplement compounds rarely have rigorous PK data; flag this with `#gap/dose-response-unclear`.
- **Watch for "polypharmacology" claims.** Many natural products hit dozens of targets; an MoA claim limited to one target is usually incomplete.

## What NOT to trust

- Supplement vendor websites for mechanism claims.
- "Mechanism of action" prose that doesn't cite measured affinities.
- In silico target predictions without experimental validation.
- News coverage of preclinical "miracle compound" findings.

## See also

- [[finding-protein-data]] — for the targets the compound binds
- [[finding-pathway-data]] — for the pathways it modulates
- [[finding-aging-specific]] — for aging-research-specific databases
