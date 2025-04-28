import { IProject } from "@/interfaces/api/project";
import lollapaloozaBanner from "@/assets/images/projects/lollapalooza_banner.png";
import ecxpayBanner from "@/assets/images/projects/ecxpay_banner.png";
import rockinrioBanner from "@/assets/images/projects/rockinrio_banner.png";
import rockinriolisboaBanner from "@/assets/images/projects/rirlisboa_banner.png";
import theTownBanner from "@/assets/images/projects/thetown_banner.png";
import sescBanner from "@/assets/images/projects/sesc_banner.png";

// Mock temporário até a implementação do backend
export const projectsMock: IProject[] = [
  {
    id: 1,
    title: "Lollapalooza Brasil",
    author: "Jera Software",
    shortDescription: "O app oficial do #LollaBR dos anos de 2024 e 2025!",
    bannerUrl: lollapaloozaBanner,
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
    shortDescription: "O app oficial do Rock in Rio do ano de 2024!",
    bannerUrl: rockinrioBanner,
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
    shortDescription: "O app oficial do The Town dos anos de 2023 e 2025!",
    bannerUrl: theTownBanner,
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
    shortDescription: "O app oficial do Rock in Rio Lisboa do ano de 2024!",
    bannerUrl: rockinriolisboaBanner,
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
    shortDescription: "O app do melhor cartão multibenefícios do mercado, aceito em milhões de estabelecimentos pelo o mundo.",
    bannerUrl: ecxpayBanner,
    technologies: [
      { id: 1, name: "Flutter", iconUrl: "" },
      { id: 2, name: "Dart", iconUrl: "" },
    ],
  },
  {
    id: 6,
    title: "Encontre no Sesc",
    author: "Jera Software",
    shortDescription: "Com o app Encontre no Sesc, você acessa sua credencial digital, confere eventos e programações das unidades, localiza comércios parceiros e aproveita descontos exclusivos.",
    bannerUrl: sescBanner,
    technologies: [
      { id: 1, name: "Flutter", iconUrl: "" },
      { id: 2, name: "Dart", iconUrl: "" },
    ],
  },
]