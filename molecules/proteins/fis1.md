---
type: protein
aliases: [TTC11, CGI-135, mitochondrial fission 1 protein, hFis1, FIS1_HUMAN]
uniprot: Q9Y3D6
ncbi-gene: 51024
hgnc: 21689
ensembl: ENSG00000214253
mouse-ortholog: Fis1
genage-id: null
key-domains: [tetratricopeptide-repeat-TPR, transmembrane-anchor, cytoplasmic-lumenal-face]
key-ptms: [Met1-N-acetylation, Ser10-phosphorylation, ubiquitination-by-MARCHF5]
pathways: ["[[mitochondrial-dynamics]]"]
hallmarks: ["[[mitochondrial-dysfunction]]"]
sens-categories: []
known-interactors: ["[[drp1]]", "[[mff]]", "[[mid49]]", "[[mid51]]", "[[marchf5]]", "[[fundc1]]"]
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Primary-source PDFs verified for all 8 OA-available citations (Loson 2013, James 2003, Yoon 2003, Qi 2012, Faitg 2019, Moreira 2018, Ren 2017, Li 2019). Otera 2010 (10.1083/jcb.201007152) is closed-access (not_oa); claims sourced to it retained with #gap/no-fulltext-access. Canonical database fields (UniProt Q9Y3D6, NCBI Gene 51024, Ensembl ENSG00000214253) verified against live UniProt REST and HGNC REST APIs; HGNC corrected from 18076 to 21689."
---

# FIS1 (Mitochondrial Fission 1 Protein)

A small (~17 kDa) tail-anchored protein of the outer mitochondrial membrane (OMM). Originally identified in yeast (*S. cerevisiae* Fis1p) as the primary receptor recruiting the dynamin GTPase Dnm1 (yeast DRP1) to mitochondrial fission sites. For several years after its mammalian homolog was cloned in 2003, hFis1 was assumed to serve the same role. A key 2010 study showed this assumption was wrong: in mammalian cells, MFF — not FIS1 — is the dominant DRP1 receptor [^otera2010]. Human FIS1 plays accessory roles: stress-induced fission, regulation of mitophagy receptor segregation, ER-mitochondria contact site dynamics, and peroxisomal fission. It is also implicated in mitochondrial pathology in neurodegenerative disease via the FIS1-DRP1 protein-protein interaction.

**Historical correction:** Yeast Fis1p IS the primary Dnm1 receptor — this is conserved in invertebrate model organisms. Mammalian FIS1's reduced role is a divergence unique to vertebrates. Many older textbooks and reviews incorrectly extrapolate yeast Fis1p function directly to mammals. See § Yeast-to-mammal divergence below.

## Identity

| Feature | Value |
|---|---|
| UniProt | Q9Y3D6 (FIS1_HUMAN) — Swiss-Prot (manually reviewed) |
| NCBI Gene | 51024 |
| HGNC symbol | FIS1 (HGNC:21689) |
| Ensembl | ENSG00000214253 |
| Gene aliases | TTC11, CGI-135 |
| Canonical length | 152 amino acids |
| Molecular weight | ~17 kDa |
| Mouse ortholog | Fis1 (one-to-one) |

## Structure and topology

FIS1 is a **type II tail-anchored (TA) single-pass membrane protein** with an N-terminal cytoplasmic domain and a C-terminal transmembrane helix that inserts post-translationally into the OMM (and, to a lesser degree, peroxisomal membranes) [^james2003].

Key structural features:

- **Cytoplasmic domain (residues 1–122):** adopts a small helical bundle with an exposed concave surface formed by a **tetratricopeptide repeat (TPR) motif** (residues ~71–104). The TPR surface mediates protein-protein interactions, including the FIS1–DRP1 interaction that is the target of the P110 peptide inhibitor.
- **Transmembrane helix (residues 123–143):** anchors the protein in the OMM bilayer.
- **Short IMS-facing segment (residues 144–152):** minor lumenal exposure; function unclear.

The TPR domain in mammalian FIS1 binds DRP1 but does so with lower affinity and in a more context-dependent manner than in yeast Fis1p — consistent with the secondary, rather than primary, receptor role in mammals [^loson2013].

## Function

### OMM topology and identification

hFis1 was first described in 2003 as a novel OMM-resident protein that, when overexpressed, induced mitochondrial fragmentation and cytochrome c release leading to apoptosis [^james2003]. An independent 2003 study confirmed the fragmentation phenotype and showed DRP1/DLP1 is required for hFis1-driven fission [^yoon2003].

### Mammalian FIS1 is NOT the dominant DRP1 receptor

