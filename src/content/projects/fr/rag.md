---
title: "Pipeline RAG en ligne de commande pour sites web"
links:
  - "https://github.com/pmall/rag-url"
tags:
  - "python"
  - "ai agent"
  - "rag"
  - "llm"
  - "prompting"
  - "gemini"
  - "pydantic-ai"
  - "lancedb"
---
J'ai créé **RAG-URL** pour explorer l'architecture complète d'un système RAG agentique.

Le projet couvre tout le workflow, depuis l'extraction et le nettoyage du contenu jusqu'au découpage sémantique, aux embeddings, à la recherche vectorielle et à la génération de réponses avec un LLM.  

Le pipeline comprend quatre étapes :

- **Scrape** : Exploration du site et extraction du contenu en Markdown nettoyé
- **Chunk** : Segmentation sémantique avec un modèle Gemini
- **Embed** : Vectorisation avec Gemini et stockage dans LanceDB
- **Agent** : Agent interactif en ligne de commande, construit avec PydanticAI, interrogeant la base via Gemini

Le pipeline repose entièrement sur les modèles Gemini et n’est pas encore agnostique ni extensible.
