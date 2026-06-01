---
type: protein
aliases: [BCL2, BCL-2, B-cell lymphoma 2, Bcl-2, "apoptosis regulator Bcl-2"]
uniprot: P10415
ncbi-gene: 596
hgnc: 990
genage-id: 69
mouse-ortholog: Bcl2
ensembl: ENSG00000171791
druggability-tier: 1
caused-by: []
causes: []
key-domains: [BH4, BH3, BH1, BH2, transmembrane-anchor]
key-ptms: [Ser70-phosphorylation, Thr69-phosphorylation, ubiquitination, caspase-cleavage]
pathways: ["[[apoptosis-pathway]]", "[[autophagy]]", "[[mitochondrial-apoptosis]]"]
hallmarks: ["[[cellular-senescence]]", "[[disabled-macroautophagy]]"]
known-interactors: ["[[bax]]", "[[bcl-xl]]", "[[bim]]", "[[bad]]", "[[puma]]", "[[beclin-1]]"]
sens-categories: ["[[apoptosenes]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Zhu 2015 (10.1111/acel.12344), Zhu 2016 (10.1111/acel.12445), Roberts 2015 (10.1056/nejmoa1513257), and Sharma 2020 (10.3389/fcell.2020.00354) verified against local PDFs; BH domain residues cross-checked against UniProt P10415 REST API. Chang 2016 (10.1038/nm.4010) unverifiable — download failed, no PMC entry, claims marked #gap/no-fulltext-access. Cleary 1985 (10.1073/pnas.82.21.7439) and Vaux 1988 (10.1038/335440a0) not verified — both not_oa and not downloaded; historical claims retained as-is with existing archive-not-downloaded notation. Canonical-database identity fields (UniProt accession, NCBI Gene, HGNC, Ensembl, GenAge ID) not independently re-verified against databases — recommend cross-check on next lint pass."
---

# BCL-2

**BCL-2** (B-cell lymphoma 2; gene *BCL2*) is the founding member of the Bcl-2 family of apoptosis regulators and the first oncogene shown to promote cell survival by blocking programmed cell death rather than stimulating proliferation. Its canonical function is to anchor at the mitochondrial outer membrane and sequester pro-apoptotic proteins, preventing cytochrome c release and caspase activation. In the context of aging, BCL-2 is one of the dominant survival factors — termed a **SCAP (senescent cell anti-apoptotic pathway) node** — that shields senescent cells from apoptosis, allowing them to accumulate in tissues and drive SASP-mediated damage. This makes it a direct target for senolytic interventions (navitoclax, venetoclax) and a textbook case of antagonistic pleiotropy.

**Naming note:** The pathway page for intrinsic apoptosis is `[[apoptosis-pathway]]`; no standalone `bcl-2-pathway` page is seeded because BCL-2 is a regulatory node within the broader pathway rather than a pathway name. This page uses "BCL-2" as the protein name per UniProt convention (BCL2_HUMAN); the gene symbol is *BCL2*.

---

## Identity

| Field | Value |
|---|---|
| UniProt | P10415 (BCL2_HUMAN) |
| NCBI Gene | 596 |
| HGNC | 990 |
| Ensembl | ENSG00000171791 |
| Chromosomal location | 18q21.33 |
| Protein length | 239 aa (alpha isoform) |
| MW | ~26 kDa |
| Mouse ortholog | Bcl2 (one-to-one) |
| GenAge entry | 69 (Homo sapiens) |

---

## Discovery and historical context

BCL-2 was identified at the breakpoint of the t(14;18)(q32;q21) chromosomal translocation that is the hallmark of human follicular lymphoma. The translocation was first mapped in 1985 by Cleary and Sklar, who identified a breakpoint-cluster region near an expressed locus on chromosome 18 [^cleary1985]. The gene was named "B-cell lymphoma 2" because it was the second oncogene discovered at recurring B-cell lymphoma translocation breakpoints.

The critical conceptual breakthrough came in 1988 when Vaux, Cory, and Adams demonstrated that BCL-2 was unlike any previously characterized oncogene: rather than driving proliferation, it extended cell survival by blocking programmed cell death [^vaux1988]. The retroviral overexpression of *Bcl-2* promoted haemopoietic cell survival and cooperated with c-Myc to immortalize pre-B cells, establishing "apoptosis inhibition" as a mechanism of oncogenesis. This redefined oncogenesis: cancer could arise by preventing death, not only by stimulating growth.

---

## Domain architecture and localization

BCL-2 belongs to the Bcl-2 family defined by Bcl-2 Homology (BH) domains:

| Domain | Residues (approx.) | Function |
|---|---|---|
| BH4 | 10–30 | Required for anti-apoptotic activity; mediates RAF1 and EGLN3 interactions |
| BH3 | 93–107 | Enables binding to pro-apoptotic family members |
| BH1 | 136–155 | Critical for BAX binding; essential for anti-apoptotic function |
| BH2 | 187–202 | Required for BAX heterodimerization |
| Transmembrane (TM) | 212–233 | Helical anchor to mitochondrial outer membrane (MOM); also ER and nuclear membranes |

The TM domain is the defining structural feature that positions BCL-2 at the **mitochondrial outer membrane**. This localization is essential: BCL-2 must be at the MOM to intercept pro-apoptotic BAX/BAK before they oligomerize and form the mitochondrial apoptosis-induced channel (MAC). The BH4 domain is unique to anti-apoptotic family members (BCL-2, BCL-xL, BCL-w, MCL-1) and is the structural basis of their survival function.

**Two isoforms:**
- Alpha (P10415-1): full-length, 239 aa — the canonical anti-apoptotic form.
- Beta (P10415-2): exon-3-skipped, alternative C-terminus — pro-apoptotic or neutral; tissue-limited expression.

---

## Mechanism: anti-apoptotic function

The intrinsic (mitochondrial) apoptosis pathway proceeds through a BCL-2-regulated checkpoint. BCL-2 blocks this pathway at the MOM through two non-exclusive mechanisms:

**1. Direct inhibition of BAX/BAK activation.**
BCL-2 binds and sequesters unactivated BAX via its BH1/BH2/BH3 groove. This prevents BAX from undergoing the conformational change required for MOM insertion and oligomerization. Without oligomeric BAX or BAK pores, the mitochondrial outer membrane remains intact and cytochrome c is retained in the intermembrane space.

**2. BH3-only protein sequestration.**
BH3-only proteins (BIM, BAD, PUMA, NOXA, BID, BMF, HRK) function as upstream sentinels that detect cellular stress signals. They either directly activate BAX/BAK ("direct activators": BIM, BID, PUMA) or neutralize anti-apoptotic proteins by occupying their BH3-binding groove ("sensitizers": BAD, NOXA, BMF, HRK). BCL-2 sequesters BH3-only proteins that would otherwise activate BAX or release BAX from other complexes. The relative affinities of each BH3-only protein for each anti-apoptotic family member determine cell fate.

**Consequence of BCL-2 activity:** sustained inhibition of cytochrome c release → no apoptosome formation → no caspase-9/caspase-3 cascade → cell survival.

**Caspase-mediated cleavage:** During apoptosis that proceeds despite BCL-2 (e.g., when BH3-only proteins overwhelm it), activated caspases cleave BCL-2 between the BH4 and BH3 domains (at position 34, per UniProt P10415 feature annotation — N-terminal to BH3 at 93–107), generating a C-terminal fragment that inserts into mitochondria and acts as a pro-apoptotic sensitizer — a feedforward amplification loop that commits the cell.

**Autophagy regulation:** BCL-2 also binds and inhibits BECN1 (Beclin-1) at the ER membrane during nutrient-replete conditions, suppressing autophagic initiation. This is independent of its apoptosis-regulatory function and represents a parallel survival mechanism linking BCL-2 to the [[autophagy]] page [^campisi2013review]. The BCL-2/BECN1 interaction is disrupted by starvation-induced AMPK/JNK signaling, releasing BECN1 to nucleate the autophagosome.

---

## Post-translational modifications

| PTM | Site | Kinase/enzyme | Functional consequence |
|---|---|---|---|
| Phosphorylation | Ser-70 | PKC (growth factor-stimulated); MAPK8/JNK1 | Site-specific: Ser-70 alone enhances anti-apoptotic function; multi-site phosphorylation by JNK1 is inactivating and pro-apoptotic |
| Phosphorylation | Thr-69 | MAPK8/JNK1 | Part of multi-site loop phosphorylation; associated with inactivation |
| Ubiquitination | Multiple Lys | PRKN (monoUb); XIAP (polyUb → degradation); SCF(FBXO10) | Proteasomal turnover; PRKN-mediated monoubiquitination at mitochondria modulates BCL-2 stability |
| Caspase cleavage | Asp-34 (between BH4 and BH3) | Caspase-3 | Generates pro-apoptotic C-terminal fragment; feedforward amplification |

**Key distinction:** JNK1-driven **multi-site** loop phosphorylation (Thr-69 + Ser-70 + Ser-87) is pro-apoptotic (inactivating), whereas isolated **Ser-70 phosphorylation** by PKC is anti-apoptotic (potentiating). The serine loop region between BH2 and BH4 is a regulatory hotspot; its modification status determines whether BCL-2 is in survival or primed-for-inactivation mode.

---

## Role in aging: SCAP node in senescent cells

### SCAP framework

Senescent cells resist their own apoptosis via upregulation of specific anti-apoptotic survival networks — **SCAPs** (Senescent Cell Anti-Apoptotic Pathways). The SCAP concept was introduced by Zhu et al. 2015 via transcriptome analysis of multiple senescent cell types, which revealed coordinated induction of pro-survival gene expression as a senescence-associated feature [^zhu2015achilles].

### BCL-2 as a required SCAP node in IMR90 fibroblasts

A subsequent study (Zhu et al. 2016, *Aging Cell*) used siRNA knockdown of individual BCL-2 family members to identify which proteins are functionally required for senescent cell survival in a cell-type-specific manner [^zhu2016navitoclax]. The key finding (Fig. 4A–B) was:

- **IMR90 human fetal lung fibroblasts** (genotoxic-stress-induced senescence): the **triple combination of BCL-2 + BCL-xl + BCL-w siRNAs** (reflecting navitoclax's target profile) was senolytic in IMR90 cells. BCL-xl siRNA alone or BCL-2 + BCL-xl together were *not* sufficient to reduce senescent IMR90 viability; BCL-w co-knockdown was required. BCL-2 is thus a required node but not the sole dominant one — BCL-xl and BCL-w contribute in this cell type.
- **HUVECs** (human umbilical vein endothelial cells): BCL-xl siRNA alone was senolytic; BCL-2 + BCL-xl combinations also senolytic. BCL-xL is the primary SCAP node.
- **Human primary preadipocytes**: navitoclax-insensitive; different SCAP architecture (ephrin receptor signaling nodes, not BCL-2 family).

This cell-type specificity is the central mechanistic insight of that paper: there is no universal SCAP, and senolytic efficacy depends on matching the drug to the dominant survival pathway in the target cell type.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — BCL-2 MOM localization and BH-domain interactions are identical |
| Phenotype conserved in humans? | yes — senescent cells accumulate with age in human tissues; BCL-2 role in senescent fibroblast survival demonstrated in human cell lines |
| Replicated in humans? | in-progress — navitoclax human trials ongoing; IMR90/HUVEC findings are in human-derived cell lines, not in-vivo human tissue |

### Antagonistic-pleiotropy framing

BCL-2 is a canonical antagonistic-pleiotropy gene in the aging context:

- **In young organisms / normal development:** high BCL-2 prevents inappropriate apoptosis in lymphocytes, neurons, and developing tissues — clearly beneficial.
- **In cancer:** *BCL2* translocation to the immunoglobulin locus drives constitutive over-expression → follicular lymphoma. This is the dark side of BCL-2 in mid-life.
- **In aging:** BCL-2 (and BCL-w) upregulation in senescent cells shields them from the apoptotic clearance that would normally eliminate damaged cells. The resulting accumulation of SASP-secreting senescent cells drives chronic inflammation, tissue dysfunction, and the hallmarks of aging [^campisi2013review].

The same survival function that protects developing lymphocytes also, decades later, entrenches senescent cells in aged tissues — a textbook pleiotropy across life stages.

---

## BCL-2-family interaction network

The Bcl-2 family subdivides into three functional groups:

| Group | Members | Function |
|---|---|---|
| Anti-apoptotic | BCL-2, [[bcl-xl]], BCL-w, MCL-1, BCL2A1/Bfl-1 | Sequester BAX/BAK and BH3-only proteins |
| Pro-apoptotic effectors | [[bax]], BAK | Oligomerize at MOM; permeabilize mitochondria |
| BH3-only proteins | BIM, [[bad]], [[puma]], NOXA, BID, BMF, HRK | Sense stress; activate effectors or displace from anti-apoptotics |

BCL-2's most experimentally characterized interactions (UniProt):
- **[[bax]]** (16 experiments): direct heterodimerization via BH3 groove; BAX-BCL-2 ratio is a "rheostat" for cell death.
- **BECN1** (18 experiments): suppresses autophagy at ER membrane; disrupted by BH3-mimetics.
- **BIM/BCL2L11** (11 experiments): key BH3-only activator; BIM displacement from BCL-2 is required for efficient apoptosis induction by most stimuli.
- **[[bad]]** (7 experiments): sensitizer BH3-only protein; BAD phosphorylation by AKT sequesters BAD from BCL-2, freeing BCL-2 to suppress apoptosis.

---

## Pharmacological targeting

### Navitoclax (ABT-263) — BCL-2 / BCL-xL / BCL-w inhibitor

Navitoclax is a small-molecule BH3-mimetic that occupies the BH3-binding groove of BCL-2, BCL-xL, and BCL-w simultaneously, displacing BH3-only proteins and BAX, thereby releasing the apoptotic brake.

**As a senolytic:** navitoclax selectively kills senescent cells by exploiting their SCAP dependence. Chang et al. 2016 showed that oral navitoclax in aged mice depleted senescent cells from bone marrow and muscle, rejuvenating hematopoietic stem cells (HSCs) and muscle stem cells (MuSCs) [^chang2016]. This is the first demonstration that a BCL-2-family inhibitor can function as a senolytic in vivo.

**On-target toxicity:** navitoclax's BCL-xL inhibition causes thrombocytopenia (BCL-xL is required for platelet survival), limiting its clinical use in aging applications without platelet toxicity mitigation strategies. #gap/dose-response-unclear — the senolytic-effective dose vs thrombocytopenic dose relationship in humans is not established.

**Bone safety concern:** navitoclax at senolytic doses (50 mg/kg/day oral gavage, 2 weeks) caused trabecular bone volume fraction reductions of −60.1% (females) and −45.6% (males) in 24-month-old C57BL/6 mice, with BMSC-derived osteoblasts showing −88% (females) and −83% (males) impairment in mineralized matrix production [^sharma2020]. This raises a tissue-specific safety concern for aging applications. #gap/long-term-unknown

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | in-progress — no completed human senolytic trials for navitoclax as of 2026-05-04 |
| Replicated in humans? | no #gap/needs-human-replication |

### Venetoclax (ABT-199, BCL-2-selective) — FDA-approved 2016

Venetoclax is a highly BCL-2-selective BH3-mimetic with negligible BCL-xL affinity, designed specifically to avoid the thrombocytopenia of navitoclax. The pivotal phase 1 trial enrolled 116 patients with relapsed or refractory CLL or SLL (not restricted to 17p deletion; 17p deletion was present in 30% of CLL patients); the overall response rate across all 116 patients was 79% (95% CI, 71–86) [^roberts2015]. FDA approval followed in 2016. High response rates were seen across adverse-prognosis subgroups including fludarabine-resistant disease (79%) and deletion 17p CLL (71%).

**In aging/senolytic context:** venetoclax's BCL-2 selectivity makes it a tool for probing BCL-2-specific SCAP biology, but the Zhu 2016 siRNA data indicates that BCL-2 knockdown alone is insufficient for senolysis in IMR90 fibroblasts — the triple BCL-2 + BCL-xl + BCL-w combination is required. This predicts that venetoclax (BCL-2 selective) would be less senolytic in IMR90-type fibroblasts than navitoclax. Whether any pharmacological BCL-2-selective dose achieves senolysis in vivo is not yet tested. #gap/needs-replication

**ClinicalTrials:** as of 2026-05-04, there are no completed registered trials of venetoclax specifically for aging/senolytic indications. The primary oncology use in CLL/AML is established. #gap/needs-human-replication

---

## BCL-2 in other aging-relevant contexts

**Autophagy suppression:** BCL-2's binding of BECN1 at the ER provides a mechanistic link between apoptosis resistance and reduced autophagic flux in aged cells. Aged tissues show decreased autophagy; whether BCL-2 upregulation contributes causally — vs being a correlate of senescence — is not resolved. #gap/no-mechanism

**Neuronal survival:** BCL-2 is highly expressed in post-mitotic neurons. BCL-2 transgenic mice show extended neuronal survival in models of neurodegenerative injury. The aging implications are complex: in young organisms, BCL-2 preserves neurons; in aged organisms, sustained BCL-2 may contribute to the persistence of dysfunctional neurons that should be cleared. #gap/contradictory-evidence

**BCL-2 transgenic mouse aging:** overexpression of Bcl-2 in mice promotes survival of lymphocytes and causes lymphoma at high rates (consistent with its oncogenic role), but lifespan and aging phenotypes are complex and background-dependent. #gap/unsourced — specific aging phenotype data for Bcl-2 transgenic mice on standard backgrounds needs primary citation.

---

## Pathway membership

- [[apoptosis-pathway]] — BCL-2 is the prototypical anti-apoptotic regulator at the mitochondrial checkpoint; directly controls cytochrome c release
- [[autophagy]] — BCL-2/BECN1 interaction suppresses autophagy initiation at ER; released by JNK/AMPK signaling during starvation
- [[cellular-senescence]] — BCL-2 is a required SCAP node in senescent IMR90 fibroblasts (together with BCL-xl and BCL-w — triple combination needed); BCL-xL is the primary SCAP in HUVECs

---

## Key interactors

| Interactor | Interaction | Aging relevance |
|---|---|---|
| [[bax]] | Direct heterodimerization (BH3 groove); BCL-2 sequesters BAX | BCL-2/BAX ratio shifts pro-apoptotic in aged cells under some damage conditions |
| [[bcl-xl]] | Parallel anti-apoptotic family member; distinct tissue SCAP dominance | BCL-xL dominates in HUVECs and platelets; co-targeted by navitoclax |
| [[bim]] | BH3-only activator; BIM binding is disrupted by BH3-mimetics | BIM is the primary "activator" BH3-only protein triggering BAX activation |
| [[bad]] | Sensitizer BH3-only; BAD phosphorylation (AKT) neutralizes it | AKT → BAD Ser136-phos → BAD sequesters away from BCL-2 → BCL-2 free to suppress apoptosis |
| [[puma]] | BH3-only activator; p53-induced | PUMA + BCL-2 interaction connects DNA-damage-p53 axis to BCL-2 survival function |
| [[beclin-1]] | BCL-2 suppresses autophagy via BECN1 binding at ER | Autophagy suppression by BCL-2 links SCAP biology to proteostasis hallmark |

---

## Aging interventions that modulate BCL-2

- [[interventions/pharmacological/senolytics]] — navitoclax (BCL-2/BCL-xL/BCL-w) and venetoclax (BCL-2-selective) are the primary direct BCL-2-targeting senolytic strategies
- [[caloric-restriction]] — reduces senescent cell burden; may do so partly by reducing SCAP expression, but the BCL-2-specific mechanism is not established #gap/no-mechanism
- [[fisetin]] — flavonoid senolytic; does not primarily target BCL-2 (works via different SCAPs), but overlaps with BCL-2 pathway biology via PI3K/AKT modulation #gap/unsourced

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| Cell-type SCAP specificity in vivo | #gap/needs-replication | IMR90 vs HUVEC vs preadipocyte data is from in-vitro human cell lines; in-vivo organ-level SCAP mapping in aging humans lacking |
| BCL-2-selective (venetoclax) vs triple BCL-2/BCL-xl/BCL-w (navitoclax) senolytic comparison | #gap/needs-replication | Zhu 2016 siRNA shows triple BCL-2 + BCL-xl + BCL-w knockdown required for IMR90 senolysis; pharmacological BCL-2-only test not published as of 2026 |
| Navitoclax thrombocytopenia management for aging use | #gap/dose-response-unclear | BCL-xL requirement for platelet survival limits navitoclax tolerable dose; PROTAC approaches under development |
| Navitoclax bone safety | #gap/long-term-unknown | Trabecular bone loss observed in aged mice; human impact unknown |
| BCL-2 transgenic mouse aging phenotype | #gap/unsourced | Primary citation needed for BCL-2 overexpression effects on non-cancer aging endpoints |
| Venetoclax as aging intervention | #gap/needs-human-replication | Oncology FDA approval established; no aging indication trials completed |
| BCL-2 in autophagy decline with age | #gap/no-mechanism | Whether BCL-2/BECN1 axis causally contributes to age-associated autophagy decline is not established |
| GenAge classification | — | GenAge entry 69 — check primary evidence basis; BCL-2 is well-established in senescent cell biology but its direct longevity effects in model organisms are less characterized than BCL-xL or BAX family |

---

## Footnotes

[^cleary1985]: doi:10.1073/pnas.82.21.7439 · n=N/A · in-vitro (molecular) · model: follicular lymphoma tumor DNA · 953 citations; confirmed in archive (not OA, not downloaded) · established t(14;18) BCL2 breakpoint-cluster region

[^vaux1988]: doi:10.1038/335440a0 · n=N/A · in-vitro + in-vivo (retroviral overexpression, mouse B-cell lines) · model: IL-3-dependent pro-B cell lines; nude mouse transplants · 3,200 citations; confirmed in archive (not OA, not downloaded) · established BCL-2 as survival oncogene acting by blocking programmed cell death rather than promoting proliferation

[^zhu2015achilles]: [[studies/zhu-2015-achilles-heel-senescent-cells]] · doi:10.1111/acel.12344 · n=multiple cell lines · in-vitro + in-vivo (progeroid mice) · model: human fibroblasts, MEFs, progeroid mouse tissues · 2,269 citations; locally downloaded · introduced SCAP concept; identified BCL-xL knockdown as senolytic; D+Q as pharmacological senolytics

[^zhu2016navitoclax]: [[studies/zhu-2016-navitoclax-senolytic]] · doi:10.1111/acel.12445 · n=multiple human cell lines (IMR90, HUVECs, preadipocytes) + MEFs · in-vitro · model: human lung fibroblasts, endothelial cells, preadipocytes · locally downloaded · key finding (Fig. 4A–B): triple BCL-2 + BCL-xl + BCL-w siRNA combination senolytic in IMR90 and HUVECs; BCL-xl siRNA alone senolytic only in HUVECs (not IMR90); preadipocytes navitoclax-insensitive; BCL-w co-knockdown required for IMR90 senolysis

[^chang2016]: [[studies/chang-2016-abt263-senolytic-hscs]] · doi:10.1038/nm.4010 · n=multiple cohorts of aged C57BL/6 mice · in-vivo · model: 24-month-old mice; oral ABT263 (navitoclax) · DOI lookup failed (green OA; no PMC entry — cannot verify full text locally) #gap/no-fulltext-access · navitoclax reported to deplete senescent cells from bone marrow and muscle, rejuvenating HSCs and MuSCs; first in-vivo senolytic mouse study with BCL-2 family inhibitor — claims unverified against PDF

[^roberts2015]: doi:10.1056/nejmoa1513257 · n=116 (CLL/SLL patients, phase 1 dose-escalation) · in-vivo (human, phase 1 trial) · model: relapsed/refractory CLL or SLL (17p deletion in 30% of CLL patients; not an enrollment requirement) · locally downloaded · venetoclax (ABT-199) achieved 79% overall response rate (95% CI 71–86) across all 116 patients; 20% complete response rate; established BCL-2 as clinical target; FDA approved 2016

[^sharma2020]: doi:10.3389/fcell.2020.00354 · n=aged C57BL/6 mice · in-vivo · model: 24-month-old mice, navitoclax oral gavage · 119 citations; archive pending · navitoclax caused trabecular bone loss and impaired osteoprogenitor function; safety signal for aging use

[^campisi2013review]: doi:10.1016/j.cell.2013.05.039 · review · n=N/A · model: review of human and mouse data · 14,200 citations; locally downloaded · cites BCL-2/BECN1 interaction and senescence in aging context
