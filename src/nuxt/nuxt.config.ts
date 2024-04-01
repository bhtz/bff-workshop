import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  // css: ['vuetify/lib/styles/main.sass'],
  
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    "@nuxt/content",
    "nuxt-proxy",
    // 'nuxt-oidc-auth',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  proxy: {
    options: {
      target: 'https://jsonplaceholder.typicode.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/todos': '/todos',
      },
      pathFilter: ['/api/todos']
    }
  },

  // oidc:{
  //   defaultProvider: 'oidc',
  //   providers: {
  //     keycloak: {
  //       baseUrl: 'http://localhost:8083/realms/microscope/',
  //       clientId: 'boilerplate',
  //       clientSecret: 'JxaXjmKOd08cMpaKrThAObUzeOmyRiLN',
  //       redirectUri: 'http://localhost:3000/auth/keycloak/callback',
  //       responseType: 'code',
  //       userNameClaim: 'name',
  //       scope: ['roles'],
  //     },

  //     oidc: {
  //       authorizationUrl: 'http://localhost:8083/realms/microscope/',
  //       clientId: 'boilerplate',
  //       clientSecret: 'JxaXjmKOd08cMpaKrThAObUzeOmyRiLN',
  //       responseType: 'code',
  //       tokenUrl: 'http://localhost:8083/realms/microscope/protocol/openid-connect/token',
  //       redirectUri: 'http://localhost:3000/auth/oidc/callback',
  //       userNameClaim: 'name',
  //       scope: ['roles'],
  //     }
  //   },
  // },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})