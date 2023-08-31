export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  modules: ['nuxt-og-image'],

  ogImage: {
    defaults: {
      component: 'OgImage',
    },
  },
});
