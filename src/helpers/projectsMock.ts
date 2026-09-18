import { IProject } from '@/interfaces/api/project';
import lollapaloozaBanner from '@/assets/images/projects/lollapalooza_banner.webp';
import ecxpayBanner from '@/assets/images/projects/ecxpay_banner.png';
import rockinrioBanner from '@/assets/images/projects/rockinrio_banner.webp';
import rockinriolisboaBanner from '@/assets/images/projects/rirlisboa_banner.png';
import theTownBanner from '@/assets/images/projects/thetown_banner.webp';
import sescBanner from '@/assets/images/projects/sesc_banner.png';
import questoesBanner from '@/assets/images/projects/gran_questoes_banner.png';
import profileBanner from '@/assets/images/profile-banner.webp';

// Mock temporário até a implementação do backend
export const projectsMock: IProject[] = [
  {
    id: 1,
    title: 'Lollapalooza Brasil',
    author: 'Jera Software',
    playstoreUrl:
      'https://play.google.com/store/apps/details?id=br.com.lollapalooza.app',
    appstoreUrl:
      'https://apps.apple.com/br/app/lollapalooza-brasil/id6473182317',
    shortDescription: {
      'pt-BR':
        'Aplicativo oficial do Lollapalooza Brasil nas edições de 2024 e 2025, desenvolvido em Flutter para Android e iOS.',
      'en-US':
        'Official Lollapalooza Brasil app for the 2024 and 2025 editions, developed with Flutter for Android and iOS.',
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
      'https://play.google.com/store/apps/details?id=br.com.rockinrio.app',
    appstoreUrl: 'https://apps.apple.com/br/app/rock-in-rio/id1478184797',
    shortDescription: {
      'pt-BR':
        'Aplicativo oficial do Rock in Rio 2024, desenvolvido em Flutter para Android e iOS.',
      'en-US':
        'Official Rock in Rio 2024 app, developed with Flutter for Android and iOS.',
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
      'https://play.google.com/store/apps/details?id=br.com.thetown.app',
    appstoreUrl: 'https://apps.apple.com/br/app/the-town/id6446201849',
    shortDescription: {
      'pt-BR':
        'Aplicativo oficial do The Town nas edições de 2023 e 2025, desenvolvido em Flutter para Android e iOS.',
      'en-US':
        'Official The Town app for the 2023 and 2025 editions, developed with Flutter for Android and iOS.',
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
      'https://play.google.com/store/apps/details?id=pt.com.rockinriolisboa.app',
    appstoreUrl:
      'https://apps.apple.com/br/app/rock-in-rio-lisboa/id1505341928',
    shortDescription: {
      'pt-BR':
        'Aplicativo oficial do Rock in Rio Lisboa 2024, desenvolvido em Flutter para Android e iOS.',
      'en-US':
        'Official Rock in Rio Lisboa 2024 app, developed with Flutter for Android and iOS.',
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
      'https://play.google.com/store/apps/details?id=br.com.ecx.ecxpay',
    appstoreUrl: 'https://apps.apple.com/br/app/ecx-pay/id1631237943',
    shortDescription: {
      'pt-BR':
        'Aplicativo da plataforma ECX Pay para gerenciamento de cartões multibenefícios, com recursos voltados à experiência dos usuários.',
      'en-US':
        'ECX Pay mobile application for multi-benefit card management, with features focused on the user experience.',
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
      'https://play.google.com/store/apps/details?id=com.sesc.encontrems',
    appstoreUrl: 'https://apps.apple.com/us/app/encontre-no-sesc/id6443436934',
    shortDescription: {
      'pt-BR':
        'Aplicativo que centraliza credencial digital, programação de eventos, localização de unidades e benefícios do Sesc em uma única experiência mobile.',
      'en-US':
        'App that brings together digital credentials, event schedules, unit locations, and Sesc benefits in a single mobile experience.',
    },
    bannerUrl: sescBanner,
    technologies: [
      { id: 1, name: 'Flutter', iconUrl: '' },
      { id: 2, name: 'Dart', iconUrl: '' },
    ],
  },
  {
    id: 7,
    title: 'Gran Cursos Questões',
    author: 'Gran',
    shortDescription: {
      'pt-BR':
        'Aplicativo mobile do Gran Cursos voltado à preparação para concursos, com resolução de questões, simulados, videoaulas e acompanhamento de desempenho, desenvolvido em Flutter.',
      'en-US':
        'Gran Cursos mobile application focused on exam preparation, featuring question solving, mock exams, video lessons, and performance tracking, developed with Flutter.',
    },
    bannerUrl: questoesBanner,
    playstoreUrl:
      'https://play.google.com/store/apps/details?id=br.com.grancursosonline.questoes.app',
    appstoreUrl:
      'https://apps.apple.com/br/app/gran-cursos-quest%C3%B5es/id1509073519',
    siteUrl: 'https://questoes.grancursosonline.com.br/',
    technologies: [
      { id: 1, name: 'Flutter', iconUrl: '' },
      { id: 2, name: 'Dart', iconUrl: '' },
      { id: 3, name: 'SQFlite', iconUrl: '' },
    ],
  },
  {
    id: 8,
    title: 'Portfolio',
    author: 'Nicolas Yamada',
    shortDescription: {
      'pt-BR':
        'Você está aqui! :) Meu portfólio pessoal, desenvolvido em Vue.js e TypeScript com CI/CD automatizado via GitHub Actions.',
      'en-US':
        'You are here! :) My personal portfolio, developed with Vue.js and TypeScript with automated CI/CD via GitHub Actions.',
    },
    repoUrl: 'https://github.com/kenjiroyamada16/portfolio-front',
    siteUrl: 'https://nicyamada.com',
    bannerUrl: profileBanner,
    technologies: [
      { id: 4, name: 'Vue.js', iconUrl: '' },
      { id: 5, name: 'Typescript', iconUrl: '' },
      { id: 6, name: 'Docker', iconUrl: '' },
      { id: 7, name: 'AWS', iconUrl: '' },
      { id: 8, name: 'GitHub Actions', iconUrl: '' },
    ],
  },
];
