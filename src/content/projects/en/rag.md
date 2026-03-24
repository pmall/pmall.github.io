---
title: "Command-line RAG pipeline for websites"
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
I’m developing **RAG-URL**, a command-line pipeline that transforms a website into a searchable knowledge base, queried through an interactive agent.

This is a personal project to explore, step by step, the architecture of a fully agentic Retrieval-Augmented Generation (RAG) system—from web scraping to vector search to LLM-powered interaction.  

The system runs in four stages:

- **Scrape**: Crawls and extracts content into cleaned Markdown files
- **Chunk**: Uses Gemini to split content into semantically meaningful sections
- **Embed**: Embeds each chunk with Gemini and stores vectors in LanceDB
- **Agent**: A CLI chatbot built with `pydantic-ai`, querying the database with Gemini

The pipeline is hardwired to use Gemini models and is not yet model-agnostic or extensible.
