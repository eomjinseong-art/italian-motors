import type { CategoryId, Generation, Model } from "@/lib/types";

export type RawModel = {
  slug: string;
  brand: string;
  nameKo: string;
  nameEn: string;
  years: string;
  body: string;
  categories: CategoryId[];
  summary: string;
  editorial: string[];
  history: string[];
  design: string[];
  driving: string[];
  facts: string[];
  furtherReading: [string, string][];
  anecdote?: string;
  specs: [string, string][];
  sources: [string, string][];
  imageQuery: string;
  generations?: Generation[];
};

export function toModel(raw: RawModel): Model {
  return {
    slug: raw.slug,
    brand: raw.brand,
    nameKo: raw.nameKo,
    nameEn: raw.nameEn,
    years: raw.years,
    body: raw.body,
    categories: raw.categories,
    summary: raw.summary,
    editorial: raw.editorial,
    history: raw.history,
    design: raw.design,
    driving: raw.driving,
    facts: raw.facts,
    anecdote: raw.anecdote,
    imageQuery: raw.imageQuery,
    generations: raw.generations,
    furtherReading: raw.furtherReading.map(([label, href]) => ({ label, href })),
    specs: [
      { label: "생산", value: raw.years },
      { label: "차체", value: raw.body },
      ...raw.specs.map(([label, value]) => ({ label, value })),
    ],
    sources: raw.sources.map(([label, href]) => ({ label, href })),
  };
}