Otera et al. 2010 used RNAi knockdown in human and mouse cells to show that FIS1 depletion had minimal effect on DRP1 mitochondrial recruitment, while MFF depletion caused striking DRP1 displacement and mitochondrial elongation [^otera2010]. This established MFF ([[mff]]) as the primary mammalian DRP1 receptor. Losón et al. 2013 extended this finding by comparing all four then-known mammalian DRP1 adaptors (FIS1, MFF, MiD49, MiD51) and confirmed that FIS1 plays a quantitatively minor role in baseline DRP1 recruitment [^loson2013]. #gap/needs-replication — the relative contributions of FIS1 vs. MFF may be cell-type- and stress-context-specific; not all cell types have been surveyed.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | FIS1 protein and OMM topology conserved; but DRP1-receptor role diverges from yeast |
| Phenotype conserved in humans? | yes | Mitochondrial fragmentation phenotype is conserved |
| Replicated in humans? | yes | FIS1 knockdown studies performed in human cell lines |

### Stress-induced and accessory fission roles

Although not the dominant baseline DRP1 receptor, FIS1 appears to contribute in specific contexts:

- **Apoptotic and stress-driven fission** — FIS1 expression rises under cellular stress (e.g., staurosporine, mitochondrial membrane depolarization); its overexpression promotes DRP1-dependent mitochondrial fragmentation and cytochrome c release [^james2003] [^yoon2003]. #gap/needs-replication — Whether FIS1 drives stress-specific DRP1 recruitment independently of MFF is contested.
- **Protein aggregate segregation (MAPAs)** — FIS1 participates in fission events that physically separate mitochondria-associated protein aggregates (MAPAs) from the mitochondrial network, enabling their autophagic clearance [^li2019embo]. This is a distinct mitophagy-adjacent quality control role.
- **Peroxisomal fission** — FIS1 also localizes to peroxisomal membranes and contributes to peroxisome division (UniProt Q9Y3D6). The relative importance of FIS1 vs. MFF for peroxisomal fission in humans is not fully established. #gap/unsourced — a dedicated peroxisome fission citation is needed here.

### FIS1–DRP1 interaction and the P110 inhibitor

The FIS1–DRP1 protein-protein interaction (PPI) at the TPR surface represents the molecular basis of FIS1's accessory fission role and is the best-defined druggable interface on FIS1. Qi et al. 2012 designed a cell-permeant peptide inhibitor, **P110**, modelled on the FIS1-binding region of DRP1, which selectively blocks DRP1-FIS1 interaction *in vitro* and in cultured neurons without affecting DRP1 interactions with MFF or other adaptors [^qi2012]. In Parkinson's disease models (MPP+-treated primary rat dopaminergic neurons; MPP+- and rotenone/CCCP-treated human SH-SY5Y neuroblastoma cells), P110 reduced mitochondrial fragmentation, restored membrane potential, reduced ROS, and diminished neurotoxicity. All experiments were performed in cell culture (no in vivo experiments in this paper).

P110 has since been tested in additional neurodegeneration models:
- **ALS:** Chronic P110 treatment in an SOD1-G93A mouse model slowed disease progression, reduced motor neuron loss, and extended survival [^moreira2018]. #gap/needs-human-replication
- **Alzheimer's disease:** Elevated Drp1-FIS1 interaction was observed in AD patient-derived skin fibroblasts (n=5 patients; sporadic AD and familial forms with APOE4, PSEN1, PSEN2 mutations) and APP/Aβ cell models (SH-SY5Y with Aβ₄₂; N2a cells expressing mutant APP KM670/671NL); P110 treatment restored mitochondrial morphology, bioenergetics, and reduced Aβ accumulation in a 5XFAD mouse model [^ren2017]. #gap/needs-human-replication

P110 remains a **research tool** (no clinical trials). Its mechanism-of-action selectivity (FIS1-DRP1 only) makes it useful for dissecting which DRP1 fission events are FIS1-dependent vs MFF-dependent. #gap/needs-replication — independent replication of P110 efficacy across labs has been limited.

## Yeast-to-mammal divergence

A summary of the key evolutionary divergence for wiki cross-checking:

| Feature | Yeast Fis1p | Mammalian FIS1 |
|---|---|---|
| Primary DRP1 receptor? | Yes (Dnm1 receptor, essential) | No (accessory; MFF is dominant) |
| Fission-null phenotype on KO? | Severe elongation | Mild/modest elongation |
| Additional adaptors? | Mdv1p, Caf4p (co-adaptors) | MFF, MiD49, MiD51 (independent receptors) |
| Disease-relevant PPI? | N/A | FIS1-DRP1 at TPR surface (P110 target) |

The two-adaptor model in yeast (Fis1p + Mdv1p/Caf4p) has no direct mammalian equivalent; mammals instead evolved multiple independent DRP1 receptors. This is why yeast genetics does NOT straightforwardly predict the mammalian phenotype of Fis1 loss.

## Role in aging

### Mitochondrial fragmentation in aged tissues

