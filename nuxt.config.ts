// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "modules": ['@nuxtjs/supabase', '@nuxt/ui', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/i18n'],
  "devtools": { enabled: true },
  "supabase": { redirect: false },
  "colorMode": {
    "preference": 'light'
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})