---
type: sop
aliases: [protein databases, UniProt, gene lookup, CAZy, CAZyme]
---

# SOP: finding protein and gene data online

For any protein/gene page, pull from these primary sources. Cross-reference UniProt + NCBI Gene at minimum.

## Primary databases

### UniProt — `https://www.uniprot.org/`

**Best for:** Curated protein-level information — sequence, function, domains, post-translational modifications, disease associations, all with PubMed-cited evidence.

**What to extract:**
- UniProt accession (e.g., `P04637` for human p53)
- Recommended name + alternative names
- Functional summary (the "Function" section)
- Subcellular location
- Domain structure
- Key PTMs (phosphorylation sites, etc.)
- Disease/phenotype associations

**Reviewed vs unreviewed:** Use Swiss-Prot (manually curated) entries — accession starts with a letter and is short. TrEMBL entries (auto-generated) are less reliable.

**Citation:** `UniProt P04637 (TP53_HUMAN), accessed YYYY-MM-DD`

### NCBI Gene — `https://www.ncbi.nlm.nih.gov/gene/`

**Best for:** Gene-level info — genomic location, exon structure, RNA isoforms, expression data (linked to GTEx), orthologs across species.

**What to extract:**
- NCBI Gene ID (e.g., `7157` for human TP53)
- HGNC symbol (`TP53`)
- Official full name
- Genomic location and size
- Orthologs (especially mouse, useful for cross-species claims)
- RefSeq transcripts

**Citation:** `NCBI Gene ID 7157, accessed YYYY-MM-DD`

### HGNC — `https://www.genenames.org/`

**Best for:** Authoritative human gene nomenclature. Use HGNC symbols in filenames and frontmatter to avoid synonym ambiguity.

## Interaction databases

### STRING — `https://string-db.org/`

**Best for:** Protein-protein interaction network with confidence scoring (text-mining, experimental, database, co-expression evidence channels).

**What to extract:**
- Top 10–20 interactors at confidence ≥0.7
- Distinguish "experimental" from "predicted" (text-mining-only) edges

**Caveat:** STRING's text-mining channel is noisy. For mechanistic claims, require either "experimental" or "database" evidence.

### BioGRID — `https://thebiogrid.org/`

**Best for:** Manually curated physical and genetic interactions, with the original publication for each.

**What to extract:** Direct interactors with PubMed IDs for each interaction → ingest the most-cited interaction studies into `studies/`.

### IntAct — `https://www.ebi.ac.uk/intact/`

**Best for:** Detailed interaction evidence with experimental method (Y2H, AP-MS, IP, etc.). More structured than STRING for evaluating interaction quality.

## Function and ontology

### AmiGO / Gene Ontology — `https://amigo.geneontology.org/`

**Best for:** Standardized functional annotations (molecular function, biological process, cellular component). Use for "what does this protein do" at a controlled-vocabulary level.

### InterPro — `https://www.ebi.ac.uk/interpro/`

**Best for:** Protein domains and motifs.

### CAZy — `https://www.cazy.org/`

**Best for:** Carbohydrate-active enzyme (CAZyme) families and modules, especially when evaluating glycoside hydrolases (GHs), glycosyltransferases (GTs), polysaccharide lyases (PLs), carbohydrate esterases (CEs), auxiliary activities (AAs), and carbohydrate-binding modules (CBMs). Use for enzyme-family scouting when a hypothesis involves carbohydrate or glycoconjugate recognition/catalysis, such as engineered glucosepane-cleavage scaffolds.

**What to extract:**
- CAZy family or module class (e.g., GH, GT, PL, CE, AA, CBM)
- Family number and clan where available
- Known activities and EC numbers
- Mechanism annotation if listed
- Organism distribution and candidate microbial/fungal homologs
- Cross-references to UniProt, GenBank, PDB, EC, and PubMed

**Caveat:** CAZy family membership supports fold/function hypothesis generation, not proof that a specific enzyme cleaves a proposed substrate. For noncanonical substrates such as glucosepane, require direct biochemical validation on authentic substrate; do not infer activity from GH/CBM family membership alone.

**Citation:** `CAZy family GHxx / CBMxx, accessed YYYY-MM-DD`

## Workflow for a new protein page

1. UniProt → accession, function summary, domains, PTMs, disease associations.
2. NCBI Gene → gene ID, HGNC symbol, mouse/rat orthologs.
3. InterPro / GO → domains and controlled-vocabulary function.
4. CAZy → enzyme-family/module annotations when the protein is a CAZyme or candidate carbohydrate/glycoconjugate-active enzyme.
5. STRING (confidence ≥0.7, experimental evidence channel) → top interactors.
6. List pathways the protein participates in → wikilink to pathway pages (run `sops/finding-pathway-data.md` if pathway pages don't exist yet).
7. Map to relevant Hallmarks of Aging.
8. Use `archive search` to find the 3–5 most-cited reviews of the protein's role in aging → create study pages.

## Frontmatter example

```yaml
---
type: protein
aliases: [TP53, tumor protein p53, "guardian of the genome"]
uniprot: P04637
ncbi-gene: 7157
hgnc: 11998
mouse-ortholog: Trp53
ensembl: ENSG00000141510
key-domains: [DNA-binding, tetramerization, transactivation]
key-ptms: [Ser15-phos, Ser20-phos, Lys382-acetyl]
pathways: ["[[p53-pathway]]", "[[dna-damage-response]]", "[[apoptosis-pathway]]"]
hallmarks: ["[[genomic-instability]]", "[[cellular-senescence]]"]
known-interactors: ["[[mdm2]]", "[[cbp-p300]]", "[[atm]]"]
---
```

## What NOT to trust

- Wikipedia protein boxes (good starting point only).
- "Predicted" annotations not backed by experimental evidence.
- STRING text-mining-only edges for mechanistic claims.
- Old NCBI Gene records — check the "Update date" at the bottom.

## See also

- [[finding-pathway-data]] — for pathway-level context
- [[finding-compound-data]] — for inhibitors/agonists of the protein
