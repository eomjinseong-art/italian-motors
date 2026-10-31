export const CATEGORIES = [
  { id: "sports", label: "스포츠카" },
  { id: "gt", label: "그랜드 투어러" },
  { id: "supercar", label: "슈퍼카" },
  { id: "sedan", label: "세단" },
  { id: "city", label: "소형차" },
  { id: "suv", label: "SUV" },
  { id: "ev", label: "전기차" },
  { id: "rally", label: "랠리" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type Generation = {
  id: string;
  heading: string;
  years: string;
  code?: string;
  summary: string;
  points: string[];
};

export type ModelVideo = {
  /** Verified YouTube video ID. */
  videoId: string;
  title: string;
  channel: string;
};

export type Model = {
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
  furtherReading: { label: string; href: string }[];
  anecdote?: string;
  specs: { label: string; value: string }[];
  sources: { label: string; href: string }[];
  imageQuery: string;
  generations?: Generation[];
  video?: ModelVideo;
};

export type Brand = {
  slug: string;
  nameKo: string;
  nameEn: string;
  status: "current" | "defunct";
  founded: string;
  ended?: string;
  hq: string;
  summary: string;
  editorial: string[];
  imageQuery: string;
};

export type WikiImage = {
  url: string;
  pageUrl: string;
  author: string;
  license: string;
  licenseUrl?: string;
  title: string;
};

export type FilmCar = {
  id: string;
  filmKo: string;
  filmEn: string;
  year: number;
  medium: "영화" | "TV 시리즈" | "애니메이션";
  carKo: string;
  carEn: string;
  driver: string;
  note: string;
  modelSlug: string;
  source: { label: string; href: string };
};
