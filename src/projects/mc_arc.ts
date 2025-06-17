export const mc_arc_name = {
  en: "Conversation-driven multi-agent framework",
  fr: "Framework conversationnel multi-agents",
};

const mc_arc_description_en = `
I’m developing **MC Architecture** (Master of Ceremony), an experimental framework that enables multiple AI agents to engage in natural, turn-based group conversations.

Unlike traditional multi-agent systems where communication is directed by a central controller, MC Architecture lets agents take turns based on shared context—like a group chat where everyone sees the full history, but only one speaks at a time.

The framework is fully agent-agnostic and model-agnostic, serving as a lightweight wrapper around any AI library. I've demonstrated integration with PydanticAI, with intelligent participant selection to maintain a coherent dialogue flow.

Originally created for creative storytelling and simulation, the architecture also shows potential for collaborative problem-solving where context awareness and conversational dynamics are essential.

This project is an ongoing experiment in conversation-first coordination, moving beyond rigid orchestration toward more natural multi-agent interaction.`;

const mc_arc_description_fr = `
Je développe **MC Architecture** (Master of Ceremony), un framework expérimental qui permet à plusieurs agents IA de participer à des conversations de groupe naturelles, avec un tour de parole fluide et contextuel.

Contrairement aux systèmes multi-agents traditionnels, pilotés par un contrôleur central, MC Architecture adopte une approche plus organique : les agents prennent la parole à tour de rôle en fonction du contexte partagé — comme dans une discussion d’équipe où chacun suit l’historique complet, mais un seul parle à la fois.

Le framework est entièrement agnostique vis-à-vis des agents et des modèles, et fonctionne comme une couche légère au-dessus de n’importe quelle bibliothèque d’IA. J’ai notamment intégré PydanticAI, avec une sélection intelligente des intervenants pour assurer la cohérence du dialogue.

Initialement conçu pour la narration créative et les simulations interactives, ce cadre montre aussi un réel potentiel pour des scénarios de résolution collaborative, où la fluidité du dialogue et la conscience du contexte sont essentielles.

Ce projet reste une expérimentation ouverte, axée sur la coordination conversationnelle plutôt que sur des structures de contrôle rigides.`;

export const mc_arc_description = {
  en: mc_arc_description_en,
  fr: mc_arc_description_fr,
};
