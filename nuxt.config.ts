// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Lab',
      meta: [
        {
          name: 'description',
          content: 'This is a repository for experimenting with Nuxt.js'
        }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@pinia/nuxt']
})
