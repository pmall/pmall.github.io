---
title: "Fine tuning ESM3 for generative biology"
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

As part of my exploration into generative AI for biology, I undertook a project to build Mímir, a generative peptide binder model, by fine-tuning **ESM3**, a 1.4-billion parameter protein language model. The goal was to train the model to generate novel binding sequences based on target protein 3D structures.

Rather than relying on high-level wrappers or basic tutorials, I developed a complete, custom fine-tuning pipeline from scratch. This involved deploying and training the model end-to-end on cloud infrastructure using a Lightning AI H100 GPU. I had to navigate significant engineering challenges to fit a model of this size into memory, implementing techniques like 8-bit AdamW, gradient checkpointing, Flash Attention, and dynamic bucket batching.

Beyond the engineering, this project allowed me to deeply understand the inner workings of ESM3. I learned how to handle its multi-track input design (sequence, 3D coordinates, and solvent accessibility), how geometric attention processes spatial relationships, and how to design custom loss functions for masked language modeling. Even though the model didn’t fully achieve generalized transfer learning due to the complexities of multi-domain structural representations, going through the entire process—from data pipeline to cloud execution and post-mortem analysis—gave me invaluable hands-on experience with large-scale model training.

The project, including its design document and a detailed post-mortem, is available on its GitHub repository.
