import { ITechnology } from "./technology";

export interface IProject {
  id: number;
  title: string;
  author: string;
  shortDescription: string;
  bannerUrl: string;
  technologies: ITechnology[];
}