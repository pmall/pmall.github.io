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
Je développe **RAG-URL**, un pipeline en ligne de commande qui transforme un site web en base de connaissance interrogeable via un agent conversationnel.

C’est un projet personnel visant à explorer chaque étape d’un système RAG agentique : depuis l’extraction du contenu jusqu’à la recherche sémantique et la génération de réponses avec un LLM.  

Le pipeline comprend quatre étapes :

- **Scrape** : Exploration du site et extraction du contenu en Markdown nettoyé
- **Chunk** : Segmentation sémantique avec un modèle Gemini
- **Embed** : Vectorisation avec Gemini et stockage dans LanceDB
- **Agent** : Agent interactif en ligne de commande, construit avec `pydantic-ai`, interrogeant la base via Gemini

Le système repose entièrement sur les modèles Gemini et n’est pas extensible pour l’instant.
