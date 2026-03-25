---
title: "Expérience au CRCL"
links:
  - "https://fasterdb.ens-lyon.fr/"
tags:
  - "perl"
  - "R"
  - "sql"
  - "mysql"
  - "genbank"
  - "microarrays"
  - "affymetrix"
  - "blast"
---
Au [CRCL](https://www.crcl.fr/) (Centre de Recherche en Cancérologie de Lyon), j'ai conçu une base de données répertoriant les événements d'épissage alternatif des génomes humain et souris.
Pour cela, je suis parti des séquences d'ARN messager disponibles dans **GenBank**, que j'ai alignées sur les génomes de référence humain et souris.

J’ai ensuite mappé les sondes des puces Affymetrix exon array sur cette annotation.
Cela m’a permis de créer une autre base de données recensant les données d'expression différentielle des événements d'épissage issues de nombreuses expériences, à la fois publiques et internes au laboratoire.

Ce travail a contribué à une publication scientifique et est accessible en ligne à l'adresse suivante : [FASTERDB](https://fasterdb.ens-lyon.fr/).

> Mallinjoud P, Villemin JP, Mortada H, et al.
> **Endothelial, epithelial, and fibroblast cells exhibit specific splicing programs independently of their tissue of origin.**
> Genome Res. 2014;24(3):511-521.
> [doi:10.1101/gr.162933.113](https://pubmed.ncbi.nlm.nih.gov/24307554/)
