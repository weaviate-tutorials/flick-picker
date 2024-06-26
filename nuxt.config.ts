// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
      host: process.env.NUXT_WEAVIATE_HOST_URL || '',
      key: process.env.NUXT_WEAVIATE_ADMIN_KEY || '',
      palm: process.env.NUXT_GOOGLE_API_KEY || '',
      openai: process.env.NUXT_OPENAI_API_KEY || '',
      public: {
         openai: process.env.NUXT_OPENAI_API_KEY || '',
         palm: process.env.NUXT_GOOGLE_API_KEY || '',
         
        },
      },
    },
)
