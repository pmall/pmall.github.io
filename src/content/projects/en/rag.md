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
I built **RAG-URL** to explore the architecture of an agentic RAG system end to end.

It covers the full workflow from web scraping and content cleaning to semantic chunking, embeddings, vector search, and LLM-powered interaction.  

The system runs in four stages:

- **Scrape**: Crawls and extracts content into cleaned Markdown files
- **Chunk**: Uses Gemini to split content into semantically meaningful sections
- **Embed**: Embeds each chunk with Gemini and stores vectors in LanceDB
- **Agent**: A CLI chatbot built with PydanticAI, querying the database with Gemini

The pipeline is built around Gemini models and is not yet model-agnostic or extensible.
