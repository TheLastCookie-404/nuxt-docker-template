// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    server: {
      watch: {
        // For HMR in Docker
        usePolling: true,
        interval: 300, // ms
      },
    },
  },
});
