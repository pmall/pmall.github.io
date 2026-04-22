---
title: "Fine-tuning d'ESM3 pour la biologie générative"
links:
  - "https://www.evolutionaryscale.ai/"
  - "https://github.com/pmall/mimir"
tags:
  - "python"
  - "pytorch"
  - "esm3"
  - "deep learning"
  - "fine tuning"
  - "llm"
  - "cloud"
---

En explorant l'IA générative appliquée à la biologie, j'ai cherché à créer **Mímir**, un modèle capable de générer de nouveaux peptides liants à partir de la structure 3D de protéines cibles. Il repose sur un fine-tuning d'[ESM3](https://www.evolutionaryscale.ai/), un modèle de langage protéique de 1,4 milliard de paramètres. J'ai développé toute la pipeline d'entraînement moi-même, de la préparation des données à l'entraînement et à l'évaluation sur GPU dans le cloud.

Plutôt que de m'appuyer sur des tutoriels basiques, j'ai développé une pipeline de fine-tuning complète et sur-mesure. Cela a impliqué le déploiement et l'entraînement du modèle de bout en bout sur une infrastructure cloud (GPU H100 via Lightning AI). J'ai dû relever des défis d'ingénierie majeurs pour faire tenir un modèle de cette taille en mémoire, en implémentant des techniques telles que l'optimiseur AdamW 8-bit, le gradient checkpointing, Flash Attention et le bucket batching dynamique.

Au-delà de l'aspect technique, ce projet m'a permis de comprendre en profondeur le fonctionnement interne d'[ESM3](https://www.evolutionaryscale.ai/). J'ai appris à manipuler ses entrées multi-pistes (séquence, coordonnées 3D, accessibilité au solvant), à comprendre comment l'attention géométrique traite les relations spatiales, et à concevoir une fonction de perte (loss) personnalisée pour le "masked language modeling". Même si le modèle n'a pas totalement atteint l'objectif de "transfer learning" à cause de la complexité de représentation des structures 3D multi-domaines, mener à bien ce processus - de la préparation des données à l'exécution dans le cloud et l'analyse post-mortem - m'a apporté une expérience pratique inestimable de l'entraînement des "Large Language Models".

Le projet, incluant son document de conception et un post-mortem détaillé, est disponible sur son dépôt GitHub.
