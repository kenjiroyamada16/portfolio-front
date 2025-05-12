import { IProject } from "@/interfaces/api/project";

// Mock temporário até a implementação do backend
export const projectsMock: IProject[] = [
  {
    id: 1,
    title: "Lollapalooza Brasil",
    author: "Jera Software",
    url: "https://play.google.com/store/apps/details?id=br.com.lollapalooza.app&hl=pt_BR",
    shortDescription: "O app oficial do #LollaBR dos anos de 2024 e 2025!",
    bannerUrl: '/src/assets/images/projects/lollapalooza_banner.webp',
    technologies: [
      { id: 1, name: "Flutter", iconUrl: "" },
      { id: 2, name: "Dart", iconUrl: "" },
      { id: 3, name: "SQFlite", iconUrl: "" },
    ],
  },
  {
    id: 2,
    title: "Rock in Rio",
    author: "Jera Software",
    url: "https://play.google.com/store/apps/details?id=br.com.rockinrio.app&hl=pt_BR",
    shortDescription: "O app oficial do Rock in Rio do ano de 2024!",
    bannerUrl: '/src/assets/images/projects/rockinrio_banner.webp',
    technologies: [
      { id: 1, name: "Flutter", iconUrl: "" },
      { id: 2, name: "Dart", iconUrl: "" },
      { id: 3, name: "SQFlite", iconUrl: "" },
    ],
  },
  {
    id: 3,
    title: "The Town",
    author: "Jera Software",
    url: "https://play.google.com/store/apps/details?id=br.com.thetown.app&hl=pt_BR",
    shortDescription: "O app oficial do The Town dos anos de 2023 e 2025!",
    bannerUrl: '/src/assets/images/projects/thetown_banner.webp',
    technologies: [
      { id: 1, name: "Flutter", iconUrl: "" },
      { id: 2, name: "Dart", iconUrl: "" },
      { id: 3, name: "SQFlite", iconUrl: "" },
    ],
  },
  {
    id: 4,
    title: "Rock in Rio Lisboa",
    author: "Jera Software",
    url: "https://play.google.com/store/apps/details?id=pt.com.rockinriolisboa.app&hl=pt_BR",
    shortDescription: "O app oficial do Rock in Rio Lisboa do ano de 2024!",
    bannerUrl: '/src/assets/images/projects/rirlisboa_banner.png',
    technologies: [
      { id: 1, name: "Flutter", iconUrl: "" },
      { id: 2, name: "Dart", iconUrl: "" },
      { id: 3, name: "SQFlite", iconUrl: "" },
    ],
  },
  {
    id: 5,
    title: "ECX Pay",
    author: "Jera Software",
    url: "https://play.google.com/store/apps/details?id=br.com.ecx.ecxpay&hl=pt_BR",
    shortDescription: "O app do melhor cartão multibenefícios do mercado, aceito em milhões de estabelecimentos pelo o mundo.",
    bannerUrl: '/src/assets/images/projects/ecxpay_banner.png',
    technologies: [
      { id: 1, name: "Flutter", iconUrl: "" },
      { id: 2, name: "Dart", iconUrl: "" },
    ],
  },
  {
    id: 6,
    title: "Encontre no Sesc",
    author: "Jera Software",
    url: "https://play.google.com/store/search?q=encontre+no+sesc+ms&c=apps&hl=pt_BR",
    shortDescription: "Com o app Encontre no Sesc, você acessa sua credencial digital, confere eventos e programações das unidades, localiza comércios parceiros e aproveita descontos exclusivos.",
    bannerUrl: '/src/assets/images/projects/sesc_banner.png',
    technologies: [
      { id: 1, name: "Flutter", iconUrl: "" },
      { id: 2, name: "Dart", iconUrl: "" },
    ],
  },
]