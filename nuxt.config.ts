// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },  
      link: [
        {
          rel: 'icon',
          as: 'image',
          href: '/logos/logo.png'
        }
      ],
    }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  runtimeConfig: { 
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  },

  components: [
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components/global', pathPrefix: false },
  ],


  
})