Aging is associated with a shift toward mitochondrial network fragmentation in several post-mitotic or slowly-dividing tissues (skeletal muscle, cardiomyocytes, neurons). Although this shift is mechanistically complex (involves DRP1 activation, MFF upregulation, and OPA1/Mfn2 decline), changes in FIS1 expression have been observed:

- **Aged rat skeletal muscle:** FIS1 protein content was elevated in aged **glycolytic** muscle (white gastrocnemius, GAS) in old ad libitum-fed Sprague-Dawley rats (O-AL, 22-month-old, n=4) vs adult controls (A-AL, 9-month-old, n=9); no significant difference was observed in the oxidative soleus (SOL). Caloric restriction reduced this age-related GAS elevation [^faitg2019]. **Not yet replicated in humans** #gap/needs-human-replication.
- **Neurodegenerative disease models:** FIS1-dependent aberrant DRP1 recruitment is elevated in AD and ALS models; see § FIS1-DRP1 interaction above [^ren2017] [^moreira2018]. These represent acceleration of aging-associated mitochondrial fragmentation.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Mitochondrial fragmentation pathway conserved |
| Phenotype conserved in humans? | partial | Mitochondrial fragmentation observed in aged muscle; FIS1 protein elevation shown only in rat glycolytic (not oxidative) muscle; human data absent |
| Replicated in humans? | no | Aged-muscle FIS1 elevation shown in rat glycolytic muscle only (Faitg 2019); no human aging data |

### Mechanism linking FIS1 to the mitochondrial dysfunction hallmark

Excessive fragmentation driven by FIS1-mediated accessory DRP1 recruitment is proposed to:

1. Impair mitochondrial quality control — fragmented mitochondria are cleared by mitophagy via [[pink1]]/[[parkin]] and receptor-mediated pathways ([[fundc1]], [[bnip3]], [[nix]]); excessive fragmentation may overwhelm this clearance capacity.
2. Promote cytochrome c release — FIS1 overexpression directly induces OMM permeabilisation [^james2003].
3. Impair bioenergetics — highly fragmented networks lose efficient electron transport chain supercomplex assembly (cristae remodelling; see [[opa1]]).
4. Contribute to SASP — fragmented/damaged mitochondria that escape mitophagy activate cGAS-STING via mtDNA release, driving [[chronic-inflammation]]. #gap/no-mechanism — the FIS1-specific contribution to this pathway (vs. DRP1/MFF-driven fragmentation) has not been resolved.

## Pathway membership

- [[mitochondrial-dynamics]] — the core fission/fusion balance pathway; FIS1 is an accessory fission component alongside [[drp1]], [[mff]], [[mid49]], [[mid51]]
- [[mitophagy]] — FIS1 participates in segregating damaged mitochondrial subdomains for autophagic clearance

## Key interactors

- [[drp1]] — primary functional partner; FIS1 TPR domain contacts DRP1 GED; FIS1's role is secondary to MFF as a DRP1 adaptor
- [[mff]] — sibling DRP1 receptor (primary mammalian receptor); co-seeded as part of R25 Tier B mitochondrial-dynamics receptor cluster
- [[mid49]] — third mammalian DRP1 adaptor; co-seeded R25 Tier B stub
- [[mid51]] — fourth mammalian DRP1 adaptor; co-seeded R25 Tier B stub
- [[marchf5]] — E3 ubiquitin ligase that ubiquitinates FIS1 and MFF, regulating their stability at the OMM
- [[fundc1]] — OMM mitophagy receptor; functional interaction via MAPA segregation pathway [^li2019embo]
- [[opa1]] — indirect functional antagonist (fusion vs. fission balance)
- [[mitofusins]] — indirect functional antagonists

## Pharmacology and druggability

