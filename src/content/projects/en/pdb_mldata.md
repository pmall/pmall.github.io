---
title: "Building a clean peptide-receptor dataset from the PDB"
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

As part of my current work on a future version of [Mímir](#mimir), I am exploring the **PDB** to build a clean dataset of peptide-receptor pairs for machine learning.

The project starts from public **RCSB PDB** entries and applies conservative structural filters to keep only pairs that are easy to justify and audit. Instead of trying to repair ambiguous cases, I reject them and keep the selection logic explicit. The goal is not to maximize the number of samples, but to build a reliable dataset for machine learning.

The final dataset is stored in LMDB and keeps structural information such as sequences, residue identities, atom coordinates, B-factors, and occupancy values. I also built a Next.js viewer on top of it to inspect selected chain pairs and make the dataset easier to explore.
