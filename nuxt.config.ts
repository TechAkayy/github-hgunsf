export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  modules: ['nuxt-og-image'],

  site: {
    url: 'https://example.com',
    name: 'My Site',
    // ...etc
  },

  ogImage: {
    defaults: {
      component: 'OgImage',
    },
  },
})
