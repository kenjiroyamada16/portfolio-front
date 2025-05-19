import { IExperience } from '@/interfaces/api/experience';
import jeraBanner from '@/assets/images/jera_banner.jpg';

export const experiencesMock: IExperience[] = [
  {
    id: 1,
    company: 'Jera',
    role: 'Desenvolvedor Mobile - Flutter',
    bannerUrl: jeraBanner,
    description: {
      'pt-BR':
        'Desenvolvimento multiplataformas (Android e iOS) utilizando Flutter. MVVM/MVVM-C como architecture pattern; Consumo de APIs RESTful com Dio; Implementação de serviços do Firebase como: Messaging, Remote Config, Firebase Events, Crashlytics, Analytics e App Distribution; Comunicação com código nativo (Kotlin e Swift) por meio de Method Channels e Platform Views; Permanência de dados do usuário por meio do Shared Preferencese, SQFlite e armazenamento de sessão com Flutter Secure Storage; Navegação e tratamento de Deeplinks feitos com GoRouter; Injeção de dependências por meio do Service Locator e a biblioteca GetIt; Animações dinâmicas com a biblioteca do Lottie para Flutter; Implementação do Spotify SDK para personalização da experiência do usuário; Integração de WebViews na aplicação para visualização de sites externos e implementação de Javascript Channels para comunicação entre a WebView e o código Flutter; OAuth com bibliotecas para a realização de login com redes como Google e Facebook; Publicação para as lojas de aplicativo, Play Store e App Store; Automação para publicação e atualização do aplicativo na App Store com Bitrise e recursos personalizados de geolocalização com o Google Maps SDK para Flutter.',
      'en-US':
        'Cross-platform development (Android and iOS) using Flutter. MVVM/MVVM-C as the architecture pattern; Consumption of RESTful APIs with Dio; Implementation of Firebase services such as: Messaging, Remote Config, Firebase Events, Crashlytics, Analytics, and App Distribution; Communication with native code (Kotlin and Swift) via Method Channels and Platform Views; User data persistence through Shared Preferences, SQFlite, and session storage with Flutter Secure Storage; Navigation and Deeplink handling using GoRouter; Dependency injection via Service Locator and the GetIt library; Dynamic animations using the Lottie library for Flutter; Implementation of the Spotify SDK to personalize the user experience; Integration of WebViews in the application for external website viewing and implementation of Javascript Channels for communication between the WebView and Flutter code; OAuth with libraries for login using networks such as Google and Facebook; Publishing to app stores, Play Store and App Store; Automation for publishing and updating the app on the App Store using Bitrise, and custom geolocation features with the Google Maps SDK for Flutter.',
    },
    startDate: '2022-11',
    finishDate: '2025-04',
    skills: [
      'Flutter',
      'Dart',
      'Dio',
      'MVVM',
      'MVVM-C',
      'Native Bridge',
      'Platform Channels',
      'Method Channels',
      'Firebase',
      'Deeplinks',
      'Shared Preferences',
      'Flutter Secure Storage',
      'SQFlite / SQLite',
      'Google Maps SDK',
      'WebView',
      'Service Locator',
      'Product Flavors',
      'Unit Testing',
      'Bitrise',
      'Lottie',
      'GoRouter',
      'Spotify SDK',
      'OAuth',
      'Change Notifier',
    ],
  },

  {
    id: 2,
    company: 'Jera',
    role: 'Desenvolvedor Mobile - Android',
    bannerUrl: jeraBanner,
    description: {
      'pt-BR':
        'Desenvolvimento Android utilizando Kotlin: Injeção de dependências com Koin e Hilt, Room Database, consumo de RESTful APIs com Retrofit, Android Jetpack, Coroutines, Flows, Jetpack Compose, Configuração do Gradle e Android SDK. Além de aplicação de arquiteturas como MVVM e deploy da aplicação na Play Store.',
      'en-US':
        'Android development using Kotlin: Dependency injection with Koin and Hilt, Room Database, consumption of RESTful APIs with Retrofit, Android Jetpack, Coroutines, Flows, Jetpack Compose, Gradle and Android SDK configuration. Additionally, application of architectures such as MVVM and deployment to the Play Store.',
    },
    startDate: '2021-07',
    finishDate: '2022-11',
    skills: [
      'Android',
      'Kotlin',
      'Room',
      'Android Jetpack',
      'Android SDK',
      'MVVM',
      'Coroutines',
      'Flow',
      'Proguard R8',
      'Koin',
      'Hilt',
      'Dagger',
      'SQLite',
      'Retrofit',
      'Gson',
      'SharedPreferences',
      'Product Flavors',
    ],
  },

  {
    id: 3,
    company: 'Jera',
    role: 'Desenvolvedor Full Stack',
    bannerUrl: jeraBanner,
    description: {
      'pt-BR':
        'Desenvolvimento Full Stack paralelo ao Desenvolvimento Mobile com Flutter (realizei os dois ao mesmo tempo). Criação de interfaces utilizando Vue.js com Typescript e desenvolvimento de APIs RESTful com Ruby on Rails; Deploy de aplicações na AWS (S3 e EC2) utilizando Gitlab CI; Desenvolvimento e deploy na AWS de API interna para mensagens automatizadas via Whatsapp, consumindo a Evolution API;',
      'en-US':
        'Full Stack development in parallel with Mobile Development using Flutter (I worked on both simultaneously). UI development using Vue.js with TypeScript and RESTful API development with Ruby on Rails; Application deployment on AWS (S3 and EC2) using GitLab CI; Development and deployment on AWS of an internal API for automated WhatsApp messaging, consuming the Evolution API.',
    },
    startDate: '2024-11',
    finishDate: '2025-04',
    skills: [
      'Vue.js',
      'Ruby on Rails',
      'AWS',
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'SASS',
      'GitLab CI',
    ],
  },
];
