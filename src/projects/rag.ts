export const rag_name = {
  en: "Command-line RAG pipeline for websites",
  fr: "Pipeline RAG en ligne de commande pour sites web",
};

const rag_description_en = `
I’m developing **RAG-URL**, a command-line pipeline that transforms a website into a searchable knowledge base, queried through an interactive agent.

This is a personal project to explore, step by step, the architecture of a fully agentic Retrieval-Augmented Generation (RAG) system—from web scraping to vector search to LLM-powered interaction.  

The system runs in four stages:

- **Scrape**: Crawls and extracts content into cleaned Markdown files
- **Chunk**: Uses Gemini to split content into semantically meaningful sections
- **Embed**: Embeds each chunk with Gemini and stores vectors in LanceDB
- **Agent**: A CLI chatbot built with \`pydantic-ai\`, querying the database with Gemini

The pipeline is hardwired to use Gemini models and is not yet model-agnostic or extensible.`;

const rag_description_fr = `
Je développe **RAG-URL**, un pipeline en ligne de commande qui transforme un site web en base de connaissance interrogeable via un agent conversationnel.

C’est un projet personnel visant à explorer chaque étape d’un système RAG agentique : depuis l’extraction du contenu jusqu’à la recherche sémantique et la génération de réponses avec un LLM.  

Le pipeline comprend quatre étapes :

- **Scrape** : Exploration du site et extraction du contenu en Markdown nettoyé
- **Chunk** : Segmentation sémantique avec un modèle Gemini
- **Embed** : Vectorisation avec Gemini et stockage dans LanceDB
- **Agent** : Agent interactif en ligne de commande, construit avec \`pydantic-ai\`, interrogeant la base via Gemini

Le système repose entièrement sur les modèles Gemini et n’est pas extensible pour l’instant.`;

export const rag_description = {
  en: rag_description_en,
  fr: rag_description_fr,
};
