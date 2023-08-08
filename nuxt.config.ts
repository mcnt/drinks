export default defineNuxtConfig({
  //
  devtools: { enabled: process.env.NODE_ENV === "development" },
  //
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  //
  css: ["~/assets/scss/vine.scss"],
  //
  experimental: {
    renderJsonPayloads: false,
  },
});
