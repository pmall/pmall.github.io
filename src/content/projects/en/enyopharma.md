---
title: "Experience at EnyoPharma"
links:
  - "https://vinland.network"
  - "https://github.com/enyopharma/drakkar-web"
  - "https://github.com/enyopharma/vinland-web"
  - "https://github.com/enyopharma/vinland-scripts"
tags:
  - "typescript"
  - "javascript"
  - "php"
  - "perl"
  - "python"
  - "sql"
  - "reactjs"
  - "docker"
  - "database"
  - "postgresql"
  - "uniprot"
---
At [EnyoPharma](https://enyopharma.com/), I worked as a bioinformatics engineer in the R&D team, collaborating closely with biologists to study human-virus protein-protein interactions.
The biologists curated scientific publications to manually extract protein-protein interaction data.

To support this effort, I developed two full-stack applications:

- **Drakkar**: A database and web interface designed to assist biologists in curating protein-protein interactions. It provides rich web forms to populate a large PostgreSQL database with curated data.
- **Vinland**: A read-only, smaller version of the Drakkar database, offering a public web interface for querying protein-protein interactions and visualizing protein interaction networks.

Both applications share the same technology stack:
- PostgreSQL as the database
- A custom PHP backend
- A React frontend
- Containerized deployment with Docker

Additionally, I developed Perl scripts to transform the Drakkar database into Vinland.
This work and the curated data contributed to a published scientific article.

> Meyniel-Schicklin L, Amaudrut J, Mallinjoud P, et al.
> **Viruses traverse the human proteome through peptide interfaces that can be biomimetically leveraged for drug discovery.**
> Proc Natl Acad Sci U S A. 2024;121(5):e2308776121.
> [doi:10.1073/pnas.2308776121](https://pubmed.ncbi.nlm.nih.gov/38252831/)
