import { ITechnology } from "./technology";

export interface IProject {
  id: number;
  title: string;
  author: string;
  repoUrl?: string,
  playstoreUrl?: string,
  appstoreUrl?: string,
  siteUrl?: string,
  shortDescription: Record<string, string>;
  bannerUrl: string;
  technologies: ITechnology[];
}