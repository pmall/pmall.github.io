export const enyopharma_name = {
  en: "Experience at EnyoPharma",
  fr: "Expérience chez EnyoPharma",
};

const publication = `
> Meyniel-Schicklin L, Amaudrut J, Mallinjoud P, et al.
> **Viruses traverse the human proteome through peptide interfaces that can be biomimetically leveraged for drug discovery.**
> Proc Natl Acad Sci U S A. 2024;121(5):e2308776121.
> [doi:10.1073/pnas.2308776121](https://pubmed.ncbi.nlm.nih.gov/38252831/)`;

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

Additionally, I developed Perl scripts to transform the Drakkar database into Vinland. This work and the curated data contributed to a published scientific article.

${publication}`;

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

J'ai également développé des scripts Perl pour générer la base de données Vinland à partir de Drakkar. Ce travail et les données produites ont servi de base à un article scientifique publié.

${publication}`;

export const enyopharma_description = {
  en: enyopharma_description_en,
  fr: enyopharma_description_fr,
};
