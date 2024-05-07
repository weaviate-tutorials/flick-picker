// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
      host: process.env.NUXT_WEAVIATE_URL || '',
      key: process.env.NUXT_WEAVIATE_API_KEY || '',
      palm: process.env.NUXT_VERTEX_PALM_API_KEY || '',
      openai: process.env.NUXT_OPENAI_API_KEY || '',

      public: {
         openai: process.env.NUXT_OPENAI_API_KEY || '',
         palm: process.env.NUXT_VERTEX_PALM_API_KEY || '',
         
        },
      },
    },
)
