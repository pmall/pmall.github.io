---
title: "Framework conversationnel multi-agents"
links:
  - "https://github.com/pmall/mc-arc"
tags:
  - "python"
  - "ai agent"
  - "llm"
  - "prompting"
  - "openai"
  - "anthropic"
  - "gemini"
  - "pydantic-ai"
---
J'ai créé **MC Architecture** (Master of Ceremony) comme une expérimentation autour des conversations multi-agents.

Plutôt que de s'appuyer sur un contrôleur central qui orchestre chaque échange, MC Architecture laisse les agents prendre la parole à tour de rôle en fonction du contexte partagé. Le modèle d'interaction se rapproche d'une discussion de groupe où tous les participants voient le même historique, mais un seul parle à la fois.

Le framework est agnostique vis-à-vis des agents comme des modèles et fonctionne comme une couche légère au-dessus de bibliothèques d'IA existantes. Je l'ai intégré à PydanticAI, avec une logique de sélection des intervenants pour garder un dialogue cohérent.

Je l'ai d'abord conçu pour la narration créative et les simulations, mais il montrait aussi un vrai potentiel pour des scénarios de résolution collaborative où le contexte partagé et la dynamique conversationnelle comptent.
