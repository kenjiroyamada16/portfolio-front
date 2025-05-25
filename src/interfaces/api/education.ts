export enum EducationCategory {
  formation = 0,
  certificate = 1,
}

export interface IEducation {
  id: number;
  institution: string;
  title: Record<string, string>;
  startDate: string;
  url?: string;
  finishDate: string;
  isCertificate: boolean;
  description?: Record<string, string>;
}
