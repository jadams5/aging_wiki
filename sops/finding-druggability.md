---
type: sop
aliases: [Open Targets, druggability, DGIdb, drug-gene interactions, PROTAC]
---

# SOP: finding druggability and target-disease evidence

Use this SOP when assigning `druggability-tier:` to protein, pathway, or process pages, or when researching whether a target has clinical-stage drugs or high-quality chemical probes. The primary resources are Open Targets Platform (disease-target evidence aggregation), Open Targets Genetics (GWAS-to-gene), DGIdb (drug-gene interactions), and PROTACDB (targeted protein degradation).

---

## When to use druggability resources

- Filling the `druggability-tier:` field on `type: protein`, `type: pathway`, or `type: process` pages.
- Checking whether a target has clinical-stage compounds — to populate `clinical-trials-active:` on compound pages or to write a "Clinical evidence" section.
- Assessing whether a target is genetically validated (GWAS or rare-variant evidence linking it to an aging-relevant disease).
- Finding the best chemical probe for a target when no drug exists yet (tier 2).

---

## Resource 1: Open Targets Platform

**What it is:** Open Targets Platform aggregates evidence linking targets (genes) to diseases from genetics, drugs, RNA expression, animal models, and text mining. The most comprehensive disease–target evidence database.

**Primary endpoint:** `https://api.platform.opentargets.org/api/v4/graphql`

**Method:** POST with GraphQL query body.

### Query: target overview (druggability + tractability)

```bash
curl -X POST "https://api.platform.opentargets.org/api/v4/graphql" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ target(ensemblId: \"ENSG00000141510\") { id approvedSymbol tractability { label modality value } drugAndClinicalCandidates { count rows { maxClinicalStage drug { name id drugType maximumClinicalStage } } } } }"
  }'
```

**Key fields in tractability response:**
- `modality` — `SM` (small molecule), `AB` (antibody), `OC` (other clinical)
- `label` — e.g., `Clinical Precedence`, `Discovery Precedence`, `Predicted Tractable`
- `value` — boolean (is there evidence for this modality?)

**Schema note (verified 2026-05-06):** The `knownDrugs` field on the Target type referenced in earlier versions of this SOP no longer exists. It has been replaced by `drugAndClinicalCandidates`, which returns `ClinicalTargetFromTarget` rows with a slightly different shape — drug metadata is nested under a `drug` sub-object rather than flat on the row. If you encounter `Cannot query field 'knownDrugs' on type 'Target'`, you're hitting the old query.

### Druggability tier mapping (R14 schema)

| `druggability-tier:` value | Open Targets tractability signal |
|---|---|
| `1` | SM or AB `Clinical Precedence = true` (approved or clinical-stage drug exists) |
| `2` | SM or AB `Discovery Precedence = true` (high-quality probe; no approved drug yet) |
| `3` | SM `Predicted Tractable` only (ChEMBL structure-based prediction) |
| `4` | No tractability evidence; no pocket identified; or actively "undruggable" class |

When there is no Open Targets entry for a gene (ncRNA, very small ORF, etc.), set `druggability-tier: null` and tag `#gap/no-opentargets-entry`.

### Query: target-disease association score

```bash
curl -X POST "https://api.platform.opentargets.org/api/v4/graphql" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ target(ensemblId: \"ENSG00000141510\") { associatedDiseases(page: {index: 0, size: 5}) { rows { disease { name id } score datasourceScores { id score } } } } }"
  }'
```

Use EFO IDs for aging-relevant disease searches: Alzheimer's (EFO_0000249), type 2 diabetes (EFO_0001360), sarcopenia (EFO_0005775), frailty (HP:0003077), cardiovascular disease (EFO_0000319).

### Query: list known drugs for a target

```bash
curl -X POST "https://api.platform.opentargets.org/api/v4/graphql" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ target(ensemblId: \"ENSG00000141510\") { drugAndClinicalCandidates { count rows { maxClinicalStage drug { name id drugType maximumClinicalStage } } } } }"
  }'
```

**Phase values (current enum):** `PHASE_1`, `PHASE_1_2`, `PHASE_2`, `PHASE_3`, `PHASE_4`, `APPROVAL` — string enum, not numeric. `APPROVAL` indicates an approved drug. Record the highest stage reached.

**To get mechanism-of-action and indication detail per drug**, query the `Drug` type separately using the returned `drug.id` (ChEMBL ID):

```bash
curl -X POST "https://api.platform.opentargets.org/api/v4/graphql" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ drug(chemblId: \"CHEMBL1421\") { name maximumClinicalStage drugType tradeNames mechanismsOfAction { rows { mechanismOfAction targetName actionType } } indications { rows { disease { name id } maxClinicalStage } } drugWarnings { warningType description } } }"
  }'
```

Useful `Drug` fields: `name`, `tradeNames`, `drugType`, `maximumClinicalStage`, `mechanismsOfAction`, `indications`, `drugWarnings`, `adverseEvents`, `synonyms`. The `ClinicalIndicationFromDrug` row exposes per-indication phase as `maxClinicalStage` (not `maxPhaseForIndication` or `phase`). The `ClinicalTargetFromTarget` row also carries `clinicalReports` and per-target `diseases` if you want indication context without a second query.

---

