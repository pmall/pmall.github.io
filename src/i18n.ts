export type Locale = "en" | "fr";

// general translations.
export const subtitle = {
  en: "Tech expert, bioinformatics engineer, web and database developer",
  fr: "Expert technique, ingénieur bioinformatique, développeur web et base de données",
};

const description_en = `
I'm a web and database developer with a strong passion for science.
This interest led me to study genomics and statistics in order to work in biological research.
These days, I'm also exploring AI and blockchain through various personal projects.
`;

const description_fr = `
Je suis un développeur web et base de données, passionné de science.
Cela m’a conduit à étudier la génomique et les statistiques afin de travailler dans la recherche en biologie.
Aujourd’hui, je m’intéresse également à l’IA et à la blockchain, que j’explore à travers plusieurs projets personnels.
`;

export const description = {
  en: description_en,
  fr: description_fr,
};

export const resumeFilePath = {
  en: "/pierre-mallinjoud-resume-en.pdf",
  fr: "/pierre-mallinjoud-cv-fr.pdf",
};

export const downloadResume = {
  en: "Download my resume",
  fr: "Télécharger mon CV",
};

export const madeWith = {
  en: "Made with Nextjs and Tailwindcss",
  fr: "Fait avec Nextjs et Tailwindcss",
};

// project translations.
export * from "@/projects/crcl";
export * from "@/projects/enyopharma";
export * from "@/projects/abstracts-ppi";
export * from "@/projects/smolanalyst";
