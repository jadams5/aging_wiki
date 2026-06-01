---
type: sop
aliases: [Mendelian randomization, GWAS, MR-Base, OpenGWAS, population genetics]
---

# SOP: finding population-level and causal evidence (GWAS / Mendelian randomization)

Use this SOP when you need to go beyond mouse/cell-line data and ask: "Is there evidence in human genetic data that X causally affects aging-related outcomes?" Population-genetics resources — especially Mendelian randomization (MR) studies — fill the gap between animal models and RCTs. This SOP covers how to find GWAS summary statistics, how to execute MR queries, and how to record the results on wiki pages.

---

## When to use population-evidence resources

Use these resources when:

- A protein or compound page has `human-evidence-level: preclinical-only` and you want to check if MR evidence exists.
- You are writing a biomarker page and need `mendelian-randomization:` frontmatter.
- A hallmark or pathway page has a `#gap/needs-human-replication` tag and you want to check if any GWAS/MR work has been published.
- You are evaluating a drug target and want to know whether the target gene's natural variation associates with the disease phenotype (genetic validation).

**MR vs observational GWAS:** GWAS shows association; MR attempts causal inference. For wiki purposes, MR results get the full footnote treatment below. Observational GWAS hits alone warrant a simpler note in a "Human genetic evidence" section.

> For the *method itself* — IV assumptions, sensitivity analyses (MR-Egger / weighted-median / MR-PRESSO), cis/pQTL-MR, failure modes, and the `not-applicable-somatic` caveat for CHIP drivers — see the atomic method page [[methods/mendelian-randomization]]. This SOP covers *where to find the data*; that page covers *how to weight it*.

---

## Resource 1: IEU OpenGWAS Database

**What it is:** The largest aggregated collection of GWAS summary statistics, originally from MR-Base, now maintained by the IEU (University of Bristol). Contains >30,000 GWAS datasets spanning thousands of traits.

**Primary endpoint:** `https://api.opengwas.io/api/`

Note: `https://gwas.mrcieu.ac.uk/` redirects to `https://opengwas.io/`. The API lives at `https://api.opengwas.io/api/`.

**Authentication:** JWT token required for most endpoints. Register free at `https://api.opengwas.io`. Public endpoints (status, batch listing) work without auth.

**Key endpoints:**

| Endpoint | Purpose |
|---|---|
| `GET /gwasinfo` | Metadata for one or more GWAS datasets |
| `GET /gwasinfo?id=ukb-b-7953` | Metadata for a specific dataset by ID |
| `POST /associations` | Pull summary stats for specific variants across datasets |
| `GET /tophits?id=<gwas-id>` | Top GWAS hits for a trait (with optional LD clumping) |
| `POST /phewas` | PheWAS: which traits associate with a given variant? |
| `GET /batches` | List available batch groupings (free, no auth) |

**R package (preferred for MR workflows):** `ieugwasr`. Provides typed wrappers around all endpoints and integrates with `TwoSampleMR`.

```r
library(ieugwasr)
# authenticate once
ieugwasr::get_access_token   # opens browser, stores token in.Rprofile

# look up GWAS dataset IDs for a trait
results <- gwasinfo(id = "ukb-b-7953")   # longevity/parental-age proxy in UKB

# pull instruments for an exposure
instruments <- tophits(id = "ieu-b-4879")   # e.g., eGFR as exposure
```

**For the wiki:** Use OpenGWAS to find the GWAS ID of your exposure and outcome traits. Record these IDs in footnotes. The GWAS IDs are stable and DOI-like in function — they uniquely identify a dataset version.

---

## Resource 2: GWAS Catalog (EBI)

**What it is:** EBI's curated database of published GWAS studies. Includes associations that passed genome-wide significance (typically p < 5×10⁻⁸) along with SNP metadata, sample sizes, and mapped genes/traits.

**Primary REST API endpoint:** `https://www.ebi.ac.uk/gwas/rest/api/`

**Key query patterns:**

