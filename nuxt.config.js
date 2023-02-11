export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-mail'],
  build: {
    transpile: ['gsap'],
  },
  css: ['~/assets/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  mail: {
    message: {
      to: 'chris.teyerl@cosamey.com',
    },
    smtp: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    },
  },
});
