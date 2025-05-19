export interface IExperience {
  id: number;
  company: string;
  role: string;
  bannerUrl: string;
  startDate: string;
  finishDate: string;
  description: Record<string, string>;
  skills: string[];
}