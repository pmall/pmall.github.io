---
title: "Fine tuning of a binary classification model"
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
I used a dataset from my past work at [EnyoPharma](https://enyopharma.com/) to learn how to fine-tune a model. It contains about 80,000 manually curated scientific publication abstracts labeled by whether they describe protein-protein interactions or not.

Using the [Hugging Face](https://huggingface.co) library, I fine-tuned a pretrained model into a binary classifier. The goal was not to build a production model, but to go through the full fine-tuning workflow on a real-world dataset and understand where the main improvement levers are.

The study is documented in its GitHub repository and Jupyter notebooks.
