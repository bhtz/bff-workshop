import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({ 
    ssr: true,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.green.darken3, 
            secondary: colors.red.lighten4,
          }
        },
      },
    }
  });
  app.vueApp.use(vuetify)
})