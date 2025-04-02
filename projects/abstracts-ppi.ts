export const abstracts_ppi_name = {
  en: "Fine tuning of a binary classification model",
  fr: "Fine tuning d'un modele de classification binaire",
};

const abstracts_ppi_description_en = `
As part of my exploration into AI, I undertook a side project to learn how to fine-tune a model.
I used a dataset of approximately 80,000 manually curated scientific publication abstracts from my past work at EnyoPharma.
Each abstract is labeled based on whether it comes from a publication describing protein-protein interactions or not.
I believe this dataset provides a highly relevant real-world example for practicing fine-tuning.

To conduct this study, I used the [Huggingface](https://huggingface.co) library to fine-tune a pretrained model into a binary classifier.
The goal is not to create a perfect model but to go through the entire fine-tuning process, understand each step involved, and explore potential ways to improve the model.

The study is documented in its github repository and jupyter notebooks.`;

const abstracts_ppi_description_fr = `
Dans le cadre de mon exploration de l'IA, j'ai entrepris un projet personnel afin d'apprendre à fine-tuner un modèle.
J'ai utilisé un jeu de données d'environ 80 000 abstracts de publications scientifiques annotés manuellement lors de mon travail chez EnyoPharma.
Chaque abstract est étiqueté selon qu'il provient ou non d'une publication décrivant des interactions protéine-protéine.
Je pense que ce jeu de données constitue un excellent cas d'application réel pour s'entraîner au fine-tuning.

Pour mener cette étude, j'ai utilisé la bibliothèque [Huggingface](https://huggingface.co) afin de fine-tuner un modèle préentraîné en classificateur binaire.
L'objectif n'est pas de produire un modèle parfait mais d'explorer l'ensemble du processus de fine-tuning, de comprendre chaque étape et d'étudier des solutions pour améliorer le modèle.

L'étude est documentée dans son dépôt github et les notebooks jupyter.`;

export const abstracts_ppi_description = {
  en: abstracts_ppi_description_en,
  fr: abstracts_ppi_description_fr,
};
