// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "modules": ['@nuxtjs/supabase', '@nuxt/ui', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/i18n', '@pinia/nuxt'],
  "devtools": {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  "supabase": { redirect: false },
  "colorMode": {
    "preference": 'light'
  },
  i18n: {
    // Module Options
    lazy: false,
    langDir: 'locales',
    strategy: 'prefix',
    locales: [
      { code: 'en', name: "English", flag: "🇺🇸", iso: 'en-US', file: 'en-US.json' },
      { code: 'pl', name: "Polski", flag: "🇵🇱", iso: 'pl-PL', file: 'pl-PL.json' },
    ],
    defaultLocale: 'en',
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