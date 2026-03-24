---
title: "Fine-tuning d'ESM3 pour la biologie générative"
links:
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

Dans le cadre de mon exploration de l'IA générative appliquée à la biologie, j'ai entrepris la création de Mímir, un modèle de génération de peptides liants, en fine-tunant **ESM3**, un modèle de langage de protéines de 1,4 milliard de paramètres. L'objectif était d'entraîner le modèle à générer de nouvelles séquences liantes en se basant sur la structure 3D de protéines cibles.

Plutôt que de m'appuyer sur des tutoriels basiques, j'ai développé une pipeline de fine-tuning complète et sur-mesure. Cela a impliqué le déploiement et l'entraînement du modèle de bout en bout sur une infrastructure cloud (GPU H100 via Lightning AI). J'ai dû relever des défis d'ingénierie majeurs pour faire tenir un modèle de cette taille en mémoire, en implémentant des techniques telles que l'optimiseur AdamW 8-bit, le gradient checkpointing, Flash Attention et le bucket batching dynamique.

Au-delà de l'aspect technique, ce projet m'a permis de comprendre en profondeur le fonctionnement interne d'ESM3. J'ai appris à manipuler ses entrées multi-pistes (séquence, coordonnées 3D, accessibilité au solvant), à comprendre comment l'attention géométrique traite les relations spatiales, et à concevoir une fonction de perte (loss) personnalisée pour le "masked language modeling". Même si le modèle n'a pas totalement atteint l'objectif de "transfer learning" à cause de la complexité de représentation des structures 3D multi-domaines, mener à bien ce processus — de la préparation des données à l'exécution dans le cloud et l'analyse post-mortem — m'a apporté une expérience pratique inestimable de l'entraînement des "Large Language Models".

Le projet, incluant son document de conception et un post-mortem détaillé, est disponible sur son dépôt github.
