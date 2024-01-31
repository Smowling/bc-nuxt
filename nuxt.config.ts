// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  supabase: {
    redirect: false,
  },
  modules: ['@nuxtjs/supabase', '@nuxt/ui']
})