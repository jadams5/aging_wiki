---
type: protein
aliases: [transcription factor EB, MITF/TFE family member, CLEAR network master regulator]
uniprot: P19484
ncbi-gene: 7942
hgnc: 11753
mouse-ortholog: Tfeb
ensembl: ENSG00000112561
druggability-tier: 3
caused-by: []
causes: []
genage-id: null
key-domains: [bHLH, leucine-zipper, transactivation-domain, nuclear-localization-signal]
key-ptms: [Ser142-phosphorylation, Ser211-phosphorylation, Ser122-phosphorylation]
pathways: ["[[mtor]]", "[[ampk]]", "[[autophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]", "[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[mtor-complex-1]]", "[[14-3-3-proteins]]", "[[calcineurin]]", "[[rag-gtpases]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Settembre 2011 (PDF) and Settembre 2012 (PDF) verified against full text; Roczniak-Ferguson 2012, Medina 2015, and Sardiello 2009 verified against PubMed abstracts only (PDFs are closed-access not_oa); Lapierre 2013 verified against PubMed abstract (PDF download failed). UniProt P19484 identity fields (length, family) cross-checked via REST API. Sardiello 2009 gene-count numerics (471 predicted / 96 confirmed) are not verifiable from abstract alone — see gap note in body. Calmodulin intermediate in Medina 2015 pathway not verifiable from abstract — requires full PDF."
---

# TFEB (Transcription Factor EB)

The master transcriptional regulator of the [[autophagy|autophagy]]–lysosomal pathway. TFEB activates the **CLEAR (Coordinated Lysosomal Expression and Regulation) network** — a gene-expression program encoding autophagy machinery, lysosomal biogenesis, and lipid catabolism genes. Its activity is gated by phosphorylation state: under nutrient-replete conditions, [[mtor|mTORC1]] and ERK2/MAPK phosphorylate TFEB at Ser142 and Ser211 (rapamycin-resistant sites), sequestering it in the cytoplasm; upon starvation or lysosomal stress, dephosphorylation via calcineurin or mTORC1 inactivation releases TFEB for nuclear translocation. TFEB activity declines with age across tissues, contributing to [[disabled-macroautophagy]] and [[loss-of-proteostasis]], and its restoration extends healthy lifespan in multiple model organisms.

## Identity

- **UniProt:** P19484 (TFEB_HUMAN)
- **NCBI Gene:** 7942
- **HGNC symbol:** TFEB
- **Mouse ortholog:** Tfeb (one-to-one ortholog; highly conserved)
- **Length:** 476 amino acids (canonical isoform)
- **Protein family:** MITF/TFE family of basic helix-loop-helix leucine-zipper (bHLH-LZ) transcription factors
- **Paralogs:** [[mitf]], [[tfe3]], [[tfec]] — share CLEAR-element binding capacity; tissue-expression profiles differ

## Key functional domains

- **bHLH domain** — mediates sequence-specific DNA binding to E-box-like CLEAR elements (consensus GTCACGTG) and homodimerization
- **Leucine-zipper** — required for dimerization and stable DNA binding
- **N-terminal transactivation domain** — recruits transcriptional co-activators
- **Nuclear localization signal (NLS)** — masked by 14-3-3 binding when phosphorylated; exposed upon dephosphorylation
- **Regulatory phosphorylation cluster (N-terminal and mid-protein)** — Ser142 and Ser211 are both mTORC1-regulated sites; per Settembre 2012 domain map (Fig. 3C), Ser142 is in the transactivation domain (TACD) region and Ser211 is positioned between the TACD and HLH domains; both are rapamycin-resistant mTORC1 substrates

## The CLEAR network

Sardiello et al. 2009 identified a conserved palindromic 10-bp motif (the CLEAR element, GTCACGTGAC) in the promoters of known lysosomal genes and used it to predict a co-regulated gene network [^sardiello2009]. Most lysosomal genes showed coordinated transcriptional behavior regulated by TFEB; TFEB overexpression induced lysosomal biogenesis and enhanced degradation of complex molecules including mutant huntingtin [^sardiello2009]. The commonly cited figures of **471 candidate CLEAR-network genes** (bioinformatic) and **~96 confirmed core genes** (experimental) are from prior AI extraction attributed to this paper, but could not be verified from the abstract (paper is not_oa). These numbers may be accurate but should not be treated as confirmed until full-text access is obtained. #gap/unsourced #gap/no-fulltext-access Settembre et al. 2011 demonstrated that TFEB is not only a lysosomal biogenesis regulator but also directly activates expression of autophagy genes (including ULK1, BECN1, WIPI, SQSTM1, VPS11, VPS18, ATG9B among 11 significantly upregulated genes out of 51 analyzed, with a strong correlation r=0.42 to starvation-induced expression), establishing it as the master coordinator of the entire autophagy–lysosomal axis [^settembre2011]. Importantly, Settembre 2011 identified **ERK2 (MAPK pathway)** as the principal kinase phosphorylating TFEB at **Ser142** to control nuclear localization — rapamycin had little to no effect on TFEB localization in that paper; it was the ERK inhibitor that phenocopied starvation-induced TFEB nuclear accumulation [^settembre2011].

> **Partial resolution of gap from [[autophagy]].md:** The `#gap/unsourced` note on the "~500 CLEAR genes" figure is partially addressed here. The 471 predicted / 96 confirmed figures are the prior AI extraction's numbers attributed to Sardiello 2009, but could **not** be independently verified in this pass because Sardiello 2009 is closed-access (not_oa) and the abstract does not contain these numbers. These figures remain `#gap/unsourced` pending full-text access. A genome-wide ChIP-seq characterization is in Palmieri 2011 (PMID 21358634), which should be cited for confirmed targets. #gap/unsourced #gap/no-fulltext-access

Key CLEAR-network target categories:

| Category | Representative genes |
|---|---|
| Lysosomal hydrolases | CTSB, CTSD, GBA, HEXA, HEXB |
| Lysosomal membrane proteins | LAMP1, LAMP2, NPC1 |
| Autophagy initiation | ULK1, BECN1 (BECLIN-1) |
| Autophagosome elongation / LC3 | MAP1LC3A, MAP1LC3B, GABARAPL1 |
| Autophagy cargo | SQSTM1 (p62) |
| Lipid catabolism / lipophagy | PNPLA2, LIPE |
| v-ATPase (lysosomal acidification) | ATP6V1A, ATP6V1B2 |

## Regulation — the mTORC1 phospho-switch

Under nutrient-replete conditions, mTORC1 (anchored to the lysosomal surface via the Ragulator complex and [[rag-gtpases]]) directly phosphorylates TFEB. The two papers establishing this mechanism used different approaches and identified different primary sites:

- **Settembre et al. 2012 (EMBO J)** demonstrates that **Ser142** is a key mTORC1 substrate: a phospho-specific Ser142 antibody shows Torin1 (catalytic mTOR inhibitor) but not rapamycin abolishes S142 phosphorylation; in-vitro mTORC1 kinase assay confirms Ser142 as a direct substrate. The same paper identifies **Ser211** as an additional mTORC1-regulated site via systematic serine-to-alanine mutagenesis — S211A causes constitutive nuclear TFEB localization, confirming S211 also controls localization [^settembre2012].
- **Roczniak-Ferguson et al. 2012 (Sci Signal)** independently demonstrates that mTORC1 phosphorylates TFEB at **Ser211** → creates a 14-3-3 binding site → cytoplasmic retention [^roczniak-ferguson2012]. This paper focused on Ser211 as the principal 14-3-3 docking site.

Together, both sites (S142 and S211) are rapamycin-resistant mTORC1 substrates — Torin1 is required to abolish their phosphorylation. The dominant 14-3-3 docking site is Ser211 (per Roczniak-Ferguson); S142 also contributes to localization control (per Settembre 2012, where S142A drives nuclear accumulation).

Upon starvation, mTORC1 inactivates, S142 and S211 are dephosphorylated, TFEB is released from 14-3-3 → NLS exposed → nuclear translocation → transcriptional activation of the CLEAR network [^settembre2012] [^roczniak-ferguson2012].

Pharmacological mTORC1 inhibitors **torin1** and **torin2** drive TFEB nuclear translocation by preventing S142/S211 phosphorylation. **Rapamycin is a partial and allosteric inhibitor**: Settembre 2012 demonstrates that rapamycin (2.5 µM) caused only a partial molecular-weight shift and did not affect TFEB subcellular localization in the high-content assay, whereas Torin1 (EC50 ≈ 148 nM) and Torin2 (EC50 ≈ 1,666 nM) caused massive TFEB nuclear accumulation (the ERK inhibitor U0126 EC50 was ~80,000 nM and showed only partial effect) [^settembre2012]. Rapamycin is therefore a poor TFEB activator at doses routinely used (10 nM–10 µM) despite being an effective mTORC1 substrate inhibitor for other substrates — because S142 and S211 are rapamycin-resistant mTORC1 phosphosites. #gap/dose-response-unclear — the TFEB-specific effective dose-window for Torin1 vs rapalogs is not fully characterized across tissues in vivo.

### mTOR-independent regulation — calcineurin / Ca²+ arm

Medina et al. 2015 identified a second, mTOR-independent regulatory arm [^medina2015]. During lysosomal stress or starvation, lysosomal Ca²+ is released via mucolipin-1 (TRPML1, encoded by MCOLN1), which activates the phosphatase **calcineurin (PP3CB)**. Calcineurin dephosphorylates TFEB → nuclear translocation, independently of mTOR activity [^medina2015]. Genetic and pharmacological inhibition of calcineurin suppressed TFEB nuclear accumulation during starvation and exercise; calcineurin overexpression had the opposite effect; MCOLN1-mediated calcineurin activation was required for autophagy and lysosomal biogenesis induction [^medina2015]. This Ca²+-calcineurin arm allows TFEB activation even under conditions where mTOR remains partially active (e.g., during some forms of cellular stress).

> Note: The calmodulin intermediate (TRPML1 → Ca²+ → calmodulin → calcineurin) is commonly cited in review literature but could not be confirmed from the Medina 2015 abstract alone (paper is not_oa). The abstract states MCOLN1 activates calcineurin directly. Whether calmodulin is an explicit intermediate in the paper's model requires full PDF access. #gap/no-fulltext-access

| Regulatory arm | Sensor | Effector | TFEB site(s) | Net effect |
|---|---|---|---|---|
| mTORC1 (nutrient-replete) | Rag GTPases / Ragulator | mTOR kinase → 14-3-3 (docking at pSer211) | Ser142 (primary per Settembre 2012); Ser211 (primary 14-3-3 dock per Roczniak-Ferguson 2012); both rapamycin-resistant | Cytoplasmic retention |
| ERK2/MAPK (nutrient-replete) | Growth factors / nutrients | ERK2 kinase | Ser142 (per Settembre 2011) | Cytoplasmic retention (partial) |
| mTORC1 inactivation (starvation) | Rag GTPases OFF | Dephosphorylation of S142/S211 | Ser142 + Ser211 dephospho | Nuclear translocation |
| Ca²+-calcineurin (lysosomal stress) | TRPML1/MCOLN1 → lysosomal Ca²+ | Calcineurin (PP3CB) | Multiple sites dephospho (specific residues not confirmed from abstract) | Nuclear translocation, mTOR-independent |

### AMPK connection

[[ampk|AMPK]] activates TFEB indirectly via mTORC1 suppression (AMPK phosphorylates Raptor and TSC2 to inhibit mTORC1), thus relieving the cytoplasmic retention of TFEB. Whether AMPK phosphorylates TFEB directly is an open question. #gap/no-mechanism — direct AMPK-TFEB phosphorylation has been proposed in some contexts but is not well established in the primary literature; the dominant pathway is indirect (via mTORC1).

## Active TFEB — transcriptional outputs

Once in the nucleus, TFEB binds CLEAR elements and drives expression of the autophagy–lysosomal gene program. Downstream functional consequences:

- **Autophagosome formation** — via ULK1, BECN1, ATG7, LC3 upregulation
- **Autophagosome–lysosome fusion** — via LAMP1, LAMP2 upregulation
- **Lysosomal biogenesis** — increased lysosome number and size
- **Lysosomal acidification** — via v-ATPase subunit upregulation
- **Lipophagy** — lipid droplet autophagy activated via lipase and lipophagy receptor upregulation [^settembre2011]
- **Lysosomal exocytosis** — TFEB also promotes secretory lysosome fusion with the plasma membrane, a mechanism cells use to expel indigestible aggregates

This feedback loop is self-reinforcing: lysosomal degradation of autophagic cargo releases amino acids that can re-activate mTORC1 (via Rag GTPases sensing intra-lysosomal amino acids), which then re-phosphorylates TFEB — a homeostatic cycle coupling nutrient sensing to lysosomal capacity.

## TFEB in aging

### Decline of TFEB activity in aged tissues

TFEB target gene expression — lysosomal and autophagy genes — declines with age in multiple tissues, consistent with reduced TFEB activity contributing to the age-related autophagy deficit. #gap/unsourced — the direct measurement of TFEB nuclear occupancy and CLEAR-network expression in aged human tissues lacks a single comprehensive primary citation; multiple studies report individual target gene declines. A genome-wide ChIP-seq aging dataset in human tissue is lacking.

### TFEB overexpression rescues aging phenotypes in mice

Genetic overexpression of TFEB in mouse liver results in enhanced autophagy flux, reduced lipid accumulation, and improved metabolic parameters. Tissue-specific TFEB overexpression in the context of aging (muscle, brain, liver) has shown proof-of-concept benefits in mouse models. #gap/needs-human-replication — all mouse overexpression data; no equivalent human genetic evidence.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | mTORC1-TFEB-14-3-3 axis and CLEAR elements are fully conserved in human; TFEB target gene promoter motifs identified in human genome by Sardiello 2009 |
| Phenotype conserved in humans? | partial | TFEB loss-of-function associated with lysosomal storage diseases (Birt-Hogg-Dubé via FLCN interaction); TFEB amplification seen in renal cell carcinoma |
| Replicated in humans? | no | No human aging intervention trial directly targeting TFEB |

### C. elegans ortholog HLH-30 — longevity function

The TFEB ortholog in *C. elegans* is **HLH-30**. Lapierre et al. 2013 showed that HLH-30 is required for the lifespan extension conferred by **six mechanistically distinct longevity models** in *C. elegans* [^lapierre2013]. Specifically:

- HLH-30 nuclear localization increases in all six longevity models tested
- *hlh-30* is essential for extended lifespan in six mechanistically distinct longevity paradigms (the abstract specifies six; the eat-2 DR model and daf-2 IIS-reduced model are among them but the full set of six covers additional pathways)
- HLH-30 activates autophagy gene expression in a manner analogous to mammalian TFEB
- Overexpression of HLH-30 extends lifespan in *C. elegans* [^lapierre2013]
- Nuclear TFEB levels are also augmented in **mouse liver** under dietary restriction, linking the worm and mammalian findings [^lapierre2013]

This establishes TFEB/HLH-30 as a mechanistic convergence point downstream of multiple canonical longevity pathways — not merely a correlate of autophagy but causally required for the lifespan benefits of diverse longevity interventions. The wiki's prior description (eat-2 and daf-2 only) understated the scope — the paper tested six models. #gap/needs-human-replication — the mouse liver dietary restriction finding is correlative (nuclear TFEB levels), not interventional.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TFEB is the direct mammalian ortholog; CLEAR element binding is conserved |
| Phenotype conserved in humans? | unknown | Longevity benefit of TFEB in human aging tissue not tested |
| Replicated in humans? | no | Worm-only data #gap/needs-human-replication |

## Pathway membership

- [[autophagy]] — TFEB is the master transcriptional activator of the autophagy gene program
- [[mtor]] — mTORC1 phosphorylates and retains TFEB; inactivation of mTORC1 is the dominant TFEB-activating signal
- [[ampk]] — AMPK activates TFEB indirectly via mTORC1 suppression
- [[ulk1]] — *ULK1* is a direct TFEB transcriptional target (CLEAR network); TFEB–ULK1 axis provides transcriptional amplification of autophagy induction

## Pharmacological relevance

No clinical-stage TFEB-activating compound exists in aging specifically. Relevant pharmacology:

- **Rapamycin / rapalogs** — mTORC1 inhibition → TFEB activation (partial; rapamycin is allosteric, less effective than catalytic inhibitors for TFEB)
- **Torin1** — catalytic mTOR inhibitor; potent TFEB activator in vitro; not clinical
- **Metformin** — AMPK activator → indirect TFEB activation via mTORC1 suppression
- **TRPML1 (mucolipin-1) agonists** — ML-SA1 and related compounds activate the Ca²+-calcineurin-TFEB arm; preclinical only
- **Trehalose** — proposed to activate TFEB in an mTOR-independent manner; mechanism disputed #gap/no-mechanism

## Known interactors

- [[mtor-complex-1]] — phosphorylates TFEB at Ser142 (primary kinase assay site, Settembre 2012) and Ser211 (additional site, Settembre 2012; primary 14-3-3 dock, Roczniak-Ferguson 2012); both are rapamycin-resistant phosphosites; central negative regulator
- [[14-3-3-proteins]] — bind phospho-Ser211 (per Roczniak-Ferguson 2012), sequester TFEB in cytosol
- [[calcineurin]] — dephosphorylates TFEB; activated by lysosomal Ca²+ release via TRPML1
- [[rag-gtpases]] — recruit mTORC1 to lysosomal surface; Rag GTPase activity gates the nutrient-sensing input to TFEB
- [[tfe3]] — paralog with largely overlapping CLEAR-network targets; TFE3 and TFEB show partial functional redundancy in some tissues

## Limitations and gaps

- **CLEAR network gene count** — The frequently cited "~500" figure refers to bioinformatic candidates from Sardiello 2009 (471 predicted per prior extraction); the experimentally confirmed core set is smaller (~96 per prior extraction). These figures are NOT in the Sardiello 2009 abstract and the full PDF is closed-access — they could not be verified in this pass. A genome-wide ChIP-seq characterization (Palmieri 2011, PMID 21358634) should be cited for confirmed targets. #gap/unsourced #gap/no-fulltext-access
- **Calmodulin as TRPML1→calcineurin intermediate** — The wiki body states "lysosomal Ca²+ is released via mucolipin-1 (TRPML1) → calmodulin → calcineurin." The Medina 2015 abstract only states MCOLN1 activates calcineurin directly; calmodulin as the intermediate Ca²+-sensor is not in the abstract. This mechanistic detail requires verification against the Medina 2015 full PDF (not_oa). #gap/no-fulltext-access
- **Lapierre 2013 six longevity models** — The paper demonstrates HLH-30 is required for six mechanistically distinct longevity models; the original wiki extraction stated only eat-2 (DR) and daf-2 (IIS). The other four models are not specified in the abstract. The full paper is needed to enumerate all six. #gap/no-fulltext-access (download failed)
- **ERK2 vs mTORC1 as primary regulator** — Settembre 2011 identifies ERK2 as the primary TFEB kinase (S142), with rapamycin having minimal effect; Settembre 2012 establishes mTORC1 as primary at S142/S211 with rapamycin-resistant sites. These are not contradictory (both phosphorylate S142) but the relative contributions of ERK2 vs mTORC1 to TFEB regulation in different physiological contexts remain incompletely resolved.
- **Human aging tissue data** — Direct measurement of TFEB nuclear localization or ChIP-seq occupancy in aged vs. young human tissue is lacking. Indirect evidence (age-related decline in lysosomal gene expression) exists in databases but has not been systematically attributed to TFEB in a primary study. #gap/needs-human-replication
- **AMPK → TFEB direct phosphorylation** — Whether AMPK directly phosphorylates TFEB (vs. acting only via mTORC1) is unresolved. #gap/no-mechanism
- **Therapeutic window** — Chronic TFEB overactivation risks aberrant lysosomal exocytosis, inflammation (via TFEB regulation of immune gene expression), and — given TFEB amplification in renal cell carcinoma — potential oncogenic effects at supraphysiological levels. Dose-response for aging benefit is not characterized in any mammalian system. #gap/dose-response-unclear
- **GenAge entry** — A GenAge ID for TFEB is not confirmed in this extraction; check `https://genomics.senescence.info/genes/` for a current entry. #gap/needs-canonical-id

## Footnotes

[^sardiello2009]: doi:10.1126/science.1174447 · Sardiello M et al. (Science, 2009) · in-vitro + bioinformatic · model: cultured cells (specific cell lines not confirmed from abstract; paper is not_oa) · most lysosomal genes show coordinated transcriptional behavior regulated by TFEB; TFEB overexpression induces lysosomal biogenesis; TFEB activation clears pathogenic proteins including mutant huntingtin; identified CLEAR element and TFEB as master lysosomal biogenesis regulator; 2434 citations · note: the "471 predicted / 96 confirmed" gene-count figures cited in body are not in the abstract and could not be verified (no PDF access); these figures are from prior wiki extraction and remain #gap/unsourced pending full-text access · #gap/no-fulltext-access

[^settembre2011]: doi:10.1126/science.1204592 · Settembre C et al. (Science, 2011) · in-vivo + in-vitro · model: HeLa, COS7, MEFs, mouse liver (AAV-Tfeb and conditional Tcfeb transgenic) · TFEB coordinates autophagy and lysosomal biogenesis via a shared transcriptional program; ERK2 (MAPK) phosphorylates TFEB at Ser142 to control nuclear localization — rapamycin had minimal effect, Pearson r=0.42 between TFEB overexpression and starvation-induced autophagy gene expression (P=0.001, n=51 autophagy genes); 3131 citations

[^settembre2012]: doi:10.1038/emboj.2012.32 · Settembre C et al. (EMBO J, 2012) · in-vitro + in-vivo · model: HeLa, HEK-293T, MEFs (Sin1−/− and TSC2−/−), mouse primary hepatocytes (Tcfeb conditional KO) · mTORC1 phosphorylates TFEB: primary site Ser142 (confirmed by phospho-antibody and in-vitro kinase assay); additional site Ser211 (identified by S211A mutagenesis causing constitutive nuclear TFEB); Rag GTPases necessary and sufficient for mTORC1-mediated TFEB retention; Torin1 EC50 ≈ 148 nM for TFEB nuclear translocation vs rapamycin EC50 ≈ 104,000 nM (rapamycin-resistant phosphosites); lysosome-to-nucleus sensing mechanism; 1865 citations

[^roczniak-ferguson2012]: doi:10.1126/scisignal.2002790 · Roczniak-Ferguson A et al. (Sci Signal, 2012) · in-vitro · model: not confirmed from full text (paper is not_oa; abstract verified) · mTOR-dependent phosphorylation of TFEB at Ser211 → 14-3-3 binding → cytoplasmic retention; reduced mTOR-dependent phosphorylation upon lysosomal dysfunction → TFEB nuclear translocation → lysosomal biogenesis genes; MITF and TFE3 similarly regulated; 1313 citations · #gap/no-fulltext-access

[^medina2015]: doi:10.1038/ncb3114 · Medina DL et al. (Nat Cell Biol, 2015) · in-vitro + in-vivo · model: not confirmed from full text (paper is not_oa; abstract verified) · lysosomal Ca²+ release via mucolipin 1 (MCOLN1/TRPML1) → calcineurin activation → calcineurin dephosphorylates TFEB → nuclear translocation; genetic and pharmacological calcineurin inhibition suppressed TFEB activity during starvation and exercise; MCOLN1-mediated calcineurin activation required for autophagy and lysosomal biogenesis induction via TFEB; identifies lysosome as signalling hub; 1335 citations · note: calmodulin as intermediate (cited in wiki body) not confirmed from abstract alone — requires full PDF · #gap/no-fulltext-access

[^lapierre2013]: doi:10.1038/ncomms3267 · Lapierre LR et al. (Nat Commun, 2013) · in-vivo · model: Caenorhabditis elegans + mouse liver (dietary restriction correlate) · HLH-30 (TFEB ortholog) is essential for extended lifespan in six mechanistically distinct longevity models (not only eat-2/DR and daf-2/IIS as previously described); HLH-30 overexpression extends lifespan; nuclear HLH-30 increases in all six longevity models; nuclear TFEB also elevated in mouse liver under dietary restriction; 524 citations · note: PDF download failed (bronze OA but URL filter excluded); abstract verified via PubMed PMID 23925298
