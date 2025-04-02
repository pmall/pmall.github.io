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
At the [Cancer Research Center of Lyon](https://www.crcl.fr/en/home/) (CRCL), I conducted a genome-wide analysis to annotate alternative splicing events and developed a database to store these annotations.

Additionally, I analyzed data from various in-house and publicly available Affymetrix exon-level microarrays. I mapped the probes from these full-length microarrays to my own alternative splicing annotations, creating a comprehensive repository of results stored in a database.

This work contributed to a scientific publication and is available online at [FASTERDB](https://fasterdb.ens-lyon.fr/).

${publication}`;

const crcl_description_fr = `
Au Centre de [Recherche en Cancérologie de Lyon](https://www.crcl.fr) (CRCL), j'ai réalisé une analyse à l'échelle du génome afin d'annoter les événements d'épissage alternatif et j'ai développé une base de données pour stocker ces annotations.

J'ai également analysé les résultats de nombreuses experiences de puces à ADN Affymetrix exon-level, issues de données internes et de sources publiques. J'ai mappé les sondes de ces puces full-length en les associant à mes propres annotations d'épissage alternatif, créant ainsi un répertoire complet des résultats, stocké dans une base de données.

Ce travail a contribué à une publication scientifique et est disponible en ligne sur [FASTERDB](https://fasterdb.ens-lyon.fr/).

${publication}`;

export const crcl_description = {
  en: crcl_description_en,
  fr: crcl_description_fr,
};
