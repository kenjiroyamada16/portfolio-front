import { createI18n } from 'vue-i18n';
import ptBR from '@/locales/pt-BR.json';
import enUS from '@/locales/en-US.json';

export const i18n = createI18n({
  locale: 'pt-BR',
  legacy: false,
  globalInjection: true,
  messages: {
    'pt-BR': ptBR,
    'en-US': enUS,
  },
});
