export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@vueuse/motion'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Zin Maung Nyunt | Full-Stack Developer',
      meta: [
        {
          name: 'description',
          content: 'Professional Portfolio of Zin Maung Nyunt, a Full-Stack Developer specializing in Laravel and Vue.'
        },
        {
          property: 'og:title',
          content: 'Zin Maung Nyunt | Full-Stack Developer'
        },
        {
          property: 'og:description',
          content: 'Check out my projects and technical skills in Backend & Frontend development.'
        },
      ]
    }
  }
})