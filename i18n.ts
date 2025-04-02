export type Locale = "en" | "fr";

// general translations.
export const subtitle = {
  en: "Tech expert, bioinformatics engineer, web and database developer",
  fr: "Expert technique, ingénieur bioinformatique, développeur web et base de données",
};

const description_en = `
I'm a web and database developer with a strong passion for science.
This interest led me to study genomics and statistics in order to work in biological research.
These days, I'm also exploring AI and blockchain through various personal projects.
`;

const description_fr = `
Je suis un développeur web et base de données, passionné de science.
Cela m’a conduit à étudier la génomique et les statistiques afin de travailler dans la recherche en biologie.
Aujourd’hui, je m’intéresse également à l’IA et à la blockchain, que j’explore à travers plusieurs projets personnels.
`;

export const description = {
  en: description_en,
  fr: description_fr,
};

export const downloadResume = {
  en: "Download my resume",
  fr: "Télécharger mon CV",
};

export const madeWith = {
  en: "Made with Nextjs and Tailwindcss",
  fr: "Fait avec Nextjs et Tailwindcss",
};

// project translations.
export const enyopharma_name = {
  en: "Experience at EnyoPharma",
  fr: "Expérience chez EnyoPharma",
};

const enyopharma_description_en = `
At [EnyoPharma](https://enyopharma.com/), I worked as a bioinformatics engineer in the R&D team, collaborating closely with biologists to study human-virus protein-protein interactions. The biologists curated scientific publications to manually extract protein-protein interaction data.

To support this effort, I developed two full-stack applications:

- **Drakkar**: A database and web interface designed to assist biologists in curating protein-protein interactions. It provides rich web forms to populate a large PostgreSQL database with curated data.
- **Vinland**: A read-only, smaller version of the Drakkar database, offering a public web interface for querying protein-protein interactions and visualizing protein interaction networks.

Both applications share the same technology stack:
- PostgreSQL as the database
- A custom PHP backend
- A React frontend
- Containerized deployment with Docker

Additionally, I developed Perl scripts to transform the Drakkar database into Vinland. This work and the curated data contributed to a published scientific article.`;

const enyopharma_description_fr = `
Chez [EnyoPharma](https://enyopharma.com/fr), j'ai travaillé en tant qu'ingénieur en bioinformatique au sein de l'équipe R&D, en collaboration étroite avec des biologistes sur les interactions protéine-protéine entre l'humain et les virus. Les biologistes effectuaient une curation manuelle des publications scientifiques pour extraire ces interactions.

Pour soutenir ce travail, j'ai développé deux applications full-stack :

- **Drakkar** : Une base de données et une interface web permettant aux biologistes d'annoter manuellement les interactions protéine-protéine via des formulaires riches, stockées dans une base PostgreSQL.
- **Vinland** : Une version plus petite et en lecture seule de Drakkar, offrant une interface web publique pour interroger les interactions protéine-protéine et visualiser les réseaux d'interactions.

Les deux applications reposent sur la même stack technologique :
- Une base de données PostgreSQL
- Un backend PHP développé sur mesure
- Un frontend React
- Une conteneurisation avec Docker

J'ai également développé des scripts Perl pour générer la base de données Vinland à partir de Drakkar. Ce travail et les données produites ont servi de base à un article scientifique publié.`;

export const enyopharma_description = {
  en: enyopharma_description_en,
  fr: enyopharma_description_fr,
};

export const crcl_name = {
  en: "Experience at CRCL",
  fr: "Expérience au CRCL",
};

const crcl_description_en = `
At the [Cancer Research Center of Lyon (CRCL)](https://www.crcl.fr/en/home/), I conducted a genome-wide analysis to annotate alternative splicing events and developed a database to store these annotations.

Additionally, I analyzed data from various in-house and publicly available Affymetrix exon-level microarrays. I mapped the probes from these full-length microarrays to my own alternative splicing annotations, creating a comprehensive repository of results stored in a database.

This work contributed to a scientific publication and is available online at [FASTERDB](https://fasterdb.ens-lyon.fr/).`;

const crcl_description_fr = `
Au Centre de [Recherche en Cancérologie de Lyon (CRCL)](https://www.crcl.fr), j'ai réalisé une analyse à l'échelle du génome afin d'annoter les événements d'épissage alternatif et j'ai développé une base de données pour stocker ces annotations.

J'ai également analysé les résultats de nombreuses experiences de puces à ADN Affymetrix exon-level, issues de données internes et de sources publiques. J'ai mappé les sondes de ces puces full-length en les associant à mes propres annotations d'épissage alternatif, créant ainsi un répertoire complet des résultats, stocké dans une base de données.

Ce travail a contribué à une publication scientifique et est disponible en ligne sur [FASTERDB](https://fasterdb.ens-lyon.fr/).`;

export const crcl_description = {
  en: crcl_description_en,
  fr: crcl_description_fr,
};

export const abstracts_ppi_name = {
  en: "Fine tuning of a binary classification model",
  fr: "Fine tuning d'un modele de classification binaire",
};

const abstracts_ppi_description_en = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`;

const abstracts_ppi_description_fr = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`;

export const abstracts_ppi_description = {
  en: abstracts_ppi_description_en,
  fr: abstracts_ppi_description_fr,
};

export const smolanalyst_name = {
  en: "AI code agent for data analysis and plotting",
  fr: "Agent de code IA pour analyser et representer des données",
};

const smolanalyst_description_en = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`;

const smolanalyst_description_fr = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`;

export const smolanalyst_description = {
  en: smolanalyst_description_en,
  fr: smolanalyst_description_fr,
};
