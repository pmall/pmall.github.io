---
title: "Construire un dataset propre de paires peptide-récepteur à partir de la PDB"
links:
  - "https://github.com/pmall/pdb_mldata"
  - "https://pdb-viewer-ashy.vercel.app/"
tags:
  - "python"
  - "bioinformatics"
  - "data engineering"
  - "pdb"
  - "lmdb"
  - "nextjs"
---

Dans le cadre de mon travail actuel sur une future version de Mímir, j'explore la **PDB** pour construire un dataset propre de paires peptide-récepteur destiné au machine learning.

Le projet part des entrées publiques de la **RCSB PDB** et applique des filtres structuraux conservateurs pour ne garder que des paires faciles à justifier et à auditer. Plutôt que d'essayer de corriger les cas ambigus, je préfère les rejeter et garder une logique de sélection explicite. L'objectif n'est pas seulement de collecter des structures, mais de produire un dataset fiable dont les échecs peuvent eux aussi être étudiés.

Le dataset final est stocké dans LMDB et conserve des informations structurales comme les séquences, les identités de résidus, les coordonnées atomiques, les B-factors et les valeurs d'occupation. J'ai également développé un viewer en Next.js par-dessus pour inspecter des paires de chaînes sélectionnées et explorer plus facilement le dataset.
