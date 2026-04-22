---
title: "Fine tuning d'un modèle de classification binaire"
links:
  - "https://github.com/pmall/abstracts-ppi"
tags:
  - "python"
  - "jupyter"
  - "deep learning"
  - "fine tuning"
  - "huggingface"
  - "transformers"
  - "data science"
---
J'ai utilisé un jeu de données issu de mon travail passé chez [EnyoPharma](https://enyopharma.com/fr) pour apprendre à fine-tuner un modèle. Il contient environ 80 000 abstracts de publications scientifiques annotés manuellement selon qu'ils décrivent ou non des interactions protéine-protéine.

Avec la bibliothèque [Hugging Face](https://huggingface.co), j'ai fine-tuné un modèle préentraîné en classificateur binaire. L'objectif n'était pas de construire un modèle de production, mais de parcourir tout le workflow de fine-tuning sur un cas réel et de comprendre où se situent les principaux leviers d'amélioration.

L'étude est documentée dans son dépôt GitHub et les notebooks Jupyter.
