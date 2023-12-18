export default defineNuxtConfig({
  css: ['@/assets/alpine.scss'],
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],
  app: {
    head: {
      meta: [
        {
          'http-equiv': "refresh",
          content: '0; url=https://jd-solanki.github.io/'
        }
      ]
    }
  }
})
