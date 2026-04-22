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
I created **MC Architecture** (Master of Ceremony) as an experiment in multi-agent conversations.

Instead of relying on a central controller to direct every exchange, MC Architecture lets agents take turns based on shared context. The interaction model is closer to a group chat where every participant sees the same history, but only one speaks at a time.

The framework is both agent-agnostic and model-agnostic, and acts as a lightweight wrapper around existing AI libraries. I integrated it with PydanticAI, including participant selection logic to keep the dialogue coherent.

I originally created it for creative storytelling and simulation, but it also looked promising for collaborative problem-solving where context awareness and conversational dynamics matter.
