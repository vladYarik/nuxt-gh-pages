// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  target: 'static',
  router: {
    base: '/<repository-name>/'
  }
})
