export const crcl_name = {
  en: "Experience at CRCL",
  fr: "Expérience au CRCL",
};

const publication = `
> Mallinjoud P, Villemin JP, Mortada H, et al.
> **Endothelial, epithelial, and fibroblast cells exhibit specific splicing programs independently of their tissue of origin.**
> Genome Res. 2014;24(3):511-521.
> [doi:10.1101/gr.162933.113](https://pubmed.ncbi.nlm.nih.gov/24307554/)`;

const crcl_description_en = `
At the [CRCL](https://www.crcl.fr/en/home/) (Cancer Research Center of Lyon), I built a database cataloging alternative splicing events of the human and mouse genomes.
To do so, I started from messenger RNA sequences available in [GenBank](https://www.ncbi.nlm.nih.gov/genbank/), which I aligned to the human and mouse reference genomes.

I then mapped Affymetrix exon array probes onto this annotation.
This allowed me to create another database compiling differential splicing expression data from numerous experiments, both public and internal to the lab.

This work contributed to a scientific publication and is available online at [FASTERDB](https://fasterdb.ens-lyon.fr/).

${publication}`;

const crcl_description_fr = `
Au [CRCL](https://www.crcl.fr/) (Centre de Recherche en Cancérologie de Lyon), j'ai conçu une base de données répertoriant les événements d'épissage alternatif des génomes humain et souris.
Pour cela, je suis parti des séquences d'ARN messager disponibles dans [GenBank](https://www.ncbi.nlm.nih.gov/genbank/), que j'ai alignées sur les génomes de référence humain et souris.

J’ai ensuite mappé les sondes des puces Affymetrix exon array sur cette annotation.
Cela m’a permis de créer une autre base de données recensant les données d'expression différentielle des événements d'épissage issues de nombreuses expériences, à la fois publiques et internes au laboratoire.

Ce travail a contribué à une publication scientifique et est accessible en ligne à l'adresse suivante : [FASTERDB](https://fasterdb.ens-lyon.fr/).

${publication}`;

export const crcl_description = {
  en: crcl_description_en,
  fr: crcl_description_fr,
};
