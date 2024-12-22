export interface Constellation {
  id: string;
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  fullDescription: {
    en: string;
    es: string;
  };
  stars: number;
  image: string;
  bestViewing: {
    en: string;
    es: string;
  };
  mainStars: Array<{
    en: string;
    es: string;
  }>;
}