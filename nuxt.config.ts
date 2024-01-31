// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxt/ui'],
  devtools: { enabled: true },
  supabase: { redirect: false },
  colorMode: {
    preference: 'dark'
  },
})