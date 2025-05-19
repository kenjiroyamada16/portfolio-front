import { IProject } from '@/interfaces/api/project';
import lollapaloozaBanner from '@/assets/images/projects/lollapalooza_banner.webp';
import ecxpayBanner from '@/assets/images/projects/ecxpay_banner.png';
import rockinrioBanner from '@/assets/images/projects/rockinrio_banner.webp';
import rockinriolisboaBanner from '@/assets/images/projects/rirlisboa_banner.png';
import theTownBanner from '@/assets/images/projects/thetown_banner.webp';
import sescBanner from '@/assets/images/projects/sesc_banner.png';
import profileBanner from '@/assets/images/profile-banner.webp';

// Mock temporário até a implementação do backend
export const projectsMock: IProject[] = [
  {
    id: 1,
    title: 'Lollapalooza Brasil',
    author: 'Jera Software',
    playstoreUrl:
      'https://play.google.com/store/apps/details?id=br.com.lollapalooza.app&hl=pt_BR',
    appstoreUrl:
      'https://apps.apple.com/br/app/lollapalooza-brasil/id6473182317',
    shortDescription: {
      'pt-BR': 'O app oficial do #LollaBR dos anos de 2024 e 2025!',
      'en-US': 'The official #LollaBR app for the years 2024 and 2025!',
    },
    bannerUrl: lollapaloozaBanner,
    technologies: [
      { id: 1, name: 'Flutter', iconUrl: '' },
      { id: 2, name: 'Dart', iconUrl: '' },
      { id: 3, name: 'SQFlite', iconUrl: '' },
    ],
  },
  {
    id: 2,
    title: 'Rock in Rio',
    author: 'Jera Software',
    playstoreUrl:
      'https://play.google.com/store/apps/details?id=br.com.rockinrio.app&hl=pt_BR',
    appstoreUrl: 'https://apps.apple.com/br/app/rock-in-rio/id1478184797',
    shortDescription: {
      'pt-BR': 'O app oficial do Rock in Rio do ano de 2024!',
      'en-US': 'The official Rock in Rio app for the year 2024!',
    },
    bannerUrl: rockinrioBanner,
    technologies: [
      { id: 1, name: 'Flutter', iconUrl: '' },
      { id: 2, name: 'Dart', iconUrl: '' },
      { id: 3, name: 'SQFlite', iconUrl: '' },
    ],
  },
  {
    id: 3,
    title: 'The Town',
    author: 'Jera Software',
    playstoreUrl:
      'https://play.google.com/store/apps/details?id=br.com.thetown.app&hl=pt_BR',
    appstoreUrl: 'https://apps.apple.com/br/app/the-town/id6446201849',
    shortDescription: {
      'pt-BR': 'O app oficial do The Town dos anos de 2023 e 2025!',
      'en-US': 'The official The Town app for the years 2023 and 2025!',
    },
    bannerUrl: theTownBanner,
    technologies: [
      { id: 1, name: 'Flutter', iconUrl: '' },
      { id: 2, name: 'Dart', iconUrl: '' },
      { id: 3, name: 'SQFlite', iconUrl: '' },
    ],
  },
  {
    id: 4,
    title: 'Rock in Rio Lisboa',
    author: 'Jera Software',
    playstoreUrl:
      'https://play.google.com/store/apps/details?id=pt.com.rockinriolisboa.app&hl=pt_BR',
    appstoreUrl:
      'https://apps.apple.com/br/app/rock-in-rio-lisboa/id1505341928',
    shortDescription: {
      'pt-BR': 'O app oficial do Rock in Rio Lisboa do ano de 2024!',
      'en-US': 'The official Rock in Rio Lisboa app for the year 2024!',
    },
    bannerUrl: rockinriolisboaBanner,
    technologies: [
      { id: 1, name: 'Flutter', iconUrl: '' },
      { id: 2, name: 'Dart', iconUrl: '' },
      { id: 3, name: 'SQFlite', iconUrl: '' },
    ],
  },
  {
    id: 5,
    title: 'ECX Pay',
    author: 'Jera Software',
    playstoreUrl:
      'https://play.google.com/store/apps/details?id=br.com.ecx.ecxpay&hl=pt_BR',
    appstoreUrl: 'https://apps.apple.com/br/app/ecx-pay/id1631237943',
    shortDescription: {
      'pt-BR':
        'O app do melhor cartão multibenefícios do mercado, aceito em milhões de estabelecimentos pelo o mundo.',
      'en-US':
        'The app for the best multi-benefit card on the market, accepted in millions of establishments around the world.',
    },
    bannerUrl: ecxpayBanner,
    technologies: [
      { id: 1, name: 'Flutter', iconUrl: '' },
      { id: 2, name: 'Dart', iconUrl: '' },
    ],
  },
  {
    id: 6,
    title: 'Encontre no Sesc',
    author: 'Jera Software',
    playstoreUrl:
      'https://play.google.com/store/search?q=encontre+no+sesc+ms&c=apps&hl=pt_BR',
    appstoreUrl: 'https://apps.apple.com/us/app/encontre-no-sesc/id6443436934',
    shortDescription: {
      'pt-BR':
        'Com o app Encontre no Sesc, você acessa sua credencial digital, confere eventos e programações das unidades, localiza comércios parceiros e aproveita descontos exclusivos.',
      'en-US':
        'With the Encontre no Sesc app, you can access your digital ID, check events and schedules at Sesc units, locate partner businesses, and enjoy exclusive discounts.',
    },
    bannerUrl: sescBanner,
    technologies: [
      { id: 1, name: 'Flutter', iconUrl: '' },
      { id: 2, name: 'Dart', iconUrl: '' },
    ],
  },
  {
    id: 7,
    title: 'Portfolio',
    author: 'Nicolas Yamada',
    shortDescription: {
      'pt-BR': 'Você está aqui! :)',
      'en-US': 'You are here! :)',
    },
    repoUrl: 'https://github.com/kenjiroyamada16/portfolio-front',
    siteUrl: 'https://nicyamada.com',
    bannerUrl: profileBanner,
    technologies: [
      { id: 4, name: 'Vue.js', iconUrl: '' },
      { id: 5, name: 'Typescript', iconUrl: '' },
      { id: 6, name: 'Docker', iconUrl: '' },
      { id: 7, name: 'AWS', iconUrl: '' },
    ],
  },
];