**Druggability tier: 3** (high-quality probe exists; no clinical drug). The FIS1-DRP1 PPI is the primary druggable interface. P110 peptide (a cell-permeant peptide blocking DRP1-binding to FIS1's TPR surface) has demonstrated efficacy in multiple neurodegeneration cell and mouse models [^qi2012] [^moreira2018] [^ren2017]. A small-molecule allosteric inhibitor targeting a DRP1 site involved in Fis1-binding was reported in 2023 (doi:10.1038/s41467-023-40043-0; 52 citations) #gap/needs-replication. No FIS1-targeting agent has entered clinical trials for any indication.

No GenAge human aging gene entry (FIS1 not in HAGR/GenAge as of 2026-05-06). No GTEx aging correlation data populated. HGNC ID verified as 21689 and NCBI Gene 51024 confirmed via UniProt REST and HGNC REST APIs on 2026-05-06.

## Limitations and gaps

- `#gap/needs-human-replication` — Aging-associated FIS1 elevation shown only in rat glycolytic muscle (white gastrocnemius; Faitg 2019); not replicated in oxidative muscle nor in any human tissue; no human aging data.
- `#gap/needs-replication` — P110 neuroprotective efficacy relies heavily on the Mochly-Rosen lab; independent replication limited.
- `#gap/no-mechanism` — The specific contribution of FIS1 (vs. MFF-dependent) DRP1 recruitment to age-related mitochondrial fragmentation in vivo is not quantified.
- `#gap/long-term-unknown` — P110 effects at chronic/aging-relevant timescales are not established in normal aging models (only disease models).
- `#gap/unsourced` — FIS1 contribution to peroxisomal fission in humans needs a dedicated citation.
- No Mendelian randomization studies have tested FIS1 as causally related to any aging phenotype (`mr-causal-evidence: not-tested`).
- `gtex-aging-correlation:` field unpopulated — requires GTEx v2 API query per `sops/finding-tissue-expression.md`.

## Footnotes

[^james2003]: doi:10.1074/jbc.M303758200 · James DI et al. · *J Biol Chem* 2003 · in-vitro/in-vivo (human cell lines, Cos7, HeLa) · original identification of hFis1; overexpression drives mitochondrial fragmentation + cytochrome c release; n=multiple experiments · 635 citations (OpenAlex)

[^yoon2003]: doi:10.1128/MCB.23.15.5409-5420.2003 · Yoon Y et al. · *Mol Cell Biol* 2003 · in-vitro (mammalian cells) · hFis1 drives fission via DLP1/DRP1 interaction; DLP1 dominant-negative blocks hFis1 fragmentation phenotype · 803 citations

[^otera2010]: doi:10.1083/jcb.201007152 · Otera H et al. · *J Cell Biol* 2010 · in-vitro (RNAi in human/mouse cells) · MFF (not FIS1) is dominant DRP1 receptor in mammalian cells; FIS1 knockdown minimal effect on DRP1 recruitment · 1073 citations — **not_oa / no local PDF** #gap/no-fulltext-access; claims retained on basis of Loson 2013 corroboration (verified) and Qi 2012 citations to Otera 2010 findings

[^loson2013]: doi:10.1091/mbc.E12-10-0721 · Losón OC et al. · *Mol Biol Cell* 2013 · in-vitro (comparative knockdown of Fis1/Mff/MiD49/MiD51 in HeLa and MEFs) · all four adaptors mediate DRP1 recruitment but with differing efficiencies; FIS1 minor relative to MFF · 1168 citations

[^qi2012]: doi:10.1242/jcs.114439 · Qi X, Qvit N, Su Y-C, Mochly-Rosen D · *J Cell Sci* 2012 (published online; print 2013) · in-vitro (human SH-SY5Y neuroblastoma cells + primary rat dopaminergic neurons; MPP+/CCCP/rotenone stressors; no in vivo experiments) · P110 peptide (1 μM) selectively blocks DRP1-FIS1 interaction; reduces mitochondrial fragmentation, ROS, restores membrane potential, reduces neurite loss in PD cell models · 430 citations

[^moreira2018]: doi:10.15252/emmm.201708166 · Joshi AU et al. · *EMBO Mol Med* 2018 · in-vitro + in-vivo (SOD1-G93A mice; treatment 3 mg/kg/day via osmotic pump from day 90) · P110 slows disease progression (delayed CS3 endpoint, increased disease duration); extends survival from 122±2 days (control, n=7) to 132±2 days (P110, n=14; Mantel-Cox p=0.007); also tested in ALS patient-derived fibroblasts (SOD1, FUS1, TDP-43 mutations) · 174 citations

[^ren2017]: doi:10.18632/oncotarget.23640 · Joshi AU et al. · *Oncotarget* 2018 (published online Dec 2017) · in-vitro + in-vivo (5XFAD mice) · DRP1-FIS1 interaction elevated in AD patient-derived skin fibroblasts (n=5 patients) and Aβ/APP cell models; P110 restores bioenergetics in cell models and reduces Aβ accumulation + cognitive deficits in 5XFAD mice · 134 citations

[^faitg2019]: doi:10.3389/fphys.2019.00420 · Faitg J et al. · *Front Physiol* 2019 · in-vivo (male Sprague-Dawley rats: adult A-AL n=9, old O-AL n=4, old+CR O-CR n=11; soleus [oxidative] and white gastrocnemius [glycolytic]) · FIS1 protein elevated in aged glycolytic muscle (GAS O-AL vs A-AL, p<0.05); no significant change in oxidative soleus; CR reduces GAS FIS1 elevation · n=7–10 per group for Western blot · 69 citations

[^li2019embo]: doi:10.15252/embj.201798786 · Li Y et al. · *EMBO J* 2019 · in-vitro (cell lines, under proteostatic stress) · FIS1-dependent mitochondrial fission segregates protein aggregates (MAPAs) from mitochondria for autophagic clearance · 106 citations
