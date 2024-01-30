// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  
  supabase: {
    // Options
    // const sb_key: any = process.env.SUPABASE_KEY
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ]
})
