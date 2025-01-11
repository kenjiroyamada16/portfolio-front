import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import Github from '@/components/icons/Github.vue'
import Linkedin from '@/components/icons/Linkedin.vue'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#111111',
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      github: Github,
      linkedin: Linkedin,
    },
    sets: {
      mdi,
    },
  },
})