```bash
# Search studies by trait keyword
curl "https://www.ebi.ac.uk/gwas/rest/api/studies?q=longevity&page=0&size=10"

# Get associations for a specific study accession
curl "https://www.ebi.ac.uk/gwas/rest/api/associations?accessionId=GCST90012130&page=0&size=20"

# Get studies by mapped gene
curl "https://www.ebi.ac.uk/gwas/rest/api/studies/search/findByEfoTrait?efoTrait=frailty"

# Get a study's summary associations (includes p-value, beta, OR, SE where reported)
curl "https://www.ebi.ac.uk/gwas/rest/api/studies/GCST90012130/associations"
```

**Response fields to record:**
- `accessionId` — stable GWAS Catalog study ID (e.g., GCST90012130)
- `snpInteraction.rsId` — rsID of the top hit
- `pvalue` — association p-value
- `orPerCopyNum` or `betaNum` — effect size
- `reported-genes`, `mapped-genes` — candidate causal gene(s)
- `initialSampleSize` — cohort size

**GWAS Catalog vs OpenGWAS:** Catalog is more curated and discovery-oriented (one row per publication × SNP). OpenGWAS holds full summary statistics for programmatic MR. Use Catalog to find the paper; use OpenGWAS to get the summary stats.

---

## Resource 3: UK Biobank — Neale Lab Round 2 / Pan-UKBB

**Neale Lab GWAS:** `https://www.nealelab.is/uk-biobank/`
- GWAS summary statistics for ~4000 UKB traits (phenos from UKB round 2, n~340K white British)
- Downloadable as `.tsv.bgz` files; not a programmatic API, but integrated into OpenGWAS (IDs begin `ukb-b-`)

**Pan-UKBB:** `https://pan.ukbb.broadinstitute.org/`
- Multi-ancestry GWAS across 6 ancestry groups; broader coverage of non-European populations
- IDs begin `ukb-e-` in OpenGWAS

**FinnGen:** Integrated into OpenGWAS (`finn-b-*` IDs). Finnish-enriched variants; useful for rare variant effects.

**For wiki purposes:** Record OpenGWAS IDs not URLs to these resources, since they are aggregated into OpenGWAS.

---

## Resource 4: OpenSNP (lower priority)

**What it is:** `https://opensnp.org/` — user-contributed DTC genotyping results (23andMe, AncestryDNA) with self-reported phenotypes. Uncontrolled, non-clinical. Useful for variant curiosity, not for causal claims.

**Wiki usage policy:** Cite OpenSNP only as "anecdotal / exploratory" — never for primary claims. Tag any claim derived from OpenSNP with `#gap/instrument-validity-uncertain`.

---

## Performing a two-sample MR query

Two-sample MR requires: (1) instruments (SNPs) for the exposure from one GWAS, (2) effects of those instruments on the outcome from a second GWAS. Standard analysis in R:

```r
library(TwoSampleMR)

# Step 1: get exposure instruments (e.g., circulating IGF-1 from GWAS)
exposure_dat <- extract_instruments(outcomes = "ieu-b-4879")

# Step 2: get outcome data (e.g., longevity / parental lifespan proxy)
outcome_dat <- extract_outcome_data(
  snps = exposure_dat$SNP,
  outcomes = "ebi-a-GCST90012130"
)

# Step 3: harmonise
dat <- harmonise_data(exposure_dat, outcome_dat)

# Step 4: MR
res <- mr(dat)

# Step 5: sensitivity analyses
mr_pleiotropy_test(dat)    # MR-Egger intercept test
mr_heterogeneity(dat)       # Cochran's Q
```

**Instrument quality criteria to record:**
- F-statistic per IV >10 (weak instrument threshold)
- Number of IVs used (N=)
- LD clumping parameters (r² <0.001, window 10 Mb — standard)
- p-value threshold for instrument selection (usually p < 5×10⁻⁸)

---

## MR footnote convention

MR results use an extended footnote format. The standard wiki footnote (CLAUDE.md) covers observational and RCT designs; for MR, use:

