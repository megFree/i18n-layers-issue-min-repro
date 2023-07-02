export default defineNuxtConfig({
  ssr: false,
  // if I remove "extends" all works fine
  extends: ["../base"],
  modules: [
    'init-i18n',
    '@nuxtjs/i18n'
  ],
  // or If i provide hardcoded i18n config all works fine
  i18n: {
    baseUrl: "/",
    defaultLocale: "en",
    seo: false,
    locales: [
      { code: "en", iso: "en", name: "English (en)", fallback: "en" },
      { code: "pt", iso: "pt", name: "Portuguese (pt)", fallback: "en" },
    ],
    detectBrowserLanguage: false,
  },
});
