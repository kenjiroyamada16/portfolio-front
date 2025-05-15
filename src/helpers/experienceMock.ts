import { IExperience } from "@/interfaces/api/experience";
import jeraBanner from '@/assets/images/jera_banner.jpg';

export const experiencesMock: IExperience[] = [
  {
    id: 1,
    company: 'Jera',
    role: 'Desenvolvedor Flutter',
    bannerUrl: jeraBanner,
    description: '',
    startDate: '2022-11',
    finishDate: '2025-04',
    skills: []
  },
  
  {
    id: 2,
    company: 'Jera',
    role: 'Desenvolvedor Android',
    bannerUrl: jeraBanner,
    description: '',
    startDate: '2022-09',
    finishDate: '2022-11',
    skills: []
  },
  
  {
    id: 3,
    company: 'Jera',
    role: 'Desenvolvedor Full Stack',
    bannerUrl: jeraBanner,
    description: '',
    startDate: '2024-11',
    finishDate: '2025-04',
    skills: []
  }
]