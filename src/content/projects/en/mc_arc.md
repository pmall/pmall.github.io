---
title: "Conversation-driven multi-agent framework"
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
I’m developing **MC Architecture** (Master of Ceremony), an experimental framework that enables multiple AI agents to engage in natural, turn-based group conversations.

Unlike traditional multi-agent systems where communication is directed by a central controller, MC Architecture lets agents take turns based on shared context—like a group chat where everyone sees the full history, but only one speaks at a time.

The framework is fully agent-agnostic and model-agnostic, serving as a lightweight wrapper around any AI library. I've demonstrated integration with PydanticAI, with intelligent participant selection to maintain a coherent dialogue flow.

Originally created for creative storytelling and simulation, the architecture also shows potential for collaborative problem-solving where context awareness and conversational dynamics are essential.

This project is an ongoing experiment in conversation-first coordination, moving beyond rigid orchestration toward more natural multi-agent interaction.
