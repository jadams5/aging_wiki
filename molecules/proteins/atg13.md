---
type: protein
aliases: [ATG13, autophagy related 13, KIAA0652]
uniprot: O75143
ncbi-gene: 9776
hgnc: 29091
mouse-ortholog: Atg13
ensembl: ENSG00000175224
druggability-tier: 2
caused-by: []
causes: []
key-domains: [HORMA-domain, LIR-motif, intrinsically-disordered-C-terminal-region]
key-ptms: [Ser224-phosphorylation-AMPK, Ser258-phosphorylation-mTOR, Ser355-phosphorylation-ULK1, Ser356-phosphorylation, Ser361-phosphorylation]
pathways: ["[[autophagy]]", "[[mtor]]", "[[ampk]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[ulk1]]", "[[fip200]]", "[[atg101]]", "[[atg7]]", "[[beclin-1]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hosokawa 2009 MBC, Ganley 2009, Puente 2016, Suzuki 2015 claims verified against primary PDFs. Mercer 2009 (doi:10.4161/auto.5.5.8249) and Hosokawa 2009b Autophagy (doi:10.4161/auto.5.7.9296) unverifiable — 0 candidate download URLs (Tandfonline paywall, no PMC deposit); tagged #gap/no-fulltext-access. UniProt O75143 identity fields (accession, aa length, LIR, phospho-sites) spot-checked via REST API but HORMA domain residue boundaries not confirmed from UniProt feature table (InterPro reference only)."
---

# ATG13 — ULK1 complex scaffold and mTORC1 target

The essential scaffold subunit of the mammalian autophagy initiation complex. ATG13 bridges [[ulk1]] (the kinase) and FIP200/RB1CC1 (the membrane-targeting scaffold), and harbors the primary mTORC1 phosphorylation sites that suppress autophagy initiation under nutrient-replete conditions. When mTORC1 is inhibited by starvation, rapamycin, or AMPK activation, ATG13 dephosphorylation activates the complex and triggers phagophore nucleation. ATG13 is the mammalian ortholog of yeast Atg13, a core component of the founding Atg1–Atg13–Atg17 kinase complex that governs starvation-induced autophagy in *S. cerevisiae*.

---

## Identity

| Field | Value |
|---|---|
| UniProt | O75143 (ATG13_HUMAN) |
| NCBI Gene | 9776 |
| HGNC | 29091 |
| Gene symbol | ATG13 |
| Full name | Autophagy-related protein 13 |
| Alternative names | KIAA0652 |
| Protein length | 517 amino acids (canonical isoform, UniProt O75143) |
| Mouse ortholog | Atg13 (one-to-one; functionally equivalent) |
| Yeast functional ortholog | Atg13 (*S. cerevisiae* Atg13) |
| GenAge entry | null #gap/needs-canonical-id — ATG13 not found in GenAge human subset as of 2026-05-04 |

**Naming note:** No `pathways/atg13.md` exists; this page (`molecules/proteins/atg13.md`) is the canonical `[[atg13]]` resolution. The autophagy pathway page is [[autophagy]]; the ULK1 kinase page is [[ulk1]].

---

## Domain structure

ATG13 has a bipartite architecture: a structured N-terminal HORMA domain and a long intrinsically disordered C-terminal region that serves as a phosphorylation scaffold and interaction hub.

| Domain | Residues (human) | Function |
|---|---|---|
| **HORMA domain** | ~1–198 | Named for Hop1/Rev7/MAD2; structural module for protein-protein recognition; in ATG13 the HORMA domain directly binds ATG101 and mediates interaction with the ATG8/GABARAP family via an exposed seatbelt region; also recruits ATG9 vesicles to the phagophore assembly site in yeast |
| **LIR (LC3-interacting region)** | ~444–447 | LC3-interacting region; mediates direct interaction with ATG8 family proteins (LC3A/B/C, GABARAP, GABARAPL1/2) |
| **Intrinsically disordered C-terminal region** | ~199–517 | Contains multiple mTORC1 phosphorylation sites and docking regions for ULK1 and FIP200; required for nutrient-sensitive regulation; no stable fold — functions as a flexible regulatory scaffold |

**HORMA domain structural note:** ATG13's HORMA domain adopts a "closed" conformation — in contrast, ATG101's HORMA domain adopts an "open" conformation that exposes the WF finger (Trp/Phe loop) for downstream effector recruitment [^suzuki2015open]. The open/closed pairing of ATG101 and ATG13 HORMA domains is functionally complementary: the ATG101 open HORMA recruits downstream autophagy effectors (LC3, WIPI1, ZFYVE1/DFCP1 to the autophagosome formation site) via the WF finger, while the ATG13 closed HORMA stabilizes complex assembly via heterodimerization with ATG101. The crystal structure characterizing this open/closed pairing was determined using **fission yeast** Atg101 + Atg13 recombinant proteins [^suzuki2015open] — not mouse or human ATG13. #gap/needs-replication — human ATG13 HORMA structure is inferred by homology from the fission yeast structure; human HORMA domain residue boundaries (~1-198) are from literature extrapolation, not directly confirmed in UniProt feature annotations.

---

## The ULK1 initiation complex

ATG13 is a constitutive subunit of the **ULK1/ULK2 initiation complex**, the apex kinase complex of macroautophagy. The complex has four confirmed mammalian subunits:

| Subunit | Gene | UniProt | Role |
|---|---|---|---|
| ULK1 (or ULK2) | ULK1 / ULK2 | O75385 | Serine/threonine kinase; catalytic core; integrates mTORC1 and AMPK signals |
| **ATG13** | ATG13 | O75143 | Scaffold; stabilizes ULK1; primary mTORC1 phosphorylation target; bridges ULK1 to FIP200 |
| FIP200 (RB1CC1) | RB1CC1 | Q8TDY2 | Focal adhesion kinase-family protein; membrane-targeting scaffold; required for ULK1 complex integrity |
| ATG101 | C12orf44 | Q9BSB4 | Stabilizes ATG13; required for complex autophagic activity; binds ATG13 HORMA domain |

**Historical note on ATG101:** The founding 2009 papers by Hosokawa et al. and Ganley et al. described a trimeric complex — ULK1 + ATG13 + FIP200 — without ATG101 [^hosokawa2009][^ganley2009]. ATG101 was identified as a fourth complex subunit in parallel reports by Mercer et al. (Autophagy 2009) [^mercer2009] and Hosokawa et al. (Autophagy 2009, a separate paper) [^hosokawa2009b]. The contemporary consensus is the four-subunit complex. Citations for "ULK1 complex" in literature prior to late 2009 refer to the trimer and should not be assumed to include ATG101.

**ATG13's bridging role:** ATG13 binds ULK1 directly (via its disordered C-terminus) and also directly contacts FIP200. Both interactions are constitutive (nutrient-independent) and required for complex integrity. ATG13 can individually stimulate ULK1 kinase activity; FIP200 binding via ATG13 further amplifies this activation [^ganley2009]. Loss of ATG13 destabilizes ULK1 protein levels and abolishes starvation-induced autophagosome formation.

---

## mTORC1 regulation of ATG13

Under nutrient-replete conditions, mTORC1 associates with the ULK1 complex (via RAPTOR) and phosphorylates both ULK1 (at Ser758) and ATG13 at multiple sites in the disordered C-terminal region. This phosphorylation keeps the complex in a low-activity state [^hosokawa2009][^ganley2009].

### Characterized phosphorylation sites

| Site (human) | Kinase | Condition | Functional consequence |
|---|---|---|---|
| Ser-258 | mTORC1 (direct) | nutrient-replete | Suppresses ULK1 kinase activity; dephosphorylated rapidly (~15 min) upon amino acid starvation |
| Ser-224 | AMPK (direct) | nutrient-replete / glucose-deprived | Suppresses autophagy initiation; phosphorylated by AMPK; dephosphorylated upon amino acid starvation (AMPK activity also decreases under AA starvation); insensitive to rapamycin/Torin 1 |
| Ser-318 | ULK1 | starvation (active complex) | ULK1 activity readout; ULK1-mediated transphosphorylation of ATG13; used as in-cell proxy for ULK1 kinase activation [^puente2016] |
| Ser-355 | ULK1 | starvation | ULK1-mediated phosphorylation (UniProt O75143; kinase assignment from UniProt annotation); not characterized in Puente 2016 |
| Ser-356 | Unknown | starvation | Phosphosite annotated in UniProt O75143; kinase not specified |
| Ser-361 | Unknown | starvation | Phosphosite annotated in UniProt O75143; kinase not specified |

**Key mechanistic point:** Puente et al. 2016 identified Ser-258 and Ser-224 as the two main nutrient-regulated phosphorylation sites on ATG13 by tandem affinity purification LC-MS/MS in MEF cells [^puente2016]. Ser-258 is a direct mTOR substrate (sensitive to rapamycin, PI-103, Torin 1; confirmed by in vitro mTOR kinase assay; requires TSC2-mediated mTORC1 activation). Ser-224 is phosphorylated by AMPK (sensitive to Compound C, an AMPK antagonist; insensitive to mTOR inhibitors; observed to increase during glucose starvation when AMPK is active). Both sites are dephosphorylated upon amino acid and serum starvation, with Ser-258 dephosphorylating faster. Non-phosphorylatable double alanine mutant (S224A/S258A) confers significantly more ULK1 kinase activity and more rapid ATG13 and ULK1 translocation to the isolation membrane upon starvation than either single mutant; single alanine mutations at either site alone do not appreciably accelerate autophagy flux. The phospho-mimetic double mutant (S224E/S258E) fails to translocate and suppresses autophagy. Ser-318 (not Ser-355/356/361) is the ULK1-activity readout characterized in this paper. #gap/needs-replication — Puente 2016 is a single-laboratory study; not yet independently replicated with identical mutant panel.

**Earlier literature context:** Hosokawa 2009 and Ganley 2009 documented that mTOR phosphorylates ATG13 at multiple sites under nutrient-replete conditions and that starvation or rapamycin treatment causes ATG13 dephosphorylation coincident with ULK1 activation. The site-specific mapping in those papers did not resolve individual residues — they identified the phenomenon; Puente 2016 resolved specific mechanistic sites.

---

## Activation mechanism — starvation and AMPK

```
Nutrient-replete:
  mTORC1 active → phospho-ATG13-Ser258 (direct mTOR substrate) → ULK1 complex suppressed
  AMPK active (especially glucose-replete) → phospho-ATG13-Ser224 → additional suppression

Amino acid / serum starvation:
  mTORC1 inhibited → ATG13-Ser258 rapidly dephosphorylated (~15 min)
  AMPK activity also decreases upon amino acid starvation → ATG13-Ser224 dephosphorylated (slower, ~60-120 min)
  ULK1 autophosphorylated / active
  ULK1 transphosphorylates ATG13 (Ser318 confirmed; Ser355/356/361 per UniProt) → complex translocates to PAS
  ULK1 phosphorylates AMBRA1 → PI3KC3/Beclin-1 complex activated
  PI3P generated → WIPI2 / ATG16L1 / ATG5-12 recruited → phagophore elongation
```

**Note on Ser-224 and AMPK:** Puente 2016 demonstrated that AMPK phosphorylates Ser-224 (not dephosphorylates it). Under glucose starvation (which activates AMPK), pSer-224 increases; under amino acid starvation (which suppresses AMPK), pSer-224 decreases alongside pSer-258. Both phosphorylation events are inhibitory — their removal is required for full autophagy induction. The simplest framing is that both mTOR (Ser-258) and AMPK (Ser-224) impose parallel brakes on ATG13; these brakes are simultaneously released during amino acid starvation because AMPK itself decreases under that condition [^puente2016].

ULK1-mediated phosphorylation of ATG13 at Ser-318 (and likely Ser-355/356/361 per UniProt) during active autophagy is thought to sustain and amplify complex activity — a positive feedback arm that contrasts with the inhibitory mTORC1 and AMPK phosphorylations. The net phosphorylation state of ATG13 integrates these opposing kinase inputs.

---

## Role in aging

### Autophagy decline and ULK1 complex destabilization

[[Disabled-macroautophagy]] is a hallmark of aging (López-Otín et al. 2023 expansion). Autophagic flux declines with age across tissues in rodents and humans. ATG13 sits at the apex of this decline — any chronic elevation of mTORC1 activity or suppression of AMPK activity (both common in aged tissues) will converge on hyperphosphorylated ATG13 and reduced ULK1 complex activity. ULK1 complex subunit levels (including ATG13) have been reported to decline in some aged tissue contexts, potentially compounding the phospho-regulatory suppression. #gap/unsourced — specific quantitative evidence for ATG13 protein decline in aged human tissue is not confirmed in this page's primary citations; see [[atg7]] and [[ulk1]] for the broader autophagy-decline evidence base.

### Neurodegeneration relevance

Autophagy initiation defects are linked to neurodegenerative protein aggregation phenotypes (Parkinson's, Alzheimer's, ALS). The ULK1 complex — and ATG13 as its scaffold — is a candidate node where neurodegeneration-associated stressors may impair autophagy. ULK1 complex destabilization (loss of ATG13 or FIP200) in neurons leads to p62/ubiquitin inclusion formation, phenotypically similar to what is observed in ATG7-deficient neurons [^komatsu2006note]. The specific contribution of ATG13 degradation or dysfunction (rather than ULK1 or FIP200) to human neurodegeneration is not established. #gap/no-mechanism #gap/needs-human-replication

### mTOR–ATG13–autophagy longevity axis

The best-validated pharmacological longevity intervention in mammals — mTOR inhibition by rapamycin — works in part by releasing ATG13 from mTORC1-mediated hyperphosphorylation, thereby activating the ULK1 complex and restoring autophagic flux. The requirement of downstream autophagy genes (ATG5, ATG7) for the lifespan-extending effects of mTOR inhibition in worms and flies positions the ULK1 complex (and ATG13) as a required intermediate in the mTOR → autophagy → longevity axis. #gap/needs-human-replication — no human lifespan or healthspan evidence directly implicates ATG13.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ULK1–ATG13–FIP200–ATG101 complex conserved; mTOR and AMPK phospho-sites confirmed in human ATG13 (UniProt O75143) |
| Phenotype conserved in humans? | partial | Autophagic flux declines with human age; direct ATG13-specific data in aged human tissue sparse #gap/unsourced |
| Replicated in humans? | no | No human ATG13 loss-of-function genetic data; indirect evidence via mTOR inhibition trials |

---

## Pathway membership and cross-references

- [[autophagy]] — ATG13 is the primary scaffold of the ULK1 initiation complex, the apex of the autophagy initiation cascade; see that page for the full Stage 1–5 mechanism
- [[mtor]] — mTORC1 directly phosphorylates ATG13 to suppress autophagy initiation; ATG13 is one of two direct mTORC1 substrates within the ULK1 complex (the other being ULK1 itself)
- [[ampk]] — AMPK directly phosphorylates ATG13 at Ser-224, which is inhibitory to autophagy (Puente 2016); AMPK also directly phosphorylates ULK1. Under amino acid starvation, AMPK activity decreases, allowing Ser-224 dephosphorylation alongside mTOR-controlled Ser-258 dephosphorylation [^puente2016]
- [[ulk1]] — kinase partner; ATG13 stabilizes ULK1, and ULK1 transphosphorylates ATG13 during active autophagy; see ulk1.md for PTM site-number caveats (species-specific numbering)
- [[beclin-1]] — downstream of ULK1 complex; ATG13-mediated ULK1 activation triggers AMBRA1 → PI3KC3-Beclin-1 activation → phagophore nucleation
- [[atg7]] — E1-like conjugating enzyme downstream of phagophore initiation; ATG7 activity depends on ATG13/ULK1-initiated phagophore formation for its LC3-II and ATG12–ATG5 conjugation activity
- [[lc3]] — ATG13 interacts with LC3/GABARAP family members via its LIR motif (Ile444/Glu445/Ile446/Leu447); this interaction contributes to ATG13 enrichment at autophagosomal membranes
- [[disabled-macroautophagy]] — hallmark page; chronic mTORC1-mediated ATG13 hyperphosphorylation is a candidate mechanism for autophagy decline in aging
- [[mitophagy]] — ULK1 complex is required for both bulk and selective (PINK1/Parkin-mediated) autophagy; ATG13 is therefore upstream of mitophagy as well

---

## Key interactors

| Interactor | Evidence type | Function |
|---|---|---|
| [[ulk1]] | constitutive complex; co-IP | ATG13 binds ULK1 kinase domain; stabilizes ULK1; required for ULK1 localization to PAS |
| FIP200 (RB1CC1) | constitutive complex; co-IP | ATG13 bridges ULK1 to FIP200; ATG13 + FIP200 additively stimulate ULK1 kinase activity |
| [[atg101]] | constitutive complex; HORMA–HORMA binding | ATG101 binds ATG13 HORMA domain; stabilizes ATG13; required for autophagic activity |
| mTORC1 (RAPTOR) | nutrient-dependent; substrate | mTOR directly phosphorylates ATG13-Ser258 to suppress complex activity [^puente2016] |
| AMPK | nutrient-dependent; substrate | AMPK directly phosphorylates ATG13-Ser224, also inhibitory to autophagy; distinct from mTOR-regulated Ser258; released under amino acid starvation as AMPK activity decreases [^puente2016] |
| LC3/GABARAP family | LIR motif; co-IP | ATG13 LIR (444-447) binds LC3A/B/C and GABARAP/GABARAPL1/2; contributes to autophagosomal membrane association |
| C9orf72 | co-IP (UniProt O75143) | ALS-associated protein; interaction biology in autophagy context partially characterized #gap/no-mechanism |
| TAB2/TAB3 | co-IP (UniProt O75143) | TGF-β-activated kinase (TAK1) adaptors; functional significance in ATG13 context unclear #gap/no-mechanism |

---

## Limitations and knowledge gaps

| Gap | Tag | Notes |
|---|---|---|
| Human ATG13 KO phenotype unknown | #gap/needs-human-replication | No germline or conditional KO reported in humans; phenotype inferred from yeast/mouse Atg13 KO and ULK1 complex disruption studies |
| ATG13 protein levels in aged human tissue | #gap/unsourced | Decline inferred from general autophagy-decline literature; specific ATG13 quantitation in aged human tissue not confirmed in primary citations here |
| Ser-224 kinase identity | #gap/needs-replication | Puente 2016 (primary PDF verified) demonstrates AMPK directly phosphorylates Ser-224 (sensitive to Compound C AMPK antagonist; insensitive to mTOR inhibitors rapamycin/Torin 1); still a single-laboratory study; independent replication not yet confirmed |
| HORMA domain human structure | #gap/needs-replication | Suzuki 2015 (primary PDF verified) used fission yeast Atg101 + Atg13; the human ATG13 HORMA closed conformation and ~1-198 residue boundary are inferred by homology, not directly crystallized; UniProt O75143 does not provide feature-table residue boundaries for the HORMA domain |
| ATG13 disease associations | — | No Mendelian disease directly attributable to ATG13 dysfunction (contrast ATG7 → SCAR31); C9orf72 interaction flagged but functional characterization incomplete |
| ATG101 citation provenance | — | ulk1.md verifier confirmed that Hosokawa 2009 (MBC) and Ganley 2009 (JBC) describe the trimer (no ATG101); ATG101 added by Mercer 2009 and Hosokawa 2009b (Autophagy); any citation of "ULK1–ATG13–FIP200–ATG101 four-subunit complex" to Hosokawa 2009 MBC is an attribution error |
| GenAge canonical ID | #gap/needs-canonical-id | ATG13 not found in GenAge human subset as of 2026-05-04 |

---

## Footnotes

[^hosokawa2009]: [[studies/hosokawa-2009-ulk1-atg13-fip200-mtor]] · doi:10.1091/mbc.e08-12-1248 · n=N/A (biochemical + cell-based) · in-vitro · model: HEK293T, MEF, HeLa, NIH3T3 cells · key finding: ULK1–Atg13–FIP200 trimeric complex (~3 MDa) described; mTORC1 associates with complex via RAPTOR and phosphorylates ATG13 and ULK1; starvation/rapamycin → ATG13 dephosphorylation → ULK1 activation; **ATG101 not described in this paper** · 1,995 citations · locally downloaded (green OA) at 

[^ganley2009]: [[studies/ganley-2009-ulk1-atg13-fip200-essential]] · doi:10.1074/jbc.m900573200 · n=N/A (biochemical + cell-based) · in-vitro · model: MEF and 293T cells · key finding: ULK1·ATG13·FIP200 triple complex essential for starvation-induced autophagy; FIP200 and ATG13 individually and additively stimulate ULK1 kinase; mTOR directly phosphorylates ULK1 and ATG13; **ATG101 not described in this paper** · 1,512 citations · locally downloaded (hybrid OA) at 

[^mercer2009]: doi:10.4161/auto.5.5.8249 · in-vitro (co-IP, knockdown) · model: HEK293T / HeLa cells · key finding: identified ATG101 as a novel human Atg13-binding protein that interacts with ULK1; ATG101 stabilizes Atg13 expression and protects it from proteasomal degradation; ATG101 knockdown suppresses GFP-LC3 dot formation · 417 citations · Mercer CA, Kaliappan A, Dennis PB; Autophagy 2009 · #gap/no-fulltext-access (permanently unverifiable: 0 candidate download URLs — Tandfonline paywall, no PMC deposit; retry attempted 2026-05-04)

[^hosokawa2009b]: doi:10.4161/auto.5.7.9296 · in-vitro (co-IP, knockdown) · model: HEK293T / mouse MEF cells · key finding: Atg101 identified as a mammalian autophagy protein interacting with Atg13; Atg101 stabilizes Atg13 and ULK1 phosphorylation; Atg101 depletion impairs LC3-I→LC3-II conversion; "Atg101 associates with the ULK-Atg13-FIP200 complex, most likely through direct interaction with Atg13" · 458 citations · Hosokawa N et al. (Mizushima lab); Autophagy 2009 · #gap/no-fulltext-access (permanently unverifiable: 0 candidate download URLs — Tandfonline paywall, no PMC deposit; retry attempted 2026-05-04)

[^puente2016]: [[studies/puente-2016-atg13-phosphorylation-autophagy]] · doi:10.1074/jbc.M115.689646 · n=N/A (cell-based biochemical) · in-vitro · model: MEF (ATG13−/− CRISPR + reconstituted), HEK293T, HeLa cells · key finding: Ser-258 is a direct mTOR substrate on ATG13 (in vitro kinase assay confirmed; rapamycin/Torin 1-sensitive); Ser-224 is directly phosphorylated by AMPK (Compound C-sensitive; rapamycin-insensitive); double alanine mutant S224A/S258A shows significantly elevated ULK1 kinase activity (p<0.001) and accelerated starvation-induced autophagosome formation; double glutamic acid mutant suppresses autophagy; Ser-318 used as in-cell ULK1-activity readout; Ser-355/356/361 not characterized · 210 citations · Puente C, Hendrickson RC, Jiang X; J Biol Chem 2016 · locally downloaded at 

[^suzuki2015open]: [[studies/suzuki-2015-horma-autophagy-initiation]] · doi:10.1080/15548627.2015.1091144 · structural/biochemical (X-ray crystallography + structural commentary) · model: **fission yeast** Atg101 in complex with the closed HORMA domain of Atg13 (recombinant fission yeast proteins; not mouse or human ATG13 directly) · key finding: Atg101 HORMA domain = "open" conformation (analogous to O-MAD2), exposing WF finger (Trp/Phe loop) for recruitment of downstream factors (LC3, WIPI1, ZFYVE1/DFCP1); Atg13 HORMA = "closed" conformation (analogous to C-MAD2); ATG101 open-HORMA recruits downstream autophagy effectors; ATG13 closed-HORMA stabilizes Atg101 via heterodimerization. 2-page "Autophagic Punctum" format (short commentary) · 8 citations · Suzuki H, Kaizuka T, Mizushima N, Noda NN; Autophagy 2015 · locally downloaded at 

[^komatsu2006note]: [[studies/komatsu-2006-neuronal-atg7-ko-p62]] · doi:10.1038/nature04723 · cited here as representative of ULK1-complex-downstream neuronal autophagy phenotype; ATG13 itself not directly tested in Komatsu 2006 (which targets Atg7) — ATG13 phenotype inferred by pathway position · locally downloaded at 