## Resource 2: Open Targets Genetics

**What it is:** Open Targets Genetics maps GWAS loci to likely causal genes using Locus-to-Gene (L2G) scoring, integrating QTL data, chromatin accessibility, and distance. Useful for genetic validation of targets.

**Primary endpoint:** `https://api.genetics.opentargets.org/graphql`

### Query: L2G scores for a GWAS study

```bash
curl -X POST "https://api.genetics.opentargets.org/graphql" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ studyLocus2GeneTable(studyId: \"GCST90012130\", variantId: \"13_33628138_T_A\") { rows { gene { id symbol } score } } }"
  }'
```

### Query: find GWAS studies for a target gene

```bash
curl -X POST "https://api.genetics.opentargets.org/graphql" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ geneInfo(geneId: \"ENSG00000141510\") { id symbol } }"
  }'
```

**L2G score interpretation:** Score ≥0.5 = reasonable confidence the GWAS locus is driven by variation in this gene. Score ≥0.8 = high confidence.

---

## Resource 3: DGIdb (Drug Gene Interaction Database)

**What it is:** DGIdb aggregates drug-gene interaction data from >40 source databases (ChEMBL, DrugBank, TTD, PharmGKB, etc.). Covers small molecules, biologics, and nutraceuticals. Maintained by Washington University.

**Current API version:** v5 (GraphQL). The v2 REST API (shown in some older references) is deprecated; WebFetch of v2 endpoints returns only the DGIdb homepage rather than JSON data.

**Primary GraphQL endpoint:** `https://dgidb.org/graphql`

```bash
# Query drug interactions for a gene
curl -X POST "https://dgidb.org/graphql" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ genes(names: [\"MTOR\"]) { nodes { name interactions { drug { name conceptId } interactionScore interactionTypes { type directionality } sources { sourceDbName } } } } }"
  }'
```

**Key fields:**
- `drug.name` — drug name
- `drug.conceptId` — ChEMBL or DrugBank ID
- `interactionScore` — aggregated confidence score
- `interactionTypes[].type` — e.g., `inhibitor`, `activator`, `agonist`
- `interactionTypes[].directionality` — `inhibitory` | `activating`
- `sources[].sourceDbName` — which databases support this interaction

**Note on WebFetch:** DGIdb serves a React SPA; the v2 REST endpoints return only the HTML shell when accessed without the full JS runtime. Use the GraphQL endpoint via curl/Bash or the Python `dgidb` package instead.

**Python package:**
```python
from dgidb import get_interactions
result = get_interactions(genes=["MTOR", "TP53"])
```

---

## Resource 4: PROTACDB

**What it is:** A database of PROTAC (Proteolysis Targeting Chimera) molecules — targeted protein degraders. Relevant for proteins considered "undruggable" by conventional small molecules but tractable via degradation.

**Repository:** `https://github.com/Wang-Lin-boop/PROTACDB`

**Access:** No live REST API. Data available as downloadable CSV/JSON from the GitHub repository releases. Query locally.

**When to use:** When a target has `druggability-tier: 4` by conventional criteria but is biologically important, check PROTACDB for PROTAC development status. Note on the page as: "PROTAC development reported but no clinical-stage compound" if found.

---

## Populating `druggability-tier:` — decision tree

```
1. Does Open Targets have an entry for this gene?
   NO  → druggability-tier: null + #gap/no-opentargets-entry
   YES → continue

2. Is Clinical Precedence (SM or AB) = true?
   YES → druggability-tier: 1
   NO  → continue

3. Is Discovery Precedence (SM or AB) = true?
   YES → druggability-tier: 2
   NO  → continue

4. Is Predicted Tractable (SM) = true?
   YES → druggability-tier: 3
   NO  → continue

5. Is there a PROTAC in PROTACDB?
   YES → druggability-tier: 4 (note: PROTAC reported; not yet clinical)
   NO  → druggability-tier: 4
```

---

## Recording clinical advance data (`targeted-clinical-trials:`)

This optional field on protein pages (not a current frontmatter standard, but useful in the body) counts how many clinical trials target this gene directly. Pull from the `drugAndClinicalCandidates.count` in the Open Targets Platform query above — this count already represents drugs that have reached at least Phase 1 (preclinical-only entries are not included in `drugAndClinicalCandidates`).

For compound and intervention pages, use the `clinical-trials-active:` field instead — see `sops/integrating-clinical-trials.md`.

---

## Workflow for a protein page

1. Resolve the ENSG ID from UniProt or GTEx reference.
2. Run Open Targets Platform tractability query → assign `druggability-tier:`.
3. Record the highest-phase drug(s) in the body's "Known modulators" section.
4. Run DGIdb GraphQL query → add any additional inhibitors/activators not in Open Targets.
5. Check Open Targets Genetics L2G for genetic validation of target against aging-relevant diseases.
6. Note PROTAC status from PROTACDB if tier = 4.

---

## See also

- [[finding-protein-data]] — UniProt, NCBI Gene, canonical identity
- [[integrating-clinical-trials]] — ClinicalTrials.gov for trial counts
- [[finding-population-evidence]] — Open Targets Genetics + GWAS evidence
- [[finding-aging-specific]] — DrugAge, GenAge aging-specific evidence
