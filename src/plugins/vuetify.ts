import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import Github from '@/components/icons/Github.vue'
import Linkedin from '@/components/icons/Linkedin.vue'
import USFlag from '@/components/icons/USFlag.vue'
import BRFlag from '@/components/icons/BRFlag.vue'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#0b0b0b',
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
      us_flag: USFlag,
      br_flag: BRFlag,
    },
    sets: {
      mdi,
    },
  },
})
