---
type: pathway
aliases: [MMR, DNA mismatch repair, MutSα pathway, MutSβ pathway, dMMR, MSI-H pathway]
kegg: hsa03430
reactome: R-HSA-5358508
wikipathways: null
key-nodes: ["[[msh2]]", "[[msh6]]", "[[msh3]]", "[[mlh1]]", "[[pms2]]", "[[pms1]]", "[[mlh3]]", "[[exo1]]", "[[pcna]]", "[[lig1]]"]
upstream: ["[[dna-damage-response]]", "[[dna-replication]]"]
downstream: ["[[genomic-instability]]", "[[cell-cycle-arrest]]", "[[apoptosis-pathway]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
druggability-tier: 1
caused-by: ["[[dna-replication]]"]
causes: ["[[genomic-instability]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Jiricny 2006 (nrm1907) mechanistic claims verified against full PDF; Le 2015 (NEJMoa1500596) quantitative trial results verified against full PDF; André 2020 (NEJMoa2017699) PFS/HR figures verified against full PDF; Le 2017 (aan6733) not verified — closed-access, tagged #gap/no-fulltext-access; Lynch 2009 (j.1399-0004.2009.01230.x) not verified — status pending, canonical proportion figures not re-checked; KEGG/Reactome IDs not independently re-verified"
---


# Mismatch repair (MMR) pathway

The **DNA mismatch repair** (MMR) pathway is a post-replication genome-surveillance system that corrects base–base mismatches and small insertion/deletion loops (IDLs) that escape proofreading by the replicative polymerase. MMR is evolutionarily conserved from bacteria (*MutS/MutL/MutU*) to humans. In humans, MMR failure produces **microsatellite instability** (MSI) — hypermutation at repetitive sequences — and dramatically elevates cancer risk. Germline MMR mutations underlie Lynch syndrome, the most common hereditary colorectal cancer predisposition. In the aging context, accumulating somatic MMR attrition may contribute to age-associated genomic instability in normal tissues. Paradoxically, **MMR-deficient tumors are among the most immunotherapy-responsive cancers known**, because their extreme mutational burden generates abundant neoantigens that PD-1 checkpoint blockade can exploit [^le2015] [^le2017].

## Machinery and mechanism

MMR operates after the replication fork closes, reading newly-synthesized strands to correct errors the polymerase failed to proofread. The process proceeds in six coordinated steps [^jiricny2006]:

### Step 1 — Mismatch recognition

Two heterodimeric MutS complexes detect distinct error classes:

| Complex | Subunits | Substrate |
|---|---|---|
| **MutSα** | [[msh2]] + [[msh6]] | Single-base mismatches; 1–2 nt IDLs |
| **MutSβ** | [[msh2]] + [[msh3]] | Larger IDLs (>2 nt) #gap/needs-replication — specific upper nt bound not stated in Jiricny 2006 |

MSH2 is the obligate scaffolding subunit shared by both complexes. Upon mismatch binding, the MutS complex undergoes an ATP-dependent conformational switch that converts it from a mismatch clamp to a sliding clamp, dissociating from the mismatch site while retaining DNA contact — an important feature for signaling downstream effectors at a distance.

### Step 2 — MutL recruitment

MutSα or MutSβ recruits the **MutLα** heterodimer ([[mlh1]] + [[pms2]]) to form a ternary surveillance complex. MutLα possesses a latent endonuclease activity in its PMS2 subunit that is essential for strand excision in human cells. Two additional MutL variant complexes exist: **MutLβ** ([[mlh1]] + [[pms1]]), whose function is currently unknown; and **MutLγ** ([[mlh1]] + [[mlh3]]), which participates primarily in meiotic recombination surveillance and may serve as a backup for MutLα in the repair of base–base mismatches and small IDLs [^jiricny2006].

### Step 3 — Strand discrimination

The newly-synthesized (error-containing) strand must be distinguished from the template. In prokaryotes, hemimethylation at GATC sites marks the old strand; in humans the mechanism relies on **replication-fork landmarks**: [[pcna]] and the RFC clamp-loader complex at the 3' terminus of an Okazaki fragment, or at nicks introduced by FEN1 during lagging-strand synthesis. PCNA physically interacts with MSH3 and MSH6, linking mismatch recognition to the replication machinery. MutLα is directed to incise the nascent strand on the 5' side of the mismatch, creating an entry point for excision [^jiricny2006].

### Step 4 — Excision by EXO1

The 5'→3' exonuclease [[exo1]] degrades the nascent strand from the MutL-generated nick through and past the mismatch, generating a single-stranded gap of typically several hundred nucleotides. EXO1 activity is stimulated by MutSα and partially redundant with other exonuclease activities; an EXO1-independent excision route exists but is not fully characterized.

### Step 5 — Resynthesis

The single-stranded gap is filled by **DNA polymerase delta** (Polδ; subunits POLD1-4), stabilized by [[pcna]] as its processivity clamp, and stabilized by RPA (replication protein A; RPA1-RPA3) coating the template. Polδ uses the undamaged template strand, so the repaired base is now correct.

### Step 6 — Ligation

The remaining nick is sealed by **DNA ligase I** ([[lig1]]) in an ATP-dependent reaction, restoring covalent continuity to the newly-synthesized strand.

## MMR and the DNA damage response

MMR proteins interact extensively with the broader [[dna-damage-response]] (DDR) network:

- **[[atm]]** is not a direct MMR component but is activated by persistent MMR-associated ssDNA intermediates and MMR-signaled damage; the ATM–CHK2 arm contributes to cell-cycle arrest downstream of MMR-detected lesions.
- **[[p53]]** is a downstream effector: MMR-triggered signaling via ATR (primary) and ATM (secondary) stabilizes p53, which can direct the cell toward cell-cycle arrest or apoptosis depending on mismatch load. MMR-deficient cells typically fail to arrest or undergo apoptosis in response to alkylating agents — a key determinant of chemoresistance.
- MMR deficiency creates a **futile cycle** response to O6-methylguanine lesions (induced by alkylating agents like temozolomide or DTIC): MMR recognizes the mismatch but cannot repair it (the lesion is on the template strand); repeated, futile excision/resynthesis cycling induces DSBs and triggers cell death via ATR. When MMR is absent, this futile-cycle apoptosis fails — explaining MMR-deficient tumor resistance to alkylating chemotherapy alongside their sensitivity to immunotherapy.

## Lynch syndrome — germline MMR deficiency

Lynch syndrome (formerly HNPCC — hereditary non-polyposis colorectal cancer) is caused by germline loss-of-function mutations in **MLH1, MSH2, MSH6, or PMS2** (rarely MLH3 or MSH3 with complete penetrance)[^lynch2009]. It is the most common hereditary colorectal cancer syndrome, estimated to account for 2–4% of all CRC cases.

| Gene | Proportion of Lynch families | Dominant cancers |
|---|---|---|
| MLH1 | ~50% | CRC, endometrial |
| MSH2 | ~40% | CRC, endometrial, urinary tract |
| MSH6 | ~7–10% | Endometrial >> CRC |
| PMS2 | ~5% | CRC, endometrial (lower penetrance) |

Lifetime colorectal cancer risk in MLH1/MSH2 carriers is approximately 40–80%; endometrial cancer risk in female carriers is 40–60%. Risks are substantially lower in MSH6 and PMS2 carriers [^lynch2009].

**Molecular signature:** MMR-deficient tumors show **microsatellite instability-high (MSI-H)** — widespread frameshifts at short tandem repeats (microsatellites) throughout the genome. MSI is easily detected by PCR (using the Bethesda panel: BAT25, BAT26, D5S346, D2S123, D17S250) or by immunohistochemistry for MMR protein loss. MSI-H is functionally equivalent to **dMMR** (deficient mismatch repair) by IHC, though discordance occurs in ~3–5% of cases.

## Somatic MMR deficiency — sporadic MSI-H tumors

Approximately 15% of sporadic CRCs are MSI-H, but these arise via **somatic MLH1 promoter hypermethylation** rather than germline mutation. This epigenetic silencing accounts for nearly all sporadic dMMR CRC and is strongly associated with the **CpG island methylator phenotype** (CIMP) and BRAF V600E mutation — a distinct molecular pathway from Lynch-associated CRC.

Sporadic dMMR tumors share the same immunotherapy sensitivity as Lynch-associated tumors; the distinction matters for cancer-risk counseling of family members (sporadic dMMR does not confer heritable risk) but not for PD-1 blockade eligibility.

## Therapeutic angle: dMMR/MSI-H as a predictive biomarker for PD-1 blockade

The most clinically impactful insight from MMR biology in recent years is that **tumor MMR status predicts response to PD-1 checkpoint blockade** across essentially all solid tumor types.

**Mechanism:** dMMR tumors accumulate thousands of frameshift mutations at microsatellites. These mutations generate novel open-reading frames encoding neoantigenic peptides. The resulting high neoantigen burden is recognized by tumor-infiltrating T cells; however, adaptive immune resistance (PD-L1 upregulation) silences this response. Removing the PD-1 brake restores anti-tumor T-cell activity.

**Key trials:**

Le et al. 2015 (NEJM) — a phase 2 pilot study in patients with metastatic colorectal cancer and other solid tumors — demonstrated that dMMR (MMR-deficient) tumors had dramatically higher response rates to pembrolizumab than MMR-proficient (pMMR) tumors (objective response rate ~40% vs 0% in CRC cohorts, immune-related progression-free survival rates 78% vs 11% at 20 weeks) [^le2015]. **This was the first prospective demonstration that a molecular biomarker could predict immunotherapy response across cancer types.**

Le et al. 2017 (Science) — an expanded phase 2 study across 12 tumor types in 86 patients with dMMR solid tumors — showed objective response rates of 53% (CR + PR), with responses across pancreatic cancer, cholangiocarcinoma, ampullary cancer, gastric cancer, and others — histological types with historically poor prognosis [^le2017]. #gap/needs-replication — some tumor-type cohorts were small (n=1–12); confirmation in larger, tumor-type-specific trials ongoing.

**FDA approval:** In 2017 pembrolizumab received **FDA tissue-agnostic approval** for any previously-treated dMMR/MSI-H solid tumor — the first ever tumor-agnostic oncology drug approval, defined by molecular biomarker rather than site of origin. André et al. 2020 (KEYNOTE-177) confirmed first-line pembrolizumab superiority over chemotherapy in MSI-H metastatic CRC (median PFS 16.5 vs 8.2 months) [^andre2020].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (MSI) conserved in humans? | yes |
| Replicated in humans? | yes (multiple RCTs) |

## Aging relevance

MMR and MSI accumulation in aged normal tissues is an emerging area, but primary-source evidence is sparse. Key considerations:

**MMR protein decline with age** — There is circumstantial evidence that expression of MMR components (particularly MSH2 and MLH1) may decrease in aged tissues, reducing repair capacity and allowing greater mutational accumulation [^unsourced-mmr-aging]. #gap/unsourced — no high-quality primary study with quantified protein levels across human age cohorts has been confirmed; this claim requires citation before asserting it as established.

**Somatic MSI in normal aging tissues** — Several studies have noted low-level microsatellite instability ("MSI-low" or somatic MSI events) in morphologically normal aging colonic crypts and other tissues, consistent with clonal expansion of cells with partial MMR attrition. The scope and physiological significance of this phenomenon in tissues without overt malignancy is not established. #gap/needs-replication #gap/no-mechanism

**Link to clonal hematopoiesis** — In the hematopoietic compartment, age-associated somatic mutations accumulate in stem cells via multiple mechanisms. Whether MMR attrition contributes specifically to [[clonal-hematopoiesis]] is proposed but not definitively established. Most clonal hematopoiesis driver mutations (TET2, DNMT3A, JAK2) do not involve MSI loci.

**Connection to [[genomic-instability]] hallmark** — MMR is one of the key repair pathways whose age-associated decline contributes to the hallmark of [[genomic-instability]] (López-Otín 2013). MMR deficiency allows mutational accumulation that, below the threshold of frank carcinogenesis, may nevertheless degrade cellular function. This is mechanistically analogous to NHEJ and BER capacity decline with age.

## Limitations and gaps

- **MMR decline with age in human tissues** — No sufficiently powered, quantitative study of MMR protein levels across human aging cohorts has been verified for this page. Claims about age-related MMR attrition in normal tissues are currently `#gap/unsourced`. #gap/unsourced
- **MSI in aging non-tumor tissues** — Direct, replicated measurements of MSI accumulation in normal human aging tissues across multiple loci are needed. The "MSI-low aging colon" concept (cited as Iyer 2008 in the brief) could not be verified through any available source (DOI 10.1093/gerona/63.7.692 returns 404 from Crossref; not found in PubMed or a local paper archive). Do not cite until confirmed. #gap/unsourced #gap/needs-replication
- **EXO1-independent excision** — The strand-excision mechanism in the absence of EXO1 is not fully characterized. Multiple redundant exonucleases are suspected. #gap/no-mechanism
- **Strand discrimination in human somatic cells** — The precise molecular signal that directs MutLα endonuclease to the nascent strand (as opposed to GATC hemimethylation used in E. coli) is partially understood (PCNA/RFC model) but not fully resolved. #gap/no-mechanism
- **MLH3, MSH3 penetrance** — The contribution of heterozygous germline MLH3 and MSH3 mutations to Lynch syndrome cancer risk is contested; penetrance data are limited. #gap/contradictory-evidence
- **Aging-specific druggability** — While dMMR tumors are highly responsive to PD-1 blockade, there is no established intervention that specifically restores MMR capacity in aged or pre-malignant tissues. `druggability-tier: 1` reflects the existence of pembrolizumab as a clinical drug targeting dMMR tumors, not a restorative therapy for age-associated MMR attrition.

## Cross-references

- [[dna-damage-response]] — broader DDR network within which MMR is embedded
- [[genomic-instability]] — hallmark that MMR protects against
- [[atm]] — DDR kinase activated downstream of MMR-signaled damage
- [[p53]] — apoptotic effector of sustained MMR damage signaling
- [[clonal-hematopoiesis]] — age-associated somatic evolution; potential overlap with MMR attrition
- [[colorectal-cancer]] — primary cancer type associated with Lynch syndrome and sporadic dMMR
- [[msh2]], [[msh6]], [[msh3]], [[mlh1]], [[pms2]], [[mlh3]], [[exo1]], [[pcna]] — individual component protein pages (implicit stubs)

## Footnotes

[^jiricny2006]: doi:10.1038/nrm1907 · Jiricny J · *Nature Reviews Molecular Cell Biology* 2006, 7:335–346 · review · n=N/A · model: human (mechanistic review of MMR biochemistry) · locally available:  (local PDF)

[^lynch2009]: doi:10.1111/j.1399-0004.2009.01230.x · Lynch HT, Lynch PM, Lanspa SJ, Snyder CL, Lynch JF, Boland CR · *Clinical Genetics* 2009, 76:1–18 · review · n=N/A · model: human (clinical review of Lynch syndrome genetics, risk, and management) · download status: pending

[^le2015]: doi:10.1056/NEJMoa1500596 · Le DT, Uram JN, Wang H et al. · *New England Journal of Medicine* 2015, 372:2509–2520 · phase 2 · n=41 (11 dMMR-CRC, 21 pMMR-CRC, 9 dMMR non-CRC) · immune-related ORR 40% (dMMR-CRC) vs 0% (pMMR-CRC); immune-related PFS rate at 20 weeks 78% vs 11%; p<0.001 (HR for disease progression or death) · model: human · locally available:  (local PDF)

[^le2017]: doi:10.1126/science.aan6733 · Le DT, Durham JN, Smith KN et al. · *Science* 2017, 357:409–413 · phase 2 · n=86 (12 tumor types) · model: human · ~53% ORR across dMMR solid tumors · cited_by_count: 6405 · download status: not_oa (closed access) #gap/no-fulltext-access

[^andre2020]: doi:10.1056/NEJMoa2017699 · André T, Shiu KK, Kim TW et al. · *New England Journal of Medicine* 2020, 383:2207–2218 · phase 3 RCT (KEYNOTE-177) · n=307 (153 pembrolizumab, 154 chemotherapy; first-line MSI-H/dMMR metastatic CRC) · median PFS 16.5 vs 8.2 months; HR 0.60 (95% CI 0.45–0.80); P=0.0002 · model: human · locally available:  (local PDF)

[^unsourced-mmr-aging]: Claim that MMR protein expression declines with age in normal human tissues — no primary-source DOI confirmed. #gap/unsourced — do not rely on this claim until a verified citation is added.
