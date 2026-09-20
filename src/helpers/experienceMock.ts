import { IExperience } from '@/interfaces/api/experience';

import jeraBanner from '@/assets/images/jera_banner.jpg';
import granBanner from '@/assets/images/gran_banner.png';

export const experiencesMock: IExperience[] = [
  {
    id: 1,
    company: 'Jera',
    role: {
      'pt-BR': 'Desenvolvedor Mobile - Flutter',
      'en-US': 'Mobile Developer - Flutter',
    },
    bannerUrl: jeraBanner,
    description: {
      'pt-BR':
        'Desenvolvimento e manutenção de aplicações mobile multiplataforma para Android e iOS, incluindo os aplicativos oficiais de eventos como Lollapalooza Brasil, Rock in Rio e The Town. Atuação em arquitetura MVVM/MVVM-C, integração com código nativo Kotlin/Swift via Method Channels, persistência local, serviços Firebase, Google Maps e automação de CI/CD com Bitrise, além da publicação dos aplicativos na App Store e Play Store.',
      'en-US':
        'Development and maintenance of cross-platform mobile applications for Android and iOS, including official apps for events such as Lollapalooza Brasil, Rock in Rio, and The Town. Experience with MVVM/MVVM-C architecture, Kotlin/Swift native integrations through Method Channels, local persistence, Firebase services, Google Maps, and CI/CD automation with Bitrise, as well as app releases on the App Store and Google Play.',
    },
    startDate: '2022-11',
    finishDate: '2025-04',
    skills: [
      'Flutter',
      'Dart',
      'MVVM-C',
      'Native Bridge',
      'Method Channels',
      'Firebase',
      'GoRouter',
      'SQFlite',
      'Google Maps SDK',
      'Bitrise',
      'Product Flavors',
    ],
  },
  {
    id: 2,
    company: 'Jera',
    role: {
      'pt-BR': 'Desenvolvedor Mobile - Android',
      'en-US': 'Mobile Developer - Android',
    },
    bannerUrl: jeraBanner,
    description: {
      'pt-BR':
        'Desenvolvimento de aplicações Android nativas utilizando Kotlin e arquitetura MVVM, com implementação de interfaces em Jetpack Compose, consumo de APIs REST, persistência local e processamento assíncrono. Experiência com injeção de dependências utilizando Koin e Hilt, Room Database, Retrofit, Coroutines e Flow, além da publicação de releases na Google Play Store.',
      'en-US':
        'Development of native Android applications using Kotlin and MVVM architecture, with reactive interfaces built with Jetpack Compose, REST API integration, local persistence, and asynchronous processing. Experience with dependency injection using Koin and Hilt, Room Database, Retrofit, Coroutines, and Flow, as well as publishing releases to the Google Play Store.',
    },
    startDate: '2021-07',
    finishDate: '2022-11',
    skills: [
      'Android',
      'Kotlin',
      'Jetpack Compose',
      'Coroutines',
      'Flow',
      'Hilt',
      'Koin',
      'Room',
      'Retrofit',
      'MVVM',
    ],
  },
  {
    id: 3,
    company: 'Jera',
    role: {
      'pt-BR': 'Desenvolvedor Full Stack',
      'en-US': 'Full Stack Developer',
    },
    bannerUrl: jeraBanner,
    description: {
      'pt-BR':
        'Atuação Full Stack em paralelo ao desenvolvimento mobile, ampliando minha experiência para aplicações web, APIs e infraestrutura. Desenvolvimento de interfaces web com Vue.js e TypeScript e APIs RESTful com Ruby on Rails, além da configuração e deploy de aplicações na AWS utilizando GitLab CI. Também desenvolvi uma API interna para automação de mensagens via WhatsApp utilizando a Evolution API, cobrindo desde a implementação do serviço até sua disponibilização em ambiente de produção.',
      'en-US':
        'Full Stack development alongside my mobile work, expanding my experience into web applications, APIs, and infrastructure. Built web interfaces with Vue.js and TypeScript and RESTful APIs with Ruby on Rails, while configuring and deploying applications on AWS using GitLab CI. I also developed an internal API for WhatsApp messaging automation using Evolution API, covering the service implementation through its deployment to production.',
    },
    startDate: '2024-11',
    finishDate: '2025-04',
    skills: [
      'Vue.js',
      'TypeScript',
      'Ruby on Rails',
      'AWS (S3/EC2)',
      'GitLab CI',
      'REST APIs',
    ],
  },
  {
    id: 4,
    company: 'GRAN',
    role: {
      'pt-BR': 'Desenvolvedor Mobile - Flutter',
      'en-US': 'Mobile Developer - Flutter',
    },
    bannerUrl: granBanner,
    description: {
      'pt-BR':
        'Desenvolvimento e evolução da aplicação mobile principal da empresa, atuando na refatoração de código legado e implementação de novas funcionalidades com Flutter e Dart. Aplicação de princípios de Clean Architecture e DDD, gerenciamento de estado e injeção de dependências com GetX, cache local com Hive DB e processamento de tarefas intensivas em background utilizando Flutter Isolates.',
      'en-US':
        "Development and evolution of the company's primary mobile application, contributing to legacy code refactoring and the implementation of new features with Flutter and Dart. Applying Clean Architecture and DDD principles, managing state and dependency injection with GetX, implementing local caching with Hive DB, and processing intensive background tasks using Flutter Isolates.",
    },
    startDate: '2025-09',
    skills: [
      'Flutter',
      'Dart',
      'Clean Architecture',
      'DDD',
      'GetX',
      'Hive DB',
      'Flutter Isolates',
    ],
  },
];
