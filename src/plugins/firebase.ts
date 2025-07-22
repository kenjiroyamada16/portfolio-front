import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'portfolio-b6166.firebaseapp.com',
  projectId: 'portfolio-b6166',
  storageBucket: 'portfolio-b6166.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: 'G-0KZGXMMF8J',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const triggerEvent = (
  eventName: string,
  eventParams?: Record<string, string>,
) => {
  logEvent(analytics, eventName, eventParams);
};

export enum FirebaseEventsNames {
  appbarItem = 'clicou_item_appbar',
  socialLink = 'clicou_perfil_site',
  viewProject = 'acessou_projeto',
  viewProjectRepo = 'acessou_repositorio_projeto',
  viewExperience = 'visualizou_experiencia_profissional',
  viewCertificate = 'acessou_certificado',
  copyEmail = 'copiou_email_area_transferencia',
  viewRepository = 'acessou_repositorio',
  changeLocale = 'alterou_idioma',
  mailto = 'clicou_enviar_email',
  downloadCv = 'baixou_curriculo',
}

export enum FirebaseEventsParams {
  appbarItem = 'secao',
  socialLink = 'site',
  projectName = 'projeto',
  projectUrl = 'url_projeto',
  projectRepoUrl = 'url_repositorio_projeto',
  experienceName = 'experiencia',
  certificateUrl = 'url_certificado',
  locale = 'idioma',
}
