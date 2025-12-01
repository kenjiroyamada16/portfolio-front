export interface IExperience {
  id: number;
  company: string;
  role: Record<string, string>;
  bannerUrl: string;
  startDate: string;
  finishDate?: string;
  description: Record<string, string>;
  skills: string[];
}