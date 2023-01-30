// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Maryam Noor',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'Portfolio site' }
          ],

        }
    },
    modules: ['@nuxt/content'],
    content: {
        highlight: {
            theme: "github-light"
        }
    },
     components: true,
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
})
