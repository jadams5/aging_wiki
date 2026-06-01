---
type: protein
aliases: [PTEN-induced kinase 1, PARK6, PINK1 kinase]
uniprot: Q9BXM7
ncbi-gene: 65018
hgnc: 14581
ensembl: ENSG00000158828
mouse-ortholog: Pink1
druggability-tier: 2
caused-by: []
causes: []
key-domains: [mitochondrial-targeting-sequence, transmembrane, kinase-domain]
key-ptms: [Ser228-autophosphorylation, Ser402-autophosphorylation, Ser65-ubiquitin-phosphorylation]
pathways: ["[[mitophagy]]", "[[pink1-parkin-pathway]]", "[[autophagy]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
known-interactors: ["[[parkin]]", "[[tomm20]]", "[[parl]]", "[[mpp]]", "[[ubiquitin]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Narendra 2008, Narendra 2010, Kane 2014, Kazlauskaite 2014, and Onishi 2021 verified against primary source PDFs. Valente 2004 unverifiable (DOI lookup failed; green OA via figshare returned HTTP 202 / no PDF; paper is Science paywalled — tagged #gap/no-fulltext-access for that claim cluster). UniProt Q9BXM7 identity fields (NCBI Gene 65018, HGNC 14581) not independently re-verified against canonical databases."
---


# PINK1

PINK1 (PTEN-induced kinase 1) is a mitochondria-targeted serine/threonine kinase and the master damage sensor of the [[pink1-parkin-pathway]]. On healthy mitochondria, PINK1 is constitutively imported, cleaved, and degraded — keeping cytosolic levels near zero. When mitochondrial membrane potential (ΔΨm) collapses, import fails, full-length PINK1 accumulates on the outer mitochondrial membrane (OMM), autophosphorylates, and phosphorylates ubiquitin at Ser65 — the trigger that recruits and activates [[parkin]] to ubiquitinate OMM cargo for selective autophagic degradation ([[mitophagy]]). Loss-of-function mutations in PINK1 (PARK6) cause autosomal recessive early-onset Parkinson's disease [^valente2004], establishing that this pathway is non-redundant for dopaminergic neuron survival in humans.

## Identity

| Field | Value |
|---|---|
| UniProt | Q9BXM7 (PINK1_HUMAN) |
| NCBI Gene | 65018 |
| HGNC | 14581 |
| Mouse ortholog | Pink1 (one-to-one; functionally conserved) |
| Canonical isoform length | 581 amino acids |
| Molecular weight | ~64 kDa (full-length); ~52 kDa (cleaved cytosolic form) |
| Gene locus | 1p36.12 |

## Domain structure

| Domain | Residues (approx.) | Function |
|---|---|---|
| Mitochondrial targeting sequence (MTS) | 1–34 | Directs import; cleaved by MPP in matrix |
| Transmembrane domain (TM) | 85–110 | OMM anchoring; retains PINK1 on OMM when ΔΨm is lost |
| Kinase domain | 156–511 | Catalytic serine/threonine kinase activity; N-lobe (156–~320) + C-lobe (~320–511); contains three unique insert regions (i1, i2, i3) |
| C-terminal regulatory region (CTR) | 511–581 | Conserved among PINK1 homologs; modulates kinase activation; four α-helices supporting C-lobe from backside |

The transmembrane domain is the critical topological determinant: on healthy mitochondria, TM is threaded into the inner membrane (IM) by the TIM23 import complex en route to full import, but when ΔΨm collapses the TIM23 channel stalls, leaving TM anchored in the OMM. PINK1 is thus a direct electropotential sensor [^narendra2010].

## Regulation by import-cleavage-degradation on healthy mitochondria

On polarized (healthy) mitochondria, the canonical fate of newly synthesized PINK1 is rapid elimination via a two-protease cascade [^onishi2021]:

1. **MTS cleavage by MPP** — the MTS (residues 1–34) is removed in the mitochondrial matrix by the mitochondrial processing peptidase (MPP), producing an intermediate ~60 kDa form.
2. **PARL cleavage within the TM segment** — the rhomboid protease PARL (Presenilin-associated rhomboid-like) cleaves within the TM segment, releasing the ~52 kDa fragment into the intermembrane space (IMS) / cytosol. The cleavage position is cited as Ala103 in structural literature (Deas et al. 2011; Kazlauskaite et al. 2014 intro). *Note: Narendra et al. 2010 reported that PARL knockdown/knockout does not appreciably change PINK1 cleavage in mammalian cells, suggesting PARL may not be the sole or primary mammalian cleavage protease; the identity of the responsible mammalian protease(s) remained uncertain as of that paper. Onishi et al. 2021 treats PARL as the canonical model.* #gap/contradictory-evidence
3. **N-degron pathway degradation** — the ~52 kDa fragment exposes a destabilizing Phe residue at its new N-terminus (the "Phe/N-degron"), which is recognized by UBR-family E3 ubiquitin ligases in the cytosol, leading to rapid proteasomal degradation.

The result is that PINK1 protein half-life on healthy mitochondria is extremely short (minutes), keeping steady-state OMM levels near zero. This continuous import-and-destroy cycle is the biochemical basis of PINK1's function as a **sentinel**: any perturbation that stops import (ΔΨm loss) breaks the cycle and causes PINK1 to accumulate selectively on the damaged organelle [^narendra2010].

## Activation on damaged mitochondria

When ΔΨm collapses (from respiratory chain dysfunction, ROS, mtDNA mutations, or pharmacological depolarization with CCCP/valinomycin), the TIM23 import channel stalls and full-length PINK1 (~64 kDa) is retained on the OMM with its kinase domain facing the cytosol [^narendra2010]. The subsequent activation cascade [^onishi2021]:

| Step | Event |
|---|---|
| **OMM stabilization** | Full-length PINK1 accumulates; TM anchored in OMM; kinase domain cytosolic |
| **Dimerization** | OMM-accumulated PINK1 forms dimers (required for trans-autophosphorylation) |
| **Autophosphorylation Ser228** | Trans-autophosphorylation at Ser228 activates kinase; Ser402 is a second autophosphorylation site [^onishi2021] |
| **Ubiquitin phosphorylation (Ser65-Ub)** | Active PINK1 phosphorylates free ubiquitin and ubiquitin chains at Ser65; this is the primary activating signal for Parkin [^kane2014] [^kazlauskaite2014] |
| **Parkin recruitment** | Cytosolic [[parkin]] (autoinhibited) is recruited to the OMM; phospho-Ser65-Ub allosterically releases Parkin's autoinhibitory Ubl domain from the RING0/UPD catalytic core, opening the active site [^onishi2021] |
| **Parkin activation** | PINK1 also directly phosphorylates Parkin at Ser65 within its own UBL domain, fully activating Parkin E3 ligase activity [^kazlauskaite2014] |
| **Feed-forward amplification** | Active Parkin ubiquitinates OMM substrates → more ubiquitin available → PINK1 generates more phospho-Ser65-Ub → recruits more Parkin; self-amplifying loop |

The parallel discovery of PINK1-mediated ubiquitin Ser65 phosphorylation by two independent groups in 2014 (Kane et al. at J Cell Biol [^kane2014] and Kazlauskaite et al. at Biochem J [^kazlauskaite2014]) established this as the key biochemical event connecting PINK1 kinase activity to Parkin recruitment.

## Role in Parkinson's disease (PARK6)

Loss-of-function mutations in PINK1 cause **PARK6**, an autosomal recessive early-onset Parkinson's disease clinically indistinguishable from idiopathic PD except for younger onset (typically second–fifth decade) [^valente2004]. Valente et al. 2004 mapped PARK6 in Sicilian kindreds and identified homozygous PINK1 missense mutations (including Gly309Asp) as causal, with obligate heterozygote carriers being asymptomatic — confirming recessive inheritance [^valente2004]. #gap/no-fulltext-access — Valente 2004 full-text PDF could not be retrieved from the archive (figshare OA link failed; Science paywalled); specific mutation names, kindred sizes, and all quantitative claims from this paper are unverified against the primary source.

Key disease biology:

- Dopaminergic neurons of the substantia nigra pars compacta (SNpc) are disproportionately vulnerable — they are high-energy, post-mitotic, and heavily reliant on mitophagy for mitochondrial quality control.
- PINK1 KO mouse models show impaired mitochondrial respiration and elevated ROS but relatively mild motor deficits, likely due to compensatory mechanisms absent in long-lived human neurons [^narendra2010]. #gap/needs-human-replication — direct evidence that PINK1-driven mitophagy flux is lower in PARK6 patient neurons in vivo comes primarily from iPSC-derived neurons, not post-mortem tissue.
- PINK1 mutations causing PARK6 span the kinase domain (e.g., Gly309Asp, Trp437X, Leu347Pro) and abolish or severely reduce kinase activity toward ubiquitin and/or autophosphorylation [^valente2004]. #gap/no-fulltext-access

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — PINK1/Parkin mitophagy is conserved; Gly309Asp and other KD mutations abolish human kinase activity |
| Phenotype conserved in humans? | yes — PARK6 is the definitive human loss-of-function phenotype |
| Replicated in humans? | yes (genetic epidemiology; multiple independent kindreds) |

## Role in aging (non-PD context)

Beyond genetic Parkinson's, PINK1 is relevant to the normal aging process:

**Declining expression and activity with age.** PINK1 protein levels are reported to decrease in aged brain and skeletal muscle in rodent studies, contributing to reduced mitophagy flux in post-mitotic tissues (further evidence reviewed in [^onishi2021]). A 2024 preprint (Escobar et al., bioRxiv 10.1101/2024.04.29.591753) reports altered PINK1-PRKN signaling across tissue types during normal mouse aging, with enhanced enzymatic activity in cardiac tissue — the direction of change may be tissue-specific. #gap/needs-replication — preprint; not yet peer-reviewed; tissue-specific age trajectories require human validation.

**Muscle aging and sarcopenia.** Mitophagy decline driven in part by reduced PINK1 activity contributes to accumulation of dysfunctional mitochondria in aged skeletal muscle fibers, which cannot dilute damaged organelles by cell division. This contributes to the energetic deficits and oxidative stress underlying [[sarcopenia]] [^onishi2021]. #gap/needs-human-replication — causality from PINK1 specifically (vs. other mitophagy regulators) established in rodents; human skeletal-muscle PINK1 flux data is limited.

**Neurodegeneration beyond PD.** Impaired PINK1-mediated mitophagy has been implicated in Alzheimer's disease pathology — mitophagy induction reduces amyloid-beta and tau accumulation in mouse AD models — though the PINK1-specific contribution versus receptor-mediated mitophagy arms is not resolved [^onishi2021]. #gap/no-mechanism

**Mitochondrial ROS and inflammaging.** Failed PINK1/Parkin mitophagy leads to accumulation of depolarized, ROS-generating mitochondria that can activate the NLRP3 inflammasome and sustain chronic sterile inflammation ([[inflammaging]]). This connects PINK1 loss-of-function at the molecular level to the [[mitochondrial-dysfunction]] and [[chronic-inflammation]] hallmarks of aging. #gap/unsourced — direct mechanistic evidence linking PINK1 specifically (vs. general mitophagy failure) to NLRP3/inflammasome in aged human tissues needs primary citation.

## Key interactors

| Interactor | Relationship | Functional relevance |
|---|---|---|
| [[parkin]] | Direct substrate + allosteric activator | Primary downstream effector; E3 ubiquitin ligase for OMM ubiquitination |
| [[tomm20]] | OMM docking partner | PINK1 retained at TOM complex on OMM when import stalls |
| MPP (matrix processing peptidase) | Upstream protease | Cleaves MTS (residues 1–34) during normal import |
| PARL | Upstream protease (IM) | Cleaves at ~Ala103 within TM; produces destabilizing Phe/N-degron |
| [[ubiquitin]] | Direct substrate | PINK1 phosphorylates ubiquitin Ser65; this is the activating modification for Parkin |
| UBR proteins (E3s) | Downstream (cytosolic degradation) | Recognize Phe/N-degron on ~52 kDa PINK1 fragment; target for proteasomal degradation |

## Pathway membership

- [[mitophagy]] — PINK1 is the initiating sensor of the ubiquitin-based mitophagy arm; see that page for full mechanism.
- [[pink1-parkin-pathway]] — dedicated pathway page (implicit stub); covers the PINK1 → phospho-Ub → Parkin → OMM ubiquitination → receptor engagement cascade.
- [[autophagy]] — parent process; PINK1/Parkin feeds into the general autophagosome–lysosome machinery via adaptor proteins OPTN, NDP52, p62.

## Pharmacology and therapeutic relevance

No approved drugs directly target PINK1. Therapeutic strategies in development or preclinical testing:

- **PINK1 activators** — small molecules that stabilize or activate PINK1 kinase activity on OMM are being explored as potential neuroprotective agents in PD. #gap/needs-replication — no clinical-stage candidates as of 2026.
- **Mitophagy inducers** (e.g., [[urolithin-a]], NAD+ precursors) act downstream of or parallel to PINK1 — partially bypassing the PINK1 requirement via receptor-mediated mitophagy (BNIP3, FUNDC1, NIX arms).
- **Gene therapy** — AAV-mediated PINK1 delivery to SNpc is in preclinical evaluation for PARK6 PD. #gap/needs-replication — no published human trials as of 2026.

ClinicalTrials.gov: no PINK1-specific interventional trials for aging endpoints identified. PINK1 genetic status is assessed in PD trials (patient stratification), not used as a direct intervention target. #gap/needs-canonical-id — ClinicalTrials.gov search for "PINK1 aging" should be rechecked at verification.

## Limitations and gaps

- PINK1 KO mouse models show milder motor and dopaminergic phenotypes than human PARK6 patients — the degree of translational validity from mouse to human neurodegeneration is uncertain. #gap/needs-human-replication
- Quantitative data on PINK1 protein levels and kinase activity in aged human tissues (brain, muscle, heart) is sparse; most flux data is from cell culture or rodent models. #gap/needs-human-replication
- Whether declining PINK1 activity in aged post-mitotic tissues is a cause or consequence of mitochondrial dysfunction, and whether restoring PINK1 activity alone is sufficient to reverse aging-related mitophagy decline, is unresolved. #gap/no-mechanism
- The identity of the mammalian PINK1 TM-segment protease is contested: Narendra 2010 found PARL knockdown/KO did not reduce PINK1 cleavage in mammalian cells; Kazlauskaite 2014 (intro) and Kane 2014 (intro) treat PARL + cleavage at Ala103 as established. The discrepancy may reflect cell-type differences or redundancy with other proteases. #gap/contradictory-evidence
- GenAge entry ID for PINK1 not confirmed — tagged #gap/needs-canonical-id.

## Related pages

- [[mitophagy]] — process page; full PINK1/Parkin mechanism and aging context
- [[pink1-parkin-pathway]] — dedicated pathway page (implicit stub)
- [[parkin]] — downstream E3 ubiquitin ligase; direct PINK1 substrate (implicit stub)
- [[p62]] — autophagy receptor acting downstream of PINK1-generated phospho-Ub (implicit stub)
- [[optn]] — primary autophagy receptor for PINK1/Parkin pathway (implicit stub)
- [[ndp52]] — co-primary autophagy receptor (implicit stub)
- [[mitochondrial-dysfunction]] — hallmark; accumulation of dysfunctional mitochondria when PINK1 fails
- [[disabled-macroautophagy]] — hallmark; mitophagy is a selective subtype
- [[parkinsons-disease]] — disease entity for PINK1 loss-of-function (implicit stub)
- [[sarcopenia]] — phenotype driven in part by mitophagy decline
- [[inflammaging]] — downstream consequence of accumulated dysfunctional mitochondria
- [[urolithin-a]] — compound that induces mitophagy partially independently of PINK1

## Footnotes

[^valente2004]: doi:10.1126/science.1096284 · in-vivo (human genetics + cell biology) · Valente et al. 2004 Science · n=multiple PARK6 kindreds (Sicilian families) · autosomal recessive inheritance confirmed; PINK1 missense mutations (Gly309Asp, Trp437X, Leu347Pro) identified in homozygous affected; obligate heterozygotes asymptomatic; kinase-domain mutations abolish function · UNVERIFIED: DOI lookup failed (figshare OA link returned HTTP 202; paper is Science paywalled) — claims from this source are not verified against the full PDF #gap/no-fulltext-access

[^narendra2008]: doi:10.1083/jcb.200809125 · in-vitro · Narendra et al. 2008 J Cell Biol · model: HEK293 cells, HeLa cells, rat cortical neurons, MEFs (including Mfn1−/−Mfn2−/−) · Parkin selectively recruited from cytosol to mitochondria with collapsed ΔΨm (CCCP, paraquat) and promotes their autophagic degradation; ~80% of HEK293 cells showed Parkin mitochondrial recruitment after 1 h CCCP; recruitment requires depolarization not merely mitochondrial fragmentation; foundational PINK1/Parkin pathway observation · local PDF available

[^narendra2010]: doi:10.1371/journal.pbio.1000298 · in-vitro · Narendra et al. 2010 PLoS Biol · model: HeLa cells + primary MEFs (PINK1+/+ and PINK1−/−) + M17 human neuroblastoma · PINK1 is both necessary and sufficient for Parkin recruitment to depolarized mitochondria; full-length PINK1 (~63 kDa) accumulates selectively on impaired OMM via inhibition of voltage-sensitive proteolytic cleavage; establishes PINK1 as the mitochondrial electropotential sensor; PARL knockdown/KO did not appreciably affect PINK1 cleavage in mammalian cells (contrasts with Drosophila where Rhomboid-7 is required) · local PDF available

[^kane2014]: doi:10.1083/jcb.201402104 · in-vitro · Kane et al. 2014 J Cell Biol · model: HeLa cells + PINK1 WT and KO cell lines + biochemical reconstitution with recombinant TcPINK1 · PINK1 directly phosphorylates ubiquitin at Ser65 (identified by MS; phosphopeptide TLSDYNIQKEpSTLHLVLR confirmed by ETD and HCD); phospho-Ser65-Ub activates Parkin E3 ligase activity in vitro and promotes Parkin translocation to damaged mitochondria; UbS65A expression inhibits Parkin mitochondrial translocation by >50%; parallel discovery with Kazlauskaite 2014 · local PDF available

[^kazlauskaite2014]: doi:10.1042/bj20140334 · in-vitro · Kazlauskaite et al. 2014 Biochem J · model: Flp-In T-Rex HEK-293 cells + E. coli recombinant TcPINK1 · PINK1-dependent ubiquitin Ser65 phosphorylation activates Parkin; phospho-Ub enriched ~14-fold in PINK1 WT vs. kinase-inactive cells by SILAC-MS; PINK1 directly phosphorylates Parkin UBL domain at Ser65; both phosphorylations required for full Parkin E3 ligase activation; independent parallel discovery with Kane 2014 · local PDF available

[^onishi2021]: doi:10.15252/embj.2020104705 · review · Onishi, Yamano, Sato, Matsuda & Okamoto 2021 EMBO J · comprehensive review of molecular mechanisms and physiological functions of mitophagy; covers PINK1 domain structure (MTS 1–34, TM 85–110, kinase 156–511, CTR 511–581; total 581 aa), import-cleavage cascade (MPP then PARL), Ser228 + Ser402 autophosphorylation, dimerization requirement, ubiquitin Ser65 phosphorylation, receptor-arm mitophagy, aging (brain, muscle, Drosophila), and PD contexts; PINK1 KO in mice produces mitochondrial ETC dysfunction and ROS without obvious motor phenotype · local PDF available
