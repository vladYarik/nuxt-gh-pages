// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  target: 'static',
  mode: 'spa',
  router: {
    base: '/nuxt-gh-pages/'
  },
})
