import vuetify from './vuetify'
import router from '../router'

import type { App } from 'vue'
import { i18n } from './i18n'

export const registerPlugins = (app: App) => {
  app
    .use(i18n)
    .use(vuetify)
    .use(router)
}