```markdown
Higher circulating IGF-1 was causally associated with shorter parental lifespan
proxy in two-sample MR (β = −0.08 per SD, 95% CI −0.14 to −0.02) [^zhou2024mr].
#gap/needs-replication

[^zhou2024mr]: [[studies/zhou-2024-igf1-lifespan-mr]] · MR · IVs=142 · β=−0.08 (95% CI −0.14 to −0.02) · P=0.003 · cohort: UKB parental-lifespan proxy n=498K · exposure: IGF-1 (ieu-b-4879) · outcome: longevity proxy (ebi-a-GCST90012130) · IVW + sensitivity (MR-Egger intercept P=0.41, Weighted Median consistent)
```

**Footnote fields for MR (in order):**
1. Wikilink to study page
2. `MR` — design identifier
3. `IVs=N` — number of genetic instruments used
4. `β=X (95% CI a–b)` or `OR=X` — effect estimate
5. `P=Y` — IVW p-value
6. `cohort:` — the outcome GWAS cohort + sample size
7. `exposure:` — trait name + OpenGWAS ID
8. `outcome:` — trait name + OpenGWAS ID
9. Sensitivity results: MR-Egger intercept p-value; whether Weighted Median is directionally consistent

---

## Gap markers for population evidence

| Tag | When to use |
|---|---|
| `#gap/instrument-validity-uncertain` | F-statistics not reported; potential horizontal pleiotropy; heterogeneity Q p <0.05 without sensitivity |
| `#gap/needs-human-replication` | Only model-organism or observational evidence; no MR/GWAS |
| `#gap/mr-not-done` | Suitable GWAS datasets exist but no MR has been published |
| `#gap/gwas-underpowered` | Nearest GWAS n <10K; likely underpowered for aging traits |

---

## Interpreting MR caveats

**Horizontal pleiotropy:** Instruments affect the outcome via pathways other than the exposure. Check: MR-Egger intercept test (P <0.05 = concern); PRESSO outlier detection; Weighted Median should give directionally consistent estimates.

**HWE / MAF:** Instruments with MAF <1% are typically excluded from MR (low power, genotyping errors). Check instrument quality tables in supplementary data.

**Bidirectional MR:** A result may reflect reverse causation (e.g., aging affects circulating factor level rather than vice versa). Flag with `#gap/bidirectional-mr-not-done` if only unidirectional MR was published.

**Exposure GWAS sample overlap with outcome GWAS:** Can inflate type I error. Pan-UKBB vs UKB round 2 overlap is a known issue. Flag as `#gap/sample-overlap-possible` when both datasets are from the same cohort.

---

## Schema field: `mr-causal-evidence`

On `type: protein` pages (and optionally on `type: compound` and `type: pathway` pages), the R22-added field:

```yaml
mr-causal-evidence: yes | no | partial | not-tested
```

- `yes` — published MR with consistent IVW + ≥2 sensitivity methods; p < 5×10⁻⁸
- `partial` — MR published but sensitivity analyses not consistent or weak instruments
- `no` — MR performed; null or significant-opposite-direction result
- `not-tested` — no MR published; populate per this SOP if needed

Populate this field from MR publications discovered via PubMed eutils query `<gene> Mendelian randomization aging` + GWAS Catalog cross-check. Record the supporting DOI in the body's "Human genetic evidence" section.

---

## Workflow for a protein page

1. Search PubMed: `"<gene name>" AND "Mendelian randomization" AND ("aging" OR "longevity" OR "lifespan")`
2. For each MR paper found: record GWAS IDs for exposure and outcome, effect size, N instruments, sensitivity results.
3. Check GWAS Catalog for any GWAS hits where `<gene>` region variants associate with aging traits.
4. Set `mr-causal-evidence:` frontmatter field.
5. Write footnotes per the MR footnote format above.
6. If no MR exists but a suitable GWAS is available: tag `#gap/mr-not-done`.

---

## See also

- [[finding-protein-data]] — canonical identity fields
- [[finding-aging-specific]] — GenAge, DrugAge, Open Targets
- [[finding-druggability]] — target druggability tiers
- `sops/adding-a-claim.md` — base footnote format
