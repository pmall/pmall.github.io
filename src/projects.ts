import * as i18n from "@/i18n";
import type { Locale } from "@/i18n";

export type Project = {
  name: string;
  description: string;
  links: string[];
  tags: string[];
};

export function getProjects(locale: Locale) {
  return projects.map((project) => ({
    ...project,
    name: project.name[locale],
    description: project.description[locale],
  }));
}

const projects = [
  {
    name: i18n.enyopharma_name,
    description: i18n.enyopharma_description,
    links: [
      "https://vinland.network",
      "https://github.com/enyopharma/drakkar-web",
      "https://github.com/enyopharma/vinland-web",
      "https://github.com/enyopharma/vinland-scripts",
    ],
    tags: [
      "typescript",
      "javascript",
      "php",
      "perl",
      "python",
      "sql",
      "reactjs",
      "docker",
      "database",
      "postgresql",
      "uniprot",
    ],
  },
  {
    name: i18n.crcl_name,
    description: i18n.crcl_description,
    links: ["https://fasterdb.ens-lyon.fr/"],
    tags: [
      "perl",
      "R",
      "sql",
      "mysql",
      "genbank",
      "microarrays",
      "affymetrix",
      "blast",
    ],
  },
  {
    name: i18n.abstracts_ppi_name,
    description: i18n.abstracts_ppi_description,
    links: ["https://github.com/pmall/abstracts-ppi"],
    tags: [
      "python",
      "jupyter",
      "deep learning",
      "fine tuning",
      "huggingface",
      "transformers",
      "data science",
    ],
  },
  {
    name: i18n.smolanalyst_name,
    description: i18n.smolanalyst_description,
    links: [
      "https://github.com/pmall/smolanalyst",
      "https://github.com/pmall/novagent",
    ],
    tags: [
      "python",
      "pandas",
      "matplotlib",
      "ai agent",
      "llm",
      "huggingface",
      "smolagents",
      "data science",
    ],
  },
];
