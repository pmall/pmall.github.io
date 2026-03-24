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
Dans le cadre de mon exploration de l'IA, j'ai entrepris un projet personnel afin d'apprendre à fine-tuner un modèle.
J'ai utilisé un jeu de données d'environ 80 000 abstracts de publications scientifiques annotés manuellement lors de mon travail chez EnyoPharma.
Chaque abstract est étiqueté selon qu'il provient ou non d'une publication décrivant des interactions protéine-protéine.
Je pense que ce jeu de données constitue un excellent cas d'application réel pour s'entraîner au fine-tuning.

Pour mener cette étude, j'ai utilisé la bibliothèque [Huggingface](https://huggingface.co) afin de fine-tuner un modèle préentraîné en classificateur binaire.
L'objectif n'est pas de produire un modèle parfait mais d'explorer l'ensemble du processus de fine-tuning, de comprendre chaque étape et d'étudier des solutions pour améliorer le modèle.

L'étude est documentée dans son dépôt github et les notebooks jupyter.
